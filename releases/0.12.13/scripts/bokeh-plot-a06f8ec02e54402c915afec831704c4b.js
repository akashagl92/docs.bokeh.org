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
      };var element = document.getElementById("27f6ba25-04be-4458-b855-8ab13eba17c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '27f6ba25-04be-4458-b855-8ab13eba17c2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1fc19364-6676-4841-8efe-85738c290474":{"roots":{"references":[{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"4cce1290-3f37-4e69-8581-810bb233b091","type":"BasicTickFormatter"},"plot":{"id":"f3c2e6f2-8732-4fbf-9555-2a4325e000d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f118a629-2a64-4d99-be6c-2d6b93187f7f","type":"BasicTicker"}},"id":"f9a4dde0-8cb7-4131-8ba3-0140250a8660","type":"LinearAxis"},{"attributes":{},"id":"023914d2-5ab3-4512-a47f-c167d5198877","type":"ResetTool"},{"attributes":{"formatter":{"id":"b8c21c2f-e31c-4cb9-8fad-e26b7a88db9f","type":"CategoricalTickFormatter"},"plot":{"id":"f3c2e6f2-8732-4fbf-9555-2a4325e000d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"c61b1fde-9bd2-4978-9ed9-3ef004142343","type":"CategoricalTicker"}},"id":"f995a28b-58c0-4a92-a583-e12a06994de4","type":"CategoricalAxis"},{"attributes":{},"id":"c61b1fde-9bd2-4978-9ed9-3ef004142343","type":"CategoricalTicker"},{"attributes":{},"id":"8c2d0bff-4879-4731-943d-ea3966a76a1a","type":"WheelZoomTool"},{"attributes":{},"id":"4cce1290-3f37-4e69-8581-810bb233b091","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b1d4e010-563b-4b5f-9321-f4afd154be77","type":"PanTool"},{"id":"8c2d0bff-4879-4731-943d-ea3966a76a1a","type":"WheelZoomTool"},{"id":"021a72a3-64a3-42a2-b7ac-04defc051512","type":"BoxZoomTool"},{"id":"952df88f-762e-4672-9b60-e2ff5675caf0","type":"SaveTool"},{"id":"023914d2-5ab3-4512-a47f-c167d5198877","type":"ResetTool"},{"id":"71226515-6759-4e8f-acdd-79a7880f9e59","type":"HelpTool"}]},"id":"046e5ad7-7d28-4fd8-b063-6f65eaa0c02a","type":"Toolbar"},{"attributes":{"data_source":{"id":"2e51d63f-281f-4fd3-a920-71c17cd7cd25","type":"ColumnDataSource"},"glyph":{"id":"7bea1448-6d7c-41ba-bc15-8dbf47587268","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c6984e7f-12a4-4a75-ba8f-b542b335ce25","type":"HBar"},"selection_glyph":null,"view":{"id":"2f4aff81-dbc3-4882-bdc6-0b444060a656","type":"CDSView"}},"id":"499b4475-f821-43ec-97b8-f668a8fd46a9","type":"GlyphRenderer"},{"attributes":{},"id":"952df88f-762e-4672-9b60-e2ff5675caf0","type":"SaveTool"},{"attributes":{"overlay":{"id":"12fac5be-5547-485e-a1e4-65a4ef9b991c","type":"BoxAnnotation"}},"id":"021a72a3-64a3-42a2-b7ac-04defc051512","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"7bea1448-6d7c-41ba-bc15-8dbf47587268","type":"HBar"},{"attributes":{},"id":"f118a629-2a64-4d99-be6c-2d6b93187f7f","type":"BasicTicker"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"86f44deb-2205-495c-9db9-e75e45b09923","type":"Range1d"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"f3c2e6f2-8732-4fbf-9555-2a4325e000d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"c61b1fde-9bd2-4978-9ed9-3ef004142343","type":"CategoricalTicker"}},"id":"8954da18-7bde-4f7c-8d94-ea1af467ec5a","type":"Grid"},{"attributes":{},"id":"71226515-6759-4e8f-acdd-79a7880f9e59","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"2e51d63f-281f-4fd3-a920-71c17cd7cd25","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12fac5be-5547-485e-a1e4-65a4ef9b991c","type":"BoxAnnotation"},{"attributes":{},"id":"3e0184d3-dadf-4c2f-afb2-8fab1ca5eb9f","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"c6984e7f-12a4-4a75-ba8f-b542b335ce25","type":"HBar"},{"attributes":{},"id":"b1d4e010-563b-4b5f-9321-f4afd154be77","type":"PanTool"},{"attributes":{},"id":"2decfa6a-51ac-4f0f-96e7-39bbcf04414c","type":"LinearScale"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"2327034e-c5f5-4901-8bf1-3954ee5576aa","type":"FactorRange"},{"attributes":{"source":{"id":"2e51d63f-281f-4fd3-a920-71c17cd7cd25","type":"ColumnDataSource"}},"id":"2f4aff81-dbc3-4882-bdc6-0b444060a656","type":"CDSView"},{"attributes":{},"id":"b8c21c2f-e31c-4cb9-8fad-e26b7a88db9f","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"f9a4dde0-8cb7-4131-8ba3-0140250a8660","type":"LinearAxis"}],"left":[{"id":"f995a28b-58c0-4a92-a583-e12a06994de4","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"f9a4dde0-8cb7-4131-8ba3-0140250a8660","type":"LinearAxis"},{"id":"be811b58-f91c-4de1-b336-4c9afc41a5de","type":"Grid"},{"id":"f995a28b-58c0-4a92-a583-e12a06994de4","type":"CategoricalAxis"},{"id":"8954da18-7bde-4f7c-8d94-ea1af467ec5a","type":"Grid"},{"id":"12fac5be-5547-485e-a1e4-65a4ef9b991c","type":"BoxAnnotation"},{"id":"499b4475-f821-43ec-97b8-f668a8fd46a9","type":"GlyphRenderer"}],"title":{"id":"a47c16c3-6340-4ec7-8222-afed691c4842","type":"Title"},"toolbar":{"id":"046e5ad7-7d28-4fd8-b063-6f65eaa0c02a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"86f44deb-2205-495c-9db9-e75e45b09923","type":"Range1d"},"x_scale":{"id":"2decfa6a-51ac-4f0f-96e7-39bbcf04414c","type":"LinearScale"},"y_range":{"id":"2327034e-c5f5-4901-8bf1-3954ee5576aa","type":"FactorRange"},"y_scale":{"id":"3e0184d3-dadf-4c2f-afb2-8fab1ca5eb9f","type":"CategoricalScale"}},"id":"f3c2e6f2-8732-4fbf-9555-2a4325e000d2","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"a47c16c3-6340-4ec7-8222-afed691c4842","type":"Title"},{"attributes":{"plot":{"id":"f3c2e6f2-8732-4fbf-9555-2a4325e000d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f118a629-2a64-4d99-be6c-2d6b93187f7f","type":"BasicTicker"}},"id":"be811b58-f91c-4de1-b336-4c9afc41a5de","type":"Grid"}],"root_ids":["f3c2e6f2-8732-4fbf-9555-2a4325e000d2"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"1fc19364-6676-4841-8efe-85738c290474","elementid":"27f6ba25-04be-4458-b855-8ab13eba17c2","modelid":"f3c2e6f2-8732-4fbf-9555-2a4325e000d2"}];
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