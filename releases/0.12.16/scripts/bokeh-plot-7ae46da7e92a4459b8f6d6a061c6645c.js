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
      };var element = document.getElementById("e302e0bd-f07f-4bb7-9d54-d28fd951e391");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e302e0bd-f07f-4bb7-9d54-d28fd951e391' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6322cb75-6c34-45c9-9bc0-c5630a9815ac":{"roots":{"references":[{"attributes":{"callback":{"id":"73f105ff-ad74-4e57-b4bb-7edc4c0aade4","type":"CustomJS"},"data":{"x":[0.1044871227700982,0.2938143606611867,0.9250105471413813,0.6868007130419492,0.9701549974012958,0.5367585359772228,0.11183849335044793,0.7449793434949261,0.5181756444407871,0.8882635018138194,0.07226611897971136,0.8227416613605153,0.024101750887165374,0.3509476535992804,0.5705788754139698,0.007845385874090227,0.8079166823475409,0.6232623483429626,0.4590130774298915,0.27172805806315203,0.31843838113824674,0.037680511520100435,0.8050865127136941,0.8968452538064041,0.8418245813514701,0.45134299269351874,0.9143869473768194,0.24839507764987134,0.838191328692301,0.3906004918708499,0.8481620653435804,0.12625355243473202,0.2237708826286826,0.4827742295762889,0.21558603808719323,0.5257514019352977,0.26905826589674897,0.8831718381020062,0.5968800845817173,0.6683981500858623,0.3646777327095062,0.43135456729800337,0.45582013584055525,0.4360981096140497,0.7730679336938441,0.8205843436876002,0.8910512192387972,0.31442077962712955,0.08513496569628265,0.08319437690979758,0.7910365861978371,0.7761471945143966,0.3237768996544286,0.2710831443041076,0.24657626632171348,0.4232327145537529,0.47594021495777294,0.8125786733129229,0.5806476303102404,0.18028990752894192,0.9785310608004723,0.5491780523407077,0.18240989379710626,0.47086120677312016,0.812529172532543,0.47644174596452415,0.7063198709304215,0.8377688379140205,0.19878516246017075,0.6055351793546686,0.18353860231790753,0.9202826507148514,0.3163246249972693,0.8287641904996641,0.40253760825838714,0.10878862701773861,0.7366170263722794,0.40395315388362063,0.027238661557602684,0.48363625211791605,0.5551968256059608,0.9182128001932145,0.8345878239453262,0.5348741006725729,0.20926304513206884,0.14313100230257836,0.7555486039703517,0.9960570598517668,0.5889868668309374,0.8375329370371705,0.6614491004815182,0.9499106254026606,0.10666526799961884,0.9080644621158559,0.23071422200945624,0.39141856784735163,0.10023462766789126,0.6679368617158103,0.22770351345588247,0.5593383661381318,0.2664766673452088,0.6931609989281607,0.8479076426404738,0.4171211791617644,0.898834475223226,0.6565770296689662,0.3668503147899692,0.46282489278953065,0.065432560528903,0.26578719619838265,0.9425202450987493,0.44499843409675743,0.38315069918174016,0.10660618570721414,0.8713609375506545,0.6613141352226994,0.8465500674733046,0.7013575482277445,0.2842282818304911,0.1563111249284469,0.5604048152985939,0.8706565080922042,0.9366919691996467,0.7431029460837606,0.43928493959906756,0.1882452540224696,0.8992885259859656,0.9021038373112834,0.6520395950335658,0.7446424211673627,0.22727874200934306,0.380729264693102,0.7481016220271913,0.4826253887400108,0.9867368216356419,0.5036376140692216,0.1180456437013534,0.37360638756910614,0.029254142118109727,0.7441073147340573,0.6797740954746377,0.8797722769393024,0.94334978784289,0.8541123784356012,0.5994582691265152,0.8725328834717822,0.9551240165235424,0.4285236469187922,0.7118683501657993,0.42076118044879574,0.5161405217978771,0.04992858647804943,0.9180129599446998,0.5230905463755346,0.026556337478715553,0.724303867288035,0.975670736050936,0.8086877439862775,0.5276889793636672,0.5456117836281101,0.6111019392507457,0.8512995896415713,0.7196027778839815,0.011803246787879473,0.3402463589821393,0.011321043562072308,0.13491322259501426,0.17431760591597167,0.5846755974989962,0.9771142181297271,0.019987646624718747,0.39320120859874574,0.6157063452410312,0.08224146752768324,0.5509756820494314,0.17286397034482337,0.9175419965735784,0.407326591416865,0.37524131647416137,0.669821009041645,0.23314292329084962,0.010976958483365107,0.08050415831585034,0.21312420671415255,0.4309274111093194,0.6458505024472845,0.4168320188764405,0.4917645505474696,0.041696829619701004,0.29790771729717136,0.20199729432404923,0.8547766359350071,0.828776316384701,0.725302925065079,0.740905367724757,0.35848865657212203,0.7715190958063315,0.23294158683029964,0.6060613423427843,0.08495202545072189,0.7084403182967106,0.8900395069409192,0.6093883898659261,0.3028868700869244,0.4367243568710859,0.8213038014044587,0.6895883310029518,0.15504782111346027,0.7930993130056337,0.6478851389293582,0.9880879734867584,0.4761138338025601,0.5692133929009707,0.7013209711681563,0.2852541493304207,0.13273428871423987,0.6392776352575184,0.11529232437639991,0.6509721495008026,0.2950470684916733,0.6623052269861639,0.2643177577337614,0.4825304394571406,0.8425290871473097,0.22103806028697592,0.5530437806599158,0.9468768886912211,0.5750237990010656,0.1905466725410947,0.3609309614896249,0.7241589109704613,0.3481891210999941,0.4445260863623427,0.5426838381948655,0.7514413260135613,0.18679595348350042,0.21713837720362061,0.46254581670166495,0.5966120454353502,0.018068732578810143,0.8066808201020561,0.9379486402885702,0.6395709215454018,0.8686522465919497,0.560416008193056,0.1520574987188158,0.7556369934785223,0.9200413236262169,0.39481384018234955,0.061137990581996315,0.8061703837029125,0.8492553088125255,0.7254037596790875,0.22555788164786272,0.8897130431020596,0.8997459608799793,0.44919434709605144,0.6979314893171087,0.9895098200196875,0.9220778709073577,0.7706358980008874,0.9567725470689807,0.03018350583402829,0.5806143105897122,0.2742847814138112,0.4848117789170939,0.49993521355681314,0.14678854053024337,0.10032179976584821,0.18545761030693075,0.9090406890734437,0.9973053748865749,0.55143227987252,0.9619924395789508,0.12885124957811744,0.463510628533217,0.8508648602907317,0.09191148286966733,0.6842761377602823,0.91305273453376,0.19762223702601023,0.6826366431154084,0.6668106257440926,0.3588809259880229,0.5790037824280206,0.9632487158888696,0.7852415339758022,0.8169268338610948,0.7806423685385331,0.16830228978269735,0.28190687357897337,0.7157668708668562,0.10846613734298782,0.21348732930586378,0.9580585397171474,0.5815460899106755,0.9439640756413489,0.8815313499366292,0.007999810240643779,0.706645905498402,0.4923135448178714,0.5451000204912234,0.4925839710384423,0.6094545524877154,0.4032028074018237,0.7400586469065831,0.5987110554294548,0.5367160240156736,0.8735057288629214,0.4663842272238772,0.23754410819501126,0.6156100338095858,0.1459813912415271,0.9060003095759055,0.737146901764317,0.28052642734193545,0.0071643675916125416,0.04787269641859637,0.8065898587465798,0.16015688149947738,0.9633418727568627,0.4889019737231003,0.545731294662179,0.3649333176282329,0.3881024798861783,0.8896077686819003,0.4350230444633133,0.1281381055615881,0.7551097756013322,0.6756843578893147,0.5848486406874143,0.9374167044244591,0.48458590660712453,0.38551596523400344,0.35708801291124825,0.8262932362759415,0.8669445374175142,0.47156838578653515,0.6529737767909951,0.5661999419187296,0.7331359987387194,0.5581174710774788,0.7492028478891721,0.2095063306572722,0.007807118519493561,0.2323697065260144,0.9450661641831211,0.7742300852146837,0.8289093202243807,0.41817691038591265,0.10983053031910595,0.45152616261877676,0.6390667078822942,0.5439745113413588,0.22284265571852935,0.3483194591325288,0.046811125143211396,0.11066918192694386,0.38340388921500546,0.13502656781862798,0.08390378144809263,0.05796599224044685,0.025810014128005765,0.7950738389650269,0.7106374223565496,0.7642365168635289,0.5255965271447935,0.2317151721959918,0.9802343021205008,0.10484292661151717,0.8926500352584585,0.1545745619598844,0.4805510248418964,0.33778489560474834,0.8809799354705778,0.3714220033165707,0.1672705260017595,0.308156358865311,0.30278957337557444,0.5449267277840927,0.10397941514340803,0.6295768631907581,0.7552433751853882,0.16466517329050134,0.4373755202407804,0.12463597414167149,0.4382775090340263,0.861423480037534,0.9516790870175234,0.6891133141297452,0.2862701389023897,0.18813299814108742,0.7034945832676676,0.284346561877996,0.6815649961427401,0.7714478270047418,0.3915119573989041,0.8683627271955919,0.6548537003749486,0.5563774072445865,0.024432954895012515,0.8032654075214731,0.14222779985085232,0.7021953178616274,0.333427474194841,0.773819530919733,0.6799855743750067,0.2531530416910571,0.45781746923800115,0.9510572619217846,0.7101116539290642,0.449429267959216,0.640200235883799,0.6135712114894699,0.07248843721326026,0.6550476901651033,0.5335710686120589,0.7556845716619786,0.15457735357011426,0.12004560568946243,0.7792351852339463,0.5743724592414038,0.3207983816608596,0.4288897863270319,0.9795409349676943,0.573235853210949,0.6873090007056506,0.9899202246246108,0.4190335173407179,0.08089137588758799,0.5283094855184083,0.8852201975600478,0.6628758866794385,0.3918293456813663,0.5346975798244121,0.3577488862108884,0.6793060412485753,0.30711893381241684,0.2563856358267266,0.40323886492186556,0.11142915161309652,0.11544266551841775,0.7241585330062578,0.3515937228675112,0.42298074560198196,0.94901077907198,0.6252639293249661,0.894204558732765,0.18444498194852776,0.3800554619583262,0.5965209696023903,0.41253686038623394,0.7806867174481024,0.6432706089493633,0.2842728181108428,0.6838113162257254,0.028943790087096688,0.23286206031629364,0.2571788741823553,0.3656232881845257,0.618662003154649,0.8861729952409974,0.14008171152988358,0.9058016915941848,0.7222672007449726,0.9635010824307254,0.5340022748297351,0.2549070862716124,0.4369777430682936,0.39483935380172086,0.9102478255956938,0.30481375953544243,0.04524484145813579,0.12498278711587885,0.7377752783411629,0.6345851095327616,0.841352281350434,0.7901974652165416,0.6184333753017804,0.48245878623044347,0.5622418347825715,0.02527513666669412,0.93408997424004,0.24663798594491482,0.026325654531060838,0.7332769655832087,0.3076322424283332,0.0468919215276179,0.9897242262604531,0.6710298834909851,0.5196803434311725,0.029089307477602633,0.3201466831933517,0.02936354391878282,0.4815847148630851,0.20808308412283272,0.43910814453892166,0.460904457186441,0.29611203098687033,0.6334797272067548],"y":[0.22940460759928216,0.14281718761344886,0.38817437795909215,0.05300617271545838,0.07160084654145615,0.4391066825117058,0.23398537741212733,0.45363294384261643,0.9429327981358886,0.8482947436120153,0.8451077348676185,0.8680212192632404,0.0841759504038736,0.47211948102936796,0.9948194785841443,0.30119803687045854,0.016748831720537205,0.18436793328555645,0.5108833034487549,0.3609148760746218,0.5869165001112361,0.01042764404188734,0.635187925758464,0.49245861466545326,0.9733090103184463,0.17812199965295494,0.07073121345193623,0.056211991255424754,0.67848079590809,0.6170130954675116,0.15978743695796127,0.6969607555474199,0.9891941712657505,0.6734444849679292,0.7480448323871659,0.03350469643172449,0.5515785365927423,0.2035042106929702,0.2820818933607805,0.45848983540137644,0.22780524689901238,0.20845699708968735,0.5692619296692959,0.7690189294087679,0.7485331260443338,0.8772236416789695,0.8785718116305996,0.6414106013634294,0.5217699501543859,0.38646386791147613,0.6806391478979013,0.06451637193621418,0.45569911480141456,0.1373243952408928,0.36248070161570045,0.6469938340780287,0.8346741119425336,0.9105749137853988,0.22020658870947685,0.6410328961179425,0.8527718279114923,0.6443227005961752,0.5211330133936944,0.8913428314053654,0.547323155181327,0.9792410452902612,0.8533386539528474,0.13742066161398814,0.738037855859964,0.7001675108922824,0.2666235212069046,0.5710267847931565,0.1763459618555554,0.38569439568577035,0.712659511916551,0.39530942524395507,0.8322028147206292,0.8155028418346408,0.8714722939287424,0.7245438968350176,0.6212536247573054,0.49290524084177356,0.31788609117647026,0.21123929839618638,0.8873631045318788,0.8306223802489358,0.65718289742271,0.39154703071295416,0.11756626289028627,0.4400913113079026,0.8329754245526994,0.511349123998672,0.7769223034291022,0.9884423537291984,0.9404450601358869,0.6955491119514037,0.44402422458177937,0.8065776303692904,0.6683109657846289,0.7166319884099824,0.3281735354162626,0.14658019725857507,0.4764682207506189,0.15478393139191104,0.5905718186194511,0.9653565655034605,0.21477821989185775,0.8802786556530631,0.002714486668394467,0.6916161188995988,0.2799004930876715,0.6142394522990393,0.2865137319054678,0.3838328283173149,0.8835599783815624,0.2150768128216275,0.73499171053211,0.5289767558801663,0.25837577329271566,0.03838807660306698,0.49139658629912397,0.44094613033047503,0.5193247712445511,0.4703915185501304,0.9146132013304189,0.44614484864339055,0.5162269978217389,0.43171246647292016,0.3571148741713591,0.20618466447095563,0.32407176220562417,0.9022900530093692,0.03649836981877286,0.4483054354356901,0.02997457160657624,0.2655143182029681,0.4712963106007816,0.20766982344455975,0.9005391918887538,0.7075504942740096,0.1354008570256604,0.09863583144403276,0.7363755935499033,0.6839764179036935,0.5478904642875092,0.6802677267048883,0.3506961610969205,0.3492568313432849,0.0076895547193086555,0.6736904885580837,0.7526648932428954,0.23839912896046977,0.0650703303747211,0.5309062064678639,0.33073462599657,0.963565310793272,0.9683070297550347,0.6368279448225036,0.6671099480900372,0.4851237623160801,0.1680952016511874,0.05383486425467621,0.12421023502855144,0.6291563935148528,0.8363302980246293,0.6531739830087546,0.6938791778304929,0.5740556303709027,0.351617200933378,0.5655750698882506,0.6173336482479821,0.7616469172927239,0.3299478391140904,0.07567826132871103,0.357220763290093,0.9719384092802549,0.27944797797873155,0.5745036370191888,0.1812015078272472,0.5065895452172313,0.8015668614787453,0.7679404867534403,0.7067223411190454,0.09155668718166965,0.74216868829967,0.2726004006665588,0.30243665113686513,0.05676899026755877,0.9911179744241992,0.9299326008688795,0.4664035663220657,0.8398997282311477,0.23868893136523273,0.5721486340214842,0.6011562028800476,0.6506283592943992,0.0348796178212365,0.9716024060716854,0.43362284751751146,0.619163479470648,0.779780514075895,0.42617663758254987,0.14306937315436918,0.38932316549752266,0.9453860529572298,0.37959883452696397,0.7069956937332394,0.2947612254765164,0.5331963828085767,0.6552035264149408,0.08657560631812156,0.04251072477089601,0.027020651943354346,0.10242589093936938,0.2657595877870147,0.7700391146573219,0.6741929023016161,0.4786211709300825,0.9343309356116403,0.4401934105764099,0.39386321491592235,0.7052760544542549,0.1687663755654205,0.056122790390527255,0.3690253168131157,0.6002853314713099,0.7030436015997987,0.9016750773924548,0.2301468881086408,0.6211496310463994,0.5090370853378865,0.5638551062032527,0.43807826893545254,0.45075865196072107,0.989401685928392,0.13809847263103692,0.10892975596925691,0.3045069552133065,0.8042420953368201,0.7056852286831343,0.3861465802874273,0.2467163153520181,0.018834028170835904,0.30063355113157386,0.3849353998120003,0.07167064262899625,0.06906211140158847,0.5647059632634299,0.5922379032772773,0.5351311986083346,0.40888626680899465,0.9841694043300694,0.9074469222809236,0.17719290813832844,0.9502944975716504,0.8028686031457406,0.6222283033762094,0.9658557754515312,0.8935974482226962,0.18299695889536283,0.07161093850917932,0.345080004178985,0.3308548977985577,0.9919039975973255,0.6155472110111965,0.7902778058350693,0.4022156321166165,0.9983565924779843,0.4021974392592369,0.03991477473615468,0.41893978859741676,0.5149664470131492,0.2961783517392186,0.5551512162228286,0.5972806853170723,0.8573546055121758,0.8593099817177869,0.3549761772354899,0.3493626771202374,0.3187804538453265,0.3976690926545783,0.8081069522774289,0.9526550053044734,0.741156611620243,0.13537435471142478,0.31780044192954005,0.87633950690577,0.9917843967258577,0.9892956407921397,0.7448201485238664,0.5557068308739787,0.8950480789145534,0.3272349756714076,0.3251978652406122,0.9117935993468786,0.7849522805933461,0.5028994634133852,0.6558331824754744,0.7920336769596618,0.3989719701621416,0.24314077984293658,0.2849328228566973,0.808369725285055,0.46528421931778985,0.3414495947660079,0.29292086807149753,0.08346257692295167,0.6982712441103959,0.6397841776685678,0.5730130388614675,0.8577535523553685,0.24359821601194753,0.9435730298137295,0.49224203296926017,0.44382183509530226,0.49897316405543113,0.5721877781680456,0.9798091733042061,0.6757570591737718,0.8791500329492545,0.7312817496067067,0.04634857926220737,0.569344192063438,0.09429703869171357,0.7432813725920813,0.12813797992000953,0.8328863152059597,0.5963787629942446,0.16883663246158742,0.3159164219749646,0.9104660125925605,0.6338058736386347,0.03711499757538428,0.46686408668385615,0.10786002673233386,0.02534211009041798,0.3817491141627142,0.430462600835295,0.008274199184014952,0.12311276989791475,0.5627105206360439,0.3596811789364256,0.6358283335822762,0.9149590022840479,0.9203385998810653,0.8193219756350114,0.8961643154025644,0.3794186081662583,0.2795143962618686,0.15896149439349183,0.8482829662676687,0.3480509404272488,0.003836160171072245,0.22562450661771982,0.3212399680847424,0.9954577442513837,0.7430607347406913,0.028668322338328056,0.3911267441824148,0.2718383418410375,0.1901891422211609,0.04926779986222929,0.4516024900000464,0.17436635718344196,0.3842330025426256,0.20778104172548095,0.12427235260858716,0.21701712500303671,0.16096361093689115,0.4638195263138919,0.7600614191375089,0.5955448817994832,0.6231718730194763,0.1582255056801647,0.30638527960483786,0.7313081563001141,0.7340527620869246,0.5582906789689641,0.9871135989204189,0.3363417287823869,0.5474294774191983,0.36449360374085205,0.35206311578179805,0.42671617217247837,0.5562587302009288,0.3323797696800196,0.8686097097195089,0.3801367443873387,0.7150272591076685,0.5137394949579928,0.5797213256233971,0.2364379153152989,0.501535831653972,0.31390023968283975,0.6200993553038485,0.6103609534143187,0.170146665139276,0.8636719256662903,0.7459888605841691,0.23052585390209968,0.47285957680145374,0.1710166539353204,0.3402015115787306,0.22040126884748723,0.11550192432096518,0.26038641625979697,0.27742791652299936,0.07091133435499108,0.20314071920787224,0.3592534285131077,0.2727666955708078,0.2154804541153975,0.21273832971302353,0.6987003309612103,0.1599797172857822,0.9106098815550465,0.8944259066665856,0.3614614794552632,0.004936968264437236,0.682214921146777,0.025916893911975603,0.5952766246847699,0.10404614801264245,0.00830560848281614,0.6255120455676934,0.9044175618591105,0.47773869753057896,0.07185783638102727,0.1277994566682088,0.4750853462007073,0.6204543417705124,0.5850118952844471,0.4301771339994743,0.5433050570540668,0.8266823262325241,0.3289827285670115,0.9853109566817811,0.014037376718976202,0.8256168978799943,0.40708782327538495,0.5899412585146739,0.1935568689324989,0.34625963635492385,0.8851703029896731,0.3766748405986966,0.5644843720832065,0.44039541813145067,0.021599001960664777,0.5439600928471042,0.9578905585679843,0.1347224022958664,0.6819987009541743,0.04832146248676583,0.3478385495345587,0.23681069892061546,0.018689105676857665,0.18494974209096038,0.5117081741396297,0.9294048747080853,0.6835073023305912,0.8992499946718263,0.4271937611758043,0.6852957708607179,0.9080975155603843,0.4193932868180106,0.7844982182629495,0.816263015385783,0.915081461412577,0.7055758737915708,0.4959601003785874,0.88681852741353,0.8233537000913049,0.4314901967947028,0.3854476278014465,0.8311046692166603,0.9592025628606599,0.3493849836863746,0.07094271400854268,0.9975516085312585,0.03861463386365471,0.9458287823745358,0.1642357678388141,0.9759796937391185,0.8003536594089526,0.7318638059557101,0.5646134321824661,0.9296742436993278,0.817949457566608,0.5231409622577946,0.9046787275802681,0.44250065730250276,0.7969346182779035,0.6831895577747176,0.5674481434957382,0.9598824148521182,0.959580062529217,0.8002539463596811,0.00032816593054985077,0.6797771990703898,0.1715253018989744]},"selected":{"id":"37fe3c98-8879-4eed-bb05-ff65c18d5f5b","type":"Selection"},"selection_policy":{"id":"42972472-0452-4755-a499-9911bab3ae9a","type":"UnionRenderers"}},"id":"f4597d4c-a980-4054-b4ad-6e52e52891ec","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"88dd2118-796f-4320-80c3-0ce128e765de","type":"BasicTickFormatter"},"plot":{"id":"b451bf46-6692-4e08-89c0-d172855d4a5b","subtype":"Figure","type":"Plot"},"ticker":{"id":"29d20194-f5f7-4286-bf1e-473a9e5474d5","type":"BasicTicker"}},"id":"3a7b585e-c8b6-4542-abcc-1f7b3abba7d9","type":"LinearAxis"},{"attributes":{"below":[{"id":"e2397c09-4f92-415e-b594-5adb9e68f8fb","type":"LinearAxis"}],"left":[{"id":"3a7b585e-c8b6-4542-abcc-1f7b3abba7d9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e2397c09-4f92-415e-b594-5adb9e68f8fb","type":"LinearAxis"},{"id":"9f2b064b-e610-4860-ab69-61a38c7e78e2","type":"Grid"},{"id":"3a7b585e-c8b6-4542-abcc-1f7b3abba7d9","type":"LinearAxis"},{"id":"2e590484-19ad-4c18-a11f-1f58938e020e","type":"Grid"},{"id":"3d200e77-31bb-48ab-bf71-d25593212ceb","type":"GlyphRenderer"}],"title":{"id":"80c3ed1f-5a23-4f20-a4ec-693c6d298faf","type":"Title"},"toolbar":{"id":"d5a0f002-adb6-4bf6-ae92-9986924f8add","type":"Toolbar"},"x_range":{"id":"967973a6-c49b-45f7-b936-4ee1e23f08d8","type":"Range1d"},"x_scale":{"id":"ca49019f-c4f8-4a34-980f-0421e30abc65","type":"LinearScale"},"y_range":{"id":"eaa098bf-7bbf-4d8e-b611-ea556951772e","type":"Range1d"},"y_scale":{"id":"26bfa8db-96de-48a2-ae98-c0e2d3042343","type":"LinearScale"}},"id":"b451bf46-6692-4e08-89c0-d172855d4a5b","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"f4597d4c-a980-4054-b4ad-6e52e52891ec","type":"ColumnDataSource"}},"id":"1aa243d9-12f7-4b93-93cb-c3693a99ebf7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0091c72d-28f3-4cb8-9e69-17c394351486","type":"Circle"},{"attributes":{},"id":"20d8b8e9-5baa-479c-9379-8d003659f7cc","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"53008a5e-118b-4113-a2d9-09d67e7783b4","type":"Circle"},{"attributes":{},"id":"8aa9427a-98b4-4c09-b952-851d7dfe7f0a","type":"BasicTicker"},{"attributes":{},"id":"151a5942-dc1e-440d-a45c-c97c8a981f00","type":"UnionRenderers"},{"attributes":{},"id":"6b24748f-9166-4751-99d7-74d053f00663","type":"LinearScale"},{"attributes":{"data_source":{"id":"105d0aab-9264-463a-b2d7-de3c2f1810f7","type":"ColumnDataSource"},"glyph":{"id":"f0b84c7b-1824-4480-8677-b091c84b3334","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6d61d5a9-e0d3-43ef-a0e2-52d4dbd4791f","type":"Circle"},"selection_glyph":null,"view":{"id":"311440fb-7a15-4eac-88e4-72f87cbeeb02","type":"CDSView"}},"id":"3d200e77-31bb-48ab-bf71-d25593212ceb","type":"GlyphRenderer"},{"attributes":{},"id":"ca49019f-c4f8-4a34-980f-0421e30abc65","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"af7ea2bd-28f7-4dbe-8592-79243bbfc3c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"8aa9427a-98b4-4c09-b952-851d7dfe7f0a","type":"BasicTicker"}},"id":"64a57aff-b81b-4598-bf59-67d90f478cf3","type":"Grid"},{"attributes":{"formatter":{"id":"2bf6d12d-d2b7-4f52-9abd-ca4db0a8b6f9","type":"BasicTickFormatter"},"plot":{"id":"af7ea2bd-28f7-4dbe-8592-79243bbfc3c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"8aa9427a-98b4-4c09-b952-851d7dfe7f0a","type":"BasicTicker"}},"id":"bdcbb76f-1669-45fe-b722-3006cd904f5e","type":"LinearAxis"},{"attributes":{},"id":"0f925226-0acc-4812-9e01-ed997920ddd2","type":"Selection"},{"attributes":{},"id":"af7aba1f-7832-4b58-bf5f-28f31e1ce697","type":"BasicTicker"},{"attributes":{},"id":"9123d583-12fd-4d38-9a0b-07fb5aee9856","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f4597d4c-a980-4054-b4ad-6e52e52891ec","type":"ColumnDataSource"},"glyph":{"id":"53008a5e-118b-4113-a2d9-09d67e7783b4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0091c72d-28f3-4cb8-9e69-17c394351486","type":"Circle"},"selection_glyph":null,"view":{"id":"1aa243d9-12f7-4b93-93cb-c3693a99ebf7","type":"CDSView"}},"id":"b852225b-bd5b-4dba-9749-793606936708","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"80c3ed1f-5a23-4f20-a4ec-693c6d298faf","type":"Title"},{"attributes":{},"id":"0d46f6a5-b7e3-4dbf-8dd9-33e259ceca38","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"0f925226-0acc-4812-9e01-ed997920ddd2","type":"Selection"},"selection_policy":{"id":"151a5942-dc1e-440d-a45c-c97c8a981f00","type":"UnionRenderers"}},"id":"105d0aab-9264-463a-b2d7-de3c2f1810f7","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"e73a1694-dbb9-43ec-af42-265dfddab649","type":"BasicTickFormatter"},"plot":{"id":"af7ea2bd-28f7-4dbe-8592-79243bbfc3c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"af7aba1f-7832-4b58-bf5f-28f31e1ce697","type":"BasicTicker"}},"id":"2f435b64-4053-4bda-a938-0a3ae2bf441a","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15e9578c-e08a-4da7-89ac-31881eb4fcd2","type":"DataRange1d"},{"attributes":{"plot":{"id":"af7ea2bd-28f7-4dbe-8592-79243bbfc3c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"af7aba1f-7832-4b58-bf5f-28f31e1ce697","type":"BasicTicker"}},"id":"4d9ba3cb-5df5-470a-8d8f-f6ef447c67fc","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d61d5a9-e0d3-43ef-a0e2-52d4dbd4791f","type":"Circle"},{"attributes":{"below":[{"id":"2f435b64-4053-4bda-a938-0a3ae2bf441a","type":"LinearAxis"}],"left":[{"id":"bdcbb76f-1669-45fe-b722-3006cd904f5e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2f435b64-4053-4bda-a938-0a3ae2bf441a","type":"LinearAxis"},{"id":"4d9ba3cb-5df5-470a-8d8f-f6ef447c67fc","type":"Grid"},{"id":"bdcbb76f-1669-45fe-b722-3006cd904f5e","type":"LinearAxis"},{"id":"64a57aff-b81b-4598-bf59-67d90f478cf3","type":"Grid"},{"id":"39e3fc0c-d8fb-48a3-896f-0ea6a508e23d","type":"PolyAnnotation"},{"id":"b852225b-bd5b-4dba-9749-793606936708","type":"GlyphRenderer"}],"title":{"id":"42938c4f-f6cd-4ade-b699-a8f8bfc018ca","type":"Title"},"toolbar":{"id":"e533a274-671d-43d5-bcab-3a05d87f35d0","type":"Toolbar"},"x_range":{"id":"b68d4d50-fced-4726-a731-e3f204d7fdfd","type":"DataRange1d"},"x_scale":{"id":"6b24748f-9166-4751-99d7-74d053f00663","type":"LinearScale"},"y_range":{"id":"15e9578c-e08a-4da7-89ac-31881eb4fcd2","type":"DataRange1d"},"y_scale":{"id":"0d46f6a5-b7e3-4dbf-8dd9-33e259ceca38","type":"LinearScale"}},"id":"af7ea2bd-28f7-4dbe-8592-79243bbfc3c5","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"39e3fc0c-d8fb-48a3-896f-0ea6a508e23d","type":"PolyAnnotation"},{"attributes":{},"id":"e73a1694-dbb9-43ec-af42-265dfddab649","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"39e3fc0c-d8fb-48a3-896f-0ea6a508e23d","type":"PolyAnnotation"}},"id":"8b82270b-b240-42cc-883a-8e8f74d9c479","type":"LassoSelectTool"},{"attributes":{},"id":"88dd2118-796f-4320-80c3-0ce128e765de","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"b451bf46-6692-4e08-89c0-d172855d4a5b","subtype":"Figure","type":"Plot"},"ticker":{"id":"29d20194-f5f7-4286-bf1e-473a9e5474d5","type":"BasicTicker"}},"id":"2e590484-19ad-4c18-a11f-1f58938e020e","type":"Grid"},{"attributes":{},"id":"2bf6d12d-d2b7-4f52-9abd-ca4db0a8b6f9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"967973a6-c49b-45f7-b936-4ee1e23f08d8","type":"Range1d"},{"attributes":{"callback":null},"id":"b68d4d50-fced-4726-a731-e3f204d7fdfd","type":"DataRange1d"},{"attributes":{"plot":{"id":"b451bf46-6692-4e08-89c0-d172855d4a5b","subtype":"Figure","type":"Plot"},"ticker":{"id":"20d8b8e9-5baa-479c-9379-8d003659f7cc","type":"BasicTicker"}},"id":"9f2b064b-e610-4860-ab69-61a38c7e78e2","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8b82270b-b240-42cc-883a-8e8f74d9c479","type":"LassoSelectTool"}]},"id":"e533a274-671d-43d5-bcab-3a05d87f35d0","type":"Toolbar"},{"attributes":{},"id":"37fe3c98-8879-4eed-bb05-ff65c18d5f5b","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d5a0f002-adb6-4bf6-ae92-9986924f8add","type":"Toolbar"},{"attributes":{"formatter":{"id":"9123d583-12fd-4d38-9a0b-07fb5aee9856","type":"BasicTickFormatter"},"plot":{"id":"b451bf46-6692-4e08-89c0-d172855d4a5b","subtype":"Figure","type":"Plot"},"ticker":{"id":"20d8b8e9-5baa-479c-9379-8d003659f7cc","type":"BasicTicker"}},"id":"e2397c09-4f92-415e-b594-5adb9e68f8fb","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f0b84c7b-1824-4480-8677-b091c84b3334","type":"Circle"},{"attributes":{"args":{"s2":{"id":"105d0aab-9264-463a-b2d7-de3c2f1810f7","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected.indices;\\n        var d1 = cb_obj.data;\\n        var d2 = s2.data;\\n        d2[&#x27;x&#x27;] = []\\n        d2[&#x27;y&#x27;] = []\\n        for (var i = 0; i &lt; inds.length; i++) {\\n            d2[&#x27;x&#x27;].push(d1[&#x27;x&#x27;][inds[i]])\\n            d2[&#x27;y&#x27;].push(d1[&#x27;y&#x27;][inds[i]])\\n        }\\n        s2.change.emit();\\n    "},"id":"73f105ff-ad74-4e57-b4bb-7edc4c0aade4","type":"CustomJS"},{"attributes":{"plot":null,"text":"Select Here"},"id":"42938c4f-f6cd-4ade-b699-a8f8bfc018ca","type":"Title"},{"attributes":{},"id":"29d20194-f5f7-4286-bf1e-473a9e5474d5","type":"BasicTicker"},{"attributes":{"source":{"id":"105d0aab-9264-463a-b2d7-de3c2f1810f7","type":"ColumnDataSource"}},"id":"311440fb-7a15-4eac-88e4-72f87cbeeb02","type":"CDSView"},{"attributes":{},"id":"42972472-0452-4755-a499-9911bab3ae9a","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"eaa098bf-7bbf-4d8e-b611-ea556951772e","type":"Range1d"},{"attributes":{},"id":"26bfa8db-96de-48a2-ae98-c0e2d3042343","type":"LinearScale"},{"attributes":{"children":[{"id":"af7ea2bd-28f7-4dbe-8592-79243bbfc3c5","subtype":"Figure","type":"Plot"},{"id":"b451bf46-6692-4e08-89c0-d172855d4a5b","subtype":"Figure","type":"Plot"}]},"id":"8b608a7d-f0e3-4083-84ee-347c8b5107a8","type":"Row"}],"root_ids":["8b608a7d-f0e3-4083-84ee-347c8b5107a8"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"6322cb75-6c34-45c9-9bc0-c5630a9815ac","elementid":"e302e0bd-f07f-4bb7-9d54-d28fd951e391","modelid":"8b608a7d-f0e3-4083-84ee-347c8b5107a8"}];
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