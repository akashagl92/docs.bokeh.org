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
      };var element = document.getElementById("48b3f15d-f934-4963-9168-11371ddca5a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48b3f15d-f934-4963-9168-11371ddca5a0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a0d20108-f320-4146-b280-66f6308aca43":{"roots":{"references":[{"attributes":{},"id":"78055a9e-95e6-4bdb-aa4b-d67d535156f5","type":"ResetTool"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"188e3d7e-408b-4ca5-9e39-a312ad738f4e","type":"Line"},{"attributes":{"data_source":{"id":"e41a897b-9330-4859-9be2-16819f7ae0f4","type":"ColumnDataSource"},"glyph":{"id":"7190c70b-4ebd-4b82-bafa-1d4934d9b7a1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9d34e97-5167-4835-b8ad-0e4e36a053f3","type":"Line"},"selection_glyph":null,"view":{"id":"42b0db43-b400-4ca1-ab73-8b43c57912bb","type":"CDSView"}},"id":"4428b1b6-2e28-421d-8e42-4cc4badb0c51","type":"GlyphRenderer"},{"attributes":{"source":{"id":"81becf4e-485d-4e52-ab85-355a03955520","type":"ColumnDataSource"}},"id":"1c8adecf-032a-4e95-90c6-9720bf24d835","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"81becf4e-485d-4e52-ab85-355a03955520","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"e0b360c3-4acd-4369-ad7f-124b771e68fc","type":"LegendItem"},{"id":"4e163e77-b097-44e3-b215-1609bd7c7619","type":"LegendItem"},{"id":"2766b38f-c4a8-49ff-813e-e8854e843fed","type":"LegendItem"},{"id":"43d386d2-2c80-4ea1-9052-76f32ba29a61","type":"LegendItem"}],"plot":{"id":"c43f9b4f-9a42-425e-8e55-e71862a446a3","subtype":"Figure","type":"Plot"}},"id":"928dad5b-b054-4129-a82e-199a22bb7202","type":"Legend"},{"attributes":{"source":{"id":"5e00f3a4-2fc7-4d17-bea9-40d2f71dd48b","type":"ColumnDataSource"}},"id":"37c41eb8-4af1-4bbd-a349-b1ab94ac284e","type":"CDSView"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"3a445f45-b11b-4fd0-a74e-2cff7d11159b","type":"GlyphRenderer"}]},"id":"4e163e77-b097-44e3-b215-1609bd7c7619","type":"LegendItem"},{"attributes":{},"id":"fe414b41-3e5f-4cfc-9174-98505e302446","type":"LogScale"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"a016e987-ce10-41c5-a377-b7b6ce90487e","type":"Line"},{"attributes":{"below":[{"id":"3f823bde-d9bc-466f-a4a3-314d7e7acb10","type":"LinearAxis"}],"left":[{"id":"e1dd4e13-317b-4e16-b255-2a0458b72b9a","type":"LogAxis"}],"renderers":[{"id":"3f823bde-d9bc-466f-a4a3-314d7e7acb10","type":"LinearAxis"},{"id":"928c3695-5fc9-47a7-b010-7672f27e019e","type":"Grid"},{"id":"e1dd4e13-317b-4e16-b255-2a0458b72b9a","type":"LogAxis"},{"id":"30257510-6159-4cdc-a8e8-f9b68a76c428","type":"Grid"},{"id":"ebb15004-b2ed-45d1-9820-0de39c8aad24","type":"BoxAnnotation"},{"id":"928dad5b-b054-4129-a82e-199a22bb7202","type":"Legend"},{"id":"4428b1b6-2e28-421d-8e42-4cc4badb0c51","type":"GlyphRenderer"},{"id":"7b70328b-6235-44cf-b74a-972b4da485c2","type":"GlyphRenderer"},{"id":"3a445f45-b11b-4fd0-a74e-2cff7d11159b","type":"GlyphRenderer"},{"id":"d2585012-eb5f-45cc-a18d-b427281dfadc","type":"GlyphRenderer"},{"id":"e2177a92-9932-4f36-a572-87ef51efb121","type":"GlyphRenderer"},{"id":"170a5c51-998f-45bb-8db2-f3689b8c7ae8","type":"GlyphRenderer"}],"title":{"id":"ffe1f7ac-0e80-4641-9364-1b86b10d3682","type":"Title"},"toolbar":{"id":"799c52d2-0f4d-4f04-be7b-5b2a10cf94d5","type":"Toolbar"},"x_range":{"id":"c9dfd4ed-9b72-4423-b6f0-36cf3e40d04e","type":"DataRange1d"},"x_scale":{"id":"26d6a68d-e2fe-4b56-bb6c-309368a49d49","type":"LinearScale"},"y_range":{"id":"608be481-88e0-40ca-8a1f-2e54d0ae8064","type":"Range1d"},"y_scale":{"id":"fe414b41-3e5f-4cfc-9174-98505e302446","type":"LogScale"}},"id":"c43f9b4f-9a42-425e-8e55-e71862a446a3","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"174842a6-59b4-4b41-9382-c07c50d6d958","type":"ColumnDataSource"}},"id":"8242fc52-f071-4874-b205-c5f66b22a05f","type":"CDSView"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"d2585012-eb5f-45cc-a18d-b427281dfadc","type":"GlyphRenderer"},{"id":"e2177a92-9932-4f36-a572-87ef51efb121","type":"GlyphRenderer"}]},"id":"2766b38f-c4a8-49ff-813e-e8854e843fed","type":"LegendItem"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"4428b1b6-2e28-421d-8e42-4cc4badb0c51","type":"GlyphRenderer"},{"id":"7b70328b-6235-44cf-b74a-972b4da485c2","type":"GlyphRenderer"}]},"id":"e0b360c3-4acd-4369-ad7f-124b771e68fc","type":"LegendItem"},{"attributes":{"data_source":{"id":"5e00f3a4-2fc7-4d17-bea9-40d2f71dd48b","type":"ColumnDataSource"},"glyph":{"id":"689b8d82-2b27-468a-8c4d-175414f0a440","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5d9434ec-cb91-470b-bc07-63044b94a55f","type":"Line"},"selection_glyph":null,"view":{"id":"37c41eb8-4af1-4bbd-a349-b1ab94ac284e","type":"CDSView"}},"id":"d2585012-eb5f-45cc-a18d-b427281dfadc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9950a42-d27f-4b07-9f04-3bb1ff75729e","type":"Circle"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"a88b0b8a-17b0-40f9-8d46-a155f689c6d1","type":"Circle"},{"attributes":{"data_source":{"id":"174842a6-59b4-4b41-9382-c07c50d6d958","type":"ColumnDataSource"},"glyph":{"id":"a88b0b8a-17b0-40f9-8d46-a155f689c6d1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f9950a42-d27f-4b07-9f04-3bb1ff75729e","type":"Circle"},"selection_glyph":null,"view":{"id":"8242fc52-f071-4874-b205-c5f66b22a05f","type":"CDSView"}},"id":"7b70328b-6235-44cf-b74a-972b4da485c2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"174842a6-59b4-4b41-9382-c07c50d6d958","type":"ColumnDataSource"},{"attributes":{"ticker":null},"id":"7e3f8e18-da7a-4f90-af65-eb20af8dc652","type":"LogTickFormatter"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"689b8d82-2b27-468a-8c4d-175414f0a440","type":"Line"},{"attributes":{"axis_label":"sections","formatter":{"id":"701d3b5e-b332-4227-acb4-d1a062207b04","type":"BasicTickFormatter"},"plot":{"id":"c43f9b4f-9a42-425e-8e55-e71862a446a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7580fcc0-596c-482b-b9a5-076429ef024d","type":"BasicTicker"}},"id":"3f823bde-d9bc-466f-a4a3-314d7e7acb10","type":"LinearAxis"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"170a5c51-998f-45bb-8db2-f3689b8c7ae8","type":"GlyphRenderer"}]},"id":"43d386d2-2c80-4ea1-9052-76f32ba29a61","type":"LegendItem"},{"attributes":{"data_source":{"id":"b10bfb17-9dd6-4f93-8316-929acbdcab9d","type":"ColumnDataSource"},"glyph":{"id":"188e3d7e-408b-4ca5-9e39-a312ad738f4e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eac87a42-639c-43e8-8531-f0e277b05027","type":"Line"},"selection_glyph":null,"view":{"id":"212e8857-ce70-4d56-af48-d25a6f336eb6","type":"CDSView"}},"id":"170a5c51-998f-45bb-8db2-f3689b8c7ae8","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"608be481-88e0-40ca-8a1f-2e54d0ae8064","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"525b9f58-c38e-4d84-be45-e54ad464b6e6","type":"Circle"},{"attributes":{"plot":{"id":"c43f9b4f-9a42-425e-8e55-e71862a446a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7580fcc0-596c-482b-b9a5-076429ef024d","type":"BasicTicker"}},"id":"928c3695-5fc9-47a7-b010-7672f27e019e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ea5e6b83-5d80-4f88-9ede-1fe4e7a44430","type":"PanTool"},{"id":"afe65ae5-9621-4b57-bfa2-5921a8242a99","type":"BoxZoomTool"},{"id":"78055a9e-95e6-4bdb-aa4b-d67d535156f5","type":"ResetTool"},{"id":"9b641fea-3dca-4943-8791-fa44ac0f2738","type":"SaveTool"}]},"id":"799c52d2-0f4d-4f04-be7b-5b2a10cf94d5","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"eac87a42-639c-43e8-8531-f0e277b05027","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"b9d34e97-5167-4835-b8ad-0e4e36a053f3","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"7190c70b-4ebd-4b82-bafa-1d4934d9b7a1","type":"Line"},{"attributes":{"num_minor_ticks":10},"id":"bc43f27b-baf0-4afa-b25f-7d61e5ab8204","type":"LogTicker"},{"attributes":{"source":{"id":"afa352b4-9a15-4ee2-b61e-b038e8b08c54","type":"ColumnDataSource"}},"id":"7b10bcb4-9870-4403-87d9-f5ac0cb83fb0","type":"CDSView"},{"attributes":{},"id":"26d6a68d-e2fe-4b56-bb6c-309368a49d49","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"c43f9b4f-9a42-425e-8e55-e71862a446a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc43f27b-baf0-4afa-b25f-7d61e5ab8204","type":"LogTicker"}},"id":"30257510-6159-4cdc-a8e8-f9b68a76c428","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"5e00f3a4-2fc7-4d17-bea9-40d2f71dd48b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"afa352b4-9a15-4ee2-b61e-b038e8b08c54","type":"ColumnDataSource"},"glyph":{"id":"9447fdf5-9f5a-45f0-8f8a-94bf0d931818","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"525b9f58-c38e-4d84-be45-e54ad464b6e6","type":"Circle"},"selection_glyph":null,"view":{"id":"7b10bcb4-9870-4403-87d9-f5ac0cb83fb0","type":"CDSView"}},"id":"e2177a92-9932-4f36-a572-87ef51efb121","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"log axis example"},"id":"ffe1f7ac-0e80-4641-9364-1b86b10d3682","type":"Title"},{"attributes":{},"id":"701d3b5e-b332-4227-acb4-d1a062207b04","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"81becf4e-485d-4e52-ab85-355a03955520","type":"ColumnDataSource"},"glyph":{"id":"a016e987-ce10-41c5-a377-b7b6ce90487e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6b7ce642-8e7b-4b93-927c-cea995089fdc","type":"Line"},"selection_glyph":null,"view":{"id":"1c8adecf-032a-4e95-90c6-9720bf24d835","type":"CDSView"}},"id":"3a445f45-b11b-4fd0-a74e-2cff7d11159b","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ebb15004-b2ed-45d1-9820-0de39c8aad24","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"c9dfd4ed-9b72-4423-b6f0-36cf3e40d04e","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"e41a897b-9330-4859-9be2-16819f7ae0f4","type":"ColumnDataSource"},{"attributes":{},"id":"7580fcc0-596c-482b-b9a5-076429ef024d","type":"BasicTicker"},{"attributes":{"source":{"id":"b10bfb17-9dd6-4f93-8316-929acbdcab9d","type":"ColumnDataSource"}},"id":"212e8857-ce70-4d56-af48-d25a6f336eb6","type":"CDSView"},{"attributes":{"axis_label":"particles","formatter":{"id":"7e3f8e18-da7a-4f90-af65-eb20af8dc652","type":"LogTickFormatter"},"plot":{"id":"c43f9b4f-9a42-425e-8e55-e71862a446a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc43f27b-baf0-4afa-b25f-7d61e5ab8204","type":"LogTicker"}},"id":"e1dd4e13-317b-4e16-b255-2a0458b72b9a","type":"LogAxis"},{"attributes":{"source":{"id":"e41a897b-9330-4859-9be2-16819f7ae0f4","type":"ColumnDataSource"}},"id":"42b0db43-b400-4ca1-ab73-8b43c57912bb","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5d9434ec-cb91-470b-bc07-63044b94a55f","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"b10bfb17-9dd6-4f93-8316-929acbdcab9d","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"9447fdf5-9f5a-45f0-8f8a-94bf0d931818","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"afa352b4-9a15-4ee2-b61e-b038e8b08c54","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"ebb15004-b2ed-45d1-9820-0de39c8aad24","type":"BoxAnnotation"}},"id":"afe65ae5-9621-4b57-bfa2-5921a8242a99","type":"BoxZoomTool"},{"attributes":{},"id":"9b641fea-3dca-4943-8791-fa44ac0f2738","type":"SaveTool"},{"attributes":{},"id":"ea5e6b83-5d80-4f88-9ede-1fe4e7a44430","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"6b7ce642-8e7b-4b93-927c-cea995089fdc","type":"Line"}],"root_ids":["c43f9b4f-9a42-425e-8e55-e71862a446a3"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"a0d20108-f320-4146-b280-66f6308aca43","elementid":"48b3f15d-f934-4963-9168-11371ddca5a0","modelid":"c43f9b4f-9a42-425e-8e55-e71862a446a3"}];
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