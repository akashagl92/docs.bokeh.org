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
      };var element = document.getElementById("7387bc63-4d1f-48cb-a28c-cbe03b1f067a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7387bc63-4d1f-48cb-a28c-cbe03b1f067a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_df57e6d13ff744c395282f69bdb1d1d0.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_df57e6d13ff744c395282f69bdb1d1d0.latex_label": function(require, module, exports) {
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
          var label_1 = require("models/annotations/label");
          exports.LatexLabelView = /** @class */ (function (_super) {
              __extends(LatexLabelView, _super);
              function LatexLabelView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              LatexLabelView.prototype.render = function () {
                  var angle, panel, ref, sx, sy, xscale, yscale;
                  //--- Start of copied section from ``Label.render`` implementation
                  // Here because AngleSpec does units tranform and label doesn't support specs
                  switch (this.model.angle_units) {
                      case "rad":
                          angle = -1 * this.model.angle;
                          break;
                      case "deg":
                          angle = -1 * this.model.angle * Math.PI / 180.0;
                  }
                  panel = (ref = this.model.panel) != null ? ref : this.plot_view.frame;
                  xscale = this.plot_view.frame.xscales[this.model.x_range_name];
                  yscale = this.plot_view.frame.yscales[this.model.y_range_name];
                  sx = this.model.x_units === "data" ? xscale.compute(this.model.x) : panel.xview.compute(this.model.x);
                  sy = this.model.y_units === "data" ? yscale.compute(this.model.y) : panel.yview.compute(this.model.y);
                  sx += this.model.x_offset;
                  sy -= this.model.y_offset;
                  //--- End of copied section from ``Label.render`` implementation
                  // Must render as superpositioned div (not on canvas) so that KaTex
                  // css can properly style the text
                  this._css_text(this.plot_view.canvas_view.ctx, "", sx, sy, angle);
                  // ``katex`` is loaded into the global window at runtime
                  // katex.renderToString returns a html ``span`` element
                  return katex.render(this.model.text, this.el, {
                      displayMode: true
                  });
              };
              return LatexLabelView;
          }(label_1.LabelView));
          exports.LatexLabel = (function () {
              var LatexLabel = /** @class */ (function (_super) {
                  __extends(LatexLabel, _super);
                  function LatexLabel() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return LatexLabel;
              }(label_1.Label));
              ;
              LatexLabel.prototype.type = 'LatexLabel';
              LatexLabel.prototype.default_view = exports.LatexLabelView;
              return LatexLabel;
          })();
          
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
                    
                  var docs_json = '{"1480a157-031f-4bdd-80f5-9f0964985b92":{"roots":{"references":[{"attributes":{"data_source":{"id":"63b305d0-40b4-4f00-8e57-67545088a793","type":"ColumnDataSource"},"glyph":{"id":"5c3b0218-60e4-44c9-b92e-0245a3fc439e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3db13f7e-29b0-4cb9-ae9c-35b3915ac9de","type":"Line"},"selection_glyph":null,"view":{"id":"33ee19ee-aa32-48e0-b193-8a8ea14360a4","type":"CDSView"}},"id":"40ac139f-4c1b-4aa3-b9ae-a395ab9fb605","type":"GlyphRenderer"},{"attributes":{"source":{"id":"63b305d0-40b4-4f00-8e57-67545088a793","type":"ColumnDataSource"}},"id":"33ee19ee-aa32-48e0-b193-8a8ea14360a4","type":"CDSView"},{"attributes":{"below":[{"id":"dc1f3f33-caa8-40d5-8555-b96971c8dbdc","type":"LinearAxis"}],"left":[{"id":"d17d0d11-f9dd-4b65-bb50-7f0e6fe58223","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"dc1f3f33-caa8-40d5-8555-b96971c8dbdc","type":"LinearAxis"},{"id":"9b19fa5e-440a-4a3f-a46e-87a69940c9c0","type":"Grid"},{"id":"d17d0d11-f9dd-4b65-bb50-7f0e6fe58223","type":"LinearAxis"},{"id":"3400e5cd-5412-454e-81fb-0c2ebe51cdaf","type":"Grid"},{"id":"25a8ea09-d950-49f6-87e1-4dec61d48a6b","type":"BoxAnnotation"},{"id":"40ac139f-4c1b-4aa3-b9ae-a395ab9fb605","type":"GlyphRenderer"},{"id":"dccbab91-4dc0-4e11-8ddb-0f10e775f15b","type":"LatexLabel"}],"title":{"id":"5003401a-d7c3-4b34-bf2a-675f2cc5f53f","type":"Title"},"toolbar":{"id":"e11c2ccf-ae19-4a31-8970-c35808e8cd3a","type":"Toolbar"},"x_range":{"id":"d09303ad-a085-408e-9d3f-640ec3118db4","type":"DataRange1d"},"x_scale":{"id":"d6346ca1-0eb2-4dcf-ac39-c4a1ce3afc53","type":"LinearScale"},"y_range":{"id":"48a998b9-cbf6-461b-99f0-74c38914ebc5","type":"DataRange1d"},"y_scale":{"id":"03f84a7c-90c7-4f0b-8488-64b4d0755417","type":"LinearScale"}},"id":"1edf516e-c95c-42d3-8d2c-e63229c502c9","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25a8ea09-d950-49f6-87e1-4dec61d48a6b","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"5003401a-d7c3-4b34-bf2a-675f2cc5f53f","type":"Title"},{"attributes":{},"id":"b4c01490-958a-469b-9a08-1ad4586b03d7","type":"PanTool"},{"attributes":{"callback":null},"id":"d09303ad-a085-408e-9d3f-640ec3118db4","type":"DataRange1d"},{"attributes":{},"id":"cef7b5eb-f10d-4bc2-959b-70613fc190d1","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b4c01490-958a-469b-9a08-1ad4586b03d7","type":"PanTool"},{"id":"cef7b5eb-f10d-4bc2-959b-70613fc190d1","type":"WheelZoomTool"},{"id":"e29831d8-93f4-4dc8-9a64-de93bcde0e4f","type":"BoxZoomTool"},{"id":"9565addf-d9fc-4808-bbfd-839fc96f6bb4","type":"SaveTool"},{"id":"82f0011d-7c82-4cfa-a054-59324b0860c5","type":"ResetTool"},{"id":"343d63bc-ed94-4430-aab3-8e6f757f0d7f","type":"HelpTool"}]},"id":"e11c2ccf-ae19-4a31-8970-c35808e8cd3a","type":"Toolbar"},{"attributes":{},"id":"9565addf-d9fc-4808-bbfd-839fc96f6bb4","type":"SaveTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5c3b0218-60e4-44c9-b92e-0245a3fc439e","type":"Line"},{"attributes":{"overlay":{"id":"25a8ea09-d950-49f6-87e1-4dec61d48a6b","type":"BoxAnnotation"}},"id":"e29831d8-93f4-4dc8-9a64-de93bcde0e4f","type":"BoxZoomTool"},{"attributes":{},"id":"d6346ca1-0eb2-4dcf-ac39-c4a1ce3afc53","type":"LinearScale"},{"attributes":{},"id":"343d63bc-ed94-4430-aab3-8e6f757f0d7f","type":"HelpTool"},{"attributes":{"callback":null},"id":"48a998b9-cbf6-461b-99f0-74c38914ebc5","type":"DataRange1d"},{"attributes":{"plot":{"id":"1edf516e-c95c-42d3-8d2c-e63229c502c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ae41051-584d-4fd9-9fd3-296fc272a062","type":"BasicTicker"}},"id":"9b19fa5e-440a-4a3f-a46e-87a69940c9c0","type":"Grid"},{"attributes":{},"id":"03f84a7c-90c7-4f0b-8488-64b4d0755417","type":"LinearScale"},{"attributes":{"formatter":{"id":"873e86d8-c1cc-4ba8-b0ca-1418f44d8d64","type":"BasicTickFormatter"},"plot":{"id":"1edf516e-c95c-42d3-8d2c-e63229c502c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ae41051-584d-4fd9-9fd3-296fc272a062","type":"BasicTicker"}},"id":"dc1f3f33-caa8-40d5-8555-b96971c8dbdc","type":"LinearAxis"},{"attributes":{},"id":"82f0011d-7c82-4cfa-a054-59324b0860c5","type":"ResetTool"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"1edf516e-c95c-42d3-8d2c-e63229c502c9","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\\\sum_{n=1}^\\\\infty\\\\frac{-e^{i\\\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"dccbab91-4dc0-4e11-8ddb-0f10e775f15b","type":"LatexLabel"},{"attributes":{},"id":"4ae41051-584d-4fd9-9fd3-296fc272a062","type":"BasicTicker"},{"attributes":{},"id":"873e86d8-c1cc-4ba8-b0ca-1418f44d8d64","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"98117134-6ac1-46ba-90d6-d4fda3f58e4e","type":"BasicTickFormatter"},"plot":{"id":"1edf516e-c95c-42d3-8d2c-e63229c502c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"6bff8075-002f-41d3-9fbd-8afa0a9e96b1","type":"BasicTicker"}},"id":"d17d0d11-f9dd-4b65-bb50-7f0e6fe58223","type":"LinearAxis"},{"attributes":{},"id":"6bff8075-002f-41d3-9fbd-8afa0a9e96b1","type":"BasicTicker"},{"attributes":{},"id":"98117134-6ac1-46ba-90d6-d4fda3f58e4e","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"1edf516e-c95c-42d3-8d2c-e63229c502c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"6bff8075-002f-41d3-9fbd-8afa0a9e96b1","type":"BasicTicker"}},"id":"3400e5cd-5412-454e-81fb-0c2ebe51cdaf","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"3db13f7e-29b0-4cb9-ae9c-35b3915ac9de","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"63b305d0-40b4-4f00-8e57-67545088a793","type":"ColumnDataSource"}],"root_ids":["1edf516e-c95c-42d3-8d2c-e63229c502c9"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"1480a157-031f-4bdd-80f5-9f0964985b92","elementid":"7387bc63-4d1f-48cb-a28c-cbe03b1f067a","modelid":"1edf516e-c95c-42d3-8d2c-e63229c502c9"}];
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
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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