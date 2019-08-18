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
      };var element = document.getElementById("fd3367d3-5bb1-4d33-a1ee-90ae68a198a5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd3367d3-5bb1-4d33-a1ee-90ae68a198a5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4edf5795-30f5-4c37-87d5-e6cd2bad13f6":{"roots":{"references":[{"attributes":{"below":[{"id":"a00413ce-1d91-468e-bd73-b1b1797f3c1b","type":"LinearAxis"}],"left":[{"id":"8d303a4e-9bfd-4fbb-8206-754c6ed6ad6b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a00413ce-1d91-468e-bd73-b1b1797f3c1b","type":"LinearAxis"},{"id":"222c6f76-1756-42f8-aaca-dbd10bd1c96c","type":"Grid"},{"id":"8d303a4e-9bfd-4fbb-8206-754c6ed6ad6b","type":"LinearAxis"},{"id":"ecd3fa82-06a8-45bd-8941-4799905b5648","type":"Grid"},{"id":"fed90962-9680-41cf-b79a-2079b54d1726","type":"PolyAnnotation"},{"id":"bf0798a6-033f-4ced-ae3d-44524ff131fa","type":"GlyphRenderer"}],"title":{"id":"dcd03fb8-77b4-4ab5-8c29-ef123a9baba7","type":"Title"},"toolbar":{"id":"6cb2c829-2497-4c56-a105-3b89d75051bb","type":"Toolbar"},"x_range":{"id":"cb9411a5-09df-4440-bb51-606f346457da","type":"DataRange1d"},"x_scale":{"id":"fd03b8b8-11f9-4ee9-b254-42053a727244","type":"LinearScale"},"y_range":{"id":"9a81d644-cc8b-4135-b117-7217c99c33e8","type":"DataRange1d"},"y_scale":{"id":"c5a54be8-b91f-4691-badf-30b138eba92f","type":"LinearScale"}},"id":"5557db70-a141-4498-8f45-266acf4ee2d4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ce60e660-8908-4b4c-9b79-57e7603cb4d6","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"124e738a-01bc-4690-ab8b-a148fe650402","type":"Circle"},{"attributes":{"args":{"s2":{"id":"ae9bf9a4-6383-4f40-8399-2bb8a84d4d9c","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected.indices;\\n        var d1 = cb_obj.data;\\n        var d2 = s2.data;\\n        d2[&#x27;x&#x27;] = []\\n        d2[&#x27;y&#x27;] = []\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d2[&#x27;x&#x27;].push(d1[&#x27;x&#x27;][inds[i]])\\n            d2[&#x27;y&#x27;].push(d1[&#x27;y&#x27;][inds[i]])\\n        }\\n        s2.change.emit();\\n    "},"id":"6ddd7e29-d268-4d79-818c-c1ba82e44aa0","type":"CustomJS"},{"attributes":{},"id":"819c8d9d-e428-40a6-bda1-bbd8529e9d0b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"e572313b-000b-4c8f-a1ed-f5b3e15d02c7","type":"ColumnDataSource"},"glyph":{"id":"124e738a-01bc-4690-ab8b-a148fe650402","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"839086a6-ad34-4ec7-9487-7eb4435c70c1","type":"Circle"},"selection_glyph":null,"view":{"id":"744453f6-799e-4a37-8812-3eef9d7b1b5d","type":"CDSView"}},"id":"bf0798a6-033f-4ced-ae3d-44524ff131fa","type":"GlyphRenderer"},{"attributes":{},"id":"1d7694ef-5061-46db-be32-c7cd605168fa","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"93546255-4f80-4757-ad3a-9dbb312cd2c3","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"fed90962-9680-41cf-b79a-2079b54d1726","type":"PolyAnnotation"},{"attributes":{},"id":"82563a6c-6632-484f-904f-57b13d944ecd","type":"LinearScale"},{"attributes":{},"id":"2c537aa3-dca6-4259-a2b1-a5ec2163d6c8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"cf0e57dc-15db-4868-8d84-11c4d0517d1f","type":"Range1d"},{"attributes":{"callback":null},"id":"3e7fdaf9-88ce-42da-b6f7-83d03cb9d918","type":"Range1d"},{"attributes":{"source":{"id":"ae9bf9a4-6383-4f40-8399-2bb8a84d4d9c","type":"ColumnDataSource"}},"id":"83a595bd-4cf9-43a2-9f70-803b161e27dd","type":"CDSView"},{"attributes":{"below":[{"id":"05f969fc-9a9e-4e8d-94c0-8aa58303d8b4","type":"LinearAxis"}],"left":[{"id":"538006cc-d214-4d38-8e7f-d8b14522c981","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"05f969fc-9a9e-4e8d-94c0-8aa58303d8b4","type":"LinearAxis"},{"id":"1dd9af1b-6c38-45d5-ad85-4e9f373fb382","type":"Grid"},{"id":"538006cc-d214-4d38-8e7f-d8b14522c981","type":"LinearAxis"},{"id":"c38f4d07-7c0a-4b3d-bcae-8b231872a23b","type":"Grid"},{"id":"b772cdf4-f49a-4653-bb24-1213406d4d2a","type":"GlyphRenderer"}],"title":{"id":"67227a66-3156-419a-90a5-bbb75ffb9921","type":"Title"},"toolbar":{"id":"fb4b984a-624a-4e60-8b74-c35f0c036f66","type":"Toolbar"},"x_range":{"id":"3e7fdaf9-88ce-42da-b6f7-83d03cb9d918","type":"Range1d"},"x_scale":{"id":"82563a6c-6632-484f-904f-57b13d944ecd","type":"LinearScale"},"y_range":{"id":"cf0e57dc-15db-4868-8d84-11c4d0517d1f","type":"Range1d"},"y_scale":{"id":"a132bbbf-7f97-41b7-9568-feddd3026336","type":"LinearScale"}},"id":"006e9e31-8fe9-4013-aa98-0782d9a8deda","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0b886f39-5288-42df-8422-a6e7f588da99","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"006e9e31-8fe9-4013-aa98-0782d9a8deda","subtype":"Figure","type":"Plot"},"ticker":{"id":"4aecfd6b-49dd-4653-bad1-92c7478c6b43","type":"BasicTicker"}},"id":"c38f4d07-7c0a-4b3d-bcae-8b231872a23b","type":"Grid"},{"attributes":{},"id":"e382be75-c610-45c5-8c44-bd5bee118ebe","type":"BasicTickFormatter"},{"attributes":{},"id":"4aecfd6b-49dd-4653-bad1-92c7478c6b43","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f9db9862-8625-476b-89e0-85765f3ce696","type":"BasicTickFormatter"},"plot":{"id":"006e9e31-8fe9-4013-aa98-0782d9a8deda","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c537aa3-dca6-4259-a2b1-a5ec2163d6c8","type":"BasicTicker"}},"id":"05f969fc-9a9e-4e8d-94c0-8aa58303d8b4","type":"LinearAxis"},{"attributes":{"data_source":{"id":"ae9bf9a4-6383-4f40-8399-2bb8a84d4d9c","type":"ColumnDataSource"},"glyph":{"id":"93546255-4f80-4757-ad3a-9dbb312cd2c3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1068f1cf-e693-4958-883f-6e6b805ec653","type":"Circle"},"selection_glyph":null,"view":{"id":"83a595bd-4cf9-43a2-9f70-803b161e27dd","type":"CDSView"}},"id":"b772cdf4-f49a-4653-bb24-1213406d4d2a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1068f1cf-e693-4958-883f-6e6b805ec653","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"5557db70-a141-4498-8f45-266acf4ee2d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"819c8d9d-e428-40a6-bda1-bbd8529e9d0b","type":"BasicTicker"}},"id":"ecd3fa82-06a8-45bd-8941-4799905b5648","type":"Grid"},{"attributes":{"children":[{"id":"5557db70-a141-4498-8f45-266acf4ee2d4","subtype":"Figure","type":"Plot"},{"id":"006e9e31-8fe9-4013-aa98-0782d9a8deda","subtype":"Figure","type":"Plot"}]},"id":"2b2f3644-85f3-49d9-9c8e-5ed57d32237d","type":"Row"},{"attributes":{"formatter":{"id":"ce60e660-8908-4b4c-9b79-57e7603cb4d6","type":"BasicTickFormatter"},"plot":{"id":"5557db70-a141-4498-8f45-266acf4ee2d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"819c8d9d-e428-40a6-bda1-bbd8529e9d0b","type":"BasicTicker"}},"id":"8d303a4e-9bfd-4fbb-8206-754c6ed6ad6b","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"67227a66-3156-419a-90a5-bbb75ffb9921","type":"Title"},{"attributes":{"plot":{"id":"006e9e31-8fe9-4013-aa98-0782d9a8deda","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c537aa3-dca6-4259-a2b1-a5ec2163d6c8","type":"BasicTicker"}},"id":"1dd9af1b-6c38-45d5-ad85-4e9f373fb382","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fb4b984a-624a-4e60-8b74-c35f0c036f66","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]},"selected":null,"selection_policy":null},"id":"ae9bf9a4-6383-4f40-8399-2bb8a84d4d9c","type":"ColumnDataSource"},{"attributes":{},"id":"a132bbbf-7f97-41b7-9568-feddd3026336","type":"LinearScale"},{"attributes":{"source":{"id":"e572313b-000b-4c8f-a1ed-f5b3e15d02c7","type":"ColumnDataSource"}},"id":"744453f6-799e-4a37-8812-3eef9d7b1b5d","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"839086a6-ad34-4ec7-9487-7eb4435c70c1","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"fed90962-9680-41cf-b79a-2079b54d1726","type":"PolyAnnotation"}},"id":"f8f89ca4-574e-422f-abc5-75f2467a04dd","type":"LassoSelectTool"},{"attributes":{"plot":null,"text":"Select Here"},"id":"dcd03fb8-77b4-4ab5-8c29-ef123a9baba7","type":"Title"},{"attributes":{"callback":null},"id":"9a81d644-cc8b-4135-b117-7217c99c33e8","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f8f89ca4-574e-422f-abc5-75f2467a04dd","type":"LassoSelectTool"}]},"id":"6cb2c829-2497-4c56-a105-3b89d75051bb","type":"Toolbar"},{"attributes":{"callback":null},"id":"cb9411a5-09df-4440-bb51-606f346457da","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e382be75-c610-45c5-8c44-bd5bee118ebe","type":"BasicTickFormatter"},"plot":{"id":"5557db70-a141-4498-8f45-266acf4ee2d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"0b886f39-5288-42df-8422-a6e7f588da99","type":"BasicTicker"}},"id":"a00413ce-1d91-468e-bd73-b1b1797f3c1b","type":"LinearAxis"},{"attributes":{"plot":{"id":"5557db70-a141-4498-8f45-266acf4ee2d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"0b886f39-5288-42df-8422-a6e7f588da99","type":"BasicTicker"}},"id":"222c6f76-1756-42f8-aaca-dbd10bd1c96c","type":"Grid"},{"attributes":{},"id":"fd03b8b8-11f9-4ee9-b254-42053a727244","type":"LinearScale"},{"attributes":{"callback":{"id":"6ddd7e29-d268-4d79-818c-c1ba82e44aa0","type":"CustomJS"},"column_names":["x","y"],"data":{"x":[0.322408883471734,0.12447945991466025,0.9762647528376974,0.9499023048400501,0.9883813082276063,0.5617351358676637,0.940167326901587,0.525954869658655,0.30444201372686475,0.10715050243562318,0.6400257868959771,0.9935057857929817,0.48118594091483036,0.09644861636027702,0.044187355434727404,0.3264121296472081,0.5742885955476243,0.5681560657179843,0.3723531430014466,0.5601187242600366,0.9397039234162712,0.1932267998308641,0.5041452276280635,0.5421988855923641,0.480499350136008,0.1803633247658908,0.5317858706547567,0.8220293915063974,0.930999507709863,0.6165855637212234,0.34283971917228695,0.6657610441202709,0.9587228336493443,0.5103948115740766,0.5142165632222816,0.5353002871256848,0.578054319767321,0.1688518024572111,0.42835624392337945,0.2080719857786415,0.08229220449590557,0.7703305616032994,0.6639404812950715,0.9344545945683159,0.9762922779063012,0.14142918615418199,0.9980126638742711,0.8890063204860317,0.826538689010668,0.6603129820467107,0.7332073094350906,0.37617755083327553,0.026078255086865787,0.6426300974575843,0.5408382778257249,0.10839665533106979,0.9382454837127638,0.8739153521498755,0.8332134218069142,0.4336006255818746,0.9008642378670078,0.5613321728543225,0.34984176991287796,0.4051207535826714,0.712080270476822,0.9026316217633461,0.875382865834131,0.34035851221140934,0.9436414737918023,0.3172601138703536,0.5942769118186934,0.6516403114257083,0.2896679701536554,0.19120087335903546,0.4391833599679228,0.4225676552104708,0.4932262590515373,0.10579915942207208,0.11607812051861621,0.8578642320826484,0.8131416751848952,0.8090783177608313,0.4194647544057897,0.6634648598399977,0.6006069085981316,0.8291917929547407,0.8261927136445201,0.8183239839743277,0.048818826790638536,0.7660858021896194,0.6354163660205281,0.5546494516514605,0.16293760486325493,0.6616121872234302,0.31491895249155144,0.15383648126083072,0.35018312160915543,0.12865843494704,0.8358597296810762,0.9359356818751856,0.026793283027490844,0.6321804157216513,0.11310451371738006,0.33203748630875884,0.4977869505704603,0.7732163099253715,0.27557998586080756,0.9015010926597452,0.14232172547288235,0.2445905199296149,0.40827587191326564,0.04419695669455648,0.19333209608380741,0.2454763873595912,0.24239144397912515,0.41239655752730753,0.6306781221548317,0.9678555039655742,0.4737365422072075,0.10798525829242445,0.30594835026182954,0.7593274360971929,0.5785866989581058,0.19673755129333526,0.19518767389909875,0.24139795494547323,0.5882351894707105,0.2527703260043207,0.8894828684522099,0.40120111698892535,0.2090055874333283,0.7136733909421935,0.8768136446018729,0.14206381426624737,0.7195626428155539,0.18481264305899792,0.9365841632544004,0.7579673940909213,0.221016699664906,0.42201924936736956,0.6961248957204946,0.32984351967694636,0.5097731262822314,0.20453555043205518,0.9260102648946671,0.35837130126030126,0.40275486552489137,0.5031826130593773,0.04732845275440056,0.3977288174790937,0.7475099839476204,0.5560557116906492,0.8571050862505137,0.09610486550411224,0.6087527876902953,0.714242842135137,0.62555404066274,0.2473136711067685,0.25591548215312443,0.8188431313054814,0.7360730381369044,0.3042114398472683,0.7587043337849054,0.3326372306427938,0.755359121904479,0.4937570401528235,0.38097480009608076,0.7728365065444353,0.10178981192305336,0.7848624737389911,0.1992027790296964,0.6514585227737448,0.14408262022087304,0.09855604300233745,0.5705667385816303,0.7843552980172955,0.7046242870206388,0.6410373652275149,0.25105073234876973,0.7162657486338513,0.5400668073831999,0.19680201039844747,0.02353227708274952,0.905782075825912,0.39142137413123257,0.8779990217094487,0.18512340789870785,0.09894756081898937,0.5440215905213814,0.856169493463927,0.2375006068387142,0.035620834047755734,0.06549592183380415,0.8015803109320019,0.6975246223511073,0.8926119908034152,0.006769093299107132,0.2765472164671676,0.671398625597968,0.3520765484342607,0.44408787669721816,0.887452035983014,0.7916881774406249,0.7278692348966209,0.19422271793203993,0.31867404197236016,0.43578977151627796,0.726932146243098,0.2304347798258809,0.87825018737214,0.4748669377847555,0.969979332285582,0.1185021108887172,0.646054793091352,0.6741383679955409,0.9861054570393478,0.06815476044495694,0.718610908821232,0.9016985650816536,0.9135654176661575,0.9576069263812681,0.32346349844833655,0.45779987695629487,0.338167107410698,0.3315165864371785,0.8511612702585755,0.6145498812831889,0.7004775039807823,0.9459248947843725,0.2843780880261907,0.11144717060578913,0.5189588183101037,0.10490553610713194,0.20648842112576726,0.3897913462711098,0.628759265443044,0.0023914185097758667,0.9937029969967096,0.16328387913036158,0.3840805609110133,0.2189642240168269,0.07700586698707734,0.7456312741355297,0.7378844280184499,0.245682223140551,0.7552620980131648,0.7612058668725398,0.43784472054759105,0.49258263452139284,0.12282077535716263,0.5800274294715139,0.8018749194063418,0.30445371674449684,0.13023167708357475,0.9844751940183932,0.885346365026777,0.34743732977327246,0.7773825644860437,0.13679101087599044,0.20870272218340424,0.4968963009692453,0.2873790210543199,0.13871166390023437,0.5112574696625146,0.43848244042678475,0.15364378373027743,0.47436329796779486,0.788355480275095,0.08995184970167958,0.28830650590381535,0.8555956847602953,0.6323691287194081,0.7241946493036164,0.45623034313281474,0.9539059613983712,0.49519714385345714,0.5469421449010209,0.1796925579635652,0.09658630950630709,0.8153218653761091,0.8742480801174469,0.9763439218757641,0.981438681415568,0.010502256694796541,0.2860887777229114,0.2999623624060398,0.6029190289712364,0.7489339626346827,0.2699515568164218,0.5613750961012037,0.9270668062399315,0.4183973738074036,0.8211868506609995,0.09431901318781966,0.927853191538758,0.02718890501060711,0.6549625706824587,0.4381765785643572,0.7189891991559219,0.8436850997540943,0.30417035803824455,0.9307988569960243,0.6106716049670116,0.4224637778583862,0.08370745612782704,0.4718867201627872,0.765114635327876,0.8593176759860349,0.513171095713952,0.7696210386390758,0.7859619872379127,0.7882776885763976,0.06268108624158575,0.22465040768902744,0.24391142735833427,0.5663671975905583,0.23368773624708572,0.06592058494652553,0.8091545848729623,0.8862385862382963,0.6835863968042847,0.06326713762708935,0.5892404873975396,0.29443870358879964,0.21733467133566842,0.1927579817723708,0.5427386665997843,0.4615243340724947,0.5833414591441319,0.3017790767146661,0.22994600551108524,0.38102845304524957,0.2656922266401798,0.8215706987931594,0.6839757051433327,0.9089185633279109,0.3342830403113878,0.65334886625568,0.8304851695186395,0.5249852006038601,0.8695300662821135,0.06396112295564238,0.710427598143983,0.0771977398783128,0.37636685507739986,0.7340254034221623,0.9052990656895303,0.7722419184066414,0.7707604624806396,0.20911675199386148,0.8184315489163699,0.5614137148976533,0.7685368263865213,0.9410429269805503,0.23694349935808234,0.6797504422170599,0.47279638985651196,0.07403513084174562,0.95685365153675,0.20539761311741722,0.951781822251414,0.6491260731412251,0.39533824075062507,0.679101094142818,0.9336790765193079,0.5725996571577223,0.5680137605836683,0.9766279217412055,0.02114293690375224,0.1885445347478425,0.9299324693761993,0.7005177780172414,0.7990500891918249,0.9486445173388363,0.9252033972257744,0.24048810913115737,0.23313499507121527,0.4609034292176829,0.6202544678111039,0.9757490401775599,0.34688639569434443,0.41451788456285366,0.3653919184137254,0.29605522678373797,0.25124483649127394,0.014939887362629856,0.5815085442288278,0.5976398176854774,0.7387391810043884,0.006968267704544173,0.6716979798050631,0.7607456505464435,0.07614763163437588,0.7820071018907971,0.39775911181456014,0.7678092099722023,0.1017909518285901,0.2144310945876483,0.040362179085111194,0.19738688464373155,0.9928214334031092,0.7594298128168789,0.7396559494756643,0.67394182310138,0.13581525444483844,0.731502013937924,0.6969568614554535,0.36664995892388874,0.37046310757978096,0.8433733584159676,0.22360382384329613,0.8051521150001765,0.5562175904483921,0.6776433460569841,0.218400214971041,0.9854242742131587,0.1528549223840514,0.840525431650535,0.10345297789383068,0.3842084172839254,0.6062819710169235,0.006953833143881871,0.8010031829608428,0.9366367660566335,0.9079031867575109,0.9080918644937432,0.7251216141350795,0.1473278934742427,0.1616012139786015,0.23667262875433015,0.8568211842424183,0.9004550671809763,0.5253785797801837,0.2976921488640226,0.5829887159316215,0.04498493681535565,0.3069526930327635,0.08422076589352145,0.04281380688083003,0.8187330076790996,0.11537386515385117,0.9961142967568674,0.3132894070809693,0.19459473541489292,0.31985761397312296,0.19014512755430624,0.8622082677984071,0.3459720721391123,0.786291551089447,0.7377114637221149,0.7224932418115767,0.8253703094030088,0.02312935408064698,0.49491814597650907,0.4774914605337919,0.5523854836429275,0.49096641482335723,0.724193579490465,0.026997471540656015,0.11097792722303379,0.16088598234332474,0.4250261477037274,0.8433682158286061,0.42166476943683384,0.5558514135306013,0.6620365596529678,0.6497707297044316,0.2541046487277613,0.05123185067584801,0.5088023557394243,0.09753100904540557,0.8067364745522237,0.3011739430466618,0.29707205179224816,0.9232675602820996,0.5603953953978762,0.05366225022014126,0.05703028670012111,0.46958138898702684,0.678693025565107,0.3133562106551444,0.3670085740744903,0.20187393863716463,0.7676478078311061,0.8186207513765164,0.8130806386574763,0.7801019845874508,0.9840185872916221,0.7406531829257831,0.29288837440131466,0.1922437481402679,0.8111239193944532,0.14159509635701273,0.32491770651280916,0.929652725279346,0.22290018287846858,0.05292139180115052,0.05810959745182276,0.8115913238258785,0.7829218767302242],"y":[0.6825465789807917,0.07813617504517067,0.9209244763862117,0.7343460058725574,0.7484389065377182,0.947410150333964,0.3188256090208883,0.5561318080237135,0.06563756358667105,0.7502009842080394,0.20137246292083832,0.8179999536843123,0.5431735281380101,0.6566371337748799,0.7795558706147431,0.43808506356258614,0.6530773663826664,0.10004603736457673,0.8216496201566919,0.5364478249918975,0.8741310884133626,0.9371869186205084,0.08437394040117296,0.025039584093044853,0.2781658609133183,0.02377595373930208,0.6931950561209862,0.4290528985484152,0.6050302316836971,0.11547832926391355,0.3787002070250779,0.49816388415725055,0.3018880286482538,0.015783557274094417,0.022836502367026834,0.9835888078199936,0.5517696836910355,0.18226375904012793,0.3799837242827959,0.9001244017502484,0.5966670623278111,0.6469990015667196,0.7640091579275892,0.16807008489375974,0.311669143369655,0.643464819741918,0.33972593705498033,0.07170658328852697,0.9085459136077113,0.38041149062223045,0.2921279820716527,0.3847688441891074,0.3034529420656107,0.16071706988742696,0.5241018046094825,0.7145534987358624,0.9472396618080184,0.08622502352731787,0.47512762692562394,0.2460104997864747,0.3800403558103127,0.9969458792509439,0.6358194329294775,0.5702248556783651,0.04150423531654923,0.6310886848059509,0.883664996836244,0.7277112665460109,0.5798086395286078,0.22826532500532237,0.5143786560451488,0.1687646055889429,0.6166191642036728,0.7843436028063985,0.17149009684919614,0.47627489602574624,0.8781425599331555,0.2194510310217498,0.8495765482940425,0.6634202870792211,0.20565788043427624,0.7396111892384207,0.5492849223889156,0.7770870869638555,0.8512878258706562,0.9311509924376288,0.17655745864958594,0.2855934280424999,0.752987236787408,0.982298349658353,0.7249227718977388,0.9804882584497232,0.005022284978253744,0.4748358992677839,0.06918847213697943,0.36575372515412796,0.5069342155890788,0.8915226054542007,0.8750587875224143,0.7793715689311986,0.036540586312600154,0.4545743794917787,0.7463408859046998,0.9773757927341489,0.7565521793131176,0.11639341185962782,0.8128734294091043,0.8740641581273205,0.971446437299007,0.127170771765601,0.6104902674217937,0.001103709853093604,0.8475176723548908,0.14965186518905782,0.2126636170401911,0.8291406933941757,0.19191166770728152,0.4794385911619117,0.9238491904422254,0.11559021607000719,0.7484826807603999,0.9720560545521091,0.31630230457334707,0.3905673896418653,0.18856205055206265,0.6236504594373223,0.2812922371098082,0.8248692268758975,0.17712605094765865,0.6457741856126619,0.8147903372721574,0.985767601094924,0.30326500627026265,0.4170458985870886,0.745779472339676,0.42733971902046874,0.36421690090736325,0.27837280499793937,0.25656820098513744,0.1836547976565568,0.34714130713342495,0.46103654473541555,0.07113398767936197,0.06159320298325566,0.46569443040185776,0.3932502561843201,0.23508878447310644,0.6394967931576963,0.17255726815774053,0.30780401740716345,0.6415677229577769,0.5767128838525165,0.3538534743570543,0.2824692159043364,0.8494479559350914,0.22126480857898867,0.3484734490119693,0.44591844701320826,0.7835807744426048,0.3167879871785433,0.9087992361985903,0.9409845327106928,0.6727152401138066,0.7774088037599317,0.03400004852883021,0.3397233591810289,0.21900626807972556,0.003955055840752952,0.3132226526014854,0.21797700171055612,0.4630514499354008,0.25608341257345923,0.9723661851632597,0.09428903293783097,0.04841954509388502,0.03378027991063626,0.17495519965159556,0.9168548791676797,0.3538273919791084,0.8696762913832587,0.25732573022804706,0.4207639033965589,0.4988712141251026,0.8268106638189318,0.14380524647566473,0.6727666237912622,0.1440499326592507,0.5472646290203836,0.22446647553936672,0.012154157992852022,0.7008308586709519,0.5767177967822591,0.13109854897741025,0.20695544045028924,0.6450121852415193,0.13527876796070404,0.5234067642828598,0.9260024404695172,0.9517338959511364,0.8005038911949782,0.12159514335101507,0.08414358311801184,0.04132239805667681,0.6067305582352949,0.17138126430293898,0.2089536369307412,0.4061781399327531,0.212722944455214,0.6003510867354831,0.4749507377018817,0.04390379616198514,0.3029230752711092,0.7322319936771342,0.629138240062988,0.5175251059335279,0.08525151408311227,0.5091605538277834,0.15774287113586138,0.2525869006677358,0.6947671389384766,0.8023614800072404,0.6576924372435551,0.5299652033385067,0.6982166790108463,0.030367277359471423,0.3153078508127406,0.9992612987898625,0.24964644852191686,0.8064991278774516,0.8920820374762848,0.6259072377321996,0.6665289060213658,0.06111539759013329,0.6889928927232699,0.41141605283543525,0.1999933211257866,0.7232526460977683,0.5261808491134344,0.9682025409587397,0.5941882989005111,0.8866851744810197,0.10197339625772883,0.8765185774386016,0.5687672201153872,0.9090993783669953,0.0008286470884212305,0.8603728282360635,0.38103193784612543,0.3310817540783998,0.25813284144005844,0.42122344782927035,0.02214382312826757,0.5879762852007494,0.37998290569456383,0.11577571421324617,0.8784216203450913,0.24651955257713276,0.16629384680977144,0.19601193828586838,0.1940680540225782,0.7953569896064941,0.8814853083251043,0.8118854371392459,0.5860332693842586,0.05394207936721318,0.6024624220818646,0.0032035102563870987,0.4524727641396209,0.5040202502471395,0.8725234260696969,0.6650542587877062,0.09115108757424861,0.8838679210986444,0.7268067344018372,0.22970907117309625,0.8291310515557024,0.9350323060614305,0.19423533133062254,0.9727246786592847,0.2939111819243819,0.5466435568010897,0.3459704369094506,0.13153062383572411,0.1059476303486444,0.8405993143904842,0.7221794889648633,0.9052932268762995,0.5826665342413583,0.051354344452737566,0.5373526418925543,0.43984261626011534,0.9505780606775274,0.4212621982899828,0.4111152025624085,0.27843260592912245,0.08522150655323746,0.3048536685539198,0.5349566169780674,0.6801554473501296,0.08578313846788821,0.6746465818802522,0.26201579651146845,0.6571936727665096,0.8833212221925014,0.8500055438805735,0.23428939076668642,0.5756022047978493,0.16015856946415363,0.5281071290001534,0.6346236819390783,0.4674745872112954,0.33720642781629095,0.7815331614073773,0.15637803245523585,0.5884172768895711,0.08660747140025693,0.4798296406305804,0.8300309351375045,0.25789125452927597,0.43208865491975956,0.968926818430868,0.10056268611681751,0.6588680399594378,0.2233342339673683,0.5727884403990247,0.8361186148241306,0.20386058837168963,0.8462293305803124,0.6617263989916073,0.659256677730491,0.8885587162729889,0.42580268690319734,0.7091958909015956,0.97256971022344,0.2820842156171164,0.958212147919725,0.05420192531972301,0.49949626916006584,0.5188199869543421,0.16106396947689638,0.7591939056187906,0.26563612872371556,0.6641091688686298,0.7861382694059469,0.22498884177128364,0.3399447246267302,0.06046769457423218,0.917350970859523,0.11278769417922796,0.5765961208076004,0.7997897292864823,0.8949458411982046,0.1133109770280728,0.4560122227748302,0.49000739785120884,0.5614053664075889,0.8088791415658596,0.601991130785299,0.9593364410330681,0.8758709887060689,0.610606724046687,0.062476643467289206,0.12382358450609765,0.8396292620283282,0.4483848449523886,0.9486807673972338,0.8877416121170479,0.7098611260584751,0.08890651564657681,0.49278336347968477,0.056930498932873164,0.6629375566361131,0.9711453906172621,0.9052096990020974,0.8191026794155145,0.5237105978304804,0.06304956330388167,0.8044541655224065,0.3503359912202535,0.9638821257775051,0.1258169097655466,0.03145076870032548,0.6919563980823498,0.14343888783731773,0.8917566343401399,0.9337237205148301,0.10166747902368767,0.08469318296026285,0.39059018149288005,0.8023823865764762,0.7558623308637202,0.797207656979603,0.8077883645067985,0.7724935002400751,0.2915816893837686,0.7801898684852603,0.2645372446565396,0.9899514180789881,0.4143016912750521,0.7651044149141635,0.7627250719205853,0.2651179053545596,0.9438183448408806,0.3653597804012326,0.3373157410148495,0.8401907420033365,0.3236768986605726,0.24700643184147464,0.12995808729867298,0.9001285055050142,0.11725168560706778,0.4312570536224418,0.058838509666198524,0.020994391285972802,0.6755297004086864,0.21103512682725034,0.5038027883464771,0.05146739982153847,0.6315102288898296,0.5947719459835588,0.029377004936728124,0.33070891790006796,0.43897754719624404,0.4932035171044067,0.5989694136550056,0.8341696679803098,0.19651111532553645,0.3416593219547237,0.8009637856342883,0.6310060178980852,0.8796000732447962,0.19933201838095105,0.8581106938954568,0.4878142975186158,0.7227488869453016,0.5772702484011105,0.32599610114014266,0.04300648505058546,0.8683003840082847,0.6808347149002846,0.5212239755191383,0.9170452700188311,0.07325222724723968,0.5869357895999858,0.539599312285058,0.5565670519435191,0.5227252383530114,0.6242943971618451,0.8727021530323321,0.27122271068014747,0.11459972028928911,0.6845648998237946,0.4287813197772069,0.08016669935281351,0.49401880685676025,0.9507432485797338,0.09823641059836385,0.42183843263529097,0.6209991178286598,0.2695222450774871,0.577422592172626,0.773133616835494,0.014046136233641371,0.4631580801316364,0.897443915996243,0.08509555439466321,0.4015696352752369,0.726832199239996,0.03866556788008535,0.32956454101980404,0.3604618146590005,0.10337382996169986,0.7919504526836121,0.9792306127341756,0.702175988881261,0.4242042943005784,0.35148505941146,0.27288935769972245,0.6870395621945059,0.848766422709051,0.46147474495025465,0.05759278605698104,0.24339957686521563,0.2542956842634373,0.1444886170703883,0.22131977690588978,0.2736824967468602,0.021900558865168396,0.3051455777010036,0.7681033172388998,0.024397500076177137,0.09539449616805806,0.5061557456608221,0.5980430850133901,0.65004551232773,0.851979831004568,0.1779034817033236,0.4316374955760399,0.13594120442101076,0.49527628340653007]},"selected":null,"selection_policy":null},"id":"e572313b-000b-4c8f-a1ed-f5b3e15d02c7","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1d7694ef-5061-46db-be32-c7cd605168fa","type":"BasicTickFormatter"},"plot":{"id":"006e9e31-8fe9-4013-aa98-0782d9a8deda","subtype":"Figure","type":"Plot"},"ticker":{"id":"4aecfd6b-49dd-4653-bad1-92c7478c6b43","type":"BasicTicker"}},"id":"538006cc-d214-4d38-8e7f-d8b14522c981","type":"LinearAxis"},{"attributes":{},"id":"f9db9862-8625-476b-89e0-85765f3ce696","type":"BasicTickFormatter"},{"attributes":{},"id":"c5a54be8-b91f-4691-badf-30b138eba92f","type":"LinearScale"}],"root_ids":["2b2f3644-85f3-49d9-9c8e-5ed57d32237d"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"4edf5795-30f5-4c37-87d5-e6cd2bad13f6","elementid":"fd3367d3-5bb1-4d33-a1ee-90ae68a198a5","modelid":"2b2f3644-85f3-49d9-9c8e-5ed57d32237d"}];
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