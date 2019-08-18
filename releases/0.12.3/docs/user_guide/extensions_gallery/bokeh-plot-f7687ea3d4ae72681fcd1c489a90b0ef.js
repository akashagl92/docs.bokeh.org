document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("33b01f94-4c94-4620-a0c0-43a49271332c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '33b01f94-4c94-4620-a0c0-43a49271332c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          
          (function outer(modules, cache, entry) {
            if (typeof Bokeh !== "undefined") {
              var _ = Bokeh._;
          
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                  var exports = Bokeh.require(entry[i]);
          
                  if (_.isObject(exports.models)) {
                    Bokeh.Models.register_locations(exports.models);
                  }
          
                  _.extend(Bokeh, _.omit(exports, "models"));
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          
          ({
            "custom/main": [function(require, module, exports) {
              module.exports = {
                models: {
                  "Custom": require("custom/fake.custom"),
          "LatexLabel": require("custom/fake.latex_label"),
          "MyFormatter": require("custom/fake.my_formatter")
                }
              };
            }, {}],
            "custom/fake.custom": [function(require, module, exports) {
          var $, Custom, CustomView, LayoutDOM, _, p,
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          _ = require("underscore");
          
          $ = require("jquery");
          
          p = require("core/properties");
          
          LayoutDOM = require("models/layouts/layout_dom");
          
          CustomView = (function(superClass) {
            extend(CustomView, superClass);
          
            function CustomView() {
              return CustomView.__super__.constructor.apply(this, arguments);
            }
          
            CustomView.prototype.initialize = function(options) {
              CustomView.__super__.initialize.call(this, options);
              this.render();
              return this.listenTo(this.model.slider, 'change', (function(_this) {
                return function() {
                  return _this.render();
                };
              })(this));
            };
          
            CustomView.prototype.render = function() {
              this.$el.html("<h1>" + this.model.text + ": " + this.model.slider.value + "</h1>");
              return this.$('h1').css({
                'color': '#686d8e',
                'background-color': '#2a3153'
              });
            };
          
            return CustomView;
          
          })(LayoutDOM.View);
          
          Custom = (function(superClass) {
            extend(Custom, superClass);
          
            function Custom() {
              return Custom.__super__.constructor.apply(this, arguments);
            }
          
            Custom.prototype.default_view = CustomView;
          
            Custom.prototype.type = "Custom";
          
            Custom.define({
              text: [p.String],
              slider: [p.Any]
            });
          
            return Custom;
          
          })(LayoutDOM.Model);
          
          module.exports = {
            Model: Custom,
            View: CustomView
          };
          
          }, {}],
          "custom/fake.latex_label": [function(require, module, exports) {
          var Label, LatexLabel, LatexLabelView,
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          Label = require("models/annotations/label");
          
          LatexLabelView = (function(superClass) {
            extend(LatexLabelView, superClass);
          
            function LatexLabelView() {
              return LatexLabelView.__super__.constructor.apply(this, arguments);
            }
          
            LatexLabelView.prototype.render = function() {
              var angle, ctx, latex, panel_offset, sx, sy, vx, vy;
              ctx = this.plot_view.canvas_view.ctx;
              switch (this.model.angle_units) {
                case "rad":
                  angle = -1 * this.model.angle;
                  break;
                case "deg":
                  angle = -1 * this.model.angle * Math.PI / 180.0;
              }
              if (this.model.x_units === "data") {
                vx = this.xmapper.map_to_target(this.model.x);
              } else {
                vx = this.model.x;
              }
              sx = this.canvas.vx_to_sx(vx);
              if (this.model.y_units === "data") {
                vy = this.ymapper.map_to_target(this.model.y);
              } else {
                vy = this.model.y;
              }
              sy = this.canvas.vy_to_sy(vy);
              if (this.model.panel != null) {
                panel_offset = this._get_panel_offset();
                sx += panel_offset.x;
                sy += panel_offset.y;
              }
              latex = katex.renderToString(this.model.text, {
                displayMode: true
              });
              return this._css_text(ctx, latex, sx + this.model.x_offset, sy - this.model.y_offset, angle);
            };
          
            return LatexLabelView;
          
          })(Label.View);
          
          LatexLabel = (function(superClass) {
            extend(LatexLabel, superClass);
          
            function LatexLabel() {
              return LatexLabel.__super__.constructor.apply(this, arguments);
            }
          
            LatexLabel.prototype.type = 'LatexLabel';
          
            LatexLabel.prototype.default_view = LatexLabelView;
          
            return LatexLabel;
          
          })(Label.Model);
          
          module.exports = {
            Model: LatexLabel,
            View: LatexLabelView
          };
          
          }, {}],
          "custom/fake.my_formatter": [function(require, module, exports) {
          var MyFormatter, TickFormatter,
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          TickFormatter = require("models/formatters/tick_formatter");
          
          MyFormatter = (function(superClass) {
            extend(MyFormatter, superClass);
          
            function MyFormatter() {
              return MyFormatter.__super__.constructor.apply(this, arguments);
            }
          
            MyFormatter.prototype.type = "MyFormatter";
          
            MyFormatter.prototype.doFormat = function(ticks) {
              var formatted, i, j, ref;
              formatted = ["" + ticks[0]];
              for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                formatted.push("+" + ((ticks[i] - ticks[0]).toPrecision(2)));
              }
              return formatted;
            };
          
            return MyFormatter;
          
          })(TickFormatter.Model);
          
          module.exports = {
            Model: MyFormatter
          };
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"ad52c9ec-ba57-40a3-867d-ac38bed9b51c":{"roots":{"references":[{"attributes":{"formatter":{"id":"d4d53f02-af3c-4a59-abfe-0ecb0e16f321","type":"MyFormatter"},"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c927bff-5a7b-445d-a71c-ac5f0301922b","type":"BasicTicker"}},"id":"e5dd2cd9-bcaa-4ce7-ad29-09152c38c594","type":"LinearAxis"},{"attributes":{},"id":"8c927bff-5a7b-445d-a71c-ac5f0301922b","type":"BasicTicker"},{"attributes":{},"id":"67c4f0b6-f622-44b1-a55f-4a6424186a8e","type":"ToolEvents"},{"attributes":{"overlay":{"id":"9b565209-d42d-48be-a1a6-4c9dd4f1fe1c","type":"BoxAnnotation"},"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"}},"id":"6b3ce650-0c42-48e6-9d6e-c7941f131714","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"}},"id":"bdb7c027-d805-45f0-a21a-51ae29f814be","type":"ResetTool"},{"attributes":{"callback":null},"id":"b414e626-dda0-49e6-90b9-f59c37a35762","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"ddaf5723-abee-41dc-bdc9-34623b9f7d13","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ecdb5b7-6152-4c7d-80e4-7a9ffa1d2ac8","type":"BasicTicker"}},"id":"6ea75131-59fc-42a5-84af-bb4dcdeeae84","type":"Grid"},{"attributes":{"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"}},"id":"349a84a3-27fe-4ad0-a8b3-b0da65672677","type":"HelpTool"},{"attributes":{"data_source":{"id":"b0e15760-6814-4498-aff4-eb70ff3f56a2","type":"ColumnDataSource"},"glyph":{"id":"3cdbbf3d-8d33-440e-bfd6-745f823fb27e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a5f45ace-bf58-464a-b4d8-00616adffa37","type":"Circle"},"selection_glyph":null},"id":"8e314520-38c9-4d06-a3f4-f360e045e39b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5f29c0e1-0ca3-4aef-8d23-2ad99c85310a","type":"BasicTickFormatter"},"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ecdb5b7-6152-4c7d-80e4-7a9ffa1d2ac8","type":"BasicTicker"}},"id":"63cac9c7-1ecd-4ac9-99aa-7a901280d11b","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e20e36e1-9875-467b-964a-c245b0506eb9","type":"PanTool"},{"id":"e65e102b-79e6-4fa5-b48d-3d935ad54ef3","type":"WheelZoomTool"},{"id":"6b3ce650-0c42-48e6-9d6e-c7941f131714","type":"BoxZoomTool"},{"id":"596e48d8-eb07-4758-9261-6cf37778e838","type":"SaveTool"},{"id":"bdb7c027-d805-45f0-a21a-51ae29f814be","type":"ResetTool"},{"id":"349a84a3-27fe-4ad0-a8b3-b0da65672677","type":"HelpTool"}]},"id":"68eb3403-f4e9-4f25-a146-a71f6c56624e","type":"Toolbar"},{"attributes":{"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c927bff-5a7b-445d-a71c-ac5f0301922b","type":"BasicTicker"}},"id":"aef21426-121b-4505-9d70-131acf04eae8","type":"Grid"},{"attributes":{"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"}},"id":"e20e36e1-9875-467b-964a-c245b0506eb9","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"b0e15760-6814-4498-aff4-eb70ff3f56a2","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9b565209-d42d-48be-a1a6-4c9dd4f1fe1c","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3cdbbf3d-8d33-440e-bfd6-745f823fb27e","type":"Circle"},{"attributes":{"below":[{"id":"e5dd2cd9-bcaa-4ce7-ad29-09152c38c594","type":"LinearAxis"}],"left":[{"id":"63cac9c7-1ecd-4ac9-99aa-7a901280d11b","type":"LinearAxis"}],"renderers":[{"id":"e5dd2cd9-bcaa-4ce7-ad29-09152c38c594","type":"LinearAxis"},{"id":"aef21426-121b-4505-9d70-131acf04eae8","type":"Grid"},{"id":"63cac9c7-1ecd-4ac9-99aa-7a901280d11b","type":"LinearAxis"},{"id":"6ea75131-59fc-42a5-84af-bb4dcdeeae84","type":"Grid"},{"id":"9b565209-d42d-48be-a1a6-4c9dd4f1fe1c","type":"BoxAnnotation"},{"id":"8e314520-38c9-4d06-a3f4-f360e045e39b","type":"GlyphRenderer"}],"title":{"id":"ddaf5723-abee-41dc-bdc9-34623b9f7d13","type":"Title"},"tool_events":{"id":"67c4f0b6-f622-44b1-a55f-4a6424186a8e","type":"ToolEvents"},"toolbar":{"id":"68eb3403-f4e9-4f25-a146-a71f6c56624e","type":"Toolbar"},"x_range":{"id":"b414e626-dda0-49e6-90b9-f59c37a35762","type":"DataRange1d"},"y_range":{"id":"2dd3c4b9-bb0e-42c4-a088-ce6ac3a71cf1","type":"DataRange1d"}},"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d4d53f02-af3c-4a59-abfe-0ecb0e16f321","type":"MyFormatter"},{"attributes":{},"id":"5ecdb5b7-6152-4c7d-80e4-7a9ffa1d2ac8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2dd3c4b9-bb0e-42c4-a088-ce6ac3a71cf1","type":"DataRange1d"},{"attributes":{"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"}},"id":"e65e102b-79e6-4fa5-b48d-3d935ad54ef3","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5f45ace-bf58-464a-b4d8-00616adffa37","type":"Circle"},{"attributes":{},"id":"5f29c0e1-0ca3-4aef-8d23-2ad99c85310a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e","subtype":"Figure","type":"Plot"}},"id":"596e48d8-eb07-4758-9261-6cf37778e838","type":"SaveTool"}],"root_ids":["28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"ad52c9ec-ba57-40a3-867d-ac38bed9b51c","elementid":"33b01f94-4c94-4620-a0c0-43a49271332c","modelid":"28abd2ea-dab7-4e3c-8e8a-ae8f33bbbe4e"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});