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
      };var element = document.getElementById("cd07d784-84b9-47ac-965d-955fbcafc319");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd07d784-84b9-47ac-965d-955fbcafc319' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8bb6dcc8-ca81-43a0-9002-41caef0448ce":{"roots":{"references":[{"attributes":{},"id":"11cecc0e-3eee-4210-ba1e-d96662fdd030","type":"HelpTool"},{"attributes":{"below":[{"id":"1733433c-78af-429f-8ca0-1dec8b727de3","type":"LinearAxis"}],"left":[{"id":"f4ffc0e3-612f-4776-ac7f-3feca9abce31","type":"LinearAxis"}],"renderers":[{"id":"1733433c-78af-429f-8ca0-1dec8b727de3","type":"LinearAxis"},{"id":"2e93c020-0bb7-49ba-8392-fa1f0d4370b9","type":"Grid"},{"id":"f4ffc0e3-612f-4776-ac7f-3feca9abce31","type":"LinearAxis"},{"id":"3ade013a-b8b8-41ea-9622-ae06978c74ad","type":"Grid"},{"id":"261815f7-56c7-4ec2-98ef-270f138ac796","type":"BoxAnnotation"},{"id":"b463c28a-6bd0-46ce-941f-6b72fa8778b0","type":"GlyphRenderer"}],"title":{"id":"f33d8312-967f-4d38-813c-40b8132e919c","type":"Title"},"toolbar":{"id":"c2982c94-61cf-40c4-9b0c-b416312be89b","type":"Toolbar"},"x_range":{"id":"b9839b00-0f2c-4b71-82cc-5a5a34ffff79","type":"Range1d"},"x_scale":{"id":"a7656013-22d9-4de8-a272-6f11378b2994","type":"LinearScale"},"y_range":{"id":"117db3eb-fc0a-423b-9fac-fc77fa42f01d","type":"Range1d"},"y_scale":{"id":"dd949f82-7da4-4a73-9980-af00efdd1051","type":"LinearScale"}},"id":"7fbb10c6-e5be-455d-82c0-e7842cc8d344","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8d156a63-5c6c-43c8-9e59-a622d1c170fb","type":"BasicTickFormatter"},{"attributes":{},"id":"4c5d687d-3852-4cc7-b614-a3e508834b14","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"886aaf12-8fcc-4d35-9ac8-158d27a71bdd","type":"Patches"},{"attributes":{},"id":"56f1487c-f395-4c62-a10a-f97e4dab8142","type":"BasicTickFormatter"},{"attributes":{},"id":"33c8990b-b18e-4c6e-8a37-f691492100ae","type":"WheelZoomTool"},{"attributes":{},"id":"dd949f82-7da4-4a73-9980-af00efdd1051","type":"LinearScale"},{"attributes":{},"id":"eeb60ce2-8efa-4e3f-b509-0c6d8150b07e","type":"BasicTicker"},{"attributes":{"callback":null,"end":800},"id":"117db3eb-fc0a-423b-9fac-fc77fa42f01d","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"261815f7-56c7-4ec2-98ef-270f138ac796","type":"BoxAnnotation"},{"attributes":{},"id":"a7656013-22d9-4de8-a272-6f11378b2994","type":"LinearScale"},{"attributes":{"formatter":{"id":"56f1487c-f395-4c62-a10a-f97e4dab8142","type":"BasicTickFormatter"},"plot":{"id":"7fbb10c6-e5be-455d-82c0-e7842cc8d344","subtype":"Figure","type":"Plot"},"ticker":{"id":"eeb60ce2-8efa-4e3f-b509-0c6d8150b07e","type":"BasicTicker"}},"id":"f4ffc0e3-612f-4776-ac7f-3feca9abce31","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"f33d8312-967f-4d38-813c-40b8132e919c","type":"Title"},{"attributes":{},"id":"0d0c207f-07f2-4536-9f08-d213eb233468","type":"ResetTool"},{"attributes":{"source":{"id":"715fee21-e85f-45e7-91f9-112bcfc12a77","type":"ColumnDataSource"}},"id":"49649037-879b-466d-aa46-c6b36cb060c0","type":"CDSView"},{"attributes":{},"id":"158e2263-fa35-4b30-869b-fd3af0f57378","type":"PanTool"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"7fbb10c6-e5be-455d-82c0-e7842cc8d344","subtype":"Figure","type":"Plot"},"ticker":{"id":"4c5d687d-3852-4cc7-b614-a3e508834b14","type":"BasicTicker"}},"id":"2e93c020-0bb7-49ba-8392-fa1f0d4370b9","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"ac3d7cfb-849d-4582-942d-028bd144ce4f","type":"Patches"},{"attributes":{"overlay":{"id":"261815f7-56c7-4ec2-98ef-270f138ac796","type":"BoxAnnotation"}},"id":"5f927f82-67e4-47ca-8771-7a6fee80dac6","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"715fee21-e85f-45e7-91f9-112bcfc12a77","type":"ColumnDataSource"},"glyph":{"id":"886aaf12-8fcc-4d35-9ac8-158d27a71bdd","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ac3d7cfb-849d-4582-942d-028bd144ce4f","type":"Patches"},"selection_glyph":null,"view":{"id":"49649037-879b-466d-aa46-c6b36cb060c0","type":"CDSView"}},"id":"b463c28a-6bd0-46ce-941f-6b72fa8778b0","type":"GlyphRenderer"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"7fbb10c6-e5be-455d-82c0-e7842cc8d344","subtype":"Figure","type":"Plot"},"ticker":{"id":"eeb60ce2-8efa-4e3f-b509-0c6d8150b07e","type":"BasicTicker"}},"id":"3ade013a-b8b8-41ea-9622-ae06978c74ad","type":"Grid"},{"attributes":{"formatter":{"id":"8d156a63-5c6c-43c8-9e59-a622d1c170fb","type":"BasicTickFormatter"},"plot":{"id":"7fbb10c6-e5be-455d-82c0-e7842cc8d344","subtype":"Figure","type":"Plot"},"ticker":{"id":"4c5d687d-3852-4cc7-b614-a3e508834b14","type":"BasicTicker"}},"id":"1733433c-78af-429f-8ca0-1dec8b727de3","type":"LinearAxis"},{"attributes":{},"id":"3d42ecb1-e61f-4cf4-96a6-6d15fec8e96e","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEpAAAAAAAAAKEAAAAAAAABOQAAAAAAAgExAAAAAAAAASUAAAAAAAABPQAAAAAAAwFdAAAAAAACAU0AAAAAAAAAsQAAAAAAAAEJAAAAAAABAUkAAAAAAAMBSQAAAAAAAADRAAAAAAACAUkAAAAAAAAA+QAAAAAAAAD9AAAAAAAAAJkAAAAAAAABFQAAAAAAAAEhAAAAAAACAV0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAV0AAAAAAAABIQAAAAAAAAEVAAAAAAAAAJkAAAAAAAAA/QAAAAAAAAD5AAAAAAACAUkAAAAAAAAA0QAAAAAAAwFJAAAAAAABAUkAAAAAAAABCQAAAAAAAACxAAAAAAACAU0AAAAAAAMBXQAAAAAAAAE9AAAAAAAAASUAAAAAAAIBMQAAAAAAAAE5AAAAAAAAAKEAAAAAAAABKQAAAAAAAAFtAAAAAAAAARUAAAAAAAOBiQAAAAAAAgFNAAAAAAACAX0AAAAAAAIBSQAAAAAAAIGNAAAAAAACAXkAAAAAAAABFQAAAAAAAwF5AAAAAAACgYUAAAAAAAGBhQAAAAAAAAExAAAAAAACAY0AAAAAAAMBXQAAAAAAAwFFAAAAAAABAW0AAAAAAAIBdQAAAAAAAwGBAAAAAAACAYUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAYUAAAAAAAMBgQAAAAAAAgF1AAAAAAABAW0AAAAAAAMBRQAAAAAAAwFdAAAAAAACAY0AAAAAAAABMQAAAAAAAYGFAAAAAAACgYUAAAAAAAMBeQAAAAAAAAEVAAAAAAACAXkAAAAAAACBjQAAAAAAAgFJAAAAAAACAX0AAAAAAAIBTQAAAAAAA4GJAAAAAAAAARUAAAAAAAABbQAAAAAAAgF5AAAAAAACAYUAAAAAAAOBmQAAAAAAAwFxAAAAAAADgYUAAAAAAAEBiQAAAAAAAgGZAAAAAAACAYEAAAAAAAMBVQAAAAAAAQGZAAAAAAADAaUAAAAAAAMBsQAAAAAAAgFhAAAAAAABAaUAAAAAAAEBfQAAAAAAAIGBAAAAAAABgZEAAAAAAAKBnQAAAAAAAoGNAAAAAAACAbUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAbUAAAAAAAKBjQAAAAAAAoGdAAAAAAABgZEAAAAAAACBgQAAAAAAAQF9AAAAAAABAaUAAAAAAAIBYQAAAAAAAwGxAAAAAAADAaUAAAAAAAEBmQAAAAAAAwFVAAAAAAACAYEAAAAAAAIBmQAAAAAAAQGJAAAAAAADgYUAAAAAAAMBcQAAAAAAA4GZAAAAAAACAYUAAAAAAAIBeQAAAAAAA4GdAAAAAAADga0AAAAAAAIBsQAAAAAAAoGNAAAAAAAAgZ0AAAAAAAKBmQAAAAAAAAG9AAAAAAADAbEAAAAAAAKBgQAAAAAAAIG9AAAAAAABwcEAAAAAAAOBuQAAAAAAAAF5AAAAAAACgakAAAAAAAABhQAAAAAAAwGZAAAAAAAAgcEAAAAAAAABtQAAAAAAAIGpAAAAAAACwcEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACwcEAAAAAAACBqQAAAAAAAAG1AAAAAAAAgcEAAAAAAAMBmQAAAAAAAAGFAAAAAAACgakAAAAAAAABeQAAAAAAA4G5AAAAAAABwcEAAAAAAACBvQAAAAAAAoGBAAAAAAADAbEAAAAAAAABvQAAAAAAAoGZAAAAAAAAgZ0AAAAAAAKBjQAAAAAAAgGxAAAAAAADga0AAAAAAAOBnQAAAAAAAAG5AAAAAAABgcUAAAAAAAABzQAAAAAAAoGlAAAAAAADAaUAAAAAAABBxQAAAAAAA0HNAAAAAAACAbkAAAAAAAOBqQAAAAAAAYHRAAAAAAADAckAAAAAAAOByQAAAAAAAIGpAAAAAAADAbkAAAAAAAKBjQAAAAAAAwG5AAAAAAABQdUAAAAAAAABzQAAAAAAAIHJAAAAAAADgdEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADgdEAAAAAAACByQAAAAAAAAHNAAAAAAABQdUAAAAAAAMBuQAAAAAAAoGNAAAAAAADAbkAAAAAAACBqQAAAAAAA4HJAAAAAAADAckAAAAAAAGB0QAAAAAAA4GpAAAAAAACAbkAAAAAAANBzQAAAAAAAEHFAAAAAAADAaUAAAAAAAKBpQAAAAAAAAHNAAAAAAABgcUAAAAAAAABuQAAAAAAAYHRAAAAAAACQdUAAAAAAANB3QAAAAAAAAHNAAAAAAABgbUAAAAAAAFByQAAAAAAAsHVAAAAAAACAc0AAAAAAACBzQAAAAAAAEHdAAAAAAACwdEAAAAAAAHB4QAAAAAAAoG5AAAAAAACQcEAAAAAAAOBtQAAAAAAAIHVAAAAAAAAwe0AAAAAAALB0QAAAAAAAUHVAAAAAAABgeUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgeUAAAAAAAFB1QAAAAAAAsHRAAAAAAAAwe0AAAAAAACB1QAAAAAAA4G1AAAAAAACQcEAAAAAAAKBuQAAAAAAAcHhAAAAAAACwdEAAAAAAABB3QAAAAAAAIHNAAAAAAACAc0AAAAAAALB1QAAAAAAAUHJAAAAAAABgbUAAAAAAAABzQAAAAAAA0HdAAAAAAACQdUAAAAAAAGB0QAAAAAAAQHlAAAAAAABAdkAAAAAAAGB7QAAAAAAAkHVAAAAAAACwcEAAAAAAACB4QAAAAAAAEHpAAAAAAACQdEAAAAAAAFB5QAAAAAAAwHlAAAAAAACgeUAAAAAAALB7QAAAAAAAkHFAAAAAAADwcUAAAAAAAKB0QAAAAAAAkHhAAAAAAADQfUAAAAAAAIB3QAAAAAAAMHhAAAAAAADwfUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADwfUAAAAAAADB4QAAAAAAAgHdAAAAAAADQfUAAAAAAAJB4QAAAAAAAoHRAAAAAAADwcUAAAAAAAJBxQAAAAAAAsHtAAAAAAACgeUAAAAAAAMB5QAAAAAAAUHlAAAAAAACQdEAAAAAAABB6QAAAAAAAIHhAAAAAAACwcEAAAAAAAJB1QAAAAAAAYHtAAAAAAABAdkAAAAAAAEB5QAAAAAAAEH5AAAAAAACwd0AAAAAAABiAQAAAAAAA0HpAAAAAAAAgckAAAAAAAOB7QAAAAAAAgH9AAAAAAACQd0AAAAAAAEB6QAAAAAAAwHpAAAAAAACgfEAAAAAAADiAQAAAAAAAwHdAAAAAAADAdEAAAAAAAJB6QAAAAAAAgHxAAAAAAAAAf0AAAAAAALB4QAAAAAAAYH5AAAAAAAD4gUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAD4gUAAAAAAAGB+QAAAAAAAsHhAAAAAAAAAf0AAAAAAAIB8QAAAAAAAkHpAAAAAAADAdEAAAAAAAMB3QAAAAAAAOIBAAAAAAACgfEAAAAAAAMB6QAAAAAAAQHpAAAAAAACQd0AAAAAAAIB/QAAAAAAA4HtAAAAAAAAgckAAAAAAANB6QAAAAAAAGIBAAAAAAACwd0AAAAAAABB+QAAAAAAAQH9AAAAAAACQfEAAAAAAAJiBQAAAAAAAMH5AAAAAAABAdkAAAAAAAPCAQAAAAAAAoIJAAAAAAACweEAAAAAAALB/QAAAAAAAIH1AAAAAAACQf0AAAAAAABCCQAAAAAAAQHlAAAAAAADgdkAAAAAAAIB9QAAAAAAA0H5AAAAAAAB4gkAAAAAAAEB6QAAAAAAAmIBAAAAAAACwgkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACwgkAAAAAAAJiAQAAAAAAAQHpAAAAAAAB4gkAAAAAAANB+QAAAAAAAgH1AAAAAAADgdkAAAAAAAEB5QAAAAAAAEIJAAAAAAACQf0AAAAAAACB9QAAAAAAAsH9AAAAAAACweEAAAAAAAKCCQAAAAAAA8IBAAAAAAABAdkAAAAAAADB+QAAAAAAAmIFAAAAAAACQfEAAAAAAAEB/QAAAAAAAAIBAAAAAAADAfkAAAAAAAOiCQAAAAAAAGIFAAAAAAACweEAAAAAAANiBQAAAAAAA+INAAAAAAACgfUAAAAAAAEiAQAAAAAAASIFAAAAAAACogkAAAAAAAHiDQAAAAAAAkHpAAAAAAABQe0AAAAAAADCBQAAAAAAAoH9AAAAAAADwgkAAAAAAALB7QAAAAAAA2IJAAAAAAABohUA=","dtype":"float64","shape":[40]}]}},"id":"715fee21-e85f-45e7-91f9-112bcfc12a77","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"158e2263-fa35-4b30-869b-fd3af0f57378","type":"PanTool"},{"id":"33c8990b-b18e-4c6e-8a37-f691492100ae","type":"WheelZoomTool"},{"id":"5f927f82-67e4-47ca-8771-7a6fee80dac6","type":"BoxZoomTool"},{"id":"3d42ecb1-e61f-4cf4-96a6-6d15fec8e96e","type":"SaveTool"},{"id":"0d0c207f-07f2-4536-9f08-d213eb233468","type":"ResetTool"},{"id":"11cecc0e-3eee-4210-ba1e-d96662fdd030","type":"HelpTool"}]},"id":"c2982c94-61cf-40c4-9b0c-b416312be89b","type":"Toolbar"},{"attributes":{"callback":null,"end":19},"id":"b9839b00-0f2c-4b71-82cc-5a5a34ffff79","type":"Range1d"}],"root_ids":["7fbb10c6-e5be-455d-82c0-e7842cc8d344"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"8bb6dcc8-ca81-43a0-9002-41caef0448ce","elementid":"cd07d784-84b9-47ac-965d-955fbcafc319","modelid":"7fbb10c6-e5be-455d-82c0-e7842cc8d344"}];
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