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
      };var element = document.getElementById("5c88267a-fb06-4f47-a2f4-a211c585459b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5c88267a-fb06-4f47-a2f4-a211c585459b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7a44b38c-1ea6-456c-aa08-a7334a424318":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4edcff2e-e0ca-4f57-b165-d2da98aab930","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"2e75666b-c7c2-477b-976c-b6cd9c7120c8","type":"ColumnDataSource"},"glyph":{"id":"9c9dfc87-35ce-4ce5-9c3a-c6097a573746","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"271540f0-389c-42b0-860a-d100b6016425","type":"Text"},"selection_glyph":null,"view":{"id":"ba94892d-be73-4e76-8382-4c551008705e","type":"CDSView"}},"id":"b6ac7439-7f50-4d06-95f1-892e05fa652d","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"1aab6680-5a00-4142-8137-7170a1a976e9","type":"Text"},{"attributes":{},"id":"1ad103c4-71d6-4f47-aabd-f160e8a174ab","type":"PanTool"},{"attributes":{},"id":"544f4449-ccf4-4292-a3b7-a0485c23ce2b","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2e75666b-c7c2-477b-976c-b6cd9c7120c8","type":"ColumnDataSource"}},"id":"ba94892d-be73-4e76-8382-4c551008705e","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"61b0bee9-a5db-46cd-b327-0f5f97ac27bf","type":"Text"},{"attributes":{},"id":"70b9c2fa-1633-423a-9508-748ef151a1b4","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["triangle"]}},"id":"a91b96d8-7111-4d5c-8e23-44a87494377d","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"4edcff2e-e0ca-4f57-b165-d2da98aab930","type":"BoxAnnotation"}},"id":"8bbc234d-c76e-481d-a807-5e06fd246285","type":"BoxZoomTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"a7149ae9-9bc7-456b-983e-8c2bcb44e9eb","type":"Text"},{"attributes":{},"id":"0f5bf7ed-9d87-46aa-a433-96733479ac9b","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["asterisk / *"]}},"id":"eb0581d1-1544-4fb1-a315-ccaac5f5a30a","type":"ColumnDataSource"},{"attributes":{},"id":"71c93461-cfc3-4211-b59b-11f29fec70f0","type":"ResetTool"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"67c4939b-b6ea-4247-8171-f3b9c3a1fd10","type":"Text"},{"attributes":{},"id":"4b1f15c8-2289-4ab1-8b7b-321bcd10c6ff","type":"HelpTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"271540f0-389c-42b0-860a-d100b6016425","type":"Text"},{"attributes":{"source":{"id":"a91b96d8-7111-4d5c-8e23-44a87494377d","type":"ColumnDataSource"}},"id":"f30f78c4-e588-43f2-bc30-e29b6f07f10f","type":"CDSView"},{"attributes":{"data_source":{"id":"a91b96d8-7111-4d5c-8e23-44a87494377d","type":"ColumnDataSource"},"glyph":{"id":"1aab6680-5a00-4142-8137-7170a1a976e9","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7149ae9-9bc7-456b-983e-8c2bcb44e9eb","type":"Text"},"selection_glyph":null,"view":{"id":"f30f78c4-e588-43f2-bc30-e29b6f07f10f","type":"CDSView"}},"id":"b11f6a2c-1d10-4da6-9245-41b7a140ae4e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"Z7PWozO+EUDKlELejG0QQI9PVwUGYhBA5bA62yQXEkCYQnRilz0RQKFxq1gCoBBAp7WhQ5TjE0B+lZ75ryUTQCIeFyUArxNAO7UKxwZ2EUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"Hl2NRsLn+D90Em+LaV7yP79w4eMfdvA/lM+yRhXO8D+IJ6L+Hsr5P1Ct/4jsvPc/AoM8kmOy/D9gLy1LJRH9P0nMrQebA/Q/eO0iUZ2F9T8=","dtype":"float64","shape":[10]}}},"id":"91b89601-00de-4be7-ab7b-6529f7b267fb","type":"ColumnDataSource"},{"attributes":{},"id":"226401bc-327b-4e9c-9ed3-d56381efd475","type":"BasicTickFormatter"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"ca7e21b8-8005-479d-91aa-6f402114b54b","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"Kv7Z1Fl2GkBG4svo+WsbQEAYNE1xXxtAvaALMHvfGUCB3BAS7o0aQIfLB6OroRtAQAZSygIFGUBS+9amhg0ZQLRjPl20AxpAEl14pYfuGEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"XG8KaweW+T/2OpEFO/v9P//F+Wes0/E/k0pZL+qM8D9mX5R5SIj/P3w4XfRWcvc/wYpqr2du/T/U6+C8BCX/P7ZO3RYiXP4/yCQwf0GT9D8=","dtype":"float64","shape":[10]}}},"id":"2f699add-21e7-4a2c-9d15-6312e58ad23a","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"54dc6978-a088-47ff-b3b3-9514428e9bd3","type":"Text"},{"attributes":{"source":{"id":"91b89601-00de-4be7-ab7b-6529f7b267fb","type":"ColumnDataSource"}},"id":"6f469985-59c9-46a9-90a4-2113bdecfb0d","type":"CDSView"},{"attributes":{"source":{"id":"eb0581d1-1544-4fb1-a315-ccaac5f5a30a","type":"ColumnDataSource"}},"id":"a46f7447-503e-4c73-b09b-6a0db2b3573d","type":"CDSView"},{"attributes":{"data_source":{"id":"2f699add-21e7-4a2c-9d15-6312e58ad23a","type":"ColumnDataSource"},"glyph":{"id":"7020e1e8-984f-4722-90b1-d0a94478293c","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d14c05f5-4618-4b6e-9c99-6aac5afb8945","type":"Triangle"},"selection_glyph":null,"view":{"id":"91ccc03e-eaa6-4e18-b19e-aa471b12658e","type":"CDSView"}},"id":"f407521c-e6d1-4f4f-a35a-bc1b12723447","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_x / ox"]}},"id":"460bc846-8791-47c2-b84e-ec8806b78eb0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"91b89601-00de-4be7-ab7b-6529f7b267fb","type":"ColumnDataSource"},"glyph":{"id":"308b84a7-e512-4dad-9e43-22f091c8f82b","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bc192aeb-80a0-4db2-b68a-516b335b2e4f","type":"Square"},"selection_glyph":null,"view":{"id":"6f469985-59c9-46a9-90a4-2113bdecfb0d","type":"CDSView"}},"id":"72c9853f-1e5f-42ff-922e-15b1d68f3a48","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"eb0581d1-1544-4fb1-a315-ccaac5f5a30a","type":"ColumnDataSource"},"glyph":{"id":"67c4939b-b6ea-4247-8171-f3b9c3a1fd10","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"54dc6978-a088-47ff-b3b3-9514428e9bd3","type":"Text"},"selection_glyph":null,"view":{"id":"a46f7447-503e-4c73-b09b-6a0db2b3573d","type":"CDSView"}},"id":"3d88d316-2909-42d0-896d-1e1b34a0409b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc192aeb-80a0-4db2-b68a-516b335b2e4f","type":"Square"},{"attributes":{"source":{"id":"460bc846-8791-47c2-b84e-ec8806b78eb0","type":"ColumnDataSource"}},"id":"2894c115-279a-4be9-b902-bb8a3289bdd1","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"308b84a7-e512-4dad-9e43-22f091c8f82b","type":"Square"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"3cc036f8-4815-44a2-baad-ae014ebd48bf","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"7020e1e8-984f-4722-90b1-d0a94478293c","type":"Triangle"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_x"]}},"id":"2c1d4532-4732-43a2-91ec-a7c7e6d745ab","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d14c05f5-4618-4b6e-9c99-6aac5afb8945","type":"Triangle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"a382c24f-bb87-472d-bec3-ac5c9e9af562","type":"Text"},{"attributes":{"data_source":{"id":"460bc846-8791-47c2-b84e-ec8806b78eb0","type":"ColumnDataSource"},"glyph":{"id":"61b0bee9-a5db-46cd-b327-0f5f97ac27bf","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a382c24f-bb87-472d-bec3-ac5c9e9af562","type":"Text"},"selection_glyph":null,"view":{"id":"2894c115-279a-4be9-b902-bb8a3289bdd1","type":"CDSView"}},"id":"62528fd7-1776-4c48-a495-3423b224e205","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"lkBcbnDpIUCngw6jQq8hQNEtXetUtyBA9mFiZIfHIUAd+SHy5NohQEIXxh9+sSBAV6SxPcgeIUBEZD0e6f0hQGis+vXfOSBAy2E8f6jwIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"KoLVd3zF+z8wP7/qhX7/PxbkzeMQ1fU/fBdDbGI8+j+ai6tX5DPwPxaSzBNVq/A/QMD1ZQ0p8j87gNEqE8r5P4RiM8lZS/4/MiFjhUJd+z8=","dtype":"float64","shape":[10]}}},"id":"9634c061-c3ae-4688-a12b-d57991dc0677","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d40468e5-2246-4e84-84f4-80384d0bc44a","type":"ColumnDataSource"},"glyph":{"id":"86d9b722-49ab-4f4c-b706-bb7da89ebfc1","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c737769c-1e45-473e-8ca3-3f691664ccdd","type":"CircleX"},"selection_glyph":null,"view":{"id":"5c4213eb-d5d6-440b-9ce4-907f4daa706a","type":"CDSView"}},"id":"6fc0e631-967c-497a-9240-f6b8e7fa226d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["inverted_triangle"]}},"id":"f24a667e-1585-454e-9aeb-1e73b245a86e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square"]}},"id":"2e75666b-c7c2-477b-976c-b6cd9c7120c8","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2f699add-21e7-4a2c-9d15-6312e58ad23a","type":"ColumnDataSource"}},"id":"91ccc03e-eaa6-4e18-b19e-aa471b12658e","type":"CDSView"},{"attributes":{"source":{"id":"2c1d4532-4732-43a2-91ec-a7c7e6d745ab","type":"ColumnDataSource"}},"id":"cbbbbee5-4769-4604-844f-efcab7631cba","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd85bbae-716d-473c-8245-42ef5e3bbeb1","type":"Asterisk"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"c4c2ef03-24fb-41e1-ade9-43393a477fd6","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"bvqKtYcXAEAIoseIIFkAQKiZ+1M1QgJA5S+uJbEUA0AekAQ9gwUHQKOH4OlStQJAd+guLXCIBECJRL4qO3cAQFVYWB6MXQZA/aSTN3CSA0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"OQsQGNYFE0BpGdKc4EITQLGmSfc1RBNADJwSio2HEEA3N+orO0ATQDjYU5MPZRBAct6SxxnYEUBCcTjKUp4RQJ8JTyBS8hBAOC4PgiBpEkA=","dtype":"float64","shape":[10]}}},"id":"d40468e5-2246-4e84-84f4-80384d0bc44a","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"c83d0852-eb5a-4d86-a295-d69d40d9dfcc","type":"Text"},{"attributes":{"data_source":{"id":"2c1d4532-4732-43a2-91ec-a7c7e6d745ab","type":"ColumnDataSource"},"glyph":{"id":"3cc036f8-4815-44a2-baad-ae014ebd48bf","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c4c2ef03-24fb-41e1-ade9-43393a477fd6","type":"Text"},"selection_glyph":null,"view":{"id":"cbbbbee5-4769-4604-844f-efcab7631cba","type":"CDSView"}},"id":"45e7eba8-6984-449a-9857-575181f23b7b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"effc9903-a968-42b1-8e55-92b0aeed41e5","type":"Asterisk"},{"attributes":{"data_source":{"id":"9634c061-c3ae-4688-a12b-d57991dc0677","type":"ColumnDataSource"},"glyph":{"id":"cd85bbae-716d-473c-8245-42ef5e3bbeb1","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"effc9903-a968-42b1-8e55-92b0aeed41e5","type":"Asterisk"},"selection_glyph":null,"view":{"id":"a07dbcce-46f0-47cf-924d-a9410b002d85","type":"CDSView"}},"id":"5dd4a4ac-e549-468d-9e8c-8c7d03e73c57","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"46480b63-a1a9-45f5-9b62-09cab3c1e623","type":"Text"},{"attributes":{"source":{"id":"9634c061-c3ae-4688-a12b-d57991dc0677","type":"ColumnDataSource"}},"id":"a07dbcce-46f0-47cf-924d-a9410b002d85","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["x"]}},"id":"c39ed945-2d97-40da-9b02-1e0d71d32ef1","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2b128be3-0fd2-480e-9b25-6f73e19c8436","type":"ColumnDataSource"}},"id":"1e6542d6-447c-4bc8-95e8-df8290db840b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"86d9b722-49ab-4f4c-b706-bb7da89ebfc1","type":"CircleX"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"902e9cb2-6d54-44a8-a478-a4b6bab98d45","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"c737769c-1e45-473e-8ca3-3f691664ccdd","type":"CircleX"},{"attributes":{"source":{"id":"f24a667e-1585-454e-9aeb-1e73b245a86e","type":"ColumnDataSource"}},"id":"1b9cd741-67e0-4be7-bdd9-af6602b5cb51","type":"CDSView"},{"attributes":{"data_source":{"id":"f24a667e-1585-454e-9aeb-1e73b245a86e","type":"ColumnDataSource"},"glyph":{"id":"ca7e21b8-8005-479d-91aa-6f402114b54b","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46480b63-a1a9-45f5-9b62-09cab3c1e623","type":"Text"},"selection_glyph":null,"view":{"id":"1b9cd741-67e0-4be7-bdd9-af6602b5cb51","type":"CDSView"}},"id":"a694df39-c56a-4036-87f7-cf4d21eea326","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"X/Dw2gBBEEAVsNosStcTQPh2c/KJeBNAFFAP6GXuEUDuvc+umMIQQChjSCi6ohNAYp9NeNgsE0DrNK6qK8MRQIx25Vb1gRFAvMV0Xd5WEkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"TrrCtWavEkAga27LVA0QQNaAsLlLwhNAAcT9Ep0BEkDAyKRiQNMSQLMoLwhLUhJA2ziAUihEEUAghArYvXcSQHBCYvFxVhBANSr3SfGpE0A=","dtype":"float64","shape":[10]}}},"id":"42387082-d333-4c14-8348-2ae8c27cf928","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6e4f3051-b9ec-4b0f-a40b-6e2820bb323a","type":"ColumnDataSource"},"glyph":{"id":"1a420daa-fece-4808-9461-baa63c5675f8","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"138e4deb-3ca1-4289-aa0d-59e2ee5c0df7","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"ee033b19-d748-456e-b154-a0f1ddf1178f","type":"CDSView"}},"id":"efc9d732-80a5-4987-974e-dc0f2c4e2945","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"fabf2eb6-9c9a-4d1e-95a2-c4b49f7730bf","type":"Text"},{"attributes":{"source":{"id":"d40468e5-2246-4e84-84f4-80384d0bc44a","type":"ColumnDataSource"}},"id":"5c4213eb-d5d6-440b-9ce4-907f4daa706a","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"7edd439f-2733-495e-ab49-bf1bc6b39efb","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"530ff717-ae3e-421f-8053-75c7afd25a7a","type":"SquareX"},{"attributes":{"source":{"id":"c39ed945-2d97-40da-9b02-1e0d71d32ef1","type":"ColumnDataSource"}},"id":"7fbc1ff2-dc09-4628-b42c-2616bf4760f7","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"1bbl7SbaGUDyaD1N4+4bQBAOlVwZ1BhAVdfW43s0GkBG3jo7nMcZQCxu/n5VJhtAxEv2zRpOGkC+/0DPwI0ZQAqpRm/M7hpAWp1HDRDbGUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"9OQi22FIEUD3d1g6zBQRQKjjyy6eBhJAHpTGlx8aE0DqRo5IXmYQQIO5P6nwaBBA/cmYj0rmEUAkb1TdZTQRQIV5bHpM1hNAxYLEdXgzEUA=","dtype":"float64","shape":[10]}}},"id":"6e4f3051-b9ec-4b0f-a40b-6e2820bb323a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_cross / o+"]}},"id":"35524dd1-8b32-4469-b5a0-ce81352b3646","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"047dcbce-35bf-4b4e-954f-fbed4c1aa144","type":"SquareX"},{"attributes":{"data_source":{"id":"c39ed945-2d97-40da-9b02-1e0d71d32ef1","type":"ColumnDataSource"},"glyph":{"id":"902e9cb2-6d54-44a8-a478-a4b6bab98d45","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7edd439f-2733-495e-ab49-bf1bc6b39efb","type":"Text"},"selection_glyph":null,"view":{"id":"7fbc1ff2-dc09-4628-b42c-2616bf4760f7","type":"CDSView"}},"id":"9af638bf-048a-4fe1-a011-beba2b5487c6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"42387082-d333-4c14-8348-2ae8c27cf928","type":"ColumnDataSource"},"glyph":{"id":"530ff717-ae3e-421f-8053-75c7afd25a7a","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"047dcbce-35bf-4b4e-954f-fbed4c1aa144","type":"SquareX"},"selection_glyph":null,"view":{"id":"6cc6756f-17dd-4242-b04e-82a79fc3e8aa","type":"CDSView"}},"id":"818a8709-6abe-4935-a259-c66a69430c78","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35524dd1-8b32-4469-b5a0-ce81352b3646","type":"ColumnDataSource"}},"id":"9dddcc4a-a64f-47a3-a58b-e534dee51e6d","type":"CDSView"},{"attributes":{"source":{"id":"42387082-d333-4c14-8348-2ae8c27cf928","type":"ColumnDataSource"}},"id":"6cc6756f-17dd-4242-b04e-82a79fc3e8aa","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"d1a20c7c-6700-4f07-b47d-dd20274726da","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a420daa-fece-4808-9461-baa63c5675f8","type":"InvertedTriangle"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_cross"]}},"id":"f14feffc-df4a-4517-98e6-506b2051b5be","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"138e4deb-3ca1-4289-aa0d-59e2ee5c0df7","type":"InvertedTriangle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"452ef078-8746-4bdf-89b4-4cddd55d1f20","type":"Text"},{"attributes":{"data_source":{"id":"35524dd1-8b32-4469-b5a0-ce81352b3646","type":"ColumnDataSource"},"glyph":{"id":"c83d0852-eb5a-4d86-a295-d69d40d9dfcc","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"452ef078-8746-4bdf-89b4-4cddd55d1f20","type":"Text"},"selection_glyph":null,"view":{"id":"9dddcc4a-a64f-47a3-a58b-e534dee51e6d","type":"CDSView"}},"id":"73010da4-4d52-428c-96a8-24503fc2327b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"myKsdGqYIUDnAvLZ68UhQGhF33hXuyFA2nkI7rQSIECYpmNTFD4gQHaDniXpRCFAyIoDD+YxIECPIURXpH8gQOoyA1KIjSBAZI+TNcBDIUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"ZSwyBA2dEUBV5UkGvckQQBPMg4cu8BJAVDfpu0C2EUC9FGDKtskQQCX9EgDc1BFAWOFb9Qx5EEBPVo3n1a4TQPBAFCQ4XRJAYCSDaNWdE0A=","dtype":"float64","shape":[10]}}},"id":"8b8d67f9-7dfa-42fd-96b5-f4d0f5c6d91f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11cdc5bc-6304-45c8-9ea1-fbc13e1c6ec1","type":"ColumnDataSource"},"glyph":{"id":"66d74f08-3a52-4d12-9e6b-3b69f665ec82","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"02d8d6d2-205a-480a-95a5-a821916ece16","type":"CircleCross"},"selection_glyph":null,"view":{"id":"af57eb2a-331c-4e24-929d-9714ea5a3169","type":"CDSView"}},"id":"652181ab-aea0-4f6a-b0bf-8412a39f3959","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["diamond"]}},"id":"763d644d-37cc-4316-88e8-10e28fef784a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6e4f3051-b9ec-4b0f-a40b-6e2820bb323a","type":"ColumnDataSource"}},"id":"ee033b19-d748-456e-b154-a0f1ddf1178f","type":"CDSView"},{"attributes":{"source":{"id":"f14feffc-df4a-4517-98e6-506b2051b5be","type":"ColumnDataSource"}},"id":"135c755b-4d44-452e-968c-ede2750fbe30","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6ddee42-0c7b-494c-86e2-e4101a78bc84","type":"X"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"95e13b8b-b7f8-4b45-8fb5-97a1a9c5c641","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"DB8EiOJhBUBPrHTh028GQHDxB5yXoQNA0Ig5WY/KBEC0UIQj6dUHQKRtwp1AewFA3PyOwYqLB0As1N7pgm4CQGLFJOTg7AFAFUfjNo78BUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"1EBpXMYZHECKvWZzqacfQMGdOA+NDR1Aw72t3W3rHkAROQpb4ZMeQIw5cNkChR5Aptg/84D4HEBUOciPX3YeQAir4zvgch5AQNsP6yUzHUA=","dtype":"float64","shape":[10]}}},"id":"11cdc5bc-6304-45c8-9ea1-fbc13e1c6ec1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f14feffc-df4a-4517-98e6-506b2051b5be","type":"ColumnDataSource"},"glyph":{"id":"d1a20c7c-6700-4f07-b47d-dd20274726da","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95e13b8b-b7f8-4b45-8fb5-97a1a9c5c641","type":"Text"},"selection_glyph":null,"view":{"id":"135c755b-4d44-452e-968c-ede2750fbe30","type":"CDSView"}},"id":"d1c1e54e-be3c-4ea2-9f7e-197aff593d4b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"060a1123-1e8b-4372-aa60-963b43415bd6","type":"X"},{"attributes":{"data_source":{"id":"8b8d67f9-7dfa-42fd-96b5-f4d0f5c6d91f","type":"ColumnDataSource"},"glyph":{"id":"e6ddee42-0c7b-494c-86e2-e4101a78bc84","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"060a1123-1e8b-4372-aa60-963b43415bd6","type":"X"},"selection_glyph":null,"view":{"id":"878ca841-835b-4d76-9cdd-d870cdd40be7","type":"CDSView"}},"id":"ad5a2694-cc09-4266-b475-b57e150276d7","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"9fad7ac2-188a-4775-912a-754030960276","type":"Text"},{"attributes":{"source":{"id":"8b8d67f9-7dfa-42fd-96b5-f4d0f5c6d91f","type":"ColumnDataSource"}},"id":"878ca841-835b-4d76-9cdd-d870cdd40be7","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["cross / +"]}},"id":"c9547fef-db65-4340-90bf-890c39186b68","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"66d74f08-3a52-4d12-9e6b-3b69f665ec82","type":"CircleCross"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"be0ffb49-7705-4147-b0bc-0ca60d0bd97c","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"02d8d6d2-205a-480a-95a5-a821916ece16","type":"CircleCross"},{"attributes":{"source":{"id":"763d644d-37cc-4316-88e8-10e28fef784a","type":"ColumnDataSource"}},"id":"0ce208d2-4473-44dc-b360-b568a22b8378","type":"CDSView"},{"attributes":{"data_source":{"id":"763d644d-37cc-4316-88e8-10e28fef784a","type":"ColumnDataSource"},"glyph":{"id":"fabf2eb6-9c9a-4d1e-95a2-c4b49f7730bf","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9fad7ac2-188a-4775-912a-754030960276","type":"Text"},"selection_glyph":null,"view":{"id":"0ce208d2-4473-44dc-b360-b568a22b8378","type":"CDSView"}},"id":"45f98cf7-697d-49c7-83c8-520eb2e83c9e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"5LXMs3ZjE0AtGbrwaQwSQERgMQ/eVhFA9Bm9vuL3E0Cx/ZcWuyQTQGkGXFbYhRBAG4Ks5xtWEkDb6Xy2kyQQQIAIbnK/7RBAkpGDVasCEEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"m5OHg8zfHEBMKRc4sxAcQB4OmZ03ExxA0+qN5/adHUAg42HlGywfQC3qgUsFKxxAlD/87CrOHkBsxVDly1IeQISLZgkjbBxAprks5L0jH0A=","dtype":"float64","shape":[10]}}},"id":"2c031189-ad58-4520-8675-8370a2d9b997","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f1173b3d-9584-49bf-b645-17f1c9fab6e7","type":"ColumnDataSource"},"glyph":{"id":"201e23d0-268b-4130-8707-7b3523776fbc","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53c0b06c-e5b4-49fd-9a6f-e2584d129a2d","type":"Diamond"},"selection_glyph":null,"view":{"id":"38bcada9-146f-44d3-87db-6e610ceb210d","type":"CDSView"}},"id":"f34564f6-f945-4ba2-b947-bbcc5c5bf1ae","type":"GlyphRenderer"},{"attributes":{},"id":"dd566542-9c41-4a59-8e55-c5dc7dceefc4","type":"LinearScale"},{"attributes":{"source":{"id":"11cdc5bc-6304-45c8-9ea1-fbc13e1c6ec1","type":"ColumnDataSource"}},"id":"af57eb2a-331c-4e24-929d-9714ea5a3169","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"7d388a22-6423-4dd2-bcd4-6525d233e069","type":"Text"},{"attributes":{"callback":null},"id":"586326f4-62eb-40c6-9c73-e5d3656fc711","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2590fa53-bed9-46b4-872c-733df01361b0","type":"SquareCross"},{"attributes":{"source":{"id":"c9547fef-db65-4340-90bf-890c39186b68","type":"ColumnDataSource"}},"id":"c35896eb-09d1-4cf3-bf29-5e9c11342c75","type":"CDSView"},{"attributes":{"formatter":{"id":"226401bc-327b-4e9c-9ed3-d56381efd475","type":"BasicTickFormatter"},"plot":{"id":"a13436c1-c33a-46d2-894b-4e8775b493e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd51e971-5ef9-4c5c-bf05-52f11c2205e9","type":"BasicTicker"},"visible":false},"id":"091e472c-39f8-42e3-a115-03d32ad06104","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"M+IDyf18G0DcHj1LJaUbQOoou0ZH1BtAcylD2f0OGECrlrDbVlsbQLFSluZfZRpAYozHhcGMGUDZG+hIMp0aQJBH2mxIrhtApWylj8mOGUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"ZmyUq6A2HEB++QV9vsgcQEo1nlIj7xxAw4Kg99WOHED5mFK8MZYeQHzA50qLNhxAQn3497bGH0BkJFYGSzccQMAMaLTk9x1AOx9yC4q7HUA=","dtype":"float64","shape":[10]}}},"id":"f1173b3d-9584-49bf-b645-17f1c9fab6e7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c9547fef-db65-4340-90bf-890c39186b68","type":"ColumnDataSource"},"glyph":{"id":"be0ffb49-7705-4147-b0bc-0ca60d0bd97c","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7d388a22-6423-4dd2-bcd4-6525d233e069","type":"Text"},"selection_glyph":null,"view":{"id":"c35896eb-09d1-4cf3-bf29-5e9c11342c75","type":"CDSView"}},"id":"105af0b9-6c15-4ba2-aef1-ca45a68c68ca","type":"GlyphRenderer"},{"attributes":{},"id":"bd51e971-5ef9-4c5c-bf05-52f11c2205e9","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bed09516-5372-4712-ae7f-4bd45b86a669","type":"SquareCross"},{"attributes":{"data_source":{"id":"2c031189-ad58-4520-8675-8370a2d9b997","type":"ColumnDataSource"},"glyph":{"id":"2590fa53-bed9-46b4-872c-733df01361b0","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bed09516-5372-4712-ae7f-4bd45b86a669","type":"SquareCross"},"selection_glyph":null,"view":{"id":"e5d5a7bb-26be-4f50-a099-2cad6897e6ea","type":"CDSView"}},"id":"35d6bb80-8093-4efb-b851-c2451296f111","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"544f4449-ccf4-4292-a3b7-a0485c23ce2b","type":"BasicTickFormatter"},"plot":{"id":"a13436c1-c33a-46d2-894b-4e8775b493e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"23e8212a-f010-4a41-bebd-e1bc9cf29234","type":"BasicTicker"},"visible":false},"id":"a12885e2-237a-4273-8cdf-d31a49c51bac","type":"LinearAxis"},{"attributes":{"source":{"id":"2c031189-ad58-4520-8675-8370a2d9b997","type":"ColumnDataSource"}},"id":"e5d5a7bb-26be-4f50-a099-2cad6897e6ea","type":"CDSView"},{"attributes":{},"id":"23e8212a-f010-4a41-bebd-e1bc9cf29234","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"201e23d0-268b-4130-8707-7b3523776fbc","type":"Diamond"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"a13436c1-c33a-46d2-894b-4e8775b493e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"23e8212a-f010-4a41-bebd-e1bc9cf29234","type":"BasicTicker"}},"id":"ebabaf87-95e1-4cf6-979f-d2d3be7d3b2b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"53c0b06c-e5b4-49fd-9a6f-e2584d129a2d","type":"Diamond"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb6dbbaf-0dc2-4dec-8f81-3521ce34771d","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"TNLTp4vzIEB9sXpV3YIhQPQsXpx30SBA9+Tf0F6NIUDlnb/oW2cgQI/7BNsx1iBA9aajZFWZIUDwNM1ExJYhQBylkmzK/iBAiHk1/pMjIUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"sGyoZWJEHEAfMTyWWuAdQNEtfdTdAB5AN4Z9DDsYHkA9EWAEaOQdQFs5YtUqcRxAHCRVSwt6HkA+tBBs7bEcQFQWBkvnqB9AKC4TE5BzHEA=","dtype":"float64","shape":[10]}}},"id":"592562aa-4eb3-4c3d-824b-2964a29da58a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e4ac6cd0-57a3-4c79-9b2a-cc93f4313441","type":"ColumnDataSource"}},"id":"b50907d4-409d-4adb-8c2f-bc1037e8849c","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"9c9dfc87-35ce-4ce5-9c3a-c6097a573746","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"NfrnoPVuAUDeRTTgAfUCQOidi07VTARA/rjP/GJsAEAhe8mE14sBQH+4jqbHcgRA69tQvBAuA0BCs8t+V54AQNisXLnJ7gFAchIwWM40BEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"R93F3Q++8j99fKiamEj1P3tLVoiRZPw/nPdP41RP/T9CwSfvnXz2P+/OlQ4Cg/4/02r2n6E/9D+c1sKpA/rwP17xuPOBnPY/JHOVbITp+D8=","dtype":"float64","shape":[10]}}},"id":"e4ac6cd0-57a3-4c79-9b2a-cc93f4313441","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f1173b3d-9584-49bf-b645-17f1c9fab6e7","type":"ColumnDataSource"}},"id":"38bcada9-146f-44d3-87db-6e610ceb210d","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe3b7de8-05df-44ad-ac98-965c87e01abe","type":"Cross"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle / o"]}},"id":"2b128be3-0fd2-480e-9b25-6f73e19c8436","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e4ac6cd0-57a3-4c79-9b2a-cc93f4313441","type":"ColumnDataSource"},"glyph":{"id":"13b93a59-9863-4cad-9842-92b466ed9209","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb6dbbaf-0dc2-4dec-8f81-3521ce34771d","type":"Circle"},"selection_glyph":null,"view":{"id":"b50907d4-409d-4adb-8c2f-bc1037e8849c","type":"CDSView"}},"id":"8e572fbf-646b-4e14-9d88-38c5fed6f6bf","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bea90c99-ac95-48df-9dcf-b09de33fac8c","type":"Cross"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"091e472c-39f8-42e3-a115-03d32ad06104","type":"LinearAxis"}],"left":[{"id":"a12885e2-237a-4273-8cdf-d31a49c51bac","type":"LinearAxis"}],"renderers":[{"id":"091e472c-39f8-42e3-a115-03d32ad06104","type":"LinearAxis"},{"id":"52c0bf74-8921-4e4a-96d6-8bfc5bb7942e","type":"Grid"},{"id":"a12885e2-237a-4273-8cdf-d31a49c51bac","type":"LinearAxis"},{"id":"ebabaf87-95e1-4cf6-979f-d2d3be7d3b2b","type":"Grid"},{"id":"4edcff2e-e0ca-4f57-b165-d2da98aab930","type":"BoxAnnotation"},{"id":"8e572fbf-646b-4e14-9d88-38c5fed6f6bf","type":"GlyphRenderer"},{"id":"72c9853f-1e5f-42ff-922e-15b1d68f3a48","type":"GlyphRenderer"},{"id":"f407521c-e6d1-4f4f-a35a-bc1b12723447","type":"GlyphRenderer"},{"id":"5dd4a4ac-e549-468d-9e8c-8c7d03e73c57","type":"GlyphRenderer"},{"id":"6fc0e631-967c-497a-9240-f6b8e7fa226d","type":"GlyphRenderer"},{"id":"818a8709-6abe-4935-a259-c66a69430c78","type":"GlyphRenderer"},{"id":"efc9d732-80a5-4987-974e-dc0f2c4e2945","type":"GlyphRenderer"},{"id":"ad5a2694-cc09-4266-b475-b57e150276d7","type":"GlyphRenderer"},{"id":"652181ab-aea0-4f6a-b0bf-8412a39f3959","type":"GlyphRenderer"},{"id":"35d6bb80-8093-4efb-b851-c2451296f111","type":"GlyphRenderer"},{"id":"f34564f6-f945-4ba2-b947-bbcc5c5bf1ae","type":"GlyphRenderer"},{"id":"4c0c7679-37f3-4809-9250-264b03453588","type":"GlyphRenderer"},{"id":"27a7819d-4ae7-4493-9a19-8d599252a0f8","type":"GlyphRenderer"},{"id":"b6ac7439-7f50-4d06-95f1-892e05fa652d","type":"GlyphRenderer"},{"id":"b11f6a2c-1d10-4da6-9245-41b7a140ae4e","type":"GlyphRenderer"},{"id":"3d88d316-2909-42d0-896d-1e1b34a0409b","type":"GlyphRenderer"},{"id":"62528fd7-1776-4c48-a495-3423b224e205","type":"GlyphRenderer"},{"id":"45e7eba8-6984-449a-9857-575181f23b7b","type":"GlyphRenderer"},{"id":"a694df39-c56a-4036-87f7-cf4d21eea326","type":"GlyphRenderer"},{"id":"9af638bf-048a-4fe1-a011-beba2b5487c6","type":"GlyphRenderer"},{"id":"73010da4-4d52-428c-96a8-24503fc2327b","type":"GlyphRenderer"},{"id":"d1c1e54e-be3c-4ea2-9f7e-197aff593d4b","type":"GlyphRenderer"},{"id":"45f98cf7-697d-49c7-83c8-520eb2e83c9e","type":"GlyphRenderer"},{"id":"105af0b9-6c15-4ba2-aef1-ca45a68c68ca","type":"GlyphRenderer"}],"title":{"id":"b932db04-cd0e-476f-9d16-ccb5934d4f32","type":"Title"},"toolbar":{"id":"8083105b-9d51-42b6-9ed3-3202036e8bb0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1d8c04ba-2f48-4240-a7e5-00d5670b622c","type":"DataRange1d"},"x_scale":{"id":"dd566542-9c41-4a59-8e55-c5dc7dceefc4","type":"LinearScale"},"y_range":{"id":"586326f4-62eb-40c6-9c73-e5d3656fc711","type":"DataRange1d"},"y_scale":{"id":"f9e5f90a-ff8a-4bb3-858d-b53dbccf2a28","type":"LinearScale"}},"id":"a13436c1-c33a-46d2-894b-4e8775b493e6","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"592562aa-4eb3-4c3d-824b-2964a29da58a","type":"ColumnDataSource"},"glyph":{"id":"fe3b7de8-05df-44ad-ac98-965c87e01abe","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bea90c99-ac95-48df-9dcf-b09de33fac8c","type":"Cross"},"selection_glyph":null,"view":{"id":"25e0c486-7f5c-40f6-b7c4-23c8a6edee8f","type":"CDSView"}},"id":"4c0c7679-37f3-4809-9250-264b03453588","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Bokeh Markers"},"id":"b932db04-cd0e-476f-9d16-ccb5934d4f32","type":"Title"},{"attributes":{"source":{"id":"592562aa-4eb3-4c3d-824b-2964a29da58a","type":"ColumnDataSource"}},"id":"25e0c486-7f5c-40f6-b7c4-23c8a6edee8f","type":"CDSView"},{"attributes":{"callback":null},"id":"1d8c04ba-2f48-4240-a7e5-00d5670b622c","type":"DataRange1d"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"615aff04-f3f7-4194-9229-4ec185664d72","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1ad103c4-71d6-4f47-aabd-f160e8a174ab","type":"PanTool"},{"id":"70b9c2fa-1633-423a-9508-748ef151a1b4","type":"WheelZoomTool"},{"id":"8bbc234d-c76e-481d-a807-5e06fd246285","type":"BoxZoomTool"},{"id":"0f5bf7ed-9d87-46aa-a433-96733479ac9b","type":"SaveTool"},{"id":"71c93461-cfc3-4211-b59b-11f29fec70f0","type":"ResetTool"},{"id":"4b1f15c8-2289-4ab1-8b7b-321bcd10c6ff","type":"HelpTool"}]},"id":"8083105b-9d51-42b6-9ed3-3202036e8bb0","type":"Toolbar"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"991bb2e2-dfcb-447b-9aff-656cd4f8c2ed","type":"Text"},{"attributes":{"data_source":{"id":"2b128be3-0fd2-480e-9b25-6f73e19c8436","type":"ColumnDataSource"},"glyph":{"id":"615aff04-f3f7-4194-9229-4ec185664d72","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"991bb2e2-dfcb-447b-9aff-656cd4f8c2ed","type":"Text"},"selection_glyph":null,"view":{"id":"1e6542d6-447c-4bc8-95e8-df8290db840b","type":"CDSView"}},"id":"27a7819d-4ae7-4493-9a19-8d599252a0f8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"13b93a59-9863-4cad-9842-92b466ed9209","type":"Circle"},{"attributes":{},"id":"f9e5f90a-ff8a-4bb3-858d-b53dbccf2a28","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"a13436c1-c33a-46d2-894b-4e8775b493e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd51e971-5ef9-4c5c-bf05-52f11c2205e9","type":"BasicTicker"}},"id":"52c0bf74-8921-4e4a-96d6-8bfc5bb7942e","type":"Grid"}],"root_ids":["a13436c1-c33a-46d2-894b-4e8775b493e6"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"7a44b38c-1ea6-456c-aa08-a7334a424318","elementid":"5c88267a-fb06-4f47-a2f4-a211c585459b","modelid":"a13436c1-c33a-46d2-894b-4e8775b493e6"}];
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