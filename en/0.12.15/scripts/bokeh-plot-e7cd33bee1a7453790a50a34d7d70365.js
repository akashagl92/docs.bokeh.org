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
      };var element = document.getElementById("4a156e32-7167-47e8-be91-ba66bb11599a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4a156e32-7167-47e8-be91-ba66bb11599a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                "Surface3d": require("custom/bk_script_66d434674bd945339d427d3410a62a05.surface3d").Surface3d,
          "IonRangeSlider": require("custom/bk_script_6bbffed6a92843428ebf149ab2d70e33.ion_range_slider").IonRangeSlider,
          "Custom": require("custom/bk_script_8355b62fc4e447beb7e563146c5db4ab.custom").Custom,
          "DrawTool": require("custom/bk_script_8b6a824193b54b1d88fc7b74ac6d180e.draw_tool").DrawTool,
          "LatexLabel": require("custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_66d434674bd945339d427d3410a62a05.surface3d": function(require, module, exports) {
          "use strict";
          // This file contains the JavaScript (CoffeeScript) implementation
          // for a Bokeh custom extension. The "surface3d.py" contains the
          // python counterpart.
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          // This custom model wraps one part of the third-party vis.js library:
          //     http://visjs.org/index.html
          // Making it easy to hook up python data analytics tools (NumPy, SciPy,
          // Pandas, etc.) to web presentations using the Bokeh server.
          // These "require" lines are similar to python "import" statements
          var OPTIONS;
          var p = require("core/properties");
          var layout_dom_1 = require("models/layouts/layout_dom");
          // This defines some default options for the Graph3d feature of vis.js
          // See: http://visjs.org/graph3d_examples.html for more details.
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
          // To create custom model extensions that will render on to the HTML canvas
          // or into the DOM, we must create a View subclass for the model.
          // In this case we will subclass from the existing BokehJS ``LayoutDOMView``
          exports.Surface3dView = /** @class */ (function (_super) {
              __extends(Surface3dView, _super);
              function Surface3dView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              Surface3dView.prototype.initialize = function (options) {
                  var _this = this;
                  var script, url;
                  _super.prototype.initialize.call(this, options);
                  url = "https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js";
                  script = document.createElement('script');
                  script.src = url;
                  script.async = false;
                  script.onreadystatechange = script.onload = function () {
                      return _this._init();
                  };
                  return document.querySelector("head").appendChild(script);
              };
              Surface3dView.prototype._init = function () {
                  // Create a new Graph3s using the vis.js API. This assumes the vis.js has
                  // already been loaded (e.g. in a custom app template). In the future Bokeh
                  // models will be able to specify and load external scripts automatically.
                  var _this = this;
                  // BokehJS Views create <div> elements by default, accessible as @el. Many
                  // Bokeh views ignore this default <div>, and instead do things like draw
                  // to the HTML canvas. In this case though, we use the <div> to attach a
                  // Graph3d to the DOM.
                  this._graph = new vis.Graph3d(this.el, this.get_data(), OPTIONS);
                  // Set a listener so that when the Bokeh data source has a change
                  // event, we can process the new data
                  return this.connect(this.model.data_source.change, function () {
                      return _this._graph.setData(_this.get_data());
                  });
              };
              // This is the callback executed when the Bokeh data has an change. Its basic
              // function is to adapt the Bokeh data source to the vis.js DataSet format.
              Surface3dView.prototype.get_data = function () {
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
          }(layout_dom_1.LayoutDOMView));
          exports.Surface3d = (function () {
              // We must also create a corresponding JavaScript BokehJS model subclass to
              // correspond to the python Bokeh model subclass. In this case, since we want
              // an element that can position itself in the DOM according to a Bokeh layout,
              // we subclass from ``LayoutDOM``
              var Surface3d = /** @class */ (function (_super) {
                  __extends(Surface3d, _super);
                  function Surface3d() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return Surface3d;
              }(layout_dom_1.LayoutDOM));
              ;
              // This is usually boilerplate. In some cases there may not be a view.
              Surface3d.prototype.default_view = exports.Surface3dView;
              // The ``type`` class attribute should generally match exactly the name
              // of the corresponding Python class.
              Surface3d.prototype.type = "Surface3d";
              // The @define block adds corresponding "properties" to the JS model. These
              // should basically line up 1-1 with the Python model class. Most property
              // types have counterparts, e.g. ``bokeh.core.properties.String`` will be
              // ``p.String`` in the JS implementatin. Where the JS type system is not yet
              // as rich, you can use ``p.Any`` as a "wildcard" property type.
              Surface3d.define({
                  x: [p.String],
                  y: [p.String],
                  z: [p.String],
                  color: [p.String],
                  data_source: [p.Instance]
              });
              return Surface3d;
          })();
    
          },
          "custom/bk_script_6bbffed6a92843428ebf149ab2d70e33.ion_range_slider": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var callback_1 = require("core/util/callback");
          var p = require("core/properties");
          var dom_1 = require("core/dom");
          var input_widget_1 = require("models/widgets/input_widget");
          // This model will actually need to render things, so we must provide
          // view. The LayoutDOM model has a view already, so we will start with that
          exports.IonRangeSliderView = /** @class */ (function (_super) {
              __extends(IonRangeSliderView, _super);
              function IonRangeSliderView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              IonRangeSliderView.prototype._createElement = function () {
                  var el;
                  el = _super.prototype._createElement.call(this);
                  this.$el = $(el);
                  return el;
              };
              IonRangeSliderView.prototype.template = function () {
                  var title, value;
                  if (this.model.title != null) {
                      if (this.model.title.length !== 0) {
                          title = dom_1.label({
                              for: this.model.id
                          }, " " + this.model.title + ": ");
                      }
                      value = dom_1.input({
                          type: "text",
                          id: this.model.id,
                          readonly: true
                      });
                  }
                  return dom_1.div({
                      class: "bk-slider-parent"
                  }, title, value, dom_1.div({
                      class: "bk-slider-horizontal"
                  }, dom_1.input({
                      type: "text",
                      class: "slider",
                      id: this.model.id
                  })));
              };
              IonRangeSliderView.prototype.initialize = function (options) {
                  _super.prototype.initialize.call(this, options);
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
                  var _this = this;
                  var disable, from, grid, max, min, opts, range, slider, step, to;
                  // BokehJS Views create <div> elements by default, accessible as @$el.
                  // Many Bokeh views ignore this default <div>, and instead do things
                  // like draw to the HTML canvas. In this case though, we change the
                  // contents of the <div>, based on the current slider value.
                  _super.prototype.render.call(this);
                  // Set up parameters
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
                      onChange: function (data) {
                          return _this.slide(data);
                      },
                      onFinish: function (data) {
                          return _this.slidestop(data);
                      }
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
          }(input_widget_1.InputWidgetView));
          exports.IonRangeSlider = (function () {
              var IonRangeSlider = /** @class */ (function (_super) {
                  __extends(IonRangeSlider, _super);
                  function IonRangeSlider() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return IonRangeSlider;
              }(input_widget_1.InputWidget));
              ;
              // If there is an associated view, this is boilerplate.
              IonRangeSlider.prototype.default_view = exports.IonRangeSliderView;
              // The ``type`` class attribute should generally match exactly the name
              // of the corresponding Python class.
              IonRangeSlider.prototype.type = "IonRangeSlider";
              // The @define block adds corresponding "properties" to the JS model. These
              // should basically line up 1-1 with the Python model class. Most property
              // types have counterparts, e.g. bokeh.core.properties.String will be
              // p.String in the JS implementation. Where the JS type system is not yet
              // as rich, you can use p.Any as a "wildcard" property type.
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
          })();
    
          },
          "custom/bk_script_8355b62fc4e447beb7e563146c5db4ab.custom": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var dom_1 = require("core/dom");
          var p = require("core/properties");
          var layout_dom_1 = require("models/layouts/layout_dom");
          var CustomView = /** @class */ (function (_super) {
              __extends(CustomView, _super);
              function CustomView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              CustomView.prototype.initialize = function (options) {
                  var _this = this;
                  _super.prototype.initialize.call(this, options);
                  this.render();
                  // Set BokehJS listener so that when the Bokeh slider has a change
                  // event, we can process the new data
                  this.connect(this.model.slider.change, function () { return _this.render(); });
              };
              CustomView.prototype.render = function () {
                  // BokehjS Views create <div> elements by default, accessible as
                  // ``this.el``. Many Bokeh views ignore this default <div>, and instead
                  // do things like draw to the HTML canvas. In this case though, we change
                  // the contents of the <div>, based on the current slider value.
                  dom_1.empty(this.el);
                  this.el.appendChild(dom_1.div({
                      style: {
                          'padding': '2px',
                          'color': '#b88d8e',
                          'background-color': '#2a3153',
                      },
                  }, this.model.text + ": " + this.model.slider.value));
              };
              return CustomView;
          }(layout_dom_1.LayoutDOMView));
          exports.CustomView = CustomView;
          var Custom = /** @class */ (function (_super) {
              __extends(Custom, _super);
              function Custom() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  // If there is an associated view, this is typically boilerplate.
                  _this.default_view = CustomView;
                  // The ``type`` class attribute should generally match exactly the name
                  // of the corresponding Python class.
                  _this.type = "Custom";
                  return _this;
              }
              return Custom;
          }(layout_dom_1.LayoutDOM));
          exports.Custom = Custom;
          // The @define block adds corresponding "properties" to the JS model. These
          // should normally line up 1-1 with the Python model class. Most property
          // types have counterparts, e.g. bokeh.core.properties.String will be
          // ``p.String`` in the JS implementation. Any time the JS type system is not
          // yet as complete, you can use ``p.Any`` as a "wildcard" property type.
          Custom.define({
              text: [p.String],
              slider: [p.Any],
          });
    
          },
          "custom/bk_script_8b6a824193b54b1d88fc7b74ac6d180e.draw_tool": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var p = require("core/properties");
          var gesture_tool_1 = require("models/tools/gestures/gesture_tool");
          exports.DrawToolView = /** @class */ (function (_super) {
              __extends(DrawToolView, _super);
              function DrawToolView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              // this is executed when the pan/drag event starts
              DrawToolView.prototype._pan_start = function (e) {
                  return this.model.source.data = {
                      x: [],
                      y: []
                  };
              };
              // this is executed on subsequent mouse/touch moves
              DrawToolView.prototype._pan = function (e) {
                  var frame, sx, sy, x, y;
                  frame = this.plot_model.frame;
                  (sx = e.sx, sy = e.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
              };
              // this is executed then the pan/drag ends
              DrawToolView.prototype._pan_end = function (e) {
                  return null;
              };
              return DrawToolView;
          }(gesture_tool_1.GestureToolView));
          exports.DrawTool = (function () {
              var DrawTool = /** @class */ (function (_super) {
                  __extends(DrawTool, _super);
                  function DrawTool() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return DrawTool;
              }(gesture_tool_1.GestureTool));
              ;
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
          })();
    
          },
          "custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var label_1 = require("models/annotations/label");
          exports.LatexLabelView = /** @class */ (function (_super) {
              __extends(LatexLabelView, _super);
              function LatexLabelView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              LatexLabelView.prototype.render = function () {
                  var angle, panel, ref, sx, sy, xscale, yscale;
                  //--- Start of copied section from ``Label.render`` implementation
                  // Here because AngleSpec does units tranform and label doesn't support specs
                  switch (this.model.angle_units) {
                      case "rad":
                          angle = -1 * this.model.angle;
                          break;
                      case "deg":
                          angle = -1 * this.model.angle * Math.PI / 180.0;
                  }
                  panel = (ref = this.model.panel) != null ? ref : this.plot_view.frame;
                  xscale = this.plot_view.frame.xscales[this.model.x_range_name];
                  yscale = this.plot_view.frame.yscales[this.model.y_range_name];
                  sx = this.model.x_units === "data" ? xscale.compute(this.model.x) : panel.xview.compute(this.model.x);
                  sy = this.model.y_units === "data" ? yscale.compute(this.model.y) : panel.yview.compute(this.model.y);
                  sx += this.model.x_offset;
                  sy -= this.model.y_offset;
                  //--- End of copied section from ``Label.render`` implementation
                  // Must render as superpositioned div (not on canvas) so that KaTex
                  // css can properly style the text
                  this._css_text(this.plot_view.canvas_view.ctx, "", sx, sy, angle);
                  // ``katex`` is loaded into the global window at runtime
                  // katex.renderToString returns a html ``span`` element
                  return katex.render(this.model.text, this.el, {
                      displayMode: true
                  });
              };
              return LatexLabelView;
          }(label_1.LabelView));
          exports.LatexLabel = (function () {
              var LatexLabel = /** @class */ (function (_super) {
                  __extends(LatexLabel, _super);
                  function LatexLabel() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  return LatexLabel;
              }(label_1.Label));
              ;
              LatexLabel.prototype.type = 'LatexLabel';
              LatexLabel.prototype.default_view = exports.LatexLabelView;
              return LatexLabel;
          })();
    
          },
          "custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                  function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var tick_formatter_1 = require("models/formatters/tick_formatter");
          exports.MyFormatter = (function () {
              var MyFormatter = /** @class */ (function (_super) {
                  __extends(MyFormatter, _super);
                  function MyFormatter() {
                      return _super !== null && _super.apply(this, arguments) || this;
                  }
                  // TickFormatters should implement this method, which accepts a lisst
                  // of numbers (ticks) and returns a list of strings
                  MyFormatter.prototype.doFormat = function (ticks) {
                      var formatted, i, j, ref;
                      // format the first tick as-is
                      formatted = ["" + ticks[0]];
                      // format the remaining ticks as a difference from the first
                      for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                          formatted.push("+" + (ticks[i] - ticks[0]).toPrecision(2));
                      }
                      return formatted;
                  };
                  return MyFormatter;
              }(tick_formatter_1.TickFormatter));
              ;
              MyFormatter.prototype.type = "MyFormatter";
              return MyFormatter;
          })();
    
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
                    
                  var docs_json = '{"900cc8fd-b19f-46ed-89ae-99aef8a69235":{"roots":{"references":[{"attributes":{},"id":"5ffcc3b4-6e0c-4bb7-ae4a-64701f281f36","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"9c149bb6-869d-43a0-9758-f2304801ae4d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbe35e56-12e8-41b9-992d-f7f79162587a","type":"BasicTicker"}},"id":"8d8fdedb-3294-4041-98e3-60a54dbda3ec","type":"Grid"},{"attributes":{},"id":"b9597943-3147-43a8-a777-3b3758acefcb","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAACASkAAAAAAAAA1QAAAAAAAwFBAAAAAAAAAVUAAAAAAAABOQAAAAAAAADNAAAAAAAAAQUAAAAAAAIBCQAAAAAAAQFhAAAAAAAAAREAAAAAAAMBVQAAAAAAAgEFAAAAAAABAU0AAAAAAAIBXQAAAAAAAACpAAAAAAAAAOkAAAAAAAEBUQAAAAAAAwFdAAAAAAAAAQUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAQUAAAAAAAMBXQAAAAAAAQFRAAAAAAAAAOkAAAAAAAAAqQAAAAAAAgFdAAAAAAABAU0AAAAAAAIBBQAAAAAAAwFVAAAAAAAAAREAAAAAAAEBYQAAAAAAAgEJAAAAAAAAAQUAAAAAAAAAzQAAAAAAAAE5AAAAAAAAAVUAAAAAAAMBQQAAAAAAAADVAAAAAAACASkAAAAAAAAAyQAAAAAAAgFhAAAAAAACAWkAAAAAAAMBZQAAAAAAAAF9AAAAAAACgY0AAAAAAAIBSQAAAAAAAwFNAAAAAAAAAU0AAAAAAAIBQQAAAAAAAYGdAAAAAAADAWEAAAAAAAMBiQAAAAAAAgE1AAAAAAABAW0AAAAAAAABiQAAAAAAAAFZAAAAAAADAWkAAAAAAAMBlQAAAAAAAwGZAAAAAAAAAR0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAR0AAAAAAAMBmQAAAAAAAwGVAAAAAAADAWkAAAAAAAABWQAAAAAAAAGJAAAAAAABAW0AAAAAAAIBNQAAAAAAAwGJAAAAAAADAWEAAAAAAAGBnQAAAAAAAgFBAAAAAAAAAU0AAAAAAAMBTQAAAAAAAgFJAAAAAAACgY0AAAAAAAABfQAAAAAAAwFlAAAAAAACAWkAAAAAAAIBYQAAAAAAAAGBAAAAAAAAAYkAAAAAAAOBgQAAAAAAAoGtAAAAAAAAgaEAAAAAAAMBiQAAAAAAAQFdAAAAAAABAYkAAAAAAAABkQAAAAAAAEHFAAAAAAACAXkAAAAAAAKBoQAAAAAAAgF9AAAAAAADgZEAAAAAAAMBjQAAAAAAAIGBAAAAAAAAAaUAAAAAAAKBuQAAAAAAAYGtAAAAAAAAAT0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAT0AAAAAAAGBrQAAAAAAAoG5AAAAAAAAAaUAAAAAAACBgQAAAAAAAwGNAAAAAAADgZEAAAAAAAIBfQAAAAAAAoGhAAAAAAACAXkAAAAAAABBxQAAAAAAAAGRAAAAAAABAYkAAAAAAAEBXQAAAAAAAwGJAAAAAAAAgaEAAAAAAAKBrQAAAAAAA4GBAAAAAAAAAYkAAAAAAAABgQAAAAAAAQGFAAAAAAADAZkAAAAAAAABsQAAAAAAAQG5AAAAAAABQcEAAAAAAAGBlQAAAAAAAYGRAAAAAAAAAbUAAAAAAACBsQAAAAAAAgHRAAAAAAABgYUAAAAAAAHByQAAAAAAAAGJAAAAAAABAZ0AAAAAAAKBoQAAAAAAAoGpAAAAAAAAgbkAAAAAAAJBwQAAAAAAAwHNAAAAAAABAXUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAXUAAAAAAAMBzQAAAAAAAkHBAAAAAAAAgbkAAAAAAAKBqQAAAAAAAoGhAAAAAAABAZ0AAAAAAAABiQAAAAAAAcHJAAAAAAABgYUAAAAAAAIB0QAAAAAAAIGxAAAAAAAAAbUAAAAAAAGBkQAAAAAAAYGVAAAAAAABQcEAAAAAAAEBuQAAAAAAAAGxAAAAAAADAZkAAAAAAAEBhQAAAAAAAAGRAAAAAAADgaUAAAAAAAEBvQAAAAAAAoHJAAAAAAADwckAAAAAAAMBrQAAAAAAAwGpAAAAAAACQc0AAAAAAANBwQAAAAAAA8HZAAAAAAADAakAAAAAAABB2QAAAAAAAAGZAAAAAAACQcUAAAAAAAEBxQAAAAAAAwHFAAAAAAADQckAAAAAAAMB1QAAAAAAAwHVAAAAAAADAZEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAZEAAAAAAAMB1QAAAAAAAwHVAAAAAAADQckAAAAAAAMBxQAAAAAAAQHFAAAAAAACQcUAAAAAAAABmQAAAAAAAEHZAAAAAAADAakAAAAAAAPB2QAAAAAAA0HBAAAAAAACQc0AAAAAAAMBqQAAAAAAAwGtAAAAAAADwckAAAAAAAKByQAAAAAAAQG9AAAAAAADgaUAAAAAAAABkQAAAAAAAQGZAAAAAAABgbkAAAAAAALB1QAAAAAAAAHVAAAAAAABQdkAAAAAAANBzQAAAAAAAgHJAAAAAAADAeUAAAAAAAJBzQAAAAAAAAHxAAAAAAAAwckAAAAAAAEB5QAAAAAAAQG5AAAAAAADQckAAAAAAABBzQAAAAAAAYHNAAAAAAACQc0AAAAAAALB4QAAAAAAAkHtAAAAAAAAgaEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgaEAAAAAAAJB7QAAAAAAAsHhAAAAAAACQc0AAAAAAAGBzQAAAAAAAEHNAAAAAAADQckAAAAAAAEBuQAAAAAAAQHlAAAAAAAAwckAAAAAAAAB8QAAAAAAAkHNAAAAAAADAeUAAAAAAAIByQAAAAAAA0HNAAAAAAABQdkAAAAAAAAB1QAAAAAAAsHVAAAAAAABgbkAAAAAAAEBmQAAAAAAA4GdAAAAAAABwdEAAAAAAABB5QAAAAAAAsHVAAAAAAAAwfEAAAAAAAFB3QAAAAAAAEHVAAAAAAACgf0AAAAAAAJB3QAAAAAAA+IBAAAAAAADAdUAAAAAAAFB6QAAAAAAAIHJAAAAAAADwc0AAAAAAAGB2QAAAAAAAcHZAAAAAAABAeEAAAAAAANB+QAAAAAAAsIBAAAAAAADgbEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgbEAAAAAAALCAQAAAAAAA0H5AAAAAAABAeEAAAAAAAHB2QAAAAAAAYHZAAAAAAADwc0AAAAAAACByQAAAAAAAUHpAAAAAAADAdUAAAAAAAPiAQAAAAAAAkHdAAAAAAACgf0AAAAAAABB1QAAAAAAAUHdAAAAAAAAwfEAAAAAAALB1QAAAAAAAEHlAAAAAAABwdEAAAAAAAOBnQAAAAAAAoGlAAAAAAABQdUAAAAAAANB7QAAAAAAAEHtAAAAAAAAYgEAAAAAAAAB8QAAAAAAAcHdAAAAAAADogEAAAAAAAGB4QAAAAAAAaINAAAAAAABAd0AAAAAAADB9QAAAAAAAEHRAAAAAAACweUAAAAAAACB7QAAAAAAAAHhAAAAAAADAeUAAAAAAANiBQAAAAAAA2IFAAAAAAADAbkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAbkAAAAAAANiBQAAAAAAA2IFAAAAAAADAeUAAAAAAAAB4QAAAAAAAIHtAAAAAAACweUAAAAAAABB0QAAAAAAAMH1AAAAAAABAd0AAAAAAAGiDQAAAAAAAYHhAAAAAAADogEAAAAAAAHB3QAAAAAAAAHxAAAAAAAAYgEAAAAAAABB7QAAAAAAA0HtAAAAAAABQdUAAAAAAAKBpQAAAAAAAIHJAAAAAAABQeEAAAAAAAPB+QAAAAAAAMHxAAAAAAACQgEAAAAAAALCAQAAAAAAAIH1AAAAAAADggUAAAAAAAHB7QAAAAAAAAIVAAAAAAABwfUAAAAAAAGiBQAAAAAAAQHVAAAAAAABgekAAAAAAAKB+QAAAAAAAAH5AAAAAAABAe0AAAAAAAICEQAAAAAAAsINAAAAAAADAcEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAcEAAAAAAALCDQAAAAAAAgIRAAAAAAABAe0AAAAAAAAB+QAAAAAAAoH5AAAAAAABgekAAAAAAAEB1QAAAAAAAaIFAAAAAAABwfUAAAAAAAACFQAAAAAAAcHtAAAAAAADggUAAAAAAACB9QAAAAAAAsIBAAAAAAACQgEAAAAAAADB8QAAAAAAA8H5AAAAAAABQeEAAAAAAACByQAAAAAAAkHdAAAAAAAAAfkAAAAAAALCAQAAAAAAA4HxAAAAAAABwgkAAAAAAACCBQAAAAAAAeIFAAAAAAAAQg0AAAAAAAGiAQAAAAAAAaIZAAAAAAABQf0AAAAAAAKCCQAAAAAAAQHpAAAAAAACwe0AAAAAAAGiBQAAAAAAAIIBAAAAAAACwfkAAAAAAAPCEQAAAAAAASIRAAAAAAACwdEA=","dtype":"float64","shape":[40]}]},"selected":null,"selection_policy":null},"id":"476ac3e7-8da5-4904-b66c-12c0015d4d23","type":"ColumnDataSource"},{"attributes":{},"id":"df0656c3-ad56-47e7-80f9-2a4b03842e05","type":"BasicTickFormatter"},{"attributes":{},"id":"81296740-7387-4fe6-addd-5f14bc1da21f","type":"LinearScale"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"9c149bb6-869d-43a0-9758-f2304801ae4d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6471292f-d8d5-40d2-ad63-09b05ddab184","type":"BasicTicker"}},"id":"fb1f0953-998c-4db9-8964-207e8c63f409","type":"Grid"},{"attributes":{},"id":"9d03ffaf-1562-453e-ad6d-2de186e34783","type":"PanTool"},{"attributes":{},"id":"6471292f-d8d5-40d2-ad63-09b05ddab184","type":"BasicTicker"},{"attributes":{},"id":"b25c8caa-3b3c-4915-aa63-0b7084313ba8","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"cd74321f-a795-4036-9f18-1565920bef44","type":"Patches"},{"attributes":{"formatter":{"id":"5ffcc3b4-6e0c-4bb7-ae4a-64701f281f36","type":"BasicTickFormatter"},"plot":{"id":"9c149bb6-869d-43a0-9758-f2304801ae4d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6471292f-d8d5-40d2-ad63-09b05ddab184","type":"BasicTicker"}},"id":"026fa8d2-b8ea-4702-80d1-de19a3655f89","type":"LinearAxis"},{"attributes":{},"id":"8d842ab3-8681-4f5d-a562-0360313795d6","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"6e0a3232-2ad6-4072-a965-6ef04ed07454","type":"Title"},{"attributes":{"overlay":{"id":"d4dd8995-c2c4-4959-865d-8b95ad9c38b1","type":"BoxAnnotation"}},"id":"a86239bc-9e70-4e1d-91bb-ddb21b9a8f0b","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9d03ffaf-1562-453e-ad6d-2de186e34783","type":"PanTool"},{"id":"3cbfa133-9c79-46f0-920b-bb78bd17b354","type":"WheelZoomTool"},{"id":"a86239bc-9e70-4e1d-91bb-ddb21b9a8f0b","type":"BoxZoomTool"},{"id":"b25c8caa-3b3c-4915-aa63-0b7084313ba8","type":"SaveTool"},{"id":"8d842ab3-8681-4f5d-a562-0360313795d6","type":"ResetTool"},{"id":"3cf743c6-1749-4d79-90ea-70571c3f739d","type":"HelpTool"}]},"id":"a7d7a098-1cb1-437a-b458-156b3627cb88","type":"Toolbar"},{"attributes":{"below":[{"id":"026fa8d2-b8ea-4702-80d1-de19a3655f89","type":"LinearAxis"}],"left":[{"id":"645b254f-a2f7-411a-82c6-716b13c10155","type":"LinearAxis"}],"renderers":[{"id":"026fa8d2-b8ea-4702-80d1-de19a3655f89","type":"LinearAxis"},{"id":"fb1f0953-998c-4db9-8964-207e8c63f409","type":"Grid"},{"id":"645b254f-a2f7-411a-82c6-716b13c10155","type":"LinearAxis"},{"id":"8d8fdedb-3294-4041-98e3-60a54dbda3ec","type":"Grid"},{"id":"d4dd8995-c2c4-4959-865d-8b95ad9c38b1","type":"BoxAnnotation"},{"id":"4b13be90-96c7-460b-8ab1-98de00e44df7","type":"GlyphRenderer"}],"title":{"id":"6e0a3232-2ad6-4072-a965-6ef04ed07454","type":"Title"},"toolbar":{"id":"a7d7a098-1cb1-437a-b458-156b3627cb88","type":"Toolbar"},"x_range":{"id":"d394bd92-9897-42f3-bf03-c114c85276c1","type":"Range1d"},"x_scale":{"id":"b9597943-3147-43a8-a777-3b3758acefcb","type":"LinearScale"},"y_range":{"id":"7678fbc2-9582-403d-b815-e287cfee288e","type":"Range1d"},"y_scale":{"id":"81296740-7387-4fe6-addd-5f14bc1da21f","type":"LinearScale"}},"id":"9c149bb6-869d-43a0-9758-f2304801ae4d","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"476ac3e7-8da5-4904-b66c-12c0015d4d23","type":"ColumnDataSource"},"glyph":{"id":"cd74321f-a795-4036-9f18-1565920bef44","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48573dbe-63e3-4edf-9948-56e35619b873","type":"Patches"},"selection_glyph":null,"view":{"id":"ce4e076c-5209-4826-b3cd-eac9d9819401","type":"CDSView"}},"id":"4b13be90-96c7-460b-8ab1-98de00e44df7","type":"GlyphRenderer"},{"attributes":{},"id":"bbe35e56-12e8-41b9-992d-f7f79162587a","type":"BasicTicker"},{"attributes":{"source":{"id":"476ac3e7-8da5-4904-b66c-12c0015d4d23","type":"ColumnDataSource"}},"id":"ce4e076c-5209-4826-b3cd-eac9d9819401","type":"CDSView"},{"attributes":{"callback":null,"end":800},"id":"7678fbc2-9582-403d-b815-e287cfee288e","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"48573dbe-63e3-4edf-9948-56e35619b873","type":"Patches"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d4dd8995-c2c4-4959-865d-8b95ad9c38b1","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"df0656c3-ad56-47e7-80f9-2a4b03842e05","type":"BasicTickFormatter"},"plot":{"id":"9c149bb6-869d-43a0-9758-f2304801ae4d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbe35e56-12e8-41b9-992d-f7f79162587a","type":"BasicTicker"}},"id":"645b254f-a2f7-411a-82c6-716b13c10155","type":"LinearAxis"},{"attributes":{},"id":"3cf743c6-1749-4d79-90ea-70571c3f739d","type":"HelpTool"},{"attributes":{"callback":null,"end":19},"id":"d394bd92-9897-42f3-bf03-c114c85276c1","type":"Range1d"},{"attributes":{},"id":"3cbfa133-9c79-46f0-920b-bb78bd17b354","type":"WheelZoomTool"}],"root_ids":["9c149bb6-869d-43a0-9758-f2304801ae4d"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"900cc8fd-b19f-46ed-89ae-99aef8a69235","elementid":"4a156e32-7167-47e8-be91-ba66bb11599a","modelid":"9c149bb6-869d-43a0-9758-f2304801ae4d"}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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