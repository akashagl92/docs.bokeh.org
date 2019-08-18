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
      };var element = document.getElementById("a333f17a-cb1f-4df2-9a50-75c4a3abf1e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a333f17a-cb1f-4df2-9a50-75c4a3abf1e3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                "DrawTool": require("custom/bk_script_4208.draw_tool").DrawTool
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_4208.draw_tool": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = function (d, b) {
                  extendStatics = Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                  return extendStatics(d, b);
              }
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
          }).call(this);
    
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
                    
                  var docs_json = '{"46831718-378e-481f-9054-3b1bee3b54f4":{"roots":{"references":[{"attributes":{"source":{"id":"4209","type":"ColumnDataSource"}},"id":"4237","type":"CDSView"},{"attributes":{},"id":"4216","type":"LinearScale"},{"attributes":{},"id":"4221","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4235","type":"Line"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"4232","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4210","type":"DrawTool"}]},"id":"4230","type":"Toolbar"},{"attributes":{"below":[{"id":"4220","type":"LinearAxis"}],"left":[{"id":"4225","type":"LinearAxis"}],"renderers":[{"id":"4220","type":"LinearAxis"},{"id":"4224","type":"Grid"},{"id":"4225","type":"LinearAxis"},{"id":"4229","type":"Grid"},{"id":"4236","type":"GlyphRenderer"}],"title":{"id":"4232","type":"Title"},"toolbar":{"id":"4230","type":"Toolbar"},"x_range":{"id":"4212","type":"Range1d"},"x_scale":{"id":"4216","type":"LinearScale"},"y_range":{"id":"4214","type":"Range1d"},"y_scale":{"id":"4218","type":"LinearScale"}},"id":"4211","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"4211","subtype":"Figure","type":"Plot"},"ticker":{"id":"4226","type":"BasicTicker"}},"id":"4229","type":"Grid"},{"attributes":{"source":{"id":"4209","type":"ColumnDataSource"}},"id":"4210","type":"DrawTool"},{"attributes":{},"id":"4245","type":"UnionRenderers"},{"attributes":{"plot":{"id":"4211","subtype":"Figure","type":"Plot"},"ticker":{"id":"4221","type":"BasicTicker"}},"id":"4224","type":"Grid"},{"attributes":{},"id":"4241","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"4214","type":"Range1d"},{"attributes":{"formatter":{"id":"4241","type":"BasicTickFormatter"},"plot":{"id":"4211","subtype":"Figure","type":"Plot"},"ticker":{"id":"4221","type":"BasicTicker"}},"id":"4220","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4209","type":"ColumnDataSource"},"glyph":{"id":"4234","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4235","type":"Line"},"selection_glyph":null,"view":{"id":"4237","type":"CDSView"}},"id":"4236","type":"GlyphRenderer"},{"attributes":{},"id":"4243","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"4244","type":"Selection"},"selection_policy":{"id":"4245","type":"UnionRenderers"}},"id":"4209","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4234","type":"Line"},{"attributes":{},"id":"4226","type":"BasicTicker"},{"attributes":{},"id":"4244","type":"Selection"},{"attributes":{"formatter":{"id":"4243","type":"BasicTickFormatter"},"plot":{"id":"4211","subtype":"Figure","type":"Plot"},"ticker":{"id":"4226","type":"BasicTicker"}},"id":"4225","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"4212","type":"Range1d"},{"attributes":{},"id":"4218","type":"LinearScale"}],"root_ids":["4211"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"46831718-378e-481f-9054-3b1bee3b54f4","roots":{"4211":"a333f17a-cb1f-4df2-9a50-75c4a3abf1e3"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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