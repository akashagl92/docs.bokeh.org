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
      };var element = document.getElementById("1e2ac6ee-e0aa-4343-867f-dff57cf9ed2f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1e2ac6ee-e0aa-4343-867f-dff57cf9ed2f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a7a6c21a-e6ee-4f71-8283-4a538c3575b3":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"73d05af8-9e95-49cd-beb2-9ca087cb702b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4b2d51c-a54b-4624-92e1-e957ae468e88","type":"BasicTicker"}},"id":"1ec62a91-30a5-431e-9c36-67d4db2e6a5d","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"46838101-ad60-4bc7-b33d-dbb484e0ff62","type":"Circle"},{"attributes":{},"id":"7fed5816-3217-459b-acf6-54a901d8c870","type":"LinearScale"},{"attributes":{},"id":"919e7122-39e6-4baf-b64c-ffab43028f8e","type":"PanTool"},{"attributes":{},"id":"563b89cd-30e3-4989-8903-65e28957500e","type":"BasicTickFormatter"},{"attributes":{},"id":"c69c520a-ee59-43d0-8f3b-95d425d84f26","type":"SaveTool"},{"attributes":{"callback":null},"id":"dc601767-58d3-48f8-a58c-a7779613cb32","type":"DataRange1d"},{"attributes":{},"id":"f4b2d51c-a54b-4624-92e1-e957ae468e88","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c72500b7-1f3c-49ce-886e-3ff35c4a42a4","type":"PanTool"},{"id":"2d77734b-79e1-4918-bd8e-bb188e31b60c","type":"WheelZoomTool"},{"id":"40761be4-0940-4a48-9986-f9e9a6152887","type":"BoxZoomTool"},{"id":"b3c2840c-5fd1-42ce-b2fa-b93db7dafe8f","type":"ResetTool"},{"id":"c69c520a-ee59-43d0-8f3b-95d425d84f26","type":"SaveTool"},{"id":"0a0c2cde-9998-4fa9-9244-4add4991e943","type":"BoxSelectTool"},{"id":"4f6d875e-ddc7-497a-8830-fa9ac698eaba","type":"LassoSelectTool"}]},"id":"b7b57c0b-c56e-4ee3-968d-bd3cc93f9850","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"5fa2a706-7942-4ce3-9ae9-aafeb45afa40","type":"Circle"},{"attributes":{"formatter":{"id":"2049ef75-e534-4d37-b891-1b6f77db14c9","type":"BasicTickFormatter"},"plot":{"id":"2da89a6a-1e04-417f-b05f-b3acceecf011","subtype":"Figure","type":"Plot"},"ticker":{"id":"20f61959-7847-4bea-b181-b7b4b94689d2","type":"BasicTicker"}},"id":"507a7c0d-efd1-4eda-bcd5-d3b468e1c86c","type":"LinearAxis"},{"attributes":{},"id":"954d96d6-9ed2-4260-81af-b454d203bdab","type":"LinearScale"},{"attributes":{"formatter":{"id":"556b6882-f387-4a9e-93a7-cc6231e0e007","type":"BasicTickFormatter"},"plot":{"id":"2da89a6a-1e04-417f-b05f-b3acceecf011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3951d618-5735-43bf-ac79-bafeb3ece10e","type":"BasicTicker"}},"id":"b39e1ccc-d27a-45ba-a2ca-50d4e86d75d9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"33b8f552-c3fe-4c34-88b4-1d10e9b11e82","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"b39e1ccc-d27a-45ba-a2ca-50d4e86d75d9","type":"LinearAxis"}],"left":[{"id":"507a7c0d-efd1-4eda-bcd5-d3b468e1c86c","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"b39e1ccc-d27a-45ba-a2ca-50d4e86d75d9","type":"LinearAxis"},{"id":"0b3be51c-f886-49a6-9d0b-b13a081d0c73","type":"Grid"},{"id":"507a7c0d-efd1-4eda-bcd5-d3b468e1c86c","type":"LinearAxis"},{"id":"9639b272-287d-41ad-826b-82bbed49a4d6","type":"Grid"},{"id":"aedd8f16-713f-424e-88d7-3df17385d836","type":"BoxAnnotation"},{"id":"0599f2ca-3674-4a90-81bc-0a13a01a4ba3","type":"BoxAnnotation"},{"id":"33b8f552-c3fe-4c34-88b4-1d10e9b11e82","type":"PolyAnnotation"},{"id":"51baa52d-4fc3-4106-8895-53b694bfc2cb","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b585418a-8b2d-4075-99a8-11a0b0a5ca76","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dc601767-58d3-48f8-a58c-a7779613cb32","type":"DataRange1d"},"x_scale":{"id":"664400f4-6c26-4abb-9ab6-d4718b00e2e2","type":"LinearScale"},"y_range":{"id":"ee14c652-b8e7-47be-94c7-1b5eee03c0de","type":"DataRange1d"},"y_scale":{"id":"3edb05ae-8e34-4b18-bb25-e1037023b750","type":"LinearScale"}},"id":"2da89a6a-1e04-417f-b05f-b3acceecf011","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"c72500b7-1f3c-49ce-886e-3ff35c4a42a4","type":"PanTool"},{"id":"2d77734b-79e1-4918-bd8e-bb188e31b60c","type":"WheelZoomTool"},{"id":"40761be4-0940-4a48-9986-f9e9a6152887","type":"BoxZoomTool"},{"id":"b3c2840c-5fd1-42ce-b2fa-b93db7dafe8f","type":"ResetTool"},{"id":"c69c520a-ee59-43d0-8f3b-95d425d84f26","type":"SaveTool"},{"id":"0a0c2cde-9998-4fa9-9244-4add4991e943","type":"BoxSelectTool"},{"id":"4f6d875e-ddc7-497a-8830-fa9ac698eaba","type":"LassoSelectTool"},{"id":"919e7122-39e6-4baf-b64c-ffab43028f8e","type":"PanTool"},{"id":"82e4adc8-da98-425b-ab64-dda5e3868976","type":"WheelZoomTool"},{"id":"3bbfdb43-22e8-4080-9bd8-1a3e02c7f4f6","type":"BoxZoomTool"},{"id":"cd8ef174-817c-484a-b785-4663e86a6da5","type":"ResetTool"},{"id":"8b3ac304-c7e2-458a-981f-3239a854e7f9","type":"SaveTool"},{"id":"d33f2552-c348-480d-8d9b-542546fe0c2c","type":"BoxSelectTool"},{"id":"c3279c7f-bf9a-4ce9-af11-fc7a689b9464","type":"LassoSelectTool"}]},"id":"d14bb2c4-1ce0-4735-9a5a-3fdf38ce633e","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19b8e868-e9e7-4a67-b3dd-07d15153446f","type":"BoxAnnotation"},{"attributes":{},"id":"664400f4-6c26-4abb-9ab6-d4718b00e2e2","type":"LinearScale"},{"attributes":{"plot":{"id":"73d05af8-9e95-49cd-beb2-9ca087cb702b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9f4c0cb-9290-490f-bebd-6184f2079232","type":"BasicTicker"}},"id":"db100573-8291-46e4-9882-181ed5d4ba9a","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"919e7122-39e6-4baf-b64c-ffab43028f8e","type":"PanTool"},{"id":"82e4adc8-da98-425b-ab64-dda5e3868976","type":"WheelZoomTool"},{"id":"3bbfdb43-22e8-4080-9bd8-1a3e02c7f4f6","type":"BoxZoomTool"},{"id":"cd8ef174-817c-484a-b785-4663e86a6da5","type":"ResetTool"},{"id":"8b3ac304-c7e2-458a-981f-3239a854e7f9","type":"SaveTool"},{"id":"d33f2552-c348-480d-8d9b-542546fe0c2c","type":"BoxSelectTool"},{"id":"c3279c7f-bf9a-4ce9-af11-fc7a689b9464","type":"LassoSelectTool"}]},"id":"b585418a-8b2d-4075-99a8-11a0b0a5ca76","type":"Toolbar"},{"attributes":{"source":{"id":"f9d3b338-5484-43e7-aafe-dd4e976ca9b7","type":"ColumnDataSource"}},"id":"a2f3f3ea-23f6-4f6c-a2f7-8320df8b5411","type":"CDSView"},{"attributes":{"source":{"id":"f9d3b338-5484-43e7-aafe-dd4e976ca9b7","type":"ColumnDataSource"}},"id":"220e229d-3621-4457-96ef-3606b70ba0f6","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"2bcac1f6-a7bc-4c3d-b993-d3124079d06d","type":"Circle"},{"attributes":{"formatter":{"id":"c16bcc0f-f953-4dd7-9650-81ef74f33984","type":"BasicTickFormatter"},"plot":{"id":"73d05af8-9e95-49cd-beb2-9ca087cb702b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9f4c0cb-9290-490f-bebd-6184f2079232","type":"BasicTicker"}},"id":"97dbabf0-0bb2-4c7c-a932-f2454ff05b1c","type":"LinearAxis"},{"attributes":{},"id":"c16bcc0f-f953-4dd7-9650-81ef74f33984","type":"BasicTickFormatter"},{"attributes":{},"id":"82e4adc8-da98-425b-ab64-dda5e3868976","type":"WheelZoomTool"},{"attributes":{},"id":"2049ef75-e534-4d37-b891-1b6f77db14c9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ee14c652-b8e7-47be-94c7-1b5eee03c0de","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4876998e-3eaf-45d9-b1eb-f7b81b691025","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"33b8f552-c3fe-4c34-88b4-1d10e9b11e82","type":"PolyAnnotation"}},"id":"c3279c7f-bf9a-4ce9-af11-fc7a689b9464","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"81b814fa-3c43-4b74-bcc3-c4d2f88329fb","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[300]},"y0":{"__ndarray__":"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","dtype":"float64","shape":[300]},"y1":{"__ndarray__":"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","dtype":"float64","shape":[300]}}},"id":"f9d3b338-5484-43e7-aafe-dd4e976ca9b7","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"14ced01a-f03c-41b2-a194-43bf64e8dea5","type":"BoxAnnotation"}},"id":"40761be4-0940-4a48-9986-f9e9a6152887","type":"BoxZoomTool"},{"attributes":{},"id":"c72500b7-1f3c-49ce-886e-3ff35c4a42a4","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14ced01a-f03c-41b2-a194-43bf64e8dea5","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"aedd8f16-713f-424e-88d7-3df17385d836","type":"BoxAnnotation"}},"id":"3bbfdb43-22e8-4080-9bd8-1a3e02c7f4f6","type":"BoxZoomTool"},{"attributes":{},"id":"20f61959-7847-4bea-b181-b7b4b94689d2","type":"BasicTicker"},{"attributes":{},"id":"f9f4c0cb-9290-490f-bebd-6184f2079232","type":"BasicTicker"},{"attributes":{},"id":"2d77734b-79e1-4918-bd8e-bb188e31b60c","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"d14bb2c4-1ce0-4735-9a5a-3fdf38ce633e","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"ec2b6d25-2ff8-499a-8cf2-f20a6d5f6339","type":"ToolbarBox"},{"attributes":{"callback":null,"overlay":{"id":"0599f2ca-3674-4a90-81bc-0a13a01a4ba3","type":"BoxAnnotation"},"renderers":[{"id":"51baa52d-4fc3-4106-8895-53b694bfc2cb","type":"GlyphRenderer"}]},"id":"d33f2552-c348-480d-8d9b-542546fe0c2c","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"f9d3b338-5484-43e7-aafe-dd4e976ca9b7","type":"ColumnDataSource"},"glyph":{"id":"46838101-ad60-4bc7-b33d-dbb484e0ff62","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2bcac1f6-a7bc-4c3d-b993-d3124079d06d","type":"Circle"},"selection_glyph":null,"view":{"id":"220e229d-3621-4457-96ef-3606b70ba0f6","type":"CDSView"}},"id":"51baa52d-4fc3-4106-8895-53b694bfc2cb","type":"GlyphRenderer"},{"attributes":{},"id":"3951d618-5735-43bf-ac79-bafeb3ece10e","type":"BasicTicker"},{"attributes":{"children":[{"id":"73d05af8-9e95-49cd-beb2-9ca087cb702b","subtype":"Figure","type":"Plot"},{"id":"2da89a6a-1e04-417f-b05f-b3acceecf011","subtype":"Figure","type":"Plot"}]},"id":"6119f922-0a3f-478c-9f23-c159ab416945","type":"Row"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"7e21cf6a-0f82-4216-9d69-2635507ed434","type":"PolyAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"2da89a6a-1e04-417f-b05f-b3acceecf011","subtype":"Figure","type":"Plot"},"ticker":{"id":"20f61959-7847-4bea-b181-b7b4b94689d2","type":"BasicTicker"}},"id":"9639b272-287d-41ad-826b-82bbed49a4d6","type":"Grid"},{"attributes":{},"id":"8b3ac304-c7e2-458a-981f-3239a854e7f9","type":"SaveTool"},{"attributes":{"formatter":{"id":"563b89cd-30e3-4989-8903-65e28957500e","type":"BasicTickFormatter"},"plot":{"id":"73d05af8-9e95-49cd-beb2-9ca087cb702b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4b2d51c-a54b-4624-92e1-e957ae468e88","type":"BasicTicker"}},"id":"1df67740-c95e-46b7-8198-ebb0a6ebca0c","type":"LinearAxis"},{"attributes":{"children":[{"id":"6119f922-0a3f-478c-9f23-c159ab416945","type":"Row"}]},"id":"af445dd9-55ec-4540-a371-853b64df49ad","type":"Column"},{"attributes":{},"id":"cd8ef174-817c-484a-b785-4663e86a6da5","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"19b8e868-e9e7-4a67-b3dd-07d15153446f","type":"BoxAnnotation"},"renderers":[{"id":"94c3bc47-8952-4b44-845f-4122e3049d5c","type":"GlyphRenderer"}]},"id":"0a0c2cde-9998-4fa9-9244-4add4991e943","type":"BoxSelectTool"},{"attributes":{"plot":{"id":"2da89a6a-1e04-417f-b05f-b3acceecf011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3951d618-5735-43bf-ac79-bafeb3ece10e","type":"BasicTicker"}},"id":"0b3be51c-f886-49a6-9d0b-b13a081d0c73","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0599f2ca-3674-4a90-81bc-0a13a01a4ba3","type":"BoxAnnotation"},{"attributes":{},"id":"b3c2840c-5fd1-42ce-b2fa-b93db7dafe8f","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aedd8f16-713f-424e-88d7-3df17385d836","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"7e21cf6a-0f82-4216-9d69-2635507ed434","type":"PolyAnnotation"}},"id":"4f6d875e-ddc7-497a-8830-fa9ac698eaba","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"f9d3b338-5484-43e7-aafe-dd4e976ca9b7","type":"ColumnDataSource"},"glyph":{"id":"81b814fa-3c43-4b74-bcc3-c4d2f88329fb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5fa2a706-7942-4ce3-9ae9-aafeb45afa40","type":"Circle"},"selection_glyph":null,"view":{"id":"a2f3f3ea-23f6-4f6c-a2f7-8320df8b5411","type":"CDSView"}},"id":"94c3bc47-8952-4b44-845f-4122e3049d5c","type":"GlyphRenderer"},{"attributes":{},"id":"556b6882-f387-4a9e-93a7-cc6231e0e007","type":"BasicTickFormatter"},{"attributes":{},"id":"3edb05ae-8e34-4b18-bb25-e1037023b750","type":"LinearScale"},{"attributes":{"below":[{"id":"97dbabf0-0bb2-4c7c-a932-f2454ff05b1c","type":"LinearAxis"}],"left":[{"id":"1df67740-c95e-46b7-8198-ebb0a6ebca0c","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"97dbabf0-0bb2-4c7c-a932-f2454ff05b1c","type":"LinearAxis"},{"id":"db100573-8291-46e4-9882-181ed5d4ba9a","type":"Grid"},{"id":"1df67740-c95e-46b7-8198-ebb0a6ebca0c","type":"LinearAxis"},{"id":"1ec62a91-30a5-431e-9c36-67d4db2e6a5d","type":"Grid"},{"id":"14ced01a-f03c-41b2-a194-43bf64e8dea5","type":"BoxAnnotation"},{"id":"19b8e868-e9e7-4a67-b3dd-07d15153446f","type":"BoxAnnotation"},{"id":"7e21cf6a-0f82-4216-9d69-2635507ed434","type":"PolyAnnotation"},{"id":"94c3bc47-8952-4b44-845f-4122e3049d5c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b7b57c0b-c56e-4ee3-968d-bd3cc93f9850","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4876998e-3eaf-45d9-b1eb-f7b81b691025","type":"DataRange1d"},"x_scale":{"id":"7fed5816-3217-459b-acf6-54a901d8c870","type":"LinearScale"},"y_range":{"id":"065dc4ea-19ae-4345-bdb9-d4db21c1f551","type":"DataRange1d"},"y_scale":{"id":"954d96d6-9ed2-4260-81af-b454d203bdab","type":"LinearScale"}},"id":"73d05af8-9e95-49cd-beb2-9ca087cb702b","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"ec2b6d25-2ff8-499a-8cf2-f20a6d5f6339","type":"ToolbarBox"},{"id":"af445dd9-55ec-4540-a371-853b64df49ad","type":"Column"}]},"id":"0c86c181-106e-4e98-83d8-973c30f4f002","type":"Column"},{"attributes":{"callback":null},"id":"065dc4ea-19ae-4345-bdb9-d4db21c1f551","type":"DataRange1d"}],"root_ids":["0c86c181-106e-4e98-83d8-973c30f4f002"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"a7a6c21a-e6ee-4f71-8283-4a538c3575b3","elementid":"1e2ac6ee-e0aa-4343-867f-dff57cf9ed2f","modelid":"0c86c181-106e-4e98-83d8-973c30f4f002"}];
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