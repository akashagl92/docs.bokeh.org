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
      };var element = document.getElementById("f60d1333-8d6d-4ddd-84ef-ddde73a6c046");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f60d1333-8d6d-4ddd-84ef-ddde73a6c046' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_1d29982a64c2449197edd0c310ea1f8f.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_1d29982a64c2449197edd0c310ea1f8f.latex_label": function(require, module, exports) {
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
                    
                  var docs_json = '{"98561f58-3776-40b2-8c63-64f9b765f3a4":{"roots":{"references":[{"attributes":{},"id":"eb0da4be-7694-4672-8404-f16c18983f37","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"4d7e5688-be6a-40b2-b041-0a0662c07550","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7b5b5ac-f8f0-4546-b208-d2abde1a72e7","type":"BasicTicker"}},"id":"53549265-8824-4ed5-bfd0-fa3acf9eb6ec","type":"Grid"},{"attributes":{"formatter":{"id":"b416c15e-2b87-4cc0-8120-301ec62e16f2","type":"BasicTickFormatter"},"plot":{"id":"4d7e5688-be6a-40b2-b041-0a0662c07550","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3dc8ad0-25f5-4a63-a0c4-23120c0ede13","type":"BasicTicker"}},"id":"1ecee42d-d123-4ef4-892f-e25a93769897","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"4d7e5688-be6a-40b2-b041-0a0662c07550","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\\\sum_{n=1}^\\\\infty\\\\frac{-e^{i\\\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"60112fff-c4cb-40e6-8023-a3d45f31789c","type":"LatexLabel"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"eb7b0f25-4983-4fc5-a8de-811992d24385","type":"Line"},{"attributes":{},"id":"debb87ff-ea7f-4f31-bfef-c78adcf60b74","type":"HelpTool"},{"attributes":{},"id":"fdb2f77f-4291-4819-b13c-dec5c3e2aa78","type":"LinearScale"},{"attributes":{"callback":null},"id":"3beda0d3-fbb1-468c-ab37-9609ac81cacd","type":"DataRange1d"},{"attributes":{"source":{"id":"5cab27a1-62f5-452a-afe4-47a939653e23","type":"ColumnDataSource"}},"id":"1fa12b48-16f9-4313-8163-7a6f97054b59","type":"CDSView"},{"attributes":{},"id":"f3dc8ad0-25f5-4a63-a0c4-23120c0ede13","type":"BasicTicker"},{"attributes":{},"id":"2a156666-2faa-4f76-8a60-fbac8d2a8b2d","type":"PanTool"},{"attributes":{"plot":{"id":"4d7e5688-be6a-40b2-b041-0a0662c07550","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3dc8ad0-25f5-4a63-a0c4-23120c0ede13","type":"BasicTicker"}},"id":"967682a6-a555-4050-ac69-8d5ccd0fa402","type":"Grid"},{"attributes":{},"id":"560b5703-e4c9-4a99-979a-455c677ecdae","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1acd224a-6f18-4093-be1d-14c3f1a5f8b4","type":"BoxAnnotation"},{"attributes":{},"id":"e7b5b5ac-f8f0-4546-b208-d2abde1a72e7","type":"BasicTicker"},{"attributes":{"below":[{"id":"1ecee42d-d123-4ef4-892f-e25a93769897","type":"LinearAxis"}],"left":[{"id":"737f972c-0b12-437e-848e-489c462fba9d","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"1ecee42d-d123-4ef4-892f-e25a93769897","type":"LinearAxis"},{"id":"967682a6-a555-4050-ac69-8d5ccd0fa402","type":"Grid"},{"id":"737f972c-0b12-437e-848e-489c462fba9d","type":"LinearAxis"},{"id":"53549265-8824-4ed5-bfd0-fa3acf9eb6ec","type":"Grid"},{"id":"1acd224a-6f18-4093-be1d-14c3f1a5f8b4","type":"BoxAnnotation"},{"id":"4eea48ef-fd4d-477e-ab8e-b03fe4055e36","type":"GlyphRenderer"},{"id":"60112fff-c4cb-40e6-8023-a3d45f31789c","type":"LatexLabel"}],"title":{"id":"7e6902fa-c2b4-45d3-86e6-5915dd0943db","type":"Title"},"toolbar":{"id":"e3d37130-356c-4fa0-890a-b75f867b3ad1","type":"Toolbar"},"x_range":{"id":"43daeb3e-fdf4-4862-9ff6-faea96f4b401","type":"DataRange1d"},"x_scale":{"id":"27b76d02-3ccc-486a-bc39-2d767e40b8ee","type":"LinearScale"},"y_range":{"id":"3beda0d3-fbb1-468c-ab37-9609ac81cacd","type":"DataRange1d"},"y_scale":{"id":"fdb2f77f-4291-4819-b13c-dec5c3e2aa78","type":"LinearScale"}},"id":"4d7e5688-be6a-40b2-b041-0a0662c07550","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"7e6902fa-c2b4-45d3-86e6-5915dd0943db","type":"Title"},{"attributes":{"data_source":{"id":"5cab27a1-62f5-452a-afe4-47a939653e23","type":"ColumnDataSource"},"glyph":{"id":"5c3c5673-4ff6-488c-a2fd-6f0b8b33d876","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eb7b0f25-4983-4fc5-a8de-811992d24385","type":"Line"},"selection_glyph":null,"view":{"id":"1fa12b48-16f9-4313-8163-7a6f97054b59","type":"CDSView"}},"id":"4eea48ef-fd4d-477e-ab8e-b03fe4055e36","type":"GlyphRenderer"},{"attributes":{},"id":"b416c15e-2b87-4cc0-8120-301ec62e16f2","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2a156666-2faa-4f76-8a60-fbac8d2a8b2d","type":"PanTool"},{"id":"b65df8cc-a2f3-4d84-8099-2902e60ad50e","type":"WheelZoomTool"},{"id":"b3982fc9-8e38-4f53-bef6-a976d0d2d24f","type":"BoxZoomTool"},{"id":"560b5703-e4c9-4a99-979a-455c677ecdae","type":"SaveTool"},{"id":"39212efc-4fd7-4685-8c4c-27a97f620781","type":"ResetTool"},{"id":"debb87ff-ea7f-4f31-bfef-c78adcf60b74","type":"HelpTool"}]},"id":"e3d37130-356c-4fa0-890a-b75f867b3ad1","type":"Toolbar"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5c3c5673-4ff6-488c-a2fd-6f0b8b33d876","type":"Line"},{"attributes":{},"id":"b65df8cc-a2f3-4d84-8099-2902e60ad50e","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"43daeb3e-fdf4-4862-9ff6-faea96f4b401","type":"DataRange1d"},{"attributes":{"formatter":{"id":"eb0da4be-7694-4672-8404-f16c18983f37","type":"BasicTickFormatter"},"plot":{"id":"4d7e5688-be6a-40b2-b041-0a0662c07550","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7b5b5ac-f8f0-4546-b208-d2abde1a72e7","type":"BasicTicker"}},"id":"737f972c-0b12-437e-848e-489c462fba9d","type":"LinearAxis"},{"attributes":{},"id":"27b76d02-3ccc-486a-bc39-2d767e40b8ee","type":"LinearScale"},{"attributes":{},"id":"39212efc-4fd7-4685-8c4c-27a97f620781","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"5cab27a1-62f5-452a-afe4-47a939653e23","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"1acd224a-6f18-4093-be1d-14c3f1a5f8b4","type":"BoxAnnotation"}},"id":"b3982fc9-8e38-4f53-bef6-a976d0d2d24f","type":"BoxZoomTool"}],"root_ids":["4d7e5688-be6a-40b2-b041-0a0662c07550"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"98561f58-3776-40b2-8c63-64f9b765f3a4","elementid":"f60d1333-8d6d-4ddd-84ef-ddde73a6c046","modelid":"4d7e5688-be6a-40b2-b041-0a0662c07550"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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