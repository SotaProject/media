(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode('.media-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.media-tool__media{border-radius:3px;overflow:hidden;margin-bottom:10px}.media-tool__media-picture{width:100%;vertical-align:bottom;display:block}.media-tool__media-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.media-tool__media-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;-webkit-animation:media-preloader-spin 2s infinite linear;animation:media-preloader-spin 2s infinite linear;box-sizing:border-box}.media-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.media-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.media-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.media-tool--empty__media,.media-tool--empty__caption,.media-tool--loading__caption{display:none}.media-tool .cdx-button{display:flex;align-items:center;justify-content:center}.media-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.media-tool--filled .media-tool__media .media-tool__media-preloader,.media-tool--filled .cdx-button,.media-tool--empty .media-tool__media .media-tool__media-preloader,.media-tool--empty .media-tool__caption{display:none}.media-tool--loading .media-tool__media{aspect-ratio:16/9;display:flex;border:1px solid var(--border-color);background-color:#fff}.media-tool--loading .media-tool__media .media-tool__media-picture,.media-tool--loading .cdx-button{display:none}.media-tool--withBorder .media-tool__media{border-radius:10px}.media-tool--withBackground .media-tool__media{padding:15px;background:var(--bg-color)}.media-tool--withBackground .media-tool__media .media-tool__media-picture{max-width:60%;margin:0 auto}.media-tool--stretched{margin:0 auto;width:90%;max-width:850px}.media-tool--stretched .media-tool__media .media-tool__media-picture{width:100%}@-webkit-keyframes media-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes media-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function j(E, a = null, o = {}) {
  const s = document.createElement(E);
  Array.isArray(a) ? s.classList.add(...a) : a && s.classList.add(a);
  for (const r in o)
    s[r] = o[r];
  return s;
}
class S {
  constructor({ api: a, config: o, onSelectFile: s, readOnly: r }) {
    this.api = a, this.config = o, this.onSelectFile = s, this.readOnly = r, this.nodes = {
      wrapper: j("div", [this.CSS.baseClass, this.CSS.wrapper]),
      mediaContainer: j("div", [this.CSS.mediaContainer]),
      fileButton: this.createFileButton(),
      mediaEl: void 0,
      mediaPreloader: j("div", this.CSS.mediaPreloader),
      caption: j("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.readOnly || this.nodes.caption.addEventListener("paste", (n) => {
      n.preventDefault(), n.stopPropagation();
      const d = (n.clipboardData || window.clipboardData).getData("text/plain").split(/\r?\n/).map((v) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")).join("<br>");
      document.execCommand("insertHTML", !1, d);
    }), this.nodes.mediaContainer.appendChild(this.nodes.mediaPreloader), this.nodes.wrapper.appendChild(this.nodes.mediaContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      wrapper: "media-tool",
      mediaContainer: "media-tool__media",
      mediaPreloader: "media-tool__media-preloader",
      mediaEl: "media-tool__media-picture",
      caption: "media-tool__caption"
    };
  }
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  render(a) {
    return !a.file || Object.keys(a.file).length === 0 ? this.toggleStatus(S.status.EMPTY) : this.toggleStatus(S.status.UPLOADING), this.nodes.wrapper;
  }
  createFileButton() {
    const a = j("div", [this.CSS.button]);
    return a.innerHTML = this.config.buttonContent || `${L} ${this.api.i18n.t("Select an Media")}`, a.addEventListener("click", () => {
      this.onSelectFile();
    }), a;
  }
  showPreloader(a) {
    this.nodes.mediaPreloader.style.backgroundMedia = `url(${a})`, this.toggleStatus(S.status.UPLOADING);
  }
  hidePreloader() {
    this.nodes.mediaPreloader.style.backgroundMedia = "", this.toggleStatus(S.status.EMPTY);
  }
  fillMedia(a) {
    let o = "DIV";
    this.config.patterns.image.test(a) ? o = "IMG" : this.config.patterns.video.test(a) && (o = "VIDEO");
    const s = {
      src: a
    };
    let r = "load";
    o === "VIDEO" && (s.autoplay = !0, s.loop = !0, s.muted = !0, s.playsinline = !0, r = "loadeddata"), this.nodes.mediaEl = j(o, this.CSS.mediaEl, s), this.nodes.mediaEl.addEventListener(r, () => {
      this.toggleStatus(S.status.FILLED), this.nodes.mediaPreloader && (this.nodes.mediaPreloader.style.backgroundImage = "");
    }), this.nodes.mediaContainer.appendChild(this.nodes.mediaEl);
  }
  fillCaption(a) {
    this.nodes.caption && (this.nodes.caption.innerHTML = a);
  }
  toggleStatus(a) {
    for (const o in S.status)
      Object.prototype.hasOwnProperty.call(S.status, o) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${S.status[o]}`, a === S.status[o]);
  }
  applyTune(a, o) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${a}`, o);
  }
}
function I(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var R = { exports: {} };
(function(E, a) {
  (function(o, s) {
    E.exports = s();
  })(window, function() {
    return function(o) {
      var s = {};
      function r(n) {
        if (s[n])
          return s[n].exports;
        var i = s[n] = { i: n, l: !1, exports: {} };
        return o[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
      }
      return r.m = o, r.c = s, r.d = function(n, i, d) {
        r.o(n, i) || Object.defineProperty(n, i, { enumerable: !0, get: d });
      }, r.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, r.t = function(n, i) {
        if (1 & i && (n = r(n)), 8 & i || 4 & i && typeof n == "object" && n && n.__esModule)
          return n;
        var d = /* @__PURE__ */ Object.create(null);
        if (r.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: n }), 2 & i && typeof n != "string")
          for (var v in n)
            r.d(d, v, function(c) {
              return n[c];
            }.bind(null, v));
        return d;
      }, r.n = function(n) {
        var i = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return r.d(i, "a", i), i;
      }, r.o = function(n, i) {
        return Object.prototype.hasOwnProperty.call(n, i);
      }, r.p = "", r(r.s = 3);
    }([function(o, s) {
      var r;
      r = function() {
        return this;
      }();
      try {
        r = r || new Function("return this")();
      } catch {
        typeof window == "object" && (r = window);
      }
      o.exports = r;
    }, function(o, s, r) {
      (function(n) {
        var i = r(2), d = setTimeout;
        function v() {
        }
        function c(e) {
          if (!(this instanceof c))
            throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function f(e, u) {
          for (; e._state === 3; )
            e = e._value;
          e._state !== 0 ? (e._handled = !0, c._immediateFn(function() {
            var l = e._state === 1 ? u.onFulfilled : u.onRejected;
            if (l !== null) {
              var g;
              try {
                g = l(e._value);
              } catch (m) {
                return void y(u.promise, m);
              }
              p(u.promise, g);
            } else
              (e._state === 1 ? p : y)(u.promise, e._value);
          })) : e._deferreds.push(u);
        }
        function p(e, u) {
          try {
            if (u === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var l = u.then;
              if (u instanceof c)
                return e._state = 3, e._value = u, void w(e);
              if (typeof l == "function")
                return void t((g = l, m = u, function() {
                  g.apply(m, arguments);
                }), e);
            }
            e._state = 1, e._value = u, w(e);
          } catch (h) {
            y(e, h);
          }
          var g, m;
        }
        function y(e, u) {
          e._state = 2, e._value = u, w(e);
        }
        function w(e) {
          e._state === 2 && e._deferreds.length === 0 && c._immediateFn(function() {
            e._handled || c._unhandledRejectionFn(e._value);
          });
          for (var u = 0, l = e._deferreds.length; u < l; u++)
            f(e, e._deferreds[u]);
          e._deferreds = null;
        }
        function b(e, u, l) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof u == "function" ? u : null, this.promise = l;
        }
        function t(e, u) {
          var l = !1;
          try {
            e(function(g) {
              l || (l = !0, p(u, g));
            }, function(g) {
              l || (l = !0, y(u, g));
            });
          } catch (g) {
            if (l)
              return;
            l = !0, y(u, g);
          }
        }
        c.prototype.catch = function(e) {
          return this.then(null, e);
        }, c.prototype.then = function(e, u) {
          var l = new this.constructor(v);
          return f(this, new b(e, u, l)), l;
        }, c.prototype.finally = i.a, c.all = function(e) {
          return new c(function(u, l) {
            if (!e || e.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0)
              return u([]);
            var m = g.length;
            function h(T, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var M = C.then;
                  if (typeof M == "function")
                    return void M.call(C, function(O) {
                      h(T, O);
                    }, l);
                }
                g[T] = C, --m == 0 && u(g);
              } catch (O) {
                l(O);
              }
            }
            for (var k = 0; k < g.length; k++)
              h(k, g[k]);
          });
        }, c.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === c ? e : new c(function(u) {
            u(e);
          });
        }, c.reject = function(e) {
          return new c(function(u, l) {
            l(e);
          });
        }, c.race = function(e) {
          return new c(function(u, l) {
            for (var g = 0, m = e.length; g < m; g++)
              e[g].then(u, l);
          });
        }, c._immediateFn = typeof n == "function" && function(e) {
          n(e);
        } || function(e) {
          d(e, 0);
        }, c._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, s.a = c;
      }).call(this, r(5).setImmediate);
    }, function(o, s, r) {
      s.a = function(n) {
        var i = this.constructor;
        return this.then(function(d) {
          return i.resolve(n()).then(function() {
            return d;
          });
        }, function(d) {
          return i.resolve(n()).then(function() {
            return i.reject(d);
          });
        });
      };
    }, function(o, s, r) {
      function n(t) {
        return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      r(4);
      var i, d, v, c, f, p, y, w = r(8), b = (d = function(t) {
        return new Promise(function(e, u) {
          t = c(t), (t = f(t)).beforeSend && t.beforeSend();
          var l = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          l.open(t.method, t.url), l.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var h = t.headers[m];
            l.setRequestHeader(m, h);
          });
          var g = t.ratio;
          l.upload.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * g / 100);
            t.progress(Math.min(k, 100));
          }, !1), l.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * (100 - g) / 100) + g;
            t.progress(Math.min(k, 100));
          }, !1), l.onreadystatechange = function() {
            if (l.readyState === 4) {
              var m = l.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var h = w.parseHeaders(l.getAllResponseHeaders()), k = { body: m, code: l.status, headers: h };
              y(l.status) ? e(k) : u(k);
            }
          }, l.send(t.data);
        });
      }, v = function(t) {
        return t.method = "POST", d(t);
      }, c = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && n(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(i).includes(t.type)))
          throw new Error("`type` must be taken from module's \xABcontentType\xBB library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var e = p(t.data, i.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var u = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || i.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (u = i.FORM), t.data = p(t.data, u), u !== b.contentType.FORM && (t.headers["content-type"] = u);
        }
        return t;
      }, p = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case i.URLENCODED:
            return w.urlEncode(t);
          case i.JSON:
            return w.jsonEncode(t);
          case i.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: i = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: v, transport: function(t) {
        return t = c(t), w.selectFiles(t).then(function(e) {
          for (var u = new FormData(), l = 0; l < e.length; l++)
            u.append(t.fieldName, e[l], e[l].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var h = t.data[m];
            u.append(m, h);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = u, v(t);
        });
      }, selectFiles: function(t) {
        return delete (t = c(t)).beforeSend, w.selectFiles(t);
      } });
      o.exports = b;
    }, function(o, s, r) {
      r.r(s);
      var n = r(1);
      window.Promise = window.Promise || n.a;
    }, function(o, s, r) {
      (function(n) {
        var i = n !== void 0 && n || typeof self < "u" && self || window, d = Function.prototype.apply;
        function v(c, f) {
          this._id = c, this._clearFn = f;
        }
        s.setTimeout = function() {
          return new v(d.call(setTimeout, i, arguments), clearTimeout);
        }, s.setInterval = function() {
          return new v(d.call(setInterval, i, arguments), clearInterval);
        }, s.clearTimeout = s.clearInterval = function(c) {
          c && c.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(i, this._id);
        }, s.enroll = function(c, f) {
          clearTimeout(c._idleTimeoutId), c._idleTimeout = f;
        }, s.unenroll = function(c) {
          clearTimeout(c._idleTimeoutId), c._idleTimeout = -1;
        }, s._unrefActive = s.active = function(c) {
          clearTimeout(c._idleTimeoutId);
          var f = c._idleTimeout;
          f >= 0 && (c._idleTimeoutId = setTimeout(function() {
            c._onTimeout && c._onTimeout();
          }, f));
        }, r(6), s.setImmediate = typeof self < "u" && self.setImmediate || n !== void 0 && n.setImmediate || this && this.setImmediate, s.clearImmediate = typeof self < "u" && self.clearImmediate || n !== void 0 && n.clearImmediate || this && this.clearImmediate;
      }).call(this, r(0));
    }, function(o, s, r) {
      (function(n, i) {
        (function(d, v) {
          if (!d.setImmediate) {
            var c, f, p, y, w, b = 1, t = {}, e = !1, u = d.document, l = Object.getPrototypeOf && Object.getPrototypeOf(d);
            l = l && l.setTimeout ? l : d, {}.toString.call(d.process) === "[object process]" ? c = function(h) {
              i.nextTick(function() {
                m(h);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var h = !0, k = d.onmessage;
                return d.onmessage = function() {
                  h = !1;
                }, d.postMessage("", "*"), d.onmessage = k, h;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(h) {
              h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), c = function(h) {
              d.postMessage(y + h, "*");
            }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(h) {
              m(h.data);
            }, c = function(h) {
              p.port2.postMessage(h);
            }) : u && "onreadystatechange" in u.createElement("script") ? (f = u.documentElement, c = function(h) {
              var k = u.createElement("script");
              k.onreadystatechange = function() {
                m(h), k.onreadystatechange = null, f.removeChild(k), k = null;
              }, f.appendChild(k);
            }) : c = function(h) {
              setTimeout(m, 0, h);
            }, l.setImmediate = function(h) {
              typeof h != "function" && (h = new Function("" + h));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++)
                k[T] = arguments[T + 1];
              var C = { callback: h, args: k };
              return t[b] = C, c(b), b++;
            }, l.clearImmediate = g;
          }
          function g(h) {
            delete t[h];
          }
          function m(h) {
            if (e)
              setTimeout(m, 0, h);
            else {
              var k = t[h];
              if (k) {
                e = !0;
                try {
                  (function(T) {
                    var C = T.callback, M = T.args;
                    switch (M.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(M[0]);
                        break;
                      case 2:
                        C(M[0], M[1]);
                        break;
                      case 3:
                        C(M[0], M[1], M[2]);
                        break;
                      default:
                        C.apply(v, M);
                    }
                  })(k);
                } finally {
                  g(h), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, r(0), r(7));
    }, function(o, s) {
      var r, n, i = o.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(l) {
        if (r === setTimeout)
          return setTimeout(l, 0);
        if ((r === d || !r) && setTimeout)
          return r = setTimeout, setTimeout(l, 0);
        try {
          return r(l, 0);
        } catch {
          try {
            return r.call(null, l, 0);
          } catch {
            return r.call(this, l, 0);
          }
        }
      }
      (function() {
        try {
          r = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          r = d;
        }
        try {
          n = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          n = v;
        }
      })();
      var f, p = [], y = !1, w = -1;
      function b() {
        y && f && (y = !1, f.length ? p = f.concat(p) : w = -1, p.length && t());
      }
      function t() {
        if (!y) {
          var l = c(b);
          y = !0;
          for (var g = p.length; g; ) {
            for (f = p, p = []; ++w < g; )
              f && f[w].run();
            w = -1, g = p.length;
          }
          f = null, y = !1, function(m) {
            if (n === clearTimeout)
              return clearTimeout(m);
            if ((n === v || !n) && clearTimeout)
              return n = clearTimeout, clearTimeout(m);
            try {
              n(m);
            } catch {
              try {
                return n.call(null, m);
              } catch {
                return n.call(this, m);
              }
            }
          }(l);
        }
      }
      function e(l, g) {
        this.fun = l, this.array = g;
      }
      function u() {
      }
      i.nextTick = function(l) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            g[m - 1] = arguments[m];
        p.push(new e(l, g)), p.length !== 1 || y || c(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = u, i.addListener = u, i.once = u, i.off = u, i.removeListener = u, i.removeAllListeners = u, i.emit = u, i.prependListener = u, i.prependOnceListener = u, i.listeners = function(l) {
        return [];
      }, i.binding = function(l) {
        throw new Error("process.binding is not supported");
      }, i.cwd = function() {
        return "/";
      }, i.chdir = function(l) {
        throw new Error("process.chdir is not supported");
      }, i.umask = function() {
        return 0;
      };
    }, function(o, s, r) {
      function n(d, v) {
        for (var c = 0; c < v.length; c++) {
          var f = v[c];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
        }
      }
      var i = r(9);
      o.exports = function() {
        function d() {
          (function(p, y) {
            if (!(p instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var v, c, f;
        return v = d, f = [{ key: "urlEncode", value: function(p) {
          return i(p);
        } }, { key: "jsonEncode", value: function(p) {
          return JSON.stringify(p);
        } }, { key: "formEncode", value: function(p) {
          if (this.isFormData(p))
            return p;
          if (this.isFormElement(p))
            return new FormData(p);
          if (this.isObject(p)) {
            var y = new FormData();
            return Object.keys(p).forEach(function(w) {
              var b = p[w];
              y.append(w, b);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        } }, { key: "isFormData", value: function(p) {
          return p instanceof FormData;
        } }, { key: "isFormElement", value: function(p) {
          return p instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var b = document.createElement("INPUT");
            b.type = "file", p.multiple && b.setAttribute("multiple", "multiple"), p.accept && b.setAttribute("accept", p.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(b);
            }, !1), b.click();
          });
        } }, { key: "parseHeaders", value: function(p) {
          var y = p.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(b) {
            var t = b.split(": "), e = t.shift(), u = t.join(": ");
            e && (w[e] = u);
          }), w;
        } }], (c = null) && n(v.prototype, c), f && n(v, f), d;
      }();
    }, function(o, s) {
      var r = function(i) {
        return encodeURIComponent(i).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, n = function(i, d, v, c) {
        return d = d || null, v = v || "&", c = c || null, i ? function(f) {
          for (var p = new Array(), y = 0; y < f.length; y++)
            f[y] && p.push(f[y]);
          return p;
        }(Object.keys(i).map(function(f) {
          var p, y, w = f;
          if (c && (w = c + "[" + w + "]"), typeof i[f] == "object" && i[f] !== null)
            p = n(i[f], null, v, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var b = i[f];
            b = (b = (b = (b = b === !0 ? "1" : b) === !1 ? "0" : b) === 0 ? "0" : b) || "", p = r(w) + "=" + r(b);
          }
          return p;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      o.exports = n;
    }]);
  });
})(R);
const F = /* @__PURE__ */ I(R.exports);
function _(E) {
  return E && typeof E.then == "function";
}
class B {
  constructor({ config: a, onUpload: o, onError: s }) {
    this.config = a, this.onUpload = o, this.onError = s;
  }
  callback(a) {
    console.log(a);
  }
  uploadSelectedFile({ onPreview: a }) {
    const o = function(r) {
      const n = new FileReader();
      n.readAsDataURL(r), n.onload = (i) => {
        a(i.target.result);
      };
    };
    let s;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? s = F.selectFiles({ accept: this.config.types }).then((r) => {
      o(r[0]);
      const n = this.config.uploader.uploadByFile(r[0], this.callback);
      return _(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
    }) : s = F.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: (r) => {
        o(r[0]);
      },
      fieldName: this.config.field
    }).then((r) => r.body), s.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
  uploadByUrl(a) {
    let o;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (o = this.config.uploader.uploadByUrl(a), _(o) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : o = F.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: a
      }, this.config.additionalRequestData),
      type: F.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((s) => s.body), o.then((s) => {
      this.onUpload(s);
    }).catch((s) => {
      this.onError(s);
    });
  }
  uploadByFile(a, { onPreview: o }) {
    const s = new FileReader();
    s.readAsDataURL(a), s.onload = (n) => {
      o(n.target.result);
    };
    let r;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      r = this.config.uploader.uploadByFile(a), _(r) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const n = new FormData();
      n.append(this.config.field, a), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([i, d]) => {
        n.append(i, d);
      }), r = F.post({
        url: this.config.endpoints.byFile,
        data: n,
        type: F.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((i) => i.body);
    }
    r.then((n) => {
      this.onUpload(n);
    }).catch((n) => {
      this.onError(n);
    });
  }
}
/**
 * Media Tool for the Editor.js
 *
 * @author CodeX <team@codex.so> & Yan Khachko <a@slnk.icu> for SOTA <mail@sotaproject.com>
 * @license MIT
 * @see {@link https://github.com/sotaproject/editorjs-mediablock}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * media: {
 *   class: MediaTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class P {
  static get isReadOnlySupported() {
    return !0;
  }
  static get toolbox() {
    return {
      icon: L,
      title: "Media"
    };
  }
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: H,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: x,
        title: "Stretch media",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: D,
        title: "With background",
        toggle: !0
      }
    ];
  }
  constructor({ data: a, block: o, config: s, api: r, readOnly: n }) {
    this.api = r, this.readOnly = n, this.block = o, this.config = {
      endpoints: s.endpoints || "",
      additionalRequestData: s.additionalRequestData || {},
      additionalRequestHeaders: s.additionalRequestHeaders || {},
      field: s.field || "media",
      types: s.types || "image/*,video/*",
      captionPlaceholder: this.api.i18n.t(s.captionPlaceholder || "Caption"),
      buttonContent: s.buttonContent || "",
      uploader: s.uploader || void 0,
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i,
        video: /https?:\/\/\S+\.(mp4|mov|avi|webm)(\?[a-z0-9=]*)?$/i
      },
      actions: s.actions || []
    }, this.uploader = new B({
      config: this.config,
      onUpload: (i) => this.onUpload(i),
      onError: (i) => this.uploadingFailed(i)
    }), this.ui = new S({
      api: r,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (i) => {
            this.ui.showPreloader(i);
          }
        });
      },
      readOnly: n
    }), this._data = {}, this.data = a;
  }
  render() {
    return this.ui.render(this.data);
  }
  _make(a, o = null, s = {}) {
    const r = document.createElement(a);
    Array.isArray(o) ? r.classList.add(...o) : o && r.classList.add(o);
    for (const n in s)
      r[n] = s[n];
    return r;
  }
  validate(a) {
    return a.file && a.file.urls;
  }
  static get sanitize() {
    return {
      caption: {
        br: !0
      }
    };
  }
  save() {
    const a = this.ui.nodes.caption.cloneNode(!0);
    return a.querySelectorAll("div, p").forEach((o) => {
      o.childNodes.length === 1 && o.firstChild.nodeName === "BR" && o.firstChild.remove(), o.previousSibling && o.before(document.createElement("br")), o.replaceWith(...o.childNodes);
    }), this._data.caption = a.innerHTML, this.data;
  }
  renderSettings() {
    return P.tunes.concat(this.config.actions).map((o) => ({
      icon: o.icon,
      label: this.api.i18n.t(o.title),
      name: o.name,
      toggle: o.toggle,
      isActive: this.data[o.name],
      onActivate: () => {
        if (typeof o.action == "function") {
          o.action(o.name);
          return;
        }
        this.tuneToggled(o.name);
      }
    }));
  }
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  static get pasteConfig() {
    return {
      tags: [
        {
          img: { src: !0 }
        }
      ],
      files: {
        mimeTypes: ["image/*", "video/*"]
      }
    };
  }
  async onPaste(a) {
    switch (a.type) {
      case "tag": {
        const o = a.detail.data;
        if (/^blob:/.test(o.src)) {
          const r = await (await fetch(o.src)).blob();
          this.uploadFile(r);
          break;
        }
        this.uploadUrl(o.src);
        break;
      }
      case "pattern": {
        const o = a.detail.data;
        this.uploadUrl(o);
        break;
      }
      case "file": {
        const o = a.detail.file;
        this.uploadFile(o);
        break;
      }
    }
  }
  set data(a) {
    this.media = a.file, this._data.caption = a.caption || "", this.ui.fillCaption(this._data.caption), P.tunes.forEach(({ name: o }) => {
      const s = typeof a[o] < "u" ? a[o] === !0 || a[o] === "true" : !1;
      this.setTune(o, s);
    });
  }
  get data() {
    return this._data;
  }
  set media(a) {
    this._data.file = a || {}, a && a.urls && this.ui.fillMedia(a.urls.full);
  }
  onUpload(a) {
    a.success && a.file ? this.media = a.file : this.uploadingFailed("incorrect response: " + JSON.stringify(a));
  }
  uploadingFailed(a) {
    console.log("Media Tool: uploading failed because of", a), this.api.notifier.show({
      message: this.api.i18n.t("Couldn't upload media. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  tuneToggled(a) {
    this.setTune(a, !this._data[a]);
  }
  setTune(a, o) {
    this._data[a] = o, this.ui.applyTune(a, o), a === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = this._data.stretched;
    }).catch((s) => {
      console.error(s);
    });
  }
  uploadFile(a) {
    this.uploader.uploadByFile(a, {
      onPreview: (o) => {
        this.ui.showPreloader(o);
      }
    });
  }
  uploadUrl(a) {
    this.ui.showPreloader(a), this.uploader.uploadByUrl(a);
  }
}
export {
  P as default
};
