'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "db0cb64d3b9a83d6fc43e2c132a613ef",
"assets/AssetManifest.smcbin": "f1629d66014163ecbf52d2c6f4245df6",
"assets/assets/font/Barlow/Barlow-Black.ttf": "30b9fe1e346c413ee8cd7acafdeed511",
"assets/assets/font/Barlow/Barlow-Bold.ttf": "243fe70818f827c5f24d7fbeb1e26bff",
"assets/assets/font/Barlow/Barlow-ExtraBold.ttf": "b8d7b7508e516e2bb6edb21915ac2b0a",
"assets/assets/font/Barlow/Barlow-Light.ttf": "cc5314d134d47be56866d05ae6c1177a",
"assets/assets/font/Barlow/Barlow-Medium.ttf": "b27ab04d74894da90ea851800151ff59",
"assets/assets/font/Barlow/Barlow-Regular.ttf": "9ece4fa893b695ded24d0e50fd3821f2",
"assets/assets/font/Barlow/Barlow-SemiBold.ttf": "2ba5eb1be9f540626b1a19bde0e3131c",
"assets/assets/font/Barlow/Barlow-Thin.ttf": "7e853e46c04dcace86c5308edeb4ddd3",
"assets/assets/font/open_sans/OpenSans-Regular.ttf": "dd7ca4f5cf9c67d1d028da5c01d67884",
"assets/assets/images/blog-1.jpg": "d46348cd08e1a3d77374f45cf81792ab",
"assets/assets/images/blog-2.jpg": "7f8003ee1e11739d29459ddae52807e7",
"assets/assets/images/blog-3.jpg": "f1c53b9cd8f0459134b79188066060df",
"assets/assets/images/carousel-1.jpg": "bee6ef1721564b3347e3255e84d4eb89",
"assets/assets/images/carousel-2.jpg": "c066863296ef96569679b9490246ca6e",
"assets/assets/images/feature.jpg": "9a37dca9cd6579f433c2eca9562885dd",
"assets/assets/images/nortcele_logo.svg": "84994edee3ab0f47c81093deeb7a7e98",
"assets/assets/images/quote.jpg": "4dc05444c3deb375a6997610f8a41774",
"assets/assets/images/team-1.jpg": "e993dd4d742f6ac18eef213eba3bb159",
"assets/assets/images/team-2.jpg": "ce1ff8c5c409e28daa2eeac0aae16c43",
"assets/assets/images/team-3.jpg": "865b6eab74c9a16538ccf95ecf9b8096",
"assets/assets/images/testimonial-1.png": "23b04c07cf4d1e19b3e213e61ee7fa51",
"assets/assets/images/testimonial-2.png": "2f6e2f1e0d0297e4c9e26fbd1f1ce862",
"assets/assets/images/testimonial-3.png": "d5a51e71c570b1acc6bcd8dc447ad0ab",
"assets/assets/images/testimonial-4.png": "cea25d9a78f32397e2ef198d0f8ab5f7",
"assets/assets/images/testimonial.jpg": "ef1cec656d841873029f7d76d7e5e1be",
"assets/assets/images/user.jpg": "3b6a6290110a957dc3931780c5ce2b44",
"assets/FontManifest.json": "50fc02d3eb584b3cc16b15b29bbfbf24",
"assets/fonts/MaterialIcons-Regular.otf": "daca986e268e5f5559dd5a2a8123c36c",
"assets/NOTICES": "00b65bc0e70ce0b7b89db3e7c27a83b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "f7a64382971ee2a86be38ad574b471ac",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "8c44e6a69e534348ad13afe646a8e6f4",
"icons/Icon-512.png": "abab728a6390965824e06abca479f56f",
"icons/Icon-maskable-192.png": "8c44e6a69e534348ad13afe646a8e6f4",
"icons/Icon-maskable-512.png": "abab728a6390965824e06abca479f56f",
"index.html": "af02afb7579276861fcaae755ad45601",
"/": "af02afb7579276861fcaae755ad45601",
"main.dart.js": "7d45c9e3025eea2cc3bd1393221e384c",
"manifest.json": "27c9c5305bf1f00a47c3ffdbb0ecd96d",
"version.json": "682efa4d18322a1e6c47be6bf0259e34"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
