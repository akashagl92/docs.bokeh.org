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
      };var element = document.getElementById("be7a02d2-5930-4c9b-8e69-1e4888c1e62f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be7a02d2-5930-4c9b-8e69-1e4888c1e62f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cdbb0bb0-79c9-43fe-b449-24fde82a0afa":{"roots":{"references":[{"attributes":{},"id":"e86e1b05-3907-4cfc-b0a4-094c0d057ae3","type":"BasicTicker"},{"attributes":{},"id":"0a361736-c0e2-4ca5-881b-a0b15693fb29","type":"BasicTicker"},{"attributes":{},"id":"82052bf9-1a94-433e-a898-249478b79b0c","type":"BasicTicker"},{"attributes":{},"id":"bbf0bac1-9aed-406d-9852-3971824685b5","type":"BasicTicker"},{"attributes":{},"id":"939c715a-6dc5-4e8c-8b77-5285ad1ee7e7","type":"BasicTicker"},{"attributes":{},"id":"eaa787e4-5568-4852-ab22-628de86bf85e","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"a7cb758c-24af-4474-b93e-064b925be6fd","type":"CDSView"},{"attributes":{},"id":"0ef925c1-f8ce-4475-9958-497b7e08c9ec","type":"BasicTicker"},{"attributes":{},"id":"055d2a97-8621-4fb3-96bb-cfd1d61364c5","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_width"}},"id":"46fcc88d-92ba-4c59-ae0c-82902b814f25","type":"Circle"},{"attributes":{},"id":"d9fe6de4-6550-420e-bd25-be2065ced190","type":"BasicTickFormatter"},{"attributes":{},"id":"2ff6f0eb-706c-495b-83f2-cb46184ba1bd","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"081e1b42-f5c6-4eac-b75c-e6c869a64f64","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"334234eb-c14c-4f33-96c1-523227ef9e5f","type":"PanTool"},{"id":"3e4092d8-fd6f-497e-8aad-71ed3bc6fe1b","type":"WheelZoomTool"}]},"id":"1e64cfd2-a3c1-4199-b2f1-d8452bd84ca0","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dad0e87d-1e35-42ec-9bf1-c7e0ee536fb5","type":"PanTool"},{"id":"0a519326-c83b-4794-a865-8004881a9654","type":"WheelZoomTool"}]},"id":"2d93ca66-12f5-4b77-8f2f-1407e1676b6d","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"98f05b5c-a804-46e7-8df2-bb446ba65d06","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"3cfaf9ac-7648-438e-b4eb-ca8eafff1698","type":"GlyphRenderer"},{"id":"39853e2a-fcb3-4f8a-81d7-9af5803fedbc","type":"Grid"},{"id":"98f05b5c-a804-46e7-8df2-bb446ba65d06","type":"LinearAxis"},{"id":"e5e6b18b-a5c2-4134-b6fc-72f491041ac7","type":"Grid"}],"title":{"id":"9e0afa06-d9cd-45b3-8e80-f655a9128854","type":"Title"},"toolbar":{"id":"1e64cfd2-a3c1-4199-b2f1-d8452bd84ca0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"716948f2-0427-4f00-85db-c9be73390819","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"c25480d9-a2f4-4d99-9b7c-47258c3dd719","type":"LinearScale"}},"id":"5e7224de-ae9e-4a84-b6b1-c49d88828d82","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"8a7b6bbc-c557-47de-905f-9d0050668ce7","type":"Title"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"b8beacaf-136b-4bd0-9c28-2e3d99555973","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"d687c463-e2b7-404b-a9df-59e0dd62c742","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_width"}},"id":"37b68029-a452-4758-b409-ae0d6ab64459","type":"Circle"},{"attributes":{},"id":"18be5e5e-03a0-487b-ae33-85a79359ec13","type":"BasicTicker"},{"attributes":{},"id":"e7fe41bb-21e8-49a0-bae1-6acd461f7583","type":"BasicTickFormatter"},{"attributes":{},"id":"334234eb-c14c-4f33-96c1-523227ef9e5f","type":"PanTool"},{"attributes":{},"id":"83227664-1816-4549-891b-29479482a246","type":"LinearScale"},{"attributes":{"plot":{"id":"5816ca71-f99c-4176-abd0-dc512f574482","type":"Plot"},"ticker":{"id":"18be5e5e-03a0-487b-ae33-85a79359ec13","type":"BasicTicker"}},"id":"aedf9e76-190d-43ca-936b-2ecf1db6c90f","type":"Grid"},{"attributes":{},"id":"62933bf6-b2a7-4cbc-868c-b67adfc8b035","type":"LinearScale"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"37b68029-a452-4758-b409-ae0d6ab64459","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ce594299-4eb0-4ac2-8a5c-7d9f4342a380","type":"CDSView"}},"id":"3cfaf9ac-7648-438e-b4eb-ca8eafff1698","type":"GlyphRenderer"},{"attributes":{},"id":"bcf002b2-44d7-423c-b29e-61807aa22600","type":"BasicTicker"},{"attributes":{},"id":"0f3e1acc-dd42-4aae-a529-aaac87975b47","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"5816ca71-f99c-4176-abd0-dc512f574482","type":"Plot"},"ticker":{"id":"bcf002b2-44d7-423c-b29e-61807aa22600","type":"BasicTicker"}},"id":"9c74c223-f4a0-404c-9d93-4808d79a1354","type":"Grid"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"ce594299-4eb0-4ac2-8a5c-7d9f4342a380","type":"CDSView"},{"attributes":{},"id":"732b17ba-627e-415c-b4c7-0a5b0537f184","type":"PanTool"},{"attributes":{},"id":"c1b8a6f6-592a-46c2-a776-0ca449b826fc","type":"LinearScale"},{"attributes":{},"id":"ad895475-1d15-48a2-8259-31f176873f44","type":"BasicTicker"},{"attributes":{},"id":"c1693e36-00a3-4fc6-ab02-526032e40b17","type":"WheelZoomTool"},{"attributes":{},"id":"687fb030-5b20-4193-93c9-f88b9eccc0d7","type":"LinearScale"},{"attributes":{"formatter":{"id":"d9fe6de4-6550-420e-bd25-be2065ced190","type":"BasicTickFormatter"},"plot":{"id":"5e7224de-ae9e-4a84-b6b1-c49d88828d82","type":"Plot"},"ticker":{"id":"3bca8fb9-1e9c-4025-8202-472be382ed41","type":"BasicTicker"}},"id":"98f05b5c-a804-46e7-8df2-bb446ba65d06","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"408ba1e4-9d3d-47b4-9e25-4294ecf41f87","type":"GlyphRenderer"},{"id":"9d867a38-cb58-4d5a-891f-bdefc4044168","type":"Grid"},{"id":"2b0ee759-c5a5-4bf4-b614-7b7fa68b4376","type":"Grid"}],"title":{"id":"e2588c2f-5e24-420a-adfa-664fe7d51d8c","type":"Title"},"toolbar":{"id":"2d93ca66-12f5-4b77-8f2f-1407e1676b6d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"18e4ef78-c976-4a07-9b09-d37d05b70e65","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"5e70e6c6-753b-4dd0-b618-2cd32126e962","type":"LinearScale"}},"id":"07de2015-a9a7-4acb-846d-6e4836cb014d","type":"Plot"},{"attributes":{},"id":"3bca8fb9-1e9c-4025-8202-472be382ed41","type":"BasicTicker"},{"attributes":{},"id":"c25480d9-a2f4-4d99-9b7c-47258c3dd719","type":"LinearScale"},{"attributes":{"plot":{"id":"5e7224de-ae9e-4a84-b6b1-c49d88828d82","type":"Plot"},"ticker":{"id":"ad895475-1d15-48a2-8259-31f176873f44","type":"BasicTicker"}},"id":"39853e2a-fcb3-4f8a-81d7-9af5803fedbc","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_width"}},"id":"3a29d52e-3af5-467b-80c2-5c70c3fa8b98","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"5e7224de-ae9e-4a84-b6b1-c49d88828d82","type":"Plot"},"ticker":{"id":"3bca8fb9-1e9c-4025-8202-472be382ed41","type":"BasicTicker"}},"id":"e5e6b18b-a5c2-4134-b6fc-72f491041ac7","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"c4600916-f843-47f6-b3ab-38f3ebf1226d","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"80afd811-91ac-434b-bd22-81a0b8bb622b","type":"PanTool"},{"id":"d9ccb8c2-5c43-4eda-be66-878b81547815","type":"WheelZoomTool"}]},"id":"4c1c6a64-d91f-4bf6-b7ac-79faa7fc322a","type":"Toolbar"},{"attributes":{},"id":"1edc1afe-d994-4220-91a6-3b393dcc306b","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"5e7224de-ae9e-4a84-b6b1-c49d88828d82","type":"Plot"},{"id":"addb6083-20b2-43b2-85c4-417d59c987f6","type":"Plot"},{"id":"e2e16dd8-2287-4005-bc87-df277934c030","type":"Plot"},{"id":"d95f9a4a-57f1-41c7-91bd-1e7b1281603d","type":"Plot"}]},"id":"565ea743-2f06-445e-888c-ea7a05d8150a","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7b970e66-23c7-48e5-9cfb-c3826a354821","type":"PanTool"},{"id":"57e299ef-c4b7-4a68-85fb-39c22bd264fc","type":"WheelZoomTool"}]},"id":"32d76807-12d8-417a-a2e0-4c357e615af3","type":"Toolbar"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"3a29d52e-3af5-467b-80c2-5c70c3fa8b98","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f9cc1e60-a888-4b08-9981-ea181df17fec","type":"CDSView"}},"id":"408ba1e4-9d3d-47b4-9e25-4294ecf41f87","type":"GlyphRenderer"},{"attributes":{},"id":"3e4092d8-fd6f-497e-8aad-71ed3bc6fe1b","type":"WheelZoomTool"},{"attributes":{},"id":"1ed23454-78f6-4c17-b6c6-38543fd4e73e","type":"LinearScale"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"f9cc1e60-a888-4b08-9981-ea181df17fec","type":"CDSView"},{"attributes":{},"id":"753691dc-b4bb-486c-a736-7c89e8bdb42b","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"81e82a6f-4d44-4bb5-aacb-217c4b9fe59a","type":"GlyphRenderer"},{"id":"73e1f44b-eebf-4894-a153-81d0409020ca","type":"Grid"},{"id":"8b5b90f3-3ff2-4cfe-854b-4e333e1fce32","type":"Grid"}],"title":{"id":"e38d3810-223f-4298-aa7a-d47f451810bf","type":"Title"},"toolbar":{"id":"32d76807-12d8-417a-a2e0-4c357e615af3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"e487b81b-75da-41e1-afa7-4c6cce6e5b67","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"87f9b8b3-6410-47be-9ea5-ee1b63cff44a","type":"LinearScale"}},"id":"addb6083-20b2-43b2-85c4-417d59c987f6","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"9e0afa06-d9cd-45b3-8e80-f655a9128854","type":"Title"},{"attributes":{},"id":"669fa544-e181-42be-8385-5f09ee4068ad","type":"BasicTicker"},{"attributes":{},"id":"33f9ef73-a82d-4845-a050-e2f5932f04e7","type":"WheelZoomTool"},{"attributes":{},"id":"716948f2-0427-4f00-85db-c9be73390819","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"07de2015-a9a7-4acb-846d-6e4836cb014d","type":"Plot"},"ticker":{"id":"bbf0bac1-9aed-406d-9852-3971824685b5","type":"BasicTicker"}},"id":"2b0ee759-c5a5-4bf4-b614-7b7fa68b4376","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_width"}},"id":"9306210b-fa2d-40b3-aa80-24a313bc88ce","type":"Circle"},{"attributes":{},"id":"dad0e87d-1e35-42ec-9bf1-c7e0ee536fb5","type":"PanTool"},{"attributes":{},"id":"87f9b8b3-6410-47be-9ea5-ee1b63cff44a","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"61f771a4-c697-4d9a-b65b-c717ed24a535","type":"PanTool"},{"id":"3e29fd94-b946-4661-8b10-f64f47c526f3","type":"WheelZoomTool"}]},"id":"14ade41a-6214-4355-a0e6-5dfcd59e3c78","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"e063e954-2bb7-45c6-b895-6ed18c28a7b1","type":"Plot"},"ticker":{"id":"ea0e07ef-6385-406c-b028-12980d70c443","type":"BasicTicker"}},"id":"b360c70b-9500-4415-9a8b-ee6d6deca047","type":"Grid"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"9306210b-fa2d-40b3-aa80-24a313bc88ce","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a06e5f94-13c8-4df4-b8d6-767491117943","type":"CDSView"}},"id":"81e82a6f-4d44-4bb5-aacb-217c4b9fe59a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"07de2015-a9a7-4acb-846d-6e4836cb014d","type":"Plot"},"ticker":{"id":"669fa544-e181-42be-8385-5f09ee4068ad","type":"BasicTicker"}},"id":"9d867a38-cb58-4d5a-891f-bdefc4044168","type":"Grid"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"ed1a0745-223c-495b-b4b7-78dabd41f545","type":"CDSView"},{"attributes":{"plot":{"id":"e063e954-2bb7-45c6-b895-6ed18c28a7b1","type":"Plot"},"ticker":{"id":"2a4d8e6d-b0cd-40ff-845c-398772b1e752","type":"BasicTicker"}},"id":"fb2cae8f-c94d-4217-b7b3-c91300ff342a","type":"Grid"},{"attributes":{},"id":"be887b80-3841-4fa1-8bd9-c698f646dadc","type":"LinearScale"},{"attributes":{},"id":"c41e9824-331d-477a-aba4-1ae3cf89a139","type":"BasicTickFormatter"},{"attributes":{},"id":"f3b7b058-1e01-4b79-83a4-69bca9723579","type":"WheelZoomTool"},{"attributes":{},"id":"0a519326-c83b-4794-a865-8004881a9654","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"ed7a29a2-2397-4983-8116-bf67c59e55fc","type":"Title"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"a06e5f94-13c8-4df4-b8d6-767491117943","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"e9d923ac-327f-4d27-a221-82fd6afe104f","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"162c9682-f3cc-4175-944e-9fa6be342094","type":"LinearAxis"}],"min_border_bottom":42,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":240,"renderers":[{"id":"7e26ac20-cc4f-4bfc-b8ec-2bb148bb21b7","type":"GlyphRenderer"},{"id":"e9d923ac-327f-4d27-a221-82fd6afe104f","type":"LinearAxis"},{"id":"a7f62691-3624-4420-b207-42b2cfe67e59","type":"Grid"},{"id":"162c9682-f3cc-4175-944e-9fa6be342094","type":"LinearAxis"},{"id":"99053d71-3860-4084-bbe6-f9b51ae6f316","type":"Grid"}],"title":{"id":"4ba5bdde-7a4f-450c-9711-c29a3ea6b36b","type":"Title"},"toolbar":{"id":"4c1c6a64-d91f-4bf6-b7ac-79faa7fc322a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"4bae3ccf-1447-4978-927a-e43922d0bd7a","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"92846ea0-43ed-40ee-8609-0a6c9cbc03c5","type":"LinearScale"}},"id":"5147d0b5-5140-4d11-b930-d08d400b0682","type":"Plot"},{"attributes":{"plot":{"id":"bc293c4c-158c-4f09-be36-8b1b6897de32","type":"Plot"},"ticker":{"id":"b2325312-4a15-4251-9f3f-750e3a741be3","type":"BasicTicker"}},"id":"e3f8fe6b-6bb7-4912-b1dd-eade9f3e73bc","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"e38d3810-223f-4298-aa7a-d47f451810bf","type":"Title"},{"attributes":{},"id":"7b970e66-23c7-48e5-9cfb-c3826a354821","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"addb6083-20b2-43b2-85c4-417d59c987f6","type":"Plot"},"ticker":{"id":"2f2a2e5f-f990-4c73-9db4-c0e8b26616da","type":"BasicTicker"}},"id":"8b5b90f3-3ff2-4cfe-854b-4e333e1fce32","type":"Grid"},{"attributes":{},"id":"e487b81b-75da-41e1-afa7-4c6cce6e5b67","type":"LinearScale"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"ed100a13-b812-4d52-aa92-97ce03124365","type":"CDSView"},{"attributes":{"plot":{"id":"addb6083-20b2-43b2-85c4-417d59c987f6","type":"Plot"},"ticker":{"id":"82052bf9-1a94-433e-a898-249478b79b0c","type":"BasicTicker"}},"id":"73e1f44b-eebf-4894-a153-81d0409020ca","type":"Grid"},{"attributes":{},"id":"662d9653-d159-4b35-af33-71a1432bd837","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"5147d0b5-5140-4d11-b930-d08d400b0682","type":"Plot"},"ticker":{"id":"d4bbe39a-c669-43f8-84e7-a55fe009abf4","type":"BasicTicker"}},"id":"99053d71-3860-4084-bbe6-f9b51ae6f316","type":"Grid"},{"attributes":{},"id":"c9925d88-6dc8-40c0-8f21-3d7fcd368a62","type":"LinearScale"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"1da7093d-edc3-4684-831d-0e3920bee45d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2b949053-e44e-452d-abc9-51f09936c1f0","type":"CDSView"}},"id":"7e26ac20-cc4f-4bfc-b8ec-2bb148bb21b7","type":"GlyphRenderer"},{"attributes":{},"id":"6a64169d-7999-4824-bf57-f6f8cca99a02","type":"BasicTicker"},{"attributes":{},"id":"2f2a2e5f-f990-4c73-9db4-c0e8b26616da","type":"BasicTicker"},{"attributes":{},"id":"57e299ef-c4b7-4a68-85fb-39c22bd264fc","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"a76729fc-989d-4260-9f1f-377f25d8f9a5","type":"Plot"},"ticker":{"id":"c4cdc1ed-68e1-447e-ae21-636a564e81e8","type":"BasicTicker"}},"id":"ec77619f-530e-40be-b42f-f37c49784dfe","type":"Grid"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"2b949053-e44e-452d-abc9-51f09936c1f0","type":"CDSView"},{"attributes":{},"id":"0b6c7029-0118-4501-a7a9-5a894cb19642","type":"PanTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"2f9d6a53-9a30-40e9-88c7-83665c5b2180","type":"GlyphRenderer"},{"id":"d05d346d-99c7-4079-a330-9555e21a52cc","type":"Grid"},{"id":"9fd18dee-1938-4d9f-a419-95fedf71c8f1","type":"Grid"}],"title":{"id":"c4600916-f843-47f6-b3ab-38f3ebf1226d","type":"Title"},"toolbar":{"id":"14ade41a-6214-4355-a0e6-5dfcd59e3c78","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"be887b80-3841-4fa1-8bd9-c698f646dadc","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"1ed23454-78f6-4c17-b6c6-38543fd4e73e","type":"LinearScale"}},"id":"e2e16dd8-2287-4005-bc87-df277934c030","type":"Plot"},{"attributes":{},"id":"a8f13262-1b54-4fcb-a96c-28e8ed00c9bd","type":"LinearScale"},{"attributes":{"plot":{"id":"5147d0b5-5140-4d11-b930-d08d400b0682","type":"Plot"},"ticker":{"id":"daa7449f-ba7b-4214-88f9-110d4c24c300","type":"BasicTicker"}},"id":"a7f62691-3624-4420-b207-42b2cfe67e59","type":"Grid"},{"attributes":{"plot":{"id":"a76729fc-989d-4260-9f1f-377f25d8f9a5","type":"Plot"},"ticker":{"id":"6a64169d-7999-4824-bf57-f6f8cca99a02","type":"BasicTicker"}},"id":"19fb67fd-f0c6-4cfa-977c-f8527ab3aaac","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"8ef643a6-741f-416e-89ba-57cae75804d7","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f31726fd-ea0c-4181-87d4-52cf7d66b547","type":"PanTool"},{"id":"6702a013-63d0-4a3c-9fde-0aef4893896f","type":"WheelZoomTool"}]},"id":"3ed0aa4f-b81b-426a-83e9-7a225808153e","type":"Toolbar"},{"attributes":{"children":[{"id":"2c85effa-73eb-476a-9465-bafd83cd5ad7","type":"Plot"},{"id":"c7fc0a4b-432d-45d7-901a-0c98ab40c4b6","type":"Plot"},{"id":"5816ca71-f99c-4176-abd0-dc512f574482","type":"Plot"},{"id":"07de2015-a9a7-4acb-846d-6e4836cb014d","type":"Plot"}]},"id":"8ba8b4f1-a48d-49e6-98c2-4e1f69ac9ff2","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"78489329-726f-43e8-b8b3-2ce462357043","type":"PanTool"},{"id":"272b693b-dab5-47ca-b973-1c01d676db0e","type":"WheelZoomTool"}]},"id":"3cd9567a-b424-42be-b219-c65ae203b64e","type":"Toolbar"},{"attributes":{"formatter":{"id":"b881b046-383d-4912-a424-ccfa21f967f7","type":"BasicTickFormatter"},"plot":{"id":"5147d0b5-5140-4d11-b930-d08d400b0682","type":"Plot"},"ticker":{"id":"d4bbe39a-c669-43f8-84e7-a55fe009abf4","type":"BasicTicker"}},"id":"162c9682-f3cc-4175-944e-9fa6be342094","type":"LinearAxis"},{"attributes":{},"id":"c4cdc1ed-68e1-447e-ae21-636a564e81e8","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"46fcc88d-92ba-4c59-ae0c-82902b814f25","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"9f45f4a1-1fa8-4346-a304-16065ac7e631","type":"CDSView"}},"id":"2f9d6a53-9a30-40e9-88c7-83665c5b2180","type":"GlyphRenderer"},{"attributes":{},"id":"44bcc423-0525-4f5c-962c-2d666c8b541f","type":"LinearScale"},{"attributes":{"formatter":{"id":"2ff6f0eb-706c-495b-83f2-cb46184ba1bd","type":"BasicTickFormatter"},"plot":{"id":"5147d0b5-5140-4d11-b930-d08d400b0682","type":"Plot"},"ticker":{"id":"daa7449f-ba7b-4214-88f9-110d4c24c300","type":"BasicTicker"}},"id":"e9d923ac-327f-4d27-a221-82fd6afe104f","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"856b35f4-1572-4242-a415-b7e6a3ad1520","type":"Title"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"9f45f4a1-1fa8-4346-a304-16065ac7e631","type":"CDSView"},{"attributes":{},"id":"daa7449f-ba7b-4214-88f9-110d4c24c300","type":"BasicTicker"},{"attributes":{},"id":"e950ad50-9e11-4fb6-85e7-c518bd1eaa4c","type":"LinearScale"},{"attributes":{},"id":"a8b4ee6f-e399-4d6c-b100-de486b8c2c06","type":"BasicTicker"},{"attributes":{},"id":"d4bbe39a-c669-43f8-84e7-a55fe009abf4","type":"BasicTicker"},{"attributes":{},"id":"80afd811-91ac-434b-bd22-81a0b8bb622b","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"e2e16dd8-2287-4005-bc87-df277934c030","type":"Plot"},"ticker":{"id":"ff85513b-cef3-45d3-9f87-29224ba7631d","type":"BasicTicker"}},"id":"9fd18dee-1938-4d9f-a419-95fedf71c8f1","type":"Grid"},{"attributes":{},"id":"f4efbe20-3f46-45dc-a8fa-fd51a85e120c","type":"LinearScale"},{"attributes":{},"id":"61f771a4-c697-4d9a-b65b-c717ed24a535","type":"PanTool"},{"attributes":{},"id":"d9ccb8c2-5c43-4eda-be66-878b81547815","type":"WheelZoomTool"},{"attributes":{},"id":"d0efc8d5-9fd1-4e0b-b592-391e171a4db3","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"5c9d41b7-d5bc-425b-bd85-31c78ab7a681","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"48c2cda7-b9e1-4feb-90fe-febb8be92fb1","type":"GlyphRenderer"},{"id":"5c9d41b7-d5bc-425b-bd85-31c78ab7a681","type":"LinearAxis"},{"id":"0fccc673-76bc-48fc-b386-43d9880ff1d5","type":"Grid"},{"id":"a4fb2264-0105-4255-a609-01fc8101f8dd","type":"Grid"}],"title":{"id":"23f154fd-da66-49d8-924c-346c7c70ecf9","type":"Title"},"toolbar":{"id":"3ed0aa4f-b81b-426a-83e9-7a225808153e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"1258d8f7-ceca-4004-b278-6b41aa5331f2","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"850be818-9fa4-4d60-9c1f-df66c170bf3c","type":"LinearScale"}},"id":"957307d2-3f96-4910-bcb1-1bef47ccd10d","type":"Plot"},{"attributes":{"plot":{"id":"e2e16dd8-2287-4005-bc87-df277934c030","type":"Plot"},"ticker":{"id":"a8b4ee6f-e399-4d6c-b100-de486b8c2c06","type":"BasicTicker"}},"id":"d05d346d-99c7-4079-a330-9555e21a52cc","type":"Grid"},{"attributes":{},"id":"7ac7ff84-77fa-46d0-892f-bd4fbbe405ef","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"e2588c2f-5e24-420a-adfa-664fe7d51d8c","type":"Title"},{"attributes":{},"id":"ff85513b-cef3-45d3-9f87-29224ba7631d","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_length"}},"id":"56c8d28c-4ce3-4f69-b93f-b727d50ef99a","type":"Circle"},{"attributes":{},"id":"3e29fd94-b946-4661-8b10-f64f47c526f3","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"b4c35041-fd6a-41cb-aff6-d2f8d37a31fe","type":"Title"},{"attributes":{"callback":null,"column_names":["petal_length","petal_width","sepal_length","sepal_width","color"],"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]}}},"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},{"attributes":{},"id":"0ef290b9-c374-43a4-90fc-7cd4813c53a5","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"c10845cc-52ee-420a-a49a-d34032f90cbb","type":"GlyphRenderer"},{"id":"b295f01d-2eb8-4e38-a07e-ced250ea6124","type":"Grid"},{"id":"131e7904-449b-4801-b2f9-d7df9bf6c500","type":"Grid"}],"title":{"id":"ed7a29a2-2397-4983-8116-bf67c59e55fc","type":"Title"},"toolbar":{"id":"3cd9567a-b424-42be-b219-c65ae203b64e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"c9925d88-6dc8-40c0-8f21-3d7fcd368a62","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"662d9653-d159-4b35-af33-71a1432bd837","type":"LinearScale"}},"id":"d95f9a4a-57f1-41c7-91bd-1e7b1281603d","type":"Plot"},{"attributes":{},"id":"cf058bb9-08f8-4df0-988c-009758f77fe6","type":"LinearScale"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"56c8d28c-4ce3-4f69-b93f-b727d50ef99a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2742946c-507b-4b4f-af47-6e314bc9a610","type":"CDSView"}},"id":"48c2cda7-b9e1-4feb-90fe-febb8be92fb1","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"69924291-df1b-4ed3-b8ba-57db51220a53","type":"GlyphRenderer"},{"id":"43a9533c-2dd3-4ec1-9afe-35527a0c15ae","type":"GlyphRenderer"},{"id":"83a3394a-3651-4880-ae7f-c240724dc85e","type":"GlyphRenderer"},{"id":"e92c8569-079e-4d8c-b6c9-005559c11367","type":"GlyphRenderer"},{"id":"3cfaf9ac-7648-438e-b4eb-ca8eafff1698","type":"GlyphRenderer"},{"id":"81e82a6f-4d44-4bb5-aacb-217c4b9fe59a","type":"GlyphRenderer"},{"id":"2f9d6a53-9a30-40e9-88c7-83665c5b2180","type":"GlyphRenderer"},{"id":"c10845cc-52ee-420a-a49a-d34032f90cbb","type":"GlyphRenderer"},{"id":"0b814af9-7f01-40b5-9127-1bebd3f60d68","type":"GlyphRenderer"},{"id":"a088f42c-0a24-4bc3-9bcb-91cfed0e90cd","type":"GlyphRenderer"},{"id":"0e735feb-745f-482e-aaf2-1e7664d16e2d","type":"GlyphRenderer"},{"id":"408ba1e4-9d3d-47b4-9e25-4294ecf41f87","type":"GlyphRenderer"},{"id":"7e26ac20-cc4f-4bfc-b8ec-2bb148bb21b7","type":"GlyphRenderer"},{"id":"48c2cda7-b9e1-4feb-90fe-febb8be92fb1","type":"GlyphRenderer"},{"id":"2efaeb6a-ca90-48c6-96dd-6b14860293f4","type":"GlyphRenderer"},{"id":"b7c5190f-b30e-4e20-b6a0-c06c41144cee","type":"GlyphRenderer"}]},"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},{"attributes":{},"id":"5e70e6c6-753b-4dd0-b618-2cd32126e962","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_width"}},"id":"d49801c2-af81-4bbc-968b-605051fe17c0","type":"Circle"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"2742946c-507b-4b4f-af47-6e314bc9a610","type":"CDSView"},{"attributes":{"callback":null,"renderers":[{"id":"69924291-df1b-4ed3-b8ba-57db51220a53","type":"GlyphRenderer"},{"id":"43a9533c-2dd3-4ec1-9afe-35527a0c15ae","type":"GlyphRenderer"},{"id":"83a3394a-3651-4880-ae7f-c240724dc85e","type":"GlyphRenderer"},{"id":"e92c8569-079e-4d8c-b6c9-005559c11367","type":"GlyphRenderer"},{"id":"3cfaf9ac-7648-438e-b4eb-ca8eafff1698","type":"GlyphRenderer"},{"id":"81e82a6f-4d44-4bb5-aacb-217c4b9fe59a","type":"GlyphRenderer"},{"id":"2f9d6a53-9a30-40e9-88c7-83665c5b2180","type":"GlyphRenderer"},{"id":"c10845cc-52ee-420a-a49a-d34032f90cbb","type":"GlyphRenderer"},{"id":"0b814af9-7f01-40b5-9127-1bebd3f60d68","type":"GlyphRenderer"},{"id":"a088f42c-0a24-4bc3-9bcb-91cfed0e90cd","type":"GlyphRenderer"},{"id":"0e735feb-745f-482e-aaf2-1e7664d16e2d","type":"GlyphRenderer"},{"id":"408ba1e4-9d3d-47b4-9e25-4294ecf41f87","type":"GlyphRenderer"},{"id":"7e26ac20-cc4f-4bfc-b8ec-2bb148bb21b7","type":"GlyphRenderer"},{"id":"48c2cda7-b9e1-4feb-90fe-febb8be92fb1","type":"GlyphRenderer"},{"id":"2efaeb6a-ca90-48c6-96dd-6b14860293f4","type":"GlyphRenderer"},{"id":"b7c5190f-b30e-4e20-b6a0-c06c41144cee","type":"GlyphRenderer"}]},"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a652f1ea-dcae-4e39-9829-a84f3e14496c","type":"PanTool"},{"id":"8e740d1a-de1b-4feb-afda-4adaba5c8857","type":"WheelZoomTool"}]},"id":"92de7f91-6bda-454f-95d4-8335585e40fc","type":"Toolbar"},{"attributes":{},"id":"18e4ef78-c976-4a07-9b09-d37d05b70e65","type":"LinearScale"},{"attributes":{"children":[{"id":"eaa85f15-2efc-47af-9da4-107b946dba75","type":"Row"},{"id":"565ea743-2f06-445e-888c-ea7a05d8150a","type":"Row"},{"id":"8ba8b4f1-a48d-49e6-98c2-4e1f69ac9ff2","type":"Row"},{"id":"e42f0c80-e0a0-44a4-805e-92ec5f9055ab","type":"Row"}]},"id":"004a746f-1692-4c0a-94d1-c49237affe69","type":"Column"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"d49801c2-af81-4bbc-968b-605051fe17c0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"7b3ccc84-65f8-42e7-850e-f113e8028cfc","type":"CDSView"}},"id":"c10845cc-52ee-420a-a49a-d34032f90cbb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"957307d2-3f96-4910-bcb1-1bef47ccd10d","type":"Plot"},"ticker":{"id":"753691dc-b4bb-486c-a736-7c89e8bdb42b","type":"BasicTicker"}},"id":"0fccc673-76bc-48fc-b386-43d9880ff1d5","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e7463aa-27e8-43a1-b694-91fe57562941","type":"PanTool"},{"id":"3d1926fe-3e4f-40fa-aa97-fca4bd9c8774","type":"WheelZoomTool"}]},"id":"1800703c-fcae-41a2-bd50-43a78dde4ab6","type":"Toolbar"},{"attributes":{"children":[{"id":"7a4cd983-b250-4d5b-96c6-d09460cb7c1b","type":"Plot"},{"id":"e063e954-2bb7-45c6-b895-6ed18c28a7b1","type":"Plot"},{"id":"bc293c4c-158c-4f09-be36-8b1b6897de32","type":"Plot"},{"id":"a76729fc-989d-4260-9f1f-377f25d8f9a5","type":"Plot"}]},"id":"eaa85f15-2efc-47af-9da4-107b946dba75","type":"Row"},{"attributes":{},"id":"92846ea0-43ed-40ee-8609-0a6c9cbc03c5","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"957307d2-3f96-4910-bcb1-1bef47ccd10d","type":"Plot"},"ticker":{"id":"0ef290b9-c374-43a4-90fc-7cd4813c53a5","type":"BasicTicker"}},"id":"a4fb2264-0105-4255-a609-01fc8101f8dd","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"aea0a275-0c43-4b66-b288-6ccd12e745f4","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"69924291-df1b-4ed3-b8ba-57db51220a53","type":"GlyphRenderer"},{"id":"5d4b99d0-4bda-4e86-877b-4cbcbbb83553","type":"Grid"},{"id":"aea0a275-0c43-4b66-b288-6ccd12e745f4","type":"LinearAxis"},{"id":"1d060d76-1702-4a2d-b555-88e9fdf38fe5","type":"Grid"}],"title":{"id":"a091d08d-6d0e-44d4-b2e3-4a438188d3a1","type":"Title"},"toolbar":{"id":"7250b0f1-8698-448f-b234-8a67e3170caf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"8523eb8f-f211-4b62-ae46-653869197ac5","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"d6836ca7-96c1-4605-ba53-32062802e4d1","type":"LinearScale"}},"id":"7a4cd983-b250-4d5b-96c6-d09460cb7c1b","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"23f154fd-da66-49d8-924c-346c7c70ecf9","type":"Title"},{"attributes":{"formatter":{"id":"e7fe41bb-21e8-49a0-bae1-6acd461f7583","type":"BasicTickFormatter"},"plot":{"id":"957307d2-3f96-4910-bcb1-1bef47ccd10d","type":"Plot"},"ticker":{"id":"753691dc-b4bb-486c-a736-7c89e8bdb42b","type":"BasicTicker"}},"id":"5c9d41b7-d5bc-425b-bd85-31c78ab7a681","type":"LinearAxis"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"7b3ccc84-65f8-42e7-850e-f113e8028cfc","type":"CDSView"},{"attributes":{"children":[{"id":"5147d0b5-5140-4d11-b930-d08d400b0682","type":"Plot"},{"id":"957307d2-3f96-4910-bcb1-1bef47ccd10d","type":"Plot"},{"id":"5b0dd18a-6167-4035-a1b3-905f70cb06b3","type":"Plot"},{"id":"d8ad7996-9bb7-42ad-bec0-3f111b3bf9e3","type":"Plot"}]},"id":"e42f0c80-e0a0-44a4-805e-92ec5f9055ab","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1fe5e7ea-1b50-4737-8e18-8f4417a0215f","type":"PanTool"},{"id":"e20280a7-d5cb-49f0-8b57-eb9a8e81848c","type":"WheelZoomTool"}]},"id":"7250b0f1-8698-448f-b234-8a67e3170caf","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"d95f9a4a-57f1-41c7-91bd-1e7b1281603d","type":"Plot"},"ticker":{"id":"9ae77bc8-c8b9-49ad-a100-46b7017b36fe","type":"BasicTicker"}},"id":"131e7904-449b-4801-b2f9-d7df9bf6c500","type":"Grid"},{"attributes":{},"id":"78489329-726f-43e8-b8b3-2ce462357043","type":"PanTool"},{"attributes":{},"id":"f31726fd-ea0c-4181-87d4-52cf7d66b547","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"10f94737-6817-44d6-8777-c29716d01db7","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_length"}},"id":"4a0a9d6d-740f-4118-bf2c-64e04edc65cb","type":"Circle"},{"attributes":{},"id":"6702a013-63d0-4a3c-9fde-0aef4893896f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d95f9a4a-57f1-41c7-91bd-1e7b1281603d","type":"Plot"},"ticker":{"id":"0da18dec-81d0-4554-98b4-08267e576e4c","type":"BasicTicker"}},"id":"b295f01d-2eb8-4e38-a07e-ced250ea6124","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"4ba5bdde-7a4f-450c-9711-c29a3ea6b36b","type":"Title"},{"attributes":{},"id":"1fe5e7ea-1b50-4737-8e18-8f4417a0215f","type":"PanTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"d9a212fd-e916-484e-b642-87297c72a5cf","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"2efaeb6a-ca90-48c6-96dd-6b14860293f4","type":"GlyphRenderer"},{"id":"d9a212fd-e916-484e-b642-87297c72a5cf","type":"LinearAxis"},{"id":"b90e2c7f-f77d-460d-9db5-95f9ff136199","type":"Grid"},{"id":"b84d6205-7235-4eab-8914-fd7dd979e04e","type":"Grid"}],"title":{"id":"10f94737-6817-44d6-8777-c29716d01db7","type":"Title"},"toolbar":{"id":"1800703c-fcae-41a2-bd50-43a78dde4ab6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"eb63732d-20fb-4ea9-99ca-d6fd52372276","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"45fd4924-d4ac-4441-b917-93edb4d81961","type":"LinearScale"}},"id":"5b0dd18a-6167-4035-a1b3-905f70cb06b3","type":"Plot"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"4a0a9d6d-740f-4118-bf2c-64e04edc65cb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"7efc7f8a-ac74-40be-a46b-1c2c03d3443c","type":"CDSView"}},"id":"69924291-df1b-4ed3-b8ba-57db51220a53","type":"GlyphRenderer"},{"attributes":{},"id":"4bae3ccf-1447-4978-927a-e43922d0bd7a","type":"LinearScale"},{"attributes":{},"id":"272b693b-dab5-47ca-b973-1c01d676db0e","type":"WheelZoomTool"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"7efc7f8a-ac74-40be-a46b-1c2c03d3443c","type":"CDSView"},{"attributes":{},"id":"dbe9be45-f56e-4fe5-93a1-e7518cf186be","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"53674486-d168-40a5-a85b-e9d532dbdd11","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"0b814af9-7f01-40b5-9127-1bebd3f60d68","type":"GlyphRenderer"},{"id":"af521b12-454a-4183-8d06-5f0871d3e998","type":"Grid"},{"id":"53674486-d168-40a5-a85b-e9d532dbdd11","type":"LinearAxis"},{"id":"4da72032-1849-426f-9bd7-8eba0857fce4","type":"Grid"}],"title":{"id":"856b35f4-1572-4242-a415-b7e6a3ad1520","type":"Title"},"toolbar":{"id":"92de7f91-6bda-454f-95d4-8335585e40fc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"e950ad50-9e11-4fb6-85e7-c518bd1eaa4c","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"a8f13262-1b54-4fcb-a96c-28e8ed00c9bd","type":"LinearScale"}},"id":"2c85effa-73eb-476a-9465-bafd83cd5ad7","type":"Plot"},{"attributes":{"formatter":{"id":"c41e9824-331d-477a-aba4-1ae3cf89a139","type":"BasicTickFormatter"},"plot":{"id":"7a4cd983-b250-4d5b-96c6-d09460cb7c1b","type":"Plot"},"ticker":{"id":"a9ba1ddf-b653-4ea8-981b-5f9abe200d21","type":"BasicTicker"}},"id":"aea0a275-0c43-4b66-b288-6ccd12e745f4","type":"LinearAxis"},{"attributes":{},"id":"9ae77bc8-c8b9-49ad-a100-46b7017b36fe","type":"BasicTicker"},{"attributes":{},"id":"b881b046-383d-4912-a424-ccfa21f967f7","type":"BasicTickFormatter"},{"attributes":{},"id":"45fd4924-d4ac-4441-b917-93edb4d81961","type":"LinearScale"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"28424808-bbaa-4143-9dcc-e6167926b867","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4f9aa8a5-1138-475b-8604-8460e28f9352","type":"CDSView"}},"id":"2efaeb6a-ca90-48c6-96dd-6b14860293f4","type":"GlyphRenderer"},{"attributes":{},"id":"a9ba1ddf-b653-4ea8-981b-5f9abe200d21","type":"BasicTicker"},{"attributes":{},"id":"a652f1ea-dcae-4e39-9829-a84f3e14496c","type":"PanTool"},{"attributes":{"plot":{"id":"7a4cd983-b250-4d5b-96c6-d09460cb7c1b","type":"Plot"},"ticker":{"id":"dbe9be45-f56e-4fe5-93a1-e7518cf186be","type":"BasicTicker"}},"id":"5d4b99d0-4bda-4e86-877b-4cbcbbb83553","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"b9db50d2-352c-4fc3-8023-ee94a603d426","type":"Circle"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"4f9aa8a5-1138-475b-8604-8460e28f9352","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"7a4cd983-b250-4d5b-96c6-d09460cb7c1b","type":"Plot"},"ticker":{"id":"a9ba1ddf-b653-4ea8-981b-5f9abe200d21","type":"BasicTicker"}},"id":"1d060d76-1702-4a2d-b555-88e9fdf38fe5","type":"Grid"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"b9db50d2-352c-4fc3-8023-ee94a603d426","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c1c6a303-35a0-44ad-969c-d8c777cc1b3a","type":"CDSView"}},"id":"0b814af9-7f01-40b5-9127-1bebd3f60d68","type":"GlyphRenderer"},{"attributes":{},"id":"850be818-9fa4-4d60-9c1f-df66c170bf3c","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"47de5f0a-fbf5-4515-9412-004fb775d23d","type":"PanTool"},{"id":"33f9ef73-a82d-4845-a050-e2f5932f04e7","type":"WheelZoomTool"}]},"id":"f73a2713-352e-44d4-9eda-5acaa72b0d4a","type":"Toolbar"},{"attributes":{"plot":{"id":"5b0dd18a-6167-4035-a1b3-905f70cb06b3","type":"Plot"},"ticker":{"id":"e86e1b05-3907-4cfc-b0a4-094c0d057ae3","type":"BasicTicker"}},"id":"b90e2c7f-f77d-460d-9db5-95f9ff136199","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1f2c97ca-ca31-4408-bca7-1a934252736e","type":"PanTool"},{"id":"55934214-04e2-42b5-a930-48f0e78c12f0","type":"WheelZoomTool"}]},"id":"b706098c-0136-4d88-9679-5b995c6d7f5d","type":"Toolbar"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"c1c6a303-35a0-44ad-969c-d8c777cc1b3a","type":"CDSView"},{"attributes":{},"id":"e20280a7-d5cb-49f0-8b57-eb9a8e81848c","type":"WheelZoomTool"},{"attributes":{},"id":"1258d8f7-ceca-4004-b278-6b41aa5331f2","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"5b0dd18a-6167-4035-a1b3-905f70cb06b3","type":"Plot"},"ticker":{"id":"0a361736-c0e2-4ca5-881b-a0b15693fb29","type":"BasicTicker"}},"id":"b84d6205-7235-4eab-8914-fd7dd979e04e","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"43a9533c-2dd3-4ec1-9afe-35527a0c15ae","type":"GlyphRenderer"},{"id":"fb2cae8f-c94d-4217-b7b3-c91300ff342a","type":"Grid"},{"id":"b360c70b-9500-4415-9a8b-ee6d6deca047","type":"Grid"}],"title":{"id":"8a7b6bbc-c557-47de-905f-9d0050668ce7","type":"Title"},"toolbar":{"id":"f73a2713-352e-44d4-9eda-5acaa72b0d4a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"62933bf6-b2a7-4cbc-868c-b67adfc8b035","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"fcd73170-a05d-4e3b-8bda-5032218e7858","type":"LinearScale"}},"id":"e063e954-2bb7-45c6-b895-6ed18c28a7b1","type":"Plot"},{"attributes":{"formatter":{"id":"d0efc8d5-9fd1-4e0b-b592-391e171a4db3","type":"BasicTickFormatter"},"plot":{"id":"2c85effa-73eb-476a-9465-bafd83cd5ad7","type":"Plot"},"ticker":{"id":"d3285369-b607-44c5-9e4e-e4c077f749da","type":"BasicTicker"}},"id":"53674486-d168-40a5-a85b-e9d532dbdd11","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1edc1afe-d994-4220-91a6-3b393dcc306b","type":"BasicTickFormatter"},"plot":{"id":"5b0dd18a-6167-4035-a1b3-905f70cb06b3","type":"Plot"},"ticker":{"id":"e86e1b05-3907-4cfc-b0a4-094c0d057ae3","type":"BasicTicker"}},"id":"d9a212fd-e916-484e-b642-87297c72a5cf","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"1eae6ada-90d2-4f4f-92b4-b7233a51490c","type":"Title"},{"attributes":{},"id":"5fd1d25c-d966-4ba1-b318-833bf0de9800","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_length"}},"id":"95b80e65-ec7f-4530-b098-7f7a69717ba9","type":"Circle"},{"attributes":{},"id":"d3285369-b607-44c5-9e4e-e4c077f749da","type":"BasicTicker"},{"attributes":{},"id":"5e7463aa-27e8-43a1-b694-91fe57562941","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0b6c7029-0118-4501-a7a9-5a894cb19642","type":"PanTool"},{"id":"f3b7b058-1e01-4b79-83a4-69bca9723579","type":"WheelZoomTool"}]},"id":"5b43e636-54c3-4ac2-b770-84f3a9c42723","type":"Toolbar"},{"attributes":{"plot":{"id":"2c85effa-73eb-476a-9465-bafd83cd5ad7","type":"Plot"},"ticker":{"id":"055d2a97-8621-4fb3-96bb-cfd1d61364c5","type":"BasicTicker"}},"id":"af521b12-454a-4183-8d06-5f0871d3e998","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_length"}},"id":"1da7093d-edc3-4684-831d-0e3920bee45d","type":"Circle"},{"attributes":{},"id":"3d1926fe-3e4f-40fa-aa97-fca4bd9c8774","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6f92b190-d6e3-44ba-b5d5-e4aa882111a3","type":"PanTool"},{"id":"da569fee-fbeb-4b7b-b2f1-4b1f7c254512","type":"WheelZoomTool"}]},"id":"ccc7a89f-b1ca-4b75-a9df-cda82c2790a4","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"2c85effa-73eb-476a-9465-bafd83cd5ad7","type":"Plot"},"ticker":{"id":"d3285369-b607-44c5-9e4e-e4c077f749da","type":"BasicTicker"}},"id":"4da72032-1849-426f-9bd7-8eba0857fce4","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"a9d680b2-05ee-4ada-b91b-2adfc39e5ed1","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"b7c5190f-b30e-4e20-b6a0-c06c41144cee","type":"GlyphRenderer"},{"id":"a9d680b2-05ee-4ada-b91b-2adfc39e5ed1","type":"LinearAxis"},{"id":"9829ae36-9535-4fce-8cb9-ce96b4e22610","type":"Grid"},{"id":"66e95cb7-be55-4de7-85bb-23edba41540e","type":"Grid"}],"title":{"id":"1eae6ada-90d2-4f4f-92b4-b7233a51490c","type":"Title"},"toolbar":{"id":"b706098c-0136-4d88-9679-5b995c6d7f5d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"57b4d5d0-3af0-4628-a699-096899399f06","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"5fd1d25c-d966-4ba1-b318-833bf0de9800","type":"LinearScale"}},"id":"d8ad7996-9bb7-42ad-bec0-3f111b3bf9e3","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"26cc2a67-c534-47c8-94cc-2254c6efbcb0","type":"PanTool"},{"id":"01f335ce-e73b-481a-8ea8-b725f850e4d8","type":"WheelZoomTool"}]},"id":"8340e440-c6b3-479a-8ec2-56691d4fd53f","type":"Toolbar"},{"attributes":{},"id":"eb63732d-20fb-4ea9-99ca-d6fd52372276","type":"LinearScale"},{"attributes":{},"id":"ea0e07ef-6385-406c-b028-12980d70c443","type":"BasicTicker"},{"attributes":{"tools":[{"id":"1fe5e7ea-1b50-4737-8e18-8f4417a0215f","type":"PanTool"},{"id":"e20280a7-d5cb-49f0-8b57-eb9a8e81848c","type":"WheelZoomTool"},{"id":"47de5f0a-fbf5-4515-9412-004fb775d23d","type":"PanTool"},{"id":"33f9ef73-a82d-4845-a050-e2f5932f04e7","type":"WheelZoomTool"},{"id":"6f92b190-d6e3-44ba-b5d5-e4aa882111a3","type":"PanTool"},{"id":"da569fee-fbeb-4b7b-b2f1-4b1f7c254512","type":"WheelZoomTool"},{"id":"0b6c7029-0118-4501-a7a9-5a894cb19642","type":"PanTool"},{"id":"f3b7b058-1e01-4b79-83a4-69bca9723579","type":"WheelZoomTool"},{"id":"334234eb-c14c-4f33-96c1-523227ef9e5f","type":"PanTool"},{"id":"3e4092d8-fd6f-497e-8aad-71ed3bc6fe1b","type":"WheelZoomTool"},{"id":"7b970e66-23c7-48e5-9cfb-c3826a354821","type":"PanTool"},{"id":"57e299ef-c4b7-4a68-85fb-39c22bd264fc","type":"WheelZoomTool"},{"id":"61f771a4-c697-4d9a-b65b-c717ed24a535","type":"PanTool"},{"id":"3e29fd94-b946-4661-8b10-f64f47c526f3","type":"WheelZoomTool"},{"id":"78489329-726f-43e8-b8b3-2ce462357043","type":"PanTool"},{"id":"272b693b-dab5-47ca-b973-1c01d676db0e","type":"WheelZoomTool"},{"id":"a652f1ea-dcae-4e39-9829-a84f3e14496c","type":"PanTool"},{"id":"8e740d1a-de1b-4feb-afda-4adaba5c8857","type":"WheelZoomTool"},{"id":"26cc2a67-c534-47c8-94cc-2254c6efbcb0","type":"PanTool"},{"id":"01f335ce-e73b-481a-8ea8-b725f850e4d8","type":"WheelZoomTool"},{"id":"732b17ba-627e-415c-b4c7-0a5b0537f184","type":"PanTool"},{"id":"c1693e36-00a3-4fc6-ab02-526032e40b17","type":"WheelZoomTool"},{"id":"dad0e87d-1e35-42ec-9bf1-c7e0ee536fb5","type":"PanTool"},{"id":"0a519326-c83b-4794-a865-8004881a9654","type":"WheelZoomTool"},{"id":"80afd811-91ac-434b-bd22-81a0b8bb622b","type":"PanTool"},{"id":"d9ccb8c2-5c43-4eda-be66-878b81547815","type":"WheelZoomTool"},{"id":"f31726fd-ea0c-4181-87d4-52cf7d66b547","type":"PanTool"},{"id":"6702a013-63d0-4a3c-9fde-0aef4893896f","type":"WheelZoomTool"},{"id":"5e7463aa-27e8-43a1-b694-91fe57562941","type":"PanTool"},{"id":"3d1926fe-3e4f-40fa-aa97-fca4bd9c8774","type":"WheelZoomTool"},{"id":"1f2c97ca-ca31-4408-bca7-1a934252736e","type":"PanTool"},{"id":"55934214-04e2-42b5-a930-48f0e78c12f0","type":"WheelZoomTool"}]},"id":"21b398f8-982c-488a-afa1-d3f4fb494353","type":"ProxyToolbar"},{"attributes":{},"id":"8e740d1a-de1b-4feb-afda-4adaba5c8857","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"83a3394a-3651-4880-ae7f-c240724dc85e","type":"GlyphRenderer"},{"id":"e3f8fe6b-6bb7-4912-b1dd-eade9f3e73bc","type":"Grid"},{"id":"58c49b64-394a-484a-a8a3-a2d158d82a28","type":"Grid"}],"title":{"id":"081e1b42-f5c6-4eac-b75c-e6c869a64f64","type":"Title"},"toolbar":{"id":"ccc7a89f-b1ca-4b75-a9df-cda82c2790a4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"0f3e1acc-dd42-4aae-a529-aaac87975b47","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"83227664-1816-4549-891b-29479482a246","type":"LinearScale"}},"id":"bc293c4c-158c-4f09-be36-8b1b6897de32","type":"Plot"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"a088f42c-0a24-4bc3-9bcb-91cfed0e90cd","type":"GlyphRenderer"},{"id":"d3402786-c5a8-47b3-9d98-97061b46767d","type":"Grid"},{"id":"3614f27e-ffa6-4e70-b9dc-b8074f33b4f5","type":"Grid"}],"title":{"id":"b4c35041-fd6a-41cb-aff6-d2f8d37a31fe","type":"Title"},"toolbar":{"id":"8340e440-c6b3-479a-8ec2-56691d4fd53f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"cf058bb9-08f8-4df0-988c-009758f77fe6","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"f4efbe20-3f46-45dc-a8fa-fd51a85e120c","type":"LinearScale"}},"id":"c7fc0a4b-432d-45d7-901a-0c98ab40c4b6","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_length"}},"id":"fa98491d-9361-466d-8b4b-d640c97c747d","type":"Circle"},{"attributes":{},"id":"0da18dec-81d0-4554-98b4-08267e576e4c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_length"}},"id":"ecbd6085-04a9-4fe5-b924-f6e2b3f54e29","type":"Circle"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"95b80e65-ec7f-4530-b098-7f7a69717ba9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ed1a0745-223c-495b-b4b7-78dabd41f545","type":"CDSView"}},"id":"43a9533c-2dd3-4ec1-9afe-35527a0c15ae","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"ecbd6085-04a9-4fe5-b924-f6e2b3f54e29","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a7cb758c-24af-4474-b93e-064b925be6fd","type":"CDSView"}},"id":"b7c5190f-b30e-4e20-b6a0-c06c41144cee","type":"GlyphRenderer"},{"attributes":{},"id":"57b4d5d0-3af0-4628-a699-096899399f06","type":"LinearScale"},{"attributes":{"children":[{"id":"c542c771-1f81-4a48-9519-442f5553783d","type":"ToolbarBox"},{"id":"004a746f-1692-4c0a-94d1-c49237affe69","type":"Column"}]},"id":"2db4b175-e3d9-4661-9d93-1742de3224b8","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"732b17ba-627e-415c-b4c7-0a5b0537f184","type":"PanTool"},{"id":"c1693e36-00a3-4fc6-ab02-526032e40b17","type":"WheelZoomTool"}]},"id":"1a87d5dc-96f7-4c80-8d31-3391b76ab1c2","type":"Toolbar"},{"attributes":{},"id":"2a4d8e6d-b0cd-40ff-845c-398772b1e752","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_width"}},"id":"1af04a31-99f3-4b2f-b739-51a1df4b006e","type":"Circle"},{"attributes":{},"id":"47de5f0a-fbf5-4515-9412-004fb775d23d","type":"PanTool"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"1af04a31-99f3-4b2f-b739-51a1df4b006e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5bb004c6-be4f-41da-91d4-6893b9db07b2","type":"CDSView"}},"id":"a088f42c-0a24-4bc3-9bcb-91cfed0e90cd","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d8ad7996-9bb7-42ad-bec0-3f111b3bf9e3","type":"Plot"},"ticker":{"id":"3ca757a0-07f2-4e15-90be-a32efa5495e6","type":"BasicTicker"}},"id":"9829ae36-9535-4fce-8cb9-ce96b4e22610","type":"Grid"},{"attributes":{"toolbar":{"id":"21b398f8-982c-488a-afa1-d3f4fb494353","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"c542c771-1f81-4a48-9519-442f5553783d","type":"ToolbarBox"},{"attributes":{},"id":"fcd73170-a05d-4e3b-8bda-5032218e7858","type":"LinearScale"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"fa98491d-9361-466d-8b4b-d640c97c747d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c96c0f9c-edc7-4822-a7ab-75193cf2de0d","type":"CDSView"}},"id":"83a3394a-3651-4880-ae7f-c240724dc85e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"5bb004c6-be4f-41da-91d4-6893b9db07b2","type":"CDSView"},{"attributes":{},"id":"da569fee-fbeb-4b7b-b2f1-4b1f7c254512","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"d8ad7996-9bb7-42ad-bec0-3f111b3bf9e3","type":"Plot"},"ticker":{"id":"939c715a-6dc5-4e8c-8b77-5285ad1ee7e7","type":"BasicTicker"}},"id":"66e95cb7-be55-4de7-85bb-23edba41540e","type":"Grid"},{"attributes":{},"id":"6c42b9ad-2d33-484d-8ec5-24e94619d015","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"c44a8cc4-39a4-44dc-aef7-35f92fdda61f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ed100a13-b812-4d52-aa92-97ce03124365","type":"CDSView"}},"id":"e92c8569-079e-4d8c-b6c9-005559c11367","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"c7fc0a4b-432d-45d7-901a-0c98ab40c4b6","type":"Plot"},"ticker":{"id":"d9b592d8-b5c5-4cf1-acfd-6154a029cb2c","type":"BasicTicker"}},"id":"3614f27e-ffa6-4e70-b9dc-b8074f33b4f5","type":"Grid"},{"attributes":{"formatter":{"id":"eaa787e4-5568-4852-ab22-628de86bf85e","type":"BasicTickFormatter"},"plot":{"id":"d8ad7996-9bb7-42ad-bec0-3f111b3bf9e3","type":"Plot"},"ticker":{"id":"3ca757a0-07f2-4e15-90be-a32efa5495e6","type":"BasicTicker"}},"id":"a9d680b2-05ee-4ada-b91b-2adfc39e5ed1","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_width"}},"id":"d97c3757-19b7-40a2-a323-2f5627f5b172","type":"Circle"},{"attributes":{},"id":"26cc2a67-c534-47c8-94cc-2254c6efbcb0","type":"PanTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"e92c8569-079e-4d8c-b6c9-005559c11367","type":"GlyphRenderer"},{"id":"19fb67fd-f0c6-4cfa-977c-f8527ab3aaac","type":"Grid"},{"id":"ec77619f-530e-40be-b42f-f37c49784dfe","type":"Grid"}],"title":{"id":"d687c463-e2b7-404b-a9df-59e0dd62c742","type":"Title"},"toolbar":{"id":"5b43e636-54c3-4ac2-b770-84f3a9c42723","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"687fb030-5b20-4193-93c9-f88b9eccc0d7","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"c1b8a6f6-592a-46c2-a776-0ca449b826fc","type":"LinearScale"}},"id":"a76729fc-989d-4260-9f1f-377f25d8f9a5","type":"Plot"},{"attributes":{},"id":"3ca757a0-07f2-4e15-90be-a32efa5495e6","type":"BasicTicker"},{"attributes":{},"id":"1f2c97ca-ca31-4408-bca7-1a934252736e","type":"PanTool"},{"attributes":{"plot":{"id":"c7fc0a4b-432d-45d7-901a-0c98ab40c4b6","type":"Plot"},"ticker":{"id":"6c42b9ad-2d33-484d-8ec5-24e94619d015","type":"BasicTicker"}},"id":"d3402786-c5a8-47b3-9d98-97061b46767d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_length"}},"id":"c44a8cc4-39a4-44dc-aef7-35f92fdda61f","type":"Circle"},{"attributes":{},"id":"55934214-04e2-42b5-a930-48f0e78c12f0","type":"WheelZoomTool"},{"attributes":{"source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"}},"id":"c96c0f9c-edc7-4822-a7ab-75193cf2de0d","type":"CDSView"},{"attributes":{"data_source":{"id":"3705a4dd-e43d-4b0e-9e15-7881078bc8b1","type":"ColumnDataSource"},"glyph":{"id":"d97c3757-19b7-40a2-a323-2f5627f5b172","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b8beacaf-136b-4bd0-9c28-2e3d99555973","type":"CDSView"}},"id":"0e735feb-745f-482e-aaf2-1e7664d16e2d","type":"GlyphRenderer"},{"attributes":{},"id":"01f335ce-e73b-481a-8ea8-b725f850e4d8","type":"WheelZoomTool"},{"attributes":{},"id":"d6836ca7-96c1-4605-ba53-32062802e4d1","type":"LinearScale"},{"attributes":{},"id":"b2325312-4a15-4251-9f3f-750e3a741be3","type":"BasicTicker"},{"attributes":{},"id":"d9b592d8-b5c5-4cf1-acfd-6154a029cb2c","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"0e735feb-745f-482e-aaf2-1e7664d16e2d","type":"GlyphRenderer"},{"id":"aedf9e76-190d-43ca-936b-2ecf1db6c90f","type":"Grid"},{"id":"9c74c223-f4a0-404c-9d93-4808d79a1354","type":"Grid"}],"title":{"id":"8ef643a6-741f-416e-89ba-57cae75804d7","type":"Title"},"toolbar":{"id":"1a87d5dc-96f7-4c80-8d31-3391b76ab1c2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29861603-6b8d-47e2-9d91-62af1315e77f","type":"DataRange1d"},"x_scale":{"id":"7ac7ff84-77fa-46d0-892f-bd4fbbe405ef","type":"LinearScale"},"y_range":{"id":"34c75061-60d4-42bb-956f-86990375b0b2","type":"DataRange1d"},"y_scale":{"id":"44bcc423-0525-4f5c-962c-2d666c8b541f","type":"LinearScale"}},"id":"5816ca71-f99c-4176-abd0-dc512f574482","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"a091d08d-6d0e-44d4-b2e3-4a438188d3a1","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"bc293c4c-158c-4f09-be36-8b1b6897de32","type":"Plot"},"ticker":{"id":"0ef925c1-f8ce-4475-9958-497b7e08c9ec","type":"BasicTicker"}},"id":"58c49b64-394a-484a-a8a3-a2d158d82a28","type":"Grid"},{"attributes":{},"id":"8523eb8f-f211-4b62-ae46-653869197ac5","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_length"}},"id":"28424808-bbaa-4143-9dcc-e6167926b867","type":"Circle"},{"attributes":{},"id":"6f92b190-d6e3-44ba-b5d5-e4aa882111a3","type":"PanTool"}],"root_ids":["2db4b175-e3d9-4661-9d93-1742de3224b8"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"cdbb0bb0-79c9-43fe-b449-24fde82a0afa","elementid":"be7a02d2-5930-4c9b-8e69-1e4888c1e62f","modelid":"2db4b175-e3d9-4661-9d93-1742de3224b8"}];
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