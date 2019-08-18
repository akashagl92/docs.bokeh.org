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
      };var element = document.getElementById("2f105fad-057a-4855-9e8b-58c1da502db3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2f105fad-057a-4855-9e8b-58c1da502db3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9be9dd14-8b5b-4a0c-9df8-e6fec42cffd6":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1356998400000.0,1357084800000.0,1357171200000.0,1357257600000.0,1357344000000.0,1357430400000.0,1357516800000.0,1357603200000.0,1357689600000.0,1357776000000.0,1357862400000.0,1357948800000.0,1358035200000.0,1358121600000.0,1358208000000.0,1358294400000.0,1358380800000.0,1358467200000.0,1358553600000.0,1358640000000.0,1358726400000.0,1358812800000.0,1358899200000.0,1358985600000.0,1359072000000.0,1359158400000.0,1359244800000.0,1359331200000.0,1359417600000.0,1359504000000.0,1359590400000.0,1359676800000.0,1359763200000.0,1359849600000.0,1359936000000.0,1360022400000.0,1360108800000.0,1360195200000.0,1360281600000.0,1360368000000.0,1360454400000.0,1360540800000.0,1360627200000.0,1360713600000.0,1360800000000.0,1360886400000.0,1360972800000.0,1361059200000.0,1361145600000.0,1361232000000.0,1361318400000.0,1361404800000.0,1361491200000.0,1361577600000.0,1361664000000.0,1361750400000.0,1361836800000.0,1361923200000.0,1362009600000.0,1362096000000.0,1362182400000.0,1362268800000.0,1362355200000.0,1362441600000.0,1362528000000.0,1362614400000.0,1362700800000.0,1362787200000.0,1362873600000.0,1362960000000.0,1363046400000.0,1363132800000.0,1363219200000.0,1363305600000.0,1363392000000.0,1363478400000.0,1363564800000.0,1363651200000.0,1363737600000.0,1363824000000.0,1363910400000.0,1363996800000.0,1364083200000.0,1364169600000.0,1364256000000.0,1364342400000.0,1364428800000.0,1364515200000.0,1364601600000.0,1364688000000.0,1364774400000.0,1364860800000.0,1364947200000.0,1365033600000.0,1365120000000.0,1365206400000.0,1365292800000.0,1365379200000.0,1365465600000.0,1365552000000.0,1365638400000.0,1365724800000.0,1365811200000.0,1365897600000.0,1365984000000.0,1366070400000.0,1366156800000.0,1366243200000.0,1366329600000.0,1366416000000.0,1366502400000.0,1366588800000.0,1366675200000.0,1366761600000.0,1366848000000.0,1366934400000.0,1367020800000.0,1367107200000.0,1367193600000.0,1367280000000.0,1367366400000.0,1367452800000.0,1367539200000.0,1367625600000.0,1367712000000.0,1367798400000.0,1367884800000.0,1367971200000.0,1368057600000.0,1368144000000.0,1368230400000.0,1368316800000.0,1368403200000.0,1368489600000.0,1368576000000.0,1368662400000.0,1368748800000.0,1368835200000.0,1368921600000.0,1369008000000.0,1369094400000.0,1369180800000.0,1369267200000.0,1369353600000.0,1369440000000.0,1369526400000.0,1369612800000.0,1369699200000.0,1369785600000.0,1369872000000.0,1369958400000.0,1370044800000.0,1370131200000.0,1370217600000.0,1370304000000.0,1370390400000.0,1370476800000.0,1370563200000.0,1370649600000.0,1370736000000.0,1370822400000.0,1370908800000.0,1370995200000.0,1371081600000.0,1371168000000.0,1371254400000.0,1371340800000.0,1371427200000.0,1371513600000.0,1371600000000.0,1371686400000.0,1371772800000.0,1371859200000.0,1371945600000.0,1372032000000.0,1372118400000.0,1372204800000.0,1372291200000.0,1372377600000.0,1372464000000.0,1372550400000.0,1372636800000.0,1372723200000.0,1372809600000.0,1372896000000.0,1372982400000.0,1373068800000.0,1373155200000.0,1373241600000.0,1373328000000.0,1373414400000.0,1373500800000.0,1373587200000.0,1373673600000.0,1373760000000.0,1373846400000.0,1373932800000.0,1374019200000.0,1374105600000.0,1374192000000.0,1374278400000.0,1374364800000.0,1374451200000.0,1374537600000.0,1374624000000.0,1374710400000.0,1374796800000.0,1374883200000.0,1374969600000.0,1375056000000.0,1375142400000.0,1375228800000.0,1375315200000.0,1375401600000.0,1375488000000.0,1375574400000.0,1375660800000.0,1375747200000.0,1375833600000.0,1375920000000.0,1376006400000.0,1376092800000.0,1376179200000.0,1376265600000.0,1376352000000.0,1376438400000.0,1376524800000.0,1376611200000.0,1376697600000.0,1376784000000.0,1376870400000.0,1376956800000.0,1377043200000.0,1377129600000.0,1377216000000.0,1377302400000.0,1377388800000.0,1377475200000.0,1377561600000.0,1377648000000.0,1377734400000.0,1377820800000.0,1377907200000.0,1377993600000.0,1378080000000.0,1378166400000.0,1378252800000.0,1378339200000.0,1378425600000.0,1378512000000.0,1378598400000.0,1378684800000.0,1378771200000.0,1378857600000.0,1378944000000.0,1379030400000.0,1379116800000.0,1379203200000.0,1379289600000.0,1379376000000.0,1379462400000.0,1379548800000.0,1379635200000.0,1379721600000.0,1379808000000.0,1379894400000.0,1379980800000.0,1380067200000.0,1380153600000.0,1380240000000.0,1380326400000.0,1380412800000.0,1380499200000.0,1380585600000.0,1380672000000.0,1380758400000.0,1380844800000.0,1380931200000.0,1381017600000.0,1381104000000.0,1381190400000.0,1381276800000.0,1381363200000.0,1381449600000.0,1381536000000.0,1381622400000.0,1381708800000.0,1381795200000.0,1381881600000.0,1381968000000.0,1382054400000.0,1382140800000.0,1382227200000.0,1382313600000.0,1382400000000.0,1382486400000.0,1382572800000.0,1382659200000.0,1382745600000.0,1382832000000.0,1382918400000.0,1383004800000.0,1383091200000.0,1383177600000.0,1383264000000.0,1383350400000.0,1383436800000.0,1383523200000.0,1383609600000.0,1383696000000.0,1383782400000.0,1383868800000.0,1383955200000.0,1384041600000.0,1384128000000.0,1384214400000.0,1384300800000.0,1384387200000.0,1384473600000.0,1384560000000.0,1384646400000.0,1384732800000.0,1384819200000.0,1384905600000.0,1384992000000.0,1385078400000.0,1385164800000.0,1385251200000.0,1385337600000.0,1385424000000.0,1385510400000.0,1385596800000.0,1385683200000.0,1385769600000.0,1385856000000.0,1385942400000.0,1386028800000.0,1386115200000.0,1386201600000.0,1386288000000.0,1386374400000.0,1386460800000.0,1386547200000.0,1386633600000.0,1386720000000.0,1386806400000.0,1386892800000.0,1386979200000.0,1387065600000.0,1387152000000.0,1387238400000.0,1387324800000.0,1387411200000.0,1387497600000.0,1387584000000.0,1387670400000.0,1387756800000.0,1387843200000.0,1387929600000.0,1388016000000.0,1388102400000.0,1388188800000.0,1388275200000.0,1388361600000.0,1388448000000.0],"y":[27900000.0,27900000.0,27900000.0,27900000.0,27840000.0,27840000.0,27840000.0,27780000.0,27780000.0,27720000.0,27660000.0,27660000.0,27600000.0,27540000.0,27480000.0,27420000.0,27360000.0,27300000.0,27240000.0,27180000.0,27120000.0,27060000.0,27000000.0,26880000.0,26820000.0,26760000.0,26640000.0,26580000.0,26520000.0,26400000.0,26340000.0,26220000.0,26100000.0,26040000.0,25920000.0,25800000.0,25740000.0,25620000.0,25500000.0,25380000.0,25260000.0,25200000.0,25080000.0,24960000.0,24840000.0,24720000.0,24600000.0,24480000.0,24360000.0,24240000.0,24120000.0,24000000.0,23880000.0,23700000.0,23580000.0,23460000.0,23340000.0,23220000.0,23100000.0,22920000.0,22800000.0,22680000.0,22560000.0,22440000.0,22260000.0,22140000.0,22020000.0,21840000.0,21720000.0,21600000.0,21480000.0,21300000.0,21180000.0,21060000.0,20880000.0,20760000.0,20640000.0,20460000.0,20340000.0,20220000.0,20040000.0,19920000.0,19800000.0,19620000.0,19500000.0,19380000.0,19200000.0,19080000.0,18960000.0,22380000.0,22260000.0,22140000.0,21960000.0,21840000.0,21720000.0,21540000.0,21420000.0,21300000.0,21180000.0,21000000.0,20880000.0,20760000.0,20640000.0,20460000.0,20340000.0,20220000.0,20100000.0,19980000.0,19800000.0,19680000.0,19560000.0,19440000.0,19320000.0,19200000.0,19080000.0,18960000.0,18840000.0,18720000.0,18600000.0,18480000.0,18360000.0,18240000.0,18120000.0,18000000.0,17880000.0,17760000.0,17700000.0,17580000.0,17460000.0,17340000.0,17280000.0,17160000.0,17040000.0,16980000.0,16860000.0,16800000.0,16680000.0,16620000.0,16500000.0,16440000.0,16380000.0,16260000.0,16200000.0,16140000.0,16080000.0,16020000.0,15960000.0,15840000.0,15780000.0,15780000.0,15720000.0,15660000.0,15600000.0,15540000.0,15480000.0,15480000.0,15420000.0,15420000.0,15360000.0,15360000.0,15300000.0,15300000.0,15300000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15300000.0,15300000.0,15300000.0,15360000.0,15360000.0,15420000.0,15420000.0,15480000.0,15480000.0,15540000.0,15600000.0,15600000.0,15660000.0,15720000.0,15780000.0,15840000.0,15900000.0,15960000.0,16020000.0,16080000.0,16140000.0,16200000.0,16260000.0,16380000.0,16440000.0,16500000.0,16560000.0,16680000.0,16740000.0,16800000.0,16920000.0,16980000.0,17100000.0,17160000.0,17280000.0,17340000.0,17460000.0,17520000.0,17640000.0,17700000.0,17820000.0,17880000.0,18000000.0,18060000.0,18180000.0,18300000.0,18360000.0,18480000.0,18540000.0,18660000.0,18780000.0,18840000.0,18960000.0,19020000.0,19140000.0,19260000.0,19320000.0,19440000.0,19560000.0,19620000.0,19740000.0,19860000.0,19920000.0,20040000.0,20160000.0,20220000.0,20340000.0,20400000.0,20520000.0,20640000.0,20700000.0,20820000.0,20940000.0,21000000.0,21120000.0,21240000.0,21300000.0,21420000.0,21540000.0,21600000.0,21720000.0,21780000.0,21900000.0,22020000.0,22080000.0,22200000.0,22320000.0,22380000.0,22500000.0,22620000.0,22680000.0,22800000.0,22920000.0,22980000.0,23100000.0,23220000.0,23280000.0,23400000.0,23520000.0,23580000.0,23700000.0,23820000.0,23880000.0,24000000.0,24120000.0,24180000.0,24300000.0,24420000.0,24540000.0,24600000.0,24720000.0,24840000.0,24900000.0,25020000.0,25140000.0,25260000.0,25320000.0,25440000.0,25560000.0,25680000.0,25740000.0,25860000.0,25980000.0,26100000.0,26220000.0,26280000.0,26400000.0,22920000.0,23040000.0,23160000.0,23220000.0,23340000.0,23460000.0,23580000.0,23700000.0,23820000.0,23880000.0,24000000.0,24120000.0,24240000.0,24360000.0,24420000.0,24540000.0,24660000.0,24780000.0,24900000.0,24960000.0,25080000.0,25200000.0,25320000.0,25380000.0,25500000.0,25620000.0,25680000.0,25800000.0,25920000.0,25980000.0,26100000.0,26160000.0,26280000.0,26340000.0,26460000.0,26520000.0,26640000.0,26700000.0,26760000.0,26880000.0,26940000.0,27000000.0,27120000.0,27180000.0,27240000.0,27300000.0,27360000.0,27420000.0,27480000.0,27540000.0,27540000.0,27600000.0,27660000.0,27720000.0,27720000.0,27780000.0,27780000.0,27840000.0,27840000.0,27900000.0,27900000.0,27900000.0,27900000.0,27900000.0,27900000.0,27900000.0]}},"id":"0ba7f422-c6eb-43b6-bc22-45356f4af10f","type":"ColumnDataSource"},{"attributes":{},"id":"8d0fb61c-04b2-44cd-be72-d2c3bf956051","type":"SaveTool"},{"attributes":{"months":[0,4,8]},"id":"dff0f04c-332f-443f-871f-d4c455ac158c","type":"MonthsTicker"},{"attributes":{},"id":"8ed77244-fbf5-4e98-866d-b90bf5e10ac9","type":"DatetimeTickFormatter"},{"attributes":{"axis_label":"Time of Day","formatter":{"id":"8ed77244-fbf5-4e98-866d-b90bf5e10ac9","type":"DatetimeTickFormatter"},"plot":{"id":"96a6d432-8064-462e-92b4-527b337a4466","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a6f5045-c4cb-42ea-b748-eb474d583a39","type":"DatetimeTicker"}},"id":"881f4f0c-8ace-4a34-8ffb-c5b754b87437","type":"DatetimeAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5db12c13-aadb-4876-a4bc-3f76768992f0","type":"Line"},{"attributes":{},"id":"f37986fd-1299-4c7b-a067-2d2dbd1d831a","type":"PanTool"},{"attributes":{"items":[{"id":"91d1abc7-49cf-4833-9085-02063c9b285d","type":"LegendItem"},{"id":"ad0e5df2-418c-48fb-b5a6-6b095a04cde6","type":"LegendItem"}],"plot":{"id":"96a6d432-8064-462e-92b4-527b337a4466","subtype":"Figure","type":"Plot"}},"id":"408b1ccf-9842-41fb-961b-34abf69d6644","type":"Legend"},{"attributes":{"label":{"value":"Sunrise"},"renderers":[{"id":"315ebb5d-abfc-45fa-83e4-2207c41f2b54","type":"GlyphRenderer"}]},"id":"ad0e5df2-418c-48fb-b5a6-6b095a04cde6","type":"LegendItem"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"b1072593-1a91-45bb-9009-199e3473a050","type":"AdaptiveTicker"},{"attributes":{"days":[1,15]},"id":"a93b4de1-b9fe-406c-8c7f-c2cb202cec0d","type":"DaysTicker"},{"attributes":{"months":[0,6]},"id":"4903e0a4-9117-41c3-a6bf-ef9ecd298474","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"3154dbb0-2011-4c24-a7a2-30acb0aeebd7","type":"ColumnDataSource"},"glyph":{"id":"aa68dddc-1a04-4043-a5ce-1c063efab9e8","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5db12c13-aadb-4876-a4bc-3f76768992f0","type":"Line"},"selection_glyph":null,"view":{"id":"f2966553-fdb5-4b26-837e-5ed8d718cd41","type":"CDSView"}},"id":"6cb869bd-7b5d-4d01-8a44-017a986271df","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"29da46e5-97eb-4cf6-b3bd-06865dba008d","type":"DatetimeTickFormatter"},"plot":{"id":"96a6d432-8064-462e-92b4-527b337a4466","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b584a33-15d3-4dc6-8407-accec7c646a6","type":"DatetimeTicker"}},"id":"2cd5cace-c16a-4f99-92d5-c7d05936bf3e","type":"DatetimeAxis"},{"attributes":{"overlay":{"id":"f10f0fee-66d6-4e5d-9326-e6fdcf91700d","type":"BoxAnnotation"}},"id":"5b14dbb6-3bf4-4f7e-8599-bfdaf1b0c164","type":"BoxZoomTool"},{"attributes":{},"id":"966a04ea-f083-4148-a5a2-19539cc6301d","type":"ResetTool"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"47bab64c-8e71-44a1-b8ea-966f2649cb77","type":"AdaptiveTicker"},{"id":"d95bdd92-7978-4311-81cf-4d7281c2508c","type":"AdaptiveTicker"},{"id":"cf5ea2bf-aff8-4e77-9520-e928b5f8272a","type":"AdaptiveTicker"},{"id":"7a72d733-a12d-4e04-880a-3185f14416e0","type":"DaysTicker"},{"id":"2cc145f9-3906-4802-9494-6aa13a7e3d68","type":"DaysTicker"},{"id":"9f180c52-5ded-4736-a8e3-c7106fe3edcf","type":"DaysTicker"},{"id":"88eb5766-4287-41b4-b4d7-0105f7554493","type":"DaysTicker"},{"id":"13685445-e0ba-4d65-996c-5acbbd70091c","type":"MonthsTicker"},{"id":"5640d881-42b4-4124-849d-1e3240089278","type":"MonthsTicker"},{"id":"dff0f04c-332f-443f-871f-d4c455ac158c","type":"MonthsTicker"},{"id":"4903e0a4-9117-41c3-a6bf-ef9ecd298474","type":"MonthsTicker"},{"id":"a2c866d4-1289-418a-9ba7-287f6e454b33","type":"YearsTicker"}]},"id":"4a6f5045-c4cb-42ea-b748-eb474d583a39","type":"DatetimeTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"637d122e-4f4d-4665-b222-4d79c1199c52","type":"MonthsTicker"},{"attributes":{},"id":"653ea7fb-5b07-44e6-b2e8-edaf79189394","type":"WheelZoomTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"d95bdd92-7978-4311-81cf-4d7281c2508c","type":"AdaptiveTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c051bfac-42f7-4621-8d1a-48fd79e1a1ad","type":"Line"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"13685445-e0ba-4d65-996c-5acbbd70091c","type":"MonthsTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"7a72d733-a12d-4e04-880a-3185f14416e0","type":"DaysTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"34e571fd-0a5a-4bd2-8582-b6745f70dd10","type":"MonthsTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"cf5ea2bf-aff8-4e77-9520-e928b5f8272a","type":"AdaptiveTicker"},{"attributes":{},"id":"28e45be9-3fdb-4c0f-85f1-99c93139eb9f","type":"YearsTicker"},{"attributes":{},"id":"4e65f3ea-ed7b-4608-aa04-16aef106135e","type":"HelpTool"},{"attributes":{"days":[1,8,15,22]},"id":"dd5192f6-53b6-4057-8e19-07bf75f2ed26","type":"DaysTicker"},{"attributes":{"data_source":{"id":"0ba7f422-c6eb-43b6-bc22-45356f4af10f","type":"ColumnDataSource"},"glyph":{"id":"5a43d900-2bb8-435c-9c60-4b2ceaca2a7f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c051bfac-42f7-4621-8d1a-48fd79e1a1ad","type":"Line"},"selection_glyph":null,"view":{"id":"85a68724-bbae-44e5-9712-4d68514f404e","type":"CDSView"}},"id":"315ebb5d-abfc-45fa-83e4-2207c41f2b54","type":"GlyphRenderer"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"2cc145f9-3906-4802-9494-6aa13a7e3d68","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"88eb5766-4287-41b4-b4d7-0105f7554493","type":"DaysTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"47bab64c-8e71-44a1-b8ea-966f2649cb77","type":"AdaptiveTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"5640d881-42b4-4124-849d-1e3240089278","type":"MonthsTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"ca1b60ca-06aa-4658-b1b4-0eb27864096c","type":"AdaptiveTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1356998400000.0,1357084800000.0,1357171200000.0,1357257600000.0,1357344000000.0,1357430400000.0,1357516800000.0,1357603200000.0,1357689600000.0,1357776000000.0,1357862400000.0,1357948800000.0,1358035200000.0,1358121600000.0,1358208000000.0,1358294400000.0,1358380800000.0,1358467200000.0,1358553600000.0,1358640000000.0,1358726400000.0,1358812800000.0,1358899200000.0,1358985600000.0,1359072000000.0,1359158400000.0,1359244800000.0,1359331200000.0,1359417600000.0,1359504000000.0,1359590400000.0,1359676800000.0,1359763200000.0,1359849600000.0,1359936000000.0,1360022400000.0,1360108800000.0,1360195200000.0,1360281600000.0,1360368000000.0,1360454400000.0,1360540800000.0,1360627200000.0,1360713600000.0,1360800000000.0,1360886400000.0,1360972800000.0,1361059200000.0,1361145600000.0,1361232000000.0,1361318400000.0,1361404800000.0,1361491200000.0,1361577600000.0,1361664000000.0,1361750400000.0,1361836800000.0,1361923200000.0,1362009600000.0,1362096000000.0,1362182400000.0,1362268800000.0,1362355200000.0,1362441600000.0,1362528000000.0,1362614400000.0,1362700800000.0,1362787200000.0,1362873600000.0,1362960000000.0,1363046400000.0,1363132800000.0,1363219200000.0,1363305600000.0,1363392000000.0,1363478400000.0,1363564800000.0,1363651200000.0,1363737600000.0,1363824000000.0,1363910400000.0,1363996800000.0,1364083200000.0,1364169600000.0,1364256000000.0,1364342400000.0,1364428800000.0,1364515200000.0,1364601600000.0,1364688000000.0,1364774400000.0,1364860800000.0,1364947200000.0,1365033600000.0,1365120000000.0,1365206400000.0,1365292800000.0,1365379200000.0,1365465600000.0,1365552000000.0,1365638400000.0,1365724800000.0,1365811200000.0,1365897600000.0,1365984000000.0,1366070400000.0,1366156800000.0,1366243200000.0,1366329600000.0,1366416000000.0,1366502400000.0,1366588800000.0,1366675200000.0,1366761600000.0,1366848000000.0,1366934400000.0,1367020800000.0,1367107200000.0,1367193600000.0,1367280000000.0,1367366400000.0,1367452800000.0,1367539200000.0,1367625600000.0,1367712000000.0,1367798400000.0,1367884800000.0,1367971200000.0,1368057600000.0,1368144000000.0,1368230400000.0,1368316800000.0,1368403200000.0,1368489600000.0,1368576000000.0,1368662400000.0,1368748800000.0,1368835200000.0,1368921600000.0,1369008000000.0,1369094400000.0,1369180800000.0,1369267200000.0,1369353600000.0,1369440000000.0,1369526400000.0,1369612800000.0,1369699200000.0,1369785600000.0,1369872000000.0,1369958400000.0,1370044800000.0,1370131200000.0,1370217600000.0,1370304000000.0,1370390400000.0,1370476800000.0,1370563200000.0,1370649600000.0,1370736000000.0,1370822400000.0,1370908800000.0,1370995200000.0,1371081600000.0,1371168000000.0,1371254400000.0,1371340800000.0,1371427200000.0,1371513600000.0,1371600000000.0,1371686400000.0,1371772800000.0,1371859200000.0,1371945600000.0,1372032000000.0,1372118400000.0,1372204800000.0,1372291200000.0,1372377600000.0,1372464000000.0,1372550400000.0,1372636800000.0,1372723200000.0,1372809600000.0,1372896000000.0,1372982400000.0,1373068800000.0,1373155200000.0,1373241600000.0,1373328000000.0,1373414400000.0,1373500800000.0,1373587200000.0,1373673600000.0,1373760000000.0,1373846400000.0,1373932800000.0,1374019200000.0,1374105600000.0,1374192000000.0,1374278400000.0,1374364800000.0,1374451200000.0,1374537600000.0,1374624000000.0,1374710400000.0,1374796800000.0,1374883200000.0,1374969600000.0,1375056000000.0,1375142400000.0,1375228800000.0,1375315200000.0,1375401600000.0,1375488000000.0,1375574400000.0,1375660800000.0,1375747200000.0,1375833600000.0,1375920000000.0,1376006400000.0,1376092800000.0,1376179200000.0,1376265600000.0,1376352000000.0,1376438400000.0,1376524800000.0,1376611200000.0,1376697600000.0,1376784000000.0,1376870400000.0,1376956800000.0,1377043200000.0,1377129600000.0,1377216000000.0,1377302400000.0,1377388800000.0,1377475200000.0,1377561600000.0,1377648000000.0,1377734400000.0,1377820800000.0,1377907200000.0,1377993600000.0,1378080000000.0,1378166400000.0,1378252800000.0,1378339200000.0,1378425600000.0,1378512000000.0,1378598400000.0,1378684800000.0,1378771200000.0,1378857600000.0,1378944000000.0,1379030400000.0,1379116800000.0,1379203200000.0,1379289600000.0,1379376000000.0,1379462400000.0,1379548800000.0,1379635200000.0,1379721600000.0,1379808000000.0,1379894400000.0,1379980800000.0,1380067200000.0,1380153600000.0,1380240000000.0,1380326400000.0,1380412800000.0,1380499200000.0,1380585600000.0,1380672000000.0,1380758400000.0,1380844800000.0,1380931200000.0,1381017600000.0,1381104000000.0,1381190400000.0,1381276800000.0,1381363200000.0,1381449600000.0,1381536000000.0,1381622400000.0,1381708800000.0,1381795200000.0,1381881600000.0,1381968000000.0,1382054400000.0,1382140800000.0,1382227200000.0,1382313600000.0,1382400000000.0,1382486400000.0,1382572800000.0,1382659200000.0,1382745600000.0,1382832000000.0,1382918400000.0,1383004800000.0,1383091200000.0,1383177600000.0,1383264000000.0,1383350400000.0,1383436800000.0,1383523200000.0,1383609600000.0,1383696000000.0,1383782400000.0,1383868800000.0,1383955200000.0,1384041600000.0,1384128000000.0,1384214400000.0,1384300800000.0,1384387200000.0,1384473600000.0,1384560000000.0,1384646400000.0,1384732800000.0,1384819200000.0,1384905600000.0,1384992000000.0,1385078400000.0,1385164800000.0,1385251200000.0,1385337600000.0,1385424000000.0,1385510400000.0,1385596800000.0,1385683200000.0,1385769600000.0,1385856000000.0,1385942400000.0,1386028800000.0,1386115200000.0,1386201600000.0,1386288000000.0,1386374400000.0,1386460800000.0,1386547200000.0,1386633600000.0,1386720000000.0,1386806400000.0,1386892800000.0,1386979200000.0,1387065600000.0,1387152000000.0,1387238400000.0,1387324800000.0,1387411200000.0,1387497600000.0,1387584000000.0,1387670400000.0,1387756800000.0,1387843200000.0,1387929600000.0,1388016000000.0,1388102400000.0,1388188800000.0,1388275200000.0,1388361600000.0,1388448000000.0],"y":[56040000.0,56100000.0,56160000.0,56220000.0,56280000.0,56340000.0,56460000.0,56520000.0,56580000.0,56700000.0,56760000.0,56880000.0,56940000.0,57060000.0,57120000.0,57240000.0,57360000.0,57420000.0,57540000.0,57660000.0,57720000.0,57840000.0,57960000.0,58020000.0,58140000.0,58260000.0,58380000.0,58500000.0,58560000.0,58680000.0,58800000.0,58920000.0,59040000.0,59160000.0,59280000.0,59400000.0,59460000.0,59580000.0,59700000.0,59820000.0,59940000.0,60060000.0,60180000.0,60300000.0,60360000.0,60480000.0,60600000.0,60720000.0,60840000.0,60960000.0,61080000.0,61200000.0,61260000.0,61380000.0,61500000.0,61620000.0,61740000.0,61860000.0,61920000.0,62040000.0,62160000.0,62280000.0,62400000.0,62460000.0,62580000.0,62700000.0,62820000.0,62940000.0,63000000.0,63120000.0,63240000.0,63360000.0,63480000.0,63540000.0,63660000.0,63780000.0,63900000.0,63960000.0,64080000.0,64200000.0,64320000.0,64380000.0,64500000.0,64620000.0,64680000.0,64800000.0,64920000.0,65040000.0,65100000.0,68820000.0,68940000.0,69060000.0,69120000.0,69240000.0,69360000.0,69420000.0,69540000.0,69660000.0,69780000.0,69840000.0,69960000.0,70080000.0,70200000.0,70260000.0,70380000.0,70500000.0,70560000.0,70680000.0,70800000.0,70920000.0,70980000.0,71100000.0,71220000.0,71280000.0,71400000.0,71520000.0,71640000.0,71700000.0,71820000.0,71940000.0,72000000.0,72120000.0,72240000.0,72300000.0,72420000.0,72540000.0,72600000.0,72720000.0,72840000.0,72900000.0,73020000.0,73140000.0,73200000.0,73320000.0,73380000.0,73500000.0,73560000.0,73680000.0,73740000.0,73860000.0,73920000.0,74040000.0,74100000.0,74220000.0,74280000.0,74340000.0,74460000.0,74520000.0,74580000.0,74640000.0,74760000.0,74820000.0,74880000.0,74940000.0,75000000.0,75060000.0,75120000.0,75180000.0,75240000.0,75300000.0,75300000.0,75360000.0,75420000.0,75480000.0,75480000.0,75540000.0,75540000.0,75600000.0,75600000.0,75600000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75600000.0,75600000.0,75540000.0,75540000.0,75480000.0,75480000.0,75420000.0,75360000.0,75360000.0,75300000.0,75240000.0,75180000.0,75120000.0,75060000.0,75000000.0,74940000.0,74880000.0,74820000.0,74760000.0,74640000.0,74580000.0,74520000.0,74400000.0,74340000.0,74220000.0,74160000.0,74040000.0,73980000.0,73860000.0,73800000.0,73680000.0,73560000.0,73500000.0,73380000.0,73260000.0,73140000.0,73020000.0,72960000.0,72840000.0,72720000.0,72600000.0,72480000.0,72360000.0,72240000.0,72120000.0,72000000.0,71880000.0,71760000.0,71640000.0,71520000.0,71340000.0,71220000.0,71100000.0,70980000.0,70860000.0,70740000.0,70560000.0,70440000.0,70320000.0,70200000.0,70020000.0,69900000.0,69780000.0,69600000.0,69480000.0,69360000.0,69240000.0,69060000.0,68940000.0,68820000.0,68640000.0,68520000.0,68400000.0,68220000.0,68100000.0,67920000.0,67800000.0,67680000.0,67500000.0,67380000.0,67260000.0,67080000.0,66960000.0,66840000.0,66660000.0,66540000.0,66420000.0,66240000.0,66120000.0,65940000.0,65820000.0,65700000.0,65520000.0,65400000.0,65280000.0,65160000.0,64980000.0,64860000.0,64740000.0,64560000.0,64440000.0,64320000.0,64200000.0,64020000.0,63900000.0,63780000.0,63660000.0,63540000.0,63360000.0,63240000.0,63120000.0,63000000.0,62880000.0,62760000.0,62640000.0,62520000.0,62400000.0,58680000.0,58560000.0,58440000.0,58320000.0,58200000.0,58080000.0,57960000.0,57840000.0,57780000.0,57660000.0,57540000.0,57420000.0,57360000.0,57240000.0,57120000.0,57060000.0,56940000.0,56880000.0,56760000.0,56700000.0,56580000.0,56520000.0,56460000.0,56340000.0,56280000.0,56220000.0,56160000.0,56100000.0,56040000.0,55980000.0,55920000.0,55860000.0,55800000.0,55740000.0,55680000.0,55620000.0,55620000.0,55560000.0,55560000.0,55500000.0,55500000.0,55440000.0,55440000.0,55440000.0,55380000.0,55380000.0,55380000.0,55380000.0,55380000.0,55380000.0,55380000.0,55440000.0,55440000.0,55440000.0,55440000.0,55500000.0,55500000.0,55560000.0,55620000.0,55620000.0,55680000.0,55740000.0,55740000.0,55800000.0,55860000.0,55920000.0]}},"id":"3154dbb0-2011-4c24-a7a2-30acb0aeebd7","type":"ColumnDataSource"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"426dad20-c311-45d2-ab45-42c9f1f2c63d","type":"DaysTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"d6f7d8a6-a3bb-455c-8ad3-1f337b134186","type":"DaysTicker"},{"attributes":{},"id":"270ad00b-88e2-4b2d-aba8-f92a22badc93","type":"LinearScale"},{"attributes":{"label":{"value":"Sunset"},"renderers":[{"id":"6cb869bd-7b5d-4d01-8a44-017a986271df","type":"GlyphRenderer"}]},"id":"91d1abc7-49cf-4833-9085-02063c9b285d","type":"LegendItem"},{"attributes":{"months":[0,6]},"id":"d1ba3264-f26a-4682-a5b1-291a42554c2f","type":"MonthsTicker"},{"attributes":{"dimension":"height","line_color":{"value":"green"},"line_dash":[6],"line_width":{"value":3},"location":1364695200000.0,"plot":{"id":"96a6d432-8064-462e-92b4-527b337a4466","subtype":"Figure","type":"Plot"}},"id":"c7c00436-5aa2-45ef-9352-91a699c84cdf","type":"Span"},{"attributes":{},"id":"c23e784c-0b48-444e-afef-5ae383ca8d17","type":"LinearScale"},{"attributes":{},"id":"a2c866d4-1289-418a-9ba7-287f6e454b33","type":"YearsTicker"},{"attributes":{"callback":null},"id":"e6a6a602-5175-40b2-8999-a1d5354a9f73","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"aa68dddc-1a04-4043-a5ce-1c063efab9e8","type":"Line"},{"attributes":{"below":[{"id":"2cd5cace-c16a-4f99-92d5-c7d05936bf3e","type":"DatetimeAxis"}],"left":[{"id":"881f4f0c-8ace-4a34-8ffb-c5b754b87437","type":"DatetimeAxis"}],"renderers":[{"id":"2cd5cace-c16a-4f99-92d5-c7d05936bf3e","type":"DatetimeAxis"},{"id":"994dc4eb-84ca-4ba8-9fef-3c8c349edb4e","type":"Grid"},{"id":"881f4f0c-8ace-4a34-8ffb-c5b754b87437","type":"DatetimeAxis"},{"id":"5e74c50f-c0fb-4da5-9190-18fcee5a3300","type":"Grid"},{"id":"f10f0fee-66d6-4e5d-9326-e6fdcf91700d","type":"BoxAnnotation"},{"id":"408b1ccf-9842-41fb-961b-34abf69d6644","type":"Legend"},{"id":"6cb869bd-7b5d-4d01-8a44-017a986271df","type":"GlyphRenderer"},{"id":"315ebb5d-abfc-45fa-83e4-2207c41f2b54","type":"GlyphRenderer"},{"id":"c7c00436-5aa2-45ef-9352-91a699c84cdf","type":"Span"},{"id":"e58df8f1-1421-4e01-a948-e737d9589529","type":"Span"}],"title":{"id":"7a8a70b7-e574-495c-ba76-514322722858","type":"Title"},"toolbar":{"id":"fb2c0826-bc6b-4a9b-a682-f84eb4acf01a","type":"Toolbar"},"x_range":{"id":"e6a6a602-5175-40b2-8999-a1d5354a9f73","type":"DataRange1d"},"x_scale":{"id":"c23e784c-0b48-444e-afef-5ae383ca8d17","type":"LinearScale"},"y_range":{"id":"0b25c696-cbb6-4098-b22f-b55e5e69b080","type":"DataRange1d"},"y_scale":{"id":"270ad00b-88e2-4b2d-aba8-f92a22badc93","type":"LinearScale"}},"id":"96a6d432-8064-462e-92b4-527b337a4466","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"0ba7f422-c6eb-43b6-bc22-45356f4af10f","type":"ColumnDataSource"}},"id":"85a68724-bbae-44e5-9712-4d68514f404e","type":"CDSView"},{"attributes":{"plot":{"id":"96a6d432-8064-462e-92b4-527b337a4466","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b584a33-15d3-4dc6-8407-accec7c646a6","type":"DatetimeTicker"}},"id":"994dc4eb-84ca-4ba8-9fef-3c8c349edb4e","type":"Grid"},{"attributes":{"dimension":"height","line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":1382842800000.0,"plot":{"id":"96a6d432-8064-462e-92b4-527b337a4466","subtype":"Figure","type":"Plot"}},"id":"e58df8f1-1421-4e01-a948-e737d9589529","type":"Span"},{"attributes":{},"id":"29da46e5-97eb-4cf6-b3bd-06865dba008d","type":"DatetimeTickFormatter"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"5a76150c-39e2-4030-a889-7d101434d664","type":"AdaptiveTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"b1072593-1a91-45bb-9009-199e3473a050","type":"AdaptiveTicker"},{"id":"5a76150c-39e2-4030-a889-7d101434d664","type":"AdaptiveTicker"},{"id":"ca1b60ca-06aa-4658-b1b4-0eb27864096c","type":"AdaptiveTicker"},{"id":"426dad20-c311-45d2-ab45-42c9f1f2c63d","type":"DaysTicker"},{"id":"d6f7d8a6-a3bb-455c-8ad3-1f337b134186","type":"DaysTicker"},{"id":"dd5192f6-53b6-4057-8e19-07bf75f2ed26","type":"DaysTicker"},{"id":"a93b4de1-b9fe-406c-8c7f-c2cb202cec0d","type":"DaysTicker"},{"id":"637d122e-4f4d-4665-b222-4d79c1199c52","type":"MonthsTicker"},{"id":"34e571fd-0a5a-4bd2-8582-b6745f70dd10","type":"MonthsTicker"},{"id":"fb338504-fa1c-4fdf-81fb-1f59481d21e4","type":"MonthsTicker"},{"id":"d1ba3264-f26a-4682-a5b1-291a42554c2f","type":"MonthsTicker"},{"id":"28e45be9-3fdb-4c0f-85f1-99c93139eb9f","type":"YearsTicker"}]},"id":"1b584a33-15d3-4dc6-8407-accec7c646a6","type":"DatetimeTicker"},{"attributes":{"callback":null},"id":"0b25c696-cbb6-4098-b22f-b55e5e69b080","type":"DataRange1d"},{"attributes":{"days":[1,8,15,22]},"id":"9f180c52-5ded-4736-a8e3-c7106fe3edcf","type":"DaysTicker"},{"attributes":{"source":{"id":"3154dbb0-2011-4c24-a7a2-30acb0aeebd7","type":"ColumnDataSource"}},"id":"f2966553-fdb5-4b26-837e-5ed8d718cd41","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"96a6d432-8064-462e-92b4-527b337a4466","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a6f5045-c4cb-42ea-b748-eb474d583a39","type":"DatetimeTicker"}},"id":"5e74c50f-c0fb-4da5-9190-18fcee5a3300","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f10f0fee-66d6-4e5d-9326-e6fdcf91700d","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f37986fd-1299-4c7b-a067-2d2dbd1d831a","type":"PanTool"},{"id":"653ea7fb-5b07-44e6-b2e8-edaf79189394","type":"WheelZoomTool"},{"id":"5b14dbb6-3bf4-4f7e-8599-bfdaf1b0c164","type":"BoxZoomTool"},{"id":"8d0fb61c-04b2-44cd-be72-d2c3bf956051","type":"SaveTool"},{"id":"966a04ea-f083-4148-a5a2-19539cc6301d","type":"ResetTool"},{"id":"4e65f3ea-ed7b-4608-aa04-16aef106135e","type":"HelpTool"}]},"id":"fb2c0826-bc6b-4a9b-a682-f84eb4acf01a","type":"Toolbar"},{"attributes":{"months":[0,4,8]},"id":"fb338504-fa1c-4fdf-81fb-1f59481d21e4","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"2013 Sunrise and Sunset times in Warsaw"},"id":"7a8a70b7-e574-495c-ba76-514322722858","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5a43d900-2bb8-435c-9c60-4b2ceaca2a7f","type":"Line"}],"root_ids":["96a6d432-8064-462e-92b4-527b337a4466"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"9be9dd14-8b5b-4a0c-9df8-e6fec42cffd6","elementid":"2f105fad-057a-4855-9e8b-58c1da502db3","modelid":"96a6d432-8064-462e-92b4-527b337a4466"}];
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