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
      };var element = document.getElementById("d82118de-003d-46d6-bab8-cade2a46433d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd82118de-003d-46d6-bab8-cade2a46433d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"623c61a2-46bc-4237-98bf-b2ed526eb69c":{"roots":{"references":[{"attributes":{"formatter":{"id":"42d6b697-26b1-4d14-b969-e04ad97fb030","type":"CategoricalTickFormatter"},"plot":{"id":"5f7aa484-1a62-4468-b417-fbd4b159f3fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"81f6040f-bcee-4988-998f-9371ca54ed8b","type":"CategoricalTicker"}},"id":"091ecdf7-bc7b-4e4b-8d07-3617b4623161","type":"CategoricalAxis"},{"attributes":{},"id":"379fe1e2-73a2-484d-a2e1-4438f59f1463","type":"LinearScale"},{"attributes":{"callback":null,"renderers":"auto"},"id":"36e6526b-6fee-4d7f-8b80-f6b958a805a4","type":"HoverTool"},{"attributes":{},"id":"5295cfe8-5c48-4557-8864-0bc3f7f17e57","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"5f7aa484-1a62-4468-b417-fbd4b159f3fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"81f6040f-bcee-4988-998f-9371ca54ed8b","type":"CategoricalTicker"}},"id":"f553fd46-2350-487b-9685-0cd992eb3bfd","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"788af2bc-cd1f-4fed-bfe2-cb5056886315","type":"Toolbar"},{"attributes":{"formatter":{"id":"8a461971-5dd3-4642-87e0-28df406e9aca","type":"CategoricalTickFormatter"},"plot":{"id":"125e5e1e-dca9-4445-b230-781788d8abd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"5295cfe8-5c48-4557-8864-0bc3f7f17e57","type":"CategoricalTicker"}},"id":"a988aea3-c37d-4dc3-97a2-51bb0b90c0ae","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"64dd5ccb-82c4-459c-82cb-73985fdce6ef","type":"Rect"},{"attributes":{"data_source":{"id":"575cfd61-9546-4859-9230-3f71496d4822","type":"ColumnDataSource"},"glyph":{"id":"71ab2f74-2b8d-4eef-9ba2-0e9fe4471923","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2564e84-796d-4660-a101-621600ed24c4","type":"Segment"},"selection_glyph":null,"view":{"id":"a3d45b11-c30d-47a3-a466-2fa5d9b3e043","type":"CDSView"}},"id":"1239bd06-648a-4e16-a0c4-961705068c7b","type":"GlyphRenderer"},{"attributes":{},"id":"351e210d-edb0-48d5-9cb3-b82d515aa356","type":"CategoricalTicker"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"71ab2f74-2b8d-4eef-9ba2-0e9fe4471923","type":"Segment"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"307ced2a-26e3-41b3-9fea-eacaac7fe910","type":"FactorRange"},{"attributes":{},"id":"e712bc1b-7c16-40fd-87d6-2234f9a68f71","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"125e5e1e-dca9-4445-b230-781788d8abd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"5295cfe8-5c48-4557-8864-0bc3f7f17e57","type":"CategoricalTicker"}},"id":"894bbc62-c991-44bf-b1c6-9426ef5c05f7","type":"Grid"},{"attributes":{},"id":"5d2a47a3-5a3c-49ff-af06-9c2e11134e77","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"2a0ee789-8a95-4cda-b4f7-277e99b33d2a","type":"BasicTickFormatter"},"plot":{"id":"125e5e1e-dca9-4445-b230-781788d8abd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"28b4606a-9cce-4d1f-815f-9fb9893e2177","type":"BasicTicker"}},"id":"4ceb311e-27ba-4018-9e02-4067bc5f1b28","type":"LinearAxis"},{"attributes":{},"id":"42d6b697-26b1-4d14-b969-e04ad97fb030","type":"CategoricalTickFormatter"},{"attributes":{},"id":"f2342329-0673-4a8a-b46d-cebeec50e264","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"cdf248d0-92fd-4fd5-9533-e8d13532ea50","type":"ColumnDataSource"},"glyph":{"id":"205b66e5-64a9-46b2-9cfc-c484fa1685df","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"833361aa-bdfe-434f-b3fc-6d9c0252dbae","type":"Circle"},"selection_glyph":null,"view":{"id":"47320ec9-85cf-4cc4-acc4-6788e20185c1","type":"CDSView"}},"id":"779c1f53-94b8-46b6-bffb-c55145404ce6","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bc5cff47-fc05-4849-a83a-71e847858535","type":"ColumnDataSource"}},"id":"24fa339c-d451-4278-8feb-a8d4d74f4881","type":"CDSView"},{"attributes":{},"id":"3b630e2e-ebd2-47c8-b7a9-9aa21ae44899","type":"CategoricalScale"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"10a6fc4b-b49f-46ba-830c-1645ca622236","type":"Selection"},"selection_policy":{"id":"1786fd2b-337c-4abe-afd5-43d6642f5d00","type":"UnionRenderers"}},"id":"cdf248d0-92fd-4fd5-9533-e8d13532ea50","type":"ColumnDataSource"},{"attributes":{},"id":"2a0ee789-8a95-4cda-b4f7-277e99b33d2a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"fb4b9975-72d6-49b3-a91e-965fca660012","type":"FactorRange"},{"attributes":{},"id":"28b4606a-9cce-4d1f-815f-9fb9893e2177","type":"BasicTicker"},{"attributes":{},"id":"81f6040f-bcee-4988-998f-9371ca54ed8b","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"091ecdf7-bc7b-4e4b-8d07-3617b4623161","type":"CategoricalAxis"}],"left":[{"id":"e450845a-fc01-4d77-bdcf-79d3681b8a9d","type":"CategoricalAxis"}],"renderers":[{"id":"091ecdf7-bc7b-4e4b-8d07-3617b4623161","type":"CategoricalAxis"},{"id":"f553fd46-2350-487b-9685-0cd992eb3bfd","type":"Grid"},{"id":"e450845a-fc01-4d77-bdcf-79d3681b8a9d","type":"CategoricalAxis"},{"id":"760d9be2-7859-4a12-96ae-a8305ab4589e","type":"Grid"},{"id":"34f6db4d-511a-43f0-b2b0-bab49594eec4","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"360425e5-18e5-453e-8f07-d6ee0c242c3d","type":"Title"},"toolbar":{"id":"ed209892-b946-4b70-a76e-14f5cdf75c09","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"899f0cbb-fc83-48b7-a28a-75c481237081","type":"FactorRange"},"x_scale":{"id":"c6040ec3-50e9-44ca-aa1a-b020a32cf17a","type":"CategoricalScale"},"y_range":{"id":"fb4b9975-72d6-49b3-a91e-965fca660012","type":"FactorRange"},"y_scale":{"id":"37f1a4d6-d508-416e-b7a0-22e9291603ee","type":"CategoricalScale"}},"id":"5f7aa484-1a62-4468-b417-fbd4b159f3fa","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"575cfd61-9546-4859-9230-3f71496d4822","type":"ColumnDataSource"}},"id":"a3d45b11-c30d-47a3-a466-2fa5d9b3e043","type":"CDSView"},{"attributes":{},"id":"10a6fc4b-b49f-46ba-830c-1645ca622236","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f2564e84-796d-4660-a101-621600ed24c4","type":"Segment"},{"attributes":{"below":[{"id":"4ceb311e-27ba-4018-9e02-4067bc5f1b28","type":"LinearAxis"}],"left":[{"id":"a988aea3-c37d-4dc3-97a2-51bb0b90c0ae","type":"CategoricalAxis"}],"renderers":[{"id":"4ceb311e-27ba-4018-9e02-4067bc5f1b28","type":"LinearAxis"},{"id":"8ff4bd22-1343-4e8c-8428-cca8b5ac5935","type":"Grid"},{"id":"a988aea3-c37d-4dc3-97a2-51bb0b90c0ae","type":"CategoricalAxis"},{"id":"894bbc62-c991-44bf-b1c6-9426ef5c05f7","type":"Grid"},{"id":"1239bd06-648a-4e16-a0c4-961705068c7b","type":"GlyphRenderer"},{"id":"779c1f53-94b8-46b6-bffb-c55145404ce6","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"56c17f3b-b1d5-4b2d-997b-2ce51f6782f8","type":"Title"},"toolbar":{"id":"788af2bc-cd1f-4fed-bfe2-cb5056886315","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dc575b9e-c101-4f64-81af-060d10859b8f","type":"Range1d"},"x_scale":{"id":"379fe1e2-73a2-484d-a2e1-4438f59f1463","type":"LinearScale"},"y_range":{"id":"307ced2a-26e3-41b3-9fea-eacaac7fe910","type":"FactorRange"},"y_scale":{"id":"3b630e2e-ebd2-47c8-b7a9-9aa21ae44899","type":"CategoricalScale"}},"id":"125e5e1e-dca9-4445-b230-781788d8abd0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6a04b588-90fb-4bb3-98e7-f2b0b21a08dd","type":"Selection"},{"attributes":{"source":{"id":"cdf248d0-92fd-4fd5-9533-e8d13532ea50","type":"ColumnDataSource"}},"id":"47320ec9-85cf-4cc4-acc4-6788e20185c1","type":"CDSView"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"f9eb1500-e5b5-4c63-8e6d-c86dff07bf7d","type":"Selection"},"selection_policy":{"id":"f2342329-0673-4a8a-b46d-cebeec50e264","type":"UnionRenderers"}},"id":"575cfd61-9546-4859-9230-3f71496d4822","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"5f7aa484-1a62-4468-b417-fbd4b159f3fa","subtype":"Figure","type":"Plot"},{"id":"125e5e1e-dca9-4445-b230-781788d8abd0","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"d098c1a8-6543-4261-b230-af926a57ddbe","type":"Row"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"56c17f3b-b1d5-4b2d-997b-2ce51f6782f8","type":"Title"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ed4b68f-bcc9-4b25-82f8-cb135c633501","type":"Rect"},{"attributes":{},"id":"1786fd2b-337c-4abe-afd5-43d6642f5d00","type":"UnionRenderers"},{"attributes":{},"id":"8a461971-5dd3-4642-87e0-28df406e9aca","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"205b66e5-64a9-46b2-9cfc-c484fa1685df","type":"Circle"},{"attributes":{"callback":null,"end":100},"id":"dc575b9e-c101-4f64-81af-060d10859b8f","type":"Range1d"},{"attributes":{"formatter":{"id":"5d2a47a3-5a3c-49ff-af06-9c2e11134e77","type":"CategoricalTickFormatter"},"plot":{"id":"5f7aa484-1a62-4468-b417-fbd4b159f3fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"351e210d-edb0-48d5-9cb3-b82d515aa356","type":"CategoricalTicker"}},"id":"e450845a-fc01-4d77-bdcf-79d3681b8a9d","type":"CategoricalAxis"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"6a04b588-90fb-4bb3-98e7-f2b0b21a08dd","type":"Selection"},"selection_policy":{"id":"e712bc1b-7c16-40fd-87d6-2234f9a68f71","type":"UnionRenderers"}},"id":"bc5cff47-fc05-4849-a83a-71e847858535","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"36e6526b-6fee-4d7f-8b80-f6b958a805a4","type":"HoverTool"}]},"id":"ed209892-b946-4b70-a76e-14f5cdf75c09","type":"Toolbar"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"360425e5-18e5-453e-8f07-d6ee0c242c3d","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"5f7aa484-1a62-4468-b417-fbd4b159f3fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"351e210d-edb0-48d5-9cb3-b82d515aa356","type":"CategoricalTicker"}},"id":"760d9be2-7859-4a12-96ae-a8305ab4589e","type":"Grid"},{"attributes":{},"id":"37f1a4d6-d508-416e-b7a0-22e9291603ee","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"899f0cbb-fc83-48b7-a28a-75c481237081","type":"FactorRange"},{"attributes":{},"id":"c6040ec3-50e9-44ca-aa1a-b020a32cf17a","type":"CategoricalScale"},{"attributes":{"plot":{"id":"125e5e1e-dca9-4445-b230-781788d8abd0","subtype":"Figure","type":"Plot"},"ticker":{"id":"28b4606a-9cce-4d1f-815f-9fb9893e2177","type":"BasicTicker"}},"id":"8ff4bd22-1343-4e8c-8428-cca8b5ac5935","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"833361aa-bdfe-434f-b3fc-6d9c0252dbae","type":"Circle"},{"attributes":{},"id":"f9eb1500-e5b5-4c63-8e6d-c86dff07bf7d","type":"Selection"},{"attributes":{"data_source":{"id":"bc5cff47-fc05-4849-a83a-71e847858535","type":"ColumnDataSource"},"glyph":{"id":"0ed4b68f-bcc9-4b25-82f8-cb135c633501","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"64dd5ccb-82c4-459c-82cb-73985fdce6ef","type":"Rect"},"selection_glyph":null,"view":{"id":"24fa339c-d451-4278-8feb-a8d4d74f4881","type":"CDSView"}},"id":"34f6db4d-511a-43f0-b2b0-bab49594eec4","type":"GlyphRenderer"}],"root_ids":["d098c1a8-6543-4261-b230-af926a57ddbe"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"623c61a2-46bc-4237-98bf-b2ed526eb69c","elementid":"d82118de-003d-46d6-bab8-cade2a46433d","modelid":"d098c1a8-6543-4261-b230-af926a57ddbe"}];
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