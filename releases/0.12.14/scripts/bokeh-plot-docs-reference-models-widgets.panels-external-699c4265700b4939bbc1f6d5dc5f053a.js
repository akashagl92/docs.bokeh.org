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
      };var element = document.getElementById("b3bf4e9e-19ef-4f9e-b0f3-35ba36fd8e2f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b3bf4e9e-19ef-4f9e-b0f3-35ba36fd8e2f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"02e3a301-a701-4fa8-809e-b7c1dd37bcc8":{"roots":{"references":[{"attributes":{"callback":null},"id":"e01be644-1e86-4fb4-a266-50debe25fd35","type":"DataRange1d"},{"attributes":{},"id":"f945c481-5554-4683-8098-6c9ce55c7b57","type":"LinearScale"},{"attributes":{},"id":"89f221d0-6b6c-4959-a729-dfe7ac0b0919","type":"BasicTicker"},{"attributes":{},"id":"bd896719-5d12-4595-a406-5c53e7bd2a06","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9dd613c3-793e-438e-b864-65fae3e4cfc9","type":"Circle"},{"attributes":{"child":{"id":"d62a2f61-eb67-4761-a3c6-6bce373af547","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"71d4ca81-5774-404b-9ab7-213aa8b3748a","type":"Panel"},{"attributes":{"below":[{"id":"f0460d84-ce1f-4521-b2fa-c93a0f7478b4","type":"LinearAxis"}],"left":[{"id":"c3ac200b-244f-4ea5-bf66-df4cd3d1c280","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f0460d84-ce1f-4521-b2fa-c93a0f7478b4","type":"LinearAxis"},{"id":"b81d2ec2-5a51-4f5f-80cf-cb11a6ea044d","type":"Grid"},{"id":"c3ac200b-244f-4ea5-bf66-df4cd3d1c280","type":"LinearAxis"},{"id":"bf290120-378a-4dcf-a2a4-b2fd8612c955","type":"Grid"},{"id":"f279fbdb-090c-4ede-9a87-9e0c1d3d8de5","type":"BoxAnnotation"},{"id":"1c2cb75c-0faa-4a77-ba10-bea3d66bbd46","type":"GlyphRenderer"}],"title":{"id":"286d3862-dd6c-4dbb-90bd-7ed05daca07e","type":"Title"},"toolbar":{"id":"e54dbf8d-671c-42cc-874e-197c90fdb688","type":"Toolbar"},"x_range":{"id":"e01be644-1e86-4fb4-a266-50debe25fd35","type":"DataRange1d"},"x_scale":{"id":"f945c481-5554-4683-8098-6c9ce55c7b57","type":"LinearScale"},"y_range":{"id":"0fbc230e-ead5-44fa-8bdc-2466e1339a62","type":"DataRange1d"},"y_scale":{"id":"130da8d1-80b9-417c-8e2e-c5c42213ee5d","type":"LinearScale"}},"id":"d62a2f61-eb67-4761-a3c6-6bce373af547","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"695691ec-3326-4e3a-a835-18753fc276e4","type":"ColumnDataSource"},{"attributes":{},"id":"65755cb5-61ae-4ebc-8ad7-86ffbc78c667","type":"WheelZoomTool"},{"attributes":{},"id":"b2997f2d-142e-4758-9c03-8c9fa997791c","type":"SaveTool"},{"attributes":{},"id":"3aaca4eb-1dce-46e6-9aaa-951e851c7824","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"69142e42-23da-4acf-acbc-a6476cc6f844","type":"PanTool"},{"id":"8b953f87-1c02-4bb3-a981-a3180d4128e5","type":"WheelZoomTool"},{"id":"60812b94-d3cf-4abc-9840-6bb4d3402e26","type":"BoxZoomTool"},{"id":"b2997f2d-142e-4758-9c03-8c9fa997791c","type":"SaveTool"},{"id":"f78d9100-5ecd-4b9a-817c-b303269450e3","type":"ResetTool"},{"id":"574e093d-ff60-48e3-bd45-d00ddb337253","type":"HelpTool"}]},"id":"e54dbf8d-671c-42cc-874e-197c90fdb688","type":"Toolbar"},{"attributes":{"formatter":{"id":"94f32904-8734-4484-9c22-f2a8870000f2","type":"BasicTickFormatter"},"plot":{"id":"d62a2f61-eb67-4761-a3c6-6bce373af547","subtype":"Figure","type":"Plot"},"ticker":{"id":"89f221d0-6b6c-4959-a729-dfe7ac0b0919","type":"BasicTicker"}},"id":"f0460d84-ce1f-4521-b2fa-c93a0f7478b4","type":"LinearAxis"},{"attributes":{},"id":"95f381a5-45d4-44c2-b0c1-148a9f129d49","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"45acc2d3-7d7e-4da7-b819-9826b2e20f27","type":"Line"},{"attributes":{"below":[{"id":"de11177b-8daf-491a-b7e5-deeef653681e","type":"LinearAxis"}],"left":[{"id":"84198db6-ad7b-4e2b-b868-d4081981f460","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"de11177b-8daf-491a-b7e5-deeef653681e","type":"LinearAxis"},{"id":"4ac8d267-9f08-421f-97d6-7847fbd54b6b","type":"Grid"},{"id":"84198db6-ad7b-4e2b-b868-d4081981f460","type":"LinearAxis"},{"id":"bc9ca653-511f-4755-ac8c-caa5ef5ba145","type":"Grid"},{"id":"40004853-5194-4765-8eb3-ec95b2b3081b","type":"BoxAnnotation"},{"id":"df67a3be-8d37-4330-86cc-f2b59c61ce1c","type":"GlyphRenderer"}],"title":{"id":"f479dc72-d9b4-4442-889f-b41e0c4cf485","type":"Title"},"toolbar":{"id":"e3aca451-ac09-4e28-bc0d-ee5f2e4c0220","type":"Toolbar"},"x_range":{"id":"683de900-d1ed-4e42-a406-5a5b2fb90e5c","type":"DataRange1d"},"x_scale":{"id":"b65eefa9-0af3-4007-883c-bd0c6fcc1c82","type":"LinearScale"},"y_range":{"id":"41c1dc3e-0899-4ed7-af19-464041625f7c","type":"DataRange1d"},"y_scale":{"id":"6dbc0d97-6df1-433b-990f-6081633aecda","type":"LinearScale"}},"id":"4f3230ad-cd87-4886-98f2-fbeacafe1f8c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8b953f87-1c02-4bb3-a981-a3180d4128e5","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"71d4ca81-5774-404b-9ab7-213aa8b3748a","type":"Panel"},{"id":"2c2815b9-da47-4b11-aa88-c962260b81bf","type":"Panel"}]},"id":"43a9cf4d-c1f4-4d42-b5e8-e75417e569b8","type":"Tabs"},{"attributes":{},"id":"0c372f48-bc2c-4e91-b915-8fbc8061a742","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1060e4a0-c984-4510-9602-ad66f03fb601","type":"PanTool"},{"id":"65755cb5-61ae-4ebc-8ad7-86ffbc78c667","type":"WheelZoomTool"},{"id":"f0b957be-ae1a-4fc6-8765-11ffa5f5081e","type":"BoxZoomTool"},{"id":"3aaca4eb-1dce-46e6-9aaa-951e851c7824","type":"SaveTool"},{"id":"9003fe53-673d-4bb5-85a0-7d42945e2251","type":"ResetTool"},{"id":"0c372f48-bc2c-4e91-b915-8fbc8061a742","type":"HelpTool"}]},"id":"e3aca451-ac09-4e28-bc0d-ee5f2e4c0220","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"d62a2f61-eb67-4761-a3c6-6bce373af547","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfca7eb3-0460-48f6-9527-237718cca953","type":"BasicTicker"}},"id":"bf290120-378a-4dcf-a2a4-b2fd8612c955","type":"Grid"},{"attributes":{"child":{"id":"4f3230ad-cd87-4886-98f2-fbeacafe1f8c","subtype":"Figure","type":"Plot"},"title":"line"},"id":"2c2815b9-da47-4b11-aa88-c962260b81bf","type":"Panel"},{"attributes":{"dimension":1,"plot":{"id":"4f3230ad-cd87-4886-98f2-fbeacafe1f8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7ef443d-79b6-4110-9e51-b741b70d5d7e","type":"BasicTicker"}},"id":"bc9ca653-511f-4755-ac8c-caa5ef5ba145","type":"Grid"},{"attributes":{"callback":null},"id":"41c1dc3e-0899-4ed7-af19-464041625f7c","type":"DataRange1d"},{"attributes":{},"id":"1060e4a0-c984-4510-9602-ad66f03fb601","type":"PanTool"},{"attributes":{},"id":"130da8d1-80b9-417c-8e2e-c5c42213ee5d","type":"LinearScale"},{"attributes":{"formatter":{"id":"de57f448-07d7-4f3b-a502-ea9aa38ef130","type":"BasicTickFormatter"},"plot":{"id":"4f3230ad-cd87-4886-98f2-fbeacafe1f8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"95f381a5-45d4-44c2-b0c1-148a9f129d49","type":"BasicTicker"}},"id":"de11177b-8daf-491a-b7e5-deeef653681e","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"286d3862-dd6c-4dbb-90bd-7ed05daca07e","type":"Title"},{"attributes":{"plot":{"id":"4f3230ad-cd87-4886-98f2-fbeacafe1f8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"95f381a5-45d4-44c2-b0c1-148a9f129d49","type":"BasicTicker"}},"id":"4ac8d267-9f08-421f-97d6-7847fbd54b6b","type":"Grid"},{"attributes":{"data_source":{"id":"0f3514cf-0902-4916-b185-7d3dc7d73916","type":"ColumnDataSource"},"glyph":{"id":"9dd613c3-793e-438e-b864-65fae3e4cfc9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20ba6488-5bb4-4b01-a6a8-e6635c22b9e4","type":"Circle"},"selection_glyph":null,"view":{"id":"7f8e01ad-c103-48ea-af05-08edd4433824","type":"CDSView"}},"id":"1c2cb75c-0faa-4a77-ba10-bea3d66bbd46","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"40004853-5194-4765-8eb3-ec95b2b3081b","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"683de900-d1ed-4e42-a406-5a5b2fb90e5c","type":"DataRange1d"},{"attributes":{"overlay":{"id":"f279fbdb-090c-4ede-9a87-9e0c1d3d8de5","type":"BoxAnnotation"}},"id":"60812b94-d3cf-4abc-9840-6bb4d3402e26","type":"BoxZoomTool"},{"attributes":{},"id":"f78d9100-5ecd-4b9a-817c-b303269450e3","type":"ResetTool"},{"attributes":{"source":{"id":"0f3514cf-0902-4916-b185-7d3dc7d73916","type":"ColumnDataSource"}},"id":"7f8e01ad-c103-48ea-af05-08edd4433824","type":"CDSView"},{"attributes":{},"id":"69142e42-23da-4acf-acbc-a6476cc6f844","type":"PanTool"},{"attributes":{"callback":null},"id":"0fbc230e-ead5-44fa-8bdc-2466e1339a62","type":"DataRange1d"},{"attributes":{"formatter":{"id":"bd896719-5d12-4595-a406-5c53e7bd2a06","type":"BasicTickFormatter"},"plot":{"id":"4f3230ad-cd87-4886-98f2-fbeacafe1f8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7ef443d-79b6-4110-9e51-b741b70d5d7e","type":"BasicTicker"}},"id":"84198db6-ad7b-4e2b-b868-d4081981f460","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"20ba6488-5bb4-4b01-a6a8-e6635c22b9e4","type":"Circle"},{"attributes":{},"id":"6dbc0d97-6df1-433b-990f-6081633aecda","type":"LinearScale"},{"attributes":{},"id":"9003fe53-673d-4bb5-85a0-7d42945e2251","type":"ResetTool"},{"attributes":{"formatter":{"id":"e5700c3f-5c7c-4556-b399-e3f1e2d24b92","type":"BasicTickFormatter"},"plot":{"id":"d62a2f61-eb67-4761-a3c6-6bce373af547","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfca7eb3-0460-48f6-9527-237718cca953","type":"BasicTicker"}},"id":"c3ac200b-244f-4ea5-bf66-df4cd3d1c280","type":"LinearAxis"},{"attributes":{},"id":"c7ef443d-79b6-4110-9e51-b741b70d5d7e","type":"BasicTicker"},{"attributes":{"overlay":{"id":"40004853-5194-4765-8eb3-ec95b2b3081b","type":"BoxAnnotation"}},"id":"f0b957be-ae1a-4fc6-8765-11ffa5f5081e","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"f479dc72-d9b4-4442-889f-b41e0c4cf485","type":"Title"},{"attributes":{},"id":"574e093d-ff60-48e3-bd45-d00ddb337253","type":"HelpTool"},{"attributes":{},"id":"b65eefa9-0af3-4007-883c-bd0c6fcc1c82","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f279fbdb-090c-4ede-9a87-9e0c1d3d8de5","type":"BoxAnnotation"},{"attributes":{},"id":"de57f448-07d7-4f3b-a502-ea9aa38ef130","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"695691ec-3326-4e3a-a835-18753fc276e4","type":"ColumnDataSource"}},"id":"d5935104-855a-450a-bf1d-3cb1ec4527e9","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"b9fb9189-4f51-400d-aa42-b544cff9f308","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"0f3514cf-0902-4916-b185-7d3dc7d73916","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d62a2f61-eb67-4761-a3c6-6bce373af547","subtype":"Figure","type":"Plot"},"ticker":{"id":"89f221d0-6b6c-4959-a729-dfe7ac0b0919","type":"BasicTicker"}},"id":"b81d2ec2-5a51-4f5f-80cf-cb11a6ea044d","type":"Grid"},{"attributes":{},"id":"cfca7eb3-0460-48f6-9527-237718cca953","type":"BasicTicker"},{"attributes":{"data_source":{"id":"695691ec-3326-4e3a-a835-18753fc276e4","type":"ColumnDataSource"},"glyph":{"id":"b9fb9189-4f51-400d-aa42-b544cff9f308","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"45acc2d3-7d7e-4da7-b819-9826b2e20f27","type":"Line"},"selection_glyph":null,"view":{"id":"d5935104-855a-450a-bf1d-3cb1ec4527e9","type":"CDSView"}},"id":"df67a3be-8d37-4330-86cc-f2b59c61ce1c","type":"GlyphRenderer"},{"attributes":{},"id":"94f32904-8734-4484-9c22-f2a8870000f2","type":"BasicTickFormatter"},{"attributes":{},"id":"e5700c3f-5c7c-4556-b399-e3f1e2d24b92","type":"BasicTickFormatter"}],"root_ids":["43a9cf4d-c1f4-4d42-b5e8-e75417e569b8"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"02e3a301-a701-4fa8-809e-b7c1dd37bcc8","elementid":"b3bf4e9e-19ef-4f9e-b0f3-35ba36fd8e2f","modelid":"43a9cf4d-c1f4-4d42-b5e8-e75417e569b8"}];
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