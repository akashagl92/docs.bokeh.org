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
      };var element = document.getElementById("66a5d689-577e-4bc9-8bf3-918d968b810c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '66a5d689-577e-4bc9-8bf3-918d968b810c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_8f1efcd166444c83bb98f1ac6fb868c4.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_a4dba819281c4cefb4f9daf58cfd98b7.draw_tool").DrawTool
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label": function(require, module, exports) {
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
          "custom/bk_script_8f1efcd166444c83bb98f1ac6fb868c4.my_formatter": function(require, module, exports) {
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
          "custom/bk_script_a4dba819281c4cefb4f9daf58cfd98b7.draw_tool": function(require, module, exports) {
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
                    
                  var docs_json = '{"7cbdfd4f-f290-48b1-b869-3dd76513aaa2":{"roots":{"references":[{"attributes":{"source":{"id":"ad70e2b4-9b66-44b7-9612-c23f061b2afe","type":"ColumnDataSource"}},"id":"45e495a5-8ac0-49ca-8396-29cfc0ac2471","type":"DrawTool"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"ebdb57d8-9fcd-4ddb-ad0a-26a2cd6f0168","type":"Title"},{"attributes":{"callback":null,"end":10},"id":"e3753a86-0b78-451f-b315-6aedd5f026ec","type":"Range1d"},{"attributes":{"data_source":{"id":"ad70e2b4-9b66-44b7-9612-c23f061b2afe","type":"ColumnDataSource"},"glyph":{"id":"53a67c6a-cc17-4993-ab46-56eec4493a79","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dfd1ed1e-0ae0-4ad0-905a-a638932d7100","type":"Line"},"selection_glyph":null,"view":{"id":"40647a8c-8217-4d2e-a8df-2c0847512b5a","type":"CDSView"}},"id":"b5a2752c-ab6f-4bb0-8c84-42c2147e8e81","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"45e495a5-8ac0-49ca-8396-29cfc0ac2471","type":"DrawTool"}]},"id":"3d303947-1a89-443d-b9fd-ccc68c0224c1","type":"Toolbar"},{"attributes":{},"id":"cc18e88f-31ac-41f6-a981-f18f618b17d1","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"b6c072dd-2a18-4bbc-85aa-e15b6103fda3","type":"LinearAxis"}],"left":[{"id":"bf19a28b-e308-401f-8843-26756965bd7a","type":"LinearAxis"}],"renderers":[{"id":"b6c072dd-2a18-4bbc-85aa-e15b6103fda3","type":"LinearAxis"},{"id":"c0fcf139-ca6b-4f86-8888-d805a8b12fdd","type":"Grid"},{"id":"bf19a28b-e308-401f-8843-26756965bd7a","type":"LinearAxis"},{"id":"bad43d76-0480-47d2-9707-e0755b89bdbb","type":"Grid"},{"id":"b5a2752c-ab6f-4bb0-8c84-42c2147e8e81","type":"GlyphRenderer"}],"title":{"id":"ebdb57d8-9fcd-4ddb-ad0a-26a2cd6f0168","type":"Title"},"toolbar":{"id":"3d303947-1a89-443d-b9fd-ccc68c0224c1","type":"Toolbar"},"x_range":{"id":"a8057405-0199-4823-8f1a-de9333aa3077","type":"Range1d"},"x_scale":{"id":"3a10de0c-87f2-4b52-9e9c-afe1c9c80feb","type":"LinearScale"},"y_range":{"id":"e3753a86-0b78-451f-b315-6aedd5f026ec","type":"Range1d"},"y_scale":{"id":"5987dea5-e2da-4ac6-a01f-89e65fe48500","type":"LinearScale"}},"id":"f108a80e-1a93-454a-88b6-cbdbb028cf82","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"f108a80e-1a93-454a-88b6-cbdbb028cf82","subtype":"Figure","type":"Plot"},"ticker":{"id":"3afe2cc3-c8f5-4953-86b7-f064a03a5cc5","type":"BasicTicker"}},"id":"c0fcf139-ca6b-4f86-8888-d805a8b12fdd","type":"Grid"},{"attributes":{"formatter":{"id":"8a4ecdd8-c500-42c9-a3a4-dfdf0ab87f51","type":"BasicTickFormatter"},"plot":{"id":"f108a80e-1a93-454a-88b6-cbdbb028cf82","subtype":"Figure","type":"Plot"},"ticker":{"id":"4dfc8465-f822-4acd-9c6d-70bd03ccf04c","type":"BasicTicker"}},"id":"bf19a28b-e308-401f-8843-26756965bd7a","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"dfd1ed1e-0ae0-4ad0-905a-a638932d7100","type":"Line"},{"attributes":{},"id":"3a10de0c-87f2-4b52-9e9c-afe1c9c80feb","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"f108a80e-1a93-454a-88b6-cbdbb028cf82","subtype":"Figure","type":"Plot"},"ticker":{"id":"4dfc8465-f822-4acd-9c6d-70bd03ccf04c","type":"BasicTicker"}},"id":"bad43d76-0480-47d2-9707-e0755b89bdbb","type":"Grid"},{"attributes":{"formatter":{"id":"cc18e88f-31ac-41f6-a981-f18f618b17d1","type":"BasicTickFormatter"},"plot":{"id":"f108a80e-1a93-454a-88b6-cbdbb028cf82","subtype":"Figure","type":"Plot"},"ticker":{"id":"3afe2cc3-c8f5-4953-86b7-f064a03a5cc5","type":"BasicTicker"}},"id":"b6c072dd-2a18-4bbc-85aa-e15b6103fda3","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"53a67c6a-cc17-4993-ab46-56eec4493a79","type":"Line"},{"attributes":{},"id":"5987dea5-e2da-4ac6-a01f-89e65fe48500","type":"LinearScale"},{"attributes":{},"id":"3afe2cc3-c8f5-4953-86b7-f064a03a5cc5","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"a8057405-0199-4823-8f1a-de9333aa3077","type":"Range1d"},{"attributes":{},"id":"4dfc8465-f822-4acd-9c6d-70bd03ccf04c","type":"BasicTicker"},{"attributes":{},"id":"8a4ecdd8-c500-42c9-a3a4-dfdf0ab87f51","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"ad70e2b4-9b66-44b7-9612-c23f061b2afe","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ad70e2b4-9b66-44b7-9612-c23f061b2afe","type":"ColumnDataSource"}},"id":"40647a8c-8217-4d2e-a8df-2c0847512b5a","type":"CDSView"}],"root_ids":["f108a80e-1a93-454a-88b6-cbdbb028cf82"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"7cbdfd4f-f290-48b1-b869-3dd76513aaa2","elementid":"66a5d689-577e-4bc9-8bf3-918d968b810c","modelid":"f108a80e-1a93-454a-88b6-cbdbb028cf82"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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