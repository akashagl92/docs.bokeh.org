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
      };var element = document.getElementById("03d14958-e7d5-48c5-abb0-eda3c124c994");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '03d14958-e7d5-48c5-abb0-eda3c124c994' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3cfb60fe-3ea8-4aeb-9532-7d938532f47e":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":"white"},"plot":{"id":"a9a878bd-1689-4930-aa38-3500f04688b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0582521a-1aa0-48c9-b2ce-3b5f33c87bcc","type":"BasicTicker"}},"id":"4b050541-4282-4a17-a287-7cc74dab9e91","type":"Grid"},{"attributes":{},"id":"f62f92ea-81a5-4081-be1d-35056316136e","type":"LinearScale"},{"attributes":{"source":{"id":"fdfdd403-e382-45ae-9509-2c29b1825f07","type":"ColumnDataSource"}},"id":"c80ea92c-3abc-467c-9498-05315cbeac02","type":"CDSView"},{"attributes":{"data_source":{"id":"fdfdd403-e382-45ae-9509-2c29b1825f07","type":"ColumnDataSource"},"glyph":{"id":"50cd13be-a447-447d-a887-ab1dad95fd41","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"526db764-8d6f-4d1f-876a-1b8e25192636","type":"Circle"},"selection_glyph":null,"view":{"id":"c80ea92c-3abc-467c-9498-05315cbeac02","type":"CDSView"}},"id":"0187a921-9f3d-4a11-904d-ca53abf0e439","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"melting_colors"},"size":{"units":"screen","value":12},"x":{"field":"atomic mass"},"y":{"field":"density"}},"id":"50cd13be-a447-447d-a887-ab1dad95fd41","type":"Circle"},{"attributes":{"callback":null},"id":"63ba819b-dd72-4ce5-86da-4ebb8c53a194","type":"DataRange1d"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"plot":{"id":"a9a878bd-1689-4930-aa38-3500f04688b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"25332695-7155-4cfd-82fc-60f1c8994761","type":"BasicTicker"}},"id":"7150a56e-6506-43b3-b231-2f4181905c2e","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0ebc3672-3bf0-4ea3-8830-fe222537a54a","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"0ebc3672-3bf0-4ea3-8830-fe222537a54a","type":"BoxAnnotation"}},"id":"0e89b7eb-caab-4ad1-8971-d050361d8328","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["atomic number","symbol","name","atomic mass","CPK","electronic configuration","electronegativity","atomic radius","ion radius","van der Waals radius","IE-1","EA","standard state","bonding type","melting point","boiling point","density","metal","year discovered","group","period","melting_colors","index"],"data":{"CPK":["#FFFFFF","#CC80FF","#C2FF00","#FFB5B5","#909090","#3050F8","#FF0D0D","#90E050","#B3E3F5","#AB5CF2","#8AFF00","#BFA6A6","#F0C8A0","#FF8000","#FFFF30","#1FF01F","#80D1E3","#8F40D4","#3DFF00","#E6E6E6","#BFC2C7","#A6A6AB","#8A99C7","#9C7AC7","#E06633","#F090A0","#50D050","#C88033","#7D80B0","#C28F8F","#668F8F","#BD80E3","#FFA100","#A62929","#5CB8D1","#702EB0","#00FF00","#94FFFF","#94E0E0","#73C2C9","#54B5B5","#3B9E9E","#248F8F","#0A7D8C","#006985","#C0C0C0","#FFD98F","#A67573","#668080","#9E63B5","#D47A00","#940094","#429EB0","#57178F","#00C900","#70D4FF","#FFFFC7","#D9FFC7","#C7FFC7","#A3FFC7","#8FFFC7","#61FFC7","#45FFC7","#30FFC7","#1FFFC7","#00FF9C","#00E675","#00D452","#00BF38","#00AB24","#4DC2FF","#4DA6FF","#2194D6","#267DAB","#266696","#175487","#D0D0E0","#FFD123","#B8B8D0","#A6544D","#575961"],"EA":{"__ndarray__":"AAAAAABAUsAAAAAAAABOwAAAAAAAAAAAAAAAAAAAO8AAAAAAAEBjwAAAAAAAABzAAAAAAACgYcAAAAAAAIB0wAAAAAAAAAAAAAAAAACASsAAAAAAAAAAAAAAAAAAgEXAAAAAAADAYMAAAAAAAABSwAAAAAAAAGnAAAAAAADQdcAAAAAAAAAAAAAAAAAAAEjAAAAAAAAAAMAAAAAAAAAywAAAAAAAACDAAAAAAACAScAAAAAAAABQwAAAAAAAAAAAAAAAAAAAMMAAAAAAAABQwAAAAAAAAFzAAAAAAACAXcAAAAAAAAAAAAAAAAAAAD3AAAAAAADAXcAAAAAAAIBTwAAAAAAAYGjAAAAAAABQdMAAAAAAAAAAAAAAAAAAgEfAAAAAAAAAFMAAAAAAAAA+wAAAAAAAgETAAAAAAACAVcAAAAAAAABSwAAAAAAAgErAAAAAAABAWcAAAAAAAIBbwAAAAAAAAEvAAAAAAACAX8AAAAAAAAAAAAAAAAAAAD3AAAAAAADAWsAAAAAAAMBZwAAAAAAAwGfAAAAAAABwcsAAAAAAAAAAAAAAAAAAAEfAAAAAAAAALMAAAAAAAABIwAAAAAAAAEnAAAAAAAAAScAAAAAAAABJwAAAAAAAAEnAAAAAAAAAScAAAAAAAABJwAAAAAAAAEnAAAAAAAAAScAAAAAAAABJwAAAAAAAAEnAAAAAAAAAScAAAAAAAABJwAAAAAAAAEnAAAAAAAAAScAAAAAAAAAAAAAAAAAAAD/AAAAAAADAU8AAAAAAAAAuwAAAAAAAgFrAAAAAAADgYsAAAAAAAKBpwAAAAAAA4GvAAAAAAAAAAAAAAAAAAAAzwAAAAAAAgEHA","dtype":"float64","shape":[81]},"IE-1":{"__ndarray__":"AAAAAACAlEAAAAAAAECAQAAAAAAAIIxAAAAAAAAIiUAAAAAAAPyQQAAAAAAA6JVAAAAAAACIlEAAAAAAAESaQAAAAAAAQqBAAAAAAAAAf0AAAAAAABCHQAAAAAAAEIJAAAAAAACYiEAAAAAAAKCPQAAAAAAAQI9AAAAAAACMk0AAAAAAAMSXQAAAAAAAMHpAAAAAAABwgkAAAAAAAMiDQAAAAAAAmIRAAAAAAABYhEAAAAAAAGiEQAAAAAAAaIZAAAAAAADYh0AAAAAAAMCHQAAAAAAACIdAAAAAAABQh0AAAAAAAFCMQAAAAAAAGIJAAAAAAADQh0AAAAAAAJiNQAAAAAAAaI1AAAAAAADQkUAAAAAAAByVQAAAAAAAMHlAAAAAAAAwgUAAAAAAAMCCQAAAAAAAAIRAAAAAAABghEAAAAAAAGCFQAAAAAAA8IVAAAAAAAAwhkAAAAAAAICGQAAAAAAAIIlAAAAAAADYhkAAAAAAACCLQAAAAAAAcIFAAAAAAAAohkAAAAAAABCKQAAAAAAAKItAAAAAAACAj0AAAAAAAEiSQAAAAAAAgHdAAAAAAABwf0AAAAAAANCAQAAAAAAAsIBAAAAAAAB4gEAAAAAAAKiAQAAAAAAA4IBAAAAAAAAIgUAAAAAAABiBQAAAAAAAiIJAAAAAAACwgUAAAAAAAOiBQAAAAAAAKIJAAAAAAABogkAAAAAAAKiCQAAAAAAA2IJAAAAAAABggEAAAAAAAJiEQAAAAAAAyIdAAAAAAAAQiEAAAAAAAMCHQAAAAAAAQIpAAAAAAACAi0AAAAAAADCLQAAAAAAA0ItAAAAAAAB4j0AAAAAAAGiCQAAAAAAAYIZA","dtype":"float64","shape":[81]},"atomic mass":{"__ndarray__":"qkiFsYUg8D/dJAaBlcMbQCIzF7g8BiJArBxaZDufJUBoImx4egUoQDPEsS5uAyxAqz5XW7H/L0DEOCRal/8yQFkXt9EALjRAey8AhWH9NkCuR+F6FE44QPrCGh1G+zpA2c73U+MVPEBqFmh3SPk+QLgehetRCEBARIts5/u5QUDTTWIQWPlDQDGZKhiVjENARIts5/sJREBO7QxTW3pGQOXQItv57kdAjZduEoN4SUDWxW00gP9JQJKWytsReEtAXI/C9SjsS0A25QrvcndNQPCFyVTBWE1A2c73U+PFT0C4HoXrUVhQQIPAyqFFblFAKVyPwvUoUkCX/5B++7pSQD0K16NwvVNAYOXQItv5U0BQjZduEvNUQGdEaW/wXVVASOF6FK7nVUA5RUdy+TlWQHWTGARWzlZA529CIQI6V0A9CtejcP1XQAAAAAAAgFhAFK5H4XpEWUDLoUW287lZQHsUrkfhmlpAyJi7lpD3WkD8qfHSTRpcQDEIrBxatFxAPQrXo3CtXUBxPQrXo3BeQGZmZmZm5l9ApI0j1uK5X0BMN4lBYGlgQDxTQ3b5nGBAWDm0yHYqYUBLsDic+VxhQMHKoUW2g2FA3EYDeAudYUA5tMh2vgdiQAAAAAAAIGJA7FG4HoXLYkACK4cW2f5iQAAAAAAAqGNAUWuad5zdY0AAAAAAAFBkQBLaci7FnWRAPzVeuknoZEAUs14M5R1lQH0/NV66oWVAu7iNBvDeZUBI4XoUrk9mQAoRcAhVnmZAexSuR+H6ZkC0yHa+n0ZnQI/C9Shcx2dAbef7qfEGaECmm8QgsGJoQHqKHCLunmhAexSuR+ESaUDRkVz+Q4xpQGZmZmZm5mlA","dtype":"float64","shape":[81]},"atomic number":[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"atomic radius":{"__ndarray__":"AAAAAACAQkAAAAAAAMBgQAAAAAAAgFZAAAAAAACAVEAAAAAAAEBTQAAAAAAAwFJAAAAAAABAUkAAAAAAAMBRQAAAAAAAQFFAAAAAAABAY0AAAAAAAEBgQAAAAAAAgF1AAAAAAADAW0AAAAAAAIBaQAAAAAAAgFlAAAAAAADAWEAAAAAAAEBYQAAAAAAAgGhAAAAAAADAZUAAAAAAAABiQAAAAAAAAGFAAAAAAABAX0AAAAAAAMBfQAAAAAAAYGFAAAAAAABAX0AAAAAAAIBfQAAAAAAAQF5AAAAAAABAYUAAAAAAAGBgQAAAAAAAgF9AAAAAAACAXkAAAAAAAMBdQAAAAAAAAF1AAAAAAACAXEAAAAAAAIBbQAAAAAAAYGpAAAAAAAAAaEAAAAAAAEBkQAAAAAAAgGJAAAAAAAAgYUAAAAAAACBiQAAAAAAAgGNAAAAAAACAX0AAAAAAAOBgQAAAAAAAYGBAAAAAAAAgY0AAAAAAAIBiQAAAAAAAAGJAAAAAAACgYUAAAAAAAEBhQAAAAAAA4GBAAAAAAACgYEAAAAAAAEBgQAAAAAAAIGxAAAAAAADAaEAAAAAAACBlQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAAZEAAAAAAAMBiQAAAAAAAQGFAAAAAAABAYkAAAAAAAOBjQAAAAAAAAGBAAAAAAAAgYUAAAAAAAABgQAAAAAAAAGJAAAAAAACgYkAAAAAAAIBiQAAAAAAAYGJA","dtype":"float64","shape":[81]},"boiling point":{"__ndarray__":"AAAAAAAANEAAAAAAADyZQAAAAAAAbqVAAAAAAACxsEAAAAAAAMywQAAAAAAAQFNAAAAAAACAVkAAAAAAAEBVQAAAAAAAADtAAAAAAAAQkkAAAAAAAEyVQAAAAAAA0KVAAAAAAADKqEAAAAAAAFCBQAAAAAAAcIZAAAAAAADgbUAAAAAAAMBVQAAAAAAAIJBAAAAAAAB0m0AAAAAAAD6oQAAAAAAA0KtAAAAAAADArEAAAAAAAACnQAAAAAAAPKJAAAAAAAB8qEAAAAAAAACpQAAAAAAA5KhAAAAAAAAAqUAAAAAAAHCSQAAAAAAAWqNAAAAAAAAqqEAAAAAAALiLQAAAAAAA8I1AAAAAAADAdEAAAAAAAABeQAAAAAAACI5AAAAAAADcmUAAAAAAAESsQAAAAAAASrJAAAAAAACZs0AAAAAAADCzQAAAAAAAurFAAAAAAABHsUAAAAAAAACvQAAAAAAASKlAAAAAAAAGo0AAAAAAAECQQAAAAAAAUqJAAAAAAAB2pkAAAAAAABCdQAAAAAAAtJNAAAAAAACQfEAAAAAAAKBkQAAAAAAAgI1AAAAAAAC+oEAAAAAAADKtQAAAAAAAYqxAAAAAAADWq0AAAAAAAFqqQAAAAAAAkqlAAAAAAAA4oEAAAAAAACCcQAAAAAAAhqtAAAAAAABeq0AAAAAAADCmQAAAAAAAOqdAAAAAAACKqEAAAAAAAF6hQAAAAAAA9JZAAAAAAAC2rEAAAAAAAAyzQAAAAAAAY7ZAAAAAAADEtkAAAAAAAO22QAAAAAAApbRAAAAAAABdskAAAAAAAAKwQAAAAAAAcqhAAAAAAACwg0AAAAAAAEibQAAAAAAAmJ9A","dtype":"float64","shape":[81]},"bonding type":["diatomic","metallic","metallic","covalent network","covalent network","diatomic","diatomic","atomic","atomic","metallic","metallic","metallic","metallic","covalent network","covalent network","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic"],"density":{"__ndarray__":"4yZZPRaRFz9I4XoUrkfhP5qZmZmZmf0/rkfhehSuA0AUrkfhehQCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACtejcD0K7z/Xo3A9Ctf7P5qZmZmZmQVApHA9CtejAkAfhetRuB79P1yPwvUoXP8/AAAAAAAAAAAAAAAAAAAAAIXrUbgehes/zczMzMzM+D/sUbgehesHQArXo3A9ChJAcT0K16NwGECPwvUoXI8cQOF6FK5H4R1AexSuR+F6H0DNzMzMzMwhQFK4HoXr0SFA16NwPQrXIUCPwvUoXI8cQJqZmZmZmRdASOF6FK5HFUDsUbgehesWQEjhehSuRxNA9ihcj8L1CEAAAAAAAAAAAHsUrkfhevg/CtejcD0KBUDhehSuR+ERQArXo3A9ChpApHA9CtcjIUCPwvUoXI8kQAAAAAAAACdAPQrXo3C9KEBmZmZmZuYoQArXo3A9CihAexSuR+H6JEDNzMzMzEwhQD0K16NwPR1APQrXo3A9HUDNzMzMzMwaQPYoXI/C9RhAw/UoXI/CE0B7FK5H4XqEPxSuR+F6FP4/FK5H4XoUDECamZmZmZkYQMP1KFyPwhpAj8L1KFyPGkAK16NwPQocQArXo3A9Ch1AZmZmZmZmHUD2KFyPwvUUQJqZmZmZmR9AcT0K16NwIECamZmZmRkhQJqZmZmZmSFApHA9CtcjIkCkcD0K16MiQEjhehSuRxpArkfhehSuI0AfhetRuJ4qQGZmZmZmpjBAAAAAAABAM0CF61G4HgU1QNejcD0KlzZAj8L1KFyPNkDXo3A9Chc1QM3MzMzMTDNAj8L1KFwPK0AzMzMzM7MnQK5H4XoUriZA","dtype":"float64","shape":[81]},"electronegativity":{"__ndarray__":"mpmZmZmZAUBcj8L1KFzvPx+F61G4Hvk/UrgehetRAEBmZmZmZmYEQFK4HoXrUQhAhetRuB6FC0DXo3A9CtcPQAAAAAAAAPh/w/UoXI/C7T/2KFyPwvX0P8P1KFyPwvk/ZmZmZmZm/j+F61G4HoUBQKRwPQrXowRASOF6FK5HCUAAAAAAAAD4fz0K16NwPeo/AAAAAAAA8D/D9Shcj8L1P6RwPQrXo/g/FK5H4XoU+j+PwvUoXI/6P83MzMzMzPg/SOF6FK5H/T8UrkfhehT+P4/C9Shcj/4/ZmZmZmZm/j9mZmZmZmb6P/YoXI/C9fw/FK5H4XoUAEBxPQrXo3ABQGZmZmZmZgRArkfhehSuB0AAAAAAAAD4fz0K16NwPeo/ZmZmZmZm7j+F61G4HoXzP0jhehSuR/U/mpmZmZmZ+T9I4XoUrkcBQGZmZmZmZv4/mpmZmZmZAUA9CtejcD0CQJqZmZmZmQFA4XoUrkfh/j8K16NwPQr7P3sUrkfhevw/XI/C9Shc/z9mZmZmZmYAQM3MzMzMzABASOF6FK5HBUAAAAAAAAD4f0jhehSuR+k/exSuR+F67D+amZmZmZnxP+xRuB6F6/E/FK5H4XoU8j89CtejcD3yPxSuR+F6FPI/uB6F61G48j8zMzMzMzPzPzMzMzMzM/M/MzMzMzMz8z+F61G4HoXzP65H4XoUrvM/16NwPQrX8z8AAAAAAAD0P5qZmZmZmfE/UrgehetR9D/NzMzMzMz0PwAAAAAAAPg/4XoUrkfhAkBmZmZmZmb+P5qZmZmZmQFAmpmZmZmZAUA9CtejcD0CQFK4HoXrUQRAAAAAAAAAAEBSuB6F61EAQKRwPQrXowJA","dtype":"float64","shape":[81]},"electronic configuration":["1s1","[He] 2s1","[He] 2s2","[He] 2s2 2p1","[He] 2s2 2p2","[He] 2s2 2p3","[He] 2s2 2p4","[He] 2s2 2p5","[He] 2s2 2p6","[Ne] 3s1","[Ne] 3s2","[Ne] 3s2 3p1","[Ne] 3s2 3p2","[Ne] 3s2 3p3","[Ne] 3s2 3p4","[Ne] 3s2 3p5","[Ne] 3s2 3p6","[Ar] 4s1","[Ar] 4s2","[Ar] 3d1 4s2","[Ar] 3d2 4s2","[Ar] 3d3 4s2","[Ar] 3d5 4s1","[Ar] 3d5 4s2","[Ar] 3d6 4s2","[Ar] 3d7 4s2","[Ar] 3d8 4s2","[Ar] 3d10 4s1","[Ar] 3d10 4s2","[Ar] 3d10 4s2 4p1","[Ar] 3d10 4s2 4p2","[Ar] 3d10 4s2 4p3","[Ar] 3d10 4s2 4p4","[Ar] 3d10 4s2 4p5","[Ar] 3d10 4s2 4p6","[Kr] 5s1","[Kr] 5s2","[Kr] 4d1 5s2","[Kr] 4d2 5s2","[Kr] 4d4 5s1","[Kr] 4d5 5s1","[Kr] 4d5 5s2","[Kr] 4d7 5s1","[Kr] 4d8 5s1","[Kr] 4d10","[Kr] 4d10 5s1","[Kr] 4d10 5s2","[Kr] 4d10 5s2 5p1","[Kr] 4d10 5s2 5p2","[Kr] 4d10 5s2 5p3","[Kr] 4d10 5s2 5p4","[Kr] 4d10 5s2 5p5","[Kr] 4d10 5s2 5p6","[Xe] 6s1","[Xe] 6s2","[Xe] 5d1 6s2","[Xe] 4f1 5d1 6s2","[Xe] 4f3 6s2","[Xe] 4f4 6s2","[Xe] 4f5 6s2","[Xe] 4f6 6s2","[Xe] 4f7 6s2","[Xe] 4f7 5d1 6s2","[Xe] 4f9 6s2","[Xe] 4f10 6s2","[Xe] 4f11 6s2","[Xe] 4f12 6s2","[Xe] 4f13 6s2","[Xe] 4f14 6s2","[Xe] 4f14 5d1 6s2","[Xe] 4f14 5d2 6s2","[Xe] 4f14 5d3 6s2","[Xe] 4f14 5d4 6s2","[Xe] 4f14 5d5 6s2","[Xe] 4f14 5d6 6s2","[Xe] 4f14 5d7 6s2","[Xe] 4f14 5d9 6s1","[Xe] 4f14 5d10 6s1","[Xe] 4f14 5d10 6s2","[Xe] 4f14 5d10 6s2 6p1","[Xe] 4f14 5d10 6s2 6p2"],"group":["1","1","2","13","14","15","16","17","18","1","2","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","-","-","-","-","-","-","-","-","-","-","-","-","-","-","3","4","5","6","7","8","9","10","11","12","13","14"],"index":[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],"ion radius":["NaN","76 (+1)","45 (+2)","27 (+3)","16 (+4)","146 (-3)","140 (-2)","133 (-1)","NaN","102 (+1)","72 (+2)","53.5 (+3)","40 (+4)","44 (+3)","184 (-2)","181 (-1)","NaN","138 (+1)","100 (+2)","74.5 (+3)","86 (+2)","79 (+2)","80 (+2*)","67 (+2)","78 (+2*)","74.5 (+2*)","69 (+2)","77 (+1)","74 (+2)","62 (+3)","73 (+2)","58 (+3)","198 (-2)","196 (-1)","NaN","152 (+1)","118 (+2)","90 (+3)","72 (+4)","72 (+3)","69 (+3)","64.5 (+4)","68 (+3)","66.5 (+3)","59 (+1)","115 (+1)","95 (+2)","80 (+3)","112 (+2)","76 (+3)","221 (-2)","220 (-1)","48 (+8)","167 (+1)","135 (+2)","103.2 (+3)","102 (+3)","99 (+3)","129 (+2)","97 (+3)","122 (+2)","117 (+2)","93.8 (+3)","92.3 (+3)","107 (+2)","90.1 (+3)","89 (+3)","103 (+2)","102 (+2)","86.1 (+3)","71 (+4)","72 (+3)","66 (+4)","63 (+4)","63 (+4)","68 (+3)","86 (+2)","137 (+1)","119 (+1)","150 (+1)","119 (+2)"],"melting point":{"__ndarray__":"AAAAAAAALEAAAAAAAGB8QAAAAAAAYJhAAAAAAABYokAAAAAAAN6tQAAAAAAAgE9AAAAAAACAS0AAAAAAAABLQAAAAAAAADlAAAAAAAAwd0AAAAAAANiMQAAAAAAAKI1AAAAAAABcmkAAAAAAANBzQAAAAAAAQHhAAAAAAACAZUAAAAAAAABVQAAAAAAAEHVAAAAAAABskUAAAAAAAFicQAAAAAAAVJ5AAAAAAAAOoUAAAAAAAAihQAAAAAAAvJdAAAAAAABMnEAAAAAAAKCbQAAAAAAAAJtAAAAAAAA4lUAAAAAAAKiFQAAAAAAA8HJAAAAAAADskkAAAAAAAAiRQAAAAAAA4H5AAAAAAACgcEAAAAAAAABdQAAAAAAAgHNAAAAAAABokEAAAAAAABycQAAAAAAAoKBAAAAAAAB8pUAAAAAAAKCmQAAAAAAA/KJAAAAAAABepEAAAAAAAHqhQAAAAAAAkJxAAAAAAABMk0AAAAAAAJCCQAAAAAAA4HpAAAAAAACQf0AAAAAAAECMQAAAAAAAmIZAAAAAAAAweEAAAAAAACBkQAAAAAAA4HJAAAAAAABAj0AAAAAAAKSSQAAAAAAAvJBAAAAAAADQkkAAAAAAADiUQAAAAAAAdJVAAAAAAAAElUAAAAAAAByRQAAAAAAAyJhAAAAAAAB0mUAAAAAAAFSaQAAAAAAATJtAAAAAAACom0AAAAAAAGicQAAAAAAAEJFAAAAAAABAnkAAAAAAAJSjQAAAAAAAtKlAAAAAAADerEAAAAAAAAarQAAAAAAA1KlAAAAAAABmpUAAAAAAAOSfQAAAAAAA5JRAAAAAAABAbUAAAAAAAAiCQAAAAAAAyIJA","dtype":"float64","shape":[81]},"melting_colors":["#053061","#2166ac","#d1e5f0","#fddbc7","#67001f","#053061","#053061","#053061","#053061","#053061","#4393c3","#4393c3","#d1e5f0","#053061","#053061","#053061","#053061","#053061","#4393c3","#d1e5f0","#f7f7f7","#f7f7f7","#f7f7f7","#92c5de","#d1e5f0","#d1e5f0","#d1e5f0","#92c5de","#2166ac","#053061","#92c5de","#4393c3","#2166ac","#053061","#053061","#053061","#4393c3","#d1e5f0","#f7f7f7","#f4a582","#f4a582","#fddbc7","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#2166ac","#2166ac","#2166ac","#4393c3","#2166ac","#053061","#053061","#053061","#4393c3","#92c5de","#4393c3","#92c5de","#92c5de","#92c5de","#92c5de","#4393c3","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#d1e5f0","#4393c3","#f7f7f7","#fddbc7","#d6604d","#b2182b","#b2182b","#d6604d","#f4a582","#f7f7f7","#92c5de","#053061","#2166ac","#2166ac"],"metal":["nonmetal","alkali metal","alkaline earth metal","metalloid","nonmetal","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","metal","metalloid","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metalloid","metalloid","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metalloid","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","lanthanoid","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal"],"name":["Hydrogen","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead"],"period":[1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"standard state":["gas","solid","solid","solid","solid","gas","gas","gas","gas","solid","solid","solid","solid","solid","solid","gas","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","solid","solid"],"symbol":["H","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb"],"van der Waals radius":{"__ndarray__":"AAAAAAAAXkAAAAAAAMBmQAAAAAAAAPh/AAAAAAAA+H8AAAAAAEBlQAAAAAAAYGNAAAAAAAAAY0AAAAAAAGBiQAAAAAAAQGNAAAAAAABgbEAAAAAAAKBlQAAAAAAAAPh/AAAAAABAakAAAAAAAIBmQAAAAAAAgGZAAAAAAADgZUAAAAAAAIBnQAAAAAAAMHFAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAYGRAAAAAAACAYUAAAAAAAGBhQAAAAAAAYGdAAAAAAAAA+H8AAAAAACBnQAAAAAAAwGdAAAAAAAAgZ0AAAAAAAEBpQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAYGRAAAAAAACAZUAAAAAAAMBjQAAAAAAAIGhAAAAAAAAga0AAAAAAAAD4fwAAAAAAwGlAAAAAAADAaEAAAAAAAABrQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAOBlQAAAAAAAwGRAAAAAAABgY0AAAAAAAIBoQAAAAAAAQGlA","dtype":"float64","shape":[81]},"year discovered":["1766","1817","1798","1807","Ancient","1772","1774","1670","1898","1807","1808","Ancient","1854","1669","Ancient","1774","1894","1807","Ancient","1876","1791","1803","Ancient","1774","Ancient","Ancient","1751","Ancient","1746","1875","1886","Ancient","1817","1826","1898","1861","1790","1794","1789","1801","1778","1937","1827","1803","1803","Ancient","1817","1863","Ancient","Ancient","1782","1811","1898","1860","1808","1839","1803","1885","1885","1947","1853","1901","1880","1843","1886","1878","1842","1879","1878","1907","1923","1802","1783","1925","1803","1803","Ancient","Ancient","Ancient","1861","Ancient"]}},"id":"fdfdd403-e382-45ae-9509-2c29b1825f07","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a9a878bd-1689-4930-aa38-3500f04688b7","subtype":"Figure","type":"Plot"},"source":{"id":"fdfdd403-e382-45ae-9509-2c29b1825f07","type":"ColumnDataSource"},"text":{"field":"symbol"},"text_align":"center","text_color":{"value":"#555555"},"text_font_size":{"value":"8pt"},"x":{"field":"atomic mass"},"y":{"field":"density"},"y_offset":{"value":8}},"id":"ce349509-844e-41c7-ba86-33a38a31f41d","type":"LabelSet"},{"attributes":{"callback":null},"id":"b484938b-48e9-4431-be8f-7e1a49e1984b","type":"DataRange1d"},{"attributes":{},"id":"1556120d-30cd-4b8c-a78a-2f4aa339347a","type":"ResetTool"},{"attributes":{},"id":"3bdea73d-5b39-4ff3-80af-8cbb5affafa2","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#dddddd"},"below":[{"id":"da53beaf-b19d-4f74-8058-2a1ba4f17fb9","type":"LinearAxis"}],"left":[{"id":"49ff5161-6afc-44ab-a13f-3ccb517cdc7e","type":"LinearAxis"}],"plot_width":1200,"renderers":[{"id":"da53beaf-b19d-4f74-8058-2a1ba4f17fb9","type":"LinearAxis"},{"id":"4b050541-4282-4a17-a287-7cc74dab9e91","type":"Grid"},{"id":"49ff5161-6afc-44ab-a13f-3ccb517cdc7e","type":"LinearAxis"},{"id":"7150a56e-6506-43b3-b231-2f4181905c2e","type":"Grid"},{"id":"0ebc3672-3bf0-4ea3-8830-fe222537a54a","type":"BoxAnnotation"},{"id":"0187a921-9f3d-4a11-904d-ca53abf0e439","type":"GlyphRenderer"},{"id":"ce349509-844e-41c7-ba86-33a38a31f41d","type":"LabelSet"}],"title":{"id":"b06ed8ce-84fd-4e5b-b135-60106dde87fe","type":"Title"},"toolbar":{"id":"2dc9ed4a-08bb-481c-80bc-fff0da14b12d","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"63ba819b-dd72-4ce5-86da-4ebb8c53a194","type":"DataRange1d"},"x_scale":{"id":"e97c7182-e04a-4bb9-bf9f-c5bd77c6dd5c","type":"LinearScale"},"y_range":{"id":"b484938b-48e9-4431-be8f-7e1a49e1984b","type":"DataRange1d"},"y_scale":{"id":"f62f92ea-81a5-4081-be1d-35056316136e","type":"LinearScale"}},"id":"a9a878bd-1689-4930-aa38-3500f04688b7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Density vs Atomic Weight of Elements (colored by melting point)"},"id":"b06ed8ce-84fd-4e5b-b135-60106dde87fe","type":"Title"},{"attributes":{},"id":"b7da26a4-0b3d-4455-8b85-b3d665466c6f","type":"BasicTickFormatter"},{"attributes":{},"id":"0582521a-1aa0-48c9-b2ce-3b5f33c87bcc","type":"BasicTicker"},{"attributes":{},"id":"25332695-7155-4cfd-82fc-60f1c8994761","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","logo":"grey","tools":[{"id":"5c4df14e-a867-4b86-a1ab-e8efd10acc9d","type":"PanTool"},{"id":"3bdea73d-5b39-4ff3-80af-8cbb5affafa2","type":"WheelZoomTool"},{"id":"0e89b7eb-caab-4ad1-8971-d050361d8328","type":"BoxZoomTool"},{"id":"1556120d-30cd-4b8c-a78a-2f4aa339347a","type":"ResetTool"},{"id":"dfcba586-0710-46d8-9eed-a71d512b97cb","type":"SaveTool"}]},"id":"2dc9ed4a-08bb-481c-80bc-fff0da14b12d","type":"Toolbar"},{"attributes":{},"id":"5c4df14e-a867-4b86-a1ab-e8efd10acc9d","type":"PanTool"},{"attributes":{"axis_label":"atomic weight (amu)","formatter":{"id":"b7da26a4-0b3d-4455-8b85-b3d665466c6f","type":"BasicTickFormatter"},"plot":{"id":"a9a878bd-1689-4930-aa38-3500f04688b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0582521a-1aa0-48c9-b2ce-3b5f33c87bcc","type":"BasicTicker"}},"id":"da53beaf-b19d-4f74-8058-2a1ba4f17fb9","type":"LinearAxis"},{"attributes":{"axis_label":"density (g/cm^3)","formatter":{"id":"5610cfb6-34d6-4bc8-a4f8-b1d29d5a8879","type":"BasicTickFormatter"},"plot":{"id":"a9a878bd-1689-4930-aa38-3500f04688b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"25332695-7155-4cfd-82fc-60f1c8994761","type":"BasicTicker"}},"id":"49ff5161-6afc-44ab-a13f-3ccb517cdc7e","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"atomic mass"},"y":{"field":"density"}},"id":"526db764-8d6f-4d1f-876a-1b8e25192636","type":"Circle"},{"attributes":{},"id":"dfcba586-0710-46d8-9eed-a71d512b97cb","type":"SaveTool"},{"attributes":{},"id":"e97c7182-e04a-4bb9-bf9f-c5bd77c6dd5c","type":"LinearScale"},{"attributes":{},"id":"5610cfb6-34d6-4bc8-a4f8-b1d29d5a8879","type":"BasicTickFormatter"}],"root_ids":["a9a878bd-1689-4930-aa38-3500f04688b7"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"3cfb60fe-3ea8-4aeb-9532-7d938532f47e","elementid":"03d14958-e7d5-48c5-abb0-eda3c124c994","modelid":"a9a878bd-1689-4930-aa38-3500f04688b7"}];
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