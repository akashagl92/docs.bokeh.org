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
      };var element = document.getElementById("c5125cb9-bc3f-4a76-9b24-99df5511e291");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5125cb9-bc3f-4a76-9b24-99df5511e291' but no matching script tag was found. ")
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
                    var docs_json = '{"48fb16a6-da99-4997-a1fa-d4db1000a0e2":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGB"]}},"id":"292d1fd6-8256-4045-9e48-ab55b8b3bd1e","type":"ColumnDataSource"},{"attributes":{"source":{"id":"bb2c7bd1-471a-4467-aa14-350fa529e94a","type":"ColumnDataSource"}},"id":"42d8a484-0e1e-4e79-94e3-78c74c0ccade","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"789d92c4-48f9-40a7-9bb7-ffde0b6a171e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"632bf374-b84a-42fd-97b0-ad6ef864d34e","type":"Circle"},{"attributes":{"data_source":{"id":"574f676e-63ce-4e57-a0f2-8d7fcea02c9c","type":"ColumnDataSource"},"glyph":{"id":"4bc94006-8db7-4fd9-bcb4-9f13aea07ca8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62cf5e4c-5869-4e58-9aec-001d828b262e","type":"Circle"},"selection_glyph":null,"view":{"id":"cc87cf80-00c1-45a9-b1f7-cbca2906dc87","type":"CDSView"}},"id":"835a44c6-320d-4285-bd97-94c877cb8196","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5812ac66-18ca-49fc-b033-5e264e176194","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1905733-e2d6-4fa6-901a-61e62891939a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b31f6a2f-290c-4e3f-8b31-5200e1d37b7d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c0f07c3-8101-4f6b-9615-b2402cc09155","type":"Circle"},{"attributes":{},"id":"a27090e3-050a-41eb-a5b3-0c0ba04fe1d9","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ded4a789-10d8-424d-8e42-9da84724da99","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"43fd1393-bee3-4ff7-b153-c8bb93bbb4f6","type":"Circle"},{"attributes":{"source":{"id":"8bd8e76b-fe2c-4c3e-bba0-169b23497c0b","type":"ColumnDataSource"}},"id":"18edef64-eb9a-4fae-b96d-7a25368a5525","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b679c2e-e26b-4aad-b181-2a0b1159f8a9","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGBA"]}},"id":"2d948e7f-8139-44ac-8bb6-90a48fff0f3f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6333b7a-45f3-4a6b-bf7f-9286e1fdbee2","type":"Circle"},{"attributes":{"source":{"id":"42d38527-8d14-4b7e-9c84-98e096255c6a","type":"ColumnDataSource"}},"id":"f569e646-f4e8-47bb-9245-2739c0598bc0","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ea8dc66-d5d2-4f97-86fb-58c58b1aad20","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8be7afc5-086b-4805-8710-2cf953b72b37","type":"Circle"},{"attributes":{},"id":"2b577ae6-5285-48cf-93d6-1c7b08ca2871","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f7d59965-43fa-491a-9da7-198dea468737","type":"BoxAnnotation"},{"attributes":{"source":{"id":"ee2ce68e-3f83-44c4-bd88-26202f14513e","type":"ColumnDataSource"}},"id":"b80d186b-989c-41db-b989-b1902d9531b3","type":"CDSView"},{"attributes":{"data_source":{"id":"42d38527-8d14-4b7e-9c84-98e096255c6a","type":"ColumnDataSource"},"glyph":{"id":"dd278aff-0f87-475c-8557-ab699faf5b5e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5812ac66-18ca-49fc-b033-5e264e176194","type":"Circle"},"selection_glyph":null,"view":{"id":"f569e646-f4e8-47bb-9245-2739c0598bc0","type":"CDSView"}},"id":"95795a2a-5f72-4afa-a052-d979f2686a0e","type":"GlyphRenderer"},{"attributes":{},"id":"f637f532-1160-416e-b9ee-db62f8ba2c31","type":"WheelZoomTool"},{"attributes":{"source":{"id":"5040d628-57b4-4478-b47f-0b456aa2d0be","type":"ColumnDataSource"}},"id":"cf41fb1e-551c-4da4-9186-6a28a621c2fe","type":"CDSView"},{"attributes":{"overlay":{"id":"f7d59965-43fa-491a-9da7-198dea468737","type":"BoxAnnotation"}},"id":"01ce8e38-17a0-4036-8e45-129bcfbb38de","type":"BoxZoomTool"},{"attributes":{},"id":"2932a764-9f72-4d33-99c5-49b5e2374f9f","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd278aff-0f87-475c-8557-ab699faf5b5e","type":"Circle"},{"attributes":{},"id":"a316b518-8bbf-4f33-9347-b73454bf846e","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGBA"]}},"id":"76054ccc-8b96-4b32-9e50-9a9607337ade","type":"ColumnDataSource"},{"attributes":{},"id":"0ddb1eb3-8522-45d0-b641-1e9e7b3efb25","type":"HelpTool"},{"attributes":{},"id":"3d59b256-4089-4dd0-8ba2-31f34ef20a84","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"76054ccc-8b96-4b32-9e50-9a9607337ade","type":"ColumnDataSource"}},"id":"d50bd276-35c9-4fbb-9c5d-ac3d038265e3","type":"CDSView"},{"attributes":{"source":{"id":"965d788a-35fe-4255-a37d-e88dca73de92","type":"ColumnDataSource"}},"id":"769c5767-feee-44ca-96da-d096069cea59","type":"CDSView"},{"attributes":{"data_source":{"id":"76054ccc-8b96-4b32-9e50-9a9607337ade","type":"ColumnDataSource"},"glyph":{"id":"1ea8dc66-d5d2-4f97-86fb-58c58b1aad20","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9c0f07c3-8101-4f6b-9615-b2402cc09155","type":"Circle"},"selection_glyph":null,"view":{"id":"d50bd276-35c9-4fbb-9c5d-ac3d038265e3","type":"CDSView"}},"id":"1ef379ae-ffbe-40f1-9f53-09dac4d0b650","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"383d74e6-4842-4652-bf45-210cb06afaa0","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b683df3-8af3-4ea8-ba20-089ca4e84de9","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha"]}},"id":"4bb14a29-a388-4b42-ad43-b96046978f49","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4bb14a29-a388-4b42-ad43-b96046978f49","type":"ColumnDataSource"}},"id":"49246262-b4c2-4781-b093-571772d69cee","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGB"]}},"id":"42d38527-8d14-4b7e-9c84-98e096255c6a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4bb14a29-a388-4b42-ad43-b96046978f49","type":"ColumnDataSource"},"glyph":{"id":"ba4826de-5f04-42ad-a463-f61bc65f9c08","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9bec236b-7829-493d-8874-49a50766d61d","type":"Circle"},"selection_glyph":null,"view":{"id":"49246262-b4c2-4781-b093-571772d69cee","type":"CDSView"}},"id":"fbc66514-9990-4a71-9b10-5d03d97fdf86","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"466155fe-bfa1-4238-9bcc-df3fd1f8d034","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d6ae84a-d0ef-4cf3-b8c6-69c8d24ce396","type":"Circle"},{"attributes":{"data_source":{"id":"bb2c7bd1-471a-4467-aa14-350fa529e94a","type":"ColumnDataSource"},"glyph":{"id":"789d92c4-48f9-40a7-9bb7-ffde0b6a171e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ec7b0b22-0c1b-4f9b-9d2f-792a94e54424","type":"Circle"},"selection_glyph":null,"view":{"id":"42d8a484-0e1e-4e79-94e3-78c74c0ccade","type":"CDSView"}},"id":"c2b2f499-8be0-4836-bd0d-fc4281cfd024","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9bec236b-7829-493d-8874-49a50766d61d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce194e42-27ba-4fd2-952a-6a48bd90444e","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGB"]}},"id":"8bd8e76b-fe2c-4c3e-bba0-169b23497c0b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec7b0b22-0c1b-4f9b-9d2f-792a94e54424","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2b577ae6-5285-48cf-93d6-1c7b08ca2871","type":"PanTool"},{"id":"f637f532-1160-416e-b9ee-db62f8ba2c31","type":"WheelZoomTool"},{"id":"01ce8e38-17a0-4036-8e45-129bcfbb38de","type":"BoxZoomTool"},{"id":"2932a764-9f72-4d33-99c5-49b5e2374f9f","type":"SaveTool"},{"id":"a316b518-8bbf-4f33-9347-b73454bf846e","type":"ResetTool"},{"id":"0ddb1eb3-8522-45d0-b641-1e9e7b3efb25","type":"HelpTool"}]},"id":"980b23b6-b773-4531-88d9-e5364b4a16b9","type":"Toolbar"},{"attributes":{"data_source":{"id":"b166aa25-9b2b-4e22-939d-553802fbb2c1","type":"ColumnDataSource"},"glyph":{"id":"7b679c2e-e26b-4aad-b181-2a0b1159f8a9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a739356c-843f-4929-9087-a1474bc8c3f6","type":"Circle"},"selection_glyph":null,"view":{"id":"914f4e3b-2d79-4bed-ba4b-10d8113f2a44","type":"CDSView"}},"id":"df205399-5828-4806-b944-b0a76344dca3","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba4826de-5f04-42ad-a463-f61bc65f9c08","type":"Circle"},{"attributes":{"source":{"id":"574f676e-63ce-4e57-a0f2-8d7fcea02c9c","type":"ColumnDataSource"}},"id":"cc87cf80-00c1-45a9-b1f7-cbca2906dc87","type":"CDSView"},{"attributes":{"source":{"id":"b166aa25-9b2b-4e22-939d-553802fbb2c1","type":"ColumnDataSource"}},"id":"914f4e3b-2d79-4bed-ba4b-10d8113f2a44","type":"CDSView"},{"attributes":{"data_source":{"id":"8bd8e76b-fe2c-4c3e-bba0-169b23497c0b","type":"ColumnDataSource"},"glyph":{"id":"383d74e6-4842-4652-bf45-210cb06afaa0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ded4a789-10d8-424d-8e42-9da84724da99","type":"Circle"},"selection_glyph":null,"view":{"id":"18edef64-eb9a-4fae-b96d-7a25368a5525","type":"CDSView"}},"id":"4bedf343-a0d9-4856-bdf3-90dccd21eed3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a739356c-843f-4929-9087-a1474bc8c3f6","type":"Circle"},{"attributes":{"source":{"id":"2d948e7f-8139-44ac-8bb6-90a48fff0f3f","type":"ColumnDataSource"}},"id":"14933c65-0390-4c4f-b014-011afadd40ef","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f68294ea-1b33-4cf0-8197-c046705cd33c","type":"Circle"},{"attributes":{"source":{"id":"c9709180-6aeb-4f16-bf5d-a1f66fa4d3a4","type":"ColumnDataSource"}},"id":"7aa31c47-41af-47f7-b522-6aa82ee16f80","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha"]}},"id":"bb2c7bd1-471a-4467-aa14-350fa529e94a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"dfa97ef1-c310-415d-a343-92c24c8300c1","type":"Circle"},{"attributes":{"data_source":{"id":"2d948e7f-8139-44ac-8bb6-90a48fff0f3f","type":"ColumnDataSource"},"glyph":{"id":"1b683df3-8af3-4ea8-ba20-089ca4e84de9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b6333b7a-45f3-4a6b-bf7f-9286e1fdbee2","type":"Circle"},"selection_glyph":null,"view":{"id":"14933c65-0390-4c4f-b014-011afadd40ef","type":"CDSView"}},"id":"1998421b-4f35-4b09-b0a0-2ab86a04bb32","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5040d628-57b4-4478-b47f-0b456aa2d0be","type":"ColumnDataSource"},"glyph":{"id":"a1905733-e2d6-4fa6-901a-61e62891939a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aaccce06-cf13-4526-badd-f4f7e642b65e","type":"Circle"},"selection_glyph":null,"view":{"id":"cf41fb1e-551c-4da4-9186-6a28a621c2fe","type":"CDSView"}},"id":"c79cf0c5-aaa0-498f-acd1-8e2deff26c9d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["None"]}},"id":"b166aa25-9b2b-4e22-939d-553802fbb2c1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"aaccce06-cf13-4526-badd-f4f7e642b65e","type":"Circle"},{"attributes":{"source":{"id":"1916a999-beec-4707-b763-24c9828cf5c8","type":"ColumnDataSource"}},"id":"d4fbbd45-11c8-4a89-b1df-2e1c481696fd","type":"CDSView"},{"attributes":{"data_source":{"id":"cb469ed0-6a50-4ee5-9717-9cc9e80a6c16","type":"ColumnDataSource"},"glyph":{"id":"466155fe-bfa1-4238-9bcc-df3fd1f8d034","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ea434e1c-a4b5-4c33-b3fc-59ac70202edf","type":"Circle"},"selection_glyph":null,"view":{"id":"3b7fe534-ded1-43a3-967b-83362ea650d5","type":"CDSView"}},"id":"04d5b001-9b36-4572-994c-2907ca66152e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGBA"]}},"id":"5040d628-57b4-4478-b47f-0b456aa2d0be","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGBA"]}},"id":"f5245620-de2f-4128-ac0b-13953dd7ea6b","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"c838c5ef-bb93-47c0-9f2d-2efa6937024d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a27090e3-050a-41eb-a5b3-0c0ba04fe1d9","type":"CategoricalTicker"}},"id":"16b232d5-bfc2-4e1a-8353-dab06bbc6f67","type":"Grid"},{"attributes":{"data_source":{"id":"c9709180-6aeb-4f16-bf5d-a1f66fa4d3a4","type":"ColumnDataSource"},"glyph":{"id":"e75b8b5f-4d07-46f5-8300-98a1a8a8a885","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8417006c-f6f9-4db9-8862-37845a13945b","type":"Circle"},"selection_glyph":null,"view":{"id":"7aa31c47-41af-47f7-b522-6aa82ee16f80","type":"CDSView"}},"id":"2fd1a310-2100-4941-935d-95253bb782d2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGB"]}},"id":"cb469ed0-6a50-4ee5-9717-9cc9e80a6c16","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea434e1c-a4b5-4c33-b3fc-59ac70202edf","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["None"]}},"id":"574f676e-63ce-4e57-a0f2-8d7fcea02c9c","type":"ColumnDataSource"},{"attributes":{"source":{"id":"cb469ed0-6a50-4ee5-9717-9cc9e80a6c16","type":"ColumnDataSource"}},"id":"3b7fe534-ded1-43a3-967b-83362ea650d5","type":"CDSView"},{"attributes":{},"id":"586fa0b7-9efe-455d-bfb0-9f3ba2e512c3","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"f5245620-de2f-4128-ac0b-13953dd7ea6b","type":"ColumnDataSource"}},"id":"0b633ee3-4324-47c8-b05e-5c3d02697fcd","type":"CDSView"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"1669e0c5-611d-41a5-b187-281a168204c9","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4bc94006-8db7-4fd9-bcb4-9f13aea07ca8","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c838c5ef-bb93-47c0-9f2d-2efa6937024d","subtype":"Figure","type":"Plot"},"ticker":{"id":"11ef66c0-adcf-4ffa-879c-0b2e1f1498d3","type":"CategoricalTicker"}},"id":"485034e2-e02d-4088-a03f-e405b52ac3fd","type":"Grid"},{"attributes":{"below":[{"id":"269e9218-c113-4106-bca9-79ce2c0f631d","type":"CategoricalAxis"}],"left":[{"id":"ccd337b2-717a-409d-8b6c-29abc859961c","type":"CategoricalAxis"}],"renderers":[{"id":"269e9218-c113-4106-bca9-79ce2c0f631d","type":"CategoricalAxis"},{"id":"485034e2-e02d-4088-a03f-e405b52ac3fd","type":"Grid"},{"id":"ccd337b2-717a-409d-8b6c-29abc859961c","type":"CategoricalAxis"},{"id":"16b232d5-bfc2-4e1a-8353-dab06bbc6f67","type":"Grid"},{"id":"f7d59965-43fa-491a-9da7-198dea468737","type":"BoxAnnotation"},{"id":"835a44c6-320d-4285-bd97-94c877cb8196","type":"GlyphRenderer"},{"id":"fbc66514-9990-4a71-9b10-5d03d97fdf86","type":"GlyphRenderer"},{"id":"4bedf343-a0d9-4856-bdf3-90dccd21eed3","type":"GlyphRenderer"},{"id":"1998421b-4f35-4b09-b0a0-2ab86a04bb32","type":"GlyphRenderer"},{"id":"04d5b001-9b36-4572-994c-2907ca66152e","type":"GlyphRenderer"},{"id":"c79cf0c5-aaa0-498f-acd1-8e2deff26c9d","type":"GlyphRenderer"},{"id":"df205399-5828-4806-b944-b0a76344dca3","type":"GlyphRenderer"},{"id":"c2b2f499-8be0-4836-bd0d-fc4281cfd024","type":"GlyphRenderer"},{"id":"95795a2a-5f72-4afa-a052-d979f2686a0e","type":"GlyphRenderer"},{"id":"1ef379ae-ffbe-40f1-9f53-09dac4d0b650","type":"GlyphRenderer"},{"id":"66014e7c-e82c-4bb6-83c7-95350bacdcd6","type":"GlyphRenderer"},{"id":"a02ceafd-26e6-4fc4-a6cf-6bcbb441fba8","type":"GlyphRenderer"},{"id":"40590334-ce78-4334-aac7-a46cd4de728f","type":"GlyphRenderer"},{"id":"048bb8cc-a631-406b-b8c4-0087c46b1719","type":"GlyphRenderer"},{"id":"6b7d7f11-1467-4d55-9eb1-d7b575964993","type":"GlyphRenderer"},{"id":"8eea5215-ce8f-41e8-969f-52527266178a","type":"GlyphRenderer"},{"id":"0b312690-2593-44b9-9af3-a8b04405f5d7","type":"GlyphRenderer"},{"id":"bb0e8530-319b-4107-ae87-76a5d1461702","type":"GlyphRenderer"},{"id":"05334909-28a7-4c82-85be-cce6e7bf34d8","type":"GlyphRenderer"},{"id":"3d60873f-449e-4180-ad7f-f4cb2d1532b0","type":"GlyphRenderer"},{"id":"5295bb33-4883-4168-818e-369a4f561b04","type":"GlyphRenderer"},{"id":"16339c1d-de9a-45c5-96ed-abc3d6365769","type":"GlyphRenderer"},{"id":"2fd1a310-2100-4941-935d-95253bb782d2","type":"GlyphRenderer"},{"id":"3118ba12-ecc3-49c9-9d4f-9cd806e112f7","type":"GlyphRenderer"},{"id":"9775aa28-8b16-42a9-a9ba-9c7439fcabbb","type":"GlyphRenderer"},{"id":"d2ac0600-5352-4ca8-9b05-da468e200a67","type":"GlyphRenderer"},{"id":"3ff30c3f-fd7c-4aee-b49f-be6ed5618787","type":"GlyphRenderer"},{"id":"eec1cba4-df8d-48d4-a11d-517f3a2d5813","type":"GlyphRenderer"},{"id":"9a00719e-a28c-420c-b4e4-c9431259a959","type":"GlyphRenderer"},{"id":"5736f1ef-1f0b-4df1-82e1-c64738526036","type":"GlyphRenderer"},{"id":"ef8162d3-ab7f-471a-a046-9d9a463ba56c","type":"GlyphRenderer"},{"id":"5e2e55d2-0cee-4065-8492-454a6e0ff14e","type":"GlyphRenderer"},{"id":"d908ebd6-8c4e-4a60-bcdf-3f414b191e3a","type":"GlyphRenderer"},{"id":"0ce3fc39-3509-491d-aa35-e154a317c698","type":"GlyphRenderer"},{"id":"9480d438-438f-46d7-86bb-4edffe87d642","type":"GlyphRenderer"},{"id":"ed6440b2-5b47-43cc-8a45-929b54b82495","type":"GlyphRenderer"}],"title":{"id":"776dfbec-f060-4004-a44e-44215287a840","type":"Title"},"toolbar":{"id":"980b23b6-b773-4531-88d9-e5364b4a16b9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"179b1f2e-e036-4607-b8ee-2a6e01da73c1","type":"FactorRange"},"x_scale":{"id":"1ce31f08-1fac-4572-a0a3-d854a6330806","type":"CategoricalScale"},"y_range":{"id":"1669e0c5-611d-41a5-b187-281a168204c9","type":"FactorRange"},"y_scale":{"id":"1d1b4606-f3d5-4f78-8e55-3c5202b9230a","type":"CategoricalScale"}},"id":"c838c5ef-bb93-47c0-9f2d-2efa6937024d","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"ee2ce68e-3f83-44c4-bd88-26202f14513e","type":"ColumnDataSource"},"glyph":{"id":"ce194e42-27ba-4fd2-952a-6a48bd90444e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dfa97ef1-c310-415d-a343-92c24c8300c1","type":"Circle"},"selection_glyph":null,"view":{"id":"b80d186b-989c-41db-b989-b1902d9531b3","type":"CDSView"}},"id":"ed6440b2-5b47-43cc-8a45-929b54b82495","type":"GlyphRenderer"},{"attributes":{},"id":"1ce31f08-1fac-4572-a0a3-d854a6330806","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"62cf5e4c-5869-4e58-9aec-001d828b262e","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGBA"]}},"id":"ee2ce68e-3f83-44c4-bd88-26202f14513e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f5245620-de2f-4128-ac0b-13953dd7ea6b","type":"ColumnDataSource"},"glyph":{"id":"8be7afc5-086b-4805-8710-2cf953b72b37","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"632bf374-b84a-42fd-97b0-ad6ef864d34e","type":"Circle"},"selection_glyph":null,"view":{"id":"0b633ee3-4324-47c8-b05e-5c3d02697fcd","type":"CDSView"}},"id":"0ce3fc39-3509-491d-aa35-e154a317c698","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"179b1f2e-e036-4607-b8ee-2a6e01da73c1","type":"FactorRange"},{"attributes":{"axis_label":"Line Options","formatter":{"id":"3d59b256-4089-4dd0-8ba2-31f34ef20a84","type":"CategoricalTickFormatter"},"plot":{"id":"c838c5ef-bb93-47c0-9f2d-2efa6937024d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a27090e3-050a-41eb-a5b3-0c0ba04fe1d9","type":"CategoricalTicker"}},"id":"ccd337b2-717a-409d-8b6c-29abc859961c","type":"CategoricalAxis"},{"attributes":{},"id":"11ef66c0-adcf-4ffa-879c-0b2e1f1498d3","type":"CategoricalTicker"},{"attributes":{},"id":"1d1b4606-f3d5-4f78-8e55-3c5202b9230a","type":"CategoricalScale"},{"attributes":{"axis_label":"Fill Options","formatter":{"id":"586fa0b7-9efe-455d-bfb0-9f3ba2e512c3","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c838c5ef-bb93-47c0-9f2d-2efa6937024d","subtype":"Figure","type":"Plot"},"ticker":{"id":"11ef66c0-adcf-4ffa-879c-0b2e1f1498d3","type":"CategoricalTicker"}},"id":"269e9218-c113-4106-bca9-79ce2c0f631d","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"965d788a-35fe-4255-a37d-e88dca73de92","type":"ColumnDataSource"},"glyph":{"id":"b31f6a2f-290c-4e3f-8b31-5200e1d37b7d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3d6ae84a-d0ef-4cf3-b8c6-69c8d24ce396","type":"Circle"},"selection_glyph":null,"view":{"id":"769c5767-feee-44ca-96da-d096069cea59","type":"CDSView"}},"id":"9480d438-438f-46d7-86bb-4edffe87d642","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Fill and Line Color Combinations"},"id":"776dfbec-f060-4004-a44e-44215287a840","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGB"]}},"id":"965d788a-35fe-4255-a37d-e88dca73de92","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1e6c781e-1930-4459-b4ec-25cecc8576a2","type":"ColumnDataSource"},"glyph":{"id":"eada7a8c-79e6-4967-94d1-15db548b5fc9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f8b4248-b2b4-4151-8988-6006837a6b41","type":"Circle"},"selection_glyph":null,"view":{"id":"3ef311b8-86c1-4eac-ba57-f19104cff1e4","type":"CDSView"}},"id":"3118ba12-ecc3-49c9-9d4f-9cd806e112f7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6530cf9a-bb64-4d9f-8146-21913d09ca1d","type":"ColumnDataSource"},"glyph":{"id":"6ad17aba-e212-47ae-b311-c316802e1a1a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74a74578-68f9-4f54-854f-ddb875a3d3fc","type":"Circle"},"selection_glyph":null,"view":{"id":"0bf26938-630c-4561-bb26-b3b3058fb7bf","type":"CDSView"}},"id":"048bb8cc-a631-406b-b8c4-0087c46b1719","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7816c0ce-2217-4376-806b-a8f2a27f2b03","type":"ColumnDataSource"},"glyph":{"id":"691efb4b-8d44-4264-a303-02332e638d66","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d4749948-ac2c-4b17-aa35-0c3c818e70f5","type":"Circle"},"selection_glyph":null,"view":{"id":"65d930f7-568e-4352-b50b-74a4f4acc96c","type":"CDSView"}},"id":"8eea5215-ce8f-41e8-969f-52527266178a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e214184a-268d-41c9-b5b7-81315754ea2a","type":"ColumnDataSource"},"glyph":{"id":"460b1705-1bbf-46ef-ab85-1c19b40b0a08","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2d46953a-1a88-4e54-992a-3b3ff1750b1e","type":"Circle"},"selection_glyph":null,"view":{"id":"8de27150-2263-48d9-8517-1cbe20692232","type":"CDSView"}},"id":"0b312690-2593-44b9-9af3-a8b04405f5d7","type":"GlyphRenderer"},{"attributes":{"source":{"id":"748381a3-c500-452c-b60a-12336c3a3302","type":"ColumnDataSource"}},"id":"5a364f66-1e01-4da3-b093-acb79c0d44d4","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha"]}},"id":"6530cf9a-bb64-4d9f-8146-21913d09ca1d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6d97a819-17ff-4935-a7ef-92e473254b38","type":"ColumnDataSource"}},"id":"929b23a7-340c-4425-8732-724ca363f6d9","type":"CDSView"},{"attributes":{"source":{"id":"ce946887-caa8-4d73-9464-697accc8c602","type":"ColumnDataSource"}},"id":"1a33c2e3-edbe-491a-b0b8-fe6d4c36e099","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["None"]}},"id":"6d97a819-17ff-4935-a7ef-92e473254b38","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ad17aba-e212-47ae-b311-c316802e1a1a","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"691efb4b-8d44-4264-a303-02332e638d66","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4c643fc-8b84-4b28-a350-874c2be40c77","type":"Circle"},{"attributes":{"data_source":{"id":"9bfe24f3-40c7-490e-a4d5-bda35365a3de","type":"ColumnDataSource"},"glyph":{"id":"b4c643fc-8b84-4b28-a350-874c2be40c77","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7b431d0b-8f2c-49b5-9714-f812513baa86","type":"Circle"},"selection_glyph":null,"view":{"id":"def73a04-3bb2-4c6f-9fd2-f2a2f90fd53d","type":"CDSView"}},"id":"a02ceafd-26e6-4fc4-a6cf-6bcbb441fba8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"292d1fd6-8256-4045-9e48-ab55b8b3bd1e","type":"ColumnDataSource"},"glyph":{"id":"f68294ea-1b33-4cf0-8197-c046705cd33c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43fd1393-bee3-4ff7-b153-c8bb93bbb4f6","type":"Circle"},"selection_glyph":null,"view":{"id":"4fa832d1-e589-4502-a3f4-08760dc75a42","type":"CDSView"}},"id":"66014e7c-e82c-4bb6-83c7-95350bacdcd6","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8417006c-f6f9-4db9-8862-37845a13945b","type":"Circle"},{"attributes":{"data_source":{"id":"6d97a819-17ff-4935-a7ef-92e473254b38","type":"ColumnDataSource"},"glyph":{"id":"3168d819-d846-47fa-886e-624e83122db9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f665acca-7c6b-4926-9121-d9af66db146f","type":"Circle"},"selection_glyph":null,"view":{"id":"929b23a7-340c-4425-8732-724ca363f6d9","type":"CDSView"}},"id":"40590334-ce78-4334-aac7-a46cd4de728f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"748381a3-c500-452c-b60a-12336c3a3302","type":"ColumnDataSource"},"glyph":{"id":"53ef4f9c-3ba2-4695-9a8a-a698360dd467","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eefe42ac-9c73-4a43-a625-804f69d03f81","type":"Circle"},"selection_glyph":null,"view":{"id":"5a364f66-1e01-4da3-b093-acb79c0d44d4","type":"CDSView"}},"id":"5295bb33-4883-4168-818e-369a4f561b04","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a5f9d09a-f108-44c3-9243-c1b0de38227f","type":"ColumnDataSource"},"glyph":{"id":"284665f6-b440-4eeb-8054-f03944fe67d4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2d7afef8-42bb-4440-bfb4-c355d26b2d90","type":"Circle"},"selection_glyph":null,"view":{"id":"ca376454-c527-4ce6-a186-aaa4522a668b","type":"CDSView"}},"id":"16339c1d-de9a-45c5-96ed-abc3d6365769","type":"GlyphRenderer"},{"attributes":{"source":{"id":"292d1fd6-8256-4045-9e48-ab55b8b3bd1e","type":"ColumnDataSource"}},"id":"4fa832d1-e589-4502-a3f4-08760dc75a42","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"74a74578-68f9-4f54-854f-ddb875a3d3fc","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"284665f6-b440-4eeb-8054-f03944fe67d4","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f665acca-7c6b-4926-9121-d9af66db146f","type":"Circle"},{"attributes":{"source":{"id":"ea62a3c9-30f2-4459-81d1-8fb0f48d64f7","type":"ColumnDataSource"}},"id":"beb564db-9b7a-4f77-8e8f-27bb75802682","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b431d0b-8f2c-49b5-9714-f812513baa86","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["None"]}},"id":"86e31fd8-0380-4f89-b750-d24589454926","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGB"]}},"id":"ce946887-caa8-4d73-9464-697accc8c602","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9bfe24f3-40c7-490e-a4d5-bda35365a3de","type":"ColumnDataSource"}},"id":"def73a04-3bb2-4c6f-9fd2-f2a2f90fd53d","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"660de138-d09b-4ec2-9c2e-5cc2e602b9f7","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3168d819-d846-47fa-886e-624e83122db9","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"74fd70ee-af38-47ce-96ed-fa7cc60ff10d","type":"Circle"},{"attributes":{"data_source":{"id":"1916a999-beec-4707-b763-24c9828cf5c8","type":"ColumnDataSource"},"glyph":{"id":"ef0120e7-7cfe-44ea-889b-0ad99dc0b93c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72bbdd68-4ea7-493a-ad80-5640800576bf","type":"Circle"},"selection_glyph":null,"view":{"id":"d4fbbd45-11c8-4a89-b1df-2e1c481696fd","type":"CDSView"}},"id":"d908ebd6-8c4e-4a60-bcdf-3f414b191e3a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ce946887-caa8-4d73-9464-697accc8c602","type":"ColumnDataSource"},"glyph":{"id":"db720987-16d1-40d2-9535-6de06de585e1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c6b64a38-64b0-4e96-8dde-71e40559cc46","type":"Circle"},"selection_glyph":null,"view":{"id":"1a33c2e3-edbe-491a-b0b8-fe6d4c36e099","type":"CDSView"}},"id":"6b7d7f11-1467-4d55-9eb1-d7b575964993","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6a9c88ab-5368-44b1-ae09-f9f748006bbf","type":"ColumnDataSource"}},"id":"84ed857c-b31f-4e96-9574-05dfc65f9dd4","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d68a7ff-b2c8-47c0-8d3b-72be82608c03","type":"Circle"},{"attributes":{"source":{"id":"74a1f37f-40c2-4957-9a2b-0ccb686925bc","type":"ColumnDataSource"}},"id":"867793bd-3e99-494d-87f0-39811311f1f8","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGBA"]}},"id":"a5f9d09a-f108-44c3-9243-c1b0de38227f","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"eada7a8c-79e6-4967-94d1-15db548b5fc9","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"34408b21-e61b-4b42-9f77-7561616396c2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb6c5269-2b04-42b6-95df-5caeb9bc0450","type":"Circle"},{"attributes":{"data_source":{"id":"847b90ae-a6d4-45aa-8f21-1b1f6a631b86","type":"ColumnDataSource"},"glyph":{"id":"74fd70ee-af38-47ce-96ed-fa7cc60ff10d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb6c5269-2b04-42b6-95df-5caeb9bc0450","type":"Circle"},"selection_glyph":null,"view":{"id":"938ddb69-04bc-4a93-b4bb-24b58548584a","type":"CDSView"}},"id":"5e2e55d2-0cee-4065-8492-454a6e0ff14e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGB"]}},"id":"c9709180-6aeb-4f16-bf5d-a1f66fa4d3a4","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1e6c781e-1930-4459-b4ec-25cecc8576a2","type":"ColumnDataSource"}},"id":"3ef311b8-86c1-4eac-ba57-f19104cff1e4","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c88f6b5-6787-4914-bebd-5f84bd3195e4","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGBA"]}},"id":"0621128a-553f-4d2b-99bd-998953915f0f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"847b90ae-a6d4-45aa-8f21-1b1f6a631b86","type":"ColumnDataSource"}},"id":"938ddb69-04bc-4a93-b4bb-24b58548584a","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha"]}},"id":"c6a2c003-07a0-46c1-8533-887260648682","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9914417f-b84f-4af9-b186-b70ca2170dbc","type":"Circle"},{"attributes":{"data_source":{"id":"86e31fd8-0380-4f89-b750-d24589454926","type":"ColumnDataSource"},"glyph":{"id":"3f21f332-b563-4a29-af74-e63d2b08291a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"03389a72-680d-41cd-9424-94d486d1dd6a","type":"Circle"},"selection_glyph":null,"view":{"id":"a0009051-5f26-4a93-8f62-ab8ac14e1324","type":"CDSView"}},"id":"ef8162d3-ab7f-471a-a046-9d9a463ba56c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5550dae-712b-4e03-8d5e-de5e69abb1af","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"26b9c273-48f2-42e0-a03f-177930900017","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7cf26f9a-78dc-46e3-98e4-3dd8fa2aebfb","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha"]}},"id":"847b90ae-a6d4-45aa-8f21-1b1f6a631b86","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGB"]}},"id":"d593df30-5bf0-450c-b1ec-f99211e369e9","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGB"]}},"id":"748381a3-c500-452c-b60a-12336c3a3302","type":"ColumnDataSource"},{"attributes":{"source":{"id":"0be15a9d-73ac-4ba7-8b1b-edb16e10baa2","type":"ColumnDataSource"}},"id":"41181d34-2752-43e4-8dd2-619a067fd5df","type":"CDSView"},{"attributes":{"source":{"id":"c6a2c003-07a0-46c1-8533-887260648682","type":"ColumnDataSource"}},"id":"591d24b4-9f9e-4279-9bf6-11d299358b62","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGBA"]}},"id":"0be15a9d-73ac-4ba7-8b1b-edb16e10baa2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"86e31fd8-0380-4f89-b750-d24589454926","type":"ColumnDataSource"}},"id":"a0009051-5f26-4a93-8f62-ab8ac14e1324","type":"CDSView"},{"attributes":{"data_source":{"id":"ea62a3c9-30f2-4459-81d1-8fb0f48d64f7","type":"ColumnDataSource"},"glyph":{"id":"660de138-d09b-4ec2-9c2e-5cc2e602b9f7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a143b39d-e502-46b2-970f-14e7ec0428b0","type":"Circle"},"selection_glyph":null,"view":{"id":"beb564db-9b7a-4f77-8e8f-27bb75802682","type":"CDSView"}},"id":"05334909-28a7-4c82-85be-cce6e7bf34d8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d593df30-5bf0-450c-b1ec-f99211e369e9","type":"ColumnDataSource"},"glyph":{"id":"9914417f-b84f-4af9-b186-b70ca2170dbc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e757ee48-4b82-4473-8e6d-7e0ef43d34dd","type":"Circle"},"selection_glyph":null,"view":{"id":"b11749b5-8a96-4c2e-8a07-e0b53f51e8ca","type":"CDSView"}},"id":"9a00719e-a28c-420c-b4e4-c9431259a959","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"eefe42ac-9c73-4a43-a625-804f69d03f81","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGB"]}},"id":"75ba0bd5-f14b-499d-ba83-15af77146348","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7816c0ce-2217-4376-806b-a8f2a27f2b03","type":"ColumnDataSource"}},"id":"65d930f7-568e-4352-b50b-74a4f4acc96c","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"250716f6-6f8e-42da-9df9-6be0d7e7866c","type":"Circle"},{"attributes":{"data_source":{"id":"74a1f37f-40c2-4957-9a2b-0ccb686925bc","type":"ColumnDataSource"},"glyph":{"id":"331ee588-a6b7-4c2a-a69a-316fb4c273cc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7c88f6b5-6787-4914-bebd-5f84bd3195e4","type":"Circle"},"selection_glyph":null,"view":{"id":"867793bd-3e99-494d-87f0-39811311f1f8","type":"CDSView"}},"id":"d2ac0600-5352-4ca8-9b05-da468e200a67","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9f5b90b0-00d7-4da1-a598-a7754909b384","type":"ColumnDataSource"},"glyph":{"id":"26b9c273-48f2-42e0-a03f-177930900017","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49bb1efc-bb1e-449f-b16a-52357bfbb3b6","type":"Circle"},"selection_glyph":null,"view":{"id":"d35f9a1a-3854-46ef-b24e-de275d53dcbc","type":"CDSView"}},"id":"9775aa28-8b16-42a9-a9ba-9c7439fcabbb","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"db720987-16d1-40d2-9535-6de06de585e1","type":"Circle"},{"attributes":{"source":{"id":"9f5b90b0-00d7-4da1-a598-a7754909b384","type":"ColumnDataSource"}},"id":"d35f9a1a-3854-46ef-b24e-de275d53dcbc","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d46953a-1a88-4e54-992a-3b3ff1750b1e","type":"Circle"},{"attributes":{"source":{"id":"75ba0bd5-f14b-499d-ba83-15af77146348","type":"ColumnDataSource"}},"id":"4563012d-bedb-4778-93cb-d4d162d9a079","type":"CDSView"},{"attributes":{"data_source":{"id":"0be15a9d-73ac-4ba7-8b1b-edb16e10baa2","type":"ColumnDataSource"},"glyph":{"id":"1f61253a-b04b-4a5d-8a49-506808e9ccc5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7cf26f9a-78dc-46e3-98e4-3dd8fa2aebfb","type":"Circle"},"selection_glyph":null,"view":{"id":"41181d34-2752-43e4-8dd2-619a067fd5df","type":"CDSView"}},"id":"eec1cba4-df8d-48d4-a11d-517f3a2d5813","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["None"]}},"id":"ea62a3c9-30f2-4459-81d1-8fb0f48d64f7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6530cf9a-bb64-4d9f-8146-21913d09ca1d","type":"ColumnDataSource"}},"id":"0bf26938-630c-4561-bb26-b3b3058fb7bf","type":"CDSView"},{"attributes":{"source":{"id":"0621128a-553f-4d2b-99bd-998953915f0f","type":"ColumnDataSource"}},"id":"1b419cb3-6390-4639-b3d2-72c81d1949ba","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["None"]}},"id":"9f5b90b0-00d7-4da1-a598-a7754909b384","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"75ba0bd5-f14b-499d-ba83-15af77146348","type":"ColumnDataSource"},"glyph":{"id":"54c9cd88-4324-4875-a1e6-fc9697534ef3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b5550dae-712b-4e03-8d5e-de5e69abb1af","type":"Circle"},"selection_glyph":null,"view":{"id":"4563012d-bedb-4778-93cb-d4d162d9a079","type":"CDSView"}},"id":"3ff30c3f-fd7c-4aee-b49f-be6ed5618787","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5303140d-dc66-458b-bb9e-da7fb89edf01","type":"Circle"},{"attributes":{"source":{"id":"a5f9d09a-f108-44c3-9243-c1b0de38227f","type":"ColumnDataSource"}},"id":"ca376454-c527-4ce6-a186-aaa4522a668b","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"53ef4f9c-3ba2-4695-9a8a-a698360dd467","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha"]}},"id":"74a1f37f-40c2-4957-9a2b-0ccb686925bc","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6b64a38-64b0-4e96-8dde-71e40559cc46","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f61253a-b04b-4a5d-8a49-506808e9ccc5","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e75b8b5f-4d07-46f5-8300-98a1a8a8a885","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"49bb1efc-bb1e-449f-b16a-52357bfbb3b6","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f21f332-b563-4a29-af74-e63d2b08291a","type":"Circle"},{"attributes":{"source":{"id":"d593df30-5bf0-450c-b1ec-f99211e369e9","type":"ColumnDataSource"}},"id":"b11749b5-8a96-4c2e-8a07-e0b53f51e8ca","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGB"]}},"id":"e214184a-268d-41c9-b5b7-81315754ea2a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGBA"]}},"id":"6a9c88ab-5368-44b1-ae09-f9f748006bbf","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ec76104-acca-4f14-8d8e-f5b3ee3ef013","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"72bbdd68-4ea7-493a-ad80-5640800576bf","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f8b4248-b2b4-4151-8988-6006837a6b41","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGBA"]}},"id":"9bfe24f3-40c7-490e-a4d5-bda35365a3de","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a143b39d-e502-46b2-970f-14e7ec0428b0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"62efaaff-4d89-4452-a2c9-2c70034860ba","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e757ee48-4b82-4473-8e6d-7e0ef43d34dd","type":"Circle"},{"attributes":{"data_source":{"id":"0621128a-553f-4d2b-99bd-998953915f0f","type":"ColumnDataSource"},"glyph":{"id":"34408b21-e61b-4b42-9f77-7561616396c2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2d68a7ff-b2c8-47c0-8d3b-72be82608c03","type":"Circle"},"selection_glyph":null,"view":{"id":"1b419cb3-6390-4639-b3d2-72c81d1949ba","type":"CDSView"}},"id":"bb0e8530-319b-4107-ae87-76a5d1461702","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"331ee588-a6b7-4c2a-a69a-316fb4c273cc","type":"Circle"},{"attributes":{"data_source":{"id":"6a9c88ab-5368-44b1-ae09-f9f748006bbf","type":"ColumnDataSource"},"glyph":{"id":"250716f6-6f8e-42da-9df9-6be0d7e7866c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62efaaff-4d89-4452-a2c9-2c70034860ba","type":"Circle"},"selection_glyph":null,"view":{"id":"84ed857c-b31f-4e96-9574-05dfc65f9dd4","type":"CDSView"}},"id":"5736f1ef-1f0b-4df1-82e1-c64738526036","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"460b1705-1bbf-46ef-ab85-1c19b40b0a08","type":"Circle"},{"attributes":{"data_source":{"id":"c6a2c003-07a0-46c1-8533-887260648682","type":"ColumnDataSource"},"glyph":{"id":"5303140d-dc66-458b-bb9e-da7fb89edf01","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3ec76104-acca-4f14-8d8e-f5b3ee3ef013","type":"Circle"},"selection_glyph":null,"view":{"id":"591d24b4-9f9e-4279-9bf6-11d299358b62","type":"CDSView"}},"id":"3d60873f-449e-4180-ad7f-f4cb2d1532b0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"54c9cd88-4324-4875-a1e6-fc9697534ef3","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGBA"]}},"id":"7816c0ce-2217-4376-806b-a8f2a27f2b03","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef0120e7-7cfe-44ea-889b-0ad99dc0b93c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d7afef8-42bb-4440-bfb4-c355d26b2d90","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGBA"]}},"id":"1e6c781e-1930-4459-b4ec-25cecc8576a2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e214184a-268d-41c9-b5b7-81315754ea2a","type":"ColumnDataSource"}},"id":"8de27150-2263-48d9-8517-1cbe20692232","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"03389a72-680d-41cd-9424-94d486d1dd6a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4749948-ac2c-4b17-aa35-0c3c818e70f5","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGB"]}},"id":"1916a999-beec-4707-b763-24c9828cf5c8","type":"ColumnDataSource"}],"root_ids":["c838c5ef-bb93-47c0-9f2d-2efa6937024d"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"48fb16a6-da99-4997-a1fa-d4db1000a0e2","elementid":"c5125cb9-bc3f-4a76-9b24-99df5511e291","modelid":"c838c5ef-bb93-47c0-9f2d-2efa6937024d"}];
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