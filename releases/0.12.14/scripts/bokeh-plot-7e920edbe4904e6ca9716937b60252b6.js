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
      };var element = document.getElementById("3ac68ead-9a69-4c05-9ceb-607f50d71405");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3ac68ead-9a69-4c05-9ceb-607f50d71405' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ed3d56b9-2aeb-4094-a472-6d7eab736db5":{"roots":{"references":[{"attributes":{"formatter":{"id":"fb2f261e-0213-43b5-b3b3-32c6a37c71d3","type":"BasicTickFormatter"},"plot":{"id":"492f6c21-1589-4d8d-b3b2-6c64132a14cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7e4628b-e254-42cb-b0ef-fffe12a15b77","type":"BasicTicker"}},"id":"1c4965e5-bb38-4ba9-a54f-ae537bf390cf","type":"LinearAxis"},{"attributes":{},"id":"03e83e05-9b43-4ed5-ac5a-5afe6056c23f","type":"PanTool"},{"attributes":{},"id":"b5067c2f-39fc-4dc0-ac23-fdf0d2f8e0e0","type":"SaveTool"},{"attributes":{},"id":"fb6120ba-744d-4f38-b8e1-10c8b19fe65b","type":"ResetTool"},{"attributes":{},"id":"8c712995-7917-478f-a66e-f54bf6470b0d","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"89cf9ecc-bb83-432b-94e6-1b8e4ba944b2","type":"BoxAnnotation"}},"id":"cef5582b-ba41-4cf6-a13c-5fe9312ad7c0","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"03e83e05-9b43-4ed5-ac5a-5afe6056c23f","type":"PanTool"},{"id":"5b8e1864-1830-43d1-8fe0-aeba3337e865","type":"WheelZoomTool"},{"id":"35ba3071-4cca-4025-a5f5-8c4ee20f9869","type":"BoxZoomTool"},{"id":"b5067c2f-39fc-4dc0-ac23-fdf0d2f8e0e0","type":"SaveTool"},{"id":"4a602fd9-bb69-4e3d-bd04-2bf3e12fdd3b","type":"ResetTool"},{"id":"09446dc2-b5e9-41f1-b46b-88fa87537a88","type":"HelpTool"}]},"id":"46ffb905-107f-4057-ad15-205b5133df1a","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d70979be-7635-41b1-8c19-a8d07d05a12e","type":"Circle"},{"attributes":{"formatter":{"id":"8c712995-7917-478f-a66e-f54bf6470b0d","type":"BasicTickFormatter"},"plot":{"id":"492f6c21-1589-4d8d-b3b2-6c64132a14cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"f01fa751-a5db-4dd2-bf8c-b3222b053ee3","type":"BasicTicker"}},"id":"00bd00bd-a378-4435-a16a-14d759cd1284","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"293be043-ac08-41b4-a1d1-408359dab6fd","type":"Triangle"},{"attributes":{},"id":"e0cc58bc-b2b1-4647-8950-b9b2d76ca849","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"66f4c38e-01cd-4f0d-aac0-f2d479040d94","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"89cf9ecc-bb83-432b-94e6-1b8e4ba944b2","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"ce368d6e-74f3-48c5-92ed-ed1e04c7ad8a","type":"ColumnDataSource"},"glyph":{"id":"d70979be-7635-41b1-8c19-a8d07d05a12e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53d8781f-b926-4da0-b0bc-49bf4540f86a","type":"Circle"},"selection_glyph":null,"view":{"id":"f01fca8c-c029-4310-9cd5-19bfa27637f1","type":"CDSView"}},"id":"0ee228d6-4701-49d8-846b-93642c784018","type":"GlyphRenderer"},{"attributes":{},"id":"5b8e1864-1830-43d1-8fe0-aeba3337e865","type":"WheelZoomTool"},{"attributes":{},"id":"f8f1a742-7c72-422d-982c-b8a2b6b04e58","type":"PanTool"},{"attributes":{},"id":"10271f22-33dd-40d1-bf6f-39b9f7f8b580","type":"LinearScale"},{"attributes":{"formatter":{"id":"f104e4b7-c6ee-41d2-bdaa-84e7a356ac64","type":"BasicTickFormatter"},"plot":{"id":"7ac792a9-de05-4630-af69-2d16c89119f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a20a79fe-adc2-456d-8b42-82bdf01c87aa","type":"BasicTicker"}},"id":"1d0ff45c-99d8-4c7e-a5ab-c76fffdbb333","type":"LinearAxis"},{"attributes":{"formatter":{"id":"738c072f-bf14-45b9-8388-cda256aab8e1","type":"BasicTickFormatter"},"plot":{"id":"e087432d-a3da-4ceb-b005-82a464e49713","subtype":"Figure","type":"Plot"},"ticker":{"id":"0b214e4b-b0ba-487b-b522-d9f325ac6ef4","type":"BasicTicker"}},"id":"2a887ad3-0e65-4a6e-bb48-259806de65eb","type":"LinearAxis"},{"attributes":{"source":{"id":"8d937df5-7b7c-4e81-90d3-3c4e484e6036","type":"ColumnDataSource"}},"id":"7bed2e0f-d889-4e82-bbe0-49ac8da1ba9b","type":"CDSView"},{"attributes":{"data_source":{"id":"8d937df5-7b7c-4e81-90d3-3c4e484e6036","type":"ColumnDataSource"},"glyph":{"id":"8b7330cf-7987-4808-b823-ff05d7781635","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66f4c38e-01cd-4f0d-aac0-f2d479040d94","type":"Square"},"selection_glyph":null,"view":{"id":"7bed2e0f-d889-4e82-bbe0-49ac8da1ba9b","type":"CDSView"}},"id":"8571343c-738b-4360-ad01-d69b3c8dc77b","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca740c30-1483-4e4d-9451-b67dbbe508ef","type":"BoxAnnotation"},{"attributes":{},"id":"fb2f261e-0213-43b5-b3b3-32c6a37c71d3","type":"BasicTickFormatter"},{"attributes":{},"id":"d7e4628b-e254-42cb-b0ef-fffe12a15b77","type":"BasicTicker"},{"attributes":{},"id":"f218cff4-67d4-419f-a3f7-a29d212a2383","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b7330cf-7987-4808-b823-ff05d7781635","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"e087432d-a3da-4ceb-b005-82a464e49713","subtype":"Figure","type":"Plot"},"ticker":{"id":"0b214e4b-b0ba-487b-b522-d9f325ac6ef4","type":"BasicTicker"}},"id":"db78f215-6d62-4d75-9a14-33dc983a0b4c","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"492f6c21-1589-4d8d-b3b2-6c64132a14cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7e4628b-e254-42cb-b0ef-fffe12a15b77","type":"BasicTicker"}},"id":"ac1be08c-741c-40f2-b3d3-1397f9468948","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"ce368d6e-74f3-48c5-92ed-ed1e04c7ad8a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"3fa76a5b-e103-4b70-aacd-93b0ae23d1a6","type":"BasicTickFormatter"},"plot":{"id":"e087432d-a3da-4ceb-b005-82a464e49713","subtype":"Figure","type":"Plot"},"ticker":{"id":"80de6489-d258-4cfa-97ca-fcb3fc02dbaf","type":"BasicTicker"}},"id":"daaa8294-8228-4881-9705-9019f064388b","type":"LinearAxis"},{"attributes":{"children":[{"id":"e087432d-a3da-4ceb-b005-82a464e49713","subtype":"Figure","type":"Plot"},{"id":"492f6c21-1589-4d8d-b3b2-6c64132a14cf","subtype":"Figure","type":"Plot"},{"id":"7ac792a9-de05-4630-af69-2d16c89119f3","subtype":"Figure","type":"Plot"}]},"id":"6bdfdb48-3ef1-4dd7-8862-3e26080323a8","type":"Row"},{"attributes":{},"id":"738c072f-bf14-45b9-8388-cda256aab8e1","type":"BasicTickFormatter"},{"attributes":{},"id":"c160b8c7-dd7a-4a58-89a5-f9e554d9d01e","type":"PanTool"},{"attributes":{},"id":"a20a79fe-adc2-456d-8b42-82bdf01c87aa","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"8d937df5-7b7c-4e81-90d3-3c4e484e6036","type":"ColumnDataSource"},{"attributes":{},"id":"16200c7c-a370-43be-a7ef-c561c565a45a","type":"WheelZoomTool"},{"attributes":{},"id":"79cfe527-d118-4ad0-ac5c-271178b4c057","type":"LinearScale"},{"attributes":{},"id":"7288b8ad-a27c-483b-8c5a-49aeb71edb41","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f8f1a742-7c72-422d-982c-b8a2b6b04e58","type":"PanTool"},{"id":"1a690807-fc96-4287-82de-e6d410c09146","type":"WheelZoomTool"},{"id":"cef5582b-ba41-4cf6-a13c-5fe9312ad7c0","type":"BoxZoomTool"},{"id":"e0cc58bc-b2b1-4647-8950-b9b2d76ca849","type":"SaveTool"},{"id":"f218cff4-67d4-419f-a3f7-a29d212a2383","type":"ResetTool"},{"id":"9ac93dfe-9e79-4070-8d1a-11dd0a44575e","type":"HelpTool"}]},"id":"3eb648d9-28e8-472a-b94d-a7809a20e282","type":"Toolbar"},{"attributes":{},"id":"09446dc2-b5e9-41f1-b46b-88fa87537a88","type":"HelpTool"},{"attributes":{},"id":"4a602fd9-bb69-4e3d-bd04-2bf3e12fdd3b","type":"ResetTool"},{"attributes":{"source":{"id":"0971d49c-b4d9-4012-92cf-a171a98e3554","type":"ColumnDataSource"}},"id":"930843d7-d0fe-43c6-9490-6c6de91805a6","type":"CDSView"},{"attributes":{"overlay":{"id":"ca740c30-1483-4e4d-9451-b67dbbe508ef","type":"BoxAnnotation"}},"id":"5f7da6e4-5c38-4489-826f-910fef72a25b","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"a51f2ee0-a742-473f-9cef-d57d078df912","type":"BoxAnnotation"}},"id":"35ba3071-4cca-4025-a5f5-8c4ee20f9869","type":"BoxZoomTool"},{"attributes":{},"id":"ddc2b4d5-55fe-4f1d-9142-005d4b1e73cc","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"0971d49c-b4d9-4012-92cf-a171a98e3554","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"53d8781f-b926-4da0-b0bc-49bf4540f86a","type":"Circle"},{"attributes":{"data_source":{"id":"0971d49c-b4d9-4012-92cf-a171a98e3554","type":"ColumnDataSource"},"glyph":{"id":"293be043-ac08-41b4-a1d1-408359dab6fd","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f3c79135-b7d2-48ad-b539-c6616ab2dbce","type":"Triangle"},"selection_glyph":null,"view":{"id":"930843d7-d0fe-43c6-9490-6c6de91805a6","type":"CDSView"}},"id":"aa38450b-f852-4970-a768-5ae198acd4d4","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a51f2ee0-a742-473f-9cef-d57d078df912","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"7288b8ad-a27c-483b-8c5a-49aeb71edb41","type":"BasicTickFormatter"},"plot":{"id":"7ac792a9-de05-4630-af69-2d16c89119f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5fa008c-262d-4f4d-8811-1b922ee59cec","type":"BasicTicker"}},"id":"aa39a051-6172-4d0f-a391-ee217dcc348a","type":"LinearAxis"},{"attributes":{},"id":"9ac93dfe-9e79-4070-8d1a-11dd0a44575e","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c160b8c7-dd7a-4a58-89a5-f9e554d9d01e","type":"PanTool"},{"id":"16200c7c-a370-43be-a7ef-c561c565a45a","type":"WheelZoomTool"},{"id":"5f7da6e4-5c38-4489-826f-910fef72a25b","type":"BoxZoomTool"},{"id":"2c7d407a-9b53-4932-92c9-657809bfbe90","type":"SaveTool"},{"id":"fb6120ba-744d-4f38-b8e1-10c8b19fe65b","type":"ResetTool"},{"id":"40101169-9cc6-4eb5-9d8a-b83f5ee686ed","type":"HelpTool"}]},"id":"ed05beaa-2db1-4b78-b8f4-7a5566de8af7","type":"Toolbar"},{"attributes":{},"id":"f01fa751-a5db-4dd2-bf8c-b3222b053ee3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"31b9b7ba-8680-4e20-a33c-0c4952a5015b","type":"DataRange1d"},{"attributes":{},"id":"f104e4b7-c6ee-41d2-bdaa-84e7a356ac64","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"daaa8294-8228-4881-9705-9019f064388b","type":"LinearAxis"}],"left":[{"id":"2a887ad3-0e65-4a6e-bb48-259806de65eb","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"daaa8294-8228-4881-9705-9019f064388b","type":"LinearAxis"},{"id":"c43c668c-6d81-4611-b4db-159286500681","type":"Grid"},{"id":"2a887ad3-0e65-4a6e-bb48-259806de65eb","type":"LinearAxis"},{"id":"db78f215-6d62-4d75-9a14-33dc983a0b4c","type":"Grid"},{"id":"ca740c30-1483-4e4d-9451-b67dbbe508ef","type":"BoxAnnotation"},{"id":"0ee228d6-4701-49d8-846b-93642c784018","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"ed05beaa-2db1-4b78-b8f4-7a5566de8af7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31b9b7ba-8680-4e20-a33c-0c4952a5015b","type":"DataRange1d"},"x_scale":{"id":"ddc2b4d5-55fe-4f1d-9142-005d4b1e73cc","type":"LinearScale"},"y_range":{"id":"d38088db-4658-4ae5-90d0-a1cfd604dc67","type":"DataRange1d"},"y_scale":{"id":"980fd885-22f0-4c25-bd38-80b60d3ef6d5","type":"LinearScale"}},"id":"e087432d-a3da-4ceb-b005-82a464e49713","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"ce368d6e-74f3-48c5-92ed-ed1e04c7ad8a","type":"ColumnDataSource"}},"id":"f01fca8c-c029-4310-9cd5-19bfa27637f1","type":"CDSView"},{"attributes":{"children":[{"id":"6bdfdb48-3ef1-4dd7-8862-3e26080323a8","type":"Row"}]},"id":"59e34b0d-e506-46d4-b191-a84bd05c8f83","type":"Column"},{"attributes":{"callback":null},"id":"d38088db-4658-4ae5-90d0-a1cfd604dc67","type":"DataRange1d"},{"attributes":{"callback":null},"id":"d16a80a3-8bc7-45cc-9f4c-647f7d7d967b","type":"DataRange1d"},{"attributes":{"plot":{"id":"e087432d-a3da-4ceb-b005-82a464e49713","subtype":"Figure","type":"Plot"},"ticker":{"id":"80de6489-d258-4cfa-97ca-fcb3fc02dbaf","type":"BasicTicker"}},"id":"c43c668c-6d81-4611-b4db-159286500681","type":"Grid"},{"attributes":{},"id":"80de6489-d258-4cfa-97ca-fcb3fc02dbaf","type":"BasicTicker"},{"attributes":{},"id":"f5fa008c-262d-4f4d-8811-1b922ee59cec","type":"BasicTicker"},{"attributes":{},"id":"b0e37a04-30ba-4b90-9de8-94f70dd5beb9","type":"LinearScale"},{"attributes":{},"id":"0b214e4b-b0ba-487b-b522-d9f325ac6ef4","type":"BasicTicker"},{"attributes":{},"id":"1a690807-fc96-4287-82de-e6d410c09146","type":"WheelZoomTool"},{"attributes":{},"id":"51f2e737-6411-4432-9155-195059627715","type":"LinearScale"},{"attributes":{"below":[{"id":"1d0ff45c-99d8-4c7e-a5ab-c76fffdbb333","type":"LinearAxis"}],"left":[{"id":"aa39a051-6172-4d0f-a391-ee217dcc348a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1d0ff45c-99d8-4c7e-a5ab-c76fffdbb333","type":"LinearAxis"},{"id":"195c83c9-7213-4457-bcb0-a9d97aaea829","type":"Grid"},{"id":"aa39a051-6172-4d0f-a391-ee217dcc348a","type":"LinearAxis"},{"id":"dfc846c8-66cd-4cf1-a942-5b332207d591","type":"Grid"},{"id":"89cf9ecc-bb83-432b-94e6-1b8e4ba944b2","type":"BoxAnnotation"},{"id":"8571343c-738b-4360-ad01-d69b3c8dc77b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"3eb648d9-28e8-472a-b94d-a7809a20e282","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31b9b7ba-8680-4e20-a33c-0c4952a5015b","type":"DataRange1d"},"x_scale":{"id":"b0e37a04-30ba-4b90-9de8-94f70dd5beb9","type":"LinearScale"},"y_range":{"id":"d16a80a3-8bc7-45cc-9f4c-647f7d7d967b","type":"DataRange1d"},"y_scale":{"id":"51f2e737-6411-4432-9155-195059627715","type":"LinearScale"}},"id":"7ac792a9-de05-4630-af69-2d16c89119f3","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3c79135-b7d2-48ad-b539-c6616ab2dbce","type":"Triangle"},{"attributes":{"plot":{"id":"7ac792a9-de05-4630-af69-2d16c89119f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a20a79fe-adc2-456d-8b42-82bdf01c87aa","type":"BasicTicker"}},"id":"195c83c9-7213-4457-bcb0-a9d97aaea829","type":"Grid"},{"attributes":{},"id":"2c7d407a-9b53-4932-92c9-657809bfbe90","type":"SaveTool"},{"attributes":{},"id":"3fa76a5b-e103-4b70-aacd-93b0ae23d1a6","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"00bd00bd-a378-4435-a16a-14d759cd1284","type":"LinearAxis"}],"left":[{"id":"1c4965e5-bb38-4ba9-a54f-ae537bf390cf","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"00bd00bd-a378-4435-a16a-14d759cd1284","type":"LinearAxis"},{"id":"e5f4f711-9371-430a-bf27-ce6f8c136a3e","type":"Grid"},{"id":"1c4965e5-bb38-4ba9-a54f-ae537bf390cf","type":"LinearAxis"},{"id":"ac1be08c-741c-40f2-b3d3-1397f9468948","type":"Grid"},{"id":"a51f2ee0-a742-473f-9cef-d57d078df912","type":"BoxAnnotation"},{"id":"aa38450b-f852-4970-a768-5ae198acd4d4","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"46ffb905-107f-4057-ad15-205b5133df1a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31b9b7ba-8680-4e20-a33c-0c4952a5015b","type":"DataRange1d"},"x_scale":{"id":"79cfe527-d118-4ad0-ac5c-271178b4c057","type":"LinearScale"},"y_range":{"id":"d38088db-4658-4ae5-90d0-a1cfd604dc67","type":"DataRange1d"},"y_scale":{"id":"10271f22-33dd-40d1-bf6f-39b9f7f8b580","type":"LinearScale"}},"id":"492f6c21-1589-4d8d-b3b2-6c64132a14cf","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"980fd885-22f0-4c25-bd38-80b60d3ef6d5","type":"LinearScale"},{"attributes":{"plot":{"id":"492f6c21-1589-4d8d-b3b2-6c64132a14cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"f01fa751-a5db-4dd2-bf8c-b3222b053ee3","type":"BasicTicker"}},"id":"e5f4f711-9371-430a-bf27-ce6f8c136a3e","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"7ac792a9-de05-4630-af69-2d16c89119f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5fa008c-262d-4f4d-8811-1b922ee59cec","type":"BasicTicker"}},"id":"dfc846c8-66cd-4cf1-a942-5b332207d591","type":"Grid"},{"attributes":{},"id":"40101169-9cc6-4eb5-9d8a-b83f5ee686ed","type":"HelpTool"}],"root_ids":["59e34b0d-e506-46d4-b191-a84bd05c8f83"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"ed3d56b9-2aeb-4094-a472-6d7eab736db5","elementid":"3ac68ead-9a69-4c05-9ceb-607f50d71405","modelid":"59e34b0d-e506-46d4-b191-a84bd05c8f83"}];
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