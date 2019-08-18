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
      };var element = document.getElementById("c96bb617-6506-492a-b366-b5a2133d0669");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c96bb617-6506-492a-b366-b5a2133d0669' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"024da8d1-8542-4828-8d30-0d6be2b32091":{"roots":{"references":[{"attributes":{"data_source":{"id":"b2b53edf-1817-4db7-a242-5a460abbfa3a","type":"ColumnDataSource"},"glyph":{"id":"aac1937e-ac8d-4800-af30-7c2841eef08b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35b15346-5555-405b-8025-fb57f8e26f42","type":"Line"},"selection_glyph":null,"view":{"id":"7dab7b50-ad16-4cd1-9b2a-28f519d17a69","type":"CDSView"}},"id":"2a0ffe06-bd48-4e8b-a626-312bbaa2bc7d","type":"GlyphRenderer"},{"attributes":{},"id":"6c9e946d-0db4-4f56-b5a3-7624d7cf107d","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"5f457018-e9b7-42fc-bb2f-957e17a78759","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1ab0bea4-8299-42a0-83b0-d90bcf19feb4","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35b15346-5555-405b-8025-fb57f8e26f42","type":"Line"},{"attributes":{"num_minor_ticks":10},"id":"97d1e36f-868d-4379-8612-247c0f0723ff","type":"LogTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"93435c12-c808-42e4-9496-6e9eb92e18d1","type":"ColumnDataSource"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"59ac206f-b382-489c-bcec-ffad3616fbcf","type":"Line"},{"attributes":{"data_source":{"id":"1bccd384-6092-4095-b7b3-15e669e2989a","type":"ColumnDataSource"},"glyph":{"id":"59ac206f-b382-489c-bcec-ffad3616fbcf","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f457018-e9b7-42fc-bb2f-957e17a78759","type":"Line"},"selection_glyph":null,"view":{"id":"6d9edabf-d446-47ef-8891-6c0db7adaa7e","type":"CDSView"}},"id":"766a20c3-82ed-4543-ba68-3364f6e515c3","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"8d258310-8761-470a-b195-1de96e35bea8","type":"Line"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"766a20c3-82ed-4543-ba68-3364f6e515c3","type":"GlyphRenderer"}]},"id":"29b1fd6e-53ec-467e-a4cd-be38b9271dff","type":"LegendItem"},{"attributes":{"plot":{"id":"e5df288b-6cde-406c-a267-e0ac1846f56f","subtype":"Figure","type":"Plot"},"ticker":{"id":"90c3f860-0673-47de-8c2e-0efc8f12fa33","type":"BasicTicker"}},"id":"30d13e9d-199e-4ca1-88f2-f03a9c2fa59b","type":"Grid"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"2a0ffe06-bd48-4e8b-a626-312bbaa2bc7d","type":"GlyphRenderer"}]},"id":"1800cb1b-a358-4421-845f-aa7dacffe269","type":"LegendItem"},{"attributes":{"axis_label":"sections","formatter":{"id":"d068ed1e-2295-4746-bcb0-65c0658aba7d","type":"BasicTickFormatter"},"plot":{"id":"e5df288b-6cde-406c-a267-e0ac1846f56f","subtype":"Figure","type":"Plot"},"ticker":{"id":"90c3f860-0673-47de-8c2e-0efc8f12fa33","type":"BasicTicker"}},"id":"9c27e473-ced1-42b6-a3b7-2ecd9195f52b","type":"LinearAxis"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"43607f74-01c6-4d4d-bb07-f136dfcf7a07","type":"GlyphRenderer"},{"id":"a424bb85-2801-4949-b02a-6fbf0e39dba6","type":"GlyphRenderer"}]},"id":"6b6cd3dd-f4eb-4269-ba81-fcf7003ee8d6","type":"LegendItem"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"a0d6b84b-cd31-48c6-af69-865960355e04","type":"GlyphRenderer"},{"id":"8f1f4859-8ddf-495c-9adc-e3a32624a905","type":"GlyphRenderer"}]},"id":"6dfcb456-c94c-4d50-88d6-375c21524758","type":"LegendItem"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"aac1937e-ac8d-4800-af30-7c2841eef08b","type":"Line"},{"attributes":{},"id":"06f9473f-da0b-46b8-aa03-0ad89062eb83","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"29f2599c-e0b3-42e0-857f-7ea50253976a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"93435c12-c808-42e4-9496-6e9eb92e18d1","type":"ColumnDataSource"},"glyph":{"id":"faa88efd-ac6e-495a-b94e-e8eb89e6a9d9","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22a1277a-ffb5-4c07-af44-ef5975b5f81a","type":"Line"},"selection_glyph":null,"view":{"id":"687ccb2f-e44c-4fb4-9f98-81149ddc48c1","type":"CDSView"}},"id":"43607f74-01c6-4d4d-bb07-f136dfcf7a07","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"949a52e4-1a76-4064-b1f6-5dd62888d343","type":"ColumnDataSource"},"glyph":{"id":"7765cdb7-a06b-470f-aa7c-0bc5675ba0c1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8d258310-8761-470a-b195-1de96e35bea8","type":"Line"},"selection_glyph":null,"view":{"id":"00385053-2006-4057-afcb-151e5e7d8c96","type":"CDSView"}},"id":"a0d6b84b-cd31-48c6-af69-865960355e04","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"bcf0123e-e78b-4db1-a67a-ea7b22a7afd4","type":"DataRange1d"},{"attributes":{"source":{"id":"29f2599c-e0b3-42e0-857f-7ea50253976a","type":"ColumnDataSource"}},"id":"787cb918-0573-4281-95e7-ac8eb9db928e","type":"CDSView"},{"attributes":{"source":{"id":"b2b53edf-1817-4db7-a242-5a460abbfa3a","type":"ColumnDataSource"}},"id":"7dab7b50-ad16-4cd1-9b2a-28f519d17a69","type":"CDSView"},{"attributes":{},"id":"90c3f860-0673-47de-8c2e-0efc8f12fa33","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"949a52e4-1a76-4064-b1f6-5dd62888d343","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"9c27e473-ced1-42b6-a3b7-2ecd9195f52b","type":"LinearAxis"}],"left":[{"id":"65f801c7-8182-42a6-a1f2-e986816124cf","type":"LogAxis"}],"renderers":[{"id":"9c27e473-ced1-42b6-a3b7-2ecd9195f52b","type":"LinearAxis"},{"id":"30d13e9d-199e-4ca1-88f2-f03a9c2fa59b","type":"Grid"},{"id":"65f801c7-8182-42a6-a1f2-e986816124cf","type":"LogAxis"},{"id":"6951757a-6bae-466d-bd7f-7ac6da74e830","type":"Grid"},{"id":"1ab0bea4-8299-42a0-83b0-d90bcf19feb4","type":"BoxAnnotation"},{"id":"cf8d3da9-d726-4a52-92a7-0ad35802a712","type":"Legend"},{"id":"43607f74-01c6-4d4d-bb07-f136dfcf7a07","type":"GlyphRenderer"},{"id":"a424bb85-2801-4949-b02a-6fbf0e39dba6","type":"GlyphRenderer"},{"id":"2a0ffe06-bd48-4e8b-a626-312bbaa2bc7d","type":"GlyphRenderer"},{"id":"a0d6b84b-cd31-48c6-af69-865960355e04","type":"GlyphRenderer"},{"id":"8f1f4859-8ddf-495c-9adc-e3a32624a905","type":"GlyphRenderer"},{"id":"766a20c3-82ed-4543-ba68-3364f6e515c3","type":"GlyphRenderer"}],"title":{"id":"9a0b8363-e788-44d6-8180-4e949e691d60","type":"Title"},"toolbar":{"id":"6c19dd3f-27a2-45b2-8e84-8dec4b2cbb2f","type":"Toolbar"},"x_range":{"id":"bcf0123e-e78b-4db1-a67a-ea7b22a7afd4","type":"DataRange1d"},"x_scale":{"id":"1b093dee-a9a8-4f5a-b5be-d78d6eb7f197","type":"LinearScale"},"y_range":{"id":"de8bc83f-800e-4c7e-82db-29023498b5a7","type":"Range1d"},"y_scale":{"id":"d386dbdf-c424-4599-9712-e005e03577e3","type":"LogScale"}},"id":"e5df288b-6cde-406c-a267-e0ac1846f56f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"136c82ba-31ae-42dc-9cd9-950556fdfa8d","type":"PanTool"},{"attributes":{"source":{"id":"1bccd384-6092-4095-b7b3-15e669e2989a","type":"ColumnDataSource"}},"id":"6d9edabf-d446-47ef-8891-6c0db7adaa7e","type":"CDSView"},{"attributes":{"data_source":{"id":"c489c37a-58c1-4b01-85c0-cd3bb89ba1d0","type":"ColumnDataSource"},"glyph":{"id":"f7fccb8d-9b1d-480e-a83b-d69dd0c492c3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0edfc6d6-ee41-405f-9fe6-f9d5acec930e","type":"Circle"},"selection_glyph":null,"view":{"id":"2d8a30e1-6b89-4bf2-aad2-db782c40dcc8","type":"CDSView"}},"id":"8f1f4859-8ddf-495c-9adc-e3a32624a905","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93435c12-c808-42e4-9496-6e9eb92e18d1","type":"ColumnDataSource"}},"id":"687ccb2f-e44c-4fb4-9f98-81149ddc48c1","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"b2b53edf-1817-4db7-a242-5a460abbfa3a","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"6b6cd3dd-f4eb-4269-ba81-fcf7003ee8d6","type":"LegendItem"},{"id":"1800cb1b-a358-4421-845f-aa7dacffe269","type":"LegendItem"},{"id":"6dfcb456-c94c-4d50-88d6-375c21524758","type":"LegendItem"},{"id":"29b1fd6e-53ec-467e-a4cd-be38b9271dff","type":"LegendItem"}],"plot":{"id":"e5df288b-6cde-406c-a267-e0ac1846f56f","subtype":"Figure","type":"Plot"}},"id":"cf8d3da9-d726-4a52-92a7-0ad35802a712","type":"Legend"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"de8bc83f-800e-4c7e-82db-29023498b5a7","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"22a1277a-ffb5-4c07-af44-ef5975b5f81a","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"1bccd384-6092-4095-b7b3-15e669e2989a","type":"ColumnDataSource"},{"attributes":{},"id":"1b093dee-a9a8-4f5a-b5be-d78d6eb7f197","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"0edfc6d6-ee41-405f-9fe6-f9d5acec930e","type":"Circle"},{"attributes":{},"id":"d386dbdf-c424-4599-9712-e005e03577e3","type":"LogScale"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"65b356e1-9321-46e5-abcf-c251320203b7","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"c489c37a-58c1-4b01-85c0-cd3bb89ba1d0","type":"ColumnDataSource"},{"attributes":{"axis_label":"particles","formatter":{"id":"b38e2d38-1382-434a-bb76-e3b751e0cd11","type":"LogTickFormatter"},"plot":{"id":"e5df288b-6cde-406c-a267-e0ac1846f56f","subtype":"Figure","type":"Plot"},"ticker":{"id":"97d1e36f-868d-4379-8612-247c0f0723ff","type":"LogTicker"}},"id":"65f801c7-8182-42a6-a1f2-e986816124cf","type":"LogAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"9650bd52-91f4-479c-b74f-f62a840fe9b0","type":"Circle"},{"attributes":{"overlay":{"id":"1ab0bea4-8299-42a0-83b0-d90bcf19feb4","type":"BoxAnnotation"}},"id":"f0f2b1ce-4299-425b-b94a-1dcc77f66337","type":"BoxZoomTool"},{"attributes":{"ticker":null},"id":"b38e2d38-1382-434a-bb76-e3b751e0cd11","type":"LogTickFormatter"},{"attributes":{"plot":null,"text":"log axis example"},"id":"9a0b8363-e788-44d6-8180-4e949e691d60","type":"Title"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"7765cdb7-a06b-470f-aa7c-0bc5675ba0c1","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"faa88efd-ac6e-495a-b94e-e8eb89e6a9d9","type":"Line"},{"attributes":{"source":{"id":"c489c37a-58c1-4b01-85c0-cd3bb89ba1d0","type":"ColumnDataSource"}},"id":"2d8a30e1-6b89-4bf2-aad2-db782c40dcc8","type":"CDSView"},{"attributes":{"data_source":{"id":"29f2599c-e0b3-42e0-857f-7ea50253976a","type":"ColumnDataSource"},"glyph":{"id":"65b356e1-9321-46e5-abcf-c251320203b7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9650bd52-91f4-479c-b74f-f62a840fe9b0","type":"Circle"},"selection_glyph":null,"view":{"id":"787cb918-0573-4281-95e7-ac8eb9db928e","type":"CDSView"}},"id":"a424bb85-2801-4949-b02a-6fbf0e39dba6","type":"GlyphRenderer"},{"attributes":{"source":{"id":"949a52e4-1a76-4064-b1f6-5dd62888d343","type":"ColumnDataSource"}},"id":"00385053-2006-4057-afcb-151e5e7d8c96","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7fccb8d-9b1d-480e-a83b-d69dd0c492c3","type":"Circle"},{"attributes":{},"id":"d068ed1e-2295-4746-bcb0-65c0658aba7d","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"136c82ba-31ae-42dc-9cd9-950556fdfa8d","type":"PanTool"},{"id":"f0f2b1ce-4299-425b-b94a-1dcc77f66337","type":"BoxZoomTool"},{"id":"6c9e946d-0db4-4f56-b5a3-7624d7cf107d","type":"ResetTool"},{"id":"06f9473f-da0b-46b8-aa03-0ad89062eb83","type":"SaveTool"}]},"id":"6c19dd3f-27a2-45b2-8e84-8dec4b2cbb2f","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"e5df288b-6cde-406c-a267-e0ac1846f56f","subtype":"Figure","type":"Plot"},"ticker":{"id":"97d1e36f-868d-4379-8612-247c0f0723ff","type":"LogTicker"}},"id":"6951757a-6bae-466d-bd7f-7ac6da74e830","type":"Grid"}],"root_ids":["e5df288b-6cde-406c-a267-e0ac1846f56f"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"024da8d1-8542-4828-8d30-0d6be2b32091","elementid":"c96bb617-6506-492a-b366-b5a2133d0669","modelid":"e5df288b-6cde-406c-a267-e0ac1846f56f"}];
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