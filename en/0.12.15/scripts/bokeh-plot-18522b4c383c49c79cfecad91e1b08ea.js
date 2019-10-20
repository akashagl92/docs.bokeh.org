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
      };var element = document.getElementById("2d626a00-90ce-49a0-b099-326351afde9f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d626a00-90ce-49a0-b099-326351afde9f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label": function(require, module, exports) {
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
                    
                  var docs_json = '{"2389ecdc-2809-495d-9c3f-e6c5aff5a8e8":{"roots":{"references":[{"attributes":{"formatter":{"id":"1d513a04-2d23-4744-a8a8-27b49c1edd40","type":"BasicTickFormatter"},"plot":{"id":"7fa6be9b-4da6-4ba8-9f7a-b95cddd78068","subtype":"Figure","type":"Plot"},"ticker":{"id":"a13b9d77-26a8-4e7d-94df-185124c8bd08","type":"BasicTicker"}},"id":"bc3cadea-9a52-4464-b068-325d4fb9421b","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}},"selected":null,"selection_policy":null},"id":"4de0929a-0b8d-43e2-a2cc-445c0c047139","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c928c9a-b203-48db-b91c-760d60110ad5","type":"PanTool"},{"id":"1723b748-40f4-4f45-82b4-6037908a01e1","type":"WheelZoomTool"},{"id":"073c978b-c80e-4364-9264-a517769c5c02","type":"BoxZoomTool"},{"id":"fc54e7dc-4e06-4608-aeac-abd6b3b9ddec","type":"SaveTool"},{"id":"39f4b2ba-5206-4bfc-b31a-05a8b20f9289","type":"ResetTool"},{"id":"b2151be2-8bbe-49cf-b6cc-ae90c02c2e49","type":"HelpTool"}]},"id":"6909a284-be3f-41ad-b00d-0f07010afb02","type":"Toolbar"},{"attributes":{"below":[{"id":"bc3cadea-9a52-4464-b068-325d4fb9421b","type":"LinearAxis"}],"left":[{"id":"a473f8f7-3e09-4b45-a84f-e73362644415","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"bc3cadea-9a52-4464-b068-325d4fb9421b","type":"LinearAxis"},{"id":"2423a258-baa0-4da3-b634-3e755120c7dd","type":"Grid"},{"id":"a473f8f7-3e09-4b45-a84f-e73362644415","type":"LinearAxis"},{"id":"4b9a96b5-404c-40d8-a36d-046d1114e753","type":"Grid"},{"id":"134fb415-5ec3-4ecb-bc35-ff19609f99b0","type":"BoxAnnotation"},{"id":"21aad806-0c47-4525-a934-402e5a872971","type":"GlyphRenderer"},{"id":"eee6ca91-c44a-443f-9361-43c59c285641","type":"LatexLabel"}],"title":{"id":"e9b7156b-e12f-42bd-b770-66bc83e9950a","type":"Title"},"toolbar":{"id":"6909a284-be3f-41ad-b00d-0f07010afb02","type":"Toolbar"},"x_range":{"id":"73e33d51-f390-476c-8441-8483d1dd2267","type":"DataRange1d"},"x_scale":{"id":"eed47f28-d4ca-4d9b-821a-03d065f0484b","type":"LinearScale"},"y_range":{"id":"a8b63e47-9cc0-4587-8f31-c75c320750d6","type":"DataRange1d"},"y_scale":{"id":"87fbdf2d-0b66-45ee-93ec-1919fd326c92","type":"LinearScale"}},"id":"7fa6be9b-4da6-4ba8-9f7a-b95cddd78068","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b42f6845-e85d-4919-93f4-db5d0362dff8","type":"BasicTickFormatter"},{"attributes":{},"id":"87fbdf2d-0b66-45ee-93ec-1919fd326c92","type":"LinearScale"},{"attributes":{},"id":"b2151be2-8bbe-49cf-b6cc-ae90c02c2e49","type":"HelpTool"},{"attributes":{"callback":null},"id":"a8b63e47-9cc0-4587-8f31-c75c320750d6","type":"DataRange1d"},{"attributes":{"source":{"id":"4de0929a-0b8d-43e2-a2cc-445c0c047139","type":"ColumnDataSource"}},"id":"8494e78d-8d7d-4745-9504-732184085750","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"3b0e2fbd-a09c-4903-81c4-70f35a420678","type":"Line"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"e9b7156b-e12f-42bd-b770-66bc83e9950a","type":"Title"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"7fa6be9b-4da6-4ba8-9f7a-b95cddd78068","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\\\sum_{n=1}^\\\\infty\\\\frac{-e^{i\\\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"eee6ca91-c44a-443f-9361-43c59c285641","type":"LatexLabel"},{"attributes":{"dimension":1,"plot":{"id":"7fa6be9b-4da6-4ba8-9f7a-b95cddd78068","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbd3633d-3bd8-47cf-ac6d-c56a828c497d","type":"BasicTicker"}},"id":"4b9a96b5-404c-40d8-a36d-046d1114e753","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"134fb415-5ec3-4ecb-bc35-ff19609f99b0","type":"BoxAnnotation"},{"attributes":{},"id":"a13b9d77-26a8-4e7d-94df-185124c8bd08","type":"BasicTicker"},{"attributes":{"overlay":{"id":"134fb415-5ec3-4ecb-bc35-ff19609f99b0","type":"BoxAnnotation"}},"id":"073c978b-c80e-4364-9264-a517769c5c02","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"4de0929a-0b8d-43e2-a2cc-445c0c047139","type":"ColumnDataSource"},"glyph":{"id":"3b0e2fbd-a09c-4903-81c4-70f35a420678","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f36d31d-de4b-4cc8-91e9-b5a0cf02cb1f","type":"Line"},"selection_glyph":null,"view":{"id":"8494e78d-8d7d-4745-9504-732184085750","type":"CDSView"}},"id":"21aad806-0c47-4525-a934-402e5a872971","type":"GlyphRenderer"},{"attributes":{},"id":"dbd3633d-3bd8-47cf-ac6d-c56a828c497d","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"3f36d31d-de4b-4cc8-91e9-b5a0cf02cb1f","type":"Line"},{"attributes":{"formatter":{"id":"b42f6845-e85d-4919-93f4-db5d0362dff8","type":"BasicTickFormatter"},"plot":{"id":"7fa6be9b-4da6-4ba8-9f7a-b95cddd78068","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbd3633d-3bd8-47cf-ac6d-c56a828c497d","type":"BasicTicker"}},"id":"a473f8f7-3e09-4b45-a84f-e73362644415","type":"LinearAxis"},{"attributes":{},"id":"39f4b2ba-5206-4bfc-b31a-05a8b20f9289","type":"ResetTool"},{"attributes":{"callback":null},"id":"73e33d51-f390-476c-8441-8483d1dd2267","type":"DataRange1d"},{"attributes":{},"id":"fc54e7dc-4e06-4608-aeac-abd6b3b9ddec","type":"SaveTool"},{"attributes":{"plot":{"id":"7fa6be9b-4da6-4ba8-9f7a-b95cddd78068","subtype":"Figure","type":"Plot"},"ticker":{"id":"a13b9d77-26a8-4e7d-94df-185124c8bd08","type":"BasicTicker"}},"id":"2423a258-baa0-4da3-b634-3e755120c7dd","type":"Grid"},{"attributes":{},"id":"eed47f28-d4ca-4d9b-821a-03d065f0484b","type":"LinearScale"},{"attributes":{},"id":"1723b748-40f4-4f45-82b4-6037908a01e1","type":"WheelZoomTool"},{"attributes":{},"id":"1d513a04-2d23-4744-a8a8-27b49c1edd40","type":"BasicTickFormatter"},{"attributes":{},"id":"2c928c9a-b203-48db-b91c-760d60110ad5","type":"PanTool"}],"root_ids":["7fa6be9b-4da6-4ba8-9f7a-b95cddd78068"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"2389ecdc-2809-495d-9c3f-e6c5aff5a8e8","elementid":"2d626a00-90ce-49a0-b099-326351afde9f","modelid":"7fa6be9b-4da6-4ba8-9f7a-b95cddd78068"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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