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
      };var element = document.getElementById("2858a616-6a18-4b90-8cec-de829663af57");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2858a616-6a18-4b90-8cec-de829663af57' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b6da53ba-1596-451b-afe9-533f0ead1f3c":{"roots":{"references":[{"attributes":{"callback":{"id":"a3d41fcb-d057-42e3-afb0-4f03d38fd300","type":"CustomJS"},"end":255,"start":0,"title":"B","value":255},"id":"2a1a08c8-a48d-4b33-9e35-c41f653f1e9e","type":"Slider"},{"attributes":{"callback":null,"tooltips":[["color","$color[hex, rgb, swatch]:crcolor"],["RGB levels","@RGBs"]]},"id":"14d2cb4e-6420-45ab-87ee-e59ae51d83a3","type":"HoverTool"},{"attributes":{"below":[{"id":"9177d5da-8633-4f33-941e-404d0f85afc9","type":"LinearAxis"}],"left":[{"id":"688ec9b0-2f1b-48ef-a6cc-8aedd73faaa0","type":"LinearAxis"}],"plot_height":150,"renderers":[{"id":"9177d5da-8633-4f33-941e-404d0f85afc9","type":"LinearAxis"},{"id":"8f6bdcce-22bb-47ad-a7cf-c3cfecf60668","type":"Grid"},{"id":"688ec9b0-2f1b-48ef-a6cc-8aedd73faaa0","type":"LinearAxis"},{"id":"99b86c01-c818-41c4-b1ca-263cffb075b9","type":"Grid"},{"id":"0aa3be0e-8bc9-4584-88dd-667c0d07ab1f","type":"GlyphRenderer"}],"title":{"id":"37ce44ad-87e0-41ae-bd51-ef1666a4f7cc","type":"Title"},"toolbar":{"id":"895cb917-77c6-4aa5-839a-121f443ec971","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2de80d95-22b7-4b77-bcdc-bb6d478b37a3","type":"Range1d"},"x_scale":{"id":"a893bd8c-e155-4488-966c-00ba0fe5c9f6","type":"LinearScale"},"y_range":{"id":"060a2ab1-a6ad-4840-ae8e-ced1f9adaf5b","type":"Range1d"},"y_scale":{"id":"a35d8d1a-45d4-4fba-af20-b02343b47798","type":"LinearScale"}},"id":"ae9efe9f-fab6-4637-a56c-bb275f020cbb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a35d8d1a-45d4-4fba-af20-b02343b47798","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ae9efe9f-fab6-4637-a56c-bb275f020cbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"64eae274-71c4-4e5b-9522-94ee5f57beea","type":"BasicTicker"}},"id":"8f6bdcce-22bb-47ad-a7cf-c3cfecf60668","type":"Grid"},{"attributes":{"text":{"field":"color"},"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"36pt"},"x":{"value":0},"y":{"value":0}},"id":"dbe339cd-8257-4fe7-bc2f-e0a2005994ba","type":"Text"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"42cf2c6c-2423-4dc1-be39-f146f87d79c9","type":"BasicTickFormatter"},"major_label_text_color":{"value":null},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"ae9efe9f-fab6-4637-a56c-bb275f020cbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"64eae274-71c4-4e5b-9522-94ee5f57beea","type":"BasicTicker"}},"id":"9177d5da-8633-4f33-941e-404d0f85afc9","type":"LinearAxis"},{"attributes":{"source":{"id":"1b2dd6c9-a6e4-4499-8ee7-9092d065b6bf","type":"ColumnDataSource"}},"id":"5ecee914-5110-458a-973d-18b3fe7feb4d","type":"CDSView"},{"attributes":{},"id":"64eae274-71c4-4e5b-9522-94ee5f57beea","type":"BasicTicker"},{"attributes":{"args":{"blue_slider":{"id":"2a1a08c8-a48d-4b33-9e35-c41f653f1e9e","type":"Slider"},"green_slider":{"id":"60cb3af2-2d09-4b67-8f05-e92564736e8a","type":"Slider"},"red_slider":{"id":"5eb33080-c294-434f-9821-e0d8d13e82ad","type":"Slider"},"source":{"id":"1b2dd6c9-a6e4-4499-8ee7-9092d065b6bf","type":"ColumnDataSource"}},"code":"\\n    function componentToHex(c) {\\n        var hex = c.toString(16);\\n        return hex.length == 1 ? \\"0\\" + hex : hex;\\n    }\\n    function rgbToHex(r, g, b) {\\n        return \\"#\\" + componentToHex(r) + componentToHex(g) + componentToHex(b);\\n    }\\n    function toInt(v) {\\n       return v | 0;\\n    }\\n    var data = source.data;\\n    color = data[&#x27;color&#x27;];\\n    text_color = data[&#x27;text_color&#x27;];\\n    var R = toInt(red_slider.value);\\n    var G = toInt(green_slider.value);\\n    var B = toInt(blue_slider.value);\\n    color[0] = rgbToHex(R, G, B);\\n    text_color[0] = &#x27;#ffffff&#x27;;\\n    if ((R &gt; 127) || (G &gt; 127) || (B &gt; 127)) {\\n        text_color[0] = &#x27;#000000&#x27;;\\n    }\\n    source.change.emit();\\n"},"id":"a3d41fcb-d057-42e3-afb0-4f03d38fd300","type":"CustomJS"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"272d4d42-6ed3-4948-96d7-c63c3835b67c","type":"BasicTickFormatter"},"major_label_text_color":{"value":null},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"ae9efe9f-fab6-4637-a56c-bb275f020cbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a8c6a41-1f9c-4734-ad1a-701a8c056240","type":"BasicTicker"}},"id":"688ec9b0-2f1b-48ef-a6cc-8aedd73faaa0","type":"LinearAxis"},{"attributes":{"callback":{"id":"a3d41fcb-d057-42e3-afb0-4f03d38fd300","type":"CustomJS"},"end":255,"start":0,"title":"G","value":255},"id":"60cb3af2-2d09-4b67-8f05-e92564736e8a","type":"Slider"},{"attributes":{},"id":"2a8c6a41-1f9c-4734-ad1a-701a8c056240","type":"BasicTicker"},{"attributes":{},"id":"42cf2c6c-2423-4dc1-be39-f146f87d79c9","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"ae9efe9f-fab6-4637-a56c-bb275f020cbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a8c6a41-1f9c-4734-ad1a-701a8c056240","type":"BasicTicker"}},"id":"99b86c01-c818-41c4-b1ca-263cffb075b9","type":"Grid"},{"attributes":{"fill_color":{"field":"crcolor"},"height":{"units":"data","value":10},"line_color":{"field":"crcolor"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"54a90e61-06a0-4854-90f3-48e605f0637c","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":10},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"99aa4140-e064-4405-a82f-8b4c0e29c701","type":"Rect"},{"attributes":{"data_source":{"id":"27dd3e35-4925-4b15-a202-4d72202b6317","type":"ColumnDataSource"},"glyph":{"id":"54a90e61-06a0-4854-90f3-48e605f0637c","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"99aa4140-e064-4405-a82f-8b4c0e29c701","type":"Rect"},"selection_glyph":null,"view":{"id":"7d16f627-34ec-475b-b3b0-2015ad9604c0","type":"CDSView"}},"id":"0aa3be0e-8bc9-4584-88dd-667c0d07ab1f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["color","text_color"],"data":{"color":["#ffffff"],"text_color":["#000000"]}},"id":"1b2dd6c9-a6e4-4499-8ee7-9092d065b6bf","type":"ColumnDataSource"},{"attributes":{"source":{"id":"27dd3e35-4925-4b15-a202-4d72202b6317","type":"ColumnDataSource"}},"id":"7d16f627-34ec-475b-b3b0-2015ad9604c0","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y","crcolor","RGBs"],"data":{"RGBs":[[204,102,102],[204,102,102],[204,103,102],[204,103,102],[204,104,102],[204,105,102],[204,105,102],[204,106,102],[204,106,102],[204,107,102],[204,108,102],[204,108,102],[204,109,102],[204,109,102],[204,110,102],[204,111,102],[204,111,102],[204,112,102],[204,113,102],[204,113,102],[204,114,102],[204,114,102],[204,115,102],[204,116,102],[204,116,102],[204,117,102],[204,117,102],[204,118,102],[204,119,102],[204,119,102],[204,120,102],[204,120,102],[204,121,102],[204,122,102],[204,122,102],[204,123,102],[204,124,102],[204,124,102],[204,125,102],[204,125,102],[204,126,102],[204,127,102],[204,127,102],[204,128,102],[204,128,102],[204,129,102],[204,130,102],[204,130,102],[204,131,102],[204,131,102],[204,132,102],[204,133,102],[204,133,102],[204,134,102],[204,135,102],[204,135,102],[204,136,102],[204,136,102],[204,137,102],[204,138,102],[204,138,102],[204,139,102],[204,139,102],[204,140,102],[204,141,102],[204,141,102],[204,142,102],[204,143,102],[204,143,102],[204,144,102],[204,144,102],[204,145,102],[204,146,102],[204,146,102],[204,147,102],[204,147,102],[204,148,102],[204,149,102],[204,149,102],[204,150,102],[204,150,102],[204,151,102],[204,152,102],[204,152,102],[204,153,102],[204,154,102],[204,154,102],[204,155,102],[204,155,102],[204,156,102],[204,157,102],[204,157,102],[204,158,102],[204,158,102],[204,159,102],[204,160,102],[204,160,102],[204,161,102],[204,161,102],[204,162,102],[204,163,102],[204,163,102],[204,164,102],[204,165,102],[204,165,102],[204,166,102],[204,166,102],[204,167,102],[204,168,102],[204,168,102],[204,169,102],[204,169,102],[204,170,102],[204,171,102],[204,171,102],[204,172,102],[204,172,102],[204,173,102],[204,174,102],[204,174,102],[204,175,102],[204,176,102],[204,176,102],[204,177,102],[204,177,102],[204,178,102],[204,179,102],[204,179,102],[204,180,102],[204,180,102],[204,181,102],[204,182,102],[204,182,102],[204,183,102],[204,184,102],[204,184,102],[204,185,102],[204,185,102],[204,186,102],[204,187,102],[204,187,102],[204,188,102],[204,188,102],[204,189,102],[204,190,102],[204,190,102],[204,191,102],[204,191,102],[204,192,102],[204,193,102],[204,193,102],[204,194,102],[204,195,102],[204,195,102],[204,196,102],[204,196,102],[204,197,102],[204,198,102],[204,198,102],[204,199,102],[204,199,102],[204,200,102],[204,201,102],[204,201,102],[204,202,102],[204,202,102],[204,203,102],[203,204,102],[203,204,102],[202,204,102],[201,204,102],[201,204,102],[200,204,102],[200,204,102],[199,204,102],[198,204,102],[198,204,102],[197,204,102],[197,204,102],[196,204,102],[195,204,102],[195,204,102],[194,204,102],[194,204,102],[193,204,102],[192,204,102],[192,204,102],[191,204,102],[190,204,102],[190,204,102],[189,204,102],[189,204,102],[188,204,102],[187,204,102],[187,204,102],[186,204,102],[186,204,102],[185,204,102],[184,204,102],[184,204,102],[183,204,102],[182,204,102],[182,204,102],[181,204,102],[181,204,102],[180,204,102],[179,204,102],[179,204,102],[178,204,102],[178,204,102],[177,204,102],[176,204,102],[176,204,102],[175,204,102],[175,204,102],[174,204,102],[173,204,102],[173,204,102],[172,204,102],[171,204,102],[171,204,102],[170,204,102],[170,204,102],[169,204,102],[168,204,102],[168,204,102],[167,204,102],[167,204,102],[166,204,102],[165,204,102],[165,204,102],[164,204,102],[164,204,102],[163,204,102],[162,204,102],[162,204,102],[161,204,102],[160,204,102],[160,204,102],[159,204,102],[159,204,102],[158,204,102],[157,204,102],[157,204,102],[156,204,102],[156,204,102],[155,204,102],[154,204,102],[154,204,102],[153,204,102],[153,204,102],[152,204,102],[151,204,102],[151,204,102],[150,204,102],[149,204,102],[149,204,102],[148,204,102],[148,204,102],[147,204,102],[146,204,102],[146,204,102],[145,204,102],[145,204,102],[144,204,102],[143,204,102],[143,204,102],[142,204,102],[141,204,102],[141,204,102],[140,204,102],[140,204,102],[139,204,102],[138,204,102],[138,204,102],[137,204,102],[137,204,102],[136,204,102],[135,204,102],[135,204,102],[134,204,102],[134,204,102],[133,204,102],[132,204,102],[132,204,102],[131,204,102],[130,204,102],[130,204,102],[129,204,102],[129,204,102],[128,204,102],[127,204,102],[127,204,102],[126,204,102],[126,204,102],[125,204,102],[124,204,102],[124,204,102],[123,204,102],[123,204,102],[122,204,102],[121,204,102],[121,204,102],[120,204,102],[119,204,102],[119,204,102],[118,204,102],[118,204,102],[117,204,102],[116,204,102],[116,204,102],[115,204,102],[115,204,102],[114,204,102],[113,204,102],[113,204,102],[112,204,102],[111,204,102],[111,204,102],[110,204,102],[110,204,102],[109,204,102],[108,204,102],[108,204,102],[107,204,102],[107,204,102],[106,204,102],[105,204,102],[105,204,102],[104,204,102],[104,204,102],[103,204,102],[102,204,102],[102,204,102],[102,204,102],[102,204,103],[102,204,103],[102,204,104],[102,204,104],[102,204,105],[102,204,106],[102,204,106],[102,204,107],[102,204,107],[102,204,108],[102,204,109],[102,204,109],[102,204,110],[102,204,110],[102,204,111],[102,204,112],[102,204,112],[102,204,113],[102,204,114],[102,204,114],[102,204,115],[102,204,115],[102,204,116],[102,204,117],[102,204,117],[102,204,118],[102,204,118],[102,204,119],[102,204,120],[102,204,120],[102,204,121],[102,204,121],[102,204,122],[102,204,123],[102,204,123],[102,204,124],[102,204,125],[102,204,125],[102,204,126],[102,204,126],[102,204,127],[102,204,128],[102,204,128],[102,204,129],[102,204,129],[102,204,130],[102,204,131],[102,204,131],[102,204,132],[102,204,133],[102,204,133],[102,204,134],[102,204,134],[102,204,135],[102,204,136],[102,204,136],[102,204,137],[102,204,137],[102,204,138],[102,204,139],[102,204,139],[102,204,140],[102,204,140],[102,204,141],[102,204,142],[102,204,142],[102,204,143],[102,204,144],[102,204,144],[102,204,145],[102,204,145],[102,204,146],[102,204,147],[102,204,147],[102,204,148],[102,204,148],[102,204,149],[102,204,150],[102,204,150],[102,204,151],[102,204,151],[102,204,152],[102,204,153],[102,204,153],[102,204,154],[102,204,155],[102,204,155],[102,204,156],[102,204,156],[102,204,157],[102,204,158],[102,204,158],[102,204,159],[102,204,159],[102,204,160],[102,204,161],[102,204,161],[102,204,162],[102,204,162],[102,204,163],[102,204,164],[102,204,164],[102,204,165],[102,204,166],[102,204,166],[102,204,167],[102,204,167],[102,204,168],[102,204,169],[102,204,169],[102,204,170],[102,204,170],[102,204,171],[102,204,172],[102,204,172],[102,204,173],[102,204,174],[102,204,174],[102,204,175],[102,204,175],[102,204,176],[102,204,177],[102,204,177],[102,204,178],[102,204,178],[102,204,179],[102,204,180],[102,204,180],[102,204,181],[102,204,181],[102,204,182],[102,204,183],[102,204,183],[102,204,184],[102,204,185],[102,204,185],[102,204,186],[102,204,186],[102,204,187],[102,204,188],[102,204,188],[102,204,189],[102,204,189],[102,204,190],[102,204,191],[102,204,191],[102,204,192],[102,204,192],[102,204,193],[102,204,194],[102,204,194],[102,204,195],[102,204,196],[102,204,196],[102,204,197],[102,204,197],[102,204,198],[102,204,199],[102,204,199],[102,204,200],[102,204,200],[102,204,201],[102,204,202],[102,204,202],[102,204,203],[102,204,204],[102,203,204],[102,202,204],[102,202,204],[102,201,204],[102,200,204],[102,200,204],[102,199,204],[102,199,204],[102,198,204],[102,197,204],[102,197,204],[102,196,204],[102,196,204],[102,195,204],[102,194,204],[102,194,204],[102,193,204],[102,192,204],[102,192,204],[102,191,204],[102,191,204],[102,190,204],[102,189,204],[102,189,204],[102,188,204],[102,188,204],[102,187,204],[102,186,204],[102,186,204],[102,185,204],[102,185,204],[102,184,204],[102,183,204],[102,183,204],[102,182,204],[102,181,204],[102,181,204],[102,180,204],[102,180,204],[102,179,204],[102,178,204],[102,178,204],[102,177,204],[102,177,204],[102,176,204],[102,175,204],[102,175,204],[102,174,204],[102,174,204],[102,173,204],[102,172,204],[102,172,204],[102,171,204],[102,170,204],[102,170,204],[102,169,204],[102,169,204],[102,168,204],[102,167,204],[102,167,204],[102,166,204],[102,166,204],[102,165,204],[102,164,204],[102,164,204],[102,163,204],[102,162,204],[102,162,204],[102,161,204],[102,161,204],[102,160,204],[102,159,204],[102,159,204],[102,158,204],[102,158,204],[102,157,204],[102,156,204],[102,156,204],[102,155,204],[102,155,204],[102,154,204],[102,153,204],[102,153,204],[102,152,204],[102,151,204],[102,151,204],[102,150,204],[102,150,204],[102,149,204],[102,148,204],[102,148,204],[102,147,204],[102,147,204],[102,146,204],[102,145,204],[102,145,204],[102,144,204],[102,144,204],[102,143,204],[102,142,204],[102,142,204],[102,141,204],[102,140,204],[102,140,204],[102,139,204],[102,139,204],[102,138,204],[102,137,204],[102,137,204],[102,136,204],[102,136,204],[102,135,204],[102,134,204],[102,134,204],[102,133,204],[102,133,204],[102,132,204],[102,131,204],[102,131,204],[102,130,204],[102,129,204],[102,129,204],[102,128,204],[102,128,204],[102,127,204],[102,126,204],[102,126,204],[102,125,204],[102,125,204],[102,124,204],[102,123,204],[102,123,204],[102,122,204],[102,121,204],[102,121,204],[102,120,204],[102,120,204],[102,119,204],[102,118,204],[102,118,204],[102,117,204],[102,117,204],[102,116,204],[102,115,204],[102,115,204],[102,114,204],[102,114,204],[102,113,204],[102,112,204],[102,112,204],[102,111,204],[102,110,204],[102,110,204],[102,109,204],[102,109,204],[102,108,204],[102,107,204],[102,107,204],[102,106,204],[102,106,204],[102,105,204],[102,104,204],[102,104,204],[102,103,204],[102,103,204],[102,102,204],[102,102,204],[102,102,204],[103,102,204],[104,102,204],[104,102,204],[105,102,204],[105,102,204],[106,102,204],[107,102,204],[107,102,204],[108,102,204],[108,102,204],[109,102,204],[110,102,204],[110,102,204],[111,102,204],[111,102,204],[112,102,204],[113,102,204],[113,102,204],[114,102,204],[115,102,204],[115,102,204],[116,102,204],[116,102,204],[117,102,204],[118,102,204],[118,102,204],[119,102,204],[119,102,204],[120,102,204],[121,102,204],[121,102,204],[122,102,204],[123,102,204],[123,102,204],[124,102,204],[124,102,204],[125,102,204],[126,102,204],[126,102,204],[127,102,204],[127,102,204],[128,102,204],[129,102,204],[129,102,204],[130,102,204],[130,102,204],[131,102,204],[132,102,204],[132,102,204],[133,102,204],[134,102,204],[134,102,204],[135,102,204],[135,102,204],[136,102,204],[137,102,204],[137,102,204],[138,102,204],[138,102,204],[139,102,204],[140,102,204],[140,102,204],[141,102,204],[141,102,204],[142,102,204],[143,102,204],[143,102,204],[144,102,204],[145,102,204],[145,102,204],[146,102,204],[146,102,204],[147,102,204],[148,102,204],[148,102,204],[149,102,204],[149,102,204],[150,102,204],[151,102,204],[151,102,204],[152,102,204],[153,102,204],[153,102,204],[154,102,204],[154,102,204],[155,102,204],[156,102,204],[156,102,204],[157,102,204],[157,102,204],[158,102,204],[159,102,204],[159,102,204],[160,102,204],[160,102,204],[161,102,204],[162,102,204],[162,102,204],[163,102,204],[164,102,204],[164,102,204],[165,102,204],[165,102,204],[166,102,204],[167,102,204],[167,102,204],[168,102,204],[168,102,204],[169,102,204],[170,102,204],[170,102,204],[171,102,204],[171,102,204],[172,102,204],[173,102,204],[173,102,204],[174,102,204],[175,102,204],[175,102,204],[176,102,204],[176,102,204],[177,102,204],[178,102,204],[178,102,204],[179,102,204],[179,102,204],[180,102,204],[181,102,204],[181,102,204],[182,102,204],[182,102,204],[183,102,204],[184,102,204],[184,102,204],[185,102,204],[186,102,204],[186,102,204],[187,102,204],[187,102,204],[188,102,204],[189,102,204],[189,102,204],[190,102,204],[190,102,204],[191,102,204],[192,102,204],[192,102,204],[193,102,204],[194,102,204],[194,102,204],[195,102,204],[195,102,204],[196,102,204],[197,102,204],[197,102,204],[198,102,204],[198,102,204],[199,102,204],[200,102,204],[200,102,204],[201,102,204],[201,102,204],[202,102,204],[203,102,204],[203,102,204],[204,102,203],[204,102,202],[204,102,202],[204,102,201],[204,102,201],[204,102,200],[204,102,199],[204,102,199],[204,102,198],[204,102,198],[204,102,197],[204,102,196],[204,102,196],[204,102,195],[204,102,195],[204,102,194],[204,102,193],[204,102,193],[204,102,192],[204,102,191],[204,102,191],[204,102,190],[204,102,190],[204,102,189],[204,102,188],[204,102,188],[204,102,187],[204,102,187],[204,102,186],[204,102,185],[204,102,185],[204,102,184],[204,102,184],[204,102,183],[204,102,182],[204,102,182],[204,102,181],[204,102,180],[204,102,180],[204,102,179],[204,102,179],[204,102,178],[204,102,177],[204,102,177],[204,102,176],[204,102,176],[204,102,175],[204,102,174],[204,102,174],[204,102,173],[204,102,172],[204,102,172],[204,102,171],[204,102,171],[204,102,170],[204,102,169],[204,102,169],[204,102,168],[204,102,168],[204,102,167],[204,102,166],[204,102,166],[204,102,165],[204,102,165],[204,102,164],[204,102,163],[204,102,163],[204,102,162],[204,102,161],[204,102,161],[204,102,160],[204,102,160],[204,102,159],[204,102,158],[204,102,158],[204,102,157],[204,102,157],[204,102,156],[204,102,155],[204,102,155],[204,102,154],[204,102,154],[204,102,153],[204,102,152],[204,102,152],[204,102,151],[204,102,150],[204,102,150],[204,102,149],[204,102,149],[204,102,148],[204,102,147],[204,102,147],[204,102,146],[204,102,146],[204,102,145],[204,102,144],[204,102,144],[204,102,143],[204,102,143],[204,102,142],[204,102,141],[204,102,141],[204,102,140],[204,102,139],[204,102,139],[204,102,138],[204,102,138],[204,102,137],[204,102,136],[204,102,136],[204,102,135],[204,102,135],[204,102,134],[204,102,133],[204,102,133],[204,102,132],[204,102,131],[204,102,131],[204,102,130],[204,102,130],[204,102,129],[204,102,128],[204,102,128],[204,102,127],[204,102,127],[204,102,126],[204,102,125],[204,102,125],[204,102,124],[204,102,124],[204,102,123],[204,102,122],[204,102,122],[204,102,121],[204,102,120],[204,102,120],[204,102,119],[204,102,119],[204,102,118],[204,102,117],[204,102,117],[204,102,116],[204,102,116],[204,102,115],[204,102,114],[204,102,114],[204,102,113],[204,102,113],[204,102,112],[204,102,111],[204,102,111],[204,102,110],[204,102,109],[204,102,109],[204,102,108],[204,102,108],[204,102,107],[204,102,106],[204,102,106],[204,102,105],[204,102,105],[204,102,104],[204,102,103],[204,102,103],[204,102,102]],"crcolor":["#cc6666","#cc6666","#cc6766","#cc6766","#cc6866","#cc6966","#cc6966","#cc6a66","#cc6a66","#cc6b66","#cc6c66","#cc6c66","#cc6d66","#cc6d66","#cc6e66","#cc6f66","#cc6f66","#cc7066","#cc7166","#cc7166","#cc7266","#cc7266","#cc7366","#cc7466","#cc7466","#cc7566","#cc7566","#cc7666","#cc7766","#cc7766","#cc7866","#cc7866","#cc7966","#cc7a66","#cc7a66","#cc7b66","#cc7c66","#cc7c66","#cc7d66","#cc7d66","#cc7e66","#cc7f66","#cc7f66","#cc8066","#cc8066","#cc8166","#cc8266","#cc8266","#cc8366","#cc8366","#cc8466","#cc8566","#cc8566","#cc8666","#cc8766","#cc8766","#cc8866","#cc8866","#cc8966","#cc8a66","#cc8a66","#cc8b66","#cc8b66","#cc8c66","#cc8d66","#cc8d66","#cc8e66","#cc8f66","#cc8f66","#cc9066","#cc9066","#cc9166","#cc9266","#cc9266","#cc9366","#cc9366","#cc9466","#cc9566","#cc9566","#cc9666","#cc9666","#cc9766","#cc9866","#cc9866","#cc9966","#cc9a66","#cc9a66","#cc9b66","#cc9b66","#cc9c66","#cc9d66","#cc9d66","#cc9e66","#cc9e66","#cc9f66","#cca066","#cca066","#cca166","#cca166","#cca266","#cca366","#cca366","#cca466","#cca566","#cca566","#cca666","#cca666","#cca766","#cca866","#cca866","#cca966","#cca966","#ccaa66","#ccab66","#ccab66","#ccac66","#ccac66","#ccad66","#ccae66","#ccae66","#ccaf66","#ccb066","#ccb066","#ccb166","#ccb166","#ccb266","#ccb366","#ccb366","#ccb466","#ccb466","#ccb566","#ccb666","#ccb666","#ccb766","#ccb866","#ccb866","#ccb966","#ccb966","#ccba66","#ccbb66","#ccbb66","#ccbc66","#ccbc66","#ccbd66","#ccbe66","#ccbe66","#ccbf66","#ccbf66","#ccc066","#ccc166","#ccc166","#ccc266","#ccc366","#ccc366","#ccc466","#ccc466","#ccc566","#ccc666","#ccc666","#ccc766","#ccc766","#ccc866","#ccc966","#ccc966","#ccca66","#ccca66","#cccb66","#cbcc66","#cbcc66","#cacc66","#c9cc66","#c9cc66","#c8cc66","#c8cc66","#c7cc66","#c6cc66","#c6cc66","#c5cc66","#c5cc66","#c4cc66","#c3cc66","#c3cc66","#c2cc66","#c2cc66","#c1cc66","#c0cc66","#c0cc66","#bfcc66","#becc66","#becc66","#bdcc66","#bdcc66","#bccc66","#bbcc66","#bbcc66","#bacc66","#bacc66","#b9cc66","#b8cc66","#b8cc66","#b7cc66","#b6cc66","#b6cc66","#b5cc66","#b5cc66","#b4cc66","#b3cc66","#b3cc66","#b2cc66","#b2cc66","#b1cc66","#b0cc66","#b0cc66","#afcc66","#afcc66","#aecc66","#adcc66","#adcc66","#accc66","#abcc66","#abcc66","#aacc66","#aacc66","#a9cc66","#a8cc66","#a8cc66","#a7cc66","#a7cc66","#a6cc66","#a5cc66","#a5cc66","#a4cc66","#a4cc66","#a3cc66","#a2cc66","#a2cc66","#a1cc66","#a0cc66","#a0cc66","#9fcc66","#9fcc66","#9ecc66","#9dcc66","#9dcc66","#9ccc66","#9ccc66","#9bcc66","#9acc66","#9acc66","#99cc66","#99cc66","#98cc66","#97cc66","#97cc66","#96cc66","#95cc66","#95cc66","#94cc66","#94cc66","#93cc66","#92cc66","#92cc66","#91cc66","#91cc66","#90cc66","#8fcc66","#8fcc66","#8ecc66","#8dcc66","#8dcc66","#8ccc66","#8ccc66","#8bcc66","#8acc66","#8acc66","#89cc66","#89cc66","#88cc66","#87cc66","#87cc66","#86cc66","#86cc66","#85cc66","#84cc66","#84cc66","#83cc66","#82cc66","#82cc66","#81cc66","#81cc66","#80cc66","#7fcc66","#7fcc66","#7ecc66","#7ecc66","#7dcc66","#7ccc66","#7ccc66","#7bcc66","#7bcc66","#7acc66","#79cc66","#79cc66","#78cc66","#77cc66","#77cc66","#76cc66","#76cc66","#75cc66","#74cc66","#74cc66","#73cc66","#73cc66","#72cc66","#71cc66","#71cc66","#70cc66","#6fcc66","#6fcc66","#6ecc66","#6ecc66","#6dcc66","#6ccc66","#6ccc66","#6bcc66","#6bcc66","#6acc66","#69cc66","#69cc66","#68cc66","#68cc66","#67cc66","#66cc66","#66cc66","#66cc66","#66cc67","#66cc67","#66cc68","#66cc68","#66cc69","#66cc6a","#66cc6a","#66cc6b","#66cc6b","#66cc6c","#66cc6d","#66cc6d","#66cc6e","#66cc6e","#66cc6f","#66cc70","#66cc70","#66cc71","#66cc72","#66cc72","#66cc73","#66cc73","#66cc74","#66cc75","#66cc75","#66cc76","#66cc76","#66cc77","#66cc78","#66cc78","#66cc79","#66cc79","#66cc7a","#66cc7b","#66cc7b","#66cc7c","#66cc7d","#66cc7d","#66cc7e","#66cc7e","#66cc7f","#66cc80","#66cc80","#66cc81","#66cc81","#66cc82","#66cc83","#66cc83","#66cc84","#66cc85","#66cc85","#66cc86","#66cc86","#66cc87","#66cc88","#66cc88","#66cc89","#66cc89","#66cc8a","#66cc8b","#66cc8b","#66cc8c","#66cc8c","#66cc8d","#66cc8e","#66cc8e","#66cc8f","#66cc90","#66cc90","#66cc91","#66cc91","#66cc92","#66cc93","#66cc93","#66cc94","#66cc94","#66cc95","#66cc96","#66cc96","#66cc97","#66cc97","#66cc98","#66cc99","#66cc99","#66cc9a","#66cc9b","#66cc9b","#66cc9c","#66cc9c","#66cc9d","#66cc9e","#66cc9e","#66cc9f","#66cc9f","#66cca0","#66cca1","#66cca1","#66cca2","#66cca2","#66cca3","#66cca4","#66cca4","#66cca5","#66cca6","#66cca6","#66cca7","#66cca7","#66cca8","#66cca9","#66cca9","#66ccaa","#66ccaa","#66ccab","#66ccac","#66ccac","#66ccad","#66ccae","#66ccae","#66ccaf","#66ccaf","#66ccb0","#66ccb1","#66ccb1","#66ccb2","#66ccb2","#66ccb3","#66ccb4","#66ccb4","#66ccb5","#66ccb5","#66ccb6","#66ccb7","#66ccb7","#66ccb8","#66ccb9","#66ccb9","#66ccba","#66ccba","#66ccbb","#66ccbc","#66ccbc","#66ccbd","#66ccbd","#66ccbe","#66ccbf","#66ccbf","#66ccc0","#66ccc0","#66ccc1","#66ccc2","#66ccc2","#66ccc3","#66ccc4","#66ccc4","#66ccc5","#66ccc5","#66ccc6","#66ccc7","#66ccc7","#66ccc8","#66ccc8","#66ccc9","#66ccca","#66ccca","#66cccb","#66cccc","#66cbcc","#66cacc","#66cacc","#66c9cc","#66c8cc","#66c8cc","#66c7cc","#66c7cc","#66c6cc","#66c5cc","#66c5cc","#66c4cc","#66c4cc","#66c3cc","#66c2cc","#66c2cc","#66c1cc","#66c0cc","#66c0cc","#66bfcc","#66bfcc","#66becc","#66bdcc","#66bdcc","#66bccc","#66bccc","#66bbcc","#66bacc","#66bacc","#66b9cc","#66b9cc","#66b8cc","#66b7cc","#66b7cc","#66b6cc","#66b5cc","#66b5cc","#66b4cc","#66b4cc","#66b3cc","#66b2cc","#66b2cc","#66b1cc","#66b1cc","#66b0cc","#66afcc","#66afcc","#66aecc","#66aecc","#66adcc","#66accc","#66accc","#66abcc","#66aacc","#66aacc","#66a9cc","#66a9cc","#66a8cc","#66a7cc","#66a7cc","#66a6cc","#66a6cc","#66a5cc","#66a4cc","#66a4cc","#66a3cc","#66a2cc","#66a2cc","#66a1cc","#66a1cc","#66a0cc","#669fcc","#669fcc","#669ecc","#669ecc","#669dcc","#669ccc","#669ccc","#669bcc","#669bcc","#669acc","#6699cc","#6699cc","#6698cc","#6697cc","#6697cc","#6696cc","#6696cc","#6695cc","#6694cc","#6694cc","#6693cc","#6693cc","#6692cc","#6691cc","#6691cc","#6690cc","#6690cc","#668fcc","#668ecc","#668ecc","#668dcc","#668ccc","#668ccc","#668bcc","#668bcc","#668acc","#6689cc","#6689cc","#6688cc","#6688cc","#6687cc","#6686cc","#6686cc","#6685cc","#6685cc","#6684cc","#6683cc","#6683cc","#6682cc","#6681cc","#6681cc","#6680cc","#6680cc","#667fcc","#667ecc","#667ecc","#667dcc","#667dcc","#667ccc","#667bcc","#667bcc","#667acc","#6679cc","#6679cc","#6678cc","#6678cc","#6677cc","#6676cc","#6676cc","#6675cc","#6675cc","#6674cc","#6673cc","#6673cc","#6672cc","#6672cc","#6671cc","#6670cc","#6670cc","#666fcc","#666ecc","#666ecc","#666dcc","#666dcc","#666ccc","#666bcc","#666bcc","#666acc","#666acc","#6669cc","#6668cc","#6668cc","#6667cc","#6667cc","#6666cc","#6666cc","#6666cc","#6766cc","#6866cc","#6866cc","#6966cc","#6966cc","#6a66cc","#6b66cc","#6b66cc","#6c66cc","#6c66cc","#6d66cc","#6e66cc","#6e66cc","#6f66cc","#6f66cc","#7066cc","#7166cc","#7166cc","#7266cc","#7366cc","#7366cc","#7466cc","#7466cc","#7566cc","#7666cc","#7666cc","#7766cc","#7766cc","#7866cc","#7966cc","#7966cc","#7a66cc","#7b66cc","#7b66cc","#7c66cc","#7c66cc","#7d66cc","#7e66cc","#7e66cc","#7f66cc","#7f66cc","#8066cc","#8166cc","#8166cc","#8266cc","#8266cc","#8366cc","#8466cc","#8466cc","#8566cc","#8666cc","#8666cc","#8766cc","#8766cc","#8866cc","#8966cc","#8966cc","#8a66cc","#8a66cc","#8b66cc","#8c66cc","#8c66cc","#8d66cc","#8d66cc","#8e66cc","#8f66cc","#8f66cc","#9066cc","#9166cc","#9166cc","#9266cc","#9266cc","#9366cc","#9466cc","#9466cc","#9566cc","#9566cc","#9666cc","#9766cc","#9766cc","#9866cc","#9966cc","#9966cc","#9a66cc","#9a66cc","#9b66cc","#9c66cc","#9c66cc","#9d66cc","#9d66cc","#9e66cc","#9f66cc","#9f66cc","#a066cc","#a066cc","#a166cc","#a266cc","#a266cc","#a366cc","#a466cc","#a466cc","#a566cc","#a566cc","#a666cc","#a766cc","#a766cc","#a866cc","#a866cc","#a966cc","#aa66cc","#aa66cc","#ab66cc","#ab66cc","#ac66cc","#ad66cc","#ad66cc","#ae66cc","#af66cc","#af66cc","#b066cc","#b066cc","#b166cc","#b266cc","#b266cc","#b366cc","#b366cc","#b466cc","#b566cc","#b566cc","#b666cc","#b666cc","#b766cc","#b866cc","#b866cc","#b966cc","#ba66cc","#ba66cc","#bb66cc","#bb66cc","#bc66cc","#bd66cc","#bd66cc","#be66cc","#be66cc","#bf66cc","#c066cc","#c066cc","#c166cc","#c266cc","#c266cc","#c366cc","#c366cc","#c466cc","#c566cc","#c566cc","#c666cc","#c666cc","#c766cc","#c866cc","#c866cc","#c966cc","#c966cc","#ca66cc","#cb66cc","#cb66cc","#cc66cb","#cc66ca","#cc66ca","#cc66c9","#cc66c9","#cc66c8","#cc66c7","#cc66c7","#cc66c6","#cc66c6","#cc66c5","#cc66c4","#cc66c4","#cc66c3","#cc66c3","#cc66c2","#cc66c1","#cc66c1","#cc66c0","#cc66bf","#cc66bf","#cc66be","#cc66be","#cc66bd","#cc66bc","#cc66bc","#cc66bb","#cc66bb","#cc66ba","#cc66b9","#cc66b9","#cc66b8","#cc66b8","#cc66b7","#cc66b6","#cc66b6","#cc66b5","#cc66b4","#cc66b4","#cc66b3","#cc66b3","#cc66b2","#cc66b1","#cc66b1","#cc66b0","#cc66b0","#cc66af","#cc66ae","#cc66ae","#cc66ad","#cc66ac","#cc66ac","#cc66ab","#cc66ab","#cc66aa","#cc66a9","#cc66a9","#cc66a8","#cc66a8","#cc66a7","#cc66a6","#cc66a6","#cc66a5","#cc66a5","#cc66a4","#cc66a3","#cc66a3","#cc66a2","#cc66a1","#cc66a1","#cc66a0","#cc66a0","#cc669f","#cc669e","#cc669e","#cc669d","#cc669d","#cc669c","#cc669b","#cc669b","#cc669a","#cc669a","#cc6699","#cc6698","#cc6698","#cc6697","#cc6696","#cc6696","#cc6695","#cc6695","#cc6694","#cc6693","#cc6693","#cc6692","#cc6692","#cc6691","#cc6690","#cc6690","#cc668f","#cc668f","#cc668e","#cc668d","#cc668d","#cc668c","#cc668b","#cc668b","#cc668a","#cc668a","#cc6689","#cc6688","#cc6688","#cc6687","#cc6687","#cc6686","#cc6685","#cc6685","#cc6684","#cc6683","#cc6683","#cc6682","#cc6682","#cc6681","#cc6680","#cc6680","#cc667f","#cc667f","#cc667e","#cc667d","#cc667d","#cc667c","#cc667c","#cc667b","#cc667a","#cc667a","#cc6679","#cc6678","#cc6678","#cc6677","#cc6677","#cc6676","#cc6675","#cc6675","#cc6674","#cc6674","#cc6673","#cc6672","#cc6672","#cc6671","#cc6671","#cc6670","#cc666f","#cc666f","#cc666e","#cc666d","#cc666d","#cc666c","#cc666c","#cc666b","#cc666a","#cc666a","#cc6669","#cc6669","#cc6668","#cc6667","#cc6667","#cc6666"],"x":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000],"y":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]}},"id":"27dd3e35-4925-4b15-a202-4d72202b6317","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"5c1512b6-2f54-4d04-bbeb-0298790767dd","type":"LinearAxis"}],"left":[{"id":"f362061e-3f8f-43da-b1d9-b01fc43ca140","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"5c1512b6-2f54-4d04-bbeb-0298790767dd","type":"LinearAxis"},{"id":"5d54e7ac-2254-479c-b521-5feaaa06e5f1","type":"Grid"},{"id":"f362061e-3f8f-43da-b1d9-b01fc43ca140","type":"LinearAxis"},{"id":"9a8e5d98-6807-4551-9ccf-5d55121c3a0a","type":"Grid"},{"id":"b8bad2cd-d70a-4b78-9109-298034f84a4f","type":"GlyphRenderer"},{"id":"23d8b021-1f30-458c-904a-7b44331e3ca3","type":"GlyphRenderer"}],"title":{"id":"80c206b8-398d-4f1e-8277-559f674f7d91","type":"Title"},"toolbar":{"id":"5dda185b-9456-4fad-b352-816c55bd6dfd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a66c9b77-79ef-4f92-96d3-b328e4650c71","type":"Range1d"},"x_scale":{"id":"5cdf7c94-208a-41bd-92f5-a5f321040a10","type":"LinearScale"},"y_range":{"id":"932422a6-dd01-4ba6-9a53-dba2fe10e2aa","type":"Range1d"},"y_scale":{"id":"46a26514-b13d-4cfc-8316-25b1754a95eb","type":"LinearScale"}},"id":"b951b504-8f28-41e3-9318-33e0da7f3132","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"272d4d42-6ed3-4948-96d7-c63c3835b67c","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"move sliders to change"},"id":"80c206b8-398d-4f1e-8277-559f674f7d91","type":"Title"},{"attributes":{"callback":null,"end":8,"start":-8},"id":"a66c9b77-79ef-4f92-96d3-b328e4650c71","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5dda185b-9456-4fad-b352-816c55bd6dfd","type":"Toolbar"},{"attributes":{"children":[{"id":"1b5fb103-9e89-46c3-ada4-d64a0876ffb4","type":"WidgetBox"},{"id":"05b36366-e100-4871-8a9a-17e95e328551","type":"Column"}]},"id":"db09428e-217d-4c99-a46c-457488e8091d","type":"Row"},{"attributes":{"fill_color":{"field":"color"},"height":{"units":"data","value":10},"width":{"units":"data","value":18},"x":{"value":0},"y":{"value":0}},"id":"624c6667-4485-486c-ab90-069338bd0e12","type":"Rect"},{"attributes":{},"id":"5cdf7c94-208a-41bd-92f5-a5f321040a10","type":"LinearScale"},{"attributes":{"callback":null,"end":4,"start":-4},"id":"932422a6-dd01-4ba6-9a53-dba2fe10e2aa","type":"Range1d"},{"attributes":{},"id":"46a26514-b13d-4cfc-8316-25b1754a95eb","type":"LinearScale"},{"attributes":{"children":[{"id":"b951b504-8f28-41e3-9318-33e0da7f3132","subtype":"Figure","type":"Plot"},{"id":"ae9efe9f-fab6-4637-a56c-bb275f020cbb","subtype":"Figure","type":"Plot"}]},"id":"05b36366-e100-4871-8a9a-17e95e328551","type":"Column"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b951b504-8f28-41e3-9318-33e0da7f3132","subtype":"Figure","type":"Plot"},"ticker":{"id":"85d731e4-a05c-42b0-ae5f-a6f46e40780e","type":"BasicTicker"}},"id":"5d54e7ac-2254-479c-b521-5feaaa06e5f1","type":"Grid"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1018f55c-a200-47f7-9891-358e1a891d8e","type":"BasicTickFormatter"},"major_label_text_color":{"value":null},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"b951b504-8f28-41e3-9318-33e0da7f3132","subtype":"Figure","type":"Plot"},"ticker":{"id":"85d731e4-a05c-42b0-ae5f-a6f46e40780e","type":"BasicTicker"}},"id":"5c1512b6-2f54-4d04-bbeb-0298790767dd","type":"LinearAxis"},{"attributes":{},"id":"85d731e4-a05c-42b0-ae5f-a6f46e40780e","type":"BasicTicker"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"abd5dcea-a70a-43de-9553-777ce2474b3b","type":"BasicTickFormatter"},"major_label_text_color":{"value":null},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"b951b504-8f28-41e3-9318-33e0da7f3132","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ab7b6e8-7a36-48a6-ae9c-d07319caafaa","type":"BasicTicker"}},"id":"f362061e-3f8f-43da-b1d9-b01fc43ca140","type":"LinearAxis"},{"attributes":{"children":[{"id":"5eb33080-c294-434f-9821-e0d8d13e82ad","type":"Slider"},{"id":"60cb3af2-2d09-4b67-8f05-e92564736e8a","type":"Slider"},{"id":"2a1a08c8-a48d-4b33-9e35-c41f653f1e9e","type":"Slider"}]},"id":"1b5fb103-9e89-46c3-ada4-d64a0876ffb4","type":"WidgetBox"},{"attributes":{},"id":"4ab7b6e8-7a36-48a6-ae9c-d07319caafaa","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"b951b504-8f28-41e3-9318-33e0da7f3132","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ab7b6e8-7a36-48a6-ae9c-d07319caafaa","type":"BasicTicker"}},"id":"9a8e5d98-6807-4551-9ccf-5d55121c3a0a","type":"Grid"},{"attributes":{},"id":"abd5dcea-a70a-43de-9553-777ce2474b3b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":10},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":18},"x":{"value":0},"y":{"value":0}},"id":"21be34df-310b-41e2-bf8c-b24aacddefc3","type":"Rect"},{"attributes":{"data_source":{"id":"1b2dd6c9-a6e4-4499-8ee7-9092d065b6bf","type":"ColumnDataSource"},"glyph":{"id":"624c6667-4485-486c-ab90-069338bd0e12","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21be34df-310b-41e2-bf8c-b24aacddefc3","type":"Rect"},"selection_glyph":null,"view":{"id":"4dc6f8f5-4bb8-4788-b261-9eb49141d210","type":"CDSView"}},"id":"b8bad2cd-d70a-4b78-9109-298034f84a4f","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"hover over color"},"id":"37ce44ad-87e0-41ae-bd51-ef1666a4f7cc","type":"Title"},{"attributes":{},"id":"1018f55c-a200-47f7-9891-358e1a891d8e","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"a3d41fcb-d057-42e3-afb0-4f03d38fd300","type":"CustomJS"},"end":255,"start":0,"title":"R","value":255},"id":"5eb33080-c294-434f-9821-e0d8d13e82ad","type":"Slider"},{"attributes":{"callback":null,"end":1000},"id":"2de80d95-22b7-4b77-bcdc-bb6d478b37a3","type":"Range1d"},{"attributes":{"source":{"id":"1b2dd6c9-a6e4-4499-8ee7-9092d065b6bf","type":"ColumnDataSource"}},"id":"4dc6f8f5-4bb8-4788-b261-9eb49141d210","type":"CDSView"},{"attributes":{"data_source":{"id":"1b2dd6c9-a6e4-4499-8ee7-9092d065b6bf","type":"ColumnDataSource"},"glyph":{"id":"938f087a-9f76-4e3b-960c-fb2cb90cbd8f","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dbe339cd-8257-4fe7-bc2f-e0a2005994ba","type":"Text"},"selection_glyph":null,"view":{"id":"5ecee914-5110-458a-973d-18b3fe7feb4d","type":"CDSView"}},"id":"23d8b021-1f30-458c-904a-7b44331e3ca3","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"14d2cb4e-6420-45ab-87ee-e59ae51d83a3","type":"HoverTool"}]},"id":"895cb917-77c6-4aa5-839a-121f443ec971","type":"Toolbar"},{"attributes":{},"id":"a893bd8c-e155-4488-966c-00ba0fe5c9f6","type":"LinearScale"},{"attributes":{"callback":null,"end":10},"id":"060a2ab1-a6ad-4840-ae8e-ced1f9adaf5b","type":"Range1d"},{"attributes":{"text":{"field":"color"},"text_align":"center","text_alpha":{"value":0.6667},"text_baseline":"middle","text_color":{"field":"text_color"},"text_font_size":{"value":"36pt"},"x":{"value":0},"y":{"value":0}},"id":"938f087a-9f76-4e3b-960c-fb2cb90cbd8f","type":"Text"}],"root_ids":["db09428e-217d-4c99-a46c-457488e8091d"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"b6da53ba-1596-451b-afe9-533f0ead1f3c","elementid":"2858a616-6a18-4b90-8cec-de829663af57","modelid":"db09428e-217d-4c99-a46c-457488e8091d"}];
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