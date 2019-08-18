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
      };var element = document.getElementById("8f84d7c6-2e2b-4648-b7f2-b5d1785c370e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8f84d7c6-2e2b-4648-b7f2-b5d1785c370e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                "MyFormatter": require("custom/bk_script_23068.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_23068.my_formatter": function(require, module, exports) {
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
          var tick_formatter_1 = require("models/formatters/tick_formatter");
          var MyFormatter = /** @class */ (function (_super) {
              __extends(MyFormatter, _super);
              function MyFormatter() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              // TickFormatters should implement this method, which accepts a list
              // of numbers (ticks) and returns a list of strings
              MyFormatter.prototype.doFormat = function (ticks) {
                  // format the first tick as-is
                  var formatted = ["" + ticks[0]];
                  for (var i = 1, len = ticks.length; i < len; i++) {
                      formatted.push("+" + (Number(ticks[i]) - Number(ticks[0])).toPrecision(2));
                  }
                  return formatted;
              };
              MyFormatter.initClass = function () {
                  this.prototype.type = "MyFormatter";
              };
              return MyFormatter;
          }(tick_formatter_1.TickFormatter));
          exports.MyFormatter = MyFormatter;
          MyFormatter.initClass();
    
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
                    
                  var docs_json = '{"43975504-d2a2-4c58-91a6-0c20b78ccbc6":{"roots":{"references":[{"attributes":{"callback":null},"id":"23072","type":"DataRange1d"},{"attributes":{},"id":"23076","type":"LinearScale"},{"attributes":{},"id":"23089","type":"WheelZoomTool"},{"attributes":{},"id":"23113","type":"Selection"},{"attributes":{},"id":"23084","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"23103","type":"Circle"},{"attributes":{"formatter":{"id":"23106","type":"MyFormatter"},"ticker":{"id":"23079","type":"BasicTicker"}},"id":"23078","type":"LinearAxis"},{"attributes":{"ticker":{"id":"23079","type":"BasicTicker"}},"id":"23082","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"23084","type":"BasicTicker"}},"id":"23087","type":"Grid"},{"attributes":{},"id":"23091","type":"SaveTool"},{"attributes":{},"id":"23092","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"23102","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23115","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"23101","type":"ColumnDataSource"},"glyph":{"id":"23102","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23103","type":"Circle"},"selection_glyph":null,"view":{"id":"23105","type":"CDSView"}},"id":"23104","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"23115","type":"BoxAnnotation"}},"id":"23090","type":"BoxZoomTool"},{"attributes":{},"id":"23093","type":"HelpTool"},{"attributes":{"formatter":{"id":"23110","type":"BasicTickFormatter"},"ticker":{"id":"23084","type":"BasicTicker"}},"id":"23083","type":"LinearAxis"},{"attributes":{"source":{"id":"23101","type":"ColumnDataSource"}},"id":"23105","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]},"selected":{"id":"23113","type":"Selection"},"selection_policy":{"id":"23114","type":"UnionRenderers"}},"id":"23101","type":"ColumnDataSource"},{"attributes":{},"id":"23088","type":"PanTool"},{"attributes":{},"id":"23106","type":"MyFormatter"},{"attributes":{},"id":"23079","type":"BasicTicker"},{"attributes":{},"id":"23074","type":"LinearScale"},{"attributes":{"text":""},"id":"23108","type":"Title"},{"attributes":{},"id":"23114","type":"UnionRenderers"},{"attributes":{},"id":"23110","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"23070","type":"DataRange1d"},{"attributes":{"below":[{"id":"23078","type":"LinearAxis"}],"center":[{"id":"23082","type":"Grid"},{"id":"23087","type":"Grid"}],"left":[{"id":"23083","type":"LinearAxis"}],"renderers":[{"id":"23104","type":"GlyphRenderer"}],"title":{"id":"23108","type":"Title"},"toolbar":{"id":"23094","type":"Toolbar"},"x_range":{"id":"23070","type":"DataRange1d"},"x_scale":{"id":"23074","type":"LinearScale"},"y_range":{"id":"23072","type":"DataRange1d"},"y_scale":{"id":"23076","type":"LinearScale"}},"id":"23069","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23088","type":"PanTool"},{"id":"23089","type":"WheelZoomTool"},{"id":"23090","type":"BoxZoomTool"},{"id":"23091","type":"SaveTool"},{"id":"23092","type":"ResetTool"},{"id":"23093","type":"HelpTool"}]},"id":"23094","type":"Toolbar"}],"root_ids":["23069"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"43975504-d2a2-4c58-91a6-0c20b78ccbc6","roots":{"23069":"8f84d7c6-2e2b-4648-b7f2-b5d1785c370e"}}];
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