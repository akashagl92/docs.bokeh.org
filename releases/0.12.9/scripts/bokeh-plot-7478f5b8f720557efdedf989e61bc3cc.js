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
      };var element = document.getElementById("638da44d-42ca-4da4-b756-d3870dfcb0a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '638da44d-42ca-4da4-b756-d3870dfcb0a8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_11478284eb724428bba954de02afc94b.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_11478284eb724428bba954de02afc94b.latex_label": function(require, module, exports) {
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
                    var docs_json = {"4aa63523-8f3b-49ed-b618-a4bf62614123":{"roots":{"references":[{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c30c946a-a9bc-4229-a74b-45c1a57367f9","type":"Line"},{"attributes":{"formatter":{"id":"7eb62f82-88fe-48ce-a978-713f2e758df6","type":"BasicTickFormatter"},"plot":{"id":"0afa938e-cec7-4a8c-82fb-536e88180df9","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4ca813e-7c26-44bc-aac9-faf425e7058e","type":"BasicTicker"}},"id":"e2a1d359-e8a7-4f4c-8219-e1c7433fe30d","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"0afa938e-cec7-4a8c-82fb-536e88180df9","subtype":"Figure","type":"Plot"},"ticker":{"id":"48a01eae-26bb-4a0e-afb6-b7b1b00cd93d","type":"BasicTicker"}},"id":"2489e70f-ed01-48b5-a140-5df6a16f4539","type":"Grid"},{"attributes":{},"id":"a4ca813e-7c26-44bc-aac9-faf425e7058e","type":"BasicTicker"},{"attributes":{},"id":"7eb62f82-88fe-48ce-a978-713f2e758df6","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"17467f90-bbdf-4967-aa04-1d5c3d376624","type":"ColumnDataSource"}},"id":"d8d5bc49-873a-4ee2-a552-cca9bb455342","type":"CDSView"},{"attributes":{"formatter":{"id":"d992a118-d026-4f7e-a4e9-b70cb48c1cfc","type":"BasicTickFormatter"},"plot":{"id":"0afa938e-cec7-4a8c-82fb-536e88180df9","subtype":"Figure","type":"Plot"},"ticker":{"id":"48a01eae-26bb-4a0e-afb6-b7b1b00cd93d","type":"BasicTicker"}},"id":"2904a7be-1f32-4dd0-9083-ed5d3f8abadd","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7943ea1-2220-411a-9232-105835f4bd4d","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Yn7YNAjD5P1fq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyJ/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDSwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/+KMW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCr95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"17467f90-bbdf-4967-aa04-1d5c3d376624","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"0afa938e-cec7-4a8c-82fb-536e88180df9","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"5010b33a-6e67-4663-af86-5600587b0e47","type":"LatexLabel"},{"attributes":{"data_source":{"id":"17467f90-bbdf-4967-aa04-1d5c3d376624","type":"ColumnDataSource"},"glyph":{"id":"c30c946a-a9bc-4229-a74b-45c1a57367f9","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d7943ea1-2220-411a-9232-105835f4bd4d","type":"Line"},"selection_glyph":null,"view":{"id":"d8d5bc49-873a-4ee2-a552-cca9bb455342","type":"CDSView"}},"id":"da30b89c-d859-49c3-b945-3086739c129f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0afa938e-cec7-4a8c-82fb-536e88180df9","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4ca813e-7c26-44bc-aac9-faf425e7058e","type":"BasicTicker"}},"id":"14a9585d-df0e-473a-bb29-4679860bd95b","type":"Grid"},{"attributes":{"below":[{"id":"e2a1d359-e8a7-4f4c-8219-e1c7433fe30d","type":"LinearAxis"}],"left":[{"id":"2904a7be-1f32-4dd0-9083-ed5d3f8abadd","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"e2a1d359-e8a7-4f4c-8219-e1c7433fe30d","type":"LinearAxis"},{"id":"14a9585d-df0e-473a-bb29-4679860bd95b","type":"Grid"},{"id":"2904a7be-1f32-4dd0-9083-ed5d3f8abadd","type":"LinearAxis"},{"id":"2489e70f-ed01-48b5-a140-5df6a16f4539","type":"Grid"},{"id":"cdf78301-216d-4c93-8dd4-cfd9573c7cdd","type":"BoxAnnotation"},{"id":"da30b89c-d859-49c3-b945-3086739c129f","type":"GlyphRenderer"},{"id":"5010b33a-6e67-4663-af86-5600587b0e47","type":"LatexLabel"}],"title":{"id":"4177d548-67f5-4713-8a32-ed1e1144e574","type":"Title"},"toolbar":{"id":"b09baa71-0995-4bd2-8031-17176e77beba","type":"Toolbar"},"x_range":{"id":"74423371-3d28-445d-893e-014496a742dc","type":"DataRange1d"},"x_scale":{"id":"67edaebe-f2f1-4d84-b620-94d2c33a2b31","type":"LinearScale"},"y_range":{"id":"f768c13f-31cb-41e6-afd4-c0c450c6d9c1","type":"DataRange1d"},"y_scale":{"id":"6fb25d3e-f2d6-41de-b5f8-dfe50ffc6f5a","type":"LinearScale"}},"id":"0afa938e-cec7-4a8c-82fb-536e88180df9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2fad709b-df14-4677-a2ac-280ca6138b93","type":"ResetTool"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"4177d548-67f5-4713-8a32-ed1e1144e574","type":"Title"},{"attributes":{"callback":null},"id":"74423371-3d28-445d-893e-014496a742dc","type":"DataRange1d"},{"attributes":{},"id":"d992a118-d026-4f7e-a4e9-b70cb48c1cfc","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fd876bd0-9595-424d-a990-228d69ec45c2","type":"PanTool"},{"id":"6f4e23da-0e16-4064-a6f3-920a0997107b","type":"WheelZoomTool"},{"id":"70a16590-ee05-4df4-9d1f-147547384f0d","type":"BoxZoomTool"},{"id":"264e2a6d-41b1-457c-ab98-0789f1be7755","type":"SaveTool"},{"id":"2fad709b-df14-4677-a2ac-280ca6138b93","type":"ResetTool"},{"id":"16e114ab-c2b9-4e28-a9e0-40a4611d1434","type":"HelpTool"}]},"id":"b09baa71-0995-4bd2-8031-17176e77beba","type":"Toolbar"},{"attributes":{},"id":"264e2a6d-41b1-457c-ab98-0789f1be7755","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cdf78301-216d-4c93-8dd4-cfd9573c7cdd","type":"BoxAnnotation"},{"attributes":{},"id":"48a01eae-26bb-4a0e-afb6-b7b1b00cd93d","type":"BasicTicker"},{"attributes":{},"id":"6fb25d3e-f2d6-41de-b5f8-dfe50ffc6f5a","type":"LinearScale"},{"attributes":{},"id":"67edaebe-f2f1-4d84-b620-94d2c33a2b31","type":"LinearScale"},{"attributes":{"callback":null},"id":"f768c13f-31cb-41e6-afd4-c0c450c6d9c1","type":"DataRange1d"},{"attributes":{},"id":"6f4e23da-0e16-4064-a6f3-920a0997107b","type":"WheelZoomTool"},{"attributes":{},"id":"16e114ab-c2b9-4e28-a9e0-40a4611d1434","type":"HelpTool"},{"attributes":{},"id":"fd876bd0-9595-424d-a990-228d69ec45c2","type":"PanTool"},{"attributes":{"overlay":{"id":"cdf78301-216d-4c93-8dd4-cfd9573c7cdd","type":"BoxAnnotation"}},"id":"70a16590-ee05-4df4-9d1f-147547384f0d","type":"BoxZoomTool"}],"root_ids":["0afa938e-cec7-4a8c-82fb-536e88180df9"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"4aa63523-8f3b-49ed-b618-a4bf62614123","elementid":"638da44d-42ca-4da4-b756-d3870dfcb0a8","modelid":"0afa938e-cec7-4a8c-82fb-536e88180df9"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
