'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a7618c8625d8f56512977c0f0c696ce3",
"assets/AssetManifest.bin.json": "5fd95a3b7c9a4a893b2677570e37e039",
"assets/AssetManifest.json": "bf327593866a19bc7d97e4a5e9b0d2cf",
"assets/assets/images/sofa%2520(20).png": "8868f1e876f72e9d22523b15a9286324",
"assets/assets/images/sofa%2520(21).png": "008f90e422f0e8160dabaed144e99b8f",
"assets/assets/images/sofa%2520(22).png": "3b00c8dddcb253d8be93b44200037577",
"assets/assets/images/sofa%2520(23).png": "e8e9893971a8b25e9b00940f63e25d4c",
"assets/assets/images/sofa%2520(24).png": "51cf224152530913969bf537427bc73a",
"assets/assets/images/sofa1.jpeg": "00f986874e162c21d5c079b7c07a213e",
"assets/assets/images/sofa2.jpeg": "9c7f57d09546feacdde9e13d13ac0e09",
"assets/assets/images/sofa3.jpeg": "ed0ac74f0d3bd49d2895272acb1044f2",
"assets/assets/images/sofa5.jpeg": "4478249995b1748baa35d3a8c3c5a9f6",
"assets/assets/images/sofamobile1.jpg": "391a436aaa5f4f349a615c2404cae0d3",
"assets/assets/images/sofamobile12.jpg": "32820f7d42b9bc332205fc6c5b4c4568",
"assets/assets/images/sofamobile2.jpg": "ab652fe4fd11efb66bbe3460b987ae6b",
"assets/assets/images/sofamobile3.jpeg": "885859f8afb09281443467de83abf11a",
"assets/assets/images/sofamobile5.jpg": "ad9fcf9c8171906f5edcf644e33b75bc",
"assets/assets/product_images/sofa%2520(1).png": "e99a68bf3f9c672978ea6bbaa2f0f461",
"assets/assets/product_images/sofa%2520(1).webp": "842eaf5fdb47795cc12535c65f171ffc",
"assets/assets/product_images/sofa%2520(10).png": "4face809d149856f88969e08b12dd8ff",
"assets/assets/product_images/sofa%2520(11).png": "ed9529ef72f60f4036a5989d130f751f",
"assets/assets/product_images/sofa%2520(12).png": "e9c61fb82b3beb93782510fcd81352d4",
"assets/assets/product_images/sofa%2520(13).png": "98dccfbdaaad90a1a1cf41817ed3bf22",
"assets/assets/product_images/sofa%2520(2).png": "8989d7cde43de480a299f0f25866d087",
"assets/assets/product_images/sofa%2520(2).webp": "c7de24d1b2afd39925778f806dc7759e",
"assets/assets/product_images/sofa%2520(20).png": "8868f1e876f72e9d22523b15a9286324",
"assets/assets/product_images/sofa%2520(21).png": "008f90e422f0e8160dabaed144e99b8f",
"assets/assets/product_images/sofa%2520(22).png": "3b00c8dddcb253d8be93b44200037577",
"assets/assets/product_images/sofa%2520(23).png": "e8e9893971a8b25e9b00940f63e25d4c",
"assets/assets/product_images/sofa%2520(24).png": "51cf224152530913969bf537427bc73a",
"assets/assets/product_images/sofa%2520(3).png": "5b3694bc453737d306a3a2258606ea50",
"assets/assets/product_images/sofa%2520(3).webp": "7deb1c38ae04ff2868423ff5acfca76c",
"assets/assets/product_images/sofa%2520(4).png": "3cc557bbc02672b24e2f4aef8b2a275a",
"assets/assets/product_images/sofa%2520(4).webp": "cb5ed65429a1a38022f88aeacdff5a8f",
"assets/assets/product_images/sofa%2520(5).png": "a9fbd34b15e7ba85138a86ab2d010e92",
"assets/assets/product_images/sofa%2520(5).webp": "2204836e3f3dedb13e742029fd1a8360",
"assets/assets/product_images/sofa%2520(7).png": "8f689012e9d852350bb9a1685a54816f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5d5db2ae789085a458e2fc4ac43f07a3",
"assets/NOTICES": "3088db1c8157ed6a353a63c09e2171fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "cf652bfcb769d3a1475ef2e681cb296d",
"canvaskit/canvaskit.wasm": "2f053397f614d475e570d44f80653160",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "dd0639cede41313568f23adab0d59d69",
"canvaskit/chromium/canvaskit.wasm": "6283f2e30f9fbfea919aea255d69c768",
"canvaskit/skwasm.js": "bb7f9a4f8e1315e306e274ee39c92280",
"canvaskit/skwasm.js.symbols": "e00ad292d7142f4e5ed8832aac7a8cdc",
"canvaskit/skwasm.wasm": "7859bbbb10484220145487e228e46926",
"canvaskit/skwasm_heavy.js": "ff62b0ccde0d87bb610723a5276bfcfc",
"canvaskit/skwasm_heavy.js.symbols": "ffae643d20705177ab25d85913fe7d3b",
"canvaskit/skwasm_heavy.wasm": "5d7d4249bb9165bd1fcfe02d801f0e5c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "bd3dd9b5b11f432cec63fe67353af25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0785ff5a05260b267a7cc17aefad16ad",
"/": "0785ff5a05260b267a7cc17aefad16ad",
"main.dart.js": "088324be091abc653628855928026a40",
"manifest.json": "2ee070c287edbda270960ce25c81f6d3",
"version.json": "316cb94fa722ae4aa22d555d645fd05f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
