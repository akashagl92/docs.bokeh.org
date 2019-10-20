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
      };var element = document.getElementById("7452cadb-edfe-4ef5-ae21-6745cf4ceeac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7452cadb-edfe-4ef5-ae21-6745cf4ceeac' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"70b954a4-81d3-4349-a19a-b9aec65bc4bb":{"roots":{"references":[{"attributes":{},"id":"f02c12fa-ee42-4dc1-b6a2-82f97a1de0ee","type":"HelpTool"},{"attributes":{"source":{"id":"861ab8d3-5a22-414c-a03b-4e5c3bd7cd33","type":"ColumnDataSource"}},"id":"b929c8d2-f253-4d53-b434-d82638f34b72","type":"CDSView"},{"attributes":{},"id":"e6be72e5-64f6-4328-9ebe-bbb08a735c5a","type":"LinearScale"},{"attributes":{"toolbar":{"id":"0fd5bef9-9faa-43a3-895a-09038b4decb7","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"673617ca-ff3e-4183-9713-75fd4479f670","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"487bb776-d868-4c3e-b2b6-6b9574ac9f99","type":"Circle"},{"attributes":{},"id":"45a4c44d-3347-44c2-8542-74ba0dc03c2d","type":"ResetTool"},{"attributes":{"formatter":{"id":"1b4de60b-854f-41f3-a651-64af37d8e9a5","type":"BasicTickFormatter"},"plot":{"id":"c088d5a3-0c01-44a0-a9e2-dcea34456424","subtype":"Figure","type":"Plot"},"ticker":{"id":"86fc8b7e-3aef-4dd5-a0b2-138b480d6004","type":"BasicTicker"}},"id":"a4e9440f-e211-4b4e-b533-269876211a9b","type":"LinearAxis"},{"attributes":{},"id":"3bd31678-3e53-499d-b093-e2bd74853e5a","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33d6d2d3-d8b0-4809-a455-f9159aac0f57","type":"Circle"},{"attributes":{},"id":"23aaa732-f60b-453e-99a7-ef0fca33e954","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"be88b065-02b5-4300-9d86-ad51f7bc018c","subtype":"Figure","type":"Plot"},{"id":"79300381-a04e-4d8a-8c9e-11bdb1822864","subtype":"Figure","type":"Plot"}]},"id":"c321a374-5d4a-433c-b93e-12dfb5464b27","type":"Row"},{"attributes":{"data_source":{"id":"36f3fa1a-aa51-400f-80dd-805d17b2aff0","type":"ColumnDataSource"},"glyph":{"id":"33d6d2d3-d8b0-4809-a455-f9159aac0f57","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"487bb776-d868-4c3e-b2b6-6b9574ac9f99","type":"Circle"},"selection_glyph":null,"view":{"id":"da7350e4-cd68-4ef0-b11f-753474aa48d7","type":"CDSView"}},"id":"b856a027-a7ef-4b91-af91-cd8819bc3834","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2ba7c46d-4b44-4d78-afdc-5ce0c28b7da4","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"be947b8a-313c-4758-bea0-e5e3fc1d65a8","type":"PanTool"},{"id":"14ab9aab-be11-47da-afee-3b6cd67bd43a","type":"WheelZoomTool"},{"id":"15b3c9c2-a478-4b0f-922a-63338d559262","type":"BoxZoomTool"},{"id":"a2f27247-9f74-465a-ae2d-7f7def64bb9d","type":"SaveTool"},{"id":"45a4c44d-3347-44c2-8542-74ba0dc03c2d","type":"ResetTool"},{"id":"f02c12fa-ee42-4dc1-b6a2-82f97a1de0ee","type":"HelpTool"}]},"id":"f0101495-b1d9-4c0f-9583-3145c07a0ca1","type":"Toolbar"},{"attributes":{"callback":null},"id":"a0ef35b9-377b-44fc-98f9-5f9f3e4200ae","type":"DataRange1d"},{"attributes":{},"id":"a2f27247-9f74-465a-ae2d-7f7def64bb9d","type":"SaveTool"},{"attributes":{},"id":"3c02a5e4-8e5a-4b5b-8048-dbc44808cec8","type":"SaveTool"},{"attributes":{},"id":"79a1c67b-7d34-4163-a8ec-dfe9d2b2b3c3","type":"BasicTicker"},{"attributes":{},"id":"921858f7-8858-44da-8316-40268f87442a","type":"HelpTool"},{"attributes":{},"id":"ba804d2b-fc1a-4894-89c2-22d4eb9794d5","type":"PanTool"},{"attributes":{},"id":"822322ef-da67-4d0f-98b9-295d2749bd5a","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"72cf2a28-a357-41cf-884d-851e0c6cbe9f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"58d5dcbf-4b9c-4fe5-8f91-0f7ba46bc1d0","type":"DataRange1d"},{"attributes":{"below":[{"id":"8df929de-f04a-42fa-8308-c2b941f1572f","type":"LinearAxis"}],"left":[{"id":"bbe3a6d4-c48b-440a-8d33-e123f805a10a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8df929de-f04a-42fa-8308-c2b941f1572f","type":"LinearAxis"},{"id":"0a3d8609-b1f9-49e9-a924-05a61a3b06c6","type":"Grid"},{"id":"bbe3a6d4-c48b-440a-8d33-e123f805a10a","type":"LinearAxis"},{"id":"b3cc5ece-742e-4f86-be77-a84e0fd0c3d4","type":"Grid"},{"id":"ff987902-00a8-4c53-8a64-fcf8dc6a2469","type":"BoxAnnotation"},{"id":"c04c832a-afe2-4cd1-bdb7-6d60aba1184f","type":"GlyphRenderer"}],"title":{"id":"effe6d8f-b8f0-4146-ba77-08508851c0d2","type":"Title"},"toolbar":{"id":"dcf6ebcf-3d41-4794-98aa-26290ae3f296","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"58d5dcbf-4b9c-4fe5-8f91-0f7ba46bc1d0","type":"DataRange1d"},"x_scale":{"id":"e6be72e5-64f6-4328-9ebe-bbb08a735c5a","type":"LinearScale"},"y_range":{"id":"a0ef35b9-377b-44fc-98f9-5f9f3e4200ae","type":"DataRange1d"},"y_scale":{"id":"e6003fb9-a86b-4cf6-be4d-546b5a134291","type":"LinearScale"}},"id":"79300381-a04e-4d8a-8c9e-11bdb1822864","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"effe6d8f-b8f0-4146-ba77-08508851c0d2","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"c088d5a3-0c01-44a0-a9e2-dcea34456424","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c32a080-9a38-4290-bbb4-7e730a2018f0","type":"BasicTicker"}},"id":"063baa32-7826-49e1-b621-0157fb5f0339","type":"Grid"},{"attributes":{},"id":"e6003fb9-a86b-4cf6-be4d-546b5a134291","type":"LinearScale"},{"attributes":{"source":{"id":"36f3fa1a-aa51-400f-80dd-805d17b2aff0","type":"ColumnDataSource"}},"id":"da7350e4-cd68-4ef0-b11f-753474aa48d7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"302dcb87-ea88-4c0c-ae81-94f03689015e","type":"Triangle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2f089151-fc35-431b-a3ad-27e3a59c3705","type":"PanTool"},{"id":"23aaa732-f60b-453e-99a7-ef0fca33e954","type":"WheelZoomTool"},{"id":"de660ca7-75e7-4ad3-a5cf-b93c10049a7b","type":"BoxZoomTool"},{"id":"3c02a5e4-8e5a-4b5b-8048-dbc44808cec8","type":"SaveTool"},{"id":"30b850ce-953f-4d5f-8ff5-a81bd4975dca","type":"ResetTool"},{"id":"921858f7-8858-44da-8316-40268f87442a","type":"HelpTool"}]},"id":"dcf6ebcf-3d41-4794-98aa-26290ae3f296","type":"Toolbar"},{"attributes":{},"id":"30b850ce-953f-4d5f-8ff5-a81bd4975dca","type":"ResetTool"},{"attributes":{},"id":"24732777-0496-4031-9624-d995f7b17d9f","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"c321a374-5d4a-433c-b93e-12dfb5464b27","type":"Row"},{"id":"b2fd1d85-501b-408c-8d16-504f0edf8dc0","type":"Row"}]},"id":"ef668f81-e57a-4b67-95a6-681af90e538c","type":"Column"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"de35921a-ad35-4627-86be-d759d826cf06","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"33f73772-4884-43ed-ac1d-c991d162ae86","type":"BoxAnnotation"}},"id":"5b17def3-0450-442d-ae4d-065b88aebfc0","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"79300381-a04e-4d8a-8c9e-11bdb1822864","subtype":"Figure","type":"Plot"},"ticker":{"id":"822322ef-da67-4d0f-98b9-295d2749bd5a","type":"BasicTicker"}},"id":"b3cc5ece-742e-4f86-be77-a84e0fd0c3d4","type":"Grid"},{"attributes":{},"id":"86fc8b7e-3aef-4dd5-a0b2-138b480d6004","type":"BasicTicker"},{"attributes":{"plot":{"id":"79300381-a04e-4d8a-8c9e-11bdb1822864","subtype":"Figure","type":"Plot"},"ticker":{"id":"2652f219-9b11-4fa3-81f7-4eede4eaf0c5","type":"BasicTicker"}},"id":"0a3d8609-b1f9-49e9-a924-05a61a3b06c6","type":"Grid"},{"attributes":{"formatter":{"id":"ddc9a9f7-4ad8-4c24-902f-f8ec08722215","type":"BasicTickFormatter"},"plot":{"id":"be88b065-02b5-4300-9d86-ad51f7bc018c","subtype":"Figure","type":"Plot"},"ticker":{"id":"79a1c67b-7d34-4163-a8ec-dfe9d2b2b3c3","type":"BasicTicker"}},"id":"28d3f236-85c2-48de-8f59-9c6fbe57b047","type":"LinearAxis"},{"attributes":{"children":[{"id":"c088d5a3-0c01-44a0-a9e2-dcea34456424","subtype":"Figure","type":"Plot"}]},"id":"b2fd1d85-501b-408c-8d16-504f0edf8dc0","type":"Row"},{"attributes":{"formatter":{"id":"0b2191a9-9664-452a-b689-2049904f0e89","type":"BasicTickFormatter"},"plot":{"id":"79300381-a04e-4d8a-8c9e-11bdb1822864","subtype":"Figure","type":"Plot"},"ticker":{"id":"2652f219-9b11-4fa3-81f7-4eede4eaf0c5","type":"BasicTicker"}},"id":"8df929de-f04a-42fa-8308-c2b941f1572f","type":"LinearAxis"},{"attributes":{"source":{"id":"de35921a-ad35-4627-86be-d759d826cf06","type":"ColumnDataSource"}},"id":"2e83d867-f2ef-47a0-8a4b-542751abbbc0","type":"CDSView"},{"attributes":{"below":[{"id":"a4e9440f-e211-4b4e-b533-269876211a9b","type":"LinearAxis"}],"left":[{"id":"e1b9fe5d-1252-42f3-a2dd-d7a01a424d7e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a4e9440f-e211-4b4e-b533-269876211a9b","type":"LinearAxis"},{"id":"3e13a16a-aceb-4fb2-91bb-b914a9b22730","type":"Grid"},{"id":"e1b9fe5d-1252-42f3-a2dd-d7a01a424d7e","type":"LinearAxis"},{"id":"063baa32-7826-49e1-b621-0157fb5f0339","type":"Grid"},{"id":"33f73772-4884-43ed-ac1d-c991d162ae86","type":"BoxAnnotation"},{"id":"ad5837fc-14ab-4840-8af6-a5fb3af72a56","type":"GlyphRenderer"}],"title":{"id":"36c391ac-690e-4e6b-950e-81aab5690f80","type":"Title"},"toolbar":{"id":"96d9339a-4d88-425e-9b74-989ca22e340c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0bf3718b-21c9-4d2e-86b0-a4edcf1b8644","type":"DataRange1d"},"x_scale":{"id":"469b542f-4bcf-4515-8fa5-c33a7d5740b7","type":"LinearScale"},"y_range":{"id":"ad5590e1-ff2c-4ebd-ac60-54256738e152","type":"DataRange1d"},"y_scale":{"id":"af6c9f5a-71e9-41ca-a46e-21fece0897f0","type":"LinearScale"}},"id":"c088d5a3-0c01-44a0-a9e2-dcea34456424","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"673617ca-ff3e-4183-9713-75fd4479f670","type":"ToolbarBox"},{"id":"ef668f81-e57a-4b67-95a6-681af90e538c","type":"Column"}]},"id":"0b33f194-6436-46eb-8041-f0512bc78edb","type":"Column"},{"attributes":{},"id":"e19ab970-9f8a-4183-b799-d63a8bd3a41b","type":"HelpTool"},{"attributes":{"formatter":{"id":"3bd31678-3e53-499d-b093-e2bd74853e5a","type":"BasicTickFormatter"},"plot":{"id":"79300381-a04e-4d8a-8c9e-11bdb1822864","subtype":"Figure","type":"Plot"},"ticker":{"id":"822322ef-da67-4d0f-98b9-295d2749bd5a","type":"BasicTicker"}},"id":"bbe3a6d4-c48b-440a-8d33-e123f805a10a","type":"LinearAxis"},{"attributes":{},"id":"3c32a080-9a38-4290-bbb4-7e730a2018f0","type":"BasicTicker"},{"attributes":{"overlay":{"id":"ff987902-00a8-4c53-8a64-fcf8dc6a2469","type":"BoxAnnotation"}},"id":"de660ca7-75e7-4ad3-a5cf-b93c10049a7b","type":"BoxZoomTool"},{"attributes":{},"id":"d49b0d78-0ba2-44cb-8ade-ca8de769ba9d","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e9e6882-c1c1-4df3-8c64-5068d1ac8cc9","type":"Triangle"},{"attributes":{},"id":"0b2191a9-9664-452a-b689-2049904f0e89","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"861ab8d3-5a22-414c-a03b-4e5c3bd7cd33","type":"ColumnDataSource"},{"attributes":{},"id":"be947b8a-313c-4758-bea0-e5e3fc1d65a8","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ba804d2b-fc1a-4894-89c2-22d4eb9794d5","type":"PanTool"},{"id":"8aab3466-685a-46d9-a8df-747aaec1c8d6","type":"WheelZoomTool"},{"id":"5b17def3-0450-442d-ae4d-065b88aebfc0","type":"BoxZoomTool"},{"id":"8fe971e4-5d0e-4a84-9338-73ed0d4a2ebc","type":"SaveTool"},{"id":"7e33785c-0d3c-4ea0-9252-ef4cc693fe13","type":"ResetTool"},{"id":"e19ab970-9f8a-4183-b799-d63a8bd3a41b","type":"HelpTool"}]},"id":"96d9339a-4d88-425e-9b74-989ca22e340c","type":"Toolbar"},{"attributes":{"tools":[{"id":"be947b8a-313c-4758-bea0-e5e3fc1d65a8","type":"PanTool"},{"id":"14ab9aab-be11-47da-afee-3b6cd67bd43a","type":"WheelZoomTool"},{"id":"15b3c9c2-a478-4b0f-922a-63338d559262","type":"BoxZoomTool"},{"id":"a2f27247-9f74-465a-ae2d-7f7def64bb9d","type":"SaveTool"},{"id":"45a4c44d-3347-44c2-8542-74ba0dc03c2d","type":"ResetTool"},{"id":"f02c12fa-ee42-4dc1-b6a2-82f97a1de0ee","type":"HelpTool"},{"id":"2f089151-fc35-431b-a3ad-27e3a59c3705","type":"PanTool"},{"id":"23aaa732-f60b-453e-99a7-ef0fca33e954","type":"WheelZoomTool"},{"id":"de660ca7-75e7-4ad3-a5cf-b93c10049a7b","type":"BoxZoomTool"},{"id":"3c02a5e4-8e5a-4b5b-8048-dbc44808cec8","type":"SaveTool"},{"id":"30b850ce-953f-4d5f-8ff5-a81bd4975dca","type":"ResetTool"},{"id":"921858f7-8858-44da-8316-40268f87442a","type":"HelpTool"},{"id":"ba804d2b-fc1a-4894-89c2-22d4eb9794d5","type":"PanTool"},{"id":"8aab3466-685a-46d9-a8df-747aaec1c8d6","type":"WheelZoomTool"},{"id":"5b17def3-0450-442d-ae4d-065b88aebfc0","type":"BoxZoomTool"},{"id":"8fe971e4-5d0e-4a84-9338-73ed0d4a2ebc","type":"SaveTool"},{"id":"7e33785c-0d3c-4ea0-9252-ef4cc693fe13","type":"ResetTool"},{"id":"e19ab970-9f8a-4183-b799-d63a8bd3a41b","type":"HelpTool"}]},"id":"0fd5bef9-9faa-43a3-895a-09038b4decb7","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"de35921a-ad35-4627-86be-d759d826cf06","type":"ColumnDataSource"},"glyph":{"id":"8e9e6882-c1c1-4df3-8c64-5068d1ac8cc9","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"302dcb87-ea88-4c0c-ae81-94f03689015e","type":"Triangle"},"selection_glyph":null,"view":{"id":"2e83d867-f2ef-47a0-8a4b-542751abbbc0","type":"CDSView"}},"id":"c04c832a-afe2-4cd1-bdb7-6d60aba1184f","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3dd30541-d1e2-4988-9c06-2d524886efa1","type":"Square"},{"attributes":{},"id":"2652f219-9b11-4fa3-81f7-4eede4eaf0c5","type":"BasicTicker"},{"attributes":{"data_source":{"id":"861ab8d3-5a22-414c-a03b-4e5c3bd7cd33","type":"ColumnDataSource"},"glyph":{"id":"3dd30541-d1e2-4988-9c06-2d524886efa1","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dcd86f76-1bfe-49f3-a871-8e16e5278641","type":"Square"},"selection_glyph":null,"view":{"id":"b929c8d2-f253-4d53-b434-d82638f34b72","type":"CDSView"}},"id":"ad5837fc-14ab-4840-8af6-a5fb3af72a56","type":"GlyphRenderer"},{"attributes":{},"id":"14ab9aab-be11-47da-afee-3b6cd67bd43a","type":"WheelZoomTool"},{"attributes":{},"id":"af6c9f5a-71e9-41ca-a46e-21fece0897f0","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dcd86f76-1bfe-49f3-a871-8e16e5278641","type":"Square"},{"attributes":{"formatter":{"id":"d49b0d78-0ba2-44cb-8ade-ca8de769ba9d","type":"BasicTickFormatter"},"plot":{"id":"be88b065-02b5-4300-9d86-ad51f7bc018c","subtype":"Figure","type":"Plot"},"ticker":{"id":"46b52401-f190-44b4-a375-462c291a413d","type":"BasicTicker"}},"id":"94ab5d5c-a26b-407e-a119-271716a12a8a","type":"LinearAxis"},{"attributes":{"formatter":{"id":"24732777-0496-4031-9624-d995f7b17d9f","type":"BasicTickFormatter"},"plot":{"id":"c088d5a3-0c01-44a0-a9e2-dcea34456424","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c32a080-9a38-4290-bbb4-7e730a2018f0","type":"BasicTicker"}},"id":"e1b9fe5d-1252-42f3-a2dd-d7a01a424d7e","type":"LinearAxis"},{"attributes":{},"id":"150895c0-dbe7-4c3b-8753-2b9e8479f150","type":"LinearScale"},{"attributes":{},"id":"ddc9a9f7-4ad8-4c24-902f-f8ec08722215","type":"BasicTickFormatter"},{"attributes":{},"id":"7e33785c-0d3c-4ea0-9252-ef4cc693fe13","type":"ResetTool"},{"attributes":{},"id":"8fe971e4-5d0e-4a84-9338-73ed0d4a2ebc","type":"SaveTool"},{"attributes":{},"id":"46b52401-f190-44b4-a375-462c291a413d","type":"BasicTicker"},{"attributes":{},"id":"1b4de60b-854f-41f3-a651-64af37d8e9a5","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33f73772-4884-43ed-ac1d-c991d162ae86","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"28d3f236-85c2-48de-8f59-9c6fbe57b047","type":"LinearAxis"}],"left":[{"id":"94ab5d5c-a26b-407e-a119-271716a12a8a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"28d3f236-85c2-48de-8f59-9c6fbe57b047","type":"LinearAxis"},{"id":"24c5d1a7-8469-4bd1-8c1a-89bb91ad4a10","type":"Grid"},{"id":"94ab5d5c-a26b-407e-a119-271716a12a8a","type":"LinearAxis"},{"id":"d8f2b80f-e3b0-4f17-b9f3-aab5c2e0bfea","type":"Grid"},{"id":"72cf2a28-a357-41cf-884d-851e0c6cbe9f","type":"BoxAnnotation"},{"id":"b856a027-a7ef-4b91-af91-cd8819bc3834","type":"GlyphRenderer"}],"title":{"id":"6d815f41-fcdb-40a0-8764-0a1fed69a928","type":"Title"},"toolbar":{"id":"f0101495-b1d9-4c0f-9583-3145c07a0ca1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2ba7c46d-4b44-4d78-afdc-5ce0c28b7da4","type":"DataRange1d"},"x_scale":{"id":"b379d4a0-6e73-4c4c-bdd7-f5065c3f66ab","type":"LinearScale"},"y_range":{"id":"52d29c5d-6d74-47ce-bc3c-f31d38fcacaa","type":"DataRange1d"},"y_scale":{"id":"150895c0-dbe7-4c3b-8753-2b9e8479f150","type":"LinearScale"}},"id":"be88b065-02b5-4300-9d86-ad51f7bc018c","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ff987902-00a8-4c53-8a64-fcf8dc6a2469","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"36c391ac-690e-4e6b-950e-81aab5690f80","type":"Title"},{"attributes":{},"id":"8aab3466-685a-46d9-a8df-747aaec1c8d6","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"be88b065-02b5-4300-9d86-ad51f7bc018c","subtype":"Figure","type":"Plot"},"ticker":{"id":"79a1c67b-7d34-4163-a8ec-dfe9d2b2b3c3","type":"BasicTicker"}},"id":"24c5d1a7-8469-4bd1-8c1a-89bb91ad4a10","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"6d815f41-fcdb-40a0-8764-0a1fed69a928","type":"Title"},{"attributes":{"callback":null},"id":"0bf3718b-21c9-4d2e-86b0-a4edcf1b8644","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"36f3fa1a-aa51-400f-80dd-805d17b2aff0","type":"ColumnDataSource"},{"attributes":{},"id":"2f089151-fc35-431b-a3ad-27e3a59c3705","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"be88b065-02b5-4300-9d86-ad51f7bc018c","subtype":"Figure","type":"Plot"},"ticker":{"id":"46b52401-f190-44b4-a375-462c291a413d","type":"BasicTicker"}},"id":"d8f2b80f-e3b0-4f17-b9f3-aab5c2e0bfea","type":"Grid"},{"attributes":{"overlay":{"id":"72cf2a28-a357-41cf-884d-851e0c6cbe9f","type":"BoxAnnotation"}},"id":"15b3c9c2-a478-4b0f-922a-63338d559262","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"ad5590e1-ff2c-4ebd-ac60-54256738e152","type":"DataRange1d"},{"attributes":{"plot":{"id":"c088d5a3-0c01-44a0-a9e2-dcea34456424","subtype":"Figure","type":"Plot"},"ticker":{"id":"86fc8b7e-3aef-4dd5-a0b2-138b480d6004","type":"BasicTicker"}},"id":"3e13a16a-aceb-4fb2-91bb-b914a9b22730","type":"Grid"},{"attributes":{},"id":"b379d4a0-6e73-4c4c-bdd7-f5065c3f66ab","type":"LinearScale"},{"attributes":{},"id":"469b542f-4bcf-4515-8fa5-c33a7d5740b7","type":"LinearScale"},{"attributes":{"callback":null},"id":"52d29c5d-6d74-47ce-bc3c-f31d38fcacaa","type":"DataRange1d"}],"root_ids":["0b33f194-6436-46eb-8041-f0512bc78edb"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"70b954a4-81d3-4349-a19a-b9aec65bc4bb","elementid":"7452cadb-edfe-4ef5-ae21-6745cf4ceeac","modelid":"0b33f194-6436-46eb-8041-f0512bc78edb"}];
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