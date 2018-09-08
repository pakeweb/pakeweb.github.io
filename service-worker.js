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
    "revision": "b34544335ce2e61241e044d3ff968861"
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
    "url": "assets/css/0.styles.e6f0ea97.css",
    "revision": "eb3fd8dac210d71dcc349b5da3f9d588"
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
    "url": "assets/js/6.51489c48.js",
    "revision": "ac732d27841b393f143723d6d404e58d"
  },
  {
    "url": "assets/js/7.77875f54.js",
    "revision": "767cc6d716062a42ba303f6d97eca2c6"
  },
  {
    "url": "assets/js/app.f3843bb2.js",
    "revision": "ed6dad02546d47e3d36b358dc64d0bd8"
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
    "revision": "9cbb096f442ee76722aa92b5c14596e8"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "ed4a83761611cd955ee7655e10eec48f"
  },
  {
    "url": "index.html",
    "revision": "5dab670333bc75cdce771ce61f301044"
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
    "revision": "82d6b1e93f2cd5879be534ba54c963f2"
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
