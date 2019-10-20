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
      };var element = document.getElementById("0297ae76-b9a7-4af5-b799-26f819abc314");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0297ae76-b9a7-4af5-b799-26f819abc314' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                "Surface3d": require("custom/bk_script_225a273869a14d7fb0144f7c761e7aac.surface3d").Surface3d,
          "LatexLabel": require("custom/bk_script_4d245a4961fc4045b086aa2119f0ad16.latex_label").LatexLabel,
          "Custom": require("custom/bk_script_7e43a71bbd714655ab09145815dbaf32.custom").Custom,
          "MyFormatter": require("custom/bk_script_b64ada8818d44343b0d14823d93ffccf.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_cfe5420328f44687b89787ca1390e9e2.draw_tool").DrawTool,
          "IonRangeSlider": require("custom/bk_script_e7dcce66e32c4c8ebbc965d30f760331.ion_range_slider").IonRangeSlider
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_225a273869a14d7fb0144f7c761e7aac.surface3d": function(require, module, exports) {
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
          "custom/bk_script_4d245a4961fc4045b086aa2119f0ad16.latex_label": function(require, module, exports) {
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
          "custom/bk_script_7e43a71bbd714655ab09145815dbaf32.custom": function(require, module, exports) {
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
          "custom/bk_script_b64ada8818d44343b0d14823d93ffccf.my_formatter": function(require, module, exports) {
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
          "custom/bk_script_cfe5420328f44687b89787ca1390e9e2.draw_tool": function(require, module, exports) {
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
          "custom/bk_script_e7dcce66e32c4c8ebbc965d30f760331.ion_range_slider": function(require, module, exports) {
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
                    var docs_json = '{"86ed5be2-5f54-4a01-9fb8-14090f104ebc":{"roots":{"references":[{"attributes":{"source":{"id":"ab903346-c631-4b7b-8d18-908321e7cb3a","type":"ColumnDataSource"}},"id":"19b3a38d-1d8a-476a-ba11-807629105c9e","type":"CDSView"},{"attributes":{"source":{"id":"07a0a307-a5d3-4853-8bae-c50dd1d2bf46","type":"ColumnDataSource"}},"id":"4a10be01-9be6-4a41-b4df-84617566f8fe","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"d0eb2f68-6d5f-432d-a910-cfd63ac9d3b6","type":"VBar"},{"attributes":{},"id":"f87af73c-1634-4fc6-8bbb-f916171b0a9f","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"UqaXGmELBcAwe4nRVC8GwNJRjBcunvi/Kl9GDu+w+L9oag7jNdPdv0jU/8QsHea/","dtype":"float64","shape":[6]}}},"id":"5be5b57a-62ed-454b-a3f4-face6136c59d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f","f","f","f"],"y":[-2.746668548208284,2.872533375062452,3.8708274879167623,4.0705747680380355,4.853086629843052,-1.1806559011412752,-1.4909697418282017,4.7015725961075265,4.835850582743497]}},"id":"6f4d8244-7aea-4d38-bd7b-ce1ec28fe049","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"caa67764-146e-4f8c-8aa8-affac971f8ea","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"af7ed614-8390-4dac-8070-4c202bdb2c02","type":"Rect"},{"attributes":{"data_source":{"id":"6f4d8244-7aea-4d38-bd7b-ce1ec28fe049","type":"ColumnDataSource"},"glyph":{"id":"75410421-ea7c-42b4-a9b4-469794721a8c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98be6041-1273-4ac5-9f3e-595ea51dd031","type":"Circle"},"selection_glyph":null,"view":{"id":"2396369d-6f7a-40b6-86f3-78a05c476bc1","type":"CDSView"}},"id":"ab45eab7-0e27-438d-bc8f-e1a0925cabad","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"60d85661-46a7-4a91-a154-135839b78904","type":"SaveTool"}]},"id":"bce68fa3-1dce-4115-b256-93c46f0d39da","type":"Toolbar"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"d4b5f7f5-fbcc-424a-9471-990b301e5ab1","type":"VBar"},{"attributes":{},"id":"60d85661-46a7-4a91-a154-135839b78904","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"XxGIK1qZBEB1JR7ha/wFQAu+C/ssDg5APpBHLAy4D0AiipIziRYTQFcmNyIFzBJA","dtype":"float64","shape":[6]}}},"id":"07a0a307-a5d3-4853-8bae-c50dd1d2bf46","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"02db8e54-48dc-43be-8423-353dd855b013","type":"Segment"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"40a079b9-3006-42d0-ae98-91e637a3981a","type":"FactorRange"},{"attributes":{},"id":"40be6396-1728-4e97-a001-c7977889c7dd","type":"CategoricalTickFormatter"},{"attributes":{},"id":"32e62795-f159-4208-b4f5-aa9daaefecaf","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c33e47f-7985-45df-ab6a-1ba97fe3030a","type":"Rect"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"146e0457-df6b-4841-a0af-45ff0f65a5ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"39f69b19-f332-4e0a-b2bd-63694237cce0","type":"BasicTicker"}},"id":"e442c9d0-4c54-4e33-912e-9199101bb6a8","type":"Grid"},{"attributes":{"data_source":{"id":"ab903346-c631-4b7b-8d18-908321e7cb3a","type":"ColumnDataSource"},"glyph":{"id":"0c4a3557-369a-4386-a4c5-7e5587a32156","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d0eb2f68-6d5f-432d-a910-cfd63ac9d3b6","type":"VBar"},"selection_glyph":null,"view":{"id":"19b3a38d-1d8a-476a-ba11-807629105c9e","type":"CDSView"}},"id":"c1f75fe8-77e0-4b8d-8bb0-fb0e2e468a53","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0860262d-34a1-4de6-adbd-87ea7342eaf5","type":"Rect"},{"attributes":{},"id":"d0f91a78-ba18-4cbb-af40-20a948f34181","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"75410421-ea7c-42b4-a9b4-469794721a8c","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"oXi/qZ+LY78T3tta6YWVv70VYKZMTPI/xzNhlDM48D9IrV49QNgAQFL2l067BABA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"9pp8XstH5L/wxLbPzM7mv5G1nlHFAtk/YtSPQPzQ2D8YmFtoiUb2PyzHwrXpSPU/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"ab903346-c631-4b7b-8d18-908321e7cb3a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5be5b57a-62ed-454b-a3f4-face6136c59d","type":"ColumnDataSource"}},"id":"5bcfeeab-c83d-4568-a974-4d3729761490","type":"CDSView"},{"attributes":{"source":{"id":"e8e03fa0-dfcf-4d11-b1e2-febe7e7ddf2f","type":"ColumnDataSource"}},"id":"d1ec0eae-1731-439e-abbf-68778f9877e6","type":"CDSView"},{"attributes":{"source":{"id":"6f4d8244-7aea-4d38-bd7b-ce1ec28fe049","type":"ColumnDataSource"}},"id":"2396369d-6f7a-40b6-86f3-78a05c476bc1","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"70aa1fc1-a976-44b7-a5b3-04185157f6d3","type":"CategoricalAxis"}],"left":[{"id":"669a2a5b-2a8b-4cff-9c88-2e85a4d297ff","type":"LinearAxis"}],"renderers":[{"id":"70aa1fc1-a976-44b7-a5b3-04185157f6d3","type":"CategoricalAxis"},{"id":"21716dd9-83e1-4a83-b9bd-91c3db233bb4","type":"Grid"},{"id":"669a2a5b-2a8b-4cff-9c88-2e85a4d297ff","type":"LinearAxis"},{"id":"e442c9d0-4c54-4e33-912e-9199101bb6a8","type":"Grid"},{"id":"0530a504-ae47-4050-8f22-cb918aded45f","type":"GlyphRenderer"},{"id":"ee02ecf2-b30a-4c5a-8e8a-b2d2fe066760","type":"GlyphRenderer"},{"id":"afefe92b-3898-433f-bdb2-514e2800a874","type":"GlyphRenderer"},{"id":"c1f75fe8-77e0-4b8d-8bb0-fb0e2e468a53","type":"GlyphRenderer"},{"id":"eff81bae-4555-4887-ab15-4b2a00dc8900","type":"GlyphRenderer"},{"id":"8c6f1ebe-5a89-4083-a474-49670ba7e00c","type":"GlyphRenderer"},{"id":"ab45eab7-0e27-438d-bc8f-e1a0925cabad","type":"GlyphRenderer"}],"title":{"id":"caa67764-146e-4f8c-8aa8-affac971f8ea","type":"Title"},"toolbar":{"id":"bce68fa3-1dce-4115-b256-93c46f0d39da","type":"Toolbar"},"x_range":{"id":"40a079b9-3006-42d0-ae98-91e637a3981a","type":"FactorRange"},"x_scale":{"id":"f87af73c-1634-4fc6-8bbb-f916171b0a9f","type":"CategoricalScale"},"y_range":{"id":"b57891f9-e5c1-448e-809d-cf01ed3c4a47","type":"DataRange1d"},"y_scale":{"id":"32e62795-f159-4208-b4f5-aa9daaefecaf","type":"LinearScale"}},"id":"146e0457-df6b-4841-a0af-45ff0f65a5ca","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"XxGIK1qZBEB1JR7ha/wFQAu+C/ssDg5APpBHLAy4D0AiipIziRYTQFcmNyIFzBJA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"6mNvqVpR5j8rLFy4MX7lP3hmFJXBy/s/QNNOYPwY/T9WTypi/fMFQAb0TDhKbAVA","dtype":"float64","shape":[6]}}},"id":"00b8be08-b252-4624-9919-4979b53b624c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"6mNvqVpR5j8rLFy4MX7lP3hmFJXBy/s/QNNOYPwY/T9WTypi/fMFQAb0TDhKbAVA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"oXi/qZ+LY78T3tta6YWVv70VYKZMTPI/xzNhlDM48D9IrV49QNgAQFL2l067BABA","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"de826b13-3202-41fd-bc59-ae7570b5621d","type":"ColumnDataSource"},{"attributes":{},"id":"39f69b19-f332-4e0a-b2bd-63694237cce0","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b57891f9-e5c1-448e-809d-cf01ed3c4a47","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"UqaXGmELBcAwe4nRVC8GwNJRjBcunvi/Kl9GDu+w+L9oag7jNdPdv0jU/8QsHea/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"9pp8XstH5L/wxLbPzM7mv5G1nlHFAtk/YtSPQPzQ2D8YmFtoiUb2PyzHwrXpSPU/","dtype":"float64","shape":[6]}}},"id":"e8e03fa0-dfcf-4d11-b1e2-febe7e7ddf2f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"de826b13-3202-41fd-bc59-ae7570b5621d","type":"ColumnDataSource"}},"id":"aa0a4a7c-c730-4c80-9da3-d2bb234fbc2c","type":"CDSView"},{"attributes":{"formatter":{"id":"f2231887-5f48-4448-9a2b-8dd71febcda4","type":"BasicTickFormatter"},"plot":{"id":"146e0457-df6b-4841-a0af-45ff0f65a5ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"39f69b19-f332-4e0a-b2bd-63694237cce0","type":"BasicTicker"}},"id":"669a2a5b-2a8b-4cff-9c88-2e85a4d297ff","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ff29d18-a9fd-4286-b1a9-1693859d3a06","type":"Rect"},{"attributes":{"data_source":{"id":"de826b13-3202-41fd-bc59-ae7570b5621d","type":"ColumnDataSource"},"glyph":{"id":"d4b5f7f5-fbcc-424a-9471-990b301e5ab1","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b8c1ee0e-6c13-4eee-a71b-b8716c28227e","type":"VBar"},"selection_glyph":null,"view":{"id":"aa0a4a7c-c730-4c80-9da3-d2bb234fbc2c","type":"CDSView"}},"id":"afefe92b-3898-433f-bdb2-514e2800a874","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"00b8be08-b252-4624-9919-4979b53b624c","type":"ColumnDataSource"},"glyph":{"id":"6023afa1-0c42-4bc0-b24d-23c175b17203","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85f89739-6362-4b39-826c-6de2112d5d23","type":"Segment"},"selection_glyph":null,"view":{"id":"908ea52f-7ca4-44f4-9365-868962f23592","type":"CDSView"}},"id":"0530a504-ae47-4050-8f22-cb918aded45f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"07a0a307-a5d3-4853-8bae-c50dd1d2bf46","type":"ColumnDataSource"},"glyph":{"id":"0860262d-34a1-4de6-adbd-87ea7342eaf5","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"af7ed614-8390-4dac-8070-4c202bdb2c02","type":"Rect"},"selection_glyph":null,"view":{"id":"4a10be01-9be6-4a41-b4df-84617566f8fe","type":"CDSView"}},"id":"8c6f1ebe-5a89-4083-a474-49670ba7e00c","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"146e0457-df6b-4841-a0af-45ff0f65a5ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0f91a78-ba18-4cbb-af40-20a948f34181","type":"CategoricalTicker"}},"id":"21716dd9-83e1-4a83-b9bd-91c3db233bb4","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"85f89739-6362-4b39-826c-6de2112d5d23","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"98be6041-1273-4ac5-9f3e-595ea51dd031","type":"Circle"},{"attributes":{"formatter":{"id":"40be6396-1728-4e97-a001-c7977889c7dd","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"146e0457-df6b-4841-a0af-45ff0f65a5ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0f91a78-ba18-4cbb-af40-20a948f34181","type":"CategoricalTicker"}},"id":"70aa1fc1-a976-44b7-a5b3-04185157f6d3","type":"CategoricalAxis"},{"attributes":{"source":{"id":"00b8be08-b252-4624-9919-4979b53b624c","type":"ColumnDataSource"}},"id":"908ea52f-7ca4-44f4-9365-868962f23592","type":"CDSView"},{"attributes":{},"id":"f2231887-5f48-4448-9a2b-8dd71febcda4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e8e03fa0-dfcf-4d11-b1e2-febe7e7ddf2f","type":"ColumnDataSource"},"glyph":{"id":"57d9075b-0f2b-43c3-a31b-45c1afca6e7c","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"02db8e54-48dc-43be-8423-353dd855b013","type":"Segment"},"selection_glyph":null,"view":{"id":"d1ec0eae-1731-439e-abbf-68778f9877e6","type":"CDSView"}},"id":"ee02ecf2-b30a-4c5a-8e8a-b2d2fe066760","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"b8c1ee0e-6c13-4eee-a71b-b8716c28227e","type":"VBar"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"0c4a3557-369a-4386-a4c5-7e5587a32156","type":"VBar"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"57d9075b-0f2b-43c3-a31b-45c1afca6e7c","type":"Segment"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"6023afa1-0c42-4bc0-b24d-23c175b17203","type":"Segment"},{"attributes":{"data_source":{"id":"5be5b57a-62ed-454b-a3f4-face6136c59d","type":"ColumnDataSource"},"glyph":{"id":"6c33e47f-7985-45df-ab6a-1ba97fe3030a","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3ff29d18-a9fd-4286-b1a9-1693859d3a06","type":"Rect"},"selection_glyph":null,"view":{"id":"5bcfeeab-c83d-4568-a974-4d3729761490","type":"CDSView"}},"id":"eff81bae-4555-4887-ab15-4b2a00dc8900","type":"GlyphRenderer"}],"root_ids":["146e0457-df6b-4841-a0af-45ff0f65a5ca"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"86ed5be2-5f54-4a01-9fb8-14090f104ebc","elementid":"0297ae76-b9a7-4af5-b799-26f819abc314","modelid":"146e0457-df6b-4841-a0af-45ff0f65a5ca"}];
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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