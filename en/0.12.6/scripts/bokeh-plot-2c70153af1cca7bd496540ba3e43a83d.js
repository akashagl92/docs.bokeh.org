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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("ce2a5f46-6af0-4164-a08a-6d993ff4bf0f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce2a5f46-6af0-4164-a08a-6d993ff4bf0f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"];
    
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
                  "DrawTool": require("custom/bk_script_29e089a3333e4b06a0eab3a80373538c.draw_tool").DrawTool,
          "MyFormatter": require("custom/bk_script_5f5f109f0ce649818d9b2abce022f66a.my_formatter").MyFormatter,
          "IonRangeSlider": require("custom/bk_script_cb59bcc0ac65491fa0510149799ce4c4.ion_range_slider").IonRangeSlider,
          "LatexLabel": require("custom/bk_script_e2ced638994c4c73ae4d7227a2df05d3.latex_label").LatexLabel
                }
              };
            }, {}],
            "custom/bk_script_29e089a3333e4b06a0eab3a80373538c.draw_tool": [function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
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
                  x = frame.xscales['default'].invert(vx);
                  y = frame.yscales['default'].invert(vy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
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
          
          }, {}],
          "custom/bk_script_5f5f109f0ce649818d9b2abce022f66a.my_formatter": [function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
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
          "custom/bk_script_cb59bcc0ac65491fa0510149799ce4c4.ion_range_slider": [function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; }, extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var callback_1 = require("core/util/callback");
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
              IonRangeSliderView.prototype.template = extensions_ion_range_slider_template_1.default;
              IonRangeSliderView.prototype.initialize = function (options) {
                  var html;
                  IonRangeSliderView.__super__.initialize.call(this, options);
                  this.connect(this.model.change, this.render);
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
                      this.callbackWrapper = callback_1.throttle(function () {
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
          
          }, {"./extensions_ion_range_slider_template": "e085a9a90830143ec33cae71ac298dd092e660172b275f09afa91c6d703ddb28"}],
          "custom/bk_script_e2ced638994c4c73ae4d7227a2df05d3.latex_label": [function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
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
                  var angle, ctx, panel_offset, sx, sy, vx, vy;
                  ctx = this.plot_view.canvas_view.ctx;
                  switch (this.model.angle_units) {
                      case "rad":
                          angle = -1 * this.model.angle;
                          break;
                      case "deg":
                          angle = -1 * this.model.angle * Math.PI / 180.0;
                  }
                  if (this.model.x_units === "data") {
                      vx = this.xscale.compute(this.model.x);
                  }
                  else {
                      vx = this.model.x;
                  }
                  sx = this.canvas.vx_to_sx(vx);
                  if (this.model.y_units === "data") {
                      vy = this.yscale.compute(this.model.y);
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
                  this._css_text(ctx, "", sx + this.model.x_offset, sy - this.model.y_offset, angle);
                  return katex.render(this.model.text, this.el, {
                      displayMode: true
                  });
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
          "e085a9a90830143ec33cae71ac298dd092e660172b275f09afa91c6d703ddb28": [function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var DOM = require("core/dom");
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
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"7d698658-d747-4af0-b435-2157a0b15b18":{"roots":{"references":[{"attributes":{},"id":"51c94c2b-5626-42d7-8fff-2170356d525e","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"13502d64-1bf5-4162-acd9-b9bcde1a5909","type":"Slider"}]},"id":"23649dfa-aeb5-416c-89ea-3090278fbe83","type":"WidgetBox"},{"attributes":{"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"}},"id":"94e5dace-0a6c-48f9-89f4-aec74cb16b18","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"9de0b2da-e0e9-4359-9373-2857132c2402","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985],"y":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985]}},"id":"30154c74-b65f-4361-9b14-cde5e4c7063d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30154c74-b65f-4361-9b14-cde5e4c7063d","type":"ColumnDataSource"},"glyph":{"id":"f4ada669-1d04-4651-beb4-c2f9cc18009d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a68cb72b-c40f-485c-a855-8acd90f42f75","type":"Line"},"selection_glyph":null},"id":"c96aa271-3c6f-4124-8886-95bf4eadeb09","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"a68cb72b-c40f-485c-a855-8acd90f42f75","type":"Line"},{"attributes":{},"id":"4d73a508-c6f9-48c8-94bf-ad9c5edac249","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f1070564-bc45-4a27-9f7a-36932c598a2c","type":"DataRange1d"},{"attributes":{},"id":"7ae07260-1aa3-454c-bd83-dcd37fda5104","type":"ToolEvents"},{"attributes":{"callback":null},"id":"6eefb9c3-b9b5-428c-b196-70931f637cb8","type":"DataRange1d"},{"attributes":{},"id":"f66b1caf-f016-46ce-afdb-f12ade313c57","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"b0aa43f2-f95e-4bfa-b068-c702afc664e3","type":"CustomJS"},"end":5,"title":"Bokeh Slider - Power","value":1},"id":"13502d64-1bf5-4162-acd9-b9bcde1a5909","type":"Slider"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#ed5565"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"f4ada669-1d04-4651-beb4-c2f9cc18009d","type":"Line"},{"attributes":{"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"}},"id":"8f90563a-f724-4f1e-b977-4ec62b83ebb3","type":"PanTool"},{"attributes":{},"id":"841961b2-33de-40b2-9ec5-b51a1efe10f8","type":"BasicTicker"},{"attributes":{"below":[{"id":"418c91f2-a848-46d7-a653-5ee2f451b03d","type":"LinearAxis"}],"left":[{"id":"c4e32c55-02b7-406e-901e-df3781e360be","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"418c91f2-a848-46d7-a653-5ee2f451b03d","type":"LinearAxis"},{"id":"d044d6e6-fef2-43df-a4cf-9a3b6bdaa634","type":"Grid"},{"id":"c4e32c55-02b7-406e-901e-df3781e360be","type":"LinearAxis"},{"id":"9033efc6-4115-462d-91be-0fcc7bae8ec7","type":"Grid"},{"id":"40229fcc-0a5e-43e2-9d3d-36b6af510002","type":"BoxAnnotation"},{"id":"c96aa271-3c6f-4124-8886-95bf4eadeb09","type":"GlyphRenderer"}],"title":{"id":"9de0b2da-e0e9-4359-9373-2857132c2402","type":"Title"},"tool_events":{"id":"7ae07260-1aa3-454c-bd83-dcd37fda5104","type":"ToolEvents"},"toolbar":{"id":"0fcef883-9263-4b56-baf9-2e09e426b0ef","type":"Toolbar"},"x_range":{"id":"6eefb9c3-b9b5-428c-b196-70931f637cb8","type":"DataRange1d"},"x_scale":{"id":"265130b6-c127-4795-bbf8-05f5de4352b0","type":"LinearScale"},"y_range":{"id":"f1070564-bc45-4a27-9f7a-36932c598a2c","type":"DataRange1d"},"y_scale":{"id":"27c37c3f-4cc7-4b78-bd40-751f8d3b52fa","type":"LinearScale"}},"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"},{"attributes":{"args":{"source":{"id":"30154c74-b65f-4361-9b14-cde5e4c7063d","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.range\n        x = data['x']\n        y = data['y']\n        pow = (Math.log(y[100])/Math.log(x[100]))\n        console.log(pow)\n        delta = (f[1]-f[0])/x.length\n        for (i = 0; i < x.length; i++) {\n            x[i] = delta*i + f[0]\n            y[i] = Math.pow(x[i], pow)\n        }\n        source.change.emit();\n    "},"id":"b84cbe51-58ce-4b6e-8977-420d77d71373","type":"CustomJS"},{"attributes":{"formatter":{"id":"51c94c2b-5626-42d7-8fff-2170356d525e","type":"BasicTickFormatter"},"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"841961b2-33de-40b2-9ec5-b51a1efe10f8","type":"BasicTicker"}},"id":"c4e32c55-02b7-406e-901e-df3781e360be","type":"LinearAxis"},{"attributes":{"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d73a508-c6f9-48c8-94bf-ad9c5edac249","type":"BasicTicker"}},"id":"d044d6e6-fef2-43df-a4cf-9a3b6bdaa634","type":"Grid"},{"attributes":{"children":[{"id":"536714f2-7132-4742-b679-069c08304cd1","type":"IonRangeSlider"}]},"id":"0146fbf5-c612-4ac4-8bb6-c3fc5e93a513","type":"WidgetBox"},{"attributes":{},"id":"265130b6-c127-4795-bbf8-05f5de4352b0","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8f90563a-f724-4f1e-b977-4ec62b83ebb3","type":"PanTool"},{"id":"a9515ed5-6fe8-4eed-b877-e52454fd3952","type":"WheelZoomTool"},{"id":"5fe542f1-52d9-4cd6-a489-15320289e060","type":"BoxZoomTool"},{"id":"94e5dace-0a6c-48f9-89f4-aec74cb16b18","type":"SaveTool"},{"id":"1ff437ec-b75c-4fc0-9428-d4691765c767","type":"ResetTool"},{"id":"aa353542-f2f0-452f-88c2-5648a1f4a8d8","type":"HelpTool"}]},"id":"0fcef883-9263-4b56-baf9-2e09e426b0ef","type":"Toolbar"},{"attributes":{"overlay":{"id":"40229fcc-0a5e-43e2-9d3d-36b6af510002","type":"BoxAnnotation"},"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"}},"id":"5fe542f1-52d9-4cd6-a489-15320289e060","type":"BoxZoomTool"},{"attributes":{"callback":{"id":"b84cbe51-58ce-4b6e-8977-420d77d71373","type":"CustomJS"},"callback_policy":"continuous","end":0.99,"range":[0.01,0.985],"start":0.01,"step":0.01,"title":"Ion Range Slider - Range"},"id":"536714f2-7132-4742-b679-069c08304cd1","type":"IonRangeSlider"},{"attributes":{"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"}},"id":"aa353542-f2f0-452f-88c2-5648a1f4a8d8","type":"HelpTool"},{"attributes":{},"id":"27c37c3f-4cc7-4b78-bd40-751f8d3b52fa","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"841961b2-33de-40b2-9ec5-b51a1efe10f8","type":"BasicTicker"}},"id":"9033efc6-4115-462d-91be-0fcc7bae8ec7","type":"Grid"},{"attributes":{"args":{"source":{"id":"30154c74-b65f-4361-9b14-cde5e4c7063d","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.change.emit();\n    "},"id":"b0aa43f2-f95e-4bfa-b068-c702afc664e3","type":"CustomJS"},{"attributes":{"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"}},"id":"1ff437ec-b75c-4fc0-9428-d4691765c767","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"40229fcc-0a5e-43e2-9d3d-36b6af510002","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"}},"id":"a9515ed5-6fe8-4eed-b877-e52454fd3952","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"},{"id":"23649dfa-aeb5-416c-89ea-3090278fbe83","type":"WidgetBox"},{"id":"0146fbf5-c612-4ac4-8bb6-c3fc5e93a513","type":"WidgetBox"}]},"id":"21514f27-6877-4a72-a177-4e9b863101b9","type":"Column"},{"attributes":{"formatter":{"id":"f66b1caf-f016-46ce-afdb-f12ade313c57","type":"BasicTickFormatter"},"plot":{"id":"6a2f8871-2d0d-4671-9522-9fbd675546a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d73a508-c6f9-48c8-94bf-ad9c5edac249","type":"BasicTicker"}},"id":"418c91f2-a848-46d7-a653-5ee2f451b03d","type":"LinearAxis"}],"root_ids":["21514f27-6877-4a72-a177-4e9b863101b9"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"7d698658-d747-4af0-b435-2157a0b15b18","elementid":"ce2a5f46-6af0-4164-a08a-6d993ff4bf0f","modelid":"21514f27-6877-4a72-a177-4e9b863101b9"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
