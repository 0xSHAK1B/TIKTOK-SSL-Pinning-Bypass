# TikTok SSL Pinning Bypass for Android (2026) – Intercept & Capture HTTPS Traffic

[![Telegram](https://img.shields.io/badge/💬_Chat_on_Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=121212&color=26A5E4&logoWidth=20)](https://t.me/MUH4MM4DSH4KIB)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![ARM64](https://img.shields.io/badge/ARM64--v8a-Supported-blue?style=for-the-badge)
![TikTok](https://img.shields.io/badge/TikTok-v45.9.3-ff0050?style=for-the-badge&logo=tiktok&logoColor=white)

> Bypass TikTok SSL certificate pinning on Android to intercept, inspect, and analyze HTTPS network traffic — works on both **rooted** and **non-rooted** devices.

---

## 📖 Overview

This project provides a pre-patched **TikTok APK** with SSL/TLS certificate pinning disabled, enabling security researchers and developers to capture and analyze TikTok's HTTPS traffic using standard MITM proxy tools. Inspect API endpoints, video feed requests, authentication flows, analytics payloads, and content delivery mechanisms used by one of the world's most popular social media platforms.

### Key Features

- ✅ No root required (also supports rooted devices)
- ✅ Compatible with Android emulators (Nox, LDPlayer, BlueStacks)
- ✅ Works with popular proxy tools (Burp Suite, Mitmproxy, Reqable, Proxypin)
- ✅ ARM64-v8a & armeabi-v7a architecture support
- ✅ Full app functionality preserved — browse, watch, and interact normally
---

## 🚀 Latest Enhanced Build — Now Available

I've recently released a **new, improved TikTok bypass APK** with significant upgrades over the public version:

| Feature | Public Build (v45.9.3) | 🌟 **Latest Enhanced Build** |
|---------|:----------------------:|:----------------------------:|
| SSL Pinning Bypass | ✅ | ✅ |
| Android 10 & below support | ✅ | ✅ |
| **Android 11+ support** | ❌ | ✅ |
| **Login & registration traffic capture** | ❌ | ✅ |
| **Passport / OTP / email flow interception** | ❌ | ✅ |
| Latest TikTok version | ❌ | ✅ |
| Distribution |  [Download](../../releases/latest) | [Get on Telegram](https://t.me/MUH4MM4DSH4KIB) |

### 🔥 What's New in the Enhanced Build

- **Full Android support** — bypass network security configurations that block the public build on newer Android versions
- **Login & registration flow capture** — intercept `passport/email/send_code`, `passport/auth/available_ways`, OTP requests, account verification, and full authentication payloads
- **Latest TikTok version** — actively maintained, updated weekly to track TikTok's releases
- **Works on stock devices** — no system-level changes required

### 📩 How to Get the Enhanced Build

The latest enhanced APK is **not publicly distributed**. To request access:

[![Telegram](https://img.shields.io/badge/💬_Request_Enhanced_Build_on_Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=121212&color=26A5E4&logoWidth=20)](https://t.me/MUH4MM4DSH4KIB)

---

## 🎥 Proof of Concept — Login Traffic Capture

> Live capture from the **Enhanced Build** showing TikTok's authentication endpoint (`/passport/email/send_code/`) being intercepted in cleartext on a modern Android version — something the public build cannot do.

<img width="1198" height="774" alt="Image" src="https://github.com/user-attachments/assets/78fa97cf-46c9-4cc1-9cb0-a58012a07c88" />


---

## ⭐ Support With a Star

If this project helped your security research, **please star this repo** — it helps others discover it and motivates continued updates!

---

## 📦 Download (v45.9.3)

> ⚠️ **Note:** This public build only supports **Android 10 and below**, and **cannot capture login/authentication traffic**. For Android 11+ support and login capture, use the [**Enhanced Build**](#-latest-enhanced-build--now-available) (Telegram only).

| Source | Link |
|--------|------|
| **GitHub Releases** | [**Download from Releases**](../../releases/latest) |
| **Telegram** | [**Get on Telegram**](https://t.me/MUH4MM4DSH4KIB) |

---


## 📱 Requirements

### Option A: Physical Android Device

- Android phone or tablet (**rooted or non-rooted**)
- A traffic interception proxy tool:
  - [Proxypin](https://proxypin.com) — free, lightweight
  - [Reqable](https://reqable.com) — feature-rich, modern UI

### Option B: Android Emulator (PC)

- Windows PC with one of the following emulators installed:
  - [Nox Player](https://www.bignox.com/)
  - [LDPlayer](https://www.ldplayer.net/)
  - [BlueStacks](https://www.bluestacks.com/)
- A desktop MITM proxy tool:
  - [Burp Suite](https://portswigger.net/burp) — industry standard
  - [Mitmproxy](https://mitmproxy.org/) — open source
  - [Reqable](https://reqable.com)
  - [Proxypin](https://proxypin.com)

---

## 🚀 Bypass Procedure

1. **Uninstall** the official TikTok app from your device (if installed).
2. **Get the APK** — download the public build from [Releases](../../releases/latest), or [request the Enhanced Build](https://t.me/MUH4MM4DSH4KIB) on Telegram for Android 11+ and login capture.
3. **Install** the patched APK on your Android device or emulator.
4. **Configure** your proxy tool of choice to intercept traffic.
5. **Launch TikTok** and start capturing HTTPS requests and responses.

> **Tip:** Install and trust the proxy's CA certificate on your device for full HTTPS decryption. Force-stop and relaunch the app if traffic doesn't appear immediately.

---

## 🔗 Related Projects

Looking for SSL pinning bypasses for other apps? Check out my other repos:

- 📘 [Facebook SSL Pinning Bypass](https://github.com/0xSHAK1B/Facebook-SSL-Pinning-Bypass) — Intercept Facebook HTTPS traffic on Android
- 💬 [Messenger SSL Pinning Bypass](https://github.com/0xSHAK1B/Messenger-SSL-Pinning-Bypass) — Capture Facebook Messenger API requests & responses
- 📸 [Instagram SSL Pinning Bypass](https://github.com/0xSHAK1B/Instagram-SSL-Pinning-Bypass) — Capture Instagram API requests & responses
- 🧵 [Threads SSL Pinning Bypass](https://github.com/0xSHAK1B/Threads-SSL-Pinning-Bypass) — Analyze Threads network traffic
- 💼 [Meta Business Suite SSL Pinning Bypass](https://github.com/0xSHAK1B/Meta-Business-Suite-SSL-Pinning-Bypass) — Intercept Meta Business Suite HTTPS traffic
- 🎵 [TikTok Lite SSL Pinning Bypass](https://github.com/0xSHAK1B/TIKTOK-LITE-SSL-Pinning-Bypass) — Intercept TikTok Lite HTTPS traffic on Android
- 🛒 [AliExpress SSL Pinning Bypass](https://github.com/0xSHAK1B/AliExpress-SSL-Pinning-Bypass) — Intercept AliExpress HTTPS traffic on Android

> 💬 For any of the above or a custom bypass, [message me on Telegram](https://t.me/MUH4MM4DSH4KIB).

---


## 💖 Support This Project

This project is **supported by the community** through public funding. If this tool saved you time or helped your research, consider supporting continued development:

### ₿ Crypto Donations

| Currency | Address |
|----------|---------|
| **Bitcoin (BTC)** | `bc1px97s59kkyde66ptvp04amntufahkn3megnys25w7d6hrdy0tqjyszz6gxh` |
| **USDT (ERC-20)** | `0xFFC89D25A6Ff41238982Fd9846D8CE2B22B2b3Cc` |
| **USDT (TRC-20)** | `THssAZhUQEEsw15211rAaRLGRjSWXMX4PW` |

> Every contribution — big or small — helps maintain and update bypasses as apps release new versions. Thank you!

---

## 📬 Contact & Latest Builds

Have a question, need the **Enhanced Build**, want a custom bypass, or want the latest APK?

[![Telegram](https://img.shields.io/badge/💬_Chat_on_Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=121212&color=26A5E4&logoWidth=20)](https://t.me/MUH4MM4DSH4KIB)
