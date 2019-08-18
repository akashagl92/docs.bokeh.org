(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("2293aa41-31c3-4b4c-94e0-072e446f9a4f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2293aa41-31c3-4b4c-94e0-072e446f9a4f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          
          (function outer(modules, cache, entry) {
            if (Bokeh != null) {
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                var plugin = Bokeh.require(entry[i]);
                Bokeh.Models.register_models(plugin.models);
          
                for (var name in plugin) {
                  if (name !== "models") {
                    Bokeh[name] = plugin[name];
                  }
                }
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          
          ({
            "custom/main": [function(require, module, exports) {
              module.exports = {
                models: {
                  "DrawTool": require("custom/bk_script_29e089a3333e4b06a0eab3a80373538c.draw_tool").DrawTool,
          "MyFormatter": require("custom/bk_script_5f5f109f0ce649818d9b2abce022f66a.my_formatter").MyFormatter,
          "LatexLabel": require("custom/bk_script_e2ced638994c4c73ae4d7227a2df05d3.latex_label").LatexLabel
                }
              };
            }, {}],
            "custom/bk_script_29e089a3333e4b06a0eab3a80373538c.draw_tool": [function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var p = require("core/properties");
          var gesture_tool_1 = require("models/tools/gestures/gesture_tool");
          exports.DrawToolView = (function (superClass) {
              extend(DrawToolView, superClass);
              function DrawToolView() {
                  return DrawToolView.__super__.constructor.apply(this, arguments);
              }
              DrawToolView.prototype._pan_start = function (e) {
                  return this.model.source.data = {
                      x: [],
                      y: []
                  };
              };
              DrawToolView.prototype._pan = function (e) {
                  var canvas, frame, vx, vy, x, y;
                  frame = this.plot_model.frame;
                  canvas = this.plot_view.canvas;
                  vx = canvas.sx_to_vx(e.bokeh.sx);
                  vy = canvas.sy_to_vy(e.bokeh.sy);
                  if (!frame.contains(vx, vy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(vx);
                  y = frame.yscales['default'].invert(vy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
              };
              DrawToolView.prototype._pan_end = function (e) {
                  return null;
              };
              return DrawToolView;
          })(gesture_tool_1.GestureToolView);
          exports.DrawTool = (function (superClass) {
              extend(DrawTool, superClass);
              function DrawTool() {
                  return DrawTool.__super__.constructor.apply(this, arguments);
              }
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
          })(gesture_tool_1.GestureTool);
          
          }, {}],
          "custom/bk_script_5f5f109f0ce649818d9b2abce022f66a.my_formatter": [function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var tick_formatter_1 = require("models/formatters/tick_formatter");
          exports.MyFormatter = (function (superClass) {
              extend(MyFormatter, superClass);
              function MyFormatter() {
                  return MyFormatter.__super__.constructor.apply(this, arguments);
              }
              MyFormatter.prototype.type = "MyFormatter";
              MyFormatter.prototype.doFormat = function (ticks) {
                  var formatted, i, j, ref;
                  formatted = ["" + ticks[0]];
                  for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                      formatted.push("+" + ((ticks[i] - ticks[0]).toPrecision(2)));
                  }
                  return formatted;
              };
              return MyFormatter;
          })(tick_formatter_1.TickFormatter);
          
          }, {}],
          "custom/bk_script_e2ced638994c4c73ae4d7227a2df05d3.latex_label": [function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var label_1 = require("models/annotations/label");
          exports.LatexLabelView = (function (superClass) {
              extend(LatexLabelView, superClass);
              function LatexLabelView() {
                  return LatexLabelView.__super__.constructor.apply(this, arguments);
              }
              LatexLabelView.prototype.render = function () {
                  var angle, ctx, panel_offset, sx, sy, vx, vy;
                  ctx = this.plot_view.canvas_view.ctx;
                  switch (this.model.angle_units) {
                      case "rad":
                          angle = -1 * this.model.angle;
                          break;
                      case "deg":
                          angle = -1 * this.model.angle * Math.PI / 180.0;
                  }
                  if (this.model.x_units === "data") {
                      vx = this.xscale.compute(this.model.x);
                  }
                  else {
                      vx = this.model.x;
                  }
                  sx = this.canvas.vx_to_sx(vx);
                  if (this.model.y_units === "data") {
                      vy = this.yscale.compute(this.model.y);
                  }
                  else {
                      vy = this.model.y;
                  }
                  sy = this.canvas.vy_to_sy(vy);
                  if (this.model.panel != null) {
                      panel_offset = this._get_panel_offset();
                      sx += panel_offset.x;
                      sy += panel_offset.y;
                  }
                  this._css_text(ctx, "", sx + this.model.x_offset, sy - this.model.y_offset, angle);
                  return katex.render(this.model.text, this.el, {
                      displayMode: true
                  });
              };
              return LatexLabelView;
          })(label_1.LabelView);
          exports.LatexLabel = (function (superClass) {
              extend(LatexLabel, superClass);
              function LatexLabel() {
                  return LatexLabel.__super__.constructor.apply(this, arguments);
              }
              LatexLabel.prototype.type = 'LatexLabel';
              LatexLabel.prototype.default_view = exports.LatexLabelView;
              return LatexLabel;
          })(label_1.Label);
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"d60b2b71-c28c-4c84-9a5b-7e7f9f3d10e1":{"roots":{"references":[{"attributes":{"callback":null,"end":10},"id":"479a88f8-4b6e-4e2d-b72c-2cd62b3ea118","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9f06f86a-5cf3-45a8-8150-ca22936da02e","type":"DrawTool"}]},"id":"c8ab147c-6104-43d0-ae8b-abfa9c893ed7","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[],"y":[]}},"id":"91d866cd-a420-4b45-b185-3ad5c003b712","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"d402d74a-64a1-4fbb-817a-315cad8c1fc3","subtype":"Figure","type":"Plot"},"ticker":{"id":"427a40ed-2a41-4b8a-b3b5-6fb1acdd5cdd","type":"BasicTicker"}},"id":"d80415f0-f6eb-4644-8e9c-77f21c8bc4a3","type":"Grid"},{"attributes":{},"id":"849cdc9c-55b3-404f-b721-7c330119d378","type":"ToolEvents"},{"attributes":{},"id":"54fb75e7-550e-4048-8458-dbd5dd408c19","type":"BasicTickFormatter"},{"attributes":{},"id":"859ea4cb-cccc-4c8b-b5c7-cb14c37a5b96","type":"LinearScale"},{"attributes":{},"id":"d78731b9-b35f-429a-b6b2-cc7d18b2db40","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"54fb75e7-550e-4048-8458-dbd5dd408c19","type":"BasicTickFormatter"},"plot":{"id":"d402d74a-64a1-4fbb-817a-315cad8c1fc3","subtype":"Figure","type":"Plot"},"ticker":{"id":"427a40ed-2a41-4b8a-b3b5-6fb1acdd5cdd","type":"BasicTicker"}},"id":"7ec5e3c6-40bd-47ce-895f-8914f5a21d51","type":"LinearAxis"},{"attributes":{"plot":{"id":"d402d74a-64a1-4fbb-817a-315cad8c1fc3","subtype":"Figure","type":"Plot"},"source":{"id":"91d866cd-a420-4b45-b185-3ad5c003b712","type":"ColumnDataSource"}},"id":"9f06f86a-5cf3-45a8-8150-ca22936da02e","type":"DrawTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0131bbfa-6767-4d09-9252-fa4263526624","type":"Line"},{"attributes":{"plot":{"id":"d402d74a-64a1-4fbb-817a-315cad8c1fc3","subtype":"Figure","type":"Plot"},"ticker":{"id":"31868fc3-5eda-4602-a12f-473e90f1fed7","type":"BasicTicker"}},"id":"ab3f42be-5b30-4e63-b642-cac89d02f8b8","type":"Grid"},{"attributes":{"data_source":{"id":"91d866cd-a420-4b45-b185-3ad5c003b712","type":"ColumnDataSource"},"glyph":{"id":"0131bbfa-6767-4d09-9252-fa4263526624","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6afff664-4e6a-4a7e-8a3d-b9c677b8fe45","type":"Line"},"selection_glyph":null},"id":"c1572ead-e4b5-47c6-8ec2-11d5a5cd0f7d","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6afff664-4e6a-4a7e-8a3d-b9c677b8fe45","type":"Line"},{"attributes":{"callback":null,"end":10},"id":"e983ee58-d3a7-473b-abc5-e0a0f5f143a8","type":"Range1d"},{"attributes":{},"id":"427a40ed-2a41-4b8a-b3b5-6fb1acdd5cdd","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"8a7b4d29-defe-4b18-8bba-bf1ed8b8b42e","type":"Title"},{"attributes":{"formatter":{"id":"d78731b9-b35f-429a-b6b2-cc7d18b2db40","type":"BasicTickFormatter"},"plot":{"id":"d402d74a-64a1-4fbb-817a-315cad8c1fc3","subtype":"Figure","type":"Plot"},"ticker":{"id":"31868fc3-5eda-4602-a12f-473e90f1fed7","type":"BasicTicker"}},"id":"92388b87-3566-44a2-9ded-ee48cdea4b80","type":"LinearAxis"},{"attributes":{},"id":"31868fc3-5eda-4602-a12f-473e90f1fed7","type":"BasicTicker"},{"attributes":{"below":[{"id":"92388b87-3566-44a2-9ded-ee48cdea4b80","type":"LinearAxis"}],"left":[{"id":"7ec5e3c6-40bd-47ce-895f-8914f5a21d51","type":"LinearAxis"}],"renderers":[{"id":"92388b87-3566-44a2-9ded-ee48cdea4b80","type":"LinearAxis"},{"id":"ab3f42be-5b30-4e63-b642-cac89d02f8b8","type":"Grid"},{"id":"7ec5e3c6-40bd-47ce-895f-8914f5a21d51","type":"LinearAxis"},{"id":"d80415f0-f6eb-4644-8e9c-77f21c8bc4a3","type":"Grid"},{"id":"c1572ead-e4b5-47c6-8ec2-11d5a5cd0f7d","type":"GlyphRenderer"}],"title":{"id":"8a7b4d29-defe-4b18-8bba-bf1ed8b8b42e","type":"Title"},"tool_events":{"id":"849cdc9c-55b3-404f-b721-7c330119d378","type":"ToolEvents"},"toolbar":{"id":"c8ab147c-6104-43d0-ae8b-abfa9c893ed7","type":"Toolbar"},"x_range":{"id":"e983ee58-d3a7-473b-abc5-e0a0f5f143a8","type":"Range1d"},"x_scale":{"id":"9c6db4c0-f62a-4ed0-aefb-2bebdec92382","type":"LinearScale"},"y_range":{"id":"479a88f8-4b6e-4e2d-b72c-2cd62b3ea118","type":"Range1d"},"y_scale":{"id":"859ea4cb-cccc-4c8b-b5c7-cb14c37a5b96","type":"LinearScale"}},"id":"d402d74a-64a1-4fbb-817a-315cad8c1fc3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9c6db4c0-f62a-4ed0-aefb-2bebdec92382","type":"LinearScale"}],"root_ids":["d402d74a-64a1-4fbb-817a-315cad8c1fc3"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"d60b2b71-c28c-4c84-9a5b-7e7f9f3d10e1","elementid":"2293aa41-31c3-4b4c-94e0-072e446f9a4f","modelid":"d402d74a-64a1-4fbb-817a-315cad8c1fc3"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
