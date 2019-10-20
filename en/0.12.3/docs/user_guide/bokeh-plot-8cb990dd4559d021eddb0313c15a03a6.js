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
      };var element = document.getElementById("fc5256aa-da52-48c5-8180-a482e7056ecf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc5256aa-da52-48c5-8180-a482e7056ecf' but no matching script tag was found. ")
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
                  var docs_json = {"ac497af1-874a-46c8-82dc-2911c146a628":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-6.283185307179586,-6.183185307179587,-6.083185307179587,-5.983185307179587,-5.883185307179588,-5.783185307179588,-5.683185307179588,-5.583185307179589,-5.483185307179589,-5.383185307179589,-5.28318530717959,-5.18318530717959,-5.0831853071795905,-4.983185307179591,-4.883185307179591,-4.783185307179592,-4.683185307179592,-4.583185307179592,-4.483185307179593,-4.383185307179593,-4.283185307179593,-4.183185307179594,-4.083185307179594,-3.9831853071795944,-3.8831853071795948,-3.783185307179595,-3.6831853071795955,-3.583185307179596,-3.483185307179596,-3.3831853071795965,-3.283185307179597,-3.1831853071795972,-3.0831853071795976,-2.983185307179598,-2.8831853071795983,-2.7831853071795987,-2.683185307179599,-2.5831853071795994,-2.4831853071795997,-2.3831853071796,-2.2831853071796004,-2.183185307179601,-2.083185307179601,-1.9831853071796015,-1.8831853071796019,-1.7831853071796022,-1.6831853071796026,-1.583185307179603,-1.4831853071796033,-1.3831853071796036,-1.283185307179604,-1.1831853071796044,-1.0831853071796047,-0.9831853071796051,-0.8831853071796054,-0.7831853071796058,-0.6831853071796061,-0.5831853071796065,-0.48318530717960684,-0.3831853071796072,-0.28318530717960755,-0.1831853071796079,-0.08318530717960826,0.016814692820391386,0.11681469282039103,0.21681469282039068,0.3168146928203903,0.41681469282038996,0.5168146928203896,0.6168146928203893,0.7168146928203889,0.8168146928203885,0.9168146928203882,1.0168146928203878,1.1168146928203875,1.2168146928203871,1.3168146928203868,1.4168146928203864,1.516814692820386,1.6168146928203857,1.7168146928203853,1.816814692820385,1.9168146928203846,2.0168146928203843,2.116814692820384,2.2168146928203836,2.316814692820383,2.416814692820383,2.5168146928203825,2.616814692820382,2.716814692820382,2.8168146928203814,2.916814692820381,3.0168146928203807,3.1168146928203804,3.21681469282038,3.3168146928203797,3.4168146928203793,3.516814692820379,3.6168146928203786,3.7168146928203782,3.816814692820378,3.9168146928203775,4.016814692820377,4.116814692820377,4.2168146928203765,4.316814692820376,4.416814692820376,4.516814692820375,4.616814692820375,4.716814692820375,4.816814692820374,4.916814692820374,5.016814692820374,5.116814692820373,5.216814692820373,5.316814692820373,5.416814692820372,5.516814692820372,5.6168146928203715,5.716814692820371,5.816814692820371,5.91681469282037,6.01681469282037,6.11681469282037,6.216814692820369],"y":[2.4492935982947064e-16,0.09983341664682804,0.19866933079506077,0.29552020666133877,0.3894183423086494,0.4794255386042017,0.5646424733950338,0.6442176872376894,0.7173560908995209,0.7833269096274815,0.8414709848078947,0.8912073600614336,0.9320390859672248,0.9635581854171918,0.9854497299884594,0.9974949866040541,0.9995736030415053,0.9916648104524693,0.9738476308781966,0.9463000876874166,0.9092974268256846,0.8632093666488774,0.8084964038195946,0.7457052121767255,0.6754631805511571,0.5984721441039634,0.5155013718214719,0.4273798802338384,0.33498815015591404,0.23924932921399208,0.14112000805987754,0.04158066243330134,-0.0583741434275688,-0.15774569414323705,-0.2555411020268199,-0.35078322768960846,-0.44252044329484114,-0.5298361409084823,-0.6118578909427086,-0.6877661591839639,-0.7568024953079191,-0.8182771110644023,-0.8715757724135809,-0.9161659367494489,-0.9516020738895112,-0.9775301176650938,-0.9936910036334626,-0.9999232575641007,-0.9961646088358421,-0.9824526126243357,-0.9589242746631434,-0.925814682327739,-0.8834546557201618,-0.8322674422239115,-0.7727644875559994,-0.7055403255704056,-0.6312666378723365,-0.5506855425976545,-0.46460217941377524,-0.37387666483025556,-0.2794154981989461,-0.1821625042721166,-0.08308940281751828,0.016813900484327755,0.11654920485047095,0.2151199880877932,0.31154136351335615,0.4048499206165766,0.4941133511385875,0.5784397643881801,0.6569865987187705,0.7289690401258591,0.7936678638491377,0.850436620628551,0.8987080958116154,0.9379999767747297,0.9679196720314797,0.9881682338769963,0.9985433453746034,0.9989413418397733,0.9893582466233859,0.9698898108450932,0.9407305566797827,0.9021718337563063,0.8545989080882961,0.7984871126235084,0.7343970978741338,0.6629692300822058,0.5849171928917875,0.5010208564579122,0.41211848524178546,0.31909836234938216,0.22288991410027859,0.12445442350709494,0.024775425453391262,-0.0751511204617759,-0.17432678122294665,-0.2717606264109102,-0.3664791292518956,-0.45753589377528997,-0.5440211108893402,-0.6250706488928546,-0.6998746875935171,-0.7676858097635587,-0.8278264690856328,-0.8796957599716525,-0.9227754216127924,-0.9566350162701771,-0.980936230066484,-0.9954362533063738,-0.9999902065507036,-0.9945525882039933,-0.9791777291513253,-0.9540192499021012,-0.9193285256646917,-0.8754521746884482,-0.822828594968732,-0.7619835839190596,-0.6935250847771529,-0.6181371122370666,-0.5365729180004707,-0.44964746453463933,-0.3582292822368683,-0.26323179136584357,-0.16560417544835296,-0.06632189735124476]}},"id":"d06918d5-254f-4789-90ca-c04b8a649c80","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"185dfd26-3341-45e3-9e68-d50c208882b8","type":"Circle"},{"attributes":{},"id":"e71577ee-188b-43c4-a124-ae8228e2f2a4","type":"BasicTicker"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"2be69ac8-0e1e-49f6-a58f-03e506b1f820","type":"Range1d"},{"attributes":{"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"}},"id":"8b614c68-0115-416e-8a16-b3e0fa03344f","type":"HelpTool"},{"attributes":{"plot":null,"text":null},"id":"35a88c67-779c-4653-8d17-08edad410244","type":"Title"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c5bb5de-9f3a-46dc-88cf-34db4a387553","type":"Circle"},{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"083db3ca-47f4-4251-99e5-a6c87c2bcb79","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc4f1771-1898-439b-a3dd-335a871efff8","type":"BasicTicker"}},"id":"37587220-479f-4537-af4d-52915b6cd773","type":"Grid"},{"attributes":{"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"}},"id":"6a08ae27-d19f-4594-a645-42cc9945bda6","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dc0f4ecb-f903-4c07-97ea-3c72871e1930","type":"PanTool"},{"id":"6a08ae27-d19f-4594-a645-42cc9945bda6","type":"WheelZoomTool"},{"id":"97740542-4791-443a-9e50-91f8f44cf6c4","type":"BoxZoomTool"},{"id":"09e4c74e-b5d4-4611-b006-feb1447a3573","type":"SaveTool"},{"id":"cb1d27d8-5a63-45c7-86c7-cd0cc1d333b8","type":"ResetTool"},{"id":"8b614c68-0115-416e-8a16-b3e0fa03344f","type":"HelpTool"}]},"id":"76f14a4b-c549-4583-a003-f148a2ebc34c","type":"Toolbar"},{"attributes":{},"id":"5ac8e7f0-43f9-4c84-bdfb-2f00e088d7a5","type":"BasicTicker"},{"attributes":{"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"}},"id":"09e4c74e-b5d4-4611-b006-feb1447a3573","type":"SaveTool"},{"attributes":{},"id":"99566700-6e4e-4823-a3db-6b187854e55f","type":"ToolEvents"},{"attributes":{"formatter":{"id":"7c0e2aba-b81e-49af-bac2-72c4e86da77c","type":"BasicTickFormatter"},"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"},"ticker":{"id":"e71577ee-188b-43c4-a124-ae8228e2f2a4","type":"BasicTicker"}},"id":"75b6c4a6-be38-4a57-a571-77c89f52a18c","type":"LinearAxis"},{"attributes":{"below":[{"id":"75b6c4a6-be38-4a57-a571-77c89f52a18c","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"ee15356c-040a-4bab-925b-6e85ffc44dec","type":"Range1d"}},"left":[{"id":"f4aaeda7-f67d-4488-a070-28dbf88f77b3","type":"LinearAxis"},{"id":"eb5c9da9-ec72-44bb-bdd1-dd6b4d42ba82","type":"LinearAxis"}],"renderers":[{"id":"75b6c4a6-be38-4a57-a571-77c89f52a18c","type":"LinearAxis"},{"id":"a99a34ad-f0b7-4d91-9607-870e227e2f07","type":"Grid"},{"id":"f4aaeda7-f67d-4488-a070-28dbf88f77b3","type":"LinearAxis"},{"id":"37587220-479f-4537-af4d-52915b6cd773","type":"Grid"},{"id":"1520cfee-726f-4f97-8cae-6a428154f9ce","type":"BoxAnnotation"},{"id":"fb536511-6517-40f1-b30b-261a58c7d7b0","type":"GlyphRenderer"},{"id":"25cc989f-85d9-43a3-bf35-b6ec4d34688a","type":"GlyphRenderer"},{"id":"eb5c9da9-ec72-44bb-bdd1-dd6b4d42ba82","type":"LinearAxis"}],"title":{"id":"35a88c67-779c-4653-8d17-08edad410244","type":"Title"},"tool_events":{"id":"99566700-6e4e-4823-a3db-6b187854e55f","type":"ToolEvents"},"toolbar":{"id":"76f14a4b-c549-4583-a003-f148a2ebc34c","type":"Toolbar"},"x_range":{"id":"083db3ca-47f4-4251-99e5-a6c87c2bcb79","type":"Range1d"},"y_range":{"id":"2be69ac8-0e1e-49f6-a58f-03e506b1f820","type":"Range1d"}},"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"}},"id":"cb1d27d8-5a63-45c7-86c7-cd0cc1d333b8","type":"ResetTool"},{"attributes":{"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"}},"id":"dc0f4ecb-f903-4c07-97ea-3c72871e1930","type":"PanTool"},{"attributes":{"formatter":{"id":"2aa27a97-2c15-4d6c-abad-c5936ac49510","type":"BasicTickFormatter"},"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ac8e7f0-43f9-4c84-bdfb-2f00e088d7a5","type":"BasicTicker"},"y_range_name":"foo"},"id":"eb5c9da9-ec72-44bb-bdd1-dd6b4d42ba82","type":"LinearAxis"},{"attributes":{},"id":"2aa27a97-2c15-4d6c-abad-c5936ac49510","type":"BasicTickFormatter"},{"attributes":{},"id":"cc4f1771-1898-439b-a3dd-335a871efff8","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1520cfee-726f-4f97-8cae-6a428154f9ce","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":100},"id":"ee15356c-040a-4bab-925b-6e85ffc44dec","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"099d54a0-21a7-4236-9b12-3e14f5a52266","type":"Circle"},{"attributes":{},"id":"abfa5bbc-fe30-43ff-9fad-e6f5374372ac","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"abfa5bbc-fe30-43ff-9fad-e6f5374372ac","type":"BasicTickFormatter"},"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc4f1771-1898-439b-a3dd-335a871efff8","type":"BasicTicker"}},"id":"f4aaeda7-f67d-4488-a070-28dbf88f77b3","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"46cbb34b-9ba4-46a5-95c1-84ab3bea83b8","type":"Circle"},{"attributes":{"overlay":{"id":"1520cfee-726f-4f97-8cae-6a428154f9ce","type":"BoxAnnotation"},"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"}},"id":"97740542-4791-443a-9e50-91f8f44cf6c4","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"d06918d5-254f-4789-90ca-c04b8a649c80","type":"ColumnDataSource"},"glyph":{"id":"3c5bb5de-9f3a-46dc-88cf-34db4a387553","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"46cbb34b-9ba4-46a5-95c1-84ab3bea83b8","type":"Circle"},"selection_glyph":null},"id":"fb536511-6517-40f1-b30b-261a58c7d7b0","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5","subtype":"Figure","type":"Plot"},"ticker":{"id":"e71577ee-188b-43c4-a124-ae8228e2f2a4","type":"BasicTicker"}},"id":"a99a34ad-f0b7-4d91-9607-870e227e2f07","type":"Grid"},{"attributes":{"data_source":{"id":"ab31b91a-0dbe-456d-aa29-32d6e8f01bad","type":"ColumnDataSource"},"glyph":{"id":"185dfd26-3341-45e3-9e68-d50c208882b8","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"099d54a0-21a7-4236-9b12-3e14f5a52266","type":"Circle"},"selection_glyph":null,"y_range_name":"foo"},"id":"25cc989f-85d9-43a3-bf35-b6ec4d34688a","type":"GlyphRenderer"},{"attributes":{},"id":"7c0e2aba-b81e-49af-bac2-72c4e86da77c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-6.283185307179586,-6.183185307179587,-6.083185307179587,-5.983185307179587,-5.883185307179588,-5.783185307179588,-5.683185307179588,-5.583185307179589,-5.483185307179589,-5.383185307179589,-5.28318530717959,-5.18318530717959,-5.0831853071795905,-4.983185307179591,-4.883185307179591,-4.783185307179592,-4.683185307179592,-4.583185307179592,-4.483185307179593,-4.383185307179593,-4.283185307179593,-4.183185307179594,-4.083185307179594,-3.9831853071795944,-3.8831853071795948,-3.783185307179595,-3.6831853071795955,-3.583185307179596,-3.483185307179596,-3.3831853071795965,-3.283185307179597,-3.1831853071795972,-3.0831853071795976,-2.983185307179598,-2.8831853071795983,-2.7831853071795987,-2.683185307179599,-2.5831853071795994,-2.4831853071795997,-2.3831853071796,-2.2831853071796004,-2.183185307179601,-2.083185307179601,-1.9831853071796015,-1.8831853071796019,-1.7831853071796022,-1.6831853071796026,-1.583185307179603,-1.4831853071796033,-1.3831853071796036,-1.283185307179604,-1.1831853071796044,-1.0831853071796047,-0.9831853071796051,-0.8831853071796054,-0.7831853071796058,-0.6831853071796061,-0.5831853071796065,-0.48318530717960684,-0.3831853071796072,-0.28318530717960755,-0.1831853071796079,-0.08318530717960826,0.016814692820391386,0.11681469282039103,0.21681469282039068,0.3168146928203903,0.41681469282038996,0.5168146928203896,0.6168146928203893,0.7168146928203889,0.8168146928203885,0.9168146928203882,1.0168146928203878,1.1168146928203875,1.2168146928203871,1.3168146928203868,1.4168146928203864,1.516814692820386,1.6168146928203857,1.7168146928203853,1.816814692820385,1.9168146928203846,2.0168146928203843,2.116814692820384,2.2168146928203836,2.316814692820383,2.416814692820383,2.5168146928203825,2.616814692820382,2.716814692820382,2.8168146928203814,2.916814692820381,3.0168146928203807,3.1168146928203804,3.21681469282038,3.3168146928203797,3.4168146928203793,3.516814692820379,3.6168146928203786,3.7168146928203782,3.816814692820378,3.9168146928203775,4.016814692820377,4.116814692820377,4.2168146928203765,4.316814692820376,4.416814692820376,4.516814692820375,4.616814692820375,4.716814692820375,4.816814692820374,4.916814692820374,5.016814692820374,5.116814692820373,5.216814692820373,5.316814692820373,5.416814692820372,5.516814692820372,5.6168146928203715,5.716814692820371,5.816814692820371,5.91681469282037,6.01681469282037,6.11681469282037,6.216814692820369],"y":[0.0,0.8,1.6,2.4000000000000004,3.2,4.0,4.800000000000001,5.6000000000000005,6.4,7.2,8.0,8.8,9.600000000000001,10.4,11.200000000000001,12.0,12.8,13.600000000000001,14.4,15.200000000000001,16.0,16.8,17.6,18.400000000000002,19.200000000000003,20.0,20.8,21.6,22.400000000000002,23.200000000000003,24.0,24.8,25.6,26.400000000000002,27.200000000000003,28.0,28.8,29.6,30.400000000000002,31.200000000000003,32.0,32.800000000000004,33.6,34.4,35.2,36.0,36.800000000000004,37.6,38.400000000000006,39.2,40.0,40.800000000000004,41.6,42.400000000000006,43.2,44.0,44.800000000000004,45.6,46.400000000000006,47.2,48.0,48.800000000000004,49.6,50.400000000000006,51.2,52.0,52.800000000000004,53.6,54.400000000000006,55.2,56.0,56.800000000000004,57.6,58.400000000000006,59.2,60.0,60.800000000000004,61.6,62.400000000000006,63.2,64.0,64.8,65.60000000000001,66.4,67.2,68.0,68.8,69.60000000000001,70.4,71.2,72.0,72.8,73.60000000000001,74.4,75.2,76.0,76.80000000000001,77.60000000000001,78.4,79.2,80.0,80.80000000000001,81.60000000000001,82.4,83.2,84.0,84.80000000000001,85.60000000000001,86.4,87.2,88.0,88.80000000000001,89.60000000000001,90.4,91.2,92.0,92.80000000000001,93.60000000000001,94.4,95.2,96.0,96.80000000000001,97.60000000000001,98.4,99.2,100.0]}},"id":"ab31b91a-0dbe-456d-aa29-32d6e8f01bad","type":"ColumnDataSource"}],"root_ids":["b36c0c86-e3ab-4ce3-bb62-d8200505fac5"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"ac497af1-874a-46c8-82dc-2911c146a628","elementid":"fc5256aa-da52-48c5-8180-a482e7056ecf","modelid":"b36c0c86-e3ab-4ce3-bb62-d8200505fac5"}];
                  
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