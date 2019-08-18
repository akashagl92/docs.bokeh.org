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
      };var element = document.getElementById("ca2a9344-b2a9-4ce1-a5a0-109314f3be43");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca2a9344-b2a9-4ce1-a5a0-109314f3be43' but no matching script tag was found. ")
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
                  var docs_json = {"4062d20d-ce5d-498d-8013-7a842f3cf785":{"roots":{"references":[{"attributes":{"children":[{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"},{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"},{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"}]},"id":"14fa9913-f0b2-4bc2-8153-aea2f18098d1","type":"Column"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"5e968dab-fc29-4412-862a-1f7ee7fa495c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a15000f-da00-48c0-9985-9c29003a6aee","type":"Circle"},{"attributes":{"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"}},"id":"018c6d02-cccc-4dc2-b44b-0fac0ce43e26","type":"SaveTool"},{"attributes":{"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"}},"id":"58cea541-2370-48e2-b896-99780ede7b61","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"0923832d-5eb6-4514-8fd7-b2dc54616501","type":"DataRange1d"},{"attributes":{"callback":null},"id":"e83d3245-1b49-4bcb-b67f-396c9bfdd8c9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d5b9b88d-6f17-4c43-913c-a7c2a9a47670","type":"BasicTickFormatter"},"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9f4fc20-590c-4d03-97ef-581d9f3eaf30","type":"BasicTicker"}},"id":"4557591a-bfe6-43de-8010-46cb13eb3f75","type":"LinearAxis"},{"attributes":{"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"}},"id":"82e2fdd7-ab2f-4f92-8279-f5bbc4a4fec8","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"672506c4-b4d6-4072-a3c5-5832153ef3e1","type":"BoxAnnotation"},{"attributes":{},"id":"ef6c9247-9ced-4cc8-a2ec-0b7eae0e7f3e","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"01175894-37ee-4a4c-bc1d-0204af2d25d9","type":"Triangle"},{"attributes":{"below":[{"id":"721d068b-eeb1-4769-946c-c634f475bf3a","type":"LinearAxis"}],"left":[{"id":"3b68a6b6-e056-4fbf-b6a5-dbc13d36dac7","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"721d068b-eeb1-4769-946c-c634f475bf3a","type":"LinearAxis"},{"id":"8acb255f-28b3-4998-9406-deeae6ba3468","type":"Grid"},{"id":"3b68a6b6-e056-4fbf-b6a5-dbc13d36dac7","type":"LinearAxis"},{"id":"68851678-eb9a-4265-b95f-95469a05f58c","type":"Grid"},{"id":"cc840806-888a-4570-802f-d38a7d98e0be","type":"BoxAnnotation"},{"id":"58bb5020-3235-4992-8c75-05e0304c05d4","type":"GlyphRenderer"}],"title":{"id":"61a91fe7-70f3-4e63-92da-adbbafa212cd","type":"Title"},"tool_events":{"id":"09a91503-d180-4533-b127-d38fb0cddb66","type":"ToolEvents"},"toolbar":{"id":"19ab7aaf-d792-493b-91e5-724ea9f836a3","type":"Toolbar"},"x_range":{"id":"fdb7ee45-57e4-4993-af24-88fc47497317","type":"DataRange1d"},"y_range":{"id":"0923832d-5eb6-4514-8fd7-b2dc54616501","type":"DataRange1d"}},"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"cc840806-888a-4570-802f-d38a7d98e0be","type":"BoxAnnotation"},"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"}},"id":"7bd4e707-8d63-4857-9989-cfcb4bb830e3","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"},"ticker":{"id":"026a5fb4-52d2-4851-9cdb-3e3d14e47c36","type":"BasicTicker"}},"id":"8a0b00f1-dd46-4749-93ed-e55c4fd3c499","type":"Grid"},{"attributes":{},"id":"ccd5c17f-be43-46d6-8d51-0bc7659b01c2","type":"BasicTickFormatter"},{"attributes":{},"id":"7c4e3255-c119-4e80-9a75-1e32e5603245","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9b93f0a4-b6d1-4628-8c1a-ee542c163cf8","type":"DataRange1d"},{"attributes":{},"id":"b94a643f-d260-460f-bc51-01757ce97c65","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"65123e72-db5d-4479-b4bb-36d591626ece","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e6eb662-d368-4ac3-8a63-1d4b212389f2","type":"Square"},{"attributes":{"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"}},"id":"8e5995ec-c071-4b0c-84e0-ef5f4a1f9a70","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cc840806-888a-4570-802f-d38a7d98e0be","type":"BoxAnnotation"},{"attributes":{},"id":"abe0b789-88b8-40d2-9c80-f8fb89713ff6","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"3e856a41-2969-4402-acba-82b77329eab8","type":"DataRange1d"},{"attributes":{},"id":"f63f7d56-5241-43a1-880a-8893598a074b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"88368a05-3c55-4d2b-ac0f-790fde3a3110","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"b54b0fdd-61ec-4d7b-82b4-2587aceec4f2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"}},"id":"6efdf3be-bb45-4ef4-a965-60cd3e297b28","type":"PanTool"},{"attributes":{"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"}},"id":"edf1046e-14b1-41e8-9e1f-d6c0c766b7dd","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"50e16be9-7af0-45b2-92aa-d13968f81f2f","type":"Title"},{"attributes":{"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba838abe-34c0-48b2-aa4f-b18203ca51c4","type":"BasicTicker"}},"id":"8acb255f-28b3-4998-9406-deeae6ba3468","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"06e830d0-a413-4180-97fe-d74f10139559","type":"PanTool"},{"id":"edf1046e-14b1-41e8-9e1f-d6c0c766b7dd","type":"WheelZoomTool"},{"id":"7bd4e707-8d63-4857-9989-cfcb4bb830e3","type":"BoxZoomTool"},{"id":"018c6d02-cccc-4dc2-b44b-0fac0ce43e26","type":"SaveTool"},{"id":"2e99a896-5336-4367-b46a-6ef34ea54d7b","type":"ResetTool"},{"id":"cc349b7a-60cf-49ba-a2c1-4a41689b94ba","type":"HelpTool"}]},"id":"19ab7aaf-d792-493b-91e5-724ea9f836a3","type":"Toolbar"},{"attributes":{"formatter":{"id":"af1981bf-081b-421a-9675-85a08251bced","type":"BasicTickFormatter"},"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"},"ticker":{"id":"026a5fb4-52d2-4851-9cdb-3e3d14e47c36","type":"BasicTicker"}},"id":"a141a4bf-3284-48d1-b4b2-e21ec7eddc06","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6efdf3be-bb45-4ef4-a965-60cd3e297b28","type":"PanTool"},{"id":"50360b0c-3cb8-4e70-a6d4-1ff3cb4edd4c","type":"WheelZoomTool"},{"id":"217204ac-9dc6-49f0-af53-812b2747cb24","type":"BoxZoomTool"},{"id":"6e4fdc72-b22e-4f9c-aac9-a25327e2a6b3","type":"SaveTool"},{"id":"82e2fdd7-ab2f-4f92-8279-f5bbc4a4fec8","type":"ResetTool"},{"id":"47e3fe0e-85e4-4204-b73e-1823507d187d","type":"HelpTool"}]},"id":"399fb898-29d2-45c2-9fa6-07ca4571e0d6","type":"Toolbar"},{"attributes":{},"id":"39aabaf1-139e-4d4e-be3e-d59e4f22c09f","type":"ToolEvents"},{"attributes":{"formatter":{"id":"59945b54-afc9-493f-8db6-c914c9342213","type":"BasicTickFormatter"},"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"f63f7d56-5241-43a1-880a-8893598a074b","type":"BasicTicker"}},"id":"2fbf6474-a414-4173-b0af-0589f8aa4467","type":"LinearAxis"},{"attributes":{"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"}},"id":"fc433bed-e07f-4ed4-9f46-da22777842a4","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"b9e8f9e7-76c3-468f-9587-935e941de990","type":"Title"},{"attributes":{"data_source":{"id":"b54b0fdd-61ec-4d7b-82b4-2587aceec4f2","type":"ColumnDataSource"},"glyph":{"id":"021cac5d-a6c6-474a-99f7-b00dbb6a95bb","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"01175894-37ee-4a4c-bc1d-0204af2d25d9","type":"Triangle"},"selection_glyph":null},"id":"58bb5020-3235-4992-8c75-05e0304c05d4","type":"GlyphRenderer"},{"attributes":{},"id":"af1981bf-081b-421a-9675-85a08251bced","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"f63f7d56-5241-43a1-880a-8893598a074b","type":"BasicTicker"}},"id":"3d6f39ee-e5f1-4268-accd-80973014f5d9","type":"Grid"},{"attributes":{},"id":"fad07222-5feb-4432-aac1-ab8c5cc1a758","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b94a643f-d260-460f-bc51-01757ce97c65","type":"BasicTickFormatter"},"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c4e3255-c119-4e80-9a75-1e32e5603245","type":"BasicTicker"}},"id":"3b68a6b6-e056-4fbf-b6a5-dbc13d36dac7","type":"LinearAxis"},{"attributes":{"below":[{"id":"2fbf6474-a414-4173-b0af-0589f8aa4467","type":"LinearAxis"}],"left":[{"id":"0a59b153-d6ae-4aba-8c4f-82dfa60d3197","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"2fbf6474-a414-4173-b0af-0589f8aa4467","type":"LinearAxis"},{"id":"3d6f39ee-e5f1-4268-accd-80973014f5d9","type":"Grid"},{"id":"0a59b153-d6ae-4aba-8c4f-82dfa60d3197","type":"LinearAxis"},{"id":"32093687-1c3a-4312-94c0-9e91f89a086d","type":"Grid"},{"id":"672506c4-b4d6-4072-a3c5-5832153ef3e1","type":"BoxAnnotation"},{"id":"385d3ab8-8598-4088-b7d9-c302f2cc8ed4","type":"GlyphRenderer"}],"title":{"id":"50e16be9-7af0-45b2-92aa-d13968f81f2f","type":"Title"},"tool_events":{"id":"ef6c9247-9ced-4cc8-a2ec-0b7eae0e7f3e","type":"ToolEvents"},"toolbar":{"id":"7bd433a8-f86f-4b52-b538-c176c39c98f1","type":"Toolbar"},"x_range":{"id":"31ff8210-06e4-4093-87fd-b4540ee73ed3","type":"DataRange1d"},"y_range":{"id":"9b93f0a4-b6d1-4628-8c1a-ee542c163cf8","type":"DataRange1d"}},"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"}},"id":"4c4cc14c-58f5-44fb-a1a0-ef82cd553491","type":"HelpTool"},{"attributes":{"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"}},"id":"06e830d0-a413-4180-97fe-d74f10139559","type":"PanTool"},{"attributes":{"formatter":{"id":"ccd5c17f-be43-46d6-8d51-0bc7659b01c2","type":"BasicTickFormatter"},"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"fad07222-5feb-4432-aac1-ab8c5cc1a758","type":"BasicTicker"}},"id":"0a59b153-d6ae-4aba-8c4f-82dfa60d3197","type":"LinearAxis"},{"attributes":{"formatter":{"id":"abe0b789-88b8-40d2-9c80-f8fb89713ff6","type":"BasicTickFormatter"},"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba838abe-34c0-48b2-aa4f-b18203ca51c4","type":"BasicTicker"}},"id":"721d068b-eeb1-4769-946c-c634f475bf3a","type":"LinearAxis"},{"attributes":{"overlay":{"id":"672506c4-b4d6-4072-a3c5-5832153ef3e1","type":"BoxAnnotation"},"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"}},"id":"0b8e7168-a0c1-4840-b946-3ca38a55b5bd","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":null},"id":"61a91fe7-70f3-4e63-92da-adbbafa212cd","type":"Title"},{"attributes":{"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"}},"id":"47e3fe0e-85e4-4204-b73e-1823507d187d","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"021cac5d-a6c6-474a-99f7-b00dbb6a95bb","type":"Triangle"},{"attributes":{"callback":null},"id":"fdb7ee45-57e4-4993-af24-88fc47497317","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c4e3255-c119-4e80-9a75-1e32e5603245","type":"BasicTicker"}},"id":"68851678-eb9a-4265-b95f-95469a05f58c","type":"Grid"},{"attributes":{},"id":"ba838abe-34c0-48b2-aa4f-b18203ca51c4","type":"BasicTicker"},{"attributes":{"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"}},"id":"b5a5e46b-5da9-4043-bf18-5fc7139e10f9","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fc433bed-e07f-4ed4-9f46-da22777842a4","type":"PanTool"},{"id":"58cea541-2370-48e2-b896-99780ede7b61","type":"WheelZoomTool"},{"id":"0b8e7168-a0c1-4840-b946-3ca38a55b5bd","type":"BoxZoomTool"},{"id":"8e5995ec-c071-4b0c-84e0-ef5f4a1f9a70","type":"SaveTool"},{"id":"b5a5e46b-5da9-4043-bf18-5fc7139e10f9","type":"ResetTool"},{"id":"4c4cc14c-58f5-44fb-a1a0-ef82cd553491","type":"HelpTool"}]},"id":"7bd433a8-f86f-4b52-b538-c176c39c98f1","type":"Toolbar"},{"attributes":{},"id":"026a5fb4-52d2-4851-9cdb-3e3d14e47c36","type":"BasicTicker"},{"attributes":{"below":[{"id":"4557591a-bfe6-43de-8010-46cb13eb3f75","type":"LinearAxis"}],"left":[{"id":"a141a4bf-3284-48d1-b4b2-e21ec7eddc06","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"4557591a-bfe6-43de-8010-46cb13eb3f75","type":"LinearAxis"},{"id":"c3f84129-481b-4733-ae04-8057b2cbf6f1","type":"Grid"},{"id":"a141a4bf-3284-48d1-b4b2-e21ec7eddc06","type":"LinearAxis"},{"id":"8a0b00f1-dd46-4749-93ed-e55c4fd3c499","type":"Grid"},{"id":"337a554d-b210-4caf-8920-23a8e0c08405","type":"BoxAnnotation"},{"id":"038dba61-88d1-4b6f-9abc-2049ee802461","type":"GlyphRenderer"}],"title":{"id":"b9e8f9e7-76c3-468f-9587-935e941de990","type":"Title"},"tool_events":{"id":"39aabaf1-139e-4d4e-be3e-d59e4f22c09f","type":"ToolEvents"},"toolbar":{"id":"399fb898-29d2-45c2-9fa6-07ca4571e0d6","type":"Toolbar"},"x_range":{"id":"e83d3245-1b49-4bcb-b67f-396c9bfdd8c9","type":"DataRange1d"},"y_range":{"id":"3e856a41-2969-4402-acba-82b77329eab8","type":"DataRange1d"}},"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"}},"id":"50360b0c-3cb8-4e70-a6d4-1ff3cb4edd4c","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"db12077c-5752-46d9-8fd7-5d15db326a83","type":"Circle"},{"attributes":{"callback":null},"id":"31ff8210-06e4-4093-87fd-b4540ee73ed3","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5e968dab-fc29-4412-862a-1f7ee7fa495c","type":"ColumnDataSource"},"glyph":{"id":"db12077c-5752-46d9-8fd7-5d15db326a83","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7a15000f-da00-48c0-9985-9c29003a6aee","type":"Circle"},"selection_glyph":null},"id":"038dba61-88d1-4b6f-9abc-2049ee802461","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"}},"id":"2e99a896-5336-4367-b46a-6ef34ea54d7b","type":"ResetTool"},{"attributes":{},"id":"f9f4fc20-590c-4d03-97ef-581d9f3eaf30","type":"BasicTicker"},{"attributes":{"overlay":{"id":"337a554d-b210-4caf-8920-23a8e0c08405","type":"BoxAnnotation"},"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"}},"id":"217204ac-9dc6-49f0-af53-812b2747cb24","type":"BoxZoomTool"},{"attributes":{},"id":"59945b54-afc9-493f-8db6-c914c9342213","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"}},"id":"6e4fdc72-b22e-4f9c-aac9-a25327e2a6b3","type":"SaveTool"},{"attributes":{"plot":{"id":"a3ce0fd3-f21c-469d-bb8d-934b5fd447a5","subtype":"Figure","type":"Plot"}},"id":"cc349b7a-60cf-49ba-a2c1-4a41689b94ba","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"c531e108-605d-4f71-8922-180d66835bfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"fad07222-5feb-4432-aac1-ab8c5cc1a758","type":"BasicTicker"}},"id":"32093687-1c3a-4312-94c0-9e91f89a086d","type":"Grid"},{"attributes":{},"id":"09a91503-d180-4533-b127-d38fb0cddb66","type":"ToolEvents"},{"attributes":{"plot":{"id":"37eb1037-6a0c-469c-89ff-825d0bd1e963","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9f4fc20-590c-4d03-97ef-581d9f3eaf30","type":"BasicTicker"}},"id":"c3f84129-481b-4733-ae04-8057b2cbf6f1","type":"Grid"},{"attributes":{},"id":"d5b9b88d-6f17-4c43-913c-a7c2a9a47670","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"65123e72-db5d-4479-b4bb-36d591626ece","type":"ColumnDataSource"},"glyph":{"id":"88368a05-3c55-4d2b-ac0f-790fde3a3110","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"6e6eb662-d368-4ac3-8a63-1d4b212389f2","type":"Square"},"selection_glyph":null},"id":"385d3ab8-8598-4088-b7d9-c302f2cc8ed4","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"337a554d-b210-4caf-8920-23a8e0c08405","type":"BoxAnnotation"}],"root_ids":["14fa9913-f0b2-4bc2-8153-aea2f18098d1"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"4062d20d-ce5d-498d-8013-7a842f3cf785","elementid":"ca2a9344-b2a9-4ce1-a5a0-109314f3be43","modelid":"14fa9913-f0b2-4bc2-8153-aea2f18098d1"}];
                  
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