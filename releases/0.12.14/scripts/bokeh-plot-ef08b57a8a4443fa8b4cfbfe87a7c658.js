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
      };var element = document.getElementById("6bb39f39-2264-4f4a-a380-778faedd0348");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6bb39f39-2264-4f4a-a380-778faedd0348' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d4be6440-6044-4724-8ca3-75bc6f56cb69":{"roots":{"references":[{"attributes":{"source":{"id":"4870f4d4-479d-40d9-bd82-4bdd05eaf5e5","type":"ColumnDataSource"}},"id":"3fd6153b-668d-49f1-bbc6-4da8b7236776","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"329bf192-8dd0-4398-b4c5-b3f75a6dbfb1","subtype":"Figure","type":"Plot"},"ticker":{"id":"c27b2983-ddb1-4cd4-97d8-cd4e1e36fd17","type":"BasicTicker"}},"id":"8da749ad-ced5-4f2a-bb2d-9fe310c87bfb","type":"Grid"},{"attributes":{"formatter":{"id":"f023d146-caec-4326-b16b-ed7161e3e1a5","type":"BasicTickFormatter"},"plot":{"id":"329bf192-8dd0-4398-b4c5-b3f75a6dbfb1","subtype":"Figure","type":"Plot"},"ticker":{"id":"c27b2983-ddb1-4cd4-97d8-cd4e1e36fd17","type":"BasicTicker"}},"id":"069fe04a-d7d5-4f78-a2e4-d09c25de0e6c","type":"LinearAxis"},{"attributes":{},"id":"c5d727ea-a5bc-4aea-ac6e-5c5910478ca7","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ea79d6e-fbd3-466d-9e55-65b33bc50de2","type":"Circle"},{"attributes":{},"id":"23fa3960-98df-4462-a03a-6f182dc97760","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"4870f4d4-479d-40d9-bd82-4bdd05eaf5e5","type":"ColumnDataSource"},{"attributes":{},"id":"b29ad488-02cf-4d07-bd19-cdc4dfded537","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"388af4e9-85ae-44e0-9052-20e38fe554b3","type":"Circle"},{"attributes":{},"id":"c27b2983-ddb1-4cd4-97d8-cd4e1e36fd17","type":"BasicTicker"},{"attributes":{},"id":"b93cc5c2-b815-415c-a377-a7443ca7eca5","type":"LinearScale"},{"attributes":{"plot":{"id":"329bf192-8dd0-4398-b4c5-b3f75a6dbfb1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a94eeac-ca16-4020-ad9e-4ac1dd0a9f51","type":"BasicTicker"}},"id":"6d5bb118-5f70-4261-b573-371012322ee4","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f71b2df5-0fd4-472c-b4ca-ebbc1e0f0ede","type":"PanTool"},{"id":"f3a0725f-7ec1-437e-aefa-a5d7d2a2414f","type":"WheelZoomTool"},{"id":"ee6baf86-48fc-4aeb-b944-00268ae4169a","type":"BoxZoomTool"},{"id":"5a96db27-fdff-4854-83fb-a01252c6f197","type":"SaveTool"},{"id":"6b637804-6b9d-48eb-9293-2ed3d2db7b3b","type":"ResetTool"},{"id":"4433fdb9-9000-464c-814c-0a0044026d6d","type":"HelpTool"}]},"id":"06c8a5eb-5cbe-4d1a-840e-deffac767a57","type":"Toolbar"},{"attributes":{"callback":null},"id":"faeb60e5-ec1b-4e7c-87cc-d5d67d3b78ba","type":"DataRange1d"},{"attributes":{},"id":"7f7904f9-679b-4ca0-96c6-cd39cdd26327","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"b8bd7602-72c9-4cec-995d-4f2328ae9ab8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d98bc4d-cdb5-49ea-a8eb-2711e99405d9","type":"BasicTicker"}},"id":"b0c7e423-1960-441a-b498-edbb3e8f9da9","type":"Grid"},{"attributes":{"callback":null},"id":"ccf85d94-f132-4b28-8da5-e4145a3d2346","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4870f4d4-479d-40d9-bd82-4bdd05eaf5e5","type":"ColumnDataSource"},"glyph":{"id":"388af4e9-85ae-44e0-9052-20e38fe554b3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7ea79d6e-fbd3-466d-9e55-65b33bc50de2","type":"Circle"},"selection_glyph":null,"view":{"id":"3fd6153b-668d-49f1-bbc6-4da8b7236776","type":"CDSView"}},"id":"c5bc3e67-1be5-4a76-8e24-acb6428f177b","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d5850a7b-4bb0-40b1-9d13-73156740787b","type":"ColumnDataSource"}},"id":"ce778782-9b1c-4687-a8c9-6421e299cbee","type":"CDSView"},{"attributes":{"children":[{"id":"329bf192-8dd0-4398-b4c5-b3f75a6dbfb1","subtype":"Figure","type":"Plot"},{"id":"b8bd7602-72c9-4cec-995d-4f2328ae9ab8","subtype":"Figure","type":"Plot"},{"id":"b03acdb7-6377-41aa-b0e5-5937228e5e20","subtype":"Figure","type":"Plot"}]},"id":"77c4c450-8e7b-44d5-92e0-9c2edd2b0e35","type":"Column"},{"attributes":{},"id":"6b637804-6b9d-48eb-9293-2ed3d2db7b3b","type":"ResetTool"},{"attributes":{},"id":"4522fc91-60ae-4f83-bafb-d75e7c2ae1bd","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"d5850a7b-4bb0-40b1-9d13-73156740787b","type":"ColumnDataSource"},{"attributes":{},"id":"f3a0725f-7ec1-437e-aefa-a5d7d2a2414f","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"73aed94b-f936-408a-97ba-1be5e677c887","type":"LinearAxis"}],"left":[{"id":"069fe04a-d7d5-4f78-a2e4-d09c25de0e6c","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"73aed94b-f936-408a-97ba-1be5e677c887","type":"LinearAxis"},{"id":"6d5bb118-5f70-4261-b573-371012322ee4","type":"Grid"},{"id":"069fe04a-d7d5-4f78-a2e4-d09c25de0e6c","type":"LinearAxis"},{"id":"8da749ad-ced5-4f2a-bb2d-9fe310c87bfb","type":"Grid"},{"id":"06a5fc93-9b9c-41d6-93ff-f35846ddfd74","type":"BoxAnnotation"},{"id":"c5bc3e67-1be5-4a76-8e24-acb6428f177b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"06c8a5eb-5cbe-4d1a-840e-deffac767a57","type":"Toolbar"},"x_range":{"id":"ccf85d94-f132-4b28-8da5-e4145a3d2346","type":"DataRange1d"},"x_scale":{"id":"b29ad488-02cf-4d07-bd19-cdc4dfded537","type":"LinearScale"},"y_range":{"id":"faeb60e5-ec1b-4e7c-87cc-d5d67d3b78ba","type":"DataRange1d"},"y_scale":{"id":"b93cc5c2-b815-415c-a377-a7443ca7eca5","type":"LinearScale"}},"id":"329bf192-8dd0-4398-b4c5-b3f75a6dbfb1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f023d146-caec-4326-b16b-ed7161e3e1a5","type":"BasicTickFormatter"},{"attributes":{},"id":"7a94eeac-ca16-4020-ad9e-4ac1dd0a9f51","type":"BasicTicker"},{"attributes":{"overlay":{"id":"512d92b1-d23b-4487-a53b-8b17b53d08f9","type":"BoxAnnotation"}},"id":"58ce2b61-f8f2-4687-b271-3d80424fddde","type":"BoxZoomTool"},{"attributes":{},"id":"452f4a95-b32e-4fe8-a786-d8cd024008cb","type":"ResetTool"},{"attributes":{"callback":null},"id":"bf335e25-4f1c-4361-8776-77678d86a362","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b05a47a5-1a6b-4023-b911-5f6d6a70f34d","type":"PanTool"},{"id":"06035805-5fd9-4509-b004-f0fefcb5f4f5","type":"WheelZoomTool"},{"id":"58ce2b61-f8f2-4687-b271-3d80424fddde","type":"BoxZoomTool"},{"id":"5a370f92-004b-4519-ac23-e51de733e2ec","type":"SaveTool"},{"id":"249cb3aa-6a13-4857-951b-af6305f2d81d","type":"ResetTool"},{"id":"29957a90-3b01-4390-be4b-1b0540cdcb74","type":"HelpTool"}]},"id":"3c652246-f816-41c5-9a96-1075f4ae097c","type":"Toolbar"},{"attributes":{},"id":"d09fda98-824e-401d-8299-2fe2777ca4ac","type":"SaveTool"},{"attributes":{"plot":{"id":"b03acdb7-6377-41aa-b0e5-5937228e5e20","subtype":"Figure","type":"Plot"},"ticker":{"id":"23fa3960-98df-4462-a03a-6f182dc97760","type":"BasicTicker"}},"id":"14b7a530-22f7-43bc-a847-92b7dc0d28e0","type":"Grid"},{"attributes":{"callback":null},"id":"6af7ebb4-3055-4668-b3ce-4948195d2a21","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7f7904f9-679b-4ca0-96c6-cd39cdd26327","type":"BasicTickFormatter"},"plot":{"id":"b03acdb7-6377-41aa-b0e5-5937228e5e20","subtype":"Figure","type":"Plot"},"ticker":{"id":"23fa3960-98df-4462-a03a-6f182dc97760","type":"BasicTicker"}},"id":"9a53b49c-6e75-492d-bf7e-a5fd38201eba","type":"LinearAxis"},{"attributes":{"overlay":{"id":"3ffda2a3-b5f5-4d7a-8378-2666569e1c2b","type":"BoxAnnotation"}},"id":"c28de745-b2b3-4c8f-bf90-95e8431954df","type":"BoxZoomTool"},{"attributes":{},"id":"5a96db27-fdff-4854-83fb-a01252c6f197","type":"SaveTool"},{"attributes":{},"id":"f71b2df5-0fd4-472c-b4ca-ebbc1e0f0ede","type":"PanTool"},{"attributes":{},"id":"1a272bd6-145b-4597-a7a5-3bb1d8b02e31","type":"BasicTickFormatter"},{"attributes":{},"id":"8d98bc4d-cdb5-49ea-a8eb-2711e99405d9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1a272bd6-145b-4597-a7a5-3bb1d8b02e31","type":"BasicTickFormatter"},"plot":{"id":"b8bd7602-72c9-4cec-995d-4f2328ae9ab8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d98bc4d-cdb5-49ea-a8eb-2711e99405d9","type":"BasicTicker"}},"id":"fbdd8ef0-757d-4e9d-aa64-9b6aafff852e","type":"LinearAxis"},{"attributes":{},"id":"06035805-5fd9-4509-b004-f0fefcb5f4f5","type":"WheelZoomTool"},{"attributes":{},"id":"f59843ad-5c0c-4a53-b625-ebfe99fac6ae","type":"LinearScale"},{"attributes":{},"id":"8bc3f8bc-ef45-4590-bf58-cf67ea0f2598","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d5850a7b-4bb0-40b1-9d13-73156740787b","type":"ColumnDataSource"},"glyph":{"id":"ba4413bc-c183-4e81-a352-7ccb0f800aa2","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1ff7a46d-1ce9-4ec5-a7d7-1071e3c6985c","type":"Square"},"selection_glyph":null,"view":{"id":"ce778782-9b1c-4687-a8c9-6421e299cbee","type":"CDSView"}},"id":"860d3503-6217-43e6-8fc9-2757c0202773","type":"GlyphRenderer"},{"attributes":{},"id":"25bbd54b-c3d8-41b2-b8a6-bf59521f0c2b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5b38c7d5-c5e2-4f2e-8347-e2d0985ee073","type":"BasicTickFormatter"},"plot":{"id":"b03acdb7-6377-41aa-b0e5-5937228e5e20","subtype":"Figure","type":"Plot"},"ticker":{"id":"8bc3f8bc-ef45-4590-bf58-cf67ea0f2598","type":"BasicTicker"}},"id":"98310a3d-dce5-4ce7-b982-ea0405e02bd9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba4413bc-c183-4e81-a352-7ccb0f800aa2","type":"Square"},{"attributes":{"source":{"id":"68c2193c-4a7f-4ce9-a935-80bc1ea9716a","type":"ColumnDataSource"}},"id":"16e5f518-20c5-4545-8299-a150d1dd3fa9","type":"CDSView"},{"attributes":{"callback":null},"id":"1275691f-45f9-47e5-9c62-14f01b2ec1ee","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0bc79fe2-cbc8-4e4d-b1a1-ead965a30621","type":"Triangle"},{"attributes":{},"id":"4433fdb9-9000-464c-814c-0a0044026d6d","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ff7a46d-1ce9-4ec5-a7d7-1071e3c6985c","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"b03acdb7-6377-41aa-b0e5-5937228e5e20","subtype":"Figure","type":"Plot"},"ticker":{"id":"8bc3f8bc-ef45-4590-bf58-cf67ea0f2598","type":"BasicTicker"}},"id":"577283f6-109a-4bda-b055-2d6ad7c27770","type":"Grid"},{"attributes":{},"id":"783348b1-408b-4372-b4ca-52b300f91604","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"06a5fc93-9b9c-41d6-93ff-f35846ddfd74","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"06a5fc93-9b9c-41d6-93ff-f35846ddfd74","type":"BoxAnnotation"}},"id":"ee6baf86-48fc-4aeb-b944-00268ae4169a","type":"BoxZoomTool"},{"attributes":{},"id":"17359e9d-ee89-446a-ae9d-b58f66e98fde","type":"PanTool"},{"attributes":{},"id":"669d24b8-6479-4cfc-ac4f-820c1191243c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c5d727ea-a5bc-4aea-ac6e-5c5910478ca7","type":"BasicTickFormatter"},"plot":{"id":"329bf192-8dd0-4398-b4c5-b3f75a6dbfb1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a94eeac-ca16-4020-ad9e-4ac1dd0a9f51","type":"BasicTicker"}},"id":"73aed94b-f936-408a-97ba-1be5e677c887","type":"LinearAxis"},{"attributes":{},"id":"5a370f92-004b-4519-ac23-e51de733e2ec","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"17359e9d-ee89-446a-ae9d-b58f66e98fde","type":"PanTool"},{"id":"e47f2c9a-999b-4a75-9802-798f7f21b52e","type":"WheelZoomTool"},{"id":"c28de745-b2b3-4c8f-bf90-95e8431954df","type":"BoxZoomTool"},{"id":"d09fda98-824e-401d-8299-2fe2777ca4ac","type":"SaveTool"},{"id":"452f4a95-b32e-4fe8-a786-d8cd024008cb","type":"ResetTool"},{"id":"4522fc91-60ae-4f83-bafb-d75e7c2ae1bd","type":"HelpTool"}]},"id":"0ce976f5-fae4-4cf3-baf9-6ca6cf99d111","type":"Toolbar"},{"attributes":{},"id":"249cb3aa-6a13-4857-951b-af6305f2d81d","type":"ResetTool"},{"attributes":{},"id":"29957a90-3b01-4390-be4b-1b0540cdcb74","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f02bc194-8aad-44d6-acbc-24af744205bf","type":"Triangle"},{"attributes":{},"id":"c57fb0c6-9461-4c85-a792-ee4e99b540b0","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ffda2a3-b5f5-4d7a-8378-2666569e1c2b","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"f5f29776-7dc7-4fa4-bd19-764f171119b1","type":"LinearAxis"}],"left":[{"id":"fbdd8ef0-757d-4e9d-aa64-9b6aafff852e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f5f29776-7dc7-4fa4-bd19-764f171119b1","type":"LinearAxis"},{"id":"1b4babf9-e426-4f70-9968-da0b1e326d2d","type":"Grid"},{"id":"fbdd8ef0-757d-4e9d-aa64-9b6aafff852e","type":"LinearAxis"},{"id":"b0c7e423-1960-441a-b498-edbb3e8f9da9","type":"Grid"},{"id":"512d92b1-d23b-4487-a53b-8b17b53d08f9","type":"BoxAnnotation"},{"id":"a844920b-d8b1-49e7-96fc-72b6ffe11935","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"3c652246-f816-41c5-9a96-1075f4ae097c","type":"Toolbar"},"x_range":{"id":"1275691f-45f9-47e5-9c62-14f01b2ec1ee","type":"DataRange1d"},"x_scale":{"id":"c57fb0c6-9461-4c85-a792-ee4e99b540b0","type":"LinearScale"},"y_range":{"id":"eed75bb0-c616-4ec7-9773-02e637d5534d","type":"DataRange1d"},"y_scale":{"id":"4be34d9d-8856-4357-8f46-dbef6bef168a","type":"LinearScale"}},"id":"b8bd7602-72c9-4cec-995d-4f2328ae9ab8","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"68c2193c-4a7f-4ce9-a935-80bc1ea9716a","type":"ColumnDataSource"},"glyph":{"id":"f02bc194-8aad-44d6-acbc-24af744205bf","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0bc79fe2-cbc8-4e4d-b1a1-ead965a30621","type":"Triangle"},"selection_glyph":null,"view":{"id":"16e5f518-20c5-4545-8299-a150d1dd3fa9","type":"CDSView"}},"id":"a844920b-d8b1-49e7-96fc-72b6ffe11935","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"669d24b8-6479-4cfc-ac4f-820c1191243c","type":"BasicTickFormatter"},"plot":{"id":"b8bd7602-72c9-4cec-995d-4f2328ae9ab8","subtype":"Figure","type":"Plot"},"ticker":{"id":"25bbd54b-c3d8-41b2-b8a6-bf59521f0c2b","type":"BasicTicker"}},"id":"f5f29776-7dc7-4fa4-bd19-764f171119b1","type":"LinearAxis"},{"attributes":{},"id":"4be34d9d-8856-4357-8f46-dbef6bef168a","type":"LinearScale"},{"attributes":{},"id":"b05a47a5-1a6b-4023-b911-5f6d6a70f34d","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"68c2193c-4a7f-4ce9-a935-80bc1ea9716a","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"9a53b49c-6e75-492d-bf7e-a5fd38201eba","type":"LinearAxis"}],"left":[{"id":"98310a3d-dce5-4ce7-b982-ea0405e02bd9","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9a53b49c-6e75-492d-bf7e-a5fd38201eba","type":"LinearAxis"},{"id":"14b7a530-22f7-43bc-a847-92b7dc0d28e0","type":"Grid"},{"id":"98310a3d-dce5-4ce7-b982-ea0405e02bd9","type":"LinearAxis"},{"id":"577283f6-109a-4bda-b055-2d6ad7c27770","type":"Grid"},{"id":"3ffda2a3-b5f5-4d7a-8378-2666569e1c2b","type":"BoxAnnotation"},{"id":"860d3503-6217-43e6-8fc9-2757c0202773","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"0ce976f5-fae4-4cf3-baf9-6ca6cf99d111","type":"Toolbar"},"x_range":{"id":"bf335e25-4f1c-4361-8776-77678d86a362","type":"DataRange1d"},"x_scale":{"id":"783348b1-408b-4372-b4ca-52b300f91604","type":"LinearScale"},"y_range":{"id":"6af7ebb4-3055-4668-b3ce-4948195d2a21","type":"DataRange1d"},"y_scale":{"id":"f59843ad-5c0c-4a53-b625-ebfe99fac6ae","type":"LinearScale"}},"id":"b03acdb7-6377-41aa-b0e5-5937228e5e20","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b8bd7602-72c9-4cec-995d-4f2328ae9ab8","subtype":"Figure","type":"Plot"},"ticker":{"id":"25bbd54b-c3d8-41b2-b8a6-bf59521f0c2b","type":"BasicTicker"}},"id":"1b4babf9-e426-4f70-9968-da0b1e326d2d","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"512d92b1-d23b-4487-a53b-8b17b53d08f9","type":"BoxAnnotation"},{"attributes":{},"id":"e47f2c9a-999b-4a75-9802-798f7f21b52e","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"eed75bb0-c616-4ec7-9773-02e637d5534d","type":"DataRange1d"},{"attributes":{},"id":"5b38c7d5-c5e2-4f2e-8347-e2d0985ee073","type":"BasicTickFormatter"}],"root_ids":["77c4c450-8e7b-44d5-92e0-9c2edd2b0e35"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"d4be6440-6044-4724-8ca3-75bc6f56cb69","elementid":"6bb39f39-2264-4f4a-a380-778faedd0348","modelid":"77c4c450-8e7b-44d5-92e0-9c2edd2b0e35"}];
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