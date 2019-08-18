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
      };var element = document.getElementById("1739998d-542b-4f1d-99ee-53a8edd3c96b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1739998d-542b-4f1d-99ee-53a8edd3c96b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6a3c2baf-f4e7-4a95-a38c-41d122a0422f":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8f6d1d2b-728e-4f69-9d13-119c46d5191e","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":null,"selection_policy":null},"id":"4a5c88d0-94a1-4bad-bd28-7b9904e74075","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"a6ec3fe7-986f-4b27-84fc-f0dbf47da63d","subtype":"Figure","type":"Plot"},{"id":"b9116a16-6e8b-4091-aeb3-72dfd7236b50","subtype":"Figure","type":"Plot"},{"id":"247c368a-e64d-4ca7-9e99-9e352baae06c","subtype":"Figure","type":"Plot"}]},"id":"c6958249-5c7b-436b-945f-7b23d7525eca","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"513ed8be-4e33-4708-8b19-98e18406c417","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"ca4daa34-96a2-4098-9b44-149fedbafa95","type":"DataRange1d"},{"attributes":{},"id":"0f08b7d4-9c35-48a2-b0c8-bf03a30e6aab","type":"BasicTicker"},{"attributes":{"formatter":{"id":"058ee2a2-4177-49e8-82b6-19d5a9453778","type":"BasicTickFormatter"},"plot":{"id":"247c368a-e64d-4ca7-9e99-9e352baae06c","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc9c6bbf-6176-4134-99b2-01ab84a68103","type":"BasicTicker"}},"id":"4e8d528d-0e4d-45b6-9ca7-0bc7b3895df9","type":"LinearAxis"},{"attributes":{},"id":"1a19166e-ba41-4488-b561-ae703142d65f","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14d3526f-b013-41c7-9eab-f2b21ee475c2","type":"Circle"},{"attributes":{"callback":null},"id":"dd797d41-432d-4fbb-854c-bc0da366f11c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"250cdde5-ed88-416e-826c-f613a78f0074","type":"BasicTickFormatter"},"plot":{"id":"b9116a16-6e8b-4091-aeb3-72dfd7236b50","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8e151bb-d564-4c2f-b8a3-d4519134e18f","type":"BasicTicker"}},"id":"be3eba2c-e5bf-4b7a-8e06-7734efffb0a0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"48fbd130-6133-4761-987b-09b746cf5b1e","type":"BasicTickFormatter"},"plot":{"id":"a6ec3fe7-986f-4b27-84fc-f0dbf47da63d","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a19166e-ba41-4488-b561-ae703142d65f","type":"BasicTicker"}},"id":"fa08dc9a-533e-4099-9c0a-56f2655900b9","type":"LinearAxis"},{"attributes":{"plot":{"id":"a6ec3fe7-986f-4b27-84fc-f0dbf47da63d","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a19166e-ba41-4488-b561-ae703142d65f","type":"BasicTicker"}},"id":"a2c45c26-4e88-463f-a9c6-3b372e8a17c1","type":"Grid"},{"attributes":{},"id":"f0d7657d-860a-4836-9e20-e77820738cb5","type":"SaveTool"},{"attributes":{},"id":"2b3997b1-1726-4cdb-b03c-fb0bfbe8d928","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"a6ec3fe7-986f-4b27-84fc-f0dbf47da63d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f08b7d4-9c35-48a2-b0c8-bf03a30e6aab","type":"BasicTicker"}},"id":"4e8a6922-4681-479b-b29d-318c95cc14ad","type":"Grid"},{"attributes":{},"id":"df53da8c-d136-4c51-89e6-a058ea5f19f7","type":"BasicTicker"},{"attributes":{},"id":"d5ace039-a1cf-4f86-9c0d-a85a92e8217f","type":"SaveTool"},{"attributes":{},"id":"b37ff2a9-6211-4277-a028-3205812a6d86","type":"WheelZoomTool"},{"attributes":{"source":{"id":"c4637ad8-7550-409f-a175-7bca2f873471","type":"ColumnDataSource"}},"id":"33fa019e-c4ad-4cde-999e-6a4aad616a77","type":"CDSView"},{"attributes":{},"id":"6ee1cec3-27be-425d-91a8-8f7e522bf68f","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"99f53c42-bd47-4ca3-98d0-a7fce0e83f1a","type":"ColumnDataSource"}},"id":"ed67ec69-431d-4a4b-afa3-8efdcab5df09","type":"CDSView"},{"attributes":{"data_source":{"id":"4a5c88d0-94a1-4bad-bd28-7b9904e74075","type":"ColumnDataSource"},"glyph":{"id":"3a46111d-2f22-47b4-87f8-9c4aa6d71293","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14d3526f-b013-41c7-9eab-f2b21ee475c2","type":"Circle"},"selection_glyph":null,"view":{"id":"3e5a316b-283a-43a1-ba28-345c175d5492","type":"CDSView"}},"id":"c401655a-f0fd-4ede-b354-9e677477ef03","type":"GlyphRenderer"},{"attributes":{},"id":"6f3e6f98-c777-40f1-9a60-decfde0356ff","type":"ResetTool"},{"attributes":{},"id":"058ee2a2-4177-49e8-82b6-19d5a9453778","type":"BasicTickFormatter"},{"attributes":{},"id":"900a2987-3595-47f3-a88f-7b03ac24c3dd","type":"LinearScale"},{"attributes":{},"id":"976ac68e-a9ea-4e0f-acde-0b6eef047eb9","type":"ResetTool"},{"attributes":{"overlay":{"id":"513ed8be-4e33-4708-8b19-98e18406c417","type":"BoxAnnotation"}},"id":"c3439787-4b68-4b82-800d-80a5d8e896fc","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":null,"selection_policy":null},"id":"c4637ad8-7550-409f-a175-7bca2f873471","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8939fabd-d503-41c6-9a9c-56d9c670e81f","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"247c368a-e64d-4ca7-9e99-9e352baae06c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2e59742-cc3c-4ce7-a4f8-dc988b49b5d7","type":"BasicTicker"}},"id":"4881a125-e93f-459e-a957-41e8c03afccd","type":"Grid"},{"attributes":{},"id":"86adcbbb-b06b-45cb-b441-2ef9a66ef30f","type":"PanTool"},{"attributes":{},"id":"946d0cfd-d1be-4fc8-a13e-0fd8ea26a037","type":"LinearScale"},{"attributes":{},"id":"2b46ae14-8da7-4b43-bc11-45716358487e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"247c368a-e64d-4ca7-9e99-9e352baae06c","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc9c6bbf-6176-4134-99b2-01ab84a68103","type":"BasicTicker"}},"id":"ad604b2e-a9d1-4a6c-885f-6eec2e3c17f5","type":"Grid"},{"attributes":{"callback":null},"id":"45def81f-57b7-41ce-972e-998cf756d6a6","type":"DataRange1d"},{"attributes":{},"id":"d8e151bb-d564-4c2f-b8a3-d4519134e18f","type":"BasicTicker"},{"attributes":{},"id":"b2e59742-cc3c-4ce7-a4f8-dc988b49b5d7","type":"BasicTicker"},{"attributes":{},"id":"1386f4e8-2f67-4630-a9ae-1fc627af1a09","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff326b93-210e-45b4-9617-0b05aa60fa78","type":"Triangle"},{"attributes":{},"id":"fc9c6bbf-6176-4134-99b2-01ab84a68103","type":"BasicTicker"},{"attributes":{"below":[{"id":"4e8d528d-0e4d-45b6-9ca7-0bc7b3895df9","type":"LinearAxis"}],"left":[{"id":"34109079-89b3-4659-9588-5c78347afd02","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"4e8d528d-0e4d-45b6-9ca7-0bc7b3895df9","type":"LinearAxis"},{"id":"ad604b2e-a9d1-4a6c-885f-6eec2e3c17f5","type":"Grid"},{"id":"34109079-89b3-4659-9588-5c78347afd02","type":"LinearAxis"},{"id":"4881a125-e93f-459e-a957-41e8c03afccd","type":"Grid"},{"id":"513ed8be-4e33-4708-8b19-98e18406c417","type":"BoxAnnotation"},{"id":"ca8e2b89-9ec9-4b85-ac18-2bd5902590d7","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"91ad3156-5231-45d4-af0e-7baa4ce82324","type":"Toolbar"},"x_range":{"id":"507ffe07-15b7-4ec2-aed4-4b2f6212449a","type":"DataRange1d"},"x_scale":{"id":"480c2d6a-5cec-4c23-a103-ab56599b2cef","type":"LinearScale"},"y_range":{"id":"45def81f-57b7-41ce-972e-998cf756d6a6","type":"DataRange1d"},"y_scale":{"id":"16f9eb63-38e5-444a-821b-650778267705","type":"LinearScale"}},"id":"247c368a-e64d-4ca7-9e99-9e352baae06c","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"2b46ae14-8da7-4b43-bc11-45716358487e","type":"BasicTickFormatter"},"plot":{"id":"b9116a16-6e8b-4091-aeb3-72dfd7236b50","subtype":"Figure","type":"Plot"},"ticker":{"id":"df53da8c-d136-4c51-89e6-a058ea5f19f7","type":"BasicTicker"}},"id":"257d6df0-59e7-4389-be27-1fe82601f678","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d479bd4c-90a9-4f19-9fc5-d601d06977cf","type":"BoxAnnotation"},{"attributes":{},"id":"339a9295-8ec8-480d-a5d7-0ee3932644a2","type":"PanTool"},{"attributes":{"source":{"id":"4a5c88d0-94a1-4bad-bd28-7b9904e74075","type":"ColumnDataSource"}},"id":"3e5a316b-283a-43a1-ba28-345c175d5492","type":"CDSView"},{"attributes":{"overlay":{"id":"d479bd4c-90a9-4f19-9fc5-d601d06977cf","type":"BoxAnnotation"}},"id":"d72234ad-9b71-4fa0-9983-be67d7f33fc7","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"d35bac8a-9e13-4356-b282-d62077319e4a","type":"BasicTickFormatter"},"plot":{"id":"a6ec3fe7-986f-4b27-84fc-f0dbf47da63d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f08b7d4-9c35-48a2-b0c8-bf03a30e6aab","type":"BasicTicker"}},"id":"ced24ea3-37ff-4721-818e-4790023b7b86","type":"LinearAxis"},{"attributes":{"plot":{"id":"b9116a16-6e8b-4091-aeb3-72dfd7236b50","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8e151bb-d564-4c2f-b8a3-d4519134e18f","type":"BasicTicker"}},"id":"ce6e184a-a03e-4afb-996b-9f8a475e94ea","type":"Grid"},{"attributes":{"callback":null},"id":"507ffe07-15b7-4ec2-aed4-4b2f6212449a","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4ac11103-4884-4465-81cc-24c706f00dbf","type":"DataRange1d"},{"attributes":{},"id":"fb655a9e-a1b5-4875-b159-752dff99523d","type":"SaveTool"},{"attributes":{"below":[{"id":"fa08dc9a-533e-4099-9c0a-56f2655900b9","type":"LinearAxis"}],"left":[{"id":"ced24ea3-37ff-4721-818e-4790023b7b86","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"fa08dc9a-533e-4099-9c0a-56f2655900b9","type":"LinearAxis"},{"id":"a2c45c26-4e88-463f-a9c6-3b372e8a17c1","type":"Grid"},{"id":"ced24ea3-37ff-4721-818e-4790023b7b86","type":"LinearAxis"},{"id":"4e8a6922-4681-479b-b29d-318c95cc14ad","type":"Grid"},{"id":"8f6d1d2b-728e-4f69-9d13-119c46d5191e","type":"BoxAnnotation"},{"id":"c401655a-f0fd-4ede-b354-9e677477ef03","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7c96fd39-b2fa-45b1-9d96-f3a6304c836d","type":"Toolbar"},"x_range":{"id":"dd797d41-432d-4fbb-854c-bc0da366f11c","type":"DataRange1d"},"x_scale":{"id":"1366f82f-df5e-4c6f-942b-2e0d1ed13567","type":"LinearScale"},"y_range":{"id":"4ac11103-4884-4465-81cc-24c706f00dbf","type":"DataRange1d"},"y_scale":{"id":"14fd5a91-b2d8-422e-beb8-5be0ef83ccb0","type":"LinearScale"}},"id":"a6ec3fe7-986f-4b27-84fc-f0dbf47da63d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"480c2d6a-5cec-4c23-a103-ab56599b2cef","type":"LinearScale"},{"attributes":{},"id":"6ff8261f-5190-4219-85c2-a592a2b6a206","type":"HelpTool"},{"attributes":{},"id":"250cdde5-ed88-416e-826c-f613a78f0074","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"78e179fa-0268-428b-a5b6-110453061e3f","type":"Square"},{"attributes":{"data_source":{"id":"99f53c42-bd47-4ca3-98d0-a7fce0e83f1a","type":"ColumnDataSource"},"glyph":{"id":"78e179fa-0268-428b-a5b6-110453061e3f","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8939fabd-d503-41c6-9a9c-56d9c670e81f","type":"Square"},"selection_glyph":null,"view":{"id":"ed67ec69-431d-4a4b-afa3-8efdcab5df09","type":"CDSView"}},"id":"ca8e2b89-9ec9-4b85-ac18-2bd5902590d7","type":"GlyphRenderer"},{"attributes":{},"id":"07c090df-f67a-4ca3-a13f-9f41a663e4aa","type":"ResetTool"},{"attributes":{"callback":null},"id":"a0617910-c0b9-4b4e-9083-6ad67c2b699d","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"adce6265-46be-4908-bfca-6b193c79d6b1","type":"Triangle"},{"attributes":{},"id":"48fbd130-6133-4761-987b-09b746cf5b1e","type":"BasicTickFormatter"},{"attributes":{},"id":"14fd5a91-b2d8-422e-beb8-5be0ef83ccb0","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a56225b8-409a-4bf4-a2c3-c738dcd4aafe","type":"PanTool"},{"id":"e594ed13-45fd-44eb-b6af-1b69da617b5d","type":"WheelZoomTool"},{"id":"d72234ad-9b71-4fa0-9983-be67d7f33fc7","type":"BoxZoomTool"},{"id":"fb655a9e-a1b5-4875-b159-752dff99523d","type":"SaveTool"},{"id":"07c090df-f67a-4ca3-a13f-9f41a663e4aa","type":"ResetTool"},{"id":"773a9b0d-e3fc-4fc7-acc9-2d2947b5d021","type":"HelpTool"}]},"id":"57a060d5-c2b9-4e91-9dd3-5d81918f23c6","type":"Toolbar"},{"attributes":{"formatter":{"id":"6ee1cec3-27be-425d-91a8-8f7e522bf68f","type":"BasicTickFormatter"},"plot":{"id":"247c368a-e64d-4ca7-9e99-9e352baae06c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2e59742-cc3c-4ce7-a4f8-dc988b49b5d7","type":"BasicTicker"}},"id":"34109079-89b3-4659-9588-5c78347afd02","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"b9116a16-6e8b-4091-aeb3-72dfd7236b50","subtype":"Figure","type":"Plot"},"ticker":{"id":"df53da8c-d136-4c51-89e6-a058ea5f19f7","type":"BasicTicker"}},"id":"68cef309-bdbb-439f-a02f-ae6e53e89b9f","type":"Grid"},{"attributes":{},"id":"e594ed13-45fd-44eb-b6af-1b69da617b5d","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"8f6d1d2b-728e-4f69-9d13-119c46d5191e","type":"BoxAnnotation"}},"id":"82708d25-0255-4887-af80-1ab16df8a7cc","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"be3eba2c-e5bf-4b7a-8e06-7734efffb0a0","type":"LinearAxis"}],"left":[{"id":"257d6df0-59e7-4389-be27-1fe82601f678","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"be3eba2c-e5bf-4b7a-8e06-7734efffb0a0","type":"LinearAxis"},{"id":"ce6e184a-a03e-4afb-996b-9f8a475e94ea","type":"Grid"},{"id":"257d6df0-59e7-4389-be27-1fe82601f678","type":"LinearAxis"},{"id":"68cef309-bdbb-439f-a02f-ae6e53e89b9f","type":"Grid"},{"id":"d479bd4c-90a9-4f19-9fc5-d601d06977cf","type":"BoxAnnotation"},{"id":"30c2eb95-3e91-470d-bd54-e2da805c7b65","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"57a060d5-c2b9-4e91-9dd3-5d81918f23c6","type":"Toolbar"},"x_range":{"id":"ca4daa34-96a2-4098-9b44-149fedbafa95","type":"DataRange1d"},"x_scale":{"id":"900a2987-3595-47f3-a88f-7b03ac24c3dd","type":"LinearScale"},"y_range":{"id":"a0617910-c0b9-4b4e-9083-6ad67c2b699d","type":"DataRange1d"},"y_scale":{"id":"946d0cfd-d1be-4fc8-a13e-0fd8ea26a037","type":"LinearScale"}},"id":"b9116a16-6e8b-4091-aeb3-72dfd7236b50","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":null,"selection_policy":null},"id":"99f53c42-bd47-4ca3-98d0-a7fce0e83f1a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c4637ad8-7550-409f-a175-7bca2f873471","type":"ColumnDataSource"},"glyph":{"id":"adce6265-46be-4908-bfca-6b193c79d6b1","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ff326b93-210e-45b4-9617-0b05aa60fa78","type":"Triangle"},"selection_glyph":null,"view":{"id":"33fa019e-c4ad-4cde-999e-6a4aad616a77","type":"CDSView"}},"id":"30c2eb95-3e91-470d-bd54-e2da805c7b65","type":"GlyphRenderer"},{"attributes":{},"id":"d35bac8a-9e13-4356-b282-d62077319e4a","type":"BasicTickFormatter"},{"attributes":{},"id":"1366f82f-df5e-4c6f-942b-2e0d1ed13567","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a46111d-2f22-47b4-87f8-9c4aa6d71293","type":"Circle"},{"attributes":{},"id":"a56225b8-409a-4bf4-a2c3-c738dcd4aafe","type":"PanTool"},{"attributes":{},"id":"16f9eb63-38e5-444a-821b-650778267705","type":"LinearScale"},{"attributes":{},"id":"773a9b0d-e3fc-4fc7-acc9-2d2947b5d021","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"86adcbbb-b06b-45cb-b441-2ef9a66ef30f","type":"PanTool"},{"id":"b37ff2a9-6211-4277-a028-3205812a6d86","type":"WheelZoomTool"},{"id":"c3439787-4b68-4b82-800d-80a5d8e896fc","type":"BoxZoomTool"},{"id":"d5ace039-a1cf-4f86-9c0d-a85a92e8217f","type":"SaveTool"},{"id":"976ac68e-a9ea-4e0f-acde-0b6eef047eb9","type":"ResetTool"},{"id":"2b3997b1-1726-4cdb-b03c-fb0bfbe8d928","type":"HelpTool"}]},"id":"91ad3156-5231-45d4-af0e-7baa4ce82324","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"339a9295-8ec8-480d-a5d7-0ee3932644a2","type":"PanTool"},{"id":"1386f4e8-2f67-4630-a9ae-1fc627af1a09","type":"WheelZoomTool"},{"id":"82708d25-0255-4887-af80-1ab16df8a7cc","type":"BoxZoomTool"},{"id":"f0d7657d-860a-4836-9e20-e77820738cb5","type":"SaveTool"},{"id":"6f3e6f98-c777-40f1-9a60-decfde0356ff","type":"ResetTool"},{"id":"6ff8261f-5190-4219-85c2-a592a2b6a206","type":"HelpTool"}]},"id":"7c96fd39-b2fa-45b1-9d96-f3a6304c836d","type":"Toolbar"}],"root_ids":["c6958249-5c7b-436b-945f-7b23d7525eca"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"6a3c2baf-f4e7-4a95-a38c-41d122a0422f","elementid":"1739998d-542b-4f1d-99ee-53a8edd3c96b","modelid":"c6958249-5c7b-436b-945f-7b23d7525eca"}];
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