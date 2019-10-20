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
      };var element = document.getElementById("873bb6d6-30a9-4908-94b8-6b2852a19377");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '873bb6d6-30a9-4908-94b8-6b2852a19377' but no matching script tag was found. ")
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
                "LatexLabel": require("custom/bk_script_26f6dd484502424a881740ee1be59335.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_de26e856a48249298da290cdcc957f48.my_formatter").MyFormatter
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
          
          },
          "custom/bk_script_de26e856a48249298da290cdcc957f48.my_formatter": function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var tick_formatter_1 = require("models/formatters/tick_formatter");
          exports.MyFormatter = (function (superClass) {
              extend(MyFormatter, superClass);
              function MyFormatter() {
                  return MyFormatter.__super__.constructor.apply(this, arguments);
              }
              MyFormatter.prototype.type = "MyFormatter";
              MyFormatter.prototype.doFormat = function (ticks) {
                  var formatted, i, j, ref;
                  formatted = ["" + ticks[0]];
                  for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                      formatted.push("+" + ((ticks[i] - ticks[0]).toPrecision(2)));
                  }
                  return formatted;
              };
              return MyFormatter;
          })(tick_formatter_1.TickFormatter);
          
          }
          }, "custom/main");
          ;
          });
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"f29cde6a-b37b-4760-a498-4900eb152c53":{"roots":{"references":[{"attributes":{"plot":{"id":"872dbf54-372e-43c9-9b88-da13b73dd20b","subtype":"Figure","type":"Plot"},"ticker":{"id":"c70bf432-59dd-4934-a25f-bbd460c62c7a","type":"BasicTicker"}},"id":"4b34bceb-29dc-473d-86cc-df3ad609d9bd","type":"Grid"},{"attributes":{"callback":null},"id":"ff80edaf-7c0a-407a-b519-5b7ee795cdb7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"eac0eb0a-6108-46af-8259-93e3eaeedb90","type":"MyFormatter"},"plot":{"id":"872dbf54-372e-43c9-9b88-da13b73dd20b","subtype":"Figure","type":"Plot"},"ticker":{"id":"c70bf432-59dd-4934-a25f-bbd460c62c7a","type":"BasicTicker"}},"id":"71806210-7cad-4e80-bc0b-a065d7869a64","type":"LinearAxis"},{"attributes":{},"id":"57a5d883-33fe-4bb3-a50d-f0e4c9efe0f3","type":"HelpTool"},{"attributes":{},"id":"bd4dbb79-7192-4288-bec0-cf86299fd21d","type":"LinearScale"},{"attributes":{"below":[{"id":"71806210-7cad-4e80-bc0b-a065d7869a64","type":"LinearAxis"}],"left":[{"id":"3c9ee2cf-05eb-41d0-ba49-982981708024","type":"LinearAxis"}],"renderers":[{"id":"71806210-7cad-4e80-bc0b-a065d7869a64","type":"LinearAxis"},{"id":"4b34bceb-29dc-473d-86cc-df3ad609d9bd","type":"Grid"},{"id":"3c9ee2cf-05eb-41d0-ba49-982981708024","type":"LinearAxis"},{"id":"fbb7bc73-faf0-4ca7-88c3-131d193d0b52","type":"Grid"},{"id":"f6384236-3778-4c75-a50f-44d68fe81276","type":"BoxAnnotation"},{"id":"2ce70313-5995-4ef2-88ee-b69f760bd870","type":"GlyphRenderer"}],"title":{"id":"c767d9fc-780e-4323-94a3-70b8b39d1b3a","type":"Title"},"toolbar":{"id":"32749d7b-ac6d-4902-8084-c97c248875db","type":"Toolbar"},"x_range":{"id":"ff80edaf-7c0a-407a-b519-5b7ee795cdb7","type":"DataRange1d"},"x_scale":{"id":"6cb7a5e5-f437-408e-9105-ef156bcc9884","type":"LinearScale"},"y_range":{"id":"776f1126-692e-421e-b178-6edd53c7781c","type":"DataRange1d"},"y_scale":{"id":"bd4dbb79-7192-4288-bec0-cf86299fd21d","type":"LinearScale"}},"id":"872dbf54-372e-43c9-9b88-da13b73dd20b","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"872dbf54-372e-43c9-9b88-da13b73dd20b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5446378-eb4e-449b-b7c1-69966898967c","type":"BasicTicker"}},"id":"fbb7bc73-faf0-4ca7-88c3-131d193d0b52","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f6384236-3778-4c75-a50f-44d68fe81276","type":"BoxAnnotation"},{"attributes":{},"id":"6cb7a5e5-f437-408e-9105-ef156bcc9884","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"733d42fe-4c38-42df-ac3e-ec73b5e62dc8","type":"Circle"},{"attributes":{},"id":"fa0f9725-eeab-4132-b982-fa16ace27a1c","type":"SaveTool"},{"attributes":{"overlay":{"id":"f6384236-3778-4c75-a50f-44d68fe81276","type":"BoxAnnotation"}},"id":"1e0e556d-48a2-4d7c-ab9f-af337cf44221","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"2e326974-4711-41b4-b084-461e7a7256c0","type":"ColumnDataSource"},{"attributes":{},"id":"09dacc8d-c423-4182-afc6-665ebf93cfd3","type":"ResetTool"},{"attributes":{},"id":"c70bf432-59dd-4934-a25f-bbd460c62c7a","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"c767d9fc-780e-4323-94a3-70b8b39d1b3a","type":"Title"},{"attributes":{"data_source":{"id":"2e326974-4711-41b4-b084-461e7a7256c0","type":"ColumnDataSource"},"glyph":{"id":"dbec0666-b5c4-4eef-84d3-406a7b767876","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"733d42fe-4c38-42df-ac3e-ec73b5e62dc8","type":"Circle"},"selection_glyph":null,"view":{"id":"496be451-ce71-47a9-ad05-f0c80db2f43d","type":"CDSView"}},"id":"2ce70313-5995-4ef2-88ee-b69f760bd870","type":"GlyphRenderer"},{"attributes":{},"id":"e67b1146-087d-483b-8f98-fc4d9053c49b","type":"WheelZoomTool"},{"attributes":{},"id":"eac0eb0a-6108-46af-8259-93e3eaeedb90","type":"MyFormatter"},{"attributes":{},"id":"dea08519-ebad-45f0-a11d-ff63d2d0f6c3","type":"PanTool"},{"attributes":{"formatter":{"id":"bf418c12-c6fa-4389-8204-b568bd50d0bf","type":"BasicTickFormatter"},"plot":{"id":"872dbf54-372e-43c9-9b88-da13b73dd20b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5446378-eb4e-449b-b7c1-69966898967c","type":"BasicTicker"}},"id":"3c9ee2cf-05eb-41d0-ba49-982981708024","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dea08519-ebad-45f0-a11d-ff63d2d0f6c3","type":"PanTool"},{"id":"e67b1146-087d-483b-8f98-fc4d9053c49b","type":"WheelZoomTool"},{"id":"1e0e556d-48a2-4d7c-ab9f-af337cf44221","type":"BoxZoomTool"},{"id":"fa0f9725-eeab-4132-b982-fa16ace27a1c","type":"SaveTool"},{"id":"09dacc8d-c423-4182-afc6-665ebf93cfd3","type":"ResetTool"},{"id":"57a5d883-33fe-4bb3-a50d-f0e4c9efe0f3","type":"HelpTool"}]},"id":"32749d7b-ac6d-4902-8084-c97c248875db","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dbec0666-b5c4-4eef-84d3-406a7b767876","type":"Circle"},{"attributes":{"source":{"id":"2e326974-4711-41b4-b084-461e7a7256c0","type":"ColumnDataSource"}},"id":"496be451-ce71-47a9-ad05-f0c80db2f43d","type":"CDSView"},{"attributes":{},"id":"bf418c12-c6fa-4389-8204-b568bd50d0bf","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"776f1126-692e-421e-b178-6edd53c7781c","type":"DataRange1d"},{"attributes":{},"id":"a5446378-eb4e-449b-b7c1-69966898967c","type":"BasicTicker"}],"root_ids":["872dbf54-372e-43c9-9b88-da13b73dd20b"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f29cde6a-b37b-4760-a498-4900eb152c53","elementid":"873bb6d6-30a9-4908-94b8-6b2852a19377","modelid":"872dbf54-372e-43c9-9b88-da13b73dd20b"}];
                
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
