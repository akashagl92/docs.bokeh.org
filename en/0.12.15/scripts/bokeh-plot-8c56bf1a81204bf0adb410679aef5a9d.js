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
      };var element = document.getElementById("ddb01d4b-e1f7-48a6-93ac-8410abed8f64");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ddb01d4b-e1f7-48a6-93ac-8410abed8f64' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d865f356-7947-4f3c-a8f7-083c809f3021":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"kgLIpuuKGECtgosI2ZsbQL12EtrqOhlAMHhVxQsRGkAz5I/18jsbQNGHbKd96BpArHkGTzo5GEDH5WY5f9MaQDKkwLwBMBlAdX9JzlD2GUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"ZN4G59GI9j/WNMP5ULD1P3CSkHQA1vo/WqsbPXGO/j+eH4qbAdr+PxxJjUvepPg/EydgpHI2/D+GGJBSR5v+PxdmH3Yd4/I/bNt8UqGN+D8=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"0d7782cd-a574-4e10-9c9c-cd007dd2b192","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"409de0d0-e8a2-4646-9b57-c599d0504224","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"5e23677d-de78-4be3-8664-2fb76d0b05f1","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"521706f5-3357-4462-8013-4887884e9a74","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3712366-5deb-4d55-991a-104bb4bf9642","type":"Triangle"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"b7e855e0-a47d-4b4c-9c8b-7afd2cfab6fb","type":"Text"},{"attributes":{"data_source":{"id":"9ff9bfb4-6d16-4fa6-9c7c-f1b9f1ae1acf","type":"ColumnDataSource"},"glyph":{"id":"8eaffb49-ef82-4e29-9288-8d002140b5c1","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"521706f5-3357-4462-8013-4887884e9a74","type":"Text"},"selection_glyph":null,"view":{"id":"3b6e1365-63c4-4f10-b65f-cfc504187ca5","type":"CDSView"}},"id":"ae3745bf-1a2d-4f7b-b22b-c92cc7e5fc25","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"77430040-9855-4126-8460-47ede17eac37","type":"Triangle"},{"attributes":{"data_source":{"id":"0d7782cd-a574-4e10-9c9c-cd007dd2b192","type":"ColumnDataSource"},"glyph":{"id":"a3712366-5deb-4d55-991a-104bb4bf9642","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"77430040-9855-4126-8460-47ede17eac37","type":"Triangle"},"selection_glyph":null,"view":{"id":"627ad473-cda1-47a9-aeff-ee143183ab67","type":"CDSView"}},"id":"05c0d1e7-9a04-497b-ab52-7c32de7b357e","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"063e85be-b46d-4cfb-b8ac-f31c5a31e1e3","type":"Text"},{"attributes":{"source":{"id":"0d7782cd-a574-4e10-9c9c-cd007dd2b192","type":"ColumnDataSource"}},"id":"627ad473-cda1-47a9-aeff-ee143183ab67","type":"CDSView"},{"attributes":{"source":{"id":"9ff9bfb4-6d16-4fa6-9c7c-f1b9f1ae1acf","type":"ColumnDataSource"}},"id":"3b6e1365-63c4-4f10-b65f-cfc504187ca5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e9c059d0-1c8d-4fe3-8241-1809f9f2e48a","type":"Asterisk"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_x"]},"selected":null,"selection_policy":null},"id":"5b69ca36-f713-418d-a638-d68266b01ffa","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"66B1Ai2lIECzY7/Ix6QhQGdxWSoSVSFAFc3ezEzxIUCmYFuCJ3QhQJNWyCGd7CBAyW2lYcxqIEDkSU32HAQgQAsRfV3jKCFAtoyFNEGxIUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"5f08KRWS+j/Cqdss+W3/P2Brd9WO3PU/+FBZl7Sv+T/GhvsRa6v1P66QRH/9L/o/KFelHyWU9j+qZoKJvpjwP0y74MqXdfU/VqhJL+r28T8=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"2c33e354-5f10-4194-ae86-2e2b129e8fca","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5b69ca36-f713-418d-a638-d68266b01ffa","type":"ColumnDataSource"}},"id":"dcd91fee-9cb5-481c-9333-0c6bd8ef9def","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"577cf912-ab02-4fcd-b556-c78148a1d341","type":"Asterisk"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"dafd4a6a-a176-4a60-b663-e94e55810c2c","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"hBHltihLAECTivA1R4QEQBnZ3B96fAdAswliL//cAkAywmLNleMGQOQPWXA9QwJAMUhM9jhEBkCMjSLr9ZYFQE5QqJkbxQRAt0KCYWEQAkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"/DxHtq6XEkDTy+4/YaQTQO37c69SUxBA/oA26FyXEkAQ29D9UVQSQPzcy5tUVRJAqUS3oZWyEUD+eQIloDoRQCOtbfNgeRJAjzfYghnfEEA=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"c0765d2a-7aa0-4fc5-bab3-d813eacf1093","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["inverted_triangle"]},"selected":null,"selection_policy":null},"id":"f6a17f89-570d-445e-86c9-5bd3f4c8fbf7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2c33e354-5f10-4194-ae86-2e2b129e8fca","type":"ColumnDataSource"},"glyph":{"id":"e9c059d0-1c8d-4fe3-8241-1809f9f2e48a","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"577cf912-ab02-4fcd-b556-c78148a1d341","type":"Asterisk"},"selection_glyph":null,"view":{"id":"d9a89f64-c9d0-4e91-8ea2-0e99ce4881ec","type":"CDSView"}},"id":"ff430d14-1816-47e0-b8e8-4052bc09efc7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5b69ca36-f713-418d-a638-d68266b01ffa","type":"ColumnDataSource"},"glyph":{"id":"b7e855e0-a47d-4b4c-9c8b-7afd2cfab6fb","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"063e85be-b46d-4cfb-b8ac-f31c5a31e1e3","type":"Text"},"selection_glyph":null,"view":{"id":"dcd91fee-9cb5-481c-9333-0c6bd8ef9def","type":"CDSView"}},"id":"21ea1dce-bf37-471d-aed2-2bc4afb9e7b5","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c0765d2a-7aa0-4fc5-bab3-d813eacf1093","type":"ColumnDataSource"}},"id":"e346c028-c9de-4cd1-a694-2406ab51cb6b","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"ea027014-00a8-4ace-8691-0f39e3b944b1","type":"Text"},{"attributes":{"source":{"id":"2c33e354-5f10-4194-ae86-2e2b129e8fca","type":"ColumnDataSource"}},"id":"d9a89f64-c9d0-4e91-8ea2-0e99ce4881ec","type":"CDSView"},{"attributes":{"source":{"id":"f6a17f89-570d-445e-86c9-5bd3f4c8fbf7","type":"ColumnDataSource"}},"id":"308d6de5-a29d-4e6f-bd46-eb65ae7577d0","type":"CDSView"},{"attributes":{"data_source":{"id":"f6a17f89-570d-445e-86c9-5bd3f4c8fbf7","type":"ColumnDataSource"},"glyph":{"id":"409de0d0-e8a2-4646-9b57-c599d0504224","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0456ecca-ad71-4c7e-ad41-ce3d9cc535da","type":"Text"},"selection_glyph":null,"view":{"id":"308d6de5-a29d-4e6f-bd46-eb65ae7577d0","type":"CDSView"}},"id":"165c4cb6-19f8-4f2c-83d9-5b5ba80e13f6","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"699dbc4b-1105-4040-acbd-476ee1fd4dc2","type":"CircleX"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"H5EyvlafEkD7OO0AgiISQNq/VtnH9RFAmqadszvfEECpQuAWPqsTQGmc/4fgvxBAOJtD9axVEEAZJJK0F6ESQPNH8AiKSBFAStkQyD7BEUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"/nC8hXYMEEDuNwAu2R8RQNoUZq4Y1xBAUBsl/+tME0Ao/jSRc0EQQLbevqudDxFAuEnGC9dWEUD4GsJrQosQQGxGW6Ux8RFA0OlEt7W6EUA=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"ae1832d5-70ec-4ef8-a292-79f28ceda899","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["x"]},"selected":null,"selection_policy":null},"id":"824ab89a-a7a0-4abd-91fd-5f533daeca4e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"824ab89a-a7a0-4abd-91fd-5f533daeca4e","type":"ColumnDataSource"},"glyph":{"id":"ea027014-00a8-4ace-8691-0f39e3b944b1","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dcc3886e-5cc8-4866-b1e3-518da83fc71b","type":"Text"},"selection_glyph":null,"view":{"id":"571fb756-2292-4b87-82fe-87e1f544b5fc","type":"CDSView"}},"id":"d22cbb7e-5e23-4e04-b040-ee3b793fc9eb","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e89cc4b5-a9e8-4018-a303-74180ffbfe43","type":"SquareX"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9a0ba8c-b12b-4f60-a2e5-b2ff30008b19","type":"SquareX"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"0456ecca-ad71-4c7e-ad41-ce3d9cc535da","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd2f86d6-f404-4ec3-81ae-0e1ea4304afc","type":"CircleX"},{"attributes":{"source":{"id":"824ab89a-a7a0-4abd-91fd-5f533daeca4e","type":"ColumnDataSource"}},"id":"571fb756-2292-4b87-82fe-87e1f544b5fc","type":"CDSView"},{"attributes":{"data_source":{"id":"c0765d2a-7aa0-4fc5-bab3-d813eacf1093","type":"ColumnDataSource"},"glyph":{"id":"699dbc4b-1105-4040-acbd-476ee1fd4dc2","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd2f86d6-f404-4ec3-81ae-0e1ea4304afc","type":"CircleX"},"selection_glyph":null,"view":{"id":"e346c028-c9de-4cd1-a694-2406ab51cb6b","type":"CDSView"}},"id":"882cee40-1af0-4823-8031-a4f5cce7f0b3","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"870229fa-d1ea-44e5-85c8-0a35a911efc8","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GaleIeHgGkDrOhm2eicbQM8mel8qsBtAHZCypR9qG0DSVbwXx+sYQBBQqZSMSxpALcM5Zi14GUCeJP0nfNYbQIlpcsFiWBtAeE5eQ2UfGEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"biSdGLWxEUCltsxeSWkTQKpMRDDCcRBADemGqq/vEkBHBGqmc70SQIhNKYFYOBJAYADUgfJSE0DAD2ZsyCARQDxhd8c7oxNAu0UL3j1TEEA=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"e7c95cab-7cf5-4ba9-91c5-1c17a961f2c0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_cross / o+"]},"selected":null,"selection_policy":null},"id":"5c99e561-004e-4506-bc1a-7c6504ba78ce","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ae1832d5-70ec-4ef8-a292-79f28ceda899","type":"ColumnDataSource"},"glyph":{"id":"e89cc4b5-a9e8-4018-a303-74180ffbfe43","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9a0ba8c-b12b-4f60-a2e5-b2ff30008b19","type":"SquareX"},"selection_glyph":null,"view":{"id":"e9aea4c3-2323-422a-8d64-97a546cd5022","type":"CDSView"}},"id":"b2014f40-7bad-4039-9cd2-50527b97021e","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"dcc3886e-5cc8-4866-b1e3-518da83fc71b","type":"Text"},{"attributes":{"source":{"id":"e7c95cab-7cf5-4ba9-91c5-1c17a961f2c0","type":"ColumnDataSource"}},"id":"b9289dda-31d3-4b08-b444-eded8a8b65ae","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"85049b8c-7ab6-4f18-9113-a00ca0c45f0e","type":"Text"},{"attributes":{"source":{"id":"ae1832d5-70ec-4ef8-a292-79f28ceda899","type":"ColumnDataSource"}},"id":"e9aea4c3-2323-422a-8d64-97a546cd5022","type":"CDSView"},{"attributes":{"source":{"id":"5c99e561-004e-4506-bc1a-7c6504ba78ce","type":"ColumnDataSource"}},"id":"987146f2-ad72-468a-8690-da89a818f621","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"115240ed-5cc7-47ae-ad63-51f1ffb88c75","type":"InvertedTriangle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"5c9fe0fd-1e99-40b7-8f1b-4d77f23055c9","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"0mOIHIP2IED1w2AC8g4gQHeDQwBriSBAGZlMY6YrIUAjHGo6jiEgQEig2naRyCFAxcR8/o6OIUCue58f+N8hQBsaCIDToiFAlVe0TwvJIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"IO2ZxSfkEED5rWbsAw4RQJEaCWPEbxJA2IQcm6UYEECMRp74D2ISQJLuDYdpxxBA2rgBw99xEUB3FcmWld0RQGbMAHft+xJAYXxDWcYBE0A=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"9812fc70-aef5-4c41-acbf-354b01f1d71b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_cross"]},"selected":null,"selection_policy":null},"id":"7c24a2fe-cecc-44bc-96e2-f8d280084589","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdcf71e6-7ca8-4828-bfe0-29105a7c3953","type":"X"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"c35be609-9b1c-4815-b39f-f934a82182f6","type":"Text"},{"attributes":{"data_source":{"id":"5c99e561-004e-4506-bc1a-7c6504ba78ce","type":"ColumnDataSource"},"glyph":{"id":"dafd4a6a-a176-4a60-b663-e94e55810c2c","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c9fe0fd-1e99-40b7-8f1b-4d77f23055c9","type":"Text"},"selection_glyph":null,"view":{"id":"987146f2-ad72-468a-8690-da89a818f621","type":"CDSView"}},"id":"85420df2-7855-4bdb-9c1b-40d1071602d9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"f20ad104-ea81-4443-82c8-70c36698a7a6","type":"X"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0ed3551-73a6-4ee8-a834-6e858e31911a","type":"InvertedTriangle"},{"attributes":{"source":{"id":"7c24a2fe-cecc-44bc-96e2-f8d280084589","type":"ColumnDataSource"}},"id":"84cf40d1-eae8-45c7-b53b-19747fbb8254","type":"CDSView"},{"attributes":{"data_source":{"id":"e7c95cab-7cf5-4ba9-91c5-1c17a961f2c0","type":"ColumnDataSource"},"glyph":{"id":"115240ed-5cc7-47ae-ad63-51f1ffb88c75","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e0ed3551-73a6-4ee8-a834-6e858e31911a","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"b9289dda-31d3-4b08-b444-eded8a8b65ae","type":"CDSView"}},"id":"357af16c-2af5-4738-8838-d23bdcb14478","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"dKJiW+MDA0A4PdNdJ+EFQKyKcroxigdAf8ncH+6mBkB66JnB//kFQN3pM/mnkgdAkm1n0mbfBkCpOj7utdAEQL4tYO61NAJAqBCG4uQBAkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"2mqU07MfHkCvpPo+4F4fQA4JvuqPKhxA5TUzpJMNH0Bu9dMYkeoeQPm03MAFRx9Azvh2pjCxHEDy9f7pwzEeQCcSq9Z+3R5A7XToGh/JHEA=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"20c86a31-31eb-4e6a-bd53-030faa7c9d9f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["diamond"]},"selected":null,"selection_policy":null},"id":"961a2899-8368-4a2e-8aa2-94052bf7f644","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9812fc70-aef5-4c41-acbf-354b01f1d71b","type":"ColumnDataSource"},"glyph":{"id":"cdcf71e6-7ca8-4828-bfe0-29105a7c3953","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f20ad104-ea81-4443-82c8-70c36698a7a6","type":"X"},"selection_glyph":null,"view":{"id":"5a87cf04-36ad-49f7-ad98-e968a0855efa","type":"CDSView"}},"id":"ee7ba3fa-0775-47d6-81dd-04904d4f1023","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7c24a2fe-cecc-44bc-96e2-f8d280084589","type":"ColumnDataSource"},"glyph":{"id":"c35be609-9b1c-4815-b39f-f934a82182f6","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"870229fa-d1ea-44e5-85c8-0a35a911efc8","type":"Text"},"selection_glyph":null,"view":{"id":"84cf40d1-eae8-45c7-b53b-19747fbb8254","type":"CDSView"}},"id":"fe29099c-45c1-49ab-a807-878fb9579a42","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20c86a31-31eb-4e6a-bd53-030faa7c9d9f","type":"ColumnDataSource"}},"id":"39308e48-b619-473a-b7a9-48b3a964f5b9","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"4a0bfd1d-beb3-481b-849b-abcd6a96133d","type":"Text"},{"attributes":{"source":{"id":"9812fc70-aef5-4c41-acbf-354b01f1d71b","type":"ColumnDataSource"}},"id":"5a87cf04-36ad-49f7-ad98-e968a0855efa","type":"CDSView"},{"attributes":{"source":{"id":"961a2899-8368-4a2e-8aa2-94052bf7f644","type":"ColumnDataSource"}},"id":"56aeb3b4-73fe-42a0-879c-c96b7767e9d7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e877072-6303-4fe3-8798-641bba6839f6","type":"CircleCross"},{"attributes":{"data_source":{"id":"961a2899-8368-4a2e-8aa2-94052bf7f644","type":"ColumnDataSource"},"glyph":{"id":"85049b8c-7ab6-4f18-9113-a00ca0c45f0e","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1b4828d9-cd09-42f7-b034-a83dd384d03e","type":"Text"},"selection_glyph":null,"view":{"id":"56aeb3b4-73fe-42a0-879c-c96b7767e9d7","type":"CDSView"}},"id":"fd2d553e-75f6-4367-a44a-8a0904f49e8e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"Ej4Ck4veEkB5nZOqjNwRQMye5jK46hNAg1gmNneKEUBwspYoopoRQMFA9lWoHhFA7shdOOkMEED4ThHIRkkRQBa4JEiUQxFAGQV6hq/hEkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"87ARZPoYHkC/1u9WzbEeQDfdpSvpIB1Agzzb4DeYH0Adn3NrrTUdQGcQxcsTdR9ARKInfaRCHUAam24mrU4cQIJ16LWkjx9A2vFU01A/HEA=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"bcf27ccb-3082-4c10-96d6-26e1ca99658a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["cross / +"]},"selected":null,"selection_policy":null},"id":"91bdc2ec-76cc-40ae-ab7a-cea1739e7b23","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"91bdc2ec-76cc-40ae-ab7a-cea1739e7b23","type":"ColumnDataSource"},"glyph":{"id":"4a0bfd1d-beb3-481b-849b-abcd6a96133d","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1f31e5e-4d2c-4711-b2a8-b46828142da0","type":"Text"},"selection_glyph":null,"view":{"id":"e4019e3f-893b-48fa-bea6-84596ac78bff","type":"CDSView"}},"id":"e8fb32f0-bd82-4368-b3d7-105b4e3224a1","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ae9fd98-6bb8-4d50-bba5-bf38da2fa6ef","type":"SquareCross"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad4465b8-ffa3-46b4-a505-81724587abe0","type":"SquareCross"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"1b4828d9-cd09-42f7-b034-a83dd384d03e","type":"Text"},{"attributes":{},"id":"de4ab9d0-c14f-4880-954f-1cbe381a20fd","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b620e30c-476c-47d5-8dff-db0107105b03","type":"CircleCross"},{"attributes":{"source":{"id":"91bdc2ec-76cc-40ae-ab7a-cea1739e7b23","type":"ColumnDataSource"}},"id":"e4019e3f-893b-48fa-bea6-84596ac78bff","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"c25ca95c-9ed5-438f-8f9b-2f581433ffde","subtype":"Figure","type":"Plot"},"ticker":{"id":"de4ab9d0-c14f-4880-954f-1cbe381a20fd","type":"BasicTicker"}},"id":"8e2e9ac9-06ea-4566-80b9-cfeee3123c51","type":"Grid"},{"attributes":{"data_source":{"id":"20c86a31-31eb-4e6a-bd53-030faa7c9d9f","type":"ColumnDataSource"},"glyph":{"id":"3e877072-6303-4fe3-8798-641bba6839f6","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b620e30c-476c-47d5-8dff-db0107105b03","type":"CircleCross"},"selection_glyph":null,"view":{"id":"39308e48-b619-473a-b7a9-48b3a964f5b9","type":"CDSView"}},"id":"ebb0b8e9-bda5-4504-aeea-bb3295897344","type":"GlyphRenderer"},{"attributes":{},"id":"8bcde7ef-894d-4bd3-a732-d3056dd0604b","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"jiM0iyRRG0CxlNcy/B8YQNhyFobvehhA4IB9325pGECKWcX07qEZQKl4FQpD3RlAnbbGMm5SG0DOAYP9x24aQDZ7nerecRtAnugg1D5SG0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"bsIX2Zs8HkCc6CqcQtcdQPr0uB3Y/R9A2IHSAt2/HEAo14vCICwfQLWsQ5VZkx1AYTMNsSQgHUAQceoQRrUcQCH1Fk7JTB1AZVAubRIMHkA=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"b3a94b24-6733-4139-8ceb-28695c7e620f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"62c18dc5-bcff-4a4f-a41b-e4af3fc90bf3","type":"ColumnDataSource"}},"id":"0f560616-9a5e-4ac6-9f31-71c9fa74e044","type":"CDSView"},{"attributes":{"data_source":{"id":"bcf27ccb-3082-4c10-96d6-26e1ca99658a","type":"ColumnDataSource"},"glyph":{"id":"2ae9fd98-6bb8-4d50-bba5-bf38da2fa6ef","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ad4465b8-ffa3-46b4-a505-81724587abe0","type":"SquareCross"},"selection_glyph":null,"view":{"id":"f5b9f862-2816-4d5b-9a8a-d07cf1595097","type":"CDSView"}},"id":"c59fa6fa-afbd-491d-9776-664441140410","type":"GlyphRenderer"},{"attributes":{},"id":"d83dc992-4dca-4a2f-93f7-0f92fb74a417","type":"HelpTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"f1f31e5e-4d2c-4711-b2a8-b46828142da0","type":"Text"},{"attributes":{"source":{"id":"b3a94b24-6733-4139-8ceb-28695c7e620f","type":"ColumnDataSource"}},"id":"652825c9-c0c6-4e0d-b7b0-947bc787c3bc","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bbd4cb25-c111-4f51-a6d4-b3f9e799925d","type":"Square"},{"attributes":{"source":{"id":"bcf27ccb-3082-4c10-96d6-26e1ca99658a","type":"ColumnDataSource"}},"id":"f5b9f862-2816-4d5b-9a8a-d07cf1595097","type":"CDSView"},{"attributes":{},"id":"cd0118cf-ac13-42a5-84a5-4b3832406057","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"7253fcb8-f810-4127-b16c-ddb01ecd0789","type":"Diamond"},{"attributes":{},"id":"0fa878cb-9106-45e5-b287-9c0654d59b63","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"ipnKa9ySIECX6vcGyaghQBs7B+PEPCBA0XDhzCo2IUD0EMrMzg8gQFHcsYK+VCFAGDvGFT72IUCKQMaP950gQIV29wL/6iBAPcF9OC2DIUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"1wgkWki3HEClVe0Z+8wfQEh1xMgfYx9AkToWbHEvHkDFGNSOaR8fQHcOP69dAR5AInrDt58lHkBfCNL8mfccQGNB6Aj1nRxAOntaa3RyHkA=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"931b4c58-3f69-4a11-9d72-52780291e702","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_x / ox"]},"selected":null,"selection_policy":null},"id":"9ff9bfb4-6d16-4fa6-9c7c-f1b9f1ae1acf","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"23e5d506-0501-4620-9367-cb323a4ca75b","type":"ColumnDataSource"},"glyph":{"id":"bbd4cb25-c111-4f51-a6d4-b3f9e799925d","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"908912b1-7ad9-4f05-868b-a913e28bf518","type":"Square"},"selection_glyph":null,"view":{"id":"014d080d-5dd1-474d-84f2-37d76e071b0d","type":"CDSView"}},"id":"29bce159-cf11-48ce-967b-e92a99e5f1c4","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8392af7e-f081-4f76-af46-14161b723fb8","type":"Cross"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"908912b1-7ad9-4f05-868b-a913e28bf518","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d526e1b2-6aad-4822-9ee8-dba620c352ef","type":"Cross"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"ZLZMsTcrEUDqm2hI6WoRQNKQkUymExJAlDGyx3utE0DEXN//HIIRQGmzqtKr+hBAF6PM0UbCEUDe5THt6fQSQLx2leAzZxBAJsTrXIDtE0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"13Cq5OWl8D8kW9mZwsfxPyi4h4DP7PE/qsryxTqi8D8+SrYDcJ77P8JmWoVspPw/ZE8r6NKy8j/ATP7XyBT6PzRihbZqcfk/kGYeJljx+z8=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"23e5d506-0501-4620-9367-cb323a4ca75b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a37dc9f9-b9c0-4c8d-8933-a0c771f771b0","type":"Diamond"},{"attributes":{"data_source":{"id":"b3a94b24-6733-4139-8ceb-28695c7e620f","type":"ColumnDataSource"},"glyph":{"id":"7253fcb8-f810-4127-b16c-ddb01ecd0789","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a37dc9f9-b9c0-4c8d-8933-a0c771f771b0","type":"Diamond"},"selection_glyph":null,"view":{"id":"652825c9-c0c6-4e0d-b7b0-947bc787c3bc","type":"CDSView"}},"id":"7f593d09-ab85-408d-977a-82e2db3cc1d3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle / o"]},"selected":null,"selection_policy":null},"id":"7bb3dd94-cb1e-4988-a48c-f88448844bef","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"38d22bfb-4ef9-4880-923a-db63d0815c4e","type":"ColumnDataSource"},"glyph":{"id":"611f4538-dd4f-4bab-a7a8-c58622683b44","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a90be33-0988-4a5e-919a-96ed0c92ee95","type":"Circle"},"selection_glyph":null,"view":{"id":"14e23928-6021-416f-b502-d500abd00633","type":"CDSView"}},"id":"a0feaba1-1e50-484b-93f8-938cd688e552","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"931b4c58-3f69-4a11-9d72-52780291e702","type":"ColumnDataSource"},"glyph":{"id":"8392af7e-f081-4f76-af46-14161b723fb8","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d526e1b2-6aad-4822-9ee8-dba620c352ef","type":"Cross"},"selection_glyph":null,"view":{"id":"840f0db0-3b0e-4153-b4a3-a1a1b1f025c1","type":"CDSView"}},"id":"fc1b4824-256b-4840-9956-22e13e5b05a7","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"9b06f308-922c-4cfe-b4f0-400fe08bcfec","type":"LinearAxis"}],"left":[{"id":"70ee8ed1-7d11-47aa-8dea-e6f6ee04a2b1","type":"LinearAxis"}],"renderers":[{"id":"9b06f308-922c-4cfe-b4f0-400fe08bcfec","type":"LinearAxis"},{"id":"c24e38d2-9cd6-4e43-b614-22037f1b9880","type":"Grid"},{"id":"70ee8ed1-7d11-47aa-8dea-e6f6ee04a2b1","type":"LinearAxis"},{"id":"8e2e9ac9-06ea-4566-80b9-cfeee3123c51","type":"Grid"},{"id":"0ff21d2f-7a0a-4349-8219-9d4e38749076","type":"BoxAnnotation"},{"id":"a0feaba1-1e50-484b-93f8-938cd688e552","type":"GlyphRenderer"},{"id":"29bce159-cf11-48ce-967b-e92a99e5f1c4","type":"GlyphRenderer"},{"id":"05c0d1e7-9a04-497b-ab52-7c32de7b357e","type":"GlyphRenderer"},{"id":"ff430d14-1816-47e0-b8e8-4052bc09efc7","type":"GlyphRenderer"},{"id":"882cee40-1af0-4823-8031-a4f5cce7f0b3","type":"GlyphRenderer"},{"id":"b2014f40-7bad-4039-9cd2-50527b97021e","type":"GlyphRenderer"},{"id":"357af16c-2af5-4738-8838-d23bdcb14478","type":"GlyphRenderer"},{"id":"ee7ba3fa-0775-47d6-81dd-04904d4f1023","type":"GlyphRenderer"},{"id":"ebb0b8e9-bda5-4504-aeea-bb3295897344","type":"GlyphRenderer"},{"id":"c59fa6fa-afbd-491d-9776-664441140410","type":"GlyphRenderer"},{"id":"7f593d09-ab85-408d-977a-82e2db3cc1d3","type":"GlyphRenderer"},{"id":"fc1b4824-256b-4840-9956-22e13e5b05a7","type":"GlyphRenderer"},{"id":"c5232994-1fb7-46a3-b51a-7709e9db078f","type":"GlyphRenderer"},{"id":"4357c4ab-d956-4422-84a7-8ca0f5cdc52e","type":"GlyphRenderer"},{"id":"47ffc0dd-dd83-4a6b-9459-05d470a5ff7e","type":"GlyphRenderer"},{"id":"6df2f87a-9d4b-4c39-adda-aae487c4dc3e","type":"GlyphRenderer"},{"id":"ae3745bf-1a2d-4f7b-b22b-c92cc7e5fc25","type":"GlyphRenderer"},{"id":"21ea1dce-bf37-471d-aed2-2bc4afb9e7b5","type":"GlyphRenderer"},{"id":"165c4cb6-19f8-4f2c-83d9-5b5ba80e13f6","type":"GlyphRenderer"},{"id":"d22cbb7e-5e23-4e04-b040-ee3b793fc9eb","type":"GlyphRenderer"},{"id":"85420df2-7855-4bdb-9c1b-40d1071602d9","type":"GlyphRenderer"},{"id":"fe29099c-45c1-49ab-a807-878fb9579a42","type":"GlyphRenderer"},{"id":"fd2d553e-75f6-4367-a44a-8a0904f49e8e","type":"GlyphRenderer"},{"id":"e8fb32f0-bd82-4368-b3d7-105b4e3224a1","type":"GlyphRenderer"}],"title":{"id":"75233c0f-651c-4e02-90dd-ffd6d237b544","type":"Title"},"toolbar":{"id":"0f94cc90-e3fd-4dd7-84b3-65efc79f98e4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4cd22e2a-4f26-49b8-ad96-6f764bd707ce","type":"DataRange1d"},"x_scale":{"id":"2d9264dd-385b-4fb2-be41-7e4d30693427","type":"LinearScale"},"y_range":{"id":"46574fd7-3722-4a20-9f6e-dbe4a35af416","type":"DataRange1d"},"y_scale":{"id":"294029c3-7b67-4445-8812-c2a4a8c41318","type":"LinearScale"}},"id":"c25ca95c-9ed5-438f-8f9b-2f581433ffde","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7bb3dd94-cb1e-4988-a48c-f88448844bef","type":"ColumnDataSource"},"glyph":{"id":"18797862-1bc0-44b7-8b52-f0b5a980bb82","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"81af046d-cb95-4115-aca5-ecde040a67c3","type":"Text"},"selection_glyph":null,"view":{"id":"fdb9065c-9cd6-473e-b365-8ef257e68143","type":"CDSView"}},"id":"c5232994-1fb7-46a3-b51a-7709e9db078f","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Bokeh Markers"},"id":"75233c0f-651c-4e02-90dd-ffd6d237b544","type":"Title"},{"attributes":{"source":{"id":"931b4c58-3f69-4a11-9d72-52780291e702","type":"ColumnDataSource"}},"id":"840f0db0-3b0e-4153-b4a3-a1a1b1f025c1","type":"CDSView"},{"attributes":{"callback":null},"id":"4cd22e2a-4f26-49b8-ad96-6f764bd707ce","type":"DataRange1d"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"18797862-1bc0-44b7-8b52-f0b5a980bb82","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ae6cf56-c23f-4050-b923-05a94e238437","type":"PanTool"},{"id":"997d0229-3a05-4f8a-a8ed-fb205385e348","type":"WheelZoomTool"},{"id":"4d982b2f-17ca-4bdd-a881-795cf06cf09f","type":"BoxZoomTool"},{"id":"0000a323-64a6-4c72-a521-f30c81703981","type":"SaveTool"},{"id":"8bcde7ef-894d-4bd3-a732-d3056dd0604b","type":"ResetTool"},{"id":"d83dc992-4dca-4a2f-93f7-0f92fb74a417","type":"HelpTool"}]},"id":"0f94cc90-e3fd-4dd7-84b3-65efc79f98e4","type":"Toolbar"},{"attributes":{"source":{"id":"7bb3dd94-cb1e-4988-a48c-f88448844bef","type":"ColumnDataSource"}},"id":"fdb9065c-9cd6-473e-b365-8ef257e68143","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"611f4538-dd4f-4bab-a7a8-c58622683b44","type":"Circle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"d17ba4f3-e06c-4831-9828-660dc8e51409","type":"Text"},{"attributes":{},"id":"9ae6cf56-c23f-4050-b923-05a94e238437","type":"PanTool"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square"]},"selected":null,"selection_policy":null},"id":"0081196c-7c40-4ca3-a298-063aaf06da6c","type":"ColumnDataSource"},{"attributes":{"source":{"id":"38d22bfb-4ef9-4880-923a-db63d0815c4e","type":"ColumnDataSource"}},"id":"14e23928-6021-416f-b502-d500abd00633","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"81af046d-cb95-4115-aca5-ecde040a67c3","type":"Text"},{"attributes":{},"id":"997d0229-3a05-4f8a-a8ed-fb205385e348","type":"WheelZoomTool"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"c331ca60-64b0-49f7-a7d4-3d45afe920fe","type":"Text"},{"attributes":{"overlay":{"id":"0ff21d2f-7a0a-4349-8219-9d4e38749076","type":"BoxAnnotation"}},"id":"4d982b2f-17ca-4bdd-a881-795cf06cf09f","type":"BoxZoomTool"},{"attributes":{"source":{"id":"0081196c-7c40-4ca3-a298-063aaf06da6c","type":"ColumnDataSource"}},"id":"67058e16-82ab-4f07-bfa8-bc1d8cadb991","type":"CDSView"},{"attributes":{},"id":"0000a323-64a6-4c72-a521-f30c81703981","type":"SaveTool"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"8eaffb49-ef82-4e29-9288-8d002140b5c1","type":"Text"},{"attributes":{},"id":"2d9264dd-385b-4fb2-be41-7e4d30693427","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["triangle"]},"selected":null,"selection_policy":null},"id":"6a457ee1-df92-450a-996f-b955a7ea09ac","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0081196c-7c40-4ca3-a298-063aaf06da6c","type":"ColumnDataSource"},"glyph":{"id":"c331ca60-64b0-49f7-a7d4-3d45afe920fe","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d17ba4f3-e06c-4831-9828-660dc8e51409","type":"Text"},"selection_glyph":null,"view":{"id":"67058e16-82ab-4f07-bfa8-bc1d8cadb991","type":"CDSView"}},"id":"4357c4ab-d956-4422-84a7-8ca0f5cdc52e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"46574fd7-3722-4a20-9f6e-dbe4a35af416","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"PqA1dM/OBUBTTamJQGAAQNRNw2SM1QJABLxcFm5FAED23IyFczsBQMZWTrvdRAZArQOca5VcAkAcBoJbOxQEQKvgYtwPbQNAAAsKnfkVB0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"UvDkN7EI/D88SyY9x377P2I+1FiXPf0/GtTNHJN1+T8eumaPCXH4P4T/lVz2mP4/wpru9jzA8z9Oiamr8QD4P07cPy56K/8/zT2X7cF68j8=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"38d22bfb-4ef9-4880-923a-db63d0815c4e","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"1387b8e1-88d6-4085-917a-db194a683fa5","type":"Text"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0ff21d2f-7a0a-4349-8219-9d4e38749076","type":"BoxAnnotation"},{"attributes":{"source":{"id":"6a457ee1-df92-450a-996f-b955a7ea09ac","type":"ColumnDataSource"}},"id":"99354b71-09d9-4d72-913d-944d02bcac6c","type":"CDSView"},{"attributes":{"data_source":{"id":"6a457ee1-df92-450a-996f-b955a7ea09ac","type":"ColumnDataSource"},"glyph":{"id":"5e23677d-de78-4be3-8664-2fb76d0b05f1","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d1adfb8f-0b25-45f9-9d9c-10c340f4e707","type":"Text"},"selection_glyph":null,"view":{"id":"99354b71-09d9-4d72-913d-944d02bcac6c","type":"CDSView"}},"id":"47ffc0dd-dd83-4a6b-9459-05d470a5ff7e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a90be33-0988-4a5e-919a-96ed0c92ee95","type":"Circle"},{"attributes":{"source":{"id":"23e5d506-0501-4620-9367-cb323a4ca75b","type":"ColumnDataSource"}},"id":"014d080d-5dd1-474d-84f2-37d76e071b0d","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["asterisk / *"]},"selected":null,"selection_policy":null},"id":"62c18dc5-bcff-4a4f-a41b-e4af3fc90bf3","type":"ColumnDataSource"},{"attributes":{},"id":"294029c3-7b67-4445-8812-c2a4a8c41318","type":"LinearScale"},{"attributes":{"data_source":{"id":"62c18dc5-bcff-4a4f-a41b-e4af3fc90bf3","type":"ColumnDataSource"},"glyph":{"id":"1387b8e1-88d6-4085-917a-db194a683fa5","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6e2bf568-5df3-44c8-9eed-00297975ce53","type":"Text"},"selection_glyph":null,"view":{"id":"0f560616-9a5e-4ac6-9f31-71c9fa74e044","type":"CDSView"}},"id":"6df2f87a-9d4b-4c39-adda-aae487c4dc3e","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c25ca95c-9ed5-438f-8f9b-2f581433ffde","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6534bca-b730-4188-ae68-5137e2bd103d","type":"BasicTicker"}},"id":"c24e38d2-9cd6-4e43-b614-22037f1b9880","type":"Grid"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"d1adfb8f-0b25-45f9-9d9c-10c340f4e707","type":"Text"},{"attributes":{"formatter":{"id":"0fa878cb-9106-45e5-b287-9c0654d59b63","type":"BasicTickFormatter"},"plot":{"id":"c25ca95c-9ed5-438f-8f9b-2f581433ffde","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6534bca-b730-4188-ae68-5137e2bd103d","type":"BasicTicker"},"visible":false},"id":"9b06f308-922c-4cfe-b4f0-400fe08bcfec","type":"LinearAxis"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"6e2bf568-5df3-44c8-9eed-00297975ce53","type":"Text"},{"attributes":{},"id":"c6534bca-b730-4188-ae68-5137e2bd103d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"cd0118cf-ac13-42a5-84a5-4b3832406057","type":"BasicTickFormatter"},"plot":{"id":"c25ca95c-9ed5-438f-8f9b-2f581433ffde","subtype":"Figure","type":"Plot"},"ticker":{"id":"de4ab9d0-c14f-4880-954f-1cbe381a20fd","type":"BasicTicker"},"visible":false},"id":"70ee8ed1-7d11-47aa-8dea-e6f6ee04a2b1","type":"LinearAxis"}],"root_ids":["c25ca95c-9ed5-438f-8f9b-2f581433ffde"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"d865f356-7947-4f3c-a8f7-083c809f3021","elementid":"ddb01d4b-e1f7-48a6-93ac-8410abed8f64","modelid":"c25ca95c-9ed5-438f-8f9b-2f581433ffde"}];
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