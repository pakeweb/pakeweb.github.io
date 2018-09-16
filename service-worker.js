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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "84c59325229604545133757da1b22fe2"
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
    "url": "assets/css/0.styles.6d7ca7b3.css",
    "revision": "a509552de3294b54983cbd7ba6ca3850"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.60dd6810.js",
    "revision": "ac4f5fa1c130478bd4b7fad8ea4389da"
  },
  {
    "url": "assets/js/3.f305254c.js",
    "revision": "b7655e97f4338d3e44fbe308b55f5d86"
  },
  {
    "url": "assets/js/4.f542e25e.js",
    "revision": "54b38c236d330ce76c407c4101f6d639"
  },
  {
    "url": "assets/js/5.980e7d30.js",
    "revision": "456ef8afe352acd520f2f4aadd7d5c27"
  },
  {
    "url": "assets/js/6.8a29d068.js",
    "revision": "ec9431d2814ab5932acce61a0dc0a2aa"
  },
  {
    "url": "assets/js/7.d35cced1.js",
    "revision": "3729ad808ddd4d307d2cc8c3b622c932"
  },
  {
    "url": "assets/js/8.56631127.js",
    "revision": "7a1ce5c4b336b40f6916b440aebd1df0"
  },
  {
    "url": "assets/js/9.21e36e5e.js",
    "revision": "db52875170193e9a106dd3814deebfa1"
  },
  {
    "url": "assets/js/app.4b3e8583.js",
    "revision": "fd8145d85aae8fbabc926f2108ab0624"
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
    "revision": "1f5d81bd1d6fe6851fea5ff2ca41d137"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "c6945dcf08330eaccea444d64d3bffca"
  },
  {
    "url": "index.html",
    "revision": "01381968643888f779407613fd655df4"
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
    "url": "pengajuan/index.html",
    "revision": "1e16c11a4af1f459496e1c6c6377b830"
  },
  {
    "url": "pengembang/index.html",
    "revision": "f9bbda0b32aef20d3a138fdb440676cf"
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
