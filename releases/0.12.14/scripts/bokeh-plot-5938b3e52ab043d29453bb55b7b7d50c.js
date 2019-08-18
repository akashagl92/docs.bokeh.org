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
      };var element = document.getElementById("935ef788-9b58-4b80-a38a-767b29344ce0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '935ef788-9b58-4b80-a38a-767b29344ce0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0bc2d38e-6be6-41db-ab39-7f44e0a4e93d":{"roots":{"references":[{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"0c5c4933-4d9c-49ff-abc8-28c791dd541c","type":"Title"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"e5b40302-f11c-4916-b616-286de658dd8d","type":"DaysTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f693d5ff-6781-4693-bf1d-ca63038ff5f6","type":"BoxAnnotation"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"90675d85-cb8b-41e8-a0fc-8a805c6fc616","type":"AdaptiveTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"b4e03346-0cb8-41c7-8d2d-218849a3cca3","type":"MonthsTicker"},{"attributes":{},"id":"5bd1623d-7a76-49a3-b3d4-8c958d3596f9","type":"ResetTool"},{"attributes":{},"id":"7899c703-62ba-44fc-85b7-b894d190888c","type":"SaveTool"},{"attributes":{"data_source":{"id":"192d7d8b-4a57-4d08-8d55-5af0fb942a24","type":"ColumnDataSource"},"glyph":{"id":"cf937076-5498-4f18-a521-001976eaec8c","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93ac6928-d050-4c06-aa6b-3d3e0fefef3d","type":"VBar"},"selection_glyph":null,"view":{"id":"b2bf7122-eea8-4713-a7f7-2e3c5785319e","type":"CDSView"}},"id":"612927be-15e0-4378-8761-e684af39a749","type":"GlyphRenderer"},{"attributes":{"days":[1,15]},"id":"d8e166c0-b257-4539-bba0-3f0a0345e8e1","type":"DaysTicker"},{"attributes":{},"id":"59767fc4-53c5-43ab-b33c-20c9a6b7b7d1","type":"LinearScale"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"91dfc942-42eb-474b-beb7-3a4eb277bd2e","subtype":"Figure","type":"Plot"},"ticker":{"id":"31be1b40-2c6f-456c-8843-889c00710105","type":"BasicTicker"}},"id":"373a2138-9d3f-420e-9736-1e97cdfcb9a8","type":"Grid"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"45d9ffd4-3a3c-44d7-ab5b-3ba797b515d7","type":"AdaptiveTicker"},{"id":"0f5469c0-764a-4785-b456-e3c138512265","type":"AdaptiveTicker"},{"id":"90675d85-cb8b-41e8-a0fc-8a805c6fc616","type":"AdaptiveTicker"},{"id":"e5b40302-f11c-4916-b616-286de658dd8d","type":"DaysTicker"},{"id":"f10dac99-2edb-4df5-b623-a54a74ec5497","type":"DaysTicker"},{"id":"abda4e2a-6b8e-4dfb-ae15-7f6bc9d26073","type":"DaysTicker"},{"id":"d8e166c0-b257-4539-bba0-3f0a0345e8e1","type":"DaysTicker"},{"id":"f1c839bc-2cd8-45b6-87d0-fd4a4f898785","type":"MonthsTicker"},{"id":"b4e03346-0cb8-41c7-8d2d-218849a3cca3","type":"MonthsTicker"},{"id":"f7cffd4b-ecb0-43f9-ab55-37a784c74818","type":"MonthsTicker"},{"id":"fb53065f-79c6-40d5-b752-8754e785512c","type":"MonthsTicker"},{"id":"c48ea4df-9124-4b16-b888-9399c451a2b5","type":"YearsTicker"}]},"id":"05071047-20fb-4f79-a67b-f61bd1fcc3ba","type":"DatetimeTicker"},{"attributes":{"source":{"id":"6ed8cb9b-6f4c-4286-a874-287a2aace112","type":"ColumnDataSource"}},"id":"0ae0746d-7b88-4a91-b434-44f5489a6b20","type":"CDSView"},{"attributes":{"source":{"id":"192d7d8b-4a57-4d08-8d55-5af0fb942a24","type":"ColumnDataSource"}},"id":"b2bf7122-eea8-4713-a7f7-2e3c5785319e","type":"CDSView"},{"attributes":{"source":{"id":"a029bb61-d05c-49f1-9b6e-a13b5b94b1b3","type":"ColumnDataSource"}},"id":"40735392-f394-4de2-aa48-aa9dc583ba48","type":"CDSView"},{"attributes":{},"id":"e5bda355-37e8-4d04-b125-789c7b36afe5","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"93ac6928-d050-4c06-aa6b-3d3e0fefef3d","type":"VBar"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}}},"id":"6ed8cb9b-6f4c-4286-a874-287a2aace112","type":"ColumnDataSource"},{"attributes":{},"id":"3aaa19df-dde6-40b6-8ff9-296348520751","type":"PanTool"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"91dfc942-42eb-474b-beb7-3a4eb277bd2e","subtype":"Figure","type":"Plot"},"ticker":{"id":"05071047-20fb-4f79-a67b-f61bd1fcc3ba","type":"DatetimeTicker"}},"id":"94eaad38-cd99-49ed-b01c-75354ea06893","type":"Grid"},{"attributes":{"data_source":{"id":"a029bb61-d05c-49f1-9b6e-a13b5b94b1b3","type":"ColumnDataSource"},"glyph":{"id":"0411255d-7b75-4533-a95f-354a9619e590","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7b1bcf68-bec9-4c92-b97d-c0127e2b5542","type":"VBar"},"selection_glyph":null,"view":{"id":"40735392-f394-4de2-aa48-aa9dc583ba48","type":"CDSView"}},"id":"7d32df8a-b229-4aa8-9152-8b7f5e63a967","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3aaa19df-dde6-40b6-8ff9-296348520751","type":"PanTool"},{"id":"6d54915b-220c-4564-b980-4322d4253401","type":"WheelZoomTool"},{"id":"6b1ad3c7-75d7-43aa-ba22-a77870e1ada9","type":"BoxZoomTool"},{"id":"5bd1623d-7a76-49a3-b3d4-8c958d3596f9","type":"ResetTool"},{"id":"7899c703-62ba-44fc-85b7-b894d190888c","type":"SaveTool"}]},"id":"401a325c-5bff-457e-8c0b-1603ee0c922d","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1eb7b820-3199-4265-9083-e2abff08d5d0","type":"Segment"},{"attributes":{"below":[{"id":"9f4797d3-0c1a-4727-b65b-fd6a511b7a35","type":"DatetimeAxis"}],"left":[{"id":"ace6b3df-e7e5-4df0-8148-039be1006bac","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"9f4797d3-0c1a-4727-b65b-fd6a511b7a35","type":"DatetimeAxis"},{"id":"94eaad38-cd99-49ed-b01c-75354ea06893","type":"Grid"},{"id":"ace6b3df-e7e5-4df0-8148-039be1006bac","type":"LinearAxis"},{"id":"373a2138-9d3f-420e-9736-1e97cdfcb9a8","type":"Grid"},{"id":"f693d5ff-6781-4693-bf1d-ca63038ff5f6","type":"BoxAnnotation"},{"id":"1cbd76e1-3a68-4fe6-813a-e31142083ef3","type":"GlyphRenderer"},{"id":"612927be-15e0-4378-8761-e684af39a749","type":"GlyphRenderer"},{"id":"7d32df8a-b229-4aa8-9152-8b7f5e63a967","type":"GlyphRenderer"}],"title":{"id":"0c5c4933-4d9c-49ff-abc8-28c791dd541c","type":"Title"},"toolbar":{"id":"401a325c-5bff-457e-8c0b-1603ee0c922d","type":"Toolbar"},"x_range":{"id":"e6796688-a7d2-46fc-bc5b-0677a7206286","type":"DataRange1d"},"x_scale":{"id":"e5bda355-37e8-4d04-b125-789c7b36afe5","type":"LinearScale"},"y_range":{"id":"abda3854-a793-46c6-a172-8e9b6fddf2c5","type":"DataRange1d"},"y_scale":{"id":"59767fc4-53c5-43ab-b33c-20c9a6b7b7d1","type":"LinearScale"}},"id":"91dfc942-42eb-474b-beb7-3a4eb277bd2e","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"27d0de98-e234-489f-9923-e76675654354","type":"BasicTickFormatter"},"plot":{"id":"91dfc942-42eb-474b-beb7-3a4eb277bd2e","subtype":"Figure","type":"Plot"},"ticker":{"id":"31be1b40-2c6f-456c-8843-889c00710105","type":"BasicTicker"}},"id":"ace6b3df-e7e5-4df0-8148-039be1006bac","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"cf937076-5498-4f18-a521-001976eaec8c","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}}},"id":"192d7d8b-4a57-4d08-8d55-5af0fb942a24","type":"ColumnDataSource"},{"attributes":{},"id":"27d0de98-e234-489f-9923-e76675654354","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"7b1bcf68-bec9-4c92-b97d-c0127e2b5542","type":"VBar"},{"attributes":{"callback":null},"id":"e6796688-a7d2-46fc-bc5b-0677a7206286","type":"DataRange1d"},{"attributes":{},"id":"31be1b40-2c6f-456c-8843-889c00710105","type":"BasicTicker"},{"attributes":{"callback":null},"id":"abda3854-a793-46c6-a172-8e9b6fddf2c5","type":"DataRange1d"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"d8468ad3-5091-4da0-9739-07e49e90f047","type":"Segment"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"0f5469c0-764a-4785-b456-e3c138512265","type":"AdaptiveTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"0411255d-7b75-4533-a95f-354a9619e590","type":"VBar"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"f1c839bc-2cd8-45b6-87d0-fd4a4f898785","type":"MonthsTicker"},{"attributes":{},"id":"6d54915b-220c-4564-b980-4322d4253401","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}}},"id":"a029bb61-d05c-49f1-9b6e-a13b5b94b1b3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6ed8cb9b-6f4c-4286-a874-287a2aace112","type":"ColumnDataSource"},"glyph":{"id":"d8468ad3-5091-4da0-9739-07e49e90f047","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1eb7b820-3199-4265-9083-e2abff08d5d0","type":"Segment"},"selection_glyph":null,"view":{"id":"0ae0746d-7b88-4a91-b434-44f5489a6b20","type":"CDSView"}},"id":"1cbd76e1-3a68-4fe6-813a-e31142083ef3","type":"GlyphRenderer"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"f10dac99-2edb-4df5-b623-a54a74ec5497","type":"DaysTicker"},{"attributes":{"days":[1,8,15,22]},"id":"abda4e2a-6b8e-4dfb-ae15-7f6bc9d26073","type":"DaysTicker"},{"attributes":{},"id":"3e691f12-a5fc-4fb7-8d8a-73f818b30327","type":"DatetimeTickFormatter"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"45d9ffd4-3a3c-44d7-ab5b-3ba797b515d7","type":"AdaptiveTicker"},{"attributes":{},"id":"c48ea4df-9124-4b16-b888-9399c451a2b5","type":"YearsTicker"},{"attributes":{"months":[0,4,8]},"id":"f7cffd4b-ecb0-43f9-ab55-37a784c74818","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"fb53065f-79c6-40d5-b752-8754e785512c","type":"MonthsTicker"},{"attributes":{"overlay":{"id":"f693d5ff-6781-4693-bf1d-ca63038ff5f6","type":"BoxAnnotation"}},"id":"6b1ad3c7-75d7-43aa-ba22-a77870e1ada9","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"3e691f12-a5fc-4fb7-8d8a-73f818b30327","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"91dfc942-42eb-474b-beb7-3a4eb277bd2e","subtype":"Figure","type":"Plot"},"ticker":{"id":"05071047-20fb-4f79-a67b-f61bd1fcc3ba","type":"DatetimeTicker"}},"id":"9f4797d3-0c1a-4727-b65b-fd6a511b7a35","type":"DatetimeAxis"}],"root_ids":["91dfc942-42eb-474b-beb7-3a4eb277bd2e"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"0bc2d38e-6be6-41db-ab39-7f44e0a4e93d","elementid":"935ef788-9b58-4b80-a38a-767b29344ce0","modelid":"91dfc942-42eb-474b-beb7-3a4eb277bd2e"}];
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