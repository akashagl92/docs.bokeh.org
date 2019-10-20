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
      };var element = document.getElementById("2ae2d238-6a46-4b22-a9da-c55945733a9c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2ae2d238-6a46-4b22-a9da-c55945733a9c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5d1e4526-bedd-4013-aa1e-c6783fc79d4a":{"roots":{"references":[{"attributes":{},"id":"c26e1576-2765-4f2b-8a9f-64d70a298c04","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"988e47d1-e47a-40e4-a7a0-3a242d3450f5","type":"Title"},{"attributes":{},"id":"070bd794-458e-4ba2-913b-59ddc2d04061","type":"LinearScale"},{"attributes":{},"id":"f6e43592-bc3a-419c-a263-275c7d309418","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"71577fbe-2bf1-4b3c-831f-7a6d59e85bae","type":"Line"},{"attributes":{},"id":"92549844-2b86-49f1-8d34-9ede6dc0f3f1","type":"LinearScale"},{"attributes":{},"id":"f3a4044f-7203-4e28-b1fb-98b0e4998409","type":"LinearScale"},{"attributes":{"callback":null,"tabs":[{"id":"93e9fa47-d3d1-470f-9fcf-a9b3be872ded","type":"Panel"},{"id":"d6f8c607-6802-4385-b5d0-5e4111620155","type":"Panel"}]},"id":"8e46e903-26a7-4639-b586-7010bf5620f9","type":"Tabs"},{"attributes":{"overlay":{"id":"cf374e82-6664-4bff-a641-afc3ecc3ed83","type":"BoxAnnotation"}},"id":"a721dcca-65da-44ef-ace8-7d5253f23f19","type":"BoxZoomTool"},{"attributes":{},"id":"076ce101-128c-4f6d-b060-774132a7d554","type":"BasicTicker"},{"attributes":{},"id":"a8844ced-4aca-4b40-990c-be2a484a0039","type":"BasicTickFormatter"},{"attributes":{},"id":"ed27d019-b99a-4ab4-bf52-7beb5d4f8cf8","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"73712b73-19f7-4f2b-8dd4-00e06afaec4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"076ce101-128c-4f6d-b060-774132a7d554","type":"BasicTicker"}},"id":"42c6bc58-f1a5-472a-9b01-b8a358e9b1ef","type":"Grid"},{"attributes":{},"id":"906fc0e1-600a-4e6b-8387-a6801d6547bd","type":"ResetTool"},{"attributes":{"formatter":{"id":"5cc094e8-cff2-4d77-8b60-d8452a9f9fe5","type":"BasicTickFormatter"},"plot":{"id":"73712b73-19f7-4f2b-8dd4-00e06afaec4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"076ce101-128c-4f6d-b060-774132a7d554","type":"BasicTicker"}},"id":"a7d255ff-cae8-4a5a-8fe6-2b5a43ed2b8a","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed27d019-b99a-4ab4-bf52-7beb5d4f8cf8","type":"PanTool"},{"id":"f2cced42-7139-455a-be9b-5336ee17dee1","type":"WheelZoomTool"},{"id":"64751599-3182-4105-b09e-212d65b037a2","type":"BoxZoomTool"},{"id":"f4ff2cc2-8812-44b3-b086-665afdd3190e","type":"SaveTool"},{"id":"906fc0e1-600a-4e6b-8387-a6801d6547bd","type":"ResetTool"},{"id":"d945a25a-e95e-464b-960b-f615f08454ab","type":"HelpTool"}]},"id":"29193abd-ea7a-47b8-8f63-7d1cba9578be","type":"Toolbar"},{"attributes":{},"id":"d98141c2-a83d-4172-9aa2-4738f7afd034","type":"SaveTool"},{"attributes":{"child":{"id":"63c00f01-5825-4f82-a16e-cb1edfd4151d","subtype":"Figure","type":"Plot"},"title":"line"},"id":"d6f8c607-6802-4385-b5d0-5e4111620155","type":"Panel"},{"attributes":{},"id":"901d25b6-bfd4-4a76-85ef-1707b6bd6cc3","type":"LinearScale"},{"attributes":{},"id":"d945a25a-e95e-464b-960b-f615f08454ab","type":"HelpTool"},{"attributes":{"below":[{"id":"108e9c2c-92a0-4ff9-bd19-c5f62c1ce22b","type":"LinearAxis"}],"left":[{"id":"3575a561-95f2-450c-8e1c-a12fa9d984d8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"108e9c2c-92a0-4ff9-bd19-c5f62c1ce22b","type":"LinearAxis"},{"id":"a026af39-0f48-44fa-8992-48ceb6de499b","type":"Grid"},{"id":"3575a561-95f2-450c-8e1c-a12fa9d984d8","type":"LinearAxis"},{"id":"41d797eb-b8b2-4d36-9cdc-9e2ad49006a6","type":"Grid"},{"id":"5070ad57-4d22-493f-98f1-55d9810b919a","type":"BoxAnnotation"},{"id":"a4051643-a67b-4fbc-8d71-98a08b429967","type":"GlyphRenderer"}],"title":{"id":"988e47d1-e47a-40e4-a7a0-3a242d3450f5","type":"Title"},"toolbar":{"id":"29193abd-ea7a-47b8-8f63-7d1cba9578be","type":"Toolbar"},"x_range":{"id":"6506a62c-5e56-48ec-a7d5-677c9ef5de32","type":"DataRange1d"},"x_scale":{"id":"f3a4044f-7203-4e28-b1fb-98b0e4998409","type":"LinearScale"},"y_range":{"id":"3789b5a9-1742-4016-8d7c-716d22a697b3","type":"DataRange1d"},"y_scale":{"id":"901d25b6-bfd4-4a76-85ef-1707b6bd6cc3","type":"LinearScale"}},"id":"63c00f01-5825-4f82-a16e-cb1edfd4151d","subtype":"Figure","type":"Plot"},{"attributes":{"child":{"id":"73712b73-19f7-4f2b-8dd4-00e06afaec4a","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"93e9fa47-d3d1-470f-9fcf-a9b3be872ded","type":"Panel"},{"attributes":{"data_source":{"id":"3e22e2f4-e03d-4928-93f4-1a4ed0cbb9c2","type":"ColumnDataSource"},"glyph":{"id":"a3f6d154-5992-44f7-9707-8a50ac87629d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a74c0bf7-b326-42da-9af2-2767cd120b19","type":"Circle"},"selection_glyph":null,"view":{"id":"91c7b62a-2d8b-4f4e-b5e5-0eb183bfb842","type":"CDSView"}},"id":"faa8a3d2-1965-4cdf-ae6a-0a88f47e94a5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3f6d154-5992-44f7-9707-8a50ac87629d","type":"Circle"},{"attributes":{},"id":"aa5170f3-6322-48aa-93e8-dceeb2a97d07","type":"PanTool"},{"attributes":{"overlay":{"id":"5070ad57-4d22-493f-98f1-55d9810b919a","type":"BoxAnnotation"}},"id":"64751599-3182-4105-b09e-212d65b037a2","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"73712b73-19f7-4f2b-8dd4-00e06afaec4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f64c183-8d83-4329-af56-df3cb41667bc","type":"BasicTicker"}},"id":"feeb30c5-6217-4e76-ba7f-17a7552d7ce6","type":"Grid"},{"attributes":{},"id":"fad7df5c-ca08-4448-a4aa-3b563393e171","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"5f084ac3-9f3f-4fb3-94f7-590b9e8334ca","type":"Line"},{"attributes":{"formatter":{"id":"c26e1576-2765-4f2b-8a9f-64d70a298c04","type":"BasicTickFormatter"},"plot":{"id":"63c00f01-5825-4f82-a16e-cb1edfd4151d","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb2dd2b6-993f-48af-8b46-85ce0397f704","type":"BasicTicker"}},"id":"108e9c2c-92a0-4ff9-bd19-c5f62c1ce22b","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aa5170f3-6322-48aa-93e8-dceeb2a97d07","type":"PanTool"},{"id":"f6e43592-bc3a-419c-a263-275c7d309418","type":"WheelZoomTool"},{"id":"a721dcca-65da-44ef-ace8-7d5253f23f19","type":"BoxZoomTool"},{"id":"d98141c2-a83d-4172-9aa2-4738f7afd034","type":"SaveTool"},{"id":"fc5e9d39-3618-424a-85d2-7c3c975ed74d","type":"ResetTool"},{"id":"2f25daa4-b101-44b0-af7b-60360cd2b960","type":"HelpTool"}]},"id":"8ca40944-ef70-4dba-a98a-2d00851814a8","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"63c00f01-5825-4f82-a16e-cb1edfd4151d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4bca42d-d4d2-4b45-acd2-9149d0f066b6","type":"BasicTicker"}},"id":"41d797eb-b8b2-4d36-9cdc-9e2ad49006a6","type":"Grid"},{"attributes":{"callback":null},"id":"c009ca93-613e-429f-ba12-ed9255890127","type":"DataRange1d"},{"attributes":{},"id":"fc5e9d39-3618-424a-85d2-7c3c975ed74d","type":"ResetTool"},{"attributes":{"callback":null},"id":"3789b5a9-1742-4016-8d7c-716d22a697b3","type":"DataRange1d"},{"attributes":{"data_source":{"id":"cf7e3ccb-7470-4b36-a235-f99acfcab28d","type":"ColumnDataSource"},"glyph":{"id":"71577fbe-2bf1-4b3c-831f-7a6d59e85bae","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f084ac3-9f3f-4fb3-94f7-590b9e8334ca","type":"Line"},"selection_glyph":null,"view":{"id":"1b087460-3382-486f-94af-8e869fbbb8ba","type":"CDSView"}},"id":"a4051643-a67b-4fbc-8d71-98a08b429967","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a74c0bf7-b326-42da-9af2-2767cd120b19","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf374e82-6664-4bff-a641-afc3ecc3ed83","type":"BoxAnnotation"},{"attributes":{},"id":"5cc094e8-cff2-4d77-8b60-d8452a9f9fe5","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"06f96742-f08a-4126-b17b-f7b375a085ea","type":"DataRange1d"},{"attributes":{"formatter":{"id":"fad7df5c-ca08-4448-a4aa-3b563393e171","type":"BasicTickFormatter"},"plot":{"id":"63c00f01-5825-4f82-a16e-cb1edfd4151d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4bca42d-d4d2-4b45-acd2-9149d0f066b6","type":"BasicTicker"}},"id":"3575a561-95f2-450c-8e1c-a12fa9d984d8","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"49220b48-f323-4e0d-91d8-40611c26cd2b","type":"Title"},{"attributes":{},"id":"c4bca42d-d4d2-4b45-acd2-9149d0f066b6","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5070ad57-4d22-493f-98f1-55d9810b919a","type":"BoxAnnotation"},{"attributes":{"source":{"id":"3e22e2f4-e03d-4928-93f4-1a4ed0cbb9c2","type":"ColumnDataSource"}},"id":"91c7b62a-2d8b-4f4e-b5e5-0eb183bfb842","type":"CDSView"},{"attributes":{},"id":"4f64c183-8d83-4329-af56-df3cb41667bc","type":"BasicTicker"},{"attributes":{},"id":"eb2dd2b6-993f-48af-8b46-85ce0397f704","type":"BasicTicker"},{"attributes":{},"id":"2f25daa4-b101-44b0-af7b-60360cd2b960","type":"HelpTool"},{"attributes":{"callback":null},"id":"6506a62c-5e56-48ec-a7d5-677c9ef5de32","type":"DataRange1d"},{"attributes":{"source":{"id":"cf7e3ccb-7470-4b36-a235-f99acfcab28d","type":"ColumnDataSource"}},"id":"1b087460-3382-486f-94af-8e869fbbb8ba","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"cf7e3ccb-7470-4b36-a235-f99acfcab28d","type":"ColumnDataSource"},{"attributes":{},"id":"f2cced42-7139-455a-be9b-5336ee17dee1","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"3e22e2f4-e03d-4928-93f4-1a4ed0cbb9c2","type":"ColumnDataSource"},{"attributes":{},"id":"f4ff2cc2-8812-44b3-b086-665afdd3190e","type":"SaveTool"},{"attributes":{"below":[{"id":"c2204e6c-a631-48b0-be9a-f50c4494fefb","type":"LinearAxis"}],"left":[{"id":"a7d255ff-cae8-4a5a-8fe6-2b5a43ed2b8a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c2204e6c-a631-48b0-be9a-f50c4494fefb","type":"LinearAxis"},{"id":"feeb30c5-6217-4e76-ba7f-17a7552d7ce6","type":"Grid"},{"id":"a7d255ff-cae8-4a5a-8fe6-2b5a43ed2b8a","type":"LinearAxis"},{"id":"42c6bc58-f1a5-472a-9b01-b8a358e9b1ef","type":"Grid"},{"id":"cf374e82-6664-4bff-a641-afc3ecc3ed83","type":"BoxAnnotation"},{"id":"faa8a3d2-1965-4cdf-ae6a-0a88f47e94a5","type":"GlyphRenderer"}],"title":{"id":"49220b48-f323-4e0d-91d8-40611c26cd2b","type":"Title"},"toolbar":{"id":"8ca40944-ef70-4dba-a98a-2d00851814a8","type":"Toolbar"},"x_range":{"id":"c009ca93-613e-429f-ba12-ed9255890127","type":"DataRange1d"},"x_scale":{"id":"070bd794-458e-4ba2-913b-59ddc2d04061","type":"LinearScale"},"y_range":{"id":"06f96742-f08a-4126-b17b-f7b375a085ea","type":"DataRange1d"},"y_scale":{"id":"92549844-2b86-49f1-8d34-9ede6dc0f3f1","type":"LinearScale"}},"id":"73712b73-19f7-4f2b-8dd4-00e06afaec4a","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"a8844ced-4aca-4b40-990c-be2a484a0039","type":"BasicTickFormatter"},"plot":{"id":"73712b73-19f7-4f2b-8dd4-00e06afaec4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f64c183-8d83-4329-af56-df3cb41667bc","type":"BasicTicker"}},"id":"c2204e6c-a631-48b0-be9a-f50c4494fefb","type":"LinearAxis"},{"attributes":{"plot":{"id":"63c00f01-5825-4f82-a16e-cb1edfd4151d","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb2dd2b6-993f-48af-8b46-85ce0397f704","type":"BasicTicker"}},"id":"a026af39-0f48-44fa-8992-48ceb6de499b","type":"Grid"}],"root_ids":["8e46e903-26a7-4639-b586-7010bf5620f9"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"5d1e4526-bedd-4013-aa1e-c6783fc79d4a","elementid":"2ae2d238-6a46-4b22-a9da-c55945733a9c","modelid":"8e46e903-26a7-4639-b586-7010bf5620f9"}];
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