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
      };var element = document.getElementById("433fd378-51bd-47d4-8a83-408a73975df6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '433fd378-51bd-47d4-8a83-408a73975df6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_4d245a4961fc4045b086aa2119f0ad16.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_4d245a4961fc4045b086aa2119f0ad16.latex_label": function(require, module, exports) {
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
                    var docs_json = '{"57a69642-254f-47b0-aebd-4b54cbfa328c":{"roots":{"references":[{"attributes":{},"id":"25004562-3150-4fb9-abd0-d85bf0bf76e6","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"8f1a3e89-0139-439c-a4b2-b7a76da63fc6","type":"Line"},{"attributes":{},"id":"6268be29-28f9-4d84-8a31-f02fb721415f","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"efc5194d-9234-46d3-bfba-9e852889dc1a","type":"ColumnDataSource"}},"id":"59338210-fdd1-4d9d-8969-b1a23d3d97f5","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"7050253a-471d-4449-8a05-f3c9531aae51","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\\\sum_{n=1}^\\\\infty\\\\frac{-e^{i\\\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"2e93c330-8dc3-4092-b26c-6651d6b32136","type":"LatexLabel"},{"attributes":{"overlay":{"id":"8ebefb14-a395-415e-b5c9-c334fe42d56f","type":"BoxAnnotation"}},"id":"f71a4bf3-a704-4d3f-86d3-1260a958eab7","type":"BoxZoomTool"},{"attributes":{},"id":"bb6e8511-4eda-4d2f-b938-da450b064dd0","type":"BasicTickFormatter"},{"attributes":{},"id":"9143da70-05c4-4cda-9614-8413874e68ab","type":"SaveTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"cac41a9f-da3f-4197-aedd-45db15bfefb3","type":"Line"},{"attributes":{"below":[{"id":"1385a288-b278-49bb-a71e-60f2a1026beb","type":"LinearAxis"}],"left":[{"id":"9a998f42-c6d5-4025-ba78-75105dcab085","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"1385a288-b278-49bb-a71e-60f2a1026beb","type":"LinearAxis"},{"id":"db80cf8e-b8a7-467c-a787-0030b67473d3","type":"Grid"},{"id":"9a998f42-c6d5-4025-ba78-75105dcab085","type":"LinearAxis"},{"id":"919acf97-1f96-4442-8d0e-901cc0570469","type":"Grid"},{"id":"8ebefb14-a395-415e-b5c9-c334fe42d56f","type":"BoxAnnotation"},{"id":"4edaf678-4766-4fa5-bf26-ba821230be21","type":"GlyphRenderer"},{"id":"2e93c330-8dc3-4092-b26c-6651d6b32136","type":"LatexLabel"}],"title":{"id":"1f53267f-8fc8-4b95-b48d-cecdd12115a2","type":"Title"},"toolbar":{"id":"d67906f3-f77d-4c96-9e34-fd573df4a8a1","type":"Toolbar"},"x_range":{"id":"3862fbbb-761c-4cce-8093-3f8bec1ab811","type":"DataRange1d"},"x_scale":{"id":"119ecdd9-86cf-4740-ab37-0672a214fe4f","type":"LinearScale"},"y_range":{"id":"08cce523-a144-49ef-abb1-04a41ba6db18","type":"DataRange1d"},"y_scale":{"id":"7fd149be-57cd-49ff-8a45-31b7676c0825","type":"LinearScale"}},"id":"7050253a-471d-4449-8a05-f3c9531aae51","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"1f53267f-8fc8-4b95-b48d-cecdd12115a2","type":"Title"},{"attributes":{"callback":null},"id":"3862fbbb-761c-4cce-8093-3f8bec1ab811","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dbc5f8a8-976a-4a28-8786-4fb75da92049","type":"PanTool"},{"id":"25004562-3150-4fb9-abd0-d85bf0bf76e6","type":"WheelZoomTool"},{"id":"f71a4bf3-a704-4d3f-86d3-1260a958eab7","type":"BoxZoomTool"},{"id":"9143da70-05c4-4cda-9614-8413874e68ab","type":"SaveTool"},{"id":"3cf30907-afa4-4063-a380-87e24c63ffb5","type":"ResetTool"},{"id":"fb733455-f5dd-4512-b297-baae6e0fd93b","type":"HelpTool"}]},"id":"d67906f3-f77d-4c96-9e34-fd573df4a8a1","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8ebefb14-a395-415e-b5c9-c334fe42d56f","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"efc5194d-9234-46d3-bfba-9e852889dc1a","type":"ColumnDataSource"},{"attributes":{},"id":"dbc5f8a8-976a-4a28-8786-4fb75da92049","type":"PanTool"},{"attributes":{},"id":"119ecdd9-86cf-4740-ab37-0672a214fe4f","type":"LinearScale"},{"attributes":{},"id":"7fd149be-57cd-49ff-8a45-31b7676c0825","type":"LinearScale"},{"attributes":{"callback":null},"id":"08cce523-a144-49ef-abb1-04a41ba6db18","type":"DataRange1d"},{"attributes":{"data_source":{"id":"efc5194d-9234-46d3-bfba-9e852889dc1a","type":"ColumnDataSource"},"glyph":{"id":"cac41a9f-da3f-4197-aedd-45db15bfefb3","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8f1a3e89-0139-439c-a4b2-b7a76da63fc6","type":"Line"},"selection_glyph":null,"view":{"id":"59338210-fdd1-4d9d-8969-b1a23d3d97f5","type":"CDSView"}},"id":"4edaf678-4766-4fa5-bf26-ba821230be21","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7050253a-471d-4449-8a05-f3c9531aae51","subtype":"Figure","type":"Plot"},"ticker":{"id":"3438ecfc-f342-42e3-811a-1c36afb54357","type":"BasicTicker"}},"id":"db80cf8e-b8a7-467c-a787-0030b67473d3","type":"Grid"},{"attributes":{},"id":"fb733455-f5dd-4512-b297-baae6e0fd93b","type":"HelpTool"},{"attributes":{"formatter":{"id":"bb6e8511-4eda-4d2f-b938-da450b064dd0","type":"BasicTickFormatter"},"plot":{"id":"7050253a-471d-4449-8a05-f3c9531aae51","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3fef69a-5c85-492c-9b24-a159b4dc5392","type":"BasicTicker"}},"id":"9a998f42-c6d5-4025-ba78-75105dcab085","type":"LinearAxis"},{"attributes":{},"id":"3cf30907-afa4-4063-a380-87e24c63ffb5","type":"ResetTool"},{"attributes":{"formatter":{"id":"6268be29-28f9-4d84-8a31-f02fb721415f","type":"BasicTickFormatter"},"plot":{"id":"7050253a-471d-4449-8a05-f3c9531aae51","subtype":"Figure","type":"Plot"},"ticker":{"id":"3438ecfc-f342-42e3-811a-1c36afb54357","type":"BasicTicker"}},"id":"1385a288-b278-49bb-a71e-60f2a1026beb","type":"LinearAxis"},{"attributes":{},"id":"e3fef69a-5c85-492c-9b24-a159b4dc5392","type":"BasicTicker"},{"attributes":{},"id":"3438ecfc-f342-42e3-811a-1c36afb54357","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7050253a-471d-4449-8a05-f3c9531aae51","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3fef69a-5c85-492c-9b24-a159b4dc5392","type":"BasicTicker"}},"id":"919acf97-1f96-4442-8d0e-901cc0570469","type":"Grid"}],"root_ids":["7050253a-471d-4449-8a05-f3c9531aae51"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"57a69642-254f-47b0-aebd-4b54cbfa328c","elementid":"433fd378-51bd-47d4-8a83-408a73975df6","modelid":"7050253a-471d-4449-8a05-f3c9531aae51"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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