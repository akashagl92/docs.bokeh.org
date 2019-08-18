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
      };var element = document.getElementById("4d86da6e-59f1-4619-895a-9e2480b5c606");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d86da6e-59f1-4619-895a-9e2480b5c606' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"00e54cf7-6e4a-48a5-b5c0-f13d544ed17d":{"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"cd8c2a1e-9587-4126-aa97-530591711e3a","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"1527bd69-3105-47ad-897e-09619f719cd4","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"57f2370d-eb21-43ec-b17c-67cf03901793","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"14a6c99a-82d7-41f4-b70d-b3d51c4e051d","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"04ca0137-f008-4777-96ea-9eb44e553586","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"fe581a6b-4f46-4d08-b16d-69be02bda4fd","type":"VBar"},{"attributes":{"data_source":{"id":"fbb19dba-d475-42ed-9686-b2b613ac5e13","type":"ColumnDataSource"},"glyph":{"id":"57f2370d-eb21-43ec-b17c-67cf03901793","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"d5c0747f-7db4-45b4-8a77-7bfb736acde1","type":"VBar"},"selection_glyph":null,"view":{"id":"7e03406f-e166-4b94-9a00-2ac157014826","type":"CDSView"}},"id":"ab685638-e8e0-4045-ae88-408d71799429","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"790485cc-b18e-4502-938e-5a635102e13b","type":"GlyphRenderer"}]},"id":"c30a693e-cb3b-4a5c-8507-686ce4072420","type":"LegendItem"},{"attributes":{},"id":"847cbf7a-9620-40e2-8295-57f28d45cda8","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"renderers":[{"id":"28fd0e32-d321-4e97-bb5e-582e6a118d5f","type":"GlyphRenderer"}],"tooltips":[["2017 total","@2017"],["index","$index"]]},"id":"381bdd1a-8279-4697-997e-57cd39c5fe0e","type":"HoverTool"},{"attributes":{},"id":"261cb8de-55d6-4101-8344-f41a5fd5e24d","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"14a6c99a-82d7-41f4-b70d-b3d51c4e051d","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"04ca0137-f008-4777-96ea-9eb44e553586","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ea6b8579-c726-4cc8-9eb6-4d5743a9a3b3","type":"VBar"},{"attributes":{"below":[{"id":"bfc33573-33d5-47fd-ab2a-9adb66055b6d","type":"CategoricalAxis"}],"left":[{"id":"82071fd8-1392-4682-ab39-092c4201c09d","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"bfc33573-33d5-47fd-ab2a-9adb66055b6d","type":"CategoricalAxis"},{"id":"7575276c-3442-4865-b793-455266dd4a92","type":"Grid"},{"id":"82071fd8-1392-4682-ab39-092c4201c09d","type":"LinearAxis"},{"id":"9d0dc33c-2bea-4c03-a20c-df224d625b14","type":"Grid"},{"id":"18e712f4-83ee-4705-b89d-0782b0c86605","type":"Legend"},{"id":"ab685638-e8e0-4045-ae88-408d71799429","type":"GlyphRenderer"},{"id":"790485cc-b18e-4502-938e-5a635102e13b","type":"GlyphRenderer"},{"id":"28fd0e32-d321-4e97-bb5e-582e6a118d5f","type":"GlyphRenderer"}],"title":{"id":"40c836ad-d7aa-429f-ad47-a3ad66678378","type":"Title"},"toolbar":{"id":"35889326-669c-4586-9068-c65ce02bcb4a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2712a824-0fca-465d-a24a-8c0c1040727a","type":"FactorRange"},"x_scale":{"id":"197179a9-711d-401d-a9d8-eeaa85c19d64","type":"CategoricalScale"},"y_range":{"id":"c471c39b-2356-4470-941c-dc136653ffe0","type":"DataRange1d"},"y_scale":{"id":"c2bd60d9-31b2-462d-987b-aa3993ab7fbc","type":"LinearScale"}},"id":"30980675-6a8e-4667-ae8c-9b30ffe19ef2","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["2015","2016"]},"id":"04ca0137-f008-4777-96ea-9eb44e553586","type":"Stack"},{"attributes":{"items":[{"id":"eb77783a-be12-490e-ad1e-a8a4fe98cec7","type":"LegendItem"},{"id":"c30a693e-cb3b-4a5c-8507-686ce4072420","type":"LegendItem"},{"id":"f63f8615-bdf1-4fd6-9700-9a655ea79c58","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"30980675-6a8e-4667-ae8c-9b30ffe19ef2","subtype":"Figure","type":"Plot"}},"id":"18e712f4-83ee-4705-b89d-0782b0c86605","type":"Legend"},{"attributes":{"callback":null,"renderers":[{"id":"ab685638-e8e0-4045-ae88-408d71799429","type":"GlyphRenderer"}],"tooltips":[["2015 total","@2015"],["index","$index"]]},"id":"932465a3-89bd-45f7-a6bb-e3c73b2608c1","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"fbb19dba-d475-42ed-9686-b2b613ac5e13","type":"ColumnDataSource"},{"attributes":{"fields":["2015"]},"id":"14a6c99a-82d7-41f4-b70d-b3d51c4e051d","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"33f1f5f0-c84a-4e25-872c-fba59b834167","type":"Stack"},{"attributes":{"formatter":{"id":"261cb8de-55d6-4101-8344-f41a5fd5e24d","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"30980675-6a8e-4667-ae8c-9b30ffe19ef2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c6551f0-d64c-4e1f-bfbb-5686c4985d42","type":"BasicTicker"}},"id":"82071fd8-1392-4682-ab39-092c4201c09d","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"40c836ad-d7aa-429f-ad47-a3ad66678378","type":"Title"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"28fd0e32-d321-4e97-bb5e-582e6a118d5f","type":"GlyphRenderer"}]},"id":"f63f8615-bdf1-4fd6-9700-9a655ea79c58","type":"LegendItem"},{"attributes":{"callback":null,"renderers":[{"id":"790485cc-b18e-4502-938e-5a635102e13b","type":"GlyphRenderer"}],"tooltips":[["2016 total","@2016"],["index","$index"]]},"id":"209174b0-25a8-476f-9ac8-0ec6e34f56fd","type":"HoverTool"},{"attributes":{"bottom":{"expr":{"id":"cd8c2a1e-9587-4126-aa97-530591711e3a","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"1527bd69-3105-47ad-897e-09619f719cd4","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"d5c0747f-7db4-45b4-8a77-7bfb736acde1","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"30980675-6a8e-4667-ae8c-9b30ffe19ef2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c6551f0-d64c-4e1f-bfbb-5686c4985d42","type":"BasicTicker"}},"id":"9d0dc33c-2bea-4c03-a20c-df224d625b14","type":"Grid"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"ab685638-e8e0-4045-ae88-408d71799429","type":"GlyphRenderer"}]},"id":"eb77783a-be12-490e-ad1e-a8a4fe98cec7","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"a4b2cd8b-d3b6-40b9-8313-30f6b9f291ca","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"33f1f5f0-c84a-4e25-872c-fba59b834167","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"7f0b6cf5-ad84-455f-bfe2-7a2eb986e6fb","type":"VBar"},{"attributes":{"formatter":{"id":"847cbf7a-9620-40e2-8295-57f28d45cda8","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"30980675-6a8e-4667-ae8c-9b30ffe19ef2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0551677e-6cd0-4b95-a657-7db7a52fe2a2","type":"CategoricalTicker"}},"id":"bfc33573-33d5-47fd-ab2a-9adb66055b6d","type":"CategoricalAxis"},{"attributes":{},"id":"3c6551f0-d64c-4e1f-bfbb-5686c4985d42","type":"BasicTicker"},{"attributes":{"source":{"id":"fbb19dba-d475-42ed-9686-b2b613ac5e13","type":"ColumnDataSource"}},"id":"1199a39e-7071-428f-9e5d-e0188a6e7606","type":"CDSView"},{"attributes":{},"id":"c2bd60d9-31b2-462d-987b-aa3993ab7fbc","type":"LinearScale"},{"attributes":{"data_source":{"id":"fbb19dba-d475-42ed-9686-b2b613ac5e13","type":"ColumnDataSource"},"glyph":{"id":"e4e5fb60-399f-4b30-a26f-45a60632b3a5","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"7f0b6cf5-ad84-455f-bfe2-7a2eb986e6fb","type":"VBar"},"selection_glyph":null,"view":{"id":"879a09b8-9a66-45fe-9844-885dd1caa85e","type":"CDSView"}},"id":"28fd0e32-d321-4e97-bb5e-582e6a118d5f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fbb19dba-d475-42ed-9686-b2b613ac5e13","type":"ColumnDataSource"},"glyph":{"id":"ea6b8579-c726-4cc8-9eb6-4d5743a9a3b3","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"fe581a6b-4f46-4d08-b16d-69be02bda4fd","type":"VBar"},"selection_glyph":null,"view":{"id":"1199a39e-7071-428f-9e5d-e0188a6e7606","type":"CDSView"}},"id":"790485cc-b18e-4502-938e-5a635102e13b","type":"GlyphRenderer"},{"attributes":{"fields":[]},"id":"cd8c2a1e-9587-4126-aa97-530591711e3a","type":"Stack"},{"attributes":{},"id":"197179a9-711d-401d-a9d8-eeaa85c19d64","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"30980675-6a8e-4667-ae8c-9b30ffe19ef2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0551677e-6cd0-4b95-a657-7db7a52fe2a2","type":"CategoricalTicker"}},"id":"7575276c-3442-4865-b793-455266dd4a92","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"a4b2cd8b-d3b6-40b9-8313-30f6b9f291ca","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"33f1f5f0-c84a-4e25-872c-fba59b834167","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e4e5fb60-399f-4b30-a26f-45a60632b3a5","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"a4b2cd8b-d3b6-40b9-8313-30f6b9f291ca","type":"Stack"},{"attributes":{"source":{"id":"fbb19dba-d475-42ed-9686-b2b613ac5e13","type":"ColumnDataSource"}},"id":"7e03406f-e166-4b94-9a00-2ac157014826","type":"CDSView"},{"attributes":{"source":{"id":"fbb19dba-d475-42ed-9686-b2b613ac5e13","type":"ColumnDataSource"}},"id":"879a09b8-9a66-45fe-9844-885dd1caa85e","type":"CDSView"},{"attributes":{"callback":null,"start":0},"id":"c471c39b-2356-4470-941c-dc136653ffe0","type":"DataRange1d"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"2712a824-0fca-465d-a24a-8c0c1040727a","type":"FactorRange"},{"attributes":{"fields":["2015"]},"id":"1527bd69-3105-47ad-897e-09619f719cd4","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"932465a3-89bd-45f7-a6bb-e3c73b2608c1","type":"HoverTool"},{"id":"209174b0-25a8-476f-9ac8-0ec6e34f56fd","type":"HoverTool"},{"id":"381bdd1a-8279-4697-997e-57cd39c5fe0e","type":"HoverTool"}]},"id":"35889326-669c-4586-9068-c65ce02bcb4a","type":"Toolbar"},{"attributes":{},"id":"0551677e-6cd0-4b95-a657-7db7a52fe2a2","type":"CategoricalTicker"}],"root_ids":["30980675-6a8e-4667-ae8c-9b30ffe19ef2"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"00e54cf7-6e4a-48a5-b5c0-f13d544ed17d","elementid":"4d86da6e-59f1-4619-895a-9e2480b5c606","modelid":"30980675-6a8e-4667-ae8c-9b30ffe19ef2"}];
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