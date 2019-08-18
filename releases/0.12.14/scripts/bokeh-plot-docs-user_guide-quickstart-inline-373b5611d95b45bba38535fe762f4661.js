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
      };var element = document.getElementById("f41a4c67-f18a-4762-bbf8-66478a4b3e3b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f41a4c67-f18a-4762-bbf8-66478a4b3e3b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a8ae8256-8eb4-4c89-89f1-7bc2ef17e618":{"roots":{"references":[{"attributes":{"data_source":{"id":"5b4a078c-c79e-441c-9691-b2e1e519f324","type":"ColumnDataSource"},"glyph":{"id":"203545ca-747d-43bf-8758-6dabb3f01d0d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cf1baca5-c68e-43f0-b9bd-d5f3a42918af","type":"Circle"},"selection_glyph":null,"view":{"id":"21bd2821-32db-45ff-a8e0-9ca608f26afa","type":"CDSView"}},"id":"f4429511-7c7d-415a-a018-9e81e855660c","type":"GlyphRenderer"},{"attributes":{},"id":"a68c30fc-0b64-41d4-8d87-27a0e8dc03be","type":"ResetTool"},{"attributes":{"callback":null},"id":"df451b1e-264a-40d8-a478-fad16b60e3ea","type":"DataRange1d"},{"attributes":{"below":[{"id":"b66fec61-18d4-43c2-b67e-932e23adf5bc","type":"LinearAxis"}],"left":[{"id":"763c262e-1ca8-44f6-91d2-9af768a485aa","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b66fec61-18d4-43c2-b67e-932e23adf5bc","type":"LinearAxis"},{"id":"476b337c-12d1-4cf2-ae06-8c21be74917f","type":"Grid"},{"id":"763c262e-1ca8-44f6-91d2-9af768a485aa","type":"LinearAxis"},{"id":"73408e25-a3dc-4e82-b6b3-372d6f9717d8","type":"Grid"},{"id":"b8e408ec-981a-456e-a1ad-4e7ed5d8781e","type":"BoxAnnotation"},{"id":"f4429511-7c7d-415a-a018-9e81e855660c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"39d76476-f48b-4b9d-8618-c13d4feab1c4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"df451b1e-264a-40d8-a478-fad16b60e3ea","type":"DataRange1d"},"x_scale":{"id":"25f229df-0af2-41d3-97de-fce829fe0077","type":"LinearScale"},"y_range":{"id":"aaa89ac3-1dae-443f-89a7-609bbba4c28b","type":"DataRange1d"},"y_scale":{"id":"197d3bae-7b89-47cc-bf34-1025ceac5205","type":"LinearScale"}},"id":"bea75a3a-d84a-4489-b39f-84b0f13e05c8","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"d40122f1-e89d-460d-84ab-e42d7f52d1b4","type":"Row"}]},"id":"8a5d25ef-01df-4e1e-baa5-2d180710e6e5","type":"Column"},{"attributes":{},"id":"197d3bae-7b89-47cc-bf34-1025ceac5205","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8f72dc42-a229-442b-bd58-2af5712d1e6c","type":"PanTool"},{"id":"72a4266d-3f80-43e3-8dca-a07a9a9ae373","type":"WheelZoomTool"},{"id":"3080b371-ed6f-404c-b0e0-8ed8bc9456c9","type":"BoxZoomTool"},{"id":"46e5c1fc-9a4d-496d-ae5c-581aae7a6585","type":"SaveTool"},{"id":"a68c30fc-0b64-41d4-8d87-27a0e8dc03be","type":"ResetTool"},{"id":"5fa5cf13-2a85-43c2-929a-dbf565af2662","type":"HelpTool"}]},"id":"39d76476-f48b-4b9d-8618-c13d4feab1c4","type":"Toolbar"},{"attributes":{},"id":"c3bb8e26-dd6e-4b52-aadf-12735477a549","type":"PanTool"},{"attributes":{"overlay":{"id":"023a8cc9-9710-4f4d-9200-5cfa6d6cf002","type":"BoxAnnotation"}},"id":"2e260e93-a836-4878-b630-7397a6aa79d2","type":"BoxZoomTool"},{"attributes":{},"id":"3113440b-8354-4712-ac9f-716a321fccb5","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee8e580f-5335-4045-93a2-008888dc27bb","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"7f79bdb1-ee6e-41ae-a5db-01892b43b797","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd4d9c09-4d33-4ec8-9532-9c9823edbc54","type":"BasicTicker"}},"id":"bd813f3f-7013-4f49-979f-cb1fcfa6bbae","type":"Grid"},{"attributes":{"source":{"id":"81a8bfba-a6ee-45bb-b391-9abef3c7bd94","type":"ColumnDataSource"}},"id":"c18906cb-a7af-4f50-850e-3a12ab7c4571","type":"CDSView"},{"attributes":{},"id":"bd4d9c09-4d33-4ec8-9532-9c9823edbc54","type":"BasicTicker"},{"attributes":{},"id":"03b76852-fc3b-4dd4-814e-14ff56303b8c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"014373cf-aff7-4686-9732-bf1ae89154f5","type":"BasicTickFormatter"},"plot":{"id":"7f79bdb1-ee6e-41ae-a5db-01892b43b797","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd4d9c09-4d33-4ec8-9532-9c9823edbc54","type":"BasicTicker"}},"id":"2a0b3541-49ca-4120-acfe-1ac69d9ec3c4","type":"LinearAxis"},{"attributes":{"plot":{"id":"a10ce21d-b2c9-4122-afc1-29603d60c286","subtype":"Figure","type":"Plot"},"ticker":{"id":"3113440b-8354-4712-ac9f-716a321fccb5","type":"BasicTicker"}},"id":"dd0fbc42-3ce7-4444-8ef6-34a7708786d6","type":"Grid"},{"attributes":{},"id":"911cae5f-3912-4cb4-888f-58faa7ff3306","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"3904e78d-9196-4ede-b445-fef2aa118752","type":"BasicTickFormatter"},"plot":{"id":"7f79bdb1-ee6e-41ae-a5db-01892b43b797","subtype":"Figure","type":"Plot"},"ticker":{"id":"dddb1c2a-9d6a-4181-a232-da4ec271f39c","type":"BasicTicker"}},"id":"3d6e9c47-5825-43d2-8f3a-765ff0e0b2e0","type":"LinearAxis"},{"attributes":{},"id":"83add670-dc50-4f5c-a54f-8f146c6ec57d","type":"LinearScale"},{"attributes":{},"id":"bed121bd-069e-4f3e-85e9-c4749cd5523f","type":"ResetTool"},{"attributes":{},"id":"68a9da6b-931b-4d67-8213-d3c70b1b6257","type":"SaveTool"},{"attributes":{},"id":"dddb1c2a-9d6a-4181-a232-da4ec271f39c","type":"BasicTicker"},{"attributes":{},"id":"997e7924-9dfd-4e2d-ac3e-f7eaa029f4db","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a51bd19e-bba6-4cbe-a7bd-5a458af64802","type":"BoxAnnotation"},{"attributes":{},"id":"7e3b3dd4-33d2-4df5-b58e-1df59898b0cb","type":"LinearScale"},{"attributes":{"children":[{"id":"bea75a3a-d84a-4489-b39f-84b0f13e05c8","subtype":"Figure","type":"Plot"},{"id":"7f79bdb1-ee6e-41ae-a5db-01892b43b797","subtype":"Figure","type":"Plot"},{"id":"a10ce21d-b2c9-4122-afc1-29603d60c286","subtype":"Figure","type":"Plot"}]},"id":"d40122f1-e89d-460d-84ab-e42d7f52d1b4","type":"Row"},{"attributes":{"formatter":{"id":"8930f5fa-f0f8-4db9-a4eb-6800bcd9698e","type":"BasicTickFormatter"},"plot":{"id":"bea75a3a-d84a-4489-b39f-84b0f13e05c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"b04e8397-8af1-4fad-b4cc-7904fdb71b31","type":"BasicTicker"}},"id":"b66fec61-18d4-43c2-b67e-932e23adf5bc","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"203545ca-747d-43bf-8758-6dabb3f01d0d","type":"Circle"},{"attributes":{},"id":"014373cf-aff7-4686-9732-bf1ae89154f5","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"94bf64be-3440-4a82-baf9-b4f5356affcc","type":"ColumnDataSource"}},"id":"f4e165e5-26a1-4146-8b70-519d5b8a3018","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"023a8cc9-9710-4f4d-9200-5cfa6d6cf002","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"94bf64be-3440-4a82-baf9-b4f5356affcc","type":"ColumnDataSource"},"glyph":{"id":"42abb28e-7b36-4393-8778-aa5031d449ed","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79eaa180-b3e0-4e7a-aae3-4b4f6659ac8b","type":"Square"},"selection_glyph":null,"view":{"id":"f4e165e5-26a1-4146-8b70-519d5b8a3018","type":"CDSView"}},"id":"b2155339-0d73-4f59-aa3b-69a2a435579c","type":"GlyphRenderer"},{"attributes":{},"id":"3904e78d-9196-4ede-b445-fef2aa118752","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D9o+gYFGL7vPyN/Fo5v+e4/XLHeqjC17T9foQT4kvbrP1YykSHGxOk/tDkVSdQo5z9AE3HJfC3kP1wsoPEH3+A/thLH2SiW2j9bQ2NRvgDTP4xzC34aOsY/cyCwKKhcqD8MyeikuUm0v0/eq9oaN8q/PSGBd67u1L+LyZhelmvcv8/m3JG2ueG/hlh3f5705L9dUsfUNNnnv10cd/2OW+q/wfLvCVdx7L8bLVJC9hHuv0PyRoe4Nu+/XjTx7ufa778HB0As4PvvvwQ9tXAZme+/V1DNmyq07r/ZTwivwlDtv4lZi6GZdOu/JeDa0Vgn6b/aPrV2e3Lmv8y0DJEnYeO/+f//////3783i/Tn4LnYv4yAwi7oDdG/3kQPZF83wr9U+ijPKj+QvxHsuGvkX7w/k1rgSlktzj+GU4hOOdfWP1m1P3WwOd4/AasNgtOP4j+XUJVeWbblPzdQz6Jvg+g/uvBkh4zr6j99NRQyxuTsP/FJcov7Zu4/Juk3u/Vr7z+VSynBge/vP5RLKcGB7+8/Jek3u/Vr7z/vSXKL+2buP381FDLG5Ow/uPBkh4zr6j86UM+ib4PoP5RQlV5ZtuU/BasNgtOP4j9TtT91sDneP45TiE4519Y/hVrgSlktzj807Lhr5F+8P8f6KM8qP5C/zUQPZF83wr+TgMIu6A3Rvy+L9Ofgudi/BwAAAAAA4L/PtAyRJ2Hjv9k+tXZ7cua/I+Da0Vgn6b+NWYuhmXTrv9pPCK/CUO2/V1DNmyq07r8DPbVwGZnvvwgHQCzg+++/XjTx7ufa779E8kaHuDbvvx4tUkL2Ee6/wPLvCVdx7L9dHHf9jlvqv2BSx9Q02ee/gVh3f5705L/M5tyRtrnhv4zJmF6Wa9y/RSGBd67u1L8x3qvaGjfKv/DI6KS5SbS/bSCwKKhcqD9zcwt+GjrGP2ZDY1G+ANM/uRLH2SiW2j9aLKDxB9/gPzsTccl8LeQ/uDkVSdQo5z9WMpEhxsTpP16hBPiS9us/X7HeqjC17T8kfxaOb/nuP2j6BgUYvu8/AAAAAAAA8D8=","dtype":"float64","shape":[100]}}},"id":"81a8bfba-a6ee-45bb-b391-9abef3c7bd94","type":"ColumnDataSource"},{"attributes":{},"id":"e1ffd904-4984-499f-a5b8-8b54f88b7feb","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ad985bb1-5e3f-45b1-9730-d9cf23d0e912","type":"BasicTickFormatter"},"plot":{"id":"bea75a3a-d84a-4489-b39f-84b0f13e05c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7d6227d-d0dd-45ba-a9eb-a736816e8487","type":"BasicTicker"}},"id":"763c262e-1ca8-44f6-91d2-9af768a485aa","type":"LinearAxis"},{"attributes":{},"id":"49c9fa5b-4327-42cd-a4e8-a75de25e4f8c","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"bea75a3a-d84a-4489-b39f-84b0f13e05c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"b04e8397-8af1-4fad-b4cc-7904fdb71b31","type":"BasicTicker"}},"id":"476b337c-12d1-4cf2-ae06-8c21be74917f","type":"Grid"},{"attributes":{"overlay":{"id":"a51bd19e-bba6-4cbe-a7bd-5a458af64802","type":"BoxAnnotation"}},"id":"c1bf18cd-3c15-4d3b-9538-bc2febe562e8","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"bea75a3a-d84a-4489-b39f-84b0f13e05c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7d6227d-d0dd-45ba-a9eb-a736816e8487","type":"BasicTicker"}},"id":"73408e25-a3dc-4e82-b6b3-372d6f9717d8","type":"Grid"},{"attributes":{},"id":"6c71aff7-59f8-46f9-9527-ffbab2e9482e","type":"LinearScale"},{"attributes":{},"id":"ad985bb1-5e3f-45b1-9730-d9cf23d0e912","type":"BasicTickFormatter"},{"attributes":{},"id":"0d0f7422-c858-4365-afc3-9e0ff70a1187","type":"SaveTool"},{"attributes":{"formatter":{"id":"e1ffd904-4984-499f-a5b8-8b54f88b7feb","type":"BasicTickFormatter"},"plot":{"id":"a10ce21d-b2c9-4122-afc1-29603d60c286","subtype":"Figure","type":"Plot"},"ticker":{"id":"3113440b-8354-4712-ac9f-716a321fccb5","type":"BasicTicker"}},"id":"267b80c8-52f5-47e2-8ef0-153c1c546b6c","type":"LinearAxis"},{"attributes":{"overlay":{"id":"b8e408ec-981a-456e-a1ad-4e7ed5d8781e","type":"BoxAnnotation"}},"id":"3080b371-ed6f-404c-b0e0-8ed8bc9456c9","type":"BoxZoomTool"},{"attributes":{},"id":"5fa5cf13-2a85-43c2-929a-dbf565af2662","type":"HelpTool"},{"attributes":{"source":{"id":"5b4a078c-c79e-441c-9691-b2e1e519f324","type":"ColumnDataSource"}},"id":"21bd2821-32db-45ff-a8e0-9ca608f26afa","type":"CDSView"},{"attributes":{},"id":"828ccdfd-8cd4-4bc1-b86f-04855267148f","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"a10ce21d-b2c9-4122-afc1-29603d60c286","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae67e599-c36f-456c-9911-ac835426b8f1","type":"BasicTicker"}},"id":"b4c9f517-fe12-4398-ab39-706f58489059","type":"Grid"},{"attributes":{},"id":"72a4266d-3f80-43e3-8dca-a07a9a9ae373","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"03b76852-fc3b-4dd4-814e-14ff56303b8c","type":"BasicTickFormatter"},"plot":{"id":"a10ce21d-b2c9-4122-afc1-29603d60c286","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae67e599-c36f-456c-9911-ac835426b8f1","type":"BasicTicker"}},"id":"fd243fb9-df39-45b7-992f-680fc8e8c002","type":"LinearAxis"},{"attributes":{},"id":"46e5c1fc-9a4d-496d-ae5c-581aae7a6585","type":"SaveTool"},{"attributes":{"plot":{"id":"7f79bdb1-ee6e-41ae-a5db-01892b43b797","subtype":"Figure","type":"Plot"},"ticker":{"id":"dddb1c2a-9d6a-4181-a232-da4ec271f39c","type":"BasicTicker"}},"id":"d5385783-796d-4ec9-bd6a-0c5299225611","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"79eaa180-b3e0-4e7a-aae3-4b4f6659ac8b","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf1baca5-c68e-43f0-b9bd-d5f3a42918af","type":"Circle"},{"attributes":{},"id":"ae67e599-c36f-456c-9911-ac835426b8f1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"da2b01d1-8b36-4fdb-b25a-c20534687376","type":"PanTool"},{"id":"911cae5f-3912-4cb4-888f-58faa7ff3306","type":"WheelZoomTool"},{"id":"2e260e93-a836-4878-b630-7397a6aa79d2","type":"BoxZoomTool"},{"id":"68a9da6b-931b-4d67-8213-d3c70b1b6257","type":"SaveTool"},{"id":"bed121bd-069e-4f3e-85e9-c4749cd5523f","type":"ResetTool"},{"id":"c604e467-f77d-44cc-876e-a9fad7962a8e","type":"HelpTool"}]},"id":"e61542b2-24a2-4905-a1a9-3bba6ce6f92f","type":"Toolbar"},{"attributes":{},"id":"8bc469a5-c147-4ae2-b20b-c6d12a4bfaea","type":"HelpTool"},{"attributes":{},"id":"b04e8397-8af1-4fad-b4cc-7904fdb71b31","type":"BasicTicker"},{"attributes":{"data_source":{"id":"81a8bfba-a6ee-45bb-b391-9abef3c7bd94","type":"ColumnDataSource"},"glyph":{"id":"58bf7bfc-6f86-4797-9c0a-5020aea2e3ee","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee8e580f-5335-4045-93a2-008888dc27bb","type":"Triangle"},"selection_glyph":null,"view":{"id":"c18906cb-a7af-4f50-850e-3a12ab7c4571","type":"CDSView"}},"id":"c35eb563-ec6a-4b72-ab26-02237d74e2e4","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b8e408ec-981a-456e-a1ad-4e7ed5d8781e","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"58bf7bfc-6f86-4797-9c0a-5020aea2e3ee","type":"Triangle"},{"attributes":{"below":[{"id":"3d6e9c47-5825-43d2-8f3a-765ff0e0b2e0","type":"LinearAxis"}],"left":[{"id":"2a0b3541-49ca-4120-acfe-1ac69d9ec3c4","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"3d6e9c47-5825-43d2-8f3a-765ff0e0b2e0","type":"LinearAxis"},{"id":"d5385783-796d-4ec9-bd6a-0c5299225611","type":"Grid"},{"id":"2a0b3541-49ca-4120-acfe-1ac69d9ec3c4","type":"LinearAxis"},{"id":"bd813f3f-7013-4f49-979f-cb1fcfa6bbae","type":"Grid"},{"id":"023a8cc9-9710-4f4d-9200-5cfa6d6cf002","type":"BoxAnnotation"},{"id":"c35eb563-ec6a-4b72-ab26-02237d74e2e4","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"e61542b2-24a2-4905-a1a9-3bba6ce6f92f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"df451b1e-264a-40d8-a478-fad16b60e3ea","type":"DataRange1d"},"x_scale":{"id":"7e3b3dd4-33d2-4df5-b58e-1df59898b0cb","type":"LinearScale"},"y_range":{"id":"aaa89ac3-1dae-443f-89a7-609bbba4c28b","type":"DataRange1d"},"y_scale":{"id":"997e7924-9dfd-4e2d-ac3e-f7eaa029f4db","type":"LinearScale"}},"id":"7f79bdb1-ee6e-41ae-a5db-01892b43b797","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8930f5fa-f0f8-4db9-a4eb-6800bcd9698e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7ae731f3-774d-412b-87b9-fb0ce22764e5","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"5b4a078c-c79e-441c-9691-b2e1e519f324","type":"ColumnDataSource"},{"attributes":{},"id":"c604e467-f77d-44cc-876e-a9fad7962a8e","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c3bb8e26-dd6e-4b52-aadf-12735477a549","type":"PanTool"},{"id":"49c9fa5b-4327-42cd-a4e8-a75de25e4f8c","type":"WheelZoomTool"},{"id":"c1bf18cd-3c15-4d3b-9538-bc2febe562e8","type":"BoxZoomTool"},{"id":"0d0f7422-c858-4365-afc3-9e0ff70a1187","type":"SaveTool"},{"id":"828ccdfd-8cd4-4bc1-b86f-04855267148f","type":"ResetTool"},{"id":"8bc469a5-c147-4ae2-b20b-c6d12a4bfaea","type":"HelpTool"}]},"id":"1e4c7cbb-f488-42fd-8ee2-03fa3777285b","type":"Toolbar"},{"attributes":{"callback":null},"id":"aaa89ac3-1dae-443f-89a7-609bbba4c28b","type":"DataRange1d"},{"attributes":{},"id":"8f72dc42-a229-442b-bd58-2af5712d1e6c","type":"PanTool"},{"attributes":{},"id":"25f229df-0af2-41d3-97de-fce829fe0077","type":"LinearScale"},{"attributes":{},"id":"c7d6227d-d0dd-45ba-a9eb-a736816e8487","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D+yzYPRkeXxP7ihgYdrgfM/rb0yquzM9D/245G2v8L1P87bFRfwXvY/2iiqbvqe9j/kKcny1oH2P2p9E6r9B/Y/t9rofWQz9T/V4vYmdwf0P338ARYJifI/RdfykkG+8D9ETRXIBF3tPyugTMuSxOg/JsOhHxvG4z8XRefmX+zcP4TfmO5l1dE/2IAW3tnTuT9QVAYbRxi0v26sY4ZobNC/kDyhvhiP278fJw0IIiDjv8rnndrvKei/4klI9jTQ7L9i6ms85X/wvyB3ITG5U/K/nEtETQ/c879kyJx6lxL1v3a2nZlS8vW/jCxGFqd39r9Ikzy8b6D2v7IbDo0EbPa/VCYsdD3b9b+XNIXNbvD0vyX2CM1fr/O/Ewqe7jod8r/hQKSueEDwv7KoVMWJQey/OkhCQL6N57//x2pm7XjivwmD/egKMNq/WFreULgEzr/gjtyf0basv8DQmYTCjb8/YDFTHT090z9zKk7fyUfePwQ64frNauQ/Br4PG51d6T/UmpIn8OftPyz+X62J+/A/JAqwLSe98j/wrAGOlDH0P9+qQLrTUvU/YiQQQD0c9j8qs4V6k4r2Pw41lOsPnPY/TXYpjGpQ9j9uO9/02qj1P8SNeVoTqPQ/wTrZcjVS8z/dcSFwwazxPxnyVbD+fO8/vXE0K8Ye6z+6a09r11DmP/7dFbP8JuE/QJmw0PVs1z8YNwvg51bIP4A3qsMi+oY/tJyl3I19xb9gjLYfHAnWv+4O12hWfOC/dgkSnTaw5b/Eiyd/wIrqv1M5qN/19+6/bg/Nc81y8b9c/veZwCHzv4mZSz7lgfS/nqNH2pCN9b9BMd7bdED2vxjtFmOwl/a/lMBYHdyR9r+wHoMNEC/2vww2BinjcPW/M3KRy2Ra9L+mR1EcEPDyv8K/p5i5N/G/fKrPIO5w7r87P/7sBPXpv0iCivwvDuW/bUUVRECh3788RM3h1qPUv0S1wErRosK/wBtiTTs7oT9AtNpTsC7LP531ygVNz9g/audXAYjQ4T/buikNCPDmP2xZBmcMses//P//////7z8=","dtype":"float64","shape":[100]}}},"id":"94bf64be-3440-4a82-baf9-b4f5356affcc","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"267b80c8-52f5-47e2-8ef0-153c1c546b6c","type":"LinearAxis"}],"left":[{"id":"fd243fb9-df39-45b7-992f-680fc8e8c002","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"267b80c8-52f5-47e2-8ef0-153c1c546b6c","type":"LinearAxis"},{"id":"dd0fbc42-3ce7-4444-8ef6-34a7708786d6","type":"Grid"},{"id":"fd243fb9-df39-45b7-992f-680fc8e8c002","type":"LinearAxis"},{"id":"b4c9f517-fe12-4398-ab39-706f58489059","type":"Grid"},{"id":"a51bd19e-bba6-4cbe-a7bd-5a458af64802","type":"BoxAnnotation"},{"id":"b2155339-0d73-4f59-aa3b-69a2a435579c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"1e4c7cbb-f488-42fd-8ee2-03fa3777285b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"df451b1e-264a-40d8-a478-fad16b60e3ea","type":"DataRange1d"},"x_scale":{"id":"6c71aff7-59f8-46f9-9527-ffbab2e9482e","type":"LinearScale"},"y_range":{"id":"7ae731f3-774d-412b-87b9-fb0ce22764e5","type":"DataRange1d"},"y_scale":{"id":"83add670-dc50-4f5c-a54f-8f146c6ec57d","type":"LinearScale"}},"id":"a10ce21d-b2c9-4122-afc1-29603d60c286","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"da2b01d1-8b36-4fdb-b25a-c20534687376","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"42abb28e-7b36-4393-8778-aa5031d449ed","type":"Square"}],"root_ids":["8a5d25ef-01df-4e1e-baa5-2d180710e6e5"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"a8ae8256-8eb4-4c89-89f1-7bc2ef17e618","elementid":"f41a4c67-f18a-4762-bbf8-66478a4b3e3b","modelid":"8a5d25ef-01df-4e1e-baa5-2d180710e6e5"}];
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