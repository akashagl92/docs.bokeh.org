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
      };var element = document.getElementById("dc3d1ab1-fb3d-4b5f-ac46-a7ae65d7c66c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc3d1ab1-fb3d-4b5f-ac46-a7ae65d7c66c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d1c85d54-acc9-452f-87da-b3bde2c23477":{"roots":{"references":[{"attributes":{"callback":null},"id":"943c5ef2-6bee-4c86-9fd6-e89b0c8aec0f","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"9b81a598-95fc-4ba9-bfa6-2ec2d7da9a23","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"3a5801aa-5435-4132-abdd-d560108b9217","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d6636f71-6388-4de6-9186-6b80612b9f02","type":"BasicTickFormatter"},"plot":{"id":"2a6a09e9-76b6-40c7-8e67-4c6ec2e9943a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5641a4ea-9d7d-4be4-a4e4-3c9a06944065","type":"BasicTicker"}},"id":"bee6354d-b2f6-48b2-9450-6e58ef70a1e1","type":"LinearAxis"},{"attributes":{},"id":"5641a4ea-9d7d-4be4-a4e4-3c9a06944065","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6467ebf5-e573-476a-94dc-c708f247919e","type":"BasicTickFormatter"},"plot":{"id":"2a6a09e9-76b6-40c7-8e67-4c6ec2e9943a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4f928de-d5e2-4de5-bd27-fe236082aa17","type":"BasicTicker"}},"id":"e1c06c51-8c0e-4b2d-b959-0d08dec3a42b","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6e8008c-cf5c-4eff-a98a-7883064339a2","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5cfd194-fbc3-4b40-b984-aa4e7de50321","type":"PanTool"},{"id":"89d1ba69-6654-48d7-91b8-443016c71615","type":"WheelZoomTool"},{"id":"8bd93135-8246-4910-a1e7-8ef087e7a140","type":"BoxZoomTool"},{"id":"10c8b9fb-0cfd-4848-81a8-1e8a98460c54","type":"SaveTool"},{"id":"1813d86b-c71e-41ba-99fa-af1ea9d0aa2f","type":"ResetTool"},{"id":"6783b9d2-b558-47b3-b1ec-22ceac8ed7fe","type":"HelpTool"}]},"id":"cb4cac3d-52bb-40ff-997e-c3dccc48a683","type":"Toolbar"},{"attributes":{"overlay":{"id":"828671ac-383a-4fc9-915b-bfabbfa79dca","type":"BoxAnnotation"}},"id":"8bd93135-8246-4910-a1e7-8ef087e7a140","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"f4ed3f4d-1ee2-43c9-a8db-5142e366d2f6","type":"ColumnDataSource"},"glyph":{"id":"192fd753-88c6-4de3-9cf9-dc30c479984e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b237abff-73eb-4aa6-b6d8-668543445ddf","type":"Circle"},"selection_glyph":null,"view":{"id":"49c8ddd4-d641-405f-aea1-3d28b1dcbcee","type":"CDSView"}},"id":"5852ec62-9636-4436-910d-543a119a49b6","type":"GlyphRenderer"},{"attributes":{},"id":"eaae8a03-559e-418d-aa03-fb87e756ca40","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"534aebf3-14b5-4164-8436-f963bdc1714e","type":"Title"},{"attributes":{},"id":"6467ebf5-e573-476a-94dc-c708f247919e","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"9b81a598-95fc-4ba9-bfa6-2ec2d7da9a23","type":"ColumnDataSource"}},"id":"1206326a-5896-4bb0-99bf-e71be1845939","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"2a6a09e9-76b6-40c7-8e67-4c6ec2e9943a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4f928de-d5e2-4de5-bd27-fe236082aa17","type":"BasicTicker"}},"id":"778aa85f-b91f-482c-b273-04433e64032e","type":"Grid"},{"attributes":{"data_source":{"id":"9b81a598-95fc-4ba9-bfa6-2ec2d7da9a23","type":"ColumnDataSource"},"glyph":{"id":"8be073f0-712c-47cc-a145-70395f26928e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a698bda9-dc92-49c7-b482-982f6adcfaa1","type":"Line"},"selection_glyph":null,"view":{"id":"1206326a-5896-4bb0-99bf-e71be1845939","type":"CDSView"}},"id":"0d7ac4db-8bbe-4895-9e90-8228e5081555","type":"GlyphRenderer"},{"attributes":{},"id":"1813d86b-c71e-41ba-99fa-af1ea9d0aa2f","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"a698bda9-dc92-49c7-b482-982f6adcfaa1","type":"Line"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"4c15f2a4-5e21-4218-974d-d2f3f6b78dcd","type":"GlyphRenderer"}]},"id":"8e83613b-6e00-4547-90a1-7fc778983b6a","type":"LegendItem"},{"attributes":{"data_source":{"id":"591b43e8-6e55-43ac-8e13-26fdaaecc202","type":"ColumnDataSource"},"glyph":{"id":"d6e8008c-cf5c-4eff-a98a-7883064339a2","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa4e50f9-0fdd-49fe-b9c7-d498031aab9d","type":"Square"},"selection_glyph":null,"view":{"id":"6afdd5be-a911-4f99-b965-fb8a87ea2df9","type":"CDSView"}},"id":"94944355-316b-45af-b5bf-400c9fe56abc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa4e50f9-0fdd-49fe-b9c7-d498031aab9d","type":"Square"},{"attributes":{},"id":"89d1ba69-6654-48d7-91b8-443016c71615","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"f4ed3f4d-1ee2-43c9-a8db-5142e366d2f6","type":"ColumnDataSource"},{"attributes":{"source":{"id":"591b43e8-6e55-43ac-8e13-26fdaaecc202","type":"ColumnDataSource"}},"id":"6afdd5be-a911-4f99-b965-fb8a87ea2df9","type":"CDSView"},{"attributes":{},"id":"b5cfd194-fbc3-4b40-b984-aa4e7de50321","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5080a1e5-a2f7-4ccf-800b-aefaeb1ce0b8","type":"Line"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"94944355-316b-45af-b5bf-400c9fe56abc","type":"GlyphRenderer"},{"id":"0d7ac4db-8bbe-4895-9e90-8228e5081555","type":"GlyphRenderer"}]},"id":"8ff330f8-bd63-48a2-a05e-19075b6dd7fb","type":"LegendItem"},{"attributes":{},"id":"c4f928de-d5e2-4de5-bd27-fe236082aa17","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"7daf40d3-e259-49ff-891f-752470eefe14","type":"ColumnDataSource"},{"attributes":{},"id":"6783b9d2-b558-47b3-b1ec-22ceac8ed7fe","type":"HelpTool"},{"attributes":{"items":[{"id":"111239c4-089e-4901-8f4a-503036fbf66a","type":"LegendItem"},{"id":"8e83613b-6e00-4547-90a1-7fc778983b6a","type":"LegendItem"},{"id":"8ff330f8-bd63-48a2-a05e-19075b6dd7fb","type":"LegendItem"}],"orientation":"horizontal","plot":{"id":"2a6a09e9-76b6-40c7-8e67-4c6ec2e9943a","subtype":"Figure","type":"Plot"}},"id":"a8e5a1bb-3794-4554-b03e-0a4a4be5629d","type":"Legend"},{"attributes":{},"id":"93023434-80f6-4d2c-82e9-1230bf4a26bc","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oSg6uxkv+D/Th2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/J23zJpD6wv+3ENsZjOdS/wo12/ecH4r/dgWKM2Kjpv2MTsJELcPC/83ixWvXH87+358MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/l0FFlgER+r+FGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyGGtcyMPMA/jqyggGI52D/gHyIhW/jjP39A2oTCges/DVi7+O1M8T8bFjxSt5H0P4cZk3jGgfc/lUFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9dE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+FNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8lRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx9NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}}},"id":"9672bea8-1703-4b70-b3c3-cfb6f7efcdf9","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b237abff-73eb-4aa6-b6d8-668543445ddf","type":"Circle"},{"attributes":{"below":[{"id":"bee6354d-b2f6-48b2-9450-6e58ef70a1e1","type":"LinearAxis"}],"left":[{"id":"e1c06c51-8c0e-4b2d-b959-0d08dec3a42b","type":"LinearAxis"}],"renderers":[{"id":"bee6354d-b2f6-48b2-9450-6e58ef70a1e1","type":"LinearAxis"},{"id":"0e833820-5e52-4774-a5f7-56859132e189","type":"Grid"},{"id":"e1c06c51-8c0e-4b2d-b959-0d08dec3a42b","type":"LinearAxis"},{"id":"778aa85f-b91f-482c-b273-04433e64032e","type":"Grid"},{"id":"828671ac-383a-4fc9-915b-bfabbfa79dca","type":"BoxAnnotation"},{"id":"a8e5a1bb-3794-4554-b03e-0a4a4be5629d","type":"Legend"},{"id":"5852ec62-9636-4436-910d-543a119a49b6","type":"GlyphRenderer"},{"id":"d4f62620-b0b9-429d-bf29-2d8f88603182","type":"GlyphRenderer"},{"id":"4c15f2a4-5e21-4218-974d-d2f3f6b78dcd","type":"GlyphRenderer"},{"id":"94944355-316b-45af-b5bf-400c9fe56abc","type":"GlyphRenderer"},{"id":"0d7ac4db-8bbe-4895-9e90-8228e5081555","type":"GlyphRenderer"}],"title":{"id":"534aebf3-14b5-4164-8436-f963bdc1714e","type":"Title"},"toolbar":{"id":"cb4cac3d-52bb-40ff-997e-c3dccc48a683","type":"Toolbar"},"x_range":{"id":"3a5801aa-5435-4132-abdd-d560108b9217","type":"DataRange1d"},"x_scale":{"id":"eaae8a03-559e-418d-aa03-fb87e756ca40","type":"LinearScale"},"y_range":{"id":"943c5ef2-6bee-4c86-9fd6-e89b0c8aec0f","type":"DataRange1d"},"y_scale":{"id":"93023434-80f6-4d2c-82e9-1230bf4a26bc","type":"LinearScale"}},"id":"2a6a09e9-76b6-40c7-8e67-4c6ec2e9943a","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"5852ec62-9636-4436-910d-543a119a49b6","type":"GlyphRenderer"},{"id":"d4f62620-b0b9-429d-bf29-2d8f88603182","type":"GlyphRenderer"}]},"id":"111239c4-089e-4901-8f4a-503036fbf66a","type":"LegendItem"},{"attributes":{"data_source":{"id":"7daf40d3-e259-49ff-891f-752470eefe14","type":"ColumnDataSource"},"glyph":{"id":"5080a1e5-a2f7-4ccf-800b-aefaeb1ce0b8","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5789fdcd-8c88-4fc5-9e8f-f121febb3881","type":"Line"},"selection_glyph":null,"view":{"id":"07197aa9-82a1-4617-97ca-4048d4d95dae","type":"CDSView"}},"id":"d4f62620-b0b9-429d-bf29-2d8f88603182","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"591b43e8-6e55-43ac-8e13-26fdaaecc202","type":"ColumnDataSource"},{"attributes":{"line_color":"green","x":{"field":"x"},"y":{"field":"y"}},"id":"8be073f0-712c-47cc-a145-70395f26928e","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"eb5f65ce-0e41-439a-8cda-2a8297893bac","type":"Line"},{"attributes":{"plot":{"id":"2a6a09e9-76b6-40c7-8e67-4c6ec2e9943a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5641a4ea-9d7d-4be4-a4e4-3c9a06944065","type":"BasicTicker"}},"id":"0e833820-5e52-4774-a5f7-56859132e189","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5789fdcd-8c88-4fc5-9e8f-f121febb3881","type":"Line"},{"attributes":{"data_source":{"id":"9672bea8-1703-4b70-b3c3-cfb6f7efcdf9","type":"ColumnDataSource"},"glyph":{"id":"6f328fdc-a15c-4709-b865-96bb696231a4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eb5f65ce-0e41-439a-8cda-2a8297893bac","type":"Line"},"selection_glyph":null,"view":{"id":"ec6771bd-5f4a-4b96-92d9-3e6fc6992364","type":"CDSView"}},"id":"4c15f2a4-5e21-4218-974d-d2f3f6b78dcd","type":"GlyphRenderer"},{"attributes":{},"id":"d6636f71-6388-4de6-9186-6b80612b9f02","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"9672bea8-1703-4b70-b3c3-cfb6f7efcdf9","type":"ColumnDataSource"}},"id":"ec6771bd-5f4a-4b96-92d9-3e6fc6992364","type":"CDSView"},{"attributes":{},"id":"10c8b9fb-0cfd-4848-81a8-1e8a98460c54","type":"SaveTool"},{"attributes":{"source":{"id":"f4ed3f4d-1ee2-43c9-a8db-5142e366d2f6","type":"ColumnDataSource"}},"id":"49c8ddd4-d641-405f-aea1-3d28b1dcbcee","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"828671ac-383a-4fc9-915b-bfabbfa79dca","type":"BoxAnnotation"},{"attributes":{"source":{"id":"7daf40d3-e259-49ff-891f-752470eefe14","type":"ColumnDataSource"}},"id":"07197aa9-82a1-4617-97ca-4048d4d95dae","type":"CDSView"},{"attributes":{"line_color":"orange","line_dash":[4,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6f328fdc-a15c-4709-b865-96bb696231a4","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"192fd753-88c6-4de3-9cf9-dc30c479984e","type":"Circle"}],"root_ids":["2a6a09e9-76b6-40c7-8e67-4c6ec2e9943a"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"d1c85d54-acc9-452f-87da-b3bde2c23477","elementid":"dc3d1ab1-fb3d-4b5f-ac46-a7ae65d7c66c","modelid":"2a6a09e9-76b6-40c7-8e67-4c6ec2e9943a"}];
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