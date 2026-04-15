/**
 * TikTok SSL Pinning Bypass - Frida Script
 * Author: MUHAMMAD SHAKIB
 * GitHub: https://github.com/0XSHAK1B
 */

const TAG = "SSLBypass";

function log(msg) {
    console.log(msg);
    Java.perform(() => {
        Java.use("android.util.Log").v(TAG, msg);
    });
}

function awaitLibrary(name) {
    return new Promise((done) => {
        let timer = setInterval(() => {
            let mod = Process.findModuleByName(name);
            if (mod) {
                clearInterval(timer);
                done(mod);
            }
        }, 0);
    });
}

function patchVerifyCallback(cb) {
    let fn = new NativeFunction(cb, "int", ["pointer", "pointer"]);
    Interceptor.attach(fn, {
        onLeave(ret) {
            ret.replace(0);
        }
    });
}

function bypassCustomVerify(mod) {
    let sym = "SSL_CTX_set_custom_verify";
    try {
        let addr = Module.getExportByName(mod.name, sym);
        let original = new NativeFunction(addr, "void", ["pointer", "int", "pointer"]);

        Interceptor.replace(original, new NativeCallback((ctx, mode, cb) => {
            patchVerifyCallback(cb);
            original(ctx, mode, cb);
        }, "void", ["pointer", "int", "pointer"]));

        log(`[+] ${sym} hooked in ${mod.name}`);
    } catch (e) {
        log(`[-] ${sym} failed in ${mod.name}: ${e}`);
    }
}

// --- Native hooks ---

log("[*] TikTok SSL Bypass by 0XSHAK1B");

const targetLibs = ["libttboringssl.so", "libsscronet.so"];

targetLibs.forEach((libName) => {
    log(`[~] Waiting for ${libName}...`);
    awaitLibrary(libName).then((mod) => {
        log(`[+] Loaded ${libName} @ ${mod.base}`);
        bypassCustomVerify(mod);
    });
});

// --- Java hooks ---

Java.perform(() => {
    // Conscrypt TrustManager bypass
    try {
        let TrustManagerImpl = Java.use("com.android.org.conscrypt.TrustManagerImpl");
        if (TrustManagerImpl.checkTrustedRecursive) {
            TrustManagerImpl.checkTrustedRecursive.implementation = function() {
                return Java.use("java.util.ArrayList").$new();
            };
            log("[+] checkTrustedRecursive patched");
        }
    } catch (e) {
        log("[-] checkTrustedRecursive hook failed");
    }

    // SSLContext.init bypass
    try {
        let X509TM = Java.use("javax.net.ssl.X509TrustManager");
        let SSLCtx = Java.use("javax.net.ssl.SSLContext");

        let EmptyTM = Java.registerClass({
            name: "com.bypass.sslunpin",
            implements: [X509TM],
            methods: {
                checkClientTrusted(chain, auth) {},
                checkServerTrusted(chain, auth) {},
                getAcceptedIssuers() { return []; }
            }
        });

        let trustAll = [EmptyTM.$new()];
        let initMethod = SSLCtx.init.overload(
            "[Ljavax.net.ssl.KeyManager;",
            "[Ljavax.net.ssl.TrustManager;",
            "java.security.SecureRandom"
        );

        initMethod.implementation = function(km, tm, sr) {
            initMethod.call(this, km, trustAll, sr);
        };

        log("[+] SSLContext.init patched");
    } catch (e) {
        log("[-] SSLContext.init hook failed");
    }
});
