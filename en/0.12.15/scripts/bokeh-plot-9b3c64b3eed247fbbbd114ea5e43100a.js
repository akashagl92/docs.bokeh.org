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
      };var element = document.getElementById("cdcaa4f9-bcc5-4dc9-9fa0-46c716844f44");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cdcaa4f9-bcc5-4dc9-9fa0-46c716844f44' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8861fe22-68c6-466a-b86a-b77077cf21cf":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"8b19d9e6-1bc0-4545-802a-5c7145a2a7cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"db01f1b2-81a9-40fd-ab6c-1534b0cca278","type":"BasicTicker"}},"id":"0b29d32d-c435-4edc-ab02-39ffe85ed86e","type":"Grid"},{"attributes":{"callback":null},"id":"b2e9da19-e802-49e3-883d-23092a076488","type":"DataRange1d"},{"attributes":{},"id":"0860ab13-48cd-4200-9794-c20282e005be","type":"LinearScale"},{"attributes":{},"id":"eff3d18e-9a18-4887-87f1-c2e55340ea99","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"4e209e66-c862-4ed3-ac1d-a1e0c718b2f8","type":"PolyAnnotation"}},"id":"cc650fee-f89a-47c0-a1a6-8efc490a8bff","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"fee16095-3857-4d54-a8c9-82eb254c1ab1","type":"ColumnDataSource"},"glyph":{"id":"99d19c96-30ff-4d51-afce-0f309dd50785","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"241b17f6-4bdf-4954-86bf-abd1c43d739a","type":"Line"},"selection_glyph":null,"view":{"id":"4440faea-7499-46a5-bfaf-29f6c17e2949","type":"CDSView"}},"id":"bde23047-fb71-4fdc-99b5-83843f500a2f","type":"GlyphRenderer"},{"attributes":{},"id":"db01f1b2-81a9-40fd-ab6c-1534b0cca278","type":"BasicTicker"},{"attributes":{"callback":null},"id":"e0c4d4fd-d815-4e2b-ab2c-4de919592898","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","ym"],"data":{"x":[0,1],"ym":[0.5,0.5]},"selected":null,"selection_policy":null},"id":"fee16095-3857-4d54-a8c9-82eb254c1ab1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"4e209e66-c862-4ed3-ac1d-a1e0c718b2f8","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"224ec7f3-17da-4424-a78d-326d7a9a175b","type":"LinearAxis"}],"left":[{"id":"e75f5df8-771f-4124-9371-17bfff7cb515","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"224ec7f3-17da-4424-a78d-326d7a9a175b","type":"LinearAxis"},{"id":"18291f1a-1e71-45e2-9646-07d469e4f2d1","type":"Grid"},{"id":"e75f5df8-771f-4124-9371-17bfff7cb515","type":"LinearAxis"},{"id":"0b29d32d-c435-4edc-ab02-39ffe85ed86e","type":"Grid"},{"id":"4e209e66-c862-4ed3-ac1d-a1e0c718b2f8","type":"PolyAnnotation"},{"id":"2144d852-a7e7-449f-9d91-3d96baea08b4","type":"GlyphRenderer"},{"id":"bde23047-fb71-4fdc-99b5-83843f500a2f","type":"GlyphRenderer"}],"title":{"id":"a36aebef-b954-466b-8ec1-2474e7f7bd79","type":"Title"},"toolbar":{"id":"5defbfec-335b-40d0-9ec0-edcbe117b4b0","type":"Toolbar"},"x_range":{"id":"b2e9da19-e802-49e3-883d-23092a076488","type":"DataRange1d"},"x_scale":{"id":"c8a10137-0c3b-4e63-860c-b99f82bbf0d2","type":"LinearScale"},"y_range":{"id":"e0c4d4fd-d815-4e2b-ab2c-4de919592898","type":"DataRange1d"},"y_scale":{"id":"0860ab13-48cd-4200-9794-c20282e005be","type":"LinearScale"}},"id":"8b19d9e6-1bc0-4545-802a-5c7145a2a7cd","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.6,"line_color":"orange","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"99d19c96-30ff-4d51-afce-0f309dd50785","type":"Line"},{"attributes":{"source":{"id":"d8d40c92-bb02-4659-8411-43c095ebc475","type":"ColumnDataSource"}},"id":"c5823a7b-8c9f-420c-80b6-b1e2f5b31715","type":"CDSView"},{"attributes":{"formatter":{"id":"4c6e2a05-da70-499e-b92c-4ccd5f5f4160","type":"BasicTickFormatter"},"plot":{"id":"8b19d9e6-1bc0-4545-802a-5c7145a2a7cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"19b9f16c-187e-4a77-b17a-6d8620835ed4","type":"BasicTicker"}},"id":"224ec7f3-17da-4424-a78d-326d7a9a175b","type":"LinearAxis"},{"attributes":{"args":{"s2":{"id":"fee16095-3857-4d54-a8c9-82eb254c1ab1","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected.indices;\\n        var d = cb_obj.data;\\n        var ym = 0\\n\\n        if (inds.length == 0) { return; }\\n\\n        for (i = 0; i &lt; d[&#x27;color&#x27;].length; i++) {\\n            d[&#x27;color&#x27;][i] = \\"navy\\"\\n        }\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d[&#x27;color&#x27;][inds[i]] = \\"firebrick\\"\\n            ym += d[&#x27;y&#x27;][inds[i]]\\n        }\\n\\n        ym /= inds.length\\n        s2.data[&#x27;ym&#x27;] = [ym, ym]\\n\\n        cb_obj.change.emit();\\n        s2.change.emit();\\n    "},"id":"7f5df17f-9a28-46ee-a592-3875c686cbb8","type":"CustomJS"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cc650fee-f89a-47c0-a1a6-8efc490a8bff","type":"LassoSelectTool"}]},"id":"5defbfec-335b-40d0-9ec0-edcbe117b4b0","type":"Toolbar"},{"attributes":{"plot":{"id":"8b19d9e6-1bc0-4545-802a-5c7145a2a7cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"19b9f16c-187e-4a77-b17a-6d8620835ed4","type":"BasicTicker"}},"id":"18291f1a-1e71-45e2-9646-07d469e4f2d1","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"d343ccc8-59c0-4468-a04f-3a75ab6e187d","type":"Circle"},{"attributes":{},"id":"c8a10137-0c3b-4e63-860c-b99f82bbf0d2","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"241b17f6-4bdf-4954-86bf-abd1c43d739a","type":"Line"},{"attributes":{},"id":"4c6e2a05-da70-499e-b92c-4ccd5f5f4160","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fbba544-168b-4352-9dd6-7a555264a18f","type":"Circle"},{"attributes":{"callback":{"id":"7f5df17f-9a28-46ee-a592-3875c686cbb8","type":"CustomJS"},"column_names":["x","y","color"],"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.7631666691629513,0.9702330836049102,0.7644927397681881,0.6790681967622599,0.0437142690843918,0.24862478416237177,0.8010935062864412,0.5472635508668552,0.9615846430971114,0.2521528871484997,0.15994712251526544,0.09504942382600867,0.9422704512858373,0.1278491918367256,0.7077589087871055,0.1035930097850587,0.8431511161646444,0.12238510373011502,0.0412248723858335,0.6146824911437851,0.47468144997771244,0.9386741594828496,0.4158933347512238,0.7657465075580127,0.8045436569807805,0.2417953405341855,0.985334110845503,0.14043662598377726,0.17654148002514247,0.6601863765532937,0.674303450501359,0.14707407880195522,0.6062517600253848,0.22593363404953448,0.7970594910970717,0.39040235140368884,0.2336633869039061,0.9052206588344601,0.46962775857195893,0.6563753935103555,0.008596398921031922,0.9585979028702768,0.060251335083543855,0.04290403077932181,0.1288969456847533,0.3980420980248256,0.6321599349377715,0.28840537106226705,0.5766590237325158,0.24851008196499214,0.8124849621815884,0.3448421553363037,0.0386444972732809,0.18609622593334418,0.8480146023463505,0.2404451896094425,0.5779413342407221,0.09985108780303575,0.9658131674636901,0.4445714610663012,0.10283256309294009,0.7155374201030434,0.641307118802805,0.9365672613726445,0.1647719119828872,0.8507814439105497,0.7011169112560635,0.6947872283658133,0.5052989421574638,0.41612258491841747,0.5101845108746382,0.40655242780469913,0.05687955103900366,0.3285646937647696,0.1388685017511313,0.7278091538409185,0.004120212179720251,0.9868496762448719,0.09263310847247108,0.7061684181950244,0.8666673823406258,0.973414891127695,0.026969419107148895,0.2766904120174085,0.03386441314604127,0.610952545338056,0.35626960817440356,0.0011645301555349707,0.44023014716561915,0.8861170205464951,0.30720202059789514,0.8079307516474954,0.8436400675436515,0.49204355469206373,0.08588152037713614,0.15541770433162017,0.5552001072596247,0.5227288034510704,0.18801434477371715,0.013805127160419928,0.7939816063784524,0.6635614550106984,0.04682502659526866,0.6926175223031811,0.06366053496950885,0.27108406006832453,0.2760198462363038,0.7823049078466744,0.6277816924619958,0.7046659378942132,0.8771083318462691,0.4103281665710583,0.15320611118188698,0.075196204356756,0.6673314765561877,0.939036206310784,0.3431231299245967,0.035810488137328234,0.12680618687818956,0.43880952580735344,0.5477059970953894,0.3047527211314176,0.5242678012081762,0.16243358837252586,0.29846520213574856,0.38384009888260606,0.26033910772606317,0.8634798620577251,0.4202479280879926,0.9918044657365631,0.4656650990377085,0.09821225946753076,0.2286912854004315,0.7815339859496091,0.8576999350375685,0.2845869492189598,0.992219019082738,0.5067425400333653,0.706286294152905,0.9728490334045602,0.7397948660042589,0.14500112698852974,0.7313521698427449,0.28867010460879994,0.11083122099936304,0.9391673893033674,0.4451253891795842,0.9605003750760029,0.6943731938948122,0.5292844211825705,0.6033851076495353,0.6548843651507816,0.308570658361765,0.10606106253441039,0.8681053061880218,0.9771173875291287,0.8164446327770248,0.21197814730703257,0.2538220046708679,0.5219355292551683,0.6658080254200487,0.3369717040262169,0.9657604986124466,0.8502358358277461,0.5758739615023492,0.8439596262087309,0.6540265349475419,0.5806770959565584,0.1413363595468754,0.43240288380194725,0.9882259515849573,0.07620251045143245,0.45248023406859594,0.8042092477287864,0.8707519210908762,0.9533726300851043,0.1957234577773409,0.1300062929026189,0.6975487763866831,0.3376096345723206,0.029043653253143176,0.19758425632879906,0.868324499482473,0.023483646335844988,0.7299970449220772,0.24618815094630608,0.3467633150044258,0.8318632419195651,0.2814558889461105,0.1785423758119622,0.03797315362851639,0.9408452423539962,0.347807494649239,0.36459353544020523,0.39138217611578574,0.24141428851563707,0.0788755504961427,0.4115301046168006,0.2944484419943758,0.6912404303708352,0.16785837604065235,0.31745672349218623,0.23849637887001807,0.035741741263168536,0.34802761022537554,0.9756656942913131,0.6701171683030089,0.3287023578419821,0.6508214001674673,0.7487828359890668,0.6745153200959918,0.7320042039432576,0.28656151101856375,0.15952547783211668,0.7235485733107446,0.7294869631290885,0.3530295868753477,0.07557992469268227,0.12159119370887916,0.5642279997846958,0.590093683143533,0.7892114218984575,0.11662011487170498,0.7708640720007262,0.5638207560405967,0.19654192781475321,0.3607781297840563,0.8206128089052933,0.5921638910126622,0.4947886729517067,0.1077800734631188,0.8707631919985128,0.7304562400149746,0.7253713967648191,0.5846618884317998,0.019633135048111927,0.17139052622060402,0.7227859479713586,0.9071006662964524,0.10718208248329786,0.03785237839237221,0.7428076493488237,0.4801347876298856,0.2331972399044394,0.16508215336728038,0.4840953620322951,0.4843933289100596,0.20174183519911182,0.3296188716912095,0.504504268785196,0.24199960614765437,0.7256970387248579,0.7259438916495528,0.9173439234514628,0.519554523456804,0.11307519352177309,0.11510699888661813,0.658384499983931,0.04073673450757087,0.2400650497832585,0.7091055530079715,0.9612587181455656,0.16736110639523183,0.10592414956939078,0.3911308191969656,0.5984346915837425,0.7321519673271054,0.5584353037159467,0.7817901397546096,0.9582018120904726,0.7339773710851738,0.8637146178065022,0.9226405127078054,0.938621682412822,0.1373660566049233,0.727278234031152,0.2695690137241946,0.4144005366939174,0.8606618850945349,0.5515063278740393,0.5403214286638651,0.04489364303006127,0.5422040816298618,0.8278065850459267,0.21014962969332363,0.5088998282805396,0.6624302247023217,0.3325381061086058,0.2702221934612231,0.7988833465988293,0.40570309218082223,0.35568914297525955,0.12090657772613933,0.7972271047810005,0.8411699509907021,0.9363970151118405,0.8491306953482476,0.9515064332398897,0.24838129209366777,0.8225019209109544,0.41841548611806534,0.26097860847417953,0.9498252320460179,0.8479911022217345,0.06858079012707818,0.2386903166081461,0.3894031602269643,0.5126708615763238,0.4228670566580689,0.17971756754691914,0.7102497048350463,0.058875260439390176,0.04605095552718297,0.5788595634809619,0.34502646935464354,0.9149011818288727,0.3562876511861799,0.4267449482701755,0.6478644949589661,0.5873066104443387,0.9961682569311175,0.7937401095600473,0.48136976168298673,0.11185130845497804,0.4367199962569266,0.4924691729745949,0.5418624393055531,0.3449893589011547,0.5449885837452865,0.45553515609358697,0.38419102597964205,0.17330831274743175,0.13855924309291645,0.8922510887758497,0.3458993102206528,0.34667610657812753,0.47481989770324373,0.81603004751354,0.8004094478759737,0.08926164615099885,0.015989775278381968,0.9644635137709787,0.13796997076610462,0.16509378714861722,0.5298193756443228,0.9186837666928604,0.7628933242743317,0.053674477659632736,0.5606978399868402,0.8766328793065958,0.9618057912214437,0.8874999366421736,0.3309864803150756,0.8938357707374738,0.9363467090540147,0.3720105541400418,0.7279680929140726,0.5693718446817494,0.9841787086971399,0.34334332776426846,0.9216494257509918,0.31373659076214877,0.9237365374567273,0.9458753167683062,0.8564887660547721,0.32321875699883906,0.5779818506887906,0.19600675084260244,0.13806301996500048,0.5128736595558165,0.18002056329455274,0.05703839880541106,0.4979265484852897,0.6839000788075714,0.19832489025413202,0.8632409979637342,0.6963313615520347,0.8495009028638775,0.40838988516593544,0.7843694961558613,0.42908937933803093,0.2585973366788634,0.624378301822833,0.4497501658806359,0.08006862265838854,0.9587548665176041,0.9603433029743477,0.40403817490096683,0.8307321735190628,0.0018433401625027601,0.09518046255564228,0.02260393361613211,0.4346196724922894,0.05620576587351067,0.01241440404770422,0.5756374034285227,0.5504729421434241,0.7093073827410662,0.7224932011828372,0.8359919431894355,0.8237641211425566,0.5161417858427506,0.17646612919696636,0.15171184429645612,0.8990219514517693,0.2627233032442553,0.8800615231303758,0.27708529552451644,0.9945295595087816,0.8869558173544292,0.9715017552129979,0.18983532035713746,0.7843358599086901,0.4375192385067119,0.12429994766914265,0.024574989653545543,0.4486597038086293,0.5590666953371084,0.11284321348462822,0.8692887129842062,0.3830443700371333,0.08758050655553395,0.8876246738957982,0.027402597249178706,0.8051373058259168,0.660132646031798,0.9094723848304253,0.798214019466456,0.18032944922362282,0.5111555581731283,0.045300342765911106,0.9678110095764659,0.04539305225431822,0.3730158424722667,0.013836653610315719,0.6870697439683429,0.31618649309199454,0.9103881024820187,0.7137351449441085,0.22618659390785123,0.6572213970426203,0.8149745881376447,0.6555404540518108,0.11713055858968313,0.9815340790272027,0.5191352308628304,0.8031882583255915,0.39628654330820967,0.37577989991626226,0.2021378699376284,0.40266388153644195,0.29243529858919415,0.5290089257363945,0.45446165284416806,0.3795488907679956,0.5309977425615092,0.8534366514762985,0.7240974813467056,0.48327882051999627,0.6176106869591771,0.848176138617543,0.9110398041622736,0.9017810339689915,0.5917002279638007,0.24464235857124395,0.9737037312736401,0.8505284114127126,0.39727827144013983,0.36104109915869176,0.3870421481804248,0.5887384252105837,0.16900602279822452,0.42482476062429664,0.5992869448779721,0.14348619097569149,0.4949123801305103,0.884763924475928,0.48009799765267025,0.8811046591353274,0.5063530043675518,0.5708140915703492,0.5313646363639983,0.33344941830003005,0.388912789299638,0.3279465706742951,0.26100259158737504,0.667918439094183,0.8236231285253447,0.07191859850604487,0.1089772043348406,0.480088864722238,0.6988750485173401,0.8230334637376604,0.9509959396464999,0.3762345609669109,0.6731695833589075,0.7524002094120248,0.8522037614749558,0.0418111241144391,0.7150527504146044],"y":[0.3041737454143536,0.6145358353644633,0.7303216378035111,0.2088513558029217,0.9635600808832188,0.5357251982119615,0.946308320735971,0.5759980034197991,0.08288698877386835,0.11790337123340133,0.4566397796625823,0.03383912897981045,0.8114883411503576,0.9348260328459863,0.3145451825213045,0.9360232515384982,0.18624781276971514,0.6217399501541464,0.44612142568456925,0.5206178809868949,0.5141117270864982,0.2734517296563671,0.11549604576625516,0.534702755128209,0.7311496555064425,0.3348308906248384,0.8476479597767809,0.7594023666451327,0.36755068488834153,0.9833900422510428,0.9693159197091801,0.4284285203705529,0.39107863603753124,0.5641482480316635,0.8093992281086534,0.6884339779451446,0.6822161492942398,0.6265763837508321,0.2626858401326314,0.9589519303635677,0.16518274935498356,0.9089346280926546,0.37006192514790437,0.9240838910076791,0.4543151043433715,0.1679337779774558,0.5575382100443735,0.09672732330015921,0.42523458349266563,0.6627324305411663,0.8087887252882159,0.7795436755162021,0.1753464107656968,0.9661438034299733,0.023799654356985278,0.482115387931781,0.24788516897748492,0.7855253302099476,0.7942952189626259,0.004177815566143828,0.27310038768756983,0.6463565545882296,0.5381910720357708,0.6060875831434378,0.07107119400474349,0.6758472477976549,0.6892116967608121,0.8148553634243395,0.8577211770433872,0.15785015530546664,0.22278583704224242,0.09001555476765066,0.6975897717699161,0.11946955085914202,0.39940884788516995,0.002475688105489038,0.6948927279353201,0.2507020384532137,0.34657898259667663,0.15567932329512846,0.810834312755567,0.22688897303705002,0.5918263393085059,0.8544143093866634,0.7900171868286556,0.5196994188860803,0.6075898444523157,0.39628417440152164,0.591781805968252,0.5091918079373609,0.9211124533971863,0.09824465606347821,0.5351872682042199,0.39399576263283076,0.6997247928208612,0.08918880793772,0.09205580464975216,0.34678855836853206,0.5877511258054983,0.5797628522466891,0.5505729919644161,0.027661124708421414,0.31799773143524646,0.611473777156699,0.6363444241705902,0.7579548397735395,0.08626005128088288,0.7228084657794196,0.8756273986557596,0.7946894888427761,0.29092417488679756,0.821775080088705,0.30958718249441475,0.7519519778877373,0.7735141248861476,0.7351494630776246,0.8788481853744876,0.09484433841148865,0.7574070171359579,0.5835704135832798,0.3451761425803611,0.9616952988025064,0.2765863733501085,0.1694997364456189,0.47047877771019153,0.10680416000876458,0.6855639625336349,0.7114754929251488,0.3152852860015414,0.4966073094395399,0.5022428617053919,0.9496959399389069,0.1993151612992029,0.39343819528327784,0.7347135378803135,0.7597289799536626,0.830851682081463,0.18876798547984552,0.056782228871021356,0.6856552085333673,0.5000584363639126,0.38743786146012005,0.9059653107067454,0.9715928039155898,0.021434525018977024,0.8100405916920232,0.028704774148962886,0.636370699166576,0.8619620994960066,0.6930869353420733,0.7097222886794062,0.8101552427584241,0.6516550422094546,0.42794164052786077,0.9287144280460884,0.1865280802187559,0.9664555463823389,0.10143064865251472,0.0703055389994639,0.5311865785923207,0.9326931473837249,0.08104665196669492,0.47018409514675485,0.9869985993162705,0.008894138674346963,0.28783886186671326,0.8875627279019441,0.11541805840204933,0.49475209404340126,0.6721670043635946,0.4178228658081977,0.5267931382131666,0.796117331347244,0.0019722299466771176,0.2458074359278447,0.7267392599303486,0.6340278210681881,0.9277614620820922,0.3866749719236946,0.9528711349018175,0.2787815396049702,0.450961555026811,0.4475720183961365,0.13088543171093725,0.3332750901891559,0.20249737972246729,0.14684235717463157,0.8621445572465889,0.15699589138076553,0.9587371098436052,0.2672602149691303,0.11924346080879766,0.26623166836878287,0.7667312120235519,0.29037766695345835,0.6812474809946628,0.031235611879591785,0.14071356605598329,0.5984190565192898,0.04348559374871652,0.9705557107583347,0.9878888418885985,0.3540167440565869,0.32546051943424525,0.043267671398203866,0.116865832055013,0.4828402927138099,0.7991259784592926,0.5019359401435873,0.3235892004655935,0.5883924336090058,0.4674448345567711,0.04281601985949879,0.5739038467294727,0.5038911662405534,0.46496500154177633,0.7855296092314834,0.02867681162396385,0.23145702668922374,0.8881719813267177,0.9078948836405062,0.5520286122137092,0.6329412261967952,0.10813834701106328,0.1570009822020788,0.9669480991658282,0.3358777214073536,0.2996605433635626,0.22393406179073705,0.9595384592818396,0.8051858780068846,0.1347603003326886,0.10545476208324756,0.3657857593741536,0.5870033673115523,0.5704779200795569,0.16113540925755498,0.5907465800303038,0.011303251226816635,0.37039400407008083,0.25784348413341107,0.7426833349044603,0.5348482173850508,0.866432744304906,0.3334463683475387,0.3022846269863949,0.5751139058669767,0.10080330163492301,0.5026871841766352,0.0698474202649274,0.8138439583751533,0.5074017237338937,0.6914426577692702,0.03176861686771726,0.4954233015735824,0.6759267069316909,0.85726271022322,0.3747393402423058,0.5115833962515782,0.834076923147609,0.27559291867324787,0.03292727786463423,0.24754969266843618,0.09911762537318014,0.494831763796171,0.40339673917076546,0.6997046867388601,0.34573570244368,0.7406612224035328,0.5033287183644162,0.22375436389276293,0.9438407163581006,0.20135723163952912,0.5632218098215473,0.071462731085144,0.16892122268229948,0.2611823798662367,0.8482981735842388,0.24976153277144453,0.3352270749664291,0.231907657947223,0.37180146225070687,0.3619622533984901,0.5086632564538451,0.9488581519600197,0.406979427608704,0.7350904286558084,0.4058644432521552,0.044000067081558236,0.20966480459421433,0.05583451732612743,0.5913413523493348,0.1256453333637776,0.6255300256511873,0.7040804545409527,0.9511443615738073,0.3473007444901214,0.5813509652809503,0.33471775185760755,0.05460666136510417,0.7251428476760899,0.8804356494978693,0.20236626489647525,0.8440131365870082,0.25426816220286885,0.7134430282714508,0.6273792314528022,0.16617527534920296,0.805752219230379,0.047131131077103094,0.9817472885424937,0.34894067241698556,0.7621382031584759,0.8609272839541047,0.644090546458017,0.10660280292538382,0.3153459398388848,0.5207122790831616,0.115143748334808,0.37671202409239635,0.8553595050478479,0.10594823316321877,0.74655421396024,0.8955380147512213,0.5648672284041412,0.27936404891556765,0.5034800630836902,0.094104289712853,0.24254736892160533,0.42824885491629017,0.4675300246755688,0.540205905821027,0.28522105682306054,0.16301704386321303,0.7928751394795222,0.3471399816186952,0.5185075680925499,0.33056447003506473,0.5758963255763859,0.35414533514894486,0.5785885294539524,0.8175873096536168,0.5269169904653215,0.21076970357908575,0.702135266121232,0.9177440559956989,0.9532170875767295,0.0684257169532454,0.42766067470697167,0.19882794893557176,0.5068283359730583,0.18452520584862464,0.6758186319643876,0.9594437658032131,0.0015099631857754536,0.32785981752446625,0.5187559021138567,0.3217515863057926,0.5130186579341902,0.16868725366011683,0.21250949060638225,0.9641118709296971,0.18319997262687748,0.702008335717029,0.2831985334671112,0.06645599962806725,0.30648924669001465,0.7019799503285955,0.008712954616323043,0.5677338980979121,0.5382707882031146,0.1729515418336861,0.7510032801113784,0.5588871310726964,0.5484119401271216,0.6130916666577774,0.7847164539447243,0.3295758532299041,0.04248402366714377,0.7748135412113353,0.18822089353041993,0.2180706482108432,0.6425858395723436,0.8963854612273501,0.30975343291482094,0.6152020667939972,0.2437337562564479,0.15148577718343048,0.957833470883135,0.16948626766902963,0.20748451405124269,0.06957493938336057,0.9367878293340157,0.22797779855627487,0.08283786940346671,0.240163028294333,0.3754333467075297,0.16652252652487343,0.41698719821233965,0.9074115749217933,0.6433434418804946,0.5878804294516453,0.9214384969065571,0.9049891325662336,0.4243348758881055,0.17724992819254493,0.93043548402284,0.015773023513629414,0.9681290952691592,0.5258939034510021,0.35048494589939505,0.6941329017814175,0.7925586212102999,0.9826896800917763,0.6029439571129875,0.37155721739414094,0.14755181254148342,0.7934287955901191,0.8030685462571713,0.5006081638142936,0.3556547164393187,0.2858674536163798,0.34779914282671287,0.12148091435227071,0.14378871692872375,0.03766591599764857,0.32560165106758576,0.9153961895346677,0.492164715715921,0.990006795949099,0.9972739030391057,0.9196013982280488,0.6174687589390537,0.5076522127753873,0.7421076437669996,0.3116917928977754,0.7237209982615548,0.7386977012318713,0.7532562386244983,0.4318930320520342,0.14689161384789917,0.294828881017005,0.5497233686086997,0.606461451693427,0.2556680569955233,0.6949571912889733,0.49180663666663404,0.12564173914243648,0.3182644976736838,0.6830884299089837,0.04310576623087303,0.4867773468017831,0.8672493429881942,0.6760433121744426,0.5012262594832123,0.6331938745533526,0.2054031184367886,0.4516484713135682,0.06472075221348228,0.11391039014214677,0.5800443194158534,0.6514203900433733,0.9862080241396679,0.2995051274721383,0.7638735500087219,0.9284477138087408,0.983005353154322,0.31351971235155496,0.2446166581696142,0.9074270404990681,0.16233494206364074,0.9013157211651436,0.9463716092489621,0.6377962883459545,0.5599632276001488,0.4786087697830642,0.11779849294296652,0.8413740920433724,0.4058452879895206,0.7719332451070452,0.1671942798313486,0.6236330412715597,0.9294367269665552,0.7261738662368852,0.1603423324916089,0.23680745423269256,0.9398411066844475,0.4149535498268311,0.5783962519299305,0.7371429669830363,0.6326703364066546,0.8539192269345628,0.21641463667099858,0.8327083805226929,0.8044091614261633,0.7422436049919265,0.7343661101654374,0.47104484279914927,0.6306499519344182,0.46319699317192753]},"selected":null,"selection_policy":null},"id":"d8d40c92-bb02-4659-8411-43c095ebc475","type":"ColumnDataSource"},{"attributes":{"source":{"id":"fee16095-3857-4d54-a8c9-82eb254c1ab1","type":"ColumnDataSource"}},"id":"4440faea-7499-46a5-bfaf-29f6c17e2949","type":"CDSView"},{"attributes":{"formatter":{"id":"eff3d18e-9a18-4887-87f1-c2e55340ea99","type":"BasicTickFormatter"},"plot":{"id":"8b19d9e6-1bc0-4545-802a-5c7145a2a7cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"db01f1b2-81a9-40fd-ab6c-1534b0cca278","type":"BasicTicker"}},"id":"e75f5df8-771f-4124-9371-17bfff7cb515","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Select Here"},"id":"a36aebef-b954-466b-8ec1-2474e7f7bd79","type":"Title"},{"attributes":{"data_source":{"id":"d8d40c92-bb02-4659-8411-43c095ebc475","type":"ColumnDataSource"},"glyph":{"id":"4fbba544-168b-4352-9dd6-7a555264a18f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d343ccc8-59c0-4468-a04f-3a75ab6e187d","type":"Circle"},"selection_glyph":null,"view":{"id":"c5823a7b-8c9f-420c-80b6-b1e2f5b31715","type":"CDSView"}},"id":"2144d852-a7e7-449f-9d91-3d96baea08b4","type":"GlyphRenderer"},{"attributes":{},"id":"19b9f16c-187e-4a77-b17a-6d8620835ed4","type":"BasicTicker"}],"root_ids":["8b19d9e6-1bc0-4545-802a-5c7145a2a7cd"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"8861fe22-68c6-466a-b86a-b77077cf21cf","elementid":"cdcaa4f9-bcc5-4dc9-9fa0-46c716844f44","modelid":"8b19d9e6-1bc0-4545-802a-5c7145a2a7cd"}];
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