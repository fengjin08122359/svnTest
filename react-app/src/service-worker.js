var CACHE_NAME = "my_cache";  
   var urlsToCache = [  
    '/index.html',  
    '/css/style.css',  
    '/js/script.js'  
   ];  
//这里的self代表ServiceWorkerGlobalScope  
self.addEventListener('install', function(event) {  
//这里的waitUtil会在安装成功之前执行一些预装的操作，但是只建议做一些轻量级和非常重要资源的缓存，减少安装失败的概率。安装成功  
//后ServiceWorker状态会从installing变为installed   
  //event.waitUntil(  
    //    caches.open(CACHE_NAME).then(function(cache) {  
    //         console.log('Opendhe : ',cache);  
     //       return cache.addAll(urlsToCache);  
    //  })  
    //);  
    console.log('Service Worker installed')
});  