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
      };var element = document.getElementById("b94d8354-550e-481d-8429-1da4d3ddcc7a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b94d8354-550e-481d-8429-1da4d3ddcc7a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cc06e6f8-8551-4bb9-bc36-001125f8d54f":{"roots":{"references":[{"attributes":{"formatter":{"id":"2b2695a6-5d46-4e6b-bf07-d763de057fee","type":"BasicTickFormatter"},"plot":{"id":"bae9bdec-fd54-4734-97b7-3d2d4bca76ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"eefe9449-d227-42c0-a973-ab00321f8873","type":"BasicTicker"}},"id":"2aa1de93-c909-45fa-9d6f-323d9ea59d40","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1,2,2,5,1,2,1,2,1,2,4,6,5,7,2,1,6,5,14,10,5,4,3,4,1,1,1,2,7,6,9,12,8,8,2,3,1,2,5,5,2,18,14,14,4,2,1,1,3,4,6,11,10,7,12,7,3,1,1,1,1,5,4,12,13,8,5,7,2,2,2,3,4,4,14,12,10,11,4,3,1,1,1,4,4,6,5,4,2,2,1,3,1,1,3,3,2,1,1,1,1,2,2,2,2,1,2,3,1,2,1],"q":[-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,10,12],"r":[-4,-1,-3,-2,2,-6,-4,-3,-2,-1,1,2,3,4,6,-6,-5,-3,-2,-1,0,1,2,3,-3,-2,-1,0,1,2,3,-4,-3,-2,-1,0,1,2,3,4,-9,-8,-7,-5,-4,-3,-2,-1,0,1,3,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,2,3,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-11,-9,-8,-6,-5,-3,-2,-1,0,-12,-11,-7,-6,-5,-4,-3,-7,-6,-4,-2,-5]},"selected":{"id":"173bb1c1-a63a-4901-893d-40545f5892a4","type":"Selection"},"selection_policy":{"id":"d807d6f6-56a0-4a14-bdfe-ae1b4828312f","type":"UnionRenderers"}},"id":"f43ed1de-ad52-44ad-a03e-f9111fa20743","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"512f118e-2037-4c89-a5a6-9f87800c922e","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3cff052-5d2f-4822-ae68-0b39b6a5e2ae","type":"Circle"},{"attributes":{"formatter":{"id":"706502dc-f816-4b38-9eb0-e99d90147a57","type":"BasicTickFormatter"},"plot":{"id":"bae9bdec-fd54-4734-97b7-3d2d4bca76ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"e624a0d8-924d-4a9a-bb0e-b9cce42b57c4","type":"BasicTicker"}},"id":"6d2e7b80-8500-4b2f-8a74-447371f29320","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Hexbin for 500 points"},"id":"87f9130b-8d49-41de-9285-0b180d56fe3d","type":"Title"},{"attributes":{},"id":"173bb1c1-a63a-4901-893d-40545f5892a4","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"919fad73-b64b-49f1-937f-f6bf74c52dab","type":"HexTile"},{"attributes":{},"id":"2b2695a6-5d46-4e6b-bf07-d763de057fee","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"bae9bdec-fd54-4734-97b7-3d2d4bca76ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"e624a0d8-924d-4a9a-bb0e-b9cce42b57c4","type":"BasicTicker"},"visible":false},"id":"abbe3fb6-285e-46e1-beb6-27ad4358c94e","type":"Grid"},{"attributes":{},"id":"2d1b1da5-ac92-4e85-808f-19a876bf7962","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"867b7953-e186-4409-a3ec-17ba293e00ad","type":"ColumnDataSource"},"glyph":{"id":"b77dfab3-3663-4354-9567-6972e7f0332a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c3cff052-5d2f-4822-ae68-0b39b6a5e2ae","type":"Circle"},"selection_glyph":null,"view":{"id":"5da06c37-74a5-4f1d-8281-4b6d6d9d2669","type":"CDSView"}},"id":"c92014c2-433e-4eff-81eb-3042af01c763","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2d1b1da5-ac92-4e85-808f-19a876bf7962","type":"WheelZoomTool"},{"id":"16f7004f-8d74-403f-8b7d-0f5c32b93017","type":"ResetTool"},{"id":"37365256-0fc7-4d4e-9f8e-d4d755a09caf","type":"HoverTool"}]},"id":"55dc7999-c07c-407a-82e7-035540969466","type":"Toolbar"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"e0b9d79c-0dac-4023-99ad-27b0030c3c4a","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"45c0dcb2-3fa5-46bb-81e4-1067884fbfea","type":"HexTile"},{"attributes":{"high":18,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"e0b9d79c-0dac-4023-99ad-27b0030c3c4a","type":"LinearColorMapper"},{"attributes":{"callback":null},"id":"f321b03f-192d-42fd-8aad-59fdfa680354","type":"DataRange1d"},{"attributes":{"data_source":{"id":"f43ed1de-ad52-44ad-a03e-f9111fa20743","type":"ColumnDataSource"},"glyph":{"id":"45c0dcb2-3fa5-46bb-81e4-1067884fbfea","type":"HexTile"},"hover_glyph":{"id":"fd2c74cc-1e54-4b13-8c52-3e1c5fbd283a","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"919fad73-b64b-49f1-937f-f6bf74c52dab","type":"HexTile"},"selection_glyph":null,"view":{"id":"139f780a-6ad6-4325-9d65-15f4b93f23bd","type":"CDSView"}},"id":"3d4dd4f7-ef58-4eff-a60d-8f1d72f9fa4c","type":"GlyphRenderer"},{"attributes":{},"id":"9ad8cac5-2be6-4963-b212-e921c94a7fbc","type":"LinearScale"},{"attributes":{},"id":"7887feac-c12d-4ff4-837a-bf41a79dd5a9","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"7662d2ef-f4c1-4d07-83c7-f5ff4cfff0e6","type":"Selection"},"selection_policy":{"id":"70d44172-787a-42d5-a63d-c90386eef713","type":"UnionRenderers"}},"id":"867b7953-e186-4409-a3ec-17ba293e00ad","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"b77dfab3-3663-4354-9567-6972e7f0332a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"fd2c74cc-1e54-4b13-8c52-3e1c5fbd283a","type":"HexTile"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"2aa1de93-c909-45fa-9d6f-323d9ea59d40","type":"LinearAxis"}],"left":[{"id":"6d2e7b80-8500-4b2f-8a74-447371f29320","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"2aa1de93-c909-45fa-9d6f-323d9ea59d40","type":"LinearAxis"},{"id":"584f6088-c7d3-46d4-ab41-240d99379eb5","type":"Grid"},{"id":"6d2e7b80-8500-4b2f-8a74-447371f29320","type":"LinearAxis"},{"id":"abbe3fb6-285e-46e1-beb6-27ad4358c94e","type":"Grid"},{"id":"3d4dd4f7-ef58-4eff-a60d-8f1d72f9fa4c","type":"GlyphRenderer"},{"id":"c92014c2-433e-4eff-81eb-3042af01c763","type":"GlyphRenderer"}],"title":{"id":"87f9130b-8d49-41de-9285-0b180d56fe3d","type":"Title"},"toolbar":{"id":"55dc7999-c07c-407a-82e7-035540969466","type":"Toolbar"},"x_range":{"id":"512f118e-2037-4c89-a5a6-9f87800c922e","type":"DataRange1d"},"x_scale":{"id":"9ad8cac5-2be6-4963-b212-e921c94a7fbc","type":"LinearScale"},"y_range":{"id":"f321b03f-192d-42fd-8aad-59fdfa680354","type":"DataRange1d"},"y_scale":{"id":"7887feac-c12d-4ff4-837a-bf41a79dd5a9","type":"LinearScale"}},"id":"bae9bdec-fd54-4734-97b7-3d2d4bca76ba","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"eefe9449-d227-42c0-a973-ab00321f8873","type":"BasicTicker"},{"attributes":{"plot":{"id":"bae9bdec-fd54-4734-97b7-3d2d4bca76ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"eefe9449-d227-42c0-a973-ab00321f8873","type":"BasicTicker"},"visible":false},"id":"584f6088-c7d3-46d4-ab41-240d99379eb5","type":"Grid"},{"attributes":{},"id":"d807d6f6-56a0-4a14-bdfe-ae1b4828312f","type":"UnionRenderers"},{"attributes":{"source":{"id":"f43ed1de-ad52-44ad-a03e-f9111fa20743","type":"ColumnDataSource"}},"id":"139f780a-6ad6-4325-9d65-15f4b93f23bd","type":"CDSView"},{"attributes":{},"id":"16f7004f-8d74-403f-8b7d-0f5c32b93017","type":"ResetTool"},{"attributes":{},"id":"70d44172-787a-42d5-a63d-c90386eef713","type":"UnionRenderers"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"3d4dd4f7-ef58-4eff-a60d-8f1d72f9fa4c","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"37365256-0fc7-4d4e-9f8e-d4d755a09caf","type":"HoverTool"},{"attributes":{},"id":"7662d2ef-f4c1-4d07-83c7-f5ff4cfff0e6","type":"Selection"},{"attributes":{"source":{"id":"867b7953-e186-4409-a3ec-17ba293e00ad","type":"ColumnDataSource"}},"id":"5da06c37-74a5-4f1d-8281-4b6d6d9d2669","type":"CDSView"},{"attributes":{},"id":"706502dc-f816-4b38-9eb0-e99d90147a57","type":"BasicTickFormatter"},{"attributes":{},"id":"e624a0d8-924d-4a9a-bb0e-b9cce42b57c4","type":"BasicTicker"}],"root_ids":["bae9bdec-fd54-4734-97b7-3d2d4bca76ba"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"cc06e6f8-8551-4bb9-bc36-001125f8d54f","elementid":"b94d8354-550e-481d-8429-1da4d3ddcc7a","modelid":"bae9bdec-fd54-4734-97b7-3d2d4bca76ba"}];
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