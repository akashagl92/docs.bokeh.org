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
      };var element = document.getElementById("443c668a-cf60-41aa-bf02-459f1ff787fb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '443c668a-cf60-41aa-bf02-459f1ff787fb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9e691ec0-4a09-4621-b429-4046b725cd05":{"roots":{"references":[{"attributes":{"source":{"id":"7a227a55-2a4a-45b7-812a-8f2e537b74a5","type":"ColumnDataSource"}},"id":"1da3c9b5-c41a-4abd-81ad-6fb6b439c50e","type":"CDSView"},{"attributes":{},"id":"202e2b6a-205d-4ca0-9d44-f490cf74ca9e","type":"PanTool"},{"attributes":{},"id":"22256768-87f5-4b02-8e52-f016990ab00a","type":"WheelZoomTool"},{"attributes":{},"id":"efa3cb6f-e8f7-48ca-906d-a97275ad789e","type":"PanTool"},{"attributes":{"formatter":{"id":"b3eeba54-6c1e-410e-9e9d-e25fac6224de","type":"BasicTickFormatter"},"plot":{"id":"24df4f56-6a1b-4ed7-8f94-2b444064cd30","subtype":"Figure","type":"Plot"},"ticker":{"id":"65959555-a4d0-479c-8b72-cca89d47be9b","type":"BasicTicker"}},"id":"dfead20c-3428-4b66-9382-ea9cea800e86","type":"LinearAxis"},{"attributes":{},"id":"65959555-a4d0-479c-8b72-cca89d47be9b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"24df4f56-6a1b-4ed7-8f94-2b444064cd30","subtype":"Figure","type":"Plot"},"ticker":{"id":"65959555-a4d0-479c-8b72-cca89d47be9b","type":"BasicTicker"}},"id":"f7aafca2-d849-462b-8a0b-d5bb2940efc8","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9cf6d129-5ac7-44a4-9fad-20db9c9b6996","type":"BoxAnnotation"},{"attributes":{},"id":"2230732a-616d-40d5-932e-41c65e02b9c8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0a3dbf0c-2133-4d8f-9783-13152b01a6c2","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c06fc423-e12d-4518-88ea-7e5b68b43b84","type":"Square"},{"attributes":{"overlay":{"id":"58da7487-98c9-425c-9342-818b74cceb91","type":"BoxAnnotation"}},"id":"61df22e5-1fb1-469b-a929-f2f175a56c61","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"5c9904a2-033c-4bfb-b85f-4da83c07d4ab","type":"Title"},{"attributes":{"children":[{"id":"b74bdc73-b81b-4959-a501-01057b62da5d","subtype":"Figure","type":"Plot"},{"id":"f637a288-cdaa-4a46-913d-1dfdce694382","subtype":"Figure","type":"Plot"}]},"id":"fd50e0d0-dc51-491e-a8bf-6b04c2bf87f0","type":"Row"},{"attributes":{},"id":"59a65f24-8e78-480c-a3db-9c447da535a4","type":"LinearScale"},{"attributes":{"formatter":{"id":"cf34cb41-f63c-479b-9dcd-617237d16193","type":"BasicTickFormatter"},"plot":{"id":"24df4f56-6a1b-4ed7-8f94-2b444064cd30","subtype":"Figure","type":"Plot"},"ticker":{"id":"2230732a-616d-40d5-932e-41c65e02b9c8","type":"BasicTicker"}},"id":"eef714d5-1cdd-4331-9543-afdec37c8135","type":"LinearAxis"},{"attributes":{},"id":"16364771-9b6a-4ab5-98c6-1d819cf5dec4","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"bca85d1c-f119-4a93-a523-5b02c17442d9","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":null,"selection_policy":null},"id":"f22a62de-8564-467f-b377-2fbf9409b58f","type":"ColumnDataSource"},{"attributes":{},"id":"0a3acf31-b37f-466c-ac06-8ab2ef4c00dc","type":"HelpTool"},{"attributes":{"data_source":{"id":"7a227a55-2a4a-45b7-812a-8f2e537b74a5","type":"ColumnDataSource"},"glyph":{"id":"0c847300-14ad-48c7-9df3-51a2909f5eff","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"732c6201-5cf5-4a9c-b57f-61759ca5e309","type":"Triangle"},"selection_glyph":null,"view":{"id":"1da3c9b5-c41a-4abd-81ad-6fb6b439c50e","type":"CDSView"}},"id":"15758710-21af-4924-a93a-bc905a431910","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"24df4f56-6a1b-4ed7-8f94-2b444064cd30","subtype":"Figure","type":"Plot"},"ticker":{"id":"2230732a-616d-40d5-932e-41c65e02b9c8","type":"BasicTicker"}},"id":"cc13d5f2-6aa1-4523-b9a6-585f7c45020c","type":"Grid"},{"attributes":{"source":{"id":"c8ad99df-3900-4fe1-b22b-8f2363811d5d","type":"ColumnDataSource"}},"id":"7c9b29b6-6b47-4f95-8f44-afc3508ed2b6","type":"CDSView"},{"attributes":{"callback":null},"id":"26921c74-43fc-4351-ba04-7213e8398555","type":"DataRange1d"},{"attributes":{},"id":"6843c512-a8d4-4c75-83a5-412885e5f575","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":null,"selection_policy":null},"id":"7a227a55-2a4a-45b7-812a-8f2e537b74a5","type":"ColumnDataSource"},{"attributes":{},"id":"b3eeba54-6c1e-410e-9e9d-e25fac6224de","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"eef714d5-1cdd-4331-9543-afdec37c8135","type":"LinearAxis"}],"left":[{"id":"dfead20c-3428-4b66-9382-ea9cea800e86","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"eef714d5-1cdd-4331-9543-afdec37c8135","type":"LinearAxis"},{"id":"cc13d5f2-6aa1-4523-b9a6-585f7c45020c","type":"Grid"},{"id":"dfead20c-3428-4b66-9382-ea9cea800e86","type":"LinearAxis"},{"id":"f7aafca2-d849-462b-8a0b-d5bb2940efc8","type":"Grid"},{"id":"961abdfa-56e5-4442-b33d-7a785da0f638","type":"BoxAnnotation"},{"id":"5a7b8ac1-66b4-429d-a552-7727a83e2710","type":"GlyphRenderer"}],"title":{"id":"5c9904a2-033c-4bfb-b85f-4da83c07d4ab","type":"Title"},"toolbar":{"id":"35e8db6a-52f4-4f2a-b91e-9bd052e2ecdd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2a49f43b-e81c-4aad-8947-c383d4ef2838","type":"DataRange1d"},"x_scale":{"id":"59a65f24-8e78-480c-a3db-9c447da535a4","type":"LinearScale"},"y_range":{"id":"0a3dbf0c-2133-4d8f-9783-13152b01a6c2","type":"DataRange1d"},"y_scale":{"id":"d624380c-fefc-4897-9d68-aa51f1086325","type":"LinearScale"}},"id":"24df4f56-6a1b-4ed7-8f94-2b444064cd30","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7553323f-7205-47fd-a8f2-8ddefa229f1c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":null,"selection_policy":null},"id":"c8ad99df-3900-4fe1-b22b-8f2363811d5d","type":"ColumnDataSource"},{"attributes":{},"id":"5d527aa3-5cad-4296-9eb4-6112f5ad6296","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5951715-ce03-4f15-8ab9-f59a79e31df6","type":"Square"},{"attributes":{},"id":"8f56f24f-ed40-4bd2-924b-8a4627c160f1","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6843c512-a8d4-4c75-83a5-412885e5f575","type":"BasicTickFormatter"},"plot":{"id":"f637a288-cdaa-4a46-913d-1dfdce694382","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f56f24f-ed40-4bd2-924b-8a4627c160f1","type":"BasicTicker"}},"id":"0a55d36c-58ec-4268-a457-74bf840cc4e3","type":"LinearAxis"},{"attributes":{},"id":"d624380c-fefc-4897-9d68-aa51f1086325","type":"LinearScale"},{"attributes":{"overlay":{"id":"9cf6d129-5ac7-44a4-9fad-20db9c9b6996","type":"BoxAnnotation"}},"id":"49c27561-0ccf-4bce-a91a-fe413a3413db","type":"BoxZoomTool"},{"attributes":{},"id":"3003be48-db2e-4319-927a-f6807742407b","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58da7487-98c9-425c-9342-818b74cceb91","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"efa3cb6f-e8f7-48ca-906d-a97275ad789e","type":"PanTool"},{"id":"b0661302-80aa-410d-a170-888bdb8b66aa","type":"WheelZoomTool"},{"id":"dfbb7be7-a222-41ec-9aa7-a06f88a10814","type":"BoxZoomTool"},{"id":"959801bc-6bf4-4bbb-89b2-ee434f059086","type":"SaveTool"},{"id":"07153d0e-69ac-4f37-a892-416d614e95d9","type":"ResetTool"},{"id":"059a26d7-da5a-4021-9c4d-5195c0395bb3","type":"HelpTool"}]},"id":"35e8db6a-52f4-4f2a-b91e-9bd052e2ecdd","type":"Toolbar"},{"attributes":{"callback":null},"id":"2a49f43b-e81c-4aad-8947-c383d4ef2838","type":"DataRange1d"},{"attributes":{"tools":[{"id":"21898504-14df-4d03-9a0a-13070c4a6587","type":"PanTool"},{"id":"12766ecc-f9b2-4496-8767-2f7635fbac49","type":"WheelZoomTool"},{"id":"61df22e5-1fb1-469b-a929-f2f175a56c61","type":"BoxZoomTool"},{"id":"889323ac-3702-414e-a7ef-879f1dfd00f6","type":"SaveTool"},{"id":"7ad006db-fba1-482c-86af-35ca28dfe7ea","type":"ResetTool"},{"id":"a5a7eac9-21e3-4178-a3c6-adef89ae37c6","type":"HelpTool"},{"id":"202e2b6a-205d-4ca0-9d44-f490cf74ca9e","type":"PanTool"},{"id":"22256768-87f5-4b02-8e52-f016990ab00a","type":"WheelZoomTool"},{"id":"49c27561-0ccf-4bce-a91a-fe413a3413db","type":"BoxZoomTool"},{"id":"3003be48-db2e-4319-927a-f6807742407b","type":"SaveTool"},{"id":"5d527aa3-5cad-4296-9eb4-6112f5ad6296","type":"ResetTool"},{"id":"0a3acf31-b37f-466c-ac06-8ab2ef4c00dc","type":"HelpTool"},{"id":"efa3cb6f-e8f7-48ca-906d-a97275ad789e","type":"PanTool"},{"id":"b0661302-80aa-410d-a170-888bdb8b66aa","type":"WheelZoomTool"},{"id":"dfbb7be7-a222-41ec-9aa7-a06f88a10814","type":"BoxZoomTool"},{"id":"959801bc-6bf4-4bbb-89b2-ee434f059086","type":"SaveTool"},{"id":"07153d0e-69ac-4f37-a892-416d614e95d9","type":"ResetTool"},{"id":"059a26d7-da5a-4021-9c4d-5195c0395bb3","type":"HelpTool"}]},"id":"08886d57-77e0-44de-baa7-cb1b7e4ec046","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"178a8272-81e1-4507-aaf7-80296ea13faa","type":"DataRange1d"},{"attributes":{"below":[{"id":"0a55d36c-58ec-4268-a457-74bf840cc4e3","type":"LinearAxis"}],"left":[{"id":"2acdf010-5983-455e-b5b4-a0028b6a65a1","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"0a55d36c-58ec-4268-a457-74bf840cc4e3","type":"LinearAxis"},{"id":"538955bc-a262-4507-9182-4ca791c0c80a","type":"Grid"},{"id":"2acdf010-5983-455e-b5b4-a0028b6a65a1","type":"LinearAxis"},{"id":"b459f441-576d-4dea-a309-22307f4cafce","type":"Grid"},{"id":"9cf6d129-5ac7-44a4-9fad-20db9c9b6996","type":"BoxAnnotation"},{"id":"15758710-21af-4924-a93a-bc905a431910","type":"GlyphRenderer"}],"title":{"id":"bca85d1c-f119-4a93-a523-5b02c17442d9","type":"Title"},"toolbar":{"id":"e91a0a48-5c1d-495b-880a-e11639ac026f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f1680da3-1e67-4fbe-8b55-c10e3a0d138a","type":"DataRange1d"},"x_scale":{"id":"fb62d91c-b79d-46af-8b18-4039a19ac7cc","type":"LinearScale"},"y_range":{"id":"178a8272-81e1-4507-aaf7-80296ea13faa","type":"DataRange1d"},"y_scale":{"id":"34ae363e-883a-4ed1-8acc-290ba65a4628","type":"LinearScale"}},"id":"f637a288-cdaa-4a46-913d-1dfdce694382","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"38c80154-84eb-4cb7-bf15-00a1d9f5887a","type":"BasicTickFormatter"},"plot":{"id":"b74bdc73-b81b-4959-a501-01057b62da5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"957d0bef-d28e-4a7f-b566-e21c776993b1","type":"BasicTicker"}},"id":"8cce0c6e-b35b-426d-9855-03ddf50408b2","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"961abdfa-56e5-4442-b33d-7a785da0f638","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"202e2b6a-205d-4ca0-9d44-f490cf74ca9e","type":"PanTool"},{"id":"22256768-87f5-4b02-8e52-f016990ab00a","type":"WheelZoomTool"},{"id":"49c27561-0ccf-4bce-a91a-fe413a3413db","type":"BoxZoomTool"},{"id":"3003be48-db2e-4319-927a-f6807742407b","type":"SaveTool"},{"id":"5d527aa3-5cad-4296-9eb4-6112f5ad6296","type":"ResetTool"},{"id":"0a3acf31-b37f-466c-ac06-8ab2ef4c00dc","type":"HelpTool"}]},"id":"e91a0a48-5c1d-495b-880a-e11639ac026f","type":"Toolbar"},{"attributes":{"formatter":{"id":"16364771-9b6a-4ab5-98c6-1d819cf5dec4","type":"BasicTickFormatter"},"plot":{"id":"f637a288-cdaa-4a46-913d-1dfdce694382","subtype":"Figure","type":"Plot"},"ticker":{"id":"778938d0-c40c-4593-abc7-024bd7458879","type":"BasicTicker"}},"id":"2acdf010-5983-455e-b5b4-a0028b6a65a1","type":"LinearAxis"},{"attributes":{},"id":"fb62d91c-b79d-46af-8b18-4039a19ac7cc","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a3f6a73-291a-4834-b3db-27f1c0d72aea","type":"Circle"},{"attributes":{"plot":{"id":"f637a288-cdaa-4a46-913d-1dfdce694382","subtype":"Figure","type":"Plot"},"ticker":{"id":"8f56f24f-ed40-4bd2-924b-8a4627c160f1","type":"BasicTicker"}},"id":"538955bc-a262-4507-9182-4ca791c0c80a","type":"Grid"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c847300-14ad-48c7-9df3-51a2909f5eff","type":"Triangle"},{"attributes":{},"id":"34ae363e-883a-4ed1-8acc-290ba65a4628","type":"LinearScale"},{"attributes":{"overlay":{"id":"961abdfa-56e5-4442-b33d-7a785da0f638","type":"BoxAnnotation"}},"id":"dfbb7be7-a222-41ec-9aa7-a06f88a10814","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"82490ea7-dff2-42f8-9d52-5ef4420dc0b1","type":"Title"},{"attributes":{},"id":"9bee40d9-b1bd-4c65-88ce-0368a9278b11","type":"LinearScale"},{"attributes":{"callback":null},"id":"f1680da3-1e67-4fbe-8b55-c10e3a0d138a","type":"DataRange1d"},{"attributes":{"plot":{"id":"b74bdc73-b81b-4959-a501-01057b62da5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f722973-71b6-43dc-a415-059d46a70189","type":"BasicTicker"}},"id":"38b1e89d-7aeb-43b7-89a4-1e9fbdba245d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"732c6201-5cf5-4a9c-b57f-61759ca5e309","type":"Triangle"},{"attributes":{},"id":"778938d0-c40c-4593-abc7-024bd7458879","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b6fbf6a-ed47-4a88-b5df-11689d407275","type":"Circle"},{"attributes":{},"id":"7ad006db-fba1-482c-86af-35ca28dfe7ea","type":"ResetTool"},{"attributes":{},"id":"889323ac-3702-414e-a7ef-879f1dfd00f6","type":"SaveTool"},{"attributes":{},"id":"38c80154-84eb-4cb7-bf15-00a1d9f5887a","type":"BasicTickFormatter"},{"attributes":{},"id":"957d0bef-d28e-4a7f-b566-e21c776993b1","type":"BasicTicker"},{"attributes":{},"id":"959801bc-6bf4-4bbb-89b2-ee434f059086","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"f637a288-cdaa-4a46-913d-1dfdce694382","subtype":"Figure","type":"Plot"},"ticker":{"id":"778938d0-c40c-4593-abc7-024bd7458879","type":"BasicTicker"}},"id":"b459f441-576d-4dea-a309-22307f4cafce","type":"Grid"},{"attributes":{"data_source":{"id":"c8ad99df-3900-4fe1-b22b-8f2363811d5d","type":"ColumnDataSource"},"glyph":{"id":"c5951715-ce03-4f15-8ab9-f59a79e31df6","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c06fc423-e12d-4518-88ea-7e5b68b43b84","type":"Square"},"selection_glyph":null,"view":{"id":"7c9b29b6-6b47-4f95-8f44-afc3508ed2b6","type":"CDSView"}},"id":"5a7b8ac1-66b4-429d-a552-7727a83e2710","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"32b524d9-c53c-4d48-ae25-81b95338a805","type":"ToolbarBox"},{"id":"a475bdc1-1adf-46c1-98aa-43ec8624fcc9","type":"Column"}]},"id":"7e0ef30d-95ff-4dfc-82ce-fac956b2dcef","type":"Column"},{"attributes":{},"id":"a5a7eac9-21e3-4178-a3c6-adef89ae37c6","type":"HelpTool"},{"attributes":{"below":[{"id":"d454382d-e402-4499-bcfb-d8331a46d5a8","type":"LinearAxis"}],"left":[{"id":"8cce0c6e-b35b-426d-9855-03ddf50408b2","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d454382d-e402-4499-bcfb-d8331a46d5a8","type":"LinearAxis"},{"id":"38b1e89d-7aeb-43b7-89a4-1e9fbdba245d","type":"Grid"},{"id":"8cce0c6e-b35b-426d-9855-03ddf50408b2","type":"LinearAxis"},{"id":"c1886241-11ee-45a8-a1af-62689d12afdb","type":"Grid"},{"id":"58da7487-98c9-425c-9342-818b74cceb91","type":"BoxAnnotation"},{"id":"b814961c-9a26-444f-ae08-8653cd4bbd88","type":"GlyphRenderer"}],"title":{"id":"82490ea7-dff2-42f8-9d52-5ef4420dc0b1","type":"Title"},"toolbar":{"id":"81a42659-92e4-418f-af2c-a064f923c1fa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26921c74-43fc-4351-ba04-7213e8398555","type":"DataRange1d"},"x_scale":{"id":"9bee40d9-b1bd-4c65-88ce-0368a9278b11","type":"LinearScale"},"y_range":{"id":"2d49fc01-16ce-489c-8e63-8b2bc4fbb127","type":"DataRange1d"},"y_scale":{"id":"1953edd7-c5a8-4d02-98fd-b102bcca2483","type":"LinearScale"}},"id":"b74bdc73-b81b-4959-a501-01057b62da5d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21898504-14df-4d03-9a0a-13070c4a6587","type":"PanTool"},{"attributes":{},"id":"07153d0e-69ac-4f37-a892-416d614e95d9","type":"ResetTool"},{"attributes":{},"id":"b0661302-80aa-410d-a170-888bdb8b66aa","type":"WheelZoomTool"},{"attributes":{},"id":"12766ecc-f9b2-4496-8767-2f7635fbac49","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"f22a62de-8564-467f-b377-2fbf9409b58f","type":"ColumnDataSource"},"glyph":{"id":"5b6fbf6a-ed47-4a88-b5df-11689d407275","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1a3f6a73-291a-4834-b3db-27f1c0d72aea","type":"Circle"},"selection_glyph":null,"view":{"id":"008877a7-aa76-4e0a-bdfc-4804ba6b527e","type":"CDSView"}},"id":"b814961c-9a26-444f-ae08-8653cd4bbd88","type":"GlyphRenderer"},{"attributes":{},"id":"059a26d7-da5a-4021-9c4d-5195c0395bb3","type":"HelpTool"},{"attributes":{"callback":null},"id":"2d49fc01-16ce-489c-8e63-8b2bc4fbb127","type":"DataRange1d"},{"attributes":{},"id":"0f722973-71b6-43dc-a415-059d46a70189","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b74bdc73-b81b-4959-a501-01057b62da5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"957d0bef-d28e-4a7f-b566-e21c776993b1","type":"BasicTicker"}},"id":"c1886241-11ee-45a8-a1af-62689d12afdb","type":"Grid"},{"attributes":{},"id":"1953edd7-c5a8-4d02-98fd-b102bcca2483","type":"LinearScale"},{"attributes":{"children":[{"id":"24df4f56-6a1b-4ed7-8f94-2b444064cd30","subtype":"Figure","type":"Plot"}]},"id":"60f11875-8a89-48b9-bde2-172254d817a5","type":"Row"},{"attributes":{"formatter":{"id":"7553323f-7205-47fd-a8f2-8ddefa229f1c","type":"BasicTickFormatter"},"plot":{"id":"b74bdc73-b81b-4959-a501-01057b62da5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f722973-71b6-43dc-a415-059d46a70189","type":"BasicTicker"}},"id":"d454382d-e402-4499-bcfb-d8331a46d5a8","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"08886d57-77e0-44de-baa7-cb1b7e4ec046","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"32b524d9-c53c-4d48-ae25-81b95338a805","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"21898504-14df-4d03-9a0a-13070c4a6587","type":"PanTool"},{"id":"12766ecc-f9b2-4496-8767-2f7635fbac49","type":"WheelZoomTool"},{"id":"61df22e5-1fb1-469b-a929-f2f175a56c61","type":"BoxZoomTool"},{"id":"889323ac-3702-414e-a7ef-879f1dfd00f6","type":"SaveTool"},{"id":"7ad006db-fba1-482c-86af-35ca28dfe7ea","type":"ResetTool"},{"id":"a5a7eac9-21e3-4178-a3c6-adef89ae37c6","type":"HelpTool"}]},"id":"81a42659-92e4-418f-af2c-a064f923c1fa","type":"Toolbar"},{"attributes":{"source":{"id":"f22a62de-8564-467f-b377-2fbf9409b58f","type":"ColumnDataSource"}},"id":"008877a7-aa76-4e0a-bdfc-4804ba6b527e","type":"CDSView"},{"attributes":{},"id":"cf34cb41-f63c-479b-9dcd-617237d16193","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"fd50e0d0-dc51-491e-a8bf-6b04c2bf87f0","type":"Row"},{"id":"60f11875-8a89-48b9-bde2-172254d817a5","type":"Row"}]},"id":"a475bdc1-1adf-46c1-98aa-43ec8624fcc9","type":"Column"}],"root_ids":["7e0ef30d-95ff-4dfc-82ce-fac956b2dcef"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"9e691ec0-4a09-4621-b429-4046b725cd05","elementid":"443c668a-cf60-41aa-bf02-459f1ff787fb","modelid":"7e0ef30d-95ff-4dfc-82ce-fac956b2dcef"}];
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