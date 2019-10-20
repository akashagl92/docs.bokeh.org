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
      };var element = document.getElementById("75e77d35-5b5a-42a1-9f4b-c2c90c9c4d87");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '75e77d35-5b5a-42a1-9f4b-c2c90c9c4d87' but no matching script tag was found. ")
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
                  var docs_json = {"f5c50eb8-c3ff-464c-bcc9-ad7c35c23ce4":{"roots":{"references":[{"attributes":{"children":[{"id":"8745dfe6-d41d-49de-9a45-369d45a5d1f3","type":"ToolbarBox"},{"id":"f1f13672-801c-4ada-9889-324d3c80fd11","type":"Column"}]},"id":"86122689-1776-4751-909d-c8c90d0016c6","type":"Column"},{"attributes":{"overlay":{"id":"37c3c1f4-01e5-4efe-ac43-4b425b4efb01","type":"BoxAnnotation"},"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"}},"id":"340f5a00-3da3-4e4a-92e9-98f21539cc20","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"}},"id":"247b4fc6-0078-4af6-a535-8aedb6c244e4","type":"PanTool"},{"attributes":{"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"}},"id":"4565d080-17f8-49ee-bf33-e661dcf40f47","type":"ResetTool"},{"attributes":{"callback":null},"id":"7ec2a04b-7611-4fab-a9e7-cf8d7509bfd7","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y1","y0","x"],"data":{"x":[0.0,0.04202799536574974,0.08405599073149948,0.12608398609724922,0.16811198146299897,0.21013997682874871,0.25216797219449844,0.2941959675602482,0.33622396292599793,0.3782519582917477,0.42027995365749743,0.4623079490232472,0.5043359443889969,0.5463639397547466,0.5883919351204964,0.6304199304862461,0.6724479258519959,0.7144759212177456,0.7565039165834954,0.7985319119492451,0.8405599073149949,0.8825879026807446,0.9246158980464944,0.9666438934122441,1.0086718887779937,1.0506998841437436,1.0927278795094932,1.134755874875243,1.1767838702409927,1.2188118656067426,1.2608398609724922,1.302867856338242,1.3448958517039917,1.3869238470697414,1.4289518424354912,1.4709798378012409,1.5130078331669907,1.5550358285327404,1.5970638238984902,1.6390918192642399,1.6811198146299897,1.7231478099957394,1.7651758053614892,1.8072038007272389,1.8492317960929887,1.8912597914587383,1.9332877868244882,1.9753157821902378,2.0173437775559875,2.0593717729217373,2.101399768287487,2.1434277636532366,2.1854557590189865,2.2274837543847363,2.269511749750486,2.3115397451162356,2.3535677404819855,2.3955957358477353,2.437623731213485,2.4796517265792346,2.5216797219449845,2.5637077173107343,2.605735712676484,2.6477637080422336,2.6897917034079835,2.7318196987737333,2.7738476941394827,2.8158756895052326,2.8579036848709825,2.8999316802367323,2.9419596756024817,2.9839876709682316,3.0260156663339814,3.0680436616997313,3.1100716570654807,3.1520996524312306,3.1941276477969804,3.2361556431627303,3.2781836385284797,3.3202116338942296,3.3622396292599794,3.404267624625729,3.4462956199914787,3.4883236153572286,3.5303516107229784,3.572379606088728,3.6144076014544777,3.6564355968202276,3.6984635921859774,3.740491587551727,3.7825195829174767,3.8245475782832266,3.8665755736489764,3.908603569014726,3.9506315643804757,3.9926595597462256,4.034687555111975,4.076715550477725,4.118743545843475,4.1607715412092245,4.202799536574974,4.244827531940724,4.286855527306473,4.328883522672223,4.370911518037973,4.412939513403723,4.454967508769473,4.4969955041352225,4.539023499500972,4.581051494866722,4.623079490232471,4.665107485598221,4.707135480963971,4.749163476329721,4.791191471695471,4.8332194670612205,4.87524746242697,4.917275457792719,4.959303453158469,5.001331448524219,5.043359443889969,5.085387439255719,5.127415434621469,5.1694434299872185,5.211471425352968,5.253499420718717,5.295527416084467,5.337555411450217,5.379583406815967,5.421611402181717,5.463639397547467,5.5056673929132165,5.5476953882789655,5.589723383644715,5.631751379010465,5.673779374376215,5.715807369741965,5.757835365107715,5.799863360473465,5.8418913558392145,5.8839193512049635,5.925947346570713,5.967975341936463,6.010003337302213,6.052031332667963,6.094059328033713,6.136087323399463,6.178115318765212,6.220143314130961,6.262171309496711,6.304199304862461,6.346227300228211,6.388255295593961,6.430283290959711,6.472311286325461,6.51433928169121,6.556367277056959,6.598395272422709,6.640423267788459,6.682451263154209,6.724479258519959,6.766507253885709,6.808535249251458,6.850563244617208,6.892591239982957,6.934619235348707,6.976647230714457,7.018675226080207,7.060703221445957,7.102731216811707,7.144759212177456,7.1867872075432055,7.228815202908955,7.270843198274705,7.312871193640455,7.354899189006205,7.396927184371955,7.438955179737704,7.480983175103454,7.5230111704692035,7.565039165834953,7.607067161200703,7.649095156566453,7.691123151932203,7.733151147297953,7.775179142663702,7.817207138029452,7.8592351333952015,7.901263128760951,7.943291124126701,7.985319119492451,8.0273471148582,8.06937511022395,8.1114031055897,8.15343110095545,8.1954590963212,8.23748709168695,8.2795150870527,8.321543082418449,8.363571077784199,8.405599073149949,8.447627068515699,8.489655063881449,8.531683059247198,8.573711054612946,8.615739049978696,8.657767045344446,8.699795040710196,8.741823036075946,8.783851031441696,8.825879026807446,8.867907022173195,8.909935017538945,8.951963012904695,8.993991008270445,9.036019003636195,9.078046999001945,9.120074994367695,9.162102989733445,9.204130985099193,9.246158980464942,9.288186975830692,9.330214971196442,9.372242966562192,9.414270961927942,9.456298957293692,9.498326952659442,9.540354948025191,9.582382943390941,9.624410938756691,9.666438934122441,9.708466929488191,9.75049492485394,9.79252292021969,9.834550915585439,9.876578910951189,9.918606906316938,9.960634901682688,10.002662897048438,10.044690892414188,10.086718887779938,10.128746883145688,10.170774878511438,10.212802873877187,10.254830869242937,10.296858864608687,10.338886859974437,10.380914855340187,10.422942850705937,10.464970846071685,10.506998841437435,10.549026836803185,10.591054832168934,10.633082827534684,10.675110822900434,10.717138818266184,10.759166813631934,10.801194808997684,10.843222804363434,10.885250799729183,10.927278795094933,10.969306790460683,11.011334785826433,11.053362781192183,11.095390776557931,11.13741877192368,11.17944676728943,11.22147476265518,11.26350275802093,11.30553075338668,11.34755874875243,11.38958674411818,11.43161473948393,11.47364273484968,11.51567073021543,11.55769872558118,11.59972672094693,11.641754716312679,11.683782711678429,11.725810707044177,11.767838702409927,11.809866697775677,11.851894693141427,11.893922688507176,11.935950683872926,11.977978679238676,12.020006674604426,12.062034669970176,12.104062665335926,12.146090660701676,12.188118656067426,12.230146651433175,12.272174646798925,12.314202642164675,12.356230637530423,12.398258632896173,12.440286628261923,12.482314623627673,12.524342618993423,12.566370614359172],"y0":[0.0,0.04201562375005714,0.08395704402592023,0.12575018840358776,0.1673212463279966,0.20859679946928297,0.24950395138633757,0.2899704562686571,0.32992484652912146,0.36929655902235725,0.408016059665773,0.44601496624317477,0.483226169174079,0.5195839500354336,0.5550240976264252,0.5894840213713949,0.6229028618605774,0.6552215983334436,0.6863831529148176,0.7163324914196784,0.7450167205486168,0.7723851813022902,0.7983895384498959,0.8229838658936565,0.8461247277785513,0.867771255204052,0.8878852184023752,0.9064310942557878,0.9233761290337134,0.9386903962388486,0.9523468494601222,0.9643213701391566,0.9745928101658707,0.9831430292279966,0.9899569268485472,0.9950224690546545,0.9983307096306772,0.9998758059180444,0.9996550291339309,0.9976687691905392,0.9939205340064791,0.988416943311459,0.9811677169552314,0.9721856577414404,0.9614866288166868,0.9490895256547461,0.9350162426854148,0.9192916346269248,0.9019434725902137,0.8830023950325767,0.8625018536473203,0.84047805428498,0.8169698930104421,0.7920188874088998,0.7656691032619608,0.7379670767234044,0.7089617321320334,0.6787042956067718,0.647248204576604,0.6146490134051379,0.5809642952764631,0.5462535405155903,0.5105780515230376,0.4740008345091279,0.43658648821919677,0.3984010898462414,0.35951207833249027,0.319988135265998,0.27989906358261646,0.23931566428755768,0.19830961141427728,0.1569533254415059,0.11531984539199412,0.07348269983884703,0.03151577704727028,-0.0105068055189361,-0.052510832095665226,-0.09442211969040283,-0.1361666490962464,-0.1776706956166664,-0.21886095927013058,-0.2596646942446463,-0.3000098373735883,-0.33982513540590753,-0.37904027084595904,-0.4175859861406961,-0.4553942059949107,-0.49239815759849354,-0.5285324885533883,-0.5637333822919653,-0.5979386707829789,-0.6310879443260528,-0.6631226582407953,-0.6939862362621142,-0.7236241704591302,-0.7519841175012184,-0.7790159911011677,-0.8046720504721937,-0.828906984642578,-0.8516779924790325,-0.8729448582774559,-0.8926700227875833,-0.9108186495460929,-0.9273586864010207,-0.9422609221188204,-0.9554990379741032,-0.9670496542309384,-0.9768923714336271,-0.9850098064340269,-0.9913876230917974,-0.9960145575933486,-0.9988824383447774,-0.9999862004036565,-0.9993238944241918,-0.9968966900999463,-0.992708874098054,-0.9867678424885691,-0.979084087682323,-0.9696711799003568,-0.9585457432076577,-0.9457274261535233,-0.931238867070408,-0.9151056540925363,-0.8973562799648924,-0.8780220917224003,-0.8571372353281633,-0.8347385953685361,-0.8108657299115397,-0.7855608006436556,-0.758868498408392,-0.730835964278124,-0.7015127062986041,-0.6709505120531783,-0.6392033572011264,-0.6063273101516626,-0.5723804330419425,-0.5374226791939626,-0.5015157872314542,-0.4647231720437684,-0.4271098127893215,-0.38874213813639713,-0.34968790894397633,-0.31001609858980345,-0.2697967711570244,-0.22910095769454164,-0.18800053076961812,-0.14656807753428164,-0.10487677152970748,-0.06300024345497934,-0.02101245112847572,0.021012451128475232,0.06300024345497886,0.104876771529707,0.14656807753428203,0.1880005307696185,0.22910095769454117,0.26979677115702394,0.310016098589803,0.34968790894397583,0.3887421381363967,0.42710981278932186,0.46472317204376873,0.5015157872314537,0.5374226791939621,0.5723804330419421,0.6063273101516623,0.639203357201126,0.670950512053178,0.7015127062986044,0.7308359642781243,0.7588684984083917,0.7855608006436553,0.8108657299115395,0.8347385953685359,0.8571372353281631,0.8780220917224005,0.8973562799648926,0.9151056540925362,0.9312388670704079,0.9457274261535231,0.9585457432076576,0.9696711799003567,0.9790840876823229,0.9867678424885691,0.992708874098054,0.9968966900999462,0.9993238944241917,0.9999862004036565,0.9988824383447774,0.9960145575933487,0.9913876230917974,0.985009806434027,0.9768923714336272,0.9670496542309385,0.9554990379741034,0.9422609221188206,0.9273586864010209,0.9108186495460932,0.8926700227875832,0.8729448582774557,0.8516779924790323,0.8289069846425777,0.8046720504721935,0.7790159911011675,0.751984117501219,0.7236241704591309,0.6939862362621149,0.6631226582407956,0.6310879443260532,0.5979386707829794,0.5637333822919658,0.5285324885533883,0.49239815759849354,0.45539420599491076,0.4175859861406961,0.37904027084595865,0.3398251354059072,0.3000098373735879,0.2596646942446459,0.21886095927013147,0.17767069561666732,0.13616664909624734,0.09442211969040332,0.05251083209566571,0.010506805518936591,-0.03151577704726979,-0.07348269983884699,-0.11531984539199408,-0.15695332544150586,-0.19830961141427725,-0.23931566428755807,-0.2798990635826168,-0.3199881352659984,-0.35951207833249066,-0.39840108984624056,-0.43658648821919593,-0.47400083450912706,-0.5105780515230371,-0.5462535405155898,-0.5809642952764628,-0.6146490134051376,-0.647248204576604,-0.6787042956067718,-0.7089617321320334,-0.7379670767234043,-0.765669103261961,-0.7920188874089001,-0.8169698930104423,-0.8404780542849802,-0.8625018536473198,-0.8830023950325763,-0.9019434725902132,-0.9192916346269244,-0.9350162426854146,-0.949089525654746,-0.9614866288166868,-0.9721856577414403,-0.9811677169552314,-0.988416943311459,-0.9939205340064792,-0.9976687691905393,-0.9996550291339309,-0.9998758059180444,-0.9983307096306772,-0.9950224690546546,-0.9899569268485473,-0.9831430292279967,-0.9745928101658708,-0.9643213701391568,-0.9523468494601224,-0.9386903962388488,-0.9233761290337135,-0.9064310942557878,-0.8878852184023752,-0.8677712552040519,-0.8461247277785513,-0.8229838658936562,-0.7983895384498956,-0.7723851813022897,-0.7450167205486176,-0.7163324914196789,-0.6863831529148181,-0.6552215983334442,-0.6229028618605779,-0.5894840213713953,-0.5550240976264256,-0.5195839500354338,-0.4832261691740792,-0.44601496624317477,-0.40801605966577287,-0.36929655902235703,-0.32992484652912113,-0.28997045626865664,-0.24950395138633705,-0.20859679946928403,-0.16732124632799755,-0.12575018840358862,-0.08395704402592095,-0.04201562375005775,-4.898587196589413e-16],"y1":[1.0,0.9991169537951469,0.9964693747217873,0.9920619386492268,0.9859024295168594,0.9780017255870113,0.9683737802329243,0.9570355972958094,0.9440072010544918,0.9293116008606837,0.9129747505023434,0.8950255023668877,0.8754955564852082,0.8544194045464886,0.8318342689826936,0.8077800372303148,0.7822991912854713,0.7554367326767791,0.7272401029884932,0.6977591000742853,0.6670457901096327,0.635154415638141,0.6021412997741993,0.5680647467311558,0.5329849388506888,0.4969638303152295,0.4600650377311522,0.42235372777596647,0.3838965021079446,0.344761279741437,0.3050171770956176,0.2647343859284994,0.2239840493718048,0.18283813628561943,0.14136931415473494,0.0996508207511566,0.05775633478942844,0.01575984580321643,-0.026264476527047,-0.06824241336467088,-0.1100998277940316,-0.1517627957532151,-0.19315773659074326,-0.23421154301580224,-0.2748517102124756,-0.3150064638899478,-0.3546048870425357,-0.3935770451956728,-0.43185410991665524,-0.4693684803720136,-0.5060539027168316,-0.5418455871051587,-0.5766803221148671,-0.6104965863848613,-0.6432346572674896,-0.6748367163042576,-0.7052469513385697,-0.7344116550851543,-0.7622793199820932,-0.7888007291579354,-0.8139290433532413,-0.8376198836430415,-0.8598314098141207,-0.8805243942586999,-0.8996622912540178,-0.917211301505453,-0.9331404318392025,-0.9474215499390909,-0.9600294340308397,-0.970941817426052,-0.9801394278472417,-0.9876060214644566,-0.9933284115833829,-0.9972964919342662,-0.9995032545205177,-0.9999448019954837,-0.9986203545455203,-0.995532251267216,-0.9906859460363308,-0.9840899978757481,-0.9757560558394491,-0.9656988384392073,-0.9539361076503359,-0.9404886375423983,-0.9253801775902821,-0.9086374107304312,-0.890289906236314,-0.8703700674963548,-0.8489130747865546,-0.8259568231388738,-0.801541855415102,-0.7757112907044198,-0.748510748171101,-0.719988266486854,-0.6901942189900866,-0.6591812247219377,-0.6270040554961869,-0.5937195391671689,-0.5593864592665334,-0.5240654511860948,-0.4878188950901271,-0.45071080574622946,-0.4128067194693316,-0.37417357837850246,-0.3348796121709864,-0.29499421762224975,-0.2545878360248632,-0.21373182878266958,-0.1724983513799503,-0.13096022594817197,-0.08919081265537408,-0.04726388014532912,-0.005253475255306219,0.036766207757489656,0.07872095824983134,0.1205366802553232,0.16213952334472495,0.2034560130526333,0.24441318064018117,0.2849386919645683,0.32496097522784506,0.36440934737932124,0.4032141389483648,0.4413068170871254,0.4786201066058767,0.5150881087872179,0.5506464177693007,0.5852322342925292,0.6187844766088584,0.6512438883578044,0.6825531432186542,0.7126569461540443,0.7415021310661067,0.7690377546927128,0.7952151865779787,0.819988194958146,0.8433130284111489,0.8651484931256684,0.88545602565321,0.9041997610147167,0.9213465960414366,0.9368662478381796,0.9507313072657054,0.9629172873477992,0.9734026665175332,0.9821689266263426,0.9892005856487878,0.9944852250252416,0.9980135115942135,0.9997792140755745,0.9997792140755745,0.9980135115942136,0.9944852250252417,0.9892005856487878,0.9821689266263425,0.9734026665175333,0.9629172873477994,0.9507313072657056,0.9368662478381797,0.9213465960414369,0.9041997610147166,0.8854560256532098,0.8651484931256687,0.8433130284111492,0.8199881949581462,0.795215186577979,0.7690377546927132,0.7415021310661071,0.7126569461540441,0.6825531432186539,0.6512438883578048,0.6187844766088587,0.5852322342925297,0.5506464177693011,0.5150881087872183,0.47862010660587634,0.441306817087125,0.4032141389483652,0.3644093473793217,0.32496097522784556,0.2849386919645687,0.24441318064018164,0.20345601305263378,0.16213952334472456,0.12053668025532281,0.07872095824983183,0.03676620775749015,-0.005253475255305729,-0.04726388014532863,-0.0891908126553736,-0.1309602259481724,-0.1724983513799498,-0.2137318287826691,-0.25458783602486273,-0.29499421762224926,-0.33487961217098594,-0.374173578378502,-0.4128067194693312,-0.45071080574622985,-0.4878188950901275,-0.5240654511860952,-0.5593864592665337,-0.5937195391671691,-0.6270040554961872,-0.6591812247219371,-0.6901942189900859,-0.7199882664868533,-0.7485107481711006,-0.7757112907044195,-0.8015418554151018,-0.8259568231388735,-0.8489130747865546,-0.8703700674963547,-0.890289906236314,-0.9086374107304312,-0.9253801775902822,-0.9404886375423984,-0.953936107650336,-0.9656988384392075,-0.975756055839449,-0.9840899978757479,-0.9906859460363306,-0.9955322512672159,-0.9986203545455203,-0.9999448019954837,-0.9995032545205177,-0.9972964919342662,-0.9933284115833829,-0.9876060214644566,-0.9801394278472417,-0.9709418174260519,-0.9600294340308396,-0.9474215499390908,-0.9331404318392024,-0.9172113015054534,-0.8996622912540182,-0.8805243942587003,-0.859831409814121,-0.8376198836430417,-0.8139290433532416,-0.7888007291579358,-0.7622793199820933,-0.7344116550851544,-0.7052469513385697,-0.6748367163042576,-0.6432346572674893,-0.6104965863848609,-0.5766803221148668,-0.5418455871051584,-0.5060539027168324,-0.46936848037201445,-0.43185410991665607,-0.39357704519567344,-0.3546048870425361,-0.31500646388994824,-0.2748517102124759,-0.2342115430158025,-0.1931577365907433,-0.15176279575321514,-0.11009982779403144,-0.06824241336467071,-0.026264476527046603,0.015759845803216828,0.057756334789429056,0.09965082075115546,0.141369314154734,0.18283813628561849,0.2239840493718041,0.2647343859284989,0.30501717709561715,0.3447612797414368,0.3838965021079444,0.4223537277759664,0.46006503773115215,0.4969638303152296,0.5329849388506889,0.5680647467311561,0.6021412997741997,0.6351544156381415,0.6670457901096319,0.6977591000742847,0.7272401029884926,0.7554367326767787,0.7822991912854709,0.8077800372303146,0.8318342689826934,0.8544194045464885,0.8754955564852082,0.8950255023668877,0.9129747505023436,0.9293116008606838,0.9440072010544919,0.9570355972958097,0.9683737802329245,0.978001725587011,0.9859024295168592,0.9920619386492266,0.9964693747217872,0.9991169537951469,1.0]}},"id":"dde7a7b5-2af3-4ead-af2e-4c5a038cfb9d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"0e686458-d4ab-4ac8-b854-5154da9718eb","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37c3c1f4-01e5-4efe-ac43-4b425b4efb01","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"bcf71a55-4e7e-4c5d-9705-79bd8f7dfe2a","type":"BasicTickFormatter"},"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"},"ticker":{"id":"1df24a54-ee03-42dc-8cde-99a56725b0bb","type":"BasicTicker"}},"id":"6013a220-5af9-4b01-9296-8b88641b6347","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"12f855fc-54af-46ae-b859-919099e3edd7","type":"BoxAnnotation"},"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"},"renderers":[{"id":"2693693c-2383-4861-9e9f-c16139328d73","type":"GlyphRenderer"}]},"id":"f6090ab8-09d7-492e-a42c-3e1cc669bd85","type":"BoxSelectTool"},{"attributes":{},"id":"fe2f05f1-5a1f-4ddc-b486-854cc17eb605","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"eb1371e3-ea9d-4263-95ad-13c108267250","type":"Circle"},{"attributes":{"callback":null},"id":"24216755-abea-4c5c-b573-356197f864ba","type":"DataRange1d"},{"attributes":{"data_source":{"id":"dde7a7b5-2af3-4ead-af2e-4c5a038cfb9d","type":"ColumnDataSource"},"glyph":{"id":"10278189-5e25-4323-840b-91425d3d9c0d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"eb1371e3-ea9d-4263-95ad-13c108267250","type":"Circle"},"selection_glyph":null},"id":"436e9e54-2956-4272-b82a-4c12d8ac397b","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"},"ticker":{"id":"a512ee54-01e3-4927-a427-75073a125d3d","type":"BasicTicker"}},"id":"90c02f8e-468d-4d03-a738-dd8064ad99c9","type":"Grid"},{"attributes":{"formatter":{"id":"ea48b5fa-b2f6-4df2-9043-20d2c34031c2","type":"BasicTickFormatter"},"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"},"ticker":{"id":"a512ee54-01e3-4927-a427-75073a125d3d","type":"BasicTicker"}},"id":"ac4639f5-3852-4d27-b312-6947096a2bba","type":"LinearAxis"},{"attributes":{},"id":"1df24a54-ee03-42dc-8cde-99a56725b0bb","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fe2f05f1-5a1f-4ddc-b486-854cc17eb605","type":"BasicTickFormatter"},"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"},"ticker":{"id":"13af7d64-b5e9-40bd-92e8-4bf1eb4f4882","type":"BasicTicker"}},"id":"c11d5f06-c567-4295-95cd-4fd2daca78c0","type":"LinearAxis"},{"attributes":{},"id":"a512ee54-01e3-4927-a427-75073a125d3d","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"03db2818-0dc4-4a6e-a2e2-132f02a408f5","type":"Title"},{"attributes":{"overlay":{"id":"53fa8169-5903-445a-8a80-0d691c62422b","type":"BoxAnnotation"},"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"}},"id":"daa768e2-035b-4bf5-813e-4854b4bffc2e","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"d12d3f44-4d7b-4e6f-9213-d9a71ff4ff66","type":"PolyAnnotation"},"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"}},"id":"52e0b423-abac-4d62-80b2-3d155c2df10b","type":"LassoSelectTool"},{"attributes":{"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"},"ticker":{"id":"13af7d64-b5e9-40bd-92e8-4bf1eb4f4882","type":"BasicTicker"}},"id":"28231561-0345-4bdf-86b9-b9659ac38d4d","type":"Grid"},{"attributes":{},"id":"bcf71a55-4e7e-4c5d-9705-79bd8f7dfe2a","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"d12d3f44-4d7b-4e6f-9213-d9a71ff4ff66","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53fa8169-5903-445a-8a80-0d691c62422b","type":"BoxAnnotation"},{"attributes":{},"id":"ea48b5fa-b2f6-4df2-9043-20d2c34031c2","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5ab7be93-1aa9-44e2-8e2c-8d323c08ba98","type":"BasicTickFormatter"},"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"},"ticker":{"id":"31f164c2-999b-4564-9ce6-84a01b71ecde","type":"BasicTicker"}},"id":"546275f6-a365-4776-9994-9fb52fe3eed1","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12f855fc-54af-46ae-b859-919099e3edd7","type":"BoxAnnotation"},{"attributes":{},"id":"f88527cc-55a2-4d8d-8dee-ff6ba228b531","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b2000385-c22f-48e1-8d64-174c5784c3c2","type":"BoxAnnotation"},{"attributes":{},"id":"9917dc27-a44e-4f02-9fbb-7dfccdb802c9","type":"ToolEvents"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"79ab6b2e-af5b-498f-9a7a-1900c4610b95","type":"PanTool"},{"id":"ff2d5405-dc67-4a06-9a6f-0f62b2cf1162","type":"WheelZoomTool"},{"id":"daa768e2-035b-4bf5-813e-4854b4bffc2e","type":"BoxZoomTool"},{"id":"ac23c49f-fd0e-47bc-9e10-9cbd181983be","type":"ResetTool"},{"id":"5df54ead-a205-4745-8c36-8368f1ae9002","type":"SaveTool"},{"id":"f6090ab8-09d7-492e-a42c-3e1cc669bd85","type":"BoxSelectTool"},{"id":"6ea078b9-344c-4857-aac1-da63e63844a1","type":"LassoSelectTool"},{"id":"247b4fc6-0078-4af6-a535-8aedb6c244e4","type":"PanTool"},{"id":"fda34713-2a12-48ff-a501-a75f56f79077","type":"WheelZoomTool"},{"id":"340f5a00-3da3-4e4a-92e9-98f21539cc20","type":"BoxZoomTool"},{"id":"4565d080-17f8-49ee-bf33-e661dcf40f47","type":"ResetTool"},{"id":"00a9f556-3634-4923-8af3-0aceaa34ef95","type":"SaveTool"},{"id":"cea9304d-aabf-451f-82cc-c58b616d841c","type":"BoxSelectTool"},{"id":"52e0b423-abac-4d62-80b2-3d155c2df10b","type":"LassoSelectTool"}]},"id":"8745dfe6-d41d-49de-9a45-369d45a5d1f3","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"dde7a7b5-2af3-4ead-af2e-4c5a038cfb9d","type":"ColumnDataSource"},"glyph":{"id":"68c24c1e-e5c9-4698-80bc-0f46690e4948","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0e686458-d4ab-4ac8-b854-5154da9718eb","type":"Circle"},"selection_glyph":null},"id":"2693693c-2383-4861-9e9f-c16139328d73","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d8808b02-fa4d-47a5-8482-84522ad970b2","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"68c24c1e-e5c9-4698-80bc-0f46690e4948","type":"Circle"},{"attributes":{"callback":null},"id":"76c5c5a7-757d-421d-b8d2-d05bedb53001","type":"DataRange1d"},{"attributes":{"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"}},"id":"00a9f556-3634-4923-8af3-0aceaa34ef95","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"247b4fc6-0078-4af6-a535-8aedb6c244e4","type":"PanTool"},{"id":"fda34713-2a12-48ff-a501-a75f56f79077","type":"WheelZoomTool"},{"id":"340f5a00-3da3-4e4a-92e9-98f21539cc20","type":"BoxZoomTool"},{"id":"4565d080-17f8-49ee-bf33-e661dcf40f47","type":"ResetTool"},{"id":"00a9f556-3634-4923-8af3-0aceaa34ef95","type":"SaveTool"},{"id":"cea9304d-aabf-451f-82cc-c58b616d841c","type":"BoxSelectTool"},{"id":"52e0b423-abac-4d62-80b2-3d155c2df10b","type":"LassoSelectTool"}]},"id":"52250aab-8617-4c28-9766-93bae470eac8","type":"Toolbar"},{"attributes":{"children":[{"id":"6086c2df-d931-4198-80f2-944c3401d7f6","type":"Row"}]},"id":"f1f13672-801c-4ada-9889-324d3c80fd11","type":"Column"},{"attributes":{"plot":null,"text":null},"id":"8697067a-3d62-4d15-a713-9d93091a1050","type":"Title"},{"attributes":{"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"}},"id":"79ab6b2e-af5b-498f-9a7a-1900c4610b95","type":"PanTool"},{"attributes":{"children":[{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"},{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"}]},"id":"6086c2df-d931-4198-80f2-944c3401d7f6","type":"Row"},{"attributes":{},"id":"31f164c2-999b-4564-9ce6-84a01b71ecde","type":"BasicTicker"},{"attributes":{},"id":"5ab7be93-1aa9-44e2-8e2c-8d323c08ba98","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"}},"id":"fda34713-2a12-48ff-a501-a75f56f79077","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"dc50d559-80f5-414f-8f7e-c93fc93d8c8d","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"c11d5f06-c567-4295-95cd-4fd2daca78c0","type":"LinearAxis"}],"left":[{"id":"6013a220-5af9-4b01-9296-8b88641b6347","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"c11d5f06-c567-4295-95cd-4fd2daca78c0","type":"LinearAxis"},{"id":"28231561-0345-4bdf-86b9-b9659ac38d4d","type":"Grid"},{"id":"6013a220-5af9-4b01-9296-8b88641b6347","type":"LinearAxis"},{"id":"ce35fab3-eb46-424d-ac19-542d402871cf","type":"Grid"},{"id":"37c3c1f4-01e5-4efe-ac43-4b425b4efb01","type":"BoxAnnotation"},{"id":"b2000385-c22f-48e1-8d64-174c5784c3c2","type":"BoxAnnotation"},{"id":"d12d3f44-4d7b-4e6f-9213-d9a71ff4ff66","type":"PolyAnnotation"},{"id":"436e9e54-2956-4272-b82a-4c12d8ac397b","type":"GlyphRenderer"}],"title":{"id":"03db2818-0dc4-4a6e-a2e2-132f02a408f5","type":"Title"},"tool_events":{"id":"f88527cc-55a2-4d8d-8dee-ff6ba228b531","type":"ToolEvents"},"toolbar":{"id":"52250aab-8617-4c28-9766-93bae470eac8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"24216755-abea-4c5c-b573-356197f864ba","type":"DataRange1d"},"y_range":{"id":"7ec2a04b-7611-4fab-a9e7-cf8d7509bfd7","type":"DataRange1d"}},"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"dc50d559-80f5-414f-8f7e-c93fc93d8c8d","type":"PolyAnnotation"},"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"}},"id":"6ea078b9-344c-4857-aac1-da63e63844a1","type":"LassoSelectTool"},{"attributes":{},"id":"13af7d64-b5e9-40bd-92e8-4bf1eb4f4882","type":"BasicTicker"},{"attributes":{"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"}},"id":"ac23c49f-fd0e-47bc-9e10-9cbd181983be","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"79ab6b2e-af5b-498f-9a7a-1900c4610b95","type":"PanTool"},{"id":"ff2d5405-dc67-4a06-9a6f-0f62b2cf1162","type":"WheelZoomTool"},{"id":"daa768e2-035b-4bf5-813e-4854b4bffc2e","type":"BoxZoomTool"},{"id":"ac23c49f-fd0e-47bc-9e10-9cbd181983be","type":"ResetTool"},{"id":"5df54ead-a205-4745-8c36-8368f1ae9002","type":"SaveTool"},{"id":"f6090ab8-09d7-492e-a42c-3e1cc669bd85","type":"BoxSelectTool"},{"id":"6ea078b9-344c-4857-aac1-da63e63844a1","type":"LassoSelectTool"}]},"id":"9804a401-bc32-4ed1-8fcc-9467f52de26d","type":"Toolbar"},{"attributes":{"below":[{"id":"546275f6-a365-4776-9994-9fb52fe3eed1","type":"LinearAxis"}],"left":[{"id":"ac4639f5-3852-4d27-b312-6947096a2bba","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"546275f6-a365-4776-9994-9fb52fe3eed1","type":"LinearAxis"},{"id":"e4194af8-e400-4e03-808e-1303df51753e","type":"Grid"},{"id":"ac4639f5-3852-4d27-b312-6947096a2bba","type":"LinearAxis"},{"id":"90c02f8e-468d-4d03-a738-dd8064ad99c9","type":"Grid"},{"id":"53fa8169-5903-445a-8a80-0d691c62422b","type":"BoxAnnotation"},{"id":"12f855fc-54af-46ae-b859-919099e3edd7","type":"BoxAnnotation"},{"id":"dc50d559-80f5-414f-8f7e-c93fc93d8c8d","type":"PolyAnnotation"},{"id":"2693693c-2383-4861-9e9f-c16139328d73","type":"GlyphRenderer"}],"title":{"id":"8697067a-3d62-4d15-a713-9d93091a1050","type":"Title"},"tool_events":{"id":"9917dc27-a44e-4f02-9fbb-7dfccdb802c9","type":"ToolEvents"},"toolbar":{"id":"9804a401-bc32-4ed1-8fcc-9467f52de26d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"76c5c5a7-757d-421d-b8d2-d05bedb53001","type":"DataRange1d"},"y_range":{"id":"d8808b02-fa4d-47a5-8482-84522ad970b2","type":"DataRange1d"}},"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"10278189-5e25-4323-840b-91425d3d9c0d","type":"Circle"},{"attributes":{"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"}},"id":"5df54ead-a205-4745-8c36-8368f1ae9002","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"},"ticker":{"id":"1df24a54-ee03-42dc-8cde-99a56725b0bb","type":"BasicTicker"}},"id":"ce35fab3-eb46-424d-ac19-542d402871cf","type":"Grid"},{"attributes":{"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"}},"id":"ff2d5405-dc67-4a06-9a6f-0f62b2cf1162","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"b2000385-c22f-48e1-8d64-174c5784c3c2","type":"BoxAnnotation"},"plot":{"id":"ad72c3da-812b-408b-91d9-1c73cf07402d","subtype":"Figure","type":"Plot"},"renderers":[{"id":"436e9e54-2956-4272-b82a-4c12d8ac397b","type":"GlyphRenderer"}]},"id":"cea9304d-aabf-451f-82cc-c58b616d841c","type":"BoxSelectTool"},{"attributes":{"plot":{"id":"f077a6d2-2174-447f-855b-3bb169ae7efd","subtype":"Figure","type":"Plot"},"ticker":{"id":"31f164c2-999b-4564-9ce6-84a01b71ecde","type":"BasicTicker"}},"id":"e4194af8-e400-4e03-808e-1303df51753e","type":"Grid"}],"root_ids":["86122689-1776-4751-909d-c8c90d0016c6"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"f5c50eb8-c3ff-464c-bcc9-ad7c35c23ce4","elementid":"75e77d35-5b5a-42a1-9f4b-c2c90c9c4d87","modelid":"86122689-1776-4751-909d-c8c90d0016c6"}];
                  
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