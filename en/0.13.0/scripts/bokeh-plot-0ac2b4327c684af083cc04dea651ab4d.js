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
      };var element = document.getElementById("b9fa25b0-9b6b-4523-8f46-c17df92c05df");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9fa25b0-9b6b-4523-8f46-c17df92c05df' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_ec90ab70342946a89354b89fd21ddd14.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_ec90ab70342946a89354b89fd21ddd14.latex_label": function(require, module, exports) {
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
          }).call(this);
    
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
                    
                  var docs_json = '{"e17ac7ed-6a2f-4350-b1cc-71bcf29d3589":{"roots":{"references":[{"attributes":{},"id":"733ed53e-3304-4be6-b4b7-afd43518225e","type":"ResetTool"},{"attributes":{"callback":null},"id":"e8bb80b7-15df-44d3-bf09-07edbf625904","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4318735f-8377-4ad1-b556-9f19c770a38b","type":"ColumnDataSource"},"glyph":{"id":"74fb9821-d67e-485d-88c6-8d5883fdc6cb","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc1a4ccf-65f1-4459-991e-076bffa9ee3a","type":"Line"},"selection_glyph":null,"view":{"id":"b65773c1-2fd8-4137-801b-01198b23280c","type":"CDSView"}},"id":"599eaa8c-6319-43fc-8dcc-1ed60cdae2a7","type":"GlyphRenderer"},{"attributes":{},"id":"58a02e3b-6cd2-4eba-8a28-55f6dcc771ae","type":"BasicTickFormatter"},{"attributes":{},"id":"d998ec6a-f536-46a8-be36-01ad97510701","type":"HelpTool"},{"attributes":{"callback":null},"id":"15f1f277-ccad-431a-9fe5-4ca9982e4eb7","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"74fb9821-d67e-485d-88c6-8d5883fdc6cb","type":"Line"},{"attributes":{},"id":"f9caeb50-b62b-4b81-9490-4406bc1d8b74","type":"LinearScale"},{"attributes":{},"id":"878c5ea8-df76-46e5-ae17-bf9163a5852f","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"a33b2196-b7e0-4f9e-a555-c1885b5b8771","type":"PanTool"},{"id":"e5926ab6-40b2-4535-aee7-a35ccd9e6fa6","type":"WheelZoomTool"},{"id":"10d47223-cece-41b0-aefc-428caa0737ea","type":"BoxZoomTool"},{"id":"7ad9af07-0ae8-4f06-aa3c-6e1f6fef75a1","type":"SaveTool"},{"id":"733ed53e-3304-4be6-b4b7-afd43518225e","type":"ResetTool"},{"id":"d998ec6a-f536-46a8-be36-01ad97510701","type":"HelpTool"}]},"id":"44d6c1b9-2ae6-4fe9-a7e3-0acb9a2ae48c","type":"Toolbar"},{"attributes":{},"id":"73818d58-7412-45a0-abad-21a27bcc07b1","type":"BasicTicker"},{"attributes":{},"id":"7ad9af07-0ae8-4f06-aa3c-6e1f6fef75a1","type":"SaveTool"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"2c80cd8d-3f71-4fb1-ab80-1bd79109a008","type":"Title"},{"attributes":{},"id":"321312c8-370f-478f-9df1-6bc8332d4845","type":"UnionRenderers"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"de2e2b76-d9c2-4259-a4d2-adf2a9952ba0","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\\\sum_{n=1}^\\\\infty\\\\frac{-e^{i\\\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"e482bcd0-5594-4229-be97-68bcfaabcc97","type":"LatexLabel"},{"attributes":{"formatter":{"id":"58a02e3b-6cd2-4eba-8a28-55f6dcc771ae","type":"BasicTickFormatter"},"plot":{"id":"de2e2b76-d9c2-4259-a4d2-adf2a9952ba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"57530297-fbc4-4363-97e7-e0fbcf7eff53","type":"BasicTicker"}},"id":"1eea3b83-6ecf-44da-8c62-18172abc399e","type":"LinearAxis"},{"attributes":{},"id":"4b43240c-8e6d-4305-8fa6-7717a5d99a9c","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"fc1a4ccf-65f1-4459-991e-076bffa9ee3a","type":"Line"},{"attributes":{"overlay":{"id":"1546e583-f3c1-4a8a-9bca-212e3be4ed93","type":"BoxAnnotation"}},"id":"10d47223-cece-41b0-aefc-428caa0737ea","type":"BoxZoomTool"},{"attributes":{},"id":"a33b2196-b7e0-4f9e-a555-c1885b5b8771","type":"PanTool"},{"attributes":{"plot":{"id":"de2e2b76-d9c2-4259-a4d2-adf2a9952ba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"73818d58-7412-45a0-abad-21a27bcc07b1","type":"BasicTicker"}},"id":"4e91ca14-6b2e-40d1-816f-80fddac5d1ef","type":"Grid"},{"attributes":{"below":[{"id":"04be467c-af36-4c2b-8640-7a421a0962b1","type":"LinearAxis"}],"left":[{"id":"1eea3b83-6ecf-44da-8c62-18172abc399e","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"04be467c-af36-4c2b-8640-7a421a0962b1","type":"LinearAxis"},{"id":"4e91ca14-6b2e-40d1-816f-80fddac5d1ef","type":"Grid"},{"id":"1eea3b83-6ecf-44da-8c62-18172abc399e","type":"LinearAxis"},{"id":"4d062dda-f501-4b37-8ab2-5559404fd16d","type":"Grid"},{"id":"1546e583-f3c1-4a8a-9bca-212e3be4ed93","type":"BoxAnnotation"},{"id":"599eaa8c-6319-43fc-8dcc-1ed60cdae2a7","type":"GlyphRenderer"},{"id":"e482bcd0-5594-4229-be97-68bcfaabcc97","type":"LatexLabel"}],"title":{"id":"2c80cd8d-3f71-4fb1-ab80-1bd79109a008","type":"Title"},"toolbar":{"id":"44d6c1b9-2ae6-4fe9-a7e3-0acb9a2ae48c","type":"Toolbar"},"x_range":{"id":"e8bb80b7-15df-44d3-bf09-07edbf625904","type":"DataRange1d"},"x_scale":{"id":"f9caeb50-b62b-4b81-9490-4406bc1d8b74","type":"LinearScale"},"y_range":{"id":"15f1f277-ccad-431a-9fe5-4ca9982e4eb7","type":"DataRange1d"},"y_scale":{"id":"4b43240c-8e6d-4305-8fa6-7717a5d99a9c","type":"LinearScale"}},"id":"de2e2b76-d9c2-4259-a4d2-adf2a9952ba0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"57530297-fbc4-4363-97e7-e0fbcf7eff53","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"de2e2b76-d9c2-4259-a4d2-adf2a9952ba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"57530297-fbc4-4363-97e7-e0fbcf7eff53","type":"BasicTicker"}},"id":"4d062dda-f501-4b37-8ab2-5559404fd16d","type":"Grid"},{"attributes":{},"id":"e5926ab6-40b2-4535-aee7-a35ccd9e6fa6","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1546e583-f3c1-4a8a-9bca-212e3be4ed93","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"cf8019f9-21af-49a6-bc15-b11048645d29","type":"BasicTickFormatter"},"plot":{"id":"de2e2b76-d9c2-4259-a4d2-adf2a9952ba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"73818d58-7412-45a0-abad-21a27bcc07b1","type":"BasicTicker"}},"id":"04be467c-af36-4c2b-8640-7a421a0962b1","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}},"selected":{"id":"878c5ea8-df76-46e5-ae17-bf9163a5852f","type":"Selection"},"selection_policy":{"id":"321312c8-370f-478f-9df1-6bc8332d4845","type":"UnionRenderers"}},"id":"4318735f-8377-4ad1-b556-9f19c770a38b","type":"ColumnDataSource"},{"attributes":{},"id":"cf8019f9-21af-49a6-bc15-b11048645d29","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"4318735f-8377-4ad1-b556-9f19c770a38b","type":"ColumnDataSource"}},"id":"b65773c1-2fd8-4137-801b-01198b23280c","type":"CDSView"}],"root_ids":["de2e2b76-d9c2-4259-a4d2-adf2a9952ba0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e17ac7ed-6a2f-4350-b1cc-71bcf29d3589","roots":{"de2e2b76-d9c2-4259-a4d2-adf2a9952ba0":"b9fa25b0-9b6b-4523-8f46-c17df92c05df"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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