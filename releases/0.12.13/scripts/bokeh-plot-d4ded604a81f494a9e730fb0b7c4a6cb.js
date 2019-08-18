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
      };var element = document.getElementById("1c80eaec-9643-40b6-8934-48eef9a20f72");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1c80eaec-9643-40b6-8934-48eef9a20f72' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ceb7b6c7-de2e-40db-a88b-f1d2262487cc":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGB"]}},"id":"003229ee-839c-4287-b543-a811bf975682","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7c5b831-0a2b-475f-876d-d67da8835d66","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3425c19a-c370-451e-b5f6-3cd6261b1066","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d22d614d-7443-4912-acdc-9354cf7d0b93","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"892ff203-ec30-4c5f-ac15-6ae53c1ab255","type":"Circle"},{"attributes":{"source":{"id":"485db4f8-8bc1-49f7-80c6-624d00078bcc","type":"ColumnDataSource"}},"id":"40eacf26-59b4-4c84-8703-2bbf159dd04a","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3da0f101-a800-4a77-bfec-34e2ab17e556","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a991b4b-4b2b-4624-8cb7-f1f4d0da4785","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a21c4dbe-6447-4277-b8f9-2c2ae43ebbea","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f141ae0e-ff44-45ff-8373-e4407050d5aa","type":"Circle"},{"attributes":{"source":{"id":"003229ee-839c-4287-b543-a811bf975682","type":"ColumnDataSource"}},"id":"46b62417-5dfd-43e4-a83b-7282c1b703bb","type":"CDSView"},{"attributes":{"data_source":{"id":"003229ee-839c-4287-b543-a811bf975682","type":"ColumnDataSource"},"glyph":{"id":"d22d614d-7443-4912-acdc-9354cf7d0b93","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a21c4dbe-6447-4277-b8f9-2c2ae43ebbea","type":"Circle"},"selection_glyph":null,"view":{"id":"46b62417-5dfd-43e4-a83b-7282c1b703bb","type":"CDSView"}},"id":"6223e6de-fa6f-45f5-b52b-af23a8d1de9e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d5fc28d3-a90d-4e58-9861-4ee2a563ead6","type":"ColumnDataSource"}},"id":"04a9da11-62ac-42f0-913a-ce796a5d7ee8","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGBA"]}},"id":"921e7f63-88a1-4e04-80ec-a42ca3a10115","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGB"]}},"id":"d5fc28d3-a90d-4e58-9861-4ee2a563ead6","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"46c1a348-2859-4817-91cc-56ebbe218023","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ce97019-d90b-465c-832e-d12fd74c9d43","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fddd661c-f051-4852-8b8a-1034c6f1373c","type":"Circle"},{"attributes":{"source":{"id":"921e7f63-88a1-4e04-80ec-a42ca3a10115","type":"ColumnDataSource"}},"id":"4ac57e43-27e6-4160-9efa-4f097e2bd0d4","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0596e8e3-c856-4c22-aa30-4cb42043edac","type":"Circle"},{"attributes":{"data_source":{"id":"921e7f63-88a1-4e04-80ec-a42ca3a10115","type":"ColumnDataSource"},"glyph":{"id":"3425c19a-c370-451e-b5f6-3cd6261b1066","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46c1a348-2859-4817-91cc-56ebbe218023","type":"Circle"},"selection_glyph":null,"view":{"id":"4ac57e43-27e6-4160-9efa-4f097e2bd0d4","type":"CDSView"}},"id":"33c0df4d-8df9-4051-8527-d956cf48f4d1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d5fc28d3-a90d-4e58-9861-4ee2a563ead6","type":"ColumnDataSource"},"glyph":{"id":"f141ae0e-ff44-45ff-8373-e4407050d5aa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7c5b831-0a2b-475f-876d-d67da8835d66","type":"Circle"},"selection_glyph":null,"view":{"id":"04a9da11-62ac-42f0-913a-ce796a5d7ee8","type":"CDSView"}},"id":"31432c19-d6b6-4dd7-ab1b-d8d01f31b2cd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGB"]}},"id":"15b9c815-5ec6-4161-a26f-462ed7c0be97","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a04e9b2-5d8e-4eab-9df5-9ef170e99a32","type":"Circle"},{"attributes":{"source":{"id":"15b9c815-5ec6-4161-a26f-462ed7c0be97","type":"ColumnDataSource"}},"id":"a32ab370-200e-4216-9e63-54c722f934cf","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a19f61b0-db67-43e9-a3b2-3bab402eb5ee","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGBA"]}},"id":"68cc524f-f1d7-460b-8cac-cf26642c6785","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"64d6a493-c9a3-44c9-8723-fc3efa275d71","type":"Circle"},{"attributes":{"data_source":{"id":"15b9c815-5ec6-4161-a26f-462ed7c0be97","type":"ColumnDataSource"},"glyph":{"id":"892ff203-ec30-4c5f-ac15-6ae53c1ab255","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a19f61b0-db67-43e9-a3b2-3bab402eb5ee","type":"Circle"},"selection_glyph":null,"view":{"id":"a32ab370-200e-4216-9e63-54c722f934cf","type":"CDSView"}},"id":"6a1f874d-4013-46c6-bab7-5350a5c28cc8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGBA"]}},"id":"1fc13ff2-d21d-45b4-8d03-052a29e701b1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"61a605c8-af4c-43fa-bac7-3e26e5ea9ee8","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha"]}},"id":"ddd7b0c4-3e80-401c-b84e-f494ed677f46","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha"]}},"id":"e9252421-ba69-41f1-8efa-41cfc3ca25f6","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1fc13ff2-d21d-45b4-8d03-052a29e701b1","type":"ColumnDataSource"}},"id":"4d1ea552-6c4a-4a18-9803-4fdd285fedd6","type":"CDSView"},{"attributes":{"data_source":{"id":"1fc13ff2-d21d-45b4-8d03-052a29e701b1","type":"ColumnDataSource"},"glyph":{"id":"3da0f101-a800-4a77-bfec-34e2ab17e556","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61a605c8-af4c-43fa-bac7-3e26e5ea9ee8","type":"Circle"},"selection_glyph":null,"view":{"id":"4d1ea552-6c4a-4a18-9803-4fdd285fedd6","type":"CDSView"}},"id":"0947dcb2-4784-4509-a9f5-0235905dc190","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6826990-d190-4bb7-bb72-6bf08a7dae6c","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["None"]}},"id":"5a4a5c18-953a-4639-8b22-d3050940310e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGBA"]}},"id":"e403b799-0a97-4b98-93c9-6197830f9486","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5a4a5c18-953a-4639-8b22-d3050940310e","type":"ColumnDataSource"},"glyph":{"id":"fddd661c-f051-4852-8b8a-1034c6f1373c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8f81b83b-8b74-4ae0-8654-a8511bae3ec1","type":"Circle"},"selection_glyph":null,"view":{"id":"f2eca84b-b778-4e35-9db2-4aaabb2c206a","type":"CDSView"}},"id":"2ec251a4-1a7f-4917-935f-19948156b19a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f81b83b-8b74-4ae0-8654-a8511bae3ec1","type":"Circle"},{"attributes":{"data_source":{"id":"68cc524f-f1d7-460b-8cac-cf26642c6785","type":"ColumnDataSource"},"glyph":{"id":"7a991b4b-4b2b-4624-8cb7-f1f4d0da4785","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6ce97019-d90b-465c-832e-d12fd74c9d43","type":"Circle"},"selection_glyph":null,"view":{"id":"74951829-35e9-4fb6-93bb-3d0816478344","type":"CDSView"}},"id":"946451b0-fa7a-4bd7-a214-6881edba7294","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"69e6856f-bc9a-46c5-9d7f-ab5534623cf9","type":"Circle"},{"attributes":{"source":{"id":"5a4a5c18-953a-4639-8b22-d3050940310e","type":"ColumnDataSource"}},"id":"f2eca84b-b778-4e35-9db2-4aaabb2c206a","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8e26c40-d4a4-4dbb-a281-77841bea8363","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGB"]}},"id":"5ffb353b-451c-43fc-99e0-d9fd1bf7470f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a23b57c-aca1-4a26-af4a-754087fe7ef0","type":"Circle"},{"attributes":{"data_source":{"id":"e9252421-ba69-41f1-8efa-41cfc3ca25f6","type":"ColumnDataSource"},"glyph":{"id":"0a04e9b2-5d8e-4eab-9df5-9ef170e99a32","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"253a2fee-4bb0-4b4c-a6dc-e53e46cfd5da","type":"Circle"},"selection_glyph":null,"view":{"id":"cebc2cbe-56db-48af-b765-4a97dc84e502","type":"CDSView"}},"id":"9e43b5eb-620d-4706-92ae-0c9ddcb3482a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"253a2fee-4bb0-4b4c-a6dc-e53e46cfd5da","type":"Circle"},{"attributes":{"source":{"id":"51a575d5-c443-431f-a7fe-db03ec4f8af7","type":"ColumnDataSource"}},"id":"a6bd1511-bd48-49c1-9e93-798733ed4acb","type":"CDSView"},{"attributes":{"source":{"id":"e9252421-ba69-41f1-8efa-41cfc3ca25f6","type":"ColumnDataSource"}},"id":"cebc2cbe-56db-48af-b765-4a97dc84e502","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3cb94fd5-96f4-41dc-9c41-8ad8e2b88d32","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGBA"]}},"id":"bd0efaf0-09f6-41b3-aead-41aad7c78504","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c34ed0f-e0f2-4b4c-8f11-edb68f2765e7","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"673e7f63-e84d-492e-89f6-0a740d5bd41a","type":"Circle"},{"attributes":{"source":{"id":"e403b799-0a97-4b98-93c9-6197830f9486","type":"ColumnDataSource"}},"id":"58b78529-793c-43b8-b9b9-4b167c588af7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d74ec559-a823-4b66-b764-5facf0154911","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"82bafffd-2cf4-4b6a-836c-d6a492dcdc18","type":"Circle"},{"attributes":{"source":{"id":"5ffb353b-451c-43fc-99e0-d9fd1bf7470f","type":"ColumnDataSource"}},"id":"089e7195-3824-4f94-9b63-ac856d38296b","type":"CDSView"},{"attributes":{"source":{"id":"22ca574c-a2fb-4e7c-a004-34b9cb31699a","type":"ColumnDataSource"}},"id":"104ae92d-a9cf-4384-8af7-3c252c3285e0","type":"CDSView"},{"attributes":{"data_source":{"id":"5ffb353b-451c-43fc-99e0-d9fd1bf7470f","type":"ColumnDataSource"},"glyph":{"id":"9a23b57c-aca1-4a26-af4a-754087fe7ef0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"673e7f63-e84d-492e-89f6-0a740d5bd41a","type":"Circle"},"selection_glyph":null,"view":{"id":"089e7195-3824-4f94-9b63-ac856d38296b","type":"CDSView"}},"id":"225ec972-1fb1-4546-950e-f1a88e77e9b6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"284cc1bb-6077-4eb2-8002-a378f0740d92","type":"ColumnDataSource"},"glyph":{"id":"1626cba1-e713-4a65-bed4-d7b0160b2c4b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82bafffd-2cf4-4b6a-836c-d6a492dcdc18","type":"Circle"},"selection_glyph":null,"view":{"id":"9caeebc5-f62b-4d24-920a-22eee6cc2e9a","type":"CDSView"}},"id":"05d9690b-8926-43e5-9fd6-1b7c14e5149d","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"67fe8ff0-7b16-40fd-a163-2dbe808b4ae2","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGBA"]}},"id":"3cbbfa78-335d-4f08-8054-36b308940380","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e826180d-9882-477a-90e2-50d421245767","type":"ColumnDataSource"}},"id":"4237eee2-b4a8-410a-9f1c-7afd67953c1c","type":"CDSView"},{"attributes":{"source":{"id":"2b7e7cab-8434-4868-a129-ddb460f21410","type":"ColumnDataSource"}},"id":"97868f73-ae01-43de-bd58-82838c32009b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"60b581be-99a1-4b1b-9193-df241d6a5b6e","type":"Circle"},{"attributes":{"data_source":{"id":"22ca574c-a2fb-4e7c-a004-34b9cb31699a","type":"ColumnDataSource"},"glyph":{"id":"c4c8e7e7-66c1-4b9c-8795-3dd8683dbe93","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a8e26c40-d4a4-4dbb-a281-77841bea8363","type":"Circle"},"selection_glyph":null,"view":{"id":"104ae92d-a9cf-4384-8af7-3c252c3285e0","type":"CDSView"}},"id":"c54b9d6f-e27a-4e07-b265-6236e331284d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3cbbfa78-335d-4f08-8054-36b308940380","type":"ColumnDataSource"}},"id":"ff766634-6786-4451-a5d7-718ee5f644a8","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"381f4d1d-c132-4d3f-b7d4-909704ae1cb8","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee343dee-4b0e-4005-87bd-1a65dcb95228","type":"Circle"},{"attributes":{"data_source":{"id":"3cbbfa78-335d-4f08-8054-36b308940380","type":"ColumnDataSource"},"glyph":{"id":"d74ec559-a823-4b66-b764-5facf0154911","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3cb94fd5-96f4-41dc-9c41-8ad8e2b88d32","type":"Circle"},"selection_glyph":null,"view":{"id":"ff766634-6786-4451-a5d7-718ee5f644a8","type":"CDSView"}},"id":"0b103e3e-f2c6-4efd-afa6-b60f0f2c9120","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68cc524f-f1d7-460b-8cac-cf26642c6785","type":"ColumnDataSource"}},"id":"74951829-35e9-4fb6-93bb-3d0816478344","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGBA"]}},"id":"284cc1bb-6077-4eb2-8002-a378f0740d92","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGB"]}},"id":"2b7e7cab-8434-4868-a129-ddb460f21410","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"72b85879-996c-42a6-969a-2e18e01b4190","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4c8e7e7-66c1-4b9c-8795-3dd8683dbe93","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e7fc003-1a68-4ca6-a172-bacce00ccc3e","type":"Circle"},{"attributes":{"data_source":{"id":"e403b799-0a97-4b98-93c9-6197830f9486","type":"ColumnDataSource"},"glyph":{"id":"6314755b-a221-4c30-89a1-f91b82d47dd1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2f10bc75-2fd2-4233-b97d-c16307cbb1d4","type":"Circle"},"selection_glyph":null,"view":{"id":"58b78529-793c-43b8-b9b9-4b167c588af7","type":"CDSView"}},"id":"1d498723-2d15-4c93-907e-82c2dbfc568d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"060f1aa0-edce-429f-a2e9-65f3c4e87176","type":"ColumnDataSource"}},"id":"b8150d1c-b185-4b71-9431-645985b532f9","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4904dba1-0e13-4b8f-a958-1cc1d37c2308","type":"Circle"},{"attributes":{"data_source":{"id":"2b7e7cab-8434-4868-a129-ddb460f21410","type":"ColumnDataSource"},"glyph":{"id":"69e6856f-bc9a-46c5-9d7f-ab5534623cf9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72b85879-996c-42a6-969a-2e18e01b4190","type":"Circle"},"selection_glyph":null,"view":{"id":"97868f73-ae01-43de-bd58-82838c32009b","type":"CDSView"}},"id":"90d63676-4f5d-4392-bd80-6b16e35ab62c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1626cba1-e713-4a65-bed4-d7b0160b2c4b","type":"Circle"},{"attributes":{"data_source":{"id":"51a575d5-c443-431f-a7fe-db03ec4f8af7","type":"ColumnDataSource"},"glyph":{"id":"1c34ed0f-e0f2-4b4c-8f11-edb68f2765e7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"60b581be-99a1-4b1b-9193-df241d6a5b6e","type":"Circle"},"selection_glyph":null,"view":{"id":"a6bd1511-bd48-49c1-9e93-798733ed4acb","type":"CDSView"}},"id":"1555a675-ff37-4b52-8880-875f4041be49","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGBA"]}},"id":"060f1aa0-edce-429f-a2e9-65f3c4e87176","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed6944cd-1a60-4e3e-9aed-96633529335e","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGB"]}},"id":"e826180d-9882-477a-90e2-50d421245767","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d94b25c-170e-4783-9505-d45030e654a1","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"734b2f9e-16e7-411d-a6dd-fff2d8c4844f","type":"Circle"},{"attributes":{"data_source":{"id":"060f1aa0-edce-429f-a2e9-65f3c4e87176","type":"ColumnDataSource"},"glyph":{"id":"4904dba1-0e13-4b8f-a958-1cc1d37c2308","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3d94b25c-170e-4783-9505-d45030e654a1","type":"Circle"},"selection_glyph":null,"view":{"id":"b8150d1c-b185-4b71-9431-645985b532f9","type":"CDSView"}},"id":"a3252e39-96e7-4ad5-9570-aa4571eb16d2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["None"]}},"id":"cb3f466c-f1d0-4be2-aef0-bec70ce0b6d2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"cb3f466c-f1d0-4be2-aef0-bec70ce0b6d2","type":"ColumnDataSource"}},"id":"6f112f03-b9e1-461e-be63-ffe13b9f2b05","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"329b2918-13bd-461d-8c0c-37c9fe1bd073","type":"Circle"},{"attributes":{"data_source":{"id":"cb3f466c-f1d0-4be2-aef0-bec70ce0b6d2","type":"ColumnDataSource"},"glyph":{"id":"ed6944cd-1a60-4e3e-9aed-96633529335e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"329b2918-13bd-461d-8c0c-37c9fe1bd073","type":"Circle"},"selection_glyph":null,"view":{"id":"6f112f03-b9e1-461e-be63-ffe13b9f2b05","type":"CDSView"}},"id":"1d0ad792-e740-47ff-8ef8-67f4d5516b98","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha"]}},"id":"7ac9672d-3430-4531-bb2c-c14128afb2a7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7ac9672d-3430-4531-bb2c-c14128afb2a7","type":"ColumnDataSource"}},"id":"9382c8f0-ea6e-418e-8b2a-5a513a6f3b0f","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"bcca4a98-3fd7-4f51-9062-567ac5dbc6e1","type":"Circle"},{"attributes":{"source":{"id":"284cc1bb-6077-4eb2-8002-a378f0740d92","type":"ColumnDataSource"}},"id":"9caeebc5-f62b-4d24-920a-22eee6cc2e9a","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGB"]}},"id":"22ca574c-a2fb-4e7c-a004-34b9cb31699a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGBA"]}},"id":"c65e54e7-f55f-42e2-9694-537df02a90ac","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7ac9672d-3430-4531-bb2c-c14128afb2a7","type":"ColumnDataSource"},"glyph":{"id":"734b2f9e-16e7-411d-a6dd-fff2d8c4844f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bcca4a98-3fd7-4f51-9062-567ac5dbc6e1","type":"Circle"},"selection_glyph":null,"view":{"id":"9382c8f0-ea6e-418e-8b2a-5a513a6f3b0f","type":"CDSView"}},"id":"6fcaba05-a6ca-4277-adb8-5736e55b74c1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c65e54e7-f55f-42e2-9694-537df02a90ac","type":"ColumnDataSource"},"glyph":{"id":"ee343dee-4b0e-4005-87bd-1a65dcb95228","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0596e8e3-c856-4c22-aa30-4cb42043edac","type":"Circle"},"selection_glyph":null,"view":{"id":"602e44e7-3e56-4308-a6f6-2174e2bc38a3","type":"CDSView"}},"id":"63cf9dd5-25aa-4dc1-90ab-e323dad1cb82","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6314755b-a221-4c30-89a1-f91b82d47dd1","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b2a4172-1f2d-4888-b23f-6bfd6a7dc927","type":"Circle"},{"attributes":{"data_source":{"id":"e826180d-9882-477a-90e2-50d421245767","type":"ColumnDataSource"},"glyph":{"id":"381f4d1d-c132-4d3f-b7d4-909704ae1cb8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d6826990-d190-4bb7-bb72-6bf08a7dae6c","type":"Circle"},"selection_glyph":null,"view":{"id":"4237eee2-b4a8-410a-9f1c-7afd67953c1c","type":"CDSView"}},"id":"075a2746-742f-483e-ba10-bb4f5b7e321b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["None"]}},"id":"51a575d5-c443-431f-a7fe-db03ec4f8af7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f389ae7-5f34-4b83-af3f-6d58753b462e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f10bc75-2fd2-4233-b97d-c16307cbb1d4","type":"Circle"},{"attributes":{"source":{"id":"c65e54e7-f55f-42e2-9694-537df02a90ac","type":"ColumnDataSource"}},"id":"602e44e7-3e56-4308-a6f6-2174e2bc38a3","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGB"]}},"id":"573a7147-2dac-41ac-9d37-81bb23e561dc","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3fff0584-46ac-46e1-b978-f6aa33584957","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"44f6d990-d89b-427c-9a70-7aa0fdde5e4c","type":"Circle"},{"attributes":{"data_source":{"id":"b87a95fe-0aee-4db8-926e-cff63b79835f","type":"ColumnDataSource"},"glyph":{"id":"f44c7008-e90c-4599-a501-f03dcba15c45","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2fc00a84-a211-4a7b-b93f-6f6e8a20cf33","type":"Circle"},"selection_glyph":null,"view":{"id":"5dd95026-bddd-43e4-b3c0-3fc27d64af86","type":"CDSView"}},"id":"7a75054c-7241-458f-b5a8-dafa811285f7","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f6dd40a7-25c1-4490-ba65-1d8a4e45f031","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGBA"]}},"id":"13a54d2a-b990-496a-a48b-f25ef68d7f2d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b87a95fe-0aee-4db8-926e-cff63b79835f","type":"ColumnDataSource"}},"id":"5dd95026-bddd-43e4-b3c0-3fc27d64af86","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"395f3176-0abe-4e7c-9806-5a8bd6506324","type":"Circle"},{"attributes":{"data_source":{"id":"bd0efaf0-09f6-41b3-aead-41aad7c78504","type":"ColumnDataSource"},"glyph":{"id":"67fe8ff0-7b16-40fd-a163-2dbe808b4ae2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f389ae7-5f34-4b83-af3f-6d58753b462e","type":"Circle"},"selection_glyph":null,"view":{"id":"5c71c549-d50f-46d1-9a1a-59eb3b1c354b","type":"CDSView"}},"id":"c32bcf12-ed62-496e-9643-4f7a62093cce","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"716e7a21-6990-4b1d-bf54-0e880dd5f00f","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"610dabb3-71d3-4005-98ab-7fd8d960a41e","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["None"]}},"id":"b87a95fe-0aee-4db8-926e-cff63b79835f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ccf8db57-7d1c-41e3-8fff-ebb5cd3a6bc9","type":"ColumnDataSource"}},"id":"e681695e-1c16-4f35-955d-b65c01c859fe","type":"CDSView"},{"attributes":{"source":{"id":"ddd7b0c4-3e80-401c-b84e-f494ed677f46","type":"ColumnDataSource"}},"id":"ce3a182b-cfc7-4b3a-9165-944fdbfdd46c","type":"CDSView"},{"attributes":{"source":{"id":"bd0efaf0-09f6-41b3-aead-41aad7c78504","type":"ColumnDataSource"}},"id":"5c71c549-d50f-46d1-9a1a-59eb3b1c354b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ae04a46-7c60-4cf5-8929-c88f6f109417","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2fc00a84-a211-4a7b-b93f-6f6e8a20cf33","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1824ad2-8ba2-40b7-9694-b2c7475e7de9","type":"Circle"},{"attributes":{"source":{"id":"67d6fc6b-38ec-4a4d-984b-24176c25dbad","type":"ColumnDataSource"}},"id":"7376b8b8-af9a-482b-a2e1-422e2b841894","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b046e3a9-6a99-4e99-ba68-6a80d5e15afc","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha"]}},"id":"ccf8db57-7d1c-41e3-8fff-ebb5cd3a6bc9","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c5c8b087-1570-43a3-9c9d-5cb9910293d5","type":"ColumnDataSource"}},"id":"044b2035-3cff-4636-ba0b-834454936c6d","type":"CDSView"},{"attributes":{"source":{"id":"573a7147-2dac-41ac-9d37-81bb23e561dc","type":"ColumnDataSource"}},"id":"33e260f5-f7ad-488c-a6a0-e398622317cc","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"00c43c19-66e2-4415-bef3-0ac97a86e872","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGB"]}},"id":"485db4f8-8bc1-49f7-80c6-624d00078bcc","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0112d6f3-2eeb-41b9-a7c1-e5a497792ba0","type":"Circle"},{"attributes":{"data_source":{"id":"573a7147-2dac-41ac-9d37-81bb23e561dc","type":"ColumnDataSource"},"glyph":{"id":"f6dd40a7-25c1-4490-ba65-1d8a4e45f031","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1824ad2-8ba2-40b7-9694-b2c7475e7de9","type":"Circle"},"selection_glyph":null,"view":{"id":"33e260f5-f7ad-488c-a6a0-e398622317cc","type":"CDSView"}},"id":"db2d9969-648d-4003-a72d-94f60a529170","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"214b70ed-355b-4809-9c3e-a9fc15993cc0","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["None"]}},"id":"e43c51aa-630d-4cfa-9397-4a788f1633d5","type":"ColumnDataSource"},{"attributes":{},"id":"deed70b2-90dc-47e4-83cd-57a763f02ee9","type":"PanTool"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"25432ee6-b164-40be-9e16-06c391d8b8c3","type":"Circle"},{"attributes":{},"id":"19790880-7b54-4d0a-8421-2cd47d650fac","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"485db4f8-8bc1-49f7-80c6-624d00078bcc","type":"ColumnDataSource"},"glyph":{"id":"44f6d990-d89b-427c-9a70-7aa0fdde5e4c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"395f3176-0abe-4e7c-9806-5a8bd6506324","type":"Circle"},"selection_glyph":null,"view":{"id":"40eacf26-59b4-4c84-8703-2bbf159dd04a","type":"CDSView"}},"id":"849c32ea-c1a7-4d40-977f-22cc0afe0b69","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"37612266-6217-4d76-8a59-705fb5b1875a","type":"Circle"},{"attributes":{"below":[{"id":"35e6bcae-ebe3-470c-b12e-32d02c428657","type":"CategoricalAxis"}],"left":[{"id":"1743c32d-fb41-4cda-9f28-249d9a4b48cd","type":"CategoricalAxis"}],"renderers":[{"id":"35e6bcae-ebe3-470c-b12e-32d02c428657","type":"CategoricalAxis"},{"id":"34afd633-628b-49b2-b918-8a4ae7e97927","type":"Grid"},{"id":"1743c32d-fb41-4cda-9f28-249d9a4b48cd","type":"CategoricalAxis"},{"id":"ff434fde-3e4e-480c-906a-d69de0318d63","type":"Grid"},{"id":"375dbaba-cba7-4dcc-8cfd-874b1146751d","type":"BoxAnnotation"},{"id":"977e883e-62eb-41de-bcac-bc2952ea7c7c","type":"GlyphRenderer"},{"id":"a38e6839-2295-4094-b61b-fcf277d2106f","type":"GlyphRenderer"},{"id":"6223e6de-fa6f-45f5-b52b-af23a8d1de9e","type":"GlyphRenderer"},{"id":"33c0df4d-8df9-4051-8527-d956cf48f4d1","type":"GlyphRenderer"},{"id":"6a1f874d-4013-46c6-bab7-5350a5c28cc8","type":"GlyphRenderer"},{"id":"0947dcb2-4784-4509-a9f5-0235905dc190","type":"GlyphRenderer"},{"id":"2ec251a4-1a7f-4917-935f-19948156b19a","type":"GlyphRenderer"},{"id":"9e43b5eb-620d-4706-92ae-0c9ddcb3482a","type":"GlyphRenderer"},{"id":"225ec972-1fb1-4546-950e-f1a88e77e9b6","type":"GlyphRenderer"},{"id":"0b103e3e-f2c6-4efd-afa6-b60f0f2c9120","type":"GlyphRenderer"},{"id":"90d63676-4f5d-4392-bd80-6b16e35ab62c","type":"GlyphRenderer"},{"id":"a3252e39-96e7-4ad5-9570-aa4571eb16d2","type":"GlyphRenderer"},{"id":"1d0ad792-e740-47ff-8ef8-67f4d5516b98","type":"GlyphRenderer"},{"id":"6fcaba05-a6ca-4277-adb8-5736e55b74c1","type":"GlyphRenderer"},{"id":"31432c19-d6b6-4dd7-ab1b-d8d01f31b2cd","type":"GlyphRenderer"},{"id":"946451b0-fa7a-4bd7-a214-6881edba7294","type":"GlyphRenderer"},{"id":"c54b9d6f-e27a-4e07-b265-6236e331284d","type":"GlyphRenderer"},{"id":"c32bcf12-ed62-496e-9643-4f7a62093cce","type":"GlyphRenderer"},{"id":"7a75054c-7241-458f-b5a8-dafa811285f7","type":"GlyphRenderer"},{"id":"ec577ce3-8d45-4cf5-b54a-e9b220397845","type":"GlyphRenderer"},{"id":"5b9230a5-9df3-4e27-9062-71344aad7151","type":"GlyphRenderer"},{"id":"ba4d2d52-e186-467f-a53c-85fcff4d4af1","type":"GlyphRenderer"},{"id":"db2d9969-648d-4003-a72d-94f60a529170","type":"GlyphRenderer"},{"id":"e7a3883b-f7d9-4a75-a826-2493bca5351f","type":"GlyphRenderer"},{"id":"7a3e0091-38ba-4f9b-b075-d4f5d8199367","type":"GlyphRenderer"},{"id":"8a2c715a-0bb9-4308-a2d2-e838b4387005","type":"GlyphRenderer"},{"id":"195dcd50-db9d-4690-9956-5ff53c47f455","type":"GlyphRenderer"},{"id":"1d498723-2d15-4c93-907e-82c2dbfc568d","type":"GlyphRenderer"},{"id":"075a2746-742f-483e-ba10-bb4f5b7e321b","type":"GlyphRenderer"},{"id":"05d9690b-8926-43e5-9fd6-1b7c14e5149d","type":"GlyphRenderer"},{"id":"1555a675-ff37-4b52-8880-875f4041be49","type":"GlyphRenderer"},{"id":"e8f1e033-72c9-43f6-a285-7a5792bd7478","type":"GlyphRenderer"},{"id":"3b3cfef5-b870-4bec-8b40-2a1e3c1e108c","type":"GlyphRenderer"},{"id":"2997063e-dbe7-47a8-8968-91bb41326e09","type":"GlyphRenderer"},{"id":"849c32ea-c1a7-4d40-977f-22cc0afe0b69","type":"GlyphRenderer"},{"id":"63cf9dd5-25aa-4dc1-90ab-e323dad1cb82","type":"GlyphRenderer"}],"title":{"id":"bbd2be7d-1103-4919-9e86-bf010584caa8","type":"Title"},"toolbar":{"id":"a80bf89a-d7db-48d9-b3ed-396f0481e4c7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9e7a3bc9-5cbc-4b18-ba2c-ecb1e03f085e","type":"FactorRange"},"x_scale":{"id":"e2a9854c-ebb8-43be-ba9f-05a7dcfa1f43","type":"CategoricalScale"},"y_range":{"id":"8f7ad6ac-117f-4e44-8ac7-e45afe4470b7","type":"FactorRange"},"y_scale":{"id":"7407a6f7-54bc-4647-b814-cf54bf5ec198","type":"CategoricalScale"}},"id":"6ac43bba-3c18-4775-b1cf-10843949b5d0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fill and Line Color Combinations"},"id":"bbd2be7d-1103-4919-9e86-bf010584caa8","type":"Title"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"9e7a3bc9-5cbc-4b18-ba2c-ecb1e03f085e","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"deed70b2-90dc-47e4-83cd-57a763f02ee9","type":"PanTool"},{"id":"19790880-7b54-4d0a-8421-2cd47d650fac","type":"WheelZoomTool"},{"id":"131d6503-6b6c-40c8-8f3f-0cc75a7866e2","type":"BoxZoomTool"},{"id":"ed271023-bd48-4f8e-9c4b-b0b365c7052c","type":"SaveTool"},{"id":"e4fc3e98-4ae5-4453-bcc9-8342a721661b","type":"ResetTool"},{"id":"6a59d4cf-f727-4c05-94cc-87eb3ba3463e","type":"HelpTool"}]},"id":"a80bf89a-d7db-48d9-b3ed-396f0481e4c7","type":"Toolbar"},{"attributes":{"axis_label":"Line Options","formatter":{"id":"0b1e3ff1-0a8a-452a-b723-053e38ddb6fc","type":"CategoricalTickFormatter"},"plot":{"id":"6ac43bba-3c18-4775-b1cf-10843949b5d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"b928faa4-6db8-46a8-90ae-f46b88d04c6d","type":"CategoricalTicker"}},"id":"1743c32d-fb41-4cda-9f28-249d9a4b48cd","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"f914b3ea-87d1-45d1-9ad7-0cd812a68d3c","type":"ColumnDataSource"},"glyph":{"id":"00c43c19-66e2-4415-bef3-0ac97a86e872","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"289bf96f-2795-4aae-893f-23f73ecc19f2","type":"Circle"},"selection_glyph":null,"view":{"id":"c2050685-f001-448e-92e1-546c7809ebd7","type":"CDSView"}},"id":"3b3cfef5-b870-4bec-8b40-2a1e3c1e108c","type":"GlyphRenderer"},{"attributes":{},"id":"e2a9854c-ebb8-43be-ba9f-05a7dcfa1f43","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"28d3b91c-b536-4271-93ca-47014710ce66","type":"ColumnDataSource"},"glyph":{"id":"b046e3a9-6a99-4e99-ba68-6a80d5e15afc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52e0f6d8-1ff5-4028-8b50-e272f230adbf","type":"Circle"},"selection_glyph":null,"view":{"id":"69b59c50-8ddf-415f-a385-0a109dc8c534","type":"CDSView"}},"id":"ec577ce3-8d45-4cf5-b54a-e9b220397845","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c062ba6-0735-4143-ad2f-310329ffef38","type":"Circle"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"8f7ad6ac-117f-4e44-8ac7-e45afe4470b7","type":"FactorRange"},{"attributes":{"source":{"id":"d9456246-0da7-46da-bf95-35c43de6c989","type":"ColumnDataSource"}},"id":"f05e2513-14ac-419d-ae58-2125617fd310","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGB"]}},"id":"f914b3ea-87d1-45d1-9ad7-0cd812a68d3c","type":"ColumnDataSource"},{"attributes":{},"id":"7407a6f7-54bc-4647-b814-cf54bf5ec198","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e736c613-a1a4-4c60-a315-8da38a41b2f3","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6ac43bba-3c18-4775-b1cf-10843949b5d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"977f3d75-8b70-4aa5-84cf-9950bc0da771","type":"CategoricalTicker"}},"id":"34afd633-628b-49b2-b918-8a4ae7e97927","type":"Grid"},{"attributes":{"data_source":{"id":"9034ae30-1236-4e60-9f9c-bf5d6c08cbf6","type":"ColumnDataSource"},"glyph":{"id":"716e7a21-6990-4b1d-bf54-0e880dd5f00f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31225d54-c0c4-403e-a628-be93cf30d329","type":"Circle"},"selection_glyph":null,"view":{"id":"f6e235fb-158d-4d1e-93aa-2d8af76e05d6","type":"CDSView"}},"id":"5b9230a5-9df3-4e27-9062-71344aad7151","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"289bf96f-2795-4aae-893f-23f73ecc19f2","type":"Circle"},{"attributes":{},"id":"977f3d75-8b70-4aa5-84cf-9950bc0da771","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha"]}},"id":"28d3b91c-b536-4271-93ca-47014710ce66","type":"ColumnDataSource"},{"attributes":{"axis_label":"Fill Options","formatter":{"id":"0d35bb25-d2c2-4e4e-a180-0133170376cc","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6ac43bba-3c18-4775-b1cf-10843949b5d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"977f3d75-8b70-4aa5-84cf-9950bc0da771","type":"CategoricalTicker"}},"id":"35e6bcae-ebe3-470c-b12e-32d02c428657","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"d9456246-0da7-46da-bf95-35c43de6c989","type":"ColumnDataSource"},"glyph":{"id":"25432ee6-b164-40be-9e16-06c391d8b8c3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e736c613-a1a4-4c60-a315-8da38a41b2f3","type":"Circle"},"selection_glyph":null,"view":{"id":"f05e2513-14ac-419d-ae58-2125617fd310","type":"CDSView"}},"id":"ba4d2d52-e186-467f-a53c-85fcff4d4af1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e43c51aa-630d-4cfa-9397-4a788f1633d5","type":"ColumnDataSource"},"glyph":{"id":"214b70ed-355b-4809-9c3e-a9fc15993cc0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37612266-6217-4d76-8a59-705fb5b1875a","type":"Circle"},"selection_glyph":null,"view":{"id":"3bacc35d-5482-4288-af93-a231bb3d39b8","type":"CDSView"}},"id":"977e883e-62eb-41de-bcac-bc2952ea7c7c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"31225d54-c0c4-403e-a628-be93cf30d329","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef90091c-9727-4b10-90a2-58fd5b9cd5c5","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a97dde4-67e8-4c31-95fe-8f3ebbff2fd4","type":"Circle"},{"attributes":{},"id":"e4fc3e98-4ae5-4453-bcc9-8342a721661b","type":"ResetTool"},{"attributes":{"data_source":{"id":"c5c8b087-1570-43a3-9c9d-5cb9910293d5","type":"ColumnDataSource"},"glyph":{"id":"3fff0584-46ac-46e1-b978-f6aa33584957","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8ae04a46-7c60-4cf5-8929-c88f6f109417","type":"Circle"},"selection_glyph":null,"view":{"id":"044b2035-3cff-4636-ba0b-834454936c6d","type":"CDSView"}},"id":"195dcd50-db9d-4690-9956-5ff53c47f455","type":"GlyphRenderer"},{"attributes":{},"id":"b928faa4-6db8-46a8-90ae-f46b88d04c6d","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"52e0f6d8-1ff5-4028-8b50-e272f230adbf","type":"Circle"},{"attributes":{"source":{"id":"f914b3ea-87d1-45d1-9ad7-0cd812a68d3c","type":"ColumnDataSource"}},"id":"c2050685-f001-448e-92e1-546c7809ebd7","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6ac43bba-3c18-4775-b1cf-10843949b5d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"b928faa4-6db8-46a8-90ae-f46b88d04c6d","type":"CategoricalTicker"}},"id":"ff434fde-3e4e-480c-906a-d69de0318d63","type":"Grid"},{"attributes":{"source":{"id":"28d3b91c-b536-4271-93ca-47014710ce66","type":"ColumnDataSource"}},"id":"69b59c50-8ddf-415f-a385-0a109dc8c534","type":"CDSView"},{"attributes":{},"id":"0b1e3ff1-0a8a-452a-b723-053e38ddb6fc","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f44c7008-e90c-4599-a501-f03dcba15c45","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b05c99f-8523-470c-a35d-99fc7e82a964","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"375dbaba-cba7-4dcc-8cfd-874b1146751d","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["None"]}},"id":"67d6fc6b-38ec-4a4d-984b-24176c25dbad","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ddd7b0c4-3e80-401c-b84e-f494ed677f46","type":"ColumnDataSource"},"glyph":{"id":"2b2a4172-1f2d-4888-b23f-6bfd6a7dc927","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1e7fc003-1a68-4ca6-a172-bacce00ccc3e","type":"Circle"},"selection_glyph":null,"view":{"id":"ce3a182b-cfc7-4b3a-9165-944fdbfdd46c","type":"CDSView"}},"id":"e8f1e033-72c9-43f6-a285-7a5792bd7478","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e43c51aa-630d-4cfa-9397-4a788f1633d5","type":"ColumnDataSource"}},"id":"3bacc35d-5482-4288-af93-a231bb3d39b8","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGB"]}},"id":"9034ae30-1236-4e60-9f9c-bf5d6c08cbf6","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"10937d20-f4c5-44f4-89b7-092b4e8d2ea7","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGBA"]}},"id":"d9456246-0da7-46da-bf95-35c43de6c989","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"375dbaba-cba7-4dcc-8cfd-874b1146751d","type":"BoxAnnotation"}},"id":"131d6503-6b6c-40c8-8f3f-0cc75a7866e2","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"36a17449-71d6-4287-817f-dc26ab9276df","type":"ColumnDataSource"},"glyph":{"id":"610dabb3-71d3-4005-98ab-7fd8d960a41e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ef90091c-9727-4b10-90a2-58fd5b9cd5c5","type":"Circle"},"selection_glyph":null,"view":{"id":"3e5590f4-3b64-463c-83a8-2eb4a012e102","type":"CDSView"}},"id":"e7a3883b-f7d9-4a75-a826-2493bca5351f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ccf8db57-7d1c-41e3-8fff-ebb5cd3a6bc9","type":"ColumnDataSource"},"glyph":{"id":"8b05c99f-8523-470c-a35d-99fc7e82a964","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"64d6a493-c9a3-44c9-8723-fc3efa275d71","type":"Circle"},"selection_glyph":null,"view":{"id":"e681695e-1c16-4f35-955d-b65c01c859fe","type":"CDSView"}},"id":"8a2c715a-0bb9-4308-a2d2-e838b4387005","type":"GlyphRenderer"},{"attributes":{},"id":"ed271023-bd48-4f8e-9c4b-b0b365c7052c","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGBA"]}},"id":"36a17449-71d6-4287-817f-dc26ab9276df","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGB"]}},"id":"c5c8b087-1570-43a3-9c9d-5cb9910293d5","type":"ColumnDataSource"},{"attributes":{},"id":"6a59d4cf-f727-4c05-94cc-87eb3ba3463e","type":"HelpTool"},{"attributes":{"data_source":{"id":"cf291de5-32aa-4b5f-a106-31d4f582e88e","type":"ColumnDataSource"},"glyph":{"id":"303c7be2-7c97-44eb-b3c5-b66ef653f9cf","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4557bacc-3d7d-4876-819f-c310954bea56","type":"Circle"},"selection_glyph":null,"view":{"id":"c735b92c-3a10-4d60-87e5-7dc77a0b9d4f","type":"CDSView"}},"id":"a38e6839-2295-4094-b61b-fcf277d2106f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"67d6fc6b-38ec-4a4d-984b-24176c25dbad","type":"ColumnDataSource"},"glyph":{"id":"3c062ba6-0735-4143-ad2f-310329ffef38","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10937d20-f4c5-44f4-89b7-092b4e8d2ea7","type":"Circle"},"selection_glyph":null,"view":{"id":"7376b8b8-af9a-482b-a2e1-422e2b841894","type":"CDSView"}},"id":"7a3e0091-38ba-4f9b-b075-d4f5d8199367","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9034ae30-1236-4e60-9f9c-bf5d6c08cbf6","type":"ColumnDataSource"}},"id":"f6e235fb-158d-4d1e-93aa-2d8af76e05d6","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha"]}},"id":"cf291de5-32aa-4b5f-a106-31d4f582e88e","type":"ColumnDataSource"},{"attributes":{"source":{"id":"36a17449-71d6-4287-817f-dc26ab9276df","type":"ColumnDataSource"}},"id":"3e5590f4-3b64-463c-83a8-2eb4a012e102","type":"CDSView"},{"attributes":{"source":{"id":"13a54d2a-b990-496a-a48b-f25ef68d7f2d","type":"ColumnDataSource"}},"id":"7a139bc4-281a-4c9a-8573-f58f7cf6e733","type":"CDSView"},{"attributes":{"source":{"id":"cf291de5-32aa-4b5f-a106-31d4f582e88e","type":"ColumnDataSource"}},"id":"c735b92c-3a10-4d60-87e5-7dc77a0b9d4f","type":"CDSView"},{"attributes":{"data_source":{"id":"13a54d2a-b990-496a-a48b-f25ef68d7f2d","type":"ColumnDataSource"},"glyph":{"id":"5a97dde4-67e8-4c31-95fe-8f3ebbff2fd4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0112d6f3-2eeb-41b9-a7c1-e5a497792ba0","type":"Circle"},"selection_glyph":null,"view":{"id":"7a139bc4-281a-4c9a-8573-f58f7cf6e733","type":"CDSView"}},"id":"2997063e-dbe7-47a8-8968-91bb41326e09","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"303c7be2-7c97-44eb-b3c5-b66ef653f9cf","type":"Circle"},{"attributes":{},"id":"0d35bb25-d2c2-4e4e-a180-0133170376cc","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4557bacc-3d7d-4876-819f-c310954bea56","type":"Circle"}],"root_ids":["6ac43bba-3c18-4775-b1cf-10843949b5d0"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"ceb7b6c7-de2e-40db-a88b-f1d2262487cc","elementid":"1c80eaec-9643-40b6-8934-48eef9a20f72","modelid":"6ac43bba-3c18-4775-b1cf-10843949b5d0"}];
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