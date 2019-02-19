//Registration Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/sw.js')
        .then(function(reg) {
            //registration worked
            console.log('Registration confirmed!');
        }).catch(function(error) {
            // registration failed
            console.log('Registration failed ' + error);
        });
};

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('v1').then(function(cache) {
            console.log("Open worked!");
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
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
                '/img/10.jpg',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                console.log('Response: ', event.request, 'in cache');
                return response;
            } else {
                console.log('Could not find any response', event.request, 'in cache, FETCHING!');
                return fetch(event.request);
            }
        })
    );
});

self.addEventListener('activate', function(e) {
    var cacheList = ['v2'];

    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                console.log("activate");
                if (cacheList.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});