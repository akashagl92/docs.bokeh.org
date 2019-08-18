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
      };var element = document.getElementById("0e7fbb24-95da-4416-a375-aff785b43e3f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0e7fbb24-95da-4416-a375-aff785b43e3f' but no matching script tag was found. ")
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
                  var docs_json = {"f6c8c905-d721-49e6-984f-47144c568edf":{"roots":{"references":[{"attributes":{"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"}},"id":"0c903c61-99c0-49e0-8aeb-3e4e9bcae7ef","type":"HelpTool"},{"attributes":{"below":[{"id":"3641c56a-7fd5-4537-988c-84de92314d86","type":"LinearAxis"}],"left":[{"id":"25c217a9-58bd-4dae-a0e2-d39109d89ee1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3641c56a-7fd5-4537-988c-84de92314d86","type":"LinearAxis"},{"id":"d8b6f1b6-e639-47d0-bc6a-89539359a405","type":"Grid"},{"id":"25c217a9-58bd-4dae-a0e2-d39109d89ee1","type":"LinearAxis"},{"id":"9fcee696-9c19-4bec-aea2-78a272ffbace","type":"Grid"},{"id":"a3b38af3-d51a-419f-9965-ba9e5d47ac8d","type":"BoxAnnotation"},{"id":"0e9c8b44-f6a8-422e-9fdd-5772d47f305b","type":"GlyphRenderer"}],"title":{"id":"2ca05460-b308-4b62-ad12-8ae7d0242249","type":"Title"},"tool_events":{"id":"123279af-fd57-43bf-b110-82b85f39377c","type":"ToolEvents"},"toolbar":{"id":"01e55c03-82bc-412d-aea9-00d5f80dcf39","type":"Toolbar"},"x_range":{"id":"ad5e6ce9-88ee-4bd8-94c2-865800980dd9","type":"Range1d"},"y_range":{"id":"f9ed6835-5e91-4677-8f1c-b4f0eea02f18","type":"Range1d"}},"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fa3dc96c-5e38-403c-b962-7ff254c33d2b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"ad5e6ce9-88ee-4bd8-94c2-865800980dd9","type":"Range1d"},{"attributes":{"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"}},"id":"afa29b96-fb80-4c7d-bbba-16dce1cb5182","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a3b38af3-d51a-419f-9965-ba9e5d47ac8d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"}},"id":"d999e7a5-f2d8-4654-bc49-e5a7a2755a67","type":"WheelZoomTool"},{"attributes":{},"id":"123279af-fd57-43bf-b110-82b85f39377c","type":"ToolEvents"},{"attributes":{"data_source":{"id":"d7a418ed-a7f1-4280-8607-647cec10b548","type":"ColumnDataSource"},"glyph":{"id":"2b76229d-5774-4be9-a210-d9716cbdfe04","type":"ImageRGBA"},"hover_glyph":null,"nonselection_glyph":{"id":"12650314-c8ac-4e9e-9f8d-a1e51a3770dc","type":"ImageRGBA"},"selection_glyph":null},"id":"0e9c8b44-f6a8-422e-9fdd-5772d47f305b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"}},"id":"a9cdce39-2b0f-4b6d-8a43-ff2b6b51e83f","type":"ResetTool"},{"attributes":{"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"}},"id":"be0932b5-1bb5-4e91-ae89-d5a513db334d","type":"PanTool"},{"attributes":{},"id":"66139bc4-8a10-41b5-8024-b0dfa558d9f5","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"be0932b5-1bb5-4e91-ae89-d5a513db334d","type":"PanTool"},{"id":"d999e7a5-f2d8-4654-bc49-e5a7a2755a67","type":"WheelZoomTool"},{"id":"dda333d7-abbb-4b8e-940c-09704d0daaba","type":"BoxZoomTool"},{"id":"afa29b96-fb80-4c7d-bbba-16dce1cb5182","type":"SaveTool"},{"id":"a9cdce39-2b0f-4b6d-8a43-ff2b6b51e83f","type":"ResetTool"},{"id":"0c903c61-99c0-49e0-8aeb-3e4e9bcae7ef","type":"HelpTool"}]},"id":"01e55c03-82bc-412d-aea9-00d5f80dcf39","type":"Toolbar"},{"attributes":{"plot":null,"text":null},"id":"2ca05460-b308-4b62-ad12-8ae7d0242249","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebcdbbe1-0e20-48bc-a9de-7a57a2e7eb84","type":"BasicTicker"}},"id":"9fcee696-9c19-4bec-aea2-78a272ffbace","type":"Grid"},{"attributes":{"formatter":{"id":"66139bc4-8a10-41b5-8024-b0dfa558d9f5","type":"BasicTickFormatter"},"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"},"ticker":{"id":"72c5e3dc-b129-48df-bb37-99c117a5a8b4","type":"BasicTicker"}},"id":"3641c56a-7fd5-4537-988c-84de92314d86","type":"LinearAxis"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b76229d-5774-4be9-a210-d9716cbdfe04","type":"ImageRGBA"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12650314-c8ac-4e9e-9f8d-a1e51a3770dc","type":"ImageRGBA"},{"attributes":{"overlay":{"id":"a3b38af3-d51a-419f-9965-ba9e5d47ac8d","type":"BoxAnnotation"},"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"}},"id":"dda333d7-abbb-4b8e-940c-09704d0daaba","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","image","dh","dw"],"data":{"dh":[10],"dw":[10],"image":[[[4278230528,4279016960,4279868928,4280720896,4281572864,4282359296,4283211264,4284063232,4284915200,4285701632,4286553600,4287405568,4288257536,4289043968,4289895936,4290747904,4291599872,4292386304,4293238272,4294090240],[4278230540,4279016972,4279868940,4280720908,4281572876,4282359308,4283211276,4284063244,4284915212,4285701644,4286553612,4287405580,4288257548,4289043980,4289895948,4290747916,4291599884,4292386316,4293238284,4294090252],[4278230553,4279016985,4279868953,4280720921,4281572889,4282359321,4283211289,4284063257,4284915225,4285701657,4286553625,4287405593,4288257561,4289043993,4289895961,4290747929,4291599897,4292386329,4293238297,4294090265],[4278230566,4279016998,4279868966,4280720934,4281572902,4282359334,4283211302,4284063270,4284915238,4285701670,4286553638,4287405606,4288257574,4289044006,4289895974,4290747942,4291599910,4292386342,4293238310,4294090278],[4278230579,4279017011,4279868979,4280720947,4281572915,4282359347,4283211315,4284063283,4284915251,4285701683,4286553651,4287405619,4288257587,4289044019,4289895987,4290747955,4291599923,4292386355,4293238323,4294090291],[4278230591,4279017023,4279868991,4280720959,4281572927,4282359359,4283211327,4284063295,4284915263,4285701695,4286553663,4287405631,4288257599,4289044031,4289895999,4290747967,4291599935,4292386367,4293238335,4294090303],[4278230604,4279017036,4279869004,4280720972,4281572940,4282359372,4283211340,4284063308,4284915276,4285701708,4286553676,4287405644,4288257612,4289044044,4289896012,4290747980,4291599948,4292386380,4293238348,4294090316],[4278230617,4279017049,4279869017,4280720985,4281572953,4282359385,4283211353,4284063321,4284915289,4285701721,4286553689,4287405657,4288257625,4289044057,4289896025,4290747993,4291599961,4292386393,4293238361,4294090329],[4278230630,4279017062,4279869030,4280720998,4281572966,4282359398,4283211366,4284063334,4284915302,4285701734,4286553702,4287405670,4288257638,4289044070,4289896038,4290748006,4291599974,4292386406,4293238374,4294090342],[4278230642,4279017074,4279869042,4280721010,4281572978,4282359410,4283211378,4284063346,4284915314,4285701746,4286553714,4287405682,4288257650,4289044082,4289896050,4290748018,4291599986,4292386418,4293238386,4294090354],[4278230655,4279017087,4279869055,4280721023,4281572991,4282359423,4283211391,4284063359,4284915327,4285701759,4286553727,4287405695,4288257663,4289044095,4289896063,4290748031,4291599999,4292386431,4293238399,4294090367],[4278230668,4279017100,4279869068,4280721036,4281573004,4282359436,4283211404,4284063372,4284915340,4285701772,4286553740,4287405708,4288257676,4289044108,4289896076,4290748044,4291600012,4292386444,4293238412,4294090380],[4278230681,4279017113,4279869081,4280721049,4281573017,4282359449,4283211417,4284063385,4284915353,4285701785,4286553753,4287405721,4288257689,4289044121,4289896089,4290748057,4291600025,4292386457,4293238425,4294090393],[4278230693,4279017125,4279869093,4280721061,4281573029,4282359461,4283211429,4284063397,4284915365,4285701797,4286553765,4287405733,4288257701,4289044133,4289896101,4290748069,4291600037,4292386469,4293238437,4294090405],[4278230706,4279017138,4279869106,4280721074,4281573042,4282359474,4283211442,4284063410,4284915378,4285701810,4286553778,4287405746,4288257714,4289044146,4289896114,4290748082,4291600050,4292386482,4293238450,4294090418],[4278230719,4279017151,4279869119,4280721087,4281573055,4282359487,4283211455,4284063423,4284915391,4285701823,4286553791,4287405759,4288257727,4289044159,4289896127,4290748095,4291600063,4292386495,4293238463,4294090431],[4278230732,4279017164,4279869132,4280721100,4281573068,4282359500,4283211468,4284063436,4284915404,4285701836,4286553804,4287405772,4288257740,4289044172,4289896140,4290748108,4291600076,4292386508,4293238476,4294090444],[4278230744,4279017176,4279869144,4280721112,4281573080,4282359512,4283211480,4284063448,4284915416,4285701848,4286553816,4287405784,4288257752,4289044184,4289896152,4290748120,4291600088,4292386520,4293238488,4294090456],[4278230757,4279017189,4279869157,4280721125,4281573093,4282359525,4283211493,4284063461,4284915429,4285701861,4286553829,4287405797,4288257765,4289044197,4289896165,4290748133,4291600101,4292386533,4293238501,4294090469],[4278230770,4279017202,4279869170,4280721138,4281573106,4282359538,4283211506,4284063474,4284915442,4285701874,4286553842,4287405810,4288257778,4289044210,4289896178,4290748146,4291600114,4292386546,4293238514,4294090482]]],"x":[0],"y":[0]}},"id":"d7a418ed-a7f1-4280-8607-647cec10b548","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"},"ticker":{"id":"72c5e3dc-b129-48df-bb37-99c117a5a8b4","type":"BasicTicker"}},"id":"d8b6f1b6-e639-47d0-bc6a-89539359a405","type":"Grid"},{"attributes":{},"id":"ebcdbbe1-0e20-48bc-a9de-7a57a2e7eb84","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"f9ed6835-5e91-4677-8f1c-b4f0eea02f18","type":"Range1d"},{"attributes":{"formatter":{"id":"fa3dc96c-5e38-403c-b962-7ff254c33d2b","type":"BasicTickFormatter"},"plot":{"id":"93cba910-a861-4560-af4b-f2979c6af079","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebcdbbe1-0e20-48bc-a9de-7a57a2e7eb84","type":"BasicTicker"}},"id":"25c217a9-58bd-4dae-a0e2-d39109d89ee1","type":"LinearAxis"},{"attributes":{},"id":"72c5e3dc-b129-48df-bb37-99c117a5a8b4","type":"BasicTicker"}],"root_ids":["93cba910-a861-4560-af4b-f2979c6af079"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"f6c8c905-d721-49e6-984f-47144c568edf","elementid":"0e7fbb24-95da-4416-a375-aff785b43e3f","modelid":"93cba910-a861-4560-af4b-f2979c6af079"}];
                  
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