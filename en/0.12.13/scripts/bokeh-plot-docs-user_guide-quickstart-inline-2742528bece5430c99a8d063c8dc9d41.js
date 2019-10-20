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
      };var element = document.getElementById("2d45cd8b-0724-44af-810b-e3e5b7553d81");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d45cd8b-0724-44af-810b-e3e5b7553d81' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"09cb0550-00ad-483a-927f-33851cc3729a":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"015654d9-f020-42fa-a213-9257a3b640b4","type":"PanTool"},{"id":"cbf49388-7079-4362-b4d9-b4268797dbc8","type":"WheelZoomTool"},{"id":"50a0e8d0-0665-4693-972a-58f8eeb75280","type":"BoxZoomTool"},{"id":"6b59c4db-d42a-45d6-aa2d-a3d445eb35f2","type":"SaveTool"},{"id":"cf33616f-1581-4f8f-87db-ef60eff042a7","type":"ResetTool"},{"id":"05b661ba-83da-4a61-9368-90964600d7f4","type":"HelpTool"}]},"id":"02991c37-c8d8-4cf8-acb0-25526e0f695f","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3ee24bd-f4c0-460a-a137-8eb846a3e762","type":"Square"},{"attributes":{"callback":null},"id":"f0a48cdd-8f1f-482c-b4bb-babe258440b3","type":"DataRange1d"},{"attributes":{"source":{"id":"7b12ac50-c8d5-4929-ac39-34b803fd1a69","type":"ColumnDataSource"}},"id":"9e9edaf2-4367-4aea-9f5e-b333ee6a5355","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"9f77c8da-d89f-4b0d-9557-070bad3a1909","subtype":"Figure","type":"Plot"},"ticker":{"id":"34e60ca3-45b9-459c-a15d-5c8687e22b5b","type":"BasicTicker"}},"id":"473d8474-9df1-4162-a2d3-84bf1858152e","type":"Grid"},{"attributes":{},"id":"a32a8dc6-ddc8-461e-b900-33f15ec2b0bd","type":"BasicTicker"},{"attributes":{},"id":"34c02b30-29ce-424f-8a59-13cbd55ef474","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"316bd58b-36db-4a2c-8a9c-f68bf43673a5","type":"Triangle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D+yzYPRkeXxP7ihgYdrgfM/rb0yquzM9D/245G2v8L1P87bFRfwXvY/2iiqbvqe9j/kKcny1oH2P2p9E6r9B/Y/t9rofWQz9T/V4vYmdwf0P338ARYJifI/RdfykkG+8D9ETRXIBF3tPyugTMuSxOg/JsOhHxvG4z8XRefmX+zcP4TfmO5l1dE/2IAW3tnTuT9QVAYbRxi0v26sY4ZobNC/kDyhvhiP278fJw0IIiDjv8rnndrvKei/4klI9jTQ7L9i6ms85X/wvyB3ITG5U/K/nEtETQ/c879kyJx6lxL1v3a2nZlS8vW/jCxGFqd39r9Ikzy8b6D2v7IbDo0EbPa/VCYsdD3b9b+XNIXNbvD0vyX2CM1fr/O/Ewqe7jod8r/hQKSueEDwv7KoVMWJQey/OkhCQL6N57//x2pm7XjivwmD/egKMNq/WFreULgEzr/gjtyf0basv8DQmYTCjb8/YDFTHT090z9zKk7fyUfePwQ64frNauQ/Br4PG51d6T/UmpIn8OftPyz+X62J+/A/JAqwLSe98j/wrAGOlDH0P9+qQLrTUvU/YiQQQD0c9j8qs4V6k4r2Pw41lOsPnPY/TXYpjGpQ9j9uO9/02qj1P8SNeVoTqPQ/wTrZcjVS8z/dcSFwwazxPxnyVbD+fO8/vXE0K8Ye6z+6a09r11DmP/7dFbP8JuE/QJmw0PVs1z8YNwvg51bIP4A3qsMi+oY/tJyl3I19xb9gjLYfHAnWv+4O12hWfOC/dgkSnTaw5b/Eiyd/wIrqv1M5qN/19+6/bg/Nc81y8b9c/veZwCHzv4mZSz7lgfS/nqNH2pCN9b9BMd7bdED2vxjtFmOwl/a/lMBYHdyR9r+wHoMNEC/2vww2BinjcPW/M3KRy2Ra9L+mR1EcEPDyv8K/p5i5N/G/fKrPIO5w7r87P/7sBPXpv0iCivwvDuW/bUUVRECh3788RM3h1qPUv0S1wErRosK/wBtiTTs7oT9AtNpTsC7LP531ygVNz9g/audXAYjQ4T/buikNCPDmP2xZBmcMses//P//////7z8=","dtype":"float64","shape":[100]}}},"id":"c23b2009-aaf1-4502-8570-5ed2f4199d61","type":"ColumnDataSource"},{"attributes":{},"id":"429db23b-688d-4e09-ba42-33c59bb0605f","type":"SaveTool"},{"attributes":{},"id":"19a827e4-9ccb-407d-9e64-eccdaace00f1","type":"HelpTool"},{"attributes":{"callback":null},"id":"0595aee3-77a3-4e32-b535-707e8d860394","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7b12ac50-c8d5-4929-ac39-34b803fd1a69","type":"ColumnDataSource"},"glyph":{"id":"316bd58b-36db-4a2c-8a9c-f68bf43673a5","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4d08b1e5-90ce-4c88-a872-1f4d5baa05df","type":"Triangle"},"selection_glyph":null,"view":{"id":"9e9edaf2-4367-4aea-9f5e-b333ee6a5355","type":"CDSView"}},"id":"6cd1c68c-9aad-4b2d-96f4-9531e7b600c1","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d08b1e5-90ce-4c88-a872-1f4d5baa05df","type":"Triangle"},{"attributes":{"formatter":{"id":"ab1e8f0d-e76f-43cb-b178-0359e2d52243","type":"BasicTickFormatter"},"plot":{"id":"a64094f3-59cc-4d03-84ce-3c427fecd6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d04cbda-d210-4d0e-8478-8785688441e2","type":"BasicTicker"}},"id":"dfad10f3-0f75-4b15-b963-27e63cced9fd","type":"LinearAxis"},{"attributes":{"below":[{"id":"e32fd61d-dfb6-4dc6-a048-a98701534a20","type":"LinearAxis"}],"left":[{"id":"7c837a5e-6f1f-488b-ac92-fb7c6144c87a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e32fd61d-dfb6-4dc6-a048-a98701534a20","type":"LinearAxis"},{"id":"f7298e39-ca36-429a-b782-7bb6ca2178ba","type":"Grid"},{"id":"7c837a5e-6f1f-488b-ac92-fb7c6144c87a","type":"LinearAxis"},{"id":"473d8474-9df1-4162-a2d3-84bf1858152e","type":"Grid"},{"id":"364cba4c-bb73-43c7-a0fa-2f7080370698","type":"BoxAnnotation"},{"id":"6cd1c68c-9aad-4b2d-96f4-9531e7b600c1","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"373c07f7-772c-48f0-8668-24f67b638d4d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f0a48cdd-8f1f-482c-b4bb-babe258440b3","type":"DataRange1d"},"x_scale":{"id":"a4bfbb2e-3c93-4055-b4d9-86873cc98569","type":"LinearScale"},"y_range":{"id":"0595aee3-77a3-4e32-b535-707e8d860394","type":"DataRange1d"},"y_scale":{"id":"51e3e615-c879-4c1d-bf91-4af95de39ef8","type":"LinearScale"}},"id":"9f77c8da-d89f-4b0d-9557-070bad3a1909","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d7d95365-ce59-4f7a-befa-ab4f5178c50a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e154d1b-f059-412c-84ef-c5e123f410fd","type":"BasicTicker"}},"id":"c93738f9-35b5-49da-b7ae-158b91f088b8","type":"Grid"},{"attributes":{"formatter":{"id":"92998c82-635e-4cab-8cb1-2e98305e0c96","type":"BasicTickFormatter"},"plot":{"id":"9f77c8da-d89f-4b0d-9557-070bad3a1909","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2336239-7f54-46e8-ad59-a67c69a518e9","type":"BasicTicker"}},"id":"e32fd61d-dfb6-4dc6-a048-a98701534a20","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a0cdaaf5-af9b-46f4-b933-4575dd6348e2","type":"BoxAnnotation"},{"attributes":{},"id":"015654d9-f020-42fa-a213-9257a3b640b4","type":"PanTool"},{"attributes":{},"id":"cbf49388-7079-4362-b4d9-b4268797dbc8","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"3e5d542e-7d04-4551-bc28-e20e243d0443","type":"ColumnDataSource"},"glyph":{"id":"5fff4e30-f188-4a44-a8bd-dfe62bc70ad1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc19651e-bdc2-49a9-af80-da7c8fe286c4","type":"Circle"},"selection_glyph":null,"view":{"id":"5aa10a41-f46a-455b-a1d9-a3d56c693fc4","type":"CDSView"}},"id":"32945c0d-7915-41c1-85c1-fbed434fecd2","type":"GlyphRenderer"},{"attributes":{},"id":"3d04cbda-d210-4d0e-8478-8785688441e2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c23b2009-aaf1-4502-8570-5ed2f4199d61","type":"ColumnDataSource"},"glyph":{"id":"9835cced-2243-485e-a37d-cfb6ffb2f4ac","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3ee24bd-f4c0-460a-a137-8eb846a3e762","type":"Square"},"selection_glyph":null,"view":{"id":"4ab1f73e-946a-45a9-a583-cdad7649554c","type":"CDSView"}},"id":"2570df46-b761-4b65-9bf2-7510e2383d69","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D9o+gYFGL7vPyN/Fo5v+e4/XLHeqjC17T9foQT4kvbrP1YykSHGxOk/tDkVSdQo5z9AE3HJfC3kP1wsoPEH3+A/thLH2SiW2j9bQ2NRvgDTP4xzC34aOsY/cyCwKKhcqD8MyeikuUm0v0/eq9oaN8q/PSGBd67u1L+LyZhelmvcv8/m3JG2ueG/hlh3f5705L9dUsfUNNnnv10cd/2OW+q/wfLvCVdx7L8bLVJC9hHuv0PyRoe4Nu+/XjTx7ufa778HB0As4PvvvwQ9tXAZme+/V1DNmyq07r/ZTwivwlDtv4lZi6GZdOu/JeDa0Vgn6b/aPrV2e3Lmv8y0DJEnYeO/+f//////3783i/Tn4LnYv4yAwi7oDdG/3kQPZF83wr9U+ijPKj+QvxHsuGvkX7w/k1rgSlktzj+GU4hOOdfWP1m1P3WwOd4/AasNgtOP4j+XUJVeWbblPzdQz6Jvg+g/uvBkh4zr6j99NRQyxuTsP/FJcov7Zu4/Juk3u/Vr7z+VSynBge/vP5RLKcGB7+8/Jek3u/Vr7z/vSXKL+2buP381FDLG5Ow/uPBkh4zr6j86UM+ib4PoP5RQlV5ZtuU/BasNgtOP4j9TtT91sDneP45TiE4519Y/hVrgSlktzj807Lhr5F+8P8f6KM8qP5C/zUQPZF83wr+TgMIu6A3Rvy+L9Ofgudi/BwAAAAAA4L/PtAyRJ2Hjv9k+tXZ7cua/I+Da0Vgn6b+NWYuhmXTrv9pPCK/CUO2/V1DNmyq07r8DPbVwGZnvvwgHQCzg+++/XjTx7ufa779E8kaHuDbvvx4tUkL2Ee6/wPLvCVdx7L9dHHf9jlvqv2BSx9Q02ee/gVh3f5705L/M5tyRtrnhv4zJmF6Wa9y/RSGBd67u1L8x3qvaGjfKv/DI6KS5SbS/bSCwKKhcqD9zcwt+GjrGP2ZDY1G+ANM/uRLH2SiW2j9aLKDxB9/gPzsTccl8LeQ/uDkVSdQo5z9WMpEhxsTpP16hBPiS9us/X7HeqjC17T8kfxaOb/nuP2j6BgUYvu8/AAAAAAAA8D8=","dtype":"float64","shape":[100]}}},"id":"7b12ac50-c8d5-4929-ac39-34b803fd1a69","type":"ColumnDataSource"},{"attributes":{},"id":"ab1e8f0d-e76f-43cb-b178-0359e2d52243","type":"BasicTickFormatter"},{"attributes":{},"id":"34e60ca3-45b9-459c-a15d-5c8687e22b5b","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4381a699-fef6-420a-8835-ec460dddf582","type":"BoxAnnotation"},{"attributes":{},"id":"a4ba9285-e477-46c0-a926-a14ef0a48c7e","type":"LinearScale"},{"attributes":{},"id":"c2336239-7f54-46e8-ad59-a67c69a518e9","type":"BasicTicker"},{"attributes":{"source":{"id":"c23b2009-aaf1-4502-8570-5ed2f4199d61","type":"ColumnDataSource"}},"id":"4ab1f73e-946a-45a9-a583-cdad7649554c","type":"CDSView"},{"attributes":{},"id":"e5b86bb4-a54f-4ba3-afa1-8420674d86b9","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc19651e-bdc2-49a9-af80-da7c8fe286c4","type":"Circle"},{"attributes":{"overlay":{"id":"a0cdaaf5-af9b-46f4-b933-4575dd6348e2","type":"BoxAnnotation"}},"id":"50a0e8d0-0665-4693-972a-58f8eeb75280","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"364cba4c-bb73-43c7-a0fa-2f7080370698","type":"BoxAnnotation"}},"id":"807e92bc-16ff-4e85-a5a2-fff4ac206d76","type":"BoxZoomTool"},{"attributes":{},"id":"efb2fa67-90c8-4002-8c28-c5a827f51fd0","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9835cced-2243-485e-a37d-cfb6ffb2f4ac","type":"Square"},{"attributes":{"children":[{"id":"5191bd3f-8279-465a-8777-51e16a56d747","type":"Row"}]},"id":"7059ee5a-0d04-4fe4-97c8-f204afd7c53f","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"a64094f3-59cc-4d03-84ce-3c427fecd6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"51e8bed9-689d-4e63-8ab3-3d3125a953a8","type":"BasicTicker"}},"id":"aaad5a6f-25fd-4585-b198-f7369a7dbcdc","type":"Grid"},{"attributes":{"below":[{"id":"dfad10f3-0f75-4b15-b963-27e63cced9fd","type":"LinearAxis"}],"left":[{"id":"9fae85ba-4b1a-4097-95dd-2b9434219fbc","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"dfad10f3-0f75-4b15-b963-27e63cced9fd","type":"LinearAxis"},{"id":"0e8f450c-c742-4c44-b36a-aa9cee27f5ab","type":"Grid"},{"id":"9fae85ba-4b1a-4097-95dd-2b9434219fbc","type":"LinearAxis"},{"id":"aaad5a6f-25fd-4585-b198-f7369a7dbcdc","type":"Grid"},{"id":"4381a699-fef6-420a-8835-ec460dddf582","type":"BoxAnnotation"},{"id":"2570df46-b761-4b65-9bf2-7510e2383d69","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"283f016b-7ff3-4983-acba-4293d925e283","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f0a48cdd-8f1f-482c-b4bb-babe258440b3","type":"DataRange1d"},"x_scale":{"id":"9b0a9f6a-5f94-48b5-8af8-3ecf37b98eff","type":"LinearScale"},"y_range":{"id":"90728d55-5698-42b0-9920-577d99c0d587","type":"DataRange1d"},"y_scale":{"id":"f78f6d64-5953-4ee0-a8f0-239a9da2e5ce","type":"LinearScale"}},"id":"a64094f3-59cc-4d03-84ce-3c427fecd6ee","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"cfba99ee-55b1-4ebe-85c2-7e558547c5be","type":"LinearAxis"}],"left":[{"id":"8d7ca64f-8c5c-4bf2-8dfc-48a9a5b77e14","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"cfba99ee-55b1-4ebe-85c2-7e558547c5be","type":"LinearAxis"},{"id":"c93738f9-35b5-49da-b7ae-158b91f088b8","type":"Grid"},{"id":"8d7ca64f-8c5c-4bf2-8dfc-48a9a5b77e14","type":"LinearAxis"},{"id":"79cf1233-b8ae-45c2-a829-67665cc65f8a","type":"Grid"},{"id":"a0cdaaf5-af9b-46f4-b933-4575dd6348e2","type":"BoxAnnotation"},{"id":"32945c0d-7915-41c1-85c1-fbed434fecd2","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"02991c37-c8d8-4cf8-acb0-25526e0f695f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f0a48cdd-8f1f-482c-b4bb-babe258440b3","type":"DataRange1d"},"x_scale":{"id":"34c02b30-29ce-424f-8a59-13cbd55ef474","type":"LinearScale"},"y_range":{"id":"0595aee3-77a3-4e32-b535-707e8d860394","type":"DataRange1d"},"y_scale":{"id":"a4ba9285-e477-46c0-a926-a14ef0a48c7e","type":"LinearScale"}},"id":"d7d95365-ce59-4f7a-befa-ab4f5178c50a","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"d7d95365-ce59-4f7a-befa-ab4f5178c50a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a32a8dc6-ddc8-461e-b900-33f15ec2b0bd","type":"BasicTicker"}},"id":"79cf1233-b8ae-45c2-a829-67665cc65f8a","type":"Grid"},{"attributes":{"formatter":{"id":"c5a87fbb-fdc6-41dc-abfe-72d768b8fcbc","type":"BasicTickFormatter"},"plot":{"id":"d7d95365-ce59-4f7a-befa-ab4f5178c50a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e154d1b-f059-412c-84ef-c5e123f410fd","type":"BasicTicker"}},"id":"cfba99ee-55b1-4ebe-85c2-7e558547c5be","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f56a08e7-00dc-4af9-aa66-6930a5052240","type":"PanTool"},{"id":"f8d9151b-eca8-4da1-a096-25942d42853d","type":"WheelZoomTool"},{"id":"22f0b183-d035-4d0c-84e3-bb65eba5a5f6","type":"BoxZoomTool"},{"id":"633137a7-0617-4f01-9a98-f7e6e0f3eb18","type":"SaveTool"},{"id":"d84b9daa-b908-4a34-b01e-959990659df5","type":"ResetTool"},{"id":"19a827e4-9ccb-407d-9e64-eccdaace00f1","type":"HelpTool"}]},"id":"283f016b-7ff3-4983-acba-4293d925e283","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"3e5d542e-7d04-4551-bc28-e20e243d0443","type":"ColumnDataSource"},{"attributes":{},"id":"4b12ebe8-4d71-467b-a3fa-014dbbcba8e5","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9f7f25d2-9026-4b97-8a54-c45b35902bfe","type":"PanTool"},{"id":"4b12ebe8-4d71-467b-a3fa-014dbbcba8e5","type":"WheelZoomTool"},{"id":"807e92bc-16ff-4e85-a5a2-fff4ac206d76","type":"BoxZoomTool"},{"id":"429db23b-688d-4e09-ba42-33c59bb0605f","type":"SaveTool"},{"id":"73146ceb-9c90-4e36-9b10-b760016b09af","type":"ResetTool"},{"id":"224ad7c0-e8a7-4488-b450-6985f05c086a","type":"HelpTool"}]},"id":"373c07f7-772c-48f0-8668-24f67b638d4d","type":"Toolbar"},{"attributes":{},"id":"9b0a9f6a-5f94-48b5-8af8-3ecf37b98eff","type":"LinearScale"},{"attributes":{},"id":"2e154d1b-f059-412c-84ef-c5e123f410fd","type":"BasicTicker"},{"attributes":{},"id":"05b661ba-83da-4a61-9368-90964600d7f4","type":"HelpTool"},{"attributes":{},"id":"92998c82-635e-4cab-8cb1-2e98305e0c96","type":"BasicTickFormatter"},{"attributes":{},"id":"51e3e615-c879-4c1d-bf91-4af95de39ef8","type":"LinearScale"},{"attributes":{},"id":"a4bfbb2e-3c93-4055-b4d9-86873cc98569","type":"LinearScale"},{"attributes":{},"id":"9f7f25d2-9026-4b97-8a54-c45b35902bfe","type":"PanTool"},{"attributes":{},"id":"d84b9daa-b908-4a34-b01e-959990659df5","type":"ResetTool"},{"attributes":{"children":[{"id":"d7d95365-ce59-4f7a-befa-ab4f5178c50a","subtype":"Figure","type":"Plot"},{"id":"9f77c8da-d89f-4b0d-9557-070bad3a1909","subtype":"Figure","type":"Plot"},{"id":"a64094f3-59cc-4d03-84ce-3c427fecd6ee","subtype":"Figure","type":"Plot"}]},"id":"5191bd3f-8279-465a-8777-51e16a56d747","type":"Row"},{"attributes":{},"id":"c5a87fbb-fdc6-41dc-abfe-72d768b8fcbc","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2ec21703-b4c8-40ac-ae3f-83b199a645fa","type":"BasicTickFormatter"},"plot":{"id":"d7d95365-ce59-4f7a-befa-ab4f5178c50a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a32a8dc6-ddc8-461e-b900-33f15ec2b0bd","type":"BasicTicker"}},"id":"8d7ca64f-8c5c-4bf2-8dfc-48a9a5b77e14","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5fff4e30-f188-4a44-a8bd-dfe62bc70ad1","type":"Circle"},{"attributes":{},"id":"f56a08e7-00dc-4af9-aa66-6930a5052240","type":"PanTool"},{"attributes":{"overlay":{"id":"4381a699-fef6-420a-8835-ec460dddf582","type":"BoxAnnotation"}},"id":"22f0b183-d035-4d0c-84e3-bb65eba5a5f6","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a64094f3-59cc-4d03-84ce-3c427fecd6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d04cbda-d210-4d0e-8478-8785688441e2","type":"BasicTicker"}},"id":"0e8f450c-c742-4c44-b36a-aa9cee27f5ab","type":"Grid"},{"attributes":{"formatter":{"id":"e5b86bb4-a54f-4ba3-afa1-8420674d86b9","type":"BasicTickFormatter"},"plot":{"id":"9f77c8da-d89f-4b0d-9557-070bad3a1909","subtype":"Figure","type":"Plot"},"ticker":{"id":"34e60ca3-45b9-459c-a15d-5c8687e22b5b","type":"BasicTicker"}},"id":"7c837a5e-6f1f-488b-ac92-fb7c6144c87a","type":"LinearAxis"},{"attributes":{"source":{"id":"3e5d542e-7d04-4551-bc28-e20e243d0443","type":"ColumnDataSource"}},"id":"5aa10a41-f46a-455b-a1d9-a3d56c693fc4","type":"CDSView"},{"attributes":{},"id":"51e8bed9-689d-4e63-8ab3-3d3125a953a8","type":"BasicTicker"},{"attributes":{},"id":"224ad7c0-e8a7-4488-b450-6985f05c086a","type":"HelpTool"},{"attributes":{"formatter":{"id":"efb2fa67-90c8-4002-8c28-c5a827f51fd0","type":"BasicTickFormatter"},"plot":{"id":"a64094f3-59cc-4d03-84ce-3c427fecd6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"51e8bed9-689d-4e63-8ab3-3d3125a953a8","type":"BasicTicker"}},"id":"9fae85ba-4b1a-4097-95dd-2b9434219fbc","type":"LinearAxis"},{"attributes":{"plot":{"id":"9f77c8da-d89f-4b0d-9557-070bad3a1909","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2336239-7f54-46e8-ad59-a67c69a518e9","type":"BasicTicker"}},"id":"f7298e39-ca36-429a-b782-7bb6ca2178ba","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"364cba4c-bb73-43c7-a0fa-2f7080370698","type":"BoxAnnotation"},{"attributes":{},"id":"f78f6d64-5953-4ee0-a8f0-239a9da2e5ce","type":"LinearScale"},{"attributes":{},"id":"f8d9151b-eca8-4da1-a096-25942d42853d","type":"WheelZoomTool"},{"attributes":{},"id":"73146ceb-9c90-4e36-9b10-b760016b09af","type":"ResetTool"},{"attributes":{},"id":"633137a7-0617-4f01-9a98-f7e6e0f3eb18","type":"SaveTool"},{"attributes":{},"id":"cf33616f-1581-4f8f-87db-ef60eff042a7","type":"ResetTool"},{"attributes":{"callback":null},"id":"90728d55-5698-42b0-9920-577d99c0d587","type":"DataRange1d"},{"attributes":{},"id":"2ec21703-b4c8-40ac-ae3f-83b199a645fa","type":"BasicTickFormatter"},{"attributes":{},"id":"6b59c4db-d42a-45d6-aa2d-a3d445eb35f2","type":"SaveTool"}],"root_ids":["7059ee5a-0d04-4fe4-97c8-f204afd7c53f"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"09cb0550-00ad-483a-927f-33851cc3729a","elementid":"2d45cd8b-0724-44af-810b-e3e5b7553d81","modelid":"7059ee5a-0d04-4fe4-97c8-f204afd7c53f"}];
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