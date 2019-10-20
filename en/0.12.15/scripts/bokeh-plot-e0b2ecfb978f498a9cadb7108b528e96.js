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
      };var element = document.getElementById("1daf9164-0f33-4066-8aac-c98ed6005070");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1daf9164-0f33-4066-8aac-c98ed6005070' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"625fb482-9c2e-4561-9e47-9a18a5d31ff1":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"56a49588-e70e-4482-8420-3e5f27fd68ad","type":"Plot"},"ticker":{"id":"0f364855-baf5-4f89-8fa7-31a94cfee928","type":"BasicTicker"}},"id":"175401c1-82dd-4838-8242-f01e72a12215","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6610ab92-0c78-4f8d-b7d2-7dbde6c778c0","type":"PanTool"},{"id":"8c3e9909-af51-402c-b53a-b46cf7074aa3","type":"WheelZoomTool"}]},"id":"1a15ea4c-86cb-44d5-9558-b09693dd2652","type":"Toolbar"},{"attributes":{},"id":"801ad7b4-3dc2-4555-a264-ea29336dc601","type":"PanTool"},{"attributes":{},"id":"d9f8ea32-ccee-424b-a4f0-9501504a0770","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"ba6619c7-68cd-4d2f-96d2-faf17cd34c69","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"c29fd929-4f7b-4f66-9115-02fb09990e7f","type":"GlyphRenderer"},{"id":"76986761-30f7-4996-b5e1-2488c1ede813","type":"Grid"},{"id":"ba6619c7-68cd-4d2f-96d2-faf17cd34c69","type":"LinearAxis"},{"id":"2e5c7ef4-62c3-4dc7-b2c3-0b903a1b40b9","type":"Grid"}],"title":{"id":"eb0d2a37-7eda-4d1d-b22f-eee258710cf2","type":"Title"},"toolbar":{"id":"1a15ea4c-86cb-44d5-9558-b09693dd2652","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"be39a190-09dd-452d-9259-02e0af8bb1fe","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"08d65b0e-3aac-40b3-acf3-e308347d3231","type":"LinearScale"}},"id":"505bf217-0667-453a-a647-a8f0b25f0e7b","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_width"}},"id":"857633c6-1b1c-4c31-b17a-b48e340d76b6","type":"Circle"},{"attributes":{},"id":"6610ab92-0c78-4f8d-b7d2-7dbde6c778c0","type":"PanTool"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"857633c6-1b1c-4c31-b17a-b48e340d76b6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"96c2b33f-2e8e-4518-9f0d-fa2c9c84d62f","type":"CDSView"}},"id":"c29fd929-4f7b-4f66-9115-02fb09990e7f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"96c2b33f-2e8e-4518-9f0d-fa2c9c84d62f","type":"CDSView"},{"attributes":{},"id":"c06653c1-1157-4b7c-99bc-d35c4f258c45","type":"BasicTicker"},{"attributes":{"axis_label":"sepal_width","formatter":{"id":"edb271cc-366e-40ef-8569-1a7f40219055","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"505bf217-0667-453a-a647-a8f0b25f0e7b","type":"Plot"},"ticker":{"id":"801b5db4-fc3c-486b-b1fb-32e154b22079","type":"BasicTicker"}},"id":"ba6619c7-68cd-4d2f-96d2-faf17cd34c69","type":"LinearAxis"},{"attributes":{},"id":"801b5db4-fc3c-486b-b1fb-32e154b22079","type":"BasicTicker"},{"attributes":{"plot":{"id":"505bf217-0667-453a-a647-a8f0b25f0e7b","type":"Plot"},"ticker":{"id":"c06653c1-1157-4b7c-99bc-d35c4f258c45","type":"BasicTicker"}},"id":"76986761-30f7-4996-b5e1-2488c1ede813","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"505bf217-0667-453a-a647-a8f0b25f0e7b","type":"Plot"},"ticker":{"id":"801b5db4-fc3c-486b-b1fb-32e154b22079","type":"BasicTicker"}},"id":"2e5c7ef4-62c3-4dc7-b2c3-0b903a1b40b9","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a245c224-cab2-4ade-bd92-e46be4865972","type":"PanTool"},{"id":"87ae7e9f-ad83-452e-9720-14ce654e0d0f","type":"WheelZoomTool"}]},"id":"fdac2b6a-400d-4f43-a977-2a394e82f2e5","type":"Toolbar"},{"attributes":{},"id":"8c3e9909-af51-402c-b53a-b46cf7074aa3","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"e7aceb16-d431-478b-a454-be01af1857a8","type":"GlyphRenderer"},{"id":"83ecadbb-bf7e-4e1c-b7cf-940b3489c558","type":"Grid"},{"id":"f0d507a7-bca3-4ffe-bbd0-a4462f2083ed","type":"Grid"}],"title":{"id":"b134880e-beab-432b-890c-726f2aae2290","type":"Title"},"toolbar":{"id":"fdac2b6a-400d-4f43-a977-2a394e82f2e5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"0d93a4c1-2e0e-4c67-ad7b-64f6c468cda1","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"b63d1d91-0162-4a62-946a-1559eafe1557","type":"LinearScale"}},"id":"b0a3c2b2-814f-4563-8977-8c4a8ee87abc","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_width"}},"id":"09177eaf-3718-413d-afe2-a54c296a2038","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"19cbdfdb-8217-4217-a7bc-5875b097add2","type":"PanTool"},{"id":"62cca111-875f-4d3f-818f-9cdebcfa7304","type":"WheelZoomTool"}]},"id":"b3c6e369-c0d8-4bad-a3c3-f071fc0efc9c","type":"Toolbar"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"09177eaf-3718-413d-afe2-a54c296a2038","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e356826f-f7fd-4576-8ea5-562381ca1ccf","type":"CDSView"}},"id":"e7aceb16-d431-478b-a454-be01af1857a8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"e356826f-f7fd-4576-8ea5-562381ca1ccf","type":"CDSView"},{"attributes":{},"id":"76db2377-0152-4951-9804-e64312102e53","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b0a3c2b2-814f-4563-8977-8c4a8ee87abc","type":"Plot"},"ticker":{"id":"8192ea2e-7dd6-432e-ad09-49a9c1bb84f4","type":"BasicTicker"}},"id":"f0d507a7-bca3-4ffe-bbd0-a4462f2083ed","type":"Grid"},{"attributes":{},"id":"a245c224-cab2-4ade-bd92-e46be4865972","type":"PanTool"},{"attributes":{"plot":{"id":"b0a3c2b2-814f-4563-8977-8c4a8ee87abc","type":"Plot"},"ticker":{"id":"76db2377-0152-4951-9804-e64312102e53","type":"BasicTicker"}},"id":"83ecadbb-bf7e-4e1c-b7cf-940b3489c558","type":"Grid"},{"attributes":{},"id":"8192ea2e-7dd6-432e-ad09-49a9c1bb84f4","type":"BasicTicker"},{"attributes":{},"id":"87ae7e9f-ad83-452e-9720-14ce654e0d0f","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"eca8ce25-dbaf-43e4-82a1-8f706e95f88a","type":"GlyphRenderer"},{"id":"433a056f-36ca-4c8d-b4d2-618767c80578","type":"Grid"},{"id":"830bd7d2-5afe-4e70-8963-155b7ec47079","type":"Grid"}],"title":{"id":"8687b3eb-0f56-4b67-acc5-4d865dc30365","type":"Title"},"toolbar":{"id":"b3c6e369-c0d8-4bad-a3c3-f071fc0efc9c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"84ae6683-fb98-4a5b-9e65-4f281bf44781","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"9a9321ab-9fca-46df-8b12-d832f12178d3","type":"LinearScale"}},"id":"c80a6cc2-ed05-4706-85e7-c3b3eaba683a","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_width"}},"id":"4aa3c516-90ec-4771-b7a4-6eee73844fce","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f56c3bab-7287-4a2c-a333-23485cf27eb8","type":"PanTool"},{"id":"aa0cb4ee-bab0-46ea-be4b-e8ab8d6a559a","type":"WheelZoomTool"}]},"id":"f9f0a6d1-b711-4b9f-9550-513b0f8ef1c7","type":"Toolbar"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"4aa3c516-90ec-4771-b7a4-6eee73844fce","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6c7dcff9-7053-4463-9b7a-ab51f136f015","type":"CDSView"}},"id":"eca8ce25-dbaf-43e4-82a1-8f706e95f88a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"6c7dcff9-7053-4463-9b7a-ab51f136f015","type":"CDSView"},{"attributes":{},"id":"a115c829-7ef8-43b2-a78a-0ebab75d4568","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c80a6cc2-ed05-4706-85e7-c3b3eaba683a","type":"Plot"},"ticker":{"id":"1f4cc21b-49a7-4291-8f0e-ad14c8367f18","type":"BasicTicker"}},"id":"830bd7d2-5afe-4e70-8963-155b7ec47079","type":"Grid"},{"attributes":{},"id":"19cbdfdb-8217-4217-a7bc-5875b097add2","type":"PanTool"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"bc11111b-2cb6-421f-a71d-9932f6c6b224","type":"CDSView"},{"attributes":{"plot":{"id":"c80a6cc2-ed05-4706-85e7-c3b3eaba683a","type":"Plot"},"ticker":{"id":"a115c829-7ef8-43b2-a78a-0ebab75d4568","type":"BasicTicker"}},"id":"433a056f-36ca-4c8d-b4d2-618767c80578","type":"Grid"},{"attributes":{},"id":"1f4cc21b-49a7-4291-8f0e-ad14c8367f18","type":"BasicTicker"},{"attributes":{},"id":"62cca111-875f-4d3f-818f-9cdebcfa7304","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"a831916f-9688-4f54-8701-704414aac655","type":"GlyphRenderer"},{"id":"02291069-1c61-4c5c-827b-7da422df9e03","type":"Grid"},{"id":"11587140-1b20-4173-97e8-d0521cd16f57","type":"Grid"}],"title":{"id":"351a90cf-71a0-4d93-832a-ebd1d96b1554","type":"Title"},"toolbar":{"id":"f9f0a6d1-b711-4b9f-9550-513b0f8ef1c7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"649f737f-7728-4991-92d3-018b3a33c732","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"508d76ac-01bd-4fbf-8e3e-d83e942a8d5d","type":"LinearScale"}},"id":"dd3bb733-9363-45bb-80e2-d8ce60465a5b","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_width"}},"id":"65af127f-4262-4a01-8439-cee8fd2ec761","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"59354fd1-079e-404c-92cd-522b3ce0aa79","type":"PanTool"},{"id":"9788ba3b-75d7-46de-a233-ab37fa07e03b","type":"WheelZoomTool"}]},"id":"5d7ef036-d804-4681-bc22-a4872c140c73","type":"Toolbar"},{"attributes":{},"id":"0c01de8e-3845-43b6-b408-1442cb152834","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"65af127f-4262-4a01-8439-cee8fd2ec761","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0974a18f-e948-4031-902c-5dc612361925","type":"CDSView"}},"id":"a831916f-9688-4f54-8701-704414aac655","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"0974a18f-e948-4031-902c-5dc612361925","type":"CDSView"},{"attributes":{},"id":"ae38d730-dabc-4e31-8dae-7868a103cd69","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"dd3bb733-9363-45bb-80e2-d8ce60465a5b","type":"Plot"},"ticker":{"id":"c22d0b5b-89f7-41c6-8b76-10859354236c","type":"BasicTicker"}},"id":"11587140-1b20-4173-97e8-d0521cd16f57","type":"Grid"},{"attributes":{},"id":"f56c3bab-7287-4a2c-a333-23485cf27eb8","type":"PanTool"},{"attributes":{"plot":{"id":"dd3bb733-9363-45bb-80e2-d8ce60465a5b","type":"Plot"},"ticker":{"id":"ae38d730-dabc-4e31-8dae-7868a103cd69","type":"BasicTicker"}},"id":"02291069-1c61-4c5c-827b-7da422df9e03","type":"Grid"},{"attributes":{},"id":"c22d0b5b-89f7-41c6-8b76-10859354236c","type":"BasicTicker"},{"attributes":{},"id":"aa0cb4ee-bab0-46ea-be4b-e8ab8d6a559a","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"b8f4cd8e-2ffe-4599-b929-c1b47bef11cf","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"eab51ef8-85ce-4d97-ac2b-799e4b4e5b6b","type":"GlyphRenderer"},{"id":"ebb49940-2fca-4d01-8392-f0eb73dde7b4","type":"Grid"},{"id":"b8f4cd8e-2ffe-4599-b929-c1b47bef11cf","type":"LinearAxis"},{"id":"289b0426-6386-4457-b755-569e858adf85","type":"Grid"}],"title":{"id":"3d66663b-4877-4200-826e-7b6de5f26f87","type":"Title"},"toolbar":{"id":"5d7ef036-d804-4681-bc22-a4872c140c73","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"e0febed0-a517-49e1-962b-a3c05f94fda2","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"4e1cefd7-02ce-4770-a2e1-96692aa9e84a","type":"LinearScale"}},"id":"2d46d97f-f41e-402e-b6ed-a903ea0a1da3","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"f18bdcb3-483c-4dab-ae66-a4206bb517b4","type":"Circle"},{"attributes":{},"id":"59354fd1-079e-404c-92cd-522b3ce0aa79","type":"PanTool"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"f18bdcb3-483c-4dab-ae66-a4206bb517b4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"479ed6c0-5617-4aca-95ab-c038647c4f77","type":"CDSView"}},"id":"eab51ef8-85ce-4d97-ac2b-799e4b4e5b6b","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"479ed6c0-5617-4aca-95ab-c038647c4f77","type":"CDSView"},{"attributes":{},"id":"ec0d1747-f744-4225-8336-03695544154b","type":"BasicTicker"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"06ba9784-ab99-4726-b93d-a479edc08eeb","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"2d46d97f-f41e-402e-b6ed-a903ea0a1da3","type":"Plot"},"ticker":{"id":"de257c31-597a-4a94-b30f-78e54b0bfb74","type":"BasicTicker"}},"id":"b8f4cd8e-2ffe-4599-b929-c1b47bef11cf","type":"LinearAxis"},{"attributes":{},"id":"de257c31-597a-4a94-b30f-78e54b0bfb74","type":"BasicTicker"},{"attributes":{"plot":{"id":"2d46d97f-f41e-402e-b6ed-a903ea0a1da3","type":"Plot"},"ticker":{"id":"ec0d1747-f744-4225-8336-03695544154b","type":"BasicTicker"}},"id":"ebb49940-2fca-4d01-8392-f0eb73dde7b4","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"2d46d97f-f41e-402e-b6ed-a903ea0a1da3","type":"Plot"},"ticker":{"id":"de257c31-597a-4a94-b30f-78e54b0bfb74","type":"BasicTicker"}},"id":"289b0426-6386-4457-b755-569e858adf85","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2fdb9693-4d76-4fc6-bd81-aeb7ecc5a984","type":"PanTool"},{"id":"b5c90a5d-9f61-41a2-a952-42bc8354142c","type":"WheelZoomTool"}]},"id":"a2d7132d-4225-4f8f-bc11-bceffaffd72b","type":"Toolbar"},{"attributes":{},"id":"9788ba3b-75d7-46de-a233-ab37fa07e03b","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"7e15cb60-20d1-4e77-8256-6e2de104932b","type":"GlyphRenderer"},{"id":"55ba754e-4a34-425b-8462-52c0ba430c4d","type":"Grid"},{"id":"30200b34-92fe-4f4c-a7b4-df3aaea24b65","type":"Grid"}],"title":{"id":"97e79f08-0f7f-4b89-98b9-9bcc5e6359c6","type":"Title"},"toolbar":{"id":"a2d7132d-4225-4f8f-bc11-bceffaffd72b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"95e8d223-5449-44e4-b426-890bc8e4de6e","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"3f9363e1-24bb-4b35-96fe-110953dc3005","type":"LinearScale"}},"id":"870e10fd-ffbe-411e-bec7-e5a0fba20adb","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_width"}},"id":"8c302e4f-666a-4a9f-a2ad-f71cdfde76c8","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"6f702045-9633-4512-8853-fb91a3a9c7e6","type":"GlyphRenderer"},{"id":"abc4892b-ef58-4c67-9a5e-3836e9b26e10","type":"Grid"},{"id":"b55d6a56-be78-4527-84b5-fade583a9ddf","type":"Grid"}],"title":{"id":"bb8a4094-e3c6-4040-b5b0-617367c99d6e","type":"Title"},"toolbar":{"id":"f877e300-594a-4ac2-9a8c-1b1d424102f6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"5492e372-d4e3-423c-afe4-06da30826d36","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"8b56fc10-3389-4213-8c94-d562ff6a25fd","type":"LinearScale"}},"id":"9ffd9152-dbe6-4db7-9d10-104d75af5544","type":"Plot"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"8c302e4f-666a-4a9f-a2ad-f71cdfde76c8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"cb2b2bba-b196-4f05-aa07-be256e04d77d","type":"CDSView"}},"id":"7e15cb60-20d1-4e77-8256-6e2de104932b","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"cb2b2bba-b196-4f05-aa07-be256e04d77d","type":"CDSView"},{"attributes":{},"id":"e6c4fd21-a476-4dd0-95fa-8325d310ae67","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"870e10fd-ffbe-411e-bec7-e5a0fba20adb","type":"Plot"},"ticker":{"id":"93a59f0c-e38b-4c4a-98db-15f0dec559e4","type":"BasicTicker"}},"id":"30200b34-92fe-4f4c-a7b4-df3aaea24b65","type":"Grid"},{"attributes":{},"id":"2fdb9693-4d76-4fc6-bd81-aeb7ecc5a984","type":"PanTool"},{"attributes":{"plot":{"id":"870e10fd-ffbe-411e-bec7-e5a0fba20adb","type":"Plot"},"ticker":{"id":"e6c4fd21-a476-4dd0-95fa-8325d310ae67","type":"BasicTicker"}},"id":"55ba754e-4a34-425b-8462-52c0ba430c4d","type":"Grid"},{"attributes":{},"id":"93a59f0c-e38b-4c4a-98db-15f0dec559e4","type":"BasicTicker"},{"attributes":{},"id":"b5c90a5d-9f61-41a2-a952-42bc8354142c","type":"WheelZoomTool"},{"attributes":{},"id":"c217aa1e-e248-488d-af42-96aa6ea5ed72","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0754cb54-61fb-4383-945d-81ef896155fe","type":"PanTool"},{"id":"e89ae133-7541-4e56-bcce-078e557b24c1","type":"WheelZoomTool"}]},"id":"f877e300-594a-4ac2-9a8c-1b1d424102f6","type":"Toolbar"},{"attributes":{},"id":"e9ffe7ea-8708-4424-acb5-e4a7df6859a8","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_width"}},"id":"d3c8616d-f634-4fc4-80df-35d201a6927a","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"95907a50-747f-4344-a574-18445a29e6f1","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2f42d70d-8ea8-40cc-bf3c-f468bc22714e","type":"PanTool"},{"id":"d277e438-6ed0-45c0-b0d1-4a2a0a0fad5e","type":"WheelZoomTool"}]},"id":"71c2a027-1809-4474-ae67-0f67af2a3374","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"dcc85a47-2a24-441b-a395-a4ebe8d521aa","type":"Title"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"d3c8616d-f634-4fc4-80df-35d201a6927a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8997362e-84d7-4042-90c2-b412e6e2614c","type":"CDSView"}},"id":"6f702045-9633-4512-8853-fb91a3a9c7e6","type":"GlyphRenderer"},{"attributes":{},"id":"81a257af-0a29-4140-af7c-354e7477d608","type":"LinearScale"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"8997362e-84d7-4042-90c2-b412e6e2614c","type":"CDSView"},{"attributes":{},"id":"55f85291-0c5c-46c0-9abe-43a939d14f07","type":"LinearScale"},{"attributes":{},"id":"97384262-66b0-406a-8779-f4023a45800f","type":"BasicTicker"},{"attributes":{},"id":"fe3ca62f-4129-4f60-ba2d-d0fff673c6d0","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"9ffd9152-dbe6-4db7-9d10-104d75af5544","type":"Plot"},"ticker":{"id":"13a45bb0-997a-47c4-95c7-bc4e3e55f8f3","type":"BasicTicker"}},"id":"b55d6a56-be78-4527-84b5-fade583a9ddf","type":"Grid"},{"attributes":{},"id":"0754cb54-61fb-4383-945d-81ef896155fe","type":"PanTool"},{"attributes":{},"id":"15cdd027-f9c9-467c-96b5-1d38469c862e","type":"LinearScale"},{"attributes":{"plot":{"id":"9ffd9152-dbe6-4db7-9d10-104d75af5544","type":"Plot"},"ticker":{"id":"97384262-66b0-406a-8779-f4023a45800f","type":"BasicTicker"}},"id":"abc4892b-ef58-4c67-9a5e-3836e9b26e10","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"c71268a7-6aa2-4597-adcb-55f52ff28e16","type":"Title"},{"attributes":{},"id":"13a45bb0-997a-47c4-95c7-bc4e3e55f8f3","type":"BasicTicker"},{"attributes":{},"id":"e89ae133-7541-4e56-bcce-078e557b24c1","type":"WheelZoomTool"},{"attributes":{},"id":"31edae1d-57d8-4961-b925-6d97127e9843","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"b94bf2ba-02f6-4cae-bcc3-b40dc4b386e1","type":"GlyphRenderer"},{"id":"c42b882f-eb40-43e8-ac5b-94fe5c5ac08a","type":"Grid"},{"id":"b6af74c7-412a-48bd-b32c-6a682b2535bd","type":"Grid"}],"title":{"id":"fad4308e-4a6f-4760-9d26-9a03ca9bbb90","type":"Title"},"toolbar":{"id":"71c2a027-1809-4474-ae67-0f67af2a3374","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"9ba8988a-21da-490f-b5f1-68ddf8fbebc5","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"c7bb2ae2-4c67-46f9-a994-aefc5425b01d","type":"LinearScale"}},"id":"b9d419b6-f3b9-4601-8c09-304ddb6ba8e6","type":"Plot"},{"attributes":{},"id":"edb271cc-366e-40ef-8569-1a7f40219055","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"eb0d2a37-7eda-4d1d-b22f-eee258710cf2","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_width"}},"id":"4ea9233d-9feb-48b7-87bb-77e8fa0165fd","type":"Circle"},{"attributes":{},"id":"4af0704c-3699-4606-908c-8123ffe0b1c0","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e971e86c-0d56-4750-bea3-d839fe8b4cbf","type":"PanTool"},{"id":"15830184-3de3-454d-b465-c23664c3b0d3","type":"WheelZoomTool"}]},"id":"fa1de07a-81da-46ae-b97a-ef797a6590a1","type":"Toolbar"},{"attributes":{},"id":"508d76ac-01bd-4fbf-8e3e-d83e942a8d5d","type":"LinearScale"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"4ea9233d-9feb-48b7-87bb-77e8fa0165fd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"81e31c49-3072-4f7d-a878-46b8a52914fe","type":"CDSView"}},"id":"b94bf2ba-02f6-4cae-bcc3-b40dc4b386e1","type":"GlyphRenderer"},{"attributes":{},"id":"be39a190-09dd-452d-9259-02e0af8bb1fe","type":"LinearScale"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"81e31c49-3072-4f7d-a878-46b8a52914fe","type":"CDSView"},{"attributes":{"children":[{"id":"505bf217-0667-453a-a647-a8f0b25f0e7b","type":"Plot"},{"id":"b0a3c2b2-814f-4563-8977-8c4a8ee87abc","type":"Plot"},{"id":"c80a6cc2-ed05-4706-85e7-c3b3eaba683a","type":"Plot"},{"id":"dd3bb733-9363-45bb-80e2-d8ce60465a5b","type":"Plot"}]},"id":"8f154cab-3f81-4ca9-9a69-de9a7d10240e","type":"Row"},{"attributes":{},"id":"67b4fc16-43bc-4e70-957f-dd9edb78621f","type":"BasicTicker"},{"attributes":{},"id":"64b8d200-4185-4c4b-8472-720ec424e1fc","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"a0f0cb14-fa94-4aaf-9c24-6dfb5c129b77","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a8162f82-4566-4a1c-8e65-fbb306d653c9","type":"CDSView"}},"id":"aa4d0962-493a-4459-b166-33220f0ff43c","type":"GlyphRenderer"},{"attributes":{},"id":"08d65b0e-3aac-40b3-acf3-e308347d3231","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"b9d419b6-f3b9-4601-8c09-304ddb6ba8e6","type":"Plot"},"ticker":{"id":"337b4466-c217-4789-8095-4e134fe7ae35","type":"BasicTicker"}},"id":"b6af74c7-412a-48bd-b32c-6a682b2535bd","type":"Grid"},{"attributes":{},"id":"2f42d70d-8ea8-40cc-bf3c-f468bc22714e","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"b134880e-beab-432b-890c-726f2aae2290","type":"Title"},{"attributes":{},"id":"a3f5e5b3-732e-4705-8fca-1255faa2d885","type":"BasicTicker"},{"attributes":{},"id":"d64f8ebb-5327-4d09-9cc8-cf9deed52963","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"8687b3eb-0f56-4b67-acc5-4d865dc30365","type":"Title"},{"attributes":{"plot":{"id":"b9d419b6-f3b9-4601-8c09-304ddb6ba8e6","type":"Plot"},"ticker":{"id":"64b8d200-4185-4c4b-8472-720ec424e1fc","type":"BasicTicker"}},"id":"c42b882f-eb40-43e8-ac5b-94fe5c5ac08a","type":"Grid"},{"attributes":{},"id":"f22ac78f-ba81-46eb-ab1d-5553872920ab","type":"WheelZoomTool"},{"attributes":{},"id":"0d93a4c1-2e0e-4c67-ad7b-64f6c468cda1","type":"LinearScale"},{"attributes":{},"id":"337b4466-c217-4789-8095-4e134fe7ae35","type":"BasicTicker"},{"attributes":{},"id":"d277e438-6ed0-45c0-b0d1-4a2a0a0fad5e","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"e4c7f482-12ff-492a-b044-c4fb0393031b","type":"Plot"},"ticker":{"id":"f5de3509-d6b6-4b95-9720-b5f30bd953b0","type":"BasicTicker"}},"id":"3724855d-7779-48f5-86f0-81e0b661a252","type":"Grid"},{"attributes":{},"id":"b63d1d91-0162-4a62-946a-1559eafe1557","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"2cb2567b-55fc-483d-8fb8-b1c06144080f","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"725c5e1d-93a1-4103-ae91-f50dd4861bd1","type":"LinearAxis"}],"min_border_bottom":42,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":240,"renderers":[{"id":"9f61571f-61b1-4f11-aa10-99e344d81184","type":"GlyphRenderer"},{"id":"2cb2567b-55fc-483d-8fb8-b1c06144080f","type":"LinearAxis"},{"id":"20f08bed-8b89-45e7-8ec9-28c819a516fb","type":"Grid"},{"id":"725c5e1d-93a1-4103-ae91-f50dd4861bd1","type":"LinearAxis"},{"id":"58db76d0-6d1a-464b-9a3a-26bd02fae391","type":"Grid"}],"title":{"id":"bd64dfb5-3d88-4ac0-a921-3c6284d1d990","type":"Title"},"toolbar":{"id":"fa1de07a-81da-46ae-b97a-ef797a6590a1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"a4fc93bf-0950-4abe-a45e-c4d0c2eb948f","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"1374ba26-0a30-453b-bcdd-e4af58894de7","type":"LinearScale"}},"id":"88a489de-41f4-45d2-b7e8-e379db30e9c9","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_length"}},"id":"dd951d6e-1812-457c-88f3-21add8230a7c","type":"Circle"},{"attributes":{},"id":"9a9321ab-9fca-46df-8b12-d832f12178d3","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_length"}},"id":"bc0945ee-fd19-447e-871d-54918170b880","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"351a90cf-71a0-4d93-832a-ebd1d96b1554","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"88a489de-41f4-45d2-b7e8-e379db30e9c9","type":"Plot"},"ticker":{"id":"ce922244-5b33-439b-8c93-92de290e7b44","type":"BasicTicker"}},"id":"58db76d0-6d1a-464b-9a3a-26bd02fae391","type":"Grid"},{"attributes":{},"id":"0f364855-baf5-4f89-8fa7-31a94cfee928","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"dd951d6e-1812-457c-88f3-21add8230a7c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"9b8f97e9-b915-4021-a541-71791710e0ef","type":"CDSView"}},"id":"b6ac55cb-1bee-4de4-a1a8-c244c97cb78f","type":"GlyphRenderer"},{"attributes":{},"id":"84ae6683-fb98-4a5b-9e65-4f281bf44781","type":"LinearScale"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"bc0945ee-fd19-447e-871d-54918170b880","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"44377dc6-ff80-4271-9d7b-941e8081b6f4","type":"CDSView"}},"id":"9f61571f-61b1-4f11-aa10-99e344d81184","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"9b8f97e9-b915-4021-a541-71791710e0ef","type":"CDSView"},{"attributes":{},"id":"06ba9784-ab99-4726-b93d-a479edc08eeb","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"44377dc6-ff80-4271-9d7b-941e8081b6f4","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"3d66663b-4877-4200-826e-7b6de5f26f87","type":"Title"},{"attributes":{"plot":{"id":"88a489de-41f4-45d2-b7e8-e379db30e9c9","type":"Plot"},"ticker":{"id":"804074b7-75a1-4ea8-9925-6008d8fd7c69","type":"BasicTicker"}},"id":"20f08bed-8b89-45e7-8ec9-28c819a516fb","type":"Grid"},{"attributes":{},"id":"b6cedb25-b758-419f-8c4d-6eb3b8d7ca2f","type":"BasicTicker"},{"attributes":{"plot":{"id":"56a49588-e70e-4482-8420-3e5f27fd68ad","type":"Plot"},"ticker":{"id":"b6cedb25-b758-419f-8c4d-6eb3b8d7ca2f","type":"BasicTicker"}},"id":"63ecfffb-a7ff-40d5-9195-dcfc86d17cf4","type":"Grid"},{"attributes":{},"id":"649f737f-7728-4991-92d3-018b3a33c732","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0720cd32-a6a5-444f-8fd0-e90e6c56a942","type":"PanTool"},{"id":"b37d3576-6458-4cd1-964a-00893f871bd2","type":"WheelZoomTool"}]},"id":"0f91befb-e7f9-4b34-ae4d-fa8818f567c6","type":"Toolbar"},{"attributes":{},"id":"c7bb2ae2-4c67-46f9-a994-aefc5425b01d","type":"LinearScale"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"06bc20df-e618-4a6b-986b-c0d6e1c89840","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"88a489de-41f4-45d2-b7e8-e379db30e9c9","type":"Plot"},"ticker":{"id":"ce922244-5b33-439b-8c93-92de290e7b44","type":"BasicTicker"}},"id":"725c5e1d-93a1-4103-ae91-f50dd4861bd1","type":"LinearAxis"},{"attributes":{},"id":"e0febed0-a517-49e1-962b-a3c05f94fda2","type":"LinearScale"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"a505ea8b-68dd-4b51-81c9-086f83c33564","type":"BasicTickFormatter"},"plot":{"id":"88a489de-41f4-45d2-b7e8-e379db30e9c9","type":"Plot"},"ticker":{"id":"804074b7-75a1-4ea8-9925-6008d8fd7c69","type":"BasicTicker"}},"id":"2cb2567b-55fc-483d-8fb8-b1c06144080f","type":"LinearAxis"},{"attributes":{"children":[{"id":"2d46d97f-f41e-402e-b6ed-a903ea0a1da3","type":"Plot"},{"id":"870e10fd-ffbe-411e-bec7-e5a0fba20adb","type":"Plot"},{"id":"9ffd9152-dbe6-4db7-9d10-104d75af5544","type":"Plot"},{"id":"b9d419b6-f3b9-4601-8c09-304ddb6ba8e6","type":"Plot"}]},"id":"c2ca78d7-f654-474f-a016-5818c4b0d38f","type":"Row"},{"attributes":{},"id":"804074b7-75a1-4ea8-9925-6008d8fd7c69","type":"BasicTicker"},{"attributes":{},"id":"4e1cefd7-02ce-4770-a2e1-96692aa9e84a","type":"LinearScale"},{"attributes":{},"id":"ce922244-5b33-439b-8c93-92de290e7b44","type":"BasicTicker"},{"attributes":{},"id":"e971e86c-0d56-4750-bea3-d839fe8b4cbf","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"97e79f08-0f7f-4b89-98b9-9bcc5e6359c6","type":"Title"},{"attributes":{},"id":"15830184-3de3-454d-b465-c23664c3b0d3","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"bb8a4094-e3c6-4040-b5b0-617367c99d6e","type":"Title"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"37e5800c-a43c-4ed9-ab8e-a887959de31b","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"251c1cee-6830-4713-acd6-1f942d6ca68e","type":"GlyphRenderer"},{"id":"37e5800c-a43c-4ed9-ab8e-a887959de31b","type":"LinearAxis"},{"id":"ed2f1196-417f-4591-8d56-a78d9cf9a9fb","type":"Grid"},{"id":"52dce093-a6f4-4dd7-8f95-f2dd8a22b523","type":"Grid"}],"title":{"id":"c288ca94-0869-4b5f-afea-4f650460ec1d","type":"Title"},"toolbar":{"id":"0f91befb-e7f9-4b34-ae4d-fa8818f567c6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"a06314dd-60b3-4cd4-8d60-4c3d820bb625","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"5d24f23e-48f7-43ea-af19-bd89aff3c10a","type":"LinearScale"}},"id":"fb06b91c-8959-4200-b260-b1a4ebbba15f","type":"Plot"},{"attributes":{},"id":"95e8d223-5449-44e4-b426-890bc8e4de6e","type":"LinearScale"},{"attributes":{},"id":"3f9363e1-24bb-4b35-96fe-110953dc3005","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["petal_length","petal_width","sepal_length","sepal_width","color"],"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]}},"selected":null,"selection_policy":null},"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_length"}},"id":"2667ce7a-1789-4a66-aec2-7e07ddb57e47","type":"Circle"},{"attributes":{},"id":"ddfefe57-7e78-4b19-897b-26a3c8531838","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":[{"id":"76a00e4a-5a6d-416a-acf8-7bbe083fdef6","type":"GlyphRenderer"},{"id":"aa4d0962-493a-4459-b166-33220f0ff43c","type":"GlyphRenderer"},{"id":"29bdcd00-c38a-4df8-956d-3930fcc41876","type":"GlyphRenderer"},{"id":"b6ac55cb-1bee-4de4-a1a8-c244c97cb78f","type":"GlyphRenderer"},{"id":"c29fd929-4f7b-4f66-9115-02fb09990e7f","type":"GlyphRenderer"},{"id":"e7aceb16-d431-478b-a454-be01af1857a8","type":"GlyphRenderer"},{"id":"eca8ce25-dbaf-43e4-82a1-8f706e95f88a","type":"GlyphRenderer"},{"id":"a831916f-9688-4f54-8701-704414aac655","type":"GlyphRenderer"},{"id":"eab51ef8-85ce-4d97-ac2b-799e4b4e5b6b","type":"GlyphRenderer"},{"id":"7e15cb60-20d1-4e77-8256-6e2de104932b","type":"GlyphRenderer"},{"id":"6f702045-9633-4512-8853-fb91a3a9c7e6","type":"GlyphRenderer"},{"id":"b94bf2ba-02f6-4cae-bcc3-b40dc4b386e1","type":"GlyphRenderer"},{"id":"9f61571f-61b1-4f11-aa10-99e344d81184","type":"GlyphRenderer"},{"id":"251c1cee-6830-4713-acd6-1f942d6ca68e","type":"GlyphRenderer"},{"id":"6145cb47-b8d9-4e88-8ce2-44c776ab5b71","type":"GlyphRenderer"},{"id":"ea350290-4eeb-4790-ab6f-bd2141a92db1","type":"GlyphRenderer"}]},"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},{"attributes":{},"id":"8b56fc10-3389-4213-8c94-d562ff6a25fd","type":"LinearScale"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"2667ce7a-1789-4a66-aec2-7e07ddb57e47","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"7d1ebdb9-481a-4d8b-9b12-025a696f5da1","type":"CDSView"}},"id":"251c1cee-6830-4713-acd6-1f942d6ca68e","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"76a00e4a-5a6d-416a-acf8-7bbe083fdef6","type":"GlyphRenderer"},{"id":"aa4d0962-493a-4459-b166-33220f0ff43c","type":"GlyphRenderer"},{"id":"29bdcd00-c38a-4df8-956d-3930fcc41876","type":"GlyphRenderer"},{"id":"b6ac55cb-1bee-4de4-a1a8-c244c97cb78f","type":"GlyphRenderer"},{"id":"c29fd929-4f7b-4f66-9115-02fb09990e7f","type":"GlyphRenderer"},{"id":"e7aceb16-d431-478b-a454-be01af1857a8","type":"GlyphRenderer"},{"id":"eca8ce25-dbaf-43e4-82a1-8f706e95f88a","type":"GlyphRenderer"},{"id":"a831916f-9688-4f54-8701-704414aac655","type":"GlyphRenderer"},{"id":"eab51ef8-85ce-4d97-ac2b-799e4b4e5b6b","type":"GlyphRenderer"},{"id":"7e15cb60-20d1-4e77-8256-6e2de104932b","type":"GlyphRenderer"},{"id":"6f702045-9633-4512-8853-fb91a3a9c7e6","type":"GlyphRenderer"},{"id":"b94bf2ba-02f6-4cae-bcc3-b40dc4b386e1","type":"GlyphRenderer"},{"id":"9f61571f-61b1-4f11-aa10-99e344d81184","type":"GlyphRenderer"},{"id":"251c1cee-6830-4713-acd6-1f942d6ca68e","type":"GlyphRenderer"},{"id":"6145cb47-b8d9-4e88-8ce2-44c776ab5b71","type":"GlyphRenderer"},{"id":"ea350290-4eeb-4790-ab6f-bd2141a92db1","type":"GlyphRenderer"}]},"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"fad4308e-4a6f-4760-9d26-9a03ca9bbb90","type":"Title"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"7d1ebdb9-481a-4d8b-9b12-025a696f5da1","type":"CDSView"},{"attributes":{"children":[{"id":"ad3168c9-460d-44f0-b527-e2fa3feebd8c","type":"Row"},{"id":"8f154cab-3f81-4ca9-9a69-de9a7d10240e","type":"Row"},{"id":"c2ca78d7-f654-474f-a016-5818c4b0d38f","type":"Row"},{"id":"e9bf2bbd-1484-4534-84f8-1f3e01aaecc1","type":"Row"}]},"id":"3c5316b6-4e36-4bba-8d38-d8e39742c10f","type":"Column"},{"attributes":{},"id":"5492e372-d4e3-423c-afe4-06da30826d36","type":"LinearScale"},{"attributes":{"plot":{"id":"fb06b91c-8959-4200-b260-b1a4ebbba15f","type":"Plot"},"ticker":{"id":"7d30922c-9731-4b5f-b042-848d30a41293","type":"BasicTicker"}},"id":"ed2f1196-417f-4591-8d56-a78d9cf9a9fb","type":"Grid"},{"attributes":{"children":[{"id":"f8470680-0ee7-4aca-a49c-6963e837bb27","type":"Plot"},{"id":"af01e93a-1c72-43fb-8c37-098eeb7954d4","type":"Plot"},{"id":"e4c7f482-12ff-492a-b044-c4fb0393031b","type":"Plot"},{"id":"56a49588-e70e-4482-8420-3e5f27fd68ad","type":"Plot"}]},"id":"ad3168c9-460d-44f0-b527-e2fa3feebd8c","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4e392646-0773-427a-b9a7-4ac40aee8da3","type":"PanTool"},{"id":"62bfc5f7-b4e0-4c29-bb25-0160d3218826","type":"WheelZoomTool"}]},"id":"a173b4fb-e21f-4002-be4f-1f312fd86400","type":"Toolbar"},{"attributes":{},"id":"a505ea8b-68dd-4b51-81c9-086f83c33564","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"89a224c9-9d01-4949-bb97-88be01eb10b0","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"76a00e4a-5a6d-416a-acf8-7bbe083fdef6","type":"GlyphRenderer"},{"id":"5a086f11-4488-463c-b666-a83a25a8c2a0","type":"Grid"},{"id":"89a224c9-9d01-4949-bb97-88be01eb10b0","type":"LinearAxis"},{"id":"e1ed81e6-b119-4bcf-aeec-ab819eb510dc","type":"Grid"}],"title":{"id":"a2bd054e-287c-4c89-a039-500d395c5c13","type":"Title"},"toolbar":{"id":"476be244-cf96-4063-8d3b-8fd589f0c521","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"c217aa1e-e248-488d-af42-96aa6ea5ed72","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"c1f40c88-fe61-4b7b-b5dd-6d63242715b0","type":"LinearScale"}},"id":"f8470680-0ee7-4aca-a49c-6963e837bb27","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"bd64dfb5-3d88-4ac0-a921-3c6284d1d990","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"fb06b91c-8959-4200-b260-b1a4ebbba15f","type":"Plot"},"ticker":{"id":"ddfefe57-7e78-4b19-897b-26a3c8531838","type":"BasicTicker"}},"id":"52dce093-a6f4-4dd7-8f95-f2dd8a22b523","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b45e3f86-4e26-47ad-9861-b4d0ff8839b4","type":"PanTool"},{"id":"ea0ee3f4-d1a4-4d35-8de3-a9e931b110ab","type":"WheelZoomTool"}]},"id":"476be244-cf96-4063-8d3b-8fd589f0c521","type":"Toolbar"},{"attributes":{},"id":"9ba8988a-21da-490f-b5f1-68ddf8fbebc5","type":"LinearScale"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"37072b8b-ed26-4760-badb-103c0d0b6344","type":"BasicTickFormatter"},"plot":{"id":"fb06b91c-8959-4200-b260-b1a4ebbba15f","type":"Plot"},"ticker":{"id":"7d30922c-9731-4b5f-b042-848d30a41293","type":"BasicTicker"}},"id":"37e5800c-a43c-4ed9-ab8e-a887959de31b","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"afb68884-35b2-46d5-9c1c-883b7228813b","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"8f54630d-9c3e-44df-8d2a-3f5dabc34178","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_length"}},"id":"8e7955f4-b428-45b3-a90d-dbbac4624a80","type":"Circle"},{"attributes":{},"id":"7d30922c-9731-4b5f-b042-848d30a41293","type":"BasicTicker"},{"attributes":{},"id":"b45e3f86-4e26-47ad-9861-b4d0ff8839b4","type":"PanTool"},{"attributes":{},"id":"0720cd32-a6a5-444f-8fd0-e90e6c56a942","type":"PanTool"},{"attributes":{},"id":"a4fc93bf-0950-4abe-a45e-c4d0c2eb948f","type":"LinearScale"},{"attributes":{"children":[{"id":"88a489de-41f4-45d2-b7e8-e379db30e9c9","type":"Plot"},{"id":"fb06b91c-8959-4200-b260-b1a4ebbba15f","type":"Plot"},{"id":"d84494ab-20f6-464a-ab38-fae1c9913100","type":"Plot"},{"id":"aa6efc77-b1b0-407f-a4b6-f66e1ebbd05d","type":"Plot"}]},"id":"e9bf2bbd-1484-4534-84f8-1f3e01aaecc1","type":"Row"},{"attributes":{},"id":"b37d3576-6458-4cd1-964a-00893f871bd2","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"8e7955f4-b428-45b3-a90d-dbbac4624a80","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d6ce31ff-d8d2-4362-87b0-b89459f28959","type":"CDSView"}},"id":"76a00e4a-5a6d-416a-acf8-7bbe083fdef6","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"1406782c-366c-4bd9-aab5-b09fb22ec2d7","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"6145cb47-b8d9-4e88-8ce2-44c776ab5b71","type":"GlyphRenderer"},{"id":"1406782c-366c-4bd9-aab5-b09fb22ec2d7","type":"LinearAxis"},{"id":"62e6db3b-803e-4c20-9735-c537802517df","type":"Grid"},{"id":"c10461a5-b8fe-4d22-82ae-d14cb7faa6fe","type":"Grid"}],"title":{"id":"4811d78d-21b7-4767-b5ab-64f8b833007e","type":"Title"},"toolbar":{"id":"a173b4fb-e21f-4002-be4f-1f312fd86400","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"21151549-d156-4258-947d-af8f6c1e28fe","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"04aec5c2-c842-4b80-bf35-f93feaf374f1","type":"LinearScale"}},"id":"d84494ab-20f6-464a-ab38-fae1c9913100","type":"Plot"},{"attributes":{},"id":"1374ba26-0a30-453b-bcdd-e4af58894de7","type":"LinearScale"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"d6ce31ff-d8d2-4362-87b0-b89459f28959","type":"CDSView"},{"attributes":{},"id":"5d24f23e-48f7-43ea-af19-bd89aff3c10a","type":"LinearScale"},{"attributes":{},"id":"09f18405-831e-4a01-a46d-2bdc237cf71f","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_length"}},"id":"ef5f7406-645f-4188-b3e7-a004217fda79","type":"Circle"},{"attributes":{"axis_label":"sepal_length","formatter":{"id":"e9ffe7ea-8708-4424-acb5-e4a7df6859a8","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"f8470680-0ee7-4aca-a49c-6963e837bb27","type":"Plot"},"ticker":{"id":"2235d548-4ba0-4909-baf2-327412ef1f65","type":"BasicTicker"}},"id":"89a224c9-9d01-4949-bb97-88be01eb10b0","type":"LinearAxis"},{"attributes":{},"id":"37072b8b-ed26-4760-badb-103c0d0b6344","type":"BasicTickFormatter"},{"attributes":{},"id":"db88b84d-75b5-4d5a-a449-b877f22263a6","type":"BasicTicker"},{"attributes":{},"id":"a06314dd-60b3-4cd4-8d60-4c3d820bb625","type":"LinearScale"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"ef5f7406-645f-4188-b3e7-a004217fda79","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"02fee08f-7a00-4827-9238-437bbc60f757","type":"CDSView"}},"id":"6145cb47-b8d9-4e88-8ce2-44c776ab5b71","type":"GlyphRenderer"},{"attributes":{},"id":"2235d548-4ba0-4909-baf2-327412ef1f65","type":"BasicTicker"},{"attributes":{"plot":{"id":"f8470680-0ee7-4aca-a49c-6963e837bb27","type":"Plot"},"ticker":{"id":"09f18405-831e-4a01-a46d-2bdc237cf71f","type":"BasicTicker"}},"id":"5a086f11-4488-463c-b666-a83a25a8c2a0","type":"Grid"},{"attributes":{},"id":"06bc20df-e618-4a6b-986b-c0d6e1c89840","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"02fee08f-7a00-4827-9238-437bbc60f757","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"f8470680-0ee7-4aca-a49c-6963e837bb27","type":"Plot"},"ticker":{"id":"2235d548-4ba0-4909-baf2-327412ef1f65","type":"BasicTicker"}},"id":"e1ed81e6-b119-4bcf-aeec-ab819eb510dc","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"c288ca94-0869-4b5f-afea-4f650460ec1d","type":"Title"},{"attributes":{"plot":{"id":"d84494ab-20f6-464a-ab38-fae1c9913100","type":"Plot"},"ticker":{"id":"3716034f-dd9e-4750-a8fc-b45d8653e326","type":"BasicTicker"}},"id":"62e6db3b-803e-4c20-9735-c537802517df","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d64f8ebb-5327-4d09-9cc8-cf9deed52963","type":"PanTool"},{"id":"eeba5bb2-a9b2-4a13-bb5c-c15608c3184c","type":"WheelZoomTool"}]},"id":"f3ac2f26-a713-466c-a6c2-9446f80d6701","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"583056fa-9119-4c7b-869c-f7fcddcdcd33","type":"PanTool"},{"id":"158081d3-e0ee-44e7-8e24-963ee2482d89","type":"WheelZoomTool"}]},"id":"eac2da98-e1a0-47f3-b94a-8c922f3d02d6","type":"Toolbar"},{"attributes":{},"id":"983b7525-bc25-4d1c-a30a-554fa54764c5","type":"LinearScale"},{"attributes":{},"id":"ea0ee3f4-d1a4-4d35-8de3-a9e931b110ab","type":"WheelZoomTool"},{"attributes":{},"id":"21151549-d156-4258-947d-af8f6c1e28fe","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"d84494ab-20f6-464a-ab38-fae1c9913100","type":"Plot"},"ticker":{"id":"db88b84d-75b5-4d5a-a449-b877f22263a6","type":"BasicTicker"}},"id":"c10461a5-b8fe-4d22-82ae-d14cb7faa6fe","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"aa4d0962-493a-4459-b166-33220f0ff43c","type":"GlyphRenderer"},{"id":"e4514e1d-0d5e-467c-8065-57eedbceeca1","type":"Grid"},{"id":"d1d3190e-c553-4466-8175-7fb421acc6e0","type":"Grid"}],"title":{"id":"95907a50-747f-4344-a574-18445a29e6f1","type":"Title"},"toolbar":{"id":"f3ac2f26-a713-466c-a6c2-9446f80d6701","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"81a257af-0a29-4140-af7c-354e7477d608","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"fe3ca62f-4129-4f60-ba2d-d0fff673c6d0","type":"LinearScale"}},"id":"af01e93a-1c72-43fb-8c37-098eeb7954d4","type":"Plot"},{"attributes":{"axis_label":"sepal_width","formatter":{"id":"4b64fe4a-ba42-4bea-976b-8179b3e47138","type":"BasicTickFormatter"},"plot":{"id":"d84494ab-20f6-464a-ab38-fae1c9913100","type":"Plot"},"ticker":{"id":"3716034f-dd9e-4750-a8fc-b45d8653e326","type":"BasicTicker"}},"id":"1406782c-366c-4bd9-aab5-b09fb22ec2d7","type":"LinearAxis"},{"attributes":{},"id":"4b64fe4a-ba42-4bea-976b-8179b3e47138","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"4811d78d-21b7-4767-b5ab-64f8b833007e","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_length"}},"id":"e68a530a-bc3b-4bd3-b3ff-ffb89b793fbb","type":"Circle"},{"attributes":{},"id":"3716034f-dd9e-4750-a8fc-b45d8653e326","type":"BasicTicker"},{"attributes":{},"id":"4e392646-0773-427a-b9a7-4ac40aee8da3","type":"PanTool"},{"attributes":{},"id":"04aec5c2-c842-4b80-bf35-f93feaf374f1","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_length"}},"id":"a0f0cb14-fa94-4aaf-9c24-6dfb5c129b77","type":"Circle"},{"attributes":{},"id":"62bfc5f7-b4e0-4c29-bb25-0160d3218826","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"af01e93a-1c72-43fb-8c37-098eeb7954d4","type":"Plot"},"ticker":{"id":"a3f5e5b3-732e-4705-8fca-1255faa2d885","type":"BasicTicker"}},"id":"e4514e1d-0d5e-467c-8065-57eedbceeca1","type":"Grid"},{"attributes":{},"id":"eeba5bb2-a9b2-4a13-bb5c-c15608c3184c","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"94f46e48-9247-4a82-b6b3-4c46cef70930","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"ea350290-4eeb-4790-ab6f-bd2141a92db1","type":"GlyphRenderer"},{"id":"94f46e48-9247-4a82-b6b3-4c46cef70930","type":"LinearAxis"},{"id":"514f50c2-d0b1-4866-80ab-33913928296e","type":"Grid"},{"id":"9e4aff82-d580-4012-85af-ea8d5e39d1f0","type":"Grid"}],"title":{"id":"1053ad00-39e0-4867-8fc8-e3ca5008dd17","type":"Title"},"toolbar":{"id":"eac2da98-e1a0-47f3-b94a-8c922f3d02d6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"983b7525-bc25-4d1c-a30a-554fa54764c5","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"646a1334-937c-483e-b9bb-348be2e69f62","type":"LinearScale"}},"id":"aa6efc77-b1b0-407f-a4b6-f66e1ebbd05d","type":"Plot"},{"attributes":{},"id":"6e886a60-fb20-4377-b5ed-f04b2c6c5698","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"29bdcd00-c38a-4df8-956d-3930fcc41876","type":"GlyphRenderer"},{"id":"a598d2f4-66b0-4e1e-a754-69974b16d835","type":"Grid"},{"id":"3724855d-7779-48f5-86f0-81e0b661a252","type":"Grid"}],"title":{"id":"dcc85a47-2a24-441b-a395-a4ebe8d521aa","type":"Title"},"toolbar":{"id":"bcf6c166-e984-4d55-aaf8-c1ff1b14b7a1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"31edae1d-57d8-4961-b925-6d97127e9843","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"15cdd027-f9c9-467c-96b5-1d38469c862e","type":"LinearScale"}},"id":"e4c7f482-12ff-492a-b044-c4fb0393031b","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"1053ad00-39e0-4867-8fc8-e3ca5008dd17","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_length"}},"id":"077ccb5f-bfa3-485d-8bc6-6e76f6380008","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0c0f6585-50ed-42d6-989d-d316c2485fad","type":"PanTool"},{"id":"f22ac78f-ba81-46eb-ab1d-5553872920ab","type":"WheelZoomTool"}]},"id":"bcf6c166-e984-4d55-aaf8-c1ff1b14b7a1","type":"Toolbar"},{"attributes":{},"id":"646a1334-937c-483e-b9bb-348be2e69f62","type":"LinearScale"},{"attributes":{},"id":"5d5326ee-753e-4b69-9056-40cb78befb43","type":"BasicTicker"},{"attributes":{"children":[{"id":"8f54630d-9c3e-44df-8d2a-3f5dabc34178","type":"ToolbarBox"},{"id":"3c5316b6-4e36-4bba-8d38-d8e39742c10f","type":"Column"}]},"id":"00bbab40-3838-40b4-989e-0bc7809e9b9a","type":"Column"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"077ccb5f-bfa3-485d-8bc6-6e76f6380008","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2b66cc64-72f3-41d4-a07f-510144de4e66","type":"CDSView"}},"id":"ea350290-4eeb-4790-ab6f-bd2141a92db1","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"a8162f82-4566-4a1c-8e65-fbb306d653c9","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"af01e93a-1c72-43fb-8c37-098eeb7954d4","type":"Plot"},"ticker":{"id":"67b4fc16-43bc-4e70-957f-dd9edb78621f","type":"BasicTicker"}},"id":"d1d3190e-c553-4466-8175-7fb421acc6e0","type":"Grid"},{"attributes":{"source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"}},"id":"2b66cc64-72f3-41d4-a07f-510144de4e66","type":"CDSView"},{"attributes":{"tools":[{"id":"b45e3f86-4e26-47ad-9861-b4d0ff8839b4","type":"PanTool"},{"id":"ea0ee3f4-d1a4-4d35-8de3-a9e931b110ab","type":"WheelZoomTool"},{"id":"d64f8ebb-5327-4d09-9cc8-cf9deed52963","type":"PanTool"},{"id":"eeba5bb2-a9b2-4a13-bb5c-c15608c3184c","type":"WheelZoomTool"},{"id":"0c0f6585-50ed-42d6-989d-d316c2485fad","type":"PanTool"},{"id":"f22ac78f-ba81-46eb-ab1d-5553872920ab","type":"WheelZoomTool"},{"id":"801ad7b4-3dc2-4555-a264-ea29336dc601","type":"PanTool"},{"id":"d9f8ea32-ccee-424b-a4f0-9501504a0770","type":"WheelZoomTool"},{"id":"6610ab92-0c78-4f8d-b7d2-7dbde6c778c0","type":"PanTool"},{"id":"8c3e9909-af51-402c-b53a-b46cf7074aa3","type":"WheelZoomTool"},{"id":"a245c224-cab2-4ade-bd92-e46be4865972","type":"PanTool"},{"id":"87ae7e9f-ad83-452e-9720-14ce654e0d0f","type":"WheelZoomTool"},{"id":"19cbdfdb-8217-4217-a7bc-5875b097add2","type":"PanTool"},{"id":"62cca111-875f-4d3f-818f-9cdebcfa7304","type":"WheelZoomTool"},{"id":"f56c3bab-7287-4a2c-a333-23485cf27eb8","type":"PanTool"},{"id":"aa0cb4ee-bab0-46ea-be4b-e8ab8d6a559a","type":"WheelZoomTool"},{"id":"59354fd1-079e-404c-92cd-522b3ce0aa79","type":"PanTool"},{"id":"9788ba3b-75d7-46de-a233-ab37fa07e03b","type":"WheelZoomTool"},{"id":"2fdb9693-4d76-4fc6-bd81-aeb7ecc5a984","type":"PanTool"},{"id":"b5c90a5d-9f61-41a2-a952-42bc8354142c","type":"WheelZoomTool"},{"id":"0754cb54-61fb-4383-945d-81ef896155fe","type":"PanTool"},{"id":"e89ae133-7541-4e56-bcce-078e557b24c1","type":"WheelZoomTool"},{"id":"2f42d70d-8ea8-40cc-bf3c-f468bc22714e","type":"PanTool"},{"id":"d277e438-6ed0-45c0-b0d1-4a2a0a0fad5e","type":"WheelZoomTool"},{"id":"e971e86c-0d56-4750-bea3-d839fe8b4cbf","type":"PanTool"},{"id":"15830184-3de3-454d-b465-c23664c3b0d3","type":"WheelZoomTool"},{"id":"0720cd32-a6a5-444f-8fd0-e90e6c56a942","type":"PanTool"},{"id":"b37d3576-6458-4cd1-964a-00893f871bd2","type":"WheelZoomTool"},{"id":"4e392646-0773-427a-b9a7-4ac40aee8da3","type":"PanTool"},{"id":"62bfc5f7-b4e0-4c29-bb25-0160d3218826","type":"WheelZoomTool"},{"id":"583056fa-9119-4c7b-869c-f7fcddcdcd33","type":"PanTool"},{"id":"158081d3-e0ee-44e7-8e24-963ee2482d89","type":"WheelZoomTool"}]},"id":"afb68884-35b2-46d5-9c1c-883b7228813b","type":"ProxyToolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"801ad7b4-3dc2-4555-a264-ea29336dc601","type":"PanTool"},{"id":"d9f8ea32-ccee-424b-a4f0-9501504a0770","type":"WheelZoomTool"}]},"id":"13f7d053-2c5e-40eb-aa12-2e5c151cc1a2","type":"Toolbar"},{"attributes":{"plot":{"id":"aa6efc77-b1b0-407f-a4b6-f66e1ebbd05d","type":"Plot"},"ticker":{"id":"66a5228e-e81e-4400-a583-89907448336b","type":"BasicTicker"}},"id":"514f50c2-d0b1-4866-80ab-33913928296e","type":"Grid"},{"attributes":{},"id":"0c0f6585-50ed-42d6-989d-d316c2485fad","type":"PanTool"},{"attributes":{},"id":"c1f40c88-fe61-4b7b-b5dd-6d63242715b0","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"b6ac55cb-1bee-4de4-a1a8-c244c97cb78f","type":"GlyphRenderer"},{"id":"63ecfffb-a7ff-40d5-9195-dcfc86d17cf4","type":"Grid"},{"id":"175401c1-82dd-4838-8242-f01e72a12215","type":"Grid"}],"title":{"id":"c71268a7-6aa2-4597-adcb-55f52ff28e16","type":"Title"},"toolbar":{"id":"13f7d053-2c5e-40eb-aa12-2e5c151cc1a2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6856c8a4-e843-465e-be84-b4e4991304e0","type":"DataRange1d"},"x_scale":{"id":"4af0704c-3699-4606-908c-8123ffe0b1c0","type":"LinearScale"},"y_range":{"id":"0ad640ad-ca36-4c29-83e4-754d2dfda15d","type":"DataRange1d"},"y_scale":{"id":"55f85291-0c5c-46c0-9abe-43a939d14f07","type":"LinearScale"}},"id":"56a49588-e70e-4482-8420-3e5f27fd68ad","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"aa6efc77-b1b0-407f-a4b6-f66e1ebbd05d","type":"Plot"},"ticker":{"id":"5d5326ee-753e-4b69-9056-40cb78befb43","type":"BasicTicker"}},"id":"9e4aff82-d580-4012-85af-ea8d5e39d1f0","type":"Grid"},{"attributes":{"plot":{"id":"e4c7f482-12ff-492a-b044-c4fb0393031b","type":"Plot"},"ticker":{"id":"0c01de8e-3845-43b6-b408-1442cb152834","type":"BasicTicker"}},"id":"a598d2f4-66b0-4e1e-a754-69974b16d835","type":"Grid"},{"attributes":{"axis_label":"sepal_length","formatter":{"id":"6e886a60-fb20-4377-b5ed-f04b2c6c5698","type":"BasicTickFormatter"},"plot":{"id":"aa6efc77-b1b0-407f-a4b6-f66e1ebbd05d","type":"Plot"},"ticker":{"id":"66a5228e-e81e-4400-a583-89907448336b","type":"BasicTicker"}},"id":"94f46e48-9247-4a82-b6b3-4c46cef70930","type":"LinearAxis"},{"attributes":{},"id":"f5de3509-d6b6-4b95-9720-b5f30bd953b0","type":"BasicTicker"},{"attributes":{},"id":"66a5228e-e81e-4400-a583-89907448336b","type":"BasicTicker"},{"attributes":{},"id":"583056fa-9119-4c7b-869c-f7fcddcdcd33","type":"PanTool"},{"attributes":{"data_source":{"id":"5814d9cd-96de-4325-abf4-78dc9568efc6","type":"ColumnDataSource"},"glyph":{"id":"e68a530a-bc3b-4bd3-b3ff-ffb89b793fbb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"bc11111b-2cb6-421f-a71d-9932f6c6b224","type":"CDSView"}},"id":"29bdcd00-c38a-4df8-956d-3930fcc41876","type":"GlyphRenderer"},{"attributes":{},"id":"158081d3-e0ee-44e7-8e24-963ee2482d89","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"a2bd054e-287c-4c89-a039-500d395c5c13","type":"Title"}],"root_ids":["00bbab40-3838-40b4-989e-0bc7809e9b9a"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"625fb482-9c2e-4561-9e47-9a18a5d31ff1","elementid":"1daf9164-0f33-4066-8aac-c98ed6005070","modelid":"00bbab40-3838-40b4-989e-0bc7809e9b9a"}];
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