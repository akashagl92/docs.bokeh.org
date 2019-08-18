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
      };var element = document.getElementById("0434e24d-115a-4ada-804b-c9ffd59b5716");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0434e24d-115a-4ada-804b-c9ffd59b5716' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_26f6dd484502424a881740ee1be59335.latex_label").LatexLabel,
          "DrawTool": require("custom/bk_script_9e49516371c7404f8b77bb991a15be92.draw_tool").DrawTool,
          "MyFormatter": require("custom/bk_script_de26e856a48249298da290cdcc957f48.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_26f6dd484502424a881740ee1be59335.latex_label": function(require, module, exports) {
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
          "custom/bk_script_9e49516371c7404f8b77bb991a15be92.draw_tool": function(require, module, exports) {
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
          "custom/bk_script_de26e856a48249298da290cdcc957f48.my_formatter": function(require, module, exports) {
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
                var docs_json = {"e0657bd9-cf04-443c-8a01-933662987f31":{"roots":{"references":[{"attributes":{},"id":"2a6300e9-573a-4ceb-9700-0bd7fb82081b","type":"LinearScale"},{"attributes":{"below":[{"id":"ec3e3661-1fab-459f-b1c8-2a623a652058","type":"LinearAxis"}],"left":[{"id":"65c8f5cd-c75d-4c74-8d83-d6cd706fa266","type":"LinearAxis"}],"renderers":[{"id":"ec3e3661-1fab-459f-b1c8-2a623a652058","type":"LinearAxis"},{"id":"9d592d9d-67a4-4f1e-ba9d-f700f323f5ee","type":"Grid"},{"id":"65c8f5cd-c75d-4c74-8d83-d6cd706fa266","type":"LinearAxis"},{"id":"736ab83e-d836-4008-8d2e-c058f51387ac","type":"Grid"},{"id":"27d89a96-7117-4881-a186-e0297f746b3d","type":"GlyphRenderer"}],"title":{"id":"17bb77a3-47a1-47b6-b12b-18907a1c738f","type":"Title"},"toolbar":{"id":"93fb8dc5-1af1-4222-8c3c-1feafce27e92","type":"Toolbar"},"x_range":{"id":"e5bbc1a4-5c42-4162-838f-589b5a236a76","type":"Range1d"},"x_scale":{"id":"2a6300e9-573a-4ceb-9700-0bd7fb82081b","type":"LinearScale"},"y_range":{"id":"470b0655-51b4-4803-8f02-24927834605e","type":"Range1d"},"y_scale":{"id":"e408139b-aa2c-47be-8d73-bcd5b6c6502e","type":"LinearScale"}},"id":"0c5d5a73-6241-4ac8-9e1e-23f6c4473425","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f3747065-8426-4047-8f3b-e76046d67c9b","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"79bc34b1-8bb5-4094-87c3-61f7c8dc2f05","type":"Line"},{"attributes":{"data_source":{"id":"415467a8-7647-42b2-bfcc-e22b211dbc1e","type":"ColumnDataSource"},"glyph":{"id":"857599a9-6b9d-4438-b3e8-b0c36724c728","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79bc34b1-8bb5-4094-87c3-61f7c8dc2f05","type":"Line"},"selection_glyph":null,"view":{"id":"a23fed26-5319-4b9f-bed2-ed114fb13986","type":"CDSView"}},"id":"27d89a96-7117-4881-a186-e0297f746b3d","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"e5bbc1a4-5c42-4162-838f-589b5a236a76","type":"Range1d"},{"attributes":{},"id":"eae41d76-161b-4b69-9c41-3046c5954d9d","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"470b0655-51b4-4803-8f02-24927834605e","type":"Range1d"},{"attributes":{"formatter":{"id":"24e211f3-3c5b-4589-9fbf-e6ba460b09b8","type":"BasicTickFormatter"},"plot":{"id":"0c5d5a73-6241-4ac8-9e1e-23f6c4473425","subtype":"Figure","type":"Plot"},"ticker":{"id":"87e23708-ee30-44f4-bf21-96a0c78fb93d","type":"BasicTicker"}},"id":"65c8f5cd-c75d-4c74-8d83-d6cd706fa266","type":"LinearAxis"},{"attributes":{"source":{"id":"415467a8-7647-42b2-bfcc-e22b211dbc1e","type":"ColumnDataSource"}},"id":"6024bdef-82e1-4e9b-b53e-b4e3008e13f9","type":"DrawTool"},{"attributes":{},"id":"87e23708-ee30-44f4-bf21-96a0c78fb93d","type":"BasicTicker"},{"attributes":{"source":{"id":"415467a8-7647-42b2-bfcc-e22b211dbc1e","type":"ColumnDataSource"}},"id":"a23fed26-5319-4b9f-bed2-ed114fb13986","type":"CDSView"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"17bb77a3-47a1-47b6-b12b-18907a1c738f","type":"Title"},{"attributes":{},"id":"e408139b-aa2c-47be-8d73-bcd5b6c6502e","type":"LinearScale"},{"attributes":{"plot":{"id":"0c5d5a73-6241-4ac8-9e1e-23f6c4473425","subtype":"Figure","type":"Plot"},"ticker":{"id":"eae41d76-161b-4b69-9c41-3046c5954d9d","type":"BasicTicker"}},"id":"9d592d9d-67a4-4f1e-ba9d-f700f323f5ee","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"857599a9-6b9d-4438-b3e8-b0c36724c728","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"415467a8-7647-42b2-bfcc-e22b211dbc1e","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"0c5d5a73-6241-4ac8-9e1e-23f6c4473425","subtype":"Figure","type":"Plot"},"ticker":{"id":"87e23708-ee30-44f4-bf21-96a0c78fb93d","type":"BasicTicker"}},"id":"736ab83e-d836-4008-8d2e-c058f51387ac","type":"Grid"},{"attributes":{"formatter":{"id":"f3747065-8426-4047-8f3b-e76046d67c9b","type":"BasicTickFormatter"},"plot":{"id":"0c5d5a73-6241-4ac8-9e1e-23f6c4473425","subtype":"Figure","type":"Plot"},"ticker":{"id":"eae41d76-161b-4b69-9c41-3046c5954d9d","type":"BasicTicker"}},"id":"ec3e3661-1fab-459f-b1c8-2a623a652058","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6024bdef-82e1-4e9b-b53e-b4e3008e13f9","type":"DrawTool"}]},"id":"93fb8dc5-1af1-4222-8c3c-1feafce27e92","type":"Toolbar"},{"attributes":{},"id":"24e211f3-3c5b-4589-9fbf-e6ba460b09b8","type":"BasicTickFormatter"}],"root_ids":["0c5d5a73-6241-4ac8-9e1e-23f6c4473425"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e0657bd9-cf04-443c-8a01-933662987f31","elementid":"0434e24d-115a-4ada-804b-c9ffd59b5716","modelid":"0c5d5a73-6241-4ac8-9e1e-23f6c4473425"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
