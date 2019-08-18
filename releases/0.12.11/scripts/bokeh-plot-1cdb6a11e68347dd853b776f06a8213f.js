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
      };var element = document.getElementById("43add042-903e-4ba4-9315-4168832a76de");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '43add042-903e-4ba4-9315-4168832a76de' but no matching script tag was found. ")
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
                    var docs_json = '{"63847c00-21eb-4ff2-a150-2486c32849dd":{"roots":{"references":[{"attributes":{"formatter":{"id":"5e928050-05e4-497e-8d52-b73976d44c0c","type":"BasicTickFormatter"},"plot":{"id":"74e4b375-6421-47f0-bb15-4bd4c9cba5de","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff3315e8-ca0b-49db-a064-a5df287edbc3","type":"BasicTicker"}},"id":"8855799f-4de4-42da-bdef-c7c543df8ddd","type":"LinearAxis"},{"attributes":{"formatter":{"id":"0de583ac-a8b1-42ca-8636-5ce1c41b9722","type":"BasicTickFormatter"},"plot":{"id":"74e4b375-6421-47f0-bb15-4bd4c9cba5de","subtype":"Figure","type":"Plot"},"ticker":{"id":"05630a06-a216-4386-b727-4ead600bcfd2","type":"BasicTicker"}},"id":"b2e693d9-f7de-488d-bed1-a04e1592ebc7","type":"LinearAxis"},{"attributes":{},"id":"ff3315e8-ca0b-49db-a064-a5df287edbc3","type":"BasicTicker"},{"attributes":{},"id":"05630a06-a216-4386-b727-4ead600bcfd2","type":"BasicTicker"},{"attributes":{"source":{"id":"95dc56a7-a274-4a11-8bd6-bed13aaec91d","type":"ColumnDataSource"}},"id":"13719866-f97f-4314-a01f-faf9b3f0dff5","type":"CDSView"},{"attributes":{},"id":"636be1be-9bc9-483e-9dbc-4bc8d9ad9da9","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"74e4b375-6421-47f0-bb15-4bd4c9cba5de","subtype":"Figure","type":"Plot"},"ticker":{"id":"05630a06-a216-4386-b727-4ead600bcfd2","type":"BasicTicker"}},"id":"9b6aaa42-418d-489e-a1c7-efb50ec056ad","type":"Grid"},{"attributes":{"overlay":{"id":"ee1e6ec8-1eea-423c-82f5-7b165a752934","type":"BoxAnnotation"}},"id":"b00bdf0f-1003-4a18-bac3-e1c7e15624bf","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"95dc56a7-a274-4a11-8bd6-bed13aaec91d","type":"ColumnDataSource"},"glyph":{"id":"04422570-52cf-475e-b617-006fb42bdf89","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7ff07167-df0e-4fcf-b0cd-6fd5634ec57b","type":"Circle"},"selection_glyph":null,"view":{"id":"13719866-f97f-4314-a01f-faf9b3f0dff5","type":"CDSView"}},"id":"44704ce7-f90b-441f-bb51-97a2096ef211","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ff07167-df0e-4fcf-b0cd-6fd5634ec57b","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"f9701ee2-b794-4e8e-982b-575002d7e7c0","type":"PolyAnnotation"}},"id":"4a3194ca-8c69-41c6-b2cf-f8b232062d53","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"8855799f-4de4-42da-bdef-c7c543df8ddd","type":"LinearAxis"}],"left":[{"id":"b2e693d9-f7de-488d-bed1-a04e1592ebc7","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8855799f-4de4-42da-bdef-c7c543df8ddd","type":"LinearAxis"},{"id":"5925193a-179b-46a0-b910-f7a2d653da84","type":"Grid"},{"id":"b2e693d9-f7de-488d-bed1-a04e1592ebc7","type":"LinearAxis"},{"id":"9b6aaa42-418d-489e-a1c7-efb50ec056ad","type":"Grid"},{"id":"a3cfc03b-c14a-4bc6-8b8b-c776e84fa17d","type":"BoxAnnotation"},{"id":"ee1e6ec8-1eea-423c-82f5-7b165a752934","type":"BoxAnnotation"},{"id":"f9701ee2-b794-4e8e-982b-575002d7e7c0","type":"PolyAnnotation"},{"id":"44704ce7-f90b-441f-bb51-97a2096ef211","type":"GlyphRenderer"}],"title":{"id":"7a637af1-a4ba-4f80-97de-fe3d9524c58a","type":"Title"},"toolbar":{"id":"d8234afc-30d5-48a8-a2f8-56d284f4d45f","type":"Toolbar"},"x_range":{"id":"9af2c29f-6ffc-4afa-a9d3-5d6058cf7006","type":"DataRange1d"},"x_scale":{"id":"61bc9e34-3216-45f4-9954-9059ae9890ff","type":"LinearScale"},"y_range":{"id":"ccde2883-df12-41e5-963d-4a7c0c1d1995","type":"DataRange1d"},"y_scale":{"id":"e3c552aa-1b95-4650-85b3-849fbfa79fed","type":"LinearScale"}},"id":"74e4b375-6421-47f0-bb15-4bd4c9cba5de","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"a3cfc03b-c14a-4bc6-8b8b-c776e84fa17d","type":"BoxAnnotation"},"renderers":[{"id":"44704ce7-f90b-441f-bb51-97a2096ef211","type":"GlyphRenderer"}]},"id":"b3a8f56d-31d5-4988-95bb-87a295109db3","type":"BoxSelectTool"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"7a637af1-a4ba-4f80-97de-fe3d9524c58a","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a3cfc03b-c14a-4bc6-8b8b-c776e84fa17d","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"9af2c29f-6ffc-4afa-a9d3-5d6058cf7006","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"04422570-52cf-475e-b617-006fb42bdf89","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b3a8f56d-31d5-4988-95bb-87a295109db3","type":"BoxSelectTool"},{"id":"b00bdf0f-1003-4a18-bac3-e1c7e15624bf","type":"BoxZoomTool"},{"id":"4a3194ca-8c69-41c6-b2cf-f8b232062d53","type":"LassoSelectTool"},{"id":"636be1be-9bc9-483e-9dbc-4bc8d9ad9da9","type":"ResetTool"}]},"id":"d8234afc-30d5-48a8-a2f8-56d284f4d45f","type":"Toolbar"},{"attributes":{},"id":"0de583ac-a8b1-42ca-8636-5ce1c41b9722","type":"BasicTickFormatter"},{"attributes":{},"id":"5e928050-05e4-497e-8d52-b73976d44c0c","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"f9701ee2-b794-4e8e-982b-575002d7e7c0","type":"PolyAnnotation"},{"attributes":{},"id":"61bc9e34-3216-45f4-9954-9059ae9890ff","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"95dc56a7-a274-4a11-8bd6-bed13aaec91d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"ccde2883-df12-41e5-963d-4a7c0c1d1995","type":"DataRange1d"},{"attributes":{},"id":"e3c552aa-1b95-4650-85b3-849fbfa79fed","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ee1e6ec8-1eea-423c-82f5-7b165a752934","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"74e4b375-6421-47f0-bb15-4bd4c9cba5de","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff3315e8-ca0b-49db-a064-a5df287edbc3","type":"BasicTicker"}},"id":"5925193a-179b-46a0-b910-f7a2d653da84","type":"Grid"}],"root_ids":["74e4b375-6421-47f0-bb15-4bd4c9cba5de"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"63847c00-21eb-4ff2-a150-2486c32849dd","elementid":"43add042-903e-4ba4-9315-4168832a76de","modelid":"74e4b375-6421-47f0-bb15-4bd4c9cba5de"}];
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