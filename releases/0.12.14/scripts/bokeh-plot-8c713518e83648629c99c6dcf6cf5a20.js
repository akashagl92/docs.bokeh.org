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
      };var element = document.getElementById("d4db0766-35e0-4a1d-8c3a-21bf6bf40597");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd4db0766-35e0-4a1d-8c3a-21bf6bf40597' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1db3387e-71ef-425c-892c-8b2876148c1f":{"roots":{"references":[{"attributes":{},"id":"aa49178c-8d02-434a-bad8-b3ab7f29c4cc","type":"ResetTool"},{"attributes":{},"id":"89f0146d-41f4-44d8-803b-c055c3e4a7ff","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1a68f5c4-60cc-40d6-9185-18e9f24cad1e","type":"PanTool"},{"id":"1bbfaa5c-76bd-49a5-8fd8-58af13586dc9","type":"WheelZoomTool"},{"id":"81406144-8af9-4937-8f05-f4a069199144","type":"BoxZoomTool"},{"id":"7b7623db-db49-4a83-a3b0-880b8fa3da31","type":"SaveTool"},{"id":"aa49178c-8d02-434a-bad8-b3ab7f29c4cc","type":"ResetTool"},{"id":"b2845621-5b38-480a-856f-9f2db076cc44","type":"HelpTool"}]},"id":"d0672df0-f04f-4635-b0ed-b7ea521610bc","type":"Toolbar"},{"attributes":{},"id":"13f3c5a2-19ab-47b2-9c65-55750821ae62","type":"HelpTool"},{"attributes":{"below":[{"id":"a7f7a882-6fa0-4432-9869-47b705bee8a9","type":"LinearAxis"}],"left":[{"id":"637bffd1-aed6-44b6-bf15-3d21b371cf24","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a7f7a882-6fa0-4432-9869-47b705bee8a9","type":"LinearAxis"},{"id":"e44cca26-4418-4a74-995c-f8130ecb9278","type":"Grid"},{"id":"637bffd1-aed6-44b6-bf15-3d21b371cf24","type":"LinearAxis"},{"id":"aa28e600-351b-4614-b43b-94f62e23c074","type":"Grid"},{"id":"06f8523f-c435-402b-a447-75867c743b29","type":"BoxAnnotation"},{"id":"e51008a9-5223-4a15-9d00-29cefd9d32a2","type":"GlyphRenderer"}],"title":{"id":"a8919514-4c16-468a-bfb3-39d98782ffa2","type":"Title"},"toolbar":{"id":"d0672df0-f04f-4635-b0ed-b7ea521610bc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f0f06db8-4ad8-4cd6-a085-22dfafc979bc","type":"DataRange1d"},"x_scale":{"id":"0b469247-10b6-46d2-8a3a-2ffbe561f161","type":"LinearScale"},"y_range":{"id":"9e136e87-fa65-499b-8679-66c30eec1d9b","type":"DataRange1d"},"y_scale":{"id":"da852fab-4dbd-425e-ac98-e122c0711e77","type":"LinearScale"}},"id":"d2d3116b-c86e-46bf-8d18-a962cc687cb9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d2d3116b-c86e-46bf-8d18-a962cc687cb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"7706fca0-b2a2-4050-ad60-cd92915a161a","type":"BasicTicker"}},"id":"e44cca26-4418-4a74-995c-f8130ecb9278","type":"Grid"},{"attributes":{"callback":null},"id":"f0f06db8-4ad8-4cd6-a085-22dfafc979bc","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"930f425d-cf2d-407b-93b1-47ba9dfbf693","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5b2ae76a-a48c-4109-87f7-32206456cfed","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"06f8523f-c435-402b-a447-75867c743b29","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"7126c2d5-6380-4e5c-9b6d-4dc66277668a","type":"ToolbarBox"},{"id":"4372b960-71f4-4f82-9b8b-dc10aeb69205","type":"Column"}]},"id":"b5438b57-6fea-43a1-bf25-c3e814556f34","type":"Column"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffd81aa1-7f8d-432f-8b68-5cd09961b56d","type":"Square"},{"attributes":{"plot":null,"text":""},"id":"a8919514-4c16-468a-bfb3-39d98782ffa2","type":"Title"},{"attributes":{"children":[{"id":"d2d3116b-c86e-46bf-8d18-a962cc687cb9","subtype":"Figure","type":"Plot"}]},"id":"c18b9d26-cfc8-46f2-a59d-6e98250e352c","type":"Row"},{"attributes":{},"id":"b8a44109-de62-4e39-b277-776f83f46c0b","type":"BasicTickFormatter"},{"attributes":{},"id":"d62caaa0-71a2-422c-abb2-9e6df6a2d478","type":"BasicTickFormatter"},{"attributes":{},"id":"1c7f54d2-ca7a-4d2c-8cad-841f7d7c1f10","type":"BasicTickFormatter"},{"attributes":{},"id":"d81ba1c3-6da8-48c7-b452-eb9e05ae1662","type":"SaveTool"},{"attributes":{},"id":"085ddf43-9175-481e-ba65-a5fa28064599","type":"BasicTickFormatter"},{"attributes":{},"id":"1a68f5c4-60cc-40d6-9185-18e9f24cad1e","type":"PanTool"},{"attributes":{"source":{"id":"ee4fdf51-e108-4d1f-a353-de2b6646a997","type":"ColumnDataSource"}},"id":"1a5997af-b5a3-4b22-9a6c-02a33a1dca6e","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f7dce6d-6dfd-43ea-b034-c87e7a8b699a","type":"Circle"},{"attributes":{"formatter":{"id":"d62caaa0-71a2-422c-abb2-9e6df6a2d478","type":"BasicTickFormatter"},"plot":{"id":"c5442308-9347-4b1e-839d-9a8397cb2387","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8a4529a-3a80-43d9-8fbd-f5b61993ede9","type":"BasicTicker"}},"id":"0ec79b95-3e55-48b0-a3c0-80c19a640cc6","type":"LinearAxis"},{"attributes":{"tools":[{"id":"509713dd-d554-4cc7-9892-54d3a1964e6d","type":"PanTool"},{"id":"7e4abcd0-3dc7-4a3d-b563-6638465d875f","type":"WheelZoomTool"},{"id":"9761f60a-0bbb-4fb7-a037-0162fb08faad","type":"BoxZoomTool"},{"id":"a61fe712-8003-46bd-9200-f59c8fcb6fda","type":"SaveTool"},{"id":"22ca3b7d-b836-49dc-8274-99f23ac06fc2","type":"ResetTool"},{"id":"7919c4f0-4160-4276-b1fc-4305996130bb","type":"HelpTool"},{"id":"72bef2b2-9a94-4fc2-bad2-76f2fd007a87","type":"PanTool"},{"id":"a2b44ec1-443f-42f7-8792-794118ad2051","type":"WheelZoomTool"},{"id":"924e6e5e-02da-4b2c-9d5d-e68dbb7bc2e4","type":"BoxZoomTool"},{"id":"d81ba1c3-6da8-48c7-b452-eb9e05ae1662","type":"SaveTool"},{"id":"cc97a41f-76ee-4240-a2bd-712f06ec81eb","type":"ResetTool"},{"id":"13f3c5a2-19ab-47b2-9c65-55750821ae62","type":"HelpTool"},{"id":"1a68f5c4-60cc-40d6-9185-18e9f24cad1e","type":"PanTool"},{"id":"1bbfaa5c-76bd-49a5-8fd8-58af13586dc9","type":"WheelZoomTool"},{"id":"81406144-8af9-4937-8f05-f4a069199144","type":"BoxZoomTool"},{"id":"7b7623db-db49-4a83-a3b0-880b8fa3da31","type":"SaveTool"},{"id":"aa49178c-8d02-434a-bad8-b3ab7f29c4cc","type":"ResetTool"},{"id":"b2845621-5b38-480a-856f-9f2db076cc44","type":"HelpTool"}]},"id":"ba0adf35-973d-49fe-aa8d-b1b818737544","type":"ProxyToolbar"},{"attributes":{},"id":"72bef2b2-9a94-4fc2-bad2-76f2fd007a87","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6a03993-eb2f-4ca0-ba84-34b621f68158","type":"Triangle"},{"attributes":{"children":[{"id":"51aca2fa-2397-4bc7-b531-abc5a0039778","subtype":"Figure","type":"Plot"},{"id":"c5442308-9347-4b1e-839d-9a8397cb2387","subtype":"Figure","type":"Plot"}]},"id":"a2d77586-ada1-4396-824b-b2f54c87c000","type":"Row"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"a4a66265-f458-4bc8-a2b4-9a62884ce573","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c5442308-9347-4b1e-839d-9a8397cb2387","subtype":"Figure","type":"Plot"},"ticker":{"id":"005c9917-f760-48e8-9448-f994ad5d6997","type":"BasicTicker"}},"id":"837e3d68-4347-40fa-b475-fa48fdeac30d","type":"Grid"},{"attributes":{"source":{"id":"a4a66265-f458-4bc8-a2b4-9a62884ce573","type":"ColumnDataSource"}},"id":"c4537e75-39c0-41dc-a8e3-879372f4adf1","type":"CDSView"},{"attributes":{"toolbar":{"id":"ba0adf35-973d-49fe-aa8d-b1b818737544","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"7126c2d5-6380-4e5c-9b6d-4dc66277668a","type":"ToolbarBox"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"bb0493e7-a292-4518-bd5c-67c35cb4df54","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"ff00a76c-db61-4fb9-8686-bd072481111d","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"c5442308-9347-4b1e-839d-9a8397cb2387","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8a4529a-3a80-43d9-8fbd-f5b61993ede9","type":"BasicTicker"}},"id":"3888510e-4972-45df-bc36-f5588b5a435c","type":"Grid"},{"attributes":{"plot":{"id":"51aca2fa-2397-4bc7-b531-abc5a0039778","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e01eb0a-eac9-4679-9026-e2e3797737da","type":"BasicTicker"}},"id":"0ffc6aab-245c-4e4e-8f59-38036bcbee5b","type":"Grid"},{"attributes":{},"id":"da852fab-4dbd-425e-ac98-e122c0711e77","type":"LinearScale"},{"attributes":{},"id":"f8a4529a-3a80-43d9-8fbd-f5b61993ede9","type":"BasicTicker"},{"attributes":{},"id":"1bbfaa5c-76bd-49a5-8fd8-58af13586dc9","type":"WheelZoomTool"},{"attributes":{},"id":"f9e5ab77-8a8d-4f9c-89d9-ba5358b93203","type":"LinearScale"},{"attributes":{"formatter":{"id":"085ddf43-9175-481e-ba65-a5fa28064599","type":"BasicTickFormatter"},"plot":{"id":"d2d3116b-c86e-46bf-8d18-a962cc687cb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"7706fca0-b2a2-4050-ad60-cd92915a161a","type":"BasicTicker"}},"id":"a7f7a882-6fa0-4432-9869-47b705bee8a9","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"51aca2fa-2397-4bc7-b531-abc5a0039778","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbec38f5-6ae7-4a83-8092-71e06ae8f34d","type":"BasicTicker"}},"id":"08c54dba-f977-46f7-965c-583fe98184b4","type":"Grid"},{"attributes":{"callback":null},"id":"8378480c-d321-457f-aa87-b955a3227181","type":"DataRange1d"},{"attributes":{},"id":"0b469247-10b6-46d2-8a3a-2ffbe561f161","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8f289c39-22ce-435e-873a-af6f09245207","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"f69c6405-190b-4485-86f5-0d653557fa76","type":"BasicTickFormatter"},"plot":{"id":"d2d3116b-c86e-46bf-8d18-a962cc687cb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"89f0146d-41f4-44d8-803b-c055c3e4a7ff","type":"BasicTicker"}},"id":"637bffd1-aed6-44b6-bf15-3d21b371cf24","type":"LinearAxis"},{"attributes":{"overlay":{"id":"8f289c39-22ce-435e-873a-af6f09245207","type":"BoxAnnotation"}},"id":"9761f60a-0bbb-4fb7-a037-0162fb08faad","type":"BoxZoomTool"},{"attributes":{},"id":"005c9917-f760-48e8-9448-f994ad5d6997","type":"BasicTicker"},{"attributes":{},"id":"7919c4f0-4160-4276-b1fc-4305996130bb","type":"HelpTool"},{"attributes":{},"id":"cc97a41f-76ee-4240-a2bd-712f06ec81eb","type":"ResetTool"},{"attributes":{},"id":"a61fe712-8003-46bd-9200-f59c8fcb6fda","type":"SaveTool"},{"attributes":{"overlay":{"id":"5b2ae76a-a48c-4109-87f7-32206456cfed","type":"BoxAnnotation"}},"id":"924e6e5e-02da-4b2c-9d5d-e68dbb7bc2e4","type":"BoxZoomTool"},{"attributes":{},"id":"22ca3b7d-b836-49dc-8274-99f23ac06fc2","type":"ResetTool"},{"attributes":{"callback":null},"id":"9e136e87-fa65-499b-8679-66c30eec1d9b","type":"DataRange1d"},{"attributes":{"below":[{"id":"7aa4ddf9-6ee6-439f-b45e-f101d811dae7","type":"LinearAxis"}],"left":[{"id":"0ec79b95-3e55-48b0-a3c0-80c19a640cc6","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7aa4ddf9-6ee6-439f-b45e-f101d811dae7","type":"LinearAxis"},{"id":"837e3d68-4347-40fa-b475-fa48fdeac30d","type":"Grid"},{"id":"0ec79b95-3e55-48b0-a3c0-80c19a640cc6","type":"LinearAxis"},{"id":"3888510e-4972-45df-bc36-f5588b5a435c","type":"Grid"},{"id":"5b2ae76a-a48c-4109-87f7-32206456cfed","type":"BoxAnnotation"},{"id":"be8ab8f0-3302-4688-b5dd-8335c98e0943","type":"GlyphRenderer"}],"title":{"id":"ff00a76c-db61-4fb9-8686-bd072481111d","type":"Title"},"toolbar":{"id":"59d267f6-df80-45fd-be2a-f8d48c831417","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"02d3d394-6dac-4795-8c15-4e1ea0c7543f","type":"DataRange1d"},"x_scale":{"id":"4145952a-cea6-4a2a-8342-8a6bcfb0390d","type":"LinearScale"},"y_range":{"id":"8378480c-d321-457f-aa87-b955a3227181","type":"DataRange1d"},"y_scale":{"id":"a359be10-799e-4bcf-9b2d-9d6e29c7be16","type":"LinearScale"}},"id":"c5442308-9347-4b1e-839d-9a8397cb2387","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a2b44ec1-443f-42f7-8792-794118ad2051","type":"WheelZoomTool"},{"attributes":{},"id":"cbdb245f-e4cb-4e93-9ca9-7384c3558db0","type":"BasicTickFormatter"},{"attributes":{},"id":"7706fca0-b2a2-4050-ad60-cd92915a161a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b8a44109-de62-4e39-b277-776f83f46c0b","type":"BasicTickFormatter"},"plot":{"id":"c5442308-9347-4b1e-839d-9a8397cb2387","subtype":"Figure","type":"Plot"},"ticker":{"id":"005c9917-f760-48e8-9448-f994ad5d6997","type":"BasicTicker"}},"id":"7aa4ddf9-6ee6-439f-b45e-f101d811dae7","type":"LinearAxis"},{"attributes":{},"id":"4145952a-cea6-4a2a-8342-8a6bcfb0390d","type":"LinearScale"},{"attributes":{"overlay":{"id":"06f8523f-c435-402b-a447-75867c743b29","type":"BoxAnnotation"}},"id":"81406144-8af9-4937-8f05-f4a069199144","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"740404c3-03e2-4a8b-93d4-9bf4e62458f2","type":"Title"},{"attributes":{"children":[{"id":"a2d77586-ada1-4396-824b-b2f54c87c000","type":"Row"},{"id":"c18b9d26-cfc8-46f2-a59d-6e98250e352c","type":"Row"}]},"id":"4372b960-71f4-4f82-9b8b-dc10aeb69205","type":"Column"},{"attributes":{},"id":"b2845621-5b38-480a-856f-9f2db076cc44","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"d2d3116b-c86e-46bf-8d18-a962cc687cb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"89f0146d-41f4-44d8-803b-c055c3e4a7ff","type":"BasicTicker"}},"id":"aa28e600-351b-4614-b43b-94f62e23c074","type":"Grid"},{"attributes":{"callback":null},"id":"944c8776-fb26-4291-9a30-56a5d79653e8","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1c7f54d2-ca7a-4d2c-8cad-841f7d7c1f10","type":"BasicTickFormatter"},"plot":{"id":"51aca2fa-2397-4bc7-b531-abc5a0039778","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e01eb0a-eac9-4679-9026-e2e3797737da","type":"BasicTicker"}},"id":"a84394ed-aa54-498c-bbca-416f570583c0","type":"LinearAxis"},{"attributes":{"source":{"id":"bb0493e7-a292-4518-bd5c-67c35cb4df54","type":"ColumnDataSource"}},"id":"c88db0b3-5ab5-4059-a8d4-e50a5b091476","type":"CDSView"},{"attributes":{},"id":"dbec38f5-6ae7-4a83-8092-71e06ae8f34d","type":"BasicTicker"},{"attributes":{},"id":"7b7623db-db49-4a83-a3b0-880b8fa3da31","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"deb2524c-366e-4a7a-8b72-9770ff1f8804","type":"Triangle"},{"attributes":{"data_source":{"id":"bb0493e7-a292-4518-bd5c-67c35cb4df54","type":"ColumnDataSource"},"glyph":{"id":"ffd81aa1-7f8d-432f-8b68-5cd09961b56d","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"930f425d-cf2d-407b-93b1-47ba9dfbf693","type":"Square"},"selection_glyph":null,"view":{"id":"c88db0b3-5ab5-4059-a8d4-e50a5b091476","type":"CDSView"}},"id":"e51008a9-5223-4a15-9d00-29cefd9d32a2","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"02d3d394-6dac-4795-8c15-4e1ea0c7543f","type":"DataRange1d"},{"attributes":{},"id":"a359be10-799e-4bcf-9b2d-9d6e29c7be16","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"72bef2b2-9a94-4fc2-bad2-76f2fd007a87","type":"PanTool"},{"id":"a2b44ec1-443f-42f7-8792-794118ad2051","type":"WheelZoomTool"},{"id":"924e6e5e-02da-4b2c-9d5d-e68dbb7bc2e4","type":"BoxZoomTool"},{"id":"d81ba1c3-6da8-48c7-b452-eb9e05ae1662","type":"SaveTool"},{"id":"cc97a41f-76ee-4240-a2bd-712f06ec81eb","type":"ResetTool"},{"id":"13f3c5a2-19ab-47b2-9c65-55750821ae62","type":"HelpTool"}]},"id":"59d267f6-df80-45fd-be2a-f8d48c831417","type":"Toolbar"},{"attributes":{},"id":"509713dd-d554-4cc7-9892-54d3a1964e6d","type":"PanTool"},{"attributes":{"formatter":{"id":"cbdb245f-e4cb-4e93-9ca9-7384c3558db0","type":"BasicTickFormatter"},"plot":{"id":"51aca2fa-2397-4bc7-b531-abc5a0039778","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbec38f5-6ae7-4a83-8092-71e06ae8f34d","type":"BasicTicker"}},"id":"17963040-3290-4fd7-80b0-9d8ff0f41298","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"ee4fdf51-e108-4d1f-a353-de2b6646a997","type":"ColumnDataSource"},{"attributes":{},"id":"5e01eb0a-eac9-4679-9026-e2e3797737da","type":"BasicTicker"},{"attributes":{},"id":"f69c6405-190b-4485-86f5-0d653557fa76","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ee4fdf51-e108-4d1f-a353-de2b6646a997","type":"ColumnDataSource"},"glyph":{"id":"93f54ec8-2cb5-4e1b-8b43-c1737934207c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7f7dce6d-6dfd-43ea-b034-c87e7a8b699a","type":"Circle"},"selection_glyph":null,"view":{"id":"1a5997af-b5a3-4b22-9a6c-02a33a1dca6e","type":"CDSView"}},"id":"b3e40ae6-804f-4972-be08-832f2070d34e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1d7c9c5c-ee86-4fc3-bbcf-eedef3595712","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"509713dd-d554-4cc7-9892-54d3a1964e6d","type":"PanTool"},{"id":"7e4abcd0-3dc7-4a3d-b563-6638465d875f","type":"WheelZoomTool"},{"id":"9761f60a-0bbb-4fb7-a037-0162fb08faad","type":"BoxZoomTool"},{"id":"a61fe712-8003-46bd-9200-f59c8fcb6fda","type":"SaveTool"},{"id":"22ca3b7d-b836-49dc-8274-99f23ac06fc2","type":"ResetTool"},{"id":"7919c4f0-4160-4276-b1fc-4305996130bb","type":"HelpTool"}]},"id":"ba7b3d39-cfda-41e9-a961-ddcae32667e0","type":"Toolbar"},{"attributes":{"data_source":{"id":"a4a66265-f458-4bc8-a2b4-9a62884ce573","type":"ColumnDataSource"},"glyph":{"id":"deb2524c-366e-4a7a-8b72-9770ff1f8804","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a6a03993-eb2f-4ca0-ba84-34b621f68158","type":"Triangle"},"selection_glyph":null,"view":{"id":"c4537e75-39c0-41dc-a8e3-879372f4adf1","type":"CDSView"}},"id":"be8ab8f0-3302-4688-b5dd-8335c98e0943","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"93f54ec8-2cb5-4e1b-8b43-c1737934207c","type":"Circle"},{"attributes":{},"id":"7e4abcd0-3dc7-4a3d-b563-6638465d875f","type":"WheelZoomTool"},{"attributes":{},"id":"c1b21558-12bb-4bce-a03f-4f7839fd5230","type":"LinearScale"},{"attributes":{"below":[{"id":"a84394ed-aa54-498c-bbca-416f570583c0","type":"LinearAxis"}],"left":[{"id":"17963040-3290-4fd7-80b0-9d8ff0f41298","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a84394ed-aa54-498c-bbca-416f570583c0","type":"LinearAxis"},{"id":"0ffc6aab-245c-4e4e-8f59-38036bcbee5b","type":"Grid"},{"id":"17963040-3290-4fd7-80b0-9d8ff0f41298","type":"LinearAxis"},{"id":"08c54dba-f977-46f7-965c-583fe98184b4","type":"Grid"},{"id":"8f289c39-22ce-435e-873a-af6f09245207","type":"BoxAnnotation"},{"id":"b3e40ae6-804f-4972-be08-832f2070d34e","type":"GlyphRenderer"}],"title":{"id":"740404c3-03e2-4a8b-93d4-9bf4e62458f2","type":"Title"},"toolbar":{"id":"ba7b3d39-cfda-41e9-a961-ddcae32667e0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1d7c9c5c-ee86-4fc3-bbcf-eedef3595712","type":"DataRange1d"},"x_scale":{"id":"c1b21558-12bb-4bce-a03f-4f7839fd5230","type":"LinearScale"},"y_range":{"id":"944c8776-fb26-4291-9a30-56a5d79653e8","type":"DataRange1d"},"y_scale":{"id":"f9e5ab77-8a8d-4f9c-89d9-ba5358b93203","type":"LinearScale"}},"id":"51aca2fa-2397-4bc7-b531-abc5a0039778","subtype":"Figure","type":"Plot"}],"root_ids":["b5438b57-6fea-43a1-bf25-c3e814556f34"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"1db3387e-71ef-425c-892c-8b2876148c1f","elementid":"d4db0766-35e0-4a1d-8c3a-21bf6bf40597","modelid":"b5438b57-6fea-43a1-bf25-c3e814556f34"}];
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