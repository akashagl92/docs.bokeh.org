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
      };var element = document.getElementById("b062104b-3025-4033-9d7b-91c8341c3c1f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b062104b-3025-4033-9d7b-91c8341c3c1f' but no matching script tag was found. ")
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
                    var docs_json = '{"23d2e0a2-4daa-4ef1-92eb-d9aa06c37618":{"roots":{"references":[{"attributes":{"below":[{"id":"efd3b2ac-6f8b-4f0f-b48a-bc8c874b9780","type":"LinearAxis"}],"left":[{"id":"a41c720c-5b3c-4fbc-9520-86c6138d5064","type":"LinearAxis"}],"renderers":[{"id":"efd3b2ac-6f8b-4f0f-b48a-bc8c874b9780","type":"LinearAxis"},{"id":"17fa4eb0-3fd7-48fb-87e2-268155abe63d","type":"Grid"},{"id":"a41c720c-5b3c-4fbc-9520-86c6138d5064","type":"LinearAxis"},{"id":"e42349af-8862-4767-965d-a353bece93e2","type":"Grid"},{"id":"801498ff-6d04-48f7-afd2-f4844d8cbd0b","type":"BoxAnnotation"},{"id":"6da95b33-9c39-4f9e-9813-065705242bdb","type":"GlyphRenderer"}],"title":{"id":"9454930e-9715-482b-ad58-5130b67cb1b6","type":"Title"},"toolbar":{"id":"f308198f-cb26-4aeb-a49d-0edd66df9f5f","type":"Toolbar"},"x_range":{"id":"9b5309e1-aff7-4d61-a28e-6bd4f0c18989","type":"Range1d"},"x_scale":{"id":"c6f1ef78-4bf3-46f9-80cf-bce983471935","type":"LinearScale"},"y_range":{"id":"535494c5-403a-49cd-b2bd-85f7d7563b4f","type":"Range1d"},"y_scale":{"id":"1e0bd733-460a-44c1-9777-77175aafd3f9","type":"LinearScale"}},"id":"895f9f7d-2d8d-4f47-b1f1-092a05d73e6f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d2192b38-67c9-4e0c-869f-4c9c2864d7a9","type":"BasicTicker"},{"attributes":{},"id":"82a8fd03-11d9-4807-b5dd-9a30984bc26a","type":"WheelZoomTool"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"895f9f7d-2d8d-4f47-b1f1-092a05d73e6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"28dba761-f215-4c7f-86ba-84ff68b58f39","type":"BasicTicker"}},"id":"17fa4eb0-3fd7-48fb-87e2-268155abe63d","type":"Grid"},{"attributes":{"formatter":{"id":"adb070eb-dfea-4635-9c79-a3bb4542e5db","type":"BasicTickFormatter"},"plot":{"id":"895f9f7d-2d8d-4f47-b1f1-092a05d73e6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"28dba761-f215-4c7f-86ba-84ff68b58f39","type":"BasicTicker"}},"id":"efd3b2ac-6f8b-4f0f-b48a-bc8c874b9780","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"720121ad-c015-4f2a-baa3-8dfd4bc98be3","type":"PanTool"},{"id":"82a8fd03-11d9-4807-b5dd-9a30984bc26a","type":"WheelZoomTool"},{"id":"f6a79b68-83f1-4fbf-9bfe-5cc87a2934b8","type":"BoxZoomTool"},{"id":"9dee7856-0269-4d68-a091-02a165dbabb0","type":"SaveTool"},{"id":"5347880f-b620-425b-a30d-f63c12aa9a07","type":"ResetTool"},{"id":"e80a1ee8-3a01-4e2d-b75f-9c1d91769309","type":"HelpTool"}]},"id":"f308198f-cb26-4aeb-a49d-0edd66df9f5f","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"801498ff-6d04-48f7-afd2-f4844d8cbd0b","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"b6e9f64e-b56b-4482-b92a-aab69914e17a","type":"BasicTickFormatter"},"plot":{"id":"895f9f7d-2d8d-4f47-b1f1-092a05d73e6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2192b38-67c9-4e0c-869f-4c9c2864d7a9","type":"BasicTicker"}},"id":"a41c720c-5b3c-4fbc-9520-86c6138d5064","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"9454930e-9715-482b-ad58-5130b67cb1b6","type":"Title"},{"attributes":{},"id":"c6f1ef78-4bf3-46f9-80cf-bce983471935","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"877d9d88-b0d2-4fda-80ce-1465a1b3119c","type":"Patches"},{"attributes":{"data_source":{"id":"faee4718-ff11-4f94-a0dd-228f2e8025d3","type":"ColumnDataSource"},"glyph":{"id":"877d9d88-b0d2-4fda-80ce-1465a1b3119c","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62ef54d4-4f8c-470f-be93-02fc38959b9e","type":"Patches"},"selection_glyph":null,"view":{"id":"930638e1-8343-42df-bb73-cf26eda7701e","type":"CDSView"}},"id":"6da95b33-9c39-4f9e-9813-065705242bdb","type":"GlyphRenderer"},{"attributes":{},"id":"b6e9f64e-b56b-4482-b92a-aab69914e17a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"895f9f7d-2d8d-4f47-b1f1-092a05d73e6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2192b38-67c9-4e0c-869f-4c9c2864d7a9","type":"BasicTicker"}},"id":"e42349af-8862-4767-965d-a353bece93e2","type":"Grid"},{"attributes":{"source":{"id":"faee4718-ff11-4f94-a0dd-228f2e8025d3","type":"ColumnDataSource"}},"id":"930638e1-8343-42df-bb73-cf26eda7701e","type":"CDSView"},{"attributes":{"callback":null,"end":800},"id":"535494c5-403a-49cd-b2bd-85f7d7563b4f","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"62ef54d4-4f8c-470f-be93-02fc38959b9e","type":"Patches"},{"attributes":{},"id":"adb070eb-dfea-4635-9c79-a3bb4542e5db","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxAAAAAAAAANEAAAAAAAABHQAAAAAAAQFVAAAAAAABAUUAAAAAAAABWQAAAAAAAgFBAAAAAAACAVkAAAAAAAIBUQAAAAAAAADlAAAAAAACATEAAAAAAAABMQAAAAAAAwFFAAAAAAAAANUAAAAAAAIBVQAAAAAAAAFBAAAAAAAAASkAAAAAAAIBUQAAAAAAAAEtAAAAAAACAV0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAV0AAAAAAAABLQAAAAAAAgFRAAAAAAAAASkAAAAAAAABQQAAAAAAAgFVAAAAAAAAANUAAAAAAAMBRQAAAAAAAAExAAAAAAACATEAAAAAAAAA5QAAAAAAAgFRAAAAAAACAVkAAAAAAAIBQQAAAAAAAAFZAAAAAAABAUUAAAAAAAEBVQAAAAAAAAEdAAAAAAAAANEAAAAAAAAAsQAAAAAAAADpAAAAAAACAUUAAAAAAAABOQAAAAAAAIGZAAAAAAADAYkAAAAAAACBgQAAAAAAAQGRAAAAAAAAAXUAAAAAAAMBlQAAAAAAAAEdAAAAAAACAUUAAAAAAACBhQAAAAAAAQF5AAAAAAADAWEAAAAAAAEBYQAAAAAAAYGNAAAAAAAAgYkAAAAAAAKBlQAAAAAAAgFJAAAAAAACAW0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAW0AAAAAAAIBSQAAAAAAAoGVAAAAAAAAgYkAAAAAAAGBjQAAAAAAAQFhAAAAAAADAWEAAAAAAAEBeQAAAAAAAIGFAAAAAAACAUUAAAAAAAABHQAAAAAAAwGVAAAAAAAAAXUAAAAAAAEBkQAAAAAAAIGBAAAAAAADAYkAAAAAAACBmQAAAAAAAAE5AAAAAAACAUUAAAAAAAAA6QAAAAAAAQFlAAAAAAAAAWEAAAAAAAIBUQAAAAAAAYGhAAAAAAABgZ0AAAAAAAGBiQAAAAAAA4G1AAAAAAAAgaUAAAAAAAIBtQAAAAAAAgFtAAAAAAADgZEAAAAAAAOBoQAAAAAAAgGpAAAAAAAAgY0AAAAAAAMBbQAAAAAAAAGxAAAAAAAAAZkAAAAAAAMBoQAAAAAAAoGNAAAAAAAAgY0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgY0AAAAAAAKBjQAAAAAAAwGhAAAAAAAAAZkAAAAAAAABsQAAAAAAAwFtAAAAAAAAgY0AAAAAAAIBqQAAAAAAA4GhAAAAAAADgZEAAAAAAAIBbQAAAAAAAgG1AAAAAAAAgaUAAAAAAAOBtQAAAAAAAYGJAAAAAAABgZ0AAAAAAAGBoQAAAAAAAgFRAAAAAAAAAWEAAAAAAAEBZQAAAAAAAoGdAAAAAAADgZ0AAAAAAAIBcQAAAAAAAwG5AAAAAAADAbUAAAAAAAGBkQAAAAAAA0HJAAAAAAABQcUAAAAAAADBzQAAAAAAA4GNAAAAAAAAAbUAAAAAAAMBtQAAAAAAA8HBAAAAAAADga0AAAAAAAABqQAAAAAAAIHNAAAAAAACgakAAAAAAAEBrQAAAAAAAoG1AAAAAAADgZ0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgZ0AAAAAAAKBtQAAAAAAAQGtAAAAAAACgakAAAAAAACBzQAAAAAAAAGpAAAAAAADga0AAAAAAAPBwQAAAAAAAwG1AAAAAAAAAbUAAAAAAAOBjQAAAAAAAMHNAAAAAAABQcUAAAAAAANByQAAAAAAAYGRAAAAAAADAbUAAAAAAAMBuQAAAAAAAgFxAAAAAAADgZ0AAAAAAAKBnQAAAAAAAgG1AAAAAAADAa0AAAAAAAOBpQAAAAAAAsHFAAAAAAADQcEAAAAAAAOBnQAAAAAAAsHZAAAAAAAAAc0AAAAAAAPB4QAAAAAAAAG1AAAAAAACQcUAAAAAAADB0QAAAAAAAEHJAAAAAAADAc0AAAAAAAEBxQAAAAAAAcHhAAAAAAABgc0AAAAAAANBxQAAAAAAAIHRAAAAAAADAcEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAcEAAAAAAACB0QAAAAAAA0HFAAAAAAABgc0AAAAAAAHB4QAAAAAAAQHFAAAAAAADAc0AAAAAAABByQAAAAAAAMHRAAAAAAACQcUAAAAAAAABtQAAAAAAA8HhAAAAAAAAAc0AAAAAAALB2QAAAAAAA4GdAAAAAAADQcEAAAAAAALBxQAAAAAAA4GlAAAAAAADAa0AAAAAAAIBtQAAAAAAA4HJAAAAAAACwcEAAAAAAAHBwQAAAAAAAMHRAAAAAAAAAdUAAAAAAAIBsQAAAAAAAkHxAAAAAAADgdEAAAAAAAMB5QAAAAAAAIHFAAAAAAAAgdEAAAAAAADB6QAAAAAAAQHNAAAAAAABAeEAAAAAAABB0QAAAAAAAYHlAAAAAAABAdUAAAAAAAEB0QAAAAAAAQHpAAAAAAADwdUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADwdUAAAAAAAEB6QAAAAAAAQHRAAAAAAABAdUAAAAAAAGB5QAAAAAAAEHRAAAAAAABAeEAAAAAAAEBzQAAAAAAAMHpAAAAAAAAgdEAAAAAAACBxQAAAAAAAwHlAAAAAAADgdEAAAAAAAJB8QAAAAAAAgGxAAAAAAAAAdUAAAAAAADB0QAAAAAAAcHBAAAAAAACwcEAAAAAAAOByQAAAAAAAcHRAAAAAAADQdkAAAAAAAKB2QAAAAAAAAHpAAAAAAAAge0AAAAAAAKByQAAAAAAAEIBAAAAAAAAQd0AAAAAAAMB7QAAAAAAAUHVAAAAAAADgeEAAAAAAAACAQAAAAAAAQHRAAAAAAADQfEAAAAAAAJB1QAAAAAAAQHtAAAAAAABAeEAAAAAAAGB4QAAAAAAAQHtAAAAAAADgd0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgd0AAAAAAAEB7QAAAAAAAYHhAAAAAAABAeEAAAAAAAEB7QAAAAAAAkHVAAAAAAADQfEAAAAAAAEB0QAAAAAAAAIBAAAAAAADgeEAAAAAAAFB1QAAAAAAAwHtAAAAAAAAQd0AAAAAAABCAQAAAAAAAoHJAAAAAAAAge0AAAAAAAAB6QAAAAAAAoHZAAAAAAADQdkAAAAAAAHB0QAAAAAAAsHdAAAAAAABQeUAAAAAAAIB3QAAAAAAA4HxAAAAAAABggEAAAAAAAJB2QAAAAAAAKIJAAAAAAACQeUAAAAAAAEB+QAAAAAAAMHZAAAAAAACgfEAAAAAAACiBQAAAAAAAcHdAAAAAAABogUAAAAAAAAB7QAAAAAAA8HxAAAAAAAAwfkAAAAAAAGB9QAAAAAAAMH9AAAAAAADwekA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADwekAAAAAAADB/QAAAAAAAYH1AAAAAAAAwfkAAAAAAAPB8QAAAAAAAAHtAAAAAAABogUAAAAAAAHB3QAAAAAAAKIFAAAAAAACgfEAAAAAAADB2QAAAAAAAQH5AAAAAAACQeUAAAAAAACiCQAAAAAAAkHZAAAAAAABggEAAAAAAAOB8QAAAAAAAgHdAAAAAAABQeUAAAAAAALB3QAAAAAAAUHlAAAAAAACAfUAAAAAAAJB4QAAAAAAAoH9AAAAAAABogUAAAAAAAGB8QAAAAAAAGIRAAAAAAADwekAAAAAAAJiBQAAAAAAAUHdAAAAAAAAQf0AAAAAAAFiDQAAAAAAAUHlAAAAAAACAg0AAAAAAAKB+QAAAAAAAiIBAAAAAAAAQgkAAAAAAAIiAQAAAAAAAqIBAAAAAAABQfEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABQfEAAAAAAAKiAQAAAAAAAiIBAAAAAAAAQgkAAAAAAAIiAQAAAAAAAoH5AAAAAAACAg0AAAAAAAFB5QAAAAAAAWINAAAAAAAAQf0AAAAAAAFB3QAAAAAAAmIFAAAAAAADwekAAAAAAABiEQAAAAAAAYHxAAAAAAABogUAAAAAAAKB/QAAAAAAAkHhAAAAAAACAfUAAAAAAAFB5QAAAAAAAcHpAAAAAAAA4gUAAAAAAALB7QAAAAAAAgIFAAAAAAABohEAAAAAAAOCAQAAAAAAAWIZAAAAAAACAfUAAAAAAAFiCQAAAAAAAUHpAAAAAAAB4gEAAAAAAADiFQAAAAAAAsHxAAAAAAAD4hUAAAAAAANiBQAAAAAAAUIFAAAAAAAB4gkAAAAAAABCBQAAAAAAAsIJAAAAAAAAgf0A=","dtype":"float64","shape":[40]}]}},"id":"faee4718-ff11-4f94-a0dd-228f2e8025d3","type":"ColumnDataSource"},{"attributes":{},"id":"9dee7856-0269-4d68-a091-02a165dbabb0","type":"SaveTool"},{"attributes":{"overlay":{"id":"801498ff-6d04-48f7-afd2-f4844d8cbd0b","type":"BoxAnnotation"}},"id":"f6a79b68-83f1-4fbf-9bfe-5cc87a2934b8","type":"BoxZoomTool"},{"attributes":{},"id":"5347880f-b620-425b-a30d-f63c12aa9a07","type":"ResetTool"},{"attributes":{},"id":"28dba761-f215-4c7f-86ba-84ff68b58f39","type":"BasicTicker"},{"attributes":{},"id":"e80a1ee8-3a01-4e2d-b75f-9c1d91769309","type":"HelpTool"},{"attributes":{},"id":"720121ad-c015-4f2a-baa3-8dfd4bc98be3","type":"PanTool"},{"attributes":{"callback":null,"end":19},"id":"9b5309e1-aff7-4d61-a28e-6bd4f0c18989","type":"Range1d"},{"attributes":{},"id":"1e0bd733-460a-44c1-9777-77175aafd3f9","type":"LinearScale"}],"root_ids":["895f9f7d-2d8d-4f47-b1f1-092a05d73e6f"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"23d2e0a2-4daa-4ef1-92eb-d9aa06c37618","elementid":"b062104b-3025-4033-9d7b-91c8341c3c1f","modelid":"895f9f7d-2d8d-4f47-b1f1-092a05d73e6f"}];
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