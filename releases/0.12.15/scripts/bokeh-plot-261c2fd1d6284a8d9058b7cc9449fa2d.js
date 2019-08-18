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
      };var element = document.getElementById("20d34fd3-0104-4812-acf1-5a68537e2515");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '20d34fd3-0104-4812-acf1-5a68537e2515' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"73cbaddc-fa65-42f2-afd3-7dda42adb4ac":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":null,"selection_policy":null},"id":"376ac759-0fae-4c9f-8803-d48d81735434","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"26225331-5bbe-4f81-bd46-a4d7c31fdad6","type":"DataRange1d"},{"attributes":{},"id":"a2f1ea3a-e965-4688-8406-5a752cf422d1","type":"BasicTicker"},{"attributes":{},"id":"eb530d27-be54-4160-95e5-18c929861f4a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"eb530d27-be54-4160-95e5-18c929861f4a","type":"BasicTickFormatter"},"plot":{"id":"93459435-9c2c-4ae1-be83-8a92e73e22dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2f1ea3a-e965-4688-8406-5a752cf422d1","type":"BasicTicker"}},"id":"75d5602f-58e1-492f-b75c-764b371d05b8","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"93459435-9c2c-4ae1-be83-8a92e73e22dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f9da87d-a45e-463e-8455-71efe264c8d8","type":"BasicTicker"}},"id":"ed1b8052-bc9e-4664-a753-dcc30c0de0cc","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"282a17a1-07a2-4881-a070-e15046596c9d","type":"BoxSelectTool"},{"id":"6fef872c-e058-4399-9b74-c0ffde9c1f27","type":"BoxZoomTool"},{"id":"2cb92d69-0719-4567-afaa-d9f12d8bab6b","type":"LassoSelectTool"},{"id":"9a91881e-af98-4a02-87f0-d0580cad77ac","type":"ResetTool"}]},"id":"4e15e2d8-429d-4cea-98b2-df7891b369d6","type":"Toolbar"},{"attributes":{"data_source":{"id":"376ac759-0fae-4c9f-8803-d48d81735434","type":"ColumnDataSource"},"glyph":{"id":"100c3dd3-c56e-4570-a6e2-0d3585ce104e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46f93daa-c690-4bbc-9c96-6233ce9d1a47","type":"Circle"},"selection_glyph":null,"view":{"id":"2ee97d4e-bffd-4712-8088-be25b931972a","type":"CDSView"}},"id":"0e457f05-a324-4f6f-9c90-29aa13878354","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"dc3a61ba-ea4a-4f27-b048-5ced6475f9f1","type":"Title"},{"attributes":{"overlay":{"id":"fea2c389-e052-4de8-ac05-4d1da8e59e36","type":"BoxAnnotation"}},"id":"6fef872c-e058-4399-9b74-c0ffde9c1f27","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"100c3dd3-c56e-4570-a6e2-0d3585ce104e","type":"Circle"},{"attributes":{"formatter":{"id":"2738b1ee-1f71-4a34-aeda-4f5e8d006259","type":"BasicTickFormatter"},"plot":{"id":"93459435-9c2c-4ae1-be83-8a92e73e22dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f9da87d-a45e-463e-8455-71efe264c8d8","type":"BasicTicker"}},"id":"1f41413f-a8bf-4a5d-a1cb-368fbee63adf","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"46f93daa-c690-4bbc-9c96-6233ce9d1a47","type":"Circle"},{"attributes":{},"id":"9a91881e-af98-4a02-87f0-d0580cad77ac","type":"ResetTool"},{"attributes":{},"id":"2738b1ee-1f71-4a34-aeda-4f5e8d006259","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e84bdf5b-39c4-4810-825c-e454a9ab442d","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"d46e54d4-067d-4141-9426-8a1cf22accac","type":"PolyAnnotation"},{"attributes":{"source":{"id":"376ac759-0fae-4c9f-8803-d48d81735434","type":"ColumnDataSource"}},"id":"2ee97d4e-bffd-4712-8088-be25b931972a","type":"CDSView"},{"attributes":{"below":[{"id":"75d5602f-58e1-492f-b75c-764b371d05b8","type":"LinearAxis"}],"left":[{"id":"1f41413f-a8bf-4a5d-a1cb-368fbee63adf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"75d5602f-58e1-492f-b75c-764b371d05b8","type":"LinearAxis"},{"id":"9f3d28e2-f3fb-4a74-9208-084b9c3552f8","type":"Grid"},{"id":"1f41413f-a8bf-4a5d-a1cb-368fbee63adf","type":"LinearAxis"},{"id":"ed1b8052-bc9e-4664-a753-dcc30c0de0cc","type":"Grid"},{"id":"19fb17e0-4fc2-472b-8c03-07c145d01fdb","type":"BoxAnnotation"},{"id":"fea2c389-e052-4de8-ac05-4d1da8e59e36","type":"BoxAnnotation"},{"id":"d46e54d4-067d-4141-9426-8a1cf22accac","type":"PolyAnnotation"},{"id":"0e457f05-a324-4f6f-9c90-29aa13878354","type":"GlyphRenderer"}],"title":{"id":"dc3a61ba-ea4a-4f27-b048-5ced6475f9f1","type":"Title"},"toolbar":{"id":"4e15e2d8-429d-4cea-98b2-df7891b369d6","type":"Toolbar"},"x_range":{"id":"e84bdf5b-39c4-4810-825c-e454a9ab442d","type":"DataRange1d"},"x_scale":{"id":"fb03bc42-fb83-44e0-8c4e-219c3a03195d","type":"LinearScale"},"y_range":{"id":"26225331-5bbe-4f81-bd46-a4d7c31fdad6","type":"DataRange1d"},"y_scale":{"id":"e6dd32ae-8534-49f1-854b-02f437a29d0e","type":"LinearScale"}},"id":"93459435-9c2c-4ae1-be83-8a92e73e22dc","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"d46e54d4-067d-4141-9426-8a1cf22accac","type":"PolyAnnotation"}},"id":"2cb92d69-0719-4567-afaa-d9f12d8bab6b","type":"LassoSelectTool"},{"attributes":{},"id":"6f9da87d-a45e-463e-8455-71efe264c8d8","type":"BasicTicker"},{"attributes":{},"id":"e6dd32ae-8534-49f1-854b-02f437a29d0e","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"19fb17e0-4fc2-472b-8c03-07c145d01fdb","type":"BoxAnnotation"},"renderers":[{"id":"0e457f05-a324-4f6f-9c90-29aa13878354","type":"GlyphRenderer"}]},"id":"282a17a1-07a2-4881-a070-e15046596c9d","type":"BoxSelectTool"},{"attributes":{},"id":"fb03bc42-fb83-44e0-8c4e-219c3a03195d","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19fb17e0-4fc2-472b-8c03-07c145d01fdb","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fea2c389-e052-4de8-ac05-4d1da8e59e36","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"93459435-9c2c-4ae1-be83-8a92e73e22dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2f1ea3a-e965-4688-8406-5a752cf422d1","type":"BasicTicker"}},"id":"9f3d28e2-f3fb-4a74-9208-084b9c3552f8","type":"Grid"}],"root_ids":["93459435-9c2c-4ae1-be83-8a92e73e22dc"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"73cbaddc-fa65-42f2-afd3-7dda42adb4ac","elementid":"20d34fd3-0104-4812-acf1-5a68537e2515","modelid":"93459435-9c2c-4ae1-be83-8a92e73e22dc"}];
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