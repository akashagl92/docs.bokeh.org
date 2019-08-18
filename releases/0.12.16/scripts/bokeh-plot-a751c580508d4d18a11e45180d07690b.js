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
      };var element = document.getElementById("a61efb0b-40ab-411e-84af-a0fe806d4e63");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a61efb0b-40ab-411e-84af-a0fe806d4e63' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"38ccd24a-e4e4-4ef3-8d61-42799a25731f":{"roots":{"references":[{"attributes":{"source":{"id":"f91f757a-a0e0-49cf-94dd-71a1a77aea1e","type":"ColumnDataSource"}},"id":"bdbf9cfe-95df-4f24-bb25-87d34556f35d","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["Gram-positive","Gram-negative"],"x":[-30,-30],"y":[-370,-390]},"selected":{"id":"6ad34b86-8623-4c73-ac06-356ba9ee1a12","type":"Selection"},"selection_policy":{"id":"53f77f60-5d20-4918-83e0-9e409f72c433","type":"UnionRenderers"}},"id":"24f47fd3-343b-4a50-817e-0bedbcc82961","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e45597d2-587e-4c1b-a2ea-bff3e1fd3070","type":"ColumnDataSource"},"glyph":{"id":"f99c3e61-4394-4f04-9b2f-a17b137e6f36","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cb02b2c5-c1c0-4560-9ce8-46329aa66e12","type":"Circle"},"selection_glyph":null,"view":{"id":"a658f575-54d2-40fd-bb5d-dfa2ac9f8024","type":"CDSView"}},"id":"67f4fa8a-a5b2-4289-8937-cba9f36acfc5","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"yERVhbPz8T9mg5l5pRPoP3v6ENHHf9g/KMXd3ZUIiz8rHjNzPs/Wv0CVqspgO+e/tM3dLZGH8b/KUGb2cXH3v97T7r5SW/2/eKu7w5miAcAD7f8nipcEwI0uRIx6jAfAF3CI8GqBCsChscxUW3YNwJd5iNylNRDAW5qqDh6wEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"m8z7btjvY0D9PDy5w1RpQDjj0CUzIWlABsmM1zIPZUChS31Y0mVsQB0YCXI1nGZAOOPQJTMhaUCyh+QAGnxuQM3Wg944S2RA/HdeznjObkA449AlMyFpQAAAAAAAIHJAAAAAAAAgckCg0sRXLXlhQFhbROgM+V5AoNLEVy15YUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"oVZm1m4b8T8Xp7sbHGPmP91BVRW1HtU/p1NmZnBGpL/J1u4uUTDav49xiCjq6+i/27vM3NVf8r/xPlWltkn4vwXC3W2XM/6/jCIzG7wOAsAXZHd/rAMFwKGlu+Oc+AfAK+f/R43tCsC1KESsfeINwCE1RAi3axDA5VVmOi/mEcA=","dtype":"float64","shape":[16]}},"selected":{"id":"12dd2645-a376-439a-bc78-cc3fadd5af2b","type":"Selection"},"selection_policy":{"id":"022bf11e-39e2-4d1f-9d8e-0b5f0ca761af","type":"UnionRenderers"}},"id":"f2b8742e-4756-4e1e-8d4c-5429e355d429","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":90},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"e797a6f9-9494-4fdb-bd41-4b98cecb7c14","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":80},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"23f6bfbd-3c90-4bb5-bb5d-62da0e763f84","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"fe825975-b489-4ae0-8247-baa4604354d9","type":"ColumnDataSource"},"glyph":{"id":"23f6bfbd-3c90-4bb5-bb5d-62da0e763f84","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f153d5ba-e4f6-4b12-b321-538c15e6f7a0","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"962e4497-f1d3-47b5-b630-c4cad4638c1a","type":"CDSView"}},"id":"1b6354d0-0785-48a0-b255-910bb1937e03","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"10c15795-44f5-439a-ad4a-b64732fb079c","type":"AnnularWedge"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"white"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"c44b96ec-c79f-4184-8a20-ff7e9db816df","type":"Circle"},{"attributes":{"source":{"id":"fe825975-b489-4ae0-8247-baa4604354d9","type":"ColumnDataSource"}},"id":"962e4497-f1d3-47b5-b630-c4cad4638c1a","type":"CDSView"},{"attributes":{"data_source":{"id":"afe68e38-0c4f-469f-95b3-a20cf3b589f6","type":"ColumnDataSource"},"glyph":{"id":"c6db6992-a876-46fc-ae63-f5d6f537ad54","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e1ab206a-18e2-453d-a5e8-4b27b0672369","type":"Text"},"selection_glyph":null,"view":{"id":"9da9adb3-0349-4997-b382-e72979e1cda9","type":"CDSView"}},"id":"90f31cd0-b7ca-4d17-a70a-aaad2a996675","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f2b8742e-4756-4e1e-8d4c-5429e355d429","type":"ColumnDataSource"},"glyph":{"id":"e797a6f9-9494-4fdb-bd41-4b98cecb7c14","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10c15795-44f5-439a-ad4a-b64732fb079c","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"681019dd-ad1f-444b-a0e9-3f5f14c3feaf","type":"CDSView"}},"id":"294b59d8-f527-4f74-91f0-065bc0887c9a","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"BKq7ixo48z/dTWaGc5zqP2iPqupjkd0/WgwiIoOntz8+iZlZor3Rv8nK3b2SsuS/eGh3JypD8L+O6//vCi32v47r/+8KLfY/emh3JypD8D/Iyt29krLkP0CJmVmivdE/QAwiIoOnt79gj6rqY5Hdv+BNZoZznOq/BKq7ixo4878=","dtype":"float64","shape":[16]},"text":["Mycobacterium tuberculosis","Salmonella schottmuelleri","Proteus vulgaris","Klebsiella pneumoniae","Brucella abortus","Pseudomonas aeruginosa","Escherichia coli","Salmonella (Eberthella) typhosa","Aerobacter aerogenes","Brucella antracis","Streptococcus fecalis","Staphylococcus aureus","Staphylococcus albus","Streptococcus hemolyticus","Streptococcus viridans","Diplococcus pneumoniae"],"x":{"__ndarray__":"cGn7M6UwWkAzVkZE5WtoQKq2lcOOOXBAjuBL4jQMckDOGdT43m5xQMF6BpGZ7WxA7SBXXEoVY0AXTcs3yKRKQBFNyzfIpErA6CBXXEoVY8DBegaRme1swM4Z1PjebnHAj+BL4jQMcsCrtpXDjjlwwDJWRkTla2jAcmn7M6UwWsA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"aywf0KvmcEAmrFe0AMpqQKfycbJzKGBAv6EJxQDCOkC6LG9iL9dTwNZbjg1z2GXAdpVS2APSbsAYUkjE/tBxwBhSSMT+0HHAepVS2APSbsDWW44Nc9hlwL8sb2Iv11PAmaEJxQDCOkCi8nGycyhgQCesV7QAympAaywf0KvmcEA=","dtype":"float64","shape":[16]}},"selected":{"id":"635c0829-ce37-4cb9-9474-6d096e232be2","type":"Selection"},"selection_policy":{"id":"2f2a9685-6254-4e4e-8c8a-b009012869c3","type":"UnionRenderers"}},"id":"afe68e38-0c4f-469f-95b3-a20cf3b589f6","type":"ColumnDataSource"},{"attributes":{"source":{"id":"475b4f6b-5af0-43a0-acfa-f4bada9b0f9b","type":"ColumnDataSource"}},"id":"c0a6167e-727c-42f9-9de4-a66847f1da0f","type":"CDSView"},{"attributes":{},"id":"511673f7-2664-4c40-a844-921050b05f35","type":"UnionRenderers"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1ab206a-18e2-453d-a5e8-4b27b0672369","type":"Text"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6db6992-a876-46fc-ae63-f5d6f537ad54","type":"Text"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"f99c3e61-4394-4f04-9b2f-a17b137e6f36","type":"Circle"},{"attributes":{"source":{"id":"f2b8742e-4756-4e1e-8d4c-5429e355d429","type":"ColumnDataSource"}},"id":"681019dd-ad1f-444b-a0e9-3f5f14c3feaf","type":"CDSView"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"771bedeb-9108-4364-9933-5d71f27dee90","type":"Text"},{"attributes":{"data_source":{"id":"475b4f6b-5af0-43a0-acfa-f4bada9b0f9b","type":"ColumnDataSource"},"glyph":{"id":"c44b96ec-c79f-4184-8a20-ff7e9db816df","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"92b6534c-5fd3-4494-9a25-e2d021833a00","type":"Circle"},"selection_glyph":null,"view":{"id":"c0a6167e-727c-42f9-9de4-a66847f1da0f","type":"CDSView"}},"id":"c18db638-fb54-4892-9579-618e3e43aa4c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e45597d2-587e-4c1b-a2ea-bff3e1fd3070","type":"ColumnDataSource"}},"id":"a658f575-54d2-40fd-bb5d-dfa2ac9f8024","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"92b6534c-5fd3-4494-9a25-e2d021833a00","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb02b2c5-c1c0-4560-9ce8-46329aa66e12","type":"Circle"},{"attributes":{"callback":null,"data":{"text":["0.001","0.01","0.1","1.0","10.0","100.0"],"y":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxA","dtype":"float64","shape":[6]}},"selected":{"id":"c82fd329-f273-49a6-9e30-c16e207c787c","type":"Selection"},"selection_policy":{"id":"2bff3a1c-cdb7-432d-b121-67d2dbcbb555","type":"UnionRenderers"}},"id":"49b9a0d5-8db8-45fd-895c-7a6052c44b6d","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"0668f7ea-f082-48ad-a18b-c4d377ad3cf1","type":"Text"},{"attributes":{"source":{"id":"afe68e38-0c4f-469f-95b3-a20cf3b589f6","type":"ColumnDataSource"}},"id":"9da9adb3-0349-4997-b382-e72979e1cda9","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#f0e1d2"},"min_border":0,"outline_line_color":{"value":"black"},"plot_height":800,"plot_width":800,"renderers":[{"id":"d1a6e2bc-4a5d-412a-9f2d-762d83ef0352","type":"BoxAnnotation"},{"id":"098c1d6f-84a0-4b80-8355-f3d8db070e5c","type":"GlyphRenderer"},{"id":"a3511db4-7a16-4403-bcbb-ae19ccb7fd08","type":"GlyphRenderer"},{"id":"be4ede98-5b57-46f5-bad1-ca84214ffefa","type":"GlyphRenderer"},{"id":"294b59d8-f527-4f74-91f0-065bc0887c9a","type":"GlyphRenderer"},{"id":"c18db638-fb54-4892-9579-618e3e43aa4c","type":"GlyphRenderer"},{"id":"513dbc71-d0c2-4667-9d01-8fe2ffb067f4","type":"GlyphRenderer"},{"id":"1b6354d0-0785-48a0-b255-910bb1937e03","type":"GlyphRenderer"},{"id":"90f31cd0-b7ca-4d17-a70a-aaad2a996675","type":"GlyphRenderer"},{"id":"67f4fa8a-a5b2-4289-8937-cba9f36acfc5","type":"GlyphRenderer"},{"id":"0d767bd1-7a8c-4020-ac9d-53003e7cee4f","type":"GlyphRenderer"},{"id":"33c835f7-b256-472b-9eed-7ba7ae0b5e14","type":"GlyphRenderer"},{"id":"5a503a1e-c3d5-49a7-b17b-deb57935769b","type":"GlyphRenderer"}],"title":{"id":"62604bc7-1447-4fbe-8191-6940b3c403ce","type":"Title"},"toolbar":{"id":"1d0ee3e7-a175-4053-bb20-0ffd36dd941d","type":"Toolbar"},"x_range":{"id":"424014e9-afba-4b73-b04b-852fc364f928","type":"Range1d"},"x_scale":{"id":"a4e77910-863a-4ffc-9496-f269611edc04","type":"LinearScale"},"y_range":{"id":"d304812a-9e42-48fd-b09c-a9e3d12f63e5","type":"Range1d"},"y_scale":{"id":"cee65cd8-5cff-41df-8559-a1e8bf0d1cfd","type":"LinearScale"}},"id":"1af469fd-327e-49e6-aa33-746bd33d1fe4","subtype":"Figure","type":"Plot"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"e0c746b5-fe70-45d0-aa77-30e0ceaed644","type":"Text"},{"attributes":{"data_source":{"id":"49b9a0d5-8db8-45fd-895c-7a6052c44b6d","type":"ColumnDataSource"},"glyph":{"id":"e0c746b5-fe70-45d0-aa77-30e0ceaed644","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0668f7ea-f082-48ad-a18b-c4d377ad3cf1","type":"Text"},"selection_glyph":null,"view":{"id":"0b587c88-7295-4ee4-bed0-1f21b988fbbe","type":"CDSView"}},"id":"513dbc71-d0c2-4667-9d01-8fe2ffb067f4","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"fill_color":["#aeaeb8","#e69584"],"line_color":["#aeaeb8","#e69584"],"x":[-40,-40],"y":[-370,-390]},"selected":{"id":"949b2fd0-be3e-4fe9-a1ab-02b54d038f2d","type":"Selection"},"selection_policy":{"id":"fa820136-a059-431a-936b-e7c8eaf66cdb","type":"UnionRenderers"}},"id":"e45597d2-587e-4c1b-a2ea-bff3e1fd3070","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"FyEz4zyk8z8EPFU1uHTrP7hriEjtQd8/ln2Zmahpvj/urLv7GA3Qv6Lc7g5O2uO/yuL/nw+u7797dIiY6MD1v4/3EGHJqvu/Ub3MFFXKAMDc/hB5Rb8DwGZAVd01tAbA8IGZQSapCcB6w92lFp4MwAcFIgoHkw/ARyMzt/tDEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"pmlXNAGDYkDWwF0C/m1lQDjj0CUzIWlAZ+OHhpjCZECbzPtu2O9jQJvM+27Y72NAHRgJcjWcZkAdGAlyNZxmQAbJjNcyD2VAx3MGqjT1bUAGyYzXMg9lQIaiNChEiGtAOOPQJTMhaUDoDDhWBvtgQKDSxFcteWFASjEX/kFVYUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"8DJENPjL8j+1X3fXLsTpPxqzzIza4Ns/Hpuqql3lsD+MZXe3K27Tv/G4zGzXiuW/jN/ufkyv8L+iYndHLZn2v7bl/w8Og/y/ZTREbHc2AcDwdYjQZysEwHq3zDRYIAfABPkQmUgVCsCOOlX9OAoNwBt8mWEp/w/A0d7u4gx6EcA=","dtype":"float64","shape":[16]}},"selected":{"id":"504b1ee1-23d2-41b9-823d-91d525f1e42e","type":"Selection"},"selection_policy":{"id":"6c0e2bfe-44a9-4d18-8fdc-9a43dda35ab6","type":"UnionRenderers"}},"id":"f91f757a-a0e0-49cf-94dd-71a1a77aea1e","type":"ColumnDataSource"},{"attributes":{"source":{"id":"49b9a0d5-8db8-45fd-895c-7a6052c44b6d","type":"ColumnDataSource"}},"id":"0b587c88-7295-4ee4-bed0-1f21b988fbbe","type":"CDSView"},{"attributes":{"source":{"id":"d0f3339d-9c03-40cc-995c-e4b3dd30f70a","type":"ColumnDataSource"}},"id":"15d6c68a-12d5-4c87-a2b5-37aefc9df806","type":"CDSView"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}},"selected":{"id":"ce10ac6c-27ed-4b2d-afdb-0c9a8bd3366c","type":"Selection"},"selection_policy":{"id":"534e87bb-5d30-4321-90b2-84b947a272d9","type":"UnionRenderers"}},"id":"fe825975-b489-4ae0-8247-baa4604354d9","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":80},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"f153d5ba-e4f6-4b12-b321-538c15e6f7a0","type":"AnnularWedge"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"206110f3-a517-4d49-a2f1-acd247c75703","type":"Text"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":13},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"17504d63-ad49-422a-99eb-7acae9fda5bc","type":"Rect"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"b3fc2b8d-6f4d-49c8-91b7-d42d9a620094","type":"AnnularWedge"},{"attributes":{"source":{"id":"24f47fd3-343b-4a50-817e-0bedbcc82961","type":"ColumnDataSource"}},"id":"07b9e63a-878b-4e8c-82e0-81fffbf0438b","type":"CDSView"},{"attributes":{"data_source":{"id":"a3a87b1c-1c10-461c-a0eb-34a098f48548","type":"ColumnDataSource"},"glyph":{"id":"17504d63-ad49-422a-99eb-7acae9fda5bc","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ef3cc803-7d63-4ca6-a478-e8460de58955","type":"Rect"},"selection_glyph":null,"view":{"id":"46287d55-df27-473b-8ff6-9dbbb222a99b","type":"CDSView"}},"id":"33c835f7-b256-472b-9eed-7ba7ae0b5e14","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"24f47fd3-343b-4a50-817e-0bedbcc82961","type":"ColumnDataSource"},"glyph":{"id":"771bedeb-9108-4364-9933-5d71f27dee90","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"206110f3-a517-4d49-a2f1-acd247c75703","type":"Text"},"selection_glyph":null,"view":{"id":"07b9e63a-878b-4e8c-82e0-81fffbf0438b","type":"CDSView"}},"id":"0d767bd1-7a8c-4020-ac9d-53003e7cee4f","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"fill_color":["#0d3362","#c64737","black"],"line_color":["#0d3362","#c64737","black"],"x":[-40,-40,-40],"y":[18,0,-18]},"selected":{"id":"c32d8e63-f1cb-4d9d-ad71-a0be1533eba9","type":"Selection"},"selection_policy":{"id":"39c75360-b4e0-4737-b39f-4588ca8d095d","type":"UnionRenderers"}},"id":"a3a87b1c-1c10-461c-a0eb-34a098f48548","type":"ColumnDataSource"},{"attributes":{"source":{"id":"a3a87b1c-1c10-461c-a0eb-34a098f48548","type":"ColumnDataSource"}},"id":"46287d55-df27-473b-8ff6-9dbbb222a99b","type":"CDSView"},{"attributes":{"data_source":{"id":"d0f3339d-9c03-40cc-995c-e4b3dd30f70a","type":"ColumnDataSource"},"glyph":{"id":"9eb1eb27-9938-431e-b520-6d642d347c9c","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3fc2b8d-6f4d-49c8-91b7-d42d9a620094","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"15d6c68a-12d5-4c87-a2b5-37aefc9df806","type":"CDSView"}},"id":"a3511db4-7a16-4403-bcbb-ae19ccb7fd08","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":13},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef3cc803-7d63-4ca6-a478-e8460de58955","type":"Rect"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#0d3362"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#0d3362"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"9eb1eb27-9938-431e-b520-6d642d347c9c","type":"AnnularWedge"},{"attributes":{"callback":null,"data":{"text":["Penicillin","Streptomycin","Neomycin"],"x":[-15,-15,-15],"y":[18,0,-18]},"selected":{"id":"72d7b995-032b-438d-bfe5-c0400018e911","type":"Selection"},"selection_policy":{"id":"5bca7c2c-c21a-47ec-a69b-3ddef7a7d879","type":"UnionRenderers"}},"id":"82c35f27-8efc-4718-bea6-6281455b471f","type":"ColumnDataSource"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"87e90287-431a-4ed7-bc87-9b4499aa9a5d","type":"Text"},{"attributes":{},"id":"dad20063-e613-4c53-89ce-73ed57993ba8","type":"PanTool"},{"attributes":{},"id":"c82fd329-f273-49a6-9e30-c16e207c787c","type":"Selection"},{"attributes":{"data_source":{"id":"82c35f27-8efc-4718-bea6-6281455b471f","type":"ColumnDataSource"},"glyph":{"id":"87e90287-431a-4ed7-bc87-9b4499aa9a5d","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9be98b9c-477f-4486-bd0d-a69fda69df76","type":"Text"},"selection_glyph":null,"view":{"id":"65290482-acf9-4ca7-85fb-a34a95607ecc","type":"CDSView"}},"id":"5a503a1e-c3d5-49a7-b17b-deb57935769b","type":"GlyphRenderer"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9be98b9c-477f-4486-bd0d-a69fda69df76","type":"Text"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"Zv0QQcZU9T+i9BDxytXuP3ru/18JAuM/RKG7Ox+5zD9kd4gI55XCvwQkM1M7eeC/LCpE5PxM7L8smKo6XxD0v0AbMwNA+vm/U567yyDk/7+0ECLKAOcCwD5SZi7x2wXAyJOqkuHQCMBS1e720cULwN8WM1vCug7ANKy7X9nXEMA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"bLZfBPAOV0Cg0sRXLXlhQDLrDr5nTGNA1FIAQwHoVkAGyYzXMg9lQNRSAEMB6FZAFEU4zHF2XEAGyYzXMg9lQHi2fdUW2VZAAAAAAAAgckAGyYzXMg9lQIaiNChEiGtA/HdeznjObkAAAAAAACByQKYExgH2o29ApgTGAfajb0A=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"Pw8ikoF89D9UGDOTQSXtPysSIgKAUeE/CDBExPn2xT+g6P9/DFjJv1IAEbHEKeK/egYiQob97b9Thpnpo+j0v2cJIrKE0vq/PUZVvTJeAMDIh5khI1MDwFLJ3YUTSAbA3Aoi6gM9CcBmTGZO9DEMwPONqrLkJg/Avmd3i+oNEcA=","dtype":"float64","shape":[16]}},"selected":{"id":"840a03e6-d366-4439-859c-5ae203520421","type":"Selection"},"selection_policy":{"id":"17ed8c44-e676-4921-8f82-68ab438fe522","type":"UnionRenderers"}},"id":"d0f3339d-9c03-40cc-995c-e4b3dd30f70a","type":"ColumnDataSource"},{"attributes":{},"id":"17ed8c44-e676-4921-8f82-68ab438fe522","type":"UnionRenderers"},{"attributes":{"source":{"id":"f431db3a-4d10-4f4d-bfaa-3be675f8b36c","type":"ColumnDataSource"}},"id":"b369da24-7714-4362-b22c-d9fe1f303a20","type":"CDSView"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"field":"fill_color"},"inner_radius":{"units":"data","value":90},"line_color":{"field":"line_color"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26cf66ca-8845-4a4e-a4a2-5abe505fe0fa","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"e98e9f65-1dd2-4453-932f-9cf691791184","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"f431db3a-4d10-4f4d-bfaa-3be675f8b36c","type":"ColumnDataSource"},"glyph":{"id":"26cf66ca-8845-4a4e-a4a2-5abe505fe0fa","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e98e9f65-1dd2-4453-932f-9cf691791184","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"b369da24-7714-4362-b22c-d9fe1f303a20","type":"CDSView"}},"id":"098c1d6f-84a0-4b80-8355-f3d8db070e5c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"82c35f27-8efc-4718-bea6-6281455b471f","type":"ColumnDataSource"}},"id":"65290482-acf9-4ca7-85fb-a34a95607ecc","type":"CDSView"},{"attributes":{},"id":"79469430-e79f-436f-9590-e53253403e00","type":"HelpTool"},{"attributes":{},"id":"504b1ee1-23d2-41b9-823d-91d525f1e42e","type":"Selection"},{"attributes":{},"id":"fb93c01c-b89f-4f1b-94d3-758f9458d1d3","type":"ResetTool"},{"attributes":{},"id":"ad8e9501-2adb-4aed-b6d3-0c7a7d5fcaf1","type":"Selection"},{"attributes":{},"id":"71eabbdc-cd00-41f2-a404-2524ffc45037","type":"SaveTool"},{"attributes":{},"id":"840a03e6-d366-4439-859c-5ae203520421","type":"Selection"},{"attributes":{"overlay":{"id":"d1a6e2bc-4a5d-412a-9f2d-762d83ef0352","type":"BoxAnnotation"}},"id":"4e988def-fc76-4528-8370-2214914ca022","type":"BoxZoomTool"},{"attributes":{},"id":"6c0e2bfe-44a9-4d18-8fdc-9a43dda35ab6","type":"UnionRenderers"},{"attributes":{},"id":"3b5973d1-6d60-4e86-b4be-3056e6a54a73","type":"WheelZoomTool"},{"attributes":{},"id":"022bf11e-39e2-4d1f-9d8e-0b5f0ca761af","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d1a6e2bc-4a5d-412a-9f2d-762d83ef0352","type":"BoxAnnotation"},{"attributes":{},"id":"12dd2645-a376-439a-bc78-cc3fadd5af2b","type":"Selection"},{"attributes":{},"id":"a4e77910-863a-4ffc-9496-f269611edc04","type":"LinearScale"},{"attributes":{},"id":"b3e1da65-a9d0-4068-a185-ea6fe2f69003","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"juv/7wot9j95aHcnKkPwP8nK3b2SsuQ/QImZWaK90T9QDCIig6e3v2iPqupjkd2/3E1mhnOc6r8EqruLGjjzvxgtRFT7Ifm/LLDMHNwL/7+hmapy3noCwCvb7tbObwXAtRwzO79kCMA/Xnefr1kLwMufuwOgTg7AqvD/M8ihEMA=","dtype":"float64","shape":[16]},"fill_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"line_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}},"selected":{"id":"ad8e9501-2adb-4aed-b6d3-0c7a7d5fcaf1","type":"Selection"},"selection_policy":{"id":"511673f7-2664-4c40-a844-921050b05f35","type":"UnionRenderers"}},"id":"f431db3a-4d10-4f4d-bfaa-3be675f8b36c","type":"ColumnDataSource"},{"attributes":{},"id":"3d92768b-c072-4083-9d62-69f07cda4635","type":"Selection"},{"attributes":{},"id":"cee65cd8-5cff-41df-8559-a1e8bf0d1cfd","type":"LinearScale"},{"attributes":{},"id":"2bff3a1c-cdb7-432d-b121-67d2dbcbb555","type":"UnionRenderers"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"d304812a-9e42-48fd-b09c-a9e3d12f63e5","type":"Range1d"},{"attributes":{},"id":"949b2fd0-be3e-4fe9-a1ab-02b54d038f2d","type":"Selection"},{"attributes":{},"id":"534e87bb-5d30-4321-90b2-84b947a272d9","type":"UnionRenderers"},{"attributes":{},"id":"ce10ac6c-27ed-4b2d-afdb-0c9a8bd3366c","type":"Selection"},{"attributes":{},"id":"635c0829-ce37-4cb9-9474-6d096e232be2","type":"Selection"},{"attributes":{},"id":"fa820136-a059-431a-936b-e7c8eaf66cdb","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dad20063-e613-4c53-89ce-73ed57993ba8","type":"PanTool"},{"id":"3b5973d1-6d60-4e86-b4be-3056e6a54a73","type":"WheelZoomTool"},{"id":"4e988def-fc76-4528-8370-2214914ca022","type":"BoxZoomTool"},{"id":"71eabbdc-cd00-41f2-a404-2524ffc45037","type":"SaveTool"},{"id":"fb93c01c-b89f-4f1b-94d3-758f9458d1d3","type":"ResetTool"},{"id":"79469430-e79f-436f-9590-e53253403e00","type":"HelpTool"}]},"id":"1d0ee3e7-a175-4053-bb20-0ffd36dd941d","type":"Toolbar"},{"attributes":{},"id":"6ad34b86-8623-4c73-ac06-356ba9ee1a12","type":"Selection"},{"attributes":{"data_source":{"id":"f91f757a-a0e0-49cf-94dd-71a1a77aea1e","type":"ColumnDataSource"},"glyph":{"id":"2b3297d6-1985-4297-83ec-7eae2fac19bc","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d0f136b2-31c6-4f6d-8c71-9a68f3a03175","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"bdbf9cfe-95df-4f24-bb25-87d34556f35d","type":"CDSView"}},"id":"be4ede98-5b57-46f5-bad1-ca84214ffefa","type":"GlyphRenderer"},{"attributes":{},"id":"2f2a9685-6254-4e4e-8c8a-b009012869c3","type":"UnionRenderers"},{"attributes":{},"id":"c32d8e63-f1cb-4d9d-ad71-a0be1533eba9","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c64737"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#c64737"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2b3297d6-1985-4297-83ec-7eae2fac19bc","type":"AnnularWedge"},{"attributes":{},"id":"39c75360-b4e0-4737-b39f-4588ca8d095d","type":"UnionRenderers"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"d0f136b2-31c6-4f6d-8c71-9a68f3a03175","type":"AnnularWedge"},{"attributes":{"callback":null,"data":{"radius":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxAAAAAAACAVkA=","dtype":"float64","shape":[7]}},"selected":{"id":"3d92768b-c072-4083-9d62-69f07cda4635","type":"Selection"},"selection_policy":{"id":"b3e1da65-a9d0-4068-a185-ea6fe2f69003","type":"UnionRenderers"}},"id":"475b4f6b-5af0-43a0-acfa-f4bada9b0f9b","type":"ColumnDataSource"},{"attributes":{},"id":"53f77f60-5d20-4918-83e0-9e409f72c433","type":"UnionRenderers"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"424014e9-afba-4b73-b04b-852fc364f928","type":"Range1d"},{"attributes":{},"id":"72d7b995-032b-438d-bfe5-c0400018e911","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"62604bc7-1447-4fbe-8191-6940b3c403ce","type":"Title"},{"attributes":{},"id":"5bca7c2c-c21a-47ec-a69b-3ddef7a7d879","type":"UnionRenderers"}],"root_ids":["1af469fd-327e-49e6-aa33-746bd33d1fe4"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"38ccd24a-e4e4-4ef3-8d61-42799a25731f","elementid":"a61efb0b-40ab-411e-84af-a0fe806d4e63","modelid":"1af469fd-327e-49e6-aa33-746bd33d1fe4"}];
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