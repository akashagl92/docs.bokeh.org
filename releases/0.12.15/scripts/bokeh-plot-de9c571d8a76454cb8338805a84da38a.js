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
      };var element = document.getElementById("de41f994-8ed1-40f5-bd8a-8a9509eebbc9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'de41f994-8ed1-40f5-bd8a-8a9509eebbc9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"52c067ad-58c3-4291-8def-bcef1c9628e7":{"roots":{"references":[{"attributes":{},"id":"674f7de9-8604-4626-b752-36706272ea18","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":null,"selection_policy":null},"id":"26a9a4f0-3caa-4029-be7d-9624a03c3a74","type":"ColumnDataSource"},{"attributes":{},"id":"b272b32d-82c2-4a61-ba33-efc4c6b4333d","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98707fb9-f816-4073-9a5d-7ce2edf67529","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"40476246-72a8-48f2-993b-2433ee124650","type":"BoxAnnotation"}},"id":"17dcced4-58f7-4860-8f77-422ba2851e2e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5dfde027-e1ba-4be3-b6da-52377531a3ac","type":"Circle"},{"attributes":{},"id":"9e5bd4dc-f257-4ec0-b130-3c69d1ef8750","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"459fcfc0-ba9c-4654-a86f-581bc5bdb97a","subtype":"Figure","type":"Plot"},"ticker":{"id":"1413405d-36c5-4ac5-8fd9-38491b232861","type":"BasicTicker"}},"id":"9ad46df5-7b62-41d6-9e23-9490a4436bad","type":"Grid"},{"attributes":{},"id":"03147b0f-7a42-49ef-99a7-2e64fbf97968","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"98707fb9-f816-4073-9a5d-7ce2edf67529","type":"BoxAnnotation"}},"id":"0c246c40-30a5-4c4d-a356-b2c9dff0618e","type":"BoxZoomTool"},{"attributes":{},"id":"279a432f-06b1-4fc9-b3bd-4dd9e6ee4b58","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"948f7279-da59-4ff3-b20c-96c6b27ceab6","subtype":"Figure","type":"Plot"},{"id":"3f836f8b-52b1-4651-8b2b-5a48bc929e66","subtype":"Figure","type":"Plot"},{"id":"459fcfc0-ba9c-4654-a86f-581bc5bdb97a","subtype":"Figure","type":"Plot"}]},"id":"96b0deae-473b-4500-8e64-d7df9168df55","type":"Column"},{"attributes":{},"id":"df1dc8e1-7bcd-469d-8b21-61edb3f445b8","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"3528861e-8683-4ec1-bd04-71860ab4e66a","type":"LinearAxis"}],"left":[{"id":"413fabcb-56ed-4c79-a3e9-8b9b8e529042","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"3528861e-8683-4ec1-bd04-71860ab4e66a","type":"LinearAxis"},{"id":"1fcf6506-1af6-46d8-90c1-89d8a59f110e","type":"Grid"},{"id":"413fabcb-56ed-4c79-a3e9-8b9b8e529042","type":"LinearAxis"},{"id":"9ad46df5-7b62-41d6-9e23-9490a4436bad","type":"Grid"},{"id":"40476246-72a8-48f2-993b-2433ee124650","type":"BoxAnnotation"},{"id":"402f3dab-4d56-45cd-b49a-51c1d6b8c69d","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b8513a13-4cf2-4738-ae82-ffa5ee7f8163","type":"Toolbar"},"x_range":{"id":"90e757f6-d5da-45b9-a259-e369253f4324","type":"DataRange1d"},"x_scale":{"id":"742ff373-170e-492b-91dc-6185f8553128","type":"LinearScale"},"y_range":{"id":"77e9685c-fb28-4cb4-88c6-cf6bc0336d13","type":"DataRange1d"},"y_scale":{"id":"7691eb01-e046-49b6-b38d-d8c63d3b2d91","type":"LinearScale"}},"id":"459fcfc0-ba9c-4654-a86f-581bc5bdb97a","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0f4a01b-f134-4942-a257-3b70a0da131a","type":"Triangle"},{"attributes":{},"id":"d07f79af-42be-4b1b-b397-15c652796563","type":"BasicTickFormatter"},{"attributes":{},"id":"065a2523-730b-439b-97f9-076ce16ff216","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4a72b043-28ce-4f09-92ac-a46fcada2d7f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d07f79af-42be-4b1b-b397-15c652796563","type":"BasicTickFormatter"},"plot":{"id":"3f836f8b-52b1-4651-8b2b-5a48bc929e66","subtype":"Figure","type":"Plot"},"ticker":{"id":"065a2523-730b-439b-97f9-076ce16ff216","type":"BasicTicker"}},"id":"4de00e10-caaf-4f82-923d-1ecf4c0abd62","type":"LinearAxis"},{"attributes":{},"id":"1c207fbd-11aa-4d3c-9510-45ba57eaa936","type":"ResetTool"},{"attributes":{},"id":"f71c42e2-a87c-452a-8cb3-026c346c9f7b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"77e9685c-fb28-4cb4-88c6-cf6bc0336d13","type":"DataRange1d"},{"attributes":{"source":{"id":"26a9a4f0-3caa-4029-be7d-9624a03c3a74","type":"ColumnDataSource"}},"id":"b0a56201-c780-40a6-a59b-654a08deb863","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"948f7279-da59-4ff3-b20c-96c6b27ceab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae1ee10c-6224-4381-b15f-e0bfa147b71e","type":"BasicTicker"}},"id":"be7203a8-d09d-4618-943c-a34a7ec4890e","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":null,"selection_policy":null},"id":"b13288d1-bd87-4ea9-87bc-00c0b3b83bfa","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"40476246-72a8-48f2-993b-2433ee124650","type":"BoxAnnotation"},{"attributes":{},"id":"cf34e256-6e70-4886-99a0-36a4cd4e00e5","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"3f836f8b-52b1-4651-8b2b-5a48bc929e66","subtype":"Figure","type":"Plot"},"ticker":{"id":"065a2523-730b-439b-97f9-076ce16ff216","type":"BasicTicker"}},"id":"c24c99fb-dba7-4b24-9f44-8b7cace12ed9","type":"Grid"},{"attributes":{"formatter":{"id":"936eb44e-dce6-4ed9-869d-6f5ff9394fd2","type":"BasicTickFormatter"},"plot":{"id":"459fcfc0-ba9c-4654-a86f-581bc5bdb97a","subtype":"Figure","type":"Plot"},"ticker":{"id":"1413405d-36c5-4ac5-8fd9-38491b232861","type":"BasicTicker"}},"id":"413fabcb-56ed-4c79-a3e9-8b9b8e529042","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0934eb39-8da8-48c6-8229-3f07bb5346e0","type":"PanTool"},{"id":"1412395b-c360-4075-beda-a1bb0b4f9ac8","type":"WheelZoomTool"},{"id":"a3d8bbd3-c8da-4644-80b4-be261b4aedcc","type":"BoxZoomTool"},{"id":"9551d8d6-3aeb-439c-aec2-df45b896d5c2","type":"SaveTool"},{"id":"73de66fa-b148-4eb1-ad05-858579531ae1","type":"ResetTool"},{"id":"464d731b-3e32-4a63-8f63-0ae3ae231baa","type":"HelpTool"}]},"id":"de43fc66-7ef0-4bf2-b143-f47d9c593cde","type":"Toolbar"},{"attributes":{"source":{"id":"b13288d1-bd87-4ea9-87bc-00c0b3b83bfa","type":"ColumnDataSource"}},"id":"2794637d-51b4-47f7-b0a6-c5e5ee7bf8b0","type":"CDSView"},{"attributes":{},"id":"d3702531-3f25-4c0b-9948-afe531d4f57e","type":"PanTool"},{"attributes":{},"id":"9551d8d6-3aeb-439c-aec2-df45b896d5c2","type":"SaveTool"},{"attributes":{},"id":"2508b3f1-66ee-4ace-8f4d-d8243dec4227","type":"HelpTool"},{"attributes":{"below":[{"id":"308b3abf-f5d0-4da7-a22e-32a0587f92c2","type":"LinearAxis"}],"left":[{"id":"9e2f452e-dd1f-4909-8064-554b6467c01d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"308b3abf-f5d0-4da7-a22e-32a0587f92c2","type":"LinearAxis"},{"id":"22b4432f-1535-4d23-946f-6e52bfa2fc2e","type":"Grid"},{"id":"9e2f452e-dd1f-4909-8064-554b6467c01d","type":"LinearAxis"},{"id":"be7203a8-d09d-4618-943c-a34a7ec4890e","type":"Grid"},{"id":"d3902669-c78f-476d-8afa-7718e297a125","type":"BoxAnnotation"},{"id":"c23e4ffc-8dae-4d2f-a531-acbc94adf32c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"de43fc66-7ef0-4bf2-b143-f47d9c593cde","type":"Toolbar"},"x_range":{"id":"4a72b043-28ce-4f09-92ac-a46fcada2d7f","type":"DataRange1d"},"x_scale":{"id":"2141d2d3-3148-4e0c-86df-13b9e800b35c","type":"LinearScale"},"y_range":{"id":"fb047136-7e21-4e77-b749-959afa75c133","type":"DataRange1d"},"y_scale":{"id":"4ba8e0c9-a3a5-4c19-9eb1-be47f9296442","type":"LinearScale"}},"id":"948f7279-da59-4ff3-b20c-96c6b27ceab6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1413405d-36c5-4ac5-8fd9-38491b232861","type":"BasicTicker"},{"attributes":{"plot":{"id":"459fcfc0-ba9c-4654-a86f-581bc5bdb97a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c49d96a8-bc5f-444d-bd48-40275502fac5","type":"BasicTicker"}},"id":"1fcf6506-1af6-46d8-90c1-89d8a59f110e","type":"Grid"},{"attributes":{},"id":"73de66fa-b148-4eb1-ad05-858579531ae1","type":"ResetTool"},{"attributes":{"callback":null},"id":"452d397b-f604-4289-95ab-5689713d85ef","type":"DataRange1d"},{"attributes":{},"id":"936eb44e-dce6-4ed9-869d-6f5ff9394fd2","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"03147b0f-7a42-49ef-99a7-2e64fbf97968","type":"BasicTickFormatter"},"plot":{"id":"3f836f8b-52b1-4651-8b2b-5a48bc929e66","subtype":"Figure","type":"Plot"},"ticker":{"id":"f71c42e2-a87c-452a-8cb3-026c346c9f7b","type":"BasicTicker"}},"id":"b79bb454-0de2-48b7-906d-77e603382674","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cfa05619-7f58-4170-a2fb-18b4db8bfe2f","type":"Square"},{"attributes":{},"id":"3e3b5d69-df05-44a0-896d-cd15f1f70e74","type":"SaveTool"},{"attributes":{},"id":"0934eb39-8da8-48c6-8229-3f07bb5346e0","type":"PanTool"},{"attributes":{"data_source":{"id":"b13288d1-bd87-4ea9-87bc-00c0b3b83bfa","type":"ColumnDataSource"},"glyph":{"id":"35a577f0-669b-4d25-8854-c1c4b26358b7","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cfa05619-7f58-4170-a2fb-18b4db8bfe2f","type":"Square"},"selection_glyph":null,"view":{"id":"2794637d-51b4-47f7-b0a6-c5e5ee7bf8b0","type":"CDSView"}},"id":"402f3dab-4d56-45cd-b49a-51c1d6b8c69d","type":"GlyphRenderer"},{"attributes":{},"id":"ae1ee10c-6224-4381-b15f-e0bfa147b71e","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3702531-3f25-4c0b-9948-afe531d4f57e","type":"PanTool"},{"id":"279a432f-06b1-4fc9-b3bd-4dd9e6ee4b58","type":"WheelZoomTool"},{"id":"17dcced4-58f7-4860-8f77-422ba2851e2e","type":"BoxZoomTool"},{"id":"9e5bd4dc-f257-4ec0-b130-3c69d1ef8750","type":"SaveTool"},{"id":"1c207fbd-11aa-4d3c-9510-45ba57eaa936","type":"ResetTool"},{"id":"2508b3f1-66ee-4ace-8f4d-d8243dec4227","type":"HelpTool"}]},"id":"b8513a13-4cf2-4738-ae82-ffa5ee7f8163","type":"Toolbar"},{"attributes":{},"id":"c49d96a8-bc5f-444d-bd48-40275502fac5","type":"BasicTicker"},{"attributes":{},"id":"feafd8f7-1632-488b-bb6e-56c54b62081b","type":"ResetTool"},{"attributes":{"formatter":{"id":"674f7de9-8604-4626-b752-36706272ea18","type":"BasicTickFormatter"},"plot":{"id":"459fcfc0-ba9c-4654-a86f-581bc5bdb97a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c49d96a8-bc5f-444d-bd48-40275502fac5","type":"BasicTicker"}},"id":"3528861e-8683-4ec1-bd04-71860ab4e66a","type":"LinearAxis"},{"attributes":{},"id":"6b7dabd2-2105-4bc4-80a6-7ac3ba7d0550","type":"BasicTickFormatter"},{"attributes":{},"id":"4ba8e0c9-a3a5-4c19-9eb1-be47f9296442","type":"LinearScale"},{"attributes":{"callback":null},"id":"90e757f6-d5da-45b9-a259-e369253f4324","type":"DataRange1d"},{"attributes":{},"id":"7691eb01-e046-49b6-b38d-d8c63d3b2d91","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35a577f0-669b-4d25-8854-c1c4b26358b7","type":"Square"},{"attributes":{"below":[{"id":"b79bb454-0de2-48b7-906d-77e603382674","type":"LinearAxis"}],"left":[{"id":"4de00e10-caaf-4f82-923d-1ecf4c0abd62","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b79bb454-0de2-48b7-906d-77e603382674","type":"LinearAxis"},{"id":"e73bfd89-0ec9-4ea8-9925-a88f04eb8b11","type":"Grid"},{"id":"4de00e10-caaf-4f82-923d-1ecf4c0abd62","type":"LinearAxis"},{"id":"c24c99fb-dba7-4b24-9f44-8b7cace12ed9","type":"Grid"},{"id":"98707fb9-f816-4073-9a5d-7ce2edf67529","type":"BoxAnnotation"},{"id":"181c6ddd-7602-43d6-843d-039ac756cbc5","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"bc04777e-c347-47ab-a0b7-fe536cb2adc8","type":"Toolbar"},"x_range":{"id":"50e33461-76e3-4822-bb22-376c765fcdf2","type":"DataRange1d"},"x_scale":{"id":"d94fa5cb-6949-4d91-b32e-c49740be8cd1","type":"LinearScale"},"y_range":{"id":"452d397b-f604-4289-95ab-5689713d85ef","type":"DataRange1d"},"y_scale":{"id":"934ad9bc-803c-437a-9dcf-0d44c2f554a7","type":"LinearScale"}},"id":"3f836f8b-52b1-4651-8b2b-5a48bc929e66","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"742ff373-170e-492b-91dc-6185f8553128","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b272b32d-82c2-4a61-ba33-efc4c6b4333d","type":"PanTool"},{"id":"df1dc8e1-7bcd-469d-8b21-61edb3f445b8","type":"WheelZoomTool"},{"id":"0c246c40-30a5-4c4d-a356-b2c9dff0618e","type":"BoxZoomTool"},{"id":"3e3b5d69-df05-44a0-896d-cd15f1f70e74","type":"SaveTool"},{"id":"feafd8f7-1632-488b-bb6e-56c54b62081b","type":"ResetTool"},{"id":"cf34e256-6e70-4886-99a0-36a4cd4e00e5","type":"HelpTool"}]},"id":"bc04777e-c347-47ab-a0b7-fe536cb2adc8","type":"Toolbar"},{"attributes":{},"id":"d94fa5cb-6949-4d91-b32e-c49740be8cd1","type":"LinearScale"},{"attributes":{"plot":{"id":"948f7279-da59-4ff3-b20c-96c6b27ceab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a65b7729-42b8-4c16-9a50-08ab68425121","type":"BasicTicker"}},"id":"22b4432f-1535-4d23-946f-6e52bfa2fc2e","type":"Grid"},{"attributes":{"callback":null},"id":"fb047136-7e21-4e77-b749-959afa75c133","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bdfe9f48-988c-400c-88b2-6d3cc4e530cc","type":"Triangle"},{"attributes":{"data_source":{"id":"26a9a4f0-3caa-4029-be7d-9624a03c3a74","type":"ColumnDataSource"},"glyph":{"id":"bdfe9f48-988c-400c-88b2-6d3cc4e530cc","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e0f4a01b-f134-4942-a257-3b70a0da131a","type":"Triangle"},"selection_glyph":null,"view":{"id":"b0a56201-c780-40a6-a59b-654a08deb863","type":"CDSView"}},"id":"181c6ddd-7602-43d6-843d-039ac756cbc5","type":"GlyphRenderer"},{"attributes":{},"id":"934ad9bc-803c-437a-9dcf-0d44c2f554a7","type":"LinearScale"},{"attributes":{},"id":"a65b7729-42b8-4c16-9a50-08ab68425121","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a93378b1-a1ad-4021-8ea9-04264e6e82b1","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d3902669-c78f-476d-8afa-7718e297a125","type":"BoxAnnotation"},{"attributes":{},"id":"2141d2d3-3148-4e0c-86df-13b9e800b35c","type":"LinearScale"},{"attributes":{"data_source":{"id":"e3aa9a9e-f7fc-40c1-802c-2c0d5446d232","type":"ColumnDataSource"},"glyph":{"id":"a93378b1-a1ad-4021-8ea9-04264e6e82b1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5dfde027-e1ba-4be3-b6da-52377531a3ac","type":"Circle"},"selection_glyph":null,"view":{"id":"6021cdaa-cc57-45c7-9100-0fa1fd6ae522","type":"CDSView"}},"id":"c23e4ffc-8dae-4d2f-a531-acbc94adf32c","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"50e33461-76e3-4822-bb22-376c765fcdf2","type":"DataRange1d"},{"attributes":{"formatter":{"id":"b8c1548f-5b12-47e7-9e37-f4a6a87db92e","type":"BasicTickFormatter"},"plot":{"id":"948f7279-da59-4ff3-b20c-96c6b27ceab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae1ee10c-6224-4381-b15f-e0bfa147b71e","type":"BasicTicker"}},"id":"9e2f452e-dd1f-4909-8064-554b6467c01d","type":"LinearAxis"},{"attributes":{"plot":{"id":"3f836f8b-52b1-4651-8b2b-5a48bc929e66","subtype":"Figure","type":"Plot"},"ticker":{"id":"f71c42e2-a87c-452a-8cb3-026c346c9f7b","type":"BasicTicker"}},"id":"e73bfd89-0ec9-4ea8-9925-a88f04eb8b11","type":"Grid"},{"attributes":{"formatter":{"id":"6b7dabd2-2105-4bc4-80a6-7ac3ba7d0550","type":"BasicTickFormatter"},"plot":{"id":"948f7279-da59-4ff3-b20c-96c6b27ceab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a65b7729-42b8-4c16-9a50-08ab68425121","type":"BasicTicker"}},"id":"308b3abf-f5d0-4da7-a22e-32a0587f92c2","type":"LinearAxis"},{"attributes":{},"id":"464d731b-3e32-4a63-8f63-0ae3ae231baa","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":null,"selection_policy":null},"id":"e3aa9a9e-f7fc-40c1-802c-2c0d5446d232","type":"ColumnDataSource"},{"attributes":{},"id":"b8c1548f-5b12-47e7-9e37-f4a6a87db92e","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"e3aa9a9e-f7fc-40c1-802c-2c0d5446d232","type":"ColumnDataSource"}},"id":"6021cdaa-cc57-45c7-9100-0fa1fd6ae522","type":"CDSView"},{"attributes":{},"id":"1412395b-c360-4075-beda-a1bb0b4f9ac8","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d3902669-c78f-476d-8afa-7718e297a125","type":"BoxAnnotation"}},"id":"a3d8bbd3-c8da-4644-80b4-be261b4aedcc","type":"BoxZoomTool"}],"root_ids":["96b0deae-473b-4500-8e64-d7df9168df55"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"52c067ad-58c3-4291-8def-bcef1c9628e7","elementid":"de41f994-8ed1-40f5-bd8a-8a9509eebbc9","modelid":"96b0deae-473b-4500-8e64-d7df9168df55"}];
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