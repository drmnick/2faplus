self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/extra-mile/',
      '/extra-mile/index.html',
      '/extra-mile/index.js',
      '/extra-mile/style.css',
      '/extra-mile/images/fox1.jpg',
      '/extra-mile/images/fox2.jpg',
      '/extra-mile/images/fox3.jpg',
      '/extra-mile/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
