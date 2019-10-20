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
      };var element = document.getElementById("2fefaf9d-d89d-448c-aaaf-442a5863b43f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2fefaf9d-d89d-448c-aaaf-442a5863b43f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"57d487b8-c33a-4536-b7ac-c8d883e2071a":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26dbbb99-ed84-4d96-a6e6-880d21326548","type":"BoxAnnotation"},{"attributes":{},"id":"395935b8-697f-4514-af0f-48bd2321f68b","type":"LogScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1d395432-6beb-4be4-898b-ed5228944d1b","type":"PanTool"},{"id":"6328696e-70d6-42ca-b8ad-61800dbda8dd","type":"WheelZoomTool"},{"id":"76243ae3-3905-4d44-baad-bfeb5397687c","type":"BoxZoomTool"},{"id":"679c29c2-c11e-49a4-8093-ddbd386f02c6","type":"SaveTool"},{"id":"8889f698-5ef7-48da-9d21-11375b5f568b","type":"ResetTool"},{"id":"f5c7504a-2e18-4b88-abe5-0d5302d278dc","type":"HelpTool"}]},"id":"c0014346-bf36-4f4f-8708-865d15a6ed62","type":"Toolbar"},{"attributes":{"overlay":{"id":"26dbbb99-ed84-4d96-a6e6-880d21326548","type":"BoxAnnotation"}},"id":"76243ae3-3905-4d44-baad-bfeb5397687c","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"NMTNCyNr6T8r5WwH9hXoP7RYP/sQNec/7fGLawmk5j+J66bM8k7mP5plZ0HHKeY/ledPId4s5j/+6iz3NVPmPyZU30GJmeY/o0ZCk8b95j9GLJjqvX7nP2g2S53sG+g/Fjm4zlvV6D9guc69iqvpP7rA6/Zgn+o/dVAqBCay6z+H2OgcfeXsP+ciCeFjO+4/PeBhhDO27z+AERgEUqzwP84QjqPokvE/dKHT2aCQ8j90UHBed6fzP6YcWm6n2fQ/FsTjr7Ap9j+pH+AAXpr3PyweaEHNLvk/+pyCMnjq+j+SEsiEPtH8Pwl8Kzhx5/4/JM+9ue+YAEBzvAqA8toBQJfOYU69PANAz6IDMaTBBEBKSBU9XW0GQNF/UjwMRAhASARb009KCkDg0WlTUIUMQL9Z7G7Q+g5AUQr/B6DYEECIVDLM6FcSQPkeOO5I/xNAvTijmkHTFUBgc+cJ3tgXQJvq98XEFRpAg5skMEuQHEBLvLiUi08fQJJTTRK/LSFAyC+6nIreIkDJ1XirLr8kQMni07VQ1SZA1fJG80knKUAZynGlPrwrQG+KLoI4nC5AsFU4ViLoMEC+uiTdSrEyQOhlNyxVrzRAv38gmLzoNkD1LHhm0WQ5QBMfvyvVKzxAeoc2EBtHP0BCoGdElmBBQJSK9JL5UkNATmCOGHSBRUDZeyV3pfNHQIQEmDkvskpAVGMxFtjGTUCtxOgTWp5QQNZJoGopkFJAG+KonPm/VEAWQNf+3zVXQFQGCN8J+1lAT6KHmeMZXUA799akIk9gQC2LRvTSSmJA5NAd5qqHZEACUmHPYA5nQI4X6obf6GlAbqmBUnIibUAMaxKf+2NwQC7sWGkMdHJAXFBUI8jJdEDBDGq3uG53QKXoTfPAbXpATm23kE7TfUAlu1vWydaAQEs2K2dkBoNAEtzjZLyBhUCWvZQAbFOIQLwvzF+Uh4tAjjxSWBcsj0B9r5zxbKiRQGyZdE8IBJRAqibV9kuzlkBHy1q+LMKZQNkuIKRgPp1AE+dDIdGboEDa0mpO/9+iQJAvonAXdqVAAAAAAABqqEA=","dtype":"float64","shape":[100]}}},"id":"c751e5c8-28c7-41c5-9627-b674a9bc073c","type":"ColumnDataSource"},{"attributes":{"line_color":"indigo","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"d5379744-ab58-4dc1-afdb-ac00b6dbd198","type":"Line"},{"attributes":{},"id":"b23042f5-50d1-47ed-ba8e-505497dad3ce","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"y=sqrt(x)"},"renderers":[{"id":"d11ecba8-937d-40d5-b91a-cd9fd57c43ad","type":"GlyphRenderer"}]},"id":"5c4448e9-f9da-4224-b2e3-c7da25adc052","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"fBSuR+F6hD/GgVSMluKWP1+/YSsORqQ/lwCSAQGdrz9Egl3kEbu2P5hlbkC76L4/JNV9Sr4rxD8uqALxqoPJP+OrxZMjfM8/I3BjGZQK0z+sIgNnXKfWP4ztwbJqlNo/w9Cf/L7R3j8pZk6irK/hPx1wXMWcHuQ/OwZ656+15j+FKKcI5nTpP/rW4yg/XOw/mxEwSLtr7z827EUzrVHxP7KV+0GOAfM/RAU50IDF9D/sOv7dhJ32P6k2S2uaifg/fPgfeMGJ+j9lgHwE+p38P2TOYBBExv4/PnHmzU+BAEBTXmBThqkBQHMunpjF2wJAnuGfnQ0YBEDUd2ViXl4FQBXx7ua3rgZAYU08KxoJCEC3jE0vhW0JQBmvIvP42wpAhbS7dnVUDED8nBi6+tYNQIBoOb2IYw9AhwsPwA99EEBTVGOBX00RQKSOmaKzIhJAe7qxIwz9EkDX16sEadwTQLnmh0XKwBRAIOdF5i+qFUAN2eXmmZgWQH+8Z0cIjBdAd5HLB3uEGED0VxEo8oEZQPYPOahthBpAfrlCiO2LG0CLVC7IcZgcQB7h+2f6qR1AOV+rZ4fAHkDXzjzHGNwfQP0XWENXfiBAUcECUyQRIUBoY56Sc6YhQEL+KgJFPiJA3pGooZjYIkA+HhdxbnUjQGCjdnDGFCRARCHHn6C2JEDrlwj//FolQFYHO47bASZAgm9eTTyrJkBy0HI8H1cnQCQqeFuEBShAmXxuqmu2KEDRx1Up1WkpQMsLLtjAHypAiEj3ti7YKkAIfrHFHpMrQEusXASRUCxAUtP4coUQLUAa84UR/NItQKULBOD0ly5A8hxz3m9fL0CAk2mGthQwQOoUkjX2ejBAtRKz/HbiMEDhjMzbOEsxQG6D3tI7tTFAXfbo4X8gMkCt5esIBY0yQF9R50fL+jJAcjnbntJpM0DmnccNG9ozQLx+rJSkSzRA89uJM2++NECMtV/qejI1QIULLrnHpzVA4d30n1UeNkCdLLSeJJY2QLv3a7U0DzdAOj8c5IWJN0AbA8UqGAU4QF1DZonrgThAAAAAAAAAOUA=","dtype":"float64","shape":[100]}}},"id":"8142134a-ee30-4339-82fb-0f568a1c442b","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"087ce279-0972-4b09-9301-92ade078f476","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5a79684e-f50f-4b72-9acc-6d6d1d5582af","type":"Line"},{"attributes":{"items":[{"id":"5c4448e9-f9da-4224-b2e3-c7da25adc052","type":"LegendItem"},{"id":"43a64ade-54c9-4842-9057-5ad9f46b3d5b","type":"LegendItem"},{"id":"d310784e-545e-4a7f-88a4-cdd88e3dfc5e","type":"LegendItem"},{"id":"71737158-cecb-40f9-a36b-5e030d7329bc","type":"LegendItem"},{"id":"2e247d2b-25cb-423a-92bc-e29d46585dcd","type":"LegendItem"},{"id":"f74b4820-e9e0-47f0-b62b-90ca61e2a130","type":"LegendItem"}],"location":"top_left","plot":{"id":"f79e4e11-85b5-4202-8a90-b005457c38e2","subtype":"Figure","type":"Plot"}},"id":"518305bd-1386-47b0-82da-a2952df09da1","type":"Legend"},{"attributes":{"data_source":{"id":"ca90a98e-6832-41c2-81fa-808e0f89e2ae","type":"ColumnDataSource"},"glyph":{"id":"1b31a23f-7b7d-46fc-9a0b-1cf406b01e35","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49f87022-fe38-4e45-b19e-cbab1b995fd7","type":"Line"},"selection_glyph":null,"view":{"id":"e98d8ea0-e878-464c-bfb7-b538f05bb7cd","type":"CDSView"}},"id":"d11ecba8-937d-40d5-b91a-cd9fd57c43ad","type":"GlyphRenderer"},{"attributes":{"axis_label":"Domain","formatter":{"id":"b23042f5-50d1-47ed-ba8e-505497dad3ce","type":"BasicTickFormatter"},"plot":{"id":"f79e4e11-85b5-4202-8a90-b005457c38e2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e63f8650-977b-4b10-828d-73e9942536a1","type":"BasicTicker"}},"id":"d986c114-91e8-4882-a393-72d1f8e17dad","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8142134a-ee30-4339-82fb-0f568a1c442b","type":"ColumnDataSource"},"glyph":{"id":"fdcb1ca8-9460-46a8-a5a8-f7ca20e8b976","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f095e24d-297b-4dfb-88e2-f362252cb3c2","type":"Circle"},"selection_glyph":null,"view":{"id":"8a378769-0b70-443e-b94b-368884a78cd5","type":"CDSView"}},"id":"25c0cb0b-49e5-4f44-b5a1-f2f39ebc2f4e","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"539a291a-7ec7-42ed-b91f-87b5cbd094f6","type":"GlyphRenderer"}]},"id":"71737158-cecb-40f9-a36b-5e030d7329bc","type":"LegendItem"},{"attributes":{"line_color":"gold","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"80e4b088-e03d-45db-b2bc-17630ad05944","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"f79e4e11-85b5-4202-8a90-b005457c38e2","subtype":"Figure","type":"Plot"},"ticker":{"id":"641464e8-9ba8-4322-9720-4eb70e43f72c","type":"LogTicker"}},"id":"f2591221-59d8-4b79-a4c1-a8c59d270e33","type":"Grid"},{"attributes":{"label":{"value":"y=x^x"},"renderers":[{"id":"1e03a67e-cce7-48c0-8838-7606cbd90495","type":"GlyphRenderer"}]},"id":"2e247d2b-25cb-423a-92bc-e29d46585dcd","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]}}},"id":"906746f1-303c-4b02-970a-7cb35a1d4b3b","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6663e602-b8fe-460e-baba-d5b3f5223bab","type":"Circle"},{"attributes":{"data_source":{"id":"56403496-a5f0-4ba5-a9ae-26d6a3732dcc","type":"ColumnDataSource"},"glyph":{"id":"f88e426d-2133-492a-a3fb-afc90949dfa6","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5d4f358c-b4e8-4476-9f8c-16ce441c99f1","type":"Line"},"selection_glyph":null,"view":{"id":"8ead8edb-45e0-4e9f-9f0d-5689a485cb66","type":"CDSView"}},"id":"7f1df219-5bed-4e96-845c-4d302456d55f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b0ccc519-3534-4933-8f80-8845852779c1","type":"ColumnDataSource"},"glyph":{"id":"80e4b088-e03d-45db-b2bc-17630ad05944","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5a79684e-f50f-4b72-9acc-6d6d1d5582af","type":"Line"},"selection_glyph":null,"view":{"id":"1effd36a-c003-4b6a-a3cc-cea18239e103","type":"CDSView"}},"id":"539a291a-7ec7-42ed-b91f-87b5cbd094f6","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"olivedrab"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fdcb1ca8-9460-46a8-a5a8-f7ca20e8b976","type":"Circle"},{"attributes":{},"id":"679c29c2-c11e-49a4-8093-ddbd386f02c6","type":"SaveTool"},{"attributes":{},"id":"8889f698-5ef7-48da-9d21-11375b5f568b","type":"ResetTool"},{"attributes":{"plot":null,"text":"log axis example"},"id":"8e25e198-305e-404e-bc29-5a7f5e13d311","type":"Title"},{"attributes":{},"id":"1d395432-6beb-4be4-898b-ed5228944d1b","type":"PanTool"},{"attributes":{"source":{"id":"7944ff03-5626-4c68-829d-47f7049140a1","type":"ColumnDataSource"}},"id":"2ad20ffb-b175-4254-bd3b-3e8cfa865430","type":"CDSView"},{"attributes":{},"id":"6328696e-70d6-42ca-b8ad-61800dbda8dd","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f095e24d-297b-4dfb-88e2-f362252cb3c2","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"63e18386-5e84-4931-8e2d-cda98deec5e1","type":"Line"},{"attributes":{"source":{"id":"56403496-a5f0-4ba5-a9ae-26d6a3732dcc","type":"ColumnDataSource"}},"id":"8ead8edb-45e0-4e9f-9f0d-5689a485cb66","type":"CDSView"},{"attributes":{},"id":"f5c7504a-2e18-4b88-abe5-0d5302d278dc","type":"HelpTool"},{"attributes":{"data_source":{"id":"7944ff03-5626-4c68-829d-47f7049140a1","type":"ColumnDataSource"},"glyph":{"id":"5759336b-b595-457b-b501-c28429402e46","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"63e18386-5e84-4931-8e2d-cda98deec5e1","type":"Line"},"selection_glyph":null,"view":{"id":"2ad20ffb-b175-4254-bd3b-3e8cfa865430","type":"CDSView"}},"id":"a88ff26a-76e6-46ab-830e-16cbc415a1c0","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"aa0f4b18-35b8-415a-b94a-967a8215fa20","type":"GlyphRenderer"},{"id":"eae7589c-cb49-4339-a8e1-24a351dc7143","type":"GlyphRenderer"}]},"id":"43a64ade-54c9-4842-9057-5ad9f46b3d5b","type":"LegendItem"},{"attributes":{"label":{"value":"y=10^(x^2)"},"renderers":[{"id":"a88ff26a-76e6-46ab-830e-16cbc415a1c0","type":"GlyphRenderer"}]},"id":"f74b4820-e9e0-47f0-b62b-90ca61e2a130","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]}}},"id":"fe9dff86-ec21-4a23-bb59-9660c49d8405","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c751e5c8-28c7-41c5-9627-b674a9bc073c","type":"ColumnDataSource"}},"id":"9ba44aeb-222b-4ac0-9d94-c920451dbb32","type":"CDSView"},{"attributes":{"callback":null},"id":"47b38adb-f156-44be-9b21-858cefef859c","type":"DataRange1d"},{"attributes":{"num_minor_ticks":10},"id":"641464e8-9ba8-4322-9720-4eb70e43f72c","type":"LogTicker"},{"attributes":{"source":{"id":"906746f1-303c-4b02-970a-7cb35a1d4b3b","type":"ColumnDataSource"}},"id":"4ae02383-cb6b-4ca1-9f8e-969310337635","type":"CDSView"},{"attributes":{"data_source":{"id":"c751e5c8-28c7-41c5-9627-b674a9bc073c","type":"ColumnDataSource"},"glyph":{"id":"d5379744-ab58-4dc1-afdb-ac00b6dbd198","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"947f835b-ea67-4f23-94f8-47bb6db15bf5","type":"Line"},"selection_glyph":null,"view":{"id":"9ba44aeb-222b-4ac0-9d94-c920451dbb32","type":"CDSView"}},"id":"1e03a67e-cce7-48c0-8838-7606cbd90495","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"01de0a8a-1314-4718-8764-5bd218715416","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"D0lIYhM91D8QPZjjzb7YPzK64wifjNw/GXn6VSPn3z//ye9jz3fhP16ivPPv3OI/DfNMwmkp5D9W5tY7u2HlPwwBnbAqieY/tAshZjGi5z8jQ5ybu67oP7E4kPFQsOk/hczrDC+o6j/0iwzLW5frP5k2qxOyfuw/0YpNHOte7T/e9yZApTjuP6j3dSdpDO8/c6shuq3a7z8NtseY7VHwP2lp98EmtPA/GIsYKSsU8T9PAyw7H3LxP25i6aMjzvE/hhwD01Uo8j8TapBq0IDyP2srOpur1/I/LTC4cf0s8z9FEmIY2oDzP2TM/g5U0/M/XK6KWnwk9D+ErVKuYnT0PwBsf48Vw/Q/97f0c6IQ9T9mEkDdFV31P5RXL3B7qPU/qeqNCd7y9T/qSnHQRzz2P0WZbEbChPY/8HH0VVbM9j8E7TBfDBP3P+4VckPsWPc/r0xzb/2d9z9sfJPkRuL3PzCgIkHPJfg/fX7gx5xo+D9srcRmtar4P/OyJL0e7Pg/WVVKId4s+T8X2Yml+Gz5P5Tq5RxzrPk/MzxNH1Lr+T9+aXwNmin6P9BrjRRPZ/o/HdU8MXWk+j+cEuwyEOH6Py0mZ74jHfs/oI1zULNY+z9zbi1AwpP7PyeQN8FTzvs/7DPC5WoI/D/9a2ygCkL8P1Q1A8Y1e/w/FUIhD++z/D8sGLIZOez8P2DlWmoWJP0/Ty/LbYlb/T87Ufd5lJL9P++KPs85yf0/ODp+mXv//T8MsxPxWzX+PxgJztvcav4/Qf/QTQCg/j+9NmoqyNT+PwKf2UQ2Cf8/6REOYUw9/z+N81Y0DHH/P5KbC2Z3pP8/Mj0pkI/X/z9y+vMfKwUAQHrKI3tmHgBAK19KlHo3AED5Y3MgaFAAQFt2S88vaQBAoZdYS9KBAEAOrS86UJoAQJs9pzyqsgBAepkH7+DKAEAllDjp9OIAQMf27L7m+gBARc7L/7YSAUCEtZc3ZioBQF46VO70QQFAl3lpqGNZAUA3DMbmsnABQNte/ybjhwFA/Ylw4/SeAUCcwFeT6LUBQFhp8qq+zAFAqPSXm3fjAUA=","dtype":"float64","shape":[100]}}},"id":"ca90a98e-6832-41c2-81fa-808e0f89e2ae","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"BCb8+I4k9D/YkSiBB5P2P+ZFPS6kTPk/tT+SFHda/D+2rHOXqsb/PwhLvJ9RzgFAGmZC05L0A0D4INh7QF0GQC1oRUhfEAlAIYQjsesWDEDkDD3i93oPQDZrJKDmoxFANIpK/QjFE0CuGNiS+ScWQOSomvWp1BhAVbzmNQHUG0AJCLaB+S8fQDNUQ63geSFAZ1nDZvCVI0Bt3PeUMfMlQP8rNeCCmShADFCKI7aRK0BSXkfIreUuQN2ZX9Y+UDFAQFTkAUhnM0CB2N1T5741QNDhO7XoXjhA/M5N/ghQO0ATM1kME5w+QHVG/SwAJ0FAU6tnww45Q0A4vgCkGYtFQAzy/CTaJEhAf3H5TfgOS0DVhkmoJ1NOQIGE2MQj/lBANUSEokMLU0Dsz6Bcx1dVQLo45uJV61dAiK3VnYLOWkAjyGL66QpeQGlV4LOo1WBAu8znmOXdYkA3PcFX7yRlQCrVfaVasmdAdN+ifKaOakChetJkWMNtQJhUMRKOrXBAPNywovOwckDJjiFykPJ0QJ3KWibneXdA9waRfGJPekCj9J9NcXx9QDeHEPrShYBA9iJpvmyEgkAhIjeLqcCEQHWyHSL6QYdAlJc3M7UQikCvMqMeMzaNQCY45od2XpBAG6f/7E9YkkCItCaFOY+UQL5/aViSCpdAfVyNOZ3SmUDDwHtFnPCcQDrgONp3N6BA1g/DMZwsokC8/b1EP16kQCZU3Iuu06ZAEnDgKxmVqUCRuYczq6usQLcaqBHWELBAsf1bklABskCVWW2xuS20QNRlCIJNnbZAQEbOqSdYuUDj2tpdXme8QGhLz6Eg1b9Ak3DHFmzWwUDngEG1p/3DQET2bANuZ8ZAysk7VscbyUA5rzU9tCPMQKncdHlLic9A9TpRye2r0UBLUd08CM7TQNtZb9sOMtZAxYxN1/bf2EDkzPxNq+DbQDtS2/cqPt9AmoKOttSB4UDAo3M32p7jQCMQVNgu/eVAIAtg1rSk6EBYKTAQQp7rQCDrp2698+5A901Y7R9Y8UD1McGWHHDzQG3sN8vMyPVAAAAAAABq+EA=","dtype":"float64","shape":[100]}}},"id":"b0ccc519-3534-4933-8f80-8845852779c1","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":10000000000000000000000,"start":0.001},"id":"43c6a57e-e33b-428b-82e3-4dad44d01c8b","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"5d4f358c-b4e8-4476-9f8c-16ce441c99f1","type":"Line"},{"attributes":{},"id":"a01a0c42-4be6-4b97-814d-2aa916ba8fd3","type":"LinearScale"},{"attributes":{"data_source":{"id":"fe9dff86-ec21-4a23-bb59-9660c49d8405","type":"ColumnDataSource"},"glyph":{"id":"01de0a8a-1314-4718-8764-5bd218715416","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"087ce279-0972-4b09-9301-92ade078f476","type":"Line"},"selection_glyph":null,"view":{"id":"8c4a94d9-1098-448a-a212-1fd36783497e","type":"CDSView"}},"id":"aa0f4b18-35b8-415a-b94a-967a8215fa20","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"f88e426d-2133-492a-a3fb-afc90949dfa6","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"947f835b-ea67-4f23-94f8-47bb6db15bf5","type":"Line"},{"attributes":{"axis_label":"Values (log scale)","formatter":{"id":"3c363a13-af8d-4050-bb33-ee672ed3bb49","type":"LogTickFormatter"},"plot":{"id":"f79e4e11-85b5-4202-8a90-b005457c38e2","subtype":"Figure","type":"Plot"},"ticker":{"id":"641464e8-9ba8-4322-9720-4eb70e43f72c","type":"LogTicker"}},"id":"404b4b58-7308-4c05-86a1-31d2cbcc2b87","type":"LogAxis"},{"attributes":{"ticker":null},"id":"3c363a13-af8d-4050-bb33-ee672ed3bb49","type":"LogTickFormatter"},{"attributes":{"source":{"id":"8142134a-ee30-4339-82fb-0f568a1c442b","type":"ColumnDataSource"}},"id":"8a378769-0b70-443e-b94b-368884a78cd5","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"fBSuR+F6hD/GgVSMluKWP1+/YSsORqQ/lwCSAQGdrz9Egl3kEbu2P5hlbkC76L4/JNV9Sr4rxD8uqALxqoPJP+OrxZMjfM8/I3BjGZQK0z+sIgNnXKfWP4ztwbJqlNo/w9Cf/L7R3j8pZk6irK/hPx1wXMWcHuQ/OwZ656+15j+FKKcI5nTpP/rW4yg/XOw/mxEwSLtr7z827EUzrVHxP7KV+0GOAfM/RAU50IDF9D/sOv7dhJ32P6k2S2uaifg/fPgfeMGJ+j9lgHwE+p38P2TOYBBExv4/PnHmzU+BAEBTXmBThqkBQHMunpjF2wJAnuGfnQ0YBEDUd2ViXl4FQBXx7ua3rgZAYU08KxoJCEC3jE0vhW0JQBmvIvP42wpAhbS7dnVUDED8nBi6+tYNQIBoOb2IYw9AhwsPwA99EEBTVGOBX00RQKSOmaKzIhJAe7qxIwz9EkDX16sEadwTQLnmh0XKwBRAIOdF5i+qFUAN2eXmmZgWQH+8Z0cIjBdAd5HLB3uEGED0VxEo8oEZQPYPOahthBpAfrlCiO2LG0CLVC7IcZgcQB7h+2f6qR1AOV+rZ4fAHkDXzjzHGNwfQP0XWENXfiBAUcECUyQRIUBoY56Sc6YhQEL+KgJFPiJA3pGooZjYIkA+HhdxbnUjQGCjdnDGFCRARCHHn6C2JEDrlwj//FolQFYHO47bASZAgm9eTTyrJkBy0HI8H1cnQCQqeFuEBShAmXxuqmu2KEDRx1Up1WkpQMsLLtjAHypAiEj3ti7YKkAIfrHFHpMrQEusXASRUCxAUtP4coUQLUAa84UR/NItQKULBOD0ly5A8hxz3m9fL0CAk2mGthQwQOoUkjX2ejBAtRKz/HbiMEDhjMzbOEsxQG6D3tI7tTFAXfbo4X8gMkCt5esIBY0yQF9R50fL+jJAcjnbntJpM0DmnccNG9ozQLx+rJSkSzRA89uJM2++NECMtV/qejI1QIULLrnHpzVA4d30n1UeNkCdLLSeJJY2QLv3a7U0DzdAOj8c5IWJN0AbA8UqGAU4QF1DZonrgThAAAAAAAAAOUA=","dtype":"float64","shape":[100]}}},"id":"56403496-a5f0-4ba5-a9ae-26d6a3732dcc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"906746f1-303c-4b02-970a-7cb35a1d4b3b","type":"ColumnDataSource"},"glyph":{"id":"6663e602-b8fe-460e-baba-d5b3f5223bab","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7d9e67c0-1a68-4ec5-b007-51b2d43c9a22","type":"Circle"},"selection_glyph":null,"view":{"id":"4ae02383-cb6b-4ca1-9f8e-969310337635","type":"CDSView"}},"id":"eae7589c-cb49-4339-a8e1-24a351dc7143","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b0ccc519-3534-4933-8f80-8845852779c1","type":"ColumnDataSource"}},"id":"1effd36a-c003-4b6a-a3cc-cea18239e103","type":"CDSView"},{"attributes":{"plot":{"id":"f79e4e11-85b5-4202-8a90-b005457c38e2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e63f8650-977b-4b10-828d-73e9942536a1","type":"BasicTicker"}},"id":"b9411884-d005-4bdb-adbd-a507ecb30110","type":"Grid"},{"attributes":{"line_color":"coral","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5759336b-b595-457b-b501-c28429402e46","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"49f87022-fe38-4e45-b19e-cbab1b995fd7","type":"Line"},{"attributes":{"source":{"id":"fe9dff86-ec21-4a23-bb59-9660c49d8405","type":"ColumnDataSource"}},"id":"8c4a94d9-1098-448a-a212-1fd36783497e","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"LCYBeWhf8D9YMo0XTNjwP7lwLUUCh/E/NjZCrMRx8j87ZNvsLqHzP+s6F4zFIPU/YAoDerD/9j+XyDq0uVH5P0MCUFynMPw/TRHUKBK+/z+8f05U8xICQA0App3p0ARAcZq3UwA/CECU6ZL4zY8MQIFhtex8AxFAP6btxtB/FEBKjPbKsfoYQGM2kHGfyB5AMZpbeAIvI0AH5FKJSC4oQIYxvnNS0y5AiHHCVfbeM0C9O/c5zOg5QOW5WYFAFUFAJuWASVPIRkBm4ubKcbpOQH4/7XEv9VRADuRKK4PpXEBjRQHMRytkQDSIFrOEdWxANGXnGldOdECK2v+QXk59QI2vcbE4Y4VAeoIUQEqSj0DzJrXrC5GXQMXu6N55yqFABtZBY48qq0BNolG88/m0QIE0fTFxYcBAtutQNLLfyUCPyYwgiarUQF14O/2kseBAHGzPk8BG60AR7qUTUYn2QDQya/DT1AJBEgzOQ/PTD0EtCEvtxTMbQSlVrNU4gydBCZrJvtCNNEHvLeFb5itCQSWl2HpXP1BB9xUmlEJiXUGkaOoFQt9qQUBCEYqY2nhBMtlXhIA/h0FIwsH6IP6VQYUylEGJCqVBAZ+ndvNbtEF9K1xSPezDQeyPmeGLt9NBstmtihK840HfyIy9+PnzQYI/tDJccwRCHtS25m8sFUKfdupPuismQtnPVt13ejdCRZGI5yklSUKTfq80XjxbQqfO8X3A1W1Cfi4jU8eGgEJPL1U5SYSSQnKjp+9o+6RCBDpeyJ0LuEJ6oL8YWd7LQjRq+AFBVeBCKHUzg6Zc80KX55M5gTYHQyX22z1FJRxDefJ5c75BMUPhskwkvGZFQyjaa1mg11pDdqC5HDYGcUMsRNBD9taFQ7zVXEjHVZxDvV7SUPSWskNBaeCWN6vIQ1MK4gW+jeBDUmAb4uJ39kNvBEh2m9cORMzBz6igaCVEHdjoee0OPkSJtWQLN1dVRJ1sFjyEpW5EdLhNtDxBhkRmx7muJFigRHoUFimIR7hEeEGiGvQ80kTHykxO/LXrRAshCGZtSgVFkQIoLCqLIEU=","dtype":"float64","shape":[100]}}},"id":"7944ff03-5626-4c68-829d-47f7049140a1","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ca90a98e-6832-41c2-81fa-808e0f89e2ae","type":"ColumnDataSource"}},"id":"e98d8ea0-e878-464c-bfb7-b538f05bb7cd","type":"CDSView"},{"attributes":{},"id":"e63f8650-977b-4b10-828d-73e9942536a1","type":"BasicTicker"},{"attributes":{"label":{"value":"y=x**2"},"renderers":[{"id":"7f1df219-5bed-4e96-845c-4d302456d55f","type":"GlyphRenderer"},{"id":"25c0cb0b-49e5-4f44-b5a1-f2f39ebc2f4e","type":"GlyphRenderer"}]},"id":"d310784e-545e-4a7f-88a4-cdd88e3dfc5e","type":"LegendItem"},{"attributes":{"line_color":"tomato","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"1b31a23f-7b7d-46fc-9a0b-1cf406b01e35","type":"Line"},{"attributes":{"below":[{"id":"d986c114-91e8-4882-a393-72d1f8e17dad","type":"LinearAxis"}],"left":[{"id":"404b4b58-7308-4c05-86a1-31d2cbcc2b87","type":"LogAxis"}],"renderers":[{"id":"d986c114-91e8-4882-a393-72d1f8e17dad","type":"LinearAxis"},{"id":"b9411884-d005-4bdb-adbd-a507ecb30110","type":"Grid"},{"id":"404b4b58-7308-4c05-86a1-31d2cbcc2b87","type":"LogAxis"},{"id":"f2591221-59d8-4b79-a4c1-a8c59d270e33","type":"Grid"},{"id":"26dbbb99-ed84-4d96-a6e6-880d21326548","type":"BoxAnnotation"},{"id":"518305bd-1386-47b0-82da-a2952df09da1","type":"Legend"},{"id":"d11ecba8-937d-40d5-b91a-cd9fd57c43ad","type":"GlyphRenderer"},{"id":"aa0f4b18-35b8-415a-b94a-967a8215fa20","type":"GlyphRenderer"},{"id":"eae7589c-cb49-4339-a8e1-24a351dc7143","type":"GlyphRenderer"},{"id":"7f1df219-5bed-4e96-845c-4d302456d55f","type":"GlyphRenderer"},{"id":"25c0cb0b-49e5-4f44-b5a1-f2f39ebc2f4e","type":"GlyphRenderer"},{"id":"539a291a-7ec7-42ed-b91f-87b5cbd094f6","type":"GlyphRenderer"},{"id":"1e03a67e-cce7-48c0-8838-7606cbd90495","type":"GlyphRenderer"},{"id":"a88ff26a-76e6-46ab-830e-16cbc415a1c0","type":"GlyphRenderer"}],"title":{"id":"8e25e198-305e-404e-bc29-5a7f5e13d311","type":"Title"},"toolbar":{"id":"c0014346-bf36-4f4f-8708-865d15a6ed62","type":"Toolbar"},"x_range":{"id":"47b38adb-f156-44be-9b21-858cefef859c","type":"DataRange1d"},"x_scale":{"id":"a01a0c42-4be6-4b97-814d-2aa916ba8fd3","type":"LinearScale"},"y_range":{"id":"43c6a57e-e33b-428b-82e3-4dad44d01c8b","type":"Range1d"},"y_scale":{"id":"395935b8-697f-4514-af0f-48bd2321f68b","type":"LogScale"}},"id":"f79e4e11-85b5-4202-8a90-b005457c38e2","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d9e67c0-1a68-4ec5-b007-51b2d43c9a22","type":"Circle"}],"root_ids":["f79e4e11-85b5-4202-8a90-b005457c38e2"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"57d487b8-c33a-4536-b7ac-c8d883e2071a","elementid":"2fefaf9d-d89d-448c-aaaf-442a5863b43f","modelid":"f79e4e11-85b5-4202-8a90-b005457c38e2"}];
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