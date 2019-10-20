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
      };var element = document.getElementById("4fc4feb7-b58c-4bfc-b9db-1449446cf41e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4fc4feb7-b58c-4bfc-b9db-1449446cf41e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d2a3ecf8-dd47-4e47-9c35-1c0896edbd84":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"839706ed-a915-4941-ae68-f9383cb85956","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"2e1cacac-10ac-4dd2-8ae5-ffd17270d0b7","type":"LegendItem"},{"id":"df4202b0-ca6b-4f44-af14-58ea489c92a6","type":"LegendItem"},{"id":"c0edb76c-2438-49d9-87d9-a9dd35d61589","type":"LegendItem"},{"id":"c043548f-76ac-4683-be96-6bb69c254032","type":"LegendItem"},{"id":"2a6e99ad-3e40-4369-876f-be75be93ff82","type":"LegendItem"},{"id":"e8c536df-0b55-4cc8-856f-acea3c087cf6","type":"LegendItem"}],"location":"top_left","plot":{"id":"bc86a3f3-3aed-4699-9975-d5cbb75b5fe6","subtype":"Figure","type":"Plot"}},"id":"ea350ed4-28f3-49cd-bc22-b59505828654","type":"Legend"},{"attributes":{},"id":"5ca00c61-6874-49e4-a439-97cdd8946c79","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"fBSuR+F6hD/GgVSMluKWP1+/YSsORqQ/lwCSAQGdrz9Egl3kEbu2P5hlbkC76L4/JNV9Sr4rxD8uqALxqoPJP+OrxZMjfM8/I3BjGZQK0z+sIgNnXKfWP4ztwbJqlNo/w9Cf/L7R3j8pZk6irK/hPx1wXMWcHuQ/OwZ656+15j+FKKcI5nTpP/rW4yg/XOw/mxEwSLtr7z827EUzrVHxP7KV+0GOAfM/RAU50IDF9D/sOv7dhJ32P6k2S2uaifg/fPgfeMGJ+j9lgHwE+p38P2TOYBBExv4/PnHmzU+BAEBTXmBThqkBQHMunpjF2wJAnuGfnQ0YBEDUd2ViXl4FQBXx7ua3rgZAYU08KxoJCEC3jE0vhW0JQBmvIvP42wpAhbS7dnVUDED8nBi6+tYNQIBoOb2IYw9AhwsPwA99EEBTVGOBX00RQKSOmaKzIhJAe7qxIwz9EkDX16sEadwTQLnmh0XKwBRAIOdF5i+qFUAN2eXmmZgWQH+8Z0cIjBdAd5HLB3uEGED0VxEo8oEZQPYPOahthBpAfrlCiO2LG0CLVC7IcZgcQB7h+2f6qR1AOV+rZ4fAHkDXzjzHGNwfQP0XWENXfiBAUcECUyQRIUBoY56Sc6YhQEL+KgJFPiJA3pGooZjYIkA+HhdxbnUjQGCjdnDGFCRARCHHn6C2JEDrlwj//FolQFYHO47bASZAgm9eTTyrJkBy0HI8H1cnQCQqeFuEBShAmXxuqmu2KEDRx1Up1WkpQMsLLtjAHypAiEj3ti7YKkAIfrHFHpMrQEusXASRUCxAUtP4coUQLUAa84UR/NItQKULBOD0ly5A8hxz3m9fL0CAk2mGthQwQOoUkjX2ejBAtRKz/HbiMEDhjMzbOEsxQG6D3tI7tTFAXfbo4X8gMkCt5esIBY0yQF9R50fL+jJAcjnbntJpM0DmnccNG9ozQLx+rJSkSzRA89uJM2++NECMtV/qejI1QIULLrnHpzVA4d30n1UeNkCdLLSeJJY2QLv3a7U0DzdAOj8c5IWJN0AbA8UqGAU4QF1DZonrgThAAAAAAAAAOUA=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"37e4252b-82fb-4717-8814-45ed0f220aac","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"37e4252b-82fb-4717-8814-45ed0f220aac","type":"ColumnDataSource"},"glyph":{"id":"b576570a-3ce7-427c-bb4b-6ad0e01ed0f7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1318a5e7-1dda-4f64-adae-ba87e12e9f35","type":"Line"},"selection_glyph":null,"view":{"id":"37e31f03-e801-4de2-9b8d-e73d987d4e81","type":"CDSView"}},"id":"9f273a0e-30a9-4a4c-be9a-2bec1345b795","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d1178ae2-cc66-470f-b993-206ffe53beaf","type":"ColumnDataSource"}},"id":"aecda47e-262c-4fea-8321-cd6f698370a8","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f0ac27fa-ba80-458b-b9d1-e4b8fe0de5f5","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"138041c9-909b-49f0-8f01-cbe0a5b20d2b","type":"ColumnDataSource"},"glyph":{"id":"3cb67dd9-8bb7-48ee-ae66-4ad2e9e4b7de","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4ab08119-52ec-4865-b6b0-ffac871185f6","type":"Circle"},"selection_glyph":null,"view":{"id":"78f5bfa4-3db6-43c1-b87e-6abd6e32fbf0","type":"CDSView"}},"id":"37a5181d-7de8-4385-9d94-fd45000f1ec0","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18dc733f-fb5c-40c7-ad42-8b457e04f7fd","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"a443263d-ed8f-47dd-a2bb-ba34cd1dd862","type":"ColumnDataSource"},{"attributes":{},"id":"d63b6ddd-7b71-45d0-9348-46a234637a98","type":"HelpTool"},{"attributes":{"callback":null},"id":"8d24bffa-5fda-452e-9b6c-4220b5e01a68","type":"DataRange1d"},{"attributes":{"data_source":{"id":"839706ed-a915-4941-ae68-f9383cb85956","type":"ColumnDataSource"},"glyph":{"id":"9fc27355-9f33-45b9-8f63-531a398f445e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d1662ed8-c4bc-43b4-9581-6ba7efb83b57","type":"Circle"},"selection_glyph":null,"view":{"id":"129d43f4-d698-44dd-8f2f-3d066aa455a2","type":"CDSView"}},"id":"4af84f10-4a40-41c3-9cec-21c13460c3d1","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9fc27355-9f33-45b9-8f63-531a398f445e","type":"Circle"},{"attributes":{},"id":"72cfaf7d-8936-4266-8157-88c7b727d01c","type":"LinearScale"},{"attributes":{"axis_label":"Values (log scale)","formatter":{"id":"658ae6fb-4604-4ba9-8a2d-78a0ad6031b9","type":"LogTickFormatter"},"plot":{"id":"bc86a3f3-3aed-4699-9975-d5cbb75b5fe6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8958a28b-c3ba-4ff1-8dcc-992fb2b6e3c9","type":"LogTicker"}},"id":"762ad426-25a8-4118-860d-bd7b5b816974","type":"LogAxis"},{"attributes":{"label":{"value":"y=sqrt(x)"},"renderers":[{"id":"8a6db362-85df-4793-bb02-67e563af49b1","type":"GlyphRenderer"}]},"id":"2e1cacac-10ac-4dd2-8ae5-ffd17270d0b7","type":"LegendItem"},{"attributes":{},"id":"8072640f-1506-4b60-9f30-4fd2f70ccded","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"BCb8+I4k9D/YkSiBB5P2P+ZFPS6kTPk/tT+SFHda/D+2rHOXqsb/PwhLvJ9RzgFAGmZC05L0A0D4INh7QF0GQC1oRUhfEAlAIYQjsesWDEDkDD3i93oPQDZrJKDmoxFANIpK/QjFE0CuGNiS+ScWQOSomvWp1BhAVbzmNQHUG0AJCLaB+S8fQDNUQ63geSFAZ1nDZvCVI0Bt3PeUMfMlQP8rNeCCmShADFCKI7aRK0BSXkfIreUuQN2ZX9Y+UDFAQFTkAUhnM0CB2N1T5741QNDhO7XoXjhA/M5N/ghQO0ATM1kME5w+QHVG/SwAJ0FAU6tnww45Q0A4vgCkGYtFQAzy/CTaJEhAf3H5TfgOS0DVhkmoJ1NOQIGE2MQj/lBANUSEokMLU0Dsz6Bcx1dVQLo45uJV61dAiK3VnYLOWkAjyGL66QpeQGlV4LOo1WBAu8znmOXdYkA3PcFX7yRlQCrVfaVasmdAdN+ifKaOakChetJkWMNtQJhUMRKOrXBAPNywovOwckDJjiFykPJ0QJ3KWibneXdA9waRfGJPekCj9J9NcXx9QDeHEPrShYBA9iJpvmyEgkAhIjeLqcCEQHWyHSL6QYdAlJc3M7UQikCvMqMeMzaNQCY45od2XpBAG6f/7E9YkkCItCaFOY+UQL5/aViSCpdAfVyNOZ3SmUDDwHtFnPCcQDrgONp3N6BA1g/DMZwsokC8/b1EP16kQCZU3Iuu06ZAEnDgKxmVqUCRuYczq6usQLcaqBHWELBAsf1bklABskCVWW2xuS20QNRlCIJNnbZAQEbOqSdYuUDj2tpdXme8QGhLz6Eg1b9Ak3DHFmzWwUDngEG1p/3DQET2bANuZ8ZAysk7VscbyUA5rzU9tCPMQKncdHlLic9A9TpRye2r0UBLUd08CM7TQNtZb9sOMtZAxYxN1/bf2EDkzPxNq+DbQDtS2/cqPt9AmoKOttSB4UDAo3M32p7jQCMQVNgu/eVAIAtg1rSk6EBYKTAQQp7rQCDrp2698+5A901Y7R9Y8UD1McGWHHDzQG3sN8vMyPVAAAAAAABq+EA=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"78214e02-8b7f-4ca2-87d8-f51cc5493b80","type":"ColumnDataSource"},{"attributes":{"source":{"id":"78214e02-8b7f-4ca2-87d8-f51cc5493b80","type":"ColumnDataSource"}},"id":"aaffe75f-1121-4bfd-a8ba-a99001cb7083","type":"CDSView"},{"attributes":{},"id":"f552ea5d-5708-4c94-97ed-f07953c32c99","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ab08119-52ec-4865-b6b0-ffac871185f6","type":"Circle"},{"attributes":{"below":[{"id":"fbc7b161-479b-4622-b7ed-298ccc35b20e","type":"LinearAxis"}],"left":[{"id":"762ad426-25a8-4118-860d-bd7b5b816974","type":"LogAxis"}],"renderers":[{"id":"fbc7b161-479b-4622-b7ed-298ccc35b20e","type":"LinearAxis"},{"id":"e8711e85-c6d1-477d-ab62-a057492810e4","type":"Grid"},{"id":"762ad426-25a8-4118-860d-bd7b5b816974","type":"LogAxis"},{"id":"053264b6-0204-4023-9441-0d586e10c64d","type":"Grid"},{"id":"f0ac27fa-ba80-458b-b9d1-e4b8fe0de5f5","type":"BoxAnnotation"},{"id":"ea350ed4-28f3-49cd-bc22-b59505828654","type":"Legend"},{"id":"8a6db362-85df-4793-bb02-67e563af49b1","type":"GlyphRenderer"},{"id":"168dd462-2b59-46da-a84d-8ddf884c25db","type":"GlyphRenderer"},{"id":"4af84f10-4a40-41c3-9cec-21c13460c3d1","type":"GlyphRenderer"},{"id":"9f273a0e-30a9-4a4c-be9a-2bec1345b795","type":"GlyphRenderer"},{"id":"37a5181d-7de8-4385-9d94-fd45000f1ec0","type":"GlyphRenderer"},{"id":"f8da5df4-2585-4e4b-aa40-c8b8309322d2","type":"GlyphRenderer"},{"id":"b8ae6f56-faf6-414e-89d2-e3c8f0b34642","type":"GlyphRenderer"},{"id":"b0c02dca-1a90-48de-b684-7f071a4318bc","type":"GlyphRenderer"}],"title":{"id":"e04fef06-deb1-416d-abae-6da4b98b61d2","type":"Title"},"toolbar":{"id":"41f2dd13-35dc-446f-bda9-141c973c8035","type":"Toolbar"},"x_range":{"id":"8d24bffa-5fda-452e-9b6c-4220b5e01a68","type":"DataRange1d"},"x_scale":{"id":"72cfaf7d-8936-4266-8157-88c7b727d01c","type":"LinearScale"},"y_range":{"id":"0f6c96b0-47ba-46ab-b022-8cde7483da9e","type":"Range1d"},"y_scale":{"id":"3d3a5ba6-05db-4ca7-a5bb-130497569efe","type":"LogScale"}},"id":"bc86a3f3-3aed-4699-9975-d5cbb75b5fe6","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1662ed8-c4bc-43b4-9581-6ba7efb83b57","type":"Circle"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"0f09096e-795c-48db-9172-6c3de1cbb2be","type":"Line"},{"attributes":{},"id":"3d3a5ba6-05db-4ca7-a5bb-130497569efe","type":"LogScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1318a5e7-1dda-4f64-adae-ba87e12e9f35","type":"Line"},{"attributes":{"callback":null,"end":10000000000000000000000,"start":0.001},"id":"0f6c96b0-47ba-46ab-b022-8cde7483da9e","type":"Range1d"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"b576570a-3ce7-427c-bb4b-6ad0e01ed0f7","type":"Line"},{"attributes":{"label":{"value":"y=x**2"},"renderers":[{"id":"9f273a0e-30a9-4a4c-be9a-2bec1345b795","type":"GlyphRenderer"},{"id":"37a5181d-7de8-4385-9d94-fd45000f1ec0","type":"GlyphRenderer"}]},"id":"c0edb76c-2438-49d9-87d9-a9dd35d61589","type":"LegendItem"},{"attributes":{"source":{"id":"839706ed-a915-4941-ae68-f9383cb85956","type":"ColumnDataSource"}},"id":"129d43f4-d698-44dd-8f2f-3d066aa455a2","type":"CDSView"},{"attributes":{"plot":{"id":"bc86a3f3-3aed-4699-9975-d5cbb75b5fe6","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ca00c61-6874-49e4-a439-97cdd8946c79","type":"BasicTicker"}},"id":"e8711e85-c6d1-477d-ab62-a057492810e4","type":"Grid"},{"attributes":{"source":{"id":"a443263d-ed8f-47dd-a2bb-ba34cd1dd862","type":"ColumnDataSource"}},"id":"de36f099-400c-4f70-850f-58e717dfdcf5","type":"CDSView"},{"attributes":{"plot":null,"text":"log axis example"},"id":"e04fef06-deb1-416d-abae-6da4b98b61d2","type":"Title"},{"attributes":{"ticker":null},"id":"658ae6fb-4604-4ba9-8a2d-78a0ad6031b9","type":"LogTickFormatter"},{"attributes":{"label":{"value":"y=10^(x^2)"},"renderers":[{"id":"b0c02dca-1a90-48de-b684-7f071a4318bc","type":"GlyphRenderer"}]},"id":"e8c536df-0b55-4cc8-856f-acea3c087cf6","type":"LegendItem"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"168dd462-2b59-46da-a84d-8ddf884c25db","type":"GlyphRenderer"},{"id":"4af84f10-4a40-41c3-9cec-21c13460c3d1","type":"GlyphRenderer"}]},"id":"df4202b0-ca6b-4f44-af14-58ea489c92a6","type":"LegendItem"},{"attributes":{},"id":"484cb844-54ba-4b97-9f18-ddc8d62226ce","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"fBSuR+F6hD/GgVSMluKWP1+/YSsORqQ/lwCSAQGdrz9Egl3kEbu2P5hlbkC76L4/JNV9Sr4rxD8uqALxqoPJP+OrxZMjfM8/I3BjGZQK0z+sIgNnXKfWP4ztwbJqlNo/w9Cf/L7R3j8pZk6irK/hPx1wXMWcHuQ/OwZ656+15j+FKKcI5nTpP/rW4yg/XOw/mxEwSLtr7z827EUzrVHxP7KV+0GOAfM/RAU50IDF9D/sOv7dhJ32P6k2S2uaifg/fPgfeMGJ+j9lgHwE+p38P2TOYBBExv4/PnHmzU+BAEBTXmBThqkBQHMunpjF2wJAnuGfnQ0YBEDUd2ViXl4FQBXx7ua3rgZAYU08KxoJCEC3jE0vhW0JQBmvIvP42wpAhbS7dnVUDED8nBi6+tYNQIBoOb2IYw9AhwsPwA99EEBTVGOBX00RQKSOmaKzIhJAe7qxIwz9EkDX16sEadwTQLnmh0XKwBRAIOdF5i+qFUAN2eXmmZgWQH+8Z0cIjBdAd5HLB3uEGED0VxEo8oEZQPYPOahthBpAfrlCiO2LG0CLVC7IcZgcQB7h+2f6qR1AOV+rZ4fAHkDXzjzHGNwfQP0XWENXfiBAUcECUyQRIUBoY56Sc6YhQEL+KgJFPiJA3pGooZjYIkA+HhdxbnUjQGCjdnDGFCRARCHHn6C2JEDrlwj//FolQFYHO47bASZAgm9eTTyrJkBy0HI8H1cnQCQqeFuEBShAmXxuqmu2KEDRx1Up1WkpQMsLLtjAHypAiEj3ti7YKkAIfrHFHpMrQEusXASRUCxAUtP4coUQLUAa84UR/NItQKULBOD0ly5A8hxz3m9fL0CAk2mGthQwQOoUkjX2ejBAtRKz/HbiMEDhjMzbOEsxQG6D3tI7tTFAXfbo4X8gMkCt5esIBY0yQF9R50fL+jJAcjnbntJpM0DmnccNG9ozQLx+rJSkSzRA89uJM2++NECMtV/qejI1QIULLrnHpzVA4d30n1UeNkCdLLSeJJY2QLv3a7U0DzdAOj8c5IWJN0AbA8UqGAU4QF1DZonrgThAAAAAAAAAOUA=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"138041c9-909b-49f0-8f01-cbe0a5b20d2b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a443263d-ed8f-47dd-a2bb-ba34cd1dd862","type":"ColumnDataSource"},"glyph":{"id":"0f09096e-795c-48db-9172-6c3de1cbb2be","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18dc733f-fb5c-40c7-ad42-8b457e04f7fd","type":"Line"},"selection_glyph":null,"view":{"id":"de36f099-400c-4f70-850f-58e717dfdcf5","type":"CDSView"}},"id":"168dd462-2b59-46da-a84d-8ddf884c25db","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=x^x"},"renderers":[{"id":"b8ae6f56-faf6-414e-89d2-e3c8f0b34642","type":"GlyphRenderer"}]},"id":"2a6e99ad-3e40-4369-876f-be75be93ff82","type":"LegendItem"},{"attributes":{},"id":"8ed796a6-b4ce-4484-a055-a2e0e5614f75","type":"WheelZoomTool"},{"attributes":{"line_color":"tomato","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"e098cd3c-128a-482d-9468-ec34ee7d703e","type":"Line"},{"attributes":{"axis_label":"Domain","formatter":{"id":"2dbdb086-5440-4739-9fd8-9b27841896eb","type":"BasicTickFormatter"},"plot":{"id":"bc86a3f3-3aed-4699-9975-d5cbb75b5fe6","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ca00c61-6874-49e4-a439-97cdd8946c79","type":"BasicTicker"}},"id":"fbc7b161-479b-4622-b7ed-298ccc35b20e","type":"LinearAxis"},{"attributes":{"source":{"id":"bf2e8cc1-3eda-4cef-bedd-f055713473b5","type":"ColumnDataSource"}},"id":"191e391d-23f2-4c3f-80f6-77c49f891e90","type":"CDSView"},{"attributes":{},"id":"2dbdb086-5440-4739-9fd8-9b27841896eb","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"fc9d26bb-7ff3-4e3c-b572-d14d9067fe2d","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"NMTNCyNr6T8r5WwH9hXoP7RYP/sQNec/7fGLawmk5j+J66bM8k7mP5plZ0HHKeY/ledPId4s5j/+6iz3NVPmPyZU30GJmeY/o0ZCk8b95j9GLJjqvX7nP2g2S53sG+g/Fjm4zlvV6D9guc69iqvpP7rA6/Zgn+o/dVAqBCay6z+H2OgcfeXsP+ciCeFjO+4/PeBhhDO27z+AERgEUqzwP84QjqPokvE/dKHT2aCQ8j90UHBed6fzP6YcWm6n2fQ/FsTjr7Ap9j+pH+AAXpr3PyweaEHNLvk/+pyCMnjq+j+SEsiEPtH8Pwl8Kzhx5/4/JM+9ue+YAEBzvAqA8toBQJfOYU69PANAz6IDMaTBBEBKSBU9XW0GQNF/UjwMRAhASARb009KCkDg0WlTUIUMQL9Z7G7Q+g5AUQr/B6DYEECIVDLM6FcSQPkeOO5I/xNAvTijmkHTFUBgc+cJ3tgXQJvq98XEFRpAg5skMEuQHEBLvLiUi08fQJJTTRK/LSFAyC+6nIreIkDJ1XirLr8kQMni07VQ1SZA1fJG80knKUAZynGlPrwrQG+KLoI4nC5AsFU4ViLoMEC+uiTdSrEyQOhlNyxVrzRAv38gmLzoNkD1LHhm0WQ5QBMfvyvVKzxAeoc2EBtHP0BCoGdElmBBQJSK9JL5UkNATmCOGHSBRUDZeyV3pfNHQIQEmDkvskpAVGMxFtjGTUCtxOgTWp5QQNZJoGopkFJAG+KonPm/VEAWQNf+3zVXQFQGCN8J+1lAT6KHmeMZXUA799akIk9gQC2LRvTSSmJA5NAd5qqHZEACUmHPYA5nQI4X6obf6GlAbqmBUnIibUAMaxKf+2NwQC7sWGkMdHJAXFBUI8jJdEDBDGq3uG53QKXoTfPAbXpATm23kE7TfUAlu1vWydaAQEs2K2dkBoNAEtzjZLyBhUCWvZQAbFOIQLwvzF+Uh4tAjjxSWBcsj0B9r5zxbKiRQGyZdE8IBJRAqibV9kuzlkBHy1q+LMKZQNkuIKRgPp1AE+dDIdGboEDa0mpO/9+iQJAvonAXdqVAAAAAAABqqEA=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"bf2e8cc1-3eda-4cef-bedd-f055713473b5","type":"ColumnDataSource"},{"attributes":{"source":{"id":"138041c9-909b-49f0-8f01-cbe0a5b20d2b","type":"ColumnDataSource"}},"id":"78f5bfa4-3db6-43c1-b87e-6abd6e32fbf0","type":"CDSView"},{"attributes":{"source":{"id":"37e4252b-82fb-4717-8814-45ed0f220aac","type":"ColumnDataSource"}},"id":"37e31f03-e801-4de2-9b8d-e73d987d4e81","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"484cb844-54ba-4b97-9f18-ddc8d62226ce","type":"PanTool"},{"id":"8ed796a6-b4ce-4484-a055-a2e0e5614f75","type":"WheelZoomTool"},{"id":"83cf05cf-42c7-4452-88f3-86de4f4cd6b0","type":"BoxZoomTool"},{"id":"8072640f-1506-4b60-9f30-4fd2f70ccded","type":"SaveTool"},{"id":"f552ea5d-5708-4c94-97ed-f07953c32c99","type":"ResetTool"},{"id":"d63b6ddd-7b71-45d0-9348-46a234637a98","type":"HelpTool"}]},"id":"41f2dd13-35dc-446f-bda9-141c973c8035","type":"Toolbar"},{"attributes":{"data_source":{"id":"d1178ae2-cc66-470f-b993-206ffe53beaf","type":"ColumnDataSource"},"glyph":{"id":"32c11d10-55eb-4150-9bdf-ea950452be4e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8c1ab1e9-6efe-4770-9375-fd8fd8b9cc23","type":"Line"},"selection_glyph":null,"view":{"id":"aecda47e-262c-4fea-8321-cd6f698370a8","type":"CDSView"}},"id":"b0c02dca-1a90-48de-b684-7f071a4318bc","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"f8da5df4-2585-4e4b-aa40-c8b8309322d2","type":"GlyphRenderer"}]},"id":"c043548f-76ac-4683-be96-6bb69c254032","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"D0lIYhM91D8QPZjjzb7YPzK64wifjNw/GXn6VSPn3z//ye9jz3fhP16ivPPv3OI/DfNMwmkp5D9W5tY7u2HlPwwBnbAqieY/tAshZjGi5z8jQ5ybu67oP7E4kPFQsOk/hczrDC+o6j/0iwzLW5frP5k2qxOyfuw/0YpNHOte7T/e9yZApTjuP6j3dSdpDO8/c6shuq3a7z8NtseY7VHwP2lp98EmtPA/GIsYKSsU8T9PAyw7H3LxP25i6aMjzvE/hhwD01Uo8j8TapBq0IDyP2srOpur1/I/LTC4cf0s8z9FEmIY2oDzP2TM/g5U0/M/XK6KWnwk9D+ErVKuYnT0PwBsf48Vw/Q/97f0c6IQ9T9mEkDdFV31P5RXL3B7qPU/qeqNCd7y9T/qSnHQRzz2P0WZbEbChPY/8HH0VVbM9j8E7TBfDBP3P+4VckPsWPc/r0xzb/2d9z9sfJPkRuL3PzCgIkHPJfg/fX7gx5xo+D9srcRmtar4P/OyJL0e7Pg/WVVKId4s+T8X2Yml+Gz5P5Tq5RxzrPk/MzxNH1Lr+T9+aXwNmin6P9BrjRRPZ/o/HdU8MXWk+j+cEuwyEOH6Py0mZ74jHfs/oI1zULNY+z9zbi1AwpP7PyeQN8FTzvs/7DPC5WoI/D/9a2ygCkL8P1Q1A8Y1e/w/FUIhD++z/D8sGLIZOez8P2DlWmoWJP0/Ty/LbYlb/T87Ufd5lJL9P++KPs85yf0/ODp+mXv//T8MsxPxWzX+PxgJztvcav4/Qf/QTQCg/j+9NmoqyNT+PwKf2UQ2Cf8/6REOYUw9/z+N81Y0DHH/P5KbC2Z3pP8/Mj0pkI/X/z9y+vMfKwUAQHrKI3tmHgBAK19KlHo3AED5Y3MgaFAAQFt2S88vaQBAoZdYS9KBAEAOrS86UJoAQJs9pzyqsgBAepkH7+DKAEAllDjp9OIAQMf27L7m+gBARc7L/7YSAUCEtZc3ZioBQF46VO70QQFAl3lpqGNZAUA3DMbmsnABQNte/ybjhwFA/Ylw4/SeAUCcwFeT6LUBQFhp8qq+zAFAqPSXm3fjAUA=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"6b1a160e-2e2a-40d6-9e6c-0074974e8df2","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"f0ac27fa-ba80-458b-b9d1-e4b8fe0de5f5","type":"BoxAnnotation"}},"id":"83cf05cf-42c7-4452-88f3-86de4f4cd6b0","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"d20d74aa-974f-4cf0-9f82-dd09e251333b","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8c1ab1e9-6efe-4770-9375-fd8fd8b9cc23","type":"Line"},{"attributes":{"line_color":"indigo","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"812f21ca-4310-453d-99c8-e7eec8d59829","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"bc86a3f3-3aed-4699-9975-d5cbb75b5fe6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8958a28b-c3ba-4ff1-8dcc-992fb2b6e3c9","type":"LogTicker"}},"id":"053264b6-0204-4023-9441-0d586e10c64d","type":"Grid"},{"attributes":{"source":{"id":"6b1a160e-2e2a-40d6-9e6c-0074974e8df2","type":"ColumnDataSource"}},"id":"96d23bf6-79cb-4ab4-bad5-ef27746bed16","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"olivedrab"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3cb67dd9-8bb7-48ee-ae66-4ad2e9e4b7de","type":"Circle"},{"attributes":{"num_minor_ticks":10},"id":"8958a28b-c3ba-4ff1-8dcc-992fb2b6e3c9","type":"LogTicker"},{"attributes":{"data_source":{"id":"78214e02-8b7f-4ca2-87d8-f51cc5493b80","type":"ColumnDataSource"},"glyph":{"id":"9fe03051-7158-4833-b7e2-5b010d17e23a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f06b9dd2-ecb8-4ab9-9422-fe07dbf490d5","type":"Line"},"selection_glyph":null,"view":{"id":"aaffe75f-1121-4bfd-a8ba-a99001cb7083","type":"CDSView"}},"id":"f8da5df4-2585-4e4b-aa40-c8b8309322d2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"LCYBeWhf8D9YMo0XTNjwP7lwLUUCh/E/NjZCrMRx8j87ZNvsLqHzP+s6F4zFIPU/YAoDerD/9j+XyDq0uVH5P0MCUFynMPw/TRHUKBK+/z+8f05U8xICQA0App3p0ARAcZq3UwA/CECU6ZL4zY8MQIFhtex8AxFAP6btxtB/FEBKjPbKsfoYQGM2kHGfyB5AMZpbeAIvI0AH5FKJSC4oQIYxvnNS0y5AiHHCVfbeM0C9O/c5zOg5QOW5WYFAFUFAJuWASVPIRkBm4ubKcbpOQH4/7XEv9VRADuRKK4PpXEBjRQHMRytkQDSIFrOEdWxANGXnGldOdECK2v+QXk59QI2vcbE4Y4VAeoIUQEqSj0DzJrXrC5GXQMXu6N55yqFABtZBY48qq0BNolG88/m0QIE0fTFxYcBAtutQNLLfyUCPyYwgiarUQF14O/2kseBAHGzPk8BG60AR7qUTUYn2QDQya/DT1AJBEgzOQ/PTD0EtCEvtxTMbQSlVrNU4gydBCZrJvtCNNEHvLeFb5itCQSWl2HpXP1BB9xUmlEJiXUGkaOoFQt9qQUBCEYqY2nhBMtlXhIA/h0FIwsH6IP6VQYUylEGJCqVBAZ+ndvNbtEF9K1xSPezDQeyPmeGLt9NBstmtihK840HfyIy9+PnzQYI/tDJccwRCHtS25m8sFUKfdupPuismQtnPVt13ejdCRZGI5yklSUKTfq80XjxbQqfO8X3A1W1Cfi4jU8eGgEJPL1U5SYSSQnKjp+9o+6RCBDpeyJ0LuEJ6oL8YWd7LQjRq+AFBVeBCKHUzg6Zc80KX55M5gTYHQyX22z1FJRxDefJ5c75BMUPhskwkvGZFQyjaa1mg11pDdqC5HDYGcUMsRNBD9taFQ7zVXEjHVZxDvV7SUPSWskNBaeCWN6vIQ1MK4gW+jeBDUmAb4uJ39kNvBEh2m9cORMzBz6igaCVEHdjoee0OPkSJtWQLN1dVRJ1sFjyEpW5EdLhNtDxBhkRmx7muJFigRHoUFimIR7hEeEGiGvQ80kTHykxO/LXrRAshCGZtSgVFkQIoLCqLIEU=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"d1178ae2-cc66-470f-b993-206ffe53beaf","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"f06b9dd2-ecb8-4ab9-9422-fe07dbf490d5","type":"Line"},{"attributes":{"data_source":{"id":"bf2e8cc1-3eda-4cef-bedd-f055713473b5","type":"ColumnDataSource"},"glyph":{"id":"812f21ca-4310-453d-99c8-e7eec8d59829","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc9d26bb-7ff3-4e3c-b572-d14d9067fe2d","type":"Line"},"selection_glyph":null,"view":{"id":"191e391d-23f2-4c3f-80f6-77c49f891e90","type":"CDSView"}},"id":"b8ae6f56-faf6-414e-89d2-e3c8f0b34642","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6b1a160e-2e2a-40d6-9e6c-0074974e8df2","type":"ColumnDataSource"},"glyph":{"id":"e098cd3c-128a-482d-9468-ec34ee7d703e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d20d74aa-974f-4cf0-9f82-dd09e251333b","type":"Line"},"selection_glyph":null,"view":{"id":"96d23bf6-79cb-4ab4-bad5-ef27746bed16","type":"CDSView"}},"id":"8a6db362-85df-4793-bb02-67e563af49b1","type":"GlyphRenderer"},{"attributes":{"line_color":"gold","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9fe03051-7158-4833-b7e2-5b010d17e23a","type":"Line"},{"attributes":{"line_color":"coral","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"32c11d10-55eb-4150-9bdf-ea950452be4e","type":"Line"}],"root_ids":["bc86a3f3-3aed-4699-9975-d5cbb75b5fe6"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"d2a3ecf8-dd47-4e47-9c35-1c0896edbd84","elementid":"4fc4feb7-b58c-4bfc-b9db-1449446cf41e","modelid":"bc86a3f3-3aed-4699-9975-d5cbb75b5fe6"}];
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