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
      };var element = document.getElementById("41daa674-9052-49ae-9895-628375bf3027");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '41daa674-9052-49ae-9895-628375bf3027' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_11478284eb724428bba954de02afc94b.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_76ef57ddb4ce4fa68bca809ff88ac460.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_11478284eb724428bba954de02afc94b.latex_label": function(require, module, exports) {
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
          "custom/bk_script_76ef57ddb4ce4fa68bca809ff88ac460.my_formatter": function(require, module, exports) {
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"2fb80bc5-6d4a-4d20-b981-1967da58ab55":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0cdca74-ddb1-4897-8110-8498e0eac22d","type":"Circle"},{"attributes":{"formatter":{"id":"2804d5ae-028e-40dd-8a40-24c39696d0fa","type":"BasicTickFormatter"},"plot":{"id":"9ee4a738-7356-4ca7-a4ae-1f6970ee8545","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c48e1ab-799d-4e53-abbc-2d9e9cdcb532","type":"BasicTicker"}},"id":"467dadb0-2633-4e50-9a36-0e24df755b80","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15a1e4d0-ce39-4ea2-9a52-7cd87d37127a","type":"BoxAnnotation"},{"attributes":{},"id":"1c48e1ab-799d-4e53-abbc-2d9e9cdcb532","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"43eb11cd-5730-44b7-ad65-4593e5fc2c5a","type":"Title"},{"attributes":{"callback":null},"id":"cc398f5d-8b93-4b0d-a7b1-7a13fdcb6025","type":"DataRange1d"},{"attributes":{"data_source":{"id":"dafd2c3d-17e3-44c0-82f2-c0e4c44bc7cf","type":"ColumnDataSource"},"glyph":{"id":"e0cdca74-ddb1-4897-8110-8498e0eac22d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1deb8ae4-455d-4e4d-a129-1432dbb5a24f","type":"Circle"},"selection_glyph":null,"view":{"id":"8914c4b1-68da-4d7a-9fa2-83e79ce74548","type":"CDSView"}},"id":"12cf09aa-d460-4286-afe4-ad8025b43532","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1deb8ae4-455d-4e4d-a129-1432dbb5a24f","type":"Circle"},{"attributes":{},"id":"5a1c21b5-b370-429b-b842-b4e4e8d74588","type":"LinearScale"},{"attributes":{"below":[{"id":"4df19d6c-4d19-4ed9-8cc2-6679aa060af6","type":"LinearAxis"}],"left":[{"id":"467dadb0-2633-4e50-9a36-0e24df755b80","type":"LinearAxis"}],"renderers":[{"id":"4df19d6c-4d19-4ed9-8cc2-6679aa060af6","type":"LinearAxis"},{"id":"e1ce818c-3fd6-4c7d-9d71-e6d776b3eff2","type":"Grid"},{"id":"467dadb0-2633-4e50-9a36-0e24df755b80","type":"LinearAxis"},{"id":"bd445927-d1c1-4e22-9732-2d659157ab7f","type":"Grid"},{"id":"15a1e4d0-ce39-4ea2-9a52-7cd87d37127a","type":"BoxAnnotation"},{"id":"12cf09aa-d460-4286-afe4-ad8025b43532","type":"GlyphRenderer"}],"title":{"id":"43eb11cd-5730-44b7-ad65-4593e5fc2c5a","type":"Title"},"toolbar":{"id":"206ce1f5-33cf-4824-8505-5f11a4884e1c","type":"Toolbar"},"x_range":{"id":"bd27cd64-55fb-4084-a2ec-72f82844e89f","type":"DataRange1d"},"x_scale":{"id":"5a1c21b5-b370-429b-b842-b4e4e8d74588","type":"LinearScale"},"y_range":{"id":"cc398f5d-8b93-4b0d-a7b1-7a13fdcb6025","type":"DataRange1d"},"y_scale":{"id":"8c5307af-71dd-4bd8-96d7-783a4df50cfc","type":"LinearScale"}},"id":"9ee4a738-7356-4ca7-a4ae-1f6970ee8545","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8c5307af-71dd-4bd8-96d7-783a4df50cfc","type":"LinearScale"},{"attributes":{"source":{"id":"dafd2c3d-17e3-44c0-82f2-c0e4c44bc7cf","type":"ColumnDataSource"}},"id":"8914c4b1-68da-4d7a-9fa2-83e79ce74548","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"9ee4a738-7356-4ca7-a4ae-1f6970ee8545","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c48e1ab-799d-4e53-abbc-2d9e9cdcb532","type":"BasicTicker"}},"id":"bd445927-d1c1-4e22-9732-2d659157ab7f","type":"Grid"},{"attributes":{},"id":"28b28155-a933-4dd9-92fc-4f9cbca9f467","type":"BasicTicker"},{"attributes":{},"id":"5c4ceaa7-dfd7-48f9-872f-99a472c38382","type":"MyFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"19a7967a-acb8-4b61-9a27-1e8811109f0c","type":"PanTool"},{"id":"8f637f04-58d0-4471-b7dd-1de0ed24b720","type":"WheelZoomTool"},{"id":"fc176021-39b7-4e55-b4ed-f3b145623d18","type":"BoxZoomTool"},{"id":"cbec1786-6517-42a3-a98a-5db36ca71050","type":"SaveTool"},{"id":"915fe444-2fea-4e10-a4ce-2882906161e1","type":"ResetTool"},{"id":"7738fda9-109c-4320-bffc-0138c5f5940e","type":"HelpTool"}]},"id":"206ce1f5-33cf-4824-8505-5f11a4884e1c","type":"Toolbar"},{"attributes":{"formatter":{"id":"5c4ceaa7-dfd7-48f9-872f-99a472c38382","type":"MyFormatter"},"plot":{"id":"9ee4a738-7356-4ca7-a4ae-1f6970ee8545","subtype":"Figure","type":"Plot"},"ticker":{"id":"28b28155-a933-4dd9-92fc-4f9cbca9f467","type":"BasicTicker"}},"id":"4df19d6c-4d19-4ed9-8cc2-6679aa060af6","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"dafd2c3d-17e3-44c0-82f2-c0e4c44bc7cf","type":"ColumnDataSource"},{"attributes":{},"id":"2804d5ae-028e-40dd-8a40-24c39696d0fa","type":"BasicTickFormatter"},{"attributes":{},"id":"8f637f04-58d0-4471-b7dd-1de0ed24b720","type":"WheelZoomTool"},{"attributes":{},"id":"915fe444-2fea-4e10-a4ce-2882906161e1","type":"ResetTool"},{"attributes":{"callback":null},"id":"bd27cd64-55fb-4084-a2ec-72f82844e89f","type":"DataRange1d"},{"attributes":{"overlay":{"id":"15a1e4d0-ce39-4ea2-9a52-7cd87d37127a","type":"BoxAnnotation"}},"id":"fc176021-39b7-4e55-b4ed-f3b145623d18","type":"BoxZoomTool"},{"attributes":{},"id":"cbec1786-6517-42a3-a98a-5db36ca71050","type":"SaveTool"},{"attributes":{},"id":"19a7967a-acb8-4b61-9a27-1e8811109f0c","type":"PanTool"},{"attributes":{},"id":"7738fda9-109c-4320-bffc-0138c5f5940e","type":"HelpTool"},{"attributes":{"plot":{"id":"9ee4a738-7356-4ca7-a4ae-1f6970ee8545","subtype":"Figure","type":"Plot"},"ticker":{"id":"28b28155-a933-4dd9-92fc-4f9cbca9f467","type":"BasicTicker"}},"id":"e1ce818c-3fd6-4c7d-9d71-e6d776b3eff2","type":"Grid"}],"root_ids":["9ee4a738-7356-4ca7-a4ae-1f6970ee8545"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2fb80bc5-6d4a-4d20-b981-1967da58ab55","elementid":"41daa674-9052-49ae-9895-628375bf3027","modelid":"9ee4a738-7356-4ca7-a4ae-1f6970ee8545"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
