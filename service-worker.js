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
    "revision": "05181e02b616954fedd469d94a1004e3"
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
    "url": "assets/js/6.7a6c9e2a.js",
    "revision": "a754172778a06286f98a44f36b155c1b"
  },
  {
    "url": "assets/js/7.76cf0ffc.js",
    "revision": "01edb5c94155c32ede5ed4219edd5a3c"
  },
  {
    "url": "assets/js/app.781db312.js",
    "revision": "92dcceaf1da978ece334d7080b6aa2df"
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
    "revision": "738dbf2ab6fcbd9c625c1f40b451d4ba"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "a6169be8e39e8fdc4b9270471acc0c21"
  },
  {
    "url": "index.html",
    "revision": "df2f6ff1d6e3842615dfec1d8da38818"
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
    "revision": "340cf919ce27e8337584d13f45e8ed85"
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
