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
      };var element = document.getElementById("bb297242-c1dc-423f-8793-dfcee38c5de9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb297242-c1dc-423f-8793-dfcee38c5de9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"da821509-35cb-4dd3-a1f1-d39640c9cece":{"roots":{"references":[{"attributes":{},"id":"a012ab7c-b8d9-49d1-8b5b-0cbc14336fd8","type":"LinearScale"},{"attributes":{"callback":null},"id":"3534d15e-20ee-4561-973b-09bfc77fb7f8","type":"DataRange1d"},{"attributes":{},"id":"349c39f9-bfbf-456b-a9d5-747883c85e4a","type":"LinearScale"},{"attributes":{},"id":"8ea563cf-97bd-4064-b166-341677baeea8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"67c1c953-effd-4326-9a8b-3780f4165c33","subtype":"Figure","type":"Plot"},"ticker":{"id":"390338be-0d75-4b5d-90c5-adf45fd79bb3","type":"BasicTicker"}},"id":"21bc6009-2555-4cc9-b7e6-07559eac9ab7","type":"Grid"},{"attributes":{"formatter":{"id":"2e2c6c53-ab6d-4a59-967b-e69ca0744413","type":"BasicTickFormatter"},"plot":{"id":"67c1c953-effd-4326-9a8b-3780f4165c33","subtype":"Figure","type":"Plot"},"ticker":{"id":"390338be-0d75-4b5d-90c5-adf45fd79bb3","type":"BasicTicker"}},"id":"99b70a6c-3b4e-4192-9018-8707f1ce43fc","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8ea563cf-97bd-4064-b166-341677baeea8","type":"BasicTickFormatter"},"plot":{"id":"67c1c953-effd-4326-9a8b-3780f4165c33","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff1d88b7-1eb0-4040-bd7c-3969a4f5e249","type":"BasicTicker"}},"id":"9dacf843-8e4e-4482-93e7-89ab0c24a319","type":"LinearAxis"},{"attributes":{},"id":"390338be-0d75-4b5d-90c5-adf45fd79bb3","type":"BasicTicker"},{"attributes":{},"id":"ff1d88b7-1eb0-4040-bd7c-3969a4f5e249","type":"BasicTicker"},{"attributes":{},"id":"986bfadc-0f13-4d6e-8d53-fffd063643e4","type":"ResetTool"},{"attributes":{"source":{"id":"ba3d5889-52ab-4e5d-b137-181a667a7dd3","type":"ColumnDataSource"}},"id":"4877d693-7319-495d-a0a6-fbaef3426bf0","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"67c1c953-effd-4326-9a8b-3780f4165c33","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff1d88b7-1eb0-4040-bd7c-3969a4f5e249","type":"BasicTicker"}},"id":"83281733-614e-483c-ae6b-3e6ad9d64c6d","type":"Grid"},{"attributes":{"data_source":{"id":"ba3d5889-52ab-4e5d-b137-181a667a7dd3","type":"ColumnDataSource"},"glyph":{"id":"8b58bd8c-cc80-4c88-bcd7-ecdec779866a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4871105a-9132-45fe-a814-453e8a65172c","type":"Circle"},"selection_glyph":null,"view":{"id":"4877d693-7319-495d-a0a6-fbaef3426bf0","type":"CDSView"}},"id":"5c5cc3d6-ff22-49f5-b1d5-b8418a1d6dad","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"4871105a-9132-45fe-a814-453e8a65172c","type":"Circle"},{"attributes":{"overlay":{"id":"d6f4f872-e521-4a2d-b108-d3eb6a43a29c","type":"BoxAnnotation"}},"id":"d8966ead-81de-4b8c-af20-a94c9f6ca154","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"56511ce6-09b9-40f1-be5b-8ddfda62e5b1","type":"PolyAnnotation"}},"id":"511b4eba-322d-4309-bcba-461b5973a1df","type":"LassoSelectTool"},{"attributes":{},"id":"2e2c6c53-ab6d-4a59-967b-e69ca0744413","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"ba3d5889-52ab-4e5d-b137-181a667a7dd3","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"99b70a6c-3b4e-4192-9018-8707f1ce43fc","type":"LinearAxis"}],"left":[{"id":"9dacf843-8e4e-4482-93e7-89ab0c24a319","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"99b70a6c-3b4e-4192-9018-8707f1ce43fc","type":"LinearAxis"},{"id":"21bc6009-2555-4cc9-b7e6-07559eac9ab7","type":"Grid"},{"id":"9dacf843-8e4e-4482-93e7-89ab0c24a319","type":"LinearAxis"},{"id":"83281733-614e-483c-ae6b-3e6ad9d64c6d","type":"Grid"},{"id":"3625e928-c261-470d-aa7c-e01b75c0f133","type":"BoxAnnotation"},{"id":"d6f4f872-e521-4a2d-b108-d3eb6a43a29c","type":"BoxAnnotation"},{"id":"56511ce6-09b9-40f1-be5b-8ddfda62e5b1","type":"PolyAnnotation"},{"id":"5c5cc3d6-ff22-49f5-b1d5-b8418a1d6dad","type":"GlyphRenderer"}],"title":{"id":"16e711db-c6f4-41e1-8b65-cc61c29b333a","type":"Title"},"toolbar":{"id":"301892d9-f191-40b9-a7b9-46b7e0efe7ad","type":"Toolbar"},"x_range":{"id":"abd88bae-ed7a-426d-b885-2c46c9d638fe","type":"DataRange1d"},"x_scale":{"id":"a012ab7c-b8d9-49d1-8b5b-0cbc14336fd8","type":"LinearScale"},"y_range":{"id":"3534d15e-20ee-4561-973b-09bfc77fb7f8","type":"DataRange1d"},"y_scale":{"id":"349c39f9-bfbf-456b-a9d5-747883c85e4a","type":"LinearScale"}},"id":"67c1c953-effd-4326-9a8b-3780f4165c33","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"3625e928-c261-470d-aa7c-e01b75c0f133","type":"BoxAnnotation"},"renderers":[{"id":"5c5cc3d6-ff22-49f5-b1d5-b8418a1d6dad","type":"GlyphRenderer"}]},"id":"a60af43c-25e5-45a4-8164-c9400fbe9cbe","type":"BoxSelectTool"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"16e711db-c6f4-41e1-8b65-cc61c29b333a","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3625e928-c261-470d-aa7c-e01b75c0f133","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"abd88bae-ed7a-426d-b885-2c46c9d638fe","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d6f4f872-e521-4a2d-b108-d3eb6a43a29c","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a60af43c-25e5-45a4-8164-c9400fbe9cbe","type":"BoxSelectTool"},{"id":"d8966ead-81de-4b8c-af20-a94c9f6ca154","type":"BoxZoomTool"},{"id":"511b4eba-322d-4309-bcba-461b5973a1df","type":"LassoSelectTool"},{"id":"986bfadc-0f13-4d6e-8d53-fffd063643e4","type":"ResetTool"}]},"id":"301892d9-f191-40b9-a7b9-46b7e0efe7ad","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b58bd8c-cc80-4c88-bcd7-ecdec779866a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"56511ce6-09b9-40f1-be5b-8ddfda62e5b1","type":"PolyAnnotation"}],"root_ids":["67c1c953-effd-4326-9a8b-3780f4165c33"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"da821509-35cb-4dd3-a1f1-d39640c9cece","elementid":"bb297242-c1dc-423f-8793-dfcee38c5de9","modelid":"67c1c953-effd-4326-9a8b-3780f4165c33"}];
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