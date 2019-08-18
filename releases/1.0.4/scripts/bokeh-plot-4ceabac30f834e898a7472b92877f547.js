(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("96eced1b-c5ad-4d06-859e-174cd0b5b4dd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '96eced1b-c5ad-4d06-859e-174cd0b5b4dd' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                "MyFormatter": require("custom/bk_script_4126.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_4126.my_formatter": function(require, module, exports) {
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
          exports.MyFormatter = (function () {
              var MyFormatter = /** @class */ (function (_super) {
                  __extends(MyFormatter, _super);
                  function MyFormatter() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  // TickFormatters should implement this method, which accepts a lisst
                  // of numbers (ticks) and returns a list of strings
                  MyFormatter.prototype.doFormat = function (ticks) {
                      var formatted, i, j, ref;
                      // format the first tick as-is
                      formatted = ["" + ticks[0]];
                      // format the remaining ticks as a difference from the first
                      for (i = j = 1, ref = ticks.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
                          formatted.push("+" + (ticks[i] - ticks[0]).toPrecision(2));
                      }
                      return formatted;
                  };
                  return MyFormatter;
              }(tick_formatter_1.TickFormatter));
              ;
              MyFormatter.prototype.type = "MyFormatter";
              return MyFormatter;
          }).call(this);
    
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
                    
                  var docs_json = '{"c9e96391-3de8-4cab-be1a-23fe5dc8fb8e":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"4168","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]},"selected":{"id":"4174","type":"Selection"},"selection_policy":{"id":"4173","type":"UnionRenderers"}},"id":"4161","type":"ColumnDataSource"},{"attributes":{},"id":"4134","type":"LinearScale"},{"attributes":{},"id":"4150","type":"ResetTool"},{"attributes":{},"id":"4151","type":"HelpTool"},{"attributes":{},"id":"4174","type":"Selection"},{"attributes":{"overlay":{"id":"4154","type":"BoxAnnotation"}},"id":"4148","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"4127","subtype":"Figure","type":"Plot"},"ticker":{"id":"4142","type":"BasicTicker"}},"id":"4145","type":"Grid"},{"attributes":{},"id":"4149","type":"SaveTool"},{"attributes":{"formatter":{"id":"4170","type":"BasicTickFormatter"},"plot":{"id":"4127","subtype":"Figure","type":"Plot"},"ticker":{"id":"4142","type":"BasicTicker"}},"id":"4141","type":"LinearAxis"},{"attributes":{},"id":"4137","type":"BasicTicker"},{"attributes":{},"id":"4170","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4166","type":"MyFormatter"},"plot":{"id":"4127","subtype":"Figure","type":"Plot"},"ticker":{"id":"4137","type":"BasicTicker"}},"id":"4136","type":"LinearAxis"},{"attributes":{},"id":"4166","type":"MyFormatter"},{"attributes":{},"id":"4147","type":"WheelZoomTool"},{"attributes":{},"id":"4142","type":"BasicTicker"},{"attributes":{"plot":{"id":"4127","subtype":"Figure","type":"Plot"},"ticker":{"id":"4137","type":"BasicTicker"}},"id":"4140","type":"Grid"},{"attributes":{"below":[{"id":"4136","type":"LinearAxis"}],"left":[{"id":"4141","type":"LinearAxis"}],"renderers":[{"id":"4136","type":"LinearAxis"},{"id":"4140","type":"Grid"},{"id":"4141","type":"LinearAxis"},{"id":"4145","type":"Grid"},{"id":"4154","type":"BoxAnnotation"},{"id":"4164","type":"GlyphRenderer"}],"title":{"id":"4168","type":"Title"},"toolbar":{"id":"4152","type":"Toolbar"},"x_range":{"id":"4128","type":"DataRange1d"},"x_scale":{"id":"4132","type":"LinearScale"},"y_range":{"id":"4130","type":"DataRange1d"},"y_scale":{"id":"4134","type":"LinearScale"}},"id":"4127","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"4161","type":"ColumnDataSource"}},"id":"4165","type":"CDSView"},{"attributes":{},"id":"4146","type":"PanTool"},{"attributes":{"data_source":{"id":"4161","type":"ColumnDataSource"},"glyph":{"id":"4162","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4163","type":"Circle"},"selection_glyph":null,"view":{"id":"4165","type":"CDSView"}},"id":"4164","type":"GlyphRenderer"},{"attributes":{},"id":"4173","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"4128","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4146","type":"PanTool"},{"id":"4147","type":"WheelZoomTool"},{"id":"4148","type":"BoxZoomTool"},{"id":"4149","type":"SaveTool"},{"id":"4150","type":"ResetTool"},{"id":"4151","type":"HelpTool"}]},"id":"4152","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4154","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"4130","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4163","type":"Circle"},{"attributes":{},"id":"4132","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4162","type":"Circle"}],"root_ids":["4127"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"c9e96391-3de8-4cab-be1a-23fe5dc8fb8e","roots":{"4127":"96eced1b-c5ad-4d06-859e-174cd0b5b4dd"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();