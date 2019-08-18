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
      };var element = document.getElementById("512fd032-2888-4e8a-9e0d-4bd78b0b9a63");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '512fd032-2888-4e8a-9e0d-4bd78b0b9a63' but no matching script tag was found. ")
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
                    var docs_json = {"c6ceccc8-3fd7-4919-a1ed-9229bbb4ee75":{"roots":{"references":[{"attributes":{},"id":"832d7b2f-4955-4437-9faf-b0624a12512f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"6c5ac7b8-098c-4ac1-ae2c-e0043889bbeb","type":"BoxAnnotation"}},"id":"8df0fa4f-3937-4a89-b3d5-a2202a105773","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"f50f81d4-7f64-4e91-82ef-2368ad7e2702","type":"ColumnDataSource"},"glyph":{"id":"7ff111b8-9817-49d5-8b97-7c4910b7b8ec","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"afc3bd5a-5cf9-4d6d-8f3b-03002ae1a439","type":"Circle"},"selection_glyph":null,"view":{"id":"912dc764-84c0-4191-a917-711a0fb6cc13","type":"CDSView"}},"id":"ee7eac17-a6fd-4155-8ca2-27ff30f3c362","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"4a0214ff-5728-474c-a2a6-49e3f74b729e","type":"BasicTickFormatter"},"plot":{"id":"d60f2660-0b44-4ffc-a877-222592d3f6c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"832d7b2f-4955-4437-9faf-b0624a12512f","type":"BasicTicker"}},"id":"5a708bec-e299-41c4-8f10-adc84794eecb","type":"LinearAxis"},{"attributes":{},"id":"50d8d85b-fc8c-4b59-8257-d4c334875437","type":"SaveTool"},{"attributes":{"callback":null},"id":"d80ed938-f10b-4781-8721-7259421ec7f6","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9a7a9553-ec0c-40e1-9f33-bbf1f07c37bd","type":"MyFormatter"},"plot":{"id":"d60f2660-0b44-4ffc-a877-222592d3f6c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"1941da77-00aa-4f67-92f0-fd0522a4c9ca","type":"BasicTicker"}},"id":"ce19671e-5f73-4192-963a-b4157a9c493a","type":"LinearAxis"},{"attributes":{},"id":"1941da77-00aa-4f67-92f0-fd0522a4c9ca","type":"BasicTicker"},{"attributes":{},"id":"ccd24aa8-2987-4e57-be6c-bd40592d7a74","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"c4e15ef5-365b-4172-80b6-dc84f367d1fc","type":"DataRange1d"},{"attributes":{},"id":"0000da57-cd08-4fe7-9c2c-c4012cc9526f","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"afc3bd5a-5cf9-4d6d-8f3b-03002ae1a439","type":"Circle"},{"attributes":{},"id":"bf544c5d-e1c7-4ee0-afa3-625237359c57","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"f50f81d4-7f64-4e91-82ef-2368ad7e2702","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d60f2660-0b44-4ffc-a877-222592d3f6c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"1941da77-00aa-4f67-92f0-fd0522a4c9ca","type":"BasicTicker"}},"id":"a735470e-45d6-4b0e-82bc-fd57f6c4a627","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6c5ac7b8-098c-4ac1-ae2c-e0043889bbeb","type":"BoxAnnotation"},{"attributes":{},"id":"6175b5ba-a748-45a7-96f4-633ef42d27ca","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"d60f2660-0b44-4ffc-a877-222592d3f6c0","subtype":"Figure","type":"Plot"},"ticker":{"id":"832d7b2f-4955-4437-9faf-b0624a12512f","type":"BasicTicker"}},"id":"bedc4e13-dac9-4950-8a6a-d88e1cff1b4f","type":"Grid"},{"attributes":{},"id":"4a0214ff-5728-474c-a2a6-49e3f74b729e","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0000da57-cd08-4fe7-9c2c-c4012cc9526f","type":"PanTool"},{"id":"ccd24aa8-2987-4e57-be6c-bd40592d7a74","type":"WheelZoomTool"},{"id":"8df0fa4f-3937-4a89-b3d5-a2202a105773","type":"BoxZoomTool"},{"id":"50d8d85b-fc8c-4b59-8257-d4c334875437","type":"SaveTool"},{"id":"1f198a6e-c0b3-4853-9afe-c5b1f129a758","type":"ResetTool"},{"id":"6175b5ba-a748-45a7-96f4-633ef42d27ca","type":"HelpTool"}]},"id":"fd36e734-c8e3-4a0d-aea2-3f5cb7e90dba","type":"Toolbar"},{"attributes":{},"id":"752d2059-4b74-4d72-8f75-d71d6ba49cb4","type":"LinearScale"},{"attributes":{"below":[{"id":"ce19671e-5f73-4192-963a-b4157a9c493a","type":"LinearAxis"}],"left":[{"id":"5a708bec-e299-41c4-8f10-adc84794eecb","type":"LinearAxis"}],"renderers":[{"id":"ce19671e-5f73-4192-963a-b4157a9c493a","type":"LinearAxis"},{"id":"a735470e-45d6-4b0e-82bc-fd57f6c4a627","type":"Grid"},{"id":"5a708bec-e299-41c4-8f10-adc84794eecb","type":"LinearAxis"},{"id":"bedc4e13-dac9-4950-8a6a-d88e1cff1b4f","type":"Grid"},{"id":"6c5ac7b8-098c-4ac1-ae2c-e0043889bbeb","type":"BoxAnnotation"},{"id":"ee7eac17-a6fd-4155-8ca2-27ff30f3c362","type":"GlyphRenderer"}],"title":{"id":"e1c1b995-a525-4717-826a-a01b78243351","type":"Title"},"toolbar":{"id":"fd36e734-c8e3-4a0d-aea2-3f5cb7e90dba","type":"Toolbar"},"x_range":{"id":"d80ed938-f10b-4781-8721-7259421ec7f6","type":"DataRange1d"},"x_scale":{"id":"bf544c5d-e1c7-4ee0-afa3-625237359c57","type":"LinearScale"},"y_range":{"id":"c4e15ef5-365b-4172-80b6-dc84f367d1fc","type":"DataRange1d"},"y_scale":{"id":"752d2059-4b74-4d72-8f75-d71d6ba49cb4","type":"LinearScale"}},"id":"d60f2660-0b44-4ffc-a877-222592d3f6c0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"e1c1b995-a525-4717-826a-a01b78243351","type":"Title"},{"attributes":{"source":{"id":"f50f81d4-7f64-4e91-82ef-2368ad7e2702","type":"ColumnDataSource"}},"id":"912dc764-84c0-4191-a917-711a0fb6cc13","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ff111b8-9817-49d5-8b97-7c4910b7b8ec","type":"Circle"},{"attributes":{},"id":"9a7a9553-ec0c-40e1-9f33-bbf1f07c37bd","type":"MyFormatter"},{"attributes":{},"id":"1f198a6e-c0b3-4853-9afe-c5b1f129a758","type":"ResetTool"}],"root_ids":["d60f2660-0b44-4ffc-a877-222592d3f6c0"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"c6ceccc8-3fd7-4919-a1ed-9229bbb4ee75","elementid":"512fd032-2888-4e8a-9e0d-4bd78b0b9a63","modelid":"d60f2660-0b44-4ffc-a877-222592d3f6c0"}];
                
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
