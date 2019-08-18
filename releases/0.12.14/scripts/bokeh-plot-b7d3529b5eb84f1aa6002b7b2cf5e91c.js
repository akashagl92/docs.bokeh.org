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
      };var element = document.getElementById("a21883e1-d95e-4759-acfc-d0a63f5455a2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a21883e1-d95e-4759-acfc-d0a63f5455a2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3202d040-d085-4710-8b11-ffb516ef02ed":{"roots":{"references":[{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2f23ff0c-100d-4f8d-9079-0f9799f94d55","type":"Segment"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"mUN4OUvYA8BC8Tv369QFwDYJLZX8T/q/0CFVwkIw9b9ko5yNReXbv9jOnLSjbuO/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"NJI6wneu5r8S/QJE13zkv/J1ryS0sNE/7ify7HK93D/LTYAzwkT2P8R8xGqU6PM/","dtype":"float64","shape":[6]}}},"id":"7553d236-d256-4a90-b440-fea4bc76ddf2","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"3155248d-4216-49e0-8e41-38596d03e21a","type":"VBar"},{"attributes":{"source":{"id":"e3445d8a-0b9c-4dff-adc9-3138359e69d8","type":"ColumnDataSource"}},"id":"53497c7f-0f8e-4f65-b04a-a0ef29ce8416","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1fd9453b-ba53-4195-a236-2c02ede4e73b","type":"SaveTool"}]},"id":"30506d9f-3caf-4ac6-a264-fba92a2534f0","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"mUN4OUvYA8BC8Tv369QFwDYJLZX8T/q/0CFVwkIw9b9ko5yNReXbv9jOnLSjbuO/","dtype":"float64","shape":[6]}}},"id":"ae303bda-3845-43db-807a-bb2996b10322","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"dd5ee719-e655-4b3a-84ff-00b0c871107e","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"74b5a0c8-9df8-4e91-9004-3caba8294a6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"564a454e-55ae-4e5d-808b-9ed099feddaf","type":"CategoricalTicker"}},"id":"53eaf230-900b-4310-b45a-dcc9c08325f7","type":"CategoricalAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"ee277215-8fc9-4cf4-b6dc-0414aca0c3d6","type":"Segment"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"74b5a0c8-9df8-4e91-9004-3caba8294a6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"564a454e-55ae-4e5d-808b-9ed099feddaf","type":"CategoricalTicker"}},"id":"e7652ddd-148a-427f-9da0-5083ff10ee32","type":"Grid"},{"attributes":{"source":{"id":"af2761f7-604a-43cf-a591-7efc7014a6bd","type":"ColumnDataSource"}},"id":"f17fb729-581c-4821-bea9-8b4b97983b54","type":"CDSView"},{"attributes":{"source":{"id":"d0596e67-c552-4930-880a-f12e86717d5a","type":"ColumnDataSource"}},"id":"d9815db4-a568-4041-b16f-813756336981","type":"CDSView"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"03aaab3e-a9a2-4cd8-b89c-a72d0feff7bb","type":"FactorRange"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"87e0634c-d8b0-4f40-9d3f-eb6e7c55ac5d","type":"Segment"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e29266f0-f1b4-4392-b7b1-33dba4a2c524","type":"Segment"},{"attributes":{},"id":"7f1c8c8a-b7fb-4b65-8a1a-4734a95f03b9","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"hNZoAAI83j+R3ZrMYxLoP8BzzAsRdPs/hPzyDscZ+j8c+bf2vOEEQNM33QM5xQRA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"9H8A6k+2wr9gvvNHUlawP5hxwfIo7/A/SB6eCekd8D96mOoOXWAAQB7BTwrNkP4/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"d405f5e0-61d6-44b1-82fb-b04ea791e596","type":"ColumnDataSource"},{"attributes":{},"id":"ee604123-5ba6-4b49-afca-a9e4ccb88136","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"74b5a0c8-9df8-4e91-9004-3caba8294a6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee604123-5ba6-4b49-afca-a9e4ccb88136","type":"BasicTicker"}},"id":"20bedb7a-df03-44a2-83ca-045985993b87","type":"Grid"},{"attributes":{},"id":"dd5ee719-e655-4b3a-84ff-00b0c871107e","type":"CategoricalTickFormatter"},{"attributes":{"callback":null},"id":"d1a791be-978e-47e8-a409-1127485858a0","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c530f781-34a8-47b8-97d7-123c3d56cfa2","type":"Rect"},{"attributes":{},"id":"1fd9453b-ba53-4195-a236-2c02ede4e73b","type":"SaveTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"94f29c57-a5c5-405e-b4a4-bb5c5e1ef357","type":"VBar"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"53eaf230-900b-4310-b45a-dcc9c08325f7","type":"CategoricalAxis"}],"left":[{"id":"c3804e5d-b47f-4631-b70e-f186c0aa9d1f","type":"LinearAxis"}],"renderers":[{"id":"53eaf230-900b-4310-b45a-dcc9c08325f7","type":"CategoricalAxis"},{"id":"e7652ddd-148a-427f-9da0-5083ff10ee32","type":"Grid"},{"id":"c3804e5d-b47f-4631-b70e-f186c0aa9d1f","type":"LinearAxis"},{"id":"20bedb7a-df03-44a2-83ca-045985993b87","type":"Grid"},{"id":"890b5d7b-a2d0-424c-9650-6e0a5ba6fc77","type":"GlyphRenderer"},{"id":"736d9029-ed64-4a35-97e9-8b5159313c0b","type":"GlyphRenderer"},{"id":"737ff150-d7fb-4afc-a86b-92da199dfc14","type":"GlyphRenderer"},{"id":"850c3b39-8aa1-4c9c-a570-342467541e7e","type":"GlyphRenderer"},{"id":"6af22980-4532-41fd-b53c-59d6d0f783bc","type":"GlyphRenderer"},{"id":"98d6ed52-08f4-4ece-8a33-f8f114976e33","type":"GlyphRenderer"},{"id":"1db54036-77ba-4854-81a1-2dfd986e0a6a","type":"GlyphRenderer"}],"title":{"id":"7173b98b-e3cc-4b4d-a881-708f57027fdb","type":"Title"},"toolbar":{"id":"30506d9f-3caf-4ac6-a264-fba92a2534f0","type":"Toolbar"},"x_range":{"id":"03aaab3e-a9a2-4cd8-b89c-a72d0feff7bb","type":"FactorRange"},"x_scale":{"id":"9c200cc7-6d54-4fc4-82be-7d8095deb0b1","type":"CategoricalScale"},"y_range":{"id":"d1a791be-978e-47e8-a409-1127485858a0","type":"DataRange1d"},"y_scale":{"id":"7f1c8c8a-b7fb-4b65-8a1a-4734a95f03b9","type":"LinearScale"}},"id":"74b5a0c8-9df8-4e91-9004-3caba8294a6b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9c200cc7-6d54-4fc4-82be-7d8095deb0b1","type":"CategoricalScale"},{"attributes":{},"id":"8c2d1305-1136-4602-937a-4dc0d070e18b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d405f5e0-61d6-44b1-82fb-b04ea791e596","type":"ColumnDataSource"},"glyph":{"id":"8075dbc8-b40b-4a2b-b1b6-685ca06ddd4b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94f29c57-a5c5-405e-b4a4-bb5c5e1ef357","type":"VBar"},"selection_glyph":null,"view":{"id":"1a92f343-3404-4283-be71-b9d03c46de1b","type":"CDSView"}},"id":"737ff150-d7fb-4afc-a86b-92da199dfc14","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"0d814c79-af04-4047-931e-0db6bc223146","type":"VBar"},{"attributes":{"plot":null,"text":""},"id":"7173b98b-e3cc-4b4d-a881-708f57027fdb","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd9c67fd-ef2b-4ec3-bed0-64cc04c8c034","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2066cb3a-7637-4218-99d6-0c3abf5c00e3","type":"Rect"},{"attributes":{"data_source":{"id":"90564f46-d9a1-4d64-bb3e-a7d159b4028b","type":"ColumnDataSource"},"glyph":{"id":"fd9c67fd-ef2b-4ec3-bed0-64cc04c8c034","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8048d41e-f2e0-4b2f-88ea-b0c69dad944b","type":"Rect"},"selection_glyph":null,"view":{"id":"4a67bf28-ed3e-4d24-a3ce-ea0efa43d010","type":"CDSView"}},"id":"98d6ed52-08f4-4ece-8a33-f8f114976e33","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"3Ln2iC30AUBi6WEZT7oGQJOq3ofz/w5AKFRCRrM8C0A32hVhY8ARQP7WypxPfxJA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"hNZoAAI83j+R3ZrMYxLoP8BzzAsRdPs/hPzyDscZ+j8c+bf2vOEEQNM33QM5xQRA","dtype":"float64","shape":[6]}}},"id":"af2761f7-604a-43cf-a591-7efc7014a6bd","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ae303bda-3845-43db-807a-bb2996b10322","type":"ColumnDataSource"}},"id":"d1530946-b3bc-40cc-a301-edd4f86c79a3","type":"CDSView"},{"attributes":{"data_source":{"id":"ae303bda-3845-43db-807a-bb2996b10322","type":"ColumnDataSource"},"glyph":{"id":"c530f781-34a8-47b8-97d7-123c3d56cfa2","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2066cb3a-7637-4218-99d6-0c3abf5c00e3","type":"Rect"},"selection_glyph":null,"view":{"id":"d1530946-b3bc-40cc-a301-edd4f86c79a3","type":"CDSView"}},"id":"6af22980-4532-41fd-b53c-59d6d0f783bc","type":"GlyphRenderer"},{"attributes":{},"id":"564a454e-55ae-4e5d-808b-9ed099feddaf","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8048d41e-f2e0-4b2f-88ea-b0c69dad944b","type":"Rect"},{"attributes":{"source":{"id":"90564f46-d9a1-4d64-bb3e-a7d159b4028b","type":"ColumnDataSource"}},"id":"4a67bf28-ed3e-4d24-a3ce-ea0efa43d010","type":"CDSView"},{"attributes":{"source":{"id":"7553d236-d256-4a90-b440-fea4bc76ddf2","type":"ColumnDataSource"}},"id":"f33c81cb-11e7-4fe9-9161-5e66df493738","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"3Ln2iC30AUBi6WEZT7oGQJOq3ofz/w5AKFRCRrM8C0A32hVhY8ARQP7WypxPfxJA","dtype":"float64","shape":[6]}}},"id":"90564f46-d9a1-4d64-bb3e-a7d159b4028b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","a","b","b","b","b","b","c","d","d","d","d","d","d","d","e","e","e","f"],"y":[2.4990745328615684,-2.585106721776876,3.0386859512698385,-3.021904932156367,-2.7573095233987464,3.0647438472062687,-2.7880364039105965,3.94652147617953,3.518134465406861,3.462038606179118,-1.5708209656871412,-1.5474687913877498,-1.3550898515129726,3.995404325209963,3.415397808582316,-0.6654909257732897,5.37254952481739,4.595954639089969,4.984047479551148]}},"id":"d0596e67-c552-4930-880a-f12e86717d5a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8c2d1305-1136-4602-937a-4dc0d070e18b","type":"BasicTickFormatter"},"plot":{"id":"74b5a0c8-9df8-4e91-9004-3caba8294a6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee604123-5ba6-4b49-afca-a9e4ccb88136","type":"BasicTicker"}},"id":"c3804e5d-b47f-4631-b70e-f186c0aa9d1f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7553d236-d256-4a90-b440-fea4bc76ddf2","type":"ColumnDataSource"},"glyph":{"id":"87e0634c-d8b0-4f40-9d3f-eb6e7c55ac5d","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee277215-8fc9-4cf4-b6dc-0414aca0c3d6","type":"Segment"},"selection_glyph":null,"view":{"id":"f33c81cb-11e7-4fe9-9161-5e66df493738","type":"CDSView"}},"id":"736d9029-ed64-4a35-97e9-8b5159313c0b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d0596e67-c552-4930-880a-f12e86717d5a","type":"ColumnDataSource"},"glyph":{"id":"5d544649-25bf-40a5-be3a-a9ab237a6fe8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dd3445dd-9bd3-4ed5-8095-a43161403069","type":"Circle"},"selection_glyph":null,"view":{"id":"d9815db4-a568-4041-b16f-813756336981","type":"CDSView"}},"id":"1db54036-77ba-4854-81a1-2dfd986e0a6a","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"8075dbc8-b40b-4a2b-b1b6-685ca06ddd4b","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"9H8A6k+2wr9gvvNHUlawP5hxwfIo7/A/SB6eCekd8D96mOoOXWAAQB7BTwrNkP4/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"NJI6wneu5r8S/QJE13zkv/J1ryS0sNE/7ify7HK93D/LTYAzwkT2P8R8xGqU6PM/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"e3445d8a-0b9c-4dff-adc9-3138359e69d8","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d544649-25bf-40a5-be3a-a9ab237a6fe8","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd3445dd-9bd3-4ed5-8095-a43161403069","type":"Circle"},{"attributes":{"data_source":{"id":"af2761f7-604a-43cf-a591-7efc7014a6bd","type":"ColumnDataSource"},"glyph":{"id":"2f23ff0c-100d-4f8d-9079-0f9799f94d55","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e29266f0-f1b4-4392-b7b1-33dba4a2c524","type":"Segment"},"selection_glyph":null,"view":{"id":"f17fb729-581c-4821-bea9-8b4b97983b54","type":"CDSView"}},"id":"890b5d7b-a2d0-424c-9650-6e0a5ba6fc77","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d405f5e0-61d6-44b1-82fb-b04ea791e596","type":"ColumnDataSource"}},"id":"1a92f343-3404-4283-be71-b9d03c46de1b","type":"CDSView"},{"attributes":{"data_source":{"id":"e3445d8a-0b9c-4dff-adc9-3138359e69d8","type":"ColumnDataSource"},"glyph":{"id":"3155248d-4216-49e0-8e41-38596d03e21a","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0d814c79-af04-4047-931e-0db6bc223146","type":"VBar"},"selection_glyph":null,"view":{"id":"53497c7f-0f8e-4f65-b04a-a0ef29ce8416","type":"CDSView"}},"id":"850c3b39-8aa1-4c9c-a570-342467541e7e","type":"GlyphRenderer"}],"root_ids":["74b5a0c8-9df8-4e91-9004-3caba8294a6b"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"3202d040-d085-4710-8b11-ffb516ef02ed","elementid":"a21883e1-d95e-4759-acfc-d0a63f5455a2","modelid":"74b5a0c8-9df8-4e91-9004-3caba8294a6b"}];
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