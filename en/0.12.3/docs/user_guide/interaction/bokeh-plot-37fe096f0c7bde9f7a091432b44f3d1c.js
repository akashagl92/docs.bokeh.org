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
      };var element = document.getElementById("5d6c2f00-6aee-42c3-b627-7599f683211e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d6c2f00-6aee-42c3-b627-7599f683211e' but no matching script tag was found. ")
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
                  var docs_json = {"179a55dd-4566-4b20-8baa-796761d3a874":{"roots":{"references":[{"attributes":{"child":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"},"title":"line"},"id":"2dcc7127-2238-42dd-853a-2203be3ad991","type":"Panel"},{"attributes":{"plot":null,"text":null},"id":"daba69b7-1487-46c2-a7dd-e3def3c7ff0e","type":"Title"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"a35750f2-1bcc-41b1-9ce5-b620442a8d8d","type":"Line"},{"attributes":{},"id":"5a8ff7c6-15d3-4f01-b111-f17790717fa7","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a8ff7c6-15d3-4f01-b111-f17790717fa7","type":"BasicTicker"}},"id":"504cafc3-22d4-4202-b642-e7fc3d5a18cc","type":"Grid"},{"attributes":{"overlay":{"id":"255a24a5-288a-4286-8aa3-7fa2c461c8fb","type":"BoxAnnotation"},"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"}},"id":"9c40943b-9914-4e53-8ac3-30550feab3e6","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4546ccec-237b-489e-860e-485f5b69f748","type":"BasicTicker"}},"id":"c10260b7-c2f4-4aff-a996-0f8370899d9a","type":"Grid"},{"attributes":{"formatter":{"id":"651b07f8-fe60-4455-95e5-bb1d3decdee8","type":"BasicTickFormatter"},"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f7d0713-154f-4bb3-b48e-a7e987ad9f9e","type":"BasicTicker"}},"id":"247037c0-f11c-4e1d-9cda-412df1d42342","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"1803f8e1-7624-4374-8926-ae4efb241640","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"17102cd7-12cc-41db-87c1-a7efe00d7acf","type":"Panel"},{"id":"2dcc7127-2238-42dd-853a-2203be3ad991","type":"Panel"}]},"id":"66d8c5d8-4275-4976-b8ec-e2915a6361e1","type":"Tabs"},{"attributes":{},"id":"78dbfa55-5b61-43b5-91e1-55cbbdcc79cb","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"}},"id":"ec407947-8889-47d8-860e-b8533bc3da0a","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8557f32a-9dfc-4815-9480-2842c76237db","type":"Circle"},{"attributes":{"callback":null},"id":"777615ca-6094-4e17-8300-4b5890e0aeb0","type":"DataRange1d"},{"attributes":{"callback":null},"id":"5e102ead-cb1f-4e1f-9d49-53ab360a3842","type":"DataRange1d"},{"attributes":{},"id":"4546ccec-237b-489e-860e-485f5b69f748","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"a186a4d4-b5fc-4159-9da6-a0f93ec78525","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"519d1e04-db47-4b55-a296-393fbaa968b7","type":"BasicTickFormatter"},"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a8ff7c6-15d3-4f01-b111-f17790717fa7","type":"BasicTicker"}},"id":"842ed04c-6561-45b9-923c-c07c43f6d940","type":"LinearAxis"},{"attributes":{"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f94795c2-4477-4037-94b7-e2587f769411","type":"BasicTicker"}},"id":"8a38996e-c8fd-4ae2-ba23-5657986be892","type":"Grid"},{"attributes":{"data_source":{"id":"a186a4d4-b5fc-4159-9da6-a0f93ec78525","type":"ColumnDataSource"},"glyph":{"id":"a35750f2-1bcc-41b1-9ce5-b620442a8d8d","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e0677564-cdd7-4577-8cf9-0092521cdb76","type":"Line"},"selection_glyph":null},"id":"3a1125fd-c6db-4492-b5d0-272554cb23cb","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0677564-cdd7-4577-8cf9-0092521cdb76","type":"Line"},{"attributes":{},"id":"651b07f8-fe60-4455-95e5-bb1d3decdee8","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d678153b-c673-4b2f-ae54-5820e9d8c258","type":"BasicTickFormatter"},"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f94795c2-4477-4037-94b7-e2587f769411","type":"BasicTicker"}},"id":"4faf1a41-bb6a-4924-b7e9-84d5f0716209","type":"LinearAxis"},{"attributes":{"child":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"17102cd7-12cc-41db-87c1-a7efe00d7acf","type":"Panel"},{"attributes":{"formatter":{"id":"78dbfa55-5b61-43b5-91e1-55cbbdcc79cb","type":"BasicTickFormatter"},"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4546ccec-237b-489e-860e-485f5b69f748","type":"BasicTicker"}},"id":"fc23c788-0ac4-4530-a3db-6d9f6b33be1e","type":"LinearAxis"},{"attributes":{"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"}},"id":"96c9b1e5-27e6-4bfe-a5c7-eb097b310e1f","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe8a1dbb-4ed2-458a-80d3-086d99797f48","type":"Circle"},{"attributes":{"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f7d0713-154f-4bb3-b48e-a7e987ad9f9e","type":"BasicTicker"}},"id":"2ee6f797-ca7e-4942-8e03-c1f817b6ccd6","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ec407947-8889-47d8-860e-b8533bc3da0a","type":"PanTool"},{"id":"bf28b131-f26c-4e54-86ee-c920c43112b8","type":"WheelZoomTool"},{"id":"9c40943b-9914-4e53-8ac3-30550feab3e6","type":"BoxZoomTool"},{"id":"530ab850-3128-40e5-8f79-be9b6ec7ec29","type":"SaveTool"},{"id":"976a98aa-7e6b-402d-8b09-62ef40630ba7","type":"ResetTool"},{"id":"96c9b1e5-27e6-4bfe-a5c7-eb097b310e1f","type":"HelpTool"}]},"id":"995ef01e-a7b4-4c9d-ba51-70621da867b9","type":"Toolbar"},{"attributes":{},"id":"d678153b-c673-4b2f-ae54-5820e9d8c258","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"}},"id":"b30028eb-0f53-4bcc-805c-4f6dc3e91e47","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"4faf1a41-bb6a-4924-b7e9-84d5f0716209","type":"LinearAxis"}],"left":[{"id":"fc23c788-0ac4-4530-a3db-6d9f6b33be1e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4faf1a41-bb6a-4924-b7e9-84d5f0716209","type":"LinearAxis"},{"id":"8a38996e-c8fd-4ae2-ba23-5657986be892","type":"Grid"},{"id":"fc23c788-0ac4-4530-a3db-6d9f6b33be1e","type":"LinearAxis"},{"id":"c10260b7-c2f4-4aff-a996-0f8370899d9a","type":"Grid"},{"id":"649f3788-5999-46a1-8a67-adda3b8a63c6","type":"BoxAnnotation"},{"id":"3a1125fd-c6db-4492-b5d0-272554cb23cb","type":"GlyphRenderer"}],"title":{"id":"51c4f513-2b59-4bb6-9912-fadcbd5f903e","type":"Title"},"tool_events":{"id":"582c0dd0-6a27-4633-93f0-fd58f76c6fb1","type":"ToolEvents"},"toolbar":{"id":"7f48819a-30ae-4a2d-833d-0b17fd0c5689","type":"Toolbar"},"x_range":{"id":"fad895b7-5cf9-4ffd-90d1-cf2dc44959ae","type":"DataRange1d"},"y_range":{"id":"5e102ead-cb1f-4e1f-9d49-53ab360a3842","type":"DataRange1d"}},"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"}},"id":"530ab850-3128-40e5-8f79-be9b6ec7ec29","type":"SaveTool"},{"attributes":{},"id":"519d1e04-db47-4b55-a296-393fbaa968b7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"}},"id":"ff6e7dbe-d704-42b2-8fc9-361a7fb930dd","type":"PanTool"},{"attributes":{"overlay":{"id":"649f3788-5999-46a1-8a67-adda3b8a63c6","type":"BoxAnnotation"},"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"}},"id":"55c1ab94-4d16-4e0d-81db-befa297c03c2","type":"BoxZoomTool"},{"attributes":{},"id":"f94795c2-4477-4037-94b7-e2587f769411","type":"BasicTicker"},{"attributes":{"below":[{"id":"247037c0-f11c-4e1d-9cda-412df1d42342","type":"LinearAxis"}],"left":[{"id":"842ed04c-6561-45b9-923c-c07c43f6d940","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"247037c0-f11c-4e1d-9cda-412df1d42342","type":"LinearAxis"},{"id":"2ee6f797-ca7e-4942-8e03-c1f817b6ccd6","type":"Grid"},{"id":"842ed04c-6561-45b9-923c-c07c43f6d940","type":"LinearAxis"},{"id":"504cafc3-22d4-4202-b642-e7fc3d5a18cc","type":"Grid"},{"id":"255a24a5-288a-4286-8aa3-7fa2c461c8fb","type":"BoxAnnotation"},{"id":"58bbb9cf-1521-4fe1-b81a-a8da314b894d","type":"GlyphRenderer"}],"title":{"id":"daba69b7-1487-46c2-a7dd-e3def3c7ff0e","type":"Title"},"tool_events":{"id":"f3546b79-6351-44b7-8553-226e69c93909","type":"ToolEvents"},"toolbar":{"id":"995ef01e-a7b4-4c9d-ba51-70621da867b9","type":"Toolbar"},"x_range":{"id":"ab0ec875-ba2f-4350-b47e-d51a22072471","type":"DataRange1d"},"y_range":{"id":"777615ca-6094-4e17-8300-4b5890e0aeb0","type":"DataRange1d"}},"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"ab0ec875-ba2f-4350-b47e-d51a22072471","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ff6e7dbe-d704-42b2-8fc9-361a7fb930dd","type":"PanTool"},{"id":"b30028eb-0f53-4bcc-805c-4f6dc3e91e47","type":"WheelZoomTool"},{"id":"55c1ab94-4d16-4e0d-81db-befa297c03c2","type":"BoxZoomTool"},{"id":"665bbc16-1e76-4bee-a2ec-93faaa7c6367","type":"SaveTool"},{"id":"240eb2f5-b285-44b1-b86f-bea7e2687ccc","type":"ResetTool"},{"id":"28977132-7463-4919-8635-427f5e8e2a4c","type":"HelpTool"}]},"id":"7f48819a-30ae-4a2d-833d-0b17fd0c5689","type":"Toolbar"},{"attributes":{},"id":"582c0dd0-6a27-4633-93f0-fd58f76c6fb1","type":"ToolEvents"},{"attributes":{"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"}},"id":"240eb2f5-b285-44b1-b86f-bea7e2687ccc","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"255a24a5-288a-4286-8aa3-7fa2c461c8fb","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"}},"id":"976a98aa-7e6b-402d-8b09-62ef40630ba7","type":"ResetTool"},{"attributes":{"callback":null},"id":"fad895b7-5cf9-4ffd-90d1-cf2dc44959ae","type":"DataRange1d"},{"attributes":{"plot":{"id":"c9d568c1-8116-40cc-aebc-d38b7e06634a","subtype":"Figure","type":"Plot"}},"id":"bf28b131-f26c-4e54-86ee-c920c43112b8","type":"WheelZoomTool"},{"attributes":{},"id":"8f7d0713-154f-4bb3-b48e-a7e987ad9f9e","type":"BasicTicker"},{"attributes":{},"id":"f3546b79-6351-44b7-8553-226e69c93909","type":"ToolEvents"},{"attributes":{"data_source":{"id":"1803f8e1-7624-4374-8926-ae4efb241640","type":"ColumnDataSource"},"glyph":{"id":"8557f32a-9dfc-4815-9480-2842c76237db","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"fe8a1dbb-4ed2-458a-80d3-086d99797f48","type":"Circle"},"selection_glyph":null},"id":"58bbb9cf-1521-4fe1-b81a-a8da314b894d","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"51c4f513-2b59-4bb6-9912-fadcbd5f903e","type":"Title"},{"attributes":{"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"}},"id":"28977132-7463-4919-8635-427f5e8e2a4c","type":"HelpTool"},{"attributes":{"plot":{"id":"7cc9fa98-4f60-4e25-aa57-f1c8d365a74b","subtype":"Figure","type":"Plot"}},"id":"665bbc16-1e76-4bee-a2ec-93faaa7c6367","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"649f3788-5999-46a1-8a67-adda3b8a63c6","type":"BoxAnnotation"}],"root_ids":["66d8c5d8-4275-4976-b8ec-e2915a6361e1"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"179a55dd-4566-4b20-8baa-796761d3a874","elementid":"5d6c2f00-6aee-42c3-b627-7599f683211e","modelid":"66d8c5d8-4275-4976-b8ec-e2915a6361e1"}];
                  
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