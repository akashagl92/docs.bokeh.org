(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("b53a658c-a295-4707-96c8-e5c474502360");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b53a658c-a295-4707-96c8-e5c474502360' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                "DrawTool": require("custom/bk_script_22384.draw_tool").DrawTool
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_22384.draw_tool": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = function (d, b) {
                  extendStatics = Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                  return extendStatics(d, b);
              };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var gesture_tool_1 = require("models/tools/gestures/gesture_tool");
          var p = require("core/properties");
          var DrawToolView = /** @class */ (function (_super) {
              __extends(DrawToolView, _super);
              function DrawToolView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              //this is executed when the pan/drag event starts
              DrawToolView.prototype._pan_start = function (_ev) {
                  this.model.source.data = { x: [], y: [] };
              };
              //this is executed on subsequent mouse/touch moves
              DrawToolView.prototype._pan = function (ev) {
                  var frame = this.plot_view.frame;
                  var sx = ev.sx, sy = ev.sy;
                  if (!frame.bbox.contains(sx, sy))
                      return;
                  var x = frame.xscales.default.invert(sx);
                  var y = frame.yscales.default.invert(sy);
                  var source = this.model.source;
                  source.get_array("x").push(x);
                  source.get_array("y").push(y);
                  source.change.emit();
              };
              // this is executed then the pan/drag ends
              DrawToolView.prototype._pan_end = function (_ev) { };
              return DrawToolView;
          }(gesture_tool_1.GestureToolView));
          exports.DrawToolView = DrawToolView;
          var DrawTool = /** @class */ (function (_super) {
              __extends(DrawTool, _super);
              function DrawTool(attrs) {
                  var _this = _super.call(this, attrs) || this;
                  _this.tool_name = "Drag Span";
                  _this.icon = "bk-tool-icon-lasso-select";
                  _this.event_type = "pan";
                  _this.default_order = 12;
                  return _this;
              }
              DrawTool.initClass = function () {
                  this.prototype.type = "DrawTool";
                  this.prototype.default_view = DrawToolView;
                  this.define({
                      source: [p.Instance],
                  });
              };
              return DrawTool;
          }(gesture_tool_1.GestureTool));
          exports.DrawTool = DrawTool;
          DrawTool.initClass();
    
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
                    
                  var docs_json = '{"fd67acc1-42f2-46ce-abd8-d63b91725a17":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"22411","type":"Line"},{"attributes":{"formatter":{"id":"22417","type":"BasicTickFormatter"},"ticker":{"id":"22402","type":"BasicTicker"}},"id":"22401","type":"LinearAxis"},{"attributes":{},"id":"22402","type":"BasicTicker"},{"attributes":{},"id":"22417","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"22410","type":"Line"},{"attributes":{"formatter":{"id":"22419","type":"BasicTickFormatter"},"ticker":{"id":"22397","type":"BasicTicker"}},"id":"22396","type":"LinearAxis"},{"attributes":{"below":[{"id":"22396","type":"LinearAxis"}],"center":[{"id":"22400","type":"Grid"},{"id":"22405","type":"Grid"}],"left":[{"id":"22401","type":"LinearAxis"}],"renderers":[{"id":"22412","type":"GlyphRenderer"}],"title":{"id":"22408","type":"Title"},"toolbar":{"id":"22406","type":"Toolbar"},"x_range":{"id":"22388","type":"Range1d"},"x_scale":{"id":"22392","type":"LinearScale"},"y_range":{"id":"22390","type":"Range1d"},"y_scale":{"id":"22394","type":"LinearScale"}},"id":"22387","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"22385","type":"ColumnDataSource"}},"id":"22413","type":"CDSView"},{"attributes":{"data_source":{"id":"22385","type":"ColumnDataSource"},"glyph":{"id":"22410","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22411","type":"Line"},"selection_glyph":null,"view":{"id":"22413","type":"CDSView"}},"id":"22412","type":"GlyphRenderer"},{"attributes":{},"id":"22397","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"22388","type":"Range1d"},{"attributes":{},"id":"22419","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"22390","type":"Range1d"},{"attributes":{"source":{"id":"22385","type":"ColumnDataSource"}},"id":"22386","type":"DrawTool"},{"attributes":{"dimension":1,"ticker":{"id":"22402","type":"BasicTicker"}},"id":"22405","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"22421","type":"Selection"},"selection_policy":{"id":"22420","type":"UnionRenderers"}},"id":"22385","type":"ColumnDataSource"},{"attributes":{},"id":"22421","type":"Selection"},{"attributes":{"text":"Drag to draw on the plot"},"id":"22408","type":"Title"},{"attributes":{"ticker":{"id":"22397","type":"BasicTicker"}},"id":"22400","type":"Grid"},{"attributes":{},"id":"22392","type":"LinearScale"},{"attributes":{},"id":"22394","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22386","type":"DrawTool"}]},"id":"22406","type":"Toolbar"},{"attributes":{},"id":"22420","type":"UnionRenderers"}],"root_ids":["22387"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"fd67acc1-42f2-46ce-abd8-d63b91725a17","roots":{"22387":"b53a658c-a295-4707-96c8-e5c474502360"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();