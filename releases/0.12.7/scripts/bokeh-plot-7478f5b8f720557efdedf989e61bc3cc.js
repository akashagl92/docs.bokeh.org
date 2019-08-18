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
      };var element = document.getElementById("f7b558f9-0e2a-44e4-a20f-ebc852a808e8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7b558f9-0e2a-44e4-a20f-ebc852a808e8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_26f6dd484502424a881740ee1be59335.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_26f6dd484502424a881740ee1be59335.latex_label": function(require, module, exports) {
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
                var docs_json = {"b2f03829-f144-41a7-b063-391888df9c53":{"roots":{"references":[{"attributes":{"data_source":{"id":"0cae7af3-bd16-4136-9a2d-2e89e81ddb8c","type":"ColumnDataSource"},"glyph":{"id":"5490f623-d4f0-42ea-b752-7fc38a497b29","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa019457-086d-4822-9ec0-46638fccd88f","type":"Line"},"selection_glyph":null,"view":{"id":"00fbc59a-1773-42a5-a9f0-653ad26ee36b","type":"CDSView"}},"id":"e42f297d-c635-4a14-9d51-a54a10b1e883","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"091b406f-b3a6-47de-8a3a-66781d8b1472","subtype":"Figure","type":"Plot"},"ticker":{"id":"24450e14-3880-456b-984b-a6587c4771d4","type":"BasicTicker"}},"id":"c2ffddf3-e02f-4140-b74b-0df833d13fab","type":"Grid"},{"attributes":{},"id":"3d341ac7-59ef-4e03-8591-da507dfd3426","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAAB7FK5H4XqEP3sUrkfhepQ/uB6F61G4nj97FK5H4XqkP5qZmZmZmak/uB6F61G4rj/sUbgeheuxP3sUrkfherQ/CtejcD0Ktz+amZmZmZm5Pylcj8L1KLw/uB6F61G4vj+kcD0K16PAP+xRuB6F68E/MzMzMzMzwz97FK5H4XrEP8P1KFyPwsU/CtejcD0Kxz9SuB6F61HIP5qZmZmZmck/4XoUrkfhyj8pXI/C9SjMP3E9CtejcM0/uB6F61G4zj8AAAAAAADQP6RwPQrXo9A/SOF6FK5H0T/sUbgehevRP4/C9Shcj9I/MzMzMzMz0z/Xo3A9CtfTP3sUrkfhetQ/H4XrUbge1T/D9Shcj8LVP2dmZmZmZtY/CtejcD0K1z+uR+F6FK7XP1K4HoXrUdg/9ihcj8L12D+amZmZmZnZPz4K16NwPdo/4XoUrkfh2j+F61G4HoXbPylcj8L1KNw/zczMzMzM3D9xPQrXo3DdPxWuR+F6FN4/uB6F61G43j9cj8L1KFzfPwAAAAAAAOA/UrgehetR4D+kcD0K16PgP/YoXI/C9eA/SOF6FK5H4T+amZmZmZnhP+xRuB6F6+E/PgrXo3A94j+PwvUoXI/iP+F6FK5H4eI/MzMzMzMz4z+F61G4HoXjP9ejcD0K1+M/KVyPwvUo5D97FK5H4XrkP83MzMzMzOQ/H4XrUbge5T9xPQrXo3DlP8P1KFyPwuU/Fa5H4XoU5j9nZmZmZmbmP7gehetRuOY/CtejcD0K5z9cj8L1KFznP65H4XoUruc/AAAAAAAA6D9SuB6F61HoP6RwPQrXo+g/9ihcj8L16D9I4XoUrkfpP5qZmZmZmek/7FG4HoXr6T8+CtejcD3qP5DC9Shcj+o/4XoUrkfh6j8zMzMzMzPrP4XrUbgehes/16NwPQrX6z8pXI/C9SjsP3sUrkfheuw/zczMzMzM7D8fhetRuB7tP3E9CtejcO0/w/UoXI/C7T8VrkfhehTuP2dmZmZmZu4/uB6F61G47j8K16NwPQrvP1yPwvUoXO8/rkfhehSu7z8AAAAAAADwPw==","dtype":"float64","shape":[101]},"y":{"__ndarray__":"AAAAAAAACEBBNiDV2e8HQLgHRIeovwdAudZ7py5wB0AWcKATrQIHQCr95ebdeAZABq70gO3UBUBvQK2/cRkFQNQKBo9fSQRANLAk+f5nA0Aq/eXm3XgCQKg3UMbBfwFAnATfUJiAAEDI9kFez/7+P7CQX3N8AP0/rAU0MkQO+z+Zn7YNAjD5P1bq8+FAbfc/In+lgBzN9T/2oxb+JFb0P6wFNDJEDvM/1B+/2KX68T+OUgixoh/xP5Dwd/GugPA/f5O/VUwg8D8AAAAAAADwP36Tv1VMIPA/kPB38a6A8D+OUgixoh/xP9Mfv9il+vE/rAU0MkQO8z/1oxb+JFb0PyN/pYAczfU/Werz4UBt9z+bn7YNAjD5P6wFNDJEDvs/sZBfc3wA/T/J9kFez/7+P5sE31CYgABApzdQxsF/AUAq/eXm3XgCQDOwJPn+ZwNA0woGj19JBEBuQK2/cRkFQAWu9IDt1AVAKv3l5t14BkAWcKATrQIHQLnWe6cucAdAuAdEh6i/B0BANiDV2e8HQAAAAAAAAAhAQTYg1dnvB0C4B0SHqL8HQLnWe6cucAdAFnCgE60CB0Ap/eXm3XgGQASu9IDt1AVAb0Ctv3EZBUDWCgaPX0kEQDSwJPn+ZwNAK/3l5t14AkCoN1DGwX8BQJwE31CYgABAy/ZBXs/+/j+vkF9zfAD9P64FNDJEDvs/lp+2DQIw+T9Y6vPhQG33Px5/pYAczfU/9KMW/iRW9D+tBTQyRA7zP9Yfv9il+vE/jlIIsaIf8T+Q8HfxroDwP36Tv1VMIPA/AAAAAAAA8D9+k79VTCDwP5Dwd/GugPA/jFIIsaIf8T/UH7/YpfrxP6sFNDJEDvM/96MW/iRW9D8if6WAHM31P1zq8+FAbfc/k5+2DQIw+T+qBTQyRA77P6yQX3N8AP0/yPZBXs/+/j+aBN9QmIAAQKg3UMbBfwFAKf3l5t14AkA1sCT5/mcDQNQKBo9fSQRAcECtv3EZBUAGrvSA7dQFQCn95ebdeAZAFXCgE60CB0C51nunLnAHQLgHRIeovwdAQTYg1dnvB0AAAAAAAAAIQA==","dtype":"float64","shape":[101]}}},"id":"0cae7af3-bd16-4136-9a2d-2e89e81ddb8c","type":"ColumnDataSource"},{"attributes":{},"id":"4d067bb4-0717-457e-acd3-b0c7f7c58098","type":"BasicTicker"},{"attributes":{"source":{"id":"0cae7af3-bd16-4136-9a2d-2e89e81ddb8c","type":"ColumnDataSource"}},"id":"00fbc59a-1773-42a5-a9f0-653ad26ee36b","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"091b406f-b3a6-47de-8a3a-66781d8b1472","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"1fdd9046-e005-4f21-8819-e3728f4b9189","type":"LatexLabel"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"be63b160-21c8-46ff-bc0d-a84c53898136","type":"Title"},{"attributes":{},"id":"e583f367-f6b2-4ef7-8636-b208371260f5","type":"BasicTickFormatter"},{"attributes":{},"id":"d6a7575c-9546-47bb-9683-fb2b900ae4cb","type":"PanTool"},{"attributes":{},"id":"b7287785-536f-4d4b-b185-c27415343092","type":"ResetTool"},{"attributes":{"below":[{"id":"77e43ce9-f1e1-403b-aaa7-91d3a0da4705","type":"LinearAxis"}],"left":[{"id":"aade512d-95c5-4077-a873-72330f13a612","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"77e43ce9-f1e1-403b-aaa7-91d3a0da4705","type":"LinearAxis"},{"id":"c2ffddf3-e02f-4140-b74b-0df833d13fab","type":"Grid"},{"id":"aade512d-95c5-4077-a873-72330f13a612","type":"LinearAxis"},{"id":"2b5fed78-470a-4e63-ae0d-bb59d750afcf","type":"Grid"},{"id":"80f467f7-a74b-4ef7-92bd-6a299aea453b","type":"BoxAnnotation"},{"id":"e42f297d-c635-4a14-9d51-a54a10b1e883","type":"GlyphRenderer"},{"id":"1fdd9046-e005-4f21-8819-e3728f4b9189","type":"LatexLabel"}],"title":{"id":"be63b160-21c8-46ff-bc0d-a84c53898136","type":"Title"},"toolbar":{"id":"678e13d2-2958-4a87-8d1a-e3006afdaf5b","type":"Toolbar"},"x_range":{"id":"67cf6991-af62-4f59-862e-bd3cf40b0785","type":"DataRange1d"},"x_scale":{"id":"aa284dd3-9c3c-4c41-8c2f-7cd22a2a26c7","type":"LinearScale"},"y_range":{"id":"7f68dae3-980e-4953-a3c8-ee0b706cea85","type":"DataRange1d"},"y_scale":{"id":"90c75066-6fdc-470f-aba7-545ff75ae3c5","type":"LinearScale"}},"id":"091b406f-b3a6-47de-8a3a-66781d8b1472","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80f467f7-a74b-4ef7-92bd-6a299aea453b","type":"BoxAnnotation"},{"attributes":{},"id":"90c75066-6fdc-470f-aba7-545ff75ae3c5","type":"LinearScale"},{"attributes":{"callback":null},"id":"7f68dae3-980e-4953-a3c8-ee0b706cea85","type":"DataRange1d"},{"attributes":{},"id":"34af19e2-dced-4bed-84ab-a30ce224b5d6","type":"HelpTool"},{"attributes":{"formatter":{"id":"fabbf294-200c-4a65-8aa3-6d79feadf14b","type":"BasicTickFormatter"},"plot":{"id":"091b406f-b3a6-47de-8a3a-66781d8b1472","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d067bb4-0717-457e-acd3-b0c7f7c58098","type":"BasicTicker"}},"id":"aade512d-95c5-4077-a873-72330f13a612","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa019457-086d-4822-9ec0-46638fccd88f","type":"Line"},{"attributes":{},"id":"aa284dd3-9c3c-4c41-8c2f-7cd22a2a26c7","type":"LinearScale"},{"attributes":{},"id":"fabbf294-200c-4a65-8aa3-6d79feadf14b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"67cf6991-af62-4f59-862e-bd3cf40b0785","type":"DataRange1d"},{"attributes":{},"id":"243e29c2-a600-4ad9-bda5-2f73bd9ac0e4","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6a7575c-9546-47bb-9683-fb2b900ae4cb","type":"PanTool"},{"id":"243e29c2-a600-4ad9-bda5-2f73bd9ac0e4","type":"WheelZoomTool"},{"id":"fbb7741b-8d0a-4f3f-84b6-5627ef679b6c","type":"BoxZoomTool"},{"id":"3d341ac7-59ef-4e03-8591-da507dfd3426","type":"SaveTool"},{"id":"b7287785-536f-4d4b-b185-c27415343092","type":"ResetTool"},{"id":"34af19e2-dced-4bed-84ab-a30ce224b5d6","type":"HelpTool"}]},"id":"678e13d2-2958-4a87-8d1a-e3006afdaf5b","type":"Toolbar"},{"attributes":{"overlay":{"id":"80f467f7-a74b-4ef7-92bd-6a299aea453b","type":"BoxAnnotation"}},"id":"fbb7741b-8d0a-4f3f-84b6-5627ef679b6c","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"e583f367-f6b2-4ef7-8636-b208371260f5","type":"BasicTickFormatter"},"plot":{"id":"091b406f-b3a6-47de-8a3a-66781d8b1472","subtype":"Figure","type":"Plot"},"ticker":{"id":"24450e14-3880-456b-984b-a6587c4771d4","type":"BasicTicker"}},"id":"77e43ce9-f1e1-403b-aaa7-91d3a0da4705","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"091b406f-b3a6-47de-8a3a-66781d8b1472","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d067bb4-0717-457e-acd3-b0c7f7c58098","type":"BasicTicker"}},"id":"2b5fed78-470a-4e63-ae0d-bb59d750afcf","type":"Grid"},{"attributes":{},"id":"24450e14-3880-456b-984b-a6587c4771d4","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5490f623-d4f0-42ea-b752-7fc38a497b29","type":"Line"}],"root_ids":["091b406f-b3a6-47de-8a3a-66781d8b1472"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b2f03829-f144-41a7-b063-391888df9c53","elementid":"f7b558f9-0e2a-44e4-a20f-ebc852a808e8","modelid":"091b406f-b3a6-47de-8a3a-66781d8b1472"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
