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
      };var element = document.getElementById("225c7c2b-e2d9-4fc4-92d7-450f4ac18376");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '225c7c2b-e2d9-4fc4-92d7-450f4ac18376' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                "MyFormatter": require("custom/bk_script_466629d5697845ceb42556beea3046f7.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_d4f1dea1b0f74c799e098760aa3064b5.draw_tool").DrawTool,
          "LatexLabel": require("custom/bk_script_df57e6d13ff744c395282f69bdb1d1d0.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_466629d5697845ceb42556beea3046f7.my_formatter": function(require, module, exports) {
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
          "custom/bk_script_d4f1dea1b0f74c799e098760aa3064b5.draw_tool": function(require, module, exports) {
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
          var p = require("core/properties");
          var gesture_tool_1 = require("models/tools/gestures/gesture_tool");
          exports.DrawToolView = /** @class */ (function (_super) {
              __extends(DrawToolView, _super);
              function DrawToolView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              // this is executed when the pan/drag event starts
              DrawToolView.prototype._pan_start = function (e) {
                  return this.model.source.data = {
                      x: [],
                      y: []
                  };
              };
              // this is executed on subsequent mouse/touch moves
              DrawToolView.prototype._pan = function (e) {
                  var frame, sx, sy, x, y;
                  frame = this.plot_model.frame;
                  (_a = e.bokeh, sx = _a.sx, sy = _a.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
                  var _a;
              };
              // this is executed then the pan/drag ends
              DrawToolView.prototype._pan_end = function (e) {
                  return null;
              };
              return DrawToolView;
          }(gesture_tool_1.GestureToolView));
          exports.DrawTool = (function () {
              var DrawTool = /** @class */ (function (_super) {
                  __extends(DrawTool, _super);
                  function DrawTool() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return DrawTool;
              }(gesture_tool_1.GestureTool));
              ;
              DrawTool.prototype.default_view = exports.DrawToolView;
              DrawTool.prototype.type = "DrawTool";
              DrawTool.prototype.tool_name = "Drag Span";
              DrawTool.prototype.icon = "bk-tool-icon-lasso-select";
              DrawTool.prototype.event_type = "pan";
              DrawTool.prototype.default_order = 12;
              DrawTool.define({
                  source: [p.Instance]
              });
              return DrawTool;
          })();
          
          },
          "custom/bk_script_df57e6d13ff744c395282f69bdb1d1d0.latex_label": function(require, module, exports) {
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
                    
                  var docs_json = '{"5f114d6a-96a6-4591-b587-7573a2dac59e":{"roots":{"references":[{"attributes":{},"id":"c97229b0-0e06-4a18-a3d0-167d2a530ec9","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"b377f013-0531-4bb1-a8ee-a4a5ce8c20b2","type":"Line"},{"attributes":{"data_source":{"id":"d924fadf-e8fe-4816-accb-b2fe8138b825","type":"ColumnDataSource"},"glyph":{"id":"b377f013-0531-4bb1-a8ee-a4a5ce8c20b2","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a8fde8f8-4785-4eff-90f5-90555e0688e8","type":"Line"},"selection_glyph":null,"view":{"id":"aa97fd44-a1d4-4093-8afd-4f7e9fbd04da","type":"CDSView"}},"id":"1348478c-8579-41b1-bd18-05a144d2129f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ecfe0b3a-f760-4244-be6c-3bffa93811f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"8156b8c8-7377-4c90-8fe8-faccbae2dad2","type":"BasicTicker"}},"id":"53504ea8-f1f1-46de-897b-eb0e132e97e2","type":"Grid"},{"attributes":{"source":{"id":"d924fadf-e8fe-4816-accb-b2fe8138b825","type":"ColumnDataSource"}},"id":"6dbff67d-bbae-4e88-a041-9f9c0ee1a711","type":"DrawTool"},{"attributes":{"below":[{"id":"1b1a9b0d-1886-4341-bd5d-daa411208ba3","type":"LinearAxis"}],"left":[{"id":"ea294e26-afce-43f8-948a-50c9ea4b7e95","type":"LinearAxis"}],"renderers":[{"id":"1b1a9b0d-1886-4341-bd5d-daa411208ba3","type":"LinearAxis"},{"id":"53504ea8-f1f1-46de-897b-eb0e132e97e2","type":"Grid"},{"id":"ea294e26-afce-43f8-948a-50c9ea4b7e95","type":"LinearAxis"},{"id":"bc1be713-7907-4ddf-ac1f-3976a19ec40e","type":"Grid"},{"id":"1348478c-8579-41b1-bd18-05a144d2129f","type":"GlyphRenderer"}],"title":{"id":"944ef573-21d6-457c-b607-29bbab244b29","type":"Title"},"toolbar":{"id":"cb4d6d21-ad6d-42e8-8ba6-d5ff8674ed73","type":"Toolbar"},"x_range":{"id":"d37ed754-c646-46ff-8e6a-ab30bdc9d433","type":"Range1d"},"x_scale":{"id":"c97229b0-0e06-4a18-a3d0-167d2a530ec9","type":"LinearScale"},"y_range":{"id":"1f8c1059-ff3a-46f9-96bd-281050b599ef","type":"Range1d"},"y_scale":{"id":"39ad6747-453f-4119-b419-23e7c841b76f","type":"LinearScale"}},"id":"ecfe0b3a-f760-4244-be6c-3bffa93811f0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d7bc630b-65a6-40df-8f11-2a825232159d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ecfe0b3a-f760-4244-be6c-3bffa93811f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7bc630b-65a6-40df-8f11-2a825232159d","type":"BasicTicker"}},"id":"bc1be713-7907-4ddf-ac1f-3976a19ec40e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6dbff67d-bbae-4e88-a041-9f9c0ee1a711","type":"DrawTool"}]},"id":"cb4d6d21-ad6d-42e8-8ba6-d5ff8674ed73","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"a8fde8f8-4785-4eff-90f5-90555e0688e8","type":"Line"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"944ef573-21d6-457c-b607-29bbab244b29","type":"Title"},{"attributes":{},"id":"39ad6747-453f-4119-b419-23e7c841b76f","type":"LinearScale"},{"attributes":{},"id":"8156b8c8-7377-4c90-8fe8-faccbae2dad2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"79255c76-59c9-4e72-ac88-9eda7404c54a","type":"BasicTickFormatter"},"plot":{"id":"ecfe0b3a-f760-4244-be6c-3bffa93811f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7bc630b-65a6-40df-8f11-2a825232159d","type":"BasicTicker"}},"id":"ea294e26-afce-43f8-948a-50c9ea4b7e95","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"d924fadf-e8fe-4816-accb-b2fe8138b825","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"0eddaf48-692d-46aa-8f9e-909e5c9fbfb1","type":"BasicTickFormatter"},"plot":{"id":"ecfe0b3a-f760-4244-be6c-3bffa93811f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"8156b8c8-7377-4c90-8fe8-faccbae2dad2","type":"BasicTicker"}},"id":"1b1a9b0d-1886-4341-bd5d-daa411208ba3","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"1f8c1059-ff3a-46f9-96bd-281050b599ef","type":"Range1d"},{"attributes":{},"id":"79255c76-59c9-4e72-ac88-9eda7404c54a","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"d924fadf-e8fe-4816-accb-b2fe8138b825","type":"ColumnDataSource"}},"id":"aa97fd44-a1d4-4093-8afd-4f7e9fbd04da","type":"CDSView"},{"attributes":{},"id":"0eddaf48-692d-46aa-8f9e-909e5c9fbfb1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"d37ed754-c646-46ff-8e6a-ab30bdc9d433","type":"Range1d"}],"root_ids":["ecfe0b3a-f760-4244-be6c-3bffa93811f0"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"5f114d6a-96a6-4591-b587-7573a2dac59e","elementid":"225c7c2b-e2d9-4fc4-92d7-450f4ac18376","modelid":"ecfe0b3a-f760-4244-be6c-3bffa93811f0"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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