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
      };var element = document.getElementById("4c57f8a7-f45e-4a2f-88cd-1f62a553a551");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c57f8a7-f45e-4a2f-88cd-1f62a553a551' but no matching script tag was found. ")
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
                    var docs_json = '{"35056508-e219-4eb1-910a-c86b865f8dcc":{"roots":{"references":[{"attributes":{},"id":"882a6209-b6f4-45ff-8f9c-dd773a241792","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"ab8ceb82-f79b-4a09-9a4b-f229803abb8e","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"08638cb2-cf96-4809-b0df-98aab3854256","type":"LinearAxis"}],"left":[{"id":"31a88b67-1d07-4290-ae8c-dd495177e8e3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"08638cb2-cf96-4809-b0df-98aab3854256","type":"LinearAxis"},{"id":"565371db-abd9-4388-bd74-274035b0649b","type":"Grid"},{"id":"31a88b67-1d07-4290-ae8c-dd495177e8e3","type":"LinearAxis"},{"id":"d16bcd56-808b-411d-8c1f-f68f5d21e38a","type":"Grid"},{"id":"d664cc6f-edb7-456e-a1f1-0f23ba74a3a5","type":"BoxAnnotation"},{"id":"d923d45c-3748-41bf-a9e6-443d40627fdb","type":"GlyphRenderer"}],"title":{"id":"0ca78788-8a3e-48b0-a5c9-511a1f962854","type":"Title"},"toolbar":{"id":"4628bb21-eb80-4b60-bece-5bb741476064","type":"Toolbar"},"x_range":{"id":"474e41c8-7874-4fa3-a338-ee19a9bf3e61","type":"DataRange1d"},"x_scale":{"id":"882a6209-b6f4-45ff-8f9c-dd773a241792","type":"LinearScale"},"y_range":{"id":"d17d4f00-8212-43cd-9472-e3fa985b82a5","type":"DataRange1d"},"y_scale":{"id":"fcc5058d-1fdd-4d35-a8c1-4fbe62b597e7","type":"LinearScale"}},"id":"102f19c7-620a-42f7-bdee-9409787921e6","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"6af8118e-5e33-4983-aa0a-c49017904b75","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"102e5cee-be37-4056-84ed-2aef54a0f68d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"102e5cee-be37-4056-84ed-2aef54a0f68d","type":"ColumnDataSource"},"glyph":{"id":"efb64988-d4ae-408d-ae1b-63a85d58f579","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a311448e-57d2-4454-9490-f2d8ba304096","type":"Line"},"selection_glyph":null,"view":{"id":"60110efc-2f64-46c9-9da6-293cc870bbe4","type":"CDSView"}},"id":"d923d45c-3748-41bf-a9e6-443d40627fdb","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"84cf8128-4883-4977-b141-acd39f51947e","type":"BasicTickFormatter"},"plot":{"id":"88722eb0-fa84-431d-94f9-8d0c62eefdd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"8283a7c5-1469-4341-9377-585b4a7d8b3d","type":"BasicTicker"}},"id":"609b4515-2f85-4dd8-b9eb-596866d1127e","type":"LinearAxis"},{"attributes":{},"id":"5868d246-030c-4dc6-b7d6-ce6cf8135694","type":"BasicTickFormatter"},{"attributes":{},"id":"fe30794f-8b0f-4582-a14a-6ab9e9560c30","type":"BasicTicker"},{"attributes":{},"id":"067c4f84-31d1-4b9f-b537-6e616d7b41c6","type":"SaveTool"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"efb64988-d4ae-408d-ae1b-63a85d58f579","type":"Line"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"99d203be-d5a6-483f-ab45-96a5c2ece213","type":"Circle"},{"attributes":{},"id":"51ef5229-c275-4306-8cd0-4b670ecd9aac","type":"BasicTicker"},{"attributes":{},"id":"d0eedaed-b2fe-45ea-9be6-1c05a1adb42d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5868d246-030c-4dc6-b7d6-ce6cf8135694","type":"BasicTickFormatter"},"plot":{"id":"102f19c7-620a-42f7-bdee-9409787921e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0eedaed-b2fe-45ea-9be6-1c05a1adb42d","type":"BasicTicker"}},"id":"31a88b67-1d07-4290-ae8c-dd495177e8e3","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9735e114-cc58-4c9c-981e-07dee62f82bf","type":"PanTool"},{"id":"a958ce07-7ce9-4c20-884e-38568c0339d3","type":"WheelZoomTool"},{"id":"23b16e9e-fcd1-421d-832c-42ba346d52f2","type":"BoxZoomTool"},{"id":"c9af3617-7d00-4ff4-9672-b2a4ddea63f1","type":"SaveTool"},{"id":"6a95bb8d-7385-48d7-833d-814cb6b16eec","type":"ResetTool"},{"id":"8205306d-68d7-4071-875d-aeabb2028356","type":"HelpTool"}]},"id":"4628bb21-eb80-4b60-bece-5bb741476064","type":"Toolbar"},{"attributes":{},"id":"fcc5058d-1fdd-4d35-a8c1-4fbe62b597e7","type":"LinearScale"},{"attributes":{"callback":null},"id":"dd2f3a8b-f479-4738-a959-fc1e3b858f50","type":"DataRange1d"},{"attributes":{"callback":null,"tabs":[{"id":"06bc1cce-1180-49d4-b683-c9e3af84f82d","type":"Panel"},{"id":"a2a13075-627b-4162-9e88-9fd7713cee59","type":"Panel"}]},"id":"f5a20a5a-080f-44c9-b115-2a11512cd4d8","type":"Tabs"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"15658118-a5fd-4712-9f96-e5f56f5ff64d","type":"PanTool"},{"id":"69e0e899-bb87-4f84-9c08-babfd1e424c2","type":"WheelZoomTool"},{"id":"1b4d66dd-3099-4cab-ac0d-1d69a667231f","type":"BoxZoomTool"},{"id":"067c4f84-31d1-4b9f-b537-6e616d7b41c6","type":"SaveTool"},{"id":"cda576c9-a32a-42c1-80ea-dd8c2fab00e4","type":"ResetTool"},{"id":"fcd47aa6-473d-4bf3-9dc9-562883388c15","type":"HelpTool"}]},"id":"857b2133-0616-4814-8052-dcb3c0d6c4e8","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"102f19c7-620a-42f7-bdee-9409787921e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0eedaed-b2fe-45ea-9be6-1c05a1adb42d","type":"BasicTicker"}},"id":"d16bcd56-808b-411d-8c1f-f68f5d21e38a","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"0ca78788-8a3e-48b0-a5c9-511a1f962854","type":"Title"},{"attributes":{"plot":{"id":"102f19c7-620a-42f7-bdee-9409787921e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"51ef5229-c275-4306-8cd0-4b670ecd9aac","type":"BasicTicker"}},"id":"565371db-abd9-4388-bd74-274035b0649b","type":"Grid"},{"attributes":{"formatter":{"id":"d9267c6b-66a5-4188-b36f-cbb4f8c0a45b","type":"BasicTickFormatter"},"plot":{"id":"88722eb0-fa84-431d-94f9-8d0c62eefdd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe30794f-8b0f-4582-a14a-6ab9e9560c30","type":"BasicTicker"}},"id":"72bc701a-33c1-44d7-b891-6009bbea0fd4","type":"LinearAxis"},{"attributes":{},"id":"fcd47aa6-473d-4bf3-9dc9-562883388c15","type":"HelpTool"},{"attributes":{"plot":{"id":"88722eb0-fa84-431d-94f9-8d0c62eefdd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"8283a7c5-1469-4341-9377-585b4a7d8b3d","type":"BasicTicker"}},"id":"f6bf665d-a564-4a52-a7a9-5a340c5bc8d4","type":"Grid"},{"attributes":{},"id":"8205306d-68d7-4071-875d-aeabb2028356","type":"HelpTool"},{"attributes":{"callback":null},"id":"474e41c8-7874-4fa3-a338-ee19a9bf3e61","type":"DataRange1d"},{"attributes":{},"id":"c9af3617-7d00-4ff4-9672-b2a4ddea63f1","type":"SaveTool"},{"attributes":{"below":[{"id":"609b4515-2f85-4dd8-b9eb-596866d1127e","type":"LinearAxis"}],"left":[{"id":"72bc701a-33c1-44d7-b891-6009bbea0fd4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"609b4515-2f85-4dd8-b9eb-596866d1127e","type":"LinearAxis"},{"id":"f6bf665d-a564-4a52-a7a9-5a340c5bc8d4","type":"Grid"},{"id":"72bc701a-33c1-44d7-b891-6009bbea0fd4","type":"LinearAxis"},{"id":"b2efd0b4-cc88-4f4d-8916-1791de35a101","type":"Grid"},{"id":"6e2207b5-916f-4e8b-9e01-c75f1e4b0f7b","type":"BoxAnnotation"},{"id":"60e5332c-478e-4f6a-a585-9097575ba68b","type":"GlyphRenderer"}],"title":{"id":"fc9b4a4c-570c-4175-86a3-113960e2f9ec","type":"Title"},"toolbar":{"id":"857b2133-0616-4814-8052-dcb3c0d6c4e8","type":"Toolbar"},"x_range":{"id":"6af8118e-5e33-4983-aa0a-c49017904b75","type":"DataRange1d"},"x_scale":{"id":"77a3fc24-d72d-455e-81c9-797dd37068d6","type":"LinearScale"},"y_range":{"id":"dd2f3a8b-f479-4738-a959-fc1e3b858f50","type":"DataRange1d"},"y_scale":{"id":"b0746703-d058-47a7-b09d-b7043280509f","type":"LinearScale"}},"id":"88722eb0-fa84-431d-94f9-8d0c62eefdd2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cda576c9-a32a-42c1-80ea-dd8c2fab00e4","type":"ResetTool"},{"attributes":{},"id":"6a95bb8d-7385-48d7-833d-814cb6b16eec","type":"ResetTool"},{"attributes":{},"id":"8283a7c5-1469-4341-9377-585b4a7d8b3d","type":"BasicTicker"},{"attributes":{},"id":"a958ce07-7ce9-4c20-884e-38568c0339d3","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b913b3a-532e-4c14-9415-ffa6184265c0","type":"Circle"},{"attributes":{"source":{"id":"102e5cee-be37-4056-84ed-2aef54a0f68d","type":"ColumnDataSource"}},"id":"60110efc-2f64-46c9-9da6-293cc870bbe4","type":"CDSView"},{"attributes":{"formatter":{"id":"621d2958-ca11-481c-8d5e-6f7fc7eb340b","type":"BasicTickFormatter"},"plot":{"id":"102f19c7-620a-42f7-bdee-9409787921e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"51ef5229-c275-4306-8cd0-4b670ecd9aac","type":"BasicTicker"}},"id":"08638cb2-cf96-4809-b0df-98aab3854256","type":"LinearAxis"},{"attributes":{},"id":"d9267c6b-66a5-4188-b36f-cbb4f8c0a45b","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"ab8ceb82-f79b-4a09-9a4b-f229803abb8e","type":"ColumnDataSource"}},"id":"3ccc481d-fed0-4d3c-9da3-7b32d53d4a9b","type":"CDSView"},{"attributes":{},"id":"b0746703-d058-47a7-b09d-b7043280509f","type":"LinearScale"},{"attributes":{},"id":"621d2958-ca11-481c-8d5e-6f7fc7eb340b","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"a311448e-57d2-4454-9490-f2d8ba304096","type":"Line"},{"attributes":{"callback":null},"id":"d17d4f00-8212-43cd-9472-e3fa985b82a5","type":"DataRange1d"},{"attributes":{},"id":"9735e114-cc58-4c9c-981e-07dee62f82bf","type":"PanTool"},{"attributes":{},"id":"77a3fc24-d72d-455e-81c9-797dd37068d6","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d664cc6f-edb7-456e-a1f1-0f23ba74a3a5","type":"BoxAnnotation"},{"attributes":{},"id":"15658118-a5fd-4712-9f96-e5f56f5ff64d","type":"PanTool"},{"attributes":{"child":{"id":"88722eb0-fa84-431d-94f9-8d0c62eefdd2","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"06bc1cce-1180-49d4-b683-c9e3af84f82d","type":"Panel"},{"attributes":{},"id":"84cf8128-4883-4977-b141-acd39f51947e","type":"BasicTickFormatter"},{"attributes":{},"id":"69e0e899-bb87-4f84-9c08-babfd1e424c2","type":"WheelZoomTool"},{"attributes":{"child":{"id":"102f19c7-620a-42f7-bdee-9409787921e6","subtype":"Figure","type":"Plot"},"title":"line"},"id":"a2a13075-627b-4162-9e88-9fd7713cee59","type":"Panel"},{"attributes":{"overlay":{"id":"d664cc6f-edb7-456e-a1f1-0f23ba74a3a5","type":"BoxAnnotation"}},"id":"23b16e9e-fcd1-421d-832c-42ba346d52f2","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"fc9b4a4c-570c-4175-86a3-113960e2f9ec","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e2207b5-916f-4e8b-9e01-c75f1e4b0f7b","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"88722eb0-fa84-431d-94f9-8d0c62eefdd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe30794f-8b0f-4582-a14a-6ab9e9560c30","type":"BasicTicker"}},"id":"b2efd0b4-cc88-4f4d-8916-1791de35a101","type":"Grid"},{"attributes":{"overlay":{"id":"6e2207b5-916f-4e8b-9e01-c75f1e4b0f7b","type":"BoxAnnotation"}},"id":"1b4d66dd-3099-4cab-ac0d-1d69a667231f","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"ab8ceb82-f79b-4a09-9a4b-f229803abb8e","type":"ColumnDataSource"},"glyph":{"id":"99d203be-d5a6-483f-ab45-96a5c2ece213","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8b913b3a-532e-4c14-9415-ffa6184265c0","type":"Circle"},"selection_glyph":null,"view":{"id":"3ccc481d-fed0-4d3c-9da3-7b32d53d4a9b","type":"CDSView"}},"id":"60e5332c-478e-4f6a-a585-9097575ba68b","type":"GlyphRenderer"}],"root_ids":["f5a20a5a-080f-44c9-b115-2a11512cd4d8"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"35056508-e219-4eb1-910a-c86b865f8dcc","elementid":"4c57f8a7-f45e-4a2f-88cd-1f62a553a551","modelid":"f5a20a5a-080f-44c9-b115-2a11512cd4d8"}];
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