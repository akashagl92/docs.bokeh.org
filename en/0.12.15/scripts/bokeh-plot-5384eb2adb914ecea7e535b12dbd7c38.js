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
      };var element = document.getElementById("52ca1468-48b5-4bb8-885b-7d3e14ed0406");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '52ca1468-48b5-4bb8-885b-7d3e14ed0406' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8b7f5e01-c22b-45f7-8ac1-5db67bd6713d":{"roots":{"references":[{"attributes":{"data_source":{"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"},"glyph":{"id":"2f3d10ae-7670-4da3-a144-d3740d0bc10e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74ed81fc-4ba3-430a-af1b-8a70bca022bf","type":"CDSView"}},"id":"d7465612-0ad4-439b-a1a3-b041ff39e15e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"27f47f49-b9e0-449f-b562-f3e3328ddb86","type":"Circle"},{"attributes":{},"id":"9adf87c3-8479-4066-adbf-3e6e9854b12a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"50b87c52-c882-4642-977e-3f248e0768e2","type":"Circle"},{"attributes":{"plot":{"id":"8dc4108d-aba5-42f4-afda-85eb074d421a","type":"Plot"},"ticker":{"id":"9adf87c3-8479-4066-adbf-3e6e9854b12a","type":"BasicTicker"}},"id":"36bc15d2-63f9-4ff4-87ac-faa4c3ee20e7","type":"Grid"},{"attributes":{"source":{"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"}},"id":"74ed81fc-4ba3-430a-af1b-8a70bca022bf","type":"CDSView"},{"attributes":{"children":[{"id":"13dc6095-ef44-4906-8d54-2b14ebbb89e3","type":"Plot"},{"id":"5f186a00-bdde-4888-bbfb-2c8d6d216f81","type":"Plot"}]},"id":"2a7badc2-af1d-4dae-a686-944f395442ad","type":"Row"},{"attributes":{},"id":"df697239-230d-4fd6-a4b7-7de829ea3261","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"8dc4108d-aba5-42f4-afda-85eb074d421a","type":"Plot"},"ticker":{"id":"df697239-230d-4fd6-a4b7-7de829ea3261","type":"BasicTicker"}},"id":"53d72d4b-2481-4abd-b657-66d3740a7d9b","type":"Grid"},{"attributes":{"data_source":{"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"},"glyph":{"id":"50b87c52-c882-4642-977e-3f248e0768e2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"fefb8cc8-fb91-4c68-8948-ad0e3de1c39b","type":"CDSView"}},"id":"7f513e53-fc4c-4e8c-8b6f-53c6f377cb69","type":"GlyphRenderer"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"d93f09d9-f31f-4623-bb3e-362f492093bd","type":"Line"},{"attributes":{"source":{"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"}},"id":"fefb8cc8-fb91-4c68-8948-ad0e3de1c39b","type":"CDSView"},{"attributes":{"children":[{"id":"2a7badc2-af1d-4dae-a686-944f395442ad","type":"Row"},{"id":"5ff27e96-5cb3-4dde-bfb1-4aedf2548d24","type":"Row"}]},"id":"02b08b73-06c6-460f-8c11-7f03f4c3cd2a","type":"Column"},{"attributes":{},"id":"1e32cbc6-daa3-48d6-b911-64614fd8f8c1","type":"LinearScale"},{"attributes":{"data_source":{"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"},"glyph":{"id":"d93f09d9-f31f-4623-bb3e-362f492093bd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f9ed540e-655b-4786-9fdc-b55a0d6ef0d6","type":"CDSView"}},"id":"cddac6cb-4922-4f59-93d6-5482a85bbba9","type":"GlyphRenderer"},{"attributes":{},"id":"63424ca5-7592-4d10-b00b-15f29af81b11","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"}},"id":"f9ed540e-655b-4786-9fdc-b55a0d6ef0d6","type":"CDSView"},{"attributes":{},"id":"8ea5af6d-ecd9-4250-a35a-251950aafbcb","type":"LinearScale"},{"attributes":{},"id":"ece936e0-b667-47f3-a792-cbc2fcadf429","type":"BasicTickFormatter"},{"attributes":{},"id":"cf01ace1-4c35-4cea-a182-0945058df9aa","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f347c45a-e08c-4d02-b54c-a911af71b1ba","type":"Toolbar"},{"attributes":{"children":[{"id":"8dc4108d-aba5-42f4-afda-85eb074d421a","type":"Plot"},{"id":"05f64302-6f8b-45c6-bc27-3bf0d0bc7371","type":"Plot"}]},"id":"5ff27e96-5cb3-4dde-bfb1-4aedf2548d24","type":"Row"},{"attributes":{"data_source":{"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"},"glyph":{"id":"27f47f49-b9e0-449f-b562-f3e3328ddb86","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e601a6e5-f22a-4c93-b55d-5df33c319f1b","type":"CDSView"}},"id":"25042990-ce48-4bc2-b29e-68da47102172","type":"GlyphRenderer"},{"attributes":{},"id":"d5483c5b-3d94-4f2e-94e9-3e5e1e290a66","type":"LinearScale"},{"attributes":{"source":{"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"}},"id":"e601a6e5-f22a-4c93-b55d-5df33c319f1b","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"b9a39267-43b6-4805-aae5-c1a5b91af6de","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"54fdbd47-287e-4ca5-b514-421508122b86","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b9a39267-43b6-4805-aae5-c1a5b91af6de","type":"LinearAxis"},{"id":"54fdbd47-287e-4ca5-b514-421508122b86","type":"LinearAxis"},{"id":"6c3601ab-ef59-4f3c-83a1-85e65fe23095","type":"Grid"},{"id":"9ab0cf83-1c17-4e5e-8684-94d99ae192cb","type":"Grid"},{"id":"d7465612-0ad4-439b-a1a3-b041ff39e15e","type":"GlyphRenderer"},{"id":"7f513e53-fc4c-4e8c-8b6f-53c6f377cb69","type":"GlyphRenderer"}],"title":{"id":"53d7247e-81af-419e-812f-4a8e82ade762","type":"Title"},"toolbar":{"id":"f347c45a-e08c-4d02-b54c-a911af71b1ba","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b10cb9dc-0f90-4c3f-bd3c-2938332a90a3","type":"Range1d"},"x_scale":{"id":"30ba5aae-c019-4368-98ee-017fe6bd7687","type":"LinearScale"},"y_range":{"id":"f0e77a5d-98ab-49f9-b070-9e372911ea8f","type":"Range1d"},"y_scale":{"id":"e10cd558-b264-46a5-9b36-4cfd42a1c5d4","type":"LinearScale"}},"id":"05f64302-6f8b-45c6-bc27-3bf0d0bc7371","type":"Plot"},{"attributes":{},"id":"5c1e0ace-3352-4cac-b447-a192a88e2643","type":"BasicTickFormatter"},{"attributes":{},"id":"e3fb67ad-475e-4e77-bb26-793b206d72ac","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"6ca27576-df9b-46c4-ba7d-d8657f526781","type":"BasicTickFormatter"},"plot":{"id":"05f64302-6f8b-45c6-bc27-3bf0d0bc7371","type":"Plot"},"ticker":{"id":"b012da21-98ec-46a0-ae17-56548e7197df","type":"BasicTicker"}},"id":"b9a39267-43b6-4805-aae5-c1a5b91af6de","type":"LinearAxis"},{"attributes":{},"id":"e10cd558-b264-46a5-9b36-4cfd42a1c5d4","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"266efdb6-7956-460e-a40b-e576a3bcbda0","type":"BasicTickFormatter"},"plot":{"id":"05f64302-6f8b-45c6-bc27-3bf0d0bc7371","type":"Plot"},"ticker":{"id":"1a5df7ab-3e6a-4785-8db5-8f175bae0e70","type":"BasicTicker"}},"id":"54fdbd47-287e-4ca5-b514-421508122b86","type":"LinearAxis"},{"attributes":{},"id":"fdc14894-790e-4317-9669-a0fee6116ae9","type":"LinearScale"},{"attributes":{"plot":null,"text":"IV"},"id":"53d7247e-81af-419e-812f-4a8e82ade762","type":"Title"},{"attributes":{},"id":"870d973f-702d-4942-a501-0797266f4fc0","type":"BasicTickFormatter"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"2f3d10ae-7670-4da3-a144-d3740d0bc10e","type":"Line"},{"attributes":{},"id":"8a5e8703-07a7-476d-8174-721cf6c2d2e1","type":"BasicTickFormatter"},{"attributes":{},"id":"b012da21-98ec-46a0-ae17-56548e7197df","type":"BasicTicker"},{"attributes":{"plot":{"id":"05f64302-6f8b-45c6-bc27-3bf0d0bc7371","type":"Plot"},"ticker":{"id":"b012da21-98ec-46a0-ae17-56548e7197df","type":"BasicTicker"}},"id":"6c3601ab-ef59-4f3c-83a1-85e65fe23095","type":"Grid"},{"attributes":{},"id":"6ca27576-df9b-46c4-ba7d-d8657f526781","type":"BasicTickFormatter"},{"attributes":{},"id":"1a5df7ab-3e6a-4785-8db5-8f175bae0e70","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"05f64302-6f8b-45c6-bc27-3bf0d0bc7371","type":"Plot"},"ticker":{"id":"1a5df7ab-3e6a-4785-8db5-8f175bae0e70","type":"BasicTicker"}},"id":"9ab0cf83-1c17-4e5e-8684-94d99ae192cb","type":"Grid"},{"attributes":{},"id":"35e2a640-4047-4dff-a3d3-a2aa0d60768c","type":"BasicTickFormatter"},{"attributes":{},"id":"30ba5aae-c019-4368-98ee-017fe6bd7687","type":"LinearScale"},{"attributes":{},"id":"266efdb6-7956-460e-a40b-e576a3bcbda0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xi","yi","xii","yii","xiii","yiii","xiv","yiv"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}},"selected":null,"selection_policy":null},"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"87f86bfd-01ed-4bc4-9c28-2a8d8403a743","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}},"selected":null,"selection_policy":null},"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"b10cb9dc-0f90-4c3f-bd3c-2938332a90a3","type":"Range1d"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"f0e77a5d-98ab-49f9-b070-9e372911ea8f","type":"Range1d"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"7a6f72a9-03c0-4bb1-b7ea-120ec8782bb9","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"15feb6c0-78f1-4101-bd2d-9e983df5ca48","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7a6f72a9-03c0-4bb1-b7ea-120ec8782bb9","type":"LinearAxis"},{"id":"15feb6c0-78f1-4101-bd2d-9e983df5ca48","type":"LinearAxis"},{"id":"ec21199a-d549-4b8b-b1c6-acd1c3c96ba3","type":"Grid"},{"id":"ac550647-5e1e-4c3f-a5f0-22418e5a54e8","type":"Grid"},{"id":"f9f3956e-9ef1-44b6-ae96-883f621a732e","type":"GlyphRenderer"},{"id":"c3479ac3-28ad-4a09-83fb-3d569d2db508","type":"GlyphRenderer"}],"title":{"id":"b86a78ff-8a91-499b-a3f6-f29b2e7c4c6a","type":"Title"},"toolbar":{"id":"87f86bfd-01ed-4bc4-9c28-2a8d8403a743","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b10cb9dc-0f90-4c3f-bd3c-2938332a90a3","type":"Range1d"},"x_scale":{"id":"1e32cbc6-daa3-48d6-b911-64614fd8f8c1","type":"LinearScale"},"y_range":{"id":"f0e77a5d-98ab-49f9-b070-9e372911ea8f","type":"Range1d"},"y_scale":{"id":"8ea5af6d-ecd9-4250-a35a-251950aafbcb","type":"LinearScale"}},"id":"13dc6095-ef44-4906-8d54-2b14ebbb89e3","type":"Plot"},{"attributes":{"plot":null,"text":"I"},"id":"b86a78ff-8a91-499b-a3f6-f29b2e7c4c6a","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"734f5d69-f1c1-470e-9b09-2b85605202f3","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"ece936e0-b667-47f3-a792-cbc2fcadf429","type":"BasicTickFormatter"},"plot":{"id":"13dc6095-ef44-4906-8d54-2b14ebbb89e3","type":"Plot"},"ticker":{"id":"fabef1ed-88c9-432c-936b-c1148e224156","type":"BasicTicker"}},"id":"7a6f72a9-03c0-4bb1-b7ea-120ec8782bb9","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5c1e0ace-3352-4cac-b447-a192a88e2643","type":"BasicTickFormatter"},"plot":{"id":"13dc6095-ef44-4906-8d54-2b14ebbb89e3","type":"Plot"},"ticker":{"id":"0e568ab9-2cae-4b66-bc1c-e79fb60a5b09","type":"BasicTicker"}},"id":"15feb6c0-78f1-4101-bd2d-9e983df5ca48","type":"LinearAxis"},{"attributes":{},"id":"fabef1ed-88c9-432c-936b-c1148e224156","type":"BasicTicker"},{"attributes":{"plot":{"id":"13dc6095-ef44-4906-8d54-2b14ebbb89e3","type":"Plot"},"ticker":{"id":"fabef1ed-88c9-432c-936b-c1148e224156","type":"BasicTicker"}},"id":"ec21199a-d549-4b8b-b1c6-acd1c3c96ba3","type":"Grid"},{"attributes":{},"id":"0e568ab9-2cae-4b66-bc1c-e79fb60a5b09","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"13dc6095-ef44-4906-8d54-2b14ebbb89e3","type":"Plot"},"ticker":{"id":"0e568ab9-2cae-4b66-bc1c-e79fb60a5b09","type":"BasicTicker"}},"id":"ac550647-5e1e-4c3f-a5f0-22418e5a54e8","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5d867b68-ca9a-45d3-b552-259d0f16c4f4","type":"Line"},{"attributes":{"data_source":{"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"},"glyph":{"id":"5d867b68-ca9a-45d3-b552-259d0f16c4f4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0b22aa59-be77-4b87-8a3c-4e89f5f6ef3a","type":"CDSView"}},"id":"f9f3956e-9ef1-44b6-ae96-883f621a732e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"}},"id":"0b22aa59-be77-4b87-8a3c-4e89f5f6ef3a","type":"CDSView"},{"attributes":{"plot":null,"text":"III"},"id":"2ce31d8b-e21f-4c5b-9d16-7213bd49fdcf","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ad4d4e69-475f-4e39-8960-71045a3ecc5f","type":"Toolbar"},{"attributes":{"data_source":{"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"},"glyph":{"id":"734f5d69-f1c1-470e-9b09-2b85605202f3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"81cf1420-4eff-4092-93fc-0f84d7206393","type":"CDSView"}},"id":"c3479ac3-28ad-4a09-83fb-3d569d2db508","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"}},"id":"81cf1420-4eff-4092-93fc-0f84d7206393","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"c0bab85d-bf5d-470a-bfdc-a434157e562b","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"519ee05a-6ec8-49dd-97db-a27d9d8ae6b8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c0bab85d-bf5d-470a-bfdc-a434157e562b","type":"LinearAxis"},{"id":"519ee05a-6ec8-49dd-97db-a27d9d8ae6b8","type":"LinearAxis"},{"id":"7cedc35d-c3b1-4b6c-bb6e-d8ab4697da7c","type":"Grid"},{"id":"94a856f9-024f-4c50-a8e9-724bed162e47","type":"Grid"},{"id":"d1bd26a3-6f62-4e39-8644-4989d7b33c76","type":"GlyphRenderer"},{"id":"d807256a-2847-4f08-b455-deb9cbee8de2","type":"GlyphRenderer"}],"title":{"id":"cf7e1dbf-b283-4125-b744-e123cd150f02","type":"Title"},"toolbar":{"id":"ad4d4e69-475f-4e39-8960-71045a3ecc5f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b10cb9dc-0f90-4c3f-bd3c-2938332a90a3","type":"Range1d"},"x_scale":{"id":"e3fb67ad-475e-4e77-bb26-793b206d72ac","type":"LinearScale"},"y_range":{"id":"f0e77a5d-98ab-49f9-b070-9e372911ea8f","type":"Range1d"},"y_scale":{"id":"cf01ace1-4c35-4cea-a182-0945058df9aa","type":"LinearScale"}},"id":"5f186a00-bdde-4888-bbfb-2c8d6d216f81","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"63424ca5-7592-4d10-b00b-15f29af81b11","type":"BasicTickFormatter"},"plot":{"id":"5f186a00-bdde-4888-bbfb-2c8d6d216f81","type":"Plot"},"ticker":{"id":"8199eaf2-ba35-4ed3-8ff0-80f3d0795336","type":"BasicTicker"}},"id":"c0bab85d-bf5d-470a-bfdc-a434157e562b","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"870d973f-702d-4942-a501-0797266f4fc0","type":"BasicTickFormatter"},"plot":{"id":"5f186a00-bdde-4888-bbfb-2c8d6d216f81","type":"Plot"},"ticker":{"id":"7a67e57f-8612-4e5c-b68b-b72a3a363053","type":"BasicTicker"}},"id":"519ee05a-6ec8-49dd-97db-a27d9d8ae6b8","type":"LinearAxis"},{"attributes":{"plot":null,"text":"II"},"id":"cf7e1dbf-b283-4125-b744-e123cd150f02","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"b694b128-53bb-4e54-b8b9-2fbd2c76a9ad","type":"Circle"},{"attributes":{},"id":"8199eaf2-ba35-4ed3-8ff0-80f3d0795336","type":"BasicTicker"},{"attributes":{"plot":{"id":"5f186a00-bdde-4888-bbfb-2c8d6d216f81","type":"Plot"},"ticker":{"id":"8199eaf2-ba35-4ed3-8ff0-80f3d0795336","type":"BasicTicker"}},"id":"7cedc35d-c3b1-4b6c-bb6e-d8ab4697da7c","type":"Grid"},{"attributes":{},"id":"7a67e57f-8612-4e5c-b68b-b72a3a363053","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5f186a00-bdde-4888-bbfb-2c8d6d216f81","type":"Plot"},"ticker":{"id":"7a67e57f-8612-4e5c-b68b-b72a3a363053","type":"BasicTicker"}},"id":"94a856f9-024f-4c50-a8e9-724bed162e47","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1d0238fe-aa00-4b49-b92c-50c54e87ad8f","type":"Line"},{"attributes":{"data_source":{"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"},"glyph":{"id":"1d0238fe-aa00-4b49-b92c-50c54e87ad8f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"761955d5-37e3-4b25-8018-2e1c1d5e8e5f","type":"CDSView"}},"id":"d1bd26a3-6f62-4e39-8644-4989d7b33c76","type":"GlyphRenderer"},{"attributes":{"source":{"id":"257d3565-f198-4814-9028-fb847f16b052","type":"ColumnDataSource"}},"id":"761955d5-37e3-4b25-8018-2e1c1d5e8e5f","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9278a275-5bf3-4665-9b72-1303ad3ba9ab","type":"Toolbar"},{"attributes":{"data_source":{"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"},"glyph":{"id":"b694b128-53bb-4e54-b8b9-2fbd2c76a9ad","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0b5ac04a-4a30-4646-bf31-6735b682e07f","type":"CDSView"}},"id":"d807256a-2847-4f08-b455-deb9cbee8de2","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1dd22122-b7d6-4120-ab1f-27e72034e918","type":"ColumnDataSource"}},"id":"0b5ac04a-4a30-4646-bf31-6735b682e07f","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"52b3701f-1459-4e91-8516-ee8395291c15","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"fe01d7a8-bae0-4336-8db1-1a8021574569","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"52b3701f-1459-4e91-8516-ee8395291c15","type":"LinearAxis"},{"id":"fe01d7a8-bae0-4336-8db1-1a8021574569","type":"LinearAxis"},{"id":"36bc15d2-63f9-4ff4-87ac-faa4c3ee20e7","type":"Grid"},{"id":"53d72d4b-2481-4abd-b657-66d3740a7d9b","type":"Grid"},{"id":"cddac6cb-4922-4f59-93d6-5482a85bbba9","type":"GlyphRenderer"},{"id":"25042990-ce48-4bc2-b29e-68da47102172","type":"GlyphRenderer"}],"title":{"id":"2ce31d8b-e21f-4c5b-9d16-7213bd49fdcf","type":"Title"},"toolbar":{"id":"9278a275-5bf3-4665-9b72-1303ad3ba9ab","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b10cb9dc-0f90-4c3f-bd3c-2938332a90a3","type":"Range1d"},"x_scale":{"id":"d5483c5b-3d94-4f2e-94e9-3e5e1e290a66","type":"LinearScale"},"y_range":{"id":"f0e77a5d-98ab-49f9-b070-9e372911ea8f","type":"Range1d"},"y_scale":{"id":"fdc14894-790e-4317-9669-a0fee6116ae9","type":"LinearScale"}},"id":"8dc4108d-aba5-42f4-afda-85eb074d421a","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"8a5e8703-07a7-476d-8174-721cf6c2d2e1","type":"BasicTickFormatter"},"plot":{"id":"8dc4108d-aba5-42f4-afda-85eb074d421a","type":"Plot"},"ticker":{"id":"9adf87c3-8479-4066-adbf-3e6e9854b12a","type":"BasicTicker"}},"id":"52b3701f-1459-4e91-8516-ee8395291c15","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"35e2a640-4047-4dff-a3d3-a2aa0d60768c","type":"BasicTickFormatter"},"plot":{"id":"8dc4108d-aba5-42f4-afda-85eb074d421a","type":"Plot"},"ticker":{"id":"df697239-230d-4fd6-a4b7-7de829ea3261","type":"BasicTicker"}},"id":"fe01d7a8-bae0-4336-8db1-1a8021574569","type":"LinearAxis"}],"root_ids":["02b08b73-06c6-460f-8c11-7f03f4c3cd2a"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"8b7f5e01-c22b-45f7-8ac1-5db67bd6713d","elementid":"52ca1468-48b5-4bb8-885b-7d3e14ed0406","modelid":"02b08b73-06c6-460f-8c11-7f03f4c3cd2a"}];
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