//Service Worker Initialization
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js', { scope: '/'})
      .then(function(reg) {
          //registration worked
        console.log('Registration confirmed!');
      })
      .catch(function(error) {
          //registration failed
        console.log('Registration failed: ' + error);
      });
  };
