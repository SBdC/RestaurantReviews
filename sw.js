 let version = 'rest-reviews-v1';
 let CACHESurl = [
   '/',
   './index.html',
   './restaurant.html',
   'js/dbhelper.js',
   'js/main.js',
   'js/restaurant_info.js',
   '/css/styles.css',
   '/data/restaurants.json',
   '/img/1.jpg',
   '/img/2.jpg',
   '/img/3.jpg',
   '/img/4.jpg',
   '/img/5.jpg',
   '/img/6.jpg',
   '/img/7.jpg',
   '/img/8.jpg',
   '/img/9.jpg',
   '/img/10.jpg'
 ];



self.addEventListener('install', function(event) {

  event.waitUntil(caches.open(version + 'core')
    .then(function(cache) {

      return cache.addAll(CACHESurl);

    })
    .then(function(){
      console.log('installation done');
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {

        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});


self.addEventListener('activate', function(event) {
  console.log('activating');

  event.waitUntil(
    caches.keys().then(function(cachesNames) {
      return Promise.all(
        cachesNames.filter(function(cachesNames) {
          return cachesNames.startsWith('rest-reviews-') && cachesNames != version;
        }).map(function(cachesNames) {
          return cache.delete(cacheName);
        })
      )
    }).catch(function(error) {
      console.log("no caches to erase");
      return
    })
  );
})
