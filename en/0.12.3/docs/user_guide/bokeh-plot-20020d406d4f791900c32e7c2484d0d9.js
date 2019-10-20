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
      };var element = document.getElementById("fc6042bc-1416-475f-8b92-5cdc1af35ff3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc6042bc-1416-475f-8b92-5cdc1af35ff3' but no matching script tag was found. ")
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
                  var docs_json = {"c91d38a6-63a1-4c63-b512-93206282fd62":{"roots":{"references":[{"attributes":{},"id":"3596738d-4cd3-488d-9676-f36688bfb4c5","type":"ToolEvents"},{"attributes":{},"id":"c4c25f19-6765-42e2-a89c-68e1d1d33801","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"}},"id":"3d0a0729-8f5c-45b6-99ab-cdf229bac692","type":"PanTool"},{"attributes":{"formatter":{"id":"c4c25f19-6765-42e2-a89c-68e1d1d33801","type":"BasicTickFormatter"},"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1b4b7fb-6371-4e64-af25-871011fe4735","type":"BasicTicker"}},"id":"cd4fb09b-962f-43ff-bfb3-f242f6d1eaad","type":"LinearAxis"},{"attributes":{},"id":"39e02998-49bc-4629-b697-75064f280a49","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"620da16e-8bbd-4a7f-b25f-7bd96e1eaad0","type":"DataRange1d"},{"attributes":{"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"}},"id":"86c16c47-6352-4d28-a46e-da64c31ecdd1","type":"HelpTool"},{"attributes":{},"id":"e8d2f95d-98ef-4f6f-a81b-bc802816b228","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"2417907d-e732-44bc-b858-cd1e30bc9b66","type":"LinearAxis"}],"left":[{"id":"c9b4624b-5947-4d29-a11d-3e2f3d4fc2b9","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"2417907d-e732-44bc-b858-cd1e30bc9b66","type":"LinearAxis"},{"id":"a4e33812-75a5-44be-bbda-2ac079161533","type":"Grid"},{"id":"c9b4624b-5947-4d29-a11d-3e2f3d4fc2b9","type":"LinearAxis"},{"id":"1e6efcdf-dfc4-4b10-9bbf-fc874269e526","type":"Grid"},{"id":"fbc3313b-5c2e-4436-bdfa-d35c06ea4619","type":"BoxAnnotation"},{"id":"16442554-db3d-4c7e-b8ae-2e68204f894e","type":"GlyphRenderer"}],"title":{"id":"bba4626f-3a2d-4978-8033-ecf39fee0667","type":"Title"},"tool_events":{"id":"3596738d-4cd3-488d-9676-f36688bfb4c5","type":"ToolEvents"},"toolbar":{"id":"513b79be-fe86-4c7c-907d-4b99cf283593","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"efccd1ed-cbef-482d-8bf5-4133cc481676","type":"DataRange1d"},"y_range":{"id":"d8ac2143-dadb-4931-a28d-f83ac1904383","type":"DataRange1d"}},"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"},{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"}]},"id":"5bbc05c5-d880-4570-8902-e7ccdeb9ece9","type":"Row"},{"attributes":{"plot":null,"text":null},"id":"c440177a-a0a6-4588-9773-fba2021b31b8","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"},"ticker":{"id":"93cea303-dddf-4737-90d8-6ff7efe46fc9","type":"BasicTicker"}},"id":"485e267d-47db-485d-9f46-9d1a61e5fe79","type":"Grid"},{"attributes":{"data_source":{"id":"c72726a3-2706-4e29-878e-8e19b01d2717","type":"ColumnDataSource"},"glyph":{"id":"74f211bb-32eb-44c0-bd88-408fb7a24a9d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f83a61eb-ffc3-40d7-894d-6944bfe99878","type":"Circle"},"selection_glyph":null},"id":"16442554-db3d-4c7e-b8ae-2e68204f894e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"},"ticker":{"id":"77a62d02-61ca-4b4a-9e7b-ef4641c99df4","type":"BasicTicker"}},"id":"c359e47e-9b45-4b53-87fb-f47b50f1133c","type":"Grid"},{"attributes":{},"id":"9d9ade4b-c828-417c-b073-1ba8d603db6c","type":"ToolEvents"},{"attributes":{"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"}},"id":"6d524d9c-d096-40af-927c-4dd6b285bdb1","type":"PanTool"},{"attributes":{"below":[{"id":"d47029b0-5933-476b-b984-6e6554e3ebd9","type":"LinearAxis"}],"left":[{"id":"1336b28b-a2dc-434a-95e1-fa682d455baa","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d47029b0-5933-476b-b984-6e6554e3ebd9","type":"LinearAxis"},{"id":"0eb05157-8994-4dc8-998b-43367fdf2795","type":"Grid"},{"id":"1336b28b-a2dc-434a-95e1-fa682d455baa","type":"LinearAxis"},{"id":"485e267d-47db-485d-9f46-9d1a61e5fe79","type":"Grid"},{"id":"20a14075-f3d4-4ad2-828a-2b25b4b296ae","type":"BoxAnnotation"},{"id":"23d9db2b-cb49-4bc2-a9ec-364f417a56ab","type":"GlyphRenderer"}],"title":{"id":"c440177a-a0a6-4588-9773-fba2021b31b8","type":"Title"},"tool_events":{"id":"9d9ade4b-c828-417c-b073-1ba8d603db6c","type":"ToolEvents"},"toolbar":{"id":"8aab313f-e7ef-4362-9564-56cdffde8766","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c52a13a5-ee9c-456f-b3c7-2dfe56fa2d17","type":"DataRange1d"},"y_range":{"id":"4c0d3fc3-2a16-43a2-9560-fdd753ce1799","type":"DataRange1d"}},"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fbc3313b-5c2e-4436-bdfa-d35c06ea4619","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bfe47034-b3c5-41f3-9ba4-6e3e2f3e5440","type":"PanTool"},{"id":"44c35db4-2ef3-4bf9-acc0-5a466d87bd60","type":"WheelZoomTool"},{"id":"c0018825-deaf-48a2-bd87-399e68027c60","type":"BoxZoomTool"},{"id":"f5cd1c0c-4b45-4ee2-a688-2818109c8e2e","type":"SaveTool"},{"id":"316e78fd-9b06-40f1-ad8c-c090dfae4ce1","type":"ResetTool"},{"id":"e19921b1-2404-4002-b138-175007116c2e","type":"HelpTool"}]},"id":"6929d01c-0209-4e03-9d03-c771b5848ceb","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20a14075-f3d4-4ad2-828a-2b25b4b296ae","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"39e02998-49bc-4629-b697-75064f280a49","type":"BasicTickFormatter"},"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"},"ticker":{"id":"789aa91a-19b8-438a-922b-e2b2cca72064","type":"BasicTicker"}},"id":"c9b4624b-5947-4d29-a11d-3e2f3d4fc2b9","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3d0a0729-8f5c-45b6-99ab-cdf229bac692","type":"PanTool"},{"id":"a02a7915-9a4d-4dc8-9efe-dfc592e2e75c","type":"WheelZoomTool"},{"id":"a7e9e0dc-4a96-421d-9756-2ab19e4c1349","type":"BoxZoomTool"},{"id":"4c499992-e3a8-48e0-a2f9-63c2a5844bf0","type":"SaveTool"},{"id":"0dc58373-fde5-45ec-a641-01e5b55ace20","type":"ResetTool"},{"id":"ff3fe89a-6957-48e7-83c1-f420daf19ba4","type":"HelpTool"}]},"id":"8aab313f-e7ef-4362-9564-56cdffde8766","type":"Toolbar"},{"attributes":{"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"}},"id":"bfe47034-b3c5-41f3-9ba4-6e3e2f3e5440","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6d524d9c-d096-40af-927c-4dd6b285bdb1","type":"PanTool"},{"id":"dbc32245-a2a0-4c4e-b4ae-8674d7e20007","type":"WheelZoomTool"},{"id":"076c3b4c-2b05-419e-bf64-cdda25f0061f","type":"BoxZoomTool"},{"id":"e86b76d2-2e01-4842-81d5-7d98b21cb0a3","type":"SaveTool"},{"id":"a2c4d2b4-54df-43f2-9953-2f72bd277af6","type":"ResetTool"},{"id":"86c16c47-6352-4d28-a46e-da64c31ecdd1","type":"HelpTool"}]},"id":"513b79be-fe86-4c7c-907d-4b99cf283593","type":"Toolbar"},{"attributes":{},"id":"a9349def-6b29-4153-91d4-29e0c772532b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e8d2f95d-98ef-4f6f-a81b-bc802816b228","type":"BasicTickFormatter"},"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"},"ticker":{"id":"77a62d02-61ca-4b4a-9e7b-ef4641c99df4","type":"BasicTicker"}},"id":"2eebdf24-9e1d-45d6-9ad7-af28b5ac1c0b","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"3a2bf2c3-6ae0-4a9e-8fb9-a6b56fe50c79","type":"Title"},{"attributes":{"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"}},"id":"e86b76d2-2e01-4842-81d5-7d98b21cb0a3","type":"SaveTool"},{"attributes":{},"id":"d6df6cd4-d513-4bbf-a08f-1298c306c515","type":"ToolEvents"},{"attributes":{},"id":"789aa91a-19b8-438a-922b-e2b2cca72064","type":"BasicTicker"},{"attributes":{},"id":"93cea303-dddf-4737-90d8-6ff7efe46fc9","type":"BasicTicker"},{"attributes":{"children":[{"id":"5bbc05c5-d880-4570-8902-e7ccdeb9ece9","type":"Row"},{"id":"b3b89373-ad9d-44f1-9c30-5e1df6f53408","type":"Row"}]},"id":"9af60863-b66c-483f-9ba7-8e103e1ea2f4","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"42eb5708-73e5-4a81-bf2b-086fd95446c3","type":"Triangle"},{"attributes":{"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"}},"id":"ff3fe89a-6957-48e7-83c1-f420daf19ba4","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"85ddbbd9-d644-4df6-9de1-6d5338703d55","type":"BoxAnnotation"},{"attributes":{},"id":"77a62d02-61ca-4b4a-9e7b-ef4641c99df4","type":"BasicTicker"},{"attributes":{"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"}},"id":"dbc32245-a2a0-4c4e-b4ae-8674d7e20007","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e73a8b0-a08d-47f2-9006-ad62506843db","type":"Triangle"},{"attributes":{},"id":"38e58048-c02e-4468-b06b-dafcfb3d9990","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"2eebdf24-9e1d-45d6-9ad7-af28b5ac1c0b","type":"LinearAxis"}],"left":[{"id":"cd4fb09b-962f-43ff-bfb3-f242f6d1eaad","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"2eebdf24-9e1d-45d6-9ad7-af28b5ac1c0b","type":"LinearAxis"},{"id":"c359e47e-9b45-4b53-87fb-f47b50f1133c","type":"Grid"},{"id":"cd4fb09b-962f-43ff-bfb3-f242f6d1eaad","type":"LinearAxis"},{"id":"5d6ccea8-4a99-448b-b568-63f64cd25af2","type":"Grid"},{"id":"85ddbbd9-d644-4df6-9de1-6d5338703d55","type":"BoxAnnotation"},{"id":"24345527-11b9-4440-a7bf-a4056595870d","type":"GlyphRenderer"}],"title":{"id":"3a2bf2c3-6ae0-4a9e-8fb9-a6b56fe50c79","type":"Title"},"tool_events":{"id":"d6df6cd4-d513-4bbf-a08f-1298c306c515","type":"ToolEvents"},"toolbar":{"id":"6929d01c-0209-4e03-9d03-c771b5848ceb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d2b4b61f-f5b2-4b43-aed7-7d1b69b65c8d","type":"DataRange1d"},"y_range":{"id":"620da16e-8bbd-4a7f-b25f-7bd96e1eaad0","type":"DataRange1d"}},"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"},"ticker":{"id":"789aa91a-19b8-438a-922b-e2b2cca72064","type":"BasicTicker"}},"id":"1e6efcdf-dfc4-4b10-9bbf-fc874269e526","type":"Grid"},{"attributes":{"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"}},"id":"316e78fd-9b06-40f1-ad8c-c090dfae4ce1","type":"ResetTool"},{"attributes":{"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"},"ticker":{"id":"7982ef59-00e4-4600-a1ab-dd106d6e4e96","type":"BasicTicker"}},"id":"a4e33812-75a5-44be-bbda-2ac079161533","type":"Grid"},{"attributes":{"formatter":{"id":"38e58048-c02e-4468-b06b-dafcfb3d9990","type":"BasicTickFormatter"},"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c53ae8a-48d1-46fd-9e0d-0e4af45c5142","type":"BasicTicker"}},"id":"d47029b0-5933-476b-b984-6e6554e3ebd9","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a4f41f6-2bb0-490f-abd1-0be836de8585","type":"Square"},{"attributes":{"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"}},"id":"a02a7915-9a4d-4dc8-9efe-dfc592e2e75c","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"7fd2ade8-9204-409d-a7c2-4454e87b5a49","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"}},"id":"44c35db4-2ef3-4bf9-acc0-5a466d87bd60","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"c52a13a5-ee9c-456f-b3c7-2dfe56fa2d17","type":"DataRange1d"},{"attributes":{"overlay":{"id":"85ddbbd9-d644-4df6-9de1-6d5338703d55","type":"BoxAnnotation"},"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"}},"id":"c0018825-deaf-48a2-bd87-399e68027c60","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"69829cc4-3aa7-406e-9cb8-b8bd73e76305","type":"BasicTickFormatter"},"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"},"ticker":{"id":"93cea303-dddf-4737-90d8-6ff7efe46fc9","type":"BasicTicker"}},"id":"1336b28b-a2dc-434a-95e1-fa682d455baa","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a9349def-6b29-4153-91d4-29e0c772532b","type":"BasicTickFormatter"},"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"},"ticker":{"id":"7982ef59-00e4-4600-a1ab-dd106d6e4e96","type":"BasicTicker"}},"id":"2417907d-e732-44bc-b858-cd1e30bc9b66","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"bba4626f-3a2d-4978-8033-ecf39fee0667","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1b4b7fb-6371-4e64-af25-871011fe4735","type":"BasicTicker"}},"id":"5d6ccea8-4a99-448b-b568-63f64cd25af2","type":"Grid"},{"attributes":{"overlay":{"id":"20a14075-f3d4-4ad2-828a-2b25b4b296ae","type":"BoxAnnotation"},"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"}},"id":"a7e9e0dc-4a96-421d-9756-2ab19e4c1349","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"efccd1ed-cbef-482d-8bf5-4133cc481676","type":"DataRange1d"},{"attributes":{"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c53ae8a-48d1-46fd-9e0d-0e4af45c5142","type":"BasicTicker"}},"id":"0eb05157-8994-4dc8-998b-43367fdf2795","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3ac762b-eec2-41c4-9e87-d0b5d00dbdf2","type":"Square"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"f77fcd20-1a0e-4ec0-b133-a5ff3ea45e19","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f77fcd20-1a0e-4ec0-b133-a5ff3ea45e19","type":"ColumnDataSource"},"glyph":{"id":"3e73a8b0-a08d-47f2-9006-ad62506843db","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"42eb5708-73e5-4a81-bf2b-086fd95446c3","type":"Triangle"},"selection_glyph":null},"id":"24345527-11b9-4440-a7bf-a4056595870d","type":"GlyphRenderer"},{"attributes":{},"id":"7c53ae8a-48d1-46fd-9e0d-0e4af45c5142","type":"BasicTicker"},{"attributes":{"overlay":{"id":"fbc3313b-5c2e-4436-bdfa-d35c06ea4619","type":"BoxAnnotation"},"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"}},"id":"076c3b4c-2b05-419e-bf64-cdda25f0061f","type":"BoxZoomTool"},{"attributes":{},"id":"69829cc4-3aa7-406e-9cb8-b8bd73e76305","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"}},"id":"0dc58373-fde5-45ec-a641-01e5b55ace20","type":"ResetTool"},{"attributes":{"children":[{"id":"64953392-25d7-44aa-95d2-53cec2dc53b3","type":"ToolbarBox"},{"id":"9af60863-b66c-483f-9ba7-8e103e1ea2f4","type":"Column"}]},"id":"ba2c2986-f6cd-4257-b69d-545d46526564","type":"Column"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"74f211bb-32eb-44c0-bd88-408fb7a24a9d","type":"Circle"},{"attributes":{"callback":null},"id":"4c0d3fc3-2a16-43a2-9560-fdd753ce1799","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"c72726a3-2706-4e29-878e-8e19b01d2717","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7fd2ade8-9204-409d-a7c2-4454e87b5a49","type":"ColumnDataSource"},"glyph":{"id":"4a4f41f6-2bb0-490f-abd1-0be836de8585","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"b3ac762b-eec2-41c4-9e87-d0b5d00dbdf2","type":"Square"},"selection_glyph":null},"id":"23d9db2b-cb49-4bc2-a9ec-364f417a56ab","type":"GlyphRenderer"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"6d524d9c-d096-40af-927c-4dd6b285bdb1","type":"PanTool"},{"id":"dbc32245-a2a0-4c4e-b4ae-8674d7e20007","type":"WheelZoomTool"},{"id":"076c3b4c-2b05-419e-bf64-cdda25f0061f","type":"BoxZoomTool"},{"id":"e86b76d2-2e01-4842-81d5-7d98b21cb0a3","type":"SaveTool"},{"id":"a2c4d2b4-54df-43f2-9953-2f72bd277af6","type":"ResetTool"},{"id":"86c16c47-6352-4d28-a46e-da64c31ecdd1","type":"HelpTool"},{"id":"bfe47034-b3c5-41f3-9ba4-6e3e2f3e5440","type":"PanTool"},{"id":"44c35db4-2ef3-4bf9-acc0-5a466d87bd60","type":"WheelZoomTool"},{"id":"c0018825-deaf-48a2-bd87-399e68027c60","type":"BoxZoomTool"},{"id":"f5cd1c0c-4b45-4ee2-a688-2818109c8e2e","type":"SaveTool"},{"id":"316e78fd-9b06-40f1-ad8c-c090dfae4ce1","type":"ResetTool"},{"id":"e19921b1-2404-4002-b138-175007116c2e","type":"HelpTool"},{"id":"3d0a0729-8f5c-45b6-99ab-cdf229bac692","type":"PanTool"},{"id":"a02a7915-9a4d-4dc8-9efe-dfc592e2e75c","type":"WheelZoomTool"},{"id":"a7e9e0dc-4a96-421d-9756-2ab19e4c1349","type":"BoxZoomTool"},{"id":"4c499992-e3a8-48e0-a2f9-63c2a5844bf0","type":"SaveTool"},{"id":"0dc58373-fde5-45ec-a641-01e5b55ace20","type":"ResetTool"},{"id":"ff3fe89a-6957-48e7-83c1-f420daf19ba4","type":"HelpTool"}]},"id":"64953392-25d7-44aa-95d2-53cec2dc53b3","type":"ToolbarBox"},{"attributes":{},"id":"e1b4b7fb-6371-4e64-af25-871011fe4735","type":"BasicTicker"},{"attributes":{"children":[{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"}]},"id":"b3b89373-ad9d-44f1-9c30-5e1df6f53408","type":"Row"},{"attributes":{"plot":{"id":"dc090c6a-2c79-48e9-9a46-0aa310d92e06","subtype":"Figure","type":"Plot"}},"id":"4c499992-e3a8-48e0-a2f9-63c2a5844bf0","type":"SaveTool"},{"attributes":{"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"}},"id":"e19921b1-2404-4002-b138-175007116c2e","type":"HelpTool"},{"attributes":{"callback":null},"id":"d2b4b61f-f5b2-4b43-aed7-7d1b69b65c8d","type":"DataRange1d"},{"attributes":{"plot":{"id":"b28b8fe1-02ca-4e6c-b6d8-2158f5355125","subtype":"Figure","type":"Plot"}},"id":"a2c4d2b4-54df-43f2-9953-2f72bd277af6","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f83a61eb-ffc3-40d7-894d-6944bfe99878","type":"Circle"},{"attributes":{},"id":"7982ef59-00e4-4600-a1ab-dd106d6e4e96","type":"BasicTicker"},{"attributes":{"plot":{"id":"e43018af-ad1e-4d77-9346-474379d79790","subtype":"Figure","type":"Plot"}},"id":"f5cd1c0c-4b45-4ee2-a688-2818109c8e2e","type":"SaveTool"},{"attributes":{"callback":null},"id":"d8ac2143-dadb-4931-a28d-f83ac1904383","type":"DataRange1d"}],"root_ids":["ba2c2986-f6cd-4257-b69d-545d46526564"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"c91d38a6-63a1-4c63-b512-93206282fd62","elementid":"fc6042bc-1416-475f-8b92-5cdc1af35ff3","modelid":"ba2c2986-f6cd-4257-b69d-545d46526564"}];
                  
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