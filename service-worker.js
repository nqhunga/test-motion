"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/test-motion/index.html","8d01b8042e47a9fe1dcd2acfe4c6b540"],["/test-motion/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/test-motion/static/js/main.5dc43ce1.js","c733fc705648ab827b19a6c917b5c542"],["/test-motion/static/media/StrangerThings.24a69b0d.ttf","24a69b0d49de39034663d837a985f04b"],["/test-motion/static/media/dustin.c0629de3.jpg","c0629de3b25097b0497d77a864c53187"],["/test-motion/static/media/dustin_logo.c04149f1.jpg","c04149f123986621326c3b16125befeb"],["/test-motion/static/media/eleven_1.3448232a.jpg","3448232a2f68ea621ef54f88b7efa930"],["/test-motion/static/media/eleven_logo.b312165c.jpg","b312165c087f107a8188fc3bcfef1682"],["/test-motion/static/media/hopper_logo.63a46f7a.jpg","63a46f7aca912d92366b90319881f77c"],["/test-motion/static/media/jonathan_logo.ae57bff1.jpg","ae57bff12c7000647bd2de4c13f6ce3c"],["/test-motion/static/media/joyce_logo.f9cfd2dc.jpg","f9cfd2dc5de7f810333574c3677316c4"],["/test-motion/static/media/lucas.d868d9b2.jpg","d868d9b284cddabcbf9cbeefc9b6a4eb"],["/test-motion/static/media/lucas_logo.deda4c03.jpg","deda4c03b6294e8c1ef81160116626d9"],["/test-motion/static/media/mike.77fa84ad.jpg","77fa84ad57eb0d203f9fd8a3b3fe1d9b"],["/test-motion/static/media/mike_logo.eb60f83c.jpg","eb60f83c1afcff631912878f825f01a5"],["/test-motion/static/media/nancy_logo.aee74e1b.jpg","aee74e1b0ad910fd2367e5275997b190"],["/test-motion/static/media/poster_film_1.df089a46.jpg","df089a467e62e6eed7ddfc23ef8c874c"],["/test-motion/static/media/will_logo.348b7e6c.jpg","348b7e6c1d6338bcdb47f84a5d3d578f"],["/test-motion/static/media/will_resize.7abe1640.jpg","7abe16409027cdc04056fc2ba744db7c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/test-motion/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});