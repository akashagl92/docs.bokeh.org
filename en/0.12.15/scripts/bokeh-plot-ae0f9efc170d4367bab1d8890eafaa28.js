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
      };var element = document.getElementById("72b706d3-2aff-4be7-b80e-a02607465398");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '72b706d3-2aff-4be7-b80e-a02607465398' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"09776b18-69cd-42a2-8d29-6ff9c8905a9c":{"roots":{"references":[{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"7c1d0eef-e55f-4209-bd5a-3f1770ae7174","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":null,"selection_policy":null},"id":"220046ca-3a25-4d90-be06-8fa93633bc16","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"423c9104-33e3-4da4-8d02-ace61c950ef3","type":"DataRange1d"},{"attributes":{"source":{"id":"220046ca-3a25-4d90-be06-8fa93633bc16","type":"ColumnDataSource"}},"id":"649c1d49-d7dc-4482-aed7-65d3c525ca30","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"481d4af2-6d0c-4ebe-bd6d-775263ae974b","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"38bd962e-e445-43b2-8d12-5b97d09462b8","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"2b05352e-4741-4646-a0c5-8b5674db4a68","type":"Circle"},{"attributes":{"data_source":{"id":"e7cf0383-72b9-4b6e-99e0-ce02ec12d964","type":"ColumnDataSource"},"glyph":{"id":"77e70adf-4e2f-4267-9cf6-c4bc5f389cb4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52cff0cf-ad75-431e-8af0-967ffa9bcabf","type":"Circle"},"selection_glyph":null,"view":{"id":"506087d0-43bc-4eb7-93c0-3c8625f59e1d","type":"CDSView"}},"id":"5be18934-6bbc-4a0f-8f23-a3776942a3df","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"40bd06b6-3137-49ed-864b-aa15374f5482","type":"Circle"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"6a24fa57-59c1-41e7-865e-63e48a1b4c68","type":"TeeHead"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":null,"selection_policy":null},"id":"e7cf0383-72b9-4b6e-99e0-ce02ec12d964","type":"ColumnDataSource"},{"attributes":{},"id":"620d9683-426e-4dcd-8bd6-f64d090696da","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"102a77d2-8c39-4a86-9d05-8bdcfcdb8ded","type":"ColumnDataSource"},"glyph":{"id":"2b05352e-4741-4646-a0c5-8b5674db4a68","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b07a2ee6-14e2-4792-8504-92d52712fe6c","type":"Circle"},"selection_glyph":null,"view":{"id":"1c76d425-a28b-438c-8ac5-e6727470163a","type":"CDSView"}},"id":"c662465c-7b2b-449e-a7d0-0720965c6c17","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"7c3b5142-3c38-488a-926f-7604268550a7","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":null,"selection_policy":null},"id":"102a77d2-8c39-4a86-9d05-8bdcfcdb8ded","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"77e70adf-4e2f-4267-9cf6-c4bc5f389cb4","type":"Circle"},{"attributes":{"source":{"id":"2a4f8dbc-03d4-4c48-ad7c-d6758f79a155","type":"ColumnDataSource"}},"id":"c1948a73-61a6-4359-888e-f3f3cabb7598","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":null,"selection_policy":null},"id":"0d23f0a5-9724-4763-ab31-70af0588ae8a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e7cf0383-72b9-4b6e-99e0-ce02ec12d964","type":"ColumnDataSource"}},"id":"506087d0-43bc-4eb7-93c0-3c8625f59e1d","type":"CDSView"},{"attributes":{"data_source":{"id":"2df5ef30-e53b-42ce-bb43-82fc55da9ca8","type":"ColumnDataSource"},"glyph":{"id":"cb93869b-c1b1-4f3b-b2f2-cb2d9fd33174","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"336aba03-0ba2-4b6f-a721-b859a6d69bf0","type":"Circle"},"selection_glyph":null,"view":{"id":"3f7028f2-4951-452c-b82c-a5ac1ef95e2d","type":"CDSView"}},"id":"3f98618e-fee9-48b0-9fed-f478d6c1e494","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"849bd42e-9486-4f8e-97ca-a61860d8e3c3","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bcdd6016-5bd2-48bc-aba9-cea9541202fd","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"52cff0cf-ad75-431e-8af0-967ffa9bcabf","type":"Circle"},{"attributes":{},"id":"c61b6f75-2340-443f-95bb-ed4b473020db","type":"PanTool"},{"attributes":{"data_source":{"id":"0d23f0a5-9724-4763-ab31-70af0588ae8a","type":"ColumnDataSource"},"glyph":{"id":"c1aa2b8e-97c9-4e49-9556-a484275ba109","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18dca042-0198-47a0-8b83-8e04e792364f","type":"Circle"},"selection_glyph":null,"view":{"id":"79b125b1-be39-4867-81bb-a8525c7efc4f","type":"CDSView"}},"id":"77b1303d-e432-4064-b1b4-cbfeb4d1bfb3","type":"GlyphRenderer"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"6945d8b3-d69b-47e2-8620-b436ce5af721","type":"TeeHead"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"c1aa2b8e-97c9-4e49-9556-a484275ba109","type":"Circle"},{"attributes":{"data_source":{"id":"d828b6a9-9a3a-409c-8f0f-811cc30c57f0","type":"ColumnDataSource"},"glyph":{"id":"0a2722f2-9dc1-4e26-9189-b9447ac3807b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7784689e-f23f-4da9-a661-ff13ecab3836","type":"Circle"},"selection_glyph":null,"view":{"id":"c97e6851-f02e-4261-aef7-34399f6cb2c9","type":"CDSView"}},"id":"8098897d-3a94-448b-9164-17eb4b433f00","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"18dca042-0198-47a0-8b83-8e04e792364f","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":null,"selection_policy":null},"id":"2df5ef30-e53b-42ce-bb43-82fc55da9ca8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"220046ca-3a25-4d90-be06-8fa93633bc16","type":"ColumnDataSource"},"glyph":{"id":"40bd06b6-3137-49ed-864b-aa15374f5482","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7c3b5142-3c38-488a-926f-7604268550a7","type":"Circle"},"selection_glyph":null,"view":{"id":"649c1d49-d7dc-4482-aed7-65d3c525ca30","type":"CDSView"}},"id":"252779bf-9916-4d14-b9aa-488bb2d2e1ac","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0d23f0a5-9724-4763-ab31-70af0588ae8a","type":"ColumnDataSource"}},"id":"79b125b1-be39-4867-81bb-a8525c7efc4f","type":"CDSView"},{"attributes":{"source":{"id":"38bd962e-e445-43b2-8d12-5b97d09462b8","type":"ColumnDataSource"}},"id":"53a74ed8-e198-41ce-b120-29dce5a3dac2","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"d828b6a9-9a3a-409c-8f0f-811cc30c57f0","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"cb93869b-c1b1-4f3b-b2f2-cb2d9fd33174","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"336aba03-0ba2-4b6f-a721-b859a6d69bf0","type":"Circle"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"6a24fa57-59c1-41e7-865e-63e48a1b4c68","type":"TeeHead"},"plot":{"id":"36368380-968f-4e70-b775-a77d1078fb16","subtype":"Figure","type":"Plot"},"source":{"id":"f3b0795d-f1c5-4b4f-88c1-fd840bc3bfeb","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"6945d8b3-d69b-47e2-8620-b436ce5af721","type":"TeeHead"}},"id":"6c3a9f2a-9248-4a7c-8ed0-b6ec48b60289","type":"Whisker"},{"attributes":{"data_source":{"id":"1016eac0-7017-497c-b9f2-a4d141672c1f","type":"ColumnDataSource"},"glyph":{"id":"718e341e-d33d-466a-89af-37555702360e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"301b4196-402c-4695-80ff-3b1d4005a916","type":"Circle"},"selection_glyph":null,"view":{"id":"17db9b29-0a39-4833-9c27-9cfbdca14bc9","type":"CDSView"}},"id":"b41defa4-315c-4d8a-9039-ca04fd40aad4","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"7784689e-f23f-4da9-a661-ff13ecab3836","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":null,"selection_policy":null},"id":"1016eac0-7017-497c-b9f2-a4d141672c1f","type":"ColumnDataSource"},{"attributes":{},"id":"5062bc86-a2a9-4f63-b63d-48b3fe4d1ab0","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2df5ef30-e53b-42ce-bb43-82fc55da9ca8","type":"ColumnDataSource"}},"id":"3f7028f2-4951-452c-b82c-a5ac1ef95e2d","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"0a2722f2-9dc1-4e26-9189-b9447ac3807b","type":"Circle"},{"attributes":{},"id":"ce811104-ce46-49d5-bcbb-ee8bbff93b24","type":"LinearScale"},{"attributes":{"data_source":{"id":"50d4251e-1257-492e-96f9-6b4b91a919c6","type":"ColumnDataSource"},"glyph":{"id":"e5f8f52f-82a7-44fd-b24b-a33cfbc6c28a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0be06b50-543d-456f-a616-387d11623d45","type":"Circle"},"selection_glyph":null,"view":{"id":"07074fed-0077-472c-8f6f-abbfbfa26e69","type":"CDSView"}},"id":"191c41bf-4710-40d8-bb31-ca13c220d5a9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"b07a2ee6-14e2-4792-8504-92d52712fe6c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"301b4196-402c-4695-80ff-3b1d4005a916","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":null,"selection_policy":null},"id":"50d4251e-1257-492e-96f9-6b4b91a919c6","type":"ColumnDataSource"},{"attributes":{"source":{"id":"d828b6a9-9a3a-409c-8f0f-811cc30c57f0","type":"ColumnDataSource"}},"id":"c97e6851-f02e-4261-aef7-34399f6cb2c9","type":"CDSView"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"718e341e-d33d-466a-89af-37555702360e","type":"Circle"},{"attributes":{"source":{"id":"2e458a64-89f0-4aba-a5c4-f21a5ef2b69b","type":"ColumnDataSource"}},"id":"254dcc7d-b858-4798-9b6b-2d6cc509dacc","type":"CDSView"},{"attributes":{"data_source":{"id":"6a2a74eb-d937-4935-a39f-6af97e6a709b","type":"ColumnDataSource"},"glyph":{"id":"54ae6f88-4208-48ef-8c37-23286fd47f39","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74346742-d358-4ea9-ae9f-5692f7d3fe01","type":"Circle"},"selection_glyph":null,"view":{"id":"c4958c68-c1c8-41b9-86d3-24bc92435766","type":"CDSView"}},"id":"d4311ba0-3404-4d02-aacd-9698a75ce2e4","type":"GlyphRenderer"},{"attributes":{},"id":"9a6343ef-a789-430c-8411-40eb633b5d63","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"36368380-968f-4e70-b775-a77d1078fb16","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fdc01f5-d7cf-4632-b1c0-999a3f63a068","type":"BasicTicker"}},"id":"5817a2de-aa33-4b11-aa44-2dd66af696f5","type":"Grid"},{"attributes":{},"id":"e140d1e3-1c28-4222-9525-8383a0e184b0","type":"ResetTool"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"e5f8f52f-82a7-44fd-b24b-a33cfbc6c28a","type":"Circle"},{"attributes":{"plot":{"id":"36368380-968f-4e70-b775-a77d1078fb16","subtype":"Figure","type":"Plot"},"ticker":{"id":"068f7b46-6e69-4460-92cf-982e0d45deda","type":"BasicTicker"}},"id":"4160aeec-0d90-4ceb-8e7b-3e22e0331f80","type":"Grid"},{"attributes":{"source":{"id":"1016eac0-7017-497c-b9f2-a4d141672c1f","type":"ColumnDataSource"}},"id":"17db9b29-0a39-4833-9c27-9cfbdca14bc9","type":"CDSView"},{"attributes":{"source":{"id":"102a77d2-8c39-4a86-9d05-8bdcfcdb8ded","type":"ColumnDataSource"}},"id":"1c76d425-a28b-438c-8ac5-e6727470163a","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"0be06b50-543d-456f-a616-387d11623d45","type":"Circle"},{"attributes":{"data_source":{"id":"38bd962e-e445-43b2-8d12-5b97d09462b8","type":"ColumnDataSource"},"glyph":{"id":"7c1d0eef-e55f-4209-bd5a-3f1770ae7174","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"481d4af2-6d0c-4ebe-bd6d-775263ae974b","type":"Circle"},"selection_glyph":null,"view":{"id":"53a74ed8-e198-41ce-b120-29dce5a3dac2","type":"CDSView"}},"id":"002bc594-76a3-4198-be58-56e68caceff4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":null,"selection_policy":null},"id":"6a2a74eb-d937-4935-a39f-6af97e6a709b","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6a2a74eb-d937-4935-a39f-6af97e6a709b","type":"ColumnDataSource"}},"id":"c4958c68-c1c8-41b9-86d3-24bc92435766","type":"CDSView"},{"attributes":{"data_source":{"id":"e7d96ec1-e40a-4d0d-bf34-0799f9d12a0d","type":"ColumnDataSource"},"glyph":{"id":"96009623-91ac-4cab-b0ee-e6f60da6a3ea","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8a0a5b5a-3208-4f01-b1ad-63687714cc4c","type":"Circle"},"selection_glyph":null,"view":{"id":"6492f210-401f-4f18-8c5c-c553211d3512","type":"CDSView"}},"id":"1ddee255-ade5-45a8-9716-bb62e561eeec","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"733472df-88b2-474e-a2cb-c8e4bbb4db87","type":"Circle"},{"attributes":{"callback":null,"column_names":["base","lower","upper"],"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]},"selected":null,"selection_policy":null},"id":"f3b0795d-f1c5-4b4f-88c1-fd840bc3bfeb","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"8a73f655-a109-4e80-b05d-8488f1aa7b57","type":"Circle"},{"attributes":{},"id":"9fdc01f5-d7cf-4632-b1c0-999a3f63a068","type":"BasicTicker"},{"attributes":{"source":{"id":"50d4251e-1257-492e-96f9-6b4b91a919c6","type":"ColumnDataSource"}},"id":"07074fed-0077-472c-8f6f-abbfbfa26e69","type":"CDSView"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"548f93cd-8da5-446f-8dec-670f7e9e706e","type":"Title"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":null,"selection_policy":null},"id":"2a4f8dbc-03d4-4c48-ad7c-d6758f79a155","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"54ae6f88-4208-48ef-8c37-23286fd47f39","type":"Circle"},{"attributes":{},"id":"08bdaed7-61e2-4134-9464-8c8d140ef736","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"74346742-d358-4ea9-ae9f-5692f7d3fe01","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":null,"selection_policy":null},"id":"e7d96ec1-e40a-4d0d-bf34-0799f9d12a0d","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"bcdd6016-5bd2-48bc-aba9-cea9541202fd","type":"BoxAnnotation"}},"id":"ca001b4f-9471-4c3b-8428-4283092b4bd0","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"620d9683-426e-4dcd-8bd6-f64d090696da","type":"BasicTickFormatter"},"plot":{"id":"36368380-968f-4e70-b775-a77d1078fb16","subtype":"Figure","type":"Plot"},"ticker":{"id":"068f7b46-6e69-4460-92cf-982e0d45deda","type":"BasicTicker"}},"id":"712a24f9-90c5-4299-b445-0e1b82cc29dd","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"96009623-91ac-4cab-b0ee-e6f60da6a3ea","type":"Circle"},{"attributes":{"below":[{"id":"712a24f9-90c5-4299-b445-0e1b82cc29dd","type":"LinearAxis"}],"left":[{"id":"a2a4dce4-d6e0-4a10-9b0f-c551d1bed5a6","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"712a24f9-90c5-4299-b445-0e1b82cc29dd","type":"LinearAxis"},{"id":"4160aeec-0d90-4ceb-8e7b-3e22e0331f80","type":"Grid"},{"id":"a2a4dce4-d6e0-4a10-9b0f-c551d1bed5a6","type":"LinearAxis"},{"id":"5817a2de-aa33-4b11-aa44-2dd66af696f5","type":"Grid"},{"id":"bcdd6016-5bd2-48bc-aba9-cea9541202fd","type":"BoxAnnotation"},{"id":"6c3a9f2a-9248-4a7c-8ed0-b6ec48b60289","type":"Whisker"},{"id":"ba2b3026-a8da-4e30-a06e-19fb8fa6307f","type":"GlyphRenderer"},{"id":"252779bf-9916-4d14-b9aa-488bb2d2e1ac","type":"GlyphRenderer"},{"id":"002bc594-76a3-4198-be58-56e68caceff4","type":"GlyphRenderer"},{"id":"c662465c-7b2b-449e-a7d0-0720965c6c17","type":"GlyphRenderer"},{"id":"5be18934-6bbc-4a0f-8f23-a3776942a3df","type":"GlyphRenderer"},{"id":"77b1303d-e432-4064-b1b4-cbfeb4d1bfb3","type":"GlyphRenderer"},{"id":"3f98618e-fee9-48b0-9fed-f478d6c1e494","type":"GlyphRenderer"},{"id":"8098897d-3a94-448b-9164-17eb4b433f00","type":"GlyphRenderer"},{"id":"b41defa4-315c-4d8a-9039-ca04fd40aad4","type":"GlyphRenderer"},{"id":"191c41bf-4710-40d8-bb31-ca13c220d5a9","type":"GlyphRenderer"},{"id":"d4311ba0-3404-4d02-aacd-9698a75ce2e4","type":"GlyphRenderer"},{"id":"1ddee255-ade5-45a8-9716-bb62e561eeec","type":"GlyphRenderer"},{"id":"35d2c95c-1e7a-44e4-8efd-17788e0c4121","type":"GlyphRenderer"}],"title":{"id":"548f93cd-8da5-446f-8dec-670f7e9e706e","type":"Title"},"toolbar":{"id":"d97c69ef-524a-42f2-bd8a-01631fb25739","type":"Toolbar"},"x_range":{"id":"849bd42e-9486-4f8e-97ca-a61860d8e3c3","type":"DataRange1d"},"x_scale":{"id":"ce811104-ce46-49d5-bcbb-ee8bbff93b24","type":"LinearScale"},"y_range":{"id":"423c9104-33e3-4da4-8d02-ace61c950ef3","type":"DataRange1d"},"y_scale":{"id":"cf61a1ff-20fb-412c-8cfa-4d660cc3d5c0","type":"LinearScale"}},"id":"36368380-968f-4e70-b775-a77d1078fb16","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"1471b299-9e9a-4f41-8001-895dc6e96943","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"8a0a5b5a-3208-4f01-b1ad-63687714cc4c","type":"Circle"},{"attributes":{},"id":"cf61a1ff-20fb-412c-8cfa-4d660cc3d5c0","type":"LinearScale"},{"attributes":{},"id":"8a728246-5996-4b7e-b08e-aaa710ffd15f","type":"HelpTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"3c93043e-488b-446d-84b6-a9a9c9b48a1c","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c61b6f75-2340-443f-95bb-ed4b473020db","type":"PanTool"},{"id":"08bdaed7-61e2-4134-9464-8c8d140ef736","type":"WheelZoomTool"},{"id":"ca001b4f-9471-4c3b-8428-4283092b4bd0","type":"BoxZoomTool"},{"id":"9a6343ef-a789-430c-8411-40eb633b5d63","type":"SaveTool"},{"id":"e140d1e3-1c28-4222-9525-8383a0e184b0","type":"ResetTool"},{"id":"8a728246-5996-4b7e-b08e-aaa710ffd15f","type":"HelpTool"}]},"id":"d97c69ef-524a-42f2-bd8a-01631fb25739","type":"Toolbar"},{"attributes":{"formatter":{"id":"5062bc86-a2a9-4f63-b63d-48b3fe4d1ab0","type":"BasicTickFormatter"},"plot":{"id":"36368380-968f-4e70-b775-a77d1078fb16","subtype":"Figure","type":"Plot"},"ticker":{"id":"9fdc01f5-d7cf-4632-b1c0-999a3f63a068","type":"BasicTicker"}},"id":"a2a4dce4-d6e0-4a10-9b0f-c551d1bed5a6","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":null,"selection_policy":null},"id":"2e458a64-89f0-4aba-a5c4-f21a5ef2b69b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2a4f8dbc-03d4-4c48-ad7c-d6758f79a155","type":"ColumnDataSource"},"glyph":{"id":"1471b299-9e9a-4f41-8001-895dc6e96943","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"733472df-88b2-474e-a2cb-c8e4bbb4db87","type":"Circle"},"selection_glyph":null,"view":{"id":"c1948a73-61a6-4359-888e-f3f3cabb7598","type":"CDSView"}},"id":"ba2b3026-a8da-4e30-a06e-19fb8fa6307f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e7d96ec1-e40a-4d0d-bf34-0799f9d12a0d","type":"ColumnDataSource"}},"id":"6492f210-401f-4f18-8c5c-c553211d3512","type":"CDSView"},{"attributes":{},"id":"068f7b46-6e69-4460-92cf-982e0d45deda","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2e458a64-89f0-4aba-a5c4-f21a5ef2b69b","type":"ColumnDataSource"},"glyph":{"id":"3c93043e-488b-446d-84b6-a9a9c9b48a1c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8a73f655-a109-4e80-b05d-8488f1aa7b57","type":"Circle"},"selection_glyph":null,"view":{"id":"254dcc7d-b858-4798-9b6b-2d6cc509dacc","type":"CDSView"}},"id":"35d2c95c-1e7a-44e4-8efd-17788e0c4121","type":"GlyphRenderer"}],"root_ids":["36368380-968f-4e70-b775-a77d1078fb16"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"09776b18-69cd-42a2-8d29-6ff9c8905a9c","elementid":"72b706d3-2aff-4be7-b80e-a02607465398","modelid":"36368380-968f-4e70-b775-a77d1078fb16"}];
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