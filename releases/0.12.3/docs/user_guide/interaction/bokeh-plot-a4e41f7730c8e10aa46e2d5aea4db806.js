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
      };var element = document.getElementById("47291ca4-3d4f-4c60-a01f-16b71ceb1097");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47291ca4-3d4f-4c60-a01f-16b71ceb1097' but no matching script tag was found. ")
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
                  var docs_json = {"1cb7d061-c995-474f-a33e-168e3a37568a":{"roots":{"references":[{"attributes":{"children":[{"id":"005989bc-b0e2-447d-982f-28c554679665","type":"Row"}]},"id":"393591bc-e960-4a9f-92b2-9282ff2ca6e1","type":"Column"},{"attributes":{},"id":"ed5a537a-9b45-421d-af30-35da79a13ee2","type":"BasicTicker"},{"attributes":{},"id":"62d834dd-9281-494f-bcc8-57d9490dced8","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"216898f3-310f-4041-8860-f5025981d869","type":"Title"},{"attributes":{},"id":"b35b9321-ef21-4e41-9bb8-836f31fc4304","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c45cbc29-27a4-4ec5-a570-7520b31b504d","type":"BasicTicker"}},"id":"3cc4d452-dec4-452e-b74e-f2780cbd3704","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"b13030a9-2118-4d9d-a76a-eda2ecbcfde5","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"4e2fda42-ae0b-4280-a7af-68edbb4333f0","type":"PolyAnnotation"},{"attributes":{},"id":"0c62ffae-ae83-41fa-b6d8-cb29443e2254","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"},{"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"}]},"id":"005989bc-b0e2-447d-982f-28c554679665","type":"Row"},{"attributes":{"callback":null,"overlay":{"id":"77c49230-e35a-47c6-823d-3a2ebe1a00e8","type":"BoxAnnotation"},"plot":{"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"},"renderers":[{"id":"f420cdf9-0217-4336-b01e-3fb3ab53e75a","type":"GlyphRenderer"}]},"id":"70f80413-aa55-46db-8f0c-a0f5c9dc2587","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"74d1ac8e-3019-4140-ae34-ff6e9ca4b40f","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"77c49230-e35a-47c6-823d-3a2ebe1a00e8","type":"BoxAnnotation"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"bcd27e7b-01f9-4988-9020-436ef87fbf70","type":"BoxSelectTool"},{"id":"b808a4b2-f88e-47db-a4b4-693a9db95978","type":"LassoSelectTool"},{"id":"52a97f93-fffb-4f21-80e7-bfcae13a8039","type":"HelpTool"},{"id":"70f80413-aa55-46db-8f0c-a0f5c9dc2587","type":"BoxSelectTool"},{"id":"8b2acb2f-3f61-4b49-bca6-b34f193a1f9e","type":"LassoSelectTool"},{"id":"6844e35e-1f70-40d6-9d76-979673b0969b","type":"HelpTool"}]},"id":"0589cdd7-b892-44cb-b1da-afaba0291e46","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"368026d0-b738-429d-978a-6dabf9daf2a4","type":"ColumnDataSource"},"glyph":{"id":"74d1ac8e-3019-4140-ae34-ff6e9ca4b40f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"33f095c7-db71-4999-918d-d85d78edcd25","type":"Circle"},"selection_glyph":null},"id":"f420cdf9-0217-4336-b01e-3fb3ab53e75a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"}},"id":"6844e35e-1f70-40d6-9d76-979673b0969b","type":"HelpTool"},{"attributes":{"plot":{"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7266d7dd-5c6c-4774-9167-bf5340c2d4ab","type":"BasicTicker"}},"id":"0da1dea5-84d2-4b26-8b4e-deb7a8f942f0","type":"Grid"},{"attributes":{},"id":"7266d7dd-5c6c-4774-9167-bf5340c2d4ab","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0269d9ba-aa07-418d-89e6-9416b59335be","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"4e2fda42-ae0b-4280-a7af-68edbb4333f0","type":"PolyAnnotation"},"plot":{"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"}},"id":"8b2acb2f-3f61-4b49-bca6-b34f193a1f9e","type":"LassoSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"b13030a9-2118-4d9d-a76a-eda2ecbcfde5","type":"PolyAnnotation"},"plot":{"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"}},"id":"b808a4b2-f88e-47db-a4b4-693a9db95978","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70f80413-aa55-46db-8f0c-a0f5c9dc2587","type":"BoxSelectTool"},{"id":"8b2acb2f-3f61-4b49-bca6-b34f193a1f9e","type":"LassoSelectTool"},{"id":"6844e35e-1f70-40d6-9d76-979673b0969b","type":"HelpTool"}]},"id":"73ea893c-63e9-4f18-baae-45f2433c8519","type":"Toolbar"},{"attributes":{},"id":"c45cbc29-27a4-4ec5-a570-7520b31b504d","type":"BasicTicker"},{"attributes":{"plot":{"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"b35b9321-ef21-4e41-9bb8-836f31fc4304","type":"BasicTicker"}},"id":"47c4b015-5022-4d07-924b-9ecf84667a59","type":"Grid"},{"attributes":{"children":[{"id":"0589cdd7-b892-44cb-b1da-afaba0291e46","type":"ToolbarBox"},{"id":"393591bc-e960-4a9f-92b2-9282ff2ca6e1","type":"Column"}]},"id":"55b4607b-e358-4686-9fe9-8022738c8046","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"0a25d957-b24b-44e1-915d-d538e0efb958","type":"BoxAnnotation"},"plot":{"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"},"renderers":[{"id":"15fb4522-1e04-4c67-b923-0cb5eab2df0c","type":"GlyphRenderer"}]},"id":"bcd27e7b-01f9-4988-9020-436ef87fbf70","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0a25d957-b24b-44e1-915d-d538e0efb958","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"33f095c7-db71-4999-918d-d85d78edcd25","type":"Circle"},{"attributes":{"formatter":{"id":"0e1f8e01-bd65-4ef0-b9be-e60dc941abf0","type":"BasicTickFormatter"},"plot":{"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"b35b9321-ef21-4e41-9bb8-836f31fc4304","type":"BasicTicker"}},"id":"12de9bc7-2f1e-4f00-9fc0-21e42fe1ed03","type":"LinearAxis"},{"attributes":{"below":[{"id":"12de9bc7-2f1e-4f00-9fc0-21e42fe1ed03","type":"LinearAxis"}],"left":[{"id":"24cf984b-79c0-4dab-9599-49a4c2c27623","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"12de9bc7-2f1e-4f00-9fc0-21e42fe1ed03","type":"LinearAxis"},{"id":"47c4b015-5022-4d07-924b-9ecf84667a59","type":"Grid"},{"id":"24cf984b-79c0-4dab-9599-49a4c2c27623","type":"LinearAxis"},{"id":"2316d5bf-a53d-401c-9cc1-d6a84b79141c","type":"Grid"},{"id":"77c49230-e35a-47c6-823d-3a2ebe1a00e8","type":"BoxAnnotation"},{"id":"4e2fda42-ae0b-4280-a7af-68edbb4333f0","type":"PolyAnnotation"},{"id":"f420cdf9-0217-4336-b01e-3fb3ab53e75a","type":"GlyphRenderer"}],"title":{"id":"1d2f9413-ea43-42f3-8e63-c8ad91f99b5b","type":"Title"},"tool_events":{"id":"44a143d0-a791-4d0b-a7af-67e0b4c9b776","type":"ToolEvents"},"toolbar":{"id":"73ea893c-63e9-4f18-baae-45f2433c8519","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0269d9ba-aa07-418d-89e6-9416b59335be","type":"DataRange1d"},"y_range":{"id":"336898e4-0e2d-4fc6-b2bd-e5ab364c2360","type":"DataRange1d"}},"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"368026d0-b738-429d-978a-6dabf9daf2a4","type":"ColumnDataSource"},"glyph":{"id":"6b57659c-35db-40ad-b924-8c26cb3f1c3a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"29d80785-9f9a-4cf1-9f69-f06be2be904f","type":"Circle"},"selection_glyph":null},"id":"15fb4522-1e04-4c67-b923-0cb5eab2df0c","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"6b57659c-35db-40ad-b924-8c26cb3f1c3a","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed5a537a-9b45-421d-af30-35da79a13ee2","type":"BasicTicker"}},"id":"2316d5bf-a53d-401c-9cc1-d6a84b79141c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"29d80785-9f9a-4cf1-9f69-f06be2be904f","type":"Circle"},{"attributes":{"callback":null},"id":"336898e4-0e2d-4fc6-b2bd-e5ab364c2360","type":"DataRange1d"},{"attributes":{"plot":{"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"}},"id":"52a97f93-fffb-4f21-80e7-bfcae13a8039","type":"HelpTool"},{"attributes":{},"id":"44a143d0-a791-4d0b-a7af-67e0b4c9b776","type":"ToolEvents"},{"attributes":{"formatter":{"id":"aaa3d729-729e-4c06-9a9d-d85edffa3533","type":"BasicTickFormatter"},"plot":{"id":"7b230a09-3906-42c2-9e00-f41673d4d0ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed5a537a-9b45-421d-af30-35da79a13ee2","type":"BasicTicker"}},"id":"24cf984b-79c0-4dab-9599-49a4c2c27623","type":"LinearAxis"},{"attributes":{"below":[{"id":"c3e0269b-20da-4286-ac4b-e01f54e6a734","type":"LinearAxis"}],"left":[{"id":"2303fd30-f90b-4e05-80ee-2baa4797e128","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c3e0269b-20da-4286-ac4b-e01f54e6a734","type":"LinearAxis"},{"id":"0da1dea5-84d2-4b26-8b4e-deb7a8f942f0","type":"Grid"},{"id":"2303fd30-f90b-4e05-80ee-2baa4797e128","type":"LinearAxis"},{"id":"3cc4d452-dec4-452e-b74e-f2780cbd3704","type":"Grid"},{"id":"0a25d957-b24b-44e1-915d-d538e0efb958","type":"BoxAnnotation"},{"id":"b13030a9-2118-4d9d-a76a-eda2ecbcfde5","type":"PolyAnnotation"},{"id":"15fb4522-1e04-4c67-b923-0cb5eab2df0c","type":"GlyphRenderer"}],"title":{"id":"216898f3-310f-4041-8860-f5025981d869","type":"Title"},"tool_events":{"id":"62d834dd-9281-494f-bcc8-57d9490dced8","type":"ToolEvents"},"toolbar":{"id":"b26ff1a5-ac1e-46a6-be39-9f44b0fa65b6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ca5b880a-6043-4677-ae9a-c8b8813020de","type":"DataRange1d"},"y_range":{"id":"97a5b294-332d-4241-97f9-ab649da5da01","type":"DataRange1d"}},"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"3de3f6ac-c5f6-4309-ba50-7f6db710912c","type":"BasicTickFormatter"},"plot":{"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c45cbc29-27a4-4ec5-a570-7520b31b504d","type":"BasicTicker"}},"id":"2303fd30-f90b-4e05-80ee-2baa4797e128","type":"LinearAxis"},{"attributes":{},"id":"0e1f8e01-bd65-4ef0-b9be-e60dc941abf0","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ca5b880a-6043-4677-ae9a-c8b8813020de","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y1","y0","x"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"368026d0-b738-429d-978a-6dabf9daf2a4","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bcd27e7b-01f9-4988-9020-436ef87fbf70","type":"BoxSelectTool"},{"id":"b808a4b2-f88e-47db-a4b4-693a9db95978","type":"LassoSelectTool"},{"id":"52a97f93-fffb-4f21-80e7-bfcae13a8039","type":"HelpTool"}]},"id":"b26ff1a5-ac1e-46a6-be39-9f44b0fa65b6","type":"Toolbar"},{"attributes":{"callback":null},"id":"97a5b294-332d-4241-97f9-ab649da5da01","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0c62ffae-ae83-41fa-b6d8-cb29443e2254","type":"BasicTickFormatter"},"plot":{"id":"80513690-8d84-46be-bdbf-f46701b1705e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7266d7dd-5c6c-4774-9167-bf5340c2d4ab","type":"BasicTicker"}},"id":"c3e0269b-20da-4286-ac4b-e01f54e6a734","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"1d2f9413-ea43-42f3-8e63-c8ad91f99b5b","type":"Title"},{"attributes":{},"id":"aaa3d729-729e-4c06-9a9d-d85edffa3533","type":"BasicTickFormatter"},{"attributes":{},"id":"3de3f6ac-c5f6-4309-ba50-7f6db710912c","type":"BasicTickFormatter"}],"root_ids":["55b4607b-e358-4686-9fe9-8022738c8046"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"1cb7d061-c995-474f-a33e-168e3a37568a","elementid":"47291ca4-3d4f-4c60-a01f-16b71ceb1097","modelid":"55b4607b-e358-4686-9fe9-8022738c8046"}];
                  
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