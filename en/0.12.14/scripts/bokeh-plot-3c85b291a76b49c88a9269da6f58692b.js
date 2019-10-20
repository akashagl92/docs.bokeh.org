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
      };var element = document.getElementById("36e6e6f7-403a-47f6-8451-a959f738ae40");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36e6e6f7-403a-47f6-8451-a959f738ae40' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7ba4734c-3609-44b8-87f8-1f8c546e57ed":{"roots":{"references":[{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab31036e-056d-467c-ab11-e8cd3ea1739c","type":"Text"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e947667-2e8b-49ea-9964-567d6a482232","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"be9f8cd6-1063-4db0-b696-4182ea75f127","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["Gram-positive","Gram-negative"],"x":[-30,-30],"y":[-370,-390]}},"id":"a05e4250-6eb2-4452-80fb-b82afb06063e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"407ef11c-72ef-4dce-ba0c-9640347aedc8","type":"ColumnDataSource"},"glyph":{"id":"89a5478a-b701-4ccd-8381-45ee87130888","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be9f8cd6-1063-4db0-b696-4182ea75f127","type":"Text"},"selection_glyph":null,"view":{"id":"ad968f81-543b-4dab-9f65-382bc0236745","type":"CDSView"}},"id":"ab6e93d1-1a55-4220-8a93-c9e5e33998ad","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a05e4250-6eb2-4452-80fb-b82afb06063e","type":"ColumnDataSource"}},"id":"eecd851e-e455-4a07-b5be-14958c527685","type":"CDSView"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"56aabb03-5d9a-425b-8076-741b4ebe2ac2","type":"Text"},{"attributes":{"source":{"id":"a92cacb3-5696-47eb-b05a-b83f5903857d","type":"ColumnDataSource"}},"id":"701667c6-bbb9-4074-87b3-5fcab90e2fb8","type":"CDSView"},{"attributes":{"source":{"id":"407ef11c-72ef-4dce-ba0c-9640347aedc8","type":"ColumnDataSource"}},"id":"ad968f81-543b-4dab-9f65-382bc0236745","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"a284eef0-dceb-4f8c-b1f8-474cac3e1813","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0d3362","#c64737","black"],"line_color":["#0d3362","#c64737","black"],"x":[-40,-40,-40],"y":[18,0,-18]}},"id":"0e36f84d-7215-4ec1-9e6b-6ad13d51a5ef","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":80},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"fdf194c8-669c-4436-9d37-963f3eaa93d7","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"a05e4250-6eb2-4452-80fb-b82afb06063e","type":"ColumnDataSource"},"glyph":{"id":"56aabb03-5d9a-425b-8076-741b4ebe2ac2","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"06c702f0-36b4-4b26-a633-dde4a8f651cb","type":"Text"},"selection_glyph":null,"view":{"id":"eecd851e-e455-4a07-b5be-14958c527685","type":"CDSView"}},"id":"9de82834-17ea-4583-8ad6-4ee061313bdc","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":80},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"3dbab6d2-5db2-4acd-a912-d77a3dfa7e19","type":"AnnularWedge"},{"attributes":{"source":{"id":"a17f9292-0ba1-47e2-9c85-9da9a793f343","type":"ColumnDataSource"}},"id":"23a1a338-8e8a-455b-a096-e5eb13feebb4","type":"CDSView"},{"attributes":{"callback":null,"column_names":["start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}}},"id":"a17f9292-0ba1-47e2-9c85-9da9a793f343","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"FyEz4zyk8z8EPFU1uHTrP7hriEjtQd8/ln2Zmahpvj/urLv7GA3Qv6Lc7g5O2uO/yuL/nw+u7797dIiY6MD1v4/3EGHJqvu/Ub3MFFXKAMDc/hB5Rb8DwGZAVd01tAbA8IGZQSapCcB6w92lFp4MwAcFIgoHkw/ARyMzt/tDEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"pmlXNAGDYkDWwF0C/m1lQDjj0CUzIWlAZ+OHhpjCZECbzPtu2O9jQJvM+27Y72NAHRgJcjWcZkAdGAlyNZxmQAbJjNcyD2VAx3MGqjT1bUAGyYzXMg9lQIaiNChEiGtAOOPQJTMhaUDoDDhWBvtgQKDSxFcteWFASjEX/kFVYUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"8DJENPjL8j+1X3fXLsTpPxqzzIza4Ns/Hpuqql3lsD+MZXe3K27Tv/G4zGzXiuW/jN/ufkyv8L+iYndHLZn2v7bl/w8Og/y/ZTREbHc2AcDwdYjQZysEwHq3zDRYIAfABPkQmUgVCsCOOlX9OAoNwBt8mWEp/w/A0d7u4gx6EcA=","dtype":"float64","shape":[16]}}},"id":"cafc6f6f-1daa-4270-927e-cd3a81317991","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#aeaeb8","#e69584"],"line_color":["#aeaeb8","#e69584"],"x":[-40,-40],"y":[-370,-390]}},"id":"a92cacb3-5696-47eb-b05a-b83f5903857d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a17f9292-0ba1-47e2-9c85-9da9a793f343","type":"ColumnDataSource"},"glyph":{"id":"3dbab6d2-5db2-4acd-a912-d77a3dfa7e19","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fdf194c8-669c-4436-9d37-963f3eaa93d7","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"23a1a338-8e8a-455b-a096-e5eb13feebb4","type":"CDSView"}},"id":"d29a89c6-6def-41e6-9610-85accfb98d2b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["radius"],"data":{"radius":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxAAAAAAACAVkA=","dtype":"float64","shape":[7]}}},"id":"7f477cbc-f78d-4d77-9cf4-cccd03305924","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1aa4b0fd-4b05-4d57-9d1e-e64a93bf0bd9","type":"Circle"},{"attributes":{"data_source":{"id":"e7812ad7-e042-4ccc-847c-9a4e664b9932","type":"ColumnDataSource"},"glyph":{"id":"800f16c6-c080-4a8f-9990-14f708055b12","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"138a56fc-cbcc-48a7-b0b1-1bd050074809","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"5f6da10e-8f36-4d86-82b7-ddcb2dd6cbc1","type":"CDSView"}},"id":"2548c547-a1a1-4894-96bb-5d58ec55f169","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","text","angle"],"data":{"angle":{"__ndarray__":"BKq7ixo48z/dTWaGc5zqP2iPqupjkd0/WgwiIoOntz8+iZlZor3Rv8nK3b2SsuS/eGh3JypD8L+O6//vCi32v47r/+8KLfY/emh3JypD8D/Iyt29krLkP0CJmVmivdE/QAwiIoOnt79gj6rqY5Hdv+BNZoZznOq/BKq7ixo4878=","dtype":"float64","shape":[16]},"text":["Mycobacterium tuberculosis","Salmonella schottmuelleri","Proteus vulgaris","Klebsiella pneumoniae","Brucella abortus","Pseudomonas aeruginosa","Escherichia coli","Salmonella (Eberthella) typhosa","Aerobacter aerogenes","Brucella antracis","Streptococcus fecalis","Staphylococcus aureus","Staphylococcus albus","Streptococcus hemolyticus","Streptococcus viridans","Diplococcus pneumoniae"],"x":{"__ndarray__":"cGn7M6UwWkAzVkZE5WtoQKq2lcOOOXBAjuBL4jQMckDOGdT43m5xQMF6BpGZ7WxA7SBXXEoVY0AXTcs3yKRKQBFNyzfIpErA6CBXXEoVY8DBegaRme1swM4Z1PjebnHAj+BL4jQMcsCrtpXDjjlwwDJWRkTla2jAcmn7M6UwWsA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"aywf0KvmcEAmrFe0AMpqQKfycbJzKGBAv6EJxQDCOkC6LG9iL9dTwNZbjg1z2GXAdpVS2APSbsAYUkjE/tBxwBhSSMT+0HHAepVS2APSbsDWW44Nc9hlwL8sb2Iv11PAmaEJxQDCOkCi8nGycyhgQCesV7QAympAaywf0KvmcEA=","dtype":"float64","shape":[16]}}},"id":"923ea863-65f6-45c9-9df6-bd8bf0bf0f48","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"106a12bf-d4b1-4e98-b556-7a4920981da4","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"923ea863-65f6-45c9-9df6-bd8bf0bf0f48","type":"ColumnDataSource"},"glyph":{"id":"ab31036e-056d-467c-ab11-e8cd3ea1739c","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e2af7207-4101-46b7-9961-2d2a2c315f31","type":"Text"},"selection_glyph":null,"view":{"id":"3a0c4d7d-1e26-4fa1-bd3f-e804e36842cf","type":"CDSView"}},"id":"279c1ad7-b20c-4e51-86ea-637125734060","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e7812ad7-e042-4ccc-847c-9a4e664b9932","type":"ColumnDataSource"}},"id":"5f6da10e-8f36-4d86-82b7-ddcb2dd6cbc1","type":"CDSView"},{"attributes":{"data_source":{"id":"a92cacb3-5696-47eb-b05a-b83f5903857d","type":"ColumnDataSource"},"glyph":{"id":"1aa4b0fd-4b05-4d57-9d1e-e64a93bf0bd9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a284eef0-dceb-4f8c-b1f8-474cac3e1813","type":"Circle"},"selection_glyph":null,"view":{"id":"701667c6-bbb9-4074-87b3-5fcab90e2fb8","type":"CDSView"}},"id":"8d8cde5c-92b7-4a09-a3d1-9abd7434eb11","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#0d3362"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#0d3362"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"800f16c6-c080-4a8f-9990-14f708055b12","type":"AnnularWedge"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2af7207-4101-46b7-9961-2d2a2c315f31","type":"Text"},{"attributes":{"source":{"id":"923ea863-65f6-45c9-9df6-bd8bf0bf0f48","type":"ColumnDataSource"}},"id":"3a0c4d7d-1e26-4fa1-bd3f-e804e36842cf","type":"CDSView"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"06c702f0-36b4-4b26-a633-dde4a8f651cb","type":"Text"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"Zv0QQcZU9T+i9BDxytXuP3ru/18JAuM/RKG7Ox+5zD9kd4gI55XCvwQkM1M7eeC/LCpE5PxM7L8smKo6XxD0v0AbMwNA+vm/U567yyDk/7+0ECLKAOcCwD5SZi7x2wXAyJOqkuHQCMBS1e720cULwN8WM1vCug7ANKy7X9nXEMA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"bLZfBPAOV0Cg0sRXLXlhQDLrDr5nTGNA1FIAQwHoVkAGyYzXMg9lQNRSAEMB6FZAFEU4zHF2XEAGyYzXMg9lQHi2fdUW2VZAAAAAAAAgckAGyYzXMg9lQIaiNChEiGtA/HdeznjObkAAAAAAACByQKYExgH2o29ApgTGAfajb0A=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"Pw8ikoF89D9UGDOTQSXtPysSIgKAUeE/CDBExPn2xT+g6P9/DFjJv1IAEbHEKeK/egYiQob97b9Thpnpo+j0v2cJIrKE0vq/PUZVvTJeAMDIh5khI1MDwFLJ3YUTSAbA3Aoi6gM9CcBmTGZO9DEMwPONqrLkJg/Avmd3i+oNEcA=","dtype":"float64","shape":[16]}}},"id":"e7812ad7-e042-4ccc-847c-9a4e664b9932","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":13},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d8bfac8-9b68-42af-9f07-9c081cd8fe0e","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":13},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"422a032b-e1d9-461b-a2d3-ce8a0aa47d3e","type":"Rect"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"138a56fc-cbcc-48a7-b0b1-1bd050074809","type":"AnnularWedge"},{"attributes":{"source":{"id":"0e36f84d-7215-4ec1-9e6b-6ad13d51a5ef","type":"ColumnDataSource"}},"id":"c01da3d2-bf99-4f42-9ffb-0c7cc0e491d0","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["Penicillin","Streptomycin","Neomycin"],"x":[-15,-15,-15],"y":[18,0,-18]}},"id":"a4f07b0b-5569-4960-96de-32d9a1d0098a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"a4f07b0b-5569-4960-96de-32d9a1d0098a","type":"ColumnDataSource"}},"id":"f5bc1e8e-c0cf-41b3-b354-c51fa9c93004","type":"CDSView"},{"attributes":{"data_source":{"id":"0e36f84d-7215-4ec1-9e6b-6ad13d51a5ef","type":"ColumnDataSource"},"glyph":{"id":"2d8bfac8-9b68-42af-9f07-9c081cd8fe0e","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"422a032b-e1d9-461b-a2d3-ce8a0aa47d3e","type":"Rect"},"selection_glyph":null,"view":{"id":"c01da3d2-bf99-4f42-9ffb-0c7cc0e491d0","type":"CDSView"}},"id":"e630e1f6-d167-41c0-9980-1ae76d3b1ebe","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d2248f19-56ac-450c-aff7-3ecb86588615","type":"ColumnDataSource"}},"id":"e753392f-df37-4d09-9e4b-e9f2a7a3ddd0","type":"CDSView"},{"attributes":{"data_source":{"id":"d2248f19-56ac-450c-aff7-3ecb86588615","type":"ColumnDataSource"},"glyph":{"id":"f86c062f-05e2-4999-9710-7e646d502a7e","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24f0da3e-3d95-4d43-9961-f96d833cc735","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"e753392f-df37-4d09-9e4b-e9f2a7a3ddd0","type":"CDSView"}},"id":"934aa2d9-c478-44b4-9bdd-cd1e53f2a11c","type":"GlyphRenderer"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85208eb7-bbb3-4802-9666-e1ba8c0337a8","type":"Text"},{"attributes":{},"id":"88f1710b-10b9-44cf-8fdc-7eee53f1d7fa","type":"HelpTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"24f0da3e-3d95-4d43-9961-f96d833cc735","type":"AnnularWedge"},{"attributes":{},"id":"84ccf1d4-c295-4355-851e-5c06e42dcd34","type":"ResetTool"},{"attributes":{"data_source":{"id":"a4f07b0b-5569-4960-96de-32d9a1d0098a","type":"ColumnDataSource"},"glyph":{"id":"3e947667-2e8b-49ea-9964-567d6a482232","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85208eb7-bbb3-4802-9666-e1ba8c0337a8","type":"Text"},"selection_glyph":null,"view":{"id":"f5bc1e8e-c0cf-41b3-b354-c51fa9c93004","type":"CDSView"}},"id":"eb4a94bf-ee58-46a9-9866-18680435c33b","type":"GlyphRenderer"},{"attributes":{},"id":"1a3173fd-168e-4f72-9be9-83292b31ef25","type":"SaveTool"},{"attributes":{},"id":"6bd18aca-ef40-47f4-8300-5eb24dcd7ae1","type":"LinearScale"},{"attributes":{"overlay":{"id":"73ee80cc-e9f2-4658-a80f-8b8c8f18ee95","type":"BoxAnnotation"}},"id":"ceb938a7-a2c6-431b-a718-1a704c06e39b","type":"BoxZoomTool"},{"attributes":{},"id":"3f3621c2-86e2-48f5-90a3-75b82e63bd1b","type":"WheelZoomTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"field":"fill_color"},"inner_radius":{"units":"data","value":90},"line_color":{"field":"line_color"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"f86c062f-05e2-4999-9710-7e646d502a7e","type":"AnnularWedge"},{"attributes":{},"id":"0ff8bf51-44d5-4c67-9b4c-35b8cd285554","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"73ee80cc-e9f2-4658-a80f-8b8c8f18ee95","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["start_angle","end_angle","fill_color","line_color"],"data":{"end_angle":{"__ndarray__":"juv/7wot9j95aHcnKkPwP8nK3b2SsuQ/QImZWaK90T9QDCIig6e3v2iPqupjkd2/3E1mhnOc6r8EqruLGjjzvxgtRFT7Ifm/LLDMHNwL/7+hmapy3noCwCvb7tbObwXAtRwzO79kCMA/Xnefr1kLwMufuwOgTg7AqvD/M8ihEMA=","dtype":"float64","shape":[16]},"fill_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"line_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}}},"id":"d2248f19-56ac-450c-aff7-3ecb86588615","type":"ColumnDataSource"},{"attributes":{},"id":"e9c56d09-bc0d-4210-b9bf-f7f1b5553f26","type":"LinearScale"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"07c361f7-50b7-4069-b0cc-cad90e8f61a7","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0ff8bf51-44d5-4c67-9b4c-35b8cd285554","type":"PanTool"},{"id":"3f3621c2-86e2-48f5-90a3-75b82e63bd1b","type":"WheelZoomTool"},{"id":"ceb938a7-a2c6-431b-a718-1a704c06e39b","type":"BoxZoomTool"},{"id":"1a3173fd-168e-4f72-9be9-83292b31ef25","type":"SaveTool"},{"id":"84ccf1d4-c295-4355-851e-5c06e42dcd34","type":"ResetTool"},{"id":"88f1710b-10b9-44cf-8fdc-7eee53f1d7fa","type":"HelpTool"}]},"id":"23592d75-7ca5-444b-9b2c-0ec6e52f8561","type":"Toolbar"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"4cbc79f6-afec-46a1-b84f-b7dea9dfadf1","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"0e286df2-c43e-461f-8c9f-f3c5d3362a6a","type":"Title"},{"attributes":{"data_source":{"id":"cafc6f6f-1daa-4270-927e-cd3a81317991","type":"ColumnDataSource"},"glyph":{"id":"0f5e057d-357d-42ae-8ba7-c7f7886ea8d7","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"106a12bf-d4b1-4e98-b556-7a4920981da4","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"6b7947d0-eb1e-417c-8b05-8eeeb4ff7e3f","type":"CDSView"}},"id":"b2fd6b43-122a-45db-8b1c-543117a4c0d8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"748aec84-ca7d-4059-9301-281c7da662e0","type":"ColumnDataSource"}},"id":"c3069da0-4b8f-468f-9b90-15be6b013262","type":"CDSView"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c64737"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#c64737"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"0f5e057d-357d-42ae-8ba7-c7f7886ea8d7","type":"AnnularWedge"},{"attributes":{"source":{"id":"7f477cbc-f78d-4d77-9cf4-cccd03305924","type":"ColumnDataSource"}},"id":"e0b086b4-aab3-4ec6-9f4d-73feb512cb6a","type":"CDSView"},{"attributes":{"data_source":{"id":"748aec84-ca7d-4059-9301-281c7da662e0","type":"ColumnDataSource"},"glyph":{"id":"c42ca68b-53eb-42f1-9765-30491201df40","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fff16e0e-0b9e-4a1c-a7c9-3d53daa8ee05","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"c3069da0-4b8f-468f-9b90-15be6b013262","type":"CDSView"}},"id":"907e6c5d-03a7-4cbf-b74b-53e85a38ccff","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":90},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"c42ca68b-53eb-42f1-9765-30491201df40","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"fff16e0e-0b9e-4a1c-a7c9-3d53daa8ee05","type":"AnnularWedge"},{"attributes":{"source":{"id":"cafc6f6f-1daa-4270-927e-cd3a81317991","type":"ColumnDataSource"}},"id":"6b7947d0-eb1e-417c-8b05-8eeeb4ff7e3f","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"white"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"eae88c90-f575-4da7-94b2-1d78de9d956c","type":"Circle"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"yERVhbPz8T9mg5l5pRPoP3v6ENHHf9g/KMXd3ZUIiz8rHjNzPs/Wv0CVqspgO+e/tM3dLZGH8b/KUGb2cXH3v97T7r5SW/2/eKu7w5miAcAD7f8nipcEwI0uRIx6jAfAF3CI8GqBCsChscxUW3YNwJd5iNylNRDAW5qqDh6wEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"m8z7btjvY0D9PDy5w1RpQDjj0CUzIWlABsmM1zIPZUChS31Y0mVsQB0YCXI1nGZAOOPQJTMhaUCyh+QAGnxuQM3Wg944S2RA/HdeznjObkA449AlMyFpQAAAAAAAIHJAAAAAAAAgckCg0sRXLXlhQFhbROgM+V5AoNLEVy15YUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"oVZm1m4b8T8Xp7sbHGPmP91BVRW1HtU/p1NmZnBGpL/J1u4uUTDav49xiCjq6+i/27vM3NVf8r/xPlWltkn4vwXC3W2XM/6/jCIzG7wOAsAXZHd/rAMFwKGlu+Oc+AfAK+f/R43tCsC1KESsfeINwCE1RAi3axDA5VVmOi/mEcA=","dtype":"float64","shape":[16]}}},"id":"748aec84-ca7d-4059-9301-281c7da662e0","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"2d6ed44f-ba8b-4b13-b6f4-790f56273e62","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#f0e1d2"},"min_border":0,"outline_line_color":{"value":"black"},"plot_height":800,"plot_width":800,"renderers":[{"id":"73ee80cc-e9f2-4658-a80f-8b8c8f18ee95","type":"BoxAnnotation"},{"id":"934aa2d9-c478-44b4-9bdd-cd1e53f2a11c","type":"GlyphRenderer"},{"id":"2548c547-a1a1-4894-96bb-5d58ec55f169","type":"GlyphRenderer"},{"id":"b2fd6b43-122a-45db-8b1c-543117a4c0d8","type":"GlyphRenderer"},{"id":"907e6c5d-03a7-4cbf-b74b-53e85a38ccff","type":"GlyphRenderer"},{"id":"0df819a2-9453-41c0-b8c7-c89f6460b338","type":"GlyphRenderer"},{"id":"ab6e93d1-1a55-4220-8a93-c9e5e33998ad","type":"GlyphRenderer"},{"id":"d29a89c6-6def-41e6-9610-85accfb98d2b","type":"GlyphRenderer"},{"id":"279c1ad7-b20c-4e51-86ea-637125734060","type":"GlyphRenderer"},{"id":"8d8cde5c-92b7-4a09-a3d1-9abd7434eb11","type":"GlyphRenderer"},{"id":"9de82834-17ea-4583-8ad6-4ee061313bdc","type":"GlyphRenderer"},{"id":"e630e1f6-d167-41c0-9980-1ae76d3b1ebe","type":"GlyphRenderer"},{"id":"eb4a94bf-ee58-46a9-9866-18680435c33b","type":"GlyphRenderer"}],"title":{"id":"0e286df2-c43e-461f-8c9f-f3c5d3362a6a","type":"Title"},"toolbar":{"id":"23592d75-7ca5-444b-9b2c-0ec6e52f8561","type":"Toolbar"},"x_range":{"id":"4cbc79f6-afec-46a1-b84f-b7dea9dfadf1","type":"Range1d"},"x_scale":{"id":"6bd18aca-ef40-47f4-8300-5eb24dcd7ae1","type":"LinearScale"},"y_range":{"id":"07c361f7-50b7-4069-b0cc-cad90e8f61a7","type":"Range1d"},"y_scale":{"id":"e9c56d09-bc0d-4210-b9bf-f7f1b5553f26","type":"LinearScale"}},"id":"67293ec6-368d-4e15-8b31-d916cddc8b1a","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7f477cbc-f78d-4d77-9cf4-cccd03305924","type":"ColumnDataSource"},"glyph":{"id":"eae88c90-f575-4da7-94b2-1d78de9d956c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2d6ed44f-ba8b-4b13-b6f4-790f56273e62","type":"Circle"},"selection_glyph":null,"view":{"id":"e0b086b4-aab3-4ec6-9f4d-73feb512cb6a","type":"CDSView"}},"id":"0df819a2-9453-41c0-b8c7-c89f6460b338","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","text"],"data":{"text":["0.001","0.01","0.1","1.0","10.0","100.0"],"y":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxA","dtype":"float64","shape":[6]}}},"id":"407ef11c-72ef-4dce-ba0c-9640347aedc8","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"89a5478a-b701-4ccd-8381-45ee87130888","type":"Text"}],"root_ids":["67293ec6-368d-4e15-8b31-d916cddc8b1a"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"7ba4734c-3609-44b8-87f8-1f8c546e57ed","elementid":"36e6e6f7-403a-47f6-8451-a959f738ae40","modelid":"67293ec6-368d-4e15-8b31-d916cddc8b1a"}];
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