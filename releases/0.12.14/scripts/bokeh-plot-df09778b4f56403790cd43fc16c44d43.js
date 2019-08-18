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
      };var element = document.getElementById("d664aac6-30a6-4104-9294-34c55d57b189");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd664aac6-30a6-4104-9294-34c55d57b189' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"63f11e3b-6c29-4058-9ffc-0af2e5402a87":{"roots":{"references":[{"attributes":{"data_source":{"id":"f4eacb0d-d92a-43f5-b4d2-717a85a23a42","type":"ColumnDataSource"},"glyph":{"id":"128f3472-0d79-4014-ae8a-771b4050694e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4e95e477-fc9c-40f9-9266-c5855ea118eb","type":"Circle"},"selection_glyph":null,"view":{"id":"e4a53b16-12d7-47e1-b6b3-02ebda9f2068","type":"CDSView"}},"id":"c47a3bb5-61a5-4b64-903a-f9d464712639","type":"GlyphRenderer"},{"attributes":{"callback":{"id":"19331323-ce01-420b-b211-c2a21aca1839","type":"CustomJS"},"column_names":["x","y"],"data":{"x":[0.536440621352244,0.35844478721660766,0.05368576006585457,0.6198400971446449,0.8416454934032157,0.9549858203190019,0.66337446730811,0.1471737375188772,0.6613119040799036,0.5344914090516054,0.7808503402792942,0.07588040234935778,0.7547179540640087,0.8849497460893925,0.24297705541993353,0.6335243469930326,0.6975000792679319,0.23930606632177043,0.8701039232824749,0.6880566551033677,0.06905326971974068,0.4118776888293806,0.052879171623164356,0.3964592240783792,0.4226082111683904,0.6756566495480155,0.750283668820294,0.19457899081591767,0.3931618578429582,0.29132904758636735,0.11322905865767097,0.3099838652477047,0.5106832930387467,0.794001638751081,0.6414676970195042,0.6336372009059513,0.3054059566222459,0.21093216051589014,0.2529399479646467,0.9177615523025701,0.6809375102262315,0.18352050392720975,0.8066204985759381,0.3384778177849711,0.38909936983619176,0.367351823363982,0.3948136440782285,0.6703954803357239,0.4117971041016709,0.9731252972199501,0.3553190674702559,0.1798389520950341,0.9794449824610081,0.6901703849513066,0.5708415221340691,0.4770048307525768,0.3657520703216016,0.8853376802404243,0.6267691488740055,0.8106252882334223,0.6399766806295327,0.5354346283383045,0.5022225315858216,0.5188969392535276,0.9412717213632749,0.28302256179114615,0.11196234587450282,0.3949607890560972,0.2294757383535827,0.7076131608165671,0.030718969580760258,0.5110519059978061,0.0722020963885075,0.6703230960474547,0.1807747404979173,0.8465023647126577,0.4876302095909224,0.5119217425190579,0.6079683347442337,0.28475966032677336,0.4207166359088975,0.6143427751335736,0.34631844156011315,0.5859783404580772,0.5673501575734161,0.12393475660152431,0.28054926967884664,0.05449769932980464,0.9746180916177576,0.8777214077765086,0.31445588184485485,0.7354391523370616,0.9333253416393179,0.5419667950539029,0.59638206502584,0.67274137032204,0.2999420110227061,0.6214732715547869,0.3373429150831657,0.1442725751196643,0.46409042560100755,0.17403286701240284,0.9524245842259068,0.1662183182686635,0.9606434372224187,0.9367323423136769,0.5854501198143605,0.9242117622190876,0.1449696492369903,0.29843676944915987,0.7872773853396028,0.6870778346946688,0.9479082819931977,0.07690666264462032,0.8713014741341625,0.009856113806884115,0.6225586818467372,0.8817530113567313,0.9315867971443658,0.6276178108460478,0.5793937164919027,0.6923359689515937,0.479933566228365,0.25333319592016046,0.5333064434866899,0.08242665658889525,0.7980783218929814,0.7316719159273589,0.24770403395054974,0.4508166053213234,0.8775338789866725,0.9913868465577383,0.4237623096976483,0.46182409854331796,0.8166150163774292,0.4235443687500742,0.20973244519240686,0.04758757126373325,0.4103434289697778,0.7770291928110871,0.843951677394313,0.4021295245477714,0.36878200215742785,0.2823933727479496,0.05744217572047572,0.0010874305066411738,0.704001001702905,0.005887947373516389,0.8598202778102771,0.19453368436763763,0.7843990186199775,0.20549706599935103,0.5643410692945321,0.32114326860754916,0.83180520876685,0.29612198268692047,0.9975026141772781,0.29784581481010064,0.8684625456906706,0.8493739221596285,0.3816129622704597,0.3463517733722856,0.5567979254451854,0.04125721249072878,0.670001873407208,0.4495030371747044,0.6109814828254663,0.0467324405994356,0.7201131659776059,0.8473530640504188,0.602583788170794,0.2597114215450774,0.1737931672784917,0.4975143923898233,0.6143572344482527,0.573298945844342,0.3209159114664457,0.5242987343381427,0.3969915828414834,0.9568354995923236,0.07172765544610749,0.11275178127488261,0.7037250744765621,0.1506556620940609,0.8827347059475216,0.3383148196282322,0.6392487590116517,0.38725831312745984,0.5444744248481892,0.20948628222741927,0.20349991219160823,0.4248981830218507,0.7046859978238015,0.348454557401225,0.007043835871722082,0.5337464353152773,0.38979461295979423,0.09272025719930288,0.6433227613100306,0.4709473845948382,0.5471106467832547,0.061864719517280786,0.7034798036674551,0.15250519750391367,0.19069984399364248,0.846199189325354,0.05926994787619466,0.36378889165595496,0.782528170448767,0.7759921034782793,0.20965313538198582,0.37760446127728353,0.9298088017275066,0.4598934319479513,0.5769740658070497,0.15366932060321992,0.22507257403160186,0.8968100564160916,0.8894942155500879,0.21679404897566612,0.8318422030850582,0.6886368555583439,0.9907745333089635,0.5358247031073105,0.6681192448588321,0.38244863855794586,0.3461815263222998,0.3434603873644362,0.9043854611694798,0.004046162879830839,0.8245745741675251,0.6073033095084387,0.05128474034903152,0.6090652547285055,0.1682459550031551,0.8145145160404788,0.37332960184833386,0.9882582053016827,0.18604558373790536,0.6573087105563497,0.038882385575298106,0.9944668822204619,0.463288450049665,0.8350964006804188,0.49595551543598615,0.7240469151352485,0.12060663092328672,0.8685095723236015,0.9747828318964321,0.7865916020823133,0.10755469244776938,0.707887129399787,0.5600270058420747,0.12800616093913753,0.6175953953291691,0.6813492653561445,0.21945760015753268,0.20527759242583432,0.287368986186474,0.6410007299159428,0.35783103134190664,0.1771363045567489,0.7067911716343414,0.2544423821433571,0.4005786902287558,0.6934570941273158,0.6609266819932678,0.764987295823452,0.9943673491515927,0.44645344339676885,0.07762325136401427,0.4504383116544458,0.37234149529939886,0.466997773391151,0.8246296335371253,0.6305729986327834,0.630266395906309,0.6661529888387264,0.5911419753520348,0.08325251989847882,0.20805961373918314,0.2382069106683059,0.916705194059718,0.24802002435353676,0.9771072069588609,0.5856813039513044,0.4925611471577295,0.6188657890025957,0.07934578988038454,0.06690877043136911,0.46891620833920256,0.10010228624618767,0.4624601183468341,0.488103832794731,0.39215019107250926,0.9513110102559797,0.39892421981990733,0.7081210913733691,0.29283687665951375,0.02134547906116413,0.2568523316400081,0.42679324139170427,0.8158864893902054,0.11041939281951196,0.9469165227948357,0.49400886717906145,0.6011305416443484,0.7919207141801119,0.939793354655021,0.21426880635024703,0.6346195019047203,0.90009266502203,0.7025745163027949,0.7708066944029198,0.5934785105584645,0.2306271662123296,0.054394618325361965,0.6693225781410517,0.353402466559687,0.6431799339724544,0.20974887088153582,0.8307839760415855,0.30531014413241997,0.9472563762668215,0.30365917704649015,0.15021118224677232,0.09978275619689836,0.26303786291927367,0.12867017292746574,0.4224762286296396,0.2445052188441832,0.09570244356339574,0.3952018501617399,0.07391257915149041,0.33732733434475226,0.6350203067338979,0.049279726955866576,0.002987939046527166,0.2803820220871588,0.918549063085913,0.8708203727639282,0.308169985824729,0.7009860761772652,0.5844334045919051,0.0074620475318171176,0.3380971252982782,0.7529993676599367,0.1449720267497312,0.7365177288472379,0.14171434471326994,0.9695881186141881,0.7659528386191892,0.776290094090083,0.14860882613768012,0.5396961481425732,0.3126247293446308,0.5256288795420891,0.9825631034296499,0.6682337913987081,0.6532553196892867,0.8454533778195468,0.7057471128974065,0.2866694877708833,0.45999446028238267,0.915256789495967,0.46217626421140645,0.4805297828751317,0.07162331475849015,0.1841475717672063,0.9827715363551115,0.6153120500474185,0.03846423698820556,0.9420669181141017,0.613557162886912,0.22461024333876511,0.40157001108297585,0.5569716183303146,0.3286297674487805,0.715265770198803,0.5380533412170362,0.44235003115936855,0.8420086876854003,0.7589590805313213,0.9446840421123769,0.9520742132226302,0.08891953804854524,0.2606254101786243,0.8318107249331528,0.050374630239070406,0.5928098050159063,0.5159222879572144,0.04676774160365349,0.05464889272264095,0.17494312940117895,0.681544817093877,0.8245794657069405,0.968684012252928,0.5948858316947281,0.8324359496428948,0.1494401597934567,0.6576409433842771,0.6617056599003224,0.8292361706357033,0.8641731322188333,0.04199236138546791,0.7020169587435499,0.6873637046965969,0.792747790607407,0.5222109590048817,0.06872235763086809,0.08054296357801294,0.9303202576659172,0.41235860837030947,0.17922679408318054,0.38433860290696176,0.35423126923262815,0.6739865065184026,0.3845323952143861,0.4311128957163334,0.9135349501377978,0.10927760934474506,0.5598387737395464,0.06230089658057514,0.7829829380904063,0.055610134949324874,0.9424391217404456,0.41946582466536486,0.09527682388967429,0.4967519872307129,0.12277935692231023,0.34630322625968857,0.20745746356064954,0.9495948914500235,0.2008193585525032,0.6468233898101593,0.29193831042707974,0.08060870363936934,0.8138673216781835,0.9198373002071845,0.6344639496214967,0.4510192223757985,0.9982821014105037,0.44948457152013277,0.13289076051998805,0.6317303085639182,0.17338247087070735,0.47069100388924867,0.036323444626527035,0.37714123607368877,0.8667022318432556,0.542707279294729,0.5471217494090532,0.9208164353077452,0.9494973134615134,0.07527987125168834,0.8792257795516273,0.6346202927014698,0.8294793575777502,0.483125169889174,0.7355396382542159,0.985077065892609,0.09967675570317314,0.3294685694241366,0.7748922397640103,0.13896367590758296,0.5474711866452887,0.7799897438800792,0.92570657552571,0.24177982728078395,0.8521182075135889,0.6317422482872261,0.36661524949266244,0.11036729167712689,0.48603572272286155,0.5879988292217159,0.4836799299739253,0.11238588253670001,0.8960862830909492,0.2841050681276648,0.9153941745093687,0.40511001997816165,0.6928081663010921,0.5376731971449611,0.4947723801654086,0.32488897768107416,0.999578743852862,0.3181818046275794,0.4010596923582753,0.3488291829599335,0.4944529398168328,0.1501366711356178,0.917422125232083,0.35660459281280255,0.6356826226709411,0.3550123222256425,0.49152673308521844,0.9439336258575758,0.5436407555714609,0.3844552662091205,0.8607028822371755],"y":[0.8537929610882504,0.5734891895538312,0.9874676023336046,0.8911590774996072,0.9683699073933261,0.7519345408465906,0.5368889643260012,0.8333062091221936,0.6040501510773402,0.5087264050880155,0.4779311167862873,0.5167932475674358,0.011380103510045592,0.16102814031741874,0.043892671779449555,0.3892814303846788,0.8270971377914095,0.5183414670402188,0.8503841497828791,0.060165107073787416,0.9625304017977309,0.6973301182292218,0.1242331928380156,0.45604248989826135,0.44120425233310623,0.3414625089246809,0.8164737788975255,0.49447693669079285,0.5816265709790758,0.5118367226454679,0.047372811051454744,0.8857892010502207,0.35335835821243944,0.008168156554086314,0.7793101927315446,0.7291890585490662,0.8928635381688383,0.6548982444712612,0.01874042058794867,0.2673559857646053,0.2966192871819253,0.6774189389599239,0.268904596584034,0.7606642305928744,0.5707562219235255,0.35498788661325875,0.2331322325773566,0.32800284500598587,0.7051909693986277,0.7410183741482127,0.16628980827000395,0.24364952914282,0.4017000120850671,0.9758982002617355,0.7660965019138576,0.8797966292436816,0.15746660932697643,0.8330440661726745,0.5266001854613446,0.9239022457445106,0.3793357040697185,0.9835437780875497,0.7991434388064694,0.7618834783519711,0.5339220303487764,0.6182699261382967,0.08397325629109009,0.23798417613352174,0.04698921143140555,0.20800463478640507,0.8518873720929053,0.4380588088782176,0.4995227513879119,0.037278301738128405,0.5275943100408717,0.4357493419220404,0.728177856103939,0.18130196914586705,0.7479461244286796,0.2859469863649282,0.5566987731702718,0.676365515250733,0.21661624547827973,0.3437828904420477,0.23815984453111905,0.034249746554109395,0.03856481146849178,0.6701530008991725,0.7469614138624464,0.1866067434669605,0.6262706734322584,0.42000268528583207,0.8987453734595978,0.4516220958352518,0.00258797613685402,0.2869688306908681,0.5011211167996996,0.819531266686369,0.7111526774680922,0.2671449575579331,0.9831479348353489,0.4469277547329209,0.4322594896410811,0.29463217963579413,0.0608292173691396,0.43491996426873214,0.6871587411179303,0.9473210593787558,0.4322618179024281,0.08496010819457689,0.4306174191549109,0.6564440669853023,0.4087492175281462,0.188984067715107,0.8458290922131618,0.40911026620670676,0.1903937197115857,0.5231521372708293,0.0823190265431839,0.9942628288958588,0.9468941614689081,0.8320620177024811,0.4931288109194256,0.768390055439846,0.2581535328026573,0.17587606973894465,0.5744620427710188,0.562711762772241,0.4339949389860822,0.027157012634414168,0.1788385338748819,0.5850960823992637,0.9282828671907073,0.5984447416545378,0.09894741519846462,0.16094930019629194,0.7545727688116296,0.5107636562266031,0.9133774133783547,0.6759816333105246,0.13446212608473074,0.559520486815248,0.9744389778492856,0.607912407568729,0.5822062353526544,0.85057072239758,0.06635044613844665,0.7644529066200968,0.9731706126891279,0.008988286403788015,0.8358643165665458,0.3501239116028725,0.3239655589896079,0.21769216016936732,0.7780904188961084,0.347391627143644,0.08296663462687759,0.9749558602571684,0.5909623048082608,0.8777143951735499,0.12413903374646151,0.649663379049953,0.25096097836574205,0.1414014341845381,0.05304543596023681,0.35670836365637915,0.5695034064378207,0.06787833857399117,0.4682036765971791,0.9174498759855577,0.2050738877869226,0.6845538653834597,0.8302739153606309,0.9552439593903549,0.22352630259865192,0.8107683192175269,0.7638574973636311,0.0652554516952274,0.23883797824368724,0.6166968855824573,0.8874219564881826,0.05881784292558323,0.09397314937887924,0.7765864205464245,0.6685956230044877,0.374148122908709,0.44660098724647845,0.7155050499600846,0.17598583146872337,0.7629444909960678,0.8001481248450836,0.6368769939091716,0.7241075578946502,0.286564183264267,0.7529429463173912,0.04217827879525471,0.7731458440277998,0.17915173808149076,0.03157023082369892,0.36267127415926637,0.07546761559314807,0.7229864093782765,0.9325412263864551,0.006940217266264703,0.48436700821952616,0.622385170401412,0.5384356585696926,0.18556512364422495,0.09969745562058219,0.530203500566596,0.35222710226820053,0.8240876964757131,0.1998154140099686,0.9176131519752392,0.6007081528052878,0.5685414136126382,0.14717020173947104,0.40531219601724344,0.20108751503959754,0.8232190872809095,0.7340718367939951,0.7093457824183552,0.5301453788756064,0.44618798284424177,0.8103841095716866,0.3779254771615912,0.8895646689860607,0.8963440945092601,0.04589664046383424,0.6443359756589572,0.47628355511601705,0.03622239320624332,0.19230531040187904,0.28076843392696416,0.8293245502468765,0.6388260756320413,0.01608403546822068,0.546171831627427,0.5718267768119597,0.22752950738319033,0.12013669178792341,0.9190392023619044,0.5357693044389498,0.045533831099785815,0.3724075787695511,0.3353882851609874,0.277121050597124,0.021047798279952956,0.03647178516535765,0.2693721096841055,0.41258422451637555,0.38010663248188137,0.46979332004958374,0.9617905305125548,0.6762776609365108,0.4023116057233854,0.3430748064558068,0.6026959724941026,0.6861160254414985,0.09375965554725041,0.5513916907871909,0.2640188692541303,0.7743560252917883,0.2039535400752741,0.9597934359812776,0.052152641187109605,0.7248153650284357,0.29256083419778733,0.2699390040918962,0.5527191897377959,0.3255760994038962,0.6263623733651413,0.6358169294381785,0.8396451179918909,0.693421987397255,0.444888651232192,0.1465422732621764,0.5478142477120923,0.4265390742140778,0.5945356483054118,0.43207153762617023,0.9112298417598155,0.2961089631406776,0.2814970149462177,0.41550357281768713,0.8500910535562229,0.4220430780830793,0.7863864494824944,0.3916066367491534,0.34006632761218736,0.27840572219594917,0.6997339309177223,0.1453400181636766,0.7582640885102555,0.6508541775542662,0.08312679341130425,0.13574240944753835,0.9154186875147111,0.3089938810159075,0.1922126431209148,0.649901267930808,0.27647517695323054,0.14080921140042568,0.8373739795744441,0.6837041878926894,0.3677308309439533,0.5115268657498928,0.5793098488990307,0.5578263265756465,0.8529158561294167,0.5520225352786394,0.016291341395118786,0.23763096463548916,0.4942718069288029,0.5694260554690206,0.6231206743433728,0.934129079229883,0.06328282072771907,0.1535831711697756,0.8520279146327127,0.06391345114045177,0.5887378352636634,0.847796447679116,0.8671560046287087,0.07772810759687765,0.2486219130298163,0.8368731628453855,0.2804351950936719,0.5763068955711277,0.471317611261307,0.39098009441709525,0.4720868527068405,0.6545150679182099,0.33017577560586087,0.33877558219284043,0.07098528080514643,0.04667021136824767,0.6595714882168642,0.6787080008905614,0.2705352931294207,0.4608959680455794,0.13288550893600837,0.4351695736648359,0.0028999621324530267,0.7471616764463096,0.9582442036839297,0.6182354482087509,0.9078981954936118,0.8948903051026811,0.8708845693103363,0.7324391928671892,0.5259337086636361,0.8481689054017284,0.08210802257810113,0.11455962577117984,0.7397043393070526,0.933792729314168,0.48033618653882715,0.1609860061103946,0.6902175933054245,0.8997301827984238,0.4042235692331535,0.2043720618797803,0.1505363446216461,0.43932799479290463,0.6262645653980292,0.21528842611452148,0.6118487154155771,0.499580531493117,0.458116789867583,0.22565072118821683,0.5208396671149333,0.9581758030742115,0.3826814661978014,0.050080009349319,0.22130147858727267,0.9874992123840897,0.8275125083165952,0.6843522049072922,0.7295657507351532,0.03590647338251429,0.8556583119991482,0.8171378940825282,0.13222417366302097,0.9909405403406947,0.3143956940421043,0.15514857831258533,0.359357104250266,0.7961976724354166,0.4344279186166716,0.16219997214936865,0.21513836109370588,0.8128227745095102,0.6491532948772246,0.8072203319945934,0.24416041924805032,0.7131613887847829,0.18117241699620723,0.8527783443284501,0.4727922775685156,0.057170079094701176,0.7411268982978017,0.570625426905902,0.03056877599405372,0.007874306363142902,0.5845161153584271,0.9693997396265126,0.5518329421582236,0.24629817044102176,0.06855181787712628,0.45970948280326973,0.26951497278327186,0.9908745582226233,0.16890086809565608,0.38936068392341383,0.35493546911687357,0.6490725255557444,0.13755499560173634,0.7255938410301792,0.5932228344716856,0.5686397818686758,0.5123106577118572,0.6404598333253507,0.36176719765681165,0.6655627400374702,0.06742116923897357,0.48563561211248407,0.23191615990893144,0.6410472464678186,0.6772180858612281,0.9963783616188918,0.44279708044022226,0.5848567995147705,0.3624930640502253,0.34340898926346164,0.5744490116280471,0.25809470714030847,0.18607036091471552,0.44602722470830103,0.9086689452575581,0.6509340503966238,0.39530358647706154,0.19421114792860938,0.9399194300751608,0.7116429326451466,0.5327182930198014,0.5021286007226895,0.4844345652267268,0.7510478141768208,0.10108820593596168,0.9401970927757528,0.1139947473914128,0.7629102485604933,0.37289885297590364,0.04463224274007205,0.35856372011996973,0.681225189845638,0.5153939980537456,0.1506105029483712,0.6733467441306149,0.9973971834377137,0.8863961830499576,0.4214273151473331,0.6119678949342382,0.9847601309215552,0.8679178546946259,0.7978507349286535,0.5973573423342833,0.6797147845466758,0.5013063357361258,0.3283681564099581,0.8973488426215364,0.37199919657161484,0.6417502533888743,0.6108338739882211,0.31651345517262885,0.05595802788010329,0.37378663929280476,0.9044276371889445,0.7935666708534364,0.8744833893038972,0.857831751957524,0.03043822716459077,0.8713313773357491,0.7710521483360891,0.9089136889025291,0.3002736610930121,0.2332794270530597,0.9014256591827164,0.5950816450873688,0.10658105551211305,0.10924037506467987,0.9723268912850483,0.5682329703087269,0.3356970606496439,0.7206207306162672,0.7819994079325575,0.37849780185137494,0.3123886346557142,0.808479349620911]}},"id":"a3f65199-b542-4561-901c-0f7b400060ab","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"bce1fe58-1ba5-4627-adf6-73ac78cc1deb","type":"LinearAxis"}],"left":[{"id":"e86d3164-ea8c-49ea-b42e-60c7cef53b09","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bce1fe58-1ba5-4627-adf6-73ac78cc1deb","type":"LinearAxis"},{"id":"e81f3e77-752b-4072-95dc-799ea081a9e7","type":"Grid"},{"id":"e86d3164-ea8c-49ea-b42e-60c7cef53b09","type":"LinearAxis"},{"id":"1dd17585-35c2-45c2-8851-0129da99f176","type":"Grid"},{"id":"82a21a06-95ec-43d7-a50a-36b01fc15e62","type":"PolyAnnotation"},{"id":"90684f89-4d80-4e2f-90bc-1488ba791a0c","type":"GlyphRenderer"}],"title":{"id":"d38f3611-5cd6-4da3-a45e-53bfb75e4b80","type":"Title"},"toolbar":{"id":"e376a0d1-971b-498f-8fa8-15a2116844b7","type":"Toolbar"},"x_range":{"id":"bc89fece-7f28-4eba-8488-547b42f3ca0c","type":"DataRange1d"},"x_scale":{"id":"8a4dc63a-6e93-4aa8-8af7-717d7802eebd","type":"LinearScale"},"y_range":{"id":"2e77f617-7997-4561-9d3a-bd915ecd41dc","type":"DataRange1d"},"y_scale":{"id":"7007cd6b-68e8-4db5-b316-f85205741e1a","type":"LinearScale"}},"id":"c74214fa-60ca-4308-86e8-61b0a88fc79b","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"41af9498-862c-49ae-8aae-d6c86e81d032","type":"BasicTickFormatter"},"plot":{"id":"c74214fa-60ca-4308-86e8-61b0a88fc79b","subtype":"Figure","type":"Plot"},"ticker":{"id":"230c901a-2078-4976-aef9-5f9564ca7e86","type":"BasicTicker"}},"id":"bce1fe58-1ba5-4627-adf6-73ac78cc1deb","type":"LinearAxis"},{"attributes":{"plot":{"id":"c74214fa-60ca-4308-86e8-61b0a88fc79b","subtype":"Figure","type":"Plot"},"ticker":{"id":"230c901a-2078-4976-aef9-5f9564ca7e86","type":"BasicTicker"}},"id":"e81f3e77-752b-4072-95dc-799ea081a9e7","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ce26c7b-039b-4850-bbf5-4638572cebe8","type":"Circle"},{"attributes":{"formatter":{"id":"355d064c-a02c-4a32-b033-5ae59ea4c471","type":"BasicTickFormatter"},"plot":{"id":"c74214fa-60ca-4308-86e8-61b0a88fc79b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebd300a2-f296-4d57-99df-695223040dae","type":"BasicTicker"}},"id":"e86d3164-ea8c-49ea-b42e-60c7cef53b09","type":"LinearAxis"},{"attributes":{"formatter":{"id":"10a91d80-5166-4b9e-910c-b88528729fd9","type":"BasicTickFormatter"},"plot":{"id":"d545ff79-6bd8-4c9b-981a-cbda50445d5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6dbcb18d-8021-44f2-9c6c-b4452b71cad5","type":"BasicTicker"}},"id":"f6d83195-561b-44c6-b8f1-37acaa7a523c","type":"LinearAxis"},{"attributes":{},"id":"a6a2e726-134a-4df8-a6dc-4f8284aa2948","type":"LinearScale"},{"attributes":{"formatter":{"id":"73d440ce-1af1-4569-969a-cc720fb8969f","type":"BasicTickFormatter"},"plot":{"id":"d545ff79-6bd8-4c9b-981a-cbda50445d5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0121b82c-0b6f-4615-a3bd-07d41f51e54a","type":"BasicTicker"}},"id":"bc7d28e4-f9be-452c-9931-45e5382e8542","type":"LinearAxis"},{"attributes":{},"id":"7007cd6b-68e8-4db5-b316-f85205741e1a","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"82a21a06-95ec-43d7-a50a-36b01fc15e62","type":"PolyAnnotation"}},"id":"62afb046-b8d2-4ae8-a655-7c70a7acf01e","type":"LassoSelectTool"},{"attributes":{},"id":"41af9498-862c-49ae-8aae-d6c86e81d032","type":"BasicTickFormatter"},{"attributes":{},"id":"355d064c-a02c-4a32-b033-5ae59ea4c471","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"e05a2ec8-09c3-41f8-8e97-480617657d33","type":"Title"},{"attributes":{},"id":"10a91d80-5166-4b9e-910c-b88528729fd9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a3f65199-b542-4561-901c-0f7b400060ab","type":"ColumnDataSource"},"glyph":{"id":"4ce26c7b-039b-4850-bbf5-4638572cebe8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26042917-1ca0-40a7-b3ee-dc3fb69853ea","type":"Circle"},"selection_glyph":null,"view":{"id":"1777e62c-8335-41fe-9e0d-491311d3ec58","type":"CDSView"}},"id":"90684f89-4d80-4e2f-90bc-1488ba791a0c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d545ff79-6bd8-4c9b-981a-cbda50445d5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6dbcb18d-8021-44f2-9c6c-b4452b71cad5","type":"BasicTicker"}},"id":"6bd479ba-cd53-467e-9d70-34063028ae3e","type":"Grid"},{"attributes":{"callback":null},"id":"bc89fece-7f28-4eba-8488-547b42f3ca0c","type":"DataRange1d"},{"attributes":{"callback":null},"id":"0353ba31-b70f-4b66-8219-903d614d7b5e","type":"Range1d"},{"attributes":{"callback":null},"id":"2e77f617-7997-4561-9d3a-bd915ecd41dc","type":"DataRange1d"},{"attributes":{"below":[{"id":"f6d83195-561b-44c6-b8f1-37acaa7a523c","type":"LinearAxis"}],"left":[{"id":"bc7d28e4-f9be-452c-9931-45e5382e8542","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f6d83195-561b-44c6-b8f1-37acaa7a523c","type":"LinearAxis"},{"id":"6bd479ba-cd53-467e-9d70-34063028ae3e","type":"Grid"},{"id":"bc7d28e4-f9be-452c-9931-45e5382e8542","type":"LinearAxis"},{"id":"290fc7ba-47f7-426d-948c-386864b2a59d","type":"Grid"},{"id":"c47a3bb5-61a5-4b64-903a-f9d464712639","type":"GlyphRenderer"}],"title":{"id":"e05a2ec8-09c3-41f8-8e97-480617657d33","type":"Title"},"toolbar":{"id":"9c06b7fe-a89d-4308-a635-4183204a94ff","type":"Toolbar"},"x_range":{"id":"0353ba31-b70f-4b66-8219-903d614d7b5e","type":"Range1d"},"x_scale":{"id":"750375d6-e761-4c5a-b949-89ba8f9d0da5","type":"LinearScale"},"y_range":{"id":"2340a9f8-f989-4836-b0b6-4fe985a1adfc","type":"Range1d"},"y_scale":{"id":"a6a2e726-134a-4df8-a6dc-4f8284aa2948","type":"LinearScale"}},"id":"d545ff79-6bd8-4c9b-981a-cbda50445d5d","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Select Here"},"id":"d38f3611-5cd6-4da3-a45e-53bfb75e4b80","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"c74214fa-60ca-4308-86e8-61b0a88fc79b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebd300a2-f296-4d57-99df-695223040dae","type":"BasicTicker"}},"id":"1dd17585-35c2-45c2-8851-0129da99f176","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e95e477-fc9c-40f9-9266-c5855ea118eb","type":"Circle"},{"attributes":{},"id":"ebd300a2-f296-4d57-99df-695223040dae","type":"BasicTicker"},{"attributes":{},"id":"6dbcb18d-8021-44f2-9c6c-b4452b71cad5","type":"BasicTicker"},{"attributes":{"source":{"id":"f4eacb0d-d92a-43f5-b4d2-717a85a23a42","type":"ColumnDataSource"}},"id":"e4a53b16-12d7-47e1-b6b3-02ebda9f2068","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9c06b7fe-a89d-4308-a635-4183204a94ff","type":"Toolbar"},{"attributes":{"source":{"id":"a3f65199-b542-4561-901c-0f7b400060ab","type":"ColumnDataSource"}},"id":"1777e62c-8335-41fe-9e0d-491311d3ec58","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"82a21a06-95ec-43d7-a50a-36b01fc15e62","type":"PolyAnnotation"},{"attributes":{"args":{"s2":{"id":"f4eacb0d-d92a-43f5-b4d2-717a85a23a42","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected[&#x27;1d&#x27;].indices;\\n        var d1 = cb_obj.data;\\n        var d2 = s2.data;\\n        d2[&#x27;x&#x27;] = []\\n        d2[&#x27;y&#x27;] = []\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d2[&#x27;x&#x27;].push(d1[&#x27;x&#x27;][inds[i]])\\n            d2[&#x27;y&#x27;].push(d1[&#x27;y&#x27;][inds[i]])\\n        }\\n        s2.change.emit();\\n    "},"id":"19331323-ce01-420b-b211-c2a21aca1839","type":"CustomJS"},{"attributes":{},"id":"8a4dc63a-6e93-4aa8-8af7-717d7802eebd","type":"LinearScale"},{"attributes":{"children":[{"id":"c74214fa-60ca-4308-86e8-61b0a88fc79b","subtype":"Figure","type":"Plot"},{"id":"d545ff79-6bd8-4c9b-981a-cbda50445d5d","subtype":"Figure","type":"Plot"}]},"id":"b4d4f619-5de8-4547-be4f-091efd00310f","type":"Row"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26042917-1ca0-40a7-b3ee-dc3fb69853ea","type":"Circle"},{"attributes":{},"id":"73d440ce-1af1-4569-969a-cc720fb8969f","type":"BasicTickFormatter"},{"attributes":{},"id":"750375d6-e761-4c5a-b949-89ba8f9d0da5","type":"LinearScale"},{"attributes":{},"id":"230c901a-2078-4976-aef9-5f9564ca7e86","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"62afb046-b8d2-4ae8-a655-7c70a7acf01e","type":"LassoSelectTool"}]},"id":"e376a0d1-971b-498f-8fa8-15a2116844b7","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"128f3472-0d79-4014-ae8a-771b4050694e","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"f4eacb0d-d92a-43f5-b4d2-717a85a23a42","type":"ColumnDataSource"},{"attributes":{},"id":"0121b82c-0b6f-4615-a3bd-07d41f51e54a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2340a9f8-f989-4836-b0b6-4fe985a1adfc","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"d545ff79-6bd8-4c9b-981a-cbda50445d5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0121b82c-0b6f-4615-a3bd-07d41f51e54a","type":"BasicTicker"}},"id":"290fc7ba-47f7-426d-948c-386864b2a59d","type":"Grid"}],"root_ids":["b4d4f619-5de8-4547-be4f-091efd00310f"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"63f11e3b-6c29-4058-9ffc-0af2e5402a87","elementid":"d664aac6-30a6-4104-9294-34c55d57b189","modelid":"b4d4f619-5de8-4547-be4f-091efd00310f"}];
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