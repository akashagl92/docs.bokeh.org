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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("83380543-a5a6-46ae-b347-abe9349897f6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '83380543-a5a6-46ae-b347-abe9349897f6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"];
    
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
                  "MyFormatter": require("custom/bk_script_55de304bebc64c51982a4e30d8f65a70.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_914197e1aa2549baa58fe366b3208852.draw_tool").DrawTool,
          "LatexLabel": require("custom/bk_script_a14de02787a54585be895bc685587404.latex_label").LatexLabel
                }
              };
            }, {}],
            "custom/bk_script_55de304bebc64c51982a4e30d8f65a70.my_formatter": [function(require, module, exports) {
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
          "custom/bk_script_914197e1aa2549baa58fe366b3208852.draw_tool": [function(require, module, exports) {
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
                  x = frame.x_mappers['default'].map_from_target(vx);
                  y = frame.y_mappers['default'].map_from_target(vy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.trigger('change');
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
          "custom/bk_script_a14de02787a54585be895bc685587404.latex_label": [function(require, module, exports) {
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
                      vx = this.xmapper.map_to_target(this.model.x);
                  }
                  else {
                      vx = this.model.x;
                  }
                  sx = this.canvas.vx_to_sx(vx);
                  if (this.model.y_units === "data") {
                      vy = this.ymapper.map_to_target(this.model.y);
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
                var docs_json = {"c0f80cf6-c930-431b-8bbe-77914dab04e3":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"506bf3ad-6c10-4f16-bcbb-65cfa7f8d25e","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"40f501d1-6799-45e0-b610-2031b489ab70","type":"Line"},{"attributes":{"callback":null,"end":10},"id":"bcdd236c-879c-435a-bea9-96f30cf8ad54","type":"Range1d"},{"attributes":{},"id":"bdac312c-54a1-4852-a843-1a4ab7c90d27","type":"BasicTicker"},{"attributes":{"formatter":{"id":"66f2f0de-ea9c-406a-be08-c03b259c1efa","type":"BasicTickFormatter"},"plot":{"id":"0c577cd9-a8f3-4389-aab8-94e6adfdd5ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"bdac312c-54a1-4852-a843-1a4ab7c90d27","type":"BasicTicker"}},"id":"c7019056-7bd3-4cfa-a1cb-897c9a723a8e","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"0c577cd9-a8f3-4389-aab8-94e6adfdd5ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"bdac312c-54a1-4852-a843-1a4ab7c90d27","type":"BasicTicker"}},"id":"25dd4c49-d041-4abe-a90d-0174e6e0bfe1","type":"Grid"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"d1cae487-ef20-4608-8c87-dee21ab6a54a","type":"Title"},{"attributes":{"formatter":{"id":"b4bb01e2-cd4b-4fd8-95a0-3372fe017336","type":"BasicTickFormatter"},"plot":{"id":"0c577cd9-a8f3-4389-aab8-94e6adfdd5ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"61dc0169-814b-4fd3-a219-01087af87799","type":"BasicTicker"}},"id":"fd12cec1-5c60-4e38-a3b8-0e4486304148","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"70540d2a-a044-4fcc-907b-7dcb988a96a0","type":"Range1d"},{"attributes":{},"id":"ab869483-2a46-49d3-b468-17c60e63958b","type":"ToolEvents"},{"attributes":{"data_source":{"id":"506bf3ad-6c10-4f16-bcbb-65cfa7f8d25e","type":"ColumnDataSource"},"glyph":{"id":"26898607-df3a-4ad2-9db1-7f07011cda21","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40f501d1-6799-45e0-b610-2031b489ab70","type":"Line"},"selection_glyph":null},"id":"e7bac527-1209-4279-9361-f20ddfbc03a6","type":"GlyphRenderer"},{"attributes":{},"id":"66f2f0de-ea9c-406a-be08-c03b259c1efa","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0c577cd9-a8f3-4389-aab8-94e6adfdd5ca","subtype":"Figure","type":"Plot"},"source":{"id":"506bf3ad-6c10-4f16-bcbb-65cfa7f8d25e","type":"ColumnDataSource"}},"id":"888498e4-01e6-42ea-bf49-d2fce18d6859","type":"DrawTool"},{"attributes":{"below":[{"id":"fd12cec1-5c60-4e38-a3b8-0e4486304148","type":"LinearAxis"}],"left":[{"id":"c7019056-7bd3-4cfa-a1cb-897c9a723a8e","type":"LinearAxis"}],"renderers":[{"id":"fd12cec1-5c60-4e38-a3b8-0e4486304148","type":"LinearAxis"},{"id":"c66564c0-1a65-44ea-ba3a-c98e96712782","type":"Grid"},{"id":"c7019056-7bd3-4cfa-a1cb-897c9a723a8e","type":"LinearAxis"},{"id":"25dd4c49-d041-4abe-a90d-0174e6e0bfe1","type":"Grid"},{"id":"e7bac527-1209-4279-9361-f20ddfbc03a6","type":"GlyphRenderer"}],"title":{"id":"d1cae487-ef20-4608-8c87-dee21ab6a54a","type":"Title"},"tool_events":{"id":"ab869483-2a46-49d3-b468-17c60e63958b","type":"ToolEvents"},"toolbar":{"id":"dacb3c27-378f-41bd-8a82-1297f66a39a0","type":"Toolbar"},"x_range":{"id":"bcdd236c-879c-435a-bea9-96f30cf8ad54","type":"Range1d"},"y_range":{"id":"70540d2a-a044-4fcc-907b-7dcb988a96a0","type":"Range1d"}},"id":"0c577cd9-a8f3-4389-aab8-94e6adfdd5ca","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"61dc0169-814b-4fd3-a219-01087af87799","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"888498e4-01e6-42ea-bf49-d2fce18d6859","type":"DrawTool"}]},"id":"dacb3c27-378f-41bd-8a82-1297f66a39a0","type":"Toolbar"},{"attributes":{},"id":"b4bb01e2-cd4b-4fd8-95a0-3372fe017336","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0c577cd9-a8f3-4389-aab8-94e6adfdd5ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"61dc0169-814b-4fd3-a219-01087af87799","type":"BasicTicker"}},"id":"c66564c0-1a65-44ea-ba3a-c98e96712782","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26898607-df3a-4ad2-9db1-7f07011cda21","type":"Line"}],"root_ids":["0c577cd9-a8f3-4389-aab8-94e6adfdd5ca"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"c0f80cf6-c930-431b-8bbe-77914dab04e3","elementid":"83380543-a5a6-46ae-b347-abe9349897f6","modelid":"0c577cd9-a8f3-4389-aab8-94e6adfdd5ca"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
