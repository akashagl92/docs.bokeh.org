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
      };var element = document.getElementById("e845ab6e-81d0-40b0-8cea-e3ee8501aba9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e845ab6e-81d0-40b0-8cea-e3ee8501aba9' but no matching script tag was found. ")
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
                    var docs_json = '{"d9e98892-b8e5-44a5-9e2b-2f4ac014e627":{"roots":{"references":[{"attributes":{},"id":"47feaa25-6ebb-4332-9dba-bbd87794f96e","type":"SaveTool"},{"attributes":{},"id":"8c782d51-7fb0-4918-8fb5-4ee4e9465e42","type":"LinearScale"},{"attributes":{},"id":"8ac7be92-bfd0-4625-a0f7-d61fe93c40e7","type":"LinearScale"},{"attributes":{"overlay":{"id":"c1d0f9d1-95ce-4cde-b0a9-f8762167190f","type":"BoxAnnotation"}},"id":"aa3426d0-aa3d-4fcc-b157-2d5555de4eb6","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3bf3d55e-dda4-4bfb-bf7d-03e864ff0e28","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6d0a074-596d-4b81-9274-f2cca9efb49e","type":"BasicTicker"}},"id":"2101ab45-c795-44d3-85c0-7191048e88d3","type":"Grid"},{"attributes":{},"id":"b627d33f-8090-4c5f-b7cb-cab7c91e2f98","type":"BasicTicker"},{"attributes":{},"id":"c89b269e-c4df-4494-8a00-a3cef3c3a4b5","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d66e3c28-4237-4e8d-829d-3e047143a9f5","type":"Triangle"},{"attributes":{},"id":"c95d0084-04f3-443d-b571-f538ddda0395","type":"PanTool"},{"attributes":{"formatter":{"id":"2e15582f-d4ea-41c1-ba3e-9d3c4c6ba49f","type":"BasicTickFormatter"},"plot":{"id":"3bf3d55e-dda4-4bfb-bf7d-03e864ff0e28","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6d0a074-596d-4b81-9274-f2cca9efb49e","type":"BasicTicker"}},"id":"7ac6d859-4ca0-4eec-86f7-989cd2916934","type":"LinearAxis"},{"attributes":{},"id":"091be3a8-dc15-4b80-b097-8e1ce59581fd","type":"BasicTicker"},{"attributes":{"children":[{"id":"223b0eaf-b507-499a-8df5-8680e8e7ae88","type":"ToolbarBox"},{"id":"fb3f8c19-201e-4f1e-bd7a-c30b538f8dbb","type":"Column"}]},"id":"842a15ba-161e-42d4-b64e-7840fb48c8bc","type":"Column"},{"attributes":{},"id":"6d6a81bb-6130-437e-9d4b-ca809f489f20","type":"BasicTickFormatter"},{"attributes":{},"id":"5dc09ac6-7413-4bb5-a520-b279a0cea7ab","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d5e9d9d-183a-467d-8b0b-4d9168ad673b","type":"Square"},{"attributes":{"data_source":{"id":"f2116d08-e468-4fe9-9095-7c77bc262978","type":"ColumnDataSource"},"glyph":{"id":"bceb9992-dc49-4637-a022-c504a4e68b5d","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1d5e9d9d-183a-467d-8b0b-4d9168ad673b","type":"Square"},"selection_glyph":null,"view":{"id":"1440bc31-bd9e-4dbf-9358-5e91b26caeba","type":"CDSView"}},"id":"7e2e63ff-b98f-46cb-a05f-9e32dc09ecb6","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eae7fe6e-9565-4f7c-b6c1-69862e36b097","type":"PanTool"},{"id":"48aae8d9-256a-40be-bfe4-57649829e702","type":"WheelZoomTool"},{"id":"d1355105-f9a6-444f-b7f3-2e960b05f1ce","type":"BoxZoomTool"},{"id":"e322aafe-8b1f-4d27-8c40-d6e1a739b2d4","type":"SaveTool"},{"id":"6ec57d3e-fe18-4f93-840e-f4552814be35","type":"ResetTool"},{"id":"65b7e3e9-c412-4792-ac27-38e981286ceb","type":"HelpTool"}]},"id":"3894f170-d61a-4fa6-900c-ec5e5adc192d","type":"Toolbar"},{"attributes":{},"id":"567f34be-8e71-4b65-9e20-edf43a478f14","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"3bf3d55e-dda4-4bfb-bf7d-03e864ff0e28","subtype":"Figure","type":"Plot"},"ticker":{"id":"b627d33f-8090-4c5f-b7cb-cab7c91e2f98","type":"BasicTicker"}},"id":"2b176e91-8b55-4774-b257-b017a3eb7295","type":"Grid"},{"attributes":{},"id":"eccef42a-1a14-4ab3-a405-b84b71a96a3b","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"da6e6166-4ac0-4dd2-9817-38bf26791cd4","type":"PanTool"},{"id":"7ff175b0-452d-4138-aa4e-cb6d2e011cb1","type":"WheelZoomTool"},{"id":"f5a75bf9-37de-44e7-aaf3-60b91ce32d03","type":"BoxZoomTool"},{"id":"32ec4e42-9ee3-4f2c-9322-2c792e3f6130","type":"SaveTool"},{"id":"eccef42a-1a14-4ab3-a405-b84b71a96a3b","type":"ResetTool"},{"id":"61fc0301-00ef-4e54-8160-26c69bb50fcd","type":"HelpTool"}]},"id":"9ed1050c-d904-43e7-925a-7388b50a9649","type":"Toolbar"},{"attributes":{"data_source":{"id":"d91d7dda-4123-44b3-b2b7-b89e236abf5b","type":"ColumnDataSource"},"glyph":{"id":"669559bf-23a4-437f-969d-064d197c94ea","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d66e3c28-4237-4e8d-829d-3e047143a9f5","type":"Triangle"},"selection_glyph":null,"view":{"id":"b8d7af23-e005-4254-bf9d-073521b04bd9","type":"CDSView"}},"id":"bfd54979-1a48-44f5-9263-c317def864da","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"07d730d3-9943-436a-91dc-66594d5def87","type":"BasicTickFormatter"},"plot":{"id":"d53479e0-031b-4d55-84ec-cbd1bade552a","subtype":"Figure","type":"Plot"},"ticker":{"id":"091be3a8-dc15-4b80-b097-8e1ce59581fd","type":"BasicTicker"}},"id":"d58bcd6c-a218-4c54-9c8f-aec38da44630","type":"LinearAxis"},{"attributes":{},"id":"80fa4fcf-2591-48a1-8225-f0d102af7b77","type":"LinearScale"},{"attributes":{"toolbar":{"id":"9d4837c5-0923-477a-ab35-2c94c5bf42d0","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"223b0eaf-b507-499a-8df5-8680e8e7ae88","type":"ToolbarBox"},{"attributes":{"children":[{"id":"b239a5ff-b0ec-49a7-ae03-9e5b4e273194","type":"Row"},{"id":"f2d7208f-fb60-4f07-ac7e-014fe4145f49","type":"Row"}]},"id":"fb3f8c19-201e-4f1e-bd7a-c30b538f8dbb","type":"Column"},{"attributes":{"callback":null},"id":"2e009719-8bc8-4dc7-b72e-03e29169a9ca","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"0f64f78d-0490-48e9-9568-b240f8dbbfac","subtype":"Figure","type":"Plot"},"ticker":{"id":"5dc09ac6-7413-4bb5-a520-b279a0cea7ab","type":"BasicTicker"}},"id":"a4820b57-919c-44f2-a73c-e230199b7016","type":"Grid"},{"attributes":{},"id":"65b7e3e9-c412-4792-ac27-38e981286ceb","type":"HelpTool"},{"attributes":{"data_source":{"id":"58ef5535-e7ea-4ad4-aa80-b39e83789bdb","type":"ColumnDataSource"},"glyph":{"id":"a9b4d4a2-8c06-4abf-9e9b-8fd97c686c61","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27fd6b55-bfff-4319-bfcb-618ad232cf99","type":"Circle"},"selection_glyph":null,"view":{"id":"a769be83-72f2-43d1-a5e5-d8391a8daa64","type":"CDSView"}},"id":"25e02a9b-e4a3-495e-adfb-f2ff10f11223","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"83872901-eb76-45dc-a237-5cc4e5a4e319","type":"DataRange1d"},{"attributes":{"plot":{"id":"d53479e0-031b-4d55-84ec-cbd1bade552a","subtype":"Figure","type":"Plot"},"ticker":{"id":"db1a61d2-6ff1-4283-ae05-a8a18618fb73","type":"BasicTicker"}},"id":"0bf080fd-f510-4e95-89cd-8d2af08d8d1b","type":"Grid"},{"attributes":{"plot":{"id":"0f64f78d-0490-48e9-9568-b240f8dbbfac","subtype":"Figure","type":"Plot"},"ticker":{"id":"9938adea-aeb2-40a1-8111-c55acc3df7fe","type":"BasicTicker"}},"id":"192e4a74-f7b1-484a-84d8-7f5e81b88ebe","type":"Grid"},{"attributes":{"source":{"id":"d91d7dda-4123-44b3-b2b7-b89e236abf5b","type":"ColumnDataSource"}},"id":"b8d7af23-e005-4254-bf9d-073521b04bd9","type":"CDSView"},{"attributes":{"callback":null},"id":"4fb09225-2928-406f-9e12-9a1d242057df","type":"DataRange1d"},{"attributes":{"callback":null},"id":"73310b16-81ed-481c-b103-19d385fffb86","type":"DataRange1d"},{"attributes":{"formatter":{"id":"183a16a6-2d8c-4532-a672-87276438e241","type":"BasicTickFormatter"},"plot":{"id":"3bf3d55e-dda4-4bfb-bf7d-03e864ff0e28","subtype":"Figure","type":"Plot"},"ticker":{"id":"b627d33f-8090-4c5f-b7cb-cab7c91e2f98","type":"BasicTicker"}},"id":"df798fef-6d8d-44e7-8bda-ab93e0e8bf16","type":"LinearAxis"},{"attributes":{},"id":"11a49e3e-a39c-4e5f-ad7a-f2ac18a00096","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9b4d4a2-8c06-4abf-9e9b-8fd97c686c61","type":"Circle"},{"attributes":{},"id":"32ec4e42-9ee3-4f2c-9322-2c792e3f6130","type":"SaveTool"},{"attributes":{},"id":"db1a61d2-6ff1-4283-ae05-a8a18618fb73","type":"BasicTicker"},{"attributes":{},"id":"da6e6166-4ac0-4dd2-9817-38bf26791cd4","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"f2116d08-e468-4fe9-9095-7c77bc262978","type":"ColumnDataSource"},{"attributes":{},"id":"7ff175b0-452d-4138-aa4e-cb6d2e011cb1","type":"WheelZoomTool"},{"attributes":{},"id":"b8f5d712-3182-49e0-9c52-b118e6a7429c","type":"ResetTool"},{"attributes":{},"id":"183a16a6-2d8c-4532-a672-87276438e241","type":"BasicTickFormatter"},{"attributes":{},"id":"2e15582f-d4ea-41c1-ba3e-9d3c4c6ba49f","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"b39d4cd3-a76d-400c-bf4a-896e7c15e158","type":"LinearAxis"}],"left":[{"id":"ffc42035-39c3-4c86-9aa5-48d2b62f35ff","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b39d4cd3-a76d-400c-bf4a-896e7c15e158","type":"LinearAxis"},{"id":"192e4a74-f7b1-484a-84d8-7f5e81b88ebe","type":"Grid"},{"id":"ffc42035-39c3-4c86-9aa5-48d2b62f35ff","type":"LinearAxis"},{"id":"a4820b57-919c-44f2-a73c-e230199b7016","type":"Grid"},{"id":"c1d0f9d1-95ce-4cde-b0a9-f8762167190f","type":"BoxAnnotation"},{"id":"7e2e63ff-b98f-46cb-a05f-9e32dc09ecb6","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"4661d1ef-633e-498d-afd0-0f60f416e6c0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4fb09225-2928-406f-9e12-9a1d242057df","type":"DataRange1d"},"x_scale":{"id":"11a49e3e-a39c-4e5f-ad7a-f2ac18a00096","type":"LinearScale"},"y_range":{"id":"83872901-eb76-45dc-a237-5cc4e5a4e319","type":"DataRange1d"},"y_scale":{"id":"567f34be-8e71-4b65-9e20-edf43a478f14","type":"LinearScale"}},"id":"0f64f78d-0490-48e9-9568-b240f8dbbfac","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"a726ee14-4601-4fa1-bd59-728784ed4306","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"669559bf-23a4-437f-969d-064d197c94ea","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27fd6b55-bfff-4319-bfcb-618ad232cf99","type":"Circle"},{"attributes":{"overlay":{"id":"26cdce47-7496-49ab-a551-b77d2700a520","type":"BoxAnnotation"}},"id":"f5a75bf9-37de-44e7-aaf3-60b91ce32d03","type":"BoxZoomTool"},{"attributes":{"source":{"id":"58ef5535-e7ea-4ad4-aa80-b39e83789bdb","type":"ColumnDataSource"}},"id":"a769be83-72f2-43d1-a5e5-d8391a8daa64","type":"CDSView"},{"attributes":{},"id":"48aae8d9-256a-40be-bfe4-57649829e702","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"5e3f3b58-6300-401f-8da7-2799e6625238","type":"Spacer"},{"id":"0f64f78d-0490-48e9-9568-b240f8dbbfac","subtype":"Figure","type":"Plot"}]},"id":"f2d7208f-fb60-4f07-ac7e-014fe4145f49","type":"Row"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"58ef5535-e7ea-4ad4-aa80-b39e83789bdb","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f2116d08-e468-4fe9-9095-7c77bc262978","type":"ColumnDataSource"}},"id":"1440bc31-bd9e-4dbf-9358-5e91b26caeba","type":"CDSView"},{"attributes":{"overlay":{"id":"f9b90335-2d06-455e-924f-36fed5dc1d0e","type":"BoxAnnotation"}},"id":"d1355105-f9a6-444f-b7f3-2e960b05f1ce","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f9b90335-2d06-455e-924f-36fed5dc1d0e","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c1d0f9d1-95ce-4cde-b0a9-f8762167190f","type":"BoxAnnotation"},{"attributes":{},"id":"9938adea-aeb2-40a1-8111-c55acc3df7fe","type":"BasicTicker"},{"attributes":{},"id":"07d730d3-9943-436a-91dc-66594d5def87","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c95d0084-04f3-443d-b571-f538ddda0395","type":"PanTool"},{"id":"83c10c0c-b439-4da3-8e92-621a9b7035e1","type":"WheelZoomTool"},{"id":"aa3426d0-aa3d-4fcc-b157-2d5555de4eb6","type":"BoxZoomTool"},{"id":"47feaa25-6ebb-4332-9dba-bbd87794f96e","type":"SaveTool"},{"id":"b8f5d712-3182-49e0-9c52-b118e6a7429c","type":"ResetTool"},{"id":"ba38bcf7-164a-4a31-a26c-aea329946817","type":"HelpTool"}]},"id":"4661d1ef-633e-498d-afd0-0f60f416e6c0","type":"Toolbar"},{"attributes":{},"id":"a16accd3-3052-4d67-85be-ef188353e7bc","type":"LinearScale"},{"attributes":{},"id":"c6d0a074-596d-4b81-9274-f2cca9efb49e","type":"BasicTicker"},{"attributes":{},"id":"61fc0301-00ef-4e54-8160-26c69bb50fcd","type":"HelpTool"},{"attributes":{"below":[{"id":"c440e1cc-49b4-480f-bbba-c0a2e0e0758b","type":"LinearAxis"}],"left":[{"id":"d58bcd6c-a218-4c54-9c8f-aec38da44630","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c440e1cc-49b4-480f-bbba-c0a2e0e0758b","type":"LinearAxis"},{"id":"0bf080fd-f510-4e95-89cd-8d2af08d8d1b","type":"Grid"},{"id":"d58bcd6c-a218-4c54-9c8f-aec38da44630","type":"LinearAxis"},{"id":"540fe578-c48e-4e09-8895-ae3103734ceb","type":"Grid"},{"id":"f9b90335-2d06-455e-924f-36fed5dc1d0e","type":"BoxAnnotation"},{"id":"25e02a9b-e4a3-495e-adfb-f2ff10f11223","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"3894f170-d61a-4fa6-900c-ec5e5adc192d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"73310b16-81ed-481c-b103-19d385fffb86","type":"DataRange1d"},"x_scale":{"id":"8c782d51-7fb0-4918-8fb5-4ee4e9465e42","type":"LinearScale"},"y_range":{"id":"2e009719-8bc8-4dc7-b72e-03e29169a9ca","type":"DataRange1d"},"y_scale":{"id":"a16accd3-3052-4d67-85be-ef188353e7bc","type":"LinearScale"}},"id":"d53479e0-031b-4d55-84ec-cbd1bade552a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ba38bcf7-164a-4a31-a26c-aea329946817","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"d53479e0-031b-4d55-84ec-cbd1bade552a","subtype":"Figure","type":"Plot"},"ticker":{"id":"091be3a8-dc15-4b80-b097-8e1ce59581fd","type":"BasicTicker"}},"id":"540fe578-c48e-4e09-8895-ae3103734ceb","type":"Grid"},{"attributes":{},"id":"e322aafe-8b1f-4d27-8c40-d6e1a739b2d4","type":"SaveTool"},{"attributes":{"formatter":{"id":"969e9d3c-34fe-4962-bb59-12650de1bde7","type":"BasicTickFormatter"},"plot":{"id":"d53479e0-031b-4d55-84ec-cbd1bade552a","subtype":"Figure","type":"Plot"},"ticker":{"id":"db1a61d2-6ff1-4283-ae05-a8a18618fb73","type":"BasicTicker"}},"id":"c440e1cc-49b4-480f-bbba-c0a2e0e0758b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"6d6a81bb-6130-437e-9d4b-ca809f489f20","type":"BasicTickFormatter"},"plot":{"id":"0f64f78d-0490-48e9-9568-b240f8dbbfac","subtype":"Figure","type":"Plot"},"ticker":{"id":"9938adea-aeb2-40a1-8111-c55acc3df7fe","type":"BasicTicker"}},"id":"b39d4cd3-a76d-400c-bf4a-896e7c15e158","type":"LinearAxis"},{"attributes":{},"id":"eae7fe6e-9565-4f7c-b6c1-69862e36b097","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"d91d7dda-4123-44b3-b2b7-b89e236abf5b","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bceb9992-dc49-4637-a022-c504a4e68b5d","type":"Square"},{"attributes":{"tools":[{"id":"eae7fe6e-9565-4f7c-b6c1-69862e36b097","type":"PanTool"},{"id":"48aae8d9-256a-40be-bfe4-57649829e702","type":"WheelZoomTool"},{"id":"d1355105-f9a6-444f-b7f3-2e960b05f1ce","type":"BoxZoomTool"},{"id":"e322aafe-8b1f-4d27-8c40-d6e1a739b2d4","type":"SaveTool"},{"id":"6ec57d3e-fe18-4f93-840e-f4552814be35","type":"ResetTool"},{"id":"65b7e3e9-c412-4792-ac27-38e981286ceb","type":"HelpTool"},{"id":"da6e6166-4ac0-4dd2-9817-38bf26791cd4","type":"PanTool"},{"id":"7ff175b0-452d-4138-aa4e-cb6d2e011cb1","type":"WheelZoomTool"},{"id":"f5a75bf9-37de-44e7-aaf3-60b91ce32d03","type":"BoxZoomTool"},{"id":"32ec4e42-9ee3-4f2c-9322-2c792e3f6130","type":"SaveTool"},{"id":"eccef42a-1a14-4ab3-a405-b84b71a96a3b","type":"ResetTool"},{"id":"61fc0301-00ef-4e54-8160-26c69bb50fcd","type":"HelpTool"},{"id":"c95d0084-04f3-443d-b571-f538ddda0395","type":"PanTool"},{"id":"83c10c0c-b439-4da3-8e92-621a9b7035e1","type":"WheelZoomTool"},{"id":"aa3426d0-aa3d-4fcc-b157-2d5555de4eb6","type":"BoxZoomTool"},{"id":"47feaa25-6ebb-4332-9dba-bbd87794f96e","type":"SaveTool"},{"id":"b8f5d712-3182-49e0-9c52-b118e6a7429c","type":"ResetTool"},{"id":"ba38bcf7-164a-4a31-a26c-aea329946817","type":"HelpTool"}]},"id":"9d4837c5-0923-477a-ab35-2c94c5bf42d0","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26cdce47-7496-49ab-a551-b77d2700a520","type":"BoxAnnotation"},{"attributes":{},"id":"6ec57d3e-fe18-4f93-840e-f4552814be35","type":"ResetTool"},{"attributes":{"callback":null},"id":"721ec48f-7aa8-46f1-8cde-d363d13a923b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c89b269e-c4df-4494-8a00-a3cef3c3a4b5","type":"BasicTickFormatter"},"plot":{"id":"0f64f78d-0490-48e9-9568-b240f8dbbfac","subtype":"Figure","type":"Plot"},"ticker":{"id":"5dc09ac6-7413-4bb5-a520-b279a0cea7ab","type":"BasicTicker"}},"id":"ffc42035-39c3-4c86-9aa5-48d2b62f35ff","type":"LinearAxis"},{"attributes":{"below":[{"id":"7ac6d859-4ca0-4eec-86f7-989cd2916934","type":"LinearAxis"}],"left":[{"id":"df798fef-6d8d-44e7-8bda-ab93e0e8bf16","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7ac6d859-4ca0-4eec-86f7-989cd2916934","type":"LinearAxis"},{"id":"2101ab45-c795-44d3-85c0-7191048e88d3","type":"Grid"},{"id":"df798fef-6d8d-44e7-8bda-ab93e0e8bf16","type":"LinearAxis"},{"id":"2b176e91-8b55-4774-b257-b017a3eb7295","type":"Grid"},{"id":"26cdce47-7496-49ab-a551-b77d2700a520","type":"BoxAnnotation"},{"id":"bfd54979-1a48-44f5-9263-c317def864da","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9ed1050c-d904-43e7-925a-7388b50a9649","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a726ee14-4601-4fa1-bd59-728784ed4306","type":"DataRange1d"},"x_scale":{"id":"8ac7be92-bfd0-4625-a0f7-d61fe93c40e7","type":"LinearScale"},"y_range":{"id":"721ec48f-7aa8-46f1-8cde-d363d13a923b","type":"DataRange1d"},"y_scale":{"id":"80fa4fcf-2591-48a1-8225-f0d102af7b77","type":"LinearScale"}},"id":"3bf3d55e-dda4-4bfb-bf7d-03e864ff0e28","subtype":"Figure","type":"Plot"},{"attributes":{"height":250,"width":250},"id":"5e3f3b58-6300-401f-8da7-2799e6625238","type":"Spacer"},{"attributes":{"children":[{"id":"d53479e0-031b-4d55-84ec-cbd1bade552a","subtype":"Figure","type":"Plot"},{"id":"3bf3d55e-dda4-4bfb-bf7d-03e864ff0e28","subtype":"Figure","type":"Plot"}]},"id":"b239a5ff-b0ec-49a7-ae03-9e5b4e273194","type":"Row"},{"attributes":{},"id":"969e9d3c-34fe-4962-bb59-12650de1bde7","type":"BasicTickFormatter"},{"attributes":{},"id":"83c10c0c-b439-4da3-8e92-621a9b7035e1","type":"WheelZoomTool"}],"root_ids":["842a15ba-161e-42d4-b64e-7840fb48c8bc"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"d9e98892-b8e5-44a5-9e2b-2f4ac014e627","elementid":"e845ab6e-81d0-40b0-8cea-e3ee8501aba9","modelid":"842a15ba-161e-42d4-b64e-7840fb48c8bc"}];
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