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
      };var element = document.getElementById("15633111-932a-40f4-9c41-989c10dba04c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '15633111-932a-40f4-9c41-989c10dba04c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"49ce784d-ae2d-4c0c-ada7-9c2c94fc0e85":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"c09cd9f8-88d0-4325-9341-01456c01964f","subtype":"Figure","type":"Plot"},"ticker":{"id":"51db0cfb-77cd-417d-bb14-976627f58186","type":"LogTicker"}},"id":"d600c97e-66da-4ed4-a062-b4265358e189","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"e6d6ddce-e746-4d86-96a9-230ff8fe6aff","type":"Line"},{"attributes":{},"id":"423da38e-d9a7-472c-9fb6-2f519e7a3279","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"a448666e-dc63-4407-9bcf-319ed8c52a74","type":"Line"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"49565b2a-8eb4-4cf5-b663-58d85d94ad9e","type":"GlyphRenderer"},{"id":"45786c70-47ca-4ff5-aee4-cf2cec5b837e","type":"GlyphRenderer"}]},"id":"277bc4c8-8943-4b00-a3ed-7f80fdae8595","type":"LegendItem"},{"attributes":{"source":{"id":"ed9c5dec-f142-4396-b8cd-657ba8c12318","type":"ColumnDataSource"}},"id":"0202eb11-ad64-4a46-ae52-8f2468768b07","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":null,"selection_policy":null},"id":"b7a7225e-394e-4631-b093-28920d194544","type":"ColumnDataSource"},{"attributes":{"source":{"id":"46f931a9-898d-4c64-ae78-134f67002630","type":"ColumnDataSource"}},"id":"c5570d23-48ed-4765-9d3a-a9705fb694e1","type":"CDSView"},{"attributes":{"data_source":{"id":"5556f29e-278f-4645-bf0f-2ed1af1f2970","type":"ColumnDataSource"},"glyph":{"id":"fd320a75-5598-4fea-b1ef-026c98757047","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a448666e-dc63-4407-9bcf-319ed8c52a74","type":"Line"},"selection_glyph":null,"view":{"id":"f3efe20d-dcf9-47e9-b8d9-7db601ffd3a4","type":"CDSView"}},"id":"20e3991f-f15e-4e74-b698-d87df0ee2e81","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"f63d5d91-e3a5-4131-972f-04dc23bc66d7","type":"Range1d"},{"attributes":{"data_source":{"id":"ed9c5dec-f142-4396-b8cd-657ba8c12318","type":"ColumnDataSource"},"glyph":{"id":"ccea5fd4-97d1-4d92-a069-92483343b5a7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e6d6ddce-e746-4d86-96a9-230ff8fe6aff","type":"Line"},"selection_glyph":null,"view":{"id":"0202eb11-ad64-4a46-ae52-8f2468768b07","type":"CDSView"}},"id":"77e24954-e605-4af9-8efa-5da7c2a2668e","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"20e3991f-f15e-4e74-b698-d87df0ee2e81","type":"GlyphRenderer"}]},"id":"1d33ac47-b467-47c7-a83b-1bf01bed521d","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"84f9f729-db8f-4dc8-bda0-00657cbe82b6","type":"BoxAnnotation"},{"attributes":{},"id":"2b657056-06ff-4908-85ce-36894c1eece0","type":"BasicTicker"},{"attributes":{},"id":"59b56e34-eb4d-4429-82f2-20b8ea00e9db","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":null,"selection_policy":null},"id":"5556f29e-278f-4645-bf0f-2ed1af1f2970","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ed3d6aad-6ff1-43bf-ac7b-470e5093f701","type":"ColumnDataSource"},"glyph":{"id":"45ed321e-3182-49a7-800e-3dac88467455","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3cf66a33-1602-41fc-b07e-8603e6531872","type":"Line"},"selection_glyph":null,"view":{"id":"2e9e9d45-a5f8-45f4-b8a5-fc24573fc35b","type":"CDSView"}},"id":"04ba7461-6a05-4f7d-9a4a-70d08ac22bb7","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ffc2381c-437e-418c-b32c-20bd33b87254","type":"ColumnDataSource"}},"id":"5b627bcc-40a6-4713-9d52-1f2c371a775a","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"334b44ea-6f1e-4ad2-b14e-4faf4d0fd078","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"eabb3050-9541-4736-bf6b-c7b881a4680e","type":"Circle"},{"attributes":{"data_source":{"id":"b7a7225e-394e-4631-b093-28920d194544","type":"ColumnDataSource"},"glyph":{"id":"334b44ea-6f1e-4ad2-b14e-4faf4d0fd078","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a2e25fb9-769f-4756-b65f-b746f19c2f36","type":"Circle"},"selection_glyph":null,"view":{"id":"441cc4b7-8006-45bf-a03e-a6b44c455dc3","type":"CDSView"}},"id":"45786c70-47ca-4ff5-aee4-cf2cec5b837e","type":"GlyphRenderer"},{"attributes":{},"id":"60db47e4-8285-4d5c-936f-4c93f749bd7a","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b7a7225e-394e-4631-b093-28920d194544","type":"ColumnDataSource"}},"id":"441cc4b7-8006-45bf-a03e-a6b44c455dc3","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3cf66a33-1602-41fc-b07e-8603e6531872","type":"Line"},{"attributes":{"ticker":null},"id":"62324a43-6b38-4756-a758-a4318a1def44","type":"LogTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":null,"selection_policy":null},"id":"ed3d6aad-6ff1-43bf-ac7b-470e5093f701","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"da19f5c4-45f7-4fb8-88dc-67f87f343b8d","type":"LegendItem"},{"id":"1d33ac47-b467-47c7-a83b-1bf01bed521d","type":"LegendItem"},{"id":"277bc4c8-8943-4b00-a3ed-7f80fdae8595","type":"LegendItem"},{"id":"db05d1a6-f250-4332-8115-4516a2165fe7","type":"LegendItem"}],"plot":{"id":"c09cd9f8-88d0-4325-9341-01456c01964f","subtype":"Figure","type":"Plot"}},"id":"bcb08722-8092-44e4-b514-9a53e59c141d","type":"Legend"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"45ed321e-3182-49a7-800e-3dac88467455","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":null,"selection_policy":null},"id":"ed9c5dec-f142-4396-b8cd-657ba8c12318","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2e25fb9-769f-4756-b65f-b746f19c2f36","type":"Circle"},{"attributes":{"below":[{"id":"90991390-a138-4f05-926b-b899aa8942d4","type":"LinearAxis"}],"left":[{"id":"1368e385-7821-47cd-9850-0b28bd3252f8","type":"LogAxis"}],"renderers":[{"id":"90991390-a138-4f05-926b-b899aa8942d4","type":"LinearAxis"},{"id":"0fb7c368-4c0c-4bc7-9271-729a431d2956","type":"Grid"},{"id":"1368e385-7821-47cd-9850-0b28bd3252f8","type":"LogAxis"},{"id":"d600c97e-66da-4ed4-a062-b4265358e189","type":"Grid"},{"id":"84f9f729-db8f-4dc8-bda0-00657cbe82b6","type":"BoxAnnotation"},{"id":"bcb08722-8092-44e4-b514-9a53e59c141d","type":"Legend"},{"id":"77e24954-e605-4af9-8efa-5da7c2a2668e","type":"GlyphRenderer"},{"id":"5c70d1e8-288b-451f-8cfd-3c3fdccdafe6","type":"GlyphRenderer"},{"id":"20e3991f-f15e-4e74-b698-d87df0ee2e81","type":"GlyphRenderer"},{"id":"49565b2a-8eb4-4cf5-b663-58d85d94ad9e","type":"GlyphRenderer"},{"id":"45786c70-47ca-4ff5-aee4-cf2cec5b837e","type":"GlyphRenderer"},{"id":"04ba7461-6a05-4f7d-9a4a-70d08ac22bb7","type":"GlyphRenderer"}],"title":{"id":"7a3dc0fa-8a07-475d-8521-65479fe8b393","type":"Title"},"toolbar":{"id":"add92925-991b-4e4e-a1c7-f25df924b5be","type":"Toolbar"},"x_range":{"id":"da916aeb-a9ca-4077-a238-f0dabb77b392","type":"DataRange1d"},"x_scale":{"id":"52ec797d-db2c-4a01-a7d7-9606d467a2b9","type":"LinearScale"},"y_range":{"id":"f63d5d91-e3a5-4131-972f-04dc23bc66d7","type":"Range1d"},"y_scale":{"id":"e62ffe8d-c908-4fcc-a575-9920e5de0d2d","type":"LogScale"}},"id":"c09cd9f8-88d0-4325-9341-01456c01964f","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"46f931a9-898d-4c64-ae78-134f67002630","type":"ColumnDataSource"},"glyph":{"id":"cf7cbfff-b731-4b20-9da4-71ba599e588d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eabb3050-9541-4736-bf6b-c7b881a4680e","type":"Circle"},"selection_glyph":null,"view":{"id":"c5570d23-48ed-4765-9d3a-a9705fb694e1","type":"CDSView"}},"id":"5c70d1e8-288b-451f-8cfd-3c3fdccdafe6","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"fd320a75-5598-4fea-b1ef-026c98757047","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf7cbfff-b731-4b20-9da4-71ba599e588d","type":"Circle"},{"attributes":{"source":{"id":"ed3d6aad-6ff1-43bf-ac7b-470e5093f701","type":"ColumnDataSource"}},"id":"2e9e9d45-a5f8-45f4-b8a5-fc24573fc35b","type":"CDSView"},{"attributes":{"data_source":{"id":"ffc2381c-437e-418c-b32c-20bd33b87254","type":"ColumnDataSource"},"glyph":{"id":"42b67e61-5e2a-4f19-9755-ee121357e3cf","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e9bf511f-440f-4246-b86b-4de04eb48a8e","type":"Line"},"selection_glyph":null,"view":{"id":"5b627bcc-40a6-4713-9d52-1f2c371a775a","type":"CDSView"}},"id":"49565b2a-8eb4-4cf5-b663-58d85d94ad9e","type":"GlyphRenderer"},{"attributes":{},"id":"b08b32ce-9b79-414b-9d5c-920a82debf06","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"e9bf511f-440f-4246-b86b-4de04eb48a8e","type":"Line"},{"attributes":{"num_minor_ticks":10},"id":"51db0cfb-77cd-417d-bb14-976627f58186","type":"LogTicker"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"04ba7461-6a05-4f7d-9a4a-70d08ac22bb7","type":"GlyphRenderer"}]},"id":"db05d1a6-f250-4332-8115-4516a2165fe7","type":"LegendItem"},{"attributes":{"source":{"id":"5556f29e-278f-4645-bf0f-2ed1af1f2970","type":"ColumnDataSource"}},"id":"f3efe20d-dcf9-47e9-b8d9-7db601ffd3a4","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"423da38e-d9a7-472c-9fb6-2f519e7a3279","type":"PanTool"},{"id":"d8d3f97e-19f2-44f3-818f-7a765814a147","type":"BoxZoomTool"},{"id":"b08b32ce-9b79-414b-9d5c-920a82debf06","type":"ResetTool"},{"id":"59b56e34-eb4d-4429-82f2-20b8ea00e9db","type":"SaveTool"}]},"id":"add92925-991b-4e4e-a1c7-f25df924b5be","type":"Toolbar"},{"attributes":{"overlay":{"id":"84f9f729-db8f-4dc8-bda0-00657cbe82b6","type":"BoxAnnotation"}},"id":"d8d3f97e-19f2-44f3-818f-7a765814a147","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":null,"selection_policy":null},"id":"ffc2381c-437e-418c-b32c-20bd33b87254","type":"ColumnDataSource"},{"attributes":{},"id":"e62ffe8d-c908-4fcc-a575-9920e5de0d2d","type":"LogScale"},{"attributes":{"axis_label":"particles","formatter":{"id":"62324a43-6b38-4756-a758-a4318a1def44","type":"LogTickFormatter"},"plot":{"id":"c09cd9f8-88d0-4325-9341-01456c01964f","subtype":"Figure","type":"Plot"},"ticker":{"id":"51db0cfb-77cd-417d-bb14-976627f58186","type":"LogTicker"}},"id":"1368e385-7821-47cd-9850-0b28bd3252f8","type":"LogAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":null,"selection_policy":null},"id":"46f931a9-898d-4c64-ae78-134f67002630","type":"ColumnDataSource"},{"attributes":{},"id":"52ec797d-db2c-4a01-a7d7-9606d467a2b9","type":"LinearScale"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"42b67e61-5e2a-4f19-9755-ee121357e3cf","type":"Line"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"77e24954-e605-4af9-8efa-5da7c2a2668e","type":"GlyphRenderer"},{"id":"5c70d1e8-288b-451f-8cfd-3c3fdccdafe6","type":"GlyphRenderer"}]},"id":"da19f5c4-45f7-4fb8-88dc-67f87f343b8d","type":"LegendItem"},{"attributes":{"callback":null},"id":"da916aeb-a9ca-4077-a238-f0dabb77b392","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"ccea5fd4-97d1-4d92-a069-92483343b5a7","type":"Line"},{"attributes":{"plot":{"id":"c09cd9f8-88d0-4325-9341-01456c01964f","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b657056-06ff-4908-85ce-36894c1eece0","type":"BasicTicker"}},"id":"0fb7c368-4c0c-4bc7-9271-729a431d2956","type":"Grid"},{"attributes":{"plot":null,"text":"log axis example"},"id":"7a3dc0fa-8a07-475d-8521-65479fe8b393","type":"Title"},{"attributes":{"axis_label":"sections","formatter":{"id":"60db47e4-8285-4d5c-936f-4c93f749bd7a","type":"BasicTickFormatter"},"plot":{"id":"c09cd9f8-88d0-4325-9341-01456c01964f","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b657056-06ff-4908-85ce-36894c1eece0","type":"BasicTicker"}},"id":"90991390-a138-4f05-926b-b899aa8942d4","type":"LinearAxis"}],"root_ids":["c09cd9f8-88d0-4325-9341-01456c01964f"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"49ce784d-ae2d-4c0c-ada7-9c2c94fc0e85","elementid":"15633111-932a-40f4-9c41-989c10dba04c","modelid":"c09cd9f8-88d0-4325-9341-01456c01964f"}];
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