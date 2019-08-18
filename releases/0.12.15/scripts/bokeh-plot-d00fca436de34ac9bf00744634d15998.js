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
      };var element = document.getElementById("b9fc5a89-3499-4366-95cb-a44bd67096d3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9fc5a89-3499-4366-95cb-a44bd67096d3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e2f3cacf-91f3-4609-80c3-7e07dfbe5934":{"roots":{"references":[{"attributes":{"source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"}},"id":"2fd9e6f1-f245-4003-9b75-8cfd971f0a48","type":"CDSView"},{"attributes":{"items":[{"id":"11cd9772-fc02-4892-9f47-d3707824b757","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"d4c52f7b-a649-4e60-b6ce-90da9b1ce899","subtype":"Figure","type":"Plot"}},"id":"8911ab7d-185d-47cf-a776-c74c27d94b0d","type":"Legend"},{"attributes":{"text":{"field":"atomic number"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"group","transform":{"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"}},"y":{"field":"period","transform":{"id":"17900188-b3db-4ff8-b3d4-36828f5bda70","type":"Dodge"}}},"id":"d953eaba-a8bb-417f-8022-cbc7a4128f58","type":"Text"},{"attributes":{"callback":null,"tooltips":[["Name","@name"],["Atomic number","@{atomic number}"],["Atomic mass","@{atomic mass}"],["Type","@metal"],["CPK color","$color[hex, swatch]:CPK"],["Electronic configuration","@{electronic configuration}"]]},"id":"b30220a5-86c9-49e5-8d81-972a237707a6","type":"HoverTool"},{"attributes":{"text":{"field":"atomic mass"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"5pt"},"x":{"field":"group","transform":{"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"}},"y":{"field":"period","transform":{"id":"ce51e01f-89cf-4c9a-b2fc-d98cb3592768","type":"Dodge"}}},"id":"5411f17a-01db-41cb-bc45-7cfb932652b9","type":"Text"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f859d4f5-ad41-4d6d-b9be-e3ab26cb8f6f","type":"CategoricalTickFormatter"},"major_label_standoff":0,"major_tick_line_color":{"value":null},"plot":{"id":"d4c52f7b-a649-4e60-b6ce-90da9b1ce899","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb59e214-db42-426b-9b13-2fb526fac3b1","type":"CategoricalTicker"}},"id":"7d80bcdb-ba2e-4dfb-9b12-d3749e7fa36a","type":"CategoricalAxis"},{"attributes":{"text":{"field":"atomic number"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"field":"group","transform":{"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"}},"y":{"field":"period","transform":{"id":"17900188-b3db-4ff8-b3d4-36828f5bda70","type":"Dodge"}}},"id":"c0da0f41-a6af-4f5c-9343-619270624799","type":"Text"},{"attributes":{"text":{"field":"name"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"5pt"},"x":{"field":"group","transform":{"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"}},"y":{"field":"period","transform":{"id":"242209dc-ec57-402f-95df-f77fa79c9908","type":"Dodge"}}},"id":"1049d120-1f77-40e8-a5a9-a93bcb949143","type":"Text"},{"attributes":{"range":{"id":"ef192160-7cfd-4170-886f-fa08362310a5","type":"FactorRange"},"value":-0.2},"id":"ce51e01f-89cf-4c9a-b2fc-d98cb3592768","type":"Dodge"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.95},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.95},"x":{"field":"group"},"y":{"field":"period"}},"id":"e9649868-9b4a-4e26-a16b-cbe432715b04","type":"Rect"},{"attributes":{"source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"}},"id":"a131b0dc-ecf1-4469-82ed-2e760bfb8582","type":"CDSView"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"90c4a213-216a-4142-8b47-ad6bdacabab8","type":"CategoricalTickFormatter"},"major_label_standoff":0,"major_tick_line_color":{"value":null},"plot":{"id":"d4c52f7b-a649-4e60-b6ce-90da9b1ce899","subtype":"Figure","type":"Plot"},"ticker":{"id":"870806d0-6c68-4f0a-ad6c-53a4bfa40db7","type":"CategoricalTicker"}},"id":"20787f6d-14f8-49cf-a5d7-504fd22f6dc5","type":"CategoricalAxis"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1353976-4e41-4538-acf3-328eaba6580c","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b30220a5-86c9-49e5-8d81-972a237707a6","type":"HoverTool"}]},"id":"cd8444e8-591c-4cd0-8a23-18aae5225e2c","type":"Toolbar"},{"attributes":{"data_source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"},"glyph":{"id":"62d13a46-ed57-4fe5-ac99-859d07fbdfa8","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e9649868-9b4a-4e26-a16b-cbe432715b04","type":"Rect"},"selection_glyph":null,"view":{"id":"2fd9e6f1-f245-4003-9b75-8cfd971f0a48","type":"CDSView"}},"id":"395e126c-8bec-433e-97b7-d3b5fd33d657","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"},"glyph":{"id":"5411f17a-01db-41cb-bc45-7cfb932652b9","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d16a8696-668d-44f1-b53a-d8075a97f9c6","type":"Text"},"selection_glyph":null,"view":{"id":"b2d3f104-0fda-4346-b629-590b6c6b9619","type":"CDSView"}},"id":"1625a404-4dfa-4544-b6c6-8d2a77741478","type":"GlyphRenderer"},{"attributes":{},"id":"847701b1-7f11-46a7-b8a2-b4449052f2c7","type":"CategoricalScale"},{"attributes":{},"id":"d7ad81e1-e922-4fda-a7d3-8809b92c235d","type":"CategoricalScale"},{"attributes":{"label":{"field":"metal"},"renderers":[{"id":"395e126c-8bec-433e-97b7-d3b5fd33d657","type":"GlyphRenderer"}]},"id":"11cd9772-fc02-4892-9f47-d3707824b757","type":"LegendItem"},{"attributes":{"callback":null,"factors":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"]},"id":"3cad0fdd-eb5d-4383-a1c8-33d9162604a6","type":"FactorRange"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"d4c52f7b-a649-4e60-b6ce-90da9b1ce899","subtype":"Figure","type":"Plot"},"ticker":{"id":"870806d0-6c68-4f0a-ad6c-53a4bfa40db7","type":"CategoricalTicker"}},"id":"9912bb1f-635f-44b6-af64-dcde57742a0a","type":"Grid"},{"attributes":{},"id":"eb59e214-db42-426b-9b13-2fb526fac3b1","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"},"glyph":{"id":"e26cdd46-fde6-4f66-a418-8c75a3a5f983","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57a006a6-86b3-4191-ba0a-c9a7766de0f1","type":"Text"},"selection_glyph":null,"view":{"id":"e217a631-b550-4da2-af3e-c53864c7133f","type":"CDSView"}},"id":"7e8bf45f-172f-4b28-afd0-b9f18589535e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["atomic number","symbol","name","atomic mass","CPK","electronic configuration","electronegativity","atomic radius","ion radius","van der Waals radius","IE-1","EA","standard state","bonding type","melting point","boiling point","density","metal","year discovered","group","period","index"],"data":{"CPK":["#FFFFFF","#D9FFFF","#CC80FF","#C2FF00","#FFB5B5","#909090","#3050F8","#FF0D0D","#90E050","#B3E3F5","#AB5CF2","#8AFF00","#BFA6A6","#F0C8A0","#FF8000","#FFFF30","#1FF01F","#80D1E3","#8F40D4","#3DFF00","#E6E6E6","#BFC2C7","#A6A6AB","#8A99C7","#9C7AC7","#E06633","#F090A0","#50D050","#C88033","#7D80B0","#C28F8F","#668F8F","#BD80E3","#FFA100","#A62929","#5CB8D1","#702EB0","#00FF00","#94FFFF","#94E0E0","#73C2C9","#54B5B5","#3B9E9E","#248F8F","#0A7D8C","#006985","#C0C0C0","#FFD98F","#A67573","#668080","#9E63B5","#D47A00","#940094","#429EB0","#57178F","#00C900","#4DC2FF","#4DA6FF","#2194D6","#267DAB","#266696","#175487","#D0D0E0","#FFD123","#B8B8D0","#A6544D","#575961","#9E4FB5","#AB5C00","#754F45","#428296","#420066","#007D00","#CC0059","#D1004F","#D90045","#E00038","#E6002E","#EB0026","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493","#FF1493"],"EA":{"__ndarray__":"AAAAAABAUsAAAAAAAAAAAAAAAAAAAE7AAAAAAAAAAAAAAAAAAAA7wAAAAAAAQGPAAAAAAAAAHMAAAAAAAKBhwAAAAAAAgHTAAAAAAAAAAAAAAAAAAIBKwAAAAAAAAAAAAAAAAACARcAAAAAAAMBgwAAAAAAAAFLAAAAAAAAAacAAAAAAANB1wAAAAAAAAAAAAAAAAAAASMAAAAAAAAAAwAAAAAAAADLAAAAAAAAAIMAAAAAAAIBJwAAAAAAAAFDAAAAAAAAAAAAAAAAAAAAwwAAAAAAAAFDAAAAAAAAAXMAAAAAAAIBdwAAAAAAAAAAAAAAAAAAAPcAAAAAAAMBdwAAAAAAAgFPAAAAAAABgaMAAAAAAAFB0wAAAAAAAAAAAAAAAAACAR8AAAAAAAAAUwAAAAAAAAD7AAAAAAACARMAAAAAAAIBVwAAAAAAAAFLAAAAAAACASsAAAAAAAEBZwAAAAAAAgFvAAAAAAAAAS8AAAAAAAIBfwAAAAAAAAAAAAAAAAAAAPcAAAAAAAMBawAAAAAAAwFnAAAAAAADAZ8AAAAAAAHBywAAAAAAAAAAAAAAAAAAAR8AAAAAAAAAswAAAAAAAAAAAAAAAAAAAP8AAAAAAAMBTwAAAAAAAAC7AAAAAAACAWsAAAAAAAOBiwAAAAAAAoGnAAAAAAADga8AAAAAAAAAAAAAAAAAAADPAAAAAAACAQcAAAAAAAMBWwAAAAAAA4GbAAAAAAADgcMAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"IE-1":{"__ndarray__":"AAAAAACAlEAAAAAAAIiiQAAAAAAAQIBAAAAAAAAgjEAAAAAAAAiJQAAAAAAA/JBAAAAAAADolUAAAAAAAIiUQAAAAAAARJpAAAAAAABCoEAAAAAAAAB/QAAAAAAAEIdAAAAAAAAQgkAAAAAAAJiIQAAAAAAAoI9AAAAAAABAj0AAAAAAAIyTQAAAAAAAxJdAAAAAAAAwekAAAAAAAHCCQAAAAAAAyINAAAAAAACYhEAAAAAAAFiEQAAAAAAAaIRAAAAAAABohkAAAAAAANiHQAAAAAAAwIdAAAAAAAAIh0AAAAAAAFCHQAAAAAAAUIxAAAAAAAAYgkAAAAAAANCHQAAAAAAAmI1AAAAAAABojUAAAAAAANCRQAAAAAAAHJVAAAAAAAAweUAAAAAAADCBQAAAAAAAwIJAAAAAAAAAhEAAAAAAAGCEQAAAAAAAYIVAAAAAAADwhUAAAAAAADCGQAAAAAAAgIZAAAAAAAAgiUAAAAAAANiGQAAAAAAAIItAAAAAAABwgUAAAAAAACiGQAAAAAAAEIpAAAAAAAAoi0AAAAAAAICPQAAAAAAASJJAAAAAAACAd0AAAAAAAHB/QAAAAAAAmIRAAAAAAADIh0AAAAAAABCIQAAAAAAAwIdAAAAAAABAikAAAAAAAICLQAAAAAAAMItAAAAAAADQi0AAAAAAAHiPQAAAAAAAaIJAAAAAAABghkAAAAAAAPiFQAAAAAAAYIlAAAAAAADAjEAAAAAAADSQQAAAAAAAwHdAAAAAAADQf0AAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"atomic mass":["1.00794","4.002602","6.941","9.012182","10.811","12.0107","14.0067","15.9994","18.9984032","20.1797","22.98976928","24.3050","26.9815386","28.0855","30.973762","32.065","35.453","39.948","39.0983","40.078","44.955912","47.867","50.9415","51.9961","54.938045","55.845","58.933195","58.6934","63.546","65.38","69.723","72.64","74.92160","78.96","79.904","83.798","85.4678","87.62","88.90585","91.224","92.90638","95.96","[98]","101.07","102.90550","106.42","107.8682","112.411","114.818","118.710","121.760","127.60","126.90447","131.293","132.9054519","137.327","178.49","180.94788","183.84","186.207","190.23","192.217","195.084","196.966569","200.59","204.3833","207.2","208.98040","[209]","[210]","[222]","[223]","[226]","[267]","[268]","[271]","[272]","[270]","[276]","[281]","[280]","[285]","[284]","[289]","[288]","[293]","[294]","[294]"],"atomic number":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"atomic radius":{"__ndarray__":"AAAAAACAQkAAAAAAAABAQAAAAAAAwGBAAAAAAACAVkAAAAAAAIBUQAAAAAAAQFNAAAAAAADAUkAAAAAAAEBSQAAAAAAAwFFAAAAAAABAUUAAAAAAAEBjQAAAAAAAQGBAAAAAAACAXUAAAAAAAMBbQAAAAAAAgFpAAAAAAACAWUAAAAAAAMBYQAAAAAAAQFhAAAAAAACAaEAAAAAAAMBlQAAAAAAAAGJAAAAAAAAAYUAAAAAAAEBfQAAAAAAAwF9AAAAAAABgYUAAAAAAAEBfQAAAAAAAgF9AAAAAAABAXkAAAAAAAEBhQAAAAAAAYGBAAAAAAACAX0AAAAAAAIBeQAAAAAAAwF1AAAAAAAAAXUAAAAAAAIBcQAAAAAAAgFtAAAAAAABgakAAAAAAAABoQAAAAAAAQGRAAAAAAACAYkAAAAAAACBhQAAAAAAAIGJAAAAAAACAY0AAAAAAAIBfQAAAAAAA4GBAAAAAAABgYEAAAAAAACBjQAAAAAAAgGJAAAAAAAAAYkAAAAAAAKBhQAAAAAAAQGFAAAAAAADgYEAAAAAAAKBgQAAAAAAAQGBAAAAAAAAgbEAAAAAAAMBoQAAAAAAAwGJAAAAAAABAYUAAAAAAAEBiQAAAAAAA4GNAAAAAAAAAYEAAAAAAACBhQAAAAAAAAGBAAAAAAAAAYkAAAAAAAKBiQAAAAAAAgGJAAAAAAABgYkAAAAAAAEBiQAAAAAAAAPh/AAAAAAAA+H8AAAAAACBiQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"boiling point":{"__ndarray__":"AAAAAAAANEAAAAAAAAAQQAAAAAAAPJlAAAAAAABupUAAAAAAALGwQAAAAAAAzLBAAAAAAABAU0AAAAAAAIBWQAAAAAAAQFVAAAAAAAAAO0AAAAAAABCSQAAAAAAATJVAAAAAAADQpUAAAAAAAMqoQAAAAAAAUIFAAAAAAABwhkAAAAAAAOBtQAAAAAAAwFVAAAAAAAAgkEAAAAAAAHSbQAAAAAAAPqhAAAAAAADQq0AAAAAAAMCsQAAAAAAAAKdAAAAAAAA8okAAAAAAAHyoQAAAAAAAAKlAAAAAAADkqEAAAAAAAACpQAAAAAAAcJJAAAAAAABao0AAAAAAACqoQAAAAAAAuItAAAAAAADwjUAAAAAAAMB0QAAAAAAAAF5AAAAAAAAIjkAAAAAAANyZQAAAAAAARKxAAAAAAABKskAAAAAAAJmzQAAAAAAAMLNAAAAAAAC6sUAAAAAAAEexQAAAAAAAAK9AAAAAAABIqUAAAAAAAAajQAAAAAAAQJBAAAAAAABSokAAAAAAAHamQAAAAAAAEJ1AAAAAAAC0k0AAAAAAAJB8QAAAAAAAoGRAAAAAAACAjUAAAAAAAL6gQAAAAAAADLNAAAAAAABjtkAAAAAAAMS2QAAAAAAA7bZAAAAAAACltEAAAAAAAF2yQAAAAAAAArBAAAAAAAByqEAAAAAAALCDQAAAAAAASJtAAAAAAACYn0AAAAAAALScQAAAAAAATJNAAAAAAAAA+H8AAAAAAGBqQAAAAAAAAPh/AAAAAABon0AAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"bonding type":["diatomic","atomic","metallic","metallic","covalent network","covalent network","diatomic","diatomic","atomic","atomic","metallic","metallic","metallic","metallic","covalent network","covalent network","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","metallic","covalent network","atomic","metallic","metallic","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"density":{"__ndarray__":"4yZZPRaRFz8AAAAAAAAAAEjhehSuR+E/mpmZmZmZ/T+uR+F6FK4DQBSuR+F6FAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK16NwPQrvP9ejcD0K1/s/mpmZmZmZBUCkcD0K16MCQB+F61G4Hv0/XI/C9Shc/z8AAAAAAAAAAAAAAAAAAAAAhetRuB6F6z/NzMzMzMz4P+xRuB6F6wdACtejcD0KEkBxPQrXo3AYQI/C9ShcjxxA4XoUrkfhHUB7FK5H4XofQM3MzMzMzCFAUrgehevRIUDXo3A9CtchQI/C9ShcjxxAmpmZmZmZF0BI4XoUrkcVQOxRuB6F6xZASOF6FK5HE0D2KFyPwvUIQAAAAAAAAAAAexSuR+F6+D8K16NwPQoFQOF6FK5H4RFACtejcD0KGkCkcD0K1yMhQI/C9ShcjyRAAAAAAAAAJ0A9CtejcL0oQGZmZmZm5ihACtejcD0KKEB7FK5H4fokQM3MzMzMTCFAPQrXo3A9HUA9CtejcD0dQM3MzMzMzBpA9ihcj8L1GEDD9Shcj8ITQHsUrkfheoQ/FK5H4XoU/j8UrkfhehQMQB+F61G4nipAZmZmZmamMEAAAAAAAEAzQIXrUbgeBTVA16NwPQqXNkCPwvUoXI82QNejcD0KFzVAzczMzMxMM0CPwvUoXA8rQDMzMzMzsydArkfhehSuJkCPwvUoXI8jQGZmZmZmZiJAAAAAAAAA+H97FK5H4XqEPwAAAAAAAPh/AAAAAAAAFEAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"electronegativity":{"__ndarray__":"mpmZmZmZAUAAAAAAAAD4f1yPwvUoXO8/H4XrUbge+T9SuB6F61EAQGZmZmZmZgRAUrgehetRCECF61G4HoULQNejcD0K1w9AAAAAAAAA+H/D9Shcj8LtP/YoXI/C9fQ/w/UoXI/C+T9mZmZmZmb+P4XrUbgehQFApHA9CtejBEBI4XoUrkcJQAAAAAAAAPh/PQrXo3A96j8AAAAAAADwP8P1KFyPwvU/pHA9Ctej+D8UrkfhehT6P4/C9Shcj/o/zczMzMzM+D9I4XoUrkf9PxSuR+F6FP4/j8L1KFyP/j9mZmZmZmb+P2ZmZmZmZvo/9ihcj8L1/D8UrkfhehQAQHE9CtejcAFAZmZmZmZmBECuR+F6FK4HQAAAAAAAAPh/PQrXo3A96j9mZmZmZmbuP4XrUbgehfM/SOF6FK5H9T+amZmZmZn5P0jhehSuRwFAZmZmZmZm/j+amZmZmZkBQD0K16NwPQJAmpmZmZmZAUDhehSuR+H+PwrXo3A9Cvs/exSuR+F6/D9cj8L1KFz/P2ZmZmZmZgBAzczMzMzMAEBI4XoUrkcFQAAAAAAAAPh/SOF6FK5H6T97FK5H4XrsP83MzMzMzPQ/AAAAAAAA+D/hehSuR+ECQGZmZmZmZv4/mpmZmZmZAUCamZmZmZkBQD0K16NwPQJAUrgehetRBEAAAAAAAAAAQFK4HoXrUQBApHA9CtejAkApXI/C9SgAQAAAAAAAAABAmpmZmZmZAUAAAAAAAAD4f2ZmZmZmZuY/zczMzMzM7D8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"electronic configuration":["1s1","1s2","[He] 2s1","[He] 2s2","[He] 2s2 2p1","[He] 2s2 2p2","[He] 2s2 2p3","[He] 2s2 2p4","[He] 2s2 2p5","[He] 2s2 2p6","[Ne] 3s1","[Ne] 3s2","[Ne] 3s2 3p1","[Ne] 3s2 3p2","[Ne] 3s2 3p3","[Ne] 3s2 3p4","[Ne] 3s2 3p5","[Ne] 3s2 3p6","[Ar] 4s1","[Ar] 4s2","[Ar] 3d1 4s2","[Ar] 3d2 4s2","[Ar] 3d3 4s2","[Ar] 3d5 4s1","[Ar] 3d5 4s2","[Ar] 3d6 4s2","[Ar] 3d7 4s2","[Ar] 3d8 4s2","[Ar] 3d10 4s1","[Ar] 3d10 4s2","[Ar] 3d10 4s2 4p1","[Ar] 3d10 4s2 4p2","[Ar] 3d10 4s2 4p3","[Ar] 3d10 4s2 4p4","[Ar] 3d10 4s2 4p5","[Ar] 3d10 4s2 4p6","[Kr] 5s1","[Kr] 5s2","[Kr] 4d1 5s2","[Kr] 4d2 5s2","[Kr] 4d4 5s1","[Kr] 4d5 5s1","[Kr] 4d5 5s2","[Kr] 4d7 5s1","[Kr] 4d8 5s1","[Kr] 4d10","[Kr] 4d10 5s1","[Kr] 4d10 5s2","[Kr] 4d10 5s2 5p1","[Kr] 4d10 5s2 5p2","[Kr] 4d10 5s2 5p3","[Kr] 4d10 5s2 5p4","[Kr] 4d10 5s2 5p5","[Kr] 4d10 5s2 5p6","[Xe] 6s1","[Xe] 6s2","[Xe] 4f14 5d2 6s2","[Xe] 4f14 5d3 6s2","[Xe] 4f14 5d4 6s2","[Xe] 4f14 5d5 6s2","[Xe] 4f14 5d6 6s2","[Xe] 4f14 5d7 6s2","[Xe] 4f14 5d9 6s1","[Xe] 4f14 5d10 6s1","[Xe] 4f14 5d10 6s2","[Xe] 4f14 5d10 6s2 6p1","[Xe] 4f14 5d10 6s2 6p2","[Xe] 4f14 5d10 6s2 6p3","[Xe] 4f14 5d10 6s2 6p4","[Xe] 4f14 5d10 6s2 6p5","[Xe] 4f14 5d10 6s2 6p6","[Rn] 7s1","[Rn] 7s2","[Rn] 5f14 6d2 7s2","[Rn].5f14.6d3.7s2","[Rn].5f14.6d4.7s2","[Rn].5f14.6d5.7s2","[Rn].5f14.6d6.7s2","[Rn].5f14.6d7.7s2","[Rn].5f14.6d9.7s1","[Rn].5f14.6d10.7s1","[Rn].5f14.6d10.7s2","[Rn].5f14.6d10.7s2.7p1","[Rn].5f14.6d10.7s2.7p2","[Rn].5f14.6d10.7s2.7p3","[Rn].5f14.6d10.7s2.7p4","[Rn].5f14.6d10.7s2.7p5","[Rn].5f14.6d10.7s2.7p6"],"group":["1","18","1","2","13","14","15","16","17","18","1","2","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","1","2","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117],"ion radius":["NaN","NaN","76 (+1)","45 (+2)","27 (+3)","16 (+4)","146 (-3)","140 (-2)","133 (-1)","NaN","102 (+1)","72 (+2)","53.5 (+3)","40 (+4)","44 (+3)","184 (-2)","181 (-1)","NaN","138 (+1)","100 (+2)","74.5 (+3)","86 (+2)","79 (+2)","80 (+2*)","67 (+2)","78 (+2*)","74.5 (+2*)","69 (+2)","77 (+1)","74 (+2)","62 (+3)","73 (+2)","58 (+3)","198 (-2)","196 (-1)","NaN","152 (+1)","118 (+2)","90 (+3)","72 (+4)","72 (+3)","69 (+3)","64.5 (+4)","68 (+3)","66.5 (+3)","59 (+1)","115 (+1)","95 (+2)","80 (+3)","112 (+2)","76 (+3)","221 (-2)","220 (-1)","48 (+8)","167 (+1)","135 (+2)","71 (+4)","72 (+3)","66 (+4)","63 (+4)","63 (+4)","68 (+3)","86 (+2)","137 (+1)","119 (+1)","150 (+1)","119 (+2)","103 (+3)","94 (+4)","62 (+7)","NaN","180 (+1)","148 (+2)","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"melting point":{"__ndarray__":"AAAAAAAALEAAAAAAAAD4fwAAAAAAYHxAAAAAAABgmEAAAAAAAFiiQAAAAAAA3q1AAAAAAACAT0AAAAAAAIBLQAAAAAAAAEtAAAAAAAAAOUAAAAAAADB3QAAAAAAA2IxAAAAAAAAojUAAAAAAAFyaQAAAAAAA0HNAAAAAAABAeEAAAAAAAIBlQAAAAAAAAFVAAAAAAAAQdUAAAAAAAGyRQAAAAAAAWJxAAAAAAABUnkAAAAAAAA6hQAAAAAAACKFAAAAAAAC8l0AAAAAAAEycQAAAAAAAoJtAAAAAAAAAm0AAAAAAADiVQAAAAAAAqIVAAAAAAADwckAAAAAAAOySQAAAAAAACJFAAAAAAADgfkAAAAAAAKBwQAAAAAAAAF1AAAAAAACAc0AAAAAAAGiQQAAAAAAAHJxAAAAAAACgoEAAAAAAAHylQAAAAAAAoKZAAAAAAAD8okAAAAAAAF6kQAAAAAAAeqFAAAAAAACQnEAAAAAAAEyTQAAAAAAAkIJAAAAAAADgekAAAAAAAJB/QAAAAAAAQIxAAAAAAACYhkAAAAAAADB4QAAAAAAAIGRAAAAAAADgckAAAAAAAECPQAAAAAAAlKNAAAAAAAC0qUAAAAAAAN6sQAAAAAAABqtAAAAAAADUqUAAAAAAAGalQAAAAAAA5J9AAAAAAADklEAAAAAAAEBtQAAAAAAACIJAAAAAAADIgkAAAAAAAACBQAAAAAAAeIBAAAAAAAD4gUAAAAAAAEBpQAAAAAAAAPh/AAAAAABojkAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"metal":["nonmetal","noble gas","alkali metal","alkaline earth metal","metalloid","nonmetal","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","metal","metalloid","nonmetal","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metalloid","metalloid","nonmetal","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metalloid","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metal","metalloid","halogen","noble gas","alkali metal","alkaline earth metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","transition metal","metal","metal","metal","metal","halogen","noble gas"],"name":["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihomium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"],"period":["I","I","II","II","II","II","II","II","II","II","III","III","III","III","III","III","III","III","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","IV","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","V","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VI","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII","VII"],"standard state":["gas","gas","solid","solid","solid","solid","gas","gas","gas","gas","solid","solid","solid","solid","solid","solid","gas","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","gas","solid","solid","solid","solid","solid","solid","solid","solid","solid","solid","liquid","solid","solid","solid","solid","solid","gas","solid","solid","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN","NaN"],"symbol":["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"],"van der Waals radius":{"__ndarray__":"AAAAAAAAXkAAAAAAAIBhQAAAAAAAwGZAAAAAAAAA+H8AAAAAAAD4fwAAAAAAQGVAAAAAAABgY0AAAAAAAABjQAAAAAAAYGJAAAAAAABAY0AAAAAAAGBsQAAAAAAAoGVAAAAAAAAA+H8AAAAAAEBqQAAAAAAAgGZAAAAAAACAZkAAAAAAAOBlQAAAAAAAgGdAAAAAAAAwcUAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAABgZEAAAAAAAIBhQAAAAAAAYGFAAAAAAABgZ0AAAAAAAAD4fwAAAAAAIGdAAAAAAADAZ0AAAAAAACBnQAAAAAAAQGlAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAABgZEAAAAAAAIBlQAAAAAAAwGNAAAAAAAAgaEAAAAAAACBrQAAAAAAAAPh/AAAAAADAaUAAAAAAAMBoQAAAAAAAAGtAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAA4GVAAAAAAADAZEAAAAAAAGBjQAAAAAAAgGhAAAAAAABAaUAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8=","dtype":"float64","shape":[88]},"year discovered":["1766","1868","1817","1798","1807","Ancient","1772","1774","1670","1898","1807","1808","Ancient","1854","1669","Ancient","1774","1894","1807","Ancient","1876","1791","1803","Ancient","1774","Ancient","Ancient","1751","Ancient","1746","1875","1886","Ancient","1817","1826","1898","1861","1790","1794","1789","1801","1778","1937","1827","1803","1803","Ancient","1817","1863","Ancient","Ancient","1782","1811","1898","1860","1808","1923","1802","1783","1925","1803","1803","Ancient","Ancient","Ancient","1861","Ancient","Ancient","1898","1940","1900","1939","1898","1969","1967","1974","1976","1984","1982","1994","1994","1996","2003","1998","2003","2000","2010","2002"]},"selected":null,"selection_policy":null},"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"},"glyph":{"id":"1049d120-1f77-40e8-a5a9-a93bcb949143","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8c2160e5-4571-4f5d-a274-2be3ca64f0a6","type":"Text"},"selection_glyph":null,"view":{"id":"a131b0dc-ecf1-4469-82ed-2e760bfb8582","type":"CDSView"}},"id":"f625d25c-d357-4d9e-9e6a-2de8e8d11791","type":"GlyphRenderer"},{"attributes":{"range":{"id":"ef192160-7cfd-4170-886f-fa08362310a5","type":"FactorRange"},"value":0.3},"id":"17900188-b3db-4ff8-b3d4-36828f5bda70","type":"Dodge"},{"attributes":{},"id":"90c4a213-216a-4142-8b47-ad6bdacabab8","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["VII","VI","V","IV","III","II","I"]},"id":"ef192160-7cfd-4170-886f-fa08362310a5","type":"FactorRange"},{"attributes":{"text":{"field":"name"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"group","transform":{"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"}},"y":{"field":"period","transform":{"id":"242209dc-ec57-402f-95df-f77fa79c9908","type":"Dodge"}}},"id":"8c2160e5-4571-4f5d-a274-2be3ca64f0a6","type":"Text"},{"attributes":{"range":{"id":"ef192160-7cfd-4170-886f-fa08362310a5","type":"FactorRange"},"value":-0.35},"id":"242209dc-ec57-402f-95df-f77fa79c9908","type":"Dodge"},{"attributes":{"source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"}},"id":"e217a631-b550-4da2-af3e-c53864c7133f","type":"CDSView"},{"attributes":{"text":{"field":"symbol"},"text_baseline":"middle","text_color":{"value":"black"},"text_font_style":"bold","x":{"field":"group","transform":{"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"}},"y":{"field":"period"}},"id":"e26cdd46-fde6-4f66-a418-8c75a3a5f983","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["LA","AC"],"x":["3","3"],"y":["VI","VII"]},"selected":null,"selection_policy":null},"id":"34fc1b7c-b8a3-456d-b222-ffd129bf9a02","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34fc1b7c-b8a3-456d-b222-ffd129bf9a02","type":"ColumnDataSource"},"glyph":{"id":"e181ae61-5c4c-41e8-9d5e-8ee4881ebcc1","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c1353976-4e41-4538-acf3-328eaba6580c","type":"Text"},"selection_glyph":null,"view":{"id":"f2b5212b-fc57-4489-939b-c1bf051aab70","type":"CDSView"}},"id":"2a792442-b4b6-48e9-9f53-a98184851134","type":"GlyphRenderer"},{"attributes":{"text":{"field":"atomic mass"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"group","transform":{"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"}},"y":{"field":"period","transform":{"id":"ce51e01f-89cf-4c9a-b2fc-d98cb3592768","type":"Dodge"}}},"id":"d16a8696-668d-44f1-b53a-d8075a97f9c6","type":"Text"},{"attributes":{"below":[{"id":"7d80bcdb-ba2e-4dfb-9b12-d3749e7fa36a","type":"CategoricalAxis"}],"left":[{"id":"20787f6d-14f8-49cf-a5d7-504fd22f6dc5","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":450,"plot_width":1000,"renderers":[{"id":"7d80bcdb-ba2e-4dfb-9b12-d3749e7fa36a","type":"CategoricalAxis"},{"id":"6537ab3a-bc65-4653-94d7-aaa6822a5033","type":"Grid"},{"id":"20787f6d-14f8-49cf-a5d7-504fd22f6dc5","type":"CategoricalAxis"},{"id":"9912bb1f-635f-44b6-af64-dcde57742a0a","type":"Grid"},{"id":"8911ab7d-185d-47cf-a776-c74c27d94b0d","type":"Legend"},{"id":"395e126c-8bec-433e-97b7-d3b5fd33d657","type":"GlyphRenderer"},{"id":"7e8bf45f-172f-4b28-afd0-b9f18589535e","type":"GlyphRenderer"},{"id":"6bd551bc-5d48-495c-a112-262f9ca3a941","type":"GlyphRenderer"},{"id":"f625d25c-d357-4d9e-9e6a-2de8e8d11791","type":"GlyphRenderer"},{"id":"1625a404-4dfa-4544-b6c6-8d2a77741478","type":"GlyphRenderer"},{"id":"2a792442-b4b6-48e9-9f53-a98184851134","type":"GlyphRenderer"}],"title":{"id":"95dcee48-8265-4502-9218-01336e90321d","type":"Title"},"toolbar":{"id":"cd8444e8-591c-4cd0-8a23-18aae5225e2c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3cad0fdd-eb5d-4383-a1c8-33d9162604a6","type":"FactorRange"},"x_scale":{"id":"d7ad81e1-e922-4fda-a7d3-8809b92c235d","type":"CategoricalScale"},"y_range":{"id":"ef192160-7cfd-4170-886f-fa08362310a5","type":"FactorRange"},"y_scale":{"id":"847701b1-7f11-46a7-b8a2-b4449052f2c7","type":"CategoricalScale"}},"id":"d4c52f7b-a649-4e60-b6ce-90da9b1ce899","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"},"glyph":{"id":"c0da0f41-a6af-4f5c-9343-619270624799","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d953eaba-a8bb-417f-8022-cbc7a4128f58","type":"Text"},"selection_glyph":null,"view":{"id":"3a4942e6-3e74-4a82-b030-d705487a1566","type":"CDSView"}},"id":"6bd551bc-5d48-495c-a112-262f9ca3a941","type":"GlyphRenderer"},{"attributes":{},"id":"870806d0-6c68-4f0a-ad6c-53a4bfa40db7","type":"CategoricalTicker"},{"attributes":{"source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"}},"id":"b2d3f104-0fda-4346-b629-590b6c6b9619","type":"CDSView"},{"attributes":{"plot":null,"text":"Periodic Table (omitting LA and AC Series)"},"id":"95dcee48-8265-4502-9218-01336e90321d","type":"Title"},{"attributes":{"source":{"id":"34fc1b7c-b8a3-456d-b222-ffd129bf9a02","type":"ColumnDataSource"}},"id":"f2b5212b-fc57-4489-939b-c1bf051aab70","type":"CDSView"},{"attributes":{"source":{"id":"bc3788fc-5e79-48f8-afca-55dec14bf996","type":"ColumnDataSource"}},"id":"3a4942e6-3e74-4a82-b030-d705487a1566","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"field":"metal","transform":{"id":"e962da6c-1ea4-4333-b82c-60c175adc14c","type":"CategoricalColorMapper"}},"height":{"units":"data","value":0.95},"line_color":{"field":"metal","transform":{"id":"e962da6c-1ea4-4333-b82c-60c175adc14c","type":"CategoricalColorMapper"}},"width":{"units":"data","value":0.95},"x":{"field":"group"},"y":{"field":"period"}},"id":"62d13a46-ed57-4fe5-ac99-859d07fbdfa8","type":"Rect"},{"attributes":{},"id":"f859d4f5-ad41-4d6d-b9be-e3ab26cb8f6f","type":"CategoricalTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"d4c52f7b-a649-4e60-b6ce-90da9b1ce899","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb59e214-db42-426b-9b13-2fb526fac3b1","type":"CategoricalTicker"}},"id":"6537ab3a-bc65-4653-94d7-aaa6822a5033","type":"Grid"},{"attributes":{"factors":["alkali metal","alkaline earth metal","metal","halogen","metalloid","noble gas","nonmetal","transition metal"],"palette":["#a6cee3","#1f78b4","#d93b43","#999d9a","#e08d49","#eaeaea","#f1d4Af","#599d7A"]},"id":"e962da6c-1ea4-4333-b82c-60c175adc14c","type":"CategoricalColorMapper"},{"attributes":{"text":{"field":"symbol"},"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"group","transform":{"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"}},"y":{"field":"period"}},"id":"57a006a6-86b3-4191-ba0a-c9a7766de0f1","type":"Text"},{"attributes":{"range":{"id":"3cad0fdd-eb5d-4383-a1c8-33d9162604a6","type":"FactorRange"},"value":-0.4},"id":"82323521-daed-4abd-bd14-fdacae8ab20c","type":"Dodge"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e181ae61-5c4c-41e8-9d5e-8ee4881ebcc1","type":"Text"}],"root_ids":["d4c52f7b-a649-4e60-b6ce-90da9b1ce899"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"e2f3cacf-91f3-4609-80c3-7e07dfbe5934","elementid":"b9fc5a89-3499-4366-95cb-a44bd67096d3","modelid":"d4c52f7b-a649-4e60-b6ce-90da9b1ce899"}];
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