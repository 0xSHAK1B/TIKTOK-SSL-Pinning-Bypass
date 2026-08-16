<div align="center">

# 🔓 TikTok SSL Pinning Bypass for Android

#### Intercept & analyze TikTok HTTPS traffic on rooted and non-rooted devices

[![Download APK](https://img.shields.io/badge/⬇_Download_APK_(v46.5.3)-ff0050?style=for-the-badge&logo=tiktok&logoColor=white)](../../releases/latest)
[![Telegram](https://img.shields.io/badge/Chat_on_Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/MUH4MM4DSH4KIB)

![Android](https://img.shields.io/badge/Android_10--14+-3DDC84?style=flat-square&logo=android&logoColor=white)
![ARM64](https://img.shields.io/badge/ARM64--v8a-blue?style=flat-square)
![armeabi](https://img.shields.io/badge/armeabi--v7a-blue?style=flat-square)
![Version](https://img.shields.io/badge/TikTok-v46.5.3-ff0050?style=flat-square&logo=tiktok&logoColor=white)
![Updated](https://img.shields.io/badge/Updated-Regularly-brightgreen?style=flat-square)

</div>

---

## 📖 Overview

This project provides a pre-patched **TikTok APK** with SSL/TLS certificate pinning disabled, enabling security researchers and developers to capture and analyze TikTok's HTTPS traffic using standard MITM proxy tools.

Inspect API endpoints, video feed requests, authentication flows, analytics payloads, and content delivery mechanisms used by one of the world's most popular social media platforms.

### ✅ Key Features

| Feature | Status |
|:--------|:------:|
| No root required (also supports rooted devices) | ✅ |
| Runs on emulators with ARM translation (Nox, LDPlayer, MEmu, BlueStacks) | ✅ |
| Works with Burp Suite, Mitmproxy, Reqable, Proxypin | ✅ |
| ARM64-v8a & armeabi-v7a native support | ✅ |
| Full app functionality preserved | ✅ |

> **Architectures:** the patch targets **ARM64-v8a** and **armeabi-v7a**. x86/x86_64 emulators must have **ARM translation** enabled (see the emulator note below) — native x86 builds are not patched.

---

## 🚀 What's Included

| Feature | Status |
|:--------|:------:|
| SSL / TLS Pinning Bypass | ✅ |
| Android 10, 11, 12, 13, 14+ | ✅ |
| Login & registration traffic capture | ✅ |
| Passport / OTP / email flow interception | ✅ |
| Latest TikTok version (actively updated) | ✅ |
| No root required | ✅ |

### 🔥 What's New in the Enhanced Build
- **Full Android support** — bypasses network security configurations on all modern Android versions
- **Login & registration flow capture** — intercept `passport/email/send_code`, `passport/auth/available_ways`, OTP requests, account verification, and full authentication payloads
- **Actively maintained** — updated to track TikTok's releases
- **Works on stock devices** — no system-level changes required

---

## 🎥 Proof of Concept — Login Traffic Capture

> Live capture from the **Enhanced Build** showing TikTok's authentication endpoint (`/passport/email/send_code/`) being intercepted in cleartext on a modern Android version.

<div align="center">

<img width="1071" height="710" alt="TikTok SSL Pinning Bypass - Login Traffic Capture PoC" src="https://github.com/user-attachments/assets/f3a80fe2-1dfa-4852-83c9-19d7acc9bec8" />

</div>

---

## 📦 Download (46.5.3)

| | | |
|:--|:--|:--|
| **Latest Enhanced APK (v46.5.3)** | [![GitHub Release](https://img.shields.io/badge/⬇_GitHub_Releases-24292e?style=for-the-badge&logo=github&logoColor=white)](../../releases/latest) | [![Telegram](https://img.shields.io/badge/⬇_Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/MUH4MM4DSH4KIB) |

> **Installation:** Uninstall official TikTok first → install the patched APK → configure your proxy → launch TikTok.

---

## 📱 Requirements

<details>
<summary><b>Option A: Physical Android Device</b></summary>

<br>

- Android phone or tablet (**rooted or non-rooted**), ARM-based (virtually all real devices)
- A traffic interception proxy tool:
  - [Proxypin](https://proxypin.com) — free, lightweight
  - [Reqable](https://reqable.com) — feature-rich, modern UI

</details>

<details>
<summary><b>Option B: Android Emulator (PC)</b></summary>

<br>

- Windows PC with one of the following emulators:
  - [Nox Player](https://www.bignox.com/)
  - [LDPlayer](https://www.ldplayer.net/)
  - [MEmu](https://www.memuplay.com/)
  - [BlueStacks](https://www.bluestacks.com/)
- A desktop MITM proxy tool:
  - [Burp Suite](https://portswigger.net/burp) — industry standard
  - [Mitmproxy](https://mitmproxy.org/) — open source
  - [Reqable](https://reqable.com)
  - [Proxypin](https://proxypin.com)

> **⚠️ Emulator note:** these emulators run on **x86/x86_64**. This APK ships **ARM** libraries, so the emulator must have **ARM translation** turned on (Nox/MEmu/LDPlayer expose this in Settings; recent builds enable it by default). If TikTok crashes on launch or traffic never appears, enable ARM translation and reinstall.

</details>

---

## 🛠 Quick Start

```
1. Uninstall the official TikTok app (if installed)
2. Download the patched APK from Releases
3. Install the APK on your device or emulator
4. Install and trust your proxy's CA certificate
5. Force-stop TikTok, then relaunch it
6. Configure your proxy — HTTPS traffic is now visible
```

> **💡 Tip:** the app caches trust at launch, so always install the proxy CA **before** first launch (or force-stop + relaunch after installing it). If traffic still doesn't appear, restart the app once more.

---

## ⚠️ Disclaimer

This project is provided **for educational and security-research purposes only**. It is **not affiliated with, endorsed by, or connected to TikTok or ByteDance** in any way. All trademarks belong to their respective owners.

You are solely responsible for how you use it and for complying with your local laws and the application's Terms of Service. Only analyze traffic on **accounts and devices you own or are authorized to test**. The software is provided **"as is", without warranty of any kind**; the author accepts no liability for misuse or any damage arising from its use.

---

## 🔗 Related Projects

<table>
<tr><td>🎵</td><td><a href="https://github.com/0xSHAK1B/TikTok-iOS-SSL-Pinning-Bypass">TikTok iOS SSL Pinning Bypass</a></td><td>iOS</td></tr>
<tr><td>🎵</td><td><a href="https://github.com/0xSHAK1B/TIKTOK-LITE-SSL-Pinning-Bypass">TikTok Lite SSL Pinning Bypass</a></td><td>Android</td></tr>
<tr><td>📘</td><td><a href="https://github.com/0xSHAK1B/Facebook-SSL-Pinning-Bypass">Facebook SSL Pinning Bypass</a></td><td>Android</td></tr>
<tr><td>📘</td><td><a href="https://github.com/0xSHAK1B/Facebook-iOS-SSL-Pinning-Bypass">Facebook iOS SSL Pinning Bypass</a></td><td>iOS</td></tr>
<tr><td>💬</td><td><a href="https://github.com/0xSHAK1B/Messenger-SSL-Pinning-Bypass">Messenger SSL Pinning Bypass</a></td><td>Android</td></tr>
<tr><td>📸</td><td><a href="https://github.com/0xSHAK1B/Instagram-SSL-Pinning-Bypass">Instagram SSL Pinning Bypass</a></td><td>Android</td></tr>
<tr><td>📸</td><td><a href="https://github.com/0xSHAK1B/Instagram-iOS-SSL-Pinning-Bypass">Instagram iOS SSL Pinning Bypass</a></td><td>iOS</td></tr>
<tr><td>🧵</td><td><a href="https://github.com/0xSHAK1B/Threads-SSL-Pinning-Bypass">Threads SSL Pinning Bypass</a></td><td>Android</td></tr>
<tr><td>🧵</td><td><a href="https://github.com/0xSHAK1B/Threads-iOS-SSL-Pinning-Bypass">Threads iOS SSL Pinning Bypass</a></td><td>iOS</td></tr>
<tr><td>💼</td><td><a href="https://github.com/0xSHAK1B/Meta-Business-Suite-SSL-Pinning-Bypass">Meta Business Suite SSL Pinning Bypass</a></td><td>Android</td></tr>
<tr><td>🐦</td><td><a href="https://github.com/0xSHAK1B/X-Twitter-SSL-Pinning-Bypass">X (Twitter) SSL Pinning Bypass</a></td><td>Android</td></tr>
</table>

> Need a **custom bypass**, an **automated script**, or help with another project? [Message me on Telegram](https://t.me/MUH4MM4DSH4KIB).

---

## 💖 Support This Project

If this tool saved you time or helped your research, consider supporting continued development:

| Currency | Address |
|:---------|:--------|
| **BTC / ETH** | `0xea9a566a5123c3a1b8d60f8bdd845835716668f0` |
| **USDT (TRC-20)** | `THssAZhUQEEsw15211rAaRLGRjSWXMX4PW` |

> Every contribution helps maintain and update bypasses as apps release new versions. Thank you! ⭐

---
