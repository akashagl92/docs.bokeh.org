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
      };var element = document.getElementById("c55c7393-9dc2-4746-a4be-ad2220f7375f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c55c7393-9dc2-4746-a4be-ad2220f7375f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"];
    
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
                  "MyFormatter": require("custom/bk_script_55de304bebc64c51982a4e30d8f65a70.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_914197e1aa2549baa58fe366b3208852.draw_tool").DrawTool,
          "LatexLabel": require("custom/bk_script_a14de02787a54585be895bc685587404.latex_label").LatexLabel,
          "IonRangeSlider": require("custom/bk_script_f4fa7a42caa346d5aefeea3940828692.ion_range_slider").IonRangeSlider
                }
              };
            }, {}],
            "custom/bk_script_55de304bebc64c51982a4e30d8f65a70.my_formatter": [function(require, module, exports) {
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
          "custom/bk_script_914197e1aa2549baa58fe366b3208852.draw_tool": [function(require, module, exports) {
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
          
          }, {}],
          "custom/bk_script_a14de02787a54585be895bc685587404.latex_label": [function(require, module, exports) {
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
          "custom/bk_script_f4fa7a42caa346d5aefeea3940828692.ion_range_slider": [function(require, module, exports) {
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
                var docs_json = {"146779fd-da46-43c5-9596-d35929d38cb1":{"roots":{"references":[{"attributes":{"children":[{"id":"3fea3918-4877-4b0c-8439-7bc3c276a564","type":"IonRangeSlider"}]},"id":"a231b9f9-ac37-4def-8ec8-8b830ee7fec7","type":"WidgetBox"},{"attributes":{"overlay":{"id":"ba18b830-e6f9-4c91-b1f2-ee5c41fc5784","type":"BoxAnnotation"},"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"}},"id":"70c128a3-0a26-46b0-ad0d-d039234c51ba","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"},"ticker":{"id":"c21c359e-0d23-4f4e-ae4b-f1ac18b53cf1","type":"BasicTicker"}},"id":"55e68b5f-74f8-4dfa-bf65-d16f0f9b3ddd","type":"Grid"},{"attributes":{"children":[{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"},{"id":"7b7cfada-3707-4bca-a538-3e2ef1397f74","type":"WidgetBox"},{"id":"a231b9f9-ac37-4def-8ec8-8b830ee7fec7","type":"WidgetBox"}]},"id":"ab9c2022-2751-4edf-934f-55d245ebb984","type":"Column"},{"attributes":{"callback":{"id":"129d531c-b4b3-4dfd-87e3-9170f7672656","type":"CustomJS"},"callback_policy":"continuous","end":0.99,"range":[0.01,0.985],"start":0.01,"step":0.01,"title":"Ion Range Slider - Range"},"id":"3fea3918-4877-4b0c-8439-7bc3c276a564","type":"IonRangeSlider"},{"attributes":{"below":[{"id":"ca694057-c7ec-4669-a6b2-b5ce433a346c","type":"LinearAxis"}],"left":[{"id":"cfca7820-2db0-4c69-8cf3-183bb009f0ae","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ca694057-c7ec-4669-a6b2-b5ce433a346c","type":"LinearAxis"},{"id":"78ae6711-a188-4239-9c4a-a84e5e570860","type":"Grid"},{"id":"cfca7820-2db0-4c69-8cf3-183bb009f0ae","type":"LinearAxis"},{"id":"55e68b5f-74f8-4dfa-bf65-d16f0f9b3ddd","type":"Grid"},{"id":"ba18b830-e6f9-4c91-b1f2-ee5c41fc5784","type":"BoxAnnotation"},{"id":"4b0903b6-cea5-4f14-938f-9e0ba37a6217","type":"GlyphRenderer"}],"title":{"id":"cf9ab802-670c-4262-a7c0-44ca8d659cea","type":"Title"},"tool_events":{"id":"7be5ec85-d625-486e-842d-2d034dfe2b54","type":"ToolEvents"},"toolbar":{"id":"1f09a103-04a2-45f0-a9cb-ddd38192d2e7","type":"Toolbar"},"x_range":{"id":"aa667001-7b2c-4d75-bcff-8fd8e9bd82ca","type":"DataRange1d"},"y_range":{"id":"2b8b0ee5-635c-47af-b46e-7077fbbd0936","type":"DataRange1d"}},"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"2692b10c-0e8d-4639-8a42-484de465253c","type":"BasicTickFormatter"},"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"},"ticker":{"id":"e25535c9-1439-45a9-9919-e905c67da680","type":"BasicTicker"}},"id":"ca694057-c7ec-4669-a6b2-b5ce433a346c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0c82781b-3230-41a3-9fc8-96748867101c","type":"PanTool"},{"id":"93f9a9c3-9c7b-4af8-bb56-2951ad2444df","type":"WheelZoomTool"},{"id":"70c128a3-0a26-46b0-ad0d-d039234c51ba","type":"BoxZoomTool"},{"id":"882a579b-c1f5-45ce-9ff3-44e75f4e7910","type":"SaveTool"},{"id":"3912692d-19bd-4ffe-b387-e6d8df41c2d9","type":"ResetTool"},{"id":"3b2725a8-17f3-4ab6-bfa3-eb2ccd45e6dd","type":"HelpTool"}]},"id":"1f09a103-04a2-45f0-a9cb-ddd38192d2e7","type":"Toolbar"},{"attributes":{"callback":{"id":"191b681f-665a-4a2a-9787-3c09b1f6bf15","type":"CustomJS"},"end":5,"title":"Bokeh Slider - Power","value":1},"id":"2f57bcc6-5096-4d07-b98a-04b751de8b7a","type":"Slider"},{"attributes":{"plot":null,"text":""},"id":"cf9ab802-670c-4262-a7c0-44ca8d659cea","type":"Title"},{"attributes":{"children":[{"id":"2f57bcc6-5096-4d07-b98a-04b751de8b7a","type":"Slider"}]},"id":"7b7cfada-3707-4bca-a538-3e2ef1397f74","type":"WidgetBox"},{"attributes":{"callback":null},"id":"aa667001-7b2c-4d75-bcff-8fd8e9bd82ca","type":"DataRange1d"},{"attributes":{"data_source":{"id":"87052392-afce-421b-896c-d9c029bd31a7","type":"ColumnDataSource"},"glyph":{"id":"72ee6347-6927-4c6f-bb00-d7a774c08ff7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6a4ff239-77c6-4bc4-9748-2553c682ab53","type":"Line"},"selection_glyph":null},"id":"4b0903b6-cea5-4f14-938f-9e0ba37a6217","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"}},"id":"3b2725a8-17f3-4ab6-bfa3-eb2ccd45e6dd","type":"HelpTool"},{"attributes":{},"id":"2692b10c-0e8d-4639-8a42-484de465253c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"2b8b0ee5-635c-47af-b46e-7077fbbd0936","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#ed5565"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"72ee6347-6927-4c6f-bb00-d7a774c08ff7","type":"Line"},{"attributes":{},"id":"e25535c9-1439-45a9-9919-e905c67da680","type":"BasicTicker"},{"attributes":{"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"}},"id":"93f9a9c3-9c7b-4af8-bb56-2951ad2444df","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985],"y":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985]}},"id":"87052392-afce-421b-896c-d9c029bd31a7","type":"ColumnDataSource"},{"attributes":{"args":{"source":{"id":"87052392-afce-421b-896c-d9c029bd31a7","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.trigger('change');\n    "},"id":"191b681f-665a-4a2a-9787-3c09b1f6bf15","type":"CustomJS"},{"attributes":{},"id":"c21c359e-0d23-4f4e-ae4b-f1ac18b53cf1","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a4ff239-77c6-4bc4-9748-2553c682ab53","type":"Line"},{"attributes":{},"id":"7be5ec85-d625-486e-842d-2d034dfe2b54","type":"ToolEvents"},{"attributes":{},"id":"307a6eaf-d4c7-421c-9b41-83a527fc1f0a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"}},"id":"882a579b-c1f5-45ce-9ff3-44e75f4e7910","type":"SaveTool"},{"attributes":{"formatter":{"id":"307a6eaf-d4c7-421c-9b41-83a527fc1f0a","type":"BasicTickFormatter"},"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"},"ticker":{"id":"c21c359e-0d23-4f4e-ae4b-f1ac18b53cf1","type":"BasicTicker"}},"id":"cfca7820-2db0-4c69-8cf3-183bb009f0ae","type":"LinearAxis"},{"attributes":{"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"},"ticker":{"id":"e25535c9-1439-45a9-9919-e905c67da680","type":"BasicTicker"}},"id":"78ae6711-a188-4239-9c4a-a84e5e570860","type":"Grid"},{"attributes":{"args":{"source":{"id":"87052392-afce-421b-896c-d9c029bd31a7","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.range\n        x = data['x']\n        y = data['y']\n        pow = (Math.log(y[100])/Math.log(x[100]))\n        console.log(pow)\n        delta = (f[1]-f[0])/x.length\n        for (i = 0; i < x.length; i++) {\n            x[i] = delta*i + f[0]\n            y[i] = Math.pow(x[i], pow)\n        }\n        source.trigger('change');\n    "},"id":"129d531c-b4b3-4dfd-87e3-9170f7672656","type":"CustomJS"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ba18b830-e6f9-4c91-b1f2-ee5c41fc5784","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"}},"id":"0c82781b-3230-41a3-9fc8-96748867101c","type":"PanTool"},{"attributes":{"plot":{"id":"e54da18b-9aba-4a6a-b349-edaba4e27037","subtype":"Figure","type":"Plot"}},"id":"3912692d-19bd-4ffe-b387-e6d8df41c2d9","type":"ResetTool"}],"root_ids":["ab9c2022-2751-4edf-934f-55d245ebb984"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"146779fd-da46-43c5-9596-d35929d38cb1","elementid":"c55c7393-9dc2-4746-a4be-ad2220f7375f","modelid":"ab9c2022-2751-4edf-934f-55d245ebb984"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
