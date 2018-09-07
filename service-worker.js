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
    "revision": "9b9eff657f3f6e0d0215428e52037fd5"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b575074f0c2b4619c057bb3c9a915c4"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "a1cec40fb13bc24d7a64f255c2c0691f"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "6e4673fc39c78b2806f2f49a020f4bcb"
  },
  {
    "url": "assets/css/0.styles.9ff129c2.css",
    "revision": "303c8a9ec8e2cb6473d9e2cadec33521"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.614cf17f.js",
    "revision": "1bb3cca24f818ce2577b6c986d05a896"
  },
  {
    "url": "assets/js/3.85402eda.js",
    "revision": "bacaa4da6d7ac856c847abc6a7742928"
  },
  {
    "url": "assets/js/4.99efc37b.js",
    "revision": "a7d6f0dc89e43cb215008ff176fe45ab"
  },
  {
    "url": "assets/js/5.82533ced.js",
    "revision": "fa4b754adaf1e0bedc3f799f2b4af978"
  },
  {
    "url": "assets/js/6.7a6c9e2a.js",
    "revision": "a754172778a06286f98a44f36b155c1b"
  },
  {
    "url": "assets/js/7.5438bd37.js",
    "revision": "308a38103961f973da02567099873930"
  },
  {
    "url": "assets/js/app.4fd713d8.js",
    "revision": "46f9cee366293c430277d816bdc33c61"
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
    "revision": "c6e38808b6df258bf02020bcab83f787"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "84abdda0e3b91c2f7c9b5102715ad870"
  },
  {
    "url": "index.html",
    "revision": "1778de079de7c9a5f8886b9e98275cbe"
  },
  {
    "url": "logo.png",
    "revision": "a1cec40fb13bc24d7a64f255c2c0691f"
  },
  {
    "url": "logo.svg",
    "revision": "c9dca0d925a43b52b015bf8610e6777e"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "e046803ccdfbcefd789bf8d29c3ebe34"
  },
  {
    "url": "pengembang/index.html",
    "revision": "55162502dab38ffbf2841bdee29c602d"
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
