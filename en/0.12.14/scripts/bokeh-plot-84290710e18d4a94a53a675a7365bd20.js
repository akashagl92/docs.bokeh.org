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
      };var element = document.getElementById("94be1330-6b21-4719-91f8-73dcb0bcac40");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '94be1330-6b21-4719-91f8-73dcb0bcac40' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label": function(require, module, exports) {
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
                    
                  var docs_json = '{"cccdbe5c-f112-42b8-bfd4-403133529ec3":{"roots":{"references":[{"attributes":{},"id":"7ab86e33-e612-4a41-a658-c30f0602016e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2ac8279d-ab17-4f2f-afc1-83ef4d44def3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ab86e33-e612-4a41-a658-c30f0602016e","type":"BasicTicker"}},"id":"da5f769f-9d81-4667-a1ad-dbdd742926a9","type":"Grid"},{"attributes":{},"id":"6ed850cd-f7df-420f-9c2f-b823e232b851","type":"PanTool"},{"attributes":{"data_source":{"id":"f3611379-d363-47d6-a179-f13c0a773964","type":"ColumnDataSource"},"glyph":{"id":"e4019472-352b-44db-9e49-2f091ef4f1a5","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4e90983b-d1a3-4007-b0b2-d2a45cdd2b5a","type":"Line"},"selection_glyph":null,"view":{"id":"f609ecce-c069-4699-ad7d-a12fdd98a3a0","type":"CDSView"}},"id":"2aa9d79f-2afb-4067-897e-a7ce3203eac9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"f3611379-d363-47d6-a179-f13c0a773964","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"5e5972eb-33ec-4594-8c59-a6023cc95ec8","type":"LinearAxis"}],"left":[{"id":"34116014-4f5e-4920-b18a-2c722d0d4a0e","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"5e5972eb-33ec-4594-8c59-a6023cc95ec8","type":"LinearAxis"},{"id":"0d9afcd5-2a1b-40f3-905a-ad91fb404b00","type":"Grid"},{"id":"34116014-4f5e-4920-b18a-2c722d0d4a0e","type":"LinearAxis"},{"id":"da5f769f-9d81-4667-a1ad-dbdd742926a9","type":"Grid"},{"id":"d9c1a8b8-0ae1-4575-93fd-8f01a64685dd","type":"BoxAnnotation"},{"id":"2aa9d79f-2afb-4067-897e-a7ce3203eac9","type":"GlyphRenderer"},{"id":"cfe694c9-d53e-4e8c-9e21-45840ca78239","type":"LatexLabel"}],"title":{"id":"304bdaba-cc30-4c3f-8cbf-dfbbc577a46f","type":"Title"},"toolbar":{"id":"35d30506-75d4-4384-af09-b632501f1134","type":"Toolbar"},"x_range":{"id":"0e86e41b-e5b0-4b39-a39a-f3cbc7ace2e3","type":"DataRange1d"},"x_scale":{"id":"7653536d-71e5-4742-9cf9-2efbb0ea25e7","type":"LinearScale"},"y_range":{"id":"44c038d9-4b88-45e1-aa68-d7912a67ce6f","type":"DataRange1d"},"y_scale":{"id":"4bdc44d9-a064-40f7-993d-4b45e7d3f869","type":"LinearScale"}},"id":"2ac8279d-ab17-4f2f-afc1-83ef4d44def3","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d9c1a8b8-0ae1-4575-93fd-8f01a64685dd","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"304bdaba-cc30-4c3f-8cbf-dfbbc577a46f","type":"Title"},{"attributes":{"source":{"id":"f3611379-d363-47d6-a179-f13c0a773964","type":"ColumnDataSource"}},"id":"f609ecce-c069-4699-ad7d-a12fdd98a3a0","type":"CDSView"},{"attributes":{"callback":null},"id":"0e86e41b-e5b0-4b39-a39a-f3cbc7ace2e3","type":"DataRange1d"},{"attributes":{"overlay":{"id":"d9c1a8b8-0ae1-4575-93fd-8f01a64685dd","type":"BoxAnnotation"}},"id":"d948e06c-bcdf-4863-91fb-e2011b3803e9","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6ed850cd-f7df-420f-9c2f-b823e232b851","type":"PanTool"},{"id":"03a2febd-bab8-4a48-aace-5c56684def0a","type":"WheelZoomTool"},{"id":"d948e06c-bcdf-4863-91fb-e2011b3803e9","type":"BoxZoomTool"},{"id":"5d7121c8-41a3-4f08-b05b-4463b4730b5a","type":"SaveTool"},{"id":"dc1ee0f1-d15b-496c-85cf-cadb77d7d950","type":"ResetTool"},{"id":"29008393-245b-45f9-9d7a-22674760ee61","type":"HelpTool"}]},"id":"35d30506-75d4-4384-af09-b632501f1134","type":"Toolbar"},{"attributes":{},"id":"03a2febd-bab8-4a48-aace-5c56684def0a","type":"WheelZoomTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"e4019472-352b-44db-9e49-2f091ef4f1a5","type":"Line"},{"attributes":{},"id":"dc1ee0f1-d15b-496c-85cf-cadb77d7d950","type":"ResetTool"},{"attributes":{},"id":"7653536d-71e5-4742-9cf9-2efbb0ea25e7","type":"LinearScale"},{"attributes":{},"id":"4bdc44d9-a064-40f7-993d-4b45e7d3f869","type":"LinearScale"},{"attributes":{},"id":"29008393-245b-45f9-9d7a-22674760ee61","type":"HelpTool"},{"attributes":{"callback":null},"id":"44c038d9-4b88-45e1-aa68-d7912a67ce6f","type":"DataRange1d"},{"attributes":{"plot":{"id":"2ac8279d-ab17-4f2f-afc1-83ef4d44def3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f489de8a-d2e5-42cf-abb4-3a2f19d62484","type":"BasicTicker"}},"id":"0d9afcd5-2a1b-40f3-905a-ad91fb404b00","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"2ac8279d-ab17-4f2f-afc1-83ef4d44def3","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\\\sum_{n=1}^\\\\infty\\\\frac{-e^{i\\\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"cfe694c9-d53e-4e8c-9e21-45840ca78239","type":"LatexLabel"},{"attributes":{},"id":"5d7121c8-41a3-4f08-b05b-4463b4730b5a","type":"SaveTool"},{"attributes":{"formatter":{"id":"0c363976-daa2-4ee6-a0bc-2edbe6b886e7","type":"BasicTickFormatter"},"plot":{"id":"2ac8279d-ab17-4f2f-afc1-83ef4d44def3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f489de8a-d2e5-42cf-abb4-3a2f19d62484","type":"BasicTicker"}},"id":"5e5972eb-33ec-4594-8c59-a6023cc95ec8","type":"LinearAxis"},{"attributes":{},"id":"0c363976-daa2-4ee6-a0bc-2edbe6b886e7","type":"BasicTickFormatter"},{"attributes":{},"id":"f489de8a-d2e5-42cf-abb4-3a2f19d62484","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3267f8ed-7751-4f6e-821a-850abbe17e19","type":"BasicTickFormatter"},"plot":{"id":"2ac8279d-ab17-4f2f-afc1-83ef4d44def3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ab86e33-e612-4a41-a658-c30f0602016e","type":"BasicTicker"}},"id":"34116014-4f5e-4920-b18a-2c722d0d4a0e","type":"LinearAxis"},{"attributes":{},"id":"3267f8ed-7751-4f6e-821a-850abbe17e19","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4e90983b-d1a3-4007-b0b2-d2a45cdd2b5a","type":"Line"}],"root_ids":["2ac8279d-ab17-4f2f-afc1-83ef4d44def3"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"cccdbe5c-f112-42b8-bfd4-403133529ec3","elementid":"94be1330-6b21-4719-91f8-73dcb0bcac40","modelid":"2ac8279d-ab17-4f2f-afc1-83ef4d44def3"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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