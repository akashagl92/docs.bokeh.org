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
      };var element = document.getElementById("b8fe7c0a-87f1-46f3-a310-a87028e19097");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b8fe7c0a-87f1-46f3-a310-a87028e19097' but no matching script tag was found. ")
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
                    var docs_json = '{"95c1131d-df08-409a-8f5e-0b5d8ce13af2":{"roots":{"references":[{"attributes":{"callback":null},"id":"03660b9c-027f-46ab-b884-83deeae2f63e","type":"DataRange1d"},{"attributes":{"callback":null},"id":"29af7332-d6e5-4069-9ab6-db0ff98c9fc8","type":"DataRange1d"},{"attributes":{},"id":"747e8a33-ec1b-478b-b885-7f549e2935a5","type":"LinearScale"},{"attributes":{},"id":"312f842f-bd5e-416d-8045-dddf127c3266","type":"SaveTool"},{"attributes":{"below":[{"id":"d92b929d-c455-466b-809c-2361d3bd1b1a","type":"LinearAxis"}],"left":[{"id":"07a61fbe-943b-44f6-99ba-2798d34277cb","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d92b929d-c455-466b-809c-2361d3bd1b1a","type":"LinearAxis"},{"id":"5a079e5f-d59f-478e-bf99-b7c9e7bce1d1","type":"Grid"},{"id":"07a61fbe-943b-44f6-99ba-2798d34277cb","type":"LinearAxis"},{"id":"9f7fd775-c4d4-4f66-ad7e-b1aed8a49093","type":"Grid"},{"id":"638f6b59-e518-458c-8d45-157a47262dda","type":"BoxAnnotation"},{"id":"c209e67e-7bfe-4c9d-a774-aaa2ad96b559","type":"GlyphRenderer"}],"title":{"id":"924d2f3f-820f-4a1d-bb35-067d7699be3b","type":"Title"},"toolbar":{"id":"a5e06ba8-b2e7-4f4a-9756-8abd03645f85","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c5f01234-42e6-46a2-b1a0-4d98f44b32ff","type":"DataRange1d"},"x_scale":{"id":"747e8a33-ec1b-478b-b885-7f549e2935a5","type":"LinearScale"},"y_range":{"id":"8d5a3b82-82d2-462c-960c-f6b6fe115d41","type":"DataRange1d"},"y_scale":{"id":"fea5d6f8-253d-4bf0-bda6-b8b3714d6a1e","type":"LinearScale"}},"id":"1faf84c1-2b12-49ae-a364-6c88189ee90b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12cf393d-be62-4194-b3a5-dc8f3d76e2a4","type":"HelpTool"},{"attributes":{"formatter":{"id":"25b6e955-bed9-41ec-aefb-9dd8b222b9d7","type":"BasicTickFormatter"},"plot":{"id":"e6b020eb-fbe0-48ec-87c3-54e79e08c31d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7f0d194-65a4-4804-be29-b5941847662e","type":"BasicTicker"}},"id":"ce3f9c89-a268-491e-9109-2d57bf1aa015","type":"LinearAxis"},{"attributes":{"source":{"id":"957dfcbc-2b66-45c9-b798-2a800710c0da","type":"ColumnDataSource"}},"id":"c052acd8-0387-46d9-a089-c0dd3cf665e6","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"cb8929b9-4a68-443e-8e77-4c2a58ce66f9","type":"Title"},{"attributes":{},"id":"2fd7478d-e405-4b91-8ede-333318b08f7d","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"3ca4b33d-be70-413a-889a-7f48b9238a52","type":"BoxAnnotation"}},"id":"287d15e0-12db-488e-8b92-b0b1648c88fb","type":"BoxZoomTool"},{"attributes":{},"id":"16af4241-26d6-446c-a9bc-9d9c154a806c","type":"HelpTool"},{"attributes":{},"id":"d33f4e78-d095-441e-9bda-0fdcd6f09f35","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d5378528-b5b2-4ead-92bf-b50d15e24089","type":"PanTool"},{"id":"1d680b52-ce27-4cb2-902a-dda26fed46c2","type":"WheelZoomTool"},{"id":"a38315ef-20cb-4409-b338-00e4b3c691cd","type":"BoxZoomTool"},{"id":"312f842f-bd5e-416d-8045-dddf127c3266","type":"SaveTool"},{"id":"34921047-ff42-4b47-9e22-bcc7d0985ae9","type":"ResetTool"},{"id":"12cf393d-be62-4194-b3a5-dc8f3d76e2a4","type":"HelpTool"}]},"id":"a5e06ba8-b2e7-4f4a-9756-8abd03645f85","type":"Toolbar"},{"attributes":{"overlay":{"id":"638f6b59-e518-458c-8d45-157a47262dda","type":"BoxAnnotation"}},"id":"a38315ef-20cb-4409-b338-00e4b3c691cd","type":"BoxZoomTool"},{"attributes":{},"id":"f8e736a5-57b7-446b-be3e-e50e3a61dc9d","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"bc15bde6-cd9e-4183-9518-99a4be1e5faf","type":"ColumnDataSource"}},"id":"58570344-aec8-4bca-bf02-f39ed1622ca3","type":"CDSView"},{"attributes":{},"id":"f156f0f3-792a-4111-8fb5-1b9e531cb578","type":"LinearScale"},{"attributes":{},"id":"c7758567-e66d-4674-8796-a48eae0f90bc","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"afa657f5-cfe2-4e02-8426-465afc831a15","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7758567-e66d-4674-8796-a48eae0f90bc","type":"BasicTicker"}},"id":"d68380ed-e208-4f4b-9783-6e1c3241f1ad","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"41532bdd-dc3d-4122-a401-e919c850ec4f","type":"Square"},{"attributes":{"children":[{"id":"1faf84c1-2b12-49ae-a364-6c88189ee90b","subtype":"Figure","type":"Plot"},{"id":"e6b020eb-fbe0-48ec-87c3-54e79e08c31d","subtype":"Figure","type":"Plot"}]},"id":"8adbef86-1343-40ad-84c7-697cbe223bfd","type":"Row"},{"attributes":{"formatter":{"id":"3eb0d31b-bd9d-443e-a342-f82fec90729b","type":"BasicTickFormatter"},"plot":{"id":"afa657f5-cfe2-4e02-8426-465afc831a15","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7758567-e66d-4674-8796-a48eae0f90bc","type":"BasicTicker"}},"id":"0328021f-392e-4836-825c-cd566212fbac","type":"LinearAxis"},{"attributes":{"children":[{"id":"8adbef86-1343-40ad-84c7-697cbe223bfd","type":"Row"},{"id":"4e22623d-1212-4c97-94cc-9a7f24e6aea3","type":"Row"}]},"id":"224dc8e1-ed4f-49f9-9a2b-09a17d1d69f7","type":"Column"},{"attributes":{"data_source":{"id":"d2bbf5c7-0b62-4651-9534-dc8a2cd4ce27","type":"ColumnDataSource"},"glyph":{"id":"a8d320d7-635d-4d30-b197-5b30d1be2c8d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ac0ef2e8-74f1-4c74-920d-b27289f85713","type":"Circle"},"selection_glyph":null,"view":{"id":"28211d86-a5cf-4a9d-80e8-9f411a6acb45","type":"CDSView"}},"id":"c209e67e-7bfe-4c9d-a774-aaa2ad96b559","type":"GlyphRenderer"},{"attributes":{},"id":"a7f0d194-65a4-4804-be29-b5941847662e","type":"BasicTicker"},{"attributes":{},"id":"25b6e955-bed9-41ec-aefb-9dd8b222b9d7","type":"BasicTickFormatter"},{"attributes":{},"id":"530485ec-7666-459f-aa7f-b790a0181d7a","type":"HelpTool"},{"attributes":{"children":[{"id":"67f00cc2-9aa6-4722-8903-9839c0fc5f8b","type":"ToolbarBox"},{"id":"224dc8e1-ed4f-49f9-9a2b-09a17d1d69f7","type":"Column"}]},"id":"c0d385ee-d498-4be8-9893-96d967193b02","type":"Column"},{"attributes":{"plot":null,"text":""},"id":"924d2f3f-820f-4a1d-bb35-067d7699be3b","type":"Title"},{"attributes":{"overlay":{"id":"a4edf017-4ee6-491d-b192-0f605b87d7d7","type":"BoxAnnotation"}},"id":"8b1d3bb6-cec4-4137-bfdb-de194f21ad3a","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"957dfcbc-2b66-45c9-b798-2a800710c0da","type":"ColumnDataSource"},{"attributes":{},"id":"cf2a3779-66ba-431f-b441-33be6754572e","type":"SaveTool"},{"attributes":{},"id":"34921047-ff42-4b47-9e22-bcc7d0985ae9","type":"ResetTool"},{"attributes":{},"id":"aaa63358-bcd6-4494-b5c3-0498811a7ac6","type":"ResetTool"},{"attributes":{"callback":null},"id":"8d5a3b82-82d2-462c-960c-f6b6fe115d41","type":"DataRange1d"},{"attributes":{},"id":"3643eb22-64fe-42ac-9424-2438c89c155f","type":"PanTool"},{"attributes":{},"id":"3ab79fba-e4e5-4c30-9795-ee7f2f215f59","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c5f01234-42e6-46a2-b1a0-4d98f44b32ff","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"638f6b59-e518-458c-8d45-157a47262dda","type":"BoxAnnotation"},{"attributes":{"toolbar":{"id":"34ebf7d6-4460-484d-932e-db8a7be87d8e","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"67f00cc2-9aa6-4722-8903-9839c0fc5f8b","type":"ToolbarBox"},{"attributes":{"children":[{"id":"afa657f5-cfe2-4e02-8426-465afc831a15","subtype":"Figure","type":"Plot"}]},"id":"4e22623d-1212-4c97-94cc-9a7f24e6aea3","type":"Row"},{"attributes":{"formatter":{"id":"fd4bf0ac-6a19-4cbc-9898-3a28056f4b27","type":"BasicTickFormatter"},"plot":{"id":"1faf84c1-2b12-49ae-a364-6c88189ee90b","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a58a776-1ffe-4902-b008-b849f6d7ba8a","type":"BasicTicker"}},"id":"d92b929d-c455-466b-809c-2361d3bd1b1a","type":"LinearAxis"},{"attributes":{"formatter":{"id":"f8e736a5-57b7-446b-be3e-e50e3a61dc9d","type":"BasicTickFormatter"},"plot":{"id":"afa657f5-cfe2-4e02-8426-465afc831a15","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ab79fba-e4e5-4c30-9795-ee7f2f215f59","type":"BasicTicker"}},"id":"b0f323d5-35a7-4e6a-836b-880ae8ed1af1","type":"LinearAxis"},{"attributes":{},"id":"0531a46c-216e-47a4-880c-327928f5136f","type":"BasicTicker"},{"attributes":{"tools":[{"id":"d5378528-b5b2-4ead-92bf-b50d15e24089","type":"PanTool"},{"id":"1d680b52-ce27-4cb2-902a-dda26fed46c2","type":"WheelZoomTool"},{"id":"a38315ef-20cb-4409-b338-00e4b3c691cd","type":"BoxZoomTool"},{"id":"312f842f-bd5e-416d-8045-dddf127c3266","type":"SaveTool"},{"id":"34921047-ff42-4b47-9e22-bcc7d0985ae9","type":"ResetTool"},{"id":"12cf393d-be62-4194-b3a5-dc8f3d76e2a4","type":"HelpTool"},{"id":"3643eb22-64fe-42ac-9424-2438c89c155f","type":"PanTool"},{"id":"d33f4e78-d095-441e-9bda-0fdcd6f09f35","type":"WheelZoomTool"},{"id":"287d15e0-12db-488e-8b92-b0b1648c88fb","type":"BoxZoomTool"},{"id":"cea88184-4168-4cf4-8410-c907111f0c42","type":"SaveTool"},{"id":"ce74221c-4846-4520-9763-5814f6677dbd","type":"ResetTool"},{"id":"530485ec-7666-459f-aa7f-b790a0181d7a","type":"HelpTool"},{"id":"80603123-912c-4ab5-a135-5dce3a518e6f","type":"PanTool"},{"id":"2fd7478d-e405-4b91-8ede-333318b08f7d","type":"WheelZoomTool"},{"id":"8b1d3bb6-cec4-4137-bfdb-de194f21ad3a","type":"BoxZoomTool"},{"id":"cf2a3779-66ba-431f-b441-33be6754572e","type":"SaveTool"},{"id":"aaa63358-bcd6-4494-b5c3-0498811a7ac6","type":"ResetTool"},{"id":"16af4241-26d6-446c-a9bc-9d9c154a806c","type":"HelpTool"}]},"id":"34ebf7d6-4460-484d-932e-db8a7be87d8e","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8d320d7-635d-4d30-b197-5b30d1be2c8d","type":"Circle"},{"attributes":{"formatter":{"id":"148ca76e-f184-4ee9-b8f0-c47012909571","type":"BasicTickFormatter"},"plot":{"id":"e6b020eb-fbe0-48ec-87c3-54e79e08c31d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0531a46c-216e-47a4-880c-327928f5136f","type":"BasicTicker"}},"id":"c81c9673-513a-40f4-8625-903915d3b2c0","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac0ef2e8-74f1-4c74-920d-b27289f85713","type":"Circle"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e9303fb7-3a92-4fa0-8c4b-34a2cc5b0ad1","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"e6b020eb-fbe0-48ec-87c3-54e79e08c31d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7f0d194-65a4-4804-be29-b5941847662e","type":"BasicTicker"}},"id":"732fbae1-821c-4554-b786-e57137974096","type":"Grid"},{"attributes":{"plot":{"id":"afa657f5-cfe2-4e02-8426-465afc831a15","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ab79fba-e4e5-4c30-9795-ee7f2f215f59","type":"BasicTicker"}},"id":"02b8defa-3c2d-47bd-b65b-6817b9258a67","type":"Grid"},{"attributes":{},"id":"d318af11-2569-4f57-a52a-e01e45fab65f","type":"BasicTicker"},{"attributes":{},"id":"fea5d6f8-253d-4bf0-bda6-b8b3714d6a1e","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"d2bbf5c7-0b62-4651-9534-dc8a2cd4ce27","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"bc15bde6-cd9e-4183-9518-99a4be1e5faf","type":"ColumnDataSource"},{"attributes":{},"id":"d5378528-b5b2-4ead-92bf-b50d15e24089","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3643eb22-64fe-42ac-9424-2438c89c155f","type":"PanTool"},{"id":"d33f4e78-d095-441e-9bda-0fdcd6f09f35","type":"WheelZoomTool"},{"id":"287d15e0-12db-488e-8b92-b0b1648c88fb","type":"BoxZoomTool"},{"id":"cea88184-4168-4cf4-8410-c907111f0c42","type":"SaveTool"},{"id":"ce74221c-4846-4520-9763-5814f6677dbd","type":"ResetTool"},{"id":"530485ec-7666-459f-aa7f-b790a0181d7a","type":"HelpTool"}]},"id":"9202a12a-0bad-46cd-9ac2-b192c828b440","type":"Toolbar"},{"attributes":{},"id":"fd4bf0ac-6a19-4cbc-9898-3a28056f4b27","type":"BasicTickFormatter"},{"attributes":{},"id":"86de09f8-83d6-497e-983f-1726eb6f2588","type":"BasicTickFormatter"},{"attributes":{},"id":"148ca76e-f184-4ee9-b8f0-c47012909571","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"1faf84c1-2b12-49ae-a364-6c88189ee90b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d318af11-2569-4f57-a52a-e01e45fab65f","type":"BasicTicker"}},"id":"9f7fd775-c4d4-4f66-ad7e-b1aed8a49093","type":"Grid"},{"attributes":{"plot":{"id":"1faf84c1-2b12-49ae-a364-6c88189ee90b","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a58a776-1ffe-4902-b008-b849f6d7ba8a","type":"BasicTicker"}},"id":"5a079e5f-d59f-478e-bf99-b7c9e7bce1d1","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a4edf017-4ee6-491d-b192-0f605b87d7d7","type":"BoxAnnotation"},{"attributes":{"source":{"id":"d2bbf5c7-0b62-4651-9534-dc8a2cd4ce27","type":"ColumnDataSource"}},"id":"28211d86-a5cf-4a9d-80e8-9f411a6acb45","type":"CDSView"},{"attributes":{"plot":{"id":"e6b020eb-fbe0-48ec-87c3-54e79e08c31d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0531a46c-216e-47a4-880c-327928f5136f","type":"BasicTicker"}},"id":"005d862d-8afb-4a20-bc21-1c929e6f1d6d","type":"Grid"},{"attributes":{},"id":"80603123-912c-4ab5-a135-5dce3a518e6f","type":"PanTool"},{"attributes":{"formatter":{"id":"86de09f8-83d6-497e-983f-1726eb6f2588","type":"BasicTickFormatter"},"plot":{"id":"1faf84c1-2b12-49ae-a364-6c88189ee90b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d318af11-2569-4f57-a52a-e01e45fab65f","type":"BasicTicker"}},"id":"07a61fbe-943b-44f6-99ba-2798d34277cb","type":"LinearAxis"},{"attributes":{},"id":"cc0e8d14-ed3a-4a07-b114-de28abe2bebc","type":"LinearScale"},{"attributes":{},"id":"4f631bb1-67a1-4de5-ab0c-317b16201eca","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b892f5d8-bb02-46d5-b4e4-2df2f94d7913","type":"Triangle"},{"attributes":{"data_source":{"id":"957dfcbc-2b66-45c9-b798-2a800710c0da","type":"ColumnDataSource"},"glyph":{"id":"b892f5d8-bb02-46d5-b4e4-2df2f94d7913","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ab7e4901-5e45-424e-9666-3e210c2ef31e","type":"Triangle"},"selection_glyph":null,"view":{"id":"c052acd8-0387-46d9-a089-c0dd3cf665e6","type":"CDSView"}},"id":"0f2e8f66-114e-41dc-bd2c-c18b12082f96","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bc15bde6-cd9e-4183-9518-99a4be1e5faf","type":"ColumnDataSource"},"glyph":{"id":"e9303fb7-3a92-4fa0-8c4b-34a2cc5b0ad1","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"41532bdd-dc3d-4122-a401-e919c850ec4f","type":"Square"},"selection_glyph":null,"view":{"id":"58570344-aec8-4bca-bf02-f39ed1622ca3","type":"CDSView"}},"id":"903c3323-6183-4867-a234-e320896d4bcd","type":"GlyphRenderer"},{"attributes":{},"id":"3eb0d31b-bd9d-443e-a342-f82fec90729b","type":"BasicTickFormatter"},{"attributes":{},"id":"25981cbb-7473-4c8f-a016-8b5951b515d6","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"dc166bf7-3742-43e1-89c5-b556a27321c6","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab7e4901-5e45-424e-9666-3e210c2ef31e","type":"Triangle"},{"attributes":{},"id":"cea88184-4168-4cf4-8410-c907111f0c42","type":"SaveTool"},{"attributes":{"below":[{"id":"c81c9673-513a-40f4-8625-903915d3b2c0","type":"LinearAxis"}],"left":[{"id":"ce3f9c89-a268-491e-9109-2d57bf1aa015","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c81c9673-513a-40f4-8625-903915d3b2c0","type":"LinearAxis"},{"id":"005d862d-8afb-4a20-bc21-1c929e6f1d6d","type":"Grid"},{"id":"ce3f9c89-a268-491e-9109-2d57bf1aa015","type":"LinearAxis"},{"id":"732fbae1-821c-4554-b786-e57137974096","type":"Grid"},{"id":"3ca4b33d-be70-413a-889a-7f48b9238a52","type":"BoxAnnotation"},{"id":"0f2e8f66-114e-41dc-bd2c-c18b12082f96","type":"GlyphRenderer"}],"title":{"id":"dc166bf7-3742-43e1-89c5-b556a27321c6","type":"Title"},"toolbar":{"id":"9202a12a-0bad-46cd-9ac2-b192c828b440","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"03660b9c-027f-46ab-b884-83deeae2f63e","type":"DataRange1d"},"x_scale":{"id":"cc0e8d14-ed3a-4a07-b114-de28abe2bebc","type":"LinearScale"},"y_range":{"id":"29af7332-d6e5-4069-9ab6-db0ff98c9fc8","type":"DataRange1d"},"y_scale":{"id":"f156f0f3-792a-4111-8fb5-1b9e531cb578","type":"LinearScale"}},"id":"e6b020eb-fbe0-48ec-87c3-54e79e08c31d","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"80603123-912c-4ab5-a135-5dce3a518e6f","type":"PanTool"},{"id":"2fd7478d-e405-4b91-8ede-333318b08f7d","type":"WheelZoomTool"},{"id":"8b1d3bb6-cec4-4137-bfdb-de194f21ad3a","type":"BoxZoomTool"},{"id":"cf2a3779-66ba-431f-b441-33be6754572e","type":"SaveTool"},{"id":"aaa63358-bcd6-4494-b5c3-0498811a7ac6","type":"ResetTool"},{"id":"16af4241-26d6-446c-a9bc-9d9c154a806c","type":"HelpTool"}]},"id":"161efd6b-ac79-41ab-9bb9-4dc942e246d8","type":"Toolbar"},{"attributes":{},"id":"1d680b52-ce27-4cb2-902a-dda26fed46c2","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"9b0ca5c5-fb39-454a-8439-ec0af9f1e19d","type":"DataRange1d"},{"attributes":{},"id":"ce74221c-4846-4520-9763-5814f6677dbd","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ca4b33d-be70-413a-889a-7f48b9238a52","type":"BoxAnnotation"},{"attributes":{},"id":"1a58a776-1ffe-4902-b008-b849f6d7ba8a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9f0bc4ba-f26d-4cf1-9ea4-0ae205d9304b","type":"DataRange1d"},{"attributes":{"below":[{"id":"b0f323d5-35a7-4e6a-836b-880ae8ed1af1","type":"LinearAxis"}],"left":[{"id":"0328021f-392e-4836-825c-cd566212fbac","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b0f323d5-35a7-4e6a-836b-880ae8ed1af1","type":"LinearAxis"},{"id":"02b8defa-3c2d-47bd-b65b-6817b9258a67","type":"Grid"},{"id":"0328021f-392e-4836-825c-cd566212fbac","type":"LinearAxis"},{"id":"d68380ed-e208-4f4b-9783-6e1c3241f1ad","type":"Grid"},{"id":"a4edf017-4ee6-491d-b192-0f605b87d7d7","type":"BoxAnnotation"},{"id":"903c3323-6183-4867-a234-e320896d4bcd","type":"GlyphRenderer"}],"title":{"id":"cb8929b9-4a68-443e-8e77-4c2a58ce66f9","type":"Title"},"toolbar":{"id":"161efd6b-ac79-41ab-9bb9-4dc942e246d8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9b0ca5c5-fb39-454a-8439-ec0af9f1e19d","type":"DataRange1d"},"x_scale":{"id":"4f631bb1-67a1-4de5-ab0c-317b16201eca","type":"LinearScale"},"y_range":{"id":"9f0bc4ba-f26d-4cf1-9ea4-0ae205d9304b","type":"DataRange1d"},"y_scale":{"id":"25981cbb-7473-4c8f-a016-8b5951b515d6","type":"LinearScale"}},"id":"afa657f5-cfe2-4e02-8426-465afc831a15","subtype":"Figure","type":"Plot"}],"root_ids":["c0d385ee-d498-4be8-9893-96d967193b02"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"95c1131d-df08-409a-8f5e-0b5d8ce13af2","elementid":"b8fe7c0a-87f1-46f3-a310-a87028e19097","modelid":"c0d385ee-d498-4be8-9893-96d967193b02"}];
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