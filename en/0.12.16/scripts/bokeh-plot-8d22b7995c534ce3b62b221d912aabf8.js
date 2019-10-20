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
      };var element = document.getElementById("1e251411-00d0-40ae-aa1a-e09897dc3bf2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1e251411-00d0-40ae-aa1a-e09897dc3bf2' but no matching script tag was found. ")
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
                "DrawTool": require("custom/bk_script_4fe1a953f37e440bafdcb3330a4881eb.draw_tool").DrawTool,
          "MyFormatter": require("custom/bk_script_536909578ebd4dd59dc108ec1a737cb4.my_formatter").MyFormatter,
          "LatexLabel": require("custom/bk_script_da3193bc49874d5cb629b293ffd9b45e.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_4fe1a953f37e440bafdcb3330a4881eb.draw_tool": function(require, module, exports) {
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
                    
                  var docs_json = '{"e5cf0793-7de7-4687-8cac-0466c4ef1695":{"roots":{"references":[{"attributes":{},"id":"f8a4e450-c0d2-431d-9823-1ebc0e08a7f8","type":"Selection"},{"attributes":{"source":{"id":"0a06e53d-c2b2-492f-8c8b-a17543f9a3d6","type":"ColumnDataSource"}},"id":"467b4331-8a13-4c63-9ff5-1c7023be0bb3","type":"CDSView"},{"attributes":{"formatter":{"id":"623915fc-6411-4f5c-bb3c-ddcd351c066a","type":"BasicTickFormatter"},"plot":{"id":"678f5832-d34d-46fe-9012-9dee0d9e081a","subtype":"Figure","type":"Plot"},"ticker":{"id":"7bd91600-f896-481c-bc4f-c94ac77208c6","type":"BasicTicker"}},"id":"8ae94dc8-7bf1-4141-87f5-af6a8c305d22","type":"LinearAxis"},{"attributes":{"below":[{"id":"8ae94dc8-7bf1-4141-87f5-af6a8c305d22","type":"LinearAxis"}],"left":[{"id":"b168899b-3e71-4346-9ed5-d48f621f3fe9","type":"LinearAxis"}],"renderers":[{"id":"8ae94dc8-7bf1-4141-87f5-af6a8c305d22","type":"LinearAxis"},{"id":"ac6ed996-1b06-4546-a07b-275af6674232","type":"Grid"},{"id":"b168899b-3e71-4346-9ed5-d48f621f3fe9","type":"LinearAxis"},{"id":"b6d8b47e-8ad4-469e-ad17-357dad1a689c","type":"Grid"},{"id":"809e83f8-367e-4d06-8941-0e897997a452","type":"GlyphRenderer"}],"title":{"id":"c367ecf2-2627-4aa1-9c40-4640dbc75091","type":"Title"},"toolbar":{"id":"51d148e3-c260-4fc6-af3e-a23300bf9e79","type":"Toolbar"},"x_range":{"id":"b9ede64b-11fe-4d5d-af73-4e93522bd8d9","type":"Range1d"},"x_scale":{"id":"612e1055-5edd-41f9-a0bc-6bd7059915a2","type":"LinearScale"},"y_range":{"id":"17752a47-1658-440a-b41f-198e54c54dd6","type":"Range1d"},"y_scale":{"id":"09d905c5-87a7-4cba-8193-b5e46e78071d","type":"LinearScale"}},"id":"678f5832-d34d-46fe-9012-9dee0d9e081a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"09d905c5-87a7-4cba-8193-b5e46e78071d","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"e5bd1005-56f4-4c9c-85cd-baac3e599d93","type":"Line"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"c367ecf2-2627-4aa1-9c40-4640dbc75091","type":"Title"},{"attributes":{},"id":"623915fc-6411-4f5c-bb3c-ddcd351c066a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"678f5832-d34d-46fe-9012-9dee0d9e081a","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d290c86-d6ff-4c07-a4a3-174d8f9879ff","type":"BasicTicker"}},"id":"b6d8b47e-8ad4-469e-ad17-357dad1a689c","type":"Grid"},{"attributes":{},"id":"e252c1dc-5ad3-4f69-94a6-b6a49676e2cb","type":"UnionRenderers"},{"attributes":{"callback":null,"end":10},"id":"b9ede64b-11fe-4d5d-af73-4e93522bd8d9","type":"Range1d"},{"attributes":{"source":{"id":"0a06e53d-c2b2-492f-8c8b-a17543f9a3d6","type":"ColumnDataSource"}},"id":"913da730-b987-4227-bcae-92d719b5f268","type":"DrawTool"},{"attributes":{"formatter":{"id":"f54ccb2c-a8e7-43d0-ab02-f4b337f8fdf0","type":"BasicTickFormatter"},"plot":{"id":"678f5832-d34d-46fe-9012-9dee0d9e081a","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d290c86-d6ff-4c07-a4a3-174d8f9879ff","type":"BasicTicker"}},"id":"b168899b-3e71-4346-9ed5-d48f621f3fe9","type":"LinearAxis"},{"attributes":{},"id":"f54ccb2c-a8e7-43d0-ab02-f4b337f8fdf0","type":"BasicTickFormatter"},{"attributes":{},"id":"7bd91600-f896-481c-bc4f-c94ac77208c6","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"913da730-b987-4227-bcae-92d719b5f268","type":"DrawTool"}]},"id":"51d148e3-c260-4fc6-af3e-a23300bf9e79","type":"Toolbar"},{"attributes":{"data_source":{"id":"0a06e53d-c2b2-492f-8c8b-a17543f9a3d6","type":"ColumnDataSource"},"glyph":{"id":"e080034b-4c28-4334-adf0-9f3b0b6e2233","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e5bd1005-56f4-4c9c-85cd-baac3e599d93","type":"Line"},"selection_glyph":null,"view":{"id":"467b4331-8a13-4c63-9ff5-1c7023be0bb3","type":"CDSView"}},"id":"809e83f8-367e-4d06-8941-0e897997a452","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"f8a4e450-c0d2-431d-9823-1ebc0e08a7f8","type":"Selection"},"selection_policy":{"id":"e252c1dc-5ad3-4f69-94a6-b6a49676e2cb","type":"UnionRenderers"}},"id":"0a06e53d-c2b2-492f-8c8b-a17543f9a3d6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"678f5832-d34d-46fe-9012-9dee0d9e081a","subtype":"Figure","type":"Plot"},"ticker":{"id":"7bd91600-f896-481c-bc4f-c94ac77208c6","type":"BasicTicker"}},"id":"ac6ed996-1b06-4546-a07b-275af6674232","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"17752a47-1658-440a-b41f-198e54c54dd6","type":"Range1d"},{"attributes":{},"id":"612e1055-5edd-41f9-a0bc-6bd7059915a2","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"e080034b-4c28-4334-adf0-9f3b0b6e2233","type":"Line"},{"attributes":{},"id":"9d290c86-d6ff-4c07-a4a3-174d8f9879ff","type":"BasicTicker"}],"root_ids":["678f5832-d34d-46fe-9012-9dee0d9e081a"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"e5cf0793-7de7-4687-8cac-0466c4ef1695","elementid":"1e251411-00d0-40ae-aa1a-e09897dc3bf2","modelid":"678f5832-d34d-46fe-9012-9dee0d9e081a"}];
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