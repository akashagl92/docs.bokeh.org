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
      };var element = document.getElementById("85a09941-8d86-4b7e-b067-a9abab29b810");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85a09941-8d86-4b7e-b067-a9abab29b810' but no matching script tag was found. ")
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
                  var docs_json = {"29ad4691-853e-4b61-ab0b-24812beb927a":{"roots":{"references":[{"attributes":{"data_source":{"id":"a87c08ab-94cd-4d35-844d-b5b23e649632","type":"ColumnDataSource"},"glyph":{"id":"f25eaafd-31bc-4691-bf57-35462f66e725","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e29e51eb-1b9b-412f-9333-80c43ecc443b","type":"Circle"},"selection_glyph":null},"id":"23f06b5d-ce41-4d82-a540-5e1e910de8e0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":3}},"id":"e29e51eb-1b9b-412f-9333-80c43ecc443b","type":"Circle"},{"attributes":{"callback":null},"id":"7815c993-4f28-4788-a43a-d612ab02df0f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":3}},"id":"ac90414b-a82d-4e11-ab08-38f19d204106","type":"Circle"},{"attributes":{"data_source":{"id":"7815c993-4f28-4788-a43a-d612ab02df0f","type":"ColumnDataSource"},"glyph":{"id":"50b1e43f-0b9b-4c7a-a241-f73a5db04266","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"9c0b5431-db60-44ee-8666-c78253deecdc","type":"Circle"},"selection_glyph":null},"id":"ba063240-406e-4b1e-847b-8d14e8747f2f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":3}},"id":"8640b6f9-ae13-4f79-acab-9cc679c3ede3","type":"Circle"},{"attributes":{"callback":null},"id":"4cc1754c-5232-4319-8c57-a46456657973","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"95186672-6d70-478f-9212-fbe21049edbb","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":5}},"id":"44d0c956-89ef-4998-8472-099287c8e55b","type":"Circle"},{"attributes":{"callback":null},"id":"6489f405-eb6e-4ea4-a58d-2642e0aa5ef4","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":6}},"id":"3986abc0-0e70-49d4-b584-8eeabf63c88e","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":6}},"id":"6931910c-9133-4595-8ae5-9104f88e9e12","type":"Circle"},{"attributes":{"data_source":{"id":"528cc6f8-9ef3-4b4d-9529-c6ead85484fb","type":"ColumnDataSource"},"glyph":{"id":"6931910c-9133-4595-8ae5-9104f88e9e12","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"3f99f796-c0b6-438e-8973-af9a0fcf505f","type":"Circle"},"selection_glyph":null},"id":"41964675-c9a0-470f-abf0-fb4eb4dd84d6","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"4daf58cf-8fa9-4cc5-a9d0-44c6fe889e49","type":"CategoricalAxis"}],"left":[{"id":"bcb1bfe8-f564-4a61-ae9a-5ffdb70159e6","type":"CategoricalAxis"}],"renderers":[{"id":"4daf58cf-8fa9-4cc5-a9d0-44c6fe889e49","type":"CategoricalAxis"},{"id":"174d9f2b-edc2-42b5-8bfb-4b4eebc7fbfa","type":"Grid"},{"id":"bcb1bfe8-f564-4a61-ae9a-5ffdb70159e6","type":"CategoricalAxis"},{"id":"5d6b5796-e24e-4b9d-a9a5-679915205e19","type":"Grid"},{"id":"a96e271b-96c7-40c1-a042-ca66fa8a8505","type":"BoxAnnotation"},{"id":"d88befc7-82db-4295-8542-672d86e89dc0","type":"GlyphRenderer"},{"id":"10ea97d8-e7a4-449d-9aff-959b4350019d","type":"GlyphRenderer"},{"id":"5b644fdc-667d-42a9-900e-0cc3e77ac4df","type":"GlyphRenderer"},{"id":"4c0b27d0-d211-4826-bda7-934694e28049","type":"GlyphRenderer"},{"id":"b5b507b6-ab11-4967-bfc3-c1f061e24fef","type":"GlyphRenderer"},{"id":"e0edfac6-ab14-4609-8340-b0f492ca48bb","type":"GlyphRenderer"},{"id":"a78b318c-c1c2-4231-8603-58c7770fbcc1","type":"GlyphRenderer"},{"id":"ab1007e3-9caf-40f0-a530-78c7089e3791","type":"GlyphRenderer"},{"id":"902bd56b-ec81-4d7d-8d0f-78b52f05200c","type":"GlyphRenderer"},{"id":"543c9c0e-6577-425e-b9ee-8e7847c423b4","type":"GlyphRenderer"},{"id":"9793ac0c-2bcb-4a1d-8391-efc0489a2fc5","type":"GlyphRenderer"},{"id":"385e0e67-51c8-49b0-af2e-97fa052779d5","type":"GlyphRenderer"},{"id":"8c3d5dd8-a175-44b9-8b66-75d9e1e0ea0d","type":"GlyphRenderer"},{"id":"8c57c5a7-06f8-46bd-9136-76671f1719be","type":"GlyphRenderer"},{"id":"93d7c00a-69f3-48d5-b57d-b1d10a746570","type":"GlyphRenderer"},{"id":"e587f51c-6499-4254-af65-02cfd80bc01f","type":"GlyphRenderer"},{"id":"93efca71-1a61-42c9-8faa-9b8110b62436","type":"GlyphRenderer"},{"id":"4b92be4f-9c63-4b96-b938-3d84cfa467be","type":"GlyphRenderer"},{"id":"4150c422-a5a9-4ecd-b1b6-94633df92961","type":"GlyphRenderer"},{"id":"337a1f21-9e9c-462d-8cb9-86958e4f096a","type":"GlyphRenderer"},{"id":"23f06b5d-ce41-4d82-a540-5e1e910de8e0","type":"GlyphRenderer"},{"id":"ba063240-406e-4b1e-847b-8d14e8747f2f","type":"GlyphRenderer"},{"id":"932b8ab7-e739-46c3-864e-8089e15e5683","type":"GlyphRenderer"},{"id":"41964675-c9a0-470f-abf0-fb4eb4dd84d6","type":"GlyphRenderer"},{"id":"7ef10cef-6800-408d-a087-a4a44e65fb3b","type":"GlyphRenderer"},{"id":"cc52b341-4616-4479-abb6-42f9be95d9db","type":"GlyphRenderer"},{"id":"137316de-6dfa-4ba6-a36c-ef027f0c316e","type":"GlyphRenderer"},{"id":"473e6183-ffed-4145-b8cd-ff7f9a3f4129","type":"GlyphRenderer"},{"id":"03d88ec5-c579-47c0-93a0-64bc5da53f5d","type":"GlyphRenderer"},{"id":"cfe96ade-da1a-41f2-aa34-3be92069831c","type":"GlyphRenderer"},{"id":"2e32400b-f3dd-4e43-b5d4-f8a508cb8dbb","type":"GlyphRenderer"},{"id":"f962c15c-7fa8-4156-b218-a05d22b0ea8b","type":"GlyphRenderer"},{"id":"49d3705f-5d0d-41b2-8252-88773d2584fc","type":"GlyphRenderer"},{"id":"90aa3c35-1017-414e-a3f2-9c017555246c","type":"GlyphRenderer"},{"id":"9ed7d93d-23c1-4ec2-b3a6-2d75c0226bda","type":"GlyphRenderer"},{"id":"96b9e72c-9478-4540-a666-a05873f282dd","type":"GlyphRenderer"}],"title":{"id":"fc453968-ae7f-44f0-81dd-8551699d3ab7","type":"Title"},"tool_events":{"id":"20f100e8-e9c5-474b-9c66-316ab86de847","type":"ToolEvents"},"toolbar":{"id":"1b97c4ab-f2d8-4057-96b3-d1bc92259144","type":"Toolbar"},"x_range":{"id":"2f553cd5-cbff-4adc-ac99-6099e62d48c4","type":"FactorRange"},"y_range":{"id":"fa4a1c0a-a2c8-4cec-89ac-f02e3f4e3f14","type":"FactorRange"}},"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"d88c68c9-873d-421e-ac63-53170aef4d19","type":"ColumnDataSource"},"glyph":{"id":"e1d7bfd9-6612-4584-9794-03e6c3522cbc","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"304690e0-6f09-4ff5-81f4-390d86bc219c","type":"Circle"},"selection_glyph":null},"id":"d88befc7-82db-4295-8542-672d86e89dc0","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbce4a52-d8b1-461a-89a1-b90e4003121b","type":"CategoricalTicker"}},"id":"174d9f2b-edc2-42b5-8bfb-4b4eebc7fbfa","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":6}},"id":"8ad39ad3-008d-4db2-8471-cadccbb93528","type":"Circle"},{"attributes":{"data_source":{"id":"73e5901b-2b24-48ff-9d0d-4ab38f0d8c53","type":"ColumnDataSource"},"glyph":{"id":"614f849b-de1b-4fc6-9748-ef88d2e11a3f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c58adf39-283d-483f-a1ab-b330e04a0c08","type":"Circle"},"selection_glyph":null},"id":"e587f51c-6499-4254-af65-02cfd80bc01f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":3}},"id":"10cb6384-b7f6-4e36-8574-59b58e2fe709","type":"Circle"},{"attributes":{},"id":"8860b942-49d1-4c60-bfc8-c4543817392b","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":5}},"id":"ad8bb325-b6e3-4374-bc5d-e9fbb8430933","type":"Circle"},{"attributes":{"callback":null},"id":"be85da77-e8dc-4742-a5be-bd68876af331","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":1}},"id":"fe873f5a-2674-4aec-8160-14ec972e5930","type":"Circle"},{"attributes":{"data_source":{"id":"1b688aa8-49a3-416d-85ea-512f3306fd38","type":"ColumnDataSource"},"glyph":{"id":"b310c9d0-4ffd-46a0-bbf5-0e41b5f91f35","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"98cdf613-2944-4680-9682-e5a571a578bf","type":"Circle"},"selection_glyph":null},"id":"90aa3c35-1017-414e-a3f2-9c017555246c","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":4}},"id":"50b1e43f-0b9b-4c7a-a241-f73a5db04266","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":3}},"id":"60d2e8c3-d9e4-4a32-ad19-dbfa7b83ed5f","type":"Circle"},{"attributes":{},"id":"dc849241-ac00-42d2-94fb-ad45ca534a88","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":6}},"id":"55edcba8-78d2-477a-b757-818cae233383","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":6}},"id":"3f99f796-c0b6-438e-8973-af9a0fcf505f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":1}},"id":"ea90095e-623e-49cd-bca3-c27d4900dc81","type":"Circle"},{"attributes":{"callback":null},"id":"1d29652a-f676-46c7-9b64-1b2bd8a74fb3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6d0b6c45-3c23-414d-bd4c-2cb698b19093","type":"ColumnDataSource"},"glyph":{"id":"ea90095e-623e-49cd-bca3-c27d4900dc81","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"98742d46-45da-467b-b48e-eef7a6cd913f","type":"Circle"},"selection_glyph":null},"id":"7ef10cef-6800-408d-a087-a4a44e65fb3b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8bfabd05-1441-45d4-9340-83af3d0d3a53","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":5}},"id":"3ed73507-8c5a-4db4-a4a3-6e19082e3b08","type":"Circle"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"fa4a1c0a-a2c8-4cec-89ac-f02e3f4e3f14","type":"FactorRange"},{"attributes":{"callback":null},"id":"6d0b6c45-3c23-414d-bd4c-2cb698b19093","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":4}},"id":"20d33295-df5b-4cdf-985f-b5e519f1fb26","type":"Circle"},{"attributes":{"callback":null},"id":"717ab708-12a2-457b-ac4a-81e46de0ec0c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"717ab708-12a2-457b-ac4a-81e46de0ec0c","type":"ColumnDataSource"},"glyph":{"id":"55edcba8-78d2-477a-b757-818cae233383","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8ad39ad3-008d-4db2-8471-cadccbb93528","type":"Circle"},"selection_glyph":null},"id":"cfe96ade-da1a-41f2-aa34-3be92069831c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8bfabd05-1441-45d4-9340-83af3d0d3a53","type":"ColumnDataSource"},"glyph":{"id":"3986abc0-0e70-49d4-b584-8eeabf63c88e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5aeb8d01-0cd7-4f9b-b141-8a553f21d978","type":"Circle"},"selection_glyph":null},"id":"96b9e72c-9478-4540-a666-a05873f282dd","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"}},"id":"5ecf5e98-e357-4f30-bb59-b3fc3c60cb14","type":"ResetTool"},{"attributes":{"data_source":{"id":"d3dfe720-5423-42aa-8b72-81bc8c33ae93","type":"ColumnDataSource"},"glyph":{"id":"9630825b-1872-4247-acf4-56214d72e54c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"74086656-bc34-437a-886f-bef847ff14c0","type":"Circle"},"selection_glyph":null},"id":"93efca71-1a61-42c9-8faa-9b8110b62436","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2de5c94d-1b5e-4069-9f98-944050e49ec3","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":5}},"id":"9630825b-1872-4247-acf4-56214d72e54c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":2}},"id":"9cf19df4-633f-4a76-b9c8-5834525f1a84","type":"Circle"},{"attributes":{"data_source":{"id":"0e180b2c-56fa-4be3-8de1-a499d1068503","type":"ColumnDataSource"},"glyph":{"id":"93fe22ec-0a79-4a32-a144-742786f7a45d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"6684c354-aa3b-439f-9707-69b9dad3a0ad","type":"Circle"},"selection_glyph":null},"id":"9793ac0c-2bcb-4a1d-8391-efc0489a2fc5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":5}},"id":"74086656-bc34-437a-886f-bef847ff14c0","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":6}},"id":"009c103d-6786-4318-acda-e14a0bd9268e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":4}},"id":"0303ce76-62d5-41cf-a74b-765dac221dd0","type":"Circle"},{"attributes":{"plot":null,"text":"Fill and Line Color Property Combinations"},"id":"fc453968-ae7f-44f0-81dd-8551699d3ab7","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":2}},"id":"21f8ebb8-bf54-4b44-8ca1-6673e7e6fcdc","type":"Circle"},{"attributes":{"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"}},"id":"f71ceee3-b942-40fe-b86b-19db43953457","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":4}},"id":"5abbe250-7dbe-45b4-8d6d-476b0ac9273d","type":"Circle"},{"attributes":{"data_source":{"id":"51eac438-b15f-4194-8656-f72d2ac7f06a","type":"ColumnDataSource"},"glyph":{"id":"60d2e8c3-d9e4-4a32-ad19-dbfa7b83ed5f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8ffa41c2-378c-457e-8a5b-ac0d626c7b24","type":"Circle"},"selection_glyph":null},"id":"902bd56b-ec81-4d7d-8d0f-78b52f05200c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":2}},"id":"c0a43b8c-1b37-428d-ad26-0e80bcbc6291","type":"Circle"},{"attributes":{"data_source":{"id":"2de5c94d-1b5e-4069-9f98-944050e49ec3","type":"ColumnDataSource"},"glyph":{"id":"20d33295-df5b-4cdf-985f-b5e519f1fb26","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0b474e91-fea5-4e82-9f3c-6b985086b682","type":"Circle"},"selection_glyph":null},"id":"4c0b27d0-d211-4826-bda7-934694e28049","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":1}},"id":"c848c5fd-857c-478f-ae25-e9e9aba969e9","type":"Circle"},{"attributes":{"data_source":{"id":"95186672-6d70-478f-9212-fbe21049edbb","type":"ColumnDataSource"},"glyph":{"id":"ac0bf17a-b313-4d47-ad66-63997f9cb35b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ab1a1289-2b8b-4cd9-9cb1-4f42a9fd8a38","type":"Circle"},"selection_glyph":null},"id":"49d3705f-5d0d-41b2-8252-88773d2584fc","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":3}},"id":"f25eaafd-31bc-4691-bf57-35462f66e725","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":1}},"id":"6b1f4f64-306d-494a-bf75-cba86f73c763","type":"Circle"},{"attributes":{"data_source":{"id":"eee71c79-3e3e-43ab-98ce-165db8366a8f","type":"ColumnDataSource"},"glyph":{"id":"9cf19df4-633f-4a76-b9c8-5834525f1a84","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"1412e9df-7d3a-4e00-97a5-51b894740569","type":"Circle"},"selection_glyph":null},"id":"f962c15c-7fa8-4156-b218-a05d22b0ea8b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"51eac438-b15f-4194-8656-f72d2ac7f06a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":4}},"id":"98cdf613-2944-4680-9682-e5a571a578bf","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":6}},"id":"114e684f-aed8-4c4c-be73-7ef4872c377a","type":"Circle"},{"attributes":{"data_source":{"id":"4cc1754c-5232-4319-8c57-a46456657973","type":"ColumnDataSource"},"glyph":{"id":"770d03cc-2dc2-4305-a864-e6239803d342","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"21f8ebb8-bf54-4b44-8ca1-6673e7e6fcdc","type":"Circle"},"selection_glyph":null},"id":"337a1f21-9e9c-462d-8cb9-86958e4f096a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":3}},"id":"8ffa41c2-378c-457e-8a5b-ac0d626c7b24","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":6}},"id":"90f3376d-835a-4537-9c1d-63a0a77a9bd9","type":"Circle"},{"attributes":{"axis_label":"Fill Options","formatter":{"id":"8860b942-49d1-4c60-bfc8-c4543817392b","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbce4a52-d8b1-461a-89a1-b90e4003121b","type":"CategoricalTicker"}},"id":"4daf58cf-8fa9-4cc5-a9d0-44c6fe889e49","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":4}},"id":"c58adf39-283d-483f-a1ab-b330e04a0c08","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":6}},"id":"3bdfc35d-0c5e-4cd2-83d0-8e7e872424af","type":"Circle"},{"attributes":{},"id":"eab669ad-c95c-43a7-bcf8-06dd84e2f321","type":"CategoricalTickFormatter"},{"attributes":{"callback":null},"id":"26f51ccf-7d7f-4f36-bd60-009ef236da2e","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"1b688aa8-49a3-416d-85ea-512f3306fd38","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d0972bcf-d74e-4f00-8b6e-9b9d1056a7a7","type":"ColumnDataSource"},"glyph":{"id":"ad8bb325-b6e3-4374-bc5d-e9fbb8430933","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"01c6f2f4-7efa-496f-97a1-9f056d7a3604","type":"Circle"},"selection_glyph":null},"id":"03d88ec5-c579-47c0-93a0-64bc5da53f5d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":4}},"id":"0b474e91-fea5-4e82-9f3c-6b985086b682","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":3}},"id":"ac0bf17a-b313-4d47-ad66-63997f9cb35b","type":"Circle"},{"attributes":{"overlay":{"id":"a96e271b-96c7-40c1-a042-ca66fa8a8505","type":"BoxAnnotation"},"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"}},"id":"a9dbb668-832f-48d8-8889-ffddfa35d4a9","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":1}},"id":"68f52d8b-14ac-4358-acad-f9a9891a4696","type":"Circle"},{"attributes":{"callback":null},"id":"28381b86-fb6f-441d-979b-4084a5bf3c89","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"03240cb1-5195-49eb-915d-c4db92aa0d42","type":"ColumnDataSource"},"glyph":{"id":"d38f518b-6d75-4fc7-8a90-edd2ef208e8e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"10cb6384-b7f6-4e36-8574-59b58e2fe709","type":"Circle"},"selection_glyph":null},"id":"93d7c00a-69f3-48d5-b57d-b1d10a746570","type":"GlyphRenderer"},{"attributes":{},"id":"dbce4a52-d8b1-461a-89a1-b90e4003121b","type":"CategoricalTicker"},{"attributes":{"axis_label":"Line Options","formatter":{"id":"eab669ad-c95c-43a7-bcf8-06dd84e2f321","type":"CategoricalTickFormatter"},"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc849241-ac00-42d2-94fb-ad45ca534a88","type":"CategoricalTicker"}},"id":"bcb1bfe8-f564-4a61-ae9a-5ffdb70159e6","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":5}},"id":"c8e719c0-1eb2-4ff0-a768-0d5b6081ab97","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":5}},"id":"93fe22ec-0a79-4a32-a144-742786f7a45d","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":1}},"id":"6c3a00d2-d809-4e90-a373-5d48284ec7a9","type":"Circle"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"2f553cd5-cbff-4adc-ac99-6099e62d48c4","type":"FactorRange"},{"attributes":{"data_source":{"id":"2b4156dd-a987-451b-aa32-aeb83e023423","type":"ColumnDataSource"},"glyph":{"id":"6c522e73-162b-4355-9c7e-b0fab21d7c9b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"b006eec0-9d28-4681-91f7-a995050ea36c","type":"Circle"},"selection_glyph":null},"id":"5b644fdc-667d-42a9-900e-0cc3e77ac4df","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":2}},"id":"0123955c-1df1-4e8c-ace0-51a94068bf22","type":"Circle"},{"attributes":{"data_source":{"id":"6e2510aa-1bb5-45c8-9eff-5034149df007","type":"ColumnDataSource"},"glyph":{"id":"22a575f1-b4bf-4895-860d-fc148e8654f2","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d36f1b7d-a7d4-4bfc-b5e5-98ebd2a9339b","type":"Circle"},"selection_glyph":null},"id":"8c57c5a7-06f8-46bd-9136-76671f1719be","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":3}},"id":"b006eec0-9d28-4681-91f7-a995050ea36c","type":"Circle"},{"attributes":{"callback":null},"id":"1265953b-6a52-4aa8-92c2-e76b000c915f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fb7dc27b-7139-42a3-823e-00a601721351","type":"ColumnDataSource"},"glyph":{"id":"2df83397-9150-464a-8574-de0d4ad947a0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"3ed73507-8c5a-4db4-a4a3-6e19082e3b08","type":"Circle"},"selection_glyph":null},"id":"9ed7d93d-23c1-4ec2-b3a6-2d75c0226bda","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":3}},"id":"6c522e73-162b-4355-9c7e-b0fab21d7c9b","type":"Circle"},{"attributes":{"callback":null},"id":"9c2eb470-52be-4dc0-b3f2-f258734a9e27","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a96e271b-96c7-40c1-a042-ca66fa8a8505","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":4}},"id":"614f849b-de1b-4fc6-9748-ef88d2e11a3f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":1}},"id":"98742d46-45da-467b-b48e-eef7a6cd913f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":5}},"id":"6684c354-aa3b-439f-9707-69b9dad3a0ad","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":4}},"id":"b310c9d0-4ffd-46a0-bbf5-0e41b5f91f35","type":"Circle"},{"attributes":{"callback":null},"id":"ed4ea410-401e-4e10-8d9d-9f0bf1311eb2","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"73e5901b-2b24-48ff-9d0d-4ab38f0d8c53","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":2}},"id":"22a575f1-b4bf-4895-860d-fc148e8654f2","type":"Circle"},{"attributes":{"callback":null},"id":"8aefed0f-8651-4f6a-b0ae-b9ef00056a6d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":5}},"id":"97186e4c-46d2-4050-bd8f-72c589808282","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":4}},"id":"9ce0574d-1788-4120-b96f-74c06e8c885f","type":"Circle"},{"attributes":{"data_source":{"id":"d1de7ef4-1739-4513-8c75-81dc567e872c","type":"ColumnDataSource"},"glyph":{"id":"5abbe250-7dbe-45b4-8d6d-476b0ac9273d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"9ce0574d-1788-4120-b96f-74c06e8c885f","type":"Circle"},"selection_glyph":null},"id":"543c9c0e-6577-425e-b9ee-8e7847c423b4","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":2}},"id":"1412e9df-7d3a-4e00-97a5-51b894740569","type":"Circle"},{"attributes":{"callback":null},"id":"a8a1d348-a2e8-4578-acb8-9cba277b275e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":2}},"id":"149be7e8-bfa4-4e96-9872-6d11d2d8dad3","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":6}},"id":"5aeb8d01-0cd7-4f9b-b141-8a553f21d978","type":"Circle"},{"attributes":{"callback":null},"id":"eee71c79-3e3e-43ab-98ce-165db8366a8f","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":1}},"id":"c5d688a0-f24a-4896-9e92-36b78d6ed49e","type":"Circle"},{"attributes":{"callback":null},"id":"d0972bcf-d74e-4f00-8b6e-9b9d1056a7a7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"}},"id":"7d72e2b0-5862-46e0-b671-da816108bbe9","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":1}},"id":"4117b188-f243-4393-b933-871adfd85bd4","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":2}},"id":"49eaef31-5955-4aee-b624-734cde9b5eed","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":4}},"id":"9c0b5431-db60-44ee-8666-c78253deecdc","type":"Circle"},{"attributes":{"data_source":{"id":"1d29652a-f676-46c7-9b64-1b2bd8a74fb3","type":"ColumnDataSource"},"glyph":{"id":"49eaef31-5955-4aee-b624-734cde9b5eed","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0123955c-1df1-4e8c-ace0-51a94068bf22","type":"Circle"},"selection_glyph":null},"id":"10ea97d8-e7a4-449d-9aff-959b4350019d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ed4ea410-401e-4e10-8d9d-9f0bf1311eb2","type":"ColumnDataSource"},"glyph":{"id":"8640b6f9-ae13-4f79-acab-9cc679c3ede3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ac90414b-a82d-4e11-ab08-38f19d204106","type":"Circle"},"selection_glyph":null},"id":"137316de-6dfa-4ba6-a36c-ef027f0c316e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":6}},"id":"4c0ca048-d60e-4519-9c22-c1cedaf9954b","type":"Circle"},{"attributes":{"callback":null},"id":"7fc4bcae-630a-4524-bf7a-1d82298f19fc","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":1}},"id":"304690e0-6f09-4ff5-81f4-390d86bc219c","type":"Circle"},{"attributes":{"callback":null},"id":"a87c08ab-94cd-4d35-844d-b5b23e649632","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":6}},"id":"7886f624-2cda-4233-b346-4a3191215f77","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":3}},"id":"d38f518b-6d75-4fc7-8a90-edd2ef208e8e","type":"Circle"},{"attributes":{"data_source":{"id":"9c2eb470-52be-4dc0-b3f2-f258734a9e27","type":"ColumnDataSource"},"glyph":{"id":"c0a43b8c-1b37-428d-ad26-0e80bcbc6291","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e47881dc-d2ec-4642-8546-516afb239397","type":"Circle"},"selection_glyph":null},"id":"cc52b341-4616-4479-abb6-42f9be95d9db","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d1de7ef4-1739-4513-8c75-81dc567e872c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6489f405-eb6e-4ea4-a58d-2642e0aa5ef4","type":"ColumnDataSource"},"glyph":{"id":"b4e593cf-87b9-457e-8efe-b40b3bdb4ed0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"149be7e8-bfa4-4e96-9872-6d11d2d8dad3","type":"Circle"},"selection_glyph":null},"id":"ab1007e3-9caf-40f0-a530-78c7089e3791","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":3},"y":{"value":2}},"id":"d36f1b7d-a7d4-4bfc-b5e5-98ebd2a9339b","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":5}},"id":"a4e5c609-cdbd-4d8b-80db-ff806596af25","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":4}},"id":"067fcd35-3ac9-468d-92ac-f82bdadb6ee9","type":"Circle"},{"attributes":{"data_source":{"id":"09c108db-69dc-44b6-be38-df737716d25a","type":"ColumnDataSource"},"glyph":{"id":"6c3a00d2-d809-4e90-a373-5d48284ec7a9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c848c5fd-857c-478f-ae25-e9e9aba969e9","type":"Circle"},"selection_glyph":null},"id":"8c3d5dd8-a175-44b9-8b66-75d9e1e0ea0d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"}},"id":"e9633b9f-f140-4590-a015-220becc928ac","type":"HelpTool"},{"attributes":{"callback":null},"id":"d3dfe720-5423-42aa-8b72-81bc8c33ae93","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"be85da77-e8dc-4742-a5be-bd68876af331","type":"ColumnDataSource"},"glyph":{"id":"68f52d8b-14ac-4358-acad-f9a9891a4696","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"fbb64be2-472c-4d89-b17d-c5fb2685d225","type":"Circle"},"selection_glyph":null},"id":"a78b318c-c1c2-4231-8603-58c7770fbcc1","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":1}},"id":"fbb64be2-472c-4d89-b17d-c5fb2685d225","type":"Circle"},{"attributes":{"callback":null},"id":"fee0af45-318a-46c2-8d15-949c6f44ad68","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"137c268d-6f96-4e40-bd86-81c27a9d9f0a","type":"ColumnDataSource"},"glyph":{"id":"c8e719c0-1eb2-4ff0-a768-0d5b6081ab97","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"44d0c956-89ef-4998-8472-099287c8e55b","type":"Circle"},"selection_glyph":null},"id":"b5b507b6-ab11-4967-bfc3-c1f061e24fef","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f71ceee3-b942-40fe-b86b-19db43953457","type":"PanTool"},{"id":"808a2d2a-db7e-4b57-b26c-ce225602e411","type":"WheelZoomTool"},{"id":"a9dbb668-832f-48d8-8889-ffddfa35d4a9","type":"BoxZoomTool"},{"id":"7d72e2b0-5862-46e0-b671-da816108bbe9","type":"SaveTool"},{"id":"5ecf5e98-e357-4f30-bb59-b3fc3c60cb14","type":"ResetTool"},{"id":"e9633b9f-f140-4590-a015-220becc928ac","type":"HelpTool"}]},"id":"1b97c4ab-f2d8-4057-96b3-d1bc92259144","type":"Toolbar"},{"attributes":{"callback":null},"id":"fb7dc27b-7139-42a3-823e-00a601721351","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":3}},"id":"ab1a1289-2b8b-4cd9-9cb1-4f42a9fd8a38","type":"Circle"},{"attributes":{"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"}},"id":"808a2d2a-db7e-4b57-b26c-ce225602e411","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":2}},"id":"e47881dc-d2ec-4642-8546-516afb239397","type":"Circle"},{"attributes":{"data_source":{"id":"8aefed0f-8651-4f6a-b0ae-b9ef00056a6d","type":"ColumnDataSource"},"glyph":{"id":"c5d688a0-f24a-4896-9e92-36b78d6ed49e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"fe873f5a-2674-4aec-8160-14ec972e5930","type":"Circle"},"selection_glyph":null},"id":"4150c422-a5a9-4ecd-b1b6-94633df92961","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":6},"y":{"value":5}},"id":"2df83397-9150-464a-8574-de0d4ad947a0","type":"Circle"},{"attributes":{"callback":null},"id":"528cc6f8-9ef3-4b4d-9529-c6ead85484fb","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":2},"y":{"value":2}},"id":"b4e593cf-87b9-457e-8efe-b40b3bdb4ed0","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"66d32d75-373f-4aa2-a3c4-1701b6b813de","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc849241-ac00-42d2-94fb-ad45ca534a88","type":"CategoricalTicker"}},"id":"5d6b5796-e24e-4b9d-a9a5-679915205e19","type":"Grid"},{"attributes":{"data_source":{"id":"7fc4bcae-630a-4524-bf7a-1d82298f19fc","type":"ColumnDataSource"},"glyph":{"id":"7886f624-2cda-4233-b346-4a3191215f77","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"4c0ca048-d60e-4519-9c22-c1cedaf9954b","type":"Circle"},"selection_glyph":null},"id":"385e0e67-51c8-49b0-af2e-97fa052779d5","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":4},"y":{"value":2}},"id":"770d03cc-2dc2-4305-a864-e6239803d342","type":"Circle"},{"attributes":{"callback":null},"id":"137c268d-6f96-4e40-bd86-81c27a9d9f0a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a8a1d348-a2e8-4578-acb8-9cba277b275e","type":"ColumnDataSource"},"glyph":{"id":"a4e5c609-cdbd-4d8b-80db-ff806596af25","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"97186e4c-46d2-4050-bd8f-72c589808282","type":"Circle"},"selection_glyph":null},"id":"932b8ab7-e739-46c3-864e-8089e15e5683","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":5},"y":{"value":5}},"id":"01c6f2f4-7efa-496f-97a1-9f056d7a3604","type":"Circle"},{"attributes":{"callback":null},"id":"03240cb1-5195-49eb-915d-c4db92aa0d42","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"09c108db-69dc-44b6-be38-df737716d25a","type":"ColumnDataSource"},{"attributes":{},"id":"20f100e8-e9c5-474b-9c66-316ab86de847","type":"ToolEvents"},{"attributes":{"data_source":{"id":"fee0af45-318a-46c2-8d15-949c6f44ad68","type":"ColumnDataSource"},"glyph":{"id":"3bdfc35d-0c5e-4cd2-83d0-8e7e872424af","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"114e684f-aed8-4c4c-be73-7ef4872c377a","type":"Circle"},"selection_glyph":null},"id":"e0edfac6-ab14-4609-8340-b0f492ca48bb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2b4156dd-a987-451b-aa32-aeb83e023423","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"28381b86-fb6f-441d-979b-4084a5bf3c89","type":"ColumnDataSource"},"glyph":{"id":"6b1f4f64-306d-494a-bf75-cba86f73c763","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"4117b188-f243-4393-b933-871adfd85bd4","type":"Circle"},"selection_glyph":null},"id":"2e32400b-f3dd-4e43-b5d4-f8a508cb8dbb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"6e2510aa-1bb5-45c8-9eff-5034149df007","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"26f51ccf-7d7f-4f36-bd60-009ef236da2e","type":"ColumnDataSource"},"glyph":{"id":"009c103d-6786-4318-acda-e14a0bd9268e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"90f3376d-835a-4537-9c1d-63a0a77a9bd9","type":"Circle"},"selection_glyph":null},"id":"4b92be4f-9c63-4b96-b938-3d84cfa467be","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"value":1},"y":{"value":1}},"id":"e1d7bfd9-6612-4584-9794-03e6c3522cbc","type":"Circle"},{"attributes":{"callback":null},"id":"0e180b2c-56fa-4be3-8de1-a499d1068503","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1265953b-6a52-4aa8-92c2-e76b000c915f","type":"ColumnDataSource"},"glyph":{"id":"067fcd35-3ac9-468d-92ac-f82bdadb6ee9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0303ce76-62d5-41cf-a74b-765dac221dd0","type":"Circle"},"selection_glyph":null},"id":"473e6183-ffed-4145-b8cd-ff7f9a3f4129","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d88c68c9-873d-421e-ac63-53170aef4d19","type":"ColumnDataSource"}],"root_ids":["66d32d75-373f-4aa2-a3c4-1701b6b813de"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"29ad4691-853e-4b61-ab0b-24812beb927a","elementid":"85a09941-8d86-4b7e-b067-a9abab29b810","modelid":"66d32d75-373f-4aa2-a3c4-1701b6b813de"}];
                  
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