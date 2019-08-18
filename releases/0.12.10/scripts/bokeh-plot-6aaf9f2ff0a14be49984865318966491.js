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
      };var element = document.getElementById("03dcd409-1b1e-4502-90a6-39f3b1bf81f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '03dcd409-1b1e-4502-90a6-39f3b1bf81f1' but no matching script tag was found. ")
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
                "LatexLabel": require("custom/bk_script_c4466613b6804e8c80acd382cb6db136.latex_label").LatexLabel
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
                    var docs_json = {"809105c5-ef94-4915-b3e0-356eb05ec08d":{"roots":{"references":[{"attributes":{"below":[{"id":"f6046f9e-10c3-411d-bdba-6ac6dd7e82c0","type":"LinearAxis"}],"left":[{"id":"824b4bfa-d076-4c16-a534-59fbe69bc455","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"f6046f9e-10c3-411d-bdba-6ac6dd7e82c0","type":"LinearAxis"},{"id":"8ec71ec5-c1ac-4d90-8b71-d4ff0e3a02d6","type":"Grid"},{"id":"824b4bfa-d076-4c16-a534-59fbe69bc455","type":"LinearAxis"},{"id":"078bf8d7-7636-4a0a-a12c-25b482ae0165","type":"Grid"},{"id":"125e3399-7b38-46e5-bdb1-9f58bd47e643","type":"BoxAnnotation"},{"id":"3e48b8ab-d73e-47b4-b7d6-fb9425a1fe60","type":"GlyphRenderer"},{"id":"5f553729-59b9-475d-babe-a38866a3f7a4","type":"LatexLabel"}],"title":{"id":"4a86ada9-ef77-4112-89f8-39fd81e19aa2","type":"Title"},"toolbar":{"id":"bcbfd8ae-b346-4d96-9acd-d6ab74fe0797","type":"Toolbar"},"x_range":{"id":"e0523a07-c719-4e90-9e71-5344b17854ca","type":"DataRange1d"},"x_scale":{"id":"3cd73aad-0b67-402e-85d0-7d7b65002de3","type":"LinearScale"},"y_range":{"id":"72a881a7-6787-4b26-97c0-6a8631291df2","type":"DataRange1d"},"y_scale":{"id":"e6d1537e-c25a-4e20-ae4b-e33c0e205e81","type":"LinearScale"}},"id":"c4eb60df-19d6-43a7-9f35-949efe793d08","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"125e3399-7b38-46e5-bdb1-9f58bd47e643","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"4a86ada9-ef77-4112-89f8-39fd81e19aa2","type":"Title"},{"attributes":{},"id":"f7a6b7e7-a79f-443d-b4c2-aad57c9da215","type":"PanTool"},{"attributes":{"callback":null},"id":"e0523a07-c719-4e90-9e71-5344b17854ca","type":"DataRange1d"},{"attributes":{},"id":"51386cfc-fbbe-483a-9b2a-871f018c0f8b","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f7a6b7e7-a79f-443d-b4c2-aad57c9da215","type":"PanTool"},{"id":"51386cfc-fbbe-483a-9b2a-871f018c0f8b","type":"WheelZoomTool"},{"id":"b57a95e8-237a-4e8a-96bb-4d87b6b08810","type":"BoxZoomTool"},{"id":"8d6a0a9b-b62d-4163-8859-ed1acdd89519","type":"SaveTool"},{"id":"b3834fc7-3969-4c0f-aa9e-92166943c890","type":"ResetTool"},{"id":"5e0fd240-8ae9-421e-9ea0-20fc3c1ddbdf","type":"HelpTool"}]},"id":"bcbfd8ae-b346-4d96-9acd-d6ab74fe0797","type":"Toolbar"},{"attributes":{},"id":"8d6a0a9b-b62d-4163-8859-ed1acdd89519","type":"SaveTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e3e01968-1cb4-4740-aacd-59561da80b93","type":"Line"},{"attributes":{"overlay":{"id":"125e3399-7b38-46e5-bdb1-9f58bd47e643","type":"BoxAnnotation"}},"id":"b57a95e8-237a-4e8a-96bb-4d87b6b08810","type":"BoxZoomTool"},{"attributes":{},"id":"3cd73aad-0b67-402e-85d0-7d7b65002de3","type":"LinearScale"},{"attributes":{},"id":"5e0fd240-8ae9-421e-9ea0-20fc3c1ddbdf","type":"HelpTool"},{"attributes":{"callback":null},"id":"72a881a7-6787-4b26-97c0-6a8631291df2","type":"DataRange1d"},{"attributes":{"plot":{"id":"c4eb60df-19d6-43a7-9f35-949efe793d08","subtype":"Figure","type":"Plot"},"ticker":{"id":"148dc32a-128f-4892-9f8d-cc20c3a66b4f","type":"BasicTicker"}},"id":"8ec71ec5-c1ac-4d90-8b71-d4ff0e3a02d6","type":"Grid"},{"attributes":{},"id":"733c23d0-9103-4114-a7bd-5007091fed93","type":"BasicTickFormatter"},{"attributes":{},"id":"e6d1537e-c25a-4e20-ae4b-e33c0e205e81","type":"LinearScale"},{"attributes":{"formatter":{"id":"733c23d0-9103-4114-a7bd-5007091fed93","type":"BasicTickFormatter"},"plot":{"id":"c4eb60df-19d6-43a7-9f35-949efe793d08","subtype":"Figure","type":"Plot"},"ticker":{"id":"148dc32a-128f-4892-9f8d-cc20c3a66b4f","type":"BasicTicker"}},"id":"f6046f9e-10c3-411d-bdba-6ac6dd7e82c0","type":"LinearAxis"},{"attributes":{},"id":"b3834fc7-3969-4c0f-aa9e-92166943c890","type":"ResetTool"},{"attributes":{},"id":"148dc32a-128f-4892-9f8d-cc20c3a66b4f","type":"BasicTicker"},{"attributes":{},"id":"8194cc12-5728-45cc-aa2f-401576762b8f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8194cc12-5728-45cc-aa2f-401576762b8f","type":"BasicTickFormatter"},"plot":{"id":"c4eb60df-19d6-43a7-9f35-949efe793d08","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f14b7d9-ff1a-426e-8670-6dc351329c28","type":"BasicTicker"}},"id":"824b4bfa-d076-4c16-a534-59fbe69bc455","type":"LinearAxis"},{"attributes":{},"id":"3f14b7d9-ff1a-426e-8670-6dc351329c28","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"c4eb60df-19d6-43a7-9f35-949efe793d08","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"5f553729-59b9-475d-babe-a38866a3f7a4","type":"LatexLabel"},{"attributes":{"dimension":1,"plot":{"id":"c4eb60df-19d6-43a7-9f35-949efe793d08","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f14b7d9-ff1a-426e-8670-6dc351329c28","type":"BasicTicker"}},"id":"078bf8d7-7636-4a0a-a12c-25b482ae0165","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"468385c9-926d-4a98-89ec-8087eb283409","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"1f26b917-ba46-4832-b221-862dd892805b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1f26b917-ba46-4832-b221-862dd892805b","type":"ColumnDataSource"},"glyph":{"id":"e3e01968-1cb4-4740-aacd-59561da80b93","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"468385c9-926d-4a98-89ec-8087eb283409","type":"Line"},"selection_glyph":null,"view":{"id":"0edae890-1181-496d-a7cf-50e2950aa9aa","type":"CDSView"}},"id":"3e48b8ab-d73e-47b4-b7d6-fb9425a1fe60","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1f26b917-ba46-4832-b221-862dd892805b","type":"ColumnDataSource"}},"id":"0edae890-1181-496d-a7cf-50e2950aa9aa","type":"CDSView"}],"root_ids":["c4eb60df-19d6-43a7-9f35-949efe793d08"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"809105c5-ef94-4915-b3e0-356eb05ec08d","elementid":"03dcd409-1b1e-4502-90a6-39f3b1bf81f1","modelid":"c4eb60df-19d6-43a7-9f35-949efe793d08"}];
                
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
