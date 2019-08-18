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
      };var element = document.getElementById("15a09e82-e60a-4d29-8d0f-9f22cac86bb0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '15a09e82-e60a-4d29-8d0f-9f22cac86bb0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                "MyFormatter": require("custom/bk_script_466629d5697845ceb42556beea3046f7.my_formatter").MyFormatter,
          "Custom": require("custom/bk_script_4fb461e8df454326ae873272661da418.custom").Custom,
          "IonRangeSlider": require("custom/bk_script_7c6336ebdd3c4188810b13b02e106dda.ion_range_slider").IonRangeSlider,
          "Surface3d": require("custom/bk_script_d3db61d368bd4a4b9a4b2baf689d5b43.surface3d").Surface3d,
          "DrawTool": require("custom/bk_script_d4f1dea1b0f74c799e098760aa3064b5.draw_tool").DrawTool,
          "LatexLabel": require("custom/bk_script_df57e6d13ff744c395282f69bdb1d1d0.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_466629d5697845ceb42556beea3046f7.my_formatter": function(require, module, exports) {
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
          
          },
          "custom/bk_script_4fb461e8df454326ae873272661da418.custom": function(require, module, exports) {
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
          "custom/bk_script_7c6336ebdd3c4188810b13b02e106dda.ion_range_slider": function(require, module, exports) {
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
                  // Backbone Views create <div> elements by default, accessible as @$el.
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
          "custom/bk_script_d3db61d368bd4a4b9a4b2baf689d5b43.surface3d": function(require, module, exports) {
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
          // or into the DOM, we must create a View subclass for the model. Currently
          // Bokeh models and views are based on BackBone. More information about
          // using Backbone can be found here:
          //     http://backbonejs.org/
          // In this case we will subclass from the existing BokehJS ``LayoutDOMView``,
          // corresponding to our
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
                  // Backbone Views create <div> elements by default, accessible as @el. Many
                  // Bokeh views ignore this default <div>, and instead do things like draw
                  // to the HTML canvas. In this case though, we use the <div> to attach a
                  // Graph3d to the DOM.
                  this._graph = new vis.Graph3d(this.el, this.get_data(), OPTIONS);
                  // Set Backbone listener so that when the Bokeh data source has a change
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
              // We must also create a corresponding JavaScript Backbone model sublcass to
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
          "custom/bk_script_d4f1dea1b0f74c799e098760aa3064b5.draw_tool": function(require, module, exports) {
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
                  (_a = e.bokeh, sx = _a.sx, sy = _a.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
                  var _a;
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
          "custom/bk_script_df57e6d13ff744c395282f69bdb1d1d0.latex_label": function(require, module, exports) {
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
                    
                  var docs_json = '{"0afa9338-502b-41f9-a6ec-36a9592f4f8a":{"roots":{"references":[{"attributes":{},"id":"68f7aaac-aa48-4fa1-a562-34804dc0676a","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3eb257e2-4bbf-4818-b383-86d1acc65bd4","type":"BoxAnnotation"},{"attributes":{},"id":"71aaad15-02c3-4606-9e41-3c6565b2d604","type":"SaveTool"},{"attributes":{"formatter":{"id":"b6ef94c6-ef06-49ec-b087-a597a2857b3b","type":"BasicTickFormatter"},"plot":{"id":"1abc2e28-1f5c-42be-9d17-53ae188178cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"97a7256c-288a-4410-8768-a67c0e4e5745","type":"BasicTicker"}},"id":"2f73f5ff-5a75-46c8-9588-a7db645ff3e4","type":"LinearAxis"},{"attributes":{},"id":"914cb51e-a7ce-49ec-b768-3765ff8f75b8","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7eee7925-4488-4607-bf95-98aa3e9ab92f","type":"Circle"},{"attributes":{"plot":{"id":"1abc2e28-1f5c-42be-9d17-53ae188178cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"97a7256c-288a-4410-8768-a67c0e4e5745","type":"BasicTicker"}},"id":"af573e3b-2389-4460-824f-86c83f1f0eea","type":"Grid"},{"attributes":{"callback":null},"id":"4f2fbcb3-dd2d-402f-9871-92c70fe22fd4","type":"DataRange1d"},{"attributes":{"formatter":{"id":"80ad1f14-67d8-4524-b252-a7e2a0a7603f","type":"BasicTickFormatter"},"plot":{"id":"ee8382e7-398d-4e92-864a-8f09d0896d7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c58e53aa-6420-49dd-89bf-a840689afb87","type":"BasicTicker"}},"id":"2b995b83-2543-4912-91b5-4d3066bfad5f","type":"LinearAxis"},{"attributes":{},"id":"42683c1d-f344-46cb-b861-8a80665fffae","type":"LinearScale"},{"attributes":{},"id":"eb2b683a-465c-47d8-8821-31d574a45368","type":"HelpTool"},{"attributes":{"plot":{"id":"ee8382e7-398d-4e92-864a-8f09d0896d7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"68f7aaac-aa48-4fa1-a562-34804dc0676a","type":"BasicTicker"}},"id":"afead4b7-f226-4023-a5cf-c375ba0d4aea","type":"Grid"},{"attributes":{"formatter":{"id":"e770fc37-c7dd-4cae-a876-a7e38f4ebf88","type":"BasicTickFormatter"},"plot":{"id":"ee8382e7-398d-4e92-864a-8f09d0896d7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"68f7aaac-aa48-4fa1-a562-34804dc0676a","type":"BasicTicker"}},"id":"e6c750da-f75a-431a-a1dc-11f1bc4f151a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"1abc2e28-1f5c-42be-9d17-53ae188178cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"86c5f19e-d7f7-4233-b34d-0191fa559fc4","type":"BasicTicker"}},"id":"fb23f9ce-aa87-4059-b129-96b520e454f6","type":"Grid"},{"attributes":{},"id":"83389bdd-ba2f-4aa0-82f0-01e2dc5068de","type":"BasicTickFormatter"},{"attributes":{},"id":"e770fc37-c7dd-4cae-a876-a7e38f4ebf88","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ac2a080-9020-4e3e-8591-cbc592cde654","type":"Triangle"},{"attributes":{"source":{"id":"ec95425c-0c2a-4981-a00e-da2ccda43a65","type":"ColumnDataSource"}},"id":"c65be914-ef5b-4806-87c1-e42b51710d84","type":"CDSView"},{"attributes":{"data_source":{"id":"ec95425c-0c2a-4981-a00e-da2ccda43a65","type":"ColumnDataSource"},"glyph":{"id":"4ac2a080-9020-4e3e-8591-cbc592cde654","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"570a38cf-fa50-4bb9-95fa-b3cbf4b0b95a","type":"Triangle"},"selection_glyph":null,"view":{"id":"c65be914-ef5b-4806-87c1-e42b51710d84","type":"CDSView"}},"id":"826b9b7d-737f-47dd-859b-64fed3fbdf7b","type":"GlyphRenderer"},{"attributes":{},"id":"c58e53aa-6420-49dd-89bf-a840689afb87","type":"BasicTicker"},{"attributes":{},"id":"1a7daf79-7413-4f57-816c-eab9f4aab75c","type":"LinearScale"},{"attributes":{},"id":"14a86d35-5d3e-4358-922d-ab5afd18713a","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8c8ff86b-5ba0-460a-af8d-c8a79596a2b3","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"e6c750da-f75a-431a-a1dc-11f1bc4f151a","type":"LinearAxis"}],"left":[{"id":"2b995b83-2543-4912-91b5-4d3066bfad5f","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e6c750da-f75a-431a-a1dc-11f1bc4f151a","type":"LinearAxis"},{"id":"afead4b7-f226-4023-a5cf-c375ba0d4aea","type":"Grid"},{"id":"2b995b83-2543-4912-91b5-4d3066bfad5f","type":"LinearAxis"},{"id":"ffab5664-b028-49bb-9c23-12dad9b3fd08","type":"Grid"},{"id":"3eb257e2-4bbf-4818-b383-86d1acc65bd4","type":"BoxAnnotation"},{"id":"84913dda-252c-468c-bb25-31289b994c10","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"3b0a4f79-2618-4794-a49a-272fc2255650","type":"Toolbar"},"x_range":{"id":"1e3ed4d8-05a8-4990-a104-5f42d968f7f6","type":"DataRange1d"},"x_scale":{"id":"914cb51e-a7ce-49ec-b768-3765ff8f75b8","type":"LinearScale"},"y_range":{"id":"d001ce1b-8a94-4397-9d97-813d1045d7fa","type":"DataRange1d"},"y_scale":{"id":"42683c1d-f344-46cb-b861-8a80665fffae","type":"LinearScale"}},"id":"ee8382e7-398d-4e92-864a-8f09d0896d7f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2a1812a0-fba6-416d-b656-5591cf5809d9","type":"BasicTickFormatter"},{"attributes":{},"id":"4cf2ab39-879c-484c-8fc4-d845f9ad8d3c","type":"PanTool"},{"attributes":{},"id":"86c5f19e-d7f7-4233-b34d-0191fa559fc4","type":"BasicTicker"},{"attributes":{},"id":"33ab144a-fd53-4595-b0ff-e2ab8c457cf3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"83389bdd-ba2f-4aa0-82f0-01e2dc5068de","type":"BasicTickFormatter"},"plot":{"id":"d8bed892-edfa-4e0b-a719-4cdfa4955188","subtype":"Figure","type":"Plot"},"ticker":{"id":"14a86d35-5d3e-4358-922d-ab5afd18713a","type":"BasicTicker"}},"id":"48325ab0-4319-49b2-a6b9-c2b1b11e10dc","type":"LinearAxis"},{"attributes":{"callback":null},"id":"05fdb74b-397a-4424-9bba-3dd97a0c7795","type":"DataRange1d"},{"attributes":{"children":[{"id":"ee8382e7-398d-4e92-864a-8f09d0896d7f","subtype":"Figure","type":"Plot"},{"id":"d8bed892-edfa-4e0b-a719-4cdfa4955188","subtype":"Figure","type":"Plot"},{"id":"1abc2e28-1f5c-42be-9d17-53ae188178cd","subtype":"Figure","type":"Plot"}]},"id":"30081d1e-070a-46b1-ac31-c1c732eea8e2","type":"Column"},{"attributes":{},"id":"438ed581-0c29-49ba-bfa4-402fd1a659c0","type":"ResetTool"},{"attributes":{},"id":"81312853-118a-4e07-ad67-454c06911792","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"d8bed892-edfa-4e0b-a719-4cdfa4955188","subtype":"Figure","type":"Plot"},"ticker":{"id":"14a86d35-5d3e-4358-922d-ab5afd18713a","type":"BasicTicker"}},"id":"85c26281-d01c-4fb3-b389-4326ddc463ed","type":"Grid"},{"attributes":{"below":[{"id":"a2a800c2-6fb1-4f2a-9602-c02962f0e297","type":"LinearAxis"}],"left":[{"id":"48325ab0-4319-49b2-a6b9-c2b1b11e10dc","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a2a800c2-6fb1-4f2a-9602-c02962f0e297","type":"LinearAxis"},{"id":"c12a131e-f7ad-4478-b7d5-53d1ef1778fd","type":"Grid"},{"id":"48325ab0-4319-49b2-a6b9-c2b1b11e10dc","type":"LinearAxis"},{"id":"85c26281-d01c-4fb3-b389-4326ddc463ed","type":"Grid"},{"id":"8c8ff86b-5ba0-460a-af8d-c8a79596a2b3","type":"BoxAnnotation"},{"id":"826b9b7d-737f-47dd-859b-64fed3fbdf7b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"074ffedf-f213-49e8-9532-9835b1a2ba0f","type":"Toolbar"},"x_range":{"id":"2f406dff-401f-4378-ac8f-409ea77313fc","type":"DataRange1d"},"x_scale":{"id":"1a7daf79-7413-4f57-816c-eab9f4aab75c","type":"LinearScale"},"y_range":{"id":"05fdb74b-397a-4424-9bba-3dd97a0c7795","type":"DataRange1d"},"y_scale":{"id":"3c82a9ab-a179-4578-b85c-567d5eeadcfd","type":"LinearScale"}},"id":"d8bed892-edfa-4e0b-a719-4cdfa4955188","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"5940bbf1-67a6-4d7c-9ada-326e4f2fb3ff","type":"BasicTickFormatter"},"plot":{"id":"1abc2e28-1f5c-42be-9d17-53ae188178cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"86c5f19e-d7f7-4233-b34d-0191fa559fc4","type":"BasicTicker"}},"id":"017ac082-d38a-4e98-9da2-bad0c00707b4","type":"LinearAxis"},{"attributes":{"source":{"id":"b5c396cd-54db-470c-8ef1-7e4b80487f0b","type":"ColumnDataSource"}},"id":"3e6066a7-1f06-430f-8d40-cdff3e271d94","type":"CDSView"},{"attributes":{},"id":"3c82a9ab-a179-4578-b85c-567d5eeadcfd","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dfeda65d-e836-49ad-b454-c37ca2886224","type":"PanTool"},{"id":"4bbe32a9-c680-4996-bd8d-585d92cb0c8f","type":"WheelZoomTool"},{"id":"b4e69264-2b96-4d3f-ae7c-51f8e21875d2","type":"BoxZoomTool"},{"id":"ff1fe9b8-bcb1-47e1-bc79-e7d8eec47d0b","type":"SaveTool"},{"id":"dbadca99-e870-4d75-970f-553cb2e9c92f","type":"ResetTool"},{"id":"507b3393-ce23-4013-a221-de175a20098f","type":"HelpTool"}]},"id":"70324b2c-cfb3-47c8-837a-352a808e0c0a","type":"Toolbar"},{"attributes":{"plot":{"id":"d8bed892-edfa-4e0b-a719-4cdfa4955188","subtype":"Figure","type":"Plot"},"ticker":{"id":"33ab144a-fd53-4595-b0ff-e2ab8c457cf3","type":"BasicTicker"}},"id":"c12a131e-f7ad-4478-b7d5-53d1ef1778fd","type":"Grid"},{"attributes":{"overlay":{"id":"8c8ff86b-5ba0-460a-af8d-c8a79596a2b3","type":"BoxAnnotation"}},"id":"cab34e4d-aeae-4b04-bcff-db780ba7118e","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"ec95425c-0c2a-4981-a00e-da2ccda43a65","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"06158752-92e3-4026-80e0-f00f1f9db7ba","type":"DataRange1d"},{"attributes":{},"id":"80ad1f14-67d8-4524-b252-a7e2a0a7603f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e7a3c44-7d1b-4f30-835e-eae785048da6","type":"Circle"},{"attributes":{"formatter":{"id":"2a1812a0-fba6-416d-b656-5591cf5809d9","type":"BasicTickFormatter"},"plot":{"id":"d8bed892-edfa-4e0b-a719-4cdfa4955188","subtype":"Figure","type":"Plot"},"ticker":{"id":"33ab144a-fd53-4595-b0ff-e2ab8c457cf3","type":"BasicTicker"}},"id":"a2a800c2-6fb1-4f2a-9602-c02962f0e297","type":"LinearAxis"},{"attributes":{},"id":"63e7f82f-cc16-46a8-b8dc-81cd2e799f05","type":"WheelZoomTool"},{"attributes":{},"id":"5be104a8-a4ce-4c58-a952-8316a35fce9b","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"570a38cf-fa50-4bb9-95fa-b3cbf4b0b95a","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"ee8382e7-398d-4e92-864a-8f09d0896d7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c58e53aa-6420-49dd-89bf-a840689afb87","type":"BasicTicker"}},"id":"ffab5664-b028-49bb-9c23-12dad9b3fd08","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4cf2ab39-879c-484c-8fc4-d845f9ad8d3c","type":"PanTool"},{"id":"c5c95011-9ce9-4b93-9f65-604b09b33884","type":"WheelZoomTool"},{"id":"cab34e4d-aeae-4b04-bcff-db780ba7118e","type":"BoxZoomTool"},{"id":"de346be1-c988-43ed-bee3-b3f736debf35","type":"SaveTool"},{"id":"81312853-118a-4e07-ad67-454c06911792","type":"ResetTool"},{"id":"460e747a-42d5-4ed9-9edc-04d49a67a06b","type":"HelpTool"}]},"id":"074ffedf-f213-49e8-9532-9835b1a2ba0f","type":"Toolbar"},{"attributes":{},"id":"97a7256c-288a-4410-8768-a67c0e4e5745","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2f406dff-401f-4378-ac8f-409ea77313fc","type":"DataRange1d"},{"attributes":{},"id":"460e747a-42d5-4ed9-9edc-04d49a67a06b","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"fb91b803-6d1a-4356-a441-2bedcd26341c","type":"ColumnDataSource"},{"attributes":{},"id":"de346be1-c988-43ed-bee3-b3f736debf35","type":"SaveTool"},{"attributes":{"data_source":{"id":"b5c396cd-54db-470c-8ef1-7e4b80487f0b","type":"ColumnDataSource"},"glyph":{"id":"9e7a3c44-7d1b-4f30-835e-eae785048da6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7eee7925-4488-4607-bf95-98aa3e9ab92f","type":"Circle"},"selection_glyph":null,"view":{"id":"3e6066a7-1f06-430f-8d40-cdff3e271d94","type":"CDSView"}},"id":"84913dda-252c-468c-bb25-31289b994c10","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"3eb257e2-4bbf-4818-b383-86d1acc65bd4","type":"BoxAnnotation"}},"id":"bd45d7ed-4063-4e77-8e86-cdfc3a075677","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5be104a8-a4ce-4c58-a952-8316a35fce9b","type":"PanTool"},{"id":"63e7f82f-cc16-46a8-b8dc-81cd2e799f05","type":"WheelZoomTool"},{"id":"bd45d7ed-4063-4e77-8e86-cdfc3a075677","type":"BoxZoomTool"},{"id":"71aaad15-02c3-4606-9e41-3c6565b2d604","type":"SaveTool"},{"id":"438ed581-0c29-49ba-bfa4-402fd1a659c0","type":"ResetTool"},{"id":"eb2b683a-465c-47d8-8821-31d574a45368","type":"HelpTool"}]},"id":"3b0a4f79-2618-4794-a49a-272fc2255650","type":"Toolbar"},{"attributes":{},"id":"5b0fce6b-ba67-462f-8cf2-1276b6692722","type":"LinearScale"},{"attributes":{},"id":"c1d53c6f-608f-4ceb-b38e-757b099fc283","type":"LinearScale"},{"attributes":{"below":[{"id":"2f73f5ff-5a75-46c8-9588-a7db645ff3e4","type":"LinearAxis"}],"left":[{"id":"017ac082-d38a-4e98-9da2-bad0c00707b4","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"2f73f5ff-5a75-46c8-9588-a7db645ff3e4","type":"LinearAxis"},{"id":"af573e3b-2389-4460-824f-86c83f1f0eea","type":"Grid"},{"id":"017ac082-d38a-4e98-9da2-bad0c00707b4","type":"LinearAxis"},{"id":"fb23f9ce-aa87-4059-b129-96b520e454f6","type":"Grid"},{"id":"d49bb76a-eb69-4de4-9835-6f21968d6287","type":"BoxAnnotation"},{"id":"dafd9bbc-4cce-424f-8a00-9a2b5a4e47af","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"70324b2c-cfb3-47c8-837a-352a808e0c0a","type":"Toolbar"},"x_range":{"id":"06158752-92e3-4026-80e0-f00f1f9db7ba","type":"DataRange1d"},"x_scale":{"id":"c1d53c6f-608f-4ceb-b38e-757b099fc283","type":"LinearScale"},"y_range":{"id":"4f2fbcb3-dd2d-402f-9871-92c70fe22fd4","type":"DataRange1d"},"y_scale":{"id":"5b0fce6b-ba67-462f-8cf2-1276b6692722","type":"LinearScale"}},"id":"1abc2e28-1f5c-42be-9d17-53ae188178cd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"507b3393-ce23-4013-a221-de175a20098f","type":"HelpTool"},{"attributes":{},"id":"b6ef94c6-ef06-49ec-b087-a597a2857b3b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"af14a5ad-5c5e-4658-beb1-86a691e1db50","type":"Square"},{"attributes":{"callback":null},"id":"d001ce1b-8a94-4397-9d97-813d1045d7fa","type":"DataRange1d"},{"attributes":{"data_source":{"id":"fb91b803-6d1a-4356-a441-2bedcd26341c","type":"ColumnDataSource"},"glyph":{"id":"75ebc279-b493-42e5-b7c7-b7a8306f4331","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"af14a5ad-5c5e-4658-beb1-86a691e1db50","type":"Square"},"selection_glyph":null,"view":{"id":"d810a4b0-0f65-47db-94b3-3dfe012fc5ba","type":"CDSView"}},"id":"dafd9bbc-4cce-424f-8a00-9a2b5a4e47af","type":"GlyphRenderer"},{"attributes":{},"id":"c5c95011-9ce9-4b93-9f65-604b09b33884","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"75ebc279-b493-42e5-b7c7-b7a8306f4331","type":"Square"},{"attributes":{},"id":"5940bbf1-67a6-4d7c-9ada-326e4f2fb3ff","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1e3ed4d8-05a8-4990-a104-5f42d968f7f6","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d49bb76a-eb69-4de4-9835-6f21968d6287","type":"BoxAnnotation"},{"attributes":{},"id":"dfeda65d-e836-49ad-b454-c37ca2886224","type":"PanTool"},{"attributes":{"source":{"id":"fb91b803-6d1a-4356-a441-2bedcd26341c","type":"ColumnDataSource"}},"id":"d810a4b0-0f65-47db-94b3-3dfe012fc5ba","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"b5c396cd-54db-470c-8ef1-7e4b80487f0b","type":"ColumnDataSource"},{"attributes":{},"id":"4bbe32a9-c680-4996-bd8d-585d92cb0c8f","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d49bb76a-eb69-4de4-9835-6f21968d6287","type":"BoxAnnotation"}},"id":"b4e69264-2b96-4d3f-ae7c-51f8e21875d2","type":"BoxZoomTool"},{"attributes":{},"id":"ff1fe9b8-bcb1-47e1-bc79-e7d8eec47d0b","type":"SaveTool"},{"attributes":{},"id":"dbadca99-e870-4d75-970f-553cb2e9c92f","type":"ResetTool"}],"root_ids":["30081d1e-070a-46b1-ac31-c1c732eea8e2"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"0afa9338-502b-41f9-a6ec-36a9592f4f8a","elementid":"15a09e82-e60a-4d29-8d0f-9f22cac86bb0","modelid":"30081d1e-070a-46b1-ac31-c1c732eea8e2"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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