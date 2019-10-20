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
      };var element = document.getElementById("94af7f31-ec09-4de7-98ea-b3f5d8874613");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '94af7f31-ec09-4de7-98ea-b3f5d8874613' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"17381521-0191-4e49-9fec-b248b25ba3b2":{"roots":{"references":[{"attributes":{"children":[{"id":"7be0f5fc-94a3-4118-9f0d-b3fd02392f1b","subtype":"Figure","type":"Plot"},{"id":"0d54e300-11ba-4855-8254-70dce68b67fb","subtype":"Figure","type":"Plot"}]},"id":"fd6ceda5-ff62-4caa-8bc2-56905754ac7e","type":"Row"},{"attributes":{"overlay":{"id":"3599032f-71e6-4b99-848b-40710a36da7f","type":"BoxAnnotation"}},"id":"cad86789-ad38-4376-92cd-667e3851d113","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"379d9f4b-9795-48c8-9a36-ec202920cd84","type":"BasicTickFormatter"},"plot":{"id":"7be0f5fc-94a3-4118-9f0d-b3fd02392f1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c26f505-d469-41aa-b3bf-ba9819d15eac","type":"BasicTicker"}},"id":"d7f03504-ad65-41c5-9b7a-f89f6070f959","type":"LinearAxis"},{"attributes":{"formatter":{"id":"7378931c-1e9f-43c7-b2f5-2d3668ca516c","type":"BasicTickFormatter"},"plot":{"id":"0d54e300-11ba-4855-8254-70dce68b67fb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1af0d5c9-5d85-472b-a217-de957dbb2a1e","type":"BasicTicker"}},"id":"35a25e13-7e40-4ad7-96d9-9c39adb04c96","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d8331f92-d375-4023-9d49-d2d5b3e1979f","type":"Circle"},{"attributes":{},"id":"65dd9b5f-4989-4df2-bec5-385fefaaccd9","type":"PanTool"},{"attributes":{"below":[{"id":"bf920ac6-e5ac-448f-a3b8-d4f48f33c836","type":"LinearAxis"}],"left":[{"id":"106843b6-e18b-4f7d-a9d6-9cf3411857bb","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"bf920ac6-e5ac-448f-a3b8-d4f48f33c836","type":"LinearAxis"},{"id":"4098d1e5-f1d1-4b45-8f34-b248641c03f5","type":"Grid"},{"id":"106843b6-e18b-4f7d-a9d6-9cf3411857bb","type":"LinearAxis"},{"id":"1787a9d4-ac4e-4c07-be0c-7375543558bd","type":"Grid"},{"id":"74ed6ac1-c66f-497e-adf2-2d23d3441c33","type":"BoxAnnotation"},{"id":"6e915a6d-a74c-4d9a-8948-4d9777b60d29","type":"GlyphRenderer"}],"title":{"id":"c71a388b-a220-43ae-ad46-50d04957ccde","type":"Title"},"toolbar":{"id":"b2de98ea-6a4a-4983-9576-45f0204944f4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"318f970d-7a5e-4a9c-9ac3-3fdfd14b5a6d","type":"DataRange1d"},"x_scale":{"id":"ad2e289c-d974-4b96-8529-0ba826744a09","type":"LinearScale"},"y_range":{"id":"e3831460-96e4-4d67-9cb1-7739f89f83ba","type":"DataRange1d"},"y_scale":{"id":"5a7c05f7-0508-4bd3-81e2-f6c486f1e212","type":"LinearScale"}},"id":"22129f7f-1e2a-490e-b54e-4015ffeb89d3","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"9e8751b7-e33c-4481-adc9-d14ab20869a1","type":"BasicTickFormatter"},"plot":{"id":"0d54e300-11ba-4855-8254-70dce68b67fb","subtype":"Figure","type":"Plot"},"ticker":{"id":"4813de6c-f543-4f79-a394-1c4d30d51718","type":"BasicTicker"}},"id":"3061095c-3b8d-4c4d-9afd-185913d7cc43","type":"LinearAxis"},{"attributes":{},"id":"9ab76f9d-a34f-4bec-95c0-6e8ed093ebff","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"7be0f5fc-94a3-4118-9f0d-b3fd02392f1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c26f505-d469-41aa-b3bf-ba9819d15eac","type":"BasicTicker"}},"id":"8b6d556e-eef1-4f97-a518-e4a5b2849e99","type":"Grid"},{"attributes":{"plot":{"id":"0d54e300-11ba-4855-8254-70dce68b67fb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1af0d5c9-5d85-472b-a217-de957dbb2a1e","type":"BasicTicker"}},"id":"afcc9b22-9ddf-420e-8a61-07e3daf49c02","type":"Grid"},{"attributes":{"formatter":{"id":"8347a033-210e-441a-82d8-2cd4691569e2","type":"BasicTickFormatter"},"plot":{"id":"22129f7f-1e2a-490e-b54e-4015ffeb89d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"832aec75-f83b-45f4-baf3-14bb38ec0cde","type":"BasicTicker"}},"id":"bf920ac6-e5ac-448f-a3b8-d4f48f33c836","type":"LinearAxis"},{"attributes":{},"id":"2f838e3e-1dac-43b8-95b4-ba7fb83c56ed","type":"SaveTool"},{"attributes":{"tools":[{"id":"65dd9b5f-4989-4df2-bec5-385fefaaccd9","type":"PanTool"},{"id":"0c46b1cb-5385-4877-8bbc-a56ec1662a90","type":"WheelZoomTool"},{"id":"22240ec8-f95d-457f-a553-ed62ef011c8c","type":"BoxZoomTool"},{"id":"2f838e3e-1dac-43b8-95b4-ba7fb83c56ed","type":"SaveTool"},{"id":"1a47ffc4-7df9-4f1e-a33a-a4d425243daa","type":"ResetTool"},{"id":"c74e4638-9760-41b6-8cf9-82e233bd0997","type":"HelpTool"},{"id":"7c87d00e-e90e-4176-941c-b7bf7e46f658","type":"PanTool"},{"id":"9422d86a-f735-45f2-b1e7-86f3f73c2ad1","type":"WheelZoomTool"},{"id":"cad86789-ad38-4376-92cd-667e3851d113","type":"BoxZoomTool"},{"id":"af8a558d-9376-427d-a5b9-78fcfbea5630","type":"SaveTool"},{"id":"7beee978-a7ae-4442-bf99-670b285e6a9c","type":"ResetTool"},{"id":"2f27723c-97b7-44bb-b9d6-554020bcd22b","type":"HelpTool"},{"id":"d58a4c56-6216-42c0-ac62-f1957caee92c","type":"PanTool"},{"id":"72eceef6-61ba-496e-a7c5-e56801056f81","type":"WheelZoomTool"},{"id":"4666f517-f05e-4f27-aca1-1711ecc6c00b","type":"BoxZoomTool"},{"id":"e8967591-6e93-4a79-a433-dd21ba374391","type":"SaveTool"},{"id":"05c55dbd-ab73-4ce2-a48f-f0dfcaf5d7f1","type":"ResetTool"},{"id":"487223a0-55c2-4a37-8852-e1d0bdcef81d","type":"HelpTool"}]},"id":"032e3153-140b-4ebc-b2f7-1b0d534b969c","type":"ProxyToolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"65dd9b5f-4989-4df2-bec5-385fefaaccd9","type":"PanTool"},{"id":"0c46b1cb-5385-4877-8bbc-a56ec1662a90","type":"WheelZoomTool"},{"id":"22240ec8-f95d-457f-a553-ed62ef011c8c","type":"BoxZoomTool"},{"id":"2f838e3e-1dac-43b8-95b4-ba7fb83c56ed","type":"SaveTool"},{"id":"1a47ffc4-7df9-4f1e-a33a-a4d425243daa","type":"ResetTool"},{"id":"c74e4638-9760-41b6-8cf9-82e233bd0997","type":"HelpTool"}]},"id":"8f9b56af-f3cf-4e8f-af55-9449fb9c1d25","type":"Toolbar"},{"attributes":{"data_source":{"id":"600fedea-4113-44a7-830e-337cd1452196","type":"ColumnDataSource"},"glyph":{"id":"7d25236d-6162-40c7-a640-1864bdf57ceb","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aef788a4-6b40-4e6e-8d4c-136adbddeecb","type":"Triangle"},"selection_glyph":null,"view":{"id":"aaf8ecac-180b-4b0f-9097-d5c9edda7d5b","type":"CDSView"}},"id":"8c5439cc-de3a-43e4-bfe6-4caeec2452e1","type":"GlyphRenderer"},{"attributes":{},"id":"05c55dbd-ab73-4ce2-a48f-f0dfcaf5d7f1","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"0d54e300-11ba-4855-8254-70dce68b67fb","subtype":"Figure","type":"Plot"},"ticker":{"id":"4813de6c-f543-4f79-a394-1c4d30d51718","type":"BasicTicker"}},"id":"35e5517a-1f98-428b-a433-cc783009c77d","type":"Grid"},{"attributes":{},"id":"0c46b1cb-5385-4877-8bbc-a56ec1662a90","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"e3831460-96e4-4d67-9cb1-7739f89f83ba","type":"DataRange1d"},{"attributes":{},"id":"4813de6c-f543-4f79-a394-1c4d30d51718","type":"BasicTicker"},{"attributes":{},"id":"41810cb6-0d8d-435e-990f-1c298f0ab194","type":"LinearScale"},{"attributes":{},"id":"ad2e289c-d974-4b96-8529-0ba826744a09","type":"LinearScale"},{"attributes":{},"id":"312a5580-7073-4d72-955a-f88ea74b760c","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"fea48f33-7293-43b0-a597-0248c5f2d022","type":"Title"},{"attributes":{},"id":"832aec75-f83b-45f4-baf3-14bb38ec0cde","type":"BasicTicker"},{"attributes":{},"id":"531c18e7-0a09-4f93-bd62-a0f9e9849431","type":"LinearScale"},{"attributes":{},"id":"e8967591-6e93-4a79-a433-dd21ba374391","type":"SaveTool"},{"attributes":{"callback":null},"id":"77a96fc2-a2bd-4bce-9f01-8f6ffa4b728d","type":"DataRange1d"},{"attributes":{},"id":"487223a0-55c2-4a37-8852-e1d0bdcef81d","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7c87d00e-e90e-4176-941c-b7bf7e46f658","type":"PanTool"},{"id":"9422d86a-f735-45f2-b1e7-86f3f73c2ad1","type":"WheelZoomTool"},{"id":"cad86789-ad38-4376-92cd-667e3851d113","type":"BoxZoomTool"},{"id":"af8a558d-9376-427d-a5b9-78fcfbea5630","type":"SaveTool"},{"id":"7beee978-a7ae-4442-bf99-670b285e6a9c","type":"ResetTool"},{"id":"2f27723c-97b7-44bb-b9d6-554020bcd22b","type":"HelpTool"}]},"id":"513aaafa-6c92-45eb-8f54-bf5dd34a0b36","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aef788a4-6b40-4e6e-8d4c-136adbddeecb","type":"Triangle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"9ab76f9d-a34f-4bec-95c0-6e8ed093ebff","type":"Selection"},"selection_policy":{"id":"57dd0ffc-e487-44ae-a69a-8de470fa4d8d","type":"UnionRenderers"}},"id":"8d11bf8b-4d65-40ea-b77c-97923ebc83bc","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74ed6ac1-c66f-497e-adf2-2d23d3441c33","type":"BoxAnnotation"},{"attributes":{},"id":"7beee978-a7ae-4442-bf99-670b285e6a9c","type":"ResetTool"},{"attributes":{"below":[{"id":"474d7928-fd25-48d8-8b2f-2c79e8d938a3","type":"LinearAxis"}],"left":[{"id":"d7f03504-ad65-41c5-9b7a-f89f6070f959","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"474d7928-fd25-48d8-8b2f-2c79e8d938a3","type":"LinearAxis"},{"id":"a0a27554-8a60-4bac-a044-f3eacef3146c","type":"Grid"},{"id":"d7f03504-ad65-41c5-9b7a-f89f6070f959","type":"LinearAxis"},{"id":"8b6d556e-eef1-4f97-a518-e4a5b2849e99","type":"Grid"},{"id":"f232ca3a-f768-4bf0-b4e4-745f48437208","type":"BoxAnnotation"},{"id":"76582b5c-804e-4e09-a76d-b7dd3f10387b","type":"GlyphRenderer"}],"title":{"id":"922793e7-c1fe-4708-8120-942d91a6074b","type":"Title"},"toolbar":{"id":"8f9b56af-f3cf-4e8f-af55-9449fb9c1d25","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"77a96fc2-a2bd-4bce-9f01-8f6ffa4b728d","type":"DataRange1d"},"x_scale":{"id":"da6b0845-ff2c-4dd2-add2-bee561b11959","type":"LinearScale"},"y_range":{"id":"08cd6502-46de-48a5-a1e5-47bed7be1d6a","type":"DataRange1d"},"y_scale":{"id":"40baab83-cf5e-4ea3-9d63-609fa43a7976","type":"LinearScale"}},"id":"7be0f5fc-94a3-4118-9f0d-b3fd02392f1b","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"f3fb1a6c-217a-4ab5-b079-649e48f1e9d3","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d58a4c56-6216-42c0-ac62-f1957caee92c","type":"PanTool"},{"id":"72eceef6-61ba-496e-a7c5-e56801056f81","type":"WheelZoomTool"},{"id":"4666f517-f05e-4f27-aca1-1711ecc6c00b","type":"BoxZoomTool"},{"id":"e8967591-6e93-4a79-a433-dd21ba374391","type":"SaveTool"},{"id":"05c55dbd-ab73-4ce2-a48f-f0dfcaf5d7f1","type":"ResetTool"},{"id":"487223a0-55c2-4a37-8852-e1d0bdcef81d","type":"HelpTool"}]},"id":"b2de98ea-6a4a-4983-9576-45f0204944f4","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4469726f-8f44-439b-8e19-624ae539e3e2","type":"Circle"},{"attributes":{},"id":"7c87d00e-e90e-4176-941c-b7bf7e46f658","type":"PanTool"},{"attributes":{"plot":{"id":"22129f7f-1e2a-490e-b54e-4015ffeb89d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"832aec75-f83b-45f4-baf3-14bb38ec0cde","type":"BasicTicker"}},"id":"4098d1e5-f1d1-4b45-8f34-b248641c03f5","type":"Grid"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d25236d-6162-40c7-a640-1864bdf57ceb","type":"Triangle"},{"attributes":{"source":{"id":"8d11bf8b-4d65-40ea-b77c-97923ebc83bc","type":"ColumnDataSource"}},"id":"6e0b1e45-bc1f-408a-9c0e-28111f62be21","type":"CDSView"},{"attributes":{"data_source":{"id":"8d11bf8b-4d65-40ea-b77c-97923ebc83bc","type":"ColumnDataSource"},"glyph":{"id":"aed663ad-0b94-4d99-a289-255f7c1fcc07","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"02933dec-af84-45e5-8031-1175398000a2","type":"Square"},"selection_glyph":null,"view":{"id":"6e0b1e45-bc1f-408a-9c0e-28111f62be21","type":"CDSView"}},"id":"6e915a6d-a74c-4d9a-8948-4d9777b60d29","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aed663ad-0b94-4d99-a289-255f7c1fcc07","type":"Square"},{"attributes":{},"id":"2f27723c-97b7-44bb-b9d6-554020bcd22b","type":"HelpTool"},{"attributes":{},"id":"0c26f505-d469-41aa-b3bf-ba9819d15eac","type":"BasicTicker"},{"attributes":{"source":{"id":"600fedea-4113-44a7-830e-337cd1452196","type":"ColumnDataSource"}},"id":"aaf8ecac-180b-4b0f-9097-d5c9edda7d5b","type":"CDSView"},{"attributes":{"below":[{"id":"35a25e13-7e40-4ad7-96d9-9c39adb04c96","type":"LinearAxis"}],"left":[{"id":"3061095c-3b8d-4c4d-9afd-185913d7cc43","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"35a25e13-7e40-4ad7-96d9-9c39adb04c96","type":"LinearAxis"},{"id":"afcc9b22-9ddf-420e-8a61-07e3daf49c02","type":"Grid"},{"id":"3061095c-3b8d-4c4d-9afd-185913d7cc43","type":"LinearAxis"},{"id":"35e5517a-1f98-428b-a433-cc783009c77d","type":"Grid"},{"id":"3599032f-71e6-4b99-848b-40710a36da7f","type":"BoxAnnotation"},{"id":"8c5439cc-de3a-43e4-bfe6-4caeec2452e1","type":"GlyphRenderer"}],"title":{"id":"fea48f33-7293-43b0-a597-0248c5f2d022","type":"Title"},"toolbar":{"id":"513aaafa-6c92-45eb-8f54-bf5dd34a0b36","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"16270147-6471-46d0-bd42-dfa2b1a60be6","type":"DataRange1d"},"x_scale":{"id":"531c18e7-0a09-4f93-bd62-a0f9e9849431","type":"LinearScale"},"y_range":{"id":"f3fb1a6c-217a-4ab5-b079-649e48f1e9d3","type":"DataRange1d"},"y_scale":{"id":"41810cb6-0d8d-435e-990f-1c298f0ab194","type":"LinearScale"}},"id":"0d54e300-11ba-4855-8254-70dce68b67fb","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"318f970d-7a5e-4a9c-9ac3-3fdfd14b5a6d","type":"DataRange1d"},{"attributes":{},"id":"1af0d5c9-5d85-472b-a217-de957dbb2a1e","type":"BasicTicker"},{"attributes":{},"id":"7c37c89b-e2d9-4408-b461-08da7ecac892","type":"UnionRenderers"},{"attributes":{},"id":"3f8cb774-00a1-4138-922f-2a7afdea2cf7","type":"BasicTickFormatter"},{"attributes":{},"id":"9422d86a-f735-45f2-b1e7-86f3f73c2ad1","type":"WheelZoomTool"},{"attributes":{},"id":"d58a4c56-6216-42c0-ac62-f1957caee92c","type":"PanTool"},{"attributes":{"plot":{"id":"7be0f5fc-94a3-4118-9f0d-b3fd02392f1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"312a5580-7073-4d72-955a-f88ea74b760c","type":"BasicTicker"}},"id":"a0a27554-8a60-4bac-a044-f3eacef3146c","type":"Grid"},{"attributes":{"callback":null},"id":"16270147-6471-46d0-bd42-dfa2b1a60be6","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3599032f-71e6-4b99-848b-40710a36da7f","type":"BoxAnnotation"},{"attributes":{},"id":"379d9f4b-9795-48c8-9a36-ec202920cd84","type":"BasicTickFormatter"},{"attributes":{},"id":"da6b0845-ff2c-4dd2-add2-bee561b11959","type":"LinearScale"},{"attributes":{},"id":"2dedc08d-2ad2-4aa9-ae8a-58070f740514","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f232ca3a-f768-4bf0-b4e4-745f48437208","type":"BoxAnnotation"},{"attributes":{},"id":"40baab83-cf5e-4ea3-9d63-609fa43a7976","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"922793e7-c1fe-4708-8120-942d91a6074b","type":"Title"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"55dd34d7-e724-4ebc-91dd-dfcfdb932c01","type":"Selection"},"selection_policy":{"id":"530d0191-cf56-47c9-b395-7141a659b8fe","type":"UnionRenderers"}},"id":"600fedea-4113-44a7-830e-337cd1452196","type":"ColumnDataSource"},{"attributes":{},"id":"57dd0ffc-e487-44ae-a69a-8de470fa4d8d","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"06939202-d09a-4319-9d4d-c5d5ce9d39d4","type":"BasicTickFormatter"},"plot":{"id":"22129f7f-1e2a-490e-b54e-4015ffeb89d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac43a655-cdf6-4175-9a40-174b87b2e8cf","type":"BasicTicker"}},"id":"106843b6-e18b-4f7d-a9d6-9cf3411857bb","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"2dedc08d-2ad2-4aa9-ae8a-58070f740514","type":"Selection"},"selection_policy":{"id":"7c37c89b-e2d9-4408-b461-08da7ecac892","type":"UnionRenderers"}},"id":"5e18795d-f3e0-45f6-acde-d05585c65e91","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"032e3153-140b-4ebc-b2f7-1b0d534b969c","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"0f62ea0d-c9b4-49c9-a8ea-b20f166cb7df","type":"ToolbarBox"},{"attributes":{"children":[{"id":"22129f7f-1e2a-490e-b54e-4015ffeb89d3","subtype":"Figure","type":"Plot"}]},"id":"1b015da0-42b9-499a-9259-e6e24fdf86cc","type":"Row"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"02933dec-af84-45e5-8031-1175398000a2","type":"Square"},{"attributes":{"children":[{"id":"fd6ceda5-ff62-4caa-8bc2-56905754ac7e","type":"Row"},{"id":"1b015da0-42b9-499a-9259-e6e24fdf86cc","type":"Row"}]},"id":"c579ea47-2200-472c-98d5-9ccac3e8a419","type":"Column"},{"attributes":{},"id":"72eceef6-61ba-496e-a7c5-e56801056f81","type":"WheelZoomTool"},{"attributes":{},"id":"9e8751b7-e33c-4481-adc9-d14ab20869a1","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"74ed6ac1-c66f-497e-adf2-2d23d3441c33","type":"BoxAnnotation"}},"id":"4666f517-f05e-4f27-aca1-1711ecc6c00b","type":"BoxZoomTool"},{"attributes":{},"id":"7378931c-1e9f-43c7-b2f5-2d3668ca516c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"08cd6502-46de-48a5-a1e5-47bed7be1d6a","type":"DataRange1d"},{"attributes":{"children":[{"id":"0f62ea0d-c9b4-49c9-a8ea-b20f166cb7df","type":"ToolbarBox"},{"id":"c579ea47-2200-472c-98d5-9ccac3e8a419","type":"Column"}]},"id":"582fc1ac-8ffd-4f70-b42a-01958b2552d2","type":"Column"},{"attributes":{},"id":"5a7c05f7-0508-4bd3-81e2-f6c486f1e212","type":"LinearScale"},{"attributes":{},"id":"530d0191-cf56-47c9-b395-7141a659b8fe","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"f232ca3a-f768-4bf0-b4e4-745f48437208","type":"BoxAnnotation"}},"id":"22240ec8-f95d-457f-a553-ed62ef011c8c","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"22129f7f-1e2a-490e-b54e-4015ffeb89d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac43a655-cdf6-4175-9a40-174b87b2e8cf","type":"BasicTicker"}},"id":"1787a9d4-ac4e-4c07-be0c-7375543558bd","type":"Grid"},{"attributes":{"data_source":{"id":"5e18795d-f3e0-45f6-acde-d05585c65e91","type":"ColumnDataSource"},"glyph":{"id":"d8331f92-d375-4023-9d49-d2d5b3e1979f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4469726f-8f44-439b-8e19-624ae539e3e2","type":"Circle"},"selection_glyph":null,"view":{"id":"73217a59-f37b-4592-9e37-2853b24d1d30","type":"CDSView"}},"id":"76582b5c-804e-4e09-a76d-b7dd3f10387b","type":"GlyphRenderer"},{"attributes":{},"id":"ac43a655-cdf6-4175-9a40-174b87b2e8cf","type":"BasicTicker"},{"attributes":{},"id":"06939202-d09a-4319-9d4d-c5d5ce9d39d4","type":"BasicTickFormatter"},{"attributes":{},"id":"1a47ffc4-7df9-4f1e-a33a-a4d425243daa","type":"ResetTool"},{"attributes":{},"id":"af8a558d-9376-427d-a5b9-78fcfbea5630","type":"SaveTool"},{"attributes":{"formatter":{"id":"3f8cb774-00a1-4138-922f-2a7afdea2cf7","type":"BasicTickFormatter"},"plot":{"id":"7be0f5fc-94a3-4118-9f0d-b3fd02392f1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"312a5580-7073-4d72-955a-f88ea74b760c","type":"BasicTicker"}},"id":"474d7928-fd25-48d8-8b2f-2c79e8d938a3","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"c71a388b-a220-43ae-ad46-50d04957ccde","type":"Title"},{"attributes":{},"id":"55dd34d7-e724-4ebc-91dd-dfcfdb932c01","type":"Selection"},{"attributes":{},"id":"c74e4638-9760-41b6-8cf9-82e233bd0997","type":"HelpTool"},{"attributes":{},"id":"8347a033-210e-441a-82d8-2cd4691569e2","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"5e18795d-f3e0-45f6-acde-d05585c65e91","type":"ColumnDataSource"}},"id":"73217a59-f37b-4592-9e37-2853b24d1d30","type":"CDSView"}],"root_ids":["582fc1ac-8ffd-4f70-b42a-01958b2552d2"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"17381521-0191-4e49-9fec-b248b25ba3b2","elementid":"94af7f31-ec09-4de7-98ea-b3f5d8874613","modelid":"582fc1ac-8ffd-4f70-b42a-01958b2552d2"}];
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