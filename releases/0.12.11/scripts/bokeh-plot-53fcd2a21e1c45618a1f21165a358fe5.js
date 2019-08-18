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
      };var element = document.getElementById("1d4cea68-3ac1-4a93-b341-c8ce465a5eed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d4cea68-3ac1-4a93-b341-c8ce465a5eed' but no matching script tag was found. ")
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
                    var docs_json = '{"a3a8f22b-e7de-4e33-a049-d135b04c4947":{"roots":{"references":[{"attributes":{"plot":{"id":"2e4eec22-47c5-444f-8c88-13b7f5ad0b35","type":"Plot"},"ticker":{"id":"3d35c741-b110-45a3-a86f-02770935328c","type":"BasicTicker"}},"id":"7cb94449-02c5-4b52-ab23-e1404f7358f0","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"c850ceb8-230f-4dfe-91a6-4cd3c9aef46e","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9e4bfe36-2a2e-4fb5-86dd-fdbe0fc949ce","type":"PanTool"},{"id":"dce4d138-aa86-4188-8bef-2affb4da4d72","type":"WheelZoomTool"}]},"id":"9d125584-f4f5-47f7-bd55-9b7d07bbe6c9","type":"Toolbar"},{"attributes":{},"id":"54707e2d-72d3-432a-8d6c-77a55cfd07e9","type":"LinearScale"},{"attributes":{},"id":"5604b397-c7b0-4b15-9f25-12893b1eae5c","type":"BasicTicker"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"d63b73c7-13f7-4e45-87c1-31962faa503d","type":"CDSView"},{"attributes":{},"id":"22649016-37db-4db6-b187-401da2148246","type":"LinearScale"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"a3c0b5a8-60a7-4d64-bae6-249dd32df4a4","type":"CDSView"},{"attributes":{},"id":"367c06cb-8dbd-446d-ae31-9c0f5a25ad8f","type":"BasicTicker"},{"attributes":{"formatter":{"id":"00e50415-c2cb-48c2-8bf7-66e3035929f0","type":"BasicTickFormatter"},"plot":{"id":"4fad9731-a2a7-431e-a065-3f8228c605c7","type":"Plot"},"ticker":{"id":"48c6e2b6-1c4f-4d2a-9734-7680ef5e980e","type":"BasicTicker"}},"id":"a22e527f-9c4a-450b-b7b9-83020a41385e","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"066ad82a-b602-4545-8222-4c8ed8e37fb0","type":"Plot"},"ticker":{"id":"30a4d150-6ee5-4cec-bb51-d4c1f72f8ef6","type":"BasicTicker"}},"id":"7e252417-07a1-4202-85cd-831d9f22a6bc","type":"Grid"},{"attributes":{},"id":"eece74ad-215b-4897-9ae9-f6023c1145ef","type":"LinearScale"},{"attributes":{},"id":"00e713b4-8c56-4e4d-815a-c9436c24d2ca","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"e744590e-b2a4-4599-87f3-7376bfd686f1","type":"Title"},{"attributes":{"plot":{"id":"066ad82a-b602-4545-8222-4c8ed8e37fb0","type":"Plot"},"ticker":{"id":"367c06cb-8dbd-446d-ae31-9c0f5a25ad8f","type":"BasicTicker"}},"id":"2ffec116-053b-4b0a-a541-17b7291b2e25","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"00e713b4-8c56-4e4d-815a-c9436c24d2ca","type":"PanTool"},{"id":"5f4e388f-3f01-45ae-a99c-5e0019d3e4aa","type":"WheelZoomTool"}]},"id":"eb1751bc-35c6-4d59-89eb-444a463bb23c","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"ee70afe7-6a5d-48ab-ae11-2fb90f11dcb0","type":"Title"},{"attributes":{},"id":"95869294-1338-4ac8-8dd5-e9acf7591d93","type":"WheelZoomTool"},{"attributes":{},"id":"8b1c0ad0-aeae-4e78-9f37-dac6d181e9a8","type":"LinearScale"},{"attributes":{},"id":"30a4d150-6ee5-4cec-bb51-d4c1f72f8ef6","type":"BasicTicker"},{"attributes":{},"id":"5f4e388f-3f01-45ae-a99c-5e0019d3e4aa","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"0d16ddb7-6d81-4b80-b2ed-5adcd4f0115c","type":"GlyphRenderer"},{"id":"2ffec116-053b-4b0a-a541-17b7291b2e25","type":"Grid"},{"id":"7e252417-07a1-4202-85cd-831d9f22a6bc","type":"Grid"}],"title":{"id":"dde88754-ee1e-44e2-9d07-1608de7487e8","type":"Title"},"toolbar":{"id":"eb1751bc-35c6-4d59-89eb-444a463bb23c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"3585f3a4-4f67-4d15-8fc2-7b6489e4c36e","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"5086ee58-c97f-46f8-8b09-e44f2a8811c7","type":"LinearScale"}},"id":"066ad82a-b602-4545-8222-4c8ed8e37fb0","type":"Plot"},{"attributes":{},"id":"bcc8aab9-a587-4a67-ad14-6c8ebb065428","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"5867dc06-309f-4d41-9a4a-b868b0263546","type":"GlyphRenderer"},{"id":"8f1af662-6bf6-4ca8-8700-fabc61b995e0","type":"Grid"},{"id":"e4e645ea-09ca-477d-a670-7e6a25ba2b94","type":"Grid"}],"title":{"id":"c850ceb8-230f-4dfe-91a6-4cd3c9aef46e","type":"Title"},"toolbar":{"id":"9d125584-f4f5-47f7-bd55-9b7d07bbe6c9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"22649016-37db-4db6-b187-401da2148246","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"54707e2d-72d3-432a-8d6c-77a55cfd07e9","type":"LinearScale"}},"id":"2ba0021b-6405-4151-be3a-c63a9eb2353c","type":"Plot"},{"attributes":{},"id":"58572d1c-1524-4684-9796-94f61f2e63ce","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_width"}},"id":"1c5c320e-79ed-4ca6-a40b-531eff2b730e","type":"Circle"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"1c5c320e-79ed-4ca6-a40b-531eff2b730e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d63b73c7-13f7-4e45-87c1-31962faa503d","type":"CDSView"}},"id":"0d16ddb7-6d81-4b80-b2ed-5adcd4f0115c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"1d30c6c5-dc07-44ce-98b5-cc2ed5b0f0b8","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_width"}},"id":"f2366725-e604-4b1b-b4af-8344ef30542e","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4354e844-9a17-4322-9985-da631c580a91","type":"PanTool"},{"id":"e71296aa-b64b-45f7-89e7-df2ff2518063","type":"WheelZoomTool"}]},"id":"6a1c397f-1fb1-42e8-bf7b-0bb83a5da56f","type":"Toolbar"},{"attributes":{"children":[{"id":"1dd87108-8c66-441a-a4d8-b2baf433f3bf","type":"Plot"},{"id":"dfa3dbc2-9e7f-40d0-a1da-30eebc61a7bd","type":"Plot"},{"id":"f3433cf9-2cb7-4b21-abe7-d4c3b5e8123e","type":"Plot"},{"id":"5c41644e-6350-4abe-86d7-7c8ca75a4f51","type":"Plot"}]},"id":"6ba09322-5aa0-49a3-83da-334ab3c0ef6c","type":"Row"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"f2366725-e604-4b1b-b4af-8344ef30542e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a9460549-e28a-420b-871b-dc783490a8f2","type":"CDSView"}},"id":"5867dc06-309f-4d41-9a4a-b868b0263546","type":"GlyphRenderer"},{"attributes":{},"id":"6398386e-e134-4698-8b98-8181bde2075f","type":"LinearScale"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"a9460549-e28a-420b-871b-dc783490a8f2","type":"CDSView"},{"attributes":{},"id":"545de390-8cd4-4ba6-984b-1b2e567fcaa1","type":"BasicTicker"},{"attributes":{},"id":"9e2fe992-d29d-401b-acfe-d43bd9a78ad0","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2ba0021b-6405-4151-be3a-c63a9eb2353c","type":"Plot"},"ticker":{"id":"d7941b54-7127-4a93-b116-abefdd29528b","type":"BasicTicker"}},"id":"e4e645ea-09ca-477d-a670-7e6a25ba2b94","type":"Grid"},{"attributes":{},"id":"6d853da8-a97f-4bd3-9cf0-035f0fe17d62","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["petal_length","petal_width","sepal_length","sepal_width","color"],"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]}}},"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},{"attributes":{},"id":"9e4bfe36-2a2e-4fb5-86dd-fdbe0fc949ce","type":"PanTool"},{"attributes":{},"id":"d2b66de9-e4d1-4c87-b86b-8020fba34465","type":"LinearScale"},{"attributes":{"callback":null,"renderers":[{"id":"ca672873-a7ac-4c45-8741-31cee382eaba","type":"GlyphRenderer"},{"id":"fcc81919-ef32-4fac-9c6c-88f624e75e64","type":"GlyphRenderer"},{"id":"3521df43-2d53-43d9-80fd-c019021e7169","type":"GlyphRenderer"},{"id":"20bb2595-a2a9-49f4-b366-53d5dadaa63c","type":"GlyphRenderer"},{"id":"5af7045e-6d3b-4c10-9db0-ad43b376ef73","type":"GlyphRenderer"},{"id":"0d16ddb7-6d81-4b80-b2ed-5adcd4f0115c","type":"GlyphRenderer"},{"id":"5867dc06-309f-4d41-9a4a-b868b0263546","type":"GlyphRenderer"},{"id":"1ed7069a-bbca-494e-88ab-47d4bae8df6c","type":"GlyphRenderer"},{"id":"3c7abffb-3257-471b-9442-870e451b034f","type":"GlyphRenderer"},{"id":"564bd7c2-883f-4b83-a780-34d8bd8a9c34","type":"GlyphRenderer"},{"id":"f8daf7ec-8bd6-4b1b-a0ee-d31793714824","type":"GlyphRenderer"},{"id":"0e580539-8ec3-48df-94dc-05629c5b6265","type":"GlyphRenderer"},{"id":"a0f5a29a-026b-4b0f-aee7-081c4e0fdae8","type":"GlyphRenderer"},{"id":"1ae29bc3-eaad-474a-9d8b-463e6e037685","type":"GlyphRenderer"},{"id":"1eacfb50-f526-4d62-ad40-c92598292426","type":"GlyphRenderer"},{"id":"ec59b18a-13e7-4a5d-9d60-472dd44bcd75","type":"GlyphRenderer"}]},"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},{"attributes":{"plot":{"id":"2ba0021b-6405-4151-be3a-c63a9eb2353c","type":"Plot"},"ticker":{"id":"545de390-8cd4-4ba6-984b-1b2e567fcaa1","type":"BasicTicker"}},"id":"8f1af662-6bf6-4ca8-8700-fabc61b995e0","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"f499b243-62c4-4b8a-9ced-4c113b92a440","type":"Title"},{"attributes":{"callback":null,"renderers":[{"id":"ca672873-a7ac-4c45-8741-31cee382eaba","type":"GlyphRenderer"},{"id":"fcc81919-ef32-4fac-9c6c-88f624e75e64","type":"GlyphRenderer"},{"id":"3521df43-2d53-43d9-80fd-c019021e7169","type":"GlyphRenderer"},{"id":"20bb2595-a2a9-49f4-b366-53d5dadaa63c","type":"GlyphRenderer"},{"id":"5af7045e-6d3b-4c10-9db0-ad43b376ef73","type":"GlyphRenderer"},{"id":"0d16ddb7-6d81-4b80-b2ed-5adcd4f0115c","type":"GlyphRenderer"},{"id":"5867dc06-309f-4d41-9a4a-b868b0263546","type":"GlyphRenderer"},{"id":"1ed7069a-bbca-494e-88ab-47d4bae8df6c","type":"GlyphRenderer"},{"id":"3c7abffb-3257-471b-9442-870e451b034f","type":"GlyphRenderer"},{"id":"564bd7c2-883f-4b83-a780-34d8bd8a9c34","type":"GlyphRenderer"},{"id":"f8daf7ec-8bd6-4b1b-a0ee-d31793714824","type":"GlyphRenderer"},{"id":"0e580539-8ec3-48df-94dc-05629c5b6265","type":"GlyphRenderer"},{"id":"a0f5a29a-026b-4b0f-aee7-081c4e0fdae8","type":"GlyphRenderer"},{"id":"1ae29bc3-eaad-474a-9d8b-463e6e037685","type":"GlyphRenderer"},{"id":"1eacfb50-f526-4d62-ad40-c92598292426","type":"GlyphRenderer"},{"id":"ec59b18a-13e7-4a5d-9d60-472dd44bcd75","type":"GlyphRenderer"}]},"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},{"attributes":{},"id":"d7941b54-7127-4a93-b116-abefdd29528b","type":"BasicTicker"},{"attributes":{"children":[{"id":"b69158f4-00f0-4187-83f4-c0aab1b84b4b","type":"Row"},{"id":"5164d577-81a5-48fb-a7a6-a5cc666e27aa","type":"Row"},{"id":"6ba09322-5aa0-49a3-83da-334ab3c0ef6c","type":"Row"},{"id":"d18c76fc-e017-440f-af9e-faa80de746ec","type":"Row"}]},"id":"51d929db-efc8-4dc9-b94d-5c575a31d8a2","type":"Column"},{"attributes":{},"id":"dce4d138-aa86-4188-8bef-2affb4da4d72","type":"WheelZoomTool"},{"attributes":{},"id":"a4fa1957-9e81-4eb2-a4d8-468303519e80","type":"LinearScale"},{"attributes":{"children":[{"id":"7d97f0de-d4d4-4c42-a690-65311fd93ccd","type":"Plot"},{"id":"2e4eec22-47c5-444f-8c88-13b7f5ad0b35","type":"Plot"},{"id":"a3da9f1c-0cd3-4fb5-ad5c-a2a3a32db3d8","type":"Plot"},{"id":"dd9c3303-02b7-4984-850f-8e8868319be8","type":"Plot"}]},"id":"b69158f4-00f0-4187-83f4-c0aab1b84b4b","type":"Row"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"1ed7069a-bbca-494e-88ab-47d4bae8df6c","type":"GlyphRenderer"},{"id":"2720f92a-37c9-4f7e-96bd-b9d6d426d506","type":"Grid"},{"id":"539bf92c-58cb-4835-a16c-91ddb619fce0","type":"Grid"}],"title":{"id":"ee70afe7-6a5d-48ab-ae11-2fb90f11dcb0","type":"Title"},"toolbar":{"id":"6a1c397f-1fb1-42e8-bf7b-0bb83a5da56f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"bcc8aab9-a587-4a67-ad14-6c8ebb065428","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"58572d1c-1524-4684-9796-94f61f2e63ce","type":"LinearScale"}},"id":"5384d188-831b-42b9-b5fb-7245faeaea6f","type":"Plot"},{"attributes":{},"id":"1940df69-7a80-4e97-bd13-8ed5b74c2454","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"887a78fd-0656-4607-8177-8c4ca0cc0ce1","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"ca672873-a7ac-4c45-8741-31cee382eaba","type":"GlyphRenderer"},{"id":"91c70bc6-92cb-43a3-b4ef-f1adbc8679e6","type":"Grid"},{"id":"887a78fd-0656-4607-8177-8c4ca0cc0ce1","type":"LinearAxis"},{"id":"f3998706-735b-4290-bbba-037ddddea64e","type":"Grid"}],"title":{"id":"83c22dc2-be44-4bb9-b620-549e2212a5da","type":"Title"},"toolbar":{"id":"628e5df8-8893-4045-8ece-307699e9408a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"36355b83-92b0-4cba-8527-1bf64dad361d","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"4792dd74-80a3-4bc5-85cc-b548b83b168d","type":"LinearScale"}},"id":"7d97f0de-d4d4-4c42-a690-65311fd93ccd","type":"Plot"},{"attributes":{},"id":"2ff9bfcd-7cc8-4baa-b7d4-c65bdf73d14a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_width"}},"id":"9230a5ee-3e32-4e65-b9b1-e1a6af608064","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"60d59a86-1b82-4c76-b33c-63f8ba5ae475","type":"PanTool"},{"id":"2fec3112-0577-4d60-864c-9e594f1bac45","type":"WheelZoomTool"}]},"id":"628e5df8-8893-4045-8ece-307699e9408a","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"247c3a59-cc78-4570-9ae9-2a699ace3246","type":"PanTool"},{"id":"cfce2c97-1d0d-419e-8bf6-444dc487d5eb","type":"WheelZoomTool"}]},"id":"645f0db4-0564-47ca-847c-ec3679de98e7","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"4d74f056-81c8-447f-8d33-edfa8368fc58","type":"Title"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"9230a5ee-3e32-4e65-b9b1-e1a6af608064","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"fa95c1fe-2406-4b83-b729-f86297e6c4ee","type":"CDSView"}},"id":"1ed7069a-bbca-494e-88ab-47d4bae8df6c","type":"GlyphRenderer"},{"attributes":{},"id":"d6ca6fb6-d8d6-47f7-ad37-4ddb4326ddbf","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_length"}},"id":"9f65be1f-4a03-4fbc-97f9-54a93a9cde26","type":"Circle"},{"attributes":{},"id":"60d59a86-1b82-4c76-b33c-63f8ba5ae475","type":"PanTool"},{"attributes":{},"id":"55a3bb39-38f7-4897-86e1-2eca583bbd27","type":"LinearScale"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"fa95c1fe-2406-4b83-b729-f86297e6c4ee","type":"CDSView"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"9f65be1f-4a03-4fbc-97f9-54a93a9cde26","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"847db720-8ee3-4d0f-b17e-429f95440f56","type":"CDSView"}},"id":"ca672873-a7ac-4c45-8741-31cee382eaba","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"a18312b1-a11b-456c-a41e-569dc3d117d7","type":"Title"},{"attributes":{},"id":"c01d7e07-c291-4ef3-81ff-8c7ec9bb3e01","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5384d188-831b-42b9-b5fb-7245faeaea6f","type":"Plot"},"ticker":{"id":"3f1529e3-77f7-4d73-a437-26b09977b89f","type":"BasicTicker"}},"id":"539bf92c-58cb-4835-a16c-91ddb619fce0","type":"Grid"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"847db720-8ee3-4d0f-b17e-429f95440f56","type":"CDSView"},{"attributes":{"children":[{"id":"af5c942d-265c-44c2-98a4-7894454c667e","type":"Plot"},{"id":"a868a607-810c-412c-80ec-7ae499ab4beb","type":"Plot"},{"id":"4e7b8f0b-0b00-4565-8e77-d7c4e744dc4e","type":"Plot"},{"id":"c3c662f0-3dd7-42f9-97a8-3280be9a6c33","type":"Plot"}]},"id":"d18c76fc-e017-440f-af9e-faa80de746ec","type":"Row"},{"attributes":{},"id":"4354e844-9a17-4322-9985-da631c580a91","type":"PanTool"},{"attributes":{},"id":"9395cc83-d9fb-47d5-8a21-7e9fcc1b21d3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9bbdc477-015a-4234-83a9-633c32d8581f","type":"BasicTickFormatter"},"plot":{"id":"7d97f0de-d4d4-4c42-a690-65311fd93ccd","type":"Plot"},"ticker":{"id":"c3a1791b-1b9c-44b5-973a-65f680d5a3a3","type":"BasicTicker"}},"id":"887a78fd-0656-4607-8177-8c4ca0cc0ce1","type":"LinearAxis"},{"attributes":{"plot":{"id":"5384d188-831b-42b9-b5fb-7245faeaea6f","type":"Plot"},"ticker":{"id":"c01d7e07-c291-4ef3-81ff-8c7ec9bb3e01","type":"BasicTicker"}},"id":"2720f92a-37c9-4f7e-96bd-b9d6d426d506","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"7e2e27dc-5418-45ef-b145-7de78e1f310b","type":"Title"},{"attributes":{},"id":"c3a1791b-1b9c-44b5-973a-65f680d5a3a3","type":"BasicTicker"},{"attributes":{},"id":"3f1529e3-77f7-4d73-a437-26b09977b89f","type":"BasicTicker"},{"attributes":{},"id":"11912e4c-ea5a-404c-8525-c6bbcff78e0b","type":"BasicTickFormatter"},{"attributes":{},"id":"e71296aa-b64b-45f7-89e7-df2ff2518063","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7d97f0de-d4d4-4c42-a690-65311fd93ccd","type":"Plot"},"ticker":{"id":"9395cc83-d9fb-47d5-8a21-7e9fcc1b21d3","type":"BasicTicker"}},"id":"91c70bc6-92cb-43a3-b4ef-f1adbc8679e6","type":"Grid"},{"attributes":{},"id":"ed0cdb81-24ea-4d42-ae48-028291691733","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"c9c83b77-82ed-48aa-9b12-06526fd102e8","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"3c7abffb-3257-471b-9442-870e451b034f","type":"GlyphRenderer"},{"id":"f3c54d99-f151-433b-b9c3-c8f5d8fdcd51","type":"Grid"},{"id":"c9c83b77-82ed-48aa-9b12-06526fd102e8","type":"LinearAxis"},{"id":"6a6fc000-9bdc-4860-a9cc-2e75e387cbad","type":"Grid"}],"title":{"id":"1d30c6c5-dc07-44ce-98b5-cc2ed5b0f0b8","type":"Title"},"toolbar":{"id":"645f0db4-0564-47ca-847c-ec3679de98e7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"eece74ad-215b-4897-9ae9-f6023c1145ef","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"8b1c0ad0-aeae-4e78-9f37-dac6d181e9a8","type":"LinearScale"}},"id":"1dd87108-8c66-441a-a4d8-b2baf433f3bf","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"7d97f0de-d4d4-4c42-a690-65311fd93ccd","type":"Plot"},"ticker":{"id":"c3a1791b-1b9c-44b5-973a-65f680d5a3a3","type":"BasicTicker"}},"id":"f3998706-735b-4290-bbba-037ddddea64e","type":"Grid"},{"attributes":{},"id":"ef3bbd35-2a50-49fb-ab0b-0d835763aa56","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ff3a9f09-c5ce-4c0a-9fd6-59f8e607d988","type":"PanTool"},{"id":"a9dfa7c5-9991-47e0-90ed-177948eb1716","type":"WheelZoomTool"}]},"id":"80902d6a-58d1-4130-90f1-db40500a2dfc","type":"Toolbar"},{"attributes":{},"id":"e661521a-e697-4aa1-afda-d18d4c0777b0","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"7a7fc9a4-d3e7-4f3c-809a-6148753d395b","type":"Circle"},{"attributes":{},"id":"2fec3112-0577-4d60-864c-9e594f1bac45","type":"WheelZoomTool"},{"attributes":{},"id":"247c3a59-cc78-4570-9ae9-2a699ace3246","type":"PanTool"},{"attributes":{},"id":"04ea4e8f-0b80-4d12-8aa0-a69732319e1c","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"fcc81919-ef32-4fac-9c6c-88f624e75e64","type":"GlyphRenderer"},{"id":"7cb94449-02c5-4b52-ab23-e1404f7358f0","type":"Grid"},{"id":"c0c1ab02-2421-42ad-8aca-5590b599b05d","type":"Grid"}],"title":{"id":"72372121-4d51-45a7-9df8-b31611f7ed9a","type":"Title"},"toolbar":{"id":"80902d6a-58d1-4130-90f1-db40500a2dfc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"616b24ea-7188-49ef-8eb4-e54d0e1aeea2","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"d079f782-b8e5-4495-b978-c2f4feff276a","type":"LinearScale"}},"id":"2e4eec22-47c5-444f-8c88-13b7f5ad0b35","type":"Plot"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"7a7fc9a4-d3e7-4f3c-809a-6148753d395b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11ef466e-09de-4ee1-92b0-27d92aae36b1","type":"CDSView"}},"id":"3c7abffb-3257-471b-9442-870e451b034f","type":"GlyphRenderer"},{"attributes":{},"id":"d8fac2e2-af0f-4c80-bccc-86a7a248142b","type":"LinearScale"},{"attributes":{},"id":"e51aae1b-c2e8-454a-8279-21000fb35865","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_length"}},"id":"024f695e-2fc0-4074-a0dd-aa0b5725800a","type":"Circle"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"11ef466e-09de-4ee1-92b0-27d92aae36b1","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70ca71b4-d301-484d-9d3e-a8cbd4bd59fb","type":"PanTool"},{"id":"45c3ee7b-26eb-4dc3-9124-e4624e3d83c0","type":"WheelZoomTool"}]},"id":"f3afac57-9bab-4f17-ac34-80dd551a30cd","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"1ae05b82-e80f-4b42-aba9-33ae999025bd","type":"Title"},{"attributes":{},"id":"c67345cc-76a4-4827-bc8b-255cc74d8905","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"024f695e-2fc0-4074-a0dd-aa0b5725800a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"03672a2c-35ac-41bb-83df-58c4647ed09a","type":"CDSView"}},"id":"fcc81919-ef32-4fac-9c6c-88f624e75e64","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9e2fe992-d29d-401b-acfe-d43bd9a78ad0","type":"BasicTickFormatter"},"plot":{"id":"1dd87108-8c66-441a-a4d8-b2baf433f3bf","type":"Plot"},"ticker":{"id":"06d21402-e0e5-4c03-ab28-42f8455c9045","type":"BasicTicker"}},"id":"c9c83b77-82ed-48aa-9b12-06526fd102e8","type":"LinearAxis"},{"attributes":{},"id":"085d4522-042b-438c-9003-16bc524cff6a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_length"}},"id":"b8c511ab-a21b-4a95-b6c3-9e99f1640ca3","type":"Circle"},{"attributes":{},"id":"06d21402-e0e5-4c03-ab28-42f8455c9045","type":"BasicTicker"},{"attributes":{"plot":{"id":"1dd87108-8c66-441a-a4d8-b2baf433f3bf","type":"Plot"},"ticker":{"id":"c67345cc-76a4-4827-bc8b-255cc74d8905","type":"BasicTicker"}},"id":"f3c54d99-f151-433b-b9c3-c8f5d8fdcd51","type":"Grid"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"03672a2c-35ac-41bb-83df-58c4647ed09a","type":"CDSView"},{"attributes":{},"id":"e6e621cc-49aa-4950-a922-bb419023e68a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"1dd87108-8c66-441a-a4d8-b2baf433f3bf","type":"Plot"},"ticker":{"id":"06d21402-e0e5-4c03-ab28-42f8455c9045","type":"BasicTicker"}},"id":"6a6fc000-9bdc-4860-a9cc-2e75e387cbad","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"35a30b58-4f2d-4a2e-9ba3-450960612a5b","type":"Title"},{"attributes":{},"id":"b8c73982-96a7-4eab-8079-1c47e43153f3","type":"BasicTicker"},{"attributes":{},"id":"a9dfa7c5-9991-47e0-90ed-177948eb1716","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6be98b1f-d38b-4f18-b038-3977169cc5e2","type":"PanTool"},{"id":"27b6f928-d4d2-491f-9b8e-c37b09eaa56e","type":"WheelZoomTool"}]},"id":"835f1b45-fd8b-41b2-b547-fee910133bf8","type":"Toolbar"},{"attributes":{},"id":"0dbcdca4-07ea-4ff3-93d5-5e776cb34d19","type":"LinearScale"},{"attributes":{},"id":"cfce2c97-1d0d-419e-8bf6-444dc487d5eb","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"3521df43-2d53-43d9-80fd-c019021e7169","type":"GlyphRenderer"},{"id":"171a2f68-4082-4c9f-828d-dd9c26d5fc49","type":"Grid"},{"id":"b98deebe-e424-4daf-8a39-fc52042d13ee","type":"Grid"}],"title":{"id":"bc41fc67-87d3-4af9-9ba1-5a3aa5236875","type":"Title"},"toolbar":{"id":"f3afac57-9bab-4f17-ac34-80dd551a30cd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"af98d888-967a-4fe4-8a02-a313f1efa6e3","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"9ec7d8af-2b91-4e9a-b156-d6f9fcf78c35","type":"LinearScale"}},"id":"a3da9f1c-0cd3-4fb5-ad5c-a2a3a32db3d8","type":"Plot"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"564bd7c2-883f-4b83-a780-34d8bd8a9c34","type":"GlyphRenderer"},{"id":"88d63a41-bbbb-4cd2-b256-86afea4375ba","type":"Grid"},{"id":"6298ea91-4375-4301-b591-0f611fcb4c6e","type":"Grid"}],"title":{"id":"f499b243-62c4-4b8a-9ced-4c113b92a440","type":"Title"},"toolbar":{"id":"835f1b45-fd8b-41b2-b547-fee910133bf8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"6d853da8-a97f-4bd3-9cf0-035f0fe17d62","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"d2b66de9-e4d1-4c87-b86b-8020fba34465","type":"LinearScale"}},"id":"dfa3dbc2-9e7f-40d0-a1da-30eebc61a7bd","type":"Plot"},{"attributes":{},"id":"3d35c741-b110-45a3-a86f-02770935328c","type":"BasicTicker"},{"attributes":{},"id":"0a852b81-5c89-4481-b17c-1f92e3b92e69","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"60d59a86-1b82-4c76-b33c-63f8ba5ae475","type":"PanTool"},{"id":"2fec3112-0577-4d60-864c-9e594f1bac45","type":"WheelZoomTool"},{"id":"ff3a9f09-c5ce-4c0a-9fd6-59f8e607d988","type":"PanTool"},{"id":"a9dfa7c5-9991-47e0-90ed-177948eb1716","type":"WheelZoomTool"},{"id":"70ca71b4-d301-484d-9d3e-a8cbd4bd59fb","type":"PanTool"},{"id":"45c3ee7b-26eb-4dc3-9124-e4624e3d83c0","type":"WheelZoomTool"},{"id":"b11a7250-c0e0-4841-ae25-b9c4a3f2eefc","type":"PanTool"},{"id":"59117e11-5bc9-4c2a-a865-d244e5c5f996","type":"WheelZoomTool"},{"id":"7f0135cf-7f92-4a69-bf91-72ac96457331","type":"PanTool"},{"id":"95869294-1338-4ac8-8dd5-e9acf7591d93","type":"WheelZoomTool"},{"id":"00e713b4-8c56-4e4d-815a-c9436c24d2ca","type":"PanTool"},{"id":"5f4e388f-3f01-45ae-a99c-5e0019d3e4aa","type":"WheelZoomTool"},{"id":"9e4bfe36-2a2e-4fb5-86dd-fdbe0fc949ce","type":"PanTool"},{"id":"dce4d138-aa86-4188-8bef-2affb4da4d72","type":"WheelZoomTool"},{"id":"4354e844-9a17-4322-9985-da631c580a91","type":"PanTool"},{"id":"e71296aa-b64b-45f7-89e7-df2ff2518063","type":"WheelZoomTool"},{"id":"247c3a59-cc78-4570-9ae9-2a699ace3246","type":"PanTool"},{"id":"cfce2c97-1d0d-419e-8bf6-444dc487d5eb","type":"WheelZoomTool"},{"id":"6be98b1f-d38b-4f18-b038-3977169cc5e2","type":"PanTool"},{"id":"27b6f928-d4d2-491f-9b8e-c37b09eaa56e","type":"WheelZoomTool"},{"id":"c70399a2-40a2-4fa7-9d57-3c2aba983811","type":"PanTool"},{"id":"b97a542b-faf5-477f-b280-6c31c3c13492","type":"WheelZoomTool"},{"id":"c9368567-ea94-4cec-a9b0-e7b0d77aa7a9","type":"PanTool"},{"id":"9f0aac66-b9ef-41ea-88e5-a7464e9c9b13","type":"WheelZoomTool"},{"id":"89f42ada-3101-493b-85c0-33ca1b63ee82","type":"PanTool"},{"id":"c8f39f1b-cd9d-442f-a886-acb7b9f72635","type":"WheelZoomTool"},{"id":"c2688ac1-9c61-4fe9-ad10-51ee36574ce8","type":"PanTool"},{"id":"8dab76d7-c866-43dc-9440-2cb1c205c1f4","type":"WheelZoomTool"},{"id":"3f4c830f-7c43-4e6e-9167-959a6ae7a91e","type":"PanTool"},{"id":"f247dc6b-d6e5-40cc-b8da-1916c0df8fe5","type":"WheelZoomTool"},{"id":"3a44342c-012d-4c7e-b415-4336a955e7d6","type":"PanTool"},{"id":"10354cab-4d4f-4110-ae0c-f8c47ae00615","type":"WheelZoomTool"}]},"id":"bd7aac1c-d2d2-4fb6-b732-05c5057d4705","type":"ProxyToolbar"},{"attributes":{"dimension":1,"plot":{"id":"2e4eec22-47c5-444f-8c88-13b7f5ad0b35","type":"Plot"},"ticker":{"id":"b8c73982-96a7-4eab-8079-1c47e43153f3","type":"BasicTicker"}},"id":"c0c1ab02-2421-42ad-8aca-5590b599b05d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_width"}},"id":"61d1341c-e1e5-4eed-afb6-81a315314afb","type":"Circle"},{"attributes":{},"id":"ff3a9f09-c5ce-4c0a-9fd6-59f8e607d988","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c70399a2-40a2-4fa7-9d57-3c2aba983811","type":"PanTool"},{"id":"b97a542b-faf5-477f-b280-6c31c3c13492","type":"WheelZoomTool"}]},"id":"afdfe886-33bc-44ab-846f-1d4d9e14ee60","type":"Toolbar"},{"attributes":{"toolbar":{"id":"bd7aac1c-d2d2-4fb6-b732-05c5057d4705","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"4d0a0c4d-62bd-4b1f-a93a-7fc86c659bed","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b11a7250-c0e0-4841-ae25-b9c4a3f2eefc","type":"PanTool"},{"id":"59117e11-5bc9-4c2a-a865-d244e5c5f996","type":"WheelZoomTool"}]},"id":"fb1ddbe4-3407-4ac0-8ae8-4666d9f60f8c","type":"Toolbar"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"61d1341c-e1e5-4eed-afb6-81a315314afb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"fb8abd40-3557-4500-a343-f19891c73c2d","type":"CDSView"}},"id":"564bd7c2-883f-4b83-a780-34d8bd8a9c34","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"4d0a0c4d-62bd-4b1f-a93a-7fc86c659bed","type":"ToolbarBox"},{"id":"51d929db-efc8-4dc9-b94d-5c575a31d8a2","type":"Column"}]},"id":"ad3d1123-552c-4501-b91d-8d9c7ba25db6","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"dd9c3303-02b7-4984-850f-8e8868319be8","type":"Plot"},"ticker":{"id":"5604b397-c7b0-4b15-9f25-12893b1eae5c","type":"BasicTicker"}},"id":"9440d880-1ae6-4748-81aa-227d6ab2007a","type":"Grid"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"fb8abd40-3557-4500-a343-f19891c73c2d","type":"CDSView"},{"attributes":{},"id":"59117e11-5bc9-4c2a-a865-d244e5c5f996","type":"WheelZoomTool"},{"attributes":{},"id":"ba6fb22b-8f79-4666-8913-6ef3508569de","type":"BasicTicker"},{"attributes":{},"id":"b11a7250-c0e0-4841-ae25-b9c4a3f2eefc","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"dfa3dbc2-9e7f-40d0-a1da-30eebc61a7bd","type":"Plot"},"ticker":{"id":"c7918221-13e0-401f-ab18-21dff561f946","type":"BasicTicker"}},"id":"6298ea91-4375-4301-b591-0f611fcb4c6e","type":"Grid"},{"attributes":{},"id":"6be98b1f-d38b-4f18-b038-3977169cc5e2","type":"PanTool"},{"attributes":{"plot":{"id":"dd9c3303-02b7-4984-850f-8e8868319be8","type":"Plot"},"ticker":{"id":"382fc355-1054-4349-90c3-20e8bb3c8d05","type":"BasicTicker"}},"id":"12ae8de9-2fed-4ff2-8345-f51dcb686fba","type":"Grid"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"b8c511ab-a21b-4a95-b6c3-9e99f1640ca3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1d40fd84-97fb-4b39-a801-748c1ff19956","type":"CDSView"}},"id":"3521df43-2d53-43d9-80fd-c019021e7169","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dfa3dbc2-9e7f-40d0-a1da-30eebc61a7bd","type":"Plot"},"ticker":{"id":"ba6fb22b-8f79-4666-8913-6ef3508569de","type":"BasicTicker"}},"id":"88d63a41-bbbb-4cd2-b256-86afea4375ba","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"20bb2595-a2a9-49f4-b366-53d5dadaa63c","type":"GlyphRenderer"},{"id":"12ae8de9-2fed-4ff2-8345-f51dcb686fba","type":"Grid"},{"id":"9440d880-1ae6-4748-81aa-227d6ab2007a","type":"Grid"}],"title":{"id":"55dc3c54-0c5c-4f2c-a531-58fb37129242","type":"Title"},"toolbar":{"id":"fb1ddbe4-3407-4ac0-8ae8-4666d9f60f8c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"f0bd2aef-6a08-44da-ae15-54931dc8da8c","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"87c4ad57-ed68-4204-9789-ef379f1ad568","type":"LinearScale"}},"id":"dd9c3303-02b7-4984-850f-8e8868319be8","type":"Plot"},{"attributes":{},"id":"c7918221-13e0-401f-ab18-21dff561f946","type":"BasicTicker"},{"attributes":{},"id":"27b6f928-d4d2-491f-9b8e-c37b09eaa56e","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_length"}},"id":"f0ad7c3b-ddf7-4c96-a6b2-43972206b275","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"f8daf7ec-8bd6-4b1b-a0ee-d31793714824","type":"GlyphRenderer"},{"id":"50680c7a-db02-4af2-9ee2-bb275fdc0cb6","type":"Grid"},{"id":"3af67fe5-8ccd-4ad1-96a6-8a9b76472956","type":"Grid"}],"title":{"id":"e744590e-b2a4-4599-87f3-7376bfd686f1","type":"Title"},"toolbar":{"id":"afdfe886-33bc-44ab-846f-1d4d9e14ee60","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"1940df69-7a80-4e97-bd13-8ed5b74c2454","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"2ff9bfcd-7cc8-4baa-b7d4-c65bdf73d14a","type":"LinearScale"}},"id":"f3433cf9-2cb7-4b21-abe7-d4c3b5e8123e","type":"Plot"},{"attributes":{},"id":"382fc355-1054-4349-90c3-20e8bb3c8d05","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7f0135cf-7f92-4a69-bf91-72ac96457331","type":"PanTool"},{"id":"95869294-1338-4ac8-8dd5-e9acf7591d93","type":"WheelZoomTool"}]},"id":"68db7842-b7d9-48f7-b7f1-424e68fe6cf1","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_width"}},"id":"8490e607-cc8b-4677-af5d-5606dd4725e9","type":"Circle"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"f0ad7c3b-ddf7-4c96-a6b2-43972206b275","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a3c0b5a8-60a7-4d64-bae6-249dd32df4a4","type":"CDSView"}},"id":"20bb2595-a2a9-49f4-b366-53d5dadaa63c","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c9368567-ea94-4cec-a9b0-e7b0d77aa7a9","type":"PanTool"},{"id":"9f0aac66-b9ef-41ea-88e5-a7464e9c9b13","type":"WheelZoomTool"}]},"id":"4807efbd-ee34-440a-b5d4-8c27dd4c5d4a","type":"Toolbar"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"8490e607-cc8b-4677-af5d-5606dd4725e9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6c4002cf-beb6-4065-93c0-399591414eac","type":"CDSView"}},"id":"f8daf7ec-8bd6-4b1b-a0ee-d31793714824","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"1d40fd84-97fb-4b39-a801-748c1ff19956","type":"CDSView"},{"attributes":{},"id":"48a4e18b-7a6a-4429-ba04-9405480bf43c","type":"BasicTicker"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"6c4002cf-beb6-4065-93c0-399591414eac","type":"CDSView"},{"attributes":{},"id":"45c3ee7b-26eb-4dc3-9124-e4624e3d83c0","type":"WheelZoomTool"},{"attributes":{},"id":"6ebd5dbd-3ba5-46ae-8298-5905528f41b1","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f3433cf9-2cb7-4b21-abe7-d4c3b5e8123e","type":"Plot"},"ticker":{"id":"c98526eb-8fa3-4769-a8e1-ef62ae9e805f","type":"BasicTicker"}},"id":"3af67fe5-8ccd-4ad1-96a6-8a9b76472956","type":"Grid"},{"attributes":{},"id":"eb0823bf-3b0b-411e-b166-040c11c94341","type":"BasicTicker"},{"attributes":{},"id":"c70399a2-40a2-4fa7-9d57-3c2aba983811","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"72372121-4d51-45a7-9df8-b31611f7ed9a","type":"Title"},{"attributes":{"plot":{"id":"a3da9f1c-0cd3-4fb5-ad5c-a2a3a32db3d8","type":"Plot"},"ticker":{"id":"eb0823bf-3b0b-411e-b166-040c11c94341","type":"BasicTicker"}},"id":"171a2f68-4082-4c9f-828d-dd9c26d5fc49","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"a3da9f1c-0cd3-4fb5-ad5c-a2a3a32db3d8","type":"Plot"},"ticker":{"id":"48a4e18b-7a6a-4429-ba04-9405480bf43c","type":"BasicTicker"}},"id":"b98deebe-e424-4daf-8a39-fc52042d13ee","type":"Grid"},{"attributes":{"plot":{"id":"f3433cf9-2cb7-4b21-abe7-d4c3b5e8123e","type":"Plot"},"ticker":{"id":"6ebd5dbd-3ba5-46ae-8298-5905528f41b1","type":"BasicTicker"}},"id":"50680c7a-db02-4af2-9ee2-bb275fdc0cb6","type":"Grid"},{"attributes":{},"id":"70ca71b4-d301-484d-9d3e-a8cbd4bd59fb","type":"PanTool"},{"attributes":{},"id":"c98526eb-8fa3-4769-a8e1-ef62ae9e805f","type":"BasicTicker"},{"attributes":{},"id":"b97a542b-faf5-477f-b280-6c31c3c13492","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"a22e527f-9c4a-450b-b7b9-83020a41385e","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"5af7045e-6d3b-4c10-9db0-ad43b376ef73","type":"GlyphRenderer"},{"id":"b62e793c-a34f-4ac9-af99-a60fa18e44a1","type":"Grid"},{"id":"a22e527f-9c4a-450b-b7b9-83020a41385e","type":"LinearAxis"},{"id":"d272c9b8-7124-489d-83b2-67183fc986cb","type":"Grid"}],"title":{"id":"6e0f799e-9186-47ee-aa30-725d9e3865ce","type":"Title"},"toolbar":{"id":"68db7842-b7d9-48f7-b7f1-424e68fe6cf1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"08d7201b-a9a6-4b9e-8bc0-9828d12bbc51","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"b2df675e-7c50-471e-802e-951fea15332d","type":"LinearScale"}},"id":"4fad9731-a2a7-431e-a065-3f8228c605c7","type":"Plot"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"0e580539-8ec3-48df-94dc-05629c5b6265","type":"GlyphRenderer"},{"id":"c0d4e150-7ce7-4b30-99a8-478cbe98614f","type":"Grid"},{"id":"091922f8-93b1-4e28-80e7-31de93c67f88","type":"Grid"}],"title":{"id":"4d74f056-81c8-447f-8d33-edfa8368fc58","type":"Title"},"toolbar":{"id":"4807efbd-ee34-440a-b5d4-8c27dd4c5d4a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"d6ca6fb6-d8d6-47f7-ad37-4ddb4326ddbf","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"55a3bb39-38f7-4897-86e1-2eca583bbd27","type":"LinearScale"}},"id":"5c41644e-6350-4abe-86d7-7c8ca75a4f51","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"4fad9731-a2a7-431e-a065-3f8228c605c7","type":"Plot"},"ticker":{"id":"48c6e2b6-1c4f-4d2a-9734-7680ef5e980e","type":"BasicTicker"}},"id":"d272c9b8-7124-489d-83b2-67183fc986cb","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_width"}},"id":"50f8d047-7ba8-4cea-8fcb-3bdacdff6102","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_width"}},"id":"78261e4e-037e-40db-9535-3268e5b640f2","type":"Circle"},{"attributes":{"plot":{"id":"4fad9731-a2a7-431e-a065-3f8228c605c7","type":"Plot"},"ticker":{"id":"1a075cd0-2b94-48a3-bee8-c2cdf049fd0b","type":"BasicTicker"}},"id":"b62e793c-a34f-4ac9-af99-a60fa18e44a1","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"5c41644e-6350-4abe-86d7-7c8ca75a4f51","type":"Plot"},"ticker":{"id":"e36e868a-11f2-4724-9617-f4d9f8268f65","type":"BasicTicker"}},"id":"091922f8-93b1-4e28-80e7-31de93c67f88","type":"Grid"},{"attributes":{},"id":"7f0135cf-7f92-4a69-bf91-72ac96457331","type":"PanTool"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"78261e4e-037e-40db-9535-3268e5b640f2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a957ce9d-f40c-4b3d-9b97-a8e35b03175b","type":"CDSView"}},"id":"0e580539-8ec3-48df-94dc-05629c5b6265","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"50f8d047-7ba8-4cea-8fcb-3bdacdff6102","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"22b80d0c-5486-472c-b4b2-da4972525103","type":"CDSView"}},"id":"5af7045e-6d3b-4c10-9db0-ad43b376ef73","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"a957ce9d-f40c-4b3d-9b97-a8e35b03175b","type":"CDSView"},{"attributes":{},"id":"48c6e2b6-1c4f-4d2a-9734-7680ef5e980e","type":"BasicTicker"},{"attributes":{},"id":"09e07822-6021-41a2-ab1c-bf2b3a0d4def","type":"BasicTicker"},{"attributes":{"plot":{"id":"5c41644e-6350-4abe-86d7-7c8ca75a4f51","type":"Plot"},"ticker":{"id":"09e07822-6021-41a2-ab1c-bf2b3a0d4def","type":"BasicTicker"}},"id":"c0d4e150-7ce7-4b30-99a8-478cbe98614f","type":"Grid"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"22b80d0c-5486-472c-b4b2-da4972525103","type":"CDSView"},{"attributes":{},"id":"1a075cd0-2b94-48a3-bee8-c2cdf049fd0b","type":"BasicTicker"},{"attributes":{},"id":"e36e868a-11f2-4724-9617-f4d9f8268f65","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"89f42ada-3101-493b-85c0-33ca1b63ee82","type":"PanTool"},{"id":"c8f39f1b-cd9d-442f-a886-acb7b9f72635","type":"WheelZoomTool"}]},"id":"9e7dc1f7-abb6-4201-a4a1-0b86eb19328d","type":"Toolbar"},{"attributes":{},"id":"c9368567-ea94-4cec-a9b0-e7b0d77aa7a9","type":"PanTool"},{"attributes":{},"id":"9f0aac66-b9ef-41ea-88e5-a7464e9c9b13","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"18736d2f-a61e-4121-b399-2b17970f1ece","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"b047f7f5-88c8-4055-97ae-15a4cae3955f","type":"LinearAxis"}],"min_border_bottom":42,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":240,"renderers":[{"id":"a0f5a29a-026b-4b0f-aee7-081c4e0fdae8","type":"GlyphRenderer"},{"id":"18736d2f-a61e-4121-b399-2b17970f1ece","type":"LinearAxis"},{"id":"35918ab4-348c-4761-8a95-9d94b0f9e76c","type":"Grid"},{"id":"b047f7f5-88c8-4055-97ae-15a4cae3955f","type":"LinearAxis"},{"id":"8c34bd96-8e45-42e5-b422-3bd125e32fdd","type":"Grid"}],"title":{"id":"a18312b1-a11b-456c-a41e-569dc3d117d7","type":"Title"},"toolbar":{"id":"9e7dc1f7-abb6-4201-a4a1-0b86eb19328d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"6398386e-e134-4698-8b98-8181bde2075f","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"a4fa1957-9e81-4eb2-a4d8-468303519e80","type":"LinearScale"}},"id":"af5c942d-265c-44c2-98a4-7894454c667e","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_length"}},"id":"f3755223-5824-4f7a-8f9b-945d11b396db","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"af5c942d-265c-44c2-98a4-7894454c667e","type":"Plot"},"ticker":{"id":"e44bd704-c493-42d4-9e7c-f2ba130ad064","type":"BasicTicker"}},"id":"8c34bd96-8e45-42e5-b422-3bd125e32fdd","type":"Grid"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"f3755223-5824-4f7a-8f9b-945d11b396db","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"294f7078-1fef-4fd3-a229-b7a50d0b1431","type":"CDSView"}},"id":"a0f5a29a-026b-4b0f-aee7-081c4e0fdae8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"294f7078-1fef-4fd3-a229-b7a50d0b1431","type":"CDSView"},{"attributes":{"plot":{"id":"af5c942d-265c-44c2-98a4-7894454c667e","type":"Plot"},"ticker":{"id":"30cc4771-1131-4fc0-b7a8-9130e3330468","type":"BasicTicker"}},"id":"35918ab4-348c-4761-8a95-9d94b0f9e76c","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c2688ac1-9c61-4fe9-ad10-51ee36574ce8","type":"PanTool"},{"id":"8dab76d7-c866-43dc-9440-2cb1c205c1f4","type":"WheelZoomTool"}]},"id":"461b6432-f975-486c-8cfc-19922eef7e64","type":"Toolbar"},{"attributes":{"formatter":{"id":"ef3bbd35-2a50-49fb-ab0b-0d835763aa56","type":"BasicTickFormatter"},"plot":{"id":"af5c942d-265c-44c2-98a4-7894454c667e","type":"Plot"},"ticker":{"id":"e44bd704-c493-42d4-9e7c-f2ba130ad064","type":"BasicTicker"}},"id":"b047f7f5-88c8-4055-97ae-15a4cae3955f","type":"LinearAxis"},{"attributes":{"formatter":{"id":"11912e4c-ea5a-404c-8525-c6bbcff78e0b","type":"BasicTickFormatter"},"plot":{"id":"af5c942d-265c-44c2-98a4-7894454c667e","type":"Plot"},"ticker":{"id":"30cc4771-1131-4fc0-b7a8-9130e3330468","type":"BasicTicker"}},"id":"18736d2f-a61e-4121-b399-2b17970f1ece","type":"LinearAxis"},{"attributes":{},"id":"30cc4771-1131-4fc0-b7a8-9130e3330468","type":"BasicTicker"},{"attributes":{},"id":"e44bd704-c493-42d4-9e7c-f2ba130ad064","type":"BasicTicker"},{"attributes":{},"id":"89f42ada-3101-493b-85c0-33ca1b63ee82","type":"PanTool"},{"attributes":{},"id":"c8f39f1b-cd9d-442f-a886-acb7b9f72635","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"fcc70f9e-5d70-4670-99de-3162da0bc9f3","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"1ae29bc3-eaad-474a-9d8b-463e6e037685","type":"GlyphRenderer"},{"id":"fcc70f9e-5d70-4670-99de-3162da0bc9f3","type":"LinearAxis"},{"id":"4ca313f5-5e14-4de8-9d01-a978f7698dca","type":"Grid"},{"id":"b1ab4aa8-8bfc-4644-958f-9a079640c118","type":"Grid"}],"title":{"id":"7e2e27dc-5418-45ef-b145-7de78e1f310b","type":"Title"},"toolbar":{"id":"461b6432-f975-486c-8cfc-19922eef7e64","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"04ea4e8f-0b80-4d12-8aa0-a69732319e1c","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"e661521a-e697-4aa1-afda-d18d4c0777b0","type":"LinearScale"}},"id":"a868a607-810c-412c-80ec-7ae499ab4beb","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_length"}},"id":"c728ed33-5091-4e91-ae28-e97f503e0516","type":"Circle"},{"attributes":{},"id":"233e4cbe-2591-4962-a102-e70f08e0287f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"c728ed33-5091-4e91-ae28-e97f503e0516","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ac2844bf-dc81-4a38-b4aa-15ba129567b0","type":"CDSView"}},"id":"1ae29bc3-eaad-474a-9d8b-463e6e037685","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"ac2844bf-dc81-4a38-b4aa-15ba129567b0","type":"CDSView"},{"attributes":{"plot":{"id":"a868a607-810c-412c-80ec-7ae499ab4beb","type":"Plot"},"ticker":{"id":"c2991543-5be1-4035-8104-19e48a58346f","type":"BasicTicker"}},"id":"4ca313f5-5e14-4de8-9d01-a978f7698dca","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3f4c830f-7c43-4e6e-9167-959a6ae7a91e","type":"PanTool"},{"id":"f247dc6b-d6e5-40cc-b8da-1916c0df8fe5","type":"WheelZoomTool"}]},"id":"4273ac2f-3c71-4d72-a600-07a38fb5f5b3","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"a868a607-810c-412c-80ec-7ae499ab4beb","type":"Plot"},"ticker":{"id":"233e4cbe-2591-4962-a102-e70f08e0287f","type":"BasicTicker"}},"id":"b1ab4aa8-8bfc-4644-958f-9a079640c118","type":"Grid"},{"attributes":{"formatter":{"id":"ed0cdb81-24ea-4d42-ae48-028291691733","type":"BasicTickFormatter"},"plot":{"id":"a868a607-810c-412c-80ec-7ae499ab4beb","type":"Plot"},"ticker":{"id":"c2991543-5be1-4035-8104-19e48a58346f","type":"BasicTicker"}},"id":"fcc70f9e-5d70-4670-99de-3162da0bc9f3","type":"LinearAxis"},{"attributes":{},"id":"c2991543-5be1-4035-8104-19e48a58346f","type":"BasicTicker"},{"attributes":{},"id":"c2688ac1-9c61-4fe9-ad10-51ee36574ce8","type":"PanTool"},{"attributes":{},"id":"8dab76d7-c866-43dc-9440-2cb1c205c1f4","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"f8de4dec-116c-4c2e-9ffa-c5f26987261a","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"1eacfb50-f526-4d62-ad40-c92598292426","type":"GlyphRenderer"},{"id":"f8de4dec-116c-4c2e-9ffa-c5f26987261a","type":"LinearAxis"},{"id":"78cb2bc3-64a9-4bd6-86e0-f4face7dfa99","type":"Grid"},{"id":"b3e76e68-b38e-4084-9847-e6e4ae04adfb","type":"Grid"}],"title":{"id":"1ae05b82-e80f-4b42-aba9-33ae999025bd","type":"Title"},"toolbar":{"id":"4273ac2f-3c71-4d72-a600-07a38fb5f5b3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"085d4522-042b-438c-9003-16bc524cff6a","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"e51aae1b-c2e8-454a-8279-21000fb35865","type":"LinearScale"}},"id":"4e7b8f0b-0b00-4565-8e77-d7c4e744dc4e","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_length"}},"id":"f13df388-a0be-4487-a5dd-c3aadd8e33c7","type":"Circle"},{"attributes":{},"id":"d52e4e70-f19a-4406-87e4-5fbc6a0ee29f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"f13df388-a0be-4487-a5dd-c3aadd8e33c7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1cf0b989-1da8-4e1f-8c30-3892ad9bf8a7","type":"CDSView"}},"id":"1eacfb50-f526-4d62-ad40-c92598292426","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"1cf0b989-1da8-4e1f-8c30-3892ad9bf8a7","type":"CDSView"},{"attributes":{"plot":{"id":"4e7b8f0b-0b00-4565-8e77-d7c4e744dc4e","type":"Plot"},"ticker":{"id":"5cb696cd-8f6e-4a80-a315-620f48361523","type":"BasicTicker"}},"id":"78cb2bc3-64a9-4bd6-86e0-f4face7dfa99","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3a44342c-012d-4c7e-b415-4336a955e7d6","type":"PanTool"},{"id":"10354cab-4d4f-4110-ae0c-f8c47ae00615","type":"WheelZoomTool"}]},"id":"aab05f45-0100-4472-9c8b-f7edfc243060","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"4e7b8f0b-0b00-4565-8e77-d7c4e744dc4e","type":"Plot"},"ticker":{"id":"d52e4e70-f19a-4406-87e4-5fbc6a0ee29f","type":"BasicTicker"}},"id":"b3e76e68-b38e-4084-9847-e6e4ae04adfb","type":"Grid"},{"attributes":{"formatter":{"id":"e6e621cc-49aa-4950-a922-bb419023e68a","type":"BasicTickFormatter"},"plot":{"id":"4e7b8f0b-0b00-4565-8e77-d7c4e744dc4e","type":"Plot"},"ticker":{"id":"5cb696cd-8f6e-4a80-a315-620f48361523","type":"BasicTicker"}},"id":"f8de4dec-116c-4c2e-9ffa-c5f26987261a","type":"LinearAxis"},{"attributes":{},"id":"5cb696cd-8f6e-4a80-a315-620f48361523","type":"BasicTicker"},{"attributes":{},"id":"3f4c830f-7c43-4e6e-9167-959a6ae7a91e","type":"PanTool"},{"attributes":{},"id":"f247dc6b-d6e5-40cc-b8da-1916c0df8fe5","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"c1792f48-9cc9-4903-80c3-b1de66e7f269","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"ec59b18a-13e7-4a5d-9d60-472dd44bcd75","type":"GlyphRenderer"},{"id":"c1792f48-9cc9-4903-80c3-b1de66e7f269","type":"LinearAxis"},{"id":"0535dae1-9593-48cd-9ac4-ccfab68118d6","type":"Grid"},{"id":"54b9fcaf-31c8-4eaf-8adc-904c9168a866","type":"Grid"}],"title":{"id":"35a30b58-4f2d-4a2e-9ba3-450960612a5b","type":"Title"},"toolbar":{"id":"aab05f45-0100-4472-9c8b-f7edfc243060","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ccd6635-68ba-449b-8477-85c74c07339c","type":"DataRange1d"},"x_scale":{"id":"0dbcdca4-07ea-4ff3-93d5-5e776cb34d19","type":"LinearScale"},"y_range":{"id":"68900aff-1946-43b8-b4dc-8afebef6c86a","type":"DataRange1d"},"y_scale":{"id":"d8fac2e2-af0f-4c80-bccc-86a7a248142b","type":"LinearScale"}},"id":"c3c662f0-3dd7-42f9-97a8-3280be9a6c33","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_length"}},"id":"c62c8ed9-74c3-4d08-aa61-4ae6bbd412de","type":"Circle"},{"attributes":{},"id":"58319b2d-77bc-4b62-96c2-d2a980b3d0a0","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"},"glyph":{"id":"c62c8ed9-74c3-4d08-aa61-4ae6bbd412de","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"41283d91-c448-4394-be6e-0412ec7aa949","type":"CDSView"}},"id":"ec59b18a-13e7-4a5d-9d60-472dd44bcd75","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d8cef77f-4e61-41f5-af73-16b00c5ab80e","type":"ColumnDataSource"}},"id":"41283d91-c448-4394-be6e-0412ec7aa949","type":"CDSView"},{"attributes":{"plot":{"id":"c3c662f0-3dd7-42f9-97a8-3280be9a6c33","type":"Plot"},"ticker":{"id":"7c9e2262-8fb9-4e68-b682-15d983e30b4e","type":"BasicTicker"}},"id":"0535dae1-9593-48cd-9ac4-ccfab68118d6","type":"Grid"},{"attributes":{},"id":"4792dd74-80a3-4bc5-85cc-b548b83b168d","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"c3c662f0-3dd7-42f9-97a8-3280be9a6c33","type":"Plot"},"ticker":{"id":"58319b2d-77bc-4b62-96c2-d2a980b3d0a0","type":"BasicTicker"}},"id":"54b9fcaf-31c8-4eaf-8adc-904c9168a866","type":"Grid"},{"attributes":{"formatter":{"id":"0a852b81-5c89-4481-b17c-1f92e3b92e69","type":"BasicTickFormatter"},"plot":{"id":"c3c662f0-3dd7-42f9-97a8-3280be9a6c33","type":"Plot"},"ticker":{"id":"7c9e2262-8fb9-4e68-b682-15d983e30b4e","type":"BasicTicker"}},"id":"c1792f48-9cc9-4903-80c3-b1de66e7f269","type":"LinearAxis"},{"attributes":{},"id":"7c9e2262-8fb9-4e68-b682-15d983e30b4e","type":"BasicTicker"},{"attributes":{},"id":"3a44342c-012d-4c7e-b415-4336a955e7d6","type":"PanTool"},{"attributes":{},"id":"10354cab-4d4f-4110-ae0c-f8c47ae00615","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"83c22dc2-be44-4bb9-b620-549e2212a5da","type":"Title"},{"attributes":{},"id":"36355b83-92b0-4cba-8527-1bf64dad361d","type":"LinearScale"},{"attributes":{},"id":"af98d888-967a-4fe4-8a02-a313f1efa6e3","type":"LinearScale"},{"attributes":{},"id":"3585f3a4-4f67-4d15-8fc2-7b6489e4c36e","type":"LinearScale"},{"attributes":{},"id":"9bbdc477-015a-4234-83a9-633c32d8581f","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"bc41fc67-87d3-4af9-9ba1-5a3aa5236875","type":"Title"},{"attributes":{},"id":"616b24ea-7188-49ef-8eb4-e54d0e1aeea2","type":"LinearScale"},{"attributes":{},"id":"d079f782-b8e5-4495-b978-c2f4feff276a","type":"LinearScale"},{"attributes":{},"id":"b2df675e-7c50-471e-802e-951fea15332d","type":"LinearScale"},{"attributes":{},"id":"08d7201b-a9a6-4b9e-8bc0-9828d12bbc51","type":"LinearScale"},{"attributes":{},"id":"9ec7d8af-2b91-4e9a-b156-d6f9fcf78c35","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"55dc3c54-0c5c-4f2c-a531-58fb37129242","type":"Title"},{"attributes":{},"id":"f0bd2aef-6a08-44da-ae15-54931dc8da8c","type":"LinearScale"},{"attributes":{},"id":"87c4ad57-ed68-4204-9789-ef379f1ad568","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"6e0f799e-9186-47ee-aa30-725d9e3865ce","type":"Title"},{"attributes":{"children":[{"id":"4fad9731-a2a7-431e-a065-3f8228c605c7","type":"Plot"},{"id":"066ad82a-b602-4545-8222-4c8ed8e37fb0","type":"Plot"},{"id":"2ba0021b-6405-4151-be3a-c63a9eb2353c","type":"Plot"},{"id":"5384d188-831b-42b9-b5fb-7245faeaea6f","type":"Plot"}]},"id":"5164d577-81a5-48fb-a7a6-a5cc666e27aa","type":"Row"},{"attributes":{"plot":null,"text":""},"id":"dde88754-ee1e-44e2-9d07-1608de7487e8","type":"Title"},{"attributes":{},"id":"00e50415-c2cb-48c2-8bf7-66e3035929f0","type":"BasicTickFormatter"},{"attributes":{},"id":"5086ee58-c97f-46f8-8b09-e44f2a8811c7","type":"LinearScale"}],"root_ids":["ad3d1123-552c-4501-b91d-8d9c7ba25db6"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"a3a8f22b-e7de-4e33-a049-d135b04c4947","elementid":"1d4cea68-3ac1-4a93-b341-c8ce465a5eed","modelid":"ad3d1123-552c-4501-b91d-8d9c7ba25db6"}];
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