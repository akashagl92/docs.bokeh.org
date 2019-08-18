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
      };var element = document.getElementById("9fa6966a-9b40-468d-8c49-3e6648dd907e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9fa6966a-9b40-468d-8c49-3e6648dd907e' but no matching script tag was found. ")
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
                    var docs_json = '{"393526a2-7696-40fd-b2a7-d4b608ac7aaf":{"roots":{"references":[{"attributes":{},"id":"80d4f114-3286-49b0-b38a-621519599906","type":"BasicTicker"},{"attributes":{},"id":"75692ab8-765f-4b1e-8aa8-ad0b5bba422e","type":"BasicTicker"},{"attributes":{"source":{"id":"b280d729-52ad-4201-8755-4ad08a297854","type":"ColumnDataSource"}},"id":"e4e34e11-1077-4b92-aeff-f1a33fa44214","type":"CDSView"},{"attributes":{},"id":"16785907-0536-489e-96d8-4440058809c7","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"af32129b-ab5d-4347-84ac-778c2a0e8f28","type":"ColumnDataSource"},"glyph":{"id":"b67ab6c5-6da5-4ce4-a8d8-2e6ef658139c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5a4f4dae-e1d7-4f2a-8d0e-460c4b3d7244","type":"Circle"},"selection_glyph":null,"view":{"id":"a4263167-04ee-46b5-8693-a086eff17241","type":"CDSView"}},"id":"2e052e4b-77d7-4e71-8756-baa4243f453e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"70b9538a-99d6-4f4b-8fcb-d1841c619d4c","type":"DataRange1d"},{"attributes":{},"id":"cb4f5346-3e81-44cb-9207-b650eb319369","type":"LinearScale"},{"attributes":{},"id":"13298f2a-8a62-4196-ac19-17a09da6f9dc","type":"LinearScale"},{"attributes":{},"id":"18025fd4-e4eb-4b08-9319-6d8049084b30","type":"BasicTickFormatter"},{"attributes":{},"id":"54304da9-0a52-481b-9bdf-31e97b565515","type":"BasicTicker"},{"attributes":{"callback":{"id":"b4b8d161-6732-4108-ae57-5fb6e11a8111","type":"CustomJS"},"column_names":["x","y"],"data":{"x":[0.8593228251670867,0.38976378632420894,0.9813233910259502,0.45250894132394404,0.16902068937665193,0.13182485354573592,0.7118220451825557,0.13906762261056094,0.3105794247689607,0.5505714484139905,0.7767499377766405,0.45963545923995286,0.8092616632392168,0.7885342530931478,0.20604449415689152,0.6511371684287133,0.16061036749198487,0.5461605404624126,0.7540741712660477,0.34007729991164537,0.8005266876845695,0.6439846009526606,0.6210524977003372,0.6473423091227045,0.02979296351059957,0.8972187172197318,0.04297577781986728,0.3986607966260486,0.5595155352636505,0.3303811958465305,0.46031646671284654,0.9585144393879989,0.432839655023331,0.6894630971590113,0.9666458703462596,0.5859695161776475,0.14256085231580318,0.1540412169663573,0.005617799704021431,0.4037509151149361,0.21479391091593214,0.5929882559785699,0.9936319990181783,0.4730299362681334,0.4345436871259609,0.3112602899624256,0.18629550599384692,0.2522281813109465,0.9439839040068329,0.27137570847564685,0.21152396441479837,0.6521057451439892,0.31226989192003574,0.4424576304272124,0.943538036815583,0.7335028223780112,0.8493060273043049,0.48846764747604376,0.5860858226971859,0.8283860361888461,0.3674470184912557,0.5882119331953416,0.6463574641072815,0.4007284305115154,0.7376263819398304,0.4479968478368852,0.688093669802667,0.6723416492486609,0.12389786403996783,0.4965721594577098,0.48046459153346976,0.7025219211173748,0.9622823112036079,0.383109857871228,0.5112358702490869,0.11469503152102223,0.6721707460810842,0.4551362340919911,0.47024852343233203,0.05735873257506563,0.820922111572997,0.3995964479965537,0.9740045476525159,0.19006299675067695,0.18111782479909122,0.856542876796053,0.8283242721417321,0.19576881295485893,0.1353600448138601,0.229855282913067,0.6745204966992924,0.02977981596083379,0.971898085267392,0.31977283354092756,0.6297891217133496,0.2567713118653505,0.09613246599238723,0.49365946993918197,0.259859515594679,0.18849834166273494,0.11876278031772203,0.8011140116161165,0.6539822316592819,0.6980158315925139,0.20530566391761995,0.48167970239122304,0.4889564882492513,0.21482598288563615,0.5430137426666887,0.4631449549397052,0.6783134756732138,0.7047314915356713,0.29384896583848297,0.6998223582392087,0.9371119487668699,0.2909248810483809,0.5038487417675721,0.2948205629325329,0.6025794287639258,0.16416567915170477,0.2966711381577427,0.22126318947484014,0.6066211647165464,0.6306588119573241,0.6743910654714882,0.9624286890187197,0.2299032815428359,0.5608327289744227,0.2593837491266363,0.8245518771357193,0.16375923702928596,0.3836398177587589,0.6622037058855746,0.22581874352995124,0.07949947358779397,0.8287579706817229,0.010983661511527076,0.1967826835649703,0.6475691154598056,0.8693290474129515,0.5033467622237646,0.9935483371794724,0.2566512078579384,0.220749362739035,0.5303381876942691,0.4141882935719684,0.16283532118443056,0.458185015415826,0.32401898179975863,0.22071796523900855,0.816714262996173,0.2525570407827815,0.7948157955613018,0.5557821823254103,0.3249230314565422,0.5607982128115302,0.45060733068834424,0.26140682497095213,0.6985327087733857,0.7392989309393181,0.5972272103813809,0.9191891460195184,0.35325368815420766,0.9902524065692505,0.4157724627025994,0.11482124698852758,0.8438643135133935,0.7954749589934639,0.07265620009849094,0.15854433751607466,0.32440163763017893,0.8573489999224881,0.3622923385176501,0.7090599528211187,0.7295143856376376,0.5542375695762993,0.9550566784501583,0.2075049778487893,0.15849074787524198,0.15198926925090428,0.9513474969179061,0.17679235847159547,0.8159472634778262,0.896798870214088,0.4860594856375836,0.7978035348708227,0.1455517290845082,0.6170507126754575,0.2007977474549495,0.9855777841817152,0.8056777614083728,0.6178447905496447,0.7782429912268767,0.985656715041739,0.7934728539468756,0.022838905086011718,0.3462734793221607,0.37893202311808627,0.025190521965015034,0.891187936544613,0.7941693540460238,0.19988437304681228,0.4811580969439406,0.30127936395747534,0.7251509236036524,0.9639432034409965,0.7556961493614418,0.5710556248069418,0.5721739042568231,0.5931399174964624,0.27334063229131744,0.7515707311108244,0.3240400149231667,0.5701866851644586,0.061802002438713255,0.39948012505959596,0.39986449525583556,0.620978611254728,0.2958202238318367,0.055217992344749556,0.06577854480339218,0.43026854973383244,0.9652844128724478,0.07553864905992336,0.4337644020236895,0.8710978594442315,0.9719328334554639,0.18832039060010164,0.7975374994366823,0.12648149146708665,0.9396148798929741,0.06510737855586146,0.3449056937188366,0.021092150389382502,0.5171358745644349,0.7164570668267669,0.19600242903544374,0.33160401129479844,0.1620771063995391,0.8809974101302446,0.630882670509777,0.09779492833380521,0.15427610386222002,0.13105363768434775,0.11017542269868963,0.7098081583655856,0.40594204503143394,0.2549653738208195,0.4631921374413278,0.5889236871897823,0.9659758995515855,0.9400318488267156,0.09436593595861531,0.49908314477866955,0.7469160542187163,0.5920645486629593,0.2662815518330992,0.3759038578433339,0.010180510796859221,0.40544211358386795,0.1269498896587119,0.8857965001190781,0.23150594895880994,0.8165882921790074,0.22444872300685192,0.28880268970884426,0.7606630160131141,0.6458182470048209,0.6510114998435815,0.7554868608080229,0.2675927804731818,0.2987113191643901,0.8099231150869849,0.4321015341001815,0.9965261232690141,0.6361367593083226,0.7363068993201438,0.2724172396375897,0.3437428162823186,0.25602900871455925,0.3696497270311564,0.218080807743944,0.5212857414268187,0.8802452825713077,0.48529791491293106,0.2113580813542154,0.08552688812013332,0.2799189938341947,0.6466504924626322,0.0804979613165202,0.561608345124747,0.3413105343825146,0.16816002725133194,0.053809098495572916,0.5126953262920358,0.41900580705878465,0.38774129019389025,0.4580117555636303,0.4416083500662704,0.4299698858675538,0.5815267600453945,0.6672929137158145,0.13857825451263417,0.09075252882136797,0.18963228981476354,0.251869463622438,0.4842065120125212,0.9986044110503208,0.751049192385155,0.2801547527087167,0.4987783350245816,0.8408369459355438,0.40991974824572863,0.8709728115914663,0.4866005071760784,0.7018651967867623,0.030220016938207195,0.24661143699447052,0.01600918605212176,0.28767780264311504,0.27413632537514365,0.8909133638853359,0.1344125894295981,0.5594526289813287,0.7525847852019479,0.20830546788893833,0.029478756917920457,0.09734416493590214,0.447626648661266,0.7398840510749832,0.046325210993669486,0.6043340682667301,0.3447564780719521,0.3723085420849245,0.1890956917219334,0.059887734574091356,0.6247504450972108,0.20739134346110122,0.15400366031357338,0.4835216380460253,0.15078422259063462,0.5449863355210343,0.957218502553557,0.2629550093373101,0.8531455667129034,0.5781543194219919,0.7027036330419475,0.992758340891683,0.31619839657656723,0.47632952597931466,0.777927218332289,0.9482674886440126,0.26395300543169486,0.7163289177653152,0.9913963498202399,0.033536563228121485,0.42359374246099346,0.22632358434667632,0.3075049930804422,0.9150203895587967,0.4970629859961616,0.8443845091089774,0.7099182871292223,0.8283064463067121,0.9076212451387774,0.7392048704964514,0.884832329160083,0.3971376388701512,0.22907264392589222,0.8368098806091226,0.3784803428833722,0.8206343603471019,0.29343517321364665,0.5087075369471383,0.522276705224006,0.763478625738201,0.25988577784024314,0.23316663831360718,0.7112802969228917,0.28141305804321093,0.8905362245182422,0.7421373823394201,0.6682415509759971,0.9393179312409663,0.7886562539260038,0.9927832500820714,0.9308954421656759,0.6871138353949652,0.4824137672785068,0.6237540673037977,0.7504729644269286,0.5380841657920186,0.469581095161832,0.39116797622087995,0.33403145684159896,0.6366952106375989,0.5075500685909403,0.1892667737016338,0.5078352247794562,0.6802868216855622,0.7720917967282714,0.9490130337674131,0.18566470092900356,0.9150145799430303,0.3141101033859163,0.549107463408908,0.029954831611137878,0.8669051277187659,0.6353500902225726,0.3875636456551198,0.5727294574150721,0.7599121328747899,0.1254397377880221,0.05922036159091726,0.3820681576659116,0.5216352423094893,0.4863791057141298,0.009888625643859394,0.8118429581222671,0.6001745606336887,0.9976519112254314,0.21349660223710143,0.989148994784135,0.7006413189820228,0.7801461537078337,0.941127814720156,0.8568509782201433,0.7427140302727734,0.5308078974100213,0.4199292653648179,0.2968421135639002,0.5503953054306929,0.6906877444357644,0.9434501826130927,0.43651418697859845,0.1798448109677866,0.358109040653402,0.062464632867497705,0.3150238788709949,0.5787433263074908,0.05462653871123635,0.11339705773339648,0.5256211974807438,0.3096303401382343,0.03882987756200251,0.5650773223270324,0.3841147863455677,0.43599735981968446,0.7269342985570939,0.4483672704120344,0.12150173388958585,0.7580672595158797,0.3838005960817136,0.8506818410278322,0.7947575852585829,0.11456508119624054,0.33949686473202556,0.3022708227446004,0.4491975489575629,0.331933570756629,0.8889673531358683,0.012747854032346795,0.950031301953076,0.3138916448430735,0.6591532742678984,0.1553694326873074,0.2770343475327749,0.1778332042272669,0.19080872131712456,0.9692714865560836,0.7325188078127546,0.6768477334126264,0.654715767841599,0.7792670695138596,0.9462015267070636,0.05787768370396307,0.5532860242569868,0.0671466936970675,0.8672188754960457,0.4102838886671465,0.13493628584784179,0.008381101234055999,0.889993810208595,0.8705079052046801,0.45067079206823546,0.32495846557309804,0.7001522995629109,0.9715366250806154,0.24112447945126614,0.2832218001294927,0.1915962400074681,0.6923819786477043,0.22958699995998166,0.8385083331005142,0.49949581657252384,0.9489422038413375,0.24672440189205647,0.6339420985557846,0.9662766055217171,0.860657319487111],"y":[0.8137455987735036,0.06816005272387937,0.7099423344681225,0.2619934392836545,0.8731237511767691,0.35198688396694333,0.018406091880604825,0.6126183942872506,0.37955885475177464,0.7463370290925079,0.7254882652027712,0.5469942014621187,0.07197879985144107,0.8142267485196949,0.9852038924837385,0.41820889056308275,0.9747548380281444,0.8492811545269987,0.12625435824583964,0.4239156229022545,0.8113673506628901,0.6148452242128032,0.3278213892086922,0.5574982335623575,0.05747039178450042,0.507297478106124,0.25421555706129106,0.8507703102636606,0.11895834320219534,0.5193343325510434,0.04773303406639551,0.011155492798307298,0.7117147459287791,0.6059399326313132,0.2530598309633758,0.652872343739398,0.39605001252614813,0.7951949069164761,0.5924280044260231,0.3843353348256201,0.6325090607088507,0.8754224643023253,0.8976489765933664,0.1696202096265671,0.2420534088640267,0.2600206024575058,0.04816112376298587,0.20308246623886728,0.26860554287577987,0.5559495195783589,0.6825208143883958,0.5351805027149158,0.10978418568390436,0.7170059827447586,0.06522218631661214,0.6640910891197079,0.2048414476317315,0.9269978640608233,0.5701462817696721,0.6487935320542436,0.8159659152096899,0.6365387895086518,0.6671115069599806,0.3377488493030055,0.5511623790830138,0.8866683126752891,0.1990207172768641,0.5056594809548939,0.8425143556385617,0.003988849730473976,0.9122446855353498,0.3708899940034024,0.7570821925191945,0.8636839781523726,0.9771636646228911,0.33532837023571715,0.3836773806855386,0.35163841550837416,0.7354473596110281,0.9349417242345338,0.9953110151343036,0.8505287798188125,0.9244405176214479,0.12525250302873214,0.8971491009599861,0.765115827547326,0.5489096228119068,0.45203279766007276,0.9878740136237095,0.4993827092552886,0.8417320883469915,0.15983663855066976,0.7504331801082967,0.4644610592235615,0.9327606180438782,0.9733511775759315,0.419758341807121,0.6486843813970904,0.6995298679534955,0.1944222095477227,0.12213690477001904,0.2643296119024643,0.9512093781491309,0.582236955802669,0.15361360315484862,0.697016717913123,0.48187414048713073,0.7615765923360505,0.08656774719898996,0.7118636747700108,0.030242489054070232,0.6830197584150852,0.8051999908990757,0.82162306865755,0.5841374153706504,0.2271552281655127,0.015520676966200964,0.5151386732219477,0.6980179132271581,0.5727102423070154,0.6206765981951199,0.9854842462518761,0.5495362566396457,0.5124383409538251,0.8883336926489,0.3430827305418349,0.5437998754352679,0.6956056588721292,0.16394256445454514,0.19536010808824122,0.8115618008681628,0.03983859781150434,0.10238631133767617,0.7676429493966654,0.8719614283106033,0.770213133149898,0.8768752380015239,0.4585501701423843,0.7645590592011212,0.9202861711382443,0.18797370877407626,0.26820986129417546,0.0880510957920605,0.5346754430100086,0.40936031269923,0.44976993336261817,0.9353986565294296,0.7082997148806424,0.2886456979258024,0.9324663067666795,0.612603320747429,0.9460973035875986,0.12390618516126173,0.7660503115622737,0.48576956291551454,0.05235325269880564,0.2869318245116381,0.8231732523224927,0.8550754206078203,0.4479550126502254,0.358121551179604,0.9299789200596202,0.1266827472910269,0.9863103114688008,0.6653796712237676,0.9928383179233846,0.9026617768813112,0.6404597380461667,0.25906261099027694,0.7451219774029464,0.11976490714653609,0.3372752669742103,0.9872818391281856,0.7253453316046583,0.29933966496271003,0.9218668853682913,0.09526465208866364,0.9660948184362619,0.47635992491107604,0.05711399872937184,0.6510928134033336,0.3834795673994632,0.9443758163693364,0.2652604709296392,0.5586914757797076,0.6528948311070052,0.9648971252873129,0.9665343844690388,0.333398182689839,0.7908476069520177,0.8229133188465396,0.3785403544724535,0.9052153253305545,0.7566780226667015,0.20223146271408188,0.8739382136442876,0.028832500884978463,0.3459273908406366,0.44227030770480236,0.6096441196976151,0.8493799694533546,0.20911379472970715,0.88642339920538,0.5100838944017957,0.44157261173440976,0.9901553130036747,0.02354001117551474,0.7605800661917296,0.7632398741729972,0.09372829080774059,0.920055139889987,0.7504948096758229,0.028820450733759717,0.030767385721457652,0.7807713217581062,0.5184163587691871,0.9322607813490146,0.04171392279636288,0.3924138557015805,0.6448373396808229,0.37181993097235855,0.9907043716215246,0.6376409104997092,0.8536023325574275,0.12201013448913345,0.7270163775058424,0.8111357356216333,0.6350027655514229,0.709611651464186,0.7026487759865389,0.48435109705832957,0.4229328177480668,0.2915216431631934,0.7608393738786706,0.5871736800533958,0.5825552662293965,0.11707150463974836,0.9317383223520869,0.35618845169596625,0.47489864753383737,0.7468212115203858,0.6215730707724361,0.07575641855223347,0.08472107737969325,0.42608897035398385,0.07063727134313491,0.9552295548051029,0.3615691457880196,0.9941036312723974,0.0451457119811608,0.9325380767544299,0.24741870266278287,0.637654300199592,0.2027141097179448,0.1805417199097431,0.4455797412621515,0.21001348572028788,0.31593696291842255,0.9491612727176497,0.7806297861723214,0.19511095747873097,0.6582742582351552,0.8415172964086293,0.9306514825012446,0.6793927175941279,0.9638971257313026,0.752367445483652,0.27159459774082295,0.09149180501327037,0.6241295264150907,0.16347245177661018,0.5566138269879343,0.14516941701741803,0.5141782487225686,0.22190249815409402,0.4355205355769285,0.3181135951185152,0.1894770356428095,0.5534111828438738,0.04610501517267551,0.6863945422643903,0.9411164703389142,0.930643480778818,0.09483072826340655,0.08361244253096178,0.8904027912363777,0.20327271017288118,0.09119943529200147,0.2518909217435623,0.520760288296969,0.17351398085194225,0.8140070835382167,0.3273855465405323,0.3545210777309956,0.7277358693766809,0.7061805786827917,0.7310051126070203,0.8424472751924247,0.6825941925556067,0.6791056708930517,0.5066550583500041,0.17115781956748366,0.7317168000380406,0.16286881403500997,0.31089374442149853,0.6675205291177653,0.5033362481864613,0.8100155468008204,0.07042865781444185,0.7308097376757896,0.7586470100224414,0.23880360108328846,0.48032339227059295,0.6139170598083143,0.19125264229676453,0.1852544192935559,0.035868725346446584,0.2345838500817069,0.13954782348315342,0.9313953085895703,0.3923765177050119,0.25126927130239074,0.9084888076168409,0.12193149955946536,0.6508913488232945,0.6653555924738581,0.18006262542696772,0.6334066972135078,0.6020510769556546,0.5468555637608483,0.1751021792563484,0.27125635780110047,0.010364652683745312,0.4025688137985922,0.2050508372027814,0.5231282967100023,0.9523972212316286,0.9834110974740747,0.5287801599460836,0.6077756888951984,0.8269528715010527,0.915401300180205,0.5667992982702912,0.620696511277101,0.8817997868637516,0.8055641061500867,0.23308030036556193,0.8036179725602856,0.8763680061554906,0.8205390600896576,0.4977598240325658,0.570443244681735,0.09906793913505219,0.06881264068171045,0.87679002924263,0.6633589588621986,0.036466042812507427,0.4096707405932303,0.7087862322886213,0.31376157654115033,0.8499945189607006,0.47233583571929416,0.4427882352552722,0.7492766086182733,0.37756756773335354,0.5461665624205385,0.94969869888501,0.41365815333940725,0.8363641020921849,0.9535460865443777,0.2447945460449482,0.9730954449217276,0.765775423218266,0.27928127366333244,0.8461583034776278,0.30176053492443167,0.11532241559062428,0.7722314784586398,0.893043669386704,0.6904627536181854,0.5195813929505047,0.43587768305127406,0.9472915300370467,0.8847545143706778,0.25120773562392695,0.306434010213385,0.7875118376855084,0.5723604828121974,0.624495074234882,0.7739639728770304,0.4569495906856217,0.7876454262121794,0.8363192876210193,0.49722786440522493,0.044148485431544704,0.05001415452183855,0.029997654355826686,0.622963575769199,0.6248391148109016,0.6254062882907452,0.5986090411099897,0.506710324212142,0.07777138815056683,0.7868604708960591,0.9197196149965894,0.6117131160889024,0.25861192303489644,0.20109520590922525,0.9966947423602841,0.17373979386692862,0.39797104302570196,0.5044113078956015,0.050228962960691015,0.5889400472681604,0.7568489703136729,0.7831996429566537,0.6755598172252096,0.4067092767998497,0.11286055169181064,0.07004731948200771,0.12854867572470874,0.7802165417667614,0.9277772074860674,0.8607566050164704,0.6048074535472456,0.3587116272853721,0.6049310140559641,0.32805569854997596,0.37511994510011826,0.2038917525947681,0.5151426330596968,0.5623612747007091,0.07006779402344698,0.612544028923332,0.3008326909651464,0.3217611885919146,0.5853455462628385,0.8700999494153117,0.6715539763371341,0.06048332409578083,0.6841546444901954,0.9247966489050156,0.9318461963568813,0.7970631250660901,0.4120091016975379,0.038868538342422876,0.48056728898491163,0.45747547457571613,0.4756355719633474,0.8073700999415867,0.18777415555729393,0.007627776488677851,0.9975802588950019,0.8342688075274788,0.8742894118685269,0.7346601460742754,0.8006509697979233,0.9767595738429349,0.34540888276582804,0.09211843772916661,0.5247824297658079,0.9251157628832587,0.5755055009228259,0.3952997344440198,0.10503485243686206,0.8074160131367671,0.09852197324937473,0.04855926947025213,0.09606882871993916,0.27876677185903065,0.7774260617180165,0.5810703860414536,0.46778081532001636,0.5840787584920993,0.24509016280061535,0.48561369657606646,0.5157129007563168,0.31442226473292534,0.8823714275087836,0.9333755717565554,0.36880280653563036,0.3573314807693453,0.22936578441284938,0.5410263782515652,0.0979353504674586,0.6126501766612268,0.7843585820336568,0.9649895660850091,0.9001330390644757,0.3847328973794143,0.6469134553833168,0.8705375013909065,0.025085664031671673,0.8789705091000537,0.349464135062745,0.19066230263209716,0.7513048763261886,0.18696046607370165,0.8693961297983,0.6034965537984738]}},"id":"af32129b-ab5d-4347-84ac-778c2a0e8f28","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b67ab6c5-6da5-4ce4-a8d8-2e6ef658139c","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"431eb4a0-8171-478f-b016-a7b50aff892c","type":"Toolbar"},{"attributes":{"formatter":{"id":"18025fd4-e4eb-4b08-9319-6d8049084b30","type":"BasicTickFormatter"},"plot":{"id":"237f1aea-1303-4a56-aaba-24e70f3e4fe9","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd8debef-4a6c-4750-9ca8-6e80406a2f0c","type":"BasicTicker"}},"id":"2eb3922f-56e3-45ed-962e-006da7eeec88","type":"LinearAxis"},{"attributes":{},"id":"a8352339-14f2-404a-8677-b20281f7e774","type":"LinearScale"},{"attributes":{"callback":null},"id":"4c12f5f7-f1b2-462c-bee6-de3b8b3f6720","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"99f0e2cc-521d-4892-8b49-95aaec7cc198","type":"LassoSelectTool"}]},"id":"20a12c15-cfc1-4b1e-bb25-c269b36d3755","type":"Toolbar"},{"attributes":{"plot":null,"text":"Select Here"},"id":"ad972078-4a91-4ecf-80fd-d001e0c40f5c","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d316eb0-8922-44e1-948f-16e1618eea3a","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"c97a3ebc-bce6-433f-95a3-10abb8cd91d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"80d4f114-3286-49b0-b38a-621519599906","type":"BasicTicker"}},"id":"940cc89d-945e-43e4-a75b-41b60cae8522","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b760f84f-2bf4-4b2a-b5bd-88a5c9c484e1","type":"Circle"},{"attributes":{},"id":"a0194e72-4ba9-4a78-a87b-2f4642aebaf4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"b280d729-52ad-4201-8755-4ad08a297854","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"787cbcd9-b142-414e-8723-3fd5cd8566a6","type":"PolyAnnotation"}},"id":"99f0e2cc-521d-4892-8b49-95aaec7cc198","type":"LassoSelectTool"},{"attributes":{"args":{"s2":{"id":"b280d729-52ad-4201-8755-4ad08a297854","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected[&#x27;1d&#x27;].indices;\\n        var d1 = cb_obj.data;\\n        var d2 = s2.data;\\n        d2[&#x27;x&#x27;] = []\\n        d2[&#x27;y&#x27;] = []\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d2[&#x27;x&#x27;].push(d1[&#x27;x&#x27;][inds[i]])\\n            d2[&#x27;y&#x27;].push(d1[&#x27;y&#x27;][inds[i]])\\n        }\\n        s2.change.emit();\\n    "},"id":"b4b8d161-6732-4108-ae57-5fb6e11a8111","type":"CustomJS"},{"attributes":{"callback":null},"id":"2139f6ca-3ed5-4868-805b-c36241bf02c4","type":"Range1d"},{"attributes":{"below":[{"id":"2eb3922f-56e3-45ed-962e-006da7eeec88","type":"LinearAxis"}],"left":[{"id":"c49605d1-b6c1-49c3-ac6b-1a8f18e62750","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2eb3922f-56e3-45ed-962e-006da7eeec88","type":"LinearAxis"},{"id":"8ef138bd-b024-47bf-a449-e346d800bc85","type":"Grid"},{"id":"c49605d1-b6c1-49c3-ac6b-1a8f18e62750","type":"LinearAxis"},{"id":"4e4f3096-e5cf-4d86-a0eb-802d3ed72389","type":"Grid"},{"id":"e88c356e-a721-4bd4-8a87-66ab54a089de","type":"GlyphRenderer"}],"title":{"id":"6db4b3a5-f861-41e7-9cea-cfcef5e8f983","type":"Title"},"toolbar":{"id":"431eb4a0-8171-478f-b016-a7b50aff892c","type":"Toolbar"},"x_range":{"id":"2139f6ca-3ed5-4868-805b-c36241bf02c4","type":"Range1d"},"x_scale":{"id":"decfe880-2647-4738-b42f-1d907baa76d7","type":"LinearScale"},"y_range":{"id":"4c12f5f7-f1b2-462c-bee6-de3b8b3f6720","type":"Range1d"},"y_scale":{"id":"cb4f5346-3e81-44cb-9207-b650eb319369","type":"LinearScale"}},"id":"237f1aea-1303-4a56-aaba-24e70f3e4fe9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33ce8ef7-69d8-4d5a-a2c8-8d66be6fc80c","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"af32129b-ab5d-4347-84ac-778c2a0e8f28","type":"ColumnDataSource"}},"id":"a4263167-04ee-46b5-8693-a086eff17241","type":"CDSView"},{"attributes":{"formatter":{"id":"33ce8ef7-69d8-4d5a-a2c8-8d66be6fc80c","type":"BasicTickFormatter"},"plot":{"id":"c97a3ebc-bce6-433f-95a3-10abb8cd91d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"75692ab8-765f-4b1e-8aa8-ad0b5bba422e","type":"BasicTicker"}},"id":"6b1a9dce-0614-42e8-b904-89c3805ee0f4","type":"LinearAxis"},{"attributes":{"children":[{"id":"c97a3ebc-bce6-433f-95a3-10abb8cd91d3","subtype":"Figure","type":"Plot"},{"id":"237f1aea-1303-4a56-aaba-24e70f3e4fe9","subtype":"Figure","type":"Plot"}]},"id":"c88d3baf-e8bc-495e-b4db-c9a5bcb09eff","type":"Row"},{"attributes":{"data_source":{"id":"b280d729-52ad-4201-8755-4ad08a297854","type":"ColumnDataSource"},"glyph":{"id":"b760f84f-2bf4-4b2a-b5bd-88a5c9c484e1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3d316eb0-8922-44e1-948f-16e1618eea3a","type":"Circle"},"selection_glyph":null,"view":{"id":"e4e34e11-1077-4b92-aeff-f1a33fa44214","type":"CDSView"}},"id":"e88c356e-a721-4bd4-8a87-66ab54a089de","type":"GlyphRenderer"},{"attributes":{},"id":"decfe880-2647-4738-b42f-1d907baa76d7","type":"LinearScale"},{"attributes":{},"id":"bd8debef-4a6c-4750-9ca8-6e80406a2f0c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a0194e72-4ba9-4a78-a87b-2f4642aebaf4","type":"BasicTickFormatter"},"plot":{"id":"237f1aea-1303-4a56-aaba-24e70f3e4fe9","subtype":"Figure","type":"Plot"},"ticker":{"id":"54304da9-0a52-481b-9bdf-31e97b565515","type":"BasicTicker"}},"id":"c49605d1-b6c1-49c3-ac6b-1a8f18e62750","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a4f4dae-e1d7-4f2a-8d0e-460c4b3d7244","type":"Circle"},{"attributes":{"formatter":{"id":"16785907-0536-489e-96d8-4440058809c7","type":"BasicTickFormatter"},"plot":{"id":"c97a3ebc-bce6-433f-95a3-10abb8cd91d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"80d4f114-3286-49b0-b38a-621519599906","type":"BasicTicker"}},"id":"7673c9b5-4381-492b-8a2c-27a4459694a0","type":"LinearAxis"},{"attributes":{"plot":{"id":"237f1aea-1303-4a56-aaba-24e70f3e4fe9","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd8debef-4a6c-4750-9ca8-6e80406a2f0c","type":"BasicTicker"}},"id":"8ef138bd-b024-47bf-a449-e346d800bc85","type":"Grid"},{"attributes":{"below":[{"id":"6b1a9dce-0614-42e8-b904-89c3805ee0f4","type":"LinearAxis"}],"left":[{"id":"7673c9b5-4381-492b-8a2c-27a4459694a0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6b1a9dce-0614-42e8-b904-89c3805ee0f4","type":"LinearAxis"},{"id":"42d923d9-6604-4115-bfa5-a4377639d614","type":"Grid"},{"id":"7673c9b5-4381-492b-8a2c-27a4459694a0","type":"LinearAxis"},{"id":"940cc89d-945e-43e4-a75b-41b60cae8522","type":"Grid"},{"id":"787cbcd9-b142-414e-8723-3fd5cd8566a6","type":"PolyAnnotation"},{"id":"2e052e4b-77d7-4e71-8756-baa4243f453e","type":"GlyphRenderer"}],"title":{"id":"ad972078-4a91-4ecf-80fd-d001e0c40f5c","type":"Title"},"toolbar":{"id":"20a12c15-cfc1-4b1e-bb25-c269b36d3755","type":"Toolbar"},"x_range":{"id":"5105a591-1ca9-477d-8e46-a47ed0654688","type":"DataRange1d"},"x_scale":{"id":"13298f2a-8a62-4196-ac19-17a09da6f9dc","type":"LinearScale"},"y_range":{"id":"70b9538a-99d6-4f4b-8fcb-d1841c619d4c","type":"DataRange1d"},"y_scale":{"id":"a8352339-14f2-404a-8677-b20281f7e774","type":"LinearScale"}},"id":"c97a3ebc-bce6-433f-95a3-10abb8cd91d3","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"237f1aea-1303-4a56-aaba-24e70f3e4fe9","subtype":"Figure","type":"Plot"},"ticker":{"id":"54304da9-0a52-481b-9bdf-31e97b565515","type":"BasicTicker"}},"id":"4e4f3096-e5cf-4d86-a0eb-802d3ed72389","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"787cbcd9-b142-414e-8723-3fd5cd8566a6","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"5105a591-1ca9-477d-8e46-a47ed0654688","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"6db4b3a5-f861-41e7-9cea-cfcef5e8f983","type":"Title"},{"attributes":{"plot":{"id":"c97a3ebc-bce6-433f-95a3-10abb8cd91d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"75692ab8-765f-4b1e-8aa8-ad0b5bba422e","type":"BasicTicker"}},"id":"42d923d9-6604-4115-bfa5-a4377639d614","type":"Grid"}],"root_ids":["c88d3baf-e8bc-495e-b4db-c9a5bcb09eff"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"393526a2-7696-40fd-b2a7-d4b608ac7aaf","elementid":"9fa6966a-9b40-468d-8c49-3e6648dd907e","modelid":"c88d3baf-e8bc-495e-b4db-c9a5bcb09eff"}];
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