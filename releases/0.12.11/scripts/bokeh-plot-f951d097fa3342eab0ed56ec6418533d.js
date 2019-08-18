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
      };var element = document.getElementById("ab644412-3908-4da6-81f0-c6e5e426fd70");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab644412-3908-4da6-81f0-c6e5e426fd70' but no matching script tag was found. ")
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
                    var docs_json = '{"fdd70413-5ff4-47cb-a5f1-33c96cd904ab":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"L2A68A3TGEBH1h7pV1UaQCKN3tRTmhpA8rJG7Z7fGEABUhJckF0YQIyTrOg9sBlARJiue5A9GkAZX24Nk+QaQG9+wcb04hpAZdxqRpQUGkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"BjgT4mqN+j8lykurh+P8PxY+IE3qav0/+4jI8niK/D/shxJjwPT2P+bqN6PdsP4/OLQC8Dck9T8cTLGgAPr0P3i66qVnTvo/6P+CVIPq9D8=","dtype":"float64","shape":[10]}}},"id":"fe29b81d-b6c0-4308-b024-fe02f8e8dfaf","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"6bf78a63-2a08-4085-b82d-1f785d2fabd4","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"65d85917-ab3c-49c8-923c-0a1ce03da9e2","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"e095bfdc-317b-4cea-8a89-b49bb5bfd25a","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4a52d6f-4b73-4536-a1cc-6d8354cadcbb","type":"Triangle"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"fe2311cc-f4d2-44b6-a4f7-bc7a94a4bbc7","type":"Text"},{"attributes":{"data_source":{"id":"8a500400-a57f-4eaa-a021-2efa9384fb94","type":"ColumnDataSource"},"glyph":{"id":"bc0fb4ab-08b9-41f2-8b70-d12be2150b44","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e095bfdc-317b-4cea-8a89-b49bb5bfd25a","type":"Text"},"selection_glyph":null,"view":{"id":"d077a39f-cf74-4d43-b2ac-5fa8a15ecc7f","type":"CDSView"}},"id":"dae18a47-299f-4f6a-b34c-5d8a45eb934c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"66ed67fb-eba3-456b-9d1b-fe381374fae7","type":"Triangle"},{"attributes":{"data_source":{"id":"fe29b81d-b6c0-4308-b024-fe02f8e8dfaf","type":"ColumnDataSource"},"glyph":{"id":"a4a52d6f-4b73-4536-a1cc-6d8354cadcbb","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66ed67fb-eba3-456b-9d1b-fe381374fae7","type":"Triangle"},"selection_glyph":null,"view":{"id":"d98fdad4-4a5f-4bf2-9db8-34d5c350ec1b","type":"CDSView"}},"id":"32224198-eca2-4311-9553-4c2a25fb53af","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"1c80466f-5b5e-4b35-bd68-b649b4fd064c","type":"Text"},{"attributes":{"source":{"id":"fe29b81d-b6c0-4308-b024-fe02f8e8dfaf","type":"ColumnDataSource"}},"id":"d98fdad4-4a5f-4bf2-9db8-34d5c350ec1b","type":"CDSView"},{"attributes":{"source":{"id":"8a500400-a57f-4eaa-a021-2efa9384fb94","type":"ColumnDataSource"}},"id":"d077a39f-cf74-4d43-b2ac-5fa8a15ecc7f","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"26c81bbd-6fed-4750-92e8-0c42e0280374","type":"Asterisk"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_x"]}},"id":"d0b69333-9e84-4f6b-8672-519450d0c654","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"V9ViIMihIUAin1zCDBkgQDk0ayzRWSBA6Pf4apONIEBx+BpDb+sgQCfF9dsOBSBA6WQumJ3lIEC4GYiXt5UhQCkASk7nbCFAX8CgWjh9IEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"+kXJmDVJ9T9GoaPSKkv4Pzb+VYGeU/Y/FF4bTf20+z8PnOTytuX1Pwzi1rXokvQ/qwV4V0vS+j+Y7kXI1GH9P9jUt3p1e/4/cmJi5gh19z8=","dtype":"float64","shape":[10]}}},"id":"38e8ce41-02b9-4fe3-af6a-ecd30d88f96a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["inverted_triangle"]}},"id":"8a000fcc-3e27-494b-ac47-9015fa2a6502","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"38e8ce41-02b9-4fe3-af6a-ecd30d88f96a","type":"ColumnDataSource"},"glyph":{"id":"26c81bbd-6fed-4750-92e8-0c42e0280374","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"efda5306-ba50-4aab-ab80-1473aef8e073","type":"Asterisk"},"selection_glyph":null,"view":{"id":"16548b85-1d8d-4038-ba82-b47e7dee874e","type":"CDSView"}},"id":"fe15aae6-ebf0-4252-9641-dfe601c02b86","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"5c4c17d3-d940-4419-a367-07796e0779c5","type":"Text"},{"attributes":{"data_source":{"id":"39847348-a4c5-478d-96dc-229ad39d7f16","type":"ColumnDataSource"},"glyph":{"id":"8d57e804-a23d-40a6-9734-3d2faa485f4e","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"83ae50df-4824-43e7-9cae-fdcc7a5f8aad","type":"SquareX"},"selection_glyph":null,"view":{"id":"658f68e6-e812-46a2-81da-56024217088d","type":"CDSView"}},"id":"4e83e5ba-b7bc-45d0-989c-d9962a3cce98","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d0b69333-9e84-4f6b-8672-519450d0c654","type":"ColumnDataSource"}},"id":"54634f2c-c163-4b09-b766-db73ae4fbf20","type":"CDSView"},{"attributes":{"data_source":{"id":"d0b69333-9e84-4f6b-8672-519450d0c654","type":"ColumnDataSource"},"glyph":{"id":"fe2311cc-f4d2-44b6-a4f7-bc7a94a4bbc7","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c4c17d3-d940-4419-a367-07796e0779c5","type":"Text"},"selection_glyph":null,"view":{"id":"54634f2c-c163-4b09-b766-db73ae4fbf20","type":"CDSView"}},"id":"03968da2-6b75-4e65-b6da-9d07405055cd","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"efda5306-ba50-4aab-ab80-1473aef8e073","type":"Asterisk"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"rXz35RcGB0CpoAZrk+kDQEJ8lcJSsQZA3rksxmmbAUAoh56GT7UEQIDYr1UDVQFAhvCRHUGuBEDuR2amTm8DQFA4MFzlMwNAntwpzNg4BkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"BsTMPsItEUAMM9RgYn8SQIORAj+jcRFAPYu5SedxEkBdAFzuIVoRQAumaxSZnxNAcR/Q5bO+EUAbm+2K1sEQQFFnPXZECxFAEGLdEU5oE0A=","dtype":"float64","shape":[10]}}},"id":"36e5672f-0b0b-4eb3-84aa-f02df7841f82","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8a000fcc-3e27-494b-ac47-9015fa2a6502","type":"ColumnDataSource"}},"id":"621c3efd-991a-4162-8fdb-dd330fbbe196","type":"CDSView"},{"attributes":{"source":{"id":"38e8ce41-02b9-4fe3-af6a-ecd30d88f96a","type":"ColumnDataSource"}},"id":"16548b85-1d8d-4038-ba82-b47e7dee874e","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"2fd892f5-6fb9-4ba4-848d-41def3eee1b9","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"79d5e67b-d3da-4ddd-886f-e31ece982eea","type":"CircleX"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"2355f662-7da7-4987-a1b4-c951d22e9007","type":"Text"},{"attributes":{"data_source":{"id":"36e5672f-0b0b-4eb3-84aa-f02df7841f82","type":"ColumnDataSource"},"glyph":{"id":"79d5e67b-d3da-4ddd-886f-e31ece982eea","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d7cd77fa-83c9-43ba-8a3c-8dc6b25fa165","type":"CircleX"},"selection_glyph":null,"view":{"id":"e15c879a-22ae-4b71-8927-497ca66abc1b","type":"CDSView"}},"id":"dfc8eee0-3b14-4388-aaaf-0e4565d5f836","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["x"]}},"id":"97af5dbf-6829-4b6d-8eaf-9de9d90fab10","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8a000fcc-3e27-494b-ac47-9015fa2a6502","type":"ColumnDataSource"},"glyph":{"id":"6bf78a63-2a08-4085-b82d-1f785d2fabd4","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2fd892f5-6fb9-4ba4-848d-41def3eee1b9","type":"Text"},"selection_glyph":null,"view":{"id":"621c3efd-991a-4162-8fdb-dd330fbbe196","type":"CDSView"}},"id":"f018ed60-1fb0-45b5-9ff8-9e49b383b488","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"qJqRfDzTEkAmOsgnuIYQQPwNWRYujhFA7iI8//hTE0DArYOJ7bgQQLH04rDvixNA5dV9PkACEkDyjDMSssUSQH+wD8zJuxFACIl1PcdsEkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"IUOJITb1E0B63zRLbgoSQHGy9/9NWBFAVhFneB1KEUDpUCd6cbAQQPY8bzEIqRJAWl3Jkfq3EEBM54jjnnERQOmeuj/4khFA+lnMFK6aE0A=","dtype":"float64","shape":[10]}}},"id":"39847348-a4c5-478d-96dc-229ad39d7f16","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7cd77fa-83c9-43ba-8a3c-8dc6b25fa165","type":"CircleX"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_cross / o+"]}},"id":"0eac3386-640e-4800-9aca-c2dc28a8bc1b","type":"ColumnDataSource"},{"attributes":{"source":{"id":"36e5672f-0b0b-4eb3-84aa-f02df7841f82","type":"ColumnDataSource"}},"id":"e15c879a-22ae-4b71-8927-497ca66abc1b","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"7766bcdd-1408-425b-b181-d652f7421d95","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d57e804-a23d-40a6-9734-3d2faa485f4e","type":"SquareX"},{"attributes":{"source":{"id":"97af5dbf-6829-4b6d-8eaf-9de9d90fab10","type":"ColumnDataSource"}},"id":"a26bc503-e24c-4ad1-8897-8fa1e48ba261","type":"CDSView"},{"attributes":{"data_source":{"id":"9ba8ccd4-e5d4-47fe-9d1d-b3170b58789d","type":"ColumnDataSource"},"glyph":{"id":"794a7de6-9352-42ce-bfa0-aeffc884e1fb","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8ed7669e-902b-4585-9389-8ce1936a3f9d","type":"X"},"selection_glyph":null,"view":{"id":"4fb05e59-b574-4c7f-a246-a8e7c5ecc16d","type":"CDSView"}},"id":"0995511b-e2bd-479b-9acb-890b7290d54a","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"a833c555-9f82-47d4-8923-ae5b7e828a50","type":"Text"},{"attributes":{"data_source":{"id":"97af5dbf-6829-4b6d-8eaf-9de9d90fab10","type":"ColumnDataSource"},"glyph":{"id":"2355f662-7da7-4987-a1b4-c951d22e9007","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a833c555-9f82-47d4-8923-ae5b7e828a50","type":"Text"},"selection_glyph":null,"view":{"id":"a26bc503-e24c-4ad1-8897-8fa1e48ba261","type":"CDSView"}},"id":"d52a9807-a60c-4dac-aef3-4b63b73528b2","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"83ae50df-4824-43e7-9cae-fdcc7a5f8aad","type":"SquareX"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"4SsvD00gGkCFzj3gYooYQEzSnrfj4BlAerjqRJi6G0Cl7iQWho4aQC++GiCCDBpAEdj+f39KG0D7jDbptmMYQJmBmKsZShpAWJYc2AN3GUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"BtdtYYOnEEB/lFZEHpsQQHiPhN/tGxBAlEuZk2C2E0DAu3wkl5oRQPbyb9JvJRJA+nNfHlX3EUD8sYoMHD4TQIoZLn4AcRFAwFIMIUAjEEA=","dtype":"float64","shape":[10]}}},"id":"6da0da84-c290-4a67-b36d-1b242b996d56","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"cb62d945-37c8-46e0-b67c-c9f6e483bc11","type":"Text"},{"attributes":{"source":{"id":"39847348-a4c5-478d-96dc-229ad39d7f16","type":"ColumnDataSource"}},"id":"658f68e6-e812-46a2-81da-56024217088d","type":"CDSView"},{"attributes":{"source":{"id":"0eac3386-640e-4800-9aca-c2dc28a8bc1b","type":"ColumnDataSource"}},"id":"0fbe913c-06a7-4c77-b9f2-e950a4fb3777","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c795837-b24d-4d36-8771-e7c0518e1abf","type":"InvertedTriangle"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_cross"]}},"id":"7ca373e2-9a7e-473a-8054-642934b79aea","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6da0da84-c290-4a67-b36d-1b242b996d56","type":"ColumnDataSource"},"glyph":{"id":"4c795837-b24d-4d36-8771-e7c0518e1abf","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"00f83138-54a7-46e1-a87b-f28cd4ef0366","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"50332da6-2fc4-4498-bb39-8034407f9ebc","type":"CDSView"}},"id":"4876495d-c16a-4e98-a3f4-3c72a2fb9e17","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"d7962174-c272-44a0-a683-d15c65fc3950","type":"Text"},{"attributes":{"data_source":{"id":"0eac3386-640e-4800-9aca-c2dc28a8bc1b","type":"ColumnDataSource"},"glyph":{"id":"1c80466f-5b5e-4b35-bd68-b649b4fd064c","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cb62d945-37c8-46e0-b67c-c9f6e483bc11","type":"Text"},"selection_glyph":null,"view":{"id":"0fbe913c-06a7-4c77-b9f2-e950a4fb3777","type":"CDSView"}},"id":"26d2b080-c95f-4114-8faf-4be867ebc273","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"B4uPvgVJIEAg4TjE1qghQFqJT6zW8SFAjtOWq07kIEAS6kzxHGwhQAJgKLGSTiBAEZxCbqixIUDCgVxDQNYgQIYaDIeIrSFA19vWBVkDIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"XIJZHkNoEkBJ2OzGSmUSQDheRALGrBBAXCANofGBEkDcER01D9gRQBIvt4AaZxJAW3pDIGFAE0CeeR4MfLkTQB3FCVXWeBJAvBKT9IIJEkA=","dtype":"float64","shape":[10]}}},"id":"9ba8ccd4-e5d4-47fe-9d1d-b3170b58789d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"00f83138-54a7-46e1-a87b-f28cd4ef0366","type":"InvertedTriangle"},{"attributes":{"source":{"id":"6da0da84-c290-4a67-b36d-1b242b996d56","type":"ColumnDataSource"}},"id":"50332da6-2fc4-4498-bb39-8034407f9ebc","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["diamond"]}},"id":"35b14b3b-a7e3-457d-8edc-0330f741c594","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"794a7de6-9352-42ce-bfa0-aeffc884e1fb","type":"X"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"738dc3b7-e43a-4daf-931d-e0fb89e79064","type":"Text"},{"attributes":{"data_source":{"id":"aaface16-b335-4faf-a7d9-5664b57a67a4","type":"ColumnDataSource"},"glyph":{"id":"b41c7245-af5d-4524-96fa-fd8f9100292b","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f862d1d-7744-4c7d-b361-10999d86c336","type":"SquareCross"},"selection_glyph":null,"view":{"id":"9a6e13cc-2e83-4318-a3e5-7f36c31ddc9b","type":"CDSView"}},"id":"da85a036-afe6-41e2-91d6-2dda5713a284","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7ca373e2-9a7e-473a-8054-642934b79aea","type":"ColumnDataSource"}},"id":"4babdbf1-4f10-4567-bcec-7348f7f90b1b","type":"CDSView"},{"attributes":{"data_source":{"id":"7ca373e2-9a7e-473a-8054-642934b79aea","type":"ColumnDataSource"},"glyph":{"id":"d7962174-c272-44a0-a683-d15c65fc3950","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"738dc3b7-e43a-4daf-931d-e0fb89e79064","type":"Text"},"selection_glyph":null,"view":{"id":"4babdbf1-4f10-4567-bcec-7348f7f90b1b","type":"CDSView"}},"id":"c8112fb0-2e82-4791-ba2c-9f17e831441a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ed7669e-902b-4585-9389-8ce1936a3f9d","type":"X"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"KA737TDIBUBfrvS9qAkEQHEpgdReaQBA0MpqLirsAEAot/ruR8UBQBjqoCgq2gBAaEnW7qNZAkCWrJW19tgHQE0SDJTfSQRADLndKjoSB0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"Dpn55oXNHkBpG7bG0+odQKj4Iqbv2B1AwG/0XBWMH0BEthyb8d0cQC607t4LKR9Az7iVwNE7HkDXV4XWhyodQFQwu9GZgx1A1/Enkz2lHUA=","dtype":"float64","shape":[10]}}},"id":"67b7bd3e-1ab4-4744-8847-225f8707b264","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35b14b3b-a7e3-457d-8edc-0330f741c594","type":"ColumnDataSource"}},"id":"5f37f388-4630-44a2-92db-41948de28ce8","type":"CDSView"},{"attributes":{"source":{"id":"9ba8ccd4-e5d4-47fe-9d1d-b3170b58789d","type":"ColumnDataSource"}},"id":"4fb05e59-b574-4c7f-a246-a8e7c5ecc16d","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"bb7e36f4-0be8-4bc3-afb3-4a6662c9913e","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"586e9964-9e1f-47a4-b70b-375fed4d22f0","type":"CircleCross"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"d763db72-f297-4164-8a1c-75145876e12b","type":"Text"},{"attributes":{"data_source":{"id":"67b7bd3e-1ab4-4744-8847-225f8707b264","type":"ColumnDataSource"},"glyph":{"id":"586e9964-9e1f-47a4-b70b-375fed4d22f0","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e5951e08-25fa-4524-9cad-da7f820d286c","type":"CircleCross"},"selection_glyph":null,"view":{"id":"d9388596-6903-4abc-b085-a587f2d79507","type":"CDSView"}},"id":"6e7a0f08-e0e6-4f1c-9a3c-7f8c9aa1539f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["cross / +"]}},"id":"eb1cc0ef-e171-4c9d-89cc-21a2ed343213","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"rN2V/kL6E0D62+a5gpMRQPi+rTLA9BFA5UoJ462bEkANiwtEixkRQKtTlPkxgxJApF7z1tmJEUDOGgyUHHcQQLkbRvM9IxJAgMz6dF9sEkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"5W4Pc6jdHkB8IbiEufcfQCBZ87uINB5AkH7vxiSxH0A6Xh3ZHesfQAf8bMomqh1A3DB8NuM5HkBzEnrps2ccQPais2Wz3x9Av5he53CSHkA=","dtype":"float64","shape":[10]}}},"id":"aaface16-b335-4faf-a7d9-5664b57a67a4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35b14b3b-a7e3-457d-8edc-0330f741c594","type":"ColumnDataSource"},"glyph":{"id":"7766bcdd-1408-425b-b181-d652f7421d95","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bb7e36f4-0be8-4bc3-afb3-4a6662c9913e","type":"Text"},"selection_glyph":null,"view":{"id":"5f37f388-4630-44a2-92db-41948de28ce8","type":"CDSView"}},"id":"1080a9c9-2376-48e8-a35f-12ce7c348bff","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5951e08-25fa-4524-9cad-da7f820d286c","type":"CircleCross"},{"attributes":{"source":{"id":"67b7bd3e-1ab4-4744-8847-225f8707b264","type":"ColumnDataSource"}},"id":"d9388596-6903-4abc-b085-a587f2d79507","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b41c7245-af5d-4524-96fa-fd8f9100292b","type":"SquareCross"},{"attributes":{"source":{"id":"eb1cc0ef-e171-4c9d-89cc-21a2ed343213","type":"ColumnDataSource"}},"id":"d0ade342-40f5-46c4-bd23-be7f836721d7","type":"CDSView"},{"attributes":{"data_source":{"id":"9ff3b0dc-53c6-4d12-a89b-ced5466d7ad4","type":"ColumnDataSource"},"glyph":{"id":"0721ecb0-7bb4-427f-a51c-2150504bfa29","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57b2ecfa-4b03-432c-a1a5-2cdb7d7b96c2","type":"Cross"},"selection_glyph":null,"view":{"id":"a6cc4913-763c-4184-afc0-356183a81de9","type":"CDSView"}},"id":"b604938f-73bf-49c7-94b3-050a4dc2bb4a","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"3f0e02be-916c-46ba-acd1-b78ebcc0f96d","type":"Text"},{"attributes":{"data_source":{"id":"eb1cc0ef-e171-4c9d-89cc-21a2ed343213","type":"ColumnDataSource"},"glyph":{"id":"d763db72-f297-4164-8a1c-75145876e12b","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f0e02be-916c-46ba-acd1-b78ebcc0f96d","type":"Text"},"selection_glyph":null,"view":{"id":"d0ade342-40f5-46c4-bd23-be7f836721d7","type":"CDSView"}},"id":"c5c8db32-985a-4d85-921a-b44ba7d0c859","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f862d1d-7744-4c7d-b361-10999d86c336","type":"SquareCross"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"W7yc7RmdG0AGWTUYlUoYQIbXhxOa2hlAasSwXnj6GECV9lvVNqsbQO9mL7c4fhtAXuMPX567GkBwBmFRKDsaQPB/2rj/LRhA41+2iJv1GkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"f1i6uZRrHUCXnxvElIQeQMfnd2/diB5AqoTd7b5pH0AnD6PBaxUdQM2JbMjfFh5A5s6qcHNoHkCo5zvYH2sfQMfajoq1kB9AD/yBBBlsHEA=","dtype":"float64","shape":[10]}}},"id":"a9cc32c9-2f96-4c02-863a-d1b702489ac7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"aaface16-b335-4faf-a7d9-5664b57a67a4","type":"ColumnDataSource"}},"id":"9a6e13cc-2e83-4318-a3e5-7f36c31ddc9b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2394868-b07a-469a-9bbb-f09864fb652b","type":"Diamond"},{"attributes":{"data_source":{"id":"a9cc32c9-2f96-4c02-863a-d1b702489ac7","type":"ColumnDataSource"},"glyph":{"id":"b2394868-b07a-469a-9bbb-f09864fb652b","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"45913fc8-46d4-40c7-b821-71bff0d6202a","type":"Diamond"},"selection_glyph":null,"view":{"id":"aa186360-7e4a-44d7-b14e-341f11cc35e3","type":"CDSView"}},"id":"b84cb870-3f49-4ad6-b235-1f736e7de074","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"zOJMlj4DIEB1riyX+1YgQECufQGTHCFAH9HE3ow5IUADAmpl6KIhQISalxPJHiFAz49bUX1sIECFfqShI9UgQODwWhgioiBA3lc+eh5HIUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"ZqdnR00ZHEAgM7YpOBUfQN240KQ6/R5AWIy75T9sH0C5VXmFeAYcQBGqLYXrfR5AKUEAk5+MHUD/IeaQbhAeQNTHQ97iUh9Af0hSbWPUH0A=","dtype":"float64","shape":[10]}}},"id":"9ff3b0dc-53c6-4d12-a89b-ced5466d7ad4","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"45913fc8-46d4-40c7-b821-71bff0d6202a","type":"Diamond"},{"attributes":{"source":{"id":"a9cc32c9-2f96-4c02-863a-d1b702489ac7","type":"ColumnDataSource"}},"id":"aa186360-7e4a-44d7-b14e-341f11cc35e3","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0721ecb0-7bb4-427f-a51c-2150504bfa29","type":"Cross"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square"]}},"id":"2ebe75b6-6448-49ca-937a-da5d494e5696","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"57b2ecfa-4b03-432c-a1a5-2cdb7d7b96c2","type":"Cross"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle / o"]}},"id":"35eb7b7c-1273-4481-ad1c-341c258554f7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9ff3b0dc-53c6-4d12-a89b-ced5466d7ad4","type":"ColumnDataSource"}},"id":"a6cc4913-763c-4184-afc0-356183a81de9","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"58e2d41e-ab63-4468-be79-573063fdded3","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"6292c532-547d-4ffe-8eac-241783b5abab","type":"Text"},{"attributes":{"source":{"id":"35eb7b7c-1273-4481-ad1c-341c258554f7","type":"ColumnDataSource"}},"id":"2e7b93d6-7674-45e5-933e-18c5a56676bf","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"d25569eb-ed7f-4672-bf5a-aec32c09469f","type":"Text"},{"attributes":{"data_source":{"id":"35eb7b7c-1273-4481-ad1c-341c258554f7","type":"ColumnDataSource"},"glyph":{"id":"58e2d41e-ab63-4468-be79-573063fdded3","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d25569eb-ed7f-4672-bf5a-aec32c09469f","type":"Text"},"selection_glyph":null,"view":{"id":"2e7b93d6-7674-45e5-933e-18c5a56676bf","type":"CDSView"}},"id":"e96abf7e-10ce-4b4e-8c93-a071f702fcdd","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"bc0fb4ab-08b9-41f2-8b70-d12be2150b44","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["triangle"]}},"id":"9022f2c8-c09f-405e-a3ea-510ff5571eec","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"83ae8d80-8708-47a7-8a8a-f5339d22cb0c","type":"Text"},{"attributes":{"source":{"id":"2ebe75b6-6448-49ca-937a-da5d494e5696","type":"ColumnDataSource"}},"id":"0c49f7f7-914e-4233-ad26-fe531ed635e5","type":"CDSView"},{"attributes":{"data_source":{"id":"2ebe75b6-6448-49ca-937a-da5d494e5696","type":"ColumnDataSource"},"glyph":{"id":"6292c532-547d-4ffe-8eac-241783b5abab","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"83ae8d80-8708-47a7-8a8a-f5339d22cb0c","type":"Text"},"selection_glyph":null,"view":{"id":"0c49f7f7-914e-4233-ad26-fe531ed635e5","type":"CDSView"}},"id":"ef118116-6012-4679-8d92-1b5d1dca1b4a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9022f2c8-c09f-405e-a3ea-510ff5571eec","type":"ColumnDataSource"}},"id":"78e1490b-8155-4da8-bea7-20cd7c1a47d5","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"51f12119-fd96-4045-afb1-cb732bde5ce9","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"aed4848a-c915-4a6e-95bb-6cadc2c34c3f","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["asterisk / *"]}},"id":"58db00dc-2588-4a51-ae58-799bc0ccc40c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9022f2c8-c09f-405e-a3ea-510ff5571eec","type":"ColumnDataSource"},"glyph":{"id":"65d85917-ab3c-49c8-923c-0a1ce03da9e2","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"51f12119-fd96-4045-afb1-cb732bde5ce9","type":"Text"},"selection_glyph":null,"view":{"id":"78e1490b-8155-4da8-bea7-20cd7c1a47d5","type":"CDSView"}},"id":"278eab9d-150b-451e-be9d-70d87d95140f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"58db00dc-2588-4a51-ae58-799bc0ccc40c","type":"ColumnDataSource"}},"id":"21fbd4e5-20a7-41e9-bf42-2e145f1402bf","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_x / ox"]}},"id":"8a500400-a57f-4eaa-a021-2efa9384fb94","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"58db00dc-2588-4a51-ae58-799bc0ccc40c","type":"ColumnDataSource"},"glyph":{"id":"aed4848a-c915-4a6e-95bb-6cadc2c34c3f","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2da84b6-7ede-4646-8848-dc39980304db","type":"Text"},"selection_glyph":null,"view":{"id":"21fbd4e5-20a7-41e9-bf42-2e145f1402bf","type":"CDSView"}},"id":"f536d899-c303-419a-8102-6a4cd61ce5e0","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"f2da84b6-7ede-4646-8848-dc39980304db","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"lNNvoSdeE0BAzJWUH/YTQPJHZXJ2xxNAU/Ogv+UHEECB+iRpYK8SQMSAE3rtNBJAaTwTGaQAEUBwZX1vB+URQEUXY67qaxBAEOAoEvGpE0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"ZtGZ+sNp9D92+dqoGHn4P0T0RCPSKv4/sPms/OOY8D/8NTZH5ZP7P6zLEQreUvs/bODV++4U8j9bHHBeTt7+Px32u4awOv8/FlLlAmpF8j8=","dtype":"float64","shape":[10]}}},"id":"6e7cb06d-e34d-4870-84b5-3da06c2c7238","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"746be17f-3586-48f4-be36-5f4c8137115d","type":"BasicTickFormatter"},"plot":{"id":"413be776-9612-4075-a769-687d16f0ab26","subtype":"Figure","type":"Plot"},"ticker":{"id":"60a0b597-e72c-4b42-a910-95db0b4a1d65","type":"BasicTicker"},"visible":false},"id":"bcb58515-7b33-44a3-8b42-8c8df71e81fb","type":"LinearAxis"},{"attributes":{},"id":"60a0b597-e72c-4b42-a910-95db0b4a1d65","type":"BasicTicker"},{"attributes":{},"id":"af50350e-663a-48b0-89ae-88084f48bd95","type":"SaveTool"},{"attributes":{},"id":"7c306954-81b0-4a8d-b541-5a9c0626199f","type":"ResetTool"},{"attributes":{},"id":"4993eb9f-4104-48b0-8173-63cca8f137fb","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"872921e4-8635-4b57-bda2-8253bba06a74","type":"Square"},{"attributes":{"source":{"id":"6e7cb06d-e34d-4870-84b5-3da06c2c7238","type":"ColumnDataSource"}},"id":"26ac98c4-3b8d-4d7b-b7f8-00a50f76d1b3","type":"CDSView"},{"attributes":{},"id":"1a47a03b-23ca-465b-afc4-54512cfdad83","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"aee0545b-c12a-4c62-a1f1-7321484f3a36","type":"Square"},{"attributes":{"data_source":{"id":"6e7cb06d-e34d-4870-84b5-3da06c2c7238","type":"ColumnDataSource"},"glyph":{"id":"aee0545b-c12a-4c62-a1f1-7321484f3a36","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"872921e4-8635-4b57-bda2-8253bba06a74","type":"Square"},"selection_glyph":null,"view":{"id":"26ac98c4-3b8d-4d7b-b7f8-00a50f76d1b3","type":"CDSView"}},"id":"e1a1a776-dd2c-4d4e-ae15-c60a8493e75a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"34e55e61-70fd-4392-a87b-e335a4cddd6a","type":"ColumnDataSource"},"glyph":{"id":"f13906ed-aa28-4b4b-870a-43133da5b520","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20c0e550-b654-48fe-994a-cea9930f3a7d","type":"Circle"},"selection_glyph":null,"view":{"id":"2743aa89-0a67-404f-8524-07b1ef1b0e5a","type":"CDSView"}},"id":"f9d92f98-c671-4eb5-9d62-f7b3d97975bc","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"2656c2d1-8c79-43f0-9fc4-09775355226f","type":"LinearAxis"}],"left":[{"id":"bcb58515-7b33-44a3-8b42-8c8df71e81fb","type":"LinearAxis"}],"renderers":[{"id":"2656c2d1-8c79-43f0-9fc4-09775355226f","type":"LinearAxis"},{"id":"f3b78851-1753-49ff-98f4-229f2246b22e","type":"Grid"},{"id":"bcb58515-7b33-44a3-8b42-8c8df71e81fb","type":"LinearAxis"},{"id":"9e9ad3c8-7e1b-486c-bd9a-c270783c3679","type":"Grid"},{"id":"0d588b83-6386-4baa-8102-acec2066fb1f","type":"BoxAnnotation"},{"id":"f9d92f98-c671-4eb5-9d62-f7b3d97975bc","type":"GlyphRenderer"},{"id":"e1a1a776-dd2c-4d4e-ae15-c60a8493e75a","type":"GlyphRenderer"},{"id":"32224198-eca2-4311-9553-4c2a25fb53af","type":"GlyphRenderer"},{"id":"fe15aae6-ebf0-4252-9641-dfe601c02b86","type":"GlyphRenderer"},{"id":"dfc8eee0-3b14-4388-aaaf-0e4565d5f836","type":"GlyphRenderer"},{"id":"4e83e5ba-b7bc-45d0-989c-d9962a3cce98","type":"GlyphRenderer"},{"id":"4876495d-c16a-4e98-a3f4-3c72a2fb9e17","type":"GlyphRenderer"},{"id":"0995511b-e2bd-479b-9acb-890b7290d54a","type":"GlyphRenderer"},{"id":"6e7a0f08-e0e6-4f1c-9a3c-7f8c9aa1539f","type":"GlyphRenderer"},{"id":"da85a036-afe6-41e2-91d6-2dda5713a284","type":"GlyphRenderer"},{"id":"b84cb870-3f49-4ad6-b235-1f736e7de074","type":"GlyphRenderer"},{"id":"b604938f-73bf-49c7-94b3-050a4dc2bb4a","type":"GlyphRenderer"},{"id":"e96abf7e-10ce-4b4e-8c93-a071f702fcdd","type":"GlyphRenderer"},{"id":"ef118116-6012-4679-8d92-1b5d1dca1b4a","type":"GlyphRenderer"},{"id":"278eab9d-150b-451e-be9d-70d87d95140f","type":"GlyphRenderer"},{"id":"f536d899-c303-419a-8102-6a4cd61ce5e0","type":"GlyphRenderer"},{"id":"dae18a47-299f-4f6a-b34c-5d8a45eb934c","type":"GlyphRenderer"},{"id":"03968da2-6b75-4e65-b6da-9d07405055cd","type":"GlyphRenderer"},{"id":"f018ed60-1fb0-45b5-9ff8-9e49b383b488","type":"GlyphRenderer"},{"id":"d52a9807-a60c-4dac-aef3-4b63b73528b2","type":"GlyphRenderer"},{"id":"26d2b080-c95f-4114-8faf-4be867ebc273","type":"GlyphRenderer"},{"id":"c8112fb0-2e82-4791-ba2c-9f17e831441a","type":"GlyphRenderer"},{"id":"1080a9c9-2376-48e8-a35f-12ce7c348bff","type":"GlyphRenderer"},{"id":"c5c8db32-985a-4d85-921a-b44ba7d0c859","type":"GlyphRenderer"}],"title":{"id":"cd4b012a-1c1f-450c-a90d-3787f780e60b","type":"Title"},"toolbar":{"id":"4ccec52d-42dd-4460-afd9-8d1e5e820112","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e7be2e15-8785-4b97-8e61-4cc5c5814191","type":"DataRange1d"},"x_scale":{"id":"5b03d5c5-eea0-4206-841a-b678469d800e","type":"LinearScale"},"y_range":{"id":"406fdb71-4059-4323-b094-a2f74dcf23c0","type":"DataRange1d"},"y_scale":{"id":"0267e43b-e799-4f6a-87f2-5510fc307053","type":"LinearScale"}},"id":"413be776-9612-4075-a769-687d16f0ab26","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Bokeh Markers"},"id":"cd4b012a-1c1f-450c-a90d-3787f780e60b","type":"Title"},{"attributes":{"callback":null},"id":"e7be2e15-8785-4b97-8e61-4cc5c5814191","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0ea85d66-0503-43c5-997c-f4df9f7336f7","type":"PanTool"},{"id":"3ff4b7ca-57fd-4d8a-ac1c-e0ead6d44e16","type":"WheelZoomTool"},{"id":"2c86a47e-5d9a-411d-8a21-f3bf808f27ca","type":"BoxZoomTool"},{"id":"af50350e-663a-48b0-89ae-88084f48bd95","type":"SaveTool"},{"id":"7c306954-81b0-4a8d-b541-5a9c0626199f","type":"ResetTool"},{"id":"4993eb9f-4104-48b0-8173-63cca8f137fb","type":"HelpTool"}]},"id":"4ccec52d-42dd-4460-afd9-8d1e5e820112","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"f13906ed-aa28-4b4b-870a-43133da5b520","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0d588b83-6386-4baa-8102-acec2066fb1f","type":"BoxAnnotation"},{"attributes":{},"id":"0ea85d66-0503-43c5-997c-f4df9f7336f7","type":"PanTool"},{"attributes":{"source":{"id":"34e55e61-70fd-4392-a87b-e335a4cddd6a","type":"ColumnDataSource"}},"id":"2743aa89-0a67-404f-8524-07b1ef1b0e5a","type":"CDSView"},{"attributes":{},"id":"3ff4b7ca-57fd-4d8a-ac1c-e0ead6d44e16","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"0d588b83-6386-4baa-8102-acec2066fb1f","type":"BoxAnnotation"}},"id":"2c86a47e-5d9a-411d-8a21-f3bf808f27ca","type":"BoxZoomTool"},{"attributes":{},"id":"5b03d5c5-eea0-4206-841a-b678469d800e","type":"LinearScale"},{"attributes":{"callback":null},"id":"406fdb71-4059-4323-b094-a2f74dcf23c0","type":"DataRange1d"},{"attributes":{},"id":"746be17f-3586-48f4-be36-5f4c8137115d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"8KJeHtdCA0A3gikGyMAGQFGeZ45WyQdA6r0o6eyHAEBXTUSe6vwAQIH4cy1j9ANAw86qAmfeBEAsvYNsyHAGQEjXTrX1rABAxTCS7qRHAUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"oKXzBHew+D/xJJOVImL+P/H2SvApPfY/GPaW5JQ4+z+IBiBZH4b5PxoBYCrI6Pk/aB54ARW5/T/KS2pg0Hb2P/783n3ZePg/Ui9Z9PVR+T8=","dtype":"float64","shape":[10]}}},"id":"34e55e61-70fd-4392-a87b-e335a4cddd6a","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"413be776-9612-4075-a769-687d16f0ab26","subtype":"Figure","type":"Plot"},"ticker":{"id":"60a0b597-e72c-4b42-a910-95db0b4a1d65","type":"BasicTicker"}},"id":"9e9ad3c8-7e1b-486c-bd9a-c270783c3679","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20c0e550-b654-48fe-994a-cea9930f3a7d","type":"Circle"},{"attributes":{},"id":"0267e43b-e799-4f6a-87f2-5510fc307053","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"413be776-9612-4075-a769-687d16f0ab26","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1fca827-dd87-4307-8046-0da4be6da4eb","type":"BasicTicker"}},"id":"f3b78851-1753-49ff-98f4-229f2246b22e","type":"Grid"},{"attributes":{"formatter":{"id":"1a47a03b-23ca-465b-afc4-54512cfdad83","type":"BasicTickFormatter"},"plot":{"id":"413be776-9612-4075-a769-687d16f0ab26","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1fca827-dd87-4307-8046-0da4be6da4eb","type":"BasicTicker"},"visible":false},"id":"2656c2d1-8c79-43f0-9fc4-09775355226f","type":"LinearAxis"},{"attributes":{},"id":"e1fca827-dd87-4307-8046-0da4be6da4eb","type":"BasicTicker"}],"root_ids":["413be776-9612-4075-a769-687d16f0ab26"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"fdd70413-5ff4-47cb-a5f1-33c96cd904ab","elementid":"ab644412-3908-4da6-81f0-c6e5e426fd70","modelid":"413be776-9612-4075-a769-687d16f0ab26"}];
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