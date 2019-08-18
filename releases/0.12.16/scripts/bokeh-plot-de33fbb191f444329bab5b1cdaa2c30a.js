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
      };var element = document.getElementById("1b871b4a-e09c-4f32-9a16-ed5c50bd95f3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1b871b4a-e09c-4f32-9a16-ed5c50bd95f3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7fd3e1b0-4f49-4545-8563-9668b3195daf":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6887e945-9ce8-4e7b-a12b-f84e8113b67a","type":"PanTool"},{"id":"5a1d0de7-6a2f-4309-bdc6-1ed9640367af","type":"WheelZoomTool"}]},"id":"e2f8eac8-bd28-48af-a298-46d331e24130","type":"Toolbar"},{"attributes":{},"id":"033ad70c-1988-4440-9445-b498954b4a27","type":"BasicTicker"},{"attributes":{},"id":"4b81d638-587b-48f7-8148-4ae9aa4dc876","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"34944217-40e5-4905-8d59-42a6b61ffe32","type":"PanTool"},{"id":"c33cd44d-3ded-4ab7-a46d-c0f5f6f43e93","type":"WheelZoomTool"}]},"id":"97f9e549-7604-453a-a4c8-5c5d651c4eae","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"a06b189b-6ba2-447b-b060-84a36411bed0","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"2f5e0df5-9a30-4cde-bfea-241dc800534d","type":"GlyphRenderer"},{"id":"a06b189b-6ba2-447b-b060-84a36411bed0","type":"LinearAxis"},{"id":"5cfda85b-aa61-4c6c-a31b-94a007f0b7ba","type":"Grid"},{"id":"3213083b-5d4f-4a4a-a3b0-67ee2a0f02ff","type":"Grid"}],"title":{"id":"a74f793d-f0f8-4c26-ad48-b7626bd3e358","type":"Title"},"toolbar":{"id":"e2f8eac8-bd28-48af-a298-46d331e24130","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"18a91dba-724e-4743-938b-2558ee52a1b8","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"5bd2112b-8f4f-44a5-80f7-25ce23d52204","type":"LinearScale"}},"id":"fdf70136-dd69-421c-a3b6-f9ccb052902e","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"4f2c781a-d2de-4d03-a8ff-516d156e3b51","type":"Plot"},"ticker":{"id":"033ad70c-1988-4440-9445-b498954b4a27","type":"BasicTicker"}},"id":"26bcaff8-9b99-4f7b-934b-c4e4468b7666","type":"Grid"},{"attributes":{},"id":"95f83483-6aa2-4817-832e-dd0b94247aa4","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_length"}},"id":"d6280168-2ecc-40fd-a9f0-fc117a634af2","type":"Circle"},{"attributes":{},"id":"785cb4ec-0fa9-4893-97a6-b45a119eff62","type":"WheelZoomTool"},{"attributes":{},"id":"bc5e64ef-c840-47ef-887f-12634d5f3f66","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"e21daf51-dee7-47ab-b947-a255a7f19ecd","type":"GlyphRenderer"},{"id":"5a7de10a-4f28-415f-8e5e-02a929c18687","type":"Grid"},{"id":"8864200a-89f0-4054-b76f-e4a10b57e577","type":"Grid"}],"title":{"id":"f8bda5c1-3f24-4b98-a796-f4f1c011b4f9","type":"Title"},"toolbar":{"id":"97f9e549-7604-453a-a4c8-5c5d651c4eae","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"48f80a8f-d7c8-41e8-b51a-0c65cdd2229c","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"1fa73fc0-a503-430d-b173-46177c7c7944","type":"LinearScale"}},"id":"1bfff567-305e-437b-9948-d9cb6d47f22d","type":"Plot"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"d6280168-2ecc-40fd-a9f0-fc117a634af2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"05c1e06f-addc-44a2-8a1c-63602ce215f1","type":"CDSView"}},"id":"2f5e0df5-9a30-4cde-bfea-241dc800534d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_width"}},"id":"1ea39208-f53f-4cd2-8fa3-08bdaf77b61d","type":"Circle"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"05c1e06f-addc-44a2-8a1c-63602ce215f1","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eab9fc1e-8dbe-42b9-8573-d4cb4f10f3fc","type":"PanTool"},{"id":"e95bc6fa-eec8-4ddd-8249-3e595e6caba6","type":"WheelZoomTool"}]},"id":"9432599c-6907-42b3-a405-723cf0a3ed09","type":"Toolbar"},{"attributes":{"plot":{"id":"fdf70136-dd69-421c-a3b6-f9ccb052902e","type":"Plot"},"ticker":{"id":"ef15595e-d9b0-48e9-b72f-f2a6b725150b","type":"BasicTicker"}},"id":"5cfda85b-aa61-4c6c-a31b-94a007f0b7ba","type":"Grid"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"1ea39208-f53f-4cd2-8fa3-08bdaf77b61d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5339a9a5-fc5a-4c21-b978-1b5689adf6b5","type":"CDSView"}},"id":"e21daf51-dee7-47ab-b947-a255a7f19ecd","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b9c74aff-a09d-446a-bd8c-6927bdbe793c","type":"PanTool"},{"id":"02f44077-e430-4de2-9a77-0c89d25aa4a1","type":"WheelZoomTool"}]},"id":"3bc7ec40-a7ab-47c7-abed-19d45f3bacfe","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"fdf70136-dd69-421c-a3b6-f9ccb052902e","type":"Plot"},"ticker":{"id":"bc5e64ef-c840-47ef-887f-12634d5f3f66","type":"BasicTicker"}},"id":"3213083b-5d4f-4a4a-a3b0-67ee2a0f02ff","type":"Grid"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"5339a9a5-fc5a-4c21-b978-1b5689adf6b5","type":"CDSView"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"ca1815e6-e73b-44b0-bd11-8fc5c90847d7","type":"BasicTickFormatter"},"plot":{"id":"fdf70136-dd69-421c-a3b6-f9ccb052902e","type":"Plot"},"ticker":{"id":"ef15595e-d9b0-48e9-b72f-f2a6b725150b","type":"BasicTicker"}},"id":"a06b189b-6ba2-447b-b060-84a36411bed0","type":"LinearAxis"},{"attributes":{},"id":"2b2c9f20-9cf1-424e-82b2-73ee53bf09a8","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1bfff567-305e-437b-9948-d9cb6d47f22d","type":"Plot"},"ticker":{"id":"01b66f88-f3b7-49f6-b8e5-d77845e4fcc9","type":"BasicTicker"}},"id":"8864200a-89f0-4054-b76f-e4a10b57e577","type":"Grid"},{"attributes":{},"id":"ef15595e-d9b0-48e9-b72f-f2a6b725150b","type":"BasicTicker"},{"attributes":{},"id":"34944217-40e5-4905-8d59-42a6b61ffe32","type":"PanTool"},{"attributes":{},"id":"6887e945-9ce8-4e7b-a12b-f84e8113b67a","type":"PanTool"},{"attributes":{},"id":"5a1d0de7-6a2f-4309-bdc6-1ed9640367af","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"1bfff567-305e-437b-9948-d9cb6d47f22d","type":"Plot"},"ticker":{"id":"2b2c9f20-9cf1-424e-82b2-73ee53bf09a8","type":"BasicTicker"}},"id":"5a7de10a-4f28-415f-8e5e-02a929c18687","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"126d1c0e-dad6-487e-ad7d-a3825be987bf","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"a6775d72-9ab0-4372-9c4a-26ce8fe732c6","type":"GlyphRenderer"},{"id":"126d1c0e-dad6-487e-ad7d-a3825be987bf","type":"LinearAxis"},{"id":"bb5f27f6-2f83-48a8-a8f0-02f7808c0f4a","type":"Grid"},{"id":"c760811b-62b3-45ef-b9d3-b0ec6771d952","type":"Grid"}],"title":{"id":"ad28ebb6-6b83-4a0d-8781-71447e18f9f4","type":"Title"},"toolbar":{"id":"3bc7ec40-a7ab-47c7-abed-19d45f3bacfe","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"b0d9d353-1d84-4346-83a4-ba55968c49cf","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"51602cf9-b41c-4ce1-9bac-117a2cd7e778","type":"LinearScale"}},"id":"88600c12-39d1-43fa-b72e-89d8c9b9876d","type":"Plot"},{"attributes":{},"id":"01b66f88-f3b7-49f6-b8e5-d77845e4fcc9","type":"BasicTicker"},{"attributes":{},"id":"c33cd44d-3ded-4ab7-a46d-c0f5f6f43e93","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_length"}},"id":"07f417f6-934e-4dd0-a257-9518d88e488a","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"692db25f-cd38-4d8b-afd1-4f494b9e9540","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"e3d9403e-75eb-4787-bef7-822bbd158a05","type":"GlyphRenderer"},{"id":"7dd7ca75-df3d-4bf7-988f-943b093afbcb","type":"Grid"},{"id":"692db25f-cd38-4d8b-afd1-4f494b9e9540","type":"LinearAxis"},{"id":"5c89f9f4-fae6-4870-9d20-c5fcc45c5e04","type":"Grid"}],"title":{"id":"86d40db2-5220-4703-919b-6538b104dc3d","type":"Title"},"toolbar":{"id":"9432599c-6907-42b3-a405-723cf0a3ed09","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"89fbb698-f0d2-4e67-8721-83e640614bdd","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"7e11d2c4-0c5d-4326-861b-71fb24a60804","type":"LinearScale"}},"id":"7e5f3a61-c509-465e-9d6e-f92820694f0b","type":"Plot"},{"attributes":{},"id":"0ef6cc54-6b1f-4165-9dd4-ad341db3ed28","type":"BasicTicker"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"07f417f6-934e-4dd0-a257-9518d88e488a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"16c643e6-d4cf-4f92-98bc-b2abd12c60a5","type":"CDSView"}},"id":"a6775d72-9ab0-4372-9c4a-26ce8fe732c6","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"a54a03f6-cd29-4f1c-b2bb-3f8ebeacc911","type":"Circle"},{"attributes":{},"id":"eab9fc1e-8dbe-42b9-8573-d4cb4f10f3fc","type":"PanTool"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"16c643e6-d4cf-4f92-98bc-b2abd12c60a5","type":"CDSView"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"a54a03f6-cd29-4f1c-b2bb-3f8ebeacc911","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4578cb78-e411-482a-968d-289a56c8b4b0","type":"CDSView"}},"id":"e3d9403e-75eb-4787-bef7-822bbd158a05","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"88600c12-39d1-43fa-b72e-89d8c9b9876d","type":"Plot"},"ticker":{"id":"0523155d-7e35-4549-88dc-596ba45285b8","type":"BasicTicker"}},"id":"bb5f27f6-2f83-48a8-a8f0-02f7808c0f4a","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2750e12f-2ced-4ce6-9328-e91214b9155f","type":"PanTool"},{"id":"2e75dea1-600f-43a7-be24-7e4b99cf3e5a","type":"WheelZoomTool"}]},"id":"de7ad67e-cd4a-48e4-bdba-b74eda662da0","type":"Toolbar"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"4578cb78-e411-482a-968d-289a56c8b4b0","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"88600c12-39d1-43fa-b72e-89d8c9b9876d","type":"Plot"},"ticker":{"id":"0ef6cc54-6b1f-4165-9dd4-ad341db3ed28","type":"BasicTicker"}},"id":"c760811b-62b3-45ef-b9d3-b0ec6771d952","type":"Grid"},{"attributes":{},"id":"a1bc0e1f-b311-44d4-bd79-a1c97a26c8a6","type":"BasicTicker"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"cc20bb29-7fbf-4b60-aef9-1882c5bb1d7a","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"7e5f3a61-c509-465e-9d6e-f92820694f0b","type":"Plot"},"ticker":{"id":"ea8080bf-d05a-4517-aaf6-5efa6b3983bb","type":"BasicTicker"}},"id":"692db25f-cd38-4d8b-afd1-4f494b9e9540","type":"LinearAxis"},{"attributes":{"axis_label":"sepal_width","formatter":{"id":"45e6fc62-22d8-4123-9211-ad79892fad41","type":"BasicTickFormatter"},"plot":{"id":"88600c12-39d1-43fa-b72e-89d8c9b9876d","type":"Plot"},"ticker":{"id":"0523155d-7e35-4549-88dc-596ba45285b8","type":"BasicTicker"}},"id":"126d1c0e-dad6-487e-ad7d-a3825be987bf","type":"LinearAxis"},{"attributes":{},"id":"ea8080bf-d05a-4517-aaf6-5efa6b3983bb","type":"BasicTicker"},{"attributes":{},"id":"0523155d-7e35-4549-88dc-596ba45285b8","type":"BasicTicker"},{"attributes":{},"id":"b9c74aff-a09d-446a-bd8c-6927bdbe793c","type":"PanTool"},{"attributes":{"plot":{"id":"7e5f3a61-c509-465e-9d6e-f92820694f0b","type":"Plot"},"ticker":{"id":"a1bc0e1f-b311-44d4-bd79-a1c97a26c8a6","type":"BasicTicker"}},"id":"7dd7ca75-df3d-4bf7-988f-943b093afbcb","type":"Grid"},{"attributes":{},"id":"02f44077-e430-4de2-9a77-0c89d25aa4a1","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"7e5f3a61-c509-465e-9d6e-f92820694f0b","type":"Plot"},"ticker":{"id":"ea8080bf-d05a-4517-aaf6-5efa6b3983bb","type":"BasicTicker"}},"id":"5c89f9f4-fae6-4870-9d20-c5fcc45c5e04","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"7b3181ab-9e51-4f14-9a46-224d38119e73","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"e4c6858a-33cf-4855-b3e4-27e934431698","type":"GlyphRenderer"},{"id":"7b3181ab-9e51-4f14-9a46-224d38119e73","type":"LinearAxis"},{"id":"33f72b11-ed7c-4d19-9528-77f341bb46e8","type":"Grid"},{"id":"bb7fd307-bcb5-4bc6-9d81-6bc226772f87","type":"Grid"}],"title":{"id":"130891a8-8c70-4781-9e02-de1eb3c59af3","type":"Title"},"toolbar":{"id":"de7ad67e-cd4a-48e4-bdba-b74eda662da0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"19f81cf9-4394-44bb-8f0f-f385e1e06c80","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"9932e45f-4fe2-4b33-ab24-fbeadf538a2a","type":"LinearScale"}},"id":"44eb6be1-0d85-4dfb-9399-463b8d2eb92c","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5ae65fc9-0baf-4a16-849c-749d06490eed","type":"PanTool"},{"id":"094a3611-a05c-4621-96a7-dc4ea01d2b7a","type":"WheelZoomTool"}]},"id":"2dccf233-83ab-40e9-bea5-e0c09acb5d08","type":"Toolbar"},{"attributes":{},"id":"e95bc6fa-eec8-4ddd-8249-3e595e6caba6","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_length"}},"id":"a2987cab-5006-4c3f-bb86-8ae7be23acc4","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"3ccbc1de-a946-45e9-a7e9-8edfab44a191","type":"GlyphRenderer"},{"id":"9dc1a8a0-6ea8-49d7-95cb-6e39bab09f24","type":"Grid"},{"id":"cc670d9c-d62a-459f-9e02-ebc794316644","type":"Grid"}],"title":{"id":"2774190a-bb2e-4bc5-932d-77a1e4d85ebf","type":"Title"},"toolbar":{"id":"2dccf233-83ab-40e9-bea5-e0c09acb5d08","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"9cabe9cc-7660-4227-9789-4c4f7f3ddc11","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"2934e199-2394-4a95-98c0-038a75dc73fb","type":"LinearScale"}},"id":"2b446135-cd05-4126-8a4c-83a9bc736261","type":"Plot"},{"attributes":{},"id":"96767cc6-5cde-4831-be37-7384fb0050ce","type":"BasicTicker"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"a2987cab-5006-4c3f-bb86-8ae7be23acc4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1604e55c-eab5-433e-9146-1ce415cb386c","type":"CDSView"}},"id":"e4c6858a-33cf-4855-b3e4-27e934431698","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_width"}},"id":"9e055742-73ab-4e93-b050-28cd8693c149","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"064c3943-6469-43f1-8bc0-0dd79f6a48dd","type":"PanTool"},{"id":"e502f1d3-9f4e-4249-8fb7-9828c26c2ea3","type":"WheelZoomTool"}]},"id":"c9868ca2-642f-43ee-8dc5-7f90be1cec81","type":"Toolbar"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"1604e55c-eab5-433e-9146-1ce415cb386c","type":"CDSView"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"9e055742-73ab-4e93-b050-28cd8693c149","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a6d039ba-581f-47ed-9892-7ecd67f0265b","type":"CDSView"}},"id":"3ccbc1de-a946-45e9-a7e9-8edfab44a191","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"44eb6be1-0d85-4dfb-9399-463b8d2eb92c","type":"Plot"},"ticker":{"id":"217c53f5-b210-4745-ad0b-d68e0a8e9083","type":"BasicTicker"}},"id":"33f72b11-ed7c-4d19-9528-77f341bb46e8","type":"Grid"},{"attributes":{},"id":"9cbf7b32-3e31-41d9-8404-a60f569e06fe","type":"LinearScale"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"a6d039ba-581f-47ed-9892-7ecd67f0265b","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"e409fe1f-a6b4-4d40-9c51-6d16e2e60983","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"44eb6be1-0d85-4dfb-9399-463b8d2eb92c","type":"Plot"},"ticker":{"id":"96767cc6-5cde-4831-be37-7384fb0050ce","type":"BasicTicker"}},"id":"bb7fd307-bcb5-4bc6-9d81-6bc226772f87","type":"Grid"},{"attributes":{},"id":"c4d37b76-5989-44a7-9949-9982820dbc54","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2b446135-cd05-4126-8a4c-83a9bc736261","type":"Plot"},"ticker":{"id":"4487e389-3c91-4f54-ba58-296ad6dbbc2d","type":"BasicTicker"}},"id":"cc670d9c-d62a-459f-9e02-ebc794316644","type":"Grid"},{"attributes":{"axis_label":"sepal_length","formatter":{"id":"5bfa5939-022b-467d-8ae5-90463092e5c1","type":"BasicTickFormatter"},"plot":{"id":"44eb6be1-0d85-4dfb-9399-463b8d2eb92c","type":"Plot"},"ticker":{"id":"217c53f5-b210-4745-ad0b-d68e0a8e9083","type":"BasicTicker"}},"id":"7b3181ab-9e51-4f14-9a46-224d38119e73","type":"LinearAxis"},{"attributes":{},"id":"5ae65fc9-0baf-4a16-849c-749d06490eed","type":"PanTool"},{"attributes":{},"id":"bd261fe8-6c51-4907-abfe-db634e88cb79","type":"BasicTickFormatter"},{"attributes":{},"id":"217c53f5-b210-4745-ad0b-d68e0a8e9083","type":"BasicTicker"},{"attributes":{},"id":"2750e12f-2ced-4ce6-9328-e91214b9155f","type":"PanTool"},{"attributes":{"plot":{"id":"2b446135-cd05-4126-8a4c-83a9bc736261","type":"Plot"},"ticker":{"id":"c4d37b76-5989-44a7-9949-9982820dbc54","type":"BasicTicker"}},"id":"9dc1a8a0-6ea8-49d7-95cb-6e39bab09f24","type":"Grid"},{"attributes":{},"id":"2e75dea1-600f-43a7-be24-7e4b99cf3e5a","type":"WheelZoomTool"},{"attributes":{},"id":"4487e389-3c91-4f54-ba58-296ad6dbbc2d","type":"BasicTicker"},{"attributes":{},"id":"094a3611-a05c-4621-96a7-dc4ea01d2b7a","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"330d2c82-12b7-4f47-8194-9d8380138e07","type":"Title"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"71222118-7c9d-489e-88b4-cb5faeb39dcb","type":"GlyphRenderer"},{"id":"03805221-eaf4-4bf5-8054-c7f2cefe2b3e","type":"Grid"},{"id":"6faaa0a8-dfb3-4f00-86d4-95e3b6ff3338","type":"Grid"}],"title":{"id":"758aac82-ddee-432b-9b63-5b0a412e7bb7","type":"Title"},"toolbar":{"id":"c9868ca2-642f-43ee-8dc5-7f90be1cec81","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"08714097-33b0-4de5-9258-0c75a7e8777d","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"84d12b40-add3-442e-a34f-dc97ff1da1a0","type":"LinearScale"}},"id":"4b03a45d-ea97-4d2e-a6df-b794dcf3cbbf","type":"Plot"},{"attributes":{},"id":"8c1eaa11-0a35-4ebf-9c73-50f31dd1f7d1","type":"LinearScale"},{"attributes":{},"id":"4450808e-0e5a-4d9d-b4f6-45fe7224d7b8","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_width"}},"id":"e73ab269-b2e9-45f3-a956-4a1fc61353c7","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"414113fe-9204-4ed3-8c1b-e5a2a98318da","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"315a6446-eddb-40ea-9b93-d0d6dc0b05e7","type":"PanTool"},{"id":"fcabb47b-dfec-4185-91e1-c4bb411dbf91","type":"WheelZoomTool"}]},"id":"e7d8037a-55a8-4e5e-b256-e7b302e7a9cf","type":"Toolbar"},{"attributes":{},"id":"14c638f9-0754-444d-8f72-57dc0fcacec8","type":"LinearScale"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"e73ab269-b2e9-45f3-a956-4a1fc61353c7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ca816c69-7d61-4599-a242-a4c72ecbd3c9","type":"CDSView"}},"id":"71222118-7c9d-489e-88b4-cb5faeb39dcb","type":"GlyphRenderer"},{"attributes":{},"id":"0a97380b-e3d8-49d0-a468-84712b637070","type":"LinearScale"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"ca816c69-7d61-4599-a242-a4c72ecbd3c9","type":"CDSView"},{"attributes":{},"id":"8ca77e77-a1ea-4cf4-8d07-a9cca58d0ecf","type":"LinearScale"},{"attributes":{},"id":"c2d036cb-37c2-4c22-b19a-76a5a589c3d6","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4b03a45d-ea97-4d2e-a6df-b794dcf3cbbf","type":"Plot"},"ticker":{"id":"2e2f0194-a68f-47bb-9114-5e1493c47bab","type":"BasicTicker"}},"id":"6faaa0a8-dfb3-4f00-86d4-95e3b6ff3338","type":"Grid"},{"attributes":{},"id":"ab4af1c2-41f6-4987-bbfe-b4031a7baf08","type":"UnionRenderers"},{"attributes":{},"id":"064c3943-6469-43f1-8bc0-0dd79f6a48dd","type":"PanTool"},{"attributes":{},"id":"aac64a02-e31b-46cd-b212-6a2d2e67434f","type":"Selection"},{"attributes":{},"id":"20ca4ea5-beb2-431a-bbfb-31b7dc7f4b29","type":"LinearScale"},{"attributes":{"plot":{"id":"4b03a45d-ea97-4d2e-a6df-b794dcf3cbbf","type":"Plot"},"ticker":{"id":"c2d036cb-37c2-4c22-b19a-76a5a589c3d6","type":"BasicTicker"}},"id":"03805221-eaf4-4bf5-8054-c7f2cefe2b3e","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"d50eb826-1222-43a1-a27e-42cbc02d200d","type":"Title"},{"attributes":{},"id":"2e2f0194-a68f-47bb-9114-5e1493c47bab","type":"BasicTicker"},{"attributes":{},"id":"e502f1d3-9f4e-4249-8fb7-9828c26c2ea3","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"660b186d-9752-4e7f-b0ea-0060be18deac","type":"Title"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"56a6bd43-e152-4905-97d2-1af4a1cf545d","type":"GlyphRenderer"},{"id":"7b6b9ed8-f869-4811-a2e4-0d2d12d70bc3","type":"Grid"},{"id":"4cb06585-1413-4df6-9499-8d8303148df7","type":"Grid"}],"title":{"id":"97fc14be-d282-48e7-9743-41f5d46deb7a","type":"Title"},"toolbar":{"id":"e7d8037a-55a8-4e5e-b256-e7b302e7a9cf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"7f012580-e8d0-4833-af30-1cc27a9de59a","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"2cca6051-e658-4d49-a042-8c09b282e4b8","type":"LinearScale"}},"id":"7ee06295-a986-4c6c-8e64-cacbdf586be3","type":"Plot"},{"attributes":{},"id":"286a57c6-d173-4ed9-9d14-6b64b409d9ec","type":"LinearScale"},{"attributes":{},"id":"742cd69f-11f3-4d23-aa19-a2377851d05f","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_width"}},"id":"7cf84323-f510-4fae-8869-6440b7e7c985","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"e6bc6d85-046c-46cb-b8a8-0f0ee68befdf","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"764cd665-1195-4004-aa46-222d68ea7dbb","type":"PanTool"},{"id":"4b81d638-587b-48f7-8148-4ae9aa4dc876","type":"WheelZoomTool"}]},"id":"3ebf829f-9d36-4b7b-9d30-9e812db5bda9","type":"Toolbar"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"7cf84323-f510-4fae-8869-6440b7e7c985","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"39b75e2b-9dd8-4712-98b6-1bf09ad7b64f","type":"CDSView"}},"id":"56a6bd43-e152-4905-97d2-1af4a1cf545d","type":"GlyphRenderer"},{"attributes":{},"id":"974ef20d-76b9-4002-8622-1519c12855c0","type":"LinearScale"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"39b75e2b-9dd8-4712-98b6-1bf09ad7b64f","type":"CDSView"},{"attributes":{},"id":"022f65f5-3b08-439b-8aef-0c0b41e95506","type":"LinearScale"},{"attributes":{},"id":"5a96ae2f-19dc-4f9b-85df-b991ad673a2a","type":"BasicTicker"},{"attributes":{"children":[{"id":"1588e482-6507-4caa-8d97-5f63bafe7fc9","type":"Plot"},{"id":"fdf70136-dd69-421c-a3b6-f9ccb052902e","type":"Plot"},{"id":"88600c12-39d1-43fa-b72e-89d8c9b9876d","type":"Plot"},{"id":"44eb6be1-0d85-4dfb-9399-463b8d2eb92c","type":"Plot"}]},"id":"3dcc781e-1977-4ec5-92de-2eec509f809f","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"7ee06295-a986-4c6c-8e64-cacbdf586be3","type":"Plot"},"ticker":{"id":"5bd97fd3-f4d5-45ca-aa01-c354d960d3be","type":"BasicTicker"}},"id":"4cb06585-1413-4df6-9499-8d8303148df7","type":"Grid"},{"attributes":{},"id":"a1159e9e-8dd5-4ab6-b4f3-f3db0d7dc485","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"a4c66bc5-f017-4483-bb9b-2be99eb132bb","type":"Plot"},{"id":"bfb41598-dde4-489a-81fb-a7ffc2187876","type":"Plot"},{"id":"4f2c781a-d2de-4d03-a8ff-516d156e3b51","type":"Plot"},{"id":"1bfff567-305e-437b-9948-d9cb6d47f22d","type":"Plot"}]},"id":"efee56ab-5262-4c3c-8568-ab051e08d54b","type":"Row"},{"attributes":{},"id":"315a6446-eddb-40ea-9b93-d0d6dc0b05e7","type":"PanTool"},{"attributes":{},"id":"a2b3994d-9165-4637-b20b-171eac336826","type":"LinearScale"},{"attributes":{"plot":{"id":"7ee06295-a986-4c6c-8e64-cacbdf586be3","type":"Plot"},"ticker":{"id":"5a96ae2f-19dc-4f9b-85df-b991ad673a2a","type":"BasicTicker"}},"id":"7b6b9ed8-f869-4811-a2e4-0d2d12d70bc3","type":"Grid"},{"attributes":{},"id":"b4d8b16d-891c-45e8-90f5-1362a83a42b4","type":"LinearScale"},{"attributes":{},"id":"5bd97fd3-f4d5-45ca-aa01-c354d960d3be","type":"BasicTicker"},{"attributes":{"children":[{"id":"7e5f3a61-c509-465e-9d6e-f92820694f0b","type":"Plot"},{"id":"2b446135-cd05-4126-8a4c-83a9bc736261","type":"Plot"},{"id":"4b03a45d-ea97-4d2e-a6df-b794dcf3cbbf","type":"Plot"},{"id":"7ee06295-a986-4c6c-8e64-cacbdf586be3","type":"Plot"}]},"id":"cd13a208-cba8-4658-a037-22bcbc3589f6","type":"Row"},{"attributes":{},"id":"fcabb47b-dfec-4185-91e1-c4bb411dbf91","type":"WheelZoomTool"},{"attributes":{},"id":"75ef2048-78c5-4dc0-9cc6-85f5ea31c7e1","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"bc622d9f-e2fb-48cd-b7a2-e2759cdb629c","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"4b3a7b4a-6399-4cb8-a6a2-6edb25c381f6","type":"LinearAxis"}],"min_border_bottom":42,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":240,"renderers":[{"id":"c8c3b8f8-7805-4c77-8607-3a0e7345f87c","type":"GlyphRenderer"},{"id":"bc622d9f-e2fb-48cd-b7a2-e2759cdb629c","type":"LinearAxis"},{"id":"e993d610-880c-4897-9067-80f94d39b69c","type":"Grid"},{"id":"4b3a7b4a-6399-4cb8-a6a2-6edb25c381f6","type":"LinearAxis"},{"id":"e8bcb570-d799-46a3-996d-cf131e74c9e9","type":"Grid"}],"title":{"id":"e409fe1f-a6b4-4d40-9c51-6d16e2e60983","type":"Title"},"toolbar":{"id":"3ebf829f-9d36-4b7b-9d30-9e812db5bda9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"e358c5b6-6e70-4953-becb-9c3c8f574c0e","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"75ef2048-78c5-4dc0-9cc6-85f5ea31c7e1","type":"LinearScale"}},"id":"1588e482-6507-4caa-8d97-5f63bafe7fc9","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"992326e1-1088-42f8-ad72-91ddfa085663","type":"Title"},{"attributes":{"plot":null,"text":""},"id":"c2ab311e-3d45-4dab-9379-24083c46c8c1","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_length"}},"id":"ba493f92-1952-482d-9b45-9368a7f14de4","type":"Circle"},{"attributes":{},"id":"4c7768c1-0c96-4901-9f0a-b82a4dffcf3f","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"1588e482-6507-4caa-8d97-5f63bafe7fc9","type":"Plot"},"ticker":{"id":"362f9772-7788-4e7e-a337-2e76d493917c","type":"BasicTicker"}},"id":"e8bcb570-d799-46a3-996d-cf131e74c9e9","type":"Grid"},{"attributes":{},"id":"e358c5b6-6e70-4953-becb-9c3c8f574c0e","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"f8bda5c1-3f24-4b98-a796-f4f1c011b4f9","type":"Title"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"ba493f92-1952-482d-9b45-9368a7f14de4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"71620018-99dd-4ac0-a999-5f429dd3e6ed","type":"CDSView"}},"id":"c8c3b8f8-7805-4c77-8607-3a0e7345f87c","type":"GlyphRenderer"},{"attributes":{},"id":"1fa73fc0-a503-430d-b173-46177c7c7944","type":"LinearScale"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"71620018-99dd-4ac0-a999-5f429dd3e6ed","type":"CDSView"},{"attributes":{},"id":"f660faf4-8ab9-4787-b527-10659e21be96","type":"LinearScale"},{"attributes":{"plot":{"id":"1588e482-6507-4caa-8d97-5f63bafe7fc9","type":"Plot"},"ticker":{"id":"e4dbfff1-0583-4ff4-b18d-9ebed9301d00","type":"BasicTicker"}},"id":"e993d610-880c-4897-9067-80f94d39b69c","type":"Grid"},{"attributes":{},"id":"764cd665-1195-4004-aa46-222d68ea7dbb","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"86d40db2-5220-4703-919b-6538b104dc3d","type":"Title"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"0e013410-3955-47c5-9462-74b0e34d5cdd","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"1588e482-6507-4caa-8d97-5f63bafe7fc9","type":"Plot"},"ticker":{"id":"362f9772-7788-4e7e-a337-2e76d493917c","type":"BasicTicker"}},"id":"4b3a7b4a-6399-4cb8-a6a2-6edb25c381f6","type":"LinearAxis"},{"attributes":{},"id":"48f80a8f-d7c8-41e8-b51a-0c65cdd2229c","type":"LinearScale"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"bd261fe8-6c51-4907-abfe-db634e88cb79","type":"BasicTickFormatter"},"plot":{"id":"1588e482-6507-4caa-8d97-5f63bafe7fc9","type":"Plot"},"ticker":{"id":"e4dbfff1-0583-4ff4-b18d-9ebed9301d00","type":"BasicTicker"}},"id":"bc622d9f-e2fb-48cd-b7a2-e2759cdb629c","type":"LinearAxis"},{"attributes":{},"id":"89fbb698-f0d2-4e67-8721-83e640614bdd","type":"LinearScale"},{"attributes":{},"id":"e4dbfff1-0583-4ff4-b18d-9ebed9301d00","type":"BasicTicker"},{"attributes":{},"id":"7e11d2c4-0c5d-4326-861b-71fb24a60804","type":"LinearScale"},{"attributes":{},"id":"362f9772-7788-4e7e-a337-2e76d493917c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"3b631cf3-8c25-42ee-8ade-9438ece5f4b2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2123975b-2f4c-418a-ab50-f1f821f00767","type":"CDSView"}},"id":"0c879b32-6cd8-4d58-b028-3b5da4678a6e","type":"GlyphRenderer"},{"attributes":{},"id":"cc20bb29-7fbf-4b60-aef9-1882c5bb1d7a","type":"BasicTickFormatter"},{"attributes":{},"id":"625bf6c8-ba9d-400b-b86f-b28ff81e5c21","type":"PanTool"},{"attributes":{},"id":"9cabe9cc-7660-4227-9789-4c4f7f3ddc11","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"2774190a-bb2e-4bc5-932d-77a1e4d85ebf","type":"Title"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"2123975b-2f4c-418a-ab50-f1f821f00767","type":"CDSView"},{"attributes":{},"id":"2934e199-2394-4a95-98c0-038a75dc73fb","type":"LinearScale"},{"attributes":{},"id":"8c3af42f-45ba-4281-a830-cea3c545c595","type":"BasicTicker"},{"attributes":{"plot":{"id":"e99155ca-50de-4a99-b3d3-2be7c4ab0836","type":"Plot"},"ticker":{"id":"8c3af42f-45ba-4281-a830-cea3c545c595","type":"BasicTicker"}},"id":"d19172e6-4541-4e5b-a6c7-03e5e857b19b","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"e99155ca-50de-4a99-b3d3-2be7c4ab0836","type":"Plot"},"ticker":{"id":"4612187e-b04e-46ce-9285-eae5aeecc872","type":"BasicTicker"}},"id":"204531ad-c038-4cdb-ab15-4aa7b7107d18","type":"Grid"},{"attributes":{},"id":"84d12b40-add3-442e-a34f-dc97ff1da1a0","type":"LinearScale"},{"attributes":{"axis_label":"sepal_length","formatter":{"id":"4450808e-0e5a-4d9d-b4f6-45fe7224d7b8","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"e99155ca-50de-4a99-b3d3-2be7c4ab0836","type":"Plot"},"ticker":{"id":"4612187e-b04e-46ce-9285-eae5aeecc872","type":"BasicTicker"}},"id":"b3ff4e67-55b3-4cb6-b86e-e7f68081646d","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"758aac82-ddee-432b-9b63-5b0a412e7bb7","type":"Title"},{"attributes":{"plot":null,"text":""},"id":"97fc14be-d282-48e7-9743-41f5d46deb7a","type":"Title"},{"attributes":{},"id":"4612187e-b04e-46ce-9285-eae5aeecc872","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c194207-a083-4fe5-ae93-2d4d7b44b74f","type":"PanTool"},{"id":"a4e3afe1-732b-41d6-87b5-4c3e97ce7971","type":"WheelZoomTool"}]},"id":"b8fc866b-8c7c-4ba4-8691-be04a687948c","type":"Toolbar"},{"attributes":{},"id":"2cca6051-e658-4d49-a042-8c09b282e4b8","type":"LinearScale"},{"attributes":{},"id":"9f480db9-fcb8-4316-abb7-35622572d00f","type":"WheelZoomTool"},{"attributes":{},"id":"08714097-33b0-4de5-9258-0c75a7e8777d","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"f04ac70e-cdc3-4cde-8062-7f1abc931090","type":"GlyphRenderer"},{"id":"500de46e-6665-4a63-96b7-3658613a40d1","type":"Grid"},{"id":"7030fe48-d598-4b09-93d7-3e1ba7b99d20","type":"Grid"}],"title":{"id":"414113fe-9204-4ed3-8c1b-e5a2a98318da","type":"Title"},"toolbar":{"id":"b8fc866b-8c7c-4ba4-8691-be04a687948c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"14c638f9-0754-444d-8f72-57dc0fcacec8","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"0a97380b-e3d8-49d0-a468-84712b637070","type":"LinearScale"}},"id":"68c4f6ce-440d-46de-a174-c9aae9687b6f","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_length"}},"id":"10cc0853-fb6a-4533-a66f-fdcda0901369","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5b5dc67-1c78-438b-bd5f-6fcb0805b0e7","type":"PanTool"},{"id":"6147f25f-db8a-4cdc-96d7-28b393fc213e","type":"WheelZoomTool"}]},"id":"cd679fc7-b85b-4a5a-a275-76529d56d16f","type":"Toolbar"},{"attributes":{},"id":"7f012580-e8d0-4833-af30-1cc27a9de59a","type":"LinearScale"},{"attributes":{"children":[{"id":"c0e77957-23e4-4ef6-a115-e3d4fbba485a","type":"ToolbarBox"},{"id":"6aa29601-e0a9-4026-8faf-15483f2201c6","type":"Column"}]},"id":"2fcb2cef-0e88-46b5-baec-c1b60d6715d9","type":"Column"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"10cc0853-fb6a-4533-a66f-fdcda0901369","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"00a1498f-472e-4f5f-83a3-2da484b56908","type":"CDSView"}},"id":"f04ac70e-cdc3-4cde-8062-7f1abc931090","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"00a1498f-472e-4f5f-83a3-2da484b56908","type":"CDSView"},{"attributes":{},"id":"f72dea15-e027-497b-9020-cc6411bedadb","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"68c4f6ce-440d-46de-a174-c9aae9687b6f","type":"Plot"},"ticker":{"id":"1dd214b0-9a3a-41de-9dad-d0915bbe6bc6","type":"BasicTicker"}},"id":"7030fe48-d598-4b09-93d7-3e1ba7b99d20","type":"Grid"},{"attributes":{},"id":"2c194207-a083-4fe5-ae93-2d4d7b44b74f","type":"PanTool"},{"attributes":{"plot":{"id":"68c4f6ce-440d-46de-a174-c9aae9687b6f","type":"Plot"},"ticker":{"id":"f72dea15-e027-497b-9020-cc6411bedadb","type":"BasicTicker"}},"id":"500de46e-6665-4a63-96b7-3658613a40d1","type":"Grid"},{"attributes":{},"id":"1dd214b0-9a3a-41de-9dad-d0915bbe6bc6","type":"BasicTicker"},{"attributes":{},"id":"a4e3afe1-732b-41d6-87b5-4c3e97ce7971","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"ceff90e8-b738-44e8-9a9e-7750d721c02a","type":"GlyphRenderer"},{"id":"877e0f16-b23a-42f7-a08a-bbb61fcfe99a","type":"Grid"},{"id":"bd960619-ecba-4885-9349-98d1be19b004","type":"Grid"}],"title":{"id":"d50eb826-1222-43a1-a27e-42cbc02d200d","type":"Title"},"toolbar":{"id":"cd679fc7-b85b-4a5a-a275-76529d56d16f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"742cd69f-11f3-4d23-aa19-a2377851d05f","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"8ca77e77-a1ea-4cf4-8d07-a9cca58d0ecf","type":"LinearScale"}},"id":"e9c998d8-d157-4f51-94bc-8c84fd5c3de7","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_length"}},"id":"d7ad7e6a-4612-4113-ac39-d0fa63e146b2","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0462be83-64ac-47b8-99db-3879376829ad","type":"PanTool"},{"id":"f8e679fa-35e2-4d46-955a-609287f74c02","type":"WheelZoomTool"}]},"id":"622b12ce-0c14-4b82-8e10-cff4e710d9da","type":"Toolbar"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"d7ad7e6a-4612-4113-ac39-d0fa63e146b2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1f26cbb2-fed6-48bf-9a21-58ca82560080","type":"CDSView"}},"id":"ceff90e8-b738-44e8-9a9e-7750d721c02a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"1f26cbb2-fed6-48bf-9a21-58ca82560080","type":"CDSView"},{"attributes":{},"id":"dcdb924d-3d05-4642-898d-96e3b39d86cd","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e9c998d8-d157-4f51-94bc-8c84fd5c3de7","type":"Plot"},"ticker":{"id":"f5214603-d5fa-4475-9d5f-ee9d1974d5f4","type":"BasicTicker"}},"id":"bd960619-ecba-4885-9349-98d1be19b004","type":"Grid"},{"attributes":{},"id":"b5b5dc67-1c78-438b-bd5f-6fcb0805b0e7","type":"PanTool"},{"attributes":{"plot":{"id":"e9c998d8-d157-4f51-94bc-8c84fd5c3de7","type":"Plot"},"ticker":{"id":"dcdb924d-3d05-4642-898d-96e3b39d86cd","type":"BasicTicker"}},"id":"877e0f16-b23a-42f7-a08a-bbb61fcfe99a","type":"Grid"},{"attributes":{"toolbar":{"id":"52f6ce7c-29c3-4f7d-b4d8-e612e5b73a2f","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"c0e77957-23e4-4ef6-a115-e3d4fbba485a","type":"ToolbarBox"},{"attributes":{},"id":"f5214603-d5fa-4475-9d5f-ee9d1974d5f4","type":"BasicTicker"},{"attributes":{},"id":"6147f25f-db8a-4cdc-96d7-28b393fc213e","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"fa06aed2-a8d2-43a2-85d3-e0ba4666c575","type":"GlyphRenderer"},{"id":"6b1c2637-b662-4b37-9218-6a9a5ca96117","type":"Grid"},{"id":"f8173c75-81b4-416f-866a-b93d3b93ee7c","type":"Grid"}],"title":{"id":"660b186d-9752-4e7f-b0ea-0060be18deac","type":"Title"},"toolbar":{"id":"622b12ce-0c14-4b82-8e10-cff4e710d9da","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"974ef20d-76b9-4002-8622-1519c12855c0","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"286a57c6-d173-4ed9-9d14-6b64b409d9ec","type":"LinearScale"}},"id":"ef50820e-6738-4e83-b159-6221ca50800e","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_length"}},"id":"d8376e4a-52ba-4385-b42f-b03cb3288b83","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3797287-399d-4a2e-9e4c-b4c6e45d6b8c","type":"PanTool"},{"id":"bb9b4c8c-4cb7-4788-bc8b-4a60ea410209","type":"WheelZoomTool"}]},"id":"6b01b4c3-31cb-4dfc-ba10-03838c71a9e1","type":"Toolbar"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"d8376e4a-52ba-4385-b42f-b03cb3288b83","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6ff1a122-b004-40a7-afbb-e808bbdf605b","type":"CDSView"}},"id":"fa06aed2-a8d2-43a2-85d3-e0ba4666c575","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"6ff1a122-b004-40a7-afbb-e808bbdf605b","type":"CDSView"},{"attributes":{},"id":"b427a4cd-01b9-4636-b887-5711bb002994","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ef50820e-6738-4e83-b159-6221ca50800e","type":"Plot"},"ticker":{"id":"5be90729-884b-4537-9789-57b46ed1855d","type":"BasicTicker"}},"id":"f8173c75-81b4-416f-866a-b93d3b93ee7c","type":"Grid"},{"attributes":{},"id":"0462be83-64ac-47b8-99db-3879376829ad","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"130891a8-8c70-4781-9e02-de1eb3c59af3","type":"Title"},{"attributes":{"plot":{"id":"ef50820e-6738-4e83-b159-6221ca50800e","type":"Plot"},"ticker":{"id":"b427a4cd-01b9-4636-b887-5711bb002994","type":"BasicTicker"}},"id":"6b1c2637-b662-4b37-9218-6a9a5ca96117","type":"Grid"},{"attributes":{"tools":[{"id":"625bf6c8-ba9d-400b-b86f-b28ff81e5c21","type":"PanTool"},{"id":"9f480db9-fcb8-4316-abb7-35622572d00f","type":"WheelZoomTool"},{"id":"2c194207-a083-4fe5-ae93-2d4d7b44b74f","type":"PanTool"},{"id":"a4e3afe1-732b-41d6-87b5-4c3e97ce7971","type":"WheelZoomTool"},{"id":"b5b5dc67-1c78-438b-bd5f-6fcb0805b0e7","type":"PanTool"},{"id":"6147f25f-db8a-4cdc-96d7-28b393fc213e","type":"WheelZoomTool"},{"id":"0462be83-64ac-47b8-99db-3879376829ad","type":"PanTool"},{"id":"f8e679fa-35e2-4d46-955a-609287f74c02","type":"WheelZoomTool"},{"id":"d3797287-399d-4a2e-9e4c-b4c6e45d6b8c","type":"PanTool"},{"id":"bb9b4c8c-4cb7-4788-bc8b-4a60ea410209","type":"WheelZoomTool"},{"id":"dc5b7a93-0649-4e0d-9e0c-efe0f323f97e","type":"PanTool"},{"id":"0ee79f57-e2c8-4400-8722-7f27d8ce42f1","type":"WheelZoomTool"},{"id":"95f83483-6aa2-4817-832e-dd0b94247aa4","type":"PanTool"},{"id":"785cb4ec-0fa9-4893-97a6-b45a119eff62","type":"WheelZoomTool"},{"id":"34944217-40e5-4905-8d59-42a6b61ffe32","type":"PanTool"},{"id":"c33cd44d-3ded-4ab7-a46d-c0f5f6f43e93","type":"WheelZoomTool"},{"id":"eab9fc1e-8dbe-42b9-8573-d4cb4f10f3fc","type":"PanTool"},{"id":"e95bc6fa-eec8-4ddd-8249-3e595e6caba6","type":"WheelZoomTool"},{"id":"5ae65fc9-0baf-4a16-849c-749d06490eed","type":"PanTool"},{"id":"094a3611-a05c-4621-96a7-dc4ea01d2b7a","type":"WheelZoomTool"},{"id":"064c3943-6469-43f1-8bc0-0dd79f6a48dd","type":"PanTool"},{"id":"e502f1d3-9f4e-4249-8fb7-9828c26c2ea3","type":"WheelZoomTool"},{"id":"315a6446-eddb-40ea-9b93-d0d6dc0b05e7","type":"PanTool"},{"id":"fcabb47b-dfec-4185-91e1-c4bb411dbf91","type":"WheelZoomTool"},{"id":"764cd665-1195-4004-aa46-222d68ea7dbb","type":"PanTool"},{"id":"4b81d638-587b-48f7-8148-4ae9aa4dc876","type":"WheelZoomTool"},{"id":"6887e945-9ce8-4e7b-a12b-f84e8113b67a","type":"PanTool"},{"id":"5a1d0de7-6a2f-4309-bdc6-1ed9640367af","type":"WheelZoomTool"},{"id":"b9c74aff-a09d-446a-bd8c-6927bdbe793c","type":"PanTool"},{"id":"02f44077-e430-4de2-9a77-0c89d25aa4a1","type":"WheelZoomTool"},{"id":"2750e12f-2ced-4ce6-9328-e91214b9155f","type":"PanTool"},{"id":"2e75dea1-600f-43a7-be24-7e4b99cf3e5a","type":"WheelZoomTool"}]},"id":"52f6ce7c-29c3-4f7d-b4d8-e612e5b73a2f","type":"ProxyToolbar"},{"attributes":{},"id":"5be90729-884b-4537-9789-57b46ed1855d","type":"BasicTicker"},{"attributes":{},"id":"f8e679fa-35e2-4d46-955a-609287f74c02","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"7a2d5d61-58e8-4458-84d4-747dc901d4bd","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"0b47ffef-9739-43ab-ab7d-4ba082656c22","type":"GlyphRenderer"},{"id":"3c3f9223-f277-48b0-a088-7410a589c960","type":"Grid"},{"id":"7a2d5d61-58e8-4458-84d4-747dc901d4bd","type":"LinearAxis"},{"id":"f99ff86e-3b2b-48c5-80a4-e2b3c8dd2a16","type":"Grid"}],"title":{"id":"e6bc6d85-046c-46cb-b8a8-0f0ee68befdf","type":"Title"},"toolbar":{"id":"6b01b4c3-31cb-4dfc-ba10-03838c71a9e1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"022f65f5-3b08-439b-8aef-0c0b41e95506","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"a2b3994d-9165-4637-b20b-171eac336826","type":"LinearScale"}},"id":"a4c66bc5-f017-4483-bb9b-2be99eb132bb","type":"Plot"},{"attributes":{},"id":"9932e45f-4fe2-4b33-ab24-fbeadf538a2a","type":"LinearScale"},{"attributes":{},"id":"b0d9d353-1d84-4346-83a4-ba55968c49cf","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_width"}},"id":"4c2b1c61-c790-4040-9ba5-02b453c54428","type":"Circle"},{"attributes":{},"id":"d3797287-399d-4a2e-9e4c-b4c6e45d6b8c","type":"PanTool"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"4c2b1c61-c790-4040-9ba5-02b453c54428","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"035c9bba-777b-411f-a2e6-a8241c10b9a9","type":"CDSView"}},"id":"0b47ffef-9739-43ab-ab7d-4ba082656c22","type":"GlyphRenderer"},{"attributes":{},"id":"19f81cf9-4394-44bb-8f0f-f385e1e06c80","type":"LinearScale"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"035c9bba-777b-411f-a2e6-a8241c10b9a9","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"ad28ebb6-6b83-4a0d-8781-71447e18f9f4","type":"Title"},{"attributes":{},"id":"1f2f3974-5b8e-42dc-8635-40dfe77c5ea5","type":"BasicTicker"},{"attributes":{"axis_label":"sepal_width","formatter":{"id":"a1159e9e-8dd5-4ab6-b4f3-f3db0d7dc485","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"a4c66bc5-f017-4483-bb9b-2be99eb132bb","type":"Plot"},"ticker":{"id":"d780a45e-882c-4417-bf77-e37662980cc6","type":"BasicTicker"}},"id":"7a2d5d61-58e8-4458-84d4-747dc901d4bd","type":"LinearAxis"},{"attributes":{},"id":"5bfa5939-022b-467d-8ae5-90463092e5c1","type":"BasicTickFormatter"},{"attributes":{},"id":"d780a45e-882c-4417-bf77-e37662980cc6","type":"BasicTicker"},{"attributes":{},"id":"45e6fc62-22d8-4123-9211-ad79892fad41","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a4c66bc5-f017-4483-bb9b-2be99eb132bb","type":"Plot"},"ticker":{"id":"1f2f3974-5b8e-42dc-8635-40dfe77c5ea5","type":"BasicTicker"}},"id":"3c3f9223-f277-48b0-a088-7410a589c960","type":"Grid"},{"attributes":{},"id":"51602cf9-b41c-4ce1-9bac-117a2cd7e778","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"a4c66bc5-f017-4483-bb9b-2be99eb132bb","type":"Plot"},"ticker":{"id":"d780a45e-882c-4417-bf77-e37662980cc6","type":"BasicTicker"}},"id":"f99ff86e-3b2b-48c5-80a4-e2b3c8dd2a16","type":"Grid"},{"attributes":{},"id":"ca1815e6-e73b-44b0-bd11-8fc5c90847d7","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dc5b7a93-0649-4e0d-9e0c-efe0f323f97e","type":"PanTool"},{"id":"0ee79f57-e2c8-4400-8722-7f27d8ce42f1","type":"WheelZoomTool"}]},"id":"d4ecf314-090f-4a2a-8efe-3b06f3b0f196","type":"Toolbar"},{"attributes":{},"id":"0e013410-3955-47c5-9462-74b0e34d5cdd","type":"BasicTickFormatter"},{"attributes":{},"id":"bb9b4c8c-4cb7-4788-bc8b-4a60ea410209","type":"WheelZoomTool"},{"attributes":{},"id":"5bd2112b-8f4f-44a5-80f7-25ce23d52204","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"67c2e299-407e-4a84-9861-1a8c0e28a1d2","type":"GlyphRenderer"},{"id":"238ff0f3-8d6d-47d4-a581-4f14cd909a0e","type":"Grid"},{"id":"840faf18-101c-4697-a05d-af960a218b17","type":"Grid"}],"title":{"id":"c2ab311e-3d45-4dab-9379-24083c46c8c1","type":"Title"},"toolbar":{"id":"d4ecf314-090f-4a2a-8efe-3b06f3b0f196","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"b4d8b16d-891c-45e8-90f5-1362a83a42b4","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"4c7768c1-0c96-4901-9f0a-b82a4dffcf3f","type":"LinearScale"}},"id":"bfb41598-dde4-489a-81fb-a7ffc2187876","type":"Plot"},{"attributes":{},"id":"18a91dba-724e-4743-938b-2558ee52a1b8","type":"LinearScale"},{"attributes":{"callback":null,"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]}},"selected":{"id":"aac64a02-e31b-46cd-b212-6a2d2e67434f","type":"Selection"},"selection_policy":{"id":"ab4af1c2-41f6-4987-bbfe-b4031a7baf08","type":"UnionRenderers"}},"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"a74f793d-f0f8-4c26-ad48-b7626bd3e358","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_width"}},"id":"01504feb-ca02-44da-98c7-4e48c9069d61","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"95f83483-6aa2-4817-832e-dd0b94247aa4","type":"PanTool"},{"id":"785cb4ec-0fa9-4893-97a6-b45a119eff62","type":"WheelZoomTool"}]},"id":"fcb5ddd5-d0ef-4aee-bd4d-f74234da42d6","type":"Toolbar"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"01504feb-ca02-44da-98c7-4e48c9069d61","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8a7473df-b5ca-49ef-bc72-0bf297e8d917","type":"CDSView"}},"id":"67c2e299-407e-4a84-9861-1a8c0e28a1d2","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"0c879b32-6cd8-4d58-b028-3b5da4678a6e","type":"GlyphRenderer"},{"id":"f04ac70e-cdc3-4cde-8062-7f1abc931090","type":"GlyphRenderer"},{"id":"ceff90e8-b738-44e8-9a9e-7750d721c02a","type":"GlyphRenderer"},{"id":"fa06aed2-a8d2-43a2-85d3-e0ba4666c575","type":"GlyphRenderer"},{"id":"0b47ffef-9739-43ab-ab7d-4ba082656c22","type":"GlyphRenderer"},{"id":"67c2e299-407e-4a84-9861-1a8c0e28a1d2","type":"GlyphRenderer"},{"id":"0987ae26-696e-4fe6-b8db-04b12bee494f","type":"GlyphRenderer"},{"id":"e21daf51-dee7-47ab-b947-a255a7f19ecd","type":"GlyphRenderer"},{"id":"e3d9403e-75eb-4787-bef7-822bbd158a05","type":"GlyphRenderer"},{"id":"3ccbc1de-a946-45e9-a7e9-8edfab44a191","type":"GlyphRenderer"},{"id":"71222118-7c9d-489e-88b4-cb5faeb39dcb","type":"GlyphRenderer"},{"id":"56a6bd43-e152-4905-97d2-1af4a1cf545d","type":"GlyphRenderer"},{"id":"c8c3b8f8-7805-4c77-8607-3a0e7345f87c","type":"GlyphRenderer"},{"id":"2f5e0df5-9a30-4cde-bfea-241dc800534d","type":"GlyphRenderer"},{"id":"a6775d72-9ab0-4372-9c4a-26ce8fe732c6","type":"GlyphRenderer"},{"id":"e4c6858a-33cf-4855-b3e4-27e934431698","type":"GlyphRenderer"}]},"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"8a7473df-b5ca-49ef-bc72-0bf297e8d917","type":"CDSView"},{"attributes":{},"id":"044f5925-04e6-428d-a82a-0d9dd47d7644","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":[{"id":"0c879b32-6cd8-4d58-b028-3b5da4678a6e","type":"GlyphRenderer"},{"id":"f04ac70e-cdc3-4cde-8062-7f1abc931090","type":"GlyphRenderer"},{"id":"ceff90e8-b738-44e8-9a9e-7750d721c02a","type":"GlyphRenderer"},{"id":"fa06aed2-a8d2-43a2-85d3-e0ba4666c575","type":"GlyphRenderer"},{"id":"0b47ffef-9739-43ab-ab7d-4ba082656c22","type":"GlyphRenderer"},{"id":"67c2e299-407e-4a84-9861-1a8c0e28a1d2","type":"GlyphRenderer"},{"id":"0987ae26-696e-4fe6-b8db-04b12bee494f","type":"GlyphRenderer"},{"id":"e21daf51-dee7-47ab-b947-a255a7f19ecd","type":"GlyphRenderer"},{"id":"e3d9403e-75eb-4787-bef7-822bbd158a05","type":"GlyphRenderer"},{"id":"3ccbc1de-a946-45e9-a7e9-8edfab44a191","type":"GlyphRenderer"},{"id":"71222118-7c9d-489e-88b4-cb5faeb39dcb","type":"GlyphRenderer"},{"id":"56a6bd43-e152-4905-97d2-1af4a1cf545d","type":"GlyphRenderer"},{"id":"c8c3b8f8-7805-4c77-8607-3a0e7345f87c","type":"GlyphRenderer"},{"id":"2f5e0df5-9a30-4cde-bfea-241dc800534d","type":"GlyphRenderer"},{"id":"a6775d72-9ab0-4372-9c4a-26ce8fe732c6","type":"GlyphRenderer"},{"id":"e4c6858a-33cf-4855-b3e4-27e934431698","type":"GlyphRenderer"}]},"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"bfb41598-dde4-489a-81fb-a7ffc2187876","type":"Plot"},"ticker":{"id":"32aaf02b-5774-4081-a952-2c61083834fc","type":"BasicTicker"}},"id":"840faf18-101c-4697-a05d-af960a218b17","type":"Grid"},{"attributes":{},"id":"dc5b7a93-0649-4e0d-9e0c-efe0f323f97e","type":"PanTool"},{"attributes":{"children":[{"id":"1cdd5e51-abef-440c-8423-650818eab611","type":"Row"},{"id":"efee56ab-5262-4c3c-8568-ab051e08d54b","type":"Row"},{"id":"cd13a208-cba8-4658-a037-22bcbc3589f6","type":"Row"},{"id":"3dcc781e-1977-4ec5-92de-2eec509f809f","type":"Row"}]},"id":"6aa29601-e0a9-4026-8faf-15483f2201c6","type":"Column"},{"attributes":{"plot":{"id":"bfb41598-dde4-489a-81fb-a7ffc2187876","type":"Plot"},"ticker":{"id":"044f5925-04e6-428d-a82a-0d9dd47d7644","type":"BasicTicker"}},"id":"238ff0f3-8d6d-47d4-a581-4f14cd909a0e","type":"Grid"},{"attributes":{"children":[{"id":"e99155ca-50de-4a99-b3d3-2be7c4ab0836","type":"Plot"},{"id":"68c4f6ce-440d-46de-a174-c9aae9687b6f","type":"Plot"},{"id":"e9c998d8-d157-4f51-94bc-8c84fd5c3de7","type":"Plot"},{"id":"ef50820e-6738-4e83-b159-6221ca50800e","type":"Plot"}]},"id":"1cdd5e51-abef-440c-8423-650818eab611","type":"Row"},{"attributes":{},"id":"32aaf02b-5774-4081-a952-2c61083834fc","type":"BasicTicker"},{"attributes":{},"id":"0ee79f57-e2c8-4400-8722-7f27d8ce42f1","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"b3ff4e67-55b3-4cb6-b86e-e7f68081646d","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"0c879b32-6cd8-4d58-b028-3b5da4678a6e","type":"GlyphRenderer"},{"id":"d19172e6-4541-4e5b-a6c7-03e5e857b19b","type":"Grid"},{"id":"b3ff4e67-55b3-4cb6-b86e-e7f68081646d","type":"LinearAxis"},{"id":"204531ad-c038-4cdb-ab15-4aa7b7107d18","type":"Grid"}],"title":{"id":"330d2c82-12b7-4f47-8194-9d8380138e07","type":"Title"},"toolbar":{"id":"60c174ae-5b7f-482e-9718-6eda4234f15c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"9cbf7b32-3e31-41d9-8404-a60f569e06fe","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"8c1eaa11-0a35-4ebf-9c73-50f31dd1f7d1","type":"LinearScale"}},"id":"e99155ca-50de-4a99-b3d3-2be7c4ab0836","type":"Plot"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"0987ae26-696e-4fe6-b8db-04b12bee494f","type":"GlyphRenderer"},{"id":"ff5cf1bc-99c0-40e9-9fa7-6c20f0945e59","type":"Grid"},{"id":"26bcaff8-9b99-4f7b-934b-c4e4468b7666","type":"Grid"}],"title":{"id":"992326e1-1088-42f8-ad72-91ddfa085663","type":"Title"},"toolbar":{"id":"fcb5ddd5-d0ef-4aee-bd4d-f74234da42d6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ddb6c09-0b44-4d34-aa53-5f9d060e1d3d","type":"DataRange1d"},"x_scale":{"id":"f660faf4-8ab9-4787-b527-10659e21be96","type":"LinearScale"},"y_range":{"id":"0bc8bea0-9cd4-4784-bf66-d389691b6c34","type":"DataRange1d"},"y_scale":{"id":"20ca4ea5-beb2-431a-bbfb-31b7dc7f4b29","type":"LinearScale"}},"id":"4f2c781a-d2de-4d03-a8ff-516d156e3b51","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"625bf6c8-ba9d-400b-b86f-b28ff81e5c21","type":"PanTool"},{"id":"9f480db9-fcb8-4316-abb7-35622572d00f","type":"WheelZoomTool"}]},"id":"60c174ae-5b7f-482e-9718-6eda4234f15c","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_length"}},"id":"3b631cf3-8c25-42ee-8ade-9438ece5f4b2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_width"}},"id":"a08a268d-7907-4066-8b14-8cc31f945db9","type":"Circle"},{"attributes":{"plot":{"id":"4f2c781a-d2de-4d03-a8ff-516d156e3b51","type":"Plot"},"ticker":{"id":"e8431752-1cc5-45ef-9283-62f4b8a8e8f8","type":"BasicTicker"}},"id":"ff5cf1bc-99c0-40e9-9fa7-6c20f0945e59","type":"Grid"},{"attributes":{"data_source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"},"glyph":{"id":"a08a268d-7907-4066-8b14-8cc31f945db9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"dbe1d3b8-6d8d-46cf-8cbe-fa82d06728a2","type":"CDSView"}},"id":"0987ae26-696e-4fe6-b8db-04b12bee494f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bebc9e10-d457-4c42-bd50-8fd6de46a342","type":"ColumnDataSource"}},"id":"dbe1d3b8-6d8d-46cf-8cbe-fa82d06728a2","type":"CDSView"},{"attributes":{},"id":"e8431752-1cc5-45ef-9283-62f4b8a8e8f8","type":"BasicTicker"}],"root_ids":["2fcb2cef-0e88-46b5-baec-c1b60d6715d9"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"7fd3e1b0-4f49-4545-8563-9668b3195daf","elementid":"1b871b4a-e09c-4f32-9a16-ed5c50bd95f3","modelid":"2fcb2cef-0e88-46b5-baec-c1b60d6715d9"}];
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