(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("1ca8c3dd-e197-42e9-95ca-aaa224409b11");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ca8c3dd-e197-42e9-95ca-aaa224409b11' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          
          (function outer(modules, cache, entry) {
            if (Bokeh != null) {
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                var plugin = Bokeh.require(entry[i]);
                Bokeh.Models.register_models(plugin.models);
          
                for (var name in plugin) {
                  if (name !== "models") {
                    Bokeh[name] = plugin[name];
                  }
                }
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          
          ({
            "custom/main": [function(require, module, exports) {
              module.exports = {
                models: {
                  "MyFormatter": require("custom/bk_script_08f8365abd2444bbb7d9c48ca57f0d2d.my_formatter").MyFormatter,
          "IonRangeSlider": require("custom/bk_script_1c6526d23bd84624aaee2d1301462e4a.ion_range_slider").IonRangeSlider,
          "LatexLabel": require("custom/bk_script_cdc746781670473d8d27c9a1c06b67f6.latex_label").LatexLabel,
          "DrawTool": require("custom/bk_script_e25b70cdc6dd461b944620285e491896.draw_tool").DrawTool
                }
              };
            }, {}],
            "30413f2dce342ed9dc670a24158e40d4f649bfdcd172091c50c14e988032820b": [function(require, module, exports) {
          "use strict";
          var DOM = require("core/util/dom");
          Object.defineProperty(exports, "__esModule", { value: true });
          exports.default = function (props) {
              var title, value;
              if (props.title != null) {
                  if (props.title.length != 0) {
                      title = DOM.createElement("label", { for: props.id },
                          " ",
                          props.title,
                          ": ");
                  }
                  value = DOM.createElement("input", { type: "text", id: props.id, readonly: true });
              }
              return (DOM.createElement("div", { class: "bk-slider-parent" },
                  title,
                  value,
                  DOM.createElement("div", { class: "bk-slider-horizontal" },
                      DOM.createElement("input", { type: "text", class: "slider", id: props.id }))));
          };
          
          }, {}],
          "custom/bk_script_08f8365abd2444bbb7d9c48ca57f0d2d.my_formatter": [function(require, module, exports) {
          "use strict";
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var tick_formatter_1 = require("models/formatters/tick_formatter");
          exports.MyFormatter = (function (superClass) {
              extend(MyFormatter, superClass);
              function MyFormatter() {
                  return MyFormatter.__super__.constructor.apply(this, arguments);
              }
              MyFormatter.prototype.type = "MyFormatter";
              MyFormatter.prototype.doFormat = function (ticks) {
                  var formatted, i, j, ref;
                  formatted = ["" + ticks[0]];
                  for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                      formatted.push("+" + ((ticks[i] - ticks[0]).toPrecision(2)));
                  }
                  return formatted;
              };
              return MyFormatter;
          })(tick_formatter_1.TickFormatter);
          
          }, {}],
          "custom/bk_script_1c6526d23bd84624aaee2d1301462e4a.ion_range_slider": [function(require, module, exports) {
          "use strict";
          var bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; }, extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var _ = require("underscore");
          var p = require("core/properties");
          var input_widget_1 = require("models/widgets/input_widget");
          var extensions_ion_range_slider_template_1 = require("./extensions_ion_range_slider_template");
          exports.IonRangeSliderView = (function (superClass) {
              extend(IonRangeSliderView, superClass);
              function IonRangeSliderView() {
                  this.slide = bind(this.slide, this);
                  this.slidestop = bind(this.slidestop, this);
                  return IonRangeSliderView.__super__.constructor.apply(this, arguments);
              }
              IonRangeSliderView.prototype.tagName = "div";
              IonRangeSliderView.prototype.template = extensions_ion_range_slider_template_1.default;
              IonRangeSliderView.prototype.initialize = function (options) {
                  var html;
                  IonRangeSliderView.__super__.initialize.call(this, options);
                  this.listenTo(this.model, 'change', this.render);
                  this.$el.empty();
                  html = this.template(this.model.attributes);
                  this.$el.html(html);
                  this.callbackWrapper = null;
                  if (this.model.callback_policy === 'continuous') {
                      this.callbackWrapper = function () {
                          var ref;
                          return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                      };
                  }
                  if (this.model.callback_policy === 'throttle' && this.model.callback) {
                      this.callbackWrapper = _.throttle(function () {
                          var ref;
                          return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                      }, this.model.callback_throttle);
                  }
                  return this.render();
              };
              IonRangeSliderView.prototype.render = function () {
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
                  this.$el.find("#" + this.model.id).val(range.join(' - '));
                  this.$el.find('.bk-slider-parent').height(this.model.height);
                  return this;
              };
              IonRangeSliderView.prototype.slidestop = function (data) {
                  var ref;
                  if (this.model.callback_policy === 'mouseup' || this.model.callback_policy === 'throttle') {
                      return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                  }
              };
              IonRangeSliderView.prototype.slide = function (data) {
                  var range, value;
                  range = [data.from, data.to];
                  value = range.join(' - ');
                  this.$el.find("#" + this.model.id).val(value);
                  this.model.range = range;
                  if (this.callbackWrapper) {
                      return this.callbackWrapper();
                  }
              };
              return IonRangeSliderView;
          })(input_widget_1.InputWidgetView);
          exports.IonRangeSlider = (function (superClass) {
              extend(IonRangeSlider, superClass);
              function IonRangeSlider() {
                  return IonRangeSlider.__super__.constructor.apply(this, arguments);
              }
              IonRangeSlider.prototype.default_view = exports.IonRangeSliderView;
              IonRangeSlider.prototype.type = "IonRangeSlider";
              IonRangeSlider.define({
                  range: [p.Any],
                  start: [p.Number, 0],
                  end: [p.Number, 1],
                  step: [p.Number, 0.1],
                  grid: [p.Bool, true],
                  callback_throttle: [p.Number, 200],
                  callback_policy: [p.String, "throttle"]
              });
              return IonRangeSlider;
          })(input_widget_1.InputWidget);
          
          }, {"./extensions_ion_range_slider_template": "30413f2dce342ed9dc670a24158e40d4f649bfdcd172091c50c14e988032820b"}],
          "custom/bk_script_cdc746781670473d8d27c9a1c06b67f6.latex_label": [function(require, module, exports) {
          "use strict";
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var label_1 = require("models/annotations/label");
          exports.LatexLabelView = (function (superClass) {
              extend(LatexLabelView, superClass);
              function LatexLabelView() {
                  return LatexLabelView.__super__.constructor.apply(this, arguments);
              }
              LatexLabelView.prototype.render = function () {
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
                  }
                  else {
                      vx = this.model.x;
                  }
                  sx = this.canvas.vx_to_sx(vx);
                  if (this.model.y_units === "data") {
                      vy = this.ymapper.map_to_target(this.model.y);
                  }
                  else {
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
          })(label_1.LabelView);
          exports.LatexLabel = (function (superClass) {
              extend(LatexLabel, superClass);
              function LatexLabel() {
                  return LatexLabel.__super__.constructor.apply(this, arguments);
              }
              LatexLabel.prototype.type = 'LatexLabel';
              LatexLabel.prototype.default_view = exports.LatexLabelView;
              return LatexLabel;
          })(label_1.Label);
          
          }, {}],
          "custom/bk_script_e25b70cdc6dd461b944620285e491896.draw_tool": [function(require, module, exports) {
          "use strict";
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var p = require("core/properties");
          var gesture_tool_1 = require("models/tools/gestures/gesture_tool");
          exports.DrawToolView = (function (superClass) {
              extend(DrawToolView, superClass);
              function DrawToolView() {
                  return DrawToolView.__super__.constructor.apply(this, arguments);
              }
              DrawToolView.prototype._pan_start = function (e) {
                  return this.model.source.data = {
                      x: [],
                      y: []
                  };
              };
              DrawToolView.prototype._pan = function (e) {
                  var canvas, frame, vx, vy, x, y;
                  frame = this.plot_model.frame;
                  canvas = this.plot_view.canvas;
                  vx = canvas.sx_to_vx(e.bokeh.sx);
                  vy = canvas.sy_to_vy(e.bokeh.sy);
                  if (!frame.contains(vx, vy)) {
                      return null;
                  }
                  x = frame.x_mappers['default'].map_from_target(vx);
                  y = frame.y_mappers['default'].map_from_target(vy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.trigger('change');
              };
              DrawToolView.prototype._pan_end = function (e) {
                  return null;
              };
              return DrawToolView;
          })(gesture_tool_1.GestureToolView);
          exports.DrawTool = (function (superClass) {
              extend(DrawTool, superClass);
              function DrawTool() {
                  return DrawTool.__super__.constructor.apply(this, arguments);
              }
              DrawTool.prototype.default_view = exports.DrawToolView;
              DrawTool.prototype.type = "DrawTool";
              DrawTool.prototype.tool_name = "Drag Span";
              DrawTool.prototype.icon = "bk-tool-icon-lasso-select";
              DrawTool.prototype.event_type = "pan";
              DrawTool.prototype.default_order = 12;
              DrawTool.define({
                  source: [p.Instance]
              });
              return DrawTool;
          })(gesture_tool_1.GestureTool);
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"5bfee8fd-29e0-4888-811b-cf5b5344b0d2":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985],"y":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985]}},"id":"955e4f55-4270-41b2-ba5e-28cba35587ef","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7996ba4-29f7-4706-8e37-0e88fee82cab","type":"BasicTicker"}},"id":"c7453460-6ebc-45b8-aa4e-2f823b3b9559","type":"Grid"},{"attributes":{"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"}},"id":"552a81d7-61fb-435e-a50b-4456d574fe7b","type":"PanTool"},{"attributes":{"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"}},"id":"0778e884-d10e-4d84-ae1a-2f2b0ffaa60d","type":"WheelZoomTool"},{"attributes":{},"id":"e7996ba4-29f7-4706-8e37-0e88fee82cab","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"},"ticker":{"id":"91472595-d1d2-4898-a925-abbc5814a267","type":"BasicTicker"}},"id":"31b9c4be-8963-4f22-9453-8f556e0736c2","type":"Grid"},{"attributes":{"formatter":{"id":"51b0cc4c-535f-4c3b-9bd1-42f2b1dd7950","type":"BasicTickFormatter"},"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7996ba4-29f7-4706-8e37-0e88fee82cab","type":"BasicTicker"}},"id":"8faf426b-d760-40b3-bba7-d3cc5f78707f","type":"LinearAxis"},{"attributes":{},"id":"91472595-d1d2-4898-a925-abbc5814a267","type":"BasicTicker"},{"attributes":{"children":[{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"},{"id":"8e88890d-b55e-40ff-a71e-77677d1a4f7d","type":"WidgetBox"},{"id":"d2499ed0-0ad8-45be-98c7-c26e09464ca7","type":"WidgetBox"}]},"id":"47d12c44-6b79-4352-9130-d869fd273ccd","type":"Column"},{"attributes":{},"id":"6226d909-59a5-4932-95a5-0b478cc2fa4e","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"6c8447f2-6886-480a-9b1f-50ce1b2f4b68","type":"Title"},{"attributes":{"formatter":{"id":"6226d909-59a5-4932-95a5-0b478cc2fa4e","type":"BasicTickFormatter"},"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"},"ticker":{"id":"91472595-d1d2-4898-a925-abbc5814a267","type":"BasicTicker"}},"id":"4d1fe830-d4f3-4f3d-9d00-44f7f70f4811","type":"LinearAxis"},{"attributes":{"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"}},"id":"90dce995-241d-4f2b-a713-e1ff17dcf4f0","type":"SaveTool"},{"attributes":{},"id":"b713bc35-329c-4295-98c8-a68d98cb60f3","type":"ToolEvents"},{"attributes":{"args":{"source":{"id":"955e4f55-4270-41b2-ba5e-28cba35587ef","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.trigger('change');\n    "},"id":"7c87e36a-55b6-4c16-b505-3c1579f71534","type":"CustomJS"},{"attributes":{"overlay":{"id":"6c8fa325-7d56-4328-819c-f011dc9cfaa5","type":"BoxAnnotation"},"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"}},"id":"7578022c-a278-43d9-9635-6673de6fc37e","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"cef2a65f-759c-4c06-a656-4e2a67565014","type":"Slider"}]},"id":"8e88890d-b55e-40ff-a71e-77677d1a4f7d","type":"WidgetBox"},{"attributes":{"args":{"source":{"id":"955e4f55-4270-41b2-ba5e-28cba35587ef","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.range\n        x = data['x']\n        y = data['y']\n        pow = (Math.log(y[100])/Math.log(x[100]))\n        console.log(pow)\n        delta = (f[1]-f[0])/x.length\n        for (i = 0; i < x.length; i++) {\n            x[i] = delta*i + f[0]\n            y[i] = Math.pow(x[i], pow)\n        }\n        source.trigger('change');\n    "},"id":"bb46bb5f-c5ea-4082-839c-4df3e934e3e0","type":"CustomJS"},{"attributes":{"callback":{"id":"bb46bb5f-c5ea-4082-839c-4df3e934e3e0","type":"CustomJS"},"callback_policy":"continuous","end":0.99,"range":[0.01,0.985],"start":0.01,"step":0.01,"title":"Ion Range Slider - Range"},"id":"49177f80-0af8-4c9a-8e16-599c5d80592d","type":"IonRangeSlider"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"06e5f6eb-ee6d-4419-933c-ef59cd70b662","type":"Line"},{"attributes":{"callback":null},"id":"b20df64c-85fc-4ae1-97d6-7444a596be95","type":"DataRange1d"},{"attributes":{"callback":null},"id":"af23d0e9-3846-4e54-800b-e459fb123603","type":"DataRange1d"},{"attributes":{"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"}},"id":"d182beda-50f6-4849-9645-65a1f1395f52","type":"HelpTool"},{"attributes":{"callback":{"id":"7c87e36a-55b6-4c16-b505-3c1579f71534","type":"CustomJS"},"end":5,"title":"Bokeh Slider - Power","value":1},"id":"cef2a65f-759c-4c06-a656-4e2a67565014","type":"Slider"},{"attributes":{"children":[{"id":"49177f80-0af8-4c9a-8e16-599c5d80592d","type":"IonRangeSlider"}]},"id":"d2499ed0-0ad8-45be-98c7-c26e09464ca7","type":"WidgetBox"},{"attributes":{"plot":{"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"}},"id":"c6144c93-d6a3-4ffc-97ab-55a21681a423","type":"ResetTool"},{"attributes":{"below":[{"id":"8faf426b-d760-40b3-bba7-d3cc5f78707f","type":"LinearAxis"}],"left":[{"id":"4d1fe830-d4f3-4f3d-9d00-44f7f70f4811","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8faf426b-d760-40b3-bba7-d3cc5f78707f","type":"LinearAxis"},{"id":"c7453460-6ebc-45b8-aa4e-2f823b3b9559","type":"Grid"},{"id":"4d1fe830-d4f3-4f3d-9d00-44f7f70f4811","type":"LinearAxis"},{"id":"31b9c4be-8963-4f22-9453-8f556e0736c2","type":"Grid"},{"id":"6c8fa325-7d56-4328-819c-f011dc9cfaa5","type":"BoxAnnotation"},{"id":"d2bf765a-609d-461a-8f57-cf8756cb7852","type":"GlyphRenderer"}],"title":{"id":"6c8447f2-6886-480a-9b1f-50ce1b2f4b68","type":"Title"},"tool_events":{"id":"b713bc35-329c-4295-98c8-a68d98cb60f3","type":"ToolEvents"},"toolbar":{"id":"0034146b-d66f-47c7-b44e-98fc24f9e6a5","type":"Toolbar"},"x_range":{"id":"af23d0e9-3846-4e54-800b-e459fb123603","type":"DataRange1d"},"y_range":{"id":"b20df64c-85fc-4ae1-97d6-7444a596be95","type":"DataRange1d"}},"id":"614c9043-4a04-4914-aa57-eee635428500","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#ed5565"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"15a84a7d-63f6-439b-bcaf-bc5bee4cebcc","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6c8fa325-7d56-4328-819c-f011dc9cfaa5","type":"BoxAnnotation"},{"attributes":{},"id":"51b0cc4c-535f-4c3b-9bd1-42f2b1dd7950","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"955e4f55-4270-41b2-ba5e-28cba35587ef","type":"ColumnDataSource"},"glyph":{"id":"15a84a7d-63f6-439b-bcaf-bc5bee4cebcc","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"06e5f6eb-ee6d-4419-933c-ef59cd70b662","type":"Line"},"selection_glyph":null},"id":"d2bf765a-609d-461a-8f57-cf8756cb7852","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"552a81d7-61fb-435e-a50b-4456d574fe7b","type":"PanTool"},{"id":"0778e884-d10e-4d84-ae1a-2f2b0ffaa60d","type":"WheelZoomTool"},{"id":"7578022c-a278-43d9-9635-6673de6fc37e","type":"BoxZoomTool"},{"id":"90dce995-241d-4f2b-a713-e1ff17dcf4f0","type":"SaveTool"},{"id":"c6144c93-d6a3-4ffc-97ab-55a21681a423","type":"ResetTool"},{"id":"d182beda-50f6-4849-9645-65a1f1395f52","type":"HelpTool"}]},"id":"0034146b-d66f-47c7-b44e-98fc24f9e6a5","type":"Toolbar"}],"root_ids":["47d12c44-6b79-4352-9130-d869fd273ccd"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"5bfee8fd-29e0-4888-811b-cf5b5344b0d2","elementid":"1ca8c3dd-e197-42e9-95ca-aaa224409b11","modelid":"47d12c44-6b79-4352-9130-d869fd273ccd"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
