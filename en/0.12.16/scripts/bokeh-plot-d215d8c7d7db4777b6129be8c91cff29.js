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
      };var element = document.getElementById("fc14d11d-42b6-4687-acc5-97a9c59ccfa4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc14d11d-42b6-4687-acc5-97a9c59ccfa4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c730ea54-f22d-47a0-bf05-2d05d765ac3f":{"roots":{"references":[{"attributes":{},"id":"c1770c66-ea32-49f0-a311-63a60d4ab9b4","type":"LinearScale"},{"attributes":{"below":[{"id":"65d79f79-a5cd-41e7-9758-fed9a10e5edd","type":"LinearAxis"}],"left":[{"id":"cbf0ff43-4af2-47a9-b375-04dbcb73d1b3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"65d79f79-a5cd-41e7-9758-fed9a10e5edd","type":"LinearAxis"},{"id":"6a5c7958-12b5-4e01-a485-e01468419db5","type":"Grid"},{"id":"cbf0ff43-4af2-47a9-b375-04dbcb73d1b3","type":"LinearAxis"},{"id":"adeaf09e-9db7-4867-b1ba-fb682f935309","type":"Grid"},{"id":"495792cb-0d99-4a01-ace8-38df93734162","type":"BoxAnnotation"},{"id":"24fd0baa-54e3-4532-aa21-624a4114534c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"1be4d0cf-b506-43a1-bba6-f446019621f9","type":"Toolbar"},"x_range":{"id":"cc04fd84-f84d-4416-a596-ec4599ddd215","type":"DataRange1d"},"x_scale":{"id":"6ad174c0-b6d7-4001-84f2-6f87bd19e238","type":"LinearScale"},"y_range":{"id":"c7ee0879-920e-4a94-927a-16d8890900a1","type":"DataRange1d"},"y_scale":{"id":"c1770c66-ea32-49f0-a311-63a60d4ab9b4","type":"LinearScale"}},"id":"05e00b69-9baf-4af6-9493-77fe5f15f2bb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e0936305-1f15-481b-afa5-39df8b8c46db","type":"ResetTool"},{"attributes":{"callback":null},"id":"c7ee0879-920e-4a94-927a-16d8890900a1","type":"DataRange1d"},{"attributes":{},"id":"8cf110dc-aaa1-4f8d-af8a-48b93c186e48","type":"BasicTicker"},{"attributes":{},"id":"2a062a7a-b7d2-47e3-a993-604ec916d8f7","type":"HelpTool"},{"attributes":{},"id":"6ad174c0-b6d7-4001-84f2-6f87bd19e238","type":"LinearScale"},{"attributes":{"callback":null},"id":"cc04fd84-f84d-4416-a596-ec4599ddd215","type":"DataRange1d"},{"attributes":{"plot":{"id":"05e00b69-9baf-4af6-9493-77fe5f15f2bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2f62665-e64c-48c2-ac27-49a279ace5bd","type":"BasicTicker"}},"id":"6a5c7958-12b5-4e01-a485-e01468419db5","type":"Grid"},{"attributes":{"formatter":{"id":"2c6456ca-4596-43b2-882c-cd4526e8c994","type":"BasicTickFormatter"},"plot":{"id":"05e00b69-9baf-4af6-9493-77fe5f15f2bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2f62665-e64c-48c2-ac27-49a279ace5bd","type":"BasicTicker"}},"id":"65d79f79-a5cd-41e7-9758-fed9a10e5edd","type":"LinearAxis"},{"attributes":{},"id":"c73ac57c-4dc7-46fe-9489-29e7ad6f6481","type":"UnionRenderers"},{"attributes":{},"id":"4a839fd2-4f54-4c48-9a3d-04ae6ea3b4b7","type":"BasicTickFormatter"},{"attributes":{},"id":"f909a579-eb2e-4147-90aa-208437dfdd2e","type":"Selection"},{"attributes":{},"id":"d2f62665-e64c-48c2-ac27-49a279ace5bd","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aaf52ee3-abba-4289-adc4-363c8f8001ff","type":"Triangle"},{"attributes":{},"id":"3378d7bd-0020-480d-933d-dbfb2da07e02","type":"BasicTickFormatter"},{"attributes":{},"id":"1cd9b889-d633-4962-b726-6b709f5e1d34","type":"SaveTool"},{"attributes":{"source":{"id":"a80853ef-1805-48db-9a11-332e5e10245a","type":"ColumnDataSource"}},"id":"28883af2-567a-4998-b476-5d4381bd38a9","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"79d07b67-3fe3-45ee-ab34-4233cd79b246","type":"Selection"},"selection_policy":{"id":"43838d83-751f-442f-9261-3d51140e3c77","type":"UnionRenderers"}},"id":"a8b71cf5-fad7-4898-8ff2-3f5f7e9b6481","type":"ColumnDataSource"},{"attributes":{},"id":"0d598e6f-5a98-43b7-8896-9ee3a045e37e","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"a8b71cf5-fad7-4898-8ff2-3f5f7e9b6481","type":"ColumnDataSource"},"glyph":{"id":"c58daced-9a63-4dc3-8ca9-f6295a187c9d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2da3762e-d873-47fe-af02-c9d8670aeb62","type":"Circle"},"selection_glyph":null,"view":{"id":"e89506e5-14a1-4b76-9479-f1a687bdc3f0","type":"CDSView"}},"id":"aa46c20f-e8a3-4d9d-9317-136a9c711532","type":"GlyphRenderer"},{"attributes":{},"id":"f7eca3d4-72a7-44f4-bc33-e142d1a982a3","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c58daced-9a63-4dc3-8ca9-f6295a187c9d","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"495792cb-0d99-4a01-ace8-38df93734162","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"0315b5a8-f99e-4bd4-b1ef-729d5f2a0d95","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cf110dc-aaa1-4f8d-af8a-48b93c186e48","type":"BasicTicker"}},"id":"55ec20d7-499c-4abc-8edf-7784f79ca050","type":"Grid"},{"attributes":{},"id":"b076f0aa-9982-4ddd-9ffb-e30c55d44d0e","type":"PanTool"},{"attributes":{"formatter":{"id":"3378d7bd-0020-480d-933d-dbfb2da07e02","type":"BasicTickFormatter"},"plot":{"id":"05e00b69-9baf-4af6-9493-77fe5f15f2bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a872cc7-eb96-47fd-b163-402f5887bd0a","type":"BasicTicker"}},"id":"cbf0ff43-4af2-47a9-b375-04dbcb73d1b3","type":"LinearAxis"},{"attributes":{},"id":"a20c3be8-6fb1-4ba5-bc11-1b66d8609edc","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b076f0aa-9982-4ddd-9ffb-e30c55d44d0e","type":"PanTool"},{"id":"0d598e6f-5a98-43b7-8896-9ee3a045e37e","type":"WheelZoomTool"},{"id":"412c2abc-8cd1-4760-99f7-63e40010ba9e","type":"BoxZoomTool"},{"id":"4bc003b6-4f38-4f2a-9f7f-d71620fa2eae","type":"SaveTool"},{"id":"b0102bee-08cc-4210-8861-1936bd1913be","type":"ResetTool"},{"id":"d1da2d6f-0e93-4206-9bbf-dd59072e1f55","type":"HelpTool"}]},"id":"1be4d0cf-b506-43a1-bba6-f446019621f9","type":"Toolbar"},{"attributes":{},"id":"0a872cc7-eb96-47fd-b163-402f5887bd0a","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11cf4091-acc6-4574-82bb-49f5db2fb987","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"05e00b69-9baf-4af6-9493-77fe5f15f2bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a872cc7-eb96-47fd-b163-402f5887bd0a","type":"BasicTicker"}},"id":"adeaf09e-9db7-4867-b1ba-fb682f935309","type":"Grid"},{"attributes":{"data_source":{"id":"a80853ef-1805-48db-9a11-332e5e10245a","type":"ColumnDataSource"},"glyph":{"id":"104c6b82-7492-4e03-b056-5761975dbd2b","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aaf52ee3-abba-4289-adc4-363c8f8001ff","type":"Triangle"},"selection_glyph":null,"view":{"id":"28883af2-567a-4998-b476-5d4381bd38a9","type":"CDSView"}},"id":"24fd0baa-54e3-4532-aa21-624a4114534c","type":"GlyphRenderer"},{"attributes":{},"id":"31b34d3e-d168-431a-994a-1eb6ab4f4c23","type":"WheelZoomTool"},{"attributes":{},"id":"9b79aedd-e637-44c5-85b9-36dd0bc012c1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"104c6b82-7492-4e03-b056-5761975dbd2b","type":"Triangle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"f7eca3d4-72a7-44f4-bc33-e142d1a982a3","type":"Selection"},"selection_policy":{"id":"6c532bc7-762e-4a23-9d20-5b6a83bd18c7","type":"UnionRenderers"}},"id":"a80853ef-1805-48db-9a11-332e5e10245a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"cd48ca5f-d883-4695-9a55-f0063a6e12b2","type":"ColumnDataSource"},"glyph":{"id":"6f3a6778-a591-4d54-ada1-b53d24f48200","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d445c5c7-541a-45c6-885b-fb6ca27dd555","type":"Square"},"selection_glyph":null,"view":{"id":"df18f07d-5289-4af6-b66b-5de6e2a550b7","type":"CDSView"}},"id":"c8db9761-3ee3-4241-9aab-c9efe6a0f500","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"495792cb-0d99-4a01-ace8-38df93734162","type":"BoxAnnotation"}},"id":"412c2abc-8cd1-4760-99f7-63e40010ba9e","type":"BoxZoomTool"},{"attributes":{},"id":"43838d83-751f-442f-9261-3d51140e3c77","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"c19c1e52-ac1d-47c1-8995-5019da860c63","type":"DataRange1d"},{"attributes":{"overlay":{"id":"11cf4091-acc6-4574-82bb-49f5db2fb987","type":"BoxAnnotation"}},"id":"982148bb-d8ac-4f56-b925-fe2dd559a10c","type":"BoxZoomTool"},{"attributes":{},"id":"4bc003b6-4f38-4f2a-9f7f-d71620fa2eae","type":"SaveTool"},{"attributes":{},"id":"79d07b67-3fe3-45ee-ab34-4233cd79b246","type":"Selection"},{"attributes":{"formatter":{"id":"9b79aedd-e637-44c5-85b9-36dd0bc012c1","type":"BasicTickFormatter"},"plot":{"id":"274bd86c-3723-4e9c-9100-0261074b965d","subtype":"Figure","type":"Plot"},"ticker":{"id":"20ce1305-c34a-43d6-890d-0538f7cfd566","type":"BasicTicker"}},"id":"e3c06848-be18-4376-9d5f-3f3d8c9fa8bc","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b95a417d-ff73-4bc5-acec-2534888eb014","type":"BasicTickFormatter"},"plot":{"id":"0315b5a8-f99e-4bd4-b1ef-729d5f2a0d95","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cf110dc-aaa1-4f8d-af8a-48b93c186e48","type":"BasicTicker"}},"id":"549f7e3d-ff9b-496a-b6c3-6a33ca6c54cf","type":"LinearAxis"},{"attributes":{},"id":"b0102bee-08cc-4210-8861-1936bd1913be","type":"ResetTool"},{"attributes":{},"id":"3ae2fe60-69b2-4786-bd2e-5e8edad0ba74","type":"BasicTickFormatter"},{"attributes":{},"id":"37a26e26-acfd-4887-aa13-b9aa12f75dfe","type":"LinearScale"},{"attributes":{},"id":"d1da2d6f-0e93-4206-9bbf-dd59072e1f55","type":"HelpTool"},{"attributes":{},"id":"2c6456ca-4596-43b2-882c-cd4526e8c994","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e73f66bb-7330-42f9-9c71-ea5e34fe6fed","type":"DataRange1d"},{"attributes":{"callback":null},"id":"db1d0aac-d19b-4838-b27e-e81a316d554c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c8f14403-b60e-4fb6-9e9d-82485844e6ba","type":"PanTool"},{"id":"a2c2b17d-dbef-411d-b2a8-5c12b978fbc4","type":"WheelZoomTool"},{"id":"a1c8dd83-d256-4ae6-8daa-8085a9207461","type":"BoxZoomTool"},{"id":"ca059e40-4535-4fe6-b65f-7cd3295a418d","type":"SaveTool"},{"id":"d0f9005c-9eff-44a9-9cfd-1e32bb359552","type":"ResetTool"},{"id":"aeaac8e2-23d9-4c66-98d2-a722246b88b9","type":"HelpTool"}]},"id":"947f57c7-ccf3-4c43-9d5c-03be0e2d2cfb","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2da3762e-d873-47fe-af02-c9d8670aeb62","type":"Circle"},{"attributes":{"plot":{"id":"0315b5a8-f99e-4bd4-b1ef-729d5f2a0d95","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d201f55-70bc-4e0b-a766-270f3d800113","type":"BasicTicker"}},"id":"26f660f7-8f8b-41f5-a9a8-77c49b254ca1","type":"Grid"},{"attributes":{"below":[{"id":"e3c06848-be18-4376-9d5f-3f3d8c9fa8bc","type":"LinearAxis"}],"left":[{"id":"9a56c657-1921-445d-97a0-e614a2ceb702","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e3c06848-be18-4376-9d5f-3f3d8c9fa8bc","type":"LinearAxis"},{"id":"f612e14a-108b-4a03-9a49-60418c97d937","type":"Grid"},{"id":"9a56c657-1921-445d-97a0-e614a2ceb702","type":"LinearAxis"},{"id":"043d5ae3-6e39-44b5-a474-565c50f379f2","type":"Grid"},{"id":"a2c35e44-3c4e-48bb-b83e-26029c00b724","type":"BoxAnnotation"},{"id":"c8db9761-3ee3-4241-9aab-c9efe6a0f500","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"947f57c7-ccf3-4c43-9d5c-03be0e2d2cfb","type":"Toolbar"},"x_range":{"id":"db1d0aac-d19b-4838-b27e-e81a316d554c","type":"DataRange1d"},"x_scale":{"id":"3ed3c195-e662-4478-9fcc-50c35c3b4865","type":"LinearScale"},"y_range":{"id":"c19c1e52-ac1d-47c1-8995-5019da860c63","type":"DataRange1d"},"y_scale":{"id":"20bbd440-00fe-4d38-bd4a-20bc500cbde1","type":"LinearScale"}},"id":"274bd86c-3723-4e9c-9100-0261074b965d","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"4a839fd2-4f54-4c48-9a3d-04ae6ea3b4b7","type":"BasicTickFormatter"},"plot":{"id":"0315b5a8-f99e-4bd4-b1ef-729d5f2a0d95","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d201f55-70bc-4e0b-a766-270f3d800113","type":"BasicTicker"}},"id":"e4b35e7e-505d-4756-8a59-e022c9c04e72","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f3a6778-a591-4d54-ada1-b53d24f48200","type":"Square"},{"attributes":{},"id":"4a2e34b6-8582-42ac-b5cf-8e92da70d518","type":"LinearScale"},{"attributes":{},"id":"3ed3c195-e662-4478-9fcc-50c35c3b4865","type":"LinearScale"},{"attributes":{},"id":"6c532bc7-762e-4a23-9d20-5b6a83bd18c7","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"5176600b-45d1-411d-92a6-f508f07d2a2e","type":"DataRange1d"},{"attributes":{"plot":{"id":"274bd86c-3723-4e9c-9100-0261074b965d","subtype":"Figure","type":"Plot"},"ticker":{"id":"20ce1305-c34a-43d6-890d-0538f7cfd566","type":"BasicTicker"}},"id":"f612e14a-108b-4a03-9a49-60418c97d937","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a2c35e44-3c4e-48bb-b83e-26029c00b724","type":"BoxAnnotation"},{"attributes":{},"id":"1d201f55-70bc-4e0b-a766-270f3d800113","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a20c3be8-6fb1-4ba5-bc11-1b66d8609edc","type":"PanTool"},{"id":"31b34d3e-d168-431a-994a-1eb6ab4f4c23","type":"WheelZoomTool"},{"id":"982148bb-d8ac-4f56-b925-fe2dd559a10c","type":"BoxZoomTool"},{"id":"1cd9b889-d633-4962-b726-6b709f5e1d34","type":"SaveTool"},{"id":"e0936305-1f15-481b-afa5-39df8b8c46db","type":"ResetTool"},{"id":"2a062a7a-b7d2-47e3-a993-604ec916d8f7","type":"HelpTool"}]},"id":"ad5ea311-6bad-48fb-a2cd-4df928202591","type":"Toolbar"},{"attributes":{},"id":"c8f14403-b60e-4fb6-9e9d-82485844e6ba","type":"PanTool"},{"attributes":{},"id":"b95a417d-ff73-4bc5-acec-2534888eb014","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"a8b71cf5-fad7-4898-8ff2-3f5f7e9b6481","type":"ColumnDataSource"}},"id":"e89506e5-14a1-4b76-9479-f1a687bdc3f0","type":"CDSView"},{"attributes":{"below":[{"id":"e4b35e7e-505d-4756-8a59-e022c9c04e72","type":"LinearAxis"}],"left":[{"id":"549f7e3d-ff9b-496a-b6c3-6a33ca6c54cf","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e4b35e7e-505d-4756-8a59-e022c9c04e72","type":"LinearAxis"},{"id":"26f660f7-8f8b-41f5-a9a8-77c49b254ca1","type":"Grid"},{"id":"549f7e3d-ff9b-496a-b6c3-6a33ca6c54cf","type":"LinearAxis"},{"id":"55ec20d7-499c-4abc-8edf-7784f79ca050","type":"Grid"},{"id":"11cf4091-acc6-4574-82bb-49f5db2fb987","type":"BoxAnnotation"},{"id":"aa46c20f-e8a3-4d9d-9317-136a9c711532","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"ad5ea311-6bad-48fb-a2cd-4df928202591","type":"Toolbar"},"x_range":{"id":"5176600b-45d1-411d-92a6-f508f07d2a2e","type":"DataRange1d"},"x_scale":{"id":"37a26e26-acfd-4887-aa13-b9aa12f75dfe","type":"LinearScale"},"y_range":{"id":"e73f66bb-7330-42f9-9c71-ea5e34fe6fed","type":"DataRange1d"},"y_scale":{"id":"4a2e34b6-8582-42ac-b5cf-8e92da70d518","type":"LinearScale"}},"id":"0315b5a8-f99e-4bd4-b1ef-729d5f2a0d95","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"f909a579-eb2e-4147-90aa-208437dfdd2e","type":"Selection"},"selection_policy":{"id":"c73ac57c-4dc7-46fe-9489-29e7ad6f6481","type":"UnionRenderers"}},"id":"cd48ca5f-d883-4695-9a55-f0063a6e12b2","type":"ColumnDataSource"},{"attributes":{},"id":"20bbd440-00fe-4d38-bd4a-20bc500cbde1","type":"LinearScale"},{"attributes":{},"id":"20ce1305-c34a-43d6-890d-0538f7cfd566","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3ae2fe60-69b2-4786-bd2e-5e8edad0ba74","type":"BasicTickFormatter"},"plot":{"id":"274bd86c-3723-4e9c-9100-0261074b965d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d530f5a6-1dd5-42f4-92d3-2e8934a66f10","type":"BasicTicker"}},"id":"9a56c657-1921-445d-97a0-e614a2ceb702","type":"LinearAxis"},{"attributes":{},"id":"d530f5a6-1dd5-42f4-92d3-2e8934a66f10","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"274bd86c-3723-4e9c-9100-0261074b965d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d530f5a6-1dd5-42f4-92d3-2e8934a66f10","type":"BasicTicker"}},"id":"043d5ae3-6e39-44b5-a474-565c50f379f2","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d445c5c7-541a-45c6-885b-fb6ca27dd555","type":"Square"},{"attributes":{"source":{"id":"cd48ca5f-d883-4695-9a55-f0063a6e12b2","type":"ColumnDataSource"}},"id":"df18f07d-5289-4af6-b66b-5de6e2a550b7","type":"CDSView"},{"attributes":{"children":[{"id":"0315b5a8-f99e-4bd4-b1ef-729d5f2a0d95","subtype":"Figure","type":"Plot"},{"id":"05e00b69-9baf-4af6-9493-77fe5f15f2bb","subtype":"Figure","type":"Plot"},{"id":"274bd86c-3723-4e9c-9100-0261074b965d","subtype":"Figure","type":"Plot"}]},"id":"409e7643-5043-429a-ab9c-bfd10dfc81dc","type":"Row"},{"attributes":{},"id":"a2c2b17d-dbef-411d-b2a8-5c12b978fbc4","type":"WheelZoomTool"},{"attributes":{},"id":"aeaac8e2-23d9-4c66-98d2-a722246b88b9","type":"HelpTool"},{"attributes":{"overlay":{"id":"a2c35e44-3c4e-48bb-b83e-26029c00b724","type":"BoxAnnotation"}},"id":"a1c8dd83-d256-4ae6-8daa-8085a9207461","type":"BoxZoomTool"},{"attributes":{},"id":"ca059e40-4535-4fe6-b65f-7cd3295a418d","type":"SaveTool"},{"attributes":{},"id":"d0f9005c-9eff-44a9-9cfd-1e32bb359552","type":"ResetTool"}],"root_ids":["409e7643-5043-429a-ab9c-bfd10dfc81dc"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"c730ea54-f22d-47a0-bf05-2d05d765ac3f","elementid":"fc14d11d-42b6-4687-acc5-97a9c59ccfa4","modelid":"409e7643-5043-429a-ab9c-bfd10dfc81dc"}];
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