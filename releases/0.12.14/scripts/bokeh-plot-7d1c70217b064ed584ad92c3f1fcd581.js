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
      };var element = document.getElementById("0aaed771-b09b-4d9d-97d6-bb8d9243eb16");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0aaed771-b09b-4d9d-97d6-bb8d9243eb16' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bd3e5d60-a7f8-4332-8c2c-dff710d09093":{"roots":{"references":[{"attributes":{},"id":"de8b3dc9-9d2e-4d7e-8771-03bd9470657f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4d18eb39-4c51-46d4-8836-80953ced9997","type":"BoxAnnotation"},{"attributes":{},"id":"6a8837ac-63d9-43b0-8449-48f6ef0415d1","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"224898e0-edc8-472d-9852-e3490404c873","subtype":"Figure","type":"Plot"},"ticker":{"id":"de8b3dc9-9d2e-4d7e-8771-03bd9470657f","type":"BasicTicker"}},"id":"d89b7bf8-6429-4454-b1b3-255d5e7092d4","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"e76470fb-3476-45c6-b145-d68f65962b84","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"4d18eb39-4c51-46d4-8836-80953ced9997","type":"BoxAnnotation"}},"id":"408a5767-5ad4-4673-a448-fbe136064978","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"e76470fb-3476-45c6-b145-d68f65962b84","type":"PolyAnnotation"}},"id":"2c10f211-6d33-4882-997b-6e0933431a69","type":"LassoSelectTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"f7fccbe7-b835-40ce-88c4-371c7ba70f72","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"2aade7ec-eb13-4be6-ab56-552f22ec045b","type":"LinearAxis"}],"left":[{"id":"b2f43107-7177-4a97-ae8d-cee6ed7a9c50","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2aade7ec-eb13-4be6-ab56-552f22ec045b","type":"LinearAxis"},{"id":"7bbfa276-c73b-4137-823e-e50d4e2013be","type":"Grid"},{"id":"b2f43107-7177-4a97-ae8d-cee6ed7a9c50","type":"LinearAxis"},{"id":"d89b7bf8-6429-4454-b1b3-255d5e7092d4","type":"Grid"},{"id":"0d0a29e1-30f2-4a3c-b947-d2d6996fb0c9","type":"BoxAnnotation"},{"id":"4d18eb39-4c51-46d4-8836-80953ced9997","type":"BoxAnnotation"},{"id":"e76470fb-3476-45c6-b145-d68f65962b84","type":"PolyAnnotation"},{"id":"0ecff9fe-61c6-4e47-aa7e-c67a7aac526c","type":"GlyphRenderer"}],"title":{"id":"46a9a27b-8cca-4b0c-8d52-eadbd267b01a","type":"Title"},"toolbar":{"id":"d7a80831-4c32-4597-b047-ce24adb5f92f","type":"Toolbar"},"x_range":{"id":"23c5e026-5598-4838-b03c-26f88cf52846","type":"DataRange1d"},"x_scale":{"id":"8d561cf2-04ba-422a-9a6c-a1fd37b25dc4","type":"LinearScale"},"y_range":{"id":"540408c8-838a-499b-aec7-09d763c75334","type":"DataRange1d"},"y_scale":{"id":"cfafb0ae-3861-43d5-9b94-0dd36d17c24b","type":"LinearScale"}},"id":"224898e0-edc8-472d-9852-e3490404c873","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"0d0a29e1-30f2-4a3c-b947-d2d6996fb0c9","type":"BoxAnnotation"},"renderers":[{"id":"0ecff9fe-61c6-4e47-aa7e-c67a7aac526c","type":"GlyphRenderer"}]},"id":"16a996f8-2ba5-4b94-ad54-26350f5bcb6f","type":"BoxSelectTool"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"46a9a27b-8cca-4b0c-8d52-eadbd267b01a","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0d0a29e1-30f2-4a3c-b947-d2d6996fb0c9","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"23c5e026-5598-4838-b03c-26f88cf52846","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"16a996f8-2ba5-4b94-ad54-26350f5bcb6f","type":"BoxSelectTool"},{"id":"408a5767-5ad4-4673-a448-fbe136064978","type":"BoxZoomTool"},{"id":"2c10f211-6d33-4882-997b-6e0933431a69","type":"LassoSelectTool"},{"id":"6a8837ac-63d9-43b0-8449-48f6ef0415d1","type":"ResetTool"}]},"id":"d7a80831-4c32-4597-b047-ce24adb5f92f","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8c18449-c938-4510-a4b5-cdf18b2433d0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"f435d072-177d-4e8b-b8f6-224e633cfc28","type":"Circle"},{"attributes":{},"id":"8d561cf2-04ba-422a-9a6c-a1fd37b25dc4","type":"LinearScale"},{"attributes":{"data_source":{"id":"f7fccbe7-b835-40ce-88c4-371c7ba70f72","type":"ColumnDataSource"},"glyph":{"id":"a8c18449-c938-4510-a4b5-cdf18b2433d0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f435d072-177d-4e8b-b8f6-224e633cfc28","type":"Circle"},"selection_glyph":null,"view":{"id":"4649eddc-6a1d-49f0-a320-2567bf4567e1","type":"CDSView"}},"id":"0ecff9fe-61c6-4e47-aa7e-c67a7aac526c","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"540408c8-838a-499b-aec7-09d763c75334","type":"DataRange1d"},{"attributes":{},"id":"cfafb0ae-3861-43d5-9b94-0dd36d17c24b","type":"LinearScale"},{"attributes":{"source":{"id":"f7fccbe7-b835-40ce-88c4-371c7ba70f72","type":"ColumnDataSource"}},"id":"4649eddc-6a1d-49f0-a320-2567bf4567e1","type":"CDSView"},{"attributes":{"plot":{"id":"224898e0-edc8-472d-9852-e3490404c873","subtype":"Figure","type":"Plot"},"ticker":{"id":"46ebe051-873d-4e21-81f9-9fa039ddb94c","type":"BasicTicker"}},"id":"7bbfa276-c73b-4137-823e-e50d4e2013be","type":"Grid"},{"attributes":{"formatter":{"id":"07d15fa8-816f-46cb-a915-627ededf4714","type":"BasicTickFormatter"},"plot":{"id":"224898e0-edc8-472d-9852-e3490404c873","subtype":"Figure","type":"Plot"},"ticker":{"id":"46ebe051-873d-4e21-81f9-9fa039ddb94c","type":"BasicTicker"}},"id":"2aade7ec-eb13-4be6-ab56-552f22ec045b","type":"LinearAxis"},{"attributes":{},"id":"07d15fa8-816f-46cb-a915-627ededf4714","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6e1b5465-872c-47f3-9e2c-ccbb01e0ba26","type":"BasicTickFormatter"},"plot":{"id":"224898e0-edc8-472d-9852-e3490404c873","subtype":"Figure","type":"Plot"},"ticker":{"id":"de8b3dc9-9d2e-4d7e-8771-03bd9470657f","type":"BasicTicker"}},"id":"b2f43107-7177-4a97-ae8d-cee6ed7a9c50","type":"LinearAxis"},{"attributes":{},"id":"6e1b5465-872c-47f3-9e2c-ccbb01e0ba26","type":"BasicTickFormatter"},{"attributes":{},"id":"46ebe051-873d-4e21-81f9-9fa039ddb94c","type":"BasicTicker"}],"root_ids":["224898e0-edc8-472d-9852-e3490404c873"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"bd3e5d60-a7f8-4332-8c2c-dff710d09093","elementid":"0aaed771-b09b-4d9d-97d6-bb8d9243eb16","modelid":"224898e0-edc8-472d-9852-e3490404c873"}];
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