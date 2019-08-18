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
      };var element = document.getElementById("73859427-c145-461b-8d02-b6bdfeb75828");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '73859427-c145-461b-8d02-b6bdfeb75828' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_1d29982a64c2449197edd0c310ea1f8f.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_cf3005b13ac34287ae4cb92e0b65d530.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_1d29982a64c2449197edd0c310ea1f8f.latex_label": function(require, module, exports) {
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
          var label_1 = require("models/annotations/label");
          exports.LatexLabelView = /** @class */ (function (_super) {
              __extends(LatexLabelView, _super);
              function LatexLabelView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              LatexLabelView.prototype.render = function () {
                  var angle, panel, ref, sx, sy, xscale, yscale;
                  //--- Start of copied section from ``Label.render`` implementation
                  // Here because AngleSpec does units tranform and label doesn't support specs
                  switch (this.model.angle_units) {
                      case "rad":
                          angle = -1 * this.model.angle;
                          break;
                      case "deg":
                          angle = -1 * this.model.angle * Math.PI / 180.0;
                  }
                  panel = (ref = this.model.panel) != null ? ref : this.plot_view.frame;
                  xscale = this.plot_view.frame.xscales[this.model.x_range_name];
                  yscale = this.plot_view.frame.yscales[this.model.y_range_name];
                  sx = this.model.x_units === "data" ? xscale.compute(this.model.x) : panel.xview.compute(this.model.x);
                  sy = this.model.y_units === "data" ? yscale.compute(this.model.y) : panel.yview.compute(this.model.y);
                  sx += this.model.x_offset;
                  sy -= this.model.y_offset;
                  //--- End of copied section from ``Label.render`` implementation
                  // Must render as superpositioned div (not on canvas) so that KaTex
                  // css can properly style the text
                  this._css_text(this.plot_view.canvas_view.ctx, "", sx, sy, angle);
                  // ``katex`` is loaded into the global window at runtime
                  // katex.renderToString returns a html ``span`` element
                  return katex.render(this.model.text, this.el, {
                      displayMode: true
                  });
              };
              return LatexLabelView;
          }(label_1.LabelView));
          exports.LatexLabel = (function () {
              var LatexLabel = /** @class */ (function (_super) {
                  __extends(LatexLabel, _super);
                  function LatexLabel() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return LatexLabel;
              }(label_1.Label));
              ;
              LatexLabel.prototype.type = 'LatexLabel';
              LatexLabel.prototype.default_view = exports.LatexLabelView;
              return LatexLabel;
          })();
          
          },
          "custom/bk_script_cf3005b13ac34287ae4cb92e0b65d530.my_formatter": function(require, module, exports) {
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
                      for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                          formatted.push("+" + (ticks[i] - ticks[0]).toPrecision(2));
                      }
                      return formatted;
                  };
                  return MyFormatter;
              }(tick_formatter_1.TickFormatter));
              ;
              MyFormatter.prototype.type = "MyFormatter";
              return MyFormatter;
          })();
          
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
                    
                  var docs_json = '{"39afb3af-6d96-454f-8d50-7c7ff9224265":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"2bcee877-3e6c-49fc-bd5e-fc40a7569387","type":"ColumnDataSource"},{"attributes":{},"id":"cc7630fa-b7a8-42e6-8c4f-c2e7eab15dd4","type":"LinearScale"},{"attributes":{"plot":{"id":"a0d368f4-1ce3-4ccd-b941-db0cb2e8b727","subtype":"Figure","type":"Plot"},"ticker":{"id":"5545bae9-a0a1-4fde-af11-474de7da304c","type":"BasicTicker"}},"id":"9e4a65dd-88d3-4050-9fe7-d7084f79c092","type":"Grid"},{"attributes":{"formatter":{"id":"4efdeb11-7ccd-459a-9d39-3798402a5971","type":"MyFormatter"},"plot":{"id":"a0d368f4-1ce3-4ccd-b941-db0cb2e8b727","subtype":"Figure","type":"Plot"},"ticker":{"id":"5545bae9-a0a1-4fde-af11-474de7da304c","type":"BasicTicker"}},"id":"7cea08de-6614-4c11-b79c-34e579b72c30","type":"LinearAxis"},{"attributes":{},"id":"c4cbc45f-c0d1-4d58-8486-2a1ac39d3f1e","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"e48eff29-0c18-427a-a848-0f0cd4b60978","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"a0d368f4-1ce3-4ccd-b941-db0cb2e8b727","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4cbc45f-c0d1-4d58-8486-2a1ac39d3f1e","type":"BasicTicker"}},"id":"99e9917a-bf7e-47c0-af03-c76fa86b0684","type":"Grid"},{"attributes":{},"id":"4efdeb11-7ccd-459a-9d39-3798402a5971","type":"MyFormatter"},{"attributes":{"source":{"id":"2bcee877-3e6c-49fc-bd5e-fc40a7569387","type":"ColumnDataSource"}},"id":"dc7fd34b-a7c3-4f82-9b19-84954e453f2d","type":"CDSView"},{"attributes":{"data_source":{"id":"2bcee877-3e6c-49fc-bd5e-fc40a7569387","type":"ColumnDataSource"},"glyph":{"id":"fd84cbf6-0da3-4d81-a3b3-ba29a6ec4951","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c371b12f-1457-4dd3-b118-2c7eafcf355c","type":"Circle"},"selection_glyph":null,"view":{"id":"dc7fd34b-a7c3-4f82-9b19-84954e453f2d","type":"CDSView"}},"id":"7f31fbd2-11af-4b7a-b0dc-0435ea7927b1","type":"GlyphRenderer"},{"attributes":{},"id":"5545bae9-a0a1-4fde-af11-474de7da304c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"1ecb6207-e3df-454d-947d-7f0716cb1891","type":"BoxAnnotation"}},"id":"cca4230a-01fa-4fd3-a222-58238a2ce875","type":"BoxZoomTool"},{"attributes":{},"id":"4c254954-95b1-40d0-b6a6-01bead528301","type":"PanTool"},{"attributes":{},"id":"a4bbf233-fafe-4e65-9b04-0a86ddebb7c7","type":"HelpTool"},{"attributes":{},"id":"faafff42-eed8-483a-87d6-6a8fec8e45fa","type":"ResetTool"},{"attributes":{"below":[{"id":"7cea08de-6614-4c11-b79c-34e579b72c30","type":"LinearAxis"}],"left":[{"id":"36044af9-92e5-47e3-ad42-75ac1da9d0c2","type":"LinearAxis"}],"renderers":[{"id":"7cea08de-6614-4c11-b79c-34e579b72c30","type":"LinearAxis"},{"id":"9e4a65dd-88d3-4050-9fe7-d7084f79c092","type":"Grid"},{"id":"36044af9-92e5-47e3-ad42-75ac1da9d0c2","type":"LinearAxis"},{"id":"99e9917a-bf7e-47c0-af03-c76fa86b0684","type":"Grid"},{"id":"1ecb6207-e3df-454d-947d-7f0716cb1891","type":"BoxAnnotation"},{"id":"7f31fbd2-11af-4b7a-b0dc-0435ea7927b1","type":"GlyphRenderer"}],"title":{"id":"e48eff29-0c18-427a-a848-0f0cd4b60978","type":"Title"},"toolbar":{"id":"9e97907c-99a1-4bd7-813b-6580c1bd9089","type":"Toolbar"},"x_range":{"id":"0515e6d2-c0c6-4d87-bf1d-afa6c437ed8f","type":"DataRange1d"},"x_scale":{"id":"cc7630fa-b7a8-42e6-8c4f-c2e7eab15dd4","type":"LinearScale"},"y_range":{"id":"8f5a598a-d93b-45b2-9c12-41b7a5e63ab4","type":"DataRange1d"},"y_scale":{"id":"4df47baf-b91a-409f-bd37-b006924687d5","type":"LinearScale"}},"id":"a0d368f4-1ce3-4ccd-b941-db0cb2e8b727","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"384f9fff-acf0-47b0-9435-49cf6f0e9461","type":"BasicTickFormatter"},{"attributes":{},"id":"3b830c6e-61d4-4017-b7cc-dbe02ec98a61","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4c254954-95b1-40d0-b6a6-01bead528301","type":"PanTool"},{"id":"3b830c6e-61d4-4017-b7cc-dbe02ec98a61","type":"WheelZoomTool"},{"id":"cca4230a-01fa-4fd3-a222-58238a2ce875","type":"BoxZoomTool"},{"id":"d9d26d7d-7263-4b6b-9e07-d81095d926c9","type":"SaveTool"},{"id":"faafff42-eed8-483a-87d6-6a8fec8e45fa","type":"ResetTool"},{"id":"a4bbf233-fafe-4e65-9b04-0a86ddebb7c7","type":"HelpTool"}]},"id":"9e97907c-99a1-4bd7-813b-6580c1bd9089","type":"Toolbar"},{"attributes":{"formatter":{"id":"384f9fff-acf0-47b0-9435-49cf6f0e9461","type":"BasicTickFormatter"},"plot":{"id":"a0d368f4-1ce3-4ccd-b941-db0cb2e8b727","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4cbc45f-c0d1-4d58-8486-2a1ac39d3f1e","type":"BasicTicker"}},"id":"36044af9-92e5-47e3-ad42-75ac1da9d0c2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"0515e6d2-c0c6-4d87-bf1d-afa6c437ed8f","type":"DataRange1d"},{"attributes":{},"id":"d9d26d7d-7263-4b6b-9e07-d81095d926c9","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd84cbf6-0da3-4d81-a3b3-ba29a6ec4951","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1ecb6207-e3df-454d-947d-7f0716cb1891","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"8f5a598a-d93b-45b2-9c12-41b7a5e63ab4","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c371b12f-1457-4dd3-b118-2c7eafcf355c","type":"Circle"},{"attributes":{},"id":"4df47baf-b91a-409f-bd37-b006924687d5","type":"LinearScale"}],"root_ids":["a0d368f4-1ce3-4ccd-b941-db0cb2e8b727"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"39afb3af-6d96-454f-8d50-7c7ff9224265","elementid":"73859427-c145-461b-8d02-b6bdfeb75828","modelid":"a0d368f4-1ce3-4ccd-b941-db0cb2e8b727"}];
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
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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