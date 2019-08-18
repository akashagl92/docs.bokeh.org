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
      };var element = document.getElementById("0cd759b7-43a7-4260-8439-c285a77d156a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0cd759b7-43a7-4260-8439-c285a77d156a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"758f1e9f-7438-4822-b689-6c6539658b61":{"roots":{"references":[{"attributes":{"formatter":{"id":"1f87a065-5a59-45d7-995d-54591b4c21f4","type":"BasicTickFormatter"},"plot":{"id":"ce489795-166c-4095-9b65-a850b3987bea","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a9fe947-94c6-4fab-8019-71c51d07128c","type":"BasicTicker"}},"id":"57d59ad9-5663-43f1-904d-c89e09df9fa3","type":"LinearAxis"},{"attributes":{},"id":"a554cf4d-ae74-47f1-a472-2bb78ccb5ee0","type":"LinearScale"},{"attributes":{},"id":"e1781a45-8ac4-483d-864c-50d69e301f71","type":"BasicTickFormatter"},{"attributes":{},"id":"572e94b6-76ab-4c24-9166-6c62c85fd5fc","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"6ef3407a-07c1-4b1b-acd8-4ffd49a1987c","type":"Title"},{"attributes":{"overlay":{"id":"9b5b6f69-7485-4bcf-8cf7-d86c7232b948","type":"BoxAnnotation"}},"id":"0679c8b9-86e5-4d71-b72a-dc53d101b381","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"dh":[10],"dw":[10],"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}],"x":[0],"y":[0]},"selected":{"id":"9f4071ea-ed28-4c2c-8ecf-e5de89900d3b","type":"Selection"},"selection_policy":{"id":"ea156f23-25cb-4da3-a261-ddd13875f179","type":"UnionRenderers"}},"id":"23c5cfd3-f4de-455f-8309-cf3bee9d7562","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":10},"id":"69d49d2f-8c49-4e58-bba3-683f10c2226c","type":"Range1d"},{"attributes":{},"id":"ea156f23-25cb-4da3-a261-ddd13875f179","type":"UnionRenderers"},{"attributes":{},"id":"60f6437d-403a-4390-ad42-8c2191913eb6","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5d766648-6772-4802-83ae-cf1a64fb7fe2","type":"PanTool"},{"id":"60f6437d-403a-4390-ad42-8c2191913eb6","type":"WheelZoomTool"},{"id":"0679c8b9-86e5-4d71-b72a-dc53d101b381","type":"BoxZoomTool"},{"id":"572e94b6-76ab-4c24-9166-6c62c85fd5fc","type":"SaveTool"},{"id":"f46fec3a-1116-43ed-8f06-edad8d3bb6fb","type":"ResetTool"},{"id":"e30d3dfd-92ff-46b9-b435-2b7b476b3279","type":"HelpTool"}]},"id":"444eb8cb-febb-4854-bf00-1278cdf95bec","type":"Toolbar"},{"attributes":{"below":[{"id":"9c73edcc-e574-4900-9086-3c0dfe396fce","type":"LinearAxis"}],"left":[{"id":"57d59ad9-5663-43f1-904d-c89e09df9fa3","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9c73edcc-e574-4900-9086-3c0dfe396fce","type":"LinearAxis"},{"id":"70a3f4a0-58ae-4064-be42-1de2b83f08c1","type":"Grid"},{"id":"57d59ad9-5663-43f1-904d-c89e09df9fa3","type":"LinearAxis"},{"id":"71ac9ffb-e86d-4be0-bd4d-e3ea9c185ea2","type":"Grid"},{"id":"9b5b6f69-7485-4bcf-8cf7-d86c7232b948","type":"BoxAnnotation"},{"id":"81459e6a-1df7-4a7c-ae97-bc4ce4321057","type":"GlyphRenderer"}],"title":{"id":"6ef3407a-07c1-4b1b-acd8-4ffd49a1987c","type":"Title"},"toolbar":{"id":"444eb8cb-febb-4854-bf00-1278cdf95bec","type":"Toolbar"},"x_range":{"id":"c9df764d-5f41-447a-b1c8-3a87a6a118df","type":"Range1d"},"x_scale":{"id":"1beb9813-db5d-43d2-bccc-c2b6566c4903","type":"LinearScale"},"y_range":{"id":"69d49d2f-8c49-4e58-bba3-683f10c2226c","type":"Range1d"},"y_scale":{"id":"a554cf4d-ae74-47f1-a472-2bb78ccb5ee0","type":"LinearScale"}},"id":"ce489795-166c-4095-9b65-a850b3987bea","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9b5b6f69-7485-4bcf-8cf7-d86c7232b948","type":"BoxAnnotation"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f51a7a69-ead5-4dc3-9185-41fb60a599c4","type":"ImageRGBA"},{"attributes":{},"id":"ff34812e-d173-4691-a65f-f46bad915321","type":"BasicTicker"},{"attributes":{},"id":"5d766648-6772-4802-83ae-cf1a64fb7fe2","type":"PanTool"},{"attributes":{"formatter":{"id":"e1781a45-8ac4-483d-864c-50d69e301f71","type":"BasicTickFormatter"},"plot":{"id":"ce489795-166c-4095-9b65-a850b3987bea","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff34812e-d173-4691-a65f-f46bad915321","type":"BasicTicker"}},"id":"9c73edcc-e574-4900-9086-3c0dfe396fce","type":"LinearAxis"},{"attributes":{"data_source":{"id":"23c5cfd3-f4de-455f-8309-cf3bee9d7562","type":"ColumnDataSource"},"glyph":{"id":"f51a7a69-ead5-4dc3-9185-41fb60a599c4","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d4efb314-6280-4d88-953c-89215ce4afad","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"28c7bfbb-7b15-4c69-8936-336b072cd9e2","type":"CDSView"}},"id":"81459e6a-1df7-4a7c-ae97-bc4ce4321057","type":"GlyphRenderer"},{"attributes":{},"id":"9f4071ea-ed28-4c2c-8ecf-e5de89900d3b","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"ce489795-166c-4095-9b65-a850b3987bea","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a9fe947-94c6-4fab-8019-71c51d07128c","type":"BasicTicker"}},"id":"71ac9ffb-e86d-4be0-bd4d-e3ea9c185ea2","type":"Grid"},{"attributes":{},"id":"1beb9813-db5d-43d2-bccc-c2b6566c4903","type":"LinearScale"},{"attributes":{},"id":"0a9fe947-94c6-4fab-8019-71c51d07128c","type":"BasicTicker"},{"attributes":{"source":{"id":"23c5cfd3-f4de-455f-8309-cf3bee9d7562","type":"ColumnDataSource"}},"id":"28c7bfbb-7b15-4c69-8936-336b072cd9e2","type":"CDSView"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4efb314-6280-4d88-953c-89215ce4afad","type":"ImageRGBA"},{"attributes":{},"id":"e30d3dfd-92ff-46b9-b435-2b7b476b3279","type":"HelpTool"},{"attributes":{"callback":null,"end":10},"id":"c9df764d-5f41-447a-b1c8-3a87a6a118df","type":"Range1d"},{"attributes":{},"id":"1f87a065-5a59-45d7-995d-54591b4c21f4","type":"BasicTickFormatter"},{"attributes":{},"id":"f46fec3a-1116-43ed-8f06-edad8d3bb6fb","type":"ResetTool"},{"attributes":{"plot":{"id":"ce489795-166c-4095-9b65-a850b3987bea","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff34812e-d173-4691-a65f-f46bad915321","type":"BasicTicker"}},"id":"70a3f4a0-58ae-4064-be42-1de2b83f08c1","type":"Grid"}],"root_ids":["ce489795-166c-4095-9b65-a850b3987bea"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"758f1e9f-7438-4822-b689-6c6539658b61","elementid":"0cd759b7-43a7-4260-8439-c285a77d156a","modelid":"ce489795-166c-4095-9b65-a850b3987bea"}];
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