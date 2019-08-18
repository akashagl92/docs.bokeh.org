(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("e0db3c34-4a9b-467b-85e8-6456e3d3ee45");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0db3c34-4a9b-467b-85e8-6456e3d3ee45' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function(root, factory) {
          //  if(typeof exports === 'object' && typeof module === 'object')
          //    factory(require("Bokeh"));
          //  else if(typeof define === 'function' && define.amd)
          //    define(["Bokeh"], factory);
          //  else if(typeof exports === 'object')
          //    factory(require("Bokeh"));
          //  else
              factory(root["Bokeh"]);
          })(this, function(Bokeh) {
            var define;
            return (function outer(modules, entry) {
            if (Bokeh != null) {
              return Bokeh.register_plugin(modules, {}, entry);
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          ({
            "custom/main": function(require, module, exports) {
              var models = {
                "LatexLabel": require("custom/bk_script_c4466613b6804e8c80acd382cb6db136.latex_label").LatexLabel,
          "IonRangeSlider": require("custom/bk_script_e35fec432daa47a3ae5c521d93c8b443.ion_range_slider").IonRangeSlider,
          "DrawTool": require("custom/bk_script_e598591ca0634860a8e2f26a9f166b66.draw_tool").DrawTool,
          "MyFormatter": require("custom/bk_script_f16d8cf4697145d1b69db1e37b657e4a.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_c4466613b6804e8c80acd382cb6db136.latex_label": function(require, module, exports) {
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
          
          },
          "custom/bk_script_e35fec432daa47a3ae5c521d93c8b443.ion_range_slider": function(require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          var bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; }, extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var callback_1 = require("core/util/callback");
          var p = require("core/properties");
          var dom_1 = require("core/dom");
          var input_widget_1 = require("models/widgets/input_widget");
          exports.IonRangeSliderView = (function (superClass) {
              extend(IonRangeSliderView, superClass);
              function IonRangeSliderView() {
                  this.slide = bind(this.slide, this);
                  this.slidestop = bind(this.slidestop, this);
                  return IonRangeSliderView.__super__.constructor.apply(this, arguments);
              }
              IonRangeSliderView.prototype._createElement = function () {
                  var el;
                  el = IonRangeSliderView.__super__._createElement.call(this);
                  this.$el = $(el);
                  return el;
              };
              IonRangeSliderView.prototype.template = function () {
                  var title, value;
                  if (this.model.title != null) {
                      if (this.model.title.length !== 0) {
                          title = dom_1.label({
                              "for": this.model.id
                          }, " " + this.model.title + ": ");
                      }
                      value = dom_1.input({
                          type: "text",
                          id: this.model.id,
                          readonly: true
                      });
                  }
                  return dom_1.div({
                      "class": "bk-slider-parent"
                  }, title, value, dom_1.div({
                      "class": "bk-slider-horizontal"
                  }, dom_1.input({
                      type: "text",
                      "class": "slider",
                      id: this.model.id
                  })));
              };
              IonRangeSliderView.prototype.initialize = function (options) {
                  IonRangeSliderView.__super__.initialize.call(this, options);
                  this.connect(this.model.change, this.render);
                  dom_1.empty(this.el);
                  this.el.appendChild(this.template());
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
                  var disable, from, grid, max, min, opts, range, slider, step, to;
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
                  dom_1.input = this.$el.find('.slider')[0];
                  slider = jQuery(dom_1.input).ionRangeSlider(opts);
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
          
          },
          "custom/bk_script_e598591ca0634860a8e2f26a9f166b66.draw_tool": function(require, module, exports) {
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
          
          },
          "custom/bk_script_f16d8cf4697145d1b69db1e37b657e4a.my_formatter": function(require, module, exports) {
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
          
          }
          }, "custom/main");
          ;
          });
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"a9bfd7d5-5173-458b-89e0-9bbc932f5a3e":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"fda16f33-b608-48a9-8bea-018b7283bd97","type":"Title"},{"attributes":{"callback":{"id":"095d6c0b-a2d8-4d74-8d62-e81f1cd780ac","type":"CustomJS"},"callback_policy":"continuous","end":0.99,"range":[0.01,0.985],"start":0.01,"step":0.01,"title":"Ion Range Slider - Range"},"id":"50638cf1-ea76-42cf-a276-bf4395122c46","type":"IonRangeSlider"},{"attributes":{"children":[{"id":"50638cf1-ea76-42cf-a276-bf4395122c46","type":"IonRangeSlider"}]},"id":"d31fc0e5-15a4-46cd-9e12-e47664415055","type":"WidgetBox"},{"attributes":{"callback":{"id":"6a7c9d56-96d4-4306-ae3c-ea8345b3e752","type":"CustomJS"},"end":5,"start":0,"step":0.1,"title":"Bokeh Slider - Power","value":1},"id":"c055f0e8-5e74-4eaf-aa5d-b6dd9763d5cd","type":"Slider"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985],"y":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985]}},"id":"56fc27c3-cfb1-422d-83ba-d64284d22880","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"85969a91-fdce-471d-a493-9cff27255aea","subtype":"Figure","type":"Plot"},{"id":"5cd8c2b4-29e6-4fe7-b615-5dacb045e79c","type":"WidgetBox"},{"id":"d31fc0e5-15a4-46cd-9e12-e47664415055","type":"WidgetBox"}]},"id":"b7b7d885-2e94-4df2-8300-eded26de058b","type":"Column"},{"attributes":{"children":[{"id":"c055f0e8-5e74-4eaf-aa5d-b6dd9763d5cd","type":"Slider"}]},"id":"5cd8c2b4-29e6-4fe7-b615-5dacb045e79c","type":"WidgetBox"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"16b056cb-776e-4cc8-b798-731c6e7d8309","type":"Line"},{"attributes":{"callback":null},"id":"a856a2c3-8c08-42ad-af8a-fec23e9cf465","type":"DataRange1d"},{"attributes":{},"id":"b190b447-8613-4d98-b0b7-5f40b9c53de7","type":"LinearScale"},{"attributes":{},"id":"f1da691b-a09f-4dde-ad1f-9fe89726469b","type":"LinearScale"},{"attributes":{"plot":{"id":"85969a91-fdce-471d-a493-9cff27255aea","subtype":"Figure","type":"Plot"},"ticker":{"id":"ffb03b65-0103-42f2-a130-9338bd0bcc98","type":"BasicTicker"}},"id":"14fc8f32-2dc1-4bda-89c9-3f1b7d4a1712","type":"Grid"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#ed5565"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"70152dbc-2f25-4d09-aba8-22569d9b3190","type":"Line"},{"attributes":{"formatter":{"id":"c430aba5-5ec5-4122-8da8-d61cd112a73e","type":"BasicTickFormatter"},"plot":{"id":"85969a91-fdce-471d-a493-9cff27255aea","subtype":"Figure","type":"Plot"},"ticker":{"id":"ffb03b65-0103-42f2-a130-9338bd0bcc98","type":"BasicTicker"}},"id":"59b4bc4b-92c9-4074-9245-553cb718e326","type":"LinearAxis"},{"attributes":{"data_source":{"id":"56fc27c3-cfb1-422d-83ba-d64284d22880","type":"ColumnDataSource"},"glyph":{"id":"70152dbc-2f25-4d09-aba8-22569d9b3190","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16b056cb-776e-4cc8-b798-731c6e7d8309","type":"Line"},"selection_glyph":null,"view":{"id":"7d944fec-87cc-4eb2-bfc2-1da6604e6856","type":"CDSView"}},"id":"0563c3a4-44f7-437b-92e2-442d2e0cdf07","type":"GlyphRenderer"},{"attributes":{},"id":"ffb03b65-0103-42f2-a130-9338bd0bcc98","type":"BasicTicker"},{"attributes":{"formatter":{"id":"66899bab-aba7-47fe-b3dd-8648f88b64f1","type":"BasicTickFormatter"},"plot":{"id":"85969a91-fdce-471d-a493-9cff27255aea","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe95a903-5cc6-4d3f-a042-02ba74fc3483","type":"BasicTicker"}},"id":"af78e3c7-84e3-46f7-8b84-91a1e29e2437","type":"LinearAxis"},{"attributes":{},"id":"fe95a903-5cc6-4d3f-a042-02ba74fc3483","type":"BasicTicker"},{"attributes":{"callback":null},"id":"fd3d8798-f9d6-4d82-84c4-a4ebeabbb23f","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"85969a91-fdce-471d-a493-9cff27255aea","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe95a903-5cc6-4d3f-a042-02ba74fc3483","type":"BasicTicker"}},"id":"f203a630-6d37-45f6-997c-d1c8eb1c9e5c","type":"Grid"},{"attributes":{"args":{"source":{"id":"56fc27c3-cfb1-422d-83ba-d64284d22880","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.change.emit();\n    "},"id":"6a7c9d56-96d4-4306-ae3c-ea8345b3e752","type":"CustomJS"},{"attributes":{},"id":"9d2da03d-359a-47c1-8a14-61bbc3689857","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6c6b1e44-0b8c-4ccc-9aa1-c46311f7375f","type":"BoxAnnotation"},{"attributes":{},"id":"9cfa3e20-ff7a-4137-8e5f-00149be3c53c","type":"SaveTool"},{"attributes":{},"id":"eab5f08e-3689-4567-becd-0a38a4316d53","type":"PanTool"},{"attributes":{"source":{"id":"56fc27c3-cfb1-422d-83ba-d64284d22880","type":"ColumnDataSource"}},"id":"7d944fec-87cc-4eb2-bfc2-1da6604e6856","type":"CDSView"},{"attributes":{},"id":"535b50ac-18e7-476a-8e19-a4376c0e82d2","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eab5f08e-3689-4567-becd-0a38a4316d53","type":"PanTool"},{"id":"535b50ac-18e7-476a-8e19-a4376c0e82d2","type":"WheelZoomTool"},{"id":"2e4bb5b3-6059-4522-b536-604f7fac7f4e","type":"BoxZoomTool"},{"id":"9cfa3e20-ff7a-4137-8e5f-00149be3c53c","type":"SaveTool"},{"id":"9d2da03d-359a-47c1-8a14-61bbc3689857","type":"ResetTool"},{"id":"09bacc94-0699-4e99-bbee-c71755f8b89e","type":"HelpTool"}]},"id":"1b5a6e0f-9540-44b3-b946-4e3f293d5f44","type":"Toolbar"},{"attributes":{"overlay":{"id":"6c6b1e44-0b8c-4ccc-9aa1-c46311f7375f","type":"BoxAnnotation"}},"id":"2e4bb5b3-6059-4522-b536-604f7fac7f4e","type":"BoxZoomTool"},{"attributes":{},"id":"09bacc94-0699-4e99-bbee-c71755f8b89e","type":"HelpTool"},{"attributes":{"below":[{"id":"59b4bc4b-92c9-4074-9245-553cb718e326","type":"LinearAxis"}],"left":[{"id":"af78e3c7-84e3-46f7-8b84-91a1e29e2437","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"59b4bc4b-92c9-4074-9245-553cb718e326","type":"LinearAxis"},{"id":"14fc8f32-2dc1-4bda-89c9-3f1b7d4a1712","type":"Grid"},{"id":"af78e3c7-84e3-46f7-8b84-91a1e29e2437","type":"LinearAxis"},{"id":"f203a630-6d37-45f6-997c-d1c8eb1c9e5c","type":"Grid"},{"id":"6c6b1e44-0b8c-4ccc-9aa1-c46311f7375f","type":"BoxAnnotation"},{"id":"0563c3a4-44f7-437b-92e2-442d2e0cdf07","type":"GlyphRenderer"}],"title":{"id":"fda16f33-b608-48a9-8bea-018b7283bd97","type":"Title"},"toolbar":{"id":"1b5a6e0f-9540-44b3-b946-4e3f293d5f44","type":"Toolbar"},"x_range":{"id":"fd3d8798-f9d6-4d82-84c4-a4ebeabbb23f","type":"DataRange1d"},"x_scale":{"id":"b190b447-8613-4d98-b0b7-5f40b9c53de7","type":"LinearScale"},"y_range":{"id":"a856a2c3-8c08-42ad-af8a-fec23e9cf465","type":"DataRange1d"},"y_scale":{"id":"f1da691b-a09f-4dde-ad1f-9fe89726469b","type":"LinearScale"}},"id":"85969a91-fdce-471d-a493-9cff27255aea","subtype":"Figure","type":"Plot"},{"attributes":{"args":{"source":{"id":"56fc27c3-cfb1-422d-83ba-d64284d22880","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.range\n        x = data['x']\n        y = data['y']\n        pow = (Math.log(y[100])/Math.log(x[100]))\n        console.log(pow)\n        delta = (f[1]-f[0])/x.length\n        for (i = 0; i < x.length; i++) {\n            x[i] = delta*i + f[0]\n            y[i] = Math.pow(x[i], pow)\n        }\n        source.change.emit();\n    "},"id":"095d6c0b-a2d8-4d74-8d62-e81f1cd780ac","type":"CustomJS"},{"attributes":{},"id":"c430aba5-5ec5-4122-8da8-d61cd112a73e","type":"BasicTickFormatter"},{"attributes":{},"id":"66899bab-aba7-47fe-b3dd-8648f88b64f1","type":"BasicTickFormatter"}],"root_ids":["b7b7d885-2e94-4df2-8300-eded26de058b"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a9bfd7d5-5173-458b-89e0-9bbc932f5a3e","elementid":"e0db3c34-4a9b-467b-85e8-6456e3d3ee45","modelid":"b7b7d885-2e94-4df2-8300-eded26de058b"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
