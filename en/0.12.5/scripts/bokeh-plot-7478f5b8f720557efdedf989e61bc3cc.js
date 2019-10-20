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
      };var element = document.getElementById("c60d2bf2-34a9-439a-af76-a02d59679738");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c60d2bf2-34a9-439a-af76-a02d59679738' but no matching script tag was found. ")
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
                  "LatexLabel": require("custom/bk_script_a14de02787a54585be895bc685587404.latex_label").LatexLabel
                }
              };
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
                var docs_json = {"9f5b533e-d4c9-46ef-985a-1985e9e7d236":{"roots":{"references":[{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35c7585c-3a99-4784-9a21-302498bea416","type":"Line"},{"attributes":{"below":[{"id":"0cf29300-277e-4dbb-a93a-c13af5f1e0f4","type":"LinearAxis"}],"left":[{"id":"02d16df8-f7cb-4bb4-9e35-7e184be3fc12","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"0cf29300-277e-4dbb-a93a-c13af5f1e0f4","type":"LinearAxis"},{"id":"54059f05-10f6-458c-ad7f-58cc47d7abf3","type":"Grid"},{"id":"02d16df8-f7cb-4bb4-9e35-7e184be3fc12","type":"LinearAxis"},{"id":"1e728527-6b25-4200-9548-68c8401b6f25","type":"Grid"},{"id":"fdb345a9-5ce8-41c5-9c6a-9c9a82f10986","type":"BoxAnnotation"},{"id":"f987fe3d-ce9c-4057-8361-8a910cb6807e","type":"GlyphRenderer"},{"id":"d65b150a-4a98-4050-a981-3b54727bb46a","type":"LatexLabel"}],"title":{"id":"ba59dcb9-6019-4456-812f-af005b63156d","type":"Title"},"tool_events":{"id":"9a4b3017-3949-4cd6-ae3b-cb435bb04c42","type":"ToolEvents"},"toolbar":{"id":"ed8ac513-a137-4de9-ba1a-8b81dfc403a4","type":"Toolbar"},"x_range":{"id":"54ca7c90-022d-40e5-8353-59700bc11ec7","type":"DataRange1d"},"y_range":{"id":"303f13d6-441a-46d6-a26d-4d3c2d294ff8","type":"DataRange1d"}},"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"}},"id":"0b1ff54c-4c5b-47dc-8b16-dd49fb9ce3a0","type":"SaveTool"},{"attributes":{"overlay":{"id":"fdb345a9-5ce8-41c5-9c6a-9c9a82f10986","type":"BoxAnnotation"},"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"}},"id":"b3edb671-0695-4bdb-a3fa-87e10dd53c65","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5259e359-30dd-4798-9ccf-c4ac245e81e7","type":"Line"},{"attributes":{"formatter":{"id":"9d426af2-3080-4313-a546-3e72a04f3ba1","type":"BasicTickFormatter"},"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ab1ffe4-31ee-453f-84eb-f8dcd61d7400","type":"BasicTicker"}},"id":"02d16df8-f7cb-4bb4-9e35-7e184be3fc12","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fdb345a9-5ce8-41c5-9c6a-9c9a82f10986","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"b7ea16d9-d2c2-4fcc-955a-07c3f6a5b4ae","type":"ColumnDataSource"},"glyph":{"id":"35c7585c-3a99-4784-9a21-302498bea416","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5259e359-30dd-4798-9ccf-c4ac245e81e7","type":"Line"},"selection_glyph":null},"id":"f987fe3d-ce9c-4057-8361-8a910cb6807e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"54ca7c90-022d-40e5-8353-59700bc11ec7","type":"DataRange1d"},{"attributes":{"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"3642232b-26f4-4bc7-9060-2d1f11d74991","type":"BasicTicker"}},"id":"54059f05-10f6-458c-ad7f-58cc47d7abf3","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"b7ea16d9-d2c2-4fcc-955a-07c3f6a5b4ae","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"}},"id":"882297ae-5716-4b80-9325-24a2b3f033c0","type":"HelpTool"},{"attributes":{"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"}},"id":"b21a79e6-66cc-4ba6-82b9-091917713218","type":"WheelZoomTool"},{"attributes":{},"id":"9a4b3017-3949-4cd6-ae3b-cb435bb04c42","type":"ToolEvents"},{"attributes":{"callback":null},"id":"303f13d6-441a-46d6-a26d-4d3c2d294ff8","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"77b09f5c-e74b-4e99-ab76-1eec52f4bbea","type":"PanTool"},{"id":"b21a79e6-66cc-4ba6-82b9-091917713218","type":"WheelZoomTool"},{"id":"b3edb671-0695-4bdb-a3fa-87e10dd53c65","type":"BoxZoomTool"},{"id":"0b1ff54c-4c5b-47dc-8b16-dd49fb9ce3a0","type":"SaveTool"},{"id":"2d734e28-a794-4fb9-bdc4-5586ce50bd6e","type":"ResetTool"},{"id":"882297ae-5716-4b80-9325-24a2b3f033c0","type":"HelpTool"}]},"id":"ed8ac513-a137-4de9-ba1a-8b81dfc403a4","type":"Toolbar"},{"attributes":{},"id":"3642232b-26f4-4bc7-9060-2d1f11d74991","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"d65b150a-4a98-4050-a981-3b54727bb46a","type":"LatexLabel"},{"attributes":{"formatter":{"id":"d311c0b5-a4df-4502-9678-df716203b316","type":"BasicTickFormatter"},"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"3642232b-26f4-4bc7-9060-2d1f11d74991","type":"BasicTicker"}},"id":"0cf29300-277e-4dbb-a93a-c13af5f1e0f4","type":"LinearAxis"},{"attributes":{"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"}},"id":"77b09f5c-e74b-4e99-ab76-1eec52f4bbea","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ab1ffe4-31ee-453f-84eb-f8dcd61d7400","type":"BasicTicker"}},"id":"1e728527-6b25-4200-9548-68c8401b6f25","type":"Grid"},{"attributes":{},"id":"d311c0b5-a4df-4502-9678-df716203b316","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"ba59dcb9-6019-4456-812f-af005b63156d","type":"Title"},{"attributes":{"plot":{"id":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f","subtype":"Figure","type":"Plot"}},"id":"2d734e28-a794-4fb9-bdc4-5586ce50bd6e","type":"ResetTool"},{"attributes":{},"id":"3ab1ffe4-31ee-453f-84eb-f8dcd61d7400","type":"BasicTicker"},{"attributes":{},"id":"9d426af2-3080-4313-a546-3e72a04f3ba1","type":"BasicTickFormatter"}],"root_ids":["587e0f3f-ad76-4b7e-9e7e-1581272a8e3f"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9f5b533e-d4c9-46ef-985a-1985e9e7d236","elementid":"c60d2bf2-34a9-439a-af76-a02d59679738","modelid":"587e0f3f-ad76-4b7e-9e7e-1581272a8e3f"}];
                
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
