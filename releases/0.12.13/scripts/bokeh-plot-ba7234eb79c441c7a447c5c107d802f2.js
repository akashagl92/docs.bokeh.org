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
      };var element = document.getElementById("c54360a9-f7d5-48c7-a44c-80eb8fb0308c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c54360a9-f7d5-48c7-a44c-80eb8fb0308c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2939f753-4b5f-4ee1-86c9-c83067d93651":{"roots":{"references":[{"attributes":{"plot":null,"text":"Select Here"},"id":"920dd215-f55d-4f0f-b4b0-f01a8a4999d7","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7ecf0b6-d8f9-4f5f-8b99-1028d2a9a323","type":"Circle"},{"attributes":{},"id":"12207dc6-9f11-4299-9354-16ad25fd4faf","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"53c81cd3-9831-4651-8bb0-f88a79b15bc8","type":"Circle"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"f93c7fc2-a337-4ead-86e8-d66e9be943f6","type":"Title"},{"attributes":{},"id":"231bf069-a16f-458c-96ed-e93fe2179630","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5286bde1-b8c1-4ff4-9eee-6e59886e1f21","type":"Circle"},{"attributes":{"formatter":{"id":"c4d8d056-b52f-4b39-a4d5-c88b064c81b7","type":"BasicTickFormatter"},"plot":{"id":"cdfa3512-62df-4e2c-858d-6db1ca762995","subtype":"Figure","type":"Plot"},"ticker":{"id":"d06a7f35-78c9-4d46-aa85-7c810c2c42be","type":"BasicTicker"}},"id":"ee1a3e7a-cff9-4a24-b593-997b67b458ef","type":"LinearAxis"},{"attributes":{"below":[{"id":"ee1a3e7a-cff9-4a24-b593-997b67b458ef","type":"LinearAxis"}],"left":[{"id":"9a3f615e-afd7-45c3-9582-5ba951708dea","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ee1a3e7a-cff9-4a24-b593-997b67b458ef","type":"LinearAxis"},{"id":"00c6bfa4-a356-4196-b6f6-18f305decec9","type":"Grid"},{"id":"9a3f615e-afd7-45c3-9582-5ba951708dea","type":"LinearAxis"},{"id":"5e968b25-c83d-45a9-a652-e04f4e62085c","type":"Grid"},{"id":"ca6602eb-2740-4e10-b96e-a9160776c3d6","type":"GlyphRenderer"}],"title":{"id":"f93c7fc2-a337-4ead-86e8-d66e9be943f6","type":"Title"},"toolbar":{"id":"9c008802-4382-4eb4-a874-7178d5c846df","type":"Toolbar"},"x_range":{"id":"59fa56bd-cc11-44c8-9cf1-2fbaae6157bd","type":"Range1d"},"x_scale":{"id":"65119ec7-2716-4031-9021-9a4e1cf5e7cd","type":"LinearScale"},"y_range":{"id":"1c024ec1-0e3a-43e6-8b4d-e4eac28e05fd","type":"Range1d"},"y_scale":{"id":"12207dc6-9f11-4299-9354-16ad25fd4faf","type":"LinearScale"}},"id":"cdfa3512-62df-4e2c-858d-6db1ca762995","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"d62f4299-728a-4d79-a107-ae3a91eb7e53","type":"PolyAnnotation"}},"id":"f2328f57-556a-414b-8c4c-cd7fe7fd1c2b","type":"LassoSelectTool"},{"attributes":{},"id":"d06a7f35-78c9-4d46-aa85-7c810c2c42be","type":"BasicTicker"},{"attributes":{"data_source":{"id":"97147052-248e-47e1-b38f-7330a97d4892","type":"ColumnDataSource"},"glyph":{"id":"abad88c3-7c75-49da-a2ae-a1e99c0d1778","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7ecf0b6-d8f9-4f5f-8b99-1028d2a9a323","type":"Circle"},"selection_glyph":null,"view":{"id":"33feb527-f429-4815-be58-14d7960d92d0","type":"CDSView"}},"id":"9072a349-592f-4d44-b7b9-72dc51785bc6","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"8b77ee20-34b4-49ec-858d-8f2224dbffc7","subtype":"Figure","type":"Plot"},{"id":"cdfa3512-62df-4e2c-858d-6db1ca762995","subtype":"Figure","type":"Plot"}]},"id":"f688939d-3438-4b43-9139-643c4700f449","type":"Row"},{"attributes":{"args":{"s2":{"id":"e670e657-5f65-4ca4-b413-e7c4e46e2893","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected[&#x27;1d&#x27;].indices;\\n        var d1 = cb_obj.data;\\n        var d2 = s2.data;\\n        d2[&#x27;x&#x27;] = []\\n        d2[&#x27;y&#x27;] = []\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d2[&#x27;x&#x27;].push(d1[&#x27;x&#x27;][inds[i]])\\n            d2[&#x27;y&#x27;].push(d1[&#x27;y&#x27;][inds[i]])\\n        }\\n        s2.change.emit();\\n    "},"id":"ad9eebaf-9e96-4fdf-8732-cf3efc04174c","type":"CustomJS"},{"attributes":{"plot":{"id":"cdfa3512-62df-4e2c-858d-6db1ca762995","subtype":"Figure","type":"Plot"},"ticker":{"id":"d06a7f35-78c9-4d46-aa85-7c810c2c42be","type":"BasicTicker"}},"id":"00c6bfa4-a356-4196-b6f6-18f305decec9","type":"Grid"},{"attributes":{"callback":null},"id":"d7089745-f5a1-4470-8e61-91dc7bab2afa","type":"DataRange1d"},{"attributes":{"plot":{"id":"8b77ee20-34b4-49ec-858d-8f2224dbffc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"fda69f76-de4c-42f4-ad29-516463617d62","type":"BasicTicker"}},"id":"afa6c2d4-ccfb-4d1c-8bdd-528020b6996d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"abad88c3-7c75-49da-a2ae-a1e99c0d1778","type":"Circle"},{"attributes":{},"id":"c4d8d056-b52f-4b39-a4d5-c88b064c81b7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32a918ea-2807-409f-b0a9-3c3c3648416c","type":"BasicTickFormatter"},"plot":{"id":"8b77ee20-34b4-49ec-858d-8f2224dbffc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3df444e-33b4-4261-a1f2-d5e34a2780b4","type":"BasicTicker"}},"id":"11a88d2a-9bb7-4e9e-9761-43daabb8e8b1","type":"LinearAxis"},{"attributes":{"below":[{"id":"099fd98d-3618-444b-9416-d30fbf17f2bf","type":"LinearAxis"}],"left":[{"id":"11a88d2a-9bb7-4e9e-9761-43daabb8e8b1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"099fd98d-3618-444b-9416-d30fbf17f2bf","type":"LinearAxis"},{"id":"afa6c2d4-ccfb-4d1c-8bdd-528020b6996d","type":"Grid"},{"id":"11a88d2a-9bb7-4e9e-9761-43daabb8e8b1","type":"LinearAxis"},{"id":"474b06ea-aa27-42d8-8780-a2c5d19dba27","type":"Grid"},{"id":"d62f4299-728a-4d79-a107-ae3a91eb7e53","type":"PolyAnnotation"},{"id":"9072a349-592f-4d44-b7b9-72dc51785bc6","type":"GlyphRenderer"}],"title":{"id":"920dd215-f55d-4f0f-b4b0-f01a8a4999d7","type":"Title"},"toolbar":{"id":"425ecf74-8e27-41a9-a6c1-9b2a534ae355","type":"Toolbar"},"x_range":{"id":"df03d2a1-2c76-403b-9902-37eaa38dba4b","type":"DataRange1d"},"x_scale":{"id":"365a14e8-cb12-4a54-92ce-4739f40b64f4","type":"LinearScale"},"y_range":{"id":"d7089745-f5a1-4470-8e61-91dc7bab2afa","type":"DataRange1d"},"y_scale":{"id":"665879a1-0ae4-4bd1-b3f2-8a51ba2e979b","type":"LinearScale"}},"id":"8b77ee20-34b4-49ec-858d-8f2224dbffc7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2b661ba1-bd85-4d8c-a9b6-1c6e51ee24b9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1c024ec1-0e3a-43e6-8b4d-e4eac28e05fd","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"8b77ee20-34b4-49ec-858d-8f2224dbffc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3df444e-33b4-4261-a1f2-d5e34a2780b4","type":"BasicTicker"}},"id":"474b06ea-aa27-42d8-8780-a2c5d19dba27","type":"Grid"},{"attributes":{},"id":"e3df444e-33b4-4261-a1f2-d5e34a2780b4","type":"BasicTicker"},{"attributes":{},"id":"365a14e8-cb12-4a54-92ce-4739f40b64f4","type":"LinearScale"},{"attributes":{},"id":"32a918ea-2807-409f-b0a9-3c3c3648416c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"59fa56bd-cc11-44c8-9cf1-2fbaae6157bd","type":"Range1d"},{"attributes":{"source":{"id":"e670e657-5f65-4ca4-b413-e7c4e46e2893","type":"ColumnDataSource"}},"id":"dd4ce529-fd72-41ec-978f-f34814a219d1","type":"CDSView"},{"attributes":{"callback":{"id":"ad9eebaf-9e96-4fdf-8732-cf3efc04174c","type":"CustomJS"},"column_names":["x","y"],"data":{"x":[0.91742450117811,0.37349357918609727,0.44236796510140886,0.6986453105924532,0.3787773496273912,0.798033466616644,0.326848385833569,0.1849972712454948,0.550430556514882,0.3512033220116736,0.1463975959214947,0.5381159912411391,0.14991537706994862,0.6256754839338777,0.9405759948874086,0.44070852890924306,0.920499439151661,0.496011557056413,0.6357598765763797,0.3872677803085919,0.9121197315008622,0.1404534320380877,0.28402359823078016,0.9119832438179626,0.7823911878444898,0.4440033348213407,0.49290463758029757,0.19501252477132536,0.5641829199890194,0.7964398351694321,0.1050316882366994,0.7999327339714263,0.4865679979064713,0.5349374653030727,0.8992971571995525,0.9134125703762227,0.7742609810101244,0.6760272134490592,0.9439559826134033,0.6196456048029811,0.7457665713674013,0.8523930598436994,0.6374857385962369,0.30952818666425164,0.4076751158067855,0.5105940990667394,0.3639742789705247,0.7049207416319613,0.43128786894776194,0.3890197391860445,0.0278293210771412,0.47473135143787626,0.7037504631299464,0.22382613074042412,0.762059265760288,0.3157297675269354,0.06034380645618542,0.39483472434012035,0.7897615078162649,0.1276940842045683,0.6074114963438895,0.7289768128840288,0.76290003332332,0.7657003726869583,0.8999537804431433,0.08588439529403635,0.8557589142930261,0.5449550801039504,0.9857344948288811,0.5521640231999032,0.9043974577118559,0.23051478280639304,0.05236001767533083,0.6061640244682185,0.30381073030341643,0.8393002553618893,0.1557180388248417,0.39208390627030476,0.8521529422301255,0.571024834132713,0.05264881799328125,0.27305607044469116,0.36714612262427215,0.015342575116497836,0.9274001520761482,0.19056023937147193,0.40421920872792594,0.03496102725259487,0.6148002770960084,0.6933002890403163,0.7445842478574,0.3725525966733322,0.14548581135245298,0.6434867934534089,0.18423518117062043,0.4000173314090699,0.42613412599474687,0.8067929535081612,0.573525908400387,0.6971871314017177,0.9183476968579041,0.6399927337316248,0.17019345236881434,0.6026008050352251,0.3003997297418458,0.1242746878992973,0.8643272534600389,0.235029971326717,0.8274185830526298,0.6785955062154871,0.020867777412800326,0.8472571679855663,0.2934114519198576,0.03581420542883185,0.9660482196174144,0.13441879674508683,0.5740214332740444,0.39057872741302724,0.8271869921178086,0.08636674235592967,0.39777324839658024,0.1650039169705413,0.8865561568424384,0.782110041627993,0.2880964676524551,0.19188318604979915,0.027082986550413413,0.36563015728350023,0.4846312334891779,0.07320668799507224,0.024004002965234417,0.5870612594401934,0.8520468063948805,0.26549500608824395,0.143106163873161,0.9505438158196207,0.3350138633801366,0.7258286953600787,0.778969439997622,0.9756133980791868,0.4035197633452329,0.4097288727909939,0.21785922274763514,0.32836047743975527,0.10108378564444598,0.8096966827145631,0.6104234399726098,0.4302031873780944,0.04785161547566774,0.8473847143320841,0.2717854582091046,0.3645223215698854,0.588179448966721,0.03327635793423167,0.8031704002637396,0.24096792112615195,0.6074492830677388,0.7771564920593448,0.5975827215912934,0.48516028772831454,0.09248009239884591,0.3501090194710603,0.6868763831215238,0.22064829533937336,0.5464147616526115,0.45617202123969314,0.5067869876801555,0.2190874907353788,0.6924275664410626,0.6952007118813258,0.7314542429900435,0.3757019025968613,0.5103570734816539,0.5165794522740165,0.9817231188476138,0.4572386633696659,0.3197185125459653,0.0514658296333067,0.2958797138634791,0.476501049777348,0.5058096463049393,0.4479438075159482,0.3360985655197718,0.6305975893828015,0.997310513542347,0.6106948109468,0.21691494495897734,0.7095049033431634,0.1821298219098203,0.29176512524010056,0.8775717619038453,0.871703418962067,0.30447415660620836,0.3464741967060152,0.9714605396035937,0.5813628231339428,0.3423954624577644,0.1852849005850986,0.23659169641548183,0.7020505059894742,0.007194701301620032,0.7523391962238468,0.7452367382824512,0.1355410253985101,0.6387473176420195,0.4683586832400879,0.22581628577705348,0.47455145047979663,0.8339397471598446,0.39281870705861943,0.7098116015345474,0.5417943661940516,0.4712026851308043,0.3391179802446401,0.6878489484067505,0.397861152439411,0.42278063654324627,0.2959750414134048,0.5086202591199727,0.08495075154201881,0.32207297594440876,0.2894443095654955,0.802019523603038,0.8528797374543943,0.3662149442387218,0.6947354105770749,0.2578120169969057,0.5373523813247694,0.8596665190814932,0.8133889614847576,0.056412069146041244,0.9612967888272644,0.7645492592311243,0.9321706685659622,0.04834703602030477,0.2868421432065317,0.907741088671235,0.354025633049312,0.10361819996133137,0.7486473007594193,0.4579166237832969,0.04202889806251431,0.3889838856339909,0.032238987673168906,0.4192181863716742,0.07198939831070028,0.8759055239818482,0.42550716351224604,0.5112143028573726,0.8073979497277954,0.04259280962883416,0.543330135590612,0.4547053757393691,0.0007484416109664327,0.24620571799349888,0.3664591463107152,0.02325799688559904,0.4653182863021359,0.08933616764343222,0.03198370747355639,0.48516360628409105,0.029790109436024115,0.5244002640132244,0.36899381394461195,0.13330961458551038,0.027275313392341127,0.6200074133087892,0.8797202743644872,0.09020405316565694,0.557260439258683,0.4451334925864251,0.37160667393493896,0.540011510436561,0.32534539040551447,0.030988216124219647,0.9591571818159912,0.4722796759215029,0.564159231592051,0.5065917319429512,0.4088498077639031,0.6923513323910014,0.339594548767413,0.20816088281468004,0.015342183287427313,0.13844739025943897,0.4070905398749627,0.72912602845528,0.8813833332927768,0.1978897959503254,0.6273124971594697,0.9335947015271167,0.23169540151257584,0.29633566567277403,0.0678537869334741,0.6021348413352501,0.4630024158725531,0.8084013582434932,0.25322789588967354,0.22591872538490654,0.06622025323162162,0.8319496338917899,0.9768658607768689,0.6949105240596616,0.465581316605308,0.8117047436302068,0.6129546907391633,0.4591637710127153,0.6092863069461759,0.5342551277696761,0.10053569818812602,0.6202105937043346,0.39743207166749195,0.6667131484880007,0.36319064095619424,0.7874019507894328,0.523507302970134,0.8094623786746769,0.22895998151232222,0.7090133840761511,0.10603310568420243,0.15497366572237836,0.3663989050202825,0.8458448952837689,0.23109883089433736,0.8587574915525094,0.5471769382143754,0.13641750118866114,0.05751015053072317,0.8047618053819046,0.7880785178280055,0.9440324391191846,0.7672308664540506,0.5569947821630197,0.7119291180164447,0.8756442002922658,0.598395106227041,0.46078952673952145,0.22030679331166458,0.2408500074659895,0.1840978660760355,0.37246299104388236,0.15537059363375305,0.5990192863571324,0.3213217140092206,0.2747132290249745,0.1681836566975775,0.7743873546929232,0.8120818527548412,0.2936477115001752,0.5413652657355711,0.604856061350049,0.18042954587949023,0.4669953051582426,0.7198812449170483,0.2904677055242719,0.5063852839565947,0.2648726658064279,0.4501516347313165,0.5548573450216706,0.870342760177681,0.5317382749766,0.914768388434058,0.5435828859848864,0.2909035650266193,0.02638744243613811,0.7749488804098188,0.45462631507873286,0.3816735241323669,0.5982150338808954,0.0563914289357762,0.9434863683176448,0.9122354402752992,0.8409492491939107,0.24739502301347205,0.7906544339488464,0.07232249212482234,0.3372256678848974,0.37719031349875354,0.013693662230021109,0.9340898279086746,0.13479877221085323,0.8444404451659955,0.2784117738212645,0.042726043678168346,0.02187223453262832,0.9491606789372609,0.9056912641730015,0.6064335411105433,0.5847852786557508,0.6900913733217483,0.7793581983795813,0.34711101619116425,0.6281884171888189,0.235690217101313,0.9393900908192439,0.848131951657904,0.7590257728728396,0.6532281991280319,0.312427978204444,0.4168495359475355,0.8188460298837693,0.056858470320984456,0.31648106460312764,0.587252078304334,0.19980518244235512,0.3409212636801513,0.4234099045271641,0.6893271243523846,0.7786994912859957,0.25279853891938175,0.31783011444852893,0.5110815913355086,0.12316024074439835,0.9468299058906157,0.7531803941017817,0.08432084579202748,0.3856753975695182,0.720541814023658,0.45615777691814186,0.2955486394550907,0.7455432052871432,0.3316324346553676,0.4720068437920032,0.7883963233954185,0.656793312921507,0.22375382204837357,0.00764705985623082,0.23856312954727643,0.8048743785556642,0.787239313318693,0.5537253848881307,0.39551128512015465,0.28942540006030315,0.37578835120622267,0.4362405741509058,0.17688586570772136,0.9091036528117997,0.11748022382290368,0.1276905300585942,0.7100601031123376,0.8202287133018494,0.42289059058302714,0.7208307250236524,0.8619009752130452,0.7854754782203938,0.939567548300322,0.30946324386812407,0.8148308072900652,0.30130514443149914,0.6633027429599374,0.34050532478463047,0.3736196394349377,0.18180830643169466,0.12410749895655682,0.40634306242096496,0.4797095240642142,0.5667742116223273,0.28275094358594044,0.7351808885049168,0.16524967230096255,0.022251477408495868,0.3591535381082914,0.7994183783916111,0.316727761251129,0.9026988404577841,0.9577700019993227,0.3135829033759999,0.6947189253761928,0.542518971155356,0.36728948038183773,0.1906989519849288,0.41783277764032156,0.8779284965145933,0.7597056542033933,0.3648758436053473,0.4016692643228633,0.18104331459031064,0.03326627650233516,0.5497426101333351,0.5034098496190464,0.02542470990954082,0.9719036591890946,0.5108632233135475,0.70268039305458,0.6285034298603128,0.7206855940058519,0.5070032825477087,0.9523178277300806,0.08981328815390321,0.14085025139474172,0.8448622225149778,0.027630366987814514,0.16024694682228358,0.3071861156671313,0.9465336783476879,0.8357097548962231,0.6631660367471913,0.4598779133734606,0.8339127836703737,0.09251687622412297],"y":[0.7211269938986344,0.002987524211969683,0.12699777714507632,0.06522787574162414,0.91512743556804,0.24780597768364643,0.5149993825411785,0.16338589237340062,0.3336202751325815,0.4296902089373622,0.869250900740793,0.8694871889941986,0.6255841519512965,0.7946410550663227,0.09789802131450631,0.9624535777600441,0.5839069376857444,0.507927953454433,0.4582892842575579,0.5349672483867933,0.1824861559092642,0.6168296682722815,0.9265994838597824,0.25819364018802815,0.7333928968626882,0.28497150108886193,0.010954275947915648,0.918884903064561,0.031694375713521405,0.5199864421318432,0.08219030991902476,0.5164280294232979,0.3408887755765656,0.23684783857617386,0.21440414394642204,0.28616668914006116,0.29385747732596645,0.8739619885851929,0.4364609048285305,0.7110307318015224,0.42195326448765114,0.018798578341757355,0.19139023268274302,0.243290621863679,0.7759234386465824,0.06238190491631812,0.8145475374835366,0.6300105339736849,0.10351269590532874,0.48270137524507495,0.43828498421369666,0.7846416734668152,0.7546334627297856,0.5035769618256859,0.8541053615190544,0.1633628688926586,0.922688897909773,0.06237004043573202,0.3587066809636482,0.022943003057706024,0.8821616580794678,0.9597208891808453,0.982290394032633,0.2108659086934649,0.9796767963142768,0.32628811116738754,0.8923296524190956,0.6078126995110424,0.8351887712466044,0.6806528944719988,0.7061272634621477,0.37771879704571754,0.984484800083239,0.7230930015380618,0.8209973131969445,0.9332949422362321,0.9852085005802392,0.9480164557462855,0.6794027832791649,0.9622978346512497,0.5339642937681233,0.5240429126326325,0.7983104727900822,0.024046541388094367,0.2468026792775755,0.34717359495432365,0.9975517956474329,0.5178368306528736,0.7432343619085656,0.8723607559513985,0.7086005049772276,0.38997678978162753,0.378646581226494,0.02966140665291772,0.31220275314486523,0.45227166425945753,0.21994847050554978,0.9014040380101994,0.6597852151901263,0.5249924057491053,0.19232803412621913,0.9744694368261914,0.8945785841702588,0.9882175089067977,0.39785187536122424,0.420479964155577,0.6162540157280179,0.23802124601322883,0.0916658975324377,0.08405734353496852,0.25969159361511485,0.2465196540241995,0.15268096257232278,0.7668688038292303,0.6392777294016019,0.928226266282991,0.8121050578307261,0.31791979494461076,0.33250458550986495,0.51460061561986,0.11124314376930189,0.39289803499923714,0.6737795622091369,0.11937234575940547,0.0018162449641112577,0.9855794301058601,0.1055014517816123,0.5346159950597117,0.9481750474092794,0.6452380837420769,0.6896455865080745,0.3888495072055751,0.10445169737004578,0.7701324768082587,0.26977886582668154,0.5955724641946643,0.36744640171864285,0.093473898380115,0.3548519175349033,0.9187696194254394,0.31487175994513195,0.42999374652688316,0.7507149831885095,0.12718891454301384,0.9411827082646659,0.5423778507872777,0.8237623864795869,0.03511001017068671,0.00669481175518527,0.03374256920806096,0.9670540392072099,0.4470464021238033,0.1700840618001912,0.8618969238308551,0.7769400430688086,0.753003116140445,0.06762744309856383,0.9715367308275283,0.008102140560657833,0.9091617619327901,0.6672403207748726,0.21493006744677234,0.7592473381832898,0.37590934462072545,0.348915080334662,0.0021412479975493337,0.42854696722233665,0.8145450374273316,0.09383561539882979,0.3058989389158143,0.8854216443002905,0.5617260278474678,0.15569148513333497,0.6727365653271217,0.5793187681836813,0.720620883195679,0.7062581058639142,0.37393313880034884,0.676777041568438,0.14481778298490933,0.07973093228568617,0.575058113213437,0.7473712987253993,0.7026002612043117,0.09005744600339216,0.5230190532563563,0.9520422413271021,0.0006121003635614075,0.7086790293983316,0.6893713881217431,0.643844298329673,0.6649326152998322,0.9284477265456318,0.48002334069343766,0.16350086576839407,0.5165825924298619,0.912188843222756,0.7679314963413686,0.37519475000990876,0.7565762766868381,0.9391974341608841,0.6807956022315548,0.3425364588905223,0.9841799345616989,0.6008202112668243,0.5325719667087263,0.19703772498593364,0.6738358981123356,0.970982842881152,0.679765130733467,0.5083521894595034,0.7697028800813892,0.7030808346970292,0.4103713700832826,0.5871540472515376,0.43352417154664324,0.8383109695696963,0.007546937545832022,0.4374573631915257,0.8680695930342217,0.012543368706828373,0.796534583099636,0.7545684752118176,0.41628995115710365,0.6461234516091545,0.8054913804341192,0.07345883921626462,0.14893489394955606,0.6875859217685968,0.7912976228354559,0.17918240653941686,0.9849696079750235,0.6513572793946533,0.34869708095845686,0.017723970717870796,0.27787345182282686,0.746689340115701,0.9950502153675852,0.15570213688852175,0.05990110422054662,0.32132789985073906,0.3741670051298026,0.7804081109662607,0.5000671363317977,0.1743317326326469,0.7534718849425014,0.054668215965194666,0.38939462823616633,0.8054738084839367,0.8006203225272158,0.09621824628005482,0.7895938703827697,0.48922094105505975,0.8554040675269013,0.5767240371010945,0.8292624725186397,0.5387168788277344,0.6528155243665625,0.14947380155081025,0.535897982419911,0.7169461236729192,0.1868262992875689,0.9453454115406789,0.014540471711759761,0.7897345452231533,0.8886549121687168,0.3917293612813202,0.43277078016956294,0.8617723931908235,0.8487568506329691,0.5605129202616436,0.16481199287149872,0.6029462934672525,0.38691191216953624,0.43736902016153145,0.5959528907981826,0.06799275908177471,0.6468456817761826,0.5478603588124417,0.46341549156199646,0.35050126614068955,0.11672232913824276,0.4292520627841706,0.6810870246918199,0.17126922579098747,0.274852190799444,0.3926098500413885,0.7412133135375419,0.7588114308777089,0.830262202087976,0.8465721449307361,0.862162445959073,0.24040582235262042,0.5287934733775034,0.9589835463901136,0.45523669795376553,0.6393886627454963,0.0026964419705508558,0.8776657972288998,0.516936887182439,0.7075293249234518,0.34003347808948303,0.6703186281470733,0.8522973576783234,0.4232690666704214,0.1952674415968374,0.10865359396193208,0.18710255362555206,0.4076818602781329,0.9579496515886199,0.2717382736841988,0.9105721932548482,0.34732224204206097,0.9137330064874946,0.33970515454429184,0.8129627281588621,0.693956471707518,0.6345707531322063,0.08229104224354644,0.3337118700674372,0.39079792653963075,0.35733899582323303,0.5111745799597462,0.7756431924258692,0.4194121748323346,0.7952319151623737,0.9176998073299303,0.7002860617409067,0.8367631031969133,0.14388613397454963,0.6960505788665535,0.7325589180979118,0.2347014486093677,0.0040152175899795806,0.6836174477542588,0.3641939674531821,0.8519590257502722,0.02657346765223001,0.5888447397529124,0.7095586696546075,0.3015052902263914,0.3780854128761797,0.876724166854564,0.24337749655190155,0.1684326394374549,0.8152004182421327,0.5412372116959371,0.9281550815041287,0.45218906265559844,0.8051099891776421,0.31105088168557926,0.1764645382652671,0.5829261940572635,0.622125552292311,0.740858887468982,0.5488349676409958,0.2950450802235268,0.48775855810088253,0.4561724909403555,0.22520703228584782,0.2235347047550389,0.2800610835408208,0.7049740662768464,0.8053857693271073,0.5976351789068596,0.9394399674168628,0.20912787407291444,0.13641120509700533,0.11499379705957224,0.7556541373183884,0.8106702188785021,0.7476867140655259,0.7686256213281492,0.05249721495961335,0.002159208279303715,0.4329370139841421,0.010225050592441609,0.17762192449173242,0.9157573551647097,0.9834640095684147,0.813668411381509,0.6887151476891247,0.2612380356796902,0.9999323641792509,0.3911787263665243,0.3482319854554584,0.7425392420246985,0.8726064806520673,0.34800434230678445,0.9962613956234145,0.17178070420715352,0.7514831486451489,0.3369396280805226,0.5146172836766191,0.501676967716301,0.5931542434840721,0.5901509314920023,0.6682602143846944,0.22060371577097904,0.7299732993107285,0.8738061520252568,0.6154982331694105,0.9321950956521216,0.0706680197672288,0.3303215988422906,0.09992146997394724,0.2562462173464598,0.026144732584544417,0.41391623996672056,0.8590125738087058,0.33942393347048794,0.3315351851272603,0.3555038124489164,0.8224832778703909,0.16705089371466386,0.8094651457182921,0.841771184195877,0.6442913128617759,0.011076228674645971,0.4868455757230873,0.6807295054324866,0.527647379690871,0.6423639647592617,0.6640625187422502,0.6013767087537902,0.40620751667315735,0.3443261692330005,0.3129991194154812,0.757700664485736,0.6372175898698613,0.052587324063198104,0.08244472366589994,0.2210828734098822,0.8958803839648282,0.06243384894141224,0.19863511892077268,0.18264642743298887,0.44401850643970087,0.6530421928432433,0.6020874287745321,0.41390403739043546,0.9045989541183914,0.9444991966460419,0.852481846934191,0.4919982997784056,0.35253057963007084,0.7975823733437628,0.30827987674251867,0.8003581847336686,0.35611771503082956,0.46306619271868554,0.4474881992964126,0.8637628645364325,0.9780999356909866,0.09199276620016417,0.8738166363814106,0.5839584427100591,0.3240842588309317,0.021293709984278597,0.021681140327831527,0.46252657438992684,0.4018212363333311,0.4482263662702657,0.6666398035083588,0.05324745280246823,0.9519373085329141,0.8903138111918857,0.8322191307975002,0.5211426018085756,0.544190745103502,0.5623830983059309,0.34382743465476395,0.8341697393015385,0.37850735514422196,0.03572056253460654,0.6808861469147889,0.25188594418309007,0.7360298500037908,0.5794733248094486,0.3161156472038614,0.5237326391811842,0.18336563871665346,0.6987451413905932,0.352085928344829,0.3859034818332455,0.5974122603624018,0.18628057694754774,0.18871920614351034,0.3612408106465357,0.9201384065247692,0.14899799699456306,0.31572504902163245,0.7910894926595942,0.7291694500780318,0.709033637452678,0.2121220114068595,0.9024039543966011,0.7372942602699115,0.9025740786786253,0.7666623101111922]}},"id":"97147052-248e-47e1-b38f-7330a97d4892","type":"ColumnDataSource"},{"attributes":{},"id":"65119ec7-2716-4031-9021-9a4e1cf5e7cd","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"d62f4299-728a-4d79-a107-ae3a91eb7e53","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"2ff288a4-f64a-4a36-a530-56d75b4d14de","type":"BasicTickFormatter"},"plot":{"id":"8b77ee20-34b4-49ec-858d-8f2224dbffc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"fda69f76-de4c-42f4-ad29-516463617d62","type":"BasicTicker"}},"id":"099fd98d-3618-444b-9416-d30fbf17f2bf","type":"LinearAxis"},{"attributes":{"callback":null},"id":"df03d2a1-2c76-403b-9902-37eaa38dba4b","type":"DataRange1d"},{"attributes":{},"id":"2ff288a4-f64a-4a36-a530-56d75b4d14de","type":"BasicTickFormatter"},{"attributes":{},"id":"665879a1-0ae4-4bd1-b3f2-8a51ba2e979b","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"e670e657-5f65-4ca4-b413-e7c4e46e2893","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"231bf069-a16f-458c-96ed-e93fe2179630","type":"BasicTickFormatter"},"plot":{"id":"cdfa3512-62df-4e2c-858d-6db1ca762995","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b661ba1-bd85-4d8c-a9b6-1c6e51ee24b9","type":"BasicTicker"}},"id":"9a3f615e-afd7-45c3-9582-5ba951708dea","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"cdfa3512-62df-4e2c-858d-6db1ca762995","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b661ba1-bd85-4d8c-a9b6-1c6e51ee24b9","type":"BasicTicker"}},"id":"5e968b25-c83d-45a9-a652-e04f4e62085c","type":"Grid"},{"attributes":{"data_source":{"id":"e670e657-5f65-4ca4-b413-e7c4e46e2893","type":"ColumnDataSource"},"glyph":{"id":"53c81cd3-9831-4651-8bb0-f88a79b15bc8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5286bde1-b8c1-4ff4-9eee-6e59886e1f21","type":"Circle"},"selection_glyph":null,"view":{"id":"dd4ce529-fd72-41ec-978f-f34814a219d1","type":"CDSView"}},"id":"ca6602eb-2740-4e10-b96e-a9160776c3d6","type":"GlyphRenderer"},{"attributes":{},"id":"fda69f76-de4c-42f4-ad29-516463617d62","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9c008802-4382-4eb4-a874-7178d5c846df","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f2328f57-556a-414b-8c4c-cd7fe7fd1c2b","type":"LassoSelectTool"}]},"id":"425ecf74-8e27-41a9-a6c1-9b2a534ae355","type":"Toolbar"},{"attributes":{"source":{"id":"97147052-248e-47e1-b38f-7330a97d4892","type":"ColumnDataSource"}},"id":"33feb527-f429-4815-be58-14d7960d92d0","type":"CDSView"}],"root_ids":["f688939d-3438-4b43-9139-643c4700f449"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"2939f753-4b5f-4ee1-86c9-c83067d93651","elementid":"c54360a9-f7d5-48c7-a44c-80eb8fb0308c","modelid":"f688939d-3438-4b43-9139-643c4700f449"}];
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