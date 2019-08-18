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
      };var element = document.getElementById("031118f7-bce6-489f-ad52-76abf13e1a3b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '031118f7-bce6-489f-ad52-76abf13e1a3b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f85acb9e-eb66-435c-b1cb-483ada057a9b":{"roots":{"references":[{"attributes":{"plot":{"id":"6bd0bd1e-5abb-47cf-a23e-5e77550dc03f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4978feaf-4e17-4298-916b-d7c59ef22c14","type":"BasicTicker"}},"id":"fe488e66-4900-47a7-bf34-3caada83681c","type":"Grid"},{"attributes":{},"id":"e7621d27-7282-4e1a-b43a-cc096b50396f","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"6bd0bd1e-5abb-47cf-a23e-5e77550dc03f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1afb76c-d44d-4fb9-bd27-22fb17ca1737","type":"BasicTicker"}},"id":"fbbf6325-ca73-4d54-9be7-34f78417037a","type":"Grid"},{"attributes":{"formatter":{"id":"6e5fc1f6-b5ae-484b-a54c-62b8cfa68959","type":"BasicTickFormatter"},"plot":{"id":"6bd0bd1e-5abb-47cf-a23e-5e77550dc03f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4978feaf-4e17-4298-916b-d7c59ef22c14","type":"BasicTicker"}},"id":"e6377b13-d6e6-456c-bb5b-cfbcc4a8db91","type":"LinearAxis"},{"attributes":{},"id":"87dc754e-089a-4cc8-909b-52b6aa5f8e92","type":"SaveTool"},{"attributes":{"data_source":{"id":"ae1484dc-8dd2-4276-a3e9-50f5a0aa595c","type":"ColumnDataSource"},"glyph":{"id":"4b683a9f-e85f-45c7-b641-9529c78c27b6","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"910c31a9-a095-4aed-85ad-d4ce37694bf3","type":"Line"},"selection_glyph":null,"view":{"id":"7dc4d149-c04b-45fa-8649-56c71eaaa920","type":"CDSView"}},"id":"7f43079c-9df5-4b10-b8a5-f38d5ad219b2","type":"GlyphRenderer"},{"attributes":{"callback":{"id":"754cc85d-29cb-414a-949a-8023c1d35913","type":"CustomJS"},"end":5,"start":-5,"step":0.1,"title":"Offset","value":0},"id":"d073e632-dde6-44dc-b237-3b3d6fed72ac","type":"Slider"},{"attributes":{},"id":"84612352-a682-4a96-819d-20e8574e2e3b","type":"PanTool"},{"attributes":{},"id":"bd7e459d-01e8-4979-9fe4-7b1d3c16960c","type":"LinearScale"},{"attributes":{"args":{"amp":{"id":"c41bb54b-e45a-4a2d-800a-cbc5bf72b272","type":"Slider"},"freq":{"id":"8eff3a49-0a0a-4fe7-b2cd-d030929cce67","type":"Slider"},"offset":{"id":"d073e632-dde6-44dc-b237-3b3d6fed72ac","type":"Slider"},"phase":{"id":"9823ba82-a56a-494a-bc3d-c1a4552b264f","type":"Slider"},"source":{"id":"ae1484dc-8dd2-4276-a3e9-50f5a0aa595c","type":"ColumnDataSource"}},"code":"\\n    var data = source.data;\\n    var A = amp.value;\\n    var k = freq.value;\\n    var phi = phase.value;\\n    var B = offset.value;\\n    x = data[&#x27;x&#x27;]\\n    y = data[&#x27;y&#x27;]\\n    for (i = 0; i &lt; x.length; i++) {\\n        y[i] = B + A*Math.sin(k*x[i]+phi);\\n    }\\n    source.change.emit();\\n"},"id":"754cc85d-29cb-414a-949a-8023c1d35913","type":"CustomJS"},{"attributes":{"children":[{"id":"6bd0bd1e-5abb-47cf-a23e-5e77550dc03f","subtype":"Figure","type":"Plot"},{"id":"f5ede201-efc6-4b37-a56a-ba5dbc332d83","type":"WidgetBox"}]},"id":"3ef950ee-6a2f-4d13-adb3-4da1f3ea1c5a","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"88ccb894-5a7d-40c3-9da4-a0df138e2c89","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"88ccb894-5a7d-40c3-9da4-a0df138e2c89","type":"BoxAnnotation"}},"id":"6a7bc868-ffdc-4d10-98a7-1e171318d5c1","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"c41bb54b-e45a-4a2d-800a-cbc5bf72b272","type":"Slider"},{"id":"8eff3a49-0a0a-4fe7-b2cd-d030929cce67","type":"Slider"},{"id":"9823ba82-a56a-494a-bc3d-c1a4552b264f","type":"Slider"},{"id":"d073e632-dde6-44dc-b237-3b3d6fed72ac","type":"Slider"}]},"id":"f5ede201-efc6-4b37-a56a-ba5dbc332d83","type":"WidgetBox"},{"attributes":{},"id":"6e5fc1f6-b5ae-484b-a54c-62b8cfa68959","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"84612352-a682-4a96-819d-20e8574e2e3b","type":"PanTool"},{"id":"e7621d27-7282-4e1a-b43a-cc096b50396f","type":"WheelZoomTool"},{"id":"6a7bc868-ffdc-4d10-98a7-1e171318d5c1","type":"BoxZoomTool"},{"id":"87dc754e-089a-4cc8-909b-52b6aa5f8e92","type":"SaveTool"},{"id":"1c8fc784-c2b1-4b31-8222-c77174cfdca9","type":"ResetTool"},{"id":"db92306a-14fb-43f8-8e2f-e83d219cad36","type":"HelpTool"}]},"id":"9ee2ad45-131a-4652-a03f-88de245ff4fa","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"bb3f776e-83a7-4819-8197-ca0d0f0343cf","type":"Title"},{"attributes":{},"id":"b1afb76c-d44d-4fb9-bd27-22fb17ca1737","type":"BasicTicker"},{"attributes":{},"id":"db92306a-14fb-43f8-8e2f-e83d219cad36","type":"HelpTool"},{"attributes":{},"id":"14f0cb5c-b9f1-4faf-89b6-10a056befbad","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"754cc85d-29cb-414a-949a-8023c1d35913","type":"CustomJS"},"end":6.4,"start":0,"step":0.1,"title":"Phase","value":0},"id":"9823ba82-a56a-494a-bc3d-c1a4552b264f","type":"Slider"},{"attributes":{"below":[{"id":"e6377b13-d6e6-456c-bb5b-cfbcc4a8db91","type":"LinearAxis"}],"left":[{"id":"3226cbc6-2048-4ddd-a258-031c7a99c2de","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e6377b13-d6e6-456c-bb5b-cfbcc4a8db91","type":"LinearAxis"},{"id":"fe488e66-4900-47a7-bf34-3caada83681c","type":"Grid"},{"id":"3226cbc6-2048-4ddd-a258-031c7a99c2de","type":"LinearAxis"},{"id":"fbbf6325-ca73-4d54-9be7-34f78417037a","type":"Grid"},{"id":"88ccb894-5a7d-40c3-9da4-a0df138e2c89","type":"BoxAnnotation"},{"id":"7f43079c-9df5-4b10-b8a5-f38d5ad219b2","type":"GlyphRenderer"}],"title":{"id":"bb3f776e-83a7-4819-8197-ca0d0f0343cf","type":"Title"},"toolbar":{"id":"9ee2ad45-131a-4652-a03f-88de245ff4fa","type":"Toolbar"},"x_range":{"id":"412d15a5-29bb-4985-a8f1-338fb1829ca9","type":"DataRange1d"},"x_scale":{"id":"462ce66d-9d21-4733-a25d-0210062bc8f4","type":"LinearScale"},"y_range":{"id":"f2e0a86c-cafc-40cc-a58b-877c904af718","type":"Range1d"},"y_scale":{"id":"bd7e459d-01e8-4979-9fe4-7b1d3c16960c","type":"LinearScale"}},"id":"6bd0bd1e-5abb-47cf-a23e-5e77550dc03f","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"4b683a9f-e85f-45c7-b641-9529c78c27b6","type":"Line"},{"attributes":{"callback":null},"id":"412d15a5-29bb-4985-a8f1-338fb1829ca9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"14f0cb5c-b9f1-4faf-89b6-10a056befbad","type":"BasicTickFormatter"},"plot":{"id":"6bd0bd1e-5abb-47cf-a23e-5e77550dc03f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1afb76c-d44d-4fb9-bd27-22fb17ca1737","type":"BasicTicker"}},"id":"3226cbc6-2048-4ddd-a258-031c7a99c2de","type":"LinearAxis"},{"attributes":{"callback":{"id":"754cc85d-29cb-414a-949a-8023c1d35913","type":"CustomJS"},"end":10,"start":0.1,"step":0.1,"title":"Frequency","value":1},"id":"8eff3a49-0a0a-4fe7-b2cd-d030929cce67","type":"Slider"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}}},"id":"ae1484dc-8dd2-4276-a3e9-50f5a0aa595c","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":10,"start":-10},"id":"f2e0a86c-cafc-40cc-a58b-877c904af718","type":"Range1d"},{"attributes":{},"id":"4978feaf-4e17-4298-916b-d7c59ef22c14","type":"BasicTicker"},{"attributes":{"source":{"id":"ae1484dc-8dd2-4276-a3e9-50f5a0aa595c","type":"ColumnDataSource"}},"id":"7dc4d149-c04b-45fa-8649-56c71eaaa920","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"910c31a9-a095-4aed-85ad-d4ce37694bf3","type":"Line"},{"attributes":{"callback":{"id":"754cc85d-29cb-414a-949a-8023c1d35913","type":"CustomJS"},"end":10,"start":0.1,"step":0.1,"title":"Amplitude","value":1},"id":"c41bb54b-e45a-4a2d-800a-cbc5bf72b272","type":"Slider"},{"attributes":{},"id":"1c8fc784-c2b1-4b31-8222-c77174cfdca9","type":"ResetTool"},{"attributes":{},"id":"462ce66d-9d21-4733-a25d-0210062bc8f4","type":"LinearScale"}],"root_ids":["3ef950ee-6a2f-4d13-adb3-4da1f3ea1c5a"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"f85acb9e-eb66-435c-b1cb-483ada057a9b","elementid":"031118f7-bce6-489f-ad52-76abf13e1a3b","modelid":"3ef950ee-6a2f-4d13-adb3-4da1f3ea1c5a"}];
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