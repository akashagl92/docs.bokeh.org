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
      };var element = document.getElementById("d5018b6f-95fc-499a-b55c-894a318b451c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5018b6f-95fc-499a-b55c-894a318b451c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cb5e14e8-b124-440a-9406-69f2a4ca3742":{"roots":{"references":[{"attributes":{"formatter":{"id":"e10759a2-2843-4e67-99fc-1cad99c0f215","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"ad86d9e6-d50d-496e-ac08-f2bd6b796cf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c58eb08-af60-492a-b006-199e749fb9f3","type":"BasicTicker"}},"id":"e85a632e-9443-42b8-bb8a-caac18acd3b1","type":"LinearAxis"},{"attributes":{"data_source":{"id":"52981be3-9d3c-4421-b5c2-5854c7a81a4b","type":"ColumnDataSource"},"glyph":{"id":"c23818a0-e1c1-43de-8873-3667b9fd9851","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"069de648-acaa-4b37-bedf-4821d38788de","type":"HBar"},"selection_glyph":null,"view":{"id":"cac248ab-d6f8-4fcc-be66-afd31de8ae5c","type":"CDSView"}},"id":"7c32159c-6782-489d-bd2a-befa7a00b737","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"6fbdebc1-9832-4bf8-8b56-dd9c8b02f901","type":"Range1d"},{"attributes":{"source":{"id":"bf2d791a-5769-46b0-a256-6432dd0588fa","type":"ColumnDataSource"}},"id":"dda9c0b8-4f58-4d50-af4d-400553fc071a","type":"CDSView"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"ba0b15a1-e594-470b-9f18-90b8764d34da","type":"FactorRange"},{"attributes":{"source":{"id":"52981be3-9d3c-4421-b5c2-5854c7a81a4b","type":"ColumnDataSource"}},"id":"cac248ab-d6f8-4fcc-be66-afd31de8ae5c","type":"CDSView"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"7c32159c-6782-489d-bd2a-befa7a00b737","type":"GlyphRenderer"}]},"id":"2aa7ee6e-57f0-44d5-872f-48c6e22be201","type":"LegendItem"},{"attributes":{},"id":"c1f5ff6e-bf3b-48c9-8f5c-23f8180f83fd","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"dcdb4295-30c0-420f-91bc-e6d8d0d62da5","type":"Title"},{"attributes":{"fields":["2015","2016","2017"]},"id":"a07771ba-21f7-4cab-9568-b7ec4d486235","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"72dede5e-7ca3-4704-99aa-5271dfcec148","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e06722fe-780b-4073-b3f7-27b39f7d1bbe","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"19680525-afd4-4258-8b07-dd709ae816f4","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"15d9a0a4-82a4-453b-8453-e5f03f93e85c","type":"Stack"}},"y":{"field":"fruits"}},"id":"e9ce80a0-4d8e-48d7-8a3d-6389c4ce98fc","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"c2c80763-c30e-4c06-9df8-641eb664d23e","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2b722a12-70fa-4d13-8bf1-14edf64f050f","type":"Stack"}},"y":{"field":"fruits"}},"id":"493f1abc-0c8e-4bbc-bf76-0a071361a8ec","type":"HBar"},{"attributes":{"fields":[]},"id":"43cf5ea6-e903-4d20-9ba8-f9162840d685","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"78347f82-3e97-48b2-a35f-165ca9aca689","type":"PanTool"},{"id":"0e916638-0bf8-453e-9c21-22a43cba9c51","type":"WheelZoomTool"},{"id":"0a16f211-fdd7-4071-bd42-38f279aefc08","type":"BoxZoomTool"},{"id":"77495fe6-a116-48b3-a928-69b5016a5ece","type":"SaveTool"},{"id":"66670aee-468e-44e2-9e4f-7f538a4d1f02","type":"ResetTool"},{"id":"1b271cca-cb66-4c1b-a1c8-76704def5afb","type":"HelpTool"}]},"id":"56862b11-77c2-4d7b-b041-da78afffb55f","type":"Toolbar"},{"attributes":{"data_source":{"id":"52981be3-9d3c-4421-b5c2-5854c7a81a4b","type":"ColumnDataSource"},"glyph":{"id":"fbdad2c0-336e-4803-b0f4-6c0db9e64d96","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e9ce80a0-4d8e-48d7-8a3d-6389c4ce98fc","type":"HBar"},"selection_glyph":null,"view":{"id":"1ff3a94f-d9bf-4db8-bf40-02a4a3cef0e7","type":"CDSView"}},"id":"90a1831b-ed36-4e38-9357-b777de2f234d","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"dc2b79f1-24d0-4a2c-bc9e-28212e479b45","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"a07771ba-21f7-4cab-9568-b7ec4d486235","type":"Stack"}},"y":{"field":"fruits"}},"id":"c11e4252-fe99-4524-8005-8450edb0e8be","type":"HBar"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"52981be3-9d3c-4421-b5c2-5854c7a81a4b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"43cf5ea6-e903-4d20-9ba8-f9162840d685","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"72dede5e-7ca3-4704-99aa-5271dfcec148","type":"Stack"}},"y":{"field":"fruits"}},"id":"47b79457-5fc9-4d33-97e8-5cf60056c7dd","type":"HBar"},{"attributes":{},"id":"a14b0f03-5d88-4695-a2f7-46602f62ee92","type":"LinearScale"},{"attributes":{},"id":"af4cfaaa-daad-4595-a956-6241b19babb9","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"e85a632e-9443-42b8-bb8a-caac18acd3b1","type":"LinearAxis"}],"left":[{"id":"09367d6b-119b-44ca-bea9-b3e1953eb9ed","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"e85a632e-9443-42b8-bb8a-caac18acd3b1","type":"LinearAxis"},{"id":"abf0edcf-afae-4205-8b09-a00844e0b2b1","type":"Grid"},{"id":"09367d6b-119b-44ca-bea9-b3e1953eb9ed","type":"CategoricalAxis"},{"id":"69e82f43-f066-4ecf-b165-440a4b110148","type":"Grid"},{"id":"e06722fe-780b-4073-b3f7-27b39f7d1bbe","type":"BoxAnnotation"},{"id":"72990a2b-0714-4b7c-8dea-8b96ea454b66","type":"Legend"},{"id":"a25447fa-b157-40c0-ac95-f7c699c60a2f","type":"GlyphRenderer"},{"id":"7c32159c-6782-489d-bd2a-befa7a00b737","type":"GlyphRenderer"},{"id":"90a1831b-ed36-4e38-9357-b777de2f234d","type":"GlyphRenderer"},{"id":"ed5f4044-374b-4e15-b720-a235e991257e","type":"GlyphRenderer"},{"id":"4e51d049-07d2-496d-ac0f-b65e48422f8a","type":"GlyphRenderer"},{"id":"4aa698e6-0424-4e37-ac59-5241925a49a1","type":"GlyphRenderer"}],"title":{"id":"dcdb4295-30c0-420f-91bc-e6d8d0d62da5","type":"Title"},"toolbar":{"id":"56862b11-77c2-4d7b-b041-da78afffb55f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6fbdebc1-9832-4bf8-8b56-dd9c8b02f901","type":"Range1d"},"x_scale":{"id":"a14b0f03-5d88-4695-a2f7-46602f62ee92","type":"LinearScale"},"y_range":{"id":"ba0b15a1-e594-470b-9f18-90b8764d34da","type":"FactorRange"},"y_scale":{"id":"c1f5ff6e-bf3b-48c9-8f5c-23f8180f83fd","type":"CategoricalScale"}},"id":"ad86d9e6-d50d-496e-ac08-f2bd6b796cf1","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"c2c80763-c30e-4c06-9df8-641eb664d23e","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"2b722a12-70fa-4d13-8bf1-14edf64f050f","type":"Stack"}},"y":{"field":"fruits"}},"id":"31294cc5-02ef-41ae-9f3e-af3704b49272","type":"HBar"},{"attributes":{},"id":"78347f82-3e97-48b2-a35f-165ca9aca689","type":"PanTool"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"bf2d791a-5769-46b0-a256-6432dd0588fa","type":"ColumnDataSource"},{"attributes":{"fields":["2015"]},"id":"7a4ca7dc-ee05-4be3-b6ba-627f693ff08b","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"2b722a12-70fa-4d13-8bf1-14edf64f050f","type":"Stack"},{"attributes":{"source":{"id":"bf2d791a-5769-46b0-a256-6432dd0588fa","type":"ColumnDataSource"}},"id":"93bb6d30-3ebe-45ed-97cc-1578b9f3e33d","type":"CDSView"},{"attributes":{"source":{"id":"52981be3-9d3c-4421-b5c2-5854c7a81a4b","type":"ColumnDataSource"}},"id":"1ff3a94f-d9bf-4db8-bf40-02a4a3cef0e7","type":"CDSView"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"43cf5ea6-e903-4d20-9ba8-f9162840d685","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"72dede5e-7ca3-4704-99aa-5271dfcec148","type":"Stack"}},"y":{"field":"fruits"}},"id":"0f4d220a-78e5-486e-98cb-ab26ac64b926","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"c2c80763-c30e-4c06-9df8-641eb664d23e","type":"Stack"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"4e51d049-07d2-496d-ac0f-b65e48422f8a","type":"GlyphRenderer"}]},"id":"41f5afda-9d9d-40de-b546-cf1e4c791d1c","type":"LegendItem"},{"attributes":{},"id":"77495fe6-a116-48b3-a928-69b5016a5ece","type":"SaveTool"},{"attributes":{"fields":["2015","2016"]},"id":"dc2b79f1-24d0-4a2c-bc9e-28212e479b45","type":"Stack"},{"attributes":{"plot":{"id":"ad86d9e6-d50d-496e-ac08-f2bd6b796cf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c58eb08-af60-492a-b006-199e749fb9f3","type":"BasicTicker"}},"id":"abf0edcf-afae-4205-8b09-a00844e0b2b1","type":"Grid"},{"attributes":{"data_source":{"id":"bf2d791a-5769-46b0-a256-6432dd0588fa","type":"ColumnDataSource"},"glyph":{"id":"0f4d220a-78e5-486e-98cb-ab26ac64b926","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47b79457-5fc9-4d33-97e8-5cf60056c7dd","type":"HBar"},"selection_glyph":null,"view":{"id":"6ac719bf-f0c7-42e1-85f9-54ffecdd2988","type":"CDSView"}},"id":"ed5f4044-374b-4e15-b720-a235e991257e","type":"GlyphRenderer"},{"attributes":{},"id":"1b271cca-cb66-4c1b-a1c8-76704def5afb","type":"HelpTool"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"ed5f4044-374b-4e15-b720-a235e991257e","type":"GlyphRenderer"}]},"id":"1daf6bf1-3636-4cd1-ba76-b285642e548c","type":"LegendItem"},{"attributes":{},"id":"db5dbefe-3be1-47a7-9c74-06a3976741d7","type":"CategoricalTicker"},{"attributes":{},"id":"e10759a2-2843-4e67-99fc-1cad99c0f215","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"af4cfaaa-daad-4595-a956-6241b19babb9","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"ad86d9e6-d50d-496e-ac08-f2bd6b796cf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"db5dbefe-3be1-47a7-9c74-06a3976741d7","type":"CategoricalTicker"}},"id":"09367d6b-119b-44ca-bea9-b3e1953eb9ed","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"20c65d74-839f-48da-8b02-bbc18f96b1cf","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"e565a837-fc45-4a39-a6c8-c91d74331e57","type":"Stack"}},"y":{"field":"fruits"}},"id":"c23818a0-e1c1-43de-8873-3667b9fd9851","type":"HBar"},{"attributes":{"overlay":{"id":"e06722fe-780b-4073-b3f7-27b39f7d1bbe","type":"BoxAnnotation"}},"id":"0a16f211-fdd7-4071-bd42-38f279aefc08","type":"BoxZoomTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"ad86d9e6-d50d-496e-ac08-f2bd6b796cf1","subtype":"Figure","type":"Plot"},"ticker":{"id":"db5dbefe-3be1-47a7-9c74-06a3976741d7","type":"CategoricalTicker"}},"id":"69e82f43-f066-4ecf-b165-440a4b110148","type":"Grid"},{"attributes":{},"id":"0e916638-0bf8-453e-9c21-22a43cba9c51","type":"WheelZoomTool"},{"attributes":{"fields":["2015","2016","2017"]},"id":"15d9a0a4-82a4-453b-8453-e5f03f93e85c","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"19680525-afd4-4258-8b07-dd709ae816f4","type":"Stack"},{"attributes":{},"id":"5c58eb08-af60-492a-b006-199e749fb9f3","type":"BasicTicker"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"90a1831b-ed36-4e38-9357-b777de2f234d","type":"GlyphRenderer"}]},"id":"113fa5ff-5629-4b2f-83bf-b1b08269dc3f","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"dc2b79f1-24d0-4a2c-bc9e-28212e479b45","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"a07771ba-21f7-4cab-9568-b7ec4d486235","type":"Stack"}},"y":{"field":"fruits"}},"id":"537349d6-12fe-4dda-a7a9-81033eb21dc9","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"f5770bbc-0b43-4532-a076-73554d8b0f51","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"7a4ca7dc-ee05-4be3-b6ba-627f693ff08b","type":"Stack"}},"y":{"field":"fruits"}},"id":"82db0492-1b0a-45a5-adab-c29ab53ad678","type":"HBar"},{"attributes":{"source":{"id":"52981be3-9d3c-4421-b5c2-5854c7a81a4b","type":"ColumnDataSource"}},"id":"4b200e4e-32bf-4123-a9d7-0ad60e6ebb44","type":"CDSView"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"4aa698e6-0424-4e37-ac59-5241925a49a1","type":"GlyphRenderer"}]},"id":"fbba3e08-5166-4f9d-be69-e5ee97944508","type":"LegendItem"},{"attributes":{},"id":"66670aee-468e-44e2-9e4f-7f538a4d1f02","type":"ResetTool"},{"attributes":{"data_source":{"id":"52981be3-9d3c-4421-b5c2-5854c7a81a4b","type":"ColumnDataSource"},"glyph":{"id":"cd36b710-2795-448d-bed0-d7580f243bce","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82db0492-1b0a-45a5-adab-c29ab53ad678","type":"HBar"},"selection_glyph":null,"view":{"id":"4b200e4e-32bf-4123-a9d7-0ad60e6ebb44","type":"CDSView"}},"id":"a25447fa-b157-40c0-ac95-f7c699c60a2f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bf2d791a-5769-46b0-a256-6432dd0588fa","type":"ColumnDataSource"},"glyph":{"id":"c11e4252-fe99-4524-8005-8450edb0e8be","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"537349d6-12fe-4dda-a7a9-81033eb21dc9","type":"HBar"},"selection_glyph":null,"view":{"id":"93bb6d30-3ebe-45ed-97cc-1578b9f3e33d","type":"CDSView"}},"id":"4aa698e6-0424-4e37-ac59-5241925a49a1","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bf2d791a-5769-46b0-a256-6432dd0588fa","type":"ColumnDataSource"}},"id":"6ac719bf-f0c7-42e1-85f9-54ffecdd2988","type":"CDSView"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"f5770bbc-0b43-4532-a076-73554d8b0f51","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"7a4ca7dc-ee05-4be3-b6ba-627f693ff08b","type":"Stack"}},"y":{"field":"fruits"}},"id":"cd36b710-2795-448d-bed0-d7580f243bce","type":"HBar"},{"attributes":{"items":[{"id":"37a30a44-9fb8-4cd8-9765-9b133787051c","type":"LegendItem"},{"id":"2aa7ee6e-57f0-44d5-872f-48c6e22be201","type":"LegendItem"},{"id":"113fa5ff-5629-4b2f-83bf-b1b08269dc3f","type":"LegendItem"},{"id":"1daf6bf1-3636-4cd1-ba76-b285642e548c","type":"LegendItem"},{"id":"41f5afda-9d9d-40de-b546-cf1e4c791d1c","type":"LegendItem"},{"id":"fbba3e08-5166-4f9d-be69-e5ee97944508","type":"LegendItem"}],"location":"top_left","plot":{"id":"ad86d9e6-d50d-496e-ac08-f2bd6b796cf1","subtype":"Figure","type":"Plot"}},"id":"72990a2b-0714-4b7c-8dea-8b96ea454b66","type":"Legend"},{"attributes":{"fields":["2015","2016"]},"id":"e565a837-fc45-4a39-a6c8-c91d74331e57","type":"Stack"},{"attributes":{"data_source":{"id":"bf2d791a-5769-46b0-a256-6432dd0588fa","type":"ColumnDataSource"},"glyph":{"id":"31294cc5-02ef-41ae-9f3e-af3704b49272","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"493f1abc-0c8e-4bbc-bf76-0a071361a8ec","type":"HBar"},"selection_glyph":null,"view":{"id":"dda9c0b8-4f58-4d50-af4d-400553fc071a","type":"CDSView"}},"id":"4e51d049-07d2-496d-ac0f-b65e48422f8a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20c65d74-839f-48da-8b02-bbc18f96b1cf","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"e565a837-fc45-4a39-a6c8-c91d74331e57","type":"Stack"}},"y":{"field":"fruits"}},"id":"069de648-acaa-4b37-bedf-4821d38788de","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"20c65d74-839f-48da-8b02-bbc18f96b1cf","type":"Stack"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"a25447fa-b157-40c0-ac95-f7c699c60a2f","type":"GlyphRenderer"}]},"id":"37a30a44-9fb8-4cd8-9765-9b133787051c","type":"LegendItem"},{"attributes":{"fields":[]},"id":"f5770bbc-0b43-4532-a076-73554d8b0f51","type":"Stack"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"19680525-afd4-4258-8b07-dd709ae816f4","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"15d9a0a4-82a4-453b-8453-e5f03f93e85c","type":"Stack"}},"y":{"field":"fruits"}},"id":"fbdad2c0-336e-4803-b0f4-6c0db9e64d96","type":"HBar"}],"root_ids":["ad86d9e6-d50d-496e-ac08-f2bd6b796cf1"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"cb5e14e8-b124-440a-9406-69f2a4ca3742","elementid":"d5018b6f-95fc-499a-b55c-894a318b451c","modelid":"ad86d9e6-d50d-496e-ac08-f2bd6b796cf1"}];
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