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
      };var element = document.getElementById("a1fe556e-4762-4699-a21e-a43b79fea817");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a1fe556e-4762-4699-a21e-a43b79fea817' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1b86fc89-a0ff-4b82-8ac8-456c00e3cf62":{"roots":{"references":[{"attributes":{"source":{"id":"adf2cd5f-5fa2-4395-b67a-8bc7f7da08c7","type":"ColumnDataSource"}},"id":"b5cf2652-a79e-49f9-8777-3149889b19a0","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"cdc0091a-22e2-48c8-ab92-e6770be78ec1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8f365eb-005d-4ac2-907c-93d0e8d05878","type":"BasicTicker"}},"id":"8c269600-4e60-4704-9e1e-1af0189309c2","type":"Grid"},{"attributes":{"below":[{"id":"411e9221-62a8-408f-9f9a-50b59087b799","type":"LinearAxis"}],"left":[{"id":"11920f49-409a-482a-b827-8deba4c03957","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"411e9221-62a8-408f-9f9a-50b59087b799","type":"LinearAxis"},{"id":"75377c78-603d-4b9f-b4cd-e6fe89dab4f1","type":"Grid"},{"id":"11920f49-409a-482a-b827-8deba4c03957","type":"LinearAxis"},{"id":"8c269600-4e60-4704-9e1e-1af0189309c2","type":"Grid"},{"id":"33d3a813-1234-48b1-9205-b939896902ab","type":"PolyAnnotation"},{"id":"eb411cf8-5ee8-4253-b264-5078a19c2f0d","type":"GlyphRenderer"},{"id":"ab151888-7654-4896-94e8-82692bee1ec7","type":"GlyphRenderer"}],"title":{"id":"0a949635-5284-4ca4-9531-a44e749938c6","type":"Title"},"toolbar":{"id":"79fdbb4f-216d-430e-a407-f3adcb9bb836","type":"Toolbar"},"x_range":{"id":"b3f58811-d6fa-4cff-8f5b-7a0315da076c","type":"DataRange1d"},"x_scale":{"id":"0045f6c3-41fc-4db9-b9af-1fe2d481939b","type":"LinearScale"},"y_range":{"id":"24050b83-dd2e-4865-8554-67406523eca3","type":"DataRange1d"},"y_scale":{"id":"6ff20b28-81ff-4177-9559-6e4272c71909","type":"LinearScale"}},"id":"cdc0091a-22e2-48c8-ab92-e6770be78ec1","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"33d3a813-1234-48b1-9205-b939896902ab","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ac35eba-36c6-4dd8-b175-a9e91973ed98","type":"Circle"},{"attributes":{},"id":"b10657c2-3015-4c42-9fe0-4f03a6ece1f0","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Select Here"},"id":"0a949635-5284-4ca4-9531-a44e749938c6","type":"Title"},{"attributes":{"line_alpha":0.6,"line_color":"orange","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"b61ec6d9-5be1-4f44-ab16-27c611b552e7","type":"Line"},{"attributes":{"callback":null},"id":"b3f58811-d6fa-4cff-8f5b-7a0315da076c","type":"DataRange1d"},{"attributes":{"callback":{"id":"75909e0d-4063-4c41-8357-91bb95356bfc","type":"CustomJS"},"column_names":["x","y","color"],"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.1696642898784233,0.6930282006570683,0.36191311321166697,0.522729224089985,0.2921308280739452,0.35116606567765374,0.11116721824330977,0.33117527398145674,0.040916863986249385,0.19341999390506925,0.9191925890999171,0.11807032433216613,0.6694022372335479,0.682906916919764,0.7035968174099809,0.037230042117923356,0.9903577294222887,0.8575216418930262,0.998850607004062,0.9505076038173835,0.7111499708056971,0.2758373213813632,0.7132525036124037,0.9744697833353276,0.23593133284519108,0.5627148914694329,0.2727702145896763,0.7413925675233848,0.22753229757659854,0.427949005244198,0.5352379473093042,0.2263526005210632,0.5667331650376083,0.3916385649502133,0.3507218896419527,0.8922253551027786,0.8123050659597787,0.2945894356679486,0.5036439476542504,0.26811540640362297,0.8146351264370894,0.20657413423795623,0.6832588159434209,0.4912525114621322,0.7783169927607992,0.38674669172943454,0.8021165498762989,0.3121782137316912,0.0754957196842797,0.38357024728185773,0.3356662815329903,0.44305084649887194,0.3852844299927507,0.8357031556686144,0.8265834189516964,0.1245234170423668,0.04487399907699008,0.7289439385616048,0.5359258230948403,0.9194689455582523,0.2868956976775985,0.9658637725456783,0.3827448816013984,0.8733309957364631,0.15608583106489038,0.8524668384302286,0.2425679910604086,0.16967493306320525,0.1836276652075174,0.3968770593308929,0.32176728610970085,0.2580333520764103,0.7827065516227372,0.21667440700561091,0.2870037111253424,0.2950413593674366,0.8490226480438607,0.8931039640188008,0.13818483635481627,0.7398252070803389,0.9046611636071947,0.011244786775364446,0.2352887727005618,0.1662001481455505,0.383830535652393,0.879527508993431,0.06716037910289974,0.06176010052555925,0.7884579329484508,0.6555308901524967,0.03892357701879101,0.7589564864570216,0.9903770710312783,0.6710006911184111,0.47286237659882113,0.4704552787312619,0.4347027690223977,0.9697440638006817,0.4597011523357927,0.24287000889888266,0.8887766692569903,0.5960511651857762,0.6581812215960757,0.6971127663532222,0.7805619204090627,0.28005266303928966,0.1304332517139043,0.553255715476987,0.8875826422106204,0.5732864661550144,0.4194510493331641,0.18048245370116556,0.6174501074469925,0.08696553933610007,0.8652698794946083,0.398398240232422,0.29846784658650016,0.5387868573023277,0.7037955486574456,0.9027143903821623,0.5103395005069838,0.7191501615232067,0.49190964994480857,0.04627443592162228,0.8476138737691122,0.8547163818251702,0.6387938834752287,0.48986910417360996,0.6075598948493288,0.5444745163668868,0.08751659640006437,0.5471542075159996,0.29121663340905013,0.743830122854455,0.5583483301531773,0.11964760626242754,0.334338628370743,0.5049132103907293,0.8685842698787234,0.8501413894332149,0.725021114346837,0.7844906117531366,0.9275236904387437,0.07911230223279242,0.4292456117248642,0.2750453633700255,0.843680984101421,0.8675106940552115,0.3949503573149675,0.7508101021645991,0.8552747751824827,0.6984415520614352,0.7983647322730786,0.72875541853685,0.35247497487234736,0.7813827742322832,0.903609659969616,0.965095187198814,0.31720441013015854,0.8805202004814008,0.9860310320625865,0.5943639972035505,0.9749137312226277,0.04431735238868417,0.16501709055996028,0.31214650580314507,0.5655964948894272,0.5580029112162903,0.04648957432328238,0.30220960277477005,0.5367564634888095,0.8740053000905652,0.8298580992223743,0.33463582874812325,0.186556424036889,0.8716112637380412,0.0887835912842262,0.8046727348575301,0.09730648504179251,0.3477769119361671,0.13901807530309895,0.7741003216193307,0.34858640876897606,0.1255483497303026,0.24501018057280144,0.0966154691594786,0.3082680141634958,0.412622942783088,0.37263814731971223,0.9086364360814242,0.4436140716549598,0.11974372708399095,0.6816199584429641,0.8137584736830584,0.6379509470669986,0.6676416640427514,0.03073895060961962,0.46644616624462365,0.6948309376357567,0.18787322095952852,0.3358042001704621,0.5026180575759795,0.2860742916437907,0.6187598227325292,0.2577852188489337,0.8250623520722584,0.22401125005246703,0.9484177996347836,0.5161998606828201,0.1960736180103526,0.17790590313251797,0.27773487685070475,0.8140505242775303,0.33826711070120563,0.09823639678116591,0.1337807279023696,0.08629438026808278,0.5458026397133495,0.21403624352092487,0.21049609087982513,0.9699794372568661,0.00908924176664927,0.8819036835396107,0.6090922786178259,0.9047424105348938,0.9431435223402859,0.44571890912699375,0.7517030584348168,0.17926567014339678,0.6797417038186182,0.2967163389998998,0.0790253681715527,0.5357819009667718,0.2008124446522267,0.23297596714485835,0.7000613274680985,0.44796404228112774,0.14051391891448994,0.45094809116806955,0.6052838763919087,0.9881084363122689,0.3496794818000357,0.0029084586746285224,0.631795574292904,0.873995140110872,0.4550155004835208,0.1272970214734539,0.02006306337359398,0.3446230036330872,0.19236791046253,0.4440468822433804,0.21401721891366088,0.7577075227297533,0.6469965485547441,0.4281004075948672,0.7096469726924317,0.6409715636779677,0.5581217187390264,0.45231170666768405,0.5620592005510461,0.28493908485418207,0.3649869364428022,0.044937400791528415,0.08060899248275366,0.04827746053466786,0.5566021558798185,0.881183843816289,0.3077551338047221,0.9998125126218613,0.144499987445872,0.18837115625887757,0.14723349375470396,0.920214983240501,0.6681042768060348,0.2690829501697187,0.7470265931963533,0.027743918342364116,0.864237697958491,0.41839522185041955,0.8228032170722996,0.8281722703731956,0.9760750488602434,0.7172901762932556,0.39339558448547807,0.2321015047285354,0.0773104526572651,0.265725659860079,0.412409568327452,0.008997601505851605,0.07781302684582181,0.6423127640195777,0.1796883437490725,0.6873178812715063,0.28979122694672055,0.4937106176939675,0.029376891037429242,0.8141369362680416,0.9437325839999442,0.3392573470563556,0.7572088289038634,0.9942595783276466,0.965244131070052,0.31944105826190894,0.5579697933221412,0.057565555760142995,0.9481828673729917,0.9643642640830686,0.9432690476844963,0.9914812457711984,0.8782857466271422,0.7438500232515182,0.3221176836208113,0.7311059473877115,0.5599959250165484,0.3119126197995781,0.47610833804862374,0.07726022443782465,0.9515267169420086,0.26423525845784435,0.02799453103903793,0.16572957402068256,0.6028063023477993,0.4166890871675716,0.8946458092197387,0.5158134345350908,0.33566652225136573,0.8626301384920789,0.6369288119338815,0.19546991124699797,0.15024833840303664,0.5890096817146343,0.9014539019251046,0.2895399073416026,0.5709256620835187,0.8637833558754265,0.04872043654766767,0.3634423740858488,0.046620913303029754,0.7704614169314442,0.6845666556006855,0.20074385383043414,0.5723728643207318,0.5721227589498731,0.43413418309078267,0.03381686164975395,0.7440974358418471,0.9474213862488193,0.7285354417580207,0.6796700675424915,0.8983722397428254,0.8439784707050723,0.4879982163056509,0.3862121192064141,0.04509667797745254,0.7454999536966003,0.7489557269917668,0.04562877469520099,0.32831346516487236,0.5975705772169069,0.7798925830520871,0.6436938368594828,0.8922151499103568,0.8458893858353865,0.42891731618214224,0.3970344854622183,0.07879761017357967,0.4751532178886049,0.2378171489212465,0.258033369056083,0.8335696818260102,0.674462038708696,0.6704293753294742,0.10935981107632098,0.06213243806320934,0.13576490529864105,0.8277997483857298,0.28117548470644393,0.8739019096578517,0.7153572375279863,0.11204575845357367,0.2981372017645386,0.4263370471301864,0.5239236345839247,0.20820516952468449,0.14082618155359328,0.3825192375070193,0.49115491422673263,0.2143056015599355,0.9754998756664545,0.5248069410636337,0.5301675586192435,0.8898801372174558,0.49973781195473743,0.31267772896781454,0.6878547927257932,0.8914903194649298,0.3978041372888649,0.1381935692248526,0.6896226456688094,0.9756809710575143,0.8416854841707363,0.2369475527105741,0.7972320169421898,0.9722626184442847,0.4335862193124661,0.35035070705805593,0.7071946081067936,0.34153728840815367,0.6135415126194353,0.12181769359857597,0.12973976502482154,0.3685367546503192,0.4139728288863028,0.2228663647165796,0.20692443977616526,0.44111498040076924,0.3730369222925498,0.4861038466167027,0.34459106669548045,0.3266252121048405,0.7280587334085484,0.7816003995079812,0.9042278238097866,0.8071258031686257,0.2061009303657616,0.001858575948631036,0.7727936074626724,0.9856014720871157,0.2015440810624074,0.22877973333612744,0.5123085477655283,0.9487746983107743,0.7386715250118142,0.9915751252182017,0.9175774090300334,0.9304340652701146,0.8335814373130369,0.5300971437595228,0.8551566537987645,0.9579131934741074,0.43596506306771166,0.2617045705536052,0.6694986677318757,0.8336842554269863,0.6790813203793761,0.8577458976757444,0.06412849897348794,0.27672635413643654,0.8251892590570289,0.3265192757843033,0.0695262532963643,0.11673910361855788,0.9334093220629498,0.8445976214521574,0.42187585422234897,0.6391977028280892,0.1670225621606941,0.8323301197274191,0.032336040750212236,0.5366770523050155,0.31230665761010135,0.06485672346980187,0.630986307466381,0.9813186842201456,0.6702128226530534,0.8635801361065457,0.47120888062038346,0.5829000435671834,0.03576970016773906,0.9662029846620381,0.9075529457815074,0.007776892285715542,0.9293768374531673,0.48802692586161833,0.5725605689598895,0.07394970620552765,0.12827505648534254,0.2857092841690331,0.617152348259038,0.9932791383018055,0.17387168957834953,0.786762137665687,0.6478684886700982,0.38877380325081456,0.7546860886641122,0.25429513866936615,0.7673671039214683,0.10233990813334404,0.23275840816092686,0.39214382964487515,0.9732479571274766,0.32037589905520736,0.44841612748266113,0.8314597561096085,0.9090144363774221,0.04782069753822782,0.7975553906821008,0.6608587692217569,0.6919725711436528,0.5879971618446325],"y":[0.648071669667284,0.5915677518577944,0.5392057986040347,0.5243708833587962,0.9805002716187503,0.15536704203141638,0.5691121388441528,0.39296163138729534,0.6946445148243496,0.5901960499195872,0.09302581976226632,0.6409698036973835,0.08864562958792876,0.20598519936149196,0.5050406290610907,0.6049633495480928,0.5888947658340866,0.3161134525054673,0.311599158771776,0.6624190136142215,0.7856274017964741,0.12393663506925379,0.9087367445790749,0.2052155323519792,0.11474741436623803,0.7682221491248474,0.3889743360542137,0.909221289542819,0.22039057347977742,0.804073471072173,0.6486223587506348,0.43279802681668356,0.5038148807939995,0.8335317006275447,0.8826578803695398,0.6116856743446634,0.8052071527819079,0.8637238860633595,0.9742794954817098,0.04075979140923558,0.6031832436372326,0.6750757442328669,0.2758911931489614,0.9195057402706768,0.09816848857909577,0.8264379662765171,0.6463321113592071,0.04498572851845384,0.04610777797105137,0.24532070950263685,0.7629078465193675,0.151429537786692,0.05583354406001173,0.8234415023501245,0.4868043577546901,0.8309458894901354,0.17658443610483787,0.27602076122520025,0.037650870636855904,0.6496622852677171,0.36839379429847185,0.3719779767758493,0.05701018383628642,0.3848714622540599,0.5759133004290816,0.7696122897044637,0.4290906260234204,0.6804153943654944,0.9099281421596773,0.052381453792219035,0.4057065165581395,0.803853597475946,0.9484753786757464,0.45533590113668887,0.1904907703685096,0.8670871471872852,0.28203786246324414,0.946179019155237,0.4956697164702222,0.9545465139843414,0.7906968771662629,0.5070745933859493,0.7544856179449779,0.5265617280239644,0.9884005160658342,0.1341318330701976,0.26358105840092283,0.3257261918415394,0.2668928859829208,0.6840218531533362,0.1773879556349407,0.8094792030287,0.07764953620200654,0.568199245737635,0.7281487190306798,0.45803820097473646,0.6366034215063994,0.971342905217986,0.4715784842393982,0.09692585008317411,0.5156595940103977,0.7114720648017485,0.29475271502497036,0.25578464278392155,0.7719398248172822,0.9782310672241595,0.8972722212609475,0.4602937116006609,0.40124380223944767,0.8273439967009105,0.5524403751127492,0.11271228211491291,0.5590919909055989,0.5052125695081239,0.30182913734009276,0.4140369910131534,0.9197706821186145,0.18897885740793086,0.9864858735272659,0.8056573666899921,0.04905594953814185,0.06898460325054345,0.9651655932242732,0.8075914998487697,0.8571487344621553,0.9921275690727048,0.46753209957588593,0.43116826177829737,0.8688810241425087,0.0649579077907464,0.60762179028015,0.5409828400045789,0.7311990287791734,0.7684545869437728,0.33256184451996584,0.8865914811150492,0.20313658643420307,0.9271534092630144,0.38482358948054696,0.7956108087054377,0.6047325267937337,0.6650174343169871,0.10597197529585434,0.3241907465422713,0.38344989284522246,0.7271768985437238,0.9527090365144473,0.18252949032472465,0.975413651317436,0.832401019744498,0.9132833610106641,0.211825558403422,0.6604829188812773,0.5789232462133149,0.5766559589206062,0.010230385423140365,0.07418598985188907,0.19044442729851863,0.49422316972438274,0.6830445275344057,0.4896795331079373,0.2998164729326085,0.1198998930387919,0.9304333264847879,0.8074704374325163,0.014743376739458691,0.1491284463484791,0.6934301241369085,0.6909952850425007,0.0057270207872223144,0.7770990978679861,0.6116173345422452,0.4171783322934747,0.08177812644634364,0.7672969818442297,0.9129695539165665,0.26269022669866204,0.40401974200483626,0.1922026097663072,0.3366651816998474,0.5591126601967343,0.889532662862822,0.2146418628433039,0.17440859987556723,0.740527580816828,0.3839500985924802,0.1730566710079896,0.23634895333039352,0.4656810992624445,0.40471740463770056,0.7905596670827348,0.9466533649795064,0.17532480423668684,0.6241125379100212,0.861338012736356,0.2757667829991185,0.6958301737885735,0.37522898071123745,0.6583175582974418,0.858590408496985,0.12006044463533494,0.03257189307252106,0.33187224335459264,0.14516205500101276,0.7146979632878507,0.47045429317009957,0.41871488618913755,0.6132524156107603,0.46388605460332344,0.40214714081891134,0.3455734581322195,0.612457442238774,0.9374261157551224,0.7792513829987023,0.6770460541810617,0.24275609422797717,0.44669262737513415,0.21348626813563887,0.5745958315350933,0.7165745721759311,0.9963725068102596,0.02529762170496086,0.5991782336268917,0.49052816192511706,0.7209042682224063,0.6631572981961579,0.2398299957723422,0.017666747656805093,0.6530780220794974,0.150555168462717,0.5730206687086943,0.12654187352399837,0.04234715057591654,0.6164787128436113,0.37005464462755466,0.6879675491312205,0.4947887903056398,0.01345450780294788,0.39953562435193524,0.23051268785584444,0.29268307661025805,0.06931351047989087,0.7404163481415384,0.3961345521992119,0.6267956799773016,0.20272125772887428,0.3366400505980285,0.3175409153568759,0.9846352023701859,0.606346583527,0.04007016452856105,0.26894172626613877,0.02170045183917746,0.25616573822248445,0.38942841233492487,0.32405956405195246,0.4579850221138627,0.9711057765908894,0.615744732120614,0.09766969076539489,0.0685775188285418,0.08967609019353551,0.42607876306356807,0.7494391011299465,0.9576776342646786,0.6638291007871212,0.5092348843003494,0.3219956389899582,0.22345289553609382,0.45511355922503227,0.35014003101902436,0.7195234033240069,0.1940932789156622,0.13569955674018008,0.004530870316146296,0.9068358796883054,0.17653978174682428,0.4862272506198464,0.11507008384325557,0.4372885536613381,0.6686031867592904,0.11066711487204883,0.07053928805593523,0.7639758795885198,0.0787850275373142,0.5580578845401113,0.6222157482164059,0.10885844576625903,0.6746391244589001,0.9159080125464012,0.699440180526182,0.17609151232134657,0.2705892482589227,0.7637891178028962,0.3953964970276016,0.7435023758031325,0.057300304351232456,0.6101736788988513,0.32504763616849697,0.5093060819238446,0.05187872821690109,0.7160529234257823,0.6210570885401528,0.04074885191112754,0.24676393628696958,0.9598064678317266,0.9339180189914806,0.8212926590335778,0.5761795053125123,0.08707247863572243,0.2757028966383763,0.9495139123815793,0.4458110700225051,0.03458684768849085,0.33694832816661346,0.8627786737453488,0.9096196935321542,0.8804216571796315,0.3721328183443471,0.6275154460460499,0.1398413240812253,0.6545395359473534,0.6361625494088268,0.8708065718795456,0.6202934177218757,0.7115549343353164,0.4789681809109466,0.04051539902244583,0.26282717185115845,0.9361253349997779,0.9765069216988591,0.7187181317798093,0.8603502539824253,0.5767700538874467,0.06638658114051688,0.6457670846652744,0.5098724112287834,0.8914670052699621,0.11780416077026956,0.10845648695854548,0.38272256928127324,0.7663312953543282,0.5518022728286964,0.610468756955919,0.7214612793125957,0.1844086162857328,0.06505486415637851,0.9526950367537157,0.5163829232571278,0.8175649995296465,0.43160694687001,0.20911290975042807,0.06202872691162753,0.13458791143608717,0.39341082532540705,0.042203213978344256,0.14142795866311164,0.2977253361388633,0.7176873736568886,0.24889865575140013,0.8194970327522729,0.17552754886210997,0.9022918889807,0.27973074659593744,0.8770143586588511,0.014677322745198063,0.15254672065998542,0.9496235273503554,0.5337672983929349,0.9075812047753892,0.9628095116135902,0.23364787261842423,0.09101708465098668,0.6258617893824041,0.47029431273469646,0.25461611060489875,0.1063451829903308,0.18337952834467708,0.16348182182843052,0.23979927008959878,0.2476185939748986,0.7444969488136345,0.218702479432886,0.6532288637292162,0.2583278949379686,0.8982251462134544,0.4826931457374981,0.5167044618752933,0.4584444510481206,0.9496908580263917,0.3991400103267051,0.9864859806304248,0.16076029231844458,0.3137938087916595,0.11723837436352447,0.16064736236882626,0.6706592377063417,0.612256313003816,0.6232854606023108,0.1606935204646347,0.5870090038151544,0.5678276314002891,0.6901292831393224,0.5862210245976193,0.5287770677337268,0.6657846719868676,0.06731954683157304,0.9311039931987074,0.4061311977660037,0.5556876446539281,0.32973435185428535,0.5059553617796979,0.5192796025858175,0.5448146965518296,0.6674329922381885,0.6609429386916951,0.3240300019564968,0.963954250406451,0.10418559259314586,0.8697263109553974,0.35877811382689984,0.8502698587533503,0.6725662635323602,0.7161501563255085,0.4128273943163705,0.341150911787205,0.8623856395933696,0.3709357655845523,0.2241584504811318,0.6285033243547938,0.4942255637873282,0.8897340639785875,0.5279701970647337,0.1754775634870822,0.20026228172026872,0.2665450021242075,0.1642325168501494,0.20081589899047303,0.876962237130209,0.9348257608673683,0.06893109264279618,0.33008917515677627,0.5756569452607203,0.7042394567749064,0.7342605625631456,0.09953855202097128,0.6567318363346261,0.8749356273141702,0.3458011905116736,0.8721676821026056,0.3221725518605264,0.94005128583462,0.9391330738162509,0.693840170134116,0.37589931592713344,0.5242807050014227,0.5186299368104991,0.2762058274484501,0.279823086811789,0.5370119395645065,0.8776256052689061,0.5845359227943046,0.5960744868399258,0.9203016604736092,0.6675257884859118,0.24355006342667063,0.5453915034973792,0.06782701587864026,0.5975720941887869,0.7179522918716448,0.5508802478173771,0.713491056666676,0.6278313793475835,0.11766048673678153,0.6960548505034667,0.23795105029268393,0.07444313819682535,0.9975010783564612,0.18548943069155133,0.6514639072840673,0.010051984868411301,0.16033949367748068,0.9209623920231823,0.2205814620994353,0.9061157128889027,0.3013540780902093,0.7341869785373285,0.8871191117667733,0.19510669435894168,0.33977162215463386,0.5422173835069741,0.07872608035651896,0.889736714195453,0.21212225992006772,0.14779010362461664,0.155298679183424,0.05074646613992251,0.8287183763191333,0.72542257319222,0.7508423258917934]}},"id":"adf2cd5f-5fa2-4395-b67a-8bc7f7da08c7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"adf2cd5f-5fa2-4395-b67a-8bc7f7da08c7","type":"ColumnDataSource"},"glyph":{"id":"4ac35eba-36c6-4dd8-b175-a9e91973ed98","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f551956-c1ae-49dc-9ab9-da49a8a8363f","type":"Circle"},"selection_glyph":null,"view":{"id":"b5cf2652-a79e-49f9-8777-3149889b19a0","type":"CDSView"}},"id":"eb411cf8-5ee8-4253-b264-5078a19c2f0d","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"20f0362e-837d-4932-afcb-62f8bdbca737","type":"Line"},{"attributes":{},"id":"0045f6c3-41fc-4db9-b9af-1fe2d481939b","type":"LinearScale"},{"attributes":{"args":{"s2":{"id":"f484dc4c-188c-441d-9407-9eb85be81582","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected[&#x27;1d&#x27;].indices;\\n        var d = cb_obj.data;\\n        var ym = 0\\n\\n        if (inds.length == 0) { return; }\\n\\n        for (i = 0; i &lt; d[&#x27;color&#x27;].length; i++) {\\n            d[&#x27;color&#x27;][i] = \\"navy\\"\\n        }\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d[&#x27;color&#x27;][inds[i]] = \\"firebrick\\"\\n            ym += d[&#x27;y&#x27;][inds[i]]\\n        }\\n\\n        ym /= inds.length\\n        s2.data[&#x27;ym&#x27;] = [ym, ym]\\n\\n        cb_obj.change.emit();\\n        s2.change.emit();\\n    "},"id":"75909e0d-4063-4c41-8357-91bb95356bfc","type":"CustomJS"},{"attributes":{"formatter":{"id":"8119c10c-04c1-4291-acdc-49efb9ec5384","type":"BasicTickFormatter"},"plot":{"id":"cdc0091a-22e2-48c8-ab92-e6770be78ec1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8f365eb-005d-4ac2-907c-93d0e8d05878","type":"BasicTicker"}},"id":"11920f49-409a-482a-b827-8deba4c03957","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"33d3a813-1234-48b1-9205-b939896902ab","type":"PolyAnnotation"}},"id":"43ecc976-f2ce-41a5-a3a7-28ad17346baa","type":"LassoSelectTool"},{"attributes":{"plot":{"id":"cdc0091a-22e2-48c8-ab92-e6770be78ec1","subtype":"Figure","type":"Plot"},"ticker":{"id":"177d0fa4-8d11-400d-ad70-983615af96ca","type":"BasicTicker"}},"id":"75377c78-603d-4b9f-b4cd-e6fe89dab4f1","type":"Grid"},{"attributes":{},"id":"177d0fa4-8d11-400d-ad70-983615af96ca","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f484dc4c-188c-441d-9407-9eb85be81582","type":"ColumnDataSource"},"glyph":{"id":"b61ec6d9-5be1-4f44-ab16-27c611b552e7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20f0362e-837d-4932-afcb-62f8bdbca737","type":"Line"},"selection_glyph":null,"view":{"id":"d5d38e3b-1243-45b4-a1af-5546dc7ecf8d","type":"CDSView"}},"id":"ab151888-7654-4896-94e8-82692bee1ec7","type":"GlyphRenderer"},{"attributes":{},"id":"6ff20b28-81ff-4177-9559-6e4272c71909","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f551956-c1ae-49dc-9ab9-da49a8a8363f","type":"Circle"},{"attributes":{"source":{"id":"f484dc4c-188c-441d-9407-9eb85be81582","type":"ColumnDataSource"}},"id":"d5d38e3b-1243-45b4-a1af-5546dc7ecf8d","type":"CDSView"},{"attributes":{},"id":"8119c10c-04c1-4291-acdc-49efb9ec5384","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b10657c2-3015-4c42-9fe0-4f03a6ece1f0","type":"BasicTickFormatter"},"plot":{"id":"cdc0091a-22e2-48c8-ab92-e6770be78ec1","subtype":"Figure","type":"Plot"},"ticker":{"id":"177d0fa4-8d11-400d-ad70-983615af96ca","type":"BasicTicker"}},"id":"411e9221-62a8-408f-9f9a-50b59087b799","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"43ecc976-f2ce-41a5-a3a7-28ad17346baa","type":"LassoSelectTool"}]},"id":"79fdbb4f-216d-430e-a407-f3adcb9bb836","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","ym"],"data":{"x":[0,1],"ym":[0.5,0.5]}},"id":"f484dc4c-188c-441d-9407-9eb85be81582","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"24050b83-dd2e-4865-8554-67406523eca3","type":"DataRange1d"},{"attributes":{},"id":"f8f365eb-005d-4ac2-907c-93d0e8d05878","type":"BasicTicker"}],"root_ids":["cdc0091a-22e2-48c8-ab92-e6770be78ec1"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"1b86fc89-a0ff-4b82-8ac8-456c00e3cf62","elementid":"a1fe556e-4762-4699-a21e-a43b79fea817","modelid":"cdc0091a-22e2-48c8-ab92-e6770be78ec1"}];
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