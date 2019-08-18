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
      };var element = document.getElementById("fda4b7c4-4c01-4a46-aabb-60e881d724c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fda4b7c4-4c01-4a46-aabb-60e881d724c2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9623a0a4-9473-445c-a67a-db5f7f7cdadb":{"roots":{"references":[{"attributes":{},"id":"9564bca6-e7e8-40ab-a7ff-cfead3f4469f","type":"LinearScale"},{"attributes":{"filters":[{"id":"29de8a24-baf0-417f-92a8-b29c25ea1ef5","type":"BooleanFilter"}],"source":{"id":"d914cce9-1d6e-4693-9193-0b8847c4e880","type":"ColumnDataSource"}},"id":"ee0e6a9a-6ce5-46e3-82e8-7c2d2c9b616a","type":"CDSView"},{"attributes":{},"id":"2b90a67e-541f-4b18-b4e3-2f7497e06b07","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"559db6c1-f7e2-457c-aa58-d48292c5eaa7","type":"Circle"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"29de8a24-baf0-417f-92a8-b29c25ea1ef5","type":"BooleanFilter"},{"attributes":{"formatter":{"id":"853ba958-6098-48f5-bfa1-6f78a4b68526","type":"BasicTickFormatter"},"plot":{"id":"6995b86f-e41d-42af-b865-4480185dcd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"afd355cf-9a15-49ff-85c4-cd4662981559","type":"BasicTicker"}},"id":"f7f9bf53-e41e-4e59-8ab4-02057b8a8d49","type":"LinearAxis"},{"attributes":{},"id":"ff8712e4-444d-4083-8b2f-6da4d867c099","type":"BasicTicker"},{"attributes":{"plot":{"id":"06563e13-2837-4fef-b791-4656fd9563d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c2dddcf-ac22-4595-b5a1-f6353fad3a7f","type":"BasicTicker"}},"id":"5974598f-926c-4b10-a99c-bacfe4c67e75","type":"Grid"},{"attributes":{"callback":null},"id":"3d2da96d-3cb9-4601-ab21-1e442f8254f0","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"24983ff8-8536-427c-a084-3aa04c7287f6","type":"BoxAnnotation"},"renderers":[{"id":"6336c64f-41eb-4e81-938f-52adf7a854ae","type":"GlyphRenderer"}]},"id":"a4a6fbe5-2dbf-4556-b155-3dddddf75bd4","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e34a9523-5efc-41bc-a174-0e2742b74418","type":"Circle"},{"attributes":{"children":[{"id":"3cba2a49-6a13-4ce5-bb23-721d3c20a2fe","type":"Row"}]},"id":"9dc32fda-02d1-47ea-8b79-8a86091bf58a","type":"Column"},{"attributes":{"toolbar":{"id":"a3ad9fe4-56a1-4c25-8e20-64d7535e20bd","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"2359baff-446b-4381-a0ef-062e4f8a3a4c","type":"ToolbarBox"},{"attributes":{"callback":null,"overlay":{"id":"8b5cfb94-b8df-4b4e-aa58-56a9f16905d9","type":"BoxAnnotation"},"renderers":[{"id":"26212baa-02b8-442b-9d0e-bd6c34c1dce5","type":"GlyphRenderer"}]},"id":"a6dbd691-3efd-4456-8050-de5855a151af","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"a14065d1-0831-491e-8436-6bebffcba4ce","type":"DataRange1d"},{"attributes":{},"id":"729f6517-de23-44f2-b2f8-4fe8ab9b2138","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24983ff8-8536-427c-a084-3aa04c7287f6","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"2e9c66af-769e-4c5e-9c34-7981b84e9f00","type":"BasicTickFormatter"},"plot":{"id":"06563e13-2837-4fef-b791-4656fd9563d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c2dddcf-ac22-4595-b5a1-f6353fad3a7f","type":"BasicTicker"}},"id":"c91597c1-482d-4ebe-82a7-be5f94e34108","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a6dbd691-3efd-4456-8050-de5855a151af","type":"BoxSelectTool"},{"id":"d89ad87b-778b-418c-83ff-7ffd323a38e0","type":"HoverTool"},{"id":"13164fea-4de7-4fae-8d63-e6cbb51c3160","type":"ResetTool"}]},"id":"7e330466-6730-4ec0-ba91-0b4049b1f991","type":"Toolbar"},{"attributes":{},"id":"afd355cf-9a15-49ff-85c4-cd4662981559","type":"BasicTicker"},{"attributes":{"formatter":{"id":"29bdbdc2-3dcd-4efc-b489-ee90aa6412b4","type":"BasicTickFormatter"},"plot":{"id":"6995b86f-e41d-42af-b865-4480185dcd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff8712e4-444d-4083-8b2f-6da4d867c099","type":"BasicTicker"}},"id":"af435793-3a3c-4860-8737-dd107b3212c4","type":"LinearAxis"},{"attributes":{"tools":[{"id":"a6dbd691-3efd-4456-8050-de5855a151af","type":"BoxSelectTool"},{"id":"d89ad87b-778b-418c-83ff-7ffd323a38e0","type":"HoverTool"},{"id":"13164fea-4de7-4fae-8d63-e6cbb51c3160","type":"ResetTool"},{"id":"a4a6fbe5-2dbf-4556-b155-3dddddf75bd4","type":"BoxSelectTool"},{"id":"3d2da96d-3cb9-4601-ab21-1e442f8254f0","type":"HoverTool"},{"id":"0b854d56-4a99-4898-8d0e-3127ce1729bc","type":"ResetTool"}]},"id":"a3ad9fe4-56a1-4c25-8e20-64d7535e20bd","type":"ProxyToolbar"},{"attributes":{},"id":"0b854d56-4a99-4898-8d0e-3127ce1729bc","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b7ace91-9607-493b-8177-514bf1315f01","type":"Circle"},{"attributes":{},"id":"853ba958-6098-48f5-bfa1-6f78a4b68526","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"f7f9bf53-e41e-4e59-8ab4-02057b8a8d49","type":"LinearAxis"}],"left":[{"id":"af435793-3a3c-4860-8737-dd107b3212c4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f7f9bf53-e41e-4e59-8ab4-02057b8a8d49","type":"LinearAxis"},{"id":"0ca4881f-985c-4bbc-a1ae-56b6d910eb9c","type":"Grid"},{"id":"af435793-3a3c-4860-8737-dd107b3212c4","type":"LinearAxis"},{"id":"7766d72f-474a-4d0e-8704-4b4c158a35fd","type":"Grid"},{"id":"8b5cfb94-b8df-4b4e-aa58-56a9f16905d9","type":"BoxAnnotation"},{"id":"26212baa-02b8-442b-9d0e-bd6c34c1dce5","type":"GlyphRenderer"}],"title":{"id":"827c0aa6-be44-46ca-969e-59eb617b084d","type":"Title"},"toolbar":{"id":"7e330466-6730-4ec0-ba91-0b4049b1f991","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3c79dc3c-6978-42be-99fe-5f20804d9c00","type":"DataRange1d"},"x_scale":{"id":"9564bca6-e7e8-40ab-a7ff-cfead3f4469f","type":"LinearScale"},"y_range":{"id":"a14065d1-0831-491e-8436-6bebffcba4ce","type":"DataRange1d"},"y_scale":{"id":"2b90a67e-541f-4b18-b4e3-2f7497e06b07","type":"LinearScale"}},"id":"6995b86f-e41d-42af-b865-4480185dcd47","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"d914cce9-1d6e-4693-9193-0b8847c4e880","type":"ColumnDataSource"},"glyph":{"id":"332cdc06-5d55-40e7-860d-fbdb3dc6ee1a","type":"Circle"},"hover_glyph":{"id":"559db6c1-f7e2-457c-aa58-d48292c5eaa7","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"5b7ace91-9607-493b-8177-514bf1315f01","type":"Circle"},"selection_glyph":null,"view":{"id":"ee0e6a9a-6ce5-46e3-82e8-7c2d2c9b616a","type":"CDSView"}},"id":"6336c64f-41eb-4e81-938f-52adf7a854ae","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"6995b86f-e41d-42af-b865-4480185dcd47","subtype":"Figure","type":"Plot"},{"id":"06563e13-2837-4fef-b791-4656fd9563d3","subtype":"Figure","type":"Plot"}]},"id":"3cba2a49-6a13-4ce5-bb23-721d3c20a2fe","type":"Row"},{"attributes":{},"id":"a5c81853-bf89-4104-801e-516b1b826aaa","type":"BasicTickFormatter"},{"attributes":{},"id":"9d3e0fb1-470c-4c4a-afeb-a0fcf7257ebe","type":"LinearScale"},{"attributes":{"plot":{"id":"6995b86f-e41d-42af-b865-4480185dcd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"afd355cf-9a15-49ff-85c4-cd4662981559","type":"BasicTicker"}},"id":"0ca4881f-985c-4bbc-a1ae-56b6d910eb9c","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"2c806b59-1803-4208-9ed2-8ad9a3972dda","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a4a6fbe5-2dbf-4556-b155-3dddddf75bd4","type":"BoxSelectTool"},{"id":"3d2da96d-3cb9-4601-ab21-1e442f8254f0","type":"HoverTool"},{"id":"0b854d56-4a99-4898-8d0e-3127ce1729bc","type":"ResetTool"}]},"id":"22a14b95-b298-45cd-9014-609f240be7b2","type":"Toolbar"},{"attributes":{},"id":"59af085b-2f33-4bca-9c81-44c241f1c55d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"332cdc06-5d55-40e7-860d-fbdb3dc6ee1a","type":"Circle"},{"attributes":{"children":[{"id":"2359baff-446b-4381-a0ef-062e4f8a3a4c","type":"ToolbarBox"},{"id":"9dc32fda-02d1-47ea-8b79-8a86091bf58a","type":"Column"}]},"id":"0abbea5d-af5a-4023-8a19-b68bd3daf72a","type":"Column"},{"attributes":{"callback":null},"id":"d89ad87b-778b-418c-83ff-7ffd323a38e0","type":"HoverTool"},{"attributes":{"data_source":{"id":"d914cce9-1d6e-4693-9193-0b8847c4e880","type":"ColumnDataSource"},"glyph":{"id":"a35d0ea6-601b-4d55-a000-5f726c1c62fb","type":"Circle"},"hover_glyph":{"id":"e34a9523-5efc-41bc-a174-0e2742b74418","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3a9a3c7d-c772-4ea2-81c0-93c08ab9f7df","type":"Circle"},"selection_glyph":null,"view":{"id":"e369fb84-9f3a-4358-8583-83437dd2097e","type":"CDSView"}},"id":"26212baa-02b8-442b-9d0e-bd6c34c1dce5","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"827c0aa6-be44-46ca-969e-59eb617b084d","type":"Title"},{"attributes":{},"id":"9c2dddcf-ac22-4595-b5a1-f6353fad3a7f","type":"BasicTicker"},{"attributes":{},"id":"13164fea-4de7-4fae-8d63-e6cbb51c3160","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"d914cce9-1d6e-4693-9193-0b8847c4e880","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"a5c81853-bf89-4104-801e-516b1b826aaa","type":"BasicTickFormatter"},"plot":{"id":"06563e13-2837-4fef-b791-4656fd9563d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"59af085b-2f33-4bca-9c81-44c241f1c55d","type":"BasicTicker"}},"id":"0f9896e9-720d-48b7-b7a6-b40007f61e5a","type":"LinearAxis"},{"attributes":{},"id":"29bdbdc2-3dcd-4efc-b489-ee90aa6412b4","type":"BasicTickFormatter"},{"attributes":{},"id":"2e9c66af-769e-4c5e-9c34-7981b84e9f00","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"d914cce9-1d6e-4693-9193-0b8847c4e880","type":"ColumnDataSource"}},"id":"e369fb84-9f3a-4358-8583-83437dd2097e","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a9a3c7d-c772-4ea2-81c0-93c08ab9f7df","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a35d0ea6-601b-4d55-a000-5f726c1c62fb","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"6995b86f-e41d-42af-b865-4480185dcd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff8712e4-444d-4083-8b2f-6da4d867c099","type":"BasicTicker"}},"id":"7766d72f-474a-4d0e-8704-4b4c158a35fd","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"06563e13-2837-4fef-b791-4656fd9563d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"59af085b-2f33-4bca-9c81-44c241f1c55d","type":"BasicTicker"}},"id":"534849ab-8a83-4c64-a76d-5a3fa880e636","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8b5cfb94-b8df-4b4e-aa58-56a9f16905d9","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"c91597c1-482d-4ebe-82a7-be5f94e34108","type":"LinearAxis"}],"left":[{"id":"0f9896e9-720d-48b7-b7a6-b40007f61e5a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c91597c1-482d-4ebe-82a7-be5f94e34108","type":"LinearAxis"},{"id":"5974598f-926c-4b10-a99c-bacfe4c67e75","type":"Grid"},{"id":"0f9896e9-720d-48b7-b7a6-b40007f61e5a","type":"LinearAxis"},{"id":"534849ab-8a83-4c64-a76d-5a3fa880e636","type":"Grid"},{"id":"24983ff8-8536-427c-a084-3aa04c7287f6","type":"BoxAnnotation"},{"id":"6336c64f-41eb-4e81-938f-52adf7a854ae","type":"GlyphRenderer"}],"title":{"id":"2c806b59-1803-4208-9ed2-8ad9a3972dda","type":"Title"},"toolbar":{"id":"22a14b95-b298-45cd-9014-609f240be7b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3c79dc3c-6978-42be-99fe-5f20804d9c00","type":"DataRange1d"},"x_scale":{"id":"729f6517-de23-44f2-b2f8-4fe8ab9b2138","type":"LinearScale"},"y_range":{"id":"a14065d1-0831-491e-8436-6bebffcba4ce","type":"DataRange1d"},"y_scale":{"id":"9d3e0fb1-470c-4c4a-afeb-a0fcf7257ebe","type":"LinearScale"}},"id":"06563e13-2837-4fef-b791-4656fd9563d3","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"3c79dc3c-6978-42be-99fe-5f20804d9c00","type":"DataRange1d"}],"root_ids":["0abbea5d-af5a-4023-8a19-b68bd3daf72a"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"9623a0a4-9473-445c-a67a-db5f7f7cdadb","elementid":"fda4b7c4-4c01-4a46-aabb-60e881d724c2","modelid":"0abbea5d-af5a-4023-8a19-b68bd3daf72a"}];
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