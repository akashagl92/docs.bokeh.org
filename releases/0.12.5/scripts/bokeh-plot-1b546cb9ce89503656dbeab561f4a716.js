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
      };var element = document.getElementById("740af9b7-ed80-4d78-8b83-8022bb622364");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '740af9b7-ed80-4d78-8b83-8022bb622364' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"];
    
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
                  "MyFormatter": require("custom/bk_script_55de304bebc64c51982a4e30d8f65a70.my_formatter").MyFormatter,
          "LatexLabel": require("custom/bk_script_a14de02787a54585be895bc685587404.latex_label").LatexLabel
                }
              };
            }, {}],
            "custom/bk_script_55de304bebc64c51982a4e30d8f65a70.my_formatter": [function(require, module, exports) {
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
          "custom/bk_script_a14de02787a54585be895bc685587404.latex_label": [function(require, module, exports) {
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
                var docs_json = {"e607ab0b-f41a-46ac-8d97-dfd39ff5d347":{"roots":{"references":[{"attributes":{"below":[{"id":"914e68b5-f217-42b7-ba89-8bff1a683056","type":"LinearAxis"}],"left":[{"id":"58aee94a-c509-4eeb-8b0c-6044ea4c93de","type":"LinearAxis"}],"renderers":[{"id":"914e68b5-f217-42b7-ba89-8bff1a683056","type":"LinearAxis"},{"id":"10399e83-e419-47df-b139-4a18f6f319e5","type":"Grid"},{"id":"58aee94a-c509-4eeb-8b0c-6044ea4c93de","type":"LinearAxis"},{"id":"dfeebe70-a242-4a23-8e6f-893955ce7d10","type":"Grid"},{"id":"e87f966d-e3e3-4d2c-8e45-d0cfadd13542","type":"BoxAnnotation"},{"id":"2ab63b99-533a-433d-baf9-96e153533937","type":"GlyphRenderer"}],"title":{"id":"2944bb37-fb47-435b-8aa5-1fd86b67cf56","type":"Title"},"tool_events":{"id":"804fdb46-96b6-47cb-a170-6f9f23f826e7","type":"ToolEvents"},"toolbar":{"id":"002568f1-8318-40c9-b19e-711a62e68fed","type":"Toolbar"},"x_range":{"id":"7a7492a0-57f2-4aba-8771-71f5a0cd2d1d","type":"DataRange1d"},"y_range":{"id":"32cf85b7-71e8-47ed-af2d-78c787e8da53","type":"DataRange1d"}},"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1a76c38-b780-4834-8e29-41cfd89582db","type":"Circle"},{"attributes":{},"id":"50c791f1-ea12-47ed-b500-7c8e0249ce4f","type":"MyFormatter"},{"attributes":{"plot":null,"text":""},"id":"2944bb37-fb47-435b-8aa5-1fd86b67cf56","type":"Title"},{"attributes":{},"id":"5871ff3a-aec7-4982-ab5d-2af62ad8df5f","type":"BasicTicker"},{"attributes":{"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"}},"id":"547efec6-3afa-49f8-85b5-22fcf77a2958","type":"HelpTool"},{"attributes":{"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"}},"id":"0a1ecb98-3e9d-465f-abce-065a36940546","type":"SaveTool"},{"attributes":{"callback":null},"id":"7a7492a0-57f2-4aba-8771-71f5a0cd2d1d","type":"DataRange1d"},{"attributes":{"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"}},"id":"1467faae-fbe0-479a-a145-efb2347fdd56","type":"PanTool"},{"attributes":{"callback":null},"id":"32cf85b7-71e8-47ed-af2d-78c787e8da53","type":"DataRange1d"},{"attributes":{},"id":"804fdb46-96b6-47cb-a170-6f9f23f826e7","type":"ToolEvents"},{"attributes":{"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"}},"id":"c6a69508-d516-445f-bc7d-b3d9a128361b","type":"WheelZoomTool"},{"attributes":{},"id":"80b06d21-37d5-477b-aeaf-e5be5588f254","type":"BasicTickFormatter"},{"attributes":{},"id":"d82d8fc2-fe2d-4dd2-9987-0889d0c61e21","type":"BasicTicker"},{"attributes":{"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"}},"id":"1a810548-1871-41d1-8b13-b5fed7125c4d","type":"ResetTool"},{"attributes":{"formatter":{"id":"50c791f1-ea12-47ed-b500-7c8e0249ce4f","type":"MyFormatter"},"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"},"ticker":{"id":"d82d8fc2-fe2d-4dd2-9987-0889d0c61e21","type":"BasicTicker"}},"id":"914e68b5-f217-42b7-ba89-8bff1a683056","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7d9c892e-eb1c-4185-94f2-d295539df588","type":"ColumnDataSource"},"glyph":{"id":"d1a76c38-b780-4834-8e29-41cfd89582db","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"770ccd83-7fff-4076-a055-f6038b93d8b7","type":"Circle"},"selection_glyph":null},"id":"2ab63b99-533a-433d-baf9-96e153533937","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"},"ticker":{"id":"d82d8fc2-fe2d-4dd2-9987-0889d0c61e21","type":"BasicTicker"}},"id":"10399e83-e419-47df-b139-4a18f6f319e5","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"7d9c892e-eb1c-4185-94f2-d295539df588","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e87f966d-e3e3-4d2c-8e45-d0cfadd13542","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"e87f966d-e3e3-4d2c-8e45-d0cfadd13542","type":"BoxAnnotation"},"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"}},"id":"c26b20c1-1963-4e09-8463-a3a7ae0084db","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"80b06d21-37d5-477b-aeaf-e5be5588f254","type":"BasicTickFormatter"},"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"},"ticker":{"id":"5871ff3a-aec7-4982-ab5d-2af62ad8df5f","type":"BasicTicker"}},"id":"58aee94a-c509-4eeb-8b0c-6044ea4c93de","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"c6b15b91-9b64-4d47-a664-6aae9323a872","subtype":"Figure","type":"Plot"},"ticker":{"id":"5871ff3a-aec7-4982-ab5d-2af62ad8df5f","type":"BasicTicker"}},"id":"dfeebe70-a242-4a23-8e6f-893955ce7d10","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1467faae-fbe0-479a-a145-efb2347fdd56","type":"PanTool"},{"id":"c6a69508-d516-445f-bc7d-b3d9a128361b","type":"WheelZoomTool"},{"id":"c26b20c1-1963-4e09-8463-a3a7ae0084db","type":"BoxZoomTool"},{"id":"0a1ecb98-3e9d-465f-abce-065a36940546","type":"SaveTool"},{"id":"1a810548-1871-41d1-8b13-b5fed7125c4d","type":"ResetTool"},{"id":"547efec6-3afa-49f8-85b5-22fcf77a2958","type":"HelpTool"}]},"id":"002568f1-8318-40c9-b19e-711a62e68fed","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"770ccd83-7fff-4076-a055-f6038b93d8b7","type":"Circle"}],"root_ids":["c6b15b91-9b64-4d47-a664-6aae9323a872"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e607ab0b-f41a-46ac-8d97-dfd39ff5d347","elementid":"740af9b7-ed80-4d78-8b83-8022bb622364","modelid":"c6b15b91-9b64-4d47-a664-6aae9323a872"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
