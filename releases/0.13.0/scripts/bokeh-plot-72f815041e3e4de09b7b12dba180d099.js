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
      };var element = document.getElementById("c21f5760-8c55-4524-a1ee-1e6843fd37da");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c21f5760-8c55-4524-a1ee-1e6843fd37da' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                "DrawTool": require("custom/bk_script_575a86d4e0f549428fb1b0bc8df6b943.draw_tool").DrawTool
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_575a86d4e0f549428fb1b0bc8df6b943.draw_tool": function(require, module, exports) {
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
                    
                  var docs_json = '{"5c193fcc-07cd-418c-b247-72ac6f1d81de":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"68d0cc45-7fc9-4e75-bd5b-7af0ee98d462","subtype":"Figure","type":"Plot"},"ticker":{"id":"dff14c6c-6cd6-4553-8563-9e9a0824b7ec","type":"BasicTicker"}},"id":"9891eeb0-424e-413a-87d9-8e5acd4786d9","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"8a98aba4-d6ca-492c-af65-8063d52be893","type":"Line"},{"attributes":{"below":[{"id":"7d4cdde6-972f-46b5-96b1-1f392749fe29","type":"LinearAxis"}],"left":[{"id":"59990845-8438-4e6f-81ed-a844b41876fe","type":"LinearAxis"}],"renderers":[{"id":"7d4cdde6-972f-46b5-96b1-1f392749fe29","type":"LinearAxis"},{"id":"cd409b2a-47e4-41a7-bbe2-048a0bb4df0b","type":"Grid"},{"id":"59990845-8438-4e6f-81ed-a844b41876fe","type":"LinearAxis"},{"id":"9891eeb0-424e-413a-87d9-8e5acd4786d9","type":"Grid"},{"id":"3692ffa3-1c30-47c4-8042-f78f304340b0","type":"GlyphRenderer"}],"title":{"id":"40ec6fa3-b360-42b8-bf0f-76c6133015e1","type":"Title"},"toolbar":{"id":"0a85cf0a-936c-4360-b30c-037d23a7cd10","type":"Toolbar"},"x_range":{"id":"5bf4bead-1409-43cf-b2c6-9f2c91acbe93","type":"Range1d"},"x_scale":{"id":"993220ab-fbb5-4daf-b7cc-0cecc1d123c4","type":"LinearScale"},"y_range":{"id":"249009ad-5808-4fd8-a3e9-9889c57128e1","type":"Range1d"},"y_scale":{"id":"27f007d0-56a4-4eb7-b441-adbd4fc8ed91","type":"LinearScale"}},"id":"68d0cc45-7fc9-4e75-bd5b-7af0ee98d462","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"b070bb60-e94f-4b4a-a141-baf2bb66369c","type":"Selection"},"selection_policy":{"id":"ec4a72d8-e412-4893-ad30-c00faac28991","type":"UnionRenderers"}},"id":"85658691-3656-42f7-a9d4-0d947c14f4d1","type":"ColumnDataSource"},{"attributes":{},"id":"fc696dca-605b-43a6-9adc-e4e76882bd52","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9722be96-cb98-48c7-b2ce-3a1ad922a4ee","type":"BasicTickFormatter"},"plot":{"id":"68d0cc45-7fc9-4e75-bd5b-7af0ee98d462","subtype":"Figure","type":"Plot"},"ticker":{"id":"dff14c6c-6cd6-4553-8563-9e9a0824b7ec","type":"BasicTicker"}},"id":"59990845-8438-4e6f-81ed-a844b41876fe","type":"LinearAxis"},{"attributes":{},"id":"27f007d0-56a4-4eb7-b441-adbd4fc8ed91","type":"LinearScale"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"40ec6fa3-b360-42b8-bf0f-76c6133015e1","type":"Title"},{"attributes":{"formatter":{"id":"ffbfd792-5b6b-4298-8bc7-140a2f720ad1","type":"BasicTickFormatter"},"plot":{"id":"68d0cc45-7fc9-4e75-bd5b-7af0ee98d462","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc696dca-605b-43a6-9adc-e4e76882bd52","type":"BasicTicker"}},"id":"7d4cdde6-972f-46b5-96b1-1f392749fe29","type":"LinearAxis"},{"attributes":{"source":{"id":"85658691-3656-42f7-a9d4-0d947c14f4d1","type":"ColumnDataSource"}},"id":"5ac8b3f2-34bb-40db-a287-8376e708c23d","type":"DrawTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"ee22f83f-83be-4a7d-8d9c-c052867ea1cd","type":"Line"},{"attributes":{},"id":"993220ab-fbb5-4daf-b7cc-0cecc1d123c4","type":"LinearScale"},{"attributes":{"data_source":{"id":"85658691-3656-42f7-a9d4-0d947c14f4d1","type":"ColumnDataSource"},"glyph":{"id":"ee22f83f-83be-4a7d-8d9c-c052867ea1cd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8a98aba4-d6ca-492c-af65-8063d52be893","type":"Line"},"selection_glyph":null,"view":{"id":"6a2bf236-bb95-46ff-b942-34e68513e1d9","type":"CDSView"}},"id":"3692ffa3-1c30-47c4-8042-f78f304340b0","type":"GlyphRenderer"},{"attributes":{},"id":"9722be96-cb98-48c7-b2ce-3a1ad922a4ee","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"5bf4bead-1409-43cf-b2c6-9f2c91acbe93","type":"Range1d"},{"attributes":{},"id":"b070bb60-e94f-4b4a-a141-baf2bb66369c","type":"Selection"},{"attributes":{},"id":"dff14c6c-6cd6-4553-8563-9e9a0824b7ec","type":"BasicTicker"},{"attributes":{},"id":"ffbfd792-5b6b-4298-8bc7-140a2f720ad1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"249009ad-5808-4fd8-a3e9-9889c57128e1","type":"Range1d"},{"attributes":{"source":{"id":"85658691-3656-42f7-a9d4-0d947c14f4d1","type":"ColumnDataSource"}},"id":"6a2bf236-bb95-46ff-b942-34e68513e1d9","type":"CDSView"},{"attributes":{"plot":{"id":"68d0cc45-7fc9-4e75-bd5b-7af0ee98d462","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc696dca-605b-43a6-9adc-e4e76882bd52","type":"BasicTicker"}},"id":"cd409b2a-47e4-41a7-bbe2-048a0bb4df0b","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5ac8b3f2-34bb-40db-a287-8376e708c23d","type":"DrawTool"}]},"id":"0a85cf0a-936c-4360-b30c-037d23a7cd10","type":"Toolbar"},{"attributes":{},"id":"ec4a72d8-e412-4893-ad30-c00faac28991","type":"UnionRenderers"}],"root_ids":["68d0cc45-7fc9-4e75-bd5b-7af0ee98d462"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5c193fcc-07cd-418c-b247-72ac6f1d81de","roots":{"68d0cc45-7fc9-4e75-bd5b-7af0ee98d462":"c21f5760-8c55-4524-a1ee-1e6843fd37da"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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