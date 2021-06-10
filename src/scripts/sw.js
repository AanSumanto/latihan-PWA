self.addEventListener('install', (event)=> {
    console.log('Installing Service Worker...');
    
    
    // TODO: Caching App Shell Resource

});

self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker');


    //TODO: Delete Old Caches

})

self.addEventListener('fetch', (event) => {
    console.log(event.request);


    event.responWith(fetch(event.request));
    //TODO: Add/Get fetch request to/from caches
});