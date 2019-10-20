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
      };var element = document.getElementById("f1110576-c04a-46cd-b555-0b4a3ecc35bd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f1110576-c04a-46cd-b555-0b4a3ecc35bd' but no matching script tag was found. ")
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
          "MyFormatter": require("custom/bk_script_b64ada8818d44343b0d14823d93ffccf.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_cfe5420328f44687b89787ca1390e9e2.draw_tool").DrawTool
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
          
          },
          "custom/bk_script_cfe5420328f44687b89787ca1390e9e2.draw_tool": function(require, module, exports) {
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
                    var docs_json = '{"b2203662-d782-46e3-8b14-300beb3bfde5":{"roots":{"references":[{"attributes":{"callback":null,"end":10},"id":"cb495a8d-3aed-43d6-bab0-0b39509c2bbf","type":"Range1d"},{"attributes":{},"id":"96af43d5-1801-40ad-b7d8-c9ddccc5c37e","type":"LinearScale"},{"attributes":{"formatter":{"id":"62740959-24d3-4b5b-92c8-26c9ad2bf292","type":"BasicTickFormatter"},"plot":{"id":"de68a836-11bc-4d95-8c54-c9864dead08e","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb9543e1-9556-4197-b569-6ca026b97176","type":"BasicTicker"}},"id":"a2d0cbd5-be90-453d-ac46-1fb0a4e8e09d","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"04761cfd-0b15-412d-9445-3d342a7f5608","type":"Line"},{"attributes":{},"id":"45ecf55c-7af6-45cb-8269-2bb93949f782","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"de68a836-11bc-4d95-8c54-c9864dead08e","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb9543e1-9556-4197-b569-6ca026b97176","type":"BasicTicker"}},"id":"466bb3e5-2b0d-4a01-9996-4844ee34afc8","type":"Grid"},{"attributes":{"formatter":{"id":"fb311021-8450-452d-8d58-662cceaa30fe","type":"BasicTickFormatter"},"plot":{"id":"de68a836-11bc-4d95-8c54-c9864dead08e","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1e794b0-8031-4f11-b705-9e82f4de8b3f","type":"BasicTicker"}},"id":"fee2b7aa-8ac8-4404-8f25-6ee0243e7137","type":"LinearAxis"},{"attributes":{"source":{"id":"dcc7d0be-e874-4751-ac63-16aaeea76c93","type":"ColumnDataSource"}},"id":"e799c117-2e00-4e06-9ff5-855b48f0425c","type":"CDSView"},{"attributes":{"data_source":{"id":"dcc7d0be-e874-4751-ac63-16aaeea76c93","type":"ColumnDataSource"},"glyph":{"id":"04761cfd-0b15-412d-9445-3d342a7f5608","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7048e9ec-2835-4884-994d-f2de741199fa","type":"Line"},"selection_glyph":null,"view":{"id":"e799c117-2e00-4e06-9ff5-855b48f0425c","type":"CDSView"}},"id":"4507e652-ba3b-4b2d-a4fc-361257e7e1ed","type":"GlyphRenderer"},{"attributes":{},"id":"fb311021-8450-452d-8d58-662cceaa30fe","type":"BasicTickFormatter"},{"attributes":{},"id":"62740959-24d3-4b5b-92c8-26c9ad2bf292","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"7048e9ec-2835-4884-994d-f2de741199fa","type":"Line"},{"attributes":{},"id":"e1e794b0-8031-4f11-b705-9e82f4de8b3f","type":"BasicTicker"},{"attributes":{"below":[{"id":"fee2b7aa-8ac8-4404-8f25-6ee0243e7137","type":"LinearAxis"}],"left":[{"id":"a2d0cbd5-be90-453d-ac46-1fb0a4e8e09d","type":"LinearAxis"}],"renderers":[{"id":"fee2b7aa-8ac8-4404-8f25-6ee0243e7137","type":"LinearAxis"},{"id":"f84cc77c-6373-4e64-8b0a-3752b34528e5","type":"Grid"},{"id":"a2d0cbd5-be90-453d-ac46-1fb0a4e8e09d","type":"LinearAxis"},{"id":"466bb3e5-2b0d-4a01-9996-4844ee34afc8","type":"Grid"},{"id":"4507e652-ba3b-4b2d-a4fc-361257e7e1ed","type":"GlyphRenderer"}],"title":{"id":"371bdf91-c3ac-4212-a7f8-c2b6660878da","type":"Title"},"toolbar":{"id":"76a3c490-3e27-4c73-93c2-dd481a592c10","type":"Toolbar"},"x_range":{"id":"cb495a8d-3aed-43d6-bab0-0b39509c2bbf","type":"Range1d"},"x_scale":{"id":"45ecf55c-7af6-45cb-8269-2bb93949f782","type":"LinearScale"},"y_range":{"id":"1d8b7bbf-fcee-465a-871c-71d9cf588c0c","type":"Range1d"},"y_scale":{"id":"96af43d5-1801-40ad-b7d8-c9ddccc5c37e","type":"LinearScale"}},"id":"de68a836-11bc-4d95-8c54-c9864dead08e","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2611ca35-e73a-4ac9-bf24-87748cacd7be","type":"DrawTool"}]},"id":"76a3c490-3e27-4c73-93c2-dd481a592c10","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"dcc7d0be-e874-4751-ac63-16aaeea76c93","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"371bdf91-c3ac-4212-a7f8-c2b6660878da","type":"Title"},{"attributes":{},"id":"cb9543e1-9556-4197-b569-6ca026b97176","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"1d8b7bbf-fcee-465a-871c-71d9cf588c0c","type":"Range1d"},{"attributes":{"source":{"id":"dcc7d0be-e874-4751-ac63-16aaeea76c93","type":"ColumnDataSource"}},"id":"2611ca35-e73a-4ac9-bf24-87748cacd7be","type":"DrawTool"},{"attributes":{"plot":{"id":"de68a836-11bc-4d95-8c54-c9864dead08e","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1e794b0-8031-4f11-b705-9e82f4de8b3f","type":"BasicTicker"}},"id":"f84cc77c-6373-4e64-8b0a-3752b34528e5","type":"Grid"}],"root_ids":["de68a836-11bc-4d95-8c54-c9864dead08e"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"b2203662-d782-46e3-8b14-300beb3bfde5","elementid":"f1110576-c04a-46cd-b555-0b4a3ecc35bd","modelid":"de68a836-11bc-4d95-8c54-c9864dead08e"}];
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