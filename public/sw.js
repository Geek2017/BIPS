var cacheName = 'hello-world-page';
var filesToCache = [
  '/',
  '/products.html',
  '/assets/css/bulma.css',
  '/assets/images/logo/logo.png',
  '/assets/css/bulma.css',
  '/assets/css/core.css',
  '/assets/js/slick/slick.css',
  '/assets/js/slick/slick-theme.css',
  '/assets/js/webuipopover/jquery.webui-popover.min.css',
  '/assets/js/izitoast/css/iziToast.min.css',
  '/assets/js/zoom/zoom.css',
  '/assets/js/jpcard/card.css',
  '/assets/css/chosen/chosen.css',
  '/assets/css/icons.min.css',
  '/assets/images/avatars/elie.jpg',
  '/assets/images/bg/sidebar.jpg',
  '/assets/images/avatars/elie.jpg',
  '/assets/images/products/office5.jpg',
  '/assets/images/products/base.jpg',
  '/assets/images/products/kids2.jpg',
  '/assets/images/products/modern-table.png',
  '/assets/images/products/sofa2.jpg',
  '/assets/images/products/modern-bed.jpg',
  '/assets/images/products/red-seat.png',
  '/assets/images/products/house1.png',
  '/assets/images/products/house2.jpg',
  '/assets/images/products/office9.png',
  '/assets/images/products/DSCN3336.jpg',
  '/assets/images/products/office4.jpg',
  '/assets/images/products/office5.jpg',
  '/assets/images/products/office3.jpg',
  '/assets/images/products/jar.jpg',
  '/assets/images/products/bags.png',
  '/assets/images/products/kids4.jpg',
  '/assets/images/products/kids5.jpg',
  '/assets/images/products/kids7.jpg',
  '/assets/images/products/kids8.jpg',
  '/assets/images/products/kids3.png',
  '/assets/images/products/kids6.png',
  '/assets/images/products/kitchen.png',
  '/shop.html',
  '/index.html',
  '/assets/js/app.js',
  '/assets/js/nephos.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
