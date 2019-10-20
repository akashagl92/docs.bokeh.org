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
      };var element = document.getElementById("7682ac6a-e60a-47ca-936d-b2ba1b3806bb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7682ac6a-e60a-47ca-936d-b2ba1b3806bb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3b98f774-7cef-4df9-ac9f-18e5d396b292":{"roots":{"references":[{"attributes":{"tools":[{"id":"5650f478-d797-4dd6-8458-ec6c9bf4de2e","type":"PanTool"},{"id":"ace7037b-0e4d-4c37-979c-ee4a0556be04","type":"WheelZoomTool"},{"id":"5e680398-1ad2-4b9e-8cb7-68117c589d5c","type":"BoxZoomTool"},{"id":"fe4a2b82-f162-4ccd-96bd-aa4341339d21","type":"SaveTool"},{"id":"729b830e-208e-4a0d-9216-40024fe70fde","type":"ResetTool"},{"id":"c73bfc9e-d312-4c9d-87e8-f3ac665af904","type":"HelpTool"},{"id":"3862c84e-4b99-4ad6-a4d2-b9f17ca07054","type":"PanTool"},{"id":"2d81ae5a-6855-4c66-8ef8-887942e4d5f7","type":"WheelZoomTool"},{"id":"edd7ee9b-c17c-49db-b957-e07c7c31a5a7","type":"BoxZoomTool"},{"id":"0308acdf-3a3d-43d5-abfa-a8266b50943b","type":"SaveTool"},{"id":"e0743fcb-dd3f-4e78-bb6d-21e681217b7d","type":"ResetTool"},{"id":"4c6593f9-4a1e-4406-b3a6-7783d2c4dcc9","type":"HelpTool"},{"id":"3fd71b44-1aad-4a7b-ade0-7aefe2e0675b","type":"PanTool"},{"id":"bcb77b83-753c-44ca-bd92-b4836ee68326","type":"WheelZoomTool"},{"id":"71937081-d8d3-407c-a029-8c45a4e3a323","type":"BoxZoomTool"},{"id":"64739861-61e7-4836-b927-bbe5734a76cf","type":"SaveTool"},{"id":"91a1194d-b560-4a2d-a96e-dac6ce908638","type":"ResetTool"},{"id":"d042c704-665f-4d90-a121-16a0e5ec208a","type":"HelpTool"}]},"id":"ef193a69-53f9-498c-ab61-79c7356523b5","type":"ProxyToolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3862c84e-4b99-4ad6-a4d2-b9f17ca07054","type":"PanTool"},{"id":"2d81ae5a-6855-4c66-8ef8-887942e4d5f7","type":"WheelZoomTool"},{"id":"edd7ee9b-c17c-49db-b957-e07c7c31a5a7","type":"BoxZoomTool"},{"id":"0308acdf-3a3d-43d5-abfa-a8266b50943b","type":"SaveTool"},{"id":"e0743fcb-dd3f-4e78-bb6d-21e681217b7d","type":"ResetTool"},{"id":"4c6593f9-4a1e-4406-b3a6-7783d2c4dcc9","type":"HelpTool"}]},"id":"9c50b357-86ac-40b6-a465-8c011ff61363","type":"Toolbar"},{"attributes":{"below":[{"id":"baa578f3-fa77-4fd9-a30b-93a15f2ae428","type":"LinearAxis"}],"left":[{"id":"0d928313-ea0b-4e40-b9ae-26c00b500734","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"baa578f3-fa77-4fd9-a30b-93a15f2ae428","type":"LinearAxis"},{"id":"d2db0bfa-87a8-4b57-be64-2dc2c2a497d8","type":"Grid"},{"id":"0d928313-ea0b-4e40-b9ae-26c00b500734","type":"LinearAxis"},{"id":"37c25645-64dc-468d-84a1-386d53c04710","type":"Grid"},{"id":"f1aa2262-f4d4-4119-a0d0-2ff21a4e38ad","type":"BoxAnnotation"},{"id":"0c4dc6ec-7777-4363-9f42-b3137d2b0cb6","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6b07b7f6-35c2-4069-be8c-cf1ff6cc2029","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dbbb4d66-db70-43ce-84c4-d2bee0dbda36","type":"DataRange1d"},"x_scale":{"id":"3e06bbb0-75af-4804-8fef-6ee43bbdb2b1","type":"LinearScale"},"y_range":{"id":"a8a48a1c-9787-4216-8861-658401490728","type":"DataRange1d"},"y_scale":{"id":"f2dfdfe3-9089-4621-87e1-3f8e5d15ca7e","type":"LinearScale"}},"id":"5720a5b1-f25c-48ff-b088-b024faf5e0ea","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"daab9ce3-7fc8-479b-b1ed-6c539f03b4ac","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f78497c8-6c55-4221-8a03-d20b91fa0e53","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":null,"selection_policy":null},"id":"10b7c0b5-7d4d-4190-a85c-4a6ed814c2c6","type":"ColumnDataSource"},{"attributes":{},"id":"b1be409c-6a86-4ffb-9831-0a06abb931cf","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27765d25-e89e-4d92-9153-4b397bdf7aaf","type":"Triangle"},{"attributes":{"below":[{"id":"121536bd-336b-401d-b58b-0955034aaa8b","type":"LinearAxis"}],"left":[{"id":"9a51e5f2-3cc4-45ae-967b-8b6a58d21a10","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"121536bd-336b-401d-b58b-0955034aaa8b","type":"LinearAxis"},{"id":"f5fc83c2-5ec2-42ca-a7cf-26f4c5bf0c9e","type":"Grid"},{"id":"9a51e5f2-3cc4-45ae-967b-8b6a58d21a10","type":"LinearAxis"},{"id":"ad51571f-ffb9-4dfe-a757-cf71fdf6fba1","type":"Grid"},{"id":"e00cd272-0598-4743-b0ee-a596e2003fa6","type":"BoxAnnotation"},{"id":"95c05e13-f691-4819-bb82-cd3032c948d2","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6f60c884-0359-4729-8860-8dc1a6121157","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"bd7ffcfa-2bb0-46a7-86f8-dcd95d68db1d","type":"DataRange1d"},"x_scale":{"id":"3495981d-3ab6-4614-ab34-d36f034a926b","type":"LinearScale"},"y_range":{"id":"92ad1d6c-8293-40b7-b7b7-7755d1d3245a","type":"DataRange1d"},"y_scale":{"id":"0740a305-a919-4476-a5b3-9025ca21c5cf","type":"LinearScale"}},"id":"530a821b-fea9-4e34-b17c-80d7f96ac776","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"729b830e-208e-4a0d-9216-40024fe70fde","type":"ResetTool"},{"attributes":{"formatter":{"id":"b1be409c-6a86-4ffb-9831-0a06abb931cf","type":"BasicTickFormatter"},"plot":{"id":"5c47f335-fff8-4f7a-9d28-68c69be0f5df","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dbbdbb6-8ad9-4f1c-9829-a144de7e4d73","type":"BasicTicker"}},"id":"fd69b1a9-8eaf-4b2a-95ce-b6aaf107e26b","type":"LinearAxis"},{"attributes":{"children":[{"id":"7c1ec801-9481-4815-a23f-4fc7602273a0","type":"Spacer"},{"id":"5720a5b1-f25c-48ff-b088-b024faf5e0ea","subtype":"Figure","type":"Plot"}]},"id":"f5fb599e-cf77-4ada-8878-744d2df9f687","type":"Row"},{"attributes":{},"id":"0740a305-a919-4476-a5b3-9025ca21c5cf","type":"LinearScale"},{"attributes":{},"id":"fe4a2b82-f162-4ccd-96bd-aa4341339d21","type":"SaveTool"},{"attributes":{},"id":"1dbbdbb6-8ad9-4f1c-9829-a144de7e4d73","type":"BasicTicker"},{"attributes":{},"id":"d61057c1-f1fa-4171-b0e4-6feeb36e34b4","type":"BasicTicker"},{"attributes":{},"id":"d3aefebe-aafe-4a0c-a432-33e155af6a78","type":"BasicTicker"},{"attributes":{},"id":"26a9aaa2-a93e-4449-ae7d-6202ac9cd6e1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":null,"selection_policy":null},"id":"c97827d6-99b8-4f6b-91bd-32c46afe2f1b","type":"ColumnDataSource"},{"attributes":{},"id":"3862c84e-4b99-4ad6-a4d2-b9f17ca07054","type":"PanTool"},{"attributes":{},"id":"3fd71b44-1aad-4a7b-ade0-7aefe2e0675b","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"530a821b-fea9-4e34-b17c-80d7f96ac776","subtype":"Figure","type":"Plot"},"ticker":{"id":"ceab6686-1804-47e9-9995-e115a2fb30dc","type":"BasicTicker"}},"id":"ad51571f-ffb9-4dfe-a757-cf71fdf6fba1","type":"Grid"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"06a546ac-6d61-4812-aca4-7ce143139365","type":"Square"},{"attributes":{},"id":"e0c97149-e05f-405b-8439-48e5c8f02ccd","type":"BasicTickFormatter"},{"attributes":{"height":250,"width":250},"id":"7c1ec801-9481-4815-a23f-4fc7602273a0","type":"Spacer"},{"attributes":{"dimension":1,"plot":{"id":"5c47f335-fff8-4f7a-9d28-68c69be0f5df","subtype":"Figure","type":"Plot"},"ticker":{"id":"029f8e13-571a-4476-8171-f3ed0a5da021","type":"BasicTicker"}},"id":"b276f69b-74a3-4364-a1cb-0916491142cc","type":"Grid"},{"attributes":{"formatter":{"id":"daab9ce3-7fc8-479b-b1ed-6c539f03b4ac","type":"BasicTickFormatter"},"plot":{"id":"530a821b-fea9-4e34-b17c-80d7f96ac776","subtype":"Figure","type":"Plot"},"ticker":{"id":"ceab6686-1804-47e9-9995-e115a2fb30dc","type":"BasicTicker"}},"id":"9a51e5f2-3cc4-45ae-967b-8b6a58d21a10","type":"LinearAxis"},{"attributes":{"formatter":{"id":"26a9aaa2-a93e-4449-ae7d-6202ac9cd6e1","type":"BasicTickFormatter"},"plot":{"id":"530a821b-fea9-4e34-b17c-80d7f96ac776","subtype":"Figure","type":"Plot"},"ticker":{"id":"d61057c1-f1fa-4171-b0e4-6feeb36e34b4","type":"BasicTicker"}},"id":"121536bd-336b-401d-b58b-0955034aaa8b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"e0c97149-e05f-405b-8439-48e5c8f02ccd","type":"BasicTickFormatter"},"plot":{"id":"5720a5b1-f25c-48ff-b088-b024faf5e0ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6edbaad-90fe-4c24-b4e6-7de74dc6b497","type":"BasicTicker"}},"id":"baa578f3-fa77-4fd9-a30b-93a15f2ae428","type":"LinearAxis"},{"attributes":{"plot":{"id":"5c47f335-fff8-4f7a-9d28-68c69be0f5df","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dbbdbb6-8ad9-4f1c-9829-a144de7e4d73","type":"BasicTicker"}},"id":"bcadb53e-d84c-4ee2-9967-7029a1ca3eb6","type":"Grid"},{"attributes":{},"id":"b7e2ebfe-b467-412b-b71d-4460afaeaecb","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a332c731-fcdd-4d07-a84c-96fd10173ab7","type":"DataRange1d"},{"attributes":{"source":{"id":"10b7c0b5-7d4d-4190-a85c-4a6ed814c2c6","type":"ColumnDataSource"}},"id":"475d9445-6e20-47ac-9a54-d349b9d52da2","type":"CDSView"},{"attributes":{},"id":"ceab6686-1804-47e9-9995-e115a2fb30dc","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7311e003-1c2d-4da2-b86a-6167eb5e2555","type":"Triangle"},{"attributes":{"children":[{"id":"0a8655e1-2f36-4dcd-83d5-053626952292","type":"Row"},{"id":"f5fb599e-cf77-4ada-8878-744d2df9f687","type":"Row"}]},"id":"9e3d3b6e-3501-4232-9021-a096bf113d64","type":"Column"},{"attributes":{"data_source":{"id":"10b7c0b5-7d4d-4190-a85c-4a6ed814c2c6","type":"ColumnDataSource"},"glyph":{"id":"e44af5f3-ef2e-433f-88b1-bf875b8b2cd2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3fe40d48-e487-4f87-af63-0e33e144d7ea","type":"Circle"},"selection_glyph":null,"view":{"id":"475d9445-6e20-47ac-9a54-d349b9d52da2","type":"CDSView"}},"id":"95c05e13-f691-4819-bb82-cd3032c948d2","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3fd71b44-1aad-4a7b-ade0-7aefe2e0675b","type":"PanTool"},{"id":"bcb77b83-753c-44ca-bd92-b4836ee68326","type":"WheelZoomTool"},{"id":"71937081-d8d3-407c-a029-8c45a4e3a323","type":"BoxZoomTool"},{"id":"64739861-61e7-4836-b927-bbe5734a76cf","type":"SaveTool"},{"id":"91a1194d-b560-4a2d-a96e-dac6ce908638","type":"ResetTool"},{"id":"d042c704-665f-4d90-a121-16a0e5ec208a","type":"HelpTool"}]},"id":"6b07b7f6-35c2-4069-be8c-cf1ff6cc2029","type":"Toolbar"},{"attributes":{},"id":"5650f478-d797-4dd6-8458-ec6c9bf4de2e","type":"PanTool"},{"attributes":{"callback":null},"id":"a16c4818-9274-4060-be92-8438b84251da","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f1aa2262-f4d4-4119-a0d0-2ff21a4e38ad","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3fe40d48-e487-4f87-af63-0e33e144d7ea","type":"Circle"},{"attributes":{},"id":"91a1194d-b560-4a2d-a96e-dac6ce908638","type":"ResetTool"},{"attributes":{},"id":"3495981d-3ab6-4614-ab34-d36f034a926b","type":"LinearScale"},{"attributes":{"overlay":{"id":"f1aa2262-f4d4-4119-a0d0-2ff21a4e38ad","type":"BoxAnnotation"}},"id":"71937081-d8d3-407c-a029-8c45a4e3a323","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"644a2a9b-f4be-43e4-9977-4955c5242dd7","type":"ToolbarBox"},{"id":"9e3d3b6e-3501-4232-9021-a096bf113d64","type":"Column"}]},"id":"09f92964-648f-4de1-aeaf-dd4232d37671","type":"Column"},{"attributes":{"overlay":{"id":"c153eb11-7293-4981-bede-d93f6cd318c5","type":"BoxAnnotation"}},"id":"edd7ee9b-c17c-49db-b957-e07c7c31a5a7","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"5720a5b1-f25c-48ff-b088-b024faf5e0ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6edbaad-90fe-4c24-b4e6-7de74dc6b497","type":"BasicTicker"}},"id":"d2db0bfa-87a8-4b57-be64-2dc2c2a497d8","type":"Grid"},{"attributes":{},"id":"029f8e13-571a-4476-8171-f3ed0a5da021","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8df908f6-7da2-405e-b551-18d8504619a0","type":"ColumnDataSource"},"glyph":{"id":"06a546ac-6d61-4812-aca4-7ce143139365","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f78497c8-6c55-4221-8a03-d20b91fa0e53","type":"Square"},"selection_glyph":null,"view":{"id":"ac5f88a4-aa15-411e-ba6d-91a5bf2a7108","type":"CDSView"}},"id":"0c4dc6ec-7777-4363-9f42-b3137d2b0cb6","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5650f478-d797-4dd6-8458-ec6c9bf4de2e","type":"PanTool"},{"id":"ace7037b-0e4d-4c37-979c-ee4a0556be04","type":"WheelZoomTool"},{"id":"5e680398-1ad2-4b9e-8cb7-68117c589d5c","type":"BoxZoomTool"},{"id":"fe4a2b82-f162-4ccd-96bd-aa4341339d21","type":"SaveTool"},{"id":"729b830e-208e-4a0d-9216-40024fe70fde","type":"ResetTool"},{"id":"c73bfc9e-d312-4c9d-87e8-f3ac665af904","type":"HelpTool"}]},"id":"6f60c884-0359-4729-8860-8dc1a6121157","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c153eb11-7293-4981-bede-d93f6cd318c5","type":"BoxAnnotation"},{"attributes":{},"id":"2d81ae5a-6855-4c66-8ef8-887942e4d5f7","type":"WheelZoomTool"},{"attributes":{},"id":"c73bfc9e-d312-4c9d-87e8-f3ac665af904","type":"HelpTool"},{"attributes":{},"id":"5df6ab91-9715-4c08-8212-9df7902a8d62","type":"BasicTickFormatter"},{"attributes":{},"id":"4c6593f9-4a1e-4406-b3a6-7783d2c4dcc9","type":"HelpTool"},{"attributes":{"formatter":{"id":"b7e2ebfe-b467-412b-b71d-4460afaeaecb","type":"BasicTickFormatter"},"plot":{"id":"5c47f335-fff8-4f7a-9d28-68c69be0f5df","subtype":"Figure","type":"Plot"},"ticker":{"id":"029f8e13-571a-4476-8171-f3ed0a5da021","type":"BasicTicker"}},"id":"24f58930-387c-46dc-bbf4-11fdbe1e0bac","type":"LinearAxis"},{"attributes":{},"id":"bcb77b83-753c-44ca-bd92-b4836ee68326","type":"WheelZoomTool"},{"attributes":{},"id":"c19e8794-b194-43b6-91e2-2f53ecd149d5","type":"LinearScale"},{"attributes":{"callback":null},"id":"92ad1d6c-8293-40b7-b7b7-7755d1d3245a","type":"DataRange1d"},{"attributes":{"callback":null},"id":"dbbb4d66-db70-43ce-84c4-d2bee0dbda36","type":"DataRange1d"},{"attributes":{},"id":"a8de5bb5-4e6c-43f1-90b9-e4941d4cdee4","type":"LinearScale"},{"attributes":{"callback":null},"id":"a8a48a1c-9787-4216-8861-658401490728","type":"DataRange1d"},{"attributes":{"overlay":{"id":"e00cd272-0598-4743-b0ee-a596e2003fa6","type":"BoxAnnotation"}},"id":"5e680398-1ad2-4b9e-8cb7-68117c589d5c","type":"BoxZoomTool"},{"attributes":{"source":{"id":"c97827d6-99b8-4f6b-91bd-32c46afe2f1b","type":"ColumnDataSource"}},"id":"68e06804-4ee0-472d-bce2-3ac3dd72cbdc","type":"CDSView"},{"attributes":{"source":{"id":"8df908f6-7da2-405e-b551-18d8504619a0","type":"ColumnDataSource"}},"id":"ac5f88a4-aa15-411e-ba6d-91a5bf2a7108","type":"CDSView"},{"attributes":{},"id":"64739861-61e7-4836-b927-bbe5734a76cf","type":"SaveTool"},{"attributes":{"children":[{"id":"530a821b-fea9-4e34-b17c-80d7f96ac776","subtype":"Figure","type":"Plot"},{"id":"5c47f335-fff8-4f7a-9d28-68c69be0f5df","subtype":"Figure","type":"Plot"}]},"id":"0a8655e1-2f36-4dcd-83d5-053626952292","type":"Row"},{"attributes":{"below":[{"id":"fd69b1a9-8eaf-4b2a-95ce-b6aaf107e26b","type":"LinearAxis"}],"left":[{"id":"24f58930-387c-46dc-bbf4-11fdbe1e0bac","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"fd69b1a9-8eaf-4b2a-95ce-b6aaf107e26b","type":"LinearAxis"},{"id":"bcadb53e-d84c-4ee2-9967-7029a1ca3eb6","type":"Grid"},{"id":"24f58930-387c-46dc-bbf4-11fdbe1e0bac","type":"LinearAxis"},{"id":"b276f69b-74a3-4364-a1cb-0916491142cc","type":"Grid"},{"id":"c153eb11-7293-4981-bede-d93f6cd318c5","type":"BoxAnnotation"},{"id":"9fc21cd8-a720-4de4-bead-4d3db7eec50a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9c50b357-86ac-40b6-a465-8c011ff61363","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a332c731-fcdd-4d07-a84c-96fd10173ab7","type":"DataRange1d"},"x_scale":{"id":"c19e8794-b194-43b6-91e2-2f53ecd149d5","type":"LinearScale"},"y_range":{"id":"a16c4818-9274-4060-be92-8438b84251da","type":"DataRange1d"},"y_scale":{"id":"a8de5bb5-4e6c-43f1-90b9-e4941d4cdee4","type":"LinearScale"}},"id":"5c47f335-fff8-4f7a-9d28-68c69be0f5df","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":null,"selection_policy":null},"id":"8df908f6-7da2-405e-b551-18d8504619a0","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"ef193a69-53f9-498c-ab61-79c7356523b5","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"644a2a9b-f4be-43e4-9977-4955c5242dd7","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e00cd272-0598-4743-b0ee-a596e2003fa6","type":"BoxAnnotation"},{"attributes":{},"id":"c6edbaad-90fe-4c24-b4e6-7de74dc6b497","type":"BasicTicker"},{"attributes":{},"id":"ace7037b-0e4d-4c37-979c-ee4a0556be04","type":"WheelZoomTool"},{"attributes":{},"id":"d042c704-665f-4d90-a121-16a0e5ec208a","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"5720a5b1-f25c-48ff-b088-b024faf5e0ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3aefebe-aafe-4a0c-a432-33e155af6a78","type":"BasicTicker"}},"id":"37c25645-64dc-468d-84a1-386d53c04710","type":"Grid"},{"attributes":{"data_source":{"id":"c97827d6-99b8-4f6b-91bd-32c46afe2f1b","type":"ColumnDataSource"},"glyph":{"id":"27765d25-e89e-4d92-9153-4b397bdf7aaf","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7311e003-1c2d-4da2-b86a-6167eb5e2555","type":"Triangle"},"selection_glyph":null,"view":{"id":"68e06804-4ee0-472d-bce2-3ac3dd72cbdc","type":"CDSView"}},"id":"9fc21cd8-a720-4de4-bead-4d3db7eec50a","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e44af5f3-ef2e-433f-88b1-bf875b8b2cd2","type":"Circle"},{"attributes":{},"id":"3e06bbb0-75af-4804-8fef-6ee43bbdb2b1","type":"LinearScale"},{"attributes":{"plot":{"id":"530a821b-fea9-4e34-b17c-80d7f96ac776","subtype":"Figure","type":"Plot"},"ticker":{"id":"d61057c1-f1fa-4171-b0e4-6feeb36e34b4","type":"BasicTicker"}},"id":"f5fc83c2-5ec2-42ca-a7cf-26f4c5bf0c9e","type":"Grid"},{"attributes":{"callback":null},"id":"bd7ffcfa-2bb0-46a7-86f8-dcd95d68db1d","type":"DataRange1d"},{"attributes":{},"id":"f2dfdfe3-9089-4621-87e1-3f8e5d15ca7e","type":"LinearScale"},{"attributes":{},"id":"e0743fcb-dd3f-4e78-bb6d-21e681217b7d","type":"ResetTool"},{"attributes":{"formatter":{"id":"5df6ab91-9715-4c08-8212-9df7902a8d62","type":"BasicTickFormatter"},"plot":{"id":"5720a5b1-f25c-48ff-b088-b024faf5e0ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3aefebe-aafe-4a0c-a432-33e155af6a78","type":"BasicTicker"}},"id":"0d928313-ea0b-4e40-b9ae-26c00b500734","type":"LinearAxis"},{"attributes":{},"id":"0308acdf-3a3d-43d5-abfa-a8266b50943b","type":"SaveTool"}],"root_ids":["09f92964-648f-4de1-aeaf-dd4232d37671"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"3b98f774-7cef-4df9-ac9f-18e5d396b292","elementid":"7682ac6a-e60a-47ca-936d-b2ba1b3806bb","modelid":"09f92964-648f-4de1-aeaf-dd4232d37671"}];
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