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
      };var element = document.getElementById("94b1869f-5fe0-4110-9533-1937d4ebdb4c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '94b1869f-5fe0-4110-9533-1937d4ebdb4c' but no matching script tag was found. ")
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
                  "MyFormatter": require("custom/bk_script_5f5f109f0ce649818d9b2abce022f66a.my_formatter").MyFormatter,
          "LatexLabel": require("custom/bk_script_e2ced638994c4c73ae4d7227a2df05d3.latex_label").LatexLabel
                }
              };
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
                var docs_json = {"ecec8736-e012-42f3-bf43-2622e7837be1":{"roots":{"references":[{"attributes":{},"id":"b12bb3d0-0430-482f-be85-0b1075cc165a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"20e6459e-845d-42fc-8dda-04fbda1f445c","type":"BasicTicker"}},"id":"6e3eb2d3-608d-4f35-b43a-bbd992253dc7","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b38505d-10c5-4bbe-a9a2-66fe0ea33613","type":"BasicTicker"}},"id":"ee3f01a9-1246-4e53-aa32-6b87718fdcb8","type":"Grid"},{"attributes":{},"id":"f2743135-1be2-455d-88e1-7ab22d7c0649","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"f4de028d-7302-4816-a132-b3c6beebdc7c","type":"ColumnDataSource"},{"attributes":{},"id":"20e6459e-845d-42fc-8dda-04fbda1f445c","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff6e244d-662b-4466-a7d2-3813a114562f","type":"Circle"},{"attributes":{"callback":null},"id":"d7d113a6-f894-4154-b2c5-a8a0accd4acc","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c5c96a1-e996-4f4d-b9a0-b7e76908326b","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"9df6027a-9015-4f1f-8e4e-6f444fce785d","type":"Title"},{"attributes":{"overlay":{"id":"7b269ecb-1659-42f7-b046-3ad7d7e2854c","type":"BoxAnnotation"},"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"}},"id":"a36b4d82-9e03-4d5e-bddd-48963f1c5e76","type":"BoxZoomTool"},{"attributes":{},"id":"3f3568e3-8732-4eee-9610-03f82689b768","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9fb578ef-1ab0-4768-be29-8c4db06781b8","type":"PanTool"},{"id":"5058f577-e529-4da0-9492-00ff52a04417","type":"WheelZoomTool"},{"id":"a36b4d82-9e03-4d5e-bddd-48963f1c5e76","type":"BoxZoomTool"},{"id":"dddacb0c-d6d6-4989-b441-b295a4b7c47b","type":"SaveTool"},{"id":"f7de2fa1-adf3-4666-bc8c-098afdbb67bf","type":"ResetTool"},{"id":"831df227-10ff-485a-ae87-4d5c59ef799a","type":"HelpTool"}]},"id":"6fb53dea-dbe1-4e12-ae17-f298190e6b22","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7b269ecb-1659-42f7-b046-3ad7d7e2854c","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"8ebff49f-81cd-4be1-bce6-df376b36993a","type":"DataRange1d"},{"attributes":{"below":[{"id":"2f7e6b31-a863-41ff-8b24-875630439a0f","type":"LinearAxis"}],"left":[{"id":"23a01ddd-499c-45eb-b90c-8ee084d2a678","type":"LinearAxis"}],"renderers":[{"id":"2f7e6b31-a863-41ff-8b24-875630439a0f","type":"LinearAxis"},{"id":"6e3eb2d3-608d-4f35-b43a-bbd992253dc7","type":"Grid"},{"id":"23a01ddd-499c-45eb-b90c-8ee084d2a678","type":"LinearAxis"},{"id":"ee3f01a9-1246-4e53-aa32-6b87718fdcb8","type":"Grid"},{"id":"7b269ecb-1659-42f7-b046-3ad7d7e2854c","type":"BoxAnnotation"},{"id":"a79697a0-589c-4668-88ee-9a6416e034de","type":"GlyphRenderer"}],"title":{"id":"9df6027a-9015-4f1f-8e4e-6f444fce785d","type":"Title"},"tool_events":{"id":"3f3568e3-8732-4eee-9610-03f82689b768","type":"ToolEvents"},"toolbar":{"id":"6fb53dea-dbe1-4e12-ae17-f298190e6b22","type":"Toolbar"},"x_range":{"id":"8ebff49f-81cd-4be1-bce6-df376b36993a","type":"DataRange1d"},"x_scale":{"id":"f2743135-1be2-455d-88e1-7ab22d7c0649","type":"LinearScale"},"y_range":{"id":"d7d113a6-f894-4154-b2c5-a8a0accd4acc","type":"DataRange1d"},"y_scale":{"id":"e7442192-256d-4e98-9fdb-336fc425a2c6","type":"LinearScale"}},"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"}},"id":"9fb578ef-1ab0-4768-be29-8c4db06781b8","type":"PanTool"},{"attributes":{"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"}},"id":"5058f577-e529-4da0-9492-00ff52a04417","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"b12bb3d0-0430-482f-be85-0b1075cc165a","type":"BasicTickFormatter"},"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b38505d-10c5-4bbe-a9a2-66fe0ea33613","type":"BasicTicker"}},"id":"23a01ddd-499c-45eb-b90c-8ee084d2a678","type":"LinearAxis"},{"attributes":{},"id":"7234a9e6-3517-4538-a3af-66960e702601","type":"MyFormatter"},{"attributes":{"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"}},"id":"dddacb0c-d6d6-4989-b441-b295a4b7c47b","type":"SaveTool"},{"attributes":{"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"}},"id":"831df227-10ff-485a-ae87-4d5c59ef799a","type":"HelpTool"},{"attributes":{},"id":"5b38505d-10c5-4bbe-a9a2-66fe0ea33613","type":"BasicTicker"},{"attributes":{},"id":"e7442192-256d-4e98-9fdb-336fc425a2c6","type":"LinearScale"},{"attributes":{"data_source":{"id":"f4de028d-7302-4816-a132-b3c6beebdc7c","type":"ColumnDataSource"},"glyph":{"id":"ff6e244d-662b-4466-a7d2-3813a114562f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4c5c96a1-e996-4f4d-b9a0-b7e76908326b","type":"Circle"},"selection_glyph":null},"id":"a79697a0-589c-4668-88ee-9a6416e034de","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7234a9e6-3517-4538-a3af-66960e702601","type":"MyFormatter"},"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"20e6459e-845d-42fc-8dda-04fbda1f445c","type":"BasicTicker"}},"id":"2f7e6b31-a863-41ff-8b24-875630439a0f","type":"LinearAxis"},{"attributes":{"plot":{"id":"19ededaf-3769-41e8-b1a6-503139a533f9","subtype":"Figure","type":"Plot"}},"id":"f7de2fa1-adf3-4666-bc8c-098afdbb67bf","type":"ResetTool"}],"root_ids":["19ededaf-3769-41e8-b1a6-503139a533f9"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ecec8736-e012-42f3-bf43-2622e7837be1","elementid":"94b1869f-5fe0-4110-9533-1937d4ebdb4c","modelid":"19ededaf-3769-41e8-b1a6-503139a533f9"}];
                
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
