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
      };var element = document.getElementById("42c4ce3c-6618-4fb4-990e-daa2b7010d93");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '42c4ce3c-6618-4fb4-990e-daa2b7010d93' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_c4466613b6804e8c80acd382cb6db136.latex_label").LatexLabel,
          "DrawTool": require("custom/bk_script_e598591ca0634860a8e2f26a9f166b66.draw_tool").DrawTool,
          "MyFormatter": require("custom/bk_script_f16d8cf4697145d1b69db1e37b657e4a.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_c4466613b6804e8c80acd382cb6db136.latex_label": function(require, module, exports) {
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
          "custom/bk_script_e598591ca0634860a8e2f26a9f166b66.draw_tool": function(require, module, exports) {
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
          
          },
          "custom/bk_script_f16d8cf4697145d1b69db1e37b657e4a.my_formatter": function(require, module, exports) {
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
                    var docs_json = {"edda0456-13bc-4195-bc1c-6f485ad3c279":{"roots":{"references":[{"attributes":{},"id":"8888a350-22fa-42c7-a488-8d7f63aac03c","type":"LinearScale"},{"attributes":{"formatter":{"id":"d002aea4-7b83-4aaa-b7b3-b117a64b6ec8","type":"BasicTickFormatter"},"plot":{"id":"dbef230b-128c-4dde-bc88-6adba32d1bda","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d9ee974-3b57-4d4e-9bc0-39b32548dc7b","type":"BasicTicker"}},"id":"04842804-e4b8-450c-b486-991b28687551","type":"LinearAxis"},{"attributes":{"plot":{"id":"dbef230b-128c-4dde-bc88-6adba32d1bda","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d9ee974-3b57-4d4e-9bc0-39b32548dc7b","type":"BasicTicker"}},"id":"a8909cd3-72c2-4ee1-8fb8-63c734adaffe","type":"Grid"},{"attributes":{},"id":"9d9ee974-3b57-4d4e-9bc0-39b32548dc7b","type":"BasicTicker"},{"attributes":{},"id":"261dbbec-da7a-4da3-863f-dc960946e3f2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"185c2a7d-9080-4896-b89b-cb0f63ea1c06","type":"BasicTickFormatter"},"plot":{"id":"dbef230b-128c-4dde-bc88-6adba32d1bda","subtype":"Figure","type":"Plot"},"ticker":{"id":"261dbbec-da7a-4da3-863f-dc960946e3f2","type":"BasicTicker"}},"id":"3548fc3b-b4a6-4020-953e-6508420f6df8","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"dbef230b-128c-4dde-bc88-6adba32d1bda","subtype":"Figure","type":"Plot"},"ticker":{"id":"261dbbec-da7a-4da3-863f-dc960946e3f2","type":"BasicTicker"}},"id":"5b492121-6521-4f56-aded-8aa8b937f223","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a365b657-ff71-4a15-9fca-42a8e2482876","type":"Line"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2fa35226-f931-45d4-840a-f1d64d55cc7e","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"7d7ce5e9-2a12-4b8e-b72b-2b9e6efff231","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7d7ce5e9-2a12-4b8e-b72b-2b9e6efff231","type":"ColumnDataSource"},"glyph":{"id":"2fa35226-f931-45d4-840a-f1d64d55cc7e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a365b657-ff71-4a15-9fca-42a8e2482876","type":"Line"},"selection_glyph":null,"view":{"id":"e7329569-9705-4843-88ae-02ea9d72dc0f","type":"CDSView"}},"id":"711e2cdf-2993-40b1-8cfa-1e3f23ba1237","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ce3b8ce5-7e6e-455d-a033-e7cbd6f15053","type":"DrawTool"}]},"id":"c1109e17-7e58-4689-ac96-ec9f2239eeb0","type":"Toolbar"},{"attributes":{"source":{"id":"7d7ce5e9-2a12-4b8e-b72b-2b9e6efff231","type":"ColumnDataSource"}},"id":"ce3b8ce5-7e6e-455d-a033-e7cbd6f15053","type":"DrawTool"},{"attributes":{"source":{"id":"7d7ce5e9-2a12-4b8e-b72b-2b9e6efff231","type":"ColumnDataSource"}},"id":"e7329569-9705-4843-88ae-02ea9d72dc0f","type":"CDSView"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"c91a0489-6c6b-426c-838a-761920a0b9d2","type":"Title"},{"attributes":{},"id":"185c2a7d-9080-4896-b89b-cb0f63ea1c06","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"7a802fd5-30ec-4cc7-a499-234d0a78055e","type":"Range1d"},{"attributes":{"callback":null,"end":10},"id":"825e7d71-34d9-4983-bea9-6292d97289b1","type":"Range1d"},{"attributes":{},"id":"d002aea4-7b83-4aaa-b7b3-b117a64b6ec8","type":"BasicTickFormatter"},{"attributes":{},"id":"a42ad6b2-1a86-4e59-b5bd-48bfe9b3d284","type":"LinearScale"},{"attributes":{"below":[{"id":"04842804-e4b8-450c-b486-991b28687551","type":"LinearAxis"}],"left":[{"id":"3548fc3b-b4a6-4020-953e-6508420f6df8","type":"LinearAxis"}],"renderers":[{"id":"04842804-e4b8-450c-b486-991b28687551","type":"LinearAxis"},{"id":"a8909cd3-72c2-4ee1-8fb8-63c734adaffe","type":"Grid"},{"id":"3548fc3b-b4a6-4020-953e-6508420f6df8","type":"LinearAxis"},{"id":"5b492121-6521-4f56-aded-8aa8b937f223","type":"Grid"},{"id":"711e2cdf-2993-40b1-8cfa-1e3f23ba1237","type":"GlyphRenderer"}],"title":{"id":"c91a0489-6c6b-426c-838a-761920a0b9d2","type":"Title"},"toolbar":{"id":"c1109e17-7e58-4689-ac96-ec9f2239eeb0","type":"Toolbar"},"x_range":{"id":"7a802fd5-30ec-4cc7-a499-234d0a78055e","type":"Range1d"},"x_scale":{"id":"8888a350-22fa-42c7-a488-8d7f63aac03c","type":"LinearScale"},"y_range":{"id":"825e7d71-34d9-4983-bea9-6292d97289b1","type":"Range1d"},"y_scale":{"id":"a42ad6b2-1a86-4e59-b5bd-48bfe9b3d284","type":"LinearScale"}},"id":"dbef230b-128c-4dde-bc88-6adba32d1bda","subtype":"Figure","type":"Plot"}],"root_ids":["dbef230b-128c-4dde-bc88-6adba32d1bda"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"edda0456-13bc-4195-bc1c-6f485ad3c279","elementid":"42c4ce3c-6618-4fb4-990e-daa2b7010d93","modelid":"dbef230b-128c-4dde-bc88-6adba32d1bda"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
