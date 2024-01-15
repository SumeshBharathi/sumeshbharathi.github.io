'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8674d608133c6b31fe86b3ce671914ef",
"index.html": "0f2c58b1f0dea1b1966e106279b522fa",
"/": "0f2c58b1f0dea1b1966e106279b522fa",
"main.dart.js": "dd4caf190861666ad575eb468b46e5cc",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a8c66977238a08be29bd14bd0d1e4c50",
"assets/AssetManifest.json": "2099abb94f7d83411e4fcceeb2c44497",
"assets/NOTICES": "d51ef09957c1f00d98bfb60f5d1f2e1b",
"assets/FontManifest.json": "1ece425202c02d18bc891b2244ca4752",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "0c5146e3cd76a093b2da72c32b54d700",
"assets/fonts/MaterialIcons-Regular.otf": "ce4e29f8eac5d129612fffd4b49764af",
"assets/assets/images/lp/m3.png": "74804f891758a2f5ecf84e44a6ca29d1",
"assets/assets/images/lp/battery.png": "17d5927669191f06320bd2016be3b1c0",
"assets/assets/images/lp/steeringWheel.png": "4f4afd7f56494bdca16e31eefefd667f",
"assets/assets/images/lp/mic_grey.png": "be0c3e18d4862f304d963f0b97b98053",
"assets/assets/images/lp/tyre_prsr.png": "7a535edbd770edd11160faa7c0c44369",
"assets/assets/images/lp/electric.png": "265185c14a002c0266cccd59915f1238",
"assets/assets/images/lp/m3Riding.png": "0c376d6b1051bddc45dd1325df00c96a",
"assets/assets/images/lp/electric_grey.png": "438461db9374724e529c3e7b9c489941",
"assets/assets/images/lp/m3RidingL.png": "89eb19f5b82017dfec6ddd1d510a1bca",
"assets/assets/images/lp/headlight.png": "37eb6b84b3d7e2ac98ca3a34f407cd5e",
"assets/assets/images/lp/SpeedLimit.png": "41047a4ab8b0652770e31f7d37506749",
"assets/assets/images/lp/camera.png": "8332aa72eae44233e79812f606868526",
"assets/assets/images/lp/model3_logo.png": "fb0c9968a2ed044e85c5f58f1aeaf546",
"assets/assets/images/dog.gif": "0b830a7933b71b6d95beccde87fab1cf",
"assets/assets/images/musicAlbums/8.jpg": "0d8dc1a2a60407d04368f1c125c0c294",
"assets/assets/images/musicAlbums/9.jpg": "2b804350e48a5771766c913710f1ef01",
"assets/assets/images/musicAlbums/14.jpg": "deeabff2e21eb37b8378eec272b87ffb",
"assets/assets/images/musicAlbums/15.jpg": "04a4487046410aa3361c335cbab27969",
"assets/assets/images/musicAlbums/12.jpg": "f9886b4e57c02bdf1cb08e71c29c19ba",
"assets/assets/images/musicAlbums/13.jpg": "3329a806acdf8482d0dd872c98ed686b",
"assets/assets/images/musicAlbums/11.jpg": "46eb79260fd3bb21bdffb9aaf2a3c033",
"assets/assets/images/musicAlbums/10.jpg": "e9929ba86dc2a6af77534c1c2309a6b1",
"assets/assets/images/musicAlbums/4.jpg": "51acb6ad4dc700a891dd7f8edd587f73",
"assets/assets/images/musicAlbums/5.jpg": "808dcf8185298eeaedb98b76afbec1c0",
"assets/assets/images/musicAlbums/7.jpg": "e822b84498ea3c38da4568385573cb78",
"assets/assets/images/musicAlbums/6.jpg": "d3446fd1044f06896cfbdae70a67abdc",
"assets/assets/images/musicAlbums/2.jpg": "2fb7c1e9a4f35eb03348e50dd87e2a56",
"assets/assets/images/musicAlbums/3.jpg": "cda399ef4263a867d9208af1d00243f2",
"assets/assets/images/musicAlbums/1.jpg": "6e39048bce0188f655b47691e55b1d2b",
"assets/assets/images/cars/carBO.png": "8af733fe7080ebf24e62c8f140aebf9f",
"assets/assets/images/cars/headlights.png": "174006ef46123df7dbe785d8a92f727d",
"assets/assets/images/cars/croppedCar.png": "e2ad59c0c9d5ada35f7565a147422222",
"assets/assets/images/cars/car3FO.png": "4c8606ef7d7f8fdcc2ab76761851da4e",
"assets/assets/images/cars/car.png": "8c3cd72c2d9be2f803e34a931650557c",
"assets/assets/images/cars/carCS.png": "90dc083cc7bb99090c8881f7d08a6fde",
"assets/assets/images/playStore.png": "80c62d7cc0e9ae633296ea6e1d88924d",
"assets/assets/images/bottombar/b5d.png": "92272252770392f6eb372fb6a59ab9ba",
"assets/assets/images/bottombar/b7X.png": "b7ea49493b2cddcf8140ec7217a9dcd4",
"assets/assets/images/bottombar/b5u.png": "09a18fd3f9fbf0462ac4638c801b08ad",
"assets/assets/images/bottombar/b9.png": "4f52a24874cd6bd48db8faf42c80ee15",
"assets/assets/images/bottombar/b8.png": "b8054c1195643b2b273515d4f9c41a93",
"assets/assets/images/bottombar/b3X.png": "9701afa0870283872c1ed4cf603854b0",
"assets/assets/images/bottombar/b10.png": "093827f95598a7edc6f33cfb3c4ccdf1",
"assets/assets/images/bottombar/b2X.png": "9160905c45d9ed841a001345b60c774f",
"assets/assets/images/bottombar/b4.png": "1b8f0a76fac93c2637cef5fe84f6108a",
"assets/assets/images/bottombar/b6.png": "cd34ac1fb5dcded0352a325f845d4ec4",
"assets/assets/images/bottombar/b7.png": "8dc249b4ac969c5d0aa41a31c74185ae",
"assets/assets/images/bottombar/b3.png": "dd42eacf13e9915c0309393420baba54",
"assets/assets/images/bottombar/b4X.png": "5344988a96a4f2cf10fae1ee7832f3bf",
"assets/assets/images/bottombar/b2.png": "6f1f83241a8ba4982eeab4a70105aec2",
"assets/assets/images/bottombar/b1.png": "4c5df921a918ccbd5c794704d876386d",
"assets/assets/images/rp/m3SmallLogo.png": "3e73c471b253514aeeb014d74a1ecb34",
"assets/assets/images/rp/bluetooth.png": "ee45cbd153ac753031b3df97241eb781",
"assets/assets/images/rp/settings/settings.png": "c57850ec17c2f79d8503a66a6be75c82",
"assets/assets/images/rp/settings/steeringwheel.png": "9f29ef963df20020b023c04191bb500c",
"assets/assets/images/rp/settings/displayicon.png": "bfa20e3f8409022fe529c659c8572930",
"assets/assets/images/rp/settings/rmirror.png": "a055f050ce272e8d69b951ffdd56faae",
"assets/assets/images/rp/settings/gloveboxicon.png": "60593e586dabb43b03267124dfbf5b7e",
"assets/assets/images/rp/settings/lmirror.png": "d0aa7ff023861cb87ec0807740412f59",
"assets/assets/images/rp/settings/parking.png": "2bcad38252f8e1ac84c303d6b6b17507",
"assets/assets/images/rp/settings/brightness.png": "14802eb19daeeb99ef16ea1faba97828",
"assets/assets/images/rp/settings/headlightIcon.png": "8029b2e478ff3febfed36288e0ebe8c5",
"assets/assets/images/rp/settings/settingsicon.png": "8003011d97df6be06d43900cb3c31bca",
"assets/assets/images/rp/settings/warningicon.png": "12169d1e76e825e8308bda4fa381bb8e",
"assets/assets/images/rp/settings/wiper.png": "df8ff23a70704f6459c87b809bb22821",
"assets/assets/images/rp/trackL.png": "6ee46b0ebdadf5c1d800c4d4354bdc66",
"assets/assets/images/rp/battery.png": "e387ad321522a9c199c20f27bc239f52",
"assets/assets/images/rp/expand%2520music.png": "276f21df069754b414c62de55fac5166",
"assets/assets/images/rp/lock.png": "214d11b93bc53b93695709510c3338be",
"assets/assets/images/rp/alert.png": "a78cec014265001b158690ab6298e057",
"assets/assets/images/rp/track.png": "661b8f32a5ace2d39ef362f94b56e48c",
"assets/assets/images/rp/navicon.png": "a0f2cecc409bc85a2d2d4c7b886ad5bd",
"assets/assets/images/rp/dogLogo.png": "2c73986f1503dec32a809f5356b056e0",
"assets/assets/images/rp/Tesla%2520Logo.jpg": "766df820a25ea2a9018b81c1021d09b9",
"assets/assets/images/rp/Tesla%2520Logo.png": "1d5fc603949aaed985f30a4f14a6b726",
"assets/assets/images/rp/cell%2520signal.png": "4be0208a5ad655d9cfb2aaa63e4c6796",
"assets/assets/images/rp/m3InfoPage.png": "49435d611d56602f3a6e7e741984f65e",
"assets/assets/images/rp/Tesla%2520Logo1.png": "5a762eed718550752fe4e8f79f06fc2d",
"assets/assets/fonts/TeslaIcons.ttf": "bc95e4c09742a2c90c4ea888c1ac5c22",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
