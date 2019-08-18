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
      };var element = document.getElementById("121a7861-7beb-4d95-967d-c0fa1cbe72dd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '121a7861-7beb-4d95-967d-c0fa1cbe72dd' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"39dec08f-5cb4-4785-8ff2-0fbeda269746":{"roots":{"references":[{"attributes":{"below":[{"id":"78522f57-d393-4e5d-b000-843434a70e2a","type":"LinearAxis"}],"left":[{"id":"21407c42-eb65-47da-be1a-d41788ef50e6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"78522f57-d393-4e5d-b000-843434a70e2a","type":"LinearAxis"},{"id":"0c13c8c0-e3fd-47ba-ab10-d6baa7bd98f5","type":"Grid"},{"id":"21407c42-eb65-47da-be1a-d41788ef50e6","type":"LinearAxis"},{"id":"2ca895ee-d0f4-4998-b58e-fa3ae7b84ae8","type":"Grid"},{"id":"aab5caf3-8eb8-4792-97d3-193233ccd8ad","type":"BoxAnnotation"},{"id":"7641d98e-1b3f-4bf7-96d8-c6345a52a169","type":"GlyphRenderer"}],"title":{"id":"bfee5767-4d35-46a0-a973-b276d36994e3","type":"Title"},"toolbar":{"id":"ad5ca88f-44ee-4b3c-ab38-4250a0107510","type":"Toolbar"},"x_range":{"id":"066d9ea4-8883-488e-b865-ef182bb979fd","type":"DataRange1d"},"x_scale":{"id":"1ab6e8ea-987c-4190-9540-12864cb8733f","type":"LinearScale"},"y_range":{"id":"51d6eda2-df00-4ea3-9ccf-308c7df08532","type":"DataRange1d"},"y_scale":{"id":"51f191a8-e59d-4b2e-869d-a9d9d6fc73d0","type":"LinearScale"}},"id":"1185ba84-0337-4a9c-b6a4-c4e96f84b89b","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"ec781e68-6dd5-4004-8bb1-9c8b57fb24f6","type":"BoxAnnotation"}},"id":"403de1e6-66f9-4a26-933c-74058f96e0c1","type":"BoxZoomTool"},{"attributes":{},"id":"4aeffb2c-6d24-4d71-8d87-f286f9312dc4","type":"HelpTool"},{"attributes":{"source":{"id":"b37bf4ff-9e62-48f2-89b1-f9945cea9842","type":"ColumnDataSource"}},"id":"04c077ee-293b-4909-98c7-7f04611049cc","type":"CDSView"},{"attributes":{},"id":"71330048-c5ee-411d-86ee-c4962430c5a3","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1185ba84-0337-4a9c-b6a4-c4e96f84b89b","subtype":"Figure","type":"Plot"},"ticker":{"id":"71dfc429-896f-4c39-8bd7-ca2fd67f935f","type":"BasicTicker"}},"id":"2ca895ee-d0f4-4998-b58e-fa3ae7b84ae8","type":"Grid"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"52dd26b0-d44f-43b6-8e43-d16e09e8dcc2","type":"Line"},{"attributes":{"callback":null,"tabs":[{"id":"099be600-442f-48b5-9da8-faca9fb75daa","type":"Panel"},{"id":"6bfa9aae-6232-4358-aa8e-c1c4307f63b3","type":"Panel"}]},"id":"857c2f8d-a50c-4e79-ad0a-23365ab26f1f","type":"Tabs"},{"attributes":{"plot":null,"text":""},"id":"bfee5767-4d35-46a0-a973-b276d36994e3","type":"Title"},{"attributes":{},"id":"23298553-282b-418c-9e0a-56d22256b24a","type":"UnionRenderers"},{"attributes":{"below":[{"id":"9d716048-5de6-446d-9583-21609b8d934f","type":"LinearAxis"}],"left":[{"id":"6b3cd14f-aa3e-4578-a204-ddbd83bf5ff0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9d716048-5de6-446d-9583-21609b8d934f","type":"LinearAxis"},{"id":"fb41e407-bed7-4573-a467-5e8fb7e3be91","type":"Grid"},{"id":"6b3cd14f-aa3e-4578-a204-ddbd83bf5ff0","type":"LinearAxis"},{"id":"3e4d7143-7879-465d-a6c9-ff5cb7c516e8","type":"Grid"},{"id":"ec781e68-6dd5-4004-8bb1-9c8b57fb24f6","type":"BoxAnnotation"},{"id":"b16661ae-b084-4aff-bc55-b38d201d44b7","type":"GlyphRenderer"}],"title":{"id":"ad8c2849-e6e6-4471-9497-53a439cca22e","type":"Title"},"toolbar":{"id":"b11f0390-9f3d-43ca-953b-c41cf6920e4d","type":"Toolbar"},"x_range":{"id":"51cdf2d0-44ed-4c2d-95c3-16ac831a2055","type":"DataRange1d"},"x_scale":{"id":"d35473b4-bea1-47c5-a976-debfc4b6c0e6","type":"LinearScale"},"y_range":{"id":"fc3da142-8d0c-412c-b3f0-a9cb11a2550a","type":"DataRange1d"},"y_scale":{"id":"616df8a9-3cd9-425c-b974-013c5f589fa0","type":"LinearScale"}},"id":"5702a9a2-f169-45f7-8337-d5a1c25e3130","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"1185ba84-0337-4a9c-b6a4-c4e96f84b89b","subtype":"Figure","type":"Plot"},"ticker":{"id":"402367a8-ae9e-4646-a0d0-780e90f2dd7c","type":"BasicTicker"}},"id":"0c13c8c0-e3fd-47ba-ab10-d6baa7bd98f5","type":"Grid"},{"attributes":{"callback":null},"id":"51cdf2d0-44ed-4c2d-95c3-16ac831a2055","type":"DataRange1d"},{"attributes":{},"id":"402367a8-ae9e-4646-a0d0-780e90f2dd7c","type":"BasicTicker"},{"attributes":{},"id":"735b44d9-d3b4-4837-b035-47649c98451c","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f9be1cb2-4b42-433b-8a15-08215eb67ad2","type":"PanTool"},{"id":"4b343e71-1c89-447a-b809-ba46df05ce27","type":"WheelZoomTool"},{"id":"ed030eef-c79e-4b1d-940b-4712743ce8f9","type":"BoxZoomTool"},{"id":"71bfb9cc-589f-408e-bda9-e724fcec4d8f","type":"SaveTool"},{"id":"65cd2ed4-8795-4f96-b56e-679cf05693c9","type":"ResetTool"},{"id":"4aeffb2c-6d24-4d71-8d87-f286f9312dc4","type":"HelpTool"}]},"id":"ad5ca88f-44ee-4b3c-ab38-4250a0107510","type":"Toolbar"},{"attributes":{},"id":"0608c67b-7344-4c63-a7be-c01ecc32198b","type":"UnionRenderers"},{"attributes":{},"id":"71bfb9cc-589f-408e-bda9-e724fcec4d8f","type":"SaveTool"},{"attributes":{"formatter":{"id":"0ddf0be3-e313-48b1-af99-3d95a4ce313a","type":"BasicTickFormatter"},"plot":{"id":"5702a9a2-f169-45f7-8337-d5a1c25e3130","subtype":"Figure","type":"Plot"},"ticker":{"id":"71330048-c5ee-411d-86ee-c4962430c5a3","type":"BasicTicker"}},"id":"9d716048-5de6-446d-9583-21609b8d934f","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"68f724bb-eb62-4011-8577-eeb3ad8fc74c","type":"Selection"},"selection_policy":{"id":"0608c67b-7344-4c63-a7be-c01ecc32198b","type":"UnionRenderers"}},"id":"dc62d2b5-e1cf-4476-a450-665a21c15f6e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"983d5acb-7902-48ae-9d08-540eba202f37","type":"Circle"},{"attributes":{"data_source":{"id":"b37bf4ff-9e62-48f2-89b1-f9945cea9842","type":"ColumnDataSource"},"glyph":{"id":"983d5acb-7902-48ae-9d08-540eba202f37","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0b993bfc-8e53-4676-b7a3-22a06eb512af","type":"Circle"},"selection_glyph":null,"view":{"id":"04c077ee-293b-4909-98c7-7f04611049cc","type":"CDSView"}},"id":"7641d98e-1b3f-4bf7-96d8-c6345a52a169","type":"GlyphRenderer"},{"attributes":{},"id":"1efd8777-66a6-470f-b387-117f6f5f67f3","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec781e68-6dd5-4004-8bb1-9c8b57fb24f6","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"5702a9a2-f169-45f7-8337-d5a1c25e3130","subtype":"Figure","type":"Plot"},"ticker":{"id":"1efd8777-66a6-470f-b387-117f6f5f67f3","type":"BasicTicker"}},"id":"3e4d7143-7879-465d-a6c9-ff5cb7c516e8","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"131c3dde-39df-4419-93d4-cfe78b4b1aef","type":"PanTool"},{"id":"07fc88eb-5ce8-4c3a-be78-e7978d8443d5","type":"WheelZoomTool"},{"id":"403de1e6-66f9-4a26-933c-74058f96e0c1","type":"BoxZoomTool"},{"id":"735b44d9-d3b4-4837-b035-47649c98451c","type":"SaveTool"},{"id":"76501905-5fa0-4985-bc6a-e258d538da35","type":"ResetTool"},{"id":"b8a5bb92-5d9e-4e7d-8ce4-07376114260b","type":"HelpTool"}]},"id":"b11f0390-9f3d-43ca-953b-c41cf6920e4d","type":"Toolbar"},{"attributes":{},"id":"4fff2a8c-aa57-4645-830a-e4a0bbb7e1f5","type":"BasicTickFormatter"},{"attributes":{},"id":"75eea4a8-5692-4c6d-9017-8be307ee60cb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"782a253c-bb01-4f1b-8d5a-9c73e0ec726b","type":"Selection"},"selection_policy":{"id":"23298553-282b-418c-9e0a-56d22256b24a","type":"UnionRenderers"}},"id":"b37bf4ff-9e62-48f2-89b1-f9945cea9842","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b993bfc-8e53-4676-b7a3-22a06eb512af","type":"Circle"},{"attributes":{},"id":"76501905-5fa0-4985-bc6a-e258d538da35","type":"ResetTool"},{"attributes":{"formatter":{"id":"bb4e5a83-aa1f-4fbd-954d-bb23385db3b3","type":"BasicTickFormatter"},"plot":{"id":"5702a9a2-f169-45f7-8337-d5a1c25e3130","subtype":"Figure","type":"Plot"},"ticker":{"id":"1efd8777-66a6-470f-b387-117f6f5f67f3","type":"BasicTicker"}},"id":"6b3cd14f-aa3e-4578-a204-ddbd83bf5ff0","type":"LinearAxis"},{"attributes":{},"id":"782a253c-bb01-4f1b-8d5a-9c73e0ec726b","type":"Selection"},{"attributes":{},"id":"51f191a8-e59d-4b2e-869d-a9d9d6fc73d0","type":"LinearScale"},{"attributes":{},"id":"1ab6e8ea-987c-4190-9540-12864cb8733f","type":"LinearScale"},{"attributes":{"callback":null},"id":"066d9ea4-8883-488e-b865-ef182bb979fd","type":"DataRange1d"},{"attributes":{"plot":{"id":"5702a9a2-f169-45f7-8337-d5a1c25e3130","subtype":"Figure","type":"Plot"},"ticker":{"id":"71330048-c5ee-411d-86ee-c4962430c5a3","type":"BasicTicker"}},"id":"fb41e407-bed7-4573-a467-5e8fb7e3be91","type":"Grid"},{"attributes":{"overlay":{"id":"aab5caf3-8eb8-4792-97d3-193233ccd8ad","type":"BoxAnnotation"}},"id":"ed030eef-c79e-4b1d-940b-4712743ce8f9","type":"BoxZoomTool"},{"attributes":{"child":{"id":"5702a9a2-f169-45f7-8337-d5a1c25e3130","subtype":"Figure","type":"Plot"},"title":"line"},"id":"6bfa9aae-6232-4358-aa8e-c1c4307f63b3","type":"Panel"},{"attributes":{"callback":null},"id":"51d6eda2-df00-4ea3-9ccf-308c7df08532","type":"DataRange1d"},{"attributes":{"data_source":{"id":"dc62d2b5-e1cf-4476-a450-665a21c15f6e","type":"ColumnDataSource"},"glyph":{"id":"52dd26b0-d44f-43b6-8e43-d16e09e8dcc2","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d19c9f31-ee8a-4618-b0ff-23853cb3dc88","type":"Line"},"selection_glyph":null,"view":{"id":"637c41e2-6e95-4e5a-9e6d-f75d3ec708da","type":"CDSView"}},"id":"b16661ae-b084-4aff-bc55-b38d201d44b7","type":"GlyphRenderer"},{"attributes":{},"id":"616df8a9-3cd9-425c-b974-013c5f589fa0","type":"LinearScale"},{"attributes":{"source":{"id":"dc62d2b5-e1cf-4476-a450-665a21c15f6e","type":"ColumnDataSource"}},"id":"637c41e2-6e95-4e5a-9e6d-f75d3ec708da","type":"CDSView"},{"attributes":{},"id":"71dfc429-896f-4c39-8bd7-ca2fd67f935f","type":"BasicTicker"},{"attributes":{},"id":"b8a5bb92-5d9e-4e7d-8ce4-07376114260b","type":"HelpTool"},{"attributes":{},"id":"65cd2ed4-8795-4f96-b56e-679cf05693c9","type":"ResetTool"},{"attributes":{"formatter":{"id":"75eea4a8-5692-4c6d-9017-8be307ee60cb","type":"BasicTickFormatter"},"plot":{"id":"1185ba84-0337-4a9c-b6a4-c4e96f84b89b","subtype":"Figure","type":"Plot"},"ticker":{"id":"402367a8-ae9e-4646-a0d0-780e90f2dd7c","type":"BasicTicker"}},"id":"78522f57-d393-4e5d-b000-843434a70e2a","type":"LinearAxis"},{"attributes":{"child":{"id":"1185ba84-0337-4a9c-b6a4-c4e96f84b89b","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"099be600-442f-48b5-9da8-faca9fb75daa","type":"Panel"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aab5caf3-8eb8-4792-97d3-193233ccd8ad","type":"BoxAnnotation"},{"attributes":{},"id":"d35473b4-bea1-47c5-a976-debfc4b6c0e6","type":"LinearScale"},{"attributes":{},"id":"bb4e5a83-aa1f-4fbd-954d-bb23385db3b3","type":"BasicTickFormatter"},{"attributes":{},"id":"68f724bb-eb62-4011-8577-eeb3ad8fc74c","type":"Selection"},{"attributes":{"formatter":{"id":"4fff2a8c-aa57-4645-830a-e4a0bbb7e1f5","type":"BasicTickFormatter"},"plot":{"id":"1185ba84-0337-4a9c-b6a4-c4e96f84b89b","subtype":"Figure","type":"Plot"},"ticker":{"id":"71dfc429-896f-4c39-8bd7-ca2fd67f935f","type":"BasicTicker"}},"id":"21407c42-eb65-47da-be1a-d41788ef50e6","type":"LinearAxis"},{"attributes":{},"id":"4b343e71-1c89-447a-b809-ba46df05ce27","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"fc3da142-8d0c-412c-b3f0-a9cb11a2550a","type":"DataRange1d"},{"attributes":{},"id":"0ddf0be3-e313-48b1-af99-3d95a4ce313a","type":"BasicTickFormatter"},{"attributes":{},"id":"07fc88eb-5ce8-4c3a-be78-e7978d8443d5","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"ad8c2849-e6e6-4471-9497-53a439cca22e","type":"Title"},{"attributes":{},"id":"131c3dde-39df-4419-93d4-cfe78b4b1aef","type":"PanTool"},{"attributes":{},"id":"f9be1cb2-4b42-433b-8a15-08215eb67ad2","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"d19c9f31-ee8a-4618-b0ff-23853cb3dc88","type":"Line"}],"root_ids":["857c2f8d-a50c-4e79-ad0a-23365ab26f1f"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"39dec08f-5cb4-4785-8ff2-0fbeda269746","elementid":"121a7861-7beb-4d95-967d-c0fa1cbe72dd","modelid":"857c2f8d-a50c-4e79-ad0a-23365ab26f1f"}];
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