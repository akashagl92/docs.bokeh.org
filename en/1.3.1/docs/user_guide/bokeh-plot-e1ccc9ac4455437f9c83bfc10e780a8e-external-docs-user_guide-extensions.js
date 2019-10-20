(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("02dedd4d-9623-4da1-9418-ee56b9222f45");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '02dedd4d-9623-4da1-9418-ee56b9222f45' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function(root, factory) {
          //  if(typeof exports === 'object' && typeof module === 'object')
          //    factory(require("Bokeh"));
          //  else if(typeof define === 'function' && define.amd)
          //    define(["Bokeh"], factory);
          //  else if(typeof exports === 'object')
          //    factory(require("Bokeh"));
          //  else
              factory(root["Bokeh"]);
          })(this, function(Bokeh) {
            var define;
            return (function outer(modules, entry) {
            if (Bokeh != null) {
              return Bokeh.register_plugin(modules, {}, entry);
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          ({
            "custom/main": function(require, module, exports) {
              var models = {
                "Custom": require("custom/bk_script_23004.custom").Custom
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_23004.custom": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = function (d, b) {
                  extendStatics = Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                  return extendStatics(d, b);
              };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var html_box_1 = require("models/layouts/html_box");
          var dom_1 = require("core/dom");
          var p = require("core/properties");
          var CustomView = /** @class */ (function (_super) {
              __extends(CustomView, _super);
              function CustomView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              CustomView.prototype.connect_signals = function () {
                  var _this = this;
                  _super.prototype.connect_signals.call(this);
                  this.connect(this.model.slider.change, function () { return _this._update_text(); });
              };
              CustomView.prototype.render = function () {
                  // BokehJS Views create <div> elements by default, accessible as ``this.el``.
                  // Many Bokeh views extend this default <div> with additional elements
                  // (e.g. <canvas>), and instead do things like paint on the HTML canvas.
                  // In this case though, we change the contents of the <div>, based on the
                  // current slider value.
                  _super.prototype.render.call(this);
                  this.content_el = dom_1.div({ style: {
                          textAlign: "center",
                          fontSize: "1.2em",
                          padding: "2px",
                          color: "#b88d8e",
                          backgroundColor: "#2a3153",
                      } });
                  this.el.appendChild(this.content_el);
                  this._update_text();
              };
              CustomView.prototype._update_text = function () {
                  this.content_el.textContent = this.model.text + ": " + this.model.slider.value;
              };
              CustomView.__name__ = "CustomView";
              return CustomView;
          }(html_box_1.HTMLBoxView));
          exports.CustomView = CustomView;
          var Custom = /** @class */ (function (_super) {
              __extends(Custom, _super);
              function Custom(attrs) {
                  return _super.call(this, attrs) || this;
              }
              Custom.initClass = function () {
                  // If there is an associated view, this is typically boilerplate.
                  this.prototype.default_view = CustomView;
                  // The define block adds corresponding "properties" to the JS model. These
                  // should normally line up 1-1 with the Python model class. Most property
                  // types have counterparts, e.g. bokeh.core.properties.String will be
                  // ``p.String`` in the JS implementation. Any time the JS type system is not
                  // yet as complete, you can use ``p.Any`` as a "wildcard" property type.
                  this.define({
                      text: [p.String],
                      slider: [p.Any],
                  });
                  this.override({
                      margin: 5,
                  });
              };
              Custom.__name__ = "Custom";
              return Custom;
          }(html_box_1.HTMLBox));
          exports.Custom = Custom;
          Custom.initClass();
    
          }
          }, "custom/main");
          ;
          });
    
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"707e8ec8-9b82-4168-b8c8-17d985da8608":{"roots":{"references":[{"attributes":{"children":[{"id":"23005","type":"Slider"},{"id":"23006","type":"Custom"}]},"id":"23007","type":"Column"},{"attributes":{"slider":{"id":"23005","type":"Slider"},"text":"Special Slider Display"},"id":"23006","type":"Custom"},{"attributes":{"callback":null,"end":10,"start":0,"step":0.1,"title":"value","value":0},"id":"23005","type":"Slider"}],"root_ids":["23007"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"707e8ec8-9b82-4168-b8c8-17d985da8608","roots":{"23007":"02dedd4d-9623-4da1-9418-ee56b9222f45"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();