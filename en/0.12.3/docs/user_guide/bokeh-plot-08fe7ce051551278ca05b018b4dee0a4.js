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
      };var element = document.getElementById("4126f851-1365-4846-9d5d-793247fd92de");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4126f851-1365-4846-9d5d-793247fd92de' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
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
          "DrawTool": require("custom/fake.draw_tool"),
          "IonRangeSlider": require("custom/fake.ion_range_slider"),
          "LatexLabel": require("custom/fake.latex_label"),
          "MyFormatter": require("custom/fake.my_formatter"),
          "Surface3d": require("custom/fake.surface3d")
                }
              };
            }, {}],
            "6ef2a846ec8c9fb9b0078caa3403db37c8f786dfe0dac2af5423824063a82891": [function(require, module, exports) {
          module.exports = function(__obj) {
            if (!__obj) __obj = {};
            var __out = [];
            var __capture = function(callback) {
              var out = __out, result;
              __out = [];
              callback.call(this);
              result = __out.join('');
              __out = out;
              return __safe(result);
            };
            var __sanitize = function(value) {
              if (value && value.ecoSafe) {
                return value;
              } else if (typeof value !== 'undefined' && value != null) {
                return __escape(value);
              } else {
                return '';
              }
            };
            var __safe = function(value) {
              if (value && value.ecoSafe) {
                return value;
              } else {
                if (!(typeof value !== 'undefined' && value != null)) value = '';
                var result = new String(value);
                result.ecoSafe = true;
                return result;
              }
            };
            var __escape = function(value) {
              return ('' + value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
            };
            (function() {
              (function() {
                __out.push('<div class="bk-slider-parent">\n  ');
                if (this.title != null) {
                  __out.push('\n    ');
                  if (this.title.length !== 0) {
                    __out.push('\n      <label for="');
                    __out.push(__sanitize(this.id));
                    __out.push('"> ');
                    __out.push(__sanitize(this.title));
                    __out.push(': </label>\n    ');
                  }
                  __out.push('\n    <input type="text" id="');
                  __out.push(__sanitize(this.id));
                  __out.push('" readonly>\n  ');
                }
                __out.push('\n  <div class="bk-slider-horizontal">\n    <input type="text" class="slider" id="');
                __out.push(__sanitize(this.id));
                __out.push('"></div>\n  </div>\n</div>\n');
              }).call(this);
            }).call(__obj);
            return __out.join('');
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
          "custom/fake.draw_tool": [function(require, module, exports) {
          var DrawTool, DrawToolView, GestureTool, p,
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          p = require("core/properties");
          
          GestureTool = require("models/tools/gestures/gesture_tool");
          
          DrawToolView = (function(superClass) {
            extend(DrawToolView, superClass);
          
            function DrawToolView() {
              return DrawToolView.__super__.constructor.apply(this, arguments);
            }
          
            DrawToolView.prototype._pan_start = function(e) {
              return this.model.source.data = {
                x: [],
                y: []
              };
            };
          
            DrawToolView.prototype._pan = function(e) {
              var canvas, frame, vx, vy, x, y;
              frame = this.plot_model.frame;
              canvas = this.plot_view.canvas;
              vx = canvas.sx_to_vx(e.bokeh.sx);
              vy = canvas.sy_to_vy(e.bokeh.sy);
              if (!frame.contains(vx, vy)) {
                return null;
              }
              x = frame.x_mappers["default"].map_from_target(vx);
              y = frame.y_mappers["default"].map_from_target(vy);
              this.model.source.data.x.push(x);
              this.model.source.data.y.push(y);
              return this.model.source.trigger('change');
            };
          
            DrawToolView.prototype._pan_end = function(e) {
              return null;
            };
          
            return DrawToolView;
          
          })(GestureTool.View);
          
          DrawTool = (function(superClass) {
            extend(DrawTool, superClass);
          
            function DrawTool() {
              return DrawTool.__super__.constructor.apply(this, arguments);
            }
          
            DrawTool.prototype.default_view = DrawToolView;
          
            DrawTool.prototype.type = "DrawTool";
          
            DrawTool.prototype.tool_name = "Drag Span";
          
            DrawTool.prototype.icon = "bk-tool-icon-lasso-select";
          
            DrawTool.prototype.event_type = "pan";
          
            DrawTool.prototype.default_order = 12;
          
            DrawTool.define({
              source: [p.Instance]
            });
          
            return DrawTool;
          
          })(GestureTool.Model);
          
          module.exports = {
            Model: DrawTool,
            View: DrawToolView
          };
          
          }, {}],
          "custom/fake.ion_range_slider": [function(require, module, exports) {
          var $, InputWidget, IonRangeSlider, IonRangeSliderView, _, ionslidertemplate, p,
            bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          _ = require("underscore");
          
          $ = require("jquery");
          
          p = require("core/properties");
          
          InputWidget = require("models/widgets/input_widget");
          
          ionslidertemplate = require("./extensions_ion_range_slider_template");
          
          IonRangeSliderView = (function(superClass) {
            extend(IonRangeSliderView, superClass);
          
            function IonRangeSliderView() {
              this.slide = bind(this.slide, this);
              this.slidestop = bind(this.slidestop, this);
              return IonRangeSliderView.__super__.constructor.apply(this, arguments);
            }
          
            IonRangeSliderView.prototype.tagName = "div";
          
            IonRangeSliderView.prototype.template = ionslidertemplate;
          
            IonRangeSliderView.prototype.initialize = function(options) {
              var html;
              IonRangeSliderView.__super__.initialize.call(this, options);
              this.listenTo(this.model, 'change', this.render);
              this.$el.empty();
              html = this.template(this.model.attributes);
              this.$el.html(html);
              this.callbackWrapper = null;
              if (this.model.callback_policy === 'continuous') {
                this.callbackWrapper = function() {
                  var ref;
                  return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                };
              }
              if (this.model.callback_policy === 'throttle' && this.model.callback) {
                this.callbackWrapper = _.throttle(function() {
                  var ref;
                  return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                }, this.model.callback_throttle);
              }
              return this.render();
            };
          
            IonRangeSliderView.prototype.render = function() {
              var disable, from, grid, input, max, min, opts, range, slider, step, to;
              IonRangeSliderView.__super__.render.call(this);
              max = this.model.end;
              min = this.model.start;
              grid = this.model.grid;
              disable = this.model.disabled;
              range = this.model.range || [max, min];
              from = range[0], to = range[1];
              step = this.model.step || ((max - min) / 50);
              opts = {
                type: "double",
                grid: grid,
                min: min,
                max: max,
                from: from,
                to: to,
                step: step,
                disable: disable,
                onChange: this.slide,
                onFinish: this.slidestop
              };
              input = this.$el.find('.slider')[0];
              slider = jQuery(input).ionRangeSlider(opts);
              range = [from, to];
              this.$("#" + this.model.id).val(range.join(' - '));
              this.$el.find('.bk-slider-parent').height(this.model.height);
              return this;
            };
          
            IonRangeSliderView.prototype.slidestop = function(data) {
              var ref;
              if (this.model.callback_policy === 'mouseup' || this.model.callback_policy === 'throttle') {
                return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
              }
            };
          
            IonRangeSliderView.prototype.slide = function(data) {
              var range, value;
              range = [data.from, data.to];
              value = range.join(' - ');
              this.$("#" + this.model.id).val(value);
              this.model.range = range;
              if (this.callbackWrapper) {
                return this.callbackWrapper();
              }
            };
          
            return IonRangeSliderView;
          
          })(InputWidget.View);
          
          IonRangeSlider = (function(superClass) {
            extend(IonRangeSlider, superClass);
          
            function IonRangeSlider() {
              return IonRangeSlider.__super__.constructor.apply(this, arguments);
            }
          
            IonRangeSlider.prototype.default_view = IonRangeSliderView;
          
            IonRangeSlider.prototype.type = "IonRangeSlider";
          
            IonRangeSlider.define({
              range: [p.Any],
              start: [p.Number, 0],
              end: [p.Number, 1],
              step: [p.Number, 0.1],
              grid: [p.Bool, true],
              orientation: [p.Orientation, "horizontal"],
              callback_throttle: [p.Number, 200],
              callback_policy: [p.String, "throttle"]
            });
          
            return IonRangeSlider;
          
          })(InputWidget.Model);
          
          module.exports = {
            Model: IonRangeSlider,
            View: IonRangeSliderView
          };
          
          }, {"./extensions_ion_range_slider_template": "6ef2a846ec8c9fb9b0078caa3403db37c8f786dfe0dac2af5423824063a82891"}],
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
          
          }, {}],
          "custom/fake.surface3d": [function(require, module, exports) {
          var $, LayoutDOM, OPTIONS, Surface3d, Surface3dView, _, p,
            bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          _ = require("underscore");
          
          $ = require("jquery");
          
          p = require("core/properties");
          
          LayoutDOM = require("models/layouts/layout_dom");
          
          OPTIONS = {
            width: '600px',
            height: '600px',
            style: 'surface',
            showPerspective: true,
            showGrid: true,
            keepAspectRatio: true,
            verticalRatio: 1.0,
            legendLabel: 'stuff',
            cameraPosition: {
              horizontal: -0.35,
              vertical: 0.22,
              distance: 1.8
            }
          };
          
          Surface3dView = (function(superClass) {
            extend(Surface3dView, superClass);
          
            function Surface3dView() {
              this._init = bind(this._init, this);
              return Surface3dView.__super__.constructor.apply(this, arguments);
            }
          
            Surface3dView.prototype.initialize = function(options) {
              var url;
              Surface3dView.__super__.initialize.call(this, options);
              url = "https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js";
              return $.getScript(url).done(this._init);
            };
          
            Surface3dView.prototype._init = function() {
              this._graph = new vis.Graph3d(this.$el[0], this.get_data(), OPTIONS);
              return this.listenTo(this.model.data_source, 'change', (function(_this) {
                return function() {
                  return _this._graph.setData(_this.get_data());
                };
              })(this));
            };
          
            Surface3dView.prototype.get_data = function() {
              var data, i, j, ref, source;
              data = new vis.DataSet();
              source = this.model.data_source;
              for (i = j = 0, ref = source.get_length(); 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                data.add({
                  x: source.get_column(this.model.x)[i],
                  y: source.get_column(this.model.y)[i],
                  z: source.get_column(this.model.z)[i],
                  style: source.get_column(this.model.color)[i]
                });
              }
              return data;
            };
          
            return Surface3dView;
          
          })(LayoutDOM.View);
          
          Surface3d = (function(superClass) {
            extend(Surface3d, superClass);
          
            function Surface3d() {
              return Surface3d.__super__.constructor.apply(this, arguments);
            }
          
            Surface3d.prototype.default_view = Surface3dView;
          
            Surface3d.prototype.type = "Surface3d";
          
            Surface3d.define({
              x: [p.String],
              y: [p.String],
              z: [p.String],
              color: [p.String],
              data_source: [p.Instance]
            });
          
            return Surface3d;
          
          })(LayoutDOM.Model);
          
          module.exports = {
            Model: Surface3d,
            View: Surface3dView
          };
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"b1854e4a-4ba6-44ce-b770-12a0358acd9e":{"roots":{"references":[{"attributes":{"below":[{"id":"1511964a-29e3-4977-b288-74cc95787905","type":"LinearAxis"}],"left":[{"id":"2888d637-89d4-4c2c-87ea-e8062a43317c","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1511964a-29e3-4977-b288-74cc95787905","type":"LinearAxis"},{"id":"d98e497e-e6be-4e10-a124-60f3676ae06e","type":"Grid"},{"id":"2888d637-89d4-4c2c-87ea-e8062a43317c","type":"LinearAxis"},{"id":"08be4873-844c-48ad-b7b8-af09b2c1cbba","type":"Grid"},{"id":"e082fb5c-ffd3-46ca-ac36-a7768095f5b9","type":"BoxAnnotation"},{"id":"5c260e7f-af9e-4763-866a-10385a55cd1c","type":"GlyphRenderer"}],"title":{"id":"e71413d1-32fd-4046-ab8d-afa77c26ad7f","type":"Title"},"tool_events":{"id":"cf3f33f1-59aa-4913-8b57-b1309d72d11e","type":"ToolEvents"},"toolbar":{"id":"abc25414-e02d-43df-a4b2-17b7ad7f8cd1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7610564d-8f1c-4aed-8647-c6b40b1b2403","type":"DataRange1d"},"y_range":{"id":"99c3e9f9-97df-46a4-b814-11b188b54814","type":"DataRange1d"}},"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7610564d-8f1c-4aed-8647-c6b40b1b2403","type":"DataRange1d"},{"attributes":{"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"}},"id":"c6d4e65f-4c96-4eb3-b993-cf1bf86305c3","type":"HelpTool"},{"attributes":{"plot":null,"text":null},"id":"e71413d1-32fd-4046-ab8d-afa77c26ad7f","type":"Title"},{"attributes":{},"id":"03d0bab2-ed92-433f-b5a1-9954924298bc","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"edeb0490-6632-4d45-a95e-97a4e5f79a09","type":"PanTool"},{"id":"8c495654-dd7e-4c76-8a41-1ec83467200f","type":"WheelZoomTool"},{"id":"e831d833-df06-4d3c-aa3b-5128ddae1e25","type":"BoxZoomTool"},{"id":"d01d5ff2-fda6-4298-bac1-f4216bdda8ff","type":"SaveTool"},{"id":"4bb8cd63-d513-45e8-9ba7-0fc12c53b469","type":"ResetTool"},{"id":"4f1eaead-282d-4c2f-b661-7c060dd440b3","type":"HelpTool"}]},"id":"4294286b-a8c2-4081-b96d-b87437e7b153","type":"Toolbar"},{"attributes":{},"id":"367bd043-a5c5-4220-90ab-44d60d892918","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"a2f7ce69-8771-4d3f-8ea4-9b0cc9072e4f","type":"ColumnDataSource"},{"attributes":{},"id":"cfbdd298-42b4-49e2-9485-369cd08be23e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1919cc17-aabe-437b-8293-b066f7efd5aa","type":"BasicTickFormatter"},"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a08c62b-3ea7-4150-9604-e68d4cee5839","type":"BasicTicker"}},"id":"1511964a-29e3-4977-b288-74cc95787905","type":"LinearAxis"},{"attributes":{"callback":null},"id":"655fb5e6-e325-4d16-b86f-d65b43269f7e","type":"DataRange1d"},{"attributes":{"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"}},"id":"906ad5ac-32b8-41ab-9a76-7a6421a6505b","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad468bd9-6124-44ce-8968-feeda558157c","type":"Square"},{"attributes":{"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"},"ticker":{"id":"54fd6302-f8f5-4e05-92ce-2e9a3ebe46a6","type":"BasicTicker"}},"id":"13030a0d-50dc-461c-84a2-b6dbc9891dad","type":"Grid"},{"attributes":{"height":250,"width":250},"id":"8c42131b-50bc-4454-ae4c-d0360566876c","type":"Spacer"},{"attributes":{},"id":"3e66d22d-7769-4693-8f19-321cb2ff4afe","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"db4e24ec-cfe0-406e-9663-4f00ee9540db","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b960ee55-6cc7-463f-ab48-48745dc188ad","type":"Circle"},{"attributes":{},"id":"70ec8e74-dd74-47a5-a1c1-8b6af197f400","type":"ToolEvents"},{"attributes":{"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"}},"id":"4bb8cd63-d513-45e8-9ba7-0fc12c53b469","type":"ResetTool"},{"attributes":{"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"}},"id":"8c495654-dd7e-4c76-8a41-1ec83467200f","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"6a68498d-5e40-48c5-abb8-7320ab81c467","type":"ToolbarBox"},{"id":"340d60c5-7004-40ec-b2dc-ed4a0f4fe917","type":"Column"}]},"id":"b0a3be79-9f4d-4ff3-830c-d836ac2dd682","type":"Column"},{"attributes":{"formatter":{"id":"03d0bab2-ed92-433f-b5a1-9954924298bc","type":"BasicTickFormatter"},"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"},"ticker":{"id":"56c21fdb-9bf3-4c66-af8b-24b5161e5ec7","type":"BasicTicker"}},"id":"0e32ec7e-793b-4492-8ef1-c925a303fde7","type":"LinearAxis"},{"attributes":{"below":[{"id":"a4f7e9bc-eace-4972-a1ed-5d46c1286499","type":"LinearAxis"}],"left":[{"id":"26d8f3cb-40ea-448a-ae14-ab88d4bea096","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a4f7e9bc-eace-4972-a1ed-5d46c1286499","type":"LinearAxis"},{"id":"f7a8d23e-ca21-44a3-84df-e6e5db7e75bc","type":"Grid"},{"id":"26d8f3cb-40ea-448a-ae14-ab88d4bea096","type":"LinearAxis"},{"id":"61ced429-bf50-44d6-b6de-9fa1a111b0b7","type":"Grid"},{"id":"3833ae84-e6c9-4325-9315-d0508636772c","type":"BoxAnnotation"},{"id":"c801e4df-f488-473e-a3ce-3567e9ef53f1","type":"GlyphRenderer"}],"title":{"id":"db4e24ec-cfe0-406e-9663-4f00ee9540db","type":"Title"},"tool_events":{"id":"70ec8e74-dd74-47a5-a1c1-8b6af197f400","type":"ToolEvents"},"toolbar":{"id":"892383ee-04f6-46f4-ae89-b22770f65318","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cbe3af82-fafd-4621-814f-3b605cf6a4f1","type":"DataRange1d"},"y_range":{"id":"2401fbe7-05c1-44db-8f1a-8704ed860464","type":"DataRange1d"}},"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"78c2e337-1286-4ea7-b152-ee90b9265b82","type":"BasicTickFormatter"},{"attributes":{},"id":"56c21fdb-9bf3-4c66-af8b-24b5161e5ec7","type":"BasicTicker"},{"attributes":{},"id":"0a08c62b-3ea7-4150-9604-e68d4cee5839","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"},"ticker":{"id":"56c21fdb-9bf3-4c66-af8b-24b5161e5ec7","type":"BasicTicker"}},"id":"6daae597-f94c-4fdd-b1d2-292c7250c094","type":"Grid"},{"attributes":{"formatter":{"id":"78c2e337-1286-4ea7-b152-ee90b9265b82","type":"BasicTickFormatter"},"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"},"ticker":{"id":"367bd043-a5c5-4220-90ab-44d60d892918","type":"BasicTicker"}},"id":"a4f7e9bc-eace-4972-a1ed-5d46c1286499","type":"LinearAxis"},{"attributes":{"children":[{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"},{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"}]},"id":"c138b143-4b76-43e3-b1e6-955aac1438e4","type":"Row"},{"attributes":{"callback":null},"id":"9342e01e-6a29-4b79-8657-7e31624830da","type":"DataRange1d"},{"attributes":{"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a08c62b-3ea7-4150-9604-e68d4cee5839","type":"BasicTicker"}},"id":"d98e497e-e6be-4e10-a124-60f3676ae06e","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"e40b87ea-c0ea-468f-96a2-6161570f1a3e","type":"Title"},{"attributes":{"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"},"ticker":{"id":"367bd043-a5c5-4220-90ab-44d60d892918","type":"BasicTicker"}},"id":"f7a8d23e-ca21-44a3-84df-e6e5db7e75bc","type":"Grid"},{"attributes":{"callback":null},"id":"99c3e9f9-97df-46a4-b814-11b188b54814","type":"DataRange1d"},{"attributes":{"callback":null},"id":"2401fbe7-05c1-44db-8f1a-8704ed860464","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9d10b115-fc98-4c9b-9b33-4ef73b701efb","type":"BoxAnnotation"},{"attributes":{},"id":"584c7331-fe7d-450b-a50f-8100de12b8eb","type":"BasicTickFormatter"},{"attributes":{},"id":"cf3f33f1-59aa-4913-8b57-b1309d72d11e","type":"ToolEvents"},{"attributes":{"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"}},"id":"4f1eaead-282d-4c2f-b661-7c060dd440b3","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e048976e-4a8d-4a39-8d43-5ee218dac701","type":"Triangle"},{"attributes":{"formatter":{"id":"e7517f37-0ee7-441f-8a3f-406536ef15fa","type":"BasicTickFormatter"},"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e66d22d-7769-4693-8f19-321cb2ff4afe","type":"BasicTicker"}},"id":"26d8f3cb-40ea-448a-ae14-ab88d4bea096","type":"LinearAxis"},{"attributes":{"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"}},"id":"4f1e9825-4160-47e0-af83-9369671caf5f","type":"ResetTool"},{"attributes":{"formatter":{"id":"584c7331-fe7d-450b-a50f-8100de12b8eb","type":"BasicTickFormatter"},"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"},"ticker":{"id":"54fd6302-f8f5-4e05-92ce-2e9a3ebe46a6","type":"BasicTicker"}},"id":"9db5afaa-1b52-4259-a893-618def05f1b1","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c304de11-949d-49db-8164-df5497c80235","type":"ColumnDataSource"},"glyph":{"id":"e048976e-4a8d-4a39-8d43-5ee218dac701","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"733fa94e-c3d6-43bd-95a9-07c33d2aea06","type":"Triangle"},"selection_glyph":null},"id":"d09ec383-67fa-4a5d-9b27-b316c47b0d1d","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f0f7a7fd-746e-4efd-a521-d2aaff500618","type":"PanTool"},{"id":"22a4aef2-97ac-4e38-a92d-f9cdbf0f92f1","type":"WheelZoomTool"},{"id":"ca1b4f15-0217-4775-9c14-9bca678f85ad","type":"BoxZoomTool"},{"id":"a68cdf20-3a24-403b-81df-0100fdc3758a","type":"SaveTool"},{"id":"906ad5ac-32b8-41ab-9a76-7a6421a6505b","type":"ResetTool"},{"id":"c6d4e65f-4c96-4eb3-b993-cf1bf86305c3","type":"HelpTool"}]},"id":"892383ee-04f6-46f4-ae89-b22770f65318","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e66d22d-7769-4693-8f19-321cb2ff4afe","type":"BasicTicker"}},"id":"61ced429-bf50-44d6-b6de-9fa1a111b0b7","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"c304de11-949d-49db-8164-df5497c80235","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"}},"id":"a68cdf20-3a24-403b-81df-0100fdc3758a","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"648e59cd-aff3-40af-9fd8-de0cfee21b82","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3833ae84-e6c9-4325-9315-d0508636772c","type":"BoxAnnotation"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"f0f7a7fd-746e-4efd-a521-d2aaff500618","type":"PanTool"},{"id":"22a4aef2-97ac-4e38-a92d-f9cdbf0f92f1","type":"WheelZoomTool"},{"id":"ca1b4f15-0217-4775-9c14-9bca678f85ad","type":"BoxZoomTool"},{"id":"a68cdf20-3a24-403b-81df-0100fdc3758a","type":"SaveTool"},{"id":"906ad5ac-32b8-41ab-9a76-7a6421a6505b","type":"ResetTool"},{"id":"c6d4e65f-4c96-4eb3-b993-cf1bf86305c3","type":"HelpTool"},{"id":"edeb0490-6632-4d45-a95e-97a4e5f79a09","type":"PanTool"},{"id":"8c495654-dd7e-4c76-8a41-1ec83467200f","type":"WheelZoomTool"},{"id":"e831d833-df06-4d3c-aa3b-5128ddae1e25","type":"BoxZoomTool"},{"id":"d01d5ff2-fda6-4298-bac1-f4216bdda8ff","type":"SaveTool"},{"id":"4bb8cd63-d513-45e8-9ba7-0fc12c53b469","type":"ResetTool"},{"id":"4f1eaead-282d-4c2f-b661-7c060dd440b3","type":"HelpTool"},{"id":"d3889426-1ae2-4a7f-8a6e-30b234c988b7","type":"PanTool"},{"id":"cb0bce61-9a50-4815-a1f5-a07e292fe226","type":"WheelZoomTool"},{"id":"4891d725-aa90-4e14-b835-0ac3dc2abae7","type":"BoxZoomTool"},{"id":"e6e8a865-d982-4f6d-9181-c3bb536bdd72","type":"SaveTool"},{"id":"4f1e9825-4160-47e0-af83-9369671caf5f","type":"ResetTool"},{"id":"410e2480-2318-47fd-9685-ea3f9c94030a","type":"HelpTool"}]},"id":"6a68498d-5e40-48c5-abb8-7320ab81c467","type":"ToolbarBox"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"162b0714-b5fb-457a-82ad-f863d5e79e73","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a2f7ce69-8771-4d3f-8ea4-9b0cc9072e4f","type":"ColumnDataSource"},"glyph":{"id":"1585b15a-0fbf-4b91-bcda-0c6cffd8bd3c","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"ad468bd9-6124-44ce-8968-feeda558157c","type":"Square"},"selection_glyph":null},"id":"5c260e7f-af9e-4763-866a-10385a55cd1c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"}},"id":"410e2480-2318-47fd-9685-ea3f9c94030a","type":"HelpTool"},{"attributes":{},"id":"7d7e8b6f-1dd4-4090-8f30-95f729a914d1","type":"ToolEvents"},{"attributes":{"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"}},"id":"d3889426-1ae2-4a7f-8a6e-30b234c988b7","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"},"ticker":{"id":"73d90af5-82e6-475a-8485-f1627704dc3e","type":"BasicTicker"}},"id":"08be4873-844c-48ad-b7b8-af09b2c1cbba","type":"Grid"},{"attributes":{"overlay":{"id":"9d10b115-fc98-4c9b-9b33-4ef73b701efb","type":"BoxAnnotation"},"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"}},"id":"e831d833-df06-4d3c-aa3b-5128ddae1e25","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"}},"id":"f0f7a7fd-746e-4efd-a521-d2aaff500618","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3889426-1ae2-4a7f-8a6e-30b234c988b7","type":"PanTool"},{"id":"cb0bce61-9a50-4815-a1f5-a07e292fe226","type":"WheelZoomTool"},{"id":"4891d725-aa90-4e14-b835-0ac3dc2abae7","type":"BoxZoomTool"},{"id":"e6e8a865-d982-4f6d-9181-c3bb536bdd72","type":"SaveTool"},{"id":"4f1e9825-4160-47e0-af83-9369671caf5f","type":"ResetTool"},{"id":"410e2480-2318-47fd-9685-ea3f9c94030a","type":"HelpTool"}]},"id":"abc25414-e02d-43df-a4b2-17b7ad7f8cd1","type":"Toolbar"},{"attributes":{},"id":"54fd6302-f8f5-4e05-92ce-2e9a3ebe46a6","type":"BasicTicker"},{"attributes":{"children":[{"id":"c138b143-4b76-43e3-b1e6-955aac1438e4","type":"Row"},{"id":"ce8defbb-0782-4e51-af35-2b6e2470c83b","type":"Row"}]},"id":"340d60c5-7004-40ec-b2dc-ed4a0f4fe917","type":"Column"},{"attributes":{"formatter":{"id":"cfbdd298-42b4-49e2-9485-369cd08be23e","type":"BasicTickFormatter"},"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"},"ticker":{"id":"73d90af5-82e6-475a-8485-f1627704dc3e","type":"BasicTicker"}},"id":"2888d637-89d4-4c2c-87ea-e8062a43317c","type":"LinearAxis"},{"attributes":{"overlay":{"id":"e082fb5c-ffd3-46ca-ac36-a7768095f5b9","type":"BoxAnnotation"},"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"}},"id":"4891d725-aa90-4e14-b835-0ac3dc2abae7","type":"BoxZoomTool"},{"attributes":{},"id":"1919cc17-aabe-437b-8293-b066f7efd5aa","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"}},"id":"d01d5ff2-fda6-4298-bac1-f4216bdda8ff","type":"SaveTool"},{"attributes":{},"id":"73d90af5-82e6-475a-8485-f1627704dc3e","type":"BasicTicker"},{"attributes":{"children":[{"id":"8c42131b-50bc-4454-ae4c-d0360566876c","type":"Spacer"},{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"}]},"id":"ce8defbb-0782-4e51-af35-2b6e2470c83b","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e082fb5c-ffd3-46ca-ac36-a7768095f5b9","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"733fa94e-c3d6-43bd-95a9-07c33d2aea06","type":"Triangle"},{"attributes":{"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"}},"id":"cb0bce61-9a50-4815-a1f5-a07e292fe226","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"}},"id":"edeb0490-6632-4d45-a95e-97a4e5f79a09","type":"PanTool"},{"attributes":{},"id":"e7517f37-0ee7-441f-8a3f-406536ef15fa","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"162b0714-b5fb-457a-82ad-f863d5e79e73","type":"ColumnDataSource"},"glyph":{"id":"648e59cd-aff3-40af-9fd8-de0cfee21b82","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"b960ee55-6cc7-463f-ab48-48745dc188ad","type":"Circle"},"selection_glyph":null},"id":"c801e4df-f488-473e-a3ce-3567e9ef53f1","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9db5afaa-1b52-4259-a893-618def05f1b1","type":"LinearAxis"}],"left":[{"id":"0e32ec7e-793b-4492-8ef1-c925a303fde7","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9db5afaa-1b52-4259-a893-618def05f1b1","type":"LinearAxis"},{"id":"13030a0d-50dc-461c-84a2-b6dbc9891dad","type":"Grid"},{"id":"0e32ec7e-793b-4492-8ef1-c925a303fde7","type":"LinearAxis"},{"id":"6daae597-f94c-4fdd-b1d2-292c7250c094","type":"Grid"},{"id":"9d10b115-fc98-4c9b-9b33-4ef73b701efb","type":"BoxAnnotation"},{"id":"d09ec383-67fa-4a5d-9b27-b316c47b0d1d","type":"GlyphRenderer"}],"title":{"id":"e40b87ea-c0ea-468f-96a2-6161570f1a3e","type":"Title"},"tool_events":{"id":"7d7e8b6f-1dd4-4090-8f30-95f729a914d1","type":"ToolEvents"},"toolbar":{"id":"4294286b-a8c2-4081-b96d-b87437e7b153","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9342e01e-6a29-4b79-8657-7e31624830da","type":"DataRange1d"},"y_range":{"id":"655fb5e6-e325-4d16-b86f-d65b43269f7e","type":"DataRange1d"}},"id":"e1d41fbf-e0c6-489c-8be3-f8ba643e397e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"06e3a9f8-fa76-43c4-b423-d60cb349dc48","subtype":"Figure","type":"Plot"}},"id":"e6e8a865-d982-4f6d-9181-c3bb536bdd72","type":"SaveTool"},{"attributes":{"overlay":{"id":"3833ae84-e6c9-4325-9315-d0508636772c","type":"BoxAnnotation"},"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"}},"id":"ca1b4f15-0217-4775-9c14-9bca678f85ad","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"68f7cb20-d507-40ae-91d9-09e551c93470","subtype":"Figure","type":"Plot"}},"id":"22a4aef2-97ac-4e38-a92d-f9cdbf0f92f1","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1585b15a-0fbf-4b91-bcda-0c6cffd8bd3c","type":"Square"},{"attributes":{"callback":null},"id":"cbe3af82-fafd-4621-814f-3b605cf6a4f1","type":"DataRange1d"}],"root_ids":["b0a3be79-9f4d-4ff3-830c-d836ac2dd682"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"b1854e4a-4ba6-44ce-b770-12a0358acd9e","elementid":"4126f851-1365-4846-9d5d-793247fd92de","modelid":"b0a3be79-9f4d-4ff3-830c-d836ac2dd682"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.skinFlat.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.skinFlat.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/img/sprite-skin-flat.png");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/img/sprite-skin-flat.png");
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