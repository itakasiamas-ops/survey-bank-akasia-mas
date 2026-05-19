const CACHE_NAME = 'akasia-survey-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install: simpan file ke cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch: ambil dari cache dulu, lalu network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});