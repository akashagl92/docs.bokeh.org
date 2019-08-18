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
      };var element = document.getElementById("90a22dcf-3b5e-45bb-9600-3d20bc4c54ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '90a22dcf-3b5e-45bb-9600-3d20bc4c54ed' but no matching script tag was found. ")
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
                    var docs_json = '{"8680085d-e605-44c7-8963-e4c14a5de439":{"roots":{"references":[{"attributes":{},"id":"b03c136c-9d01-4bc0-aa81-12295bb4f72b","type":"LinearScale"},{"attributes":{},"id":"8044d334-37dc-456e-9c99-575f7f7a1f03","type":"PanTool"},{"attributes":{"plot":{"id":"bdda76e9-99dd-481e-96d2-d7efae7a810b","subtype":"Figure","type":"Plot"},"ticker":{"id":"565d6e0c-ef93-44d6-8458-2fc11bf28228","type":"BasicTicker"}},"id":"dd739343-30bb-4859-b742-ce20f826563d","type":"Grid"},{"attributes":{"callback":null},"id":"d804a7d0-0500-400e-8914-38ee89635de9","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"59535d77-1804-452d-9ec0-dec34023b975","subtype":"Figure","type":"Plot"},"ticker":{"id":"869fde33-afe8-4e65-81ae-ce65b7dd0a22","type":"BasicTicker"}},"id":"7e82997e-651b-41b5-87d4-fb781cf9a33d","type":"Grid"},{"attributes":{"source":{"id":"f34bf67f-95df-4ead-9fbe-722b4ea7944b","type":"ColumnDataSource"}},"id":"02177239-efd6-4a28-a726-8582f949b99f","type":"CDSView"},{"attributes":{},"id":"305cc7ad-6c42-43d3-972e-a3ef9898d450","type":"SaveTool"},{"attributes":{},"id":"657d908d-943c-4317-8356-a175dbb33caa","type":"BasicTicker"},{"attributes":{},"id":"30c59f35-00c0-4a3d-949a-12d0ae4c3ec5","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"1f7b4637-7242-4316-b420-ea0408683f01","type":"BasicTickFormatter"},"plot":{"id":"ea13655b-ceed-4d1b-901f-ffba0f71e53f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ce826d9-70d0-43ff-a603-8028dd10a4bd","type":"BasicTicker"}},"id":"e6935a4c-0328-4ae0-9448-7fc7132958b7","type":"LinearAxis"},{"attributes":{},"id":"8ce826d9-70d0-43ff-a603-8028dd10a4bd","type":"BasicTicker"},{"attributes":{},"id":"1f7b4637-7242-4316-b420-ea0408683f01","type":"BasicTickFormatter"},{"attributes":{},"id":"0f836356-362d-442e-bef3-1cf8a50ced5c","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8044d334-37dc-456e-9c99-575f7f7a1f03","type":"PanTool"},{"id":"30c59f35-00c0-4a3d-949a-12d0ae4c3ec5","type":"WheelZoomTool"},{"id":"d8392672-0319-470a-9cee-db5c5a1c2585","type":"BoxZoomTool"},{"id":"e39abcf0-c498-41c3-85f5-b2c8ec46adce","type":"SaveTool"},{"id":"bb66e6d9-97fb-4d82-8b2d-345cdc7335c9","type":"ResetTool"},{"id":"d0ad79a0-9ffd-48dc-897f-bc74bf02b26f","type":"HelpTool"}]},"id":"f740ab3b-cc7a-459b-b3fc-65b7fbf1e1ed","type":"Toolbar"},{"attributes":{"formatter":{"id":"09681153-bba8-4d31-9ddd-2d67dab2b060","type":"BasicTickFormatter"},"plot":{"id":"59535d77-1804-452d-9ec0-dec34023b975","subtype":"Figure","type":"Plot"},"ticker":{"id":"657d908d-943c-4317-8356-a175dbb33caa","type":"BasicTicker"}},"id":"e4e44404-bb1f-47ce-9815-693e84b48c11","type":"LinearAxis"},{"attributes":{"overlay":{"id":"312390ea-6f73-4ce9-a1c9-d15ec15502a3","type":"BoxAnnotation"}},"id":"eec93e80-6a99-476e-9270-e1aa2520748d","type":"BoxZoomTool"},{"attributes":{},"id":"280764b5-a2e3-441c-9c94-1b0c8ba7248c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"370e3145-5238-4da3-ad77-e12b01982bc8","type":"BasicTickFormatter"},"plot":{"id":"59535d77-1804-452d-9ec0-dec34023b975","subtype":"Figure","type":"Plot"},"ticker":{"id":"869fde33-afe8-4e65-81ae-ce65b7dd0a22","type":"BasicTicker"}},"id":"11af3f19-a5bd-40cd-a870-b6c58b74f9db","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2cfea2a0-3ea3-4891-b39d-76ab753c3c90","type":"DataRange1d"},{"attributes":{"data_source":{"id":"0c0ba7b4-1608-41a4-8d6c-9007b211989f","type":"ColumnDataSource"},"glyph":{"id":"58538053-7eb4-4b21-9c05-b0a231788b8d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fcaf2893-0f32-4da8-95e5-067c8e8471b4","type":"Circle"},"selection_glyph":null,"view":{"id":"349d52ee-aa69-4d2b-93cd-db033d5d3d2e","type":"CDSView"}},"id":"1fc73c7a-4b6d-4941-8b5c-97822527041a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ea13655b-ceed-4d1b-901f-ffba0f71e53f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ce826d9-70d0-43ff-a603-8028dd10a4bd","type":"BasicTicker"}},"id":"5eafeb29-5530-48ce-83e8-5df5dd4b179b","type":"Grid"},{"attributes":{},"id":"2d7502d5-f610-4b15-93de-91ba1ac2b9a2","type":"LinearScale"},{"attributes":{},"id":"184de679-bcd0-427c-b6c4-925626170d5f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ea13655b-ceed-4d1b-901f-ffba0f71e53f","subtype":"Figure","type":"Plot"},"ticker":{"id":"184de679-bcd0-427c-b6c4-925626170d5f","type":"BasicTicker"}},"id":"34633948-f71c-45f0-b703-b55e904e9500","type":"Grid"},{"attributes":{},"id":"728726fd-2750-404a-96c7-6db889390c97","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"f34bf67f-95df-4ead-9fbe-722b4ea7944b","type":"ColumnDataSource"},"glyph":{"id":"d5845815-bef4-4176-8907-8dd2b80b367e","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3893a4f0-d80c-4ab9-ab03-daa3fb2a9084","type":"Square"},"selection_glyph":null,"view":{"id":"02177239-efd6-4a28-a726-8582f949b99f","type":"CDSView"}},"id":"0595edce-9b82-475d-a7dd-1a0fe6e6889c","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0e934b11-63e6-480d-a0e8-de29ce600e98","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"dd5d25d3-15df-41e7-b2a9-3b9e9f64614a","type":"ColumnDataSource"},{"attributes":{},"id":"e39abcf0-c498-41c3-85f5-b2c8ec46adce","type":"SaveTool"},{"attributes":{},"id":"6c46f055-e8e9-44f1-bc99-cffedb29507b","type":"LinearScale"},{"attributes":{},"id":"0c67589d-abe9-4426-9d6e-0bece8bad615","type":"LinearScale"},{"attributes":{},"id":"d0ad79a0-9ffd-48dc-897f-bc74bf02b26f","type":"HelpTool"},{"attributes":{},"id":"34481c9c-ba2d-43a4-9c37-de29d07bb953","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"58538053-7eb4-4b21-9c05-b0a231788b8d","type":"Circle"},{"attributes":{"below":[{"id":"e6935a4c-0328-4ae0-9448-7fc7132958b7","type":"LinearAxis"}],"left":[{"id":"cfb82645-324a-400b-8b32-477e949d68f5","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e6935a4c-0328-4ae0-9448-7fc7132958b7","type":"LinearAxis"},{"id":"5eafeb29-5530-48ce-83e8-5df5dd4b179b","type":"Grid"},{"id":"cfb82645-324a-400b-8b32-477e949d68f5","type":"LinearAxis"},{"id":"34633948-f71c-45f0-b703-b55e904e9500","type":"Grid"},{"id":"0e934b11-63e6-480d-a0e8-de29ce600e98","type":"BoxAnnotation"},{"id":"0595edce-9b82-475d-a7dd-1a0fe6e6889c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f740ab3b-cc7a-459b-b3fc-65b7fbf1e1ed","type":"Toolbar"},"x_range":{"id":"2cfea2a0-3ea3-4891-b39d-76ab753c3c90","type":"DataRange1d"},"x_scale":{"id":"6c46f055-e8e9-44f1-bc99-cffedb29507b","type":"LinearScale"},"y_range":{"id":"d804a7d0-0500-400e-8914-38ee89635de9","type":"DataRange1d"},"y_scale":{"id":"2d7502d5-f610-4b15-93de-91ba1ac2b9a2","type":"LinearScale"}},"id":"ea13655b-ceed-4d1b-901f-ffba0f71e53f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b8c94628-1df6-4cb9-a122-7f0c7b0f35a1","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ab8ce74b-a235-49b2-b7bc-33e3106afd76","type":"BasicTickFormatter"},"plot":{"id":"ea13655b-ceed-4d1b-901f-ffba0f71e53f","subtype":"Figure","type":"Plot"},"ticker":{"id":"184de679-bcd0-427c-b6c4-925626170d5f","type":"BasicTicker"}},"id":"cfb82645-324a-400b-8b32-477e949d68f5","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"312390ea-6f73-4ce9-a1c9-d15ec15502a3","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d5845815-bef4-4176-8907-8dd2b80b367e","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3893a4f0-d80c-4ab9-ab03-daa3fb2a9084","type":"Square"},{"attributes":{},"id":"09681153-bba8-4d31-9ddd-2d67dab2b060","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"60f088a4-da3d-45b4-a81f-3a807913a562","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b7824d15-6e45-433b-92f7-04f3d68fb441","type":"PanTool"},{"id":"728726fd-2750-404a-96c7-6db889390c97","type":"WheelZoomTool"},{"id":"eec93e80-6a99-476e-9270-e1aa2520748d","type":"BoxZoomTool"},{"id":"305cc7ad-6c42-43d3-972e-a3ef9898d450","type":"SaveTool"},{"id":"0f836356-362d-442e-bef3-1cf8a50ced5c","type":"ResetTool"},{"id":"c82cab1e-d111-4daa-bdcc-879a93b295f4","type":"HelpTool"}]},"id":"9b84fa36-094f-46e4-9004-2e20ec629085","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"573cb468-d538-4d1b-9b55-196c5de6ade1","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"e4e44404-bb1f-47ce-9815-693e84b48c11","type":"LinearAxis"}],"left":[{"id":"11af3f19-a5bd-40cd-a870-b6c58b74f9db","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e4e44404-bb1f-47ce-9815-693e84b48c11","type":"LinearAxis"},{"id":"f8afe885-1731-4dfc-86dc-4f90c904ffab","type":"Grid"},{"id":"11af3f19-a5bd-40cd-a870-b6c58b74f9db","type":"LinearAxis"},{"id":"7e82997e-651b-41b5-87d4-fb781cf9a33d","type":"Grid"},{"id":"573cb468-d538-4d1b-9b55-196c5de6ade1","type":"BoxAnnotation"},{"id":"1fc73c7a-4b6d-4941-8b5c-97822527041a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"317c5fda-04f6-4bcc-82e4-89ff483230a2","type":"Toolbar"},"x_range":{"id":"5c3893fe-729c-4527-9856-087feacab35e","type":"DataRange1d"},"x_scale":{"id":"b03c136c-9d01-4bc0-aa81-12295bb4f72b","type":"LinearScale"},"y_range":{"id":"b8c94628-1df6-4cb9-a122-7f0c7b0f35a1","type":"DataRange1d"},"y_scale":{"id":"0c67589d-abe9-4426-9d6e-0bece8bad615","type":"LinearScale"}},"id":"59535d77-1804-452d-9ec0-dec34023b975","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c82cab1e-d111-4daa-bdcc-879a93b295f4","type":"HelpTool"},{"attributes":{"plot":{"id":"59535d77-1804-452d-9ec0-dec34023b975","subtype":"Figure","type":"Plot"},"ticker":{"id":"657d908d-943c-4317-8356-a175dbb33caa","type":"BasicTicker"}},"id":"f8afe885-1731-4dfc-86dc-4f90c904ffab","type":"Grid"},{"attributes":{},"id":"8ee2c864-256f-43ca-9f2b-55eaa3134e72","type":"LinearScale"},{"attributes":{"below":[{"id":"81c6addf-e8ef-4ff8-80e0-c30b90411beb","type":"LinearAxis"}],"left":[{"id":"31d3946a-4d2f-4b83-b3f2-4f244d142538","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"81c6addf-e8ef-4ff8-80e0-c30b90411beb","type":"LinearAxis"},{"id":"dd739343-30bb-4859-b742-ce20f826563d","type":"Grid"},{"id":"31d3946a-4d2f-4b83-b3f2-4f244d142538","type":"LinearAxis"},{"id":"37f01946-ea8e-4231-b019-ad682793c902","type":"Grid"},{"id":"312390ea-6f73-4ce9-a1c9-d15ec15502a3","type":"BoxAnnotation"},{"id":"319bc4b2-bf33-4b19-a9bf-011741a2b6b2","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9b84fa36-094f-46e4-9004-2e20ec629085","type":"Toolbar"},"x_range":{"id":"60f088a4-da3d-45b4-a81f-3a807913a562","type":"DataRange1d"},"x_scale":{"id":"8ee2c864-256f-43ca-9f2b-55eaa3134e72","type":"LinearScale"},"y_range":{"id":"ac2c005f-afb2-47f1-a0c4-850231518568","type":"DataRange1d"},"y_scale":{"id":"b039b9ec-edaf-45a4-972e-430a84e6c88a","type":"LinearScale"}},"id":"bdda76e9-99dd-481e-96d2-d7efae7a810b","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d1c9482-6421-466d-9615-1922880e67a5","type":"Triangle"},{"attributes":{"formatter":{"id":"a4ee075b-283c-48c0-a782-c98817b0ff7b","type":"BasicTickFormatter"},"plot":{"id":"bdda76e9-99dd-481e-96d2-d7efae7a810b","subtype":"Figure","type":"Plot"},"ticker":{"id":"14fe6c80-085e-4a87-bf07-44af9b834e76","type":"BasicTicker"}},"id":"31d3946a-4d2f-4b83-b3f2-4f244d142538","type":"LinearAxis"},{"attributes":{"callback":null},"id":"5c3893fe-729c-4527-9856-087feacab35e","type":"DataRange1d"},{"attributes":{},"id":"14fe6c80-085e-4a87-bf07-44af9b834e76","type":"BasicTicker"},{"attributes":{"formatter":{"id":"280764b5-a2e3-441c-9c94-1b0c8ba7248c","type":"BasicTickFormatter"},"plot":{"id":"bdda76e9-99dd-481e-96d2-d7efae7a810b","subtype":"Figure","type":"Plot"},"ticker":{"id":"565d6e0c-ef93-44d6-8458-2fc11bf28228","type":"BasicTicker"}},"id":"81c6addf-e8ef-4ff8-80e0-c30b90411beb","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ac2c005f-afb2-47f1-a0c4-850231518568","type":"DataRange1d"},{"attributes":{"source":{"id":"0c0ba7b4-1608-41a4-8d6c-9007b211989f","type":"ColumnDataSource"}},"id":"349d52ee-aa69-4d2b-93cd-db033d5d3d2e","type":"CDSView"},{"attributes":{},"id":"b7824d15-6e45-433b-92f7-04f3d68fb441","type":"PanTool"},{"attributes":{},"id":"8b628036-a0c8-4354-b3b6-22288571c6e3","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"dd5d25d3-15df-41e7-b2a9-3b9e9f64614a","type":"ColumnDataSource"},"glyph":{"id":"7d1c9482-6421-466d-9615-1922880e67a5","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b85214ba-7f3b-4972-878f-0cb01e0c314c","type":"Triangle"},"selection_glyph":null,"view":{"id":"5af0d94e-ad95-44c4-af99-83cfd94e7562","type":"CDSView"}},"id":"319bc4b2-bf33-4b19-a9bf-011741a2b6b2","type":"GlyphRenderer"},{"attributes":{},"id":"565d6e0c-ef93-44d6-8458-2fc11bf28228","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"410d5469-ccb6-494a-bbed-2f89e56fabc6","type":"PanTool"},{"id":"8b628036-a0c8-4354-b3b6-22288571c6e3","type":"WheelZoomTool"},{"id":"a121f8a8-dd07-4570-be9d-d84283d3bcab","type":"BoxZoomTool"},{"id":"34481c9c-ba2d-43a4-9c37-de29d07bb953","type":"SaveTool"},{"id":"f80b89e6-d549-4cfa-a3cc-d057aaf72529","type":"ResetTool"},{"id":"bff5f5bd-ffaf-4e79-accb-6c5f25bd7e06","type":"HelpTool"}]},"id":"317c5fda-04f6-4bcc-82e4-89ff483230a2","type":"Toolbar"},{"attributes":{},"id":"f80b89e6-d549-4cfa-a3cc-d057aaf72529","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"bdda76e9-99dd-481e-96d2-d7efae7a810b","subtype":"Figure","type":"Plot"},"ticker":{"id":"14fe6c80-085e-4a87-bf07-44af9b834e76","type":"BasicTicker"}},"id":"37f01946-ea8e-4231-b019-ad682793c902","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"0c0ba7b4-1608-41a4-8d6c-9007b211989f","type":"ColumnDataSource"},{"attributes":{},"id":"a4ee075b-283c-48c0-a782-c98817b0ff7b","type":"BasicTickFormatter"},{"attributes":{},"id":"ab8ce74b-a235-49b2-b7bc-33e3106afd76","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"dd5d25d3-15df-41e7-b2a9-3b9e9f64614a","type":"ColumnDataSource"}},"id":"5af0d94e-ad95-44c4-af99-83cfd94e7562","type":"CDSView"},{"attributes":{"children":[{"id":"59535d77-1804-452d-9ec0-dec34023b975","subtype":"Figure","type":"Plot"},{"id":"bdda76e9-99dd-481e-96d2-d7efae7a810b","subtype":"Figure","type":"Plot"},{"id":"ea13655b-ceed-4d1b-901f-ffba0f71e53f","subtype":"Figure","type":"Plot"}]},"id":"05d31f3f-5de2-44fe-9b88-98943e2034f1","type":"Row"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b85214ba-7f3b-4972-878f-0cb01e0c314c","type":"Triangle"},{"attributes":{},"id":"410d5469-ccb6-494a-bbed-2f89e56fabc6","type":"PanTool"},{"attributes":{},"id":"bb66e6d9-97fb-4d82-8b2d-345cdc7335c9","type":"ResetTool"},{"attributes":{},"id":"bff5f5bd-ffaf-4e79-accb-6c5f25bd7e06","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"f34bf67f-95df-4ead-9fbe-722b4ea7944b","type":"ColumnDataSource"},{"attributes":{},"id":"b039b9ec-edaf-45a4-972e-430a84e6c88a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fcaf2893-0f32-4da8-95e5-067c8e8471b4","type":"Circle"},{"attributes":{"overlay":{"id":"573cb468-d538-4d1b-9b55-196c5de6ade1","type":"BoxAnnotation"}},"id":"a121f8a8-dd07-4570-be9d-d84283d3bcab","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"0e934b11-63e6-480d-a0e8-de29ce600e98","type":"BoxAnnotation"}},"id":"d8392672-0319-470a-9cee-db5c5a1c2585","type":"BoxZoomTool"},{"attributes":{},"id":"370e3145-5238-4da3-ad77-e12b01982bc8","type":"BasicTickFormatter"},{"attributes":{},"id":"869fde33-afe8-4e65-81ae-ce65b7dd0a22","type":"BasicTicker"}],"root_ids":["05d31f3f-5de2-44fe-9b88-98943e2034f1"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"8680085d-e605-44c7-8963-e4c14a5de439","elementid":"90a22dcf-3b5e-45bb-9600-3d20bc4c54ed","modelid":"05d31f3f-5de2-44fe-9b88-98943e2034f1"}];
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