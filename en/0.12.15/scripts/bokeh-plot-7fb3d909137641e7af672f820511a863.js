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
      };var element = document.getElementById("ac4a96cd-64af-4321-b322-c5d68e51a86d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac4a96cd-64af-4321-b322-c5d68e51a86d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1c2c5efb-7090-450d-bcba-87fe1a70937f":{"roots":{"references":[{"attributes":{"source":{"id":"83d0e7d1-a6ff-44da-8812-195e20f5d7b3","type":"ColumnDataSource"}},"id":"564738fe-16d0-4b2a-8bba-bc078478cb98","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"48916ac1-e26b-472e-807a-245306e0c835","type":"Rect"},{"attributes":{"source":{"id":"482c33a8-79f1-4237-8ada-303fa485035f","type":"ColumnDataSource"}},"id":"e21a464d-e16b-42a8-bd85-6976dae441d4","type":"CDSView"},{"attributes":{"source":{"id":"d7f01db8-87d4-4cfa-ae32-782a0210da3b","type":"ColumnDataSource"}},"id":"3543b658-6205-41e9-aacc-9c66a66a7e0f","type":"CDSView"},{"attributes":{},"id":"261f2707-84f1-4692-9317-fccb40c02b0b","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"abdedfcb-e552-4da1-8261-ee3159d817a2","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"nPwEyi5v5j8W9cN3o3DjP0Bn6KCvt/o/UvcltPKI+j9MVkC2NHAEQATuq54JZQRA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"FzYl+Dfnsz9Xz7Eyiqt3v+w/u147Ju8/vwhwDEQw8D/6e1eRBg3/P4UmklN+Nf8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":null,"selection_policy":null},"id":"993394a8-37d5-43e6-b5a0-e8d7dcec504f","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"04af4282-2b63-4935-a292-8e187958a54b","type":"VBar"},{"attributes":{"data_source":{"id":"d7f01db8-87d4-4cfa-ae32-782a0210da3b","type":"ColumnDataSource"},"glyph":{"id":"039d5762-f20f-4329-9ab7-4e35eded0964","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4d2c51f6-d1f6-4efc-8243-b29df1db650e","type":"VBar"},"selection_glyph":null,"view":{"id":"3543b658-6205-41e9-aacc-9c66a66a7e0f","type":"CDSView"}},"id":"454aac39-bba6-4d33-a152-8bfeea9d0c97","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"039d5762-f20f-4329-9ab7-4e35eded0964","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6b1bb867-e446-414f-a09a-7e9b58b946b5","type":"SaveTool"}]},"id":"262c7555-ed58-41cb-bee3-f4634c3d5507","type":"Toolbar"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"9a37b97a-4fa3-4189-b2f0-266e122e4f66","type":"Segment"},{"attributes":{},"id":"01325bdd-25a5-4cf2-bfb0-4e95e4c92cc8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"SMOoI+C0A8D5ZG5d6n8EwBhJm07gLPa/dPxM+40w+r9uVvO02WDgv4xNV40du+S/","dtype":"float64","shape":[6]}},"selected":null,"selection_policy":null},"id":"e51c0db4-de0a-4a21-8351-31f1f58be51a","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"08be5777-6fa3-43a7-8819-6844a30acad1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2809a050-c4cb-4af4-9c69-b099c3114b38","type":"BasicTicker"}},"id":"2edfcd6e-d50c-4c1a-b557-0e4ab584af91","type":"Grid"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"aV9VjLtgBEA+f/n7ZkoEQPX7pwVR2gxAlKxgVyTqC0DsUV9/OpQRQDrkvBzd3hFA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"nPwEyi5v5j8W9cN3o3DjP0Bn6KCvt/o/UvcltPKI+j9MVkC2NHAEQATuq54JZQRA","dtype":"float64","shape":[6]}},"selected":null,"selection_policy":null},"id":"482c33a8-79f1-4237-8ada-303fa485035f","type":"ColumnDataSource"},{"attributes":{},"id":"f26c202b-3fed-4c24-8d57-74ce4985fdac","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":""},"id":"192bbd59-5a5e-4183-afb4-06680bf344c3","type":"Title"},{"attributes":{"source":{"id":"f1d0588f-2a30-4a77-98b6-9c6b4856c55b","type":"ColumnDataSource"}},"id":"f00a658f-7801-48d3-b039-6fae9089119e","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"FzYl+Dfnsz9Xz7Eyiqt3v+w/u147Ju8/vwhwDEQw8D/6e1eRBg3/P4UmklN+Nf8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"fDo+JuQR4r+AZf2CV7Xlv5BwjRI4PNg/1vDft8nH1T/f74K2E0D1PxwO8G7SU/Q/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":null,"selection_policy":null},"id":"d7f01db8-87d4-4cfa-ae32-782a0210da3b","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"cb7cb987-f863-4773-a32e-1c01ecbda2c2","type":"Segment"},{"attributes":{"callback":null},"id":"08a4c69e-6058-4e46-87f1-57b72bfe06db","type":"DataRange1d"},{"attributes":{"data_source":{"id":"993394a8-37d5-43e6-b5a0-e8d7dcec504f","type":"ColumnDataSource"},"glyph":{"id":"c19d6b86-3c00-4569-9f20-12ff4b032744","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"04af4282-2b63-4935-a292-8e187958a54b","type":"VBar"},"selection_glyph":null,"view":{"id":"bc8ae342-1777-45e7-ab0b-45797194bd98","type":"CDSView"}},"id":"e6ce6b89-22c0-490f-9462-c1fc20f8bb71","type":"GlyphRenderer"},{"attributes":{},"id":"b756e84d-2252-4c00-a68a-ee39866ae83f","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"01325bdd-25a5-4cf2-bfb0-4e95e4c92cc8","type":"BasicTickFormatter"},"plot":{"id":"08be5777-6fa3-43a7-8819-6844a30acad1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2809a050-c4cb-4af4-9c69-b099c3114b38","type":"BasicTicker"}},"id":"eac38c4b-1072-4dc3-a680-c9ad24bac81e","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"c19d6b86-3c00-4569-9f20-12ff4b032744","type":"VBar"},{"attributes":{"data_source":{"id":"b88f7e81-957d-44f0-be30-9225be37fccb","type":"ColumnDataSource"},"glyph":{"id":"1c61cf76-f3d4-44ed-8c73-18771a62d0df","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c9c9f1fb-358a-49db-96a2-afeb00c8480a","type":"Rect"},"selection_glyph":null,"view":{"id":"b842422c-7984-4797-8ba4-9032546c19b1","type":"CDSView"}},"id":"ec14e0b0-3fd3-4ffb-9345-5aa1631a709c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"993394a8-37d5-43e6-b5a0-e8d7dcec504f","type":"ColumnDataSource"}},"id":"bc8ae342-1777-45e7-ab0b-45797194bd98","type":"CDSView"},{"attributes":{},"id":"6b1bb867-e446-414f-a09a-7e9b58b946b5","type":"SaveTool"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"fd6a533d-e39b-475a-a7f0-35b09bac6103","type":"CategoricalAxis"}],"left":[{"id":"eac38c4b-1072-4dc3-a680-c9ad24bac81e","type":"LinearAxis"}],"renderers":[{"id":"fd6a533d-e39b-475a-a7f0-35b09bac6103","type":"CategoricalAxis"},{"id":"db3ecd43-97c7-4210-b9ee-970842ae0ce9","type":"Grid"},{"id":"eac38c4b-1072-4dc3-a680-c9ad24bac81e","type":"LinearAxis"},{"id":"2edfcd6e-d50c-4c1a-b557-0e4ab584af91","type":"Grid"},{"id":"a401d04a-56bd-4c12-a005-5e741799c1dc","type":"GlyphRenderer"},{"id":"018adfba-8db2-40f9-9f7c-0849dc661869","type":"GlyphRenderer"},{"id":"e6ce6b89-22c0-490f-9462-c1fc20f8bb71","type":"GlyphRenderer"},{"id":"454aac39-bba6-4d33-a152-8bfeea9d0c97","type":"GlyphRenderer"},{"id":"fee2ccbc-ed35-4245-8086-89fb1d23ffc3","type":"GlyphRenderer"},{"id":"ec14e0b0-3fd3-4ffb-9345-5aa1631a709c","type":"GlyphRenderer"},{"id":"9e9d3336-a10a-40c6-bf86-df032bb0f8e9","type":"GlyphRenderer"}],"title":{"id":"192bbd59-5a5e-4183-afb4-06680bf344c3","type":"Title"},"toolbar":{"id":"262c7555-ed58-41cb-bee3-f4634c3d5507","type":"Toolbar"},"x_range":{"id":"abdedfcb-e552-4da1-8261-ee3159d817a2","type":"FactorRange"},"x_scale":{"id":"261f2707-84f1-4692-9317-fccb40c02b0b","type":"CategoricalScale"},"y_range":{"id":"08a4c69e-6058-4e46-87f1-57b72bfe06db","type":"DataRange1d"},"y_scale":{"id":"e73454ab-85dc-419b-8f10-ca913a74a281","type":"LinearScale"}},"id":"08be5777-6fa3-43a7-8819-6844a30acad1","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"08be5777-6fa3-43a7-8819-6844a30acad1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f26c202b-3fed-4c24-8d57-74ce4985fdac","type":"CategoricalTicker"}},"id":"db3ecd43-97c7-4210-b9ee-970842ae0ce9","type":"Grid"},{"attributes":{"data_source":{"id":"e51c0db4-de0a-4a21-8351-31f1f58be51a","type":"ColumnDataSource"},"glyph":{"id":"c7a1f577-6b66-486f-86b8-7fab04dab904","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48916ac1-e26b-472e-807a-245306e0c835","type":"Rect"},"selection_glyph":null,"view":{"id":"ca53a4cf-ff10-48b2-a309-8925c6d2fa88","type":"CDSView"}},"id":"fee2ccbc-ed35-4245-8086-89fb1d23ffc3","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"9dfd6c22-4af1-4ffd-9984-6280da85ead7","type":"Segment"},{"attributes":{"formatter":{"id":"b756e84d-2252-4c00-a68a-ee39866ae83f","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"08be5777-6fa3-43a7-8819-6844a30acad1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f26c202b-3fed-4c24-8d57-74ce4985fdac","type":"CategoricalTicker"}},"id":"fd6a533d-e39b-475a-a7f0-35b09bac6103","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb2fd914-c23b-488e-9f72-480a4dc20251","type":"Circle"},{"attributes":{"source":{"id":"b88f7e81-957d-44f0-be30-9225be37fccb","type":"ColumnDataSource"}},"id":"b842422c-7984-4797-8ba4-9032546c19b1","type":"CDSView"},{"attributes":{},"id":"2809a050-c4cb-4af4-9c69-b099c3114b38","type":"BasicTicker"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"caa412c7-5866-47a3-b172-0e0fa13eee6e","type":"Segment"},{"attributes":{"data_source":{"id":"f1d0588f-2a30-4a77-98b6-9c6b4856c55b","type":"ColumnDataSource"},"glyph":{"id":"cb2fd914-c23b-488e-9f72-480a4dc20251","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c7afea65-d2bc-42bb-bea7-3a99dcb2d3ca","type":"Circle"},"selection_glyph":null,"view":{"id":"f00a658f-7801-48d3-b039-6fae9089119e","type":"CDSView"}},"id":"9e9d3336-a10a-40c6-bf86-df032bb0f8e9","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e51c0db4-de0a-4a21-8351-31f1f58be51a","type":"ColumnDataSource"}},"id":"ca53a4cf-ff10-48b2-a309-8925c6d2fa88","type":"CDSView"},{"attributes":{"data_source":{"id":"83d0e7d1-a6ff-44da-8812-195e20f5d7b3","type":"ColumnDataSource"},"glyph":{"id":"caa412c7-5866-47a3-b172-0e0fa13eee6e","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9dfd6c22-4af1-4ffd-9984-6280da85ead7","type":"Segment"},"selection_glyph":null,"view":{"id":"564738fe-16d0-4b2a-8bba-bc078478cb98","type":"CDSView"}},"id":"018adfba-8db2-40f9-9f7c-0849dc661869","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c61cf76-f3d4-44ed-8c73-18771a62d0df","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c9c9f1fb-358a-49db-96a2-afeb00c8480a","type":"Rect"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7a1f577-6b66-486f-86b8-7fab04dab904","type":"Rect"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"4d2c51f6-d1f6-4efc-8243-b29df1db650e","type":"VBar"},{"attributes":{"data_source":{"id":"482c33a8-79f1-4237-8ada-303fa485035f","type":"ColumnDataSource"},"glyph":{"id":"9a37b97a-4fa3-4189-b2f0-266e122e4f66","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cb7cb987-f863-4773-a32e-1c01ecbda2c2","type":"Segment"},"selection_glyph":null,"view":{"id":"e21a464d-e16b-42a8-bd85-6976dae441d4","type":"CDSView"}},"id":"a401d04a-56bd-4c12-a005-5e741799c1dc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7afea65-d2bc-42bb-bea7-3a99dcb2d3ca","type":"Circle"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"SMOoI+C0A8D5ZG5d6n8EwBhJm07gLPa/dPxM+40w+r9uVvO02WDgv4xNV40du+S/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"fDo+JuQR4r+AZf2CV7Xlv5BwjRI4PNg/1vDft8nH1T/f74K2E0D1PxwO8G7SU/Q/","dtype":"float64","shape":[6]}},"selected":null,"selection_policy":null},"id":"83d0e7d1-a6ff-44da-8812-195e20f5d7b3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"aV9VjLtgBEA+f/n7ZkoEQPX7pwVR2gxAlKxgVyTqC0DsUV9/OpQRQDrkvBzd3hFA","dtype":"float64","shape":[6]}},"selected":null,"selection_policy":null},"id":"b88f7e81-957d-44f0-be30-9225be37fccb","type":"ColumnDataSource"},{"attributes":{},"id":"e73454ab-85dc-419b-8f10-ca913a74a281","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","d","e","e","e","f","f","f"],"y":[-2.6725003801094904,2.6005378937552983,3.633218257417597,-1.6796106181227852,-2.0894756069128535,-0.5299810462369603,4.883624242635477,4.419034754265845,4.531728030416526,-1.0439491005589918,4.520981896536401]},"selected":null,"selection_policy":null},"id":"f1d0588f-2a30-4a77-98b6-9c6b4856c55b","type":"ColumnDataSource"}],"root_ids":["08be5777-6fa3-43a7-8819-6844a30acad1"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"1c2c5efb-7090-450d-bcba-87fe1a70937f","elementid":"ac4a96cd-64af-4321-b322-c5d68e51a86d","modelid":"08be5777-6fa3-43a7-8819-6844a30acad1"}];
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