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
      };var element = document.getElementById("a0e82290-395a-4b26-bf11-c6a78d9059c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0e82290-395a-4b26-bf11-c6a78d9059c2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_da3193bc49874d5cb629b293ffd9b45e.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_da3193bc49874d5cb629b293ffd9b45e.latex_label": function(require, module, exports) {
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
                    
                  var docs_json = '{"57489aa8-d0ee-437e-8d81-e616d7721ec3":{"roots":{"references":[{"attributes":{"formatter":{"id":"e04075bf-8a77-4e5e-ac06-f071a833bd60","type":"BasicTickFormatter"},"plot":{"id":"6f626426-1b5c-4eaa-acd8-e99d2e8c2f8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9a518d0-b05d-4f84-b631-f263f8cbcfbd","type":"BasicTicker"}},"id":"725e434b-02b0-4898-8f0f-b329d113279e","type":"LinearAxis"},{"attributes":{},"id":"75b0fbf0-fc63-4373-a57c-6116c7a8dec5","type":"ResetTool"},{"attributes":{"plot":{"id":"6f626426-1b5c-4eaa-acd8-e99d2e8c2f8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"94b5c3b5-a2bf-4e95-9f05-2fb24d3eeeab","type":"BasicTicker"}},"id":"c34d34af-ec31-467b-8657-094db450a4c2","type":"Grid"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"930e36ed-f991-41a9-ac93-5c2465873946","type":"Title"},{"attributes":{},"id":"35d6c1ab-cbc5-4d37-8f34-caac8cb2966a","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"7e5606a9-335f-460c-b50d-a13eab83fbc4","type":"BasicTickFormatter"},"plot":{"id":"6f626426-1b5c-4eaa-acd8-e99d2e8c2f8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"94b5c3b5-a2bf-4e95-9f05-2fb24d3eeeab","type":"BasicTicker"}},"id":"1db7f0b5-a022-44be-92dd-d5de29a56a37","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}},"selected":{"id":"7203fd23-66d1-419e-99c1-530144884a1b","type":"Selection"},"selection_policy":{"id":"d52c7183-9969-4d0c-be38-ae6aab8df1ae","type":"UnionRenderers"}},"id":"e4d7869f-cd97-418b-b348-21a3c1749612","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"1182c193-6d1a-4dea-a765-86e4736de347","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"25ab4cf9-568c-4246-9020-4eb0abb9fdb0","type":"PanTool"},{"id":"35d6c1ab-cbc5-4d37-8f34-caac8cb2966a","type":"WheelZoomTool"},{"id":"d12eb741-a591-4004-8338-a3b69df4ec53","type":"BoxZoomTool"},{"id":"16f59ab8-9145-4e12-9c0b-d0be0c9f38d9","type":"SaveTool"},{"id":"75b0fbf0-fc63-4373-a57c-6116c7a8dec5","type":"ResetTool"},{"id":"77663671-d3ae-4b9b-880f-4a703b976b23","type":"HelpTool"}]},"id":"2055a910-a0ed-4b11-88e2-1f028ed12e8e","type":"Toolbar"},{"attributes":{},"id":"e04075bf-8a77-4e5e-ac06-f071a833bd60","type":"BasicTickFormatter"},{"attributes":{},"id":"d52c7183-9969-4d0c-be38-ae6aab8df1ae","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"6f626426-1b5c-4eaa-acd8-e99d2e8c2f8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9a518d0-b05d-4f84-b631-f263f8cbcfbd","type":"BasicTicker"}},"id":"ac9a1e2c-f57f-4a94-aa87-425a10d94ed3","type":"Grid"},{"attributes":{},"id":"8008e7fb-a884-4457-ac28-650c4f56326b","type":"LinearScale"},{"attributes":{},"id":"3eed429e-7ecd-454e-abff-e68d2879e43f","type":"LinearScale"},{"attributes":{"data_source":{"id":"e4d7869f-cd97-418b-b348-21a3c1749612","type":"ColumnDataSource"},"glyph":{"id":"7dd9e7f0-3b77-4a3c-b316-ae2d5e0fdaff","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c0c2d4a3-7dd5-4c51-a11e-eaa385c12a41","type":"Line"},"selection_glyph":null,"view":{"id":"7ed87a2f-f25a-4391-bda9-812e8d0e7a09","type":"CDSView"}},"id":"dd8dd5f7-cf6c-4335-90c0-e8f3918a90e1","type":"GlyphRenderer"},{"attributes":{},"id":"77663671-d3ae-4b9b-880f-4a703b976b23","type":"HelpTool"},{"attributes":{},"id":"a9a518d0-b05d-4f84-b631-f263f8cbcfbd","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"7dd9e7f0-3b77-4a3c-b316-ae2d5e0fdaff","type":"Line"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"6f626426-1b5c-4eaa-acd8-e99d2e8c2f8b","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\\\sum_{n=1}^\\\\infty\\\\frac{-e^{i\\\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"c3dff6f7-a445-4105-84a5-7da618d61200","type":"LatexLabel"},{"attributes":{"below":[{"id":"1db7f0b5-a022-44be-92dd-d5de29a56a37","type":"LinearAxis"}],"left":[{"id":"725e434b-02b0-4898-8f0f-b329d113279e","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"1db7f0b5-a022-44be-92dd-d5de29a56a37","type":"LinearAxis"},{"id":"c34d34af-ec31-467b-8657-094db450a4c2","type":"Grid"},{"id":"725e434b-02b0-4898-8f0f-b329d113279e","type":"LinearAxis"},{"id":"ac9a1e2c-f57f-4a94-aa87-425a10d94ed3","type":"Grid"},{"id":"62b3966c-e149-4c87-b71c-d4fae9d43292","type":"BoxAnnotation"},{"id":"dd8dd5f7-cf6c-4335-90c0-e8f3918a90e1","type":"GlyphRenderer"},{"id":"c3dff6f7-a445-4105-84a5-7da618d61200","type":"LatexLabel"}],"title":{"id":"930e36ed-f991-41a9-ac93-5c2465873946","type":"Title"},"toolbar":{"id":"2055a910-a0ed-4b11-88e2-1f028ed12e8e","type":"Toolbar"},"x_range":{"id":"1182c193-6d1a-4dea-a765-86e4736de347","type":"DataRange1d"},"x_scale":{"id":"8008e7fb-a884-4457-ac28-650c4f56326b","type":"LinearScale"},"y_range":{"id":"d9b4aa1a-10c2-415e-9749-f09e213051ff","type":"DataRange1d"},"y_scale":{"id":"3eed429e-7ecd-454e-abff-e68d2879e43f","type":"LinearScale"}},"id":"6f626426-1b5c-4eaa-acd8-e99d2e8c2f8b","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"e4d7869f-cd97-418b-b348-21a3c1749612","type":"ColumnDataSource"}},"id":"7ed87a2f-f25a-4391-bda9-812e8d0e7a09","type":"CDSView"},{"attributes":{"overlay":{"id":"62b3966c-e149-4c87-b71c-d4fae9d43292","type":"BoxAnnotation"}},"id":"d12eb741-a591-4004-8338-a3b69df4ec53","type":"BoxZoomTool"},{"attributes":{},"id":"7e5606a9-335f-460c-b50d-a13eab83fbc4","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d9b4aa1a-10c2-415e-9749-f09e213051ff","type":"DataRange1d"},{"attributes":{},"id":"25ab4cf9-568c-4246-9020-4eb0abb9fdb0","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"c0c2d4a3-7dd5-4c51-a11e-eaa385c12a41","type":"Line"},{"attributes":{},"id":"7203fd23-66d1-419e-99c1-530144884a1b","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"62b3966c-e149-4c87-b71c-d4fae9d43292","type":"BoxAnnotation"},{"attributes":{},"id":"94b5c3b5-a2bf-4e95-9f05-2fb24d3eeeab","type":"BasicTicker"},{"attributes":{},"id":"16f59ab8-9145-4e12-9c0b-d0be0c9f38d9","type":"SaveTool"}],"root_ids":["6f626426-1b5c-4eaa-acd8-e99d2e8c2f8b"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"57489aa8-d0ee-437e-8d81-e616d7721ec3","elementid":"a0e82290-395a-4b26-bf11-c6a78d9059c2","modelid":"6f626426-1b5c-4eaa-acd8-e99d2e8c2f8b"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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