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
      };var element = document.getElementById("49d6b6fa-763f-49e4-8183-80222d028d10");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '49d6b6fa-763f-49e4-8183-80222d028d10' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d4336262-3adf-49db-885c-b9e4f562c32c":{"roots":{"references":[{"attributes":{"formatter":{"id":"57736ce9-b796-4285-bc3b-5c7b4e054c7a","type":"BasicTickFormatter"},"plot":{"id":"53f99b1d-81fc-46a2-a2e4-c50ba1c71912","subtype":"Figure","type":"Plot"},"ticker":{"id":"d839e701-224f-4f2a-89ba-e76e3133c74b","type":"BasicTicker"}},"id":"39414c46-e49a-4253-ba5f-e48d07cd268a","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"6079a35e-43c9-4e6f-8f4a-f13b706f3083","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"53f99b1d-81fc-46a2-a2e4-c50ba1c71912","subtype":"Figure","type":"Plot"},"ticker":{"id":"d839e701-224f-4f2a-89ba-e76e3133c74b","type":"BasicTicker"}},"id":"6ea57609-a22e-4205-ac7d-6402bf776e72","type":"Grid"},{"attributes":{},"id":"7194a44f-6024-4186-a092-c9d5c9ed5798","type":"LinearScale"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"8e25761e-a95e-43ac-a9d7-8c88de1c9786","type":"TeeHead"},"plot":{"id":"53f99b1d-81fc-46a2-a2e4-c50ba1c71912","subtype":"Figure","type":"Plot"},"source":{"id":"c8a29d98-2e81-49b1-b045-efc701976fdf","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"ca022143-d626-4fb2-b3b1-26c942835193","type":"TeeHead"}},"id":"b7cf683b-7a98-43df-8c75-9f66ecb9224b","type":"Whisker"},{"attributes":{},"id":"d839e701-224f-4f2a-89ba-e76e3133c74b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"5d87f6ff-ea36-4dd6-896a-4abd312de35b","type":"Circle"},{"attributes":{"data_source":{"id":"7aeecc7a-1c9b-49fd-95f2-8ff72a0e441d","type":"ColumnDataSource"},"glyph":{"id":"a19f0fcd-c8c6-4a95-9ac6-40ac69aeba7a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"609cbcd2-6e6d-4f54-b5af-665f15a5b9d2","type":"Circle"},"selection_glyph":null,"view":{"id":"8f6a0a9f-96df-4167-9d22-0e2021d3ddec","type":"CDSView"}},"id":"9c01ff7d-306e-400b-8f36-88251c0b37f1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d8ce4c1d-b771-486f-b2df-edab8564be97","type":"DataRange1d"},{"attributes":{},"id":"37c06c9b-ed66-45e1-ba9e-101f1bff0e28","type":"BasicTicker"},{"attributes":{"source":{"id":"15271104-f9eb-4410-a728-d783e31f55b9","type":"ColumnDataSource"}},"id":"b46cde7c-8381-42b4-8eb2-86ceb5e5d50b","type":"CDSView"},{"attributes":{"data_source":{"id":"8fe2cf6f-261b-47d9-96c6-8c35fa7a19b7","type":"ColumnDataSource"},"glyph":{"id":"d0d4ce44-c336-4289-a528-8390e0163b4b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e7e36954-1cee-470d-8d10-75db532ed32c","type":"Circle"},"selection_glyph":null,"view":{"id":"f338cc57-38e7-4166-9554-96c8c0660b78","type":"CDSView"}},"id":"35b559bc-507b-4ce9-b7d9-d4aaae5a89f8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"15271104-f9eb-4410-a728-d783e31f55b9","type":"ColumnDataSource"},"glyph":{"id":"db848c48-ff88-4d53-8646-578c8d07d532","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9871fe08-b30f-4d47-9ea2-8711c62d504f","type":"Circle"},"selection_glyph":null,"view":{"id":"b46cde7c-8381-42b4-8eb2-86ceb5e5d50b","type":"CDSView"}},"id":"4dc6f006-50a9-4c74-8124-6f5301dbd302","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"0181dfd1-c3a8-4b38-ab74-3e4b4cd7c384","type":"BoxAnnotation"}},"id":"3e12876a-f80f-4d72-90da-496b30f52048","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"fa87eccf-e3ea-4517-95f4-8597d9476daf","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"53f99b1d-81fc-46a2-a2e4-c50ba1c71912","subtype":"Figure","type":"Plot"},"ticker":{"id":"37c06c9b-ed66-45e1-ba9e-101f1bff0e28","type":"BasicTicker"}},"id":"b626bba3-1c26-40fe-8600-5e35bb5c20c6","type":"Grid"},{"attributes":{"source":{"id":"f7244333-c6ce-4fa4-8d4b-b8bcc5836cbd","type":"ColumnDataSource"}},"id":"c364bdab-1bcf-49da-9b5a-4f2306274b22","type":"CDSView"},{"attributes":{"data_source":{"id":"fa87eccf-e3ea-4517-95f4-8597d9476daf","type":"ColumnDataSource"},"glyph":{"id":"24d8850f-bbe6-45f0-ad7b-f286ea886fe0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5d87f6ff-ea36-4dd6-896a-4abd312de35b","type":"Circle"},"selection_glyph":null,"view":{"id":"dc41c95f-762f-4119-8e09-9b4c32c9ea9b","type":"CDSView"}},"id":"2435c5dd-89ac-4f29-8d11-06103a16c8fd","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"9871fe08-b30f-4d47-9ea2-8711c62d504f","type":"Circle"},{"attributes":{},"id":"d91ac4d8-ef9c-42e9-997d-4bddec50f41d","type":"PanTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"24d8850f-bbe6-45f0-ad7b-f286ea886fe0","type":"Circle"},{"attributes":{},"id":"28a7c6cf-ce47-4753-b393-da26c800a79b","type":"SaveTool"},{"attributes":{"source":{"id":"ef6ed103-7310-4bef-9d53-6770e9f34754","type":"ColumnDataSource"}},"id":"6cd1c5c1-d6a3-4b15-9a75-0549c5e85164","type":"CDSView"},{"attributes":{"data_source":{"id":"663f9029-7a66-4578-b8f7-9b6acea40232","type":"ColumnDataSource"},"glyph":{"id":"6079a35e-43c9-4e6f-8f4a-f13b706f3083","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1d4469ab-6a0f-4511-bb65-f57e14a03b27","type":"Circle"},"selection_glyph":null,"view":{"id":"9025b373-e164-49c3-9af5-39e49ef2c3d7","type":"CDSView"}},"id":"ee5b4964-038b-4df4-8c1b-185381f37e58","type":"GlyphRenderer"},{"attributes":{},"id":"fd178698-9060-4296-8760-d63cf6bf0067","type":"BasicTickFormatter"},{"attributes":{},"id":"85d2bd39-d1c6-4ffe-ab03-dc0a366de9c9","type":"LinearScale"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"ca022143-d626-4fb2-b3b1-26c942835193","type":"TeeHead"},{"attributes":{"data_source":{"id":"7310ae8a-0247-4116-8b38-6172a251edcc","type":"ColumnDataSource"},"glyph":{"id":"c3313729-22dd-4cc8-8eac-6e24609162c7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eeac88de-d5d7-430f-bdbb-b8612e21c60e","type":"Circle"},"selection_glyph":null,"view":{"id":"1c5203bf-129b-40ab-b51b-8589b297e982","type":"CDSView"}},"id":"be17332b-21d3-471d-9e11-904be68fa2b9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"663f9029-7a66-4578-b8f7-9b6acea40232","type":"ColumnDataSource"},{"attributes":{},"id":"8ccfa7df-941b-4a85-8754-0fe1849b91d7","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"ef6ed103-7310-4bef-9d53-6770e9f34754","type":"ColumnDataSource"},{"attributes":{"source":{"id":"fa87eccf-e3ea-4517-95f4-8597d9476daf","type":"ColumnDataSource"}},"id":"dc41c95f-762f-4119-8e09-9b4c32c9ea9b","type":"CDSView"},{"attributes":{},"id":"57736ce9-b796-4285-bc3b-5c7b4e054c7a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ef6ed103-7310-4bef-9d53-6770e9f34754","type":"ColumnDataSource"},"glyph":{"id":"6ed392a4-b2b2-4f23-b23e-02d84af27005","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f85013b1-1e2b-4e8d-867e-2a7298a6b784","type":"Circle"},"selection_glyph":null,"view":{"id":"6cd1c5c1-d6a3-4b15-9a75-0549c5e85164","type":"CDSView"}},"id":"12073ec5-02f1-41fe-aeef-00cbf49b6d31","type":"GlyphRenderer"},{"attributes":{"source":{"id":"489b999d-ebb4-46db-b55e-ef832c45a8f0","type":"ColumnDataSource"}},"id":"3fe19554-30dc-4a18-84df-efcf6c0a2a29","type":"CDSView"},{"attributes":{"source":{"id":"3abddb83-546f-4be7-b211-17c7d25b0cd7","type":"ColumnDataSource"}},"id":"d482ffff-7591-4c48-8bdb-c7b7fbad70fa","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"8fe2cf6f-261b-47d9-96c6-8c35fa7a19b7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9bf55471-37e2-4bbb-ba89-5b7585994201","type":"ColumnDataSource"},"glyph":{"id":"bbcd5697-8022-457c-8853-6d4da457e0d0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ef1d0e51-84d0-42a0-9502-7d490c965cb9","type":"Circle"},"selection_glyph":null,"view":{"id":"691e891e-f75e-4315-9a7e-b6cd986d8ee6","type":"CDSView"}},"id":"7b7f06d2-f274-4b28-bffd-9e9782e6eee3","type":"GlyphRenderer"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"8e25761e-a95e-43ac-a9d7-8c88de1c9786","type":"TeeHead"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"1d4469ab-6a0f-4511-bb65-f57e14a03b27","type":"Circle"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"eed0cbba-74d1-4f68-a048-1ff04b9be53c","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"9bf55471-37e2-4bbb-ba89-5b7585994201","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"b0bee005-9c45-4966-adce-6babfc8ff6e5","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d91ac4d8-ef9c-42e9-997d-4bddec50f41d","type":"PanTool"},{"id":"bda4787b-43b7-4911-a560-02e4719f87e5","type":"WheelZoomTool"},{"id":"3e12876a-f80f-4d72-90da-496b30f52048","type":"BoxZoomTool"},{"id":"28a7c6cf-ce47-4753-b393-da26c800a79b","type":"SaveTool"},{"id":"8ccfa7df-941b-4a85-8754-0fe1849b91d7","type":"ResetTool"},{"id":"9f63bdd5-18c3-4bd6-9e88-5cce1ac13746","type":"HelpTool"}]},"id":"2151bea3-4713-412c-ac16-a334c1eda490","type":"Toolbar"},{"attributes":{"source":{"id":"a43fcb83-8aff-44a7-9a8c-8ab198b85e2b","type":"ColumnDataSource"}},"id":"4a3f70d4-4f17-49ff-95fc-67ce5ce98b67","type":"CDSView"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"6ed392a4-b2b2-4f23-b23e-02d84af27005","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"a43fcb83-8aff-44a7-9a8c-8ab198b85e2b","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"d1ff1be3-6e62-427c-a14c-8010994d163f","type":"LinearAxis"}],"left":[{"id":"39414c46-e49a-4253-ba5f-e48d07cd268a","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"d1ff1be3-6e62-427c-a14c-8010994d163f","type":"LinearAxis"},{"id":"b626bba3-1c26-40fe-8600-5e35bb5c20c6","type":"Grid"},{"id":"39414c46-e49a-4253-ba5f-e48d07cd268a","type":"LinearAxis"},{"id":"6ea57609-a22e-4205-ac7d-6402bf776e72","type":"Grid"},{"id":"0181dfd1-c3a8-4b38-ab74-3e4b4cd7c384","type":"BoxAnnotation"},{"id":"b7cf683b-7a98-43df-8c75-9f66ecb9224b","type":"Whisker"},{"id":"2435c5dd-89ac-4f29-8d11-06103a16c8fd","type":"GlyphRenderer"},{"id":"ee5b4964-038b-4df4-8c1b-185381f37e58","type":"GlyphRenderer"},{"id":"406f9243-1697-435a-bf66-58e36f5835d4","type":"GlyphRenderer"},{"id":"35b559bc-507b-4ce9-b7d9-d4aaae5a89f8","type":"GlyphRenderer"},{"id":"8076825c-cde8-4f7a-b266-6a8273cf779d","type":"GlyphRenderer"},{"id":"6057afde-8fd1-4b03-a45d-07fc3879515c","type":"GlyphRenderer"},{"id":"faf6f24d-70c3-4615-ade2-23350bac07b6","type":"GlyphRenderer"},{"id":"9c01ff7d-306e-400b-8f36-88251c0b37f1","type":"GlyphRenderer"},{"id":"baf8f0bc-935d-42d6-9e56-8253418c7c2d","type":"GlyphRenderer"},{"id":"7b7f06d2-f274-4b28-bffd-9e9782e6eee3","type":"GlyphRenderer"},{"id":"be17332b-21d3-471d-9e11-904be68fa2b9","type":"GlyphRenderer"},{"id":"12073ec5-02f1-41fe-aeef-00cbf49b6d31","type":"GlyphRenderer"},{"id":"4dc6f006-50a9-4c74-8124-6f5301dbd302","type":"GlyphRenderer"}],"title":{"id":"66b78ef6-92b0-41e3-b8a0-d94ad2f32da0","type":"Title"},"toolbar":{"id":"2151bea3-4713-412c-ac16-a334c1eda490","type":"Toolbar"},"x_range":{"id":"48ab7896-5f4a-4e7f-8739-3c26b23c585f","type":"DataRange1d"},"x_scale":{"id":"7194a44f-6024-4186-a092-c9d5c9ed5798","type":"LinearScale"},"y_range":{"id":"d8ce4c1d-b771-486f-b2df-edab8564be97","type":"DataRange1d"},"y_scale":{"id":"85d2bd39-d1c6-4ffe-ab03-dc0a366de9c9","type":"LinearScale"}},"id":"53f99b1d-81fc-46a2-a2e4-c50ba1c71912","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"f7244333-c6ce-4fa4-8d4b-b8bcc5836cbd","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7310ae8a-0247-4116-8b38-6172a251edcc","type":"ColumnDataSource"}},"id":"1c5203bf-129b-40ab-b51b-8589b297e982","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"254188f2-586c-4ce8-9859-1f62965f142a","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"db848c48-ff88-4d53-8646-578c8d07d532","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"3b548d0b-35c6-48eb-a79f-0978aaeb6bed","type":"Circle"},{"attributes":{"data_source":{"id":"a43fcb83-8aff-44a7-9a8c-8ab198b85e2b","type":"ColumnDataSource"},"glyph":{"id":"254188f2-586c-4ce8-9859-1f62965f142a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3b548d0b-35c6-48eb-a79f-0978aaeb6bed","type":"Circle"},"selection_glyph":null,"view":{"id":"4a3f70d4-4f17-49ff-95fc-67ce5ce98b67","type":"CDSView"}},"id":"6057afde-8fd1-4b03-a45d-07fc3879515c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"66b78ef6-92b0-41e3-b8a0-d94ad2f32da0","type":"Title"},{"attributes":{"source":{"id":"d94463c2-c455-4ed5-8956-5695ff580494","type":"ColumnDataSource"}},"id":"ccf62144-6812-4662-9ad5-69c4b3fe5d69","type":"CDSView"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"bbcd5697-8022-457c-8853-6d4da457e0d0","type":"Circle"},{"attributes":{"callback":null,"column_names":["base","lower","upper"],"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]}},"id":"c8a29d98-2e81-49b1-b045-efc701976fdf","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"489b999d-ebb4-46db-b55e-ef832c45a8f0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"15271104-f9eb-4410-a728-d783e31f55b9","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"e7e36954-1cee-470d-8d10-75db532ed32c","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0181dfd1-c3a8-4b38-ab74-3e4b4cd7c384","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"c3313729-22dd-4cc8-8eac-6e24609162c7","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"4c92046b-8090-4cde-adb3-add24314e4ac","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"ef1d0e51-84d0-42a0-9502-7d490c965cb9","type":"Circle"},{"attributes":{},"id":"bda4787b-43b7-4911-a560-02e4719f87e5","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"7e4c779b-1e2f-40ce-85a0-c5e656cb60ea","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"c55516ab-0bee-4094-a48c-50aee48384d6","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"d0d4ce44-c336-4289-a528-8390e0163b4b","type":"Circle"},{"attributes":{"data_source":{"id":"f7244333-c6ce-4fa4-8d4b-b8bcc5836cbd","type":"ColumnDataSource"},"glyph":{"id":"eed0cbba-74d1-4f68-a048-1ff04b9be53c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b0bee005-9c45-4966-adce-6babfc8ff6e5","type":"Circle"},"selection_glyph":null,"view":{"id":"c364bdab-1bcf-49da-9b5a-4f2306274b22","type":"CDSView"}},"id":"faf6f24d-70c3-4615-ade2-23350bac07b6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"7310ae8a-0247-4116-8b38-6172a251edcc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"489b999d-ebb4-46db-b55e-ef832c45a8f0","type":"ColumnDataSource"},"glyph":{"id":"4c92046b-8090-4cde-adb3-add24314e4ac","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7e4c779b-1e2f-40ce-85a0-c5e656cb60ea","type":"Circle"},"selection_glyph":null,"view":{"id":"3fe19554-30dc-4a18-84df-efcf6c0a2a29","type":"CDSView"}},"id":"406f9243-1697-435a-bf66-58e36f5835d4","type":"GlyphRenderer"},{"attributes":{"source":{"id":"663f9029-7a66-4578-b8f7-9b6acea40232","type":"ColumnDataSource"}},"id":"9025b373-e164-49c3-9af5-39e49ef2c3d7","type":"CDSView"},{"attributes":{"formatter":{"id":"fd178698-9060-4296-8760-d63cf6bf0067","type":"BasicTickFormatter"},"plot":{"id":"53f99b1d-81fc-46a2-a2e4-c50ba1c71912","subtype":"Figure","type":"Plot"},"ticker":{"id":"37c06c9b-ed66-45e1-ba9e-101f1bff0e28","type":"BasicTicker"}},"id":"d1ff1be3-6e62-427c-a14c-8010994d163f","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"d94463c2-c455-4ed5-8956-5695ff580494","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9bf55471-37e2-4bbb-ba89-5b7585994201","type":"ColumnDataSource"}},"id":"691e891e-f75e-4315-9a7e-b6cd986d8ee6","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"a19f0fcd-c8c6-4a95-9ac6-40ac69aeba7a","type":"Circle"},{"attributes":{"callback":null},"id":"48ab7896-5f4a-4e7f-8739-3c26b23c585f","type":"DataRange1d"},{"attributes":{"source":{"id":"7aeecc7a-1c9b-49fd-95f2-8ff72a0e441d","type":"ColumnDataSource"}},"id":"8f6a0a9f-96df-4167-9d22-0e2021d3ddec","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"7aeecc7a-1c9b-49fd-95f2-8ff72a0e441d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"f85013b1-1e2b-4e8d-867e-2a7298a6b784","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"609cbcd2-6e6d-4f54-b5af-665f15a5b9d2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"a18cedbb-aecc-4904-a6b4-ac089f3ed483","type":"Circle"},{"attributes":{"data_source":{"id":"d94463c2-c455-4ed5-8956-5695ff580494","type":"ColumnDataSource"},"glyph":{"id":"d8b41392-c5ad-47d9-8307-d0c49a1a1f6a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3fec94b6-81d8-4816-8736-addb9ea28e51","type":"Circle"},"selection_glyph":null,"view":{"id":"ccf62144-6812-4662-9ad5-69c4b3fe5d69","type":"CDSView"}},"id":"8076825c-cde8-4f7a-b266-6a8273cf779d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"eeac88de-d5d7-430f-bdbb-b8612e21c60e","type":"Circle"},{"attributes":{},"id":"9f63bdd5-18c3-4bd6-9e88-5cce1ac13746","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"3abddb83-546f-4be7-b211-17c7d25b0cd7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3abddb83-546f-4be7-b211-17c7d25b0cd7","type":"ColumnDataSource"},"glyph":{"id":"c55516ab-0bee-4094-a48c-50aee48384d6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a18cedbb-aecc-4904-a6b4-ac089f3ed483","type":"Circle"},"selection_glyph":null,"view":{"id":"d482ffff-7591-4c48-8bdb-c7b7fbad70fa","type":"CDSView"}},"id":"baf8f0bc-935d-42d6-9e56-8253418c7c2d","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"d8b41392-c5ad-47d9-8307-d0c49a1a1f6a","type":"Circle"},{"attributes":{"source":{"id":"8fe2cf6f-261b-47d9-96c6-8c35fa7a19b7","type":"ColumnDataSource"}},"id":"f338cc57-38e7-4166-9554-96c8c0660b78","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"3fec94b6-81d8-4816-8736-addb9ea28e51","type":"Circle"}],"root_ids":["53f99b1d-81fc-46a2-a2e4-c50ba1c71912"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"d4336262-3adf-49db-885c-b9e4f562c32c","elementid":"49d6b6fa-763f-49e4-8183-80222d028d10","modelid":"53f99b1d-81fc-46a2-a2e4-c50ba1c71912"}];
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