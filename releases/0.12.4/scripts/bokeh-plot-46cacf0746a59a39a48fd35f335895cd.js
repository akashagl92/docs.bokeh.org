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
      };var element = document.getElementById("64bf8693-9104-4e28-93d1-3d2dd0811686");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '64bf8693-9104-4e28-93d1-3d2dd0811686' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"];
    
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
                  "MyFormatter": require("custom/bk_script_08f8365abd2444bbb7d9c48ca57f0d2d.my_formatter").MyFormatter,
          "LatexLabel": require("custom/bk_script_cdc746781670473d8d27c9a1c06b67f6.latex_label").LatexLabel,
          "DrawTool": require("custom/bk_script_e25b70cdc6dd461b944620285e491896.draw_tool").DrawTool
                }
              };
            }, {}],
            "custom/bk_script_08f8365abd2444bbb7d9c48ca57f0d2d.my_formatter": [function(require, module, exports) {
          "use strict";
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
          "custom/bk_script_cdc746781670473d8d27c9a1c06b67f6.latex_label": [function(require, module, exports) {
          "use strict";
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
                  var angle, ctx, latex, panel_offset, sx, sy, vx, vy;
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
                  latex = katex.renderToString(this.model.text, {
                      displayMode: true
                  });
                  return this._css_text(ctx, latex, sx + this.model.x_offset, sy - this.model.y_offset, angle);
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
          
          }, {}],
          "custom/bk_script_e25b70cdc6dd461b944620285e491896.draw_tool": [function(require, module, exports) {
          "use strict";
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
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"c1e8a129-575d-4ac7-8ccc-1f1ae181cfb0":{"roots":{"references":[{"attributes":{"plot":{"id":"14c2ff24-32d9-41f4-b389-64e1416658d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"82934a8f-7579-4939-b6bf-f3df508642b7","type":"BasicTicker"}},"id":"a87bce03-764f-4d8f-a72b-71a6079726ab","type":"Grid"},{"attributes":{},"id":"ccc039f6-de2f-403f-91d1-eb4dc9397f82","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c6db392-de78-4851-bb81-748b49349b43","type":"Line"},{"attributes":{},"id":"43873875-db52-41a6-8e3b-00d06061cc41","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"0f95f90e-138a-4405-9f35-040564c3c694","type":"Range1d"},{"attributes":{"formatter":{"id":"57f0e7ea-4422-418c-a9ca-71b5c11fd458","type":"BasicTickFormatter"},"plot":{"id":"14c2ff24-32d9-41f4-b389-64e1416658d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"82934a8f-7579-4939-b6bf-f3df508642b7","type":"BasicTicker"}},"id":"cc0ee68c-4a12-4ece-8e19-342c7d30b77b","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"14c2ff24-32d9-41f4-b389-64e1416658d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccc039f6-de2f-403f-91d1-eb4dc9397f82","type":"BasicTicker"}},"id":"93978d68-7169-49ec-bbfa-bb14919eea2a","type":"Grid"},{"attributes":{"formatter":{"id":"43873875-db52-41a6-8e3b-00d06061cc41","type":"BasicTickFormatter"},"plot":{"id":"14c2ff24-32d9-41f4-b389-64e1416658d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccc039f6-de2f-403f-91d1-eb4dc9397f82","type":"BasicTicker"}},"id":"70fdf478-37f1-4ee0-9d58-a8d5f935f912","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"03273b9c-0135-4254-a104-c7a7232e89f7","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e4a31b6c-0d6e-4550-921a-dc09e6034e5d","type":"DrawTool"}]},"id":"22b9c54f-d0d4-407c-ab9c-7f7049712c5f","type":"Toolbar"},{"attributes":{},"id":"b3bfb6bd-ce54-4998-af37-106cabd907b9","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"099cc83f-6c4b-45f6-8783-0950f007db99","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"cef3e39f-b754-40a2-a32e-420a34a03c89","type":"ColumnDataSource"},{"attributes":{},"id":"57f0e7ea-4422-418c-a9ca-71b5c11fd458","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"06ce6c25-8e87-4871-acc4-4031043f30bd","type":"Line"},{"attributes":{"below":[{"id":"cc0ee68c-4a12-4ece-8e19-342c7d30b77b","type":"LinearAxis"}],"left":[{"id":"70fdf478-37f1-4ee0-9d58-a8d5f935f912","type":"LinearAxis"}],"renderers":[{"id":"cc0ee68c-4a12-4ece-8e19-342c7d30b77b","type":"LinearAxis"},{"id":"a87bce03-764f-4d8f-a72b-71a6079726ab","type":"Grid"},{"id":"70fdf478-37f1-4ee0-9d58-a8d5f935f912","type":"LinearAxis"},{"id":"93978d68-7169-49ec-bbfa-bb14919eea2a","type":"Grid"},{"id":"7d5a8e57-bbca-4ef3-aa9e-12164ac0d441","type":"GlyphRenderer"}],"title":{"id":"099cc83f-6c4b-45f6-8783-0950f007db99","type":"Title"},"tool_events":{"id":"b3bfb6bd-ce54-4998-af37-106cabd907b9","type":"ToolEvents"},"toolbar":{"id":"22b9c54f-d0d4-407c-ab9c-7f7049712c5f","type":"Toolbar"},"x_range":{"id":"03273b9c-0135-4254-a104-c7a7232e89f7","type":"Range1d"},"y_range":{"id":"0f95f90e-138a-4405-9f35-040564c3c694","type":"Range1d"}},"id":"14c2ff24-32d9-41f4-b389-64e1416658d6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"82934a8f-7579-4939-b6bf-f3df508642b7","type":"BasicTicker"},{"attributes":{"plot":{"id":"14c2ff24-32d9-41f4-b389-64e1416658d6","subtype":"Figure","type":"Plot"},"source":{"id":"cef3e39f-b754-40a2-a32e-420a34a03c89","type":"ColumnDataSource"}},"id":"e4a31b6c-0d6e-4550-921a-dc09e6034e5d","type":"DrawTool"},{"attributes":{"data_source":{"id":"cef3e39f-b754-40a2-a32e-420a34a03c89","type":"ColumnDataSource"},"glyph":{"id":"0c6db392-de78-4851-bb81-748b49349b43","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"06ce6c25-8e87-4871-acc4-4031043f30bd","type":"Line"},"selection_glyph":null},"id":"7d5a8e57-bbca-4ef3-aa9e-12164ac0d441","type":"GlyphRenderer"}],"root_ids":["14c2ff24-32d9-41f4-b389-64e1416658d6"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"c1e8a129-575d-4ac7-8ccc-1f1ae181cfb0","elementid":"64bf8693-9104-4e28-93d1-3d2dd0811686","modelid":"14c2ff24-32d9-41f4-b389-64e1416658d6"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
