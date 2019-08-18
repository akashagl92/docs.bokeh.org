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
      };var element = document.getElementById("41526e9f-fbe9-4a83-a0a6-fee9a6dadff3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '41526e9f-fbe9-4a83-a0a6-fee9a6dadff3' but no matching script tag was found. ")
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
                  var docs_json = {"6e18e411-8d5a-42f5-9a09-6905d1a56591":{"roots":{"references":[{"attributes":{"formatter":{"id":"0b4d9008-7b96-4253-b097-a80a72892ba6","type":"BasicTickFormatter"},"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5c59f1d-2d4e-486a-82d1-ea7258c63d89","type":"BasicTicker"}},"id":"bc8c51f4-6868-444a-92c2-dc1d80bcbd88","type":"LinearAxis"},{"attributes":{"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"}},"id":"6480b964-512c-445a-acfe-894e623718d0","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"08c21027-5a33-426e-9123-8011a8a6e595","type":"Square"},{"attributes":{},"id":"28f8f242-51cb-4032-8ee5-1cfbfb7e067f","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d43df15a-9730-41c9-8c32-db8c4f6df31e","type":"DataRange1d"},{"attributes":{"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"}},"id":"101f21c2-f1ae-4275-ba79-d8460e84bdf7","type":"SaveTool"},{"attributes":{},"id":"a703f5bb-36bf-446c-8117-afbdc944c4a9","type":"ToolEvents"},{"attributes":{"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"}},"id":"3213f304-bcf2-47f3-b352-3737a027efac","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"92d939ae-8e4b-4766-b8a2-f620f92301d9","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"8c9733b2-3e1b-4d70-901f-ae60341ad97e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8c9733b2-3e1b-4d70-901f-ae60341ad97e","type":"ColumnDataSource"},"glyph":{"id":"92d939ae-8e4b-4766-b8a2-f620f92301d9","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"08c21027-5a33-426e-9123-8011a8a6e595","type":"Square"},"selection_glyph":null},"id":"29f34784-d879-4bdb-9df6-4fd2ba9c70c4","type":"GlyphRenderer"},{"attributes":{},"id":"a5c59f1d-2d4e-486a-82d1-ea7258c63d89","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5c59f1d-2d4e-486a-82d1-ea7258c63d89","type":"BasicTicker"}},"id":"17a7e7c3-e46a-4a4d-b870-3f584f0f69d8","type":"Grid"},{"attributes":{"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"}},"id":"952da2f4-d275-434f-a0ac-70768466c336","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b211b196-4e72-4948-8467-219d5dc804bd","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"2a5525f6-400f-4004-ade2-d6baa7954d1e","type":"LinearAxis"}],"left":[{"id":"bc8c51f4-6868-444a-92c2-dc1d80bcbd88","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2a5525f6-400f-4004-ade2-d6baa7954d1e","type":"LinearAxis"},{"id":"87d21656-8a91-4062-99cd-3fc5a2eec4e9","type":"Grid"},{"id":"bc8c51f4-6868-444a-92c2-dc1d80bcbd88","type":"LinearAxis"},{"id":"17a7e7c3-e46a-4a4d-b870-3f584f0f69d8","type":"Grid"},{"id":"b211b196-4e72-4948-8467-219d5dc804bd","type":"BoxAnnotation"},{"id":"29f34784-d879-4bdb-9df6-4fd2ba9c70c4","type":"GlyphRenderer"}],"title":{"id":"3857a782-5084-4eae-8a86-b3b31cb9f11d","type":"Title"},"tool_events":{"id":"a703f5bb-36bf-446c-8117-afbdc944c4a9","type":"ToolEvents"},"toolbar":{"id":"84a6c281-5bfe-4cb1-908b-633ddd0da11c","type":"Toolbar"},"x_range":{"id":"d43df15a-9730-41c9-8c32-db8c4f6df31e","type":"DataRange1d"},"y_range":{"id":"44d02cf5-ef14-40f1-8146-c6e50fce0396","type":"DataRange1d"}},"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":null},"id":"3857a782-5084-4eae-8a86-b3b31cb9f11d","type":"Title"},{"attributes":{"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"788b5541-a9ad-44ba-997b-de8d9434082d","type":"BasicTicker"}},"id":"87d21656-8a91-4062-99cd-3fc5a2eec4e9","type":"Grid"},{"attributes":{},"id":"0b4d9008-7b96-4253-b097-a80a72892ba6","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"28f8f242-51cb-4032-8ee5-1cfbfb7e067f","type":"BasicTickFormatter"},"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"788b5541-a9ad-44ba-997b-de8d9434082d","type":"BasicTicker"}},"id":"2a5525f6-400f-4004-ade2-d6baa7954d1e","type":"LinearAxis"},{"attributes":{},"id":"788b5541-a9ad-44ba-997b-de8d9434082d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dcb3a029-f5d5-4507-9ede-72906b55f20c","type":"PanTool"},{"id":"6480b964-512c-445a-acfe-894e623718d0","type":"WheelZoomTool"},{"id":"441e7f3b-dc43-49ac-a782-007f548eecfd","type":"BoxZoomTool"},{"id":"101f21c2-f1ae-4275-ba79-d8460e84bdf7","type":"SaveTool"},{"id":"952da2f4-d275-434f-a0ac-70768466c336","type":"ResetTool"},{"id":"3213f304-bcf2-47f3-b352-3737a027efac","type":"HelpTool"}]},"id":"84a6c281-5bfe-4cb1-908b-633ddd0da11c","type":"Toolbar"},{"attributes":{"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"}},"id":"dcb3a029-f5d5-4507-9ede-72906b55f20c","type":"PanTool"},{"attributes":{"overlay":{"id":"b211b196-4e72-4948-8467-219d5dc804bd","type":"BoxAnnotation"},"plot":{"id":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6","subtype":"Figure","type":"Plot"}},"id":"441e7f3b-dc43-49ac-a782-007f548eecfd","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"44d02cf5-ef14-40f1-8146-c6e50fce0396","type":"DataRange1d"}],"root_ids":["56f037f2-d656-4a49-b9d1-5d3a8673d4a6"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"6e18e411-8d5a-42f5-9a09-6905d1a56591","elementid":"41526e9f-fbe9-4a83-a0a6-fee9a6dadff3","modelid":"56f037f2-d656-4a49-b9d1-5d3a8673d4a6"}];
                  
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