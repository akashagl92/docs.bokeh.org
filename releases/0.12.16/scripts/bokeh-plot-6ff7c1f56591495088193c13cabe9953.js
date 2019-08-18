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
      };var element = document.getElementById("e50c1211-48a4-4464-9938-2c058e9888cd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e50c1211-48a4-4464-9938-2c058e9888cd' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8bead1a5-5900-427b-b20f-df164df1755a":{"roots":{"references":[{"attributes":{"below":[{"id":"74f642b7-c3a4-4d49-9b6b-eb2694774a93","type":"LinearAxis"}],"left":[{"id":"ab1d0e69-1bca-4688-b2f0-f0b46c911688","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"74f642b7-c3a4-4d49-9b6b-eb2694774a93","type":"LinearAxis"},{"id":"6a289dc2-d369-4aa7-9dee-3c6c3cfe70c4","type":"Grid"},{"id":"ab1d0e69-1bca-4688-b2f0-f0b46c911688","type":"LinearAxis"},{"id":"3d1bb980-f070-4bb5-a85e-3756e807f1d3","type":"Grid"},{"id":"a6ecba8f-6148-497e-bbd0-ec021ed1d707","type":"BoxAnnotation"},{"id":"dd94e4cc-af9f-4d15-86d4-1786dda7eb45","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"1ce25677-a6f3-4fb2-a8bd-b2a0594cdcce","type":"Toolbar"},"x_range":{"id":"e4f6eac8-1ff9-4081-bba2-af5c6edbe11f","type":"DataRange1d"},"x_scale":{"id":"f0e8a81d-41ce-4395-9487-226d508157eb","type":"LinearScale"},"y_range":{"id":"25d58186-5671-4c99-9876-2047fa9ad939","type":"DataRange1d"},"y_scale":{"id":"09e3379d-3ca7-47ca-bad3-42e76fc99857","type":"LinearScale"}},"id":"95ca1502-29f9-4d70-95ee-52e48ae29376","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7c4a3372-1376-4622-9b2e-fc4e7de1d3e7","type":"BasicTickFormatter"},"plot":{"id":"712bbdc1-6ce2-4420-8398-758d3caf02ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e32257c-c7c2-4e2a-bc71-8929a7656870","type":"BasicTicker"}},"id":"e4b73daf-1d85-4653-a126-1a7b0fa6386d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"548f0b43-da71-4ef2-a4b0-4aa79884df37","type":"ColumnDataSource"},"glyph":{"id":"2f826251-4451-44a4-a8b4-df40901fcbae","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c557f7bc-9724-4945-8ce8-568dbf7afdde","type":"Square"},"selection_glyph":null,"view":{"id":"e812badf-0878-4962-ba01-6eaca63746f0","type":"CDSView"}},"id":"dd94e4cc-af9f-4d15-86d4-1786dda7eb45","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f826251-4451-44a4-a8b4-df40901fcbae","type":"Square"},{"attributes":{},"id":"10e18586-0b72-4194-862b-edabdcbfd8b2","type":"SaveTool"},{"attributes":{},"id":"29dc64c7-eb04-479d-81e0-eccc585c2b69","type":"BasicTicker"},{"attributes":{"formatter":{"id":"60c8f4be-247d-4967-97f7-02df450db04e","type":"BasicTickFormatter"},"plot":{"id":"94465f9a-0d3e-4bce-ad3a-b22ffb405238","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a9439f3-f3d3-471b-844c-025a0288e7c7","type":"BasicTicker"}},"id":"080d31a9-a8ff-4e1f-87ab-a80039fca8aa","type":"LinearAxis"},{"attributes":{"formatter":{"id":"baff5010-cb49-4a83-905c-d3cf9af36a46","type":"BasicTickFormatter"},"plot":{"id":"95ca1502-29f9-4d70-95ee-52e48ae29376","subtype":"Figure","type":"Plot"},"ticker":{"id":"29dc64c7-eb04-479d-81e0-eccc585c2b69","type":"BasicTicker"}},"id":"ab1d0e69-1bca-4688-b2f0-f0b46c911688","type":"LinearAxis"},{"attributes":{"overlay":{"id":"a6ecba8f-6148-497e-bbd0-ec021ed1d707","type":"BoxAnnotation"}},"id":"5a135c74-b09a-4376-9d67-4ed396cf80ff","type":"BoxZoomTool"},{"attributes":{},"id":"cda46a95-d61b-4b35-b1c3-3bda51abb7e8","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"66be1a3d-6960-4e71-ad89-807d08456ea1","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a6ecba8f-6148-497e-bbd0-ec021ed1d707","type":"BoxAnnotation"},{"attributes":{},"id":"7c4a3372-1376-4622-9b2e-fc4e7de1d3e7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"95ca1502-29f9-4d70-95ee-52e48ae29376","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0853136-76cd-4f3d-bc42-2c51f76946e5","type":"BasicTicker"}},"id":"6a289dc2-d369-4aa7-9dee-3c6c3cfe70c4","type":"Grid"},{"attributes":{},"id":"de3d2bc6-3c54-46c9-a0a5-8ec68718eb8f","type":"PanTool"},{"attributes":{},"id":"baff5010-cb49-4a83-905c-d3cf9af36a46","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"712bbdc1-6ce2-4420-8398-758d3caf02ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e32257c-c7c2-4e2a-bc71-8929a7656870","type":"BasicTicker"}},"id":"073deeb1-c8eb-40d1-bb82-c4e1660b9de0","type":"Grid"},{"attributes":{},"id":"4a9439f3-f3d3-471b-844c-025a0288e7c7","type":"BasicTicker"},{"attributes":{},"id":"e54d713e-7ef5-46cf-9750-fd91d7172785","type":"SaveTool"},{"attributes":{"callback":null},"id":"25d58186-5671-4c99-9876-2047fa9ad939","type":"DataRange1d"},{"attributes":{},"id":"fe44b7af-0245-4707-943f-e0f022ff0b5c","type":"LinearScale"},{"attributes":{},"id":"f3846d98-0fa4-4e60-aa2b-1feb14a06914","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e324199-2cec-42f5-8e20-bd417fa7d68f","type":"Triangle"},{"attributes":{"below":[{"id":"d4ba76d9-7fc2-4d47-8df9-0e61f21f096d","type":"LinearAxis"}],"left":[{"id":"e4b73daf-1d85-4653-a126-1a7b0fa6386d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d4ba76d9-7fc2-4d47-8df9-0e61f21f096d","type":"LinearAxis"},{"id":"90fef36c-1d5b-4ff7-a0cd-7bff9694db63","type":"Grid"},{"id":"e4b73daf-1d85-4653-a126-1a7b0fa6386d","type":"LinearAxis"},{"id":"073deeb1-c8eb-40d1-bb82-c4e1660b9de0","type":"Grid"},{"id":"66be1a3d-6960-4e71-ad89-807d08456ea1","type":"BoxAnnotation"},{"id":"c7f4fee5-88d1-441f-9062-f18a7f27fd96","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"567847b7-b33f-47c7-9de5-7da7da1e9047","type":"Toolbar"},"x_range":{"id":"351681be-44b7-4642-a349-83677f873214","type":"DataRange1d"},"x_scale":{"id":"fe44b7af-0245-4707-943f-e0f022ff0b5c","type":"LinearScale"},"y_range":{"id":"82ae9df4-d294-4a8a-bde0-3ac8da944b3f","type":"DataRange1d"},"y_scale":{"id":"2a944789-35b6-417a-aed9-ef7695661e0f","type":"LinearScale"}},"id":"712bbdc1-6ce2-4420-8398-758d3caf02ee","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f0e8a81d-41ce-4395-9487-226d508157eb","type":"LinearScale"},{"attributes":{},"id":"6555332a-a31e-47e4-82cc-e52bcb269267","type":"UnionRenderers"},{"attributes":{},"id":"ddd10c78-0207-4eb2-bc3f-b3eb32382c34","type":"HelpTool"},{"attributes":{},"id":"de1f4c5f-d7c9-4d17-988e-11d641da40a2","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"94465f9a-0d3e-4bce-ad3a-b22ffb405238","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a9439f3-f3d3-471b-844c-025a0288e7c7","type":"BasicTicker"}},"id":"6d70b910-f412-4ef9-83cc-d9e49a38d767","type":"Grid"},{"attributes":{"overlay":{"id":"66be1a3d-6960-4e71-ad89-807d08456ea1","type":"BoxAnnotation"}},"id":"abc684c6-8b15-4b41-a261-3b17bf3964e8","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"82ae9df4-d294-4a8a-bde0-3ac8da944b3f","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ae04441e-eeb2-48af-87ac-2a70f41c6c2b","type":"ColumnDataSource"},"glyph":{"id":"bab5c79e-dc4e-401c-8356-edb7de4b6b08","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9008ec52-6af8-4145-954a-5a617960067c","type":"Circle"},"selection_glyph":null,"view":{"id":"87584580-f7e9-42b2-a5bc-a1a719c70e8d","type":"CDSView"}},"id":"a409c0ae-b31c-401e-9ca7-f813d4e17234","type":"GlyphRenderer"},{"attributes":{},"id":"b84fe97f-015b-4523-9797-191f81efce3f","type":"ResetTool"},{"attributes":{},"id":"2a944789-35b6-417a-aed9-ef7695661e0f","type":"LinearScale"},{"attributes":{"source":{"id":"548f0b43-da71-4ef2-a4b0-4aa79884df37","type":"ColumnDataSource"}},"id":"e812badf-0878-4962-ba01-6eaca63746f0","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"95ca1502-29f9-4d70-95ee-52e48ae29376","subtype":"Figure","type":"Plot"},"ticker":{"id":"29dc64c7-eb04-479d-81e0-eccc585c2b69","type":"BasicTicker"}},"id":"3d1bb980-f070-4bb5-a85e-3756e807f1d3","type":"Grid"},{"attributes":{},"id":"df9be5dd-5b1b-4910-b0c3-a2ce65032432","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7376230-96e5-4274-b1b7-40ce9c1ad559","type":"Triangle"},{"attributes":{"callback":null},"id":"351681be-44b7-4642-a349-83677f873214","type":"DataRange1d"},{"attributes":{},"id":"abb0b5a2-65fc-4f0d-8209-4d888c922b2d","type":"ResetTool"},{"attributes":{"callback":null},"id":"024b4a56-c113-47e4-a6c7-e9ee4008f58d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0e0a6182-cac5-4983-afa3-f673c260a7f3","type":"BasicTickFormatter"},"plot":{"id":"95ca1502-29f9-4d70-95ee-52e48ae29376","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0853136-76cd-4f3d-bc42-2c51f76946e5","type":"BasicTicker"}},"id":"74f642b7-c3a4-4d49-9b6b-eb2694774a93","type":"LinearAxis"},{"attributes":{},"id":"f22625db-ec4b-450f-873b-ab26f1403a0d","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9008ec52-6af8-4145-954a-5a617960067c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c557f7bc-9724-4945-8ce8-568dbf7afdde","type":"Square"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"de1f4c5f-d7c9-4d17-988e-11d641da40a2","type":"Selection"},"selection_policy":{"id":"f3846d98-0fa4-4e60-aa2b-1feb14a06914","type":"UnionRenderers"}},"id":"548f0b43-da71-4ef2-a4b0-4aa79884df37","type":"ColumnDataSource"},{"attributes":{},"id":"05028387-175b-4113-8559-e2bc12da8b2c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7ba29a23-dc63-4920-86e7-d8be8cf44769","type":"ColumnDataSource"},"glyph":{"id":"3e324199-2cec-42f5-8e20-bd417fa7d68f","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f7376230-96e5-4274-b1b7-40ce9c1ad559","type":"Triangle"},"selection_glyph":null,"view":{"id":"d45d21be-bb18-43c2-ad30-cfd1992e6477","type":"CDSView"}},"id":"c7f4fee5-88d1-441f-9062-f18a7f27fd96","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"94465f9a-0d3e-4bce-ad3a-b22ffb405238","subtype":"Figure","type":"Plot"},{"id":"712bbdc1-6ce2-4420-8398-758d3caf02ee","subtype":"Figure","type":"Plot"},{"id":"95ca1502-29f9-4d70-95ee-52e48ae29376","subtype":"Figure","type":"Plot"}]},"id":"f973f640-d37d-44fe-a177-6bc42e9d6d80","type":"Column"},{"attributes":{"plot":{"id":"712bbdc1-6ce2-4420-8398-758d3caf02ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5291408-5782-47c6-baca-ffa2c3527746","type":"BasicTicker"}},"id":"90fef36c-1d5b-4ff7-a0cd-7bff9694db63","type":"Grid"},{"attributes":{},"id":"8e31b99e-9ebb-40ee-bf22-3b19b3c2399e","type":"ResetTool"},{"attributes":{},"id":"314b07b8-b7c5-42bf-bc32-cef8198a2091","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"cda46a95-d61b-4b35-b1c3-3bda51abb7e8","type":"Selection"},"selection_policy":{"id":"6555332a-a31e-47e4-82cc-e52bcb269267","type":"UnionRenderers"}},"id":"7ba29a23-dc63-4920-86e7-d8be8cf44769","type":"ColumnDataSource"},{"attributes":{},"id":"94af7b0f-6e56-42bc-a16a-bd0a262aa123","type":"PanTool"},{"attributes":{},"id":"574a0374-8170-42b5-a3ae-5f8af1e1f4dc","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d258b005-c1bc-4a7f-99b5-51ca89eacbfd","type":"BoxAnnotation"},{"attributes":{},"id":"2a5e0a4e-346d-470f-b544-424b97fff89d","type":"UnionRenderers"},{"attributes":{},"id":"9288d1cb-d4fc-4015-ad1d-fc5ad631593f","type":"WheelZoomTool"},{"attributes":{},"id":"415e8922-efe5-4dd0-b1ab-25f2bb796498","type":"Selection"},{"attributes":{"source":{"id":"7ba29a23-dc63-4920-86e7-d8be8cf44769","type":"ColumnDataSource"}},"id":"d45d21be-bb18-43c2-ad30-cfd1992e6477","type":"CDSView"},{"attributes":{"formatter":{"id":"05028387-175b-4113-8559-e2bc12da8b2c","type":"BasicTickFormatter"},"plot":{"id":"712bbdc1-6ce2-4420-8398-758d3caf02ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5291408-5782-47c6-baca-ffa2c3527746","type":"BasicTicker"}},"id":"d4ba76d9-7fc2-4d47-8df9-0e61f21f096d","type":"LinearAxis"},{"attributes":{"source":{"id":"ae04441e-eeb2-48af-87ac-2a70f41c6c2b","type":"ColumnDataSource"}},"id":"87584580-f7e9-42b2-a5bc-a1a719c70e8d","type":"CDSView"},{"attributes":{},"id":"4e32257c-c7c2-4e2a-bc71-8929a7656870","type":"BasicTicker"},{"attributes":{},"id":"be5645f7-4312-46c4-8ec2-b849bd84ba63","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a3aacae1-b7e7-44ab-8727-a1aba42209b5","type":"LinearAxis"}],"left":[{"id":"080d31a9-a8ff-4e1f-87ab-a80039fca8aa","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a3aacae1-b7e7-44ab-8727-a1aba42209b5","type":"LinearAxis"},{"id":"e55f92a7-8a57-48c3-87c6-6892b365b5d0","type":"Grid"},{"id":"080d31a9-a8ff-4e1f-87ab-a80039fca8aa","type":"LinearAxis"},{"id":"6d70b910-f412-4ef9-83cc-d9e49a38d767","type":"Grid"},{"id":"d258b005-c1bc-4a7f-99b5-51ca89eacbfd","type":"BoxAnnotation"},{"id":"a409c0ae-b31c-401e-9ca7-f813d4e17234","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7c5dc3b0-1d40-433e-9138-6ab8b2f8ef4f","type":"Toolbar"},"x_range":{"id":"42b86db2-9c1e-4269-8837-5779e1388d96","type":"DataRange1d"},"x_scale":{"id":"5f6ad1dc-bb16-4dce-ad09-a079efcb6e5f","type":"LinearScale"},"y_range":{"id":"024b4a56-c113-47e4-a6c7-e9ee4008f58d","type":"DataRange1d"},"y_scale":{"id":"95ff8501-3612-4d90-8d64-6a5864025a5f","type":"LinearScale"}},"id":"94465f9a-0d3e-4bce-ad3a-b22ffb405238","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e0853136-76cd-4f3d-bc42-2c51f76946e5","type":"BasicTicker"},{"attributes":{},"id":"60c8f4be-247d-4967-97f7-02df450db04e","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"de3d2bc6-3c54-46c9-a0a5-8ec68718eb8f","type":"PanTool"},{"id":"314b07b8-b7c5-42bf-bc32-cef8198a2091","type":"WheelZoomTool"},{"id":"abc684c6-8b15-4b41-a261-3b17bf3964e8","type":"BoxZoomTool"},{"id":"df9be5dd-5b1b-4910-b0c3-a2ce65032432","type":"SaveTool"},{"id":"abb0b5a2-65fc-4f0d-8209-4d888c922b2d","type":"ResetTool"},{"id":"ddd10c78-0207-4eb2-bc3f-b3eb32382c34","type":"HelpTool"}]},"id":"567847b7-b33f-47c7-9de5-7da7da1e9047","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"574a0374-8170-42b5-a3ae-5f8af1e1f4dc","type":"PanTool"},{"id":"9288d1cb-d4fc-4015-ad1d-fc5ad631593f","type":"WheelZoomTool"},{"id":"5a135c74-b09a-4376-9d67-4ed396cf80ff","type":"BoxZoomTool"},{"id":"10e18586-0b72-4194-862b-edabdcbfd8b2","type":"SaveTool"},{"id":"b84fe97f-015b-4523-9797-191f81efce3f","type":"ResetTool"},{"id":"63162860-5bfb-47ce-9324-723e6a26e5f3","type":"HelpTool"}]},"id":"1ce25677-a6f3-4fb2-a8bd-b2a0594cdcce","type":"Toolbar"},{"attributes":{"overlay":{"id":"d258b005-c1bc-4a7f-99b5-51ca89eacbfd","type":"BoxAnnotation"}},"id":"1b864271-5591-464d-a2fc-ab8a7f800573","type":"BoxZoomTool"},{"attributes":{},"id":"63162860-5bfb-47ce-9324-723e6a26e5f3","type":"HelpTool"},{"attributes":{},"id":"b5291408-5782-47c6-baca-ffa2c3527746","type":"BasicTicker"},{"attributes":{"formatter":{"id":"be5645f7-4312-46c4-8ec2-b849bd84ba63","type":"BasicTickFormatter"},"plot":{"id":"94465f9a-0d3e-4bce-ad3a-b22ffb405238","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f14d5bf-d303-493b-806f-cf75ca6bc5a4","type":"BasicTicker"}},"id":"a3aacae1-b7e7-44ab-8727-a1aba42209b5","type":"LinearAxis"},{"attributes":{},"id":"95ff8501-3612-4d90-8d64-6a5864025a5f","type":"LinearScale"},{"attributes":{"plot":{"id":"94465f9a-0d3e-4bce-ad3a-b22ffb405238","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f14d5bf-d303-493b-806f-cf75ca6bc5a4","type":"BasicTicker"}},"id":"e55f92a7-8a57-48c3-87c6-6892b365b5d0","type":"Grid"},{"attributes":{},"id":"09e3379d-3ca7-47ca-bad3-42e76fc99857","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"94af7b0f-6e56-42bc-a16a-bd0a262aa123","type":"PanTool"},{"id":"fa4d7861-640f-4f90-be8b-a30ff79c9689","type":"WheelZoomTool"},{"id":"1b864271-5591-464d-a2fc-ab8a7f800573","type":"BoxZoomTool"},{"id":"e54d713e-7ef5-46cf-9750-fd91d7172785","type":"SaveTool"},{"id":"8e31b99e-9ebb-40ee-bf22-3b19b3c2399e","type":"ResetTool"},{"id":"f22625db-ec4b-450f-873b-ab26f1403a0d","type":"HelpTool"}]},"id":"7c5dc3b0-1d40-433e-9138-6ab8b2f8ef4f","type":"Toolbar"},{"attributes":{},"id":"0e0a6182-cac5-4983-afa3-f673c260a7f3","type":"BasicTickFormatter"},{"attributes":{},"id":"9f14d5bf-d303-493b-806f-cf75ca6bc5a4","type":"BasicTicker"},{"attributes":{},"id":"fa4d7861-640f-4f90-be8b-a30ff79c9689","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"415e8922-efe5-4dd0-b1ab-25f2bb796498","type":"Selection"},"selection_policy":{"id":"2a5e0a4e-346d-470f-b544-424b97fff89d","type":"UnionRenderers"}},"id":"ae04441e-eeb2-48af-87ac-2a70f41c6c2b","type":"ColumnDataSource"},{"attributes":{},"id":"5f6ad1dc-bb16-4dce-ad09-a079efcb6e5f","type":"LinearScale"},{"attributes":{"callback":null},"id":"e4f6eac8-1ff9-4081-bba2-af5c6edbe11f","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bab5c79e-dc4e-401c-8356-edb7de4b6b08","type":"Circle"},{"attributes":{"callback":null},"id":"42b86db2-9c1e-4269-8837-5779e1388d96","type":"DataRange1d"}],"root_ids":["f973f640-d37d-44fe-a177-6bc42e9d6d80"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"8bead1a5-5900-427b-b20f-df164df1755a","elementid":"e50c1211-48a4-4464-9938-2c058e9888cd","modelid":"f973f640-d37d-44fe-a177-6bc42e9d6d80"}];
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