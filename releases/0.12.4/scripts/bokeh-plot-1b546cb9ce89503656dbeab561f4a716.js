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
      };var element = document.getElementById("82260ac7-c0d2-43b4-add7-445090de444b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '82260ac7-c0d2-43b4-add7-445090de444b' but no matching script tag was found. ")
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
          "LatexLabel": require("custom/bk_script_cdc746781670473d8d27c9a1c06b67f6.latex_label").LatexLabel
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
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"1ab52bc5-2dd2-40c7-b0c0-ab851c460f35":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aadc8a3f-20e5-4252-99c2-ae272ca65811","type":"Circle"},{"attributes":{},"id":"cdfb0fb2-7e8e-4b43-83c5-a81aa0d6e3b4","type":"MyFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c1fbf26-2d38-4371-95dd-51929a82cf54","type":"Circle"},{"attributes":{"data_source":{"id":"6817788d-6a9b-4483-b14c-5fb05fe090bc","type":"ColumnDataSource"},"glyph":{"id":"8c1fbf26-2d38-4371-95dd-51929a82cf54","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"aadc8a3f-20e5-4252-99c2-ae272ca65811","type":"Circle"},"selection_glyph":null},"id":"5bd2c964-2099-48b2-ab24-7be3510d9373","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"76a4ee33-cef0-4ed2-aad7-40baf215d539","type":"LinearAxis"}],"left":[{"id":"d68a39c5-6e4f-4da9-9c00-71c5b9be66b4","type":"LinearAxis"}],"renderers":[{"id":"76a4ee33-cef0-4ed2-aad7-40baf215d539","type":"LinearAxis"},{"id":"e61c58d9-8104-42b1-b845-1d1e7f62e607","type":"Grid"},{"id":"d68a39c5-6e4f-4da9-9c00-71c5b9be66b4","type":"LinearAxis"},{"id":"0c53d7e6-3581-47e7-adc5-0b065c535612","type":"Grid"},{"id":"95b820a3-f3b0-4287-8174-98925b51b7bc","type":"BoxAnnotation"},{"id":"5bd2c964-2099-48b2-ab24-7be3510d9373","type":"GlyphRenderer"}],"title":{"id":"6dd2e4e2-48d6-455a-afb7-d6a7b42c9e5e","type":"Title"},"tool_events":{"id":"0e54a672-ef7d-474f-8e1d-9a6733df685e","type":"ToolEvents"},"toolbar":{"id":"7babdaf7-abc0-4eda-bfb8-8f75489275a4","type":"Toolbar"},"x_range":{"id":"d715ceb1-66f3-40dd-ae2e-9d9d39b3f879","type":"DataRange1d"},"y_range":{"id":"7dd7680e-6b5c-424c-ae82-2ccb81fd3163","type":"DataRange1d"}},"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"bb6b491d-c292-4493-b18e-12fb5e8481a5","type":"BasicTickFormatter"},{"attributes":{},"id":"3a49730c-88ca-4544-a8ed-6bf42e1a8207","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95b820a3-f3b0-4287-8174-98925b51b7bc","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"}},"id":"1ee3ad51-7e7c-4867-9b97-e26e11eac71b","type":"SaveTool"},{"attributes":{"callback":null},"id":"7dd7680e-6b5c-424c-ae82-2ccb81fd3163","type":"DataRange1d"},{"attributes":{"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a49730c-88ca-4544-a8ed-6bf42e1a8207","type":"BasicTicker"}},"id":"e61c58d9-8104-42b1-b845-1d1e7f62e607","type":"Grid"},{"attributes":{"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"}},"id":"65b7a9a8-5fb7-40d7-842a-a98e92bb7e37","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"cdfb0fb2-7e8e-4b43-83c5-a81aa0d6e3b4","type":"MyFormatter"},"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a49730c-88ca-4544-a8ed-6bf42e1a8207","type":"BasicTicker"}},"id":"76a4ee33-cef0-4ed2-aad7-40baf215d539","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"6817788d-6a9b-4483-b14c-5fb05fe090bc","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"bb6b491d-c292-4493-b18e-12fb5e8481a5","type":"BasicTickFormatter"},"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e57ae937-9ebc-4724-a3ab-ec34814a92d2","type":"BasicTicker"}},"id":"d68a39c5-6e4f-4da9-9c00-71c5b9be66b4","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"6dd2e4e2-48d6-455a-afb7-d6a7b42c9e5e","type":"Title"},{"attributes":{},"id":"0e54a672-ef7d-474f-8e1d-9a6733df685e","type":"ToolEvents"},{"attributes":{"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"}},"id":"9ebee197-0b1c-4a2d-8202-4181753dfb05","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e57ae937-9ebc-4724-a3ab-ec34814a92d2","type":"BasicTicker"}},"id":"0c53d7e6-3581-47e7-adc5-0b065c535612","type":"Grid"},{"attributes":{"callback":null},"id":"d715ceb1-66f3-40dd-ae2e-9d9d39b3f879","type":"DataRange1d"},{"attributes":{"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"}},"id":"7a6a3c9b-8a59-4124-8835-349e1a4cef73","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7a6a3c9b-8a59-4124-8835-349e1a4cef73","type":"PanTool"},{"id":"65b7a9a8-5fb7-40d7-842a-a98e92bb7e37","type":"WheelZoomTool"},{"id":"cc9496fe-b53a-45d1-adbc-e2ec7f22339a","type":"BoxZoomTool"},{"id":"1ee3ad51-7e7c-4867-9b97-e26e11eac71b","type":"SaveTool"},{"id":"9ebee197-0b1c-4a2d-8202-4181753dfb05","type":"ResetTool"},{"id":"77eb641c-e4be-409e-b66e-1fae9a10abe6","type":"HelpTool"}]},"id":"7babdaf7-abc0-4eda-bfb8-8f75489275a4","type":"Toolbar"},{"attributes":{"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"}},"id":"77eb641c-e4be-409e-b66e-1fae9a10abe6","type":"HelpTool"},{"attributes":{"overlay":{"id":"95b820a3-f3b0-4287-8174-98925b51b7bc","type":"BoxAnnotation"},"plot":{"id":"002d0c6d-630e-45aa-9e79-7a0f822631c1","subtype":"Figure","type":"Plot"}},"id":"cc9496fe-b53a-45d1-adbc-e2ec7f22339a","type":"BoxZoomTool"},{"attributes":{},"id":"e57ae937-9ebc-4724-a3ab-ec34814a92d2","type":"BasicTicker"}],"root_ids":["002d0c6d-630e-45aa-9e79-7a0f822631c1"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"1ab52bc5-2dd2-40c7-b0c0-ab851c460f35","elementid":"82260ac7-c0d2-43b4-add7-445090de444b","modelid":"002d0c6d-630e-45aa-9e79-7a0f822631c1"}];
                
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
