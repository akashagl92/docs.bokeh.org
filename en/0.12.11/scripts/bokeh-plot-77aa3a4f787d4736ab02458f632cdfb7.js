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
      };var element = document.getElementById("c240ac8d-ed2e-40a4-b34d-56e42db15220");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c240ac8d-ed2e-40a4-b34d-56e42db15220' but no matching script tag was found. ")
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
                    var docs_json = '{"a57836e4-bf28-4eb5-9a0b-d207e8ff016b":{"roots":{"references":[{"attributes":{},"id":"c66f8604-1f76-48bf-8d37-4ee5cf7ec339","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"e6cd2366-a688-41bf-bec9-43b4ef67d6b5","type":"Circle"},{"attributes":{},"id":"fdb2501c-a2fe-4d04-a2dd-d9858c875f36","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"a369a6e0-8b64-4aab-9263-6356f4460869","type":"ColumnDataSource"},{"attributes":{},"id":"365249d0-7b7a-4e59-b834-29e87c726de9","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"fc04630e-87e5-4106-ac44-8627ae5e3c6e","type":"LinearAxis"}],"left":[{"id":"15f785c1-ee30-4e09-adcf-ce879e85e99f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fc04630e-87e5-4106-ac44-8627ae5e3c6e","type":"LinearAxis"},{"id":"2cfbf951-48b4-42ad-803a-20727294d8f9","type":"Grid"},{"id":"15f785c1-ee30-4e09-adcf-ce879e85e99f","type":"LinearAxis"},{"id":"68cc6730-58f9-4a55-9fb6-0863b0c4bc60","type":"Grid"},{"id":"50b9b4b5-f982-4d96-b469-b43e1431b646","type":"BoxAnnotation"},{"id":"a100928a-3bee-431e-8206-da2f505326b2","type":"PolyAnnotation"},{"id":"1087bf78-71d3-4034-9e3d-7a019ba3b2b2","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d69129f1-942a-4edc-bf03-b6396dd1e151","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e2422fb7-e223-4c64-80e4-9e2aba3131c3","type":"DataRange1d"},"x_scale":{"id":"0b40cc68-f2c3-4d75-90c9-80adbf9c2d24","type":"LinearScale"},"y_range":{"id":"66683a7d-b914-48d4-aa22-2e27137e7d21","type":"DataRange1d"},"y_scale":{"id":"768b16ef-2294-40df-8b3c-f48056c2258f","type":"LinearScale"}},"id":"c9bd50a7-7077-4d3b-b91c-8a1ef29849db","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"e94ad4d4-f7f5-4e24-9561-828dff062918","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"8d32f6ed-7f22-4771-a435-c1211f5dac27","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7e9f284d-85f0-4df5-a22d-c9d65ba6a1ae","type":"BoxSelectTool"},{"id":"179698dc-5155-4571-9fdd-f78bc51b21cb","type":"LassoSelectTool"},{"id":"8cdaf260-410e-487c-a308-4b7d34ddb159","type":"HelpTool"}]},"id":"d69129f1-942a-4edc-bf03-b6396dd1e151","type":"Toolbar"},{"attributes":{"callback":null},"id":"e2422fb7-e223-4c64-80e4-9e2aba3131c3","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"50b9b4b5-f982-4d96-b469-b43e1431b646","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"a470b00b-3ac2-4ce4-bd72-24fb9ad4f092","type":"LinearAxis"}],"left":[{"id":"b475c207-f9c8-4ad5-86ed-1c4b4fa0761c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a470b00b-3ac2-4ce4-bd72-24fb9ad4f092","type":"LinearAxis"},{"id":"1a518746-893d-4f53-ade8-bf9e3086c65e","type":"Grid"},{"id":"b475c207-f9c8-4ad5-86ed-1c4b4fa0761c","type":"LinearAxis"},{"id":"8c28b0e2-cc1f-4a10-8123-395e8ad755ec","type":"Grid"},{"id":"c2bda5d8-4fc2-4cf3-b5c9-2dab39873e25","type":"BoxAnnotation"},{"id":"c1e1e8c0-5ab9-4a02-af32-aff4c42dbe09","type":"PolyAnnotation"},{"id":"07483c3d-36e1-453c-aa9e-23fc20d73a47","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"92b797d8-79f0-4f91-a337-edabf90cb973","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"62bdefc9-3bd6-4c0d-96d1-05255447f510","type":"DataRange1d"},"x_scale":{"id":"adc1e5b8-9ed2-427a-a3b3-80a077b1d295","type":"LinearScale"},"y_range":{"id":"cae1dc67-1628-4ef6-9522-de921e51c63d","type":"DataRange1d"},"y_scale":{"id":"47474233-cb8d-4fdf-a9d6-8c7fd7a55d6d","type":"LinearScale"}},"id":"27bf60a3-a561-4a48-8b54-290bea2befb3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0b40cc68-f2c3-4d75-90c9-80adbf9c2d24","type":"LinearScale"},{"attributes":{"tools":[{"id":"7e9f284d-85f0-4df5-a22d-c9d65ba6a1ae","type":"BoxSelectTool"},{"id":"179698dc-5155-4571-9fdd-f78bc51b21cb","type":"LassoSelectTool"},{"id":"8cdaf260-410e-487c-a308-4b7d34ddb159","type":"HelpTool"},{"id":"078a34bd-303a-4fc9-9b9d-7d3c20f9b84e","type":"BoxSelectTool"},{"id":"ab641d67-be6d-46b6-b572-115cc8655de7","type":"LassoSelectTool"},{"id":"c66f8604-1f76-48bf-8d37-4ee5cf7ec339","type":"HelpTool"}]},"id":"e94ad4d4-f7f5-4e24-9561-828dff062918","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"66683a7d-b914-48d4-aa22-2e27137e7d21","type":"DataRange1d"},{"attributes":{"source":{"id":"a369a6e0-8b64-4aab-9263-6356f4460869","type":"ColumnDataSource"}},"id":"26190889-53f2-40bf-bd9f-ade6f6d1c570","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"c9bd50a7-7077-4d3b-b91c-8a1ef29849db","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd2c5fe3-14bf-41f9-b272-08d7071d67e1","type":"BasicTicker"}},"id":"68cc6730-58f9-4a55-9fb6-0863b0c4bc60","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"c1e1e8c0-5ab9-4a02-af32-aff4c42dbe09","type":"PolyAnnotation"},{"attributes":{},"id":"768b16ef-2294-40df-8b3c-f48056c2258f","type":"LinearScale"},{"attributes":{},"id":"8cdaf260-410e-487c-a308-4b7d34ddb159","type":"HelpTool"},{"attributes":{"plot":{"id":"c9bd50a7-7077-4d3b-b91c-8a1ef29849db","subtype":"Figure","type":"Plot"},"ticker":{"id":"98cc6015-fb31-42d1-b09d-62a93f7bdde0","type":"BasicTicker"}},"id":"2cfbf951-48b4-42ad-803a-20727294d8f9","type":"Grid"},{"attributes":{"data_source":{"id":"a369a6e0-8b64-4aab-9263-6356f4460869","type":"ColumnDataSource"},"glyph":{"id":"e6cd2366-a688-41bf-bec9-43b4ef67d6b5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59bf17f9-49d7-49a0-b2bb-9d19f40d2df8","type":"Circle"},"selection_glyph":null,"view":{"id":"26190889-53f2-40bf-bd9f-ade6f6d1c570","type":"CDSView"}},"id":"07483c3d-36e1-453c-aa9e-23fc20d73a47","type":"GlyphRenderer"},{"attributes":{},"id":"98cc6015-fb31-42d1-b09d-62a93f7bdde0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"db259a1b-7c8b-48c6-960b-bb748917e903","type":"BasicTickFormatter"},"plot":{"id":"c9bd50a7-7077-4d3b-b91c-8a1ef29849db","subtype":"Figure","type":"Plot"},"ticker":{"id":"98cc6015-fb31-42d1-b09d-62a93f7bdde0","type":"BasicTicker"}},"id":"fc04630e-87e5-4106-ac44-8627ae5e3c6e","type":"LinearAxis"},{"attributes":{"formatter":{"id":"fdb2501c-a2fe-4d04-a2dd-d9858c875f36","type":"BasicTickFormatter"},"plot":{"id":"c9bd50a7-7077-4d3b-b91c-8a1ef29849db","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd2c5fe3-14bf-41f9-b272-08d7071d67e1","type":"BasicTicker"}},"id":"15f785c1-ee30-4e09-adcf-ce879e85e99f","type":"LinearAxis"},{"attributes":{"children":[{"id":"c9bd50a7-7077-4d3b-b91c-8a1ef29849db","subtype":"Figure","type":"Plot"},{"id":"27bf60a3-a561-4a48-8b54-290bea2befb3","subtype":"Figure","type":"Plot"}]},"id":"f07f7060-68c2-4c16-a0dd-96bba28af950","type":"Row"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"4cdada92-8966-4e6c-b27e-41a7fb317f34","type":"Circle"},{"attributes":{},"id":"bd2c5fe3-14bf-41f9-b272-08d7071d67e1","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"a100928a-3bee-431e-8206-da2f505326b2","type":"PolyAnnotation"}},"id":"179698dc-5155-4571-9fdd-f78bc51b21cb","type":"LassoSelectTool"},{"attributes":{},"id":"2c52be1e-e9af-459f-b967-5705219794e0","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"50b9b4b5-f982-4d96-b469-b43e1431b646","type":"BoxAnnotation"},"renderers":[{"id":"1087bf78-71d3-4034-9e3d-7a019ba3b2b2","type":"GlyphRenderer"}]},"id":"7e9f284d-85f0-4df5-a22d-c9d65ba6a1ae","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"8d32f6ed-7f22-4771-a435-c1211f5dac27","type":"ToolbarBox"},{"id":"34a1d85d-87de-4096-a670-4ae63b43f33f","type":"Column"}]},"id":"5f562e98-ca76-4521-a070-bd33879f81f9","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"076122c5-db2c-47d4-9a33-b80869df32e7","type":"Circle"},{"attributes":{"source":{"id":"a369a6e0-8b64-4aab-9263-6356f4460869","type":"ColumnDataSource"}},"id":"b8c165e1-e5cd-4ebb-b9b6-114a019223bf","type":"CDSView"},{"attributes":{},"id":"adc1e5b8-9ed2-427a-a3b3-80a077b1d295","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c2bda5d8-4fc2-4cf3-b5c9-2dab39873e25","type":"BoxAnnotation"},{"attributes":{},"id":"0402c570-39ae-469c-861e-4dc76a4558ca","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0402c570-39ae-469c-861e-4dc76a4558ca","type":"BasicTickFormatter"},"plot":{"id":"27bf60a3-a561-4a48-8b54-290bea2befb3","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c52be1e-e9af-459f-b967-5705219794e0","type":"BasicTicker"}},"id":"b475c207-f9c8-4ad5-86ed-1c4b4fa0761c","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"27bf60a3-a561-4a48-8b54-290bea2befb3","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c52be1e-e9af-459f-b967-5705219794e0","type":"BasicTicker"}},"id":"8c28b0e2-cc1f-4a10-8123-395e8ad755ec","type":"Grid"},{"attributes":{},"id":"6e867f43-15eb-42dd-8160-63b82cc58318","type":"BasicTicker"},{"attributes":{"callback":null},"id":"62bdefc9-3bd6-4c0d-96d1-05255447f510","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"59bf17f9-49d7-49a0-b2bb-9d19f40d2df8","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"a100928a-3bee-431e-8206-da2f505326b2","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"f07f7060-68c2-4c16-a0dd-96bba28af950","type":"Row"}]},"id":"34a1d85d-87de-4096-a670-4ae63b43f33f","type":"Column"},{"attributes":{"callback":null},"id":"cae1dc67-1628-4ef6-9522-de921e51c63d","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a369a6e0-8b64-4aab-9263-6356f4460869","type":"ColumnDataSource"},"glyph":{"id":"4cdada92-8966-4e6c-b27e-41a7fb317f34","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"076122c5-db2c-47d4-9a33-b80869df32e7","type":"Circle"},"selection_glyph":null,"view":{"id":"b8c165e1-e5cd-4ebb-b9b6-114a019223bf","type":"CDSView"}},"id":"1087bf78-71d3-4034-9e3d-7a019ba3b2b2","type":"GlyphRenderer"},{"attributes":{},"id":"db259a1b-7c8b-48c6-960b-bb748917e903","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"365249d0-7b7a-4e59-b834-29e87c726de9","type":"BasicTickFormatter"},"plot":{"id":"27bf60a3-a561-4a48-8b54-290bea2befb3","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e867f43-15eb-42dd-8160-63b82cc58318","type":"BasicTicker"}},"id":"a470b00b-3ac2-4ce4-bd72-24fb9ad4f092","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"c1e1e8c0-5ab9-4a02-af32-aff4c42dbe09","type":"PolyAnnotation"}},"id":"ab641d67-be6d-46b6-b572-115cc8655de7","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"078a34bd-303a-4fc9-9b9d-7d3c20f9b84e","type":"BoxSelectTool"},{"id":"ab641d67-be6d-46b6-b572-115cc8655de7","type":"LassoSelectTool"},{"id":"c66f8604-1f76-48bf-8d37-4ee5cf7ec339","type":"HelpTool"}]},"id":"92b797d8-79f0-4f91-a337-edabf90cb973","type":"Toolbar"},{"attributes":{},"id":"47474233-cb8d-4fdf-a9d6-8c7fd7a55d6d","type":"LinearScale"},{"attributes":{"plot":{"id":"27bf60a3-a561-4a48-8b54-290bea2befb3","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e867f43-15eb-42dd-8160-63b82cc58318","type":"BasicTicker"}},"id":"1a518746-893d-4f53-ade8-bf9e3086c65e","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"c2bda5d8-4fc2-4cf3-b5c9-2dab39873e25","type":"BoxAnnotation"},"renderers":[{"id":"07483c3d-36e1-453c-aa9e-23fc20d73a47","type":"GlyphRenderer"}]},"id":"078a34bd-303a-4fc9-9b9d-7d3c20f9b84e","type":"BoxSelectTool"}],"root_ids":["5f562e98-ca76-4521-a070-bd33879f81f9"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"a57836e4-bf28-4eb5-9a0b-d207e8ff016b","elementid":"c240ac8d-ed2e-40a4-b34d-56e42db15220","modelid":"5f562e98-ca76-4521-a070-bd33879f81f9"}];
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