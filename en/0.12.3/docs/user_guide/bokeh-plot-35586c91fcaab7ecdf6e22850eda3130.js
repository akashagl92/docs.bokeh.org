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
      };var element = document.getElementById("b30277c4-7e14-40bd-a1d4-5aa5bb34d6bc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b30277c4-7e14-40bd-a1d4-5aa5bb34d6bc' but no matching script tag was found. ")
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
                  var docs_json = {"e45d2a22-97cf-48d7-aa48-25fbcb04b485":{"roots":{"references":[{"attributes":{"days":[1,15]},"id":"aaf28025-3ca9-4cb1-afb9-64ef2b802b6b","type":"DaysTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"d5c81791-3d72-4f98-b40a-190246da1a3c","type":"Line"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.3},"line_color":{"value":"white"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba999876-f96f-4ea8-bede-dac2986e0403","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1fd69dc3-95b2-4dc6-8175-7d71151d1169","type":"Circle"},{"attributes":{"callback":null,"mode":"hline","plot":{"id":"002fd39d-790e-4089-90bc-a234cf5d6d19","subtype":"Figure","type":"Plot"},"renderers":[{"id":"3d2b5e70-0c97-4fa8-a3e3-54a061ada2ea","type":"GlyphRenderer"}],"tooltips":null},"id":"aae85a97-c81b-42b9-9db6-207e529871c7","type":"HoverTool"},{"attributes":{"callback":null},"id":"4ef623c1-f1a1-4295-97e1-c18a90e2c439","type":"DataRange1d"},{"attributes":{"num_minor_ticks":5},"id":"c3025568-e999-4799-a8b1-2235876e15f8","type":"DatetimeTicker"},{"attributes":{"fill_alpha":{"value":0.05},"fill_color":{"value":"grey"},"line_color":{"value":null},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"226c60bc-aadb-4a63-8918-53255879c150","type":"Circle"},{"attributes":{},"id":"b4727a16-a0eb-43ff-95f6-7a94d49baba3","type":"BasicTickFormatter"},{"attributes":{"months":[0,4,8]},"id":"fad1a5de-6ab4-4c9e-a537-354a1f660499","type":"MonthsTicker"},{"attributes":{"below":[{"id":"42f4afe8-810d-4ffa-a6b8-66ece16cf5db","type":"DatetimeAxis"}],"left":[{"id":"3981950d-1c00-4a0e-a86f-1fd94bb22a8b","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"42f4afe8-810d-4ffa-a6b8-66ece16cf5db","type":"DatetimeAxis"},{"id":"38651367-4909-4fbd-9107-fb7e57250610","type":"Grid"},{"id":"3981950d-1c00-4a0e-a86f-1fd94bb22a8b","type":"LinearAxis"},{"id":"33fbabb0-6bb1-4a1e-9157-2d04f54ad4a0","type":"Grid"},{"id":"25b95689-7c18-42a3-8b74-9062545f33ae","type":"GlyphRenderer"},{"id":"3d2b5e70-0c97-4fa8-a3e3-54a061ada2ea","type":"GlyphRenderer"}],"title":{"id":"f26168a0-2bfd-44f3-842f-433e6ecb1156","type":"Title"},"tool_events":{"id":"a14e91c9-2450-42c9-b847-dba3d251c3b6","type":"ToolEvents"},"toolbar":{"id":"4b0653b3-9313-4697-89bc-c538edd19e29","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5dc9c454-fd45-43b5-bc7e-7d04d43e9fa9","type":"DataRange1d"},"y_range":{"id":"4ef623c1-f1a1-4295-97e1-c18a90e2c439","type":"DataRange1d"}},"id":"002fd39d-790e-4089-90bc-a234cf5d6d19","subtype":"Figure","type":"Plot"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"6085d4a9-da9d-4a37-80a8-fe5748f6b36e","type":"AdaptiveTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"4bda21d6-c909-4851-b6e8-ee43a1bc4b32","type":"DaysTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"70752371-819b-495d-9f84-d2de3d0af6bb","type":"MonthsTicker"},{"attributes":{"formatter":{"id":"b4727a16-a0eb-43ff-95f6-7a94d49baba3","type":"BasicTickFormatter"},"plot":{"id":"002fd39d-790e-4089-90bc-a234cf5d6d19","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdd873c1-0bb5-4087-9339-e409ac65ea0b","type":"BasicTicker"}},"id":"3981950d-1c00-4a0e-a86f-1fd94bb22a8b","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aae85a97-c81b-42b9-9db6-207e529871c7","type":"HoverTool"}]},"id":"4b0653b3-9313-4697-89bc-c538edd19e29","type":"Toolbar"},{"attributes":{"formatter":{"id":"cbaf8e47-b8a4-4c07-a757-0e13d36db047","type":"DatetimeTickFormatter"},"plot":{"id":"002fd39d-790e-4089-90bc-a234cf5d6d19","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3025568-e999-4799-a8b1-2235876e15f8","type":"DatetimeTicker"}},"id":"42f4afe8-810d-4ffa-a6b8-66ece16cf5db","type":"DatetimeAxis"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"bbbc516c-517f-4984-a91f-f6dbb583d846","type":"AdaptiveTicker"},{"attributes":{"dimension":1,"plot":{"id":"002fd39d-790e-4089-90bc-a234cf5d6d19","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdd873c1-0bb5-4087-9339-e409ac65ea0b","type":"BasicTicker"}},"id":"33fbabb0-6bb1-4a1e-9157-2d04f54ad4a0","type":"Grid"},{"attributes":{"line_color":{"value":"gray"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"637c533c-f120-4eb1-8aea-5a6fa05422b0","type":"Line"},{"attributes":{},"id":"fdd873c1-0bb5-4087-9339-e409ac65ea0b","type":"BasicTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"84a3fe2c-5f2d-4742-87fe-727f24bd3b4f","type":"AdaptiveTicker"},{"attributes":{"data_source":{"id":"189cea42-1148-4abc-9306-9e96607d891b","type":"ColumnDataSource"},"glyph":{"id":"226c60bc-aadb-4a63-8918-53255879c150","type":"Circle"},"hover_glyph":{"id":"ba999876-f96f-4ea8-bede-dac2986e0403","type":"Circle"},"nonselection_glyph":{"id":"1fd69dc3-95b2-4dc6-8175-7d71151d1169","type":"Circle"},"selection_glyph":null},"id":"3d2b5e70-0c97-4fa8-a3e3-54a061ada2ea","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1286323380000.0,1286323680000.0,1286323980000.0,1286324280000.0,1286324580000.0,1286324880000.0,1286325180000.0,1286325480000.0,1286325780000.0,1286326080000.0,1286326380000.0,1286326680000.0,1286326980000.0,1286327280000.0,1286327580000.0,1286327880000.0,1286328180000.0,1286328480000.0,1286328780000.0,1286329080000.0,1286329380000.0,1286329680000.0,1286329980000.0,1286330280000.0,1286330580000.0,1286330880000.0,1286331180000.0,1286331480000.0,1286331780000.0,1286332080000.0,1286332380000.0,1286332680000.0,1286332980000.0,1286333280000.0,1286333580000.0,1286333880000.0,1286334180000.0,1286334480000.0,1286334780000.0,1286335080000.0,1286335380000.0,1286335680000.0,1286335980000.0,1286336280000.0,1286336580000.0,1286336880000.0,1286337180000.0,1286337480000.0,1286337780000.0,1286338080000.0,1286338380000.0,1286338680000.0,1286338980000.0,1286339280000.0,1286339580000.0,1286339880000.0,1286340180000.0,1286340480000.0,1286340780000.0,1286341080000.0,1286341380000.0,1286341680000.0,1286341980000.0,1286342280000.0,1286342580000.0,1286342880000.0,1286343180000.0,1286343480000.0,1286343780000.0,1286344080000.0,1286344380000.0,1286344680000.0,1286344980000.0,1286345280000.0,1286345580000.0,1286345880000.0,1286346180000.0,1286346480000.0,1286346780000.0,1286347080000.0,1286347380000.0,1286347680000.0,1286347980000.0,1286348280000.0,1286348580000.0,1286348880000.0,1286349180000.0,1286349480000.0,1286349780000.0,1286350080000.0,1286350380000.0,1286350680000.0,1286350980000.0,1286351280000.0,1286351580000.0,1286351880000.0,1286352180000.0,1286352480000.0,1286352780000.0,1286353080000.0,1286353380000.0,1286353680000.0,1286353980000.0,1286354280000.0,1286354580000.0,1286354880000.0,1286355180000.0,1286355480000.0,1286355780000.0,1286356080000.0,1286356380000.0,1286356680000.0,1286356980000.0,1286357280000.0,1286357580000.0,1286357880000.0,1286358180000.0,1286358480000.0,1286358780000.0,1286359080000.0,1286359380000.0,1286359680000.0,1286359980000.0,1286360280000.0,1286360580000.0,1286360880000.0,1286361180000.0,1286361480000.0,1286361780000.0,1286362080000.0,1286362380000.0,1286362680000.0,1286362980000.0,1286363280000.0,1286363580000.0,1286363880000.0,1286364180000.0,1286364480000.0,1286364780000.0,1286365080000.0,1286365380000.0,1286365680000.0,1286365980000.0,1286366280000.0,1286366580000.0,1286366880000.0,1286367180000.0,1286367480000.0,1286367780000.0,1286368080000.0,1286368380000.0,1286368680000.0,1286368980000.0,1286369280000.0,1286369580000.0,1286369880000.0,1286370180000.0,1286370480000.0,1286370780000.0,1286371080000.0,1286371380000.0,1286371680000.0,1286371980000.0,1286372280000.0,1286372580000.0,1286372880000.0,1286373180000.0,1286373480000.0,1286373780000.0,1286374080000.0,1286374380000.0,1286374680000.0,1286374980000.0,1286375280000.0,1286375580000.0,1286375880000.0,1286376180000.0,1286376480000.0,1286376780000.0,1286377080000.0,1286377380000.0,1286377680000.0,1286377980000.0,1286378280000.0,1286378580000.0,1286378880000.0,1286379180000.0,1286379480000.0,1286379780000.0,1286380080000.0,1286380380000.0,1286380680000.0,1286380980000.0,1286381280000.0,1286381580000.0,1286381880000.0,1286382180000.0,1286382480000.0,1286382780000.0,1286383080000.0,1286383380000.0,1286383680000.0,1286383980000.0,1286384280000.0,1286384580000.0,1286384880000.0,1286385180000.0,1286385480000.0,1286385780000.0,1286386080000.0,1286386380000.0,1286386680000.0,1286386980000.0,1286387280000.0,1286387580000.0,1286387880000.0,1286388180000.0,1286388480000.0,1286388780000.0,1286389080000.0,1286389380000.0,1286389680000.0,1286389980000.0,1286390280000.0,1286390580000.0,1286390880000.0,1286391180000.0,1286391480000.0,1286391780000.0,1286392080000.0,1286392380000.0,1286392680000.0,1286392980000.0,1286393280000.0,1286393580000.0,1286393880000.0,1286394180000.0,1286394480000.0,1286394780000.0,1286395080000.0,1286395380000.0,1286395680000.0,1286395980000.0,1286396280000.0,1286396580000.0,1286396880000.0,1286397180000.0,1286397480000.0,1286397780000.0,1286398080000.0,1286398380000.0,1286398680000.0,1286398980000.0,1286399280000.0,1286399580000.0,1286399880000.0,1286400180000.0,1286400480000.0,1286400780000.0,1286401080000.0,1286401380000.0,1286401680000.0,1286401980000.0,1286402280000.0,1286402580000.0,1286402880000.0,1286403180000.0,1286403480000.0,1286403780000.0,1286404080000.0,1286404380000.0,1286404680000.0,1286404980000.0,1286405280000.0,1286405580000.0,1286405880000.0,1286406180000.0,1286406480000.0,1286406780000.0,1286407080000.0,1286407380000.0,1286407680000.0,1286407980000.0,1286408280000.0,1286408580000.0,1286408880000.0,1286409180000.0,1286409480000.0],"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]}},"id":"189cea42-1148-4abc-9306-9e96607d891b","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"5dc9c454-fd45-43b5-bc7e-7d04d43e9fa9","type":"DataRange1d"},{"attributes":{"days":[1,8,15,22]},"id":"ff0e9521-b424-41b3-9cbf-9278e6e17079","type":"DaysTicker"},{"attributes":{},"id":"a14e91c9-2450-42c9-b847-dba3d251c3b6","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"f26168a0-2bfd-44f3-842f-433e6ecb1156","type":"Title"},{"attributes":{"plot":{"id":"002fd39d-790e-4089-90bc-a234cf5d6d19","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3025568-e999-4799-a8b1-2235876e15f8","type":"DatetimeTicker"}},"id":"38651367-4909-4fbd-9107-fb7e57250610","type":"Grid"},{"attributes":{},"id":"e81b5b15-8234-44a6-8602-39ba7cf1058d","type":"YearsTicker"},{"attributes":{"data_source":{"id":"7ca7354a-3f1c-44d2-9cd5-be627c66ecd5","type":"ColumnDataSource"},"glyph":{"id":"637c533c-f120-4eb1-8aea-5a6fa05422b0","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"d5c81791-3d72-4f98-b40a-190246da1a3c","type":"Line"},"selection_glyph":null},"id":"25b95689-7c18-42a3-8b74-9062545f33ae","type":"GlyphRenderer"},{"attributes":{},"id":"cbaf8e47-b8a4-4c07-a757-0e13d36db047","type":"DatetimeTickFormatter"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"09f1f82f-46bc-4f4f-9edf-adfaae234d50","type":"DaysTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1286323380000.0,1286323680000.0,1286323980000.0,1286324280000.0,1286324580000.0,1286324880000.0,1286325180000.0,1286325480000.0,1286325780000.0,1286326080000.0,1286326380000.0,1286326680000.0,1286326980000.0,1286327280000.0,1286327580000.0,1286327880000.0,1286328180000.0,1286328480000.0,1286328780000.0,1286329080000.0,1286329380000.0,1286329680000.0,1286329980000.0,1286330280000.0,1286330580000.0,1286330880000.0,1286331180000.0,1286331480000.0,1286331780000.0,1286332080000.0,1286332380000.0,1286332680000.0,1286332980000.0,1286333280000.0,1286333580000.0,1286333880000.0,1286334180000.0,1286334480000.0,1286334780000.0,1286335080000.0,1286335380000.0,1286335680000.0,1286335980000.0,1286336280000.0,1286336580000.0,1286336880000.0,1286337180000.0,1286337480000.0,1286337780000.0,1286338080000.0,1286338380000.0,1286338680000.0,1286338980000.0,1286339280000.0,1286339580000.0,1286339880000.0,1286340180000.0,1286340480000.0,1286340780000.0,1286341080000.0,1286341380000.0,1286341680000.0,1286341980000.0,1286342280000.0,1286342580000.0,1286342880000.0,1286343180000.0,1286343480000.0,1286343780000.0,1286344080000.0,1286344380000.0,1286344680000.0,1286344980000.0,1286345280000.0,1286345580000.0,1286345880000.0,1286346180000.0,1286346480000.0,1286346780000.0,1286347080000.0,1286347380000.0,1286347680000.0,1286347980000.0,1286348280000.0,1286348580000.0,1286348880000.0,1286349180000.0,1286349480000.0,1286349780000.0,1286350080000.0,1286350380000.0,1286350680000.0,1286350980000.0,1286351280000.0,1286351580000.0,1286351880000.0,1286352180000.0,1286352480000.0,1286352780000.0,1286353080000.0,1286353380000.0,1286353680000.0,1286353980000.0,1286354280000.0,1286354580000.0,1286354880000.0,1286355180000.0,1286355480000.0,1286355780000.0,1286356080000.0,1286356380000.0,1286356680000.0,1286356980000.0,1286357280000.0,1286357580000.0,1286357880000.0,1286358180000.0,1286358480000.0,1286358780000.0,1286359080000.0,1286359380000.0,1286359680000.0,1286359980000.0,1286360280000.0,1286360580000.0,1286360880000.0,1286361180000.0,1286361480000.0,1286361780000.0,1286362080000.0,1286362380000.0,1286362680000.0,1286362980000.0,1286363280000.0,1286363580000.0,1286363880000.0,1286364180000.0,1286364480000.0,1286364780000.0,1286365080000.0,1286365380000.0,1286365680000.0,1286365980000.0,1286366280000.0,1286366580000.0,1286366880000.0,1286367180000.0,1286367480000.0,1286367780000.0,1286368080000.0,1286368380000.0,1286368680000.0,1286368980000.0,1286369280000.0,1286369580000.0,1286369880000.0,1286370180000.0,1286370480000.0,1286370780000.0,1286371080000.0,1286371380000.0,1286371680000.0,1286371980000.0,1286372280000.0,1286372580000.0,1286372880000.0,1286373180000.0,1286373480000.0,1286373780000.0,1286374080000.0,1286374380000.0,1286374680000.0,1286374980000.0,1286375280000.0,1286375580000.0,1286375880000.0,1286376180000.0,1286376480000.0,1286376780000.0,1286377080000.0,1286377380000.0,1286377680000.0,1286377980000.0,1286378280000.0,1286378580000.0,1286378880000.0,1286379180000.0,1286379480000.0,1286379780000.0,1286380080000.0,1286380380000.0,1286380680000.0,1286380980000.0,1286381280000.0,1286381580000.0,1286381880000.0,1286382180000.0,1286382480000.0,1286382780000.0,1286383080000.0,1286383380000.0,1286383680000.0,1286383980000.0,1286384280000.0,1286384580000.0,1286384880000.0,1286385180000.0,1286385480000.0,1286385780000.0,1286386080000.0,1286386380000.0,1286386680000.0,1286386980000.0,1286387280000.0,1286387580000.0,1286387880000.0,1286388180000.0,1286388480000.0,1286388780000.0,1286389080000.0,1286389380000.0,1286389680000.0,1286389980000.0,1286390280000.0,1286390580000.0,1286390880000.0,1286391180000.0,1286391480000.0,1286391780000.0,1286392080000.0,1286392380000.0,1286392680000.0,1286392980000.0,1286393280000.0,1286393580000.0,1286393880000.0,1286394180000.0,1286394480000.0,1286394780000.0,1286395080000.0,1286395380000.0,1286395680000.0,1286395980000.0,1286396280000.0,1286396580000.0,1286396880000.0,1286397180000.0,1286397480000.0,1286397780000.0,1286398080000.0,1286398380000.0,1286398680000.0,1286398980000.0,1286399280000.0,1286399580000.0,1286399880000.0,1286400180000.0,1286400480000.0,1286400780000.0,1286401080000.0,1286401380000.0,1286401680000.0,1286401980000.0,1286402280000.0,1286402580000.0,1286402880000.0,1286403180000.0,1286403480000.0,1286403780000.0,1286404080000.0,1286404380000.0,1286404680000.0,1286404980000.0,1286405280000.0,1286405580000.0,1286405880000.0,1286406180000.0,1286406480000.0,1286406780000.0,1286407080000.0,1286407380000.0,1286407680000.0,1286407980000.0,1286408280000.0,1286408580000.0,1286408880000.0,1286409180000.0,1286409480000.0],"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150]}},"id":"7ca7354a-3f1c-44d2-9cd5-be627c66ecd5","type":"ColumnDataSource"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"b4e2e73d-d80a-4f4a-9f20-93910ca44680","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"ea75c99c-5dcb-4903-974c-17cb5d5c3175","type":"MonthsTicker"}],"root_ids":["002fd39d-790e-4089-90bc-a234cf5d6d19"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"e45d2a22-97cf-48d7-aa48-25fbcb04b485","elementid":"b30277c4-7e14-40bd-a1d4-5aa5bb34d6bc","modelid":"002fd39d-790e-4089-90bc-a234cf5d6d19"}];
                  
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