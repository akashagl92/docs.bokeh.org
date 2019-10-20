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
      };var element = document.getElementById("3f48feb5-797e-43c4-9e4f-b7f8f7c0ab70");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3f48feb5-797e-43c4-9e4f-b7f8f7c0ab70' but no matching script tag was found. ")
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
                  var docs_json = {"1b31bbef-b02f-4ea0-b572-13c2aada695c":{"roots":{"references":[{"attributes":{},"id":"26424dee-caa5-4a10-a8a6-64a080f66c9a","type":"BasicTickFormatter"},{"attributes":{},"id":"289f6595-f090-4168-80df-e68808fdcff2","type":"BasicTicker"},{"attributes":{"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"}},"id":"7602ab0f-37a1-4da7-961a-775864a7c93c","type":"SaveTool"},{"attributes":{"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"}},"id":"b30df0c6-8fd9-447b-83e4-4548b0df7849","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31ed7f67-eb26-4e92-a4bf-9ed200ba5c44","type":"Square"},{"attributes":{"below":[{"id":"f5d3d6e3-6b17-419a-b173-34da2da615c3","type":"LinearAxis"}],"left":[{"id":"29a23689-a359-409c-a071-ef1f1e99bdf1","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f5d3d6e3-6b17-419a-b173-34da2da615c3","type":"LinearAxis"},{"id":"bee98834-b268-4917-ba32-8d7c9738eb07","type":"Grid"},{"id":"29a23689-a359-409c-a071-ef1f1e99bdf1","type":"LinearAxis"},{"id":"ccb8a9ec-f6c8-4f1f-a53e-f4aea7377362","type":"Grid"},{"id":"eb360612-30f5-4845-8b9b-60b83d6a843e","type":"BoxAnnotation"},{"id":"1ae6d93c-6af6-40f0-b8c6-a72d73685d42","type":"GlyphRenderer"}],"title":{"id":"f31bc069-a66f-416e-a9e3-c9ff159a6650","type":"Title"},"tool_events":{"id":"51831fe2-cf32-4395-95f5-33eda8afd2d8","type":"ToolEvents"},"toolbar":{"id":"1d3d6f96-c5a9-4473-90a7-fdb2d8554619","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ebe44a70-51ba-4382-ba7c-30f6d962b423","type":"DataRange1d"},"y_range":{"id":"69cf84f1-70ef-4054-9a2b-3dea879c0191","type":"DataRange1d"}},"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"}},"id":"0de4768d-6f79-45cd-a03a-c9110b2623f5","type":"PanTool"},{"attributes":{"overlay":{"id":"0f07870f-0174-400e-b66b-56a375fe7880","type":"BoxAnnotation"},"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"}},"id":"53e7cc1c-af05-48a7-9115-892067d6435f","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[1.0,0.9919548128307953,0.9679487013963562,0.9283679330160726,0.8738493770697849,0.8052702575310586,0.7237340381050701,0.6305526670845225,0.5272254676105024,0.41541501300188644,0.2969203753282749,0.17364817766693041,0.04758191582374218,-0.07924995685678854,-0.20480666806519074,-0.32706796331742166,-0.4440666126057741,-0.5539200638661103,-0.654860733945285,-0.7452644496757547,-0.8236765814298327,-0.8888354486549234,-0.9396926207859083,-0.975429786885407,-0.9954719225730846,-0.9994965423831851,-0.9874388886763943,-0.9594929736144974,-0.9161084574320696,-0.857983413234977,-0.7860530947427874,-0.7014748877063213,-0.6056096871376666,-0.4999999999999996,-0.3863451256931287,-0.26647381369003464,-0.14231483827328523,-0.01586596383480761,0.11083819990101086,0.23575893550942748,0.35688622159187167,0.4722710747726829,0.5800569095711979,0.6785094115571323,0.7660444431189778,0.8412535328311812,0.9029265382866211,0.9500711177409454,0.9819286972627068,0.9979866764718844,0.9979866764718843,0.9819286972627067,0.9500711177409452,0.9029265382866213,0.841253532831181,0.7660444431189781,0.678509411557132,0.5800569095711984,0.47227107477268254,0.3568862215918721,0.2357589355094271,0.11083819990101135,-0.015865963834808008,-0.14231483827328475,-0.26647381369003503,-0.38634512569312823,-0.5000000000000008,-0.6056096871376669,-0.7014748877063212,-0.7860530947427872,-0.8579834132349774,-0.9161084574320697,-0.9594929736144974,-0.9874388886763942,-0.9994965423831852,-0.9954719225730846,-0.9754297868854072,-0.9396926207859086,-0.8888354486549233,-0.8236765814298327,-0.745264449675755,-0.6548607339452844,-0.5539200638661099,-0.4440666126057742,-0.3270679633174221,-0.2048066680651899,-0.07924995685678815,0.04758191582374214,0.17364817766692972,0.29692037532827553,0.4154150130018866,0.5272254676105022,0.630552667084522,0.7237340381050705,0.8052702575310586,0.8738493770697848,0.9283679330160729,0.9679487013963564,0.9919548128307953,1.0]}},"id":"3319ff17-c947-4929-9811-11b2f341f670","type":"ColumnDataSource"},{"attributes":{},"id":"9716613e-e8f1-4760-87bb-2a56bbb7f653","type":"BasicTicker"},{"attributes":{"data_source":{"id":"e9369127-c898-4a23-970c-befd7c04ae7a","type":"ColumnDataSource"},"glyph":{"id":"31ed7f67-eb26-4e92-a4bf-9ed200ba5c44","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"c4e981e2-1742-4172-879e-9d923e61ed9b","type":"Square"},"selection_glyph":null},"id":"1ae6d93c-6af6-40f0-b8c6-a72d73685d42","type":"GlyphRenderer"},{"attributes":{},"id":"3ab2dc68-78d9-49c1-87d8-7ebb9ea782ff","type":"BasicTicker"},{"attributes":{"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"}},"id":"eeb0d315-2297-45c7-8d46-f4924ee80788","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ab2dc68-78d9-49c1-87d8-7ebb9ea782ff","type":"BasicTicker"}},"id":"63bb1acf-bf6b-429b-87c0-3ea2a5263f55","type":"Grid"},{"attributes":{"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"}},"id":"65e704b8-48f2-45ae-8b69-d7e4309a1137","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0f07870f-0174-400e-b66b-56a375fe7880","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9928098f-4a99-47d0-90d5-bb66b56fd7e8","type":"BasicTicker"}},"id":"ccb8a9ec-f6c8-4f1f-a53e-f4aea7377362","type":"Grid"},{"attributes":{"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"}},"id":"46f539af-7b3e-4dbf-9f4a-47688d07b532","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e4d50e71-5770-4d98-9102-2878fd8f2ece","type":"PanTool"},{"id":"eeb0d315-2297-45c7-8d46-f4924ee80788","type":"WheelZoomTool"},{"id":"53e7cc1c-af05-48a7-9115-892067d6435f","type":"BoxZoomTool"},{"id":"a2afa759-b2d7-46b4-80f4-c1291d71338b","type":"SaveTool"},{"id":"42ea59ad-cc86-44c6-bcff-44c281b4cb6d","type":"ResetTool"},{"id":"b30df0c6-8fd9-447b-83e4-4548b0df7849","type":"HelpTool"}]},"id":"8e7b857a-7a41-46b2-a8cf-60cb64bdf0fb","type":"Toolbar"},{"attributes":{"children":[{"id":"7780e9b8-f165-4b66-b304-62f26fdbe973","type":"Row"}]},"id":"f3c42b9c-6abe-4cdf-a58e-7db657712a75","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eb360612-30f5-4845-8b9b-60b83d6a843e","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"}},"id":"10392115-8d39-42bd-88b9-58660bae6617","type":"ResetTool"},{"attributes":{},"id":"a1311d97-129e-4254-99e9-fe56ef628553","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2eac575d-34b1-45ac-92db-bd8602c44e1f","type":"BasicTickFormatter"},"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9716613e-e8f1-4760-87bb-2a56bbb7f653","type":"BasicTicker"}},"id":"337379d5-2c32-48a2-9e22-13a2f6761744","type":"LinearAxis"},{"attributes":{},"id":"ca914d71-35a7-4def-904a-8e9ef41a0bb0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4d3c664d-98a4-4053-b9db-53b1570363dc","type":"BasicTickFormatter"},"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ab2dc68-78d9-49c1-87d8-7ebb9ea782ff","type":"BasicTicker"}},"id":"24aab99d-85e0-4772-adce-dbc83308cc27","type":"LinearAxis"},{"attributes":{"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca914d71-35a7-4def-904a-8e9ef41a0bb0","type":"BasicTicker"}},"id":"c4a3696d-280b-42b4-b9f8-3c6912628393","type":"Grid"},{"attributes":{},"id":"51831fe2-cf32-4395-95f5-33eda8afd2d8","type":"ToolEvents"},{"attributes":{},"id":"4d3c664d-98a4-4053-b9db-53b1570363dc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"}},"id":"071b7864-e3bf-4905-9f14-81232ccba950","type":"PanTool"},{"attributes":{},"id":"5519fe3b-bd11-40db-ab0a-40d5a1d8ed88","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"2b6ed142-a924-4cfc-bb10-5528b1735727","type":"Title"},{"attributes":{},"id":"9928098f-4a99-47d0-90d5-bb66b56fd7e8","type":"BasicTicker"},{"attributes":{"formatter":{"id":"26424dee-caa5-4a10-a8a6-64a080f66c9a","type":"BasicTickFormatter"},"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca914d71-35a7-4def-904a-8e9ef41a0bb0","type":"BasicTicker"}},"id":"754ac648-caed-438a-b8b8-56bdaa2356cd","type":"LinearAxis"},{"attributes":{"overlay":{"id":"23bceee6-bfe1-45e1-b337-477f2268bcad","type":"BoxAnnotation"},"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"}},"id":"4ca77072-fa06-4b21-bdb3-82281ac60a67","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"}},"id":"e4d50e71-5770-4d98-9102-2878fd8f2ece","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[1.0,1.1185472664045446,1.2190966885774355,1.3000303886764002,1.3600461131702537,1.398178186585699,1.4138130495871821,1.4066991313762793,1.3769508975600169,1.3250470083564048,1.2518226167723487,1.1584559306791384,1.0464492550067501,0.9176048190951538,0.773995778149588,0.6179328553972467,0.45192716168556174,0.27864979076866114,0.10088884040897328,-0.07849544915946294,-0.25661671756706184,-0.43060892692751285,-0.5976724774602394,-0.7551192540988663,-0.9004158792689021,-1.031224475881253,-1.1454402846497445,-1.2412255304559272,-1.3170389928386834,-1.3716608048083834,-1.4042120809633927,-1.414169059085184,-1.4013715276684988,-1.3660254037844384,-1.30869941979771,-1.2303159722499768,-1.1321362801542179,-1.0157400915086827,-0.8830002645602433,-0.7360526328141141,-0.5772616386732351,-0.4091822886748991,-0.2345190424791379,-0.05608229710040091,0.1232568334324382,0.30061271537558376,0.47313162619744914,0.6380376720424583,0.7926774529022971,0.9345627568153199,1.0614105961284492,1.1711799416231168,1.2621045634394328,1.3327214503757927,1.3818943502867786,1.4088320528055172,1.4131011202146655,1.394632861621534,1.3537244382202647,1.2910340818569788,1.207570503832969,1.1046766643622654,0.9840081638390671,0.8475066036076481,0.6973683448699071,0.5360091684114534,0.3660254037844375,0.19015215339316494,0.011219283672541769,-0.16789410852218156,-0.34430602166157165,-0.5151779220254562,-0.6777604167730675,-0.8294374927030437,-0.9677686088851182,-1.0905279658772673,-1.1957403196719474,-1.2817127641115766,-1.347061970382334,-1.3907364452926034,-1.4120334501920464,-1.4106103082995434,-1.3864899185008817,-1.3400603868971102,-1.2720687820320904,-1.1836091142799687,-1.0761047328087305,-0.9512854233592658,-0.8111595753452784,-0.6579818661157981,-0.49421698235263173,-0.32249996233901235,-0.1455937972072353,0.03365502662295894,0.21236232847641823,0.3876526409693158,0.5567054773557463,0.7168007142152776,0.8653623592570461,0.9999999999999996]}},"id":"e9369127-c898-4a23-970c-befd7c04ae7a","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"},{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"},{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"}]},"id":"7780e9b8-f165-4b66-b304-62f26fdbe973","type":"Row"},{"attributes":{"overlay":{"id":"eb360612-30f5-4845-8b9b-60b83d6a843e","type":"BoxAnnotation"},"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"}},"id":"0244da61-a568-4e3b-aeeb-af2c3a36b186","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"},"ticker":{"id":"68f110f2-25c0-4bb7-bb9e-40c2ea51f7ce","type":"BasicTicker"}},"id":"bee98834-b268-4917-ba32-8d7c9738eb07","type":"Grid"},{"attributes":{"formatter":{"id":"f83bd611-a18b-4647-9c44-e2ec129261fd","type":"BasicTickFormatter"},"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"289f6595-f090-4168-80df-e68808fdcff2","type":"BasicTicker"}},"id":"5f49a4e5-e76e-4ae4-820e-d3e0fdd91967","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.12659245357374926,0.2511479871810792,0.3716624556603276,0.4861967361004687,0.5929079290546404,0.690079011482112,0.7761464642917568,0.8497254299495144,0.9096319953545183,0.9549022414440739,0.984807753012208,0.998867339183008,0.9968547759519424,0.9788024462147787,0.9450008187146685,0.8959937742913359,0.8325698546347714,0.7557495743542583,0.6667690005162917,0.5670598638627709,0.4582265217274105,0.3420201433256689,0.2203105327865408,0.09505604330418244,-0.03172793349806786,-0.15800139597335008,-0.28173255684142984,-0.4009305354066138,-0.5136773915734064,-0.6181589862206053,-0.7126941713788629,-0.7957618405308321,-0.8660254037844388,-0.9223542941045814,-0.9638421585599422,-0.9898214418809327,-0.9998741276738751,-0.9938384644612541,-0.9718115683235417,-0.9341478602651068,-0.881453363447582,-0.8145759520503358,-0.7345917086575332,-0.6427876096865396,-0.5406408174555974,-0.4297949120891719,-0.31203344569848707,-0.18925124436040974,-0.06342391965656452,0.06342391965656492,0.18925124436041013,0.31203344569848745,0.4297949120891715,0.5406408174555978,0.6427876096865391,0.7345917086575334,0.8145759520503356,0.8814533634475821,0.9341478602651067,0.9718115683235418,0.9938384644612541,0.9998741276738751,0.9898214418809328,0.963842158559942,0.9223542941045816,0.8660254037844383,0.7957618405308319,0.7126941713788629,0.6181589862206056,0.5136773915734058,0.40093053540661344,0.2817325568414299,0.15800139597335056,0.03172793349806701,-0.09505604330418282,-0.22031053278654034,-0.342020143325668,-0.45822652172741085,-0.5670598638627707,-0.6667690005162913,-0.7557495743542588,-0.8325698546347716,-0.8959937742913359,-0.9450008187146683,-0.9788024462147789,-0.9968547759519424,-0.998867339183008,-0.9848077530122081,-0.9549022414440737,-0.9096319953545183,-0.8497254299495145,-0.7761464642917573,-0.6900790114821116,-0.5929079290546404,-0.48619673610046904,-0.3716624556603267,-0.2511479871810788,-0.1265924535737493,-4.898587196589413e-16]}},"id":"4f63729a-eb01-455e-979c-eb6042d59713","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"}},"id":"45c977eb-debc-4ad6-b662-cba08e3329e6","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9716613e-e8f1-4760-87bb-2a56bbb7f653","type":"BasicTicker"}},"id":"8c2d9c6e-1719-4559-a75e-a180a2bb9968","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4e981e2-1742-4172-879e-9d923e61ed9b","type":"Square"},{"attributes":{"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"}},"id":"7315db44-9dbd-42c2-89d5-52614bd3cead","type":"WheelZoomTool"},{"attributes":{},"id":"b7844571-6793-410a-958d-f5fa362d5c3e","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"289f6595-f090-4168-80df-e68808fdcff2","type":"BasicTicker"}},"id":"b9357961-b3a2-4634-8904-2b3fabdb04aa","type":"Grid"},{"attributes":{"callback":null},"id":"69cf84f1-70ef-4054-9a2b-3dea879c0191","type":"DataRange1d"},{"attributes":{"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"}},"id":"42ea59ad-cc86-44c6-bcff-44c281b4cb6d","type":"ResetTool"},{"attributes":{},"id":"2eac575d-34b1-45ac-92db-bd8602c44e1f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e375db25-e2c3-4fca-92ab-969c33355a38","type":"Triangle"},{"attributes":{"data_source":{"id":"3319ff17-c947-4929-9811-11b2f341f670","type":"ColumnDataSource"},"glyph":{"id":"7a8d8777-871e-4c17-8114-ed4a82219d1a","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"e375db25-e2c3-4fca-92ab-969c33355a38","type":"Triangle"},"selection_glyph":null},"id":"34fcacdc-f101-4992-a604-8df14aaa9c9a","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"754ac648-caed-438a-b8b8-56bdaa2356cd","type":"LinearAxis"}],"left":[{"id":"5f49a4e5-e76e-4ae4-820e-d3e0fdd91967","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"754ac648-caed-438a-b8b8-56bdaa2356cd","type":"LinearAxis"},{"id":"c4a3696d-280b-42b4-b9f8-3c6912628393","type":"Grid"},{"id":"5f49a4e5-e76e-4ae4-820e-d3e0fdd91967","type":"LinearAxis"},{"id":"b9357961-b3a2-4634-8904-2b3fabdb04aa","type":"Grid"},{"id":"0f07870f-0174-400e-b66b-56a375fe7880","type":"BoxAnnotation"},{"id":"e26e123f-87ee-442c-9d37-a67fb5d1a09e","type":"GlyphRenderer"}],"title":{"id":"2b6ed142-a924-4cfc-bb10-5528b1735727","type":"Title"},"tool_events":{"id":"5519fe3b-bd11-40db-ab0a-40d5a1d8ed88","type":"ToolEvents"},"toolbar":{"id":"8e7b857a-7a41-46b2-a8cf-60cb64bdf0fb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ebe44a70-51ba-4382-ba7c-30f6d962b423","type":"DataRange1d"},"y_range":{"id":"544ec3ac-d501-4601-886c-4e9da09697b9","type":"DataRange1d"}},"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"544ec3ac-d501-4601-886c-4e9da09697b9","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"071b7864-e3bf-4905-9f14-81232ccba950","type":"PanTool"},{"id":"7315db44-9dbd-42c2-89d5-52614bd3cead","type":"WheelZoomTool"},{"id":"4ca77072-fa06-4b21-bdb3-82281ac60a67","type":"BoxZoomTool"},{"id":"7602ab0f-37a1-4da7-961a-775864a7c93c","type":"SaveTool"},{"id":"e340189c-ce9c-4c59-9984-bd7ae00b5e73","type":"ResetTool"},{"id":"46f539af-7b3e-4dbf-9f4a-47688d07b532","type":"HelpTool"}]},"id":"1f3b8ddd-b94e-4104-9c85-0b51f27190da","type":"Toolbar"},{"attributes":{"formatter":{"id":"a1311d97-129e-4254-99e9-fe56ef628553","type":"BasicTickFormatter"},"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"},"ticker":{"id":"68f110f2-25c0-4bb7-bb9e-40c2ea51f7ce","type":"BasicTicker"}},"id":"f5d3d6e3-6b17-419a-b173-34da2da615c3","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8651e314-1d2c-40e0-ba3a-1b52aca8ae1d","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23bceee6-bfe1-45e1-b337-477f2268bcad","type":"BoxAnnotation"},{"attributes":{},"id":"74db59c4-70e8-4d34-b600-a315331b433c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"}},"id":"76a65658-beee-4e22-a436-5592214a942d","type":"SaveTool"},{"attributes":{},"id":"68f110f2-25c0-4bb7-bb9e-40c2ea51f7ce","type":"BasicTicker"},{"attributes":{},"id":"f83bd611-a18b-4647-9c44-e2ec129261fd","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"f31bc069-a66f-416e-a9e3-c9ff159a6650","type":"Title"},{"attributes":{"plot":{"id":"ab6c61d3-4ccd-413d-89a3-7766bc4225b3","subtype":"Figure","type":"Plot"}},"id":"a2afa759-b2d7-46b4-80f4-c1291d71338b","type":"SaveTool"},{"attributes":{"data_source":{"id":"4f63729a-eb01-455e-979c-eb6042d59713","type":"ColumnDataSource"},"glyph":{"id":"8651e314-1d2c-40e0-ba3a-1b52aca8ae1d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7a5df08a-35dd-4d26-92e8-4081a3111616","type":"Circle"},"selection_glyph":null},"id":"e26e123f-87ee-442c-9d37-a67fb5d1a09e","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"73fe6659-10e4-49d1-95c3-237a7fbfb308","type":"Title"},{"attributes":{"plot":{"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"}},"id":"e340189c-ce9c-4c59-9984-bd7ae00b5e73","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a5df08a-35dd-4d26-92e8-4081a3111616","type":"Circle"},{"attributes":{"callback":null},"id":"ebe44a70-51ba-4382-ba7c-30f6d962b423","type":"DataRange1d"},{"attributes":{"formatter":{"id":"74db59c4-70e8-4d34-b600-a315331b433c","type":"BasicTickFormatter"},"plot":{"id":"0bc5c350-c7d0-4862-8467-ce7413d7c42c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9928098f-4a99-47d0-90d5-bb66b56fd7e8","type":"BasicTicker"}},"id":"29a23689-a359-409c-a071-ef1f1e99bdf1","type":"LinearAxis"},{"attributes":{"below":[{"id":"24aab99d-85e0-4772-adce-dbc83308cc27","type":"LinearAxis"}],"left":[{"id":"337379d5-2c32-48a2-9e22-13a2f6761744","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"24aab99d-85e0-4772-adce-dbc83308cc27","type":"LinearAxis"},{"id":"63bb1acf-bf6b-429b-87c0-3ea2a5263f55","type":"Grid"},{"id":"337379d5-2c32-48a2-9e22-13a2f6761744","type":"LinearAxis"},{"id":"8c2d9c6e-1719-4559-a75e-a180a2bb9968","type":"Grid"},{"id":"23bceee6-bfe1-45e1-b337-477f2268bcad","type":"BoxAnnotation"},{"id":"34fcacdc-f101-4992-a604-8df14aaa9c9a","type":"GlyphRenderer"}],"title":{"id":"73fe6659-10e4-49d1-95c3-237a7fbfb308","type":"Title"},"tool_events":{"id":"b7844571-6793-410a-958d-f5fa362d5c3e","type":"ToolEvents"},"toolbar":{"id":"1f3b8ddd-b94e-4104-9c85-0b51f27190da","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ebe44a70-51ba-4382-ba7c-30f6d962b423","type":"DataRange1d"},"y_range":{"id":"544ec3ac-d501-4601-886c-4e9da09697b9","type":"DataRange1d"}},"id":"7ca3f222-9e10-4add-930a-8c7ba1193f6c","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0de4768d-6f79-45cd-a03a-c9110b2623f5","type":"PanTool"},{"id":"65e704b8-48f2-45ae-8b69-d7e4309a1137","type":"WheelZoomTool"},{"id":"0244da61-a568-4e3b-aeeb-af2c3a36b186","type":"BoxZoomTool"},{"id":"76a65658-beee-4e22-a436-5592214a942d","type":"SaveTool"},{"id":"10392115-8d39-42bd-88b9-58660bae6617","type":"ResetTool"},{"id":"45c977eb-debc-4ad6-b662-cba08e3329e6","type":"HelpTool"}]},"id":"1d3d6f96-c5a9-4473-90a7-fdb2d8554619","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a8d8777-871e-4c17-8114-ed4a82219d1a","type":"Triangle"}],"root_ids":["f3c42b9c-6abe-4cdf-a58e-7db657712a75"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"1b31bbef-b02f-4ea0-b572-13c2aada695c","elementid":"3f48feb5-797e-43c4-9e4f-b7f8f7c0ab70","modelid":"f3c42b9c-6abe-4cdf-a58e-7db657712a75"}];
                  
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