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
      };var element = document.getElementById("c7cf832f-0303-4167-9da9-8e17515d305c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c7cf832f-0303-4167-9da9-8e17515d305c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4f522a40-2794-4600-8874-3f27deafef87":{"roots":{"references":[{"attributes":{"callback":null},"id":"37932c0a-3c76-44b4-81e9-ab07df0851f1","type":"DataRange1d"},{"attributes":{},"id":"3095fa02-16c6-4378-a8ab-64561a5ae639","type":"LinearScale"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"ef202922-343f-4858-83aa-56c5ccbc723e","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"455038bb-eb32-4fe8-8d92-a1da31e0008f","type":"HexTile"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"86cf8944-f357-4a8c-b51b-004a2ed6c92c","type":"Circle"},{"attributes":{"source":{"id":"9632da33-4dae-479c-9033-54565d1e69ac","type":"ColumnDataSource"}},"id":"6e39f47c-673e-45e9-8418-347b8e512759","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"64b2b49f-0460-47bf-84e9-2e338daa7a90","type":"LinearAxis"}],"left":[{"id":"1143df12-a432-4591-89f6-0dcea2fcfaad","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"64b2b49f-0460-47bf-84e9-2e338daa7a90","type":"LinearAxis"},{"id":"23ae474c-5d32-496a-b90e-196a025b23cd","type":"Grid"},{"id":"1143df12-a432-4591-89f6-0dcea2fcfaad","type":"LinearAxis"},{"id":"563e4eba-95d5-4ee9-8a24-d3001b525ed9","type":"Grid"},{"id":"1a75eb9c-ae6b-4bd5-b756-152ed92e8fa9","type":"GlyphRenderer"},{"id":"4897c78f-f303-4026-ae02-df855b161b54","type":"GlyphRenderer"}],"title":{"id":"3f27e1b2-a93b-4911-98f5-db406636ff58","type":"Title"},"toolbar":{"id":"d509631c-4d74-4b99-866f-346fb34bb6b4","type":"Toolbar"},"x_range":{"id":"caedc4ec-4a4d-4951-a632-2e67d2dde7cb","type":"DataRange1d"},"x_scale":{"id":"3095fa02-16c6-4378-a8ab-64561a5ae639","type":"LinearScale"},"y_range":{"id":"37932c0a-3c76-44b4-81e9-ab07df0851f1","type":"DataRange1d"},"y_scale":{"id":"29273054-98d8-4081-a0fc-40c8e121d81b","type":"LinearScale"}},"id":"a02c9a04-2bd9-4068-bc63-52e42cef2aa4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b66ba06e-86e7-4f25-8073-dfc004b7ae8a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["q","r","c"],"data":{"c":[1,1,1,1,1,1,1,4,2,1,2,1,3,3,4,2,3,1,1,1,2,1,4,7,5,4,8,1,5,2,2,4,5,5,3,7,8,2,1,1,1,1,1,2,5,7,11,13,7,8,4,2,2,1,1,1,7,5,9,9,18,11,6,5,1,1,1,5,5,8,19,15,13,2,6,3,1,1,1,6,7,8,15,6,4,2,3,1,2,1,2,5,12,13,8,7,8,1,2,1,2,3,2,2,8,2,3,3,1,1,1,1,2,5,1,2,1,1,1,4,1,1,1,1,1,1,1,1,1],"q":[-5,-4,-3,-3,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,11],"r":[1,-1,-3,5,-4,-3,-2,-1,1,4,-5,-4,-3,-2,-1,0,2,3,5,-6,-5,-4,-3,-2,-1,0,1,2,3,-7,-5,-4,-3,-2,-1,0,1,2,3,4,5,-9,-8,-6,-5,-4,-3,-2,-1,0,1,2,3,5,-12,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-10,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-9,-8,-7,-6,-5,-4,-3,-2,-1,-8,-7,-6,-5,-3,0,-12,-11,-3,-2,-10]},"selected":null,"selection_policy":null},"id":"9632da33-4dae-479c-9033-54565d1e69ac","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"528c9c42-7415-4368-bff2-1802776d01b7","type":"ColumnDataSource"},"glyph":{"id":"86cf8944-f357-4a8c-b51b-004a2ed6c92c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2e2d246-a173-4a5e-a707-17046e541635","type":"Circle"},"selection_glyph":null,"view":{"id":"c17c7f5f-a34c-4dae-959c-a389be3e3ea3","type":"CDSView"}},"id":"4897c78f-f303-4026-ae02-df855b161b54","type":"GlyphRenderer"},{"attributes":{},"id":"29273054-98d8-4081-a0fc-40c8e121d81b","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":null,"selection_policy":null},"id":"528c9c42-7415-4368-bff2-1802776d01b7","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"caedc4ec-4a4d-4951-a632-2e67d2dde7cb","type":"DataRange1d"},{"attributes":{},"id":"0e2d3cc5-e892-4e09-8efb-7a60eae9f85c","type":"BasicTicker"},{"attributes":{},"id":"f2831126-1a72-479a-929b-2c5b307d0d2e","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2e2d246-a173-4a5e-a707-17046e541635","type":"Circle"},{"attributes":{},"id":"94bfa4fd-bc3b-4523-a07e-50f0fb2ba123","type":"BasicTicker"},{"attributes":{"source":{"id":"528c9c42-7415-4368-bff2-1802776d01b7","type":"ColumnDataSource"}},"id":"c17c7f5f-a34c-4dae-959c-a389be3e3ea3","type":"CDSView"},{"attributes":{"formatter":{"id":"1a74aeeb-5cd2-4c0a-9d11-365a75493b61","type":"BasicTickFormatter"},"plot":{"id":"a02c9a04-2bd9-4068-bc63-52e42cef2aa4","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e2d3cc5-e892-4e09-8efb-7a60eae9f85c","type":"BasicTicker"}},"id":"1143df12-a432-4591-89f6-0dcea2fcfaad","type":"LinearAxis"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"1a75eb9c-ae6b-4bd5-b756-152ed92e8fa9","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"0319146f-3183-4d10-9ebc-0cdcd2967a50","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"a02c9a04-2bd9-4068-bc63-52e42cef2aa4","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e2d3cc5-e892-4e09-8efb-7a60eae9f85c","type":"BasicTicker"},"visible":false},"id":"563e4eba-95d5-4ee9-8a24-d3001b525ed9","type":"Grid"},{"attributes":{},"id":"5dff3023-660c-40b6-b9ae-b3efff10e945","type":"ResetTool"},{"attributes":{"high":19,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"ef202922-343f-4858-83aa-56c5ccbc723e","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f2831126-1a72-479a-929b-2c5b307d0d2e","type":"WheelZoomTool"},{"id":"5dff3023-660c-40b6-b9ae-b3efff10e945","type":"ResetTool"},{"id":"0319146f-3183-4d10-9ebc-0cdcd2967a50","type":"HoverTool"}]},"id":"d509631c-4d74-4b99-866f-346fb34bb6b4","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"1e4177e0-0100-4e1c-be2f-fb7d0cca5882","type":"HexTile"},{"attributes":{},"id":"1a74aeeb-5cd2-4c0a-9d11-365a75493b61","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a02c9a04-2bd9-4068-bc63-52e42cef2aa4","subtype":"Figure","type":"Plot"},"ticker":{"id":"94bfa4fd-bc3b-4523-a07e-50f0fb2ba123","type":"BasicTicker"},"visible":false},"id":"23ae474c-5d32-496a-b90e-196a025b23cd","type":"Grid"},{"attributes":{"data_source":{"id":"9632da33-4dae-479c-9033-54565d1e69ac","type":"ColumnDataSource"},"glyph":{"id":"455038bb-eb32-4fe8-8d92-a1da31e0008f","type":"HexTile"},"hover_glyph":{"id":"dd3f0d83-052d-499b-ba65-b16f56d0b741","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"1e4177e0-0100-4e1c-be2f-fb7d0cca5882","type":"HexTile"},"selection_glyph":null,"view":{"id":"6e39f47c-673e-45e9-8418-347b8e512759","type":"CDSView"}},"id":"1a75eb9c-ae6b-4bd5-b756-152ed92e8fa9","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Hexbin for 500 points"},"id":"3f27e1b2-a93b-4911-98f5-db406636ff58","type":"Title"},{"attributes":{"formatter":{"id":"b66ba06e-86e7-4f25-8073-dfc004b7ae8a","type":"BasicTickFormatter"},"plot":{"id":"a02c9a04-2bd9-4068-bc63-52e42cef2aa4","subtype":"Figure","type":"Plot"},"ticker":{"id":"94bfa4fd-bc3b-4523-a07e-50f0fb2ba123","type":"BasicTicker"}},"id":"64b2b49f-0460-47bf-84e9-2e338daa7a90","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"dd3f0d83-052d-499b-ba65-b16f56d0b741","type":"HexTile"}],"root_ids":["a02c9a04-2bd9-4068-bc63-52e42cef2aa4"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"4f522a40-2794-4600-8874-3f27deafef87","elementid":"c7cf832f-0303-4167-9da9-8e17515d305c","modelid":"a02c9a04-2bd9-4068-bc63-52e42cef2aa4"}];
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