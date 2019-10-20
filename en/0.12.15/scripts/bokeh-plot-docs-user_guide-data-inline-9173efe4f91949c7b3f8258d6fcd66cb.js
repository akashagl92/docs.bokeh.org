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
      };var element = document.getElementById("2d7839f3-ef91-4547-bdea-5e1dde6e22bb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d7839f3-ef91-4547-bdea-5e1dde6e22bb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"050b1517-6707-452d-8714-12b894e67298":{"roots":{"references":[{"attributes":{},"id":"ef794772-d7ef-453f-aaf2-51aa73cbf7c2","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d71ef9d5-99fb-4ce6-aa7d-6d38ce07c367","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d0b4061-0ca0-4238-8124-ca8e078963bb","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"163516de-f08c-4d31-9255-0f8fe17e56fe","type":"Circle"},{"attributes":{"callback":null},"id":"8b19e6f1-e52b-40a5-8a24-cfa9c8b68595","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"b8bb18c5-8240-4649-83bb-3f3224c0e19d","type":"Title"},{"attributes":{"below":[{"id":"56245ee2-6525-4dbe-b445-1151e461f50c","type":"LinearAxis"}],"left":[{"id":"9da8b9c4-ec7f-403b-ab9d-258cb898551f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"56245ee2-6525-4dbe-b445-1151e461f50c","type":"LinearAxis"},{"id":"086499c1-fdf1-44d7-bbc8-33d29d271033","type":"Grid"},{"id":"9da8b9c4-ec7f-403b-ab9d-258cb898551f","type":"LinearAxis"},{"id":"65716b5e-a1c3-47f4-a57e-ea6891a9f601","type":"Grid"},{"id":"34ed11e6-c9b5-4a8b-acd5-863c430834ef","type":"BoxAnnotation"},{"id":"07116e24-3717-4cc3-8beb-bb262150e828","type":"GlyphRenderer"}],"title":{"id":"0942e1cb-3848-4ec9-9f50-279c44f2b49d","type":"Title"},"toolbar":{"id":"0863df6d-ee91-45f8-ae05-f8ed83379b83","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9a6be955-ff54-440d-895f-2ac9a36fc25d","type":"DataRange1d"},"x_scale":{"id":"db316a1d-bdae-40c3-b820-4515bf96999d","type":"LinearScale"},"y_range":{"id":"8b19e6f1-e52b-40a5-8a24-cfa9c8b68595","type":"DataRange1d"},"y_scale":{"id":"db48f836-3a8e-42e5-819d-3566a662bd23","type":"LinearScale"}},"id":"5f6f7428-620b-468e-beec-581a2b890c66","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8eaf13cd-21fd-484b-998f-a0a60b103826","type":"BoxSelectTool"},{"id":"871e81bd-016f-4f58-a626-fe1f238ad595","type":"HoverTool"},{"id":"ef794772-d7ef-453f-aaf2-51aa73cbf7c2","type":"ResetTool"}]},"id":"0863df6d-ee91-45f8-ae05-f8ed83379b83","type":"Toolbar"},{"attributes":{},"id":"db48f836-3a8e-42e5-819d-3566a662bd23","type":"LinearScale"},{"attributes":{"formatter":{"id":"07a3dd66-3977-4ed5-9e60-18cb7cb8f523","type":"BasicTickFormatter"},"plot":{"id":"5f6f7428-620b-468e-beec-581a2b890c66","subtype":"Figure","type":"Plot"},"ticker":{"id":"54753444-deaf-41f0-b126-0527b9660549","type":"BasicTicker"}},"id":"9da8b9c4-ec7f-403b-ab9d-258cb898551f","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"5f6f7428-620b-468e-beec-581a2b890c66","subtype":"Figure","type":"Plot"},"ticker":{"id":"54753444-deaf-41f0-b126-0527b9660549","type":"BasicTicker"}},"id":"65716b5e-a1c3-47f4-a57e-ea6891a9f601","type":"Grid"},{"attributes":{"source":{"id":"8fff4e00-f03a-4fe3-9a8f-9b03473f82ce","type":"ColumnDataSource"}},"id":"c7e5ce7e-0df6-419a-a4ce-c915d88ceb00","type":"CDSView"},{"attributes":{},"id":"90b5f1b9-ceb8-4f04-b9d4-fcadc7261b3b","type":"BasicTicker"},{"attributes":{},"id":"f776b6b0-cff8-4655-834a-818b33be3c86","type":"LinearScale"},{"attributes":{"children":[{"id":"a581a2de-47ad-4ab0-921a-c14bcb8f15c4","subtype":"Figure","type":"Plot"},{"id":"5f6f7428-620b-468e-beec-581a2b890c66","subtype":"Figure","type":"Plot"}]},"id":"70592cc8-173a-4785-a73e-832aba1d3cbf","type":"Row"},{"attributes":{"plot":null,"text":""},"id":"0942e1cb-3848-4ec9-9f50-279c44f2b49d","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d20c3626-97ce-4a00-87e7-518a65ec7e35","type":"Circle"},{"attributes":{},"id":"1dad6118-29c2-45b0-a031-4700d4800db4","type":"BasicTicker"},{"attributes":{"formatter":{"id":"834de647-3a75-446b-8d67-d70a22828c84","type":"BasicTickFormatter"},"plot":{"id":"a581a2de-47ad-4ab0-921a-c14bcb8f15c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dad6118-29c2-45b0-a031-4700d4800db4","type":"BasicTicker"}},"id":"1e04c4ca-7f77-4d6a-b331-e9a587346bce","type":"LinearAxis"},{"attributes":{"formatter":{"id":"4cb88c02-708c-4d7a-9ede-fc6656d76cc6","type":"BasicTickFormatter"},"plot":{"id":"a581a2de-47ad-4ab0-921a-c14bcb8f15c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"8813df3d-2e48-4e33-ab6b-a301c18cb8f5","type":"BasicTicker"}},"id":"0840f6f7-428c-4387-96f7-118e5cfd1796","type":"LinearAxis"},{"attributes":{},"id":"07a3dd66-3977-4ed5-9e60-18cb7cb8f523","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"6285e81e-02a6-4d05-94b2-fb5ddaaf7469","type":"BoxSelectTool"},{"id":"3177067c-7cf9-49da-85b2-b95819089250","type":"HoverTool"},{"id":"ab84cd1d-e6fc-42fc-bc69-5e7b80bef884","type":"ResetTool"},{"id":"8eaf13cd-21fd-484b-998f-a0a60b103826","type":"BoxSelectTool"},{"id":"871e81bd-016f-4f58-a626-fe1f238ad595","type":"HoverTool"},{"id":"ef794772-d7ef-453f-aaf2-51aa73cbf7c2","type":"ResetTool"}]},"id":"b035af6a-57f5-4bda-a8e6-71f47ff60d99","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34ed11e6-c9b5-4a8b-acd5-863c430834ef","type":"BoxAnnotation"},{"attributes":{},"id":"db316a1d-bdae-40c3-b820-4515bf96999d","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"a581a2de-47ad-4ab0-921a-c14bcb8f15c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"8813df3d-2e48-4e33-ab6b-a301c18cb8f5","type":"BasicTicker"}},"id":"64a8b015-64f1-4aaa-9ebf-46ebbe41e155","type":"Grid"},{"attributes":{},"id":"54753444-deaf-41f0-b126-0527b9660549","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"139573d6-53ac-450d-a8ff-254f4d4c79ca","type":"Circle"},{"attributes":{"children":[{"id":"70592cc8-173a-4785-a73e-832aba1d3cbf","type":"Row"}]},"id":"4416ab10-e71b-46d0-9d6d-7b97c7f6e9d1","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"34ed11e6-c9b5-4a8b-acd5-863c430834ef","type":"BoxAnnotation"},"renderers":[{"id":"07116e24-3717-4cc3-8beb-bb262150e828","type":"GlyphRenderer"}]},"id":"8eaf13cd-21fd-484b-998f-a0a60b103826","type":"BoxSelectTool"},{"attributes":{},"id":"4cb88c02-708c-4d7a-9ede-fc6656d76cc6","type":"BasicTickFormatter"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"3eaf6a15-e3d1-4850-8cbb-e6bdad61f6e8","type":"BooleanFilter"},{"attributes":{"callback":null},"id":"9a6be955-ff54-440d-895f-2ac9a36fc25d","type":"DataRange1d"},{"attributes":{"plot":{"id":"5f6f7428-620b-468e-beec-581a2b890c66","subtype":"Figure","type":"Plot"},"ticker":{"id":"90b5f1b9-ceb8-4f04-b9d4-fcadc7261b3b","type":"BasicTicker"}},"id":"086499c1-fdf1-44d7-bbc8-33d29d271033","type":"Grid"},{"attributes":{"toolbar":{"id":"b035af6a-57f5-4bda-a8e6-71f47ff60d99","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"893032cb-75b9-48aa-bdb9-3b0600cac1b0","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c679f47-8cbb-41b4-81af-d7bca2536ce0","type":"Circle"},{"attributes":{"below":[{"id":"1e04c4ca-7f77-4d6a-b331-e9a587346bce","type":"LinearAxis"}],"left":[{"id":"0840f6f7-428c-4387-96f7-118e5cfd1796","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1e04c4ca-7f77-4d6a-b331-e9a587346bce","type":"LinearAxis"},{"id":"a478a41a-be11-43fd-912b-9c075f4ec7cb","type":"Grid"},{"id":"0840f6f7-428c-4387-96f7-118e5cfd1796","type":"LinearAxis"},{"id":"64a8b015-64f1-4aaa-9ebf-46ebbe41e155","type":"Grid"},{"id":"c6c47039-0ac2-4fa4-b785-ad32e87a49f2","type":"BoxAnnotation"},{"id":"6a97e55c-d4c7-4445-ba1f-7bfaec3953a1","type":"GlyphRenderer"}],"title":{"id":"b8bb18c5-8240-4649-83bb-3f3224c0e19d","type":"Title"},"toolbar":{"id":"6c013d7a-4ea5-46c4-b2c7-78c909997730","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9a6be955-ff54-440d-895f-2ac9a36fc25d","type":"DataRange1d"},"x_scale":{"id":"f776b6b0-cff8-4655-834a-818b33be3c86","type":"LinearScale"},"y_range":{"id":"8b19e6f1-e52b-40a5-8a24-cfa9c8b68595","type":"DataRange1d"},"y_scale":{"id":"661a9391-c6e7-4e40-94cf-ed9e3a37d205","type":"LinearScale"}},"id":"a581a2de-47ad-4ab0-921a-c14bcb8f15c4","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c6c47039-0ac2-4fa4-b785-ad32e87a49f2","type":"BoxAnnotation"},{"attributes":{},"id":"834de647-3a75-446b-8d67-d70a22828c84","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"c6c47039-0ac2-4fa4-b785-ad32e87a49f2","type":"BoxAnnotation"},"renderers":[{"id":"6a97e55c-d4c7-4445-ba1f-7bfaec3953a1","type":"GlyphRenderer"}]},"id":"6285e81e-02a6-4d05-94b2-fb5ddaaf7469","type":"BoxSelectTool"},{"attributes":{"plot":{"id":"a581a2de-47ad-4ab0-921a-c14bcb8f15c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dad6118-29c2-45b0-a031-4700d4800db4","type":"BasicTicker"}},"id":"a478a41a-be11-43fd-912b-9c075f4ec7cb","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":null,"selection_policy":null},"id":"8fff4e00-f03a-4fe3-9a8f-9b03473f82ce","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"893032cb-75b9-48aa-bdb9-3b0600cac1b0","type":"ToolbarBox"},{"id":"4416ab10-e71b-46d0-9d6d-7b97c7f6e9d1","type":"Column"}]},"id":"433627e4-d0ba-49ec-9eed-80583b939e7d","type":"Column"},{"attributes":{"callback":null},"id":"3177067c-7cf9-49da-85b2-b95819089250","type":"HoverTool"},{"attributes":{"data_source":{"id":"8fff4e00-f03a-4fe3-9a8f-9b03473f82ce","type":"ColumnDataSource"},"glyph":{"id":"d71ef9d5-99fb-4ce6-aa7d-6d38ce07c367","type":"Circle"},"hover_glyph":{"id":"9c679f47-8cbb-41b4-81af-d7bca2536ce0","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"163516de-f08c-4d31-9255-0f8fe17e56fe","type":"Circle"},"selection_glyph":null,"view":{"id":"c7e5ce7e-0df6-419a-a4ce-c915d88ceb00","type":"CDSView"}},"id":"6a97e55c-d4c7-4445-ba1f-7bfaec3953a1","type":"GlyphRenderer"},{"attributes":{},"id":"8813df3d-2e48-4e33-ab6b-a301c18cb8f5","type":"BasicTicker"},{"attributes":{},"id":"c600a20c-ec6b-4441-aabd-2fad8995c56e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c600a20c-ec6b-4441-aabd-2fad8995c56e","type":"BasicTickFormatter"},"plot":{"id":"5f6f7428-620b-468e-beec-581a2b890c66","subtype":"Figure","type":"Plot"},"ticker":{"id":"90b5f1b9-ceb8-4f04-b9d4-fcadc7261b3b","type":"BasicTicker"}},"id":"56245ee2-6525-4dbe-b445-1151e461f50c","type":"LinearAxis"},{"attributes":{},"id":"ab84cd1d-e6fc-42fc-bc69-5e7b80bef884","type":"ResetTool"},{"attributes":{"data_source":{"id":"8fff4e00-f03a-4fe3-9a8f-9b03473f82ce","type":"ColumnDataSource"},"glyph":{"id":"139573d6-53ac-450d-a8ff-254f4d4c79ca","type":"Circle"},"hover_glyph":{"id":"5d0b4061-0ca0-4238-8124-ca8e078963bb","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"d20c3626-97ce-4a00-87e7-518a65ec7e35","type":"Circle"},"selection_glyph":null,"view":{"id":"d68558f0-96e3-4da2-a006-45b987a8b9c9","type":"CDSView"}},"id":"07116e24-3717-4cc3-8beb-bb262150e828","type":"GlyphRenderer"},{"attributes":{"filters":[{"id":"3eaf6a15-e3d1-4850-8cbb-e6bdad61f6e8","type":"BooleanFilter"}],"source":{"id":"8fff4e00-f03a-4fe3-9a8f-9b03473f82ce","type":"ColumnDataSource"}},"id":"d68558f0-96e3-4da2-a006-45b987a8b9c9","type":"CDSView"},{"attributes":{},"id":"661a9391-c6e7-4e40-94cf-ed9e3a37d205","type":"LinearScale"},{"attributes":{"callback":null},"id":"871e81bd-016f-4f58-a626-fe1f238ad595","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6285e81e-02a6-4d05-94b2-fb5ddaaf7469","type":"BoxSelectTool"},{"id":"3177067c-7cf9-49da-85b2-b95819089250","type":"HoverTool"},{"id":"ab84cd1d-e6fc-42fc-bc69-5e7b80bef884","type":"ResetTool"}]},"id":"6c013d7a-4ea5-46c4-b2c7-78c909997730","type":"Toolbar"}],"root_ids":["433627e4-d0ba-49ec-9eed-80583b939e7d"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"050b1517-6707-452d-8714-12b894e67298","elementid":"2d7839f3-ef91-4547-bdea-5e1dde6e22bb","modelid":"433627e4-d0ba-49ec-9eed-80583b939e7d"}];
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