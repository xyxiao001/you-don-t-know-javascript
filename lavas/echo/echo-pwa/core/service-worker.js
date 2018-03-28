/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author ”xyxiao001”(463618622@qq.com)
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'echo-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([]);

// 缓存appshell
workboxSW.router.registerNavigationRoute('/appshell');

// 缓存请求
workboxSW.router.registerRoute(new RegExp('https://query\.yahooapis\.com/v1/public/yql'),
workboxSW.strategies.networkFirst());
/**
 * example runningCache with api
 */
// workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workboxSW.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );
