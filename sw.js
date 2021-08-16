const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})


self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if(request.method !== 'GET') {
        return;
    }

    // actualizar el cache
    event.respondWith(cachedResponse(request))

    // actualizar el cache
    event.waitUntil(updatedCache(request))
})

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
       /*  '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/PALAYE ROYALE  Tonight Is The Night I Die (Official Music Video).mp4' */
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request)
}

async function updatedCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request)
    return cache.put(request, response)
}