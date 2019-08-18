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
      };var element = document.getElementById("a9ab4c69-5d2f-40d0-acb3-b5811bf206de");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a9ab4c69-5d2f-40d0-acb3-b5811bf206de' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"90d57110-1d5e-4d29-87a3-c9314c78a3e9":{"roots":{"references":[{"attributes":{"formatter":{"id":"7b443fe2-a289-4c20-a7b1-9ea55bec935c","type":"BasicTickFormatter"},"plot":{"id":"6342d797-fa00-442d-88fa-cf10fc949306","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f110e6f-ae42-4f43-ab46-d015251bf465","type":"BasicTicker"}},"id":"08fb9697-6e69-414a-958b-4f39cea6ab0b","type":"LinearAxis"},{"attributes":{},"id":"a25d334e-74be-497a-89a2-9e5c00d5ec01","type":"BasicTicker"},{"attributes":{"formatter":{"id":"23447949-7e04-4dfd-9228-38f54e19b269","type":"BasicTickFormatter"},"plot":{"id":"bfe7cef6-2e4c-44e0-a2c6-9931ab27aa17","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc402386-2e99-4ccc-8036-28733bd6eab6","type":"BasicTicker"}},"id":"cd63776a-6f1a-4144-9d22-74fbfdfb7133","type":"LinearAxis"},{"attributes":{"plot":{"id":"6342d797-fa00-442d-88fa-cf10fc949306","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bf5446f-b2ea-4682-a71e-061113bcafa5","type":"BasicTicker"}},"id":"e759d1f9-69a3-4538-ad83-f0090b8681d5","type":"Grid"},{"attributes":{},"id":"7b443fe2-a289-4c20-a7b1-9ea55bec935c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"74d4e0fe-2f81-49ad-b31a-d57676012160","type":"ColumnDataSource"},"glyph":{"id":"46bc1ea2-bc53-4ca9-a368-e6f634965a6e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f6c1e9d3-d88c-47b6-b1d1-6cfc5e67d7f3","type":"Circle"},"selection_glyph":null,"view":{"id":"b8095444-33e2-4807-a275-bb004e02b9a1","type":"CDSView"}},"id":"e896383a-8502-45e6-bbd0-2f5b3b64d958","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"edda1004-02c8-4de3-a6e4-074fb42707de","type":"BoxAnnotation"}},"id":"1dab93c3-76c1-4430-be6d-f56360ae12b9","type":"BoxZoomTool"},{"attributes":{},"id":"88b7655d-188a-41a4-96a5-49e9bb73d315","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"bfe7cef6-2e4c-44e0-a2c6-9931ab27aa17","subtype":"Figure","type":"Plot"},"ticker":{"id":"a25d334e-74be-497a-89a2-9e5c00d5ec01","type":"BasicTicker"}},"id":"66a1591e-80b7-4fee-8950-cffcf531d5a3","type":"Grid"},{"attributes":{},"id":"c6089c71-98fd-40fd-ae1a-40b98f727f35","type":"SaveTool"},{"attributes":{},"id":"9c7f55cf-7887-4906-a5b1-ce40668524dd","type":"HelpTool"},{"attributes":{"below":[{"id":"3303c054-a19d-4626-b990-32891ea0878b","type":"LinearAxis"}],"left":[{"id":"6d69d70b-614c-4c1d-8721-6cbaaca09343","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"3303c054-a19d-4626-b990-32891ea0878b","type":"LinearAxis"},{"id":"6b34bdb8-e542-47d0-a13d-8df895d7ba85","type":"Grid"},{"id":"6d69d70b-614c-4c1d-8721-6cbaaca09343","type":"LinearAxis"},{"id":"7de30043-a574-4a11-b1a8-1e0a925f2573","type":"Grid"},{"id":"edda1004-02c8-4de3-a6e4-074fb42707de","type":"BoxAnnotation"},{"id":"e896383a-8502-45e6-bbd0-2f5b3b64d958","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7bbdcd9d-b5b0-46c8-abd5-2c6673848a96","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7dd2c766-471b-45e5-9a58-cf13ff022389","type":"DataRange1d"},"x_scale":{"id":"7a126142-37a8-43e2-a7d7-d500325d2f23","type":"LinearScale"},"y_range":{"id":"85b55791-9cdb-4086-b2d2-c0deea3c6b8b","type":"DataRange1d"},"y_scale":{"id":"ae664474-c962-40c0-b16c-866d0df48dcc","type":"LinearScale"}},"id":"eb0ff8f1-7209-431a-8ead-ac9237fe95c1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"db7b5b93-130d-428b-93dd-a4c78720bbb9","type":"LinearScale"},{"attributes":{},"id":"e4bd1eaf-039a-4a85-9c3b-c2ddcb0ea322","type":"BasicTickFormatter"},{"attributes":{},"id":"23447949-7e04-4dfd-9228-38f54e19b269","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6342d797-fa00-442d-88fa-cf10fc949306","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f110e6f-ae42-4f43-ab46-d015251bf465","type":"BasicTicker"}},"id":"5c23f597-ecdd-49c6-9744-eddac1bc103a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"642d9ac8-103c-40d4-8e7d-5135155e462d","type":"Triangle"},{"attributes":{"children":[{"id":"eb0ff8f1-7209-431a-8ead-ac9237fe95c1","subtype":"Figure","type":"Plot"},{"id":"6342d797-fa00-442d-88fa-cf10fc949306","subtype":"Figure","type":"Plot"},{"id":"bfe7cef6-2e4c-44e0-a2c6-9931ab27aa17","subtype":"Figure","type":"Plot"}]},"id":"ff84b0c5-e59c-42fe-85ac-ce230df53b7a","type":"Row"},{"attributes":{"data_source":{"id":"fbfc6740-bed6-42c4-be90-71252af01fe9","type":"ColumnDataSource"},"glyph":{"id":"65130e8c-35d2-4852-a8eb-1b572a4a1ac2","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e14092f1-7b31-40ab-8b03-5b0fbe9514cc","type":"Square"},"selection_glyph":null,"view":{"id":"10eff317-e0ef-4beb-9a12-b39b0a27b2c4","type":"CDSView"}},"id":"e7db9b20-b201-4272-9b73-2c2c8707c366","type":"GlyphRenderer"},{"attributes":{},"id":"575af254-6bde-42a9-8ade-5ac9fc024d45","type":"BasicTicker"},{"attributes":{"children":[{"id":"ff84b0c5-e59c-42fe-85ac-ce230df53b7a","type":"Row"}]},"id":"7442c36c-dfc2-43b5-91fe-b4700d232dab","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c6914d3d-73f6-4a51-b45d-fe6df6f9aec3","type":"PanTool"},{"id":"5cb4ef97-8f52-4917-84e2-8553cadc96e4","type":"WheelZoomTool"},{"id":"9c96e7b7-294b-44ad-8f0c-7de907c0d51c","type":"BoxZoomTool"},{"id":"2e12b39f-c65e-44c7-9ab0-ab8338d4eef3","type":"SaveTool"},{"id":"0e067305-145b-4ac0-9770-68b87a61cd30","type":"ResetTool"},{"id":"a21833d6-ef2a-4361-971d-c742b9f39215","type":"HelpTool"}]},"id":"5070a8c9-ead3-4fd3-831a-eee3e0414694","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e2623cb5-a53c-4a78-a84b-8ddaaa7e1417","type":"BoxAnnotation"},{"attributes":{},"id":"2d7645cc-e6ab-47e3-aba4-d366cea2816f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e14092f1-7b31-40ab-8b03-5b0fbe9514cc","type":"Square"},{"attributes":{},"id":"d9c7742c-cc25-4e1a-9a01-c8cf7b14af77","type":"LinearScale"},{"attributes":{},"id":"d2b65238-593a-496c-9613-3d67a8eba151","type":"ResetTool"},{"attributes":{},"id":"0e067305-145b-4ac0-9770-68b87a61cd30","type":"ResetTool"},{"attributes":{},"id":"5cb4ef97-8f52-4917-84e2-8553cadc96e4","type":"WheelZoomTool"},{"attributes":{"source":{"id":"74d4e0fe-2f81-49ad-b31a-d57676012160","type":"ColumnDataSource"}},"id":"b8095444-33e2-4807-a275-bb004e02b9a1","type":"CDSView"},{"attributes":{},"id":"3f110e6f-ae42-4f43-ab46-d015251bf465","type":"BasicTicker"},{"attributes":{},"id":"15e9daba-5d4d-4d53-93e2-b4d0cf9f3620","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e4bd1eaf-039a-4a85-9c3b-c2ddcb0ea322","type":"BasicTickFormatter"},"plot":{"id":"eb0ff8f1-7209-431a-8ead-ac9237fe95c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"575af254-6bde-42a9-8ade-5ac9fc024d45","type":"BasicTicker"}},"id":"6d69d70b-614c-4c1d-8721-6cbaaca09343","type":"LinearAxis"},{"attributes":{},"id":"f1b5f659-afcc-4979-90d2-1df91f7714f7","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D9o+gYFGL7vPyN/Fo5v+e4/XLHeqjC17T9foQT4kvbrP1YykSHGxOk/tDkVSdQo5z9AE3HJfC3kP1wsoPEH3+A/thLH2SiW2j9bQ2NRvgDTP4xzC34aOsY/cyCwKKhcqD8MyeikuUm0v0/eq9oaN8q/PSGBd67u1L+LyZhelmvcv8/m3JG2ueG/hlh3f5705L9dUsfUNNnnv10cd/2OW+q/wfLvCVdx7L8bLVJC9hHuv0PyRoe4Nu+/XjTx7ufa778HB0As4PvvvwQ9tXAZme+/V1DNmyq07r/ZTwivwlDtv4lZi6GZdOu/JeDa0Vgn6b/aPrV2e3Lmv8y0DJEnYeO/+f//////3783i/Tn4LnYv4yAwi7oDdG/3kQPZF83wr9U+ijPKj+QvxHsuGvkX7w/k1rgSlktzj+GU4hOOdfWP1m1P3WwOd4/AasNgtOP4j+XUJVeWbblPzdQz6Jvg+g/uvBkh4zr6j99NRQyxuTsP/FJcov7Zu4/Juk3u/Vr7z+VSynBge/vP5RLKcGB7+8/Jek3u/Vr7z/vSXKL+2buP381FDLG5Ow/uPBkh4zr6j86UM+ib4PoP5RQlV5ZtuU/BasNgtOP4j9TtT91sDneP45TiE4519Y/hVrgSlktzj807Lhr5F+8P8f6KM8qP5C/zUQPZF83wr+TgMIu6A3Rvy+L9Ofgudi/BwAAAAAA4L/PtAyRJ2Hjv9k+tXZ7cua/I+Da0Vgn6b+NWYuhmXTrv9pPCK/CUO2/V1DNmyq07r8DPbVwGZnvvwgHQCzg+++/XjTx7ufa779E8kaHuDbvvx4tUkL2Ee6/wPLvCVdx7L9dHHf9jlvqv2BSx9Q02ee/gVh3f5705L/M5tyRtrnhv4zJmF6Wa9y/RSGBd67u1L8x3qvaGjfKv/DI6KS5SbS/bSCwKKhcqD9zcwt+GjrGP2ZDY1G+ANM/uRLH2SiW2j9aLKDxB9/gPzsTccl8LeQ/uDkVSdQo5z9WMpEhxsTpP16hBPiS9us/X7HeqjC17T8kfxaOb/nuP2j6BgUYvu8/AAAAAAAA8D8=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"0975ed42-a4ae-428d-ad93-84c7ffb714de","type":"ColumnDataSource"},{"attributes":{},"id":"c6914d3d-73f6-4a51-b45d-fe6df6f9aec3","type":"PanTool"},{"attributes":{"below":[{"id":"aa0585bc-2220-4bba-829c-87a89e8c9517","type":"LinearAxis"}],"left":[{"id":"08fb9697-6e69-414a-958b-4f39cea6ab0b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"aa0585bc-2220-4bba-829c-87a89e8c9517","type":"LinearAxis"},{"id":"e759d1f9-69a3-4538-ad83-f0090b8681d5","type":"Grid"},{"id":"08fb9697-6e69-414a-958b-4f39cea6ab0b","type":"LinearAxis"},{"id":"5c23f597-ecdd-49c6-9744-eddac1bc103a","type":"Grid"},{"id":"e2623cb5-a53c-4a78-a84b-8ddaaa7e1417","type":"BoxAnnotation"},{"id":"5fd93852-668d-476f-8719-805d1a39c7d0","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"5070a8c9-ead3-4fd3-831a-eee3e0414694","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7dd2c766-471b-45e5-9a58-cf13ff022389","type":"DataRange1d"},"x_scale":{"id":"6ad5c139-f529-40dc-87ff-dee692db1db1","type":"LinearScale"},"y_range":{"id":"85b55791-9cdb-4086-b2d2-c0deea3c6b8b","type":"DataRange1d"},"y_scale":{"id":"d9c7742c-cc25-4e1a-9a01-c8cf7b14af77","type":"LinearScale"}},"id":"6342d797-fa00-442d-88fa-cf10fc949306","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"74d4e0fe-2f81-49ad-b31a-d57676012160","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"65130e8c-35d2-4852-a8eb-1b572a4a1ac2","type":"Square"},{"attributes":{"plot":{"id":"eb0ff8f1-7209-431a-8ead-ac9237fe95c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebd5dfc4-ad73-42dd-9490-a1891d690887","type":"BasicTicker"}},"id":"6b34bdb8-e542-47d0-a13d-8df895d7ba85","type":"Grid"},{"attributes":{"formatter":{"id":"f1b5f659-afcc-4979-90d2-1df91f7714f7","type":"BasicTickFormatter"},"plot":{"id":"bfe7cef6-2e4c-44e0-a2c6-9931ab27aa17","subtype":"Figure","type":"Plot"},"ticker":{"id":"a25d334e-74be-497a-89a2-9e5c00d5ec01","type":"BasicTicker"}},"id":"e1bc5765-1abc-4573-a795-6bbdb09d1273","type":"LinearAxis"},{"attributes":{"below":[{"id":"cd63776a-6f1a-4144-9d22-74fbfdfb7133","type":"LinearAxis"}],"left":[{"id":"e1bc5765-1abc-4573-a795-6bbdb09d1273","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"cd63776a-6f1a-4144-9d22-74fbfdfb7133","type":"LinearAxis"},{"id":"9eeefbb4-9023-41d1-a585-7ccedb06c3cf","type":"Grid"},{"id":"e1bc5765-1abc-4573-a795-6bbdb09d1273","type":"LinearAxis"},{"id":"66a1591e-80b7-4fee-8950-cffcf531d5a3","type":"Grid"},{"id":"2eff77a6-06e5-4982-aa76-0e77d1ee2e85","type":"BoxAnnotation"},{"id":"e7db9b20-b201-4272-9b73-2c2c8707c366","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"78b0a7d3-3e58-411f-a830-e1c07d8c6db0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7dd2c766-471b-45e5-9a58-cf13ff022389","type":"DataRange1d"},"x_scale":{"id":"db7b5b93-130d-428b-93dd-a4c78720bbb9","type":"LinearScale"},"y_range":{"id":"4a5a9023-b2ff-4d8b-b26c-3b4a61163fc8","type":"DataRange1d"},"y_scale":{"id":"1e6de53a-f1f3-421a-9271-78734b28338d","type":"LinearScale"}},"id":"bfe7cef6-2e4c-44e0-a2c6-9931ab27aa17","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"0975ed42-a4ae-428d-ad93-84c7ffb714de","type":"ColumnDataSource"}},"id":"5c7490d9-7592-4d8e-ac68-e316b1404e83","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"61a246ba-1d02-43dd-b59e-d9fa51c91d84","type":"Triangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"edda1004-02c8-4de3-a6e4-074fb42707de","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f6c1e9d3-d88c-47b6-b1d1-6cfc5e67d7f3","type":"Circle"},{"attributes":{},"id":"2e12b39f-c65e-44c7-9ab0-ab8338d4eef3","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"eb0ff8f1-7209-431a-8ead-ac9237fe95c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"575af254-6bde-42a9-8ade-5ac9fc024d45","type":"BasicTicker"}},"id":"7de30043-a574-4a11-b1a8-1e0a925f2573","type":"Grid"},{"attributes":{"callback":null},"id":"4a5a9023-b2ff-4d8b-b26c-3b4a61163fc8","type":"DataRange1d"},{"attributes":{},"id":"de6ac368-aacb-4332-9289-34f123fae251","type":"PanTool"},{"attributes":{},"id":"a21833d6-ef2a-4361-971d-c742b9f39215","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0d47c530-4686-4c1d-b273-975e8ca52ab7","type":"PanTool"},{"id":"6fdd0a80-c165-43fa-865f-6d2ce50dbfcc","type":"WheelZoomTool"},{"id":"aa198588-79d6-44c1-8092-800e5fcc5c3c","type":"BoxZoomTool"},{"id":"029d78b3-83ba-42e1-af59-164aed783816","type":"SaveTool"},{"id":"88b7655d-188a-41a4-96a5-49e9bb73d315","type":"ResetTool"},{"id":"9c7f55cf-7887-4906-a5b1-ce40668524dd","type":"HelpTool"}]},"id":"78b0a7d3-3e58-411f-a830-e1c07d8c6db0","type":"Toolbar"},{"attributes":{},"id":"1bf5446f-b2ea-4682-a71e-061113bcafa5","type":"BasicTicker"},{"attributes":{},"id":"1e6de53a-f1f3-421a-9271-78734b28338d","type":"LinearScale"},{"attributes":{},"id":"029d78b3-83ba-42e1-af59-164aed783816","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2eff77a6-06e5-4982-aa76-0e77d1ee2e85","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"e2623cb5-a53c-4a78-a84b-8ddaaa7e1417","type":"BoxAnnotation"}},"id":"9c96e7b7-294b-44ad-8f0c-7de907c0d51c","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"85b55791-9cdb-4086-b2d2-c0deea3c6b8b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2d7645cc-e6ab-47e3-aba4-d366cea2816f","type":"BasicTickFormatter"},"plot":{"id":"6342d797-fa00-442d-88fa-cf10fc949306","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bf5446f-b2ea-4682-a71e-061113bcafa5","type":"BasicTicker"}},"id":"aa0585bc-2220-4bba-829c-87a89e8c9517","type":"LinearAxis"},{"attributes":{"plot":{"id":"bfe7cef6-2e4c-44e0-a2c6-9931ab27aa17","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc402386-2e99-4ccc-8036-28733bd6eab6","type":"BasicTicker"}},"id":"9eeefbb4-9023-41d1-a585-7ccedb06c3cf","type":"Grid"},{"attributes":{},"id":"fc402386-2e99-4ccc-8036-28733bd6eab6","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7dd2c766-471b-45e5-9a58-cf13ff022389","type":"DataRange1d"},{"attributes":{},"id":"0998228f-431d-4a60-8edf-610023ead19c","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"2eff77a6-06e5-4982-aa76-0e77d1ee2e85","type":"BoxAnnotation"}},"id":"aa198588-79d6-44c1-8092-800e5fcc5c3c","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"15e9daba-5d4d-4d53-93e2-b4d0cf9f3620","type":"BasicTickFormatter"},"plot":{"id":"eb0ff8f1-7209-431a-8ead-ac9237fe95c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebd5dfc4-ad73-42dd-9490-a1891d690887","type":"BasicTicker"}},"id":"3303c054-a19d-4626-b990-32891ea0878b","type":"LinearAxis"},{"attributes":{},"id":"6fdd0a80-c165-43fa-865f-6d2ce50dbfcc","type":"WheelZoomTool"},{"attributes":{"source":{"id":"fbfc6740-bed6-42c4-be90-71252af01fe9","type":"ColumnDataSource"}},"id":"10eff317-e0ef-4beb-9a12-b39b0a27b2c4","type":"CDSView"},{"attributes":{},"id":"7a126142-37a8-43e2-a7d7-d500325d2f23","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"46bc1ea2-bc53-4ca9-a368-e6f634965a6e","type":"Circle"},{"attributes":{},"id":"69b52933-b626-4133-9713-57f074ce7f1f","type":"HelpTool"},{"attributes":{},"id":"ebd5dfc4-ad73-42dd-9490-a1891d690887","type":"BasicTicker"},{"attributes":{},"id":"6ad5c139-f529-40dc-87ff-dee692db1db1","type":"LinearScale"},{"attributes":{"data_source":{"id":"0975ed42-a4ae-428d-ad93-84c7ffb714de","type":"ColumnDataSource"},"glyph":{"id":"642d9ac8-103c-40d4-8e7d-5135155e462d","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61a246ba-1d02-43dd-b59e-d9fa51c91d84","type":"Triangle"},"selection_glyph":null,"view":{"id":"5c7490d9-7592-4d8e-ac68-e316b1404e83","type":"CDSView"}},"id":"5fd93852-668d-476f-8719-805d1a39c7d0","type":"GlyphRenderer"},{"attributes":{},"id":"0d47c530-4686-4c1d-b273-975e8ca52ab7","type":"PanTool"},{"attributes":{},"id":"ae664474-c962-40c0-b16c-866d0df48dcc","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"de6ac368-aacb-4332-9289-34f123fae251","type":"PanTool"},{"id":"0998228f-431d-4a60-8edf-610023ead19c","type":"WheelZoomTool"},{"id":"1dab93c3-76c1-4430-be6d-f56360ae12b9","type":"BoxZoomTool"},{"id":"c6089c71-98fd-40fd-ae1a-40b98f727f35","type":"SaveTool"},{"id":"d2b65238-593a-496c-9613-3d67a8eba151","type":"ResetTool"},{"id":"69b52933-b626-4133-9713-57f074ce7f1f","type":"HelpTool"}]},"id":"7bbdcd9d-b5b0-46c8-abd5-2c6673848a96","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D+yzYPRkeXxP7ihgYdrgfM/rb0yquzM9D/245G2v8L1P87bFRfwXvY/2iiqbvqe9j/kKcny1oH2P2p9E6r9B/Y/t9rofWQz9T/V4vYmdwf0P338ARYJifI/RdfykkG+8D9ETRXIBF3tPyugTMuSxOg/JsOhHxvG4z8XRefmX+zcP4TfmO5l1dE/2IAW3tnTuT9QVAYbRxi0v26sY4ZobNC/kDyhvhiP278fJw0IIiDjv8rnndrvKei/4klI9jTQ7L9i6ms85X/wvyB3ITG5U/K/nEtETQ/c879kyJx6lxL1v3a2nZlS8vW/jCxGFqd39r9Ikzy8b6D2v7IbDo0EbPa/VCYsdD3b9b+XNIXNbvD0vyX2CM1fr/O/Ewqe7jod8r/hQKSueEDwv7KoVMWJQey/OkhCQL6N57//x2pm7XjivwmD/egKMNq/WFreULgEzr/gjtyf0basv8DQmYTCjb8/YDFTHT090z9zKk7fyUfePwQ64frNauQ/Br4PG51d6T/UmpIn8OftPyz+X62J+/A/JAqwLSe98j/wrAGOlDH0P9+qQLrTUvU/YiQQQD0c9j8qs4V6k4r2Pw41lOsPnPY/TXYpjGpQ9j9uO9/02qj1P8SNeVoTqPQ/wTrZcjVS8z/dcSFwwazxPxnyVbD+fO8/vXE0K8Ye6z+6a09r11DmP/7dFbP8JuE/QJmw0PVs1z8YNwvg51bIP4A3qsMi+oY/tJyl3I19xb9gjLYfHAnWv+4O12hWfOC/dgkSnTaw5b/Eiyd/wIrqv1M5qN/19+6/bg/Nc81y8b9c/veZwCHzv4mZSz7lgfS/nqNH2pCN9b9BMd7bdED2vxjtFmOwl/a/lMBYHdyR9r+wHoMNEC/2vww2BinjcPW/M3KRy2Ra9L+mR1EcEPDyv8K/p5i5N/G/fKrPIO5w7r87P/7sBPXpv0iCivwvDuW/bUUVRECh3788RM3h1qPUv0S1wErRosK/wBtiTTs7oT9AtNpTsC7LP531ygVNz9g/audXAYjQ4T/buikNCPDmP2xZBmcMses//P//////7z8=","dtype":"float64","shape":[100]}},"selected":null,"selection_policy":null},"id":"fbfc6740-bed6-42c4-be90-71252af01fe9","type":"ColumnDataSource"}],"root_ids":["7442c36c-dfc2-43b5-91fe-b4700d232dab"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"90d57110-1d5e-4d29-87a3-c9314c78a3e9","elementid":"a9ab4c69-5d2f-40d0-acb3-b5811bf206de","modelid":"7442c36c-dfc2-43b5-91fe-b4700d232dab"}];
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