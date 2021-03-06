import { GenericEvent, EventEmitter } from 'relaks-event-emitter';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var RelaksRouteManagerEvent = /*#__PURE__*/function (_GenericEvent) {
  _inherits(RelaksRouteManagerEvent, _GenericEvent);

  function RelaksRouteManagerEvent() {
    _classCallCheck(this, RelaksRouteManagerEvent);

    return _possibleConstructorReturn(this, _getPrototypeOf(RelaksRouteManagerEvent).apply(this, arguments));
  }

  return RelaksRouteManagerEvent;
}(GenericEvent);

var RelaksRouteManagerError = /*#__PURE__*/function (_Error) {
  _inherits(RelaksRouteManagerError, _Error);

  function RelaksRouteManagerError(status, message) {
    var _this;

    _classCallCheck(this, RelaksRouteManagerError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RelaksRouteManagerError).call(this, message));
    _this.status = status;
    return _this;
  }

  return RelaksRouteManagerError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var SSR = (typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object';
var defaultOptions = {
  useHashFallback: false,
  trackLinks: SSR ? false : true,
  trackLocation: SSR ? false : true,
  preloadingDelay: NaN,
  reloadFaultyScript: false,
  basePath: ''
};

var RelaksRouteManager = /*#__PURE__*/function (_EventEmitter) {
  _inherits(RelaksRouteManager, _EventEmitter);

  function RelaksRouteManager(options) {
    var _this;

    _classCallCheck(this, RelaksRouteManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RelaksRouteManager).call(this));
    _this.active = false;
    _this.preloaded = false;
    _this.options = {};
    _this.routes = {};
    _this.rewrites = []; // properties of the current route

    _this.name = '';
    _this.params = '';
    _this.context = {};
    _this.route = null; // properties of the current URL

    _this.url = '';
    _this.path = '';
    _this.query = {};
    _this.search = '';
    _this.hash = '';
    _this.history = [];
    _this.startTime = getTimeStamp();
    _this.queue = [];

    for (var name in defaultOptions) {
      if (options && options[name] !== undefined) {
        _this.options[name] = options[name];
      } else {
        _this.options[name] = defaultOptions[name];
      }
    }

    if (options) {
      var base = options.basePath || '';

      if (base.charAt(base.length - 1) === '/') {
        base = base.substr(0, base.length - 1);
      }

      if (base) {
        var basePathRewrite = {
          from: function from(urlParts, context) {
            var path = urlParts.path;

            if (path.substr(0, base.length) === base) {
              if (path.charAt(base.length) === '/') {
                urlParts.path = path.substr(base.length);
              }
            }
          },
          to: function to(urlParts, context) {
            var path = urlParts.path;
            urlParts.path = base + path;
          }
        };

        _this.addRewrites([basePathRewrite]);
      }

      if (options.routes) {
        _this.addRoutes(options.routes);
      }

      if (options.rewrites) {
        _this.addRewrites(options.rewrites);
      }
    }

    _this.handleLinkClick = _this.handleLinkClick.bind(_assertThisInitialized(_this));
    _this.handlePopState = _this.handlePopState.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Activate the component
   */


  _createClass(RelaksRouteManager, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;

      if (!this.active) {
        if (this.options.trackLinks) {
          window.addEventListener('click', this.handleLinkClick);
        }

        if (this.options.trackLocation) {
          window.addEventListener('popstate', this.handlePopState);
        }

        this.active = true;

        if (!this.preloaded) {
          var delay = this.options.preloadingDelay;

          if (delay) {
            setTimeout(function () {
              if (_this2.active && !_this2.preloaded) {
                _this2.preload();

                _this2.preloaded = true;
              }
            }, delay);
          }
        }
      }
    }
    /**
     * Deactivate the component
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      if (this.active) {
        if (this.options.trackLinks) {
          window.removeEventListener('click', this.handleLinkClick);
        }

        if (this.options.trackLocation) {
          window.removeEventListener('popstate', this.handlePopState);
        }

        this.active = false;
      }
    }
    /**
     * Load the initial route
     *
     * @param  {String|undefined} url
     *
     * @return {Promise<Boolean>}
     */

  }, {
    key: "start",
    value: function start(url) {
      if (!url) {
        if (this.options.trackLocation) {
          url = this.getLocationURL(window.location);
        }
      } // wait for a change event or the promise returned by change()
      // need to wait for the second promise because change() could
      // fail in which case no event would be triggered


      var _handler;

      var eventPromise = new Promise(function (resolve, reject) {
        _handler = function handler(evt) {
          this.removeEventListener('change', _handler);
          resolve(true);
        };
      });
      this.addEventListener('change', _handler);
      var methodPromise = this.change(url, {
        replace: true
      });
      return Promise.race([methodPromise, eventPromise]);
    }
    /**
     * Add routes
     *
     * @param  {Object<Object>} routes
     */

  }, {
    key: "addRoutes",
    value: function addRoutes(routes) {
      for (var name in routes) {
        if (routes[name] !== this.routes[name]) {
          if (process.env.NODE_ENV !== 'production') {
            if (this.routes[name]) {
              console.warn('Overwriting existing route: ', this.routes[name]);
            }
          }

          this.routes[name] = routes[name];
        }
      }
    }
    /**
     * Remove routes
     *
     * @param  {Object<Object>} routes
     */

  }, {
    key: "removeRoutes",
    value: function removeRoutes(routes) {
      for (var name in routes) {
        if (routes[name] === this.routes[name]) {
          delete this.routes[name];
        }
      }
    }
    /**
     * Add rewrite rules
     *
     * @param  {Array<Object>} rewrites
     */

  }, {
    key: "addRewrites",
    value: function addRewrites(rewrites) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = rewrites[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var rewrite = _step.value;
          this.rewrites.push(rewrite);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Add remove rules
     *
     * @param  {Array<Object>} rewrites
     */

  }, {
    key: "removeRewrites",
    value: function removeRewrites(rewrites) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = rewrites[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var rewrite = _step2.value;
          var index = this.rewrites.indexOf(rewrite);

          if (index !== -1) {
            this.rewrites.splice(index, 1);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    /**
     * Change the route to what the given URL points to
     *
     * @param  {String|HTMLAnchorElement|Location} url
     * @param  {Object|undefined} options
     *
     * @return {Promise<Boolean>}
     */

  }, {
    key: "change",
    value: function change(url, options) {
      try {
        if (url instanceof Object) {
          url = this.getLocationURL(url);
        }

        var match = this.match(url);
        var replace = options ? options.replace || false : false;
        var time = getTimeStamp();
        return this.apply(match, time, true, replace);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    /**
     * Change the route to the one given, adding to history
     *
     * @param  {String} name
     * @param  {Object} params
     * @param  {Object|undefined} newContext
     *
     * @return {Promise<Boolean>}
     */

  }, {
    key: "push",
    value: function push(name, params, newContext) {
      try {
        var match = this.generate(name, params, newContext);
        var time = getTimeStamp();
        return this.apply(match, time, true, false);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    /**
     * Replace the current route with the one given
     *
     * @param  {String} name
     * @param  {Object} params
     * @param  {Object|undefined} newContext
     *
     * @return {Promise<Boolean>}
     */

  }, {
    key: "replace",
    value: function replace(name, params, newContext) {
      try {
        var match = this.generate(name, params, newContext);
        var time = getTimeStamp();
        return this.apply(match, time, true, true);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    /**
     * Switch to a route without adding an entry to the history
     *
     * @param  {String} name
     * @param  {Object} params
     * @param  {Boolean} keepURL
     *
     * @return {Promise<Boolean>}
     */

  }, {
    key: "substitute",
    value: function substitute(name, params, keepURL) {
      var _this3 = this;

      if (process.env.NODE_ENV !== 'production') {
        if (this.insideBeforeChangeHandler) {
          console.warn('Calling substitute() inside a beforechange handler. Perhaps you mean to call evt.substitute()?');
        }
      }

      var match = this.generate(name, params);
      var entry = this.history[this.history.length - 1];
      var time = entry ? entry.time : getTimeStamp();

      if ((match.url === undefined || keepURL) && entry) {
        // use URL of route being substituted
        match.url = entry.url;
        match.path = entry.path;
        match.query = entry.query;
        match.search = entry.search;
        match.hash = entry.hash;
      }

      return this.load(match).then(function () {
        if (match.url !== _this3.url) {
          _this3.setLocationURL(match.url, {
            time: time
          }, true);
        }

        _this3.finalize(match);
      });
    }
    /**
     * It should restore a route that has been substituted
     *
     * @return {Promise<Boolean>}
     */

  }, {
    key: "restore",
    value: function restore() {
      var _this4 = this;

      var entry = this.history[this.history.length - 1];

      if (!entry) {
        return Promise.resolve(false);
      }

      return this.load(entry).then(function () {
        var url = entry.url,
            time = entry.time;

        if (url !== _this4.url) {
          _this4.setLocationURL(url, {
            time: time
          }, true);
        }

        _this4.finalize(entry);

        return true;
      });
    }
    /**
     * Get a URL for a route for the parameters given
     *
     * @param  {String} name
     * @param  {Object} params
     * @param  {Object|undefined} newContext
     *
     * @return {String|undefined}
     */

  }, {
    key: "find",
    value: function find(name, params, newContext) {
      var match = this.generate(name, params, newContext);
      return this.applyFallback(match.url);
    }
    /**
     * Go back to the previous route (if possible)
     *
     * @return {Promise}
     */

  }, {
    key: "back",
    value: function back() {
      var _this5 = this;

      if (this.history.length <= 1) {
        var err = new RelaksRouteManagerError(400, 'Going beyond starting page');
        return Promise.reject(err);
      }

      if (this.options.trackLocation) {
        return new Promise(function (resolve, reject) {
          _this5.backResolve = resolve;
          _this5.backReject = reject;
          window.history.back(); // just in case the operation fails for some reason

          setTimeout(function () {
            var reject = _this5.backReject;

            if (reject) {
              _this5.backResolve = undefined;
              _this5.backReject = undefined;
              reject(new RelaksRouteManagerError(400, 'Unable to go back'));
            }
          }, 50);
        });
      } else {
        var previous = this.history[this.history.length - 2];
        return this.apply(previous, previous.time, false, false);
      }
    }
    /**
     * Match a URL with a route
     *
     * @param  {String} url
     *
     * @return {Object|null}
     */

  }, {
    key: "match",
    value: function match(url) {
      if (typeof url !== 'string') {
        throw new RelaksRouteManagerError(400, 'Invalid URL');
      } // perform rewrites


      var urlParts = this.parse(url);
      var context = {};
      this.rewrite('from', urlParts, context); // look for matching route

      var path = urlParts.path,
          query = urlParts.query,
          search = urlParts.search,
          hash = urlParts.hash;
      var params = {};

      for (var _i = 0, _Object$entries = Object.entries(this.routes); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            name = _Object$entries$_i[0],
            route = _Object$entries$_i[1];

        var types = route.params; // if the path matches, then it's a match
        // query and hash variables are treated as options

        if (matchTemplate(path, route.path, types, params, true)) {
          if (route.query) {
            for (var _i2 = 0, _Object$entries2 = Object.entries(route.query); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                  varName = _Object$entries2$_i[0],
                  varTemplate = _Object$entries2$_i[1];

              var varValue = query[varName];
              matchTemplate(varValue, varTemplate, types, params);
            }
          }

          matchTemplate(hash, route.hash, types, params);
          return {
            name: name,
            params: params,
            context: context,
            route: route,
            url: url,
            path: path,
            query: query,
            search: search,
            hash: hash
          };
        }
      }

      return null;
    }
    /**
     * Parse a URL into different parts
     *
     * @param  {String} url
     *
     * @return {Object}
     */

  }, {
    key: "parse",
    value: function parse(url) {
      if (typeof url !== 'string') {
        throw new RelaksRouteManagerError(400, 'Invalid URL');
      }

      var path = url;
      var hash = '';
      var hashIndex = path.indexOf('#');

      if (hashIndex !== -1) {
        hash = path.substr(hashIndex + 1);
        path = path.substr(0, hashIndex);
      }

      var query = {};
      var search = '';
      var queryIndex = path.indexOf('?');

      if (queryIndex !== -1) {
        search = path.substr(queryIndex);
        query = parseQueryString(search.substr(1));
        path = path.substr(0, queryIndex);
      }

      return {
        path: path,
        query: query,
        search: search,
        hash: hash
      };
    }
    /**
     * Generate a match object given name a params and possibly a context
     *
     * @param  {String} name
     * @param  {Object} params
     * @param  {Object|undefined} newContext
     *
     * @return {String|undefined}
     */

  }, {
    key: "generate",
    value: function generate(name, params, newContext) {
      if (!params) {
        params = {};
      }

      var urlParts = this.fill(name, params);
      var route = this.routes[name];
      var context = Object.assign({}, this.context, newContext);
      var match = {
        name: name,
        params: params,
        context: context,
        route: route
      };

      if (urlParts) {
        // copy the URL parts first, before changing them in rewrite()
        Object.assign(match, urlParts);
        this.rewrite('to', urlParts, context);
        match.url = this.compose(urlParts);
      }

      return match;
    }
    /**
     * Compose a URL from its constituent parts
     *
     * @param  {Object} urlParts
     *
     * @return {String}
     */

  }, {
    key: "compose",
    value: function compose(urlParts) {
      var path = urlParts.path,
          query = urlParts.query,
          hash = urlParts.hash;
      var queryString = composeQueryString(query);
      var url = path;

      if (queryString) {
        url += '?' + queryString;
      }

      if (hash) {
        url += '#' + hash;
      }

      return url;
    }
    /**
     * Load necessary module(s) for a route, append to history, set the state,
     * and trigger change event
     *
     * @param  {Object} match
     * @param  {String} time
     * @param  {Boolean} sync
     * @param  {Boolean} replace
     *
     * @return {Promise<Boolean>}
     */

  }, {
    key: "apply",
    value: function apply(match, time, sync, replace) {
      var _this6 = this;

      var confirmationEvent = new RelaksRouteManagerEvent('beforechange', this, match);
      var subEntry;

      confirmationEvent.substitute = function (name, params, keepURL) {
        var sub = _this6.generate(name, params, match.context);

        if (sub.url === undefined || keepURL) {
          // use URL of the intended route
          sub.url = match.url;
          sub.path = match.path;
          sub.query = match.query;
          sub.search = match.search;
          sub.hash = match.hash;
        }

        return _this6.load(sub).then(function () {
          subEntry = Object.assign({
            time: time
          }, sub);

          _this6.updateHistory(subEntry, replace);

          if (sync) {
            _this6.setLocationURL(subEntry.url, {
              time: time
            }, replace);
          }

          _this6.finalize(subEntry);
        });
      };

      if (process.env.NODE_ENV !== 'production') {
        this.insideBeforeChangeHandler = true;
      }

      this.triggerEvent(confirmationEvent);

      if (process.env.NODE_ENV !== 'production') {
        this.insideBeforeChangeHandler = false;
      }

      return confirmationEvent.waitForDecision().then(function () {
        if (confirmationEvent.defaultPrevented) {
          return false;
        } // add the change to the queue, so we'd notice when multiple changes are
        // all waiting for the same promise to fulfill


        _this6.queue.push(match);

        return _this6.load(match).then(function () {
          var entry = Object.assign({
            time: time
          }, match);

          if (subEntry) {
            // a substitution occurred--go to the route if the substitute
            // at the top of the history stack
            var subEntryIndex = _this6.history.indexOf(subEntry);

            if (subEntryIndex === _this6.history.length - 1) {
              if (entry.url !== subEntry.url) {
                _this6.setLocationURL(entry.url, {
                  time: time
                }, true);
              }

              _this6.finalize(entry);
            } // replace the substitute entry with entry of the actual route
            // so that clicking the back button sends the user to the
            // intended page and not the substitute page


            if (subEntryIndex !== -1) {
              _this6.history[subEntryIndex] = entry;
            }
          } else {
            // ignore change unless it's at the end of the queue
            if (_this6.queue[_this6.queue.length - 1] !== match) {
              return false;
            }

            entry = _this6.updateHistory(entry, replace, true);

            if (sync) {
              _this6.setLocationURL(entry.url, {
                time: time
              }, replace);
            }

            _this6.finalize(entry);

            _this6.queue.splice(0);
          }

          return true;
        });
      });
    }
    /**
     * Set properties of component and fire change event
     *
     * @param  {Object} entry
     */

  }, {
    key: "finalize",
    value: function finalize(entry) {
      Object.assign(this, entry);
      this.triggerEvent(new RelaksRouteManagerEvent('change', this));
    }
    /**
     * Fill a route templates with parameters
     *
     * @param  {String} name
     * @param  {Object} params
     *
     * @return {Object|null}
     */

  }, {
    key: "fill",
    value: function fill(name, params) {
      var route = this.routes[name];

      if (!route) {
        throw new RelaksRouteManagerError(500, 'No route by that name: ' + name);
      }

      if (route.path === '*') {
        return null;
      }

      var types = route.params;
      var path = fillTemplate(route.path, types, params, true);
      var hash = fillTemplate(route.hash, types, params);
      var query = {};

      if (typeof path !== 'string') {
        return null;
      }

      if (route.query) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(route.query); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
              varName = _Object$entries3$_i[0],
              varTemplate = _Object$entries3$_i[1];

          var varValue = fillTemplate(varTemplate, types, params);

          if (varValue !== undefined) {
            query[varName] = varValue;
          }
        }
      }

      var queryString = composeQueryString(query);
      var search = queryString ? '?' + queryString : '';
      return {
        path: path,
        query: query,
        search: search,
        hash: hash
      };
    }
    /**
     * Apply rewrites on URL parts
     *
     * @param  {String} direction
     * @param  {Object} urlParts
     * @param  {Object} context
     */

  }, {
    key: "rewrite",
    value: function rewrite(direction, urlParts, context) {
      if (direction === 'from') {
        for (var i = 0; i < this.rewrites.length; i++) {
          var rewrite = this.rewrites[i];

          if (rewrite.from) {
            if (rewrite.from(urlParts, context) === false) {
              break;
            }
          }
        }
      } else if (direction === 'to') {
        for (var _i4 = this.rewrites.length - 1; _i4 >= 0; _i4--) {
          var rewrite = this.rewrites[_i4];

          if (rewrite.to) {
            if (rewrite.to(urlParts, context) === false) {
              break;
            }
          }
        }
      }
    }
    /**
     * Call a route's load() function to load code needed (possibly asynchronously)
     *
     * @param  {Object} match
     *
     * @return {Promise}
     */

  }, {
    key: "load",
    value: function load(match) {
      var _this7 = this;

      try {
        var result;
        var route = match ? this.routes[match.name] : null;

        if (!route) {
          throw new RelaksRouteManagerError(404, 'No route');
        }

        if (route.load) {
          result = route.load(match);
        }

        return Promise.resolve(result)["catch"](function (err) {
          if (_this7.options.reloadFaultyScript) {
            if (/Loading chunk/i.test(err.message)) {
              if ((typeof performance === "undefined" ? "undefined" : _typeof(performance)) === 'object' && _typeof(performance.navigation) === 'object') {
                if (performance.navigation.type !== 1) {
                  if (navigator.onLine) {
                    // force reloading from server
                    console.log('Reloading page...');
                    location.reload(true);
                  }
                }
              }
            }
          }

          throw err;
        });
      } catch (err) {
        return Promise.reject(err);
      }
    }
    /**
     * Call the load function of every route
     *
     * @return  {Promise}
     */

  }, {
    key: "preload",
    value: function preload() {
      var promises = [];

      for (var _i5 = 0, _Object$entries4 = Object.entries(this.routes); _i5 < _Object$entries4.length; _i5++) {
        var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i5], 2),
            name = _Object$entries4$_i[0],
            route = _Object$entries4$_i[1];

        if (route && route.load) {
          var match = {
            params: {},
            context: {}
          };
          promises.push(route.load(match));
        }
      }

      return Promise.all(promises);
    }
    /**
     * Return a relative URL or empty string (if link is pointing to an external page)
     *
     * @param  {Location|HTMLAnchorElement} location
     *
     * @return {String}
     */

  }, {
    key: "getLocationURL",
    value: function getLocationURL(location) {
      var docLocation = window.location;

      if (location !== docLocation) {
        if (location.host !== docLocation.host) {
          throw new RelaksRouteManagerError(400, 'Host does not match');
        } else if (location.protocol !== docLocation.protocol) {
          throw new RelaksRouteManagerError(400, 'Protocol does not match');
        }

        if (this.options.useHashFallback) {
          if (location.pathname !== docLocation.pathname) {
            throw new RelaksRouteManagerError(400, 'Path does not match');
          }

          if (location.search !== docLocation.search) {
            throw new RelaksRouteManagerError(400, 'Query string does not match');
          }
        }
      }

      if (this.options.useHashFallback) {
        var path = location.hash.substr(1);
        return path || '/';
      } else {
        return location.pathname + location.search + location.hash;
      }
    }
    /**
     * Add or remove entries from history, depending on the entry's timestamp.
     * If the an entry with a matching time is found, return it when restore is
     * specified.
     *
     * @param  {Object} entry
     * @param  {Boolean} replace
     * @param  {Boolean} restore
     *
     * @return {Object}
     */

  }, {
    key: "updateHistory",
    value: function updateHistory(entry, replace, restore) {
      if (entry.time >= this.startTime) {
        if (!replace) {
          // see if we're going backward
          var oldEntryIndex = -1;
          var oldEntry = null;

          for (var i = 0; i < this.history.length; i++) {
            var otherEntry = this.history[i];

            if (otherEntry.time === entry.time) {
              oldEntryIndex = i;
              oldEntry = otherEntry;
            }
          }

          if (oldEntry) {
            // no, going backward
            // remove entry and those after it
            this.history.splice(oldEntryIndex);

            if (restore) {
              // use what was stored in history instead of the properties
              // extracted from the URL; the two objects should be
              // identical unless this.history was altered
              entry = oldEntry;
            }
          }
        }
      } else {
        // going into history prior to page load
        // remember the time forward movement from deep into the past
        // works correctly
        this.history = [];
        this.startTime = entry.time;
      }

      if (replace && this.history.length > 0) {
        this.history[this.history.length - 1] = entry;
      } else {
        this.history.push(entry);
      }

      return entry;
    }
    /**
     * Set the browser's address bar when trackLocation is true
     *
     * @param  {String} url
     * @param  {Object} state
     * @param  {Boolean} replace
     */

  }, {
    key: "setLocationURL",
    value: function setLocationURL(url, state, replace) {
      if (this.options.trackLocation) {
        var currentURL = this.getLocationURL(location);

        if (currentURL !== url) {
          url = this.applyFallback(url);

          if (replace) {
            window.history.replaceState(state, '', url);
          } else {
            window.history.pushState(state, '', url);
          }
        }
      }
    }
    /**
     * Prepend URL with # when hash fallback is used
     *
     * @param  {String} url
     *
     * @return {String}
     */

  }, {
    key: "applyFallback",
    value: function applyFallback(url) {
      if (this.options.useHashFallback) {
        if (url != undefined) {
          url = '#' + url;
        }
      }

      return url;
    }
    /**
     * Called when the user clicks on the page
     *
     * @param  {Event} evt
     */

  }, {
    key: "handleLinkClick",
    value: function handleLinkClick(evt) {
      if (evt.button === 0 && !evt.defaultPrevented) {
        var link = getLink(evt.target);

        if (link && !link.target && !link.download) {
          try {
            var url = this.getLocationURL(link);

            if (url) {
              var match = this.match(url);

              if (match) {
                var time = getTimeStamp();
                evt.preventDefault();
                evt.stopPropagation();
                this.apply(match, time, true, false);
              }
            }
          } catch (err) {}
        }
      }
    }
    /**
     * Called when the user press the back button
     *
     * @param  {Event} evt
     */

  }, {
    key: "handlePopState",
    value: function handlePopState(evt) {
      var time = evt.state ? evt.state.time : getTimeStamp();
      var url = this.getLocationURL(window.location);
      var match = this.match(url);
      var promise = this.apply(match, time, false, false); // resolve promise created in back()

      var resolve = this.backResolve;
      var reject = this.backReject;

      if (resolve) {
        this.backResolve = undefined;
        this.backReject = undefined;
        promise.then(resolve, reject);
      }
    }
  }]);

  return RelaksRouteManager;
}(EventEmitter);

var variableRegExp = /\$\{\w+\}/g;
var regExpCache = {};

function getURLTemplateRegExp(template, types, isPath) {
  if (!template) {
    return null;
  }

  var pattern = template.replace(variableRegExp, function (match) {
    var variable = match.substr(2, match.length - 3);
    var variableType = types ? types[variable] : String;
    var variablePattern;

    if (variableType === Number || variableType === Boolean) {
      variablePattern = '[\\d\\.]*';
    } else if (_typeof(variableType) === 'object') {
      variablePattern = variableType.pattern;
    }

    if (!variablePattern) {
      if (isPath) {
        variablePattern = '[^/]*';
      } else {
        variablePattern = '.*';
      }
    }

    return '(' + variablePattern + ')';
  });

  if (isPath) {
    var lc = pattern.charAt(pattern - 1);

    if (lc === '/') {
      pattern += '?';
    } else {
      pattern += '/?';
    }

    pattern = '^' + pattern + '$';
  }

  var re = regExpCache[pattern];

  if (!re) {
    re = regExpCache[pattern] = new RegExp(pattern);
  }

  return re;
}

function getURLTemplateVariables(template) {
  var matches = template.match(variableRegExp);
  var list = [];

  if (matches) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = matches[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var match = _step3.value;
        list.push(match.substr(2, match.length - 3));
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  return list;
}

function matchTemplate(urlPart, template, types, params, isPath) {
  if (urlPart === undefined || !template) {
    return false;
  }

  if (_typeof(template) === 'object') {
    if (template.from) {
      return template.from(urlPart, params);
    }
  } else if (typeof template === 'string') {
    if (template === '*') {
      return true;
    }

    var re = getURLTemplateRegExp(template, types, isPath);
    var matches = re.exec(urlPart);

    if (!matches) {
      return false;
    }

    var variables = getURLTemplateVariables(template);
    var values = {};
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = variables.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            index = _step4$value[0],
            variable = _step4$value[1];

        var type = types ? types[variable] : String;
        var value = castValue(matches[index + 1], type);

        if (value !== undefined) {
          values[variable] = value;
        } else {
          if (isPath) {
            return false;
          }
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    Object.assign(params, values);
    return true;
  }

  return false;
}

function fillTemplate(template, types, params, always) {
  if (_typeof(template) === 'object') {
    if (template.to) {
      return template.to(params);
    }
  } else if (typeof template === 'string') {
    var variables = getURLTemplateVariables(template);
    var urlPath = template;
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = variables[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var variable = _step5.value;
        var value = params[variable];
        var type = types ? types[variable] : String;

        if (value !== undefined || always) {
          var string = stringifyValue(value, type);
          urlPath = urlPath.replace('${' + variable + '}', string);
        } else {
          return;
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    return urlPath;
  }
}

function castValue(string, type) {
  if (type === String) {
    return string;
  } else if (type === Number) {
    return parseFloat(string);
  } else if (type === Boolean) {
    var n = parseFloat(string);

    if (n === n) {
      return !!n;
    } else {
      return !!string;
    }
  } else if (type instanceof Object) {
    if (type.from) {
      return type.from(string);
    }
  }
}

function stringifyValue(value, type) {
  if (type === String) {
    return value;
  } else if (type === Number) {
    if (value === value) {
      return String(value);
    } else {
      return ''; // NAN
    }
  } else if (type === Boolean) {
    return value ? '1' : '0';
  } else if (type instanceof Object) {
    if (type.to) {
      return type.to(value);
    }
  }
}

function parseQueryString(queryString) {
  var values = {};

  if (queryString) {
    var pairs = queryString.split('&');
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = pairs[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var pair = _step6.value;
        var parts = pair.split('=');
        var name = decodeURIComponent(parts[0]);
        var value = decodeURIComponent(parts[1] || '').replace(/\+/g, ' ');
        values[name] = value;
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  }

  return values;
}

function composeQueryString(query) {
  var pairs = [];

  if (query) {
    for (var _i6 = 0, _Object$entries5 = Object.entries(query); _i6 < _Object$entries5.length; _i6++) {
      var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i6], 2),
          name = _Object$entries5$_i[0],
          value = _Object$entries5$_i[1];

      pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(value));
    }
  }

  return pairs.join('&');
}

function getLink(element) {
  while (element && (element.tagName !== 'A' || !element.href)) {
    element = element.parentNode;
  }

  return element;
}

var counter = 0;

function getTimeStamp() {
  var s = new Date().toISOString();
  var n = String(counter++);
  var c = '00000000'.substr(n.length) + n;
  return s.substr(0, 23) + c + 'Z';
}

var RelaksRouteManagerProxy = /*#__PURE__*/function () {
  function RelaksRouteManagerProxy(routeManager) {
    _classCallCheck(this, RelaksRouteManagerProxy);

    this.routeManager = routeManager;
    this.name = routeManager.name;
    this.params = routeManager.params;
    this.context = routeManager.context;
    this.history = routeManager.history;
    this.url = routeManager.url;
    this.path = routeManager.path;
    this.query = routeManager.query;
    this.search = routeManager.search;
    this.hash = routeManager.hash;
  }

  _createClass(RelaksRouteManagerProxy, [{
    key: "push",
    value: function push(name, params) {
      return this.routeManager.push(name, params);
    }
  }, {
    key: "replace",
    value: function replace(name, params) {
      return this.routeManager.replace(name, params);
    }
  }, {
    key: "substitute",
    value: function substitute(name, params) {
      return this.routeManager.substitute(name, params);
    }
  }, {
    key: "restore",
    value: function restore() {
      return this.routeManager.restore();
    }
  }, {
    key: "change",
    value: function change(url, options) {
      return this.routeManager.change(url, options);
    }
  }, {
    key: "find",
    value: function find(name, params) {
      return this.routeManager.find(name, params);
    }
  }]);

  return RelaksRouteManagerProxy;
}();

export default RelaksRouteManager;
export { RelaksRouteManager, RelaksRouteManagerError, RelaksRouteManagerEvent, RelaksRouteManagerProxy, RelaksRouteManager as RouteManager, RelaksRouteManagerError as RouteManagerError, RelaksRouteManagerEvent as RouteManagerEvent, RelaksRouteManagerProxy as RouteManagerProxy };
