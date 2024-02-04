'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ef0f50efccbf932ea8d6f00852c2108f",
"index.html": "6214ba79faca61d2dd5b76040cf5f071",
"/": "6214ba79faca61d2dd5b76040cf5f071",
"main.dart.js": "075b560513bb68b16fef421588bb303e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ca6370271a007abbdb95ec00bca15dd",
"assets/AssetManifest.json": "e0b55ccf365207ce8bb58e0b172bcaa3",
"assets/NOTICES": "9f712743cc6951de6f3dde0a5c58afc0",
"assets/FontManifest.json": "a416077bbcccfd2927e44aeb1320760a",
"assets/AssetManifest.bin.json": "789750f0a010bca47dc0200a04a710d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/lib/i18n/ta_IN.json": "47bd0f47d8986da4da828f80e6ca871d",
"assets/lib/i18n/sa_IN.json": "25ebb8dbdb561c22ef633409381fbadb",
"assets/lib/i18n/en_US.json": "25ebb8dbdb561c22ef633409381fbadb",
"assets/lib/i18n/trash.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/lib/i18n/hi_IN.json": "a99c45df3614e97794fb972a15f76fa6",
"assets/lib/i18n/kn_IN.json": "90dd78edcb2745cd422110188d25bb42",
"assets/lib/i18n/ml_IN.json": "d75a80cb65b1257b88ad5792a2518c2a",
"assets/lib/i18n/te_IN.json": "19ec2a14e3017065311d63fb1c3ba44d",
"assets/AssetManifest.bin": "4369e6ac4d2c50ce3a73128faf469128",
"assets/fonts/GothamSSm-Black.ttf": "9bd49cdd4f3006832c8c1e051f1ca59a",
"assets/fonts/GothamSSm-XLight.ttf": "0d59a403b9bef0a8b12da51880e43cdb",
"assets/fonts/GothamSSm-XLightItalic.ttf": "efc4c5baef50975a1d85329c5ba6e8fc",
"assets/fonts/GothamSSm-Medium.ttf": "3cc225a990cc86e7d3a5d291a2ea0f44",
"assets/fonts/GothamSSm-BoldItalic.ttf": "c5b142af2c295f8606ec4bcba80fdc9e",
"assets/fonts/GothamSSm-BlackItalic.ttf": "4a250066bbedb1960bbe6ae7a6ce39fa",
"assets/fonts/GothamSSm-MediumItalic.ttf": "094bcc29d842b3f66e503bdc12875e6e",
"assets/fonts/MaterialIcons-Regular.otf": "77bebf3ed12f4f312b4446a36f13fcd3",
"assets/fonts/GothamSSm-LightItalic.ttf": "23721dcb2afa93f25696faca4a0ada8a",
"assets/fonts/GothamSSm-BookItalic.ttf": "6941513a49d146b342b31334eb8c7a8a",
"assets/fonts/GothamSSm-Light.ttf": "7a7c85043f6019390513170d1d3e57f9",
"assets/fonts/GothamSSm-Book.ttf": "40ae923bc3dd7654525f2c675e72c148",
"assets/fonts/GothamSSm-Bold.ttf": "2071eb324c77d1ca691fca3447c581b3",
"assets/assets/images/logo-characters.png": "32d48ed0baf69cef3a40d631c9e4505a",
"assets/assets/images/mockup.png": "ab2d32537f0ab19b22f9d72f6de42933",
"assets/assets/images/senior.png": "61b67be094521dd65f0d5bf4c784305f",
"assets/assets/images/github.png": "f307a14f48f13a63be7f2e0b2d293131",
"assets/assets/images/shore.jpeg": "b08c1212107eb0f825440aa5d211dd34",
"assets/assets/images/motivation.png": "3323463ffec24870cdedb1c9f4e62a48",
"assets/assets/images/junior.png": "624c1449a1cf5a20647bba16365eaf1d",
"assets/assets/images/logo.png": "553776cafe944e9b2e6d161c489b4aba",
"assets/assets/images/characters/Deer.svg": "e977fed0ed54f3f1f378bdbe323a0138",
"assets/assets/images/characters/Beaver.svg": "008fc064f96b52cc77777a5937742758",
"assets/assets/images/characters/Rabbit.svg": "29aed66cd8d9b23557eec57672e7d6fe",
"assets/assets/images/characters/Fox.svg": "f293acb4b1dc3eef1d1fd2df93203956",
"assets/assets/images/characters/Frog.svg": "c3094c709c49daa1babfe03a66e4d563",
"assets/assets/images/characters/sloth.svg": "a2e9f5ded6b941949a19b1eb67a37124",
"assets/assets/images/bg.png": "f960c381691235037c82ef575d261a50",
"assets/assets/icons/tokilogo.svg": "069c456139b83b4b4c1cb4fd55898969",
"assets/assets/icons/senior.svg": "68d92d1607d977c52a1068e5578d2c59",
"assets/assets/icons/beginner.svg": "dac2efb2161426ca9a966840dda91bd4",
"assets/assets/icons/junior.svg": "27920b5cfa26555086bcad0c439f59b8",
"assets/assets/icons/sophomore.svg": "8d231a059c17385371f6e5f95a8f884f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
