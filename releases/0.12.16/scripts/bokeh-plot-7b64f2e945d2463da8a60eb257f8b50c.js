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
      };var element = document.getElementById("28d40ac7-51fa-4f51-bb08-23f4fe8066db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '28d40ac7-51fa-4f51-bb08-23f4fe8066db' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bb354e73-73a2-418c-8ffd-c7d2c13fdded":{"roots":{"references":[{"attributes":{"range":null},"id":"a6302f15-4805-4a8a-bdca-03773ee714c7","type":"Jitter"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"7ba38c0f-ec86-41f5-aab6-5431652906b4","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"8eb0b275-38ed-43bc-a2e4-3cf889cb85b2","type":"Circle"},{"attributes":{"range":null},"id":"e7ff93bf-87f7-46d1-8c38-6d330cae6003","type":"Jitter"},{"attributes":{"data_source":{"id":"2f5f1778-8c23-41b4-891e-bac5d1609a7f","type":"ColumnDataSource"},"glyph":{"id":"884dd682-d231-40df-a20f-b36444eb909a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"471d3d58-fb64-4508-b276-d6d35612a94b","type":"Circle"},"selection_glyph":null,"view":{"id":"558b5508-eb70-472c-bd93-a7b8b3cf5151","type":"CDSView"}},"id":"fcda81c7-5857-4d10-9449-9a489a7c33ce","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d17e7d2b-a6d4-40bd-b28c-2a85c0185a1b","type":"ColumnDataSource"}},"id":"f52a2960-952b-441d-b771-cbff6c90dccb","type":"CDSView"},{"attributes":{"source":{"id":"88fc1405-33cc-4c11-a649-70484ac5176c","type":"ColumnDataSource"}},"id":"f2b804d2-7134-499a-8ceb-6580fff7a65e","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"d8d2fa3b-6313-4ef4-9d5f-5c76a5a18831","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"8141fc16-fe6d-445d-a9e0-c94432b16d53","type":"Circle"},{"attributes":{},"id":"1d5df762-f3ba-4047-a8da-3cb4c042c03e","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"71d713a5-f344-4c88-a843-e862606ff611","type":"Selection"},"selection_policy":{"id":"473833dd-a4ca-46ae-b27b-1d4d586abbab","type":"UnionRenderers"}},"id":"9eb7550f-c598-430b-9f21-eb55cf2b8d40","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ec7cdf4e-5909-4bf2-95c6-992bf26fda96","type":"ColumnDataSource"}},"id":"fb9cc435-f15f-4294-b73a-86a00b51716c","type":"CDSView"},{"attributes":{},"id":"71d713a5-f344-4c88-a843-e862606ff611","type":"Selection"},{"attributes":{"source":{"id":"2f5f1778-8c23-41b4-891e-bac5d1609a7f","type":"ColumnDataSource"}},"id":"558b5508-eb70-472c-bd93-a7b8b3cf5151","type":"CDSView"},{"attributes":{"data_source":{"id":"9eb7550f-c598-430b-9f21-eb55cf2b8d40","type":"ColumnDataSource"},"glyph":{"id":"36fffadd-7d36-46bf-89df-d1a28ce5b69e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"403b8d59-5e1f-40cc-8898-a50f12ff3d6b","type":"Circle"},"selection_glyph":null,"view":{"id":"9dc1fe34-146b-40d8-84a2-e5f5fc3990e6","type":"CDSView"}},"id":"f697fcf3-8234-42ba-9138-3f2c05d8df63","type":"GlyphRenderer"},{"attributes":{},"id":"a92eac33-e49f-4eb5-a894-18e3cea460c8","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"86206b9a-b042-444c-905e-7b79d5ad2ef8","type":"Circle"},{"attributes":{},"id":"12bc510d-1f4e-40d1-bd1d-8a362c33cd71","type":"Selection"},{"attributes":{"data_source":{"id":"d17e7d2b-a6d4-40bd-b28c-2a85c0185a1b","type":"ColumnDataSource"},"glyph":{"id":"a765f1c5-eeee-4e84-a8fc-a031168dcc23","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"665555fd-8684-4f45-9fd5-686dfe15dcf2","type":"Circle"},"selection_glyph":null,"view":{"id":"f52a2960-952b-441d-b771-cbff6c90dccb","type":"CDSView"}},"id":"a6ab2baa-9a9e-4ce6-b684-332acf791559","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"994bc3af-4182-422c-bfd1-baaa54adacf0","type":"Circle"},{"attributes":{},"id":"09018e6d-3ff1-491c-a414-63ef9d3446bf","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8039d962-037e-4515-badf-02829a3b2f9f","type":"ColumnDataSource"},"glyph":{"id":"ff77131d-bf7b-417c-8c49-2631e178dc33","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"994bc3af-4182-422c-bfd1-baaa54adacf0","type":"Circle"},"selection_glyph":null,"view":{"id":"b7f7581d-2e10-4f69-998e-e745297c80b1","type":"CDSView"}},"id":"f27cce1e-9db5-47f1-a9df-fd5a8390dc50","type":"GlyphRenderer"},{"attributes":{"range":null},"id":"d8d2fa3b-6313-4ef4-9d5f-5c76a5a18831","type":"Jitter"},{"attributes":{},"id":"628566b9-da07-4b93-b555-40a1bc143a54","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"0d5cb12a-76bd-47a4-a60f-c3946ea46ea8","type":"Selection"},"selection_policy":{"id":"c2bb89da-496d-4ad0-a4cd-fd9656437e5e","type":"UnionRenderers"}},"id":"4f50fa14-60a1-4056-aa6f-aa697683732e","type":"ColumnDataSource"},{"attributes":{},"id":"1be3710b-4114-41a3-977a-d2192d2c838a","type":"UnionRenderers"},{"attributes":{},"id":"817678c9-0f6a-41d9-a72f-20f5a068df7c","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"ff77131d-bf7b-417c-8c49-2631e178dc33","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"a6302f15-4805-4a8a-bdca-03773ee714c7","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"e651fe69-34ed-40ab-8d22-fbe1cdb73cf3","type":"Circle"},{"attributes":{},"id":"f9028810-2c2c-40d8-abf2-a6c0edc3be5a","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"36fffadd-7d36-46bf-89df-d1a28ce5b69e","type":"Circle"},{"attributes":{"data_source":{"id":"d4c4e544-441c-4f15-bcae-eccf9fcd8055","type":"ColumnDataSource"},"glyph":{"id":"f7c4a5ca-7712-4e06-875f-81c659fd507a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"86206b9a-b042-444c-905e-7b79d5ad2ef8","type":"Circle"},"selection_glyph":null,"view":{"id":"922d7891-96a3-4b61-a307-42797820b084","type":"CDSView"}},"id":"af234c79-6985-4eef-b991-95bafc87acd6","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8039d962-037e-4515-badf-02829a3b2f9f","type":"ColumnDataSource"}},"id":"b7f7581d-2e10-4f69-998e-e745297c80b1","type":"CDSView"},{"attributes":{"data_source":{"id":"4f50fa14-60a1-4056-aa6f-aa697683732e","type":"ColumnDataSource"},"glyph":{"id":"a5cbd0b0-c38e-4cf8-ae75-c62fad6348e5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e651fe69-34ed-40ab-8d22-fbe1cdb73cf3","type":"Circle"},"selection_glyph":null,"view":{"id":"5c60b57c-5858-438b-9dec-db2763ef88ff","type":"CDSView"}},"id":"9d4ef098-af1b-4ae8-963c-18fb70e977cc","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"12bc510d-1f4e-40d1-bd1d-8a362c33cd71","type":"Selection"},"selection_policy":{"id":"b354ce21-d5b1-4172-a197-ee9d168b4ed8","type":"UnionRenderers"}},"id":"f01696e8-4dda-425c-8215-d138fc8de5c7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4f50fa14-60a1-4056-aa6f-aa697683732e","type":"ColumnDataSource"}},"id":"5c60b57c-5858-438b-9dec-db2763ef88ff","type":"CDSView"},{"attributes":{},"id":"3f469655-27fe-4d4a-885a-23f2b823994c","type":"UnionRenderers"},{"attributes":{},"id":"7355034a-531b-405d-b725-2098f967d554","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"e7ff93bf-87f7-46d1-8c38-6d330cae6003","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"884dd682-d231-40df-a20f-b36444eb909a","type":"Circle"},{"attributes":{},"id":"93cb10ae-5800-40ef-a15e-11058f9821dc","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"58201dc5-6f44-4ab5-b85b-fccabd3c93bc","type":"Circle"},{"attributes":{},"id":"525b5f90-ec49-48d1-9910-d57c5fa7d1da","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"403b8d59-5e1f-40cc-8898-a50f12ff3d6b","type":"Circle"},{"attributes":{},"id":"20243dfb-ed0d-4627-b302-b273bec6b3ef","type":"Selection"},{"attributes":{},"id":"d341328f-149c-464d-a3c4-2f320d0967ca","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"f7c4a5ca-7712-4e06-875f-81c659fd507a","type":"Circle"},{"attributes":{"source":{"id":"2b78f2cc-36ae-4196-b2a6-dc37be4729bf","type":"ColumnDataSource"}},"id":"a6ebe4aa-227a-43a8-83c1-e99b8875ae5b","type":"CDSView"},{"attributes":{},"id":"b354ce21-d5b1-4172-a197-ee9d168b4ed8","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"e7ff93bf-87f7-46d1-8c38-6d330cae6003","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"471d3d58-fb64-4508-b276-d6d35612a94b","type":"Circle"},{"attributes":{},"id":"29e271de-4e64-4614-b001-f9d152ebe265","type":"UnionRenderers"},{"attributes":{"source":{"id":"d4c4e544-441c-4f15-bcae-eccf9fcd8055","type":"ColumnDataSource"}},"id":"922d7891-96a3-4b61-a307-42797820b084","type":"CDSView"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"d8d2fa3b-6313-4ef4-9d5f-5c76a5a18831","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"2d644533-e2ea-49c0-8afc-9b23c784ebd4","type":"Circle"},{"attributes":{},"id":"f054875d-3e7a-4b04-a2b0-1994a589295e","type":"Selection"},{"attributes":{"data_source":{"id":"2b78f2cc-36ae-4196-b2a6-dc37be4729bf","type":"ColumnDataSource"},"glyph":{"id":"2d644533-e2ea-49c0-8afc-9b23c784ebd4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8141fc16-fe6d-445d-a9e0-c94432b16d53","type":"Circle"},"selection_glyph":null,"view":{"id":"a6ebe4aa-227a-43a8-83c1-e99b8875ae5b","type":"CDSView"}},"id":"bce16cd0-a380-4ff7-873f-d1c29227f98a","type":"GlyphRenderer"},{"attributes":{},"id":"66b7361a-3098-482c-965f-2a37e9fdc0f8","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"d2dd8365-56eb-4e30-9e3d-dbcc2efc3566","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"5aecb10a-ad01-4f27-8489-c051e0eca5f5","type":"Selection"},"selection_policy":{"id":"a92eac33-e49f-4eb5-a894-18e3cea460c8","type":"UnionRenderers"}},"id":"8039d962-037e-4515-badf-02829a3b2f9f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"099d12ed-6f06-433c-baa9-e6b538dffb26","type":"ColumnDataSource"}},"id":"f696b706-733a-4187-9cf3-a20eed8d7904","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"fd5bf29f-c509-4ec7-9d0b-75437e82fc12","type":"Selection"},"selection_policy":{"id":"14c2f48a-c654-4817-aca0-1e5ab9ffa8c9","type":"UnionRenderers"}},"id":"2b78f2cc-36ae-4196-b2a6-dc37be4729bf","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"75949247-7005-414b-bdca-c187ba3b2764","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"03c0281a-0cde-4ec5-8ca2-db16a59afd92","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"7ba38c0f-ec86-41f5-aab6-5431652906b4","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"58db516f-1ac3-49e3-9c90-4adcd161ff6c","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"75949247-7005-414b-bdca-c187ba3b2764","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"07a82ca3-96d3-4028-92e3-6965fc3c4193","type":"Circle"},{"attributes":{},"id":"a74c7560-cbd1-48de-9e16-fc7fa0a6e9d0","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"20243dfb-ed0d-4627-b302-b273bec6b3ef","type":"Selection"},"selection_policy":{"id":"4151c977-01af-4714-ab67-ec0daec9ce88","type":"UnionRenderers"}},"id":"d4c4e544-441c-4f15-bcae-eccf9fcd8055","type":"ColumnDataSource"},{"attributes":{},"id":"b20a9921-5b75-46e5-885c-c8536bd03f71","type":"UnionRenderers"},{"attributes":{"source":{"id":"f01696e8-4dda-425c-8215-d138fc8de5c7","type":"ColumnDataSource"}},"id":"58dc433f-5fdd-47a7-9577-f775e3fdcd8c","type":"CDSView"},{"attributes":{},"id":"43531ec9-65e5-4713-9fc6-f1ebe4f041b2","type":"BasicTickFormatter"},{"attributes":{},"id":"473833dd-a4ca-46ae-b27b-1d4d586abbab","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"ec7cdf4e-5909-4bf2-95c6-992bf26fda96","type":"ColumnDataSource"},"glyph":{"id":"07a82ca3-96d3-4028-92e3-6965fc3c4193","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"03c0281a-0cde-4ec5-8ca2-db16a59afd92","type":"Circle"},"selection_glyph":null,"view":{"id":"fb9cc435-f15f-4294-b73a-86a00b51716c","type":"CDSView"}},"id":"f1b95ca1-5b47-4ef7-879a-fda2ff360168","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"d408a3fe-0146-4880-bae9-5d1840241ce6","type":"Selection"},"selection_policy":{"id":"f4cfb0e6-3ac8-45d1-be53-53b971d31ac2","type":"UnionRenderers"}},"id":"099d12ed-6f06-433c-baa9-e6b538dffb26","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"4b347741-3062-4cd4-8a8c-1b64a891752d","type":"Selection"},"selection_policy":{"id":"d7e1d311-f6dd-4f96-8c8f-70019a666478","type":"UnionRenderers"}},"id":"2f5f1778-8c23-41b4-891e-bac5d1609a7f","type":"ColumnDataSource"},{"attributes":{},"id":"5aecb10a-ad01-4f27-8489-c051e0eca5f5","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"a6302f15-4805-4a8a-bdca-03773ee714c7","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"a5cbd0b0-c38e-4cf8-ae75-c62fad6348e5","type":"Circle"},{"attributes":{"range":null},"id":"75949247-7005-414b-bdca-c187ba3b2764","type":"Jitter"},{"attributes":{"data_source":{"id":"88fc1405-33cc-4c11-a649-70484ac5176c","type":"ColumnDataSource"},"glyph":{"id":"b7a5899e-c92c-4ba0-84cb-c1abe3aca67f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58201dc5-6f44-4ab5-b85b-fccabd3c93bc","type":"Circle"},"selection_glyph":null,"view":{"id":"f2b804d2-7134-499a-8ceb-6580fff7a65e","type":"CDSView"}},"id":"c31d9a75-0cff-4ed3-a196-2647b8669e91","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"5a266c75-737d-4295-a51f-6e484b1aae4c","type":"Circle"},{"attributes":{},"id":"362da60f-87ef-470f-8840-db4d5998085f","type":"Selection"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"b7a5899e-c92c-4ba0-84cb-c1abe3aca67f","type":"Circle"},{"attributes":{},"id":"71f30328-e57f-4091-8033-90d85053ba01","type":"Selection"},{"attributes":{"range":null},"id":"7ba38c0f-ec86-41f5-aab6-5431652906b4","type":"Jitter"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"5d3af8d9-6dc6-48cb-9bad-336c91fb8f2a","type":"Selection"},"selection_policy":{"id":"c4d165d9-494c-4564-ac80-f47a0777bc5b","type":"UnionRenderers"}},"id":"ec7cdf4e-5909-4bf2-95c6-992bf26fda96","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9eb7550f-c598-430b-9f21-eb55cf2b8d40","type":"ColumnDataSource"}},"id":"9dc1fe34-146b-40d8-84a2-e5f5fc3990e6","type":"CDSView"},{"attributes":{},"id":"4151c977-01af-4714-ab67-ec0daec9ce88","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"f01696e8-4dda-425c-8215-d138fc8de5c7","type":"ColumnDataSource"},"glyph":{"id":"5a266c75-737d-4295-a51f-6e484b1aae4c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d2dd8365-56eb-4e30-9e3d-dbcc2efc3566","type":"Circle"},"selection_glyph":null,"view":{"id":"58dc433f-5fdd-47a7-9577-f775e3fdcd8c","type":"CDSView"}},"id":"1a2f5357-92cb-4e91-bebf-d45d9da33731","type":"GlyphRenderer"},{"attributes":{},"id":"e2e73557-0ede-4f0f-a62e-25e7fcc0edc3","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"a74c7560-cbd1-48de-9e16-fc7fa0a6e9d0","type":"Selection"},"selection_policy":{"id":"1d5df762-f3ba-4047-a8da-3cb4c042c03e","type":"UnionRenderers"}},"id":"bbc2aba9-ef81-4171-91a9-bf991d977694","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"099d12ed-6f06-433c-baa9-e6b538dffb26","type":"ColumnDataSource"},"glyph":{"id":"8eb0b275-38ed-43bc-a2e4-3cf889cb85b2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58db516f-1ac3-49e3-9c90-4adcd161ff6c","type":"Circle"},"selection_glyph":null,"view":{"id":"f696b706-733a-4187-9cf3-a20eed8d7904","type":"CDSView"}},"id":"453b1a71-b8e8-4674-8d9d-06bbd43c6a93","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"f054875d-3e7a-4b04-a2b0-1994a589295e","type":"Selection"},"selection_policy":{"id":"3f469655-27fe-4d4a-885a-23f2b823994c","type":"UnionRenderers"}},"id":"88fc1405-33cc-4c11-a649-70484ac5176c","type":"ColumnDataSource"},{"attributes":{},"id":"710db960-5c4c-4226-afd2-e812e32470a1","type":"UnionRenderers"},{"attributes":{},"id":"aa4111f6-47b6-4327-84c5-e1b2a8d1aea0","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"a6d628d6-ab3d-4b68-90e0-eaeb538f6259","type":"DataRange1d"},{"attributes":{"formatter":{"id":"09018e6d-3ff1-491c-a414-63ef9d3446bf","type":"BasicTickFormatter"},"plot":{"id":"7617fc65-f9df-4e5c-8bac-0d82e9876e60","subtype":"Figure","type":"Plot"},"ticker":{"id":"b560c916-7b57-477d-9b4e-e256251168af","type":"BasicTicker"}},"id":"b0467df5-f91d-47ef-b1e9-a9b957556eb7","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"323f221e-859b-46f2-a3be-a2995aa0f4fc","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"dec5ac74-81f4-43bf-9d73-78cf35c74e61","type":"Circle"},{"attributes":{"below":[{"id":"b0467df5-f91d-47ef-b1e9-a9b957556eb7","type":"LinearAxis"}],"left":[{"id":"24542d93-dc77-4b3b-bb1b-e3f132b856fd","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"b0467df5-f91d-47ef-b1e9-a9b957556eb7","type":"LinearAxis"},{"id":"12ef50b2-d5b1-4971-942f-40e4b8efbf95","type":"Grid"},{"id":"24542d93-dc77-4b3b-bb1b-e3f132b856fd","type":"LinearAxis"},{"id":"f868cbcc-0fb5-4511-896f-c6007cce6d39","type":"Grid"},{"id":"98939f19-4a6f-4b4e-b01f-49b6bbe5b4fc","type":"BoxAnnotation"},{"id":"7948a22a-a54a-45ed-87c6-3192c57fddce","type":"GlyphRenderer"},{"id":"a6ab2baa-9a9e-4ce6-b684-332acf791559","type":"GlyphRenderer"},{"id":"453b1a71-b8e8-4674-8d9d-06bbd43c6a93","type":"GlyphRenderer"},{"id":"bce16cd0-a380-4ff7-873f-d1c29227f98a","type":"GlyphRenderer"},{"id":"fcda81c7-5857-4d10-9449-9a489a7c33ce","type":"GlyphRenderer"},{"id":"9d4ef098-af1b-4ae8-963c-18fb70e977cc","type":"GlyphRenderer"},{"id":"eafc04da-447c-4745-a323-01929dc48105","type":"GlyphRenderer"},{"id":"bb7beed6-05e3-415c-a8e9-b660397d6ff2","type":"GlyphRenderer"},{"id":"a34ecc17-6c0c-401c-ae87-9870f5b4b67b","type":"GlyphRenderer"},{"id":"20dddf81-fd65-492a-8d94-ad42038d57ae","type":"GlyphRenderer"},{"id":"d5e3cada-6876-4ac0-9654-3c96329a0ce9","type":"GlyphRenderer"},{"id":"eecaf53f-3061-4dfc-8af3-2e12729495cd","type":"GlyphRenderer"},{"id":"f1b95ca1-5b47-4ef7-879a-fda2ff360168","type":"GlyphRenderer"}],"title":{"id":"25a1dfc0-3539-405b-a520-ecbe5d22c8d8","type":"Title"},"toolbar":{"id":"2083f714-e55e-4bd2-b933-b6ea758508fe","type":"Toolbar"},"x_range":{"id":"661d9323-046d-47f4-b4fa-e1b90647a8f6","type":"DataRange1d"},"x_scale":{"id":"f0e75692-004c-472d-8c65-e733de6a2e2e","type":"LinearScale"},"y_range":{"id":"0f9839f2-6d0a-4cd6-9cc1-7af3035e132b","type":"DataRange1d"},"y_scale":{"id":"893d22ab-2856-4615-8132-595108084f1f","type":"LinearScale"}},"id":"7617fc65-f9df-4e5c-8bac-0d82e9876e60","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"e5d9e998-8491-4979-b3ce-316a32157e6e","type":"ColumnDataSource"}},"id":"d278a8e3-d671-413f-8f23-0187905cf6a5","type":"CDSView"},{"attributes":{"range":null},"id":"3da9cb59-906f-4f30-82a0-45738df3134a","type":"Jitter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98939f19-4a6f-4b4e-b01f-49b6bbe5b4fc","type":"BoxAnnotation"},{"attributes":{},"id":"793ea657-2b73-42cd-9e94-8f92a74d21f9","type":"BasicTicker"},{"attributes":{"source":{"id":"85083856-eba4-4ebc-8f7b-9dabae130c07","type":"ColumnDataSource"}},"id":"0e4bbd8c-f7c0-40e6-8e4a-994547dd442b","type":"CDSView"},{"attributes":{"range":null},"id":"e5c49e73-fa41-4c4b-b63f-167109f74aeb","type":"Jitter"},{"attributes":{"data_source":{"id":"fe8d4fa7-7db7-4862-ace3-699e28be1c24","type":"ColumnDataSource"},"glyph":{"id":"1e04a1ca-c2af-42f0-94a5-7a81b0880fa3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3a973eea-f749-4e26-ba42-f09dad9ac7a3","type":"Circle"},"selection_glyph":null,"view":{"id":"299147e8-a73c-4d8a-8d12-9e3d15f8ec6d","type":"CDSView"}},"id":"0f1fcfe8-4130-4347-99d4-4cebbafa45d3","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"31e97699-9581-498d-9bbe-6e134b5d8643","subtype":"Figure","type":"Plot"},"ticker":{"id":"793ea657-2b73-42cd-9e94-8f92a74d21f9","type":"BasicTicker"}},"id":"02d10415-ec13-4ba5-a676-88c0f409b9f3","type":"Grid"},{"attributes":{"callback":null},"id":"2276ff08-927c-4bae-9a72-4e85927e99bd","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"0644bf42-1e0c-48a9-8b56-79e0562e2d36","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"d7f8f84d-7c47-4b90-a6b0-96b0916c8d9c","type":"Selection"},"selection_policy":{"id":"8577f18e-0ed1-4bf3-87b5-bfb8e3a9096a","type":"UnionRenderers"}},"id":"56c4b5cf-50e4-492d-9341-8449d8ab72c9","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"43531ec9-65e5-4713-9fc6-f1ebe4f041b2","type":"BasicTickFormatter"},"plot":{"id":"31e97699-9581-498d-9bbe-6e134b5d8643","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0927a82-082d-440e-8bfe-85baac7775e7","type":"BasicTicker"}},"id":"5cf1cfca-a50e-4145-ae8d-27600206edff","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Years vs mpg without jittering"},"id":"ab24e349-5536-44af-9d15-08d03773da0e","type":"Title"},{"attributes":{"range":null},"id":"d21779b0-ded9-49a0-80fa-481fd128d420","type":"Jitter"},{"attributes":{},"id":"f17fe0ee-ac76-4e38-9a70-c99beea98d59","type":"LinearScale"},{"attributes":{"data_source":{"id":"4c6ac5a0-3856-45f2-a906-dfc244cf3c8f","type":"ColumnDataSource"},"glyph":{"id":"988d5a6d-8c03-4084-bb6f-0535e521fc31","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc1912d6-2baa-47ca-906a-7007706a7ade","type":"Circle"},"selection_glyph":null,"view":{"id":"ed63f14f-c027-49d8-a61d-2cfeee9d0a1b","type":"CDSView"}},"id":"eecaf53f-3061-4dfc-8af3-2e12729495cd","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"14cdda90-5c05-4906-8350-b5da330460cf","type":"PanTool"},{"id":"e0ed9ead-db9d-48d3-8948-b158494bed02","type":"WheelZoomTool"},{"id":"d9118da7-c17b-4b3b-bc57-e5cab0fddef8","type":"BoxZoomTool"},{"id":"c4db16a0-51b1-4040-b241-e1fb93be2749","type":"SaveTool"},{"id":"3c9600b1-2e07-4576-b83a-ebaddb2bc3e9","type":"ResetTool"},{"id":"bd7c034f-36b3-4496-969e-ef2b71d32b40","type":"HelpTool"}]},"id":"4fa27448-1e46-4817-b638-295b4b70b302","type":"Toolbar"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"362da60f-87ef-470f-8840-db4d5998085f","type":"Selection"},"selection_policy":{"id":"93cb10ae-5800-40ef-a15e-11058f9821dc","type":"UnionRenderers"}},"id":"d39fa1a1-cce8-424c-a4d7-4e5332cd5cfd","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"9d516fff-9904-40e0-917d-7af41c224519","type":"Selection"},"selection_policy":{"id":"d04f9723-5097-4403-b1ab-72bf71726da4","type":"UnionRenderers"}},"id":"1dd1dd5b-b98d-4fbb-bf45-1f309f1a5441","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"7355034a-531b-405d-b725-2098f967d554","type":"BasicTickFormatter"},"plot":{"id":"31e97699-9581-498d-9bbe-6e134b5d8643","subtype":"Figure","type":"Plot"},"ticker":{"id":"793ea657-2b73-42cd-9e94-8f92a74d21f9","type":"BasicTicker"}},"id":"aa33ca8a-6309-4676-a67b-9e2e5293921b","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"c26a6ef0-3ac8-4b90-a3a0-c5722cf1185b","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"bbf80d25-0a17-42bd-83f0-2460eabbd801","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg with jittering"},"id":"25a1dfc0-3539-405b-a520-ecbe5d22c8d8","type":"Title"},{"attributes":{},"id":"d7f8f84d-7c47-4b90-a6b0-96b0916c8d9c","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"31e97699-9581-498d-9bbe-6e134b5d8643","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0927a82-082d-440e-8bfe-85baac7775e7","type":"BasicTicker"}},"id":"d542eb68-cc75-4ca1-b2c0-ae53c11bced0","type":"Grid"},{"attributes":{"data_source":{"id":"29be2f2c-46f1-46a0-84ac-12f314820063","type":"ColumnDataSource"},"glyph":{"id":"3b740a94-8d4c-4139-9537-c4418a359657","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"213d5eea-04c0-4776-ae2f-5d121c9da0b5","type":"Circle"},"selection_glyph":null,"view":{"id":"fccb9ed8-b5a4-4bd4-8da1-e4e67472e826","type":"CDSView"}},"id":"ada7d1e1-c19b-4b0e-a75d-678844238710","type":"GlyphRenderer"},{"attributes":{},"id":"485a20a7-a4d0-4d7a-b80d-fcc8e3165fda","type":"LinearScale"},{"attributes":{"data_source":{"id":"e4c2b9f9-4c2b-4800-996a-a64a9a6b5541","type":"ColumnDataSource"},"glyph":{"id":"5d3c81f9-2e30-45dd-a1b4-10a11d317906","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"efbb4e1f-d9c7-4ca6-874c-b1024b642295","type":"Circle"},"selection_glyph":null,"view":{"id":"5f70fe44-f15b-4d5d-bbe7-2060ee2e0fe4","type":"CDSView"}},"id":"20dddf81-fd65-492a-8d94-ad42038d57ae","type":"GlyphRenderer"},{"attributes":{},"id":"e0ed9ead-db9d-48d3-8948-b158494bed02","type":"WheelZoomTool"},{"attributes":{},"id":"f0927a82-082d-440e-8bfe-85baac7775e7","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"3a973eea-f749-4e26-ba42-f09dad9ac7a3","type":"Circle"},{"attributes":{},"id":"8577f18e-0ed1-4bf3-87b5-bfb8e3a9096a","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"b955dd26-602f-475e-bbc4-3548597c8c17","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"aa68cce9-063f-4ab3-bf50-a311ea4d87dd","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"7be35ab2-841c-46b4-90ae-bb0e2ca89537","type":"Selection"},"selection_policy":{"id":"372a59a6-a381-4ef0-bf80-6b9d02b0a822","type":"UnionRenderers"}},"id":"85083856-eba4-4ebc-8f7b-9dabae130c07","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"27011052-7df0-494a-94e8-2f93a241c1ef","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"a765f1c5-eeee-4e84-a8fc-a031168dcc23","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"bf1ecf07-c3ac-401b-979e-e12f8617d06b","type":"Selection"},"selection_policy":{"id":"4b4d1691-4372-4442-8a36-81507db4872d","type":"UnionRenderers"}},"id":"e5d9e998-8491-4979-b3ce-316a32157e6e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10750916-24a1-4270-8b4e-13778140b706","type":"ColumnDataSource"},"glyph":{"id":"dec5ac74-81f4-43bf-9d73-78cf35c74e61","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68be535c-db12-4d53-b2ee-c2fc913dbbbb","type":"Circle"},"selection_glyph":null,"view":{"id":"87f6ce92-a807-49bc-a804-6809ef5987d3","type":"CDSView"}},"id":"ead962ad-3113-4a49-ae03-4af85b43e97e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"661d9323-046d-47f4-b4fa-e1b90647a8f6","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"8964835f-21a0-4825-b78f-6271ff4833f4","type":"Selection"},"selection_policy":{"id":"4648b2d5-a90b-417e-aaf9-ec35969dd036","type":"UnionRenderers"}},"id":"f9b31b7d-06ec-4e3e-b95f-0ee58c98b7c1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"bd945255-1812-476f-98f8-b53fa14ca906","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"a355971b-bc4c-4ddb-93fb-d708fe5c403d","type":"Circle"},{"attributes":{"source":{"id":"d39fa1a1-cce8-424c-a4d7-4e5332cd5cfd","type":"ColumnDataSource"}},"id":"85f406b0-1409-40a2-80c3-b5d3a7d2ae66","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"7fc79bd5-93ab-4350-8cf4-c41792e155ed","type":"Selection"},"selection_policy":{"id":"bf107567-c34b-452d-b960-b54a6494f2a2","type":"UnionRenderers"}},"id":"e4c2b9f9-4c2b-4800-996a-a64a9a6b5541","type":"ColumnDataSource"},{"attributes":{},"id":"3455c721-214f-43eb-a40a-08ca92e3b290","type":"PanTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"3b740a94-8d4c-4139-9537-c4418a359657","type":"Circle"},{"attributes":{"source":{"id":"f9b31b7d-06ec-4e3e-b95f-0ee58c98b7c1","type":"ColumnDataSource"}},"id":"53193868-9cb1-41bb-84b2-3226636f8376","type":"CDSView"},{"attributes":{},"id":"a2ec5071-931a-4978-b5f8-c783bb9dd4c8","type":"ResetTool"},{"attributes":{"data_source":{"id":"85083856-eba4-4ebc-8f7b-9dabae130c07","type":"ColumnDataSource"},"glyph":{"id":"6494dfc7-7736-4e98-9173-b64970cfd59e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8cf46bb8-dd87-460f-ae19-06663828bd77","type":"Circle"},"selection_glyph":null,"view":{"id":"0e4bbd8c-f7c0-40e6-8e4a-994547dd442b","type":"CDSView"}},"id":"a34ecc17-6c0c-401c-ae87-9870f5b4b67b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a05f456f-b934-4c05-a5b1-ede6f9784736","type":"ColumnDataSource"},"glyph":{"id":"0644bf42-1e0c-48a9-8b56-79e0562e2d36","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9b563eee-3906-447e-9905-10c44643d760","type":"Circle"},"selection_glyph":null,"view":{"id":"f1c36b4b-e0d9-4868-b828-2eac42cd63ba","type":"CDSView"}},"id":"c15431f4-5e23-4207-a646-3163c256e4ec","type":"GlyphRenderer"},{"attributes":{},"id":"893d22ab-2856-4615-8132-595108084f1f","type":"LinearScale"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"bd945255-1812-476f-98f8-b53fa14ca906","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"96bb7d4b-75b8-4d95-935b-fc8fb2c5d7f4","type":"Circle"},{"attributes":{},"id":"14c2f48a-c654-4817-aca0-1e5ab9ffa8c9","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"d39fa1a1-cce8-424c-a4d7-4e5332cd5cfd","type":"ColumnDataSource"},"glyph":{"id":"c26a6ef0-3ac8-4b90-a3a0-c5722cf1185b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"323f221e-859b-46f2-a3be-a2995aa0f4fc","type":"Circle"},"selection_glyph":null,"view":{"id":"85f406b0-1409-40a2-80c3-b5d3a7d2ae66","type":"CDSView"}},"id":"56b6b6fd-fbd5-4892-b6e9-624a67d05658","type":"GlyphRenderer"},{"attributes":{},"id":"2b7165dc-eacc-49b2-a644-172346cb0e10","type":"WheelZoomTool"},{"attributes":{},"id":"58f017c3-caad-432b-a093-b56f647ef3a8","type":"Selection"},{"attributes":{},"id":"f0e75692-004c-472d-8c65-e733de6a2e2e","type":"LinearScale"},{"attributes":{"source":{"id":"bf5c5069-bde1-473e-a684-23d13c6f9333","type":"ColumnDataSource"}},"id":"8b2e316e-2f0b-41d9-9929-55592bb03d4a","type":"CDSView"},{"attributes":{"data_source":{"id":"bbc2aba9-ef81-4171-91a9-bf991d977694","type":"ColumnDataSource"},"glyph":{"id":"55d89178-5ca4-40bc-b3a4-9ed348d004aa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e3747311-5069-43b1-921c-1dd1afbafa4b","type":"Circle"},"selection_glyph":null,"view":{"id":"f2d6c6d9-80d8-4210-a419-02bb8266e6a2","type":"CDSView"}},"id":"baf21822-0d12-4321-9791-e72599c64561","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"efb1730d-05fe-4d4a-a2d3-f71ae842c901","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"66b7361a-3098-482c-965f-2a37e9fdc0f8","type":"Selection"},"selection_policy":{"id":"b20a9921-5b75-46e5-885c-c8536bd03f71","type":"UnionRenderers"}},"id":"10750916-24a1-4270-8b4e-13778140b706","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"7617fc65-f9df-4e5c-8bac-0d82e9876e60","subtype":"Figure","type":"Plot"},"ticker":{"id":"edcea4f8-162d-46e8-8f9f-8cfd85a361bd","type":"BasicTicker"}},"id":"f868cbcc-0fb5-4511-896f-c6007cce6d39","type":"Grid"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"58f017c3-caad-432b-a093-b56f647ef3a8","type":"Selection"},"selection_policy":{"id":"3e7e7e34-3850-4097-95e9-22301ae79cb8","type":"UnionRenderers"}},"id":"d17e7d2b-a6d4-40bd-b28c-2a85c0185a1b","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"d21779b0-ded9-49a0-80fa-481fd128d420","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"988d5a6d-8c03-4084-bb6f-0535e521fc31","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"55d89178-5ca4-40bc-b3a4-9ed348d004aa","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"3da9cb59-906f-4f30-82a0-45738df3134a","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"2149b311-1887-4e1d-b50f-202e980321c3","type":"Circle"},{"attributes":{"source":{"id":"29be2f2c-46f1-46a0-84ac-12f314820063","type":"ColumnDataSource"}},"id":"fccb9ed8-b5a4-4bd4-8da1-e4e67472e826","type":"CDSView"},{"attributes":{"source":{"id":"4c6ac5a0-3856-45f2-a906-dfc244cf3c8f","type":"ColumnDataSource"}},"id":"ed63f14f-c027-49d8-a61d-2cfeee9d0a1b","type":"CDSView"},{"attributes":{},"id":"f4cfb0e6-3ac8-45d1-be53-53b971d31ac2","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bf305251-b02a-49fe-abdd-f7f23b310da2","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"e5d9e998-8491-4979-b3ce-316a32157e6e","type":"ColumnDataSource"},"glyph":{"id":"360b469e-6201-4784-a468-5bda0bf4a26f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9541791a-07bc-41d8-ac44-149537e6b648","type":"Circle"},"selection_glyph":null,"view":{"id":"d278a8e3-d671-413f-8f23-0187905cf6a5","type":"CDSView"}},"id":"eafc04da-447c-4745-a323-01929dc48105","type":"GlyphRenderer"},{"attributes":{"range":null},"id":"6da8fcbc-b755-4098-bf9d-334c39f58121","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"9b563eee-3906-447e-9905-10c44643d760","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"e5c49e73-fa41-4c4b-b63f-167109f74aeb","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"efbb4e1f-d9c7-4ca6-874c-b1024b642295","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"3da9cb59-906f-4f30-82a0-45738df3134a","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"022b8003-15a2-4c27-841f-68dce6622ee6","type":"Circle"},{"attributes":{},"id":"4b4d1691-4372-4442-8a36-81507db4872d","type":"UnionRenderers"},{"attributes":{},"id":"7fc79bd5-93ab-4350-8cf4-c41792e155ed","type":"Selection"},{"attributes":{},"id":"3e7e7e34-3850-4097-95e9-22301ae79cb8","type":"UnionRenderers"},{"attributes":{"range":null},"id":"92770138-b1f5-4b05-8204-352a96fd47f4","type":"Jitter"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"e2e73557-0ede-4f0f-a62e-25e7fcc0edc3","type":"Selection"},"selection_policy":{"id":"29e271de-4e64-4614-b001-f9d152ebe265","type":"UnionRenderers"}},"id":"bf5c5069-bde1-473e-a684-23d13c6f9333","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f06c3b32-7738-48aa-98ff-fe8f56964cf8","type":"ColumnDataSource"},"glyph":{"id":"844300be-7420-4ca8-834d-1ee149bc5f39","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bbf80d25-0a17-42bd-83f0-2460eabbd801","type":"Circle"},"selection_glyph":null,"view":{"id":"5ace0481-54ec-4aac-a895-28957bcb9083","type":"CDSView"}},"id":"0fe43c1e-199f-46cc-b39c-70e06c34480d","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"525b5f90-ec49-48d1-9910-d57c5fa7d1da","type":"BasicTickFormatter"},"plot":{"id":"7617fc65-f9df-4e5c-8bac-0d82e9876e60","subtype":"Figure","type":"Plot"},"ticker":{"id":"edcea4f8-162d-46e8-8f9f-8cfd85a361bd","type":"BasicTicker"}},"id":"24542d93-dc77-4b3b-bb1b-e3f132b856fd","type":"LinearAxis"},{"attributes":{"children":[{"id":"31e97699-9581-498d-9bbe-6e134b5d8643","subtype":"Figure","type":"Plot"},{"id":"7617fc65-f9df-4e5c-8bac-0d82e9876e60","subtype":"Figure","type":"Plot"}]},"id":"4a0d7b85-e6bf-49d0-bc3b-60c6c9827f28","type":"Column"},{"attributes":{},"id":"8835b83b-6428-4ab1-a915-788eb4555412","type":"Selection"},{"attributes":{},"id":"fd5bf29f-c509-4ec7-9d0b-75437e82fc12","type":"Selection"},{"attributes":{"data_source":{"id":"f9b31b7d-06ec-4e3e-b95f-0ee58c98b7c1","type":"ColumnDataSource"},"glyph":{"id":"022b8003-15a2-4c27-841f-68dce6622ee6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2149b311-1887-4e1d-b50f-202e980321c3","type":"Circle"},"selection_glyph":null,"view":{"id":"53193868-9cb1-41bb-84b2-3226636f8376","type":"CDSView"}},"id":"bb7beed6-05e3-415c-a8e9-b660397d6ff2","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"213d5eea-04c0-4776-ae2f-5d121c9da0b5","type":"Circle"},{"attributes":{"source":{"id":"bbc2aba9-ef81-4171-91a9-bf991d977694","type":"ColumnDataSource"}},"id":"f2d6c6d9-80d8-4210-a419-02bb8266e6a2","type":"CDSView"},{"attributes":{},"id":"edcea4f8-162d-46e8-8f9f-8cfd85a361bd","type":"BasicTicker"},{"attributes":{"data_source":{"id":"bf5c5069-bde1-473e-a684-23d13c6f9333","type":"ColumnDataSource"},"glyph":{"id":"4edcb0d8-befc-49c0-a2d5-014fe48d1ee6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"efb1730d-05fe-4d4a-a2d3-f71ae842c901","type":"Circle"},"selection_glyph":null,"view":{"id":"8b2e316e-2f0b-41d9-9929-55592bb03d4a","type":"CDSView"}},"id":"b083b379-0957-4dd6-bcf4-4052e49f270e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"0f9839f2-6d0a-4cd6-9cc1-7af3035e132b","type":"DataRange1d"},{"attributes":{"source":{"id":"e4c2b9f9-4c2b-4800-996a-a64a9a6b5541","type":"ColumnDataSource"}},"id":"5f70fe44-f15b-4d5d-bbe7-2060ee2e0fe4","type":"CDSView"},{"attributes":{},"id":"7be35ab2-841c-46b4-90ae-bb0e2ca89537","type":"Selection"},{"attributes":{"source":{"id":"1dd1dd5b-b98d-4fbb-bf45-1f309f1a5441","type":"ColumnDataSource"}},"id":"ebe3a02b-882b-4535-a90a-b85c0dd30737","type":"CDSView"},{"attributes":{"range":null},"id":"b955dd26-602f-475e-bbc4-3548597c8c17","type":"Jitter"},{"attributes":{},"id":"0d5cb12a-76bd-47a4-a60f-c3946ea46ea8","type":"Selection"},{"attributes":{"below":[{"id":"aa33ca8a-6309-4676-a67b-9e2e5293921b","type":"LinearAxis"}],"left":[{"id":"5cf1cfca-a50e-4145-ae8d-27600206edff","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"aa33ca8a-6309-4676-a67b-9e2e5293921b","type":"LinearAxis"},{"id":"02d10415-ec13-4ba5-a676-88c0f409b9f3","type":"Grid"},{"id":"5cf1cfca-a50e-4145-ae8d-27600206edff","type":"LinearAxis"},{"id":"d542eb68-cc75-4ca1-b2c0-ae53c11bced0","type":"Grid"},{"id":"bf305251-b02a-49fe-abdd-f7f23b310da2","type":"BoxAnnotation"},{"id":"ada7d1e1-c19b-4b0e-a75d-678844238710","type":"GlyphRenderer"},{"id":"56b6b6fd-fbd5-4892-b6e9-624a67d05658","type":"GlyphRenderer"},{"id":"af234c79-6985-4eef-b991-95bafc87acd6","type":"GlyphRenderer"},{"id":"1a2f5357-92cb-4e91-bebf-d45d9da33731","type":"GlyphRenderer"},{"id":"c31d9a75-0cff-4ed3-a196-2647b8669e91","type":"GlyphRenderer"},{"id":"f697fcf3-8234-42ba-9138-3f2c05d8df63","type":"GlyphRenderer"},{"id":"c15431f4-5e23-4207-a646-3163c256e4ec","type":"GlyphRenderer"},{"id":"b083b379-0957-4dd6-bcf4-4052e49f270e","type":"GlyphRenderer"},{"id":"baf21822-0d12-4321-9791-e72599c64561","type":"GlyphRenderer"},{"id":"0f1fcfe8-4130-4347-99d4-4cebbafa45d3","type":"GlyphRenderer"},{"id":"ead962ad-3113-4a49-ae03-4af85b43e97e","type":"GlyphRenderer"},{"id":"0fe43c1e-199f-46cc-b39c-70e06c34480d","type":"GlyphRenderer"},{"id":"f27cce1e-9db5-47f1-a9df-fd5a8390dc50","type":"GlyphRenderer"}],"title":{"id":"ab24e349-5536-44af-9d15-08d03773da0e","type":"Title"},"toolbar":{"id":"4fa27448-1e46-4817-b638-295b4b70b302","type":"Toolbar"},"x_range":{"id":"2276ff08-927c-4bae-9a72-4e85927e99bd","type":"DataRange1d"},"x_scale":{"id":"485a20a7-a4d0-4d7a-b80d-fcc8e3165fda","type":"LinearScale"},"y_range":{"id":"a6d628d6-ab3d-4b68-90e0-eaeb538f6259","type":"DataRange1d"},"y_scale":{"id":"f17fe0ee-ac76-4e38-9a70-c99beea98d59","type":"LinearScale"}},"id":"31e97699-9581-498d-9bbe-6e134b5d8643","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"fe8d4fa7-7db7-4862-ace3-699e28be1c24","type":"ColumnDataSource"}},"id":"299147e8-a73c-4d8a-8d12-9e3d15f8ec6d","type":"CDSView"},{"attributes":{},"id":"5d3af8d9-6dc6-48cb-9bad-336c91fb8f2a","type":"Selection"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"4edcb0d8-befc-49c0-a2d5-014fe48d1ee6","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"e5c49e73-fa41-4c4b-b63f-167109f74aeb","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"5d3c81f9-2e30-45dd-a1b4-10a11d317906","type":"Circle"},{"attributes":{},"id":"372a59a6-a381-4ef0-bf80-6b9d02b0a822","type":"UnionRenderers"},{"attributes":{},"id":"ccabe965-6672-4ba9-a74f-585c15911eae","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"92770138-b1f5-4b05-8204-352a96fd47f4","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"9541791a-07bc-41d8-ac44-149537e6b648","type":"Circle"},{"attributes":{"range":null},"id":"bd945255-1812-476f-98f8-b53fa14ca906","type":"Jitter"},{"attributes":{},"id":"d04f9723-5097-4403-b1ab-72bf71726da4","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"98939f19-4a6f-4b4e-b01f-49b6bbe5b4fc","type":"BoxAnnotation"}},"id":"35e7f172-2225-402a-a14c-4a749c734584","type":"BoxZoomTool"},{"attributes":{},"id":"55894845-1058-499f-ae25-deb6dd02f29a","type":"UnionRenderers"},{"attributes":{"source":{"id":"a05f456f-b934-4c05-a5b1-ede6f9784736","type":"ColumnDataSource"}},"id":"f1c36b4b-e0d9-4868-b828-2eac42cd63ba","type":"CDSView"},{"attributes":{"overlay":{"id":"bf305251-b02a-49fe-abdd-f7f23b310da2","type":"BoxAnnotation"}},"id":"d9118da7-c17b-4b3b-bc57-e5cab0fddef8","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"b955dd26-602f-475e-bbc4-3548597c8c17","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"5ceea43b-4e7b-4b6e-afe2-faf8ea1bdd9e","type":"Circle"},{"attributes":{"data_source":{"id":"1dd1dd5b-b98d-4fbb-bf45-1f309f1a5441","type":"ColumnDataSource"},"glyph":{"id":"96bb7d4b-75b8-4d95-935b-fc8fb2c5d7f4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a355971b-bc4c-4ddb-93fb-d708fe5c403d","type":"Circle"},"selection_glyph":null,"view":{"id":"ebe3a02b-882b-4535-a90a-b85c0dd30737","type":"CDSView"}},"id":"d5e3cada-6876-4ac0-9654-3c96329a0ce9","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f06c3b32-7738-48aa-98ff-fe8f56964cf8","type":"ColumnDataSource"}},"id":"5ace0481-54ec-4aac-a895-28957bcb9083","type":"CDSView"},{"attributes":{"source":{"id":"56c4b5cf-50e4-492d-9341-8449d8ab72c9","type":"ColumnDataSource"}},"id":"81693b4f-e69f-44c1-a2af-ec9e62d1ad64","type":"CDSView"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"transform":{"id":"92770138-b1f5-4b05-8204-352a96fd47f4","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"360b469e-6201-4784-a468-5bda0bf4a26f","type":"Circle"},{"attributes":{},"id":"b560c916-7b57-477d-9b4e-e256251168af","type":"BasicTicker"},{"attributes":{},"id":"d408a3fe-0146-4880-bae9-5d1840241ce6","type":"Selection"},{"attributes":{},"id":"4b347741-3062-4cd4-8a8c-1b64a891752d","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"71f30328-e57f-4091-8033-90d85053ba01","type":"Selection"},"selection_policy":{"id":"1be3710b-4114-41a3-977a-d2192d2c838a","type":"UnionRenderers"}},"id":"a05f456f-b934-4c05-a5b1-ede6f9784736","type":"ColumnDataSource"},{"attributes":{},"id":"c4db16a0-51b1-4040-b241-e1fb93be2749","type":"SaveTool"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"1e04a1ca-c2af-42f0-94a5-7a81b0880fa3","type":"Circle"},{"attributes":{},"id":"bf107567-c34b-452d-b960-b54a6494f2a2","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"56c4b5cf-50e4-492d-9341-8449d8ab72c9","type":"ColumnDataSource"},"glyph":{"id":"5ceea43b-4e7b-4b6e-afe2-faf8ea1bdd9e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aa68cce9-063f-4ab3-bf50-a311ea4d87dd","type":"Circle"},"selection_glyph":null,"view":{"id":"81693b4f-e69f-44c1-a2af-ec9e62d1ad64","type":"CDSView"}},"id":"7948a22a-a54a-45ed-87c6-3192c57fddce","type":"GlyphRenderer"},{"attributes":{"source":{"id":"10750916-24a1-4270-8b4e-13778140b706","type":"ColumnDataSource"}},"id":"87f6ce92-a807-49bc-a804-6809ef5987d3","type":"CDSView"},{"attributes":{},"id":"3c9600b1-2e07-4576-b83a-ebaddb2bc3e9","type":"ResetTool"},{"attributes":{},"id":"c2bb89da-496d-4ad0-a4cd-fd9656437e5e","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"68be535c-db12-4d53-b2ee-c2fc913dbbbb","type":"Circle"},{"attributes":{},"id":"43fb9610-4e76-4366-b7db-f0cdb5b6a4be","type":"HelpTool"},{"attributes":{},"id":"bd7c034f-36b3-4496-969e-ef2b71d32b40","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"6da8fcbc-b755-4098-bf9d-334c39f58121","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"8cf46bb8-dd87-460f-ae19-06663828bd77","type":"Circle"},{"attributes":{},"id":"9d516fff-9904-40e0-917d-7af41c224519","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"27011052-7df0-494a-94e8-2f93a241c1ef","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"665555fd-8684-4f45-9fd5-686dfe15dcf2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"d21779b0-ded9-49a0-80fa-481fd128d420","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"dc1912d6-2baa-47ca-906a-7007706a7ade","type":"Circle"},{"attributes":{},"id":"c4d165d9-494c-4564-ac80-f47a0777bc5b","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"817678c9-0f6a-41d9-a72f-20f5a068df7c","type":"Selection"},"selection_policy":{"id":"aa4111f6-47b6-4327-84c5-e1b2a8d1aea0","type":"UnionRenderers"}},"id":"f06c3b32-7738-48aa-98ff-fe8f56964cf8","type":"ColumnDataSource"},{"attributes":{},"id":"14cdda90-5c05-4906-8350-b5da330460cf","type":"PanTool"},{"attributes":{"plot":{"id":"7617fc65-f9df-4e5c-8bac-0d82e9876e60","subtype":"Figure","type":"Plot"},"ticker":{"id":"b560c916-7b57-477d-9b4e-e256251168af","type":"BasicTicker"}},"id":"12ef50b2-d5b1-4971-942f-40e4b8efbf95","type":"Grid"},{"attributes":{},"id":"d7e1d311-f6dd-4f96-8c8f-70019a666478","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"e3747311-5069-43b1-921c-1dd1afbafa4b","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"f9028810-2c2c-40d8-abf2-a6c0edc3be5a","type":"Selection"},"selection_policy":{"id":"d341328f-149c-464d-a3c4-2f320d0967ca","type":"UnionRenderers"}},"id":"fe8d4fa7-7db7-4862-ace3-699e28be1c24","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"27011052-7df0-494a-94e8-2f93a241c1ef","type":"Jitter"},{"attributes":{},"id":"bf1ecf07-c3ac-401b-979e-e12f8617d06b","type":"Selection"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"844300be-7420-4ca8-834d-1ee149bc5f39","type":"Circle"},{"attributes":{},"id":"8964835f-21a0-4825-b78f-6271ff4833f4","type":"Selection"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"6da8fcbc-b755-4098-bf9d-334c39f58121","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"6494dfc7-7736-4e98-9173-b64970cfd59e","type":"Circle"},{"attributes":{},"id":"4648b2d5-a90b-417e-aaf9-ec35969dd036","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"628566b9-da07-4b93-b555-40a1bc143a54","type":"Selection"},"selection_policy":{"id":"710db960-5c4c-4226-afd2-e812e32470a1","type":"UnionRenderers"}},"id":"29be2f2c-46f1-46a0-84ac-12f314820063","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"8835b83b-6428-4ab1-a915-788eb4555412","type":"Selection"},"selection_policy":{"id":"55894845-1058-499f-ae25-deb6dd02f29a","type":"UnionRenderers"}},"id":"4c6ac5a0-3856-45f2-a906-dfc244cf3c8f","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3455c721-214f-43eb-a40a-08ca92e3b290","type":"PanTool"},{"id":"2b7165dc-eacc-49b2-a644-172346cb0e10","type":"WheelZoomTool"},{"id":"35e7f172-2225-402a-a14c-4a749c734584","type":"BoxZoomTool"},{"id":"ccabe965-6672-4ba9-a74f-585c15911eae","type":"SaveTool"},{"id":"a2ec5071-931a-4978-b5f8-c783bb9dd4c8","type":"ResetTool"},{"id":"43fb9610-4e76-4366-b7db-f0cdb5b6a4be","type":"HelpTool"}]},"id":"2083f714-e55e-4bd2-b933-b6ea758508fe","type":"Toolbar"}],"root_ids":["4a0d7b85-e6bf-49d0-bc3b-60c6c9827f28"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"bb354e73-73a2-418c-8ffd-c7d2c13fdded","elementid":"28d40ac7-51fa-4f51-bb08-23f4fe8066db","modelid":"4a0d7b85-e6bf-49d0-bc3b-60c6c9827f28"}];
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