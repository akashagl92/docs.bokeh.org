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
      };var element = document.getElementById("2c6d4551-85cd-4d52-acfc-885bd0160923");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2c6d4551-85cd-4d52-acfc-885bd0160923' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"86ec0ab5-1dfc-4c3e-b901-a2585525be0e":{"roots":{"references":[{"attributes":{"source":{"id":"095fd771-c2ad-4933-a5d2-9136d74b95b4","type":"ColumnDataSource"}},"id":"d4c4c1ac-bf4f-431d-9028-6fc548b5e5ba","type":"CDSView"},{"attributes":{},"id":"94c3bb21-fcc3-48f4-a596-be6da06052f2","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["1948","1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"]},"id":"9792c4ec-db18-4435-942f-b94b6c89ff12","type":"FactorRange"},{"attributes":{},"id":"faf7b810-e322-47c4-84a3-c17f9e6f3c38","type":"SaveTool"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"b9729ee6-af92-48f6-913a-4cadf203074f","type":"CategoricalTickFormatter"},"major_label_standoff":0,"major_label_text_font_size":{"value":"5pt"},"major_tick_line_color":{"value":null},"plot":{"id":"ea856893-feb7-45d4-ba3d-296405624af8","subtype":"Figure","type":"Plot"},"ticker":{"id":"94c3bb21-fcc3-48f4-a596-be6da06052f2","type":"CategoricalTicker"}},"id":"92a0e97f-a275-4fd8-810f-3216f40d5067","type":"CategoricalAxis"},{"attributes":{},"id":"d0c3c202-d55f-4010-8f6c-e1ecb5870ab9","type":"PanTool"},{"attributes":{"format":"%d%%"},"id":"5ab38b82-eea5-46e5-bc9e-25efa836f8e8","type":"PrintfTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ea856893-feb7-45d4-ba3d-296405624af8","subtype":"Figure","type":"Plot"},"ticker":{"id":"56b03ed6-a296-4277-b388-ee842fceb882","type":"CategoricalTicker"}},"id":"02ca4aec-30c3-4d3d-ab19-4022f12fc710","type":"Grid"},{"attributes":{"fill_color":{"field":"rate","transform":{"id":"37f2568d-a356-4293-b0df-043a2e0e6283","type":"LinearColorMapper"}},"height":{"units":"data","value":1},"line_color":{"value":null},"width":{"units":"data","value":1},"x":{"field":"Year"},"y":{"field":"Month"}},"id":"1f0d545e-799d-4ec0-9e0b-4f6cb81da206","type":"Rect"},{"attributes":{"above":[{"id":"f09e4566-379e-4563-bf6c-1a59a85b2ca7","type":"CategoricalAxis"}],"left":[{"id":"92a0e97f-a275-4fd8-810f-3216f40d5067","type":"CategoricalAxis"}],"plot_height":400,"plot_width":900,"renderers":[{"id":"f09e4566-379e-4563-bf6c-1a59a85b2ca7","type":"CategoricalAxis"},{"id":"02ca4aec-30c3-4d3d-ab19-4022f12fc710","type":"Grid"},{"id":"92a0e97f-a275-4fd8-810f-3216f40d5067","type":"CategoricalAxis"},{"id":"42f40098-0b33-4701-a8bb-ea63651c6e24","type":"Grid"},{"id":"01685b2b-fa50-4876-83d9-83a3d2dffc01","type":"BoxAnnotation"},{"id":"1935d740-2c2d-4ede-838d-35c4411a199e","type":"GlyphRenderer"},{"id":"1d7c9009-0d73-40df-b6c6-2ced5c0db836","type":"ColorBar"}],"right":[{"id":"1d7c9009-0d73-40df-b6c6-2ced5c0db836","type":"ColorBar"}],"title":{"id":"6e29088a-508a-456f-a82c-123bf0518ea6","type":"Title"},"toolbar":{"id":"4916d437-14a1-4ee1-8016-ba161b2f3aee","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"9792c4ec-db18-4435-942f-b94b6c89ff12","type":"FactorRange"},"x_scale":{"id":"04682f8d-a3df-4a70-a2c7-28da8cdd4b34","type":"CategoricalScale"},"y_range":{"id":"c67f2e29-09ff-4e83-87d4-0a6e508bcc4e","type":"FactorRange"},"y_scale":{"id":"31822898-0f8d-4351-aafc-f2adc352462a","type":"CategoricalScale"}},"id":"ea856893-feb7-45d4-ba3d-296405624af8","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["Year","Month","rate","index"],"data":{"Month":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"Year":["1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827],"rate":{"__ndarray__":"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MzMVQGZmZmZmZhRAzczMzMzMGECamZmZmZkXQM3MzMzMzBZAZmZmZmZmFkAAAAAAAAAWQDMzMzMzMxdAmpmZmZmZF0BmZmZmZmYWQJqZmZmZmRVAzczMzMzMFEAzMzMzMzMVQM3MzMzMzBRAMzMzMzMzGUAAAAAAAAAYQDMzMzMzMxdAmpmZmZmZFUCamZmZmZkVQAAAAAAAABZAZmZmZmZmFkBmZmZmZmYUQAAAAAAAABRAmpmZmZmZE0AAAAAAAAAUQAAAAAAAABRAmpmZmZmZF0DNzMzMzMwWQAAAAAAAABZAMzMzMzMzE0DNzMzMzMwSQM3MzMzMzBRAAAAAAAAAFEAzMzMzMzMTQM3MzMzMzBJAmpmZmZmZEUAzMzMzMzMRQJqZmZmZmRFAzczMzMzMFEAAAAAAAAAUQAAAAAAAABRAZmZmZmZmEEDNzMzMzMwQQM3MzMzMzBJAzczMzMzMEkAAAAAAAAASQJqZmZmZmRFAzczMzMzMEEBmZmZmZmYQQAAAAAAAABBAMzMzMzMzE0DNzMzMzMwSQJqZmZmZmRFAZmZmZmZmEEAAAAAAAAAQQAAAAAAAABJAAAAAAAAAEkDNzMzMzMwQQGZmZmZmZhBAZmZmZmZmDkBmZmZmZmYOQJqZmZmZmQ1AAAAAAAAAEkCamZmZmZkRQDMzMzMzMxFAmpmZmZmZDUBmZmZmZmYOQGZmZmZmZhBAzczMzMzMEEBmZmZmZmYQQGZmZmZmZg5AzczMzMzMDECamZmZmZkNQJqZmZmZmQ1AzczMzMzMEkBmZmZmZmYSQAAAAAAAABJAzczMzMzMEEBmZmZmZmYQQM3MzMzMzBJAzczMzMzMEkCamZmZmZkTQM3MzMzMzBJAAAAAAAAAFEAzMzMzMzMVQJqZmZmZmRVAMzMzMzMzGUBmZmZmZmYYQGZmZmZmZhhAzczMzMzMFkAAAAAAAAAWQAAAAAAAABhAmpmZmZmZF0DNzMzMzMwWQJqZmZmZmRVAMzMzMzMzFUBmZmZmZmYWQM3MzMzMzBZAAAAAAAAAGkCamZmZmZkZQM3MzMzMzBhAMzMzMzMzF0AzMzMzMzMXQAAAAAAAABpAMzMzMzMzGUAAAAAAAAAYQDMzMzMzMxdAZmZmZmZmFkBmZmZmZmYWQJqZmZmZmRVAMzMzMzMzGUAAAAAAAAAYQAAAAAAAABhAmpmZmZmZFUAzMzMzMzMVQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAZmZmZmZmFEDNzMzMzMwUQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMXQJqZmZmZmRVAmpmZmZmZE0CamZmZmZkTQM3MzMzMzBRAzczMzMzMFECamZmZmZkTQDMzMzMzMxNAZmZmZmZmEkAzMzMzMzMTQGZmZmZmZhJAZmZmZmZmFEBmZmZmZmYUQDMzMzMzMxNAAAAAAAAAEkCamZmZmZkRQDMzMzMzMxNAAAAAAAAAFEBmZmZmZmYSQJqZmZmZmRFAZmZmZmZmEEAzMzMzMzMRQDMzMzMzMxFAAAAAAAAAFECamZmZmZkTQAAAAAAAABJAMzMzMzMzEUAzMzMzMzMRQM3MzMzMzBJAmpmZmZmZE0BmZmZmZmYSQAAAAAAAABJAmpmZmZmZEUAAAAAAAAASQDMzMzMzMxNAmpmZmZmZFUDNzMzMzMwUQM3MzMzMzBRAMzMzMzMzE0DNzMzMzMwUQM3MzMzMzBZAAAAAAAAAGEBmZmZmZmYYQAAAAAAAABhAZmZmZmZmGEAAAAAAAAAaQGZmZmZmZhxAAAAAAAAAIUDNzMzMzMwhQAAAAAAAACJAMzMzMzMzIUAzMzMzMzMiQGZmZmZmZiNAZmZmZmZmI0AzMzMzMzMjQAAAAAAAACNAAAAAAAAAI0DNzMzMzMwiQGZmZmZmZiNAMzMzMzMzJUDNzMzMzMwkQGZmZmZmZiRAAAAAAAAAI0CamZmZmZkiQDMzMzMzMyNAZmZmZmZmI0AAAAAAAAAjQGZmZmZmZiJAAAAAAAAAIkCamZmZmZkiQDMzMzMzMyJAmpmZmZmZI0AAAAAAAAAjQGZmZmZmZiJAZmZmZmZmIUBmZmZmZmYhQJqZmZmZmSJAmpmZmZmZIkAzMzMzMzMiQJqZmZmZmSFAAAAAAAAAIUBmZmZmZmYgQJqZmZmZmSBAmpmZmZmZIUBmZmZmZmYhQM3MzMzMzCBAzczMzMzMHkCamZmZmZkfQM3MzMzMzCBAMzMzMzMzIUBmZmZmZmYgQGZmZmZmZh5AAAAAAAAAHkCamZmZmZkdQGZmZmZmZh5AAAAAAAAAIUAzMzMzMzMgQGZmZmZmZh5AZmZmZmZmHEAzMzMzMzMdQDMzMzMzMx9AzczMzMzMHkAzMzMzMzMdQAAAAAAAABxAAAAAAAAAHEBmZmZmZmYaQAAAAAAAABpAAAAAAAAAHEAAAAAAAAAcQDMzMzMzMxtAmpmZmZmZF0BmZmZmZmYYQDMzMzMzMxlAAAAAAAAAGkAzMzMzMzMZQM3MzMzMzBZAAAAAAAAAFkAAAAAAAAAWQJqZmZmZmRVAZmZmZmZmGEAzMzMzMzMXQGZmZmZmZhZAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAZmZmZmZmFkDNzMzMzMwUQJqZmZmZmRNAMzMzMzMzE0AzMzMzMzMTQDMzMzMzMxNAMzMzMzMzFUDNzMzMzMwUQGZmZmZmZhRAzczMzMzMEkAAAAAAAAASQGZmZmZmZhRAZmZmZmZmFEAAAAAAAAAUQDMzMzMzMxNAzczMzMzMEkCamZmZmZkRQAAAAAAAABJA","dtype":"float64","shape":[828]}}},"id":"095fd771-c2ad-4933-a5d2-9136d74b95b4","type":"ColumnDataSource"},{"attributes":{"desired_num_ticks":9},"id":"2ff10032-79d9-4a20-94b4-8aa2557a5d82","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Dec","Nov","Oct","Sep","Aug","Jul","Jun","May","Apr","Mar","Feb","Jan"]},"id":"c67f2e29-09ff-4e83-87d4-0a6e508bcc4e","type":"FactorRange"},{"attributes":{"high":11.4,"low":2.4,"palette":["#75968f","#a5bab7","#c9d9d3","#e2e2e2","#dfccce","#ddb7b1","#cc7878","#933b41","#550b1d"]},"id":"37f2568d-a356-4293-b0df-043a2e0e6283","type":"LinearColorMapper"},{"attributes":{"color_mapper":{"id":"37f2568d-a356-4293-b0df-043a2e0e6283","type":"LinearColorMapper"},"formatter":{"id":"5ab38b82-eea5-46e5-bc9e-25efa836f8e8","type":"PrintfTickFormatter"},"label_standoff":6,"location":[0,0],"major_label_text_font_size":{"value":"5pt"},"plot":{"id":"ea856893-feb7-45d4-ba3d-296405624af8","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ff10032-79d9-4a20-94b4-8aa2557a5d82","type":"BasicTicker"}},"id":"1d7c9009-0d73-40df-b6c6-2ced5c0db836","type":"ColorBar"},{"attributes":{},"id":"04682f8d-a3df-4a70-a2c7-28da8cdd4b34","type":"CategoricalScale"},{"attributes":{"callback":null,"tooltips":[["date","@Month @Year"],["rate","@rate%"]]},"id":"c42f974f-f2e6-4f43-81aa-48cf87cc6cd2","type":"HoverTool"},{"attributes":{"overlay":{"id":"01685b2b-fa50-4876-83d9-83a3d2dffc01","type":"BoxAnnotation"}},"id":"7a224c7d-4df7-48e2-9dca-49131642cfa4","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"095fd771-c2ad-4933-a5d2-9136d74b95b4","type":"ColumnDataSource"},"glyph":{"id":"1f0d545e-799d-4ec0-9e0b-4f6cb81da206","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62f33abf-6b8f-4bf7-bb88-1af26b92467e","type":"Rect"},"selection_glyph":null,"view":{"id":"d4c4c1ac-bf4f-431d-9028-6fc548b5e5ba","type":"CDSView"}},"id":"1935d740-2c2d-4ede-838d-35c4411a199e","type":"GlyphRenderer"},{"attributes":{},"id":"147c84c8-3126-4cf3-9b83-2ca456fc47e3","type":"CategoricalTickFormatter"},{"attributes":{},"id":"56b03ed6-a296-4277-b388-ee842fceb882","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"01685b2b-fa50-4876-83d9-83a3d2dffc01","type":"BoxAnnotation"},{"attributes":{},"id":"b9729ee6-af92-48f6-913a-4cadf203074f","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"Year"},"y":{"field":"Month"}},"id":"62f33abf-6b8f-4bf7-bb88-1af26b92467e","type":"Rect"},{"attributes":{},"id":"31822898-0f8d-4351-aafc-f2adc352462a","type":"CategoricalScale"},{"attributes":{},"id":"e107dcea-b416-465c-b890-d8f1e44de829","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c42f974f-f2e6-4f43-81aa-48cf87cc6cd2","type":"HoverTool"},{"id":"faf7b810-e322-47c4-84a3-c17f9e6f3c38","type":"SaveTool"},{"id":"d0c3c202-d55f-4010-8f6c-e1ecb5870ab9","type":"PanTool"},{"id":"7a224c7d-4df7-48e2-9dca-49131642cfa4","type":"BoxZoomTool"},{"id":"e107dcea-b416-465c-b890-d8f1e44de829","type":"ResetTool"},{"id":"a16130fb-8db5-4098-bcf7-980305dfbee2","type":"WheelZoomTool"}]},"id":"4916d437-14a1-4ee1-8016-ba161b2f3aee","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"ea856893-feb7-45d4-ba3d-296405624af8","subtype":"Figure","type":"Plot"},"ticker":{"id":"94c3bb21-fcc3-48f4-a596-be6da06052f2","type":"CategoricalTicker"}},"id":"42f40098-0b33-4701-a8bb-ea63651c6e24","type":"Grid"},{"attributes":{"plot":null,"text":"US Unemployment (1948 - 2016)"},"id":"6e29088a-508a-456f-a82c-123bf0518ea6","type":"Title"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"147c84c8-3126-4cf3-9b83-2ca456fc47e3","type":"CategoricalTickFormatter"},"major_label_orientation":1.0471975511965976,"major_label_standoff":0,"major_label_text_font_size":{"value":"5pt"},"major_tick_line_color":{"value":null},"plot":{"id":"ea856893-feb7-45d4-ba3d-296405624af8","subtype":"Figure","type":"Plot"},"ticker":{"id":"56b03ed6-a296-4277-b388-ee842fceb882","type":"CategoricalTicker"}},"id":"f09e4566-379e-4563-bf6c-1a59a85b2ca7","type":"CategoricalAxis"},{"attributes":{},"id":"a16130fb-8db5-4098-bcf7-980305dfbee2","type":"WheelZoomTool"}],"root_ids":["ea856893-feb7-45d4-ba3d-296405624af8"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"86ec0ab5-1dfc-4c3e-b901-a2585525be0e","elementid":"2c6d4551-85cd-4d52-acfc-885bd0160923","modelid":"ea856893-feb7-45d4-ba3d-296405624af8"}];
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