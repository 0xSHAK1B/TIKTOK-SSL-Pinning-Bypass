<div align="center">

# 🔓 TikTok Android SSL Pinning Bypass

### Intercept, capture & analyze TikTok's HTTPS traffic on Android — no root · 2026

<br>

[![Download APK](https://img.shields.io/badge/⬇_DOWNLOAD_APK_v46.5.3-ff0050?style=for-the-badge&logo=tiktok&logoColor=white)](../../releases/latest)
[![Telegram](https://img.shields.io/badge/Chat_on_Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/MUH4MM4DSH4KIB)

![Android](https://img.shields.io/badge/Android_10--14+-3DDC84?style=flat-square&logo=android&logoColor=white)
![ARM64](https://img.shields.io/badge/arm64--v8a-blue?style=flat-square)
![armeabi](https://img.shields.io/badge/armeabi--v7a-blue?style=flat-square)
![Version](https://img.shields.io/badge/TikTok-v46.5.3-ff0050?style=flat-square&logo=tiktok&logoColor=white)
![Root](https://img.shields.io/badge/Root-Not_Required-brightgreen?style=flat-square)

🔓 Pinning defeated&nbsp;&nbsp;·&nbsp;&nbsp;🔐 Login & OTP&nbsp;&nbsp;·&nbsp;&nbsp;🧬 x-argus / x-gorgon&nbsp;&nbsp;·&nbsp;&nbsp;🎬 Video CDN&nbsp;&nbsp;·&nbsp;&nbsp;⚙️ 32-bit + 64-bit

<img width="1071" height="710" alt="TikTok Android SSL Pinning Bypass PoC – Login Traffic Captured" src="https://github.com/user-attachments/assets/f3a80fe2-1dfa-4852-83c9-19d7acc9bec8" />

_Live capture — TikTok Android `passport/email/send_code/` intercepted in cleartext on a modern Android version._

</div>

> [!TIP]
> **Download the patched APK** from the **[Releases](../../releases/latest)** section — or message me on **[Telegram](https://t.me/MUH4MM4DSH4KIB)** for the newest build or another version.

---

## ✨ Why This Build

| | |
|:--|:--|
| 🔓 **Full pinning bypass** | Cronet/TTNet **and** libvcn video-CDN pinning both defeated |
| ⚙️ **Dual-ABI — 32-bit *and* 64-bit** | Patches **`arm64-v8a` AND `armeabi-v7a`** — most bypasses are 64-bit only |
| 🔐 **Login flow works** | Passport / OTP / registration captured in cleartext |
| 🧬 **Signing headers in the clear** | `x-argus`, `x-gorgon`, `x-ladon`, `x-khronos` visible unencrypted |
| 📱 **No root** | Runs on stock devices — no system changes, no Magisk |

---

## 📦 Build

| App | Package | Version | ABIs |
|:----|:--------|:-------:|:----:|
| **TikTok for Android** | `com.zhiliaoapp.musically` | `46.5.3` | `arm64-v8a` · `armeabi-v7a` |

---

## 🎯 What You Can Capture

Full visibility into ByteDance's entire API surface:

| Surface | Exposed in cleartext |
|:--------|:---------------------|
| 🔐 **Login & auth** | `passport/email/send_code/`, `passport/auth/available_ways/`, OTP, session tokens |
| 🧬 **Signing headers** | `x-argus`, `x-gorgon`, `x-ladon`, `x-khronos` encryption parameters |
| 🎟️ **Ticket Guard** | `tt-ticket-guard` public keys, client data, signature payloads |
| 🛡️ **Device Guard** | `tt-device-guard` device-token signing and integrity payloads |
| 🎯 **For You feed** | the API requests behind the recommendation algorithm |
| 🎬 **Video delivery** | CDN URLs, quality negotiation (Cronet/TTNet), caching |
| 🔍 **Search & discovery** | search queries, hashtag lookups, trending endpoints |
| ⬆️ **Upload pipeline** | video upload, metadata submission, processing callbacks |
| 📊 **Analytics & telemetry** | Pigeon session tracking, device telemetry, A/B assignments |
| 🛒 **TikTok Shop** | product listings, cart, checkout flow |
| 📡 **Live streaming** | webcast config, stream-key delivery, chat endpoints |

---

## ⚙️ Requirements

**Android 10–14+** on an ARM device (`arm64-v8a` or `armeabi-v7a` — virtually all phones and tablets), plus a MITM proxy — [Burp Suite](https://portswigger.net/burp), [mitmproxy](https://mitmproxy.org/), [Reqable](https://reqable.com), or [Proxypin](https://proxypin.com).

> [!NOTE]
> **No root required** — install the patched APK and go (rooted devices work too). On emulators (Nox / LDPlayer / MEmu / BlueStacks), enable **ARM translation** — this APK ships ARM native libraries, so x86/x86_64 emulators need the translation layer. If TikTok crashes on launch, enable ARM translation and reinstall.

---

## 🚀 Setup

1. **Uninstall** the official TikTok app *(signatures conflict)*.
2. **Download** the patched APK from [Releases](../../releases/latest) and **install** it on your device or emulator.
3. **Trust your proxy CA** — **Settings → Security → Encryption & credentials → Install a certificate → CA certificate**.
4. **Set the Wi-Fi proxy** — **Settings → Wi-Fi → (network) → Proxy → Manual** → your PC's IP and port.
5. **Launch TikTok** — log in, browse, upload, or go live, and watch decrypted HTTPS stream into your proxy in real time.

> [!WARNING]
> TikTok caches trust at launch. Install the proxy CA **before** first launch — or **force-stop and relaunch** after installing it — otherwise traffic won't appear.

---

<div align="center">

## 💼 Need a Custom Bypass?

**Custom SSL pinning bypass · automated patching scripts · full reverse-engineering projects** — for any Android or iOS app.

[![Request Custom Work](https://img.shields.io/badge/Message_me_on_Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/MUH4MM4DSH4KIB)

</div>

---

> [!NOTE]
> **Disclaimer** — For educational and security-research purposes only. Not affiliated with, endorsed by, or connected to TikTok or ByteDance. All trademarks belong to their respective owners. Only analyze traffic on accounts and devices you own or are authorized to test. Provided "as is", without warranty of any kind.

---

## 🔗 Related Projects

| App | Platform | Repository |
|-----|----------|------------|
| TikTok | iOS | [TikTok iOS SSL Pinning Bypass](https://github.com/0xSHAK1B/TikTok-iOS-SSL-Pinning-Bypass) |
| TikTok Lite | Android | [TikTok Lite SSL Pinning Bypass](https://github.com/0xSHAK1B/TIKTOK-LITE-SSL-Pinning-Bypass) |
| Facebook | Android | [Facebook SSL Pinning Bypass](https://github.com/0xSHAK1B/Facebook-SSL-Pinning-Bypass) |
| Instagram | Android | [Instagram SSL Pinning Bypass](https://github.com/0xSHAK1B/Instagram-SSL-Pinning-Bypass) |
| Threads | Android | [Threads SSL Pinning Bypass](https://github.com/0xSHAK1B/Threads-SSL-Pinning-Bypass) |
| Meta Business Suite | Android | [Meta Business Suite SSL Pinning Bypass](https://github.com/0xSHAK1B/Meta-Business-Suite-SSL-Pinning-Bypass) |
| Messenger | Android | [Messenger SSL Pinning Bypass](https://github.com/0xSHAK1B/Messenger-SSL-Pinning-Bypass) |
| X (Twitter) | Android | [Twitter SSL Pinning Bypass](https://github.com/0xSHAK1B/Twitter-SSL-Pinning-Bypass) |

---

<div align="center">

## 💖 Support This Project

If this saved you time or helped your research, please **⭐ star the repo** — it helps others find it and keeps the builds coming.

| Currency | Address |
|:---------|:--------|
| **BTC** | `131NaAJooX2XYq5QUFmKsTuLQXcGNayYPJ` |
| **ETH** | `0xea9a566a5123c3a1b8d60f8bdd845835716668f0` |
| **USDT (TRC-20)** | `THssAZhUQEEsw15211rAaRLGRjSWXMX4PW` |

<br>

**📬 Newest builds · support · custom work**

[![Telegram](https://img.shields.io/badge/@MUH4MM4DSH4KIB-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/MUH4MM4DSH4KIB)

⭐ **Star the repo if it helped your research!**

</div>
