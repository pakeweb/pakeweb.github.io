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
    "revision": "014e968a242e289c09684a39d4e0956d"
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
    "url": "assets/css/0.styles.39d5b772.css",
    "revision": "bf0f6505e9eef7d45531e08c134e6fdd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.b0a30a9b.js",
    "revision": "cedebb457172c3f56d927cb9a0dbf60e"
  },
  {
    "url": "assets/js/3.450bbecf.js",
    "revision": "b0cb4fc544642233b5c9fa821e0e7651"
  },
  {
    "url": "assets/js/4.5decec0d.js",
    "revision": "6181ea6e6b488c6deffb65fa18b670d1"
  },
  {
    "url": "assets/js/5.f4fad59d.js",
    "revision": "3897133d62db47a061796c002bb8f345"
  },
  {
    "url": "assets/js/6.4e743c38.js",
    "revision": "7c8a4d91b76a13d13e5f2c364e505b9f"
  },
  {
    "url": "assets/js/7.9fa96e71.js",
    "revision": "a1ec57c27bb728dc677cfc5e54ebb72c"
  },
  {
    "url": "assets/js/8.24d8c5b0.js",
    "revision": "94a664af0d878d7f2e8c8fe9ae3e5e1d"
  },
  {
    "url": "assets/js/9.5828ba24.js",
    "revision": "eee1c8f59b61dd6f975e83a372962ee4"
  },
  {
    "url": "assets/js/app.10b956a9.js",
    "revision": "02d9c5b688f4d99e115e3248e8909d15"
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
    "revision": "2366f12e79fa480530ab47d92966ab6c"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "831a667b4b28c61884bb0fb59c39bf18"
  },
  {
    "url": "index.html",
    "revision": "0fb25daaba6e8ba6422b313e98a1a1a5"
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
    "revision": "dfba4731dab20be171744480a0af8905"
  },
  {
    "url": "pengembang/index.html",
    "revision": "01b5342df2c2b189a34c13e1b429467d"
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
