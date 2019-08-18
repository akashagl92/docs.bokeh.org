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
      };var element = document.getElementById("93344ac6-bbcf-44e0-bdcb-82fbe24593ba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93344ac6-bbcf-44e0-bdcb-82fbe24593ba' but no matching script tag was found. ")
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
                    var docs_json = '{"020afd21-a578-45a4-a721-6853340af213":{"roots":{"references":[{"attributes":{"data_source":{"id":"5348baff-c166-47d3-ae8f-a967a8473f5a","type":"ColumnDataSource"},"glyph":{"id":"77b98c10-5253-4f93-a547-eef66357e8b6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d5bb0db6-71a7-425b-81ce-ebd9e210e144","type":"Circle"},"selection_glyph":null,"view":{"id":"35dcf0cc-d324-4d08-b87c-2b1f2376576d","type":"CDSView"}},"id":"e6d756d9-e9b3-4e0c-b40b-db449557d719","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"de25f908-9d0e-40c1-a82a-f8a14dd1935f","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"40e105a3-db12-46a8-a64b-43bc7906a0cb","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"9ad742cc-cb82-4d80-9483-f90c47efd412","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"3ebee3b4-f1eb-4e25-a78a-8595f0e5a67c","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"5dee4400-6548-4747-ab9b-0ad17d664632","type":"Circle"},{"attributes":{"range":null},"id":"21ba1616-42e6-415b-8d3d-c41970e166ed","type":"Jitter"},{"attributes":{"source":{"id":"0c931759-8532-4f81-9e92-bdc2a8ffffd4","type":"ColumnDataSource"}},"id":"a0bf5ce4-50e6-45b3-aa52-75006b8d9269","type":"CDSView"},{"attributes":{"overlay":{"id":"4aa3e904-c2f3-4577-90c6-e679d6fd76b3","type":"BoxAnnotation"}},"id":"256baf1d-fa09-4660-a572-679b7724dc82","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"b9737589-bfef-4641-82fa-85d9f296fffc","type":"ColumnDataSource"},{"attributes":{},"id":"13848dc4-3638-4617-ac4c-b47e3a314d76","type":"LinearScale"},{"attributes":{"source":{"id":"9157cac3-4fe1-407b-8b13-6b194e7f2c5f","type":"ColumnDataSource"}},"id":"ba290e47-c1d7-45de-9693-ea084662527b","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"d850fc3f-c324-4f30-8eab-b7299a112165","type":"ColumnDataSource"},{"attributes":{"source":{"id":"989aee7c-dd60-4a37-93c7-4e4a60251b4c","type":"ColumnDataSource"}},"id":"9d8b684d-0706-4d9e-9504-9bfda26ef6b7","type":"CDSView"},{"attributes":{"source":{"id":"d850fc3f-c324-4f30-8eab-b7299a112165","type":"ColumnDataSource"}},"id":"69f384e6-60f2-4b84-a191-0098fe620135","type":"CDSView"},{"attributes":{},"id":"c823d1c4-5ec8-4a32-a9f7-7e03b71d231f","type":"LinearScale"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"a6836863-0ecd-4c87-845b-b7a6707991f0","type":"Circle"},{"attributes":{"plot":{"id":"12ee9f2e-bbe0-4fc1-9864-759e619c79e2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1a53ba9-ae8f-4c64-b797-1bb1b40953db","type":"BasicTicker"}},"id":"590bfe02-f0ed-4999-b2f7-e526b4894a8c","type":"Grid"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"66e0c1c8-f6f9-4564-95e8-77ae1cba5630","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"21ba1616-42e6-415b-8d3d-c41970e166ed","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"8a6703aa-1dac-48b2-b92d-d4fd4f4ce211","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"0c931759-8532-4f81-9e92-bdc2a8ffffd4","type":"ColumnDataSource"},{"attributes":{},"id":"261caf9c-d815-4902-8890-6d487b14ca5f","type":"PanTool"},{"attributes":{"data_source":{"id":"4b420c46-be7e-424a-acac-584be91e7644","type":"ColumnDataSource"},"glyph":{"id":"e5e88a01-3a6c-4265-9a57-308a544a0c6e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c7cc4ba9-20d2-49c2-b7da-6f6f301af384","type":"Circle"},"selection_glyph":null,"view":{"id":"95aff048-d105-4de5-b8d8-2ba7784594ba","type":"CDSView"}},"id":"e09f61e7-b5a9-4e34-97a7-3a95462fe321","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"f9744065-d7c2-46b6-ab87-eebd82ebe9c4","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"a73b074f-7bbe-470a-a700-727574598b1a","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"3372d645-be32-4456-8f17-43f6c74ee578","type":"Circle"},{"attributes":{"data_source":{"id":"874bbf3c-1c74-402e-a2c6-dd34a58ef054","type":"ColumnDataSource"},"glyph":{"id":"03080698-1e4f-4849-a871-afba162fa146","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c7aab9d-ce47-4dab-8cf6-92583c6e1875","type":"Circle"},"selection_glyph":null,"view":{"id":"8c62ba44-897c-4f0e-915f-7d58816c7dde","type":"CDSView"}},"id":"1788b1bf-308b-4227-8698-ee805d5bef19","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"8fbb8f5b-ae4f-45cc-bde2-4668c163c18c","type":"BasicTickFormatter"},"plot":{"id":"12ee9f2e-bbe0-4fc1-9864-759e619c79e2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1a53ba9-ae8f-4c64-b797-1bb1b40953db","type":"BasicTicker"}},"id":"d2cf2b55-782f-4fc6-9c0c-220e7c38f40e","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"56954997-dd57-421a-803b-df32ac094503","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"479834db-ee1d-4f24-8589-8b89b3c919e9","type":"Circle"},{"attributes":{},"id":"f0ca34b2-945c-4bd2-aadb-75e1768d3d30","type":"SaveTool"},{"attributes":{"range":null},"id":"dc58f5a9-96c9-4bf2-850a-e062b0f73a81","type":"Jitter"},{"attributes":{"data_source":{"id":"2854fc7f-2a4d-4d2b-ac40-319b1496ca59","type":"ColumnDataSource"},"glyph":{"id":"ce3ec625-d95b-48bf-ba68-a2a5865c0f12","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b76f5f0a-4279-4598-a46c-973c32e58d26","type":"Circle"},"selection_glyph":null,"view":{"id":"444179a0-f2c7-4446-91e1-06fbf383482d","type":"CDSView"}},"id":"5b00a1a8-e977-4f2c-b5ac-6e342885e8a0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"4ebf1901-0794-4f71-b522-27f9766ebd87","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"23a53c7a-b09d-4b19-831c-5edffd3d68c7","type":"Circle"},{"attributes":{},"id":"8fbb8f5b-ae4f-45cc-bde2-4668c163c18c","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4aa3e904-c2f3-4577-90c6-e679d6fd76b3","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"0d38ad9d-e57e-432c-9f44-79a3624c460f","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"dd12206c-1b78-4c48-88f2-3d1540cf8e7e","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"268d578f-719e-4ded-a324-8cd50782f235","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"ce3ec625-d95b-48bf-ba68-a2a5865c0f12","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"989aee7c-dd60-4a37-93c7-4e4a60251b4c","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"846c1f38-ec29-422d-8dc6-d8ffa0b010d7","subtype":"Figure","type":"Plot"},{"id":"12ee9f2e-bbe0-4fc1-9864-759e619c79e2","subtype":"Figure","type":"Plot"}]},"id":"5d293ac7-ff1d-433d-9024-bcfeb67707f9","type":"Column"},{"attributes":{"data_source":{"id":"9ffba460-cdbd-4034-ab63-8fbdb2ba0eba","type":"ColumnDataSource"},"glyph":{"id":"e03bd070-c607-40f9-abd6-d11638f46bc9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd56e4f6-f7ce-49f7-ad1a-b005f6c1d3ea","type":"Circle"},"selection_glyph":null,"view":{"id":"b9d8a566-f510-4122-a728-f6f43267bceb","type":"CDSView"}},"id":"6c68c8e5-2d13-4e21-bf96-ae475886a5ba","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"332fa31b-5d01-4d89-8774-021d98415a46","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"b9d22b6d-3147-49d3-90c2-d054e882b0df","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"e7f506f1-2c1e-4a89-9a0e-0fbfd56971d8","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"c3dd793c-8ac9-4984-9f0b-aa52cbe03812","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"56954997-dd57-421a-803b-df32ac094503","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"f3eae9a8-eb46-457b-ae5a-b0f6a7da3b0c","type":"Circle"},{"attributes":{},"id":"cf8a4c27-4fd4-411c-bae4-09b162e1f2d7","type":"ResetTool"},{"attributes":{},"id":"e85e0aad-c17b-4c17-9c30-4b282cf87dc7","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"2854fc7f-2a4d-4d2b-ac40-319b1496ca59","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0c931759-8532-4f81-9e92-bdc2a8ffffd4","type":"ColumnDataSource"},"glyph":{"id":"1e0d201e-5841-4fa9-a359-122b76679ab1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40e105a3-db12-46a8-a64b-43bc7906a0cb","type":"Circle"},"selection_glyph":null,"view":{"id":"a0bf5ce4-50e6-45b3-aa52-75006b8d9269","type":"CDSView"}},"id":"cd3bc722-34fb-4493-828c-a7c185b0f066","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"846c1f38-ec29-422d-8dc6-d8ffa0b010d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfa5c339-63a3-4202-bf57-e44993da7305","type":"BasicTicker"}},"id":"5640babf-7e7a-4a46-85c1-49e5024e2330","type":"Grid"},{"attributes":{"data_source":{"id":"daa0a1e2-f066-4d6c-b95f-37b368de0e0c","type":"ColumnDataSource"},"glyph":{"id":"07d7e8ca-862a-4f11-8172-9e6ebfb7ba22","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dd12206c-1b78-4c48-88f2-3d1540cf8e7e","type":"Circle"},"selection_glyph":null,"view":{"id":"6b8c8b3a-c56d-4233-9fc1-f82ebf95492c","type":"CDSView"}},"id":"112d7923-51ca-4dcf-8a50-8aee6dc9f7ba","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"c635f6da-242b-462c-beb3-76d5b9b93481","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"4ecdc4cf-8242-44a2-81fe-646356c3c325","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"e5e88a01-3a6c-4265-9a57-308a544a0c6e","type":"Circle"},{"attributes":{"source":{"id":"2854fc7f-2a4d-4d2b-ac40-319b1496ca59","type":"ColumnDataSource"}},"id":"444179a0-f2c7-4446-91e1-06fbf383482d","type":"CDSView"},{"attributes":{"range":null},"id":"56954997-dd57-421a-803b-df32ac094503","type":"Jitter"},{"attributes":{"data_source":{"id":"b9737589-bfef-4641-82fa-85d9f296fffc","type":"ColumnDataSource"},"glyph":{"id":"be1c6d82-1820-40e4-aa34-ebe49456fdee","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5dee4400-6548-4747-ab9b-0ad17d664632","type":"Circle"},"selection_glyph":null,"view":{"id":"771cecf5-2f57-406f-8d68-39ba98339992","type":"CDSView"}},"id":"fc0a75de-7100-4226-b9d8-a104a8cf8cf8","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"e96d88d3-843a-45de-9e07-1bb11c099289","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"9ffba460-cdbd-4034-ab63-8fbdb2ba0eba","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3c2ae77e-20be-42a0-a872-82470eebb531","type":"PanTool"},{"id":"cbd46cfc-90bf-4125-b096-8c72bffc08e9","type":"WheelZoomTool"},{"id":"56797aae-519f-4553-a9df-5fc11ce0aacd","type":"BoxZoomTool"},{"id":"18461d6b-b1d7-42b0-892e-3a2a370aeea7","type":"SaveTool"},{"id":"243b5843-2e35-42f1-bde7-daa2cfb972f3","type":"ResetTool"},{"id":"5bfca0e1-2d02-49db-908e-48b48903bb14","type":"HelpTool"}]},"id":"8fb41c14-d439-4745-8484-bf851f4c2ab3","type":"Toolbar"},{"attributes":{"source":{"id":"e7f506f1-2c1e-4a89-9a0e-0fbfd56971d8","type":"ColumnDataSource"}},"id":"b74562cc-feca-4ce8-9329-c3aaed3e6542","type":"CDSView"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"03080698-1e4f-4849-a871-afba162fa146","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"3a6dd552-cdf3-4ebe-a203-4112a67c8af0","type":"Circle"},{"attributes":{},"id":"18461d6b-b1d7-42b0-892e-3a2a370aeea7","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"051ba841-c23b-4c66-8f7f-acd9b8dad09e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d850fc3f-c324-4f30-8eab-b7299a112165","type":"ColumnDataSource"},"glyph":{"id":"f3eae9a8-eb46-457b-ae5a-b0f6a7da3b0c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"479834db-ee1d-4f24-8589-8b89b3c919e9","type":"Circle"},"selection_glyph":null,"view":{"id":"69f384e6-60f2-4b84-a191-0098fe620135","type":"CDSView"}},"id":"967aa7b5-e608-4207-91ef-98b588f94746","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"a7d5ccec-1ea6-40b8-8526-10fe3e4edb8d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"daa0a1e2-f066-4d6c-b95f-37b368de0e0c","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"77b98c10-5253-4f93-a547-eef66357e8b6","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"5348baff-c166-47d3-ae8f-a967a8473f5a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"4b420c46-be7e-424a-acac-584be91e7644","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"66e0c1c8-f6f9-4564-95e8-77ae1cba5630","type":"ColumnDataSource"},"glyph":{"id":"5c11511c-7c05-4143-8736-210e70fd6362","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3333d7d-76a1-495d-9d72-c4df7a02fe53","type":"Circle"},"selection_glyph":null,"view":{"id":"c2a2a982-05e9-4020-a11f-60f421c93dac","type":"CDSView"}},"id":"71550ef7-2b67-4f8f-b499-8b5f67f8e9b0","type":"GlyphRenderer"},{"attributes":{"range":null},"id":"332fa31b-5d01-4d89-8774-021d98415a46","type":"Jitter"},{"attributes":{"data_source":{"id":"051ba841-c23b-4c66-8f7f-acd9b8dad09e","type":"ColumnDataSource"},"glyph":{"id":"3a6dd552-cdf3-4ebe-a203-4112a67c8af0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15c2719d-fec4-4ba7-877d-a076c08ec3de","type":"Circle"},"selection_glyph":null,"view":{"id":"bb22aae2-1b0b-4e7e-8cbc-30a237c0c878","type":"CDSView"}},"id":"cdd46df8-91b1-4282-9682-03e0d462b5f1","type":"GlyphRenderer"},{"attributes":{},"id":"ed3b85bb-a366-4ac5-b7e9-ab12c9b73c49","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"15c2719d-fec4-4ba7-877d-a076c08ec3de","type":"Circle"},{"attributes":{"data_source":{"id":"a7d5ccec-1ea6-40b8-8526-10fe3e4edb8d","type":"ColumnDataSource"},"glyph":{"id":"679f0dcc-a4c1-460e-a7e3-d7b927c3e44a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c3dd793c-8ac9-4984-9f0b-aa52cbe03812","type":"Circle"},"selection_glyph":null,"view":{"id":"7aa6487a-cc8b-4831-9b49-61346f1395e4","type":"CDSView"}},"id":"85b798e3-da15-4eed-b2da-e073d9c9be4d","type":"GlyphRenderer"},{"attributes":{},"id":"f4e9ae26-f215-4c9d-9a1d-25b64404dda5","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"268d578f-719e-4ded-a324-8cd50782f235","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"b76f5f0a-4279-4598-a46c-973c32e58d26","type":"Circle"},{"attributes":{"source":{"id":"051ba841-c23b-4c66-8f7f-acd9b8dad09e","type":"ColumnDataSource"}},"id":"bb22aae2-1b0b-4e7e-8cbc-30a237c0c878","type":"CDSView"},{"attributes":{"source":{"id":"b9737589-bfef-4641-82fa-85d9f296fffc","type":"ColumnDataSource"}},"id":"771cecf5-2f57-406f-8d68-39ba98339992","type":"CDSView"},{"attributes":{},"id":"f91a4300-d4a0-4151-8938-4c1965f635c9","type":"LinearScale"},{"attributes":{"source":{"id":"c635f6da-242b-462c-beb3-76d5b9b93481","type":"ColumnDataSource"}},"id":"6260843b-f17d-4fd0-a8f5-91c86e5d9d5f","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"c7cc4ba9-20d2-49c2-b7da-6f6f301af384","type":"Circle"},{"attributes":{"source":{"id":"249c77e7-88c7-475f-ac10-4fc9870395d1","type":"ColumnDataSource"}},"id":"ad893a8c-4870-4b0b-83db-b94f1d1696ec","type":"CDSView"},{"attributes":{"plot":null,"text":"Years vs mpg without jittering"},"id":"49d47fcf-2ea5-4944-8f52-dacdc9741554","type":"Title"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"5c11511c-7c05-4143-8736-210e70fd6362","type":"Circle"},{"attributes":{"range":null},"id":"0d38ad9d-e57e-432c-9f44-79a3624c460f","type":"Jitter"},{"attributes":{"data_source":{"id":"e7f506f1-2c1e-4a89-9a0e-0fbfd56971d8","type":"ColumnDataSource"},"glyph":{"id":"f9744065-d7c2-46b6-ab87-eebd82ebe9c4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23a53c7a-b09d-4b19-831c-5edffd3d68c7","type":"Circle"},"selection_glyph":null,"view":{"id":"b74562cc-feca-4ce8-9329-c3aaed3e6542","type":"CDSView"}},"id":"bf5e840f-bc44-490d-a38b-6479dfc31e21","type":"GlyphRenderer"},{"attributes":{},"id":"fdeb1a04-8c75-4a0f-b8d7-a0ceb878e708","type":"HelpTool"},{"attributes":{"source":{"id":"a7d5ccec-1ea6-40b8-8526-10fe3e4edb8d","type":"ColumnDataSource"}},"id":"7aa6487a-cc8b-4831-9b49-61346f1395e4","type":"CDSView"},{"attributes":{"source":{"id":"5348baff-c166-47d3-ae8f-a967a8473f5a","type":"ColumnDataSource"}},"id":"35dcf0cc-d324-4d08-b87c-2b1f2376576d","type":"CDSView"},{"attributes":{"source":{"id":"daa0a1e2-f066-4d6c-b95f-37b368de0e0c","type":"ColumnDataSource"}},"id":"6b8c8b3a-c56d-4233-9fc1-f82ebf95492c","type":"CDSView"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"0d38ad9d-e57e-432c-9f44-79a3624c460f","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"07d7e8ca-862a-4f11-8172-9e6ebfb7ba22","type":"Circle"},{"attributes":{"overlay":{"id":"0cfda457-e77c-46e9-9626-678c782abeb9","type":"BoxAnnotation"}},"id":"56797aae-519f-4553-a9df-5fc11ce0aacd","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"3ebee3b4-f1eb-4e25-a78a-8595f0e5a67c","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"be1c6d82-1820-40e4-aa34-ebe49456fdee","type":"Circle"},{"attributes":{"range":null},"id":"a73b074f-7bbe-470a-a700-727574598b1a","type":"Jitter"},{"attributes":{"plot":null,"text":"Years vs mpg with jittering"},"id":"bb561358-aa29-468a-a67a-112dccd5c2ce","type":"Title"},{"attributes":{"range":null},"id":"de25f908-9d0e-40c1-a82a-f8a14dd1935f","type":"Jitter"},{"attributes":{"callback":null},"id":"f73f30f4-e537-4942-9ac9-9389b80a352f","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"12ee9f2e-bbe0-4fc1-9864-759e619c79e2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4e9ae26-f215-4c9d-9a1d-25b64404dda5","type":"BasicTicker"}},"id":"f9594f48-4c1e-4f87-a08d-970acf0fe77e","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"de25f908-9d0e-40c1-a82a-f8a14dd1935f","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"1e0d201e-5841-4fa9-a359-122b76679ab1","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"249c77e7-88c7-475f-ac10-4fc9870395d1","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"3ebee3b4-f1eb-4e25-a78a-8595f0e5a67c","type":"Jitter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0cfda457-e77c-46e9-9626-678c782abeb9","type":"BoxAnnotation"},{"attributes":{"source":{"id":"4b420c46-be7e-424a-acac-584be91e7644","type":"ColumnDataSource"}},"id":"95aff048-d105-4de5-b8d8-2ba7784594ba","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"9157cac3-4fe1-407b-8b13-6b194e7f2c5f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9157cac3-4fe1-407b-8b13-6b194e7f2c5f","type":"ColumnDataSource"},"glyph":{"id":"a6836863-0ecd-4c87-845b-b7a6707991f0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f3c6b78c-2cc5-4705-9042-ee927f6053aa","type":"Circle"},"selection_glyph":null,"view":{"id":"ba290e47-c1d7-45de-9693-ea084662527b","type":"CDSView"}},"id":"8e497b9b-aa9d-4a27-b5d2-10cd0ef4e629","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"79722a08-eb53-4548-9941-9707442394d7","type":"BasicTickFormatter"},"plot":{"id":"846c1f38-ec29-422d-8dc6-d8ffa0b010d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfa5c339-63a3-4202-bf57-e44993da7305","type":"BasicTicker"}},"id":"a42a7b44-7fe8-4ee3-8821-ab94703f4859","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"b3333d7d-76a1-495d-9d72-c4df7a02fe53","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"332fa31b-5d01-4d89-8774-021d98415a46","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"d8fdf655-c16b-4e2b-a29a-565494eebba6","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"dc58f5a9-96c9-4bf2-850a-e062b0f73a81","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"cd56e4f6-f7ce-49f7-ad1a-b005f6c1d3ea","type":"Circle"},{"attributes":{"data_source":{"id":"989aee7c-dd60-4a37-93c7-4e4a60251b4c","type":"ColumnDataSource"},"glyph":{"id":"d76e8a39-1975-4005-bb8c-90aac33232b1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8a6703aa-1dac-48b2-b92d-d4fd4f4ce211","type":"Circle"},"selection_glyph":null,"view":{"id":"9d8b684d-0706-4d9e-9504-9bfda26ef6b7","type":"CDSView"}},"id":"556a1392-24cc-4fa4-afec-3618b2b11dd0","type":"GlyphRenderer"},{"attributes":{},"id":"243b5843-2e35-42f1-bde7-daa2cfb972f3","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"f3c6b78c-2cc5-4705-9042-ee927f6053aa","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"679f0dcc-a4c1-460e-a7e3-d7b927c3e44a","type":"Circle"},{"attributes":{},"id":"79722a08-eb53-4548-9941-9707442394d7","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"66e0c1c8-f6f9-4564-95e8-77ae1cba5630","type":"ColumnDataSource"}},"id":"c2a2a982-05e9-4020-a11f-60f421c93dac","type":"CDSView"},{"attributes":{},"id":"2d8300ce-a837-460b-9f29-9931f7fdd2ea","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"249c77e7-88c7-475f-ac10-4fc9870395d1","type":"ColumnDataSource"},"glyph":{"id":"b9d22b6d-3147-49d3-90c2-d054e882b0df","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d8fdf655-c16b-4e2b-a29a-565494eebba6","type":"Circle"},"selection_glyph":null,"view":{"id":"ad893a8c-4870-4b0b-83db-b94f1d1696ec","type":"CDSView"}},"id":"6ee2fc44-ac7a-4a31-837c-b6bf382b2714","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"dc58f5a9-96c9-4bf2-850a-e062b0f73a81","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"e03bd070-c607-40f9-abd6-d11638f46bc9","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"d5bb0db6-71a7-425b-81ce-ebd9e210e144","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"5c7aab9d-ce47-4dab-8cf6-92583c6e1875","type":"Circle"},{"attributes":{},"id":"f1a53ba9-ae8f-4c64-b797-1bb1b40953db","type":"BasicTicker"},{"attributes":{"callback":null},"id":"10a6ad30-810c-4737-820b-daae76f7d11f","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"261caf9c-d815-4902-8890-6d487b14ca5f","type":"PanTool"},{"id":"2d8300ce-a837-460b-9f29-9931f7fdd2ea","type":"WheelZoomTool"},{"id":"256baf1d-fa09-4660-a572-679b7724dc82","type":"BoxZoomTool"},{"id":"f0ca34b2-945c-4bd2-aadb-75e1768d3d30","type":"SaveTool"},{"id":"cf8a4c27-4fd4-411c-bae4-09b162e1f2d7","type":"ResetTool"},{"id":"fdeb1a04-8c75-4a0f-b8d7-a0ceb878e708","type":"HelpTool"}]},"id":"c4b071cc-739a-42c2-a52b-a1f6bd3b943f","type":"Toolbar"},{"attributes":{},"id":"cfa5c339-63a3-4202-bf57-e44993da7305","type":"BasicTicker"},{"attributes":{},"id":"0891028b-4d93-4018-8f40-80f0c738f749","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"21ba1616-42e6-415b-8d3d-c41970e166ed","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"d76e8a39-1975-4005-bb8c-90aac33232b1","type":"Circle"},{"attributes":{"data_source":{"id":"c635f6da-242b-462c-beb3-76d5b9b93481","type":"ColumnDataSource"},"glyph":{"id":"9ad742cc-cb82-4d80-9483-f90c47efd412","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4ebf1901-0794-4f71-b522-27f9766ebd87","type":"Circle"},"selection_glyph":null,"view":{"id":"6260843b-f17d-4fd0-a8f5-91c86e5d9d5f","type":"CDSView"}},"id":"13708c24-afe4-49b2-a5ab-2823d5a0ebcc","type":"GlyphRenderer"},{"attributes":{},"id":"3c2ae77e-20be-42a0-a872-82470eebb531","type":"PanTool"},{"attributes":{"source":{"id":"9ffba460-cdbd-4034-ab63-8fbdb2ba0eba","type":"ColumnDataSource"}},"id":"b9d8a566-f510-4122-a728-f6f43267bceb","type":"CDSView"},{"attributes":{"below":[{"id":"a42a7b44-7fe8-4ee3-8821-ab94703f4859","type":"LinearAxis"}],"left":[{"id":"b88cc695-3a23-4493-8de5-201ddbbe244f","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"a42a7b44-7fe8-4ee3-8821-ab94703f4859","type":"LinearAxis"},{"id":"5640babf-7e7a-4a46-85c1-49e5024e2330","type":"Grid"},{"id":"b88cc695-3a23-4493-8de5-201ddbbe244f","type":"LinearAxis"},{"id":"ad653147-e2b7-4107-921e-0cca4621bbdf","type":"Grid"},{"id":"0cfda457-e77c-46e9-9626-678c782abeb9","type":"BoxAnnotation"},{"id":"13708c24-afe4-49b2-a5ab-2823d5a0ebcc","type":"GlyphRenderer"},{"id":"8e497b9b-aa9d-4a27-b5d2-10cd0ef4e629","type":"GlyphRenderer"},{"id":"71550ef7-2b67-4f8f-b499-8b5f67f8e9b0","type":"GlyphRenderer"},{"id":"bf5e840f-bc44-490d-a38b-6479dfc31e21","type":"GlyphRenderer"},{"id":"85b798e3-da15-4eed-b2da-e073d9c9be4d","type":"GlyphRenderer"},{"id":"e6d756d9-e9b3-4e0c-b40b-db449557d719","type":"GlyphRenderer"},{"id":"1788b1bf-308b-4227-8698-ee805d5bef19","type":"GlyphRenderer"},{"id":"bf12392e-f3c4-4c71-891c-5d0abe267ba9","type":"GlyphRenderer"},{"id":"59d6fe81-983c-4efa-bfde-59bdc261a695","type":"GlyphRenderer"},{"id":"05279c1e-d7e2-42ea-96c3-adf0f9fc280d","type":"GlyphRenderer"},{"id":"cff6c68e-3950-4149-a58c-c074bd398707","type":"GlyphRenderer"},{"id":"cdd46df8-91b1-4282-9682-03e0d462b5f1","type":"GlyphRenderer"},{"id":"e09f61e7-b5a9-4e34-97a7-3a95462fe321","type":"GlyphRenderer"}],"title":{"id":"49d47fcf-2ea5-4944-8f52-dacdc9741554","type":"Title"},"toolbar":{"id":"8fb41c14-d439-4745-8484-bf851f4c2ab3","type":"Toolbar"},"x_range":{"id":"10a6ad30-810c-4737-820b-daae76f7d11f","type":"DataRange1d"},"x_scale":{"id":"f91a4300-d4a0-4151-8938-4c1965f635c9","type":"LinearScale"},"y_range":{"id":"f73f30f4-e537-4942-9ac9-9389b80a352f","type":"DataRange1d"},"y_scale":{"id":"13848dc4-3638-4617-ac4c-b47e3a314d76","type":"LinearScale"}},"id":"846c1f38-ec29-422d-8dc6-d8ffa0b010d7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cbd46cfc-90bf-4125-b096-8c72bffc08e9","type":"WheelZoomTool"},{"attributes":{},"id":"5bfca0e1-2d02-49db-908e-48b48903bb14","type":"HelpTool"},{"attributes":{"range":null},"id":"268d578f-719e-4ded-a324-8cd50782f235","type":"Jitter"},{"attributes":{"formatter":{"id":"0891028b-4d93-4018-8f40-80f0c738f749","type":"BasicTickFormatter"},"plot":{"id":"12ee9f2e-bbe0-4fc1-9864-759e619c79e2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4e9ae26-f215-4c9d-9a1d-25b64404dda5","type":"BasicTicker"}},"id":"fa43731b-cb05-4069-8b2c-5cb252228231","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"75392690-0f9f-4d2f-b1ff-f35ee7f992e0","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"f73475fa-7bfc-47e9-927a-226b65d07071","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"6d6a2922-0bf9-4c6c-9eff-49c2e26ecfaa","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"3ebc7e38-1aa9-41b6-862d-2a598682299f","type":"Circle"},{"attributes":{},"id":"2e07e55f-5ed7-469f-9fa2-0c697b3e0be1","type":"BasicTicker"},{"attributes":{"source":{"id":"accfa6db-deda-4738-804a-ae02e097097b","type":"ColumnDataSource"}},"id":"cafc8aef-83f5-47ae-89a4-2fba11ef6f52","type":"CDSView"},{"attributes":{"source":{"id":"77066def-58b4-42c4-a1a5-d34f0b071d12","type":"ColumnDataSource"}},"id":"ec6669ca-f665-41c6-939a-fd0595fe6be7","type":"CDSView"},{"attributes":{"formatter":{"id":"e85e0aad-c17b-4c17-9c30-4b282cf87dc7","type":"BasicTickFormatter"},"plot":{"id":"846c1f38-ec29-422d-8dc6-d8ffa0b010d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e07e55f-5ed7-469f-9fa2-0c697b3e0be1","type":"BasicTicker"}},"id":"b88cc695-3a23-4493-8de5-201ddbbe244f","type":"LinearAxis"},{"attributes":{"source":{"id":"b92589d9-2464-40b5-9f47-151d36ede806","type":"ColumnDataSource"}},"id":"0f1c9712-3035-47d4-ae6b-c1514ff08029","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"c19b2455-9389-4cae-8c0b-6dcb1ac818c3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"743e9ad9-aba1-4cc3-a8ac-307855526570","type":"ColumnDataSource"},{"attributes":{"source":{"id":"60ee0ab4-c80c-44ba-8785-503f5ea0e7a0","type":"ColumnDataSource"}},"id":"b879d52d-d4fa-4a98-ad84-668bb620e3f9","type":"CDSView"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"3bf0ef36-b64e-45dc-972d-21dee91a6f84","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"67afbf2c-6097-4390-8b7e-f85ebf98c060","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"6d6a2922-0bf9-4c6c-9eff-49c2e26ecfaa","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"f9af94eb-7ee8-43a7-bf4d-28701c902f60","type":"Circle"},{"attributes":{"data_source":{"id":"b92589d9-2464-40b5-9f47-151d36ede806","type":"ColumnDataSource"},"glyph":{"id":"a371db61-30eb-4004-9e2c-e99a660963ee","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a717147e-bba1-450a-8e59-91b2df3d43ff","type":"Circle"},"selection_glyph":null,"view":{"id":"0f1c9712-3035-47d4-ae6b-c1514ff08029","type":"CDSView"}},"id":"bf12392e-f3c4-4c71-891c-5d0abe267ba9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c19b2455-9389-4cae-8c0b-6dcb1ac818c3","type":"ColumnDataSource"},"glyph":{"id":"7468d488-9bc5-4206-9107-3cdbf0c89926","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b20f1779-5660-453f-aa32-56b3b68022c8","type":"Circle"},"selection_glyph":null,"view":{"id":"ef32b82b-7128-4aef-bdb3-d6083cca3a88","type":"CDSView"}},"id":"59d6fe81-983c-4efa-bfde-59bdc261a695","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"transform":{"id":"4c82de47-293b-41fb-8981-416c1c599ec9","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"5c5d0a88-b47e-4d29-af3a-53fcec14b33a","type":"Circle"},{"attributes":{"data_source":{"id":"60ee0ab4-c80c-44ba-8785-503f5ea0e7a0","type":"ColumnDataSource"},"glyph":{"id":"e647d55a-cb4f-40fa-a10f-0efaaf219f34","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c4ed54e9-146f-4573-841a-595b1c6eb720","type":"Circle"},"selection_glyph":null,"view":{"id":"b879d52d-d4fa-4a98-ad84-668bb620e3f9","type":"CDSView"}},"id":"5944f00d-1a57-43a2-9122-d6c5a96e303d","type":"GlyphRenderer"},{"attributes":{"range":null},"id":"6d6a2922-0bf9-4c6c-9eff-49c2e26ecfaa","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"4c82de47-293b-41fb-8981-416c1c599ec9","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"006d8c37-4961-40b0-b9fb-f02d8182ee64","type":"Circle"},{"attributes":{"range":null},"id":"89fdccfe-2d20-4a65-885d-0e659ad1a126","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"89fdccfe-2d20-4a65-885d-0e659ad1a126","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"c4ed54e9-146f-4573-841a-595b1c6eb720","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"846c1f38-ec29-422d-8dc6-d8ffa0b010d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e07e55f-5ed7-469f-9fa2-0c697b3e0be1","type":"BasicTicker"}},"id":"ad653147-e2b7-4107-921e-0cca4621bbdf","type":"Grid"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"7468d488-9bc5-4206-9107-3cdbf0c89926","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"2930496c-f82b-4436-8c3f-a81c4239d423","type":"Circle"},{"attributes":{"below":[{"id":"d2cf2b55-782f-4fc6-9c0c-220e7c38f40e","type":"LinearAxis"}],"left":[{"id":"fa43731b-cb05-4069-8b2c-5cb252228231","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"d2cf2b55-782f-4fc6-9c0c-220e7c38f40e","type":"LinearAxis"},{"id":"590bfe02-f0ed-4999-b2f7-e526b4894a8c","type":"Grid"},{"id":"fa43731b-cb05-4069-8b2c-5cb252228231","type":"LinearAxis"},{"id":"f9594f48-4c1e-4f87-a08d-970acf0fe77e","type":"Grid"},{"id":"4aa3e904-c2f3-4577-90c6-e679d6fd76b3","type":"BoxAnnotation"},{"id":"6ee2fc44-ac7a-4a31-837c-b6bf382b2714","type":"GlyphRenderer"},{"id":"112d7923-51ca-4dcf-8a50-8aee6dc9f7ba","type":"GlyphRenderer"},{"id":"6c68c8e5-2d13-4e21-bf96-ae475886a5ba","type":"GlyphRenderer"},{"id":"5b00a1a8-e977-4f2c-b5ac-6e342885e8a0","type":"GlyphRenderer"},{"id":"556a1392-24cc-4fa4-afec-3618b2b11dd0","type":"GlyphRenderer"},{"id":"fe114c9b-d91a-4310-ad83-b89191074836","type":"GlyphRenderer"},{"id":"5a914f3f-07a2-4652-b835-90924fedfbb0","type":"GlyphRenderer"},{"id":"5944f00d-1a57-43a2-9122-d6c5a96e303d","type":"GlyphRenderer"},{"id":"dbc7003e-61d7-45c7-9768-a8ab44de5de5","type":"GlyphRenderer"},{"id":"3fb0f8ba-cc87-48aa-b9b9-492cde9f3dcc","type":"GlyphRenderer"},{"id":"fc0a75de-7100-4226-b9d8-a104a8cf8cf8","type":"GlyphRenderer"},{"id":"967aa7b5-e608-4207-91ef-98b588f94746","type":"GlyphRenderer"},{"id":"cd3bc722-34fb-4493-828c-a7c185b0f066","type":"GlyphRenderer"}],"title":{"id":"bb561358-aa29-468a-a67a-112dccd5c2ce","type":"Title"},"toolbar":{"id":"c4b071cc-739a-42c2-a52b-a1f6bd3b943f","type":"Toolbar"},"x_range":{"id":"4ecdc4cf-8242-44a2-81fe-646356c3c325","type":"DataRange1d"},"x_scale":{"id":"ed3b85bb-a366-4ac5-b7e9-ab12c9b73c49","type":"LinearScale"},"y_range":{"id":"e96d88d3-843a-45de-9e07-1bb11c099289","type":"DataRange1d"},"y_scale":{"id":"c823d1c4-5ec8-4a32-a9f7-7e03b71d231f","type":"LinearScale"}},"id":"12ee9f2e-bbe0-4fc1-9864-759e619c79e2","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"a371db61-30eb-4004-9e2c-e99a660963ee","type":"Circle"},{"attributes":{"data_source":{"id":"743e9ad9-aba1-4cc3-a8ac-307855526570","type":"ColumnDataSource"},"glyph":{"id":"67afbf2c-6097-4390-8b7e-f85ebf98c060","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9cf3356-30d7-446c-b6b2-40532feb7f48","type":"Circle"},"selection_glyph":null,"view":{"id":"38288aa2-cf6e-42ef-a2a7-26f4fd0c3f4c","type":"CDSView"}},"id":"dbc7003e-61d7-45c7-9768-a8ab44de5de5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"accfa6db-deda-4738-804a-ae02e097097b","type":"ColumnDataSource"},"glyph":{"id":"f9af94eb-7ee8-43a7-bf4d-28701c902f60","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3ebc7e38-1aa9-41b6-862d-2a598682299f","type":"Circle"},"selection_glyph":null,"view":{"id":"cafc8aef-83f5-47ae-89a4-2fba11ef6f52","type":"CDSView"}},"id":"3fb0f8ba-cc87-48aa-b9b9-492cde9f3dcc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"a717147e-bba1-450a-8e59-91b2df3d43ff","type":"Circle"},{"attributes":{"source":{"id":"c19b2455-9389-4cae-8c0b-6dcb1ac818c3","type":"ColumnDataSource"}},"id":"ef32b82b-7128-4aef-bdb3-d6083cca3a88","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"b20f1779-5660-453f-aa32-56b3b68022c8","type":"Circle"},{"attributes":{"data_source":{"id":"9097d45a-7c78-4382-bba6-b6f72900ce0e","type":"ColumnDataSource"},"glyph":{"id":"5c5d0a88-b47e-4d29-af3a-53fcec14b33a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"006d8c37-4961-40b0-b9fb-f02d8182ee64","type":"Circle"},"selection_glyph":null,"view":{"id":"e79a5fa9-2e29-4f4e-88ad-439384679dae","type":"CDSView"}},"id":"5a914f3f-07a2-4652-b835-90924fedfbb0","type":"GlyphRenderer"},{"attributes":{"source":{"id":"743e9ad9-aba1-4cc3-a8ac-307855526570","type":"ColumnDataSource"}},"id":"38288aa2-cf6e-42ef-a2a7-26f4fd0c3f4c","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"874bbf3c-1c74-402e-a2c6-dd34a58ef054","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"765e2b84-bda0-410f-bf8d-d862f7dd292c","type":"Circle"},{"attributes":{"source":{"id":"874bbf3c-1c74-402e-a2c6-dd34a58ef054","type":"ColumnDataSource"}},"id":"8c62ba44-897c-4f0e-915f-7d58816c7dde","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"accfa6db-deda-4738-804a-ae02e097097b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"77066def-58b4-42c4-a1a5-d34f0b071d12","type":"ColumnDataSource"},"glyph":{"id":"2930496c-f82b-4436-8c3f-a81c4239d423","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"765e2b84-bda0-410f-bf8d-d862f7dd292c","type":"Circle"},"selection_glyph":null,"view":{"id":"ec6669ca-f665-41c6-939a-fd0595fe6be7","type":"CDSView"}},"id":"05279c1e-d7e2-42ea-96c3-adf0f9fc280d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"77066def-58b4-42c4-a1a5-d34f0b071d12","type":"ColumnDataSource"},{"attributes":{"source":{"id":"cf455e3e-b267-47fe-a135-4f6afc0868e5","type":"ColumnDataSource"}},"id":"6fb617c2-4e54-4b79-ac4f-6ad7ae52cb74","type":"CDSView"},{"attributes":{"range":null},"id":"3bf0ef36-b64e-45dc-972d-21dee91a6f84","type":"Jitter"},{"attributes":{"data_source":{"id":"cf455e3e-b267-47fe-a135-4f6afc0868e5","type":"ColumnDataSource"},"glyph":{"id":"f73475fa-7bfc-47e9-927a-226b65d07071","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"720de1f9-061b-42e9-9f17-7716f13c3112","type":"Circle"},"selection_glyph":null,"view":{"id":"6fb617c2-4e54-4b79-ac4f-6ad7ae52cb74","type":"CDSView"}},"id":"cff6c68e-3950-4149-a58c-c074bd398707","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"75392690-0f9f-4d2f-b1ff-f35ee7f992e0","type":"ColumnDataSource"},"glyph":{"id":"3372d645-be32-4456-8f17-43f6c74ee578","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eabe2634-0414-4bc5-a835-0c9b2cfda739","type":"Circle"},"selection_glyph":null,"view":{"id":"e845bf11-0a71-413f-81fe-f5a0753a5487","type":"CDSView"}},"id":"fe114c9b-d91a-4310-ad83-b89191074836","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"89fdccfe-2d20-4a65-885d-0e659ad1a126","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"e647d55a-cb4f-40fa-a10f-0efaaf219f34","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"9097d45a-7c78-4382-bba6-b6f72900ce0e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"3bf0ef36-b64e-45dc-972d-21dee91a6f84","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"b9cf3356-30d7-446c-b6b2-40532feb7f48","type":"Circle"},{"attributes":{"source":{"id":"9097d45a-7c78-4382-bba6-b6f72900ce0e","type":"ColumnDataSource"}},"id":"e79a5fa9-2e29-4f4e-88ad-439384679dae","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"b92589d9-2464-40b5-9f47-151d36ede806","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"4c82de47-293b-41fb-8981-416c1c599ec9","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"720de1f9-061b-42e9-9f17-7716f13c3112","type":"Circle"},{"attributes":{"source":{"id":"75392690-0f9f-4d2f-b1ff-f35ee7f992e0","type":"ColumnDataSource"}},"id":"e845bf11-0a71-413f-81fe-f5a0753a5487","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"cf455e3e-b267-47fe-a135-4f6afc0868e5","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"a73b074f-7bbe-470a-a700-727574598b1a","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"eabe2634-0414-4bc5-a835-0c9b2cfda739","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"60ee0ab4-c80c-44ba-8785-503f5ea0e7a0","type":"ColumnDataSource"}],"root_ids":["5d293ac7-ff1d-433d-9024-bcfeb67707f9"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"020afd21-a578-45a4-a721-6853340af213","elementid":"93344ac6-bbcf-44e0-bdcb-82fbe24593ba","modelid":"5d293ac7-ff1d-433d-9024-bcfeb67707f9"}];
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