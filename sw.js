self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('3tv-broadcast-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        // tambahkan aset penting lain jika perlu
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});