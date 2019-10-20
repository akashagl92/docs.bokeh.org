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
      };var element = document.getElementById("fceeebe8-72dd-4c85-86ad-5e6389830703");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fceeebe8-72dd-4c85-86ad-5e6389830703' but no matching script tag was found. ")
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
                  "LatexLabel": require("custom/bk_script_cdc746781670473d8d27c9a1c06b67f6.latex_label").LatexLabel
                }
              };
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
                var docs_json = {"9825fc5f-ab55-4e76-8016-66a2d3bfca22":{"roots":{"references":[{"attributes":{},"id":"f03b88af-a0fd-4afe-9476-c9aaaa685ff0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"4edcfd0b-8016-4997-96bf-c1834e61944d","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7f697dbd-4744-481b-93a2-d7aa4ab44883","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"a4b983fd-1934-4e18-93ca-370aedecab29","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"},"ticker":{"id":"f03b88af-a0fd-4afe-9476-c9aaaa685ff0","type":"BasicTicker"}},"id":"8f8962bd-a92d-4a4a-8162-3e85dfcdab1f","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"fe1c77c3-8bbf-4e59-82e4-2122a5d2d9a4","type":"LatexLabel"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7bdbf2c9-2d80-4cd4-8ef1-d02b1a6793c1","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"115e7cb7-1c11-40fd-a651-5cf44ecfc66e","type":"Line"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"86b44dd1-b4d9-451d-aeaa-6bad6825192e","type":"Title"},{"attributes":{"overlay":{"id":"7f697dbd-4744-481b-93a2-d7aa4ab44883","type":"BoxAnnotation"},"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"}},"id":"62665ccd-7f80-48ed-bdd5-1d35f9dd2d6a","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"3210f3eb-8d59-46db-854c-c0ab26a19431","type":"BasicTickFormatter"},"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f414e53-fecb-4fde-b7ec-b23c32d187f6","type":"BasicTicker"}},"id":"25f4661b-d7fc-439f-8747-2eab188d2a64","type":"LinearAxis"},{"attributes":{},"id":"39ab0d2f-5efe-438b-9317-ce03904a7a1f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"}},"id":"19df9b0f-0dd8-42e6-afc1-05588d013cac","type":"SaveTool"},{"attributes":{},"id":"8f414e53-fecb-4fde-b7ec-b23c32d187f6","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cbec1284-4bb6-4546-be08-43f2a9c7f981","type":"PanTool"},{"id":"857a2346-e8f8-4d47-9692-e2d8f8c821a4","type":"WheelZoomTool"},{"id":"62665ccd-7f80-48ed-bdd5-1d35f9dd2d6a","type":"BoxZoomTool"},{"id":"19df9b0f-0dd8-42e6-afc1-05588d013cac","type":"SaveTool"},{"id":"1eb2883f-f75d-4103-9f30-04636efd9f0a","type":"ResetTool"},{"id":"3cc11feb-92f5-463c-826c-7adc42a3a3ac","type":"HelpTool"}]},"id":"a8a4b63c-f4fd-4662-bd9d-baf982bcda9e","type":"Toolbar"},{"attributes":{"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"}},"id":"857a2346-e8f8-4d47-9692-e2d8f8c821a4","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"9b4398a2-afa4-4c2e-ac3e-309daecd2be9","type":"DataRange1d"},{"attributes":{},"id":"5119bede-4667-4f9d-b6c8-6e7990e806ef","type":"ToolEvents"},{"attributes":{"formatter":{"id":"39ab0d2f-5efe-438b-9317-ce03904a7a1f","type":"BasicTickFormatter"},"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"},"ticker":{"id":"f03b88af-a0fd-4afe-9476-c9aaaa685ff0","type":"BasicTicker"}},"id":"9265ea21-bf8f-4217-97f0-3dda1fec1b22","type":"LinearAxis"},{"attributes":{"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"}},"id":"1eb2883f-f75d-4103-9f30-04636efd9f0a","type":"ResetTool"},{"attributes":{"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"}},"id":"3cc11feb-92f5-463c-826c-7adc42a3a3ac","type":"HelpTool"},{"attributes":{},"id":"3210f3eb-8d59-46db-854c-c0ab26a19431","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"}},"id":"cbec1284-4bb6-4546-be08-43f2a9c7f981","type":"PanTool"},{"attributes":{"data_source":{"id":"4edcfd0b-8016-4997-96bf-c1834e61944d","type":"ColumnDataSource"},"glyph":{"id":"7bdbf2c9-2d80-4cd4-8ef1-d02b1a6793c1","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"115e7cb7-1c11-40fd-a651-5cf44ecfc66e","type":"Line"},"selection_glyph":null},"id":"8fa1f5ad-359f-4ab4-95ec-149a0dd291ea","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f414e53-fecb-4fde-b7ec-b23c32d187f6","type":"BasicTicker"}},"id":"4756baa1-e75d-4918-8c3e-d67f517aebb4","type":"Grid"},{"attributes":{"below":[{"id":"25f4661b-d7fc-439f-8747-2eab188d2a64","type":"LinearAxis"}],"left":[{"id":"9265ea21-bf8f-4217-97f0-3dda1fec1b22","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"25f4661b-d7fc-439f-8747-2eab188d2a64","type":"LinearAxis"},{"id":"4756baa1-e75d-4918-8c3e-d67f517aebb4","type":"Grid"},{"id":"9265ea21-bf8f-4217-97f0-3dda1fec1b22","type":"LinearAxis"},{"id":"8f8962bd-a92d-4a4a-8162-3e85dfcdab1f","type":"Grid"},{"id":"7f697dbd-4744-481b-93a2-d7aa4ab44883","type":"BoxAnnotation"},{"id":"8fa1f5ad-359f-4ab4-95ec-149a0dd291ea","type":"GlyphRenderer"},{"id":"fe1c77c3-8bbf-4e59-82e4-2122a5d2d9a4","type":"LatexLabel"}],"title":{"id":"86b44dd1-b4d9-451d-aeaa-6bad6825192e","type":"Title"},"tool_events":{"id":"5119bede-4667-4f9d-b6c8-6e7990e806ef","type":"ToolEvents"},"toolbar":{"id":"a8a4b63c-f4fd-4662-bd9d-baf982bcda9e","type":"Toolbar"},"x_range":{"id":"9b4398a2-afa4-4c2e-ac3e-309daecd2be9","type":"DataRange1d"},"y_range":{"id":"a4b983fd-1934-4e18-93ca-370aedecab29","type":"DataRange1d"}},"id":"0f084c93-90f5-4335-ab40-b495162bdfba","subtype":"Figure","type":"Plot"}],"root_ids":["0f084c93-90f5-4335-ab40-b495162bdfba"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"9825fc5f-ab55-4e76-8016-66a2d3bfca22","elementid":"fceeebe8-72dd-4c85-86ad-5e6389830703","modelid":"0f084c93-90f5-4335-ab40-b495162bdfba"}];
                
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
