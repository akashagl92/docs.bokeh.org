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
      };var element = document.getElementById("f9f1119a-dd69-4c44-b205-5035a1757a2a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f9f1119a-dd69-4c44-b205-5035a1757a2a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1459161d-59bc-414f-8d04-47c8ff49ca53":{"roots":{"references":[{"attributes":{},"id":"cba87f2b-89d8-4cdd-9e26-33afdeebb099","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3982a44-96fb-45d2-ae7b-cb6237e5c9f6","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"169fd8d1-3d9b-40b4-9c53-077dd7712999","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e31174d-2f92-41f9-aff7-6e44540e1d65","type":"BasicTicker"}},"id":"ed994abe-74b4-4b67-9262-672472c64e47","type":"Grid"},{"attributes":{},"id":"fea7488b-ed3c-4e87-b836-03df31c9619a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"e5150cd4-f8af-4f25-8b98-0a1db34c7034","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29cd9773-b749-402b-a9d6-87b544252aae","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"36186cdc-89b3-4ce9-8f72-55d22a044e3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b038bfd-06f3-4e2b-b0fc-b1cbdbe2987c","type":"BasicTicker"}},"id":"4ca43cf3-6593-4eca-82f8-16ee0330b0c4","type":"Grid"},{"attributes":{},"id":"88dbbcde-bcc8-4180-94ea-cef283dc3eb3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"91411b8d-18fb-4caf-ae24-d83f01f336a8","type":"HoverTool"},{"attributes":{"callback":null},"id":"ce0e8d1d-6f0f-4c23-bf33-347a83b23119","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4bd6a756-d061-4fd2-87fd-b1fd3a41d397","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c150da95-0cc4-4900-9841-2a019c929afd","type":"BoxSelectTool"},{"id":"91411b8d-18fb-4caf-ae24-d83f01f336a8","type":"HoverTool"},{"id":"753ff65a-36f3-4792-a487-4a8418b91225","type":"ResetTool"}]},"id":"07862e44-ed7d-40c9-9361-bc06eb46acce","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"915f9d9e-7d55-4a61-b426-5cbc8895023f","type":"BoxSelectTool"},{"id":"4bd6a756-d061-4fd2-87fd-b1fd3a41d397","type":"HoverTool"},{"id":"ae9cddb7-5a0e-416a-87c8-34fd7f71be61","type":"ResetTool"}]},"id":"a056ed39-aabe-4f33-844a-dc425209f0a4","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"29cd9773-b749-402b-a9d6-87b544252aae","type":"BoxAnnotation"},"renderers":[{"id":"6c1588cd-aa2a-4a80-80f8-15e1b6faa9af","type":"GlyphRenderer"}]},"id":"c150da95-0cc4-4900-9841-2a019c929afd","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"1fc0f423-ca50-4766-9ecf-dbdf9926a83d","type":"LinearAxis"}],"left":[{"id":"91ab4287-fccc-42b6-b763-80d8f8e552a8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1fc0f423-ca50-4766-9ecf-dbdf9926a83d","type":"LinearAxis"},{"id":"a1cfe020-b60f-4860-8fcd-3c19f41900d1","type":"Grid"},{"id":"91ab4287-fccc-42b6-b763-80d8f8e552a8","type":"LinearAxis"},{"id":"ed994abe-74b4-4b67-9262-672472c64e47","type":"Grid"},{"id":"29cd9773-b749-402b-a9d6-87b544252aae","type":"BoxAnnotation"},{"id":"6c1588cd-aa2a-4a80-80f8-15e1b6faa9af","type":"GlyphRenderer"}],"title":{"id":"ee7bd53b-d387-41e9-bcbc-874a08346567","type":"Title"},"toolbar":{"id":"07862e44-ed7d-40c9-9361-bc06eb46acce","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8139152e-4b89-4781-82af-dae8125b5ff7","type":"DataRange1d"},"x_scale":{"id":"cba87f2b-89d8-4cdd-9e26-33afdeebb099","type":"LinearScale"},"y_range":{"id":"160ed032-079c-449c-9dd7-05f0a4cb0868","type":"DataRange1d"},"y_scale":{"id":"9905359a-671f-476f-a0e2-31a99b650ccd","type":"LinearScale"}},"id":"169fd8d1-3d9b-40b4-9c53-077dd7712999","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"97824f0c-8380-44ce-aa3e-8a13a227361e","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a93c43ba-243c-48f1-8c47-4082f33ad9c3","type":"LinearAxis"}],"left":[{"id":"b380e186-0db9-4aba-9c51-4a72afe21810","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a93c43ba-243c-48f1-8c47-4082f33ad9c3","type":"LinearAxis"},{"id":"4ca43cf3-6593-4eca-82f8-16ee0330b0c4","type":"Grid"},{"id":"b380e186-0db9-4aba-9c51-4a72afe21810","type":"LinearAxis"},{"id":"5e22b557-0ce8-4716-99da-cab317d643f2","type":"Grid"},{"id":"2c342d3e-6231-476a-9462-18b9f830ad12","type":"BoxAnnotation"},{"id":"3382f3f0-ed7c-4b37-8b31-d64ccd677928","type":"GlyphRenderer"}],"title":{"id":"5123d341-3dd8-4f15-9532-4c60176e3d6f","type":"Title"},"toolbar":{"id":"a056ed39-aabe-4f33-844a-dc425209f0a4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"905c218b-f70b-4ab0-8e2e-64c69ec7c54e","type":"DataRange1d"},"x_scale":{"id":"ddabbbed-f102-4b8f-9608-01e40bf7a6e7","type":"LinearScale"},"y_range":{"id":"ce0e8d1d-6f0f-4c23-bf33-347a83b23119","type":"DataRange1d"},"y_scale":{"id":"158d9a03-cc0a-49f7-927b-ed50b643ec4b","type":"LinearScale"}},"id":"36186cdc-89b3-4ce9-8f72-55d22a044e3e","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"e5150cd4-f8af-4f25-8b98-0a1db34c7034","type":"ColumnDataSource"},"glyph":{"id":"60d64ef8-1886-412e-a2c3-6aaf5ea05593","type":"Circle"},"hover_glyph":{"id":"bb60517a-4dde-4cbe-bc8b-60ca7e35f9b2","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"4b65c839-af14-46fe-b80b-f5c70fa57823","type":"Circle"},"selection_glyph":null,"view":{"id":"c2f9d198-cf5b-4a5f-8ba6-4ba0461541bf","type":"CDSView"}},"id":"3382f3f0-ed7c-4b37-8b31-d64ccd677928","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"169fd8d1-3d9b-40b4-9c53-077dd7712999","subtype":"Figure","type":"Plot"},"ticker":{"id":"88dbbcde-bcc8-4180-94ea-cef283dc3eb3","type":"BasicTicker"}},"id":"a1cfe020-b60f-4860-8fcd-3c19f41900d1","type":"Grid"},{"attributes":{},"id":"9e31174d-2f92-41f9-aff7-6e44540e1d65","type":"BasicTicker"},{"attributes":{"formatter":{"id":"97824f0c-8380-44ce-aa3e-8a13a227361e","type":"BasicTickFormatter"},"plot":{"id":"169fd8d1-3d9b-40b4-9c53-077dd7712999","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e31174d-2f92-41f9-aff7-6e44540e1d65","type":"BasicTicker"}},"id":"91ab4287-fccc-42b6-b763-80d8f8e552a8","type":"LinearAxis"},{"attributes":{},"id":"ae9cddb7-5a0e-416a-87c8-34fd7f71be61","type":"ResetTool"},{"attributes":{"formatter":{"id":"8de41f7a-c5e3-46f9-b7f7-11b9e8918d10","type":"BasicTickFormatter"},"plot":{"id":"36186cdc-89b3-4ce9-8f72-55d22a044e3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b038bfd-06f3-4e2b-b0fc-b1cbdbe2987c","type":"BasicTicker"}},"id":"a93c43ba-243c-48f1-8c47-4082f33ad9c3","type":"LinearAxis"},{"attributes":{"formatter":{"id":"27df12f4-eaa0-4e74-a142-2b7df5b10601","type":"BasicTickFormatter"},"plot":{"id":"169fd8d1-3d9b-40b4-9c53-077dd7712999","subtype":"Figure","type":"Plot"},"ticker":{"id":"88dbbcde-bcc8-4180-94ea-cef283dc3eb3","type":"BasicTicker"}},"id":"1fc0f423-ca50-4766-9ecf-dbdf9926a83d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"905c218b-f70b-4ab0-8e2e-64c69ec7c54e","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"2c342d3e-6231-476a-9462-18b9f830ad12","type":"BoxAnnotation"},"renderers":[{"id":"3382f3f0-ed7c-4b37-8b31-d64ccd677928","type":"GlyphRenderer"}]},"id":"915f9d9e-7d55-4a61-b426-5cbc8895023f","type":"BoxSelectTool"},{"attributes":{"plot":null,"text":""},"id":"ee7bd53b-d387-41e9-bcbc-874a08346567","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"36186cdc-89b3-4ce9-8f72-55d22a044e3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"22d3a80c-2486-4a9a-8e63-f7cc69d6d447","type":"BasicTicker"}},"id":"5e22b557-0ce8-4716-99da-cab317d643f2","type":"Grid"},{"attributes":{"formatter":{"id":"fea7488b-ed3c-4e87-b836-03df31c9619a","type":"BasicTickFormatter"},"plot":{"id":"36186cdc-89b3-4ce9-8f72-55d22a044e3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"22d3a80c-2486-4a9a-8e63-f7cc69d6d447","type":"BasicTicker"}},"id":"b380e186-0db9-4aba-9c51-4a72afe21810","type":"LinearAxis"},{"attributes":{"children":[{"id":"169fd8d1-3d9b-40b4-9c53-077dd7712999","subtype":"Figure","type":"Plot"},{"id":"36186cdc-89b3-4ce9-8f72-55d22a044e3e","subtype":"Figure","type":"Plot"}]},"id":"d9e0dc75-5c58-47d3-a9fd-2c24f8794a66","type":"Row"},{"attributes":{"filters":[{"id":"fa6695dc-1211-4993-a160-2a778b38ad4c","type":"IndexFilter"}],"source":{"id":"e5150cd4-f8af-4f25-8b98-0a1db34c7034","type":"ColumnDataSource"}},"id":"c2f9d198-cf5b-4a5f-8ba6-4ba0461541bf","type":"CDSView"},{"attributes":{},"id":"9905359a-671f-476f-a0e2-31a99b650ccd","type":"LinearScale"},{"attributes":{},"id":"158d9a03-cc0a-49f7-927b-ed50b643ec4b","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe8770b9-4907-419e-9872-51ac38069f79","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"60d64ef8-1886-412e-a2c3-6aaf5ea05593","type":"Circle"},{"attributes":{"callback":null},"id":"160ed032-079c-449c-9dd7-05f0a4cb0868","type":"DataRange1d"},{"attributes":{"children":[{"id":"b38daca2-02ea-4b00-b57a-9e33640765d5","type":"ToolbarBox"},{"id":"501b6704-f516-4ff4-8e2b-45d160e942b0","type":"Column"}]},"id":"5f583381-8d1c-414d-a6a2-3470811e8961","type":"Column"},{"attributes":{},"id":"753ff65a-36f3-4792-a487-4a8418b91225","type":"ResetTool"},{"attributes":{},"id":"7b038bfd-06f3-4e2b-b0fc-b1cbdbe2987c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b65c839-af14-46fe-b80b-f5c70fa57823","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2c342d3e-6231-476a-9462-18b9f830ad12","type":"BoxAnnotation"},{"attributes":{"source":{"id":"e5150cd4-f8af-4f25-8b98-0a1db34c7034","type":"ColumnDataSource"}},"id":"7ed6f4d8-23b5-4168-9312-8769eb85fedb","type":"CDSView"},{"attributes":{"toolbar":{"id":"cece48cf-8a63-471c-b7da-96942dfd15ed","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"b38daca2-02ea-4b00-b57a-9e33640765d5","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb60517a-4dde-4cbe-bc8b-60ca7e35f9b2","type":"Circle"},{"attributes":{},"id":"22d3a80c-2486-4a9a-8e63-f7cc69d6d447","type":"BasicTicker"},{"attributes":{"tools":[{"id":"c150da95-0cc4-4900-9841-2a019c929afd","type":"BoxSelectTool"},{"id":"91411b8d-18fb-4caf-ae24-d83f01f336a8","type":"HoverTool"},{"id":"753ff65a-36f3-4792-a487-4a8418b91225","type":"ResetTool"},{"id":"915f9d9e-7d55-4a61-b426-5cbc8895023f","type":"BoxSelectTool"},{"id":"4bd6a756-d061-4fd2-87fd-b1fd3a41d397","type":"HoverTool"},{"id":"ae9cddb7-5a0e-416a-87c8-34fd7f71be61","type":"ResetTool"}]},"id":"cece48cf-8a63-471c-b7da-96942dfd15ed","type":"ProxyToolbar"},{"attributes":{"indices":[0,2,4]},"id":"fa6695dc-1211-4993-a160-2a778b38ad4c","type":"IndexFilter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"70adf748-6981-4ee3-a1ca-c0041a1debd2","type":"Circle"},{"attributes":{"data_source":{"id":"e5150cd4-f8af-4f25-8b98-0a1db34c7034","type":"ColumnDataSource"},"glyph":{"id":"f3982a44-96fb-45d2-ae7b-cb6237e5c9f6","type":"Circle"},"hover_glyph":{"id":"fe8770b9-4907-419e-9872-51ac38069f79","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"70adf748-6981-4ee3-a1ca-c0041a1debd2","type":"Circle"},"selection_glyph":null,"view":{"id":"7ed6f4d8-23b5-4168-9312-8769eb85fedb","type":"CDSView"}},"id":"6c1588cd-aa2a-4a80-80f8-15e1b6faa9af","type":"GlyphRenderer"},{"attributes":{},"id":"ddabbbed-f102-4b8f-9608-01e40bf7a6e7","type":"LinearScale"},{"attributes":{},"id":"8de41f7a-c5e3-46f9-b7f7-11b9e8918d10","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8139152e-4b89-4781-82af-dae8125b5ff7","type":"DataRange1d"},{"attributes":{"children":[{"id":"d9e0dc75-5c58-47d3-a9fd-2c24f8794a66","type":"Row"}]},"id":"501b6704-f516-4ff4-8e2b-45d160e942b0","type":"Column"},{"attributes":{"plot":null,"text":""},"id":"5123d341-3dd8-4f15-9532-4c60176e3d6f","type":"Title"},{"attributes":{},"id":"27df12f4-eaa0-4e74-a142-2b7df5b10601","type":"BasicTickFormatter"}],"root_ids":["5f583381-8d1c-414d-a6a2-3470811e8961"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"1459161d-59bc-414f-8d04-47c8ff49ca53","elementid":"f9f1119a-dd69-4c44-b205-5035a1757a2a","modelid":"5f583381-8d1c-414d-a6a2-3470811e8961"}];
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