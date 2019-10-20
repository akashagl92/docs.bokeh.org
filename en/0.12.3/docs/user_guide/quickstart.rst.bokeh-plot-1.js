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
      };var element = document.getElementById("ad2ebf11-f522-4ff8-84ee-b2e126079d78");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ad2ebf11-f522-4ff8-84ee-b2e126079d78' but no matching script tag was found. ")
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
                  var docs_json = {"1b19fce1-1942-432e-a601-501dfcdfcc10":{"roots":{"references":[{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"8442ca65-fabf-4938-9475-2f974f89ca58","type":"Line"},{"attributes":{},"id":"c9b49959-c91c-4d7e-bca2-1ee84124fdec","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"}},"id":"e3671d97-07a6-4197-8f0e-ec6d0e6159ef","type":"PanTool"},{"attributes":{"items":[{"id":"6ec134f8-1ba3-4751-854f-693676dbbf4c","type":"LegendItem"},{"id":"417fa749-6089-46f9-8b69-a8e235436508","type":"LegendItem"},{"id":"95170e26-5b54-4f02-b048-d250186a426a","type":"LegendItem"},{"id":"869ebc8c-90ee-4c52-aa96-f94c1aab1ea9","type":"LegendItem"}],"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"}},"id":"ddde1d9c-75f8-40e9-9793-ee02f8650ebe","type":"Legend"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"cc815f55-6882-4c94-b6dd-761bae788da1","type":"GlyphRenderer"}]},"id":"417fa749-6089-46f9-8b69-a8e235436508","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f6cc019-c52c-4ad3-a8d7-9824a6fc6360","type":"Circle"},{"attributes":{"num_minor_ticks":10},"id":"f1dfa158-03d5-456c-a813-e3ea51ef583a","type":"LogTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"299677f2-9287-4a90-aa0d-1258bd55e576","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"56040860-ec85-480c-b2de-74760f45f938","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"}},"id":"c115e177-d1f4-402d-bcc2-2e57c2c4206b","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"a6a84f40-79ec-406e-bdea-e9bb77f4c7c7","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"dee72e4d-52da-4300-af19-208a1073a67e","type":"BoxAnnotation"},"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"}},"id":"48d3c692-a6d4-4324-93ae-3e284f75380b","type":"BoxZoomTool"},{"attributes":{},"id":"fed19b4f-098f-4ee9-9090-f26c37769176","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"57cc008c-54d7-4bbd-947a-a8925cb075e4","type":"Circle"},{"attributes":{},"id":"063b5c1c-2293-4b93-86c6-2a4238c715df","type":"ToolEvents"},{"attributes":{"data_source":{"id":"299677f2-9287-4a90-aa0d-1258bd55e576","type":"ColumnDataSource"},"glyph":{"id":"388ef247-a2bd-4c71-8311-7fa5941d2ebd","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"5135cf06-8d2a-4708-8f9c-55ea23d05ac0","type":"Line"},"selection_glyph":null},"id":"2b587f35-94f7-4e87-83ee-aa01f0477a30","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"f54859f0-e1ec-4266-ba98-8e7223a4b307","type":"DataRange1d"},{"attributes":{"data_source":{"id":"56040860-ec85-480c-b2de-74760f45f938","type":"ColumnDataSource"},"glyph":{"id":"019ddba2-644c-4832-a842-da8753cb2c8f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8f6cc019-c52c-4ad3-a8d7-9824a6fc6360","type":"Circle"},"selection_glyph":null},"id":"9c6676df-44f6-467a-b587-323dba39b6b6","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dee72e4d-52da-4300-af19-208a1073a67e","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"569bcba8-438a-46e3-b05f-b8f6b2edc361","type":"ColumnDataSource"},"glyph":{"id":"df41d539-9d2d-4419-abd4-b7838fb11beb","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"8abc710d-d78f-4ef6-9904-e89775e20d1a","type":"Line"},"selection_glyph":null},"id":"1e6ee711-665c-4ba4-b0b1-45eb93ddf059","type":"GlyphRenderer"},{"attributes":{"axis_label":"sections","formatter":{"id":"c9b49959-c91c-4d7e-bca2-1ee84124fdec","type":"BasicTickFormatter"},"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"},"ticker":{"id":"fed19b4f-098f-4ee9-9090-f26c37769176","type":"BasicTicker"}},"id":"81fab6ae-7595-44e8-acb2-d82567499065","type":"LinearAxis"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"cc7119cb-98b4-4bfb-a792-c803fcc28a79","type":"Range1d"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"2b587f35-94f7-4e87-83ee-aa01f0477a30","type":"GlyphRenderer"},{"id":"28d2a8ad-71f5-4578-8e5e-66554add734b","type":"GlyphRenderer"}]},"id":"6ec134f8-1ba3-4751-854f-693676dbbf4c","type":"LegendItem"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"019ddba2-644c-4832-a842-da8753cb2c8f","type":"Circle"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"388ef247-a2bd-4c71-8311-7fa5941d2ebd","type":"Line"},{"attributes":{"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"},"ticker":{"id":"fed19b4f-098f-4ee9-9090-f26c37769176","type":"BasicTicker"}},"id":"2e100b7e-3f5d-41dd-95b1-b19f868877d2","type":"Grid"},{"attributes":{"data_source":{"id":"6c63478c-b49a-4872-a1ee-7a7ff8f075cc","type":"ColumnDataSource"},"glyph":{"id":"8442ca65-fabf-4938-9475-2f974f89ca58","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"abaa3a8a-e2ff-44aa-a3f7-c3dbfe8082a4","type":"Line"},"selection_glyph":null},"id":"431a5aaf-c672-43c6-a14b-50e722ea7d1c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a6a84f40-79ec-406e-bdea-e9bb77f4c7c7","type":"ColumnDataSource"},"glyph":{"id":"7ef0a2ba-0336-4805-ae29-1a285534f209","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"fdc95b76-91d5-4680-b0b9-35cc33ef462e","type":"Line"},"selection_glyph":null},"id":"cc815f55-6882-4c94-b6dd-761bae788da1","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"1e6ee711-665c-4ba4-b0b1-45eb93ddf059","type":"GlyphRenderer"},{"id":"9c6676df-44f6-467a-b587-323dba39b6b6","type":"GlyphRenderer"}]},"id":"95170e26-5b54-4f02-b048-d250186a426a","type":"LegendItem"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"fdc95b76-91d5-4680-b0b9-35cc33ef462e","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"569bcba8-438a-46e3-b05f-b8f6b2edc361","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"6c63478c-b49a-4872-a1ee-7a7ff8f075cc","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"df41d539-9d2d-4419-abd4-b7838fb11beb","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4eb114b-c051-4a1b-b1fd-7fb5011a6d86","type":"Circle"},{"attributes":{"plot":null,"text":"log axis example"},"id":"67e48d52-2ca6-4d65-9f55-a4813e6cf925","type":"Title"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ef0a2ba-0336-4805-ae29-1a285534f209","type":"Line"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"431a5aaf-c672-43c6-a14b-50e722ea7d1c","type":"GlyphRenderer"}]},"id":"869ebc8c-90ee-4c52-aa96-f94c1aab1ea9","type":"LegendItem"},{"attributes":{"data_source":{"id":"90aaf447-6c81-4397-8e58-23b3f81e205b","type":"ColumnDataSource"},"glyph":{"id":"57cc008c-54d7-4bbd-947a-a8925cb075e4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d4eb114b-c051-4a1b-b1fd-7fb5011a6d86","type":"Circle"},"selection_glyph":null},"id":"28d2a8ad-71f5-4578-8e5e-66554add734b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"}},"id":"7d18921e-f856-45c4-a52d-fd11154601e1","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1dfa158-03d5-456c-a813-e3ea51ef583a","type":"LogTicker"}},"id":"b0a24252-c1e0-4038-8576-b1554d526fb1","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"abaa3a8a-e2ff-44aa-a3f7-c3dbfe8082a4","type":"Line"},{"attributes":{"below":[{"id":"81fab6ae-7595-44e8-acb2-d82567499065","type":"LinearAxis"}],"left":[{"id":"e7c14b23-d0c9-483b-98c5-0ed776e2a8c6","type":"LogAxis"}],"renderers":[{"id":"81fab6ae-7595-44e8-acb2-d82567499065","type":"LinearAxis"},{"id":"2e100b7e-3f5d-41dd-95b1-b19f868877d2","type":"Grid"},{"id":"e7c14b23-d0c9-483b-98c5-0ed776e2a8c6","type":"LogAxis"},{"id":"b0a24252-c1e0-4038-8576-b1554d526fb1","type":"Grid"},{"id":"dee72e4d-52da-4300-af19-208a1073a67e","type":"BoxAnnotation"},{"id":"ddde1d9c-75f8-40e9-9793-ee02f8650ebe","type":"Legend"},{"id":"2b587f35-94f7-4e87-83ee-aa01f0477a30","type":"GlyphRenderer"},{"id":"28d2a8ad-71f5-4578-8e5e-66554add734b","type":"GlyphRenderer"},{"id":"cc815f55-6882-4c94-b6dd-761bae788da1","type":"GlyphRenderer"},{"id":"1e6ee711-665c-4ba4-b0b1-45eb93ddf059","type":"GlyphRenderer"},{"id":"9c6676df-44f6-467a-b587-323dba39b6b6","type":"GlyphRenderer"},{"id":"431a5aaf-c672-43c6-a14b-50e722ea7d1c","type":"GlyphRenderer"}],"title":{"id":"67e48d52-2ca6-4d65-9f55-a4813e6cf925","type":"Title"},"tool_events":{"id":"063b5c1c-2293-4b93-86c6-2a4238c715df","type":"ToolEvents"},"toolbar":{"id":"1b845f52-48d2-44ad-8038-a27575b48455","type":"Toolbar"},"x_range":{"id":"f54859f0-e1ec-4266-ba98-8e7223a4b307","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"cc7119cb-98b4-4bfb-a792-c803fcc28a79","type":"Range1d"}},"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5135cf06-8d2a-4708-8f9c-55ea23d05ac0","type":"Line"},{"attributes":{"ticker":null},"id":"f9a7020d-10ec-445a-abc2-acea3b76dc07","type":"LogTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"90aaf447-6c81-4397-8e58-23b3f81e205b","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e3671d97-07a6-4197-8f0e-ec6d0e6159ef","type":"PanTool"},{"id":"48d3c692-a6d4-4324-93ae-3e284f75380b","type":"BoxZoomTool"},{"id":"c115e177-d1f4-402d-bcc2-2e57c2c4206b","type":"ResetTool"},{"id":"7d18921e-f856-45c4-a52d-fd11154601e1","type":"SaveTool"}]},"id":"1b845f52-48d2-44ad-8038-a27575b48455","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8abc710d-d78f-4ef6-9904-e89775e20d1a","type":"Line"},{"attributes":{"axis_label":"particles","formatter":{"id":"f9a7020d-10ec-445a-abc2-acea3b76dc07","type":"LogTickFormatter"},"plot":{"id":"c981ffe2-85fb-4709-9b6e-34029ab4da79","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1dfa158-03d5-456c-a813-e3ea51ef583a","type":"LogTicker"}},"id":"e7c14b23-d0c9-483b-98c5-0ed776e2a8c6","type":"LogAxis"}],"root_ids":["c981ffe2-85fb-4709-9b6e-34029ab4da79"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"1b19fce1-1942-432e-a601-501dfcdfcc10","elementid":"ad2ebf11-f522-4ff8-84ee-b2e126079d78","modelid":"c981ffe2-85fb-4709-9b6e-34029ab4da79"}];
                  
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