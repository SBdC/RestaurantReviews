//serviceworker Registration
if ('serviceWorker' in navigator) {
  console.log('service worker registration in progress')
  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log('Registered');
  }).catch(function() {
    console.log('Did not register');
  })

} else {
  console.log('service worked not supported');
}
