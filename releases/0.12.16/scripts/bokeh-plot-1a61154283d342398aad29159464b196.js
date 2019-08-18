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
      };var element = document.getElementById("8bf4d796-57e6-4837-9ba6-9671da912ab9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8bf4d796-57e6-4837-9ba6-9671da912ab9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4824d398-570f-4bfd-a356-86a1626b1326":{"roots":{"references":[{"attributes":{},"id":"800e6240-2454-40b0-8d97-ed132de5de43","type":"BasicTickFormatter"},{"attributes":{},"id":"d2b3d51e-0005-4524-9be3-7d3552900e09","type":"BasicTicker"},{"attributes":{},"id":"62f65448-af83-4d8e-afab-4e70bf25c3eb","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"fe22f9a0-7c43-4c0e-bf06-1b4ffdf50cbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a49849e-cdb1-482c-adfa-b2657054b659","type":"BasicTicker"}},"id":"1ef22db6-18fa-48bd-8919-5988665bda2a","type":"Grid"},{"attributes":{},"id":"1a72d9e3-df2d-4b3a-a7b5-a134412fb83c","type":"Selection"},{"attributes":{"callback":null,"end":35},"id":"0406a117-d134-4472-853d-13ad3f923613","type":"Range1d"},{"attributes":{"callback":null,"data":{"dh":[10,10,25],"dw":[20,20,10],"image":[{"__ndarray__":"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","dtype":"float64","shape":[20,200]},{"__ndarray__":"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","dtype":"float64","shape":[20,10]},[[false,false,true,true,true,false,false,false,false,true],[true,false,true,false,true,true,true,false,true,true],[true,true,false,false,true,false,true,true,true,false],[true,false,true,false,false,true,true,false,true,true],[true,true,true,true,false,false,false,false,true,false],[true,true,false,false,false,false,true,true,false,true],[true,true,true,false,true,false,false,false,true,false],[false,true,true,false,false,false,false,true,true,false],[true,true,true,true,true,true,false,true,false,false],[true,false,false,false,true,true,true,false,true,false],[true,true,true,false,true,true,false,false,true,false],[true,true,false,true,false,true,false,false,true,false],[true,true,false,true,true,false,false,true,false,false],[false,false,true,true,false,true,true,false,false,false],[true,false,false,false,false,true,false,true,false,true],[false,true,true,false,true,false,false,false,false,false],[true,false,false,false,false,true,true,true,false,true],[false,true,true,false,false,false,true,false,true,false],[false,true,true,false,true,false,true,true,true,true],[true,true,false,true,true,true,false,false,false,true],[false,true,true,true,true,true,true,true,false,false],[false,true,false,true,true,false,true,false,false,true],[true,false,true,true,false,false,true,true,false,true],[false,true,false,true,true,true,true,true,false,false],[false,true,false,true,false,false,false,false,true,false]]],"pattern":["smooth ramp","steps","bitmask"],"squared":[{"__ndarray__":"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","dtype":"float64","shape":[20,200]},{"__ndarray__":"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","dtype":"float64","shape":[20,10]},{"__ndarray__":"AAABAQEAAAAAAQEAAQABAQEAAQEBAQAAAQABAQEAAQABAAABAQABAQEBAQEAAAAAAQABAQAAAAABAQABAQEBAAEAAAABAAABAQAAAAABAQABAQEBAQEAAQAAAQAAAAEBAQABAAEBAQABAQAAAQABAQABAAEAAAEAAQEAAQEAAAEAAAAAAQEAAQEAAAABAAAAAAEAAQABAAEBAAEAAAAAAAEAAAAAAQEBAAEAAQEAAAABAAEAAAEBAAEAAQEBAQEBAAEBAQAAAAEAAQEBAQEBAQAAAAEAAQEAAQAAAQEAAQEAAAEBAAEAAQABAQEBAQAAAAEAAQAAAAABAA==","dtype":"int8","shape":[25,10]}],"x":[0,0,25],"y":[5,20,5]},"selected":{"id":"1a72d9e3-df2d-4b3a-a7b5-a134412fb83c","type":"Selection"},"selection_policy":{"id":"936cc5d9-6482-4c62-a544-9dd0d0cb1611","type":"UnionRenderers"}},"id":"c61602df-d9c4-45ac-b78f-d12c88b4b8db","type":"ColumnDataSource"},{"attributes":{},"id":"fdc66a39-7187-4bda-99d5-c86e06737840","type":"LinearScale"},{"attributes":{},"id":"85a50cbe-e071-4725-abf7-74c2aea9bca2","type":"LinearScale"},{"attributes":{"plot":{"id":"fe22f9a0-7c43-4c0e-bf06-1b4ffdf50cbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2b3d51e-0005-4524-9be3-7d3552900e09","type":"BasicTicker"}},"id":"d7871cab-7169-4540-ba1d-2cf36e75bd35","type":"Grid"},{"attributes":{},"id":"83855e79-9550-4f1d-9765-14d4c1ca602c","type":"WheelZoomTool"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["index","$index"],["pattern","@pattern"],["x","$x"],["y","$y"],["value","@image"],["squared","@squared"]]},"id":"c653c091-ebe0-4ce2-ab82-cdcab4c2b4c3","type":"HoverTool"},{"attributes":{"palette":["#000003","#000004","#000006","#010007","#010109","#01010B","#02010E","#020210","#030212","#040314","#040316","#050418","#06041B","#07051D","#08061F","#090621","#0A0723","#0B0726","#0D0828","#0E082A","#0F092D","#10092F","#120A32","#130A34","#140B36","#160B39","#170B3B","#190B3E","#1A0B40","#1C0C43","#1D0C45","#1F0C47","#200C4A","#220B4C","#240B4E","#260B50","#270B52","#290B54","#2B0A56","#2D0A58","#2E0A5A","#300A5C","#32095D","#34095F","#350960","#370961","#390962","#3B0964","#3C0965","#3E0966","#400966","#410967","#430A68","#450A69","#460A69","#480B6A","#4A0B6A","#4B0C6B","#4D0C6B","#4F0D6C","#500D6C","#520E6C","#530E6D","#550F6D","#570F6D","#58106D","#5A116D","#5B116E","#5D126E","#5F126E","#60136E","#62146E","#63146E","#65156E","#66156E","#68166E","#6A176E","#6B176E","#6D186E","#6E186E","#70196E","#72196D","#731A6D","#751B6D","#761B6D","#781C6D","#7A1C6D","#7B1D6C","#7D1D6C","#7E1E6C","#801F6B","#811F6B","#83206B","#85206A","#86216A","#88216A","#892269","#8B2269","#8D2369","#8E2468","#902468","#912567","#932567","#952666","#962666","#982765","#992864","#9B2864","#9C2963","#9E2963","#A02A62","#A12B61","#A32B61","#A42C60","#A62C5F","#A72D5F","#A92E5E","#AB2E5D","#AC2F5C","#AE305B","#AF315B","#B1315A","#B23259","#B43358","#B53357","#B73456","#B83556","#BA3655","#BB3754","#BD3753","#BE3852","#BF3951","#C13A50","#C23B4F","#C43C4E","#C53D4D","#C73E4C","#C83E4B","#C93F4A","#CB4049","#CC4148","#CD4247","#CF4446","#D04544","#D14643","#D24742","#D44841","#D54940","#D64A3F","#D74B3E","#D94D3D","#DA4E3B","#DB4F3A","#DC5039","#DD5238","#DE5337","#DF5436","#E05634","#E25733","#E35832","#E45A31","#E55B30","#E65C2E","#E65E2D","#E75F2C","#E8612B","#E9622A","#EA6428","#EB6527","#EC6726","#ED6825","#ED6A23","#EE6C22","#EF6D21","#F06F1F","#F0701E","#F1721D","#F2741C","#F2751A","#F37719","#F37918","#F47A16","#F57C15","#F57E14","#F68012","#F68111","#F78310","#F7850E","#F8870D","#F8880C","#F88A0B","#F98C09","#F98E08","#F99008","#FA9107","#FA9306","#FA9506","#FA9706","#FB9906","#FB9B06","#FB9D06","#FB9E07","#FBA007","#FBA208","#FBA40A","#FBA60B","#FBA80D","#FBAA0E","#FBAC10","#FBAE12","#FBB014","#FBB116","#FBB318","#FBB51A","#FBB71C","#FBB91E","#FABB21","#FABD23","#FABF25","#FAC128","#F9C32A","#F9C52C","#F9C72F","#F8C931","#F8CB34","#F8CD37","#F7CF3A","#F7D13C","#F6D33F","#F6D542","#F5D745","#F5D948","#F4DB4B","#F4DC4F","#F3DE52","#F3E056","#F3E259","#F2E45D","#F2E660","#F1E864","#F1E968","#F1EB6C","#F1ED70","#F1EE74","#F1F079","#F1F27D","#F2F381","#F2F485","#F3F689","#F4F78D","#F5F891","#F6FA95","#F7FB99","#F9FC9D","#FAFDA0","#FCFEA4"]},"id":"cb9757f5-bd76-45b6-99d7-a6cb02ba75f8","type":"LinearColorMapper"},{"attributes":{"color_mapper":{"id":"4a011896-e91c-41cb-9483-58fa2e391ad4","type":"LinearColorMapper"},"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f4b3fbf2-0962-410b-804f-5dbc30d7564d","type":"Image"},{"attributes":{"formatter":{"id":"62f65448-af83-4d8e-afab-4e70bf25c3eb","type":"BasicTickFormatter"},"plot":{"id":"fe22f9a0-7c43-4c0e-bf06-1b4ffdf50cbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a49849e-cdb1-482c-adfa-b2657054b659","type":"BasicTicker"}},"id":"65e3d30f-030d-4f3f-a37f-7d289c0010e8","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c653c091-ebe0-4ce2-ab82-cdcab4c2b4c3","type":"HoverTool"},{"id":"83855e79-9550-4f1d-9765-14d4c1ca602c","type":"WheelZoomTool"}]},"id":"3811ae08-7dee-4d2f-ad0c-a3150e456b4a","type":"Toolbar"},{"attributes":{"color_mapper":{"id":"cb9757f5-bd76-45b6-99d7-a6cb02ba75f8","type":"LinearColorMapper"},"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f4a3aa2c-e97f-48bc-9e55-c0f8ce8bf72f","type":"Image"},{"attributes":{"data_source":{"id":"c61602df-d9c4-45ac-b78f-d12c88b4b8db","type":"ColumnDataSource"},"glyph":{"id":"f4a3aa2c-e97f-48bc-9e55-c0f8ce8bf72f","type":"Image"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f4b3fbf2-0962-410b-804f-5dbc30d7564d","type":"Image"},"selection_glyph":null,"view":{"id":"32e37a57-9211-44eb-b68f-5a0c7487e480","type":"CDSView"}},"id":"18f61135-0459-42e9-9715-625b797e3b58","type":"GlyphRenderer"},{"attributes":{},"id":"2a49849e-cdb1-482c-adfa-b2657054b659","type":"BasicTicker"},{"attributes":{"palette":["#000003","#000004","#000006","#010007","#010109","#01010B","#02010E","#020210","#030212","#040314","#040316","#050418","#06041B","#07051D","#08061F","#090621","#0A0723","#0B0726","#0D0828","#0E082A","#0F092D","#10092F","#120A32","#130A34","#140B36","#160B39","#170B3B","#190B3E","#1A0B40","#1C0C43","#1D0C45","#1F0C47","#200C4A","#220B4C","#240B4E","#260B50","#270B52","#290B54","#2B0A56","#2D0A58","#2E0A5A","#300A5C","#32095D","#34095F","#350960","#370961","#390962","#3B0964","#3C0965","#3E0966","#400966","#410967","#430A68","#450A69","#460A69","#480B6A","#4A0B6A","#4B0C6B","#4D0C6B","#4F0D6C","#500D6C","#520E6C","#530E6D","#550F6D","#570F6D","#58106D","#5A116D","#5B116E","#5D126E","#5F126E","#60136E","#62146E","#63146E","#65156E","#66156E","#68166E","#6A176E","#6B176E","#6D186E","#6E186E","#70196E","#72196D","#731A6D","#751B6D","#761B6D","#781C6D","#7A1C6D","#7B1D6C","#7D1D6C","#7E1E6C","#801F6B","#811F6B","#83206B","#85206A","#86216A","#88216A","#892269","#8B2269","#8D2369","#8E2468","#902468","#912567","#932567","#952666","#962666","#982765","#992864","#9B2864","#9C2963","#9E2963","#A02A62","#A12B61","#A32B61","#A42C60","#A62C5F","#A72D5F","#A92E5E","#AB2E5D","#AC2F5C","#AE305B","#AF315B","#B1315A","#B23259","#B43358","#B53357","#B73456","#B83556","#BA3655","#BB3754","#BD3753","#BE3852","#BF3951","#C13A50","#C23B4F","#C43C4E","#C53D4D","#C73E4C","#C83E4B","#C93F4A","#CB4049","#CC4148","#CD4247","#CF4446","#D04544","#D14643","#D24742","#D44841","#D54940","#D64A3F","#D74B3E","#D94D3D","#DA4E3B","#DB4F3A","#DC5039","#DD5238","#DE5337","#DF5436","#E05634","#E25733","#E35832","#E45A31","#E55B30","#E65C2E","#E65E2D","#E75F2C","#E8612B","#E9622A","#EA6428","#EB6527","#EC6726","#ED6825","#ED6A23","#EE6C22","#EF6D21","#F06F1F","#F0701E","#F1721D","#F2741C","#F2751A","#F37719","#F37918","#F47A16","#F57C15","#F57E14","#F68012","#F68111","#F78310","#F7850E","#F8870D","#F8880C","#F88A0B","#F98C09","#F98E08","#F99008","#FA9107","#FA9306","#FA9506","#FA9706","#FB9906","#FB9B06","#FB9D06","#FB9E07","#FBA007","#FBA208","#FBA40A","#FBA60B","#FBA80D","#FBAA0E","#FBAC10","#FBAE12","#FBB014","#FBB116","#FBB318","#FBB51A","#FBB71C","#FBB91E","#FABB21","#FABD23","#FABF25","#FAC128","#F9C32A","#F9C52C","#F9C72F","#F8C931","#F8CB34","#F8CD37","#F7CF3A","#F7D13C","#F6D33F","#F6D542","#F5D745","#F5D948","#F4DB4B","#F4DC4F","#F3DE52","#F3E056","#F3E259","#F2E45D","#F2E660","#F1E864","#F1E968","#F1EB6C","#F1ED70","#F1EE74","#F1F079","#F1F27D","#F2F381","#F2F485","#F3F689","#F4F78D","#F5F891","#F6FA95","#F7FB99","#F9FC9D","#FAFDA0","#FCFEA4"]},"id":"4a011896-e91c-41cb-9483-58fa2e391ad4","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":35},"id":"dbc2e709-186c-40c7-a40d-01a9b205edc6","type":"Range1d"},{"attributes":{"formatter":{"id":"800e6240-2454-40b0-8d97-ed132de5de43","type":"BasicTickFormatter"},"plot":{"id":"fe22f9a0-7c43-4c0e-bf06-1b4ffdf50cbe","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2b3d51e-0005-4524-9be3-7d3552900e09","type":"BasicTicker"}},"id":"9b90b8a1-1d4d-4952-bac6-976ae1eb91f8","type":"LinearAxis"},{"attributes":{"source":{"id":"c61602df-d9c4-45ac-b78f-d12c88b4b8db","type":"ColumnDataSource"}},"id":"32e37a57-9211-44eb-b68f-5a0c7487e480","type":"CDSView"},{"attributes":{},"id":"936cc5d9-6482-4c62-a544-9dd0d0cb1611","type":"UnionRenderers"},{"attributes":{"plot":null,"text":""},"id":"faa77eba-ed76-4632-ac84-b4c4ee5b7acb","type":"Title"},{"attributes":{"below":[{"id":"9b90b8a1-1d4d-4952-bac6-976ae1eb91f8","type":"LinearAxis"}],"left":[{"id":"65e3d30f-030d-4f3f-a37f-7d289c0010e8","type":"LinearAxis"}],"renderers":[{"id":"9b90b8a1-1d4d-4952-bac6-976ae1eb91f8","type":"LinearAxis"},{"id":"d7871cab-7169-4540-ba1d-2cf36e75bd35","type":"Grid"},{"id":"65e3d30f-030d-4f3f-a37f-7d289c0010e8","type":"LinearAxis"},{"id":"1ef22db6-18fa-48bd-8919-5988665bda2a","type":"Grid"},{"id":"18f61135-0459-42e9-9715-625b797e3b58","type":"GlyphRenderer"}],"title":{"id":"faa77eba-ed76-4632-ac84-b4c4ee5b7acb","type":"Title"},"toolbar":{"id":"3811ae08-7dee-4d2f-ad0c-a3150e456b4a","type":"Toolbar"},"x_range":{"id":"dbc2e709-186c-40c7-a40d-01a9b205edc6","type":"Range1d"},"x_scale":{"id":"85a50cbe-e071-4725-abf7-74c2aea9bca2","type":"LinearScale"},"y_range":{"id":"0406a117-d134-4472-853d-13ad3f923613","type":"Range1d"},"y_scale":{"id":"fdc66a39-7187-4bda-99d5-c86e06737840","type":"LinearScale"}},"id":"fe22f9a0-7c43-4c0e-bf06-1b4ffdf50cbe","subtype":"Figure","type":"Plot"}],"root_ids":["fe22f9a0-7c43-4c0e-bf06-1b4ffdf50cbe"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"4824d398-570f-4bfd-a356-86a1626b1326","elementid":"8bf4d796-57e6-4837-9ba6-9671da912ab9","modelid":"fe22f9a0-7c43-4c0e-bf06-1b4ffdf50cbe"}];
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