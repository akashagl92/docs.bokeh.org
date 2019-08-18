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
      };var element = document.getElementById("10bc7ac7-d91e-48c9-afd0-3dd88235e1c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '10bc7ac7-d91e-48c9-afd0-3dd88235e1c3' but no matching script tag was found. ")
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
                    var docs_json = '{"8966ad2f-ef73-4405-bb2b-04979b63bd0d":{"roots":{"references":[{"attributes":{},"id":"baa316bf-42c1-4503-9370-e4d30a1c5607","type":"LinearScale"},{"attributes":{"formatter":{"id":"60dc2ed5-d5e1-4f52-bb75-eb149155221d","type":"BasicTickFormatter"},"plot":{"id":"6c494592-2d18-4e6a-a461-66a6b2672932","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b2d287d-406e-482b-ba20-b502d647bc15","type":"BasicTicker"}},"id":"21f539a4-3663-4461-bb56-eebff2781215","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D+yzYPRkeXxP7ihgYdrgfM/rb0yquzM9D/245G2v8L1P87bFRfwXvY/2iiqbvqe9j/kKcny1oH2P2p9E6r9B/Y/t9rofWQz9T/V4vYmdwf0P338ARYJifI/RdfykkG+8D9ETRXIBF3tPyugTMuSxOg/JsOhHxvG4z8XRefmX+zcP4TfmO5l1dE/2IAW3tnTuT9QVAYbRxi0v26sY4ZobNC/kDyhvhiP278fJw0IIiDjv8rnndrvKei/4klI9jTQ7L9i6ms85X/wvyB3ITG5U/K/nEtETQ/c879kyJx6lxL1v3a2nZlS8vW/jCxGFqd39r9Ikzy8b6D2v7IbDo0EbPa/VCYsdD3b9b+XNIXNbvD0vyX2CM1fr/O/Ewqe7jod8r/hQKSueEDwv7KoVMWJQey/OkhCQL6N57//x2pm7XjivwmD/egKMNq/WFreULgEzr/gjtyf0basv8DQmYTCjb8/YDFTHT090z9zKk7fyUfePwQ64frNauQ/Br4PG51d6T/UmpIn8OftPyz+X62J+/A/JAqwLSe98j/wrAGOlDH0P9+qQLrTUvU/YiQQQD0c9j8qs4V6k4r2Pw41lOsPnPY/TXYpjGpQ9j9uO9/02qj1P8SNeVoTqPQ/wTrZcjVS8z/dcSFwwazxPxnyVbD+fO8/vXE0K8Ye6z+6a09r11DmP/7dFbP8JuE/QJmw0PVs1z8YNwvg51bIP4A3qsMi+oY/tJyl3I19xb9gjLYfHAnWv+4O12hWfOC/dgkSnTaw5b/Eiyd/wIrqv1M5qN/19+6/bg/Nc81y8b9c/veZwCHzv4mZSz7lgfS/nqNH2pCN9b9BMd7bdED2vxjtFmOwl/a/lMBYHdyR9r+wHoMNEC/2vww2BinjcPW/M3KRy2Ra9L+mR1EcEPDyv8K/p5i5N/G/fKrPIO5w7r87P/7sBPXpv0iCivwvDuW/bUUVRECh3788RM3h1qPUv0S1wErRosK/wBtiTTs7oT9AtNpTsC7LP531ygVNz9g/audXAYjQ4T/buikNCPDmP2xZBmcMses//P//////7z8=","dtype":"float64","shape":[100]}}},"id":"4aa019f5-5eb2-4bb4-918e-69ec933f247a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3e9f6837-d951-47e6-98f8-25f0ff6790fe","type":"ColumnDataSource"},"glyph":{"id":"446b4e48-3598-4206-aaa3-e7ba91a21c82","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5e8eb045-ccd7-43d9-a55b-b89ce0725c68","type":"Triangle"},"selection_glyph":null,"view":{"id":"efb6c255-f35f-418d-b7d1-c0ef152fe87c","type":"CDSView"}},"id":"0b5647d6-873d-4033-a03f-6ed5710b3774","type":"GlyphRenderer"},{"attributes":{},"id":"5a597e71-5b0e-47f2-b0e3-a9d303bc3051","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6c494592-2d18-4e6a-a461-66a6b2672932","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b2d287d-406e-482b-ba20-b502d647bc15","type":"BasicTicker"}},"id":"2e191f43-fe61-4188-baa5-417c0385596a","type":"Grid"},{"attributes":{"source":{"id":"5c8e1c75-20cd-444d-9602-b38fe068a4d9","type":"ColumnDataSource"}},"id":"8616d958-a5f8-4974-9c64-07771d520f98","type":"CDSView"},{"attributes":{},"id":"6e169d7e-da74-4080-b226-379abeffdfb9","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e8eb045-ccd7-43d9-a55b-b89ce0725c68","type":"Triangle"},{"attributes":{},"id":"59db9c8a-6f41-4206-9e1f-3e65b725abb2","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"bb3608c7-05a6-4222-8cb5-792ad1b3fc8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d89aad4-2c0a-4e26-b2eb-d4c7679d9f53","type":"BasicTicker"}},"id":"85302cfe-04b8-423b-9565-412c926bdb6a","type":"Grid"},{"attributes":{"overlay":{"id":"ad9af8fc-8db5-40cb-8d59-724136e8616d","type":"BoxAnnotation"}},"id":"d2410f5d-3de5-4037-8bab-5432bc85c02b","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f74bda73-ebd2-4fd8-ba7d-f69bc835084d","type":"Square"},{"attributes":{"formatter":{"id":"f00ca8df-3efb-45bc-a8f7-bcbffefba648","type":"BasicTickFormatter"},"plot":{"id":"6c494592-2d18-4e6a-a461-66a6b2672932","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b4e1fca-bb5a-4c08-af40-6bbb5139d062","type":"BasicTicker"}},"id":"8519e496-f066-4d84-b344-b5b8fafd5896","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D9o+gYFGL7vPyN/Fo5v+e4/XLHeqjC17T9foQT4kvbrP1YykSHGxOk/tDkVSdQo5z9AE3HJfC3kP1wsoPEH3+A/thLH2SiW2j9bQ2NRvgDTP4xzC34aOsY/cyCwKKhcqD8MyeikuUm0v0/eq9oaN8q/PSGBd67u1L+LyZhelmvcv8/m3JG2ueG/hlh3f5705L9dUsfUNNnnv10cd/2OW+q/wfLvCVdx7L8bLVJC9hHuv0PyRoe4Nu+/XjTx7ufa778HB0As4PvvvwQ9tXAZme+/V1DNmyq07r/ZTwivwlDtv4lZi6GZdOu/JeDa0Vgn6b/aPrV2e3Lmv8y0DJEnYeO/+f//////3783i/Tn4LnYv4yAwi7oDdG/3kQPZF83wr9U+ijPKj+QvxHsuGvkX7w/k1rgSlktzj+GU4hOOdfWP1m1P3WwOd4/AasNgtOP4j+XUJVeWbblPzdQz6Jvg+g/uvBkh4zr6j99NRQyxuTsP/FJcov7Zu4/Juk3u/Vr7z+VSynBge/vP5RLKcGB7+8/Jek3u/Vr7z/vSXKL+2buP381FDLG5Ow/uPBkh4zr6j86UM+ib4PoP5RQlV5ZtuU/BasNgtOP4j9TtT91sDneP45TiE4519Y/hVrgSlktzj807Lhr5F+8P8f6KM8qP5C/zUQPZF83wr+TgMIu6A3Rvy+L9Ofgudi/BwAAAAAA4L/PtAyRJ2Hjv9k+tXZ7cua/I+Da0Vgn6b+NWYuhmXTrv9pPCK/CUO2/V1DNmyq07r8DPbVwGZnvvwgHQCzg+++/XjTx7ufa779E8kaHuDbvvx4tUkL2Ee6/wPLvCVdx7L9dHHf9jlvqv2BSx9Q02ee/gVh3f5705L/M5tyRtrnhv4zJmF6Wa9y/RSGBd67u1L8x3qvaGjfKv/DI6KS5SbS/bSCwKKhcqD9zcwt+GjrGP2ZDY1G+ANM/uRLH2SiW2j9aLKDxB9/gPzsTccl8LeQ/uDkVSdQo5z9WMpEhxsTpP16hBPiS9us/X7HeqjC17T8kfxaOb/nuP2j6BgUYvu8/AAAAAAAA8D8=","dtype":"float64","shape":[100]}}},"id":"3e9f6837-d951-47e6-98f8-25f0ff6790fe","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21a2fbd0-9367-4586-8939-579e4d998e26","type":"Circle"},{"attributes":{},"id":"30a482f5-bd9f-4de6-be17-c9dc1dfb68e4","type":"ResetTool"},{"attributes":{"below":[{"id":"8519e496-f066-4d84-b344-b5b8fafd5896","type":"LinearAxis"}],"left":[{"id":"21f539a4-3663-4461-bb56-eebff2781215","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8519e496-f066-4d84-b344-b5b8fafd5896","type":"LinearAxis"},{"id":"f708f1bc-f403-458c-9a77-531da110d203","type":"Grid"},{"id":"21f539a4-3663-4461-bb56-eebff2781215","type":"LinearAxis"},{"id":"2e191f43-fe61-4188-baa5-417c0385596a","type":"Grid"},{"id":"ad9af8fc-8db5-40cb-8d59-724136e8616d","type":"BoxAnnotation"},{"id":"bb3c580c-07e1-4592-828f-9581e8bf4fff","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"46d3f761-c270-4c02-b324-362d322dc788","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"09ac056e-8085-4912-b936-489c195da3eb","type":"DataRange1d"},"x_scale":{"id":"ffa43f7d-dedc-44bc-b1c1-856a12a224ba","type":"LinearScale"},"y_range":{"id":"d5a262d6-3b2e-464f-b8f5-8959379f4cb0","type":"DataRange1d"},"y_scale":{"id":"a3c812a0-1324-465c-9484-1d784ddea59f","type":"LinearScale"}},"id":"6c494592-2d18-4e6a-a461-66a6b2672932","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8bc2de37-7da7-4ded-9d81-0be95e1e1dd9","type":"SaveTool"},{"attributes":{"below":[{"id":"010c1351-dac7-4a9d-a05a-8811705feb7e","type":"LinearAxis"}],"left":[{"id":"a1039842-f63b-4302-8452-a9431bbc02df","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"010c1351-dac7-4a9d-a05a-8811705feb7e","type":"LinearAxis"},{"id":"53c6f334-f25b-4fc6-811e-bb299fd35e95","type":"Grid"},{"id":"a1039842-f63b-4302-8452-a9431bbc02df","type":"LinearAxis"},{"id":"85302cfe-04b8-423b-9565-412c926bdb6a","type":"Grid"},{"id":"862f3ed1-a116-49ee-8162-6dd0c2911766","type":"BoxAnnotation"},{"id":"0b5647d6-873d-4033-a03f-6ed5710b3774","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6f09a5fd-8417-452d-9e6c-bb4878dde1fa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"09ac056e-8085-4912-b936-489c195da3eb","type":"DataRange1d"},"x_scale":{"id":"6e2f57e8-52cd-4808-a049-b8d6297c6aca","type":"LinearScale"},"y_range":{"id":"70956cbc-b2c7-42df-a856-a10737bdea0b","type":"DataRange1d"},"y_scale":{"id":"209efda9-30e2-49d0-830a-ce254dc75b40","type":"LinearScale"}},"id":"bb3608c7-05a6-4222-8cb5-792ad1b3fc8d","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ad4e68d5-38f2-4f1b-8558-05b4e6eb2cb7","type":"PanTool"},{"id":"bde9fd47-0757-4cbf-91dd-40f2a04c17e0","type":"WheelZoomTool"},{"id":"ac5143b1-7871-40bf-aefa-2f3895cd0b66","type":"BoxZoomTool"},{"id":"8bc2de37-7da7-4ded-9d81-0be95e1e1dd9","type":"SaveTool"},{"id":"30a482f5-bd9f-4de6-be17-c9dc1dfb68e4","type":"ResetTool"},{"id":"d9841caf-353c-4559-b94f-117d974236e2","type":"HelpTool"}]},"id":"b01cb3d8-589d-4293-bd5c-bbd3e6412486","type":"Toolbar"},{"attributes":{"plot":{"id":"6c494592-2d18-4e6a-a461-66a6b2672932","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b4e1fca-bb5a-4c08-af40-6bbb5139d062","type":"BasicTicker"}},"id":"f708f1bc-f403-458c-9a77-531da110d203","type":"Grid"},{"attributes":{},"id":"356384c2-f24c-4af0-b115-240b489191c4","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"9fbfd294-815c-4748-a34c-1a0166ef5b36","type":"LinearAxis"}],"left":[{"id":"fad42c5e-c2d9-497e-bbd2-99021dc20029","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9fbfd294-815c-4748-a34c-1a0166ef5b36","type":"LinearAxis"},{"id":"bc7ce2b4-535f-43ed-aaff-525a418ebdcc","type":"Grid"},{"id":"fad42c5e-c2d9-497e-bbd2-99021dc20029","type":"LinearAxis"},{"id":"da20e0d7-9148-4eb9-8dae-d0288ac2ce89","type":"Grid"},{"id":"78d33b08-0101-4fd9-b312-6c3665160f13","type":"BoxAnnotation"},{"id":"19c5dcfe-11eb-4d7f-8c43-6dadd426847a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b01cb3d8-589d-4293-bd5c-bbd3e6412486","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"09ac056e-8085-4912-b936-489c195da3eb","type":"DataRange1d"},"x_scale":{"id":"baa316bf-42c1-4503-9370-e4d30a1c5607","type":"LinearScale"},"y_range":{"id":"70956cbc-b2c7-42df-a856-a10737bdea0b","type":"DataRange1d"},"y_scale":{"id":"59db9c8a-6f41-4206-9e1f-3e65b725abb2","type":"LinearScale"}},"id":"ac5b5932-1e86-4290-9db8-2eb685888254","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"829e4cbc-3523-4af8-87d3-97a8374b35ba","type":"BasicTickFormatter"},{"attributes":{},"id":"8b2d287d-406e-482b-ba20-b502d647bc15","type":"BasicTicker"},{"attributes":{},"id":"6e2f57e8-52cd-4808-a049-b8d6297c6aca","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"862f3ed1-a116-49ee-8162-6dd0c2911766","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"446b4e48-3598-4206-aaa3-e7ba91a21c82","type":"Triangle"},{"attributes":{"overlay":{"id":"78d33b08-0101-4fd9-b312-6c3665160f13","type":"BoxAnnotation"}},"id":"ac5143b1-7871-40bf-aefa-2f3895cd0b66","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"2aa70e7c-df3e-403b-bfa5-9d192677871e","type":"Row"}]},"id":"e9186420-b991-457c-b4d0-458aea876858","type":"Column"},{"attributes":{"formatter":{"id":"4a09b62b-f9fe-4395-bf76-5bf7659809d6","type":"BasicTickFormatter"},"plot":{"id":"ac5b5932-1e86-4290-9db8-2eb685888254","subtype":"Figure","type":"Plot"},"ticker":{"id":"27aecb15-1236-4c30-a93a-e0043f97ed29","type":"BasicTicker"}},"id":"fad42c5e-c2d9-497e-bbd2-99021dc20029","type":"LinearAxis"},{"attributes":{"children":[{"id":"ac5b5932-1e86-4290-9db8-2eb685888254","subtype":"Figure","type":"Plot"},{"id":"bb3608c7-05a6-4222-8cb5-792ad1b3fc8d","subtype":"Figure","type":"Plot"},{"id":"6c494592-2d18-4e6a-a461-66a6b2672932","subtype":"Figure","type":"Plot"}]},"id":"2aa70e7c-df3e-403b-bfa5-9d192677871e","type":"Row"},{"attributes":{"data_source":{"id":"4aa019f5-5eb2-4bb4-918e-69ec933f247a","type":"ColumnDataSource"},"glyph":{"id":"2111797b-2361-4b0c-9e0d-27c22e498298","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f74bda73-ebd2-4fd8-ba7d-f69bc835084d","type":"Square"},"selection_glyph":null,"view":{"id":"854c75a8-744e-4280-8298-c5029377864b","type":"CDSView"}},"id":"bb3c580c-07e1-4592-828f-9581e8bf4fff","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bb3608c7-05a6-4222-8cb5-792ad1b3fc8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a597e71-5b0e-47f2-b0e3-a9d303bc3051","type":"BasicTicker"}},"id":"53c6f334-f25b-4fc6-811e-bb299fd35e95","type":"Grid"},{"attributes":{},"id":"9515784a-9419-460d-b2b7-f539d76b3fb4","type":"SaveTool"},{"attributes":{"callback":null},"id":"09ac056e-8085-4912-b936-489c195da3eb","type":"DataRange1d"},{"attributes":{},"id":"4a09b62b-f9fe-4395-bf76-5bf7659809d6","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"ac5b5932-1e86-4290-9db8-2eb685888254","subtype":"Figure","type":"Plot"},"ticker":{"id":"27aecb15-1236-4c30-a93a-e0043f97ed29","type":"BasicTicker"}},"id":"da20e0d7-9148-4eb9-8dae-d0288ac2ce89","type":"Grid"},{"attributes":{"callback":null},"id":"d5a262d6-3b2e-464f-b8f5-8959379f4cb0","type":"DataRange1d"},{"attributes":{},"id":"9228fc13-4b77-47d9-9d82-89e208e3b584","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"3e9f6837-d951-47e6-98f8-25f0ff6790fe","type":"ColumnDataSource"}},"id":"efb6c255-f35f-418d-b7d1-c0ef152fe87c","type":"CDSView"},{"attributes":{},"id":"f00ca8df-3efb-45bc-a8f7-bcbffefba648","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"862f3ed1-a116-49ee-8162-6dd0c2911766","type":"BoxAnnotation"}},"id":"e6b46760-46a4-4875-b492-8d62bae3108e","type":"BoxZoomTool"},{"attributes":{},"id":"06137117-a86c-48da-b18d-526314153d41","type":"WheelZoomTool"},{"attributes":{},"id":"4d89aad4-2c0a-4e26-b2eb-d4c7679d9f53","type":"BasicTicker"},{"attributes":{},"id":"a3c812a0-1324-465c-9484-1d784ddea59f","type":"LinearScale"},{"attributes":{"callback":null},"id":"70956cbc-b2c7-42df-a856-a10737bdea0b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9228fc13-4b77-47d9-9d82-89e208e3b584","type":"BasicTickFormatter"},"plot":{"id":"ac5b5932-1e86-4290-9db8-2eb685888254","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee7456ba-9543-4670-b3da-842f530f1a6e","type":"BasicTicker"}},"id":"9fbfd294-815c-4748-a34c-1a0166ef5b36","type":"LinearAxis"},{"attributes":{},"id":"d9841caf-353c-4559-b94f-117d974236e2","type":"HelpTool"},{"attributes":{},"id":"f7a6bcca-adab-4885-83c4-0628e8a03802","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ad9af8fc-8db5-40cb-8d59-724136e8616d","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"5c8e1c75-20cd-444d-9602-b38fe068a4d9","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"ce009096-c181-4198-b913-992801601866","type":"BasicTickFormatter"},"plot":{"id":"bb3608c7-05a6-4222-8cb5-792ad1b3fc8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d89aad4-2c0a-4e26-b2eb-d4c7679d9f53","type":"BasicTicker"}},"id":"a1039842-f63b-4302-8452-a9431bbc02df","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb151c64-c44a-493e-80b4-1cbbd5de9935","type":"Circle"},{"attributes":{},"id":"ad4e68d5-38f2-4f1b-8558-05b4e6eb2cb7","type":"PanTool"},{"attributes":{},"id":"5c8789be-4a7c-4a81-9f5b-5aa138877e0e","type":"HelpTool"},{"attributes":{},"id":"c696443b-2c02-4901-9e6e-5d9371cc729c","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2111797b-2361-4b0c-9e0d-27c22e498298","type":"Square"},{"attributes":{},"id":"ffa43f7d-dedc-44bc-b1c1-856a12a224ba","type":"LinearScale"},{"attributes":{"plot":{"id":"ac5b5932-1e86-4290-9db8-2eb685888254","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee7456ba-9543-4670-b3da-842f530f1a6e","type":"BasicTicker"}},"id":"bc7ce2b4-535f-43ed-aaff-525a418ebdcc","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f732133e-2129-4dfb-9318-8720c24a0a7d","type":"PanTool"},{"id":"356384c2-f24c-4af0-b115-240b489191c4","type":"WheelZoomTool"},{"id":"e6b46760-46a4-4875-b492-8d62bae3108e","type":"BoxZoomTool"},{"id":"9515784a-9419-460d-b2b7-f539d76b3fb4","type":"SaveTool"},{"id":"6e169d7e-da74-4080-b226-379abeffdfb9","type":"ResetTool"},{"id":"5c8789be-4a7c-4a81-9f5b-5aa138877e0e","type":"HelpTool"}]},"id":"6f09a5fd-8417-452d-9e6c-bb4878dde1fa","type":"Toolbar"},{"attributes":{},"id":"5eac8008-7a1c-40c7-9491-566a9a4a9f58","type":"ResetTool"},{"attributes":{},"id":"8d0434d9-c303-4ba4-9cee-a15731567729","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c696443b-2c02-4901-9e6e-5d9371cc729c","type":"PanTool"},{"id":"06137117-a86c-48da-b18d-526314153d41","type":"WheelZoomTool"},{"id":"d2410f5d-3de5-4037-8bab-5432bc85c02b","type":"BoxZoomTool"},{"id":"8d0434d9-c303-4ba4-9cee-a15731567729","type":"SaveTool"},{"id":"5eac8008-7a1c-40c7-9491-566a9a4a9f58","type":"ResetTool"},{"id":"f7a6bcca-adab-4885-83c4-0628e8a03802","type":"HelpTool"}]},"id":"46d3f761-c270-4c02-b324-362d322dc788","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78d33b08-0101-4fd9-b312-6c3665160f13","type":"BoxAnnotation"},{"attributes":{},"id":"209efda9-30e2-49d0-830a-ce254dc75b40","type":"LinearScale"},{"attributes":{"data_source":{"id":"5c8e1c75-20cd-444d-9602-b38fe068a4d9","type":"ColumnDataSource"},"glyph":{"id":"21a2fbd0-9367-4586-8939-579e4d998e26","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb151c64-c44a-493e-80b4-1cbbd5de9935","type":"Circle"},"selection_glyph":null,"view":{"id":"8616d958-a5f8-4974-9c64-07771d520f98","type":"CDSView"}},"id":"19c5dcfe-11eb-4d7f-8c43-6dadd426847a","type":"GlyphRenderer"},{"attributes":{},"id":"ee7456ba-9543-4670-b3da-842f530f1a6e","type":"BasicTicker"},{"attributes":{},"id":"60dc2ed5-d5e1-4f52-bb75-eb149155221d","type":"BasicTickFormatter"},{"attributes":{},"id":"ce009096-c181-4198-b913-992801601866","type":"BasicTickFormatter"},{"attributes":{},"id":"27aecb15-1236-4c30-a93a-e0043f97ed29","type":"BasicTicker"},{"attributes":{},"id":"f732133e-2129-4dfb-9318-8720c24a0a7d","type":"PanTool"},{"attributes":{},"id":"bde9fd47-0757-4cbf-91dd-40f2a04c17e0","type":"WheelZoomTool"},{"attributes":{},"id":"9b4e1fca-bb5a-4c08-af40-6bbb5139d062","type":"BasicTicker"},{"attributes":{"formatter":{"id":"829e4cbc-3523-4af8-87d3-97a8374b35ba","type":"BasicTickFormatter"},"plot":{"id":"bb3608c7-05a6-4222-8cb5-792ad1b3fc8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a597e71-5b0e-47f2-b0e3-a9d303bc3051","type":"BasicTicker"}},"id":"010c1351-dac7-4a9d-a05a-8811705feb7e","type":"LinearAxis"},{"attributes":{"source":{"id":"4aa019f5-5eb2-4bb4-918e-69ec933f247a","type":"ColumnDataSource"}},"id":"854c75a8-744e-4280-8298-c5029377864b","type":"CDSView"}],"root_ids":["e9186420-b991-457c-b4d0-458aea876858"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"8966ad2f-ef73-4405-bb2b-04979b63bd0d","elementid":"10bc7ac7-d91e-48c9-afd0-3dd88235e1c3","modelid":"e9186420-b991-457c-b4d0-458aea876858"}];
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