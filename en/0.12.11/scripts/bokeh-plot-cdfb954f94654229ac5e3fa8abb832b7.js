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
      };var element = document.getElementById("9deb6953-fe65-4cc2-9b5a-a46a829a261b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9deb6953-fe65-4cc2-9b5a-a46a829a261b' but no matching script tag was found. ")
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
                    var docs_json = '{"5428644a-66ee-4be2-8e0d-5f5d088a87de":{"roots":{"references":[{"attributes":{"plot":{"id":"b18a9d32-d410-4967-bf53-b4bfad0c3c69","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e23a405-33bf-4427-9a5b-5065606a1b4d","type":"BasicTicker"}},"id":"5b4ae198-d521-4b0b-abfa-52aa77298949","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b01d1782-e820-4d2a-a14b-493b9cfd4090","type":"LassoSelectTool"}]},"id":"eb17eff7-0f89-4adb-b5f2-3a0289bf1113","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"0a4f3ff4-fa24-4589-ab74-cc3542269df0","type":"PolyAnnotation"}},"id":"b01d1782-e820-4d2a-a14b-493b9cfd4090","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"b8ccb673-0659-4682-b114-fa5e08214c58","type":"BasicTickFormatter"},"plot":{"id":"b18a9d32-d410-4967-bf53-b4bfad0c3c69","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e23a405-33bf-4427-9a5b-5065606a1b4d","type":"BasicTicker"}},"id":"bf1cd27c-ad73-473b-9878-357f9f1905d5","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"4cdf8a27-609c-4710-a483-0200bb0208bb","type":"Line"},{"attributes":{"callback":null},"id":"bcafb292-314b-485d-8337-dfb00b66fa43","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"bada6da4-0b7b-4456-8401-d08aadd5b020","type":"Circle"},{"attributes":{},"id":"bc4cfb37-1730-4c95-821f-8f5240349491","type":"LinearScale"},{"attributes":{},"id":"9e23a405-33bf-4427-9a5b-5065606a1b4d","type":"BasicTicker"},{"attributes":{"line_alpha":0.6,"line_color":"orange","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"13f855c4-44d2-42f0-aa76-d86b7a2769ce","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"b18a9d32-d410-4967-bf53-b4bfad0c3c69","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2e730e7-1669-4a29-8720-ad7417c24e7b","type":"BasicTicker"}},"id":"edc7214f-c5d0-45ce-853a-53a56501b20e","type":"Grid"},{"attributes":{"below":[{"id":"bf1cd27c-ad73-473b-9878-357f9f1905d5","type":"LinearAxis"}],"left":[{"id":"639ebb44-1327-4fbf-9936-cf7947459b0c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bf1cd27c-ad73-473b-9878-357f9f1905d5","type":"LinearAxis"},{"id":"5b4ae198-d521-4b0b-abfa-52aa77298949","type":"Grid"},{"id":"639ebb44-1327-4fbf-9936-cf7947459b0c","type":"LinearAxis"},{"id":"edc7214f-c5d0-45ce-853a-53a56501b20e","type":"Grid"},{"id":"0a4f3ff4-fa24-4589-ab74-cc3542269df0","type":"PolyAnnotation"},{"id":"b4f67279-4dad-4a61-b40c-cf2d52a733ad","type":"GlyphRenderer"},{"id":"94da3a15-dc4b-470c-8bfb-0ba72dc3cc2b","type":"GlyphRenderer"}],"title":{"id":"0b0ee2ef-633c-4162-a43d-a7d37d6929e6","type":"Title"},"toolbar":{"id":"eb17eff7-0f89-4adb-b5f2-3a0289bf1113","type":"Toolbar"},"x_range":{"id":"bcafb292-314b-485d-8337-dfb00b66fa43","type":"DataRange1d"},"x_scale":{"id":"08a64ab7-3873-41be-9fbf-eaf1e4ad7336","type":"LinearScale"},"y_range":{"id":"6d5d3923-83e2-4fcb-918a-40e57acceb0d","type":"DataRange1d"},"y_scale":{"id":"bc4cfb37-1730-4c95-821f-8f5240349491","type":"LinearScale"}},"id":"b18a9d32-d410-4967-bf53-b4bfad0c3c69","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"08a64ab7-3873-41be-9fbf-eaf1e4ad7336","type":"LinearScale"},{"attributes":{},"id":"b8ccb673-0659-4682-b114-fa5e08214c58","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18dda4d8-ff31-4df9-8b1c-e1404feb54ef","type":"BasicTickFormatter"},"plot":{"id":"b18a9d32-d410-4967-bf53-b4bfad0c3c69","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2e730e7-1669-4a29-8720-ad7417c24e7b","type":"BasicTicker"}},"id":"639ebb44-1327-4fbf-9936-cf7947459b0c","type":"LinearAxis"},{"attributes":{"args":{"s2":{"id":"dd6b9b29-3b5d-4adb-94f0-34238970cec1","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected[&#x27;1d&#x27;].indices;\\n        var d = cb_obj.data;\\n        var ym = 0\\n\\n        if (inds.length == 0) { return; }\\n\\n        for (i = 0; i &lt; d[&#x27;color&#x27;].length; i++) {\\n            d[&#x27;color&#x27;][i] = \\"navy\\"\\n        }\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d[&#x27;color&#x27;][inds[i]] = \\"firebrick\\"\\n            ym += d[&#x27;y&#x27;][inds[i]]\\n        }\\n\\n        ym /= inds.length\\n        s2.data[&#x27;ym&#x27;] = [ym, ym]\\n\\n        cb_obj.change.emit();\\n        s2.change.emit();\\n    "},"id":"4e9d2b74-dc33-4ed2-b0d8-0fb249473ec6","type":"CustomJS"},{"attributes":{"source":{"id":"dd6b9b29-3b5d-4adb-94f0-34238970cec1","type":"ColumnDataSource"}},"id":"94ab8fc3-e1f8-4737-9203-ec058aa62c89","type":"CDSView"},{"attributes":{"callback":null},"id":"6d5d3923-83e2-4fcb-918a-40e57acceb0d","type":"DataRange1d"},{"attributes":{},"id":"18dda4d8-ff31-4df9-8b1c-e1404feb54ef","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"b495f99d-c22d-4885-a12f-2d5bf0b7db9c","type":"Circle"},{"attributes":{"data_source":{"id":"d44aa36f-ff70-494f-9974-83fcb49ec677","type":"ColumnDataSource"},"glyph":{"id":"bada6da4-0b7b-4456-8401-d08aadd5b020","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b495f99d-c22d-4885-a12f-2d5bf0b7db9c","type":"Circle"},"selection_glyph":null,"view":{"id":"a6a437dc-8908-4143-bce8-cc0993d8b3c6","type":"CDSView"}},"id":"b4f67279-4dad-4a61-b40c-cf2d52a733ad","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Select Here"},"id":"0b0ee2ef-633c-4162-a43d-a7d37d6929e6","type":"Title"},{"attributes":{"callback":null,"column_names":["x","ym"],"data":{"x":[0,1],"ym":[0.5,0.5]}},"id":"dd6b9b29-3b5d-4adb-94f0-34238970cec1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"0a4f3ff4-fa24-4589-ab74-cc3542269df0","type":"PolyAnnotation"},{"attributes":{"source":{"id":"d44aa36f-ff70-494f-9974-83fcb49ec677","type":"ColumnDataSource"}},"id":"a6a437dc-8908-4143-bce8-cc0993d8b3c6","type":"CDSView"},{"attributes":{"callback":{"id":"4e9d2b74-dc33-4ed2-b0d8-0fb249473ec6","type":"CustomJS"},"column_names":["x","y","color"],"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.44655564242953016,0.7531036047353405,0.08164103728879224,0.573533249062011,0.4356678404784464,0.5836367437554275,0.9783704856655754,0.8675505611588881,0.008132094568283454,0.010701574844964035,0.7144487344368873,0.8314372237262774,0.8918748022130589,0.38729155647670044,0.5362526981357659,0.1960434345537826,0.618425588131002,0.358953544312243,0.6041298714258658,0.6649564460996739,0.41650089933643286,0.48793116895222166,0.19275941091580928,0.2882491759359683,0.38081774746924957,0.8063281391206921,0.533361136767261,0.8851446141133965,0.22103430992689177,0.97792087227146,0.6018139686596873,0.13666363164425666,0.6815756110756638,0.7413051513590294,0.18680037796758275,0.7946097099312895,0.3040220572858433,0.7643506237151502,0.47427511948541523,0.5788967526732105,0.09919792295182117,0.8866232545767532,0.2773067580790902,0.6406382457029753,0.5011971451605207,0.37757891397228904,0.9256048524960867,0.09585800853157644,0.7632445405100652,0.18999332742141284,0.7709713565378534,0.9372837333383647,0.05486073822073467,0.3908634689578143,0.056056112940563896,0.966009221334757,0.1547032028264652,0.4597811546751607,0.013340772143526025,0.5000608416288145,0.7454945497020039,0.45046886767402894,0.7255760098508572,0.5402610273615818,0.2049004443146516,0.3315213290371021,0.027038397009593096,0.4574620246065557,0.8165711883783369,0.8903550413848593,0.5955471489137628,0.8460836995528502,0.8201971618469573,0.8757392826131541,0.3495746643474731,0.6648191664226786,0.9531301733676518,0.3275738160639673,0.49977082691139985,0.554057039519036,0.38940909889482045,0.6220652231936038,0.09146040240160624,0.503290297474012,0.2964352015565306,0.387210000280797,0.28235185816546804,0.9257881596684042,0.8606358952720766,0.5077188139250194,0.18775803683804126,0.7123507880958271,0.382685431985913,0.5206210840408312,0.09759115543022379,0.42376469621237345,0.6645829352408446,0.652545287600325,0.3872603064016461,0.07729670834836755,0.722189318298998,0.716825113267107,0.3597559747732587,0.8603171519711238,0.9176784811739516,0.3542677495639944,0.25248569762171247,0.31430052998505564,0.6718030099631973,0.8295117862135427,0.03099201589690115,0.15620782581559634,0.974472607179113,0.11279347634601078,0.5519579620074673,0.7823320008640369,0.20325045825059562,0.715862027470362,0.31131950863352387,0.3379539141607687,0.9597081235782573,0.14671649715940227,0.21930516723026483,0.3301357794099936,0.40349739728664114,0.11586315870035602,0.28324568553283724,0.35640794135371234,0.18942430985557845,0.8607278172285243,0.5212680617361403,0.33392252237033604,0.8997045676646833,0.0019729268127205435,0.45114690227302245,0.2802468067648637,0.19873708047751049,0.3745987635709346,0.4210859742196176,0.3437108213142116,0.636815503924129,0.4351333872973546,0.5163980029686611,0.041774733806935194,0.11365166009216954,0.9742820825708686,0.15241389766931213,0.8858098815019676,0.423544601910835,0.5606285706128523,0.6000064450139355,0.17906304028693432,0.9606877363340905,0.6437848641241763,0.6254210325511929,0.2615719760457579,0.8462474848688035,0.5805676773313566,0.3101978342338363,0.32759939980938335,0.32460780737902195,0.7117792934576738,0.8214071435448124,0.7909756111421046,0.0711878217756523,0.16155641694313594,0.17883732979665845,0.0855319691180797,0.7914429452661865,0.43420903766706975,0.802640226162329,0.8907130970358458,0.7783785026032636,0.6447442163913971,0.5615248473648924,0.56827236743419,0.5001171303590148,0.706520238923287,0.33224112740671485,0.15242092736272717,0.21152461547482881,0.7909614868302611,0.5193276778477416,0.4836702473766178,0.19840352998891708,0.6859468386955684,0.43974888900896436,0.9061400428625339,0.3134480752449076,0.33465051080035335,0.7727932987049821,0.4239663750119729,0.45222462010372644,0.5086093200957627,0.8303943761156163,0.15304796137519017,0.29359958009186526,0.713317403990674,0.8075148085191276,0.45728820462179376,0.7347536933214937,0.7217842854407646,0.37021112806256373,0.07253455340681303,0.8811922789976387,0.006140350657133364,0.956872231880873,0.20216633823001295,0.4374302890220132,0.7115954308345901,0.6805828230488279,0.574633963992264,0.801019019003823,0.07897025511542066,0.5120753717494385,0.32044148401810557,0.20166653160924208,0.7705553864588996,0.22338654556171333,0.13261898203073197,0.7916014304153901,0.39051436051609456,0.2557494099555754,0.5305940705422472,0.5549591101910181,0.8178287424688687,0.12617393965259605,0.6191101976973041,0.5296953668960609,0.8731203177748025,0.42529357239612986,0.1841839210617342,0.021841181366101026,0.07288689460113207,0.05439568048355248,0.35014102147427184,0.38912901486018747,0.8298226648586121,0.49052581163358955,0.5829378020425544,0.11896990169933763,0.06944517376242332,0.8995327078335171,0.35003519537826044,0.5717924012930081,0.47617598904199787,0.918232238430023,0.0947327159930691,0.23212543592836632,0.25561750489706003,0.059496265711947105,0.3015177744344463,0.2190690695924895,0.5517994308999833,0.968142008007667,0.06704491744092667,0.04833913045032545,0.9271665121180861,0.7843541952983653,0.7359404099804713,0.5303959867154763,0.10299883133587495,0.27798128990245297,0.8718050751790242,0.5226803752321686,0.37966521589082025,0.7442716591109017,0.5555551169785176,0.986803999415292,0.2729736789314633,0.7807100472528224,0.5444123360706042,0.8899445206203334,0.7090842533016889,0.4013970670997826,0.011821840653660987,0.6180332758469231,0.28352143306506516,0.4119134800537071,0.48454813162868304,0.3563232367285657,0.11180823378706939,0.6991753275535569,0.6836073604958117,0.6088764599365013,0.25043250782127247,0.1242211396636913,0.17646112964788518,0.04922563974802996,0.28873881989173034,0.7677880166246035,0.2807523886997094,0.1426811453499549,0.0007036206265812472,0.7247762692490933,0.33583612158899745,0.039202404864245866,0.24832597498016573,0.5377076262479588,0.4914059087930426,0.7914550016977089,0.5991726143861767,0.022532532796452176,0.027831326653223964,0.43346969830055837,0.10171227860435894,0.6781767295304423,0.9981141096796544,0.80177674204674,0.722753448224665,0.11499363453712952,0.6226839393042547,0.7835196633927707,0.13033146189138511,0.4739924510170387,0.733012770407859,0.25582676127157344,0.23035008227227183,0.7900707972244577,0.5663516874197216,0.9984056382326771,0.7182333931813168,0.7235580842809013,0.3368614780255317,0.26788501608936843,0.17446557525055684,0.8738512329705403,0.2701910428269336,0.7453441661444957,0.6983637707898913,0.8253700567915767,0.06779399712372447,0.31179423435225895,0.8309015690304116,0.2757869063428928,0.4870987276863178,0.2291159693180651,0.04969392745930412,0.10799117681271331,0.8677925056026761,0.35939768787204185,0.3146890816819953,0.010448998051662217,0.7526733669002368,0.6657600467003563,0.7811030091503651,0.7563665463157391,0.5359788463647558,0.386586474246701,0.3657741455237934,0.11199790761667072,0.8260670748790863,0.6644205592948802,0.32767151138580153,0.2872443644431706,0.22077965913262398,0.8109584118777299,0.9322409802818614,0.15426469536073295,0.7000315282592301,0.21938726287311572,0.9825537384652738,0.04674391783144183,0.2640475621685492,0.4977943949396779,0.39051396513981285,0.9274374443578611,0.8491756801311586,0.035723965680764413,0.6456921569078303,0.43349503251634003,0.2896412568066844,0.09592160399346428,0.6642837701088189,0.01706641048996682,0.9684232725649318,0.965931129434094,0.4249055504370255,0.9108014154909884,0.28857920804632187,0.9841694473875456,0.5919014112602878,0.7778138155618942,0.1615365912009894,0.30770652593591796,0.3102548630240638,0.1077438080437495,0.47843706031240496,0.7535444567055499,0.23338067377400862,0.6687843121686544,0.8787035123064204,0.6362965825506034,0.5594326983535112,0.14758515878364342,0.6903595197986993,0.05518839848248669,0.5451260737938461,0.16114775863260455,0.8050950694402892,0.850755003737307,0.22662269756038933,0.18317953956471988,0.39156194107066833,0.5585640753468599,0.03583826527624023,0.47843138361384463,0.14166023483990975,0.5281369414380965,0.42856563432064854,0.7085279730680251,0.3596829536401758,0.5236246512211952,0.5206038573174676,0.7369494175327426,0.9767935041805037,0.9386290127457231,0.6333828676468913,0.9138896838455249,0.6149144009768396,0.5781144741340871,0.18735687502779574,0.13062797488300482,0.5504362722302856,0.11028495394423199,0.23349077612044122,0.5472603205612556,0.7986090381661037,0.40654766027649913,0.2791991290289324,0.5573499395966438,0.9150959533959621,0.6988653063071333,0.20097016563537873,0.08523051986777996,0.3212696856250532,0.2448893606671405,0.25484731268632943,0.8408284169540484,0.06726995843841888,0.6118159576732373,0.46295488429865983,0.8415896747630687,0.884054553067499,0.16055531241288246,0.550110980606542,0.38452421880640997,0.3400137991672858,0.48383737536246063,0.4029647381223007,0.12520282536074656,0.4638928296567706,0.41212758438299124,0.9196518110914514,0.7245149352290868,0.10465486698203086,0.797239841647126,0.5031572367378856,0.672874369923177,0.41337108636349174,0.8038173614104618,0.32058662657355264,0.49576262123447146,0.9810309732089133,0.7817977633308894,0.5660065341146426,0.6995133187839524,0.08440638725163763,0.5919813890163811,0.975647529976307,0.4906966763857229,0.007613939367168809,0.3532156592389849,0.8526090554376746,0.5242228890775666,0.13602343827454866,0.3134093358646255,0.7432610739825704,0.8793910445333888,0.42960418992289073,0.6485008046721259,0.00788676535688082,0.8864605079195689,0.31093457373469613,0.6827791144874462,0.9463135529211391,0.27660475809234053,0.5271471429850945,0.6053002105116706,0.9592470323475024,0.1596660437575793,0.6674043248731306,0.03458803751189443,0.39472709687171836,0.47623128419084126,0.5786903108049156,0.2834543346076722,0.24631277520628392,0.9053779088881964,0.8763669801709566],"y":[0.7017574444884259,0.39105368390961126,0.123562220294125,0.7450240308631665,0.32506774008850425,0.8313979183217113,0.35577852668852816,0.9867752158546689,0.4949794612745383,0.6982027427100266,0.6003017867198543,0.4059566212783161,0.043085714692906896,0.12292943045932558,0.4946482528088809,0.2130292286386345,0.19588496751603546,0.564149185706864,0.7417479556162454,0.2874966305573037,0.853993859163794,0.16996091053244278,0.4401267840756633,0.6277008703849735,0.8100373133088111,0.8634613724830748,0.4239986213379835,0.9593459500372811,0.6994687573585211,0.521676624336213,0.37150310484883586,0.5178323944234439,0.042958780515827466,0.09914867133770056,0.44273093795879714,0.8062874290430309,0.5770818839461768,0.30171289229356024,0.04057957730868822,0.8574849370641316,0.9659862385638361,0.18686702033969382,0.5144701751541828,0.7183120178364442,0.6944699186083483,0.9240934593097838,0.7258195899394273,0.4167880577656289,0.4717482173585663,0.26083444253851407,0.7713000598794145,0.7885068271791525,0.19242106835647999,0.4826865064911342,0.6010648771299504,0.5223559131324009,0.9890803648110618,0.14071682430520782,0.7486454167429135,0.07151226425517887,0.3309735350097909,0.2175219321229065,0.3770323535942438,0.888425443392786,0.6322536335298279,0.6457015409076858,0.15074294351848283,0.08157609349117456,0.7963340996265715,0.26743481241361267,0.7581773754817134,0.5182054746257952,0.2664315522831616,0.9689866826320632,0.18505296513716207,0.24162048958899962,0.22529869230125288,0.4476279942308693,0.5236175786768904,0.45039044933921335,0.20533667318614646,0.09022138491623288,0.4836317195405465,0.2396296560625062,0.28887102598588965,0.7316524817030579,0.9294739708636001,0.3797364111423873,0.3730730183079842,0.38041744082447115,0.9239452808890892,0.9327916598669532,0.7732891591518268,0.6754312174328099,0.7684686833094867,0.8374151177415706,0.9425445028919376,0.5281706430191055,0.16404278187033883,0.5843703131130824,0.8762846319899491,0.35878743739955155,0.634242584472337,0.6210159081012115,0.7177618000925892,0.1358987563205024,0.3619307243405244,0.1604678874893739,0.7908395842019181,0.30338376832332026,0.35080747151585834,0.22343082924363444,0.8006529386302422,0.26299414125922327,0.2629184964035136,0.1733004004999399,0.764563100885745,0.27446083976392377,0.35140742754857657,0.9507543391684031,0.09028888781657674,0.26910822940475043,0.8527531775286125,0.2898725935947507,0.5170017448563297,0.6695302734916362,0.1629450253240835,0.5580709667049484,0.994359891688362,0.01577074330881667,0.9225178172327965,0.21162902309028508,0.8973279435367626,0.3909377925392534,0.150021206876642,0.3105418483064143,0.9680584346693261,0.12447517381732032,0.03109819095090771,0.5644918083472503,0.2981598155255629,0.7980155941973707,0.8012322923147792,0.6162229088435833,0.6380797231388796,0.14721889942872357,0.43922587042880035,0.010496745366087912,0.19875292222847485,0.22679610160586405,0.35590984774540557,0.18607088527043858,0.6301260591632534,0.4649924156947004,0.27571523181193724,0.31542828637555365,0.03314657229287221,0.8651728442019517,0.517476021603407,0.21358780563363855,0.23559333590038678,0.4887144571892369,0.29806584994731455,0.09715435798921856,0.6101143877426933,0.7323333537209561,0.1543158079373267,0.38882856542734434,0.9118095510743558,0.41480769291521835,0.2212654089584707,0.4794820556073275,0.731175595925734,0.8792625284218949,0.1331712448029685,0.6475357294694775,0.42301674790497035,0.726402286929854,0.8148846616068035,0.4567800596600313,0.6579980098802354,0.5710311278827188,0.36437994480389924,0.37211063342037876,0.6424685344519914,0.01575187630049457,0.598944419331205,0.190061450209559,0.5628761033950507,0.14635760417661825,0.12426988173046638,0.8507058848765561,0.9584357243696076,0.3731239010837776,0.08778084045983192,0.065437112333396,0.7849350980418888,0.08659670328829083,0.4910900803833328,0.14762540159776472,0.6085918698603838,0.48224103526765494,0.9258105432117572,0.12905128099523744,0.6464721363179126,0.3009958516803243,0.9730608055130473,0.7031701573893949,0.6852264304174218,0.7199757210805598,0.7202625039231568,0.9520901787111412,0.777408536748821,0.036176781447115225,0.15203181088928797,0.5490649402433903,0.44752600544032506,0.14029147652819807,0.47282850626105244,0.7723948175436789,0.8983259715636471,0.5580311438513911,0.2140786822595786,0.49821730364335504,0.6756066564424711,0.4367790648965526,0.2605067706027345,0.19616698869948823,0.9937461156857362,0.7475597244215217,0.5534945163755369,0.055091294720587936,0.5857934659988726,0.9847748338781632,0.073119702919206,0.6089105534615856,0.333859510695139,0.9819362957549361,0.12194777050580485,0.2327414723090082,0.06159923979919768,0.8787055066769565,0.9478022714889031,0.6866754772564119,0.5117045272903014,0.3213851284183653,0.3641706987606592,0.8200794348575454,0.6507676478893542,0.2411773800205521,0.47368301480615627,0.6245769537375444,0.9089302042908822,0.790624855871306,0.8318375361069601,0.26672049430727285,0.1693566222481171,0.29219110403057047,0.7083051213479661,0.39587102153842335,0.7490242696916363,0.2565172227068634,0.6699529725507589,0.8635823420311077,0.6075100129234259,0.14678602333873358,0.44276680142225666,0.7372594025933541,0.3958966350777334,0.3085345370553084,0.014063587272361566,0.8653840711391715,0.8286918106163036,0.21072208957734695,0.10751514572612386,0.24978679404107174,0.9807116829318284,0.9745540023737891,0.17622210206926292,0.32866965176970375,0.6859009909148915,0.12599691878029762,0.5701133126518086,0.8414048894615425,0.7571320806459838,0.5577476680038622,0.1945373677137563,0.5822949369169812,0.33473035345787416,0.30921858199150976,0.059077903839179435,0.6129345039774717,0.0682159666761799,0.1306249182352195,0.301900565570829,0.25556709773356345,0.8766789413088484,0.0992557658506612,0.6919458526922592,0.006343096084704403,0.9749524608579557,0.5668972285990288,0.27138251763484544,0.5933430230059706,0.02245172614613289,0.040383943237722764,0.8323062989081663,0.43004304554212325,0.29916348529751624,0.5398466893738818,0.27437192929595056,0.7535177493499516,0.9757228396640193,0.3834078833900524,0.829105501271311,0.7618475472685775,0.5683821450204456,0.9228630094402589,0.7150141852537224,0.8861010743810444,0.10731971886374703,0.2404210711107867,0.4791565570958455,0.2019134248612071,0.5738223935876612,0.5074353065157328,0.13911589021773896,0.6703950660136864,0.0413955539705092,0.9954573596422305,0.7812420989490784,0.7956640947507196,0.7024104210017784,0.2868896150818797,0.3844180811666872,0.8238272455788277,0.29610184134969986,0.7248414755652702,0.10044547338127197,0.9341321989946181,0.6897463781729465,0.7393104230026676,0.5605934940096796,0.6617125698788329,0.2567312188683982,0.9038252777618517,0.4945223766831005,0.2822736085412768,0.18055904549333435,0.62855114776888,0.6403029463268524,0.8280279145245331,0.9835732265193855,0.8768291893400911,0.00827609590495404,0.63512223705356,0.011347637544602662,0.8259787326258726,0.9857680100355548,0.18160027159197467,0.5771267006959963,0.08188726642246902,0.2878706388708612,0.18778578952791658,0.6860007042311511,0.711132492761376,0.2525231012054,0.19160234201490622,0.8327233371742702,0.5833720120870728,0.34720180644424925,0.5402838790607052,0.13070264869239978,0.060089207358138275,0.8291681457916783,0.37230069014319367,0.688908588587004,0.5097092325554615,0.8056641899109035,0.07690327201148028,0.4560331936089147,0.083280361838868,0.7390198856878326,0.9084951010012221,0.2558914073633771,0.26247954986784805,0.17905982861491987,0.9087790466436796,0.13745898248810562,0.8749900092096808,0.41923458803538993,0.09819517095759256,0.8213774143112185,0.28947832087431546,0.264219495254684,0.07733063013915176,0.2940363604193367,0.9994640234727119,0.8913009440642743,0.6231085898003492,0.29508285927560385,0.9005469340549053,0.22189736493332823,0.5983208799710098,0.1885032176947894,0.6020211155245513,0.2843610066340315,0.37852813086613657,0.5210541142147843,0.7398078107866088,0.06643375585653966,0.5800402815118202,0.7234348434880065,0.9502236343403595,0.5335065244030163,0.5708670952564423,0.44864543672494017,0.1851201342519908,0.07458485681964411,0.6897777614472073,0.5723676288534967,0.4667285396626105,0.726142198844319,0.6963680382164056,0.4038687900021949,0.16873761146320188,0.16694077798571083,0.9999469644748564,0.7116307198369153,0.12392741614469471,0.9466229213827021,0.03677878867859252,0.7032378016307178,0.1664875425040504,0.16601308758196553,0.7989475302359696,0.679783486069287,0.23364366520378543,0.8429345393680548,0.017790309278025607,0.7691462586852997,0.5641733738794309,0.35841709942953703,0.23610898431323746,0.24226265037002304,0.8159244980019598,0.26059987039930355,0.1428345731937407,0.7248043107574812,0.34004047489936184,0.6937616105457736,0.9063856393223648,0.35891309360964496,0.43122533217455417,0.14546237106545512,0.692750064700947,0.5348233286108675,0.11306403026046974,0.2925545305977124,0.9915817123949556,0.0693507254244623,0.23943534537025613,0.10563302559861643,0.3920027121341281,0.033417205347173407,0.5151851995641701,0.6539053330868593,0.7485016480779738,0.30678818306130284,0.14175137351851896,0.17639455807068538,0.7544527374800494,0.9906685043964505,0.005976400522120562,0.7717507612451986,0.1576322274588139,0.24448527746115511,0.2767895331083958,0.26723391618178594,0.4943542296885237,0.014890497902308009,0.3961647425356203,0.7398181190416752,0.8584050377887685,0.9700752850549212,0.8387709784454589,0.9131889721709131,0.43097633365300514,0.9142383052767682,0.7648267915039875,0.684556441383438,0.1826845395523239,0.6344642124435396,0.2535110059772374,0.8114342714662814,0.5087097056809966,0.8904995997039002,0.06967409863493956,0.8060334378197851,0.9643195241987914]}},"id":"d44aa36f-ff70-494f-9974-83fcb49ec677","type":"ColumnDataSource"},{"attributes":{},"id":"f2e730e7-1669-4a29-8720-ad7417c24e7b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"dd6b9b29-3b5d-4adb-94f0-34238970cec1","type":"ColumnDataSource"},"glyph":{"id":"13f855c4-44d2-42f0-aa76-d86b7a2769ce","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4cdf8a27-609c-4710-a483-0200bb0208bb","type":"Line"},"selection_glyph":null,"view":{"id":"94ab8fc3-e1f8-4737-9203-ec058aa62c89","type":"CDSView"}},"id":"94da3a15-dc4b-470c-8bfb-0ba72dc3cc2b","type":"GlyphRenderer"}],"root_ids":["b18a9d32-d410-4967-bf53-b4bfad0c3c69"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"5428644a-66ee-4be2-8e0d-5f5d088a87de","elementid":"9deb6953-fe65-4cc2-9b5a-a46a829a261b","modelid":"b18a9d32-d410-4967-bf53-b4bfad0c3c69"}];
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