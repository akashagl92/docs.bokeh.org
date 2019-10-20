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
      };var element = document.getElementById("1fd9389f-18f4-4a89-8867-a0bc8bbd5b31");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1fd9389f-18f4-4a89-8867-a0bc8bbd5b31' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9b20de12-417d-48eb-9f77-f8f289c9c93d":{"roots":{"references":[{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"0c7652df-33cd-4e53-a08e-4259c13449e5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ce63ffa9-6934-44d5-b287-ef532a53aedf","type":"CDSView"}},"id":"cb3a7c18-0e0f-4b27-8610-cbcf4d2972da","type":"GlyphRenderer"},{"attributes":{},"id":"759ed6be-fbfa-4234-aa45-856452878afe","type":"PanTool"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"ce63ffa9-6934-44d5-b287-ef532a53aedf","type":"CDSView"},{"attributes":{},"id":"7ffcb1b8-78d5-4195-b887-74c53c8706cd","type":"BasicTicker"},{"attributes":{"plot":{"id":"d3169295-3010-468e-b491-0f534fc4c4a9","type":"Plot"},"ticker":{"id":"7ffcb1b8-78d5-4195-b887-74c53c8706cd","type":"BasicTicker"}},"id":"0ee7a22a-7d29-47cb-b7be-3a4b480830ec","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"d3169295-3010-468e-b491-0f534fc4c4a9","type":"Plot"},"ticker":{"id":"99223908-db30-45a4-8105-975c1782d29f","type":"BasicTicker"}},"id":"dcd0ad0a-18b1-4090-8bd5-b55baed19c8d","type":"Grid"},{"attributes":{"formatter":{"id":"7dbc72a9-b62c-49c9-92d5-ddeac989d7ff","type":"BasicTickFormatter"},"plot":{"id":"d3169295-3010-468e-b491-0f534fc4c4a9","type":"Plot"},"ticker":{"id":"99223908-db30-45a4-8105-975c1782d29f","type":"BasicTicker"}},"id":"941fe7c5-866f-42fe-ab9f-172e7b945525","type":"LinearAxis"},{"attributes":{},"id":"99223908-db30-45a4-8105-975c1782d29f","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1691d5a0-1639-41fc-8ead-29f9295553e4","type":"PanTool"},{"id":"7e33652f-a8bf-4440-aa18-fb107895f081","type":"WheelZoomTool"}]},"id":"5be70b68-112c-412e-a303-b6bda62fbcb0","type":"Toolbar"},{"attributes":{},"id":"0c22caa7-f363-400e-9f18-5ca94b513c57","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"ece293bb-43fb-42ef-9399-bab9daf24ce9","type":"GlyphRenderer"},{"id":"ee2bbd7c-a271-40e5-8bb2-2439e9abb336","type":"Grid"},{"id":"db88b86a-f073-4bc7-88c1-fed2e600a66c","type":"Grid"}],"title":{"id":"54ef44e7-eada-4cce-aaa7-160d77ada960","type":"Title"},"toolbar":{"id":"5be70b68-112c-412e-a303-b6bda62fbcb0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"1e2fe6b2-b716-4db9-95be-0f3bf6babfa5","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"4f6a1e6f-0e89-4713-a9b8-dd9d5057a51a","type":"LinearScale"}},"id":"bdfdf3c9-d572-46ca-8c92-ac93fd9aac17","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_width"}},"id":"b149d3c2-fa2d-430b-836a-b4b1baeb79a8","type":"Circle"},{"attributes":{},"id":"3dd1e0c7-c6a9-4f75-b008-393907e9dd17","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d0af3841-6af1-4e10-b744-7c31c388917c","type":"PanTool"},{"id":"efa04396-8678-489d-b62f-9d7fd305e567","type":"WheelZoomTool"}]},"id":"83423d54-6571-41d0-ba39-4a164e466520","type":"Toolbar"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"b149d3c2-fa2d-430b-836a-b4b1baeb79a8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"9c8decf9-cbee-4b49-89e6-6d9739795e2d","type":"CDSView"}},"id":"ece293bb-43fb-42ef-9399-bab9daf24ce9","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"9c8decf9-cbee-4b49-89e6-6d9739795e2d","type":"CDSView"},{"attributes":{},"id":"b57246e8-f4b9-428c-82e9-2e5082cdcc07","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"bdfdf3c9-d572-46ca-8c92-ac93fd9aac17","type":"Plot"},"ticker":{"id":"f8cf4104-62f3-46b4-bb41-7f95f45f060c","type":"BasicTicker"}},"id":"db88b86a-f073-4bc7-88c1-fed2e600a66c","type":"Grid"},{"attributes":{},"id":"1691d5a0-1639-41fc-8ead-29f9295553e4","type":"PanTool"},{"attributes":{"plot":{"id":"bdfdf3c9-d572-46ca-8c92-ac93fd9aac17","type":"Plot"},"ticker":{"id":"b57246e8-f4b9-428c-82e9-2e5082cdcc07","type":"BasicTicker"}},"id":"ee2bbd7c-a271-40e5-8bb2-2439e9abb336","type":"Grid"},{"attributes":{},"id":"f8cf4104-62f3-46b4-bb41-7f95f45f060c","type":"BasicTicker"},{"attributes":{},"id":"7e33652f-a8bf-4440-aa18-fb107895f081","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"9d288afe-e59f-4179-964e-9dd781275d3a","type":"GlyphRenderer"},{"id":"f39f67c6-d327-4a17-bb2d-c781be6a6ec2","type":"Grid"},{"id":"fa39757a-6b4b-4512-9c17-52993f0617df","type":"Grid"}],"title":{"id":"98ffcb12-0022-4d8d-bb67-bd1a06ace376","type":"Title"},"toolbar":{"id":"83423d54-6571-41d0-ba39-4a164e466520","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"6230372d-ce54-468e-bb2c-6d890799e8bb","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"9c61c3b6-c88f-402e-8506-05e6868ee821","type":"LinearScale"}},"id":"e42cccee-8f50-4268-9ab1-e35f2e0d7ac8","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_width"}},"id":"2b2d5702-ec9a-4e64-8edf-8cf73b528b1e","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1a43cf75-255d-4c66-b157-9a055d35de6a","type":"PanTool"},{"id":"89f671da-b891-4edb-a618-4682f035efe8","type":"WheelZoomTool"}]},"id":"90a2eddb-d65c-4a62-893e-fb7e612d2989","type":"Toolbar"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"2b2d5702-ec9a-4e64-8edf-8cf73b528b1e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"3d8b1847-35ae-4094-ad7f-b52e87033c43","type":"CDSView"}},"id":"9d288afe-e59f-4179-964e-9dd781275d3a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"3d8b1847-35ae-4094-ad7f-b52e87033c43","type":"CDSView"},{"attributes":{},"id":"2e6f3ecf-be10-440e-bcbc-778369a042e6","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e42cccee-8f50-4268-9ab1-e35f2e0d7ac8","type":"Plot"},"ticker":{"id":"eacb3f19-7094-451b-bb26-ef793c0b01f3","type":"BasicTicker"}},"id":"fa39757a-6b4b-4512-9c17-52993f0617df","type":"Grid"},{"attributes":{},"id":"d0af3841-6af1-4e10-b744-7c31c388917c","type":"PanTool"},{"attributes":{"plot":{"id":"e42cccee-8f50-4268-9ab1-e35f2e0d7ac8","type":"Plot"},"ticker":{"id":"2e6f3ecf-be10-440e-bcbc-778369a042e6","type":"BasicTicker"}},"id":"f39f67c6-d327-4a17-bb2d-c781be6a6ec2","type":"Grid"},{"attributes":{},"id":"eacb3f19-7094-451b-bb26-ef793c0b01f3","type":"BasicTicker"},{"attributes":{},"id":"efa04396-8678-489d-b62f-9d7fd305e567","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"dd85b98c-6d56-4357-8b4c-853475ed58b8","type":"GlyphRenderer"},{"id":"21273e13-5d9c-4d43-bdc5-bdb28c357d2d","type":"Grid"},{"id":"538840d9-e188-4c47-b365-61900e4b6f70","type":"Grid"}],"title":{"id":"6746e9d7-5f7a-420a-ab98-6065aeae0997","type":"Title"},"toolbar":{"id":"90a2eddb-d65c-4a62-893e-fb7e612d2989","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"9815f416-ff17-411c-ac81-2687b4270cf2","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"e5688049-0d46-44b7-a146-cacb0e0e6042","type":"LinearScale"}},"id":"d41f498d-aa9f-48e9-bf1a-ab0f7693f9bc","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_width"}},"id":"fc83e911-c0c8-4e22-bfa4-50a6ba695837","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cbd83eb6-ec05-457e-a462-bd08036a1990","type":"PanTool"},{"id":"bbab5d03-983e-4efb-8445-0bb3f00a81f5","type":"WheelZoomTool"}]},"id":"209777a0-4524-4d65-bc56-b15211182beb","type":"Toolbar"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"fc83e911-c0c8-4e22-bfa4-50a6ba695837","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"045285bc-0820-46f2-95c5-270b23dca54f","type":"CDSView"}},"id":"dd85b98c-6d56-4357-8b4c-853475ed58b8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"045285bc-0820-46f2-95c5-270b23dca54f","type":"CDSView"},{"attributes":{},"id":"7b37e30c-0cdb-4188-8d62-6f61fc836a83","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d41f498d-aa9f-48e9-bf1a-ab0f7693f9bc","type":"Plot"},"ticker":{"id":"c3b5e1de-4feb-40f5-b0af-a6a2b8d8a18f","type":"BasicTicker"}},"id":"538840d9-e188-4c47-b365-61900e4b6f70","type":"Grid"},{"attributes":{},"id":"1a43cf75-255d-4c66-b157-9a055d35de6a","type":"PanTool"},{"attributes":{"plot":{"id":"d41f498d-aa9f-48e9-bf1a-ab0f7693f9bc","type":"Plot"},"ticker":{"id":"7b37e30c-0cdb-4188-8d62-6f61fc836a83","type":"BasicTicker"}},"id":"21273e13-5d9c-4d43-bdc5-bdb28c357d2d","type":"Grid"},{"attributes":{},"id":"c3b5e1de-4feb-40f5-b0af-a6a2b8d8a18f","type":"BasicTicker"},{"attributes":{},"id":"89f671da-b891-4edb-a618-4682f035efe8","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"b0d38c1e-09c9-4f9d-8b0d-5dde83ed2f3b","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"6a84eb7f-e8d5-4a26-ba88-0001dec85f11","type":"GlyphRenderer"},{"id":"1d3df4c7-9024-48ab-93d8-4ff7b3b34f8d","type":"Grid"},{"id":"b0d38c1e-09c9-4f9d-8b0d-5dde83ed2f3b","type":"LinearAxis"},{"id":"b4889154-4888-4225-9d20-892ae7eb1776","type":"Grid"}],"title":{"id":"b1b02ea9-e86a-43ef-aaaa-119f2a6a46d3","type":"Title"},"toolbar":{"id":"209777a0-4524-4d65-bc56-b15211182beb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"76bf8491-bc1a-4d04-8173-f1f87176c4be","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"f09d0aae-b9f3-4cf6-97e8-9c49c79e2848","type":"LinearScale"}},"id":"f0d84a0c-c7a1-4fa5-ba43-523f97e46ce9","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"79de2f25-3e66-46cf-aa52-c66dcfcb00fb","type":"Circle"},{"attributes":{},"id":"cbd83eb6-ec05-457e-a462-bd08036a1990","type":"PanTool"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"79de2f25-3e66-46cf-aa52-c66dcfcb00fb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"3a3d2a4b-6a54-4108-8050-91e4562e3d23","type":"CDSView"}},"id":"6a84eb7f-e8d5-4a26-ba88-0001dec85f11","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"3a3d2a4b-6a54-4108-8050-91e4562e3d23","type":"CDSView"},{"attributes":{},"id":"7381d930-a9b0-4b7f-85d8-494daee8c756","type":"BasicTicker"},{"attributes":{"formatter":{"id":"218d68e4-2caf-4715-abeb-13b34587a0ef","type":"BasicTickFormatter"},"plot":{"id":"f0d84a0c-c7a1-4fa5-ba43-523f97e46ce9","type":"Plot"},"ticker":{"id":"6974dabf-ba3a-42b0-bd4f-c4d0445b657b","type":"BasicTicker"}},"id":"b0d38c1e-09c9-4f9d-8b0d-5dde83ed2f3b","type":"LinearAxis"},{"attributes":{},"id":"6974dabf-ba3a-42b0-bd4f-c4d0445b657b","type":"BasicTicker"},{"attributes":{"plot":{"id":"f0d84a0c-c7a1-4fa5-ba43-523f97e46ce9","type":"Plot"},"ticker":{"id":"7381d930-a9b0-4b7f-85d8-494daee8c756","type":"BasicTicker"}},"id":"1d3df4c7-9024-48ab-93d8-4ff7b3b34f8d","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"f0d84a0c-c7a1-4fa5-ba43-523f97e46ce9","type":"Plot"},"ticker":{"id":"6974dabf-ba3a-42b0-bd4f-c4d0445b657b","type":"BasicTicker"}},"id":"b4889154-4888-4225-9d20-892ae7eb1776","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9c39cbfc-5afd-41dc-b23a-d9fe36848bc0","type":"PanTool"},{"id":"5125e0bc-2498-40fa-bc0e-deccbf83d382","type":"WheelZoomTool"}]},"id":"ef68da93-5353-4a47-92b7-50b8488e779d","type":"Toolbar"},{"attributes":{},"id":"bbab5d03-983e-4efb-8445-0bb3f00a81f5","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"a152badc-f5cf-4469-82fe-485ded223180","type":"GlyphRenderer"},{"id":"30350547-54ea-4fd1-b396-c2f2eaf80eec","type":"Grid"},{"id":"e7dca94d-a2a7-47be-822b-20293fb7d2f0","type":"Grid"}],"title":{"id":"43f4da77-b2d6-4f41-bbbb-62013aafe256","type":"Title"},"toolbar":{"id":"ef68da93-5353-4a47-92b7-50b8488e779d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"8db6e039-4784-42ff-b620-d0291b10ffcd","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"11080a67-bc70-4ee4-84b6-53766d7f52f6","type":"LinearScale"}},"id":"9bba2440-5195-470d-b72c-21dc48492973","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_width"}},"id":"893b121b-b4b2-4fd2-a4d1-f3a6c4a75ad4","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2f861c01-7884-4b9f-8259-c1a2bc693c5d","type":"PanTool"},{"id":"feb13cfd-544b-456d-94eb-a60a4a4e51f2","type":"WheelZoomTool"}]},"id":"708b8e19-a019-464f-89bb-b546845fa2d8","type":"Toolbar"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"893b121b-b4b2-4fd2-a4d1-f3a6c4a75ad4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2f172d31-a8bd-4219-a8a1-6a634d72c5e8","type":"CDSView"}},"id":"a152badc-f5cf-4469-82fe-485ded223180","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"2f172d31-a8bd-4219-a8a1-6a634d72c5e8","type":"CDSView"},{"attributes":{},"id":"91639678-86b3-4e64-8428-146b87e82804","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"9bba2440-5195-470d-b72c-21dc48492973","type":"Plot"},"ticker":{"id":"a73ff48e-4296-4538-bee5-a6b5d25a5e13","type":"BasicTicker"}},"id":"e7dca94d-a2a7-47be-822b-20293fb7d2f0","type":"Grid"},{"attributes":{},"id":"9c39cbfc-5afd-41dc-b23a-d9fe36848bc0","type":"PanTool"},{"attributes":{},"id":"01d8d5a5-8c6f-48ed-9aa2-5a023599c27b","type":"LinearScale"},{"attributes":{"plot":{"id":"9bba2440-5195-470d-b72c-21dc48492973","type":"Plot"},"ticker":{"id":"91639678-86b3-4e64-8428-146b87e82804","type":"BasicTicker"}},"id":"30350547-54ea-4fd1-b396-c2f2eaf80eec","type":"Grid"},{"attributes":{},"id":"a73ff48e-4296-4538-bee5-a6b5d25a5e13","type":"BasicTicker"},{"attributes":{},"id":"5125e0bc-2498-40fa-bc0e-deccbf83d382","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"acf79852-7086-4201-9af7-9f8b27b83a67","type":"GlyphRenderer"},{"id":"4ee6b8fd-bd36-4294-88ac-aab290f85a60","type":"Grid"},{"id":"1c87ebe4-8e5a-4126-9d3b-6142d2f72526","type":"Grid"}],"title":{"id":"3ba54b16-786f-49a0-a752-955459c80f4d","type":"Title"},"toolbar":{"id":"708b8e19-a019-464f-89bb-b546845fa2d8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"80dec64d-9662-43c9-8ef2-ff1ec98c23d3","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"d795fff5-b4a9-4bb2-b940-041240c9a463","type":"LinearScale"}},"id":"21d943af-b84b-4528-8c95-960f9c302e39","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_width"}},"id":"63d5aaa0-a054-4f6d-9d64-f9ddc52ecbff","type":"Circle"},{"attributes":{"plot":{"id":"21d943af-b84b-4528-8c95-960f9c302e39","type":"Plot"},"ticker":{"id":"09f2d955-4189-4494-88fc-13f1f3a30704","type":"BasicTicker"}},"id":"4ee6b8fd-bd36-4294-88ac-aab290f85a60","type":"Grid"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"63d5aaa0-a054-4f6d-9d64-f9ddc52ecbff","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"eff45001-a3e4-4692-b490-a05084e94312","type":"CDSView"}},"id":"acf79852-7086-4201-9af7-9f8b27b83a67","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"eff45001-a3e4-4692-b490-a05084e94312","type":"CDSView"},{"attributes":{},"id":"09f2d955-4189-4494-88fc-13f1f3a30704","type":"BasicTicker"},{"attributes":{},"id":"a678fd3b-a2a8-463a-86a4-23acd710d323","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"92275ae1-a528-4ccd-8a4f-b6f82763fd98","type":"PanTool"},{"id":"fd273a01-8183-4829-9289-d65fc81b5429","type":"WheelZoomTool"}]},"id":"f0248abf-7406-417f-bfd3-6195a3b5d8c3","type":"Toolbar"},{"attributes":{},"id":"856ce907-7f4b-4ee2-8f05-31d99b60b80b","type":"LinearScale"},{"attributes":{},"id":"98d65dd7-3b5a-46ef-91b7-be9750af2315","type":"BasicTicker"},{"attributes":{},"id":"199da6f9-867d-4826-b7f8-df68aa963c00","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"21d943af-b84b-4528-8c95-960f9c302e39","type":"Plot"},"ticker":{"id":"98d65dd7-3b5a-46ef-91b7-be9750af2315","type":"BasicTicker"}},"id":"1c87ebe4-8e5a-4126-9d3b-6142d2f72526","type":"Grid"},{"attributes":{},"id":"2f861c01-7884-4b9f-8259-c1a2bc693c5d","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"690183fb-30ee-4b01-afab-75b2e58af418","type":"Title"},{"attributes":{},"id":"feb13cfd-544b-456d-94eb-a60a4a4e51f2","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"52f1b7b1-57de-4681-8286-0296ecc7998e","type":"Title"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"9a2e5698-f1d4-4885-a6a2-b58628163262","type":"GlyphRenderer"},{"id":"68d8fbdb-cb95-49f2-9d85-dfa84debf02c","type":"Grid"},{"id":"cb4cf7f6-e664-4365-bee0-83786f1acbee","type":"Grid"}],"title":{"id":"d7bc231e-a9fd-4a32-a533-0d53ebe07e9a","type":"Title"},"toolbar":{"id":"f0248abf-7406-417f-bfd3-6195a3b5d8c3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"15a89b21-d3f4-4aa9-bce8-d95204e6ae2d","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"c980bf8a-c53f-4cb1-8c5f-fdc55ebe5806","type":"LinearScale"}},"id":"7553dedb-6416-49e9-980f-8686566b991b","type":"Plot"},{"attributes":{},"id":"d94d8f19-7089-4fbc-b9f8-6f9c33fa3487","type":"LinearScale"},{"attributes":{"children":[{"id":"d3169295-3010-468e-b491-0f534fc4c4a9","type":"Plot"},{"id":"bdfdf3c9-d572-46ca-8c92-ac93fd9aac17","type":"Plot"},{"id":"e42cccee-8f50-4268-9ab1-e35f2e0d7ac8","type":"Plot"},{"id":"d41f498d-aa9f-48e9-bf1a-ab0f7693f9bc","type":"Plot"}]},"id":"27ce4faf-dada-4629-9023-7efcf52e5461","type":"Row"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_width"}},"id":"c667b5cc-3f0e-401b-919d-197fa81f6b49","type":"Circle"},{"attributes":{},"id":"6230372d-ce54-468e-bb2c-6d890799e8bb","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"51d34d9e-9bc1-4e19-9c5f-3d488c74a6f2","type":"PanTool"},{"id":"bbd8ac7e-5c12-446e-a0fe-18f5fc500f05","type":"WheelZoomTool"}]},"id":"e6c83261-c8bb-4ea6-8392-7e8605e97beb","type":"Toolbar"},{"attributes":{},"id":"fca365e0-870a-4b9e-9947-03f169011ffc","type":"LinearScale"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"c667b5cc-3f0e-401b-919d-197fa81f6b49","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"02f0d121-12c5-4bec-869a-16be256277aa","type":"CDSView"}},"id":"9a2e5698-f1d4-4885-a6a2-b58628163262","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"02f0d121-12c5-4bec-869a-16be256277aa","type":"CDSView"},{"attributes":{},"id":"be87671a-d368-4a07-8fd8-46efc7176e25","type":"BasicTicker"},{"attributes":{},"id":"7dbc72a9-b62c-49c9-92d5-ddeac989d7ff","type":"BasicTickFormatter"},{"attributes":{},"id":"14ce38cc-be11-4136-8f7e-75dc222ff6e6","type":"BasicTicker"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"a7fd3c50-0631-4ddc-bb73-4cc3c2a45606","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"56e5cc03-e9bd-45f0-85b1-150b218c1c03","type":"CDSView"}},"id":"d78988c9-db5c-422f-9e52-ccc8bfbb8bc2","type":"GlyphRenderer"},{"attributes":{},"id":"4f6a1e6f-0e89-4713-a9b8-dd9d5057a51a","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"7553dedb-6416-49e9-980f-8686566b991b","type":"Plot"},"ticker":{"id":"cfe68727-94ae-432d-b76b-f3f1a57b3424","type":"BasicTicker"}},"id":"cb4cf7f6-e664-4365-bee0-83786f1acbee","type":"Grid"},{"attributes":{},"id":"92275ae1-a528-4ccd-8a4f-b6f82763fd98","type":"PanTool"},{"attributes":{},"id":"1e2fe6b2-b716-4db9-95be-0f3bf6babfa5","type":"LinearScale"},{"attributes":{},"id":"78d25b4b-6837-44ab-b91a-a2f4434d5754","type":"BasicTicker"},{"attributes":{},"id":"95a8ceb3-70b2-4064-b4a1-31c5db320948","type":"PanTool"},{"attributes":{},"id":"f20fb5c6-6a7a-45a0-8d98-64f22f7cedc6","type":"LinearScale"},{"attributes":{"plot":{"id":"7553dedb-6416-49e9-980f-8686566b991b","type":"Plot"},"ticker":{"id":"14ce38cc-be11-4136-8f7e-75dc222ff6e6","type":"BasicTicker"}},"id":"68d8fbdb-cb95-49f2-9d85-dfa84debf02c","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"54ef44e7-eada-4cce-aaa7-160d77ada960","type":"Title"},{"attributes":{},"id":"13bb3ab4-f1bd-415b-8fe0-1f266e9b37ca","type":"BasicTicker"},{"attributes":{},"id":"cfe68727-94ae-432d-b76b-f3f1a57b3424","type":"BasicTicker"},{"attributes":{},"id":"fd273a01-8183-4829-9289-d65fc81b5429","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"e6318dd1-3e91-4332-9fd7-9c5b78755da7","type":"GlyphRenderer"},{"id":"e73349ae-f8ac-4d4b-a019-80c0a4681051","type":"Grid"},{"id":"a5fb73c1-6dea-4621-9a2c-742b881cce3f","type":"Grid"}],"title":{"id":"690183fb-30ee-4b01-afab-75b2e58af418","type":"Title"},"toolbar":{"id":"24e083ed-105d-49f2-8ba1-078adadf91b6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"856ce907-7f4b-4ee2-8f05-31d99b60b80b","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"fca365e0-870a-4b9e-9947-03f169011ffc","type":"LinearScale"}},"id":"09391956-a955-40d9-8408-9bc1c768b506","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"6746e9d7-5f7a-420a-ab98-6065aeae0997","type":"Title"},{"attributes":{},"id":"3e0df295-3c24-4ef8-8bb1-946607a21af1","type":"PanTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"029e4e5f-2b18-4617-87d5-d8049f6abdce","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"e241098d-ba03-4e1c-9ce6-33bfcfaa9f79","type":"LinearAxis"}],"min_border_bottom":42,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":240,"renderers":[{"id":"41a1f462-3811-4107-b38b-f81813c26058","type":"GlyphRenderer"},{"id":"029e4e5f-2b18-4617-87d5-d8049f6abdce","type":"LinearAxis"},{"id":"f9390c45-0390-4734-8ceb-847a75c1d893","type":"Grid"},{"id":"e241098d-ba03-4e1c-9ce6-33bfcfaa9f79","type":"LinearAxis"},{"id":"05cc5e77-1a3f-434a-ae8c-314c227fe793","type":"Grid"}],"title":{"id":"b90ef474-9a21-4994-9ce0-34b31b640b02","type":"Title"},"toolbar":{"id":"e6c83261-c8bb-4ea6-8392-7e8605e97beb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"0c0ced21-3dc0-4103-b7bc-3aae37490a16","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"d0c36f41-7911-4278-99e8-b583ece02938","type":"LinearScale"}},"id":"04866994-f2cf-4947-bf21-bc6d03f5edf2","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"b1b02ea9-e86a-43ef-aaaa-119f2a6a46d3","type":"Title"},{"attributes":{"plot":null,"text":""},"id":"98ffcb12-0022-4d8d-bb67-bd1a06ace376","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_length"}},"id":"cf666448-fee3-4d31-bc4f-5aeb2943a17a","type":"Circle"},{"attributes":{"plot":{"id":"09391956-a955-40d9-8408-9bc1c768b506","type":"Plot"},"ticker":{"id":"13bb3ab4-f1bd-415b-8fe0-1f266e9b37ca","type":"BasicTicker"}},"id":"e73349ae-f8ac-4d4b-a019-80c0a4681051","type":"Grid"},{"attributes":{},"id":"9815f416-ff17-411c-ac81-2687b4270cf2","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"04866994-f2cf-4947-bf21-bc6d03f5edf2","type":"Plot"},"ticker":{"id":"07273187-f598-4af9-ae56-f277af11b2a2","type":"BasicTicker"}},"id":"05cc5e77-1a3f-434a-ae8c-314c227fe793","type":"Grid"},{"attributes":{},"id":"76bf8491-bc1a-4d04-8173-f1f87176c4be","type":"LinearScale"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"cf666448-fee3-4d31-bc4f-5aeb2943a17a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8ea13a9f-3b9c-4557-a6d2-515471e4056c","type":"CDSView"}},"id":"41a1f462-3811-4107-b38b-f81813c26058","type":"GlyphRenderer"},{"attributes":{},"id":"d9a82392-68b4-4e5b-9213-44a7c7d96013","type":"BasicTicker"},{"attributes":{},"id":"fe351228-ce19-4bc5-8cb5-61a570fe7eec","type":"WheelZoomTool"},{"attributes":{},"id":"9c61c3b6-c88f-402e-8506-05e6868ee821","type":"LinearScale"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"8ea13a9f-3b9c-4557-a6d2-515471e4056c","type":"CDSView"},{"attributes":{"children":[{"id":"f0d84a0c-c7a1-4fa5-ba43-523f97e46ce9","type":"Plot"},{"id":"9bba2440-5195-470d-b72c-21dc48492973","type":"Plot"},{"id":"21d943af-b84b-4528-8c95-960f9c302e39","type":"Plot"},{"id":"7553dedb-6416-49e9-980f-8686566b991b","type":"Plot"}]},"id":"728c7297-9829-4358-94bb-c318d791350a","type":"Row"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"941fe7c5-866f-42fe-ab9f-172e7b945525","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"cb3a7c18-0e0f-4b27-8610-cbcf4d2972da","type":"GlyphRenderer"},{"id":"0ee7a22a-7d29-47cb-b7be-3a4b480830ec","type":"Grid"},{"id":"941fe7c5-866f-42fe-ab9f-172e7b945525","type":"LinearAxis"},{"id":"dcd0ad0a-18b1-4090-8bd5-b55baed19c8d","type":"Grid"}],"title":{"id":"52f1b7b1-57de-4681-8286-0296ecc7998e","type":"Title"},"toolbar":{"id":"17a10eb8-972a-4721-a13b-2a0c7ddfca3e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"d94d8f19-7089-4fbc-b9f8-6f9c33fa3487","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"f20fb5c6-6a7a-45a0-8d98-64f22f7cedc6","type":"LinearScale"}},"id":"d3169295-3010-468e-b491-0f534fc4c4a9","type":"Plot"},{"attributes":{"plot":{"id":"04866994-f2cf-4947-bf21-bc6d03f5edf2","type":"Plot"},"ticker":{"id":"927f45d9-3f35-4f58-a77f-658324d4b84c","type":"BasicTicker"}},"id":"f9390c45-0390-4734-8ceb-847a75c1d893","type":"Grid"},{"attributes":{},"id":"80dec64d-9662-43c9-8ef2-ff1ec98c23d3","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7b208f43-ef51-493a-b913-8526256de02c","type":"PanTool"},{"id":"1763171c-0577-4a7c-8269-7a23426f2794","type":"WheelZoomTool"}]},"id":"e708da0a-6430-420a-8a74-cdd103a4d158","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_width"}},"id":"0c7652df-33cd-4e53-a08e-4259c13449e5","type":"Circle"},{"attributes":{},"id":"e5688049-0d46-44b7-a146-cacb0e0e6042","type":"LinearScale"},{"attributes":{"formatter":{"id":"a6a434f9-992d-4e91-b527-5ed1c2f51c8a","type":"BasicTickFormatter"},"plot":{"id":"04866994-f2cf-4947-bf21-bc6d03f5edf2","type":"Plot"},"ticker":{"id":"07273187-f598-4af9-ae56-f277af11b2a2","type":"BasicTicker"}},"id":"e241098d-ba03-4e1c-9ce6-33bfcfaa9f79","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1342b9c6-f370-4248-8dea-c2edf6f1d2d5","type":"BasicTickFormatter"},"plot":{"id":"04866994-f2cf-4947-bf21-bc6d03f5edf2","type":"Plot"},"ticker":{"id":"927f45d9-3f35-4f58-a77f-658324d4b84c","type":"BasicTicker"}},"id":"029e4e5f-2b18-4617-87d5-d8049f6abdce","type":"LinearAxis"},{"attributes":{},"id":"218d68e4-2caf-4715-abeb-13b34587a0ef","type":"BasicTickFormatter"},{"attributes":{},"id":"927f45d9-3f35-4f58-a77f-658324d4b84c","type":"BasicTicker"},{"attributes":{},"id":"11080a67-bc70-4ee4-84b6-53766d7f52f6","type":"LinearScale"},{"attributes":{},"id":"07273187-f598-4af9-ae56-f277af11b2a2","type":"BasicTicker"},{"attributes":{},"id":"51d34d9e-9bc1-4e19-9c5f-3d488c74a6f2","type":"PanTool"},{"attributes":{},"id":"8db6e039-4784-42ff-b620-d0291b10ffcd","type":"LinearScale"},{"attributes":{},"id":"bbd8ac7e-5c12-446e-a0fe-18f5fc500f05","type":"WheelZoomTool"},{"attributes":{},"id":"f09d0aae-b9f3-4cf6-97e8-9c49c79e2848","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"eda4dbe6-bef6-4fd3-91e7-7ae47db5901e","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"599e7268-6e5a-49eb-a950-d15bc2068756","type":"GlyphRenderer"},{"id":"eda4dbe6-bef6-4fd3-91e7-7ae47db5901e","type":"LinearAxis"},{"id":"0cb4a598-c438-4f28-b673-ede7d168995f","type":"Grid"},{"id":"ba57405e-a1d5-41ac-9261-12976c1be80a","type":"Grid"}],"title":{"id":"af6edb82-ad25-4dab-84fa-c8ad592abebe","type":"Title"},"toolbar":{"id":"e708da0a-6430-420a-8a74-cdd103a4d158","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"82e4048b-135e-43e6-a0c1-508cd0b54b0c","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"a533a37f-8381-4cec-9ed1-8b025d82d6d8","type":"LinearScale"}},"id":"34d6074c-b515-4daa-a232-39726f8f6643","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"43f4da77-b2d6-4f41-bbbb-62013aafe256","type":"Title"},{"attributes":{"plot":null,"text":""},"id":"d7bc231e-a9fd-4a32-a533-0d53ebe07e9a","type":"Title"},{"attributes":{"callback":null,"column_names":["petal_length","petal_width","sepal_length","sepal_width","color"],"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]}}},"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_length"}},"id":"61269b70-a325-4647-bf04-37c61cef75d6","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"b90ef474-9a21-4994-9ce0-34b31b640b02","type":"Title"},{"attributes":{},"id":"d0f8eff3-a390-4fcd-a102-5c33727aac79","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":[{"id":"d3d0f853-5adf-45d7-92bb-5167fcd2f478","type":"GlyphRenderer"},{"id":"d78988c9-db5c-422f-9e52-ccc8bfbb8bc2","type":"GlyphRenderer"},{"id":"b3a6b267-e643-42bd-af75-438b0b6e857b","type":"GlyphRenderer"},{"id":"e6318dd1-3e91-4332-9fd7-9c5b78755da7","type":"GlyphRenderer"},{"id":"cb3a7c18-0e0f-4b27-8610-cbcf4d2972da","type":"GlyphRenderer"},{"id":"ece293bb-43fb-42ef-9399-bab9daf24ce9","type":"GlyphRenderer"},{"id":"9d288afe-e59f-4179-964e-9dd781275d3a","type":"GlyphRenderer"},{"id":"dd85b98c-6d56-4357-8b4c-853475ed58b8","type":"GlyphRenderer"},{"id":"6a84eb7f-e8d5-4a26-ba88-0001dec85f11","type":"GlyphRenderer"},{"id":"a152badc-f5cf-4469-82fe-485ded223180","type":"GlyphRenderer"},{"id":"acf79852-7086-4201-9af7-9f8b27b83a67","type":"GlyphRenderer"},{"id":"9a2e5698-f1d4-4885-a6a2-b58628163262","type":"GlyphRenderer"},{"id":"41a1f462-3811-4107-b38b-f81813c26058","type":"GlyphRenderer"},{"id":"599e7268-6e5a-49eb-a950-d15bc2068756","type":"GlyphRenderer"},{"id":"bb5d1c98-558c-466f-a7d1-923cc2048757","type":"GlyphRenderer"},{"id":"50787610-db07-4585-a8bd-69dce2a54fe0","type":"GlyphRenderer"}]},"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"3ba54b16-786f-49a0-a752-955459c80f4d","type":"Title"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"61269b70-a325-4647-bf04-37c61cef75d6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"557c6304-89ef-4539-9bc2-66b5895567b7","type":"CDSView"}},"id":"599e7268-6e5a-49eb-a950-d15bc2068756","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"d3d0f853-5adf-45d7-92bb-5167fcd2f478","type":"GlyphRenderer"},{"id":"d78988c9-db5c-422f-9e52-ccc8bfbb8bc2","type":"GlyphRenderer"},{"id":"b3a6b267-e643-42bd-af75-438b0b6e857b","type":"GlyphRenderer"},{"id":"e6318dd1-3e91-4332-9fd7-9c5b78755da7","type":"GlyphRenderer"},{"id":"cb3a7c18-0e0f-4b27-8610-cbcf4d2972da","type":"GlyphRenderer"},{"id":"ece293bb-43fb-42ef-9399-bab9daf24ce9","type":"GlyphRenderer"},{"id":"9d288afe-e59f-4179-964e-9dd781275d3a","type":"GlyphRenderer"},{"id":"dd85b98c-6d56-4357-8b4c-853475ed58b8","type":"GlyphRenderer"},{"id":"6a84eb7f-e8d5-4a26-ba88-0001dec85f11","type":"GlyphRenderer"},{"id":"a152badc-f5cf-4469-82fe-485ded223180","type":"GlyphRenderer"},{"id":"acf79852-7086-4201-9af7-9f8b27b83a67","type":"GlyphRenderer"},{"id":"9a2e5698-f1d4-4885-a6a2-b58628163262","type":"GlyphRenderer"},{"id":"41a1f462-3811-4107-b38b-f81813c26058","type":"GlyphRenderer"},{"id":"599e7268-6e5a-49eb-a950-d15bc2068756","type":"GlyphRenderer"},{"id":"bb5d1c98-558c-466f-a7d1-923cc2048757","type":"GlyphRenderer"},{"id":"50787610-db07-4585-a8bd-69dce2a54fe0","type":"GlyphRenderer"}]},"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},{"attributes":{},"id":"15a89b21-d3f4-4aa9-bce8-d95204e6ae2d","type":"LinearScale"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"557c6304-89ef-4539-9bc2-66b5895567b7","type":"CDSView"},{"attributes":{"children":[{"id":"6e25c4b1-f548-4001-8736-a92c16e6020f","type":"Row"},{"id":"27ce4faf-dada-4629-9023-7efcf52e5461","type":"Row"},{"id":"728c7297-9829-4358-94bb-c318d791350a","type":"Row"},{"id":"7640aa94-7952-46de-94f0-e48b4c6e3b3d","type":"Row"}]},"id":"cf45ef7a-1091-4b17-a803-64c5581ee848","type":"Column"},{"attributes":{},"id":"0c0ced21-3dc0-4103-b7bc-3aae37490a16","type":"LinearScale"},{"attributes":{"plot":{"id":"34d6074c-b515-4daa-a232-39726f8f6643","type":"Plot"},"ticker":{"id":"7b3a27e7-7680-49a4-9fa4-234029f8808e","type":"BasicTicker"}},"id":"0cb4a598-c438-4f28-b673-ede7d168995f","type":"Grid"},{"attributes":{"children":[{"id":"7021bc67-2aff-47ba-87a9-a9824d52c12e","type":"Plot"},{"id":"6409e2dd-494b-4739-910e-27b10c67c66e","type":"Plot"},{"id":"ce7509ef-fa12-46a0-8e0a-8de1948f30a8","type":"Plot"},{"id":"09391956-a955-40d9-8408-9bc1c768b506","type":"Plot"}]},"id":"6e25c4b1-f548-4001-8736-a92c16e6020f","type":"Row"},{"attributes":{},"id":"d795fff5-b4a9-4bb2-b940-041240c9a463","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0cb2e88e-342f-43b8-a462-12e92da147b2","type":"PanTool"},{"id":"c1a3d3d0-208a-4863-8e65-e83faa6573e7","type":"WheelZoomTool"}]},"id":"c6d9cc0e-cc7a-40a7-a492-b2ce6250236d","type":"Toolbar"},{"attributes":{"children":[{"id":"04866994-f2cf-4947-bf21-bc6d03f5edf2","type":"Plot"},{"id":"34d6074c-b515-4daa-a232-39726f8f6643","type":"Plot"},{"id":"951bc56f-5768-4b00-b3ad-5b845403903d","type":"Plot"},{"id":"88da7a47-bf0b-4941-a66f-5c7b9c853e0a","type":"Plot"}]},"id":"7640aa94-7952-46de-94f0-e48b4c6e3b3d","type":"Row"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"6c441e1a-fe31-48d5-bb1f-5ba6af171c4e","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"d3d0f853-5adf-45d7-92bb-5167fcd2f478","type":"GlyphRenderer"},{"id":"c3c37868-bc56-40ba-8af3-f441b1eae49e","type":"Grid"},{"id":"6c441e1a-fe31-48d5-bb1f-5ba6af171c4e","type":"LinearAxis"},{"id":"82cb3d94-a910-4c1c-9caa-c8b608aa67e5","type":"Grid"}],"title":{"id":"01ee2a7b-337c-44b8-9d3b-45aebcbcf5de","type":"Title"},"toolbar":{"id":"4f835102-5280-435e-983d-3318263be6c6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"fa0ea1d0-0e0e-47e4-b667-d52b352ff19f","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"ae7467d6-5dfe-4c87-bd6f-216c41858631","type":"LinearScale"}},"id":"7021bc67-2aff-47ba-87a9-a9824d52c12e","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"34d6074c-b515-4daa-a232-39726f8f6643","type":"Plot"},"ticker":{"id":"d0f8eff3-a390-4fcd-a102-5c33727aac79","type":"BasicTicker"}},"id":"ba57405e-a1d5-41ac-9261-12976c1be80a","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1d01d0ca-d7a8-4c43-b574-5e53abc8f554","type":"PanTool"},{"id":"e8c06df7-0743-4c78-bf47-bad05ca81f6d","type":"WheelZoomTool"}]},"id":"4f835102-5280-435e-983d-3318263be6c6","type":"Toolbar"},{"attributes":{"formatter":{"id":"f76988a4-d1a0-4c2e-9528-12fd4eb079ca","type":"BasicTickFormatter"},"plot":{"id":"34d6074c-b515-4daa-a232-39726f8f6643","type":"Plot"},"ticker":{"id":"7b3a27e7-7680-49a4-9fa4-234029f8808e","type":"BasicTicker"}},"id":"eda4dbe6-bef6-4fd3-91e7-7ae47db5901e","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"af6edb82-ad25-4dab-84fa-c8ad592abebe","type":"Title"},{"attributes":{},"id":"c980bf8a-c53f-4cb1-8c5f-fdc55ebe5806","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_length"}},"id":"8c52638b-6d58-4d22-8e0f-e19f3d427dca","type":"Circle"},{"attributes":{},"id":"7b3a27e7-7680-49a4-9fa4-234029f8808e","type":"BasicTicker"},{"attributes":{},"id":"1d01d0ca-d7a8-4c43-b574-5e53abc8f554","type":"PanTool"},{"attributes":{},"id":"7b208f43-ef51-493a-b913-8526256de02c","type":"PanTool"},{"attributes":{},"id":"1763171c-0577-4a7c-8269-7a23426f2794","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"8c52638b-6d58-4d22-8e0f-e19f3d427dca","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5fd02d5c-72ba-47c3-a742-a3776be3db6c","type":"CDSView"}},"id":"d3d0f853-5adf-45d7-92bb-5167fcd2f478","type":"GlyphRenderer"},{"attributes":{},"id":"1342b9c6-f370-4248-8dea-c2edf6f1d2d5","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"7b8c2dd3-fb9b-4593-ab76-33ed14c74dd0","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"bb5d1c98-558c-466f-a7d1-923cc2048757","type":"GlyphRenderer"},{"id":"7b8c2dd3-fb9b-4593-ab76-33ed14c74dd0","type":"LinearAxis"},{"id":"3de7b3e1-ab07-43d8-b90d-3e913b0ab8a5","type":"Grid"},{"id":"92967ba3-ac38-4aac-a24a-f7e58fa3d518","type":"Grid"}],"title":{"id":"dcc2f6f5-3775-4102-8fb0-14f953e31990","type":"Title"},"toolbar":{"id":"c6d9cc0e-cc7a-40a7-a492-b2ce6250236d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"70a5910a-bca8-401e-9aa4-bfdeafcf4dfd","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"2da6006c-5ae4-4aa4-83ec-50161a498fda","type":"LinearScale"}},"id":"951bc56f-5768-4b00-b3ad-5b845403903d","type":"Plot"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"5fd02d5c-72ba-47c3-a742-a3776be3db6c","type":"CDSView"},{"attributes":{},"id":"9057f020-4159-4e71-bbf3-9a1bf558132c","type":"BasicTickFormatter"},{"attributes":{},"id":"a533a37f-8381-4cec-9ed1-8b025d82d6d8","type":"LinearScale"},{"attributes":{},"id":"82ffbd61-1adb-402e-ad80-af95cfb29739","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_length"}},"id":"04204c65-9af1-443a-ba55-7077fb846301","type":"Circle"},{"attributes":{"formatter":{"id":"d201459b-0f52-4106-b762-2dd3024d2944","type":"BasicTickFormatter"},"plot":{"id":"7021bc67-2aff-47ba-87a9-a9824d52c12e","type":"Plot"},"ticker":{"id":"c5e182e0-09d3-408f-bf43-569a1f1bf986","type":"BasicTicker"}},"id":"6c441e1a-fe31-48d5-bb1f-5ba6af171c4e","type":"LinearAxis"},{"attributes":{},"id":"d0c36f41-7911-4278-99e8-b583ece02938","type":"LinearScale"},{"attributes":{},"id":"c60d0efc-1959-4f80-842f-bb8488f43c9c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"04204c65-9af1-443a-ba55-7077fb846301","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2ce3d54f-c11a-423a-a5a8-5680cf6cd6a1","type":"CDSView"}},"id":"bb5d1c98-558c-466f-a7d1-923cc2048757","type":"GlyphRenderer"},{"attributes":{},"id":"c5e182e0-09d3-408f-bf43-569a1f1bf986","type":"BasicTicker"},{"attributes":{},"id":"a6a434f9-992d-4e91-b527-5ed1c2f51c8a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7021bc67-2aff-47ba-87a9-a9824d52c12e","type":"Plot"},"ticker":{"id":"82ffbd61-1adb-402e-ad80-af95cfb29739","type":"BasicTicker"}},"id":"c3c37868-bc56-40ba-8af3-f441b1eae49e","type":"Grid"},{"attributes":{},"id":"a65b4e40-677a-4a93-ab31-201c39aebd20","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"2ce3d54f-c11a-423a-a5a8-5680cf6cd6a1","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"7021bc67-2aff-47ba-87a9-a9824d52c12e","type":"Plot"},"ticker":{"id":"c5e182e0-09d3-408f-bf43-569a1f1bf986","type":"BasicTicker"}},"id":"82cb3d94-a910-4c1c-9caa-c8b608aa67e5","type":"Grid"},{"attributes":{"plot":{"id":"951bc56f-5768-4b00-b3ad-5b845403903d","type":"Plot"},"ticker":{"id":"727d79e5-7e9f-4629-8ff2-082e0458255b","type":"BasicTicker"}},"id":"3de7b3e1-ab07-43d8-b90d-3e913b0ab8a5","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"95a8ceb3-70b2-4064-b4a1-31c5db320948","type":"PanTool"},{"id":"da93aae9-a6b6-4d70-8b23-236bf672757f","type":"WheelZoomTool"}]},"id":"59066cd2-2869-44b2-af0b-f20774c1b651","type":"Toolbar"},{"attributes":{},"id":"82e4048b-135e-43e6-a0c1-508cd0b54b0c","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b41a8566-5675-46d2-b332-487d45411297","type":"PanTool"},{"id":"f69df662-1619-4384-98ef-bf135934a81c","type":"WheelZoomTool"}]},"id":"1f7823ad-b5f6-448a-807d-4f4c4a65ccaf","type":"Toolbar"},{"attributes":{},"id":"e8c06df7-0743-4c78-bf47-bad05ca81f6d","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"951bc56f-5768-4b00-b3ad-5b845403903d","type":"Plot"},"ticker":{"id":"c60d0efc-1959-4f80-842f-bb8488f43c9c","type":"BasicTicker"}},"id":"92967ba3-ac38-4aac-a24a-f7e58fa3d518","type":"Grid"},{"attributes":{},"id":"f76988a4-d1a0-4c2e-9528-12fd4eb079ca","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"d78988c9-db5c-422f-9e52-ccc8bfbb8bc2","type":"GlyphRenderer"},{"id":"99510bc3-5eed-4601-bae9-139b94314c99","type":"Grid"},{"id":"be7e510c-4e06-4602-a64c-bbc79b3c9657","type":"Grid"}],"title":{"id":"03932dad-6eca-4123-8cf4-69a6f6bebb9d","type":"Title"},"toolbar":{"id":"59066cd2-2869-44b2-af0b-f20774c1b651","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"01d8d5a5-8c6f-48ed-9aa2-5a023599c27b","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"b4cde14c-40d5-4434-bf46-35bd3ec0d68a","type":"LinearScale"}},"id":"6409e2dd-494b-4739-910e-27b10c67c66e","type":"Plot"},{"attributes":{"formatter":{"id":"a65b4e40-677a-4a93-ab31-201c39aebd20","type":"BasicTickFormatter"},"plot":{"id":"951bc56f-5768-4b00-b3ad-5b845403903d","type":"Plot"},"ticker":{"id":"727d79e5-7e9f-4629-8ff2-082e0458255b","type":"BasicTicker"}},"id":"7b8c2dd3-fb9b-4593-ab76-33ed14c74dd0","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"dcc2f6f5-3775-4102-8fb0-14f953e31990","type":"Title"},{"attributes":{},"id":"2da6006c-5ae4-4aa4-83ec-50161a498fda","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_length"}},"id":"3e037395-54a2-4f00-9da2-82fd2536edec","type":"Circle"},{"attributes":{},"id":"727d79e5-7e9f-4629-8ff2-082e0458255b","type":"BasicTicker"},{"attributes":{},"id":"0cb2e88e-342f-43b8-a462-12e92da147b2","type":"PanTool"},{"attributes":{},"id":"70a5910a-bca8-401e-9aa4-bfdeafcf4dfd","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_length"}},"id":"a7fd3c50-0631-4ddc-bb73-4cc3c2a45606","type":"Circle"},{"attributes":{},"id":"c1a3d3d0-208a-4863-8e65-e83faa6573e7","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"6409e2dd-494b-4739-910e-27b10c67c66e","type":"Plot"},"ticker":{"id":"78d25b4b-6837-44ab-b91a-a2f4434d5754","type":"BasicTicker"}},"id":"99510bc3-5eed-4601-bae9-139b94314c99","type":"Grid"},{"attributes":{},"id":"da93aae9-a6b6-4d70-8b23-236bf672757f","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"ae78d555-a804-459f-a322-7018eb88a5c4","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"50787610-db07-4585-a8bd-69dce2a54fe0","type":"GlyphRenderer"},{"id":"ae78d555-a804-459f-a322-7018eb88a5c4","type":"LinearAxis"},{"id":"c28f630c-5e05-473d-81fb-c9f9f8515646","type":"Grid"},{"id":"3e758b44-7826-4582-9ee9-765de50b6104","type":"Grid"}],"title":{"id":"4a705bd6-4bbc-4ccb-ba25-3067add8d6bb","type":"Title"},"toolbar":{"id":"1f7823ad-b5f6-448a-807d-4f4c4a65ccaf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"d87d40b7-8db3-45aa-b3ee-c83f4a18bb05","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"b770df3e-6468-46a4-8eb9-1c1dc5305776","type":"LinearScale"}},"id":"88da7a47-bf0b-4941-a66f-5c7b9c853e0a","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"4a705bd6-4bbc-4ccb-ba25-3067add8d6bb","type":"Title"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"b3a6b267-e643-42bd-af75-438b0b6e857b","type":"GlyphRenderer"},{"id":"08e30441-8adc-49e7-ac4b-ac03f1973fb0","type":"Grid"},{"id":"e6cbf837-4344-49c1-b374-8d99abb585fa","type":"Grid"}],"title":{"id":"9a2c97bc-ca29-47a0-a617-91c52460da0d","type":"Title"},"toolbar":{"id":"7022b3c3-56c7-425d-a9fe-0340204abce2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a2cc9a9-78db-4a10-9586-5e2f4656aba1","type":"DataRange1d"},"x_scale":{"id":"a678fd3b-a2a8-463a-86a4-23acd710d323","type":"LinearScale"},"y_range":{"id":"448eb2a3-e490-4d6f-a9d5-c0b5f273922b","type":"DataRange1d"},"y_scale":{"id":"199da6f9-867d-4826-b7f8-df68aa963c00","type":"LinearScale"}},"id":"ce7509ef-fa12-46a0-8e0a-8de1948f30a8","type":"Plot"},{"attributes":{},"id":"b770df3e-6468-46a4-8eb9-1c1dc5305776","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_length"}},"id":"ecab34d0-f193-426b-a278-6f9634cf6d59","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2afae9f0-48a4-4a48-9388-9b158371862a","type":"PanTool"},{"id":"1ce37c5a-5651-4794-b4a3-04e711d6b555","type":"WheelZoomTool"}]},"id":"7022b3c3-56c7-425d-a9fe-0340204abce2","type":"Toolbar"},{"attributes":{},"id":"d87d40b7-8db3-45aa-b3ee-c83f4a18bb05","type":"LinearScale"},{"attributes":{},"id":"29743f5e-6ca1-4045-9f48-8bd00dcf96bc","type":"BasicTicker"},{"attributes":{"children":[{"id":"9496b361-e1b4-41bc-a54c-df72e200c46a","type":"ToolbarBox"},{"id":"cf45ef7a-1091-4b17-a803-64c5581ee848","type":"Column"}]},"id":"a49211a3-3982-4aeb-801c-74323b94bb41","type":"Column"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"ecab34d0-f193-426b-a278-6f9634cf6d59","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"aa5314a8-babb-435b-9dcf-b37843b39bfb","type":"CDSView"}},"id":"50787610-db07-4585-a8bd-69dce2a54fe0","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"56e5cc03-e9bd-45f0-85b1-150b218c1c03","type":"CDSView"},{"attributes":{"tools":[{"id":"1d01d0ca-d7a8-4c43-b574-5e53abc8f554","type":"PanTool"},{"id":"e8c06df7-0743-4c78-bf47-bad05ca81f6d","type":"WheelZoomTool"},{"id":"95a8ceb3-70b2-4064-b4a1-31c5db320948","type":"PanTool"},{"id":"da93aae9-a6b6-4d70-8b23-236bf672757f","type":"WheelZoomTool"},{"id":"2afae9f0-48a4-4a48-9388-9b158371862a","type":"PanTool"},{"id":"1ce37c5a-5651-4794-b4a3-04e711d6b555","type":"WheelZoomTool"},{"id":"3e0df295-3c24-4ef8-8bb1-946607a21af1","type":"PanTool"},{"id":"fe351228-ce19-4bc5-8cb5-61a570fe7eec","type":"WheelZoomTool"},{"id":"759ed6be-fbfa-4234-aa45-856452878afe","type":"PanTool"},{"id":"0c22caa7-f363-400e-9f18-5ca94b513c57","type":"WheelZoomTool"},{"id":"1691d5a0-1639-41fc-8ead-29f9295553e4","type":"PanTool"},{"id":"7e33652f-a8bf-4440-aa18-fb107895f081","type":"WheelZoomTool"},{"id":"d0af3841-6af1-4e10-b744-7c31c388917c","type":"PanTool"},{"id":"efa04396-8678-489d-b62f-9d7fd305e567","type":"WheelZoomTool"},{"id":"1a43cf75-255d-4c66-b157-9a055d35de6a","type":"PanTool"},{"id":"89f671da-b891-4edb-a618-4682f035efe8","type":"WheelZoomTool"},{"id":"cbd83eb6-ec05-457e-a462-bd08036a1990","type":"PanTool"},{"id":"bbab5d03-983e-4efb-8445-0bb3f00a81f5","type":"WheelZoomTool"},{"id":"9c39cbfc-5afd-41dc-b23a-d9fe36848bc0","type":"PanTool"},{"id":"5125e0bc-2498-40fa-bc0e-deccbf83d382","type":"WheelZoomTool"},{"id":"2f861c01-7884-4b9f-8259-c1a2bc693c5d","type":"PanTool"},{"id":"feb13cfd-544b-456d-94eb-a60a4a4e51f2","type":"WheelZoomTool"},{"id":"92275ae1-a528-4ccd-8a4f-b6f82763fd98","type":"PanTool"},{"id":"fd273a01-8183-4829-9289-d65fc81b5429","type":"WheelZoomTool"},{"id":"51d34d9e-9bc1-4e19-9c5f-3d488c74a6f2","type":"PanTool"},{"id":"bbd8ac7e-5c12-446e-a0fe-18f5fc500f05","type":"WheelZoomTool"},{"id":"7b208f43-ef51-493a-b913-8526256de02c","type":"PanTool"},{"id":"1763171c-0577-4a7c-8269-7a23426f2794","type":"WheelZoomTool"},{"id":"0cb2e88e-342f-43b8-a462-12e92da147b2","type":"PanTool"},{"id":"c1a3d3d0-208a-4863-8e65-e83faa6573e7","type":"WheelZoomTool"},{"id":"b41a8566-5675-46d2-b332-487d45411297","type":"PanTool"},{"id":"f69df662-1619-4384-98ef-bf135934a81c","type":"WheelZoomTool"}]},"id":"3ffd7f2a-08bd-41dc-b102-fb472b8036ce","type":"ProxyToolbar"},{"attributes":{"dimension":1,"plot":{"id":"6409e2dd-494b-4739-910e-27b10c67c66e","type":"Plot"},"ticker":{"id":"be87671a-d368-4a07-8fd8-46efc7176e25","type":"BasicTicker"}},"id":"be7e510c-4e06-4602-a64c-bbc79b3c9657","type":"Grid"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"aa5314a8-babb-435b-9dcf-b37843b39bfb","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3e0df295-3c24-4ef8-8bb1-946607a21af1","type":"PanTool"},{"id":"fe351228-ce19-4bc5-8cb5-61a570fe7eec","type":"WheelZoomTool"}]},"id":"24e083ed-105d-49f2-8ba1-078adadf91b6","type":"Toolbar"},{"attributes":{"plot":{"id":"88da7a47-bf0b-4941-a66f-5c7b9c853e0a","type":"Plot"},"ticker":{"id":"eeb63b7d-fdca-40be-807c-5c69d50f6375","type":"BasicTicker"}},"id":"c28f630c-5e05-473d-81fb-c9f9f8515646","type":"Grid"},{"attributes":{},"id":"fa0ea1d0-0e0e-47e4-b667-d52b352ff19f","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"759ed6be-fbfa-4234-aa45-856452878afe","type":"PanTool"},{"id":"0c22caa7-f363-400e-9f18-5ca94b513c57","type":"WheelZoomTool"}]},"id":"17a10eb8-972a-4721-a13b-2a0c7ddfca3e","type":"Toolbar"},{"attributes":{"toolbar":{"id":"3ffd7f2a-08bd-41dc-b102-fb472b8036ce","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"9496b361-e1b4-41bc-a54c-df72e200c46a","type":"ToolbarBox"},{"attributes":{"dimension":1,"plot":{"id":"09391956-a955-40d9-8408-9bc1c768b506","type":"Plot"},"ticker":{"id":"d9a82392-68b4-4e5b-9213-44a7c7d96013","type":"BasicTicker"}},"id":"a5fb73c1-6dea-4621-9a2c-742b881cce3f","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"88da7a47-bf0b-4941-a66f-5c7b9c853e0a","type":"Plot"},"ticker":{"id":"29743f5e-6ca1-4045-9f48-8bd00dcf96bc","type":"BasicTicker"}},"id":"3e758b44-7826-4582-9ee9-765de50b6104","type":"Grid"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"dea42e57-1c08-486a-a1ab-0a3ee996a9b4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a79d8c5d-d819-4374-913f-e5c0cb1c2424","type":"CDSView"}},"id":"e6318dd1-3e91-4332-9fd7-9c5b78755da7","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9057f020-4159-4e71-bbf3-9a1bf558132c","type":"BasicTickFormatter"},"plot":{"id":"88da7a47-bf0b-4941-a66f-5c7b9c853e0a","type":"Plot"},"ticker":{"id":"eeb63b7d-fdca-40be-807c-5c69d50f6375","type":"BasicTicker"}},"id":"ae78d555-a804-459f-a322-7018eb88a5c4","type":"LinearAxis"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"a79d8c5d-d819-4374-913f-e5c0cb1c2424","type":"CDSView"},{"attributes":{},"id":"eeb63b7d-fdca-40be-807c-5c69d50f6375","type":"BasicTicker"},{"attributes":{},"id":"b41a8566-5675-46d2-b332-487d45411297","type":"PanTool"},{"attributes":{"data_source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"},"glyph":{"id":"3e037395-54a2-4f00-9da2-82fd2536edec","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b34fb3d6-2121-419b-8acd-978514b61ffc","type":"CDSView"}},"id":"b3a6b267-e643-42bd-af75-438b0b6e857b","type":"GlyphRenderer"},{"attributes":{},"id":"2afae9f0-48a4-4a48-9388-9b158371862a","type":"PanTool"},{"attributes":{},"id":"f69df662-1619-4384-98ef-bf135934a81c","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"01ee2a7b-337c-44b8-9d3b-45aebcbcf5de","type":"Title"},{"attributes":{"plot":{"id":"ce7509ef-fa12-46a0-8e0a-8de1948f30a8","type":"Plot"},"ticker":{"id":"3dd1e0c7-c6a9-4f75-b008-393907e9dd17","type":"BasicTicker"}},"id":"08e30441-8adc-49e7-ac4b-ac03f1973fb0","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"9a2c97bc-ca29-47a0-a617-91c52460da0d","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_length"}},"id":"dea42e57-1c08-486a-a1ab-0a3ee996a9b4","type":"Circle"},{"attributes":{},"id":"d201459b-0f52-4106-b762-2dd3024d2944","type":"BasicTickFormatter"},{"attributes":{},"id":"f33ba6e5-b0e6-4616-abfc-c2fc79c48990","type":"BasicTicker"},{"attributes":{},"id":"1ce37c5a-5651-4794-b4a3-04e711d6b555","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"03932dad-6eca-4123-8cf4-69a6f6bebb9d","type":"Title"},{"attributes":{},"id":"b4cde14c-40d5-4434-bf46-35bd3ec0d68a","type":"LinearScale"},{"attributes":{"source":{"id":"6d47a3c6-42d1-459d-b13b-56a211d81356","type":"ColumnDataSource"}},"id":"b34fb3d6-2121-419b-8acd-978514b61ffc","type":"CDSView"},{"attributes":{},"id":"ae7467d6-5dfe-4c87-bd6f-216c41858631","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"ce7509ef-fa12-46a0-8e0a-8de1948f30a8","type":"Plot"},"ticker":{"id":"f33ba6e5-b0e6-4616-abfc-c2fc79c48990","type":"BasicTicker"}},"id":"e6cbf837-4344-49c1-b374-8d99abb585fa","type":"Grid"}],"root_ids":["a49211a3-3982-4aeb-801c-74323b94bb41"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"9b20de12-417d-48eb-9f77-f8f289c9c93d","elementid":"1fd9389f-18f4-4a89-8867-a0bc8bbd5b31","modelid":"a49211a3-3982-4aeb-801c-74323b94bb41"}];
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