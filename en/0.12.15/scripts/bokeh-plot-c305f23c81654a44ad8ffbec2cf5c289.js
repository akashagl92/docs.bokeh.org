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
      };var element = document.getElementById("5a959eb5-c523-4c9d-a497-e8e243e11ba9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5a959eb5-c523-4c9d-a497-e8e243e11ba9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f35cb2bf-a5d8-43b9-995d-7bfa608a7bae":{"roots":{"references":[{"attributes":{"source":{"id":"0c2543e1-6d91-4d8e-9ab0-4436cf5c8a62","type":"ColumnDataSource"}},"id":"12f9ea55-67b8-49b1-8df2-c7c5eb34d129","type":"CDSView"},{"attributes":{"source":{"id":"e29ff78a-176f-4ee9-aeeb-91fd517bdc15","type":"ColumnDataSource"}},"id":"61c5957c-0d60-434d-9402-6f1437e654a7","type":"CDSView"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"dad3a496-004d-4e16-b04b-342b2907a653","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"fd1f9b41-305a-472c-aa02-e8694e96510c","type":"Circle"},{"attributes":{"source":{"id":"3d8fc7ac-21d5-4214-8c41-7da62a8c603e","type":"ColumnDataSource"}},"id":"d77bd4ef-8be8-4565-9d2c-117015388c97","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"dad3a496-004d-4e16-b04b-342b2907a653","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"2a2ae949-6cfd-4e97-80e7-bb306ff1c032","type":"Circle"},{"attributes":{},"id":"8d092862-b86b-418b-8191-c2816526f64d","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":null,"selection_policy":null},"id":"3d8fc7ac-21d5-4214-8c41-7da62a8c603e","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"dad3a496-004d-4e16-b04b-342b2907a653","type":"Jitter"},{"attributes":{"data_source":{"id":"3d8fc7ac-21d5-4214-8c41-7da62a8c603e","type":"ColumnDataSource"},"glyph":{"id":"bcac31fe-2eae-4916-91fd-0a21c8eb67f0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"91eeab2f-00ca-4286-9f0d-90afde9e0265","type":"Circle"},"selection_glyph":null,"view":{"id":"d77bd4ef-8be8-4565-9d2c-117015388c97","type":"CDSView"}},"id":"ab382100-02d7-4390-87cb-78fdf9e73579","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"2963604d-2e86-493a-8f65-ebdb0f9b51dd","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"5f6cbff7-58be-4a6a-8a8a-5e63c4d86d81","type":"Circle"},{"attributes":{"source":{"id":"48ec2630-d171-4af2-b7ea-f4c8d72c9fc1","type":"ColumnDataSource"}},"id":"7a3a9b44-932a-4e79-b7f2-1eb773903420","type":"CDSView"},{"attributes":{"data_source":{"id":"5ebfff7b-b5b8-4d9c-8df1-cee01e5ad5fa","type":"ColumnDataSource"},"glyph":{"id":"5d3d8e06-d7d9-466b-ba49-6ec613b80d7f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5ebea5ae-f083-4d03-9fe7-fb412f658525","type":"Circle"},"selection_glyph":null,"view":{"id":"0048dc08-45d0-468c-8ba5-acfd0179364c","type":"CDSView"}},"id":"75d2a4ad-d520-444e-86c0-206dc51b0c68","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":null,"selection_policy":null},"id":"4742d2f4-2191-4894-a045-ab6a56fac7a2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"33fc612a-5c41-4590-847b-afcbbbc3c2eb","type":"ColumnDataSource"}},"id":"ac0329a1-cc77-48a7-8611-503b3848c4f2","type":"CDSView"},{"attributes":{},"id":"8f26fab6-128b-4f29-ab9c-65e71c4a86fc","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"70fbd9cd-3b57-4a6e-b592-086d58053d7c","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":null,"selection_policy":null},"id":"e29ff78a-176f-4ee9-aeeb-91fd517bdc15","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"6626be81-22c2-48b8-81ee-083452a93c43","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ee5a9966-ca84-4e87-94e5-6419140df2ff","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"22d6a1c5-6e03-4056-8642-e8223be8a79f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"6441e1c2-12fb-4934-812d-96d04275e1af","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"91eeab2f-00ca-4286-9f0d-90afde9e0265","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"7c69ab79-b7ff-4590-a94f-30e1646e57f2","type":"Circle"},{"attributes":{"source":{"id":"2c21aee7-bfc2-4758-aa01-5c51292ed4d1","type":"ColumnDataSource"}},"id":"3371c18b-d8a1-47e0-b737-35327834922b","type":"CDSView"},{"attributes":{},"id":"a3779f77-d29d-4fe9-9cac-c0d158b169e7","type":"BasicTickFormatter"},{"attributes":{},"id":"6e2bdfe2-cba1-4203-b6ae-ab9ccc0169eb","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"bcac31fe-2eae-4916-91fd-0a21c8eb67f0","type":"Circle"},{"attributes":{"range":null},"id":"43d1497d-313e-4a98-bb56-7c87a8d4b23c","type":"Jitter"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"5d3d8e06-d7d9-466b-ba49-6ec613b80d7f","type":"Circle"},{"attributes":{"data_source":{"id":"3e3dba69-7872-453d-8853-d5768f4385d9","type":"ColumnDataSource"},"glyph":{"id":"e2e8f05e-1b91-4b9a-93a4-b19ae4a1c203","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50744ab5-458f-4cee-ae6d-28166e0832ff","type":"Circle"},"selection_glyph":null,"view":{"id":"a83cc423-a275-4477-8fa8-aad5cd575556","type":"CDSView"}},"id":"c0def222-9d0e-4eba-854c-dbc7011a7d35","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4742d2f4-2191-4894-a045-ab6a56fac7a2","type":"ColumnDataSource"}},"id":"5fda9fbe-aeef-4895-819b-1e6699eebab0","type":"CDSView"},{"attributes":{"source":{"id":"0979adb4-f2ee-4ec0-93d0-1a1294e38060","type":"ColumnDataSource"}},"id":"090c4157-07af-4f3a-bdf2-fa5b995dcbc8","type":"CDSView"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"b91c57f8-b990-4678-9751-086e976af07c","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"5dcfd5e1-19fb-4752-836d-c51d9f632e07","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"fde0ea87-1dd5-4f2c-9ba9-e3697c2b5519","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"e2e8f05e-1b91-4b9a-93a4-b19ae4a1c203","type":"Circle"},{"attributes":{"source":{"id":"149d44a5-6735-4d26-a1ab-0d6ab280ccbe","type":"ColumnDataSource"}},"id":"3fbddc24-566e-4369-9127-9ae3c984bc60","type":"CDSView"},{"attributes":{"source":{"id":"3e3dba69-7872-453d-8853-d5768f4385d9","type":"ColumnDataSource"}},"id":"a83cc423-a275-4477-8fa8-aad5cd575556","type":"CDSView"},{"attributes":{"data_source":{"id":"33fc612a-5c41-4590-847b-afcbbbc3c2eb","type":"ColumnDataSource"},"glyph":{"id":"f8416bc6-c804-4730-a53d-1647896e1a4a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"451774fa-f2a7-4a56-8d47-520da2355ca3","type":"Circle"},"selection_glyph":null,"view":{"id":"ac0329a1-cc77-48a7-8611-503b3848c4f2","type":"CDSView"}},"id":"330e7be3-0418-40e5-8aa8-b4201dfd7963","type":"GlyphRenderer"},{"attributes":{"source":{"id":"31546fc0-5142-4263-ba09-db8480ccf79a","type":"ColumnDataSource"}},"id":"1c84b130-7458-4bad-b939-c0d8d5ced39e","type":"CDSView"},{"attributes":{"range":null},"id":"fde0ea87-1dd5-4f2c-9ba9-e3697c2b5519","type":"Jitter"},{"attributes":{"data_source":{"id":"5051b97a-8353-493e-bccb-ba8b899ce7da","type":"ColumnDataSource"},"glyph":{"id":"b0b08fcc-8fd1-428e-943c-1e042bcdc4be","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4d2b6247-172b-494b-a295-ce7d1c77ee2b","type":"Circle"},"selection_glyph":null,"view":{"id":"cbff1e85-b44f-4daf-bc20-e83fb22659f8","type":"CDSView"}},"id":"c3e6da8f-3361-4cb5-92f4-e3b23ada9ac0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"43d1497d-313e-4a98-bb56-7c87a8d4b23c","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"451774fa-f2a7-4a56-8d47-520da2355ca3","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"fde0ea87-1dd5-4f2c-9ba9-e3697c2b5519","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"50744ab5-458f-4cee-ae6d-28166e0832ff","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"87901bba-908d-42f1-a839-50d49e71ce93","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"6afdc9e2-23e2-4891-ab6f-5e7b055dd0e7","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"c42f09eb-cffd-4340-82c3-e83fb21c3ae4","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a25f3b42-2139-4020-a212-cfdc7e576619","type":"BoxAnnotation"},{"attributes":{"range":null},"id":"1fc56e1a-169c-4bc8-aafc-ca99ed42db24","type":"Jitter"},{"attributes":{"data_source":{"id":"eb31b392-129a-4524-a90a-b9f3c3e710f0","type":"ColumnDataSource"},"glyph":{"id":"5dcfd5e1-19fb-4752-836d-c51d9f632e07","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1151c435-4c63-436c-a8bd-7c26918c86d2","type":"Circle"},"selection_glyph":null,"view":{"id":"b2c4d556-d147-4d1d-b218-727a8c57e185","type":"CDSView"}},"id":"4790692f-1d7c-4e51-8b0e-1a4ffb66efa5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"87901bba-908d-42f1-a839-50d49e71ce93","type":"ColumnDataSource"},"glyph":{"id":"3737cd51-931b-44f4-bacb-f5c9b744c771","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7463fb25-a3b9-42a6-82aa-ccf345ac4c21","type":"Circle"},"selection_glyph":null,"view":{"id":"c0ac8650-c668-4689-bf13-cdec7baee3b3","type":"CDSView"}},"id":"128927a8-778d-48a8-90c6-da3b766a17e4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":null,"selection_policy":null},"id":"775d76d8-a6a6-4b22-a957-f41557f95b64","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2c21aee7-bfc2-4758-aa01-5c51292ed4d1","type":"ColumnDataSource"},"glyph":{"id":"7ac9dafe-b767-4318-8818-a1c51e8fbd79","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6441e1c2-12fb-4934-812d-96d04275e1af","type":"Circle"},"selection_glyph":null,"view":{"id":"3371c18b-d8a1-47e0-b737-35327834922b","type":"CDSView"}},"id":"b1e4e84f-634a-4a18-ac21-a7d12687775b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":null,"selection_policy":null},"id":"31546fc0-5142-4263-ba09-db8480ccf79a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"149d44a5-6735-4d26-a1ab-0d6ab280ccbe","type":"ColumnDataSource"},"glyph":{"id":"09956ee7-1531-473d-868b-9a43adcac081","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1066ba08-f6b5-4750-ab5b-0038aff50c06","type":"Circle"},"selection_glyph":null,"view":{"id":"3fbddc24-566e-4369-9127-9ae3c984bc60","type":"CDSView"}},"id":"72ad00f8-45d3-45fd-845d-28d1584ec56d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"9fa587d5-2387-4bbf-8b96-06378e1c01a3","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"7b76c1b9-6dea-48d3-b37c-fe973b98a606","type":"Circle"},{"attributes":{"range":null},"id":"b91c57f8-b990-4678-9751-086e976af07c","type":"Jitter"},{"attributes":{"data_source":{"id":"3a43b41f-94af-4b59-b808-67cb16165f88","type":"ColumnDataSource"},"glyph":{"id":"5f6cbff7-58be-4a6a-8a8a-5e63c4d86d81","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9b2e2a5b-6492-46c6-a0ab-57e49da9795f","type":"Circle"},"selection_glyph":null,"view":{"id":"3db5a6cf-23d9-45c2-905f-3567ebb8664f","type":"CDSView"}},"id":"2f95e7bb-23f5-453d-a69b-acb0cd072a26","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"4d2b6247-172b-494b-a295-ce7d1c77ee2b","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"6eb36482-05df-45f4-9a40-59008915a068","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"a228de28-c6d9-4a2e-954d-5a8322e7cf2c","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"add1b29e-629d-4d0b-8942-3028f5f68921","type":"Circle"},{"attributes":{},"id":"b7eb8296-4255-4d21-9e3c-09e8f59959fe","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":null,"selection_policy":null},"id":"48ec2630-d171-4af2-b7ea-f4c8d72c9fc1","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"a228de28-c6d9-4a2e-954d-5a8322e7cf2c","type":"Jitter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"43d1497d-313e-4a98-bb56-7c87a8d4b23c","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"f8416bc6-c804-4730-a53d-1647896e1a4a","type":"Circle"},{"attributes":{"data_source":{"id":"775d76d8-a6a6-4b22-a957-f41557f95b64","type":"ColumnDataSource"},"glyph":{"id":"283477c7-a7d5-4db9-8643-933053fcfc54","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9274366c-8bdd-4377-b763-2248668a18f4","type":"Circle"},"selection_glyph":null,"view":{"id":"b00ff00b-7c20-4376-b025-edb3708ae90a","type":"CDSView"}},"id":"56a253c9-e1cb-4ba7-9b47-32d0c6d8755c","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"a25f3b42-2139-4020-a212-cfdc7e576619","type":"BoxAnnotation"}},"id":"8a16ed3d-fb9b-4d4e-96c8-1073b46e5001","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":null,"selection_policy":null},"id":"2c21aee7-bfc2-4758-aa01-5c51292ed4d1","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"7ac9dafe-b767-4318-8818-a1c51e8fbd79","type":"Circle"},{"attributes":{},"id":"5d3c4c10-6bc8-4ace-bd95-07450554c98c","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"5ebea5ae-f083-4d03-9fe7-fb412f658525","type":"Circle"},{"attributes":{"data_source":{"id":"5bd3f0c4-2221-47b7-b053-c5d43be684f8","type":"ColumnDataSource"},"glyph":{"id":"16532a84-20d6-4982-9b5d-6a48cdd4b2f7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7b76c1b9-6dea-48d3-b37c-fe973b98a606","type":"Circle"},"selection_glyph":null,"view":{"id":"f931f27f-5fe2-404c-ab76-fc13abeba22b","type":"CDSView"}},"id":"ca7d7aa7-d287-45c2-9dc1-b20758a937eb","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5ebfff7b-b5b8-4d9c-8df1-cee01e5ad5fa","type":"ColumnDataSource"}},"id":"0048dc08-45d0-468c-8ba5-acfd0179364c","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"b91c57f8-b990-4678-9751-086e976af07c","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"1151c435-4c63-436c-a8bd-7c26918c86d2","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":null,"selection_policy":null},"id":"3e3dba69-7872-453d-8853-d5768f4385d9","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"827fe416-bd1c-4d88-a8cf-e54f3ea1dc5d","type":"Jitter"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"b0b08fcc-8fd1-428e-943c-1e042bcdc4be","type":"Circle"},{"attributes":{},"id":"51d2baf3-bf5e-43dd-a409-a7f09de96e88","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"5051b97a-8353-493e-bccb-ba8b899ce7da","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":null,"selection_policy":null},"id":"eb31b392-129a-4524-a90a-b9f3c3e710f0","type":"ColumnDataSource"},{"attributes":{"source":{"id":"22d6a1c5-6e03-4056-8642-e8223be8a79f","type":"ColumnDataSource"}},"id":"22d38c50-0e59-4e30-bfd9-a94eb2658cb3","type":"CDSView"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"84115713-515d-4c5e-83cd-8a32a5234069","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":null,"selection_policy":null},"id":"33fc612a-5c41-4590-847b-afcbbbc3c2eb","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"827fe416-bd1c-4d88-a8cf-e54f3ea1dc5d","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"9274366c-8bdd-4377-b763-2248668a18f4","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":null,"selection_policy":null},"id":"5bd3f0c4-2221-47b7-b053-c5d43be684f8","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"2963604d-2e86-493a-8f65-ebdb0f9b51dd","type":"Jitter"},{"attributes":{"data_source":{"id":"0c2543e1-6d91-4d8e-9ab0-4436cf5c8a62","type":"ColumnDataSource"},"glyph":{"id":"8f078783-f93c-46d9-ba1f-75b03f7db053","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7c69ab79-b7ff-4590-a94f-30e1646e57f2","type":"Circle"},"selection_glyph":null,"view":{"id":"12f9ea55-67b8-49b1-8df2-c7c5eb34d129","type":"CDSView"}},"id":"f52e2b59-8aa0-49c0-a2d1-1b0881119c57","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"7c41a05e-0b64-4a82-b3a2-7f377897b2cb","type":"Circle"},{"attributes":{"data_source":{"id":"e29ff78a-176f-4ee9-aeeb-91fd517bdc15","type":"ColumnDataSource"},"glyph":{"id":"7c41a05e-0b64-4a82-b3a2-7f377897b2cb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6626be81-22c2-48b8-81ee-083452a93c43","type":"Circle"},"selection_glyph":null,"view":{"id":"61c5957c-0d60-434d-9402-6f1437e654a7","type":"CDSView"}},"id":"aadb23cc-bf93-4d0d-a61a-9b0ab491e674","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"3a43b41f-94af-4b59-b808-67cb16165f88","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"1fc56e1a-169c-4bc8-aafc-ca99ed42db24","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"3737cd51-931b-44f4-bacb-f5c9b744c771","type":"Circle"},{"attributes":{"source":{"id":"87901bba-908d-42f1-a839-50d49e71ce93","type":"ColumnDataSource"}},"id":"c0ac8650-c668-4689-bf13-cdec7baee3b3","type":"CDSView"},{"attributes":{"source":{"id":"eb31b392-129a-4524-a90a-b9f3c3e710f0","type":"ColumnDataSource"}},"id":"b2c4d556-d147-4d1d-b218-727a8c57e185","type":"CDSView"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"9fa587d5-2387-4bbf-8b96-06378e1c01a3","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"16532a84-20d6-4982-9b5d-6a48cdd4b2f7","type":"Circle"},{"attributes":{"data_source":{"id":"22d6a1c5-6e03-4056-8642-e8223be8a79f","type":"ColumnDataSource"},"glyph":{"id":"6eb36482-05df-45f4-9a40-59008915a068","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"70fbd9cd-3b57-4a6e-b592-086d58053d7c","type":"Circle"},"selection_glyph":null,"view":{"id":"22d38c50-0e59-4e30-bfd9-a94eb2658cb3","type":"CDSView"}},"id":"f045b337-3efb-492a-a46c-20635ca9949c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0979adb4-f2ee-4ec0-93d0-1a1294e38060","type":"ColumnDataSource"},"glyph":{"id":"84115713-515d-4c5e-83cd-8a32a5234069","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78c469d1-b99c-42c7-84f2-964aed0ea724","type":"Circle"},"selection_glyph":null,"view":{"id":"090c4157-07af-4f3a-bdf2-fa5b995dcbc8","type":"CDSView"}},"id":"92f91adc-3afc-4225-89b4-64962beac8d7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"31546fc0-5142-4263-ba09-db8480ccf79a","type":"ColumnDataSource"},"glyph":{"id":"add1b29e-629d-4d0b-8942-3028f5f68921","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dfe3b740-d09a-4e62-ad87-b00b56b71116","type":"Circle"},"selection_glyph":null,"view":{"id":"1c84b130-7458-4bad-b939-c0d8d5ced39e","type":"CDSView"}},"id":"822ea320-80d4-43cb-8fc1-f803d28a73d4","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"6afdc9e2-23e2-4891-ab6f-5e7b055dd0e7","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"a301a46a-a805-4e0e-b245-d832365cd05a","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":null,"selection_policy":null},"id":"5ebfff7b-b5b8-4d9c-8df1-cee01e5ad5fa","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"827fe416-bd1c-4d88-a8cf-e54f3ea1dc5d","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"283477c7-a7d5-4db9-8643-933053fcfc54","type":"Circle"},{"attributes":{"source":{"id":"5bd3f0c4-2221-47b7-b053-c5d43be684f8","type":"ColumnDataSource"}},"id":"f931f27f-5fe2-404c-ab76-fc13abeba22b","type":"CDSView"},{"attributes":{"source":{"id":"3a43b41f-94af-4b59-b808-67cb16165f88","type":"ColumnDataSource"}},"id":"3db5a6cf-23d9-45c2-905f-3567ebb8664f","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"a228de28-c6d9-4a2e-954d-5a8322e7cf2c","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"dfe3b740-d09a-4e62-ad87-b00b56b71116","type":"Circle"},{"attributes":{"source":{"id":"5051b97a-8353-493e-bccb-ba8b899ce7da","type":"ColumnDataSource"}},"id":"cbff1e85-b44f-4daf-bc20-e83fb22659f8","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":null,"selection_policy":null},"id":"0c2543e1-6d91-4d8e-9ab0-4436cf5c8a62","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"6afdc9e2-23e2-4891-ab6f-5e7b055dd0e7","type":"Jitter"},{"attributes":{"data_source":{"id":"4742d2f4-2191-4894-a045-ab6a56fac7a2","type":"ColumnDataSource"},"glyph":{"id":"fd1f9b41-305a-472c-aa02-e8694e96510c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a2ae949-6cfd-4e97-80e7-bb306ff1c032","type":"Circle"},"selection_glyph":null,"view":{"id":"5fda9fbe-aeef-4895-819b-1e6699eebab0","type":"CDSView"}},"id":"265504df-ceb2-4e4f-804b-715326e59d9a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"48ec2630-d171-4af2-b7ea-f4c8d72c9fc1","type":"ColumnDataSource"},"glyph":{"id":"c42f09eb-cffd-4340-82c3-e83fb21c3ae4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a301a46a-a805-4e0e-b245-d832365cd05a","type":"Circle"},"selection_glyph":null,"view":{"id":"7a3a9b44-932a-4e79-b7f2-1eb773903420","type":"CDSView"}},"id":"f8f51467-3dd6-4817-a1bd-610a97df45a5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"78c469d1-b99c-42c7-84f2-964aed0ea724","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"2963604d-2e86-493a-8f65-ebdb0f9b51dd","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"9b2e2a5b-6492-46c6-a0ab-57e49da9795f","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"8f078783-f93c-46d9-ba1f-75b03f7db053","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":null,"selection_policy":null},"id":"0979adb4-f2ee-4ec0-93d0-1a1294e38060","type":"ColumnDataSource"},{"attributes":{},"id":"b0058d3d-81f4-441e-859b-ee41c97e7b36","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":null,"selection_policy":null},"id":"26cb5352-84c0-4248-b4d4-97dd293ff12e","type":"ColumnDataSource"},{"attributes":{},"id":"99e78814-6d1c-4f43-8465-aca27da11e9e","type":"HelpTool"},{"attributes":{"formatter":{"id":"b0058d3d-81f4-441e-859b-ee41c97e7b36","type":"BasicTickFormatter"},"plot":{"id":"f743153f-7e7b-4c54-b0cc-1acdc91d4e51","subtype":"Figure","type":"Plot"},"ticker":{"id":"db089524-bb46-4e99-9126-226efd302e92","type":"BasicTicker"}},"id":"b9275f16-67b5-4f71-a3f9-60b9d00fb5d1","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"77402b85-5cd1-4662-8126-8d91a7bddcfd","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"2a90fe92-93a8-4bb3-9a67-3329ac7c1ee4","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f802edcf-b5dc-47a4-9962-e29c8ce4a5e7","type":"PanTool"},{"id":"51d2baf3-bf5e-43dd-a409-a7f09de96e88","type":"WheelZoomTool"},{"id":"8a16ed3d-fb9b-4d4e-96c8-1073b46e5001","type":"BoxZoomTool"},{"id":"5d3c4c10-6bc8-4ace-bd95-07450554c98c","type":"SaveTool"},{"id":"b7eb8296-4255-4d21-9e3c-09e8f59959fe","type":"ResetTool"},{"id":"8d092862-b86b-418b-8191-c2816526f64d","type":"HelpTool"}]},"id":"33b3ea49-1ee1-4ca1-ae14-f2eaa9c3a473","type":"Toolbar"},{"attributes":{"formatter":{"id":"a3779f77-d29d-4fe9-9cac-c0d158b169e7","type":"BasicTickFormatter"},"plot":{"id":"f743153f-7e7b-4c54-b0cc-1acdc91d4e51","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a966908-ca43-4ab6-ae73-dd7a7ce7e540","type":"BasicTicker"}},"id":"56567c6a-ecff-423b-aff3-c4ae71363a14","type":"LinearAxis"},{"attributes":{"data_source":{"id":"26cb5352-84c0-4248-b4d4-97dd293ff12e","type":"ColumnDataSource"},"glyph":{"id":"7cf404b4-2f70-49d2-a929-21fbc366d339","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dfa01277-0431-4f90-9d31-b1b039f70f64","type":"Circle"},"selection_glyph":null,"view":{"id":"96388a26-182e-42a9-811d-0d326ade2dff","type":"CDSView"}},"id":"fa222508-8778-4652-b969-fcead127f8ab","type":"GlyphRenderer"},{"attributes":{},"id":"842dfc8e-52c7-4304-990e-a970e11bf262","type":"SaveTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"09956ee7-1531-473d-868b-9a43adcac081","type":"Circle"},{"attributes":{},"id":"76b82c5c-ca48-4d35-a48c-e5f24ecc53b3","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"70e3f67f-65ff-4ed6-82c2-a81d05edfac0","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"397d1ca4-c74f-42b8-b108-355fa43309f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"976d3b90-0a07-48d7-bfb4-cc45439a02ec","type":"BasicTicker"}},"id":"020759ce-dc9f-43b8-a33b-7c8d6464ce0d","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"77402b85-5cd1-4662-8126-8d91a7bddcfd","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"4ee5f62c-72fb-4c3c-921d-e5ab0a912b29","type":"Circle"},{"attributes":{},"id":"0a966908-ca43-4ab6-ae73-dd7a7ce7e540","type":"BasicTicker"},{"attributes":{},"id":"800821d8-d1c8-4cd6-a506-115c1bf548bc","type":"ResetTool"},{"attributes":{"formatter":{"id":"8f26fab6-128b-4f29-ab9c-65e71c4a86fc","type":"BasicTickFormatter"},"plot":{"id":"397d1ca4-c74f-42b8-b108-355fa43309f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"976d3b90-0a07-48d7-bfb4-cc45439a02ec","type":"BasicTicker"}},"id":"73ce8e70-1739-4f38-b796-3c07dac09847","type":"LinearAxis"},{"attributes":{"below":[{"id":"56567c6a-ecff-423b-aff3-c4ae71363a14","type":"LinearAxis"}],"left":[{"id":"b9275f16-67b5-4f71-a3f9-60b9d00fb5d1","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"56567c6a-ecff-423b-aff3-c4ae71363a14","type":"LinearAxis"},{"id":"df5de951-0573-47d9-a8b0-6db1806ab49a","type":"Grid"},{"id":"b9275f16-67b5-4f71-a3f9-60b9d00fb5d1","type":"LinearAxis"},{"id":"6beca8b9-45f6-449a-bf99-3d75c588e5c0","type":"Grid"},{"id":"a25f3b42-2139-4020-a212-cfdc7e576619","type":"BoxAnnotation"},{"id":"330e7be3-0418-40e5-8aa8-b4201dfd7963","type":"GlyphRenderer"},{"id":"265504df-ceb2-4e4f-804b-715326e59d9a","type":"GlyphRenderer"},{"id":"2f95e7bb-23f5-453d-a69b-acb0cd072a26","type":"GlyphRenderer"},{"id":"4790692f-1d7c-4e51-8b0e-1a4ffb66efa5","type":"GlyphRenderer"},{"id":"56a253c9-e1cb-4ba7-9b47-32d0c6d8755c","type":"GlyphRenderer"},{"id":"dd04aa7c-0c2c-4c77-b395-e1fad9c79b8e","type":"GlyphRenderer"},{"id":"8588b8ca-05a7-4315-8131-fce48d5e0a3b","type":"GlyphRenderer"},{"id":"bea7413d-f4ee-4ebb-bf27-43cbd6265d71","type":"GlyphRenderer"},{"id":"ca7d7aa7-d287-45c2-9dc1-b20758a937eb","type":"GlyphRenderer"},{"id":"c0def222-9d0e-4eba-854c-dbc7011a7d35","type":"GlyphRenderer"},{"id":"822ea320-80d4-43cb-8fc1-f803d28a73d4","type":"GlyphRenderer"},{"id":"128927a8-778d-48a8-90c6-da3b766a17e4","type":"GlyphRenderer"},{"id":"f8f51467-3dd6-4817-a1bd-610a97df45a5","type":"GlyphRenderer"}],"title":{"id":"6f61cd1b-a6b6-46f8-b6f4-0e741246f00d","type":"Title"},"toolbar":{"id":"33b3ea49-1ee1-4ca1-ae14-f2eaa9c3a473","type":"Toolbar"},"x_range":{"id":"064b0cae-e2de-4b3f-b8b9-dc790b2cb419","type":"DataRange1d"},"x_scale":{"id":"5d86a43d-a1e7-442f-a77d-a3252fccfe47","type":"LinearScale"},"y_range":{"id":"110e03f5-7321-43fc-be43-0fb41599abef","type":"DataRange1d"},"y_scale":{"id":"aa8ec700-13dc-4a9c-b26e-5d4a1c3e2929","type":"LinearScale"}},"id":"f743153f-7e7b-4c54-b0cc-1acdc91d4e51","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"ee5a9966-ca84-4e87-94e5-6419140df2ff","type":"BoxAnnotation"}},"id":"61af4ebc-e7c5-4847-b1e2-2c8372d24b80","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8f1eeddc-d1b6-4213-b0f9-67a0baa5f00f","type":"PanTool"},{"id":"76b82c5c-ca48-4d35-a48c-e5f24ecc53b3","type":"WheelZoomTool"},{"id":"61af4ebc-e7c5-4847-b1e2-2c8372d24b80","type":"BoxZoomTool"},{"id":"842dfc8e-52c7-4304-990e-a970e11bf262","type":"SaveTool"},{"id":"800821d8-d1c8-4cd6-a506-115c1bf548bc","type":"ResetTool"},{"id":"99e78814-6d1c-4f43-8465-aca27da11e9e","type":"HelpTool"}]},"id":"3dcd7985-f165-4a7b-9d6a-4f6559bea949","type":"Toolbar"},{"attributes":{"source":{"id":"6be0c3f9-a740-46d3-820c-950fd18b9bcd","type":"ColumnDataSource"}},"id":"6e823aa6-1892-4b00-bcc4-f6d2da1b973e","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"d6ca9718-12a8-4ecb-aac7-5878d7627905","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"94e4f728-f9ff-465e-a990-409c7266c191","type":"Circle"},{"attributes":{"callback":null},"id":"110e03f5-7321-43fc-be43-0fb41599abef","type":"DataRange1d"},{"attributes":{"source":{"id":"91dc23e0-b343-411a-ba7f-17b70e583932","type":"ColumnDataSource"}},"id":"8cb8b8dd-ae4e-4156-b35e-e2001adbe800","type":"CDSView"},{"attributes":{"source":{"id":"78146ed4-ebc7-494e-aa4e-cf92ba97e847","type":"ColumnDataSource"}},"id":"d327c0b8-9137-410a-b631-61fe86cb4aa5","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"f743153f-7e7b-4c54-b0cc-1acdc91d4e51","subtype":"Figure","type":"Plot"},"ticker":{"id":"db089524-bb46-4e99-9126-226efd302e92","type":"BasicTicker"}},"id":"6beca8b9-45f6-449a-bf99-3d75c588e5c0","type":"Grid"},{"attributes":{"range":null},"id":"9fa587d5-2387-4bbf-8b96-06378e1c01a3","type":"Jitter"},{"attributes":{"data_source":{"id":"91dc23e0-b343-411a-ba7f-17b70e583932","type":"ColumnDataSource"},"glyph":{"id":"8fda1ac4-7c18-4b3d-9df6-70ca5eb6b729","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fdc23d72-0386-40ff-b1b0-6f379145244b","type":"Circle"},"selection_glyph":null,"view":{"id":"8cb8b8dd-ae4e-4156-b35e-e2001adbe800","type":"CDSView"}},"id":"b8408928-aaee-4426-9d5e-6ae7fda72333","type":"GlyphRenderer"},{"attributes":{},"id":"5d86a43d-a1e7-442f-a77d-a3252fccfe47","type":"LinearScale"},{"attributes":{"plot":null,"text":"Years vs mpg without jittering"},"id":"1de25dcf-2669-49e9-a195-f95811d6c939","type":"Title"},{"attributes":{"callback":null},"id":"4c8f617e-3d72-4e21-80ab-a0eb2e311272","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"fdc23d72-0386-40ff-b1b0-6f379145244b","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"1066ba08-f6b5-4750-ab5b-0038aff50c06","type":"Circle"},{"attributes":{"source":{"id":"fea2fbaf-3be0-41a0-aa35-cb344cabc30a","type":"ColumnDataSource"}},"id":"18bd2e6f-31d4-481d-a3d5-7eac00672d68","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"fa5b3dbc-ddac-44d8-865d-8bedea1b00b8","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"8fda1ac4-7c18-4b3d-9df6-70ca5eb6b729","type":"Circle"},{"attributes":{},"id":"f802edcf-b5dc-47a4-9962-e29c8ce4a5e7","type":"PanTool"},{"attributes":{"range":null},"id":"d6ca9718-12a8-4ecb-aac7-5878d7627905","type":"Jitter"},{"attributes":{"plot":null,"text":"Years vs mpg with jittering"},"id":"6f61cd1b-a6b6-46f8-b6f4-0e741246f00d","type":"Title"},{"attributes":{"source":{"id":"fa5b3dbc-ddac-44d8-865d-8bedea1b00b8","type":"ColumnDataSource"}},"id":"09bb90c0-9396-4f64-84c3-ea9a1d30edaf","type":"CDSView"},{"attributes":{"plot":{"id":"f743153f-7e7b-4c54-b0cc-1acdc91d4e51","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a966908-ca43-4ab6-ae73-dd7a7ce7e540","type":"BasicTicker"}},"id":"df5de951-0573-47d9-a8b0-6db1806ab49a","type":"Grid"},{"attributes":{},"id":"dd84329a-0272-4eb7-b311-621e292e2a70","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":null,"selection_policy":null},"id":"fea2fbaf-3be0-41a0-aa35-cb344cabc30a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"397d1ca4-c74f-42b8-b108-355fa43309f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd84329a-0272-4eb7-b311-621e292e2a70","type":"BasicTicker"}},"id":"19759c46-e1a5-4b2a-ae3e-2c17760165f8","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"82075452-96f8-46e3-9245-5f5485286e0e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"6ee8b2b5-c18e-4c5a-ae41-04ecb9579997","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"9413c0a3-2c7b-4fb9-9a02-6b0e8b124c9b","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"d6ca9718-12a8-4ecb-aac7-5878d7627905","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"c9e9c36d-55bc-4ccd-928f-083fed754b37","type":"Circle"},{"attributes":{"data_source":{"id":"fa5b3dbc-ddac-44d8-865d-8bedea1b00b8","type":"ColumnDataSource"},"glyph":{"id":"94e4f728-f9ff-465e-a990-409c7266c191","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c9e9c36d-55bc-4ccd-928f-083fed754b37","type":"Circle"},"selection_glyph":null,"view":{"id":"09bb90c0-9396-4f64-84c3-ea9a1d30edaf","type":"CDSView"}},"id":"bea7413d-f4ee-4ebb-bf27-43cbd6265d71","type":"GlyphRenderer"},{"attributes":{},"id":"8f1eeddc-d1b6-4213-b0f9-67a0baa5f00f","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"1fc56e1a-169c-4bc8-aafc-ca99ed42db24","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"7463fb25-a3b9-42a6-82aa-ccf345ac4c21","type":"Circle"},{"attributes":{"formatter":{"id":"6e2bdfe2-cba1-4203-b6ae-ab9ccc0169eb","type":"BasicTickFormatter"},"plot":{"id":"397d1ca4-c74f-42b8-b108-355fa43309f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd84329a-0272-4eb7-b311-621e292e2a70","type":"BasicTicker"}},"id":"394e0e76-7b4d-4f5c-a001-7597b944150c","type":"LinearAxis"},{"attributes":{"below":[{"id":"394e0e76-7b4d-4f5c-a001-7597b944150c","type":"LinearAxis"}],"left":[{"id":"73ce8e70-1739-4f38-b796-3c07dac09847","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"394e0e76-7b4d-4f5c-a001-7597b944150c","type":"LinearAxis"},{"id":"19759c46-e1a5-4b2a-ae3e-2c17760165f8","type":"Grid"},{"id":"73ce8e70-1739-4f38-b796-3c07dac09847","type":"LinearAxis"},{"id":"020759ce-dc9f-43b8-a33b-7c8d6464ce0d","type":"Grid"},{"id":"ee5a9966-ca84-4e87-94e5-6419140df2ff","type":"BoxAnnotation"},{"id":"72ad00f8-45d3-45fd-845d-28d1584ec56d","type":"GlyphRenderer"},{"id":"f52e2b59-8aa0-49c0-a2d1-1b0881119c57","type":"GlyphRenderer"},{"id":"f045b337-3efb-492a-a46c-20635ca9949c","type":"GlyphRenderer"},{"id":"75d2a4ad-d520-444e-86c0-206dc51b0c68","type":"GlyphRenderer"},{"id":"92f91adc-3afc-4225-89b4-64962beac8d7","type":"GlyphRenderer"},{"id":"fa222508-8778-4652-b969-fcead127f8ab","type":"GlyphRenderer"},{"id":"ecfc900c-7843-4d8b-8d8a-001830ea4b43","type":"GlyphRenderer"},{"id":"b8408928-aaee-4426-9d5e-6ae7fda72333","type":"GlyphRenderer"},{"id":"0faadc32-1f79-4867-9c45-a0c43e23e0ba","type":"GlyphRenderer"},{"id":"ab382100-02d7-4390-87cb-78fdf9e73579","type":"GlyphRenderer"},{"id":"b1e4e84f-634a-4a18-ac21-a7d12687775b","type":"GlyphRenderer"},{"id":"c3e6da8f-3361-4cb5-92f4-e3b23ada9ac0","type":"GlyphRenderer"},{"id":"aadb23cc-bf93-4d0d-a61a-9b0ab491e674","type":"GlyphRenderer"}],"title":{"id":"1de25dcf-2669-49e9-a195-f95811d6c939","type":"Title"},"toolbar":{"id":"3dcd7985-f165-4a7b-9d6a-4f6559bea949","type":"Toolbar"},"x_range":{"id":"ffe2a54d-7d37-4bf0-857a-656873719ff2","type":"DataRange1d"},"x_scale":{"id":"595fde34-f905-4f98-aaab-7ebb88fce9ff","type":"LinearScale"},"y_range":{"id":"4c8f617e-3d72-4e21-80ab-a0eb2e311272","type":"DataRange1d"},"y_scale":{"id":"448e51fb-cc74-4eb4-84c1-520b2457ecfe","type":"LinearScale"}},"id":"397d1ca4-c74f-42b8-b108-355fa43309f9","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"f48c96b3-2efd-4ee0-98c9-a9d4c0c23fe5","type":"Circle"},{"attributes":{"source":{"id":"83c913e6-4c70-4c44-ab76-4313ca90fe48","type":"ColumnDataSource"}},"id":"333a8f33-9299-4f9f-9165-0750ab1f5db4","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":null,"selection_policy":null},"id":"6be0c3f9-a740-46d3-820c-950fd18b9bcd","type":"ColumnDataSource"},{"attributes":{},"id":"595fde34-f905-4f98-aaab-7ebb88fce9ff","type":"LinearScale"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"7cf404b4-2f70-49d2-a929-21fbc366d339","type":"Circle"},{"attributes":{"range":null},"id":"6ee8b2b5-c18e-4c5a-ae41-04ecb9579997","type":"Jitter"},{"attributes":{},"id":"976d3b90-0a07-48d7-bfb4-cc45439a02ec","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"7fa68f2d-2b0c-4c1d-b6b5-b39566d3bb5a","type":"Circle"},{"attributes":{"data_source":{"id":"6be0c3f9-a740-46d3-820c-950fd18b9bcd","type":"ColumnDataSource"},"glyph":{"id":"4ee5f62c-72fb-4c3c-921d-e5ab0a912b29","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a90fe92-93a8-4bb3-9a67-3329ac7c1ee4","type":"Circle"},"selection_glyph":null,"view":{"id":"6e823aa6-1892-4b00-bcc4-f6d2da1b973e","type":"CDSView"}},"id":"dd04aa7c-0c2c-4c77-b395-e1fad9c79b8e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26cb5352-84c0-4248-b4d4-97dd293ff12e","type":"ColumnDataSource"}},"id":"96388a26-182e-42a9-811d-0d326ade2dff","type":"CDSView"},{"attributes":{"source":{"id":"775d76d8-a6a6-4b22-a957-f41557f95b64","type":"ColumnDataSource"}},"id":"b00ff00b-7c20-4376-b025-edb3708ae90a","type":"CDSView"},{"attributes":{"range":null},"id":"77402b85-5cd1-4662-8126-8d91a7bddcfd","type":"Jitter"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":null,"selection_policy":null},"id":"149d44a5-6735-4d26-a1ab-0d6ab280ccbe","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"dfa01277-0431-4f90-9d31-b1b039f70f64","type":"Circle"},{"attributes":{},"id":"448e51fb-cc74-4eb4-84c1-520b2457ecfe","type":"LinearScale"},{"attributes":{"data_source":{"id":"83c913e6-4c70-4c44-ab76-4313ca90fe48","type":"ColumnDataSource"},"glyph":{"id":"7fa68f2d-2b0c-4c1d-b6b5-b39566d3bb5a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82075452-96f8-46e3-9245-5f5485286e0e","type":"Circle"},"selection_glyph":null,"view":{"id":"333a8f33-9299-4f9f-9165-0750ab1f5db4","type":"CDSView"}},"id":"0faadc32-1f79-4867-9c45-a0c43e23e0ba","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"78146ed4-ebc7-494e-aa4e-cf92ba97e847","type":"ColumnDataSource"},"glyph":{"id":"84463019-10ca-4846-90d3-5c4acb48e21b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9413c0a3-2c7b-4fb9-9a02-6b0e8b124c9b","type":"Circle"},"selection_glyph":null,"view":{"id":"d327c0b8-9137-410a-b631-61fe86cb4aa5","type":"CDSView"}},"id":"8588b8ca-05a7-4315-8131-fce48d5e0a3b","type":"GlyphRenderer"},{"attributes":{},"id":"db089524-bb46-4e99-9126-226efd302e92","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"transform":{"id":"6ee8b2b5-c18e-4c5a-ae41-04ecb9579997","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"84463019-10ca-4846-90d3-5c4acb48e21b","type":"Circle"},{"attributes":{"callback":null},"id":"064b0cae-e2de-4b3f-b8b9-dc790b2cb419","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"91dc23e0-b343-411a-ba7f-17b70e583932","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"397d1ca4-c74f-42b8-b108-355fa43309f9","subtype":"Figure","type":"Plot"},{"id":"f743153f-7e7b-4c54-b0cc-1acdc91d4e51","subtype":"Figure","type":"Plot"}]},"id":"a1ef3cf6-4d80-4c44-a92e-c0465191663b","type":"Column"},{"attributes":{"data_source":{"id":"fea2fbaf-3be0-41a0-aa35-cb344cabc30a","type":"ColumnDataSource"},"glyph":{"id":"70e3f67f-65ff-4ed6-82c2-a81d05edfac0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f48c96b3-2efd-4ee0-98c9-a9d4c0c23fe5","type":"Circle"},"selection_glyph":null,"view":{"id":"18bd2e6f-31d4-481d-a3d5-7eac00672d68","type":"CDSView"}},"id":"ecfc900c-7843-4d8b-8d8a-001830ea4b43","type":"GlyphRenderer"},{"attributes":{},"id":"aa8ec700-13dc-4a9c-b26e-5d4a1c3e2929","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":null,"selection_policy":null},"id":"78146ed4-ebc7-494e-aa4e-cf92ba97e847","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"ffe2a54d-7d37-4bf0-857a-656873719ff2","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":null,"selection_policy":null},"id":"83c913e6-4c70-4c44-ab76-4313ca90fe48","type":"ColumnDataSource"}],"root_ids":["a1ef3cf6-4d80-4c44-a92e-c0465191663b"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"f35cb2bf-a5d8-43b9-995d-7bfa608a7bae","elementid":"5a959eb5-c523-4c9d-a497-e8e243e11ba9","modelid":"a1ef3cf6-4d80-4c44-a92e-c0465191663b"}];
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