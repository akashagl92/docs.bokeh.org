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
      };var element = document.getElementById("9fc63fce-fee9-4b7d-a77c-5d78fa0b9292");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9fc63fce-fee9-4b7d-a77c-5d78fa0b9292' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"865e6bc8-4b1d-4129-904b-8607d93c980d":{"roots":{"references":[{"attributes":{"child":{"id":"0c43a8e3-da8a-4de0-8308-186bd77a4fd2","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"6078e54f-0761-4980-95f3-8d2d6480e54b","type":"Panel"},{"attributes":{"data_source":{"id":"1c9e8fa5-7b4b-47da-9d3a-f5a699e13f06","type":"ColumnDataSource"},"glyph":{"id":"fb65b08b-aaa5-4b50-9674-324013260b01","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"974352de-ec31-4c1a-943d-47debf8a7edc","type":"Line"},"selection_glyph":null,"view":{"id":"7dec21c9-3b41-4d9c-8cf5-6a7c5261384d","type":"CDSView"}},"id":"df5907be-4ce1-4b2a-bb65-289290df97fc","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"8bfe2a3b-f39e-439f-a4d4-c17aad589cdf","type":"LinearAxis"}],"left":[{"id":"1413eaea-b253-4ec3-9ba4-19b0e619a27c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8bfe2a3b-f39e-439f-a4d4-c17aad589cdf","type":"LinearAxis"},{"id":"621dd473-cdd3-4b4a-9303-06420c6e3f58","type":"Grid"},{"id":"1413eaea-b253-4ec3-9ba4-19b0e619a27c","type":"LinearAxis"},{"id":"1c6e8a9d-f753-4295-af45-982bea3b3067","type":"Grid"},{"id":"e2eba7b3-e85d-44ae-b48f-20feeeb5cf95","type":"BoxAnnotation"},{"id":"7427e685-c776-42dc-9263-c7a0472a9cae","type":"GlyphRenderer"}],"title":{"id":"e1487ea4-ce3d-49a9-8fbc-10e5f7696414","type":"Title"},"toolbar":{"id":"4c960bca-a775-4f2d-8d5f-0e976363c4df","type":"Toolbar"},"x_range":{"id":"514a5145-13a9-4629-ab84-7ffaf80b297c","type":"DataRange1d"},"x_scale":{"id":"b0b6589f-7b87-42b1-b8af-2310b65d96b6","type":"LinearScale"},"y_range":{"id":"5c5b6195-add6-41c4-b18f-7d40252424a6","type":"DataRange1d"},"y_scale":{"id":"eeac1469-b613-4268-ac67-b52778590714","type":"LinearScale"}},"id":"0c43a8e3-da8a-4de0-8308-186bd77a4fd2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"168c1b65-488c-4ad5-ba6e-9969e2fb8d9a","type":"BasicTicker"},{"attributes":{},"id":"018066c5-3ccc-48e8-a156-6f8e3b1f8b05","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"514a5145-13a9-4629-ab84-7ffaf80b297c","type":"DataRange1d"},{"attributes":{"plot":{"id":"d9ef47ab-784c-492e-bb92-46f778b8ab90","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ef14ab1-fe63-461f-8021-41c1da8b6297","type":"BasicTicker"}},"id":"f7bf5fdb-4633-4341-b62c-3d577a8ba608","type":"Grid"},{"attributes":{"below":[{"id":"f3e363b9-5a46-4883-a99c-f5129fd27560","type":"LinearAxis"}],"left":[{"id":"1b117b83-2c66-4c22-8164-c6c841456e17","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f3e363b9-5a46-4883-a99c-f5129fd27560","type":"LinearAxis"},{"id":"f7bf5fdb-4633-4341-b62c-3d577a8ba608","type":"Grid"},{"id":"1b117b83-2c66-4c22-8164-c6c841456e17","type":"LinearAxis"},{"id":"960a40f3-370d-4c00-962a-c1d61424a9f7","type":"Grid"},{"id":"c881a35d-91b8-4e4d-9829-7af0c8cfaed2","type":"BoxAnnotation"},{"id":"df5907be-4ce1-4b2a-bb65-289290df97fc","type":"GlyphRenderer"}],"title":{"id":"1c4f3e2d-a661-40ad-b3c9-7147022b6b26","type":"Title"},"toolbar":{"id":"6c44ae63-f686-4362-8d01-30026fbe96f7","type":"Toolbar"},"x_range":{"id":"15d6d3f6-cc50-41fe-bd36-7a14e210b75b","type":"DataRange1d"},"x_scale":{"id":"a4c5f06a-ede9-42b0-a133-abaa205dfde8","type":"LinearScale"},"y_range":{"id":"a2245170-366f-4986-a20f-7711a02a67fe","type":"DataRange1d"},"y_scale":{"id":"89cc3dd0-fb54-4b27-868d-ea7fb9ffa7c3","type":"LinearScale"}},"id":"d9ef47ab-784c-492e-bb92-46f778b8ab90","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"4e31badc-029b-4ea2-89f1-388836d10af9","type":"ColumnDataSource"}},"id":"ca908bfa-d5f8-4285-b492-fc82e3ab8123","type":"CDSView"},{"attributes":{},"id":"992a63f2-7165-4010-b275-1b5bfef7e14e","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"6078e54f-0761-4980-95f3-8d2d6480e54b","type":"Panel"},{"id":"6601eccc-b493-477b-b1bc-4303e73f8fa6","type":"Panel"}]},"id":"80ecb710-24a7-4b4b-9138-7312eacae8fc","type":"Tabs"},{"attributes":{"formatter":{"id":"9998ef5b-8560-443d-8768-c6d4d9feaff5","type":"BasicTickFormatter"},"plot":{"id":"d9ef47ab-784c-492e-bb92-46f778b8ab90","subtype":"Figure","type":"Plot"},"ticker":{"id":"168c1b65-488c-4ad5-ba6e-9969e2fb8d9a","type":"BasicTicker"}},"id":"1b117b83-2c66-4c22-8164-c6c841456e17","type":"LinearAxis"},{"attributes":{},"id":"eeac1469-b613-4268-ac67-b52778590714","type":"LinearScale"},{"attributes":{},"id":"ff2c7182-ba45-4bf0-830a-d837d33b3e7a","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1c9e8fa5-7b4b-47da-9d3a-f5a699e13f06","type":"ColumnDataSource"}},"id":"7dec21c9-3b41-4d9c-8cf5-6a7c5261384d","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"d9ef47ab-784c-492e-bb92-46f778b8ab90","subtype":"Figure","type":"Plot"},"ticker":{"id":"168c1b65-488c-4ad5-ba6e-9969e2fb8d9a","type":"BasicTicker"}},"id":"960a40f3-370d-4c00-962a-c1d61424a9f7","type":"Grid"},{"attributes":{"child":{"id":"d9ef47ab-784c-492e-bb92-46f778b8ab90","subtype":"Figure","type":"Plot"},"title":"line"},"id":"6601eccc-b493-477b-b1bc-4303e73f8fa6","type":"Panel"},{"attributes":{},"id":"9998ef5b-8560-443d-8768-c6d4d9feaff5","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"1c4f3e2d-a661-40ad-b3c9-7147022b6b26","type":"Title"},{"attributes":{"formatter":{"id":"de579674-2daa-4883-a7f7-5707e2323d18","type":"BasicTickFormatter"},"plot":{"id":"0c43a8e3-da8a-4de0-8308-186bd77a4fd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2008b18-088d-45be-b574-5f21a36bb518","type":"BasicTicker"}},"id":"8bfe2a3b-f39e-439f-a4d4-c17aad589cdf","type":"LinearAxis"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"fb65b08b-aaa5-4b50-9674-324013260b01","type":"Line"},{"attributes":{"overlay":{"id":"e2eba7b3-e85d-44ae-b48f-20feeeb5cf95","type":"BoxAnnotation"}},"id":"d0937295-ea9c-40c5-b54e-fa6da06cb944","type":"BoxZoomTool"},{"attributes":{},"id":"3aa32cd7-e5f0-4ceb-8146-ed090423ea86","type":"BasicTicker"},{"attributes":{"formatter":{"id":"018066c5-3ccc-48e8-a156-6f8e3b1f8b05","type":"BasicTickFormatter"},"plot":{"id":"d9ef47ab-784c-492e-bb92-46f778b8ab90","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ef14ab1-fe63-461f-8021-41c1da8b6297","type":"BasicTicker"}},"id":"f3e363b9-5a46-4883-a99c-f5129fd27560","type":"LinearAxis"},{"attributes":{},"id":"207ec803-d9a0-4482-8e94-855bdacd191a","type":"HelpTool"},{"attributes":{},"id":"0ed46655-63c3-4452-aa6e-a6d90f52db5e","type":"PanTool"},{"attributes":{},"id":"a4c5f06a-ede9-42b0-a133-abaa205dfde8","type":"LinearScale"},{"attributes":{"formatter":{"id":"19fb933d-cc1f-45da-9ac9-00f180b49dca","type":"BasicTickFormatter"},"plot":{"id":"0c43a8e3-da8a-4de0-8308-186bd77a4fd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3aa32cd7-e5f0-4ceb-8146-ed090423ea86","type":"BasicTicker"}},"id":"1413eaea-b253-4ec3-9ba4-19b0e619a27c","type":"LinearAxis"},{"attributes":{},"id":"89cc3dd0-fb54-4b27-868d-ea7fb9ffa7c3","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cabeb391-0bf6-472c-ab42-be7a1f959686","type":"PanTool"},{"id":"992a63f2-7165-4010-b275-1b5bfef7e14e","type":"WheelZoomTool"},{"id":"d0937295-ea9c-40c5-b54e-fa6da06cb944","type":"BoxZoomTool"},{"id":"5f273e39-52ba-49a3-ac25-2731fdd4c9ee","type":"SaveTool"},{"id":"faf97a29-e39e-43bb-a3cb-267b84b3573e","type":"ResetTool"},{"id":"aaf7d7c2-1f29-4398-a216-a5a7fcae937b","type":"HelpTool"}]},"id":"4c960bca-a775-4f2d-8d5f-0e976363c4df","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0ed46655-63c3-4452-aa6e-a6d90f52db5e","type":"PanTool"},{"id":"ff2c7182-ba45-4bf0-830a-d837d33b3e7a","type":"WheelZoomTool"},{"id":"e4dd8f79-0550-40a7-a4d7-dbb25a35883c","type":"BoxZoomTool"},{"id":"8654d561-dd82-4310-adeb-26ec582038bc","type":"SaveTool"},{"id":"f9eda04e-27f5-4be5-9737-d0a14a314296","type":"ResetTool"},{"id":"207ec803-d9a0-4482-8e94-855bdacd191a","type":"HelpTool"}]},"id":"6c44ae63-f686-4362-8d01-30026fbe96f7","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c881a35d-91b8-4e4d-9829-7af0c8cfaed2","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"0c43a8e3-da8a-4de0-8308-186bd77a4fd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3aa32cd7-e5f0-4ceb-8146-ed090423ea86","type":"BasicTicker"}},"id":"1c6e8a9d-f753-4295-af45-982bea3b3067","type":"Grid"},{"attributes":{},"id":"b0b6589f-7b87-42b1-b8af-2310b65d96b6","type":"LinearScale"},{"attributes":{"callback":null},"id":"a2245170-366f-4986-a20f-7711a02a67fe","type":"DataRange1d"},{"attributes":{},"id":"3ef14ab1-fe63-461f-8021-41c1da8b6297","type":"BasicTicker"},{"attributes":{"callback":null},"id":"5c5b6195-add6-41c4-b18f-7d40252424a6","type":"DataRange1d"},{"attributes":{"callback":null},"id":"15d6d3f6-cc50-41fe-bd36-7a14e210b75b","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"1c9e8fa5-7b4b-47da-9d3a-f5a699e13f06","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"c881a35d-91b8-4e4d-9829-7af0c8cfaed2","type":"BoxAnnotation"}},"id":"e4dd8f79-0550-40a7-a4d7-dbb25a35883c","type":"BoxZoomTool"},{"attributes":{},"id":"8654d561-dd82-4310-adeb-26ec582038bc","type":"SaveTool"},{"attributes":{},"id":"faf97a29-e39e-43bb-a3cb-267b84b3573e","type":"ResetTool"},{"attributes":{},"id":"f9eda04e-27f5-4be5-9737-d0a14a314296","type":"ResetTool"},{"attributes":{},"id":"de579674-2daa-4883-a7f7-5707e2323d18","type":"BasicTickFormatter"},{"attributes":{},"id":"aaf7d7c2-1f29-4398-a216-a5a7fcae937b","type":"HelpTool"},{"attributes":{"plot":{"id":"0c43a8e3-da8a-4de0-8308-186bd77a4fd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2008b18-088d-45be-b574-5f21a36bb518","type":"BasicTicker"}},"id":"621dd473-cdd3-4b4a-9303-06420c6e3f58","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"671213b0-a96b-4a44-b385-35a322e23668","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"974352de-ec31-4c1a-943d-47debf8a7edc","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e2eba7b3-e85d-44ae-b48f-20feeeb5cf95","type":"BoxAnnotation"},{"attributes":{},"id":"19fb933d-cc1f-45da-9ac9-00f180b49dca","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"053d8675-01f4-479c-ac4f-833e74681863","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"4e31badc-029b-4ea2-89f1-388836d10af9","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"e1487ea4-ce3d-49a9-8fbc-10e5f7696414","type":"Title"},{"attributes":{},"id":"5f273e39-52ba-49a3-ac25-2731fdd4c9ee","type":"SaveTool"},{"attributes":{"data_source":{"id":"4e31badc-029b-4ea2-89f1-388836d10af9","type":"ColumnDataSource"},"glyph":{"id":"671213b0-a96b-4a44-b385-35a322e23668","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"053d8675-01f4-479c-ac4f-833e74681863","type":"Circle"},"selection_glyph":null,"view":{"id":"ca908bfa-d5f8-4285-b492-fc82e3ab8123","type":"CDSView"}},"id":"7427e685-c776-42dc-9263-c7a0472a9cae","type":"GlyphRenderer"},{"attributes":{},"id":"d2008b18-088d-45be-b574-5f21a36bb518","type":"BasicTicker"},{"attributes":{},"id":"cabeb391-0bf6-472c-ab42-be7a1f959686","type":"PanTool"}],"root_ids":["80ecb710-24a7-4b4b-9138-7312eacae8fc"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"865e6bc8-4b1d-4129-904b-8607d93c980d","elementid":"9fc63fce-fee9-4b7d-a77c-5d78fa0b9292","modelid":"80ecb710-24a7-4b4b-9138-7312eacae8fc"}];
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