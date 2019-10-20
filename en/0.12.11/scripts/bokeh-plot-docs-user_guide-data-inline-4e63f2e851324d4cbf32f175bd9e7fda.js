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
      };var element = document.getElementById("cae9c456-083d-4a8f-ae31-5ec25bebb7d7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cae9c456-083d-4a8f-ae31-5ec25bebb7d7' but no matching script tag was found. ")
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
                    var docs_json = '{"500f7a38-a74f-4901-a518-7d4fc1a9fd50":{"roots":{"references":[{"attributes":{"formatter":{"id":"29c52f26-4184-4385-991e-01245c66b5bf","type":"BasicTickFormatter"},"plot":{"id":"6162cd51-eed3-41a2-ad90-5768efac626d","subtype":"Figure","type":"Plot"},"ticker":{"id":"1db015e1-1bf8-47f9-a3fe-658cb92d7b0c","type":"BasicTicker"}},"id":"8c4325e8-e7b6-4558-9dff-cc3ed10a217c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fa7f3aa5-d4bc-49c5-82c4-f17f3fa59a16","type":"BoxSelectTool"},{"id":"a32ba72f-bc63-4e67-bb25-c7349e6d4bc7","type":"HoverTool"},{"id":"7fe2fa05-3dbe-488f-b50a-64a29f2ee3d2","type":"ResetTool"}]},"id":"12aabaf3-b3e7-4fbb-8395-45b3da9154f7","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"9893fa8f-1260-4fd3-9b86-ad0f1a778efb","type":"BoxAnnotation"},"renderers":[{"id":"da0ea5db-1f62-4806-bc05-5ee7ef36b90d","type":"GlyphRenderer"}]},"id":"c0e77bcf-3ae2-470e-a700-1309fea51c2a","type":"BoxSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"295fac3d-c488-4b6f-98dd-d08f59ebc663","subtype":"Figure","type":"Plot"},"ticker":{"id":"638df004-fe20-4a97-ace1-79e1a24936e5","type":"BasicTicker"}},"id":"93ab0881-b571-49d1-ab66-35020a8aeded","type":"Grid"},{"attributes":{},"id":"9b30d1c8-66a4-4f77-aae7-5c8fd53118fc","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"81ecf9b0-f36d-4d64-989c-78f01a95796d","type":"Circle"},{"attributes":{"callback":null},"id":"710164d6-e638-4144-a692-5f7a98b8e9b0","type":"DataRange1d"},{"attributes":{},"id":"2d38afb3-2917-4857-8648-ca1a0b21859f","type":"LinearScale"},{"attributes":{"formatter":{"id":"179c643c-b6fb-4ac7-a8ee-92a09bc82dad","type":"BasicTickFormatter"},"plot":{"id":"295fac3d-c488-4b6f-98dd-d08f59ebc663","subtype":"Figure","type":"Plot"},"ticker":{"id":"638df004-fe20-4a97-ace1-79e1a24936e5","type":"BasicTicker"}},"id":"de8f818b-9bf0-4871-8dde-6a076ecd0342","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"81bf433b-a4b0-4f07-9975-975abae7e319","type":"BoxAnnotation"},"renderers":[{"id":"8faf5c51-04c2-4334-8f58-2efa3ef7e76a","type":"GlyphRenderer"}]},"id":"fa7f3aa5-d4bc-49c5-82c4-f17f3fa59a16","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"5b272bed-e97d-46a3-8e2f-df942760d90d","type":"ColumnDataSource"},"glyph":{"id":"81ecf9b0-f36d-4d64-989c-78f01a95796d","type":"Circle"},"hover_glyph":{"id":"9ba39f65-cd96-4f99-91ed-a46804862bb3","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"ed610fb3-a642-4c63-9929-8a4cdbee8cda","type":"Circle"},"selection_glyph":null,"view":{"id":"82e2d2f2-16fa-4d08-b31e-26419510d92f","type":"CDSView"}},"id":"8faf5c51-04c2-4334-8f58-2efa3ef7e76a","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"6162cd51-eed3-41a2-ad90-5768efac626d","subtype":"Figure","type":"Plot"},{"id":"295fac3d-c488-4b6f-98dd-d08f59ebc663","subtype":"Figure","type":"Plot"}]},"id":"55867863-6a2a-4032-99b0-3087da08a89d","type":"Row"},{"attributes":{"filters":[{"id":"bd2e2247-eb32-4b9f-8903-3a25d2aad833","type":"BooleanFilter"}],"source":{"id":"5b272bed-e97d-46a3-8e2f-df942760d90d","type":"ColumnDataSource"}},"id":"82e2d2f2-16fa-4d08-b31e-26419510d92f","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"dacbd16c-3497-46e8-aef6-950bac9b2eb2","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cfec3ef7-fffb-4c07-afe1-6d646d08527f","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"6162cd51-eed3-41a2-ad90-5768efac626d","subtype":"Figure","type":"Plot"},"ticker":{"id":"1db015e1-1bf8-47f9-a3fe-658cb92d7b0c","type":"BasicTicker"}},"id":"95c4c1de-8dac-4868-abf0-5455522a15ed","type":"Grid"},{"attributes":{"data_source":{"id":"5b272bed-e97d-46a3-8e2f-df942760d90d","type":"ColumnDataSource"},"glyph":{"id":"cfec3ef7-fffb-4c07-afe1-6d646d08527f","type":"Circle"},"hover_glyph":{"id":"ed6a97d5-f4ab-40e3-af46-b296e62ee5d9","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"aa66886e-7cb7-401e-b7ef-c25ccd47b469","type":"Circle"},"selection_glyph":null,"view":{"id":"d5f3617f-af40-44d7-a980-855e7af56bdb","type":"CDSView"}},"id":"da0ea5db-1f62-4806-bc05-5ee7ef36b90d","type":"GlyphRenderer"},{"attributes":{},"id":"aa07291e-4b4f-40b9-a1c8-633c5b14e119","type":"LinearScale"},{"attributes":{},"id":"179c643c-b6fb-4ac7-a8ee-92a09bc82dad","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"5b272bed-e97d-46a3-8e2f-df942760d90d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed610fb3-a642-4c63-9929-8a4cdbee8cda","type":"Circle"},{"attributes":{},"id":"2f6a7ba6-9d61-4ea3-8dfd-0fd3b04827db","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9893fa8f-1260-4fd3-9b86-ad0f1a778efb","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ba39f65-cd96-4f99-91ed-a46804862bb3","type":"Circle"},{"attributes":{},"id":"e8b9a28d-de0d-4a26-8e16-c37934e18c79","type":"BasicTicker"},{"attributes":{},"id":"1be6d8e5-04db-470e-a2dd-7a1c7adb2b88","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"81bf433b-a4b0-4f07-9975-975abae7e319","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1c157dc1-6752-4cc2-9859-37cb4c81e6ac","type":"LinearAxis"}],"left":[{"id":"8c4325e8-e7b6-4558-9dff-cc3ed10a217c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1c157dc1-6752-4cc2-9859-37cb4c81e6ac","type":"LinearAxis"},{"id":"41c48caf-0d36-41d5-a51d-265078635dba","type":"Grid"},{"id":"8c4325e8-e7b6-4558-9dff-cc3ed10a217c","type":"LinearAxis"},{"id":"95c4c1de-8dac-4868-abf0-5455522a15ed","type":"Grid"},{"id":"9893fa8f-1260-4fd3-9b86-ad0f1a778efb","type":"BoxAnnotation"},{"id":"da0ea5db-1f62-4806-bc05-5ee7ef36b90d","type":"GlyphRenderer"}],"title":{"id":"dacbd16c-3497-46e8-aef6-950bac9b2eb2","type":"Title"},"toolbar":{"id":"f0d0821c-d9b5-4ea5-b645-5d8d28a4322d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"710164d6-e638-4144-a692-5f7a98b8e9b0","type":"DataRange1d"},"x_scale":{"id":"2d38afb3-2917-4857-8648-ca1a0b21859f","type":"LinearScale"},"y_range":{"id":"f58a0209-00df-47f1-9b87-b530d4cc5ec6","type":"DataRange1d"},"y_scale":{"id":"20104510-a332-4150-92cc-cf866e9c995c","type":"LinearScale"}},"id":"6162cd51-eed3-41a2-ad90-5768efac626d","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"10f8d43a-c36d-4739-9c5b-935e80138928","type":"HoverTool"},{"attributes":{},"id":"29c52f26-4184-4385-991e-01245c66b5bf","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"c0e77bcf-3ae2-470e-a700-1309fea51c2a","type":"BoxSelectTool"},{"id":"10f8d43a-c36d-4739-9c5b-935e80138928","type":"HoverTool"},{"id":"1be6d8e5-04db-470e-a2dd-7a1c7adb2b88","type":"ResetTool"},{"id":"fa7f3aa5-d4bc-49c5-82c4-f17f3fa59a16","type":"BoxSelectTool"},{"id":"a32ba72f-bc63-4e67-bb25-c7349e6d4bc7","type":"HoverTool"},{"id":"7fe2fa05-3dbe-488f-b50a-64a29f2ee3d2","type":"ResetTool"}]},"id":"ea83de6f-8e8c-4aa7-9228-ed2d400757f2","type":"ProxyToolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c0e77bcf-3ae2-470e-a700-1309fea51c2a","type":"BoxSelectTool"},{"id":"10f8d43a-c36d-4739-9c5b-935e80138928","type":"HoverTool"},{"id":"1be6d8e5-04db-470e-a2dd-7a1c7adb2b88","type":"ResetTool"}]},"id":"f0d0821c-d9b5-4ea5-b645-5d8d28a4322d","type":"Toolbar"},{"attributes":{},"id":"1db015e1-1bf8-47f9-a3fe-658cb92d7b0c","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"ea83de6f-8e8c-4aa7-9228-ed2d400757f2","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"ef4de84b-1e57-42cb-a3b5-f6723c57849e","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"f58a0209-00df-47f1-9b87-b530d4cc5ec6","type":"DataRange1d"},{"attributes":{},"id":"adae1fe6-2ee6-48b9-8aea-f0abef9ffd62","type":"LinearScale"},{"attributes":{"formatter":{"id":"0215529f-9b58-4f61-bb82-4fba198e8fdd","type":"BasicTickFormatter"},"plot":{"id":"295fac3d-c488-4b6f-98dd-d08f59ebc663","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b30d1c8-66a4-4f77-aae7-5c8fd53118fc","type":"BasicTicker"}},"id":"ef1f6a29-f38c-45d2-8fa2-80b72a8d6c97","type":"LinearAxis"},{"attributes":{"formatter":{"id":"2f6a7ba6-9d61-4ea3-8dfd-0fd3b04827db","type":"BasicTickFormatter"},"plot":{"id":"6162cd51-eed3-41a2-ad90-5768efac626d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8b9a28d-de0d-4a26-8e16-c37934e18c79","type":"BasicTicker"}},"id":"1c157dc1-6752-4cc2-9859-37cb4c81e6ac","type":"LinearAxis"},{"attributes":{"below":[{"id":"ef1f6a29-f38c-45d2-8fa2-80b72a8d6c97","type":"LinearAxis"}],"left":[{"id":"de8f818b-9bf0-4871-8dde-6a076ecd0342","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ef1f6a29-f38c-45d2-8fa2-80b72a8d6c97","type":"LinearAxis"},{"id":"e9af26be-0049-4578-8ecb-a41a6f07a33c","type":"Grid"},{"id":"de8f818b-9bf0-4871-8dde-6a076ecd0342","type":"LinearAxis"},{"id":"93ab0881-b571-49d1-ab66-35020a8aeded","type":"Grid"},{"id":"81bf433b-a4b0-4f07-9975-975abae7e319","type":"BoxAnnotation"},{"id":"8faf5c51-04c2-4334-8f58-2efa3ef7e76a","type":"GlyphRenderer"}],"title":{"id":"639c3cd9-0536-40c5-ae71-655b2865205d","type":"Title"},"toolbar":{"id":"12aabaf3-b3e7-4fbb-8395-45b3da9154f7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"710164d6-e638-4144-a692-5f7a98b8e9b0","type":"DataRange1d"},"x_scale":{"id":"aa07291e-4b4f-40b9-a1c8-633c5b14e119","type":"LinearScale"},"y_range":{"id":"f58a0209-00df-47f1-9b87-b530d4cc5ec6","type":"DataRange1d"},"y_scale":{"id":"adae1fe6-2ee6-48b9-8aea-f0abef9ffd62","type":"LinearScale"}},"id":"295fac3d-c488-4b6f-98dd-d08f59ebc663","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20104510-a332-4150-92cc-cf866e9c995c","type":"LinearScale"},{"attributes":{"plot":{"id":"295fac3d-c488-4b6f-98dd-d08f59ebc663","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b30d1c8-66a4-4f77-aae7-5c8fd53118fc","type":"BasicTicker"}},"id":"e9af26be-0049-4578-8ecb-a41a6f07a33c","type":"Grid"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed6a97d5-f4ab-40e3-af46-b296e62ee5d9","type":"Circle"},{"attributes":{"source":{"id":"5b272bed-e97d-46a3-8e2f-df942760d90d","type":"ColumnDataSource"}},"id":"d5f3617f-af40-44d7-a980-855e7af56bdb","type":"CDSView"},{"attributes":{},"id":"0215529f-9b58-4f61-bb82-4fba198e8fdd","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"ef4de84b-1e57-42cb-a3b5-f6723c57849e","type":"ToolbarBox"},{"id":"a818c0ae-f57c-4306-81b0-032bfef552d4","type":"Column"}]},"id":"fbd812d2-8c2a-4962-84a8-884771b3f0fb","type":"Column"},{"attributes":{"callback":null},"id":"a32ba72f-bc63-4e67-bb25-c7349e6d4bc7","type":"HoverTool"},{"attributes":{"plot":{"id":"6162cd51-eed3-41a2-ad90-5768efac626d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8b9a28d-de0d-4a26-8e16-c37934e18c79","type":"BasicTicker"}},"id":"41c48caf-0d36-41d5-a51d-265078635dba","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"639c3cd9-0536-40c5-ae71-655b2865205d","type":"Title"},{"attributes":{},"id":"7fe2fa05-3dbe-488f-b50a-64a29f2ee3d2","type":"ResetTool"},{"attributes":{"children":[{"id":"55867863-6a2a-4032-99b0-3087da08a89d","type":"Row"}]},"id":"a818c0ae-f57c-4306-81b0-032bfef552d4","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa66886e-7cb7-401e-b7ef-c25ccd47b469","type":"Circle"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"bd2e2247-eb32-4b9f-8903-3a25d2aad833","type":"BooleanFilter"},{"attributes":{},"id":"638df004-fe20-4a97-ace1-79e1a24936e5","type":"BasicTicker"}],"root_ids":["fbd812d2-8c2a-4962-84a8-884771b3f0fb"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"500f7a38-a74f-4901-a518-7d4fc1a9fd50","elementid":"cae9c456-083d-4a8f-ae31-5ec25bebb7d7","modelid":"fbd812d2-8c2a-4962-84a8-884771b3f0fb"}];
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