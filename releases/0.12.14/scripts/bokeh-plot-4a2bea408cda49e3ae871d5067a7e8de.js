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
      };var element = document.getElementById("6d4a1923-d536-40e8-83d0-b4ce896a6451");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d4a1923-d536-40e8-83d0-b4ce896a6451' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8c721322-9d02-42cc-a193-79b417462508":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9b661d83-e815-4ccb-ae08-eed4a5306f6c","type":"BoxAnnotation"},{"attributes":{},"id":"b72af10f-bf0a-46d2-890b-5893dbdfe117","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"a881dac4-b5ff-4c41-b75d-cb01c903962a","type":"ColumnDataSource"}},"id":"b13897c9-73e8-44bd-830a-2a074aa3dc3d","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"a881dac4-b5ff-4c41-b75d-cb01c903962a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"a600c6f7-e13a-437e-8ea8-1cf4242c673b","type":"Circle"},{"attributes":{"formatter":{"id":"b72af10f-bf0a-46d2-890b-5893dbdfe117","type":"BasicTickFormatter"},"plot":{"id":"8d81b1da-aa0e-4d44-96bb-3851e1922778","subtype":"Figure","type":"Plot"},"ticker":{"id":"34a8aac7-588c-4648-9ca1-d1fe3ce21bfb","type":"BasicTicker"}},"id":"246f7ca2-0448-4fc7-8160-de07e4d24170","type":"LinearAxis"},{"attributes":{"formatter":{"id":"39b53719-38f0-48eb-9a70-81c3fc30ba5a","type":"BasicTickFormatter"},"plot":{"id":"8d81b1da-aa0e-4d44-96bb-3851e1922778","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e7fa6c6-350b-4c3d-9754-dfcec4335fd0","type":"BasicTicker"}},"id":"4564ccbe-a088-4634-b876-e73aaac2ea66","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"8260701e-2e2e-4e7c-80a6-cdfc309db74b","type":"Circle"},{"attributes":{},"id":"adac2a41-5059-429d-bf10-6107eee086e9","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0913f388-ad68-4a05-8d79-71288e8becf8","type":"BoxAnnotation"},{"attributes":{},"id":"cbb84e5f-9c2b-4563-b3be-b19d1a59021e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"8d81b1da-aa0e-4d44-96bb-3851e1922778","subtype":"Figure","type":"Plot"},"ticker":{"id":"34a8aac7-588c-4648-9ca1-d1fe3ce21bfb","type":"BasicTicker"}},"id":"212d640b-110d-4fe8-a790-35be731ffb4c","type":"Grid"},{"attributes":{},"id":"fd4998b6-13d7-47fe-953b-5861c59b8a85","type":"HelpTool"},{"attributes":{},"id":"34a8aac7-588c-4648-9ca1-d1fe3ce21bfb","type":"BasicTicker"},{"attributes":{"plot":{"id":"8d81b1da-aa0e-4d44-96bb-3851e1922778","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e7fa6c6-350b-4c3d-9754-dfcec4335fd0","type":"BasicTicker"}},"id":"c178212c-ac14-4f59-85ea-dd91aa47ed48","type":"Grid"},{"attributes":{},"id":"5e7fa6c6-350b-4c3d-9754-dfcec4335fd0","type":"BasicTicker"},{"attributes":{},"id":"f989290b-c5b9-41b7-94a6-77ae58299941","type":"LinearScale"},{"attributes":{"plot":{"id":"57b1dbb0-80fe-4fa2-8f36-ebba1773ab5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"cbb84e5f-9c2b-4563-b3be-b19d1a59021e","type":"BasicTicker"}},"id":"73ff2d5e-0c6d-4486-9e52-947f31956027","type":"Grid"},{"attributes":{"callback":null},"id":"56189a01-c0f5-4d67-ba03-d056cc9beba6","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"8a71c5e4-b5e5-401e-93ec-f9e3ec77d011","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"fe27812e-a30e-4286-9ea9-a8640f743369","type":"DataRange1d"},{"attributes":{"children":[{"id":"57b1dbb0-80fe-4fa2-8f36-ebba1773ab5a","subtype":"Figure","type":"Plot"},{"id":"8d81b1da-aa0e-4d44-96bb-3851e1922778","subtype":"Figure","type":"Plot"}]},"id":"b5742aa9-1a10-47f2-9052-b87a12c37930","type":"Row"},{"attributes":{"children":[{"id":"eb543b2f-dca5-4eab-9992-439eac3713d0","type":"ToolbarBox"},{"id":"b122067b-c909-4fe8-976a-c2a9770a601d","type":"Column"}]},"id":"817faf30-9063-4900-b1e1-45ae6e51736d","type":"Column"},{"attributes":{},"id":"d6aa992a-42f1-483a-9dff-b80187d04507","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"0913f388-ad68-4a05-8d79-71288e8becf8","type":"BoxAnnotation"},"renderers":[{"id":"b3881de9-ab53-449d-a8a4-d34cd13e9292","type":"GlyphRenderer"}]},"id":"fe77f481-c9dc-481b-9f30-88a7b2209264","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"3edf0ffb-3642-40b1-8867-1769309655e9","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a881dac4-b5ff-4c41-b75d-cb01c903962a","type":"ColumnDataSource"},"glyph":{"id":"8260701e-2e2e-4e7c-80a6-cdfc309db74b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a600c6f7-e13a-437e-8ea8-1cf4242c673b","type":"Circle"},"selection_glyph":null,"view":{"id":"b13897c9-73e8-44bd-830a-2a074aa3dc3d","type":"CDSView"}},"id":"b3881de9-ab53-449d-a8a4-d34cd13e9292","type":"GlyphRenderer"},{"attributes":{},"id":"1e4e0a49-c7f2-4626-ab0a-7527f36789bf","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"93d75c92-232a-4b6c-b800-8f29f2a98b4d","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"eb543b2f-dca5-4eab-9992-439eac3713d0","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c55c0509-3cc7-45ed-aee8-92d244529f91","type":"BoxSelectTool"},{"id":"a15d9b5a-0f19-4bdb-aa63-5f55dc16d90b","type":"LassoSelectTool"},{"id":"95ef0e9e-0db8-4490-b34a-34dfc3970901","type":"HelpTool"}]},"id":"6d7defeb-e61c-4b63-af01-9ca7cd3322a8","type":"Toolbar"},{"attributes":{"callback":null},"id":"a1a3b5a1-eed6-416e-9238-55d671f6d2ff","type":"DataRange1d"},{"attributes":{"tools":[{"id":"c55c0509-3cc7-45ed-aee8-92d244529f91","type":"BoxSelectTool"},{"id":"a15d9b5a-0f19-4bdb-aa63-5f55dc16d90b","type":"LassoSelectTool"},{"id":"95ef0e9e-0db8-4490-b34a-34dfc3970901","type":"HelpTool"},{"id":"fe77f481-c9dc-481b-9f30-88a7b2209264","type":"BoxSelectTool"},{"id":"0c099bae-ea7d-4377-b6ad-c2be1b7a73d6","type":"LassoSelectTool"},{"id":"fd4998b6-13d7-47fe-953b-5861c59b8a85","type":"HelpTool"}]},"id":"93d75c92-232a-4b6c-b800-8f29f2a98b4d","type":"ProxyToolbar"},{"attributes":{"source":{"id":"a881dac4-b5ff-4c41-b75d-cb01c903962a","type":"ColumnDataSource"}},"id":"5599c20e-d8c5-4390-b8c5-9acd18419a58","type":"CDSView"},{"attributes":{},"id":"968a1a4f-dad6-4d22-9f70-aaf3936f0c8c","type":"BasicTicker"},{"attributes":{},"id":"39b53719-38f0-48eb-9a70-81c3fc30ba5a","type":"BasicTickFormatter"},{"attributes":{},"id":"95ef0e9e-0db8-4490-b34a-34dfc3970901","type":"HelpTool"},{"attributes":{"formatter":{"id":"797d00d9-74ea-4059-8bc3-9e1042b4e15b","type":"BasicTickFormatter"},"plot":{"id":"57b1dbb0-80fe-4fa2-8f36-ebba1773ab5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"cbb84e5f-9c2b-4563-b3be-b19d1a59021e","type":"BasicTicker"}},"id":"65d31906-fe72-4fd0-8f97-a057d34f2850","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fe77f481-c9dc-481b-9f30-88a7b2209264","type":"BoxSelectTool"},{"id":"0c099bae-ea7d-4377-b6ad-c2be1b7a73d6","type":"LassoSelectTool"},{"id":"fd4998b6-13d7-47fe-953b-5861c59b8a85","type":"HelpTool"}]},"id":"73d31d1a-6d77-4403-8f05-39bd265c4573","type":"Toolbar"},{"attributes":{"data_source":{"id":"a881dac4-b5ff-4c41-b75d-cb01c903962a","type":"ColumnDataSource"},"glyph":{"id":"69dd9a22-f617-4eff-9ef5-d1ff1c5b3ef7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e00154c6-16bf-44ee-b22b-ee5c60282496","type":"Circle"},"selection_glyph":null,"view":{"id":"5599c20e-d8c5-4390-b8c5-9acd18419a58","type":"CDSView"}},"id":"b46c79b5-0ab5-4ae8-8adf-538bce15abcc","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"e3022557-30a4-4398-9282-c464a00821eb","type":"PolyAnnotation"}},"id":"a15d9b5a-0f19-4bdb-aa63-5f55dc16d90b","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"b5742aa9-1a10-47f2-9052-b87a12c37930","type":"Row"}]},"id":"b122067b-c909-4fe8-976a-c2a9770a601d","type":"Column"},{"attributes":{"formatter":{"id":"1e4e0a49-c7f2-4626-ab0a-7527f36789bf","type":"BasicTickFormatter"},"plot":{"id":"57b1dbb0-80fe-4fa2-8f36-ebba1773ab5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"968a1a4f-dad6-4d22-9f70-aaf3936f0c8c","type":"BasicTicker"}},"id":"d035af44-05b3-4fc1-80d7-5baf077eb62f","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"8a71c5e4-b5e5-401e-93ec-f9e3ec77d011","type":"PolyAnnotation"}},"id":"0c099bae-ea7d-4377-b6ad-c2be1b7a73d6","type":"LassoSelectTool"},{"attributes":{},"id":"ecf0be02-ace4-4339-a3de-7e4f68641403","type":"LinearScale"},{"attributes":{"below":[{"id":"65d31906-fe72-4fd0-8f97-a057d34f2850","type":"LinearAxis"}],"left":[{"id":"d035af44-05b3-4fc1-80d7-5baf077eb62f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"65d31906-fe72-4fd0-8f97-a057d34f2850","type":"LinearAxis"},{"id":"73ff2d5e-0c6d-4486-9e52-947f31956027","type":"Grid"},{"id":"d035af44-05b3-4fc1-80d7-5baf077eb62f","type":"LinearAxis"},{"id":"91e5c80e-3b7f-4a6d-8824-5ac0c5747a99","type":"Grid"},{"id":"9b661d83-e815-4ccb-ae08-eed4a5306f6c","type":"BoxAnnotation"},{"id":"e3022557-30a4-4398-9282-c464a00821eb","type":"PolyAnnotation"},{"id":"b46c79b5-0ab5-4ae8-8adf-538bce15abcc","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6d7defeb-e61c-4b63-af01-9ca7cd3322a8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a1a3b5a1-eed6-416e-9238-55d671f6d2ff","type":"DataRange1d"},"x_scale":{"id":"adac2a41-5059-429d-bf10-6107eee086e9","type":"LinearScale"},"y_range":{"id":"3edf0ffb-3642-40b1-8867-1769309655e9","type":"DataRange1d"},"y_scale":{"id":"d6aa992a-42f1-483a-9dff-b80187d04507","type":"LinearScale"}},"id":"57b1dbb0-80fe-4fa2-8f36-ebba1773ab5a","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"57b1dbb0-80fe-4fa2-8f36-ebba1773ab5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"968a1a4f-dad6-4d22-9f70-aaf3936f0c8c","type":"BasicTicker"}},"id":"91e5c80e-3b7f-4a6d-8824-5ac0c5747a99","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"9b661d83-e815-4ccb-ae08-eed4a5306f6c","type":"BoxAnnotation"},"renderers":[{"id":"b46c79b5-0ab5-4ae8-8adf-538bce15abcc","type":"GlyphRenderer"}]},"id":"c55c0509-3cc7-45ed-aee8-92d244529f91","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"e3022557-30a4-4398-9282-c464a00821eb","type":"PolyAnnotation"},{"attributes":{},"id":"797d00d9-74ea-4059-8bc3-9e1042b4e15b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"e00154c6-16bf-44ee-b22b-ee5c60282496","type":"Circle"},{"attributes":{"below":[{"id":"4564ccbe-a088-4634-b876-e73aaac2ea66","type":"LinearAxis"}],"left":[{"id":"246f7ca2-0448-4fc7-8160-de07e4d24170","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4564ccbe-a088-4634-b876-e73aaac2ea66","type":"LinearAxis"},{"id":"c178212c-ac14-4f59-85ea-dd91aa47ed48","type":"Grid"},{"id":"246f7ca2-0448-4fc7-8160-de07e4d24170","type":"LinearAxis"},{"id":"212d640b-110d-4fe8-a790-35be731ffb4c","type":"Grid"},{"id":"0913f388-ad68-4a05-8d79-71288e8becf8","type":"BoxAnnotation"},{"id":"8a71c5e4-b5e5-401e-93ec-f9e3ec77d011","type":"PolyAnnotation"},{"id":"b3881de9-ab53-449d-a8a4-d34cd13e9292","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"73d31d1a-6d77-4403-8f05-39bd265c4573","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fe27812e-a30e-4286-9ea9-a8640f743369","type":"DataRange1d"},"x_scale":{"id":"ecf0be02-ace4-4339-a3de-7e4f68641403","type":"LinearScale"},"y_range":{"id":"56189a01-c0f5-4d67-ba03-d056cc9beba6","type":"DataRange1d"},"y_scale":{"id":"f989290b-c5b9-41b7-94a6-77ae58299941","type":"LinearScale"}},"id":"8d81b1da-aa0e-4d44-96bb-3851e1922778","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"69dd9a22-f617-4eff-9ef5-d1ff1c5b3ef7","type":"Circle"}],"root_ids":["817faf30-9063-4900-b1e1-45ae6e51736d"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"8c721322-9d02-42cc-a193-79b417462508","elementid":"6d4a1923-d536-40e8-83d0-b4ce896a6451","modelid":"817faf30-9063-4900-b1e1-45ae6e51736d"}];
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