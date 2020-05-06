var __wpo = {
  "assets": {
    "main": [
      "/runtime~main.ea9ab13a8ca89a4e2fd8.js",
      "/"
    ],
    "additional": [
      "/vendor.45635cddcb994f3169ba.chunk.js",
      "/1.33c4369303950211495b.chunk.js",
      "/2.34eb8b8075ad5b9c3830.chunk.js",
      "/3.98e6ff4fca0d9fb8b4ba.chunk.js",
      "/main.3a65c732ef29b8c2d164.chunk.js",
      "/6.0a08e0a2e9fbe1dc9c9c.chunk.js",
      "/7.3ca4a411363a221ed251.chunk.js",
      "/8.8e9f7fda41d274c90ddc.chunk.js",
      "/9.c66493ca20491aab56b8.chunk.js",
      "/10.1d51d2de0b0ec11916f2.chunk.js",
      "/11.fcbe8f6c005bb853cd85.chunk.js",
      "/12.b5f0ed2f1dca58d7dc32.chunk.js",
      "/13.b0b188fb43ab41efb34d.chunk.js",
      "/14.4ca349a9963254ffec8f.chunk.js",
      "/15.5567c4c93e3c05442770.chunk.js",
      "/16.b11ffa9c90f4e5036fae.chunk.js",
      "/17.a2f4494adf703c1a394c.chunk.js",
      "/18.0ea47b3c1a58c8825b34.chunk.js",
      "/19.bd537d50041c07f26d47.chunk.js",
      "/20.bfe54ef7a53407280aad.chunk.js",
      "/21.80365937bd8fc65f2f34.chunk.js"
    ],
    "optional": []
  },
  "externals": [],
  "hashesMap": {
    "f7957e328a836bfa295bf3733ce291bd351b13d9": "/vendor.45635cddcb994f3169ba.chunk.js",
    "eb39c07e61eb1ab3d3376761caba72a981247512": "/1.33c4369303950211495b.chunk.js",
    "5e53557ee26f3958028f8d96f3ba0da1240a35bf": "/2.34eb8b8075ad5b9c3830.chunk.js",
    "c81c0285a421d0c8d01b581d8d76f3a82473a226": "/3.98e6ff4fca0d9fb8b4ba.chunk.js",
    "32e6d9af623cab14a149ef63be5f40c49123a675": "/main.3a65c732ef29b8c2d164.chunk.js",
    "44634605ee1c9c2ec1d69c57a2e92021f0845113": "/runtime~main.ea9ab13a8ca89a4e2fd8.js",
    "39869be7229df3e5d562802bc82e7d1c7a9fe184": "/6.0a08e0a2e9fbe1dc9c9c.chunk.js",
    "3b2af243386c5284f30c9563fe686dfec4fa75e1": "/7.3ca4a411363a221ed251.chunk.js",
    "9367fcf38724bf23d2b94c7f79837c2c585e72c0": "/8.8e9f7fda41d274c90ddc.chunk.js",
    "6aeaeebc60d596660708c3c7f1fe97b24c78fe45": "/9.c66493ca20491aab56b8.chunk.js",
    "b605323ec14b68de74c45ac4cd2f507787162caf": "/10.1d51d2de0b0ec11916f2.chunk.js",
    "272f4c0a549395ac01d05bf1f945f2abb797dd70": "/11.fcbe8f6c005bb853cd85.chunk.js",
    "e177a8b38976d54ddd1d680b9863657b2420d52a": "/12.b5f0ed2f1dca58d7dc32.chunk.js",
    "b4693fee89e3eeaf845c8cc1d5d39b808cbe32a7": "/13.b0b188fb43ab41efb34d.chunk.js",
    "5a18f78be96ad0c825ef4ba94b3bf06f3f39c5b3": "/14.4ca349a9963254ffec8f.chunk.js",
    "3ecbff695a8490b44debeaa1d6ea284e34c70f31": "/15.5567c4c93e3c05442770.chunk.js",
    "41e58946873a2f80a166493921994d1f99d7db94": "/16.b11ffa9c90f4e5036fae.chunk.js",
    "678c838fa6c35afe3c6bc7022637c8b1b2538989": "/17.a2f4494adf703c1a394c.chunk.js",
    "ffff6054abbf2018dd19248a721ae1fca35207ae": "/18.0ea47b3c1a58c8825b34.chunk.js",
    "a6d1445c320092646309c84fc53be8e1eb84fde3": "/19.bd537d50041c07f26d47.chunk.js",
    "7f937891541588396d34b64c1b6d83335d6f706e": "/20.bfe54ef7a53407280aad.chunk.js",
    "e5c4f0340deefa3a5e2057072fb8a8ecdc109471": "/21.80365937bd8fc65f2f34.chunk.js",
    "3916bd02c8ef93ef8ac37b952fe931d81eacb062": "/"
  },
  "strategy": "changed",
  "responseStrategy": "cache-first",
  "version": "03/05/2020 13:56:55",
  "name": "webpack-offline",
  "pluginVersion": "5.0.6",
  "relativePaths": false
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "22249e1ea7baa06e7c1b");
/******/ })
/************************************************************************/
/******/ ({

/***/ "22249e1ea7baa06e7c1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var waitUntil = ExtendableEvent.prototype.waitUntil;
  var respondWith = FetchEvent.prototype.respondWith;
  var promisesMap = new WeakMap();

  ExtendableEvent.prototype.waitUntil = function (promise) {
    var extendableEvent = this;
    var promises = promisesMap.get(extendableEvent);

    if (promises) {
      promises.push(Promise.resolve(promise));
      return;
    }

    promises = [Promise.resolve(promise)];
    promisesMap.set(extendableEvent, promises);

    // call original method
    return waitUntil.call(extendableEvent, Promise.resolve().then(function processPromises() {
      var len = promises.length;

      // wait for all to settle
      return Promise.all(promises.map(function (p) {
        return p["catch"](function () {});
      })).then(function () {
        // have new items been added? If so, wait again
        if (promises.length != len) return processPromises();
        // we're done!
        promisesMap["delete"](extendableEvent);
        // reject if one of the promises rejected
        return Promise.all(promises);
      });
    }));
  };

  FetchEvent.prototype.respondWith = function (promise) {
    this.waitUntil(promise);
    return respondWith.call(this, promise);
  };
})();;
        'use strict';

if (typeof DEBUG === 'undefined') {
  var DEBUG = false;
}

function WebpackServiceWorker(params, helpers) {
  var cacheMaps = helpers.cacheMaps;
  // navigationPreload: true, { map: (URL) => URL, test: (URL) => boolean }
  var navigationPreload = helpers.navigationPreload;

  // (update)strategy: changed, all
  var strategy = params.strategy;
  // responseStrategy: cache-first, network-first
  var responseStrategy = params.responseStrategy;

  var assets = params.assets;

  var hashesMap = params.hashesMap;
  var externals = params.externals;

  var prefetchRequest = params.prefetchRequest || {
    credentials: 'same-origin',
    mode: 'cors'
  };

  var CACHE_PREFIX = params.name;
  var CACHE_TAG = params.version;
  var CACHE_NAME = CACHE_PREFIX + ':' + CACHE_TAG;

  var PRELOAD_CACHE_NAME = CACHE_PREFIX + '$preload';
  var STORED_DATA_KEY = '__offline_webpack__data';

  mapAssets();

  var allAssets = [].concat(assets.main, assets.additional, assets.optional);

  self.addEventListener('install', function (event) {
    console.log('[SW]:', 'Install event');

    var installing = undefined;

    if (strategy === 'changed') {
      installing = cacheChanged('main');
    } else {
      installing = cacheAssets('main');
    }

    event.waitUntil(installing);
  });

  self.addEventListener('activate', function (event) {
    console.log('[SW]:', 'Activate event');

    var activation = cacheAdditional();

    // Delete all assets which name starts with CACHE_PREFIX and
    // is not current cache (CACHE_NAME)
    activation = activation.then(storeCacheData);
    activation = activation.then(deleteObsolete);
    activation = activation.then(function () {
      if (self.clients && self.clients.claim) {
        return self.clients.claim();
      }
    });

    if (navigationPreload && self.registration.navigationPreload) {
      activation = Promise.all([activation, self.registration.navigationPreload.enable()]);
    }

    event.waitUntil(activation);
  });

  function cacheAdditional() {
    if (!assets.additional.length) {
      return Promise.resolve();
    }

    if (DEBUG) {
      console.log('[SW]:', 'Caching additional');
    }

    var operation = undefined;

    if (strategy === 'changed') {
      operation = cacheChanged('additional');
    } else {
      operation = cacheAssets('additional');
    }

    // Ignore fail of `additional` cache section
    return operation['catch'](function (e) {
      console.error('[SW]:', 'Cache section `additional` failed to load');
    });
  }

  function cacheAssets(section) {
    var batch = assets[section];

    return caches.open(CACHE_NAME).then(function (cache) {
      return addAllNormalized(cache, batch, {
        bust: params.version,
        request: prefetchRequest,
        failAll: section === 'main'
      });
    }).then(function () {
      logGroup('Cached assets: ' + section, batch);
    })['catch'](function (e) {
      console.error(e);
      throw e;
    });
  }

  function cacheChanged(section) {
    return getLastCache().then(function (args) {
      if (!args) {
        return cacheAssets(section);
      }

      var lastCache = args[0];
      var lastKeys = args[1];
      var lastData = args[2];

      var lastMap = lastData.hashmap;
      var lastVersion = lastData.version;

      if (!lastData.hashmap || lastVersion === params.version) {
        return cacheAssets(section);
      }

      var lastHashedAssets = Object.keys(lastMap).map(function (hash) {
        return lastMap[hash];
      });

      var lastUrls = lastKeys.map(function (req) {
        var url = new URL(req.url);
        url.search = '';
        url.hash = '';

        return url.toString();
      });

      var sectionAssets = assets[section];
      var moved = [];
      var changed = sectionAssets.filter(function (url) {
        if (lastUrls.indexOf(url) === -1 || lastHashedAssets.indexOf(url) === -1) {
          return true;
        }

        return false;
      });

      Object.keys(hashesMap).forEach(function (hash) {
        var asset = hashesMap[hash];

        // Return if not in sectionAssets or in changed or moved array
        if (sectionAssets.indexOf(asset) === -1 || changed.indexOf(asset) !== -1 || moved.indexOf(asset) !== -1) return;

        var lastAsset = lastMap[hash];

        if (lastAsset && lastUrls.indexOf(lastAsset) !== -1) {
          moved.push([lastAsset, asset]);
        } else {
          changed.push(asset);
        }
      });

      logGroup('Changed assets: ' + section, changed);
      logGroup('Moved assets: ' + section, moved);

      var movedResponses = Promise.all(moved.map(function (pair) {
        return lastCache.match(pair[0]).then(function (response) {
          return [pair[1], response];
        });
      }));

      return caches.open(CACHE_NAME).then(function (cache) {
        var move = movedResponses.then(function (responses) {
          return Promise.all(responses.map(function (pair) {
            return cache.put(pair[0], pair[1]);
          }));
        });

        return Promise.all([move, addAllNormalized(cache, changed, {
          bust: params.version,
          request: prefetchRequest,
          failAll: section === 'main',
          deleteFirst: section !== 'main'
        })]);
      });
    });
  }

  function deleteObsolete() {
    return caches.keys().then(function (keys) {
      var all = keys.map(function (key) {
        if (key.indexOf(CACHE_PREFIX) !== 0 || key.indexOf(CACHE_NAME) === 0) return;

        console.log('[SW]:', 'Delete cache:', key);
        return caches['delete'](key);
      });

      return Promise.all(all);
    });
  }

  function getLastCache() {
    return caches.keys().then(function (keys) {
      var index = keys.length;
      var key = undefined;

      while (index--) {
        key = keys[index];

        if (key.indexOf(CACHE_PREFIX) === 0) {
          break;
        }
      }

      if (!key) return;

      var cache = undefined;

      return caches.open(key).then(function (_cache) {
        cache = _cache;
        return _cache.match(new URL(STORED_DATA_KEY, location).toString());
      }).then(function (response) {
        if (!response) return;

        return Promise.all([cache, cache.keys(), response.json()]);
      });
    });
  }

  function storeCacheData() {
    return caches.open(CACHE_NAME).then(function (cache) {
      var data = new Response(JSON.stringify({
        version: params.version,
        hashmap: hashesMap
      }));

      return cache.put(new URL(STORED_DATA_KEY, location).toString(), data);
    });
  }

  self.addEventListener('fetch', function (event) {
    // Handle only GET requests
    if (event.request.method !== 'GET') {
      return;
    }

    // This prevents some weird issue with Chrome DevTools and 'only-if-cached'
    // Fixes issue #385, also ref to:
    // - https://github.com/paulirish/caltrainschedule.io/issues/49
    // - https://bugs.chromium.org/p/chromium/issues/detail?id=823392
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
      return;
    }

    var url = new URL(event.request.url);
    url.hash = '';

    var urlString = url.toString();

    // Not external, so search part of the URL should be stripped,
    // if it's external URL, the search part should be kept
    if (externals.indexOf(urlString) === -1) {
      url.search = '';
      urlString = url.toString();
    }

    var assetMatches = allAssets.indexOf(urlString) !== -1;
    var cacheUrl = urlString;

    if (!assetMatches) {
      var cacheRewrite = matchCacheMap(event.request);

      if (cacheRewrite) {
        cacheUrl = cacheRewrite;
        assetMatches = true;
      }
    }

    if (!assetMatches) {
      // Use request.mode === 'navigate' instead of isNavigateRequest
      // because everything what supports navigationPreload supports
      // 'navigate' request.mode
      if (event.request.mode === 'navigate') {
        // Requesting with fetchWithPreload().
        // Preload is used only if navigationPreload is enabled and
        // navigationPreload mapping is not used.
        if (navigationPreload === true) {
          event.respondWith(fetchWithPreload(event));
          return;
        }
      }

      // Something else, positive, but not `true`
      if (navigationPreload) {
        var preloadedResponse = retrivePreloadedResponse(event);

        if (preloadedResponse) {
          event.respondWith(preloadedResponse);
          return;
        }
      }

      // Logic exists here if no cache match
      return;
    }

    // Cache handling/storing/fetching starts here
    var resource = undefined;

    if (responseStrategy === 'network-first') {
      resource = networkFirstResponse(event, urlString, cacheUrl);
    }
    // 'cache-first' otherwise
    // (responseStrategy has been validated before)
    else {
        resource = cacheFirstResponse(event, urlString, cacheUrl);
      }

    event.respondWith(resource);
  });

  self.addEventListener('message', function (e) {
    var data = e.data;
    if (!data) return;

    switch (data.action) {
      case 'skipWaiting':
        {
          if (self.skipWaiting) self.skipWaiting();
        }break;
    }
  });

  function cacheFirstResponse(event, urlString, cacheUrl) {
    handleNavigationPreload(event);

    return cachesMatch(cacheUrl, CACHE_NAME).then(function (response) {
      if (response) {
        if (DEBUG) {
          console.log('[SW]:', 'URL [' + cacheUrl + '](' + urlString + ') from cache');
        }

        return response;
      }

      // Load and cache known assets
      var fetching = fetch(event.request).then(function (response) {
        if (!response.ok) {
          if (DEBUG) {
            console.log('[SW]:', 'URL [' + urlString + '] wrong response: [' + response.status + '] ' + response.type);
          }

          return response;
        }

        if (DEBUG) {
          console.log('[SW]:', 'URL [' + urlString + '] from network');
        }

        if (cacheUrl === urlString) {
          (function () {
            var responseClone = response.clone();
            var storing = caches.open(CACHE_NAME).then(function (cache) {
              return cache.put(urlString, responseClone);
            }).then(function () {
              console.log('[SW]:', 'Cache asset: ' + urlString);
            });

            event.waitUntil(storing);
          })();
        }

        return response;
      });

      return fetching;
    });
  }

  function networkFirstResponse(event, urlString, cacheUrl) {
    return fetchWithPreload(event).then(function (response) {
      if (response.ok) {
        if (DEBUG) {
          console.log('[SW]:', 'URL [' + urlString + '] from network');
        }

        return response;
      }

      // Throw to reach the code in the catch below
      throw response;
    })
    // This needs to be in a catch() and not just in the then() above
    // cause if your network is down, the fetch() will throw
    ['catch'](function (erroredResponse) {
      if (DEBUG) {
        console.log('[SW]:', 'URL [' + urlString + '] from cache if possible');
      }

      return cachesMatch(cacheUrl, CACHE_NAME).then(function (response) {
        if (response) {
          return response;
        }

        if (erroredResponse instanceof Response) {
          return erroredResponse;
        }

        // Not a response at this point, some other error
        throw erroredResponse;
        // return Response.error();
      });
    });
  }

  function handleNavigationPreload(event) {
    if (navigationPreload && typeof navigationPreload.map === 'function' &&
    // Use request.mode === 'navigate' instead of isNavigateRequest
    // because everything what supports navigationPreload supports
    // 'navigate' request.mode
    event.preloadResponse && event.request.mode === 'navigate') {
      var mapped = navigationPreload.map(new URL(event.request.url), event.request);

      if (mapped) {
        storePreloadedResponse(mapped, event);
      }
    }
  }

  // Temporary in-memory store for faster access
  var navigationPreloadStore = new Map();

  function storePreloadedResponse(_url, event) {
    var url = new URL(_url, location);
    var preloadResponsePromise = event.preloadResponse;

    navigationPreloadStore.set(preloadResponsePromise, {
      url: url,
      response: preloadResponsePromise
    });

    var isSamePreload = function isSamePreload() {
      return navigationPreloadStore.has(preloadResponsePromise);
    };

    var storing = preloadResponsePromise.then(function (res) {
      // Return if preload isn't enabled or hasn't happened
      if (!res) return;

      // If navigationPreloadStore already consumed
      // or navigationPreloadStore already contains another preload,
      // then do not store anything and return
      if (!isSamePreload()) {
        return;
      }

      var clone = res.clone();

      // Storing the preload response for later consume (hasn't yet been consumed)
      return caches.open(PRELOAD_CACHE_NAME).then(function (cache) {
        if (!isSamePreload()) return;

        return cache.put(url, clone).then(function () {
          if (!isSamePreload()) {
            return caches.open(PRELOAD_CACHE_NAME).then(function (cache) {
              return cache['delete'](url);
            });
          }
        });
      });
    });

    event.waitUntil(storing);
  }

  function retriveInMemoryPreloadedResponse(url) {
    if (!navigationPreloadStore) {
      return;
    }

    var foundResponse = undefined;
    var foundKey = undefined;

    navigationPreloadStore.forEach(function (store, key) {
      if (store.url.href === url.href) {
        foundResponse = store.response;
        foundKey = key;
      }
    });

    if (foundResponse) {
      navigationPreloadStore['delete'](foundKey);
      return foundResponse;
    }
  }

  function retrivePreloadedResponse(event) {
    var url = new URL(event.request.url);

    if (self.registration.navigationPreload && navigationPreload && navigationPreload.test && navigationPreload.test(url, event.request)) {} else {
      return;
    }

    var fromMemory = retriveInMemoryPreloadedResponse(url);
    var request = event.request;

    if (fromMemory) {
      event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function (cache) {
        return cache['delete'](request);
      }));

      return fromMemory;
    }

    return cachesMatch(request, PRELOAD_CACHE_NAME).then(function (response) {
      if (response) {
        event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function (cache) {
          return cache['delete'](request);
        }));
      }

      return response || fetch(event.request);
    });
  }

  function mapAssets() {
    Object.keys(assets).forEach(function (key) {
      assets[key] = assets[key].map(function (path) {
        var url = new URL(path, location);

        url.hash = '';

        if (externals.indexOf(path) === -1) {
          url.search = '';
        }

        return url.toString();
      });
    });

    hashesMap = Object.keys(hashesMap).reduce(function (result, hash) {
      var url = new URL(hashesMap[hash], location);
      url.search = '';
      url.hash = '';

      result[hash] = url.toString();
      return result;
    }, {});

    externals = externals.map(function (path) {
      var url = new URL(path, location);
      url.hash = '';

      return url.toString();
    });
  }

  function addAllNormalized(cache, requests, options) {
    var bustValue = options.bust;
    var failAll = options.failAll !== false;
    var deleteFirst = options.deleteFirst === true;
    var requestInit = options.request || {
      credentials: 'omit',
      mode: 'cors'
    };

    var deleting = Promise.resolve();

    if (deleteFirst) {
      deleting = Promise.all(requests.map(function (request) {
        return cache['delete'](request)['catch'](function () {});
      }));
    }

    return Promise.all(requests.map(function (request) {
      if (bustValue) {
        request = applyCacheBust(request, bustValue);
      }

      return fetch(request, requestInit).then(fixRedirectedResponse).then(function (response) {
        if (!response.ok) {
          return { error: true };
        }

        return { response: response };
      }, function () {
        return { error: true };
      });
    })).then(function (responses) {
      if (failAll && responses.some(function (data) {
        return data.error;
      })) {
        return Promise.reject(new Error('Wrong response status'));
      }

      if (!failAll) {
        responses = responses.filter(function (data) {
          return !data.error;
        });
      }

      return deleting.then(function () {
        var addAll = responses.map(function (_ref, i) {
          var response = _ref.response;

          return cache.put(requests[i], response);
        });

        return Promise.all(addAll);
      });
    });
  }

  function matchCacheMap(request) {
    var urlString = request.url;
    var url = new URL(urlString);

    var requestType = undefined;

    if (isNavigateRequest(request)) {
      requestType = 'navigate';
    } else if (url.origin === location.origin) {
      requestType = 'same-origin';
    } else {
      requestType = 'cross-origin';
    }

    for (var i = 0; i < cacheMaps.length; i++) {
      var map = cacheMaps[i];

      if (!map) continue;
      if (map.requestTypes && map.requestTypes.indexOf(requestType) === -1) {
        continue;
      }

      var newString = undefined;

      if (typeof map.match === 'function') {
        newString = map.match(url, request);
      } else {
        newString = urlString.replace(map.match, map.to);
      }

      if (newString && newString !== urlString) {
        return newString;
      }
    }
  }

  function fetchWithPreload(event) {
    if (!event.preloadResponse || navigationPreload !== true) {
      return fetch(event.request);
    }

    return event.preloadResponse.then(function (response) {
      return response || fetch(event.request);
    });
  }
}

function cachesMatch(request, cacheName) {
  return caches.match(request, {
    cacheName: cacheName
  }).then(function (response) {
    if (isNotRedirectedResponse(response)) {
      return response;
    }

    // Fix already cached redirected responses
    return fixRedirectedResponse(response).then(function (fixedResponse) {
      return caches.open(cacheName).then(function (cache) {
        return cache.put(request, fixedResponse);
      }).then(function () {
        return fixedResponse;
      });
    });
  })
  // Return void if error happened (cache not found)
  ['catch'](function () {});
}

function applyCacheBust(asset, key) {
  var hasQuery = asset.indexOf('?') !== -1;
  return asset + (hasQuery ? '&' : '?') + '__uncache=' + encodeURIComponent(key);
}

function isNavigateRequest(request) {
  return request.mode === 'navigate' || request.headers.get('Upgrade-Insecure-Requests') || (request.headers.get('Accept') || '').indexOf('text/html') !== -1;
}

function isNotRedirectedResponse(response) {
  return !response || !response.redirected || !response.ok || response.type === 'opaqueredirect';
}

// Based on https://github.com/GoogleChrome/sw-precache/pull/241/files#diff-3ee9060dc7a312c6a822cac63a8c630bR85
function fixRedirectedResponse(response) {
  if (isNotRedirectedResponse(response)) {
    return Promise.resolve(response);
  }

  var body = 'body' in response ? Promise.resolve(response.body) : response.blob();

  return body.then(function (data) {
    return new Response(data, {
      headers: response.headers,
      status: response.status
    });
  });
}

function copyObject(original) {
  return Object.keys(original).reduce(function (result, key) {
    result[key] = original[key];
    return result;
  }, {});
}

function logGroup(title, assets) {
  console.groupCollapsed('[SW]:', title);

  assets.forEach(function (asset) {
    console.log('Asset:', asset);
  });

  console.groupEnd();
}
        WebpackServiceWorker(__wpo, {
loaders: {},
cacheMaps: [
      {
      match: function(url) {
          if (url.pathname === location.pathname) {
            return;
          }

          return new URL("/", location);
        },
      to: null,
      requestTypes: ["navigate"],
    }
    ],
navigationPreload: false,
});
        module.exports = __webpack_require__("6872a71ed75a597694c7")
      

/***/ }),

/***/ "6872a71ed75a597694c7":
/***/ (function(module, exports) {



/***/ })

/******/ });