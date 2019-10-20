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
      };var element = document.getElementById("bb4e63ca-fd36-45a9-b981-3bccf6e90096");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb4e63ca-fd36-45a9-b981-3bccf6e90096' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"196d6a70-7a47-4618-95af-4bbdf468a08a":{"roots":{"references":[{"attributes":{"plot":{"id":"9c4900ea-0c07-4657-95d3-272efb368072","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b1a613e-231e-4314-912a-7c84f401fc5a","type":"BasicTicker"}},"id":"f87844cc-e03d-4c1b-8009-d332a24e9fb5","type":"Grid"},{"attributes":{"callback":null},"id":"112bc6e1-eb6d-43e1-afb6-85d769d3f471","type":"DataRange1d"},{"attributes":{},"id":"5c70fa67-0153-48a8-a820-8e85b8ac182a","type":"SaveTool"},{"attributes":{},"id":"53d72eff-8df6-469b-9fb0-b7e9d65aaae4","type":"BasicTicker"},{"attributes":{"below":[{"id":"f98bbbd2-496d-4c57-8e6b-76a82c12136e","type":"LinearAxis"}],"left":[{"id":"cb165585-eb20-4cb1-8313-06b8d91d930d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f98bbbd2-496d-4c57-8e6b-76a82c12136e","type":"LinearAxis"},{"id":"d8f31beb-80af-4448-b9d4-c708243cb8f1","type":"Grid"},{"id":"cb165585-eb20-4cb1-8313-06b8d91d930d","type":"LinearAxis"},{"id":"510bedb7-158f-49f8-8c68-5846cb6b7ec3","type":"Grid"},{"id":"f7fffa27-2006-4ea3-90e3-dbc0222d2cbf","type":"BoxAnnotation"},{"id":"2346f3fd-ecd7-4cc2-9bad-1899e69cea7c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"671af3c8-efdc-47ed-8286-aff922f5bc4c","type":"Toolbar"},"x_range":{"id":"50ed4785-372f-4cac-abfa-f253039f7db1","type":"DataRange1d"},"x_scale":{"id":"f1a0b810-12c6-40f6-91e5-cc4b5c065b49","type":"LinearScale"},"y_range":{"id":"7586572e-e7f9-4906-b48d-188f95948b8c","type":"DataRange1d"},"y_scale":{"id":"b2f7d095-e096-4090-8245-7ad51eb49b3b","type":"LinearScale"}},"id":"61c12fdb-ea88-4d55-b898-c1c370f3ba63","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2765de32-b7fa-4270-ad2d-e921ccf7600b","type":"HelpTool"},{"attributes":{"formatter":{"id":"3d167088-fb6d-4e7b-a9c6-5a3f17c7c361","type":"BasicTickFormatter"},"plot":{"id":"61c12fdb-ea88-4d55-b898-c1c370f3ba63","subtype":"Figure","type":"Plot"},"ticker":{"id":"658537d5-65bf-4758-a904-b65159309f27","type":"BasicTicker"}},"id":"f98bbbd2-496d-4c57-8e6b-76a82c12136e","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"61c12fdb-ea88-4d55-b898-c1c370f3ba63","subtype":"Figure","type":"Plot"},"ticker":{"id":"79329d36-1b92-4aa2-8200-f38c51bfd9c5","type":"BasicTicker"}},"id":"510bedb7-158f-49f8-8c68-5846cb6b7ec3","type":"Grid"},{"attributes":{"formatter":{"id":"f45fe8cd-f956-41b1-815c-bdc523b6aa50","type":"BasicTickFormatter"},"plot":{"id":"9a75dd2f-0b5f-479f-bf9e-7de522456a38","subtype":"Figure","type":"Plot"},"ticker":{"id":"4022790c-a205-45b9-a9ff-f95d26c38509","type":"BasicTicker"}},"id":"bee201e7-bfae-43a1-826e-3c4e5531baee","type":"LinearAxis"},{"attributes":{},"id":"b3e837e6-9ccd-458a-92fa-2dc64d6651d0","type":"ResetTool"},{"attributes":{},"id":"75a76d89-685a-46ec-803f-546ea568dc35","type":"BasicTickFormatter"},{"attributes":{},"id":"b2f7d095-e096-4090-8245-7ad51eb49b3b","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"9c4900ea-0c07-4657-95d3-272efb368072","subtype":"Figure","type":"Plot"},"ticker":{"id":"dceb9c6e-1222-47d2-9633-19ec0510fdaf","type":"BasicTicker"}},"id":"8407c470-0cea-4209-b0ac-da2d80962b05","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd2943d6-35a7-4d8c-a0ed-c5c9b3403d3e","type":"Circle"},{"attributes":{"children":[{"id":"61c12fdb-ea88-4d55-b898-c1c370f3ba63","subtype":"Figure","type":"Plot"},{"id":"9a75dd2f-0b5f-479f-bf9e-7de522456a38","subtype":"Figure","type":"Plot"},{"id":"9c4900ea-0c07-4657-95d3-272efb368072","subtype":"Figure","type":"Plot"}]},"id":"f3815155-9b4a-447a-8b80-2cd0e5e77e17","type":"Row"},{"attributes":{},"id":"d2608d15-6f9d-444d-817d-894346531d08","type":"ResetTool"},{"attributes":{"source":{"id":"70cd2f01-2f1f-46bb-83ed-d636fedb485a","type":"ColumnDataSource"}},"id":"f3172a35-637a-420d-be11-1f54d51b2054","type":"CDSView"},{"attributes":{},"id":"f1a0b810-12c6-40f6-91e5-cc4b5c065b49","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"9a75dd2f-0b5f-479f-bf9e-7de522456a38","subtype":"Figure","type":"Plot"},"ticker":{"id":"4022790c-a205-45b9-a9ff-f95d26c38509","type":"BasicTicker"}},"id":"67e55edc-9eab-4b99-a908-b52c8e3b5aae","type":"Grid"},{"attributes":{},"id":"dc68ef14-7392-44b0-8e0b-855b7e7cd5dd","type":"SaveTool"},{"attributes":{},"id":"a2d944f6-b853-46cc-9ce6-231ee4c1fa26","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"351e75f0-d4a4-498f-9009-327441678560","type":"DataRange1d"},{"attributes":{},"id":"270d9ea3-dc30-4d20-b97a-9397165d9c3c","type":"LinearScale"},{"attributes":{"data_source":{"id":"70cd2f01-2f1f-46bb-83ed-d636fedb485a","type":"ColumnDataSource"},"glyph":{"id":"f54723fa-31b8-45a2-85e3-98766dcb4bb6","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"db08cb98-fe60-4542-8d9a-c44c0958978e","type":"Square"},"selection_glyph":null,"view":{"id":"f3172a35-637a-420d-be11-1f54d51b2054","type":"CDSView"}},"id":"c1eac5ec-0948-461d-9b47-3c4f56df398f","type":"GlyphRenderer"},{"attributes":{},"id":"1c00e0cd-5ebf-4b67-88a0-0e2cd7a6faef","type":"SaveTool"},{"attributes":{},"id":"79f22ae5-9421-4da5-8673-1e2466ede578","type":"LinearScale"},{"attributes":{},"id":"a56d6db3-59b5-4355-ad45-78e748ad1c8e","type":"LinearScale"},{"attributes":{"source":{"id":"a9a4cfad-d6d1-4e25-bace-5a5142158bfe","type":"ColumnDataSource"}},"id":"a9137fa0-b474-4563-b73e-4b4b3111ae4d","type":"CDSView"},{"attributes":{},"id":"90141c40-6a8f-4803-8c19-9123b0b07a5c","type":"PanTool"},{"attributes":{"source":{"id":"e676ca45-238a-4320-8d48-5cd1c6359d1e","type":"ColumnDataSource"}},"id":"e5700920-d683-4ca1-bb7c-1b11fe42f371","type":"CDSView"},{"attributes":{},"id":"63b60a79-0836-4673-bc7d-e6201c389720","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"db08cb98-fe60-4542-8d9a-c44c0958978e","type":"Square"},{"attributes":{"data_source":{"id":"e676ca45-238a-4320-8d48-5cd1c6359d1e","type":"ColumnDataSource"},"glyph":{"id":"696ee8dc-5225-44b2-8bf7-a6ec696d323d","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73f7a508-46a8-43f3-982b-cca675f305e1","type":"Triangle"},"selection_glyph":null,"view":{"id":"e5700920-d683-4ca1-bb7c-1b11fe42f371","type":"CDSView"}},"id":"d316eb23-04d1-4f1c-9672-42c3e9e32a26","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f9e3df1-8b1f-4c31-9ed8-54311947d74e","type":"BoxAnnotation"},{"attributes":{},"id":"5855d38c-0cd5-4910-8ead-616a3529042c","type":"ResetTool"},{"attributes":{},"id":"8fac2f75-13b5-4c7c-b165-a1a7096d89a8","type":"BasicTickFormatter"},{"attributes":{},"id":"c37178e5-b3ea-4051-bf72-3095b3318c94","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"2f9e3df1-8b1f-4c31-9ed8-54311947d74e","type":"BoxAnnotation"}},"id":"f338e760-4359-4bae-ba0a-20477759a04b","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"72cba526-9e56-4178-9cf1-a3b74fbf3979","type":"PanTool"},{"id":"9a6a76e6-a854-4ba9-a4af-ec846b9d155f","type":"WheelZoomTool"},{"id":"3b304465-edc4-4621-80fe-28180b4c54fc","type":"BoxZoomTool"},{"id":"dc68ef14-7392-44b0-8e0b-855b7e7cd5dd","type":"SaveTool"},{"id":"d2608d15-6f9d-444d-817d-894346531d08","type":"ResetTool"},{"id":"63b60a79-0836-4673-bc7d-e6201c389720","type":"HelpTool"}]},"id":"45d6f16a-f3aa-4d0a-853b-9e67c2a7b4d4","type":"Toolbar"},{"attributes":{"callback":null},"id":"f127d453-2545-4420-a0d6-28fd26d5f7a4","type":"DataRange1d"},{"attributes":{},"id":"801ea438-6a93-4e4f-a33c-27ef7af88ba1","type":"HelpTool"},{"attributes":{},"id":"3b1a613e-231e-4314-912a-7c84f401fc5a","type":"BasicTicker"},{"attributes":{},"id":"f45fe8cd-f956-41b1-815c-bdc523b6aa50","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c36ae6dd-4f3a-4be2-8055-89dd4f743c86","type":"BoxAnnotation"},{"attributes":{},"id":"3d167088-fb6d-4e7b-a9c6-5a3f17c7c361","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"e676ca45-238a-4320-8d48-5cd1c6359d1e","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"c0bf5789-f74a-42bf-8449-d82f6e8a8363","type":"LinearAxis"}],"left":[{"id":"bee201e7-bfae-43a1-826e-3c4e5531baee","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c0bf5789-f74a-42bf-8449-d82f6e8a8363","type":"LinearAxis"},{"id":"5017c5f7-6979-419a-979e-c466a5934815","type":"Grid"},{"id":"bee201e7-bfae-43a1-826e-3c4e5531baee","type":"LinearAxis"},{"id":"67e55edc-9eab-4b99-a908-b52c8e3b5aae","type":"Grid"},{"id":"c36ae6dd-4f3a-4be2-8055-89dd4f743c86","type":"BoxAnnotation"},{"id":"d316eb23-04d1-4f1c-9672-42c3e9e32a26","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"45d6f16a-f3aa-4d0a-853b-9e67c2a7b4d4","type":"Toolbar"},"x_range":{"id":"112bc6e1-eb6d-43e1-afb6-85d769d3f471","type":"DataRange1d"},"x_scale":{"id":"79f22ae5-9421-4da5-8673-1e2466ede578","type":"LinearScale"},"y_range":{"id":"f127d453-2545-4420-a0d6-28fd26d5f7a4","type":"DataRange1d"},"y_scale":{"id":"97b0b006-7ac8-4774-b9bb-9d606c5a8ea0","type":"LinearScale"}},"id":"9a75dd2f-0b5f-479f-bf9e-7de522456a38","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"658537d5-65bf-4758-a904-b65159309f27","type":"BasicTicker"},{"attributes":{},"id":"72cba526-9e56-4178-9cf1-a3b74fbf3979","type":"PanTool"},{"attributes":{"below":[{"id":"b54fe416-8afc-4dd0-8a33-dc49c0c22635","type":"LinearAxis"}],"left":[{"id":"fa342864-98f3-4be1-bcb4-2c4e00fb5a90","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b54fe416-8afc-4dd0-8a33-dc49c0c22635","type":"LinearAxis"},{"id":"f87844cc-e03d-4c1b-8009-d332a24e9fb5","type":"Grid"},{"id":"fa342864-98f3-4be1-bcb4-2c4e00fb5a90","type":"LinearAxis"},{"id":"8407c470-0cea-4209-b0ac-da2d80962b05","type":"Grid"},{"id":"2f9e3df1-8b1f-4c31-9ed8-54311947d74e","type":"BoxAnnotation"},{"id":"c1eac5ec-0948-461d-9b47-3c4f56df398f","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8450f9bc-d6c0-47b6-80ae-0507df2260a8","type":"Toolbar"},"x_range":{"id":"7b74014f-104e-4033-9230-c7465c3ecf92","type":"DataRange1d"},"x_scale":{"id":"a56d6db3-59b5-4355-ad45-78e748ad1c8e","type":"LinearScale"},"y_range":{"id":"351e75f0-d4a4-498f-9009-327441678560","type":"DataRange1d"},"y_scale":{"id":"270d9ea3-dc30-4d20-b97a-9397165d9c3c","type":"LinearScale"}},"id":"9c4900ea-0c07-4657-95d3-272efb368072","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7586572e-e7f9-4906-b48d-188f95948b8c","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f7fffa27-2006-4ea3-90e3-dbc0222d2cbf","type":"BoxAnnotation"},{"attributes":{},"id":"4022790c-a205-45b9-a9ff-f95d26c38509","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f54723fa-31b8-45a2-85e3-98766dcb4bb6","type":"Square"},{"attributes":{"formatter":{"id":"c37178e5-b3ea-4051-bf72-3095b3318c94","type":"BasicTickFormatter"},"plot":{"id":"9a75dd2f-0b5f-479f-bf9e-7de522456a38","subtype":"Figure","type":"Plot"},"ticker":{"id":"53d72eff-8df6-469b-9fb0-b7e9d65aaae4","type":"BasicTicker"}},"id":"c0bf5789-f74a-42bf-8449-d82f6e8a8363","type":"LinearAxis"},{"attributes":{},"id":"644fe95f-c07b-447d-a0f9-5fd744d78777","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"61c12fdb-ea88-4d55-b898-c1c370f3ba63","subtype":"Figure","type":"Plot"},"ticker":{"id":"658537d5-65bf-4758-a904-b65159309f27","type":"BasicTicker"}},"id":"d8f31beb-80af-4448-b9d4-c708243cb8f1","type":"Grid"},{"attributes":{"overlay":{"id":"c36ae6dd-4f3a-4be2-8055-89dd4f743c86","type":"BoxAnnotation"}},"id":"3b304465-edc4-4621-80fe-28180b4c54fc","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9a75dd2f-0b5f-479f-bf9e-7de522456a38","subtype":"Figure","type":"Plot"},"ticker":{"id":"53d72eff-8df6-469b-9fb0-b7e9d65aaae4","type":"BasicTicker"}},"id":"5017c5f7-6979-419a-979e-c466a5934815","type":"Grid"},{"attributes":{"data_source":{"id":"a9a4cfad-d6d1-4e25-bace-5a5142158bfe","type":"ColumnDataSource"},"glyph":{"id":"42bcf219-b407-4131-a0d1-8873dff00b7c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd2943d6-35a7-4d8c-a0ed-c5c9b3403d3e","type":"Circle"},"selection_glyph":null,"view":{"id":"a9137fa0-b474-4563-b73e-4b4b3111ae4d","type":"CDSView"}},"id":"2346f3fd-ecd7-4cc2-9bad-1899e69cea7c","type":"GlyphRenderer"},{"attributes":{},"id":"d237a983-58ff-4126-be65-1090002e3537","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"90141c40-6a8f-4803-8c19-9123b0b07a5c","type":"PanTool"},{"id":"644fe95f-c07b-447d-a0f9-5fd744d78777","type":"WheelZoomTool"},{"id":"eb182db1-594b-41e6-87d4-3d1072bc51d2","type":"BoxZoomTool"},{"id":"1c00e0cd-5ebf-4b67-88a0-0e2cd7a6faef","type":"SaveTool"},{"id":"5855d38c-0cd5-4910-8ead-616a3529042c","type":"ResetTool"},{"id":"801ea438-6a93-4e4f-a33c-27ef7af88ba1","type":"HelpTool"}]},"id":"671af3c8-efdc-47ed-8286-aff922f5bc4c","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"73f7a508-46a8-43f3-982b-cca675f305e1","type":"Triangle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"a9a4cfad-d6d1-4e25-bace-5a5142158bfe","type":"ColumnDataSource"},{"attributes":{},"id":"235e7db6-ea58-49c2-b047-7ba56fb280bc","type":"PanTool"},{"attributes":{"formatter":{"id":"75a76d89-685a-46ec-803f-546ea568dc35","type":"BasicTickFormatter"},"plot":{"id":"61c12fdb-ea88-4d55-b898-c1c370f3ba63","subtype":"Figure","type":"Plot"},"ticker":{"id":"79329d36-1b92-4aa2-8200-f38c51bfd9c5","type":"BasicTicker"}},"id":"cb165585-eb20-4cb1-8313-06b8d91d930d","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"696ee8dc-5225-44b2-8bf7-a6ec696d323d","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"42bcf219-b407-4131-a0d1-8873dff00b7c","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"70cd2f01-2f1f-46bb-83ed-d636fedb485a","type":"ColumnDataSource"},{"attributes":{},"id":"97b0b006-7ac8-4774-b9bb-9d606c5a8ea0","type":"LinearScale"},{"attributes":{"formatter":{"id":"8fac2f75-13b5-4c7c-b165-a1a7096d89a8","type":"BasicTickFormatter"},"plot":{"id":"9c4900ea-0c07-4657-95d3-272efb368072","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b1a613e-231e-4314-912a-7c84f401fc5a","type":"BasicTicker"}},"id":"b54fe416-8afc-4dd0-8a33-dc49c0c22635","type":"LinearAxis"},{"attributes":{},"id":"79329d36-1b92-4aa2-8200-f38c51bfd9c5","type":"BasicTicker"},{"attributes":{"callback":null},"id":"50ed4785-372f-4cac-abfa-f253039f7db1","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d237a983-58ff-4126-be65-1090002e3537","type":"BasicTickFormatter"},"plot":{"id":"9c4900ea-0c07-4657-95d3-272efb368072","subtype":"Figure","type":"Plot"},"ticker":{"id":"dceb9c6e-1222-47d2-9633-19ec0510fdaf","type":"BasicTicker"}},"id":"fa342864-98f3-4be1-bcb4-2c4e00fb5a90","type":"LinearAxis"},{"attributes":{},"id":"9a6a76e6-a854-4ba9-a4af-ec846b9d155f","type":"WheelZoomTool"},{"attributes":{},"id":"dceb9c6e-1222-47d2-9633-19ec0510fdaf","type":"BasicTicker"},{"attributes":{"overlay":{"id":"f7fffa27-2006-4ea3-90e3-dbc0222d2cbf","type":"BoxAnnotation"}},"id":"eb182db1-594b-41e6-87d4-3d1072bc51d2","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"235e7db6-ea58-49c2-b047-7ba56fb280bc","type":"PanTool"},{"id":"a2d944f6-b853-46cc-9ce6-231ee4c1fa26","type":"WheelZoomTool"},{"id":"f338e760-4359-4bae-ba0a-20477759a04b","type":"BoxZoomTool"},{"id":"5c70fa67-0153-48a8-a820-8e85b8ac182a","type":"SaveTool"},{"id":"b3e837e6-9ccd-458a-92fa-2dc64d6651d0","type":"ResetTool"},{"id":"2765de32-b7fa-4270-ad2d-e921ccf7600b","type":"HelpTool"}]},"id":"8450f9bc-d6c0-47b6-80ae-0507df2260a8","type":"Toolbar"},{"attributes":{"callback":null},"id":"7b74014f-104e-4033-9230-c7465c3ecf92","type":"DataRange1d"}],"root_ids":["f3815155-9b4a-447a-8b80-2cd0e5e77e17"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"196d6a70-7a47-4618-95af-4bbdf468a08a","elementid":"bb4e63ca-fd36-45a9-b981-3bccf6e90096","modelid":"f3815155-9b4a-447a-8b80-2cd0e5e77e17"}];
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