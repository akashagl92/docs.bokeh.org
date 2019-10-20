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
      };var element = document.getElementById("fd174339-de52-42b3-847c-1ae4d8662b89");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd174339-de52-42b3-847c-1ae4d8662b89' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7b7bf182-9c4c-4c0f-9a18-63c5efaceb0d":{"roots":{"references":[{"attributes":{"data_source":{"id":"985953ab-9191-45e6-958e-abf6e271808f","type":"ColumnDataSource"},"glyph":{"id":"2eb228d3-476e-4d68-a7fd-a68d98e0de6f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14e9dcb6-49b4-4537-8470-541921c990e5","type":"Circle"},"selection_glyph":null,"view":{"id":"1c64ff42-ef42-4644-bed8-038c061ccaf3","type":"CDSView"}},"id":"da581b2d-6df7-44f1-a925-ee1c09afe077","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"74d5abf9-8c52-47d9-9bff-440e6a8c22d9","type":"PanTool"},{"id":"c97cd44e-bae4-42bf-9e58-71e4ba828b73","type":"WheelZoomTool"},{"id":"e7a79fe4-d374-4079-9aa6-68634268a1c6","type":"BoxZoomTool"},{"id":"048605b5-10b1-4499-83aa-8a11d86374ee","type":"SaveTool"},{"id":"2fd6d7e4-6818-4740-b643-981c8a9de6e0","type":"ResetTool"},{"id":"44265416-f4da-4f4f-b72d-687a27c9a15e","type":"HelpTool"}]},"id":"1fd4b61f-7371-44d0-9e77-91f98a911033","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"814c8049-161c-4a55-a7e7-756f014d7d41","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"cfc019a9-6da1-4f5c-a0a9-66235b4a4433","subtype":"Figure","type":"Plot"},"ticker":{"id":"314f69c4-15c0-466d-bc3b-8b641891908c","type":"BasicTicker"}},"id":"6a147a2e-dacc-4096-b2a0-f7866bcfdec1","type":"Grid"},{"attributes":{},"id":"45db3b12-066b-45a7-8d36-24cccec31da1","type":"LinearScale"},{"attributes":{},"id":"670e37ac-e3ec-4742-abf8-da643e4ec955","type":"PanTool"},{"attributes":{},"id":"885b9c78-2ebd-4c14-8e48-d6843f45cb03","type":"BasicTickFormatter"},{"attributes":{},"id":"048605b5-10b1-4499-83aa-8a11d86374ee","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14e9dcb6-49b4-4537-8470-541921c990e5","type":"Circle"},{"attributes":{"overlay":{"id":"41ce5a3f-fab4-4030-a503-6df1e0a4a7ea","type":"BoxAnnotation"}},"id":"7e692d5b-cb9a-49ab-9575-d50c435b784c","type":"BoxZoomTool"},{"attributes":{},"id":"6372a0e7-181b-4f48-b567-a606a596d46e","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2eb228d3-476e-4d68-a7fd-a68d98e0de6f","type":"Circle"},{"attributes":{},"id":"d0703881-1501-43d3-83df-429c296f3ff3","type":"BasicTicker"},{"attributes":{},"id":"44265416-f4da-4f4f-b72d-687a27c9a15e","type":"HelpTool"},{"attributes":{"source":{"id":"985953ab-9191-45e6-958e-abf6e271808f","type":"ColumnDataSource"}},"id":"1c64ff42-ef42-4644-bed8-038c061ccaf3","type":"CDSView"},{"attributes":{"children":[{"id":"cfc019a9-6da1-4f5c-a0a9-66235b4a4433","subtype":"Figure","type":"Plot"},{"id":"36410605-3a6b-4ea0-b3de-01c4be4c30c9","subtype":"Figure","type":"Plot"},{"id":"2bc32e93-e958-4c6c-8190-4d91e1e28e3a","subtype":"Figure","type":"Plot"}]},"id":"f90fec43-ae52-41ca-adfe-3b081970f65f","type":"Row"},{"attributes":{},"id":"314f69c4-15c0-466d-bc3b-8b641891908c","type":"BasicTicker"},{"attributes":{},"id":"dd38daa7-5da3-4753-aebf-198fa9be7f4f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"2bc32e93-e958-4c6c-8190-4d91e1e28e3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"65605a08-36c6-4b7c-9e3c-f17011507c33","type":"BasicTicker"}},"id":"e621e45e-dffd-4cdb-8d69-6b9562a5036c","type":"Grid"},{"attributes":{},"id":"4e9890c0-73bf-4f5e-a630-372920fc59f8","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"560d291a-5657-4a05-8460-ce31e3720b7f","type":"ColumnDataSource"}},"id":"a5d7560b-3cd7-4312-b8a6-1edeafdcf5e1","type":"CDSView"},{"attributes":{"below":[{"id":"df422ec8-8138-4921-93fe-ee2af92f8744","type":"LinearAxis"}],"left":[{"id":"9e7d79d7-8305-4e0d-85ac-28c104440605","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"df422ec8-8138-4921-93fe-ee2af92f8744","type":"LinearAxis"},{"id":"e621e45e-dffd-4cdb-8d69-6b9562a5036c","type":"Grid"},{"id":"9e7d79d7-8305-4e0d-85ac-28c104440605","type":"LinearAxis"},{"id":"1745e9b2-9d57-412e-9e7a-47926e38f1fc","type":"Grid"},{"id":"33cd2dea-fb2d-483d-8dc8-5be8b8257e15","type":"BoxAnnotation"},{"id":"bab5dd3a-ac66-4e48-aed5-4332868b949f","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"1fd4b61f-7371-44d0-9e77-91f98a911033","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"391c1f77-99f8-4b2a-8ff2-efc6a128ab35","type":"DataRange1d"},"x_scale":{"id":"a4d293aa-8451-43cc-a288-0416068923a0","type":"LinearScale"},"y_range":{"id":"893b6566-5685-4993-b776-8eadec096d01","type":"DataRange1d"},"y_scale":{"id":"0cbcf935-5fee-48e4-8030-f7e74eec8eb6","type":"LinearScale"}},"id":"2bc32e93-e958-4c6c-8190-4d91e1e28e3a","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"893b6566-5685-4993-b776-8eadec096d01","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33cd2dea-fb2d-483d-8dc8-5be8b8257e15","type":"BoxAnnotation"},{"attributes":{},"id":"b8f66726-0592-4cde-afa5-38b7db49e823","type":"ResetTool"},{"attributes":{},"id":"0cbcf935-5fee-48e4-8030-f7e74eec8eb6","type":"LinearScale"},{"attributes":{"formatter":{"id":"6372a0e7-181b-4f48-b567-a606a596d46e","type":"BasicTickFormatter"},"plot":{"id":"2bc32e93-e958-4c6c-8190-4d91e1e28e3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"65605a08-36c6-4b7c-9e3c-f17011507c33","type":"BasicTicker"}},"id":"df422ec8-8138-4921-93fe-ee2af92f8744","type":"LinearAxis"},{"attributes":{"data_source":{"id":"560d291a-5657-4a05-8460-ce31e3720b7f","type":"ColumnDataSource"},"glyph":{"id":"814c8049-161c-4a55-a7e7-756f014d7d41","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b95be3ed-d445-49f5-933d-bee125fe3bca","type":"Square"},"selection_glyph":null,"view":{"id":"a5d7560b-3cd7-4312-b8a6-1edeafdcf5e1","type":"CDSView"}},"id":"bab5dd3a-ac66-4e48-aed5-4332868b949f","type":"GlyphRenderer"},{"attributes":{},"id":"8faa19a2-1289-4e96-8c50-667ad7a66a7a","type":"BasicTicker"},{"attributes":{},"id":"b6f33d68-3a40-489b-8204-d8b7d5d450ad","type":"HelpTool"},{"attributes":{},"id":"0a355ff7-fd70-45b9-8dde-34adc22a7a52","type":"BasicTickFormatter"},{"attributes":{},"id":"6cd045fb-a906-4f24-8cfb-fc796b78ded4","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"e9942e93-f038-47aa-bda6-ca357a635b79","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"e97d8278-c61c-46f5-87ff-4c280ed84c38","type":"LinearAxis"}],"left":[{"id":"54c5341b-0ee6-442b-b69c-c82c28a89055","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e97d8278-c61c-46f5-87ff-4c280ed84c38","type":"LinearAxis"},{"id":"d4552de9-f794-45ef-bb33-c994e7db18cd","type":"Grid"},{"id":"54c5341b-0ee6-442b-b69c-c82c28a89055","type":"LinearAxis"},{"id":"5b2f5b87-5689-4aa5-b6ce-7c028ff8bc5b","type":"Grid"},{"id":"66635b53-b023-444f-8d5b-b942abd1f83f","type":"BoxAnnotation"},{"id":"7c92c36c-9ff7-41e1-833a-873584294921","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"04178b09-ff8a-4216-a5f5-b5d7d1b331a5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"391c1f77-99f8-4b2a-8ff2-efc6a128ab35","type":"DataRange1d"},"x_scale":{"id":"6cd045fb-a906-4f24-8cfb-fc796b78ded4","type":"LinearScale"},"y_range":{"id":"c1ba58a3-1495-492b-afd1-5a62af07f7b8","type":"DataRange1d"},"y_scale":{"id":"45db3b12-066b-45a7-8d36-24cccec31da1","type":"LinearScale"}},"id":"36410605-3a6b-4ea0-b3de-01c4be4c30c9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5bfb8387-4570-4d96-bfcd-11e8b24f3176","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"36410605-3a6b-4ea0-b3de-01c4be4c30c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"8faa19a2-1289-4e96-8c50-667ad7a66a7a","type":"BasicTicker"}},"id":"5b2f5b87-5689-4aa5-b6ce-7c028ff8bc5b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"560d291a-5657-4a05-8460-ce31e3720b7f","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"885b9c78-2ebd-4c14-8e48-d6843f45cb03","type":"BasicTickFormatter"},"plot":{"id":"2bc32e93-e958-4c6c-8190-4d91e1e28e3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0703881-1501-43d3-83df-429c296f3ff3","type":"BasicTicker"}},"id":"9e7d79d7-8305-4e0d-85ac-28c104440605","type":"LinearAxis"},{"attributes":{},"id":"65605a08-36c6-4b7c-9e3c-f17011507c33","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0c164b6a-12d9-4d7c-9804-7045c3a7a710","type":"PanTool"},{"id":"d53df7f6-93df-43b2-9e30-94335a4c1af4","type":"WheelZoomTool"},{"id":"e756ec95-1cda-4712-96d4-6b6ed54f1616","type":"BoxZoomTool"},{"id":"5e0836fc-826c-4753-aa09-86345e4fd6c8","type":"SaveTool"},{"id":"0f0e572b-ab7d-4e89-a7b3-5904fe43193a","type":"ResetTool"},{"id":"b6f33d68-3a40-489b-8204-d8b7d5d450ad","type":"HelpTool"}]},"id":"04178b09-ff8a-4216-a5f5-b5d7d1b331a5","type":"Toolbar"},{"attributes":{"source":{"id":"e9942e93-f038-47aa-bda6-ca357a635b79","type":"ColumnDataSource"}},"id":"6fe105de-cf76-4add-a40d-1e451bb6a783","type":"CDSView"},{"attributes":{"overlay":{"id":"33cd2dea-fb2d-483d-8dc8-5be8b8257e15","type":"BoxAnnotation"}},"id":"e7a79fe4-d374-4079-9aa6-68634268a1c6","type":"BoxZoomTool"},{"attributes":{},"id":"29c2d194-3fa5-4f87-8c67-1328e505bbae","type":"BasicTickFormatter"},{"attributes":{},"id":"c97cd44e-bae4-42bf-9e58-71e4ba828b73","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"29c2d194-3fa5-4f87-8c67-1328e505bbae","type":"BasicTickFormatter"},"plot":{"id":"36410605-3a6b-4ea0-b3de-01c4be4c30c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"8faa19a2-1289-4e96-8c50-667ad7a66a7a","type":"BasicTicker"}},"id":"54c5341b-0ee6-442b-b69c-c82c28a89055","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"41ce5a3f-fab4-4030-a503-6df1e0a4a7ea","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"634fe759-a7e9-4f8c-9375-7a2c9db17b73","type":"Triangle"},{"attributes":{"formatter":{"id":"3463f3e2-081c-491a-adac-d60aab7e3a78","type":"BasicTickFormatter"},"plot":{"id":"cfc019a9-6da1-4f5c-a0a9-66235b4a4433","subtype":"Figure","type":"Plot"},"ticker":{"id":"314f69c4-15c0-466d-bc3b-8b641891908c","type":"BasicTicker"}},"id":"8ca2ab61-a34a-4b39-b8e1-2458a908078d","type":"LinearAxis"},{"attributes":{},"id":"5e0836fc-826c-4753-aa09-86345e4fd6c8","type":"SaveTool"},{"attributes":{"data_source":{"id":"e9942e93-f038-47aa-bda6-ca357a635b79","type":"ColumnDataSource"},"glyph":{"id":"634fe759-a7e9-4f8c-9375-7a2c9db17b73","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee79d310-3597-449a-907d-0ff230d831c8","type":"Triangle"},"selection_glyph":null,"view":{"id":"6fe105de-cf76-4add-a40d-1e451bb6a783","type":"CDSView"}},"id":"7c92c36c-9ff7-41e1-833a-873584294921","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0a355ff7-fd70-45b9-8dde-34adc22a7a52","type":"BasicTickFormatter"},"plot":{"id":"36410605-3a6b-4ea0-b3de-01c4be4c30c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ea8165b-5fd7-40f6-9428-3da649d906b8","type":"BasicTicker"}},"id":"e97d8278-c61c-46f5-87ff-4c280ed84c38","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"985953ab-9191-45e6-958e-abf6e271808f","type":"ColumnDataSource"},{"attributes":{},"id":"d53df7f6-93df-43b2-9e30-94335a4c1af4","type":"WheelZoomTool"},{"attributes":{},"id":"3463f3e2-081c-491a-adac-d60aab7e3a78","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4e9890c0-73bf-4f5e-a630-372920fc59f8","type":"BasicTickFormatter"},"plot":{"id":"cfc019a9-6da1-4f5c-a0a9-66235b4a4433","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee6e2163-f4cf-453e-9b08-54e088564ec5","type":"BasicTicker"}},"id":"4b3f7fa6-513e-4acb-82f3-4ff55b31b797","type":"LinearAxis"},{"attributes":{},"id":"0c164b6a-12d9-4d7c-9804-7045c3a7a710","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"66635b53-b023-444f-8d5b-b942abd1f83f","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b95be3ed-d445-49f5-933d-bee125fe3bca","type":"Square"},{"attributes":{},"id":"74d5abf9-8c52-47d9-9bff-440e6a8c22d9","type":"PanTool"},{"attributes":{},"id":"88731baf-f8f9-4a8f-8e40-c8c807eac9a4","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"2bc32e93-e958-4c6c-8190-4d91e1e28e3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0703881-1501-43d3-83df-429c296f3ff3","type":"BasicTicker"}},"id":"1745e9b2-9d57-412e-9e7a-47926e38f1fc","type":"Grid"},{"attributes":{"callback":null},"id":"391c1f77-99f8-4b2a-8ff2-efc6a128ab35","type":"DataRange1d"},{"attributes":{},"id":"2fd6d7e4-6818-4740-b643-981c8a9de6e0","type":"ResetTool"},{"attributes":{},"id":"1ea8165b-5fd7-40f6-9428-3da649d906b8","type":"BasicTicker"},{"attributes":{},"id":"da676030-5791-4253-8ff1-5f15de7d8f31","type":"LinearScale"},{"attributes":{},"id":"ee6e2163-f4cf-453e-9b08-54e088564ec5","type":"BasicTicker"},{"attributes":{"children":[{"id":"f90fec43-ae52-41ca-adfe-3b081970f65f","type":"Row"}]},"id":"9ea2bec2-fdeb-4874-8224-1a1102308d6e","type":"Column"},{"attributes":{},"id":"fcbf3ccd-75cc-4665-916f-3ed35f7b4f1b","type":"LinearScale"},{"attributes":{"plot":{"id":"36410605-3a6b-4ea0-b3de-01c4be4c30c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ea8165b-5fd7-40f6-9428-3da649d906b8","type":"BasicTicker"}},"id":"d4552de9-f794-45ef-bb33-c994e7db18cd","type":"Grid"},{"attributes":{"callback":null},"id":"c1ba58a3-1495-492b-afd1-5a62af07f7b8","type":"DataRange1d"},{"attributes":{"overlay":{"id":"66635b53-b023-444f-8d5b-b942abd1f83f","type":"BoxAnnotation"}},"id":"e756ec95-1cda-4712-96d4-6b6ed54f1616","type":"BoxZoomTool"},{"attributes":{},"id":"0f0e572b-ab7d-4e89-a7b3-5904fe43193a","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee79d310-3597-449a-907d-0ff230d831c8","type":"Triangle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"670e37ac-e3ec-4742-abf8-da643e4ec955","type":"PanTool"},{"id":"dd38daa7-5da3-4753-aebf-198fa9be7f4f","type":"WheelZoomTool"},{"id":"7e692d5b-cb9a-49ab-9575-d50c435b784c","type":"BoxZoomTool"},{"id":"88731baf-f8f9-4a8f-8e40-c8c807eac9a4","type":"SaveTool"},{"id":"b8f66726-0592-4cde-afa5-38b7db49e823","type":"ResetTool"},{"id":"5bfb8387-4570-4d96-bfcd-11e8b24f3176","type":"HelpTool"}]},"id":"587e49a5-5e8d-44dc-a097-6836a29ff296","type":"Toolbar"},{"attributes":{"plot":{"id":"cfc019a9-6da1-4f5c-a0a9-66235b4a4433","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee6e2163-f4cf-453e-9b08-54e088564ec5","type":"BasicTicker"}},"id":"03ddf636-540d-4c51-b731-201f72e3f65c","type":"Grid"},{"attributes":{},"id":"a4d293aa-8451-43cc-a288-0416068923a0","type":"LinearScale"},{"attributes":{"below":[{"id":"4b3f7fa6-513e-4acb-82f3-4ff55b31b797","type":"LinearAxis"}],"left":[{"id":"8ca2ab61-a34a-4b39-b8e1-2458a908078d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"4b3f7fa6-513e-4acb-82f3-4ff55b31b797","type":"LinearAxis"},{"id":"03ddf636-540d-4c51-b731-201f72e3f65c","type":"Grid"},{"id":"8ca2ab61-a34a-4b39-b8e1-2458a908078d","type":"LinearAxis"},{"id":"6a147a2e-dacc-4096-b2a0-f7866bcfdec1","type":"Grid"},{"id":"41ce5a3f-fab4-4030-a503-6df1e0a4a7ea","type":"BoxAnnotation"},{"id":"da581b2d-6df7-44f1-a925-ee1c09afe077","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"587e49a5-5e8d-44dc-a097-6836a29ff296","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"391c1f77-99f8-4b2a-8ff2-efc6a128ab35","type":"DataRange1d"},"x_scale":{"id":"fcbf3ccd-75cc-4665-916f-3ed35f7b4f1b","type":"LinearScale"},"y_range":{"id":"c1ba58a3-1495-492b-afd1-5a62af07f7b8","type":"DataRange1d"},"y_scale":{"id":"da676030-5791-4253-8ff1-5f15de7d8f31","type":"LinearScale"}},"id":"cfc019a9-6da1-4f5c-a0a9-66235b4a4433","subtype":"Figure","type":"Plot"}],"root_ids":["9ea2bec2-fdeb-4874-8224-1a1102308d6e"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"7b7bf182-9c4c-4c0f-9a18-63c5efaceb0d","elementid":"fd174339-de52-42b3-847c-1ae4d8662b89","modelid":"9ea2bec2-fdeb-4874-8224-1a1102308d6e"}];
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