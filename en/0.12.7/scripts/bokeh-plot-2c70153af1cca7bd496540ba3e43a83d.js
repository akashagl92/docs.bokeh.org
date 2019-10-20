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
      };var element = document.getElementById("3a6ccabe-f0d1-477b-b5b3-d4a56f33df52");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a6ccabe-f0d1-477b-b5b3-d4a56f33df52' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_26f6dd484502424a881740ee1be59335.latex_label").LatexLabel,
          "IonRangeSlider": require("custom/bk_script_9aa31785f9654d8eb16cfdff74277a39.ion_range_slider").IonRangeSlider,
          "DrawTool": require("custom/bk_script_9e49516371c7404f8b77bb991a15be92.draw_tool").DrawTool,
          "MyFormatter": require("custom/bk_script_de26e856a48249298da290cdcc957f48.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_26f6dd484502424a881740ee1be59335.latex_label": function(require, module, exports) {
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
          "custom/bk_script_9aa31785f9654d8eb16cfdff74277a39.ion_range_slider": function(require, module, exports) {
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
          "custom/bk_script_9e49516371c7404f8b77bb991a15be92.draw_tool": function(require, module, exports) {
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
          "custom/bk_script_de26e856a48249298da290cdcc957f48.my_formatter": function(require, module, exports) {
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
                var docs_json = {"6b21d3b2-24e2-4a79-88ba-3465f81bc345":{"roots":{"references":[{"attributes":{"below":[{"id":"f5fbbcd4-30ab-40a9-90c4-c5e47ce4a17e","type":"LinearAxis"}],"left":[{"id":"0ea99eaf-2f7e-4cef-a83d-8a3a141b864e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f5fbbcd4-30ab-40a9-90c4-c5e47ce4a17e","type":"LinearAxis"},{"id":"95572d95-d391-4fb8-bd7c-08e96254517b","type":"Grid"},{"id":"0ea99eaf-2f7e-4cef-a83d-8a3a141b864e","type":"LinearAxis"},{"id":"a3abdf4d-8b1e-480c-be87-623ac92143df","type":"Grid"},{"id":"3b102d7e-5657-4f1a-9ca1-f91b0e2f43b7","type":"BoxAnnotation"},{"id":"142ae6c9-c898-49fa-876b-093389eba02f","type":"GlyphRenderer"}],"title":{"id":"74721bef-5294-4b6a-b88b-a736a2245138","type":"Title"},"toolbar":{"id":"e1f7910a-86a6-4622-99ed-a07675f86b60","type":"Toolbar"},"x_range":{"id":"49ab0cd6-0143-40c3-bc2c-444314049cc7","type":"DataRange1d"},"x_scale":{"id":"d3fd6ca3-3f4a-4882-9a22-d60dba85eccb","type":"LinearScale"},"y_range":{"id":"e65f8470-d415-4d7a-840d-5480d82eee22","type":"DataRange1d"},"y_scale":{"id":"f46a23e7-6e6b-411c-a8b9-0f1e02b1fcd7","type":"LinearScale"}},"id":"e73a207f-5eb8-42d7-8cfc-367f9916e498","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2cc3a4ee-dc78-4b2e-81fd-4ea63d1a42e7","type":"HelpTool"},{"attributes":{"callback":{"id":"8390768e-e047-44e8-8f3f-176681c3f2cc","type":"CustomJS"},"end":5,"start":0,"step":0.1,"title":"Bokeh Slider - Power","value":1},"id":"8d684745-a325-4d8b-a049-ff1bb21caf5d","type":"Slider"},{"attributes":{"children":[{"id":"1532cf19-d43a-4cad-a9eb-57e9c7f0d5de","type":"IonRangeSlider"}]},"id":"1b6e6f78-218b-4563-bc57-983216b70583","type":"WidgetBox"},{"attributes":{"plot":{"id":"e73a207f-5eb8-42d7-8cfc-367f9916e498","subtype":"Figure","type":"Plot"},"ticker":{"id":"40e62ae8-8ed8-4e4f-861d-c623d1ad33eb","type":"BasicTicker"}},"id":"95572d95-d391-4fb8-bd7c-08e96254517b","type":"Grid"},{"attributes":{},"id":"42573e77-8ce9-443a-9a41-cb9e8cd79f45","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"38174f4b-bfa1-4682-a614-005971ade8ba","type":"BasicTickFormatter"},"plot":{"id":"e73a207f-5eb8-42d7-8cfc-367f9916e498","subtype":"Figure","type":"Plot"},"ticker":{"id":"40e62ae8-8ed8-4e4f-861d-c623d1ad33eb","type":"BasicTicker"}},"id":"f5fbbcd4-30ab-40a9-90c4-c5e47ce4a17e","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"60dc3a7e-8bbd-44ea-bdc3-e7a838af6b75","type":"PanTool"},{"id":"42573e77-8ce9-443a-9a41-cb9e8cd79f45","type":"WheelZoomTool"},{"id":"47c9f22d-75af-4ecc-83ea-3109810fb105","type":"BoxZoomTool"},{"id":"01eac6e6-828a-4548-bbfe-ccd65a92d2af","type":"SaveTool"},{"id":"eafe27e2-4b64-4695-b7de-18facb364921","type":"ResetTool"},{"id":"2cc3a4ee-dc78-4b2e-81fd-4ea63d1a42e7","type":"HelpTool"}]},"id":"e1f7910a-86a6-4622-99ed-a07675f86b60","type":"Toolbar"},{"attributes":{"args":{"source":{"id":"8ad869f1-0fa3-42f8-8505-2fe86b714ae1","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.change.emit();\n    "},"id":"8390768e-e047-44e8-8f3f-176681c3f2cc","type":"CustomJS"},{"attributes":{},"id":"38174f4b-bfa1-4682-a614-005971ade8ba","type":"BasicTickFormatter"},{"attributes":{},"id":"60dc3a7e-8bbd-44ea-bdc3-e7a838af6b75","type":"PanTool"},{"attributes":{},"id":"01eac6e6-828a-4548-bbfe-ccd65a92d2af","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"e73a207f-5eb8-42d7-8cfc-367f9916e498","subtype":"Figure","type":"Plot"},"ticker":{"id":"a593898a-a5e6-4325-b433-2febb09f0302","type":"BasicTicker"}},"id":"a3abdf4d-8b1e-480c-be87-623ac92143df","type":"Grid"},{"attributes":{},"id":"d3fd6ca3-3f4a-4882-9a22-d60dba85eccb","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"74721bef-5294-4b6a-b88b-a736a2245138","type":"Title"},{"attributes":{"formatter":{"id":"0e5e2c79-de30-4a16-aba0-bdc5b41ba185","type":"BasicTickFormatter"},"plot":{"id":"e73a207f-5eb8-42d7-8cfc-367f9916e498","subtype":"Figure","type":"Plot"},"ticker":{"id":"a593898a-a5e6-4325-b433-2febb09f0302","type":"BasicTicker"}},"id":"0ea99eaf-2f7e-4cef-a83d-8a3a141b864e","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"65c2ec0d-50b3-4f3b-a6e7-bf148cc3dd7d","type":"Line"},{"attributes":{},"id":"a593898a-a5e6-4325-b433-2febb09f0302","type":"BasicTicker"},{"attributes":{"callback":null},"id":"49ab0cd6-0143-40c3-bc2c-444314049cc7","type":"DataRange1d"},{"attributes":{"children":[{"id":"e73a207f-5eb8-42d7-8cfc-367f9916e498","subtype":"Figure","type":"Plot"},{"id":"c84cbabe-d35c-47bf-a2f3-91dec6341497","type":"WidgetBox"},{"id":"1b6e6f78-218b-4563-bc57-983216b70583","type":"WidgetBox"}]},"id":"745ba779-7b76-4e4d-8ec0-86b8e553d72a","type":"Column"},{"attributes":{"data_source":{"id":"8ad869f1-0fa3-42f8-8505-2fe86b714ae1","type":"ColumnDataSource"},"glyph":{"id":"479edd3b-36f4-44c7-84d1-b025a1f9a8f1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65c2ec0d-50b3-4f3b-a6e7-bf148cc3dd7d","type":"Line"},"selection_glyph":null,"view":{"id":"a8706dcc-9916-4a75-baf2-85a122987ee3","type":"CDSView"}},"id":"142ae6c9-c898-49fa-876b-093389eba02f","type":"GlyphRenderer"},{"attributes":{},"id":"0e5e2c79-de30-4a16-aba0-bdc5b41ba185","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8ad869f1-0fa3-42f8-8505-2fe86b714ae1","type":"ColumnDataSource"}},"id":"a8706dcc-9916-4a75-baf2-85a122987ee3","type":"CDSView"},{"attributes":{"children":[{"id":"8d684745-a325-4d8b-a049-ff1bb21caf5d","type":"Slider"}]},"id":"c84cbabe-d35c-47bf-a2f3-91dec6341497","type":"WidgetBox"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#ed5565"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"479edd3b-36f4-44c7-84d1-b025a1f9a8f1","type":"Line"},{"attributes":{},"id":"f46a23e7-6e6b-411c-a8b9-0f1e02b1fcd7","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985],"y":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985]}},"id":"8ad869f1-0fa3-42f8-8505-2fe86b714ae1","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e65f8470-d415-4d7a-840d-5480d82eee22","type":"DataRange1d"},{"attributes":{"callback":{"id":"91bf5a74-eefe-464f-a4ab-4499927393f7","type":"CustomJS"},"callback_policy":"continuous","end":0.99,"range":[0.01,0.985],"start":0.01,"step":0.01,"title":"Ion Range Slider - Range"},"id":"1532cf19-d43a-4cad-a9eb-57e9c7f0d5de","type":"IonRangeSlider"},{"attributes":{"args":{"source":{"id":"8ad869f1-0fa3-42f8-8505-2fe86b714ae1","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.range\n        x = data['x']\n        y = data['y']\n        pow = (Math.log(y[100])/Math.log(x[100]))\n        console.log(pow)\n        delta = (f[1]-f[0])/x.length\n        for (i = 0; i < x.length; i++) {\n            x[i] = delta*i + f[0]\n            y[i] = Math.pow(x[i], pow)\n        }\n        source.change.emit();\n    "},"id":"91bf5a74-eefe-464f-a4ab-4499927393f7","type":"CustomJS"},{"attributes":{},"id":"eafe27e2-4b64-4695-b7de-18facb364921","type":"ResetTool"},{"attributes":{},"id":"40e62ae8-8ed8-4e4f-861d-c623d1ad33eb","type":"BasicTicker"},{"attributes":{"overlay":{"id":"3b102d7e-5657-4f1a-9ca1-f91b0e2f43b7","type":"BoxAnnotation"}},"id":"47c9f22d-75af-4ecc-83ea-3109810fb105","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3b102d7e-5657-4f1a-9ca1-f91b0e2f43b7","type":"BoxAnnotation"}],"root_ids":["745ba779-7b76-4e4d-8ec0-86b8e553d72a"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"6b21d3b2-24e2-4a79-88ba-3465f81bc345","elementid":"3a6ccabe-f0d1-477b-b5b3-d4a56f33df52","modelid":"745ba779-7b76-4e4d-8ec0-86b8e553d72a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
