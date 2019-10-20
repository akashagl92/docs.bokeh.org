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
      };var element = document.getElementById("2c18ee00-c959-4698-b84b-6e78b2571c7e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2c18ee00-c959-4698-b84b-6e78b2571c7e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5bcc3d26-9a24-4618-b986-c2fe75e3748d":{"roots":{"references":[{"attributes":{"source":{"id":"0ffe240a-817f-44a4-a52a-d7a99f34f80d","type":"ColumnDataSource"}},"id":"fec59f54-3915-4946-92fc-54aefcecbdbf","type":"CDSView"},{"attributes":{"source":{"id":"eb9ee3c7-a67f-462e-971c-75cc228db772","type":"ColumnDataSource"}},"id":"a1dec0b5-3b91-43cb-9327-5c33f0408fb4","type":"CDSView"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"4524d736-d392-47c0-92db-c3aa3d3cf640","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"1f240baa-3d56-4ba5-952d-967449c3ec12","type":"Circle"},{"attributes":{"source":{"id":"900b241d-6c0e-446d-aa02-f42152a0a824","type":"ColumnDataSource"}},"id":"fb618c59-fedb-4763-881f-d99fdcb7b4a7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"17e2cfaa-a9be-4aab-a1cd-bce43adddf49","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"d6000fe1-a105-4d3a-b9c4-f09d7fab9d73","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"18c9ebc7-213b-4825-8665-cbe072733fed","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"b756458c-12ab-4d32-a6fc-d62e5fa42a98","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"d6000fe1-a105-4d3a-b9c4-f09d7fab9d73","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"95e22c80-47ca-4221-b8c4-c993ebd8ebfd","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"7dcea866-8834-47f3-af27-a8cbb79bcfaa","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"6eb0876f-fba6-4f54-a674-748f404d07ca","type":"Circle"},{"attributes":{"range":null},"id":"d6000fe1-a105-4d3a-b9c4-f09d7fab9d73","type":"Jitter"},{"attributes":{"data_source":{"id":"ef9b76c3-79ff-4f12-a333-db3f0860e771","type":"ColumnDataSource"},"glyph":{"id":"2315e512-ba2a-422e-ab2c-0773acfe69ef","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aaadf173-78ed-4d78-9801-1b0c5638ccc9","type":"Circle"},"selection_glyph":null,"view":{"id":"ac13c72c-9a61-42cd-83dd-6a5e1a7dd55d","type":"CDSView"}},"id":"6369b7c8-1ed4-4441-96f5-ce2fb5666245","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"eec47947-0730-425c-a510-c4e8a5f14378","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"537d4438-a28f-4da1-8648-53c7186988ac","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"a8aa4ba8-6a21-4845-92ea-c87b3715a3a8","type":"Circle"},{"attributes":{"data_source":{"id":"e6e42712-3493-486f-a84a-6a77a8fa6f32","type":"ColumnDataSource"},"glyph":{"id":"1f240baa-3d56-4ba5-952d-967449c3ec12","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eec47947-0730-425c-a510-c4e8a5f14378","type":"Circle"},"selection_glyph":null,"view":{"id":"65a06dc8-baa2-474e-a977-c11b974328c5","type":"CDSView"}},"id":"2029536c-ca6f-4d63-a2c9-4132efd66b04","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"3b28b1ef-84ed-4b36-8cfb-5329e477f30a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"37e57b63-a336-4274-bb4e-430a4fab3c5f","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"6b4cc8e9-3ec3-4009-be82-aa166c281ce2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"537d4438-a28f-4da1-8648-53c7186988ac","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"7d8463ef-9dda-4925-81c9-db5573fd3616","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"cc6e24a3-6868-4819-bfe9-2a9df7ce82e1","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"f6f18fe5-3bd5-4390-b919-a07e262cdd07","type":"Circle"},{"attributes":{"source":{"id":"32bda537-1ca0-4fd3-8fe0-798f99e8caf6","type":"ColumnDataSource"}},"id":"68b85dbf-3a6d-4a6d-9b6e-0858f00d8a2b","type":"CDSView"},{"attributes":{"data_source":{"id":"1d9dc874-25bf-4042-83e0-c313f7930b69","type":"ColumnDataSource"},"glyph":{"id":"e63b55ad-d49d-446d-8130-2ebdd2730885","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6b4cc8e9-3ec3-4009-be82-aa166c281ce2","type":"Circle"},"selection_glyph":null,"view":{"id":"939b89bd-5fba-4b6a-8037-f0d07e0b9cb9","type":"CDSView"}},"id":"522d5b03-e31f-4d0d-bb86-910699bba55a","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"cc6e24a3-6868-4819-bfe9-2a9df7ce82e1","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"6b6b7ae9-fd46-4cdd-8111-6cb7590cc1bd","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"e83a1351-abf6-493f-943b-901a823aba03","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b34985cc-7ca4-484b-bd14-fd1ce0e098f2","type":"ColumnDataSource"}},"id":"da3941c6-4133-43f1-abd9-fa83eae03ffc","type":"CDSView"},{"attributes":{"source":{"id":"3b28b1ef-84ed-4b36-8cfb-5329e477f30a","type":"ColumnDataSource"}},"id":"2b5d9aff-ac2f-49f5-8637-d352ce8ac7f0","type":"CDSView"},{"attributes":{"data_source":{"id":"e83a1351-abf6-493f-943b-901a823aba03","type":"ColumnDataSource"},"glyph":{"id":"6b6b7ae9-fd46-4cdd-8111-6cb7590cc1bd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f6f18fe5-3bd5-4390-b919-a07e262cdd07","type":"Circle"},"selection_glyph":null,"view":{"id":"c69f234d-e9db-42d0-bccb-3566fa9d2b9f","type":"CDSView"}},"id":"615384f5-7766-45f8-9b87-1e1a77d20678","type":"GlyphRenderer"},{"attributes":{"range":null},"id":"537d4438-a28f-4da1-8648-53c7186988ac","type":"Jitter"},{"attributes":{"data_source":{"id":"32bda537-1ca0-4fd3-8fe0-798f99e8caf6","type":"ColumnDataSource"},"glyph":{"id":"18c9ebc7-213b-4825-8665-cbe072733fed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95e22c80-47ca-4221-b8c4-c993ebd8ebfd","type":"Circle"},"selection_glyph":null,"view":{"id":"68b85dbf-3a6d-4a6d-9b6e-0858f00d8a2b","type":"CDSView"}},"id":"19a93ea0-4115-44cb-b005-59e25b611756","type":"GlyphRenderer"},{"attributes":{},"id":"fdbde858-2d2a-4c86-a289-b44f6255ca31","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3b28b1ef-84ed-4b36-8cfb-5329e477f30a","type":"ColumnDataSource"},"glyph":{"id":"a8aa4ba8-6a21-4845-92ea-c87b3715a3a8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7d8463ef-9dda-4925-81c9-db5573fd3616","type":"Circle"},"selection_glyph":null,"view":{"id":"2b5d9aff-ac2f-49f5-8637-d352ce8ac7f0","type":"CDSView"}},"id":"9393e602-307a-4ba7-afca-7585220f6698","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"438e0b1f-f874-47de-ab6e-699d9998ff31","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"e6e42712-3493-486f-a84a-6a77a8fa6f32","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0ffe240a-817f-44a4-a52a-d7a99f34f80d","type":"ColumnDataSource"},"glyph":{"id":"c41f7d2e-15c1-447d-bfaf-b11d2df03303","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"442f6b34-580f-49f6-8dd6-2da7ea42d11a","type":"Circle"},"selection_glyph":null,"view":{"id":"fec59f54-3915-4946-92fc-54aefcecbdbf","type":"CDSView"}},"id":"872529c3-f41b-40de-b276-3a87798aca9e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b34985cc-7ca4-484b-bd14-fd1ce0e098f2","type":"ColumnDataSource"},"glyph":{"id":"a0552736-c555-441b-8b2f-eff59451bae4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17e2cfaa-a9be-4aab-a1cd-bce43adddf49","type":"Circle"},"selection_glyph":null,"view":{"id":"da3941c6-4133-43f1-abd9-fa83eae03ffc","type":"CDSView"}},"id":"3aa5840b-2ab6-47c3-8063-b2b247b4d1e0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"6e3b9ec1-e3f5-4ae2-9ba2-c6d8d9e3b852","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e6e42712-3493-486f-a84a-6a77a8fa6f32","type":"ColumnDataSource"}},"id":"65a06dc8-baa2-474e-a977-c11b974328c5","type":"CDSView"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"c78e6f25-7db6-4b2c-a76d-446a68d2a5b2","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"c41f7d2e-15c1-447d-bfaf-b11d2df03303","type":"Circle"},{"attributes":{"data_source":{"id":"7673a0f1-7a46-40a4-9313-e611214a6619","type":"ColumnDataSource"},"glyph":{"id":"438e0b1f-f874-47de-ab6e-699d9998ff31","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4001f1f3-ca99-4c0b-8edd-91eb30d12166","type":"Circle"},"selection_glyph":null,"view":{"id":"05458ef3-fec5-4093-91e4-296d652cdcd9","type":"CDSView"}},"id":"47b7c16f-9156-4bd9-bd4e-5671d7780439","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"7dcea866-8834-47f3-af27-a8cbb79bcfaa","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"dc4838f0-f0a5-4136-b7d7-deb33249f361","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"7673a0f1-7a46-40a4-9313-e611214a6619","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"0ffe240a-817f-44a4-a52a-d7a99f34f80d","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"0cbdada9-71a2-4636-a4b8-88fff4bfd25e","type":"Circle"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"transform":{"id":"45ac81ae-3afa-4052-95b1-c36690e1124e","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"bde5afed-9a18-4126-b4dd-ae38f8f7b3af","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"4001f1f3-ca99-4c0b-8edd-91eb30d12166","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"1d9dc874-25bf-4042-83e0-c313f7930b69","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"900b241d-6c0e-446d-aa02-f42152a0a824","type":"ColumnDataSource"},"glyph":{"id":"4524d736-d392-47c0-92db-c3aa3d3cf640","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e1ec4852-da39-4166-8f84-8b96e300167f","type":"Circle"},"selection_glyph":null,"view":{"id":"fb618c59-fedb-4763-881f-d99fdcb7b4a7","type":"CDSView"}},"id":"50926c0d-5506-4465-8c04-d442e42d63a4","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"c78e6f25-7db6-4b2c-a76d-446a68d2a5b2","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"442f6b34-580f-49f6-8dd6-2da7ea42d11a","type":"Circle"},{"attributes":{"range":null},"id":"37e57b63-a336-4274-bb4e-430a4fab3c5f","type":"Jitter"},{"attributes":{},"id":"bac7b3df-4f76-43ee-a865-bc9860ca5aed","type":"BasicTickFormatter"},{"attributes":{"range":null},"id":"45ac81ae-3afa-4052-95b1-c36690e1124e","type":"Jitter"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"2315e512-ba2a-422e-ab2c-0773acfe69ef","type":"Circle"},{"attributes":{"source":{"id":"1d9dc874-25bf-4042-83e0-c313f7930b69","type":"ColumnDataSource"}},"id":"939b89bd-5fba-4b6a-8037-f0d07e0b9cb9","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"ef9b76c3-79ff-4f12-a333-db3f0860e771","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e83a1351-abf6-493f-943b-901a823aba03","type":"ColumnDataSource"}},"id":"c69f234d-e9db-42d0-bccb-3566fa9d2b9f","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"45ac81ae-3afa-4052-95b1-c36690e1124e","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"06cb47bc-5a8b-49d2-b77b-1ccdc301b1f4","type":"Circle"},{"attributes":{"data_source":{"id":"eb9ee3c7-a67f-462e-971c-75cc228db772","type":"ColumnDataSource"},"glyph":{"id":"0cbdada9-71a2-4636-a4b8-88fff4bfd25e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b756458c-12ab-4d32-a6fc-d62e5fa42a98","type":"Circle"},"selection_glyph":null,"view":{"id":"a1dec0b5-3b91-43cb-9327-5c33f0408fb4","type":"CDSView"}},"id":"f5ba2917-17e5-44ac-a7b6-7c866fdf7ace","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ef9b76c3-79ff-4f12-a333-db3f0860e771","type":"ColumnDataSource"}},"id":"ac13c72c-9a61-42cd-83dd-6a5e1a7dd55d","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"e1ec4852-da39-4166-8f84-8b96e300167f","type":"Circle"},{"attributes":{"below":[{"id":"ef541739-4ab3-4673-aafb-7e1a945be154","type":"LinearAxis"}],"left":[{"id":"9605e980-48a2-42e9-85a0-59d36c469df2","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"ef541739-4ab3-4673-aafb-7e1a945be154","type":"LinearAxis"},{"id":"a8f1259d-aef9-4881-aa5d-dbd45603d6f7","type":"Grid"},{"id":"9605e980-48a2-42e9-85a0-59d36c469df2","type":"LinearAxis"},{"id":"c5f6ffed-b9d7-465a-bd2e-d61dd3c33f94","type":"Grid"},{"id":"6e276d73-adb5-422d-8ffb-966866bda5de","type":"BoxAnnotation"},{"id":"9393e602-307a-4ba7-afca-7585220f6698","type":"GlyphRenderer"},{"id":"19a93ea0-4115-44cb-b005-59e25b611756","type":"GlyphRenderer"},{"id":"872529c3-f41b-40de-b276-3a87798aca9e","type":"GlyphRenderer"},{"id":"522d5b03-e31f-4d0d-bb86-910699bba55a","type":"GlyphRenderer"},{"id":"615384f5-7766-45f8-9b87-1e1a77d20678","type":"GlyphRenderer"},{"id":"41ac1237-df30-4613-ab3a-829518365ca0","type":"GlyphRenderer"},{"id":"aa2c4fc2-4a9c-4617-9317-d8e763f6bf36","type":"GlyphRenderer"},{"id":"06926dfb-c510-4fe6-8d6f-67ae77442907","type":"GlyphRenderer"},{"id":"079928a9-6bac-42db-934a-398a07e754b2","type":"GlyphRenderer"},{"id":"4db47a27-b3c9-4e92-b0d8-62604517756d","type":"GlyphRenderer"},{"id":"ae85998b-96e1-4870-b2f3-0fc6c469f62f","type":"GlyphRenderer"},{"id":"6c49141c-17d6-4744-a199-9bbd89f93663","type":"GlyphRenderer"},{"id":"19900685-aa0c-4a4b-ae4b-e1a6bd04ecf5","type":"GlyphRenderer"}],"title":{"id":"5fd986e1-791a-4dfd-a005-3e8c8afd894b","type":"Title"},"toolbar":{"id":"a482d0c0-8624-4325-89f6-09295a86d95f","type":"Toolbar"},"x_range":{"id":"7c6dca2e-c72c-4098-b69b-1c2bdb8fc2c9","type":"DataRange1d"},"x_scale":{"id":"d8cf0be2-bdad-411f-9814-1ac7e064a8c2","type":"LinearScale"},"y_range":{"id":"751ec520-d07e-4c14-9ffe-1a0e03b2d5b8","type":"DataRange1d"},"y_scale":{"id":"b679cd95-9241-48df-b733-8ba6ff2f5340","type":"LinearScale"}},"id":"fc849af9-00bd-449c-bff6-074a176e089d","subtype":"Figure","type":"Plot"},{"attributes":{"range":null},"id":"c78e6f25-7db6-4b2c-a76d-446a68d2a5b2","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"aaadf173-78ed-4d78-9801-1b0c5638ccc9","type":"Circle"},{"attributes":{"source":{"id":"7673a0f1-7a46-40a4-9313-e611214a6619","type":"ColumnDataSource"}},"id":"05458ef3-fec5-4093-91e4-296d652cdcd9","type":"CDSView"},{"attributes":{"source":{"id":"0fc288f5-c28a-4ba4-83c4-eca1b9f2280a","type":"ColumnDataSource"}},"id":"2c6c5349-bfeb-47cc-b120-602332ab7776","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"eb9ee3c7-a67f-462e-971c-75cc228db772","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"bdb4eeb9-8b46-41ae-aa73-4f967f6cf940","type":"LinearAxis"}],"left":[{"id":"4ab6c73b-eb00-4bff-a761-f31609c5b523","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"bdb4eeb9-8b46-41ae-aa73-4f967f6cf940","type":"LinearAxis"},{"id":"c03afe3f-4cae-4a88-bf9e-b1715f2beda0","type":"Grid"},{"id":"4ab6c73b-eb00-4bff-a761-f31609c5b523","type":"LinearAxis"},{"id":"bab097dc-c003-42e7-99f5-25e7b2810fda","type":"Grid"},{"id":"cfbe48a1-1e1f-48c6-b948-ec7984daca95","type":"BoxAnnotation"},{"id":"b9ea16b0-f90f-4e24-a1c2-675a21d34b88","type":"GlyphRenderer"},{"id":"f5ba2917-17e5-44ac-a7b6-7c866fdf7ace","type":"GlyphRenderer"},{"id":"47b7c16f-9156-4bd9-bd4e-5671d7780439","type":"GlyphRenderer"},{"id":"6369b7c8-1ed4-4441-96f5-ce2fb5666245","type":"GlyphRenderer"},{"id":"df14eec6-94ea-48b4-8bef-ecd852be24bf","type":"GlyphRenderer"},{"id":"2029536c-ca6f-4d63-a2c9-4132efd66b04","type":"GlyphRenderer"},{"id":"50926c0d-5506-4465-8c04-d442e42d63a4","type":"GlyphRenderer"},{"id":"e3ff443c-740d-4d7a-be3f-18e1ac1e048c","type":"GlyphRenderer"},{"id":"3aa5840b-2ab6-47c3-8063-b2b247b4d1e0","type":"GlyphRenderer"},{"id":"d19b4d86-6a45-4e37-86b8-e1f58d7a2d1b","type":"GlyphRenderer"},{"id":"928299df-8e88-4038-9a57-2bfebe83918f","type":"GlyphRenderer"},{"id":"5120c3aa-c76e-4057-bd63-410909680782","type":"GlyphRenderer"},{"id":"2a2b662d-2d4e-4c0f-9f31-de862c82ea76","type":"GlyphRenderer"}],"title":{"id":"ec6481e7-4e44-43f5-8bb0-e2a02bb5a6b0","type":"Title"},"toolbar":{"id":"3d563526-d11b-4f6a-8bc1-3fcbb5b42672","type":"Toolbar"},"x_range":{"id":"e7f00c98-efc8-4fb6-91de-0203d4a78f10","type":"DataRange1d"},"x_scale":{"id":"40daa15a-20f2-40cd-9476-0da31e74d0a9","type":"LinearScale"},"y_range":{"id":"8ab1ba00-01d3-48a4-8c7b-00a1052c0b33","type":"DataRange1d"},"y_scale":{"id":"d859f5cc-434b-4c1b-9876-dee439578396","type":"LinearScale"}},"id":"54f80e8e-8541-46ac-b932-5a746c5af6ad","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"0fc288f5-c28a-4ba4-83c4-eca1b9f2280a","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"7dcea866-8834-47f3-af27-a8cbb79bcfaa","type":"Jitter"},{"attributes":{"callback":null},"id":"e7f00c98-efc8-4fb6-91de-0203d4a78f10","type":"DataRange1d"},{"attributes":{"data_source":{"id":"0fc288f5-c28a-4ba4-83c4-eca1b9f2280a","type":"ColumnDataSource"},"glyph":{"id":"dc4838f0-f0a5-4136-b7d7-deb33249f361","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6eb0876f-fba6-4f54-a674-748f404d07ca","type":"Circle"},"selection_glyph":null,"view":{"id":"2c6c5349-bfeb-47cc-b120-602332ab7776","type":"CDSView"}},"id":"41ac1237-df30-4613-ab3a-829518365ca0","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8a6e2103-639e-493b-9e67-96169524244a","type":"PanTool"},{"id":"3de57b96-fe42-4a4f-8bfe-22eb6bb39dd6","type":"WheelZoomTool"},{"id":"cf026add-817e-45cc-9d8b-569f47ccf0b8","type":"BoxZoomTool"},{"id":"387e0a72-b8f1-4fef-be9d-a709e142261c","type":"SaveTool"},{"id":"5c663e92-12cb-4790-8140-924c6806fa81","type":"ResetTool"},{"id":"9a2cd946-06c3-40c8-a7a5-b896bc995bf1","type":"HelpTool"}]},"id":"3d563526-d11b-4f6a-8bc1-3fcbb5b42672","type":"Toolbar"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"37e57b63-a336-4274-bb4e-430a4fab3c5f","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"e63b55ad-d49d-446d-8130-2ebdd2730885","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg without jittering"},"id":"ec6481e7-4e44-43f5-8bb0-e2a02bb5a6b0","type":"Title"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"900b241d-6c0e-446d-aa02-f42152a0a824","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"32bda537-1ca0-4fd3-8fe0-798f99e8caf6","type":"ColumnDataSource"},{"attributes":{},"id":"5c663e92-12cb-4790-8140-924c6806fa81","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"b34985cc-7ca4-484b-bd14-fd1ce0e098f2","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"cc6e24a3-6868-4819-bfe9-2a9df7ce82e1","type":"Jitter"},{"attributes":{"overlay":{"id":"cfbe48a1-1e1f-48c6-b948-ec7984daca95","type":"BoxAnnotation"}},"id":"cf026add-817e-45cc-9d8b-569f47ccf0b8","type":"BoxZoomTool"},{"attributes":{"source":{"id":"f739383a-00ad-431d-b19d-8f9873c31129","type":"ColumnDataSource"}},"id":"4cc12e77-005b-45b4-a68f-ccc2e56181c3","type":"CDSView"},{"attributes":{"plot":null,"text":"Years vs mpg with jittering"},"id":"5fd986e1-791a-4dfd-a005-3e8c8afd894b","type":"Title"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"71b0ac44-e9c6-420f-89c8-ac71f44f490e","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"9b6f149a-7310-46eb-b21e-0cbc3d32d113","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"9b5e51fd-d1cb-4830-a980-95a2b49e2d09","type":"Circle"},{"attributes":{"data_source":{"id":"3bb6d44d-1bdd-4bc2-8f6a-7c6692cb932c","type":"ColumnDataSource"},"glyph":{"id":"71b0ac44-e9c6-420f-89c8-ac71f44f490e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87eb36fb-cb08-4d0a-8c58-717fb8241262","type":"Circle"},"selection_glyph":null,"view":{"id":"932d938f-771d-4f55-abcc-45a4c58405d9","type":"CDSView"}},"id":"b9ea16b0-f90f-4e24-a1c2-675a21d34b88","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"20dc9946-1004-4271-bf34-d96abac036a2","type":"ColumnDataSource"},"glyph":{"id":"9b5e51fd-d1cb-4830-a980-95a2b49e2d09","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3975b888-ec3a-49cc-a6cb-a1c88498b15e","type":"Circle"},"selection_glyph":null,"view":{"id":"98a16d9e-685c-4daa-8c6a-bc23c84ac1e8","type":"CDSView"}},"id":"06926dfb-c510-4fe6-8d6f-67ae77442907","type":"GlyphRenderer"},{"attributes":{},"id":"d8cf0be2-bdad-411f-9814-1ac7e064a8c2","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"6190981a-3445-40f6-a623-1334fba2bd5a","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"23bb0687-06e8-44c1-a6f5-412b404e2079","type":"PanTool"},{"id":"32c3e712-d5c1-4f89-9edd-5962ae81bbbc","type":"WheelZoomTool"},{"id":"46ca6da7-bac4-4213-8832-d4f80b8fbfb9","type":"BoxZoomTool"},{"id":"e7037151-a31b-46f4-8150-93f5a867c13d","type":"SaveTool"},{"id":"44afa33a-c8d9-44ae-a6f3-e5584b83403d","type":"ResetTool"},{"id":"d843cd7f-2977-4f41-ad87-f513056f0fe7","type":"HelpTool"}]},"id":"a482d0c0-8624-4325-89f6-09295a86d95f","type":"Toolbar"},{"attributes":{"data_source":{"id":"6190981a-3445-40f6-a623-1334fba2bd5a","type":"ColumnDataSource"},"glyph":{"id":"f7dbc6b2-7d12-4fdd-a2bb-f4ba83dedcfa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4ae76738-772a-4608-b96b-3dea1c346b9a","type":"Circle"},"selection_glyph":null,"view":{"id":"4690725c-f5c5-40ba-a040-f82f388b3ccd","type":"CDSView"}},"id":"e3ff443c-740d-4d7a-be3f-18e1ac1e048c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"e20c9888-7744-44d8-b783-9994f3ef4dc5","type":"ColumnDataSource"},{"attributes":{},"id":"8a6e2103-639e-493b-9e67-96169524244a","type":"PanTool"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"f8386e5f-5150-4ac7-876f-c3c4fb6cac2b","type":"Circle"},{"attributes":{"children":[{"id":"54f80e8e-8541-46ac-b932-5a746c5af6ad","subtype":"Figure","type":"Plot"},{"id":"fc849af9-00bd-449c-bff6-074a176e089d","subtype":"Figure","type":"Plot"}]},"id":"1d23a6cd-fed1-4b51-b88d-e4d929e11fe7","type":"Column"},{"attributes":{"plot":{"id":"fc849af9-00bd-449c-bff6-074a176e089d","subtype":"Figure","type":"Plot"},"ticker":{"id":"41bec0c7-9405-44e7-aada-a861bdd78f3c","type":"BasicTicker"}},"id":"a8f1259d-aef9-4881-aa5d-dbd45603d6f7","type":"Grid"},{"attributes":{"source":{"id":"e20c9888-7744-44d8-b783-9994f3ef4dc5","type":"ColumnDataSource"}},"id":"116d2c80-b415-42c6-bed4-89f1272d41b8","type":"CDSView"},{"attributes":{"plot":{"id":"54f80e8e-8541-46ac-b932-5a746c5af6ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3dfdd7a-a5b4-42d0-a561-1e8caf5b0601","type":"BasicTicker"}},"id":"c03afe3f-4cae-4a88-bf9e-b1715f2beda0","type":"Grid"},{"attributes":{"callback":null},"id":"8ab1ba00-01d3-48a4-8c7b-00a1052c0b33","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"a3fec8cb-3732-4d9e-ba14-730faee892bb","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"248c43a1-15e4-4ec1-90ba-c3f0f08b05ef","type":"Circle"},{"attributes":{},"id":"41bec0c7-9405-44e7-aada-a861bdd78f3c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"8cc8d6d1-f5ff-4703-a47b-b18943118c3d","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"90973855-e7da-401c-ac19-a2178e9a7438","type":"Circle"},{"attributes":{},"id":"b3dfdd7a-a5b4-42d0-a561-1e8caf5b0601","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"4ae76738-772a-4608-b96b-3dea1c346b9a","type":"Circle"},{"attributes":{"data_source":{"id":"170e3090-44b9-4ad6-a410-0317032344a4","type":"ColumnDataSource"},"glyph":{"id":"90973855-e7da-401c-ac19-a2178e9a7438","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"991d4cff-88ce-475d-8df1-773a243cda5f","type":"Circle"},"selection_glyph":null,"view":{"id":"d8baebbe-488d-4c7d-99a6-91302b9bd364","type":"CDSView"}},"id":"928299df-8e88-4038-9a57-2bfebe83918f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f739383a-00ad-431d-b19d-8f9873c31129","type":"ColumnDataSource"},"glyph":{"id":"f8386e5f-5150-4ac7-876f-c3c4fb6cac2b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5ea7c86a-e824-40e2-a23e-add3b032c9ed","type":"Circle"},"selection_glyph":null,"view":{"id":"4cc12e77-005b-45b4-a68f-ccc2e56181c3","type":"CDSView"}},"id":"df14eec6-94ea-48b4-8bef-ecd852be24bf","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"00a39731-1612-4f3c-8d44-2f24636027eb","type":"ColumnDataSource"},"glyph":{"id":"16ed7d4b-95bb-4a97-a7a8-b6fab2b975b0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"248c43a1-15e4-4ec1-90ba-c3f0f08b05ef","type":"Circle"},"selection_glyph":null,"view":{"id":"4d39916a-b96b-4818-82af-a4e0e1abbcb4","type":"CDSView"}},"id":"079928a9-6bac-42db-934a-398a07e754b2","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7c6dca2e-c72c-4098-b69b-1c2bdb8fc2c9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"707d7225-bcd2-47a6-a8ab-f29f009bf86d","type":"BasicTickFormatter"},"plot":{"id":"54f80e8e-8541-46ac-b932-5a746c5af6ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3dfdd7a-a5b4-42d0-a561-1e8caf5b0601","type":"BasicTicker"}},"id":"bdb4eeb9-8b46-41ae-aa73-4f967f6cf940","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"e016b2f3-0b14-4b55-98c5-7a8024557c47","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"0c050480-c5f8-434e-9866-0c06ccdebb9a","type":"Circle"},{"attributes":{},"id":"da60041a-dbe8-4c44-b19e-cfb2058ee097","type":"BasicTicker"},{"attributes":{},"id":"cc847177-b736-4258-bdfb-baf7c2ed6190","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"7b742f40-738e-449d-9b43-a466966b3f57","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"74e88136-bd2f-409b-9515-7f8f9a25719d","type":"ColumnDataSource"},"glyph":{"id":"62d4f5ce-fa21-4cf5-89c7-30a6fd46253c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f9c021e2-8dde-4a78-9ef2-27884cb18311","type":"Circle"},"selection_glyph":null,"view":{"id":"ff022709-1652-4d98-91e1-c4aee8887b99","type":"CDSView"}},"id":"5120c3aa-c76e-4057-bd63-410909680782","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"991d4cff-88ce-475d-8df1-773a243cda5f","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"6087995c-ae24-4da6-8ff9-da205208c07f","type":"Circle"},{"attributes":{"source":{"id":"20dc9946-1004-4271-bf34-d96abac036a2","type":"ColumnDataSource"}},"id":"98a16d9e-685c-4daa-8c6a-bc23c84ac1e8","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"0062f8fd-f470-42cc-a888-15a760980201","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"cdcc70c3-1c4c-481b-b27c-7eb13f1c4257","type":"Circle"},{"attributes":{},"id":"1e525cc1-7efe-4370-a3b5-e2f42ccfef06","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e20c9888-7744-44d8-b783-9994f3ef4dc5","type":"ColumnDataSource"},"glyph":{"id":"6087995c-ae24-4da6-8ff9-da205208c07f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8cc8d6d1-f5ff-4703-a47b-b18943118c3d","type":"Circle"},"selection_glyph":null,"view":{"id":"116d2c80-b415-42c6-bed4-89f1272d41b8","type":"CDSView"}},"id":"d19b4d86-6a45-4e37-86b8-e1f58d7a2d1b","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cfbe48a1-1e1f-48c6-b948-ec7984daca95","type":"BoxAnnotation"},{"attributes":{"range":null},"id":"e016b2f3-0b14-4b55-98c5-7a8024557c47","type":"Jitter"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"f739383a-00ad-431d-b19d-8f9873c31129","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"74e88136-bd2f-409b-9515-7f8f9a25719d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6e3b9ec1-e3f5-4ae2-9ba2-c6d8d9e3b852","type":"ColumnDataSource"},"glyph":{"id":"bde5afed-9a18-4126-b4dd-ae38f8f7b3af","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"06cb47bc-5a8b-49d2-b77b-1ccdc301b1f4","type":"Circle"},"selection_glyph":null,"view":{"id":"b901a260-85cf-43f3-a4d6-839ae68974a2","type":"CDSView"}},"id":"aa2c4fc2-4a9c-4617-9317-d8e763f6bf36","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7b742f40-738e-449d-9b43-a466966b3f57","type":"ColumnDataSource"}},"id":"ac91b57f-f212-4a78-a8cd-d2aaa8555b1e","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"fc849af9-00bd-449c-bff6-074a176e089d","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc847177-b736-4258-bdfb-baf7c2ed6190","type":"BasicTicker"}},"id":"c5f6ffed-b9d7-465a-bd2e-d61dd3c33f94","type":"Grid"},{"attributes":{"source":{"id":"0aca14f0-8e2c-4e9a-8ac7-74d3818542a0","type":"ColumnDataSource"}},"id":"0d96382c-b264-478b-a3a5-a301acdbe245","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"ccf43015-9d12-43ee-ac78-36cc1594c023","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"5a05047c-06d1-4425-8681-aa0b8ccee8f0","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"54f80e8e-8541-46ac-b932-5a746c5af6ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"da60041a-dbe8-4c44-b19e-cfb2058ee097","type":"BasicTicker"}},"id":"bab097dc-c003-42e7-99f5-25e7b2810fda","type":"Grid"},{"attributes":{"source":{"id":"00a39731-1612-4f3c-8d44-2f24636027eb","type":"ColumnDataSource"}},"id":"4d39916a-b96b-4818-82af-a4e0e1abbcb4","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"b04b3aac-72bc-4e4d-bc58-7f2faca8da9f","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"e09dab52-ce14-489a-bcf5-38f334331b49","type":"Circle"},{"attributes":{"source":{"id":"6e3b9ec1-e3f5-4ae2-9ba2-c6d8d9e3b852","type":"ColumnDataSource"}},"id":"b901a260-85cf-43f3-a4d6-839ae68974a2","type":"CDSView"},{"attributes":{"source":{"id":"77ac79ec-7f08-4c7a-91b4-112f0920b48b","type":"ColumnDataSource"}},"id":"6aaa7484-0126-44e2-8872-3acf6da77b74","type":"CDSView"},{"attributes":{},"id":"387e0a72-b8f1-4fef-be9d-a709e142261c","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"5ea7c86a-e824-40e2-a23e-add3b032c9ed","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"e016b2f3-0b14-4b55-98c5-7a8024557c47","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"4cd6cb07-c224-40bc-aa8e-7981a330a609","type":"Circle"},{"attributes":{"range":null},"id":"ccf43015-9d12-43ee-ac78-36cc1594c023","type":"Jitter"},{"attributes":{"formatter":{"id":"fdbde858-2d2a-4c86-a289-b44f6255ca31","type":"BasicTickFormatter"},"plot":{"id":"fc849af9-00bd-449c-bff6-074a176e089d","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc847177-b736-4258-bdfb-baf7c2ed6190","type":"BasicTicker"}},"id":"9605e980-48a2-42e9-85a0-59d36c469df2","type":"LinearAxis"},{"attributes":{"source":{"id":"170e3090-44b9-4ad6-a410-0317032344a4","type":"ColumnDataSource"}},"id":"d8baebbe-488d-4c7d-99a6-91302b9bd364","type":"CDSView"},{"attributes":{},"id":"9a2cd946-06c3-40c8-a7a5-b896bc995bf1","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"09053ff0-4349-4e49-b778-c3f07eb3ea75","type":"Circle"},{"attributes":{"formatter":{"id":"1e525cc1-7efe-4370-a3b5-e2f42ccfef06","type":"BasicTickFormatter"},"plot":{"id":"54f80e8e-8541-46ac-b932-5a746c5af6ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"da60041a-dbe8-4c44-b19e-cfb2058ee097","type":"BasicTicker"}},"id":"4ab6c73b-eb00-4bff-a761-f31609c5b523","type":"LinearAxis"},{"attributes":{"data_source":{"id":"77ac79ec-7f08-4c7a-91b4-112f0920b48b","type":"ColumnDataSource"},"glyph":{"id":"bc87ad80-2e58-46aa-a4e6-d09146e5b8eb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5a05047c-06d1-4425-8681-aa0b8ccee8f0","type":"Circle"},"selection_glyph":null,"view":{"id":"6aaa7484-0126-44e2-8872-3acf6da77b74","type":"CDSView"}},"id":"4db47a27-b3c9-4e92-b0d8-62604517756d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7b742f40-738e-449d-9b43-a466966b3f57","type":"ColumnDataSource"},"glyph":{"id":"4cd6cb07-c224-40bc-aa8e-7981a330a609","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0c050480-c5f8-434e-9866-0c06ccdebb9a","type":"Circle"},"selection_glyph":null,"view":{"id":"ac91b57f-f212-4a78-a8cd-d2aaa8555b1e","type":"CDSView"}},"id":"ae85998b-96e1-4870-b2f3-0fc6c469f62f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"f9c021e2-8dde-4a78-9ef2-27884cb18311","type":"Circle"},{"attributes":{},"id":"23bb0687-06e8-44c1-a6f5-412b404e2079","type":"PanTool"},{"attributes":{"overlay":{"id":"6e276d73-adb5-422d-8ffb-966866bda5de","type":"BoxAnnotation"}},"id":"46ca6da7-bac4-4213-8832-d4f80b8fbfb9","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"20dc9946-1004-4271-bf34-d96abac036a2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"3bb6d44d-1bdd-4bc2-8f6a-7c6692cb932c","type":"ColumnDataSource"},{"attributes":{"source":{"id":"74e88136-bd2f-409b-9515-7f8f9a25719d","type":"ColumnDataSource"}},"id":"ff022709-1652-4d98-91e1-c4aee8887b99","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"881d4a83-400c-4512-9d3d-942eba8fce83","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"62d4f5ce-fa21-4cf5-89c7-30a6fd46253c","type":"Circle"},{"attributes":{},"id":"b679cd95-9241-48df-b733-8ba6ff2f5340","type":"LinearScale"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"0062f8fd-f470-42cc-a888-15a760980201","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"931c32c7-7dd8-4679-a3c9-7e992291c206","type":"Circle"},{"attributes":{"range":null},"id":"9b6f149a-7310-46eb-b21e-0cbc3d32d113","type":"Jitter"},{"attributes":{"source":{"id":"3bb6d44d-1bdd-4bc2-8f6a-7c6692cb932c","type":"ColumnDataSource"}},"id":"932d938f-771d-4f55-abcc-45a4c58405d9","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"694f1f9e-8ce9-47a2-b795-09c0ef806ca3","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"b04b3aac-72bc-4e4d-bc58-7f2faca8da9f","type":"Jitter"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"ccf43015-9d12-43ee-ac78-36cc1594c023","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"bc87ad80-2e58-46aa-a4e6-d09146e5b8eb","type":"Circle"},{"attributes":{},"id":"3de57b96-fe42-4a4f-8bfe-22eb6bb39dd6","type":"WheelZoomTool"},{"attributes":{},"id":"40daa15a-20f2-40cd-9476-0da31e74d0a9","type":"LinearScale"},{"attributes":{"source":{"id":"6190981a-3445-40f6-a623-1334fba2bd5a","type":"ColumnDataSource"}},"id":"4690725c-f5c5-40ba-a040-f82f388b3ccd","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"67388f40-86de-4484-95cd-fab0ac566375","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"a3fec8cb-3732-4d9e-ba14-730faee892bb","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"16ed7d4b-95bb-4a97-a7a8-b6fab2b975b0","type":"Circle"},{"attributes":{"range":null},"id":"a3fec8cb-3732-4d9e-ba14-730faee892bb","type":"Jitter"},{"attributes":{},"id":"707d7225-bcd2-47a6-a8ab-f29f009bf86d","type":"BasicTickFormatter"},{"attributes":{},"id":"d859f5cc-434b-4c1b-9876-dee439578396","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"9b6f149a-7310-46eb-b21e-0cbc3d32d113","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"3975b888-ec3a-49cc-a6cb-a1c88498b15e","type":"Circle"},{"attributes":{"source":{"id":"694f1f9e-8ce9-47a2-b795-09c0ef806ca3","type":"ColumnDataSource"}},"id":"a7640484-e82c-4d21-95b0-c13fce280572","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e276d73-adb5-422d-8ffb-966866bda5de","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"170e3090-44b9-4ad6-a410-0317032344a4","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"0062f8fd-f470-42cc-a888-15a760980201","type":"Jitter"},{"attributes":{"source":{"id":"881d4a83-400c-4512-9d3d-942eba8fce83","type":"ColumnDataSource"}},"id":"5203b8b2-c6f9-4470-9fa1-95f4f6ae3d7c","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"f7dbc6b2-7d12-4fdd-a2bb-f4ba83dedcfa","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"0aca14f0-8e2c-4e9a-8ac7-74d3818542a0","type":"ColumnDataSource"},{"attributes":{},"id":"d843cd7f-2977-4f41-ad87-f513056f0fe7","type":"HelpTool"},{"attributes":{"data_source":{"id":"881d4a83-400c-4512-9d3d-942eba8fce83","type":"ColumnDataSource"},"glyph":{"id":"931c32c7-7dd8-4679-a3c9-7e992291c206","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cdcc70c3-1c4c-481b-b27c-7eb13f1c4257","type":"Circle"},"selection_glyph":null,"view":{"id":"5203b8b2-c6f9-4470-9fa1-95f4f6ae3d7c","type":"CDSView"}},"id":"6c49141c-17d6-4744-a199-9bbd89f93663","type":"GlyphRenderer"},{"attributes":{},"id":"e7037151-a31b-46f4-8150-93f5a867c13d","type":"SaveTool"},{"attributes":{"data_source":{"id":"0aca14f0-8e2c-4e9a-8ac7-74d3818542a0","type":"ColumnDataSource"},"glyph":{"id":"67388f40-86de-4484-95cd-fab0ac566375","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"09053ff0-4349-4e49-b778-c3f07eb3ea75","type":"Circle"},"selection_glyph":null,"view":{"id":"0d96382c-b264-478b-a3a5-a301acdbe245","type":"CDSView"}},"id":"2a2b662d-2d4e-4c0f-9f31-de862c82ea76","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"a0552736-c555-441b-8b2f-eff59451bae4","type":"Circle"},{"attributes":{"formatter":{"id":"bac7b3df-4f76-43ee-a865-bc9860ca5aed","type":"BasicTickFormatter"},"plot":{"id":"fc849af9-00bd-449c-bff6-074a176e089d","subtype":"Figure","type":"Plot"},"ticker":{"id":"41bec0c7-9405-44e7-aada-a861bdd78f3c","type":"BasicTicker"}},"id":"ef541739-4ab3-4673-aafb-7e1a945be154","type":"LinearAxis"},{"attributes":{},"id":"32c3e712-d5c1-4f89-9edd-5962ae81bbbc","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"b04b3aac-72bc-4e4d-bc58-7f2faca8da9f","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"0e9336cd-37e6-432c-b1d1-22bc32d72f17","type":"Circle"},{"attributes":{"data_source":{"id":"694f1f9e-8ce9-47a2-b795-09c0ef806ca3","type":"ColumnDataSource"},"glyph":{"id":"0e9336cd-37e6-432c-b1d1-22bc32d72f17","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e09dab52-ce14-489a-bcf5-38f334331b49","type":"Circle"},"selection_glyph":null,"view":{"id":"a7640484-e82c-4d21-95b0-c13fce280572","type":"CDSView"}},"id":"19900685-aa0c-4a4b-ae4b-e1a6bd04ecf5","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"751ec520-d07e-4c14-9ffe-1a0e03b2d5b8","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"87eb36fb-cb08-4d0a-8c58-717fb8241262","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"77ac79ec-7f08-4c7a-91b4-112f0920b48b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"00a39731-1612-4f3c-8d44-2f24636027eb","type":"ColumnDataSource"},{"attributes":{},"id":"44afa33a-c8d9-44ae-a6f3-e5584b83403d","type":"ResetTool"}],"root_ids":["1d23a6cd-fed1-4b51-b88d-e4d929e11fe7"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"5bcc3d26-9a24-4618-b986-c2fe75e3748d","elementid":"2c18ee00-c959-4698-b84b-6e78b2571c7e","modelid":"1d23a6cd-fed1-4b51-b88d-e4d929e11fe7"}];
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