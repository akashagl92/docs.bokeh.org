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
      };var element = document.getElementById("69ee4569-82c6-48db-a6d5-f11608ec050c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69ee4569-82c6-48db-a6d5-f11608ec050c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"512baeb2-6a1c-4885-995b-9b9e5971edd0":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"3051eb35-0a53-4c75-860f-b231720b8b57","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c966ac3-82f3-4409-95c5-8f7bc863bd6b","type":"BasicTicker"}},"id":"e8abe5bd-efd0-4b5a-a5f8-4354375eeaca","type":"Grid"},{"attributes":{"callback":null},"id":"8d34741e-fc95-4bfd-bf94-b74b71a30f94","type":"DataRange1d"},{"attributes":{},"id":"76168238-e41d-4f9e-97e0-511146267e49","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"6758c014-b776-45c6-9fea-1762b4ca21f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9a36208-605f-4a13-b69d-18a3fac2ab12","type":"BasicTicker"}},"id":"760377be-220b-415f-b398-d38a815edd0f","type":"Grid"},{"attributes":{},"id":"ab5ced28-dd4d-4f7d-94a3-f92802a2f6f5","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0452905e-56ae-4a50-9a27-8513bd4654b6","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5243940b-07e9-46a1-9c7d-3cd8357f435f","type":"Circle"},{"attributes":{"source":{"id":"1abcf7af-3c76-4a70-9df2-b9e79088b06b","type":"ColumnDataSource"}},"id":"d3ea4739-ca75-44b0-b946-c1ab28e59ede","type":"CDSView"},{"attributes":{},"id":"c754dbe2-9e02-474b-a101-c59eaf4d0bf7","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"a84b9566-e7ac-45f2-b63a-9525cb180450","type":"BoxAnnotation"}},"id":"932aa171-d71c-4ad7-86ed-aa0d667f2036","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"bcd3462b-5475-47bb-a38a-811544f5a48b","type":"LinearAxis"}],"left":[{"id":"c7a41e03-a2c8-4298-829f-a5465cb47444","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"bcd3462b-5475-47bb-a38a-811544f5a48b","type":"LinearAxis"},{"id":"76646298-82a6-4282-8620-f4f155d657f3","type":"Grid"},{"id":"c7a41e03-a2c8-4298-829f-a5465cb47444","type":"LinearAxis"},{"id":"e8abe5bd-efd0-4b5a-a5f8-4354375eeaca","type":"Grid"},{"id":"9f4bce65-f43f-4e94-92b9-68599df332c9","type":"BoxAnnotation"},{"id":"aea003d2-8ff8-47c9-8361-0ec3cddfc893","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"57ab7f86-2e6d-4459-b324-0936383652ca","type":"Toolbar"},"x_range":{"id":"8d34741e-fc95-4bfd-bf94-b74b71a30f94","type":"DataRange1d"},"x_scale":{"id":"c1b6bb2c-427d-49e3-b52f-a4c12046017a","type":"LinearScale"},"y_range":{"id":"59328435-3267-448f-890f-3836de73c6b3","type":"DataRange1d"},"y_scale":{"id":"35c9f6d9-e7cf-4a35-b2f9-a2a2323a8044","type":"LinearScale"}},"id":"3051eb35-0a53-4c75-860f-b231720b8b57","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"9c9f953c-a959-49b5-8f32-d4a6c351c7a1","type":"BasicTickFormatter"},"plot":{"id":"6758c014-b776-45c6-9fea-1762b4ca21f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9a36208-605f-4a13-b69d-18a3fac2ab12","type":"BasicTicker"}},"id":"8ba5e76b-46a3-45ba-aa3d-04b5466c1f0e","type":"LinearAxis"},{"attributes":{},"id":"8bafd61c-d212-4bd2-8a9c-a1d0e19e2767","type":"SaveTool"},{"attributes":{},"id":"30b35015-02d1-47b8-a695-2c5ce94745ce","type":"SaveTool"},{"attributes":{},"id":"e9a8bc26-17df-4637-b191-11021b91c165","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a84b9566-e7ac-45f2-b63a-9525cb180450","type":"BoxAnnotation"},{"attributes":{},"id":"3847d640-b6ef-4724-b9a3-10b6b9471a81","type":"PanTool"},{"attributes":{},"id":"49062b92-6946-4b49-847a-280e72ec5497","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1abcf7af-3c76-4a70-9df2-b9e79088b06b","type":"ColumnDataSource"},"glyph":{"id":"c4f37b78-137a-4ba6-a9e2-54759d33f53f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5243940b-07e9-46a1-9c7d-3cd8357f435f","type":"Circle"},"selection_glyph":null,"view":{"id":"d3ea4739-ca75-44b0-b946-c1ab28e59ede","type":"CDSView"}},"id":"1bc79cd8-0b9c-4cab-8403-460c1d14f00a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0b983eb6-9611-426e-80c1-324325e28dc6","type":"ColumnDataSource"},"glyph":{"id":"15cdc27d-b52e-42f9-8934-b35305a8286e","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ea95b3df-5382-462f-a669-716f7be5e570","type":"Triangle"},"selection_glyph":null,"view":{"id":"32419f17-5908-483b-9580-c7ee728d63cb","type":"CDSView"}},"id":"aea003d2-8ff8-47c9-8361-0ec3cddfc893","type":"GlyphRenderer"},{"attributes":{},"id":"a9a36208-605f-4a13-b69d-18a3fac2ab12","type":"BasicTicker"},{"attributes":{},"id":"01d9f6ec-9941-4fb4-9b5b-716594c545f1","type":"LinearScale"},{"attributes":{"plot":{"id":"6758c014-b776-45c6-9fea-1762b4ca21f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"abe58fcb-0bb1-4b6c-af4b-6f53a51e76bc","type":"BasicTicker"}},"id":"9a5cc28f-1f4d-4ec8-b2ed-ce7adf4b7e91","type":"Grid"},{"attributes":{"plot":{"id":"3051eb35-0a53-4c75-860f-b231720b8b57","subtype":"Figure","type":"Plot"},"ticker":{"id":"083251ca-0ba0-4882-a6b5-04454a150c0a","type":"BasicTicker"}},"id":"76646298-82a6-4282-8620-f4f155d657f3","type":"Grid"},{"attributes":{},"id":"3c0c53c3-f8ce-432b-bf6b-3138bbda405a","type":"LinearScale"},{"attributes":{},"id":"01af8e6c-15fe-4578-87ee-b671ee035350","type":"ResetTool"},{"attributes":{"callback":null},"id":"3a475e3d-1f8e-4ab9-9447-821127673dcd","type":"DataRange1d"},{"attributes":{},"id":"7b6b41b6-8ddf-49a4-b22f-c0f8ff003923","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"76168238-e41d-4f9e-97e0-511146267e49","type":"PanTool"},{"id":"49062b92-6946-4b49-847a-280e72ec5497","type":"WheelZoomTool"},{"id":"932aa171-d71c-4ad7-86ed-aa0d667f2036","type":"BoxZoomTool"},{"id":"30b35015-02d1-47b8-a695-2c5ce94745ce","type":"SaveTool"},{"id":"01af8e6c-15fe-4578-87ee-b671ee035350","type":"ResetTool"},{"id":"e9a8bc26-17df-4637-b191-11021b91c165","type":"HelpTool"}]},"id":"d06d9104-9ffc-44a7-8537-65fc2ca13440","type":"Toolbar"},{"attributes":{"formatter":{"id":"024e377d-584a-43b1-984f-3e380ec5fe8a","type":"BasicTickFormatter"},"plot":{"id":"6758c014-b776-45c6-9fea-1762b4ca21f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"abe58fcb-0bb1-4b6c-af4b-6f53a51e76bc","type":"BasicTicker"}},"id":"9116975e-a086-4036-a17a-0c69f946847d","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4f37b78-137a-4ba6-a9e2-54759d33f53f","type":"Circle"},{"attributes":{},"id":"024e377d-584a-43b1-984f-3e380ec5fe8a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"953b3fae-afda-444c-a83b-f0dd5a8403fb","type":"DataRange1d"},{"attributes":{},"id":"4b484885-f266-450d-8805-f3f021a8763c","type":"HelpTool"},{"attributes":{},"id":"abe58fcb-0bb1-4b6c-af4b-6f53a51e76bc","type":"BasicTicker"},{"attributes":{},"id":"9c9f953c-a959-49b5-8f32-d4a6c351c7a1","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9116975e-a086-4036-a17a-0c69f946847d","type":"LinearAxis"}],"left":[{"id":"8ba5e76b-46a3-45ba-aa3d-04b5466c1f0e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9116975e-a086-4036-a17a-0c69f946847d","type":"LinearAxis"},{"id":"9a5cc28f-1f4d-4ec8-b2ed-ce7adf4b7e91","type":"Grid"},{"id":"8ba5e76b-46a3-45ba-aa3d-04b5466c1f0e","type":"LinearAxis"},{"id":"760377be-220b-415f-b398-d38a815edd0f","type":"Grid"},{"id":"a84b9566-e7ac-45f2-b63a-9525cb180450","type":"BoxAnnotation"},{"id":"1bc79cd8-0b9c-4cab-8403-460c1d14f00a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d06d9104-9ffc-44a7-8537-65fc2ca13440","type":"Toolbar"},"x_range":{"id":"953b3fae-afda-444c-a83b-f0dd5a8403fb","type":"DataRange1d"},"x_scale":{"id":"3c0c53c3-f8ce-432b-bf6b-3138bbda405a","type":"LinearScale"},"y_range":{"id":"3a475e3d-1f8e-4ab9-9447-821127673dcd","type":"DataRange1d"},"y_scale":{"id":"01d9f6ec-9941-4fb4-9b5b-716594c545f1","type":"LinearScale"}},"id":"6758c014-b776-45c6-9fea-1762b4ca21f6","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"0c9162d9-d843-4294-89f5-d865556fe502","type":"BasicTickFormatter"},"plot":{"id":"b275dc3b-b258-4642-9a36-9c743eb76017","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b6b41b6-8ddf-49a4-b22f-c0f8ff003923","type":"BasicTicker"}},"id":"26bcfd57-50ec-4f41-9d76-241cd9157c7a","type":"LinearAxis"},{"attributes":{},"id":"9c966ac3-82f3-4409-95c5-8f7bc863bd6b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"15cdc27d-b52e-42f9-8934-b35305a8286e","type":"Triangle"},{"attributes":{},"id":"39f699c9-4add-4bed-9412-67bfb589d64f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"1abcf7af-3c76-4a70-9df2-b9e79088b06b","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"26bcfd57-50ec-4f41-9d76-241cd9157c7a","type":"LinearAxis"}],"left":[{"id":"f7ea17db-0934-4c3a-96cc-bf292298c08b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26bcfd57-50ec-4f41-9d76-241cd9157c7a","type":"LinearAxis"},{"id":"91a9f2c4-fed3-4dd2-a045-3f56b5371ad1","type":"Grid"},{"id":"f7ea17db-0934-4c3a-96cc-bf292298c08b","type":"LinearAxis"},{"id":"733d759f-7cc7-4a98-a930-489ffb190c95","type":"Grid"},{"id":"e7bdc850-7190-407c-8b26-3687bc0a9200","type":"BoxAnnotation"},{"id":"64e4a0ae-6ba1-4ff5-ab81-acbf2c3f1194","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26731119-4f54-4b29-8f5d-0c172fa1b939","type":"Toolbar"},"x_range":{"id":"546d6d6a-73c6-490f-bad1-c4e29460b83f","type":"DataRange1d"},"x_scale":{"id":"219df8af-3359-416e-a510-782d0567bbd1","type":"LinearScale"},"y_range":{"id":"40a2d822-9c03-468d-8e41-bf7e5c024d22","type":"DataRange1d"},"y_scale":{"id":"41ae6868-153a-4de4-9061-f88984f5c1d1","type":"LinearScale"}},"id":"b275dc3b-b258-4642-9a36-9c743eb76017","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41ae6868-153a-4de4-9061-f88984f5c1d1","type":"LinearScale"},{"attributes":{"source":{"id":"0b983eb6-9611-426e-80c1-324325e28dc6","type":"ColumnDataSource"}},"id":"32419f17-5908-483b-9580-c7ee728d63cb","type":"CDSView"},{"attributes":{"data_source":{"id":"1dc75fc6-6570-4279-bc35-ac0207a5d380","type":"ColumnDataSource"},"glyph":{"id":"40abf856-3728-4ecd-b84f-871f8c8ce784","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0452905e-56ae-4a50-9a27-8513bd4654b6","type":"Square"},"selection_glyph":null,"view":{"id":"90507d63-e569-4829-adc5-8af5895bfced","type":"CDSView"}},"id":"64e4a0ae-6ba1-4ff5-ab81-acbf2c3f1194","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b275dc3b-b258-4642-9a36-9c743eb76017","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b6b41b6-8ddf-49a4-b22f-c0f8ff003923","type":"BasicTicker"}},"id":"91a9f2c4-fed3-4dd2-a045-3f56b5371ad1","type":"Grid"},{"attributes":{"formatter":{"id":"39f699c9-4add-4bed-9412-67bfb589d64f","type":"BasicTickFormatter"},"plot":{"id":"3051eb35-0a53-4c75-860f-b231720b8b57","subtype":"Figure","type":"Plot"},"ticker":{"id":"083251ca-0ba0-4882-a6b5-04454a150c0a","type":"BasicTicker"}},"id":"bcd3462b-5475-47bb-a38a-811544f5a48b","type":"LinearAxis"},{"attributes":{},"id":"960b5083-4520-4bfe-beb5-79acce9d8d59","type":"WheelZoomTool"},{"attributes":{},"id":"b420bc54-9ba3-476e-9195-13c23dc57491","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"6758c014-b776-45c6-9fea-1762b4ca21f6","subtype":"Figure","type":"Plot"},{"id":"3051eb35-0a53-4c75-860f-b231720b8b57","subtype":"Figure","type":"Plot"},{"id":"b275dc3b-b258-4642-9a36-9c743eb76017","subtype":"Figure","type":"Plot"}]},"id":"90e1d8fe-e875-4a21-8370-fde5d2467acd","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3847d640-b6ef-4724-b9a3-10b6b9471a81","type":"PanTool"},{"id":"c754dbe2-9e02-474b-a101-c59eaf4d0bf7","type":"WheelZoomTool"},{"id":"3ccd202c-83ea-45ce-8018-e96690364622","type":"BoxZoomTool"},{"id":"604b8791-7fc8-49ec-b36e-5bad40ef406b","type":"SaveTool"},{"id":"ab5ced28-dd4d-4f7d-94a3-f92802a2f6f5","type":"ResetTool"},{"id":"4b484885-f266-450d-8805-f3f021a8763c","type":"HelpTool"}]},"id":"57ab7f86-2e6d-4459-b324-0936383652ca","type":"Toolbar"},{"attributes":{},"id":"1ba05bd3-9585-4dc9-9e27-5b02da337014","type":"HelpTool"},{"attributes":{"formatter":{"id":"86072613-e95c-4369-8cde-2bdf10635804","type":"BasicTickFormatter"},"plot":{"id":"3051eb35-0a53-4c75-860f-b231720b8b57","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c966ac3-82f3-4409-95c5-8f7bc863bd6b","type":"BasicTicker"}},"id":"c7a41e03-a2c8-4298-829f-a5465cb47444","type":"LinearAxis"},{"attributes":{},"id":"6c18f90b-811f-439e-aae9-5ad32180f842","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e7bdc850-7190-407c-8b26-3687bc0a9200","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"0b983eb6-9611-426e-80c1-324325e28dc6","type":"ColumnDataSource"},{"attributes":{},"id":"0c9162d9-d843-4294-89f5-d865556fe502","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"59328435-3267-448f-890f-3836de73c6b3","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"40abf856-3728-4ecd-b84f-871f8c8ce784","type":"Square"},{"attributes":{"overlay":{"id":"e7bdc850-7190-407c-8b26-3687bc0a9200","type":"BoxAnnotation"}},"id":"5323941b-1a73-4421-b5e6-2b74116bf216","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"1dc75fc6-6570-4279-bc35-ac0207a5d380","type":"ColumnDataSource"},{"attributes":{},"id":"4af58fa6-a274-4a29-b458-919186c646e7","type":"ResetTool"},{"attributes":{"callback":null},"id":"546d6d6a-73c6-490f-bad1-c4e29460b83f","type":"DataRange1d"},{"attributes":{},"id":"35c9f6d9-e7cf-4a35-b2f9-a2a2323a8044","type":"LinearScale"},{"attributes":{"callback":null},"id":"40a2d822-9c03-468d-8e41-bf7e5c024d22","type":"DataRange1d"},{"attributes":{"overlay":{"id":"9f4bce65-f43f-4e94-92b9-68599df332c9","type":"BoxAnnotation"}},"id":"3ccd202c-83ea-45ce-8018-e96690364622","type":"BoxZoomTool"},{"attributes":{},"id":"219df8af-3359-416e-a510-782d0567bbd1","type":"LinearScale"},{"attributes":{},"id":"0cefcbc9-0d67-4ce8-aa87-ec6fd139ea4f","type":"PanTool"},{"attributes":{},"id":"c1b6bb2c-427d-49e3-b52f-a4c12046017a","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"b275dc3b-b258-4642-9a36-9c743eb76017","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c18f90b-811f-439e-aae9-5ad32180f842","type":"BasicTicker"}},"id":"733d759f-7cc7-4a98-a930-489ffb190c95","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9f4bce65-f43f-4e94-92b9-68599df332c9","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"b420bc54-9ba3-476e-9195-13c23dc57491","type":"BasicTickFormatter"},"plot":{"id":"b275dc3b-b258-4642-9a36-9c743eb76017","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c18f90b-811f-439e-aae9-5ad32180f842","type":"BasicTicker"}},"id":"f7ea17db-0934-4c3a-96cc-bf292298c08b","type":"LinearAxis"},{"attributes":{},"id":"86072613-e95c-4369-8cde-2bdf10635804","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0cefcbc9-0d67-4ce8-aa87-ec6fd139ea4f","type":"PanTool"},{"id":"960b5083-4520-4bfe-beb5-79acce9d8d59","type":"WheelZoomTool"},{"id":"5323941b-1a73-4421-b5e6-2b74116bf216","type":"BoxZoomTool"},{"id":"8bafd61c-d212-4bd2-8a9c-a1d0e19e2767","type":"SaveTool"},{"id":"4af58fa6-a274-4a29-b458-919186c646e7","type":"ResetTool"},{"id":"1ba05bd3-9585-4dc9-9e27-5b02da337014","type":"HelpTool"}]},"id":"26731119-4f54-4b29-8f5d-0c172fa1b939","type":"Toolbar"},{"attributes":{},"id":"083251ca-0ba0-4882-a6b5-04454a150c0a","type":"BasicTicker"},{"attributes":{},"id":"604b8791-7fc8-49ec-b36e-5bad40ef406b","type":"SaveTool"},{"attributes":{"source":{"id":"1dc75fc6-6570-4279-bc35-ac0207a5d380","type":"ColumnDataSource"}},"id":"90507d63-e569-4829-adc5-8af5895bfced","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea95b3df-5382-462f-a669-716f7be5e570","type":"Triangle"}],"root_ids":["90e1d8fe-e875-4a21-8370-fde5d2467acd"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"512baeb2-6a1c-4885-995b-9b9e5971edd0","elementid":"69ee4569-82c6-48db-a6d5-f11608ec050c","modelid":"90e1d8fe-e875-4a21-8370-fde5d2467acd"}];
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