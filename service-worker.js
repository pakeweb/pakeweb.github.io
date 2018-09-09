/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f01f08b621364f2dad60fc71c2e35278"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b575074f0c2b4619c057bb3c9a915c4"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "6e4673fc39c78b2806f2f49a020f4bcb"
  },
  {
    "url": "assets/css/0.styles.4f8184e1.css",
    "revision": "fed6247df45bbd2812650716ffad2dc6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.062149a6.js",
    "revision": "bf333eb3d5837fcb4f7ce2406d208051"
  },
  {
    "url": "assets/js/3.8c219662.js",
    "revision": "a6c3b5f81d32823706ffe5385384e0f6"
  },
  {
    "url": "assets/js/4.16eba905.js",
    "revision": "00b8d03fd93f1fd4577b0fdc9e175824"
  },
  {
    "url": "assets/js/5.ee800e0b.js",
    "revision": "2fbd56f948334e41b641a3a3ff54178c"
  },
  {
    "url": "assets/js/6.ba1e73d0.js",
    "revision": "8ca4c1e0b931c7639961e4e1a1be9ab8"
  },
  {
    "url": "assets/js/7.8b6630ac.js",
    "revision": "e8f9f5588f6f84aa733f70833afa5793"
  },
  {
    "url": "assets/js/app.c8cf5f3b.js",
    "revision": "e211d9223eddcfc6958823304000269c"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "41b1c9c8589b9053abd104f583a9e3a5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c8cc0948f732c8e2f302db079906bb69"
  },
  {
    "url": "hubungi/index.html",
    "revision": "6963dd82c569109e40ce8ff1a2d464b8"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "ad286e0f8f2b1a776e112b893388d1dd"
  },
  {
    "url": "index.html",
    "revision": "756d84942d36110ef6e557035cf6850d"
  },
  {
    "url": "logo.png",
    "revision": "a1cec40fb13bc24d7a64f255c2c0691f"
  },
  {
    "url": "logo.svg",
    "revision": "7085db9568854417e730fd29fc9d48f9"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "e046803ccdfbcefd789bf8d29c3ebe34"
  },
  {
    "url": "pengembang/index.html",
    "revision": "bd304f181148c9858e560e4ae04a6dcf"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "86d30a15b062ed53ab83428be266e8a2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
