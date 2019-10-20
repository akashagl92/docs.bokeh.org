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
      };var element = document.getElementById("bc89dfd3-a5a9-4527-af16-da021c53b272");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc89dfd3-a5a9-4527-af16-da021c53b272' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5865d3fb-838c-4fc6-9835-a7e699a456a8":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"f192cc0c-eb0b-4001-9ece-c5ba89cd9ef2","type":"PolyAnnotation"}},"id":"51f163b7-b179-4acc-97e3-e32385360d95","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"f192cc0c-eb0b-4001-9ece-c5ba89cd9ef2","type":"PolyAnnotation"},{"attributes":{"callback":null,"column_names":["x","ym"],"data":{"x":[0,1],"ym":[0.5,0.5]}},"id":"adb20691-e289-4a72-8b3a-c028ebd1e383","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.6,"line_color":"orange","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"5d00ce44-0963-49a8-9ff9-0897935866b7","type":"Line"},{"attributes":{"data_source":{"id":"adb20691-e289-4a72-8b3a-c028ebd1e383","type":"ColumnDataSource"},"glyph":{"id":"5d00ce44-0963-49a8-9ff9-0897935866b7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0cc58e62-3a70-497a-82a5-f6c29872b4f1","type":"Line"},"selection_glyph":null,"view":{"id":"aa84f3de-5006-4ae9-a0b0-6e3b7df65e13","type":"CDSView"}},"id":"ca6f7b9a-0328-4cec-9c09-fe2920a442ec","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"6365d51b-3d10-4fd8-ac12-f93d75bfc4fb","type":"LinearAxis"}],"left":[{"id":"962a932b-f314-4a18-bb7e-c0065bd1c544","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6365d51b-3d10-4fd8-ac12-f93d75bfc4fb","type":"LinearAxis"},{"id":"76bf6f8c-b1c6-4ee6-b973-fd5f246aaf65","type":"Grid"},{"id":"962a932b-f314-4a18-bb7e-c0065bd1c544","type":"LinearAxis"},{"id":"ee96117b-bad3-4093-a0f2-ce50ce12084d","type":"Grid"},{"id":"f192cc0c-eb0b-4001-9ece-c5ba89cd9ef2","type":"PolyAnnotation"},{"id":"f690c3ac-9ed1-40ce-ac3b-a42f195d7659","type":"GlyphRenderer"},{"id":"ca6f7b9a-0328-4cec-9c09-fe2920a442ec","type":"GlyphRenderer"}],"title":{"id":"25a49032-ff14-40c6-b81b-c8c57a9738ed","type":"Title"},"toolbar":{"id":"152ee4b1-3674-42f2-b467-518c1f3ccc82","type":"Toolbar"},"x_range":{"id":"2f1e1b13-c6a0-4349-a6ac-5f599306bba8","type":"DataRange1d"},"x_scale":{"id":"ba06e647-ff19-421a-b3ce-b9237d81442a","type":"LinearScale"},"y_range":{"id":"0125fbf0-7cf7-4378-a4cb-eea4ab590af6","type":"DataRange1d"},"y_scale":{"id":"aba93648-db8f-48cc-ba09-f40363e5bfac","type":"LinearScale"}},"id":"ac059658-5b95-420d-9713-45c98172731d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5dc804a8-a6ad-40b6-8cfc-f78b5304e346","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5dc804a8-a6ad-40b6-8cfc-f78b5304e346","type":"BasicTickFormatter"},"plot":{"id":"ac059658-5b95-420d-9713-45c98172731d","subtype":"Figure","type":"Plot"},"ticker":{"id":"7cba1a75-9cc6-40dd-9320-ae20ed5d30f8","type":"BasicTicker"}},"id":"6365d51b-3d10-4fd8-ac12-f93d75bfc4fb","type":"LinearAxis"},{"attributes":{"callback":null},"id":"0125fbf0-7cf7-4378-a4cb-eea4ab590af6","type":"DataRange1d"},{"attributes":{"callback":{"id":"01931a1c-52eb-4d66-8215-8ce4394b6b33","type":"CustomJS"},"column_names":["x","y","color"],"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.8806974515555567,0.46373857122408324,0.47847434794491006,0.6887408008505317,0.01329126759051713,0.39914151252768304,0.7053237868586826,0.8969514321746423,0.212199830271376,0.035706430705799264,0.09507787225767117,0.01727670045404084,0.49020303075500216,0.9742491427509896,0.10829169491174984,0.6615429779232737,0.8601066276939303,0.888966987661522,0.5060760903823961,0.25794961011572726,0.965592330753437,0.42599480985651117,0.6172455195276803,0.3850218562023243,0.1847834572329745,0.7017744059215937,0.8731077426009582,0.7611308969738906,0.205358378965255,0.3496172093895654,0.4175490996064165,0.8541955525936328,0.7571189443405849,0.7030129687464399,0.9190932695366173,0.9294538771406828,0.49711061420073577,0.3221892778321004,0.5860282700112253,0.15216757188864682,0.37240153266743337,0.8860694192000516,0.45528736903088574,0.4322291127923972,0.06534775938527226,0.043122767287923636,0.5689270963239234,0.8860982775567615,0.25217479516389385,0.05855367448540949,0.9531393573381174,0.8737688020959616,0.9321872402388138,0.8334442599127777,0.02144500537503624,0.2757052129083437,0.9743807749475462,0.9499153503965707,0.9183139056646636,0.18302197604395443,0.4739428597839116,0.4993575562952103,0.46330375497823584,0.6749004293961685,0.49922305482313123,0.9844899532178032,0.9506248384124283,0.051603042536428556,0.9448135637207112,0.40915299192930055,0.18132167703142132,0.9577322700225307,0.7245044719917892,0.46820821160316606,0.25527129212477084,0.4184235505893047,0.18788422810397165,0.611082000429315,0.8678687914644339,0.18586642417062782,0.1824413570872203,0.45352607573378234,0.48195208046885896,0.1770924622936656,0.5733868233137598,0.5473290814763241,0.5514161227708149,0.21651943290388298,0.92978392361008,0.820745185794267,0.718909503092166,0.32528814781168147,0.9155861791925234,0.7411634372515681,0.5648730430948392,0.9850384224004888,0.11634079422733001,0.7561425833373493,0.1033604184830702,0.7535333150120022,0.12857938617410336,0.9266497031713512,0.3441338879137137,0.44092744964744424,0.872058479592514,0.48871122546651335,0.8996475595393122,0.3267564564552443,0.4787601625951651,0.7367356457039995,0.45618187062119653,0.25573056992135224,0.7794203717574048,0.4585398880826672,0.014131124871364475,0.9058038259448405,0.165079182799181,0.16896382732394088,0.5893872505397838,0.5917972478145561,0.781545663283099,0.4513342511540709,0.04895941387974212,0.8421932817633687,0.8609648763168708,0.049720551842972416,0.1811202664450391,0.6534507203715814,0.4468985127729228,0.16650427813034296,0.401767262369374,0.6249726780803322,0.10968185809020858,0.6575958648016224,0.015036766406888336,0.7689589647533602,0.7270614301576181,0.8975311605178866,0.899973433265126,0.4093510208565344,0.85826045108151,0.12764019073360777,0.45317287483606894,0.305388178363152,0.20041354004204615,0.8731985119828239,0.3641138356911,0.8223460550981347,0.616517752521782,0.35762578576531523,0.46679331750587527,0.05830704900032113,0.3863633914807938,0.9692314821132987,0.10208523856499718,0.6493078465798513,0.8071133234740444,0.22115523766783463,0.012914729216030763,0.6450436600487381,0.7164496846809404,0.2294534934659449,0.4620549556108813,0.849617499902603,0.6281044128190282,0.6868526414915326,0.44538195442510975,0.8410164784106063,0.22142599833406718,0.7084965601911719,0.3159032215287545,0.8285330556705002,0.789550149967866,0.9931836473631555,0.14028614570892461,0.40784038691092317,0.07824664231649048,0.5993138858303767,0.38487814825315136,0.643443664067973,0.7856279689023054,0.9923358216770246,0.08603972652284941,0.12287393529650847,0.35089279487819425,0.969665032435145,0.26506618181041985,0.21966313554528338,0.4813767808710775,0.7665830868128805,0.42805717069374005,0.05740385656892566,0.4867114350838575,0.41787392082021535,0.12448111127917882,0.29092873526497287,0.3402356759960443,0.17801999899128385,0.22831526766958665,0.30930682383159724,0.5653007837026544,0.116919112146887,0.5585149601914147,0.30456840425330667,0.7663668019825628,0.6030737192446414,0.35176951646374044,0.18480321531365307,0.6286542954852937,0.3694420343128164,0.5654846107981901,0.21607943831738974,0.3791332980159783,0.9340827758908231,0.7462665069049573,0.556852142072908,0.6172864095014866,0.6837687059797195,0.0724336402507526,0.3584839919511533,0.6501704787948258,0.4979509692128815,0.4678042840735914,0.9296988566329856,0.3443263007095546,0.6322321662570026,0.12492226231223102,0.6931546120367933,0.30561039601955875,0.1597389147760777,0.4931531890588833,0.40121752980371883,0.18249524774697212,0.29274095004735157,0.3495411232270972,0.3113064487957977,0.015855572728554534,0.20708115108831293,0.2747783830116669,0.38163056525019345,0.29003950994954486,0.528435183203544,0.7465887886361724,0.33889742293811276,0.7398507326157112,0.36005346330973675,0.4109791709402061,0.8093090020953149,0.2574223210706108,0.728083246248663,0.0027079024220353354,0.26230977411438017,0.18350592074731287,0.8100354490974471,0.6671833524963092,0.11902464722380468,0.7441954325249381,0.07518411127747882,0.2154395558803972,0.35214388752362036,0.26016788968753013,0.9306622106310902,0.6917030038870602,0.07717479446510567,0.12326881894267361,0.9884012504560368,0.3822288452521473,0.8020255244718245,0.5402510575547997,0.6581665196078565,0.09533039880219041,0.5079689006649691,0.4297079999616955,0.5855671288094175,0.1933262159554573,0.8922448733872415,0.6512877192018623,0.9999978768362366,0.6035408636520507,0.7182199084113092,0.5093213869807676,0.2931812221075565,0.7498094497067869,0.12095406130025976,0.6316027444459875,0.39712328099155647,0.7426842844628239,0.44255888206015015,0.11899453212594968,0.9031655057024799,0.4022140357707692,0.14808384288164855,0.4222085875697753,0.8508302505654117,0.031851958080788445,0.7252347880003168,0.12375935020437712,0.787051532347504,0.31740399714506784,0.8320997195338464,0.9870564106272653,0.3936374592913606,0.6184666817978132,0.4764626778610562,0.29465110644268233,0.5606844098629837,0.7715000612389473,0.8836261374014508,0.7467758732983326,0.6880572670509227,0.05522470690842474,0.4482244135758906,0.8046458325744533,0.5267582205321284,0.35321167232513906,0.5133516942123025,0.7437604448309679,0.6071634943322557,0.7710607775713149,0.9370946649935832,0.49170987712996905,0.9087789952381384,0.8727933484409052,0.5854279495332553,0.21508436687086707,0.4529801527166786,0.680499355366233,0.9411678950216381,0.2179438888819173,0.25169402418076503,0.6981312740684813,0.9798559863325426,0.248381873769973,0.4489532789295383,0.36999256843581485,0.857497316459699,0.6487393629728078,0.9359761421406921,0.12226341661313234,0.268371840634814,0.7614862845544256,0.8689115770941893,0.2996082525542878,0.46594063967450783,0.37512618289013555,0.6916224777631804,0.005733298403707843,0.014873901538123957,0.21888377062896924,0.09241401376409841,0.8819361468996475,0.7150958148574116,0.799976671191323,0.029740411513814125,0.3126007850750958,0.5573193183622054,0.9504462477853605,0.835738385971534,0.7531948160305921,0.623359250466828,0.6251565717044063,0.7970324115344223,0.3657007063953688,0.7984502368059602,0.08390742970034282,0.9218544188506286,0.4771457303328327,0.3961195717234758,0.49057013633840274,0.23379406144195014,0.861427318191991,0.3060839608212662,0.18674680327953308,0.7407899083456138,0.6347268065438213,0.08339997922622755,0.7613234897223885,0.8854678528823033,0.8268767228929432,0.7682180497203468,0.16383251973632096,0.5855885716714633,0.9293351233800847,0.7869860652453858,0.004147676890791319,0.8433496074736134,0.6601573089201892,0.7039405037857797,0.1959008623749119,0.1818230878250009,0.628182702340081,0.6028068915384122,0.6165862429889107,0.11132754384623844,0.011977893876892742,0.552574390212161,0.8084633042835374,0.8208571063242596,0.6397421539883451,0.508229610892998,0.974177758912877,0.9830867450210062,0.23196361545883015,0.7394869191415381,0.28360139481427016,0.7967651221624363,0.44525185342606755,0.853269783099155,0.6308298208487099,0.24626463087264716,0.029008749360223907,0.677435448876059,0.5221301177422768,0.7675084251638096,0.5947816955234216,0.03714407508104234,0.9186087336735845,0.63117647971764,0.3486207788182911,0.6516647264386315,0.7886520362669762,0.5269667124146713,0.9800736806197523,0.27213435708538636,0.35773071994649375,0.45486476977823453,0.30185297722284254,0.9401516775705118,0.8683392331518752,0.7947846706058684,0.6251937585853585,0.8566054365275764,0.28008695144525986,0.7873215541254115,0.6089329663824388,0.7713073562524957,0.06967853120306389,0.869044267421696,0.659904066456874,0.9642309335233745,0.8063507096257412,0.6426635036073884,0.48587799388074127,0.36680042269039104,0.44761254814037676,0.7269347871571306,0.561723369384023,0.052750615296928705,0.5852126785925853,0.6299926572136431,0.9661332420926544,0.7537668878326035,0.37802549860341084,0.891530446458943,0.685847517057035,0.34482824707807935,0.7626736905825136,0.7326783990994995,0.6086202653960858,0.16650244808109604,0.12425449859187632,0.7166869456899227,0.903835324512445,0.8662859174435387,0.6724706720217466,0.5629959890251774,0.9021631975196283,0.16110917350687104,0.7476860900744738,0.5008409638928786,0.14434728410556952,0.6421661332964309,0.6040314486980403,0.7876673373681502,0.8463499427807682,0.3292897001206796,0.9422175910376421,0.3053604433578303,0.612320069755114,0.46142456540268073,0.6273381519347382,0.5574768404431236,0.2209430992552378,0.7201113490045766,0.3986415297242325,0.703420583133203,0.511243264345415,0.03220340383246112,0.5053256055245022,0.14860320609182687,0.4350164048761058,0.4562639636361059,0.8665595165260458,0.3748548254215538,0.86949067502351,0.7904125146380989,0.05097166875719439,0.630655720085476,0.704543848317112,0.937305625106222],"y":[0.6103107997275282,0.4003970711221265,0.9568270666596149,0.6802994246160545,0.8748869642272499,0.4633247987844422,0.15546353773812327,0.21434823639059775,0.2916321920612458,0.09917250787576004,0.7864963659850559,0.5693064459965707,0.8767482306428109,0.5879960375705664,0.45786039469900763,0.6547899870720882,0.07230845078646597,0.20554746245288869,0.9056082831060241,0.4648015985049273,0.29263926638902205,0.06959945053639449,0.9499369876775056,0.4131676124761585,0.39680577734727396,0.5685757767001414,0.49786400424921806,0.9850116677669897,0.6209141790580078,0.5957831752789792,0.28199043440616156,0.9993954037600641,0.22170299953097183,0.010579899477965005,0.8915318746673734,0.8336453152423073,0.5783850116742076,0.954751028585664,0.23933164466183499,0.9157360536001847,0.5777246502326009,0.5590761355640317,0.09896360260952874,0.07657960780866169,0.06627076881114968,0.6768519027706235,0.08382715254005235,0.1669332455843351,0.9476250596479661,0.052245685684627285,0.3320851133040372,0.902139501714924,0.6358216977870556,0.29987693895518763,0.6362554329445524,0.3598506390510292,0.1280632305649747,0.7315457882196454,0.5127911065179686,0.7829633807643033,0.1400997484166273,0.7955718259287994,0.2143897012757513,0.21905646672823487,0.6985552305854886,0.07922463385720802,0.1834708522043217,0.23904310721039568,0.8002737973625061,0.005987581604137038,0.5115235355470943,0.40590218343396545,0.42564300366749064,0.8646579474846364,0.24507790613529445,0.6601587932334928,0.9935663621928272,0.6843492534779512,0.20251613542184577,0.5966260667473566,0.24467798026557286,0.6124145702286364,0.6086600026362012,0.5269466454911108,0.42264175163922735,0.18354700502918575,0.06859469106404403,0.3644240372460116,0.38663887474828595,0.4468837155639329,0.026611669377773706,0.7096964265168386,0.2768925129267924,0.6026418397137874,0.6202173086018238,0.007905650296194722,0.15781027018217186,0.32213758627762923,0.6989325290170574,0.2635294436268586,0.18825970939578152,0.3743993021384454,0.10657444751019518,0.6294222471783216,0.6733088629295756,0.3307871044624776,0.586640343338113,0.4344489701982507,0.6414194218260518,0.26988907018410535,0.42920002240408406,0.4976788757057172,0.9380114551312607,0.31288301918839223,0.3290803392345176,0.4365516967570584,0.1090709600985883,0.35715437327553257,0.7175355543891776,0.3742855919418241,0.29998659385405835,0.3712672194007618,0.872927478691228,0.037679101778373525,0.3289895226771923,0.0813071549379939,0.4406732983776126,0.3998530913313243,0.4212667248907911,0.6727489667532703,0.5650628453622967,0.40169748248852166,0.7539914748494536,0.2729350741971658,0.6816779744426382,0.33073944155390855,0.2982861242667807,0.5585578929128568,0.7988258335502131,0.8548573606037267,0.5918600359015654,0.05622769490367552,0.7280444170488101,0.8661715854104719,0.05218965553523802,0.02594009367027328,0.6145838717212231,0.14622605720535609,0.7325599071117749,0.24720892831971952,0.6771224045721544,0.21817380362675431,0.7153059324496078,0.4228269593860534,0.3543511732060469,0.3944088434502051,0.3782927881750532,0.33192788336723866,0.4768555750432101,0.2637329021117877,0.26688682665460484,0.7724182006167604,0.5395499616904789,0.4631743241882308,0.414680820215375,0.03308302775534688,0.8961783014331367,0.6547583176167258,0.3017569206354681,0.13226757741080908,0.7977109157950661,0.923445852958305,0.9871318845698792,0.9827985758399969,0.8308480131560935,0.9992984367556508,0.768105808166032,0.48787661866750964,0.8259680209033665,0.7581318497368748,0.5399855961105972,0.9917795040732141,0.9154115313316475,0.8104341132886561,0.9307997352932056,0.3897726125599459,0.5741251293889107,0.8161399980104311,0.00441419649421948,0.13468366221572536,0.7180907054954786,0.7454080836882847,0.2763242019993709,0.41698231651379636,0.8928824750551434,0.6042487151609326,0.02010261859634599,0.8473436626753296,0.7668507062565654,0.45968095199638503,0.2912420222284069,0.15365173830168866,0.41805515153922546,0.9362927464957297,0.46600850538972627,0.5152214025078531,0.6772222749402089,0.009217307716290812,0.7061150082222653,0.79021753570585,0.35599787457275966,0.09534841408093764,0.8580797387132162,0.32205399837331183,0.854947802045902,0.5019709206009002,0.6947216017980884,0.3994384789855565,0.4819487016306062,0.4377293256800453,0.26188421545248863,0.8098656997371017,0.22194901212846918,0.4110873128670596,0.030482143758366442,0.9117416554078837,0.33046361035030314,0.9833872210265542,0.8024067202125709,0.6795777041982703,0.5183726792027858,0.4471722268471502,0.3708740802563617,0.695092469668631,0.4642928321351788,0.16946986186363577,0.7520194709975613,0.8685308905097385,0.5946949455250077,0.41446466214164823,0.9422223865941242,0.12408580698714489,0.9532509264652611,0.849544481858428,0.9803511379957414,0.3628025442341549,0.5405349448827383,0.344389804486133,0.4152155727892156,0.5085514206853421,0.7627114121692137,0.3760024048811159,0.7358885170969621,0.22863909114154268,0.7704341193240758,0.6859236941861869,0.2473353259182549,0.4310237195776918,0.5492505774290195,0.904953786762315,0.8602460234724668,0.6900637308185826,0.0871832786983654,0.6453851234017007,0.7224097391991552,0.5046303337339054,0.8958559885167459,0.31917090739953546,0.9773657770718792,0.5325652335104736,0.45405837698815665,0.7432582920338107,0.8254966240237644,0.06837527488745443,0.1886551269129455,0.8320677129722213,0.34476487230526165,0.6446571321221456,0.9139946914912447,0.5279821878570967,0.1672365557496719,0.32050743893671896,0.9012015289315767,0.5469772943370095,0.5259761339872194,0.9475829153477493,0.9768854975694634,0.36315995383220956,0.7226447924038363,0.5154789439570152,0.9916133460168945,0.6939290449914343,0.2600799052745908,0.7982877166832254,0.08353488145456411,0.6863189812993257,0.3599988162290987,0.3494437195062633,0.18781587907430708,0.14461167831638344,0.9381959911467496,0.7369013534113588,0.7773484552221043,0.4950763973625735,0.7631373063376673,0.08444474139867886,0.4601658280486185,0.9253204371843536,0.20025618720480498,0.6859264501015616,0.9913386458664009,0.7019253153286432,0.13592553647514893,0.5436752418333071,0.8855671547469037,0.5899886948830191,0.7679894921706467,0.3372643050997486,0.49749004898010984,0.5934178292056261,0.47892294025466575,0.9208295606735605,0.17566111761962466,0.8746193496546975,0.841243106167534,0.21907319732636876,0.13361569131712747,0.3037672649617511,0.8631368422761866,0.859129600372572,0.9372488600472179,0.5582795813865975,0.46056484547821563,0.41438481716423514,0.570164453171059,0.8651149151934593,0.5308387448535272,0.22752427432642908,0.5915895998908949,0.74595656011054,0.6751822480485465,0.7280571862451091,0.8396988099570468,0.6392519814308382,0.3104984956593112,0.19685878028014192,0.7669286948452875,0.8614000633027632,0.8524226292050392,0.4628981713024838,0.2874511413792299,0.3811172742438652,0.7820054793850791,0.4667429429419909,0.3738797748080429,0.9323516602435808,0.44929122108189334,0.30749006751877617,0.7969539496350352,0.04627557570162144,0.7116685610159311,0.7615983177100144,0.1796977628211187,0.4691351870476267,0.2270031534589424,0.4543751903830675,0.9158098046165911,0.8362481379349912,0.391039907913559,0.5899721480417442,0.9931311608410242,0.7210271496606788,0.023218196603058683,0.2524473453796974,0.8140048561214566,0.5344600210183372,0.8998518474525683,0.702480805383017,0.010188159770391558,0.28032388739166814,0.739510550019218,0.6966511953387474,0.2537291754314547,0.6103846019779056,0.8375812653006214,0.6547714880177244,0.3858620535074715,0.7787997003627699,0.044786636383107536,0.6316844399537656,0.7453241587892321,0.16895598459280292,0.2329114846865279,0.5890776038802922,0.28194951507761845,0.7824033612050924,0.596902488472205,0.5981595881693897,0.12798349674970821,0.34575197357000775,0.5769051344944189,0.9351884112995722,0.23742236974188424,0.6127497837097152,0.5038485121493712,0.4809413075373531,0.21866599667607056,0.9708040591258728,0.9780005251567727,0.8821732700211352,0.783313169820914,0.4685492833188044,0.8512983178535706,0.8160643225213887,0.17203701760391532,0.3110921852791205,0.13515740094156437,0.6307456471648984,0.9907449603614813,0.16374589528379724,0.9430191505802454,0.6632994760913108,0.2888889376731709,0.348637693170023,0.2303529857462836,0.0783921224438402,0.7707758771292638,0.33869653747934436,0.5977304572385583,0.9401978539117843,0.8187554785651137,0.9402171543521701,0.1888178000159385,0.7445827284731267,0.052539564697680285,0.7715862050203098,0.7412961784148482,0.3590694646193133,0.3875633184008247,0.7744331735547939,0.5178680982052902,0.34661053935632846,0.8996946874264998,0.4965418358315006,0.6577842181123609,0.31617945178403295,0.3760320774110434,0.43714491235514985,0.03826601390980111,0.7727145700862236,0.12525261634980156,0.3412047636579305,0.9834201261916445,0.40356305031549666,0.23352864817030483,0.3884256622338069,0.46091476643702134,0.15567056393867307,0.5854217383564811,0.6555185376522956,0.13547482640944508,0.9530888107186751,0.7407304985702668,0.7922958392564401,0.6205660640423608,0.8223326645311203,0.7292258191414256,0.24635060385708452,0.9551030955698001,0.014245108173674081,0.7917483797967827,0.018060578629013002,0.0877514209831114,0.9169471786076202,0.20181700206129738,0.5160096530999443,0.3851832562200389,0.7894581555296428,0.7653784057582425,0.10825073234005833,0.7717972304269648,0.8139527592327144,0.6890018215614666,0.2562455180562877,0.35538200961993327,0.939595070037846,0.41151378060775734,0.6504963079447795,0.632617818610255,0.19739820243894957,0.5124002552254362,0.19096984268995765,0.09685376286673097,0.3876232447212634,0.30190791595479205,0.9548582768839811,0.02433922344793027,0.03353447403152254,0.248286109724852,0.5203393660190038]}},"id":"09d79273-b2ae-4999-ac14-c4478910c30e","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"2f1e1b13-c6a0-4349-a6ac-5f599306bba8","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"51f163b7-b179-4acc-97e3-e32385360d95","type":"LassoSelectTool"}]},"id":"152ee4b1-3674-42f2-b467-518c1f3ccc82","type":"Toolbar"},{"attributes":{"args":{"s2":{"id":"adb20691-e289-4a72-8b3a-c028ebd1e383","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected[&#x27;1d&#x27;].indices;\\n        var d = cb_obj.data;\\n        var ym = 0\\n\\n        if (inds.length == 0) { return; }\\n\\n        for (i = 0; i &lt; d[&#x27;color&#x27;].length; i++) {\\n            d[&#x27;color&#x27;][i] = \\"navy\\"\\n        }\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d[&#x27;color&#x27;][inds[i]] = \\"firebrick\\"\\n            ym += d[&#x27;y&#x27;][inds[i]]\\n        }\\n\\n        ym /= inds.length\\n        s2.data[&#x27;ym&#x27;] = [ym, ym]\\n\\n        cb_obj.change.emit();\\n        s2.change.emit();\\n    "},"id":"01931a1c-52eb-4d66-8215-8ce4394b6b33","type":"CustomJS"},{"attributes":{"dimension":1,"plot":{"id":"ac059658-5b95-420d-9713-45c98172731d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6096d660-52ba-4a5c-9afe-ac6dd286c551","type":"BasicTicker"}},"id":"ee96117b-bad3-4093-a0f2-ce50ce12084d","type":"Grid"},{"attributes":{},"id":"ba06e647-ff19-421a-b3ce-b9237d81442a","type":"LinearScale"},{"attributes":{},"id":"6096d660-52ba-4a5c-9afe-ac6dd286c551","type":"BasicTicker"},{"attributes":{},"id":"ed6f4b1b-e4f9-4f8f-af9a-efb206176072","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"09d79273-b2ae-4999-ac14-c4478910c30e","type":"ColumnDataSource"},"glyph":{"id":"8c16691c-139a-4b6c-b274-16db4286abed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"810c27dd-ffb8-49bb-bdf3-0473297f4c6a","type":"Circle"},"selection_glyph":null,"view":{"id":"3b03decc-ced7-492e-9af6-eeb434701c06","type":"CDSView"}},"id":"f690c3ac-9ed1-40ce-ac3b-a42f195d7659","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Select Here"},"id":"25a49032-ff14-40c6-b81b-c8c57a9738ed","type":"Title"},{"attributes":{"plot":{"id":"ac059658-5b95-420d-9713-45c98172731d","subtype":"Figure","type":"Plot"},"ticker":{"id":"7cba1a75-9cc6-40dd-9320-ae20ed5d30f8","type":"BasicTicker"}},"id":"76bf6f8c-b1c6-4ee6-b973-fd5f246aaf65","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"0cc58e62-3a70-497a-82a5-f6c29872b4f1","type":"Line"},{"attributes":{},"id":"7cba1a75-9cc6-40dd-9320-ae20ed5d30f8","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c16691c-139a-4b6c-b274-16db4286abed","type":"Circle"},{"attributes":{"source":{"id":"09d79273-b2ae-4999-ac14-c4478910c30e","type":"ColumnDataSource"}},"id":"3b03decc-ced7-492e-9af6-eeb434701c06","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"810c27dd-ffb8-49bb-bdf3-0473297f4c6a","type":"Circle"},{"attributes":{},"id":"aba93648-db8f-48cc-ba09-f40363e5bfac","type":"LinearScale"},{"attributes":{"source":{"id":"adb20691-e289-4a72-8b3a-c028ebd1e383","type":"ColumnDataSource"}},"id":"aa84f3de-5006-4ae9-a0b0-6e3b7df65e13","type":"CDSView"},{"attributes":{"formatter":{"id":"ed6f4b1b-e4f9-4f8f-af9a-efb206176072","type":"BasicTickFormatter"},"plot":{"id":"ac059658-5b95-420d-9713-45c98172731d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6096d660-52ba-4a5c-9afe-ac6dd286c551","type":"BasicTicker"}},"id":"962a932b-f314-4a18-bb7e-c0065bd1c544","type":"LinearAxis"}],"root_ids":["ac059658-5b95-420d-9713-45c98172731d"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"5865d3fb-838c-4fc6-9835-a7e699a456a8","elementid":"bc89dfd3-a5a9-4527-af16-da021c53b272","modelid":"ac059658-5b95-420d-9713-45c98172731d"}];
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