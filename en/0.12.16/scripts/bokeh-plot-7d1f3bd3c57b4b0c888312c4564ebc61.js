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
      };var element = document.getElementById("3ab37bb1-fac6-4cda-9d9b-ce6614fedfc1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3ab37bb1-fac6-4cda-9d9b-ce6614fedfc1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ca71e58b-1739-4a92-96a0-c60e07c28ba5":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7481bb0a-7cc7-4c2c-bbdc-df288d8f6ed5","type":"Square"},{"attributes":{},"id":"9e6f5355-a2f5-459f-a392-33db9f6b454d","type":"UnionRenderers"},{"attributes":{},"id":"5a1c2ee7-ed9b-4472-b198-c16561601d9e","type":"BasicTicker"},{"attributes":{"height":250,"width":250},"id":"63b6e914-33a9-478c-b4ea-f18df587ebf3","type":"Spacer"},{"attributes":{"data_source":{"id":"5fabba1e-bdb9-4708-a7c2-e955951992fb","type":"ColumnDataSource"},"glyph":{"id":"d9b68b10-7c80-4bab-a775-79b86e105a3e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c8e72637-dbfd-4878-b16c-25f43fe0a345","type":"Circle"},"selection_glyph":null,"view":{"id":"bca1d54e-637b-4f69-b41c-e94abd05b6b1","type":"CDSView"}},"id":"c43f9ad8-3aa9-454d-b9e5-1a6de83a8433","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"1c09d954-efa1-473d-b24e-7da602e32776","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"1cc9b685-9b03-487c-8045-f37af2bb4b0c","type":"ToolbarBox"},{"attributes":{"plot":{"id":"9aa458c4-c51a-4971-96b4-d2cb2635bc65","subtype":"Figure","type":"Plot"},"ticker":{"id":"9800cf78-fe70-488a-a527-79aaddd37aa7","type":"BasicTicker"}},"id":"9be4bf07-fd08-4ddf-8636-f00db565f5b9","type":"Grid"},{"attributes":{},"id":"ddcd9db7-3c3d-4a29-a064-d3f24ffba3b1","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"58ea9016-6ff5-434d-b639-2cb7b75a3b78","type":"BasicTickFormatter"},"plot":{"id":"63715c7c-896e-4baa-9eff-6ef1133af095","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a1c2ee7-ed9b-4472-b198-c16561601d9e","type":"BasicTicker"}},"id":"1489101f-06b1-4bc0-b723-ea6bc6e89932","type":"LinearAxis"},{"attributes":{},"id":"655beedc-a23e-4781-a2c0-ca22dbd4c04d","type":"ResetTool"},{"attributes":{},"id":"f02c66e4-85fc-4aba-9c2f-53302e424233","type":"PanTool"},{"attributes":{"callback":null},"id":"3e0e27b8-a379-4b52-8eec-8122cf97d9c0","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a1d4599-d68b-4736-ba73-038a7ed20283","type":"Triangle"},{"attributes":{},"id":"3bc8186c-adb4-4dad-8234-e9de7dd2c966","type":"ResetTool"},{"attributes":{},"id":"b78d45e8-2e40-4617-9d47-ddaa63f3a37e","type":"Selection"},{"attributes":{"below":[{"id":"75d68159-3b35-4243-8d34-08b57fbe973e","type":"LinearAxis"}],"left":[{"id":"9eafb9d9-5c06-4c20-a10e-20cc7a86c074","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"75d68159-3b35-4243-8d34-08b57fbe973e","type":"LinearAxis"},{"id":"9be4bf07-fd08-4ddf-8636-f00db565f5b9","type":"Grid"},{"id":"9eafb9d9-5c06-4c20-a10e-20cc7a86c074","type":"LinearAxis"},{"id":"29ee99a9-fcf4-4016-b33e-4e021e0840d3","type":"Grid"},{"id":"0240ec5c-c061-462d-bcd2-91da6f970a20","type":"BoxAnnotation"},{"id":"af4f3bb2-6477-4f79-9f7a-6f58aa57efa5","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"060dd22d-cc40-462e-aebe-ded780e9eee2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c3c20edd-2024-4fc8-a89a-9411405d5df0","type":"DataRange1d"},"x_scale":{"id":"0d2c02b0-88f1-46b8-ba8f-9ad30faf6014","type":"LinearScale"},"y_range":{"id":"3e0e27b8-a379-4b52-8eec-8122cf97d9c0","type":"DataRange1d"},"y_scale":{"id":"746fc74e-39c5-48ca-a145-3334810b8822","type":"LinearScale"}},"id":"9aa458c4-c51a-4971-96b4-d2cb2635bc65","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ac4f207f-19ee-4403-a639-6940992e627a","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b52b5580-f583-4fc5-b964-ac15f5f62eba","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"c3c20edd-2024-4fc8-a89a-9411405d5df0","type":"DataRange1d"},{"attributes":{"children":[{"id":"63b6e914-33a9-478c-b4ea-f18df587ebf3","type":"Spacer"},{"id":"9aa458c4-c51a-4971-96b4-d2cb2635bc65","subtype":"Figure","type":"Plot"}]},"id":"7f5a0af8-2ef4-4980-9d70-610bc09a7533","type":"Row"},{"attributes":{},"id":"424cf62b-057b-433f-9cec-dc80d645fec5","type":"WheelZoomTool"},{"attributes":{},"id":"099a2fe8-6142-436c-a712-b71f3b206f9a","type":"WheelZoomTool"},{"attributes":{},"id":"db889cd2-682a-4350-9b7c-cd204bcab35c","type":"HelpTool"},{"attributes":{"callback":null},"id":"75da00f1-3e1c-46f7-9daa-3a6f962e0c40","type":"DataRange1d"},{"attributes":{},"id":"1e65d903-ff26-4092-97a9-ef84a5ccc903","type":"PanTool"},{"attributes":{"formatter":{"id":"1a7b5048-c568-4403-bd0e-8ffb138366d2","type":"BasicTickFormatter"},"plot":{"id":"9aa458c4-c51a-4971-96b4-d2cb2635bc65","subtype":"Figure","type":"Plot"},"ticker":{"id":"b58507b7-9d97-4ab8-926b-9feb29b673cf","type":"BasicTicker"}},"id":"9eafb9d9-5c06-4c20-a10e-20cc7a86c074","type":"LinearAxis"},{"attributes":{},"id":"79d1ab6c-33ed-49f2-86d6-3090c861fb8b","type":"ResetTool"},{"attributes":{"overlay":{"id":"8a2d5a5b-f8ec-4da0-930d-0722980f875f","type":"BoxAnnotation"}},"id":"e3016ded-6f9f-4863-9dec-dcb677dd2fec","type":"BoxZoomTool"},{"attributes":{},"id":"0a3a65f7-40b0-4ee5-a268-5ef8ef1969bd","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"63715c7c-896e-4baa-9eff-6ef1133af095","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a1c2ee7-ed9b-4472-b198-c16561601d9e","type":"BasicTicker"}},"id":"3bfef9a7-6a09-418d-9061-378da4958bc9","type":"Grid"},{"attributes":{},"id":"07ffc404-0402-4d01-943d-06d0b116b165","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"62578bc9-de96-4377-91cd-293208ed0273","type":"ColumnDataSource"}},"id":"77bc027d-5bd0-4ed4-9dcf-c2393e4a296a","type":"CDSView"},{"attributes":{"below":[{"id":"8b14a17e-08b4-40d5-98d4-fb5607b3b253","type":"LinearAxis"}],"left":[{"id":"1489101f-06b1-4bc0-b723-ea6bc6e89932","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8b14a17e-08b4-40d5-98d4-fb5607b3b253","type":"LinearAxis"},{"id":"94183cf5-1b52-4d44-b480-1b106f88ad4b","type":"Grid"},{"id":"1489101f-06b1-4bc0-b723-ea6bc6e89932","type":"LinearAxis"},{"id":"3bfef9a7-6a09-418d-9061-378da4958bc9","type":"Grid"},{"id":"8a2d5a5b-f8ec-4da0-930d-0722980f875f","type":"BoxAnnotation"},{"id":"a09fe0bf-3cbd-45ef-8232-40692fbfc601","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"88e5c2ff-4e56-4c5d-a095-3af1f8c0febb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"75da00f1-3e1c-46f7-9daa-3a6f962e0c40","type":"DataRange1d"},"x_scale":{"id":"644bd30d-2c29-4934-b1f9-538e43f9a6f7","type":"LinearScale"},"y_range":{"id":"bf657afd-6a5d-4916-bcba-8871d077ff4a","type":"DataRange1d"},"y_scale":{"id":"af6ff41c-fd1e-4d5d-a935-937177ff032e","type":"LinearScale"}},"id":"63715c7c-896e-4baa-9eff-6ef1133af095","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2b45d56c-f36d-428d-bf35-32ee807070bc","type":"BasicTicker"},{"attributes":{"formatter":{"id":"02a6e445-6564-45ca-96fd-f0822a3474e9","type":"BasicTickFormatter"},"plot":{"id":"9aa458c4-c51a-4971-96b4-d2cb2635bc65","subtype":"Figure","type":"Plot"},"ticker":{"id":"9800cf78-fe70-488a-a527-79aaddd37aa7","type":"BasicTicker"}},"id":"75d68159-3b35-4243-8d34-08b57fbe973e","type":"LinearAxis"},{"attributes":{"overlay":{"id":"b52b5580-f583-4fc5-b964-ac15f5f62eba","type":"BoxAnnotation"}},"id":"0d6cefda-ae1e-4b35-8cbc-ff9febf1ed52","type":"BoxZoomTool"},{"attributes":{},"id":"0d2c02b0-88f1-46b8-ba8f-9ad30faf6014","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35f3103a-861c-469a-9122-0218996b91cb","type":"Triangle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"b78d45e8-2e40-4617-9d47-ddaa63f3a37e","type":"Selection"},"selection_policy":{"id":"6d418d72-9518-450c-bdf9-29db84bd52c6","type":"UnionRenderers"}},"id":"c6ecc543-6b82-4c56-9a9b-45499e92994f","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"d0ef9a6f-eda9-4ee3-ba5e-f9fa6add1efe","type":"BasicTickFormatter"},"plot":{"id":"63715c7c-896e-4baa-9eff-6ef1133af095","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b45d56c-f36d-428d-bf35-32ee807070bc","type":"BasicTicker"}},"id":"8b14a17e-08b4-40d5-98d4-fb5607b3b253","type":"LinearAxis"},{"attributes":{},"id":"b9a5a55f-2f30-4bf5-bd33-8781148c2ccf","type":"SaveTool"},{"attributes":{},"id":"58ea9016-6ff5-434d-b639-2cb7b75a3b78","type":"BasicTickFormatter"},{"attributes":{},"id":"af6ff41c-fd1e-4d5d-a935-937177ff032e","type":"LinearScale"},{"attributes":{},"id":"05200586-62b6-44b3-9455-32f72745db3d","type":"HelpTool"},{"attributes":{},"id":"18a28d86-ad2f-4c48-9d14-43d2820d7066","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"87005643-2990-404c-bd2b-6d32923daae7","type":"PanTool"},{"id":"424cf62b-057b-433f-9cec-dc80d645fec5","type":"WheelZoomTool"},{"id":"e3016ded-6f9f-4863-9dec-dcb677dd2fec","type":"BoxZoomTool"},{"id":"ac4f207f-19ee-4403-a639-6940992e627a","type":"SaveTool"},{"id":"3bc8186c-adb4-4dad-8234-e9de7dd2c966","type":"ResetTool"},{"id":"db889cd2-682a-4350-9b7c-cd204bcab35c","type":"HelpTool"}]},"id":"88e5c2ff-4e56-4c5d-a095-3af1f8c0febb","type":"Toolbar"},{"attributes":{"children":[{"id":"60c05d61-7048-4089-939c-bc6836a1799f","subtype":"Figure","type":"Plot"},{"id":"63715c7c-896e-4baa-9eff-6ef1133af095","subtype":"Figure","type":"Plot"}]},"id":"e0f48ee3-81f9-475d-bb1c-4a8a4c395b09","type":"Row"},{"attributes":{},"id":"d489ffe6-3871-4fc9-b674-03bf29cc9d1a","type":"Selection"},{"attributes":{},"id":"87005643-2990-404c-bd2b-6d32923daae7","type":"PanTool"},{"attributes":{},"id":"90d497bf-3660-437c-9c37-957060254686","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8a2d5a5b-f8ec-4da0-930d-0722980f875f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"bf657afd-6a5d-4916-bcba-8871d077ff4a","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"9aa458c4-c51a-4971-96b4-d2cb2635bc65","subtype":"Figure","type":"Plot"},"ticker":{"id":"b58507b7-9d97-4ab8-926b-9feb29b673cf","type":"BasicTicker"}},"id":"29ee99a9-fcf4-4016-b33e-4e021e0840d3","type":"Grid"},{"attributes":{"children":[{"id":"e0f48ee3-81f9-475d-bb1c-4a8a4c395b09","type":"Row"},{"id":"7f5a0af8-2ef4-4980-9d70-610bc09a7533","type":"Row"}]},"id":"2f26ce07-352c-45ff-b780-739f2b4cd18b","type":"Column"},{"attributes":{"source":{"id":"c6ecc543-6b82-4c56-9a9b-45499e92994f","type":"ColumnDataSource"}},"id":"623f3089-7c18-43e3-9911-ada9a32f22b6","type":"CDSView"},{"attributes":{},"id":"660951f4-46ce-4e35-93c9-a01cd25aacfd","type":"Selection"},{"attributes":{},"id":"b58507b7-9d97-4ab8-926b-9feb29b673cf","type":"BasicTicker"},{"attributes":{},"id":"e9c94d81-c0bb-477c-8ee1-ae474bb48b49","type":"BasicTicker"},{"attributes":{"formatter":{"id":"07ffc404-0402-4d01-943d-06d0b116b165","type":"BasicTickFormatter"},"plot":{"id":"60c05d61-7048-4089-939c-bc6836a1799f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9c94d81-c0bb-477c-8ee1-ae474bb48b49","type":"BasicTicker"}},"id":"108912da-933b-4910-b7eb-eef834224d1d","type":"LinearAxis"},{"attributes":{},"id":"9800cf78-fe70-488a-a527-79aaddd37aa7","type":"BasicTicker"},{"attributes":{},"id":"6d418d72-9518-450c-bdf9-29db84bd52c6","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"62578bc9-de96-4377-91cd-293208ed0273","type":"ColumnDataSource"},"glyph":{"id":"35f3103a-861c-469a-9122-0218996b91cb","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8a1d4599-d68b-4736-ba73-038a7ed20283","type":"Triangle"},"selection_glyph":null,"view":{"id":"77bc027d-5bd0-4ed4-9dcf-c2393e4a296a","type":"CDSView"}},"id":"a09fe0bf-3cbd-45ef-8232-40692fbfc601","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4dd92474-054a-4f48-9695-60d2325d6a80","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1e65d903-ff26-4092-97a9-ef84a5ccc903","type":"PanTool"},{"id":"099a2fe8-6142-436c-a712-b71f3b206f9a","type":"WheelZoomTool"},{"id":"7d342f31-9fcf-4b61-b0c4-ea7858383a75","type":"BoxZoomTool"},{"id":"90d497bf-3660-437c-9c37-957060254686","type":"SaveTool"},{"id":"655beedc-a23e-4781-a2c0-ca22dbd4c04d","type":"ResetTool"},{"id":"05200586-62b6-44b3-9455-32f72745db3d","type":"HelpTool"}]},"id":"060dd22d-cc40-462e-aebe-ded780e9eee2","type":"Toolbar"},{"attributes":{},"id":"644bd30d-2c29-4934-b1f9-538e43f9a6f7","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9b68b10-7c80-4bab-a775-79b86e105a3e","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"660951f4-46ce-4e35-93c9-a01cd25aacfd","type":"Selection"},"selection_policy":{"id":"ddcd9db7-3c3d-4a29-a064-d3f24ffba3b1","type":"UnionRenderers"}},"id":"62578bc9-de96-4377-91cd-293208ed0273","type":"ColumnDataSource"},{"attributes":{},"id":"02a6e445-6564-45ca-96fd-f0822a3474e9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"63715c7c-896e-4baa-9eff-6ef1133af095","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b45d56c-f36d-428d-bf35-32ee807070bc","type":"BasicTicker"}},"id":"94183cf5-1b52-4d44-b480-1b106f88ad4b","type":"Grid"},{"attributes":{"below":[{"id":"608e11e7-7441-4568-899e-d34eb1eac6fe","type":"LinearAxis"}],"left":[{"id":"108912da-933b-4910-b7eb-eef834224d1d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"608e11e7-7441-4568-899e-d34eb1eac6fe","type":"LinearAxis"},{"id":"605f6164-dbd3-492c-8500-d1d50f5fc184","type":"Grid"},{"id":"108912da-933b-4910-b7eb-eef834224d1d","type":"LinearAxis"},{"id":"01843e28-ff3e-4a4e-b2f0-e2a08abd889a","type":"Grid"},{"id":"b52b5580-f583-4fc5-b964-ac15f5f62eba","type":"BoxAnnotation"},{"id":"c43f9ad8-3aa9-454d-b9e5-1a6de83a8433","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f4ba16af-66f3-4572-af42-894e0ffbaba5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"317a7573-abc0-4ccc-b356-dd2dad4c0a12","type":"DataRange1d"},"x_scale":{"id":"b593bd21-e4aa-46d6-9ca8-ba7d15883065","type":"LinearScale"},"y_range":{"id":"4a29db4a-d734-44c4-a0e5-372a472e972b","type":"DataRange1d"},"y_scale":{"id":"d6081a79-a6e1-4388-aa91-9355812e275e","type":"LinearScale"}},"id":"60c05d61-7048-4089-939c-bc6836a1799f","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f02c66e4-85fc-4aba-9c2f-53302e424233","type":"PanTool"},{"id":"b9117e2a-063f-4cf7-a994-45ad1a0b1e16","type":"WheelZoomTool"},{"id":"0d6cefda-ae1e-4b35-8cbc-ff9febf1ed52","type":"BoxZoomTool"},{"id":"b9a5a55f-2f30-4bf5-bd33-8781148c2ccf","type":"SaveTool"},{"id":"79d1ab6c-33ed-49f2-86d6-3090c861fb8b","type":"ResetTool"},{"id":"18a28d86-ad2f-4c48-9d14-43d2820d7066","type":"HelpTool"}]},"id":"f4ba16af-66f3-4572-af42-894e0ffbaba5","type":"Toolbar"},{"attributes":{"callback":null},"id":"317a7573-abc0-4ccc-b356-dd2dad4c0a12","type":"DataRange1d"},{"attributes":{},"id":"b9117e2a-063f-4cf7-a994-45ad1a0b1e16","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"d489ffe6-3871-4fc9-b674-03bf29cc9d1a","type":"Selection"},"selection_policy":{"id":"9e6f5355-a2f5-459f-a392-33db9f6b454d","type":"UnionRenderers"}},"id":"5fabba1e-bdb9-4708-a7c2-e955951992fb","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0240ec5c-c061-462d-bcd2-91da6f970a20","type":"BoxAnnotation"},{"attributes":{},"id":"b593bd21-e4aa-46d6-9ca8-ba7d15883065","type":"LinearScale"},{"attributes":{},"id":"d0ef9a6f-eda9-4ee3-ba5e-f9fa6add1efe","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4a29db4a-d734-44c4-a0e5-372a472e972b","type":"DataRange1d"},{"attributes":{"source":{"id":"5fabba1e-bdb9-4708-a7c2-e955951992fb","type":"ColumnDataSource"}},"id":"bca1d54e-637b-4f69-b41c-e94abd05b6b1","type":"CDSView"},{"attributes":{},"id":"d6081a79-a6e1-4388-aa91-9355812e275e","type":"LinearScale"},{"attributes":{"children":[{"id":"1cc9b685-9b03-487c-8045-f37af2bb4b0c","type":"ToolbarBox"},{"id":"2f26ce07-352c-45ff-b780-739f2b4cd18b","type":"Column"}]},"id":"c4c50243-2088-4fb6-ab12-4b3549b22c75","type":"Column"},{"attributes":{"plot":{"id":"60c05d61-7048-4089-939c-bc6836a1799f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0af4e55-d702-4e78-b10d-619c900da2ef","type":"BasicTicker"}},"id":"605f6164-dbd3-492c-8500-d1d50f5fc184","type":"Grid"},{"attributes":{"data_source":{"id":"c6ecc543-6b82-4c56-9a9b-45499e92994f","type":"ColumnDataSource"},"glyph":{"id":"4dd92474-054a-4f48-9695-60d2325d6a80","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7481bb0a-7cc7-4c2c-bbdc-df288d8f6ed5","type":"Square"},"selection_glyph":null,"view":{"id":"623f3089-7c18-43e3-9911-ada9a32f22b6","type":"CDSView"}},"id":"af4f3bb2-6477-4f79-9f7a-6f58aa57efa5","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0a3a65f7-40b0-4ee5-a268-5ef8ef1969bd","type":"BasicTickFormatter"},"plot":{"id":"60c05d61-7048-4089-939c-bc6836a1799f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0af4e55-d702-4e78-b10d-619c900da2ef","type":"BasicTicker"}},"id":"608e11e7-7441-4568-899e-d34eb1eac6fe","type":"LinearAxis"},{"attributes":{},"id":"746fc74e-39c5-48ca-a145-3334810b8822","type":"LinearScale"},{"attributes":{"tools":[{"id":"f02c66e4-85fc-4aba-9c2f-53302e424233","type":"PanTool"},{"id":"b9117e2a-063f-4cf7-a994-45ad1a0b1e16","type":"WheelZoomTool"},{"id":"0d6cefda-ae1e-4b35-8cbc-ff9febf1ed52","type":"BoxZoomTool"},{"id":"b9a5a55f-2f30-4bf5-bd33-8781148c2ccf","type":"SaveTool"},{"id":"79d1ab6c-33ed-49f2-86d6-3090c861fb8b","type":"ResetTool"},{"id":"18a28d86-ad2f-4c48-9d14-43d2820d7066","type":"HelpTool"},{"id":"87005643-2990-404c-bd2b-6d32923daae7","type":"PanTool"},{"id":"424cf62b-057b-433f-9cec-dc80d645fec5","type":"WheelZoomTool"},{"id":"e3016ded-6f9f-4863-9dec-dcb677dd2fec","type":"BoxZoomTool"},{"id":"ac4f207f-19ee-4403-a639-6940992e627a","type":"SaveTool"},{"id":"3bc8186c-adb4-4dad-8234-e9de7dd2c966","type":"ResetTool"},{"id":"db889cd2-682a-4350-9b7c-cd204bcab35c","type":"HelpTool"},{"id":"1e65d903-ff26-4092-97a9-ef84a5ccc903","type":"PanTool"},{"id":"099a2fe8-6142-436c-a712-b71f3b206f9a","type":"WheelZoomTool"},{"id":"7d342f31-9fcf-4b61-b0c4-ea7858383a75","type":"BoxZoomTool"},{"id":"90d497bf-3660-437c-9c37-957060254686","type":"SaveTool"},{"id":"655beedc-a23e-4781-a2c0-ca22dbd4c04d","type":"ResetTool"},{"id":"05200586-62b6-44b3-9455-32f72745db3d","type":"HelpTool"}]},"id":"1c09d954-efa1-473d-b24e-7da602e32776","type":"ProxyToolbar"},{"attributes":{"dimension":1,"plot":{"id":"60c05d61-7048-4089-939c-bc6836a1799f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9c94d81-c0bb-477c-8ee1-ae474bb48b49","type":"BasicTicker"}},"id":"01843e28-ff3e-4a4e-b2f0-e2a08abd889a","type":"Grid"},{"attributes":{},"id":"d0af4e55-d702-4e78-b10d-619c900da2ef","type":"BasicTicker"},{"attributes":{"overlay":{"id":"0240ec5c-c061-462d-bcd2-91da6f970a20","type":"BoxAnnotation"}},"id":"7d342f31-9fcf-4b61-b0c4-ea7858383a75","type":"BoxZoomTool"},{"attributes":{},"id":"1a7b5048-c568-4403-bd0e-8ffb138366d2","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8e72637-dbfd-4878-b16c-25f43fe0a345","type":"Circle"}],"root_ids":["c4c50243-2088-4fb6-ab12-4b3549b22c75"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"ca71e58b-1739-4a92-96a0-c60e07c28ba5","elementid":"3ab37bb1-fac6-4cda-9d9b-ce6614fedfc1","modelid":"c4c50243-2088-4fb6-ab12-4b3549b22c75"}];
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