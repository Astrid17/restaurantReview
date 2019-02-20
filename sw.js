let staticCacheName = 'restaurant-static-v1';




self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				// './',
				'./index.html',
				'./restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./js/sw_register.js',
				'./sw.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg'
			]);
		})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('restaurant-') &&
						   cacheName != staticCacheName;
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			return response || fetch(event.request);
		})
	);
});

// // Caches Names
// var staticCacheName = 'restaurant_cache';
// // Set Get Random number for Cache ID
//  var randomNumberBetween0and19999 = Math.floor(Math.random() * 20000);
//  var cache_id = randomNumberBetween0and19999;
//  staticCacheName += cache_id;



// //Service Worker Initialization
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//     .register('js/sw.js')
//       .then(function(reg) {
//           //registration worked
//         console.log('Registration confirmed!');
//       })
//       .catch(function(error) {
//           //registration failed
//         console.log('Registration failed: ' + error);
//       });
//   };



// self.addEventListener('install', function(e) {
//   e.waitUntil(
//     caches.open(staticCacheName).then(function(cache) {
//         console.log("Open worked!");
//     return cache.addAll([
//       '/index.html',
//       '/restaurant.html',
//       '/css/styles.css',
//       '/css/responsive.css',
//       '/js/dbhelper.js',
//       '/js/main.js',
//       '/js/restaurant_info.js',
//       '/data/restaurants.json',
//       '/img/1.jpg',
//       '/img/2.jpg',
//       '/img/3.jpg',
//       '/img/4.jpg',
//       '/img/5.jpg',
//       '/img/6.jpg',
//       '/img/7.jpg',
//       '/img/8.jpg',
//       '/img/9.jpg',
//       '/img/10.jpg',
//     ])
//     .catch(function(error) {
      
//     });
//   }));
// });

// self.addEventListener('activate', function(e) {
//   e.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function(cacheName) {
//           return cacheName.startsWith('restaurant-') &&
//                  cacheName != staticCacheName;
//         }).map(function(cacheName) {
//           return caches.delete(cacheName);
//         })
//       );
//     })
//   );
// });


// self.addEventListener('fetch', 
// function(event) 
// {
//   event.respondWith
//   (    
//     caches.match(event.request)
//     .then
//     (
//       function(response) 
//       {
//         if (response !== undefined) 
//         {
//             console.log('Response: ', event.request, 'in cache');
//           return response;
//         } 
      
//         else 
//         {   
//             console.log('Could not find any response', event.request, 'in cache, FETCHING!');     
//           return fetch(event.request).then
//           (
//               function (response) 
//               {
//                 let responseClone = response.clone();
                
//                 caches.open(staticCacheName)
//                 .then
//                 (
//                   function (cache) 
//                   {
//                     cache.put(event.request, responseClone);
//                   }
//                 );
//                 return response;
//               }
//           );
//         }
//       }
//     ) 
      
//   ); 

// }
// );



 