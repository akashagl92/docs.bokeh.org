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
      };var element = document.getElementById("253c2b80-35db-4594-a9e1-c80e8d94511a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '253c2b80-35db-4594-a9e1-c80e8d94511a' but no matching script tag was found. ")
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
                    var docs_json = '{"eb06069b-a3db-4ec8-9a04-95ba85e3881f":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"a00901e6-9d8f-40ca-beed-f2ba1874e5f3","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"e533072f-8b70-41a7-8f30-504304399ba8","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"230d334e-4514-4a7c-aa51-241f3a125eec","type":"Line"},{"attributes":{"items":[{"id":"6b0bf8d0-119b-4001-9b86-b32262612588","type":"LegendItem"},{"id":"25758229-3e7a-40e6-8d05-4c4dea856fa8","type":"LegendItem"},{"id":"cac6ddfb-cca9-4ea8-b55d-a5f4e66cccee","type":"LegendItem"},{"id":"839c7d53-1c8d-4034-8314-5c8e3f9e6839","type":"LegendItem"}],"plot":{"id":"935f7ef5-ecbe-47d9-aed1-f5038852c927","subtype":"Figure","type":"Plot"}},"id":"50f2c44a-2b5a-4c00-8c79-33e48322cac7","type":"Legend"},{"attributes":{"data_source":{"id":"9a3228fd-a9ae-46b1-9988-6c470fe210db","type":"ColumnDataSource"},"glyph":{"id":"5bcf6aba-8e8b-408f-b53f-478ea9b6c1b7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"07524b92-309d-4f70-bc9b-3e4e3050deb2","type":"Line"},"selection_glyph":null,"view":{"id":"a216c10f-f851-4394-849d-bb934b009ac2","type":"CDSView"}},"id":"2624c173-a514-4bd5-ba68-f6e79187c6d4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"c4e94627-84f4-419a-aa9b-01aa69af8009","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"07524b92-309d-4f70-bc9b-3e4e3050deb2","type":"Line"},{"attributes":{"data_source":{"id":"c4e94627-84f4-419a-aa9b-01aa69af8009","type":"ColumnDataSource"},"glyph":{"id":"698eda0f-3bcf-4df5-b655-d87738c4b86c","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c34f09f0-9dd4-40e1-86c9-a68b516c0ec3","type":"Line"},"selection_glyph":null,"view":{"id":"ca2e11d6-b411-4dc0-8e98-c66d1d021074","type":"CDSView"}},"id":"91147780-71fc-44c3-88a5-fc294073d5d7","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"babe2055-827c-462c-8162-35fc3166ad5f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"10041596-60b5-4ae0-94b8-b6bcb1a5c2b7","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"c34f09f0-9dd4-40e1-86c9-a68b516c0ec3","type":"Line"},{"attributes":{"plot":null,"text":"log axis example"},"id":"6a1c847b-691e-4b3d-a9e4-85c9f57da6b6","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8265ee9c-b754-4fe6-a866-f54730d9cda2","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"10041596-60b5-4ae0-94b8-b6bcb1a5c2b7","type":"ColumnDataSource"},"glyph":{"id":"c5e73187-d273-440c-9c4b-9800e3aea107","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"789b36a7-f755-45e4-9d19-b82e0fded925","type":"Circle"},"selection_glyph":null,"view":{"id":"d3828b48-6c42-4a38-ba03-dac8da3d2fd8","type":"CDSView"}},"id":"87e50965-56dc-47a5-963d-fb9174b15470","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"8307453f-097d-45cb-a8b7-ccff6984a039","type":"Circle"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"91147780-71fc-44c3-88a5-fc294073d5d7","type":"GlyphRenderer"}]},"id":"839c7d53-1c8d-4034-8314-5c8e3f9e6839","type":"LegendItem"},{"attributes":{"data_source":{"id":"f2447394-8df8-42fd-9989-b45c12027221","type":"ColumnDataSource"},"glyph":{"id":"cfdc46b7-1d69-45cd-a337-cead9ff1ff78","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e7a0513a-f2a9-43a7-8817-57a73369ff47","type":"Line"},"selection_glyph":null,"view":{"id":"f9691dee-1313-447d-b62f-7d2f1f1fa2ac","type":"CDSView"}},"id":"6f4fe9c7-d47e-4f5b-9d05-8fa5c2905191","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5e73187-d273-440c-9c4b-9800e3aea107","type":"Circle"},{"attributes":{"data_source":{"id":"a00901e6-9d8f-40ca-beed-f2ba1874e5f3","type":"ColumnDataSource"},"glyph":{"id":"babe2055-827c-462c-8162-35fc3166ad5f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8307453f-097d-45cb-a8b7-ccff6984a039","type":"Circle"},"selection_glyph":null,"view":{"id":"6c7f6f3a-b812-4a34-ab8a-81d6eab4ee9c","type":"CDSView"}},"id":"0c2b5d3b-713e-4cf2-92c9-48634a476a2d","type":"GlyphRenderer"},{"attributes":{},"id":"3f7aceeb-5568-48a6-b664-37db99b4dcf7","type":"LinearScale"},{"attributes":{"callback":null},"id":"16b5fe2d-0994-43be-8abc-a7486cbe7bb6","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"80d3e99c-a17f-4361-a69b-548ab579d4a3","type":"Line"},{"attributes":{},"id":"97e1854b-4578-4042-a71b-32e34bbc7a83","type":"PanTool"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"6f4fe9c7-d47e-4f5b-9d05-8fa5c2905191","type":"GlyphRenderer"},{"id":"0c2b5d3b-713e-4cf2-92c9-48634a476a2d","type":"GlyphRenderer"}]},"id":"6b0bf8d0-119b-4001-9b86-b32262612588","type":"LegendItem"},{"attributes":{"axis_label":"sections","formatter":{"id":"897aab96-0218-4bdb-9bee-26f4045c3d26","type":"BasicTickFormatter"},"plot":{"id":"935f7ef5-ecbe-47d9-aed1-f5038852c927","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e8c91f5-5a32-421d-a9f3-d46bae227034","type":"BasicTicker"}},"id":"6fb9bf17-f09c-4e40-96f9-4727cb5c64f8","type":"LinearAxis"},{"attributes":{},"id":"708c4f7c-d0c5-43ff-8db6-c2f9be86cf14","type":"LogScale"},{"attributes":{},"id":"471fc680-7980-43cd-845d-9b2de8246268","type":"ResetTool"},{"attributes":{"source":{"id":"10041596-60b5-4ae0-94b8-b6bcb1a5c2b7","type":"ColumnDataSource"}},"id":"d3828b48-6c42-4a38-ba03-dac8da3d2fd8","type":"CDSView"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"698eda0f-3bcf-4df5-b655-d87738c4b86c","type":"Line"},{"attributes":{"source":{"id":"c4e94627-84f4-419a-aa9b-01aa69af8009","type":"ColumnDataSource"}},"id":"ca2e11d6-b411-4dc0-8e98-c66d1d021074","type":"CDSView"},{"attributes":{"num_minor_ticks":10},"id":"e6b21486-5774-4421-81ba-134336ef1312","type":"LogTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"e7a0513a-f2a9-43a7-8817-57a73369ff47","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"97e1854b-4578-4042-a71b-32e34bbc7a83","type":"PanTool"},{"id":"bf123a90-30ab-47df-9afb-46a1fdc4bec2","type":"BoxZoomTool"},{"id":"471fc680-7980-43cd-845d-9b2de8246268","type":"ResetTool"},{"id":"ed81f39f-9688-48f9-aee9-2e17fa2e5ea4","type":"SaveTool"}]},"id":"feb2d83a-133d-4ef3-9c25-99ee8fb22883","type":"Toolbar"},{"attributes":{"ticker":null},"id":"22d41428-85f9-4730-bf01-57d74eeb56ca","type":"LogTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"fc4b4a8a-328b-46bb-9ec1-32efa8745a19","type":"ColumnDataSource"},{"attributes":{},"id":"ed81f39f-9688-48f9-aee9-2e17fa2e5ea4","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"935f7ef5-ecbe-47d9-aed1-f5038852c927","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6b21486-5774-4421-81ba-134336ef1312","type":"LogTicker"}},"id":"db061480-5a08-41b6-a59a-eb66285b735e","type":"Grid"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"cfdc46b7-1d69-45cd-a337-cead9ff1ff78","type":"Line"},{"attributes":{"overlay":{"id":"8265ee9c-b754-4fe6-a866-f54730d9cda2","type":"BoxAnnotation"}},"id":"bf123a90-30ab-47df-9afb-46a1fdc4bec2","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"fc4b4a8a-328b-46bb-9ec1-32efa8745a19","type":"ColumnDataSource"},"glyph":{"id":"80d3e99c-a17f-4361-a69b-548ab579d4a3","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"230d334e-4514-4a7c-aa51-241f3a125eec","type":"Line"},"selection_glyph":null,"view":{"id":"d9cec356-e92a-4c4d-a2a6-e3a450b571c2","type":"CDSView"}},"id":"1c9521c8-8fb7-4752-b531-26746fbd4144","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"1c9521c8-8fb7-4752-b531-26746fbd4144","type":"GlyphRenderer"}]},"id":"25758229-3e7a-40e6-8d05-4c4dea856fa8","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"f2447394-8df8-42fd-9989-b45c12027221","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9a3228fd-a9ae-46b1-9988-6c470fe210db","type":"ColumnDataSource"}},"id":"a216c10f-f851-4394-849d-bb934b009ac2","type":"CDSView"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"5bcf6aba-8e8b-408f-b53f-478ea9b6c1b7","type":"Line"},{"attributes":{"axis_label":"particles","formatter":{"id":"22d41428-85f9-4730-bf01-57d74eeb56ca","type":"LogTickFormatter"},"plot":{"id":"935f7ef5-ecbe-47d9-aed1-f5038852c927","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6b21486-5774-4421-81ba-134336ef1312","type":"LogTicker"}},"id":"577328b5-0c92-4642-b3a0-c7ec36ffb32e","type":"LogAxis"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"2624c173-a514-4bd5-ba68-f6e79187c6d4","type":"GlyphRenderer"},{"id":"87e50965-56dc-47a5-963d-fb9174b15470","type":"GlyphRenderer"}]},"id":"cac6ddfb-cca9-4ea8-b55d-a5f4e66cccee","type":"LegendItem"},{"attributes":{"below":[{"id":"6fb9bf17-f09c-4e40-96f9-4727cb5c64f8","type":"LinearAxis"}],"left":[{"id":"577328b5-0c92-4642-b3a0-c7ec36ffb32e","type":"LogAxis"}],"renderers":[{"id":"6fb9bf17-f09c-4e40-96f9-4727cb5c64f8","type":"LinearAxis"},{"id":"82d8c31d-3ba8-41d0-b78b-ed738f5df40d","type":"Grid"},{"id":"577328b5-0c92-4642-b3a0-c7ec36ffb32e","type":"LogAxis"},{"id":"db061480-5a08-41b6-a59a-eb66285b735e","type":"Grid"},{"id":"8265ee9c-b754-4fe6-a866-f54730d9cda2","type":"BoxAnnotation"},{"id":"50f2c44a-2b5a-4c00-8c79-33e48322cac7","type":"Legend"},{"id":"6f4fe9c7-d47e-4f5b-9d05-8fa5c2905191","type":"GlyphRenderer"},{"id":"0c2b5d3b-713e-4cf2-92c9-48634a476a2d","type":"GlyphRenderer"},{"id":"1c9521c8-8fb7-4752-b531-26746fbd4144","type":"GlyphRenderer"},{"id":"2624c173-a514-4bd5-ba68-f6e79187c6d4","type":"GlyphRenderer"},{"id":"87e50965-56dc-47a5-963d-fb9174b15470","type":"GlyphRenderer"},{"id":"91147780-71fc-44c3-88a5-fc294073d5d7","type":"GlyphRenderer"}],"title":{"id":"6a1c847b-691e-4b3d-a9e4-85c9f57da6b6","type":"Title"},"toolbar":{"id":"feb2d83a-133d-4ef3-9c25-99ee8fb22883","type":"Toolbar"},"x_range":{"id":"16b5fe2d-0994-43be-8abc-a7486cbe7bb6","type":"DataRange1d"},"x_scale":{"id":"3f7aceeb-5568-48a6-b664-37db99b4dcf7","type":"LinearScale"},"y_range":{"id":"e533072f-8b70-41a7-8f30-504304399ba8","type":"Range1d"},"y_scale":{"id":"708c4f7c-d0c5-43ff-8db6-c2f9be86cf14","type":"LogScale"}},"id":"935f7ef5-ecbe-47d9-aed1-f5038852c927","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"a00901e6-9d8f-40ca-beed-f2ba1874e5f3","type":"ColumnDataSource"}},"id":"6c7f6f3a-b812-4a34-ab8a-81d6eab4ee9c","type":"CDSView"},{"attributes":{"source":{"id":"fc4b4a8a-328b-46bb-9ec1-32efa8745a19","type":"ColumnDataSource"}},"id":"d9cec356-e92a-4c4d-a2a6-e3a450b571c2","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"9a3228fd-a9ae-46b1-9988-6c470fe210db","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f2447394-8df8-42fd-9989-b45c12027221","type":"ColumnDataSource"}},"id":"f9691dee-1313-447d-b62f-7d2f1f1fa2ac","type":"CDSView"},{"attributes":{"plot":{"id":"935f7ef5-ecbe-47d9-aed1-f5038852c927","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e8c91f5-5a32-421d-a9f3-d46bae227034","type":"BasicTicker"}},"id":"82d8c31d-3ba8-41d0-b78b-ed738f5df40d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"789b36a7-f755-45e4-9d19-b82e0fded925","type":"Circle"},{"attributes":{},"id":"8e8c91f5-5a32-421d-a9f3-d46bae227034","type":"BasicTicker"},{"attributes":{},"id":"897aab96-0218-4bdb-9bee-26f4045c3d26","type":"BasicTickFormatter"}],"root_ids":["935f7ef5-ecbe-47d9-aed1-f5038852c927"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"eb06069b-a3db-4ec8-9a04-95ba85e3881f","elementid":"253c2b80-35db-4594-a9e1-c80e8d94511a","modelid":"935f7ef5-ecbe-47d9-aed1-f5038852c927"}];
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