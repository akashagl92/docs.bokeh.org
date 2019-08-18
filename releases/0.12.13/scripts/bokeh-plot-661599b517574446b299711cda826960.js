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
      };var element = document.getElementById("4d844706-7f11-4c7f-94ff-444a29f4afa1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d844706-7f11-4c7f-94ff-444a29f4afa1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0493f6dc-eb8f-4088-b4f6-b9736f40fb86":{"roots":{"references":[{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"7c0a46cc-a764-44f9-b9f1-cfcc2d5091c2","type":"Circle"},{"attributes":{"overlay":{"id":"bd1ff119-1d05-42d7-b980-2d64e412ec36","type":"BoxAnnotation"}},"id":"ff0c7623-704b-49e1-b410-6339820a6220","type":"BoxZoomTool"},{"attributes":{},"id":"1b52cab4-93f1-455c-a39d-3a972a7393f5","type":"HelpTool"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"f7b0108b-6c7e-4258-807c-dc7f945ba33f","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"a752d724-e518-4bdc-91bf-fe0d53e0c04f","type":"Circle"},{"attributes":{"source":{"id":"4527d2d3-47ac-43ce-b9b4-489a6ea988a0","type":"ColumnDataSource"}},"id":"1f2a7d34-8057-44fe-b3e3-6da8f447839a","type":"CDSView"},{"attributes":{},"id":"4af0d970-75fa-4f77-8032-cf4426451ce7","type":"WheelZoomTool"},{"attributes":{"range":null},"id":"0248fb58-93a9-40d3-9fb3-fba340425f63","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"a2d90216-960a-4f99-9edd-b17109f8acda","type":"Circle"},{"attributes":{},"id":"e06910e9-a065-4308-be7f-6e8cb0a31b62","type":"PanTool"},{"attributes":{"plot":{"id":"bbe3421e-ba2f-45c7-9366-74fe2b722972","subtype":"Figure","type":"Plot"},"ticker":{"id":"87d1dfcb-2cd4-486c-8e6c-b0a8f9c9ccad","type":"BasicTicker"}},"id":"aad39956-4339-454a-9346-25c2024312bd","type":"Grid"},{"attributes":{"data_source":{"id":"6df0fc11-8d55-4065-95e5-7bd4e68f4d30","type":"ColumnDataSource"},"glyph":{"id":"57c0624d-d9e4-46d7-be1d-9c1a8aa8f843","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46a3d532-a84c-4131-a74a-f22f4664f31e","type":"Circle"},"selection_glyph":null,"view":{"id":"10fd4740-a56e-49fd-b6e5-80746ed8e6c0","type":"CDSView"}},"id":"73cb804e-0457-432c-b48c-1620823eb54c","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"82e51180-981e-4252-a05c-6c8dccefc8ea","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"0187987c-f7e3-4fe5-a18a-648ea8ec2e28","type":"ColumnDataSource"},{"attributes":{"source":{"id":"08fd829d-eafe-4073-a3e0-661e3e526b97","type":"ColumnDataSource"}},"id":"ad334dd6-be00-4e40-857a-0d7889dca519","type":"CDSView"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"06631be4-5799-40a2-b05f-249fd4fbcfe5","type":"Circle"},{"attributes":{},"id":"155bf821-ddcd-4ff5-b8c1-dbaed9a5fd87","type":"HelpTool"},{"attributes":{"data_source":{"id":"d16fa455-7c28-456f-a25b-272c04cee3db","type":"ColumnDataSource"},"glyph":{"id":"06631be4-5799-40a2-b05f-249fd4fbcfe5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44b9f1e3-808e-4ed9-959e-ff851d64f498","type":"Circle"},"selection_glyph":null,"view":{"id":"be17695b-a331-4529-8dfb-463ea14656d3","type":"CDSView"}},"id":"4e5f3a8a-b1a3-44e2-95fe-d7e9dbd4a12d","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"07aec2a6-9956-4cde-9d14-da0a253b1200","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"9f53772a-d92e-4526-a4e8-0ac016db419e","type":"Circle"},{"attributes":{"range":null},"id":"f7b0108b-6c7e-4258-807c-dc7f945ba33f","type":"Jitter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"2d959def-5fa4-42ea-a811-6d511f566ff4","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"b2bd39e7-482a-4928-bbfc-a526409016e1","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"99a42e63-2ed3-46e1-80ad-2898b3dd5677","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"d18f2aed-8a2c-4623-98fb-3ca0d3c45d3c","type":"Circle"},{"attributes":{"range":null},"id":"07aec2a6-9956-4cde-9d14-da0a253b1200","type":"Jitter"},{"attributes":{"range":null},"id":"99a42e63-2ed3-46e1-80ad-2898b3dd5677","type":"Jitter"},{"attributes":{"data_source":{"id":"0187987c-f7e3-4fe5-a18a-648ea8ec2e28","type":"ColumnDataSource"},"glyph":{"id":"d18f2aed-8a2c-4623-98fb-3ca0d3c45d3c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3d7b88f7-b4c9-42d4-a902-67946a1694fc","type":"Circle"},"selection_glyph":null,"view":{"id":"10d73de2-63fb-4b69-9d92-d6bd83d35919","type":"CDSView"}},"id":"ef987477-d3e6-45de-b6e6-17b900d2b084","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"2b27e38b-f920-4907-affe-e57155b084c8","type":"Circle"},{"attributes":{"callback":null},"id":"4119d2c9-b393-487f-8609-f93c9e45121f","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"d79a8621-fa0f-47b0-9ba7-1682c0364a6f","type":"ColumnDataSource"},{"attributes":{},"id":"2a7888f2-b8d7-4f69-af99-1e59cbe3d807","type":"PanTool"},{"attributes":{"data_source":{"id":"051e73f2-6a66-4915-9d0e-8d380c9ea6dd","type":"ColumnDataSource"},"glyph":{"id":"9f53772a-d92e-4526-a4e8-0ac016db419e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"00199dfb-ed11-471f-b70c-839efa384eca","type":"Circle"},"selection_glyph":null,"view":{"id":"7509be3f-0018-4726-92ec-3e0e14cdd12e","type":"CDSView"}},"id":"058886e9-f21d-4699-9e88-606f62fea27b","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"d7a3a361-6d57-4ebc-9e0d-d0b3bc93102e","subtype":"Figure","type":"Plot"},{"id":"bbe3421e-ba2f-45c7-9366-74fe2b722972","subtype":"Figure","type":"Plot"}]},"id":"1a603a8c-809a-4e68-b3f4-68d3fe485823","type":"Column"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"0248fb58-93a9-40d3-9fb3-fba340425f63","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"57c0624d-d9e4-46d7-be1d-9c1a8aa8f843","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ee47927f-d170-43f4-a3b0-065a3a63d777","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"d16fa455-7c28-456f-a25b-272c04cee3db","type":"ColumnDataSource"},{"attributes":{},"id":"bceb62f2-e50e-435e-bb20-198c9d66b855","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"8b1a2129-fbcd-4f03-90af-2479e4fe819b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"f4b08e5c-8b27-41a6-b45a-6e5cbeb01d61","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"34af534e-96b2-4d39-b3b5-848011ef1dd8","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"3d6a0bef-620c-4aa9-bec9-f190fab530d3","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"062288b6-f9e7-4a2b-9f22-a019a8a38354","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"99a42e63-2ed3-46e1-80ad-2898b3dd5677","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"3d7b88f7-b4c9-42d4-a902-67946a1694fc","type":"Circle"},{"attributes":{"below":[{"id":"6a9dbdb7-eb2c-40ca-8af0-643b4d5366b9","type":"LinearAxis"}],"left":[{"id":"07125466-a93d-48e1-bbcd-878730cf6d3c","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"6a9dbdb7-eb2c-40ca-8af0-643b4d5366b9","type":"LinearAxis"},{"id":"aad39956-4339-454a-9346-25c2024312bd","type":"Grid"},{"id":"07125466-a93d-48e1-bbcd-878730cf6d3c","type":"LinearAxis"},{"id":"1ae0d8ad-482d-41e4-9009-f3107513df9e","type":"Grid"},{"id":"bd1ff119-1d05-42d7-b980-2d64e412ec36","type":"BoxAnnotation"},{"id":"058886e9-f21d-4699-9e88-606f62fea27b","type":"GlyphRenderer"},{"id":"1e6c351e-3cf1-4221-8d34-f046f56bb9ff","type":"GlyphRenderer"},{"id":"2ae7d68e-c39d-4467-83da-0b89358052d6","type":"GlyphRenderer"},{"id":"8e02ceec-f5a7-4167-8294-78980ec7297c","type":"GlyphRenderer"},{"id":"7b013928-56fb-43bd-beb4-bc1068178536","type":"GlyphRenderer"},{"id":"60b1da8b-b5be-4004-a3a8-01485d323708","type":"GlyphRenderer"},{"id":"0a798419-bb75-4c1c-9188-140cdb982d3c","type":"GlyphRenderer"},{"id":"203fe09b-edd8-4b11-b9b6-5f1632b38181","type":"GlyphRenderer"},{"id":"1b111e8a-3aa2-4764-9999-b402a30cc45b","type":"GlyphRenderer"},{"id":"18a0c815-0e75-4a23-9de5-200f5aca22c7","type":"GlyphRenderer"},{"id":"55d3eeae-674e-4ba8-861c-08ebc95b9669","type":"GlyphRenderer"},{"id":"73cb804e-0457-432c-b48c-1620823eb54c","type":"GlyphRenderer"},{"id":"ef987477-d3e6-45de-b6e6-17b900d2b084","type":"GlyphRenderer"}],"title":{"id":"585c5d1a-7457-4887-9d30-e1aab3258470","type":"Title"},"toolbar":{"id":"1bf31d4a-111b-4e06-9b76-943c7741b0bf","type":"Toolbar"},"x_range":{"id":"1dbc6d0d-38b9-4866-8d76-b6fd1d3ec346","type":"DataRange1d"},"x_scale":{"id":"3f41b161-cfcf-4333-9edd-67079bb95dd4","type":"LinearScale"},"y_range":{"id":"4119d2c9-b393-487f-8609-f93c9e45121f","type":"DataRange1d"},"y_scale":{"id":"5a8d6573-98e9-42dc-95c4-7e94ff9aa554","type":"LinearScale"}},"id":"bbe3421e-ba2f-45c7-9366-74fe2b722972","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"454d5f7d-487a-427f-8558-b5969b7ac308","type":"ColumnDataSource"}},"id":"eefee29d-cf82-4798-b09c-2e05b5874ef6","type":"CDSView"},{"attributes":{"overlay":{"id":"ee47927f-d170-43f4-a3b0-065a3a63d777","type":"BoxAnnotation"}},"id":"cbd69c5b-8ff7-470e-abb9-8148915cf0aa","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"bbe3421e-ba2f-45c7-9366-74fe2b722972","subtype":"Figure","type":"Plot"},"ticker":{"id":"467adf4c-95d4-46b2-9155-5af4e1807a55","type":"BasicTicker"}},"id":"1ae0d8ad-482d-41e4-9009-f3107513df9e","type":"Grid"},{"attributes":{"source":{"id":"e26ea1a3-7492-44af-a4f8-3117e98e5b79","type":"ColumnDataSource"}},"id":"c62433ee-02cf-4ad5-b6c2-7535b0736d2e","type":"CDSView"},{"attributes":{},"id":"4a6a6cce-7416-443a-bc76-4e31d66963b6","type":"ResetTool"},{"attributes":{"below":[{"id":"54eb23a5-ae58-4399-9a4a-e25480a09df8","type":"LinearAxis"}],"left":[{"id":"53108731-3e19-47d9-aca2-0773c6216ced","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"54eb23a5-ae58-4399-9a4a-e25480a09df8","type":"LinearAxis"},{"id":"51d36352-c9c6-47ad-80ad-be479cd6c9b5","type":"Grid"},{"id":"53108731-3e19-47d9-aca2-0773c6216ced","type":"LinearAxis"},{"id":"1b43818b-dc44-4a0f-a46e-bad0eebf96ba","type":"Grid"},{"id":"ee47927f-d170-43f4-a3b0-065a3a63d777","type":"BoxAnnotation"},{"id":"55de4537-6b6f-478b-9502-81241236a311","type":"GlyphRenderer"},{"id":"a69b177e-f717-429d-a816-db987839d77f","type":"GlyphRenderer"},{"id":"f2472560-a35b-428d-9525-6ede0d1ea4f3","type":"GlyphRenderer"},{"id":"0007e875-507c-4e5c-ac1a-a5d4a1937d65","type":"GlyphRenderer"},{"id":"4b5d7f01-d52b-46af-a187-fb965079f552","type":"GlyphRenderer"},{"id":"4a836849-f193-40b1-94d1-e89de9e3d1c9","type":"GlyphRenderer"},{"id":"4b5b3b11-02b1-4b39-a545-665d9d5a8478","type":"GlyphRenderer"},{"id":"29145d32-55c5-4d42-9788-ab88d7df743a","type":"GlyphRenderer"},{"id":"a9ec1bcf-2bc4-4f83-952a-2338698a5085","type":"GlyphRenderer"},{"id":"264517f0-8411-4765-815c-785c537f3059","type":"GlyphRenderer"},{"id":"5bd04542-a76a-4cfa-b7bc-4d511983ce2b","type":"GlyphRenderer"},{"id":"4e5f3a8a-b1a3-44e2-95fe-d7e9dbd4a12d","type":"GlyphRenderer"},{"id":"f25bf092-55e1-4d66-8466-e369c86aeb22","type":"GlyphRenderer"}],"title":{"id":"b7edf7e5-c595-491c-ace6-81ad9996d638","type":"Title"},"toolbar":{"id":"5cab66a6-eab9-4e05-b809-de82df46c22c","type":"Toolbar"},"x_range":{"id":"1401355b-dd4c-4ec9-9efa-3487064af7e1","type":"DataRange1d"},"x_scale":{"id":"d48f1a6d-1acb-42a1-b03d-5e3a1a5409ac","type":"LinearScale"},"y_range":{"id":"4b341363-7a03-4ad7-b767-2e70b68a5cd4","type":"DataRange1d"},"y_scale":{"id":"3274fa01-39ab-402e-9331-8d484580a3a3","type":"LinearScale"}},"id":"d7a3a361-6d57-4ebc-9e0d-d0b3bc93102e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"58dbeac8-fe5b-42e9-bdd9-1078ab77eed4","type":"ResetTool"},{"attributes":{"range":null},"id":"4f43d7c8-855a-45e2-b066-039cd44609c9","type":"Jitter"},{"attributes":{"formatter":{"id":"baec0908-21e5-4599-b891-3abb4cb9f413","type":"BasicTickFormatter"},"plot":{"id":"d7a3a361-6d57-4ebc-9e0d-d0b3bc93102e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae13b334-e234-4369-8725-ee64338b1abb","type":"BasicTicker"}},"id":"53108731-3e19-47d9-aca2-0773c6216ced","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"3584b033-18b2-4427-baf6-11a3c4cb2395","type":"Circle"},{"attributes":{},"id":"56e3089a-9db8-461c-ba93-8fda936266db","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8b1a2129-fbcd-4f03-90af-2479e4fe819b","type":"ColumnDataSource"},"glyph":{"id":"2d959def-5fa4-42ea-a811-6d511f566ff4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"535a6144-a0f5-4680-ad68-01455f9e9417","type":"Circle"},"selection_glyph":null,"view":{"id":"6649d9ac-e475-4d04-bed8-5f2de890aa7a","type":"CDSView"}},"id":"55de4537-6b6f-478b-9502-81241236a311","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d16fa455-7c28-456f-a25b-272c04cee3db","type":"ColumnDataSource"}},"id":"be17695b-a331-4529-8dfb-463ea14656d3","type":"CDSView"},{"attributes":{},"id":"3f41b161-cfcf-4333-9edd-67079bb95dd4","type":"LinearScale"},{"attributes":{"data_source":{"id":"f17d9a5a-990d-4104-8e39-7ead5980dde2","type":"ColumnDataSource"},"glyph":{"id":"2b27e38b-f920-4907-affe-e57155b084c8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7f045e0b-fc96-4d7d-98aa-415c79feceaf","type":"Circle"},"selection_glyph":null,"view":{"id":"b6e07baa-b065-408b-bf30-66f62379c32f","type":"CDSView"}},"id":"0007e875-507c-4e5c-ac1a-a5d4a1937d65","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Years vs mpg with jittering"},"id":"585c5d1a-7457-4887-9d30-e1aab3258470","type":"Title"},{"attributes":{"source":{"id":"d79a8621-fa0f-47b0-9ba7-1682c0364a6f","type":"ColumnDataSource"}},"id":"4cec5a63-134b-4148-8353-6ae1ae85b835","type":"CDSView"},{"attributes":{"range":null},"id":"34af534e-96b2-4d39-b3b5-848011ef1dd8","type":"Jitter"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"10feea05-b676-4105-8af9-2b7ed1479def","type":"ColumnDataSource"},{"attributes":{},"id":"1460ec67-a7bb-4a8c-8277-1b23ce5cdfae","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4527d2d3-47ac-43ce-b9b4-489a6ea988a0","type":"ColumnDataSource"},"glyph":{"id":"82e51180-981e-4252-a05c-6c8dccefc8ea","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90601fc1-7b49-497b-894b-f36467d1c58f","type":"Circle"},"selection_glyph":null,"view":{"id":"1f2a7d34-8057-44fe-b3e3-6da8f447839a","type":"CDSView"}},"id":"f2472560-a35b-428d-9525-6ede0d1ea4f3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"07aec2a6-9956-4cde-9d14-da0a253b1200","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"00199dfb-ed11-471f-b70c-839efa384eca","type":"Circle"},{"attributes":{},"id":"5a8d6573-98e9-42dc-95c4-7e94ff9aa554","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"f7b0108b-6c7e-4258-807c-dc7f945ba33f","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"c3261aba-ecb9-47a6-b84d-ba2dcc493df8","type":"Circle"},{"attributes":{},"id":"baec0908-21e5-4599-b891-3abb4cb9f413","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"90601fc1-7b49-497b-894b-f36467d1c58f","type":"Circle"},{"attributes":{"formatter":{"id":"1460ec67-a7bb-4a8c-8277-1b23ce5cdfae","type":"BasicTickFormatter"},"plot":{"id":"bbe3421e-ba2f-45c7-9366-74fe2b722972","subtype":"Figure","type":"Plot"},"ticker":{"id":"87d1dfcb-2cd4-486c-8e6c-b0a8f9c9ccad","type":"BasicTicker"}},"id":"6a9dbdb7-eb2c-40ca-8af0-643b4d5366b9","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"7be0bfc3-3c63-457a-9b57-547e117310e9","type":"ColumnDataSource"},{"attributes":{"source":{"id":"0187987c-f7e3-4fe5-a18a-648ea8ec2e28","type":"ColumnDataSource"}},"id":"10d73de2-63fb-4b69-9d92-d6bd83d35919","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"5824e6ad-fba5-4a85-a4f5-e7742882fd27","type":"Circle"},{"attributes":{"data_source":{"id":"10feea05-b676-4105-8af9-2b7ed1479def","type":"ColumnDataSource"},"glyph":{"id":"4c849e26-0a3b-4515-a1af-d0729ba8387a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5824e6ad-fba5-4a85-a4f5-e7742882fd27","type":"Circle"},"selection_glyph":null,"view":{"id":"5730db09-1d85-4494-80d8-85829663dd6d","type":"CDSView"}},"id":"a69b177e-f717-429d-a816-db987839d77f","type":"GlyphRenderer"},{"attributes":{},"id":"87d1dfcb-2cd4-486c-8e6c-b0a8f9c9ccad","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2a7888f2-b8d7-4f69-af99-1e59cbe3d807","type":"PanTool"},{"id":"4d31ab32-2a5d-4902-bd57-10989b0d9506","type":"WheelZoomTool"},{"id":"cbd69c5b-8ff7-470e-abb9-8148915cf0aa","type":"BoxZoomTool"},{"id":"bceb62f2-e50e-435e-bb20-198c9d66b855","type":"SaveTool"},{"id":"58dbeac8-fe5b-42e9-bdd9-1078ab77eed4","type":"ResetTool"},{"id":"1b52cab4-93f1-455c-a39d-3a972a7393f5","type":"HelpTool"}]},"id":"5cab66a6-eab9-4e05-b809-de82df46c22c","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"7f045e0b-fc96-4d7d-98aa-415c79feceaf","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"e26ea1a3-7492-44af-a4f8-3117e98e5b79","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e06910e9-a065-4308-be7f-6e8cb0a31b62","type":"PanTool"},{"id":"4af0d970-75fa-4f77-8032-cf4426451ce7","type":"WheelZoomTool"},{"id":"ff0c7623-704b-49e1-b410-6339820a6220","type":"BoxZoomTool"},{"id":"a17ca593-ae99-469d-8951-eb23110097a3","type":"SaveTool"},{"id":"4a6a6cce-7416-443a-bc76-4e31d66963b6","type":"ResetTool"},{"id":"155bf821-ddcd-4ff5-b8c1-dbaed9a5fd87","type":"HelpTool"}]},"id":"1bf31d4a-111b-4e06-9b76-943c7741b0bf","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"f17d9a5a-990d-4104-8e39-7ead5980dde2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7be0bfc3-3c63-457a-9b57-547e117310e9","type":"ColumnDataSource"},"glyph":{"id":"2105b24e-3d2c-4481-bb5c-5ab4a17c1dc4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53186bf9-b47d-4d91-93be-fc19645cb88b","type":"Circle"},"selection_glyph":null,"view":{"id":"fcf2668e-8634-44ca-a701-3179399a6966","type":"CDSView"}},"id":"2ae7d68e-c39d-4467-83da-0b89358052d6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e26ea1a3-7492-44af-a4f8-3117e98e5b79","type":"ColumnDataSource"},"glyph":{"id":"9c52e443-9900-481b-85b3-2d4fa4a43966","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ae8274da-2366-4787-8478-7627011c9ae2","type":"Circle"},"selection_glyph":null,"view":{"id":"c62433ee-02cf-4ad5-b6c2-7535b0736d2e","type":"CDSView"}},"id":"55d3eeae-674e-4ba8-861c-08ebc95b9669","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4b341363-7a03-4ad7-b767-2e70b68a5cd4","type":"DataRange1d"},{"attributes":{"data_source":{"id":"08fd829d-eafe-4073-a3e0-661e3e526b97","type":"ColumnDataSource"},"glyph":{"id":"3d6a0bef-620c-4aa9-bec9-f190fab530d3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29c9bd02-c16c-4777-89d3-d7fe7e0606d8","type":"Circle"},"selection_glyph":null,"view":{"id":"ad334dd6-be00-4e40-857a-0d7889dca519","type":"CDSView"}},"id":"1e6c351e-3cf1-4221-8d34-f046f56bb9ff","type":"GlyphRenderer"},{"attributes":{},"id":"ae13b334-e234-4369-8725-ee64338b1abb","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"6df0fc11-8d55-4065-95e5-7bd4e68f4d30","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"1401355b-dd4c-4ec9-9efa-3487064af7e1","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"dbc1f1aa-48e5-4bb5-95c4-d2596025effe","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"ae8274da-2366-4787-8478-7627011c9ae2","type":"Circle"},{"attributes":{"source":{"id":"10feea05-b676-4105-8af9-2b7ed1479def","type":"ColumnDataSource"}},"id":"5730db09-1d85-4494-80d8-85829663dd6d","type":"CDSView"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"dbc1f1aa-48e5-4bb5-95c4-d2596025effe","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"9c52e443-9900-481b-85b3-2d4fa4a43966","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"4f43d7c8-855a-45e2-b066-039cd44609c9","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"53186bf9-b47d-4d91-93be-fc19645cb88b","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"4c849e26-0a3b-4515-a1af-d0729ba8387a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"44b9f1e3-808e-4ed9-959e-ff851d64f498","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"7ecc7fb6-e33c-4ce2-897d-39257915cdac","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"d2126028-7b37-4b2d-97dc-7384eb242905","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"34af534e-96b2-4d39-b3b5-848011ef1dd8","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"29c9bd02-c16c-4777-89d3-d7fe7e0606d8","type":"Circle"},{"attributes":{},"id":"a17ca593-ae99-469d-8951-eb23110097a3","type":"SaveTool"},{"attributes":{"callback":null},"id":"1dbc6d0d-38b9-4866-8d76-b6fd1d3ec346","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"d7a3a361-6d57-4ebc-9e0d-d0b3bc93102e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae13b334-e234-4369-8725-ee64338b1abb","type":"BasicTicker"}},"id":"1b43818b-dc44-4a0f-a46e-bad0eebf96ba","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"0248fb58-93a9-40d3-9fb3-fba340425f63","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"46a3d532-a84c-4131-a74a-f22f4664f31e","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"4527d2d3-47ac-43ce-b9b4-489a6ea988a0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"08fd829d-eafe-4073-a3e0-661e3e526b97","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d79a8621-fa0f-47b0-9ba7-1682c0364a6f","type":"ColumnDataSource"},"glyph":{"id":"7c0a46cc-a764-44f9-b9f1-cfcc2d5091c2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a2d90216-960a-4f99-9edd-b17109f8acda","type":"Circle"},"selection_glyph":null,"view":{"id":"4cec5a63-134b-4148-8353-6ae1ae85b835","type":"CDSView"}},"id":"f25bf092-55e1-4d66-8466-e369c86aeb22","type":"GlyphRenderer"},{"attributes":{},"id":"8f696c38-9fcd-4f99-90f3-0a25acc5645d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"7ecc7fb6-e33c-4ce2-897d-39257915cdac","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"388e244b-0df3-48ee-bb50-e113b32bfd59","type":"Circle"},{"attributes":{"source":{"id":"6df0fc11-8d55-4065-95e5-7bd4e68f4d30","type":"ColumnDataSource"}},"id":"10fd4740-a56e-49fd-b6e5-80746ed8e6c0","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bd1ff119-1d05-42d7-b980-2d64e412ec36","type":"BoxAnnotation"},{"attributes":{},"id":"3274fa01-39ab-402e-9331-8d484580a3a3","type":"LinearScale"},{"attributes":{"plot":{"id":"d7a3a361-6d57-4ebc-9e0d-d0b3bc93102e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f696c38-9fcd-4f99-90f3-0a25acc5645d","type":"BasicTicker"}},"id":"51d36352-c9c6-47ad-80ad-be479cd6c9b5","type":"Grid"},{"attributes":{"data_source":{"id":"454d5f7d-487a-427f-8558-b5969b7ac308","type":"ColumnDataSource"},"glyph":{"id":"b2bd39e7-482a-4928-bbfc-a526409016e1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3584b033-18b2-4427-baf6-11a3c4cb2395","type":"Circle"},"selection_glyph":null,"view":{"id":"eefee29d-cf82-4798-b09c-2e05b5874ef6","type":"CDSView"}},"id":"4a836849-f193-40b1-94d1-e89de9e3d1c9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"535a6144-a0f5-4680-ad68-01455f9e9417","type":"Circle"},{"attributes":{"formatter":{"id":"56e3089a-9db8-461c-ba93-8fda936266db","type":"BasicTickFormatter"},"plot":{"id":"d7a3a361-6d57-4ebc-9e0d-d0b3bc93102e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f696c38-9fcd-4f99-90f3-0a25acc5645d","type":"BasicTicker"}},"id":"54eb23a5-ae58-4399-9a4a-e25480a09df8","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"4f43d7c8-855a-45e2-b066-039cd44609c9","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"2105b24e-3d2c-4481-bb5c-5ab4a17c1dc4","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg without jittering"},"id":"b7edf7e5-c595-491c-ace6-81ad9996d638","type":"Title"},{"attributes":{},"id":"d48f1a6d-1acb-42a1-b03d-5e3a1a5409ac","type":"LinearScale"},{"attributes":{},"id":"4d31ab32-2a5d-4902-bd57-10989b0d9506","type":"WheelZoomTool"},{"attributes":{"source":{"id":"7be0bfc3-3c63-457a-9b57-547e117310e9","type":"ColumnDataSource"}},"id":"fcf2668e-8634-44ca-a701-3179399a6966","type":"CDSView"},{"attributes":{"formatter":{"id":"fae4581c-e2fc-4685-9b16-cef25294b9fe","type":"BasicTickFormatter"},"plot":{"id":"bbe3421e-ba2f-45c7-9366-74fe2b722972","subtype":"Figure","type":"Plot"},"ticker":{"id":"467adf4c-95d4-46b2-9155-5af4e1807a55","type":"BasicTicker"}},"id":"07125466-a93d-48e1-bbcd-878730cf6d3c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"051e73f2-6a66-4915-9d0e-8d380c9ea6dd","type":"ColumnDataSource"},{"attributes":{},"id":"467adf4c-95d4-46b2-9155-5af4e1807a55","type":"BasicTicker"},{"attributes":{},"id":"fae4581c-e2fc-4685-9b16-cef25294b9fe","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8b1a2129-fbcd-4f03-90af-2479e4fe819b","type":"ColumnDataSource"}},"id":"6649d9ac-e475-4d04-bed8-5f2de890aa7a","type":"CDSView"},{"attributes":{"data_source":{"id":"f4b08e5c-8b27-41a6-b45a-6e5cbeb01d61","type":"ColumnDataSource"},"glyph":{"id":"a752d724-e518-4bdc-91bf-fe0d53e0c04f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c3261aba-ecb9-47a6-b84d-ba2dcc493df8","type":"Circle"},"selection_glyph":null,"view":{"id":"7ab02a92-b030-406f-93c8-edc8a4cfb707","type":"CDSView"}},"id":"8e02ceec-f5a7-4167-8294-78980ec7297c","type":"GlyphRenderer"},{"attributes":{"range":null},"id":"7ecc7fb6-e33c-4ce2-897d-39257915cdac","type":"Jitter"},{"attributes":{"source":{"id":"f17d9a5a-990d-4104-8e39-7ead5980dde2","type":"ColumnDataSource"}},"id":"b6e07baa-b065-408b-bf30-66f62379c32f","type":"CDSView"},{"attributes":{"source":{"id":"051e73f2-6a66-4915-9d0e-8d380c9ea6dd","type":"ColumnDataSource"}},"id":"7509be3f-0018-4726-92ec-3e0e14cdd12e","type":"CDSView"},{"attributes":{"source":{"id":"062288b6-f9e7-4a2b-9f22-a019a8a38354","type":"ColumnDataSource"}},"id":"348c8d64-8790-476f-89e8-120eaf0bd5c7","type":"CDSView"},{"attributes":{"source":{"id":"a2b5baf4-279f-4fa0-9d7a-ea183a341fb8","type":"ColumnDataSource"}},"id":"b9dd18e0-df13-41f9-b779-e3521a12d5f1","type":"CDSView"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"42061a6a-cad3-47d4-a816-09da03a0d66e","type":"Circle"},{"attributes":{"source":{"id":"0a51fb3c-98ed-4046-a7c9-82d41f556ff8","type":"ColumnDataSource"}},"id":"286a9284-fa1c-4e86-9f31-1dae9b1d3ea7","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"b029b417-2219-425f-8859-5cae0d0a3676","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a2b5baf4-279f-4fa0-9d7a-ea183a341fb8","type":"ColumnDataSource"},"glyph":{"id":"42061a6a-cad3-47d4-a816-09da03a0d66e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c7997427-1682-4f47-a5b7-91c35cfcfc21","type":"Circle"},"selection_glyph":null,"view":{"id":"b9dd18e0-df13-41f9-b779-e3521a12d5f1","type":"CDSView"}},"id":"a9ec1bcf-2bc4-4f83-952a-2338698a5085","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"0f6d32da-e66f-4522-874d-8a8c870925ae","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"454d5f7d-487a-427f-8558-b5969b7ac308","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"d71bb333-2a53-4328-81a2-62689ebef811","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"5717a63d-fdb3-4a84-8538-1f9617df63d2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b029b417-2219-425f-8859-5cae0d0a3676","type":"ColumnDataSource"}},"id":"de2a0a78-fb25-4edf-a609-599baf00a6a7","type":"CDSView"},{"attributes":{"source":{"id":"1cfbf13c-a033-42f5-98d9-0de9bc70083d","type":"ColumnDataSource"}},"id":"8a39b5d5-7871-4198-9748-be5aa36d09d3","type":"CDSView"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"545bf05b-115e-49e4-a670-629baec0622d","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"90481c37-3cfd-4407-8b1c-4e974df04435","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"f529eaf2-e89a-49d4-b46f-409cfd765d53","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"545bf05b-115e-49e4-a670-629baec0622d","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"f379c1fb-b5a9-4bfa-891d-4ddac7e5b542","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"f492df20-8241-4938-b088-6e8e0996660d","type":"Circle"},{"attributes":{"source":{"id":"eb2ea723-920e-4de5-8d33-15cf8db568e8","type":"ColumnDataSource"}},"id":"4bf736f6-2647-4b2f-a8fd-1d6d4e21a120","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"d1d54a40-a995-43d0-ada6-2225f3373bbe","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"286ed88a-aad5-49a8-8c80-7cfdde894951","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"286ed88a-aad5-49a8-8c80-7cfdde894951","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"5424edd6-18d0-449c-831b-d5213b4a309e","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"306d877f-9272-462d-ae4d-d736eb9176ef","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"e8d9094c-98ee-4465-9b18-de72233381e9","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"eb2ea723-920e-4de5-8d33-15cf8db568e8","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"b7ea7eed-6443-4ce8-99d9-44617bce13b5","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"9674e4f0-87db-4310-bd3a-cab6c5cbc419","type":"Circle"},{"attributes":{"range":null},"id":"545bf05b-115e-49e4-a670-629baec0622d","type":"Jitter"},{"attributes":{"range":null},"id":"dbc1f1aa-48e5-4bb5-95c4-d2596025effe","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"7a5ac54f-a2cf-40ef-bdb4-5aa3d461ba2e","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"fa8291b6-26cf-49ac-a6c0-454367e0ffaa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"eb2ea723-920e-4de5-8d33-15cf8db568e8","type":"ColumnDataSource"},"glyph":{"id":"90481c37-3cfd-4407-8b1c-4e974df04435","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f379c1fb-b5a9-4bfa-891d-4ddac7e5b542","type":"Circle"},"selection_glyph":null,"view":{"id":"4bf736f6-2647-4b2f-a8fd-1d6d4e21a120","type":"CDSView"}},"id":"18a0c815-0e75-4a23-9de5-200f5aca22c7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fa8291b6-26cf-49ac-a6c0-454367e0ffaa","type":"ColumnDataSource"},"glyph":{"id":"f529eaf2-e89a-49d4-b46f-409cfd765d53","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7a5ac54f-a2cf-40ef-bdb4-5aa3d461ba2e","type":"Circle"},"selection_glyph":null,"view":{"id":"34ce4ee5-d6e0-41a3-82f9-a07be820e1c7","type":"CDSView"}},"id":"5bd04542-a76a-4cfa-b7bc-4d511983ce2b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"1cfbf13c-a033-42f5-98d9-0de9bc70083d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"fa8291b6-26cf-49ac-a6c0-454367e0ffaa","type":"ColumnDataSource"}},"id":"34ce4ee5-d6e0-41a3-82f9-a07be820e1c7","type":"CDSView"},{"attributes":{"data_source":{"id":"1cfbf13c-a033-42f5-98d9-0de9bc70083d","type":"ColumnDataSource"},"glyph":{"id":"ceca223f-8159-4067-8ecb-900d3d394049","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9cc2b971-4165-4400-a9d7-631adc16a1ce","type":"Circle"},"selection_glyph":null,"view":{"id":"8a39b5d5-7871-4198-9748-be5aa36d09d3","type":"CDSView"}},"id":"7b013928-56fb-43bd-beb4-bc1068178536","type":"GlyphRenderer"},{"attributes":{"source":{"id":"09aabf3c-be4f-424e-bdf4-815b011dddbe","type":"ColumnDataSource"}},"id":"9ba65189-bc49-4f90-aaaa-b3707309d26e","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"c00dd123-7c12-4a40-b532-969d1937acba","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"062288b6-f9e7-4a2b-9f22-a019a8a38354","type":"ColumnDataSource"},"glyph":{"id":"388e244b-0df3-48ee-bb50-e113b32bfd59","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d2126028-7b37-4b2d-97dc-7384eb242905","type":"Circle"},"selection_glyph":null,"view":{"id":"348c8d64-8790-476f-89e8-120eaf0bd5c7","type":"CDSView"}},"id":"60b1da8b-b5be-4004-a3a8-01485d323708","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b029b417-2219-425f-8859-5cae0d0a3676","type":"ColumnDataSource"},"glyph":{"id":"9674e4f0-87db-4310-bd3a-cab6c5cbc419","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d71bb333-2a53-4328-81a2-62689ebef811","type":"Circle"},"selection_glyph":null,"view":{"id":"de2a0a78-fb25-4edf-a609-599baf00a6a7","type":"CDSView"}},"id":"264517f0-8411-4765-815c-785c537f3059","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"transform":{"id":"b784aa6d-d66f-450f-99c3-c1ba3310de4b","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"44ee8a40-5f7f-42f5-8302-4079699633be","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"f4ba388b-adc6-4862-a9c6-743d879ee4a5","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"e83d0586-9c44-4f0d-bf9c-31d5b9eb4e64","type":"Circle"},{"attributes":{"source":{"id":"c00dd123-7c12-4a40-b532-969d1937acba","type":"ColumnDataSource"}},"id":"590b2f8d-244f-4fec-a7fb-d0689f534215","type":"CDSView"},{"attributes":{"data_source":{"id":"0a51fb3c-98ed-4046-a7c9-82d41f556ff8","type":"ColumnDataSource"},"glyph":{"id":"546bea9a-17c4-4ddc-a25d-8058e48ed076","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e83d0586-9c44-4f0d-bf9c-31d5b9eb4e64","type":"Circle"},"selection_glyph":null,"view":{"id":"286a9284-fa1c-4e86-9f31-1dae9b1d3ea7","type":"CDSView"}},"id":"203fe09b-edd8-4b11-b9b6-5f1632b38181","type":"GlyphRenderer"},{"attributes":{"range":null},"id":"d54cc349-0ed2-4ca9-be2d-b132f8da4748","type":"Jitter"},{"attributes":{"data_source":{"id":"d1d54a40-a995-43d0-ada6-2225f3373bbe","type":"ColumnDataSource"},"glyph":{"id":"b7ea7eed-6443-4ce8-99d9-44617bce13b5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e8d9094c-98ee-4465-9b18-de72233381e9","type":"Circle"},"selection_glyph":null,"view":{"id":"ca961a82-5fde-48c4-bac1-587b0879cee0","type":"CDSView"}},"id":"4b5d7f01-d52b-46af-a187-fb965079f552","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"c7997427-1682-4f47-a5b7-91c35cfcfc21","type":"Circle"},{"attributes":{"source":{"id":"f4b08e5c-8b27-41a6-b45a-6e5cbeb01d61","type":"ColumnDataSource"}},"id":"7ab02a92-b030-406f-93c8-edc8a4cfb707","type":"CDSView"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"d54cc349-0ed2-4ca9-be2d-b132f8da4748","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"ceca223f-8159-4067-8ecb-900d3d394049","type":"Circle"},{"attributes":{"source":{"id":"5717a63d-fdb3-4a84-8538-1f9617df63d2","type":"ColumnDataSource"}},"id":"342cf102-12b3-4b22-9393-5c5ede86a10d","type":"CDSView"},{"attributes":{"data_source":{"id":"5717a63d-fdb3-4a84-8538-1f9617df63d2","type":"ColumnDataSource"},"glyph":{"id":"3af4993b-4ff1-4a83-accd-38d661f2df7a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5424edd6-18d0-449c-831b-d5213b4a309e","type":"Circle"},"selection_glyph":null,"view":{"id":"342cf102-12b3-4b22-9393-5c5ede86a10d","type":"CDSView"}},"id":"1b111e8a-3aa2-4764-9999-b402a30cc45b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"d54cc349-0ed2-4ca9-be2d-b132f8da4748","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"9cc2b971-4165-4400-a9d7-631adc16a1ce","type":"Circle"},{"attributes":{"source":{"id":"306d877f-9272-462d-ae4d-d736eb9176ef","type":"ColumnDataSource"}},"id":"334de720-3d9e-4ada-8c34-e50e5a4a595f","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"a2b5baf4-279f-4fa0-9d7a-ea183a341fb8","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"f4ba388b-adc6-4862-a9c6-743d879ee4a5","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"546bea9a-17c4-4ddc-a25d-8058e48ed076","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"25d5f4a0-78d4-4ff0-b4d9-58ebd53cd7d6","type":"Circle"},{"attributes":{"range":null},"id":"f4ba388b-adc6-4862-a9c6-743d879ee4a5","type":"Jitter"},{"attributes":{"data_source":{"id":"306d877f-9272-462d-ae4d-d736eb9176ef","type":"ColumnDataSource"},"glyph":{"id":"44ee8a40-5f7f-42f5-8302-4079699633be","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"850f6e8c-36bd-40f8-8721-f2c68c274efa","type":"Circle"},"selection_glyph":null,"view":{"id":"334de720-3d9e-4ada-8c34-e50e5a4a595f","type":"CDSView"}},"id":"0a798419-bb75-4c1c-9188-140cdb982d3c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d1d54a40-a995-43d0-ada6-2225f3373bbe","type":"ColumnDataSource"}},"id":"ca961a82-5fde-48c4-bac1-587b0879cee0","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"b784aa6d-d66f-450f-99c3-c1ba3310de4b","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"850f6e8c-36bd-40f8-8721-f2c68c274efa","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"09aabf3c-be4f-424e-bdf4-815b011dddbe","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"286ed88a-aad5-49a8-8c80-7cfdde894951","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"3af4993b-4ff1-4a83-accd-38d661f2df7a","type":"Circle"},{"attributes":{"range":null},"id":"b784aa6d-d66f-450f-99c3-c1ba3310de4b","type":"Jitter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"59d86422-d414-4161-a736-29022d47a64b","type":"Circle"},{"attributes":{"data_source":{"id":"09aabf3c-be4f-424e-bdf4-815b011dddbe","type":"ColumnDataSource"},"glyph":{"id":"59d86422-d414-4161-a736-29022d47a64b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25d5f4a0-78d4-4ff0-b4d9-58ebd53cd7d6","type":"Circle"},"selection_glyph":null,"view":{"id":"9ba65189-bc49-4f90-aaaa-b3707309d26e","type":"CDSView"}},"id":"29145d32-55c5-4d42-9788-ab88d7df743a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c00dd123-7c12-4a40-b532-969d1937acba","type":"ColumnDataSource"},"glyph":{"id":"0f6d32da-e66f-4522-874d-8a8c870925ae","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f492df20-8241-4938-b088-6e8e0996660d","type":"Circle"},"selection_glyph":null,"view":{"id":"590b2f8d-244f-4fec-a7fb-d0689f534215","type":"CDSView"}},"id":"4b5b3b11-02b1-4b39-a545-665d9d5a8478","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"0a51fb3c-98ed-4046-a7c9-82d41f556ff8","type":"ColumnDataSource"}],"root_ids":["1a603a8c-809a-4e68-b3f4-68d3fe485823"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"0493f6dc-eb8f-4088-b4f6-b9736f40fb86","elementid":"4d844706-7f11-4c7f-94ff-444a29f4afa1","modelid":"1a603a8c-809a-4e68-b3f4-68d3fe485823"}];
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