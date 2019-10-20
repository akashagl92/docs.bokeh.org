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
      };var element = document.getElementById("d8f59e46-b167-4807-b330-8325c3e1b543");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8f59e46-b167-4807-b330-8325c3e1b543' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f6c913bf-0cd0-4516-aebd-58e53e4c6b8e":{"roots":{"references":[{"attributes":{},"id":"d85fae5b-bf94-4578-b96d-785b8cc315a2","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"aa414040-ae43-4fcd-a32c-b7ed170c0dbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b1e6ca7-5552-47d9-914d-b6c5ed146707","type":"BasicTicker"}},"id":"cd28bb2d-7137-4039-a863-ff822c016927","type":"Grid"},{"attributes":{},"id":"b6084d1b-71bf-425f-9d2d-1d13edbd27f8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"XYHRpGqABkAt5hSKCpsEQMYbGKEYEAZAlw2p3Z7aAEBmUZ9UExYGQDZEA6U/lQNAx7hAKB5PB0Ca3HjlMfkDQLyXIjzWhQBAo7r85lpyAUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"vpLD34fK+z/wqOAn8BL2P/op5sbcHP4/8jjFvnA0+T82UG9HKaL+P2JP+itwlfc/KKJK3Snl+j+fWhT+IHX5PwuaG8rA6Pw/eeIKAV2F9j8=","dtype":"float64","shape":[10]}}},"id":"ea720fe8-000a-407b-8258-d6aa3fe5acc6","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ea720fe8-000a-407b-8258-d6aa3fe5acc6","type":"ColumnDataSource"}},"id":"b5a802a8-52a0-44f5-9ba7-08c49070fb9c","type":"CDSView"},{"attributes":{},"id":"b87f76f3-2493-4f8c-a1d9-69ae6c987330","type":"PanTool"},{"attributes":{},"id":"c8c5e009-1402-499f-9c78-144bd0eae147","type":"ResetTool"},{"attributes":{},"id":"dab04f75-d7f1-47b5-b893-093680493a9d","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"58a3ab82-67b3-421a-9e33-1971acd0924d","type":"BoxAnnotation"}},"id":"1af4cb31-3bb6-4dfa-a013-19ab3f573677","type":"BoxZoomTool"},{"attributes":{},"id":"3032210c-6b4f-495a-acc4-de0ca5895fae","type":"SaveTool"},{"attributes":{},"id":"602cf966-90e9-4fe4-9849-65f5d0efdb0f","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"85a6c7fa-db75-4a3e-98b0-3cc4c9398ba5","type":"LinearAxis"}],"left":[{"id":"fa31cd24-7778-43a0-8791-c698fb0e2c83","type":"LinearAxis"}],"renderers":[{"id":"85a6c7fa-db75-4a3e-98b0-3cc4c9398ba5","type":"LinearAxis"},{"id":"cd28bb2d-7137-4039-a863-ff822c016927","type":"Grid"},{"id":"fa31cd24-7778-43a0-8791-c698fb0e2c83","type":"LinearAxis"},{"id":"3095407a-6a85-4613-8f2a-3a1a8733ae5b","type":"Grid"},{"id":"58a3ab82-67b3-421a-9e33-1971acd0924d","type":"BoxAnnotation"},{"id":"fe3cba18-e53c-4a0c-a30f-07470e8faf5c","type":"GlyphRenderer"},{"id":"3b7a114e-48a9-4b9c-b422-2f0103f91de6","type":"GlyphRenderer"},{"id":"034284e4-eafe-4ca1-9109-fb3e7d724a92","type":"GlyphRenderer"},{"id":"81d52ac7-32e5-4671-81b3-dca49e237655","type":"GlyphRenderer"},{"id":"ae19b071-26f2-408e-b827-4c0181675c83","type":"GlyphRenderer"},{"id":"51ca06ca-f138-45ab-9e78-ea0607c9cd53","type":"GlyphRenderer"},{"id":"f4eec436-980c-4c63-9d5c-dab62fe77073","type":"GlyphRenderer"},{"id":"cde9fc31-5c0d-465f-9fed-5ee0eabbfe8a","type":"GlyphRenderer"},{"id":"6915d850-cecf-40e0-bb84-cc918439fc2a","type":"GlyphRenderer"},{"id":"3539678d-30f4-4f80-a8f3-8801907aec82","type":"GlyphRenderer"},{"id":"2c2cadbb-2f63-49e2-8718-5eef78828906","type":"GlyphRenderer"},{"id":"d86b63f3-bcaa-40b8-9dd5-33762f9a7678","type":"GlyphRenderer"},{"id":"9203c827-6c0b-4c20-8470-b4311fa29ed3","type":"GlyphRenderer"},{"id":"6ee6c9a7-b3a6-4ccb-b8d4-8224da591c2a","type":"GlyphRenderer"},{"id":"12ad49af-7de9-44fc-949b-631811ad749a","type":"GlyphRenderer"},{"id":"6d67bd76-5632-4741-bce6-9361ed3385fe","type":"GlyphRenderer"},{"id":"0b296db9-7394-4f77-b1d3-d98ca34e32e2","type":"GlyphRenderer"},{"id":"43b806b2-35fb-4803-b462-dd2ffb78e4cb","type":"GlyphRenderer"},{"id":"cbad2fb8-89be-4d36-8fe0-b92e871607a6","type":"GlyphRenderer"},{"id":"08ada73b-a64e-404c-84b6-a41e65804afc","type":"GlyphRenderer"},{"id":"7538ff29-0fd2-4dab-917b-83d573c81f3c","type":"GlyphRenderer"},{"id":"face09c9-35f9-44de-801f-8a4708c4b5a0","type":"GlyphRenderer"},{"id":"c0979636-c57d-4a9f-9186-5fd1997814ad","type":"GlyphRenderer"},{"id":"32f3402c-cb63-476c-be4e-83b2145b0232","type":"GlyphRenderer"}],"title":{"id":"f8207caa-1474-484c-8235-1fda17be7f4d","type":"Title"},"toolbar":{"id":"495e5225-b69c-4fa2-beca-209c5752c558","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f38e2149-d739-4785-9400-05454f5024fd","type":"DataRange1d"},"x_scale":{"id":"0e638eaa-3b5e-4da0-99c3-1c1a6a9bebef","type":"LinearScale"},"y_range":{"id":"3ec22a4e-31c7-4f10-aec2-30dbb4b5f5cd","type":"DataRange1d"},"y_scale":{"id":"d85fae5b-bf94-4578-b96d-785b8cc315a2","type":"LinearScale"}},"id":"aa414040-ae43-4fcd-a32c-b7ed170c0dbb","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Bokeh Markers"},"id":"f8207caa-1474-484c-8235-1fda17be7f4d","type":"Title"},{"attributes":{"callback":null},"id":"f38e2149-d739-4785-9400-05454f5024fd","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b87f76f3-2493-4f8c-a1d9-69ae6c987330","type":"PanTool"},{"id":"dab04f75-d7f1-47b5-b893-093680493a9d","type":"WheelZoomTool"},{"id":"1af4cb31-3bb6-4dfa-a013-19ab3f573677","type":"BoxZoomTool"},{"id":"3032210c-6b4f-495a-acc4-de0ca5895fae","type":"SaveTool"},{"id":"c8c5e009-1402-499f-9c78-144bd0eae147","type":"ResetTool"},{"id":"57c3584c-8da2-4229-9bcc-94dafbc89421","type":"HelpTool"}]},"id":"495e5225-b69c-4fa2-beca-209c5752c558","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"22ffdd89-192b-475f-bb74-eddbab8c5fda","type":"Circle"},{"attributes":{},"id":"3b1e6ca7-5552-47d9-914d-b6c5ed146707","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b6084d1b-71bf-425f-9d2d-1d13edbd27f8","type":"BasicTickFormatter"},"plot":{"id":"aa414040-ae43-4fcd-a32c-b7ed170c0dbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ac6f248-f282-4703-b657-b38357dbfc9a","type":"BasicTicker"},"visible":false},"id":"fa31cd24-7778-43a0-8791-c698fb0e2c83","type":"LinearAxis"},{"attributes":{},"id":"7ac6f248-f282-4703-b657-b38357dbfc9a","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"aa414040-ae43-4fcd-a32c-b7ed170c0dbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ac6f248-f282-4703-b657-b38357dbfc9a","type":"BasicTicker"}},"id":"3095407a-6a85-4613-8f2a-3a1a8733ae5b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"84104d84-a0a6-4b96-9c68-d785f789afa5","type":"Circle"},{"attributes":{},"id":"0e638eaa-3b5e-4da0-99c3-1c1a6a9bebef","type":"LinearScale"},{"attributes":{"callback":null},"id":"3ec22a4e-31c7-4f10-aec2-30dbb4b5f5cd","type":"DataRange1d"},{"attributes":{"formatter":{"id":"602cf966-90e9-4fe4-9849-65f5d0efdb0f","type":"BasicTickFormatter"},"plot":{"id":"aa414040-ae43-4fcd-a32c-b7ed170c0dbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b1e6ca7-5552-47d9-914d-b6c5ed146707","type":"BasicTicker"},"visible":false},"id":"85a6c7fa-db75-4a3e-98b0-3cc4c9398ba5","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58a3ab82-67b3-421a-9e33-1971acd0924d","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["asterisk / *"]}},"id":"6772a627-22f4-4863-9402-d6bae663e3bd","type":"ColumnDataSource"},{"attributes":{},"id":"57c3584c-8da2-4229-9bcc-94dafbc89421","type":"HelpTool"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"014f3936-2d30-4fee-82eb-9a7bf1e940a4","type":"Text"},{"attributes":{"data_source":{"id":"00be7dab-6a3a-4ec4-85ed-5c3a87f4cb1c","type":"ColumnDataSource"},"glyph":{"id":"1f651292-7db8-45a3-8c47-ef2074266c92","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a4058b91-285c-4c47-ad65-0be823bca9de","type":"Square"},"selection_glyph":null,"view":{"id":"6bc2ee1e-7932-490d-8a6b-c3ec568ec32e","type":"CDSView"}},"id":"3b7a114e-48a9-4b9c-b422-2f0103f91de6","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"08c03855-df43-4888-9ca5-dfd414097681","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f651292-7db8-45a3-8c47-ef2074266c92","type":"Square"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"356116dd-a72c-4df6-a6b7-28c30bed152c","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"bbf9b0a6-9024-499d-b91d-64e68ce87302","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"39dd0540-abc9-48ea-9a06-f59726443fa6","type":"Text"},{"attributes":{"source":{"id":"00be7dab-6a3a-4ec4-85ed-5c3a87f4cb1c","type":"ColumnDataSource"}},"id":"6bc2ee1e-7932-490d-8a6b-c3ec568ec32e","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"7f3ddcc5-da6e-4562-bed7-b199d370672c","type":"Text"},{"attributes":{"data_source":{"id":"6772a627-22f4-4863-9402-d6bae663e3bd","type":"ColumnDataSource"},"glyph":{"id":"08c03855-df43-4888-9ca5-dfd414097681","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39dd0540-abc9-48ea-9a06-f59726443fa6","type":"Text"},"selection_glyph":null,"view":{"id":"f43074ac-0108-43e1-91b6-563a8dabac53","type":"CDSView"}},"id":"6d67bd76-5632-4741-bce6-9361ed3385fe","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"8N6tuAuCEkBfXiT3kMMRQLJaV4Bt/RNANeLaBMywEkAlNLQdwxYRQDYDaFlv4hFApRGz61gdEkD4whrMsXsRQCCdbHXTKhJADiipxwaHEUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"Sjf9fEZD8j/fzWV3Tjr1Pw56BbmxBvE/g0tKLEjd/j9PchkVaTn7P9qjCu0Q8/s/jiW33H7n/j8CajNj8F73P0wTGwJdy/U/ftE8zzUr8z8=","dtype":"float64","shape":[10]}}},"id":"00be7dab-6a3a-4ec4-85ed-5c3a87f4cb1c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"ImK59IyCGUCCOvbRwtYZQI+JqapvGRhA44+ZUqChGUCcnOOYRJEbQLazRLlx6BhAZiherGh7GkCeQFxDKggYQM6qaBgLyBhA+LEhWhlHGEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"QGrCqsLF+D84Mn5dA0L0P76Sd5Ounfo/NJ1LoDwT8D/gELG9UfvxP8T8x7MME/k/y5n/pzRb+z/+OhDJVL7+P7Kps9F4tvA/7NcAnhIq+D8=","dtype":"float64","shape":[10]}}},"id":"1c9672bb-6dc9-4df4-9c8b-f09303393a2d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6772a627-22f4-4863-9402-d6bae663e3bd","type":"ColumnDataSource"}},"id":"f43074ac-0108-43e1-91b6-563a8dabac53","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4058b91-285c-4c47-ad65-0be823bca9de","type":"Square"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_x / ox"]}},"id":"3945f86c-d053-4acc-a8f8-d585c5ce3690","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"58f453d5-46c3-486b-8360-f6a0136f6923","type":"Asterisk"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_x"]}},"id":"86a57d55-37ec-47f4-aa10-e9906f5bf9c9","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"71f96959-0245-415d-b721-fe16b188abf4","type":"Triangle"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"fd6d05bb-8c86-45fa-8b0a-93cee3b26931","type":"Text"},{"attributes":{"data_source":{"id":"f23adbe7-4dca-4f67-9617-6efc5a43b1ae","type":"ColumnDataSource"},"glyph":{"id":"58f453d5-46c3-486b-8360-f6a0136f6923","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37575253-8802-40c2-aeaa-8fb9656f727c","type":"Asterisk"},"selection_glyph":null,"view":{"id":"169e44c2-a0bf-48ae-83f5-e5b1041c8d8d","type":"CDSView"}},"id":"81d52ac7-32e5-4671-81b3-dca49e237655","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3945f86c-d053-4acc-a8f8-d585c5ce3690","type":"ColumnDataSource"}},"id":"cf1d75bb-36a7-4b99-bc87-1f5bfb9e04db","type":"CDSView"},{"attributes":{"source":{"id":"1c9672bb-6dc9-4df4-9c8b-f09303393a2d","type":"ColumnDataSource"}},"id":"86d251d6-a7a4-49b9-8fed-63813d50dd75","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"076db07a-cabb-47b7-bc7c-7900de15957a","type":"Text"},{"attributes":{"data_source":{"id":"3945f86c-d053-4acc-a8f8-d585c5ce3690","type":"ColumnDataSource"},"glyph":{"id":"014f3936-2d30-4fee-82eb-9a7bf1e940a4","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"356116dd-a72c-4df6-a6b7-28c30bed152c","type":"Text"},"selection_glyph":null,"view":{"id":"cf1d75bb-36a7-4b99-bc87-1f5bfb9e04db","type":"CDSView"}},"id":"0b296db9-7394-4f77-b1d3-d98ca34e32e2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"Am+O6QD/IUDnMaLmxK4hQPOHoiiwuCBAVML705wHIUD+RMpSZOEgQNvghTvAIiBA4bE95dvgIECNegZST40gQDUndEqKdyBAg5/zLzalIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"LFcfJA5G8z966Eh+7S/yP3gXGUIB4vg/3KEgtY6f+T9scj50+8nzP9YdrKSnY/0/0HJzIgGw+D/ZvDRgX930PyvAoeCf1fo/hiO/dLH++T8=","dtype":"float64","shape":[10]}}},"id":"f23adbe7-4dca-4f67-9617-6efc5a43b1ae","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"6316fd8e-c066-4521-ae7f-9f6aaa391c11","type":"Triangle"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["inverted_triangle"]}},"id":"d9e08207-6805-4ce3-bf8c-5013f7cce170","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1c9672bb-6dc9-4df4-9c8b-f09303393a2d","type":"ColumnDataSource"},"glyph":{"id":"71f96959-0245-415d-b721-fe16b188abf4","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6316fd8e-c066-4521-ae7f-9f6aaa391c11","type":"Triangle"},"selection_glyph":null,"view":{"id":"86d251d6-a7a4-49b9-8fed-63813d50dd75","type":"CDSView"}},"id":"034284e4-eafe-4ca1-9109-fb3e7d724a92","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"fe38c601-2a99-4414-a8fd-ba126cc52885","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"32b8e178-ea30-4c0b-b796-0d0c6eeea667","type":"SquareX"},{"attributes":{"source":{"id":"86a57d55-37ec-47f4-aa10-e9906f5bf9c9","type":"ColumnDataSource"}},"id":"e9859e57-4179-43ca-8b86-c95fc40563b2","type":"CDSView"},{"attributes":{"data_source":{"id":"86a57d55-37ec-47f4-aa10-e9906f5bf9c9","type":"ColumnDataSource"},"glyph":{"id":"076db07a-cabb-47b7-bc7c-7900de15957a","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fe38c601-2a99-4414-a8fd-ba126cc52885","type":"Text"},"selection_glyph":null,"view":{"id":"e9859e57-4179-43ca-8b86-c95fc40563b2","type":"CDSView"}},"id":"43b806b2-35fb-4803-b462-dd2ffb78e4cb","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"37575253-8802-40c2-aeaa-8fb9656f727c","type":"Asterisk"},{"attributes":{"data_source":{"id":"d9e08207-6805-4ce3-bf8c-5013f7cce170","type":"ColumnDataSource"},"glyph":{"id":"7f3ddcc5-da6e-4562-bed7-b199d370672c","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"098d47e6-5345-428a-a618-6ff3b17804ed","type":"Text"},"selection_glyph":null,"view":{"id":"ff0a9316-0996-4a8d-a01b-af5024787956","type":"CDSView"}},"id":"cbad2fb8-89be-4d36-8fe0-b92e871607a6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mcii52vYA0DqHi+DHCQGQCBupVYphAZAl0mq9poFAkC5BM+nY9wFQD7yrlJUjgJAr5viVT2RBUB4xyM+g50FQKTBhvvcugFARPt2hBoVBUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"MC3VblOjEEBMjdePeXETQECpI51NWRNAEWb8yXoHEkBNKK0BXMISQFyMl9ymDBBAlEhQOmNvEUAmsLDD6vUQQPNCzQ7h8BJAJ58MWtsyEEA=","dtype":"float64","shape":[10]}}},"id":"5319d8e2-b64c-4b93-bd39-985bbaba4cb9","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f23adbe7-4dca-4f67-9617-6efc5a43b1ae","type":"ColumnDataSource"}},"id":"169e44c2-a0bf-48ae-83f5-e5b1041c8d8d","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["x"]}},"id":"c2417a3a-4d20-4ea2-b34f-2bbf08e92f16","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa8d5e89-55a1-4cf4-9989-45e492ce8891","type":"CircleX"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"200e2a6a-62fd-4c61-9786-3728f8404e47","type":"Text"},{"attributes":{"data_source":{"id":"e461130e-2259-425a-afa7-9fbfccbe0ecb","type":"ColumnDataSource"},"glyph":{"id":"32b8e178-ea30-4c0b-b796-0d0c6eeea667","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a101b192-2126-416f-a6e4-cb25b2942a6d","type":"SquareX"},"selection_glyph":null,"view":{"id":"1889ffef-ca29-46ce-8ecd-d416258165a7","type":"CDSView"}},"id":"51ca06ca-f138-45ab-9e78-ea0607c9cd53","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d9e08207-6805-4ce3-bf8c-5013f7cce170","type":"ColumnDataSource"}},"id":"ff0a9316-0996-4a8d-a01b-af5024787956","type":"CDSView"},{"attributes":{"source":{"id":"5319d8e2-b64c-4b93-bd39-985bbaba4cb9","type":"ColumnDataSource"}},"id":"296565e7-d309-47ee-bc07-9bb1f32455be","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"33e88d46-9c5b-4fde-9ba4-ba91378869aa","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"p+tqTRV7EUDTJTYYZj8TQKNTaKUG0RJAa7DNK6U6E0AMFz3HnvcRQMKlBdNkcxBAJmWwHPhSEUC8ddWtnKsTQPHLY66I+hFANk+9lI0wEkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"zh5aubMVEkCT5NQ0oegTQI5aHKJIRRFAi9y/4ajnEkDm2Hfgr3QSQE+6bGXTGBBA8Ics8lQREUAg89uexUYQQBg8zDEDzRJAWrgO1BGoEkA=","dtype":"float64","shape":[10]}}},"id":"e461130e-2259-425a-afa7-9fbfccbe0ecb","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"098d47e6-5345-428a-a618-6ff3b17804ed","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"014cdc8c-95ae-4ba6-bc77-c83040c87019","type":"CircleX"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_cross / o+"]}},"id":"b2fb690e-de13-4a88-9bfd-111fdaa025a1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5319d8e2-b64c-4b93-bd39-985bbaba4cb9","type":"ColumnDataSource"},"glyph":{"id":"aa8d5e89-55a1-4cf4-9989-45e492ce8891","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"014cdc8c-95ae-4ba6-bc77-c83040c87019","type":"CircleX"},"selection_glyph":null,"view":{"id":"296565e7-d309-47ee-bc07-9bb1f32455be","type":"CDSView"}},"id":"ae19b071-26f2-408e-b827-4c0181675c83","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c2417a3a-4d20-4ea2-b34f-2bbf08e92f16","type":"ColumnDataSource"},"glyph":{"id":"200e2a6a-62fd-4c61-9786-3728f8404e47","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a6b77a18-cdfe-40a9-95ef-853e8dc5b065","type":"Text"},"selection_glyph":null,"view":{"id":"874bbaf0-0c31-483b-aaab-03ff8ad5235b","type":"CDSView"}},"id":"08ada73b-a64e-404c-84b6-a41e65804afc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4ac75d1-9d92-44ec-871b-17bf108b8b8e","type":"X"},{"attributes":{"source":{"id":"c2417a3a-4d20-4ea2-b34f-2bbf08e92f16","type":"ColumnDataSource"}},"id":"874bbaf0-0c31-483b-aaab-03ff8ad5235b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a101b192-2126-416f-a6e4-cb25b2942a6d","type":"SquareX"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"a6b77a18-cdfe-40a9-95ef-853e8dc5b065","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"5drgarrTG0Dvz3zqwZwYQCbU2e0H/xtAOGlwl3tdGkBQ0K09MaUaQD66gQxgghlA3t9lUED0GUB4XI7yzYEaQPBc45aokBpAT0wW/5OOGkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"mP0eZ1zuE0B2dedmoQcSQLfAG2/EIBJA7Nt8XBUJEEDRUil1OmcQQJDR19P1NhNAALrlCuGZEUD4LvgcuqsSQHC31//4ghBAqZmraEDyE0A=","dtype":"float64","shape":[10]}}},"id":"681bd78f-09f2-4306-8de2-2e726c882ef3","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"80de7541-473f-496e-aca2-df06b7090091","type":"Text"},{"attributes":{"source":{"id":"e461130e-2259-425a-afa7-9fbfccbe0ecb","type":"ColumnDataSource"}},"id":"1889ffef-ca29-46ce-8ecd-d416258165a7","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_cross"]}},"id":"d5109616-4923-4a5a-9ad8-53110f940cd2","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f3ea46a-6b64-4265-977a-8cc8bc191466","type":"InvertedTriangle"},{"attributes":{"data_source":{"id":"fe42fd6f-1aea-4ad4-bec4-029413fb7463","type":"ColumnDataSource"},"glyph":{"id":"d4ac75d1-9d92-44ec-871b-17bf108b8b8e","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"08a597cd-924a-4fc7-93c6-c1112b3d510e","type":"X"},"selection_glyph":null,"view":{"id":"c7173861-4683-4348-af0c-04bfa5263e9d","type":"CDSView"}},"id":"cde9fc31-5c0d-465f-9fed-5ee0eabbfe8a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b2fb690e-de13-4a88-9bfd-111fdaa025a1","type":"ColumnDataSource"}},"id":"e87de64a-835a-4842-a108-0e8674687035","type":"CDSView"},{"attributes":{"source":{"id":"681bd78f-09f2-4306-8de2-2e726c882ef3","type":"ColumnDataSource"}},"id":"25289d65-7788-4113-a335-4544378418a4","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"2d677998-eb88-42fa-9c28-b7b787401905","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"0Bj+RMVHIUCzVt59dzUhQDZhVx9vDyBA2dKTtmcLIUCG1b0L1GwgQC8oNw7g+CFA8Zv6sMXKIUDwHt/3ABkhQO9OUk5QQiBAgCMK1jM6IEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"xSKQpVvxEEA0WH+KKksQQEj5ihoDGRFAbSV7Uf+1EUBrwBaoH7ASQE6Gtdcj8BFAT0a8dXnzEUCPw3Jl+ycSQEm0sNBDMxBA/3lirJLLEUA=","dtype":"float64","shape":[10]}}},"id":"fe42fd6f-1aea-4ad4-bec4-029413fb7463","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b2fb690e-de13-4a88-9bfd-111fdaa025a1","type":"ColumnDataSource"},"glyph":{"id":"fd6d05bb-8c86-45fa-8b0a-93cee3b26931","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33e88d46-9c5b-4fde-9ba4-ba91378869aa","type":"Text"},"selection_glyph":null,"view":{"id":"e87de64a-835a-4842-a108-0e8674687035","type":"CDSView"}},"id":"7538ff29-0fd2-4dab-917b-83d573c81f3c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"59265af7-9413-4629-9993-be614c33e42f","type":"InvertedTriangle"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["diamond"]}},"id":"525dba64-8057-44c8-90a0-9c7aea5885e9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"681bd78f-09f2-4306-8de2-2e726c882ef3","type":"ColumnDataSource"},"glyph":{"id":"1f3ea46a-6b64-4265-977a-8cc8bc191466","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59265af7-9413-4629-9993-be614c33e42f","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"25289d65-7788-4113-a335-4544378418a4","type":"CDSView"}},"id":"f4eec436-980c-4c63-9d5c-dab62fe77073","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"af65bea0-ba68-474a-a315-62eec770b369","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"165097b9-bc28-4383-9275-e873482c3564","type":"SquareCross"},{"attributes":{"source":{"id":"d5109616-4923-4a5a-9ad8-53110f940cd2","type":"ColumnDataSource"}},"id":"5ee5de40-14bf-43eb-b00c-4de52b4416b7","type":"CDSView"},{"attributes":{"data_source":{"id":"d5109616-4923-4a5a-9ad8-53110f940cd2","type":"ColumnDataSource"},"glyph":{"id":"2d677998-eb88-42fa-9c28-b7b787401905","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"af65bea0-ba68-474a-a315-62eec770b369","type":"Text"},"selection_glyph":null,"view":{"id":"5ee5de40-14bf-43eb-b00c-4de52b4416b7","type":"CDSView"}},"id":"face09c9-35f9-44de-801f-8a4708c4b5a0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"08a597cd-924a-4fc7-93c6-c1112b3d510e","type":"X"},{"attributes":{"data_source":{"id":"525dba64-8057-44c8-90a0-9c7aea5885e9","type":"ColumnDataSource"},"glyph":{"id":"80de7541-473f-496e-aca2-df06b7090091","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0ea8abba-06b2-46b2-9bd9-4db456d8f62e","type":"Text"},"selection_glyph":null,"view":{"id":"26f4e67c-479d-4f63-a1a6-bf199fc06ef0","type":"CDSView"}},"id":"c0979636-c57d-4a9f-9186-5fd1997814ad","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"A9NSmhVVBUCF4NA3d6gGQEqDLypIbwRANiGyCEdOBkAgWKAHB48CQJKxS6XPygNAknkZBM/FBUDKP8Il3dYDQPVhdfUmSgdAytH58vCcBkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"Daco66xeHUAIbyBvuxcdQCa9DmQYdhxA1YPKY4pvHkBodPs0CvoeQF6EkwfPDh1ApD9yAc46H0C4/nFmo2YdQCqHPkd19B1ASWgQ2V41HUA=","dtype":"float64","shape":[10]}}},"id":"5778fe28-ddc9-405e-8b90-456a4b77ccb5","type":"ColumnDataSource"},{"attributes":{"source":{"id":"fe42fd6f-1aea-4ad4-bec4-029413fb7463","type":"ColumnDataSource"}},"id":"c7173861-4683-4348-af0c-04bfa5263e9d","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["cross / +"]}},"id":"65580602-6e2e-4d53-830a-9e5910971e4d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ecf21d7-f9bc-438b-bec8-70c1f2d54da2","type":"CircleCross"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"7a145ee7-f4f3-4eb3-a9a7-652908980352","type":"Text"},{"attributes":{"data_source":{"id":"890552cd-806c-42a9-a575-5aa70663f0f6","type":"ColumnDataSource"},"glyph":{"id":"165097b9-bc28-4383-9275-e873482c3564","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5d11b0fa-1ef0-476e-90c7-bdb455b95fe2","type":"SquareCross"},"selection_glyph":null,"view":{"id":"3528ea44-3e12-4f28-9f7a-a2c899750e77","type":"CDSView"}},"id":"3539678d-30f4-4f80-a8f3-8801907aec82","type":"GlyphRenderer"},{"attributes":{"source":{"id":"525dba64-8057-44c8-90a0-9c7aea5885e9","type":"ColumnDataSource"}},"id":"26f4e67c-479d-4f63-a1a6-bf199fc06ef0","type":"CDSView"},{"attributes":{"source":{"id":"5778fe28-ddc9-405e-8b90-456a4b77ccb5","type":"ColumnDataSource"}},"id":"eac6949b-05aa-4d8b-ace2-661a05c70aca","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"FpFK00ZJE0BFhkhIBBcRQLF52rkr8BFAP+KS5pAsEECcviuDgVkSQAbWpR57XxJAk+J0aYYaEUB0kA4oJ00SQBpW6ABTExFApYdtKcrdEkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"FgBGvUWIHEA0/y/O5OMfQEvkbID7rR1AWAWpR/aPH0ArWCweC8ceQKJNkhEtqB9AR8yWZkNCH0AsltEZbK8cQMAz5U8Yzx9AQS+ov8F9HUA=","dtype":"float64","shape":[10]}}},"id":"890552cd-806c-42a9-a575-5aa70663f0f6","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"0ea8abba-06b2-46b2-9bd9-4db456d8f62e","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bb09d37-fb19-4b0a-96c6-bfeeecb1fcbe","type":"CircleCross"},{"attributes":{"data_source":{"id":"5778fe28-ddc9-405e-8b90-456a4b77ccb5","type":"ColumnDataSource"},"glyph":{"id":"2ecf21d7-f9bc-438b-bec8-70c1f2d54da2","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6bb09d37-fb19-4b0a-96c6-bfeeecb1fcbe","type":"CircleCross"},"selection_glyph":null,"view":{"id":"eac6949b-05aa-4d8b-ace2-661a05c70aca","type":"CDSView"}},"id":"6915d850-cecf-40e0-bb84-cc918439fc2a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"65580602-6e2e-4d53-830a-9e5910971e4d","type":"ColumnDataSource"},"glyph":{"id":"7a145ee7-f4f3-4eb3-a9a7-652908980352","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc8ea592-cb72-4561-bd35-88e70d5ad6ce","type":"Text"},"selection_glyph":null,"view":{"id":"91343cd3-1c73-4ffe-9421-859c4027dd8d","type":"CDSView"}},"id":"32f3402c-cb63-476c-be4e-83b2145b0232","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b33fd7b-5fd0-4eaf-970f-7596f52910e5","type":"Cross"},{"attributes":{"source":{"id":"65580602-6e2e-4d53-830a-9e5910971e4d","type":"ColumnDataSource"}},"id":"91343cd3-1c73-4ffe-9421-859c4027dd8d","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d11b0fa-1ef0-476e-90c7-bdb455b95fe2","type":"SquareCross"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"fc8ea592-cb72-4561-bd35-88e70d5ad6ce","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"fp/ah8ymGkAX4BA0UuwYQGr6CNhbfBpAhGs367KuG0BWJ41BoV4YQKSwhEeh/BpAiOEa3r+PGUD229/gCdQbQGzWsNvgphpAYmgW6H/GGUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"mJrq8wiqHECUZpO78r4eQJzfrfJtsx5ACg7wC039HEB63BIhxQQfQFRtSWgnjRxAn4b54dYVHUDzMTolXMcdQFz+n9DTcx5AGFt2u6SvH0A=","dtype":"float64","shape":[10]}}},"id":"3ca5b3f8-3ecb-4774-a023-00deec106312","type":"ColumnDataSource"},{"attributes":{"source":{"id":"890552cd-806c-42a9-a575-5aa70663f0f6","type":"ColumnDataSource"}},"id":"3528ea44-3e12-4f28-9f7a-a2c899750e77","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"621cf9c3-37db-4c68-9350-d992d7ff10e0","type":"Diamond"},{"attributes":{"data_source":{"id":"813db709-d749-46da-b061-fb4e54311fe4","type":"ColumnDataSource"},"glyph":{"id":"0b33fd7b-5fd0-4eaf-970f-7596f52910e5","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"194e5e59-28d9-4a25-9e7c-5770d99d8183","type":"Cross"},"selection_glyph":null,"view":{"id":"4658cec4-389b-4ea3-842a-e8ec8540a624","type":"CDSView"}},"id":"d86b63f3-bcaa-40b8-9dd5-33762f9a7678","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3ca5b3f8-3ecb-4774-a023-00deec106312","type":"ColumnDataSource"}},"id":"dddaaebe-7558-4b48-8d61-3607c592c64b","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"hLV3JXjrIUAjDGFQ1NIgQE/TiEt35iBAMk2SCz80IEDwSCIR+MQgQLpgmvEL2CFAlG2fVstnIUC8ZvXuRQ4hQD1Tugq9AiFA8eC9lPHPIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"6RFwuab8HED3lKu74g4fQLZuA07LrR9Ass3AQMn6HEBrbGuEs2cfQJ3Y8p16Ph1AfyI0Tlq/HkC/GsLx+zEdQDxhdRVIuB5AZD79+WccHkA=","dtype":"float64","shape":[10]}}},"id":"813db709-d749-46da-b061-fb4e54311fe4","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"6db65d3c-6026-4ff1-9a36-532affba917e","type":"Diamond"},{"attributes":{"data_source":{"id":"3ca5b3f8-3ecb-4774-a023-00deec106312","type":"ColumnDataSource"},"glyph":{"id":"621cf9c3-37db-4c68-9350-d992d7ff10e0","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6db65d3c-6026-4ff1-9a36-532affba917e","type":"Diamond"},"selection_glyph":null,"view":{"id":"dddaaebe-7558-4b48-8d61-3607c592c64b","type":"CDSView"}},"id":"2c2cadbb-2f63-49e2-8718-5eef78828906","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c8b83271-81eb-407f-ab6f-d85de8d14a69","type":"ColumnDataSource"}},"id":"852fc0a5-ff5b-401e-98e2-cb58517761a9","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"194e5e59-28d9-4a25-9e7c-5770d99d8183","type":"Cross"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle / o"]}},"id":"c706c9d6-c387-4aa6-8e21-15af7cc1e497","type":"ColumnDataSource"},{"attributes":{"source":{"id":"813db709-d749-46da-b061-fb4e54311fe4","type":"ColumnDataSource"}},"id":"4658cec4-389b-4ea3-842a-e8ec8540a624","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"090fac18-f5dd-42b9-91c2-c26b2cf181e3","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square"]}},"id":"b47ead12-cd6e-44a6-8fb7-0cb89e0f758c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ea720fe8-000a-407b-8258-d6aa3fe5acc6","type":"ColumnDataSource"},"glyph":{"id":"22ffdd89-192b-475f-bb74-eddbab8c5fda","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"84104d84-a0a6-4b96-9c68-d785f789afa5","type":"Circle"},"selection_glyph":null,"view":{"id":"b5a802a8-52a0-44f5-9ba7-08c49070fb9c","type":"CDSView"}},"id":"fe3cba18-e53c-4a0c-a30f-07470e8faf5c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c706c9d6-c387-4aa6-8e21-15af7cc1e497","type":"ColumnDataSource"},"glyph":{"id":"090fac18-f5dd-42b9-91c2-c26b2cf181e3","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d21d17c2-7dea-4603-a088-4bcbe0aa83b3","type":"Text"},"selection_glyph":null,"view":{"id":"33e00c68-d528-4877-83d0-cb6df7949c35","type":"CDSView"}},"id":"9203c827-6c0b-4c20-8470-b4311fa29ed3","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c706c9d6-c387-4aa6-8e21-15af7cc1e497","type":"ColumnDataSource"}},"id":"33e00c68-d528-4877-83d0-cb6df7949c35","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"d21d17c2-7dea-4603-a088-4bcbe0aa83b3","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"6ff0059d-ebbc-4dc1-9fb3-7bc6f83cce3d","type":"Text"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["triangle"]}},"id":"c8b83271-81eb-407f-ab6f-d85de8d14a69","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"36c47e09-9e75-4677-96ea-08821a121bd1","type":"Text"},{"attributes":{"source":{"id":"b47ead12-cd6e-44a6-8fb7-0cb89e0f758c","type":"ColumnDataSource"}},"id":"34f47f1a-8000-48f9-801c-cd076c9faf91","type":"CDSView"},{"attributes":{"data_source":{"id":"b47ead12-cd6e-44a6-8fb7-0cb89e0f758c","type":"ColumnDataSource"},"glyph":{"id":"6ff0059d-ebbc-4dc1-9fb3-7bc6f83cce3d","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36c47e09-9e75-4677-96ea-08821a121bd1","type":"Text"},"selection_glyph":null,"view":{"id":"34f47f1a-8000-48f9-801c-cd076c9faf91","type":"CDSView"}},"id":"6ee6c9a7-b3a6-4ccb-b8d4-8224da591c2a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c8b83271-81eb-407f-ab6f-d85de8d14a69","type":"ColumnDataSource"},"glyph":{"id":"bbf9b0a6-9024-499d-b91d-64e68ce87302","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bc5677b1-e396-42f3-99c8-b22bc3718e49","type":"Text"},"selection_glyph":null,"view":{"id":"852fc0a5-ff5b-401e-98e2-cb58517761a9","type":"CDSView"}},"id":"12ad49af-7de9-44fc-949b-631811ad749a","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"bc5677b1-e396-42f3-99c8-b22bc3718e49","type":"Text"}],"root_ids":["aa414040-ae43-4fcd-a32c-b7ed170c0dbb"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"f6c913bf-0cd0-4516-aebd-58e53e4c6b8e","elementid":"d8f59e46-b167-4807-b330-8325c3e1b543","modelid":"aa414040-ae43-4fcd-a32c-b7ed170c0dbb"}];
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