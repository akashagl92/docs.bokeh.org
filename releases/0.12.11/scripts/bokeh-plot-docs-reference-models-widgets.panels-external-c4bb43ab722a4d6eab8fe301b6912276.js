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
      };var element = document.getElementById("9750eb69-e0e3-450d-8acb-99053f362b67");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9750eb69-e0e3-450d-8acb-99053f362b67' but no matching script tag was found. ")
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
                    var docs_json = '{"ca68376e-3699-4db5-8c0d-64f9b38da5a4":{"roots":{"references":[{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"530c7c4c-b432-47af-96c5-fd6ca4fb3723","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"5f760bdb-baaf-43d4-961f-5584b2664ffb","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"c322e000-8aa0-43e4-84e7-19a1704cfb34","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"8b9cbd07-29ee-46af-8322-56f37d8a60b0","type":"BoxAnnotation"}},"id":"bcacb99a-69a1-4889-9fd8-c85b64338307","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"fa87653e-d14b-4d73-ab95-0f85cf12bf25","subtype":"Figure","type":"Plot"},"ticker":{"id":"b508aecf-ee68-48ce-9f61-2baf766b8cb0","type":"BasicTicker"}},"id":"edadfd12-df8e-4421-93d6-29227b633245","type":"Grid"},{"attributes":{"callback":null},"id":"37ca3e2d-b6fe-4af6-a86b-8b575b9c7af0","type":"DataRange1d"},{"attributes":{},"id":"2bef1551-969e-412f-ad62-7a11485f132f","type":"ResetTool"},{"attributes":{"formatter":{"id":"e28278cd-6462-4d29-8e59-523ce7367ddb","type":"BasicTickFormatter"},"plot":{"id":"fa87653e-d14b-4d73-ab95-0f85cf12bf25","subtype":"Figure","type":"Plot"},"ticker":{"id":"b508aecf-ee68-48ce-9f61-2baf766b8cb0","type":"BasicTicker"}},"id":"b0584646-9ddb-409d-9e65-87af590efca0","type":"LinearAxis"},{"attributes":{},"id":"c77dd181-8fec-41bc-971f-66351b175e37","type":"LinearScale"},{"attributes":{"plot":{"id":"8cf4a673-52ac-460d-8e6f-88ec5ad1dd1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f2dae47-2096-4aed-8616-7827ba38832d","type":"BasicTicker"}},"id":"05cbad5d-2208-4bb5-83a1-2531897df7cc","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"8cf4a673-52ac-460d-8e6f-88ec5ad1dd1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"12c8d405-05b0-45e3-8d27-40408bf46b89","type":"BasicTicker"}},"id":"fccbfe8c-8b3a-46e5-be48-58c9654e7490","type":"Grid"},{"attributes":{},"id":"0f2dae47-2096-4aed-8616-7827ba38832d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"faadc07a-0ac2-4d65-8033-511153eddde0","type":"PanTool"},{"id":"273a32e7-b287-4973-896e-ce5c41eca833","type":"WheelZoomTool"},{"id":"bcacb99a-69a1-4889-9fd8-c85b64338307","type":"BoxZoomTool"},{"id":"fbfe9a93-bb59-42a0-b890-0800ff694d2c","type":"SaveTool"},{"id":"f80c3740-bd27-4377-ad58-ff4c32f817f3","type":"ResetTool"},{"id":"ac06f030-f4e0-4a64-a0dd-b18fe7f53f33","type":"HelpTool"}]},"id":"5fec531d-d8a5-428b-ad6f-2e464ba1897d","type":"Toolbar"},{"attributes":{"callback":null,"tabs":[{"id":"ef0aa881-e4e3-49d0-850c-9095764877cd","type":"Panel"},{"id":"ff06d955-2ef9-4c8a-841d-23d4ca15a129","type":"Panel"}]},"id":"bfd13e13-3bdc-4ad4-805a-2b8a03854308","type":"Tabs"},{"attributes":{},"id":"975d780c-0d17-4e18-931e-b426a2295849","type":"LinearScale"},{"attributes":{},"id":"12c8d405-05b0-45e3-8d27-40408bf46b89","type":"BasicTicker"},{"attributes":{"overlay":{"id":"3d06f9f6-cf65-43d1-b2ce-4808cac7b787","type":"BoxAnnotation"}},"id":"69a3f050-e95e-4f78-b830-711da250ffdf","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"157631ef-13d3-4656-b3b4-41a9f92bfccb","type":"DataRange1d"},{"attributes":{},"id":"9d598bd7-5112-40c3-be19-125208d26f88","type":"HelpTool"},{"attributes":{"formatter":{"id":"e0e51292-3dc8-4ac3-8c6b-fd64395e9c52","type":"BasicTickFormatter"},"plot":{"id":"8cf4a673-52ac-460d-8e6f-88ec5ad1dd1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"12c8d405-05b0-45e3-8d27-40408bf46b89","type":"BasicTicker"}},"id":"9447d0db-ee8c-424e-b90c-8cece0f7b37c","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3d06f9f6-cf65-43d1-b2ce-4808cac7b787","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2d437e0-c198-4cfd-8d34-caba14dc34a2","type":"Circle"},{"attributes":{},"id":"9aa76570-05e9-4cfa-9c4c-a0c3cae7b71e","type":"PanTool"},{"attributes":{"below":[{"id":"370915cb-8979-48e4-b698-a115e5b6a6c2","type":"LinearAxis"}],"left":[{"id":"9447d0db-ee8c-424e-b90c-8cece0f7b37c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"370915cb-8979-48e4-b698-a115e5b6a6c2","type":"LinearAxis"},{"id":"05cbad5d-2208-4bb5-83a1-2531897df7cc","type":"Grid"},{"id":"9447d0db-ee8c-424e-b90c-8cece0f7b37c","type":"LinearAxis"},{"id":"fccbfe8c-8b3a-46e5-be48-58c9654e7490","type":"Grid"},{"id":"8b9cbd07-29ee-46af-8322-56f37d8a60b0","type":"BoxAnnotation"},{"id":"ada54b56-5b2a-4776-8068-474a0263ac37","type":"GlyphRenderer"}],"title":{"id":"da42877a-ad7e-48c4-b01d-7969e4ae46db","type":"Title"},"toolbar":{"id":"5fec531d-d8a5-428b-ad6f-2e464ba1897d","type":"Toolbar"},"x_range":{"id":"157631ef-13d3-4656-b3b4-41a9f92bfccb","type":"DataRange1d"},"x_scale":{"id":"975d780c-0d17-4e18-931e-b426a2295849","type":"LinearScale"},"y_range":{"id":"05bc284b-a623-46d4-97a1-2ee49da72e27","type":"DataRange1d"},"y_scale":{"id":"c77dd181-8fec-41bc-971f-66351b175e37","type":"LinearScale"}},"id":"8cf4a673-52ac-460d-8e6f-88ec5ad1dd1c","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"17c4984c-2e31-429e-a65e-831c10842c6c","type":"ColumnDataSource"},{"attributes":{},"id":"e28278cd-6462-4d29-8e59-523ce7367ddb","type":"BasicTickFormatter"},{"attributes":{},"id":"faadc07a-0ac2-4d65-8033-511153eddde0","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"48c4ff84-e6e6-4f08-ac98-a2c890ad623d","type":"Circle"},{"attributes":{},"id":"b80b0cec-7eb6-43fc-a52c-41b3a808868f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17c4984c-2e31-429e-a65e-831c10842c6c","type":"ColumnDataSource"},"glyph":{"id":"530c7c4c-b432-47af-96c5-fd6ca4fb3723","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f760bdb-baaf-43d4-961f-5584b2664ffb","type":"Line"},"selection_glyph":null,"view":{"id":"fa43a693-cadd-4fa0-8619-b84e24ae425d","type":"CDSView"}},"id":"ada54b56-5b2a-4776-8068-474a0263ac37","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"fa87653e-d14b-4d73-ab95-0f85cf12bf25","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc8c4298-7c33-4853-af58-6e42219c36c5","type":"BasicTicker"}},"id":"f276597c-7db7-486b-84da-6432dd3a72e7","type":"Grid"},{"attributes":{"source":{"id":"c322e000-8aa0-43e4-84e7-19a1704cfb34","type":"ColumnDataSource"}},"id":"3438c7da-afe9-4d83-b934-e49d82399a1e","type":"CDSView"},{"attributes":{},"id":"fbfe9a93-bb59-42a0-b890-0800ff694d2c","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8b9cbd07-29ee-46af-8322-56f37d8a60b0","type":"BoxAnnotation"},{"attributes":{},"id":"cdd9b79c-e9b8-4917-89dd-d6f836df317e","type":"SaveTool"},{"attributes":{},"id":"ddbeb07d-d3bf-42ba-912c-07f1568a1c71","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8134da56-0039-4928-9b62-bb43d88d0534","type":"LinearAxis"}],"left":[{"id":"b0584646-9ddb-409d-9e65-87af590efca0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8134da56-0039-4928-9b62-bb43d88d0534","type":"LinearAxis"},{"id":"f276597c-7db7-486b-84da-6432dd3a72e7","type":"Grid"},{"id":"b0584646-9ddb-409d-9e65-87af590efca0","type":"LinearAxis"},{"id":"edadfd12-df8e-4421-93d6-29227b633245","type":"Grid"},{"id":"3d06f9f6-cf65-43d1-b2ce-4808cac7b787","type":"BoxAnnotation"},{"id":"e26394cf-7d53-4f60-becd-a8922c0e5da7","type":"GlyphRenderer"}],"title":{"id":"472476c8-c46b-4015-bd5e-bd8f80fdfbd0","type":"Title"},"toolbar":{"id":"02fad799-e0f3-42af-9488-ae6e28d13ffa","type":"Toolbar"},"x_range":{"id":"8d7f21d8-71f3-4721-86b6-8db278900ec7","type":"DataRange1d"},"x_scale":{"id":"5e7e5fb7-d8c5-4b0c-a9f1-4a4ee780dcd2","type":"LinearScale"},"y_range":{"id":"37ca3e2d-b6fe-4af6-a86b-8b575b9c7af0","type":"DataRange1d"},"y_scale":{"id":"03ca4457-bcf2-430d-8fd5-893bde9fc05e","type":"LinearScale"}},"id":"fa87653e-d14b-4d73-ab95-0f85cf12bf25","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"17c4984c-2e31-429e-a65e-831c10842c6c","type":"ColumnDataSource"}},"id":"fa43a693-cadd-4fa0-8619-b84e24ae425d","type":"CDSView"},{"attributes":{},"id":"a3872bd0-2169-47aa-b463-ab033f602166","type":"WheelZoomTool"},{"attributes":{},"id":"03ca4457-bcf2-430d-8fd5-893bde9fc05e","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"da42877a-ad7e-48c4-b01d-7969e4ae46db","type":"Title"},{"attributes":{},"id":"b508aecf-ee68-48ce-9f61-2baf766b8cb0","type":"BasicTicker"},{"attributes":{},"id":"e0e51292-3dc8-4ac3-8c6b-fd64395e9c52","type":"BasicTickFormatter"},{"attributes":{},"id":"cc8c4298-7c33-4853-af58-6e42219c36c5","type":"BasicTicker"},{"attributes":{},"id":"273a32e7-b287-4973-896e-ce5c41eca833","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9aa76570-05e9-4cfa-9c4c-a0c3cae7b71e","type":"PanTool"},{"id":"a3872bd0-2169-47aa-b463-ab033f602166","type":"WheelZoomTool"},{"id":"69a3f050-e95e-4f78-b830-711da250ffdf","type":"BoxZoomTool"},{"id":"cdd9b79c-e9b8-4917-89dd-d6f836df317e","type":"SaveTool"},{"id":"2bef1551-969e-412f-ad62-7a11485f132f","type":"ResetTool"},{"id":"9d598bd7-5112-40c3-be19-125208d26f88","type":"HelpTool"}]},"id":"02fad799-e0f3-42af-9488-ae6e28d13ffa","type":"Toolbar"},{"attributes":{"child":{"id":"fa87653e-d14b-4d73-ab95-0f85cf12bf25","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"ef0aa881-e4e3-49d0-850c-9095764877cd","type":"Panel"},{"attributes":{"callback":null},"id":"8d7f21d8-71f3-4721-86b6-8db278900ec7","type":"DataRange1d"},{"attributes":{"child":{"id":"8cf4a673-52ac-460d-8e6f-88ec5ad1dd1c","subtype":"Figure","type":"Plot"},"title":"line"},"id":"ff06d955-2ef9-4c8a-841d-23d4ca15a129","type":"Panel"},{"attributes":{},"id":"5e7e5fb7-d8c5-4b0c-a9f1-4a4ee780dcd2","type":"LinearScale"},{"attributes":{},"id":"f80c3740-bd27-4377-ad58-ff4c32f817f3","type":"ResetTool"},{"attributes":{"formatter":{"id":"b80b0cec-7eb6-43fc-a52c-41b3a808868f","type":"BasicTickFormatter"},"plot":{"id":"fa87653e-d14b-4d73-ab95-0f85cf12bf25","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc8c4298-7c33-4853-af58-6e42219c36c5","type":"BasicTicker"}},"id":"8134da56-0039-4928-9b62-bb43d88d0534","type":"LinearAxis"},{"attributes":{},"id":"ac06f030-f4e0-4a64-a0dd-b18fe7f53f33","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"472476c8-c46b-4015-bd5e-bd8f80fdfbd0","type":"Title"},{"attributes":{"formatter":{"id":"ddbeb07d-d3bf-42ba-912c-07f1568a1c71","type":"BasicTickFormatter"},"plot":{"id":"8cf4a673-52ac-460d-8e6f-88ec5ad1dd1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f2dae47-2096-4aed-8616-7827ba38832d","type":"BasicTicker"}},"id":"370915cb-8979-48e4-b698-a115e5b6a6c2","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c322e000-8aa0-43e4-84e7-19a1704cfb34","type":"ColumnDataSource"},"glyph":{"id":"b2d437e0-c198-4cfd-8d34-caba14dc34a2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48c4ff84-e6e6-4f08-ac98-a2c890ad623d","type":"Circle"},"selection_glyph":null,"view":{"id":"3438c7da-afe9-4d83-b934-e49d82399a1e","type":"CDSView"}},"id":"e26394cf-7d53-4f60-becd-a8922c0e5da7","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"05bc284b-a623-46d4-97a1-2ee49da72e27","type":"DataRange1d"}],"root_ids":["bfd13e13-3bdc-4ad4-805a-2b8a03854308"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"ca68376e-3699-4db5-8c0d-64f9b38da5a4","elementid":"9750eb69-e0e3-450d-8acb-99053f362b67","modelid":"bfd13e13-3bdc-4ad4-805a-2b8a03854308"}];
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