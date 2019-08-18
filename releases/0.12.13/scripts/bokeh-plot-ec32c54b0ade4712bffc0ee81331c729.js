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
      };var element = document.getElementById("d0c7f945-836e-49d6-b855-81312981318d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd0c7f945-836e-49d6-b855-81312981318d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"daf63c49-0508-4730-b766-55de23a85967":{"roots":{"references":[{"attributes":{},"id":"d3b0a22d-b4f4-4872-94cb-6db5538e42a9","type":"LinearScale"},{"attributes":{"children":[{"id":"89347aeb-cefc-412f-9104-a9c8d2e674ba","type":"Row"},{"id":"3dba10b1-830c-4ead-8eef-236cd9c4cfe4","type":"Row"}]},"id":"58f205ce-dfb1-4b85-b6f8-a3097b0173a7","type":"Column"},{"attributes":{"formatter":{"id":"af8829f6-3b77-412c-8fa2-0c89338c5f62","type":"BasicTickFormatter"},"plot":{"id":"96d9f473-6476-4fa0-8969-887218ac695c","subtype":"Figure","type":"Plot"},"ticker":{"id":"979b194e-8979-47ea-8527-806fc0b32a2e","type":"BasicTicker"}},"id":"0f60eee1-d863-4bf5-a55f-a46a7f2c0958","type":"LinearAxis"},{"attributes":{},"id":"0d8d5651-e902-4f49-84e5-1a30c9749e6c","type":"LinearScale"},{"attributes":{"callback":null},"id":"8b7f2443-e5f3-457b-b8ae-4797ca6e1a60","type":"DataRange1d"},{"attributes":{"plot":{"id":"5f61b9d7-bdbe-4cd6-9903-c98713caed62","subtype":"Figure","type":"Plot"},"ticker":{"id":"61eb2238-f637-4a49-9a66-f8e2a5d3ba5c","type":"BasicTicker"}},"id":"4e8644a2-e765-4ba1-86c6-44f8837e39d6","type":"Grid"},{"attributes":{},"id":"eb2c4c28-4d91-410d-9a13-6f1329f5b2a8","type":"BasicTicker"},{"attributes":{},"id":"01ac7b6a-c554-4f4a-9116-1fe73355f81a","type":"BasicTickFormatter"},{"attributes":{},"id":"55a76e42-8a2d-4f0b-abfc-534fec9da168","type":"ResetTool"},{"attributes":{"callback":null},"id":"e83eb7d9-9e84-4b34-816d-274732099fdf","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"444d56fe-f7de-4b34-b702-92cc68c1ed70","type":"Square"},{"attributes":{"children":[{"id":"a9c8147a-d19a-4632-acf7-64cc4098f616","type":"Spacer"},{"id":"5f61b9d7-bdbe-4cd6-9903-c98713caed62","subtype":"Figure","type":"Plot"}]},"id":"3dba10b1-830c-4ead-8eef-236cd9c4cfe4","type":"Row"},{"attributes":{"below":[{"id":"f1b3649c-a139-4de6-a459-98d586470120","type":"LinearAxis"}],"left":[{"id":"9bf2513d-dad7-4c18-a736-e0b9ec887c40","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f1b3649c-a139-4de6-a459-98d586470120","type":"LinearAxis"},{"id":"4e8644a2-e765-4ba1-86c6-44f8837e39d6","type":"Grid"},{"id":"9bf2513d-dad7-4c18-a736-e0b9ec887c40","type":"LinearAxis"},{"id":"b9233148-f9f8-4950-b309-848f84a8e021","type":"Grid"},{"id":"b0089897-7975-4efc-a209-766c3f21ad11","type":"BoxAnnotation"},{"id":"c95671cd-eefa-447b-bd52-94ec9d8c39e0","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d93d51d4-5c89-4c84-9b1e-0b5b828bbfad","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e83eb7d9-9e84-4b34-816d-274732099fdf","type":"DataRange1d"},"x_scale":{"id":"d3b0a22d-b4f4-4872-94cb-6db5538e42a9","type":"LinearScale"},"y_range":{"id":"8b7f2443-e5f3-457b-b8ae-4797ca6e1a60","type":"DataRange1d"},"y_scale":{"id":"0d8d5651-e902-4f49-84e5-1a30c9749e6c","type":"LinearScale"}},"id":"5f61b9d7-bdbe-4cd6-9903-c98713caed62","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"51fcff57-eb88-4fe1-8477-9172da50f3a6","type":"PanTool"},{"id":"c9c52560-a736-4112-8a7a-0ba313752342","type":"WheelZoomTool"},{"id":"16f2db6d-b234-49de-a558-08cacceadb86","type":"BoxZoomTool"},{"id":"aa3007c3-4808-49d6-a3a7-38cadd37bcbc","type":"SaveTool"},{"id":"957ea052-dc3e-43f7-8f63-757aefac405c","type":"ResetTool"},{"id":"ea392703-262e-46b3-96df-610c8abedd51","type":"HelpTool"}]},"id":"d93d51d4-5c89-4c84-9b1e-0b5b828bbfad","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e775766a-a915-4675-99e4-39b05b91cf8c","type":"PanTool"},{"id":"8dc1d8f7-0d44-4a5d-9c1b-988323ee1ffd","type":"WheelZoomTool"},{"id":"197fc4d7-4526-4e13-8831-03dcb399c7c4","type":"BoxZoomTool"},{"id":"2c6d0678-6b75-479f-b255-4bff728b0ba5","type":"SaveTool"},{"id":"55a76e42-8a2d-4f0b-abfc-534fec9da168","type":"ResetTool"},{"id":"abe3fff6-769f-42b8-86ba-ef6a495d14fd","type":"HelpTool"}]},"id":"9b85411b-8762-43f0-aed9-70f52e56166e","type":"Toolbar"},{"attributes":{"source":{"id":"75b3a9c1-97e6-4b67-8432-eff20afec62f","type":"ColumnDataSource"}},"id":"5ed2e9d6-9d9e-4fc4-9ddc-c350dd426e16","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1aefa82-bef0-45d0-bbae-f636d36e7107","type":"Circle"},{"attributes":{"formatter":{"id":"66aaa3ba-8a22-465c-8b30-cfbe6bed2c54","type":"BasicTickFormatter"},"plot":{"id":"96d9f473-6476-4fa0-8969-887218ac695c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2caadb46-69c3-43ce-b647-e7f93b1726b8","type":"BasicTicker"}},"id":"7366b81c-d8c7-4825-a5ea-86201142804a","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b3ddf53e-f415-43d0-9a3d-23df18960abb","type":"BasicTickFormatter"},"plot":{"id":"5f61b9d7-bdbe-4cd6-9903-c98713caed62","subtype":"Figure","type":"Plot"},"ticker":{"id":"61eb2238-f637-4a49-9a66-f8e2a5d3ba5c","type":"BasicTicker"}},"id":"f1b3649c-a139-4de6-a459-98d586470120","type":"LinearAxis"},{"attributes":{},"id":"66aaa3ba-8a22-465c-8b30-cfbe6bed2c54","type":"BasicTickFormatter"},{"attributes":{},"id":"58ea91f5-5fce-463c-b184-6101ba22e660","type":"HelpTool"},{"attributes":{},"id":"61eb2238-f637-4a49-9a66-f8e2a5d3ba5c","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7ce845b3-3262-4b69-95dd-547c89ba7ece","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a968ef4c-4c98-41da-83f9-e5ab30543932","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb2c4c28-4d91-410d-9a13-6f1329f5b2a8","type":"BasicTicker"}},"id":"38d58996-62e6-4f13-86c5-af5e43e0e9c5","type":"Grid"},{"attributes":{},"id":"aa3007c3-4808-49d6-a3a7-38cadd37bcbc","type":"SaveTool"},{"attributes":{},"id":"2158e8a2-cc66-4de7-937d-c480c8949938","type":"LinearScale"},{"attributes":{"data_source":{"id":"87736570-7958-4290-9272-113ef2753464","type":"ColumnDataSource"},"glyph":{"id":"99a42efc-c880-44e2-ae75-8eae56e9ac96","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a1aefa82-bef0-45d0-bbae-f636d36e7107","type":"Circle"},"selection_glyph":null,"view":{"id":"aa1670ac-7e1f-4b1f-a63c-465be7e044e2","type":"CDSView"}},"id":"97e6f51f-06f6-4324-bc33-2d998cf93748","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"99a42efc-c880-44e2-ae75-8eae56e9ac96","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f73d469-0a7b-4520-9702-31f3eed4f305","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"a968ef4c-4c98-41da-83f9-e5ab30543932","subtype":"Figure","type":"Plot"},"ticker":{"id":"d00c0c31-f86e-40ef-9b2d-0970910300c4","type":"BasicTicker"}},"id":"429fc009-89e9-483c-8619-291258f4c7b0","type":"Grid"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ef5aef9-4529-45e7-b07e-b6b5f569808b","type":"Triangle"},{"attributes":{"below":[{"id":"7366b81c-d8c7-4825-a5ea-86201142804a","type":"LinearAxis"}],"left":[{"id":"0f60eee1-d863-4bf5-a55f-a46a7f2c0958","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7366b81c-d8c7-4825-a5ea-86201142804a","type":"LinearAxis"},{"id":"ce3640f8-ad95-4af6-a1c1-7bb40d2879ab","type":"Grid"},{"id":"0f60eee1-d863-4bf5-a55f-a46a7f2c0958","type":"LinearAxis"},{"id":"57ce8713-49af-4b24-b373-8bbff8412cd3","type":"Grid"},{"id":"7ce845b3-3262-4b69-95dd-547c89ba7ece","type":"BoxAnnotation"},{"id":"b6a305e3-f022-47ff-b5da-cb9225e8a413","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9b85411b-8762-43f0-aed9-70f52e56166e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f928a756-6fac-4438-828b-01257144d93b","type":"DataRange1d"},"x_scale":{"id":"5494ac77-0674-44ec-986f-29ba4c8ff890","type":"LinearScale"},"y_range":{"id":"e71c58b3-5920-4dc8-b3e0-0182166302bc","type":"DataRange1d"},"y_scale":{"id":"2158e8a2-cc66-4de7-937d-c480c8949938","type":"LinearScale"}},"id":"96d9f473-6476-4fa0-8969-887218ac695c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"84c2632a-4762-40cb-af97-50afda9ab77a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"01ac7b6a-c554-4f4a-9116-1fe73355f81a","type":"BasicTickFormatter"},"plot":{"id":"a968ef4c-4c98-41da-83f9-e5ab30543932","subtype":"Figure","type":"Plot"},"ticker":{"id":"d00c0c31-f86e-40ef-9b2d-0970910300c4","type":"BasicTicker"}},"id":"6029ee53-d3b8-4865-9d86-78a78add974d","type":"LinearAxis"},{"attributes":{"plot":{"id":"96d9f473-6476-4fa0-8969-887218ac695c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2caadb46-69c3-43ce-b647-e7f93b1726b8","type":"BasicTicker"}},"id":"ce3640f8-ad95-4af6-a1c1-7bb40d2879ab","type":"Grid"},{"attributes":{},"id":"87a474a7-b170-438f-8cf7-db1097af15c9","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"84c2632a-4762-40cb-af97-50afda9ab77a","type":"BasicTickFormatter"},"plot":{"id":"a968ef4c-4c98-41da-83f9-e5ab30543932","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb2c4c28-4d91-410d-9a13-6f1329f5b2a8","type":"BasicTicker"}},"id":"5a621e69-0748-4a18-bab9-36601a779095","type":"LinearAxis"},{"attributes":{},"id":"b3ddf53e-f415-43d0-9a3d-23df18960abb","type":"BasicTickFormatter"},{"attributes":{},"id":"957ea052-dc3e-43f7-8f63-757aefac405c","type":"ResetTool"},{"attributes":{},"id":"d00c0c31-f86e-40ef-9b2d-0970910300c4","type":"BasicTicker"},{"attributes":{},"id":"9c409db0-81a3-4372-b6bb-934d5e285db1","type":"ResetTool"},{"attributes":{},"id":"ea392703-262e-46b3-96df-610c8abedd51","type":"HelpTool"},{"attributes":{},"id":"51fcff57-eb88-4fe1-8477-9172da50f3a6","type":"PanTool"},{"attributes":{"height":250,"width":250},"id":"a9c8147a-d19a-4632-acf7-64cc4098f616","type":"Spacer"},{"attributes":{},"id":"af8829f6-3b77-412c-8fa2-0c89338c5f62","type":"BasicTickFormatter"},{"attributes":{},"id":"c9c52560-a736-4112-8a7a-0ba313752342","type":"WheelZoomTool"},{"attributes":{"source":{"id":"87736570-7958-4290-9272-113ef2753464","type":"ColumnDataSource"}},"id":"aa1670ac-7e1f-4b1f-a63c-465be7e044e2","type":"CDSView"},{"attributes":{"data_source":{"id":"75b3a9c1-97e6-4b67-8432-eff20afec62f","type":"ColumnDataSource"},"glyph":{"id":"444d56fe-f7de-4b34-b702-92cc68c1ed70","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"70e96f82-c05e-4c5e-a29d-8c47daa78dac","type":"Square"},"selection_glyph":null,"view":{"id":"5ed2e9d6-9d9e-4fc4-9ddc-c350dd426e16","type":"CDSView"}},"id":"c95671cd-eefa-447b-bd52-94ec9d8c39e0","type":"GlyphRenderer"},{"attributes":{},"id":"4fa76fbe-3e3d-41f3-8462-f1d85373a83d","type":"WheelZoomTool"},{"attributes":{"tools":[{"id":"b4d7254e-f953-4d5b-ac8c-9c592644c8ca","type":"PanTool"},{"id":"4fa76fbe-3e3d-41f3-8462-f1d85373a83d","type":"WheelZoomTool"},{"id":"3208521c-0a55-4486-953b-ef964f5f7053","type":"BoxZoomTool"},{"id":"6e8f74f0-c91a-4655-aca1-cced98b903c5","type":"SaveTool"},{"id":"9c409db0-81a3-4372-b6bb-934d5e285db1","type":"ResetTool"},{"id":"58ea91f5-5fce-463c-b184-6101ba22e660","type":"HelpTool"},{"id":"e775766a-a915-4675-99e4-39b05b91cf8c","type":"PanTool"},{"id":"8dc1d8f7-0d44-4a5d-9c1b-988323ee1ffd","type":"WheelZoomTool"},{"id":"197fc4d7-4526-4e13-8831-03dcb399c7c4","type":"BoxZoomTool"},{"id":"2c6d0678-6b75-479f-b255-4bff728b0ba5","type":"SaveTool"},{"id":"55a76e42-8a2d-4f0b-abfc-534fec9da168","type":"ResetTool"},{"id":"abe3fff6-769f-42b8-86ba-ef6a495d14fd","type":"HelpTool"},{"id":"51fcff57-eb88-4fe1-8477-9172da50f3a6","type":"PanTool"},{"id":"c9c52560-a736-4112-8a7a-0ba313752342","type":"WheelZoomTool"},{"id":"16f2db6d-b234-49de-a558-08cacceadb86","type":"BoxZoomTool"},{"id":"aa3007c3-4808-49d6-a3a7-38cadd37bcbc","type":"SaveTool"},{"id":"957ea052-dc3e-43f7-8f63-757aefac405c","type":"ResetTool"},{"id":"ea392703-262e-46b3-96df-610c8abedd51","type":"HelpTool"}]},"id":"94943248-5aec-49ad-862b-2e6f6b2ebb22","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"cd41e63b-327e-4b4a-8be8-95246a63d6fa","type":"BoxAnnotation"}},"id":"3208521c-0a55-4486-953b-ef964f5f7053","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"b0089897-7975-4efc-a209-766c3f21ad11","type":"BoxAnnotation"}},"id":"16f2db6d-b234-49de-a558-08cacceadb86","type":"BoxZoomTool"},{"attributes":{},"id":"8d686cb8-3b09-4f64-a7bf-20dac31d44ed","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"96d9f473-6476-4fa0-8969-887218ac695c","subtype":"Figure","type":"Plot"},"ticker":{"id":"979b194e-8979-47ea-8527-806fc0b32a2e","type":"BasicTicker"}},"id":"57ce8713-49af-4b24-b373-8bbff8412cd3","type":"Grid"},{"attributes":{"below":[{"id":"5a621e69-0748-4a18-bab9-36601a779095","type":"LinearAxis"}],"left":[{"id":"6029ee53-d3b8-4865-9d86-78a78add974d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"5a621e69-0748-4a18-bab9-36601a779095","type":"LinearAxis"},{"id":"38d58996-62e6-4f13-86c5-af5e43e0e9c5","type":"Grid"},{"id":"6029ee53-d3b8-4865-9d86-78a78add974d","type":"LinearAxis"},{"id":"429fc009-89e9-483c-8619-291258f4c7b0","type":"Grid"},{"id":"cd41e63b-327e-4b4a-8be8-95246a63d6fa","type":"BoxAnnotation"},{"id":"97e6f51f-06f6-4324-bc33-2d998cf93748","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"e9a5c9c2-2aa1-4b91-a349-88557589ee04","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"43dbfc52-c044-477d-98d3-2a91318b232d","type":"DataRange1d"},"x_scale":{"id":"8d686cb8-3b09-4f64-a7bf-20dac31d44ed","type":"LinearScale"},"y_range":{"id":"da598ee4-566a-4454-a8a5-f297c9b38750","type":"DataRange1d"},"y_scale":{"id":"b1722f73-77ef-4679-8ee1-10dcd813e875","type":"LinearScale"}},"id":"a968ef4c-4c98-41da-83f9-e5ab30543932","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5494ac77-0674-44ec-986f-29ba4c8ff890","type":"LinearScale"},{"attributes":{},"id":"abe3fff6-769f-42b8-86ba-ef6a495d14fd","type":"HelpTool"},{"attributes":{},"id":"b4d7254e-f953-4d5b-ac8c-9c592644c8ca","type":"PanTool"},{"attributes":{},"id":"6e8f74f0-c91a-4655-aca1-cced98b903c5","type":"SaveTool"},{"attributes":{},"id":"2caadb46-69c3-43ce-b647-e7f93b1726b8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"99fd03ae-2d6b-4848-8c56-fc873933e21b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"99fd03ae-2d6b-4848-8c56-fc873933e21b","type":"ColumnDataSource"},"glyph":{"id":"2ef5aef9-4529-45e7-b07e-b6b5f569808b","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f73d469-0a7b-4520-9702-31f3eed4f305","type":"Triangle"},"selection_glyph":null,"view":{"id":"2b150120-2f6a-4088-830f-49ad36e369e5","type":"CDSView"}},"id":"b6a305e3-f022-47ff-b5da-cb9225e8a413","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"75b3a9c1-97e6-4b67-8432-eff20afec62f","type":"ColumnDataSource"},{"attributes":{},"id":"2c6d0678-6b75-479f-b255-4bff728b0ba5","type":"SaveTool"},{"attributes":{"children":[{"id":"a968ef4c-4c98-41da-83f9-e5ab30543932","subtype":"Figure","type":"Plot"},{"id":"96d9f473-6476-4fa0-8969-887218ac695c","subtype":"Figure","type":"Plot"}]},"id":"89347aeb-cefc-412f-9104-a9c8d2e674ba","type":"Row"},{"attributes":{"toolbar":{"id":"94943248-5aec-49ad-862b-2e6f6b2ebb22","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"65d7ae02-c2d5-4dfa-959e-583d92ad149a","type":"ToolbarBox"},{"attributes":{},"id":"8dc1d8f7-0d44-4a5d-9c1b-988323ee1ffd","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"da598ee4-566a-4454-a8a5-f297c9b38750","type":"DataRange1d"},{"attributes":{},"id":"d8842062-c517-4449-ac73-3ae182d3a5d6","type":"BasicTicker"},{"attributes":{"callback":null},"id":"43dbfc52-c044-477d-98d3-2a91318b232d","type":"DataRange1d"},{"attributes":{"overlay":{"id":"7ce845b3-3262-4b69-95dd-547c89ba7ece","type":"BoxAnnotation"}},"id":"197fc4d7-4526-4e13-8831-03dcb399c7c4","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"e71c58b3-5920-4dc8-b3e0-0182166302bc","type":"DataRange1d"},{"attributes":{"children":[{"id":"65d7ae02-c2d5-4dfa-959e-583d92ad149a","type":"ToolbarBox"},{"id":"58f205ce-dfb1-4b85-b6f8-a3097b0173a7","type":"Column"}]},"id":"51c9f178-6d3f-4ebe-9816-5efc11191d0f","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"5f61b9d7-bdbe-4cd6-9903-c98713caed62","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8842062-c517-4449-ac73-3ae182d3a5d6","type":"BasicTicker"}},"id":"b9233148-f9f8-4950-b309-848f84a8e021","type":"Grid"},{"attributes":{"source":{"id":"99fd03ae-2d6b-4848-8c56-fc873933e21b","type":"ColumnDataSource"}},"id":"2b150120-2f6a-4088-830f-49ad36e369e5","type":"CDSView"},{"attributes":{"formatter":{"id":"87a474a7-b170-438f-8cf7-db1097af15c9","type":"BasicTickFormatter"},"plot":{"id":"5f61b9d7-bdbe-4cd6-9903-c98713caed62","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8842062-c517-4449-ac73-3ae182d3a5d6","type":"BasicTicker"}},"id":"9bf2513d-dad7-4c18-a736-e0b9ec887c40","type":"LinearAxis"},{"attributes":{"callback":null},"id":"f928a756-6fac-4438-828b-01257144d93b","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"70e96f82-c05e-4c5e-a29d-8c47daa78dac","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b4d7254e-f953-4d5b-ac8c-9c592644c8ca","type":"PanTool"},{"id":"4fa76fbe-3e3d-41f3-8462-f1d85373a83d","type":"WheelZoomTool"},{"id":"3208521c-0a55-4486-953b-ef964f5f7053","type":"BoxZoomTool"},{"id":"6e8f74f0-c91a-4655-aca1-cced98b903c5","type":"SaveTool"},{"id":"9c409db0-81a3-4372-b6bb-934d5e285db1","type":"ResetTool"},{"id":"58ea91f5-5fce-463c-b184-6101ba22e660","type":"HelpTool"}]},"id":"e9a5c9c2-2aa1-4b91-a349-88557589ee04","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"87736570-7958-4290-9272-113ef2753464","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b0089897-7975-4efc-a209-766c3f21ad11","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cd41e63b-327e-4b4a-8be8-95246a63d6fa","type":"BoxAnnotation"},{"attributes":{},"id":"e775766a-a915-4675-99e4-39b05b91cf8c","type":"PanTool"},{"attributes":{},"id":"b1722f73-77ef-4679-8ee1-10dcd813e875","type":"LinearScale"},{"attributes":{},"id":"979b194e-8979-47ea-8527-806fc0b32a2e","type":"BasicTicker"}],"root_ids":["51c9f178-6d3f-4ebe-9816-5efc11191d0f"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"daf63c49-0508-4730-b766-55de23a85967","elementid":"d0c7f945-836e-49d6-b855-81312981318d","modelid":"51c9f178-6d3f-4ebe-9816-5efc11191d0f"}];
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