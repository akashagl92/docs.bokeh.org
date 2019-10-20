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
      };var element = document.getElementById("9b38d712-f890-4994-a2e9-ae02d0629957");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9b38d712-f890-4994-a2e9-ae02d0629957' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a662b479-e9e7-4b90-8bc1-8eef9bf46849":{"roots":{"references":[{"attributes":{"plot":null,"text":"IV"},"id":"68ab0107-24fa-49c0-afa9-24dd451aab34","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"77d8d6ce-d89d-4270-9804-8f1e6c81eadc","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"502899de-35b3-4324-bae2-e06131e7c40f","type":"BasicTickFormatter"},"plot":{"id":"38fc8d25-10ff-4654-814b-3aef881e7293","type":"Plot"},"ticker":{"id":"f11d8e99-7299-4a84-abce-f9ca39eb315a","type":"BasicTicker"}},"id":"512fb58d-8270-4f60-989b-752cc8cc7afe","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"11ebb2b4-18dc-4752-9b49-83a212d9281e","type":"BasicTickFormatter"},"plot":{"id":"38fc8d25-10ff-4654-814b-3aef881e7293","type":"Plot"},"ticker":{"id":"773faf85-7a13-4579-aeea-e6df736d1ed9","type":"BasicTicker"}},"id":"04067128-bb44-464c-8ce2-8add7516c98a","type":"LinearAxis"},{"attributes":{},"id":"f11d8e99-7299-4a84-abce-f9ca39eb315a","type":"BasicTicker"},{"attributes":{"plot":{"id":"38fc8d25-10ff-4654-814b-3aef881e7293","type":"Plot"},"ticker":{"id":"f11d8e99-7299-4a84-abce-f9ca39eb315a","type":"BasicTicker"}},"id":"6a81ccc4-510d-4fc7-9874-68acd1eef3fd","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"4b722c65-3b6c-4bd3-b8d3-39f19771fe17","type":"Plot"},"ticker":{"id":"1dedc0f5-39e8-46a2-a307-016400309c8f","type":"BasicTicker"}},"id":"772457b7-3f52-4b8c-8dd8-7484c4341bdc","type":"Grid"},{"attributes":{},"id":"773faf85-7a13-4579-aeea-e6df736d1ed9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"38fc8d25-10ff-4654-814b-3aef881e7293","type":"Plot"},"ticker":{"id":"773faf85-7a13-4579-aeea-e6df736d1ed9","type":"BasicTicker"}},"id":"984d0bc7-4d19-4ad9-8823-734740e3828a","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6d94e769-7fa0-4b2a-97de-1e353635c1fe","type":"Line"},{"attributes":{"data_source":{"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"},"glyph":{"id":"6d94e769-7fa0-4b2a-97de-1e353635c1fe","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c39f09ad-105a-410b-8d26-8a2a7312905c","type":"CDSView"}},"id":"e8b40375-b06e-4296-8c96-a09ba05f4eab","type":"GlyphRenderer"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"f2d059d2-f55a-48a2-a40f-48de5055e349","type":"Line"},{"attributes":{"data_source":{"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"},"glyph":{"id":"f2d059d2-f55a-48a2-a40f-48de5055e349","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0a1ee117-ef3e-45c8-8c93-9c78807f67a7","type":"CDSView"}},"id":"e99366ba-0476-4280-b336-ad1654c7279f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"}},"id":"c39f09ad-105a-410b-8d26-8a2a7312905c","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d4e1b06b-111c-46cd-a0cd-7f878db8ad37","type":"Toolbar"},{"attributes":{"source":{"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"}},"id":"0a1ee117-ef3e-45c8-8c93-9c78807f67a7","type":"CDSView"},{"attributes":{"children":[{"id":"77711bc6-5d8b-4af6-89d1-5fcf57135165","type":"Plot"},{"id":"4b722c65-3b6c-4bd3-b8d3-39f19771fe17","type":"Plot"}]},"id":"fe59cbbd-85a1-4155-8238-688304426158","type":"Row"},{"attributes":{"data_source":{"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"},"glyph":{"id":"08578eea-ce9d-4d5b-b357-6610f6c1d162","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"fffb57af-a00c-4baf-ad9e-e4e3b9da0d65","type":"CDSView"}},"id":"8b8728e9-879e-4f48-bc5f-d6328efe70c7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"},"glyph":{"id":"77d8d6ce-d89d-4270-9804-8f1e6c81eadc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"bd42560a-6620-4163-bc54-9c341e9f2e4a","type":"CDSView"}},"id":"a93cfb66-041d-404c-af84-d3d4c29ed926","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"}},"id":"fffb57af-a00c-4baf-ad9e-e4e3b9da0d65","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"42feb7dd-e034-4c14-a651-32724eee773b","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"fe459372-0b65-42fa-9eb0-95871a807035","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"42feb7dd-e034-4c14-a651-32724eee773b","type":"LinearAxis"},{"id":"fe459372-0b65-42fa-9eb0-95871a807035","type":"LinearAxis"},{"id":"91e8be19-3dff-4432-be77-d2f5f96df42b","type":"Grid"},{"id":"0a9e1234-11ef-4474-9bd7-452aa0b65402","type":"Grid"},{"id":"f0f0137c-d31e-4cf3-b22a-ae27cb5d28ed","type":"GlyphRenderer"},{"id":"f41a7803-31f9-461d-9ba4-99c38ab4232d","type":"GlyphRenderer"}],"title":{"id":"a0a4aa6b-91fd-4fa3-b114-d57f6ba39123","type":"Title"},"toolbar":{"id":"d4e1b06b-111c-46cd-a0cd-7f878db8ad37","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d26bf533-9db6-4175-af42-3e9b6978c66b","type":"Range1d"},"x_scale":{"id":"0a85dd79-f946-49bc-b0fc-4ab2149d279a","type":"LinearScale"},"y_range":{"id":"0cbffce9-41e7-44b9-8437-955736ebea3b","type":"Range1d"},"y_scale":{"id":"2866c837-4150-4705-b64c-656d9b356864","type":"LinearScale"}},"id":"914d735b-dfaa-4901-a2ba-679e73d1c33b","type":"Plot"},{"attributes":{"source":{"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"}},"id":"bd42560a-6620-4163-bc54-9c341e9f2e4a","type":"CDSView"},{"attributes":{"children":[{"id":"fe59cbbd-85a1-4155-8238-688304426158","type":"Row"},{"id":"86bd123e-d1d4-40b8-a591-2c46298c7d69","type":"Row"}]},"id":"69801583-816c-4a2f-beca-21b1b6126b73","type":"Column"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"0d5f6672-9b08-4fe5-a047-36cd3107dd12","type":"BasicTickFormatter"},"plot":{"id":"914d735b-dfaa-4901-a2ba-679e73d1c33b","type":"Plot"},"ticker":{"id":"73c74a18-6112-4fba-b84c-0e4f0ed1fe94","type":"BasicTicker"}},"id":"42feb7dd-e034-4c14-a651-32724eee773b","type":"LinearAxis"},{"attributes":{},"id":"7b156097-d447-4c94-8a28-4f35ce2a2fca","type":"LinearScale"},{"attributes":{"data_source":{"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"},"glyph":{"id":"212ad049-dee2-4833-86a3-666dc7c00cbd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74fb3c95-9d7c-4e89-9b1b-eb7f47ee1916","type":"CDSView"}},"id":"d9745583-af93-46ef-9f8d-b368ade03b96","type":"GlyphRenderer"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"782d1526-8f2c-42a8-8332-21ca3cde98c0","type":"BasicTickFormatter"},"plot":{"id":"914d735b-dfaa-4901-a2ba-679e73d1c33b","type":"Plot"},"ticker":{"id":"ffdcc206-d269-468b-b8b8-34d2042e5bf2","type":"BasicTicker"}},"id":"fe459372-0b65-42fa-9eb0-95871a807035","type":"LinearAxis"},{"attributes":{},"id":"3fa8d7bf-b236-42b4-b2c5-ee17d5f381d8","type":"BasicTickFormatter"},{"attributes":{},"id":"91ba6137-8168-44bd-8c7d-e54da75ff633","type":"LinearScale"},{"attributes":{"plot":null,"text":"III"},"id":"a0a4aa6b-91fd-4fa3-b114-d57f6ba39123","type":"Title"},{"attributes":{},"id":"902922c6-6ea2-4f49-87c8-3db0cefcd044","type":"BasicTickFormatter"},{"attributes":{},"id":"89a5b75b-096b-410e-a77e-f575bf11076b","type":"BasicTickFormatter"},{"attributes":{},"id":"782d1526-8f2c-42a8-8332-21ca3cde98c0","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"b6b8c33e-747d-4fb5-8412-e18cb91bd2b4","type":"Circle"},{"attributes":{},"id":"b130a75e-5b88-4e04-9137-34926cd1faa7","type":"LinearScale"},{"attributes":{},"id":"73c74a18-6112-4fba-b84c-0e4f0ed1fe94","type":"BasicTicker"},{"attributes":{"children":[{"id":"914d735b-dfaa-4901-a2ba-679e73d1c33b","type":"Plot"},{"id":"38fc8d25-10ff-4654-814b-3aef881e7293","type":"Plot"}]},"id":"86bd123e-d1d4-40b8-a591-2c46298c7d69","type":"Row"},{"attributes":{"plot":{"id":"914d735b-dfaa-4901-a2ba-679e73d1c33b","type":"Plot"},"ticker":{"id":"73c74a18-6112-4fba-b84c-0e4f0ed1fe94","type":"BasicTicker"}},"id":"91e8be19-3dff-4432-be77-d2f5f96df42b","type":"Grid"},{"attributes":{},"id":"e7e3088e-40f7-423c-a14e-ce1255b50ee9","type":"LinearScale"},{"attributes":{},"id":"ffdcc206-d269-468b-b8b8-34d2042e5bf2","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"914d735b-dfaa-4901-a2ba-679e73d1c33b","type":"Plot"},"ticker":{"id":"ffdcc206-d269-468b-b8b8-34d2042e5bf2","type":"BasicTicker"}},"id":"0a9e1234-11ef-4474-9bd7-452aa0b65402","type":"Grid"},{"attributes":{},"id":"ad9bdf32-f014-4119-887c-4f626b8f0b30","type":"BasicTickFormatter"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8dbc23d2-463d-409f-aa9a-cf72045b5848","type":"Line"},{"attributes":{"data_source":{"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"},"glyph":{"id":"8dbc23d2-463d-409f-aa9a-cf72045b5848","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d724c936-691a-466f-804f-65ff93454c3e","type":"CDSView"}},"id":"f0f0137c-d31e-4cf3-b22a-ae27cb5d28ed","type":"GlyphRenderer"},{"attributes":{},"id":"0a85dd79-f946-49bc-b0fc-4ab2149d279a","type":"LinearScale"},{"attributes":{},"id":"2866c837-4150-4705-b64c-656d9b356864","type":"LinearScale"},{"attributes":{"source":{"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"}},"id":"d724c936-691a-466f-804f-65ff93454c3e","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"15c9cf16-9771-43fe-ab79-e9d324ae39c7","type":"Toolbar"},{"attributes":{},"id":"11ebb2b4-18dc-4752-9b49-83a212d9281e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"},"glyph":{"id":"b6b8c33e-747d-4fb5-8412-e18cb91bd2b4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b3c3c3cd-a282-41ec-86df-25c67d89e22f","type":"CDSView"}},"id":"f41a7803-31f9-461d-9ba4-99c38ab4232d","type":"GlyphRenderer"},{"attributes":{},"id":"0d5f6672-9b08-4fe5-a047-36cd3107dd12","type":"BasicTickFormatter"},{"attributes":{},"id":"b7ecd5cd-b6a9-4b3b-a1ce-e55d38e93426","type":"LinearScale"},{"attributes":{"source":{"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"}},"id":"b3c3c3cd-a282-41ec-86df-25c67d89e22f","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"512fb58d-8270-4f60-989b-752cc8cc7afe","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"04067128-bb44-464c-8ce2-8add7516c98a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"512fb58d-8270-4f60-989b-752cc8cc7afe","type":"LinearAxis"},{"id":"04067128-bb44-464c-8ce2-8add7516c98a","type":"LinearAxis"},{"id":"6a81ccc4-510d-4fc7-9874-68acd1eef3fd","type":"Grid"},{"id":"984d0bc7-4d19-4ad9-8823-734740e3828a","type":"Grid"},{"id":"e99366ba-0476-4280-b336-ad1654c7279f","type":"GlyphRenderer"},{"id":"a93cfb66-041d-404c-af84-d3d4c29ed926","type":"GlyphRenderer"}],"title":{"id":"68ab0107-24fa-49c0-afa9-24dd451aab34","type":"Title"},"toolbar":{"id":"15c9cf16-9771-43fe-ab79-e9d324ae39c7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d26bf533-9db6-4175-af42-3e9b6978c66b","type":"Range1d"},"x_scale":{"id":"b7ecd5cd-b6a9-4b3b-a1ce-e55d38e93426","type":"LinearScale"},"y_range":{"id":"0cbffce9-41e7-44b9-8437-955736ebea3b","type":"Range1d"},"y_scale":{"id":"9e928b06-b4dd-4af9-9b0c-0d3bcd5afd71","type":"LinearScale"}},"id":"38fc8d25-10ff-4654-814b-3aef881e7293","type":"Plot"},{"attributes":{},"id":"9e928b06-b4dd-4af9-9b0c-0d3bcd5afd71","type":"LinearScale"},{"attributes":{},"id":"502899de-35b3-4324-bae2-e06131e7c40f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xi","yi","xii","yii","xiii","yiii","xiv","yiv"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}}},"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bf1c6d53-5326-4a33-8dee-0eeb62327a88","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}}},"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"d26bf533-9db6-4175-af42-3e9b6978c66b","type":"Range1d"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"0cbffce9-41e7-44b9-8437-955736ebea3b","type":"Range1d"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"9c80fcc2-c2b6-467b-b861-1d7e88e64676","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"53a6573f-fe33-45ec-ab41-b01ced35033c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9c80fcc2-c2b6-467b-b861-1d7e88e64676","type":"LinearAxis"},{"id":"53a6573f-fe33-45ec-ab41-b01ced35033c","type":"LinearAxis"},{"id":"d5c83f98-4bd6-453f-8b60-bbe89315fea1","type":"Grid"},{"id":"341d02e7-f6cd-414f-95dd-31b13df41d30","type":"Grid"},{"id":"d9745583-af93-46ef-9f8d-b368ade03b96","type":"GlyphRenderer"},{"id":"0b164033-c284-4a29-a6c1-af50d927c4d0","type":"GlyphRenderer"}],"title":{"id":"b9f7029d-5378-4023-8b98-eb5e51931c18","type":"Title"},"toolbar":{"id":"bf1c6d53-5326-4a33-8dee-0eeb62327a88","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d26bf533-9db6-4175-af42-3e9b6978c66b","type":"Range1d"},"x_scale":{"id":"7b156097-d447-4c94-8a28-4f35ce2a2fca","type":"LinearScale"},"y_range":{"id":"0cbffce9-41e7-44b9-8437-955736ebea3b","type":"Range1d"},"y_scale":{"id":"91ba6137-8168-44bd-8c7d-e54da75ff633","type":"LinearScale"}},"id":"77711bc6-5d8b-4af6-89d1-5fcf57135165","type":"Plot"},{"attributes":{"plot":null,"text":"I"},"id":"b9f7029d-5378-4023-8b98-eb5e51931c18","type":"Title"},{"attributes":{"source":{"id":"eaf856bb-7710-4c71-b58c-4d4c0aa9ad85","type":"ColumnDataSource"}},"id":"74fb3c95-9d7c-4e89-9b1b-eb7f47ee1916","type":"CDSView"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"89a5b75b-096b-410e-a77e-f575bf11076b","type":"BasicTickFormatter"},"plot":{"id":"77711bc6-5d8b-4af6-89d1-5fcf57135165","type":"Plot"},"ticker":{"id":"2ae7c4d2-234a-471f-96ad-28ec8b6bdb21","type":"BasicTicker"}},"id":"9c80fcc2-c2b6-467b-b861-1d7e88e64676","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"902922c6-6ea2-4f49-87c8-3db0cefcd044","type":"BasicTickFormatter"},"plot":{"id":"77711bc6-5d8b-4af6-89d1-5fcf57135165","type":"Plot"},"ticker":{"id":"a16560e6-0447-4e6e-9b71-fe282abf8c30","type":"BasicTicker"}},"id":"53a6573f-fe33-45ec-ab41-b01ced35033c","type":"LinearAxis"},{"attributes":{},"id":"2ae7c4d2-234a-471f-96ad-28ec8b6bdb21","type":"BasicTicker"},{"attributes":{"plot":{"id":"77711bc6-5d8b-4af6-89d1-5fcf57135165","type":"Plot"},"ticker":{"id":"2ae7c4d2-234a-471f-96ad-28ec8b6bdb21","type":"BasicTicker"}},"id":"d5c83f98-4bd6-453f-8b60-bbe89315fea1","type":"Grid"},{"attributes":{},"id":"a16560e6-0447-4e6e-9b71-fe282abf8c30","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"77711bc6-5d8b-4af6-89d1-5fcf57135165","type":"Plot"},"ticker":{"id":"a16560e6-0447-4e6e-9b71-fe282abf8c30","type":"BasicTicker"}},"id":"341d02e7-f6cd-414f-95dd-31b13df41d30","type":"Grid"},{"attributes":{},"id":"1dedc0f5-39e8-46a2-a307-016400309c8f","type":"BasicTicker"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"212ad049-dee2-4833-86a3-666dc7c00cbd","type":"Line"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"b0d4ffc0-f05a-4607-b02f-8f9dad715d7b","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f095ed4c-f8f0-482f-9185-f8966c2a94b2","type":"Toolbar"},{"attributes":{"data_source":{"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"},"glyph":{"id":"b0d4ffc0-f05a-4607-b02f-8f9dad715d7b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1d5101eb-7235-4dd1-9089-6d43c5a5d0ce","type":"CDSView"}},"id":"0b164033-c284-4a29-a6c1-af50d927c4d0","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2027073d-efd0-473d-b5c6-dd9d5a201fb8","type":"ColumnDataSource"}},"id":"1d5101eb-7235-4dd1-9089-6d43c5a5d0ce","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"dc897d0e-8fc2-4e3f-be83-d3b1729da02a","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"ee704728-5a91-4912-a602-dc357083cc79","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"dc897d0e-8fc2-4e3f-be83-d3b1729da02a","type":"LinearAxis"},{"id":"ee704728-5a91-4912-a602-dc357083cc79","type":"LinearAxis"},{"id":"2709006b-2c26-45d0-9fad-87f3c3e8ed0c","type":"Grid"},{"id":"772457b7-3f52-4b8c-8dd8-7484c4341bdc","type":"Grid"},{"id":"e8b40375-b06e-4296-8c96-a09ba05f4eab","type":"GlyphRenderer"},{"id":"8b8728e9-879e-4f48-bc5f-d6328efe70c7","type":"GlyphRenderer"}],"title":{"id":"1f419a90-1185-49b0-9d64-38972177635c","type":"Title"},"toolbar":{"id":"f095ed4c-f8f0-482f-9185-f8966c2a94b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d26bf533-9db6-4175-af42-3e9b6978c66b","type":"Range1d"},"x_scale":{"id":"b130a75e-5b88-4e04-9137-34926cd1faa7","type":"LinearScale"},"y_range":{"id":"0cbffce9-41e7-44b9-8437-955736ebea3b","type":"Range1d"},"y_scale":{"id":"e7e3088e-40f7-423c-a14e-ce1255b50ee9","type":"LinearScale"}},"id":"4b722c65-3b6c-4bd3-b8d3-39f19771fe17","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"ad9bdf32-f014-4119-887c-4f626b8f0b30","type":"BasicTickFormatter"},"plot":{"id":"4b722c65-3b6c-4bd3-b8d3-39f19771fe17","type":"Plot"},"ticker":{"id":"ec782098-89a1-45c3-96ac-9904e60195e3","type":"BasicTicker"}},"id":"dc897d0e-8fc2-4e3f-be83-d3b1729da02a","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"3fa8d7bf-b236-42b4-b2c5-ee17d5f381d8","type":"BasicTickFormatter"},"plot":{"id":"4b722c65-3b6c-4bd3-b8d3-39f19771fe17","type":"Plot"},"ticker":{"id":"1dedc0f5-39e8-46a2-a307-016400309c8f","type":"BasicTicker"}},"id":"ee704728-5a91-4912-a602-dc357083cc79","type":"LinearAxis"},{"attributes":{"plot":null,"text":"II"},"id":"1f419a90-1185-49b0-9d64-38972177635c","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"08578eea-ce9d-4d5b-b357-6610f6c1d162","type":"Circle"},{"attributes":{},"id":"ec782098-89a1-45c3-96ac-9904e60195e3","type":"BasicTicker"},{"attributes":{"plot":{"id":"4b722c65-3b6c-4bd3-b8d3-39f19771fe17","type":"Plot"},"ticker":{"id":"ec782098-89a1-45c3-96ac-9904e60195e3","type":"BasicTicker"}},"id":"2709006b-2c26-45d0-9fad-87f3c3e8ed0c","type":"Grid"}],"root_ids":["69801583-816c-4a2f-beca-21b1b6126b73"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"a662b479-e9e7-4b90-8bc1-8eef9bf46849","elementid":"9b38d712-f890-4994-a2e9-ae02d0629957","modelid":"69801583-816c-4a2f-beca-21b1b6126b73"}];
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