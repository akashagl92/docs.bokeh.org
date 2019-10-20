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
      };var element = document.getElementById("15eaa1ac-a412-4915-ade4-21ddb8468561");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '15eaa1ac-a412-4915-ade4-21ddb8468561' but no matching script tag was found. ")
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
                    var docs_json = '{"994afc56-bf51-48d9-bf22-619ade88dad4":{"roots":{"references":[{"attributes":{"overlay":{"id":"e675adb2-152c-4567-8e42-63bf06c80474","type":"BoxAnnotation"}},"id":"f2c19f9a-142a-4a27-88d3-c07cb9f4879d","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"4dda665a-9511-4b06-9498-8298f4a88ec8","subtype":"Figure","type":"Plot"},"ticker":{"id":"50d1de67-e6cf-4380-a80c-87a8ace93a10","type":"BasicTicker"}},"id":"5221b847-9f69-49ef-898a-fa174ef50d1b","type":"Grid"},{"attributes":{},"id":"0c4d2748-6cbb-4c0e-941a-fc9d60148d68","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e675adb2-152c-4567-8e42-63bf06c80474","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3dbbccdf-891a-430c-bd48-6b077ea492c0","type":"Circle"},{"attributes":{},"id":"938e6fac-c923-4929-a442-1f2c50611ba7","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"fb89ce87-c78c-4eab-b4f8-9b7fc990b5e4","type":"ColumnDataSource"},"glyph":{"id":"3dbbccdf-891a-430c-bd48-6b077ea492c0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"efa083fb-0a47-4e09-9918-acd25e6e48c7","type":"Circle"},"selection_glyph":null,"view":{"id":"708dc84d-b968-4966-bbb8-4a362aef7230","type":"CDSView"}},"id":"a2ca2bea-95a5-43f4-9be5-367d41d87f82","type":"GlyphRenderer"},{"attributes":{},"id":"6d53fc86-dce5-45b2-a853-963949ccfe9c","type":"LinearScale"},{"attributes":{},"id":"b1add65c-6ba6-4196-899a-ec36bf7e0ec1","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"fb89ce87-c78c-4eab-b4f8-9b7fc990b5e4","type":"ColumnDataSource"}},"id":"708dc84d-b968-4966-bbb8-4a362aef7230","type":"CDSView"},{"attributes":{"plot":{"id":"4dda665a-9511-4b06-9498-8298f4a88ec8","subtype":"Figure","type":"Plot"},"ticker":{"id":"4015ef32-a6a7-42a4-9417-3ff7ebcb47f4","type":"BasicTicker"}},"id":"6e3e796d-526e-4617-b7dd-5c03dbc151d4","type":"Grid"},{"attributes":{},"id":"594a5ec7-997a-48a4-958a-0dcb55f70569","type":"PanTool"},{"attributes":{"formatter":{"id":"59535ecb-17e9-4a8d-b388-c1ccc6e9dd5f","type":"BasicTickFormatter"},"plot":{"id":"4dda665a-9511-4b06-9498-8298f4a88ec8","subtype":"Figure","type":"Plot"},"ticker":{"id":"50d1de67-e6cf-4380-a80c-87a8ace93a10","type":"BasicTicker"}},"id":"dfde965e-d364-4398-bb71-13cf5e919c0b","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"fb89ce87-c78c-4eab-b4f8-9b7fc990b5e4","type":"ColumnDataSource"},{"attributes":{},"id":"0b86ec45-5e65-414a-946a-c86c310d8557","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1bc906ef-5112-4e35-b791-e518320352aa","type":"PanTool"},{"id":"04fdf457-c94b-4487-a373-cf5054633c07","type":"WheelZoomTool"},{"id":"0faf713a-53ce-46fc-8c10-96451b445cc0","type":"BoxZoomTool"},{"id":"db37f704-1212-4e8c-9d5f-38291921317f","type":"SaveTool"},{"id":"f6ac7886-a3ef-4264-8c66-49ed4edf3fa2","type":"ResetTool"},{"id":"bda1a07c-93f1-4817-8e7e-e04fbf919212","type":"HelpTool"}]},"id":"9fbfe69b-5c5d-4a89-a4e6-b1292115cd12","type":"Toolbar"},{"attributes":{},"id":"59535ecb-17e9-4a8d-b388-c1ccc6e9dd5f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b1add65c-6ba6-4196-899a-ec36bf7e0ec1","type":"BasicTickFormatter"},"plot":{"id":"4dda665a-9511-4b06-9498-8298f4a88ec8","subtype":"Figure","type":"Plot"},"ticker":{"id":"4015ef32-a6a7-42a4-9417-3ff7ebcb47f4","type":"BasicTicker"}},"id":"9c1ac08d-7c0e-48d4-9912-fe5c716f140b","type":"LinearAxis"},{"attributes":{},"id":"1bc906ef-5112-4e35-b791-e518320352aa","type":"PanTool"},{"attributes":{"below":[{"id":"11c96ffa-3c3a-47f7-92ed-2ea8727b34fb","type":"LinearAxis"}],"left":[{"id":"d39f2f33-2256-4e69-b9f3-9395c5be7f79","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"11c96ffa-3c3a-47f7-92ed-2ea8727b34fb","type":"LinearAxis"},{"id":"59379df0-a430-4a90-b36f-db8288588044","type":"Grid"},{"id":"d39f2f33-2256-4e69-b9f3-9395c5be7f79","type":"LinearAxis"},{"id":"2a77e21a-5301-4aa5-8084-37d7fa5fb82d","type":"Grid"},{"id":"a33ef414-9f17-457f-8c92-9c276ab255a5","type":"BoxAnnotation"},{"id":"684dcfca-c7ae-408f-9799-80edb762c0cf","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"07bc4929-06d5-40d3-be14-2e9332ee1556","type":"Toolbar"},"x_range":{"id":"667638e1-795e-4d76-918c-8ed972749532","type":"DataRange1d"},"x_scale":{"id":"57c0d8cd-7b80-483a-b10d-8a325885f852","type":"LinearScale"},"y_range":{"id":"051f175c-ead2-4769-add7-a374a98633ba","type":"DataRange1d"},"y_scale":{"id":"978a8c32-0834-4a69-962b-f5a54fc33e5d","type":"LinearScale"}},"id":"b6e4d04c-804b-4ac5-b009-14bba9fe19d6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8a58ac16-6296-44e6-9371-7f807453ce1b","type":"LinearScale"},{"attributes":{"callback":null},"id":"726fd9b5-5344-4558-baf6-4b6cb7fd1017","type":"DataRange1d"},{"attributes":{},"id":"52ac065a-3149-46f0-bbc4-2df42e2a1a29","type":"SaveTool"},{"attributes":{},"id":"50d1de67-e6cf-4380-a80c-87a8ace93a10","type":"BasicTicker"},{"attributes":{},"id":"16e23178-816d-41db-92f4-cc6d98883b55","type":"BasicTicker"},{"attributes":{},"id":"2c20cbc5-09d0-4c0b-9cfb-1abcecf036ca","type":"LinearScale"},{"attributes":{"source":{"id":"4b1f6727-b646-4c44-828e-e36d494c4160","type":"ColumnDataSource"}},"id":"db3c4705-b5dd-4456-8919-2eb70829bccb","type":"CDSView"},{"attributes":{},"id":"4015ef32-a6a7-42a4-9417-3ff7ebcb47f4","type":"BasicTicker"},{"attributes":{"below":[{"id":"9c1ac08d-7c0e-48d4-9912-fe5c716f140b","type":"LinearAxis"}],"left":[{"id":"dfde965e-d364-4398-bb71-13cf5e919c0b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9c1ac08d-7c0e-48d4-9912-fe5c716f140b","type":"LinearAxis"},{"id":"6e3e796d-526e-4617-b7dd-5c03dbc151d4","type":"Grid"},{"id":"dfde965e-d364-4398-bb71-13cf5e919c0b","type":"LinearAxis"},{"id":"5221b847-9f69-49ef-898a-fa174ef50d1b","type":"Grid"},{"id":"e675adb2-152c-4567-8e42-63bf06c80474","type":"BoxAnnotation"},{"id":"a2ca2bea-95a5-43f4-9be5-367d41d87f82","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"36292662-2167-436a-a18a-96483484b7c4","type":"Toolbar"},"x_range":{"id":"726fd9b5-5344-4558-baf6-4b6cb7fd1017","type":"DataRange1d"},"x_scale":{"id":"d653a1fa-027e-4c94-9e44-ae41303287a2","type":"LinearScale"},"y_range":{"id":"383dda22-e482-4673-8306-0acf2eccab48","type":"DataRange1d"},"y_scale":{"id":"6d53fc86-dce5-45b2-a853-963949ccfe9c","type":"LinearScale"}},"id":"4dda665a-9511-4b06-9498-8298f4a88ec8","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"383dda22-e482-4673-8306-0acf2eccab48","type":"DataRange1d"},{"attributes":{"callback":null},"id":"051f175c-ead2-4769-add7-a374a98633ba","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f94d99c3-dd07-4042-9d97-b8145a8850c4","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"30d8c151-e965-439b-a630-2b6f464d5be4","type":"DataRange1d"},{"attributes":{},"id":"978a8c32-0834-4a69-962b-f5a54fc33e5d","type":"LinearScale"},{"attributes":{},"id":"d69df0bd-d5be-4bfe-bc90-44b1dda81a86","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"a33ef414-9f17-457f-8c92-9c276ab255a5","type":"BoxAnnotation"}},"id":"86c99b6f-3de7-4fac-b552-5ae7ef666be7","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"0b86ec45-5e65-414a-946a-c86c310d8557","type":"BasicTickFormatter"},"plot":{"id":"b6e4d04c-804b-4ac5-b009-14bba9fe19d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"fce2166e-e9a0-4ea3-9256-686c9f34d65f","type":"BasicTicker"}},"id":"11c96ffa-3c3a-47f7-92ed-2ea8727b34fb","type":"LinearAxis"},{"attributes":{"plot":{"id":"b6e4d04c-804b-4ac5-b009-14bba9fe19d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"fce2166e-e9a0-4ea3-9256-686c9f34d65f","type":"BasicTicker"}},"id":"59379df0-a430-4a90-b36f-db8288588044","type":"Grid"},{"attributes":{},"id":"57c0d8cd-7b80-483a-b10d-8a325885f852","type":"LinearScale"},{"attributes":{"children":[{"id":"4dda665a-9511-4b06-9498-8298f4a88ec8","subtype":"Figure","type":"Plot"},{"id":"b6e4d04c-804b-4ac5-b009-14bba9fe19d6","subtype":"Figure","type":"Plot"},{"id":"3f214a31-4338-4ea8-af1f-9d24632d8ce2","subtype":"Figure","type":"Plot"}]},"id":"aea72fa5-f63d-47ab-afd8-f25441818365","type":"Column"},{"attributes":{"formatter":{"id":"d69df0bd-d5be-4bfe-bc90-44b1dda81a86","type":"BasicTickFormatter"},"plot":{"id":"b6e4d04c-804b-4ac5-b009-14bba9fe19d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"efa61592-3975-4732-b4e7-6ea7d3cb4caa","type":"BasicTicker"}},"id":"d39f2f33-2256-4e69-b9f3-9395c5be7f79","type":"LinearAxis"},{"attributes":{"data_source":{"id":"195fe750-086c-46c5-bc33-e931c9efc820","type":"ColumnDataSource"},"glyph":{"id":"97933763-5cde-4ab5-9f53-d6eb00f8dc85","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7a8cced8-a5d9-4e38-93b9-5edbe13ee5cd","type":"Triangle"},"selection_glyph":null,"view":{"id":"679d2c16-93ee-4d8f-b8a2-72c2622ed000","type":"CDSView"}},"id":"684dcfca-c7ae-408f-9799-80edb762c0cf","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"41494e80-38f8-40ab-92d6-dec374c7ade4","type":"BasicTickFormatter"},"plot":{"id":"3f214a31-4338-4ea8-af1f-9d24632d8ce2","subtype":"Figure","type":"Plot"},"ticker":{"id":"46fbb937-72ad-470a-822c-8a6656b19b8e","type":"BasicTicker"}},"id":"f639fe58-54d7-462c-a8ba-fbecbebc1115","type":"LinearAxis"},{"attributes":{"source":{"id":"195fe750-086c-46c5-bc33-e931c9efc820","type":"ColumnDataSource"}},"id":"679d2c16-93ee-4d8f-b8a2-72c2622ed000","type":"CDSView"},{"attributes":{},"id":"41494e80-38f8-40ab-92d6-dec374c7ade4","type":"BasicTickFormatter"},{"attributes":{},"id":"fce2166e-e9a0-4ea3-9256-686c9f34d65f","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a8cced8-a5d9-4e38-93b9-5edbe13ee5cd","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a6d2e03-3894-4c81-934f-7685869984f8","type":"Square"},{"attributes":{"data_source":{"id":"4b1f6727-b646-4c44-828e-e36d494c4160","type":"ColumnDataSource"},"glyph":{"id":"6a6d2e03-3894-4c81-934f-7685869984f8","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cadc076e-d2f7-4790-9ff0-ba6bfa576937","type":"Square"},"selection_glyph":null,"view":{"id":"db3c4705-b5dd-4456-8919-2eb70829bccb","type":"CDSView"}},"id":"17aa196c-be04-47ad-b494-62b2113ad3d9","type":"GlyphRenderer"},{"attributes":{},"id":"9761cf11-2f7e-4e86-86d6-7816bb5f286a","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"b6e4d04c-804b-4ac5-b009-14bba9fe19d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"efa61592-3975-4732-b4e7-6ea7d3cb4caa","type":"BasicTicker"}},"id":"2a77e21a-5301-4aa5-8084-37d7fa5fb82d","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0155504a-68e5-4ccd-b389-857496ecfa0d","type":"PanTool"},{"id":"9761cf11-2f7e-4e86-86d6-7816bb5f286a","type":"WheelZoomTool"},{"id":"86c99b6f-3de7-4fac-b552-5ae7ef666be7","type":"BoxZoomTool"},{"id":"dc31db06-5c20-458b-a735-99df25d92eb2","type":"SaveTool"},{"id":"bb07816b-31fa-433b-bf0b-63d60d34f89e","type":"ResetTool"},{"id":"744486ec-b624-47bc-b51c-92224b922d0f","type":"HelpTool"}]},"id":"07bc4929-06d5-40d3-be14-2e9332ee1556","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"3f214a31-4338-4ea8-af1f-9d24632d8ce2","subtype":"Figure","type":"Plot"},"ticker":{"id":"16e23178-816d-41db-92f4-cc6d98883b55","type":"BasicTicker"}},"id":"beb5f23f-4025-4f68-bbde-1941cb7c0ad7","type":"Grid"},{"attributes":{},"id":"d653a1fa-027e-4c94-9e44-ae41303287a2","type":"LinearScale"},{"attributes":{"formatter":{"id":"d5f3bd48-6d84-4ce6-8f86-52f8f4e5d596","type":"BasicTickFormatter"},"plot":{"id":"3f214a31-4338-4ea8-af1f-9d24632d8ce2","subtype":"Figure","type":"Plot"},"ticker":{"id":"16e23178-816d-41db-92f4-cc6d98883b55","type":"BasicTicker"}},"id":"cadff646-8af4-4b8c-a40b-0da490b68ed7","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ae75a223-dea5-4a88-8e8e-ea5cf2be7e22","type":"DataRange1d"},{"attributes":{},"id":"bda1a07c-93f1-4817-8e7e-e04fbf919212","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a33ef414-9f17-457f-8c92-9c276ab255a5","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"97933763-5cde-4ab5-9f53-d6eb00f8dc85","type":"Triangle"},{"attributes":{},"id":"efa61592-3975-4732-b4e7-6ea7d3cb4caa","type":"BasicTicker"},{"attributes":{},"id":"bb07816b-31fa-433b-bf0b-63d60d34f89e","type":"ResetTool"},{"attributes":{},"id":"d5f3bd48-6d84-4ce6-8f86-52f8f4e5d596","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"efa083fb-0a47-4e09-9918-acd25e6e48c7","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"195fe750-086c-46c5-bc33-e931c9efc820","type":"ColumnDataSource"},{"attributes":{},"id":"0155504a-68e5-4ccd-b389-857496ecfa0d","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"594a5ec7-997a-48a4-958a-0dcb55f70569","type":"PanTool"},{"id":"938e6fac-c923-4929-a442-1f2c50611ba7","type":"WheelZoomTool"},{"id":"f2c19f9a-142a-4a27-88d3-c07cb9f4879d","type":"BoxZoomTool"},{"id":"52ac065a-3149-46f0-bbc4-2df42e2a1a29","type":"SaveTool"},{"id":"abb122dd-a71f-4935-9422-35f28b6189ca","type":"ResetTool"},{"id":"0c4d2748-6cbb-4c0e-941a-fc9d60148d68","type":"HelpTool"}]},"id":"36292662-2167-436a-a18a-96483484b7c4","type":"Toolbar"},{"attributes":{},"id":"abb122dd-a71f-4935-9422-35f28b6189ca","type":"ResetTool"},{"attributes":{"below":[{"id":"f639fe58-54d7-462c-a8ba-fbecbebc1115","type":"LinearAxis"}],"left":[{"id":"cadff646-8af4-4b8c-a40b-0da490b68ed7","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f639fe58-54d7-462c-a8ba-fbecbebc1115","type":"LinearAxis"},{"id":"f7bcb563-7f90-4dd7-9dc1-df69e3fbcc0c","type":"Grid"},{"id":"cadff646-8af4-4b8c-a40b-0da490b68ed7","type":"LinearAxis"},{"id":"beb5f23f-4025-4f68-bbde-1941cb7c0ad7","type":"Grid"},{"id":"f94d99c3-dd07-4042-9d97-b8145a8850c4","type":"BoxAnnotation"},{"id":"17aa196c-be04-47ad-b494-62b2113ad3d9","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9fbfe69b-5c5d-4a89-a4e6-b1292115cd12","type":"Toolbar"},"x_range":{"id":"ae75a223-dea5-4a88-8e8e-ea5cf2be7e22","type":"DataRange1d"},"x_scale":{"id":"2c20cbc5-09d0-4c0b-9cfb-1abcecf036ca","type":"LinearScale"},"y_range":{"id":"30d8c151-e965-439b-a630-2b6f464d5be4","type":"DataRange1d"},"y_scale":{"id":"8a58ac16-6296-44e6-9371-7f807453ce1b","type":"LinearScale"}},"id":"3f214a31-4338-4ea8-af1f-9d24632d8ce2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"dc31db06-5c20-458b-a735-99df25d92eb2","type":"SaveTool"},{"attributes":{},"id":"744486ec-b624-47bc-b51c-92224b922d0f","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"4b1f6727-b646-4c44-828e-e36d494c4160","type":"ColumnDataSource"},{"attributes":{},"id":"46fbb937-72ad-470a-822c-8a6656b19b8e","type":"BasicTicker"},{"attributes":{"overlay":{"id":"f94d99c3-dd07-4042-9d97-b8145a8850c4","type":"BoxAnnotation"}},"id":"0faf713a-53ce-46fc-8c10-96451b445cc0","type":"BoxZoomTool"},{"attributes":{},"id":"f6ac7886-a3ef-4264-8c66-49ed4edf3fa2","type":"ResetTool"},{"attributes":{},"id":"db37f704-1212-4e8c-9d5f-38291921317f","type":"SaveTool"},{"attributes":{"callback":null},"id":"667638e1-795e-4d76-918c-8ed972749532","type":"DataRange1d"},{"attributes":{"plot":{"id":"3f214a31-4338-4ea8-af1f-9d24632d8ce2","subtype":"Figure","type":"Plot"},"ticker":{"id":"46fbb937-72ad-470a-822c-8a6656b19b8e","type":"BasicTicker"}},"id":"f7bcb563-7f90-4dd7-9dc1-df69e3fbcc0c","type":"Grid"},{"attributes":{},"id":"04fdf457-c94b-4487-a373-cf5054633c07","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cadc076e-d2f7-4790-9ff0-ba6bfa576937","type":"Square"}],"root_ids":["aea72fa5-f63d-47ab-afd8-f25441818365"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"994afc56-bf51-48d9-bf22-619ade88dad4","elementid":"15eaa1ac-a412-4915-ade4-21ddb8468561","modelid":"aea72fa5-f63d-47ab-afd8-f25441818365"}];
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