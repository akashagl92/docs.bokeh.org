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
      };var element = document.getElementById("0acbb981-f5fb-402a-8b9d-238a0555bb44");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0acbb981-f5fb-402a-8b9d-238a0555bb44' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"26fe106f-8e58-4ea4-b325-d279ac21ebc3":{"roots":{"references":[{"attributes":{},"id":"1945293b-85ca-419c-bb34-2a251116ec50","type":"BasicTickFormatter"},{"attributes":{},"id":"5d14c74f-5037-4316-8940-f8478e5a7a47","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"UPUDRl6eBUCSR54x3ycFQLI7+mQIqQ5AGD730mtbDEAX0HVR7rUTQB841WtNfhNA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"eDGEOkNv5T/AqaNxi4fnP0yU++1SYPs/E4TohY5s+j9egyAH2sYFQJb8eghJ7gVA","dtype":"float64","shape":[6]}}},"id":"0bd1b635-7ba8-492f-89bc-e1d76699bb6f","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"25f5808f-a7db-4514-bb70-c02705e2fa9d","type":"CategoricalAxis"}],"left":[{"id":"cc24ab6c-1ad8-4de8-8411-b45e9bf643a1","type":"LinearAxis"}],"renderers":[{"id":"25f5808f-a7db-4514-bb70-c02705e2fa9d","type":"CategoricalAxis"},{"id":"4b0cc53d-efe1-4e17-91d6-17dd24569e5f","type":"Grid"},{"id":"cc24ab6c-1ad8-4de8-8411-b45e9bf643a1","type":"LinearAxis"},{"id":"a95ec1c3-ecbe-40e7-9d11-a04901b23725","type":"Grid"},{"id":"47257687-1e93-4aeb-b61e-2bbd8d224303","type":"GlyphRenderer"},{"id":"70ef8220-1ac2-4a89-9a1d-0d31df879b1d","type":"GlyphRenderer"},{"id":"0f543f38-3ba4-4da1-8934-51f69b5898e3","type":"GlyphRenderer"},{"id":"a3fa34fa-231b-4c8c-963f-bbd6d93253fc","type":"GlyphRenderer"},{"id":"d9e81ef3-e8be-47cc-81d8-ab9022b4451f","type":"GlyphRenderer"},{"id":"eab07900-68ba-4ce1-bd87-848907018ce3","type":"GlyphRenderer"},{"id":"16d44658-ea4a-424b-9080-71ac94bd4c82","type":"GlyphRenderer"}],"title":{"id":"e37a5ef7-0768-40fe-901e-15de018022fd","type":"Title"},"toolbar":{"id":"7fb9def8-e742-4493-ba4f-8eccdf93c59d","type":"Toolbar"},"x_range":{"id":"02034bfe-a38a-4052-9cb8-21230b733877","type":"FactorRange"},"x_scale":{"id":"5d14c74f-5037-4316-8940-f8478e5a7a47","type":"CategoricalScale"},"y_range":{"id":"68c65b47-1ba7-44a7-bd09-41d83218d577","type":"DataRange1d"},"y_scale":{"id":"b2e1aa8f-b527-4f7e-aa29-28fe5cb163cf","type":"LinearScale"}},"id":"40197817-e97c-45ee-a2ce-f7aa27b5f8c4","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"b31b7489-af6f-401f-a64f-4bba7fa613c7","type":"VBar"},{"attributes":{"callback":null},"id":"68c65b47-1ba7-44a7-bd09-41d83218d577","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"62f3e122-3aaa-4c69-a417-d8c090667604","type":"Segment"},{"attributes":{},"id":"bbf38ec7-1e6c-4789-8c1f-6ce8fcb5e4f5","type":"CategoricalTicker"},{"attributes":{"source":{"id":"4f6413ea-d748-405d-9da1-8391e0ae7553","type":"ColumnDataSource"}},"id":"4035bc3a-b261-4b64-b4d1-b2c518a1accd","type":"CDSView"},{"attributes":{},"id":"b2e1aa8f-b527-4f7e-aa29-28fe5cb163cf","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"7fe907f7-f2c6-4c1f-90d2-d785b675e314","type":"VBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8584098-e776-4f89-9cbc-4cd363a4b88e","type":"Rect"},{"attributes":{},"id":"54d9480b-a77f-48cc-8c93-0d7d2865bafd","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5b674498-bc96-40b5-b0b4-a3917b6a6ddb","type":"Segment"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"eDGEOkNv5T/AqaNxi4fnP0yU++1SYPs/E4TohY5s+j9egyAH2sYFQJb8eghJ7gVA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"rcro5uqvjD8Glk4t6CqzP5d49E74C/A/lxFsOc2p7z9KxqLjCQIAQChU+7KL+v8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"4f6413ea-d748-405d-9da1-8391e0ae7553","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7ff0809e-5c58-4d15-8ec2-072545fd6735","type":"ColumnDataSource"}},"id":"12f86a28-c60d-452a-94c7-eaff766c3d31","type":"CDSView"},{"attributes":{"formatter":{"id":"1945293b-85ca-419c-bb34-2a251116ec50","type":"BasicTickFormatter"},"plot":{"id":"40197817-e97c-45ee-a2ce-f7aa27b5f8c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"54d9480b-a77f-48cc-8c93-0d7d2865bafd","type":"BasicTicker"}},"id":"cc24ab6c-1ad8-4de8-8411-b45e9bf643a1","type":"LinearAxis"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"40197817-e97c-45ee-a2ce-f7aa27b5f8c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"54d9480b-a77f-48cc-8c93-0d7d2865bafd","type":"BasicTicker"}},"id":"a95ec1c3-ecbe-40e7-9d11-a04901b23725","type":"Grid"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"8670d67e-ff3f-436c-b8fd-d9d92bcc675d","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"60f1de40-0997-4ad2-bb32-175401ad2aab","type":"Rect"},{"attributes":{"plot":null,"text":""},"id":"e37a5ef7-0768-40fe-901e-15de018022fd","type":"Title"},{"attributes":{"formatter":{"id":"6aaa3152-7cd2-4b91-b5bf-d16ae8934772","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"40197817-e97c-45ee-a2ce-f7aa27b5f8c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbf38ec7-1e6c-4789-8c1f-6ce8fcb5e4f5","type":"CategoricalTicker"}},"id":"25f5808f-a7db-4514-bb70-c02705e2fa9d","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"UPUDRl6eBUCSR54x3ycFQLI7+mQIqQ5AGD730mtbDEAX0HVR7rUTQB841WtNfhNA","dtype":"float64","shape":[6]}}},"id":"ffd51fc3-cd55-4082-b2bc-68b4f1da1049","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"02034bfe-a38a-4052-9cb8-21230b733877","type":"FactorRange"},{"attributes":{"data_source":{"id":"4b19e33d-a09b-40e7-970d-6bf9fba1a70b","type":"ColumnDataSource"},"glyph":{"id":"98190953-a526-4913-92a1-1d16d9755565","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62f3e122-3aaa-4c69-a417-d8c090667604","type":"Segment"},"selection_glyph":null,"view":{"id":"c83782c8-68c1-4b61-982b-0ba0cd436f6f","type":"CDSView"}},"id":"70ef8220-1ac2-4a89-9a1d-0d31df879b1d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ffd51fc3-cd55-4082-b2bc-68b4f1da1049","type":"ColumnDataSource"},"glyph":{"id":"44ced575-6e57-4951-9f46-fa75b9935750","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22484d16-03e8-49ae-9156-bd249e05c81a","type":"Rect"},"selection_glyph":null,"view":{"id":"111f0372-8aa5-4aee-87b4-3dc75d3e5b85","type":"CDSView"}},"id":"eab07900-68ba-4ce1-bd87-848907018ce3","type":"GlyphRenderer"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"98190953-a526-4913-92a1-1d16d9755565","type":"Segment"},{"attributes":{},"id":"50e79689-ce06-4a6c-9139-2462197261e8","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"uk/IK73KBMDKsJqxwZIDwLxF2YGrCfu/QETQWNcT979gJ5z4UdvAv5RH1TIj2OK/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"C5GDruDs5b+cTpVxFTPhv5fzq8Km/NI//s88wiHs2D+nNTLpBQf0P/ZeYafPHvU/","dtype":"float64","shape":[6]}}},"id":"4b19e33d-a09b-40e7-970d-6bf9fba1a70b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"uk/IK73KBMDKsJqxwZIDwLxF2YGrCfu/QETQWNcT979gJ5z4UdvAv5RH1TIj2OK/","dtype":"float64","shape":[6]}}},"id":"4998b4e8-47ac-4cca-8b31-c109775a0477","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4f6413ea-d748-405d-9da1-8391e0ae7553","type":"ColumnDataSource"},"glyph":{"id":"7fe907f7-f2c6-4c1f-90d2-d785b675e314","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be873f39-2f48-4bb7-b65c-2fb12d08bbc7","type":"VBar"},"selection_glyph":null,"view":{"id":"4035bc3a-b261-4b64-b4d1-b2c518a1accd","type":"CDSView"}},"id":"0f543f38-3ba4-4da1-8934-51f69b5898e3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c4d4b33-6ba5-40c9-952d-d3166af3d1c4","type":"Circle"},{"attributes":{"data_source":{"id":"0bd1b635-7ba8-492f-89bc-e1d76699bb6f","type":"ColumnDataSource"},"glyph":{"id":"8670d67e-ff3f-436c-b8fd-d9d92bcc675d","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5b674498-bc96-40b5-b0b4-a3917b6a6ddb","type":"Segment"},"selection_glyph":null,"view":{"id":"f68799f3-659d-4f7e-b76e-f4a2200f9771","type":"CDSView"}},"id":"47257687-1e93-4aeb-b61e-2bbd8d224303","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4998b4e8-47ac-4cca-8b31-c109775a0477","type":"ColumnDataSource"},"glyph":{"id":"f8584098-e776-4f89-9cbc-4cd363a4b88e","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"60f1de40-0997-4ad2-bb32-175401ad2aab","type":"Rect"},"selection_glyph":null,"view":{"id":"bb84db20-3282-49c9-9983-f8e83b57e442","type":"CDSView"}},"id":"d9e81ef3-e8be-47cc-81d8-ab9022b4451f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4b19e33d-a09b-40e7-970d-6bf9fba1a70b","type":"ColumnDataSource"}},"id":"c83782c8-68c1-4b61-982b-0ba0cd436f6f","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"rcro5uqvjD8Glk4t6CqzP5d49E74C/A/lxFsOc2p7z9KxqLjCQIAQChU+7KL+v8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"C5GDruDs5b+cTpVxFTPhv5fzq8Km/NI//s88wiHs2D+nNTLpBQf0P/ZeYafPHvU/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"7ff0809e-5c58-4d15-8ec2-072545fd6735","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4998b4e8-47ac-4cca-8b31-c109775a0477","type":"ColumnDataSource"}},"id":"bb84db20-3282-49c9-9983-f8e83b57e442","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"50e79689-ce06-4a6c-9139-2462197261e8","type":"SaveTool"}]},"id":"7fb9def8-e742-4493-ba4f-8eccdf93c59d","type":"Toolbar"},{"attributes":{"source":{"id":"5b056f2e-9a93-4bd0-aedc-a9f367866252","type":"ColumnDataSource"}},"id":"e9709544-f39b-4689-8b6a-bef4dd18ed80","type":"CDSView"},{"attributes":{"data_source":{"id":"7ff0809e-5c58-4d15-8ec2-072545fd6735","type":"ColumnDataSource"},"glyph":{"id":"dab9691c-3dad-4b89-b610-1efd09f4edd6","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b31b7489-af6f-401f-a64f-4bba7fa613c7","type":"VBar"},"selection_glyph":null,"view":{"id":"12f86a28-c60d-452a-94c7-eaff766c3d31","type":"CDSView"}},"id":"a3fa34fa-231b-4c8c-963f-bbd6d93253fc","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","b","b","b","b","c","c","d","d","d","e","f","f"],"y":[2.9480892828107255,-3.1311207681343105,2.647549647371871,3.0740401046810075,-3.383197315812877,-2.494583983656699,4.143995987372071,4.277098877344299,3.592091650200367,3.944506361341067,3.6514886567779956,4.964335386335713,5.090276760460801,5.5018035613852945]}},"id":"5b056f2e-9a93-4bd0-aedc-a9f367866252","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5b056f2e-9a93-4bd0-aedc-a9f367866252","type":"ColumnDataSource"},"glyph":{"id":"7ef5ffef-6281-489f-ae04-fc8889c57163","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2c4d4b33-6ba5-40c9-952d-d3166af3d1c4","type":"Circle"},"selection_glyph":null,"view":{"id":"e9709544-f39b-4689-8b6a-bef4dd18ed80","type":"CDSView"}},"id":"16d44658-ea4a-424b-9080-71ac94bd4c82","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ef5ffef-6281-489f-ae04-fc8889c57163","type":"Circle"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"be873f39-2f48-4bb7-b65c-2fb12d08bbc7","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"22484d16-03e8-49ae-9156-bd249e05c81a","type":"Rect"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"dab9691c-3dad-4b89-b610-1efd09f4edd6","type":"VBar"},{"attributes":{"source":{"id":"ffd51fc3-cd55-4082-b2bc-68b4f1da1049","type":"ColumnDataSource"}},"id":"111f0372-8aa5-4aee-87b4-3dc75d3e5b85","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"40197817-e97c-45ee-a2ce-f7aa27b5f8c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbf38ec7-1e6c-4789-8c1f-6ce8fcb5e4f5","type":"CategoricalTicker"}},"id":"4b0cc53d-efe1-4e17-91d6-17dd24569e5f","type":"Grid"},{"attributes":{},"id":"6aaa3152-7cd2-4b91-b5bf-d16ae8934772","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"44ced575-6e57-4951-9f46-fa75b9935750","type":"Rect"},{"attributes":{"source":{"id":"0bd1b635-7ba8-492f-89bc-e1d76699bb6f","type":"ColumnDataSource"}},"id":"f68799f3-659d-4f7e-b76e-f4a2200f9771","type":"CDSView"}],"root_ids":["40197817-e97c-45ee-a2ce-f7aa27b5f8c4"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"26fe106f-8e58-4ea4-b325-d279ac21ebc3","elementid":"0acbb981-f5fb-402a-8b9d-238a0555bb44","modelid":"40197817-e97c-45ee-a2ce-f7aa27b5f8c4"}];
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