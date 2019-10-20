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
      };var element = document.getElementById("7141d607-9c1c-48f2-8fd9-3df4e699a0c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7141d607-9c1c-48f2-8fd9-3df4e699a0c2' but no matching script tag was found. ")
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
                    var docs_json = '{"b336d573-52fa-49e8-a2bd-3fe7b64ebf9f":{"roots":{"references":[{"attributes":{},"id":"27b4e987-0cd5-41b7-a932-6a4278f686e8","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"074b02e6-7550-468b-b434-7bba15e2fc1c","type":"ColumnDataSource"}},"id":"fd07f82d-91c3-47b2-9a8e-3bbe019988fe","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"4cbff52b-6859-4052-93ff-c46fc8b08c8c","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"02630b89-d6fd-4762-9e59-919231944135","type":"Stack"}},"y":{"field":"fruits"}},"id":"99b182e5-2494-46a8-ae68-5d94758bb8e7","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"b39375ee-d516-49b6-8a3f-ff902d9f5d78","type":"Stack"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"4cbff52b-6859-4052-93ff-c46fc8b08c8c","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"02630b89-d6fd-4762-9e59-919231944135","type":"Stack"}},"y":{"field":"fruits"}},"id":"b442127c-2fbc-4c6c-8b9f-3334bfdcc3d7","type":"HBar"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"f1d9dbdf-0b20-446b-8554-3162ec18e02a","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"df6f0081-7474-4cdb-b90f-407902302267","type":"Stack"}},"y":{"field":"fruits"}},"id":"c60ad88c-2907-432d-a609-a778cde48b4b","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1375b443-6882-4162-a468-8660fc759112","subtype":"Figure","type":"Plot"},"ticker":{"id":"6409c9bc-c841-4a76-abe1-6bb1e093bd2a","type":"CategoricalTicker"}},"id":"462ea6f8-d1fb-4e50-9c20-3649424cca1d","type":"Grid"},{"attributes":{"fields":["2015"]},"id":"df6f0081-7474-4cdb-b90f-407902302267","type":"Stack"},{"attributes":{"formatter":{"id":"27b4e987-0cd5-41b7-a932-6a4278f686e8","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"1375b443-6882-4162-a468-8660fc759112","subtype":"Figure","type":"Plot"},"ticker":{"id":"6409c9bc-c841-4a76-abe1-6bb1e093bd2a","type":"CategoricalTicker"}},"id":"b3ad2908-d830-4cd8-a062-79d8329df92f","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"1487b5dd-8e39-4caf-aec4-a7464206402d","type":"ColumnDataSource"},"glyph":{"id":"992254f3-9c4e-4547-949c-448b98d6d378","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8bbc236a-f93c-440a-892b-9c0e93e691f6","type":"HBar"},"selection_glyph":null,"view":{"id":"c89b714f-7629-4246-ac59-bec8f7724766","type":"CDSView"}},"id":"10f9b2c2-6c9c-4dd9-97e0-6fddf59161b8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"074b02e6-7550-468b-b434-7bba15e2fc1c","type":"ColumnDataSource"},"glyph":{"id":"c60ad88c-2907-432d-a609-a778cde48b4b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56849fb3-09c8-4c36-8548-285df31624ab","type":"HBar"},"selection_glyph":null,"view":{"id":"ab4f8d9f-8fe2-4cf8-88e8-01dc3d096be0","type":"CDSView"}},"id":"2ad69d34-7284-4f3c-b173-17c00f321fbc","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"2ad69d34-7284-4f3c-b173-17c00f321fbc","type":"GlyphRenderer"}]},"id":"ac8777db-c569-4b20-9d3b-ce2f6ab19b26","type":"LegendItem"},{"attributes":{"overlay":{"id":"7f18256f-7b1a-410e-9ac9-7e0098b774e5","type":"BoxAnnotation"}},"id":"5894edeb-8808-410a-a53d-6f94e64f4a59","type":"BoxZoomTool"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"89c0dd76-77ed-44ad-95a1-63565d38f595","type":"GlyphRenderer"}]},"id":"f425d76e-7b1d-4776-8569-53e79b273ba3","type":"LegendItem"},{"attributes":{"fields":[]},"id":"0ef9dceb-43d0-4e1b-961e-ad3e87935cfa","type":"Stack"},{"attributes":{"source":{"id":"1487b5dd-8e39-4caf-aec4-a7464206402d","type":"ColumnDataSource"}},"id":"c89b714f-7629-4246-ac59-bec8f7724766","type":"CDSView"},{"attributes":{"fields":[]},"id":"f1d9dbdf-0b20-446b-8554-3162ec18e02a","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"57cb51ed-5fd5-4788-82e6-d331573ae00f","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"3fa615ca-abef-46c8-b07c-a6a3bd016630","type":"FactorRange"},{"attributes":{"source":{"id":"1487b5dd-8e39-4caf-aec4-a7464206402d","type":"ColumnDataSource"}},"id":"82da1d69-e196-45ee-9e1e-eeb6751d025b","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"b711cbd4-dd01-45a1-9b90-380df1aa8ecf","type":"Stack"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"1487b5dd-8e39-4caf-aec4-a7464206402d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"074b02e6-7550-468b-b434-7bba15e2fc1c","type":"ColumnDataSource"}},"id":"ab4f8d9f-8fe2-4cf8-88e8-01dc3d096be0","type":"CDSView"},{"attributes":{"data_source":{"id":"1487b5dd-8e39-4caf-aec4-a7464206402d","type":"ColumnDataSource"},"glyph":{"id":"b442127c-2fbc-4c6c-8b9f-3334bfdcc3d7","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"99b182e5-2494-46a8-ae68-5d94758bb8e7","type":"HBar"},"selection_glyph":null,"view":{"id":"edfc4758-3325-4ca3-8c1e-ad489ad49412","type":"CDSView"}},"id":"513c5766-28f4-49aa-9720-6e084b533ea7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1375b443-6882-4162-a468-8660fc759112","subtype":"Figure","type":"Plot"},"ticker":{"id":"c08d9892-3f39-4ba1-b7ea-ecdb39544381","type":"BasicTicker"}},"id":"f9230b01-2398-4e5f-97c8-ccf2868c85ee","type":"Grid"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"b39375ee-d516-49b6-8a3f-ff902d9f5d78","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"567b7c84-b32a-42ba-b3a0-6a6b0a5bdef8","type":"Stack"}},"y":{"field":"fruits"}},"id":"5cebb430-ffd2-429c-b8d5-d801b49200ce","type":"HBar"},{"attributes":{},"id":"92d3308f-ca27-4bcc-b64d-82f383ffeab8","type":"PanTool"},{"attributes":{"formatter":{"id":"9d751f1f-0d73-41cb-a4f6-a76eb5861e87","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"1375b443-6882-4162-a468-8660fc759112","subtype":"Figure","type":"Plot"},"ticker":{"id":"c08d9892-3f39-4ba1-b7ea-ecdb39544381","type":"BasicTicker"}},"id":"b74e1660-073d-4a2e-9b37-15e95ca40327","type":"LinearAxis"},{"attributes":{},"id":"36b36be9-bb19-4836-a915-2848337351ee","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"b39375ee-d516-49b6-8a3f-ff902d9f5d78","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"567b7c84-b32a-42ba-b3a0-6a6b0a5bdef8","type":"Stack"}},"y":{"field":"fruits"}},"id":"08e910c2-8124-456b-b78a-521575c4037b","type":"HBar"},{"attributes":{"data_source":{"id":"1487b5dd-8e39-4caf-aec4-a7464206402d","type":"ColumnDataSource"},"glyph":{"id":"e5dd085d-f99c-449f-8986-0fc15ea6a7a5","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0b5fe0e4-2537-44cf-8f68-3edb53a4bc11","type":"HBar"},"selection_glyph":null,"view":{"id":"82da1d69-e196-45ee-9e1e-eeb6751d025b","type":"CDSView"}},"id":"fdc5ceae-1c1e-4b50-9762-d93f4d4ffff0","type":"GlyphRenderer"},{"attributes":{},"id":"6409c9bc-c841-4a76-abe1-6bb1e093bd2a","type":"CategoricalTicker"},{"attributes":{"fields":["2015"]},"id":"4cbff52b-6859-4052-93ff-c46fc8b08c8c","type":"Stack"},{"attributes":{},"id":"91816ba7-872e-48f2-85c5-249eb9d9517a","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"074b02e6-7550-468b-b434-7bba15e2fc1c","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016"]},"id":"8b90859f-6573-436d-a9a4-e0ef38ddce55","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"02630b89-d6fd-4762-9e59-919231944135","type":"Stack"},{"attributes":{},"id":"15cfd1d9-4ac1-4a1e-8124-ffa832602d35","type":"WheelZoomTool"},{"attributes":{"fields":["2015","2016","2017"]},"id":"06d3f48c-3309-491e-ac2d-8c05df23ca68","type":"Stack"},{"attributes":{},"id":"c08d9892-3f39-4ba1-b7ea-ecdb39544381","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"b711cbd4-dd01-45a1-9b90-380df1aa8ecf","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"57cb51ed-5fd5-4788-82e6-d331573ae00f","type":"Stack"}},"y":{"field":"fruits"}},"id":"e7405cf1-ad7f-4e30-aa04-6d43f4a7bd62","type":"HBar"},{"attributes":{},"id":"81a29a94-9a25-4d06-8655-e50e1f518840","type":"ResetTool"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"513c5766-28f4-49aa-9720-6e084b533ea7","type":"GlyphRenderer"}]},"id":"fa9fc61c-a56a-428b-b7a4-6a2dc87fdf77","type":"LegendItem"},{"attributes":{"source":{"id":"074b02e6-7550-468b-b434-7bba15e2fc1c","type":"ColumnDataSource"}},"id":"3142e248-20fb-4a26-b1ca-172d6cc41650","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"8b90859f-6573-436d-a9a4-e0ef38ddce55","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"06d3f48c-3309-491e-ac2d-8c05df23ca68","type":"Stack"}},"y":{"field":"fruits"}},"id":"0b5fe0e4-2537-44cf-8f68-3edb53a4bc11","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"567b7c84-b32a-42ba-b3a0-6a6b0a5bdef8","type":"Stack"},{"attributes":{"below":[{"id":"b74e1660-073d-4a2e-9b37-15e95ca40327","type":"LinearAxis"}],"left":[{"id":"b3ad2908-d830-4cd8-a062-79d8329df92f","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"b74e1660-073d-4a2e-9b37-15e95ca40327","type":"LinearAxis"},{"id":"f9230b01-2398-4e5f-97c8-ccf2868c85ee","type":"Grid"},{"id":"b3ad2908-d830-4cd8-a062-79d8329df92f","type":"CategoricalAxis"},{"id":"462ea6f8-d1fb-4e50-9c20-3649424cca1d","type":"Grid"},{"id":"7f18256f-7b1a-410e-9ac9-7e0098b774e5","type":"BoxAnnotation"},{"id":"9f9f739a-19ff-4888-a379-6b432da9e233","type":"Legend"},{"id":"10f9b2c2-6c9c-4dd9-97e0-6fddf59161b8","type":"GlyphRenderer"},{"id":"513c5766-28f4-49aa-9720-6e084b533ea7","type":"GlyphRenderer"},{"id":"fdc5ceae-1c1e-4b50-9762-d93f4d4ffff0","type":"GlyphRenderer"},{"id":"2ad69d34-7284-4f3c-b173-17c00f321fbc","type":"GlyphRenderer"},{"id":"79280e4f-d0e8-485a-9ced-95973031bf13","type":"GlyphRenderer"},{"id":"89c0dd76-77ed-44ad-95a1-63565d38f595","type":"GlyphRenderer"}],"title":{"id":"15d568d5-1229-4adf-a512-f1483d17d76e","type":"Title"},"toolbar":{"id":"e77b5623-ddf9-48a1-a6a4-69f4786a4697","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dffdd74c-710a-4db0-a978-f68f424ff556","type":"Range1d"},"x_scale":{"id":"1b801417-ea06-46cf-a370-6919f02ec5be","type":"LinearScale"},"y_range":{"id":"3fa615ca-abef-46c8-b07c-a6a3bd016630","type":"FactorRange"},"y_scale":{"id":"36b36be9-bb19-4836-a915-2848337351ee","type":"CategoricalScale"}},"id":"1375b443-6882-4162-a468-8660fc759112","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"074b02e6-7550-468b-b434-7bba15e2fc1c","type":"ColumnDataSource"},"glyph":{"id":"e7405cf1-ad7f-4e30-aa04-6d43f4a7bd62","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2e46a397-0527-441c-89d1-576b8b85b1cb","type":"HBar"},"selection_glyph":null,"view":{"id":"3142e248-20fb-4a26-b1ca-172d6cc41650","type":"CDSView"}},"id":"89c0dd76-77ed-44ad-95a1-63565d38f595","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"b711cbd4-dd01-45a1-9b90-380df1aa8ecf","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"57cb51ed-5fd5-4788-82e6-d331573ae00f","type":"Stack"}},"y":{"field":"fruits"}},"id":"2e46a397-0527-441c-89d1-576b8b85b1cb","type":"HBar"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"dffdd74c-710a-4db0-a978-f68f424ff556","type":"Range1d"},{"attributes":{},"id":"9d751f1f-0d73-41cb-a4f6-a76eb5861e87","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"79280e4f-d0e8-485a-9ced-95973031bf13","type":"GlyphRenderer"}]},"id":"8c7e23bc-833c-45b2-8b6c-36560902d669","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"0ef9dceb-43d0-4e1b-961e-ad3e87935cfa","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"fb4119bf-0765-431d-822b-c1727a2b4cc5","type":"Stack"}},"y":{"field":"fruits"}},"id":"992254f3-9c4e-4547-949c-448b98d6d378","type":"HBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"92d3308f-ca27-4bcc-b64d-82f383ffeab8","type":"PanTool"},{"id":"15cfd1d9-4ac1-4a1e-8124-ffa832602d35","type":"WheelZoomTool"},{"id":"5894edeb-8808-410a-a53d-6f94e64f4a59","type":"BoxZoomTool"},{"id":"60407006-3ac1-4ba0-b394-81d4d9e86a4c","type":"SaveTool"},{"id":"81a29a94-9a25-4d06-8655-e50e1f518840","type":"ResetTool"},{"id":"91816ba7-872e-48f2-85c5-249eb9d9517a","type":"HelpTool"}]},"id":"e77b5623-ddf9-48a1-a6a4-69f4786a4697","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7f18256f-7b1a-410e-9ac9-7e0098b774e5","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"33e5f2a9-c54c-4b1e-8641-13681d804f0f","type":"LegendItem"},{"id":"fa9fc61c-a56a-428b-b7a4-6a2dc87fdf77","type":"LegendItem"},{"id":"e43cdaf6-6637-45af-aee7-0c4e9c17eb1f","type":"LegendItem"},{"id":"ac8777db-c569-4b20-9d3b-ce2f6ab19b26","type":"LegendItem"},{"id":"8c7e23bc-833c-45b2-8b6c-36560902d669","type":"LegendItem"},{"id":"f425d76e-7b1d-4776-8569-53e79b273ba3","type":"LegendItem"}],"location":"top_left","plot":{"id":"1375b443-6882-4162-a468-8660fc759112","subtype":"Figure","type":"Plot"}},"id":"9f9f739a-19ff-4888-a379-6b432da9e233","type":"Legend"},{"attributes":{"data_source":{"id":"074b02e6-7550-468b-b434-7bba15e2fc1c","type":"ColumnDataSource"},"glyph":{"id":"5cebb430-ffd2-429c-b8d5-d801b49200ce","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"08e910c2-8124-456b-b78a-521575c4037b","type":"HBar"},"selection_glyph":null,"view":{"id":"fd07f82d-91c3-47b2-9a8e-3bbe019988fe","type":"CDSView"}},"id":"79280e4f-d0e8-485a-9ced-95973031bf13","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"fdc5ceae-1c1e-4b50-9762-d93f4d4ffff0","type":"GlyphRenderer"}]},"id":"e43cdaf6-6637-45af-aee7-0c4e9c17eb1f","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"0ef9dceb-43d0-4e1b-961e-ad3e87935cfa","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"fb4119bf-0765-431d-822b-c1727a2b4cc5","type":"Stack"}},"y":{"field":"fruits"}},"id":"8bbc236a-f93c-440a-892b-9c0e93e691f6","type":"HBar"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"15d568d5-1229-4adf-a512-f1483d17d76e","type":"Title"},{"attributes":{},"id":"1b801417-ea06-46cf-a370-6919f02ec5be","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"f1d9dbdf-0b20-446b-8554-3162ec18e02a","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"df6f0081-7474-4cdb-b90f-407902302267","type":"Stack"}},"y":{"field":"fruits"}},"id":"56849fb3-09c8-4c36-8548-285df31624ab","type":"HBar"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"10f9b2c2-6c9c-4dd9-97e0-6fddf59161b8","type":"GlyphRenderer"}]},"id":"33e5f2a9-c54c-4b1e-8641-13681d804f0f","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"fb4119bf-0765-431d-822b-c1727a2b4cc5","type":"Stack"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"8b90859f-6573-436d-a9a4-e0ef38ddce55","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"06d3f48c-3309-491e-ac2d-8c05df23ca68","type":"Stack"}},"y":{"field":"fruits"}},"id":"e5dd085d-f99c-449f-8986-0fc15ea6a7a5","type":"HBar"},{"attributes":{},"id":"60407006-3ac1-4ba0-b394-81d4d9e86a4c","type":"SaveTool"},{"attributes":{"source":{"id":"1487b5dd-8e39-4caf-aec4-a7464206402d","type":"ColumnDataSource"}},"id":"edfc4758-3325-4ca3-8c1e-ad489ad49412","type":"CDSView"}],"root_ids":["1375b443-6882-4162-a468-8660fc759112"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"b336d573-52fa-49e8-a2bd-3fe7b64ebf9f","elementid":"7141d607-9c1c-48f2-8fd9-3df4e699a0c2","modelid":"1375b443-6882-4162-a468-8660fc759112"}];
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