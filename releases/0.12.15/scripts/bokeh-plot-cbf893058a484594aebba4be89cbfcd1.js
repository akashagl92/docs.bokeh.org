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
      };var element = document.getElementById("fc9ea8ff-e5a8-4628-a726-608860dd9b4c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc9ea8ff-e5a8-4628-a726-608860dd9b4c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fef5f92c-bbbc-4e54-bf31-8f502df7947b":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"29afe884-5788-48c2-a57b-7c2e66bbb253","subtype":"Figure","type":"Plot"},"ticker":{"id":"b05bc88d-6d0c-4279-8aba-f4bff2f91eca","type":"BasicTicker"}},"id":"843aaabc-b3e3-4c8c-b736-544bc6428c43","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"2ce13dfd-f996-433f-9e11-f1d45d8b8d5f","type":"Line"},{"attributes":{"below":[{"id":"1f1e8078-3ca0-44d7-a94c-78a9e9d72b87","type":"LinearAxis"}],"left":[{"id":"24fd6d08-1c09-4bb7-a493-8b878c75edc8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1f1e8078-3ca0-44d7-a94c-78a9e9d72b87","type":"LinearAxis"},{"id":"cce8b435-f3d4-42a3-8fa9-1b189bd68140","type":"Grid"},{"id":"24fd6d08-1c09-4bb7-a493-8b878c75edc8","type":"LinearAxis"},{"id":"843aaabc-b3e3-4c8c-b736-544bc6428c43","type":"Grid"},{"id":"f49e12a0-76d2-463e-90ed-e12cc79ab2ed","type":"BoxAnnotation"},{"id":"0351a212-0ae3-4db2-81ec-18627cb546e9","type":"GlyphRenderer"}],"title":{"id":"a7d83faa-b78a-41e6-b22a-ffd35d3ae2d3","type":"Title"},"toolbar":{"id":"81a84039-0be8-441d-ae5d-0cbf7dc8c87d","type":"Toolbar"},"x_range":{"id":"ebf70c0a-141c-4b43-bf97-fdc110f239dd","type":"DataRange1d"},"x_scale":{"id":"e24f6cf9-c232-44ba-b131-4b0382f818b6","type":"LinearScale"},"y_range":{"id":"a74cb3bc-2bf8-470f-962f-cbaa6b450c18","type":"DataRange1d"},"y_scale":{"id":"12a790cb-3990-4a58-b606-4943e560f864","type":"LinearScale"}},"id":"29afe884-5788-48c2-a57b-7c2e66bbb253","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"a7d83faa-b78a-41e6-b22a-ffd35d3ae2d3","type":"Title"},{"attributes":{"formatter":{"id":"a160ff15-0951-4547-bc8b-b2ca042e8132","type":"BasicTickFormatter"},"plot":{"id":"29afe884-5788-48c2-a57b-7c2e66bbb253","subtype":"Figure","type":"Plot"},"ticker":{"id":"b05bc88d-6d0c-4279-8aba-f4bff2f91eca","type":"BasicTicker"}},"id":"24fd6d08-1c09-4bb7-a493-8b878c75edc8","type":"LinearAxis"},{"attributes":{},"id":"d787a59f-8e5f-44ef-84da-72bb2a054c45","type":"LinearScale"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97931200-1b53-4639-b8a0-d23c38e24ca0","type":"Line"},{"attributes":{"child":{"id":"11f5a86f-2053-41c3-8460-6184a66099de","subtype":"Figure","type":"Plot"},"title":"line"},"id":"98f2a133-3692-4fa2-8ae7-4e21224638e3","type":"Panel"},{"attributes":{"plot":null,"text":""},"id":"a7273014-bf61-43fd-b047-10d13189d1ec","type":"Title"},{"attributes":{"source":{"id":"ce088353-5702-4c36-be93-a6ff087d8cb8","type":"ColumnDataSource"}},"id":"02b7c026-70a5-4ab4-a4be-c133e0260e2b","type":"CDSView"},{"attributes":{},"id":"a160ff15-0951-4547-bc8b-b2ca042e8132","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"55af1b70-c1c1-4aa6-a7f5-7fc57e0f2ad1","type":"BasicTickFormatter"},"plot":{"id":"11f5a86f-2053-41c3-8460-6184a66099de","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7088bc9-4e05-45ad-9b55-c550ae47742f","type":"BasicTicker"}},"id":"387b1990-324d-4432-84ef-0f793ff774e8","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30345201-7a42-4044-8b16-dd79a93b945e","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d17aca50-48a0-4498-ae8d-86b622c999dc","type":"PanTool"},{"id":"7011bb1e-9f9a-4a6f-ad7d-c3985d007064","type":"WheelZoomTool"},{"id":"8cf9211d-5d98-4816-9387-3acd4647ecc7","type":"BoxZoomTool"},{"id":"78d828af-840b-4ec9-b2ec-6b8e5fa0a8a0","type":"SaveTool"},{"id":"7fe72733-a972-488a-b340-b68989c8bca8","type":"ResetTool"},{"id":"291e3c9c-3226-417c-b6b9-da7ae1884987","type":"HelpTool"}]},"id":"81a84039-0be8-441d-ae5d-0cbf7dc8c87d","type":"Toolbar"},{"attributes":{"plot":{"id":"29afe884-5788-48c2-a57b-7c2e66bbb253","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e615f68-de76-42e5-8701-83210688da82","type":"BasicTicker"}},"id":"cce8b435-f3d4-42a3-8fa9-1b189bd68140","type":"Grid"},{"attributes":{"plot":{"id":"11f5a86f-2053-41c3-8460-6184a66099de","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7088bc9-4e05-45ad-9b55-c550ae47742f","type":"BasicTicker"}},"id":"7646fc21-5b9d-4958-a914-83af19ea2da2","type":"Grid"},{"attributes":{},"id":"b05bc88d-6d0c-4279-8aba-f4bff2f91eca","type":"BasicTicker"},{"attributes":{"below":[{"id":"387b1990-324d-4432-84ef-0f793ff774e8","type":"LinearAxis"}],"left":[{"id":"98297b8f-73a5-44d4-ae4c-e747346ee378","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"387b1990-324d-4432-84ef-0f793ff774e8","type":"LinearAxis"},{"id":"7646fc21-5b9d-4958-a914-83af19ea2da2","type":"Grid"},{"id":"98297b8f-73a5-44d4-ae4c-e747346ee378","type":"LinearAxis"},{"id":"26183edb-22e2-43fa-9af8-c7c5e148b025","type":"Grid"},{"id":"30345201-7a42-4044-8b16-dd79a93b945e","type":"BoxAnnotation"},{"id":"18bcaf5b-3d03-4eae-a9a3-da007f5c3d8e","type":"GlyphRenderer"}],"title":{"id":"a7273014-bf61-43fd-b047-10d13189d1ec","type":"Title"},"toolbar":{"id":"6b24f21b-c863-4430-82c1-708b99b724fc","type":"Toolbar"},"x_range":{"id":"22d17699-9326-431a-acd7-cfea7b33d239","type":"DataRange1d"},"x_scale":{"id":"940c46d8-73d6-402c-9c94-8194477d089a","type":"LinearScale"},"y_range":{"id":"8374fdf5-802b-443e-ad7c-daf90f831263","type":"DataRange1d"},"y_scale":{"id":"d787a59f-8e5f-44ef-84da-72bb2a054c45","type":"LinearScale"}},"id":"11f5a86f-2053-41c3-8460-6184a66099de","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"22d17699-9326-431a-acd7-cfea7b33d239","type":"DataRange1d"},{"attributes":{},"id":"9e615f68-de76-42e5-8701-83210688da82","type":"BasicTicker"},{"attributes":{"callback":null,"tabs":[{"id":"45b0cf1d-4bea-4bf4-b629-9a078df8de94","type":"Panel"},{"id":"98f2a133-3692-4fa2-8ae7-4e21224638e3","type":"Panel"}]},"id":"371af2e2-6a87-4b8f-a095-fd31c5b4f9ef","type":"Tabs"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e566be6-1e63-4d9e-ac73-ffb49fe2f96b","type":"Circle"},{"attributes":{},"id":"291e3c9c-3226-417c-b6b9-da7ae1884987","type":"HelpTool"},{"attributes":{},"id":"55af1b70-c1c1-4aa6-a7f5-7fc57e0f2ad1","type":"BasicTickFormatter"},{"attributes":{},"id":"60f67012-8b61-495c-857c-b6974e6b6364","type":"BasicTickFormatter"},{"attributes":{},"id":"e24f6cf9-c232-44ba-b131-4b0382f818b6","type":"LinearScale"},{"attributes":{"overlay":{"id":"30345201-7a42-4044-8b16-dd79a93b945e","type":"BoxAnnotation"}},"id":"4ae38884-ce8e-4908-a065-86d4e731533f","type":"BoxZoomTool"},{"attributes":{},"id":"9b6723d5-623b-469e-8b6b-4110403c965b","type":"ResetTool"},{"attributes":{"callback":null},"id":"ebf70c0a-141c-4b43-bf97-fdc110f239dd","type":"DataRange1d"},{"attributes":{"formatter":{"id":"60f67012-8b61-495c-857c-b6974e6b6364","type":"BasicTickFormatter"},"plot":{"id":"11f5a86f-2053-41c3-8460-6184a66099de","subtype":"Figure","type":"Plot"},"ticker":{"id":"149a89e5-b55c-4432-af8b-55855d603576","type":"BasicTicker"}},"id":"98297b8f-73a5-44d4-ae4c-e747346ee378","type":"LinearAxis"},{"attributes":{"formatter":{"id":"f8ab6c36-7d01-476c-9308-af665135ad92","type":"BasicTickFormatter"},"plot":{"id":"29afe884-5788-48c2-a57b-7c2e66bbb253","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e615f68-de76-42e5-8701-83210688da82","type":"BasicTicker"}},"id":"1f1e8078-3ca0-44d7-a94c-78a9e9d72b87","type":"LinearAxis"},{"attributes":{},"id":"149a89e5-b55c-4432-af8b-55855d603576","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a74cb3bc-2bf8-470f-962f-cbaa6b450c18","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cb55d877-0036-4b03-b8a1-8eea959f1efa","type":"PanTool"},{"id":"ab9ded55-3baa-4ccc-b544-883b61226845","type":"WheelZoomTool"},{"id":"4ae38884-ce8e-4908-a065-86d4e731533f","type":"BoxZoomTool"},{"id":"db64d7d3-54e0-432f-8873-a6215fce056c","type":"SaveTool"},{"id":"9b6723d5-623b-469e-8b6b-4110403c965b","type":"ResetTool"},{"id":"07444d25-bdcd-49cf-b4f9-079eba5ccc35","type":"HelpTool"}]},"id":"6b24f21b-c863-4430-82c1-708b99b724fc","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"11f5a86f-2053-41c3-8460-6184a66099de","subtype":"Figure","type":"Plot"},"ticker":{"id":"149a89e5-b55c-4432-af8b-55855d603576","type":"BasicTicker"}},"id":"26183edb-22e2-43fa-9af8-c7c5e148b025","type":"Grid"},{"attributes":{"child":{"id":"29afe884-5788-48c2-a57b-7c2e66bbb253","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"45b0cf1d-4bea-4bf4-b629-9a078df8de94","type":"Panel"},{"attributes":{},"id":"12a790cb-3990-4a58-b606-4943e560f864","type":"LinearScale"},{"attributes":{"data_source":{"id":"ce088353-5702-4c36-be93-a6ff087d8cb8","type":"ColumnDataSource"},"glyph":{"id":"521ca225-c07e-40f0-a882-080415b0a0a6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4e566be6-1e63-4d9e-ac73-ffb49fe2f96b","type":"Circle"},"selection_glyph":null,"view":{"id":"02b7c026-70a5-4ab4-a4be-c133e0260e2b","type":"CDSView"}},"id":"0351a212-0ae3-4db2-81ec-18627cb546e9","type":"GlyphRenderer"},{"attributes":{},"id":"7011bb1e-9f9a-4a6f-ad7d-c3985d007064","type":"WheelZoomTool"},{"attributes":{},"id":"ab9ded55-3baa-4ccc-b544-883b61226845","type":"WheelZoomTool"},{"attributes":{"source":{"id":"9eade5a5-c590-4051-9903-40fd5d3a1fd0","type":"ColumnDataSource"}},"id":"31962edd-dbcc-4a3b-8db3-1e6cf03ffd9c","type":"CDSView"},{"attributes":{},"id":"d17aca50-48a0-4498-ae8d-86b622c999dc","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"521ca225-c07e-40f0-a882-080415b0a0a6","type":"Circle"},{"attributes":{},"id":"cb55d877-0036-4b03-b8a1-8eea959f1efa","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":null,"selection_policy":null},"id":"ce088353-5702-4c36-be93-a6ff087d8cb8","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":null,"selection_policy":null},"id":"9eade5a5-c590-4051-9903-40fd5d3a1fd0","type":"ColumnDataSource"},{"attributes":{},"id":"78d828af-840b-4ec9-b2ec-6b8e5fa0a8a0","type":"SaveTool"},{"attributes":{},"id":"7fe72733-a972-488a-b340-b68989c8bca8","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f49e12a0-76d2-463e-90ed-e12cc79ab2ed","type":"BoxAnnotation"},{"attributes":{},"id":"940c46d8-73d6-402c-9c94-8194477d089a","type":"LinearScale"},{"attributes":{},"id":"f7088bc9-4e05-45ad-9b55-c550ae47742f","type":"BasicTicker"},{"attributes":{},"id":"f8ab6c36-7d01-476c-9308-af665135ad92","type":"BasicTickFormatter"},{"attributes":{},"id":"07444d25-bdcd-49cf-b4f9-079eba5ccc35","type":"HelpTool"},{"attributes":{},"id":"db64d7d3-54e0-432f-8873-a6215fce056c","type":"SaveTool"},{"attributes":{"overlay":{"id":"f49e12a0-76d2-463e-90ed-e12cc79ab2ed","type":"BoxAnnotation"}},"id":"8cf9211d-5d98-4816-9387-3acd4647ecc7","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"9eade5a5-c590-4051-9903-40fd5d3a1fd0","type":"ColumnDataSource"},"glyph":{"id":"97931200-1b53-4639-b8a0-d23c38e24ca0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2ce13dfd-f996-433f-9e11-f1d45d8b8d5f","type":"Line"},"selection_glyph":null,"view":{"id":"31962edd-dbcc-4a3b-8db3-1e6cf03ffd9c","type":"CDSView"}},"id":"18bcaf5b-3d03-4eae-a9a3-da007f5c3d8e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8374fdf5-802b-443e-ad7c-daf90f831263","type":"DataRange1d"}],"root_ids":["371af2e2-6a87-4b8f-a095-fd31c5b4f9ef"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"fef5f92c-bbbc-4e54-bf31-8f502df7947b","elementid":"fc9ea8ff-e5a8-4628-a726-608860dd9b4c","modelid":"371af2e2-6a87-4b8f-a095-fd31c5b4f9ef"}];
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