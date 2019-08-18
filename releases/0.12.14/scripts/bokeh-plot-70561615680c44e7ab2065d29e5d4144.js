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
      };var element = document.getElementById("0826624c-200a-4838-beec-c59213cad0b1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0826624c-200a-4838-beec-c59213cad0b1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c7ca79c2-e1d0-440a-9485-6840260b04ec":{"roots":{"references":[{"attributes":{"data_source":{"id":"25650090-1cea-4d93-bcfe-529722d0b1fe","type":"ColumnDataSource"},"glyph":{"id":"b51d99e8-c9fa-479a-bc67-52bad6887be0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a3a9999f-4de3-40a4-b9ab-be76d92055c1","type":"Circle"},"selection_glyph":null,"view":{"id":"95ec0473-7116-4757-80d3-ad56ee7bc221","type":"CDSView"}},"id":"4167f6e9-cd2d-40db-8ee2-39432dddc52f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa96661c-b5bf-4e8e-9c4e-c6086405a1b0","type":"Circle"},{"attributes":{"source":{"id":"4dd4b45a-cd5f-41c5-9466-c07fd54ddcd1","type":"ColumnDataSource"}},"id":"fe2d7e01-b54d-4f28-b0aa-e8d3d1f302de","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"09131c65-81b0-453d-a822-a6216a64de0a","type":"Circle"},{"attributes":{"source":{"id":"796ee041-ee76-406b-9dc4-06189714babd","type":"ColumnDataSource"}},"id":"7ff3d46d-fdf9-4af0-bb55-b10bf69c6b31","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"212d84ec-e299-4ff2-af66-9097f66e764f","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b51d99e8-c9fa-479a-bc67-52bad6887be0","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGB"]}},"id":"beaf40d1-fa9f-4e1a-8e7c-939c9ae099be","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"627d4d1e-fd8f-4259-94de-2bc5c226a040","type":"Circle"},{"attributes":{"data_source":{"id":"beaf40d1-fa9f-4e1a-8e7c-939c9ae099be","type":"ColumnDataSource"},"glyph":{"id":"4a75a0b6-d4fa-4fa7-b0e4-7c16a844863a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"627d4d1e-fd8f-4259-94de-2bc5c226a040","type":"Circle"},"selection_glyph":null,"view":{"id":"b1e2b60c-3aeb-49a5-90b3-37ac777fa7da","type":"CDSView"}},"id":"90583ae6-f583-40f2-9df1-b218a52eadca","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGB"]}},"id":"cf4c4e58-78b7-4743-8e81-51901bcce904","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f6769a2d-36f0-4deb-8a54-a4811630fe4c","type":"ColumnDataSource"}},"id":"1cb950be-1328-4831-807f-6379f311e56f","type":"CDSView"},{"attributes":{"data_source":{"id":"a8523b6b-61ef-4924-b00b-e5df61c13942","type":"ColumnDataSource"},"glyph":{"id":"c8d68d4b-a336-4440-a0c4-62a5aa702220","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be3e86e1-cfc7-464e-badc-8ca835c6c537","type":"Circle"},"selection_glyph":null,"view":{"id":"4e295627-53c4-4ed4-a137-a5bcefcacba0","type":"CDSView"}},"id":"ccb6dd46-f935-4d7f-95cb-c20dc77311b0","type":"GlyphRenderer"},{"attributes":{},"id":"622290d9-28fa-46b5-b4af-951bb57be260","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"5c4d7526-636c-4b3d-9b94-65767cae1fa5","type":"ColumnDataSource"}},"id":"ec74517e-54b1-4c2b-be00-ca787b4982a1","type":"CDSView"},{"attributes":{},"id":"ca6e00d5-abb5-4d2d-bbab-7ffcbb9a66ca","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha"]}},"id":"25650090-1cea-4d93-bcfe-529722d0b1fe","type":"ColumnDataSource"},{"attributes":{},"id":"64fd6cf4-833e-4542-bf4b-7fa0640c0193","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"f6769a2d-36f0-4deb-8a54-a4811630fe4c","type":"ColumnDataSource"},"glyph":{"id":"2cced68c-3cda-423d-bb3e-167221984b97","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0135faf3-9156-4f80-9122-b5db0baa2c98","type":"Circle"},"selection_glyph":null,"view":{"id":"1cb950be-1328-4831-807f-6379f311e56f","type":"CDSView"}},"id":"e0b23eb8-6482-4f43-a5a1-f3db23156811","type":"GlyphRenderer"},{"attributes":{"source":{"id":"25650090-1cea-4d93-bcfe-529722d0b1fe","type":"ColumnDataSource"}},"id":"95ec0473-7116-4757-80d3-ad56ee7bc221","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a75a0b6-d4fa-4fa7-b0e4-7c16a844863a","type":"Circle"},{"attributes":{"source":{"id":"a8523b6b-61ef-4924-b00b-e5df61c13942","type":"ColumnDataSource"}},"id":"4e295627-53c4-4ed4-a137-a5bcefcacba0","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d5f49d07-7a78-4251-9df5-e844668551c6","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0135faf3-9156-4f80-9122-b5db0baa2c98","type":"Circle"},{"attributes":{"below":[{"id":"9f7f0158-baeb-4c9f-a486-d129efb5486e","type":"CategoricalAxis"}],"left":[{"id":"93603d4f-5f45-43a7-945d-64c65574cc07","type":"CategoricalAxis"}],"renderers":[{"id":"9f7f0158-baeb-4c9f-a486-d129efb5486e","type":"CategoricalAxis"},{"id":"a3a456fe-eae4-44cf-bcfd-22f618c217d2","type":"Grid"},{"id":"93603d4f-5f45-43a7-945d-64c65574cc07","type":"CategoricalAxis"},{"id":"9e55e24a-7246-46b5-8086-832d6524a386","type":"Grid"},{"id":"9546ef7c-0cf7-49ca-96cf-92cfa6997b41","type":"BoxAnnotation"},{"id":"ccb6dd46-f935-4d7f-95cb-c20dc77311b0","type":"GlyphRenderer"},{"id":"59fb1a65-c64f-43d1-ab11-bb7d92d9b88a","type":"GlyphRenderer"},{"id":"e0ad9e50-b071-4607-90dc-ddfb2455327d","type":"GlyphRenderer"},{"id":"2f4ace11-b3f7-44b7-8623-e34a56cbe826","type":"GlyphRenderer"},{"id":"2e84c743-7158-4a51-be85-7585a681df13","type":"GlyphRenderer"},{"id":"60fdb229-79b1-4332-83ec-bf4cecbdd485","type":"GlyphRenderer"},{"id":"e1b022ce-66b0-4351-a742-44714c49b6b9","type":"GlyphRenderer"},{"id":"30da5771-3aa7-409a-8f3d-a9d55fe0bc1c","type":"GlyphRenderer"},{"id":"ea25b45e-6c99-4b50-9bbe-c9a6bb2cafd4","type":"GlyphRenderer"},{"id":"ed0e5eb7-6848-497e-8310-e2a5577777d7","type":"GlyphRenderer"},{"id":"190f4902-d3ab-4bf4-a1c8-4e8140834084","type":"GlyphRenderer"},{"id":"75a8e5a5-8861-4ae1-b21b-d6106d9c24be","type":"GlyphRenderer"},{"id":"f3c85695-d874-46dd-b7f6-90814056138e","type":"GlyphRenderer"},{"id":"087bdcf1-86f1-4aee-8f73-0ffca55ef4d0","type":"GlyphRenderer"},{"id":"8f9331ca-623d-4df4-98f0-3f7cade16066","type":"GlyphRenderer"},{"id":"1e729d35-a2af-4df3-bd4f-9ed936603e84","type":"GlyphRenderer"},{"id":"237357bb-93aa-457d-8135-043c903a0d55","type":"GlyphRenderer"},{"id":"548e5c40-6d1c-42ed-b495-501e78cf3183","type":"GlyphRenderer"},{"id":"93416a0a-eb8b-48f1-8eee-a8817140ecbf","type":"GlyphRenderer"},{"id":"4167f6e9-cd2d-40db-8ee2-39432dddc52f","type":"GlyphRenderer"},{"id":"af73e913-58f3-458a-b93d-636d37cb69e7","type":"GlyphRenderer"},{"id":"25223851-20a1-4ce4-9233-14b6d9a01986","type":"GlyphRenderer"},{"id":"2b231ad5-6895-464e-ac28-6423cf5bae76","type":"GlyphRenderer"},{"id":"c03dfd87-65e7-4c57-a8e7-1c0a2cc0e129","type":"GlyphRenderer"},{"id":"8828742d-31a2-40b1-b2e4-329b1589c096","type":"GlyphRenderer"},{"id":"b78c25f6-d0c9-4510-a41d-34d4fc1c297c","type":"GlyphRenderer"},{"id":"b895374e-953d-4896-bfae-9b8c8e53e4e3","type":"GlyphRenderer"},{"id":"e0b23eb8-6482-4f43-a5a1-f3db23156811","type":"GlyphRenderer"},{"id":"b1120e4a-4b4a-48da-82b8-bda326222994","type":"GlyphRenderer"},{"id":"632159a1-05cb-4b73-934b-92d8fa34b51d","type":"GlyphRenderer"},{"id":"5817100a-94d2-46ba-aea4-c277b943a5b5","type":"GlyphRenderer"},{"id":"34598669-c700-49de-a3d5-2e5e2e11c271","type":"GlyphRenderer"},{"id":"b21e9379-1358-4acd-9a01-68eea5182301","type":"GlyphRenderer"},{"id":"60964597-8df6-46e4-ab76-a3860bd380c2","type":"GlyphRenderer"},{"id":"90583ae6-f583-40f2-9df1-b218a52eadca","type":"GlyphRenderer"},{"id":"a0dca282-e511-4100-9ca4-91f49bb0a0a8","type":"GlyphRenderer"}],"title":{"id":"ec1e1bba-8192-440d-b5ca-8331622f3cc7","type":"Title"},"toolbar":{"id":"ae11268b-f717-4115-b8b4-09b30e4387b6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b6f0f48e-bef3-4761-aeba-c236ac7027e6","type":"FactorRange"},"x_scale":{"id":"0ed7a656-f1ed-43ca-b7e2-7ce6436fb9a6","type":"CategoricalScale"},"y_range":{"id":"e29b8fe5-f1e9-4035-8150-d57fd28a3d11","type":"FactorRange"},"y_scale":{"id":"660cd24c-6884-42fd-8dba-00ce0fcd00c7","type":"CategoricalScale"}},"id":"3e2e245c-9427-4931-887b-e224274ee1f9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fill and Line Color Combinations"},"id":"ec1e1bba-8192-440d-b5ca-8331622f3cc7","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha"]}},"id":"a80d15d8-03f3-499f-9b84-13c1e3689bad","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"b6f0f48e-bef3-4761-aeba-c236ac7027e6","type":"FactorRange"},{"attributes":{"source":{"id":"11263165-0c90-4904-aebb-2dcfc991909f","type":"ColumnDataSource"}},"id":"8ed78bce-16c7-403a-98fa-a6e4496e20a0","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ca6e00d5-abb5-4d2d-bbab-7ffcbb9a66ca","type":"PanTool"},{"id":"64fd6cf4-833e-4542-bf4b-7fa0640c0193","type":"WheelZoomTool"},{"id":"55baf807-e45a-485d-a880-2e2fd08889fa","type":"BoxZoomTool"},{"id":"5c63bb0f-c92b-4cb8-86fa-923ae85ec636","type":"SaveTool"},{"id":"c8af07ae-5c69-441d-a3c9-64b17953fbe9","type":"ResetTool"},{"id":"54de21cd-af5e-4594-9d31-32266ae79b5b","type":"HelpTool"}]},"id":"ae11268b-f717-4115-b8b4-09b30e4387b6","type":"Toolbar"},{"attributes":{"axis_label":"Line Options","formatter":{"id":"886fa98e-b5e5-4c8e-80c8-1026e171dea4","type":"CategoricalTickFormatter"},"plot":{"id":"3e2e245c-9427-4931-887b-e224274ee1f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"01f353c0-0b01-499f-9497-d8800883e59f","type":"CategoricalTicker"}},"id":"93603d4f-5f45-43a7-945d-64c65574cc07","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"82a83219-fd5f-440b-9a9e-2887e0dcbaed","type":"ColumnDataSource"},"glyph":{"id":"09131c65-81b0-453d-a822-a6216a64de0a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fed133f2-ea98-4759-be30-66ba69abfe9f","type":"Circle"},"selection_glyph":null,"view":{"id":"06a46fff-8cbe-47c0-ad5e-824251889247","type":"CDSView"}},"id":"93416a0a-eb8b-48f1-8eee-a8817140ecbf","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"33b8a8bc-681d-47b0-94d1-d421da1e71b6","type":"ColumnDataSource"},"glyph":{"id":"d9110bb3-a99a-4074-8660-6730bfda34fb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c5bbdfbb-6e24-4abc-933b-2c99d7726549","type":"Circle"},"selection_glyph":null,"view":{"id":"57bbc598-8232-44a0-858c-3ce14e9f2a3b","type":"CDSView"}},"id":"a0dca282-e511-4100-9ca4-91f49bb0a0a8","type":"GlyphRenderer"},{"attributes":{},"id":"0ed7a656-f1ed-43ca-b7e2-7ce6436fb9a6","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGB"]}},"id":"11263165-0c90-4904-aebb-2dcfc991909f","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"e29b8fe5-f1e9-4035-8150-d57fd28a3d11","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9110bb3-a99a-4074-8660-6730bfda34fb","type":"Circle"},{"attributes":{},"id":"660cd24c-6884-42fd-8dba-00ce0fcd00c7","type":"CategoricalScale"},{"attributes":{"source":{"id":"a80d15d8-03f3-499f-9b84-13c1e3689bad","type":"ColumnDataSource"}},"id":"ec796592-aa65-45b3-91dd-cf9fa9cc6cfe","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"3e2e245c-9427-4931-887b-e224274ee1f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"2bc014c8-f837-4647-af35-03af49eaa808","type":"CategoricalTicker"}},"id":"a3a456fe-eae4-44cf-bcfd-22f618c217d2","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["None"]}},"id":"a8523b6b-61ef-4924-b00b-e5df61c13942","type":"ColumnDataSource"},{"attributes":{},"id":"2bc014c8-f837-4647-af35-03af49eaa808","type":"CategoricalTicker"},{"attributes":{"axis_label":"Fill Options","formatter":{"id":"622290d9-28fa-46b5-b4af-951bb57be260","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"3e2e245c-9427-4931-887b-e224274ee1f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"2bc014c8-f837-4647-af35-03af49eaa808","type":"CategoricalTicker"}},"id":"9f7f0158-baeb-4c9f-a486-d129efb5486e","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5db5a594-766e-41fe-8472-c370bdbc20ba","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"be3e86e1-cfc7-464e-badc-8ca835c6c537","type":"Circle"},{"attributes":{"source":{"id":"2ddbbb4e-c1d0-4739-8747-4a13a542b0bb","type":"ColumnDataSource"}},"id":"dd03603f-bfed-4c07-8e81-b3d5182c1276","type":"CDSView"},{"attributes":{},"id":"c8af07ae-5c69-441d-a3c9-64b17953fbe9","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGB"]}},"id":"0ca40369-ca6b-452b-a845-e0d819218d9c","type":"ColumnDataSource"},{"attributes":{},"id":"01f353c0-0b01-499f-9497-d8800883e59f","type":"CategoricalTicker"},{"attributes":{"source":{"id":"82a83219-fd5f-440b-9a9e-2887e0dcbaed","type":"ColumnDataSource"}},"id":"06a46fff-8cbe-47c0-ad5e-824251889247","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"3e2e245c-9427-4931-887b-e224274ee1f9","subtype":"Figure","type":"Plot"},"ticker":{"id":"01f353c0-0b01-499f-9497-d8800883e59f","type":"CategoricalTicker"}},"id":"9e55e24a-7246-46b5-8086-832d6524a386","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8d68d4b-a336-4440-a0c4-62a5aa702220","type":"Circle"},{"attributes":{"data_source":{"id":"5c4d7526-636c-4b3d-9b94-65767cae1fa5","type":"ColumnDataSource"},"glyph":{"id":"5db5a594-766e-41fe-8472-c370bdbc20ba","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"212d84ec-e299-4ff2-af66-9097f66e764f","type":"Circle"},"selection_glyph":null,"view":{"id":"ec74517e-54b1-4c2b-be00-ca787b4982a1","type":"CDSView"}},"id":"548e5c40-6d1c-42ed-b495-501e78cf3183","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9546ef7c-0cf7-49ca-96cf-92cfa6997b41","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGB"]}},"id":"a55b6207-72a3-4a69-a9ab-6542ad021b3f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c417480-33e5-4265-b0c2-2b51eb9e4126","type":"Circle"},{"attributes":{"overlay":{"id":"9546ef7c-0cf7-49ca-96cf-92cfa6997b41","type":"BoxAnnotation"}},"id":"55baf807-e45a-485d-a880-2e2fd08889fa","type":"BoxZoomTool"},{"attributes":{},"id":"5c63bb0f-c92b-4cb8-86fa-923ae85ec636","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["None"]}},"id":"82a83219-fd5f-440b-9a9e-2887e0dcbaed","type":"ColumnDataSource"},{"attributes":{},"id":"54de21cd-af5e-4594-9d31-32266ae79b5b","type":"HelpTool"},{"attributes":{"source":{"id":"beaf40d1-fa9f-4e1a-8e7c-939c9ae099be","type":"ColumnDataSource"}},"id":"b1e2b60c-3aeb-49a5-90b3-37ac777fa7da","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGBA"]}},"id":"6aeefad7-793a-43bb-8ecf-02b5c107cb38","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"73a5a81d-4e0b-4833-8047-82ac54ef05f9","type":"Circle"},{"attributes":{"data_source":{"id":"796ee041-ee76-406b-9dc4-06189714babd","type":"ColumnDataSource"},"glyph":{"id":"a4a00c14-6a93-4347-98e0-bf0bafbdf59c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8a77878a-4bc9-4f52-add3-d8aa3ebcd640","type":"Circle"},"selection_glyph":null,"view":{"id":"7ff3d46d-fdf9-4af0-bb55-b10bf69c6b31","type":"CDSView"}},"id":"b21e9379-1358-4acd-9a01-68eea5182301","type":"GlyphRenderer"},{"attributes":{},"id":"886fa98e-b5e5-4c8e-80c8-1026e171dea4","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGBA"]}},"id":"f6769a2d-36f0-4deb-8a54-a4811630fe4c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11263165-0c90-4904-aebb-2dcfc991909f","type":"ColumnDataSource"},"glyph":{"id":"73a5a81d-4e0b-4833-8047-82ac54ef05f9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ad3dd7d9-93f8-407d-b6f9-986d011e22c9","type":"Circle"},"selection_glyph":null,"view":{"id":"8ed78bce-16c7-403a-98fa-a6e4496e20a0","type":"CDSView"}},"id":"b895374e-953d-4896-bfae-9b8c8e53e4e3","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"202ac1de-8aec-4e69-ab36-03d5e8a44596","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGBA"]}},"id":"5c4d7526-636c-4b3d-9b94-65767cae1fa5","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGBA"]}},"id":"4dd4b45a-cd5f-41c5-9466-c07fd54ddcd1","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4bfb7e3d-7481-4f67-9b39-88f8ebe91886","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf2f904b-16c9-4a5c-8785-05758c1bcc66","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6bfb549-34a5-4aed-a13d-4d307fed8bce","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fed133f2-ea98-4759-be30-66ba69abfe9f","type":"Circle"},{"attributes":{"source":{"id":"5179e3c9-2f1f-4a15-9a08-96ab7cc32a84","type":"ColumnDataSource"}},"id":"3aeaacf6-4a1a-4977-9aee-69095fa8d796","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a77878a-4bc9-4f52-add3-d8aa3ebcd640","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha"]}},"id":"5179e3c9-2f1f-4a15-9a08-96ab7cc32a84","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad3dd7d9-93f8-407d-b6f9-986d011e22c9","type":"Circle"},{"attributes":{"data_source":{"id":"5179e3c9-2f1f-4a15-9a08-96ab7cc32a84","type":"ColumnDataSource"},"glyph":{"id":"4bfb7e3d-7481-4f67-9b39-88f8ebe91886","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8725fe24-68ff-4614-a68d-ee19fd5ca223","type":"Circle"},"selection_glyph":null,"view":{"id":"3aeaacf6-4a1a-4977-9aee-69095fa8d796","type":"CDSView"}},"id":"59fb1a65-c64f-43d1-ab11-bb7d92d9b88a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"aeed1a90-12fb-4b6f-8500-0c0bbdd93cf7","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8725fe24-68ff-4614-a68d-ee19fd5ca223","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7494bd32-5c08-471e-a398-dec3d174b3ba","type":"Circle"},{"attributes":{"source":{"id":"6aeefad7-793a-43bb-8ecf-02b5c107cb38","type":"ColumnDataSource"}},"id":"7640a2bd-344c-4f21-8829-ef1c485b31f1","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b9d1a3b-6ba3-49b6-908d-cd861e0f58ca","type":"Circle"},{"attributes":{"source":{"id":"a55b6207-72a3-4a69-a9ab-6542ad021b3f","type":"ColumnDataSource"}},"id":"c1686ada-45a8-45c7-a20a-4c680bf16203","type":"CDSView"},{"attributes":{"data_source":{"id":"a55b6207-72a3-4a69-a9ab-6542ad021b3f","type":"ColumnDataSource"},"glyph":{"id":"202ac1de-8aec-4e69-ab36-03d5e8a44596","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6b9d1a3b-6ba3-49b6-908d-cd861e0f58ca","type":"Circle"},"selection_glyph":null,"view":{"id":"c1686ada-45a8-45c7-a20a-4c680bf16203","type":"CDSView"}},"id":"e0ad9e50-b071-4607-90dc-ddfb2455327d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad0fe44d-231a-4d46-ac69-e2fa0ffed7ef","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5ee6e51-b7fa-4347-8550-5ff82eefbc17","type":"Circle"},{"attributes":{"data_source":{"id":"6aeefad7-793a-43bb-8ecf-02b5c107cb38","type":"ColumnDataSource"},"glyph":{"id":"e6bfb549-34a5-4aed-a13d-4d307fed8bce","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ad0fe44d-231a-4d46-ac69-e2fa0ffed7ef","type":"Circle"},"selection_glyph":null,"view":{"id":"7640a2bd-344c-4f21-8829-ef1c485b31f1","type":"CDSView"}},"id":"2f4ace11-b3f7-44b7-8623-e34a56cbe826","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7d16857c-1474-4828-8b33-ae3918107349","type":"ColumnDataSource"},"glyph":{"id":"7494bd32-5c08-471e-a398-dec3d174b3ba","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3556cc70-d394-4f61-978c-6f9158f46782","type":"Circle"},"selection_glyph":null,"view":{"id":"10bc6c31-10bf-47a5-a718-afd6479981b4","type":"CDSView"}},"id":"2e84c743-7158-4a51-be85-7585a681df13","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2cced68c-3cda-423d-bb3e-167221984b97","type":"Circle"},{"attributes":{"source":{"id":"7d16857c-1474-4828-8b33-ae3918107349","type":"ColumnDataSource"}},"id":"10bc6c31-10bf-47a5-a718-afd6479981b4","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGB"]}},"id":"7d16857c-1474-4828-8b33-ae3918107349","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGBA"]}},"id":"33b8a8bc-681d-47b0-94d1-d421da1e71b6","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8bce29fb-65bc-4087-9d92-714ca69648df","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3a9999f-4de3-40a4-b9ab-be76d92055c1","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2e8c1f3-d454-4360-b71b-0e113898583d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"02618cb2-1f80-42a2-b54e-e93b1b8be6f3","type":"Circle"},{"attributes":{"data_source":{"id":"4dd4b45a-cd5f-41c5-9466-c07fd54ddcd1","type":"ColumnDataSource"},"glyph":{"id":"aeed1a90-12fb-4b6f-8500-0c0bbdd93cf7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0c417480-33e5-4265-b0c2-2b51eb9e4126","type":"Circle"},"selection_glyph":null,"view":{"id":"fe2d7e01-b54d-4f28-b0aa-e8d3d1f302de","type":"CDSView"}},"id":"60964597-8df6-46e4-ab76-a3860bd380c2","type":"GlyphRenderer"},{"attributes":{"source":{"id":"29bec62b-fdba-457a-8fe2-6753ebc037d7","type":"ColumnDataSource"}},"id":"8defe4ce-5cf0-487f-b136-c88b037efad8","type":"CDSView"},{"attributes":{"data_source":{"id":"a80d15d8-03f3-499f-9b84-13c1e3689bad","type":"ColumnDataSource"},"glyph":{"id":"d5f49d07-7a78-4251-9df5-e844668551c6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a5ee6e51-b7fa-4347-8550-5ff82eefbc17","type":"Circle"},"selection_glyph":null,"view":{"id":"ec796592-aa65-45b3-91dd-cf9fa9cc6cfe","type":"CDSView"}},"id":"b78c25f6-d0c9-4510-a41d-34d4fc1c297c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3556cc70-d394-4f61-978c-6f9158f46782","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8baff1d1-a778-4ca0-9782-9e94380d3ad8","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["None"]}},"id":"10cd3ace-5248-4a8e-a35a-d4660e308256","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGBA"]}},"id":"29bec62b-fdba-457a-8fe2-6753ebc037d7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"10cd3ace-5248-4a8e-a35a-d4660e308256","type":"ColumnDataSource"}},"id":"4d015b50-b8da-4454-9e1f-e9aa258760cc","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5bbdfbb-6e24-4abc-933b-2c99d7726549","type":"Circle"},{"attributes":{"data_source":{"id":"29bec62b-fdba-457a-8fe2-6753ebc037d7","type":"ColumnDataSource"},"glyph":{"id":"8bce29fb-65bc-4087-9d92-714ca69648df","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8baff1d1-a778-4ca0-9782-9e94380d3ad8","type":"Circle"},"selection_glyph":null,"view":{"id":"8defe4ce-5cf0-487f-b136-c88b037efad8","type":"CDSView"}},"id":"60fdb229-79b1-4332-83ec-bf4cecbdd485","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"10cd3ace-5248-4a8e-a35a-d4660e308256","type":"ColumnDataSource"},"glyph":{"id":"c9225386-2fe8-4a2b-8674-cddf710b0085","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9e70a0f8-6586-4aa0-9267-2dd0174a0c2f","type":"Circle"},"selection_glyph":null,"view":{"id":"4d015b50-b8da-4454-9e1f-e9aa258760cc","type":"CDSView"}},"id":"e1b022ce-66b0-4351-a742-44714c49b6b9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2ddbbb4e-c1d0-4739-8747-4a13a542b0bb","type":"ColumnDataSource"},"glyph":{"id":"f280bbaa-8dbf-4f1d-a71c-e8a36e6e19a6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cf2f904b-16c9-4a5c-8785-05758c1bcc66","type":"Circle"},"selection_glyph":null,"view":{"id":"dd03603f-bfed-4c07-8e81-b3d5182c1276","type":"CDSView"}},"id":"237357bb-93aa-457d-8135-043c903a0d55","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e70a0f8-6586-4aa0-9267-2dd0174a0c2f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c9225386-2fe8-4a2b-8674-cddf710b0085","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha"]}},"id":"40bfe6ff-2d5f-4aeb-90e1-c96faa17f707","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"053a3635-3e39-423c-ab9c-ce5cf6a44818","type":"Circle"},{"attributes":{"source":{"id":"547c0028-c9c6-4eb7-909e-cdd936b3a038","type":"ColumnDataSource"}},"id":"416c5ce0-64fc-45ca-b58a-3df050290da8","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"40ac6d51-f6e2-4205-af60-99922d723ddc","type":"Circle"},{"attributes":{"data_source":{"id":"40bfe6ff-2d5f-4aeb-90e1-c96faa17f707","type":"ColumnDataSource"},"glyph":{"id":"b2e8c1f3-d454-4360-b71b-0e113898583d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a865c5eb-ae63-4f39-a7f3-222c1c55a5b4","type":"Circle"},"selection_glyph":null,"view":{"id":"6cb975f9-4ff2-4d85-b026-725b80571230","type":"CDSView"}},"id":"30da5771-3aa7-409a-8f3d-a9d55fe0bc1c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"87bc6f44-74b0-4489-9bee-c33e43d1b64d","type":"ColumnDataSource"},"glyph":{"id":"61d3929d-86ae-4d4a-bf6c-a20dc638229f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4bcd8478-d868-45ff-b553-2592cdcccb7e","type":"Circle"},"selection_glyph":null,"view":{"id":"afea7fc3-b8d1-4e44-bb68-f04596e4f505","type":"CDSView"}},"id":"34598669-c700-49de-a3d5-2e5e2e11c271","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40bfe6ff-2d5f-4aeb-90e1-c96faa17f707","type":"ColumnDataSource"}},"id":"6cb975f9-4ff2-4d85-b026-725b80571230","type":"CDSView"},{"attributes":{"source":{"id":"a1adb0a6-8aa9-4ccb-867c-4c161ce20b56","type":"ColumnDataSource"}},"id":"04b0ba3a-f13e-4a7c-af81-3f03ea39cd55","type":"CDSView"},{"attributes":{"data_source":{"id":"a1adb0a6-8aa9-4ccb-867c-4c161ce20b56","type":"ColumnDataSource"},"glyph":{"id":"dc932512-5698-43f1-a6de-c38ce1033c8e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f682e351-0e15-4367-997a-019b2a12f584","type":"Circle"},"selection_glyph":null,"view":{"id":"04b0ba3a-f13e-4a7c-af81-3f03ea39cd55","type":"CDSView"}},"id":"af73e913-58f3-458a-b93d-636d37cb69e7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGBA"]}},"id":"2401fdc4-f205-4fd9-a1a8-074aaf568555","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a865c5eb-ae63-4f39-a7f3-222c1c55a5b4","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGB"]}},"id":"bb640dfb-fef5-47c8-a6f2-3a32572852bb","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4a00c14-6a93-4347-98e0-bf0bafbdf59c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"59d4fc73-3734-4339-8edc-efe8bf0fd61a","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"752ef1c8-0479-434f-b478-0b3fe2838294","type":"Circle"},{"attributes":{"source":{"id":"ed4b35c8-1139-4b9f-87ed-c6d289ee54e1","type":"ColumnDataSource"}},"id":"681a7354-8e5e-4aa2-9013-7585fb842c35","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1361961e-51fa-4f21-b05d-7e9dd3b5ebd3","type":"Circle"},{"attributes":{"data_source":{"id":"bb640dfb-fef5-47c8-a6f2-3a32572852bb","type":"ColumnDataSource"},"glyph":{"id":"59d4fc73-3734-4339-8edc-efe8bf0fd61a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"080702ca-fca1-49a1-9f46-c679bdd77e16","type":"Circle"},"selection_glyph":null,"view":{"id":"409070e9-6f2a-4580-adf7-601b76d87a45","type":"CDSView"}},"id":"ea25b45e-6c99-4b50-9bbe-c9a6bb2cafd4","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2401fdc4-f205-4fd9-a1a8-074aaf568555","type":"ColumnDataSource"}},"id":"72f7a2cf-de39-44da-83ea-4accf461b797","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"080702ca-fca1-49a1-9f46-c679bdd77e16","type":"Circle"},{"attributes":{"source":{"id":"bb640dfb-fef5-47c8-a6f2-3a32572852bb","type":"ColumnDataSource"}},"id":"409070e9-6f2a-4580-adf7-601b76d87a45","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc932512-5698-43f1-a6de-c38ce1033c8e","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGB"]}},"id":"0af48d01-122c-4a76-92d6-fc11c0ff3125","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f65af361-cb77-4301-ba4a-2d6dde58d518","type":"Circle"},{"attributes":{"data_source":{"id":"2401fdc4-f205-4fd9-a1a8-074aaf568555","type":"ColumnDataSource"},"glyph":{"id":"1361961e-51fa-4f21-b05d-7e9dd3b5ebd3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"138ee2ea-0150-40fa-8091-056b12dbb6ee","type":"Circle"},"selection_glyph":null,"view":{"id":"72f7a2cf-de39-44da-83ea-4accf461b797","type":"CDSView"}},"id":"ed0e5eb7-6848-497e-8310-e2a5577777d7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["None"]}},"id":"2ba47894-65f3-424b-a0b2-536962befd03","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"501558b2-be64-4ef0-8e02-e8a537974d1b","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2747e03-9ecf-482c-946a-505880724271","type":"Circle"},{"attributes":{"data_source":{"id":"e344f03b-6557-4e7e-b162-6d348415da1e","type":"ColumnDataSource"},"glyph":{"id":"baccbd28-2c55-4d1c-ba53-cd7c4908f750","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"934b247c-63e4-40d0-a1e9-23a472b52fc3","type":"Circle"},"selection_glyph":null,"view":{"id":"1455fc85-ac36-4104-a77f-86db842d1c24","type":"CDSView"}},"id":"25223851-20a1-4ce4-9233-14b6d9a01986","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"138ee2ea-0150-40fa-8091-056b12dbb6ee","type":"Circle"},{"attributes":{"source":{"id":"e5a72133-9a63-4927-960d-549475476254","type":"ColumnDataSource"}},"id":"6570a489-d1c3-4d76-8ec5-d5dd2f49c24b","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha"]}},"id":"87bc6f44-74b0-4489-9bee-c33e43d1b64d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGB"]}},"id":"796ee041-ee76-406b-9dc4-06189714babd","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b56d2c26-b704-49bd-a8a6-e7d468206483","type":"Circle"},{"attributes":{"source":{"id":"87bc6f44-74b0-4489-9bee-c33e43d1b64d","type":"ColumnDataSource"}},"id":"afea7fc3-b8d1-4e44-bb68-f04596e4f505","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGBA"]}},"id":"e7583068-6e2a-4bc5-b394-206e246fc04b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"cf4c4e58-78b7-4743-8e81-51901bcce904","type":"ColumnDataSource"},"glyph":{"id":"aa96661c-b5bf-4e8e-9c4e-c6086405a1b0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"02618cb2-1f80-42a2-b54e-e93b1b8be6f3","type":"Circle"},"selection_glyph":null,"view":{"id":"d860bb4a-1758-438f-844c-7c4df383a7b1","type":"CDSView"}},"id":"b1120e4a-4b4a-48da-82b8-bda326222994","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e7583068-6e2a-4bc5-b394-206e246fc04b","type":"ColumnDataSource"}},"id":"f998c8f8-6b92-463b-8913-3d9ce888d233","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGB"]}},"id":"5fdc2a52-7cda-4ed5-bbff-3c0ac36fc1fe","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4793c766-2487-4d1f-8f32-f5a6f7a48195","type":"ColumnDataSource"},"glyph":{"id":"cdfcaf58-8731-4a86-bc04-3a496d2cdefd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"613bf255-0176-4542-af36-f6df28f294d4","type":"Circle"},"selection_glyph":null,"view":{"id":"1e334a95-3fe4-41a2-819e-a586dafa9ef4","type":"CDSView"}},"id":"8828742d-31a2-40b1-b2e4-329b1589c096","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0af48d01-122c-4a76-92d6-fc11c0ff3125","type":"ColumnDataSource"}},"id":"5deb1553-31bf-41a7-a298-ef20c133068e","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f6a8e95a-c2c9-4403-9112-91d92210afb5","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdfcaf58-8731-4a86-bc04-3a496d2cdefd","type":"Circle"},{"attributes":{"data_source":{"id":"0af48d01-122c-4a76-92d6-fc11c0ff3125","type":"ColumnDataSource"},"glyph":{"id":"053a3635-3e39-423c-ab9c-ce5cf6a44818","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b56d2c26-b704-49bd-a8a6-e7d468206483","type":"Circle"},"selection_glyph":null,"view":{"id":"5deb1553-31bf-41a7-a298-ef20c133068e","type":"CDSView"}},"id":"190f4902-d3ab-4bf4-a1c8-4e8140834084","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8acd569-911c-45f9-bd66-00b2394378bc","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"08ebb7cf-6426-4bbe-8925-4c70fb506360","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b71692d1-ba8c-4189-a511-7e5d84733485","type":"Circle"},{"attributes":{"source":{"id":"cf4c4e58-78b7-4743-8e81-51901bcce904","type":"ColumnDataSource"}},"id":"d860bb4a-1758-438f-844c-7c4df383a7b1","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b63473f3-c0a1-4417-8342-351d883feca8","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6487cb9d-7812-4eaa-845c-da980ac15f12","type":"Circle"},{"attributes":{"data_source":{"id":"e7583068-6e2a-4bc5-b394-206e246fc04b","type":"ColumnDataSource"},"glyph":{"id":"501558b2-be64-4ef0-8e02-e8a537974d1b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b71692d1-ba8c-4189-a511-7e5d84733485","type":"Circle"},"selection_glyph":null,"view":{"id":"f998c8f8-6b92-463b-8913-3d9ce888d233","type":"CDSView"}},"id":"75a8e5a5-8861-4ae1-b21b-d6106d9c24be","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e5a72133-9a63-4927-960d-549475476254","type":"ColumnDataSource"},"glyph":{"id":"752ef1c8-0479-434f-b478-0b3fe2838294","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40ac6d51-f6e2-4205-af60-99922d723ddc","type":"Circle"},"selection_glyph":null,"view":{"id":"6570a489-d1c3-4d76-8ec5-d5dd2f49c24b","type":"CDSView"}},"id":"c03dfd87-65e7-4c57-a8e7-1c0a2cc0e129","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2ba47894-65f3-424b-a0b2-536962befd03","type":"ColumnDataSource"},"glyph":{"id":"b2747e03-9ecf-482c-946a-505880724271","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a8acd569-911c-45f9-bd66-00b2394378bc","type":"Circle"},"selection_glyph":null,"view":{"id":"3691ab27-0b9c-471c-b7b8-578bb39152ff","type":"CDSView"}},"id":"5817100a-94d2-46ba-aea4-c277b943a5b5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["None"]}},"id":"8bf223aa-29ce-4b92-a48f-c88cfc16920e","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8bf223aa-29ce-4b92-a48f-c88cfc16920e","type":"ColumnDataSource"}},"id":"61e08132-0643-4208-bca1-0f0303b6fc55","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"934b247c-63e4-40d0-a1e9-23a472b52fc3","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["None"]}},"id":"4793c766-2487-4d1f-8f32-f5a6f7a48195","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"13c72243-1757-4abc-ae17-3360b8c0ff32","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"61d3929d-86ae-4d4a-bf6c-a20dc638229f","type":"Circle"},{"attributes":{"data_source":{"id":"8bf223aa-29ce-4b92-a48f-c88cfc16920e","type":"ColumnDataSource"},"glyph":{"id":"08ebb7cf-6426-4bbe-8925-4c70fb506360","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13c72243-1757-4abc-ae17-3360b8c0ff32","type":"Circle"},"selection_glyph":null,"view":{"id":"61e08132-0643-4208-bca1-0f0303b6fc55","type":"CDSView"}},"id":"f3c85695-d874-46dd-b7f6-90814056138e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGBA"]}},"id":"ed4b35c8-1139-4b9f-87ed-c6d289ee54e1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha"]}},"id":"6eb56858-25bd-4904-aba1-f65db3deedbd","type":"ColumnDataSource"},{"attributes":{"source":{"id":"33b8a8bc-681d-47b0-94d1-d421da1e71b6","type":"ColumnDataSource"}},"id":"57bbc598-8232-44a0-858c-3ce14e9f2a3b","type":"CDSView"},{"attributes":{"source":{"id":"6eb56858-25bd-4904-aba1-f65db3deedbd","type":"ColumnDataSource"}},"id":"6d975d01-b3ae-42bd-876f-c385e68894fc","type":"CDSView"},{"attributes":{"source":{"id":"4793c766-2487-4d1f-8f32-f5a6f7a48195","type":"ColumnDataSource"}},"id":"1e334a95-3fe4-41a2-819e-a586dafa9ef4","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4323ef82-1017-41c9-a2f0-9846eb7ae62f","type":"Circle"},{"attributes":{"source":{"id":"2ba47894-65f3-424b-a0b2-536962befd03","type":"ColumnDataSource"}},"id":"3691ab27-0b9c-471c-b7b8-578bb39152ff","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"76136790-cf29-4cdd-b7aa-0009bdd7ca0f","type":"Circle"},{"attributes":{"data_source":{"id":"6eb56858-25bd-4904-aba1-f65db3deedbd","type":"ColumnDataSource"},"glyph":{"id":"b63473f3-c0a1-4417-8342-351d883feca8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4323ef82-1017-41c9-a2f0-9846eb7ae62f","type":"Circle"},"selection_glyph":null,"view":{"id":"6d975d01-b3ae-42bd-876f-c385e68894fc","type":"CDSView"}},"id":"087bdcf1-86f1-4aee-8f73-0ffca55ef4d0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed2105a2-d395-4f94-88af-7538cec23719","type":"Circle"},{"attributes":{"data_source":{"id":"ed4b35c8-1139-4b9f-87ed-c6d289ee54e1","type":"ColumnDataSource"},"glyph":{"id":"f65af361-cb77-4301-ba4a-2d6dde58d518","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6487cb9d-7812-4eaa-845c-da980ac15f12","type":"Circle"},"selection_glyph":null,"view":{"id":"681a7354-8e5e-4aa2-9013-7585fb842c35","type":"CDSView"}},"id":"632159a1-05cb-4b73-934b-92d8fa34b51d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0ca40369-ca6b-452b-a845-e0d819218d9c","type":"ColumnDataSource"}},"id":"2283fcf0-60e2-4cf0-a6eb-cb03154d84e8","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc7bd538-7ec9-4af6-8b21-0c2c2b155a56","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGB"]}},"id":"a1adb0a6-8aa9-4ccb-867c-4c161ce20b56","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e344f03b-6557-4e7e-b162-6d348415da1e","type":"ColumnDataSource"}},"id":"1455fc85-ac36-4104-a77f-86db842d1c24","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"893a86c3-68a7-4b67-99e6-485b403882d6","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"613bf255-0176-4542-af36-f6df28f294d4","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f280bbaa-8dbf-4f1d-a71c-e8a36e6e19a6","type":"Circle"},{"attributes":{"source":{"id":"5fdc2a52-7cda-4ed5-bbff-3c0ac36fc1fe","type":"ColumnDataSource"}},"id":"ad8fa856-9ee3-4263-b4ed-bcffff9cbc4c","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGBA"]}},"id":"e5a72133-9a63-4927-960d-549475476254","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGBA"]}},"id":"547c0028-c9c6-4eb7-909e-cdd936b3a038","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"547c0028-c9c6-4eb7-909e-cdd936b3a038","type":"ColumnDataSource"},"glyph":{"id":"76136790-cf29-4cdd-b7aa-0009bdd7ca0f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b1d028ba-f976-4160-970c-d63a07c88bf6","type":"Circle"},"selection_glyph":null,"view":{"id":"416c5ce0-64fc-45ca-b58a-3df050290da8","type":"CDSView"}},"id":"1e729d35-a2af-4df3-bd4f-9ed936603e84","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"baccbd28-2c55-4d1c-ba53-cd7c4908f750","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1d028ba-f976-4160-970c-d63a07c88bf6","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4bcd8478-d868-45ff-b553-2592cdcccb7e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f682e351-0e15-4367-997a-019b2a12f584","type":"Circle"},{"attributes":{"data_source":{"id":"5fdc2a52-7cda-4ed5-bbff-3c0ac36fc1fe","type":"ColumnDataSource"},"glyph":{"id":"893a86c3-68a7-4b67-99e6-485b403882d6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ed2105a2-d395-4f94-88af-7538cec23719","type":"Circle"},"selection_glyph":null,"view":{"id":"ad8fa856-9ee3-4263-b4ed-bcffff9cbc4c","type":"CDSView"}},"id":"8f9331ca-623d-4df4-98f0-3f7cade16066","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGB"]}},"id":"2ddbbb4e-c1d0-4739-8747-4a13a542b0bb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0ca40369-ca6b-452b-a845-e0d819218d9c","type":"ColumnDataSource"},"glyph":{"id":"bc7bd538-7ec9-4af6-8b21-0c2c2b155a56","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f6a8e95a-c2c9-4403-9112-91d92210afb5","type":"Circle"},"selection_glyph":null,"view":{"id":"2283fcf0-60e2-4cf0-a6eb-cb03154d84e8","type":"CDSView"}},"id":"2b231ad5-6895-464e-ac28-6423cf5bae76","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGBA"]}},"id":"e344f03b-6557-4e7e-b162-6d348415da1e","type":"ColumnDataSource"}],"root_ids":["3e2e245c-9427-4931-887b-e224274ee1f9"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"c7ca79c2-e1d0-440a-9485-6840260b04ec","elementid":"0826624c-200a-4838-beec-c59213cad0b1","modelid":"3e2e245c-9427-4931-887b-e224274ee1f9"}];
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