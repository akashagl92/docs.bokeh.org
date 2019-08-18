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
      };var element = document.getElementById("857fb3c6-8d8f-4a3d-9f5c-df541f1aa1c7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '857fb3c6-8d8f-4a3d-9f5c-df541f1aa1c7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label").LatexLabel,
          "Surface3d": require("custom/bk_script_503def5dd0ce428b82af5a6e6f63b14a.surface3d").Surface3d,
          "Custom": require("custom/bk_script_8bbacfc9cb254721ba43b510bccd5c8a.custom").Custom,
          "MyFormatter": require("custom/bk_script_8f1efcd166444c83bb98f1ac6fb868c4.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_a4dba819281c4cefb4f9daf58cfd98b7.draw_tool").DrawTool,
          "IonRangeSlider": require("custom/bk_script_f8f530827b6d40d0854e678ed2325104.ion_range_slider").IonRangeSlider
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label": function(require, module, exports) {
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
          "custom/bk_script_503def5dd0ce428b82af5a6e6f63b14a.surface3d": function(require, module, exports) {
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
          "custom/bk_script_8bbacfc9cb254721ba43b510bccd5c8a.custom": function(require, module, exports) {
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
          "custom/bk_script_8f1efcd166444c83bb98f1ac6fb868c4.my_formatter": function(require, module, exports) {
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
          "custom/bk_script_a4dba819281c4cefb4f9daf58cfd98b7.draw_tool": function(require, module, exports) {
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
          "custom/bk_script_f8f530827b6d40d0854e678ed2325104.ion_range_slider": function(require, module, exports) {
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
                    
                  var docs_json = '{"958e8a35-ee58-4d66-99dc-9d8438ce4b8c":{"roots":{"references":[{"attributes":{"data_source":{"id":"11b5ad4d-0705-4bdc-af5d-bfe7888436c9","type":"GeoJSONDataSource"},"glyph":{"id":"4e99f294-c2e3-4da0-90ea-e53e3d752ab4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aa0087c6-0220-4c5b-a5c1-3233633c9a2c","type":"Circle"},"selection_glyph":null,"view":{"id":"fd25b653-4e10-471d-bb96-77528dfc6568","type":"CDSView"}},"id":"2033ced0-d0a7-457e-afb4-96685854f85c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"eb8da6ee-0884-4c59-9425-8b64d80d9ecc","type":"BasicTickFormatter"},"plot":{"id":"30ce4917-f114-498b-b03f-be382f08c8aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"48d78659-ac15-4223-ab01-05a8ee7db6f7","type":"BasicTicker"}},"id":"a8ed93c9-3e27-4ef8-8460-c918318ed0b7","type":"LinearAxis"},{"attributes":{"formatter":{"id":"bd3067b1-3a4e-498b-a6ed-7dea1e9d1a9f","type":"BasicTickFormatter"},"plot":{"id":"30ce4917-f114-498b-b03f-be382f08c8aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ea01fa9-33f0-43dd-bb24-7ae11654c26c","type":"BasicTicker"}},"id":"8d248c48-b7ae-4064-8b4f-e5029413b822","type":"LinearAxis"},{"attributes":{},"id":"48d78659-ac15-4223-ab01-05a8ee7db6f7","type":"BasicTicker"},{"attributes":{},"id":"eb8da6ee-0884-4c59-9425-8b64d80d9ecc","type":"BasicTickFormatter"},{"attributes":{},"id":"31c3b0e5-7bf0-42d9-9fe8-e8b83a91f6a3","type":"HelpTool"},{"attributes":{},"id":"e1ffcfc4-c249-4833-beab-7357ef33a9bb","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cc0617ab-315f-4b7d-91fc-409ef4ca2949","type":"PanTool"},{"id":"e1ffcfc4-c249-4833-beab-7357ef33a9bb","type":"WheelZoomTool"},{"id":"f5da688e-bdef-4e58-96da-38cbbe8dcba3","type":"BoxZoomTool"},{"id":"3fc8bcdf-e58e-4074-95c1-b85e3adcc650","type":"SaveTool"},{"id":"94d35d89-241c-486b-9c11-ac20021f6a9c","type":"ResetTool"},{"id":"31c3b0e5-7bf0-42d9-9fe8-e8b83a91f6a3","type":"HelpTool"}]},"id":"404a9f20-01b0-4319-b14f-a84317673c2b","type":"Toolbar"},{"attributes":{"below":[{"id":"8d248c48-b7ae-4064-8b4f-e5029413b822","type":"LinearAxis"}],"left":[{"id":"a8ed93c9-3e27-4ef8-8460-c918318ed0b7","type":"LinearAxis"}],"renderers":[{"id":"8d248c48-b7ae-4064-8b4f-e5029413b822","type":"LinearAxis"},{"id":"608a537f-12a2-49fe-9018-481d7c3ee6d7","type":"Grid"},{"id":"a8ed93c9-3e27-4ef8-8460-c918318ed0b7","type":"LinearAxis"},{"id":"be679c32-6c3b-419f-93be-73348db253aa","type":"Grid"},{"id":"58402125-c593-474a-b3f3-5d24cc4f96b7","type":"BoxAnnotation"},{"id":"2033ced0-d0a7-457e-afb4-96685854f85c","type":"GlyphRenderer"}],"title":{"id":"96c2daeb-e5c4-49a2-a241-96753a0c781a","type":"Title"},"toolbar":{"id":"404a9f20-01b0-4319-b14f-a84317673c2b","type":"Toolbar"},"x_range":{"id":"bfdec774-7b77-4500-826b-c2c5eb3080ae","type":"DataRange1d"},"x_scale":{"id":"fa5af466-4164-421d-b56e-7dcd6dfd39fa","type":"LinearScale"},"y_range":{"id":"359cb256-4115-476b-b3d4-308f90580462","type":"DataRange1d"},"y_scale":{"id":"a09aa4c9-e6ed-4d61-b2ef-7fc2ff18ba91","type":"LinearScale"}},"id":"30ce4917-f114-498b-b03f-be382f08c8aa","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"96c2daeb-e5c4-49a2-a241-96753a0c781a","type":"Title"},{"attributes":{"overlay":{"id":"58402125-c593-474a-b3f3-5d24cc4f96b7","type":"BoxAnnotation"}},"id":"f5da688e-bdef-4e58-96da-38cbbe8dcba3","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"30ce4917-f114-498b-b03f-be382f08c8aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"48d78659-ac15-4223-ab01-05a8ee7db6f7","type":"BasicTicker"}},"id":"be679c32-6c3b-419f-93be-73348db253aa","type":"Grid"},{"attributes":{},"id":"bd3067b1-3a4e-498b-a6ed-7dea1e9d1a9f","type":"BasicTickFormatter"},{"attributes":{},"id":"cc0617ab-315f-4b7d-91fc-409ef4ca2949","type":"PanTool"},{"attributes":{"plot":{"id":"30ce4917-f114-498b-b03f-be382f08c8aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ea01fa9-33f0-43dd-bb24-7ae11654c26c","type":"BasicTicker"}},"id":"608a537f-12a2-49fe-9018-481d7c3ee6d7","type":"Grid"},{"attributes":{"callback":null,"geojson":"{\\"type\\":\\"FeatureCollection\\",\\"features\\":[{\\"type\\":\\"Feature\\",\\"id\\":\\"463098\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-2.1208465099334717,51.4613151550293]},\\"properties\\":{\\"OrganisationCode\\":\\"Q64\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Bath, Gloucestershire, Swindon And Wiltshire Area Team\\",\\"Address1\\":\\"1st Floor\\",\\"Address2\\":\\"Bewley House\\",\\"Address3\\":\\"Marshfield Road\\",\\"City\\":\\"Chippenham\\",\\"County\\":\\"Wiltshire\\",\\"Postcode\\":\\"SN15 1JW\\",\\"Phone\\":\\"0113 8251 500\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/south/south/bgsw-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463099\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-2.5929524898529053,51.459877014160156]},\\"properties\\":{\\"OrganisationCode\\":\\"Q65\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Bristol, North Somerset, Somerset And South Gloucestershire Area Team\\",\\"Address1\\":\\"South Plaza\\",\\"Address3\\":\\"Marlborough Street\\",\\"City\\":\\"Bristol\\",\\"County\\":\\"Somerset\\",\\"Postcode\\":\\"BS1 3NX\\",\\"Phone\\":\\"0117 976 6600\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/south/south/bnsssg-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463100\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-4.232546806335449,50.42112731933594]},\\"properties\\":{\\"OrganisationCode\\":\\"Q66\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Devon, Cornwall And Isles Of Scilly Area Team\\",\\"Address1\\":\\"Peninsula House\\",\\"Address2\\":\\"Kingsmill Road\\",\\"Address3\\":\\"Tamar View Industrial Estate\\",\\"City\\":\\"Cornwall\\",\\"County\\":\\"Cornwall\\",\\"Postcode\\":\\"PL12 6LE\\",\\"Phone\\":\\"01752 679250\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/south/south/dcis-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463101\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[0.27698493003845215,51.193748474121094]},\\"properties\\":{\\"OrganisationCode\\":\\"Q67\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Kent And Medway Area Team\\",\\"Address1\\":\\"Wharf House\\",\\"Address2\\":\\"Medway Wharf Road\\",\\"City\\":\\"Tonbridge\\",\\"County\\":\\"Kent\\",\\"Postcode\\":\\"TN9 1RE\\",\\"Phone\\":\\"01732 375200\\",\\"Email\\":\\"england.kentandmedwaybusinessoffice@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/south/south/km-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463102\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-0.1647440642118454,51.170936584472656]},\\"properties\\":{\\"OrganisationCode\\":\\"Q68\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Surrey And Sussex Area Team\\",\\"Address1\\":\\"York House\\",\\"Address2\\":\\"18-20 Massetts Road\\",\\"City\\":\\"Horley\\",\\"County\\":\\"Surrey\\",\\"Postcode\\":\\"RH6 7DE\\",\\"Phone\\":\\"01293 778899\\",\\"Email\\":\\"england.surreyandsussex-businessoffice@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/south/south/ss-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463103\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.2079498767852783,51.72844696044922]},\\"properties\\":{\\"OrganisationCode\\":\\"Q69\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Thames Valley Area Team\\",\\"Address1\\":\\"Jubilee House\\",\\"Address2\\":\\"5510 John Smith Drive\\",\\"Address3\\":\\"Oxford Business Park South\\",\\"City\\":\\"Cowley\\",\\"County\\":\\"Oxfordshire\\",\\"Postcode\\":\\"OX4 2LH\\",\\"Phone\\":\\"01865 963800\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/south/south/tv-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463104\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.4493359327316284,50.92325973510742]},\\"properties\\":{\\"OrganisationCode\\":\\"Q70\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Wessex Area Team\\",\\"Address2\\":\\"Oakley Road\\",\\"City\\":\\"Southampton\\",\\"County\\":\\"Hampshire\\",\\"Postcode\\":\\"SO16 4GX\\",\\"Phone\\":\\"023 8029 6914\\",\\"Email\\":\\"england.wessexpatientexperience@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/south/south/w-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463105\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-0.13727261126041412,51.49694061279297]},\\"properties\\":{\\"OrganisationCode\\":\\"Q71\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"London Area Team\\",\\"Address2\\":\\"2nd Floor, Southside\\",\\"Address3\\":\\"105 Victoria Street\\",\\"City\\":\\"London\\",\\"Postcode\\":\\"SW1E 6QT\\",\\"Phone\\":\\"0207 932 3700\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/london/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463120\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-2.5846381187438965,53.37392807006836]},\\"properties\\":{\\"OrganisationCode\\":\\"Q44\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Cheshire, Warrington And Wirral Area Team\\",\\"Address1\\":\\"NHS Quayside (NHS North West)\\",\\"Address2\\":\\"Wilderspool Park\\",\\"Address3\\":\\"Greensall Avenue\\",\\"City\\":\\"Warrington\\",\\"County\\":\\"Cheshire\\",\\"Postcode\\":\\"WA4 6HL\\",\\"Phone\\":\\"01925 406000\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/cww-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463121\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.5323498249053955,53.79779815673828]},\\"properties\\":{\\"OrganisationCode\\":\\"Q45\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Durham, Darlington And Tees Area Team\\",\\"Address1\\":\\"The Old Exchange\\",\\"Address2\\":\\"Barnard Street\\",\\"City\\":\\"Darlington\\",\\"County\\":\\"Durham\\",\\"Postcode\\":\\"LS2 7UE\\",\\"Phone\\":\\"0113 825 1609\\",\\"Email\\":\\"england.ddt-at-generalenquiries@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/ddt-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463122\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-2.233488082885742,53.47760009765625]},\\"properties\\":{\\"OrganisationCode\\":\\"Q46\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Greater Manchester Area Team\\",\\"Address1\\":\\"4th Floor\\",\\"Address2\\":\\"3 Picadilly Place\\",\\"Address3\\":\\"London Road\\",\\"City\\":\\"Manchester\\",\\"County\\":\\"Lancashire\\",\\"Postcode\\":\\"M1 3BN\\",\\"Phone\\":\\"0845 0500194\\",\\"Email\\":\\"nhse.gmat@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/gm-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463123\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-2.705566644668579,53.77775573730469]},\\"properties\\":{\\"OrganisationCode\\":\\"Q47\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Lancashire Area Team\\",\\"Address1\\":\\"Second Floor, Preston Business Centre\\",\\"Address2\\":\\"Watling Street Road\\",\\"Address3\\":\\"Fulwood\\",\\"City\\":\\"Preston\\",\\"County\\":\\"Lancashire\\",\\"Postcode\\":\\"PR2 8DY\\",\\"Phone\\":\\"01772 420150\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/lanc-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463124\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-2.9802029132843018,53.38481903076172]},\\"properties\\":{\\"OrganisationCode\\":\\"Q48\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Merseyside Area Team\\",\\"Address1\\":\\"Regatta Place\\",\\"Address2\\":\\"Summers Road\\",\\"Address3\\":\\"Brunswick Business Park\\",\\"City\\":\\"Liverpool\\",\\"County\\":\\"Merseyside\\",\\"Postcode\\":\\"L3 4BL\\",\\"Phone\\":\\"0151 285 4777\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/mers-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463125\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.7141016721725464,54.96938705444336]},\\"properties\\":{\\"OrganisationCode\\":\\"Q49\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Cumbria, Northumberland, Tyne And Wear Area Team\\",\\"Address1\\":\\"Waterfront\\",\\"Address2\\":\\"4 Goldcrest Way\\",\\"Address3\\":\\"Newburn\\",\\"City\\":\\"Newcastle Upon Tyne\\",\\"County\\":\\"Tyne and Wear\\",\\"Postcode\\":\\"NE15 8NY\\",\\"Phone\\":\\"01912 106400\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/cntw-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463126\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.0497655868530273,53.989986419677734]},\\"properties\\":{\\"OrganisationCode\\":\\"Q50\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"North Yorkshire And Humber Area Team\\",\\"Address1\\":\\"Unit 3\\",\\"Address2\\":\\"Alpha Court\\",\\"Address3\\":\\"Monks Cross\\",\\"City\\":\\"York\\",\\"County\\":\\"North Yorkshire\\",\\"Postcode\\":\\"YO32 9WN\\",\\"Phone\\":\\"0113 825 1845\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/nyh-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463127\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.2550956010818481,53.42157745361328]},\\"properties\\":{\\"OrganisationCode\\":\\"Q51\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"South Yorkshire And Bassetlaw Area Team\\",\\"Address1\\":\\"Oak House\\",\\"Address2\\":\\"Moorhead Way\\",\\"Address3\\":\\"Bramley\\",\\"City\\":\\"Rotherham\\",\\"County\\":\\"South Yorkshire\\",\\"Postcode\\":\\"S66 1YY\\",\\"Phone\\":\\"01709 302000\\",\\"Email\\":\\"england.syb-businessoffice@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/syb-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463128\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.544582486152649,53.78975296020508]},\\"properties\\":{\\"OrganisationCode\\":\\"Q52\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"West Yorkshire Area Team\\",\\"Address1\\":\\"3 Leeds City Office Park\\",\\"Address2\\":\\"Meadow Lane\\",\\"City\\":\\"Leeds\\",\\"County\\":\\"West Yorkshire\\",\\"Postcode\\":\\"LS11 5BD\\",\\"Phone\\":\\"0113 8252700\\",\\"Email\\":\\"reception.westyorkshireareateam@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/north/north/wy-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463129\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-2.1813161373138428,52.18680953979492]},\\"properties\\":{\\"OrganisationCode\\":\\"Q53\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Arden, Herefordshire And Worcestershire Area Team\\",\\"Address2\\":\\"Wildwood\\",\\"Address3\\":\\"Wildwood Drive\\",\\"City\\":\\"Worcester\\",\\"County\\":\\"Worcestershire\\",\\"Postcode\\":\\"WR5 2LG\\",\\"Phone\\":\\"0113 825 3099\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/mids-east/mids-east-3/ahw-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463130\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.9351675510406494,52.471920013427734]},\\"properties\\":{\\"OrganisationCode\\":\\"Q54\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Birmingham And The Black Country Area Team\\",\\"Address1\\":\\"St Chads Court\\",\\"Address2\\":\\"213 Hagley Road\\",\\"Address3\\":\\"Edgbaston\\",\\"City\\":\\"Birmingham\\",\\"County\\":\\"West Midlands\\",\\"Postcode\\":\\"B16 9RG\\",\\"Phone\\":\\"0121 695 2222\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/mids-east/mids-east-3/bsbc-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463131\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.1435775756835938,53.12958526611328]},\\"properties\\":{\\"OrganisationCode\\":\\"Q55\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Derbyshire And Nottinghamshire Area Team\\",\\"Address1\\":\\"Birch House\\",\\"Address2\\":\\"Ransom Wood Business Park\\",\\"Address3\\":\\"Southwell Road West, Rainworth\\",\\"City\\":\\"Nottingham\\",\\"County\\":\\"Nottinghamshire\\",\\"Postcode\\":\\"NG21 0HJ\\",\\"Phone\\":\\"0300 300 1234\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/mids-east/mids-east-3/dn-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463132\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[0.19126050174236298,52.18547821044922]},\\"properties\\":{\\"OrganisationCode\\":\\"Q56\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"East Anglia Area Team\\",\\"Address1\\":\\"CPC1\\",\\"Address2\\":\\"Capital Business Park\\",\\"Address3\\":\\"Fulbourn\\",\\"City\\":\\"Cambridge\\",\\"County\\":\\"Cambridgeshire\\",\\"Postcode\\":\\"CB21 5XE\\",\\"Phone\\":\\"01223 708700\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/mids-east/mids-east-3/ea-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463133\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[0.5076583027839661,51.74932098388672]},\\"properties\\":{\\"OrganisationCode\\":\\"Q57\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Essex Area Team\\",\\"Address1\\":\\"Swift House\\",\\"Address2\\":\\"Hedgerows Business Park\\",\\"Address3\\":\\"Colchester Road, Springfield\\",\\"City\\":\\"Chelmsford\\",\\"County\\":\\"Essex\\",\\"Postcode\\":\\"CM2 5PF\\",\\"Phone\\":\\"01245 398770\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/mids-east/mids-east-3/essex-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463134\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-0.20884820818901062,51.8019905090332]},\\"properties\\":{\\"OrganisationCode\\":\\"Q58\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Hertfordshire And The South Midlands Area Team\\",\\"Address1\\":\\"Charter House\\",\\"Address2\\":\\"Parkway\\",\\"City\\":\\"Welwyn Garden City\\",\\"County\\":\\"Hertfordshire\\",\\"Postcode\\":\\"AL8 6JL\\",\\"Phone\\":\\"01707 390855\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/mids-east/mids-east-3/hsm-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463135\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.189500093460083,52.593223571777344]},\\"properties\\":{\\"OrganisationCode\\":\\"Q59\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Leicestershire And Lincolnshire Area Team\\",\\"Address1\\":\\"Fosse House\\",\\"Address2\\":\\"6 Smith Way\\",\\"Address3\\":\\"Grove Park, Enderby\\",\\"City\\":\\"Leicester\\",\\"County\\":\\"Leicestershire\\",\\"Postcode\\":\\"LE19 1SX\\",\\"Phone\\":\\"0116 295 7500\\",\\"Email\\":\\"england.leicsandlincsareateam@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/mids-east/mids-east-3/ll-at/\\"}},{\\"type\\":\\"Feature\\",\\"id\\":\\"463136\\",\\"geometry\\":{\\"type\\":\\"Point\\",\\"coordinates\\":[-1.9140186309814453,52.7487907409668]},\\"properties\\":{\\"OrganisationCode\\":\\"Q60\\",\\"OrganisationType\\":\\"Area Team\\",\\"SubType\\":\\"UNKNOWN\\",\\"OrganisationStatus\\":\\"Visible\\",\\"IsPimsManaged\\":\\"True\\",\\"OrganisationName\\":\\"Shropshire And Staffordshire Area Team\\",\\"Address1\\":\\"Anglesey House,\\",\\"Address2\\":\\"Wheelhouse Road,\\",\\"Address3\\":\\"Towers Plaza,\\",\\"City\\":\\"Rugeley,\\",\\"County\\":\\"Staffordshire\\",\\"Postcode\\":\\"WS15 1UL\\",\\"Phone\\":\\"0300 7900233\\",\\"Email\\":\\"england.contactus@nhs.net\\",\\"Website\\":\\"http://www.england.nhs.uk/mids-east/mids-east-3/ss-at/\\"}}]}\\n"},"id":"11b5ad4d-0705-4bdc-af5d-bfe7888436c9","type":"GeoJSONDataSource"},{"attributes":{},"id":"94d35d89-241c-486b-9c11-ac20021f6a9c","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58402125-c593-474a-b3f3-5d24cc4f96b7","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.9},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.9},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e99f294-c2e3-4da0-90ea-e53e3d752ab4","type":"Circle"},{"attributes":{},"id":"fa5af466-4164-421d-b56e-7dcd6dfd39fa","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa0087c6-0220-4c5b-a5c1-3233633c9a2c","type":"Circle"},{"attributes":{},"id":"3fc8bcdf-e58e-4074-95c1-b85e3adcc650","type":"SaveTool"},{"attributes":{"callback":null},"id":"bfdec774-7b77-4500-826b-c2c5eb3080ae","type":"DataRange1d"},{"attributes":{},"id":"6ea01fa9-33f0-43dd-bb24-7ae11654c26c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"359cb256-4115-476b-b3d4-308f90580462","type":"DataRange1d"},{"attributes":{"source":{"id":"11b5ad4d-0705-4bdc-af5d-bfe7888436c9","type":"GeoJSONDataSource"}},"id":"fd25b653-4e10-471d-bb96-77528dfc6568","type":"CDSView"},{"attributes":{},"id":"a09aa4c9-e6ed-4d61-b2ef-7fc2ff18ba91","type":"LinearScale"}],"root_ids":["30ce4917-f114-498b-b03f-be382f08c8aa"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"958e8a35-ee58-4d66-99dc-9d8438ce4b8c","elementid":"857fb3c6-8d8f-4a3d-9f5c-df541f1aa1c7","modelid":"30ce4917-f114-498b-b03f-be382f08c8aa"}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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