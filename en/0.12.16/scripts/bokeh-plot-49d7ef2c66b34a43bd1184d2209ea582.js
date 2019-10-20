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
      };var element = document.getElementById("1f5985f4-a9cf-4b80-ac20-14cbd11eb409");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1f5985f4-a9cf-4b80-ac20-14cbd11eb409' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"113d7149-bdb1-4859-9837-e1ca8697f0ec":{"roots":{"references":[{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"770b8907-0bdd-4d65-8ac9-ed433751be5d","type":"FactorRange"},{"attributes":{},"id":"5e33c68f-0bd1-46f0-87dd-531305409219","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"df916ac9-a35f-4749-ad07-09e4b1fa3fd4","type":"Toolbar"},{"attributes":{"data_source":{"id":"df1c361f-d9d4-48b6-9186-2094629c8902","type":"ColumnDataSource"},"glyph":{"id":"61a56efc-48f4-4fca-8f84-2af27f06acac","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8da257b5-d204-4c5a-9644-b92f42760d35","type":"Circle"},"selection_glyph":null,"view":{"id":"41e46aa7-07d3-4c4f-973e-7a3e31a41b08","type":"CDSView"}},"id":"d45db099-5af8-4018-abe7-350a3a01a264","type":"GlyphRenderer"},{"attributes":{},"id":"de7e1854-dbde-455d-9da2-a071f76c2442","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"96a3e249-0266-43c6-be69-6ed4183321b7","type":"CategoricalTickFormatter"},"plot":{"id":"793dd0df-a3b6-4bff-8438-3b256d39372b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d7efe86-a46c-4424-be86-eb8a32ccd51b","type":"CategoricalTicker"}},"id":"ca18d99e-ff47-4c49-aaf0-cc3bf7901b72","type":"CategoricalAxis"},{"attributes":{},"id":"c7194a79-01d1-4052-b8a5-4ea261e53063","type":"CategoricalScale"},{"attributes":{},"id":"c4c74e2b-29c6-49ae-8c46-984367c3204f","type":"CategoricalScale"},{"attributes":{},"id":"0d7efe86-a46c-4424-be86-eb8a32ccd51b","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"8436c10a-bb73-4c4c-8ebd-8a4183404575","type":"FactorRange"},{"attributes":{"formatter":{"id":"d3c9d5af-665a-4111-a100-9ffa93ae6469","type":"CategoricalTickFormatter"},"plot":{"id":"f279c145-2409-4f45-b8b3-16d2a1de2985","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e33c68f-0bd1-46f0-87dd-531305409219","type":"CategoricalTicker"}},"id":"e601b01a-1370-4c19-99e9-4b598714e10c","type":"CategoricalAxis"},{"attributes":{"below":[{"id":"aa9a59ee-aad5-42a1-bb0c-85d09de455e7","type":"LinearAxis"}],"left":[{"id":"e601b01a-1370-4c19-99e9-4b598714e10c","type":"CategoricalAxis"}],"renderers":[{"id":"aa9a59ee-aad5-42a1-bb0c-85d09de455e7","type":"LinearAxis"},{"id":"beba9bcf-0bb6-452a-bdd8-b2a779b2ad86","type":"Grid"},{"id":"e601b01a-1370-4c19-99e9-4b598714e10c","type":"CategoricalAxis"},{"id":"8c080c75-ef71-4881-8451-a279105b924a","type":"Grid"},{"id":"ce2ef16b-2117-4499-80d5-2190cf8b1463","type":"GlyphRenderer"},{"id":"d45db099-5af8-4018-abe7-350a3a01a264","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"34fb6357-ddee-421b-9e34-c191878ed839","type":"Title"},"toolbar":{"id":"df916ac9-a35f-4749-ad07-09e4b1fa3fd4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"efed9fc0-542b-4a33-bbee-12c3f2a3b9f6","type":"Range1d"},"x_scale":{"id":"fa505fed-53b9-4c67-8648-e10eea5cf31f","type":"LinearScale"},"y_range":{"id":"a8651c70-54fb-477b-a840-00deec38dab2","type":"FactorRange"},"y_scale":{"id":"c4c74e2b-29c6-49ae-8c46-984367c3204f","type":"CategoricalScale"}},"id":"f279c145-2409-4f45-b8b3-16d2a1de2985","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7e2378e1-da5e-4123-a767-b653a241c854","type":"BasicTickFormatter"},"plot":{"id":"f279c145-2409-4f45-b8b3-16d2a1de2985","subtype":"Figure","type":"Plot"},"ticker":{"id":"136ad240-5963-4efe-b466-ec98fb30fe60","type":"BasicTicker"}},"id":"aa9a59ee-aad5-42a1-bb0c-85d09de455e7","type":"LinearAxis"},{"attributes":{"plot":{"id":"f279c145-2409-4f45-b8b3-16d2a1de2985","subtype":"Figure","type":"Plot"},"ticker":{"id":"136ad240-5963-4efe-b466-ec98fb30fe60","type":"BasicTicker"}},"id":"beba9bcf-0bb6-452a-bdd8-b2a779b2ad86","type":"Grid"},{"attributes":{},"id":"fa505fed-53b9-4c67-8648-e10eea5cf31f","type":"LinearScale"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9565bd4-f14b-47bc-9e40-f1baa177f1e4","type":"Rect"},{"attributes":{},"id":"0a3bf272-2412-46c1-906d-032f521b6c7d","type":"Selection"},{"attributes":{"source":{"id":"ad595088-34fc-4b0b-8abf-53fcaa166e46","type":"ColumnDataSource"}},"id":"e3ee56d6-f4de-46cd-836a-233e1f772542","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"61a56efc-48f4-4fca-8f84-2af27f06acac","type":"Circle"},{"attributes":{},"id":"a57e5d13-2cd9-44d9-b75c-d8126f919b07","type":"Selection"},{"attributes":{"callback":null,"renderers":"auto"},"id":"45b54aa0-b4b4-4288-ac6d-d10966251b1f","type":"HoverTool"},{"attributes":{},"id":"96a3e249-0266-43c6-be69-6ed4183321b7","type":"CategoricalTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"03586dcc-53aa-4c0d-946e-9c06eba12013","type":"Segment"},{"attributes":{},"id":"62737572-f98c-4885-a3ea-54a1805623a6","type":"CategoricalScale"},{"attributes":{},"id":"1852dd62-4c73-44a1-a7a1-8fe842cc3690","type":"UnionRenderers"},{"attributes":{},"id":"19eef616-46a3-4630-af4b-4fb15cc9849b","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"34fb6357-ddee-421b-9e34-c191878ed839","type":"Title"},{"attributes":{},"id":"7e2378e1-da5e-4123-a767-b653a241c854","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"359a0e93-bf02-4be3-8ec1-524f92f01bdf","type":"CategoricalTickFormatter"},"plot":{"id":"793dd0df-a3b6-4bff-8438-3b256d39372b","subtype":"Figure","type":"Plot"},"ticker":{"id":"09798173-24d2-4c51-9de6-b53b10703773","type":"CategoricalTicker"}},"id":"c9a1f602-7407-45c9-b6cf-e43060f0ae68","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"793dd0df-a3b6-4bff-8438-3b256d39372b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d7efe86-a46c-4424-be86-eb8a32ccd51b","type":"CategoricalTicker"}},"id":"32764971-ccf5-4023-8ea9-d8b42ebf73f8","type":"Grid"},{"attributes":{"callback":null,"end":100},"id":"efed9fc0-542b-4a33-bbee-12c3f2a3b9f6","type":"Range1d"},{"attributes":{"data_source":{"id":"d57c3518-a90c-431b-b3c1-56f48f92784b","type":"ColumnDataSource"},"glyph":{"id":"a4e99950-4443-442d-97b9-d94034b53169","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"03586dcc-53aa-4c0d-946e-9c06eba12013","type":"Segment"},"selection_glyph":null,"view":{"id":"df9693a9-65fe-4fcc-bc57-3d552ae208de","type":"CDSView"}},"id":"ce2ef16b-2117-4499-80d5-2190cf8b1463","type":"GlyphRenderer"},{"attributes":{},"id":"359a0e93-bf02-4be3-8ec1-524f92f01bdf","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"45b54aa0-b4b4-4288-ac6d-d10966251b1f","type":"HoverTool"}]},"id":"5bcddcea-a535-49f1-ae25-e1a723550cc0","type":"Toolbar"},{"attributes":{},"id":"d3c9d5af-665a-4111-a100-9ffa93ae6469","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"af9adbb9-2f59-4a18-9c3b-56943f3e46d6","type":"Selection"},"selection_policy":{"id":"1852dd62-4c73-44a1-a7a1-8fe842cc3690","type":"UnionRenderers"}},"id":"ad595088-34fc-4b0b-8abf-53fcaa166e46","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"793dd0df-a3b6-4bff-8438-3b256d39372b","subtype":"Figure","type":"Plot"},"ticker":{"id":"09798173-24d2-4c51-9de6-b53b10703773","type":"CategoricalTicker"}},"id":"6d73a7b9-9074-4736-ad1c-ff24f1b6d1c1","type":"Grid"},{"attributes":{},"id":"09798173-24d2-4c51-9de6-b53b10703773","type":"CategoricalTicker"},{"attributes":{},"id":"af9adbb9-2f59-4a18-9c3b-56943f3e46d6","type":"Selection"},{"attributes":{"below":[{"id":"ca18d99e-ff47-4c49-aaf0-cc3bf7901b72","type":"CategoricalAxis"}],"left":[{"id":"c9a1f602-7407-45c9-b6cf-e43060f0ae68","type":"CategoricalAxis"}],"renderers":[{"id":"ca18d99e-ff47-4c49-aaf0-cc3bf7901b72","type":"CategoricalAxis"},{"id":"32764971-ccf5-4023-8ea9-d8b42ebf73f8","type":"Grid"},{"id":"c9a1f602-7407-45c9-b6cf-e43060f0ae68","type":"CategoricalAxis"},{"id":"6d73a7b9-9074-4736-ad1c-ff24f1b6d1c1","type":"Grid"},{"id":"37267be3-d094-4ad6-91ed-56d123110c54","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"e572cb87-e580-4b42-b8ee-fce61c1ea797","type":"Title"},"toolbar":{"id":"5bcddcea-a535-49f1-ae25-e1a723550cc0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8436c10a-bb73-4c4c-8ebd-8a4183404575","type":"FactorRange"},"x_scale":{"id":"62737572-f98c-4885-a3ea-54a1805623a6","type":"CategoricalScale"},"y_range":{"id":"770b8907-0bdd-4d65-8ac9-ed433751be5d","type":"FactorRange"},"y_scale":{"id":"c7194a79-01d1-4052-b8a5-4ea261e53063","type":"CategoricalScale"}},"id":"793dd0df-a3b6-4bff-8438-3b256d39372b","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"ad595088-34fc-4b0b-8abf-53fcaa166e46","type":"ColumnDataSource"},"glyph":{"id":"b9565bd4-f14b-47bc-9e40-f1baa177f1e4","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"277cec40-5509-41c4-8884-29acefb2fa6b","type":"Rect"},"selection_glyph":null,"view":{"id":"e3ee56d6-f4de-46cd-836a-233e1f772542","type":"CDSView"}},"id":"37267be3-d094-4ad6-91ed-56d123110c54","type":"GlyphRenderer"},{"attributes":{},"id":"136ad240-5963-4efe-b466-ec98fb30fe60","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"e572cb87-e580-4b42-b8ee-fce61c1ea797","type":"Title"},{"attributes":{"source":{"id":"d57c3518-a90c-431b-b3c1-56f48f92784b","type":"ColumnDataSource"}},"id":"df9693a9-65fe-4fcc-bc57-3d552ae208de","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"f279c145-2409-4f45-b8b3-16d2a1de2985","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e33c68f-0bd1-46f0-87dd-531305409219","type":"CategoricalTicker"}},"id":"8c080c75-ef71-4881-8451-a279105b924a","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"0a3bf272-2412-46c1-906d-032f521b6c7d","type":"Selection"},"selection_policy":{"id":"de7e1854-dbde-455d-9da2-a071f76c2442","type":"UnionRenderers"}},"id":"df1c361f-d9d4-48b6-9186-2094629c8902","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"a4e99950-4443-442d-97b9-d94034b53169","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"277cec40-5509-41c4-8884-29acefb2fa6b","type":"Rect"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"a57e5d13-2cd9-44d9-b75c-d8126f919b07","type":"Selection"},"selection_policy":{"id":"19eef616-46a3-4630-af4b-4fb15cc9849b","type":"UnionRenderers"}},"id":"d57c3518-a90c-431b-b3c1-56f48f92784b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8da257b5-d204-4c5a-9644-b92f42760d35","type":"Circle"},{"attributes":{"source":{"id":"df1c361f-d9d4-48b6-9186-2094629c8902","type":"ColumnDataSource"}},"id":"41e46aa7-07d3-4c4f-973e-7a3e31a41b08","type":"CDSView"},{"attributes":{"children":[{"id":"793dd0df-a3b6-4bff-8438-3b256d39372b","subtype":"Figure","type":"Plot"},{"id":"f279c145-2409-4f45-b8b3-16d2a1de2985","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"2b5d6ab5-b2d1-415d-a19a-3908576a8d70","type":"Row"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"a8651c70-54fb-477b-a840-00deec38dab2","type":"FactorRange"}],"root_ids":["2b5d6ab5-b2d1-415d-a19a-3908576a8d70"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"113d7149-bdb1-4859-9837-e1ca8697f0ec","elementid":"1f5985f4-a9cf-4b80-ac20-14cbd11eb409","modelid":"2b5d6ab5-b2d1-415d-a19a-3908576a8d70"}];
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