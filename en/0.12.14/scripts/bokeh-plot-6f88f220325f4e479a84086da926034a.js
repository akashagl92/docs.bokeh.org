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
      };var element = document.getElementById("5aa861c1-9e7b-4f20-891a-7358d9b9bcf5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5aa861c1-9e7b-4f20-891a-7358d9b9bcf5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5fee60de-d49e-416b-9b62-ed4e9b1695a7":{"roots":{"references":[{"attributes":{"plot":{"id":"99f9777f-db6c-445c-8f8c-9a328497d437","subtype":"Figure","type":"Plot"},"ticker":{"id":"da426f5e-5418-4a9c-b19f-cc009f2f9d21","type":"BasicTicker"}},"id":"b1a17dec-87b8-412c-adfd-d176235632d0","type":"Grid"},{"attributes":{"below":[{"id":"98d3eaef-dfcf-4f53-bc79-7c300957b845","type":"LinearAxis"}],"left":[{"id":"ae597c04-85bb-4204-8909-17e5209f88e6","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"98d3eaef-dfcf-4f53-bc79-7c300957b845","type":"LinearAxis"},{"id":"b1a17dec-87b8-412c-adfd-d176235632d0","type":"Grid"},{"id":"ae597c04-85bb-4204-8909-17e5209f88e6","type":"LinearAxis"},{"id":"be569d35-9962-4daa-b105-d02de1184aff","type":"Grid"},{"id":"87144dc2-4a72-44ef-b95a-0dc3d7e7a740","type":"BoxAnnotation"},{"id":"44f8f4b1-2e36-4912-ac45-2f0171e7666a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"ac462060-98a0-49bd-81cf-c212f2983673","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"75b9d5dd-ffc4-46ff-a305-d23f029a564d","type":"DataRange1d"},"x_scale":{"id":"e1e5b3ff-797e-41bb-945b-f38cd73574d5","type":"LinearScale"},"y_range":{"id":"200584c8-fbfd-4ed6-bf76-92d97d0c97e4","type":"DataRange1d"},"y_scale":{"id":"aeb5c3bf-fefe-4683-813e-d319af76ff97","type":"LinearScale"}},"id":"99f9777f-db6c-445c-8f8c-9a328497d437","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"6f2e8789-54c7-4b3d-9f4e-f0719099e922","type":"BasicTickFormatter"},"plot":{"id":"644cccec-dd92-4b69-b834-d9cbc7420f8f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b724d1b4-ce30-4984-80f7-100acf051805","type":"BasicTicker"}},"id":"f4205a08-3a44-46c8-ba35-82e801125047","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"87144dc2-4a72-44ef-b95a-0dc3d7e7a740","type":"BoxAnnotation"},{"attributes":{},"id":"05d4f416-60c3-48c4-8f98-4791ac15f0ec","type":"LinearScale"},{"attributes":{"callback":null},"id":"75b9d5dd-ffc4-46ff-a305-d23f029a564d","type":"DataRange1d"},{"attributes":{"children":[{"id":"24f179a1-7d4a-4384-99fa-951bb8880918","type":"Row"},{"id":"6f20bd63-5164-4524-a643-dd6dac3cf9b5","type":"Row"}]},"id":"655fff5c-d592-4cbf-9c8f-7848049c1bf9","type":"Column"},{"attributes":{"callback":null},"id":"a0e6dbb4-a64f-4c97-813a-a02784238b18","type":"DataRange1d"},{"attributes":{"below":[{"id":"f4205a08-3a44-46c8-ba35-82e801125047","type":"LinearAxis"}],"left":[{"id":"9debebfc-4a8f-4ddc-a97d-8781990c4b9a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f4205a08-3a44-46c8-ba35-82e801125047","type":"LinearAxis"},{"id":"1875809e-6aa4-4349-b801-d4106f818b53","type":"Grid"},{"id":"9debebfc-4a8f-4ddc-a97d-8781990c4b9a","type":"LinearAxis"},{"id":"01128439-50a2-4a7c-96b6-3a0189fcc0d7","type":"Grid"},{"id":"d6badb33-f73f-41ac-a267-b57996161276","type":"BoxAnnotation"},{"id":"3112e411-4d40-4617-af74-37d06d6dadb8","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f7273749-7872-4e1a-a0a7-d93ffcd8ceed","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c26e5f3d-3ea4-4dc8-9636-2b52b2d7c113","type":"DataRange1d"},"x_scale":{"id":"170dca90-8829-458b-8ea2-1bde90671ead","type":"LinearScale"},"y_range":{"id":"1edba533-7490-4e64-af4e-22bfbc4f2ce5","type":"DataRange1d"},"y_scale":{"id":"02882393-ac18-405c-b1b8-b529d53eeccd","type":"LinearScale"}},"id":"644cccec-dd92-4b69-b834-d9cbc7420f8f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b724d1b4-ce30-4984-80f7-100acf051805","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c26e5f3d-3ea4-4dc8-9636-2b52b2d7c113","type":"DataRange1d"},{"attributes":{"children":[{"id":"114cea3d-eb53-4710-97ce-0dfc868da7a9","subtype":"Figure","type":"Plot"},{"id":"644cccec-dd92-4b69-b834-d9cbc7420f8f","subtype":"Figure","type":"Plot"}]},"id":"24f179a1-7d4a-4384-99fa-951bb8880918","type":"Row"},{"attributes":{},"id":"c7a96a7e-fe4b-4c83-b165-89772a58b4cf","type":"LinearScale"},{"attributes":{},"id":"bd99ad80-fc83-420c-b288-4bc16cd128de","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9b455287-3acb-42c9-8199-7b18be6ad4d4","type":"DataRange1d"},{"attributes":{},"id":"02882393-ac18-405c-b1b8-b529d53eeccd","type":"LinearScale"},{"attributes":{"plot":{"id":"644cccec-dd92-4b69-b834-d9cbc7420f8f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b724d1b4-ce30-4984-80f7-100acf051805","type":"BasicTicker"}},"id":"1875809e-6aa4-4349-b801-d4106f818b53","type":"Grid"},{"attributes":{"tools":[{"id":"c551ae2c-5faa-43c3-9994-782354a2388e","type":"PanTool"},{"id":"984c97bf-d399-43c3-85b3-6f6aade84398","type":"WheelZoomTool"},{"id":"3e9bdc92-f2b7-483a-9079-380e5f9d08d9","type":"BoxZoomTool"},{"id":"ed81db85-a322-4339-b4b9-c1835be82d78","type":"SaveTool"},{"id":"6dd81746-1a4f-4d51-a074-600402083a6f","type":"ResetTool"},{"id":"7bf2b210-ba10-4d9e-aee4-1e883195c971","type":"HelpTool"},{"id":"73164a3b-cddd-4ec8-982b-09d1e6c3eede","type":"PanTool"},{"id":"d8fbd9dc-5f08-4694-a7ad-70957f9c1a55","type":"WheelZoomTool"},{"id":"cc9345b3-72e7-4476-99c2-993929428f7a","type":"BoxZoomTool"},{"id":"4400abd8-0c15-47f4-8119-90d26d51ace7","type":"SaveTool"},{"id":"1b071699-df20-4eb9-9211-295acde6c694","type":"ResetTool"},{"id":"c8365b4f-f4d4-48e0-8d87-365302367a5c","type":"HelpTool"},{"id":"3550bdd6-ac36-4d25-aea9-ab604ac55caf","type":"PanTool"},{"id":"24b87455-4d34-41f5-a4f5-3c61492889f7","type":"WheelZoomTool"},{"id":"941ebac0-597a-4af7-ab9a-5cf7996d6444","type":"BoxZoomTool"},{"id":"711eefcf-c68f-4375-ab0e-85462e5c23df","type":"SaveTool"},{"id":"23b9b442-c443-43b9-82e1-dc22d64f3ab0","type":"ResetTool"},{"id":"18b14bfa-df0c-45aa-902c-6224aac3973e","type":"HelpTool"}]},"id":"0d6e2607-8234-4226-9fcf-f8f1467fb461","type":"ProxyToolbar"},{"attributes":{"plot":{"id":"114cea3d-eb53-4710-97ce-0dfc868da7a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"45acd76c-5ded-4305-8152-a2edcad52e06","type":"BasicTicker"}},"id":"82d4f9ed-a2e3-4a9a-ae19-96cab41e0c59","type":"Grid"},{"attributes":{},"id":"8cf1d1b6-8b20-4989-a357-be7699217c8e","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"1937b952-b2be-4772-96d0-b9f20665e929","type":"ColumnDataSource"},{"attributes":{},"id":"23b9b442-c443-43b9-82e1-dc22d64f3ab0","type":"ResetTool"},{"attributes":{"source":{"id":"876288e6-13d8-458f-a46b-c46fea29a74b","type":"ColumnDataSource"}},"id":"beed5908-15c3-455c-ac97-7c78bb0776e2","type":"CDSView"},{"attributes":{},"id":"170dca90-8829-458b-8ea2-1bde90671ead","type":"LinearScale"},{"attributes":{"formatter":{"id":"9419a624-fb9d-4ea3-a554-8df19f89476d","type":"BasicTickFormatter"},"plot":{"id":"99f9777f-db6c-445c-8f8c-9a328497d437","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd99ad80-fc83-420c-b288-4bc16cd128de","type":"BasicTicker"}},"id":"ae597c04-85bb-4204-8909-17e5209f88e6","type":"LinearAxis"},{"attributes":{},"id":"c551ae2c-5faa-43c3-9994-782354a2388e","type":"PanTool"},{"attributes":{},"id":"45acd76c-5ded-4305-8152-a2edcad52e06","type":"BasicTicker"},{"attributes":{},"id":"8dcbc718-fd08-40f2-9ad9-0edea2a47dcc","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"ac9852b2-9ba1-41e9-8289-4a6d62ce9024","type":"ColumnDataSource"}},"id":"525c0bfb-827d-4db9-a2b1-24561be3deb7","type":"CDSView"},{"attributes":{"below":[{"id":"c02785b7-fb7e-4a97-ac26-01cf1de1387e","type":"LinearAxis"}],"left":[{"id":"8a7ddc58-0436-4743-a8c1-df5dcc34dc3e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c02785b7-fb7e-4a97-ac26-01cf1de1387e","type":"LinearAxis"},{"id":"82d4f9ed-a2e3-4a9a-ae19-96cab41e0c59","type":"Grid"},{"id":"8a7ddc58-0436-4743-a8c1-df5dcc34dc3e","type":"LinearAxis"},{"id":"9589ad84-734c-49b6-ba0e-29a4bf9c13ae","type":"Grid"},{"id":"69da9c99-7283-4116-b15b-7ab81a6b60cf","type":"BoxAnnotation"},{"id":"117399e2-a20b-483b-b562-771728ea6c5f","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"a0754308-f5dd-4351-981d-dc570ed831ce","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a0e6dbb4-a64f-4c97-813a-a02784238b18","type":"DataRange1d"},"x_scale":{"id":"c7a96a7e-fe4b-4c83-b165-89772a58b4cf","type":"LinearScale"},"y_range":{"id":"9b455287-3acb-42c9-8199-7b18be6ad4d4","type":"DataRange1d"},"y_scale":{"id":"05d4f416-60c3-48c4-8f98-4791ac15f0ec","type":"LinearScale"}},"id":"114cea3d-eb53-4710-97ce-0dfc868da7a9","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"23863711-1d1e-424b-a485-3f3470d05459","type":"Spacer"},{"id":"99f9777f-db6c-445c-8f8c-9a328497d437","subtype":"Figure","type":"Plot"}]},"id":"6f20bd63-5164-4524-a643-dd6dac3cf9b5","type":"Row"},{"attributes":{"data_source":{"id":"1937b952-b2be-4772-96d0-b9f20665e929","type":"ColumnDataSource"},"glyph":{"id":"ee084a79-a03e-45a3-90b9-62fd4b92d0e3","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10e7d257-8e6a-439a-b0db-ba8e576126a2","type":"Triangle"},"selection_glyph":null,"view":{"id":"8ebba500-6c63-4cf4-89d8-c8e15dd83231","type":"CDSView"}},"id":"3112e411-4d40-4617-af74-37d06d6dadb8","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"73164a3b-cddd-4ec8-982b-09d1e6c3eede","type":"PanTool"},{"id":"d8fbd9dc-5f08-4694-a7ad-70957f9c1a55","type":"WheelZoomTool"},{"id":"cc9345b3-72e7-4476-99c2-993929428f7a","type":"BoxZoomTool"},{"id":"4400abd8-0c15-47f4-8119-90d26d51ace7","type":"SaveTool"},{"id":"1b071699-df20-4eb9-9211-295acde6c694","type":"ResetTool"},{"id":"c8365b4f-f4d4-48e0-8d87-365302367a5c","type":"HelpTool"}]},"id":"f7273749-7872-4e1a-a0a7-d93ffcd8ceed","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"644cccec-dd92-4b69-b834-d9cbc7420f8f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0ad3006-42db-4e10-8920-d84166ae21bf","type":"BasicTicker"}},"id":"01128439-50a2-4a7c-96b6-3a0189fcc0d7","type":"Grid"},{"attributes":{},"id":"9419a624-fb9d-4ea3-a554-8df19f89476d","type":"BasicTickFormatter"},{"attributes":{},"id":"aeb5c3bf-fefe-4683-813e-d319af76ff97","type":"LinearScale"},{"attributes":{},"id":"711eefcf-c68f-4375-ab0e-85462e5c23df","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"10e7d257-8e6a-439a-b0db-ba8e576126a2","type":"Triangle"},{"attributes":{},"id":"18b14bfa-df0c-45aa-902c-6224aac3973e","type":"HelpTool"},{"attributes":{"callback":null},"id":"1edba533-7490-4e64-af4e-22bfbc4f2ce5","type":"DataRange1d"},{"attributes":{"overlay":{"id":"69da9c99-7283-4116-b15b-7ab81a6b60cf","type":"BoxAnnotation"}},"id":"3e9bdc92-f2b7-483a-9079-380e5f9d08d9","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"87144dc2-4a72-44ef-b95a-0dc3d7e7a740","type":"BoxAnnotation"}},"id":"941ebac0-597a-4af7-ab9a-5cf7996d6444","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"e53b7a36-9d3f-4cc0-b0a6-2d147f051eda","type":"BasicTickFormatter"},"plot":{"id":"114cea3d-eb53-4710-97ce-0dfc868da7a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"45acd76c-5ded-4305-8152-a2edcad52e06","type":"BasicTicker"}},"id":"c02785b7-fb7e-4a97-ac26-01cf1de1387e","type":"LinearAxis"},{"attributes":{},"id":"984c97bf-d399-43c3-85b3-6f6aade84398","type":"WheelZoomTool"},{"attributes":{},"id":"d8fbd9dc-5f08-4694-a7ad-70957f9c1a55","type":"WheelZoomTool"},{"attributes":{},"id":"3055ce12-6574-4d72-91e5-278a86f1d0c7","type":"BasicTicker"},{"attributes":{},"id":"8401ae31-711c-4c76-a4dd-51ac0b550761","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c551ae2c-5faa-43c3-9994-782354a2388e","type":"PanTool"},{"id":"984c97bf-d399-43c3-85b3-6f6aade84398","type":"WheelZoomTool"},{"id":"3e9bdc92-f2b7-483a-9079-380e5f9d08d9","type":"BoxZoomTool"},{"id":"ed81db85-a322-4339-b4b9-c1835be82d78","type":"SaveTool"},{"id":"6dd81746-1a4f-4d51-a074-600402083a6f","type":"ResetTool"},{"id":"7bf2b210-ba10-4d9e-aee4-1e883195c971","type":"HelpTool"}]},"id":"a0754308-f5dd-4351-981d-dc570ed831ce","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69da9c99-7283-4116-b15b-7ab81a6b60cf","type":"BoxAnnotation"},{"attributes":{},"id":"7bf2b210-ba10-4d9e-aee4-1e883195c971","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3550bdd6-ac36-4d25-aea9-ab604ac55caf","type":"PanTool"},{"id":"24b87455-4d34-41f5-a4f5-3c61492889f7","type":"WheelZoomTool"},{"id":"941ebac0-597a-4af7-ab9a-5cf7996d6444","type":"BoxZoomTool"},{"id":"711eefcf-c68f-4375-ab0e-85462e5c23df","type":"SaveTool"},{"id":"23b9b442-c443-43b9-82e1-dc22d64f3ab0","type":"ResetTool"},{"id":"18b14bfa-df0c-45aa-902c-6224aac3973e","type":"HelpTool"}]},"id":"ac462060-98a0-49bd-81cf-c212f2983673","type":"Toolbar"},{"attributes":{"data_source":{"id":"ac9852b2-9ba1-41e9-8289-4a6d62ce9024","type":"ColumnDataSource"},"glyph":{"id":"d7ffc94c-6699-4521-9737-a2c97b1cb32f","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"892c42a5-0808-4964-ba78-e0f014847f25","type":"Square"},"selection_glyph":null,"view":{"id":"525c0bfb-827d-4db9-a2b1-24561be3deb7","type":"CDSView"}},"id":"44f8f4b1-2e36-4912-ac45-2f0171e7666a","type":"GlyphRenderer"},{"attributes":{},"id":"3550bdd6-ac36-4d25-aea9-ab604ac55caf","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"876288e6-13d8-458f-a46b-c46fea29a74b","type":"ColumnDataSource"},{"attributes":{},"id":"ed81db85-a322-4339-b4b9-c1835be82d78","type":"SaveTool"},{"attributes":{},"id":"c8365b4f-f4d4-48e0-8d87-365302367a5c","type":"HelpTool"},{"attributes":{},"id":"1b071699-df20-4eb9-9211-295acde6c694","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"892c42a5-0808-4964-ba78-e0f014847f25","type":"Square"},{"attributes":{"toolbar":{"id":"0d6e2607-8234-4226-9fcf-f8f1467fb461","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"1bad74ff-714c-4380-bfb8-effa7789d296","type":"ToolbarBox"},{"attributes":{},"id":"e1e5b3ff-797e-41bb-945b-f38cd73574d5","type":"LinearScale"},{"attributes":{},"id":"e53b7a36-9d3f-4cc0-b0a6-2d147f051eda","type":"BasicTickFormatter"},{"attributes":{},"id":"a0ad3006-42db-4e10-8920-d84166ae21bf","type":"BasicTicker"},{"attributes":{},"id":"24b87455-4d34-41f5-a4f5-3c61492889f7","type":"WheelZoomTool"},{"attributes":{},"id":"6f2e8789-54c7-4b3d-9f4e-f0719099e922","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"114cea3d-eb53-4710-97ce-0dfc868da7a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"3055ce12-6574-4d72-91e5-278a86f1d0c7","type":"BasicTicker"}},"id":"9589ad84-734c-49b6-ba0e-29a4bf9c13ae","type":"Grid"},{"attributes":{"data_source":{"id":"876288e6-13d8-458f-a46b-c46fea29a74b","type":"ColumnDataSource"},"glyph":{"id":"a1be819d-52e5-41d3-b793-b5842a6e36d0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f9a0b497-33e9-4785-8596-acd47d3c8b11","type":"Circle"},"selection_glyph":null,"view":{"id":"beed5908-15c3-455c-ac97-7c78bb0776e2","type":"CDSView"}},"id":"117399e2-a20b-483b-b562-771728ea6c5f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9a0b497-33e9-4785-8596-acd47d3c8b11","type":"Circle"},{"attributes":{"children":[{"id":"1bad74ff-714c-4380-bfb8-effa7789d296","type":"ToolbarBox"},{"id":"655fff5c-d592-4cbf-9c8f-7848049c1bf9","type":"Column"}]},"id":"5dd502c7-bdae-4d6e-81c9-830c26eb707d","type":"Column"},{"attributes":{"overlay":{"id":"d6badb33-f73f-41ac-a267-b57996161276","type":"BoxAnnotation"}},"id":"cc9345b3-72e7-4476-99c2-993929428f7a","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d6badb33-f73f-41ac-a267-b57996161276","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"ac9852b2-9ba1-41e9-8289-4a6d62ce9024","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8dcbc718-fd08-40f2-9ad9-0edea2a47dcc","type":"BasicTickFormatter"},"plot":{"id":"644cccec-dd92-4b69-b834-d9cbc7420f8f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0ad3006-42db-4e10-8920-d84166ae21bf","type":"BasicTicker"}},"id":"9debebfc-4a8f-4ddc-a97d-8781990c4b9a","type":"LinearAxis"},{"attributes":{},"id":"73164a3b-cddd-4ec8-982b-09d1e6c3eede","type":"PanTool"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1be819d-52e5-41d3-b793-b5842a6e36d0","type":"Circle"},{"attributes":{},"id":"da426f5e-5418-4a9c-b19f-cc009f2f9d21","type":"BasicTicker"},{"attributes":{"source":{"id":"1937b952-b2be-4772-96d0-b9f20665e929","type":"ColumnDataSource"}},"id":"8ebba500-6c63-4cf4-89d8-c8e15dd83231","type":"CDSView"},{"attributes":{},"id":"6dd81746-1a4f-4d51-a074-600402083a6f","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee084a79-a03e-45a3-90b9-62fd4b92d0e3","type":"Triangle"},{"attributes":{"formatter":{"id":"8401ae31-711c-4c76-a4dd-51ac0b550761","type":"BasicTickFormatter"},"plot":{"id":"99f9777f-db6c-445c-8f8c-9a328497d437","subtype":"Figure","type":"Plot"},"ticker":{"id":"da426f5e-5418-4a9c-b19f-cc009f2f9d21","type":"BasicTicker"}},"id":"98d3eaef-dfcf-4f53-bc79-7c300957b845","type":"LinearAxis"},{"attributes":{"height":250,"width":250},"id":"23863711-1d1e-424b-a485-3f3470d05459","type":"Spacer"},{"attributes":{"formatter":{"id":"8cf1d1b6-8b20-4989-a357-be7699217c8e","type":"BasicTickFormatter"},"plot":{"id":"114cea3d-eb53-4710-97ce-0dfc868da7a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"3055ce12-6574-4d72-91e5-278a86f1d0c7","type":"BasicTicker"}},"id":"8a7ddc58-0436-4743-a8c1-df5dcc34dc3e","type":"LinearAxis"},{"attributes":{},"id":"4400abd8-0c15-47f4-8119-90d26d51ace7","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"99f9777f-db6c-445c-8f8c-9a328497d437","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd99ad80-fc83-420c-b288-4bc16cd128de","type":"BasicTicker"}},"id":"be569d35-9962-4daa-b105-d02de1184aff","type":"Grid"},{"attributes":{"callback":null},"id":"200584c8-fbfd-4ed6-bf76-92d97d0c97e4","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7ffc94c-6699-4521-9737-a2c97b1cb32f","type":"Square"}],"root_ids":["5dd502c7-bdae-4d6e-81c9-830c26eb707d"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"5fee60de-d49e-416b-9b62-ed4e9b1695a7","elementid":"5aa861c1-9e7b-4f20-891a-7358d9b9bcf5","modelid":"5dd502c7-bdae-4d6e-81c9-830c26eb707d"}];
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