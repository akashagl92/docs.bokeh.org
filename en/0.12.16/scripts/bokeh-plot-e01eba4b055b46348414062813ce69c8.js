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
      };var element = document.getElementById("c9f40f27-685a-4d67-ac1e-8e88fadc3207");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9f40f27-685a-4d67-ac1e-8e88fadc3207' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a88c903d-7531-4651-9c8f-cc2729c17b95":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"7a608f6d-6bfa-45d0-b993-f0d2dc34745f","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"68df92a0-3e3e-4feb-af61-bc611b20a08a","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"71608922-98bf-47f1-aacb-b508dfbe5158","type":"PolyAnnotation"}},"id":"a8456ce9-7bba-4f97-b6b8-a061833c28a2","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"b3673092-2a40-41b4-9124-3d8bfba7a174","type":"DataRange1d"},{"attributes":{},"id":"9b5cd3d8-416d-410c-bf0f-4e9e5df0e62e","type":"HelpTool"},{"attributes":{"data_source":{"id":"99931300-4eb8-4ce5-813f-d7021762e893","type":"ColumnDataSource"},"glyph":{"id":"afb2b94e-0412-4a87-9d6e-15659d274361","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7a608f6d-6bfa-45d0-b993-f0d2dc34745f","type":"Circle"},"selection_glyph":null,"view":{"id":"c1aa1553-f726-480c-83ab-7ea511419e3d","type":"CDSView"}},"id":"94dee5cb-05c2-42a7-ad79-b67c2c1c7746","type":"GlyphRenderer"},{"attributes":{},"id":"993e491c-a6b1-4790-9e0a-0b2c81ddd6b0","type":"BasicTickFormatter"},{"attributes":{},"id":"bc2a0234-64d2-40d8-8bb3-d8418dee5d7f","type":"BasicTickFormatter"},{"attributes":{},"id":"420dc985-0ba0-4002-9d30-dd020992834c","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"212853a7-03d1-4521-ae85-58d7bcad69ad","type":"PolyAnnotation"},{"attributes":{"plot":{"id":"bea6b3cc-4634-4cb3-8604-f5f2da07bdca","subtype":"Figure","type":"Plot"},"ticker":{"id":"435aff17-b610-4bc0-b6b4-6f67832fd88d","type":"BasicTicker"}},"id":"99422a75-0309-4a14-9a35-66376315a091","type":"Grid"},{"attributes":{"children":[{"id":"193225cd-96b3-430e-9199-8a374c7343ce","type":"Row"}]},"id":"64adc51a-9eb2-465c-907d-3a86d9fbc51a","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"212853a7-03d1-4521-ae85-58d7bcad69ad","type":"PolyAnnotation"}},"id":"773da776-c10e-4832-9763-2bd342909576","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"c04afc29-87b1-4e5d-b2e1-28d869a7825e","type":"LinearAxis"}],"left":[{"id":"075152ef-46f1-4184-b123-89f3544dc49f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c04afc29-87b1-4e5d-b2e1-28d869a7825e","type":"LinearAxis"},{"id":"99422a75-0309-4a14-9a35-66376315a091","type":"Grid"},{"id":"075152ef-46f1-4184-b123-89f3544dc49f","type":"LinearAxis"},{"id":"9a32fce5-1ada-4a21-8511-dd2352e6f913","type":"Grid"},{"id":"83e34cda-e4db-41dd-8d5f-cfbfb09f0c2d","type":"BoxAnnotation"},{"id":"212853a7-03d1-4521-ae85-58d7bcad69ad","type":"PolyAnnotation"},{"id":"bd0493d9-2b24-48e1-80c4-5971adca7e2d","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"03da43c0-fc29-4efe-98aa-8202494b8cef","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7d66692f-8779-441f-a22c-b297ecaab7d3","type":"DataRange1d"},"x_scale":{"id":"a1f47740-6904-4669-97dc-599c1f79a28b","type":"LinearScale"},"y_range":{"id":"eb6bcef8-4add-4b2c-b065-6690183e2385","type":"DataRange1d"},"y_scale":{"id":"f70a4a7e-bbed-4787-88fa-9f101f46774c","type":"LinearScale"}},"id":"bea6b3cc-4634-4cb3-8604-f5f2da07bdca","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8a2c7aff-1382-4af6-a07e-458a0b19a029","type":"BoxSelectTool"},{"id":"773da776-c10e-4832-9763-2bd342909576","type":"LassoSelectTool"},{"id":"03e68612-2a52-447f-b5ad-5670357a788a","type":"HelpTool"}]},"id":"03da43c0-fc29-4efe-98aa-8202494b8cef","type":"Toolbar"},{"attributes":{},"id":"b01f3b7d-f2ea-4097-8b39-5f3700d5641d","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"bea6b3cc-4634-4cb3-8604-f5f2da07bdca","subtype":"Figure","type":"Plot"},"ticker":{"id":"3139375a-46b9-4fd1-88ea-aca4b969fcee","type":"BasicTicker"}},"id":"9a32fce5-1ada-4a21-8511-dd2352e6f913","type":"Grid"},{"attributes":{"tools":[{"id":"8a2c7aff-1382-4af6-a07e-458a0b19a029","type":"BoxSelectTool"},{"id":"773da776-c10e-4832-9763-2bd342909576","type":"LassoSelectTool"},{"id":"03e68612-2a52-447f-b5ad-5670357a788a","type":"HelpTool"},{"id":"ef0857e6-96ec-4829-a186-367651d0beb9","type":"BoxSelectTool"},{"id":"a8456ce9-7bba-4f97-b6b8-a061833c28a2","type":"LassoSelectTool"},{"id":"9b5cd3d8-416d-410c-bf0f-4e9e5df0e62e","type":"HelpTool"}]},"id":"1e9ef05b-98f7-4057-addc-90279fdd04d3","type":"ProxyToolbar"},{"attributes":{},"id":"f70a4a7e-bbed-4787-88fa-9f101f46774c","type":"LinearScale"},{"attributes":{},"id":"435aff17-b610-4bc0-b6b4-6f67832fd88d","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"83e34cda-e4db-41dd-8d5f-cfbfb09f0c2d","type":"BoxAnnotation"},{"attributes":{"toolbar":{"id":"1e9ef05b-98f7-4057-addc-90279fdd04d3","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"3cc042ca-396a-456f-8106-f8c342c4f8c0","type":"ToolbarBox"},{"attributes":{"callback":null,"overlay":{"id":"83e34cda-e4db-41dd-8d5f-cfbfb09f0c2d","type":"BoxAnnotation"}},"id":"8a2c7aff-1382-4af6-a07e-458a0b19a029","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"3cc042ca-396a-456f-8106-f8c342c4f8c0","type":"ToolbarBox"},{"id":"64adc51a-9eb2-465c-907d-3a86d9fbc51a","type":"Column"}]},"id":"93db9c14-1119-4725-8c5f-2beacbc51f6b","type":"Column"},{"attributes":{"below":[{"id":"1270b8d6-992f-4709-9a04-6750e2864a5f","type":"LinearAxis"}],"left":[{"id":"66823d48-563b-4d4f-a61a-43a3f6b295f3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1270b8d6-992f-4709-9a04-6750e2864a5f","type":"LinearAxis"},{"id":"a6c94821-b31a-4c60-8a60-6b462581a859","type":"Grid"},{"id":"66823d48-563b-4d4f-a61a-43a3f6b295f3","type":"LinearAxis"},{"id":"2aa50aae-1784-4eae-baca-b763168bc7d6","type":"Grid"},{"id":"68df92a0-3e3e-4feb-af61-bc611b20a08a","type":"BoxAnnotation"},{"id":"71608922-98bf-47f1-aacb-b508dfbe5158","type":"PolyAnnotation"},{"id":"94dee5cb-05c2-42a7-ad79-b67c2c1c7746","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"fc0a4361-211b-4ef7-bd6c-d6e186230f3e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"06c18f10-765f-457d-b378-70e69efad26d","type":"DataRange1d"},"x_scale":{"id":"3dc4c48c-2a45-4c60-b456-36371c4dd7b1","type":"LinearScale"},"y_range":{"id":"b3673092-2a40-41b4-9124-3d8bfba7a174","type":"DataRange1d"},"y_scale":{"id":"7c6c2978-0d3a-445b-a558-b4045a7221aa","type":"LinearScale"}},"id":"1a766c19-1804-4ffb-b298-5e79baca3e5c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3139375a-46b9-4fd1-88ea-aca4b969fcee","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"e933e46e-30c3-4608-94ba-306428f97589","type":"Circle"},{"attributes":{"data_source":{"id":"99931300-4eb8-4ce5-813f-d7021762e893","type":"ColumnDataSource"},"glyph":{"id":"e933e46e-30c3-4608-94ba-306428f97589","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c474f343-280e-4a20-8cb7-66473a9b73b3","type":"Circle"},"selection_glyph":null,"view":{"id":"eccdca13-575d-44f9-80d1-d6d8d13d6c1e","type":"CDSView"}},"id":"bd0493d9-2b24-48e1-80c4-5971adca7e2d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"c474f343-280e-4a20-8cb7-66473a9b73b3","type":"Circle"},{"attributes":{},"id":"3dc4c48c-2a45-4c60-b456-36371c4dd7b1","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"7475f0c7-209d-4791-bbac-62609c138ee5","type":"Selection"},"selection_policy":{"id":"ceed0e99-c8e6-49ac-b112-30b91af4fbfc","type":"UnionRenderers"}},"id":"99931300-4eb8-4ce5-813f-d7021762e893","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1a766c19-1804-4ffb-b298-5e79baca3e5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"722dca32-3812-4656-894e-3a800518efc3","type":"BasicTicker"}},"id":"a6c94821-b31a-4c60-8a60-6b462581a859","type":"Grid"},{"attributes":{"formatter":{"id":"420dc985-0ba0-4002-9d30-dd020992834c","type":"BasicTickFormatter"},"plot":{"id":"bea6b3cc-4634-4cb3-8604-f5f2da07bdca","subtype":"Figure","type":"Plot"},"ticker":{"id":"435aff17-b610-4bc0-b6b4-6f67832fd88d","type":"BasicTicker"}},"id":"c04afc29-87b1-4e5d-b2e1-28d869a7825e","type":"LinearAxis"},{"attributes":{},"id":"7c6c2978-0d3a-445b-a558-b4045a7221aa","type":"LinearScale"},{"attributes":{"formatter":{"id":"993e491c-a6b1-4790-9e0a-0b2c81ddd6b0","type":"BasicTickFormatter"},"plot":{"id":"1a766c19-1804-4ffb-b298-5e79baca3e5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"722dca32-3812-4656-894e-3a800518efc3","type":"BasicTicker"}},"id":"1270b8d6-992f-4709-9a04-6750e2864a5f","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"71608922-98bf-47f1-aacb-b508dfbe5158","type":"PolyAnnotation"},{"attributes":{},"id":"a1f47740-6904-4669-97dc-599c1f79a28b","type":"LinearScale"},{"attributes":{},"id":"722dca32-3812-4656-894e-3a800518efc3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b01f3b7d-f2ea-4097-8b39-5f3700d5641d","type":"BasicTickFormatter"},"plot":{"id":"bea6b3cc-4634-4cb3-8604-f5f2da07bdca","subtype":"Figure","type":"Plot"},"ticker":{"id":"3139375a-46b9-4fd1-88ea-aca4b969fcee","type":"BasicTicker"}},"id":"075152ef-46f1-4184-b123-89f3544dc49f","type":"LinearAxis"},{"attributes":{"source":{"id":"99931300-4eb8-4ce5-813f-d7021762e893","type":"ColumnDataSource"}},"id":"c1aa1553-f726-480c-83ab-7ea511419e3d","type":"CDSView"},{"attributes":{"callback":null},"id":"06c18f10-765f-457d-b378-70e69efad26d","type":"DataRange1d"},{"attributes":{},"id":"7475f0c7-209d-4791-bbac-62609c138ee5","type":"Selection"},{"attributes":{"formatter":{"id":"bc2a0234-64d2-40d8-8bb3-d8418dee5d7f","type":"BasicTickFormatter"},"plot":{"id":"1a766c19-1804-4ffb-b298-5e79baca3e5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2386bbd-2260-4b62-91c7-b00294b393e4","type":"BasicTicker"}},"id":"66823d48-563b-4d4f-a61a-43a3f6b295f3","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7d66692f-8779-441f-a22c-b297ecaab7d3","type":"DataRange1d"},{"attributes":{"source":{"id":"99931300-4eb8-4ce5-813f-d7021762e893","type":"ColumnDataSource"}},"id":"eccdca13-575d-44f9-80d1-d6d8d13d6c1e","type":"CDSView"},{"attributes":{},"id":"b2386bbd-2260-4b62-91c7-b00294b393e4","type":"BasicTicker"},{"attributes":{},"id":"03e68612-2a52-447f-b5ad-5670357a788a","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"afb2b94e-0412-4a87-9d6e-15659d274361","type":"Circle"},{"attributes":{"callback":null},"id":"eb6bcef8-4add-4b2c-b065-6690183e2385","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ef0857e6-96ec-4829-a186-367651d0beb9","type":"BoxSelectTool"},{"id":"a8456ce9-7bba-4f97-b6b8-a061833c28a2","type":"LassoSelectTool"},{"id":"9b5cd3d8-416d-410c-bf0f-4e9e5df0e62e","type":"HelpTool"}]},"id":"fc0a4361-211b-4ef7-bd6c-d6e186230f3e","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"1a766c19-1804-4ffb-b298-5e79baca3e5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2386bbd-2260-4b62-91c7-b00294b393e4","type":"BasicTicker"}},"id":"2aa50aae-1784-4eae-baca-b763168bc7d6","type":"Grid"},{"attributes":{},"id":"ceed0e99-c8e6-49ac-b112-30b91af4fbfc","type":"UnionRenderers"},{"attributes":{"children":[{"id":"bea6b3cc-4634-4cb3-8604-f5f2da07bdca","subtype":"Figure","type":"Plot"},{"id":"1a766c19-1804-4ffb-b298-5e79baca3e5c","subtype":"Figure","type":"Plot"}]},"id":"193225cd-96b3-430e-9199-8a374c7343ce","type":"Row"},{"attributes":{"callback":null,"overlay":{"id":"68df92a0-3e3e-4feb-af61-bc611b20a08a","type":"BoxAnnotation"}},"id":"ef0857e6-96ec-4829-a186-367651d0beb9","type":"BoxSelectTool"}],"root_ids":["93db9c14-1119-4725-8c5f-2beacbc51f6b"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"a88c903d-7531-4651-9c8f-cc2729c17b95","elementid":"c9f40f27-685a-4d67-ac1e-8e88fadc3207","modelid":"93db9c14-1119-4725-8c5f-2beacbc51f6b"}];
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