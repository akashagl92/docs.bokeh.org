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
      };var element = document.getElementById("78da32bb-59c9-4e7d-bf7b-2255d029f28e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '78da32bb-59c9-4e7d-bf7b-2255d029f28e' but no matching script tag was found. ")
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
                    var docs_json = '{"fe1a0e20-1e4a-488e-bcce-d9601453d4f7":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"4005d706-d49e-4218-876e-5c07c7349118","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"cf40350f-3ca2-41c9-b9df-a6173b37be2d","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"3d6e834d-eb26-416c-aeca-0355af7035a6","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ebb79fe1-dd5e-4b6e-ac56-de622e7d8975","type":"ColumnDataSource"}},"id":"715241ea-2a41-4532-8e4a-435cc82bb92b","type":"CDSView"},{"attributes":{"source":{"id":"0514589a-eb94-4e19-9379-e085532498d0","type":"ColumnDataSource"}},"id":"2e3f0bae-6c40-4895-b47d-f72cca14d4e6","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"814819d1-cd20-440b-8273-ba5e8e8def53","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"71374c59-c6d3-4284-9d3f-00f44861c1ed","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"165f0163-b1ce-402f-9659-cf04e9a6b7a2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"361616b3-32af-49e9-af87-29248388c10d","type":"Circle"},{"attributes":{"formatter":{"id":"652f74ca-d39d-4fd8-b51a-661cb00a6ed5","type":"BasicTickFormatter"},"plot":{"id":"43636d98-1cd7-46fd-968c-0f0a49d08ee5","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2b5bdbf-bfce-4cd2-9f5d-e64dd390ee44","type":"BasicTicker"}},"id":"f693008f-86f5-4b32-ac76-4bdd5299d084","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4005d706-d49e-4218-876e-5c07c7349118","type":"ColumnDataSource"},"glyph":{"id":"fbbe39b3-5a29-454a-a742-4d77938ba860","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"814819d1-cd20-440b-8273-ba5e8e8def53","type":"Circle"},"selection_glyph":null,"view":{"id":"1a30e70a-5dd3-4cf1-8314-b9cea81f515f","type":"CDSView"}},"id":"83ef492e-661c-4052-9661-8b92d3436ad8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ddd556c3-ee99-4b14-b91e-ba0402c7d659","type":"ColumnDataSource"},"glyph":{"id":"53440524-ba24-4cbe-a019-8a38e57907be","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aeeed4a3-6588-4485-913c-afef2c0a6609","type":"Circle"},"selection_glyph":null,"view":{"id":"3826aaa4-033d-4c1f-9960-013e16422fdd","type":"CDSView"}},"id":"d6198417-6c1b-410f-b11e-2d109cd2b18c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5d7df3a4-9ed3-4a6a-acf9-2acab8c1d65d","type":"ColumnDataSource"},"glyph":{"id":"45e12605-1e9c-46cb-ac51-39dfe14ed024","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"efa200a6-f793-4778-a01f-b561738e35b1","type":"Circle"},"selection_glyph":null,"view":{"id":"ccc40c95-000c-4b79-8567-203745b83cbe","type":"CDSView"}},"id":"e7f5ede0-de1f-4437-8b3e-dacbe488bc98","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ef45544a-0013-4443-9227-e1dd43d94f41","type":"BasicTickFormatter"},"plot":{"id":"43636d98-1cd7-46fd-968c-0f0a49d08ee5","subtype":"Figure","type":"Plot"},"ticker":{"id":"0217b7b4-b2fe-4105-a91f-57fdde07e6d4","type":"BasicTicker"}},"id":"7f668e06-1644-42f6-b5e5-7921d17909d2","type":"LinearAxis"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"cc309460-8389-4156-8f2e-b7b8301a9982","type":"TeeHead"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"45e12605-1e9c-46cb-ac51-39dfe14ed024","type":"Circle"},{"attributes":{"source":{"id":"10462ddf-e7b0-4b17-ac55-31e4724aad8d","type":"ColumnDataSource"}},"id":"bb7c03a9-5259-4788-9d28-a246d131fed1","type":"CDSView"},{"attributes":{"callback":null},"id":"950a89f9-c9b2-41ff-a021-aa9182fc9294","type":"DataRange1d"},{"attributes":{"source":{"id":"4005d706-d49e-4218-876e-5c07c7349118","type":"ColumnDataSource"}},"id":"1a30e70a-5dd3-4cf1-8314-b9cea81f515f","type":"CDSView"},{"attributes":{"plot":{"id":"43636d98-1cd7-46fd-968c-0f0a49d08ee5","subtype":"Figure","type":"Plot"},"ticker":{"id":"0217b7b4-b2fe-4105-a91f-57fdde07e6d4","type":"BasicTicker"}},"id":"9dbbcfb6-7566-4d99-a69a-afe6fd198cdf","type":"Grid"},{"attributes":{"overlay":{"id":"13e706fe-9c87-40d1-9d85-1f1102d2e9f4","type":"BoxAnnotation"}},"id":"181cdad5-69bb-4b9b-9655-b21c2b397822","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"fed82e24-0754-4939-937d-7b4ca08cd9ad","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"a67bf09f-bd28-494a-9e3e-ca00b50c9922","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"39393d01-7e36-4477-8c41-172c5b5f4bfb","type":"ColumnDataSource"},"glyph":{"id":"6b29a7d7-ea7a-4b2f-9f7f-a3e4ef53cd1f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bec755bc-8f79-4bab-b04e-b88af0cac9d2","type":"Circle"},"selection_glyph":null,"view":{"id":"e5b8a75d-40a5-4946-8eb2-2497d1a5fad0","type":"CDSView"}},"id":"3676199e-41dd-4c19-8c4d-cebed92d0df0","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"f1d4ec67-832c-4c8e-89a5-1634ad160ef5","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"efa200a6-f793-4778-a01f-b561738e35b1","type":"Circle"},{"attributes":{"source":{"id":"39393d01-7e36-4477-8c41-172c5b5f4bfb","type":"ColumnDataSource"}},"id":"e5b8a75d-40a5-4946-8eb2-2497d1a5fad0","type":"CDSView"},{"attributes":{"data_source":{"id":"f3230b5a-4891-4670-be85-8fff7eb6e758","type":"ColumnDataSource"},"glyph":{"id":"d3e99483-e681-4fd6-9339-7d0182a50165","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5bd3378f-a256-40ad-baf1-cb0c5f1f20d8","type":"Circle"},"selection_glyph":null,"view":{"id":"b3b5e077-f727-4e80-9d8d-cc75e102f0e4","type":"CDSView"}},"id":"5714b3c1-2c82-4f1c-99bd-f8590ecc4e60","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"d7373777-cc0e-4eed-bf26-a22c7c403fcd","type":"Circle"},{"attributes":{},"id":"1a5f149b-daf4-4ff9-adab-531b27e26de7","type":"ResetTool"},{"attributes":{"data_source":{"id":"ebb79fe1-dd5e-4b6e-ac56-de622e7d8975","type":"ColumnDataSource"},"glyph":{"id":"71374c59-c6d3-4284-9d3f-00f44861c1ed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d7373777-cc0e-4eed-bf26-a22c7c403fcd","type":"Circle"},"selection_glyph":null,"view":{"id":"715241ea-2a41-4532-8e4a-435cc82bb92b","type":"CDSView"}},"id":"c03bc981-f717-484d-99a8-74519457f678","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"5d7df3a4-9ed3-4a6a-acf9-2acab8c1d65d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6db0aa75-7c45-4b0a-9709-7ada4e0fce75","type":"ColumnDataSource"},"glyph":{"id":"a4395a6b-e6d6-4190-bce2-b98c391426c7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7c9aba0d-d914-492b-b755-f989e8f7bb6a","type":"Circle"},"selection_glyph":null,"view":{"id":"32fb2ce4-ca79-4f62-982c-0fa6cd3dd2c5","type":"CDSView"}},"id":"711515df-72c5-4bdd-82aa-e76c8bce473d","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"6b29a7d7-ea7a-4b2f-9f7f-a3e4ef53cd1f","type":"Circle"},{"attributes":{"source":{"id":"3d6e834d-eb26-416c-aeca-0355af7035a6","type":"ColumnDataSource"}},"id":"0c387e91-403d-4f95-9ef6-da100a9f8c48","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f6e0f1de-1ae6-454a-89c5-e018661caa61","type":"PanTool"},{"id":"625f207c-4fe3-4959-8e4a-5af010da7451","type":"WheelZoomTool"},{"id":"181cdad5-69bb-4b9b-9655-b21c2b397822","type":"BoxZoomTool"},{"id":"16451a15-3bce-4efe-90bc-146b487d1aa9","type":"SaveTool"},{"id":"1a5f149b-daf4-4ff9-adab-531b27e26de7","type":"ResetTool"},{"id":"4a737e01-4d2c-4b19-862d-2c53b640cbf7","type":"HelpTool"}]},"id":"e976a1e0-66ba-4ff9-8213-2399a991a5dd","type":"Toolbar"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"95522e7d-49c7-4759-812e-8827af48c061","type":"Circle"},{"attributes":{"data_source":{"id":"3d6e834d-eb26-416c-aeca-0355af7035a6","type":"ColumnDataSource"},"glyph":{"id":"621652e9-2318-4f29-b863-d8b6b9450d91","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c3f4b3c-2483-409b-87d8-7c61a02a19a6","type":"Circle"},"selection_glyph":null,"view":{"id":"0c387e91-403d-4f95-9ef6-da100a9f8c48","type":"CDSView"}},"id":"1b5b9922-3b82-4465-8e74-9ae8269c86c5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a67bf09f-bd28-494a-9e3e-ca00b50c9922","type":"ColumnDataSource"},"glyph":{"id":"9ae52e71-39c8-4028-858b-6ad826ffad6f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"361616b3-32af-49e9-af87-29248388c10d","type":"Circle"},"selection_glyph":null,"view":{"id":"344fd54c-8498-413e-ae68-4fe44d6702e8","type":"CDSView"}},"id":"0ec45fe4-1121-4a36-8af1-6db32df00e12","type":"GlyphRenderer"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"cc309460-8389-4156-8f2e-b7b8301a9982","type":"TeeHead"},"plot":{"id":"43636d98-1cd7-46fd-968c-0f0a49d08ee5","subtype":"Figure","type":"Plot"},"source":{"id":"b4bb5839-d718-408f-b409-4b65f09a0140","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"f31a4978-3286-4807-b63a-1b98e3a713af","type":"TeeHead"}},"id":"3dcb9142-c163-4ebd-8547-6f926eee636d","type":"Whisker"},{"attributes":{"data_source":{"id":"0514589a-eb94-4e19-9379-e085532498d0","type":"ColumnDataSource"},"glyph":{"id":"165f0163-b1ce-402f-9659-cf04e9a6b7a2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b0b74605-9dfe-4e6c-9dbd-bc15514f9dc6","type":"Circle"},"selection_glyph":null,"view":{"id":"2e3f0bae-6c40-4895-b47d-f72cca14d4e6","type":"CDSView"}},"id":"e9b8692d-05df-4bd2-9a9d-6952da1d24ad","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f3230b5a-4891-4670-be85-8fff7eb6e758","type":"ColumnDataSource"}},"id":"b3b5e077-f727-4e80-9d8d-cc75e102f0e4","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"39393d01-7e36-4477-8c41-172c5b5f4bfb","type":"ColumnDataSource"},{"attributes":{},"id":"b2b5bdbf-bfce-4cd2-9f5d-e64dd390ee44","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"a2fa5498-6ceb-4daf-8406-e86b7e99ff5e","type":"ColumnDataSource"},{"attributes":{},"id":"625f207c-4fe3-4959-8e4a-5af010da7451","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"9ae52e71-39c8-4028-858b-6ad826ffad6f","type":"Circle"},{"attributes":{},"id":"0217b7b4-b2fe-4105-a91f-57fdde07e6d4","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"5bd3378f-a256-40ad-baf1-cb0c5f1f20d8","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"a4395a6b-e6d6-4190-bce2-b98c391426c7","type":"Circle"},{"attributes":{"source":{"id":"6db0aa75-7c45-4b0a-9709-7ada4e0fce75","type":"ColumnDataSource"}},"id":"32fb2ce4-ca79-4f62-982c-0fa6cd3dd2c5","type":"CDSView"},{"attributes":{"data_source":{"id":"d10c2a8b-f640-44cd-b22f-026c8846c2b6","type":"ColumnDataSource"},"glyph":{"id":"cf40350f-3ca2-41c9-b9df-a6173b37be2d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a9ddbda-b7e8-404e-b74d-90c321988623","type":"Circle"},"selection_glyph":null,"view":{"id":"576cddef-74d8-441c-9573-56296dccadfe","type":"CDSView"}},"id":"370bf075-2110-4039-94aa-f304f943aa60","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"f3230b5a-4891-4670-be85-8fff7eb6e758","type":"ColumnDataSource"},{"attributes":{},"id":"ef45544a-0013-4443-9227-e1dd43d94f41","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"5d7df3a4-9ed3-4a6a-acf9-2acab8c1d65d","type":"ColumnDataSource"}},"id":"ccc40c95-000c-4b79-8567-203745b83cbe","type":"CDSView"},{"attributes":{},"id":"f6e0f1de-1ae6-454a-89c5-e018661caa61","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"2a9ddbda-b7e8-404e-b74d-90c321988623","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"ddd556c3-ee99-4b14-b91e-ba0402c7d659","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"bec755bc-8f79-4bab-b04e-b88af0cac9d2","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"621652e9-2318-4f29-b863-d8b6b9450d91","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"aeeed4a3-6588-4485-913c-afef2c0a6609","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"43636d98-1cd7-46fd-968c-0f0a49d08ee5","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2b5bdbf-bfce-4cd2-9f5d-e64dd390ee44","type":"BasicTicker"}},"id":"69d063f3-87a8-44f1-b273-630f25ddee61","type":"Grid"},{"attributes":{"source":{"id":"a2fa5498-6ceb-4daf-8406-e86b7e99ff5e","type":"ColumnDataSource"}},"id":"8423e43c-d503-404f-be07-ea4393936548","type":"CDSView"},{"attributes":{"below":[{"id":"7f668e06-1644-42f6-b5e5-7921d17909d2","type":"LinearAxis"}],"left":[{"id":"f693008f-86f5-4b32-ac76-4bdd5299d084","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"7f668e06-1644-42f6-b5e5-7921d17909d2","type":"LinearAxis"},{"id":"9dbbcfb6-7566-4d99-a69a-afe6fd198cdf","type":"Grid"},{"id":"f693008f-86f5-4b32-ac76-4bdd5299d084","type":"LinearAxis"},{"id":"69d063f3-87a8-44f1-b273-630f25ddee61","type":"Grid"},{"id":"13e706fe-9c87-40d1-9d85-1f1102d2e9f4","type":"BoxAnnotation"},{"id":"3dcb9142-c163-4ebd-8547-6f926eee636d","type":"Whisker"},{"id":"5714b3c1-2c82-4f1c-99bd-f8590ecc4e60","type":"GlyphRenderer"},{"id":"83ef492e-661c-4052-9661-8b92d3436ad8","type":"GlyphRenderer"},{"id":"1b5b9922-3b82-4465-8e74-9ae8269c86c5","type":"GlyphRenderer"},{"id":"e9b8692d-05df-4bd2-9a9d-6952da1d24ad","type":"GlyphRenderer"},{"id":"e7f5ede0-de1f-4437-8b3e-dacbe488bc98","type":"GlyphRenderer"},{"id":"711515df-72c5-4bdd-82aa-e76c8bce473d","type":"GlyphRenderer"},{"id":"0ec45fe4-1121-4a36-8af1-6db32df00e12","type":"GlyphRenderer"},{"id":"cd4eb64b-14d0-415b-95ab-90d4b3146b26","type":"GlyphRenderer"},{"id":"d6198417-6c1b-410f-b11e-2d109cd2b18c","type":"GlyphRenderer"},{"id":"942fce8f-4575-4729-bc51-9f11e6a70fec","type":"GlyphRenderer"},{"id":"3676199e-41dd-4c19-8c4d-cebed92d0df0","type":"GlyphRenderer"},{"id":"370bf075-2110-4039-94aa-f304f943aa60","type":"GlyphRenderer"},{"id":"c03bc981-f717-484d-99a8-74519457f678","type":"GlyphRenderer"}],"title":{"id":"2be136ae-2a87-4804-a923-f06e31838df6","type":"Title"},"toolbar":{"id":"e976a1e0-66ba-4ff9-8213-2399a991a5dd","type":"Toolbar"},"x_range":{"id":"950a89f9-c9b2-41ff-a021-aa9182fc9294","type":"DataRange1d"},"x_scale":{"id":"3aaa26e1-5637-47fc-87be-dcd6c6317ce5","type":"LinearScale"},"y_range":{"id":"fed82e24-0754-4939-937d-7b4ca08cd9ad","type":"DataRange1d"},"y_scale":{"id":"868afd60-04d9-4cbb-a6c4-726581f6d723","type":"LinearScale"}},"id":"43636d98-1cd7-46fd-968c-0f0a49d08ee5","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"a2fa5498-6ceb-4daf-8406-e86b7e99ff5e","type":"ColumnDataSource"},"glyph":{"id":"95522e7d-49c7-4759-812e-8827af48c061","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71549749-230f-4d21-a3d7-29c849e847f5","type":"Circle"},"selection_glyph":null,"view":{"id":"8423e43c-d503-404f-be07-ea4393936548","type":"CDSView"}},"id":"cd4eb64b-14d0-415b-95ab-90d4b3146b26","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"fbbe39b3-5a29-454a-a742-4d77938ba860","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"71549749-230f-4d21-a3d7-29c849e847f5","type":"Circle"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"f31a4978-3286-4807-b63a-1b98e3a713af","type":"TeeHead"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"53440524-ba24-4cbe-a019-8a38e57907be","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"b62f7816-ca74-4306-92c7-f20756ba8b8c","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"6db0aa75-7c45-4b0a-9709-7ada4e0fce75","type":"ColumnDataSource"},{"attributes":{},"id":"868afd60-04d9-4cbb-a6c4-726581f6d723","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"d3e99483-e681-4fd6-9339-7d0182a50165","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"b0b74605-9dfe-4e6c-9dbd-bc15514f9dc6","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"ebb79fe1-dd5e-4b6e-ac56-de622e7d8975","type":"ColumnDataSource"},{"attributes":{},"id":"16451a15-3bce-4efe-90bc-146b487d1aa9","type":"SaveTool"},{"attributes":{},"id":"3aaa26e1-5637-47fc-87be-dcd6c6317ce5","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"7c9aba0d-d914-492b-b755-f989e8f7bb6a","type":"Circle"},{"attributes":{"source":{"id":"ddd556c3-ee99-4b14-b91e-ba0402c7d659","type":"ColumnDataSource"}},"id":"3826aaa4-033d-4c1f-9960-013e16422fdd","type":"CDSView"},{"attributes":{"data_source":{"id":"10462ddf-e7b0-4b17-ac55-31e4724aad8d","type":"ColumnDataSource"},"glyph":{"id":"f1d4ec67-832c-4c8e-89a5-1634ad160ef5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b62f7816-ca74-4306-92c7-f20756ba8b8c","type":"Circle"},"selection_glyph":null,"view":{"id":"bb7c03a9-5259-4788-9d28-a246d131fed1","type":"CDSView"}},"id":"942fce8f-4575-4729-bc51-9f11e6a70fec","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"2be136ae-2a87-4804-a923-f06e31838df6","type":"Title"},{"attributes":{"source":{"id":"a67bf09f-bd28-494a-9e3e-ca00b50c9922","type":"ColumnDataSource"}},"id":"344fd54c-8498-413e-ae68-4fe44d6702e8","type":"CDSView"},{"attributes":{},"id":"652f74ca-d39d-4fd8-b51a-661cb00a6ed5","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13e706fe-9c87-40d1-9d85-1f1102d2e9f4","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"0514589a-eb94-4e19-9379-e085532498d0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"d10c2a8b-f640-44cd-b22f-026c8846c2b6","type":"ColumnDataSource"},{"attributes":{"source":{"id":"d10c2a8b-f640-44cd-b22f-026c8846c2b6","type":"ColumnDataSource"}},"id":"576cddef-74d8-441c-9573-56296dccadfe","type":"CDSView"},{"attributes":{"callback":null,"column_names":["base","lower","upper"],"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]}},"id":"b4bb5839-d718-408f-b409-4b65f09a0140","type":"ColumnDataSource"},{"attributes":{},"id":"4a737e01-4d2c-4b19-862d-2c53b640cbf7","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"10462ddf-e7b0-4b17-ac55-31e4724aad8d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"5c3f4b3c-2483-409b-87d8-7c61a02a19a6","type":"Circle"}],"root_ids":["43636d98-1cd7-46fd-968c-0f0a49d08ee5"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"fe1a0e20-1e4a-488e-bcce-d9601453d4f7","elementid":"78da32bb-59c9-4e7d-bf7b-2255d029f28e","modelid":"43636d98-1cd7-46fd-968c-0f0a49d08ee5"}];
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