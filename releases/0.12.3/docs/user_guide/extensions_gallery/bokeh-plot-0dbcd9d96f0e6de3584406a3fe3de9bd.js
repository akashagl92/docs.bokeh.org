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
      };var element = document.getElementById("dcabb5bf-b939-4279-a6d9-48293b2b2dc4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dcabb5bf-b939-4279-a6d9-48293b2b2dc4' but no matching script tag was found. ")
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
          "LatexLabel": require("custom/fake.latex_label")
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
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"61ac7f61-c53c-4879-a9e7-8fbc583d0f61":{"roots":{"references":[{"attributes":{"formatter":{"id":"0a712bc9-0520-4a83-b0b7-581422303949","type":"BasicTickFormatter"},"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"098374fe-67b2-401f-b2e7-980cff57be01","type":"BasicTicker"}},"id":"336f676c-85d1-4202-aa73-4cf7ab9ec07c","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"098374fe-67b2-401f-b2e7-980cff57be01","type":"BasicTicker"}},"id":"ce006331-27fa-4839-9d2c-23d3050fa342","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#ffffff"},"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"f = \\sum_{n=1}^\\infty\\frac{-e^{i\\pi}}{2^n}!","text_font_size":{"value":"16pt"},"x":35,"x_units":"screen","y":445,"y_units":"screen"},"id":"f41a8aa2-e275-4496-8c1e-f40dc113999a","type":"LatexLabel"},{"attributes":{"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"1051b3d1-55ac-4eb6-a43f-5609c43b5f49","type":"BasicTicker"}},"id":"61d99ce3-65fb-4b5a-a05d-d65c3a27c5ff","type":"Grid"},{"attributes":{},"id":"0a712bc9-0520-4a83-b0b7-581422303949","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"}},"id":"3840885c-4810-4ffd-aea5-7a866527ca77","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"}},"id":"d32109b4-5609-4e25-bb7c-9569f1904a58","type":"HelpTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a961eaca-dcc8-45e5-b0e7-b95a1a59cef7","type":"Line"},{"attributes":{"plot":null,"text":"LaTex Demonstration"},"id":"6c9ba00d-ae12-48a3-9df6-0693f0c64066","type":"Title"},{"attributes":{"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"}},"id":"2a9321b8-5e97-4837-a86a-9e41a442a302","type":"SaveTool"},{"attributes":{},"id":"1051b3d1-55ac-4eb6-a43f-5609c43b5f49","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5130d401-8eef-41b8-83fc-cb829a37b483","type":"BasicTickFormatter"},"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"1051b3d1-55ac-4eb6-a43f-5609c43b5f49","type":"BasicTicker"}},"id":"8e79a147-ad59-4994-91b6-4a67556c7b32","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2d5a2390-1e99-4149-8fd6-844780133321","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fc51b451-65cc-4ce7-9eb8-c56bf07c51c2","type":"PanTool"},{"id":"3840885c-4810-4ffd-aea5-7a866527ca77","type":"WheelZoomTool"},{"id":"1e7af33c-ec0a-4c0b-ba19-2d1152331055","type":"BoxZoomTool"},{"id":"2a9321b8-5e97-4837-a86a-9e41a442a302","type":"SaveTool"},{"id":"be8f13b1-31a1-48fa-8fd2-cb4393fc764c","type":"ResetTool"},{"id":"d32109b4-5609-4e25-bb7c-9569f1904a58","type":"HelpTool"}]},"id":"87cf74c9-0386-4798-a19b-77fe288f784d","type":"Toolbar"},{"attributes":{"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"}},"id":"fc51b451-65cc-4ce7-9eb8-c56bf07c51c2","type":"PanTool"},{"attributes":{"data_source":{"id":"effab3cb-5116-48ce-b905-c5bb0ac1f5ed","type":"ColumnDataSource"},"glyph":{"id":"a961eaca-dcc8-45e5-b0e7-b95a1a59cef7","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e682343b-6f36-4954-8866-02781412d916","type":"Line"},"selection_glyph":null},"id":"4172b4ef-a2da-409a-97f9-893723e6595d","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e682343b-6f36-4954-8866-02781412d916","type":"Line"},{"attributes":{"callback":null},"id":"e57ddcb5-c154-40cc-9b4e-ee373a8d594a","type":"DataRange1d"},{"attributes":{},"id":"9ce8b5dd-f6e6-4228-8129-7439fddf84c2","type":"ToolEvents"},{"attributes":{"below":[{"id":"8e79a147-ad59-4994-91b6-4a67556c7b32","type":"LinearAxis"}],"left":[{"id":"336f676c-85d1-4202-aa73-4cf7ab9ec07c","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"8e79a147-ad59-4994-91b6-4a67556c7b32","type":"LinearAxis"},{"id":"61d99ce3-65fb-4b5a-a05d-d65c3a27c5ff","type":"Grid"},{"id":"336f676c-85d1-4202-aa73-4cf7ab9ec07c","type":"LinearAxis"},{"id":"ce006331-27fa-4839-9d2c-23d3050fa342","type":"Grid"},{"id":"f7c4fcb2-8c4f-4dfb-9d36-542a38dcccaa","type":"BoxAnnotation"},{"id":"4172b4ef-a2da-409a-97f9-893723e6595d","type":"GlyphRenderer"},{"id":"f41a8aa2-e275-4496-8c1e-f40dc113999a","type":"LatexLabel"}],"title":{"id":"6c9ba00d-ae12-48a3-9df6-0693f0c64066","type":"Title"},"tool_events":{"id":"9ce8b5dd-f6e6-4228-8129-7439fddf84c2","type":"ToolEvents"},"toolbar":{"id":"87cf74c9-0386-4798-a19b-77fe288f784d","type":"Toolbar"},"x_range":{"id":"2d5a2390-1e99-4149-8fd6-844780133321","type":"DataRange1d"},"y_range":{"id":"e57ddcb5-c154-40cc-9b4e-ee373a8d594a","type":"DataRange1d"}},"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5130d401-8eef-41b8-83fc-cb829a37b483","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f7c4fcb2-8c4f-4dfb-9d36-542a38dcccaa","type":"BoxAnnotation"},{"attributes":{},"id":"098374fe-67b2-401f-b2e7-980cff57be01","type":"BasicTicker"},{"attributes":{"overlay":{"id":"f7c4fcb2-8c4f-4dfb-9d36-542a38dcccaa","type":"BoxAnnotation"},"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"}},"id":"1e7af33c-ec0a-4c0b-ba19-2d1152331055","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"fd54746a-5db4-486f-8e1f-b57e432dd0f1","subtype":"Figure","type":"Plot"}},"id":"be8f13b1-31a1-48fa-8fd2-cb4393fc764c","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2,0.21,0.22,0.23,0.24,0.25,0.26,0.27,0.28,0.29,0.3,0.31,0.32,0.33,0.34,0.35000000000000003,0.36,0.37,0.38,0.39,0.4,0.41000000000000003,0.42,0.43,0.44,0.45,0.46,0.47000000000000003,0.48,0.49,0.5,0.51,0.52,0.53,0.54,0.55,0.56,0.5700000000000001,0.58,0.59,0.6,0.61,0.62,0.63,0.64,0.65,0.66,0.67,0.68,0.6900000000000001,0.7000000000000001,0.71,0.72,0.73,0.74,0.75,0.76,0.77,0.78,0.79,0.8,0.81,0.8200000000000001,0.8300000000000001,0.84,0.85,0.86,0.87,0.88,0.89,0.9,0.91,0.92,0.93,0.9400000000000001,0.9500000000000001,0.96,0.97,0.98,0.99,1.0],"y":[3.0,2.992114701314478,2.968583161128631,2.9297764858882513,2.8763066800438635,2.8090169943749475,2.7289686274214118,2.6374239897486897,2.5358267949789965,2.425779291565073,2.3090169943749475,2.187381314585725,2.0627905195293135,1.9372094804706865,1.8126186854142752,1.6909830056250525,1.5742207084349273,1.464173205021003,1.3625760102513103,1.2710313725785887,1.1909830056250525,1.1236933199561365,1.0702235141117487,1.031416838871369,1.0078852986855222,1.0,1.007885298685522,1.031416838871369,1.0702235141117487,1.1236933199561363,1.1909830056250525,1.2710313725785884,1.3625760102513105,1.4641732050210037,1.5742207084349278,1.6909830056250525,1.8126186854142754,1.9372094804706868,2.062790519529313,2.1873813145857244,2.3090169943749475,2.4257792915650724,2.535826794978996,2.6374239897486893,2.7289686274214113,2.8090169943749475,2.8763066800438635,2.9297764858882513,2.968583161128631,2.9921147013144775,3.0,2.992114701314478,2.968583161128631,2.9297764858882513,2.8763066800438635,2.809016994374947,2.728968627421411,2.6374239897486897,2.5358267949789974,2.425779291565073,2.309016994374948,2.187381314585725,2.0627905195293135,1.9372094804706872,1.812618685414275,1.690983005625053,1.5742207084349267,1.4641732050210035,1.3625760102513094,1.2710313725785882,1.1909830056250528,1.123693319956137,1.0702235141117487,1.031416838871369,1.007885298685522,1.0,1.007885298685522,1.031416838871369,1.0702235141117482,1.1236933199561365,1.1909830056250523,1.271031372578589,1.3625760102513103,1.4641732050210043,1.574220708434926,1.690983005625052,1.8126186854142743,1.9372094804706865,2.0627905195293126,2.187381314585725,2.309016994374947,2.4257792915650733,2.5358267949789965,2.63742398974869,2.7289686274214118,2.809016994374947,2.876306680043863,2.9297764858882513,2.968583161128631,2.992114701314478,3.0]}},"id":"effab3cb-5116-48ce-b905-c5bb0ac1f5ed","type":"ColumnDataSource"}],"root_ids":["fd54746a-5db4-486f-8e1f-b57e432dd0f1"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"61ac7f61-c53c-4879-a9e7-8fbc583d0f61","elementid":"dcabb5bf-b939-4279-a6d9-48293b2b2dc4","modelid":"fd54746a-5db4-486f-8e1f-b57e432dd0f1"}];
                  
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