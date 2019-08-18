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
      };var element = document.getElementById("fe0bd0e8-c9f3-4133-a17d-0c649327585a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fe0bd0e8-c9f3-4133-a17d-0c649327585a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a01e5040-41f7-453e-8c9b-adffdf04ce45":{"roots":{"references":[{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"6d5cfe3e-bbcc-4a50-afca-df52703379bb","type":"Circle"},{"attributes":{"source":{"id":"7c66ce92-7e0b-4ee4-847d-aaa2024a7deb","type":"ColumnDataSource"}},"id":"05a1c9e0-ca05-4e1e-b791-672053b7fda5","type":"CDSView"},{"attributes":{"data_source":{"id":"794782e2-278a-4c63-9747-b702c7d00f62","type":"ColumnDataSource"},"glyph":{"id":"466f1c7d-b1ec-40f8-a9cb-178ccd195170","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0064f625-0c16-4ba6-b473-16443e3e7b81","type":"Circle"},"selection_glyph":null,"view":{"id":"35e6a937-ef6e-4695-94d7-371c92f55d9f","type":"CDSView"}},"id":"a45f969a-2e6c-4597-91d8-6dc8b3dcd718","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"f137d554-f187-4e65-aa28-bd948c201430","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"82c9c97c-3743-4285-bfae-6bf312a99575","type":"Circle"},{"attributes":{"data_source":{"id":"c1c96fe1-daf7-44fe-849d-ee1feaa5a171","type":"ColumnDataSource"},"glyph":{"id":"b4196345-6dd4-457e-8eed-55a99ad6a8d6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2decea8-a913-4fa1-baeb-9bcef3e34d93","type":"Circle"},"selection_glyph":null,"view":{"id":"06838882-96d3-48ae-9f54-b663747300b2","type":"CDSView"}},"id":"062a282d-b4ef-4cb2-9769-8a72bf30169a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"4d1f7308-0d0b-418e-8772-f3596c959dae","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c1c96fe1-daf7-44fe-849d-ee1feaa5a171","type":"ColumnDataSource"}},"id":"06838882-96d3-48ae-9f54-b663747300b2","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"61f195e8-b5e6-4775-a59e-9a7d44b071c6","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"2b04f8f5-8f3e-4ceb-9d02-d64bb4746805","type":"Circle"},{"attributes":{"source":{"id":"063c5c40-6c4b-4deb-be98-1ed74883abc0","type":"ColumnDataSource"}},"id":"6b1f041e-f28a-4b19-835f-497793acdc08","type":"CDSView"},{"attributes":{"formatter":{"id":"d2e5be43-14ab-42c4-97cd-7b7e954bcb28","type":"BasicTickFormatter"},"plot":{"id":"43edee88-9371-429e-8d44-dc60ee0f03c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b02ddf2-f622-41ae-bbf9-3cde210f2d9c","type":"BasicTicker"}},"id":"9a2de762-db73-44a7-831f-d83e9e9175cd","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["base","lower","upper"],"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]}},"id":"1817dc25-8d5e-44ba-8cbe-583d239487fc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c92ce05d-8e1c-4116-b524-164bd6f616b7","type":"ColumnDataSource"},"glyph":{"id":"91ac3a7b-fd8b-4932-be03-f4aecfd35949","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c5453a7a-2914-450b-a005-2d9a5dea2be1","type":"Circle"},"selection_glyph":null,"view":{"id":"544669d1-4af8-481c-a53e-0e63712c513d","type":"CDSView"}},"id":"928e5b65-96fc-433a-82c1-3fb9c19b1a21","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"9a1ccac8-2b99-47fb-ad0b-46bd7e919a68","type":"Circle"},{"attributes":{},"id":"388ad002-8277-4c55-8925-98b7cf71c2b6","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"794782e2-278a-4c63-9747-b702c7d00f62","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"43edee88-9371-429e-8d44-dc60ee0f03c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b02ddf2-f622-41ae-bbf9-3cde210f2d9c","type":"BasicTicker"}},"id":"c4e8206e-4738-4784-847a-2e4beda4be79","type":"Grid"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"7c66ce92-7e0b-4ee4-847d-aaa2024a7deb","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"b305b213-efbf-49a6-95c6-55e2ac86295e","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"9b5276b9-76fb-498f-a1e3-972a5a256aee","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"415a8225-5183-4565-b9e4-15ce7713ddee","type":"Title"},{"attributes":{"data_source":{"id":"063c5c40-6c4b-4deb-be98-1ed74883abc0","type":"ColumnDataSource"},"glyph":{"id":"9970e4f1-02b9-414b-93dd-46199e92244e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2b04f8f5-8f3e-4ceb-9d02-d64bb4746805","type":"Circle"},"selection_glyph":null,"view":{"id":"6b1f041e-f28a-4b19-835f-497793acdc08","type":"CDSView"}},"id":"dc3d6be9-db34-48c1-9c25-c1db585b89cc","type":"GlyphRenderer"},{"attributes":{},"id":"91145b06-cd36-476e-bd37-f40ee65a81a7","type":"HelpTool"},{"attributes":{"data_source":{"id":"67701780-03c0-4bef-8ffd-03f5e61fc78e","type":"ColumnDataSource"},"glyph":{"id":"2553e651-3528-4a85-af6a-a5b053fef3ef","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f8a2fbe7-ee7e-42a3-b8d8-cd328cce5a6b","type":"Circle"},"selection_glyph":null,"view":{"id":"fdad7877-51ab-4ace-b5b4-4cd1a24e3c4e","type":"CDSView"}},"id":"b286fd52-74bd-4f6b-9f2c-e0caa05771ab","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"063c5c40-6c4b-4deb-be98-1ed74883abc0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4d1f7308-0d0b-418e-8772-f3596c959dae","type":"ColumnDataSource"},"glyph":{"id":"6d5cfe3e-bbcc-4a50-afca-df52703379bb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6f164024-5666-489c-8cf7-dc0198360e84","type":"Circle"},"selection_glyph":null,"view":{"id":"3f52d1e4-6268-4d02-984a-bd12b54c18e0","type":"CDSView"}},"id":"095d9b9f-0b36-4af7-ada0-182057d33283","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"d0c2f62c-1eaa-4349-9df2-0a33793587ed","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"466f1c7d-b1ec-40f8-a9cb-178ccd195170","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"9970e4f1-02b9-414b-93dd-46199e92244e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"c5453a7a-2914-450b-a005-2d9a5dea2be1","type":"Circle"},{"attributes":{"data_source":{"id":"7c66ce92-7e0b-4ee4-847d-aaa2024a7deb","type":"ColumnDataSource"},"glyph":{"id":"d0c2f62c-1eaa-4349-9df2-0a33793587ed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d4214c86-61ee-43e9-b3bd-ffeb932fe0ad","type":"Circle"},"selection_glyph":null,"view":{"id":"05a1c9e0-ca05-4e1e-b791-672053b7fda5","type":"CDSView"}},"id":"2286f6d1-17f7-4081-831d-6e07bb832bc4","type":"GlyphRenderer"},{"attributes":{},"id":"abf72f08-ca04-4525-887b-65481eaecf55","type":"LinearScale"},{"attributes":{"formatter":{"id":"35ca606b-6917-438c-9717-41f4cedbb0c5","type":"BasicTickFormatter"},"plot":{"id":"43edee88-9371-429e-8d44-dc60ee0f03c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"eedd8d74-6d71-4a4e-bb5c-1b58b8ac0e85","type":"BasicTicker"}},"id":"3a9aa31c-4b73-4b72-a838-d8f3b804f6cf","type":"LinearAxis"},{"attributes":{"source":{"id":"4d1f7308-0d0b-418e-8772-f3596c959dae","type":"ColumnDataSource"}},"id":"3f52d1e4-6268-4d02-984a-bd12b54c18e0","type":"CDSView"},{"attributes":{},"id":"35ca606b-6917-438c-9717-41f4cedbb0c5","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b305b213-efbf-49a6-95c6-55e2ac86295e","type":"ColumnDataSource"}},"id":"2bc1cd6a-9080-4931-9bee-e9da0549ac65","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"c92ce05d-8e1c-4116-b524-164bd6f616b7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"68b6363b-446e-47af-9d80-e1b27798ef72","type":"ColumnDataSource"},{"attributes":{},"id":"ba51a52e-3704-450a-a45c-b2b45eea9f0d","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"f8a2fbe7-ee7e-42a3-b8d8-cd328cce5a6b","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ba51a52e-3704-450a-a45c-b2b45eea9f0d","type":"PanTool"},{"id":"089b236f-7e35-4c79-9d0b-29940004b3c4","type":"WheelZoomTool"},{"id":"26880ea6-571e-42f1-8ee4-39281b87a084","type":"BoxZoomTool"},{"id":"8d083dbd-f658-47cc-8ece-d02834c2f4d4","type":"SaveTool"},{"id":"4907e78e-8a22-4bd5-b830-9dc1702c3000","type":"ResetTool"},{"id":"91145b06-cd36-476e-bd37-f40ee65a81a7","type":"HelpTool"}]},"id":"c9f41f57-a67c-480f-9df5-507a86c38fae","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"c1c96fe1-daf7-44fe-849d-ee1feaa5a171","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f3ce5c3f-c849-4ccf-9f5b-89ce105e8d3d","type":"ColumnDataSource"}},"id":"92f01bfc-3a49-466a-8551-2cbe430a5e52","type":"CDSView"},{"attributes":{},"id":"8d083dbd-f658-47cc-8ece-d02834c2f4d4","type":"SaveTool"},{"attributes":{"source":{"id":"67701780-03c0-4bef-8ffd-03f5e61fc78e","type":"ColumnDataSource"}},"id":"fdad7877-51ab-4ace-b5b4-4cd1a24e3c4e","type":"CDSView"},{"attributes":{"data_source":{"id":"68b6363b-446e-47af-9d80-e1b27798ef72","type":"ColumnDataSource"},"glyph":{"id":"9b5276b9-76fb-498f-a1e3-972a5a256aee","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61f195e8-b5e6-4775-a59e-9a7d44b071c6","type":"Circle"},"selection_glyph":null,"view":{"id":"24bcea04-0e92-410c-8995-39d9313b9b13","type":"CDSView"}},"id":"89013681-2fe7-4fe8-99c3-96adf6fee887","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"2553e651-3528-4a85-af6a-a5b053fef3ef","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"f2decea8-a913-4fa1-baeb-9bcef3e34d93","type":"Circle"},{"attributes":{"callback":null},"id":"fabdbefd-fe66-41b2-af68-4b8eb60252dd","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"6f164024-5666-489c-8cf7-dc0198360e84","type":"Circle"},{"attributes":{"data_source":{"id":"b305b213-efbf-49a6-95c6-55e2ac86295e","type":"ColumnDataSource"},"glyph":{"id":"9a1ccac8-2b99-47fb-ad0b-46bd7e919a68","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f137d554-f187-4e65-aa28-bd948c201430","type":"Circle"},"selection_glyph":null,"view":{"id":"2bc1cd6a-9080-4931-9bee-e9da0549ac65","type":"CDSView"}},"id":"506b3189-303d-4744-93ea-2270ce19a0eb","type":"GlyphRenderer"},{"attributes":{"source":{"id":"794782e2-278a-4c63-9747-b702c7d00f62","type":"ColumnDataSource"}},"id":"35e6a937-ef6e-4695-94d7-371c92f55d9f","type":"CDSView"},{"attributes":{"callback":null},"id":"a07e5aea-ed3b-4849-81c2-ac9f5aab60b7","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"67701780-03c0-4bef-8ffd-03f5e61fc78e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"3ef0da02-3f3a-46c6-87f7-6368bc6b90ba","type":"Circle"},{"attributes":{"source":{"id":"68b6363b-446e-47af-9d80-e1b27798ef72","type":"ColumnDataSource"}},"id":"24bcea04-0e92-410c-8995-39d9313b9b13","type":"CDSView"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"8f133498-d0e0-43c7-8e05-694a1beb1aa3","type":"TeeHead"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"91ac3a7b-fd8b-4932-be03-f4aecfd35949","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"d4214c86-61ee-43e9-b3bd-ffeb932fe0ad","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"b293a82e-939e-456d-94d0-388b1a38829b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"0064f625-0c16-4ba6-b473-16443e3e7b81","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"5e7882a1-fcd7-43bc-a4f0-8e69ab236f7c","type":"Circle"},{"attributes":{"overlay":{"id":"b07ad9d3-c186-443f-959b-53ce1d603121","type":"BoxAnnotation"}},"id":"26880ea6-571e-42f1-8ee4-39281b87a084","type":"BoxZoomTool"},{"attributes":{},"id":"d2e5be43-14ab-42c4-97cd-7b7e954bcb28","type":"BasicTickFormatter"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"4d12d711-1045-4eab-a8b5-f997e2f9e1d0","type":"TeeHead"},{"attributes":{},"id":"1b02ddf2-f622-41ae-bbf9-3cde210f2d9c","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"f3ce5c3f-c849-4ccf-9f5b-89ce105e8d3d","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"b4196345-6dd4-457e-8eed-55a99ad6a8d6","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"7791535c-5dae-4ab5-9e3d-eba125d7e22c","type":"ColumnDataSource"},{"attributes":{},"id":"089b236f-7e35-4c79-9d0b-29940004b3c4","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"819f1f90-2e9c-4e15-a359-afaf8fc89f54","type":"Circle"},{"attributes":{"source":{"id":"c92ce05d-8e1c-4116-b524-164bd6f616b7","type":"ColumnDataSource"}},"id":"544669d1-4af8-481c-a53e-0e63712c513d","type":"CDSView"},{"attributes":{"below":[{"id":"9a2de762-db73-44a7-831f-d83e9e9175cd","type":"LinearAxis"}],"left":[{"id":"3a9aa31c-4b73-4b72-a838-d8f3b804f6cf","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"9a2de762-db73-44a7-831f-d83e9e9175cd","type":"LinearAxis"},{"id":"c4e8206e-4738-4784-847a-2e4beda4be79","type":"Grid"},{"id":"3a9aa31c-4b73-4b72-a838-d8f3b804f6cf","type":"LinearAxis"},{"id":"7d539406-61fc-4808-a3c2-832752bff0a3","type":"Grid"},{"id":"b07ad9d3-c186-443f-959b-53ce1d603121","type":"BoxAnnotation"},{"id":"898349c4-be89-4b47-903a-1177d71b359d","type":"Whisker"},{"id":"a45f969a-2e6c-4597-91d8-6dc8b3dcd718","type":"GlyphRenderer"},{"id":"04eeb4e5-14c3-497e-8b0c-1e49da0e33c7","type":"GlyphRenderer"},{"id":"843bcfc3-4bbd-4b9a-aff8-075d36258b4a","type":"GlyphRenderer"},{"id":"be40a84d-f539-4285-b923-ddd04ff0aaa9","type":"GlyphRenderer"},{"id":"f959507b-75c8-4bd2-b29a-24ba32362789","type":"GlyphRenderer"},{"id":"095d9b9f-0b36-4af7-ada0-182057d33283","type":"GlyphRenderer"},{"id":"b286fd52-74bd-4f6b-9f2c-e0caa05771ab","type":"GlyphRenderer"},{"id":"928e5b65-96fc-433a-82c1-3fb9c19b1a21","type":"GlyphRenderer"},{"id":"89013681-2fe7-4fe8-99c3-96adf6fee887","type":"GlyphRenderer"},{"id":"2286f6d1-17f7-4081-831d-6e07bb832bc4","type":"GlyphRenderer"},{"id":"506b3189-303d-4744-93ea-2270ce19a0eb","type":"GlyphRenderer"},{"id":"062a282d-b4ef-4cb2-9769-8a72bf30169a","type":"GlyphRenderer"},{"id":"dc3d6be9-db34-48c1-9c25-c1db585b89cc","type":"GlyphRenderer"}],"title":{"id":"415a8225-5183-4565-b9e4-15ce7713ddee","type":"Title"},"toolbar":{"id":"c9f41f57-a67c-480f-9df5-507a86c38fae","type":"Toolbar"},"x_range":{"id":"fabdbefd-fe66-41b2-af68-4b8eb60252dd","type":"DataRange1d"},"x_scale":{"id":"388ad002-8277-4c55-8925-98b7cf71c2b6","type":"LinearScale"},"y_range":{"id":"a07e5aea-ed3b-4849-81c2-ac9f5aab60b7","type":"DataRange1d"},"y_scale":{"id":"abf72f08-ca04-4525-887b-65481eaecf55","type":"LinearScale"}},"id":"43edee88-9371-429e-8d44-dc60ee0f03c9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4907e78e-8a22-4bd5-b830-9dc1702c3000","type":"ResetTool"},{"attributes":{"data_source":{"id":"7791535c-5dae-4ab5-9e3d-eba125d7e22c","type":"ColumnDataSource"},"glyph":{"id":"5e7882a1-fcd7-43bc-a4f0-8e69ab236f7c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3ef0da02-3f3a-46c6-87f7-6368bc6b90ba","type":"Circle"},"selection_glyph":null,"view":{"id":"1335e86f-87ad-437a-bb67-a55f660c16ab","type":"CDSView"}},"id":"04eeb4e5-14c3-497e-8b0c-1e49da0e33c7","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"f5aa31b7-a78c-41f2-b1df-7365a6b0c578","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"43edee88-9371-429e-8d44-dc60ee0f03c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"eedd8d74-6d71-4a4e-bb5c-1b58b8ac0e85","type":"BasicTicker"}},"id":"7d539406-61fc-4808-a3c2-832752bff0a3","type":"Grid"},{"attributes":{"data_source":{"id":"b293a82e-939e-456d-94d0-388b1a38829b","type":"ColumnDataSource"},"glyph":{"id":"819f1f90-2e9c-4e15-a359-afaf8fc89f54","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31bab24f-8a38-44e7-b8aa-952d5ee84cb8","type":"Circle"},"selection_glyph":null,"view":{"id":"4fbe7ca6-1e98-476b-9b75-6e3360b5bbc8","type":"CDSView"}},"id":"843bcfc3-4bbd-4b9a-aff8-075d36258b4a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7791535c-5dae-4ab5-9e3d-eba125d7e22c","type":"ColumnDataSource"}},"id":"1335e86f-87ad-437a-bb67-a55f660c16ab","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"31bab24f-8a38-44e7-b8aa-952d5ee84cb8","type":"Circle"},{"attributes":{"source":{"id":"b293a82e-939e-456d-94d0-388b1a38829b","type":"ColumnDataSource"}},"id":"4fbe7ca6-1e98-476b-9b75-6e3360b5bbc8","type":"CDSView"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"8f133498-d0e0-43c7-8e05-694a1beb1aa3","type":"TeeHead"},"plot":{"id":"43edee88-9371-429e-8d44-dc60ee0f03c9","subtype":"Figure","type":"Plot"},"source":{"id":"1817dc25-8d5e-44ba-8cbe-583d239487fc","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"4d12d711-1045-4eab-a8b5-f997e2f9e1d0","type":"TeeHead"}},"id":"898349c4-be89-4b47-903a-1177d71b359d","type":"Whisker"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"9ef6b8ee-5239-41f1-9ccf-9ed61d0ae4ae","type":"ColumnDataSource"},{"attributes":{},"id":"eedd8d74-6d71-4a4e-bb5c-1b58b8ac0e85","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9ef6b8ee-5239-41f1-9ccf-9ed61d0ae4ae","type":"ColumnDataSource"},"glyph":{"id":"f5aa31b7-a78c-41f2-b1df-7365a6b0c578","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97557bdf-85cc-42b4-bf84-3c780fe96019","type":"Circle"},"selection_glyph":null,"view":{"id":"dd678aad-e9ce-4edb-99bd-957075bc225b","type":"CDSView"}},"id":"be40a84d-f539-4285-b923-ddd04ff0aaa9","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b07ad9d3-c186-443f-959b-53ce1d603121","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"01f591a2-48e0-4c0e-aca9-18127571a6bc","type":"Circle"},{"attributes":{"data_source":{"id":"f3ce5c3f-c849-4ccf-9f5b-89ce105e8d3d","type":"ColumnDataSource"},"glyph":{"id":"01f591a2-48e0-4c0e-aca9-18127571a6bc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82c9c97c-3743-4285-bfae-6bf312a99575","type":"Circle"},"selection_glyph":null,"view":{"id":"92f01bfc-3a49-466a-8551-2cbe430a5e52","type":"CDSView"}},"id":"f959507b-75c8-4bd2-b29a-24ba32362789","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9ef6b8ee-5239-41f1-9ccf-9ed61d0ae4ae","type":"ColumnDataSource"}},"id":"dd678aad-e9ce-4edb-99bd-957075bc225b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"97557bdf-85cc-42b4-bf84-3c780fe96019","type":"Circle"}],"root_ids":["43edee88-9371-429e-8d44-dc60ee0f03c9"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"a01e5040-41f7-453e-8c9b-adffdf04ce45","elementid":"fe0bd0e8-c9f3-4133-a17d-0c649327585a","modelid":"43edee88-9371-429e-8d44-dc60ee0f03c9"}];
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