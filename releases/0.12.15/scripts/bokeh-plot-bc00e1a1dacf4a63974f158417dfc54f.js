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
      };var element = document.getElementById("fb4ea2d4-8897-409e-aa30-23ccd8c3f172");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fb4ea2d4-8897-409e-aa30-23ccd8c3f172' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                "DrawTool": require("custom/bk_script_8b6a824193b54b1d88fc7b74ac6d180e.draw_tool").DrawTool,
          "LatexLabel": require("custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_8b6a824193b54b1d88fc7b74ac6d180e.draw_tool": function(require, module, exports) {
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
                  (sx = e.sx, sy = e.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
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
          "custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label": function(require, module, exports) {
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
          "custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter": function(require, module, exports) {
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
                    
                  var docs_json = '{"3a5115ce-bb87-4bf0-8d40-859e42542f34":{"roots":{"references":[{"attributes":{},"id":"c402ac50-e88d-4eed-9fc9-85a177a1b732","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a25f406b-6b05-4450-9583-9310eb8c6e49","subtype":"Figure","type":"Plot"},"ticker":{"id":"c402ac50-e88d-4eed-9fc9-85a177a1b732","type":"BasicTicker"}},"id":"9d1e631e-1cf3-40cc-b2d7-84bfaf042671","type":"Grid"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"bcc1cea8-fa7f-4afd-8151-86f602e55254","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]},"selected":null,"selection_policy":null},"id":"a26cd0e5-d987-4220-9e1b-d1f90a627bf1","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5b316bf9-1089-4d20-997c-f71bf4085da5","type":"Line"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"dbdff21d-1d41-465c-9048-189316e588d9","type":"Title"},{"attributes":{},"id":"3760da8e-c4be-4a0b-bc6a-7aa007557bc1","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"a26cd0e5-d987-4220-9e1b-d1f90a627bf1","type":"ColumnDataSource"}},"id":"ad8a35f9-376b-43b0-be02-d16edc07616d","type":"DrawTool"},{"attributes":{"data_source":{"id":"a26cd0e5-d987-4220-9e1b-d1f90a627bf1","type":"ColumnDataSource"},"glyph":{"id":"bcc1cea8-fa7f-4afd-8151-86f602e55254","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5b316bf9-1089-4d20-997c-f71bf4085da5","type":"Line"},"selection_glyph":null,"view":{"id":"f58ef56b-d43f-4f0e-859a-826201da3483","type":"CDSView"}},"id":"9da46258-ef3d-44f0-9c1c-0916ecead430","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"4cfa9341-ae19-4f12-b194-af8ba5ecbe7a","type":"LinearAxis"}],"left":[{"id":"c83b6fd1-2eaf-43eb-b5d1-a584d4a38fb2","type":"LinearAxis"}],"renderers":[{"id":"4cfa9341-ae19-4f12-b194-af8ba5ecbe7a","type":"LinearAxis"},{"id":"32cde999-0dfc-48dc-a675-b8a3b7c9111d","type":"Grid"},{"id":"c83b6fd1-2eaf-43eb-b5d1-a584d4a38fb2","type":"LinearAxis"},{"id":"9d1e631e-1cf3-40cc-b2d7-84bfaf042671","type":"Grid"},{"id":"9da46258-ef3d-44f0-9c1c-0916ecead430","type":"GlyphRenderer"}],"title":{"id":"dbdff21d-1d41-465c-9048-189316e588d9","type":"Title"},"toolbar":{"id":"01c1ac7e-b6a4-42b7-b48c-834314bc48f5","type":"Toolbar"},"x_range":{"id":"a096fe2a-63d6-44bd-9645-30ad027ae41d","type":"Range1d"},"x_scale":{"id":"85a79cfd-297c-4ebf-a257-d7198e7e8cc0","type":"LinearScale"},"y_range":{"id":"0a9f50b8-9565-4f83-95f1-6e99b1c32a82","type":"Range1d"},"y_scale":{"id":"57dcfc76-86f6-433c-9381-9d4cbd1c7416","type":"LinearScale"}},"id":"a25f406b-6b05-4450-9583-9310eb8c6e49","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ad8a35f9-376b-43b0-be02-d16edc07616d","type":"DrawTool"}]},"id":"01c1ac7e-b6a4-42b7-b48c-834314bc48f5","type":"Toolbar"},{"attributes":{"source":{"id":"a26cd0e5-d987-4220-9e1b-d1f90a627bf1","type":"ColumnDataSource"}},"id":"f58ef56b-d43f-4f0e-859a-826201da3483","type":"CDSView"},{"attributes":{"callback":null,"end":10},"id":"a096fe2a-63d6-44bd-9645-30ad027ae41d","type":"Range1d"},{"attributes":{"callback":null,"end":10},"id":"0a9f50b8-9565-4f83-95f1-6e99b1c32a82","type":"Range1d"},{"attributes":{},"id":"fef71bf4-008c-4bb8-8e01-acf497bd88d5","type":"BasicTickFormatter"},{"attributes":{},"id":"57dcfc76-86f6-433c-9381-9d4cbd1c7416","type":"LinearScale"},{"attributes":{"plot":{"id":"a25f406b-6b05-4450-9583-9310eb8c6e49","subtype":"Figure","type":"Plot"},"ticker":{"id":"8537e5a7-6e75-4ff7-9969-540b940ba82f","type":"BasicTicker"}},"id":"32cde999-0dfc-48dc-a675-b8a3b7c9111d","type":"Grid"},{"attributes":{},"id":"85a79cfd-297c-4ebf-a257-d7198e7e8cc0","type":"LinearScale"},{"attributes":{"formatter":{"id":"3760da8e-c4be-4a0b-bc6a-7aa007557bc1","type":"BasicTickFormatter"},"plot":{"id":"a25f406b-6b05-4450-9583-9310eb8c6e49","subtype":"Figure","type":"Plot"},"ticker":{"id":"8537e5a7-6e75-4ff7-9969-540b940ba82f","type":"BasicTicker"}},"id":"4cfa9341-ae19-4f12-b194-af8ba5ecbe7a","type":"LinearAxis"},{"attributes":{"formatter":{"id":"fef71bf4-008c-4bb8-8e01-acf497bd88d5","type":"BasicTickFormatter"},"plot":{"id":"a25f406b-6b05-4450-9583-9310eb8c6e49","subtype":"Figure","type":"Plot"},"ticker":{"id":"c402ac50-e88d-4eed-9fc9-85a177a1b732","type":"BasicTicker"}},"id":"c83b6fd1-2eaf-43eb-b5d1-a584d4a38fb2","type":"LinearAxis"},{"attributes":{},"id":"8537e5a7-6e75-4ff7-9969-540b940ba82f","type":"BasicTicker"}],"root_ids":["a25f406b-6b05-4450-9583-9310eb8c6e49"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"3a5115ce-bb87-4bf0-8d40-859e42542f34","elementid":"fb4ea2d4-8897-409e-aa30-23ccd8c3f172","modelid":"a25f406b-6b05-4450-9583-9310eb8c6e49"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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