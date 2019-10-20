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
      };var element = document.getElementById("af3800e8-bfcd-4ee4-a2a2-fb9a4215fa9d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'af3800e8-bfcd-4ee4-a2a2-fb9a4215fa9d' but no matching script tag was found. ")
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
          "MyFormatter": require("custom/bk_script_cf3005b13ac34287ae4cb92e0b65d530.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_dd4c377015034ab187503a36d9264b7f.draw_tool").DrawTool
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
          
          },
          "custom/bk_script_dd4c377015034ab187503a36d9264b7f.draw_tool": function(require, module, exports) {
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
                    
                  var docs_json = '{"f0fbc00c-984d-4d51-8a70-e0a36ffaae02":{"roots":{"references":[{"attributes":{"data_source":{"id":"72b10235-258e-4b58-a204-96ccf11a0cf4","type":"ColumnDataSource"},"glyph":{"id":"2d51f8e6-fdd9-4f22-bbdc-c5fc169a1f67","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7309b508-de58-4b9c-a779-f2999dbdc294","type":"Line"},"selection_glyph":null,"view":{"id":"271d71ff-6883-4424-aaee-c2a5a760e5a0","type":"CDSView"}},"id":"31eb716b-891f-40a3-a76a-38e2e14be55c","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"ae62ca10-e243-435a-b6c9-ee080b747d67","type":"Range1d"},{"attributes":{},"id":"4762aec7-61cf-407a-a7a8-b39f6e1e9c5d","type":"BasicTickFormatter"},{"attributes":{},"id":"3d5f2306-dd4e-4afc-bb13-29d1bffd2c8f","type":"BasicTicker"},{"attributes":{},"id":"543086bc-3790-43e1-8d6a-bf8187942868","type":"BasicTicker"},{"attributes":{"source":{"id":"72b10235-258e-4b58-a204-96ccf11a0cf4","type":"ColumnDataSource"}},"id":"271d71ff-6883-4424-aaee-c2a5a760e5a0","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"7309b508-de58-4b9c-a779-f2999dbdc294","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"2d51f8e6-fdd9-4f22-bbdc-c5fc169a1f67","type":"Line"},{"attributes":{"source":{"id":"72b10235-258e-4b58-a204-96ccf11a0cf4","type":"ColumnDataSource"}},"id":"70c28745-ea45-4bca-99c1-caf8fbe7ce11","type":"DrawTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"72b10235-258e-4b58-a204-96ccf11a0cf4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6ca952cf-f135-460b-8c7d-f2ef91d07626","subtype":"Figure","type":"Plot"},"ticker":{"id":"543086bc-3790-43e1-8d6a-bf8187942868","type":"BasicTicker"}},"id":"a0453a7f-bee2-4efd-82a0-597c8c22d251","type":"Grid"},{"attributes":{"formatter":{"id":"4762aec7-61cf-407a-a7a8-b39f6e1e9c5d","type":"BasicTickFormatter"},"plot":{"id":"6ca952cf-f135-460b-8c7d-f2ef91d07626","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d5f2306-dd4e-4afc-bb13-29d1bffd2c8f","type":"BasicTicker"}},"id":"e985d2fe-af49-495a-8336-725eb9d971f9","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"6ca952cf-f135-460b-8c7d-f2ef91d07626","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d5f2306-dd4e-4afc-bb13-29d1bffd2c8f","type":"BasicTicker"}},"id":"4b091888-b7db-4b4f-b0aa-3c4586b22075","type":"Grid"},{"attributes":{},"id":"0c624eca-313c-4fa3-a63d-f06136c143d2","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"16184ba4-fc83-4e1c-9d9c-3f100be8e985","type":"Title"},{"attributes":{},"id":"ddd0fb52-673b-4ace-9a4b-596124e86f10","type":"LinearScale"},{"attributes":{"below":[{"id":"ff16d145-7290-4c78-931e-c656bf1f12f6","type":"LinearAxis"}],"left":[{"id":"e985d2fe-af49-495a-8336-725eb9d971f9","type":"LinearAxis"}],"renderers":[{"id":"ff16d145-7290-4c78-931e-c656bf1f12f6","type":"LinearAxis"},{"id":"a0453a7f-bee2-4efd-82a0-597c8c22d251","type":"Grid"},{"id":"e985d2fe-af49-495a-8336-725eb9d971f9","type":"LinearAxis"},{"id":"4b091888-b7db-4b4f-b0aa-3c4586b22075","type":"Grid"},{"id":"31eb716b-891f-40a3-a76a-38e2e14be55c","type":"GlyphRenderer"}],"title":{"id":"16184ba4-fc83-4e1c-9d9c-3f100be8e985","type":"Title"},"toolbar":{"id":"3ca5bd49-0dac-4c1c-86f8-8d9919ba8dac","type":"Toolbar"},"x_range":{"id":"ae62ca10-e243-435a-b6c9-ee080b747d67","type":"Range1d"},"x_scale":{"id":"94613129-7a9b-4cd9-972f-989fbf61adf2","type":"LinearScale"},"y_range":{"id":"ac84deec-3e59-4ccc-9656-501e2f7b0904","type":"Range1d"},"y_scale":{"id":"ddd0fb52-673b-4ace-9a4b-596124e86f10","type":"LinearScale"}},"id":"6ca952cf-f135-460b-8c7d-f2ef91d07626","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"94613129-7a9b-4cd9-972f-989fbf61adf2","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70c28745-ea45-4bca-99c1-caf8fbe7ce11","type":"DrawTool"}]},"id":"3ca5bd49-0dac-4c1c-86f8-8d9919ba8dac","type":"Toolbar"},{"attributes":{"callback":null,"end":10},"id":"ac84deec-3e59-4ccc-9656-501e2f7b0904","type":"Range1d"},{"attributes":{"formatter":{"id":"0c624eca-313c-4fa3-a63d-f06136c143d2","type":"BasicTickFormatter"},"plot":{"id":"6ca952cf-f135-460b-8c7d-f2ef91d07626","subtype":"Figure","type":"Plot"},"ticker":{"id":"543086bc-3790-43e1-8d6a-bf8187942868","type":"BasicTicker"}},"id":"ff16d145-7290-4c78-931e-c656bf1f12f6","type":"LinearAxis"}],"root_ids":["6ca952cf-f135-460b-8c7d-f2ef91d07626"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"f0fbc00c-984d-4d51-8a70-e0a36ffaae02","elementid":"af3800e8-bfcd-4ee4-a2a2-fb9a4215fa9d","modelid":"6ca952cf-f135-460b-8c7d-f2ef91d07626"}];
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