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
      };var element = document.getElementById("938eefcb-2323-4e8e-a648-9a0a20f07a6e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '938eefcb-2323-4e8e-a648-9a0a20f07a6e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                "MyFormatter": require("custom/bk_script_f7c92ae7259a4551830355196b0edea1.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_f7c92ae7259a4551830355196b0edea1.my_formatter": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
                    
                  var docs_json = '{"4f97a455-303b-40c0-8d81-4ab506e8229d":{"roots":{"references":[{"attributes":{"plot":{"id":"4fef4812-ca6b-4b0a-916e-5ac2c225736d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0d2d8ef-e390-4962-ba1b-cb68b9e4b6b8","type":"BasicTicker"}},"id":"84f96d3d-1198-4537-b77c-eb33b4ce8773","type":"Grid"},{"attributes":{"overlay":{"id":"d14827bb-9955-45a1-b007-49d857c37dbb","type":"BoxAnnotation"}},"id":"bd18afea-06f6-4c5e-aa89-94237cbb3b8f","type":"BoxZoomTool"},{"attributes":{},"id":"93cf4622-0eba-4ac2-910b-90419fc21c3d","type":"SaveTool"},{"attributes":{},"id":"c09cd177-a1f4-488d-9aa9-f15804edfed4","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d14827bb-9955-45a1-b007-49d857c37dbb","type":"BoxAnnotation"},{"attributes":{},"id":"f5335618-2af6-4bf6-9e66-1a34cfff4cbf","type":"UnionRenderers"},{"attributes":{},"id":"e0d2d8ef-e390-4962-ba1b-cb68b9e4b6b8","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"e8c4e0bd-7b20-4ac4-95bf-edbf28fec327","type":"Title"},{"attributes":{"callback":null},"id":"c117867c-6638-40e6-a2cb-86723ebb2d7b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"27150abc-cf7f-4259-91a9-ee3920f72242","type":"MyFormatter"},"plot":{"id":"4fef4812-ca6b-4b0a-916e-5ac2c225736d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0d2d8ef-e390-4962-ba1b-cb68b9e4b6b8","type":"BasicTicker"}},"id":"abd12c2f-b458-45e4-8ec7-0144fbeff567","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"4fef4812-ca6b-4b0a-916e-5ac2c225736d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9df2ed77-ffbb-46d2-a260-f3fef5d8faaf","type":"BasicTicker"}},"id":"d38fa5c3-f9ae-4196-88e7-6512f55b8353","type":"Grid"},{"attributes":{"below":[{"id":"abd12c2f-b458-45e4-8ec7-0144fbeff567","type":"LinearAxis"}],"left":[{"id":"0152d75a-838a-423f-8998-cef0d111e8a6","type":"LinearAxis"}],"renderers":[{"id":"abd12c2f-b458-45e4-8ec7-0144fbeff567","type":"LinearAxis"},{"id":"84f96d3d-1198-4537-b77c-eb33b4ce8773","type":"Grid"},{"id":"0152d75a-838a-423f-8998-cef0d111e8a6","type":"LinearAxis"},{"id":"d38fa5c3-f9ae-4196-88e7-6512f55b8353","type":"Grid"},{"id":"d14827bb-9955-45a1-b007-49d857c37dbb","type":"BoxAnnotation"},{"id":"0038dade-309d-410e-9ba4-59e34af064d4","type":"GlyphRenderer"}],"title":{"id":"e8c4e0bd-7b20-4ac4-95bf-edbf28fec327","type":"Title"},"toolbar":{"id":"73a04a42-6a10-4027-9c12-d4ec1e2f387f","type":"Toolbar"},"x_range":{"id":"c117867c-6638-40e6-a2cb-86723ebb2d7b","type":"DataRange1d"},"x_scale":{"id":"c09cd177-a1f4-488d-9aa9-f15804edfed4","type":"LinearScale"},"y_range":{"id":"84c8b49b-477b-45c9-983f-53968c5c58a5","type":"DataRange1d"},"y_scale":{"id":"7790ff75-3164-400b-a5cc-8049e253bb57","type":"LinearScale"}},"id":"4fef4812-ca6b-4b0a-916e-5ac2c225736d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f100da80-97d0-4123-9f36-88fb68da57a9","type":"BasicTickFormatter"},{"attributes":{},"id":"b9bae914-d43f-4393-bca5-e6dad7fe56d7","type":"ResetTool"},{"attributes":{"source":{"id":"ba1d7e46-847e-48a2-8c88-677e1ef3a6ce","type":"ColumnDataSource"}},"id":"ef62bf57-97ab-44cb-9274-7a0f305d1e1d","type":"CDSView"},{"attributes":{},"id":"27150abc-cf7f-4259-91a9-ee3920f72242","type":"MyFormatter"},{"attributes":{},"id":"bdc55ab2-54b5-4ce2-a28c-da9b320bee2b","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]},"selected":{"id":"304d3db6-84d2-47ee-9a05-befcc6b6a8cd","type":"Selection"},"selection_policy":{"id":"f5335618-2af6-4bf6-9e66-1a34cfff4cbf","type":"UnionRenderers"}},"id":"ba1d7e46-847e-48a2-8c88-677e1ef3a6ce","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f40753f-666f-4dca-b25f-e401a9a95478","type":"Circle"},{"attributes":{"data_source":{"id":"ba1d7e46-847e-48a2-8c88-677e1ef3a6ce","type":"ColumnDataSource"},"glyph":{"id":"1f40753f-666f-4dca-b25f-e401a9a95478","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"df118d7d-f3b0-4b23-b309-7fda7b25f4ed","type":"Circle"},"selection_glyph":null,"view":{"id":"ef62bf57-97ab-44cb-9274-7a0f305d1e1d","type":"CDSView"}},"id":"0038dade-309d-410e-9ba4-59e34af064d4","type":"GlyphRenderer"},{"attributes":{},"id":"9df2ed77-ffbb-46d2-a260-f3fef5d8faaf","type":"BasicTicker"},{"attributes":{"callback":null},"id":"84c8b49b-477b-45c9-983f-53968c5c58a5","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10f3d034-3299-47b8-8949-61c5e6566edc","type":"PanTool"},{"id":"3187fa7e-dc07-4b2a-982f-03c22b73ad93","type":"WheelZoomTool"},{"id":"bd18afea-06f6-4c5e-aa89-94237cbb3b8f","type":"BoxZoomTool"},{"id":"93cf4622-0eba-4ac2-910b-90419fc21c3d","type":"SaveTool"},{"id":"b9bae914-d43f-4393-bca5-e6dad7fe56d7","type":"ResetTool"},{"id":"bdc55ab2-54b5-4ce2-a28c-da9b320bee2b","type":"HelpTool"}]},"id":"73a04a42-6a10-4027-9c12-d4ec1e2f387f","type":"Toolbar"},{"attributes":{},"id":"7790ff75-3164-400b-a5cc-8049e253bb57","type":"LinearScale"},{"attributes":{},"id":"304d3db6-84d2-47ee-9a05-befcc6b6a8cd","type":"Selection"},{"attributes":{},"id":"10f3d034-3299-47b8-8949-61c5e6566edc","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"df118d7d-f3b0-4b23-b309-7fda7b25f4ed","type":"Circle"},{"attributes":{"formatter":{"id":"f100da80-97d0-4123-9f36-88fb68da57a9","type":"BasicTickFormatter"},"plot":{"id":"4fef4812-ca6b-4b0a-916e-5ac2c225736d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9df2ed77-ffbb-46d2-a260-f3fef5d8faaf","type":"BasicTicker"}},"id":"0152d75a-838a-423f-8998-cef0d111e8a6","type":"LinearAxis"},{"attributes":{},"id":"3187fa7e-dc07-4b2a-982f-03c22b73ad93","type":"WheelZoomTool"}],"root_ids":["4fef4812-ca6b-4b0a-916e-5ac2c225736d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"4f97a455-303b-40c0-8d81-4ab506e8229d","roots":{"4fef4812-ca6b-4b0a-916e-5ac2c225736d":"938eefcb-2323-4e8e-a648-9a0a20f07a6e"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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