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
      };var element = document.getElementById("4d0f6b1f-fb76-4ba5-9852-fa97b592831a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d0f6b1f-fb76-4ba5-9852-fa97b592831a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                "Surface3d": require("custom/bk_script_66d434674bd945339d427d3410a62a05.surface3d").Surface3d,
          "IonRangeSlider": require("custom/bk_script_6bbffed6a92843428ebf149ab2d70e33.ion_range_slider").IonRangeSlider,
          "Custom": require("custom/bk_script_8355b62fc4e447beb7e563146c5db4ab.custom").Custom,
          "DrawTool": require("custom/bk_script_8b6a824193b54b1d88fc7b74ac6d180e.draw_tool").DrawTool,
          "LatexLabel": require("custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_66d434674bd945339d427d3410a62a05.surface3d": function(require, module, exports) {
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
          // or into the DOM, we must create a View subclass for the model.
          // In this case we will subclass from the existing BokehJS ``LayoutDOMView``
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
                  // BokehJS Views create <div> elements by default, accessible as @el. Many
                  // Bokeh views ignore this default <div>, and instead do things like draw
                  // to the HTML canvas. In this case though, we use the <div> to attach a
                  // Graph3d to the DOM.
                  this._graph = new vis.Graph3d(this.el, this.get_data(), OPTIONS);
                  // Set a listener so that when the Bokeh data source has a change
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
              // We must also create a corresponding JavaScript BokehJS model subclass to
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
          "custom/bk_script_6bbffed6a92843428ebf149ab2d70e33.ion_range_slider": function(require, module, exports) {
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
                  // BokehJS Views create <div> elements by default, accessible as @$el.
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
          "custom/bk_script_8355b62fc4e447beb7e563146c5db4ab.custom": function(require, module, exports) {
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
          "custom/bk_script_8b6a824193b54b1d88fc7b74ac6d180e.draw_tool": function(require, module, exports) {
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
                  (sx = e.sx, sy = e.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
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
          "custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label": function(require, module, exports) {
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
    
          },
          "custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter": function(require, module, exports) {
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
                    
                  var docs_json = '{"c72e927c-393a-4925-b83c-0c1a654b9090":{"roots":{"references":[{"attributes":{},"id":"bb865edd-a957-47fa-ae80-23d8c4b2320a","type":"BasicTickFormatter"},{"attributes":{},"id":"49c240b8-e98f-40b1-ad12-86bce97134e3","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"5c28686f-b009-49b1-8cd7-c1733aeac75e","type":"PolyAnnotation"},{"attributes":{},"id":"316814c3-7a6d-4ca8-a45b-82ed71a86210","type":"LinearScale"},{"attributes":{"callback":null},"id":"abec3c8a-8490-4fa5-b26f-e41c976b40ce","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"86d603c9-08c6-41b5-a072-f5ff45d2525e","type":"BoxAnnotation"},"renderers":[{"id":"90da2597-0c36-4374-b156-df90fae0749f","type":"GlyphRenderer"}]},"id":"cc62eccc-0787-42a2-b246-87bc626c1047","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"96430296-b6f0-4c94-bd38-f0bd8f4878f1","type":"DataRange1d"},{"attributes":{},"id":"ad274a25-8073-4b88-9e26-a8b7aa76241a","type":"BasicTicker"},{"attributes":{},"id":"0f529d51-4847-4e35-b2f7-7c14c94d1231","type":"HelpTool"},{"attributes":{"source":{"id":"24a1f1fe-a052-481f-bf13-bf8edb75a9a5","type":"ColumnDataSource"}},"id":"235ab174-79e4-4079-9221-194c968e9e28","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"60a28d81-b870-49fe-b703-8da2b2706f36","type":"PolyAnnotation"}},"id":"d01a485c-5dd7-4934-9cb7-de437b038762","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"594e4918-02fc-44ca-9580-6f93fba21af0","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"7a415fec-0540-4a54-be1b-3155d7a8850d","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cc62eccc-0787-42a2-b246-87bc626c1047","type":"BoxSelectTool"},{"id":"d01a485c-5dd7-4934-9cb7-de437b038762","type":"LassoSelectTool"},{"id":"0f529d51-4847-4e35-b2f7-7c14c94d1231","type":"HelpTool"}]},"id":"af234055-fa03-4ffb-8815-7645d1b21e32","type":"Toolbar"},{"attributes":{"source":{"id":"24a1f1fe-a052-481f-bf13-bf8edb75a9a5","type":"ColumnDataSource"}},"id":"5a16b89a-bab5-4dd2-aef6-748711b8de26","type":"CDSView"},{"attributes":{"data_source":{"id":"24a1f1fe-a052-481f-bf13-bf8edb75a9a5","type":"ColumnDataSource"},"glyph":{"id":"8476464b-2098-4204-b382-90e27c465ddd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1c89cac1-b25f-4805-80ac-23fb73b8e278","type":"Circle"},"selection_glyph":null,"view":{"id":"5a16b89a-bab5-4dd2-aef6-748711b8de26","type":"CDSView"}},"id":"98f82f70-7b20-419f-90df-6ded663501da","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"24a1f1fe-a052-481f-bf13-bf8edb75a9a5","type":"ColumnDataSource"},"glyph":{"id":"dbb63e19-591f-4d2c-a475-33dc80917b34","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7a415fec-0540-4a54-be1b-3155d7a8850d","type":"Circle"},"selection_glyph":null,"view":{"id":"235ab174-79e4-4079-9221-194c968e9e28","type":"CDSView"}},"id":"90da2597-0c36-4374-b156-df90fae0749f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"bb865edd-a957-47fa-ae80-23d8c4b2320a","type":"BasicTickFormatter"},"plot":{"id":"b22a80e7-c0d0-4628-9af6-947ab592c05e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c398f49b-dfdc-4230-bb7e-a78960271d86","type":"BasicTicker"}},"id":"b3ea7d98-cc3d-4e87-813f-1576b0017597","type":"LinearAxis"},{"attributes":{"below":[{"id":"8101875a-af61-4a13-a524-22e05b4752ab","type":"LinearAxis"}],"left":[{"id":"e8a2c917-d10a-4e64-aff7-318ae71467bb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8101875a-af61-4a13-a524-22e05b4752ab","type":"LinearAxis"},{"id":"3a6ba198-e747-4f5e-80e3-1ed690203eb5","type":"Grid"},{"id":"e8a2c917-d10a-4e64-aff7-318ae71467bb","type":"LinearAxis"},{"id":"ef632ea3-4733-45ae-8956-3e195399cd4d","type":"Grid"},{"id":"86d603c9-08c6-41b5-a072-f5ff45d2525e","type":"BoxAnnotation"},{"id":"60a28d81-b870-49fe-b703-8da2b2706f36","type":"PolyAnnotation"},{"id":"90da2597-0c36-4374-b156-df90fae0749f","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"af234055-fa03-4ffb-8815-7645d1b21e32","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"abec3c8a-8490-4fa5-b26f-e41c976b40ce","type":"DataRange1d"},"x_scale":{"id":"7c937f66-8c98-4d28-9269-3280e4ad2a61","type":"LinearScale"},"y_range":{"id":"291d8536-7cee-4965-9b45-82d14c0308a4","type":"DataRange1d"},"y_scale":{"id":"eefd30de-8820-4872-adb0-81de23230595","type":"LinearScale"}},"id":"25325397-68f0-4777-89dd-a363369e0812","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"b22a80e7-c0d0-4628-9af6-947ab592c05e","subtype":"Figure","type":"Plot"},{"id":"25325397-68f0-4777-89dd-a363369e0812","subtype":"Figure","type":"Plot"}]},"id":"be356890-70af-44df-8480-bbccf537beea","type":"Row"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"1c89cac1-b25f-4805-80ac-23fb73b8e278","type":"Circle"},{"attributes":{"formatter":{"id":"a3d97652-7e80-4252-a6be-6fb619f6e9f2","type":"BasicTickFormatter"},"plot":{"id":"b22a80e7-c0d0-4628-9af6-947ab592c05e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b29e32d7-79c8-4ec4-87b1-0d7a17c4135a","type":"BasicTicker"}},"id":"71a2f2cd-3208-48d2-a62f-d76b884f50c9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"60a28d81-b870-49fe-b703-8da2b2706f36","type":"PolyAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"b22a80e7-c0d0-4628-9af6-947ab592c05e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b29e32d7-79c8-4ec4-87b1-0d7a17c4135a","type":"BasicTicker"}},"id":"33660915-747d-4990-8e69-0a8f5dc92bb5","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"8476464b-2098-4204-b382-90e27c465ddd","type":"Circle"},{"attributes":{},"id":"b29e32d7-79c8-4ec4-87b1-0d7a17c4135a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"dbb63e19-591f-4d2c-a475-33dc80917b34","type":"Circle"},{"attributes":{},"id":"a3d97652-7e80-4252-a6be-6fb619f6e9f2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":null,"selection_policy":null},"id":"24a1f1fe-a052-481f-bf13-bf8edb75a9a5","type":"ColumnDataSource"},{"attributes":{},"id":"d3f31143-abf1-416e-898c-e24dbbdd8629","type":"BasicTicker"},{"attributes":{},"id":"ec68a937-63fa-4f62-a5e5-c858efdfda31","type":"HelpTool"},{"attributes":{"formatter":{"id":"49c240b8-e98f-40b1-ad12-86bce97134e3","type":"BasicTickFormatter"},"plot":{"id":"25325397-68f0-4777-89dd-a363369e0812","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad274a25-8073-4b88-9e26-a8b7aa76241a","type":"BasicTicker"}},"id":"e8a2c917-d10a-4e64-aff7-318ae71467bb","type":"LinearAxis"},{"attributes":{},"id":"c398f49b-dfdc-4230-bb7e-a78960271d86","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"86d603c9-08c6-41b5-a072-f5ff45d2525e","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"594e4918-02fc-44ca-9580-6f93fba21af0","type":"BoxAnnotation"},"renderers":[{"id":"98f82f70-7b20-419f-90df-6ded663501da","type":"GlyphRenderer"}]},"id":"d969dba6-f35f-45ee-9e28-f3e4b6a9a627","type":"BoxSelectTool"},{"attributes":{},"id":"7c937f66-8c98-4d28-9269-3280e4ad2a61","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"5c28686f-b009-49b1-8cd7-c1733aeac75e","type":"PolyAnnotation"}},"id":"0ae59de0-18ec-4f0b-bc7d-93ce41ad0eb9","type":"LassoSelectTool"},{"attributes":{"plot":{"id":"b22a80e7-c0d0-4628-9af6-947ab592c05e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c398f49b-dfdc-4230-bb7e-a78960271d86","type":"BasicTicker"}},"id":"534f44ce-3342-4742-89b0-8a117c90f030","type":"Grid"},{"attributes":{"callback":null},"id":"291d8536-7cee-4965-9b45-82d14c0308a4","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"25325397-68f0-4777-89dd-a363369e0812","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad274a25-8073-4b88-9e26-a8b7aa76241a","type":"BasicTicker"}},"id":"ef632ea3-4733-45ae-8956-3e195399cd4d","type":"Grid"},{"attributes":{"formatter":{"id":"86389ddc-2d81-43cd-9040-9d7ea2cf7026","type":"BasicTickFormatter"},"plot":{"id":"25325397-68f0-4777-89dd-a363369e0812","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3f31143-abf1-416e-898c-e24dbbdd8629","type":"BasicTicker"}},"id":"8101875a-af61-4a13-a524-22e05b4752ab","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d969dba6-f35f-45ee-9e28-f3e4b6a9a627","type":"BoxSelectTool"},{"id":"0ae59de0-18ec-4f0b-bc7d-93ce41ad0eb9","type":"LassoSelectTool"},{"id":"ec68a937-63fa-4f62-a5e5-c858efdfda31","type":"HelpTool"}]},"id":"cd6f38e3-c3bf-400c-a9cc-3507d4e66eb0","type":"Toolbar"},{"attributes":{},"id":"eefd30de-8820-4872-adb0-81de23230595","type":"LinearScale"},{"attributes":{"callback":null},"id":"93925a3f-2a43-413f-9e70-27af2c1dce31","type":"DataRange1d"},{"attributes":{"plot":{"id":"25325397-68f0-4777-89dd-a363369e0812","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3f31143-abf1-416e-898c-e24dbbdd8629","type":"BasicTicker"}},"id":"3a6ba198-e747-4f5e-80e3-1ed690203eb5","type":"Grid"},{"attributes":{"children":[{"id":"4c0c57aa-2bd5-48a9-b1e4-a5d8991bb197","type":"ToolbarBox"},{"id":"d25991c6-046d-43ef-9a5f-a8ce776e53f1","type":"Column"}]},"id":"9b526ba4-4ac6-4fea-8ff6-bb2aa09e28f8","type":"Column"},{"attributes":{"below":[{"id":"b3ea7d98-cc3d-4e87-813f-1576b0017597","type":"LinearAxis"}],"left":[{"id":"71a2f2cd-3208-48d2-a62f-d76b884f50c9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b3ea7d98-cc3d-4e87-813f-1576b0017597","type":"LinearAxis"},{"id":"534f44ce-3342-4742-89b0-8a117c90f030","type":"Grid"},{"id":"71a2f2cd-3208-48d2-a62f-d76b884f50c9","type":"LinearAxis"},{"id":"33660915-747d-4990-8e69-0a8f5dc92bb5","type":"Grid"},{"id":"594e4918-02fc-44ca-9580-6f93fba21af0","type":"BoxAnnotation"},{"id":"5c28686f-b009-49b1-8cd7-c1733aeac75e","type":"PolyAnnotation"},{"id":"98f82f70-7b20-419f-90df-6ded663501da","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"cd6f38e3-c3bf-400c-a9cc-3507d4e66eb0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"93925a3f-2a43-413f-9e70-27af2c1dce31","type":"DataRange1d"},"x_scale":{"id":"316814c3-7a6d-4ca8-a45b-82ed71a86210","type":"LinearScale"},"y_range":{"id":"96430296-b6f0-4c94-bd38-f0bd8f4878f1","type":"DataRange1d"},"y_scale":{"id":"c916f492-bdb0-43fd-897e-b60ea6cf138d","type":"LinearScale"}},"id":"b22a80e7-c0d0-4628-9af6-947ab592c05e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c916f492-bdb0-43fd-897e-b60ea6cf138d","type":"LinearScale"},{"attributes":{},"id":"86389ddc-2d81-43cd-9040-9d7ea2cf7026","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"b87c6db8-96a0-4051-95e9-18ae47407e73","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"4c0c57aa-2bd5-48a9-b1e4-a5d8991bb197","type":"ToolbarBox"},{"attributes":{"children":[{"id":"be356890-70af-44df-8480-bbccf537beea","type":"Row"}]},"id":"d25991c6-046d-43ef-9a5f-a8ce776e53f1","type":"Column"},{"attributes":{"tools":[{"id":"d969dba6-f35f-45ee-9e28-f3e4b6a9a627","type":"BoxSelectTool"},{"id":"0ae59de0-18ec-4f0b-bc7d-93ce41ad0eb9","type":"LassoSelectTool"},{"id":"ec68a937-63fa-4f62-a5e5-c858efdfda31","type":"HelpTool"},{"id":"cc62eccc-0787-42a2-b246-87bc626c1047","type":"BoxSelectTool"},{"id":"d01a485c-5dd7-4934-9cb7-de437b038762","type":"LassoSelectTool"},{"id":"0f529d51-4847-4e35-b2f7-7c14c94d1231","type":"HelpTool"}]},"id":"b87c6db8-96a0-4051-95e9-18ae47407e73","type":"ProxyToolbar"}],"root_ids":["9b526ba4-4ac6-4fea-8ff6-bb2aa09e28f8"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"c72e927c-393a-4925-b83c-0c1a654b9090","elementid":"4d0f6b1f-fb76-4ba5-9852-fa97b592831a","modelid":"9b526ba4-4ac6-4fea-8ff6-bb2aa09e28f8"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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