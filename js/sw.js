//Registration Service Worker

if('serviceWorker' in navigator) {
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

self.addEventListener('fetch' , function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) 
        {if (response) {
            console.log('Response: ', event.request, 'in cache');
            return response;
        }
    else {
        console.log('Could not find any response', event.request, 'in cache, FETCHING!');
        return fetch(event.request);
    }
})
        // caches.match(event.request).catch(function(){   console.log("in match function");
        //     return fetch(event.request).then(function(response) {
        //     return caches.open('v1').then(function(cache) {
        //         cache.put(event.request, response.clone());
        //         return response;
        //         console.log("cloned");
        //     });
        // });
        // })
    );
});

self.addEventListener('activate', function(e) {
    var cacheList = ['v2'];

    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                console.log("activate");
                if(cacheList.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});



/*//Define the Caches
const cache_name = 'restCache';
// console.log('Service Worker: Registered');

const cacheFiles = [
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
];
if('serviceWorker' in navigator) {
    
    navigator.serviceWorker.register('js/sw.js')
  .then(function(reg) {
    console.log('Service worker registered! ');

  })
  .catch(function (err) {
    console.log('Service Worker registration failed: ' + err);
  });
  
  
}
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('restCache').then(function(cache) {
            console.log('Cache Opened');
            return cache.addAll(cacheFiles);
        })
    );
});
*/
/*self.addEventListener('activate', function(e) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('restCache') && cacheName != cache_name;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});*/
/*self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if(response) {
                console.log('Found', e.request, 'in cache');
                return response;
            }
            else {
                console.log('Could not find', e.request, 'in cache, FETCHING!');
                return fetch(e.request)
                .then(function(response) {
                    const clonedResponse = response.clone();
                    caches.open('restCache').then(function(cache) {
                        cache.put(e.request, clonedResponse);
                    })
                    return response;
                })
         
                .catch(function(err) {
                    console.error(err);
                });
            }
            // return fetch(e.request);
        })
    );
    
});*/
/*self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });*/