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
      };var element = document.getElementById("88e894b7-d377-434a-9d42-93da34c3b38d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '88e894b7-d377-434a-9d42-93da34c3b38d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7351156b-b500-4618-9060-4802ab8a910c":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98ad0186-bffd-4a24-94e1-90828c4d7a31","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"8ab21dd0-e6c5-4c46-b7e1-b0e439a0a82e","type":"Row"}]},"id":"c9617ef1-999f-438c-926a-e9925e4c690c","type":"Column"},{"attributes":{"formatter":{"id":"c4475f38-454c-40b8-922f-8ea11340835c","type":"BasicTickFormatter"},"plot":{"id":"66cb9f70-7e95-43bf-a510-37e41a72f64e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c122bf5f-c15f-4abc-a00e-efd8c9e20ecd","type":"BasicTicker"}},"id":"f5ed4d51-55ee-467b-b332-f7c8e2d1e16b","type":"LinearAxis"},{"attributes":{},"id":"a14a6a1b-4cf8-4258-ba87-e2d04994cae4","type":"PanTool"},{"attributes":{"callback":null},"id":"a32e6d03-ca82-4cf0-b5f7-988402c833fc","type":"DataRange1d"},{"attributes":{},"id":"06d64ac9-b7fe-4195-98eb-ebe0ed63c010","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a14a6a1b-4cf8-4258-ba87-e2d04994cae4","type":"PanTool"},{"id":"281aadc0-1baa-415b-9783-d92f61e40a47","type":"WheelZoomTool"},{"id":"dedc8b91-95f3-498e-adb9-2f4acc984516","type":"BoxZoomTool"},{"id":"f15c2d48-1d13-48e5-badf-be3e418f4818","type":"SaveTool"},{"id":"04279925-d947-4e9d-8503-62ec972a3e12","type":"ResetTool"},{"id":"13cd0682-b245-4bad-a310-2e7a60c82242","type":"HelpTool"}]},"id":"1c46c688-3e72-4e6a-bccd-8fe42d9365f0","type":"Toolbar"},{"attributes":{"below":[{"id":"61ac122c-0776-461d-a4df-b5c69b6b0610","type":"LinearAxis"}],"left":[{"id":"f5ed4d51-55ee-467b-b332-f7c8e2d1e16b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"61ac122c-0776-461d-a4df-b5c69b6b0610","type":"LinearAxis"},{"id":"49455433-e80d-4f96-abdb-c7c9e086d6c5","type":"Grid"},{"id":"f5ed4d51-55ee-467b-b332-f7c8e2d1e16b","type":"LinearAxis"},{"id":"ba4c0523-64dd-4c73-815d-a11fb02115bd","type":"Grid"},{"id":"0d5273b4-6ee6-4d02-a914-83066630c5c7","type":"BoxAnnotation"},{"id":"65177931-cbaf-4262-9bcd-d87c14eb2edd","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"304ca1bb-5c4b-4a3c-bace-1134b04a80db","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a32e6d03-ca82-4cf0-b5f7-988402c833fc","type":"DataRange1d"},"x_scale":{"id":"90267c3e-54ed-4d00-b7b7-201e811740e7","type":"LinearScale"},"y_range":{"id":"92c874b5-247d-460e-b631-35c70d7c5220","type":"DataRange1d"},"y_scale":{"id":"e37f8e49-283f-425c-adc0-b06e53d513c4","type":"LinearScale"}},"id":"66cb9f70-7e95-43bf-a510-37e41a72f64e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"281aadc0-1baa-415b-9783-d92f61e40a47","type":"WheelZoomTool"},{"attributes":{"source":{"id":"198c298c-bd69-4c73-9575-6403991bdeb7","type":"ColumnDataSource"}},"id":"88295dd1-eba8-49c8-8483-361c16643142","type":"CDSView"},{"attributes":{"overlay":{"id":"98ad0186-bffd-4a24-94e1-90828c4d7a31","type":"BoxAnnotation"}},"id":"dedc8b91-95f3-498e-adb9-2f4acc984516","type":"BoxZoomTool"},{"attributes":{},"id":"f15c2d48-1d13-48e5-badf-be3e418f4818","type":"SaveTool"},{"attributes":{},"id":"04279925-d947-4e9d-8503-62ec972a3e12","type":"ResetTool"},{"attributes":{},"id":"86af3cdb-b616-4275-888e-be57894683b2","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":null,"selection_policy":null},"id":"f496d0c6-0fc5-4ef6-b847-8283a16e531f","type":"ColumnDataSource"},{"attributes":{},"id":"13cd0682-b245-4bad-a310-2e7a60c82242","type":"HelpTool"},{"attributes":{},"id":"e37f8e49-283f-425c-adc0-b06e53d513c4","type":"LinearScale"},{"attributes":{"below":[{"id":"16801bd4-0503-44eb-bdd0-0b221c907a64","type":"LinearAxis"}],"left":[{"id":"45682701-bbe7-476d-aa71-c176c79046af","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"16801bd4-0503-44eb-bdd0-0b221c907a64","type":"LinearAxis"},{"id":"2b504d26-3491-40bb-b1a9-afd1460bd6ac","type":"Grid"},{"id":"45682701-bbe7-476d-aa71-c176c79046af","type":"LinearAxis"},{"id":"8e2fd14e-801e-41bd-920d-420c8c302984","type":"Grid"},{"id":"664133ac-1b55-480b-855b-2740feccf397","type":"BoxAnnotation"},{"id":"28dd4ebb-4c6d-4279-99d4-b00ad19af302","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b9b966d2-a4f4-4b8d-9658-a8d15318c878","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a32e6d03-ca82-4cf0-b5f7-988402c833fc","type":"DataRange1d"},"x_scale":{"id":"13517cdb-2b40-4a03-9a13-c22a1be557d1","type":"LinearScale"},"y_range":{"id":"92c874b5-247d-460e-b631-35c70d7c5220","type":"DataRange1d"},"y_scale":{"id":"30ca9772-a4ab-4dc7-917e-d0de4512bd9f","type":"LinearScale"}},"id":"cb233391-a0e2-422c-b589-73c1189c7a48","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"66cb9f70-7e95-43bf-a510-37e41a72f64e","subtype":"Figure","type":"Plot"},{"id":"cb233391-a0e2-422c-b589-73c1189c7a48","subtype":"Figure","type":"Plot"},{"id":"3f393f9c-d86d-4730-84a2-fa2f10842804","subtype":"Figure","type":"Plot"}]},"id":"8ab21dd0-e6c5-4c46-b7e1-b0e439a0a82e","type":"Row"},{"attributes":{"callback":null},"id":"92c874b5-247d-460e-b631-35c70d7c5220","type":"DataRange1d"},{"attributes":{},"id":"c2b690ef-a0ec-44cc-b47c-3aff605902f0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":null,"selection_policy":null},"id":"311cb09f-4887-4635-9eda-36fa700bd66a","type":"ColumnDataSource"},{"attributes":{},"id":"08f3eb95-1d4b-4eb8-b4ba-1e3a3e092948","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c1bb80e-8614-416e-b218-4f943c2ecd66","type":"Square"},{"attributes":{"plot":{"id":"3f393f9c-d86d-4730-84a2-fa2f10842804","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2b690ef-a0ec-44cc-b47c-3aff605902f0","type":"BasicTicker"}},"id":"400d4031-654d-4c85-abe8-13e3664e278f","type":"Grid"},{"attributes":{},"id":"f87c5ca4-b552-4c80-9393-9127eca045c3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7c21dbb7-f006-44cc-9f2f-6b27aad7f49e","type":"BasicTickFormatter"},"plot":{"id":"66cb9f70-7e95-43bf-a510-37e41a72f64e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f87c5ca4-b552-4c80-9393-9127eca045c3","type":"BasicTicker"}},"id":"61ac122c-0776-461d-a4df-b5c69b6b0610","type":"LinearAxis"},{"attributes":{"callback":null},"id":"f026349c-e5ed-4ace-9e53-465465ad5c0d","type":"DataRange1d"},{"attributes":{},"id":"13517cdb-2b40-4a03-9a13-c22a1be557d1","type":"LinearScale"},{"attributes":{},"id":"c73d8580-7b91-4e78-8b0c-908a5b48f08e","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":null,"selection_policy":null},"id":"198c298c-bd69-4c73-9575-6403991bdeb7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"79c24770-e9b7-4641-8ac8-1e9527b9174a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7e2a35b-516c-4c5f-b22a-7bf8bea3486f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e596a348-da3b-4a46-ba81-c824476acaa6","type":"Square"},{"attributes":{"formatter":{"id":"08f3eb95-1d4b-4eb8-b4ba-1e3a3e092948","type":"BasicTickFormatter"},"plot":{"id":"3f393f9c-d86d-4730-84a2-fa2f10842804","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2b690ef-a0ec-44cc-b47c-3aff605902f0","type":"BasicTicker"}},"id":"c4ecf1f6-2e2d-442a-aa6b-682363f529ae","type":"LinearAxis"},{"attributes":{},"id":"90267c3e-54ed-4d00-b7b7-201e811740e7","type":"LinearScale"},{"attributes":{"formatter":{"id":"06d64ac9-b7fe-4195-98eb-ebe0ed63c010","type":"BasicTickFormatter"},"plot":{"id":"3f393f9c-d86d-4730-84a2-fa2f10842804","subtype":"Figure","type":"Plot"},"ticker":{"id":"64d30117-db25-4fc9-9f13-895f66d6df5d","type":"BasicTicker"}},"id":"14dee835-f617-4411-aadd-dc660e45f40f","type":"LinearAxis"},{"attributes":{},"id":"7c21dbb7-f006-44cc-9f2f-6b27aad7f49e","type":"BasicTickFormatter"},{"attributes":{},"id":"64d30117-db25-4fc9-9f13-895f66d6df5d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3f393f9c-d86d-4730-84a2-fa2f10842804","subtype":"Figure","type":"Plot"},"ticker":{"id":"64d30117-db25-4fc9-9f13-895f66d6df5d","type":"BasicTicker"}},"id":"bd40d67b-12cf-4a07-a721-6fee9e868a76","type":"Grid"},{"attributes":{"formatter":{"id":"79ee0209-d2a3-4cd9-806d-3c779b3948c5","type":"BasicTickFormatter"},"plot":{"id":"cb233391-a0e2-422c-b589-73c1189c7a48","subtype":"Figure","type":"Plot"},"ticker":{"id":"767d9e30-982d-4868-90ea-871c60e0ff47","type":"BasicTicker"}},"id":"16801bd4-0503-44eb-bdd0-0b221c907a64","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"66cb9f70-7e95-43bf-a510-37e41a72f64e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c122bf5f-c15f-4abc-a00e-efd8c9e20ecd","type":"BasicTicker"}},"id":"ba4c0523-64dd-4c73-815d-a11fb02115bd","type":"Grid"},{"attributes":{},"id":"c2e03d20-a01f-490d-aa7f-c14504035337","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c2e03d20-a01f-490d-aa7f-c14504035337","type":"PanTool"},{"id":"88f7f777-e050-4977-a9a2-36e466d8f2df","type":"WheelZoomTool"},{"id":"e84e4e9e-c3a8-4a5e-8375-50356e3e1333","type":"BoxZoomTool"},{"id":"4ea0348a-e371-47d0-908c-8f9fef6a900c","type":"SaveTool"},{"id":"9b403484-1539-4f8e-908d-1fded1ec3689","type":"ResetTool"},{"id":"4a88a6e1-65d8-433e-b1d7-96ce5ef80269","type":"HelpTool"}]},"id":"304ca1bb-5c4b-4a3c-bace-1134b04a80db","type":"Toolbar"},{"attributes":{},"id":"30ca9772-a4ab-4dc7-917e-d0de4512bd9f","type":"LinearScale"},{"attributes":{},"id":"c122bf5f-c15f-4abc-a00e-efd8c9e20ecd","type":"BasicTicker"},{"attributes":{"plot":{"id":"66cb9f70-7e95-43bf-a510-37e41a72f64e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f87c5ca4-b552-4c80-9393-9127eca045c3","type":"BasicTicker"}},"id":"49455433-e80d-4f96-abdb-c7c9e086d6c5","type":"Grid"},{"attributes":{"data_source":{"id":"311cb09f-4887-4635-9eda-36fa700bd66a","type":"ColumnDataSource"},"glyph":{"id":"79c24770-e9b7-4641-8ac8-1e9527b9174a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d7e2a35b-516c-4c5f-b22a-7bf8bea3486f","type":"Circle"},"selection_glyph":null,"view":{"id":"f55eba32-9dee-4dc3-85b0-07194e4dc76b","type":"CDSView"}},"id":"65177931-cbaf-4262-9bcd-d87c14eb2edd","type":"GlyphRenderer"},{"attributes":{},"id":"88f7f777-e050-4977-a9a2-36e466d8f2df","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"f496d0c6-0fc5-4ef6-b847-8283a16e531f","type":"ColumnDataSource"},"glyph":{"id":"b3175b29-310a-4d16-b4b9-0d39e610b355","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5085e1ce-18ac-4512-8dd2-c85f74421780","type":"Triangle"},"selection_glyph":null,"view":{"id":"4a97f26d-61dd-4bb9-971a-9bc5596f2e1d","type":"CDSView"}},"id":"28dd4ebb-4c6d-4279-99d4-b00ad19af302","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cb233391-a0e2-422c-b589-73c1189c7a48","subtype":"Figure","type":"Plot"},"ticker":{"id":"767d9e30-982d-4868-90ea-871c60e0ff47","type":"BasicTicker"}},"id":"2b504d26-3491-40bb-b1a9-afd1460bd6ac","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5085e1ce-18ac-4512-8dd2-c85f74421780","type":"Triangle"},{"attributes":{},"id":"9b403484-1539-4f8e-908d-1fded1ec3689","type":"ResetTool"},{"attributes":{},"id":"767d9e30-982d-4868-90ea-871c60e0ff47","type":"BasicTicker"},{"attributes":{"formatter":{"id":"15ca0836-e097-4b15-b1c2-621d9aab95b8","type":"BasicTickFormatter"},"plot":{"id":"cb233391-a0e2-422c-b589-73c1189c7a48","subtype":"Figure","type":"Plot"},"ticker":{"id":"24f1eeb2-eefe-4f68-9cf2-aca20480415a","type":"BasicTicker"}},"id":"45682701-bbe7-476d-aa71-c176c79046af","type":"LinearAxis"},{"attributes":{"source":{"id":"311cb09f-4887-4635-9eda-36fa700bd66a","type":"ColumnDataSource"}},"id":"f55eba32-9dee-4dc3-85b0-07194e4dc76b","type":"CDSView"},{"attributes":{},"id":"24f1eeb2-eefe-4f68-9cf2-aca20480415a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"cb233391-a0e2-422c-b589-73c1189c7a48","subtype":"Figure","type":"Plot"},"ticker":{"id":"24f1eeb2-eefe-4f68-9cf2-aca20480415a","type":"BasicTicker"}},"id":"8e2fd14e-801e-41bd-920d-420c8c302984","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3175b29-310a-4d16-b4b9-0d39e610b355","type":"Triangle"},{"attributes":{},"id":"4a88a6e1-65d8-433e-b1d7-96ce5ef80269","type":"HelpTool"},{"attributes":{},"id":"15ca0836-e097-4b15-b1c2-621d9aab95b8","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"c4ecf1f6-2e2d-442a-aa6b-682363f529ae","type":"LinearAxis"}],"left":[{"id":"14dee835-f617-4411-aadd-dc660e45f40f","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c4ecf1f6-2e2d-442a-aa6b-682363f529ae","type":"LinearAxis"},{"id":"400d4031-654d-4c85-abe8-13e3664e278f","type":"Grid"},{"id":"14dee835-f617-4411-aadd-dc660e45f40f","type":"LinearAxis"},{"id":"bd40d67b-12cf-4a07-a721-6fee9e868a76","type":"Grid"},{"id":"98ad0186-bffd-4a24-94e1-90828c4d7a31","type":"BoxAnnotation"},{"id":"a1b3cb3f-8e53-40d9-9b60-46cb5492254b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"1c46c688-3e72-4e6a-bccd-8fe42d9365f0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a32e6d03-ca82-4cf0-b5f7-988402c833fc","type":"DataRange1d"},"x_scale":{"id":"86af3cdb-b616-4275-888e-be57894683b2","type":"LinearScale"},"y_range":{"id":"f026349c-e5ed-4ace-9e53-465465ad5c0d","type":"DataRange1d"},"y_scale":{"id":"c73d8580-7b91-4e78-8b0c-908a5b48f08e","type":"LinearScale"}},"id":"3f393f9c-d86d-4730-84a2-fa2f10842804","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c4475f38-454c-40b8-922f-8ea11340835c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"198c298c-bd69-4c73-9575-6403991bdeb7","type":"ColumnDataSource"},"glyph":{"id":"2c1bb80e-8614-416e-b218-4f943c2ecd66","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e596a348-da3b-4a46-ba81-c824476acaa6","type":"Square"},"selection_glyph":null,"view":{"id":"88295dd1-eba8-49c8-8483-361c16643142","type":"CDSView"}},"id":"a1b3cb3f-8e53-40d9-9b60-46cb5492254b","type":"GlyphRenderer"},{"attributes":{},"id":"25f98cd3-ff3b-4a18-b5b5-ce954d2eb5bf","type":"ResetTool"},{"attributes":{},"id":"4ea0348a-e371-47d0-908c-8f9fef6a900c","type":"SaveTool"},{"attributes":{},"id":"a9320d00-8dfc-484c-8f43-b878cf60f36a","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"664133ac-1b55-480b-855b-2740feccf397","type":"BoxAnnotation"},{"attributes":{},"id":"a84b6495-9b5d-4499-a72e-c6bf16485add","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a84b6495-9b5d-4499-a72e-c6bf16485add","type":"PanTool"},{"id":"acf8f7a8-e064-4131-abca-686c80a7ea68","type":"WheelZoomTool"},{"id":"b2cca565-dce2-4f44-82e1-5290915ed58d","type":"BoxZoomTool"},{"id":"18de8641-d9c9-45b9-bb1c-32f5e5223a25","type":"SaveTool"},{"id":"25f98cd3-ff3b-4a18-b5b5-ce954d2eb5bf","type":"ResetTool"},{"id":"a9320d00-8dfc-484c-8f43-b878cf60f36a","type":"HelpTool"}]},"id":"b9b966d2-a4f4-4b8d-9658-a8d15318c878","type":"Toolbar"},{"attributes":{"source":{"id":"f496d0c6-0fc5-4ef6-b847-8283a16e531f","type":"ColumnDataSource"}},"id":"4a97f26d-61dd-4bb9-971a-9bc5596f2e1d","type":"CDSView"},{"attributes":{},"id":"acf8f7a8-e064-4131-abca-686c80a7ea68","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"664133ac-1b55-480b-855b-2740feccf397","type":"BoxAnnotation"}},"id":"b2cca565-dce2-4f44-82e1-5290915ed58d","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0d5273b4-6ee6-4d02-a914-83066630c5c7","type":"BoxAnnotation"},{"attributes":{},"id":"18de8641-d9c9-45b9-bb1c-32f5e5223a25","type":"SaveTool"},{"attributes":{},"id":"79ee0209-d2a3-4cd9-806d-3c779b3948c5","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"0d5273b4-6ee6-4d02-a914-83066630c5c7","type":"BoxAnnotation"}},"id":"e84e4e9e-c3a8-4a5e-8375-50356e3e1333","type":"BoxZoomTool"}],"root_ids":["c9617ef1-999f-438c-926a-e9925e4c690c"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"7351156b-b500-4618-9060-4802ab8a910c","elementid":"88e894b7-d377-434a-9d42-93da34c3b38d","modelid":"c9617ef1-999f-438c-926a-e9925e4c690c"}];
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