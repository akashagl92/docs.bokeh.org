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
      };var element = document.getElementById("8e34b849-5dc6-43c7-a97d-809107066149");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8e34b849-5dc6-43c7-a97d-809107066149' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4e6f98a3-0e47-44fd-addd-3f4593479839":{"roots":{"references":[{"attributes":{"plot":{"id":"86b24a75-7834-42a3-931f-216bc9008d8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea4a4545-f706-459d-af66-e800ed788a52","type":"BasicTicker"}},"id":"724b3d33-c3a6-42ee-8a63-00179b383a58","type":"Grid"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"9e2acd85-b65b-498c-9376-48694738ef43","type":"Line"},{"attributes":{},"id":"1d50467e-42db-4206-8aaf-b9ffe841288a","type":"LogScale"},{"attributes":{"axis_label":"sections","formatter":{"id":"65a5a8b1-56a9-4740-bb21-76634fd77577","type":"BasicTickFormatter"},"plot":{"id":"86b24a75-7834-42a3-931f-216bc9008d8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea4a4545-f706-459d-af66-e800ed788a52","type":"BasicTicker"}},"id":"5ca17160-c727-40b4-a3cd-98acee2c59f2","type":"LinearAxis"},{"attributes":{},"id":"ea4a4545-f706-459d-af66-e800ed788a52","type":"BasicTicker"},{"attributes":{"overlay":{"id":"2f70548f-127d-47ee-8f37-350b7f670247","type":"BoxAnnotation"}},"id":"fa7adffb-3d13-4a2b-ba8f-fb8d444f1e5e","type":"BoxZoomTool"},{"attributes":{},"id":"1fcec8b3-5e05-434e-8a93-696061a8e500","type":"ResetTool"},{"attributes":{},"id":"939a8bb6-6eca-4ef9-92b5-8218a2af3a58","type":"PanTool"},{"attributes":{},"id":"b74fd2f2-3efb-477c-97a9-2f7914e9a226","type":"UnionRenderers"},{"attributes":{"axis_label":"particles","formatter":{"id":"96fd73c9-726d-42c7-be18-285dfa77add1","type":"LogTickFormatter"},"plot":{"id":"86b24a75-7834-42a3-931f-216bc9008d8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c73465d-de78-482f-9abb-12c301b066b1","type":"LogTicker"}},"id":"ee293592-47e3-451b-a3c1-cf62e3717859","type":"LogAxis"},{"attributes":{"num_minor_ticks":10},"id":"8c73465d-de78-482f-9abb-12c301b066b1","type":"LogTicker"},{"attributes":{"dimension":1,"plot":{"id":"86b24a75-7834-42a3-931f-216bc9008d8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c73465d-de78-482f-9abb-12c301b066b1","type":"LogTicker"}},"id":"4284905e-7024-411a-af9f-53bbcdecec1b","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"b51c212b-120c-4be2-a73f-40407bf7dca8","type":"Line"},{"attributes":{},"id":"44ee52a1-78bb-4d81-b9e5-aa26ecdc7856","type":"Selection"},{"attributes":{},"id":"65a5a8b1-56a9-4740-bb21-76634fd77577","type":"BasicTickFormatter"},{"attributes":{},"id":"1d6d86af-7e25-4d98-9f26-f5f64ef450da","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f70548f-127d-47ee-8f37-350b7f670247","type":"BoxAnnotation"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"cc83598b-f5ba-41ee-8a4e-508d07adb145","type":"GlyphRenderer"}]},"id":"f256376b-8211-4b4c-be9b-85476f010f67","type":"LegendItem"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"e57a2b9e-6d40-4a74-9771-3461978a628f","type":"Selection"},"selection_policy":{"id":"de95f560-a501-440d-8c2c-12835530b9b2","type":"UnionRenderers"}},"id":"97389060-7c6c-4f72-ab87-570bc2d191f8","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"d9eb6cbc-4056-4849-9338-dcb6948bfd71","type":"Selection"},"selection_policy":{"id":"79368eb9-ca09-452d-918e-9c0f052f9ff4","type":"UnionRenderers"}},"id":"213e8c64-fe54-4b2a-a3e3-4c0e8622861a","type":"ColumnDataSource"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"171a730a-8d6d-4e22-af5c-e7aa6ccd90ab","type":"Line"},{"attributes":{"data_source":{"id":"b2fbea2f-0609-4a3e-8d4b-5496224941f8","type":"ColumnDataSource"},"glyph":{"id":"9e2acd85-b65b-498c-9376-48694738ef43","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b51c212b-120c-4be2-a73f-40407bf7dca8","type":"Line"},"selection_glyph":null,"view":{"id":"e2825331-7846-4c15-9b03-ab9a476a5c21","type":"CDSView"}},"id":"229eb240-a1ed-448e-8d4a-c2769476b2d8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b2fbea2f-0609-4a3e-8d4b-5496224941f8","type":"ColumnDataSource"}},"id":"e2825331-7846-4c15-9b03-ab9a476a5c21","type":"CDSView"},{"attributes":{},"id":"09ca4291-2593-4785-b02f-7967f73815c3","type":"Selection"},{"attributes":{},"id":"6d285a1f-7050-4bb8-972e-2b2f42941961","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"aff0d366-e492-4122-8229-35d8872bb797","type":"Line"},{"attributes":{"source":{"id":"97389060-7c6c-4f72-ab87-570bc2d191f8","type":"ColumnDataSource"}},"id":"54a00924-e767-40a4-ac57-fc2d2b189998","type":"CDSView"},{"attributes":{},"id":"de95f560-a501-440d-8c2c-12835530b9b2","type":"UnionRenderers"},{"attributes":{"source":{"id":"213e8c64-fe54-4b2a-a3e3-4c0e8622861a","type":"ColumnDataSource"}},"id":"e53339f4-08c9-41b6-bd32-4778b3c90e4c","type":"CDSView"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"8d8a8fde-f827-4127-9709-a0e350dc8704","type":"GlyphRenderer"},{"id":"f262abce-053c-4aaa-8bc2-02e77768c1f6","type":"GlyphRenderer"}]},"id":"a884709e-891b-4f60-b022-830c40f8792d","type":"LegendItem"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"9b8b329d-2014-44a3-b2d4-0f7a49e675cd","type":"Line"},{"attributes":{"data_source":{"id":"1cb744cc-a106-4d6d-a01c-a898f0244449","type":"ColumnDataSource"},"glyph":{"id":"2e3c91ad-4de5-4307-9323-2c2e00a0abb0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"792f2778-ecf8-40da-9e6b-3f76a6069399","type":"Circle"},"selection_glyph":null,"view":{"id":"70617675-a0f4-4873-a692-de27ab14a9e0","type":"CDSView"}},"id":"7fca784a-90f7-4f54-98d8-48f5abc8d7d6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"97389060-7c6c-4f72-ab87-570bc2d191f8","type":"ColumnDataSource"},"glyph":{"id":"171a730a-8d6d-4e22-af5c-e7aa6ccd90ab","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aff0d366-e492-4122-8229-35d8872bb797","type":"Line"},"selection_glyph":null,"view":{"id":"54a00924-e767-40a4-ac57-fc2d2b189998","type":"CDSView"}},"id":"8d8a8fde-f827-4127-9709-a0e350dc8704","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8280374-8743-443f-9c13-50b1c1abe90d","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ebe46f8-f71a-4065-aa11-e98470964316","type":"Circle"},{"attributes":{},"id":"e57a2b9e-6d40-4a74-9771-3461978a628f","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"792f2778-ecf8-40da-9e6b-3f76a6069399","type":"Circle"},{"attributes":{},"id":"f31261e1-9e34-45e5-a8e0-2d21f8a7f809","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"213e8c64-fe54-4b2a-a3e3-4c0e8622861a","type":"ColumnDataSource"},"glyph":{"id":"9ebe46f8-f71a-4065-aa11-e98470964316","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c8280374-8743-443f-9c13-50b1c1abe90d","type":"Circle"},"selection_glyph":null,"view":{"id":"e53339f4-08c9-41b6-bd32-4778b3c90e4c","type":"CDSView"}},"id":"f262abce-053c-4aaa-8bc2-02e77768c1f6","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1cb744cc-a106-4d6d-a01c-a898f0244449","type":"ColumnDataSource"}},"id":"70617675-a0f4-4873-a692-de27ab14a9e0","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"add12674-db4b-4d8a-a893-78cbb068a90b","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"2e3c91ad-4de5-4307-9323-2c2e00a0abb0","type":"Circle"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"4b7a741b-812a-4209-8cee-b450be8ca356","type":"GlyphRenderer"}]},"id":"eb4761ee-406b-4d32-a006-1fe0e965224b","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"9d2c333a-c7af-48dd-9136-65738077dbd9","type":"Line"},{"attributes":{"data_source":{"id":"5489be74-c22c-4c67-ba50-036e01e244b4","type":"ColumnDataSource"},"glyph":{"id":"35fb5de6-c8f0-4363-9e33-6a0f681ffd2d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9d2c333a-c7af-48dd-9136-65738077dbd9","type":"Line"},"selection_glyph":null,"view":{"id":"b8e7ee7e-2c5c-4f5f-b678-3d5da233b326","type":"CDSView"}},"id":"cc83598b-f5ba-41ee-8a4e-508d07adb145","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c9c9808b-1134-4711-85ac-af231f173db5","type":"ColumnDataSource"},"glyph":{"id":"9b8b329d-2014-44a3-b2d4-0f7a49e675cd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"add12674-db4b-4d8a-a893-78cbb068a90b","type":"Line"},"selection_glyph":null,"view":{"id":"5aed04c3-7e98-450f-8996-92bab2f76220","type":"CDSView"}},"id":"4b7a741b-812a-4209-8cee-b450be8ca356","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5489be74-c22c-4c67-ba50-036e01e244b4","type":"ColumnDataSource"}},"id":"b8e7ee7e-2c5c-4f5f-b678-3d5da233b326","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"44ee52a1-78bb-4d81-b9e5-aa26ecdc7856","type":"Selection"},"selection_policy":{"id":"6d285a1f-7050-4bb8-972e-2b2f42941961","type":"UnionRenderers"}},"id":"5489be74-c22c-4c67-ba50-036e01e244b4","type":"ColumnDataSource"},{"attributes":{},"id":"d9eb6cbc-4056-4849-9338-dcb6948bfd71","type":"Selection"},{"attributes":{"below":[{"id":"5ca17160-c727-40b4-a3cd-98acee2c59f2","type":"LinearAxis"}],"left":[{"id":"ee293592-47e3-451b-a3c1-cf62e3717859","type":"LogAxis"}],"renderers":[{"id":"5ca17160-c727-40b4-a3cd-98acee2c59f2","type":"LinearAxis"},{"id":"724b3d33-c3a6-42ee-8a63-00179b383a58","type":"Grid"},{"id":"ee293592-47e3-451b-a3c1-cf62e3717859","type":"LogAxis"},{"id":"4284905e-7024-411a-af9f-53bbcdecec1b","type":"Grid"},{"id":"2f70548f-127d-47ee-8f37-350b7f670247","type":"BoxAnnotation"},{"id":"7acfa491-95ce-4bf9-ac12-9f26efbd76ea","type":"Legend"},{"id":"229eb240-a1ed-448e-8d4a-c2769476b2d8","type":"GlyphRenderer"},{"id":"7fca784a-90f7-4f54-98d8-48f5abc8d7d6","type":"GlyphRenderer"},{"id":"cc83598b-f5ba-41ee-8a4e-508d07adb145","type":"GlyphRenderer"},{"id":"8d8a8fde-f827-4127-9709-a0e350dc8704","type":"GlyphRenderer"},{"id":"f262abce-053c-4aaa-8bc2-02e77768c1f6","type":"GlyphRenderer"},{"id":"4b7a741b-812a-4209-8cee-b450be8ca356","type":"GlyphRenderer"}],"title":{"id":"1853276c-ebf7-418c-964c-b2d4c1a1f809","type":"Title"},"toolbar":{"id":"b50f70ef-5800-4a73-ace0-1d04d2ccfa91","type":"Toolbar"},"x_range":{"id":"543d9c61-f894-4bea-bd23-2660dbe0af2b","type":"DataRange1d"},"x_scale":{"id":"62d48e03-b34d-4df7-85cf-d4a3c8a40044","type":"LinearScale"},"y_range":{"id":"6e11c4cc-4c2b-456a-983d-b3bcd0dbf899","type":"Range1d"},"y_scale":{"id":"1d50467e-42db-4206-8aaf-b9ffe841288a","type":"LogScale"}},"id":"86b24a75-7834-42a3-931f-216bc9008d8b","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"21253948-3f76-443b-9a79-2b7de42aaf6f","type":"Selection"},"selection_policy":{"id":"575c7f5e-1c17-4b97-aa26-eca9846093c9","type":"UnionRenderers"}},"id":"c9c9808b-1134-4711-85ac-af231f173db5","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"09ca4291-2593-4785-b02f-7967f73815c3","type":"Selection"},"selection_policy":{"id":"b74fd2f2-3efb-477c-97a9-2f7914e9a226","type":"UnionRenderers"}},"id":"1cb744cc-a106-4d6d-a01c-a898f0244449","type":"ColumnDataSource"},{"attributes":{},"id":"79368eb9-ca09-452d-918e-9c0f052f9ff4","type":"UnionRenderers"},{"attributes":{},"id":"34594c1a-9126-46bb-b5b2-a47d780c96a1","type":"Selection"},{"attributes":{},"id":"575c7f5e-1c17-4b97-aa26-eca9846093c9","type":"UnionRenderers"},{"attributes":{"source":{"id":"c9c9808b-1134-4711-85ac-af231f173db5","type":"ColumnDataSource"}},"id":"5aed04c3-7e98-450f-8996-92bab2f76220","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"35fb5de6-c8f0-4363-9e33-6a0f681ffd2d","type":"Line"},{"attributes":{},"id":"21253948-3f76-443b-9a79-2b7de42aaf6f","type":"Selection"},{"attributes":{"ticker":null},"id":"96fd73c9-726d-42c7-be18-285dfa77add1","type":"LogTickFormatter"},{"attributes":{"items":[{"id":"8a8c6327-4162-4463-a233-3de0fb840880","type":"LegendItem"},{"id":"f256376b-8211-4b4c-be9b-85476f010f67","type":"LegendItem"},{"id":"a884709e-891b-4f60-b022-830c40f8792d","type":"LegendItem"},{"id":"eb4761ee-406b-4d32-a006-1fe0e965224b","type":"LegendItem"}],"plot":{"id":"86b24a75-7834-42a3-931f-216bc9008d8b","subtype":"Figure","type":"Plot"}},"id":"7acfa491-95ce-4bf9-ac12-9f26efbd76ea","type":"Legend"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"229eb240-a1ed-448e-8d4a-c2769476b2d8","type":"GlyphRenderer"},{"id":"7fca784a-90f7-4f54-98d8-48f5abc8d7d6","type":"GlyphRenderer"}]},"id":"8a8c6327-4162-4463-a233-3de0fb840880","type":"LegendItem"},{"attributes":{"plot":null,"text":"log axis example"},"id":"1853276c-ebf7-418c-964c-b2d4c1a1f809","type":"Title"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"6e11c4cc-4c2b-456a-983d-b3bcd0dbf899","type":"Range1d"},{"attributes":{},"id":"62d48e03-b34d-4df7-85cf-d4a3c8a40044","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"939a8bb6-6eca-4ef9-92b5-8218a2af3a58","type":"PanTool"},{"id":"fa7adffb-3d13-4a2b-ba8f-fb8d444f1e5e","type":"BoxZoomTool"},{"id":"1fcec8b3-5e05-434e-8a93-696061a8e500","type":"ResetTool"},{"id":"1d6d86af-7e25-4d98-9f26-f5f64ef450da","type":"SaveTool"}]},"id":"b50f70ef-5800-4a73-ace0-1d04d2ccfa91","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"34594c1a-9126-46bb-b5b2-a47d780c96a1","type":"Selection"},"selection_policy":{"id":"f31261e1-9e34-45e5-a8e0-2d21f8a7f809","type":"UnionRenderers"}},"id":"b2fbea2f-0609-4a3e-8d4b-5496224941f8","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"543d9c61-f894-4bea-bd23-2660dbe0af2b","type":"DataRange1d"}],"root_ids":["86b24a75-7834-42a3-931f-216bc9008d8b"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"4e6f98a3-0e47-44fd-addd-3f4593479839","elementid":"8e34b849-5dc6-43c7-a97d-809107066149","modelid":"86b24a75-7834-42a3-931f-216bc9008d8b"}];
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