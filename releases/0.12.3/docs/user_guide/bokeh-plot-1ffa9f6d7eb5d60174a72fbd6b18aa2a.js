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
      };var element = document.getElementById("0412d0e2-e0ed-4a70-81e5-48f0a7f86937");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0412d0e2-e0ed-4a70-81e5-48f0a7f86937' but no matching script tag was found. ")
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
                  var docs_json = {"643eec61-e127-47ab-90a6-9ca06106eba7":{"roots":{"references":[{"attributes":{},"id":"82a45e8e-5bc0-4d0b-903f-3112a649355c","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"82c66761-9f5f-465c-a3e5-609817b3883e","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"82799319-8b1e-4628-9016-d94d851c8d03","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9aac06db-8300-413b-bb8d-1270b2a05722","type":"BoxSelectTool"},{"id":"18e59c7c-7010-4064-a45c-99efd5c17338","type":"BoxZoomTool"},{"id":"1293bfc7-8e58-4586-aa85-96150cbfb756","type":"LassoSelectTool"},{"id":"ba243adf-d76e-4849-baa2-1198487e9485","type":"ResetTool"}]},"id":"b7728551-b9d7-4f93-b816-90dc311dd0af","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"aca0df48-3d50-441b-a708-c41b55563fb2","type":"PolyAnnotation"},"plot":{"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"}},"id":"1293bfc7-8e58-4586-aa85-96150cbfb756","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"aca0df48-3d50-441b-a708-c41b55563fb2","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"1521e308-b9f7-446f-b1f5-9bf2f80eaf95","type":"DataRange1d"},{"attributes":{"overlay":{"id":"0aeb7378-6949-4e67-8b6e-89eae55ba508","type":"BoxAnnotation"},"plot":{"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"}},"id":"18e59c7c-7010-4064-a45c-99efd5c17338","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"7ff1e451-c82a-4470-bd64-dddfe8a052bf","type":"BasicTickFormatter"},"plot":{"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"},"ticker":{"id":"82a45e8e-5bc0-4d0b-903f-3112a649355c","type":"BasicTicker"}},"id":"4f9a6565-8e74-4c94-a25b-7dc14539b45d","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.032570043210743194,0.14155353702762585,0.5614052631688615,0.8294911987266257,0.05768095534158557,0.6565016319887028,0.04399190306003686,0.9331186066705831,0.7835365313112577,0.7607165197955827,0.6016257860024856,0.7807416612197385,0.3808826894406181,0.3291496080214361,0.26501982193472673,0.9187911443523478,0.9721363125912009,0.5528746245625135,0.7090607895208471,0.4789484321410731,0.8978474912022907,0.8331589893139419,0.734358519249378,0.48736692299527185,0.29384510717652734,0.1930879686161815,0.6703508746217746,0.32954005850196977,0.7841477716045937,0.20319235443649253,0.759484681391565,0.9835238859372019,0.6321655358982499,0.6935710597075396,0.04926389931919617,0.599671050087258,0.6152448244792087,0.9903606262283731,0.840616576550471,0.04461276358210309,0.2873552787275223,0.269894047016053,0.41387730128373,0.8283432343343609,0.5611656152696849,0.2376297377236536,0.4942126422828772,0.972792454865548,0.29498724418895705,0.9637238507847821,0.37539798574530125,0.3279911323180553,0.8283729123917436,0.877352820344409,0.9406051513203066,0.6953621438237914,0.5675313520155844,0.13321146063302014,0.1126033344720585,0.35206572161586147,0.35777692126647165,0.7926405163111754,0.23878876109939706,0.8376042842496318,0.5865671535245767,0.8633857286167207,0.5217504497606311,0.7565575354469104,0.838232234182704,0.054925907323829515,0.03502222006060385,0.08071247810911941,0.6474490307427617,0.23862454562429303,0.5727209108781454,0.4840092807988816,0.7955897188250318,0.17235815335735138,0.0028858353463139252,0.3997623707579975,0.7672017099076316,0.6829935589132927,0.23222058308863203,0.9853401244471423,0.6209670493737551,0.10525393594404941,0.39297146290066043,0.6814903284978555,0.03978831493934487,0.5743441610305625,0.3619774635731343,0.29125211460281475,0.007705699862909254,0.6251904592511573,0.5305436307212769,0.4497704984904838,0.22896946574961796,0.7784585324636814,0.07446196277130868,0.9634669693656748,0.04299330964112247,0.33600978238999646,0.8673494365291027,0.020116983950966172,0.7588366940706442,0.13653297048190038,0.9963639590087988,0.5680828995374003,0.8405457731314044,0.1974307942383644,0.7418832376145171,0.7156534658638851,0.7829844537390065,0.6509963166202909,0.9508155161604239,0.3384756058559254,0.006745357671917751,0.6738308043681885,0.765872413035201,0.15814029559868048,0.6613612699172631,0.9369089440436864,0.8483315525503162,0.005074761315112419,0.5526678203693687,0.8140220708054603,0.04844951190227187,0.3026087364798731,0.5008027303146809,0.7911116258005887,0.7023821812140865,0.7481773528082507,0.5166537465138238,0.3973380970615893,0.10675395822257239,0.5133029214390215,0.9508492319921383,0.6984701019193124,0.38899024861579656,0.1525342357085212,0.48691451223885196,0.08145706225876836,0.8263073033034201,0.6088879818632199,0.6656110542772358,0.44311196456262425,0.39688108059795624,0.8991458290293328,0.263641109133251,0.4705462780639972,0.08516283915003409,0.1207739409551648,0.09934486683364974,0.73121199679677,0.2854859530937507,0.9887391188824597,0.4297204993932464,0.5128091517715788,0.4402175692928556,0.862431637078989,0.5617377448445177,0.6568437374712514,0.7667042420773903,0.6678568073920054,0.6039100806879371,0.045200737159489246,0.3062041652520602,0.033715685568017295,0.10213266617669181,0.11046752200924026,0.8035285127110523,0.1512322488123865,0.5469796300071632,0.40306659540886447,0.45651684391651304,0.015357037431127374,0.7882959897465514,0.19051942199222305,0.04338115997861125,0.7738702819969284,0.33870242806631545,0.6727736506884724,0.5770367073697794,0.4939917379362059,0.3399457211906499,0.48407664641820836,0.2840571175339227,0.9593050211942028,0.020260904059158813,0.9312780156940939,0.5553935269584409,0.880814594450295,0.5773893353330439,0.43763158751038533,0.16926941800567197,0.6504083186096816,0.7196115507549393,0.10119781411596052,0.9710530684840288,0.15692971848154158],"y":[0.22534508748535031,0.5013910862696974,0.36733000745671607,0.8812141751948279,0.5148497701705037,0.7941569428226638,0.08220244741944838,0.7099049634618867,0.22181738786251037,0.5468313968862347,0.9665094684367949,0.34997927105993254,0.5234898663274528,0.766005073078803,0.7807083039454706,0.6348710597805985,0.8874223250055088,0.5228328293581365,0.8693611915024393,0.04809839384528758,0.17448600325167118,0.8711257517070111,0.8100282086275299,0.1758148558429321,0.40579353061965906,0.9721651074572725,0.9217172907219653,0.47424954176837786,0.05305936824905566,0.14757661577383108,0.22898703773323636,0.9449299769367718,0.7153120602703296,0.563067050541307,0.5478654786720838,0.404239645948122,0.5983822010159281,0.7824997662254847,0.8700069865889505,0.9155721194078079,0.9418585697822456,0.6999363663579153,0.8103911800787724,0.7598682453128595,0.20178176380555957,0.8441970522665742,0.7407078347576225,0.5768059066854742,0.19076654368000034,0.8340124912105907,0.08349195085971262,0.17327716313210517,0.07038020859383443,0.03267703778080766,0.6555837857351587,0.6800615111777845,0.5827827827517474,0.250576012492308,0.4305820354645673,0.23360632080377508,0.05570354205353023,0.37672535733901535,0.3662205512293685,0.35963299509114266,0.9171709523851471,0.04432765795556859,0.8032673901789034,0.5087722349796744,0.6691859491458215,0.39737861975890776,0.39478558560443866,0.9268501308351758,0.6143721688031146,0.9332967144845118,0.5223235380412451,0.12071081994126065,0.8642206015818047,0.27730266895611744,0.9706601605636833,0.774550272815055,0.47717699301958905,0.7866559065079257,0.46378158635217803,0.4336320818408138,0.9647456341203837,0.06000791878139988,0.032701497246319655,0.816671024724759,0.01715655755525125,0.2179173376284924,0.6863966342977206,0.14573284697700817,0.6807796392209595,0.03145912445100307,0.22517570804863807,0.9564087146708795,0.5315039927765717,0.7749204444467608,0.42823144615027764,0.06368745573486312,0.385110783510462,0.38930689772828564,0.5371455614930858,0.5857805963875774,0.40856983091502985,0.6561915576988256,0.13373241651322787,0.6720708622759735,0.07970830996449896,0.6082331282174605,0.3985497130711969,0.6142451467439152,0.2914969864005199,0.19743697560214768,0.644382628055064,0.55833919752063,0.8469434095134027,0.19171469459751023,0.29622704325393123,0.7023428631736955,0.77921953828137,0.8044538881518573,0.6982780671566392,0.6218699397467957,0.4727377336287125,0.2942489598178225,0.28688430843037316,0.7048013889131423,0.7447498744699094,0.8983231102088183,0.9988394777649418,0.5703747264690002,0.44214298033370814,0.8670523465722323,0.5811504734062491,0.5189231657217649,0.5504119411955615,0.5553005389387586,0.2653343567855284,0.27697261087831304,0.29476285066619057,0.05246693410556247,0.47850508068934283,0.26259985977655764,0.703856083138077,0.389784225907417,0.49641108727760463,0.9263316878844453,0.7575872908272832,0.8149402442965114,0.40366349901972065,0.8929075076827385,0.06942769401877114,0.04374845272634087,0.15371817508694985,0.2791109824784004,0.5728245184709464,0.23785806405485954,0.5586446384662279,0.3459815251583004,0.8692539367910835,0.7729021953067202,0.6267795096097505,0.27386307687319367,0.2802942253528492,0.30078081906757503,0.885971505422976,0.2788334752499916,0.6138109605216064,0.6583642354427075,0.8475818854443317,0.4037493347404755,0.4446191608008295,0.35612953288984095,0.7471366499596902,0.9127161129517681,0.820329190212071,0.6266266828288424,0.3989744381318048,0.43788379304512326,0.3170163971024197,0.10900246073683983,0.401493425580825,0.8501085220351032,0.8660681065219709,0.2563407936711992,0.9078957054999527,0.5210560519139023,0.5559597231017367,0.6945942331348088,0.8179056032949966,0.9416878274622569,0.5310040525065424,0.5100386189286333,0.6265779438834498,0.9766211235065441,0.2194412518551324,0.4812444006260441,0.09249121101458846,0.421936361017917]}},"id":"bd46c534-5ba8-4288-a02a-fbb308a7ab2a","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"82c66761-9f5f-465c-a3e5-609817b3883e","type":"BoxAnnotation"},"plot":{"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"},"renderers":[{"id":"62f4e2c4-97b0-4e5e-a944-8e3d5d5da6ef","type":"GlyphRenderer"}]},"id":"9aac06db-8300-413b-bb8d-1270b2a05722","type":"BoxSelectTool"},{"attributes":{},"id":"7ff1e451-c82a-4470-bd64-dddfe8a052bf","type":"BasicTickFormatter"},{"attributes":{},"id":"dce1e64d-dee6-4567-8d35-da91c58266ed","type":"BasicTicker"},{"attributes":{"plot":{"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"},"ticker":{"id":"dce1e64d-dee6-4567-8d35-da91c58266ed","type":"BasicTicker"}},"id":"392569b3-ee80-485c-b6c2-5429836e60d8","type":"Grid"},{"attributes":{"below":[{"id":"73ce47b9-fa59-42b9-a2eb-2e3333df0f43","type":"LinearAxis"}],"left":[{"id":"4f9a6565-8e74-4c94-a25b-7dc14539b45d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"73ce47b9-fa59-42b9-a2eb-2e3333df0f43","type":"LinearAxis"},{"id":"392569b3-ee80-485c-b6c2-5429836e60d8","type":"Grid"},{"id":"4f9a6565-8e74-4c94-a25b-7dc14539b45d","type":"LinearAxis"},{"id":"acb2e468-606a-4e64-bffb-ad7a70cbdf32","type":"Grid"},{"id":"82c66761-9f5f-465c-a3e5-609817b3883e","type":"BoxAnnotation"},{"id":"0aeb7378-6949-4e67-8b6e-89eae55ba508","type":"BoxAnnotation"},{"id":"aca0df48-3d50-441b-a708-c41b55563fb2","type":"PolyAnnotation"},{"id":"62f4e2c4-97b0-4e5e-a944-8e3d5d5da6ef","type":"GlyphRenderer"}],"title":{"id":"82799319-8b1e-4628-9016-d94d851c8d03","type":"Title"},"tool_events":{"id":"8d84f1c8-3ebc-404f-bf39-a35d47105dda","type":"ToolEvents"},"toolbar":{"id":"b7728551-b9d7-4f93-b816-90dc311dd0af","type":"Toolbar"},"x_range":{"id":"3c1358ec-8221-4709-b97f-d7044e79982c","type":"DataRange1d"},"y_range":{"id":"1521e308-b9f7-446f-b1f5-9bf2f80eaf95","type":"DataRange1d"}},"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"3a406170-3f0c-4346-801e-80c2c61cdb81","type":"BasicTickFormatter"},"plot":{"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"},"ticker":{"id":"dce1e64d-dee6-4567-8d35-da91c58266ed","type":"BasicTicker"}},"id":"73ce47b9-fa59-42b9-a2eb-2e3333df0f43","type":"LinearAxis"},{"attributes":{"callback":null},"id":"3c1358ec-8221-4709-b97f-d7044e79982c","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"e44fb746-1785-4e42-b5dd-900879785fe4","type":"Circle"},{"attributes":{"data_source":{"id":"bd46c534-5ba8-4288-a02a-fbb308a7ab2a","type":"ColumnDataSource"},"glyph":{"id":"28a96b08-ccd8-4481-a11a-71033f92267b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e44fb746-1785-4e42-b5dd-900879785fe4","type":"Circle"},"selection_glyph":null},"id":"62f4e2c4-97b0-4e5e-a944-8e3d5d5da6ef","type":"GlyphRenderer"},{"attributes":{},"id":"3a406170-3f0c-4346-801e-80c2c61cdb81","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0aeb7378-6949-4e67-8b6e-89eae55ba508","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"},"ticker":{"id":"82a45e8e-5bc0-4d0b-903f-3112a649355c","type":"BasicTicker"}},"id":"acb2e468-606a-4e64-bffb-ad7a70cbdf32","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"28a96b08-ccd8-4481-a11a-71033f92267b","type":"Circle"},{"attributes":{"plot":{"id":"2386c3a5-13b1-4821-ad22-56b445acc871","subtype":"Figure","type":"Plot"}},"id":"ba243adf-d76e-4849-baa2-1198487e9485","type":"ResetTool"},{"attributes":{},"id":"8d84f1c8-3ebc-404f-bf39-a35d47105dda","type":"ToolEvents"}],"root_ids":["2386c3a5-13b1-4821-ad22-56b445acc871"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"643eec61-e127-47ab-90a6-9ca06106eba7","elementid":"0412d0e2-e0ed-4a70-81e5-48f0a7f86937","modelid":"2386c3a5-13b1-4821-ad22-56b445acc871"}];
                  
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