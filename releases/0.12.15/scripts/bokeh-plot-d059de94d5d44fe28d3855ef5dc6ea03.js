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
      };var element = document.getElementById("095e747f-ec5d-4d77-b2dc-a6e3344bb9e2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '095e747f-ec5d-4d77-b2dc-a6e3344bb9e2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7d33e45b-9cdc-4b7c-bfe2-36e7584d8847":{"roots":{"references":[{"attributes":{"source":{"id":"39ff379c-857c-4d57-8ddb-3631a1df22cb","type":"ColumnDataSource"}},"id":"4d4fe772-3aa6-4444-8031-4e107da81d30","type":"CDSView"},{"attributes":{"source":{"id":"0aa8e056-f1b8-4dbc-99b5-9340fe226d4d","type":"ColumnDataSource"}},"id":"68b72dc8-cd2a-4179-b188-76deb7aa7d08","type":"CDSView"},{"attributes":{},"id":"3229c038-99c2-41ce-9559-770cb6097053","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce054223-5f5f-4032-92d7-bc7dd93e2126","type":"Circle"},{"attributes":{"data_source":{"id":"b982f7ef-ce26-4896-be05-82ce47662528","type":"ColumnDataSource"},"glyph":{"id":"19359d7a-0cf3-4a81-8110-b83c7cc8c97e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87e7bda7-7740-450c-b339-faea69f62cc7","type":"Circle"},"selection_glyph":null,"view":{"id":"926665e1-ec00-4c5a-82d4-b8a6f80d6c2e","type":"CDSView"}},"id":"597664f4-63d5-4565-b0cb-7acc24a0d91f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0aa8e056-f1b8-4dbc-99b5-9340fe226d4d","type":"ColumnDataSource"},"glyph":{"id":"9df2816f-1603-4003-88a0-d7816822b79e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33b75313-d897-4bb6-b9ec-826fbb7c1371","type":"Circle"},"selection_glyph":null,"view":{"id":"68b72dc8-cd2a-4179-b188-76deb7aa7d08","type":"CDSView"}},"id":"478fa6b8-460b-4498-bca2-bc6beecd3f82","type":"GlyphRenderer"},{"attributes":{},"id":"cbda9bd7-2a59-4a2e-a565-5223212423b9","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a39ad4c0-e006-4cdf-be1b-ec2fe97496fe","type":"Circle"},{"attributes":{},"id":"03fca896-6c29-4a00-a5f4-55cb366fb77b","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["None"]},"selected":null,"selection_policy":null},"id":"39ff379c-857c-4d57-8ddb-3631a1df22cb","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"3fe26cff-0252-4bac-9a98-0c2da37873cd","type":"BoxAnnotation"}},"id":"af9aad27-d5c0-4488-ac82-8d0d43bb597e","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha"]},"selected":null,"selection_policy":null},"id":"90797490-57d8-4a35-97f0-9c8be575c0d2","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"33b75313-d897-4bb6-b9ec-826fbb7c1371","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f9c1461-85f3-4d04-af47-5667cc190cb5","type":"Circle"},{"attributes":{"data_source":{"id":"39ff379c-857c-4d57-8ddb-3631a1df22cb","type":"ColumnDataSource"},"glyph":{"id":"17f6ff7a-1a79-415e-98ea-191199ec854e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a39ad4c0-e006-4cdf-be1b-ec2fe97496fe","type":"Circle"},"selection_glyph":null,"view":{"id":"4d4fe772-3aa6-4444-8031-4e107da81d30","type":"CDSView"}},"id":"7f7ad184-6374-46c8-86b7-d200b63e5b8a","type":"GlyphRenderer"},{"attributes":{},"id":"f6bdd243-32a3-4f78-86ff-5839a348cac2","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3fe26cff-0252-4bac-9a98-0c2da37873cd","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["None"]},"selected":null,"selection_policy":null},"id":"b982f7ef-ce26-4896-be05-82ce47662528","type":"ColumnDataSource"},{"attributes":{"axis_label":"Fill Options","formatter":{"id":"e04a6d2d-b680-4056-9565-05da44832620","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"bb2d8681-b261-418d-a8eb-86e6406ad0f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2a97dfa-79e9-4c7e-8221-d4a2a40eebc1","type":"CategoricalTicker"}},"id":"102a6634-3c8d-4665-b295-7f516bf9d396","type":"CategoricalAxis"},{"attributes":{"source":{"id":"b982f7ef-ce26-4896-be05-82ce47662528","type":"ColumnDataSource"}},"id":"926665e1-ec00-4c5a-82d4-b8a6f80d6c2e","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGBA"]},"selected":null,"selection_policy":null},"id":"29126eca-5eb7-4b91-ac62-3dc0776ec442","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"64e4b9d0-cbef-40a6-9ae3-938d35231fef","type":"FactorRange"},{"attributes":{"data_source":{"id":"29126eca-5eb7-4b91-ac62-3dc0776ec442","type":"ColumnDataSource"},"glyph":{"id":"c5c53659-4f54-4e89-af02-fff4f3f70407","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1a0bd1f-f878-460d-b504-69cc84a1751d","type":"Circle"},"selection_glyph":null,"view":{"id":"3f46d8cd-8490-46cb-952b-ae4615854404","type":"CDSView"}},"id":"48292f78-bc40-4c74-8e3d-48b3869bf44e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ef8071b-3d89-4b65-b25a-68ab67cb8f9a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c73e137-ed84-4a6b-9281-802d196758eb","type":"Circle"},{"attributes":{"source":{"id":"26f7c9df-97cb-4b8c-ba12-f1dcecf80d04","type":"ColumnDataSource"}},"id":"31c6f69e-a815-4e19-b277-5b3077d560bc","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5c53659-4f54-4e89-af02-fff4f3f70407","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3229c038-99c2-41ce-9559-770cb6097053","type":"PanTool"},{"id":"f6bdd243-32a3-4f78-86ff-5839a348cac2","type":"WheelZoomTool"},{"id":"af9aad27-d5c0-4488-ac82-8d0d43bb597e","type":"BoxZoomTool"},{"id":"03fca896-6c29-4a00-a5f4-55cb366fb77b","type":"SaveTool"},{"id":"d253c3c4-6840-4aa3-a31d-e5682b160581","type":"ResetTool"},{"id":"b8102673-a139-4595-bb2a-e38945dbd908","type":"HelpTool"}]},"id":"5193bc5d-ef27-437a-aa6f-f07fa89caef5","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["None"]},"selected":null,"selection_policy":null},"id":"32ef6fc2-cbd1-447f-b74d-1c19a7a3ca56","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1a0bd1f-f878-460d-b504-69cc84a1751d","type":"Circle"},{"attributes":{"source":{"id":"29126eca-5eb7-4b91-ac62-3dc0776ec442","type":"ColumnDataSource"}},"id":"3f46d8cd-8490-46cb-952b-ae4615854404","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"91862334-2831-4eee-98d5-6270f4471f41","type":"Circle"},{"attributes":{"source":{"id":"32ef6fc2-cbd1-447f-b74d-1c19a7a3ca56","type":"ColumnDataSource"}},"id":"4b2872e8-7706-472f-aa1e-7db3d10fe2f5","type":"CDSView"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"79872c2d-4374-42b5-b596-f29db8c1f162","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha"]},"selected":null,"selection_policy":null},"id":"fdbd72bf-5a36-4804-9eef-0487576e9c50","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fdbd72bf-5a36-4804-9eef-0487576e9c50","type":"ColumnDataSource"},"glyph":{"id":"ce054223-5f5f-4032-92d7-bc7dd93e2126","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79fca2ee-f55c-4a7e-a247-7008b9aac623","type":"Circle"},"selection_glyph":null,"view":{"id":"3c870125-47e2-46de-81d3-c576b6e9cbe5","type":"CDSView"}},"id":"2d657c55-fe7e-49bc-a6e5-c442f19ada33","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0049443c-6abb-4112-8641-257f2c732704","type":"ColumnDataSource"},"glyph":{"id":"38b97f46-a661-4bac-acd6-b57b40503ac8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc439bcf-7587-441f-9790-3a0b345bcc22","type":"Circle"},"selection_glyph":null,"view":{"id":"bf819ba7-8ac8-4bb0-a0f9-062c928c7c30","type":"CDSView"}},"id":"bd1d37f7-989c-4142-8989-9c64156d4164","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"32ef6fc2-cbd1-447f-b74d-1c19a7a3ca56","type":"ColumnDataSource"},"glyph":{"id":"2ef8071b-3d89-4b65-b25a-68ab67cb8f9a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"91862334-2831-4eee-98d5-6270f4471f41","type":"Circle"},"selection_glyph":null,"view":{"id":"4b2872e8-7706-472f-aa1e-7db3d10fe2f5","type":"CDSView"}},"id":"0b536096-607c-4986-b3a6-6919b6ef28b4","type":"GlyphRenderer"},{"attributes":{"source":{"id":"fdbd72bf-5a36-4804-9eef-0487576e9c50","type":"ColumnDataSource"}},"id":"3c870125-47e2-46de-81d3-c576b6e9cbe5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"38b97f46-a661-4bac-acd6-b57b40503ac8","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"79fca2ee-f55c-4a7e-a247-7008b9aac623","type":"Circle"},{"attributes":{"plot":null,"text":"Fill and Line Color Combinations"},"id":"41ec9545-d59f-475e-bf18-b872cab9b74c","type":"Title"},{"attributes":{"source":{"id":"c01ec082-a258-4b7c-a235-f2bd9f38ad3d","type":"ColumnDataSource"}},"id":"58c02a2c-4bfe-459a-9f9f-fe7f70855cf3","type":"CDSView"},{"attributes":{},"id":"d253c3c4-6840-4aa3-a31d-e5682b160581","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGBA"]},"selected":null,"selection_policy":null},"id":"e039e709-18d4-4fe7-a0e1-3178a59fb8eb","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGB"]},"selected":null,"selection_policy":null},"id":"0049443c-6abb-4112-8641-257f2c732704","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"457b2e68-f853-4658-b062-4a82cacd5d4f","type":"Circle"},{"attributes":{"source":{"id":"7dfd57f4-eecd-4783-b5ae-1e3241aba6ed","type":"ColumnDataSource"}},"id":"5d7fa7f6-b686-4b0d-86e5-435874596343","type":"CDSView"},{"attributes":{"data_source":{"id":"7dfd57f4-eecd-4783-b5ae-1e3241aba6ed","type":"ColumnDataSource"},"glyph":{"id":"8c73e137-ed84-4a6b-9281-802d196758eb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21f1ffa0-2628-4bf2-8d7e-edfcd65b2d7f","type":"Circle"},"selection_glyph":null,"view":{"id":"5d7fa7f6-b686-4b0d-86e5-435874596343","type":"CDSView"}},"id":"68e9a4ea-03ba-48eb-afeb-5851ca70e465","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0049443c-6abb-4112-8641-257f2c732704","type":"ColumnDataSource"}},"id":"bf819ba7-8ac8-4bb0-a0f9-062c928c7c30","type":"CDSView"},{"attributes":{"data_source":{"id":"e039e709-18d4-4fe7-a0e1-3178a59fb8eb","type":"ColumnDataSource"},"glyph":{"id":"457b2e68-f853-4658-b062-4a82cacd5d4f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cf3eb3d2-5b48-45c2-8aa5-513abe088fdb","type":"Circle"},"selection_glyph":null,"view":{"id":"c2f86ffe-a87a-4886-871a-08cd4895db48","type":"CDSView"}},"id":"0c4c6515-9414-4eb4-80a3-b65b212e2929","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGB"]},"selected":null,"selection_policy":null},"id":"7dfd57f4-eecd-4783-b5ae-1e3241aba6ed","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc439bcf-7587-441f-9790-3a0b345bcc22","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"87e7bda7-7740-450c-b339-faea69f62cc7","type":"Circle"},{"attributes":{"source":{"id":"e039e709-18d4-4fe7-a0e1-3178a59fb8eb","type":"ColumnDataSource"}},"id":"c2f86ffe-a87a-4886-871a-08cd4895db48","type":"CDSView"},{"attributes":{},"id":"68d64cdb-1e49-44c2-a9a2-be23cddb0d8a","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"82aca648-9c59-4fe1-af5e-dcdec88dbd9c","type":"Circle"},{"attributes":{},"id":"3de81331-a722-4052-b325-a9148b6ad906","type":"CategoricalScale"},{"attributes":{},"id":"b8102673-a139-4595-bb2a-e38945dbd908","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGBA"]},"selected":null,"selection_policy":null},"id":"0aa8e056-f1b8-4dbc-99b5-9340fe226d4d","type":"ColumnDataSource"},{"attributes":{},"id":"d2a97dfa-79e9-4c7e-8221-d4a2a40eebc1","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"21f1ffa0-2628-4bf2-8d7e-edfcd65b2d7f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf3eb3d2-5b48-45c2-8aa5-513abe088fdb","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"bb2d8681-b261-418d-a8eb-86e6406ad0f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2a97dfa-79e9-4c7e-8221-d4a2a40eebc1","type":"CategoricalTicker"}},"id":"8f769ec5-46f1-414c-bdcf-98cf43cb9405","type":"Grid"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"17f6ff7a-1a79-415e-98ea-191199ec854e","type":"Circle"},{"attributes":{"below":[{"id":"102a6634-3c8d-4665-b295-7f516bf9d396","type":"CategoricalAxis"}],"left":[{"id":"c763195d-3f87-4944-a6e9-1385e88e0fcb","type":"CategoricalAxis"}],"renderers":[{"id":"102a6634-3c8d-4665-b295-7f516bf9d396","type":"CategoricalAxis"},{"id":"8f769ec5-46f1-414c-bdcf-98cf43cb9405","type":"Grid"},{"id":"c763195d-3f87-4944-a6e9-1385e88e0fcb","type":"CategoricalAxis"},{"id":"17ffc56c-4d9f-40c2-8f66-08b0ab3d683b","type":"Grid"},{"id":"3fe26cff-0252-4bac-9a98-0c2da37873cd","type":"BoxAnnotation"},{"id":"597664f4-63d5-4565-b0cb-7acc24a0d91f","type":"GlyphRenderer"},{"id":"82f8289a-6aeb-4078-aaaf-af82185d6fcb","type":"GlyphRenderer"},{"id":"0c8c2282-1ab1-413f-9c89-bdb626aa77c8","type":"GlyphRenderer"},{"id":"14a58740-85aa-403c-9f0a-a4feb2d8e5ff","type":"GlyphRenderer"},{"id":"5e6ba389-f37d-4c1f-ae58-b620a8d1a6f2","type":"GlyphRenderer"},{"id":"48292f78-bc40-4c74-8e3d-48b3869bf44e","type":"GlyphRenderer"},{"id":"0b536096-607c-4986-b3a6-6919b6ef28b4","type":"GlyphRenderer"},{"id":"2d657c55-fe7e-49bc-a6e5-c442f19ada33","type":"GlyphRenderer"},{"id":"bd1d37f7-989c-4142-8989-9c64156d4164","type":"GlyphRenderer"},{"id":"0c4c6515-9414-4eb4-80a3-b65b212e2929","type":"GlyphRenderer"},{"id":"68e9a4ea-03ba-48eb-afeb-5851ca70e465","type":"GlyphRenderer"},{"id":"478fa6b8-460b-4498-bca2-bc6beecd3f82","type":"GlyphRenderer"},{"id":"7f7ad184-6374-46c8-86b7-d200b63e5b8a","type":"GlyphRenderer"},{"id":"c5cd52ac-e915-4ec2-9096-9ea4f17f5f6b","type":"GlyphRenderer"},{"id":"df2ca184-3264-457e-a844-2ecec812e8a1","type":"GlyphRenderer"},{"id":"7aa4d543-7164-4812-ad7b-4544fe929cfd","type":"GlyphRenderer"},{"id":"2b7b3929-3f1f-4647-b360-19dc147b6505","type":"GlyphRenderer"},{"id":"cc7a5c82-ea64-46e7-bb21-61f2fe154ab5","type":"GlyphRenderer"},{"id":"1474c1a0-f347-4570-a0dd-4cd2a47927e1","type":"GlyphRenderer"},{"id":"81ccd00c-05ce-4024-b5ea-7033299ae75a","type":"GlyphRenderer"},{"id":"29e27d18-1ecb-440c-9dcc-7ca006ee547a","type":"GlyphRenderer"},{"id":"306c0fe2-0957-4437-90a7-fd45ce4090ea","type":"GlyphRenderer"},{"id":"73320eb0-ae1a-4315-9a22-35c225458999","type":"GlyphRenderer"},{"id":"dcbfacdc-7064-4f34-8328-77b8a240e6ce","type":"GlyphRenderer"},{"id":"078f76a0-6a59-45b1-94f1-28fd93fed6a3","type":"GlyphRenderer"},{"id":"658cc5e4-718a-4874-bc13-e260a8f77556","type":"GlyphRenderer"},{"id":"15b5897c-197e-4fbf-8f48-508eb9a67f8e","type":"GlyphRenderer"},{"id":"dce69d4b-add1-43bd-8d70-f39f413ef9e6","type":"GlyphRenderer"},{"id":"b35619f0-fc17-40d7-a7d1-283f34213bdc","type":"GlyphRenderer"},{"id":"baa0824e-9554-4ccf-881a-a69278c4c068","type":"GlyphRenderer"},{"id":"48fa5f33-4dc4-47ea-ae33-a81341b9a330","type":"GlyphRenderer"},{"id":"168de87c-9b93-46d8-85ea-73458ffcd43c","type":"GlyphRenderer"},{"id":"b9c429fe-61f9-42f8-8651-7e84d5ca9d4a","type":"GlyphRenderer"},{"id":"f74bc2c7-8a53-4974-b498-8c34d1a28f87","type":"GlyphRenderer"},{"id":"2d62c867-6419-49b4-b95a-471cd66797e5","type":"GlyphRenderer"},{"id":"0142ef08-f3d6-4e17-bb74-ba3c3d92b1be","type":"GlyphRenderer"}],"title":{"id":"41ec9545-d59f-475e-bf18-b872cab9b74c","type":"Title"},"toolbar":{"id":"5193bc5d-ef27-437a-aa6f-f07fa89caef5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"64e4b9d0-cbef-40a6-9ae3-938d35231fef","type":"FactorRange"},"x_scale":{"id":"3de81331-a722-4052-b325-a9148b6ad906","type":"CategoricalScale"},"y_range":{"id":"79872c2d-4374-42b5-b596-f29db8c1f162","type":"FactorRange"},"y_scale":{"id":"68d64cdb-1e49-44c2-a9a2-be23cddb0d8a","type":"CategoricalScale"}},"id":"bb2d8681-b261-418d-a8eb-86e6406ad0f0","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9df2816f-1603-4003-88a0-d7816822b79e","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"78e44e34-7ae9-44ca-bb8e-5fc1d29cfabd","type":"Circle"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"bb2d8681-b261-418d-a8eb-86e6406ad0f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1423020-eada-45e5-9f9e-8a4ce19ce132","type":"CategoricalTicker"}},"id":"17ffc56c-4d9f-40c2-8f66-08b0ab3d683b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha"]},"selected":null,"selection_policy":null},"id":"622eddaf-3518-4db1-9318-7ac186fa2051","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ea9b2403-6385-46cc-8a81-fc9b6d47f173","type":"ColumnDataSource"},"glyph":{"id":"793334d2-8929-4784-94ce-06b2beb2d6b5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f23aceac-7ac0-4267-a538-1d572c755299","type":"Circle"},"selection_glyph":null,"view":{"id":"b6e84f27-fb62-4070-9adf-d6324330a2af","type":"CDSView"}},"id":"cc7a5c82-ea64-46e7-bb21-61f2fe154ab5","type":"GlyphRenderer"},{"attributes":{},"id":"a1423020-eada-45e5-9f9e-8a4ce19ce132","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"def1ffaa-0542-4b71-8b91-0a178f2e7477","type":"Circle"},{"attributes":{"source":{"id":"622eddaf-3518-4db1-9318-7ac186fa2051","type":"ColumnDataSource"}},"id":"1bdd5273-75c9-40ca-bd14-fc2062756d15","type":"CDSView"},{"attributes":{},"id":"e04a6d2d-b680-4056-9565-05da44832620","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a62a7ed-6413-4e0d-b291-f56bf15e9ae4","type":"Circle"},{"attributes":{"data_source":{"id":"622eddaf-3518-4db1-9318-7ac186fa2051","type":"ColumnDataSource"},"glyph":{"id":"78e44e34-7ae9-44ca-bb8e-5fc1d29cfabd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"def1ffaa-0542-4b71-8b91-0a178f2e7477","type":"Circle"},"selection_glyph":null,"view":{"id":"1bdd5273-75c9-40ca-bd14-fc2062756d15","type":"CDSView"}},"id":"c5cd52ac-e915-4ec2-9096-9ea4f17f5f6b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGB"]},"selected":null,"selection_policy":null},"id":"96e41736-ae4b-413d-bf9b-e19827cb4dfe","type":"ColumnDataSource"},{"attributes":{"source":{"id":"96e41736-ae4b-413d-bf9b-e19827cb4dfe","type":"ColumnDataSource"}},"id":"544bba50-f051-44a2-aef0-53f489de03f1","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"75806537-5b8b-411a-9b37-19dde6a627f0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"78e28cab-bb0b-42c9-82be-c3ce7b751ab2","type":"Circle"},{"attributes":{"axis_label":"Line Options","formatter":{"id":"cbda9bd7-2a59-4a2e-a565-5223212423b9","type":"CategoricalTickFormatter"},"plot":{"id":"bb2d8681-b261-418d-a8eb-86e6406ad0f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1423020-eada-45e5-9f9e-8a4ce19ce132","type":"CategoricalTicker"}},"id":"c763195d-3f87-4944-a6e9-1385e88e0fcb","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"709bfcc9-dfef-4e1c-8ef4-157c85bb8021","type":"ColumnDataSource"},"glyph":{"id":"75806537-5b8b-411a-9b37-19dde6a627f0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87f7e9ca-fd6d-4fec-a58a-e363155f56d1","type":"Circle"},"selection_glyph":null,"view":{"id":"d8453e1f-bd4d-48de-8d53-1822b667fc24","type":"CDSView"}},"id":"2b7b3929-3f1f-4647-b360-19dc147b6505","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"96e41736-ae4b-413d-bf9b-e19827cb4dfe","type":"ColumnDataSource"},"glyph":{"id":"0a62a7ed-6413-4e0d-b291-f56bf15e9ae4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78e28cab-bb0b-42c9-82be-c3ce7b751ab2","type":"Circle"},"selection_glyph":null,"view":{"id":"544bba50-f051-44a2-aef0-53f489de03f1","type":"CDSView"}},"id":"df2ca184-3264-457e-a844-2ecec812e8a1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGBA"]},"selected":null,"selection_policy":null},"id":"c01ec082-a258-4b7c-a235-f2bd9f38ad3d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"33d39cc3-9d59-4798-94e8-0b5f9fed5eb8","type":"Circle"},{"attributes":{"data_source":{"id":"c01ec082-a258-4b7c-a235-f2bd9f38ad3d","type":"ColumnDataSource"},"glyph":{"id":"82aca648-9c59-4fe1-af5e-dcdec88dbd9c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33d39cc3-9d59-4798-94e8-0b5f9fed5eb8","type":"Circle"},"selection_glyph":null,"view":{"id":"58c02a2c-4bfe-459a-9f9f-fe7f70855cf3","type":"CDSView"}},"id":"7aa4d543-7164-4812-ad7b-4544fe929cfd","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ea9b2403-6385-46cc-8a81-fc9b6d47f173","type":"ColumnDataSource"}},"id":"b6e84f27-fb62-4070-9adf-d6324330a2af","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"793334d2-8929-4784-94ce-06b2beb2d6b5","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGB"]},"selected":null,"selection_policy":null},"id":"709bfcc9-dfef-4e1c-8ef4-157c85bb8021","type":"ColumnDataSource"},{"attributes":{"source":{"id":"709bfcc9-dfef-4e1c-8ef4-157c85bb8021","type":"ColumnDataSource"}},"id":"d8453e1f-bd4d-48de-8d53-1822b667fc24","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["None"]},"selected":null,"selection_policy":null},"id":"f5073639-b87a-4841-90be-1e14673458e7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f23aceac-7ac0-4267-a538-1d572c755299","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"19359d7a-0cf3-4a81-8110-b83c7cc8c97e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"87f7e9ca-fd6d-4fec-a58a-e363155f56d1","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGBA"]},"selected":null,"selection_policy":null},"id":"ea9b2403-6385-46cc-8a81-fc9b6d47f173","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c2c2e8d-9d42-4cd0-930e-60f64d33b714","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b60c748a-9a11-4b4c-8710-fc710878a11c","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGB"]},"selected":null,"selection_policy":null},"id":"27e69e2f-6db6-4ab5-a47b-6addb5bc17cb","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb16ccca-176b-4124-86ac-2edf14a95162","type":"Circle"},{"attributes":{"source":{"id":"e3a66907-98b7-4a4c-9d91-f162794ffe0b","type":"ColumnDataSource"}},"id":"286ddd90-a26c-4279-ae2f-39c2545ad993","type":"CDSView"},{"attributes":{"data_source":{"id":"e3a66907-98b7-4a4c-9d91-f162794ffe0b","type":"ColumnDataSource"},"glyph":{"id":"d275b225-774a-45f0-b659-b4db4d7a5672","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1fcbf82c-7cf1-444f-8740-f096939ffa45","type":"Circle"},"selection_glyph":null,"view":{"id":"286ddd90-a26c-4279-ae2f-39c2545ad993","type":"CDSView"}},"id":"b9c429fe-61f9-42f8-8651-7e84d5ca9d4a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1606aa7-6415-4ad6-b26f-40e4139b074d","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e85ca012-61c9-4602-8027-8e37e18d1f82","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f19283c9-a902-4649-8bdd-62253d2c1b51","type":"Circle"},{"attributes":{"data_source":{"id":"f5073639-b87a-4841-90be-1e14673458e7","type":"ColumnDataSource"},"glyph":{"id":"9c2c2e8d-9d42-4cd0-930e-60f64d33b714","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a1606aa7-6415-4ad6-b26f-40e4139b074d","type":"Circle"},"selection_glyph":null,"view":{"id":"ed7f0e9d-b089-4d2b-8fa5-075b7d0adf2d","type":"CDSView"}},"id":"1474c1a0-f347-4570-a0dd-4cd2a47927e1","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"644609bf-3cc4-4f87-9f7f-5ad1c2a1c854","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c90ca5e8-ebb9-4570-ac56-d4994b70d869","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha"]},"selected":null,"selection_policy":null},"id":"cab34e92-5093-4609-bb0c-1b236d4fd135","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGBA"]},"selected":null,"selection_policy":null},"id":"083fad3b-c5c4-4d8a-bf6a-9b58fcf173af","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"90797490-57d8-4a35-97f0-9c8be575c0d2","type":"ColumnDataSource"},"glyph":{"id":"7f9c1461-85f3-4d04-af47-5667cc190cb5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5547df63-b5d8-47bf-a96f-6fba074fd602","type":"Circle"},"selection_glyph":null,"view":{"id":"fe47fed8-167a-437f-830d-3b9ed14e9dda","type":"CDSView"}},"id":"82f8289a-6aeb-4078-aaaf-af82185d6fcb","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f5073639-b87a-4841-90be-1e14673458e7","type":"ColumnDataSource"}},"id":"ed7f0e9d-b089-4d2b-8fa5-075b7d0adf2d","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"969d7cfa-bf19-4ba0-bc17-72598d0a85db","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"61596be9-10f0-4436-bb91-d26290254c5a","type":"Circle"},{"attributes":{"source":{"id":"083fad3b-c5c4-4d8a-bf6a-9b58fcf173af","type":"ColumnDataSource"}},"id":"d3e1eb78-f050-4e5c-b0b2-9f5a3ba75316","type":"CDSView"},{"attributes":{"data_source":{"id":"083fad3b-c5c4-4d8a-bf6a-9b58fcf173af","type":"ColumnDataSource"},"glyph":{"id":"969d7cfa-bf19-4ba0-bc17-72598d0a85db","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"745d267f-5f98-4443-a304-5a1a0b10f2ca","type":"Circle"},"selection_glyph":null,"view":{"id":"d3e1eb78-f050-4e5c-b0b2-9f5a3ba75316","type":"CDSView"}},"id":"f74bc2c7-8a53-4974-b498-8c34d1a28f87","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c043ba1-0db8-4c85-8b62-746d6c525b7e","type":"Circle"},{"attributes":{"data_source":{"id":"cab34e92-5093-4609-bb0c-1b236d4fd135","type":"ColumnDataSource"},"glyph":{"id":"eb16ccca-176b-4124-86ac-2edf14a95162","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31344d37-6b58-42c0-91c2-bdcb8db74d22","type":"Circle"},"selection_glyph":null,"view":{"id":"95eeab5a-55e4-4aef-8e5f-07c46a0b6120","type":"CDSView"}},"id":"81ccd00c-05ce-4024-b5ea-7033299ae75a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"745d267f-5f98-4443-a304-5a1a0b10f2ca","type":"Circle"},{"attributes":{"data_source":{"id":"27e69e2f-6db6-4ab5-a47b-6addb5bc17cb","type":"ColumnDataSource"},"glyph":{"id":"c90ca5e8-ebb9-4570-ac56-d4994b70d869","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"875c079f-eb8b-4482-bda5-60cd19565977","type":"Circle"},"selection_glyph":null,"view":{"id":"d1591f5d-fcdd-4a0e-8563-6981002758b9","type":"CDSView"}},"id":"0c8c2282-1ab1-413f-9c89-bdb626aa77c8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"cab34e92-5093-4609-bb0c-1b236d4fd135","type":"ColumnDataSource"}},"id":"95eeab5a-55e4-4aef-8e5f-07c46a0b6120","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d689ec4b-987b-4e4e-ad75-973bfb5fa0a5","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGB"]},"selected":null,"selection_policy":null},"id":"f1e0e341-5658-4d7c-b4cc-2123427d2ca3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGB"]},"selected":null,"selection_policy":null},"id":"aacb9199-d5e8-4227-9a8d-33d22d431c2b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"31344d37-6b58-42c0-91c2-bdcb8db74d22","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"61e8ad10-e844-47e8-b500-814c04c61b61","type":"Circle"},{"attributes":{"data_source":{"id":"aacb9199-d5e8-4227-9a8d-33d22d431c2b","type":"ColumnDataSource"},"glyph":{"id":"b60c748a-9a11-4b4c-8710-fc710878a11c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61e8ad10-e844-47e8-b500-814c04c61b61","type":"Circle"},"selection_glyph":null,"view":{"id":"719d18ba-265a-4bf8-bdeb-4d2c234f790a","type":"CDSView"}},"id":"2d62c867-6419-49b4-b95a-471cd66797e5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGBA"]},"selected":null,"selection_policy":null},"id":"a853b77c-cbe0-4347-9bf8-c8dcca1ebea8","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"de84cb89-47f4-4118-a819-56affdb2b7fa","type":"Circle"},{"attributes":{"source":{"id":"a853b77c-cbe0-4347-9bf8-c8dcca1ebea8","type":"ColumnDataSource"}},"id":"60d32660-3903-4744-a408-bf93fd8e65cd","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e97d3112-e8ce-44b4-bc54-4bbbb59e198d","type":"Circle"},{"attributes":{"data_source":{"id":"f1e0e341-5658-4d7c-b4cc-2123427d2ca3","type":"ColumnDataSource"},"glyph":{"id":"e85ca012-61c9-4602-8027-8e37e18d1f82","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e97d3112-e8ce-44b4-bc54-4bbbb59e198d","type":"Circle"},"selection_glyph":null,"view":{"id":"d12314e9-793e-4a43-b8be-e3f05655d39b","type":"CDSView"}},"id":"29e27d18-1ecb-440c-9dcc-7ca006ee547a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6d8b2f1-d120-405f-b35e-638053f762d4","type":"Circle"},{"attributes":{"source":{"id":"aacb9199-d5e8-4227-9a8d-33d22d431c2b","type":"ColumnDataSource"}},"id":"719d18ba-265a-4bf8-bdeb-4d2c234f790a","type":"CDSView"},{"attributes":{"source":{"id":"27e69e2f-6db6-4ab5-a47b-6addb5bc17cb","type":"ColumnDataSource"}},"id":"d1591f5d-fcdd-4a0e-8563-6981002758b9","type":"CDSView"},{"attributes":{"source":{"id":"a4f4be53-f2f0-4e5f-ab0e-1b76ff652af3","type":"ColumnDataSource"}},"id":"54aa99af-6c1a-4db9-80c5-ba103dbdedf9","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGBA"]},"selected":null,"selection_policy":null},"id":"665539db-103d-4486-b41a-f0d91f23590b","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f1e0e341-5658-4d7c-b4cc-2123427d2ca3","type":"ColumnDataSource"}},"id":"d12314e9-793e-4a43-b8be-e3f05655d39b","type":"CDSView"},{"attributes":{"data_source":{"id":"665539db-103d-4486-b41a-f0d91f23590b","type":"ColumnDataSource"},"glyph":{"id":"f19283c9-a902-4649-8bdd-62253d2c1b51","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d689ec4b-987b-4e4e-ad75-973bfb5fa0a5","type":"Circle"},"selection_glyph":null,"view":{"id":"20d66387-36ca-4812-ac0f-7d5144b57873","type":"CDSView"}},"id":"0142ef08-f3d6-4e17-bb74-ba3c3d92b1be","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGBA"]},"selected":null,"selection_policy":null},"id":"0da91ed9-dc8a-4787-a5ea-5f818736f7c7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc141b85-2977-498b-909e-dc3cfcb673cb","type":"Circle"},{"attributes":{"data_source":{"id":"0da91ed9-dc8a-4787-a5ea-5f818736f7c7","type":"ColumnDataSource"},"glyph":{"id":"de84cb89-47f4-4118-a819-56affdb2b7fa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61596be9-10f0-4436-bb91-d26290254c5a","type":"Circle"},"selection_glyph":null,"view":{"id":"9513f3da-eec2-4252-b370-1ce68c7d149e","type":"CDSView"}},"id":"306c0fe2-0957-4437-90a7-fd45ce4090ea","type":"GlyphRenderer"},{"attributes":{"source":{"id":"665539db-103d-4486-b41a-f0d91f23590b","type":"ColumnDataSource"}},"id":"20d66387-36ca-4812-ac0f-7d5144b57873","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"540fa1be-2fd3-45ce-bcaa-34eb35f18de4","type":"Circle"},{"attributes":{"source":{"id":"0da91ed9-dc8a-4787-a5ea-5f818736f7c7","type":"ColumnDataSource"}},"id":"9513f3da-eec2-4252-b370-1ce68c7d149e","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGB"]},"selected":null,"selection_policy":null},"id":"a4f4be53-f2f0-4e5f-ab0e-1b76ff652af3","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a87cee3d-866e-463d-b38c-ba699aba104d","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba2373e9-40db-4ad0-9f5b-0fa404f1ef8e","type":"Circle"},{"attributes":{"data_source":{"id":"a4f4be53-f2f0-4e5f-ab0e-1b76ff652af3","type":"ColumnDataSource"},"glyph":{"id":"540fa1be-2fd3-45ce-bcaa-34eb35f18de4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19a60957-b7c0-4219-ae6d-c6114db2e75e","type":"Circle"},"selection_glyph":null,"view":{"id":"54aa99af-6c1a-4db9-80c5-ba103dbdedf9","type":"CDSView"}},"id":"73320eb0-ae1a-4315-9a22-35c225458999","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"19a60957-b7c0-4219-ae6d-c6114db2e75e","type":"Circle"},{"attributes":{"source":{"id":"e6d85180-7868-4ab9-8926-b8c9162d1a39","type":"ColumnDataSource"}},"id":"287fa7fd-35d7-42d9-93ec-e573ca4afdb5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5547df63-b5d8-47bf-a96f-6fba074fd602","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGBA"]},"selected":null,"selection_policy":null},"id":"d033cf9d-ea09-46dd-8c65-ecd871128001","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9069cac7-25ed-46b7-99ed-3a4b460bb023","type":"Circle"},{"attributes":{"source":{"id":"a9504c93-e847-4633-af81-51c55ba4a010","type":"ColumnDataSource"}},"id":"2d885295-91bd-44d5-aa8c-6f0eed8f26c5","type":"CDSView"},{"attributes":{"data_source":{"id":"d033cf9d-ea09-46dd-8c65-ecd871128001","type":"ColumnDataSource"},"glyph":{"id":"ba2373e9-40db-4ad0-9f5b-0fa404f1ef8e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc141b85-2977-498b-909e-dc3cfcb673cb","type":"Circle"},"selection_glyph":null,"view":{"id":"79e0fd32-2058-4108-b4be-0113d3d925fc","type":"CDSView"}},"id":"dcbfacdc-7064-4f34-8328-77b8a240e6ce","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"907182bb-d128-4714-a23e-9361917a2e67","type":"Circle"},{"attributes":{"source":{"id":"d033cf9d-ea09-46dd-8c65-ecd871128001","type":"ColumnDataSource"}},"id":"79e0fd32-2058-4108-b4be-0113d3d925fc","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"875c079f-eb8b-4482-bda5-60cd19565977","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["None"]},"selected":null,"selection_policy":null},"id":"e6d85180-7868-4ab9-8926-b8c9162d1a39","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e6d85180-7868-4ab9-8926-b8c9162d1a39","type":"ColumnDataSource"},"glyph":{"id":"2c043ba1-0db8-4c85-8b62-746d6c525b7e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a3f7a39f-a4bb-423e-902b-78b43d1b0c04","type":"Circle"},"selection_glyph":null,"view":{"id":"287fa7fd-35d7-42d9-93ec-e573ca4afdb5","type":"CDSView"}},"id":"078f76a0-6a59-45b1-94f1-28fd93fed6a3","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a853b77c-cbe0-4347-9bf8-c8dcca1ebea8","type":"ColumnDataSource"},"glyph":{"id":"644609bf-3cc4-4f87-9f7f-5ad1c2a1c854","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a87cee3d-866e-463d-b38c-ba699aba104d","type":"Circle"},"selection_glyph":null,"view":{"id":"60d32660-3903-4744-a408-bf93fd8e65cd","type":"CDSView"}},"id":"14a58740-85aa-403c-9f0a-a4feb2d8e5ff","type":"GlyphRenderer"},{"attributes":{"source":{"id":"90797490-57d8-4a35-97f0-9c8be575c0d2","type":"ColumnDataSource"}},"id":"fe47fed8-167a-437f-830d-3b9ed14e9dda","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4029579b-a531-436a-aa40-8d21038b4faa","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha"]},"selected":null,"selection_policy":null},"id":"93750191-b8c0-4ab2-b27e-d8d534281b02","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3f7a39f-a4bb-423e-902b-78b43d1b0c04","type":"Circle"},{"attributes":{"data_source":{"id":"93750191-b8c0-4ab2-b27e-d8d534281b02","type":"ColumnDataSource"},"glyph":{"id":"4029579b-a531-436a-aa40-8d21038b4faa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"522ceb68-f33f-4356-9fa0-4b17d37879bd","type":"Circle"},"selection_glyph":null,"view":{"id":"66b1cfc3-1002-4f7e-8497-cfab07539e8d","type":"CDSView"}},"id":"658cc5e4-718a-4874-bc13-e260a8f77556","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26f7c9df-97cb-4b8c-ba12-f1dcecf80d04","type":"ColumnDataSource"},"glyph":{"id":"9069cac7-25ed-46b7-99ed-3a4b460bb023","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d6d8b2f1-d120-405f-b35e-638053f762d4","type":"Circle"},"selection_glyph":null,"view":{"id":"31c6f69e-a815-4e19-b277-5b3077d560bc","type":"CDSView"}},"id":"5e6ba389-f37d-4c1f-ae58-b620a8d1a6f2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGB"]},"selected":null,"selection_policy":null},"id":"0098abef-4d8a-4f63-8afc-cba876f2e117","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf6e961f-b8aa-4ec5-b9ae-b04a6430d421","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"522ceb68-f33f-4356-9fa0-4b17d37879bd","type":"Circle"},{"attributes":{"source":{"id":"93750191-b8c0-4ab2-b27e-d8d534281b02","type":"ColumnDataSource"}},"id":"66b1cfc3-1002-4f7e-8497-cfab07539e8d","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGB"]},"selected":null,"selection_policy":null},"id":"26f7c9df-97cb-4b8c-ba12-f1dcecf80d04","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fc78399-c031-47fd-8e60-27ef3dce6e91","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"845563f4-458e-4f48-93ae-64b41f99fa27","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ebc8a13d-7863-4c98-865d-619ed23c6efc","type":"Circle"},{"attributes":{"data_source":{"id":"0098abef-4d8a-4f63-8afc-cba876f2e117","type":"ColumnDataSource"},"glyph":{"id":"907182bb-d128-4714-a23e-9361917a2e67","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"845563f4-458e-4f48-93ae-64b41f99fa27","type":"Circle"},"selection_glyph":null,"view":{"id":"fa30c53c-30a0-4b3b-963c-bce4bd197611","type":"CDSView"}},"id":"15b5897c-197e-4fbf-8f48-508eb9a67f8e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0098abef-4d8a-4f63-8afc-cba876f2e117","type":"ColumnDataSource"}},"id":"fa30c53c-30a0-4b3b-963c-bce4bd197611","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGBA"]},"selected":null,"selection_policy":null},"id":"a9504c93-e847-4633-af81-51c55ba4a010","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8bd7be2b-8e06-4569-87c1-a65a79f2f83e","type":"Circle"},{"attributes":{"data_source":{"id":"eaee8b40-317e-4319-acf4-6f7a4a0e66ca","type":"ColumnDataSource"},"glyph":{"id":"7fc78399-c031-47fd-8e60-27ef3dce6e91","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11293b26-5672-425d-a9f7-19e6fffdfd73","type":"Circle"},"selection_glyph":null,"view":{"id":"6ed277f5-4ce9-4710-aae8-b16d2140d8fb","type":"CDSView"}},"id":"baa0824e-9554-4ccf-881a-a69278c4c068","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a9504c93-e847-4633-af81-51c55ba4a010","type":"ColumnDataSource"},"glyph":{"id":"cf6e961f-b8aa-4ec5-b9ae-b04a6430d421","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8bd7be2b-8e06-4569-87c1-a65a79f2f83e","type":"Circle"},"selection_glyph":null,"view":{"id":"2d885295-91bd-44d5-aa8c-6f0eed8f26c5","type":"CDSView"}},"id":"dce69d4b-add1-43bd-8d70-f39f413ef9e6","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"80497b7a-ecd4-4d9c-bc45-bc2a09e01c7f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGB"]},"selected":null,"selection_policy":null},"id":"324e0039-67b9-46c2-9896-a854263dbcbb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"324e0039-67b9-46c2-9896-a854263dbcbb","type":"ColumnDataSource"},"glyph":{"id":"80497b7a-ecd4-4d9c-bc45-bc2a09e01c7f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ebc8a13d-7863-4c98-865d-619ed23c6efc","type":"Circle"},"selection_glyph":null,"view":{"id":"c0f5af58-f9cf-439b-ba4f-64bbbce59676","type":"CDSView"}},"id":"b35619f0-fc17-40d7-a7d1-283f34213bdc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1fcbf82c-7cf1-444f-8740-f096939ffa45","type":"Circle"},{"attributes":{"source":{"id":"324e0039-67b9-46c2-9896-a854263dbcbb","type":"ColumnDataSource"}},"id":"c0f5af58-f9cf-439b-ba4f-64bbbce59676","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6c5d67f-ed97-45da-ae15-d6640d06ea3d","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGBA"]},"selected":null,"selection_policy":null},"id":"eaee8b40-317e-4319-acf4-6f7a4a0e66ca","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"166f80fc-1cc2-40ff-a369-a604d571925d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"48a7aa9d-2692-4fdf-aa78-3241c9999e62","type":"Circle"},{"attributes":{"source":{"id":"eaee8b40-317e-4319-acf4-6f7a4a0e66ca","type":"ColumnDataSource"}},"id":"6ed277f5-4ce9-4710-aae8-b16d2140d8fb","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"11293b26-5672-425d-a9f7-19e6fffdfd73","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["None"]},"selected":null,"selection_policy":null},"id":"a89c0518-45b7-47b0-a9c6-7c01a5837dd6","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a89c0518-45b7-47b0-a9c6-7c01a5837dd6","type":"ColumnDataSource"},"glyph":{"id":"a6c5d67f-ed97-45da-ae15-d6640d06ea3d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3a876c5-1b17-425b-8b9b-45d51fa41ee5","type":"Circle"},"selection_glyph":null,"view":{"id":"35eaca55-dbc5-48ad-a380-24c8c60d15b0","type":"CDSView"}},"id":"48fa5f33-4dc4-47ea-ae33-a81341b9a330","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a89c0518-45b7-47b0-a9c6-7c01a5837dd6","type":"ColumnDataSource"}},"id":"35eaca55-dbc5-48ad-a380-24c8c60d15b0","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha"]},"selected":null,"selection_policy":null},"id":"b012a8fc-3497-4fd0-9dd7-8e821ba41e63","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3a876c5-1b17-425b-8b9b-45d51fa41ee5","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d275b225-774a-45f0-b659-b4db4d7a5672","type":"Circle"},{"attributes":{"data_source":{"id":"b012a8fc-3497-4fd0-9dd7-8e821ba41e63","type":"ColumnDataSource"},"glyph":{"id":"166f80fc-1cc2-40ff-a369-a604d571925d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48a7aa9d-2692-4fdf-aa78-3241c9999e62","type":"Circle"},"selection_glyph":null,"view":{"id":"3923d6e7-e7cd-4588-b549-f5d2bd88c523","type":"CDSView"}},"id":"168de87c-9b93-46d8-85ea-73458ffcd43c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b012a8fc-3497-4fd0-9dd7-8e821ba41e63","type":"ColumnDataSource"}},"id":"3923d6e7-e7cd-4588-b549-f5d2bd88c523","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGB"]},"selected":null,"selection_policy":null},"id":"e3a66907-98b7-4a4c-9d91-f162794ffe0b","type":"ColumnDataSource"}],"root_ids":["bb2d8681-b261-418d-a8eb-86e6406ad0f0"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"7d33e45b-9cdc-4b7c-bfe2-36e7584d8847","elementid":"095e747f-ec5d-4d77-b2dc-a6e3344bb9e2","modelid":"bb2d8681-b261-418d-a8eb-86e6406ad0f0"}];
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