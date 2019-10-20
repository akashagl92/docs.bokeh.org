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
      };var element = document.getElementById("2c3e82ae-9fba-4ef7-8496-dad0bfd31e62");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2c3e82ae-9fba-4ef7-8496-dad0bfd31e62' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"64ddf572-27e6-42c6-94d6-8749e70cc653":{"roots":{"references":[{"attributes":{},"id":"73c40f12-aa7c-4ed5-b4f4-a3d759cd8564","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"e588777e-b67f-4027-8ce3-ef0dad9e58a0","type":"Circle"},{"attributes":{"plot":{"id":"6b3fbb23-dc17-431c-ab9d-faa8b6f036a5","type":"Plot"},"ticker":{"id":"73c40f12-aa7c-4ed5-b4f4-a3d759cd8564","type":"BasicTicker"}},"id":"fd524508-a037-48ea-aa67-f36ec900e31b","type":"Grid"},{"attributes":{"source":{"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"}},"id":"fdf81340-9511-4022-bc69-dc0a61e568d6","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3691f00b-64f0-4396-9450-08f4f9ece384","type":"Toolbar"},{"attributes":{},"id":"fdde3de0-91e8-41fb-a63a-4d849d61a124","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"},"glyph":{"id":"5155f740-b8ac-4d6f-9e4c-0242ffeefe13","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"81d23c61-f85c-44fa-a7c8-464c5bc16d4f","type":"CDSView"}},"id":"deb5ff1d-0d6f-4776-b8e9-aa15d2a6dfde","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"6b3fbb23-dc17-431c-ab9d-faa8b6f036a5","type":"Plot"},"ticker":{"id":"fdde3de0-91e8-41fb-a63a-4d849d61a124","type":"BasicTicker"}},"id":"c742b77b-11d4-49fd-8c6f-906f251f8a96","type":"Grid"},{"attributes":{"source":{"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"}},"id":"81d23c61-f85c-44fa-a7c8-464c5bc16d4f","type":"CDSView"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"08116712-1e8a-4f6e-acbb-63df4201f652","type":"Line"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"c72ad8ac-15a0-4751-b3d3-96c799dd93e9","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"ed1829dd-d0f1-4b1e-b8f7-0a2a0cc9f5e8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c72ad8ac-15a0-4751-b3d3-96c799dd93e9","type":"LinearAxis"},{"id":"ed1829dd-d0f1-4b1e-b8f7-0a2a0cc9f5e8","type":"LinearAxis"},{"id":"e522dda3-b0a6-4ec0-9434-8675b12d55dc","type":"Grid"},{"id":"d1d57d6e-5d4c-442e-9e20-e539a7d00a15","type":"Grid"},{"id":"f92a9bdb-c5b0-468e-a5e0-fc6219877ff4","type":"GlyphRenderer"},{"id":"a3c92e13-78e0-4649-884f-4523964d2fc6","type":"GlyphRenderer"}],"title":{"id":"e76e11fa-7a77-44b7-a7d6-541ac6eb920f","type":"Title"},"toolbar":{"id":"3691f00b-64f0-4396-9450-08f4f9ece384","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5369beb-9729-4a6d-ac38-47f25f7913a6","type":"Range1d"},"x_scale":{"id":"2bc397fc-03cf-44d5-a805-36556aff2ce1","type":"LinearScale"},"y_range":{"id":"2f8ae107-d77b-48f6-9140-2d160c464751","type":"Range1d"},"y_scale":{"id":"1d4b56b1-65c5-4ac0-8b3f-68cf9e18913c","type":"LinearScale"}},"id":"86c30465-41f4-4184-afa7-eb7bbca81dda","type":"Plot"},{"attributes":{"data_source":{"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"},"glyph":{"id":"08116712-1e8a-4f6e-acbb-63df4201f652","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e2afd227-78bf-4340-8389-c038361a5b6f","type":"CDSView"}},"id":"7969bc30-2697-428a-bda7-8a3e672c5e0a","type":"GlyphRenderer"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"7a2e55dc-1f4f-4fe2-a950-a9110e1b8e9d","type":"BasicTickFormatter"},"plot":{"id":"86c30465-41f4-4184-afa7-eb7bbca81dda","type":"Plot"},"ticker":{"id":"57586116-9372-4108-ad12-b50beb1e9012","type":"BasicTicker"}},"id":"c72ad8ac-15a0-4751-b3d3-96c799dd93e9","type":"LinearAxis"},{"attributes":{"source":{"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"}},"id":"e2afd227-78bf-4340-8389-c038361a5b6f","type":"CDSView"},{"attributes":{"children":[{"id":"f03e61a8-9673-40c2-ba17-d43953108f4f","type":"Plot"},{"id":"b2d6e45f-f69d-4dd6-bd17-8891ea73eeaa","type":"Plot"}]},"id":"a769e36c-a663-46be-b9f1-9091516e9980","type":"Row"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f9aa38f7-4382-4166-9699-bed18e0424c9","type":"BasicTickFormatter"},"plot":{"id":"86c30465-41f4-4184-afa7-eb7bbca81dda","type":"Plot"},"ticker":{"id":"54decb0d-ba8c-40b1-a07e-9e10c3ab9ff0","type":"BasicTicker"}},"id":"ed1829dd-d0f1-4b1e-b8f7-0a2a0cc9f5e8","type":"LinearAxis"},{"attributes":{"plot":null,"text":"III"},"id":"e76e11fa-7a77-44b7-a7d6-541ac6eb920f","type":"Title"},{"attributes":{"data_source":{"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"},"glyph":{"id":"e588777e-b67f-4027-8ce3-ef0dad9e58a0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"97295ab1-bb40-47a7-b78b-e62ca214b147","type":"CDSView"}},"id":"43938a18-dc1f-4c90-b346-5179d5002786","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"0ce3ded2-ff86-48ec-9bee-c8c2690e3cc8","type":"Circle"},{"attributes":{"source":{"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"}},"id":"97295ab1-bb40-47a7-b78b-e62ca214b147","type":"CDSView"},{"attributes":{"children":[{"id":"a769e36c-a663-46be-b9f1-9091516e9980","type":"Row"},{"id":"55705b7d-0442-4bd6-875e-0adc937b6719","type":"Row"}]},"id":"8b362567-53bd-4ecb-b319-38457880e51d","type":"Column"},{"attributes":{},"id":"0d7362e8-66a3-42d2-a04e-da6764af8626","type":"LinearScale"},{"attributes":{},"id":"57586116-9372-4108-ad12-b50beb1e9012","type":"BasicTicker"},{"attributes":{"plot":{"id":"86c30465-41f4-4184-afa7-eb7bbca81dda","type":"Plot"},"ticker":{"id":"57586116-9372-4108-ad12-b50beb1e9012","type":"BasicTicker"}},"id":"e522dda3-b0a6-4ec0-9434-8675b12d55dc","type":"Grid"},{"attributes":{},"id":"ae348a88-e11a-45e9-ab57-4c31e9006b31","type":"LinearScale"},{"attributes":{},"id":"3b9ca0c2-6749-4714-89b1-bbd34014095f","type":"LinearScale"},{"attributes":{},"id":"fff668ef-d42a-4d52-9599-94dc2b2acf28","type":"LinearScale"},{"attributes":{},"id":"54decb0d-ba8c-40b1-a07e-9e10c3ab9ff0","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"86c30465-41f4-4184-afa7-eb7bbca81dda","type":"Plot"},"ticker":{"id":"54decb0d-ba8c-40b1-a07e-9e10c3ab9ff0","type":"BasicTicker"}},"id":"d1d57d6e-5d4c-442e-9e20-e539a7d00a15","type":"Grid"},{"attributes":{},"id":"73b202ea-0165-435d-bd72-e4a61d5918a5","type":"BasicTickFormatter"},{"attributes":{},"id":"451018f9-3ef5-4330-a9e5-ef59d7aa0c48","type":"BasicTickFormatter"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"bc9bf2d7-f5cf-4f81-8410-ed56db942802","type":"Line"},{"attributes":{"children":[{"id":"86c30465-41f4-4184-afa7-eb7bbca81dda","type":"Plot"},{"id":"6b3fbb23-dc17-431c-ab9d-faa8b6f036a5","type":"Plot"}]},"id":"55705b7d-0442-4bd6-875e-0adc937b6719","type":"Row"},{"attributes":{"data_source":{"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"},"glyph":{"id":"bc9bf2d7-f5cf-4f81-8410-ed56db942802","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c3fcb224-5696-4981-a331-87671ab4f0a8","type":"CDSView"}},"id":"f92a9bdb-c5b0-468e-a5e0-fc6219877ff4","type":"GlyphRenderer"},{"attributes":{},"id":"83d2f1a4-37a5-4db4-912f-61cc8359a38e","type":"LinearScale"},{"attributes":{"source":{"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"}},"id":"c3fcb224-5696-4981-a331-87671ab4f0a8","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"19a53955-5681-424a-8fb6-7acb23d7377d","type":"Toolbar"},{"attributes":{},"id":"ce20b2b4-2c4d-464d-9d71-199e8b074b03","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"},"glyph":{"id":"0ce3ded2-ff86-48ec-9bee-c8c2690e3cc8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0fcde44a-7c49-4012-9025-500348d33d8d","type":"CDSView"}},"id":"a3c92e13-78e0-4649-884f-4523964d2fc6","type":"GlyphRenderer"},{"attributes":{},"id":"73dce4f5-907e-46fb-b83d-0c1dbce33c8c","type":"BasicTickFormatter"},{"attributes":{},"id":"1d4b56b1-65c5-4ac0-8b3f-68cf9e18913c","type":"LinearScale"},{"attributes":{"source":{"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"}},"id":"0fcde44a-7c49-4012-9025-500348d33d8d","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"1aaabb1a-4f59-4130-a789-157432b11903","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"c777c255-8c00-456c-93c3-7d3aeba7c12c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1aaabb1a-4f59-4130-a789-157432b11903","type":"LinearAxis"},{"id":"c777c255-8c00-456c-93c3-7d3aeba7c12c","type":"LinearAxis"},{"id":"fd524508-a037-48ea-aa67-f36ec900e31b","type":"Grid"},{"id":"c742b77b-11d4-49fd-8c6f-906f251f8a96","type":"Grid"},{"id":"7969bc30-2697-428a-bda7-8a3e672c5e0a","type":"GlyphRenderer"},{"id":"43938a18-dc1f-4c90-b346-5179d5002786","type":"GlyphRenderer"}],"title":{"id":"d9e081b6-f6f8-48cc-9316-568b8773cbae","type":"Title"},"toolbar":{"id":"19a53955-5681-424a-8fb6-7acb23d7377d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5369beb-9729-4a6d-ac38-47f25f7913a6","type":"Range1d"},"x_scale":{"id":"b28e31d1-0eec-419b-957d-00a6d4d0f422","type":"LinearScale"},"y_range":{"id":"2f8ae107-d77b-48f6-9140-2d160c464751","type":"Range1d"},"y_scale":{"id":"ae348a88-e11a-45e9-ab57-4c31e9006b31","type":"LinearScale"}},"id":"6b3fbb23-dc17-431c-ab9d-faa8b6f036a5","type":"Plot"},{"attributes":{},"id":"2bc397fc-03cf-44d5-a805-36556aff2ce1","type":"LinearScale"},{"attributes":{"plot":null,"text":"IV"},"id":"d9e081b6-f6f8-48cc-9316-568b8773cbae","type":"Title"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1b4c9f4a-2405-446d-babf-317263a6101a","type":"BasicTickFormatter"},"plot":{"id":"6b3fbb23-dc17-431c-ab9d-faa8b6f036a5","type":"Plot"},"ticker":{"id":"fdde3de0-91e8-41fb-a63a-4d849d61a124","type":"BasicTicker"}},"id":"c777c255-8c00-456c-93c3-7d3aeba7c12c","type":"LinearAxis"},{"attributes":{},"id":"f9aa38f7-4382-4166-9699-bed18e0424c9","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"c01fb20b-24a3-4c19-9a39-2d2c848a48fd","type":"BasicTickFormatter"},"plot":{"id":"6b3fbb23-dc17-431c-ab9d-faa8b6f036a5","type":"Plot"},"ticker":{"id":"73c40f12-aa7c-4ed5-b4f4-a3d759cd8564","type":"BasicTicker"}},"id":"1aaabb1a-4f59-4130-a789-157432b11903","type":"LinearAxis"},{"attributes":{},"id":"7a2e55dc-1f4f-4fe2-a950-a9110e1b8e9d","type":"BasicTickFormatter"},{"attributes":{},"id":"b28e31d1-0eec-419b-957d-00a6d4d0f422","type":"LinearScale"},{"attributes":{},"id":"1b4c9f4a-2405-446d-babf-317263a6101a","type":"BasicTickFormatter"},{"attributes":{},"id":"c01fb20b-24a3-4c19-9a39-2d2c848a48fd","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xi","yi","xii","yii","xiii","yiii","xiv","yiv"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}}},"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"34724a63-2115-4e79-8467-5d6a82bfb786","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}}},"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"a5369beb-9729-4a6d-ac38-47f25f7913a6","type":"Range1d"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"2f8ae107-d77b-48f6-9140-2d160c464751","type":"Range1d"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"1c79c086-6662-43e9-99c4-37c33f03e9ca","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"f00457e4-335e-4931-8474-ddd492238e7b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1c79c086-6662-43e9-99c4-37c33f03e9ca","type":"LinearAxis"},{"id":"f00457e4-335e-4931-8474-ddd492238e7b","type":"LinearAxis"},{"id":"e9f52b99-3dc6-42f8-9771-fd0bb85c681a","type":"Grid"},{"id":"243873c3-025f-4459-a26b-d2acff3335fa","type":"Grid"},{"id":"1b35b544-7774-4ede-a715-ad02134078c6","type":"GlyphRenderer"},{"id":"c356377e-cca9-4048-ac97-1390136640bc","type":"GlyphRenderer"}],"title":{"id":"5c734f74-ae7e-4a90-a352-5899210ff111","type":"Title"},"toolbar":{"id":"34724a63-2115-4e79-8467-5d6a82bfb786","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5369beb-9729-4a6d-ac38-47f25f7913a6","type":"Range1d"},"x_scale":{"id":"3b9ca0c2-6749-4714-89b1-bbd34014095f","type":"LinearScale"},"y_range":{"id":"2f8ae107-d77b-48f6-9140-2d160c464751","type":"Range1d"},"y_scale":{"id":"0d7362e8-66a3-42d2-a04e-da6764af8626","type":"LinearScale"}},"id":"f03e61a8-9673-40c2-ba17-d43953108f4f","type":"Plot"},{"attributes":{"plot":null,"text":"I"},"id":"5c734f74-ae7e-4a90-a352-5899210ff111","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"32d71508-f9f7-4ea5-a8c7-48c0235d0880","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"451018f9-3ef5-4330-a9e5-ef59d7aa0c48","type":"BasicTickFormatter"},"plot":{"id":"f03e61a8-9673-40c2-ba17-d43953108f4f","type":"Plot"},"ticker":{"id":"2cfc158c-5e9d-4f01-b040-a095064471dc","type":"BasicTicker"}},"id":"1c79c086-6662-43e9-99c4-37c33f03e9ca","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"73b202ea-0165-435d-bd72-e4a61d5918a5","type":"BasicTickFormatter"},"plot":{"id":"f03e61a8-9673-40c2-ba17-d43953108f4f","type":"Plot"},"ticker":{"id":"07df221a-84ba-4466-9d5d-bd006cb45394","type":"BasicTicker"}},"id":"f00457e4-335e-4931-8474-ddd492238e7b","type":"LinearAxis"},{"attributes":{},"id":"2cfc158c-5e9d-4f01-b040-a095064471dc","type":"BasicTicker"},{"attributes":{"plot":{"id":"f03e61a8-9673-40c2-ba17-d43953108f4f","type":"Plot"},"ticker":{"id":"2cfc158c-5e9d-4f01-b040-a095064471dc","type":"BasicTicker"}},"id":"e9f52b99-3dc6-42f8-9771-fd0bb85c681a","type":"Grid"},{"attributes":{},"id":"07df221a-84ba-4466-9d5d-bd006cb45394","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f03e61a8-9673-40c2-ba17-d43953108f4f","type":"Plot"},"ticker":{"id":"07df221a-84ba-4466-9d5d-bd006cb45394","type":"BasicTicker"}},"id":"243873c3-025f-4459-a26b-d2acff3335fa","type":"Grid"},{"attributes":{"data_source":{"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"},"glyph":{"id":"3684e7fe-a7e2-4c5f-a4ca-556bd1250197","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"fdf81340-9511-4022-bc69-dc0a61e568d6","type":"CDSView"}},"id":"29cf2196-2488-4e8b-922b-286938c3cded","type":"GlyphRenderer"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"92fe5084-8a97-491c-a25f-9d3bc836cc70","type":"Line"},{"attributes":{"data_source":{"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"},"glyph":{"id":"92fe5084-8a97-491c-a25f-9d3bc836cc70","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5f3fa81e-de46-4b84-a19e-ee0d32d1ca81","type":"CDSView"}},"id":"1b35b544-7774-4ede-a715-ad02134078c6","type":"GlyphRenderer"},{"attributes":{"source":{"id":"cf9603e9-5144-45ae-829e-3f1c87a5ea61","type":"ColumnDataSource"}},"id":"5f3fa81e-de46-4b84-a19e-ee0d32d1ca81","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"14e9beb5-ad4e-4003-8036-56f0dd71cf3c","type":"Toolbar"},{"attributes":{"data_source":{"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"},"glyph":{"id":"32d71508-f9f7-4ea5-a8c7-48c0235d0880","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1e0398ee-65fc-4aaa-a32d-94c6309980a8","type":"CDSView"}},"id":"c356377e-cca9-4048-ac97-1390136640bc","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b3506b3c-37db-4e38-94b4-ea2c4ecb6859","type":"ColumnDataSource"}},"id":"1e0398ee-65fc-4aaa-a32d-94c6309980a8","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"78540041-9ee8-4ffb-977b-0612b97b5ceb","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"8aac1950-e18e-4c8b-8268-4a43a2bcf406","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"78540041-9ee8-4ffb-977b-0612b97b5ceb","type":"LinearAxis"},{"id":"8aac1950-e18e-4c8b-8268-4a43a2bcf406","type":"LinearAxis"},{"id":"9b5de885-e514-4f11-8415-ac727462c8c1","type":"Grid"},{"id":"bac8b078-67b7-4c32-a876-a81e6b692ca3","type":"Grid"},{"id":"29cf2196-2488-4e8b-922b-286938c3cded","type":"GlyphRenderer"},{"id":"deb5ff1d-0d6f-4776-b8e9-aa15d2a6dfde","type":"GlyphRenderer"}],"title":{"id":"19fc1bc0-aca5-481c-854c-b21ee6c53865","type":"Title"},"toolbar":{"id":"14e9beb5-ad4e-4003-8036-56f0dd71cf3c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5369beb-9729-4a6d-ac38-47f25f7913a6","type":"Range1d"},"x_scale":{"id":"83d2f1a4-37a5-4db4-912f-61cc8359a38e","type":"LinearScale"},"y_range":{"id":"2f8ae107-d77b-48f6-9140-2d160c464751","type":"Range1d"},"y_scale":{"id":"fff668ef-d42a-4d52-9599-94dc2b2acf28","type":"LinearScale"}},"id":"b2d6e45f-f69d-4dd6-bd17-8891ea73eeaa","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"73dce4f5-907e-46fb-b83d-0c1dbce33c8c","type":"BasicTickFormatter"},"plot":{"id":"b2d6e45f-f69d-4dd6-bd17-8891ea73eeaa","type":"Plot"},"ticker":{"id":"7223ceb7-9a5c-4d46-8a67-f7a034f90ca7","type":"BasicTicker"}},"id":"78540041-9ee8-4ffb-977b-0612b97b5ceb","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"ce20b2b4-2c4d-464d-9d71-199e8b074b03","type":"BasicTickFormatter"},"plot":{"id":"b2d6e45f-f69d-4dd6-bd17-8891ea73eeaa","type":"Plot"},"ticker":{"id":"cd94b980-b0f4-4eb0-8669-ff73b67c9d5a","type":"BasicTicker"}},"id":"8aac1950-e18e-4c8b-8268-4a43a2bcf406","type":"LinearAxis"},{"attributes":{"plot":null,"text":"II"},"id":"19fc1bc0-aca5-481c-854c-b21ee6c53865","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"5155f740-b8ac-4d6f-9e4c-0242ffeefe13","type":"Circle"},{"attributes":{},"id":"7223ceb7-9a5c-4d46-8a67-f7a034f90ca7","type":"BasicTicker"},{"attributes":{"plot":{"id":"b2d6e45f-f69d-4dd6-bd17-8891ea73eeaa","type":"Plot"},"ticker":{"id":"7223ceb7-9a5c-4d46-8a67-f7a034f90ca7","type":"BasicTicker"}},"id":"9b5de885-e514-4f11-8415-ac727462c8c1","type":"Grid"},{"attributes":{},"id":"cd94b980-b0f4-4eb0-8669-ff73b67c9d5a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b2d6e45f-f69d-4dd6-bd17-8891ea73eeaa","type":"Plot"},"ticker":{"id":"cd94b980-b0f4-4eb0-8669-ff73b67c9d5a","type":"BasicTicker"}},"id":"bac8b078-67b7-4c32-a876-a81e6b692ca3","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3684e7fe-a7e2-4c5f-a4ca-556bd1250197","type":"Line"}],"root_ids":["8b362567-53bd-4ecb-b319-38457880e51d"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"64ddf572-27e6-42c6-94d6-8749e70cc653","elementid":"2c3e82ae-9fba-4ef7-8496-dad0bfd31e62","modelid":"8b362567-53bd-4ecb-b319-38457880e51d"}];
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