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
      };var element = document.getElementById("e330bc65-f5a4-4fec-bbc8-bd0b1b00e51a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e330bc65-f5a4-4fec-bbc8-bd0b1b00e51a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"457a1281-3392-47d8-a7ce-6f018841c9b7":{"roots":{"references":[{"attributes":{"callback":null},"id":"91f4a492-7d63-44de-b308-7c5b4f5afa60","type":"HoverTool"},{"attributes":{"tools":[{"id":"3825f593-25f4-46b2-b785-a6d3a6387c52","type":"BoxSelectTool"},{"id":"91f4a492-7d63-44de-b308-7c5b4f5afa60","type":"HoverTool"},{"id":"890ab86b-8513-4eed-9a50-dc8ffae64d4d","type":"ResetTool"},{"id":"7ca0a660-9534-4035-8b12-a2b2a5d39d94","type":"BoxSelectTool"},{"id":"e62a8a37-f725-4c9a-befc-0b123818a46a","type":"HoverTool"},{"id":"c3d42cea-05b9-4b3d-89c9-e6a60b5c3091","type":"ResetTool"}]},"id":"bc0e3ec3-0aa1-46bb-9698-8f975a392c91","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d8b9d1cb-4aa1-43a4-8003-9368b743ab46","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"50cf4fe5-d0d3-43a2-8135-39ce890384e8","type":"Title"},{"attributes":{"filters":[{"id":"74130baa-8277-47b2-b37d-dddf09809f8a","type":"IndexFilter"}],"source":{"id":"8a3e41a9-12c0-493a-af70-91f800c78fb9","type":"ColumnDataSource"}},"id":"dc493eac-6608-419b-a114-65bdd24bd813","type":"CDSView"},{"attributes":{},"id":"8791791f-fe74-4189-94c4-b1194d087420","type":"BasicTickFormatter"},{"attributes":{},"id":"ba61298c-daea-466b-86ae-eb7ac526e134","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"fed41442-1836-4769-bc62-fb0dcfa1ee6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f85e24e-3dfc-4a47-b226-49e8b4b5227d","type":"BasicTicker"}},"id":"88a690ba-08a0-4a86-8ae1-3caa40275699","type":"Grid"},{"attributes":{},"id":"b1236897-0dff-4253-b84e-65baf15fa7c3","type":"BasicTicker"},{"attributes":{},"id":"473f1a8b-5f75-4287-b103-3f1aa625d0e6","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"d8b9d1cb-4aa1-43a4-8003-9368b743ab46","type":"BoxAnnotation"},"renderers":[{"id":"34121fa9-ba30-4fba-b333-68e348c78a8c","type":"GlyphRenderer"}]},"id":"7ca0a660-9534-4035-8b12-a2b2a5d39d94","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"88bac7d7-e283-47ed-9051-61c226d19656","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef2bd525-53cb-4cc0-942d-217a74f5c93d","type":"Circle"},{"attributes":{"data_source":{"id":"8a3e41a9-12c0-493a-af70-91f800c78fb9","type":"ColumnDataSource"},"glyph":{"id":"10864f8c-9a31-4e4e-948a-823a66586c9e","type":"Circle"},"hover_glyph":{"id":"ef2bd525-53cb-4cc0-942d-217a74f5c93d","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"722d2da0-17c7-4c33-a6ca-25b563cc126f","type":"Circle"},"selection_glyph":null,"view":{"id":"dc493eac-6608-419b-a114-65bdd24bd813","type":"CDSView"}},"id":"34121fa9-ba30-4fba-b333-68e348c78a8c","type":"GlyphRenderer"},{"attributes":{},"id":"c3d42cea-05b9-4b3d-89c9-e6a60b5c3091","type":"ResetTool"},{"attributes":{},"id":"c95fff53-a473-4b41-9945-1282adac5270","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8a3e41a9-12c0-493a-af70-91f800c78fb9","type":"ColumnDataSource"}},"id":"a1d03235-1c74-46dd-bd30-895412e84231","type":"CDSView"},{"attributes":{"children":[{"id":"4753079c-9a9e-4aed-a400-9a23f995d90f","type":"ToolbarBox"},{"id":"b233e11b-5892-4a68-be21-c16fa8a1429c","type":"Column"}]},"id":"a38b5160-8281-49ed-934f-5a0bc8fdb1cd","type":"Column"},{"attributes":{"below":[{"id":"60a10c1a-06c4-4548-bb15-d6150283b055","type":"LinearAxis"}],"left":[{"id":"70992b6d-1e16-463c-acb2-9e467de9b786","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"60a10c1a-06c4-4548-bb15-d6150283b055","type":"LinearAxis"},{"id":"54b4b0cc-c815-4229-961f-d22e49ac0107","type":"Grid"},{"id":"70992b6d-1e16-463c-acb2-9e467de9b786","type":"LinearAxis"},{"id":"88a690ba-08a0-4a86-8ae1-3caa40275699","type":"Grid"},{"id":"f360968e-4091-4dfd-891f-82dcd32da4a8","type":"BoxAnnotation"},{"id":"a45d4880-9139-4aae-b493-ee406b251c4d","type":"GlyphRenderer"}],"title":{"id":"50cf4fe5-d0d3-43a2-8135-39ce890384e8","type":"Title"},"toolbar":{"id":"3ccf2c03-d21f-4b57-bfde-6ecfae585ca6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"88bac7d7-e283-47ed-9051-61c226d19656","type":"DataRange1d"},"x_scale":{"id":"473f1a8b-5f75-4287-b103-3f1aa625d0e6","type":"LinearScale"},"y_range":{"id":"df8fef63-2072-4ab6-b950-2448ad64e0fb","type":"DataRange1d"},"y_scale":{"id":"22e156f6-b55a-4db3-a935-09fc23582312","type":"LinearScale"}},"id":"fed41442-1836-4769-bc62-fb0dcfa1ee6c","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"fed41442-1836-4769-bc62-fb0dcfa1ee6c","subtype":"Figure","type":"Plot"},{"id":"2d436976-fcf3-47a3-bde0-6cfb23d321c7","subtype":"Figure","type":"Plot"}]},"id":"ca2570e0-b848-475b-a423-b1d42a9f4593","type":"Row"},{"attributes":{},"id":"0938a69d-a87e-404b-b952-d79ea794d014","type":"BasicTicker"},{"attributes":{},"id":"22e156f6-b55a-4db3-a935-09fc23582312","type":"LinearScale"},{"attributes":{"formatter":{"id":"8791791f-fe74-4189-94c4-b1194d087420","type":"BasicTickFormatter"},"plot":{"id":"2d436976-fcf3-47a3-bde0-6cfb23d321c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0938a69d-a87e-404b-b952-d79ea794d014","type":"BasicTicker"}},"id":"e235654a-0fb1-4a62-ba85-0da2444e7adf","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17821889-1704-4e97-b6e2-6b3d58a069f0","type":"Circle"},{"attributes":{},"id":"45c0761f-84ae-4d31-bd5c-58e7bfe0bedd","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b387512a-c9cd-41b6-bdca-ed2a82bec9ac","type":"Circle"},{"attributes":{},"id":"dbbce162-9a1d-4676-801f-4df5ae459c2e","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"722d2da0-17c7-4c33-a6ca-25b563cc126f","type":"Circle"},{"attributes":{"formatter":{"id":"dbbce162-9a1d-4676-801f-4df5ae459c2e","type":"BasicTickFormatter"},"plot":{"id":"fed41442-1836-4769-bc62-fb0dcfa1ee6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f85e24e-3dfc-4a47-b226-49e8b4b5227d","type":"BasicTicker"}},"id":"70992b6d-1e16-463c-acb2-9e467de9b786","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b3593854-0924-421d-8a3a-fd50b2162b16","type":"DataRange1d"},{"attributes":{"plot":{"id":"fed41442-1836-4769-bc62-fb0dcfa1ee6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"af78bf03-39cb-4036-8540-8f57a09e3517","type":"BasicTicker"}},"id":"54b4b0cc-c815-4229-961f-d22e49ac0107","type":"Grid"},{"attributes":{"formatter":{"id":"c95fff53-a473-4b41-9945-1282adac5270","type":"BasicTickFormatter"},"plot":{"id":"2d436976-fcf3-47a3-bde0-6cfb23d321c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1236897-0dff-4253-b84e-65baf15fa7c3","type":"BasicTicker"}},"id":"8f4212de-bd05-4bc8-b561-ed9a410d107a","type":"LinearAxis"},{"attributes":{},"id":"890ab86b-8513-4eed-9a50-dc8ffae64d4d","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f360968e-4091-4dfd-891f-82dcd32da4a8","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"df8fef63-2072-4ab6-b950-2448ad64e0fb","type":"DataRange1d"},{"attributes":{"plot":{"id":"2d436976-fcf3-47a3-bde0-6cfb23d321c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0938a69d-a87e-404b-b952-d79ea794d014","type":"BasicTicker"}},"id":"6f7eaf87-b9a9-4d01-ae82-5380d348ac88","type":"Grid"},{"attributes":{"toolbar":{"id":"bc0e3ec3-0aa1-46bb-9698-8f975a392c91","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"4753079c-9a9e-4aed-a400-9a23f995d90f","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"10864f8c-9a31-4e4e-948a-823a66586c9e","type":"Circle"},{"attributes":{},"id":"1f85e24e-3dfc-4a47-b226-49e8b4b5227d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7ca0a660-9534-4035-8b12-a2b2a5d39d94","type":"BoxSelectTool"},{"id":"e62a8a37-f725-4c9a-befc-0b123818a46a","type":"HoverTool"},{"id":"c3d42cea-05b9-4b3d-89c9-e6a60b5c3091","type":"ResetTool"}]},"id":"edf4122b-0fb5-44f8-8e2c-644a2b011fcf","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"f360968e-4091-4dfd-891f-82dcd32da4a8","type":"BoxAnnotation"},"renderers":[{"id":"a45d4880-9139-4aae-b493-ee406b251c4d","type":"GlyphRenderer"}]},"id":"3825f593-25f4-46b2-b785-a6d3a6387c52","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"8a3e41a9-12c0-493a-af70-91f800c78fb9","type":"ColumnDataSource"},"glyph":{"id":"b387512a-c9cd-41b6-bdca-ed2a82bec9ac","type":"Circle"},"hover_glyph":{"id":"133ed765-9ea9-4e6d-a823-cdb26cc0b763","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"17821889-1704-4e97-b6e2-6b3d58a069f0","type":"Circle"},"selection_glyph":null,"view":{"id":"a1d03235-1c74-46dd-bd30-895412e84231","type":"CDSView"}},"id":"a45d4880-9139-4aae-b493-ee406b251c4d","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ba61298c-daea-466b-86ae-eb7ac526e134","type":"BasicTickFormatter"},"plot":{"id":"fed41442-1836-4769-bc62-fb0dcfa1ee6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"af78bf03-39cb-4036-8540-8f57a09e3517","type":"BasicTicker"}},"id":"60a10c1a-06c4-4548-bb15-d6150283b055","type":"LinearAxis"},{"attributes":{"indices":[0,2,4]},"id":"74130baa-8277-47b2-b37d-dddf09809f8a","type":"IndexFilter"},{"attributes":{"plot":null,"text":""},"id":"3f826e05-c375-49cf-b658-18bb1e32dba6","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"8a3e41a9-12c0-493a-af70-91f800c78fb9","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e62a8a37-f725-4c9a-befc-0b123818a46a","type":"HoverTool"},{"attributes":{"callback":null},"id":"cdadf552-eb4d-4816-89eb-1034d7b17604","type":"DataRange1d"},{"attributes":{"children":[{"id":"ca2570e0-b848-475b-a423-b1d42a9f4593","type":"Row"}]},"id":"b233e11b-5892-4a68-be21-c16fa8a1429c","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"2d436976-fcf3-47a3-bde0-6cfb23d321c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1236897-0dff-4253-b84e-65baf15fa7c3","type":"BasicTicker"}},"id":"f7c9eccc-442c-49bc-a3b5-d4be6a458fe8","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3825f593-25f4-46b2-b785-a6d3a6387c52","type":"BoxSelectTool"},{"id":"91f4a492-7d63-44de-b308-7c5b4f5afa60","type":"HoverTool"},{"id":"890ab86b-8513-4eed-9a50-dc8ffae64d4d","type":"ResetTool"}]},"id":"3ccf2c03-d21f-4b57-bfde-6ecfae585ca6","type":"Toolbar"},{"attributes":{},"id":"af78bf03-39cb-4036-8540-8f57a09e3517","type":"BasicTicker"},{"attributes":{},"id":"4896e003-a19d-40b6-8896-978a5e30aeca","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"133ed765-9ea9-4e6d-a823-cdb26cc0b763","type":"Circle"},{"attributes":{"below":[{"id":"e235654a-0fb1-4a62-ba85-0da2444e7adf","type":"LinearAxis"}],"left":[{"id":"8f4212de-bd05-4bc8-b561-ed9a410d107a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e235654a-0fb1-4a62-ba85-0da2444e7adf","type":"LinearAxis"},{"id":"6f7eaf87-b9a9-4d01-ae82-5380d348ac88","type":"Grid"},{"id":"8f4212de-bd05-4bc8-b561-ed9a410d107a","type":"LinearAxis"},{"id":"f7c9eccc-442c-49bc-a3b5-d4be6a458fe8","type":"Grid"},{"id":"d8b9d1cb-4aa1-43a4-8003-9368b743ab46","type":"BoxAnnotation"},{"id":"34121fa9-ba30-4fba-b333-68e348c78a8c","type":"GlyphRenderer"}],"title":{"id":"3f826e05-c375-49cf-b658-18bb1e32dba6","type":"Title"},"toolbar":{"id":"edf4122b-0fb5-44f8-8e2c-644a2b011fcf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b3593854-0924-421d-8a3a-fd50b2162b16","type":"DataRange1d"},"x_scale":{"id":"45c0761f-84ae-4d31-bd5c-58e7bfe0bedd","type":"LinearScale"},"y_range":{"id":"cdadf552-eb4d-4816-89eb-1034d7b17604","type":"DataRange1d"},"y_scale":{"id":"4896e003-a19d-40b6-8896-978a5e30aeca","type":"LinearScale"}},"id":"2d436976-fcf3-47a3-bde0-6cfb23d321c7","subtype":"Figure","type":"Plot"}],"root_ids":["a38b5160-8281-49ed-934f-5a0bc8fdb1cd"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"457a1281-3392-47d8-a7ce-6f018841c9b7","elementid":"e330bc65-f5a4-4fec-bbc8-bd0b1b00e51a","modelid":"a38b5160-8281-49ed-934f-5a0bc8fdb1cd"}];
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