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
      };var element = document.getElementById("9e65e68d-c90b-468d-a07b-16a750c0a053");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9e65e68d-c90b-468d-a07b-16a750c0a053' but no matching script tag was found. ")
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
                    var docs_json = '{"08dfa4b9-0fa8-4348-b318-198ed1293f94":{"roots":{"references":[{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"a853b5e8-4a7e-4ae7-995e-cdaaae59a686","type":"GlyphRenderer"}]},"id":"d1924b8c-2cb8-4872-9bfc-910f7133dbe5","type":"LegendItem"},{"attributes":{"source":{"id":"b7e71859-8552-4071-ba09-457b2cdc8c04","type":"ColumnDataSource"}},"id":"60dd4782-0b45-43c0-b601-429f1ab8e5c9","type":"CDSView"},{"attributes":{"num_minor_ticks":10},"id":"4416400e-3c70-4424-a5b2-ee48065edb74","type":"LogTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"98aba8b7-d6fe-4f7f-96fa-2cf6d025684c","type":"Circle"},{"attributes":{"ticker":null},"id":"53375b99-dc77-486d-a326-98dee085c6b9","type":"LogTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"a47f562e-1c9a-4d43-9dbd-800816434338","type":"Line"},{"attributes":{"source":{"id":"5d8f50c5-ef28-416d-89e4-39bdf3f66ae9","type":"ColumnDataSource"}},"id":"ed449a0d-876b-49f9-8616-77e52b9ad4fa","type":"CDSView"},{"attributes":{},"id":"df9ae730-3ffb-4256-a2be-d0fc64a3476e","type":"LinearScale"},{"attributes":{"label":{"value":"y=sqrt(x)"},"renderers":[{"id":"008b14be-facc-4e2a-a3d2-9b5ccbf81ee7","type":"GlyphRenderer"}]},"id":"0b10a1da-ef30-4a63-84a8-d64514eb098f","type":"LegendItem"},{"attributes":{},"id":"a9724f85-d83b-4287-aba1-07cd836be267","type":"LogScale"},{"attributes":{"data_source":{"id":"354c89d1-b85e-4837-b112-dee479103f19","type":"ColumnDataSource"},"glyph":{"id":"8d400f96-556d-42c6-951f-f404564ca0cb","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23d26b56-9b1f-4a42-b483-9efb54c701e8","type":"Line"},"selection_glyph":null,"view":{"id":"3172965b-9071-482c-a7aa-de009fd09dcd","type":"CDSView"}},"id":"436ddfa3-e9d6-463f-8784-b5c489b102f1","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"a9654128-5007-4437-a227-e88cfac6bc13","type":"Line"},{"attributes":{},"id":"070526a3-4c08-47eb-8e99-dc09d32b75e1","type":"BasicTicker"},{"attributes":{"label":{"value":"y=x**2"},"renderers":[{"id":"436ddfa3-e9d6-463f-8784-b5c489b102f1","type":"GlyphRenderer"},{"id":"450e312a-8cd6-4533-bd24-8f0b59a3ab11","type":"GlyphRenderer"}]},"id":"958d7bdf-b277-49a1-9e7b-bece8d02bea7","type":"LegendItem"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"olivedrab"},"x":{"field":"x"},"y":{"field":"y"}},"id":"69cd4fd1-4fe4-46ed-9007-fca4a1514b9e","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"99da764d-e6e9-4708-8e9e-3f48891f12a0","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]}}},"id":"eeac8813-7496-4a3c-be46-2af4b09118c9","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f1c55910-e425-4855-92e3-26d76dc1e52d","type":"ColumnDataSource"}},"id":"74423bce-f9ad-4a2f-b62e-f37525413c51","type":"CDSView"},{"attributes":{"plot":{"id":"e1f429d9-5597-476f-991f-66ac2efaeae0","subtype":"Figure","type":"Plot"},"ticker":{"id":"070526a3-4c08-47eb-8e99-dc09d32b75e1","type":"BasicTicker"}},"id":"88aadca2-e77e-4bd9-b642-f1c72ef2f1d7","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]}}},"id":"5d8f50c5-ef28-416d-89e4-39bdf3f66ae9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b7e71859-8552-4071-ba09-457b2cdc8c04","type":"ColumnDataSource"},"glyph":{"id":"69cd4fd1-4fe4-46ed-9007-fca4a1514b9e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f3361c86-03a2-4393-a1c4-e4282df966c8","type":"Circle"},"selection_glyph":null,"view":{"id":"60dd4782-0b45-43c0-b601-429f1ab8e5c9","type":"CDSView"}},"id":"450e312a-8cd6-4533-bd24-8f0b59a3ab11","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"0b10a1da-ef30-4a63-84a8-d64514eb098f","type":"LegendItem"},{"id":"d72ad340-923c-46d1-9f0c-2ea5293bd999","type":"LegendItem"},{"id":"958d7bdf-b277-49a1-9e7b-bece8d02bea7","type":"LegendItem"},{"id":"d1924b8c-2cb8-4872-9bfc-910f7133dbe5","type":"LegendItem"},{"id":"7047e5d0-6335-4993-8807-dd76c092d47c","type":"LegendItem"},{"id":"b91ec728-9606-414b-995e-0ddc96e1541c","type":"LegendItem"}],"location":"top_left","plot":{"id":"e1f429d9-5597-476f-991f-66ac2efaeae0","subtype":"Figure","type":"Plot"}},"id":"764a164e-b586-42bc-9d38-627bfffc33bd","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"286b859f-deb1-4474-a15a-2c03f89b2105","type":"BoxAnnotation"},{"attributes":{"label":{"value":"y=x^x"},"renderers":[{"id":"a78a4489-7c19-4750-8b96-2c65a8b54e53","type":"GlyphRenderer"}]},"id":"7047e5d0-6335-4993-8807-dd76c092d47c","type":"LegendItem"},{"attributes":{"line_color":"indigo","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c33a7096-137d-4bdb-bd92-8b85e8616749","type":"Line"},{"attributes":{"source":{"id":"354c89d1-b85e-4837-b112-dee479103f19","type":"ColumnDataSource"}},"id":"3172965b-9071-482c-a7aa-de009fd09dcd","type":"CDSView"},{"attributes":{"source":{"id":"eeac8813-7496-4a3c-be46-2af4b09118c9","type":"ColumnDataSource"}},"id":"49161fc2-213e-4032-b3cc-5140260e00c3","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5b5af207-afff-410d-a2fd-44ba089bec04","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4b93e4c8-2836-4a27-8d66-07b0f62f91d6","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"D0lIYhM91D8QPZjjzb7YPzK64wifjNw/GXn6VSPn3z//ye9jz3fhP16ivPPv3OI/DfNMwmkp5D9W5tY7u2HlPwwBnbAqieY/tAshZjGi5z8jQ5ybu67oP7E4kPFQsOk/hczrDC+o6j/0iwzLW5frP5k2qxOyfuw/0YpNHOte7T/e9yZApTjuP6j3dSdpDO8/c6shuq3a7z8NtseY7VHwP2lp98EmtPA/GIsYKSsU8T9PAyw7H3LxP25i6aMjzvE/hhwD01Uo8j8TapBq0IDyP2srOpur1/I/LTC4cf0s8z9FEmIY2oDzP2TM/g5U0/M/XK6KWnwk9D+ErVKuYnT0PwBsf48Vw/Q/97f0c6IQ9T9mEkDdFV31P5RXL3B7qPU/qeqNCd7y9T/qSnHQRzz2P0WZbEbChPY/8HH0VVbM9j8E7TBfDBP3P+4VckPsWPc/r0xzb/2d9z9sfJPkRuL3PzCgIkHPJfg/fX7gx5xo+D9srcRmtar4P/OyJL0e7Pg/WVVKId4s+T8X2Yml+Gz5P5Tq5RxzrPk/MzxNH1Lr+T9+aXwNmin6P9BrjRRPZ/o/HdU8MXWk+j+cEuwyEOH6Py0mZ74jHfs/oI1zULNY+z9zbi1AwpP7PyeQN8FTzvs/7DPC5WoI/D/9a2ygCkL8P1Q1A8Y1e/w/FUIhD++z/D8sGLIZOez8P2DlWmoWJP0/Ty/LbYlb/T87Ufd5lJL9P++KPs85yf0/ODp+mXv//T8MsxPxWzX+PxgJztvcav4/Qf/QTQCg/j+9NmoqyNT+PwKf2UQ2Cf8/6REOYUw9/z+N81Y0DHH/P5KbC2Z3pP8/Mj0pkI/X/z9y+vMfKwUAQHrKI3tmHgBAK19KlHo3AED5Y3MgaFAAQFt2S88vaQBAoZdYS9KBAEAOrS86UJoAQJs9pzyqsgBAepkH7+DKAEAllDjp9OIAQMf27L7m+gBARc7L/7YSAUCEtZc3ZioBQF46VO70QQFAl3lpqGNZAUA3DMbmsnABQNte/ybjhwFA/Ylw4/SeAUCcwFeT6LUBQFhp8qq+zAFAqPSXm3fjAUA=","dtype":"float64","shape":[100]}}},"id":"f1c55910-e425-4855-92e3-26d76dc1e52d","type":"ColumnDataSource"},{"attributes":{"line_color":"tomato","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"ef50fad8-380a-4c5a-9fe6-2a1583d1b8fe","type":"Line"},{"attributes":{"source":{"id":"d05d3615-7da3-4698-898e-a7e92d87ae6d","type":"ColumnDataSource"}},"id":"cc11ca71-9258-4a20-8923-e8d346c81635","type":"CDSView"},{"attributes":{"data_source":{"id":"d05d3615-7da3-4698-898e-a7e92d87ae6d","type":"ColumnDataSource"},"glyph":{"id":"e7f9d1b6-fc2b-43ac-b54e-3a28c5633731","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a9654128-5007-4437-a227-e88cfac6bc13","type":"Line"},"selection_glyph":null,"view":{"id":"cc11ca71-9258-4a20-8923-e8d346c81635","type":"CDSView"}},"id":"bab6350d-f3a7-40e8-b9cd-69d5119d98ff","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"597fe692-632a-42b3-a148-ae6811fc1770","type":"GlyphRenderer"},{"id":"36bc6486-7cec-4e30-8c58-1a7561ef16b1","type":"GlyphRenderer"}]},"id":"d72ad340-923c-46d1-9f0c-2ea5293bd999","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"LCYBeWhf8D9YMo0XTNjwP7lwLUUCh/E/NjZCrMRx8j87ZNvsLqHzP+s6F4zFIPU/YAoDerD/9j+XyDq0uVH5P0MCUFynMPw/TRHUKBK+/z+8f05U8xICQA0App3p0ARAcZq3UwA/CECU6ZL4zY8MQIFhtex8AxFAP6btxtB/FEBKjPbKsfoYQGM2kHGfyB5AMZpbeAIvI0AH5FKJSC4oQIYxvnNS0y5AiHHCVfbeM0C9O/c5zOg5QOW5WYFAFUFAJuWASVPIRkBm4ubKcbpOQH4/7XEv9VRADuRKK4PpXEBjRQHMRytkQDSIFrOEdWxANGXnGldOdECK2v+QXk59QI2vcbE4Y4VAeoIUQEqSj0DzJrXrC5GXQMXu6N55yqFABtZBY48qq0BNolG88/m0QIE0fTFxYcBAtutQNLLfyUCPyYwgiarUQF14O/2kseBAHGzPk8BG60AR7qUTUYn2QDQya/DT1AJBEgzOQ/PTD0EtCEvtxTMbQSlVrNU4gydBCZrJvtCNNEHvLeFb5itCQSWl2HpXP1BB9xUmlEJiXUGkaOoFQt9qQUBCEYqY2nhBMtlXhIA/h0FIwsH6IP6VQYUylEGJCqVBAZ+ndvNbtEF9K1xSPezDQeyPmeGLt9NBstmtihK840HfyIy9+PnzQYI/tDJccwRCHtS25m8sFUKfdupPuismQtnPVt13ejdCRZGI5yklSUKTfq80XjxbQqfO8X3A1W1Cfi4jU8eGgEJPL1U5SYSSQnKjp+9o+6RCBDpeyJ0LuEJ6oL8YWd7LQjRq+AFBVeBCKHUzg6Zc80KX55M5gTYHQyX22z1FJRxDefJ5c75BMUPhskwkvGZFQyjaa1mg11pDdqC5HDYGcUMsRNBD9taFQ7zVXEjHVZxDvV7SUPSWskNBaeCWN6vIQ1MK4gW+jeBDUmAb4uJ39kNvBEh2m9cORMzBz6igaCVEHdjoee0OPkSJtWQLN1dVRJ1sFjyEpW5EdLhNtDxBhkRmx7muJFigRHoUFimIR7hEeEGiGvQ80kTHykxO/LXrRAshCGZtSgVFkQIoLCqLIEU=","dtype":"float64","shape":[100]}}},"id":"d05d3615-7da3-4698-898e-a7e92d87ae6d","type":"ColumnDataSource"},{"attributes":{},"id":"9a423cf4-57c7-4188-bf15-3ff319ce28e4","type":"SaveTool"},{"attributes":{"axis_label":"Values (log scale)","formatter":{"id":"53375b99-dc77-486d-a326-98dee085c6b9","type":"LogTickFormatter"},"plot":{"id":"e1f429d9-5597-476f-991f-66ac2efaeae0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4416400e-3c70-4424-a5b2-ee48065edb74","type":"LogTicker"}},"id":"413e87b2-9d57-41f1-9d4a-c9441a4ba5f1","type":"LogAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"23d26b56-9b1f-4a42-b483-9efb54c701e8","type":"Line"},{"attributes":{"plot":null,"text":"log axis example"},"id":"06a347d2-7d29-43b2-85ec-bcf1866ac4f4","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3361c86-03a2-4393-a1c4-e4282df966c8","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"NMTNCyNr6T8r5WwH9hXoP7RYP/sQNec/7fGLawmk5j+J66bM8k7mP5plZ0HHKeY/ledPId4s5j/+6iz3NVPmPyZU30GJmeY/o0ZCk8b95j9GLJjqvX7nP2g2S53sG+g/Fjm4zlvV6D9guc69iqvpP7rA6/Zgn+o/dVAqBCay6z+H2OgcfeXsP+ciCeFjO+4/PeBhhDO27z+AERgEUqzwP84QjqPokvE/dKHT2aCQ8j90UHBed6fzP6YcWm6n2fQ/FsTjr7Ap9j+pH+AAXpr3PyweaEHNLvk/+pyCMnjq+j+SEsiEPtH8Pwl8Kzhx5/4/JM+9ue+YAEBzvAqA8toBQJfOYU69PANAz6IDMaTBBEBKSBU9XW0GQNF/UjwMRAhASARb009KCkDg0WlTUIUMQL9Z7G7Q+g5AUQr/B6DYEECIVDLM6FcSQPkeOO5I/xNAvTijmkHTFUBgc+cJ3tgXQJvq98XEFRpAg5skMEuQHEBLvLiUi08fQJJTTRK/LSFAyC+6nIreIkDJ1XirLr8kQMni07VQ1SZA1fJG80knKUAZynGlPrwrQG+KLoI4nC5AsFU4ViLoMEC+uiTdSrEyQOhlNyxVrzRAv38gmLzoNkD1LHhm0WQ5QBMfvyvVKzxAeoc2EBtHP0BCoGdElmBBQJSK9JL5UkNATmCOGHSBRUDZeyV3pfNHQIQEmDkvskpAVGMxFtjGTUCtxOgTWp5QQNZJoGopkFJAG+KonPm/VEAWQNf+3zVXQFQGCN8J+1lAT6KHmeMZXUA799akIk9gQC2LRvTSSmJA5NAd5qqHZEACUmHPYA5nQI4X6obf6GlAbqmBUnIibUAMaxKf+2NwQC7sWGkMdHJAXFBUI8jJdEDBDGq3uG53QKXoTfPAbXpATm23kE7TfUAlu1vWydaAQEs2K2dkBoNAEtzjZLyBhUCWvZQAbFOIQLwvzF+Uh4tAjjxSWBcsj0B9r5zxbKiRQGyZdE8IBJRAqibV9kuzlkBHy1q+LMKZQNkuIKRgPp1AE+dDIdGboEDa0mpO/9+iQJAvonAXdqVAAAAAAABqqEA=","dtype":"float64","shape":[100]}}},"id":"1b7e6faf-30e4-49ff-bc6d-39ab8f99a5f3","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"8d400f96-556d-42c6-951f-f404564ca0cb","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"e1f429d9-5597-476f-991f-66ac2efaeae0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4416400e-3c70-4424-a5b2-ee48065edb74","type":"LogTicker"}},"id":"9d902a3c-3679-46ce-8a31-5a5d992af656","type":"Grid"},{"attributes":{"callback":null,"end":10000000000000000000000,"start":0.001},"id":"3702aa23-59e0-41de-8c96-3aa4e15fbf31","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"fBSuR+F6hD/GgVSMluKWP1+/YSsORqQ/lwCSAQGdrz9Egl3kEbu2P5hlbkC76L4/JNV9Sr4rxD8uqALxqoPJP+OrxZMjfM8/I3BjGZQK0z+sIgNnXKfWP4ztwbJqlNo/w9Cf/L7R3j8pZk6irK/hPx1wXMWcHuQ/OwZ656+15j+FKKcI5nTpP/rW4yg/XOw/mxEwSLtr7z827EUzrVHxP7KV+0GOAfM/RAU50IDF9D/sOv7dhJ32P6k2S2uaifg/fPgfeMGJ+j9lgHwE+p38P2TOYBBExv4/PnHmzU+BAEBTXmBThqkBQHMunpjF2wJAnuGfnQ0YBEDUd2ViXl4FQBXx7ua3rgZAYU08KxoJCEC3jE0vhW0JQBmvIvP42wpAhbS7dnVUDED8nBi6+tYNQIBoOb2IYw9AhwsPwA99EEBTVGOBX00RQKSOmaKzIhJAe7qxIwz9EkDX16sEadwTQLnmh0XKwBRAIOdF5i+qFUAN2eXmmZgWQH+8Z0cIjBdAd5HLB3uEGED0VxEo8oEZQPYPOahthBpAfrlCiO2LG0CLVC7IcZgcQB7h+2f6qR1AOV+rZ4fAHkDXzjzHGNwfQP0XWENXfiBAUcECUyQRIUBoY56Sc6YhQEL+KgJFPiJA3pGooZjYIkA+HhdxbnUjQGCjdnDGFCRARCHHn6C2JEDrlwj//FolQFYHO47bASZAgm9eTTyrJkBy0HI8H1cnQCQqeFuEBShAmXxuqmu2KEDRx1Up1WkpQMsLLtjAHypAiEj3ti7YKkAIfrHFHpMrQEusXASRUCxAUtP4coUQLUAa84UR/NItQKULBOD0ly5A8hxz3m9fL0CAk2mGthQwQOoUkjX2ejBAtRKz/HbiMEDhjMzbOEsxQG6D3tI7tTFAXfbo4X8gMkCt5esIBY0yQF9R50fL+jJAcjnbntJpM0DmnccNG9ozQLx+rJSkSzRA89uJM2++NECMtV/qejI1QIULLrnHpzVA4d30n1UeNkCdLLSeJJY2QLv3a7U0DzdAOj8c5IWJN0AbA8UqGAU4QF1DZonrgThAAAAAAAAAOUA=","dtype":"float64","shape":[100]}}},"id":"354c89d1-b85e-4837-b112-dee479103f19","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5d8f50c5-ef28-416d-89e4-39bdf3f66ae9","type":"ColumnDataSource"},"glyph":{"id":"98aba8b7-d6fe-4f7f-96fa-2cf6d025684c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33b4e195-29c9-4999-a35c-78d846a36efd","type":"Circle"},"selection_glyph":null,"view":{"id":"ed449a0d-876b-49f9-8616-77e52b9ad4fa","type":"CDSView"}},"id":"36bc6486-7cec-4e30-8c58-1a7561ef16b1","type":"GlyphRenderer"},{"attributes":{"line_color":"gold","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"a3310bcf-a211-4768-9e84-d3aeabac456e","type":"Line"},{"attributes":{},"id":"5a54a521-5056-48cc-80da-0b18d1779fa8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"BCb8+I4k9D/YkSiBB5P2P+ZFPS6kTPk/tT+SFHda/D+2rHOXqsb/PwhLvJ9RzgFAGmZC05L0A0D4INh7QF0GQC1oRUhfEAlAIYQjsesWDEDkDD3i93oPQDZrJKDmoxFANIpK/QjFE0CuGNiS+ScWQOSomvWp1BhAVbzmNQHUG0AJCLaB+S8fQDNUQ63geSFAZ1nDZvCVI0Bt3PeUMfMlQP8rNeCCmShADFCKI7aRK0BSXkfIreUuQN2ZX9Y+UDFAQFTkAUhnM0CB2N1T5741QNDhO7XoXjhA/M5N/ghQO0ATM1kME5w+QHVG/SwAJ0FAU6tnww45Q0A4vgCkGYtFQAzy/CTaJEhAf3H5TfgOS0DVhkmoJ1NOQIGE2MQj/lBANUSEokMLU0Dsz6Bcx1dVQLo45uJV61dAiK3VnYLOWkAjyGL66QpeQGlV4LOo1WBAu8znmOXdYkA3PcFX7yRlQCrVfaVasmdAdN+ifKaOakChetJkWMNtQJhUMRKOrXBAPNywovOwckDJjiFykPJ0QJ3KWibneXdA9waRfGJPekCj9J9NcXx9QDeHEPrShYBA9iJpvmyEgkAhIjeLqcCEQHWyHSL6QYdAlJc3M7UQikCvMqMeMzaNQCY45od2XpBAG6f/7E9YkkCItCaFOY+UQL5/aViSCpdAfVyNOZ3SmUDDwHtFnPCcQDrgONp3N6BA1g/DMZwsokC8/b1EP16kQCZU3Iuu06ZAEnDgKxmVqUCRuYczq6usQLcaqBHWELBAsf1bklABskCVWW2xuS20QNRlCIJNnbZAQEbOqSdYuUDj2tpdXme8QGhLz6Eg1b9Ak3DHFmzWwUDngEG1p/3DQET2bANuZ8ZAysk7VscbyUA5rzU9tCPMQKncdHlLic9A9TpRye2r0UBLUd08CM7TQNtZb9sOMtZAxYxN1/bf2EDkzPxNq+DbQDtS2/cqPt9AmoKOttSB4UDAo3M32p7jQCMQVNgu/eVAIAtg1rSk6EBYKTAQQp7rQCDrp2698+5A901Y7R9Y8UD1McGWHHDzQG3sN8vMyPVAAAAAAABq+EA=","dtype":"float64","shape":[100]}}},"id":"318a234b-3274-4446-92a5-72b5eded2ada","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"fBSuR+F6hD/GgVSMluKWP1+/YSsORqQ/lwCSAQGdrz9Egl3kEbu2P5hlbkC76L4/JNV9Sr4rxD8uqALxqoPJP+OrxZMjfM8/I3BjGZQK0z+sIgNnXKfWP4ztwbJqlNo/w9Cf/L7R3j8pZk6irK/hPx1wXMWcHuQ/OwZ656+15j+FKKcI5nTpP/rW4yg/XOw/mxEwSLtr7z827EUzrVHxP7KV+0GOAfM/RAU50IDF9D/sOv7dhJ32P6k2S2uaifg/fPgfeMGJ+j9lgHwE+p38P2TOYBBExv4/PnHmzU+BAEBTXmBThqkBQHMunpjF2wJAnuGfnQ0YBEDUd2ViXl4FQBXx7ua3rgZAYU08KxoJCEC3jE0vhW0JQBmvIvP42wpAhbS7dnVUDED8nBi6+tYNQIBoOb2IYw9AhwsPwA99EEBTVGOBX00RQKSOmaKzIhJAe7qxIwz9EkDX16sEadwTQLnmh0XKwBRAIOdF5i+qFUAN2eXmmZgWQH+8Z0cIjBdAd5HLB3uEGED0VxEo8oEZQPYPOahthBpAfrlCiO2LG0CLVC7IcZgcQB7h+2f6qR1AOV+rZ4fAHkDXzjzHGNwfQP0XWENXfiBAUcECUyQRIUBoY56Sc6YhQEL+KgJFPiJA3pGooZjYIkA+HhdxbnUjQGCjdnDGFCRARCHHn6C2JEDrlwj//FolQFYHO47bASZAgm9eTTyrJkBy0HI8H1cnQCQqeFuEBShAmXxuqmu2KEDRx1Up1WkpQMsLLtjAHypAiEj3ti7YKkAIfrHFHpMrQEusXASRUCxAUtP4coUQLUAa84UR/NItQKULBOD0ly5A8hxz3m9fL0CAk2mGthQwQOoUkjX2ejBAtRKz/HbiMEDhjMzbOEsxQG6D3tI7tTFAXfbo4X8gMkCt5esIBY0yQF9R50fL+jJAcjnbntJpM0DmnccNG9ozQLx+rJSkSzRA89uJM2++NECMtV/qejI1QIULLrnHpzVA4d30n1UeNkCdLLSeJJY2QLv3a7U0DzdAOj8c5IWJN0AbA8UqGAU4QF1DZonrgThAAAAAAAAAOUA=","dtype":"float64","shape":[100]}}},"id":"b7e71859-8552-4071-ba09-457b2cdc8c04","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"318a234b-3274-4446-92a5-72b5eded2ada","type":"ColumnDataSource"},"glyph":{"id":"a3310bcf-a211-4768-9e84-d3aeabac456e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a47f562e-1c9a-4d43-9dbd-800816434338","type":"Line"},"selection_glyph":null,"view":{"id":"b599bf36-3de3-4146-819d-abfdcb6773c4","type":"CDSView"}},"id":"a853b5e8-4a7e-4ae7-995e-cdaaae59a686","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f1c55910-e425-4855-92e3-26d76dc1e52d","type":"ColumnDataSource"},"glyph":{"id":"ef50fad8-380a-4c5a-9fe6-2a1583d1b8fe","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"99da764d-e6e9-4708-8e9e-3f48891f12a0","type":"Line"},"selection_glyph":null,"view":{"id":"74423bce-f9ad-4a2f-b62e-f37525413c51","type":"CDSView"}},"id":"008b14be-facc-4e2a-a3d2-9b5ccbf81ee7","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=10^(x^2)"},"renderers":[{"id":"bab6350d-f3a7-40e8-b9cd-69d5119d98ff","type":"GlyphRenderer"}]},"id":"b91ec728-9606-414b-995e-0ddc96e1541c","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"048f8ffe-4c04-4648-b05f-038ab8441892","type":"PanTool"},{"id":"32a7e57a-70d5-4715-aade-ea343cd1aa01","type":"WheelZoomTool"},{"id":"54870375-e32f-4623-86c1-96838950e03b","type":"BoxZoomTool"},{"id":"9a423cf4-57c7-4188-bf15-3ff319ce28e4","type":"SaveTool"},{"id":"43a00ffa-ac72-4670-b0b9-1f1b53381517","type":"ResetTool"},{"id":"697aa010-670a-4372-bab1-963a073ce1c1","type":"HelpTool"}]},"id":"57055025-af46-4772-9589-1997b70ea7ce","type":"Toolbar"},{"attributes":{"axis_label":"Domain","formatter":{"id":"5a54a521-5056-48cc-80da-0b18d1779fa8","type":"BasicTickFormatter"},"plot":{"id":"e1f429d9-5597-476f-991f-66ac2efaeae0","subtype":"Figure","type":"Plot"},"ticker":{"id":"070526a3-4c08-47eb-8e99-dc09d32b75e1","type":"BasicTicker"}},"id":"56b5a761-9d85-4a29-a555-401d9c2a9abd","type":"LinearAxis"},{"attributes":{"source":{"id":"1b7e6faf-30e4-49ff-bc6d-39ab8f99a5f3","type":"ColumnDataSource"}},"id":"de9cf407-04fc-4a01-ae4b-8c5ebd643872","type":"CDSView"},{"attributes":{},"id":"32a7e57a-70d5-4715-aade-ea343cd1aa01","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33b4e195-29c9-4999-a35c-78d846a36efd","type":"Circle"},{"attributes":{"below":[{"id":"56b5a761-9d85-4a29-a555-401d9c2a9abd","type":"LinearAxis"}],"left":[{"id":"413e87b2-9d57-41f1-9d4a-c9441a4ba5f1","type":"LogAxis"}],"renderers":[{"id":"56b5a761-9d85-4a29-a555-401d9c2a9abd","type":"LinearAxis"},{"id":"88aadca2-e77e-4bd9-b642-f1c72ef2f1d7","type":"Grid"},{"id":"413e87b2-9d57-41f1-9d4a-c9441a4ba5f1","type":"LogAxis"},{"id":"9d902a3c-3679-46ce-8a31-5a5d992af656","type":"Grid"},{"id":"286b859f-deb1-4474-a15a-2c03f89b2105","type":"BoxAnnotation"},{"id":"764a164e-b586-42bc-9d38-627bfffc33bd","type":"Legend"},{"id":"008b14be-facc-4e2a-a3d2-9b5ccbf81ee7","type":"GlyphRenderer"},{"id":"597fe692-632a-42b3-a148-ae6811fc1770","type":"GlyphRenderer"},{"id":"36bc6486-7cec-4e30-8c58-1a7561ef16b1","type":"GlyphRenderer"},{"id":"436ddfa3-e9d6-463f-8784-b5c489b102f1","type":"GlyphRenderer"},{"id":"450e312a-8cd6-4533-bd24-8f0b59a3ab11","type":"GlyphRenderer"},{"id":"a853b5e8-4a7e-4ae7-995e-cdaaae59a686","type":"GlyphRenderer"},{"id":"a78a4489-7c19-4750-8b96-2c65a8b54e53","type":"GlyphRenderer"},{"id":"bab6350d-f3a7-40e8-b9cd-69d5119d98ff","type":"GlyphRenderer"}],"title":{"id":"06a347d2-7d29-43b2-85ec-bcf1866ac4f4","type":"Title"},"toolbar":{"id":"57055025-af46-4772-9589-1997b70ea7ce","type":"Toolbar"},"x_range":{"id":"f9aa438d-8054-4f2c-a1e9-2a30197df732","type":"DataRange1d"},"x_scale":{"id":"df9ae730-3ffb-4256-a2be-d0fc64a3476e","type":"LinearScale"},"y_range":{"id":"3702aa23-59e0-41de-8c96-3aa4e15fbf31","type":"Range1d"},"y_scale":{"id":"a9724f85-d83b-4287-aba1-07cd836be267","type":"LogScale"}},"id":"e1f429d9-5597-476f-991f-66ac2efaeae0","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"286b859f-deb1-4474-a15a-2c03f89b2105","type":"BoxAnnotation"}},"id":"54870375-e32f-4623-86c1-96838950e03b","type":"BoxZoomTool"},{"attributes":{},"id":"048f8ffe-4c04-4648-b05f-038ab8441892","type":"PanTool"},{"attributes":{"data_source":{"id":"eeac8813-7496-4a3c-be46-2af4b09118c9","type":"ColumnDataSource"},"glyph":{"id":"1f0ce81e-89c2-43e8-9223-0268a3b65e04","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4b93e4c8-2836-4a27-8d66-07b0f62f91d6","type":"Line"},"selection_glyph":null,"view":{"id":"49161fc2-213e-4032-b3cc-5140260e00c3","type":"CDSView"}},"id":"597fe692-632a-42b3-a148-ae6811fc1770","type":"GlyphRenderer"},{"attributes":{},"id":"43a00ffa-ac72-4670-b0b9-1f1b53381517","type":"ResetTool"},{"attributes":{"callback":null},"id":"f9aa438d-8054-4f2c-a1e9-2a30197df732","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1f0ce81e-89c2-43e8-9223-0268a3b65e04","type":"Line"},{"attributes":{"source":{"id":"318a234b-3274-4446-92a5-72b5eded2ada","type":"ColumnDataSource"}},"id":"b599bf36-3de3-4146-819d-abfdcb6773c4","type":"CDSView"},{"attributes":{"data_source":{"id":"1b7e6faf-30e4-49ff-bc6d-39ab8f99a5f3","type":"ColumnDataSource"},"glyph":{"id":"c33a7096-137d-4bdb-bd92-8b85e8616749","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5b5af207-afff-410d-a2fd-44ba089bec04","type":"Line"},"selection_glyph":null,"view":{"id":"de9cf407-04fc-4a01-ae4b-8c5ebd643872","type":"CDSView"}},"id":"a78a4489-7c19-4750-8b96-2c65a8b54e53","type":"GlyphRenderer"},{"attributes":{},"id":"697aa010-670a-4372-bab1-963a073ce1c1","type":"HelpTool"},{"attributes":{"line_color":"coral","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"e7f9d1b6-fc2b-43ac-b54e-3a28c5633731","type":"Line"}],"root_ids":["e1f429d9-5597-476f-991f-66ac2efaeae0"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"08dfa4b9-0fa8-4348-b318-198ed1293f94","elementid":"9e65e68d-c90b-468d-a07b-16a750c0a053","modelid":"e1f429d9-5597-476f-991f-66ac2efaeae0"}];
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