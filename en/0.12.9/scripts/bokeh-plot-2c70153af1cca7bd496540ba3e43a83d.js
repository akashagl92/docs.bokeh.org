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
      };var element = document.getElementById("78f0dec2-1f5d-42f0-b933-3d6fbe373775");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '78f0dec2-1f5d-42f0-b933-3d6fbe373775' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                "IonRangeSlider": require("custom/bk_script_0f1d9ed69d694037a61f2afc93b41019.ion_range_slider").IonRangeSlider,
          "LatexLabel": require("custom/bk_script_11478284eb724428bba954de02afc94b.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_76ef57ddb4ce4fa68bca809ff88ac460.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_97c48886a5b64d14b10025dcf15f0199.draw_tool").DrawTool
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_0f1d9ed69d694037a61f2afc93b41019.ion_range_slider": function(require, module, exports) {
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
          "custom/bk_script_11478284eb724428bba954de02afc94b.latex_label": function(require, module, exports) {
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
          "custom/bk_script_76ef57ddb4ce4fa68bca809ff88ac460.my_formatter": function(require, module, exports) {
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
          
          },
          "custom/bk_script_97c48886a5b64d14b10025dcf15f0199.draw_tool": function(require, module, exports) {
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
                    var docs_json = {"4f63d768-f3d6-4a24-ba0c-e997dc7cdd50":{"roots":{"references":[{"attributes":{"children":[{"id":"f9f4c0fb-3040-4267-bcd3-c5bde9d89baa","type":"Slider"}]},"id":"97d3190a-a172-49ed-9741-ac8f2afc6e9a","type":"WidgetBox"},{"attributes":{"callback":null},"id":"6f8773f0-6c49-4ac0-a5d8-28a3a15594a8","type":"DataRange1d"},{"attributes":{"args":{"source":{"id":"a3656bdd-c0a9-4edb-b9b5-ad4c11a6cc79","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.range\n        x = data['x']\n        y = data['y']\n        pow = (Math.log(y[100])/Math.log(x[100]))\n        console.log(pow)\n        delta = (f[1]-f[0])/x.length\n        for (i = 0; i < x.length; i++) {\n            x[i] = delta*i + f[0]\n            y[i] = Math.pow(x[i], pow)\n        }\n        source.change.emit();\n    "},"id":"946a65f4-eb1d-4de9-a80e-7a6ff579b235","type":"CustomJS"},{"attributes":{"callback":{"id":"946a65f4-eb1d-4de9-a80e-7a6ff579b235","type":"CustomJS"},"callback_policy":"continuous","end":0.99,"range":[0.01,0.985],"start":0.01,"step":0.01,"title":"Ion Range Slider - Range"},"id":"c1ec3fe9-1bda-48ed-83fa-781e7381da6b","type":"IonRangeSlider"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985],"y":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985]}},"id":"a3656bdd-c0a9-4edb-b9b5-ad4c11a6cc79","type":"ColumnDataSource"},{"attributes":{"callback":{"id":"c632e170-0fd2-4ebd-8349-b2aa2075b2f8","type":"CustomJS"},"end":5,"start":0,"step":0.1,"title":"Bokeh Slider - Power","value":1},"id":"f9f4c0fb-3040-4267-bcd3-c5bde9d89baa","type":"Slider"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#ed5565"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"47a45294-d8db-44ae-b2d7-c57c57a64c58","type":"Line"},{"attributes":{"data_source":{"id":"a3656bdd-c0a9-4edb-b9b5-ad4c11a6cc79","type":"ColumnDataSource"},"glyph":{"id":"47a45294-d8db-44ae-b2d7-c57c57a64c58","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b6d56175-2be5-499f-9f87-35b3dafc0128","type":"Line"},"selection_glyph":null,"view":{"id":"77b0779a-dec7-49b9-9f4f-2906cde761d5","type":"CDSView"}},"id":"df71cd3b-ba37-4985-91b5-37774b151ff2","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"f2a636ba-70f4-43d9-9436-a290a75e4e45","type":"LinearAxis"}],"left":[{"id":"93699b0a-ad70-47c3-9e4d-1d8e2c092b42","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f2a636ba-70f4-43d9-9436-a290a75e4e45","type":"LinearAxis"},{"id":"09965721-6518-4d19-84d3-07432de94c2e","type":"Grid"},{"id":"93699b0a-ad70-47c3-9e4d-1d8e2c092b42","type":"LinearAxis"},{"id":"640884be-2146-4c59-bbd1-5f168f20e535","type":"Grid"},{"id":"3f1c20e5-4505-427c-bfe0-f52e6ed80322","type":"BoxAnnotation"},{"id":"df71cd3b-ba37-4985-91b5-37774b151ff2","type":"GlyphRenderer"}],"title":{"id":"31b39bd8-5d81-45c5-a912-7f09869515ab","type":"Title"},"toolbar":{"id":"271acc24-cb6f-4daf-9e28-5794f5100d15","type":"Toolbar"},"x_range":{"id":"19419963-e540-429d-9ae7-98c7c3638be1","type":"DataRange1d"},"x_scale":{"id":"0f3f36fc-13e6-49e2-9555-eabe4148d30b","type":"LinearScale"},"y_range":{"id":"6f8773f0-6c49-4ac0-a5d8-28a3a15594a8","type":"DataRange1d"},"y_scale":{"id":"14dcac1f-92a1-42fd-ac4c-28201b9e5470","type":"LinearScale"}},"id":"779f70cd-fbe8-4dc3-9a85-43a8aa130dc8","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fec8f5de-f9fa-4b8b-89c5-20ac99819302","type":"PanTool"},{"id":"072b1d8a-133d-44d5-a843-829a56b00f20","type":"WheelZoomTool"},{"id":"7d982183-7d70-4fc1-a95e-785e84d0659a","type":"BoxZoomTool"},{"id":"3936e01e-3f98-494e-b8a2-f5e1a42788c5","type":"SaveTool"},{"id":"ffa8e3dd-a1dc-467e-a2f0-6c1411b4804d","type":"ResetTool"},{"id":"e870a7d1-51fd-4eb0-95e6-296373ac2fa1","type":"HelpTool"}]},"id":"271acc24-cb6f-4daf-9e28-5794f5100d15","type":"Toolbar"},{"attributes":{"callback":null},"id":"19419963-e540-429d-9ae7-98c7c3638be1","type":"DataRange1d"},{"attributes":{"children":[{"id":"c1ec3fe9-1bda-48ed-83fa-781e7381da6b","type":"IonRangeSlider"}]},"id":"e265b39f-a753-46b6-b21a-ffad3f4f5dfc","type":"WidgetBox"},{"attributes":{},"id":"0f3f36fc-13e6-49e2-9555-eabe4148d30b","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"779f70cd-fbe8-4dc3-9a85-43a8aa130dc8","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd9c9424-5f77-42be-88af-ec2ed269f61f","type":"BasicTicker"}},"id":"640884be-2146-4c59-bbd1-5f168f20e535","type":"Grid"},{"attributes":{},"id":"14dcac1f-92a1-42fd-ac4c-28201b9e5470","type":"LinearScale"},{"attributes":{},"id":"dd9c9424-5f77-42be-88af-ec2ed269f61f","type":"BasicTicker"},{"attributes":{"plot":{"id":"779f70cd-fbe8-4dc3-9a85-43a8aa130dc8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a09a53e-e783-458a-a6d5-60c704e6fa81","type":"BasicTicker"}},"id":"09965721-6518-4d19-84d3-07432de94c2e","type":"Grid"},{"attributes":{"formatter":{"id":"e8683a85-cb33-4a13-9f2d-72cb6d777977","type":"BasicTickFormatter"},"plot":{"id":"779f70cd-fbe8-4dc3-9a85-43a8aa130dc8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a09a53e-e783-458a-a6d5-60c704e6fa81","type":"BasicTicker"}},"id":"f2a636ba-70f4-43d9-9436-a290a75e4e45","type":"LinearAxis"},{"attributes":{},"id":"e8683a85-cb33-4a13-9f2d-72cb6d777977","type":"BasicTickFormatter"},{"attributes":{},"id":"8a09a53e-e783-458a-a6d5-60c704e6fa81","type":"BasicTicker"},{"attributes":{},"id":"85b84645-f8d7-469f-8d50-a81d4ab2d324","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"85b84645-f8d7-469f-8d50-a81d4ab2d324","type":"BasicTickFormatter"},"plot":{"id":"779f70cd-fbe8-4dc3-9a85-43a8aa130dc8","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd9c9424-5f77-42be-88af-ec2ed269f61f","type":"BasicTicker"}},"id":"93699b0a-ad70-47c3-9e4d-1d8e2c092b42","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6d56175-2be5-499f-9f87-35b3dafc0128","type":"Line"},{"attributes":{"overlay":{"id":"3f1c20e5-4505-427c-bfe0-f52e6ed80322","type":"BoxAnnotation"}},"id":"7d982183-7d70-4fc1-a95e-785e84d0659a","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"31b39bd8-5d81-45c5-a912-7f09869515ab","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3f1c20e5-4505-427c-bfe0-f52e6ed80322","type":"BoxAnnotation"},{"attributes":{},"id":"072b1d8a-133d-44d5-a843-829a56b00f20","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"779f70cd-fbe8-4dc3-9a85-43a8aa130dc8","subtype":"Figure","type":"Plot"},{"id":"97d3190a-a172-49ed-9741-ac8f2afc6e9a","type":"WidgetBox"},{"id":"e265b39f-a753-46b6-b21a-ffad3f4f5dfc","type":"WidgetBox"}]},"id":"acc71bf1-e68c-40b1-a5b9-b764418dd3eb","type":"Column"},{"attributes":{"source":{"id":"a3656bdd-c0a9-4edb-b9b5-ad4c11a6cc79","type":"ColumnDataSource"}},"id":"77b0779a-dec7-49b9-9f4f-2906cde761d5","type":"CDSView"},{"attributes":{},"id":"fec8f5de-f9fa-4b8b-89c5-20ac99819302","type":"PanTool"},{"attributes":{},"id":"e870a7d1-51fd-4eb0-95e6-296373ac2fa1","type":"HelpTool"},{"attributes":{},"id":"3936e01e-3f98-494e-b8a2-f5e1a42788c5","type":"SaveTool"},{"attributes":{"args":{"source":{"id":"a3656bdd-c0a9-4edb-b9b5-ad4c11a6cc79","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.change.emit();\n    "},"id":"c632e170-0fd2-4ebd-8349-b2aa2075b2f8","type":"CustomJS"},{"attributes":{},"id":"ffa8e3dd-a1dc-467e-a2f0-6c1411b4804d","type":"ResetTool"}],"root_ids":["acc71bf1-e68c-40b1-a5b9-b764418dd3eb"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"4f63d768-f3d6-4a24-ba0c-e997dc7cdd50","elementid":"78f0dec2-1f5d-42f0-b933-3d6fbe373775","modelid":"acc71bf1-e68c-40b1-a5b9-b764418dd3eb"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
