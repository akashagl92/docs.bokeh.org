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
      };var element = document.getElementById("b08507ae-8cb0-48fc-83f1-7311edd5bdc4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b08507ae-8cb0-48fc-83f1-7311edd5bdc4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bcab87e5-a95b-442d-9da6-f790eefef9c1":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"8c487ba6-b97d-41aa-a929-0aa758dcf87d","type":"BoxAnnotation"}},"id":"f9889b44-a2df-4cf9-b13e-3a493ed5882b","type":"BoxSelectTool"},{"attributes":{},"id":"d9147a98-4881-49af-ab54-cf838a1f87df","type":"BasicTicker"},{"attributes":{},"id":"929ab658-fef8-4f47-afdc-37740b644c4a","type":"ResetTool"},{"attributes":{"callback":null},"id":"35186436-9c96-4b3a-a9e1-b795d56b57d7","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e18b13d-d7db-4761-b16c-dbb1f7763aee","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"11b4572e-d814-4bcb-aaa1-b2e9519ea18f","type":"Title"},{"attributes":{"data_source":{"id":"3cb21ef2-d9a4-4c69-9109-51ba5cf90048","type":"ColumnDataSource"},"glyph":{"id":"39c1f27c-a7c9-46d9-959b-0329e3a289c0","type":"Circle"},"hover_glyph":{"id":"458f3978-47b2-4691-a16f-4e6d93d06269","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"16f1f243-af90-4485-8169-6776c85c1bed","type":"Circle"},"selection_glyph":null,"view":{"id":"e1992755-8972-4f7d-b63d-9fe885b05099","type":"CDSView"}},"id":"b29efc2f-d9e2-46f4-9181-b2351b85b2e9","type":"GlyphRenderer"},{"attributes":{},"id":"e777e8cf-5b89-4b37-9ec1-990dec824ee1","type":"BasicTickFormatter"},{"attributes":{},"id":"4f6aba10-aafc-4562-a228-95b142b33da9","type":"LinearScale"},{"attributes":{"callback":null,"renderers":"auto"},"id":"0b0558a9-1a61-4760-874d-da85c6f046dd","type":"HoverTool"},{"attributes":{},"id":"cd374a87-e7d6-4df1-81d9-62a6b4198b6e","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"7463f62c-dd06-40a0-af51-4001ad13eb14","type":"LinearAxis"}],"left":[{"id":"901652a7-5105-4f79-97b4-7748181b478e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7463f62c-dd06-40a0-af51-4001ad13eb14","type":"LinearAxis"},{"id":"843ef10a-cb67-49a5-bdaf-5efd5aa21540","type":"Grid"},{"id":"901652a7-5105-4f79-97b4-7748181b478e","type":"LinearAxis"},{"id":"6d837e03-409c-46c3-bd0a-975ca02dad50","type":"Grid"},{"id":"9461695e-78ce-464b-96aa-dcece565186f","type":"BoxAnnotation"},{"id":"d300a379-7b5b-4165-b178-9728e1a9a3cc","type":"GlyphRenderer"}],"title":{"id":"11b4572e-d814-4bcb-aaa1-b2e9519ea18f","type":"Title"},"toolbar":{"id":"3b0e114f-7a61-48d1-a5bf-4f2b24de8155","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6681f44c-ab32-4a88-9987-22facbcdda7b","type":"DataRange1d"},"x_scale":{"id":"1befe5a2-9393-4d6d-8769-523239549d1f","type":"LinearScale"},"y_range":{"id":"35186436-9c96-4b3a-a9e1-b795d56b57d7","type":"DataRange1d"},"y_scale":{"id":"4f6aba10-aafc-4562-a228-95b142b33da9","type":"LinearScale"}},"id":"8404b8ea-651f-4095-b9e4-888850df1635","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"03d132b8-2e62-4603-bd54-c208fdd6ebc8","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"143ba5bd-38b1-4e3f-8c5a-279484f6041b","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"9461695e-78ce-464b-96aa-dcece565186f","type":"BoxAnnotation"}},"id":"a2f499ca-a226-4b88-9327-9bd2f8dcf285","type":"BoxSelectTool"},{"attributes":{"plot":{"id":"8404b8ea-651f-4095-b9e4-888850df1635","subtype":"Figure","type":"Plot"},"ticker":{"id":"227a37d6-dccd-43cd-933b-ebe201caf0e6","type":"BasicTicker"}},"id":"843ef10a-cb67-49a5-bdaf-5efd5aa21540","type":"Grid"},{"attributes":{},"id":"758ac0f8-06f1-4e1d-8c64-35083c07f4a8","type":"BasicTickFormatter"},{"attributes":{"filters":[{"id":"992d2bb4-04a2-48f7-a596-7d61f345772f","type":"IndexFilter"}],"source":{"id":"3cb21ef2-d9a4-4c69-9109-51ba5cf90048","type":"ColumnDataSource"}},"id":"2ce984ba-df6d-46c9-8f70-62613a59ac12","type":"CDSView"},{"attributes":{},"id":"48f71a11-38fe-4065-b31c-328c45c102c5","type":"BasicTicker"},{"attributes":{},"id":"c356e2ac-d587-4eb9-947d-e0b860633cfb","type":"UnionRenderers"},{"attributes":{},"id":"dc34f5c0-e8d1-46a6-b78a-9c7947b4a428","type":"LinearScale"},{"attributes":{},"id":"fd3a5a33-b491-446e-8bd5-45c6122dcf60","type":"Selection"},{"attributes":{"source":{"id":"3cb21ef2-d9a4-4c69-9109-51ba5cf90048","type":"ColumnDataSource"}},"id":"e1992755-8972-4f7d-b63d-9fe885b05099","type":"CDSView"},{"attributes":{"indices":[0,2,4]},"id":"992d2bb4-04a2-48f7-a596-7d61f345772f","type":"IndexFilter"},{"attributes":{"plot":{"id":"b1510935-85fb-4770-a482-073d5d99bd03","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6ba4bdc-f480-469b-8d09-2ac200f7ce9f","type":"BasicTicker"}},"id":"92dc81b3-542d-43eb-a7ac-107d14eb6432","type":"Grid"},{"attributes":{"children":[{"id":"1463e5a1-4d54-49e8-8965-106f93defdb2","type":"ToolbarBox"},{"id":"d83430a6-49ec-4f79-ae5e-b06c9ecb4267","type":"Column"}]},"id":"6ae3d6a7-3b14-48ac-a097-a2d26e7d7de7","type":"Column"},{"attributes":{"formatter":{"id":"e777e8cf-5b89-4b37-9ec1-990dec824ee1","type":"BasicTickFormatter"},"plot":{"id":"b1510935-85fb-4770-a482-073d5d99bd03","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6ba4bdc-f480-469b-8d09-2ac200f7ce9f","type":"BasicTicker"}},"id":"e98139f5-01c8-4ca9-a734-416f2ef86a66","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8c487ba6-b97d-41aa-a929-0aa758dcf87d","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"03d132b8-2e62-4603-bd54-c208fdd6ebc8","type":"BasicTickFormatter"},"plot":{"id":"8404b8ea-651f-4095-b9e4-888850df1635","subtype":"Figure","type":"Plot"},"ticker":{"id":"48f71a11-38fe-4065-b31c-328c45c102c5","type":"BasicTicker"}},"id":"901652a7-5105-4f79-97b4-7748181b478e","type":"LinearAxis"},{"attributes":{"formatter":{"id":"758ac0f8-06f1-4e1d-8c64-35083c07f4a8","type":"BasicTickFormatter"},"plot":{"id":"8404b8ea-651f-4095-b9e4-888850df1635","subtype":"Figure","type":"Plot"},"ticker":{"id":"227a37d6-dccd-43cd-933b-ebe201caf0e6","type":"BasicTicker"}},"id":"7463f62c-dd06-40a0-af51-4001ad13eb14","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3cb21ef2-d9a4-4c69-9109-51ba5cf90048","type":"ColumnDataSource"},"glyph":{"id":"9e18b13d-d7db-4761-b16c-dbb1f7763aee","type":"Circle"},"hover_glyph":{"id":"97291279-9b08-4e4d-a345-541b95b6cabd","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"5bf9745e-b010-4241-9f91-607049919e1f","type":"Circle"},"selection_glyph":null,"view":{"id":"2ce984ba-df6d-46c9-8f70-62613a59ac12","type":"CDSView"}},"id":"d300a379-7b5b-4165-b178-9728e1a9a3cc","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"39c1f27c-a7c9-46d9-959b-0329e3a289c0","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9461695e-78ce-464b-96aa-dcece565186f","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"458f3978-47b2-4691-a16f-4e6d93d06269","type":"Circle"},{"attributes":{"callback":null},"id":"466d8c6e-9b57-4acb-8c36-0de2598b9d0e","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a2f499ca-a226-4b88-9327-9bd2f8dcf285","type":"BoxSelectTool"},{"id":"0b0558a9-1a61-4760-874d-da85c6f046dd","type":"HoverTool"},{"id":"929ab658-fef8-4f47-afdc-37740b644c4a","type":"ResetTool"}]},"id":"3b0e114f-7a61-48d1-a5bf-4f2b24de8155","type":"Toolbar"},{"attributes":{"callback":null},"id":"40cc8fd2-2479-4220-9624-399b4ebf9be6","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"97291279-9b08-4e4d-a345-541b95b6cabd","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f9889b44-a2df-4cf9-b13e-3a493ed5882b","type":"BoxSelectTool"},{"id":"230009f1-ef75-4fc9-b4ed-2e9de88c3ec0","type":"HoverTool"},{"id":"051fc4c9-c61e-4d34-bd9d-945028b8589a","type":"ResetTool"}]},"id":"2bd48744-a540-45d0-86ad-b3f8e51fc80b","type":"Toolbar"},{"attributes":{"formatter":{"id":"cd374a87-e7d6-4df1-81d9-62a6b4198b6e","type":"BasicTickFormatter"},"plot":{"id":"b1510935-85fb-4770-a482-073d5d99bd03","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9147a98-4881-49af-ab54-cf838a1f87df","type":"BasicTicker"}},"id":"e85d2c70-f1fe-4ad4-acea-560e1b70ff9a","type":"LinearAxis"},{"attributes":{"children":[{"id":"c3907dd0-371a-4aaa-96d5-8ab66877e750","type":"Row"}]},"id":"d83430a6-49ec-4f79-ae5e-b06c9ecb4267","type":"Column"},{"attributes":{"callback":null},"id":"6681f44c-ab32-4a88-9987-22facbcdda7b","type":"DataRange1d"},{"attributes":{},"id":"ba520de6-dd0f-4af7-a053-d3a8986618d3","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"b1510935-85fb-4770-a482-073d5d99bd03","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9147a98-4881-49af-ab54-cf838a1f87df","type":"BasicTicker"}},"id":"94f7584c-7c60-4ac6-b274-e53e198e65dc","type":"Grid"},{"attributes":{"below":[{"id":"e98139f5-01c8-4ca9-a734-416f2ef86a66","type":"LinearAxis"}],"left":[{"id":"e85d2c70-f1fe-4ad4-acea-560e1b70ff9a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e98139f5-01c8-4ca9-a734-416f2ef86a66","type":"LinearAxis"},{"id":"92dc81b3-542d-43eb-a7ac-107d14eb6432","type":"Grid"},{"id":"e85d2c70-f1fe-4ad4-acea-560e1b70ff9a","type":"LinearAxis"},{"id":"94f7584c-7c60-4ac6-b274-e53e198e65dc","type":"Grid"},{"id":"8c487ba6-b97d-41aa-a929-0aa758dcf87d","type":"BoxAnnotation"},{"id":"b29efc2f-d9e2-46f4-9181-b2351b85b2e9","type":"GlyphRenderer"}],"title":{"id":"143ba5bd-38b1-4e3f-8c5a-279484f6041b","type":"Title"},"toolbar":{"id":"2bd48744-a540-45d0-86ad-b3f8e51fc80b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"40cc8fd2-2479-4220-9624-399b4ebf9be6","type":"DataRange1d"},"x_scale":{"id":"dc34f5c0-e8d1-46a6-b78a-9c7947b4a428","type":"LinearScale"},"y_range":{"id":"466d8c6e-9b57-4acb-8c36-0de2598b9d0e","type":"DataRange1d"},"y_scale":{"id":"ba520de6-dd0f-4af7-a053-d3a8986618d3","type":"LinearScale"}},"id":"b1510935-85fb-4770-a482-073d5d99bd03","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16f1f243-af90-4485-8169-6776c85c1bed","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"fd3a5a33-b491-446e-8bd5-45c6122dcf60","type":"Selection"},"selection_policy":{"id":"c356e2ac-d587-4eb9-947d-e0b860633cfb","type":"UnionRenderers"}},"id":"3cb21ef2-d9a4-4c69-9109-51ba5cf90048","type":"ColumnDataSource"},{"attributes":{},"id":"227a37d6-dccd-43cd-933b-ebe201caf0e6","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":"auto"},"id":"230009f1-ef75-4fc9-b4ed-2e9de88c3ec0","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"8404b8ea-651f-4095-b9e4-888850df1635","subtype":"Figure","type":"Plot"},"ticker":{"id":"48f71a11-38fe-4065-b31c-328c45c102c5","type":"BasicTicker"}},"id":"6d837e03-409c-46c3-bd0a-975ca02dad50","type":"Grid"},{"attributes":{"children":[{"id":"b1510935-85fb-4770-a482-073d5d99bd03","subtype":"Figure","type":"Plot"},{"id":"8404b8ea-651f-4095-b9e4-888850df1635","subtype":"Figure","type":"Plot"}]},"id":"c3907dd0-371a-4aaa-96d5-8ab66877e750","type":"Row"},{"attributes":{},"id":"1befe5a2-9393-4d6d-8769-523239549d1f","type":"LinearScale"},{"attributes":{"toolbar":{"id":"1b160a30-2254-4042-a17e-abf4e995f42c","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"1463e5a1-4d54-49e8-8965-106f93defdb2","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5bf9745e-b010-4241-9f91-607049919e1f","type":"Circle"},{"attributes":{},"id":"051fc4c9-c61e-4d34-bd9d-945028b8589a","type":"ResetTool"},{"attributes":{},"id":"d6ba4bdc-f480-469b-8d09-2ac200f7ce9f","type":"BasicTicker"},{"attributes":{"tools":[{"id":"f9889b44-a2df-4cf9-b13e-3a493ed5882b","type":"BoxSelectTool"},{"id":"230009f1-ef75-4fc9-b4ed-2e9de88c3ec0","type":"HoverTool"},{"id":"051fc4c9-c61e-4d34-bd9d-945028b8589a","type":"ResetTool"},{"id":"a2f499ca-a226-4b88-9327-9bd2f8dcf285","type":"BoxSelectTool"},{"id":"0b0558a9-1a61-4760-874d-da85c6f046dd","type":"HoverTool"},{"id":"929ab658-fef8-4f47-afdc-37740b644c4a","type":"ResetTool"}]},"id":"1b160a30-2254-4042-a17e-abf4e995f42c","type":"ProxyToolbar"}],"root_ids":["6ae3d6a7-3b14-48ac-a097-a2d26e7d7de7"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"bcab87e5-a95b-442d-9da6-f790eefef9c1","elementid":"b08507ae-8cb0-48fc-83f1-7311edd5bdc4","modelid":"6ae3d6a7-3b14-48ac-a097-a2d26e7d7de7"}];
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