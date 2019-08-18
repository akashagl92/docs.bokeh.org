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
      };var element = document.getElementById("eacf07cf-12fc-450b-aaa8-5f85c41a130b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eacf07cf-12fc-450b-aaa8-5f85c41a130b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d37aea08-d7ac-48c2-9354-e270fa9245cd":{"roots":{"references":[{"attributes":{"level":"underlay","plot":null,"size":10},"id":"36f8820e-64a6-42e3-9161-d5261508e1de","type":"TeeHead"},{"attributes":{},"id":"72360e2b-75b9-4f30-b80c-5d0b851df9e2","type":"SaveTool"},{"attributes":{"data_source":{"id":"2728f2db-59ac-4810-af77-e69d0c8325ea","type":"ColumnDataSource"},"glyph":{"id":"ec1a79b3-41e4-4e42-81a9-15efc780589e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fe2d148c-c471-4bc4-bb65-cd2c6fb840da","type":"Circle"},"selection_glyph":null,"view":{"id":"065959c3-9c3c-4c99-9f2b-df6bb8bae1f5","type":"CDSView"}},"id":"9b79883b-f943-418e-a4ba-8712b9f49123","type":"GlyphRenderer"},{"attributes":{},"id":"0915d767-e377-48e6-af2b-a99bd6821dc1","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"bc807a3b-fc0f-4c9b-a5ad-84f68a58d5ab","type":"ColumnDataSource"}},"id":"2d8aef99-1afc-4f28-b2d0-4203d32508fc","type":"CDSView"},{"attributes":{},"id":"e1660b7e-742c-49dd-858e-dde1549e92bb","type":"Selection"},{"attributes":{"data_source":{"id":"bc807a3b-fc0f-4c9b-a5ad-84f68a58d5ab","type":"ColumnDataSource"},"glyph":{"id":"362d7e15-5869-4d35-8ce8-1423f4196169","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"263155fd-d062-40b5-9c97-59e88ca28497","type":"Circle"},"selection_glyph":null,"view":{"id":"2d8aef99-1afc-4f28-b2d0-4203d32508fc","type":"CDSView"}},"id":"aa0bc0f6-a963-4706-afca-c7f1ff620948","type":"GlyphRenderer"},{"attributes":{},"id":"3f971fc8-20c2-499c-82ca-17c4b595b88f","type":"ResetTool"},{"attributes":{"source":{"id":"6fd81eaa-7a2d-408a-b57a-9016d8a894d1","type":"ColumnDataSource"}},"id":"08affc37-6113-4511-ade4-1013e539812b","type":"CDSView"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"4cf4036c-2087-44ca-a608-35198e1912fc","type":"Circle"},{"attributes":{},"id":"d18a1e04-f65d-4693-8f0c-3b3f963423c8","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6fd81eaa-7a2d-408a-b57a-9016d8a894d1","type":"ColumnDataSource"},"glyph":{"id":"b573ec43-5ce8-4bf0-9901-6a0b8ca33e7a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0e415a08-92f0-42d1-bec2-9ff2466b07fe","type":"Circle"},"selection_glyph":null,"view":{"id":"08affc37-6113-4511-ade4-1013e539812b","type":"CDSView"}},"id":"5cad6274-ef6e-4dc7-a231-a2642af8fb38","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0ab5672b-d664-4a21-b3a6-92b62feb1c61","type":"ColumnDataSource"}},"id":"b9cc2dc2-d73d-461d-8a7a-d1a3cefa080c","type":"CDSView"},{"attributes":{},"id":"86495cbb-6030-4921-839d-927b2677c8fe","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"c23c74fe-d610-4520-865f-7a264d9da5c1","type":"Selection"},"selection_policy":{"id":"fb098f38-8823-45e6-8fe8-98a52ad2f8c3","type":"UnionRenderers"}},"id":"0ab5672b-d664-4a21-b3a6-92b62feb1c61","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0ab5672b-d664-4a21-b3a6-92b62feb1c61","type":"ColumnDataSource"},"glyph":{"id":"e91bf1e4-c7da-47e3-bf18-64634b3eae06","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2c7f9f28-7f6e-4688-be9f-154c90fb2603","type":"Circle"},"selection_glyph":null,"view":{"id":"b9cc2dc2-d73d-461d-8a7a-d1a3cefa080c","type":"CDSView"}},"id":"82ef91d9-2e3e-4ac1-ba96-6b5783212c89","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"adfa3a1c-e002-41f0-831a-36ca9eaa86db","type":"Circle"},{"attributes":{"source":{"id":"2728f2db-59ac-4810-af77-e69d0c8325ea","type":"ColumnDataSource"}},"id":"065959c3-9c3c-4c99-9f2b-df6bb8bae1f5","type":"CDSView"},{"attributes":{},"id":"fb098f38-8823-45e6-8fe8-98a52ad2f8c3","type":"UnionRenderers"},{"attributes":{},"id":"172208c9-8bfd-412f-9f4e-e845e7a6255b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"2c7f9f28-7f6e-4688-be9f-154c90fb2603","type":"Circle"},{"attributes":{"callback":null,"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]},"selected":{"id":"8d165bf3-fd43-4c04-8a7e-82cac6ff81e2","type":"Selection"},"selection_policy":{"id":"ecd8f958-e5e0-4a2b-93ad-e5681ba30e58","type":"UnionRenderers"}},"id":"1495fc4f-771f-4e38-9d94-ad17e6605df1","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"5168b6fd-e1f3-4e92-a042-03d7086f3e8d","type":"Selection"},"selection_policy":{"id":"d18a1e04-f65d-4693-8f0c-3b3f963423c8","type":"UnionRenderers"}},"id":"6fd81eaa-7a2d-408a-b57a-9016d8a894d1","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"e1660b7e-742c-49dd-858e-dde1549e92bb","type":"Selection"},"selection_policy":{"id":"604f6e42-2c63-42c2-ae0b-fe77ac6f2e7e","type":"UnionRenderers"}},"id":"17d3ce17-4b8f-44e7-89d2-6f003bb77857","type":"ColumnDataSource"},{"attributes":{},"id":"e0789f9d-ec40-4129-bb75-3cfc56019317","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"b573ec43-5ce8-4bf0-9901-6a0b8ca33e7a","type":"Circle"},{"attributes":{},"id":"8d165bf3-fd43-4c04-8a7e-82cac6ff81e2","type":"Selection"},{"attributes":{"source":{"id":"ef91bc44-8cbb-401c-8644-9e92d393f482","type":"ColumnDataSource"}},"id":"2efe4461-5087-4bda-808d-632d7a622d2d","type":"CDSView"},{"attributes":{},"id":"d4b521d6-742d-46b7-b006-020fecd34213","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"e91bf1e4-c7da-47e3-bf18-64634b3eae06","type":"Circle"},{"attributes":{"source":{"id":"a6a35738-49c4-49cd-9536-f784a1b774ae","type":"ColumnDataSource"}},"id":"00a13df7-be29-427a-9370-c807142ce621","type":"CDSView"},{"attributes":{"data_source":{"id":"ef91bc44-8cbb-401c-8644-9e92d393f482","type":"ColumnDataSource"},"glyph":{"id":"f86c48cb-10c9-4707-a48f-1150ea05111e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"adfa3a1c-e002-41f0-831a-36ca9eaa86db","type":"Circle"},"selection_glyph":null,"view":{"id":"2efe4461-5087-4bda-808d-632d7a622d2d","type":"CDSView"}},"id":"d2a48875-ecee-47d9-94a9-706aa8366752","type":"GlyphRenderer"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"01766bcc-dae0-4e00-8063-2a6b236b5b9c","type":"TeeHead"},{"attributes":{},"id":"ecd8f958-e5e0-4a2b-93ad-e5681ba30e58","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"de27c293-60ea-4372-886b-a582614ffe07","type":"Circle"},{"attributes":{},"id":"7483c39b-cd66-4454-80f9-2ea7615c593d","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"a6a35738-49c4-49cd-9536-f784a1b774ae","type":"ColumnDataSource"},"glyph":{"id":"83123cd5-7778-4d8a-98d6-fab8405ebb1e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82a26f6c-d0f1-47b0-96f8-095694f0bbeb","type":"Circle"},"selection_glyph":null,"view":{"id":"00a13df7-be29-427a-9370-c807142ce621","type":"CDSView"}},"id":"354b7a80-5bd4-4837-b341-474d12bf142b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"0e415a08-92f0-42d1-bec2-9ff2466b07fe","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"856387fd-1db5-458b-9343-a3a56fd3b36c","type":"Circle"},{"attributes":{},"id":"a7b76c3b-4755-4c6c-9e36-994fc181bbcb","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"5adb5f97-0c70-4120-b288-6f99b50c71e2","type":"ColumnDataSource"},"glyph":{"id":"9f9fef07-fc92-47b1-a4cb-1c751da2d058","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f8b77443-4db0-4a6e-920d-ce6ec68ca453","type":"Circle"},"selection_glyph":null,"view":{"id":"58d70426-0cd6-4070-9403-20b0eee2783f","type":"CDSView"}},"id":"4eb362c8-9a44-42cf-84d6-dabd7102264f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"560d0e04-0533-402e-8883-5c6582060288","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"07e78374-49ed-4510-9dcd-b1358ee5b5a7","type":"BoxAnnotation"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"36f8820e-64a6-42e3-9161-d5261508e1de","type":"TeeHead"},"plot":{"id":"4109c7df-f2bb-4b76-8bf7-434f5c58a5b8","subtype":"Figure","type":"Plot"},"source":{"id":"1495fc4f-771f-4e38-9d94-ad17e6605df1","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"01766bcc-dae0-4e00-8063-2a6b236b5b9c","type":"TeeHead"}},"id":"454b7856-ad51-40dd-a4f3-7bd0229fe7ad","type":"Whisker"},{"attributes":{},"id":"5168b6fd-e1f3-4e92-a042-03d7086f3e8d","type":"Selection"},{"attributes":{"source":{"id":"856b5c2f-5d7f-4ff8-86d1-5bcdb2729079","type":"ColumnDataSource"}},"id":"68d26697-2f50-439d-bcda-b92966b7e83a","type":"CDSView"},{"attributes":{"formatter":{"id":"172208c9-8bfd-412f-9f4e-e845e7a6255b","type":"BasicTickFormatter"},"plot":{"id":"4109c7df-f2bb-4b76-8bf7-434f5c58a5b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ae2e423-28c4-4783-b746-5c4cfb563b79","type":"BasicTicker"}},"id":"9ed57893-63c9-4cd6-a591-5536665ca11e","type":"LinearAxis"},{"attributes":{"overlay":{"id":"07e78374-49ed-4510-9dcd-b1358ee5b5a7","type":"BoxAnnotation"}},"id":"e1e7c065-246a-40f9-b606-1148e0866566","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"ec1a79b3-41e4-4e42-81a9-15efc780589e","type":"Circle"},{"attributes":{"formatter":{"id":"0915d767-e377-48e6-af2b-a99bd6821dc1","type":"BasicTickFormatter"},"plot":{"id":"4109c7df-f2bb-4b76-8bf7-434f5c58a5b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"5db33f93-9a37-4ad5-bcac-68ff5f8ac12d","type":"BasicTicker"}},"id":"a7f29a90-2a3f-448d-8001-35de33904291","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"06c19741-e96d-4763-a434-8e65669ef2db","type":"Selection"},"selection_policy":{"id":"af7e4050-2020-4283-a7b1-f7b5594aa624","type":"UnionRenderers"}},"id":"a6a35738-49c4-49cd-9536-f784a1b774ae","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"856b5c2f-5d7f-4ff8-86d1-5bcdb2729079","type":"ColumnDataSource"},"glyph":{"id":"de27c293-60ea-4372-886b-a582614ffe07","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7f5076b1-00fc-446d-befe-ec3ae64b16da","type":"Circle"},"selection_glyph":null,"view":{"id":"68d26697-2f50-439d-bcda-b92966b7e83a","type":"CDSView"}},"id":"ee8c0919-08ef-4524-8380-78ebe5a0abe2","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bdf47f78-214e-4e00-ba12-93e298a88c22","type":"ColumnDataSource"}},"id":"f28caed8-704b-40e4-83fa-28f415cd52d0","type":"CDSView"},{"attributes":{},"id":"0b1410be-8f2a-417d-a402-dee206dbf98f","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"fb0b6c78-06ce-41a1-aec7-545d3cc58bc6","type":"Circle"},{"attributes":{"source":{"id":"5adb5f97-0c70-4120-b288-6f99b50c71e2","type":"ColumnDataSource"}},"id":"58d70426-0cd6-4070-9403-20b0eee2783f","type":"CDSView"},{"attributes":{"data_source":{"id":"17d3ce17-4b8f-44e7-89d2-6f003bb77857","type":"ColumnDataSource"},"glyph":{"id":"69eeca2f-6c9f-4d3c-ab30-a83924b85e59","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb0b6c78-06ce-41a1-aec7-545d3cc58bc6","type":"Circle"},"selection_glyph":null,"view":{"id":"ad951f4c-8599-4764-902b-bfb2b811689b","type":"CDSView"}},"id":"1fd513b4-7d43-4f56-a6ba-95d12deb173c","type":"GlyphRenderer"},{"attributes":{},"id":"defb8653-177a-4465-9ccc-15501e043cab","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"7f5076b1-00fc-446d-befe-ec3ae64b16da","type":"Circle"},{"attributes":{"below":[{"id":"9ed57893-63c9-4cd6-a591-5536665ca11e","type":"LinearAxis"}],"left":[{"id":"a7f29a90-2a3f-448d-8001-35de33904291","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"9ed57893-63c9-4cd6-a591-5536665ca11e","type":"LinearAxis"},{"id":"006e554b-0373-44d2-a4ba-43b8655fe20d","type":"Grid"},{"id":"a7f29a90-2a3f-448d-8001-35de33904291","type":"LinearAxis"},{"id":"b7366049-22b9-4e44-9ace-1e872dca0d13","type":"Grid"},{"id":"07e78374-49ed-4510-9dcd-b1358ee5b5a7","type":"BoxAnnotation"},{"id":"454b7856-ad51-40dd-a4f3-7bd0229fe7ad","type":"Whisker"},{"id":"aa0bc0f6-a963-4706-afca-c7f1ff620948","type":"GlyphRenderer"},{"id":"c9d32809-5577-4242-bc43-4d8daaecc1a7","type":"GlyphRenderer"},{"id":"9b79883b-f943-418e-a4ba-8712b9f49123","type":"GlyphRenderer"},{"id":"d2a48875-ecee-47d9-94a9-706aa8366752","type":"GlyphRenderer"},{"id":"82ef91d9-2e3e-4ac1-ba96-6b5783212c89","type":"GlyphRenderer"},{"id":"5cad6274-ef6e-4dc7-a231-a2642af8fb38","type":"GlyphRenderer"},{"id":"1fd513b4-7d43-4f56-a6ba-95d12deb173c","type":"GlyphRenderer"},{"id":"3c371a71-79be-41a5-9986-fa5ab7d2f2b3","type":"GlyphRenderer"},{"id":"5ef4e3f9-e5b1-4cda-84b2-a2244d774a67","type":"GlyphRenderer"},{"id":"75e901d8-f111-47d7-b569-2b7765bae66e","type":"GlyphRenderer"},{"id":"4eb362c8-9a44-42cf-84d6-dabd7102264f","type":"GlyphRenderer"},{"id":"ee8c0919-08ef-4524-8380-78ebe5a0abe2","type":"GlyphRenderer"},{"id":"354b7a80-5bd4-4837-b341-474d12bf142b","type":"GlyphRenderer"}],"title":{"id":"118a37d6-44e8-4959-804e-7919e552e42b","type":"Title"},"toolbar":{"id":"d9990b3d-fcb4-4464-801a-81eac915680a","type":"Toolbar"},"x_range":{"id":"ecfcefb8-b95e-4931-8beb-1c72f56632ab","type":"DataRange1d"},"x_scale":{"id":"088265a1-bc83-46ea-a2bb-ad8c40933c5c","type":"LinearScale"},"y_range":{"id":"e545f7ea-0a6d-4b4a-822b-0a9fcef9d06c","type":"DataRange1d"},"y_scale":{"id":"686e8e0a-7bf7-4c3d-95e2-bf78f191b532","type":"LinearScale"}},"id":"4109c7df-f2bb-4b76-8bf7-434f5c58a5b8","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"83123cd5-7778-4d8a-98d6-fab8405ebb1e","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"fbc01da1-c564-473b-a23f-662526cd17b5","type":"Selection"},"selection_policy":{"id":"d4b521d6-742d-46b7-b006-020fecd34213","type":"UnionRenderers"}},"id":"bc807a3b-fc0f-4c9b-a5ad-84f68a58d5ab","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"82a26f6c-d0f1-47b0-96f8-095694f0bbeb","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"80c2efac-7431-4264-b33f-c481183701b3","type":"PanTool"},{"id":"c51929ee-77b9-41a2-aa26-ac60ad8ae7f6","type":"WheelZoomTool"},{"id":"e1e7c065-246a-40f9-b606-1148e0866566","type":"BoxZoomTool"},{"id":"72360e2b-75b9-4f30-b80c-5d0b851df9e2","type":"SaveTool"},{"id":"3f971fc8-20c2-499c-82ca-17c4b595b88f","type":"ResetTool"},{"id":"a31e2530-7830-4c79-aed0-a17806442a78","type":"HelpTool"}]},"id":"d9990b3d-fcb4-4464-801a-81eac915680a","type":"Toolbar"},{"attributes":{"source":{"id":"3a8bc0a0-5de5-43f6-85c7-e1830ab2f6aa","type":"ColumnDataSource"}},"id":"1f2daa73-753e-411d-838d-f6fcda2cced9","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"92f44ca4-3a2f-4f6f-aec7-10773b6bcdc8","type":"Selection"},"selection_policy":{"id":"a7b76c3b-4755-4c6c-9e36-994fc181bbcb","type":"UnionRenderers"}},"id":"5adb5f97-0c70-4120-b288-6f99b50c71e2","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"06bd891c-a461-4fe4-b30f-429a42d851a2","type":"Selection"},"selection_policy":{"id":"abdc7af9-8b4e-4abd-a417-633866f6fd68","type":"UnionRenderers"}},"id":"856b5c2f-5d7f-4ff8-86d1-5bcdb2729079","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"ecfcefb8-b95e-4931-8beb-1c72f56632ab","type":"DataRange1d"},{"attributes":{},"id":"a31e2530-7830-4c79-aed0-a17806442a78","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"f7406b13-506f-4b40-ab39-4bc6e5ef5db7","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"118a37d6-44e8-4959-804e-7919e552e42b","type":"Title"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"f86c48cb-10c9-4707-a48f-1150ea05111e","type":"Circle"},{"attributes":{},"id":"af7e4050-2020-4283-a7b1-f7b5594aa624","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"bdf47f78-214e-4e00-ba12-93e298a88c22","type":"ColumnDataSource"},"glyph":{"id":"eb3e55eb-b39e-47b4-a6ad-3348a280fd99","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f7406b13-506f-4b40-ab39-4bc6e5ef5db7","type":"Circle"},"selection_glyph":null,"view":{"id":"f28caed8-704b-40e4-83fa-28f415cd52d0","type":"CDSView"}},"id":"75e901d8-f111-47d7-b569-2b7765bae66e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4109c7df-f2bb-4b76-8bf7-434f5c58a5b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ae2e423-28c4-4783-b746-5c4cfb563b79","type":"BasicTicker"}},"id":"006e554b-0373-44d2-a4ba-43b8655fe20d","type":"Grid"},{"attributes":{"source":{"id":"03898e53-ba56-4c5b-9568-6f3c9f61932a","type":"ColumnDataSource"}},"id":"2ea6b499-509b-4f40-a93f-810821d71381","type":"CDSView"},{"attributes":{},"id":"fbc01da1-c564-473b-a23f-662526cd17b5","type":"Selection"},{"attributes":{},"id":"5ae2e423-28c4-4783-b746-5c4cfb563b79","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"fe2d148c-c471-4bc4-bb65-cd2c6fb840da","type":"Circle"},{"attributes":{},"id":"cd5a8318-e47a-4d0f-8dba-d5538b77333a","type":"Selection"},{"attributes":{},"id":"be43c83a-3ff8-4b0f-8a4d-207c6dfe123f","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"526fe2c0-50be-4b6f-b199-b5d6ef40b03d","type":"Selection"},"selection_policy":{"id":"be43c83a-3ff8-4b0f-8a4d-207c6dfe123f","type":"UnionRenderers"}},"id":"3a8bc0a0-5de5-43f6-85c7-e1830ab2f6aa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3a8bc0a0-5de5-43f6-85c7-e1830ab2f6aa","type":"ColumnDataSource"},"glyph":{"id":"6f44cfda-7820-45fe-b660-16f112134089","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb70b60b-f2a2-48ea-8ed1-17eb35a5518e","type":"Circle"},"selection_glyph":null,"view":{"id":"1f2daa73-753e-411d-838d-f6fcda2cced9","type":"CDSView"}},"id":"3c371a71-79be-41a5-9986-fa5ab7d2f2b3","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"9f9fef07-fc92-47b1-a4cb-1c751da2d058","type":"Circle"},{"attributes":{"source":{"id":"17d3ce17-4b8f-44e7-89d2-6f003bb77857","type":"ColumnDataSource"}},"id":"ad951f4c-8599-4764-902b-bfb2b811689b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"f8b77443-4db0-4a6e-920d-ce6ec68ca453","type":"Circle"},{"attributes":{},"id":"80c2efac-7431-4264-b33f-c481183701b3","type":"PanTool"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"eb3e55eb-b39e-47b4-a6ad-3348a280fd99","type":"Circle"},{"attributes":{},"id":"5db33f93-9a37-4ad5-bcac-68ff5f8ac12d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"6f44cfda-7820-45fe-b660-16f112134089","type":"Circle"},{"attributes":{},"id":"06bd891c-a461-4fe4-b30f-429a42d851a2","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"fb70b60b-f2a2-48ea-8ed1-17eb35a5518e","type":"Circle"},{"attributes":{},"id":"92f44ca4-3a2f-4f6f-aec7-10773b6bcdc8","type":"Selection"},{"attributes":{},"id":"6e9840bb-c23d-4cec-9b89-27e1a7b798ff","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"263155fd-d062-40b5-9c97-59e88ca28497","type":"Circle"},{"attributes":{},"id":"abdc7af9-8b4e-4abd-a417-633866f6fd68","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"1d6c0c6d-99f5-449e-9430-90948af4019f","type":"Selection"},"selection_policy":{"id":"3051bf8e-f868-4ffa-b86f-51e13e40e954","type":"UnionRenderers"}},"id":"bdf47f78-214e-4e00-ba12-93e298a88c22","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"69eeca2f-6c9f-4d3c-ab30-a83924b85e59","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"dbab328b-31c5-4ae7-b9f2-731ab2b044b8","type":"Circle"},{"attributes":{},"id":"526fe2c0-50be-4b6f-b199-b5d6ef40b03d","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"37726591-a0a3-4712-832d-18ae89361b71","type":"Selection"},"selection_policy":{"id":"0b1410be-8f2a-417d-a402-dee206dbf98f","type":"UnionRenderers"}},"id":"4babfa03-aa25-431d-acc3-596611857fc0","type":"ColumnDataSource"},{"attributes":{},"id":"088265a1-bc83-46ea-a2bb-ad8c40933c5c","type":"LinearScale"},{"attributes":{},"id":"37726591-a0a3-4712-832d-18ae89361b71","type":"Selection"},{"attributes":{"data_source":{"id":"4babfa03-aa25-431d-acc3-596611857fc0","type":"ColumnDataSource"},"glyph":{"id":"856387fd-1db5-458b-9343-a3a56fd3b36c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dbab328b-31c5-4ae7-b9f2-731ab2b044b8","type":"Circle"},"selection_glyph":null,"view":{"id":"124bee63-7b4c-4285-8ed0-38a8ec61f629","type":"CDSView"}},"id":"5ef4e3f9-e5b1-4cda-84b2-a2244d774a67","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"cd5a8318-e47a-4d0f-8dba-d5538b77333a","type":"Selection"},"selection_policy":{"id":"86495cbb-6030-4921-839d-927b2677c8fe","type":"UnionRenderers"}},"id":"2728f2db-59ac-4810-af77-e69d0c8325ea","type":"ColumnDataSource"},{"attributes":{},"id":"06c19741-e96d-4763-a434-8e65669ef2db","type":"Selection"},{"attributes":{},"id":"686e8e0a-7bf7-4c3d-95e2-bf78f191b532","type":"LinearScale"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"e0789f9d-ec40-4129-bb75-3cfc56019317","type":"Selection"},"selection_policy":{"id":"7483c39b-cd66-4454-80f9-2ea7615c593d","type":"UnionRenderers"}},"id":"03898e53-ba56-4c5b-9568-6f3c9f61932a","type":"ColumnDataSource"},{"attributes":{},"id":"1d6c0c6d-99f5-449e-9430-90948af4019f","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"4109c7df-f2bb-4b76-8bf7-434f5c58a5b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"5db33f93-9a37-4ad5-bcac-68ff5f8ac12d","type":"BasicTicker"}},"id":"b7366049-22b9-4e44-9ace-1e872dca0d13","type":"Grid"},{"attributes":{"data_source":{"id":"03898e53-ba56-4c5b-9568-6f3c9f61932a","type":"ColumnDataSource"},"glyph":{"id":"4cf4036c-2087-44ca-a608-35198e1912fc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"560d0e04-0533-402e-8883-5c6582060288","type":"Circle"},"selection_glyph":null,"view":{"id":"2ea6b499-509b-4f40-a93f-810821d71381","type":"CDSView"}},"id":"c9d32809-5577-4242-bc43-4d8daaecc1a7","type":"GlyphRenderer"},{"attributes":{},"id":"3051bf8e-f868-4ffa-b86f-51e13e40e954","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"e545f7ea-0a6d-4b4a-822b-0a9fcef9d06c","type":"DataRange1d"},{"attributes":{"source":{"id":"4babfa03-aa25-431d-acc3-596611857fc0","type":"ColumnDataSource"}},"id":"124bee63-7b4c-4285-8ed0-38a8ec61f629","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"defb8653-177a-4465-9ccc-15501e043cab","type":"Selection"},"selection_policy":{"id":"6e9840bb-c23d-4cec-9b89-27e1a7b798ff","type":"UnionRenderers"}},"id":"ef91bc44-8cbb-401c-8644-9e92d393f482","type":"ColumnDataSource"},{"attributes":{},"id":"c23c74fe-d610-4520-865f-7a264d9da5c1","type":"Selection"},{"attributes":{},"id":"604f6e42-2c63-42c2-ae0b-fe77ac6f2e7e","type":"UnionRenderers"},{"attributes":{},"id":"c51929ee-77b9-41a2-aa26-ac60ad8ae7f6","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"362d7e15-5869-4d35-8ce8-1423f4196169","type":"Circle"}],"root_ids":["4109c7df-f2bb-4b76-8bf7-434f5c58a5b8"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"d37aea08-d7ac-48c2-9354-e270fa9245cd","elementid":"eacf07cf-12fc-450b-aaa8-5f85c41a130b","modelid":"4109c7df-f2bb-4b76-8bf7-434f5c58a5b8"}];
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