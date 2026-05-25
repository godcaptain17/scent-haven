var CACHE = 'scent-haven-v1';
var ASSETS = [
  '/',
  '/index.html',
  '/shop.html',
  '/cart.html',
  '/login.html',
  '/register.html',
  '/assets/css/core.css',
  '/assets/css/pages.css'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).catch(function() {
      return caches.match(e.request);
    })
  );
});
