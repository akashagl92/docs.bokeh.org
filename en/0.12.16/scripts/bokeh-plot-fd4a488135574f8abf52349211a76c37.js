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
      };var element = document.getElementById("6c2ac528-9865-4cc8-979e-506a35990d15");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6c2ac528-9865-4cc8-979e-506a35990d15' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3368b474-8629-4d3e-bd50-fa9d77a00b33":{"roots":{"references":[{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"4fa435f9-2459-42f0-aeee-22ecae3e6dcc","type":"GlyphRenderer"}]},"id":"22d4a06b-2f86-40fb-b617-b00b7d8ea491","type":"LegendItem"},{"attributes":{"source":{"id":"21bca77b-7ec3-49fe-88fd-34351b0b48b6","type":"ColumnDataSource"}},"id":"50e9da13-326f-467e-8b65-b999c11282e7","type":"CDSView"},{"attributes":{},"id":"16b3c749-dd45-49ba-9494-ac3ccedfacac","type":"LinearScale"},{"attributes":{"fields":["2015"]},"id":"ef043cde-744e-4ad0-836a-2177662a1409","type":"Stack"},{"attributes":{},"id":"2b0fe5af-899f-4b14-b2bb-b7392625a9be","type":"CategoricalScale"},{"attributes":{},"id":"08e01458-18d9-460e-8262-b9c3d374735b","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2df99b00-0b0b-44c7-8b59-a14529364cfc","type":"PanTool"},{"id":"807da28b-733f-4cb6-a4c8-538e39c5a3d0","type":"WheelZoomTool"},{"id":"b3674cec-9f3b-4f4b-bb6a-77ed86674ac2","type":"BoxZoomTool"},{"id":"128ac8e5-ae8b-48ad-95de-c6d69f23e05a","type":"SaveTool"},{"id":"08e01458-18d9-460e-8262-b9c3d374735b","type":"ResetTool"},{"id":"6b087cc5-ace3-490f-b5ad-e2913e16f2e8","type":"HelpTool"}]},"id":"572e3a0e-2b35-49dc-a7a0-315950480081","type":"Toolbar"},{"attributes":{"formatter":{"id":"bda8a22b-7a0a-4ca1-ab0b-a6374b09ac3d","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"cb68d2fa-4d16-4e25-a16b-dfba134c6a41","subtype":"Figure","type":"Plot"},"ticker":{"id":"41da52fd-393b-453a-9bd7-538562fdc319","type":"CategoricalTicker"}},"id":"0adf2eff-5ba0-4177-a0b6-929eaae793df","type":"CategoricalAxis"},{"attributes":{"fields":["2015"]},"id":"6bbba8a0-90bd-4901-9abe-b70b1f15f5d5","type":"Stack"},{"attributes":{},"id":"63450d57-cdac-4fae-ad5a-2d565ff4beaf","type":"Selection"},{"attributes":{"fields":["2015","2016"]},"id":"e7ee0b06-e38c-4b61-86e4-4ff94b6cc89f","type":"Stack"},{"attributes":{},"id":"1390c136-86e4-4908-8f6b-43eb065697e9","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"f78ae421-1877-4dd9-888c-03cbb4f93de5","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"f25c925f-03e5-4cef-9466-b5cf32152629","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"8b100727-d238-4921-b0fd-77e6325b6a71","type":"Stack"}},"y":{"field":"fruits"}},"id":"cf902198-b18c-413a-9073-643725bf6701","type":"HBar"},{"attributes":{"plot":{"id":"cb68d2fa-4d16-4e25-a16b-dfba134c6a41","subtype":"Figure","type":"Plot"},"ticker":{"id":"1390c136-86e4-4908-8f6b-43eb065697e9","type":"BasicTicker"}},"id":"77c33980-c29e-4268-9db5-dbf83585071b","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"abb321e6-7a31-4f83-a210-06b4677ffad0","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"21bca77b-7ec3-49fe-88fd-34351b0b48b6","type":"ColumnDataSource"},"glyph":{"id":"a8954099-8964-42cd-95d5-d92b31d54f84","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e6ea557d-f1da-4e2c-a8a0-77adcbbe2659","type":"HBar"},"selection_glyph":null,"view":{"id":"8f9e7211-cc7c-40b4-9ede-0595db5b81d5","type":"CDSView"}},"id":"34cfb00a-5516-4df2-b3a6-4870c114867a","type":"GlyphRenderer"},{"attributes":{},"id":"128ac8e5-ae8b-48ad-95de-c6d69f23e05a","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"f25c925f-03e5-4cef-9466-b5cf32152629","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"8b100727-d238-4921-b0fd-77e6325b6a71","type":"Stack"}},"y":{"field":"fruits"}},"id":"25ba3141-596e-4c76-877e-dcaa5059227c","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"c67b34eb-d08e-4d51-8933-ed98acd7f0c1","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"cbd90f42-f515-4386-8b92-dc15e56dab2f","type":"Selection"},"selection_policy":{"id":"110f9f8a-028c-407f-a5ec-126ccf0fb474","type":"UnionRenderers"}},"id":"a1a504e7-e41f-437c-b8d6-9b09eca116bc","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"a3254966-7eff-48d6-a0e0-aef5876923ba","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"7ee978ba-33c9-4a5d-8ec3-2c8d3f50c3c7","type":"Stack"}},"y":{"field":"fruits"}},"id":"a8954099-8964-42cd-95d5-d92b31d54f84","type":"HBar"},{"attributes":{},"id":"a2b437b3-84e7-4cbf-ade0-aca53648f80d","type":"UnionRenderers"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"b867e7ee-1c5f-45d1-9dc6-e2f3bf3b3994","type":"GlyphRenderer"}]},"id":"1873a293-1210-4505-b6ab-5f60bef83093","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"309b6c1a-6f34-4801-8aa8-bfd0694d663c","type":"Stack"},{"attributes":{},"id":"41da52fd-393b-453a-9bd7-538562fdc319","type":"CategoricalTicker"},{"attributes":{"fields":["2015","2016"]},"id":"8b100727-d238-4921-b0fd-77e6325b6a71","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"f25c925f-03e5-4cef-9466-b5cf32152629","type":"Stack"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"35019363-2e34-407d-9ed0-29f96ad3e652","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"b1a7f750-8443-47e2-b8b3-41a768a90797","type":"Stack"}},"y":{"field":"fruits"}},"id":"e808a4cd-ca43-4c7e-a3ef-051ff165c080","type":"HBar"},{"attributes":{"source":{"id":"21bca77b-7ec3-49fe-88fd-34351b0b48b6","type":"ColumnDataSource"}},"id":"8f9e7211-cc7c-40b4-9ede-0595db5b81d5","type":"CDSView"},{"attributes":{"fields":[]},"id":"35019363-2e34-407d-9ed0-29f96ad3e652","type":"Stack"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"e7ee0b06-e38c-4b61-86e4-4ff94b6cc89f","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"309b6c1a-6f34-4801-8aa8-bfd0694d663c","type":"Stack"}},"y":{"field":"fruits"}},"id":"41f16698-9ec2-4b32-86fc-aeaf12a3768e","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"cb68d2fa-4d16-4e25-a16b-dfba134c6a41","subtype":"Figure","type":"Plot"},"ticker":{"id":"41da52fd-393b-453a-9bd7-538562fdc319","type":"CategoricalTicker"}},"id":"6325791b-3342-41ae-9a35-d7ff1ed04d49","type":"Grid"},{"attributes":{"items":[{"id":"5dc220a5-5773-488b-b2ee-c6c4906e15c8","type":"LegendItem"},{"id":"dc2e7b4e-a8e9-4f01-b45c-9afef4207fed","type":"LegendItem"},{"id":"be3a3452-8467-488c-98d9-7304bdc9e6fd","type":"LegendItem"},{"id":"1873a293-1210-4505-b6ab-5f60bef83093","type":"LegendItem"},{"id":"22d4a06b-2f86-40fb-b617-b00b7d8ea491","type":"LegendItem"},{"id":"9ead4571-0df3-43e2-bf5b-4e5ce7508185","type":"LegendItem"}],"location":"top_left","plot":{"id":"cb68d2fa-4d16-4e25-a16b-dfba134c6a41","subtype":"Figure","type":"Plot"}},"id":"fe37b65b-e340-4b87-9a6d-18f46cb23320","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"a25d0165-8078-4a16-add5-c977dc8db350","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"6bbba8a0-90bd-4901-9abe-b70b1f15f5d5","type":"Stack"}},"y":{"field":"fruits"}},"id":"01982fb2-07c3-4802-a77e-6e24d3c29aba","type":"HBar"},{"attributes":{},"id":"2df99b00-0b0b-44c7-8b59-a14529364cfc","type":"PanTool"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"a25d0165-8078-4a16-add5-c977dc8db350","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"6bbba8a0-90bd-4901-9abe-b70b1f15f5d5","type":"Stack"}},"y":{"field":"fruits"}},"id":"7441a5ab-f0e3-4cb3-be4c-05e703591c80","type":"HBar"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"9bbb8650-e740-4c02-bcbd-3ae44896c5a7","type":"GlyphRenderer"}]},"id":"5dc220a5-5773-488b-b2ee-c6c4906e15c8","type":"LegendItem"},{"attributes":{"data_source":{"id":"21bca77b-7ec3-49fe-88fd-34351b0b48b6","type":"ColumnDataSource"},"glyph":{"id":"25ba3141-596e-4c76-877e-dcaa5059227c","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cf902198-b18c-413a-9073-643725bf6701","type":"HBar"},"selection_glyph":null,"view":{"id":"50e9da13-326f-467e-8b65-b999c11282e7","type":"CDSView"}},"id":"4fa435f9-2459-42f0-aeee-22ecae3e6dcc","type":"GlyphRenderer"},{"attributes":{},"id":"bda8a22b-7a0a-4ca1-ab0b-a6374b09ac3d","type":"CategoricalTickFormatter"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"34cfb00a-5516-4df2-b3a6-4870c114867a","type":"GlyphRenderer"}]},"id":"9ead4571-0df3-43e2-bf5b-4e5ce7508185","type":"LegendItem"},{"attributes":{},"id":"510038cd-9238-4b51-a135-ced9c1e954b0","type":"BasicTickFormatter"},{"attributes":{},"id":"807da28b-733f-4cb6-a4c8-538e39c5a3d0","type":"WheelZoomTool"},{"attributes":{},"id":"cbd90f42-f515-4386-8b92-dc15e56dab2f","type":"Selection"},{"attributes":{"formatter":{"id":"510038cd-9238-4b51-a135-ced9c1e954b0","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"cb68d2fa-4d16-4e25-a16b-dfba134c6a41","subtype":"Figure","type":"Plot"},"ticker":{"id":"1390c136-86e4-4908-8f6b-43eb065697e9","type":"BasicTicker"}},"id":"bbdca2b7-6ef4-4286-bcce-212765e063f3","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a1a504e7-e41f-437c-b8d6-9b09eca116bc","type":"ColumnDataSource"},"glyph":{"id":"7441a5ab-f0e3-4cb3-be4c-05e703591c80","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"01982fb2-07c3-4802-a77e-6e24d3c29aba","type":"HBar"},"selection_glyph":null,"view":{"id":"c8227ea3-97b9-4190-9578-e50fae25aa32","type":"CDSView"}},"id":"9bbb8650-e740-4c02-bcbd-3ae44896c5a7","type":"GlyphRenderer"},{"attributes":{},"id":"6b087cc5-ace3-490f-b5ad-e2913e16f2e8","type":"HelpTool"},{"attributes":{"source":{"id":"a1a504e7-e41f-437c-b8d6-9b09eca116bc","type":"ColumnDataSource"}},"id":"c8227ea3-97b9-4190-9578-e50fae25aa32","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"e7ee0b06-e38c-4b61-86e4-4ff94b6cc89f","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"309b6c1a-6f34-4801-8aa8-bfd0694d663c","type":"Stack"}},"y":{"field":"fruits"}},"id":"405f3f80-2720-4f8c-8955-14243c8efa4f","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"ef043cde-744e-4ad0-836a-2177662a1409","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"c67b34eb-d08e-4d51-8933-ed98acd7f0c1","type":"Stack"}},"y":{"field":"fruits"}},"id":"9aa37e39-f8a4-49e5-81cd-c869babde8b3","type":"HBar"},{"attributes":{"overlay":{"id":"abb321e6-7a31-4f83-a210-06b4677ffad0","type":"BoxAnnotation"}},"id":"b3674cec-9f3b-4f4b-bb6a-77ed86674ac2","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"bbdca2b7-6ef4-4286-bcce-212765e063f3","type":"LinearAxis"}],"left":[{"id":"0adf2eff-5ba0-4177-a0b6-929eaae793df","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"bbdca2b7-6ef4-4286-bcce-212765e063f3","type":"LinearAxis"},{"id":"77c33980-c29e-4268-9db5-dbf83585071b","type":"Grid"},{"id":"0adf2eff-5ba0-4177-a0b6-929eaae793df","type":"CategoricalAxis"},{"id":"6325791b-3342-41ae-9a35-d7ff1ed04d49","type":"Grid"},{"id":"abb321e6-7a31-4f83-a210-06b4677ffad0","type":"BoxAnnotation"},{"id":"fe37b65b-e340-4b87-9a6d-18f46cb23320","type":"Legend"},{"id":"9bbb8650-e740-4c02-bcbd-3ae44896c5a7","type":"GlyphRenderer"},{"id":"ab502d11-5a31-4b07-b935-ab2ff87e0f1a","type":"GlyphRenderer"},{"id":"1c51fc52-0eab-4d48-8a84-053d52c4802a","type":"GlyphRenderer"},{"id":"b867e7ee-1c5f-45d1-9dc6-e2f3bf3b3994","type":"GlyphRenderer"},{"id":"4fa435f9-2459-42f0-aeee-22ecae3e6dcc","type":"GlyphRenderer"},{"id":"34cfb00a-5516-4df2-b3a6-4870c114867a","type":"GlyphRenderer"}],"title":{"id":"f78ae421-1877-4dd9-888c-03cbb4f93de5","type":"Title"},"toolbar":{"id":"572e3a0e-2b35-49dc-a7a0-315950480081","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7dce9c25-ab0b-41a8-b636-f5508ac5598a","type":"Range1d"},"x_scale":{"id":"16b3c749-dd45-49ba-9494-ac3ccedfacac","type":"LinearScale"},"y_range":{"id":"bbc0bfcd-c939-48c4-9106-41d8ec4d58b9","type":"FactorRange"},"y_scale":{"id":"2b0fe5af-899f-4b14-b2bb-b7392625a9be","type":"CategoricalScale"}},"id":"cb68d2fa-4d16-4e25-a16b-dfba134c6a41","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"ef043cde-744e-4ad0-836a-2177662a1409","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"c67b34eb-d08e-4d51-8933-ed98acd7f0c1","type":"Stack"}},"y":{"field":"fruits"}},"id":"13677eff-3cab-4179-95a8-971befd8b57a","type":"HBar"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"ab502d11-5a31-4b07-b935-ab2ff87e0f1a","type":"GlyphRenderer"}]},"id":"dc2e7b4e-a8e9-4f01-b45c-9afef4207fed","type":"LegendItem"},{"attributes":{},"id":"110f9f8a-028c-407f-a5ec-126ccf0fb474","type":"UnionRenderers"},{"attributes":{"fields":["2015"]},"id":"b1a7f750-8443-47e2-b8b3-41a768a90797","type":"Stack"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"7dce9c25-ab0b-41a8-b636-f5508ac5598a","type":"Range1d"},{"attributes":{"data_source":{"id":"a1a504e7-e41f-437c-b8d6-9b09eca116bc","type":"ColumnDataSource"},"glyph":{"id":"13677eff-3cab-4179-95a8-971befd8b57a","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9aa37e39-f8a4-49e5-81cd-c869babde8b3","type":"HBar"},"selection_glyph":null,"view":{"id":"a98ecb2d-c646-4505-8be7-b6c14e581956","type":"CDSView"}},"id":"ab502d11-5a31-4b07-b935-ab2ff87e0f1a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21bca77b-7ec3-49fe-88fd-34351b0b48b6","type":"ColumnDataSource"}},"id":"582ca5d6-6436-4632-bf23-8a19f704e24a","type":"CDSView"},{"attributes":{"data_source":{"id":"21bca77b-7ec3-49fe-88fd-34351b0b48b6","type":"ColumnDataSource"},"glyph":{"id":"e808a4cd-ca43-4c7e-a3ef-051ff165c080","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9ed95a4-fc6a-4ab9-95bb-f623c12bc0d8","type":"HBar"},"selection_glyph":null,"view":{"id":"582ca5d6-6436-4632-bf23-8a19f704e24a","type":"CDSView"}},"id":"b867e7ee-1c5f-45d1-9dc6-e2f3bf3b3994","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a1a504e7-e41f-437c-b8d6-9b09eca116bc","type":"ColumnDataSource"}},"id":"a98ecb2d-c646-4505-8be7-b6c14e581956","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"a3254966-7eff-48d6-a0e0-aef5876923ba","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"7ee978ba-33c9-4a5d-8ec3-2c8d3f50c3c7","type":"Stack"}},"y":{"field":"fruits"}},"id":"e6ea557d-f1da-4e2c-a8a0-77adcbbe2659","type":"HBar"},{"attributes":{"fields":[]},"id":"a25d0165-8078-4a16-add5-c977dc8db350","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"bbc0bfcd-c939-48c4-9106-41d8ec4d58b9","type":"FactorRange"},{"attributes":{"data_source":{"id":"a1a504e7-e41f-437c-b8d6-9b09eca116bc","type":"ColumnDataSource"},"glyph":{"id":"41f16698-9ec2-4b32-86fc-aeaf12a3768e","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"405f3f80-2720-4f8c-8955-14243c8efa4f","type":"HBar"},"selection_glyph":null,"view":{"id":"a784cd6e-27b7-41fc-bf69-3b406f397ed1","type":"CDSView"}},"id":"1c51fc52-0eab-4d48-8a84-053d52c4802a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"35019363-2e34-407d-9ed0-29f96ad3e652","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"b1a7f750-8443-47e2-b8b3-41a768a90797","type":"Stack"}},"y":{"field":"fruits"}},"id":"d9ed95a4-fc6a-4ab9-95bb-f623c12bc0d8","type":"HBar"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"63450d57-cdac-4fae-ad5a-2d565ff4beaf","type":"Selection"},"selection_policy":{"id":"a2b437b3-84e7-4cbf-ade0-aca53648f80d","type":"UnionRenderers"}},"id":"21bca77b-7ec3-49fe-88fd-34351b0b48b6","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016","2017"]},"id":"7ee978ba-33c9-4a5d-8ec3-2c8d3f50c3c7","type":"Stack"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"1c51fc52-0eab-4d48-8a84-053d52c4802a","type":"GlyphRenderer"}]},"id":"be3a3452-8467-488c-98d9-7304bdc9e6fd","type":"LegendItem"},{"attributes":{"source":{"id":"a1a504e7-e41f-437c-b8d6-9b09eca116bc","type":"ColumnDataSource"}},"id":"a784cd6e-27b7-41fc-bf69-3b406f397ed1","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"a3254966-7eff-48d6-a0e0-aef5876923ba","type":"Stack"}],"root_ids":["cb68d2fa-4d16-4e25-a16b-dfba134c6a41"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"3368b474-8629-4d3e-bd50-fa9d77a00b33","elementid":"6c2ac528-9865-4cc8-979e-506a35990d15","modelid":"cb68d2fa-4d16-4e25-a16b-dfba134c6a41"}];
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