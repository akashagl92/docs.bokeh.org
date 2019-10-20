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
      };var element = document.getElementById("4fe694c3-cc94-4bc4-ab66-3c3e37584e30");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4fe694c3-cc94-4bc4-ab66-3c3e37584e30' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"826593c4-388e-436a-8620-3b5ccfffddc0":{"roots":{"references":[{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#0d3362"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#0d3362"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"b8e99034-c19a-42f3-a8d3-8a866a0b4e34","type":"AnnularWedge"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"6077ddc0-805f-4356-9463-c62892e998bd","type":"Circle"},{"attributes":{"data_source":{"id":"2e09bf9c-2319-4a1e-acbf-dc6d2cd6bfe0","type":"ColumnDataSource"},"glyph":{"id":"581a5fc3-30eb-4857-b114-2747a226d3c9","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e6075e00-ffff-47b3-ab05-cfe124959b46","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"09417c08-865f-4308-9c09-c7362d19ab0f","type":"CDSView"}},"id":"13da445c-565d-433b-aa5c-bd1dd6145d2c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2e09bf9c-2319-4a1e-acbf-dc6d2cd6bfe0","type":"ColumnDataSource"}},"id":"09417c08-865f-4308-9c09-c7362d19ab0f","type":"CDSView"},{"attributes":{"data_source":{"id":"28f9282e-5ba5-415c-9f37-04825194aa0a","type":"ColumnDataSource"},"glyph":{"id":"daa15064-feed-459e-aecb-e3f734383700","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25b9ff1e-717a-4d8f-8604-146b5d99255a","type":"Text"},"selection_glyph":null,"view":{"id":"c377b36a-ee27-4321-abdc-b6893dee9bd5","type":"CDSView"}},"id":"7d78c4fa-e264-4808-8b0a-fc84815f5b0e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","text","angle"],"data":{"angle":{"__ndarray__":"BKq7ixo48z/dTWaGc5zqP2iPqupjkd0/WgwiIoOntz8+iZlZor3Rv8nK3b2SsuS/eGh3JypD8L+O6//vCi32v47r/+8KLfY/emh3JypD8D/Iyt29krLkP0CJmVmivdE/QAwiIoOnt79gj6rqY5Hdv+BNZoZznOq/BKq7ixo4878=","dtype":"float64","shape":[16]},"text":["Mycobacterium tuberculosis","Salmonella schottmuelleri","Proteus vulgaris","Klebsiella pneumoniae","Brucella abortus","Pseudomonas aeruginosa","Escherichia coli","Salmonella (Eberthella) typhosa","Aerobacter aerogenes","Brucella antracis","Streptococcus fecalis","Staphylococcus aureus","Staphylococcus albus","Streptococcus hemolyticus","Streptococcus viridans","Diplococcus pneumoniae"],"x":{"__ndarray__":"cGn7M6UwWkAzVkZE5WtoQKq2lcOOOXBAjuBL4jQMckDOGdT43m5xQMF6BpGZ7WxA7SBXXEoVY0AXTcs3yKRKQBFNyzfIpErA6CBXXEoVY8DBegaRme1swM4Z1PjebnHAj+BL4jQMcsCrtpXDjjlwwDJWRkTla2jAcmn7M6UwWsA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"aywf0KvmcEAmrFe0AMpqQKfycbJzKGBAv6EJxQDCOkC6LG9iL9dTwNZbjg1z2GXAdpVS2APSbsAYUkjE/tBxwBhSSMT+0HHAepVS2APSbsDWW44Nc9hlwL8sb2Iv11PAmaEJxQDCOkCi8nGycyhgQCesV7QAympAaywf0KvmcEA=","dtype":"float64","shape":[16]}},"selected":null,"selection_policy":null},"id":"28f9282e-5ba5-415c-9f37-04825194aa0a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["radius"],"data":{"radius":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxAAAAAAACAVkA=","dtype":"float64","shape":[7]}},"selected":null,"selection_policy":null},"id":"983598f9-f2fc-4847-abdb-79b0e7ca777b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#aeaeb8","#e69584"],"line_color":["#aeaeb8","#e69584"],"x":[-40,-40],"y":[-370,-390]},"selected":null,"selection_policy":null},"id":"a85d9bed-f895-4813-a299-6ab1e8dab51a","type":"ColumnDataSource"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"25b9ff1e-717a-4d8f-8604-146b5d99255a","type":"Text"},{"attributes":{"source":{"id":"6af746c8-76e8-4651-83a2-d79748d8cdb4","type":"ColumnDataSource"}},"id":"79539caa-780f-4129-b2ae-a12376354d2b","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["Gram-positive","Gram-negative"],"x":[-30,-30],"y":[-370,-390]},"selected":null,"selection_policy":null},"id":"0c5215b6-9dd6-4502-b167-2770672624c7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"FyEz4zyk8z8EPFU1uHTrP7hriEjtQd8/ln2Zmahpvj/urLv7GA3Qv6Lc7g5O2uO/yuL/nw+u7797dIiY6MD1v4/3EGHJqvu/Ub3MFFXKAMDc/hB5Rb8DwGZAVd01tAbA8IGZQSapCcB6w92lFp4MwAcFIgoHkw/ARyMzt/tDEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"pmlXNAGDYkDWwF0C/m1lQDjj0CUzIWlAZ+OHhpjCZECbzPtu2O9jQJvM+27Y72NAHRgJcjWcZkAdGAlyNZxmQAbJjNcyD2VAx3MGqjT1bUAGyYzXMg9lQIaiNChEiGtAOOPQJTMhaUDoDDhWBvtgQKDSxFcteWFASjEX/kFVYUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"8DJENPjL8j+1X3fXLsTpPxqzzIza4Ns/Hpuqql3lsD+MZXe3K27Tv/G4zGzXiuW/jN/ufkyv8L+iYndHLZn2v7bl/w8Og/y/ZTREbHc2AcDwdYjQZysEwHq3zDRYIAfABPkQmUgVCsCOOlX9OAoNwBt8mWEp/w/A0d7u4gx6EcA=","dtype":"float64","shape":[16]}},"selected":null,"selection_policy":null},"id":"2efd5715-6480-4823-b92d-f22fde330071","type":"ColumnDataSource"},{"attributes":{"source":{"id":"28f9282e-5ba5-415c-9f37-04825194aa0a","type":"ColumnDataSource"}},"id":"c377b36a-ee27-4321-abdc-b6893dee9bd5","type":"CDSView"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"1ffc206a-54b2-4d52-b353-822ec7c7a5f3","type":"AnnularWedge"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"daa15064-feed-459e-aecb-e3f734383700","type":"Text"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6aa57b58-c046-47e4-a95f-6790614ab72d","type":"Text"},{"attributes":{"data_source":{"id":"a85d9bed-f895-4813-a299-6ab1e8dab51a","type":"ColumnDataSource"},"glyph":{"id":"6077ddc0-805f-4356-9463-c62892e998bd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fccc991a-c1a5-464c-9c6b-f1fa0488855d","type":"Circle"},"selection_glyph":null,"view":{"id":"72a05620-99b2-40e6-9194-58e6465998e3","type":"CDSView"}},"id":"885bafcf-a00a-4368-9d0a-5b0cc6afb4f4","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"1932955e-bb40-4cc0-a97c-f34d7db1cc51","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"6af746c8-76e8-4651-83a2-d79748d8cdb4","type":"ColumnDataSource"},"glyph":{"id":"b8e99034-c19a-42f3-a8d3-8a866a0b4e34","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1932955e-bb40-4cc0-a97c-f34d7db1cc51","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"79539caa-780f-4129-b2ae-a12376354d2b","type":"CDSView"}},"id":"a895937a-c246-4bda-ae8a-e33ec1d055ec","type":"GlyphRenderer"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"30344a04-38e2-4038-bd87-70e38dc3454b","type":"Text"},{"attributes":{"data_source":{"id":"0c5215b6-9dd6-4502-b167-2770672624c7","type":"ColumnDataSource"},"glyph":{"id":"30344a04-38e2-4038-bd87-70e38dc3454b","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"437bb737-c16e-44cb-9c52-85c407e01822","type":"Text"},"selection_glyph":null,"view":{"id":"8323dd87-8298-47aa-9655-0a9ee1ecbc36","type":"CDSView"}},"id":"f240a4b3-4f92-4922-b21b-fb8c5ad8be9c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a85d9bed-f895-4813-a299-6ab1e8dab51a","type":"ColumnDataSource"}},"id":"72a05620-99b2-40e6-9194-58e6465998e3","type":"CDSView"},{"attributes":{"data_source":{"id":"9228a971-35a7-48a0-9228-f470cb7d6a87","type":"ColumnDataSource"},"glyph":{"id":"f3e79131-5015-4036-a544-fdb7e712798f","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"05e417ff-6874-47f9-b3c0-0f386176b527","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"ab3bdfe4-e53c-4b0c-977a-64428a34a7c8","type":"CDSView"}},"id":"eeef7dc9-dbc2-4067-b8a8-6e4e2f84756c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"fccc991a-c1a5-464c-9c6b-f1fa0488855d","type":"Circle"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"05e417ff-6874-47f9-b3c0-0f386176b527","type":"AnnularWedge"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["Penicillin","Streptomycin","Neomycin"],"x":[-15,-15,-15],"y":[18,0,-18]},"selected":null,"selection_policy":null},"id":"9b97f942-2038-499a-865c-833cafb8c3e7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9228a971-35a7-48a0-9228-f470cb7d6a87","type":"ColumnDataSource"}},"id":"ab3bdfe4-e53c-4b0c-977a-64428a34a7c8","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0d3362","#c64737","black"],"line_color":["#0d3362","#c64737","black"],"x":[-40,-40,-40],"y":[18,0,-18]},"selected":null,"selection_policy":null},"id":"5f283991-16ae-447c-b572-78db05c66bbc","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"field":"fill_color"},"inner_radius":{"units":"data","value":90},"line_color":{"field":"line_color"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"f3e79131-5015-4036-a544-fdb7e712798f","type":"AnnularWedge"},{"attributes":{"source":{"id":"0c5215b6-9dd6-4502-b167-2770672624c7","type":"ColumnDataSource"}},"id":"8323dd87-8298-47aa-9655-0a9ee1ecbc36","type":"CDSView"},{"attributes":{},"id":"725cf868-9389-4331-b722-5707cd155479","type":"HelpTool"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"437bb737-c16e-44cb-9c52-85c407e01822","type":"Text"},{"attributes":{},"id":"a1d8cae7-7aca-4bb0-8bf0-fd0255af643f","type":"ResetTool"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":13},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0d6fec3-c33a-43ed-bebc-d97a69c8b07b","type":"Rect"},{"attributes":{"overlay":{"id":"5997f578-fcb9-4811-9f8a-383c9688ded0","type":"BoxAnnotation"}},"id":"179019d0-f082-4295-a203-e861b23616fe","type":"BoxZoomTool"},{"attributes":{},"id":"ba47edab-0123-47db-98b6-2db3b33e0ff1","type":"SaveTool"},{"attributes":{"source":{"id":"5f283991-16ae-447c-b572-78db05c66bbc","type":"ColumnDataSource"}},"id":"a4cf5836-80d2-4ebd-b3e2-63f069133fc8","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5997f578-fcb9-4811-9f8a-383c9688ded0","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":13},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"30831ea6-c1ff-441c-912f-35ab48470307","type":"Rect"},{"attributes":{},"id":"3ec0b90e-dc4d-41db-9ae8-c2ad0dea8377","type":"PanTool"},{"attributes":{"data_source":{"id":"5f283991-16ae-447c-b572-78db05c66bbc","type":"ColumnDataSource"},"glyph":{"id":"b0d6fec3-c33a-43ed-bebc-d97a69c8b07b","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30831ea6-c1ff-441c-912f-35ab48470307","type":"Rect"},"selection_glyph":null,"view":{"id":"a4cf5836-80d2-4ebd-b3e2-63f069133fc8","type":"CDSView"}},"id":"ba82312a-7a52-4341-a5aa-ef8be91c2996","type":"GlyphRenderer"},{"attributes":{},"id":"5e2ef93d-b02e-4e73-b718-be4962a8b400","type":"WheelZoomTool"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0aa527b7-0590-4c7f-9aa1-a8fa14b163d4","type":"Text"},{"attributes":{"source":{"id":"9b97f942-2038-499a-865c-833cafb8c3e7","type":"ColumnDataSource"}},"id":"2f22d74b-4df0-4647-a6ea-03a31a270fa9","type":"CDSView"},{"attributes":{"data_source":{"id":"9b97f942-2038-499a-865c-833cafb8c3e7","type":"ColumnDataSource"},"glyph":{"id":"6aa57b58-c046-47e4-a95f-6790614ab72d","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0aa527b7-0590-4c7f-9aa1-a8fa14b163d4","type":"Text"},"selection_glyph":null,"view":{"id":"2f22d74b-4df0-4647-a6ea-03a31a270fa9","type":"CDSView"}},"id":"66eb68d3-6ca3-47ec-aa1c-ff6669f5b6b4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["start_angle","end_angle","fill_color","line_color"],"data":{"end_angle":{"__ndarray__":"juv/7wot9j95aHcnKkPwP8nK3b2SsuQ/QImZWaK90T9QDCIig6e3v2iPqupjkd2/3E1mhnOc6r8EqruLGjjzvxgtRFT7Ifm/LLDMHNwL/7+hmapy3noCwCvb7tbObwXAtRwzO79kCMA/Xnefr1kLwMufuwOgTg7AqvD/M8ihEMA=","dtype":"float64","shape":[16]},"fill_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"line_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}},"selected":null,"selection_policy":null},"id":"9228a971-35a7-48a0-9228-f470cb7d6a87","type":"ColumnDataSource"},{"attributes":{},"id":"caeb2600-07eb-471f-be51-447836aa9702","type":"LinearScale"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"3065644a-ee72-4889-8c78-d7b9b8f13cd4","type":"Range1d"},{"attributes":{},"id":"4873c9d6-a4f1-4a26-a9ce-f2dc6c99f717","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"Zv0QQcZU9T+i9BDxytXuP3ru/18JAuM/RKG7Ox+5zD9kd4gI55XCvwQkM1M7eeC/LCpE5PxM7L8smKo6XxD0v0AbMwNA+vm/U567yyDk/7+0ECLKAOcCwD5SZi7x2wXAyJOqkuHQCMBS1e720cULwN8WM1vCug7ANKy7X9nXEMA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"bLZfBPAOV0Cg0sRXLXlhQDLrDr5nTGNA1FIAQwHoVkAGyYzXMg9lQNRSAEMB6FZAFEU4zHF2XEAGyYzXMg9lQHi2fdUW2VZAAAAAAAAgckAGyYzXMg9lQIaiNChEiGtA/HdeznjObkAAAAAAACByQKYExgH2o29ApgTGAfajb0A=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"Pw8ikoF89D9UGDOTQSXtPysSIgKAUeE/CDBExPn2xT+g6P9/DFjJv1IAEbHEKeK/egYiQob97b9Thpnpo+j0v2cJIrKE0vq/PUZVvTJeAMDIh5khI1MDwFLJ3YUTSAbA3Aoi6gM9CcBmTGZO9DEMwPONqrLkJg/Avmd3i+oNEcA=","dtype":"float64","shape":[16]}},"selected":null,"selection_policy":null},"id":"6af746c8-76e8-4651-83a2-d79748d8cdb4","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"e4c336a1-cfbe-45ec-8cd3-679cb07bbe71","type":"Range1d"},{"attributes":{"data_source":{"id":"2efd5715-6480-4823-b92d-f22fde330071","type":"ColumnDataSource"},"glyph":{"id":"e9e04a7f-0d02-46e2-beb0-0c4311c7b394","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1ffc206a-54b2-4d52-b353-822ec7c7a5f3","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"20f3759b-0271-4f3d-8e56-a81084b11322","type":"CDSView"}},"id":"ae7f5111-ab68-44cb-8487-f6af66fa44c0","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c64737"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#c64737"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"e9e04a7f-0d02-46e2-beb0-0c4311c7b394","type":"AnnularWedge"},{"attributes":{"source":{"id":"2efd5715-6480-4823-b92d-f22fde330071","type":"ColumnDataSource"}},"id":"20f3759b-0271-4f3d-8e56-a81084b11322","type":"CDSView"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"680ab34b-c9e7-44d6-bbf2-18e8fd25da9a","type":"AnnularWedge"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"yERVhbPz8T9mg5l5pRPoP3v6ENHHf9g/KMXd3ZUIiz8rHjNzPs/Wv0CVqspgO+e/tM3dLZGH8b/KUGb2cXH3v97T7r5SW/2/eKu7w5miAcAD7f8nipcEwI0uRIx6jAfAF3CI8GqBCsChscxUW3YNwJd5iNylNRDAW5qqDh6wEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"m8z7btjvY0D9PDy5w1RpQDjj0CUzIWlABsmM1zIPZUChS31Y0mVsQB0YCXI1nGZAOOPQJTMhaUCyh+QAGnxuQM3Wg944S2RA/HdeznjObkA449AlMyFpQAAAAAAAIHJAAAAAAAAgckCg0sRXLXlhQFhbROgM+V5AoNLEVy15YUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"oVZm1m4b8T8Xp7sbHGPmP91BVRW1HtU/p1NmZnBGpL/J1u4uUTDav49xiCjq6+i/27vM3NVf8r/xPlWltkn4vwXC3W2XM/6/jCIzG7wOAsAXZHd/rAMFwKGlu+Oc+AfAK+f/R43tCsC1KESsfeINwCE1RAi3axDA5VVmOi/mEcA=","dtype":"float64","shape":[16]}},"selected":null,"selection_policy":null},"id":"f07ea2fc-6c0f-4516-85bc-ae5f8500dfc0","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":90},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"caa78d50-eece-4e46-9f07-2f069e9a84ce","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"f07ea2fc-6c0f-4516-85bc-ae5f8500dfc0","type":"ColumnDataSource"},"glyph":{"id":"caa78d50-eece-4e46-9f07-2f069e9a84ce","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"680ab34b-c9e7-44d6-bbf2-18e8fd25da9a","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"b384d58a-cfa7-4fea-808e-9deabfee6466","type":"CDSView"}},"id":"295861b2-919f-4a44-a7d0-3f1f287f2163","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"983598f9-f2fc-4847-abdb-79b0e7ca777b","type":"ColumnDataSource"},"glyph":{"id":"55bfb286-123b-4893-a37f-bb982b27a675","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f4e06bfb-d8d3-4cfd-8088-8d7638a2d56d","type":"Circle"},"selection_glyph":null,"view":{"id":"8727cdf3-6b7d-4536-a680-384f67af951f","type":"CDSView"}},"id":"4451e36e-9f05-4cb9-a874-141addcd4143","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f07ea2fc-6c0f-4516-85bc-ae5f8500dfc0","type":"ColumnDataSource"}},"id":"b384d58a-cfa7-4fea-808e-9deabfee6466","type":"CDSView"},{"attributes":{"source":{"id":"983598f9-f2fc-4847-abdb-79b0e7ca777b","type":"ColumnDataSource"}},"id":"8727cdf3-6b7d-4536-a680-384f67af951f","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"white"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"55bfb286-123b-4893-a37f-bb982b27a675","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","text"],"data":{"text":["0.001","0.01","0.1","1.0","10.0","100.0"],"y":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxA","dtype":"float64","shape":[6]}},"selected":null,"selection_policy":null},"id":"847fb0f9-c4a0-4fe2-95e1-e41e45356dfc","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#f0e1d2"},"min_border":0,"outline_line_color":{"value":"black"},"plot_height":800,"plot_width":800,"renderers":[{"id":"5997f578-fcb9-4811-9f8a-383c9688ded0","type":"BoxAnnotation"},{"id":"eeef7dc9-dbc2-4067-b8a8-6e4e2f84756c","type":"GlyphRenderer"},{"id":"a895937a-c246-4bda-ae8a-e33ec1d055ec","type":"GlyphRenderer"},{"id":"ae7f5111-ab68-44cb-8487-f6af66fa44c0","type":"GlyphRenderer"},{"id":"295861b2-919f-4a44-a7d0-3f1f287f2163","type":"GlyphRenderer"},{"id":"4451e36e-9f05-4cb9-a874-141addcd4143","type":"GlyphRenderer"},{"id":"5cd1fbd3-651c-414a-a335-4edc85c22acb","type":"GlyphRenderer"},{"id":"13da445c-565d-433b-aa5c-bd1dd6145d2c","type":"GlyphRenderer"},{"id":"7d78c4fa-e264-4808-8b0a-fc84815f5b0e","type":"GlyphRenderer"},{"id":"885bafcf-a00a-4368-9d0a-5b0cc6afb4f4","type":"GlyphRenderer"},{"id":"f240a4b3-4f92-4922-b21b-fb8c5ad8be9c","type":"GlyphRenderer"},{"id":"ba82312a-7a52-4341-a5aa-ef8be91c2996","type":"GlyphRenderer"},{"id":"66eb68d3-6ca3-47ec-aa1c-ff6669f5b6b4","type":"GlyphRenderer"}],"title":{"id":"85f38ec5-1b49-4168-8180-c8999972092b","type":"Title"},"toolbar":{"id":"921d9e8f-c70b-4320-ad54-38e9b1546f89","type":"Toolbar"},"x_range":{"id":"e4c336a1-cfbe-45ec-8cd3-679cb07bbe71","type":"Range1d"},"x_scale":{"id":"4873c9d6-a4f1-4a26-a9ce-f2dc6c99f717","type":"LinearScale"},"y_range":{"id":"3065644a-ee72-4889-8c78-d7b9b8f13cd4","type":"Range1d"},"y_scale":{"id":"caeb2600-07eb-471f-be51-447836aa9702","type":"LinearScale"}},"id":"55291ce9-ced5-4604-b343-bed71f4cd7e6","subtype":"Figure","type":"Plot"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"74e0fab7-5ecd-406d-95b3-c7271b49cb08","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"f4e06bfb-d8d3-4cfd-8088-8d7638a2d56d","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3ec0b90e-dc4d-41db-9ae8-c2ad0dea8377","type":"PanTool"},{"id":"5e2ef93d-b02e-4e73-b718-be4962a8b400","type":"WheelZoomTool"},{"id":"179019d0-f082-4295-a203-e861b23616fe","type":"BoxZoomTool"},{"id":"ba47edab-0123-47db-98b6-2db3b33e0ff1","type":"SaveTool"},{"id":"a1d8cae7-7aca-4bb0-8bf0-fd0255af643f","type":"ResetTool"},{"id":"725cf868-9389-4331-b722-5707cd155479","type":"HelpTool"}]},"id":"921d9e8f-c70b-4320-ad54-38e9b1546f89","type":"Toolbar"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"f70af07e-e313-4c87-b985-4dcdbd9c1956","type":"Text"},{"attributes":{"plot":null,"text":""},"id":"85f38ec5-1b49-4168-8180-c8999972092b","type":"Title"},{"attributes":{"data_source":{"id":"847fb0f9-c4a0-4fe2-95e1-e41e45356dfc","type":"ColumnDataSource"},"glyph":{"id":"74e0fab7-5ecd-406d-95b3-c7271b49cb08","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f70af07e-e313-4c87-b985-4dcdbd9c1956","type":"Text"},"selection_glyph":null,"view":{"id":"a1f0ccac-f4e2-412f-91f3-a09fdf028fd7","type":"CDSView"}},"id":"5cd1fbd3-651c-414a-a335-4edc85c22acb","type":"GlyphRenderer"},{"attributes":{"source":{"id":"847fb0f9-c4a0-4fe2-95e1-e41e45356dfc","type":"ColumnDataSource"}},"id":"a1f0ccac-f4e2-412f-91f3-a09fdf028fd7","type":"CDSView"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":80},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"e6075e00-ffff-47b3-ab05-cfe124959b46","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":80},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"581a5fc3-30eb-4857-b114-2747a226d3c9","type":"AnnularWedge"},{"attributes":{"callback":null,"column_names":["start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}},"selected":null,"selection_policy":null},"id":"2e09bf9c-2319-4a1e-acbf-dc6d2cd6bfe0","type":"ColumnDataSource"}],"root_ids":["55291ce9-ced5-4604-b343-bed71f4cd7e6"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"826593c4-388e-436a-8620-3b5ccfffddc0","elementid":"4fe694c3-cc94-4bc4-ab66-3c3e37584e30","modelid":"55291ce9-ced5-4604-b343-bed71f4cd7e6"}];
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