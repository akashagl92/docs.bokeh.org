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
      };var element = document.getElementById("25d19a4e-6f52-4408-a040-e7d74043d003");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '25d19a4e-6f52-4408-a040-e7d74043d003' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"96abc6ce-a8be-40c4-b3ae-918dca3ff966":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"0d4a4d41-26a5-4525-bb78-54d5a1f285c4","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"b71a92d0-6cb5-44b6-8d05-64ff25b1dbc3","type":"Stack"}},"y":{"field":"fruits"}},"id":"300d3d89-3a6b-4ef4-a14b-fd2be9d231c2","type":"HBar"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"6081d409-55e8-47d9-86cd-ae3799e33b52","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"3bb04604-b7aa-45c0-adc5-2adf6087e0da","type":"Stack"}},"y":{"field":"fruits"}},"id":"24d9d2a2-c96c-43d4-ab10-5a23b15aeb2f","type":"HBar"},{"attributes":{"data_source":{"id":"65265bb7-b413-440d-b012-93abecd0cd29","type":"ColumnDataSource"},"glyph":{"id":"24d9d2a2-c96c-43d4-ab10-5a23b15aeb2f","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b1fc8cfd-48d2-4f93-a2a4-e4765d17d0a1","type":"HBar"},"selection_glyph":null,"view":{"id":"ba504089-214f-42f6-8374-05161b363b70","type":"CDSView"}},"id":"e32eacec-5260-49c7-bb95-0900ef9427ab","type":"GlyphRenderer"},{"attributes":{},"id":"f5bbeeeb-2a38-4cfb-9f95-972142fe640a","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"7295a40b-7d57-40b4-a69b-1dca630be802","type":"ColumnDataSource"}},"id":"7c97ecd0-049e-41e3-9ff8-1f5976641444","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"a492e58c-2276-45a4-b484-bdc558b8c58a","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"5c1adfb0-8fd9-4117-93aa-1c4e87e91bdd","type":"Stack"}},"y":{"field":"fruits"}},"id":"e5f6bd0c-b2c0-4440-a95d-537ae3807c48","type":"HBar"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"6d5269a1-3bb5-476c-8f20-783c6f7a7631","type":"GlyphRenderer"}]},"id":"ecb01cd4-7c6e-4e64-841c-b421dce87334","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"91c21f74-9bdc-4a7e-884d-d6e5c03ec104","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"81e6630c-c7a5-4f7e-bd3a-a6c16ef90bdc","type":"Stack"}},"y":{"field":"fruits"}},"id":"31176a2a-b084-47db-9c67-417f62787a20","type":"HBar"},{"attributes":{},"id":"34714437-ab2e-489a-996e-7089400ba96d","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"e480379c-cfe7-4d89-9e4a-3daec6dd0539","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"de8b09ad-b3cc-44cd-9448-3ec0659da803","type":"Stack"}},"y":{"field":"fruits"}},"id":"a75e5d4a-d98a-4241-bb0a-93279a034cc4","type":"HBar"},{"attributes":{"data_source":{"id":"7295a40b-7d57-40b4-a69b-1dca630be802","type":"ColumnDataSource"},"glyph":{"id":"f328670c-9cf4-4b50-adad-04004b04fd26","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93431caa-136b-4d12-aa33-3a0a04467fdd","type":"HBar"},"selection_glyph":null,"view":{"id":"ec4fb06e-3f67-414c-bef9-15971ee3f610","type":"CDSView"}},"id":"6d5269a1-3bb5-476c-8f20-783c6f7a7631","type":"GlyphRenderer"},{"attributes":{},"id":"294fccfd-d37e-4673-b786-89e82caba21d","type":"SaveTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"fdbf192b-ab53-4102-9f37-f91fa1abe2fe","type":"FactorRange"},{"attributes":{"source":{"id":"65265bb7-b413-440d-b012-93abecd0cd29","type":"ColumnDataSource"}},"id":"9f49b169-1382-428e-b073-5277ca2fcff1","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"acfcaa6f-1a47-4d51-a9c3-83341178089f","subtype":"Figure","type":"Plot"},"ticker":{"id":"34714437-ab2e-489a-996e-7089400ba96d","type":"CategoricalTicker"}},"id":"c6f0d0e8-d4d1-4d6b-9272-cb736e6fe900","type":"Grid"},{"attributes":{},"id":"f4ac2368-1117-49ac-b31b-01fbf73acfe3","type":"PanTool"},{"attributes":{"fields":["2015","2016"]},"id":"c27499c3-f8be-4677-a289-71bfb63fb8c6","type":"Stack"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"b4bbf61b-bc79-452e-b7af-39ece660f485","type":"GlyphRenderer"}]},"id":"8fde48be-18fe-4cde-88cf-2d5eab3d7ae0","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"3bb04604-b7aa-45c0-adc5-2adf6087e0da","type":"Stack"},{"attributes":{"formatter":{"id":"3f779f72-f7bb-4f76-b710-776e4da453a4","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"acfcaa6f-1a47-4d51-a9c3-83341178089f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa94805b-6dce-4870-b017-a20fbf4f9d4e","type":"BasicTicker"}},"id":"2c9b8410-012d-4dab-9617-132ce269e256","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7295a40b-7d57-40b4-a69b-1dca630be802","type":"ColumnDataSource"},"glyph":{"id":"d380df85-9dd9-4788-b5ba-d115def73313","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a75e5d4a-d98a-4241-bb0a-93279a034cc4","type":"HBar"},"selection_glyph":null,"view":{"id":"7c97ecd0-049e-41e3-9ff8-1f5976641444","type":"CDSView"}},"id":"324ebe61-540e-4a52-84ec-6e486b2092e0","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2c9b8410-012d-4dab-9617-132ce269e256","type":"LinearAxis"}],"left":[{"id":"2c7e4f96-e13f-4834-8f39-c35089391af4","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"2c9b8410-012d-4dab-9617-132ce269e256","type":"LinearAxis"},{"id":"7af47a01-5b0f-4702-a955-ddf31a81b85b","type":"Grid"},{"id":"2c7e4f96-e13f-4834-8f39-c35089391af4","type":"CategoricalAxis"},{"id":"c6f0d0e8-d4d1-4d6b-9272-cb736e6fe900","type":"Grid"},{"id":"9e6c3599-afb7-4479-a116-03f83693136a","type":"BoxAnnotation"},{"id":"f13fa6d8-0563-4d78-a3ca-296889e551ac","type":"Legend"},{"id":"3d735779-d56e-4204-af6e-03424ff3264f","type":"GlyphRenderer"},{"id":"e32eacec-5260-49c7-bb95-0900ef9427ab","type":"GlyphRenderer"},{"id":"b4bbf61b-bc79-452e-b7af-39ece660f485","type":"GlyphRenderer"},{"id":"f6122559-02aa-469e-9e7b-79951a1cb7ef","type":"GlyphRenderer"},{"id":"6d5269a1-3bb5-476c-8f20-783c6f7a7631","type":"GlyphRenderer"},{"id":"324ebe61-540e-4a52-84ec-6e486b2092e0","type":"GlyphRenderer"}],"title":{"id":"f0867c63-8da3-4f50-af53-f7d5f6fb5abd","type":"Title"},"toolbar":{"id":"8adef914-63ff-4237-972b-cb2e417b8e0f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f8e469aa-e108-4dbc-aa9c-932d281a20f0","type":"Range1d"},"x_scale":{"id":"d085fea7-e5bd-4634-97e2-6d1668ecb0ef","type":"LinearScale"},"y_range":{"id":"fdbf192b-ab53-4102-9f37-f91fa1abe2fe","type":"FactorRange"},"y_scale":{"id":"0e4d8f2e-97e9-422e-aaa5-7ae49f84592d","type":"CategoricalScale"}},"id":"acfcaa6f-1a47-4d51-a9c3-83341178089f","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"9e6c3599-afb7-4479-a116-03f83693136a","type":"BoxAnnotation"}},"id":"08696850-e11e-4ea2-9eee-e55d21eeab0f","type":"BoxZoomTool"},{"attributes":{"fields":["2015"]},"id":"6081d409-55e8-47d9-86cd-ae3799e33b52","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"91c21f74-9bdc-4a7e-884d-d6e5c03ec104","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"81e6630c-c7a5-4f7e-bd3a-a6c16ef90bdc","type":"Stack"}},"y":{"field":"fruits"}},"id":"01aa3556-b42d-43df-94a7-d21fdc63396c","type":"HBar"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"7295a40b-7d57-40b4-a69b-1dca630be802","type":"ColumnDataSource"},{"attributes":{"source":{"id":"65265bb7-b413-440d-b012-93abecd0cd29","type":"ColumnDataSource"}},"id":"472ad179-3cff-47e9-b1b8-7c40707f33bd","type":"CDSView"},{"attributes":{"items":[{"id":"18b4a498-a5e0-40f1-9899-04ceea8111cc","type":"LegendItem"},{"id":"885658e4-c3ea-46e8-8587-02ed5f78d4a9","type":"LegendItem"},{"id":"8fde48be-18fe-4cde-88cf-2d5eab3d7ae0","type":"LegendItem"},{"id":"f73d6c90-8808-4cb6-bd07-01436fe9d8ad","type":"LegendItem"},{"id":"ecb01cd4-7c6e-4e64-841c-b421dce87334","type":"LegendItem"},{"id":"62b1a2c6-fb0e-4874-a550-489e8b08bf75","type":"LegendItem"}],"location":"top_left","plot":{"id":"acfcaa6f-1a47-4d51-a9c3-83341178089f","subtype":"Figure","type":"Plot"}},"id":"f13fa6d8-0563-4d78-a3ca-296889e551ac","type":"Legend"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"324ebe61-540e-4a52-84ec-6e486b2092e0","type":"GlyphRenderer"}]},"id":"62b1a2c6-fb0e-4874-a550-489e8b08bf75","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"e480379c-cfe7-4d89-9e4a-3daec6dd0539","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"de8b09ad-b3cc-44cd-9448-3ec0659da803","type":"Stack"}},"y":{"field":"fruits"}},"id":"d380df85-9dd9-4788-b5ba-d115def73313","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"de8b09ad-b3cc-44cd-9448-3ec0659da803","type":"Stack"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"3d735779-d56e-4204-af6e-03424ff3264f","type":"GlyphRenderer"}]},"id":"18b4a498-a5e0-40f1-9899-04ceea8111cc","type":"LegendItem"},{"attributes":{"source":{"id":"65265bb7-b413-440d-b012-93abecd0cd29","type":"ColumnDataSource"}},"id":"ba504089-214f-42f6-8374-05161b363b70","type":"CDSView"},{"attributes":{"source":{"id":"7295a40b-7d57-40b4-a69b-1dca630be802","type":"ColumnDataSource"}},"id":"ec4fb06e-3f67-414c-bef9-15971ee3f610","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"b71a92d0-6cb5-44b6-8d05-64ff25b1dbc3","type":"Stack"},{"attributes":{},"id":"0811019f-f74d-4bcb-bcff-e3b2ca8de195","type":"WheelZoomTool"},{"attributes":{},"id":"a953d7ab-acc1-45fe-a4b2-7729f4def5a7","type":"ResetTool"},{"attributes":{"fields":[]},"id":"0d4a4d41-26a5-4525-bb78-54d5a1f285c4","type":"Stack"},{"attributes":{},"id":"0238d7d5-157c-4801-a778-516f5ea43731","type":"HelpTool"},{"attributes":{"data_source":{"id":"65265bb7-b413-440d-b012-93abecd0cd29","type":"ColumnDataSource"},"glyph":{"id":"233fb03f-3954-40d7-893b-612e3c568a6a","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"300d3d89-3a6b-4ef4-a14b-fd2be9d231c2","type":"HBar"},"selection_glyph":null,"view":{"id":"472ad179-3cff-47e9-b1b8-7c40707f33bd","type":"CDSView"}},"id":"3d735779-d56e-4204-af6e-03424ff3264f","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"f8e469aa-e108-4dbc-aa9c-932d281a20f0","type":"Range1d"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"f0867c63-8da3-4f50-af53-f7d5f6fb5abd","type":"Title"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"e32eacec-5260-49c7-bb95-0900ef9427ab","type":"GlyphRenderer"}]},"id":"885658e4-c3ea-46e8-8587-02ed5f78d4a9","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"0d4a4d41-26a5-4525-bb78-54d5a1f285c4","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"b71a92d0-6cb5-44b6-8d05-64ff25b1dbc3","type":"Stack"}},"y":{"field":"fruits"}},"id":"233fb03f-3954-40d7-893b-612e3c568a6a","type":"HBar"},{"attributes":{},"id":"3f779f72-f7bb-4f76-b710-776e4da453a4","type":"BasicTickFormatter"},{"attributes":{},"id":"fa94805b-6dce-4870-b017-a20fbf4f9d4e","type":"BasicTicker"},{"attributes":{"fields":["2015"]},"id":"311f1b27-283c-468e-bf99-846cda877bbe","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"6081d409-55e8-47d9-86cd-ae3799e33b52","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"3bb04604-b7aa-45c0-adc5-2adf6087e0da","type":"Stack"}},"y":{"field":"fruits"}},"id":"b1fc8cfd-48d2-4f93-a2a4-e4765d17d0a1","type":"HBar"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"a492e58c-2276-45a4-b484-bdc558b8c58a","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"5c1adfb0-8fd9-4117-93aa-1c4e87e91bdd","type":"Stack"}},"y":{"field":"fruits"}},"id":"7c6380c9-feec-41e1-8b00-ecb49afd0e36","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"311f1b27-283c-468e-bf99-846cda877bbe","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"c27499c3-f8be-4677-a289-71bfb63fb8c6","type":"Stack"}},"y":{"field":"fruits"}},"id":"93431caa-136b-4d12-aa33-3a0a04467fdd","type":"HBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f4ac2368-1117-49ac-b31b-01fbf73acfe3","type":"PanTool"},{"id":"0811019f-f74d-4bcb-bcff-e3b2ca8de195","type":"WheelZoomTool"},{"id":"08696850-e11e-4ea2-9eee-e55d21eeab0f","type":"BoxZoomTool"},{"id":"294fccfd-d37e-4673-b786-89e82caba21d","type":"SaveTool"},{"id":"a953d7ab-acc1-45fe-a4b2-7729f4def5a7","type":"ResetTool"},{"id":"0238d7d5-157c-4801-a778-516f5ea43731","type":"HelpTool"}]},"id":"8adef914-63ff-4237-972b-cb2e417b8e0f","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"311f1b27-283c-468e-bf99-846cda877bbe","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"c27499c3-f8be-4677-a289-71bfb63fb8c6","type":"Stack"}},"y":{"field":"fruits"}},"id":"f328670c-9cf4-4b50-adad-04004b04fd26","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"91c21f74-9bdc-4a7e-884d-d6e5c03ec104","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9e6c3599-afb7-4479-a116-03f83693136a","type":"BoxAnnotation"},{"attributes":{"fields":["2015"]},"id":"5c1adfb0-8fd9-4117-93aa-1c4e87e91bdd","type":"Stack"},{"attributes":{"plot":{"id":"acfcaa6f-1a47-4d51-a9c3-83341178089f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa94805b-6dce-4870-b017-a20fbf4f9d4e","type":"BasicTicker"}},"id":"7af47a01-5b0f-4702-a955-ddf31a81b85b","type":"Grid"},{"attributes":{"fields":[]},"id":"a492e58c-2276-45a4-b484-bdc558b8c58a","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"e480379c-cfe7-4d89-9e4a-3daec6dd0539","type":"Stack"},{"attributes":{"data_source":{"id":"65265bb7-b413-440d-b012-93abecd0cd29","type":"ColumnDataSource"},"glyph":{"id":"31176a2a-b084-47db-9c67-417f62787a20","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"01aa3556-b42d-43df-94a7-d21fdc63396c","type":"HBar"},"selection_glyph":null,"view":{"id":"9f49b169-1382-428e-b073-5277ca2fcff1","type":"CDSView"}},"id":"b4bbf61b-bc79-452e-b7af-39ece660f485","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7295a40b-7d57-40b4-a69b-1dca630be802","type":"ColumnDataSource"},"glyph":{"id":"7c6380c9-feec-41e1-8b00-ecb49afd0e36","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e5f6bd0c-b2c0-4440-a95d-537ae3807c48","type":"HBar"},"selection_glyph":null,"view":{"id":"11828dac-0393-4aef-b46a-18a38367fbd7","type":"CDSView"}},"id":"f6122559-02aa-469e-9e7b-79951a1cb7ef","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"f6122559-02aa-469e-9e7b-79951a1cb7ef","type":"GlyphRenderer"}]},"id":"f73d6c90-8808-4cb6-bd07-01436fe9d8ad","type":"LegendItem"},{"attributes":{},"id":"0e4d8f2e-97e9-422e-aaa5-7ae49f84592d","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"65265bb7-b413-440d-b012-93abecd0cd29","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7295a40b-7d57-40b4-a69b-1dca630be802","type":"ColumnDataSource"}},"id":"11828dac-0393-4aef-b46a-18a38367fbd7","type":"CDSView"},{"attributes":{"formatter":{"id":"f5bbeeeb-2a38-4cfb-9f95-972142fe640a","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"acfcaa6f-1a47-4d51-a9c3-83341178089f","subtype":"Figure","type":"Plot"},"ticker":{"id":"34714437-ab2e-489a-996e-7089400ba96d","type":"CategoricalTicker"}},"id":"2c7e4f96-e13f-4834-8f39-c35089391af4","type":"CategoricalAxis"},{"attributes":{},"id":"d085fea7-e5bd-4634-97e2-6d1668ecb0ef","type":"LinearScale"},{"attributes":{"fields":["2015","2016","2017"]},"id":"81e6630c-c7a5-4f7e-bd3a-a6c16ef90bdc","type":"Stack"}],"root_ids":["acfcaa6f-1a47-4d51-a9c3-83341178089f"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"96abc6ce-a8be-40c4-b3ae-918dca3ff966","elementid":"25d19a4e-6f52-4408-a040-e7d74043d003","modelid":"acfcaa6f-1a47-4d51-a9c3-83341178089f"}];
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