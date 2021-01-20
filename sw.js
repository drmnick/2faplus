//TODO: Remove cache delete
caches.keys().then(function(names) {
    for (let name of names)
        caches.delete(name);
});

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('em-store').then((cache) => cache.addAll([
      '/extra-mile/',
      '/extra-mile/index.html',
      '/extra-mile/index.js',
      '/extra-mile/style.css'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
