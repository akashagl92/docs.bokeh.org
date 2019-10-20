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
      };var element = document.getElementById("09992685-ff4d-440f-ab65-5e3a8a9fbf89");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '09992685-ff4d-440f-ab65-5e3a8a9fbf89' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                "DrawTool": require("custom/bk_script_4fe1a953f37e440bafdcb3330a4881eb.draw_tool").DrawTool,
          "MyFormatter": require("custom/bk_script_536909578ebd4dd59dc108ec1a737cb4.my_formatter").MyFormatter,
          "Custom": require("custom/bk_script_70142c597e884531a4514c3c604a86cc.custom").Custom,
          "Surface3d": require("custom/bk_script_9331c4d2a2fa432ba11140b0ec446e88.surface3d").Surface3d,
          "LatexLabel": require("custom/bk_script_da3193bc49874d5cb629b293ffd9b45e.latex_label").LatexLabel,
          "IonRangeSlider": require("custom/bk_script_dcecbfa28a734a4dba3108d34a44fd8d.ion_range_slider").IonRangeSlider
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_4fe1a953f37e440bafdcb3330a4881eb.draw_tool": function(require, module, exports) {
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
                  (sx = e.sx, sy = e.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
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
          "custom/bk_script_536909578ebd4dd59dc108ec1a737cb4.my_formatter": function(require, module, exports) {
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
          "custom/bk_script_70142c597e884531a4514c3c604a86cc.custom": function(require, module, exports) {
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
          "custom/bk_script_9331c4d2a2fa432ba11140b0ec446e88.surface3d": function(require, module, exports) {
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
          // or into the DOM, we must create a View subclass for the model.
          // In this case we will subclass from the existing BokehJS ``LayoutDOMView``
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
                  // BokehJS Views create <div> elements by default, accessible as @el. Many
                  // Bokeh views ignore this default <div>, and instead do things like draw
                  // to the HTML canvas. In this case though, we use the <div> to attach a
                  // Graph3d to the DOM.
                  this._graph = new vis.Graph3d(this.el, this.get_data(), OPTIONS);
                  // Set a listener so that when the Bokeh data source has a change
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
                          z: source.get_column(this.model.z)[i]
                      });
                  }
                  return data;
              };
              return Surface3dView;
          }(layout_dom_1.LayoutDOMView));
          exports.Surface3d = (function () {
              // We must also create a corresponding JavaScript BokehJS model subclass to
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
                  data_source: [p.Instance]
              });
              return Surface3d;
          })();
    
          },
          "custom/bk_script_da3193bc49874d5cb629b293ffd9b45e.latex_label": function(require, module, exports) {
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
          "custom/bk_script_dcecbfa28a734a4dba3108d34a44fd8d.ion_range_slider": function(require, module, exports) {
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
                  var disable, from, grid, inp, max, min, opts, range, slider, step, to;
                  // BokehJS Views create <div> elements by default, accessible as @$el.
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
                  inp = this.$el.find('.slider')[0];
                  slider = jQuery(inp).ionRangeSlider(opts);
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
                    
                  var docs_json = '{"aba63896-d20d-4638-bf90-17d63873b4fa":{"roots":{"references":[{"attributes":{"callback":null},"id":"3b28b9fa-0397-4bd7-b546-c542bebd90ab","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"069641eb-97d3-422b-8a09-8750e66e8ca7","type":"PanTool"},{"id":"ad8d8841-eddc-462f-a2db-bc194afc1966","type":"WheelZoomTool"},{"id":"2f889b20-dbb5-4fbc-a10f-7feaf2ac0f55","type":"BoxZoomTool"},{"id":"378c67ae-ff6a-4c84-b3ee-112134977c68","type":"SaveTool"},{"id":"601497f9-44be-49b2-ace2-a70312f6956f","type":"ResetTool"},{"id":"d401002c-5813-4ee3-b62a-eec34328ffa5","type":"HelpTool"}]},"id":"5174f69e-d829-47b3-bfb6-2a01b2fc97bd","type":"Toolbar"},{"attributes":{"below":[{"id":"fa1f6e49-e238-40c3-be56-a12222e3ee6e","type":"LinearAxis"}],"left":[{"id":"843a8ea1-9e8c-42f4-821f-05e4681a3747","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fa1f6e49-e238-40c3-be56-a12222e3ee6e","type":"LinearAxis"},{"id":"0c242e89-2612-46c7-a995-2c6bdf3f99dc","type":"Grid"},{"id":"843a8ea1-9e8c-42f4-821f-05e4681a3747","type":"LinearAxis"},{"id":"d8de2f3d-222c-48f8-aeba-b47ec2223203","type":"Grid"},{"id":"cf61551a-6c78-4416-990e-11c644565f10","type":"BoxAnnotation"},{"id":"f306771f-51e2-4c5e-93c0-c5eefae803c7","type":"GlyphRenderer"}],"title":{"id":"c1b7d566-8c2e-48a8-9868-2f163719698a","type":"Title"},"toolbar":{"id":"85220376-e343-4a4c-86c8-2b9d9752e032","type":"Toolbar"},"x_range":{"id":"f2d466d8-504b-4bd4-841e-909c06edddeb","type":"DataRange1d"},"x_scale":{"id":"903e57aa-074c-4bc0-98f6-c8143d05cb5b","type":"LinearScale"},"y_range":{"id":"05731ea5-a747-488b-963b-8a4fac26deea","type":"DataRange1d"},"y_scale":{"id":"3636abc0-d7a6-4f3d-8c63-3de674a04c32","type":"LinearScale"}},"id":"24a48ff7-57cc-4375-ba85-78c335f01368","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"00014242-c539-4e5b-a19d-d8ac104cca35","type":"BasicTickFormatter"},{"attributes":{},"id":"4a10e639-01b2-4506-b8fe-4aee6aeeeb3e","type":"WheelZoomTool"},{"attributes":{},"id":"23437bee-1c9f-44d9-bafc-e7526d43112e","type":"Selection"},{"attributes":{},"id":"d401002c-5813-4ee3-b62a-eec34328ffa5","type":"HelpTool"},{"attributes":{},"id":"a762b805-dcf3-4044-8437-2366dc2a181e","type":"SaveTool"},{"attributes":{"below":[{"id":"ec70b45d-9e7b-4b66-b053-9f5a59e35434","type":"LinearAxis"}],"left":[{"id":"426c42bc-1499-42d6-957c-72de62d8dca9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ec70b45d-9e7b-4b66-b053-9f5a59e35434","type":"LinearAxis"},{"id":"dbe89938-70b0-4d4e-b9f1-d43c5fa5dcfe","type":"Grid"},{"id":"426c42bc-1499-42d6-957c-72de62d8dca9","type":"LinearAxis"},{"id":"d6151447-9581-4226-937e-8def60e4d3f1","type":"Grid"},{"id":"866f8bf2-e03b-4b56-b032-18b6941d714c","type":"BoxAnnotation"},{"id":"1552c687-5a83-4d48-bfc5-0c27307f3feb","type":"GlyphRenderer"}],"title":{"id":"d2fd51c4-e30b-4f78-bd74-abf031bec0a4","type":"Title"},"toolbar":{"id":"5174f69e-d829-47b3-bfb6-2a01b2fc97bd","type":"Toolbar"},"x_range":{"id":"9fe195ba-728b-4673-935e-20f67a0fdadd","type":"DataRange1d"},"x_scale":{"id":"e3df9d2b-2e39-40bf-86b1-6789b61999d9","type":"LinearScale"},"y_range":{"id":"3b28b9fa-0397-4bd7-b546-c542bebd90ab","type":"DataRange1d"},"y_scale":{"id":"07dd3fba-51df-4619-af63-b349ffef0eb2","type":"LinearScale"}},"id":"8d33019d-5a77-4511-a3f7-c50addaa0c23","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"tabs":[{"id":"8db8eee0-62a5-49ab-b137-21ca9013191c","type":"Panel"},{"id":"250d2d24-b028-4050-9ef3-bc5302059a62","type":"Panel"}]},"id":"d128190b-fe1d-47db-90b8-b038322ac652","type":"Tabs"},{"attributes":{},"id":"044c7937-bec3-40ea-af45-b9e839ec9103","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"d2fd51c4-e30b-4f78-bd74-abf031bec0a4","type":"Title"},{"attributes":{},"id":"af77ec6f-97b7-4c7b-b2e6-1d70b8adc0c7","type":"UnionRenderers"},{"attributes":{},"id":"e95419f4-79dc-445c-ac0d-470b58a96e92","type":"BasicTickFormatter"},{"attributes":{},"id":"601497f9-44be-49b2-ace2-a70312f6956f","type":"ResetTool"},{"attributes":{},"id":"597cebcd-a04e-47d7-910c-b67dc7f2e453","type":"ResetTool"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"7e6c62c0-5773-43dc-a8b1-2344402b0c35","type":"Line"},{"attributes":{},"id":"a3ca3c2b-823c-431b-a57a-d8cdd6ca8843","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"c1b7d566-8c2e-48a8-9868-2f163719698a","type":"Title"},{"attributes":{},"id":"903e57aa-074c-4bc0-98f6-c8143d05cb5b","type":"LinearScale"},{"attributes":{"overlay":{"id":"cf61551a-6c78-4416-990e-11c644565f10","type":"BoxAnnotation"}},"id":"76b42631-3bb1-472f-9ee6-b888b6bdd001","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"2e39f240-4bea-456f-96ba-1f28a7729024","type":"ColumnDataSource"},"glyph":{"id":"7e6c62c0-5773-43dc-a8b1-2344402b0c35","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58245b75-9cfa-4b4c-86f4-c9dcbf062b02","type":"Line"},"selection_glyph":null,"view":{"id":"a267a71f-39f9-4319-bb52-be277e69ffa9","type":"CDSView"}},"id":"1552c687-5a83-4d48-bfc5-0c27307f3feb","type":"GlyphRenderer"},{"attributes":{"child":{"id":"24a48ff7-57cc-4375-ba85-78c335f01368","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"8db8eee0-62a5-49ab-b137-21ca9013191c","type":"Panel"},{"attributes":{},"id":"069641eb-97d3-422b-8a09-8750e66e8ca7","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"96ef694c-9976-4d4c-88a9-5c6a289bb813","type":"Circle"},{"attributes":{"plot":{"id":"8d33019d-5a77-4511-a3f7-c50addaa0c23","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3a4037a-3e08-4316-b2d5-2b1b59886043","type":"BasicTicker"}},"id":"dbe89938-70b0-4d4e-b9f1-d43c5fa5dcfe","type":"Grid"},{"attributes":{"callback":null},"id":"05731ea5-a747-488b-963b-8a4fac26deea","type":"DataRange1d"},{"attributes":{},"id":"6cbc1f47-c260-4511-b576-b5f68d8481de","type":"PanTool"},{"attributes":{},"id":"d3a4037a-3e08-4316-b2d5-2b1b59886043","type":"BasicTicker"},{"attributes":{},"id":"d1f9e4de-bb76-433c-be71-9934f0c44d91","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"a3ca3c2b-823c-431b-a57a-d8cdd6ca8843","type":"Selection"},"selection_policy":{"id":"af77ec6f-97b7-4c7b-b2e6-1d70b8adc0c7","type":"UnionRenderers"}},"id":"2e39f240-4bea-456f-96ba-1f28a7729024","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8169aeca-6bbe-45db-80be-9ca0c54a4efe","type":"BasicTickFormatter"},"plot":{"id":"8d33019d-5a77-4511-a3f7-c50addaa0c23","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3a4037a-3e08-4316-b2d5-2b1b59886043","type":"BasicTicker"}},"id":"ec70b45d-9e7b-4b66-b053-9f5a59e35434","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9fe195ba-728b-4673-935e-20f67a0fdadd","type":"DataRange1d"},{"attributes":{},"id":"07dd3fba-51df-4619-af63-b349ffef0eb2","type":"LinearScale"},{"attributes":{},"id":"3636abc0-d7a6-4f3d-8c63-3de674a04c32","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"8d33019d-5a77-4511-a3f7-c50addaa0c23","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1f9e4de-bb76-433c-be71-9934f0c44d91","type":"BasicTicker"}},"id":"d6151447-9581-4226-937e-8def60e4d3f1","type":"Grid"},{"attributes":{},"id":"8169aeca-6bbe-45db-80be-9ca0c54a4efe","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e95419f4-79dc-445c-ac0d-470b58a96e92","type":"BasicTickFormatter"},"plot":{"id":"24a48ff7-57cc-4375-ba85-78c335f01368","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1b267df-6fcc-4cac-809f-0a7525dcdc54","type":"BasicTicker"}},"id":"fa1f6e49-e238-40c3-be56-a12222e3ee6e","type":"LinearAxis"},{"attributes":{"formatter":{"id":"00014242-c539-4e5b-a19d-d8ac104cca35","type":"BasicTickFormatter"},"plot":{"id":"8d33019d-5a77-4511-a3f7-c50addaa0c23","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1f9e4de-bb76-433c-be71-9934f0c44d91","type":"BasicTicker"}},"id":"426c42bc-1499-42d6-957c-72de62d8dca9","type":"LinearAxis"},{"attributes":{},"id":"49425698-1254-488f-ae03-9936cbf73031","type":"HelpTool"},{"attributes":{},"id":"e3df9d2b-2e39-40bf-86b1-6789b61999d9","type":"LinearScale"},{"attributes":{},"id":"378c67ae-ff6a-4c84-b3ee-112134977c68","type":"SaveTool"},{"attributes":{},"id":"02600511-9deb-469d-bacd-feb814950eb9","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"24a48ff7-57cc-4375-ba85-78c335f01368","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d550866-2aad-419f-9722-bf3facdc73f9","type":"BasicTicker"}},"id":"d8de2f3d-222c-48f8-aeba-b47ec2223203","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6cbc1f47-c260-4511-b576-b5f68d8481de","type":"PanTool"},{"id":"4a10e639-01b2-4506-b8fe-4aee6aeeeb3e","type":"WheelZoomTool"},{"id":"76b42631-3bb1-472f-9ee6-b888b6bdd001","type":"BoxZoomTool"},{"id":"a762b805-dcf3-4044-8437-2366dc2a181e","type":"SaveTool"},{"id":"597cebcd-a04e-47d7-910c-b67dc7f2e453","type":"ResetTool"},{"id":"49425698-1254-488f-ae03-9936cbf73031","type":"HelpTool"}]},"id":"85220376-e343-4a4c-86c8-2b9d9752e032","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"843d0f2c-c9b6-476e-ae87-30236e12f995","type":"Circle"},{"attributes":{},"id":"ad8d8841-eddc-462f-a2db-bc194afc1966","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"58245b75-9cfa-4b4c-86f4-c9dcbf062b02","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf61551a-6c78-4416-990e-11c644565f10","type":"BoxAnnotation"},{"attributes":{},"id":"a1b267df-6fcc-4cac-809f-0a7525dcdc54","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f2d466d8-504b-4bd4-841e-909c06edddeb","type":"DataRange1d"},{"attributes":{"formatter":{"id":"044c7937-bec3-40ea-af45-b9e839ec9103","type":"BasicTickFormatter"},"plot":{"id":"24a48ff7-57cc-4375-ba85-78c335f01368","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d550866-2aad-419f-9722-bf3facdc73f9","type":"BasicTicker"}},"id":"843a8ea1-9e8c-42f4-821f-05e4681a3747","type":"LinearAxis"},{"attributes":{"overlay":{"id":"866f8bf2-e03b-4b56-b032-18b6941d714c","type":"BoxAnnotation"}},"id":"2f889b20-dbb5-4fbc-a10f-7feaf2ac0f55","type":"BoxZoomTool"},{"attributes":{},"id":"5d550866-2aad-419f-9722-bf3facdc73f9","type":"BasicTicker"},{"attributes":{"source":{"id":"2e39f240-4bea-456f-96ba-1f28a7729024","type":"ColumnDataSource"}},"id":"a267a71f-39f9-4319-bb52-be277e69ffa9","type":"CDSView"},{"attributes":{"source":{"id":"82de0313-f004-4ab3-aa69-d7257b5920b7","type":"ColumnDataSource"}},"id":"088b088e-1e29-42e1-8178-f54e26217853","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"23437bee-1c9f-44d9-bafc-e7526d43112e","type":"Selection"},"selection_policy":{"id":"02600511-9deb-469d-bacd-feb814950eb9","type":"UnionRenderers"}},"id":"82de0313-f004-4ab3-aa69-d7257b5920b7","type":"ColumnDataSource"},{"attributes":{"child":{"id":"8d33019d-5a77-4511-a3f7-c50addaa0c23","subtype":"Figure","type":"Plot"},"title":"line"},"id":"250d2d24-b028-4050-9ef3-bc5302059a62","type":"Panel"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"866f8bf2-e03b-4b56-b032-18b6941d714c","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"82de0313-f004-4ab3-aa69-d7257b5920b7","type":"ColumnDataSource"},"glyph":{"id":"843d0f2c-c9b6-476e-ae87-30236e12f995","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96ef694c-9976-4d4c-88a9-5c6a289bb813","type":"Circle"},"selection_glyph":null,"view":{"id":"088b088e-1e29-42e1-8178-f54e26217853","type":"CDSView"}},"id":"f306771f-51e2-4c5e-93c0-c5eefae803c7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"24a48ff7-57cc-4375-ba85-78c335f01368","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1b267df-6fcc-4cac-809f-0a7525dcdc54","type":"BasicTicker"}},"id":"0c242e89-2612-46c7-a995-2c6bdf3f99dc","type":"Grid"}],"root_ids":["d128190b-fe1d-47db-90b8-b038322ac652"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"aba63896-d20d-4638-bf90-17d63873b4fa","elementid":"09992685-ff4d-440f-ab65-5e3a8a9fbf89","modelid":"d128190b-fe1d-47db-90b8-b038322ac652"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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