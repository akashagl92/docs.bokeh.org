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
      };var element = document.getElementById("47ea39ad-c074-4eef-b035-d3cf690b02f0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47ea39ad-c074-4eef-b035-d3cf690b02f0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"109dcc30-106c-45c0-b9c1-484212cb16f6":{"roots":{"references":[{"attributes":{},"id":"97216f9e-d015-456a-ade0-31ab682fcc0d","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"478b954e-feed-476a-91d1-8012e4c08a0c","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"edb30756-0466-438d-9ac6-9982074bc7da","type":"BoxSelectTool"},{"id":"25dd53d9-8869-44eb-8376-eafee9e79e46","type":"LassoSelectTool"},{"id":"c232b6fb-f416-4842-9a4b-8af628d98bd3","type":"HelpTool"}]},"id":"abe619de-19af-4ee6-b966-396319a72ff8","type":"Toolbar"},{"attributes":{"below":[{"id":"1ec3a620-1e39-4549-a0a7-121b8401620b","type":"LinearAxis"}],"left":[{"id":"f8af0cf3-2c3a-430e-ac3a-92a606ac4575","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1ec3a620-1e39-4549-a0a7-121b8401620b","type":"LinearAxis"},{"id":"58a02fa6-b04a-4cf2-80c8-6bd92069946e","type":"Grid"},{"id":"f8af0cf3-2c3a-430e-ac3a-92a606ac4575","type":"LinearAxis"},{"id":"d682a08f-78fc-4fec-88f3-985427d5ee54","type":"Grid"},{"id":"62d95e47-8600-40a4-bd54-7f91d92e287b","type":"BoxAnnotation"},{"id":"968efe7f-0863-4226-9c40-e917472ac097","type":"PolyAnnotation"},{"id":"3a7bc144-dd68-490b-98f0-2a678bf989c2","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"abe619de-19af-4ee6-b966-396319a72ff8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"765811ad-b9e8-41b0-900d-43e490757917","type":"DataRange1d"},"x_scale":{"id":"97216f9e-d015-456a-ade0-31ab682fcc0d","type":"LinearScale"},"y_range":{"id":"5b7ccb48-c1f2-4a84-870d-1de389e73030","type":"DataRange1d"},"y_scale":{"id":"d66ec6ea-8a51-4817-856f-49ce1a0e6b4a","type":"LinearScale"}},"id":"cfcb6b57-b3e3-4686-9ba9-d57cfe2eb06e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2401a2da-cba2-42f4-9234-82af52d21eee","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a9c7ebcd-b516-4c1a-98d9-ce2b7a741672","type":"ColumnDataSource"},"glyph":{"id":"4235b5dc-2043-4c7d-979c-a4dc63470a76","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc6689ca-c752-4227-bf2e-27cb14eabe4b","type":"Circle"},"selection_glyph":null,"view":{"id":"27d67711-cc05-4b82-86cb-828532801ae6","type":"CDSView"}},"id":"1d1ff712-a70b-4bd8-87a8-4f8cd5482e9a","type":"GlyphRenderer"},{"attributes":{},"id":"d66ec6ea-8a51-4817-856f-49ce1a0e6b4a","type":"LinearScale"},{"attributes":{"callback":null},"id":"5b7ccb48-c1f2-4a84-870d-1de389e73030","type":"DataRange1d"},{"attributes":{},"id":"441642fc-f37d-4948-b4f4-49599acd1b46","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"765811ad-b9e8-41b0-900d-43e490757917","type":"DataRange1d"},{"attributes":{"formatter":{"id":"441642fc-f37d-4948-b4f4-49599acd1b46","type":"BasicTickFormatter"},"plot":{"id":"cfcb6b57-b3e3-4686-9ba9-d57cfe2eb06e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b129d13a-90a6-428c-8ba4-02673cc60f00","type":"BasicTicker"}},"id":"f8af0cf3-2c3a-430e-ac3a-92a606ac4575","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"cfcb6b57-b3e3-4686-9ba9-d57cfe2eb06e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b129d13a-90a6-428c-8ba4-02673cc60f00","type":"BasicTicker"}},"id":"d682a08f-78fc-4fec-88f3-985427d5ee54","type":"Grid"},{"attributes":{},"id":"b129d13a-90a6-428c-8ba4-02673cc60f00","type":"BasicTicker"},{"attributes":{"plot":{"id":"cfcb6b57-b3e3-4686-9ba9-d57cfe2eb06e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce48bab0-0ad7-4877-8e70-a28dd1404490","type":"BasicTicker"}},"id":"58a02fa6-b04a-4cf2-80c8-6bd92069946e","type":"Grid"},{"attributes":{},"id":"6f875b79-18f7-4cb5-bd80-8c7d303b9633","type":"BasicTickFormatter"},{"attributes":{},"id":"ce48bab0-0ad7-4877-8e70-a28dd1404490","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"a9c7ebcd-b516-4c1a-98d9-ce2b7a741672","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"75952623-9354-4f3a-8aa5-7374b2a158a5","type":"BasicTickFormatter"},"plot":{"id":"cfcb6b57-b3e3-4686-9ba9-d57cfe2eb06e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce48bab0-0ad7-4877-8e70-a28dd1404490","type":"BasicTicker"}},"id":"1ec3a620-1e39-4549-a0a7-121b8401620b","type":"LinearAxis"},{"attributes":{"below":[{"id":"82931e75-b950-4fe2-aa07-e22a21626149","type":"LinearAxis"}],"left":[{"id":"48680517-6437-4b77-8dcb-386c8d5a4c13","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"82931e75-b950-4fe2-aa07-e22a21626149","type":"LinearAxis"},{"id":"5783d5c7-9afa-488f-a49c-a3bcdf90775e","type":"Grid"},{"id":"48680517-6437-4b77-8dcb-386c8d5a4c13","type":"LinearAxis"},{"id":"a70a9dcd-6e8b-4bdc-a5b4-ae3802c6d286","type":"Grid"},{"id":"3c3f8255-aecb-4ca3-a886-a46a24c4c232","type":"BoxAnnotation"},{"id":"478b954e-feed-476a-91d1-8012e4c08a0c","type":"PolyAnnotation"},{"id":"1d1ff712-a70b-4bd8-87a8-4f8cd5482e9a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"0ff44377-d96d-4194-8c34-714a5dc1dbc9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d0cf26af-d193-410a-a15e-92547a2f0736","type":"DataRange1d"},"x_scale":{"id":"bd5d0582-3c27-4819-ab2b-a84968dba735","type":"LinearScale"},"y_range":{"id":"f2d2123d-6fd9-46bb-a94d-a06102bbbe88","type":"DataRange1d"},"y_scale":{"id":"9dd5bfb7-c97e-40ea-a354-fcd6a1ec87b9","type":"LinearScale"}},"id":"6723f101-173c-44d7-9a2b-687b3a5c5713","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"62d95e47-8600-40a4-bd54-7f91d92e287b","type":"BoxAnnotation"},"renderers":[{"id":"3a7bc144-dd68-490b-98f0-2a678bf989c2","type":"GlyphRenderer"}]},"id":"edb30756-0466-438d-9ac6-9982074bc7da","type":"BoxSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"493bf6ce-889f-4996-bcd6-de1b12a6b3a8","type":"BoxSelectTool"},{"id":"6749fcb9-6426-4a65-beef-8003e7a0e0f7","type":"LassoSelectTool"},{"id":"62ba575b-ce65-4e85-8ba1-922ffb6627c6","type":"HelpTool"}]},"id":"0ff44377-d96d-4194-8c34-714a5dc1dbc9","type":"Toolbar"},{"attributes":{"children":[{"id":"34a35156-adf5-4e84-b0a4-bf8cd6f883a6","type":"Row"}]},"id":"566eb3d7-e527-43f7-930e-9f5fc6c7d857","type":"Column"},{"attributes":{"callback":null},"id":"d0cf26af-d193-410a-a15e-92547a2f0736","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"8d5408b4-e029-485d-a1a2-d6908ed0050e","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3c3f8255-aecb-4ca3-a886-a46a24c4c232","type":"BoxAnnotation"},{"attributes":{},"id":"75952623-9354-4f3a-8aa5-7374b2a158a5","type":"BasicTickFormatter"},{"attributes":{},"id":"bd5d0582-3c27-4819-ab2b-a84968dba735","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"968efe7f-0863-4226-9c40-e917472ac097","type":"PolyAnnotation"}},"id":"25dd53d9-8869-44eb-8376-eafee9e79e46","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"f2d2123d-6fd9-46bb-a94d-a06102bbbe88","type":"DataRange1d"},{"attributes":{},"id":"c232b6fb-f416-4842-9a4b-8af628d98bd3","type":"HelpTool"},{"attributes":{},"id":"9dd5bfb7-c97e-40ea-a354-fcd6a1ec87b9","type":"LinearScale"},{"attributes":{"tools":[{"id":"493bf6ce-889f-4996-bcd6-de1b12a6b3a8","type":"BoxSelectTool"},{"id":"6749fcb9-6426-4a65-beef-8003e7a0e0f7","type":"LassoSelectTool"},{"id":"62ba575b-ce65-4e85-8ba1-922ffb6627c6","type":"HelpTool"},{"id":"edb30756-0466-438d-9ac6-9982074bc7da","type":"BoxSelectTool"},{"id":"25dd53d9-8869-44eb-8376-eafee9e79e46","type":"LassoSelectTool"},{"id":"c232b6fb-f416-4842-9a4b-8af628d98bd3","type":"HelpTool"}]},"id":"b4a2cb26-bad0-4dcd-99a8-4d2eb8c87389","type":"ProxyToolbar"},{"attributes":{"plot":{"id":"6723f101-173c-44d7-9a2b-687b3a5c5713","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbd43df8-35d7-49f9-a3bb-127a5e6e418e","type":"BasicTicker"}},"id":"5783d5c7-9afa-488f-a49c-a3bcdf90775e","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"188d671c-6071-483b-90da-93a7d38f8746","type":"Circle"},{"attributes":{},"id":"bbd43df8-35d7-49f9-a3bb-127a5e6e418e","type":"BasicTicker"},{"attributes":{"source":{"id":"a9c7ebcd-b516-4c1a-98d9-ce2b7a741672","type":"ColumnDataSource"}},"id":"9c850d1d-dfdf-4e5a-8107-c8b180e71291","type":"CDSView"},{"attributes":{"formatter":{"id":"2401a2da-cba2-42f4-9234-82af52d21eee","type":"BasicTickFormatter"},"plot":{"id":"6723f101-173c-44d7-9a2b-687b3a5c5713","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbd43df8-35d7-49f9-a3bb-127a5e6e418e","type":"BasicTicker"}},"id":"82931e75-b950-4fe2-aa07-e22a21626149","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"968efe7f-0863-4226-9c40-e917472ac097","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"6f875b79-18f7-4cb5-bd80-8c7d303b9633","type":"BasicTickFormatter"},"plot":{"id":"6723f101-173c-44d7-9a2b-687b3a5c5713","subtype":"Figure","type":"Plot"},"ticker":{"id":"05593ccd-00f3-41d8-9a2e-9804b7f79ce7","type":"BasicTicker"}},"id":"48680517-6437-4b77-8dcb-386c8d5a4c13","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a9c7ebcd-b516-4c1a-98d9-ce2b7a741672","type":"ColumnDataSource"},"glyph":{"id":"188d671c-6071-483b-90da-93a7d38f8746","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8d5408b4-e029-485d-a1a2-d6908ed0050e","type":"Circle"},"selection_glyph":null,"view":{"id":"9c850d1d-dfdf-4e5a-8107-c8b180e71291","type":"CDSView"}},"id":"3a7bc144-dd68-490b-98f0-2a678bf989c2","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"4235b5dc-2043-4c7d-979c-a4dc63470a76","type":"Circle"},{"attributes":{"children":[{"id":"a8e2a817-5405-44c5-a0a3-d00d8d92a54a","type":"ToolbarBox"},{"id":"566eb3d7-e527-43f7-930e-9f5fc6c7d857","type":"Column"}]},"id":"8d01ca61-831f-4be7-abb9-6e599d55f364","type":"Column"},{"attributes":{},"id":"05593ccd-00f3-41d8-9a2e-9804b7f79ce7","type":"BasicTicker"},{"attributes":{},"id":"62ba575b-ce65-4e85-8ba1-922ffb6627c6","type":"HelpTool"},{"attributes":{"toolbar":{"id":"b4a2cb26-bad0-4dcd-99a8-4d2eb8c87389","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"a8e2a817-5405-44c5-a0a3-d00d8d92a54a","type":"ToolbarBox"},{"attributes":{"dimension":1,"plot":{"id":"6723f101-173c-44d7-9a2b-687b3a5c5713","subtype":"Figure","type":"Plot"},"ticker":{"id":"05593ccd-00f3-41d8-9a2e-9804b7f79ce7","type":"BasicTicker"}},"id":"a70a9dcd-6e8b-4bdc-a5b4-ae3802c6d286","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"478b954e-feed-476a-91d1-8012e4c08a0c","type":"PolyAnnotation"}},"id":"6749fcb9-6426-4a65-beef-8003e7a0e0f7","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"6723f101-173c-44d7-9a2b-687b3a5c5713","subtype":"Figure","type":"Plot"},{"id":"cfcb6b57-b3e3-4686-9ba9-d57cfe2eb06e","subtype":"Figure","type":"Plot"}]},"id":"34a35156-adf5-4e84-b0a4-bf8cd6f883a6","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"62d95e47-8600-40a4-bd54-7f91d92e287b","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"3c3f8255-aecb-4ca3-a886-a46a24c4c232","type":"BoxAnnotation"},"renderers":[{"id":"1d1ff712-a70b-4bd8-87a8-4f8cd5482e9a","type":"GlyphRenderer"}]},"id":"493bf6ce-889f-4996-bcd6-de1b12a6b3a8","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"fc6689ca-c752-4227-bf2e-27cb14eabe4b","type":"Circle"},{"attributes":{"source":{"id":"a9c7ebcd-b516-4c1a-98d9-ce2b7a741672","type":"ColumnDataSource"}},"id":"27d67711-cc05-4b82-86cb-828532801ae6","type":"CDSView"}],"root_ids":["8d01ca61-831f-4be7-abb9-6e599d55f364"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"109dcc30-106c-45c0-b9c1-484212cb16f6","elementid":"47ea39ad-c074-4eef-b035-d3cf690b02f0","modelid":"8d01ca61-831f-4be7-abb9-6e599d55f364"}];
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