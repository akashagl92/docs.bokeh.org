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
      };var element = document.getElementById("9033543b-0a33-4c82-9c32-85c6f66d8842");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9033543b-0a33-4c82-9c32-85c6f66d8842' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                "Surface3d": require("custom/bk_script_225a273869a14d7fb0144f7c761e7aac.surface3d").Surface3d,
          "LatexLabel": require("custom/bk_script_4d245a4961fc4045b086aa2119f0ad16.latex_label").LatexLabel,
          "Custom": require("custom/bk_script_7e43a71bbd714655ab09145815dbaf32.custom").Custom,
          "MyFormatter": require("custom/bk_script_b64ada8818d44343b0d14823d93ffccf.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_cfe5420328f44687b89787ca1390e9e2.draw_tool").DrawTool,
          "IonRangeSlider": require("custom/bk_script_e7dcce66e32c4c8ebbc965d30f760331.ion_range_slider").IonRangeSlider
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_225a273869a14d7fb0144f7c761e7aac.surface3d": function(require, module, exports) {
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
          // or into the DOM, we must create a View subclass for the model. Currently
          // Bokeh models and views are based on BackBone. More information about
          // using Backbone can be found here:
          //     http://backbonejs.org/
          // In this case we will subclass from the existing BokehJS ``LayoutDOMView``,
          // corresponding to our
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
                  // Backbone Views create <div> elements by default, accessible as @el. Many
                  // Bokeh views ignore this default <div>, and instead do things like draw
                  // to the HTML canvas. In this case though, we use the <div> to attach a
                  // Graph3d to the DOM.
                  this._graph = new vis.Graph3d(this.el, this.get_data(), OPTIONS);
                  // Set Backbone listener so that when the Bokeh data source has a change
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
              // We must also create a corresponding JavaScript Backbone model sublcass to
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
          "custom/bk_script_4d245a4961fc4045b086aa2119f0ad16.latex_label": function(require, module, exports) {
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
          "custom/bk_script_7e43a71bbd714655ab09145815dbaf32.custom": function(require, module, exports) {
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
          "custom/bk_script_b64ada8818d44343b0d14823d93ffccf.my_formatter": function(require, module, exports) {
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
          
          },
          "custom/bk_script_cfe5420328f44687b89787ca1390e9e2.draw_tool": function(require, module, exports) {
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
                  (_a = e.bokeh, sx = _a.sx, sy = _a.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
                  var _a;
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
          "custom/bk_script_e7dcce66e32c4c8ebbc965d30f760331.ion_range_slider": function(require, module, exports) {
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
                  // Backbone Views create <div> elements by default, accessible as @$el.
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
                    var docs_json = '{"0818e508-8fb6-44db-a5bf-b944666e61c1":{"roots":{"references":[{"attributes":{},"id":"d63f870c-23a6-411b-9a69-2680254f7966","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"a2c7db5e-c004-4eac-b28a-f5422eecea51","type":"Circle"},{"attributes":{},"id":"c18e1824-16c6-4f0b-8dd9-3472aafe5a8c","type":"LinearScale"},{"attributes":{},"id":"54413e79-2ae9-4619-a8c0-ec64582f1d89","type":"BasicTickFormatter"},{"attributes":{},"id":"1d8d3ebd-383c-4147-a15a-8366405146c7","type":"BasicTickFormatter"},{"attributes":{},"id":"2e623181-1f6d-4a56-be0f-30ce2f2a2244","type":"BasicTicker"},{"attributes":{},"id":"0c550c72-66de-48e5-9e49-c602f24490db","type":"LinearScale"},{"attributes":{"plot":{"id":"16ffa7b9-2822-4ddf-9b14-2f9ef9470179","type":"Plot"},"ticker":{"id":"2e623181-1f6d-4a56-be0f-30ce2f2a2244","type":"BasicTicker"}},"id":"4df9ccf0-6530-495a-9e2a-91d0b1050466","type":"Grid"},{"attributes":{},"id":"eabb0cc8-166e-496d-884d-955143f47391","type":"LinearScale"},{"attributes":{},"id":"f11e1000-3888-444d-a8c8-6a82adf9a746","type":"BasicTicker"},{"attributes":{},"id":"2fde3df2-7e9d-4c24-900b-df98257f2f52","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"16ffa7b9-2822-4ddf-9b14-2f9ef9470179","type":"Plot"},"ticker":{"id":"f11e1000-3888-444d-a8c8-6a82adf9a746","type":"BasicTicker"}},"id":"6959c89d-61fe-4520-841d-41c795c07841","type":"Grid"},{"attributes":{"children":[{"id":"654abc04-b494-4aa4-8b97-75e7865773bf","type":"Plot"},{"id":"16ffa7b9-2822-4ddf-9b14-2f9ef9470179","type":"Plot"}]},"id":"9cd3efac-eb78-436a-964b-b5152c2af54c","type":"Row"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"99c63338-1896-49ba-add3-fa2514c4e8e7","type":"Line"},{"attributes":{"data_source":{"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"},"glyph":{"id":"99c63338-1896-49ba-add3-fa2514c4e8e7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0a655d30-dcca-4078-b539-00bcb6f20414","type":"CDSView"}},"id":"ecf3f422-b25c-41b2-8004-dac3ac630aa7","type":"GlyphRenderer"},{"attributes":{},"id":"5df8c8ec-f077-4f50-89a6-f92ac197e62b","type":"BasicTickFormatter"},{"attributes":{},"id":"6b8f3d42-1ab5-4dd4-9ee4-75ecdd2ca0f9","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"}},"id":"0a655d30-dcca-4078-b539-00bcb6f20414","type":"CDSView"},{"attributes":{"children":[{"id":"0c75d64f-da01-4a29-b672-91b39794eb82","type":"Plot"},{"id":"384d9cbd-1de3-406d-a29c-fa042ff662e5","type":"Plot"}]},"id":"cdccf58e-c439-4e58-8456-ebd6101f5416","type":"Row"},{"attributes":{},"id":"62fbe4ce-b6b9-49a9-ba2b-f4152a1804f3","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"},"glyph":{"id":"a2c7db5e-c004-4eac-b28a-f5422eecea51","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10126f48-03ec-4b13-94c6-fdc623c67d8c","type":"CDSView"}},"id":"f510f3e6-891c-4136-9b7c-2f1a3bdd5fb6","type":"GlyphRenderer"},{"attributes":{},"id":"17e9d49d-4bf0-4c13-b447-030d050696c8","type":"BasicTickFormatter"},{"attributes":{},"id":"6de0f1c2-308c-40ed-9ce8-9bf783379040","type":"LinearScale"},{"attributes":{"source":{"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"}},"id":"10126f48-03ec-4b13-94c6-fdc623c67d8c","type":"CDSView"},{"attributes":{"children":[{"id":"cdccf58e-c439-4e58-8456-ebd6101f5416","type":"Row"},{"id":"9cd3efac-eb78-436a-964b-b5152c2af54c","type":"Row"}]},"id":"97d192b1-2444-4849-afb9-5d159829d8a5","type":"Column"},{"attributes":{},"id":"c5a99db3-30fc-4254-87fd-cce6c18b2fb5","type":"LinearScale"},{"attributes":{},"id":"d97dee72-e46d-43fe-b757-e6798efbfe9c","type":"BasicTickFormatter"},{"attributes":{},"id":"4c22f121-1e77-4214-a305-51b5ffd7498b","type":"LinearScale"},{"attributes":{},"id":"bbff2b06-a73e-470c-9c03-d090b04dd5e8","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["xi","yi","xii","yii","xiii","yiii","xiv","yiv"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}}},"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9733ed9d-dc7e-414e-8d25-838c6689b6d0","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}}},"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"4d4d5508-5422-45de-b0b2-8a33508c044c","type":"Range1d"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"533e2a9d-5559-41fc-bcf1-e080ff34b7fa","type":"Range1d"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"3e1f78c5-1cc1-460d-b73b-da8f209179a7","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"7daac6d5-5d6a-4776-ace6-9cde8efe51ad","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3e1f78c5-1cc1-460d-b73b-da8f209179a7","type":"LinearAxis"},{"id":"7daac6d5-5d6a-4776-ace6-9cde8efe51ad","type":"LinearAxis"},{"id":"f3ed42b5-9560-4e74-bc30-0f7c94fe73cc","type":"Grid"},{"id":"3d8af743-8cde-44de-a8d3-0d839c050a79","type":"Grid"},{"id":"547917b5-ea1e-4b58-bdbf-09332d22f399","type":"GlyphRenderer"},{"id":"03ffba1e-59a2-4c88-a7f6-198a79975031","type":"GlyphRenderer"}],"title":{"id":"9caf2784-aa2d-4bf4-ae74-fc716df55620","type":"Title"},"toolbar":{"id":"9733ed9d-dc7e-414e-8d25-838c6689b6d0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4d4d5508-5422-45de-b0b2-8a33508c044c","type":"Range1d"},"x_scale":{"id":"4c22f121-1e77-4214-a305-51b5ffd7498b","type":"LinearScale"},"y_range":{"id":"533e2a9d-5559-41fc-bcf1-e080ff34b7fa","type":"Range1d"},"y_scale":{"id":"c18e1824-16c6-4f0b-8dd9-3472aafe5a8c","type":"LinearScale"}},"id":"0c75d64f-da01-4a29-b672-91b39794eb82","type":"Plot"},{"attributes":{"plot":null,"text":"I"},"id":"9caf2784-aa2d-4bf4-ae74-fc716df55620","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"2aac9248-c23b-4cdf-89ac-debb03cae4a2","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"d63f870c-23a6-411b-9a69-2680254f7966","type":"BasicTickFormatter"},"plot":{"id":"0c75d64f-da01-4a29-b672-91b39794eb82","type":"Plot"},"ticker":{"id":"c4c224c8-fefb-46d0-8f20-c8135723be27","type":"BasicTicker"}},"id":"3e1f78c5-1cc1-460d-b73b-da8f209179a7","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1d8d3ebd-383c-4147-a15a-8366405146c7","type":"BasicTickFormatter"},"plot":{"id":"0c75d64f-da01-4a29-b672-91b39794eb82","type":"Plot"},"ticker":{"id":"7df0f788-1d00-42dd-96a4-25ee6ae18e10","type":"BasicTicker"}},"id":"7daac6d5-5d6a-4776-ace6-9cde8efe51ad","type":"LinearAxis"},{"attributes":{},"id":"c4c224c8-fefb-46d0-8f20-c8135723be27","type":"BasicTicker"},{"attributes":{"plot":{"id":"0c75d64f-da01-4a29-b672-91b39794eb82","type":"Plot"},"ticker":{"id":"c4c224c8-fefb-46d0-8f20-c8135723be27","type":"BasicTicker"}},"id":"f3ed42b5-9560-4e74-bc30-0f7c94fe73cc","type":"Grid"},{"attributes":{},"id":"7df0f788-1d00-42dd-96a4-25ee6ae18e10","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0c75d64f-da01-4a29-b672-91b39794eb82","type":"Plot"},"ticker":{"id":"7df0f788-1d00-42dd-96a4-25ee6ae18e10","type":"BasicTicker"}},"id":"3d8af743-8cde-44de-a8d3-0d839c050a79","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4dd91321-d481-4314-97da-11ae3285a063","type":"Line"},{"attributes":{"data_source":{"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"},"glyph":{"id":"4dd91321-d481-4314-97da-11ae3285a063","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1c1c1c5d-e14a-4140-a4ff-4a504d971eae","type":"CDSView"}},"id":"547917b5-ea1e-4b58-bdbf-09332d22f399","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"}},"id":"1c1c1c5d-e14a-4140-a4ff-4a504d971eae","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"60470c56-8fd2-41d6-bd98-16c28f2c7054","type":"Toolbar"},{"attributes":{"data_source":{"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"},"glyph":{"id":"2aac9248-c23b-4cdf-89ac-debb03cae4a2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b8e8310e-ac65-4883-99e8-c70149106993","type":"CDSView"}},"id":"03ffba1e-59a2-4c88-a7f6-198a79975031","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"}},"id":"b8e8310e-ac65-4883-99e8-c70149106993","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"92c2fed5-362d-4c0d-9ae2-07e6261e70dd","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"b50851f2-59c2-47c0-b13f-3788e85a343d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"92c2fed5-362d-4c0d-9ae2-07e6261e70dd","type":"LinearAxis"},{"id":"b50851f2-59c2-47c0-b13f-3788e85a343d","type":"LinearAxis"},{"id":"35c81431-9e00-43e9-a0c2-933fddeb9714","type":"Grid"},{"id":"27cf3765-7e4d-4938-91b6-10596cc046d5","type":"Grid"},{"id":"2d54e73e-0332-4c3b-98b8-dd3c64ae1877","type":"GlyphRenderer"},{"id":"2ab7f902-1ec8-4aeb-b154-12bb3c697557","type":"GlyphRenderer"}],"title":{"id":"7f752ac2-e8f4-4202-ab5f-fc6905bce9dd","type":"Title"},"toolbar":{"id":"60470c56-8fd2-41d6-bd98-16c28f2c7054","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4d4d5508-5422-45de-b0b2-8a33508c044c","type":"Range1d"},"x_scale":{"id":"c5a99db3-30fc-4254-87fd-cce6c18b2fb5","type":"LinearScale"},"y_range":{"id":"533e2a9d-5559-41fc-bcf1-e080ff34b7fa","type":"Range1d"},"y_scale":{"id":"2fde3df2-7e9d-4c24-900b-df98257f2f52","type":"LinearScale"}},"id":"384d9cbd-1de3-406d-a29c-fa042ff662e5","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"54413e79-2ae9-4619-a8c0-ec64582f1d89","type":"BasicTickFormatter"},"plot":{"id":"384d9cbd-1de3-406d-a29c-fa042ff662e5","type":"Plot"},"ticker":{"id":"edc1fb79-0d1b-4e79-ae68-29fd9cf234bc","type":"BasicTicker"}},"id":"92c2fed5-362d-4c0d-9ae2-07e6261e70dd","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"6b8f3d42-1ab5-4dd4-9ee4-75ecdd2ca0f9","type":"BasicTickFormatter"},"plot":{"id":"384d9cbd-1de3-406d-a29c-fa042ff662e5","type":"Plot"},"ticker":{"id":"c3b922d7-e3be-4879-8df7-ea9fa67a9c45","type":"BasicTicker"}},"id":"b50851f2-59c2-47c0-b13f-3788e85a343d","type":"LinearAxis"},{"attributes":{"plot":null,"text":"II"},"id":"7f752ac2-e8f4-4202-ab5f-fc6905bce9dd","type":"Title"},{"attributes":{"plot":null,"text":"IV"},"id":"28b98065-8769-4bf4-aeab-761f6df32077","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"3ab39fc4-5dd5-41c2-be1e-06dea33e8e6d","type":"Circle"},{"attributes":{},"id":"edc1fb79-0d1b-4e79-ae68-29fd9cf234bc","type":"BasicTicker"},{"attributes":{"plot":{"id":"384d9cbd-1de3-406d-a29c-fa042ff662e5","type":"Plot"},"ticker":{"id":"edc1fb79-0d1b-4e79-ae68-29fd9cf234bc","type":"BasicTicker"}},"id":"35c81431-9e00-43e9-a0c2-933fddeb9714","type":"Grid"},{"attributes":{},"id":"c3b922d7-e3be-4879-8df7-ea9fa67a9c45","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"384d9cbd-1de3-406d-a29c-fa042ff662e5","type":"Plot"},"ticker":{"id":"c3b922d7-e3be-4879-8df7-ea9fa67a9c45","type":"BasicTicker"}},"id":"27cf3765-7e4d-4938-91b6-10596cc046d5","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"0b6ba8de-d432-4451-adc3-50d8e5f148fd","type":"Line"},{"attributes":{"data_source":{"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"},"glyph":{"id":"0b6ba8de-d432-4451-adc3-50d8e5f148fd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74c70369-8491-4386-90b9-fb0ffde8a19a","type":"CDSView"}},"id":"2d54e73e-0332-4c3b-98b8-dd3c64ae1877","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"}},"id":"74c70369-8491-4386-90b9-fb0ffde8a19a","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f3f5743b-9179-4717-a457-85167f63b299","type":"Toolbar"},{"attributes":{"data_source":{"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"},"glyph":{"id":"3ab39fc4-5dd5-41c2-be1e-06dea33e8e6d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d668732b-8d2a-4987-8d21-f868532c99da","type":"CDSView"}},"id":"2ab7f902-1ec8-4aeb-b154-12bb3c697557","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"}},"id":"d668732b-8d2a-4987-8d21-f868532c99da","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"bcbc3783-7d0a-42ef-bdc3-c973ce70b649","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"071d1004-7134-47b6-aabb-750f32adb6e8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bcbc3783-7d0a-42ef-bdc3-c973ce70b649","type":"LinearAxis"},{"id":"071d1004-7134-47b6-aabb-750f32adb6e8","type":"LinearAxis"},{"id":"401a6ef7-97e3-41f2-9bed-518c1f794559","type":"Grid"},{"id":"22163185-dcf7-4b75-a300-f7ace960f0cc","type":"Grid"},{"id":"c5732040-c484-47aa-a759-22e9296eae9d","type":"GlyphRenderer"},{"id":"f96b1a8c-bed4-483f-ae82-d5515b778159","type":"GlyphRenderer"}],"title":{"id":"6db02685-042f-4cf4-b8b9-5bc5eebd0a17","type":"Title"},"toolbar":{"id":"f3f5743b-9179-4717-a457-85167f63b299","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4d4d5508-5422-45de-b0b2-8a33508c044c","type":"Range1d"},"x_scale":{"id":"0c550c72-66de-48e5-9e49-c602f24490db","type":"LinearScale"},"y_range":{"id":"533e2a9d-5559-41fc-bcf1-e080ff34b7fa","type":"Range1d"},"y_scale":{"id":"6de0f1c2-308c-40ed-9ce8-9bf783379040","type":"LinearScale"}},"id":"654abc04-b494-4aa4-8b97-75e7865773bf","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5df8c8ec-f077-4f50-89a6-f92ac197e62b","type":"BasicTickFormatter"},"plot":{"id":"654abc04-b494-4aa4-8b97-75e7865773bf","type":"Plot"},"ticker":{"id":"d24ce886-d1e8-4501-919b-5fb79c51c33d","type":"BasicTicker"}},"id":"bcbc3783-7d0a-42ef-bdc3-c973ce70b649","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"62fbe4ce-b6b9-49a9-ba2b-f4152a1804f3","type":"BasicTickFormatter"},"plot":{"id":"654abc04-b494-4aa4-8b97-75e7865773bf","type":"Plot"},"ticker":{"id":"6b120b90-0b21-4a0d-85d1-6895088964fc","type":"BasicTicker"}},"id":"071d1004-7134-47b6-aabb-750f32adb6e8","type":"LinearAxis"},{"attributes":{"plot":null,"text":"III"},"id":"6db02685-042f-4cf4-b8b9-5bc5eebd0a17","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"dc80d9c4-7c93-40e6-82d1-9e27b7d03bf1","type":"Circle"},{"attributes":{},"id":"d24ce886-d1e8-4501-919b-5fb79c51c33d","type":"BasicTicker"},{"attributes":{"plot":{"id":"654abc04-b494-4aa4-8b97-75e7865773bf","type":"Plot"},"ticker":{"id":"d24ce886-d1e8-4501-919b-5fb79c51c33d","type":"BasicTicker"}},"id":"401a6ef7-97e3-41f2-9bed-518c1f794559","type":"Grid"},{"attributes":{},"id":"6b120b90-0b21-4a0d-85d1-6895088964fc","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"654abc04-b494-4aa4-8b97-75e7865773bf","type":"Plot"},"ticker":{"id":"6b120b90-0b21-4a0d-85d1-6895088964fc","type":"BasicTicker"}},"id":"22163185-dcf7-4b75-a300-f7ace960f0cc","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"a2273500-0bf7-4443-badf-b54cfa8f8659","type":"Line"},{"attributes":{"data_source":{"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"},"glyph":{"id":"a2273500-0bf7-4443-badf-b54cfa8f8659","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"9272190a-da9f-448e-a26a-3e91d3e46e06","type":"CDSView"}},"id":"c5732040-c484-47aa-a759-22e9296eae9d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a8ddcdd1-8769-44c7-bedf-0145f043c6e9","type":"ColumnDataSource"}},"id":"9272190a-da9f-448e-a26a-3e91d3e46e06","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"54d672c9-5f9f-4f2b-8a81-ca252f0a1671","type":"Toolbar"},{"attributes":{"data_source":{"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"},"glyph":{"id":"dc80d9c4-7c93-40e6-82d1-9e27b7d03bf1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e5cc45c3-ad09-4460-8f5a-2dd8390c1ab1","type":"CDSView"}},"id":"f96b1a8c-bed4-483f-ae82-d5515b778159","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17c1c001-b9a5-4b8b-bbb0-1ace13a09d62","type":"ColumnDataSource"}},"id":"e5cc45c3-ad09-4460-8f5a-2dd8390c1ab1","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"d025fbb0-58f9-48af-ae70-7f33257c978a","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"36abd475-388c-4774-88cb-760042d01ced","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d025fbb0-58f9-48af-ae70-7f33257c978a","type":"LinearAxis"},{"id":"36abd475-388c-4774-88cb-760042d01ced","type":"LinearAxis"},{"id":"4df9ccf0-6530-495a-9e2a-91d0b1050466","type":"Grid"},{"id":"6959c89d-61fe-4520-841d-41c795c07841","type":"Grid"},{"id":"ecf3f422-b25c-41b2-8004-dac3ac630aa7","type":"GlyphRenderer"},{"id":"f510f3e6-891c-4136-9b7c-2f1a3bdd5fb6","type":"GlyphRenderer"}],"title":{"id":"28b98065-8769-4bf4-aeab-761f6df32077","type":"Title"},"toolbar":{"id":"54d672c9-5f9f-4f2b-8a81-ca252f0a1671","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4d4d5508-5422-45de-b0b2-8a33508c044c","type":"Range1d"},"x_scale":{"id":"bbff2b06-a73e-470c-9c03-d090b04dd5e8","type":"LinearScale"},"y_range":{"id":"533e2a9d-5559-41fc-bcf1-e080ff34b7fa","type":"Range1d"},"y_scale":{"id":"eabb0cc8-166e-496d-884d-955143f47391","type":"LinearScale"}},"id":"16ffa7b9-2822-4ddf-9b14-2f9ef9470179","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"d97dee72-e46d-43fe-b757-e6798efbfe9c","type":"BasicTickFormatter"},"plot":{"id":"16ffa7b9-2822-4ddf-9b14-2f9ef9470179","type":"Plot"},"ticker":{"id":"2e623181-1f6d-4a56-be0f-30ce2f2a2244","type":"BasicTicker"}},"id":"d025fbb0-58f9-48af-ae70-7f33257c978a","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"17e9d49d-4bf0-4c13-b447-030d050696c8","type":"BasicTickFormatter"},"plot":{"id":"16ffa7b9-2822-4ddf-9b14-2f9ef9470179","type":"Plot"},"ticker":{"id":"f11e1000-3888-444d-a8c8-6a82adf9a746","type":"BasicTicker"}},"id":"36abd475-388c-4774-88cb-760042d01ced","type":"LinearAxis"}],"root_ids":["97d192b1-2444-4849-afb9-5d159829d8a5"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"0818e508-8fb6-44db-a5bf-b944666e61c1","elementid":"9033543b-0a33-4c82-9c32-85c6f66d8842","modelid":"97d192b1-2444-4849-afb9-5d159829d8a5"}];
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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