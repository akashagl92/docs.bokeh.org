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
      };var element = document.getElementById("84c071fa-713c-4b1f-8e02-83f306ef5b93");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '84c071fa-713c-4b1f-8e02-83f306ef5b93' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4fb0c42f-8c62-46c6-afef-f982973d0f81":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"a2b6ebe6-9ff8-43e2-84c6-b773a13259b3","type":"Line"},{"attributes":{"data_source":{"id":"73d7a3b4-6750-4ae9-8a11-2b411821a04b","type":"ColumnDataSource"},"glyph":{"id":"4bc195f6-4636-4678-92c2-f6f363ceea22","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"45a1d4e6-85a9-46eb-8b59-4a4da6a97041","type":"Line"},"selection_glyph":null,"view":{"id":"ec8519c5-8c74-4bcd-9120-543920f0acf8","type":"CDSView"}},"id":"554e0461-057a-4703-9ac2-e8d4ae732ff8","type":"GlyphRenderer"},{"attributes":{},"id":"6f6194c7-3abb-429d-aa4d-f0ae051d7197","type":"HelpTool"},{"attributes":{"axis_label":"Domain","formatter":{"id":"35b0ceac-7b2a-4a97-a521-2e87c08db987","type":"BasicTickFormatter"},"plot":{"id":"0d03b4ce-ff04-4533-9d2f-100cdaa1dfc1","subtype":"Figure","type":"Plot"},"ticker":{"id":"4003345e-01c6-44e4-97d2-79ef7cf0d4c8","type":"BasicTicker"}},"id":"d232947a-0b6c-404c-b497-23742d1af732","type":"LinearAxis"},{"attributes":{},"id":"2d83a3ef-ea78-4f03-8b20-092ff27fc093","type":"SaveTool"},{"attributes":{},"id":"82005511-0a8a-459c-b01b-b4a57d5d59b2","type":"LinearScale"},{"attributes":{},"id":"43319db0-6f76-4c93-9128-43532d3d7a72","type":"WheelZoomTool"},{"attributes":{"axis_label":"Values (log scale)","formatter":{"id":"eefe7af2-7d36-4102-ace5-042db13a8589","type":"LogTickFormatter"},"plot":{"id":"0d03b4ce-ff04-4533-9d2f-100cdaa1dfc1","subtype":"Figure","type":"Plot"},"ticker":{"id":"84d9952d-c96f-424a-90f5-7c0001871b7c","type":"LogTicker"}},"id":"3f601cf3-4f67-4606-8f68-41875f70bda4","type":"LogAxis"},{"attributes":{},"id":"35b0ceac-7b2a-4a97-a521-2e87c08db987","type":"BasicTickFormatter"},{"attributes":{},"id":"7ab0a035-6461-4316-9651-5787a4d496cf","type":"LogScale"},{"attributes":{"callback":null},"id":"df96c784-93bc-4653-9383-4dde96be5c4e","type":"DataRange1d"},{"attributes":{},"id":"3405cd76-8b73-41c0-a5b5-254861625f20","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"0d03b4ce-ff04-4533-9d2f-100cdaa1dfc1","subtype":"Figure","type":"Plot"},"ticker":{"id":"84d9952d-c96f-424a-90f5-7c0001871b7c","type":"LogTicker"}},"id":"9522ae27-8b51-4a14-83af-5d0d5aebd0ca","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee8be2e6-5fe1-408c-8acd-89c7748563f0","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93e13676-c102-4772-8599-56b4e304f8c0","type":"BoxAnnotation"},{"attributes":{},"id":"d5e8434d-6af0-4d57-926e-a758ae9e8ca5","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d5e8434d-6af0-4d57-926e-a758ae9e8ca5","type":"PanTool"},{"id":"43319db0-6f76-4c93-9128-43532d3d7a72","type":"WheelZoomTool"},{"id":"17067aff-dbe1-46b5-a8e8-7aa9be469c71","type":"BoxZoomTool"},{"id":"2d83a3ef-ea78-4f03-8b20-092ff27fc093","type":"SaveTool"},{"id":"3405cd76-8b73-41c0-a5b5-254861625f20","type":"ResetTool"},{"id":"6f6194c7-3abb-429d-aa4d-f0ae051d7197","type":"HelpTool"}]},"id":"261686ab-96f6-4253-86a9-e9ad1a1ae895","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"226ad106-cc40-4df8-90e1-d7f3428825eb","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"LCYBeWhf8D9YMo0XTNjwP7lwLUUCh/E/NjZCrMRx8j87ZNvsLqHzP+s6F4zFIPU/YAoDerD/9j+XyDq0uVH5P0MCUFynMPw/TRHUKBK+/z+8f05U8xICQA0App3p0ARAcZq3UwA/CECU6ZL4zY8MQIFhtex8AxFAP6btxtB/FEBKjPbKsfoYQGM2kHGfyB5AMZpbeAIvI0AH5FKJSC4oQIYxvnNS0y5AiHHCVfbeM0C9O/c5zOg5QOW5WYFAFUFAJuWASVPIRkBm4ubKcbpOQH4/7XEv9VRADuRKK4PpXEBjRQHMRytkQDSIFrOEdWxANGXnGldOdECK2v+QXk59QI2vcbE4Y4VAeoIUQEqSj0DzJrXrC5GXQMXu6N55yqFABtZBY48qq0BNolG88/m0QIE0fTFxYcBAtutQNLLfyUCPyYwgiarUQF14O/2kseBAHGzPk8BG60AR7qUTUYn2QDQya/DT1AJBEgzOQ/PTD0EtCEvtxTMbQSlVrNU4gydBCZrJvtCNNEHvLeFb5itCQSWl2HpXP1BB9xUmlEJiXUGkaOoFQt9qQUBCEYqY2nhBMtlXhIA/h0FIwsH6IP6VQYUylEGJCqVBAZ+ndvNbtEF9K1xSPezDQeyPmeGLt9NBstmtihK840HfyIy9+PnzQYI/tDJccwRCHtS25m8sFUKfdupPuismQtnPVt13ejdCRZGI5yklSUKTfq80XjxbQqfO8X3A1W1Cfi4jU8eGgEJPL1U5SYSSQnKjp+9o+6RCBDpeyJ0LuEJ6oL8YWd7LQjRq+AFBVeBCKHUzg6Zc80KX55M5gTYHQyX22z1FJRxDefJ5c75BMUPhskwkvGZFQyjaa1mg11pDdqC5HDYGcUMsRNBD9taFQ7zVXEjHVZxDvV7SUPSWskNBaeCWN6vIQ1MK4gW+jeBDUmAb4uJ39kNvBEh2m9cORMzBz6igaCVEHdjoee0OPkSJtWQLN1dVRJ1sFjyEpW5EdLhNtDxBhkRmx7muJFigRHoUFimIR7hEeEGiGvQ80kTHykxO/LXrRAshCGZtSgVFkQIoLCqLIEU=","dtype":"float64","shape":[100]}}},"id":"40d00df5-4378-4a13-987e-f76fcab0ff0a","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y=10^(x^2)"},"renderers":[{"id":"0932a504-4421-4706-bf03-9ef723bfda2f","type":"GlyphRenderer"}]},"id":"7082a2bc-fd78-4675-8687-20c735491b52","type":"LegendItem"},{"attributes":{"data_source":{"id":"66f02b5d-edfa-430f-83f6-6928adefd2a6","type":"ColumnDataSource"},"glyph":{"id":"54a28900-ebe2-401a-a212-226795be919e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee8be2e6-5fe1-408c-8acd-89c7748563f0","type":"Circle"},"selection_glyph":null,"view":{"id":"561b3c99-0edd-4f18-8152-54f95289b1f0","type":"CDSView"}},"id":"b43a22ab-b050-43ac-a80c-86147e16445d","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"93e13676-c102-4772-8599-56b4e304f8c0","type":"BoxAnnotation"}},"id":"17067aff-dbe1-46b5-a8e8-7aa9be469c71","type":"BoxZoomTool"},{"attributes":{},"id":"4003345e-01c6-44e4-97d2-79ef7cf0d4c8","type":"BasicTicker"},{"attributes":{"data_source":{"id":"466d2258-6ef7-4a36-95e1-c8a991b19a55","type":"ColumnDataSource"},"glyph":{"id":"01b3d82d-4bd9-48b3-bdd5-306afe9d0b44","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1e5bbdd6-0724-49f5-a46a-fd60d0d67255","type":"Line"},"selection_glyph":null,"view":{"id":"63332471-c742-47fe-936d-f9535d6540d2","type":"CDSView"}},"id":"8680202b-ae1d-41e4-a0dc-64fb6138402f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"73d7a3b4-6750-4ae9-8a11-2b411821a04b","type":"ColumnDataSource"}},"id":"ec8519c5-8c74-4bcd-9120-543920f0acf8","type":"CDSView"},{"attributes":{"label":{"value":"y=x^x"},"renderers":[{"id":"d4a5d6c4-082a-4c04-8c80-a90cba7cb702","type":"GlyphRenderer"}]},"id":"1b74496a-21b0-4b24-987d-880c36c14a3f","type":"LegendItem"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"4f844763-56da-4012-b67d-ef999d7a3007","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"fBSuR+F6hD/GgVSMluKWP1+/YSsORqQ/lwCSAQGdrz9Egl3kEbu2P5hlbkC76L4/JNV9Sr4rxD8uqALxqoPJP+OrxZMjfM8/I3BjGZQK0z+sIgNnXKfWP4ztwbJqlNo/w9Cf/L7R3j8pZk6irK/hPx1wXMWcHuQ/OwZ656+15j+FKKcI5nTpP/rW4yg/XOw/mxEwSLtr7z827EUzrVHxP7KV+0GOAfM/RAU50IDF9D/sOv7dhJ32P6k2S2uaifg/fPgfeMGJ+j9lgHwE+p38P2TOYBBExv4/PnHmzU+BAEBTXmBThqkBQHMunpjF2wJAnuGfnQ0YBEDUd2ViXl4FQBXx7ua3rgZAYU08KxoJCEC3jE0vhW0JQBmvIvP42wpAhbS7dnVUDED8nBi6+tYNQIBoOb2IYw9AhwsPwA99EEBTVGOBX00RQKSOmaKzIhJAe7qxIwz9EkDX16sEadwTQLnmh0XKwBRAIOdF5i+qFUAN2eXmmZgWQH+8Z0cIjBdAd5HLB3uEGED0VxEo8oEZQPYPOahthBpAfrlCiO2LG0CLVC7IcZgcQB7h+2f6qR1AOV+rZ4fAHkDXzjzHGNwfQP0XWENXfiBAUcECUyQRIUBoY56Sc6YhQEL+KgJFPiJA3pGooZjYIkA+HhdxbnUjQGCjdnDGFCRARCHHn6C2JEDrlwj//FolQFYHO47bASZAgm9eTTyrJkBy0HI8H1cnQCQqeFuEBShAmXxuqmu2KEDRx1Up1WkpQMsLLtjAHypAiEj3ti7YKkAIfrHFHpMrQEusXASRUCxAUtP4coUQLUAa84UR/NItQKULBOD0ly5A8hxz3m9fL0CAk2mGthQwQOoUkjX2ejBAtRKz/HbiMEDhjMzbOEsxQG6D3tI7tTFAXfbo4X8gMkCt5esIBY0yQF9R50fL+jJAcjnbntJpM0DmnccNG9ozQLx+rJSkSzRA89uJM2++NECMtV/qejI1QIULLrnHpzVA4d30n1UeNkCdLLSeJJY2QLv3a7U0DzdAOj8c5IWJN0AbA8UqGAU4QF1DZonrgThAAAAAAAAAOUA=","dtype":"float64","shape":[100]}}},"id":"466d2258-6ef7-4a36-95e1-c8a991b19a55","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35224a52-19bf-4d8a-a9e9-93caccd4053e","type":"ColumnDataSource"}},"id":"36f71ac5-2a80-4faf-9865-498ec8307b7c","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f4b6678-284e-4ccb-a260-3b1bb0445607","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"fBSuR+F6hD/GgVSMluKWP1+/YSsORqQ/lwCSAQGdrz9Egl3kEbu2P5hlbkC76L4/JNV9Sr4rxD8uqALxqoPJP+OrxZMjfM8/I3BjGZQK0z+sIgNnXKfWP4ztwbJqlNo/w9Cf/L7R3j8pZk6irK/hPx1wXMWcHuQ/OwZ656+15j+FKKcI5nTpP/rW4yg/XOw/mxEwSLtr7z827EUzrVHxP7KV+0GOAfM/RAU50IDF9D/sOv7dhJ32P6k2S2uaifg/fPgfeMGJ+j9lgHwE+p38P2TOYBBExv4/PnHmzU+BAEBTXmBThqkBQHMunpjF2wJAnuGfnQ0YBEDUd2ViXl4FQBXx7ua3rgZAYU08KxoJCEC3jE0vhW0JQBmvIvP42wpAhbS7dnVUDED8nBi6+tYNQIBoOb2IYw9AhwsPwA99EEBTVGOBX00RQKSOmaKzIhJAe7qxIwz9EkDX16sEadwTQLnmh0XKwBRAIOdF5i+qFUAN2eXmmZgWQH+8Z0cIjBdAd5HLB3uEGED0VxEo8oEZQPYPOahthBpAfrlCiO2LG0CLVC7IcZgcQB7h+2f6qR1AOV+rZ4fAHkDXzjzHGNwfQP0XWENXfiBAUcECUyQRIUBoY56Sc6YhQEL+KgJFPiJA3pGooZjYIkA+HhdxbnUjQGCjdnDGFCRARCHHn6C2JEDrlwj//FolQFYHO47bASZAgm9eTTyrJkBy0HI8H1cnQCQqeFuEBShAmXxuqmu2KEDRx1Up1WkpQMsLLtjAHypAiEj3ti7YKkAIfrHFHpMrQEusXASRUCxAUtP4coUQLUAa84UR/NItQKULBOD0ly5A8hxz3m9fL0CAk2mGthQwQOoUkjX2ejBAtRKz/HbiMEDhjMzbOEsxQG6D3tI7tTFAXfbo4X8gMkCt5esIBY0yQF9R50fL+jJAcjnbntJpM0DmnccNG9ozQLx+rJSkSzRA89uJM2++NECMtV/qejI1QIULLrnHpzVA4d30n1UeNkCdLLSeJJY2QLv3a7U0DzdAOj8c5IWJN0AbA8UqGAU4QF1DZonrgThAAAAAAAAAOUA=","dtype":"float64","shape":[100]}}},"id":"66f02b5d-edfa-430f-83f6-6928adefd2a6","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1ca05951-6a9d-4033-ac34-314186ac49c6","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"BCb8+I4k9D/YkSiBB5P2P+ZFPS6kTPk/tT+SFHda/D+2rHOXqsb/PwhLvJ9RzgFAGmZC05L0A0D4INh7QF0GQC1oRUhfEAlAIYQjsesWDEDkDD3i93oPQDZrJKDmoxFANIpK/QjFE0CuGNiS+ScWQOSomvWp1BhAVbzmNQHUG0AJCLaB+S8fQDNUQ63geSFAZ1nDZvCVI0Bt3PeUMfMlQP8rNeCCmShADFCKI7aRK0BSXkfIreUuQN2ZX9Y+UDFAQFTkAUhnM0CB2N1T5741QNDhO7XoXjhA/M5N/ghQO0ATM1kME5w+QHVG/SwAJ0FAU6tnww45Q0A4vgCkGYtFQAzy/CTaJEhAf3H5TfgOS0DVhkmoJ1NOQIGE2MQj/lBANUSEokMLU0Dsz6Bcx1dVQLo45uJV61dAiK3VnYLOWkAjyGL66QpeQGlV4LOo1WBAu8znmOXdYkA3PcFX7yRlQCrVfaVasmdAdN+ifKaOakChetJkWMNtQJhUMRKOrXBAPNywovOwckDJjiFykPJ0QJ3KWibneXdA9waRfGJPekCj9J9NcXx9QDeHEPrShYBA9iJpvmyEgkAhIjeLqcCEQHWyHSL6QYdAlJc3M7UQikCvMqMeMzaNQCY45od2XpBAG6f/7E9YkkCItCaFOY+UQL5/aViSCpdAfVyNOZ3SmUDDwHtFnPCcQDrgONp3N6BA1g/DMZwsokC8/b1EP16kQCZU3Iuu06ZAEnDgKxmVqUCRuYczq6usQLcaqBHWELBAsf1bklABskCVWW2xuS20QNRlCIJNnbZAQEbOqSdYuUDj2tpdXme8QGhLz6Eg1b9Ak3DHFmzWwUDngEG1p/3DQET2bANuZ8ZAysk7VscbyUA5rzU9tCPMQKncdHlLic9A9TpRye2r0UBLUd08CM7TQNtZb9sOMtZAxYxN1/bf2EDkzPxNq+DbQDtS2/cqPt9AmoKOttSB4UDAo3M32p7jQCMQVNgu/eVAIAtg1rSk6EBYKTAQQp7rQCDrp2698+5A901Y7R9Y8UD1McGWHHDzQG3sN8vMyPVAAAAAAABq+EA=","dtype":"float64","shape":[100]}}},"id":"73d7a3b4-6750-4ae9-8a11-2b411821a04b","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c00d2d4a-8899-4386-a070-a978b0895431","type":"ColumnDataSource"}},"id":"1bb6f113-0d72-4ad9-956e-d29adb3dba71","type":"CDSView"},{"attributes":{"line_color":"coral","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3e508841-4664-4b83-937e-ed061f06e7b5","type":"Line"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"olivedrab"},"x":{"field":"x"},"y":{"field":"y"}},"id":"54a28900-ebe2-401a-a212-226795be919e","type":"Circle"},{"attributes":{"source":{"id":"466d2258-6ef7-4a36-95e1-c8a991b19a55","type":"ColumnDataSource"}},"id":"63332471-c742-47fe-936d-f9535d6540d2","type":"CDSView"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"554e0461-057a-4703-9ac2-e8d4ae732ff8","type":"GlyphRenderer"}]},"id":"7a34d8a9-d191-404e-a13d-b1bca2cf9773","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f69061b-4ae1-4d26-a32f-b4197779cf94","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"45a1d4e6-85a9-46eb-8b59-4a4da6a97041","type":"Line"},{"attributes":{"source":{"id":"66c79669-1c82-47d7-9d0d-811cd5e50e0a","type":"ColumnDataSource"}},"id":"d860fc83-b16e-4220-b185-3ce64475a5d9","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"D0lIYhM91D8QPZjjzb7YPzK64wifjNw/GXn6VSPn3z//ye9jz3fhP16ivPPv3OI/DfNMwmkp5D9W5tY7u2HlPwwBnbAqieY/tAshZjGi5z8jQ5ybu67oP7E4kPFQsOk/hczrDC+o6j/0iwzLW5frP5k2qxOyfuw/0YpNHOte7T/e9yZApTjuP6j3dSdpDO8/c6shuq3a7z8NtseY7VHwP2lp98EmtPA/GIsYKSsU8T9PAyw7H3LxP25i6aMjzvE/hhwD01Uo8j8TapBq0IDyP2srOpur1/I/LTC4cf0s8z9FEmIY2oDzP2TM/g5U0/M/XK6KWnwk9D+ErVKuYnT0PwBsf48Vw/Q/97f0c6IQ9T9mEkDdFV31P5RXL3B7qPU/qeqNCd7y9T/qSnHQRzz2P0WZbEbChPY/8HH0VVbM9j8E7TBfDBP3P+4VckPsWPc/r0xzb/2d9z9sfJPkRuL3PzCgIkHPJfg/fX7gx5xo+D9srcRmtar4P/OyJL0e7Pg/WVVKId4s+T8X2Yml+Gz5P5Tq5RxzrPk/MzxNH1Lr+T9+aXwNmin6P9BrjRRPZ/o/HdU8MXWk+j+cEuwyEOH6Py0mZ74jHfs/oI1zULNY+z9zbi1AwpP7PyeQN8FTzvs/7DPC5WoI/D/9a2ygCkL8P1Q1A8Y1e/w/FUIhD++z/D8sGLIZOez8P2DlWmoWJP0/Ty/LbYlb/T87Ufd5lJL9P++KPs85yf0/ODp+mXv//T8MsxPxWzX+PxgJztvcav4/Qf/QTQCg/j+9NmoqyNT+PwKf2UQ2Cf8/6REOYUw9/z+N81Y0DHH/P5KbC2Z3pP8/Mj0pkI/X/z9y+vMfKwUAQHrKI3tmHgBAK19KlHo3AED5Y3MgaFAAQFt2S88vaQBAoZdYS9KBAEAOrS86UJoAQJs9pzyqsgBAepkH7+DKAEAllDjp9OIAQMf27L7m+gBARc7L/7YSAUCEtZc3ZioBQF46VO70QQFAl3lpqGNZAUA3DMbmsnABQNte/ybjhwFA/Ylw4/SeAUCcwFeT6LUBQFhp8qq+zAFAqPSXm3fjAUA=","dtype":"float64","shape":[100]}}},"id":"116275fa-0dcd-4749-8fe9-eac6a599d685","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y=sqrt(x)"},"renderers":[{"id":"efd43ead-cd55-4463-b5f8-2b3d02f7a9e1","type":"GlyphRenderer"}]},"id":"7045455a-019b-40e7-9d53-41d641e27a7c","type":"LegendItem"},{"attributes":{"callback":null,"end":10000000000000000000000,"start":0.001},"id":"25933a4b-b162-4d4f-a66e-dc5c86f01f00","type":"Range1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1e5bbdd6-0724-49f5-a46a-fd60d0d67255","type":"Line"},{"attributes":{"source":{"id":"116275fa-0dcd-4749-8fe9-eac6a599d685","type":"ColumnDataSource"}},"id":"394cca42-2d70-4d74-b1e2-d811365aeff0","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[6],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"32593c25-db35-42d2-bf54-7d0890b4fd29","type":"Line"},{"attributes":{"num_minor_ticks":10},"id":"84d9952d-c96f-424a-90f5-7c0001871b7c","type":"LogTicker"},{"attributes":{"label":{"value":"y=x**2"},"renderers":[{"id":"8680202b-ae1d-41e4-a0dc-64fb6138402f","type":"GlyphRenderer"},{"id":"b43a22ab-b050-43ac-a80c-86147e16445d","type":"GlyphRenderer"}]},"id":"da1ef2fb-b80b-42dc-b45a-648457bca1d1","type":"LegendItem"},{"attributes":{"ticker":null},"id":"eefe7af2-7d36-4102-ace5-042db13a8589","type":"LogTickFormatter"},{"attributes":{"data_source":{"id":"c00d2d4a-8899-4386-a070-a978b0895431","type":"ColumnDataSource"},"glyph":{"id":"6f69061b-4ae1-4d26-a32f-b4197779cf94","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8f4b6678-284e-4ccb-a260-3b1bb0445607","type":"Circle"},"selection_glyph":null,"view":{"id":"1bb6f113-0d72-4ad9-956e-d29adb3dba71","type":"CDSView"}},"id":"d1767fa0-0e7b-404e-9c3c-c1cc26268e91","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"log axis example"},"id":"d0a814c2-cbe4-4974-b58b-4d23229df58e","type":"Title"},{"attributes":{"data_source":{"id":"40d00df5-4378-4a13-987e-f76fcab0ff0a","type":"ColumnDataSource"},"glyph":{"id":"3e508841-4664-4b83-937e-ed061f06e7b5","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32593c25-db35-42d2-bf54-7d0890b4fd29","type":"Line"},"selection_glyph":null,"view":{"id":"c57a4d19-589d-4e0a-a142-e422335dfdbd","type":"CDSView"}},"id":"0932a504-4421-4706-bf03-9ef723bfda2f","type":"GlyphRenderer"},{"attributes":{"line_color":"gold","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4bc195f6-4636-4678-92c2-f6f363ceea22","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"NMTNCyNr6T8r5WwH9hXoP7RYP/sQNec/7fGLawmk5j+J66bM8k7mP5plZ0HHKeY/ledPId4s5j/+6iz3NVPmPyZU30GJmeY/o0ZCk8b95j9GLJjqvX7nP2g2S53sG+g/Fjm4zlvV6D9guc69iqvpP7rA6/Zgn+o/dVAqBCay6z+H2OgcfeXsP+ciCeFjO+4/PeBhhDO27z+AERgEUqzwP84QjqPokvE/dKHT2aCQ8j90UHBed6fzP6YcWm6n2fQ/FsTjr7Ap9j+pH+AAXpr3PyweaEHNLvk/+pyCMnjq+j+SEsiEPtH8Pwl8Kzhx5/4/JM+9ue+YAEBzvAqA8toBQJfOYU69PANAz6IDMaTBBEBKSBU9XW0GQNF/UjwMRAhASARb009KCkDg0WlTUIUMQL9Z7G7Q+g5AUQr/B6DYEECIVDLM6FcSQPkeOO5I/xNAvTijmkHTFUBgc+cJ3tgXQJvq98XEFRpAg5skMEuQHEBLvLiUi08fQJJTTRK/LSFAyC+6nIreIkDJ1XirLr8kQMni07VQ1SZA1fJG80knKUAZynGlPrwrQG+KLoI4nC5AsFU4ViLoMEC+uiTdSrEyQOhlNyxVrzRAv38gmLzoNkD1LHhm0WQ5QBMfvyvVKzxAeoc2EBtHP0BCoGdElmBBQJSK9JL5UkNATmCOGHSBRUDZeyV3pfNHQIQEmDkvskpAVGMxFtjGTUCtxOgTWp5QQNZJoGopkFJAG+KonPm/VEAWQNf+3zVXQFQGCN8J+1lAT6KHmeMZXUA799akIk9gQC2LRvTSSmJA5NAd5qqHZEACUmHPYA5nQI4X6obf6GlAbqmBUnIibUAMaxKf+2NwQC7sWGkMdHJAXFBUI8jJdEDBDGq3uG53QKXoTfPAbXpATm23kE7TfUAlu1vWydaAQEs2K2dkBoNAEtzjZLyBhUCWvZQAbFOIQLwvzF+Uh4tAjjxSWBcsj0B9r5zxbKiRQGyZdE8IBJRAqibV9kuzlkBHy1q+LMKZQNkuIKRgPp1AE+dDIdGboEDa0mpO/9+iQJAvonAXdqVAAAAAAABqqEA=","dtype":"float64","shape":[100]}}},"id":"66c79669-1c82-47d7-9d0d-811cd5e50e0a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35224a52-19bf-4d8a-a9e9-93caccd4053e","type":"ColumnDataSource"},"glyph":{"id":"4f844763-56da-4012-b67d-ef999d7a3007","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a2b6ebe6-9ff8-43e2-84c6-b773a13259b3","type":"Line"},"selection_glyph":null,"view":{"id":"36f71ac5-2a80-4faf-9865-498ec8307b7c","type":"CDSView"}},"id":"be44e10e-92b6-470a-8b56-0f7a5a25e57f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"116275fa-0dcd-4749-8fe9-eac6a599d685","type":"ColumnDataSource"},"glyph":{"id":"d17ea12c-df05-48a6-8ce1-697aad130e49","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"226ad106-cc40-4df8-90e1-d7f3428825eb","type":"Line"},"selection_glyph":null,"view":{"id":"394cca42-2d70-4d74-b1e2-d811365aeff0","type":"CDSView"}},"id":"efd43ead-cd55-4463-b5f8-2b3d02f7a9e1","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"d232947a-0b6c-404c-b497-23742d1af732","type":"LinearAxis"}],"left":[{"id":"3f601cf3-4f67-4606-8f68-41875f70bda4","type":"LogAxis"}],"renderers":[{"id":"d232947a-0b6c-404c-b497-23742d1af732","type":"LinearAxis"},{"id":"0ed6fe8c-2c8c-4f85-be55-ec4550cb89c1","type":"Grid"},{"id":"3f601cf3-4f67-4606-8f68-41875f70bda4","type":"LogAxis"},{"id":"9522ae27-8b51-4a14-83af-5d0d5aebd0ca","type":"Grid"},{"id":"93e13676-c102-4772-8599-56b4e304f8c0","type":"BoxAnnotation"},{"id":"866ef2b0-b486-48d1-b01f-5fc15a6047dd","type":"Legend"},{"id":"efd43ead-cd55-4463-b5f8-2b3d02f7a9e1","type":"GlyphRenderer"},{"id":"be44e10e-92b6-470a-8b56-0f7a5a25e57f","type":"GlyphRenderer"},{"id":"d1767fa0-0e7b-404e-9c3c-c1cc26268e91","type":"GlyphRenderer"},{"id":"8680202b-ae1d-41e4-a0dc-64fb6138402f","type":"GlyphRenderer"},{"id":"b43a22ab-b050-43ac-a80c-86147e16445d","type":"GlyphRenderer"},{"id":"554e0461-057a-4703-9ac2-e8d4ae732ff8","type":"GlyphRenderer"},{"id":"d4a5d6c4-082a-4c04-8c80-a90cba7cb702","type":"GlyphRenderer"},{"id":"0932a504-4421-4706-bf03-9ef723bfda2f","type":"GlyphRenderer"}],"title":{"id":"d0a814c2-cbe4-4974-b58b-4d23229df58e","type":"Title"},"toolbar":{"id":"261686ab-96f6-4253-86a9-e9ad1a1ae895","type":"Toolbar"},"x_range":{"id":"df96c784-93bc-4653-9383-4dde96be5c4e","type":"DataRange1d"},"x_scale":{"id":"82005511-0a8a-459c-b01b-b4a57d5d59b2","type":"LinearScale"},"y_range":{"id":"25933a4b-b162-4d4f-a66e-dc5c86f01f00","type":"Range1d"},"y_scale":{"id":"7ab0a035-6461-4316-9651-5787a4d496cf","type":"LogScale"}},"id":"0d03b4ce-ff04-4533-9d2f-100cdaa1dfc1","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]}}},"id":"35224a52-19bf-4d8a-a9e9-93caccd4053e","type":"ColumnDataSource"},{"attributes":{"line_color":"tomato","line_dash":[2,4,6,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"d17ea12c-df05-48a6-8ce1-697aad130e49","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"mpmZmZmZuT/OvX+HpiLDP86uMkKAeMk/z5/l/FnOzz9oSMzbGRLTP+jAJbkGPdY/aDl/lvNn2T/qsdhz4JLcP2oqMlHNvd8/ddFFF1104T+1jfKF0wnjP/VJn/RJn+Q/NQZMY8A05j91wvjRNsrnP7Z+pUCtX+k/9jpSryP16j829/4dmorsP3azq4wQIO4/tm9Y+4a17z/8lQK1fqXwPxz0WOw5cPE/PFKvI/U68j9csAVbsAXzP3wOXJJr0PM/nGyyySab9D+8yggB4mX1P9woXzidMPY//Ya1b1j79j8d5QunE8b3Pz1DYt7OkPg/XaG4FYpb+T99/w5NRSb6P51dZYQA8fo/vbu7u7u7+z/dGRLzdob8P/13aCoyUf0/Hda+Ye0b/j89NBWZqOb+P16Sa9Bjsf8/P/jggw8+AEBPJ4wfbaMAQF9WN7vKCAFAb4XiVihuAUB/tI3yhdMBQI/jOI7jOAJAnxLkKUGeAkCvQY/FngMDQL9wOmH8aANAz5/l/FnOA0DfzpCYtzMEQO/9OzQVmQRA/yznz3L+BEAPXJJr0GMFQB+LPQcuyQVAMLrooosuBkBA6ZM+6ZMGQFAYP9pG+QZAYEfqdaReB0BwdpURAsQHQIClQK1fKQhAkNTrSL2OCECgA5fkGvQIQLAyQoB4WQlAwGHtG9a+CUDQkJi3MyQKQOC/Q1ORiQpA8O7u7u7uCkAAHpqKTFQLQBBNRSaquQtAIHzwwQcfDEAwq5tdZYQMQEDaRvnC6QxAUAnylCBPDUBgOJ0wfrQNQHBnSMzbGQ5AgZbzZzl/DkCRxZ4Dl+QOQKH0SZ/0SQ9AsSP1OlKvD0BgKVDrVwoQQOjAJbkGPRBAcFj7hrVvEED479BUZKIQQICHpiIT1RBACB988MEHEUCQtlG+cDoRQBhOJ4wfbRFAoOX8Wc6fEUAofdInfdIRQLAUqPUrBRJAOKx9w9o3EkDAQ1ORiWoSQEjbKF84nRJA0HL+LOfPEkBYCtT6lQITQOChqchENRNAaDl/lvNnE0Dw0FRkopoTQHhoKjJRzRNAAAAAAAAAFEA=","dtype":"float64","shape":[100]}}},"id":"c00d2d4a-8899-4386-a070-a978b0895431","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0d03b4ce-ff04-4533-9d2f-100cdaa1dfc1","subtype":"Figure","type":"Plot"},"ticker":{"id":"4003345e-01c6-44e4-97d2-79ef7cf0d4c8","type":"BasicTicker"}},"id":"0ed6fe8c-2c8c-4f85-be55-ec4550cb89c1","type":"Grid"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"01b3d82d-4bd9-48b3-bdd5-306afe9d0b44","type":"Line"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"be44e10e-92b6-470a-8b56-0f7a5a25e57f","type":"GlyphRenderer"},{"id":"d1767fa0-0e7b-404e-9c3c-c1cc26268e91","type":"GlyphRenderer"}]},"id":"5f34e16e-68ed-48bf-a32c-0aa2553a541b","type":"LegendItem"},{"attributes":{"source":{"id":"66f02b5d-edfa-430f-83f6-6928adefd2a6","type":"ColumnDataSource"}},"id":"561b3c99-0edd-4f18-8152-54f95289b1f0","type":"CDSView"},{"attributes":{"data_source":{"id":"66c79669-1c82-47d7-9d0d-811cd5e50e0a","type":"ColumnDataSource"},"glyph":{"id":"ff76f03d-ee43-4a74-aee6-8ee9815a34e7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1ca05951-6a9d-4033-ac34-314186ac49c6","type":"Line"},"selection_glyph":null,"view":{"id":"d860fc83-b16e-4220-b185-3ce64475a5d9","type":"CDSView"}},"id":"d4a5d6c4-082a-4c04-8c80-a90cba7cb702","type":"GlyphRenderer"},{"attributes":{"line_color":"indigo","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"ff76f03d-ee43-4a74-aee6-8ee9815a34e7","type":"Line"},{"attributes":{"items":[{"id":"7045455a-019b-40e7-9d53-41d641e27a7c","type":"LegendItem"},{"id":"5f34e16e-68ed-48bf-a32c-0aa2553a541b","type":"LegendItem"},{"id":"da1ef2fb-b80b-42dc-b45a-648457bca1d1","type":"LegendItem"},{"id":"7a34d8a9-d191-404e-a13d-b1bca2cf9773","type":"LegendItem"},{"id":"1b74496a-21b0-4b24-987d-880c36c14a3f","type":"LegendItem"},{"id":"7082a2bc-fd78-4675-8687-20c735491b52","type":"LegendItem"}],"location":"top_left","plot":{"id":"0d03b4ce-ff04-4533-9d2f-100cdaa1dfc1","subtype":"Figure","type":"Plot"}},"id":"866ef2b0-b486-48d1-b01f-5fc15a6047dd","type":"Legend"},{"attributes":{"source":{"id":"40d00df5-4378-4a13-987e-f76fcab0ff0a","type":"ColumnDataSource"}},"id":"c57a4d19-589d-4e0a-a142-e422335dfdbd","type":"CDSView"}],"root_ids":["0d03b4ce-ff04-4533-9d2f-100cdaa1dfc1"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"4fb0c42f-8c62-46c6-afef-f982973d0f81","elementid":"84c071fa-713c-4b1f-8e02-83f306ef5b93","modelid":"0d03b4ce-ff04-4533-9d2f-100cdaa1dfc1"}];
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