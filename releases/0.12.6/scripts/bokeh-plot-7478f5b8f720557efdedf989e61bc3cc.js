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
      };var element = document.getElementById("36ff546e-4bff-4e1e-ae76-f887e3007d59");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36ff546e-4bff-4e1e-ae76-f887e3007d59' but no matching script tag was found. ")
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
                  "LatexLabel": require("custom/bk_script_e2ced638994c4c73ae4d7227a2df05d3.latex_label").LatexLabel
                }
              };
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
                var docs_json = {"daa7ca8f-28e8-4afc-9eab-f8372d2305f6":{"roots":{"references":[{"attributes":{"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"}},"id":"6a41a25e-e0d1-443f-98d3-8ce2fcdd4047","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"bb02ee00-e343-473b-a19e-34614b7fd409","type":"DataRange1d"},{"attributes":{},"id":"556e98b3-cc73-4bef-b60d-880e49f03dee","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"}},"id":"10eef717-6bd3-4eb3-a2fe-f8b28aca4859","type":"SaveTool"},{"attributes":{"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"}},"id":"fb113b9c-01ff-4451-b353-09b4486a4550","type":"PanTool"},{"attributes":{},"id":"416434d4-f983-4eb9-bfad-89eb120f9cde","type":"ToolEvents"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"8fda6d96-360c-4ec4-9887-092419b05ccd","type":"Title"},{"attributes":{},"id":"158befee-60f0-430b-98e8-64426ccd1412","type":"LinearScale"},{"attributes":{"formatter":{"id":"8fe1f930-95f9-4b53-bbd8-58d95aa5f527","type":"BasicTickFormatter"},"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebc23811-d9e7-45ef-8365-0db8708331d0","type":"BasicTicker"}},"id":"57c05e44-581a-4bdf-ac7d-d4ea66ce5334","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4e1cd0ee-d018-4e84-b2da-1866c46ba232","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8d4c5590-c7bb-4af3-b680-a9ae59498346","type":"ColumnDataSource"},"glyph":{"id":"01f585c7-8a46-4cd5-b24d-846a48996d45","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0ee75c7b-9bbc-419b-92d9-059b8064c767","type":"Line"},"selection_glyph":null},"id":"abb5caf9-d285-42b6-bc3b-263b45b4a1c5","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec3cf337-88cf-4e7c-a60b-ff6c2ed75828","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"556e98b3-cc73-4bef-b60d-880e49f03dee","type":"BasicTickFormatter"},"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a58046a-5e73-43ea-a617-d37fcd015d64","type":"BasicTicker"}},"id":"e021c1d4-2557-4fb0-a5db-9f56a596e1f6","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"01f585c7-8a46-4cd5-b24d-846a48996d45","type":"Line"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"1ee5dcb9-4a16-4146-8f5b-478f29d9239a","type":"LatexLabel"},{"attributes":{"dimension":1,"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebc23811-d9e7-45ef-8365-0db8708331d0","type":"BasicTicker"}},"id":"fa3462b2-e7db-4a1c-a6ee-0f94364eb196","type":"Grid"},{"attributes":{"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"}},"id":"899697dc-e59e-45bc-9c0b-1384f276cd94","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fb113b9c-01ff-4451-b353-09b4486a4550","type":"PanTool"},{"id":"6a41a25e-e0d1-443f-98d3-8ce2fcdd4047","type":"WheelZoomTool"},{"id":"5bbde134-dc3d-4ffc-816a-53360626d8f4","type":"BoxZoomTool"},{"id":"10eef717-6bd3-4eb3-a2fe-f8b28aca4859","type":"SaveTool"},{"id":"3a1601c5-3166-47ce-b063-e287f275b6b3","type":"ResetTool"},{"id":"899697dc-e59e-45bc-9c0b-1384f276cd94","type":"HelpTool"}]},"id":"430d1972-402f-40f8-8799-0637fc13d2fe","type":"Toolbar"},{"attributes":{"overlay":{"id":"ec3cf337-88cf-4e7c-a60b-ff6c2ed75828","type":"BoxAnnotation"},"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"}},"id":"5bbde134-dc3d-4ffc-816a-53360626d8f4","type":"BoxZoomTool"},{"attributes":{},"id":"8fe1f930-95f9-4b53-bbd8-58d95aa5f527","type":"BasicTickFormatter"},{"attributes":{},"id":"4a58046a-5e73-43ea-a617-d37fcd015d64","type":"BasicTicker"},{"attributes":{},"id":"cde0e296-7a89-41cc-bb33-ba03285ba35e","type":"LinearScale"},{"attributes":{},"id":"ebc23811-d9e7-45ef-8365-0db8708331d0","type":"BasicTicker"},{"attributes":{"below":[{"id":"e021c1d4-2557-4fb0-a5db-9f56a596e1f6","type":"LinearAxis"}],"left":[{"id":"57c05e44-581a-4bdf-ac7d-d4ea66ce5334","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"e021c1d4-2557-4fb0-a5db-9f56a596e1f6","type":"LinearAxis"},{"id":"9ca83465-00fa-4802-9289-5e8be6ab0043","type":"Grid"},{"id":"57c05e44-581a-4bdf-ac7d-d4ea66ce5334","type":"LinearAxis"},{"id":"fa3462b2-e7db-4a1c-a6ee-0f94364eb196","type":"Grid"},{"id":"ec3cf337-88cf-4e7c-a60b-ff6c2ed75828","type":"BoxAnnotation"},{"id":"abb5caf9-d285-42b6-bc3b-263b45b4a1c5","type":"GlyphRenderer"},{"id":"1ee5dcb9-4a16-4146-8f5b-478f29d9239a","type":"LatexLabel"}],"title":{"id":"8fda6d96-360c-4ec4-9887-092419b05ccd","type":"Title"},"tool_events":{"id":"416434d4-f983-4eb9-bfad-89eb120f9cde","type":"ToolEvents"},"toolbar":{"id":"430d1972-402f-40f8-8799-0637fc13d2fe","type":"Toolbar"},"x_range":{"id":"bb02ee00-e343-473b-a19e-34614b7fd409","type":"DataRange1d"},"x_scale":{"id":"158befee-60f0-430b-98e8-64426ccd1412","type":"LinearScale"},"y_range":{"id":"4e1cd0ee-d018-4e84-b2da-1866c46ba232","type":"DataRange1d"},"y_scale":{"id":"cde0e296-7a89-41cc-bb33-ba03285ba35e","type":"LinearScale"}},"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ee75c7b-9bbc-419b-92d9-059b8064c767","type":"Line"},{"attributes":{"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"}},"id":"3a1601c5-3166-47ce-b063-e287f275b6b3","type":"ResetTool"},{"attributes":{"plot":{"id":"320eaa2d-3434-4609-8881-05701d934750","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a58046a-5e73-43ea-a617-d37fcd015d64","type":"BasicTicker"}},"id":"9ca83465-00fa-4802-9289-5e8be6ab0043","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"8d4c5590-c7bb-4af3-b680-a9ae59498346","type":"ColumnDataSource"}],"root_ids":["320eaa2d-3434-4609-8881-05701d934750"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"daa7ca8f-28e8-4afc-9eab-f8372d2305f6","elementid":"36ff546e-4bff-4e1e-ae76-f887e3007d59","modelid":"320eaa2d-3434-4609-8881-05701d934750"}];
                
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
