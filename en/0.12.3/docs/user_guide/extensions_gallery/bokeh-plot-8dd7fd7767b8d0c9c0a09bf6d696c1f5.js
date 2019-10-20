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
      };var element = document.getElementById("7f099b13-3d50-4b1a-8c44-81629bde89a3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7f099b13-3d50-4b1a-8c44-81629bde89a3' but no matching script tag was found. ")
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
                  var docs_json = {"09a4563b-96c0-4a47-9acb-20878da30343":{"roots":{"references":[{"attributes":{"color":"color","data_source":{"id":"312fecd1-5420-4769-b820-c492001df589","type":"ColumnDataSource"},"x":"x","y":"y","z":"z"},"id":"57194011-43ba-4f38-b632-4933f8e99848","type":"Surface3d"},{"attributes":{"callback":null,"column_names":["color","y","z","x"],"data":{"color":[50.0,59.93346653975306,69.47091711543253,78.23212366975177,85.86780454497614,92.07354924039483,96.6019542983613,99.27248649942301,99.97868015207526,98.69238154390976,95.4648713412841,90.4248201909795,83.77315902755754,75.77506859107321,66.74940750779525,57.05600040299336,47.081292828620995,37.22294489865844,27.873977835257378,19.407105452864055,12.15987523460359,6.421211379320589,2.4198963055241975,0.3154498183267762,0.19176955820796593,2.053786266843076,5.827267213992343,11.36177562220064,18.43666810638392,26.76989102931213,50.0,59.735458557716264,69.08279510475242,77.66936083020434,85.1528364550733,91.23487942166872,95.67301786990892,98.29031722521829,98.98243402166639,97.72177574667967,94.55860086744464,89.61901518442082,83.09994439102636,75.26128326767639,66.41553449703329,56.91535016820812,47.13947265082589,37.4776353319392,28.315025175761235,20.01692653493049,12.914158416092327,7.28988577006389,3.3683305988236825,1.3058329318660853,1.1846180425849298,3.0095183861001544,6.707780944521865,12.131967660188145,19.06583332575637,27.232946598218813,50.0,59.14932856499935,67.93390227248807,76.00350789007395,83.03643570689692,88.75230508458739,92.92324234852569,95.3829653921523,96.0334128198227,94.84865334520126,91.8759195898164,87.23372506749148,81.10713942453967,73.74041029698643,65.42722592808929,56.499006744865824,47.3116926715263,38.23155292792871,29.620584031612292,21.82207813898952,15.146937070390791,9.861277635595407,6.175822396405771,4.237498823081836,4.123581759758267,5.838612720263704,9.314218832295957,14.41183864807762,20.928246152023007,28.603652740662895,50.0,58.198443714771805,66.07004135032088,73.30097714918065,79.60297651958804,84.72479863375389,88.46225260683076,90.66633794313012,91.24918471568716,90.18755666295944,87.52377754524811,83.36404382993524,77.87419097345156,71.27308208495255,63.82388254481898,55.823568431407466,47.59108702196862,39.45464137119942,31.738605891156976,24.75059456707261,18.769197358492605,14.032873696732665,10.73044585985356,8.993571224297966,8.89149350076061,10.428282205954062,13.542670423819466,18.110497324130844,23.94965806298411,30.827363728258494,50.0,56.92071278532153,63.5655185914644,69.66950997983497,74.98934007603762,79.31292404183141,82.4678942283583,84.32847193036564,84.82048178626684,83.92430891573402,81.67568090307827,78.16424345120818,73.52998649034814,67.9576632212841,61.669424588270736,54.91596282192178,47.96651713108056,41.09813998519691,34.58465190665972,28.685725110660076,23.63653119341449,19.63836558275075,16.85062252462486,15.384440537532342,15.298271670493762,16.595551204316372,19.224560697788963,23.08048983872598,28.009614900366305,33.81542722125599,50.0,55.36707487669259,60.52018141483562,65.25388151832136,69.37945750207835,72.73243567064205,75.17914336536629,76.62203807149504,77.00359613041249,76.30860602638569,74.5647748216941,71.84162356349117,68.24771569904073,63.92632899366632,59.04974349838691,53.812373287943835,48.42301578515005,43.09652766654088,38.04525920469999,33.4705885330016,29.55489333491822,26.454280021306666,24.29236026042953,23.155322970820656,23.08849824108809,24.094550162328645,26.133370619222884,29.123678274024435,32.94625899699783,37.44871855756919,50.0,53.59946862951409,57.055437803549566,60.230128937079,62.996977112925784,65.24567682561323,66.88657951377877,67.85426756541314,68.11016231161389,67.64406203637256,66.47454868679857,64.64824706952663,62.23796606680935,59.33979597614353,56.06927769333943,52.55679646161518,48.94238382340414,45.37013500465314,41.98246429288275,38.91442742895815,36.28833736089379,34.208888012596994,32.75898046750247,31.996417963985284,31.95160146265554,32.62631765599461,33.99366773856413,35.999139777494754,38.562781931227306,41.58238987713311,50.0,51.68836292685697,53.30941615175747,54.79853339815398,56.09634826061387,57.15112095606251,57.92080102566008,58.37470375389763,58.494733471373216,58.27610497202677,57.727534284205106,56.870891190116765,55.74032734662944,54.380914766482455,52.8468489393718,51.19928822879973,49.503915681118265,47.82832044974602,46.23930322891129,44.80021312077494,43.568422106636916,42.59303780708959,41.91294571615275,41.55525895933735,41.534237378891795,41.850719038891015,42.49208681426647,43.432771395767,44.635270657630016,46.051644748990924,50.0,49.709947522243375,49.43145852146138,49.17563547529234,48.9526772412907,48.77147246066072,48.639245196181356,48.561266931620146,48.5406464143105,48.57820571920574,48.672447475344946,48.8196145613079,49.01383988978986,49.24738030985771,49.510925301942756,49.79396815887489,50.08522485514161,50.37308390537642,50.64606927763821,50.89329790659007,51.104913566970744,51.27247981019268,51.38931629892448,51.45076513105927,51.45437653557284,51.40000653716368,51.2898226960939,51.128217694401755,50.92163421353062,50.67830808495097,50.0,47.74309559460441,45.576166845778246,43.58560236459811,41.85075967533919,40.44080148140955,39.411938366620795,38.80518785659424,38.644739179452685,38.93698891762869,39.67028599630855,40.81539617501805,42.326667524536184,44.14385042525017,46.1944995293608,48.39686192828464,50.66313638313304,52.9029736830338,55.0270785830552,56.95076972383401,58.597355610145826,59.901192058805634,60.81029922509919,61.28843387515996,61.31653428933114,60.89348019277571,60.036137417298946,58.77868551385752,57.171255121722695,55.27792941808896,50.0,45.86621932353488,41.89723943774114,38.2512910458251,35.07372660471696,32.49122558129927,30.606744141822436,29.495410614453334,29.20153035991243,29.736819456555494,31.07993761730179,33.17733895953683,35.94540671047836,39.27378674403927,43.02978705159205,47.06366775361895,51.21461075617683,55.31713106081182,59.2076741292296,62.73113628661095,65.7470482156689,68.13517502505235,69.8003096350411,70.67606838337106,70.72753753236283,69.9526651694664,68.38234301053933,66.07917484461989,63.13498071841586,59.66713636079715,50.0,44.15414384313673,38.54134352358172,33.38536367785999,28.891756951785172,25.239669265129837,22.5746978291318,21.003086645140616,20.587490891556136,21.344479059585524,23.243872419783763,26.2099481527621,30.124458179039916,34.83134333682025,40.14295496829742,45.84753587948424,51.71766243129773,57.51931120237263,63.02118876436758,68.00395262106449,72.26895570151747,75.64616579190438,78.00094418332421,79.239413292244,79.31219926350634,78.21640035012645,75.99570259678735,72.73863821509767,68.57505608369435,63.67094508321324,50.0,42.67512420004685,35.64226808325558,29.1818094295418,23.551306338272877,18.975229199617715,15.636011768448036,13.666778106234617,13.146035344813725,14.094543854784419,16.474489595045846,20.190991639286864,25.095884779103983,30.993626403298073,37.64909216471243,44.7969496459762,52.15223632568004,59.42172013485348,66.31558969420752,72.55900817927409,77.90307019729995,82.13472485978934,85.08526944910724,86.63707506345948,86.7282761100076,85.35523669082727,82.57269555468477,78.4915838358618,73.27460257989506,67.12973636632354,50.0,41.48812424011885,33.31559010600692,25.808210743668454,19.265281677374336,13.94764884159106,10.067309476720517,7.778960468121134,7.173831069462885,8.276045880274033,11.041663074287499,15.360426221387726,21.060159863545003,27.913633606996168,35.64762108097684,43.95379261090823,52.50100734953196,60.94851481751492,68.95953954976001,76.21470727044299,82.42477733754596,87.34217385450285,90.77085573992461,92.57413226687088,92.68011249078043,91.08457131456593,87.85111792990173,83.10865991948216,77.04626411849102,69.90561911651753,50.0,40.64046590596008,31.65406690053173,23.39906235383946,16.20455324698665,10.357361954477149,6.090597541264167,3.5743624399488,2.908971003581449,4.120950288965979,7.161982506615914,11.91083129854566,18.17817504927991,25.71415454122379,34.21833405319196,43.3516787845326,52.75007110274312,62.03882676443846,70.8476323937504,78.82530870803186,85.65381092764586,91.06090821768123,94.83103667226646,96.81389316724554,96.9304274714292,95.17599372985487,91.62053567936331,86.40579821253093,79.73967645610466,71.88792764834952,50.0,40.16594266041288,30.72393815379261,22.05040940384992,14.491142630942264,8.347501946659754,3.8644149177054246,1.2206080767244742,0.5214816594518865,1.7949076299233226,4.990118513224132,9.97973133450811,16.564825976224434,24.48287549547571,33.418212244779525,43.01461254502685,52.889498199439124,62.64918867897859,71.90459592271034,80.28673605095327,87.46143958816714,93.1426737454095,97.10394564500217,99.18733187682479,99.30977440632,97.46639183622659,93.73067401248406,88.25155221598578,81.24746174238945,72.99763357619169,50.0,40.08347224783253,30.562285163731065,21.81601843089542,14.193358103523018,7.998195594170539,3.477512482120062,0.8115341372085112,0.10654470306635488,1.390649883710033,4.612656457815504,9.644113190902907,16.284431780703898,24.26888367978019,33.27915398731058,42.956031659686055,52.91373012126234,62.75526735771098,72.08829233618147,80.5407268028456,87.77559886871688,93.50447701548809,97.49896894996783,99.59982688407663,99.72329624162218,97.8644546889492,94.09740837284906,88.57233754234258,81.50950933607285,73.19049642658052,50.0,40.39634250331819,31.17555252493534,22.705233863404167,15.323071394123687,9.323368638983325,4.945314813673633,2.3634491084619427,1.6807023614666576,2.9242935309585363,6.044644561388807,10.917356904011314,17.348170894458654,25.080710272538788,33.80670309468669,43.17827156354607,52.821800817957936,62.352833778465204,71.39139823784626,79.57715515394509,86.58376423016655,92.13189407327525,96.00035825456254,98.0349333147652,98.15450716670583,96.35431277824465,92.7061182188077,87.3553654929361,80.51537222653369,72.45882736628496,50.0,41.09208027710281,32.53929120299129,24.682605488163617,17.835244398864475,12.270190613626788,8.209305265325213,5.814483037931787,5.181197936354131,6.334697039145439,9.228993977154339,13.74870226494457,19.713635395846197,26.885990309365177,34.979827848774256,43.67247225295857,52.617375220748954,61.45793169809319,69.84169659622883,77.43443566516719,83.93345035850342,89.07964546924102,92.66785843807261,94.55503853719173,94.66594985138768,92.99617069656433,89.61226989833168,84.64915290299878,78.30468352314823,70.83179573182372,50.0,42.1429486996731,34.59913324033108,27.669301738451594,21.629724707666703,16.721181025206356,13.139358837884927,11.027054093217394,10.468477715610561,11.48589838254992,14.03875474270118,18.025272468989222,23.286521679851074,29.612752972081672,36.75175946763703,44.41893150597714,52.308603133093854,60.10623803851256,67.50096912541414,74.19799180078715,79.93031690424165,84.46941472330082,87.63432575187022,89.29887497469508,89.39670206705026,87.92390697147472,84.93920538075542,80.5615879285438,74.96557640828885,68.37426614006755,50.0,43.507052963228276,37.27295923513341,31.54625245983417,26.555238364793478,22.498892931924857,19.538929853098548,17.79335351556371,17.331754539413197,18.172535419166312,20.28217687438481,23.57657415760771,27.9243900452247,33.15229083812295,39.05185662928454,45.38789034777231,51.90779432374076,58.35164056041478,64.46253324307091,69.99685036448858,74.73395616558454,78.48499718687086,81.10043125992328,82.47598928172872,82.55683209478212,81.33973675124133,78.87322500168683,75.25562888604546,70.63117054546314,65.18421254065669,50.0,45.13001053546031,40.45417218273137,36.158895861475294,32.415420684092325,29.372987192685674,27.152887609603642,25.843630299294354,25.497411219119474,26.128033031248087,27.710354834072838,30.1812944506203,33.44234331587958,37.36349370242759,41.78842171825822,46.54071944704817,51.43092777509326,56.26408952829909,60.84752179948924,64.99849760786827,68.55153064711779,71.36497270220701,73.32666071672935,74.35838838001031,74.41902396591979,73.50615012499424,71.65616025653136,68.94280761860614,65.47426501841332,61.388812303803384,50.0,46.947119219503094,44.015947161802195,41.32334040698952,38.97664468936749,37.069415361771114,35.67768763888148,34.85694531315941,34.639908791129244,35.03523063402599,36.02715060748358,37.57612399234472,39.62039810782318,42.07847419601486,44.8523565201912,47.83145914557917,50.897014651606504,53.9268090141677,56.80005389309647,59.40220208211842,61.62951414449074,63.39319417697629,64.62292982229404,65.26969540092043,65.30770641022242,64.73544747120982,63.575732741913555,61.8747963888992,59.70044937694641,57.13937605987293,50.0,48.88593662634188,47.81628744376123,46.83369598969436,45.97733508466828,45.281345135563264,44.77347306532684,44.473966130716335,44.39476472806589,44.53902636736469,44.90099979229783,45.46625426468642,46.21225487247996,47.109260925586774,48.121511623335785,49.20865172474953,50.327340384653624,51.43297901640389,52.481489296796916,53.43107042971896,54.24386561197696,54.88747126457781,55.3362288611674,55.572247852506194,55.5861189062105,55.37728902714178,54.95408360357771,54.33337450025384,53.53990743035885,52.60531542203933,50.0,50.869168224258146,51.70368545423406,52.470282121440015,53.138396435890165,53.68139278822404,54.077623627398154,54.31129248023336,54.37308370695182,54.26053388633777,53.97813002456758,53.537130672433115,52.955117082450045,52.25529229980091,51.46555613014512,50.61739286241024,49.744616089546916,48.88202066728282,48.06399555302636,47.323152826655424,46.68902754980599,46.186900296168034,45.83678929478992,45.65265236645743,45.64183046942551,45.80475503857834,46.13493078548203,46.61919464503732,47.238240545346734,47.96738907987725,50.0,52.81774882789219,55.52316290193693,58.008385900429865,60.17433982499577,61.934674927725055,63.21921220313056,63.976741203633644,64.17706163850524,63.8121873641547,62.896664766473044,61.4669928423312,59.58016809975406,57.31141228700839,54.75117353887537,52.001520494942504,49.17207314503944,46.37563262616939,43.723684197141324,41.3219526731134,39.26618751084651,37.638345580018104,36.503323801458066,35.90637191170924,35.87128849882528,36.399472227765756,37.46986608003796,39.03979683057493,41.04667629455571,43.41049652082578,50.0,54.65399467767878,59.122449274087984,63.22722060549268,66.80466439226475,69.71215923990229,71.83379250396055,73.08498136140244,73.41584486083653,72.81319251864052,71.30105018191833,68.93970219379399,65.82328804688954,62.07604933882852,57.847376651805774,53.30585382150457,48.63253703156497,44.01373667489795,39.63358974625642,35.66671888133241,32.27127070332551,29.582611016136532,27.707928196937424,26.721959933825918,26.664013670049485,27.536399540284894,29.30433827285866,31.897347729556362,35.21205280605396,39.11630667110829,50.0,56.3047004461958,62.358052381234536,67.91872776592288,72.76504002039921,76.70378196850024,79.57792839817417,81.27289616116343,81.72111224153772,80.90470767860015,78.85622994596147,75.65734538647666,71.43558343286846,66.35925241168692,60.63072962145773,54.47839318842824,48.14751735136307,41.890494151652014,35.956771359089025,30.58290777646854,25.983142386622436,22.340853320244825,19.801247148504373,18.465569955277672,18.38707097528553,19.568879715142383,21.963881189803292,25.476594248337708,29.966978106108925,35.25601532893332,50.0,57.70405770355575,65.10097893803068,71.89587179614104,77.81784534215834,82.63080917867106,86.14288562570309,88.21405927830942,88.76175897892702,87.76414966885864,85.26100288315845,81.3521111850359,76.19330975127403,69.99026371549763,62.9902689483094,55.47239315131622,47.73635030851528,40.09055203555417,32.83981218186413,26.273194864379086,20.65249039338788,16.20177851899031,13.098495078585103,11.466358189964026,11.370436000370603,12.814552624803952,15.74113569062147,20.033511566355898,25.520556771217066,31.98352012825963,50.0,58.79627849183488,67.24187711846227,75.00009651426616,81.76164095441291,87.25694899936121,91.26694005880634,93.63174844346672,94.25709670563036,93.11805418348536,90.2600309079331,85.79696724795585,79.9067914676651,72.82432628789651,64.83192724535616,56.248226068396434,47.4154278355073,38.68566833872741,30.406975540844197,22.909394798783467,16.491830996746934,11.410132151728128,7.866889560449927,6.003361123678005,5.893839839482425,7.54269197584965,10.88418300135654,15.785098213500817,22.050053588506564,29.42928512578228],"x":[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290],"z":[50.0,59.93346653975306,69.47091711543253,78.23212366975177,85.86780454497614,92.07354924039483,96.6019542983613,99.27248649942301,99.97868015207526,98.69238154390976,95.4648713412841,90.4248201909795,83.77315902755754,75.77506859107321,66.74940750779525,57.05600040299336,47.081292828620995,37.22294489865844,27.873977835257378,19.407105452864055,12.15987523460359,6.421211379320589,2.4198963055241975,0.3154498183267762,0.19176955820796593,2.053786266843076,5.827267213992343,11.36177562220064,18.43666810638392,26.76989102931213,50.0,59.735458557716264,69.08279510475242,77.66936083020434,85.1528364550733,91.23487942166872,95.67301786990892,98.29031722521829,98.98243402166639,97.72177574667967,94.55860086744464,89.61901518442082,83.09994439102636,75.26128326767639,66.41553449703329,56.91535016820812,47.13947265082589,37.4776353319392,28.315025175761235,20.01692653493049,12.914158416092327,7.28988577006389,3.3683305988236825,1.3058329318660853,1.1846180425849298,3.0095183861001544,6.707780944521865,12.131967660188145,19.06583332575637,27.232946598218813,50.0,59.14932856499935,67.93390227248807,76.00350789007395,83.03643570689692,88.75230508458739,92.92324234852569,95.3829653921523,96.0334128198227,94.84865334520126,91.8759195898164,87.23372506749148,81.10713942453967,73.74041029698643,65.42722592808929,56.499006744865824,47.3116926715263,38.23155292792871,29.620584031612292,21.82207813898952,15.146937070390791,9.861277635595407,6.175822396405771,4.237498823081836,4.123581759758267,5.838612720263704,9.314218832295957,14.41183864807762,20.928246152023007,28.603652740662895,50.0,58.198443714771805,66.07004135032088,73.30097714918065,79.60297651958804,84.72479863375389,88.46225260683076,90.66633794313012,91.24918471568716,90.18755666295944,87.52377754524811,83.36404382993524,77.87419097345156,71.27308208495255,63.82388254481898,55.823568431407466,47.59108702196862,39.45464137119942,31.738605891156976,24.75059456707261,18.769197358492605,14.032873696732665,10.73044585985356,8.993571224297966,8.89149350076061,10.428282205954062,13.542670423819466,18.110497324130844,23.94965806298411,30.827363728258494,50.0,56.92071278532153,63.5655185914644,69.66950997983497,74.98934007603762,79.31292404183141,82.4678942283583,84.32847193036564,84.82048178626684,83.92430891573402,81.67568090307827,78.16424345120818,73.52998649034814,67.9576632212841,61.669424588270736,54.91596282192178,47.96651713108056,41.09813998519691,34.58465190665972,28.685725110660076,23.63653119341449,19.63836558275075,16.85062252462486,15.384440537532342,15.298271670493762,16.595551204316372,19.224560697788963,23.08048983872598,28.009614900366305,33.81542722125599,50.0,55.36707487669259,60.52018141483562,65.25388151832136,69.37945750207835,72.73243567064205,75.17914336536629,76.62203807149504,77.00359613041249,76.30860602638569,74.5647748216941,71.84162356349117,68.24771569904073,63.92632899366632,59.04974349838691,53.812373287943835,48.42301578515005,43.09652766654088,38.04525920469999,33.4705885330016,29.55489333491822,26.454280021306666,24.29236026042953,23.155322970820656,23.08849824108809,24.094550162328645,26.133370619222884,29.123678274024435,32.94625899699783,37.44871855756919,50.0,53.59946862951409,57.055437803549566,60.230128937079,62.996977112925784,65.24567682561323,66.88657951377877,67.85426756541314,68.11016231161389,67.64406203637256,66.47454868679857,64.64824706952663,62.23796606680935,59.33979597614353,56.06927769333943,52.55679646161518,48.94238382340414,45.37013500465314,41.98246429288275,38.91442742895815,36.28833736089379,34.208888012596994,32.75898046750247,31.996417963985284,31.95160146265554,32.62631765599461,33.99366773856413,35.999139777494754,38.562781931227306,41.58238987713311,50.0,51.68836292685697,53.30941615175747,54.79853339815398,56.09634826061387,57.15112095606251,57.92080102566008,58.37470375389763,58.494733471373216,58.27610497202677,57.727534284205106,56.870891190116765,55.74032734662944,54.380914766482455,52.8468489393718,51.19928822879973,49.503915681118265,47.82832044974602,46.23930322891129,44.80021312077494,43.568422106636916,42.59303780708959,41.91294571615275,41.55525895933735,41.534237378891795,41.850719038891015,42.49208681426647,43.432771395767,44.635270657630016,46.051644748990924,50.0,49.709947522243375,49.43145852146138,49.17563547529234,48.9526772412907,48.77147246066072,48.639245196181356,48.561266931620146,48.5406464143105,48.57820571920574,48.672447475344946,48.8196145613079,49.01383988978986,49.24738030985771,49.510925301942756,49.79396815887489,50.08522485514161,50.37308390537642,50.64606927763821,50.89329790659007,51.104913566970744,51.27247981019268,51.38931629892448,51.45076513105927,51.45437653557284,51.40000653716368,51.2898226960939,51.128217694401755,50.92163421353062,50.67830808495097,50.0,47.74309559460441,45.576166845778246,43.58560236459811,41.85075967533919,40.44080148140955,39.411938366620795,38.80518785659424,38.644739179452685,38.93698891762869,39.67028599630855,40.81539617501805,42.326667524536184,44.14385042525017,46.1944995293608,48.39686192828464,50.66313638313304,52.9029736830338,55.0270785830552,56.95076972383401,58.597355610145826,59.901192058805634,60.81029922509919,61.28843387515996,61.31653428933114,60.89348019277571,60.036137417298946,58.77868551385752,57.171255121722695,55.27792941808896,50.0,45.86621932353488,41.89723943774114,38.2512910458251,35.07372660471696,32.49122558129927,30.606744141822436,29.495410614453334,29.20153035991243,29.736819456555494,31.07993761730179,33.17733895953683,35.94540671047836,39.27378674403927,43.02978705159205,47.06366775361895,51.21461075617683,55.31713106081182,59.2076741292296,62.73113628661095,65.7470482156689,68.13517502505235,69.8003096350411,70.67606838337106,70.72753753236283,69.9526651694664,68.38234301053933,66.07917484461989,63.13498071841586,59.66713636079715,50.0,44.15414384313673,38.54134352358172,33.38536367785999,28.891756951785172,25.239669265129837,22.5746978291318,21.003086645140616,20.587490891556136,21.344479059585524,23.243872419783763,26.2099481527621,30.124458179039916,34.83134333682025,40.14295496829742,45.84753587948424,51.71766243129773,57.51931120237263,63.02118876436758,68.00395262106449,72.26895570151747,75.64616579190438,78.00094418332421,79.239413292244,79.31219926350634,78.21640035012645,75.99570259678735,72.73863821509767,68.57505608369435,63.67094508321324,50.0,42.67512420004685,35.64226808325558,29.1818094295418,23.551306338272877,18.975229199617715,15.636011768448036,13.666778106234617,13.146035344813725,14.094543854784419,16.474489595045846,20.190991639286864,25.095884779103983,30.993626403298073,37.64909216471243,44.7969496459762,52.15223632568004,59.42172013485348,66.31558969420752,72.55900817927409,77.90307019729995,82.13472485978934,85.08526944910724,86.63707506345948,86.7282761100076,85.35523669082727,82.57269555468477,78.4915838358618,73.27460257989506,67.12973636632354,50.0,41.48812424011885,33.31559010600692,25.808210743668454,19.265281677374336,13.94764884159106,10.067309476720517,7.778960468121134,7.173831069462885,8.276045880274033,11.041663074287499,15.360426221387726,21.060159863545003,27.913633606996168,35.64762108097684,43.95379261090823,52.50100734953196,60.94851481751492,68.95953954976001,76.21470727044299,82.42477733754596,87.34217385450285,90.77085573992461,92.57413226687088,92.68011249078043,91.08457131456593,87.85111792990173,83.10865991948216,77.04626411849102,69.90561911651753,50.0,40.64046590596008,31.65406690053173,23.39906235383946,16.20455324698665,10.357361954477149,6.090597541264167,3.5743624399488,2.908971003581449,4.120950288965979,7.161982506615914,11.91083129854566,18.17817504927991,25.71415454122379,34.21833405319196,43.3516787845326,52.75007110274312,62.03882676443846,70.8476323937504,78.82530870803186,85.65381092764586,91.06090821768123,94.83103667226646,96.81389316724554,96.9304274714292,95.17599372985487,91.62053567936331,86.40579821253093,79.73967645610466,71.88792764834952,50.0,40.16594266041288,30.72393815379261,22.05040940384992,14.491142630942264,8.347501946659754,3.8644149177054246,1.2206080767244742,0.5214816594518865,1.7949076299233226,4.990118513224132,9.97973133450811,16.564825976224434,24.48287549547571,33.418212244779525,43.01461254502685,52.889498199439124,62.64918867897859,71.90459592271034,80.28673605095327,87.46143958816714,93.1426737454095,97.10394564500217,99.18733187682479,99.30977440632,97.46639183622659,93.73067401248406,88.25155221598578,81.24746174238945,72.99763357619169,50.0,40.08347224783253,30.562285163731065,21.81601843089542,14.193358103523018,7.998195594170539,3.477512482120062,0.8115341372085112,0.10654470306635488,1.390649883710033,4.612656457815504,9.644113190902907,16.284431780703898,24.26888367978019,33.27915398731058,42.956031659686055,52.91373012126234,62.75526735771098,72.08829233618147,80.5407268028456,87.77559886871688,93.50447701548809,97.49896894996783,99.59982688407663,99.72329624162218,97.8644546889492,94.09740837284906,88.57233754234258,81.50950933607285,73.19049642658052,50.0,40.39634250331819,31.17555252493534,22.705233863404167,15.323071394123687,9.323368638983325,4.945314813673633,2.3634491084619427,1.6807023614666576,2.9242935309585363,6.044644561388807,10.917356904011314,17.348170894458654,25.080710272538788,33.80670309468669,43.17827156354607,52.821800817957936,62.352833778465204,71.39139823784626,79.57715515394509,86.58376423016655,92.13189407327525,96.00035825456254,98.0349333147652,98.15450716670583,96.35431277824465,92.7061182188077,87.3553654929361,80.51537222653369,72.45882736628496,50.0,41.09208027710281,32.53929120299129,24.682605488163617,17.835244398864475,12.270190613626788,8.209305265325213,5.814483037931787,5.181197936354131,6.334697039145439,9.228993977154339,13.74870226494457,19.713635395846197,26.885990309365177,34.979827848774256,43.67247225295857,52.617375220748954,61.45793169809319,69.84169659622883,77.43443566516719,83.93345035850342,89.07964546924102,92.66785843807261,94.55503853719173,94.66594985138768,92.99617069656433,89.61226989833168,84.64915290299878,78.30468352314823,70.83179573182372,50.0,42.1429486996731,34.59913324033108,27.669301738451594,21.629724707666703,16.721181025206356,13.139358837884927,11.027054093217394,10.468477715610561,11.48589838254992,14.03875474270118,18.025272468989222,23.286521679851074,29.612752972081672,36.75175946763703,44.41893150597714,52.308603133093854,60.10623803851256,67.50096912541414,74.19799180078715,79.93031690424165,84.46941472330082,87.63432575187022,89.29887497469508,89.39670206705026,87.92390697147472,84.93920538075542,80.5615879285438,74.96557640828885,68.37426614006755,50.0,43.507052963228276,37.27295923513341,31.54625245983417,26.555238364793478,22.498892931924857,19.538929853098548,17.79335351556371,17.331754539413197,18.172535419166312,20.28217687438481,23.57657415760771,27.9243900452247,33.15229083812295,39.05185662928454,45.38789034777231,51.90779432374076,58.35164056041478,64.46253324307091,69.99685036448858,74.73395616558454,78.48499718687086,81.10043125992328,82.47598928172872,82.55683209478212,81.33973675124133,78.87322500168683,75.25562888604546,70.63117054546314,65.18421254065669,50.0,45.13001053546031,40.45417218273137,36.158895861475294,32.415420684092325,29.372987192685674,27.152887609603642,25.843630299294354,25.497411219119474,26.128033031248087,27.710354834072838,30.1812944506203,33.44234331587958,37.36349370242759,41.78842171825822,46.54071944704817,51.43092777509326,56.26408952829909,60.84752179948924,64.99849760786827,68.55153064711779,71.36497270220701,73.32666071672935,74.35838838001031,74.41902396591979,73.50615012499424,71.65616025653136,68.94280761860614,65.47426501841332,61.388812303803384,50.0,46.947119219503094,44.015947161802195,41.32334040698952,38.97664468936749,37.069415361771114,35.67768763888148,34.85694531315941,34.639908791129244,35.03523063402599,36.02715060748358,37.57612399234472,39.62039810782318,42.07847419601486,44.8523565201912,47.83145914557917,50.897014651606504,53.9268090141677,56.80005389309647,59.40220208211842,61.62951414449074,63.39319417697629,64.62292982229404,65.26969540092043,65.30770641022242,64.73544747120982,63.575732741913555,61.8747963888992,59.70044937694641,57.13937605987293,50.0,48.88593662634188,47.81628744376123,46.83369598969436,45.97733508466828,45.281345135563264,44.77347306532684,44.473966130716335,44.39476472806589,44.53902636736469,44.90099979229783,45.46625426468642,46.21225487247996,47.109260925586774,48.121511623335785,49.20865172474953,50.327340384653624,51.43297901640389,52.481489296796916,53.43107042971896,54.24386561197696,54.88747126457781,55.3362288611674,55.572247852506194,55.5861189062105,55.37728902714178,54.95408360357771,54.33337450025384,53.53990743035885,52.60531542203933,50.0,50.869168224258146,51.70368545423406,52.470282121440015,53.138396435890165,53.68139278822404,54.077623627398154,54.31129248023336,54.37308370695182,54.26053388633777,53.97813002456758,53.537130672433115,52.955117082450045,52.25529229980091,51.46555613014512,50.61739286241024,49.744616089546916,48.88202066728282,48.06399555302636,47.323152826655424,46.68902754980599,46.186900296168034,45.83678929478992,45.65265236645743,45.64183046942551,45.80475503857834,46.13493078548203,46.61919464503732,47.238240545346734,47.96738907987725,50.0,52.81774882789219,55.52316290193693,58.008385900429865,60.17433982499577,61.934674927725055,63.21921220313056,63.976741203633644,64.17706163850524,63.8121873641547,62.896664766473044,61.4669928423312,59.58016809975406,57.31141228700839,54.75117353887537,52.001520494942504,49.17207314503944,46.37563262616939,43.723684197141324,41.3219526731134,39.26618751084651,37.638345580018104,36.503323801458066,35.90637191170924,35.87128849882528,36.399472227765756,37.46986608003796,39.03979683057493,41.04667629455571,43.41049652082578,50.0,54.65399467767878,59.122449274087984,63.22722060549268,66.80466439226475,69.71215923990229,71.83379250396055,73.08498136140244,73.41584486083653,72.81319251864052,71.30105018191833,68.93970219379399,65.82328804688954,62.07604933882852,57.847376651805774,53.30585382150457,48.63253703156497,44.01373667489795,39.63358974625642,35.66671888133241,32.27127070332551,29.582611016136532,27.707928196937424,26.721959933825918,26.664013670049485,27.536399540284894,29.30433827285866,31.897347729556362,35.21205280605396,39.11630667110829,50.0,56.3047004461958,62.358052381234536,67.91872776592288,72.76504002039921,76.70378196850024,79.57792839817417,81.27289616116343,81.72111224153772,80.90470767860015,78.85622994596147,75.65734538647666,71.43558343286846,66.35925241168692,60.63072962145773,54.47839318842824,48.14751735136307,41.890494151652014,35.956771359089025,30.58290777646854,25.983142386622436,22.340853320244825,19.801247148504373,18.465569955277672,18.38707097528553,19.568879715142383,21.963881189803292,25.476594248337708,29.966978106108925,35.25601532893332,50.0,57.70405770355575,65.10097893803068,71.89587179614104,77.81784534215834,82.63080917867106,86.14288562570309,88.21405927830942,88.76175897892702,87.76414966885864,85.26100288315845,81.3521111850359,76.19330975127403,69.99026371549763,62.9902689483094,55.47239315131622,47.73635030851528,40.09055203555417,32.83981218186413,26.273194864379086,20.65249039338788,16.20177851899031,13.098495078585103,11.466358189964026,11.370436000370603,12.814552624803952,15.74113569062147,20.033511566355898,25.520556771217066,31.98352012825963,50.0,58.79627849183488,67.24187711846227,75.00009651426616,81.76164095441291,87.25694899936121,91.26694005880634,93.63174844346672,94.25709670563036,93.11805418348536,90.2600309079331,85.79696724795585,79.9067914676651,72.82432628789651,64.83192724535616,56.248226068396434,47.4154278355073,38.68566833872741,30.406975540844197,22.909394798783467,16.491830996746934,11.410132151728128,7.866889560449927,6.003361123678005,5.893839839482425,7.54269197584965,10.88418300135654,15.785098213500817,22.050053588506564,29.42928512578228]}},"id":"312fecd1-5420-4769-b820-c492001df589","type":"ColumnDataSource"}],"root_ids":["57194011-43ba-4f38-b632-4933f8e99848"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"09a4563b-96c0-4a47-9acb-20878da30343","elementid":"7f099b13-3d50-4b1a-8c44-81629bde89a3","modelid":"57194011-43ba-4f38-b632-4933f8e99848"}];
                  
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