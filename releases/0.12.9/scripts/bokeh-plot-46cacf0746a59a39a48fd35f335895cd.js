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
      };var element = document.getElementById("9513e34c-3314-44f7-97fe-5f7bace7611b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9513e34c-3314-44f7-97fe-5f7bace7611b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_11478284eb724428bba954de02afc94b.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_76ef57ddb4ce4fa68bca809ff88ac460.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_97c48886a5b64d14b10025dcf15f0199.draw_tool").DrawTool
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_11478284eb724428bba954de02afc94b.latex_label": function(require, module, exports) {
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
          
          },
          "custom/bk_script_76ef57ddb4ce4fa68bca809ff88ac460.my_formatter": function(require, module, exports) {
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
          
          },
          "custom/bk_script_97c48886a5b64d14b10025dcf15f0199.draw_tool": function(require, module, exports) {
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
                    var docs_json = {"822f35a4-2f42-474f-b5a5-e6e787c6c53e":{"roots":{"references":[{"attributes":{},"id":"40bd39a0-c8c6-455f-958a-6cea132aa7ab","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"0c3342cc-60f4-4004-adcb-b958b6e173b7","type":"Range1d"},{"attributes":{"plot":{"id":"4bef499c-9209-4846-ac40-bfa5dfa0f32d","subtype":"Figure","type":"Plot"},"ticker":{"id":"461d74e1-c4a6-42e7-83df-6f6f02719a72","type":"BasicTicker"}},"id":"6d869865-8b2f-4662-811c-1999a63dd853","type":"Grid"},{"attributes":{},"id":"18178ffb-4ba1-4e55-becb-e6a44195c06a","type":"BasicTicker"},{"attributes":{"source":{"id":"941c8d3f-2538-4adb-8880-c2643b246e0b","type":"ColumnDataSource"}},"id":"e99d1ec8-f8fd-4e4d-a5da-632d0c72a13e","type":"DrawTool"},{"attributes":{"dimension":1,"plot":{"id":"4bef499c-9209-4846-ac40-bfa5dfa0f32d","subtype":"Figure","type":"Plot"},"ticker":{"id":"18178ffb-4ba1-4e55-becb-e6a44195c06a","type":"BasicTicker"}},"id":"8a3c81e6-7c76-4ff8-95eb-cc3277487c22","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"ccfad59d-7fe9-43a9-b81e-776a8e491669","type":"Range1d"},{"attributes":{"below":[{"id":"ab1d86b3-446f-4d0c-85ca-99a0d94043ff","type":"LinearAxis"}],"left":[{"id":"58ad8ef8-8998-4097-b961-d5e30e7cf060","type":"LinearAxis"}],"renderers":[{"id":"ab1d86b3-446f-4d0c-85ca-99a0d94043ff","type":"LinearAxis"},{"id":"6d869865-8b2f-4662-811c-1999a63dd853","type":"Grid"},{"id":"58ad8ef8-8998-4097-b961-d5e30e7cf060","type":"LinearAxis"},{"id":"8a3c81e6-7c76-4ff8-95eb-cc3277487c22","type":"Grid"},{"id":"89457eda-7c53-4e4f-9892-e61a8b23f5e5","type":"GlyphRenderer"}],"title":{"id":"7af5a6d1-7a9f-45dd-a289-b33a6a8180cc","type":"Title"},"toolbar":{"id":"74d7be3d-90e1-4a72-a54c-0f343393c145","type":"Toolbar"},"x_range":{"id":"0c3342cc-60f4-4004-adcb-b958b6e173b7","type":"Range1d"},"x_scale":{"id":"6a5798ee-0950-4354-ae0e-1190fa62f178","type":"LinearScale"},"y_range":{"id":"ccfad59d-7fe9-43a9-b81e-776a8e491669","type":"Range1d"},"y_scale":{"id":"4f2ae7a9-f502-42ed-abe9-1a5b731d9f4e","type":"LinearScale"}},"id":"4bef499c-9209-4846-ac40-bfa5dfa0f32d","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"941c8d3f-2538-4adb-8880-c2643b246e0b","type":"ColumnDataSource"}},"id":"41bffdbc-8ad3-40de-8d47-6a20f6588938","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"074d4fa3-7f78-49be-ac8b-40d339360925","type":"Line"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d9da07a-8268-4cbb-b700-2cff5b38173c","type":"Line"},{"attributes":{"formatter":{"id":"40bd39a0-c8c6-455f-958a-6cea132aa7ab","type":"BasicTickFormatter"},"plot":{"id":"4bef499c-9209-4846-ac40-bfa5dfa0f32d","subtype":"Figure","type":"Plot"},"ticker":{"id":"18178ffb-4ba1-4e55-becb-e6a44195c06a","type":"BasicTicker"}},"id":"58ad8ef8-8998-4097-b961-d5e30e7cf060","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"941c8d3f-2538-4adb-8880-c2643b246e0b","type":"ColumnDataSource"},{"attributes":{},"id":"7073d40f-4f36-4237-a2f8-a66c18b765af","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7073d40f-4f36-4237-a2f8-a66c18b765af","type":"BasicTickFormatter"},"plot":{"id":"4bef499c-9209-4846-ac40-bfa5dfa0f32d","subtype":"Figure","type":"Plot"},"ticker":{"id":"461d74e1-c4a6-42e7-83df-6f6f02719a72","type":"BasicTicker"}},"id":"ab1d86b3-446f-4d0c-85ca-99a0d94043ff","type":"LinearAxis"},{"attributes":{"data_source":{"id":"941c8d3f-2538-4adb-8880-c2643b246e0b","type":"ColumnDataSource"},"glyph":{"id":"8d9da07a-8268-4cbb-b700-2cff5b38173c","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"074d4fa3-7f78-49be-ac8b-40d339360925","type":"Line"},"selection_glyph":null,"view":{"id":"41bffdbc-8ad3-40de-8d47-6a20f6588938","type":"CDSView"}},"id":"89457eda-7c53-4e4f-9892-e61a8b23f5e5","type":"GlyphRenderer"},{"attributes":{},"id":"6a5798ee-0950-4354-ae0e-1190fa62f178","type":"LinearScale"},{"attributes":{},"id":"461d74e1-c4a6-42e7-83df-6f6f02719a72","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"7af5a6d1-7a9f-45dd-a289-b33a6a8180cc","type":"Title"},{"attributes":{},"id":"4f2ae7a9-f502-42ed-abe9-1a5b731d9f4e","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e99d1ec8-f8fd-4e4d-a5da-632d0c72a13e","type":"DrawTool"}]},"id":"74d7be3d-90e1-4a72-a54c-0f343393c145","type":"Toolbar"}],"root_ids":["4bef499c-9209-4846-ac40-bfa5dfa0f32d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"822f35a4-2f42-474f-b5a5-e6e787c6c53e","elementid":"9513e34c-3314-44f7-97fe-5f7bace7611b","modelid":"4bef499c-9209-4846-ac40-bfa5dfa0f32d"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
