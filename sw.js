const CACHE_NAME='aw139-rto-s50-v16';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/icon.svg','./docs/page_s50_85_figure_4_54.png','./docs/page_s50_89_figure_4_56.png','./docs/page_s50_93_figure_4_58.png','./data/figure_4_54_engine_data.json','./data/figure_4_56_engine_data.json','./data/figure_4_58_engine_data.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
