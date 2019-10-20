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
      };var element = document.getElementById("0c045309-20f5-40eb-a2f2-a6e4fdc8496e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0c045309-20f5-40eb-a2f2-a6e4fdc8496e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                "MyFormatter": require("custom/bk_script_536909578ebd4dd59dc108ec1a737cb4.my_formatter").MyFormatter,
          "LatexLabel": require("custom/bk_script_da3193bc49874d5cb629b293ffd9b45e.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_536909578ebd4dd59dc108ec1a737cb4.my_formatter": function(require, module, exports) {
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
    
          },
          "custom/bk_script_da3193bc49874d5cb629b293ffd9b45e.latex_label": function(require, module, exports) {
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
                    
                  var docs_json = '{"33f53ab0-af69-4c20-a82c-9a77028692d5":{"roots":{"references":[{"attributes":{"below":[{"id":"80d60774-ea13-4849-b05f-0748b5e2b9ce","type":"LinearAxis"}],"left":[{"id":"e50b94c6-05ed-46b6-b3d2-ea435eef8bd1","type":"LinearAxis"}],"renderers":[{"id":"80d60774-ea13-4849-b05f-0748b5e2b9ce","type":"LinearAxis"},{"id":"afe8f574-bff6-4fab-a514-d3266473475b","type":"Grid"},{"id":"e50b94c6-05ed-46b6-b3d2-ea435eef8bd1","type":"LinearAxis"},{"id":"8747d2a0-fb90-4f42-acc3-ad922c80566a","type":"Grid"},{"id":"708879b0-2516-42e2-96f6-efe58341bf6e","type":"BoxAnnotation"},{"id":"f44065bd-8dcd-43f0-bbb4-97dfcb1ccf32","type":"GlyphRenderer"}],"title":{"id":"6d57feba-3d11-4098-aeba-de58a7007cbd","type":"Title"},"toolbar":{"id":"30ad3078-57a0-4cfe-a7fb-58c0f2a9cb94","type":"Toolbar"},"x_range":{"id":"5468ce2c-b2c6-4e75-a7d3-e368b0fa7ce8","type":"DataRange1d"},"x_scale":{"id":"34fe1546-baf4-41d9-9764-bcf30ad9cf7b","type":"LinearScale"},"y_range":{"id":"dba78802-2f15-441c-944d-ecdb290c59fa","type":"DataRange1d"},"y_scale":{"id":"c8d97e36-abd6-468b-9135-1fc120f91923","type":"LinearScale"}},"id":"f49d0a0b-edfa-434b-bf4a-70373bfcfdee","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"fa0dde05-efc1-4aa9-b479-cf6eb8928834","type":"ColumnDataSource"},"glyph":{"id":"d324e31e-b843-4d20-bb58-6a1c2d7fbad5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1e1c4f64-bd64-4e17-a072-e4284675bca1","type":"Circle"},"selection_glyph":null,"view":{"id":"62101f5d-e36f-452f-96ce-30d7a20e9864","type":"CDSView"}},"id":"f44065bd-8dcd-43f0-bbb4-97dfcb1ccf32","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1928eb44-5fcd-4bd5-9fdf-92ef9ad09aa4","type":"PanTool"},{"id":"6019b3f7-3990-473e-8f9d-f2e7350e20cd","type":"WheelZoomTool"},{"id":"6537627a-b544-4ce9-a3b6-2e5e042744f8","type":"BoxZoomTool"},{"id":"e7fb5ede-2c49-4828-abe5-59fb840283b3","type":"SaveTool"},{"id":"c7e9cbdf-b731-46fc-87d9-182942d87191","type":"ResetTool"},{"id":"7719cb7a-470a-4e8a-afcb-925b39530ceb","type":"HelpTool"}]},"id":"30ad3078-57a0-4cfe-a7fb-58c0f2a9cb94","type":"Toolbar"},{"attributes":{},"id":"1203af11-29ce-45d7-8b00-5c68ac4c1ffb","type":"Selection"},{"attributes":{"callback":null},"id":"5468ce2c-b2c6-4e75-a7d3-e368b0fa7ce8","type":"DataRange1d"},{"attributes":{},"id":"cc1a93ff-f819-4341-b69e-d60c1657cc75","type":"BasicTicker"},{"attributes":{},"id":"45fc11cd-c65a-4886-aef3-bb01add5cbbf","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"dba78802-2f15-441c-944d-ecdb290c59fa","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"708879b0-2516-42e2-96f6-efe58341bf6e","type":"BoxAnnotation"},{"attributes":{},"id":"7719cb7a-470a-4e8a-afcb-925b39530ceb","type":"HelpTool"},{"attributes":{},"id":"c8d97e36-abd6-468b-9135-1fc120f91923","type":"LinearScale"},{"attributes":{},"id":"34fe1546-baf4-41d9-9764-bcf30ad9cf7b","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e1c4f64-bd64-4e17-a072-e4284675bca1","type":"Circle"},{"attributes":{"source":{"id":"fa0dde05-efc1-4aa9-b479-cf6eb8928834","type":"ColumnDataSource"}},"id":"62101f5d-e36f-452f-96ce-30d7a20e9864","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]},"selected":{"id":"1203af11-29ce-45d7-8b00-5c68ac4c1ffb","type":"Selection"},"selection_policy":{"id":"b3d608c4-afa9-434d-9ed9-8c9e60f132ef","type":"UnionRenderers"}},"id":"fa0dde05-efc1-4aa9-b479-cf6eb8928834","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"f49d0a0b-edfa-434b-bf4a-70373bfcfdee","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc1a93ff-f819-4341-b69e-d60c1657cc75","type":"BasicTicker"}},"id":"8747d2a0-fb90-4f42-acc3-ad922c80566a","type":"Grid"},{"attributes":{},"id":"fcc154a6-5b9a-46a2-811a-ed440d06b9b6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1ab1c8b0-59f4-4108-b0e1-a7be92a928ff","type":"MyFormatter"},"plot":{"id":"f49d0a0b-edfa-434b-bf4a-70373bfcfdee","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcc154a6-5b9a-46a2-811a-ed440d06b9b6","type":"BasicTicker"}},"id":"80d60774-ea13-4849-b05f-0748b5e2b9ce","type":"LinearAxis"},{"attributes":{},"id":"6019b3f7-3990-473e-8f9d-f2e7350e20cd","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"f49d0a0b-edfa-434b-bf4a-70373bfcfdee","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcc154a6-5b9a-46a2-811a-ed440d06b9b6","type":"BasicTicker"}},"id":"afe8f574-bff6-4fab-a514-d3266473475b","type":"Grid"},{"attributes":{"overlay":{"id":"708879b0-2516-42e2-96f6-efe58341bf6e","type":"BoxAnnotation"}},"id":"6537627a-b544-4ce9-a3b6-2e5e042744f8","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d324e31e-b843-4d20-bb58-6a1c2d7fbad5","type":"Circle"},{"attributes":{},"id":"c7e9cbdf-b731-46fc-87d9-182942d87191","type":"ResetTool"},{"attributes":{},"id":"e7fb5ede-2c49-4828-abe5-59fb840283b3","type":"SaveTool"},{"attributes":{"formatter":{"id":"45fc11cd-c65a-4886-aef3-bb01add5cbbf","type":"BasicTickFormatter"},"plot":{"id":"f49d0a0b-edfa-434b-bf4a-70373bfcfdee","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc1a93ff-f819-4341-b69e-d60c1657cc75","type":"BasicTicker"}},"id":"e50b94c6-05ed-46b6-b3d2-ea435eef8bd1","type":"LinearAxis"},{"attributes":{},"id":"b3d608c4-afa9-434d-9ed9-8c9e60f132ef","type":"UnionRenderers"},{"attributes":{"plot":null,"text":""},"id":"6d57feba-3d11-4098-aeba-de58a7007cbd","type":"Title"},{"attributes":{},"id":"1928eb44-5fcd-4bd5-9fdf-92ef9ad09aa4","type":"PanTool"},{"attributes":{},"id":"1ab1c8b0-59f4-4108-b0e1-a7be92a928ff","type":"MyFormatter"}],"root_ids":["f49d0a0b-edfa-434b-bf4a-70373bfcfdee"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"33f53ab0-af69-4c20-a82c-9a77028692d5","elementid":"0c045309-20f5-40eb-a2f2-a6e4fdc8496e","modelid":"f49d0a0b-edfa-434b-bf4a-70373bfcfdee"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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