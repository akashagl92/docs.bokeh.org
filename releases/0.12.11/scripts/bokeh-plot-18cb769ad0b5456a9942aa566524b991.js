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
      };var element = document.getElementById("3dd10d9c-fc76-479f-a7f1-51e000c4765c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3dd10d9c-fc76-479f-a7f1-51e000c4765c' but no matching script tag was found. ")
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
                    var docs_json = '{"7c91a098-a37d-43a8-9fca-cfb44b0a2c49":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"e761ccdf-c581-436b-b01e-5afa05319ce3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3d1c8db-51b0-4f3c-8cff-203ea123c9f1","type":"BasicTicker"}},"id":"6a7ebfbc-0ebe-4088-a106-f77168ed8ddc","type":"Grid"},{"attributes":{"callback":null},"id":"38c53ff8-a1bb-4411-882d-624c2bda67a5","type":"DataRange1d"},{"attributes":{"overlay":{"id":"4e76cc5e-6069-4a41-b729-437377517f58","type":"BoxAnnotation"}},"id":"2dfca8fa-3663-4bf8-b3ec-7591ed5fd6ee","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"875df958-5e27-49d5-9d3d-e43c50781be2","type":"Row"}]},"id":"90622274-2278-43ae-a23d-547dc9eb6498","type":"Column"},{"attributes":{},"id":"f3d1c8db-51b0-4f3c-8cff-203ea123c9f1","type":"BasicTicker"},{"attributes":{"below":[{"id":"f0ce66e6-59ed-4bc7-97e4-402fae8263a5","type":"LinearAxis"}],"left":[{"id":"642a0507-640b-4e7f-84f1-10b98fa3e71f","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f0ce66e6-59ed-4bc7-97e4-402fae8263a5","type":"LinearAxis"},{"id":"7ed06e29-d622-4126-966e-5742d0dfdaee","type":"Grid"},{"id":"642a0507-640b-4e7f-84f1-10b98fa3e71f","type":"LinearAxis"},{"id":"e0da4d1a-c8bd-48d1-af14-acafbc7b6057","type":"Grid"},{"id":"4e76cc5e-6069-4a41-b729-437377517f58","type":"BoxAnnotation"},{"id":"cd90bd87-5e1b-4031-882f-5c8b7857ddee","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"a2c12ee7-6928-477f-8c10-175bba76c410","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"38c53ff8-a1bb-4411-882d-624c2bda67a5","type":"DataRange1d"},"x_scale":{"id":"fc06e81b-fe80-4f59-9cab-47d912166c06","type":"LinearScale"},"y_range":{"id":"de8f63d5-6d68-4ec4-966a-f83b053a1be0","type":"DataRange1d"},"y_scale":{"id":"e1d5585b-3065-4aec-95c3-e46c5837e619","type":"LinearScale"}},"id":"9edd9216-d0e2-4f0a-a74c-9beb0bdb8db4","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"81bb7099-504f-416e-8986-96f710a27452","type":"PanTool"},{"id":"4e54369d-07c4-48a7-924e-a7135fb9a8c6","type":"WheelZoomTool"},{"id":"9da66b4b-e169-4f1f-9cae-d54264745c7e","type":"BoxZoomTool"},{"id":"ae379b7a-68d2-4356-9144-f7d76c40cea2","type":"SaveTool"},{"id":"d0473cfc-63ab-458c-8d31-6dcf40f9a053","type":"ResetTool"},{"id":"35d73262-3923-41b1-9d35-ec6a92637d87","type":"HelpTool"}]},"id":"5a508d2e-a7fe-4b61-bd7c-ff6d00a991e3","type":"Toolbar"},{"attributes":{"overlay":{"id":"d6e621d7-d813-413e-b648-2071a1388a22","type":"BoxAnnotation"}},"id":"c06c50aa-f089-4bf4-917c-68dcc6804d10","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"de8f63d5-6d68-4ec4-966a-f83b053a1be0","type":"DataRange1d"},{"attributes":{},"id":"979900f0-6a40-4ae4-93cf-781d02183153","type":"BasicTicker"},{"attributes":{},"id":"e3df6732-f64d-490a-8289-ad18b95dc9f1","type":"LinearScale"},{"attributes":{"source":{"id":"166060b1-5822-4f65-98ee-c073e06d4718","type":"ColumnDataSource"}},"id":"c1c1558f-792e-4c51-bece-0cce3903c65a","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"166060b1-5822-4f65-98ee-c073e06d4718","type":"ColumnDataSource"},{"attributes":{},"id":"27b5f1cd-3911-41fe-a6ef-dad7ebfc2e73","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c85fc32e-5f26-4f0c-ba50-0e09d694db0b","type":"BoxAnnotation"},{"attributes":{"source":{"id":"823c0409-7afc-4963-8b5a-83efd24ed603","type":"ColumnDataSource"}},"id":"afd5c9e8-fd05-41ce-a619-9d04f45b5b47","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"94072aaf-f221-48fd-a60f-85b935ea439c","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"e761ccdf-c581-436b-b01e-5afa05319ce3","subtype":"Figure","type":"Plot"},{"id":"9edd9216-d0e2-4f0a-a74c-9beb0bdb8db4","subtype":"Figure","type":"Plot"},{"id":"9f645f95-01c2-4f0d-aedc-be2fe09a93c3","subtype":"Figure","type":"Plot"}]},"id":"875df958-5e27-49d5-9d3d-e43c50781be2","type":"Row"},{"attributes":{},"id":"da767349-e4a4-496f-9d20-a50ca240b94b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2a31c6f8-1093-4fe7-a3a1-95dfa59a2742","type":"BasicTickFormatter"},"plot":{"id":"9f645f95-01c2-4f0d-aedc-be2fe09a93c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"c68bb11b-80d5-4956-931c-6f1427e6bea7","type":"BasicTicker"}},"id":"825f86bf-bbef-4578-b3d3-0f162e94409c","type":"LinearAxis"},{"attributes":{},"id":"ae379b7a-68d2-4356-9144-f7d76c40cea2","type":"SaveTool"},{"attributes":{},"id":"269858d5-5c53-4343-9834-0a66e91f84d0","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"9edd9216-d0e2-4f0a-a74c-9beb0bdb8db4","subtype":"Figure","type":"Plot"},"ticker":{"id":"90e356dd-d501-4554-86f1-e8d24c45801b","type":"BasicTicker"}},"id":"e0da4d1a-c8bd-48d1-af14-acafbc7b6057","type":"Grid"},{"attributes":{},"id":"2caab619-e8f6-46b5-a1c5-6735d23df7da","type":"BasicTickFormatter"},{"attributes":{},"id":"d0473cfc-63ab-458c-8d31-6dcf40f9a053","type":"ResetTool"},{"attributes":{},"id":"c68bb11b-80d5-4956-931c-6f1427e6bea7","type":"BasicTicker"},{"attributes":{"overlay":{"id":"c85fc32e-5f26-4f0c-ba50-0e09d694db0b","type":"BoxAnnotation"}},"id":"9da66b4b-e169-4f1f-9cae-d54264745c7e","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9edd9216-d0e2-4f0a-a74c-9beb0bdb8db4","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3e48501-0e2c-41df-900d-0bce72f7b318","type":"BasicTicker"}},"id":"7ed06e29-d622-4126-966e-5742d0dfdaee","type":"Grid"},{"attributes":{"plot":{"id":"9f645f95-01c2-4f0d-aedc-be2fe09a93c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cded47b-ddec-41ff-8c1c-27db60b9fa49","type":"BasicTicker"}},"id":"64b6fdac-23a9-4cf5-8dcc-4f13d34449fd","type":"Grid"},{"attributes":{},"id":"fc06e81b-fe80-4f59-9cab-47d912166c06","type":"LinearScale"},{"attributes":{},"id":"4e54369d-07c4-48a7-924e-a7135fb9a8c6","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4b53d5f-6ef1-46c4-907f-6fdd5ea9c4ec","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"269858d5-5c53-4343-9834-0a66e91f84d0","type":"PanTool"},{"id":"b80c746d-bb2e-437f-a67e-195774df7170","type":"WheelZoomTool"},{"id":"c06c50aa-f089-4bf4-917c-68dcc6804d10","type":"BoxZoomTool"},{"id":"86794a1f-6320-452b-a846-2036d2752352","type":"SaveTool"},{"id":"4646fc1b-8a3d-46f0-a3ea-d0957b424cd4","type":"ResetTool"},{"id":"7aa0fb25-67cf-4bad-a126-134c8765f538","type":"HelpTool"}]},"id":"8930a5d7-22cf-4fa9-9220-6db66c8d52c9","type":"Toolbar"},{"attributes":{},"id":"ebfcd6fe-28c4-4349-bec3-3439a2d4a6ce","type":"BasicTickFormatter"},{"attributes":{},"id":"35d73262-3923-41b1-9d35-ec6a92637d87","type":"HelpTool"},{"attributes":{},"id":"e1d5585b-3065-4aec-95c3-e46c5837e619","type":"LinearScale"},{"attributes":{"formatter":{"id":"ebfcd6fe-28c4-4349-bec3-3439a2d4a6ce","type":"BasicTickFormatter"},"plot":{"id":"e761ccdf-c581-436b-b01e-5afa05319ce3","subtype":"Figure","type":"Plot"},"ticker":{"id":"979900f0-6a40-4ae4-93cf-781d02183153","type":"BasicTicker"}},"id":"c6b53ca8-02b5-46cd-98cf-42e9aa61096d","type":"LinearAxis"},{"attributes":{},"id":"4c93192d-8e7c-4a0e-bd1f-f5f121da58b0","type":"LinearScale"},{"attributes":{"data_source":{"id":"823c0409-7afc-4963-8b5a-83efd24ed603","type":"ColumnDataSource"},"glyph":{"id":"3f5b3a27-1396-41b8-b5f0-ca03cd258f25","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26873434-cfa3-4391-8001-5e8d087948ff","type":"Circle"},"selection_glyph":null,"view":{"id":"afd5c9e8-fd05-41ce-a619-9d04f45b5b47","type":"CDSView"}},"id":"60f20a2e-12e9-4583-a728-ad390547d8d9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a12cd08e-e92e-4fe1-9706-97ac4d99cb03","type":"Triangle"},{"attributes":{"callback":null},"id":"a8b5d184-46ed-4c0c-82e7-4c1ab3bbd631","type":"DataRange1d"},{"attributes":{"below":[{"id":"c6b53ca8-02b5-46cd-98cf-42e9aa61096d","type":"LinearAxis"}],"left":[{"id":"fc656f8b-0e66-43fb-9739-e26290c163c6","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c6b53ca8-02b5-46cd-98cf-42e9aa61096d","type":"LinearAxis"},{"id":"03a6d834-9c7d-41c2-8bd9-32bd90417df1","type":"Grid"},{"id":"fc656f8b-0e66-43fb-9739-e26290c163c6","type":"LinearAxis"},{"id":"6a7ebfbc-0ebe-4088-a106-f77168ed8ddc","type":"Grid"},{"id":"c85fc32e-5f26-4f0c-ba50-0e09d694db0b","type":"BoxAnnotation"},{"id":"60f20a2e-12e9-4583-a728-ad390547d8d9","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"5a508d2e-a7fe-4b61-bd7c-ff6d00a991e3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"38c53ff8-a1bb-4411-882d-624c2bda67a5","type":"DataRange1d"},"x_scale":{"id":"be6e155a-a9ca-4c10-9d18-f0512fcb4fd1","type":"LinearScale"},"y_range":{"id":"de8f63d5-6d68-4ec4-966a-f83b053a1be0","type":"DataRange1d"},"y_scale":{"id":"674a9266-1110-42d8-aac6-18244f0d5449","type":"LinearScale"}},"id":"e761ccdf-c581-436b-b01e-5afa05319ce3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"90e356dd-d501-4554-86f1-e8d24c45801b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8423858-efb7-4ecf-9a03-5024ff664dc8","type":"Square"},{"attributes":{"formatter":{"id":"da767349-e4a4-496f-9d20-a50ca240b94b","type":"BasicTickFormatter"},"plot":{"id":"e761ccdf-c581-436b-b01e-5afa05319ce3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3d1c8db-51b0-4f3c-8cff-203ea123c9f1","type":"BasicTicker"}},"id":"fc656f8b-0e66-43fb-9739-e26290c163c6","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d6e621d7-d813-413e-b648-2071a1388a22","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"2caab619-e8f6-46b5-a1c5-6735d23df7da","type":"BasicTickFormatter"},"plot":{"id":"9edd9216-d0e2-4f0a-a74c-9beb0bdb8db4","subtype":"Figure","type":"Plot"},"ticker":{"id":"90e356dd-d501-4554-86f1-e8d24c45801b","type":"BasicTicker"}},"id":"642a0507-640b-4e7f-84f1-10b98fa3e71f","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"823c0409-7afc-4963-8b5a-83efd24ed603","type":"ColumnDataSource"},{"attributes":{},"id":"ddb52b96-f763-4539-a6c1-6657f92a210b","type":"PanTool"},{"attributes":{},"id":"e928c7ee-b064-41ea-b4bd-7d09aa210055","type":"SaveTool"},{"attributes":{},"id":"b80c746d-bb2e-437f-a67e-195774df7170","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"29e86ece-7d61-4000-8148-c16531eb2e45","type":"BasicTickFormatter"},"plot":{"id":"9f645f95-01c2-4f0d-aedc-be2fe09a93c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cded47b-ddec-41ff-8c1c-27db60b9fa49","type":"BasicTicker"}},"id":"682341aa-1d30-4f21-9e26-3df18e2ab47a","type":"LinearAxis"},{"attributes":{},"id":"2355be4d-559a-44fc-b881-6284cd272e3e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2355be4d-559a-44fc-b881-6284cd272e3e","type":"BasicTickFormatter"},"plot":{"id":"9edd9216-d0e2-4f0a-a74c-9beb0bdb8db4","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3e48501-0e2c-41df-900d-0bce72f7b318","type":"BasicTicker"}},"id":"f0ce66e6-59ed-4bc7-97e4-402fae8263a5","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"9f645f95-01c2-4f0d-aedc-be2fe09a93c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"c68bb11b-80d5-4956-931c-6f1427e6bea7","type":"BasicTicker"}},"id":"bff6f5c0-0b39-4dfd-82fc-942f62754642","type":"Grid"},{"attributes":{},"id":"29e86ece-7d61-4000-8148-c16531eb2e45","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26873434-cfa3-4391-8001-5e8d087948ff","type":"Circle"},{"attributes":{},"id":"86794a1f-6320-452b-a846-2036d2752352","type":"SaveTool"},{"attributes":{},"id":"81bb7099-504f-416e-8986-96f710a27452","type":"PanTool"},{"attributes":{},"id":"4646fc1b-8a3d-46f0-a3ea-d0957b424cd4","type":"ResetTool"},{"attributes":{},"id":"674a9266-1110-42d8-aac6-18244f0d5449","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4e76cc5e-6069-4a41-b729-437377517f58","type":"BoxAnnotation"},{"attributes":{},"id":"9f95af81-fb8c-4d99-983f-78e956a453f2","type":"WheelZoomTool"},{"attributes":{},"id":"b63599ca-7e2d-4f91-a584-ea1210d5974e","type":"HelpTool"},{"attributes":{},"id":"7aa0fb25-67cf-4bad-a126-134c8765f538","type":"HelpTool"},{"attributes":{"data_source":{"id":"166060b1-5822-4f65-98ee-c073e06d4718","type":"ColumnDataSource"},"glyph":{"id":"a8423858-efb7-4ecf-9a03-5024ff664dc8","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a4b53d5f-6ef1-46c4-907f-6fdd5ea9c4ec","type":"Square"},"selection_glyph":null,"view":{"id":"c1c1558f-792e-4c51-bece-0cce3903c65a","type":"CDSView"}},"id":"3dc09aba-1c26-4b61-a878-f084aecccc49","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"94072aaf-f221-48fd-a60f-85b935ea439c","type":"ColumnDataSource"},"glyph":{"id":"3210f49d-a07a-447e-a166-31faec8d49c2","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a12cd08e-e92e-4fe1-9706-97ac4d99cb03","type":"Triangle"},"selection_glyph":null,"view":{"id":"f283f717-51cb-4eb8-b4f1-931250edef60","type":"CDSView"}},"id":"cd90bd87-5e1b-4031-882f-5c8b7857ddee","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e761ccdf-c581-436b-b01e-5afa05319ce3","subtype":"Figure","type":"Plot"},"ticker":{"id":"979900f0-6a40-4ae4-93cf-781d02183153","type":"BasicTicker"}},"id":"03a6d834-9c7d-41c2-8bd9-32bd90417df1","type":"Grid"},{"attributes":{"source":{"id":"94072aaf-f221-48fd-a60f-85b935ea439c","type":"ColumnDataSource"}},"id":"f283f717-51cb-4eb8-b4f1-931250edef60","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3210f49d-a07a-447e-a166-31faec8d49c2","type":"Triangle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ddb52b96-f763-4539-a6c1-6657f92a210b","type":"PanTool"},{"id":"9f95af81-fb8c-4d99-983f-78e956a453f2","type":"WheelZoomTool"},{"id":"2dfca8fa-3663-4bf8-b3ec-7591ed5fd6ee","type":"BoxZoomTool"},{"id":"e928c7ee-b064-41ea-b4bd-7d09aa210055","type":"SaveTool"},{"id":"27b5f1cd-3911-41fe-a6ef-dad7ebfc2e73","type":"ResetTool"},{"id":"b63599ca-7e2d-4f91-a584-ea1210d5974e","type":"HelpTool"}]},"id":"a2c12ee7-6928-477f-8c10-175bba76c410","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f5b3a27-1396-41b8-b5f0-ca03cd258f25","type":"Circle"},{"attributes":{},"id":"be6e155a-a9ca-4c10-9d18-f0512fcb4fd1","type":"LinearScale"},{"attributes":{},"id":"2a31c6f8-1093-4fe7-a3a1-95dfa59a2742","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"682341aa-1d30-4f21-9e26-3df18e2ab47a","type":"LinearAxis"}],"left":[{"id":"825f86bf-bbef-4578-b3d3-0f162e94409c","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"682341aa-1d30-4f21-9e26-3df18e2ab47a","type":"LinearAxis"},{"id":"64b6fdac-23a9-4cf5-8dcc-4f13d34449fd","type":"Grid"},{"id":"825f86bf-bbef-4578-b3d3-0f162e94409c","type":"LinearAxis"},{"id":"bff6f5c0-0b39-4dfd-82fc-942f62754642","type":"Grid"},{"id":"d6e621d7-d813-413e-b648-2071a1388a22","type":"BoxAnnotation"},{"id":"3dc09aba-1c26-4b61-a878-f084aecccc49","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8930a5d7-22cf-4fa9-9220-6db66c8d52c9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"38c53ff8-a1bb-4411-882d-624c2bda67a5","type":"DataRange1d"},"x_scale":{"id":"e3df6732-f64d-490a-8289-ad18b95dc9f1","type":"LinearScale"},"y_range":{"id":"a8b5d184-46ed-4c0c-82e7-4c1ab3bbd631","type":"DataRange1d"},"y_scale":{"id":"4c93192d-8e7c-4a0e-bd1f-f5f121da58b0","type":"LinearScale"}},"id":"9f645f95-01c2-4f0d-aedc-be2fe09a93c3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f3e48501-0e2c-41df-900d-0bce72f7b318","type":"BasicTicker"},{"attributes":{},"id":"0cded47b-ddec-41ff-8c1c-27db60b9fa49","type":"BasicTicker"}],"root_ids":["90622274-2278-43ae-a23d-547dc9eb6498"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"7c91a098-a37d-43a8-9fca-cfb44b0a2c49","elementid":"3dd10d9c-fc76-479f-a7f1-51e000c4765c","modelid":"90622274-2278-43ae-a23d-547dc9eb6498"}];
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