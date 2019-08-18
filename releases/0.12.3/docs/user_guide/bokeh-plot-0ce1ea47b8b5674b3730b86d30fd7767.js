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
      };var element = document.getElementById("ad638312-6c0e-494b-8ce6-48a22d99177a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ad638312-6c0e-494b-8ce6-48a22d99177a' but no matching script tag was found. ")
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
                  var docs_json = {"72a40dc0-35b7-4e1d-87a8-d39b8590baba":{"roots":{"references":[{"attributes":{},"id":"227bc1bf-506d-4d80-9c23-a8ce03e8ff0f","type":"YearsTicker"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"592c4bb0-bf46-4fe4-862e-9c510ac740c7","type":"AdaptiveTicker"},{"attributes":{"num_minor_ticks":5},"id":"8f93169f-22f7-4bdd-82ab-55ca1889b57d","type":"DatetimeTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"0f0412a3-8748-4d69-a129-67528b749fa8","type":"MonthsTicker"},{"attributes":{"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"}},"id":"6e4dab13-7c91-4ac7-a514-5a29cfe38cf8","type":"HelpTool"},{"attributes":{"below":[{"id":"426de748-4635-46eb-b34d-b54451a8016b","type":"DatetimeAxis"}],"left":[{"id":"ecd7e347-6dbb-459c-a9e7-6305285616e8","type":"LinearAxis"}],"plot_height":250,"plot_width":800,"renderers":[{"id":"426de748-4635-46eb-b34d-b54451a8016b","type":"DatetimeAxis"},{"id":"561f59ad-a0e1-4148-9d4e-c7327ff506a1","type":"Grid"},{"id":"ecd7e347-6dbb-459c-a9e7-6305285616e8","type":"LinearAxis"},{"id":"f5b38b0f-bfd1-4cc2-b708-23156680736f","type":"Grid"},{"id":"e25f1d9b-7171-4c4e-a794-c03119da4e45","type":"BoxAnnotation"},{"id":"492c6c7d-072b-4ddc-9c15-8c93ef617158","type":"GlyphRenderer"}],"title":{"id":"8bf53f10-119f-480e-99a0-1e26e5ea0dd0","type":"Title"},"tool_events":{"id":"ba2f6a2f-ac3e-454b-ba9b-7b1ddac033af","type":"ToolEvents"},"toolbar":{"id":"68e90d4f-fbf5-4b0b-95e4-b64e18cde633","type":"Toolbar"},"x_range":{"id":"3ca4e45c-c741-46e0-bcf6-55cf7ee77d9d","type":"DataRange1d"},"y_range":{"id":"7cb96dce-25e6-4063-8cb8-7834dbfe3476","type":"DataRange1d"}},"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7cb96dce-25e6-4063-8cb8-7834dbfe3476","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1262217600000.0,1262131200000.0,1262044800000.0,1261958400000.0,1261612800000.0,1261526400000.0,1261440000000.0,1261353600000.0,1261094400000.0,1261008000000.0,1260921600000.0,1260835200000.0,1260748800000.0,1260489600000.0,1260403200000.0,1260316800000.0,1260230400000.0,1260144000000.0,1259884800000.0,1259798400000.0,1259712000000.0,1259625600000.0,1259539200000.0,1259280000000.0,1259107200000.0,1259020800000.0,1258934400000.0,1258675200000.0,1258588800000.0,1258502400000.0,1258416000000.0,1258329600000.0,1258070400000.0,1257984000000.0,1257897600000.0,1257811200000.0,1257724800000.0,1257465600000.0,1257379200000.0,1257292800000.0,1257206400000.0,1257120000000.0,1256860800000.0,1256774400000.0,1256688000000.0,1256601600000.0,1256515200000.0,1256256000000.0,1256169600000.0,1256083200000.0,1255996800000.0,1255910400000.0,1255651200000.0,1255564800000.0,1255478400000.0,1255392000000.0,1255305600000.0,1255046400000.0,1254960000000.0,1254873600000.0,1254787200000.0,1254700800000.0,1254441600000.0,1254355200000.0,1254268800000.0,1254182400000.0,1254096000000.0,1253836800000.0,1253750400000.0,1253664000000.0,1253577600000.0,1253491200000.0,1253232000000.0,1253145600000.0,1253059200000.0,1252972800000.0,1252886400000.0,1252627200000.0,1252540800000.0,1252454400000.0,1252368000000.0,1252022400000.0,1251936000000.0,1251849600000.0,1251763200000.0,1251676800000.0,1251417600000.0,1251331200000.0,1251244800000.0,1251158400000.0,1251072000000.0,1250812800000.0,1250726400000.0,1250640000000.0,1250553600000.0,1250467200000.0,1250208000000.0,1250121600000.0,1250035200000.0,1249948800000.0,1249862400000.0,1249603200000.0,1249516800000.0,1249430400000.0,1249344000000.0,1249257600000.0,1248998400000.0,1248912000000.0,1248825600000.0,1248739200000.0,1248652800000.0,1248393600000.0,1248307200000.0,1248220800000.0,1248134400000.0,1248048000000.0,1247788800000.0,1247702400000.0,1247616000000.0,1247529600000.0,1247443200000.0,1247184000000.0,1247097600000.0,1247011200000.0,1246924800000.0,1246838400000.0,1246492800000.0,1246406400000.0,1246320000000.0,1246233600000.0,1245974400000.0,1245888000000.0,1245801600000.0,1245715200000.0,1245628800000.0,1245369600000.0,1245283200000.0,1245196800000.0,1245110400000.0,1245024000000.0,1244764800000.0,1244678400000.0,1244592000000.0,1244505600000.0,1244419200000.0,1244160000000.0,1244073600000.0,1243987200000.0,1243900800000.0,1243814400000.0,1243555200000.0,1243468800000.0,1243382400000.0,1243296000000.0,1242950400000.0,1242864000000.0,1242777600000.0,1242691200000.0,1242604800000.0,1242345600000.0,1242259200000.0,1242172800000.0,1242086400000.0,1242000000000.0,1241740800000.0,1241654400000.0,1241568000000.0,1241481600000.0,1241395200000.0,1241136000000.0,1241049600000.0,1240963200000.0,1240876800000.0,1240790400000.0,1240531200000.0,1240444800000.0,1240358400000.0,1240272000000.0,1240185600000.0,1239926400000.0,1239840000000.0,1239753600000.0,1239667200000.0,1239580800000.0,1239235200000.0,1239148800000.0,1239062400000.0,1238976000000.0,1238716800000.0,1238630400000.0,1238544000000.0,1238457600000.0,1238371200000.0,1238112000000.0,1238025600000.0,1237939200000.0,1237852800000.0,1237766400000.0,1237507200000.0,1237420800000.0,1237334400000.0,1237248000000.0,1237161600000.0,1236902400000.0,1236816000000.0,1236729600000.0,1236643200000.0,1236556800000.0,1236297600000.0,1236211200000.0,1236124800000.0,1236038400000.0,1235952000000.0,1235692800000.0,1235606400000.0,1235520000000.0,1235433600000.0,1235347200000.0,1235088000000.0,1235001600000.0,1234915200000.0,1234828800000.0,1234483200000.0,1234396800000.0,1234310400000.0,1234224000000.0,1234137600000.0,1233878400000.0,1233792000000.0,1233705600000.0,1233619200000.0,1233532800000.0,1233273600000.0,1233187200000.0,1233100800000.0,1233014400000.0,1232928000000.0,1232668800000.0,1232582400000.0,1232496000000.0,1232409600000.0,1232064000000.0,1231977600000.0,1231891200000.0,1231804800000.0,1231718400000.0,1231459200000.0,1231372800000.0,1231286400000.0,1231200000000.0,1231113600000.0,1230854400000.0,1230681600000.0,1230595200000.0,1230508800000.0,1230249600000.0,1230076800000.0,1229990400000.0,1229904000000.0,1229644800000.0,1229558400000.0,1229472000000.0,1229385600000.0,1229299200000.0,1229040000000.0,1228953600000.0,1228867200000.0,1228780800000.0,1228694400000.0,1228435200000.0,1228348800000.0,1228262400000.0,1228176000000.0,1228089600000.0,1227830400000.0,1227657600000.0,1227571200000.0,1227484800000.0,1227225600000.0,1227139200000.0,1227052800000.0,1226966400000.0,1226880000000.0,1226620800000.0,1226534400000.0,1226448000000.0,1226361600000.0,1226275200000.0,1226016000000.0,1225929600000.0,1225843200000.0,1225756800000.0,1225670400000.0,1225411200000.0,1225324800000.0,1225238400000.0,1225152000000.0,1225065600000.0,1224806400000.0,1224720000000.0,1224633600000.0,1224547200000.0,1224460800000.0,1224201600000.0,1224115200000.0,1224028800000.0,1223942400000.0,1223856000000.0,1223596800000.0,1223510400000.0,1223424000000.0,1223337600000.0,1223251200000.0,1222992000000.0,1222905600000.0,1222819200000.0,1222732800000.0,1222646400000.0,1222387200000.0,1222300800000.0,1222214400000.0,1222128000000.0,1222041600000.0,1221782400000.0,1221696000000.0,1221609600000.0,1221523200000.0,1221436800000.0,1221177600000.0,1221091200000.0,1221004800000.0,1220918400000.0,1220832000000.0,1220572800000.0,1220486400000.0,1220400000000.0,1220313600000.0,1219968000000.0,1219881600000.0,1219795200000.0,1219708800000.0,1219622400000.0,1219363200000.0,1219276800000.0,1219190400000.0,1219104000000.0,1219017600000.0,1218758400000.0,1218672000000.0,1218585600000.0,1218499200000.0,1218412800000.0,1218153600000.0,1218067200000.0,1217980800000.0,1217894400000.0,1217808000000.0,1217548800000.0,1217462400000.0,1217376000000.0,1217289600000.0,1217203200000.0,1216944000000.0,1216857600000.0,1216771200000.0,1216684800000.0,1216598400000.0,1216339200000.0,1216252800000.0,1216166400000.0,1216080000000.0,1215993600000.0,1215734400000.0,1215648000000.0,1215561600000.0,1215475200000.0,1215388800000.0,1215043200000.0,1214956800000.0,1214870400000.0,1214784000000.0,1214524800000.0,1214438400000.0,1214352000000.0,1214265600000.0,1214179200000.0,1213920000000.0,1213833600000.0,1213747200000.0,1213660800000.0,1213574400000.0,1213315200000.0,1213228800000.0,1213142400000.0,1213056000000.0,1212969600000.0,1212710400000.0,1212624000000.0,1212537600000.0,1212451200000.0,1212364800000.0,1212105600000.0,1212019200000.0,1211932800000.0,1211846400000.0,1211500800000.0,1211414400000.0,1211328000000.0,1211241600000.0,1211155200000.0,1210896000000.0,1210809600000.0,1210723200000.0,1210636800000.0,1210550400000.0,1210291200000.0,1210204800000.0,1210118400000.0,1210032000000.0,1209945600000.0,1209686400000.0,1209600000000.0,1209513600000.0,1209427200000.0,1209340800000.0,1209081600000.0,1208995200000.0,1208908800000.0,1208822400000.0,1208736000000.0,1208476800000.0,1208390400000.0,1208304000000.0,1208217600000.0,1208131200000.0,1207872000000.0,1207785600000.0,1207699200000.0,1207612800000.0,1207526400000.0,1207267200000.0,1207180800000.0,1207094400000.0,1207008000000.0,1206921600000.0,1206662400000.0,1206576000000.0,1206489600000.0,1206403200000.0,1206316800000.0,1205971200000.0,1205884800000.0,1205798400000.0,1205712000000.0,1205452800000.0,1205366400000.0,1205280000000.0,1205193600000.0,1205107200000.0,1204848000000.0,1204761600000.0,1204675200000.0,1204588800000.0,1204502400000.0,1204243200000.0,1204156800000.0,1204070400000.0,1203984000000.0,1203897600000.0,1203638400000.0,1203552000000.0,1203465600000.0,1203379200000.0,1203033600000.0,1202947200000.0,1202860800000.0,1202774400000.0,1202688000000.0,1202428800000.0,1202342400000.0,1202256000000.0,1202169600000.0,1202083200000.0,1201824000000.0,1201737600000.0,1201651200000.0,1201564800000.0,1201478400000.0,1201219200000.0,1201132800000.0,1201046400000.0,1200960000000.0,1200614400000.0,1200528000000.0,1200441600000.0,1200355200000.0,1200268800000.0,1200009600000.0,1199923200000.0,1199836800000.0,1199750400000.0,1199664000000.0,1199404800000.0,1199318400000.0,1199232000000.0,1199059200000.0,1198800000000.0,1198713600000.0,1198627200000.0,1198454400000.0,1198195200000.0,1198108800000.0,1198022400000.0,1197936000000.0,1197849600000.0,1197590400000.0,1197504000000.0,1197417600000.0,1197331200000.0,1197244800000.0,1196985600000.0,1196899200000.0,1196812800000.0,1196726400000.0,1196640000000.0,1196380800000.0,1196294400000.0,1196208000000.0,1196121600000.0,1196035200000.0,1195776000000.0,1195603200000.0,1195516800000.0,1195430400000.0,1195171200000.0,1195084800000.0,1194998400000.0,1194912000000.0,1194825600000.0,1194566400000.0,1194480000000.0,1194393600000.0,1194307200000.0,1194220800000.0,1193961600000.0,1193875200000.0,1193788800000.0,1193702400000.0,1193616000000.0,1193356800000.0,1193270400000.0,1193184000000.0,1193097600000.0,1193011200000.0,1192752000000.0,1192665600000.0,1192579200000.0,1192492800000.0,1192406400000.0,1192147200000.0,1192060800000.0,1191974400000.0,1191888000000.0,1191801600000.0,1191542400000.0,1191456000000.0,1191369600000.0,1191283200000.0,1191196800000.0,1190937600000.0,1190851200000.0,1190764800000.0,1190678400000.0,1190592000000.0,1190332800000.0,1190246400000.0,1190160000000.0,1190073600000.0,1189987200000.0,1189728000000.0,1189641600000.0,1189555200000.0,1189468800000.0,1189382400000.0,1189123200000.0,1189036800000.0,1188950400000.0,1188864000000.0,1188518400000.0,1188432000000.0,1188345600000.0,1188259200000.0,1188172800000.0,1187913600000.0,1187827200000.0,1187740800000.0,1187654400000.0,1187568000000.0,1187308800000.0,1187222400000.0,1187136000000.0,1187049600000.0,1186963200000.0,1186704000000.0,1186617600000.0,1186531200000.0,1186444800000.0,1186358400000.0,1186099200000.0,1186012800000.0,1185926400000.0,1185840000000.0,1185753600000.0,1185494400000.0,1185408000000.0,1185321600000.0,1185235200000.0,1185148800000.0,1184889600000.0,1184803200000.0,1184716800000.0,1184630400000.0,1184544000000.0,1184284800000.0,1184198400000.0,1184112000000.0,1184025600000.0,1183939200000.0,1183680000000.0,1183593600000.0,1183420800000.0,1183334400000.0,1183075200000.0,1182988800000.0,1182902400000.0,1182816000000.0,1182729600000.0,1182470400000.0,1182384000000.0,1182297600000.0,1182211200000.0,1182124800000.0,1181865600000.0,1181779200000.0,1181692800000.0,1181606400000.0,1181520000000.0,1181260800000.0,1181174400000.0,1181088000000.0,1181001600000.0,1180915200000.0,1180656000000.0,1180569600000.0,1180483200000.0,1180396800000.0,1180051200000.0,1179964800000.0,1179878400000.0,1179792000000.0,1179705600000.0,1179446400000.0,1179360000000.0,1179273600000.0,1179187200000.0,1179100800000.0,1178841600000.0,1178755200000.0,1178668800000.0,1178582400000.0,1178496000000.0,1178236800000.0,1178150400000.0,1178064000000.0,1177977600000.0,1177891200000.0,1177632000000.0,1177545600000.0,1177459200000.0,1177372800000.0,1177286400000.0,1177027200000.0,1176940800000.0,1176854400000.0,1176768000000.0,1176681600000.0,1176422400000.0,1176336000000.0,1176249600000.0,1176163200000.0,1176076800000.0,1175731200000.0,1175644800000.0,1175558400000.0,1175472000000.0,1175212800000.0,1175126400000.0,1175040000000.0,1174953600000.0,1174867200000.0,1174608000000.0,1174521600000.0,1174435200000.0,1174348800000.0,1174262400000.0,1174003200000.0,1173916800000.0,1173830400000.0,1173744000000.0,1173657600000.0,1173398400000.0,1173312000000.0,1173225600000.0,1173139200000.0,1173052800000.0,1172793600000.0,1172707200000.0,1172620800000.0,1172534400000.0,1172448000000.0,1172188800000.0,1172102400000.0,1172016000000.0,1171929600000.0,1171584000000.0,1171497600000.0,1171411200000.0,1171324800000.0,1171238400000.0,1170979200000.0,1170892800000.0,1170806400000.0,1170720000000.0,1170633600000.0,1170374400000.0,1170288000000.0,1170201600000.0,1170115200000.0,1170028800000.0,1169769600000.0,1169683200000.0,1169596800000.0,1169510400000.0,1169424000000.0,1169164800000.0,1169078400000.0,1168992000000.0,1168905600000.0,1168560000000.0,1168473600000.0,1168387200000.0,1168300800000.0,1168214400000.0,1167955200000.0,1167868800000.0,1167782400000.0,1167350400000.0,1167264000000.0,1167177600000.0,1167091200000.0,1166745600000.0,1166659200000.0,1166572800000.0,1166486400000.0,1166400000000.0,1166140800000.0,1166054400000.0,1165968000000.0,1165881600000.0,1165795200000.0,1165536000000.0,1165449600000.0,1165363200000.0,1165276800000.0,1165190400000.0,1164931200000.0,1164844800000.0,1164758400000.0,1164672000000.0,1164585600000.0,1164326400000.0,1164153600000.0,1164067200000.0,1163980800000.0,1163721600000.0,1163635200000.0,1163548800000.0,1163462400000.0,1163376000000.0,1163116800000.0,1163030400000.0,1162944000000.0,1162857600000.0,1162771200000.0,1162512000000.0,1162425600000.0,1162339200000.0,1162252800000.0,1162166400000.0,1161907200000.0,1161820800000.0,1161734400000.0,1161648000000.0,1161561600000.0,1161302400000.0,1161216000000.0,1161129600000.0,1161043200000.0,1160956800000.0,1160697600000.0,1160611200000.0,1160524800000.0,1160438400000.0,1160352000000.0,1160092800000.0,1160006400000.0,1159920000000.0,1159833600000.0,1159747200000.0,1159488000000.0,1159401600000.0,1159315200000.0,1159228800000.0,1159142400000.0,1158883200000.0,1158796800000.0,1158710400000.0,1158624000000.0,1158537600000.0,1158278400000.0,1158192000000.0,1158105600000.0,1158019200000.0,1157932800000.0,1157673600000.0,1157587200000.0,1157500800000.0,1157414400000.0,1157068800000.0,1156982400000.0,1156896000000.0,1156809600000.0,1156723200000.0,1156464000000.0,1156377600000.0,1156291200000.0,1156204800000.0,1156118400000.0,1155859200000.0,1155772800000.0,1155686400000.0,1155600000000.0,1155513600000.0,1155254400000.0,1155168000000.0,1155081600000.0,1154995200000.0,1154908800000.0,1154649600000.0,1154563200000.0,1154476800000.0,1154390400000.0,1154304000000.0,1154044800000.0,1153958400000.0,1153872000000.0,1153785600000.0,1153699200000.0,1153440000000.0,1153353600000.0,1153267200000.0,1153180800000.0,1153094400000.0,1152835200000.0,1152748800000.0,1152662400000.0,1152576000000.0,1152489600000.0,1152230400000.0,1152144000000.0,1152057600000.0,1151884800000.0,1151625600000.0,1151539200000.0,1151452800000.0,1151366400000.0,1151280000000.0,1151020800000.0,1150934400000.0,1150848000000.0,1150761600000.0,1150675200000.0,1150416000000.0,1150329600000.0,1150243200000.0,1150156800000.0,1150070400000.0,1149811200000.0,1149724800000.0,1149638400000.0,1149552000000.0,1149465600000.0,1149206400000.0,1149120000000.0,1149033600000.0,1148947200000.0,1148601600000.0,1148515200000.0,1148428800000.0,1148342400000.0,1148256000000.0,1147996800000.0,1147910400000.0,1147824000000.0,1147737600000.0,1147651200000.0,1147392000000.0,1147305600000.0,1147219200000.0,1147132800000.0,1147046400000.0,1146787200000.0,1146700800000.0,1146614400000.0,1146528000000.0,1146441600000.0,1146182400000.0,1146096000000.0,1146009600000.0,1145923200000.0,1145836800000.0,1145577600000.0,1145491200000.0,1145404800000.0,1145318400000.0,1145232000000.0,1144886400000.0,1144800000000.0,1144713600000.0,1144627200000.0,1144368000000.0,1144281600000.0,1144195200000.0,1144108800000.0,1144022400000.0,1143763200000.0,1143676800000.0,1143590400000.0,1143504000000.0,1143417600000.0,1143158400000.0,1143072000000.0,1142985600000.0,1142899200000.0,1142812800000.0,1142553600000.0,1142467200000.0,1142380800000.0,1142294400000.0,1142208000000.0,1141948800000.0,1141862400000.0,1141776000000.0,1141689600000.0,1141603200000.0,1141344000000.0,1141257600000.0,1141171200000.0,1141084800000.0,1140998400000.0,1140739200000.0,1140652800000.0,1140566400000.0,1140480000000.0,1140134400000.0,1140048000000.0,1139961600000.0,1139875200000.0,1139788800000.0,1139529600000.0,1139443200000.0,1139356800000.0,1139270400000.0,1139184000000.0,1138924800000.0,1138838400000.0,1138752000000.0,1138665600000.0,1138579200000.0,1138320000000.0,1138233600000.0,1138147200000.0,1138060800000.0,1137974400000.0,1137715200000.0,1137628800000.0,1137542400000.0,1137456000000.0,1137110400000.0,1137024000000.0,1136937600000.0,1136851200000.0,1136764800000.0,1136505600000.0,1136419200000.0,1136332800000.0,1136246400000.0,1135900800000.0,1135814400000.0,1135728000000.0,1135641600000.0,1135296000000.0,1135209600000.0,1135123200000.0,1135036800000.0,1134950400000.0,1134691200000.0,1134604800000.0,1134518400000.0,1134432000000.0,1134345600000.0,1134086400000.0,1134000000000.0,1133913600000.0,1133827200000.0,1133740800000.0,1133481600000.0,1133395200000.0,1133308800000.0,1133222400000.0,1133136000000.0,1132876800000.0,1132704000000.0,1132617600000.0,1132531200000.0,1132272000000.0,1132185600000.0,1132099200000.0,1132012800000.0,1131926400000.0,1131667200000.0,1131580800000.0,1131494400000.0,1131408000000.0,1131321600000.0,1131062400000.0,1130976000000.0,1130889600000.0,1130803200000.0,1130716800000.0,1130457600000.0,1130371200000.0,1130284800000.0,1130198400000.0,1130112000000.0,1129852800000.0,1129766400000.0,1129680000000.0,1129593600000.0,1129507200000.0,1129248000000.0,1129161600000.0,1129075200000.0,1128988800000.0,1128902400000.0,1128643200000.0,1128556800000.0,1128470400000.0,1128384000000.0,1128297600000.0,1128038400000.0,1127952000000.0,1127865600000.0,1127779200000.0,1127692800000.0,1127433600000.0,1127347200000.0,1127260800000.0,1127174400000.0,1127088000000.0,1126828800000.0,1126742400000.0,1126656000000.0,1126569600000.0,1126483200000.0,1126224000000.0,1126137600000.0,1126051200000.0,1125964800000.0,1125619200000.0,1125532800000.0,1125446400000.0,1125360000000.0,1125273600000.0,1125014400000.0,1124928000000.0,1124841600000.0,1124755200000.0,1124668800000.0,1124409600000.0,1124323200000.0,1124236800000.0,1124150400000.0,1124064000000.0,1123804800000.0,1123718400000.0,1123632000000.0,1123545600000.0,1123459200000.0,1123200000000.0,1123113600000.0,1123027200000.0,1122940800000.0,1122854400000.0,1122595200000.0,1122508800000.0,1122422400000.0,1122336000000.0,1122249600000.0,1121990400000.0,1121904000000.0,1121817600000.0,1121731200000.0,1121644800000.0,1121385600000.0,1121299200000.0,1121212800000.0,1121126400000.0,1121040000000.0,1120780800000.0,1120694400000.0,1120608000000.0,1120521600000.0,1120176000000.0,1120089600000.0,1120003200000.0,1119916800000.0,1119830400000.0,1119571200000.0,1119484800000.0,1119398400000.0,1119312000000.0,1119225600000.0,1118966400000.0,1118880000000.0,1118793600000.0,1118707200000.0,1118620800000.0,1118361600000.0,1118275200000.0,1118188800000.0,1118102400000.0,1118016000000.0,1117756800000.0,1117670400000.0,1117584000000.0,1117497600000.0,1117152000000.0,1117065600000.0,1116979200000.0,1116892800000.0,1116806400000.0,1116547200000.0,1116460800000.0,1116374400000.0,1116288000000.0,1116201600000.0,1115942400000.0,1115856000000.0,1115769600000.0,1115683200000.0,1115596800000.0,1115337600000.0,1115251200000.0,1115164800000.0,1115078400000.0,1114992000000.0,1114732800000.0,1114646400000.0,1114560000000.0,1114473600000.0,1114387200000.0,1114128000000.0,1114041600000.0,1113955200000.0,1113868800000.0,1113782400000.0,1113523200000.0,1113436800000.0,1113350400000.0,1113264000000.0,1113177600000.0,1112918400000.0,1112832000000.0,1112745600000.0,1112659200000.0,1112572800000.0,1112313600000.0,1112227200000.0,1112140800000.0,1112054400000.0,1111968000000.0,1111622400000.0,1111536000000.0,1111449600000.0,1111363200000.0,1111104000000.0,1111017600000.0,1110931200000.0,1110844800000.0,1110758400000.0,1110499200000.0,1110412800000.0,1110326400000.0,1110240000000.0,1110153600000.0,1109894400000.0,1109808000000.0,1109721600000.0,1109635200000.0,1109548800000.0,1109289600000.0,1109203200000.0,1109116800000.0,1109030400000.0,1108684800000.0,1108598400000.0,1108512000000.0,1108425600000.0,1108339200000.0,1108080000000.0,1107993600000.0,1107907200000.0,1107820800000.0,1107734400000.0,1107475200000.0,1107388800000.0,1107302400000.0,1107216000000.0,1107129600000.0,1106870400000.0,1106784000000.0,1106697600000.0,1106611200000.0,1106524800000.0,1106265600000.0,1106179200000.0,1106092800000.0,1106006400000.0,1105660800000.0,1105574400000.0,1105488000000.0,1105401600000.0,1105315200000.0,1105056000000.0,1104969600000.0,1104883200000.0,1104796800000.0,1104710400000.0,1104451200000.0,1104364800000.0,1104278400000.0,1104192000000.0,1104105600000.0,1103760000000.0,1103673600000.0,1103587200000.0,1103500800000.0,1103241600000.0,1103155200000.0,1103068800000.0,1102982400000.0,1102896000000.0,1102636800000.0,1102550400000.0,1102464000000.0,1102377600000.0,1102291200000.0,1102032000000.0,1101945600000.0,1101859200000.0,1101772800000.0,1101686400000.0,1101427200000.0,1101254400000.0,1101168000000.0,1101081600000.0,1100822400000.0,1100736000000.0,1100649600000.0,1100563200000.0,1100476800000.0,1100217600000.0,1100131200000.0,1100044800000.0,1099958400000.0,1099872000000.0,1099612800000.0,1099526400000.0,1099440000000.0,1099353600000.0,1099267200000.0,1099008000000.0,1098921600000.0,1098835200000.0,1098748800000.0,1098662400000.0,1098403200000.0,1098316800000.0,1098230400000.0,1098144000000.0,1098057600000.0,1097798400000.0,1097712000000.0,1097625600000.0,1097539200000.0,1097452800000.0,1097193600000.0,1097107200000.0,1097020800000.0,1096934400000.0,1096848000000.0,1096588800000.0,1096502400000.0,1096416000000.0,1096329600000.0,1096243200000.0,1095984000000.0,1095897600000.0,1095811200000.0,1095724800000.0,1095638400000.0,1095379200000.0,1095292800000.0,1095206400000.0,1095120000000.0,1095033600000.0,1094774400000.0,1094688000000.0,1094601600000.0,1094515200000.0,1094169600000.0,1094083200000.0,1093996800000.0,1093910400000.0,1093824000000.0,1093564800000.0,1093478400000.0,1093392000000.0,1093305600000.0,1093219200000.0,1092960000000.0,1092873600000.0,1092787200000.0,1092700800000.0,1092614400000.0,1092355200000.0,1092268800000.0,1092182400000.0,1092096000000.0,1092009600000.0,1091750400000.0,1091664000000.0,1091577600000.0,1091491200000.0,1091404800000.0,1091145600000.0,1091059200000.0,1090972800000.0,1090886400000.0,1090800000000.0,1090540800000.0,1090454400000.0,1090368000000.0,1090281600000.0,1090195200000.0,1089936000000.0,1089849600000.0,1089763200000.0,1089676800000.0,1089590400000.0,1089331200000.0,1089244800000.0,1089158400000.0,1089072000000.0,1088726400000.0,1088640000000.0,1088553600000.0,1088467200000.0,1088380800000.0,1088121600000.0,1088035200000.0,1087948800000.0,1087862400000.0,1087776000000.0,1087516800000.0,1087430400000.0,1087344000000.0,1087257600000.0,1087171200000.0,1086825600000.0,1086739200000.0,1086652800000.0,1086566400000.0,1086307200000.0,1086220800000.0,1086134400000.0,1086048000000.0,1085702400000.0,1085616000000.0,1085529600000.0,1085443200000.0,1085356800000.0,1085097600000.0,1085011200000.0,1084924800000.0,1084838400000.0,1084752000000.0,1084492800000.0,1084406400000.0,1084320000000.0,1084233600000.0,1084147200000.0,1083888000000.0,1083801600000.0,1083715200000.0,1083628800000.0,1083542400000.0,1083283200000.0,1083196800000.0,1083110400000.0,1083024000000.0,1082937600000.0,1082678400000.0,1082592000000.0,1082505600000.0,1082419200000.0,1082332800000.0,1082073600000.0,1081987200000.0,1081900800000.0,1081814400000.0,1081728000000.0,1081382400000.0,1081296000000.0,1081209600000.0,1081123200000.0,1080864000000.0,1080777600000.0,1080691200000.0,1080604800000.0,1080518400000.0,1080259200000.0,1080172800000.0,1080086400000.0,1080000000000.0,1079913600000.0,1079654400000.0,1079568000000.0,1079481600000.0,1079395200000.0,1079308800000.0,1079049600000.0,1078963200000.0,1078876800000.0,1078790400000.0,1078704000000.0,1078444800000.0,1078358400000.0,1078272000000.0,1078185600000.0,1078099200000.0,1077840000000.0,1077753600000.0,1077667200000.0,1077580800000.0,1077494400000.0,1077235200000.0,1077148800000.0,1077062400000.0,1076976000000.0,1076630400000.0,1076544000000.0,1076457600000.0,1076371200000.0,1076284800000.0,1076025600000.0,1075939200000.0,1075852800000.0,1075766400000.0,1075680000000.0,1075420800000.0,1075334400000.0,1075248000000.0,1075161600000.0,1075075200000.0,1074816000000.0,1074729600000.0,1074643200000.0,1074556800000.0,1074211200000.0,1074124800000.0,1074038400000.0,1073952000000.0,1073865600000.0,1073606400000.0,1073520000000.0,1073433600000.0,1073347200000.0,1073260800000.0,1073001600000.0,1072828800000.0,1072742400000.0,1072656000000.0,1072396800000.0,1072224000000.0,1072137600000.0,1072051200000.0,1071792000000.0,1071705600000.0,1071619200000.0,1071532800000.0,1071446400000.0,1071187200000.0,1071100800000.0,1071014400000.0,1070928000000.0,1070841600000.0,1070582400000.0,1070496000000.0,1070409600000.0,1070323200000.0,1070236800000.0,1069977600000.0,1069804800000.0,1069718400000.0,1069632000000.0,1069372800000.0,1069286400000.0,1069200000000.0,1069113600000.0,1069027200000.0,1068768000000.0,1068681600000.0,1068595200000.0,1068508800000.0,1068422400000.0,1068163200000.0,1068076800000.0,1067990400000.0,1067904000000.0,1067817600000.0,1067558400000.0,1067472000000.0,1067385600000.0,1067299200000.0,1067212800000.0,1066953600000.0,1066867200000.0,1066780800000.0,1066694400000.0,1066608000000.0,1066348800000.0,1066262400000.0,1066176000000.0,1066089600000.0,1066003200000.0,1065744000000.0,1065657600000.0,1065571200000.0,1065484800000.0,1065398400000.0,1065139200000.0,1065052800000.0,1064966400000.0,1064880000000.0,1064793600000.0,1064534400000.0,1064448000000.0,1064361600000.0,1064275200000.0,1064188800000.0,1063929600000.0,1063843200000.0,1063756800000.0,1063670400000.0,1063584000000.0,1063324800000.0,1063238400000.0,1063152000000.0,1063065600000.0,1062979200000.0,1062720000000.0,1062633600000.0,1062547200000.0,1062460800000.0,1062115200000.0,1062028800000.0,1061942400000.0,1061856000000.0,1061769600000.0,1061510400000.0,1061424000000.0,1061337600000.0,1061251200000.0,1061164800000.0,1060905600000.0,1060819200000.0,1060732800000.0,1060646400000.0,1060560000000.0,1060300800000.0,1060214400000.0,1060128000000.0,1060041600000.0,1059955200000.0,1059696000000.0,1059609600000.0,1059523200000.0,1059436800000.0,1059350400000.0,1059091200000.0,1059004800000.0,1058918400000.0,1058832000000.0,1058745600000.0,1058486400000.0,1058400000000.0,1058313600000.0,1058227200000.0,1058140800000.0,1057881600000.0,1057795200000.0,1057708800000.0,1057622400000.0,1057536000000.0,1057190400000.0,1057104000000.0,1057017600000.0,1056931200000.0,1056672000000.0,1056585600000.0,1056499200000.0,1056412800000.0,1056326400000.0,1056067200000.0,1055980800000.0,1055894400000.0,1055808000000.0,1055721600000.0,1055462400000.0,1055376000000.0,1055289600000.0,1055203200000.0,1055116800000.0,1054857600000.0,1054771200000.0,1054684800000.0,1054598400000.0,1054512000000.0,1054252800000.0,1054166400000.0,1054080000000.0,1053993600000.0,1053648000000.0,1053561600000.0,1053475200000.0,1053388800000.0,1053302400000.0,1053043200000.0,1052956800000.0,1052870400000.0,1052784000000.0,1052697600000.0,1052438400000.0,1052352000000.0,1052265600000.0,1052179200000.0,1052092800000.0,1051833600000.0,1051747200000.0,1051660800000.0,1051574400000.0,1051488000000.0,1051228800000.0,1051142400000.0,1051056000000.0,1050969600000.0,1050883200000.0,1050537600000.0,1050451200000.0,1050364800000.0,1050278400000.0,1050019200000.0,1049932800000.0,1049846400000.0,1049760000000.0,1049673600000.0,1049414400000.0,1049328000000.0,1049241600000.0,1049155200000.0,1049068800000.0,1048809600000.0,1048723200000.0,1048636800000.0,1048550400000.0,1048464000000.0,1048204800000.0,1048118400000.0,1048032000000.0,1047945600000.0,1047859200000.0,1047600000000.0,1047513600000.0,1047427200000.0,1047340800000.0,1047254400000.0,1046995200000.0,1046908800000.0,1046822400000.0,1046736000000.0,1046649600000.0,1046390400000.0,1046304000000.0,1046217600000.0,1046131200000.0,1046044800000.0,1045785600000.0,1045699200000.0,1045612800000.0,1045526400000.0,1045180800000.0,1045094400000.0,1045008000000.0,1044921600000.0,1044835200000.0,1044576000000.0,1044489600000.0,1044403200000.0,1044316800000.0,1044230400000.0,1043971200000.0,1043884800000.0,1043798400000.0,1043712000000.0,1043625600000.0,1043366400000.0,1043280000000.0,1043193600000.0,1043107200000.0,1042761600000.0,1042675200000.0,1042588800000.0,1042502400000.0,1042416000000.0,1042156800000.0,1042070400000.0,1041984000000.0,1041897600000.0,1041811200000.0,1041552000000.0,1041465600000.0,1041292800000.0,1041206400000.0,1040947200000.0,1040860800000.0,1040688000000.0,1040601600000.0,1040342400000.0,1040256000000.0,1040169600000.0,1040083200000.0,1039996800000.0,1039737600000.0,1039651200000.0,1039564800000.0,1039478400000.0,1039392000000.0,1039132800000.0,1039046400000.0,1038960000000.0,1038873600000.0,1038787200000.0,1038528000000.0,1038355200000.0,1038268800000.0,1038182400000.0,1037923200000.0,1037836800000.0,1037750400000.0,1037664000000.0,1037577600000.0,1037318400000.0,1037232000000.0,1037145600000.0,1037059200000.0,1036972800000.0,1036713600000.0,1036627200000.0,1036540800000.0,1036454400000.0,1036368000000.0,1036108800000.0,1036022400000.0,1035936000000.0,1035849600000.0,1035763200000.0,1035504000000.0,1035417600000.0,1035331200000.0,1035244800000.0,1035158400000.0,1034899200000.0,1034812800000.0,1034726400000.0,1034640000000.0,1034553600000.0,1034294400000.0,1034208000000.0,1034121600000.0,1034035200000.0,1033948800000.0,1033689600000.0,1033603200000.0,1033516800000.0,1033430400000.0,1033344000000.0,1033084800000.0,1032998400000.0,1032912000000.0,1032825600000.0,1032739200000.0,1032480000000.0,1032393600000.0,1032307200000.0,1032220800000.0,1032134400000.0,1031875200000.0,1031788800000.0,1031702400000.0,1031616000000.0,1031529600000.0,1031270400000.0,1031184000000.0,1031097600000.0,1031011200000.0,1030665600000.0,1030579200000.0,1030492800000.0,1030406400000.0,1030320000000.0,1030060800000.0,1029974400000.0,1029888000000.0,1029801600000.0,1029715200000.0,1029456000000.0,1029369600000.0,1029283200000.0,1029196800000.0,1029110400000.0,1028851200000.0,1028764800000.0,1028678400000.0,1028592000000.0,1028505600000.0,1028246400000.0,1028160000000.0,1028073600000.0,1027987200000.0,1027900800000.0,1027641600000.0,1027555200000.0,1027468800000.0,1027382400000.0,1027296000000.0,1027036800000.0,1026950400000.0,1026864000000.0,1026777600000.0,1026691200000.0,1026432000000.0,1026345600000.0,1026259200000.0,1026172800000.0,1026086400000.0,1025827200000.0,1025654400000.0,1025568000000.0,1025481600000.0,1025222400000.0,1025136000000.0,1025049600000.0,1024963200000.0,1024876800000.0,1024617600000.0,1024531200000.0,1024444800000.0,1024358400000.0,1024272000000.0,1024012800000.0,1023926400000.0,1023840000000.0,1023753600000.0,1023667200000.0,1023408000000.0,1023321600000.0,1023235200000.0,1023148800000.0,1023062400000.0,1022803200000.0,1022716800000.0,1022630400000.0,1022544000000.0,1022198400000.0,1022112000000.0,1022025600000.0,1021939200000.0,1021852800000.0,1021593600000.0,1021507200000.0,1021420800000.0,1021334400000.0,1021248000000.0,1020988800000.0,1020902400000.0,1020816000000.0,1020729600000.0,1020643200000.0,1020384000000.0,1020297600000.0,1020211200000.0,1020124800000.0,1020038400000.0,1019779200000.0,1019692800000.0,1019606400000.0,1019520000000.0,1019433600000.0,1019174400000.0,1019088000000.0,1019001600000.0,1018915200000.0,1018828800000.0,1018569600000.0,1018483200000.0,1018396800000.0,1018310400000.0,1018224000000.0,1017964800000.0,1017878400000.0,1017792000000.0,1017705600000.0,1017619200000.0,1017273600000.0,1017187200000.0,1017100800000.0,1017014400000.0,1016755200000.0,1016668800000.0,1016582400000.0,1016496000000.0,1016409600000.0,1016150400000.0,1016064000000.0,1015977600000.0,1015891200000.0,1015804800000.0,1015545600000.0,1015459200000.0,1015372800000.0,1015286400000.0,1015200000000.0,1014940800000.0,1014854400000.0,1014768000000.0,1014681600000.0,1014595200000.0,1014336000000.0,1014249600000.0,1014163200000.0,1014076800000.0,1013731200000.0,1013644800000.0,1013558400000.0,1013472000000.0,1013385600000.0,1013126400000.0,1013040000000.0,1012953600000.0,1012867200000.0,1012780800000.0,1012521600000.0,1012435200000.0,1012348800000.0,1012262400000.0,1012176000000.0,1011916800000.0,1011830400000.0,1011744000000.0,1011657600000.0,1011312000000.0,1011225600000.0,1011139200000.0,1011052800000.0,1010966400000.0,1010707200000.0,1010620800000.0,1010534400000.0,1010448000000.0,1010361600000.0,1010102400000.0,1010016000000.0,1009929600000.0,1009756800000.0,1009497600000.0,1009411200000.0,1009324800000.0,1009152000000.0,1008892800000.0,1008806400000.0,1008720000000.0,1008633600000.0,1008547200000.0,1008288000000.0,1008201600000.0,1008115200000.0,1008028800000.0,1007942400000.0,1007683200000.0,1007596800000.0,1007510400000.0,1007424000000.0,1007337600000.0,1007078400000.0,1006992000000.0,1006905600000.0,1006819200000.0,1006732800000.0,1006473600000.0,1006300800000.0,1006214400000.0,1006128000000.0,1005868800000.0,1005782400000.0,1005696000000.0,1005609600000.0,1005523200000.0,1005264000000.0,1005177600000.0,1005091200000.0,1005004800000.0,1004918400000.0,1004659200000.0,1004572800000.0,1004486400000.0,1004400000000.0,1004313600000.0,1004054400000.0,1003968000000.0,1003881600000.0,1003795200000.0,1003708800000.0,1003449600000.0,1003363200000.0,1003276800000.0,1003190400000.0,1003104000000.0,1002844800000.0,1002758400000.0,1002672000000.0,1002585600000.0,1002499200000.0,1002240000000.0,1002153600000.0,1002067200000.0,1001980800000.0,1001894400000.0,1001635200000.0,1001548800000.0,1001462400000.0,1001376000000.0,1001289600000.0,1001030400000.0,1000944000000.0,1000857600000.0,1000771200000.0,1000684800000.0,1000080000000.0,999820800000.0,999734400000.0,999648000000.0,999561600000.0,999216000000.0,999129600000.0,999043200000.0,998956800000.0,998870400000.0,998611200000.0,998524800000.0,998438400000.0,998352000000.0,998265600000.0,998006400000.0,997920000000.0,997833600000.0,997747200000.0,997660800000.0,997401600000.0,997315200000.0,997228800000.0,997142400000.0,997056000000.0,996796800000.0,996710400000.0,996624000000.0,996537600000.0,996451200000.0,996192000000.0,996105600000.0,996019200000.0,995932800000.0,995846400000.0,995587200000.0,995500800000.0,995414400000.0,995328000000.0,995241600000.0,994982400000.0,994896000000.0,994809600000.0,994723200000.0,994636800000.0,994377600000.0,994291200000.0,994118400000.0,994032000000.0,993772800000.0,993686400000.0,993600000000.0,993513600000.0,993427200000.0,993168000000.0,993081600000.0,992995200000.0,992908800000.0,992822400000.0,992563200000.0,992476800000.0,992390400000.0,992304000000.0,992217600000.0,991958400000.0,991872000000.0,991785600000.0,991699200000.0,991612800000.0,991353600000.0,991267200000.0,991180800000.0,991094400000.0,990748800000.0,990662400000.0,990576000000.0,990489600000.0,990403200000.0,990144000000.0,990057600000.0,989971200000.0,989884800000.0,989798400000.0,989539200000.0,989452800000.0,989366400000.0,989280000000.0,989193600000.0,988934400000.0,988848000000.0,988761600000.0,988675200000.0,988588800000.0,988329600000.0,988243200000.0,988156800000.0,988070400000.0,987984000000.0,987724800000.0,987638400000.0,987552000000.0,987465600000.0,987379200000.0,987033600000.0,986947200000.0,986860800000.0,986774400000.0,986515200000.0,986428800000.0,986342400000.0,986256000000.0,986169600000.0,985910400000.0,985824000000.0,985737600000.0,985651200000.0,985564800000.0,985305600000.0,985219200000.0,985132800000.0,985046400000.0,984960000000.0,984700800000.0,984614400000.0,984528000000.0,984441600000.0,984355200000.0,984096000000.0,984009600000.0,983923200000.0,983836800000.0,983750400000.0,983491200000.0,983404800000.0,983318400000.0,983232000000.0,983145600000.0,982886400000.0,982800000000.0,982713600000.0,982627200000.0,982281600000.0,982195200000.0,982108800000.0,982022400000.0,981936000000.0,981676800000.0,981590400000.0,981504000000.0,981417600000.0,981331200000.0,981072000000.0,980985600000.0,980899200000.0,980812800000.0,980726400000.0,980467200000.0,980380800000.0,980294400000.0,980208000000.0,980121600000.0,979862400000.0,979776000000.0,979689600000.0,979603200000.0,979257600000.0,979171200000.0,979084800000.0,978998400000.0,978912000000.0,978652800000.0,978566400000.0,978480000000.0,978393600000.0,978048000000.0,977961600000.0,977875200000.0,977788800000.0,977443200000.0,977356800000.0,977270400000.0,977184000000.0,977097600000.0,976838400000.0,976752000000.0,976665600000.0,976579200000.0,976492800000.0,976233600000.0,976147200000.0,976060800000.0,975974400000.0,975888000000.0,975628800000.0,975542400000.0,975456000000.0,975369600000.0,975283200000.0,975024000000.0,974851200000.0,974764800000.0,974678400000.0,974419200000.0,974332800000.0,974246400000.0,974160000000.0,974073600000.0,973814400000.0,973728000000.0,973641600000.0,973555200000.0,973468800000.0,973209600000.0,973123200000.0,973036800000.0,972950400000.0,972864000000.0,972604800000.0,972518400000.0,972432000000.0,972345600000.0,972259200000.0,972000000000.0,971913600000.0,971827200000.0,971740800000.0,971654400000.0,971395200000.0,971308800000.0,971222400000.0,971136000000.0,971049600000.0,970790400000.0,970704000000.0,970617600000.0,970531200000.0,970444800000.0,970185600000.0,970099200000.0,970012800000.0,969926400000.0,969840000000.0,969580800000.0,969494400000.0,969408000000.0,969321600000.0,969235200000.0,968976000000.0,968889600000.0,968803200000.0,968716800000.0,968630400000.0,968371200000.0,968284800000.0,968198400000.0,968112000000.0,967766400000.0,967680000000.0,967593600000.0,967507200000.0,967420800000.0,967161600000.0,967075200000.0,966988800000.0,966902400000.0,966816000000.0,966556800000.0,966470400000.0,966384000000.0,966297600000.0,966211200000.0,965952000000.0,965865600000.0,965779200000.0,965692800000.0,965606400000.0,965347200000.0,965260800000.0,965174400000.0,965088000000.0,965001600000.0,964742400000.0,964656000000.0,964569600000.0,964483200000.0,964396800000.0,964137600000.0,964051200000.0,963964800000.0,963878400000.0,963792000000.0,963532800000.0,963446400000.0,963360000000.0,963273600000.0,963187200000.0,962928000000.0,962841600000.0,962755200000.0,962582400000.0,962323200000.0,962236800000.0,962150400000.0,962064000000.0,961977600000.0,961718400000.0,961632000000.0,961545600000.0,961459200000.0,961372800000.0,961113600000.0,961027200000.0,960940800000.0,960854400000.0,960768000000.0,960508800000.0,960422400000.0,960336000000.0,960249600000.0,960163200000.0,959904000000.0,959817600000.0,959731200000.0,959644800000.0,959299200000.0,959212800000.0,959126400000.0,959040000000.0,958953600000.0,958694400000.0,958608000000.0,958521600000.0,958435200000.0,958348800000.0,958089600000.0,958003200000.0,957916800000.0,957830400000.0,957744000000.0,957484800000.0,957398400000.0,957312000000.0,957225600000.0,957139200000.0,956880000000.0,956793600000.0,956707200000.0,956620800000.0,956534400000.0,956188800000.0,956102400000.0,956016000000.0,955929600000.0,955670400000.0,955584000000.0,955497600000.0,955411200000.0,955324800000.0,955065600000.0,954979200000.0,954892800000.0,954806400000.0,954720000000.0,954460800000.0,954374400000.0,954288000000.0,954201600000.0,954115200000.0,953856000000.0,953769600000.0,953683200000.0,953596800000.0,953510400000.0,953251200000.0,953164800000.0,953078400000.0,952992000000.0,952905600000.0,952646400000.0,952560000000.0,952473600000.0,952387200000.0,952300800000.0,952041600000.0,951955200000.0,951868800000.0,951782400000.0,951696000000.0,951436800000.0,951350400000.0,951264000000.0,951177600000.0,950832000000.0,950745600000.0,950659200000.0,950572800000.0,950486400000.0,950227200000.0,950140800000.0,950054400000.0,949968000000.0,949881600000.0,949622400000.0,949536000000.0,949449600000.0,949363200000.0,949276800000.0,949017600000.0,948931200000.0,948844800000.0,948758400000.0,948672000000.0,948412800000.0,948326400000.0,948240000000.0,948153600000.0,947808000000.0,947721600000.0,947635200000.0,947548800000.0,947462400000.0,947203200000.0,947116800000.0,947030400000.0,946944000000.0,946857600000.0],"y":[210.73000299999998,211.63999700000002,209.100006,211.60999700000002,209.040005,202.100006,200.360006,198.229998,195.43,191.859999,195.03000500000002,194.169998,196.979996,194.669996,196.429996,197.800001,189.87000700000002,188.949999,193.320005,196.479998,196.230005,196.96999499999998,199.909996,200.589998,204.190001,204.440006,205.879999,199.919996,200.509996,205.960001,206.999998,206.63000300000002,204.450006,201.990004,203.250006,202.98,201.460005,194.340002,194.02999499999999,190.810001,188.749994,189.309994,188.500002,196.349995,192.399998,197.370005,202.480001,203.93999499999998,205.199997,204.920004,198.759996,189.860006,188.050005,190.55999599999998,191.289999,190.019997,190.810001,190.46999399999999,189.270006,190.250002,190.009996,186.019999,184.9,180.860001,185.349997,185.379997,186.150002,182.369995,183.820002,185.5,184.480003,184.020006,185.020002,184.550005,181.86999699999998,175.16000400000001,173.719997,172.160002,172.559998,171.140005,172.930006,170.309999,166.549994,165.180002,165.300005,168.210005,170.049994,169.450006,167.41,169.400005,169.059998,169.220001,166.330002,164.600002,164.000002,159.589994,166.779999,168.419996,165.31000500000002,162.830002,164.72000500000001,165.509996,163.91,165.110001,165.549997,166.430004,163.390001,162.790001,160.03000500000002,160.000004,160.100006,159.990004,157.819994,156.739996,151.509996,152.910002,151.750002,147.519999,146.879997,142.269999,142.34,138.520006,136.359997,137.220003,135.400002,138.609995,140.02,142.829998,142.430002,141.97000500000001,142.440002,139.859997,136.21999399999999,134.009996,137.37000700000002,139.480001,135.879999,135.580006,136.349997,136.090004,136.969997,139.949999,140.250006,142.71999499999998,143.849995,144.67,143.740005,140.949995,139.490002,139.349998,135.809998,135.069994,133.050001,130.780003,122.5,124.179998,125.869997,127.450006,126.650002,122.41999799999999,122.949997,119.489998,124.420004,129.570002,129.190006,129.060003,132.500002,132.709993,132.070005,127.240002,125.829996,125.139994,123.90000500000001,124.729998,123.90000500000001,125.4,121.51000400000001,121.759996,120.499994,123.41999399999999,121.45000300000001,117.639996,118.309998,120.220001,119.57,116.32000500000001,115.000002,118.450001,115.989998,112.710003,108.689998,105.120003,104.490002,106.850002,109.869998,106.490001,106.500001,107.660001,101.590002,101.620003,101.52,99.659998,95.420001,95.929999,96.350002,92.679998,88.629999,83.11,85.300003,88.839997,91.169997,88.37,87.93999699999999,89.310001,89.189999,91.159997,90.250003,86.950001,91.199998,90.63999799999999,94.369997,94.530001,99.16,99.270002,96.82,97.830003,102.510003,99.719999,96.459998,93.549998,92.97999899999999,91.509998,90.13,92.999999,94.2,90.73,89.640002,88.36,88.36,82.83,78.200001,82.33000200000001,83.379999,85.32999699999999,87.709998,88.66,90.57999699999999,92.699999,91.01,93.02,94.58000200000001,90.750001,85.349998,86.289999,86.61,85.810001,85.039997,86.38000100000001,85.74,89.999997,89.429997,89.159998,95.430001,94.749999,98.27,94.999998,98.209998,100.06,99.719999,94.000002,91.410003,95.899999,92.47,88.929999,92.66999799999999,94.999998,90.800002,92.949998,82.580001,80.49,86.289999,89.910002,88.140001,90.240003,96.439998,90.12,94.77,95.879998,98.239999,99.099998,103.300001,110.989997,106.959998,107.589999,111.039998,104.550003,99.909997,92.089998,96.380003,98.22999899999999,96.870001,91.489998,98.43999699999999,97.4,101.890002,97.949999,104.079999,110.26,96.799999,88.740002,89.789999,89.159998,98.14000300000001,97.069999,100.100001,109.120001,113.659998,105.259999,128.23999799999999,131.930002,128.709995,126.840006,131.049995,140.90999399999998,134.089998,127.83000200000001,139.879997,140.359995,148.94000400000002,152.649996,151.609999,151.68,157.919996,160.179995,161.22000500000001,166.960003,166.189999,169.52999499999999,173.73999799999999,174.670006,173.639996,172.549997,176.790001,174.289997,175.84000600000002,173.53000600000001,175.389996,175.740004,179.320005,179.300005,176.73,173.559994,169.549995,163.570005,164.190006,160.640005,153.229996,156.65999399999998,158.950006,159.880001,157.080004,154.399996,162.119999,159.02999499999999,166.26,162.019997,166.290001,165.150002,171.809994,172.810003,169.639997,173.880001,172.579998,176.629997,174.249996,179.549997,175.16000400000001,170.119995,168.180004,174.680006,167.440001,170.089994,168.260006,177.390001,173.25,173.159998,175.270006,180.900002,178.750006,181.43,176.840002,172.37000700000002,173.26,180.809999,185.640003,181.610004,185.640003,189.429996,185.190006,185.36999699999998,186.1,188.749994,186.690001,187.009995,186.429995,181.169994,177.049994,178.190006,185.899996,183.599997,187.619995,189.730003,186.260004,189.959995,188.15999399999998,183.450006,185.060003,182.59,186.66,184.729996,180.940002,179.999994,173.950003,175.050001,172.240004,169.73,168.93999499999998,162.890003,160.199995,168.16000400000001,161.040001,154.48999799999999,153.700006,148.380005,147.78000500000002,147.140003,154.54999899999999,151.43999499999998,152.84,155.890003,153.080006,151.609999,147.48999799999999,149.53000500000002,143.5,143.01000200000001,140.250006,145.05999599999998,140.979996,139.530003,133.270006,129.670004,132.819996,126.730003,126.610001,127.940004,126.030001,127.350004,119.690002,122.249994,120.930004,124.49000500000001,124.61999499999999,121.729996,125.020004,129.909996,122.959997,119.150003,119.740004,119.459997,121.54000500000001,123.820004,122.180006,124.629995,127.459993,129.399998,124.860001,129.449999,125.480001,121.239998,122.000002,129.359997,131.649996,133.750004,135.360001,132.179995,131.540007,130.009998,130.009998,135.600006,139.070005,155.639997,161.359995,160.889997,159.639996,169.039997,178.78000600000001,172.690001,178.020002,179.399994,171.249994,177.639994,180.049995,194.930002,194.84,198.079994,199.829994,198.570005,198.95000100000001,198.799997,193.910006,187.209999,183.119999,182.979996,184.400002,190.390005,191.829998,190.860003,188.540003,194.209999,194.300001,189.949995,185.5,179.810003,178.859995,182.22000500000001,184.289999,180.219999,174.80999599999998,172.539997,171.540001,168.459997,168.850006,163.95000100000001,166.390003,164.299995,166.109997,169.960005,153.759995,165.37000700000002,175.469997,186.300005,191.789997,186.180002,187.870001,187.44000400000002,189.949995,186.999994,185.090004,184.699995,182.78000500000002,185.929996,186.160002,174.359999,170.420002,173.500006,172.750002,169.579996,166.980003,167.249996,162.230001,166.789999,167.859997,167.909998,161.449997,156.23999799999999,157.919996,158.449995,156.34,153.470001,154.499998,152.769999,153.179995,148.280003,144.150002,140.309994,140.770004,140.919994,138.41000400000001,138.809999,137.200003,136.849995,135.490004,136.710005,131.769999,135.010006,136.760006,144.160002,138.480005,136.249994,134.079998,126.82000500000001,132.249996,135.29999899999999,131.069996,132.51000200000001,127.569996,122.219994,122.06000300000001,117.049995,119.89999399999999,124.029995,127.790001,125.000004,126.389996,134.009996,135.03000600000001,135.249998,131.85,136.49,135.000006,131.759998,141.430006,143.849995,146.000004,137.260004,134.890003,143.700005,143.750006,140.0,138.11999699999998,138.910002,138.099997,137.730001,134.069998,132.389999,132.349998,130.330006,132.299997,132.749994,127.17,121.259998,122.040003,120.559996,121.889999,119.650002,122.339996,122.999998,123.90000500000001,121.550005,123.66,125.090006,120.499994,118.749994,117.500006,120.38000500000001,120.190001,124.49000500000001,124.069996,123.639999,122.670004,121.33,118.4,121.18999699999999,118.769995,114.35,113.619997,110.68999699999999,112.889994,113.53999499999999,111.98,110.02000100000001,109.440001,107.34,107.519998,109.36,108.739999,107.34,106.880003,105.060001,103.920002,100.809998,100.400002,100.390001,99.47,99.800001,99.919997,98.839999,95.349999,93.239998,93.509997,90.969999,90.270003,90.4,90.349998,91.430003,90.240003,92.190001,92.590003,94.250001,93.650001,94.679997,94.27000100000001,94.5,93.650001,92.909997,93.750003,93.239998,95.460002,95.849998,93.519998,93.960001,93.86999899999999,91.479998,91.130003,89.590001,89.570001,89.999997,88.400001,89.870001,87.96999699999999,87.999998,87.719998,88.190002,86.32,85.409999,87.06000300000001,84.610001,83.929998,88.510003,89.070003,89.509999,89.199999,85.899997,84.829999,85.210001,85.300003,84.70000300000001,84.88,83.270003,86.180003,86.150002,84.149997,83.939999,84.749997,84.739997,85.73,85.550002,85.939998,85.379998,86.249998,86.700002,85.699999,86.789997,88.500003,89.070003,94.949997,97.099999,94.620003,95.800003,96.999997,92.570003,85.47,85.04999699999999,85.659998,83.800002,84.839999,80.870002,81.520003,81.510003,82.199999,82.900002,84.759997,86.309999,85.47,87.719998,88.54999699999999,89.050002,86.140002,88.750002,88.259997,87.040003,89.83,91.27,91.120003,91.320001,91.660002,91.799998,91.809999,89.54,91.63000100000001,90.309998,88.599998,86.470003,85.850002,85.60999699999999,84.050001,85.000003,84.350001,83.12,83.339998,82.449998,80.51,79.710002,78.290003,78.97999899999999,79.160003,81.08,80.41999799999999,80.409998,82.189999,81.68,81.049999,81.460002,79.950001,78.989999,74.529997,74.289998,75.399997,75.02000100000001,75.26,73.23,73.81,74.629999,74.220003,74.82999699999999,75.380003,74.08,74.859998,76.98,77.01,76.41,77.610001,75.749998,73.000002,74.65,75.26,73.77,73.890002,74.1,74.170002,74.20000300000001,72.63,72.499997,72.519998,72.79999699999999,70.030001,71.48,68.380003,67.849998,66.959997,66.48,66.979998,68.749998,67.81000300000001,67.309999,67.61999899999999,66.560001,67.909999,67.589998,67.98,66.449999,63.940001,63.650002,64.069998,63.59,64.780001,67.210003,68.300001,69.589997,68.159998,67.180002,67.96,65.589999,63.400002,63.87,61.930002,61.419996999999995,60.720001,60.500003,54.1,52.899999,52.37,50.670002000000004,52.250001,52.960001,55.649999,55.0,55.4,55.770001,57.000003,57.949998,57.270002000000005,58.970001,56.02,57.429999,58.990002000000004,58.829997999999996,59.580002,57.860003000000006,57.47,57.200001,57.560002000000004,59.379996999999996,57.609997,58.33,57.000003,59.240001,60.760002,58.559999,59.719998,59.999998,61.660003,62.170001,59.77,61.219999,63.549999,64.32999699999999,63.340001,63.149997,63.380002000000005,64.510001,63.179997,65.259998,64.97999899999999,67.790003,67.700001,68.149998,70.6,71.029997,71.89000300000001,71.89000300000001,71.129999,71.139999,71.619997,69.599998,70.390002,69.359999,68.149998,66.169999,65.750003,67.039999,67.629999,65.650001,66.22,64.810001,66.469999,66.709998,67.990001,68.67000300000001,69.790002,71.240002,67.210003,61.169998,62.649999,62.72,62.750001,62.329997999999996,58.710002,59.51,59.959996999999994,60.160002,61.670003,61.809999,63.990003,64.659998,64.31000300000001,66.23,67.319999,65.680001,63.189997999999996,63.930001000000004,65.660001,66.310002,65.479997,67.720001,69.609998,69.099999,68.489999,70.990003,71.46,71.75,71.319997,69.079999,70.29,70.57,69.22000200000001,67.639999,64.709999,67.309999,64.949998,68.809999,67.599998,67.299998,71.850002,72.100001,75.419997,75.509999,75.000001,72.03,72.33,74.20000300000001,76.039998,77.670002,76.089999,79.04,82.489999,84.710003,85.590003,84.29,83.899998,80.86000200000001,76.049998,76.29999699999999,74.38,74.97,74.750002,71.89000300000001,71.45,73.570002,74.229997,73.350003,74.019999,73.5,72.11000200000001,71.379998,71.109999,72.180003,72.009999,74.98,74.909999,74.329999,74.08,73.949997,74.049999,71.820002,72.63,71.600003,67.819997,68.100003,69.659999,69.339998,67.110001,66.52,64.959998,64.560002,64.52000100000001,64.949998,62.279996999999995,61.449998,61.54,61.179998,60.110001000000004,59.900002,60.229997,61.149998,61.85,59.949996999999996,57.500001,57.590003,54.469998,55.41,57.029996999999995,56.100002,56.789998,55.659999,56.140003,54.939999,52.21,53.440001,54.000001,53.739998,49.249999,51.589999,50.370001,51.299999,51.699998,52.78,53.749999,54.440001,53.609999,52.34,51.080001,53.440001,53.840001,53.199999,51.9,52.110001000000004,53.189999,52.64,51.210001,49.87,49.610001000000004,50.820002,51.400002,51.309999,49.780001,48.679999,48.799999,46.22,46.260001,46.889998,46.570001,45.840001,45.739999,46.059999,45.77,45.739999,45.869997999999995,45.830001,46.300002,47.150001,46.25,47.68,46.1,43.999999,43.380002000000005,43.820002,42.650002,42.989999,42.71,43.220001,43.190001,42.75,42.650002,43.800001,43.989999,43.630001,43.810001,43.999999,43.289999,43.630001,43.190001,41.489998,41.55,40.750001,38.35,38.240001,38.100001,38.250001,37.63,37.390001,37.980001,36.500001,36.810001,36.370001,37.309999,37.100001,37.76,38.889998999999996,38.550001,37.859999,37.61,38.309999,37.980001,37.129999,36.0,35.900001,35.809999,37.650001,36.920001,36.539999,37.92,38.240001,40.039999,40.300001,39.759999,40.56,40.740001,39.779999,39.700001,39.759999,37.550002,37.550002,35.839999,35.360002,35.549999,34.770001,34.13,35.610001000000004,36.419999,36.969998,37.240001,36.679998,37.149999,36.210001,36.429999,36.060001,35.539999,35.949998,36.190001,36.979999,35.500001,37.18,35.510002,37.090001,35.620001,35.350001,37.260002,41.040001000000004,42.659998,41.920002000000004,43.74,43.559999,42.330001,41.890001,41.089999,40.890001,41.669999,42.800002,41.750001,42.529999,42.500001,42.549999,42.829999,43.699999,42.959998999999996,42.249999,41.180001000000004,40.96,40.320002,40.27,39.83,39.349999,40.53,42.75,42.809999,41.789999,44.119997999999995,44.5,44.859999,88.990001,88.929999,88.229997,85.290003,86.809998,87.81,90.13,88.410001,84.63000100000001,81.210003,78.359998,78.74,80.900002,78.939998,78.840002,77.809999,79.63,77.529999,76.899998,73.979998,72.64,72.249998,72.05,70.759997,70.489998,70.459997,69.879997,70.650002,70.199998,69.800002,65.460003,64.560002,68.960003,69.250003,64.550002,64.500001,63.940001,63.29,64.399999,64.800001,64.44,64.18,63.159997,64.010003,63.749997,63.690002,62.72,64.989999,66.600002,65.259998,65.289999,64.909997,65.150002,63.990003,63.28,62.889996999999994,65.779997,62.679999,65.209997,67.790003,67.049999,68.439998,64.550002,64.04999699999999,61.27,61.350002,55.170001,55.389998999999996,54.900002,54.939999,55.239999,55.499999,55.300001,54.750001,54.049999,54.38,54.720001,54.450001,55.310001,53.5,52.449999,52.400001,52.19,50.3,47.97,47.55,47.41,47.939999,47.469998,47.420001,47.750001,45.5,44.980001,39.749999,38.289999,38.589999,39.059999,39.619999,40.639998999999996,39.37,38.79,38.670001,38.749999,38.680001000000004,38.039999,37.530001,37.289999,37.269999,36.920001,38.009999,37.709998999999996,37.139998999999996,36.350001,35.200001,35.490001,35.59,35.87,35.699999,36.350001,35.760001,35.229999,35.659998,35.86,34.489998,34.12,34.349998,34.659999,33.049999,31.95,31.08,30.800001,30.709999,31.739998999999997,30.869999,30.78,30.840002000000002,30.370001000000002,31.009999,31.52,30.299999,29.780001000000002,31.390001,31.79,31.289998999999998,31.579998,32.339999,32.639998999999996,32.270001,32.430001000000004,31.260001000000003,30.699997999999997,31.680001,31.619999,32.199999,31.970001,32.199999,32.929999,29.579999,29.220001,29.139999,30.03,30.139999,30.390001,30.950001,31.08,32.300002,32.54,32.5,32.489999,33.7,33.179998,33.7,33.000001,32.329999,32.909999,32.81,32.739998,30.690001000000002,30.119998,30.739998999999997,30.2,30.35,29.810001,28.780001000000002,28.399998999999998,28.920001,28.060001,28.060001,28.170001,28.510002000000004,28.409999,27.34,27.11,26.710001000000002,26.47,27.06,26.640001,27.06,27.19,27.300001,27.14,26.280001000000002,26.67,26.579999,26.650001,26.140001,26.069999,25.779999,26.77,26.45,26.940001000000002,27.13,27.7,27.78,27.73,27.73,28.350001000000002,29.18,29.3,26.640001,26.930001,28.040001,27.529999,27.309998999999998,27.829999,28.320001,27.5,27.11,27.04,27.92,27.91,27.04,26.869999,25.5,25.29,25.859999,25.859999,25.67,26.19,25.82,26.45,27.56,27.150001,27.679999,27.099999,25.999999,26.74,25.16,23.92,23.809998999999998,24.020001,23.92,23.04,22.81,22.359999,22.190001000000002,22.4,22.47,23.26,23.159999,23.000001,23.730001,23.800001,22.98,22.67,22.710001000000002,22.420001,21.79,22.26,22.32,22.560001,22.68,22.52,23.070001,23.009999,22.560001,22.18,22.61,22.73,22.719998999999998,22.850001000000002,24.2,24.12,23.730001,23.000001,23.360001,22.59,22.09,22.17,21.28,21.37,21.28,21.15,20.78,20.41,19.809998999999998,19.85,19.7,20.04,19.879998999999998,20.12,20.169999,20.890001,21.21,20.380001,20.450001,21.049999,20.85,21.15,21.030001000000002,21.540001,21.71,20.91,20.72,20.679999,21.15,20.28,20.380001,20.42,20.41,21.13,21.460001000000002,22.420001,22.33,21.540001,21.900001,22.499999,23.12,23.03,22.91,23.150001,22.89,23.089999,23.69,23.720001,22.6,22.6,22.99,22.76,23.18,23.220001,22.75,23.25,24.820001,24.549999,24.35,23.68,23.449999,23.06,23.220001,22.289998999999998,21.690001000000002,20.57,20.79,20.72,21.3,20.69,20.43,21.320001,22.429999,22.08,22.579999,22.88,22.120001000000002,22.359999,22.209999,23.1,22.560001,22.18,22.37,22.74,22.499999,22.83,22.95,22.850001000000002,22.61,22.190001000000002,21.479999,21.049999,20.86,20.880001,21.680001,21.01,20.319999,20.34,19.710001000000002,19.97,20.18,19.7,19.659999,19.640001,19.930001,19.63,20.380001,21.21,20.73,21.08,20.28,20.72,20.99,21.540001,20.51,20.79,20.8,20.609999,20.86,20.899998999999998,19.869999,19.61,19.9,19.85,19.579999,19.89,20.4,19.869999,19.130001,19.27,19.09,19.060001,18.73,19.289998999999998,19.09,18.779999,19.060001,19.200001,19.140001,19.12,18.190001000000002,18.269999,17.42,17.77,17.450001,17.179999,16.79,17.15,17.64,17.600001000000002,17.310001,17.450001,17.95,18.1,18.279999,18.88,18.32,18.24,17.85,17.79,18.1,18.8,18.73,18.550001,18.67,18.559998999999998,18.3,18.0,17.65,17.5,16.089999,14.45,14.36,14.22,14.06,13.86,13.35,13.44,13.58,13.51,13.14,13.12,13.24,13.39,13.58,13.2,14.37,14.189998999999998,14.45,14.49,14.409999,14.460001,14.6,14.16,14.14,14.57,14.49,14.409999,14.549999,14.37,15.0,14.910001000000001,14.95,15.0,15.01,14.779998999999998,14.72,14.22,14.23,14.37,14.53,14.559999,14.619998999999998,14.559999,14.65,15.01,14.86,14.5,15.02,14.74,15.0,14.769998999999999,14.849998999999999,15.270001,14.67,14.540001,14.390001000000002,14.35,14.35,14.15,14.43,14.45,14.6,14.66,14.36,14.320001000000001,14.93,14.58,14.13,13.8,14.170001000000001,13.88,14.02,14.100001,14.619998999999998,14.43,14.610001,14.629999,14.72,14.680001,14.549999,14.849998999999999,14.900001000000001,14.900001000000001,14.8,14.329998999999999,14.07,14.06,14.400001000000001,14.36,14.49,14.14,14.2,14.57,15.08,14.849998999999999,14.79,15.190001,15.490001000000001,15.279998999999998,14.75,14.95,14.629999,14.970001000000002,15.16,15.18,15.499998999999999,15.719999,15.410001000000001,15.97,16.009999,16.35,15.53,15.270001,15.649999,15.95,16.299999,15.59,15.640001000000002,15.16,15.84,16.000001,17.22,16.9,16.889999,16.360001,16.070001,15.98,15.44,15.61,15.420001000000001,14.690001,14.88,14.699998999999998,14.559999,14.339998999999999,14.109998999999998,14.559999,15.16,14.769998999999999,14.51,14.109998999999998,13.59,13.68,13.77,14.030001,14.3,14.170001000000001,14.51,14.5,14.72,14.699998999999998,14.93,14.64,14.849998999999999,14.87,14.58,15.02,14.8,14.5,14.170001000000001,14.14,14.29,14.329998999999999,14.37,14.38,14.180001,14.479999,14.049999,14.75,14.699998999999998,14.699998999999998,14.849998999999999,15.53,15.73,15.97,16.12,15.91,15.98,15.81,15.61,15.17,14.59,14.989999,15.0,15.3,15.03,14.74,13.99,14.45,14.8,15.26,15.429998999999999,15.02,14.339998999999999,14.36,15.200001,14.470001000000002,14.919998999999999,14.96,14.989999,15.630001000000002,17.86,18.23,17.51,18.3,17.319999,17.530001000000002,18.01,18.74,17.549999,16.940001000000002,17.06,17.72,17.06,16.55,17.14,17.27,16.85,17.109999,17.12,20.150001,20.539998999999998,20.099999,19.54,20.089999,20.459999,21.479999,21.400001,22.16,22.719998999999998,22.780001000000002,22.91,23.299999,24.2,23.98,23.98,24.15,25.180001,24.319999,23.46,24.74,25.01,25.21,25.279999,25.61,23.940001000000002,23.32,24.19,24.37,22.47,22.649998999999998,23.510001000000003,23.69,23.98,24.27,23.959999,23.009999,24.12,23.77,24.249999,24.530001000000002,24.979999,25.410001,26.11,25.74,25.0,25.059998999999998,24.86,24.66,24.099999,24.56,24.74,24.900001,23.75,24.07,24.460001000000002,23.669999,23.47,23.46,23.35,24.090001,24.27,24.92,24.85,24.74,24.95,24.43,24.49,24.72,25.059998999999998,24.66,24.380001,24.07,23.529999,24.29,23.449999,21.699999,21.96,23.669999,23.809998999999998,22.74,21.5,23.13,22.62,23.9,24.600001000000002,25.01,24.71,24.979999,24.029999,24.3,24.670001,25.45,25.349999,24.41,24.72,24.090001,23.070001,23.27,23.25,23.210001000000002,23.02,21.82,22.17,22.48,20.78,21.699999,21.15,21.049999,21.23,21.65,22.61,22.9,23.69,23.580001,23.299999,21.900001,22.429999,22.069999,21.49,21.36,21.0,20.670001,21.619999,21.01,20.62,20.389999,21.0,21.49,21.779999,22.54,22.54,22.780001000000002,23.76,22.4,21.049999,21.3,20.42,20.529999,21.0,21.37,19.84,19.68,19.53,20.0,18.97,19.45,19.61,19.369999,18.75,18.709999,18.709999,19.589999,19.570001,19.069999,18.569999,18.59,17.56,17.600001000000002,17.63,18.67,19.19,18.95,18.14,19.02,18.3,18.0,16.99,18.01,17.99,18.01,17.74,16.819999,16.000001,16.2,16.140001,15.88,14.980001000000001,15.050001000000002,15.54,15.51,15.51,15.15,15.54,16.449999,15.73,15.68,17.020001,16.28,16.99,17.37,17.28,17.72,18.550001,18.25,18.550001,17.829999,17.829999,18.400001,18.920001,18.569999,17.81,18.21,17.92,18.119999,18.07,18.65,18.44,18.73,19.09,19.02,19.05,18.9,19.25,19.130001,19.500001,19.82,19.060001,18.789998999999998,18.929999,18.96,18.59,18.470001,19.09,19.54,19.98,19.96,20.79,25.1,23.959999,24.85,24.36,22.54,21.14,22.700001,22.03,23.19,23.84,23.9,23.25,23.54,23.34,23.75,23.99,22.26,22.490001,21.67,20.19,20.33,20.440001000000002,19.879998999999998,20.47,20.309998999999998,20.04,21.320001,21.66,20.73,20.94,20.660001,20.890001,19.949999,19.78,21.470001,22.76,23.2,23.229999,23.5,23.56,23.529999,23.55,24.099999,23.18,23.290001,22.850001000000002,23.000001,23.98,24.57,24.960001000000002,25.75,24.960001000000002,26.589999,25.929999,25.489998999999997,26.200001,24.689999,24.72,24.029999,24.249999,25.040001,25.72,22.789998999999998,20.4,21.44,22.420001,21.8,22.04,20.539998999999998,20.590001,20.87,19.500001,20.239998999999997,21.59,22.069999,22.53,22.17,22.869999,21.779999,23.000001,21.624999,20.125,19.6875,20.5625,19.625,19.6875,20.4375,19.5625,18.625001,20.25,20.812501,21.250001,21.5,20.375001,19.25,18.75,18.25,19.375,19.500001,18.8125,18.8125,18.875,18.3125,18.999999,20.0625,19.500001,19.125,19.6875,19.125,20.749999,20.749999,21.125,20.1875,20.625,21.125,21.624999,21.75,21.687501,19.5625,19.937501,20.5,20.5,19.25,19.500001,18.6875,16.812499,17.125,17.1875,18.0,16.5625,17.1875,16.5625,16.374999,17.0625,16.374999,14.875,14.875,14.8125,14.8125,14.687501000000001,15.0,14.0625,14.375,14.0,14.250001000000001,14.0625,14.4375,15.0,15.375,15.1875,15.062498999999999,14.3125,14.3125,17.0,16.6875,17.0625,16.5,17.5625,18.0312,18.6875,19.3125,18.5,18.8125,18.9375,18.5,18.999999,19.874999,20.25,19.375,19.062501,20.1875,20.0625,21.3125,21.4375,22.25,22.3125,20.5,19.5625,19.3125,18.562499,18.5,18.5,18.875,20.375001,19.500001,18.9375,20.125,20.125,21.5,22.062499,20.0,19.625,20.875,21.75,22.1875,22.062499,23.625,22.3125,24.249999,25.75,53.5,48.937499,51.437499,53.5,52.1875,56.687499,61.046797999999995,59.9375,60.656201,55.234302,56.859299,57.999999,57.75,58.437499,58.874999,61.999997,58.437499,62.437497,63.4375,60.937503,59.5,59.187503,58.062497,56.812502,56.109302,54.312501,51.687501,50.500001,50.0,51.437499,48.499999,46.6875,47.062499,47.6875,47.5625,47.499999,46.749999,47.937499,47.375,48.0,47.25,49.3125,50.812501,48.312501,51.999999,50.062501,50.062501,48.6875,53.562501,55.125,52.687501,57.250002,58.312503,57.687502,56.499998,58.874999,56.937498,57.124999,54.437501,51.812501,51.625,53.312499,52.375,51.250001,54.437501,51.75,54.125,51.687501,53.749999,55.625001,101.250001,96.625002,91.187501,92.374998,90.437497,94.5,91.187501,95.750002,94.812497,96.562497,92.875003,91.312497,92.562499,89.124997,84.0,87.562498,86.375001,87.265602,87.687501,85.812498,89.937499,94.000002,100.750003,101.374997,105.687499,101.000002,107.625,102.8125,99.3125,105.4375,110.124997,113.125006,110.6875,115.0625,117.874994,124.312498,124.062506,126.750004,121.312496,128.312496,120.499994,118.875004,121.125002,126.875,123.874998,111.874997,113.812498,109.249997,119.4375,125.000004,131.749998,125.187498,130.375,127.3125,133.312504,135.812494,125.749994,135.937504,139.125,139.5625,138.6875,141.3125,144.187506,134.937494,122.999998,125.000004,121.562502,116.250004,114.249998,121.312496,125.749994,122.249994,122.000002,122.875002,125.687496,128.000006,122.000002,130.312502,114.625,113.250002,110.375003,115.20310400000001,116.250004,113.812498,111.250003,114.875006,114.125002,119.0,115.812504,108.749999,113.499994,112.624994,114.875006,114.062504,108.000002,103.312498,98.812502,100.249998,103.749998,101.625003,110.000001,110.187502,112.250006,106.250002,111.312501,113.499994,106.562499,103.937499,100.437499,96.749998,87.187503,92.75,97.750001,99.500001,94.999998,103.999997,102.500003,111.937502]}},"id":"20606edc-d5d1-4b4b-b7f7-2a3fdbfe19c8","type":"ColumnDataSource"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"87c3e637-84c4-4099-bb18-4461f88c5b92","type":"DaysTicker"},{"attributes":{"data_source":{"id":"20606edc-d5d1-4b4b-b7f7-2a3fdbfe19c8","type":"ColumnDataSource"},"glyph":{"id":"2bdb75a7-73de-42f9-9501-a5d4974eda52","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"af078aac-4c20-41a1-a755-e427dcd20052","type":"Line"},"selection_glyph":null},"id":"492c6c7d-072b-4ddc-9c15-8c93ef617158","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"}},"id":"74f8a535-4276-44f4-a003-97001298b076","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"e25f1d9b-7171-4c4e-a794-c03119da4e45","type":"BoxAnnotation"},"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"}},"id":"8c1a4274-06c7-47fa-9310-9c3e7610664f","type":"BoxZoomTool"},{"attributes":{},"id":"c339be4c-a6fb-40c7-b559-5b0e7b4a41c8","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"af078aac-4c20-41a1-a755-e427dcd20052","type":"Line"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2bdb75a7-73de-42f9-9501-a5d4974eda52","type":"Line"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"0d43dd23-74f0-48fd-a6af-4e230a901c12","type":"DaysTicker"},{"attributes":{"plot":null,"text":null},"id":"8bf53f10-119f-480e-99a0-1e26e5ea0dd0","type":"Title"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"86ea91b4-2451-44d1-8e3b-a3488fbc4d24","type":"MonthsTicker"},{"attributes":{},"id":"1717e06f-123b-45ab-ad99-86b97930c738","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"10b28274-4788-413e-9907-1f4401263de1","type":"PanTool"},{"id":"74f8a535-4276-44f4-a003-97001298b076","type":"WheelZoomTool"},{"id":"8c1a4274-06c7-47fa-9310-9c3e7610664f","type":"BoxZoomTool"},{"id":"57d702b1-a361-42e5-9b30-28fb750b824e","type":"SaveTool"},{"id":"3d74adac-529c-40a2-96ca-d2d422ad372e","type":"ResetTool"},{"id":"6e4dab13-7c91-4ac7-a514-5a29cfe38cf8","type":"HelpTool"}]},"id":"68e90d4f-fbf5-4b0b-95e4-b64e18cde633","type":"Toolbar"},{"attributes":{"days":[1,8,15,22]},"id":"76f98e22-20cb-47a5-9900-9d094fb7d2e7","type":"DaysTicker"},{"attributes":{"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"}},"id":"10b28274-4788-413e-9907-1f4401263de1","type":"PanTool"},{"attributes":{"months":[0,4,8]},"id":"ed55cdae-591c-4129-8e26-5c290f532030","type":"MonthsTicker"},{"attributes":{"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"}},"id":"57d702b1-a361-42e5-9b30-28fb750b824e","type":"SaveTool"},{"attributes":{"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"}},"id":"3d74adac-529c-40a2-96ca-d2d422ad372e","type":"ResetTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"fa7e41f6-cf33-4a78-af03-d3af4157779a","type":"AdaptiveTicker"},{"attributes":{"formatter":{"id":"1717e06f-123b-45ab-ad99-86b97930c738","type":"BasicTickFormatter"},"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"c339be4c-a6fb-40c7-b559-5b0e7b4a41c8","type":"BasicTicker"}},"id":"ecd7e347-6dbb-459c-a9e7-6305285616e8","type":"LinearAxis"},{"attributes":{"days":[1,15]},"id":"c2a9e31c-e1bf-4b4c-b3ff-1e74accf7c20","type":"DaysTicker"},{"attributes":{},"id":"ba2f6a2f-ac3e-454b-ba9b-7b1ddac033af","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e25f1d9b-7171-4c4e-a794-c03119da4e45","type":"BoxAnnotation"},{"attributes":{},"id":"bbbb2ef0-0d8d-43b5-b8e7-cf0fd1998a33","type":"DatetimeTickFormatter"},{"attributes":{"months":[0,6]},"id":"8cc93f4a-601e-4b27-a945-9c9b964c3158","type":"MonthsTicker"},{"attributes":{"formatter":{"id":"bbbb2ef0-0d8d-43b5-b8e7-cf0fd1998a33","type":"DatetimeTickFormatter"},"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f93169f-22f7-4bdd-82ab-55ca1889b57d","type":"DatetimeTicker"}},"id":"426de748-4635-46eb-b34d-b54451a8016b","type":"DatetimeAxis"},{"attributes":{"callback":null},"id":"3ca4e45c-c741-46e0-bcf6-55cf7ee77d9d","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"c339be4c-a6fb-40c7-b559-5b0e7b4a41c8","type":"BasicTicker"}},"id":"f5b38b0f-bfd1-4cc2-b708-23156680736f","type":"Grid"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"6571af18-6b1e-4f55-9f4d-e66de48a7805","type":"AdaptiveTicker"},{"attributes":{"plot":{"id":"774f2188-eadf-4766-9f86-99b39b5f40f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f93169f-22f7-4bdd-82ab-55ca1889b57d","type":"DatetimeTicker"}},"id":"561f59ad-a0e1-4148-9d4e-c7327ff506a1","type":"Grid"}],"root_ids":["774f2188-eadf-4766-9f86-99b39b5f40f0"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"72a40dc0-35b7-4e1d-87a8-d39b8590baba","elementid":"ad638312-6c0e-494b-8ce6-48a22d99177a","modelid":"774f2188-eadf-4766-9f86-99b39b5f40f0"}];
                  
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