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
      };var element = document.getElementById("9337ef73-e9c6-4fc6-bdda-c5fb085da267");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9337ef73-e9c6-4fc6-bdda-c5fb085da267' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_4d245a4961fc4045b086aa2119f0ad16.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_b64ada8818d44343b0d14823d93ffccf.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_4d245a4961fc4045b086aa2119f0ad16.latex_label": function(require, module, exports) {
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
          "custom/bk_script_b64ada8818d44343b0d14823d93ffccf.my_formatter": function(require, module, exports) {
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
                    var docs_json = '{"6ef70d16-abce-4f07-a3d3-620ed45e8abc":{"roots":{"references":[{"attributes":{"below":[{"id":"8f091249-5965-4cf0-814d-c113b8ab234c","type":"LinearAxis"}],"left":[{"id":"664a0e14-76a2-4913-aeff-d3cb875dfb00","type":"LinearAxis"}],"renderers":[{"id":"8f091249-5965-4cf0-814d-c113b8ab234c","type":"LinearAxis"},{"id":"14426fc3-0591-4f5c-ab27-8576db731afe","type":"Grid"},{"id":"664a0e14-76a2-4913-aeff-d3cb875dfb00","type":"LinearAxis"},{"id":"f30af8df-a87c-4b88-93fe-38429ff30f02","type":"Grid"},{"id":"3906afb9-c995-43de-becb-46239a847679","type":"BoxAnnotation"},{"id":"94c7a244-b705-49b2-a52e-561bf338035f","type":"GlyphRenderer"}],"title":{"id":"a6967e75-265b-4789-80c2-9069b3e3b048","type":"Title"},"toolbar":{"id":"37c38943-f9db-41eb-9c65-7d6044f25ca8","type":"Toolbar"},"x_range":{"id":"e0c7923c-7362-459a-8e8b-568898c026d0","type":"DataRange1d"},"x_scale":{"id":"68e26f2b-c4d0-47d2-9607-30540b42d108","type":"LinearScale"},"y_range":{"id":"747eabe5-9754-443a-9d23-4d153ab2f490","type":"DataRange1d"},"y_scale":{"id":"eb333ca4-3b0e-41c3-b771-e0f531cf163f","type":"LinearScale"}},"id":"5d494fe9-d232-4556-93cd-72ec5f0cc0d0","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"9711d4ca-423f-45a8-baa4-c14ad421fdb5","type":"ColumnDataSource"}},"id":"73a9a8a8-8773-46cc-a1b4-8c3eac93ae8b","type":"CDSView"},{"attributes":{"plot":{"id":"5d494fe9-d232-4556-93cd-72ec5f0cc0d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f02dd755-363d-417d-bcf2-fca46c7413d6","type":"BasicTicker"}},"id":"14426fc3-0591-4f5c-ab27-8576db731afe","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1af33b6b-04c4-465a-9ae9-da8ca80c9c88","type":"PanTool"},{"id":"c9788915-727f-4199-9d3c-74bde794bf2b","type":"WheelZoomTool"},{"id":"b711f266-05f2-4525-ad25-feed85abefb2","type":"BoxZoomTool"},{"id":"c4bc9ec6-91a7-4973-a674-27fd7b56bfcb","type":"SaveTool"},{"id":"33c2ccda-e4cb-47fc-9110-bbfd6d09392e","type":"ResetTool"},{"id":"a1393fe2-233e-460c-906b-dc32073dbfbe","type":"HelpTool"}]},"id":"37c38943-f9db-41eb-9c65-7d6044f25ca8","type":"Toolbar"},{"attributes":{},"id":"13ff8f5f-66c7-4d04-83b9-1fc27d53212d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5d494fe9-d232-4556-93cd-72ec5f0cc0d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"13ff8f5f-66c7-4d04-83b9-1fc27d53212d","type":"BasicTicker"}},"id":"f30af8df-a87c-4b88-93fe-38429ff30f02","type":"Grid"},{"attributes":{"callback":null},"id":"e0c7923c-7362-459a-8e8b-568898c026d0","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"00777783-c3bf-4837-8902-025e49ce2d38","type":"Circle"},{"attributes":{"formatter":{"id":"e81084d2-de90-46e3-b2d9-ad3ce367550b","type":"BasicTickFormatter"},"plot":{"id":"5d494fe9-d232-4556-93cd-72ec5f0cc0d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"13ff8f5f-66c7-4d04-83b9-1fc27d53212d","type":"BasicTicker"}},"id":"664a0e14-76a2-4913-aeff-d3cb875dfb00","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"9711d4ca-423f-45a8-baa4-c14ad421fdb5","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"a6967e75-265b-4789-80c2-9069b3e3b048","type":"Title"},{"attributes":{"callback":null},"id":"747eabe5-9754-443a-9d23-4d153ab2f490","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3906afb9-c995-43de-becb-46239a847679","type":"BoxAnnotation"},{"attributes":{},"id":"eb333ca4-3b0e-41c3-b771-e0f531cf163f","type":"LinearScale"},{"attributes":{},"id":"e81084d2-de90-46e3-b2d9-ad3ce367550b","type":"BasicTickFormatter"},{"attributes":{},"id":"68e26f2b-c4d0-47d2-9607-30540b42d108","type":"LinearScale"},{"attributes":{},"id":"1af33b6b-04c4-465a-9ae9-da8ca80c9c88","type":"PanTool"},{"attributes":{},"id":"a1393fe2-233e-460c-906b-dc32073dbfbe","type":"HelpTool"},{"attributes":{"data_source":{"id":"9711d4ca-423f-45a8-baa4-c14ad421fdb5","type":"ColumnDataSource"},"glyph":{"id":"dda856d0-8917-419f-ba6b-dfff1f15a8a0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"00777783-c3bf-4837-8902-025e49ce2d38","type":"Circle"},"selection_glyph":null,"view":{"id":"73a9a8a8-8773-46cc-a1b4-8c3eac93ae8b","type":"CDSView"}},"id":"94c7a244-b705-49b2-a52e-561bf338035f","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dda856d0-8917-419f-ba6b-dfff1f15a8a0","type":"Circle"},{"attributes":{"overlay":{"id":"3906afb9-c995-43de-becb-46239a847679","type":"BoxAnnotation"}},"id":"b711f266-05f2-4525-ad25-feed85abefb2","type":"BoxZoomTool"},{"attributes":{},"id":"33c2ccda-e4cb-47fc-9110-bbfd6d09392e","type":"ResetTool"},{"attributes":{},"id":"c9788915-727f-4199-9d3c-74bde794bf2b","type":"WheelZoomTool"},{"attributes":{},"id":"f02dd755-363d-417d-bcf2-fca46c7413d6","type":"BasicTicker"},{"attributes":{},"id":"039a5ad3-752d-4487-a731-f67b082de676","type":"MyFormatter"},{"attributes":{},"id":"c4bc9ec6-91a7-4973-a674-27fd7b56bfcb","type":"SaveTool"},{"attributes":{"formatter":{"id":"039a5ad3-752d-4487-a731-f67b082de676","type":"MyFormatter"},"plot":{"id":"5d494fe9-d232-4556-93cd-72ec5f0cc0d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f02dd755-363d-417d-bcf2-fca46c7413d6","type":"BasicTicker"}},"id":"8f091249-5965-4cf0-814d-c113b8ab234c","type":"LinearAxis"}],"root_ids":["5d494fe9-d232-4556-93cd-72ec5f0cc0d0"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"6ef70d16-abce-4f07-a3d3-620ed45e8abc","elementid":"9337ef73-e9c6-4fc6-bdda-c5fb085da267","modelid":"5d494fe9-d232-4556-93cd-72ec5f0cc0d0"}];
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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