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
      };var element = document.getElementById("bfff9b12-ee17-48cd-9978-4e41a831c5f0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bfff9b12-ee17-48cd-9978-4e41a831c5f0' but no matching script tag was found. ")
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
                  var docs_json = {"ca62d5a3-7086-475e-9162-9747fb77d2da":{"roots":{"references":[{"attributes":{},"id":"2b669884-a90d-449f-9db1-0cbe39e0f657","type":"BasicTicker"},{"attributes":{},"id":"40583c79-c42b-4836-bca3-1dd8347fbb0a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0f9a6ac8-f678-4a3e-91d3-edbb67454069","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Select Here"},"id":"d030f691-eb1b-4ded-9bba-de9df0f94031","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"fd91b694-2792-4898-8c27-85bb0b72c6bb","type":"PolyAnnotation"},"plot":{"id":"39e3e325-0336-49f7-b469-5941c91fc221","subtype":"Figure","type":"Plot"}},"id":"599318ae-3da0-4bb5-ba26-1ccb754308ea","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"e72a70e3-a0d5-4d5c-9c20-7ad8d72f1245","type":"ColumnDataSource"},"glyph":{"id":"481e5554-4fb9-442c-a99d-fd6734d97bd1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"70105548-fbd4-484e-83bf-4f7c055cf2eb","type":"Circle"},"selection_glyph":null},"id":"fb4f1d19-45a9-4f2d-97e0-8e8533aac9fc","type":"GlyphRenderer"},{"attributes":{},"id":"6533dabc-0e92-4ec3-a14c-160a192518af","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"39e3e325-0336-49f7-b469-5941c91fc221","subtype":"Figure","type":"Plot"},"ticker":{"id":"e16a1b32-5c46-4c19-9810-4dbb9129b82c","type":"BasicTicker"}},"id":"79236353-957c-49cd-8542-ca5e7c5fc490","type":"Grid"},{"attributes":{"formatter":{"id":"632b29c8-97c8-42af-b4eb-2e450272df52","type":"BasicTickFormatter"},"plot":{"id":"819f8b89-f9c1-409e-afcb-312026e3c23b","subtype":"Figure","type":"Plot"},"ticker":{"id":"9973a146-b162-472c-9fdd-4e6467fe2393","type":"BasicTicker"}},"id":"dd6d8ca8-8862-4d2c-916a-001176f338ea","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[],"y":[]}},"id":"29d344ee-b874-4766-ba87-9f53ee103701","type":"ColumnDataSource"},{"attributes":{},"id":"0dccddc4-fd18-4f53-83d0-03cff2f94a45","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6cc60188-e931-457c-a55f-021c55714ca2","type":"DataRange1d"},{"attributes":{},"id":"632b29c8-97c8-42af-b4eb-2e450272df52","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"325fc696-b647-473b-9774-4aca3d357c1c","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"83330cdf-11f3-46a7-9f0a-349d91de9e9d","type":"Circle"},{"attributes":{"callback":null},"id":"e744e381-13fc-4c24-b90d-b774818cf5ed","type":"Range1d"},{"attributes":{},"id":"6fe30512-f9c5-4e15-9f49-3eb6847ee4f3","type":"BasicTickFormatter"},{"attributes":{},"id":"e16a1b32-5c46-4c19-9810-4dbb9129b82c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29d344ee-b874-4766-ba87-9f53ee103701","type":"ColumnDataSource"},"glyph":{"id":"a003bf4e-98c7-41b9-82d1-3189c38b6544","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"83330cdf-11f3-46a7-9f0a-349d91de9e9d","type":"Circle"},"selection_glyph":null},"id":"69a7d2a5-b523-4fdf-b2a7-45ac86a4ec92","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"b5c00530-d453-4df9-a080-cfd14df65d50","type":"LinearAxis"}],"left":[{"id":"34151383-6e7f-4f45-b6cd-1507ba500a4e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b5c00530-d453-4df9-a080-cfd14df65d50","type":"LinearAxis"},{"id":"45f6f6d9-9698-44fa-a279-d9983b9737de","type":"Grid"},{"id":"34151383-6e7f-4f45-b6cd-1507ba500a4e","type":"LinearAxis"},{"id":"79236353-957c-49cd-8542-ca5e7c5fc490","type":"Grid"},{"id":"fd91b694-2792-4898-8c27-85bb0b72c6bb","type":"PolyAnnotation"},{"id":"fb4f1d19-45a9-4f2d-97e0-8e8533aac9fc","type":"GlyphRenderer"}],"title":{"id":"d030f691-eb1b-4ded-9bba-de9df0f94031","type":"Title"},"tool_events":{"id":"6533dabc-0e92-4ec3-a14c-160a192518af","type":"ToolEvents"},"toolbar":{"id":"36b53e80-3c28-4420-91d3-b564b2f619c2","type":"Toolbar"},"x_range":{"id":"6cc60188-e931-457c-a55f-021c55714ca2","type":"DataRange1d"},"y_range":{"id":"0f9a6ac8-f678-4a3e-91d3-edbb67454069","type":"DataRange1d"}},"id":"39e3e325-0336-49f7-b469-5941c91fc221","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"39e3e325-0336-49f7-b469-5941c91fc221","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b669884-a90d-449f-9db1-0cbe39e0f657","type":"BasicTicker"}},"id":"45f6f6d9-9698-44fa-a279-d9983b9737de","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"599318ae-3da0-4bb5-ba26-1ccb754308ea","type":"LassoSelectTool"}]},"id":"36b53e80-3c28-4420-91d3-b564b2f619c2","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"70105548-fbd4-484e-83bf-4f7c055cf2eb","type":"Circle"},{"attributes":{"formatter":{"id":"a51386a8-dc66-402f-9aa0-a071af683cd9","type":"BasicTickFormatter"},"plot":{"id":"39e3e325-0336-49f7-b469-5941c91fc221","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b669884-a90d-449f-9db1-0cbe39e0f657","type":"BasicTicker"}},"id":"b5c00530-d453-4df9-a080-cfd14df65d50","type":"LinearAxis"},{"attributes":{"callback":{"id":"cc2649aa-75a2-4175-b8ca-1b12a7820fe1","type":"CustomJS"},"column_names":["y","x"],"data":{"x":[0.19276078322348977,0.7545331864425295,0.4001583825125945,0.5984616233570293,0.12234103664997098,0.924283251969365,0.7950939673321916,0.4451613068956505,0.6759815988876879,0.30233221648518094,0.6083992268425401,0.9887597904758113,0.37392268183724164,0.4440333113254735,0.2741467620705723,0.4200941053077424,0.8405172977559688,0.9598730149472929,0.004357942438841467,0.34111101912975317,0.6846597220239493,0.5225877085476953,0.3849430189524341,0.19098317382247665,0.3973626234186096,0.7539656877078473,0.4053314626823712,0.16333113650782105,0.420770356730677,0.4794435963039362,0.08110226440519941,0.7978262787529631,0.9194078019520797,0.6183822453696479,0.21658020858186067,0.907474902591406,0.03526658446053821,0.41114622568628556,0.06174335199525338,0.6901506682851093,0.9927128321938866,0.5456523223830567,0.007813358796494696,0.9806840809390104,0.09552741655420682,0.3090840532536935,0.3880143739855696,0.8394123876263646,0.4037893906275486,0.42556096948991395,0.2509694225786975,0.26822538730561674,0.580105999200289,0.8822118536130371,0.4478373598063099,0.8348917371978096,0.052257871230411146,0.912947667803924,0.33568942794486856,0.7035644183898763,0.8054562254089235,0.7135432927336888,0.6505633402133052,0.7988395181116654,0.5426397207109654,0.5338475736923147,0.21667759615729099,0.8650201418997213,0.36050041707661795,0.5485887273688593,0.3864651076567629,0.8031006468786448,0.6603579983154249,0.6529659403274475,0.37642317123712177,0.46915354245439067,0.43380677509455534,0.3244995945296947,0.5972783678164879,0.24931399366325668,0.9364518092680165,0.44218215939907446,0.010683668095102239,0.1637113416403697,0.30199594619326886,0.17409289588807508,0.772791280118682,0.7677812910458985,0.43901426619317385,0.87590587744252,0.8691817677789047,0.4454524514609156,0.49083068701792,0.29394455116943774,0.5000088491862014,0.6654785504999957,0.8566076468824106,0.9563964959138909,0.7532321731428895,0.9159047296415385,0.44145548637985954,0.3440452867252126,0.38172197666256646,0.9383540883660727,0.7094266009770576,0.860783409344216,0.2997978221843324,0.687237834242421,0.7881674170955476,0.47908821097244536,0.6226701915308606,0.134499363338761,0.3372133971444933,0.8528314057641625,0.6035146672436392,0.41803579228120724,0.3487975306216814,0.4002315544617009,0.7418197829783999,0.1872354061306366,0.9880464422193393,0.4168498715603842,0.4657324788447842,0.12769577902345886,0.060517497591568215,0.44676745227204795,0.4703399121412458,0.3779311301082492,0.5136180824877427,0.9647682200278935,0.1955918874128859,0.3376752007019168,0.8414527533948013,0.2525502022989363,0.8989523601417698,0.06698254089868816,0.9208932007700913,0.048435356439410326,0.49033527387070763,0.1820185904408338,0.1296712598096753,0.6641353807058574,0.5471579830767744,0.8551253941294031,0.05201377871412394,0.9539487555278955,0.49588434049458896,0.9996197936874015,0.7874497816308759,0.8850253472907194,0.44257148438240523,0.3078435381979373,0.5575302346987469,0.8753057612222056,0.39788281886234056,0.24029015719735514,0.2628917361921185,0.21158380610513094,0.7426618079148131,0.9688634297526163,0.7969350159674377,0.05917053053394117,0.7466244995515716,0.5237492148269044,0.7816772480256637,0.2894290640698186,0.23371271046060438,0.44945066072095263,0.0515978673904246,0.9947284940301926,0.9982346774946054,0.2020321169989111,0.7641132021911311,0.6789489628119566,0.6293767004561651,0.9961321797220488,0.7446514149488702,0.8505468283154851,0.5698526133885686,0.9871815147968526,0.24111429853074517,0.8672683279906553,0.3432022389985192,0.42015003099414483,0.21071596238946289,0.3369998670659784,0.4544666211952977,0.3562414529248875,0.35908158824785774,0.0549550758893933,0.6139015129491613,0.17676103519775355,0.28914149343754736,0.01036143726526173,0.9139913760739476,0.9930728108510966,0.6429664073631877,0.3989542226094718,0.0569535428568797,0.6737448001800511,0.5924073749404724,0.8228503098710267,0.6499260626863382,0.4430834348546514,0.7000529197003558,0.28169006213816117,0.24153300653928722,0.5753953080734272,0.7275489287082726,0.6896771702766767,0.1358065517701833,0.5482653785270726,0.76199622005517,0.1898777477497785,0.4322141290782162,0.12400163396167818,0.834180015999207,0.8294814252399841,0.4680691225441056,0.2051812495703227,0.08797102867567663,0.21472364160325763,0.06370022605927972,0.6694049834542453,0.9371624255142668,0.878670113045848,0.8635593522408008,0.6989016310108912,0.1753320880751088,0.03872671690699614,0.5905995533786371,0.6277179549999425,0.27497010991690685,0.8037644921636992,0.8480412560574712,0.6597150734297794,0.8424502663279869,0.4992658061080514,0.40352892616774927,0.37405746894576797,0.44879983100252563,0.9741494719342738,0.9281819441745445,0.8942774795043721,0.3342171755201059,0.33859521321848574,0.8749488973611638,0.30420170419648873,0.5662262925901448,0.7420012269973569,0.5395005598051322,0.2767238841307966,0.9540799056465428,0.7866540896438945,0.3000487896063858,0.6183262168492453,0.7674742900344353,0.8356346815308465,0.7949338062949944,0.25040915482561454,0.2418923674657789,0.6383741209856696,0.7064980568598112,0.1887240016148246,0.15885860556319864,0.4008600811456239,0.04692081037061524,0.6552047333567218,0.5964841609589288,0.37263583836403047,0.06945828259533182,0.20451246058184036,0.30063855849213184,0.127044421827877,0.14494152127373838,0.870876281036288,0.5926387167093824,0.1544633980205764,0.41547333357806737,0.5261649268327694,0.9918466645641855,0.7541657019910902,0.020751109417630476,0.3106208621077594,0.6861515553649635,0.6722516315684133,0.9889459695827741,0.7660448192830175,0.034059571833958247,0.46623833047179253,0.3977372829101232,0.05512856756710194,0.007253290825680381,0.9064406237440001,0.5522214495402983,0.5333575774153597,0.7748549779193313,0.7760088612770146,0.3222371071955765,0.14485384157049586,0.7819304933125503,0.6964223269808799,0.5687284408554993,0.22466794777712196,0.5198760773238387,0.741566474064847,0.2674996526858905,0.27022217433905693,0.7179244764377832,0.48148900637659753,0.8026547190735265,0.0353302672454765,0.9614485597965334,0.4130542174730871,0.8815471441160528,0.7379690244020721,0.07492044955553379,0.8240661804751923,0.4254715108074425,0.21733301000659122,0.010539422784562547,0.2067898946047516,0.5055196280587055,0.8826535502611691,0.9477570435596901,0.8692867112227933,0.7916274722667732,0.6255591553305145,0.9403712549481914,0.8347374952996994,0.16302887006504208,0.4587479339665048,0.7238546502504252,0.8642777315793222,0.0035371607363603452,0.32862105140076914,0.431803701733913,0.997170512118052,0.6728747536453887,0.12796904755051253,0.434466463189369,0.5567359267605134,0.6489270354650496,0.3839012578014067,0.5780008731755437,0.9720641245725178,0.012637410159817453,0.8565714938898883,0.7402558533058062,0.32272200414765717,0.8470729440525667,0.0011470965477268225,0.9845595324872951,0.3356378008998444,0.9242850112692719,0.1398843204366894,0.4527967251766166,0.6355331043540532,0.3456705975971015,0.44376376868287337,0.839689258506442,0.8091100569465829,0.6768443319495019,0.5829683316269014,0.21471335693695848,0.0761929600797483,0.375844307466346,0.40391429022459635,0.8519617353590332,0.7475165884500757,0.76060345991184,0.5667914163828826,0.4234565604828515,0.6688976583066083,0.8834413981269512,0.8298385840160232,0.3307599887733754,0.9360567738632879,0.3757883859555089,0.01181090506055571,0.22344213900776544,0.2771748407198661,0.012910842805028855,0.5196533347154034,0.5811303283445524,0.7384461991143763,0.3050944037533051,0.3422520081860495,0.10996398851127198,0.11976745762677898,0.45500832028413474,0.47125700836313933,0.7686437232896812,0.010789454770853468,0.8726077414225522,0.6807860152411143,0.46505842860244706,0.9505329004527807,0.1743288404002522,0.9696409459156132,0.35866661612429773,0.5447355722191174,0.45749605876612964,0.4085065518834218,0.4164721199145536,0.8818360866555502,0.3054239037994231,0.9256064415183511,0.7224119306223823,0.5444044802849248,0.48917858010982684,0.6149989465481353,0.37654543578052924,0.6323862618400103,0.38579623205840485,0.8031591504077956,0.6263162521277074,0.7549850912727348,0.3933859890855911,0.5851059164591416,0.912077965960894,0.8133907952759734,0.9114897665353282,0.8479166107663836,0.6186846797107908,0.9300443219809503,0.6560120285500863,0.8001863840862655,0.6889445667426922,0.4886816539660306,0.8609757349903441,0.24213406461847087,0.7717722313231582,0.01091986713605253,0.6812275041498886,0.8469676080912519,0.4117977325065749,0.6115810338477815,0.13414190324517705,0.31339012191260185,0.1398926737324082,0.599353393540393,0.06292975492187425,0.21460850840327406,0.7791784130214117,0.7616190035900453,0.8545219383825676,0.23047721633917628,0.11558038192244646,0.6793641234331391,0.9331209449162435,0.31196498813184703,0.3921302264534702,0.8580147105146386,0.5531181982677416,0.3770646694291375,0.2174006580723834,0.22156988231647667,0.054757676873380845,0.626047731689088,0.2177502091648812,0.9066570054470627,0.00712515634464983,0.2481244676790697,0.5935113446511902,0.03641025707215928,0.9867922899775636,0.024319170018066494,0.17917568427739428,0.5796107362907396,0.9440665257972716,0.6792126329811133,0.5178394094002482,0.3949827000173216,0.3658979079308612,0.8756359462648273,0.8902707815351761,0.9673004210324906,0.4496213916737586,0.21994453407831194,0.8753652535246823,0.24246381487369928,0.9655233801938832,0.18176995638945515,0.8481292921580059,0.5693411197836658,0.00727980423257335,0.054967715053337085,0.45436582452457464,0.03665030059144758,0.533612916781593,0.9922078750503172,0.18016662836213826,0.2947225460138744,0.5844033599736486,0.02454828772141404,0.46993959137921604,0.5149432444126564,0.6880411617298589,0.8767126300633298],"y":[0.5974202212104412,0.24112429513711653,0.7663152052193267,0.9442483325697552,0.4366875333220346,0.7651133380584836,0.1049096872429669,0.3197857826649897,0.6615358263155845,0.963198734276428,0.9210229895724146,0.6017046822778839,0.7606392580237054,0.46796230704316033,0.5007990450589899,0.8634673202108971,0.9556451087230748,0.4002249789160419,0.11323089876602455,0.3798748131882481,0.7830894651911151,0.36458307053686523,0.6378121645642755,0.22026057441000602,0.45304314475583596,0.4735917511939757,0.633277603672225,0.051320558813065076,0.22731235528379068,0.1736007905902518,0.6324193733360767,0.5595494912824917,0.5157570819933177,0.8752807840934962,0.32744482325610735,0.563808993013369,0.4327747709475577,0.6025902283321297,0.4020226487451387,0.1808209812783489,0.3744820782917564,0.3362324329236577,0.8265242284959946,0.6853128457978955,0.9603521666324417,0.617483207512458,0.8984652515852178,0.43540667261266386,0.6222728594854877,0.8266163264334438,0.9036070737189494,0.5809697215699751,0.05765430191725096,0.10688887737287889,0.14392536463437766,0.7881987538178988,0.34205739572272076,0.13594378024460296,0.5581394500954329,0.38382512047380957,0.04524820207721403,0.8084825661163325,0.3086922821143988,0.3135359330526414,0.3090570884829017,0.4626870600469145,0.631766269008178,0.8220401231039396,0.4516202805319449,0.8096292992173438,0.8102073633064744,0.690625743460673,0.6669777054048124,0.5416147113988405,0.2976076117774019,0.45686600494558327,0.8116513057408499,0.6017971197096921,0.4670107186684228,0.44474469515860116,0.48449138004828385,0.6279107978061135,0.5145616003446672,0.7385754367249588,0.7167104450552786,0.05003624573788967,0.6671792548046955,0.7824861437594774,0.9318661068419674,0.40554368091006154,0.2562045497546952,0.7686761039209931,0.13520308219858068,0.6523590534185596,0.893138549104881,0.6880465449076064,0.30751467320127546,0.9159919825452405,0.2646638325140107,0.5071867661658821,0.9979586145496753,0.3983618918544849,0.4158395800000514,0.11702569752875613,0.8922898611290923,0.9100644359954186,0.6158390729580763,0.0858345155349004,0.41817042172249463,0.43157475130741174,0.8834591820791006,0.46528803016351306,0.8371785449826067,0.14337242652995397,0.41558655848276305,0.14612880531405692,0.5192792682497112,0.4880746508292181,0.7430536701136748,0.46584872340928607,0.8385031235300763,0.21184773447466643,0.9398547585193449,0.29249548123036273,0.3657517859902687,0.28933557547351385,0.7087261239686911,0.4055047064919517,0.6061014232043472,0.5436338172948895,0.7482466506109148,0.5023389661486373,0.6978360687117869,0.3228623506587619,0.2994075988625595,0.969839718891368,0.16610960444988587,0.11938866653123226,0.3856298248528822,0.5320308519039908,0.45003361089663996,0.437343181329794,0.7716615222641758,0.2096532596936942,0.390682309845338,0.06398026110159216,0.2370474066602397,0.18229281259701202,0.3968183945387762,0.5237521537423403,0.9195990538081512,0.6261007818288454,0.4127181993269716,0.16949991812588316,0.6880778817824121,0.11617850048691303,0.3490200564766226,0.22780161009100774,0.8377769721324275,0.5542953372805862,0.1836757561124821,0.33290961202531155,0.4002587229610809,0.34289284825034083,0.4828085234322099,0.6674828466396707,0.07929616269509221,0.4365584888596966,0.5637242266359034,0.4615568783513193,0.6267297659535809,0.8790897657629122,0.09804486596145845,0.9718554192926946,0.49339438451716167,0.19104016487139563,0.9659499855646387,0.06957888377023091,0.9644601726696365,0.5525051474193454,0.013887316276810502,0.7327432447970185,0.4563940543326127,0.709479488417721,0.7109077247466282,0.9280917507663593,0.42360570970111344,0.3609305599003805,0.8749144820960687,0.7178199222129711,0.10715004047150622,0.9002681544131654,0.7825778710095144,0.264122842328424,0.7602001056066484,0.04005256822562686,0.09394868843602977,0.9351129773358793,0.6850007794268039,0.6801102941112854,0.1488647917942656,0.8647775547166137,0.754642282466496,0.28427004216624674,0.7497548319747638,0.1622375824858142,0.9104088843926817,0.7048806348381819,0.8024353443718504,0.7808559590742382,0.8405780173935874,0.611482279825132,0.295934689384005,0.1641806062028177,0.09913800016365915,0.41447921081275496,0.9397387460411992,0.22001809057625588,0.4639983046054428,0.3355274155965299,0.5572794163762351,0.6144730282402229,0.8915370883315166,0.9955264763662944,0.41122383003779217,0.5610774814638616,0.24504058355952196,0.08864628288032828,0.3794417835766105,0.17318178881964863,0.6781843301696541,0.8168477460420217,0.7036528396070808,0.6955107411696102,0.36795559433015934,0.641614779652171,0.5823041075870125,0.8457794467326615,0.7454502426917781,0.04409523856507336,0.49128881068883656,0.3552706217543782,0.31806497278656665,0.775692201980819,0.3219201943807726,0.021902615516214086,0.8238677372163129,0.3268010343198773,0.2763179389919771,0.6857255116540529,0.8460544432162818,0.04897548228020332,0.8063806540309467,0.9334171157942828,0.6132940293917927,0.45268487273835667,0.5955868656547659,0.5902141685413032,0.6780519081491391,0.6646502292886028,0.8537351361178063,0.043297599656914265,0.05547393536222456,0.05118194906702611,0.7460311592035073,0.47997678321196446,0.7404731428530981,0.07620948865361021,0.21504070737841363,0.8990491276208679,0.2670479563537784,0.3982124988933762,0.6734907550065832,0.35947626351286055,0.5447126556514545,0.10994578074950534,0.83020728579903,0.511424179298117,0.407668418856337,0.8560816106752177,0.4840283217867467,0.15702470396681367,0.9748902698388551,0.2868609910383214,0.38039475288503466,0.32296337358290106,0.11892499661836586,0.5029312875546788,0.5655699765061459,0.4359360493156096,0.4293729519209767,0.9881723045545558,0.7352480489200964,0.4939005689406012,0.9974860886371533,0.7824574106887728,0.949923611098086,0.34810999743442017,0.5854293344150807,0.6837704423931844,0.5504089288343502,0.6265148045384418,0.727378596479016,0.26583328606009016,0.6879038320094965,0.10629396388032508,0.8572693340769261,0.5614638983686837,0.8212043467372881,0.5309355405219089,0.46733165290821943,0.9450979662298697,0.05622629806135859,0.6738925229134006,0.7306867406714729,0.1327419305603842,0.6198131030074883,0.445505122325768,0.45890128723721224,0.0545572296172242,0.3483062619867461,0.12711959125817296,0.06577031618734208,0.4896469498583186,0.5742901919132237,0.41032685591083706,0.8926927365068189,0.4021529558657164,0.914754369031173,0.880208731734112,0.590023373223425,0.905073301244513,0.8415733870034544,0.02840458139894464,0.7504865384068857,0.7698595396760368,0.09833331046897342,0.28104395336336774,0.8328417895899061,0.4676110877806672,0.5687653306886035,0.10976986292507596,0.7223762905824003,0.6181395702756326,0.7300155206818396,0.8504852235736219,0.22232940691370362,0.1346073421819156,0.26972713864489317,0.038684278502970404,0.9435503842804271,0.7927272101064013,0.24302356874918318,0.12799172132648007,0.1016873108882651,0.5475144002785697,0.8711201434381003,0.1287076845564632,0.1762348660058446,0.24249096344079102,0.10016907528627095,0.29921092544444616,0.4878282306665258,0.4382299449611725,0.7359819649854328,0.5885639164015088,0.23889171380765062,0.503717164088037,0.735131160703495,0.548319462473739,0.5713758761908457,0.6727926156750916,0.2973856383512896,0.8147809709108016,0.11670241188614117,0.6953261305815781,0.37634239190393326,0.8333850323022161,0.7774890010452139,0.9825668828360916,0.6655829862812158,0.06452357401793052,0.1286272264958549,0.19087255979427842,0.3801441475320162,0.7744345382882564,0.10448815437850179,0.1810983568429183,0.03798141960839185,0.34589473231193957,0.14204943511941526,0.19987915033576764,0.31211973564799944,0.3805255692813041,0.5427933264457683,0.6541723130053126,0.23851675667337868,0.893756490949657,0.4326140021243813,0.290992281329281,0.9178914732693892,0.5005250711897246,0.4900800476352135,0.9646467451655795,0.16780729556714657,0.7598561949999931,0.6762595043516325,0.9899026060717138,0.8934009930832815,0.9444791848871685,0.7145771435222832,0.8435794047844037,0.9626533476053912,0.8782082019430677,0.9259870323828435,0.8760780433148951,0.6960957703831879,0.08200361358986252,0.7723921389639606,0.9405961416127635,0.20504670191433805,0.42305793564261807,0.1859964000302391,0.46221472649273054,0.19208613045834244,0.017177932395439743,0.8226247457636229,0.41855145366211943,0.9570521846599676,0.19264969547857247,0.5553145770976295,0.8897862448070399,0.8030874464596301,0.08598090125196167,0.9597902773464075,0.8036607496544637,0.4692525973370192,0.9095090156988354,0.9291150568490065,0.7422557262010593,0.19606227387796937,0.9217079948499497,0.1517684595418809,0.3564784119147745,0.5867597867062625,0.5927931857276565,0.7856578282348036,0.8490732152882804,0.2664690558277222,0.9786197454828864,0.7979956834193344,0.8724460213498809,0.7882018072218234,0.8156742534743081,0.18056843596235583,0.8203059162204092,0.4715176640160943,0.8480879588473611,0.10359505980218542,0.6640929093301406,0.530190857241816,0.34350890589225747,0.3732420675960526,0.7150524491358258,0.2504839567485735,0.1435501940026963,0.16191662231186021,0.04356727693135709,0.1405070854023609,0.2972440756638862,0.024351273429457643,0.6164359753390655,0.5779520630946586,0.9075485448763663,0.9364948145295267,0.5797610389394352,0.8097327044704721,0.14105276550261658,0.3538655294159416,0.8597945925228555,0.6542458823747664,0.18279683747610176,0.4814963128208889,0.49635200416315994,0.4230804500397184,0.41168648633069194,0.3762650406975514,0.9379952078243209,0.8104994521555088,0.020015736650505267,0.9951757806943212,0.011406708896814166,0.4262747576519338,0.4186996419293094,0.9575582209781768,0.6483684349529092,0.7156324758289406,0.2484175213578621,0.10310756951259081,0.8303880889629376]}},"id":"e72a70e3-a0d5-4d5c-9c20-7ad8d72f1245","type":"ColumnDataSource"},{"attributes":{"args":{"s2":{"id":"29d344ee-b874-4766-ba87-9f53ee103701","type":"ColumnDataSource"}},"code":"\n        var inds = cb_obj.selected['1d'].indices;\n        var d1 = cb_obj.data;\n        var d2 = s2.data;\n        d2['x'] = []\n        d2['y'] = []\n        for (i = 0; i < inds.length; i++) {\n            d2['x'].push(d1['x'][inds[i]])\n            d2['y'].push(d1['y'][inds[i]])\n        }\n        s2.trigger('change');\n    "},"id":"cc2649aa-75a2-4175-b8ca-1b12a7820fe1","type":"CustomJS"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"8f21510b-00b3-4066-b240-9bab09048fd0","type":"Title"},{"attributes":{"formatter":{"id":"6fe30512-f9c5-4e15-9f49-3eb6847ee4f3","type":"BasicTickFormatter"},"plot":{"id":"819f8b89-f9c1-409e-afcb-312026e3c23b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0dccddc4-fd18-4f53-83d0-03cff2f94a45","type":"BasicTicker"}},"id":"9a78ac6a-f047-4893-8bc4-d1042e8905e9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"481e5554-4fb9-442c-a99d-fd6734d97bd1","type":"Circle"},{"attributes":{"plot":{"id":"819f8b89-f9c1-409e-afcb-312026e3c23b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0dccddc4-fd18-4f53-83d0-03cff2f94a45","type":"BasicTicker"}},"id":"95b6fa8e-ef9e-4f0c-b500-9689051809f2","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a003bf4e-98c7-41b9-82d1-3189c38b6544","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"fd91b694-2792-4898-8c27-85bb0b72c6bb","type":"PolyAnnotation"},{"attributes":{},"id":"a51386a8-dc66-402f-9aa0-a071af683cd9","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"40583c79-c42b-4836-bca3-1dd8347fbb0a","type":"BasicTickFormatter"},"plot":{"id":"39e3e325-0336-49f7-b469-5941c91fc221","subtype":"Figure","type":"Plot"},"ticker":{"id":"e16a1b32-5c46-4c19-9810-4dbb9129b82c","type":"BasicTicker"}},"id":"34151383-6e7f-4f45-b6cd-1507ba500a4e","type":"LinearAxis"},{"attributes":{"children":[{"id":"39e3e325-0336-49f7-b469-5941c91fc221","subtype":"Figure","type":"Plot"},{"id":"819f8b89-f9c1-409e-afcb-312026e3c23b","subtype":"Figure","type":"Plot"}]},"id":"4227588b-0ac3-4688-b50d-ecba96083d1d","type":"Row"},{"attributes":{"callback":null},"id":"8c8e7d6e-461f-48aa-b160-ed39c696e38c","type":"Range1d"},{"attributes":{"below":[{"id":"9a78ac6a-f047-4893-8bc4-d1042e8905e9","type":"LinearAxis"}],"left":[{"id":"dd6d8ca8-8862-4d2c-916a-001176f338ea","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9a78ac6a-f047-4893-8bc4-d1042e8905e9","type":"LinearAxis"},{"id":"95b6fa8e-ef9e-4f0c-b500-9689051809f2","type":"Grid"},{"id":"dd6d8ca8-8862-4d2c-916a-001176f338ea","type":"LinearAxis"},{"id":"ab289629-1d46-4e05-a075-cf7ab96aebce","type":"Grid"},{"id":"69a7d2a5-b523-4fdf-b2a7-45ac86a4ec92","type":"GlyphRenderer"}],"title":{"id":"8f21510b-00b3-4066-b240-9bab09048fd0","type":"Title"},"tool_events":{"id":"a52fb616-b912-42c3-acc6-a22433102f45","type":"ToolEvents"},"toolbar":{"id":"325fc696-b647-473b-9774-4aca3d357c1c","type":"Toolbar"},"x_range":{"id":"e744e381-13fc-4c24-b90d-b774818cf5ed","type":"Range1d"},"y_range":{"id":"8c8e7d6e-461f-48aa-b160-ed39c696e38c","type":"Range1d"}},"id":"819f8b89-f9c1-409e-afcb-312026e3c23b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a52fb616-b912-42c3-acc6-a22433102f45","type":"ToolEvents"},{"attributes":{},"id":"9973a146-b162-472c-9fdd-4e6467fe2393","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"819f8b89-f9c1-409e-afcb-312026e3c23b","subtype":"Figure","type":"Plot"},"ticker":{"id":"9973a146-b162-472c-9fdd-4e6467fe2393","type":"BasicTicker"}},"id":"ab289629-1d46-4e05-a075-cf7ab96aebce","type":"Grid"}],"root_ids":["4227588b-0ac3-4688-b50d-ecba96083d1d"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"ca62d5a3-7086-475e-9162-9747fb77d2da","elementid":"bfff9b12-ee17-48cd-9978-4e41a831c5f0","modelid":"4227588b-0ac3-4688-b50d-ecba96083d1d"}];
                  
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