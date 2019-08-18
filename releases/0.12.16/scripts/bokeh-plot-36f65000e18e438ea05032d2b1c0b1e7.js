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
      };var element = document.getElementById("46f592d6-13bd-43d8-a998-9554d477262d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '46f592d6-13bd-43d8-a998-9554d477262d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"71337104-5148-4ea5-abfb-5d60cc13ead2":{"roots":{"references":[{"attributes":{},"id":"50d9f21e-1910-4bb3-a6bd-0e5e824367c7","type":"UnionRenderers"},{"attributes":{},"id":"59451423-e0be-4bbb-9bd1-c3a460a84a87","type":"Selection"},{"attributes":{},"id":"b29da7f9-e4ac-4203-a3ee-bf58e6d8e001","type":"UnionRenderers"},{"attributes":{},"id":"476767cb-0c47-4551-99da-ddab626f12e3","type":"Selection"},{"attributes":{},"id":"f3bfc70e-ba12-4587-8f07-dda6de48acd8","type":"UnionRenderers"},{"attributes":{},"id":"1ea4d671-f513-4bbf-aeaf-a5196b7fd7e5","type":"UnionRenderers"},{"attributes":{},"id":"f4a3229f-6a4f-4501-a9e1-192370fbc795","type":"Selection"},{"attributes":{},"id":"7e94d33f-1bec-48d5-af45-c62108abe0ba","type":"UnionRenderers"},{"attributes":{},"id":"cdf485aa-4a5a-422f-9857-6b87a4b8fe99","type":"Selection"},{"attributes":{},"id":"902b21e7-6915-46db-94c3-8f670f3b9a44","type":"UnionRenderers"},{"attributes":{},"id":"572920e3-fa9c-481b-a653-776c2f4269ff","type":"Selection"},{"attributes":{},"id":"01a3b2af-28da-4e96-9e4e-5f6e1c2925eb","type":"UnionRenderers"},{"attributes":{},"id":"6724c39f-e432-4cab-881d-7d01b2d690f9","type":"Selection"},{"attributes":{},"id":"f5d70167-ec05-472e-8025-42b6fb669b45","type":"Selection"},{"attributes":{},"id":"789085cf-a210-48a5-8307-93cfbc2c5a3c","type":"Selection"},{"attributes":{},"id":"63416905-57ff-4307-96f7-49cad8f12d34","type":"Selection"},{"attributes":{"callback":null,"data":{"text":["cross / +"]},"selected":{"id":"ec5d5f87-ce03-4d07-8db2-8b44e011a820","type":"Selection"},"selection_policy":{"id":"65a8b8c4-2335-493c-a508-060915bdb1e4","type":"UnionRenderers"}},"id":"6ac01d16-57f8-4e72-b3ba-866099a41628","type":"ColumnDataSource"},{"attributes":{},"id":"186c90a1-7f01-44a1-af17-7c3e6145614a","type":"UnionRenderers"},{"attributes":{},"id":"f077c615-3882-4f13-8319-1c86d7d484bf","type":"Selection"},{"attributes":{},"id":"77f51a00-7250-4038-932e-24193e055a0c","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6ac01d16-57f8-4e72-b3ba-866099a41628","type":"ColumnDataSource"},"glyph":{"id":"46e2bd24-c0cd-493c-9f28-cc75f34092d1","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b7dd6fb8-4cb7-4078-8558-e42f8078e728","type":"Text"},"selection_glyph":null,"view":{"id":"6c80a55a-9523-4ae8-b74f-1234173ca589","type":"CDSView"}},"id":"dcf657e5-4d83-4012-944b-bc561ac430d1","type":"GlyphRenderer"},{"attributes":{},"id":"04810037-b165-44c4-aa24-bce4fd39e192","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"6ac01d16-57f8-4e72-b3ba-866099a41628","type":"ColumnDataSource"}},"id":"6c80a55a-9523-4ae8-b74f-1234173ca589","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"0da32f31-7610-458c-98d4-a6b875ae8e1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"41a01577-276b-45ea-9934-603f70be7274","type":"BasicTicker"}},"id":"6a2c3d7e-5838-46e9-a8d3-c1e194e5dbc7","type":"Grid"},{"attributes":{"data_source":{"id":"d8da328a-3160-4168-93ff-aefb88b7eb2f","type":"ColumnDataSource"},"glyph":{"id":"501785ae-86bb-47fd-a029-8968ead2e1b8","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b74c9ea3-69a4-4fe5-a5ae-de5557ca84d3","type":"SquareCross"},"selection_glyph":null,"view":{"id":"994643b6-52b3-400e-9f4e-aa83ff85a6e5","type":"CDSView"}},"id":"92167981-9b29-4a55-9c0d-1a7bd383fa1b","type":"GlyphRenderer"},{"attributes":{},"id":"ccf996d0-3f36-473e-93ba-d96fbea61e7e","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"QJCwznK6AEACqGM1ABQAQOS+3fLOwQRAVmWEGLLLA0C7YBymcsYGQAR7kv3tIQNAt2cSgPOEBkAQNhZUCjECQCJrrkWv+ARA6sMMAI7sBEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"npVD+JE4+D9eJdiY/47wP8rFCtCJ+vU/hTyBRUDk+j+gC9as0JX4P6YdpvVyj/c/wvwSoqHc+T8jElOeIW3/PxKgVOBv1/A/cCBaPF5w/z8=","dtype":"float64","shape":[10]}},"selected":{"id":"2a6654fa-7646-4260-bd0d-5cafd1a22a5f","type":"Selection"},"selection_policy":{"id":"ccf996d0-3f36-473e-93ba-d96fbea61e7e","type":"UnionRenderers"}},"id":"66d837bd-2cba-46b5-b321-abb01f447b91","type":"ColumnDataSource"},{"attributes":{"source":{"id":"d8da328a-3160-4168-93ff-aefb88b7eb2f","type":"ColumnDataSource"}},"id":"994643b6-52b3-400e-9f4e-aa83ff85a6e5","type":"CDSView"},{"attributes":{"data_source":{"id":"04cf4b43-0588-4c5f-9ae1-1df07a86afcf","type":"ColumnDataSource"},"glyph":{"id":"5dc48cae-6947-4e6f-8e38-4068a74d564d","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49d68ba2-f376-49e1-857a-224fe5483eee","type":"Asterisk"},"selection_glyph":null,"view":{"id":"0a233dc3-6d8b-4345-933b-f36330653dd3","type":"CDSView"}},"id":"44b6f071-6687-40d2-980a-d7c1f599b88d","type":"GlyphRenderer"},{"attributes":{},"id":"5195706b-84d0-4fba-8419-e4a131b15d8d","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"736afbb1-6905-4e43-a6a9-bea69b4bc1f1","type":"Diamond"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Z8hmOxkJAEDHFpsZBZkCQIdxM/fJvwFAriub/8E/AkDEPAyMRwAFQIx8O5PRMQdAcK1IKBOsA0Dks32uSBoEQFKpHV5gRARAhVMJ6PzIBUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"Q1eHbKs0EUD0VVFlHlERQDdmS2B0AhBAzRFDC97gEEDSQRlwa6YRQNwXGhUSqRFA1Ru7fsjNEkC999x47v0RQBbxiyNbuhJAI7xIc2VpE0A=","dtype":"float64","shape":[10]}},"selected":{"id":"6724c39f-e432-4cab-881d-7d01b2d690f9","type":"Selection"},"selection_policy":{"id":"186c90a1-7f01-44a1-af17-7c3e6145614a","type":"UnionRenderers"}},"id":"99cec0bd-ab63-49ce-a942-395d6db465e0","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"sJZSMI9iGEBNr7P8zMoYQEtpEEd7DBlAotBSy/kxGkAr/ORmFTIaQF97Ia/dXRlAeHlsGCDEG0B7kra0hqQZQFzVlrQmJBpA8fKkem2lGUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"g1tRELFtH0AqeyOJF4IeQIB/wds4cB9ARJNZwOsLH0B4YXRKdVYeQHLWsBTSlBxAENED9UubHUArkJ5epzceQHL44joEchxADT4BwkgOH0A=","dtype":"float64","shape":[10]}},"selected":{"id":"789085cf-a210-48a5-8307-93cfbc2c5a3c","type":"Selection"},"selection_policy":{"id":"f3bfc70e-ba12-4587-8f07-dda6de48acd8","type":"UnionRenderers"}},"id":"8ee1a753-0f03-4b9c-bd07-604adf40e322","type":"ColumnDataSource"},{"attributes":{},"id":"614210ff-35ea-4712-a306-f594f73f50ff","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"afd30d3b-524a-4fbf-8f7e-8347d9def0b7","type":"Diamond"},{"attributes":{},"id":"2a6654fa-7646-4260-bd0d-5cafd1a22a5f","type":"Selection"},{"attributes":{"data_source":{"id":"8ee1a753-0f03-4b9c-bd07-604adf40e322","type":"ColumnDataSource"},"glyph":{"id":"736afbb1-6905-4e43-a6a9-bea69b4bc1f1","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"afd30d3b-524a-4fbf-8f7e-8347d9def0b7","type":"Diamond"},"selection_glyph":null,"view":{"id":"2710da74-d108-441f-97ca-b92ac0870de1","type":"CDSView"}},"id":"e0a4b5e1-7c17-4582-8687-66e0a15f6ea9","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"xgUsclVbBkBI/EzBL5wDQGYuVR/ZOANAuFhV3P99B0BqdkEDKTIDQOx4DdPi7gFA+r+sGZZDB0CdYnfJVYYHQAOHuEyXYARAUVcQ3TSNAkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"THMXmDBnHkC517P8ltUfQCDnF+vchB5A+Xs7N2HAHkBy8sNdcSscQOy2b8Yb0x5AT2WpWJyWHUB0/v56uo8dQDrpwOxTqB9AgJdE0rLrHkA=","dtype":"float64","shape":[10]}},"selected":{"id":"476767cb-0c47-4551-99da-ddab626f12e3","type":"Selection"},"selection_policy":{"id":"1ea4d671-f513-4bbf-aeaf-a5196b7fd7e5","type":"UnionRenderers"}},"id":"3f0eb6c0-8e7a-4cea-a667-647b1a04401d","type":"ColumnDataSource"},{"attributes":{},"id":"432a94fd-4644-48ef-a88a-259c4cbce2cb","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b32e533-35d7-493f-b4e5-4b7206812677","type":"CircleCross"},{"attributes":{"source":{"id":"8ee1a753-0f03-4b9c-bd07-604adf40e322","type":"ColumnDataSource"}},"id":"2710da74-d108-441f-97ca-b92ac0870de1","type":"CDSView"},{"attributes":{},"id":"ce08a716-bc88-4156-9a26-c582597985f3","type":"Selection"},{"attributes":{"data_source":{"id":"3f0eb6c0-8e7a-4cea-a667-647b1a04401d","type":"ColumnDataSource"},"glyph":{"id":"0d421f48-dbb2-40ad-9ebd-a05c875ea747","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9b32e533-35d7-493f-b4e5-4b7206812677","type":"CircleCross"},"selection_glyph":null,"view":{"id":"78ab46d1-c437-427f-b7e6-f6bdc80568a8","type":"CDSView"}},"id":"29a457fb-ab96-465e-bc92-d9eccf41d77f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"c898cb68-8fe2-4649-9eca-918775a10cf2","type":"Cross"},{"attributes":{},"id":"63345ae4-b3ec-4dde-9d33-7607cb4fd2f4","type":"UnionRenderers"},{"attributes":{"source":{"id":"3f0eb6c0-8e7a-4cea-a667-647b1a04401d","type":"ColumnDataSource"}},"id":"78ab46d1-c437-427f-b7e6-f6bdc80568a8","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"d5jZTF1MIUDPmfupvp8hQF/4A7ZKPCFAgnMyrsUnIEDegI4PcyYhQHoey8SkmCBAxmt2lYHdIECXVNBGPZAgQAsAhCT1pSFA/Av8SmUBIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"PykMMVp+HECRFyMm2HccQCZeQZleDxxAixn1GTrlH0C2aKxY/2EeQLV/K0Ebmh9AxrqNoKa3HkBl0eWVrC0fQAR6S9GtHB1ACRbKSmJaHUA=","dtype":"float64","shape":[10]}},"selected":{"id":"f5d70167-ec05-472e-8025-42b6fb669b45","type":"Selection"},"selection_policy":{"id":"50d9f21e-1910-4bb3-a6bd-0e5e824367c7","type":"UnionRenderers"}},"id":"29e028e4-2870-4d18-951e-307e9e1d0449","type":"ColumnDataSource"},{"attributes":{},"id":"414b0d58-55c3-4ad7-aaaa-cd5fb922daf1","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"501785ae-86bb-47fd-a029-8968ead2e1b8","type":"SquareCross"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1cf27e76-dd2c-4e67-ac8e-c664f06d74be","type":"Cross"},{"attributes":{},"id":"020519bd-50f7-4c9f-b1b9-31b6b71c9770","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"29e028e4-2870-4d18-951e-307e9e1d0449","type":"ColumnDataSource"},"glyph":{"id":"c898cb68-8fe2-4649-9eca-918775a10cf2","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1cf27e76-dd2c-4e67-ac8e-c664f06d74be","type":"Cross"},"selection_glyph":null,"view":{"id":"caf9903d-1f3e-451d-8def-7bfffc2bdbf6","type":"CDSView"}},"id":"7788a966-33fb-4333-8ede-4685de6ede52","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"rL+19DMtEkAZFJFrOYYSQD8vHUrdNBNArAENdBEKEkBlwoZsqVgTQGw+dMTFpRJALMpubn1MEEB0i10ZC24TQN9r38TLuhJA+XrWkUqkEUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"v7oGD8VbHUAjMBD0IHMeQOFbKPasfB1AgDCLxhnwHUCA+HueEewdQAOUisBd0xxALDoz5QTHHUD4y95SzjIfQB9L177chR5AUgCYkJdGHkA=","dtype":"float64","shape":[10]}},"selected":{"id":"59451423-e0be-4bbb-9bd1-c3a460a84a87","type":"Selection"},"selection_policy":{"id":"b29da7f9-e4ac-4203-a3ee-bf58e6d8e001","type":"UnionRenderers"}},"id":"d8da328a-3160-4168-93ff-aefb88b7eb2f","type":"ColumnDataSource"},{"attributes":{},"id":"beada952-69f6-470c-baa0-486989dc31c0","type":"UnionRenderers"},{"attributes":{"source":{"id":"29e028e4-2870-4d18-951e-307e9e1d0449","type":"ColumnDataSource"}},"id":"caf9903d-1f3e-451d-8def-7bfffc2bdbf6","type":"CDSView"},{"attributes":{},"id":"f23f2137-676c-4ba4-b541-7b91f4b14a60","type":"Selection"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"3b1933b5-9599-4e76-ab04-bf215bbe1bcc","type":"Text"},{"attributes":{},"id":"cf49013f-9de0-46b5-a312-55509e02e5c4","type":"Selection"},{"attributes":{"data_source":{"id":"66d837bd-2cba-46b5-b321-abb01f447b91","type":"ColumnDataSource"},"glyph":{"id":"88b0009f-3579-49c9-a82b-3755e13acaba","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4d5a07c6-6fec-4d5f-a947-d5d42220153a","type":"Circle"},"selection_glyph":null,"view":{"id":"66f10afe-9f78-485b-9dc1-7a6753d4700f","type":"CDSView"}},"id":"d292f72b-8f57-4b79-87b9-94d8c8281c84","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["circle / o"]},"selected":{"id":"414b0d58-55c3-4ad7-aaaa-cd5fb922daf1","type":"Selection"},"selection_policy":{"id":"beada952-69f6-470c-baa0-486989dc31c0","type":"UnionRenderers"}},"id":"abfe5058-d849-43f0-8869-2c3040ce1fb8","type":"ColumnDataSource"},{"attributes":{},"id":"902bdeff-80bc-4021-8438-bc76179280ca","type":"UnionRenderers"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"295a59a0-22a5-4f68-afbf-66887bf723ed","type":"LinearAxis"}],"left":[{"id":"44565d70-4a87-47f5-8695-148e9d3f64ca","type":"LinearAxis"}],"renderers":[{"id":"295a59a0-22a5-4f68-afbf-66887bf723ed","type":"LinearAxis"},{"id":"8c02d868-5642-401d-bc9e-77afe7ecb1a3","type":"Grid"},{"id":"44565d70-4a87-47f5-8695-148e9d3f64ca","type":"LinearAxis"},{"id":"6a2c3d7e-5838-46e9-a8d3-c1e194e5dbc7","type":"Grid"},{"id":"3274b5ea-ee05-40f4-bbce-ac97d113ce58","type":"BoxAnnotation"},{"id":"d292f72b-8f57-4b79-87b9-94d8c8281c84","type":"GlyphRenderer"},{"id":"a0b99953-5f60-4e30-9582-2eed7c145c5c","type":"GlyphRenderer"},{"id":"5985c9fd-6e5a-4b6d-a069-bf1eae3c2b90","type":"GlyphRenderer"},{"id":"44b6f071-6687-40d2-980a-d7c1f599b88d","type":"GlyphRenderer"},{"id":"7e593bec-9628-48f7-a456-70e56a65cf07","type":"GlyphRenderer"},{"id":"ba973a2a-f804-46fe-a163-17062a6f1c36","type":"GlyphRenderer"},{"id":"7f78382c-4da4-4a37-8a99-c6b11fb2a1bd","type":"GlyphRenderer"},{"id":"bd219ecb-ddc2-48ef-8886-11ae173c7bfb","type":"GlyphRenderer"},{"id":"29a457fb-ab96-465e-bc92-d9eccf41d77f","type":"GlyphRenderer"},{"id":"92167981-9b29-4a55-9c0d-1a7bd383fa1b","type":"GlyphRenderer"},{"id":"e0a4b5e1-7c17-4582-8687-66e0a15f6ea9","type":"GlyphRenderer"},{"id":"7788a966-33fb-4333-8ede-4685de6ede52","type":"GlyphRenderer"},{"id":"65dd7ed7-6f97-4167-871f-1789a7b40fd7","type":"GlyphRenderer"},{"id":"6c10a24d-a76d-452f-ada3-18fc2ac7b72b","type":"GlyphRenderer"},{"id":"eb40acc6-fbda-42d0-b6e1-febf8b5075f0","type":"GlyphRenderer"},{"id":"7a7d6d12-95ea-411d-a3bc-c6dc734d1afd","type":"GlyphRenderer"},{"id":"7213c7fa-3564-4cd0-8644-1810292a051f","type":"GlyphRenderer"},{"id":"c3cd43df-784f-41fe-8d7f-d215972d071b","type":"GlyphRenderer"},{"id":"9395d4bf-299d-4ef0-859d-03cdf5f6c3dd","type":"GlyphRenderer"},{"id":"edd9ea1b-9237-46d6-9648-f1e42e9ad162","type":"GlyphRenderer"},{"id":"a9eb53a3-7a34-4abb-b9d7-77e98bc1d5f8","type":"GlyphRenderer"},{"id":"fd9adc8b-1bc8-42bf-84c5-536518ca8787","type":"GlyphRenderer"},{"id":"025a85f0-d270-4027-af61-4e4d6a7554cb","type":"GlyphRenderer"},{"id":"dcf657e5-4d83-4012-944b-bc561ac430d1","type":"GlyphRenderer"}],"title":{"id":"f08e14c1-e392-4879-a667-aef9f7a71c8d","type":"Title"},"toolbar":{"id":"39df37e2-338c-4bf8-8981-d35dd9b8143c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1a934f36-e68f-42f3-a66d-1af92a4c68aa","type":"DataRange1d"},"x_scale":{"id":"87199844-5f3b-4a4c-a53b-22303910145e","type":"LinearScale"},"y_range":{"id":"3d648e98-5c27-43de-ae8b-c76936162fa7","type":"DataRange1d"},"y_scale":{"id":"0fc75ec3-9138-4a58-abbf-54d6c5710ead","type":"LinearScale"}},"id":"0da32f31-7610-458c-98d4-a6b875ae8e1f","subtype":"Figure","type":"Plot"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"e5f9aff2-b100-41ab-8262-45b650f1e689","type":"Text"},{"attributes":{},"id":"68d32767-ecc5-425f-8262-6de1828e64f1","type":"Selection"},{"attributes":{"plot":null,"text":"Bokeh Markers"},"id":"f08e14c1-e392-4879-a667-aef9f7a71c8d","type":"Title"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"a98f3c26-d831-4c86-9d13-765edf55502c","type":"Text"},{"attributes":{},"id":"20079ab2-4dc3-4ca0-93f3-4af81ccd58d3","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"1a934f36-e68f-42f3-a66d-1af92a4c68aa","type":"DataRange1d"},{"attributes":{"data_source":{"id":"abfe5058-d849-43f0-8869-2c3040ce1fb8","type":"ColumnDataSource"},"glyph":{"id":"3b1933b5-9599-4e76-ab04-bf215bbe1bcc","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e5f9aff2-b100-41ab-8262-45b650f1e689","type":"Text"},"selection_glyph":null,"view":{"id":"fc312c99-e56f-4122-9920-ee34f27dacb2","type":"CDSView"}},"id":"65dd7ed7-6f97-4167-871f-1789a7b40fd7","type":"GlyphRenderer"},{"attributes":{},"id":"63e95a60-7754-44d7-bca4-0051d0af7cdf","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fa097aa2-7b6f-4ec2-830c-d26a25317f7e","type":"PanTool"},{"id":"759861a3-e9e6-4b02-9906-e725cb057fc1","type":"WheelZoomTool"},{"id":"05f65bb1-3f8f-4ef6-8bd2-08c0f2eeedc0","type":"BoxZoomTool"},{"id":"55cbc209-9621-48ad-b508-6978c8ad36aa","type":"SaveTool"},{"id":"a7e86a8d-64c2-4bdb-858f-69b2d9d0ca5a","type":"ResetTool"},{"id":"83772a89-3e06-4a90-aaa9-bb5124c838a1","type":"HelpTool"}]},"id":"39df37e2-338c-4bf8-8981-d35dd9b8143c","type":"Toolbar"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"73c19a2a-1a37-4f08-86a1-4d0edb6cff58","type":"Text"},{"attributes":{},"id":"3baafc59-394f-4910-adfb-d89441d17748","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"88b0009f-3579-49c9-a82b-3755e13acaba","type":"Circle"},{"attributes":{"source":{"id":"abfe5058-d849-43f0-8869-2c3040ce1fb8","type":"ColumnDataSource"}},"id":"fc312c99-e56f-4122-9920-ee34f27dacb2","type":"CDSView"},{"attributes":{},"id":"386fcb68-915b-49c6-8ae7-0ec702091881","type":"Selection"},{"attributes":{"callback":null,"data":{"text":["square"]},"selected":{"id":"614210ff-35ea-4712-a306-f594f73f50ff","type":"Selection"},"selection_policy":{"id":"020519bd-50f7-4c9f-b1b9-31b6b71c9770","type":"UnionRenderers"}},"id":"72595f67-230f-4467-af96-1a70da425250","type":"ColumnDataSource"},{"attributes":{},"id":"a7e86a8d-64c2-4bdb-858f-69b2d9d0ca5a","type":"ResetTool"},{"attributes":{},"id":"be40bc38-3bab-4c6a-8111-38fb6698969c","type":"UnionRenderers"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"280eccd5-d3d5-4523-b5fc-e56df230f706","type":"Text"},{"attributes":{},"id":"83772a89-3e06-4a90-aaa9-bb5124c838a1","type":"HelpTool"},{"attributes":{},"id":"ed2752de-16fe-45f4-aac2-a693688f244b","type":"Selection"},{"attributes":{"data_source":{"id":"72595f67-230f-4467-af96-1a70da425250","type":"ColumnDataSource"},"glyph":{"id":"a98f3c26-d831-4c86-9d13-765edf55502c","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73c19a2a-1a37-4f08-86a1-4d0edb6cff58","type":"Text"},"selection_glyph":null,"view":{"id":"0316d615-6d2a-4233-a14c-f5f27a20894e","type":"CDSView"}},"id":"6c10a24d-a76d-452f-ada3-18fc2ac7b72b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"61fe0671-0fec-40f6-a658-f56929890206","type":"Square"},{"attributes":{},"id":"6ddf466d-2c4d-4df9-a237-b5a1b4b6a4f3","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d113924-d796-42a7-bb55-4f984837a1ec","type":"Square"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"6e13db23-1e11-492c-a30c-0a7b15268b80","type":"Text"},{"attributes":{},"id":"ef10d9b7-3b50-4cb0-b9a0-4a4d4246c88c","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"NaK7MqFyEUB4rloqImwRQC1ftUg7qRNAtXUIvtkiE0DmrNqg/ygTQHmhCUMZ6RNAeVt14YqwEUCfx2I3GGcRQOBgWpP+hRFA6Df6pe+tEkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"SiUH4jay/T+GyMcDJjz5P8zAqxgarvE/MFXYyC8C8z9SRFCf9/v/P7cj7sg0YPA/V/TkLTIr/j9Au+MuStPyP32Yl0X+nvw/DGvJb+u6+z8=","dtype":"float64","shape":[10]}},"selected":{"id":"f622ce17-38ac-4007-843f-7c351ea16e08","type":"Selection"},"selection_policy":{"id":"63345ae4-b3ec-4dde-9d33-7607cb4fd2f4","type":"UnionRenderers"}},"id":"465cbac5-745e-497f-be3c-888a68334ad7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72595f67-230f-4467-af96-1a70da425250","type":"ColumnDataSource"}},"id":"0316d615-6d2a-4233-a14c-f5f27a20894e","type":"CDSView"},{"attributes":{},"id":"151488ed-cf91-43d9-96f8-a3ded4fab248","type":"UnionRenderers"},{"attributes":{},"id":"87199844-5f3b-4a4c-a53b-22303910145e","type":"LinearScale"},{"attributes":{"callback":null,"data":{"text":["triangle"]},"selected":{"id":"ce08a716-bc88-4156-9a26-c582597985f3","type":"Selection"},"selection_policy":{"id":"902bdeff-80bc-4021-8438-bc76179280ca","type":"UnionRenderers"}},"id":"0d712d29-48a6-465a-935b-c8543e66d137","type":"ColumnDataSource"},{"attributes":{},"id":"ec5d5f87-ce03-4d07-8db2-8b44e011a820","type":"Selection"},{"attributes":{"callback":null},"id":"3d648e98-5c27-43de-ae8b-c76936162fa7","type":"DataRange1d"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"48c2f9b5-bbd1-4e43-b0a7-25187a73fbf5","type":"Text"},{"attributes":{},"id":"79691661-38ec-4f40-bf55-e370b7eb5d27","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"0d712d29-48a6-465a-935b-c8543e66d137","type":"ColumnDataSource"},"glyph":{"id":"280eccd5-d3d5-4523-b5fc-e56df230f706","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6e13db23-1e11-492c-a30c-0a7b15268b80","type":"Text"},"selection_glyph":null,"view":{"id":"1c003879-23ff-4510-b22b-4b139f3c6f22","type":"CDSView"}},"id":"eb40acc6-fbda-42d0-b6e1-febf8b5075f0","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"3274b5ea-ee05-40f4-bbce-ac97d113ce58","type":"BoxAnnotation"}},"id":"05f65bb1-3f8f-4ef6-8bd2-08c0f2eeedc0","type":"BoxZoomTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"e611e48b-eecc-454f-810e-460820b7407d","type":"Text"},{"attributes":{},"id":"55cbc209-9621-48ad-b508-6978c8ad36aa","type":"SaveTool"},{"attributes":{},"id":"9c36ca34-8f88-4310-a08a-58a89d1ce1b0","type":"UnionRenderers"},{"attributes":{"source":{"id":"66d837bd-2cba-46b5-b321-abb01f447b91","type":"ColumnDataSource"}},"id":"66f10afe-9f78-485b-9dc1-7a6753d4700f","type":"CDSView"},{"attributes":{"source":{"id":"0d712d29-48a6-465a-935b-c8543e66d137","type":"ColumnDataSource"}},"id":"1c003879-23ff-4510-b22b-4b139f3c6f22","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["asterisk / *"]},"selected":{"id":"432a94fd-4644-48ef-a88a-259c4cbce2cb","type":"Selection"},"selection_policy":{"id":"20079ab2-4dc3-4ca0-93f3-4af81ccd58d3","type":"UnionRenderers"}},"id":"4798e64b-564b-4863-9869-8bb23a0ab98f","type":"ColumnDataSource"},{"attributes":{},"id":"759861a3-e9e6-4b02-9906-e725cb057fc1","type":"WheelZoomTool"},{"attributes":{},"id":"2490e234-9863-4105-a3f1-34394f83d5ea","type":"UnionRenderers"},{"attributes":{},"id":"0fc75ec3-9138-4a58-abbf-54d6c5710ead","type":"LinearScale"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"154bcce9-e3a8-4489-aebc-318ff1e67994","type":"Text"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0da32f31-7610-458c-98d4-a6b875ae8e1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b264fee4-7f4c-4116-841d-1a0cb44441d5","type":"BasicTicker"}},"id":"8c02d868-5642-401d-bc9e-77afe7ecb1a3","type":"Grid"},{"attributes":{"data_source":{"id":"4798e64b-564b-4863-9869-8bb23a0ab98f","type":"ColumnDataSource"},"glyph":{"id":"48c2f9b5-bbd1-4e43-b0a7-25187a73fbf5","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e611e48b-eecc-454f-810e-460820b7407d","type":"Text"},"selection_glyph":null,"view":{"id":"25e5763f-a1a9-44f1-975a-af67eef9fac3","type":"CDSView"}},"id":"7a7d6d12-95ea-411d-a3bc-c6dc734d1afd","type":"GlyphRenderer"},{"attributes":{},"id":"65a8b8c4-2335-493c-a508-060915bdb1e4","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"04810037-b165-44c4-aa24-bce4fd39e192","type":"BasicTickFormatter"},"plot":{"id":"0da32f31-7610-458c-98d4-a6b875ae8e1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b264fee4-7f4c-4116-841d-1a0cb44441d5","type":"BasicTicker"},"visible":false},"id":"295a59a0-22a5-4f68-afbf-66887bf723ed","type":"LinearAxis"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"f09ae956-d0a6-4e41-9f8e-ea851f684a35","type":"Text"},{"attributes":{},"id":"b264fee4-7f4c-4116-841d-1a0cb44441d5","type":"BasicTicker"},{"attributes":{"source":{"id":"4798e64b-564b-4863-9869-8bb23a0ab98f","type":"ColumnDataSource"}},"id":"25e5763f-a1a9-44f1-975a-af67eef9fac3","type":"CDSView"},{"attributes":{"formatter":{"id":"5195706b-84d0-4fba-8419-e4a131b15d8d","type":"BasicTickFormatter"},"plot":{"id":"0da32f31-7610-458c-98d4-a6b875ae8e1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"41a01577-276b-45ea-9934-603f70be7274","type":"BasicTicker"},"visible":false},"id":"44565d70-4a87-47f5-8695-148e9d3f64ca","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"text":["circle_x / ox"]},"selected":{"id":"f23f2137-676c-4ba4-b541-7b91f4b14a60","type":"Selection"},"selection_policy":{"id":"3baafc59-394f-4910-adfb-d89441d17748","type":"UnionRenderers"}},"id":"76e799b8-d2fb-40dc-a2f2-920e86a7a7d4","type":"ColumnDataSource"},{"attributes":{},"id":"41a01577-276b-45ea-9934-603f70be7274","type":"BasicTicker"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"5f5512d5-d286-4e20-a8eb-013c5c1759c3","type":"Text"},{"attributes":{"data_source":{"id":"76e799b8-d2fb-40dc-a2f2-920e86a7a7d4","type":"ColumnDataSource"},"glyph":{"id":"154bcce9-e3a8-4489-aebc-318ff1e67994","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f09ae956-d0a6-4e41-9f8e-ea851f684a35","type":"Text"},"selection_glyph":null,"view":{"id":"ef24d787-433c-42bc-9d47-21b881e5cc09","type":"CDSView"}},"id":"7213c7fa-3564-4cd0-8644-1810292a051f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d5a07c6-6fec-4d5f-a947-d5d42220153a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b74c9ea3-69a4-4fe5-a5ae-de5557ca84d3","type":"SquareCross"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"a4a4ed8d-9de9-4345-b67c-b3df04aab457","type":"Text"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3274b5ea-ee05-40f4-bbce-ac97d113ce58","type":"BoxAnnotation"},{"attributes":{"source":{"id":"76e799b8-d2fb-40dc-a2f2-920e86a7a7d4","type":"ColumnDataSource"}},"id":"ef24d787-433c-42bc-9d47-21b881e5cc09","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["square_x"]},"selected":{"id":"cf49013f-9de0-46b5-a312-55509e02e5c4","type":"Selection"},"selection_policy":{"id":"be40bc38-3bab-4c6a-8111-38fb6698969c","type":"UnionRenderers"}},"id":"db107b0b-5a3e-45e1-ac9e-8d207457e1f7","type":"ColumnDataSource"},{"attributes":{},"id":"fa097aa2-7b6f-4ec2-830c-d26a25317f7e","type":"PanTool"},{"attributes":{"data_source":{"id":"465cbac5-745e-497f-be3c-888a68334ad7","type":"ColumnDataSource"},"glyph":{"id":"3d113924-d796-42a7-bb55-4f984837a1ec","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61fe0671-0fec-40f6-a658-f56929890206","type":"Square"},"selection_glyph":null,"view":{"id":"6b513fb3-ea19-4173-b3a2-e9d535a2bc46","type":"CDSView"}},"id":"a0b99953-5f60-4e30-9582-2eed7c145c5c","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"a25458b6-b8c7-4fb8-832a-82cc621315d4","type":"Text"},{"attributes":{"data_source":{"id":"db107b0b-5a3e-45e1-ac9e-8d207457e1f7","type":"ColumnDataSource"},"glyph":{"id":"5f5512d5-d286-4e20-a8eb-013c5c1759c3","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a4a4ed8d-9de9-4345-b67c-b3df04aab457","type":"Text"},"selection_glyph":null,"view":{"id":"31f1cef1-de4f-4603-94cb-6e0b3ae19c2c","type":"CDSView"}},"id":"c3cd43df-784f-41fe-8d7f-d215972d071b","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"CZNPQv/cEkBx+AvOKooRQBwYH7V0BhJAFHcKvBGrEECwx+WT3KIQQNHHBYLfDhJALH3Cpe1JEUDQsT5elpYQQBiqJz5kuRBAJnoAnzBYEUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"QPYXBvF/EEBTNjELyTsQQOiKcgdbLhJAnDLiRDtqEUDd+CQKDLgSQFSSnj2gLBBAFHnwYOf6E0CBbo87ME4QQFTnsLig2hNA9qKYzCEpEEA=","dtype":"float64","shape":[10]}},"selected":{"id":"572920e3-fa9c-481b-a653-776c2f4269ff","type":"Selection"},"selection_policy":{"id":"01a3b2af-28da-4e96-9e4e-5f6e1c2925eb","type":"UnionRenderers"}},"id":"bc532988-7bd0-46e8-965c-d20b21779b92","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2425cd60-c1fd-4397-be8b-e1460c89d94e","type":"SquareX"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"4425cf47-3291-40b1-bdb4-1af99fa9e5f7","type":"Text"},{"attributes":{"data_source":{"id":"bc532988-7bd0-46e8-965c-d20b21779b92","type":"ColumnDataSource"},"glyph":{"id":"e1ff545c-2d34-470b-b6f8-5a354c8ff9c7","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2425cd60-c1fd-4397-be8b-e1460c89d94e","type":"SquareX"},"selection_glyph":null,"view":{"id":"ee5cae69-a13a-40cd-affe-3e2245c43c1c","type":"CDSView"}},"id":"ba973a2a-f804-46fe-a163-17062a6f1c36","type":"GlyphRenderer"},{"attributes":{"source":{"id":"db107b0b-5a3e-45e1-ac9e-8d207457e1f7","type":"ColumnDataSource"}},"id":"31f1cef1-de4f-4603-94cb-6e0b3ae19c2c","type":"CDSView"},{"attributes":{"source":{"id":"bc532988-7bd0-46e8-965c-d20b21779b92","type":"ColumnDataSource"}},"id":"ee5cae69-a13a-40cd-affe-3e2245c43c1c","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["inverted_triangle"]},"selected":{"id":"68d32767-ecc5-425f-8262-6de1828e64f1","type":"Selection"},"selection_policy":{"id":"6ddf466d-2c4d-4df9-a237-b5a1b4b6a4f3","type":"UnionRenderers"}},"id":"b91ed4ed-f38d-442c-9593-9891598c6c7c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf6a69ed-759c-46e4-ba8b-c608348c7199","type":"InvertedTriangle"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"48a876f3-e09a-491d-afef-e6ed9bdcb11f","type":"Text"},{"attributes":{"data_source":{"id":"7a39d779-77a9-433d-bb4a-8878bf86dd43","type":"ColumnDataSource"},"glyph":{"id":"03232d8b-7248-4ef9-ae22-2702329cad7a","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8335c470-5716-44ef-b129-815dba607118","type":"Triangle"},"selection_glyph":null,"view":{"id":"96c4aba8-1ca1-4249-8840-7e0fdbfe79ee","type":"CDSView"}},"id":"5985c9fd-6e5a-4b6d-a069-bf1eae3c2b90","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b91ed4ed-f38d-442c-9593-9891598c6c7c","type":"ColumnDataSource"},"glyph":{"id":"a25458b6-b8c7-4fb8-832a-82cc621315d4","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4425cf47-3291-40b1-bdb4-1af99fa9e5f7","type":"Text"},"selection_glyph":null,"view":{"id":"f06074b3-5cd6-4def-b722-a5aee6d2aed5","type":"CDSView"}},"id":"9395d4bf-299d-4ef0-859d-03cdf5f6c3dd","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"03232d8b-7248-4ef9-ae22-2702329cad7a","type":"Triangle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"74371bb8-a738-42be-a6b9-6311c0596f60","type":"Text"},{"attributes":{"source":{"id":"99cec0bd-ab63-49ce-a942-395d6db465e0","type":"ColumnDataSource"}},"id":"b624a557-f96d-441d-8ee4-592a11e1e49e","type":"CDSView"},{"attributes":{"source":{"id":"b91ed4ed-f38d-442c-9593-9891598c6c7c","type":"ColumnDataSource"}},"id":"f06074b3-5cd6-4def-b722-a5aee6d2aed5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1ff545c-2d34-470b-b6f8-5a354c8ff9c7","type":"SquareX"},{"attributes":{"callback":null,"data":{"text":["x"]},"selected":{"id":"63e95a60-7754-44d7-bca4-0051d0af7cdf","type":"Selection"},"selection_policy":{"id":"151488ed-cf91-43d9-96f8-a3ded4fab248","type":"UnionRenderers"}},"id":"7b44d65f-6259-49f5-8870-6afe198486b1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"369bffc8-a2e7-4d4f-b8a3-7348119591d3","type":"CircleX"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"80d60563-876c-4fc5-9c95-8b001408082c","type":"Text"},{"attributes":{"data_source":{"id":"99cec0bd-ab63-49ce-a942-395d6db465e0","type":"ColumnDataSource"},"glyph":{"id":"bb8b2583-5e0e-477d-974d-d905c5591930","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"369bffc8-a2e7-4d4f-b8a3-7348119591d3","type":"CircleX"},"selection_glyph":null,"view":{"id":"b624a557-f96d-441d-8ee4-592a11e1e49e","type":"CDSView"}},"id":"7e593bec-9628-48f7-a456-70e56a65cf07","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7b44d65f-6259-49f5-8870-6afe198486b1","type":"ColumnDataSource"},"glyph":{"id":"48a876f3-e09a-491d-afef-e6ed9bdcb11f","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74371bb8-a738-42be-a6b9-6311c0596f60","type":"Text"},"selection_glyph":null,"view":{"id":"cf669b8e-282a-4b0d-95fc-dc261222b6b7","type":"CDSView"}},"id":"edd9ea1b-9237-46d6-9648-f1e42e9ad162","type":"GlyphRenderer"},{"attributes":{"source":{"id":"465cbac5-745e-497f-be3c-888a68334ad7","type":"ColumnDataSource"}},"id":"6b513fb3-ea19-4173-b3a2-e9d535a2bc46","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"f76aea6a-1938-4aeb-a287-89870fe4e30b","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8335c470-5716-44ef-b129-815dba607118","type":"Triangle"},{"attributes":{"source":{"id":"7b44d65f-6259-49f5-8870-6afe198486b1","type":"ColumnDataSource"}},"id":"cf669b8e-282a-4b0d-95fc-dc261222b6b7","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"rAYubaEpGEDMWPNHCJMYQHwQdQ3nXRtAShfh3X9nGEDiSGG6SGUbQKyG0z6kdBlA6UZYpX2hG0B6QudWthYbQM5QZ+tMNxhADRZRrmHbGUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"5hmsGQ2s8j+KFJQUFhX4P3N6gE3H8/8/gRPOMqfO/j9ZsktuOFXzPwSXqP/KcPE/E6cnNfO3+D94bC2H4FL5P9JNWeEzifo/HP+Y3uy++D8=","dtype":"float64","shape":[10]}},"selected":{"id":"f077c615-3882-4f13-8319-1c86d7d484bf","type":"Selection"},"selection_policy":{"id":"2dce2188-158c-4a91-84ee-878d43266593","type":"UnionRenderers"}},"id":"7a39d779-77a9-433d-bb4a-8878bf86dd43","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["circle_cross / o+"]},"selected":{"id":"386fcb68-915b-49c6-8ae7-0ec702091881","type":"Selection"},"selection_policy":{"id":"79691661-38ec-4f40-bf55-e370b7eb5d27","type":"UnionRenderers"}},"id":"b29eb357-d94d-4c13-a934-57bc1a7f7c77","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7a39d779-77a9-433d-bb4a-8878bf86dd43","type":"ColumnDataSource"}},"id":"96c4aba8-1ca1-4249-8840-7e0fdbfe79ee","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"b13cc245-1ab3-4f3e-b76d-23f7992ae5d5","type":"Text"},{"attributes":{"data_source":{"id":"b29eb357-d94d-4c13-a934-57bc1a7f7c77","type":"ColumnDataSource"},"glyph":{"id":"80d60563-876c-4fc5-9c95-8b001408082c","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f76aea6a-1938-4aeb-a287-89870fe4e30b","type":"Text"},"selection_glyph":null,"view":{"id":"11cf1435-bae1-40dd-90f3-a3c0bdefd704","type":"CDSView"}},"id":"a9eb53a3-7a34-4abb-b9d7-77e98bc1d5f8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"5dc48cae-6947-4e6f-8e38-4068a74d564d","type":"Asterisk"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"yMNaJslhIUAtQEX1prMgQCRSDLLiziBAPOQQYQ57IUCS/Cx7iB4gQHalprK4MCBAzGOceB68IUDBDNbgWWUhQHemqzImziBAjbgnt+/BIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"PKReFlti+T/OwrD69MzyP7X+8l4aqfA/LPG0Dy1e8T8SJmymjaH7PzSgJnx5b/Q/Ly60zQSF9j8WE0s+RTL9P3D40yI0z/w/RB4Wd/uY/D8=","dtype":"float64","shape":[10]}},"selected":{"id":"63416905-57ff-4307-96f7-49cad8f12d34","type":"Selection"},"selection_policy":{"id":"77f51a00-7250-4038-932e-24193e055a0c","type":"UnionRenderers"}},"id":"04cf4b43-0588-4c5f-9ae1-1df07a86afcf","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"8f514df5-f67f-421d-b1ae-a78f3ef43dc8","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"49d68ba2-f376-49e1-857a-224fe5483eee","type":"Asterisk"},{"attributes":{"source":{"id":"b29eb357-d94d-4c13-a934-57bc1a7f7c77","type":"ColumnDataSource"}},"id":"11cf1435-bae1-40dd-90f3-a3c0bdefd704","type":"CDSView"},{"attributes":{"source":{"id":"04cf4b43-0588-4c5f-9ae1-1df07a86afcf","type":"ColumnDataSource"}},"id":"0a233dc3-6d8b-4345-933b-f36330653dd3","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["square_cross"]},"selected":{"id":"ed2752de-16fe-45f4-aac2-a693688f244b","type":"Selection"},"selection_policy":{"id":"9c36ca34-8f88-4310-a08a-58a89d1ce1b0","type":"UnionRenderers"}},"id":"f8266e29-d3ea-4b90-ba9d-39af77044afb","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb8b2583-5e0e-477d-974d-d905c5591930","type":"CircleX"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"2d6fabe6-c82b-4f92-b227-71ed65283c94","type":"Text"},{"attributes":{"data_source":{"id":"f8266e29-d3ea-4b90-ba9d-39af77044afb","type":"ColumnDataSource"},"glyph":{"id":"b13cc245-1ab3-4f3e-b76d-23f7992ae5d5","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8f514df5-f67f-421d-b1ae-a78f3ef43dc8","type":"Text"},"selection_glyph":null,"view":{"id":"8520ae70-8aa8-4a5a-b7ca-1deb4b282e01","type":"CDSView"}},"id":"fd9adc8b-1bc8-42bf-84c5-536518ca8787","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Isny0xpvGUBgzYcwttIaQOZw+M1KjRtAnXt9QPyXGUAioqEjX5kZQNwG6y9/bhlAeUaCJKL/GUCiDO9m50MaQLfA2hnirhpAfs64CGi1GUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"awXjuEoDE0BuSty+pY0QQGI/v7m5fhJAmsAGZyN/E0AesuTGBwgSQEzZrfRskBJA5nwEQaRYEUDSovsWBPsTQJBk70BkoBBAVRiAxRieEkA=","dtype":"float64","shape":[10]}},"selected":{"id":"cdf485aa-4a5a-422f-9857-6b87a4b8fe99","type":"Selection"},"selection_policy":{"id":"902b21e7-6915-46db-94c3-8f670f3b9a44","type":"UnionRenderers"}},"id":"731f5e6b-b9a5-4927-bd35-f6ae50aef629","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d9d9242b-e756-4656-a9d3-458909facdcf","type":"ColumnDataSource"},"glyph":{"id":"12e6acdf-9dd2-42ff-b3bd-352d8522bde6","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b6c130a4-44b0-44a1-9834-958d142469f5","type":"X"},"selection_glyph":null,"view":{"id":"3a68a1d2-6acc-4a71-a56a-85fd417982bd","type":"CDSView"}},"id":"bd219ecb-ddc2-48ef-8886-11ae173c7bfb","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"8796676c-8d4c-4da4-8100-48c9475c13fd","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"808da371-5553-4dc3-869b-b07b0362e218","type":"InvertedTriangle"},{"attributes":{"source":{"id":"f8266e29-d3ea-4b90-ba9d-39af77044afb","type":"ColumnDataSource"}},"id":"8520ae70-8aa8-4a5a-b7ca-1deb4b282e01","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6c130a4-44b0-44a1-9834-958d142469f5","type":"X"},{"attributes":{"callback":null,"data":{"text":["diamond"]},"selected":{"id":"ef10d9b7-3b50-4cb0-b9a0-4a4d4246c88c","type":"Selection"},"selection_policy":{"id":"2490e234-9863-4105-a3f1-34394f83d5ea","type":"UnionRenderers"}},"id":"c3d6558d-cc9c-4efa-83f4-6d8b0ef1e24c","type":"ColumnDataSource"},{"attributes":{},"id":"f622ce17-38ac-4007-843f-7c351ea16e08","type":"Selection"},{"attributes":{"data_source":{"id":"731f5e6b-b9a5-4927-bd35-f6ae50aef629","type":"ColumnDataSource"},"glyph":{"id":"bf6a69ed-759c-46e4-ba8b-c608348c7199","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"808da371-5553-4dc3-869b-b07b0362e218","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"cc24450f-3023-4e0b-b2e2-a6254d5012d7","type":"CDSView"}},"id":"7f78382c-4da4-4a37-8a99-c6b11fb2a1bd","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"46e2bd24-c0cd-493c-9f28-cc75f34092d1","type":"Text"},{"attributes":{"data_source":{"id":"c3d6558d-cc9c-4efa-83f4-6d8b0ef1e24c","type":"ColumnDataSource"},"glyph":{"id":"2d6fabe6-c82b-4f92-b227-71ed65283c94","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8796676c-8d4c-4da4-8100-48c9475c13fd","type":"Text"},"selection_glyph":null,"view":{"id":"8bd1c3b1-dde5-4c5c-8dd8-4d13e7ce6d71","type":"CDSView"}},"id":"025a85f0-d270-4027-af61-4e4d6a7554cb","type":"GlyphRenderer"},{"attributes":{"source":{"id":"731f5e6b-b9a5-4927-bd35-f6ae50aef629","type":"ColumnDataSource"}},"id":"cc24450f-3023-4e0b-b2e2-a6254d5012d7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"12e6acdf-9dd2-42ff-b3bd-352d8522bde6","type":"X"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"b7dd6fb8-4cb7-4078-8558-e42f8078e728","type":"Text"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"jD4lRSofIUBdjJofklQhQAyQX0wouyFA41TGNFkVIUAc22SS5p0hQM2oVvW8WyBAJBYpiewRIECEBGC3RuAhQH/9thIZaSBAGeWeJEpNIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"XrOt45ECEUAiMmCMFV8SQEmGttqxyxFASTpFR3VEEED6PHW2jdoQQLXvAF+HoxJAKMx/L+xXEUAPGvJ5XK8RQKL5GLgMNhNAD1ZAwAlLE0A=","dtype":"float64","shape":[10]}},"selected":{"id":"f4a3229f-6a4f-4501-a9e1-192370fbc795","type":"Selection"},"selection_policy":{"id":"7e94d33f-1bec-48d5-af45-c62108abe0ba","type":"UnionRenderers"}},"id":"d9d9242b-e756-4656-a9d3-458909facdcf","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c3d6558d-cc9c-4efa-83f4-6d8b0ef1e24c","type":"ColumnDataSource"}},"id":"8bd1c3b1-dde5-4c5c-8dd8-4d13e7ce6d71","type":"CDSView"},{"attributes":{},"id":"2dce2188-158c-4a91-84ee-878d43266593","type":"UnionRenderers"},{"attributes":{"source":{"id":"d9d9242b-e756-4656-a9d3-458909facdcf","type":"ColumnDataSource"}},"id":"3a68a1d2-6acc-4a71-a56a-85fd417982bd","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d421f48-dbb2-40ad-9ebd-a05c875ea747","type":"CircleCross"}],"root_ids":["0da32f31-7610-458c-98d4-a6b875ae8e1f"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"71337104-5148-4ea5-abfb-5d60cc13ead2","elementid":"46f592d6-13bd-43d8-a998-9554d477262d","modelid":"0da32f31-7610-458c-98d4-a6b875ae8e1f"}];
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