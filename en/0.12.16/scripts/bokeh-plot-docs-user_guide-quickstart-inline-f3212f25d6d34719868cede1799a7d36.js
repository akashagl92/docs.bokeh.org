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
      };var element = document.getElementById("071ef903-6396-423d-bded-db8e42ef3026");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '071ef903-6396-423d-bded-db8e42ef3026' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d2eb5632-b8cf-47dc-959d-7e7f0adf9e53":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34c19e9a-3710-49f6-a082-b44be2a6a926","type":"Triangle"},{"attributes":{"data_source":{"id":"c8033bd4-a7c5-4603-8c3d-21db1a451200","type":"ColumnDataSource"},"glyph":{"id":"50d85691-6367-4989-8407-595e9486dcba","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34c19e9a-3710-49f6-a082-b44be2a6a926","type":"Triangle"},"selection_glyph":null,"view":{"id":"a941131f-a9e6-4003-b0db-619c58c6eb92","type":"CDSView"}},"id":"2884b0e4-6d92-46d5-8b71-1e7fd2cb0695","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D+yzYPRkeXxP7ihgYdrgfM/rb0yquzM9D/245G2v8L1P87bFRfwXvY/2iiqbvqe9j/kKcny1oH2P2p9E6r9B/Y/t9rofWQz9T/V4vYmdwf0P338ARYJifI/RdfykkG+8D9ETRXIBF3tPyugTMuSxOg/JsOhHxvG4z8XRefmX+zcP4TfmO5l1dE/2IAW3tnTuT9QVAYbRxi0v26sY4ZobNC/kDyhvhiP278fJw0IIiDjv8rnndrvKei/4klI9jTQ7L9i6ms85X/wvyB3ITG5U/K/nEtETQ/c879kyJx6lxL1v3a2nZlS8vW/jCxGFqd39r9Ikzy8b6D2v7IbDo0EbPa/VCYsdD3b9b+XNIXNbvD0vyX2CM1fr/O/Ewqe7jod8r/hQKSueEDwv7KoVMWJQey/OkhCQL6N57//x2pm7XjivwmD/egKMNq/WFreULgEzr/gjtyf0basv8DQmYTCjb8/YDFTHT090z9zKk7fyUfePwQ64frNauQ/Br4PG51d6T/UmpIn8OftPyz+X62J+/A/JAqwLSe98j/wrAGOlDH0P9+qQLrTUvU/YiQQQD0c9j8qs4V6k4r2Pw41lOsPnPY/TXYpjGpQ9j9uO9/02qj1P8SNeVoTqPQ/wTrZcjVS8z/dcSFwwazxPxnyVbD+fO8/vXE0K8Ye6z+6a09r11DmP/7dFbP8JuE/QJmw0PVs1z8YNwvg51bIP4A3qsMi+oY/tJyl3I19xb9gjLYfHAnWv+4O12hWfOC/dgkSnTaw5b/Eiyd/wIrqv1M5qN/19+6/bg/Nc81y8b9c/veZwCHzv4mZSz7lgfS/nqNH2pCN9b9BMd7bdED2vxjtFmOwl/a/lMBYHdyR9r+wHoMNEC/2vww2BinjcPW/M3KRy2Ra9L+mR1EcEPDyv8K/p5i5N/G/fKrPIO5w7r87P/7sBPXpv0iCivwvDuW/bUUVRECh3788RM3h1qPUv0S1wErRosK/wBtiTTs7oT9AtNpTsC7LP531ygVNz9g/audXAYjQ4T/buikNCPDmP2xZBmcMses//P//////7z8=","dtype":"float64","shape":[100]}},"selected":{"id":"4190f1b5-3342-4469-950d-6afb0512bd6a","type":"Selection"},"selection_policy":{"id":"7212a8a9-5dab-4b79-af67-6e6db9e0d090","type":"UnionRenderers"}},"id":"7291a667-17d9-45e8-9b59-9190c463c536","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"50d85691-6367-4989-8407-595e9486dcba","type":"Triangle"},{"attributes":{"children":[{"id":"0ffe4959-974a-418b-bfe4-bb96e146d286","subtype":"Figure","type":"Plot"},{"id":"e220529c-5d8b-4e5b-bd82-583163d9bc2c","subtype":"Figure","type":"Plot"},{"id":"8e6112e0-5d76-4480-9139-58ad6c55c28a","subtype":"Figure","type":"Plot"}]},"id":"48bacde4-0da7-48dd-8df4-8f5840620c87","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"00a99236-c851-48c4-aec7-1b822180e2d4","type":"BoxAnnotation"},{"attributes":{},"id":"b861df5e-ee4d-4ffb-a94e-a7cedf62c4be","type":"PanTool"},{"attributes":{"source":{"id":"c8033bd4-a7c5-4603-8c3d-21db1a451200","type":"ColumnDataSource"}},"id":"a941131f-a9e6-4003-b0db-619c58c6eb92","type":"CDSView"},{"attributes":{},"id":"213975da-2a7b-447d-8f29-74fcc2f102a5","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"00a99236-c851-48c4-aec7-1b822180e2d4","type":"BoxAnnotation"}},"id":"c8154e3f-5250-4aa7-b5f2-c41905f3944d","type":"BoxZoomTool"},{"attributes":{},"id":"8794dd6e-1f6c-42fd-aa12-30edbb7ab157","type":"SaveTool"},{"attributes":{},"id":"362bd49b-e3b9-4ed4-aa3f-77c4f9866099","type":"ResetTool"},{"attributes":{},"id":"547a94cb-51a1-4eb5-8ae4-83026cd94031","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bfb7b112-9c60-4e0a-8676-fbf09ec2746d","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"efb5a6c3-5f4b-4959-90b2-7a3fc3526c1a","type":"PanTool"},{"id":"98b63870-952c-46c2-ab8d-03bab0430b72","type":"WheelZoomTool"},{"id":"e0a67f23-c154-42e2-b4e7-7661704c1b02","type":"BoxZoomTool"},{"id":"64852e1b-6283-4c9f-8935-252a808d264c","type":"SaveTool"},{"id":"b5766824-c3fa-4954-8ccf-5dd3982c8e0e","type":"ResetTool"},{"id":"9c0e0e7d-1a03-4360-99bc-16fee3d67040","type":"HelpTool"}]},"id":"24b15837-48f9-4dbb-a8bc-f5258bdd8ab1","type":"Toolbar"},{"attributes":{"below":[{"id":"d212d9f3-95de-4213-a546-e4cfe0e5897d","type":"LinearAxis"}],"left":[{"id":"e6642d95-adec-43e5-83a2-2039aaa7d080","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d212d9f3-95de-4213-a546-e4cfe0e5897d","type":"LinearAxis"},{"id":"d722c630-4513-42bd-817c-8d84d64b5224","type":"Grid"},{"id":"e6642d95-adec-43e5-83a2-2039aaa7d080","type":"LinearAxis"},{"id":"004e3a14-3b87-45d7-b834-cfaddc45e17c","type":"Grid"},{"id":"bfb7b112-9c60-4e0a-8676-fbf09ec2746d","type":"BoxAnnotation"},{"id":"5dc39a45-537a-4de4-aaa0-587b5b0a6084","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"24b15837-48f9-4dbb-a8bc-f5258bdd8ab1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4318f337-fb06-46a5-916a-619290032fcf","type":"DataRange1d"},"x_scale":{"id":"e6155f04-2054-4b28-8120-3adbf4529b65","type":"LinearScale"},"y_range":{"id":"4fa50adb-08b1-4deb-adbd-3ac130ef5532","type":"DataRange1d"},"y_scale":{"id":"5634d451-8f59-4ca8-90fc-63361787aff3","type":"LinearScale"}},"id":"8e6112e0-5d76-4480-9139-58ad6c55c28a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"98b63870-952c-46c2-ab8d-03bab0430b72","type":"WheelZoomTool"},{"attributes":{},"id":"3043387e-059b-491d-823e-50c8eaa54a83","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"56e12fe9-8521-49a4-b281-241a2068b431","type":"Square"},{"attributes":{"formatter":{"id":"150fc33f-7db8-42d3-91b7-6ab75abc2a2d","type":"BasicTickFormatter"},"plot":{"id":"e220529c-5d8b-4e5b-bd82-583163d9bc2c","subtype":"Figure","type":"Plot"},"ticker":{"id":"48b2fad2-ffc6-417a-9923-1524d1b896f1","type":"BasicTicker"}},"id":"e9b80fd2-2933-4a2a-9099-ca13397cfb95","type":"LinearAxis"},{"attributes":{},"id":"64852e1b-6283-4c9f-8935-252a808d264c","type":"SaveTool"},{"attributes":{"overlay":{"id":"bfb7b112-9c60-4e0a-8676-fbf09ec2746d","type":"BoxAnnotation"}},"id":"e0a67f23-c154-42e2-b4e7-7661704c1b02","type":"BoxZoomTool"},{"attributes":{},"id":"9c0e0e7d-1a03-4360-99bc-16fee3d67040","type":"HelpTool"},{"attributes":{"plot":{"id":"8e6112e0-5d76-4480-9139-58ad6c55c28a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b504460-02d8-44f8-9c81-4bce5b993026","type":"BasicTicker"}},"id":"d722c630-4513-42bd-817c-8d84d64b5224","type":"Grid"},{"attributes":{},"id":"b5766824-c3fa-4954-8ccf-5dd3982c8e0e","type":"ResetTool"},{"attributes":{},"id":"34b25b14-fa00-40b2-992c-7a228593fd90","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48bacde4-0da7-48dd-8df4-8f5840620c87","type":"Row"}]},"id":"839254da-35b5-47a2-8bd9-6e9ef44c517f","type":"Column"},{"attributes":{},"id":"f7ad0ea7-3123-4580-b2d2-8826f8a2c27b","type":"BasicTickFormatter"},{"attributes":{},"id":"4862f825-d48f-4822-b784-c683d95a5f03","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"7291a667-17d9-45e8-9b59-9190c463c536","type":"ColumnDataSource"}},"id":"6ada1951-7232-459e-9218-d5771eba2a71","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"8e6112e0-5d76-4480-9139-58ad6c55c28a","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6cc20d1-7cff-4c74-8ba3-80c86d67ba95","type":"BasicTicker"}},"id":"004e3a14-3b87-45d7-b834-cfaddc45e17c","type":"Grid"},{"attributes":{},"id":"916d8ae6-0fa5-4dc7-a1de-553f234e093b","type":"Selection"},{"attributes":{},"id":"e6cc20d1-7cff-4c74-8ba3-80c86d67ba95","type":"BasicTicker"},{"attributes":{},"id":"f9843b41-10cc-498b-b8c7-5aab0b6db92a","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"4862f825-d48f-4822-b784-c683d95a5f03","type":"BasicTickFormatter"},"plot":{"id":"8e6112e0-5d76-4480-9139-58ad6c55c28a","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6cc20d1-7cff-4c74-8ba3-80c86d67ba95","type":"BasicTicker"}},"id":"e6642d95-adec-43e5-83a2-2039aaa7d080","type":"LinearAxis"},{"attributes":{},"id":"150fc33f-7db8-42d3-91b7-6ab75abc2a2d","type":"BasicTickFormatter"},{"attributes":{},"id":"6b504460-02d8-44f8-9c81-4bce5b993026","type":"BasicTicker"},{"attributes":{"formatter":{"id":"78260d51-54ee-4279-8b63-d3c2c915b5de","type":"BasicTickFormatter"},"plot":{"id":"8e6112e0-5d76-4480-9139-58ad6c55c28a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b504460-02d8-44f8-9c81-4bce5b993026","type":"BasicTicker"}},"id":"d212d9f3-95de-4213-a546-e4cfe0e5897d","type":"LinearAxis"},{"attributes":{},"id":"caf0b22d-068b-4c53-9f01-14877c9fb465","type":"Selection"},{"attributes":{"callback":null},"id":"4fa50adb-08b1-4deb-adbd-3ac130ef5532","type":"DataRange1d"},{"attributes":{},"id":"4190f1b5-3342-4469-950d-6afb0512bd6a","type":"Selection"},{"attributes":{},"id":"5634d451-8f59-4ca8-90fc-63361787aff3","type":"LinearScale"},{"attributes":{},"id":"bd728a48-495b-4438-8186-ab8a2a927735","type":"UnionRenderers"},{"attributes":{},"id":"e6155f04-2054-4b28-8120-3adbf4529b65","type":"LinearScale"},{"attributes":{},"id":"78260d51-54ee-4279-8b63-d3c2c915b5de","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa37fcad-1af2-419e-af43-564ff274064c","type":"Square"},{"attributes":{},"id":"7212a8a9-5dab-4b79-af67-6e6db9e0d090","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"a2249de2-5871-412c-a55d-01accc62bdd7","type":"ColumnDataSource"},"glyph":{"id":"1f5c2ca8-a9c1-4769-84bb-cec14c185ee1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9f5d42c5-8b61-44e4-aedf-971fcf1bb162","type":"Circle"},"selection_glyph":null,"view":{"id":"fdb7d188-1152-41d8-99cf-9bb66410549e","type":"CDSView"}},"id":"8f01010f-1c99-43d4-b671-43f62d3997d1","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"f7ad0ea7-3123-4580-b2d2-8826f8a2c27b","type":"BasicTickFormatter"},"plot":{"id":"0ffe4959-974a-418b-bfe4-bb96e146d286","subtype":"Figure","type":"Plot"},"ticker":{"id":"56172c96-3538-4900-9eab-10bd8565619f","type":"BasicTicker"}},"id":"5dfe9012-5f99-4a21-8158-cc451d86bc63","type":"LinearAxis"},{"attributes":{},"id":"e5ac1815-0305-4c16-8452-f3518a382120","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"4318f337-fb06-46a5-916a-619290032fcf","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7291a667-17d9-45e8-9b59-9190c463c536","type":"ColumnDataSource"},"glyph":{"id":"aa37fcad-1af2-419e-af43-564ff274064c","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56e12fe9-8521-49a4-b281-241a2068b431","type":"Square"},"selection_glyph":null,"view":{"id":"6ada1951-7232-459e-9218-d5771eba2a71","type":"CDSView"}},"id":"5dc39a45-537a-4de4-aaa0-587b5b0a6084","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"458221e2-341d-4f88-a60e-7edf4e02ac6f","type":"LinearAxis"}],"left":[{"id":"5dfe9012-5f99-4a21-8158-cc451d86bc63","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"458221e2-341d-4f88-a60e-7edf4e02ac6f","type":"LinearAxis"},{"id":"a9d3bee6-541e-402e-9c55-2c54da34fae9","type":"Grid"},{"id":"5dfe9012-5f99-4a21-8158-cc451d86bc63","type":"LinearAxis"},{"id":"4d1f11e5-6963-44d5-a4c0-9bfc8d87e4e4","type":"Grid"},{"id":"3ce65bd8-4f01-46aa-a514-822b3268429b","type":"BoxAnnotation"},{"id":"8f01010f-1c99-43d4-b671-43f62d3997d1","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"49bacb11-9475-4b0b-84c7-361a52e1e3fa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4318f337-fb06-46a5-916a-619290032fcf","type":"DataRange1d"},"x_scale":{"id":"eb2a418c-dfd1-4e85-a533-b03feb987237","type":"LinearScale"},"y_range":{"id":"ce39a278-878c-4b8d-983b-38c19651e26d","type":"DataRange1d"},"y_scale":{"id":"c7b5d16e-951b-4252-9318-fba5b9c9f15b","type":"LinearScale"}},"id":"0ffe4959-974a-418b-bfe4-bb96e146d286","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a56c0a5f-6e0d-4115-8a35-ee7817f829bb","type":"PanTool"},{"id":"e5ac1815-0305-4c16-8452-f3518a382120","type":"WheelZoomTool"},{"id":"44886ab7-6fbd-4712-8fb0-e6df4b6667a3","type":"BoxZoomTool"},{"id":"1bc5cbeb-31c7-4c52-9260-51a70fb0cadc","type":"SaveTool"},{"id":"7315cfd3-668b-405a-b41f-9b9c758e9d54","type":"ResetTool"},{"id":"a97f3d1a-20ab-4b4d-819f-ef9c79377fe3","type":"HelpTool"}]},"id":"49bacb11-9475-4b0b-84c7-361a52e1e3fa","type":"Toolbar"},{"attributes":{"formatter":{"id":"34b25b14-fa00-40b2-992c-7a228593fd90","type":"BasicTickFormatter"},"plot":{"id":"0ffe4959-974a-418b-bfe4-bb96e146d286","subtype":"Figure","type":"Plot"},"ticker":{"id":"6dbc6b0b-d8d8-4e57-81cc-8eea0a4ae690","type":"BasicTicker"}},"id":"458221e2-341d-4f88-a60e-7edf4e02ac6f","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f5c2ca8-a9c1-4769-84bb-cec14c185ee1","type":"Circle"},{"attributes":{},"id":"eb2a418c-dfd1-4e85-a533-b03feb987237","type":"LinearScale"},{"attributes":{"callback":null},"id":"ce39a278-878c-4b8d-983b-38c19651e26d","type":"DataRange1d"},{"attributes":{},"id":"c7b5d16e-951b-4252-9318-fba5b9c9f15b","type":"LinearScale"},{"attributes":{},"id":"a56c0a5f-6e0d-4115-8a35-ee7817f829bb","type":"PanTool"},{"attributes":{"plot":{"id":"0ffe4959-974a-418b-bfe4-bb96e146d286","subtype":"Figure","type":"Plot"},"ticker":{"id":"6dbc6b0b-d8d8-4e57-81cc-8eea0a4ae690","type":"BasicTicker"}},"id":"a9d3bee6-541e-402e-9c55-2c54da34fae9","type":"Grid"},{"attributes":{},"id":"6dbc6b0b-d8d8-4e57-81cc-8eea0a4ae690","type":"BasicTicker"},{"attributes":{},"id":"dd45ed22-31a4-4bb9-8a43-a6a787fc5c30","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e220529c-5d8b-4e5b-bd82-583163d9bc2c","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd45ed22-31a4-4bb9-8a43-a6a787fc5c30","type":"BasicTicker"}},"id":"19095525-8189-4eec-baf5-4cfa6f46f61b","type":"Grid"},{"attributes":{"source":{"id":"a2249de2-5871-412c-a55d-01accc62bdd7","type":"ColumnDataSource"}},"id":"fdb7d188-1152-41d8-99cf-9bb66410549e","type":"CDSView"},{"attributes":{},"id":"665640e9-0fcc-4064-b3d6-c1d1fce614cf","type":"LinearScale"},{"attributes":{},"id":"efb5a6c3-5f4b-4959-90b2-7a3fc3526c1a","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b861df5e-ee4d-4ffb-a94e-a7cedf62c4be","type":"PanTool"},{"id":"213975da-2a7b-447d-8f29-74fcc2f102a5","type":"WheelZoomTool"},{"id":"c8154e3f-5250-4aa7-b5f2-c41905f3944d","type":"BoxZoomTool"},{"id":"8794dd6e-1f6c-42fd-aa12-30edbb7ab157","type":"SaveTool"},{"id":"362bd49b-e3b9-4ed4-aa3f-77c4f9866099","type":"ResetTool"},{"id":"547a94cb-51a1-4eb5-8ae4-83026cd94031","type":"HelpTool"}]},"id":"6b6d07df-048f-4dcb-859c-b8a9d0a37ece","type":"Toolbar"},{"attributes":{},"id":"56172c96-3538-4900-9eab-10bd8565619f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0ffe4959-974a-418b-bfe4-bb96e146d286","subtype":"Figure","type":"Plot"},"ticker":{"id":"56172c96-3538-4900-9eab-10bd8565619f","type":"BasicTicker"}},"id":"4d1f11e5-6963-44d5-a4c0-9bfc8d87e4e4","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}},"selected":{"id":"916d8ae6-0fa5-4dc7-a1de-553f234e093b","type":"Selection"},"selection_policy":{"id":"f9843b41-10cc-498b-b8c7-5aab0b6db92a","type":"UnionRenderers"}},"id":"a2249de2-5871-412c-a55d-01accc62bdd7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f5d42c5-8b61-44e4-aedf-971fcf1bb162","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D9o+gYFGL7vPyN/Fo5v+e4/XLHeqjC17T9foQT4kvbrP1YykSHGxOk/tDkVSdQo5z9AE3HJfC3kP1wsoPEH3+A/thLH2SiW2j9bQ2NRvgDTP4xzC34aOsY/cyCwKKhcqD8MyeikuUm0v0/eq9oaN8q/PSGBd67u1L+LyZhelmvcv8/m3JG2ueG/hlh3f5705L9dUsfUNNnnv10cd/2OW+q/wfLvCVdx7L8bLVJC9hHuv0PyRoe4Nu+/XjTx7ufa778HB0As4PvvvwQ9tXAZme+/V1DNmyq07r/ZTwivwlDtv4lZi6GZdOu/JeDa0Vgn6b/aPrV2e3Lmv8y0DJEnYeO/+f//////3783i/Tn4LnYv4yAwi7oDdG/3kQPZF83wr9U+ijPKj+QvxHsuGvkX7w/k1rgSlktzj+GU4hOOdfWP1m1P3WwOd4/AasNgtOP4j+XUJVeWbblPzdQz6Jvg+g/uvBkh4zr6j99NRQyxuTsP/FJcov7Zu4/Juk3u/Vr7z+VSynBge/vP5RLKcGB7+8/Jek3u/Vr7z/vSXKL+2buP381FDLG5Ow/uPBkh4zr6j86UM+ib4PoP5RQlV5ZtuU/BasNgtOP4j9TtT91sDneP45TiE4519Y/hVrgSlktzj807Lhr5F+8P8f6KM8qP5C/zUQPZF83wr+TgMIu6A3Rvy+L9Ofgudi/BwAAAAAA4L/PtAyRJ2Hjv9k+tXZ7cua/I+Da0Vgn6b+NWYuhmXTrv9pPCK/CUO2/V1DNmyq07r8DPbVwGZnvvwgHQCzg+++/XjTx7ufa779E8kaHuDbvvx4tUkL2Ee6/wPLvCVdx7L9dHHf9jlvqv2BSx9Q02ee/gVh3f5705L/M5tyRtrnhv4zJmF6Wa9y/RSGBd67u1L8x3qvaGjfKv/DI6KS5SbS/bSCwKKhcqD9zcwt+GjrGP2ZDY1G+ANM/uRLH2SiW2j9aLKDxB9/gPzsTccl8LeQ/uDkVSdQo5z9WMpEhxsTpP16hBPiS9us/X7HeqjC17T8kfxaOb/nuP2j6BgUYvu8/AAAAAAAA8D8=","dtype":"float64","shape":[100]}},"selected":{"id":"caf0b22d-068b-4c53-9f01-14877c9fb465","type":"Selection"},"selection_policy":{"id":"bd728a48-495b-4438-8186-ab8a2a927735","type":"UnionRenderers"}},"id":"c8033bd4-a7c5-4603-8c3d-21db1a451200","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ce65bd8-4f01-46aa-a514-822b3268429b","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"3ce65bd8-4f01-46aa-a514-822b3268429b","type":"BoxAnnotation"}},"id":"44886ab7-6fbd-4712-8fb0-e6df4b6667a3","type":"BoxZoomTool"},{"attributes":{},"id":"a75655ca-5186-4355-b62d-91cf26ccc9bf","type":"LinearScale"},{"attributes":{},"id":"1bc5cbeb-31c7-4c52-9260-51a70fb0cadc","type":"SaveTool"},{"attributes":{},"id":"a97f3d1a-20ab-4b4d-819f-ef9c79377fe3","type":"HelpTool"},{"attributes":{"formatter":{"id":"3043387e-059b-491d-823e-50c8eaa54a83","type":"BasicTickFormatter"},"plot":{"id":"e220529c-5d8b-4e5b-bd82-583163d9bc2c","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd45ed22-31a4-4bb9-8a43-a6a787fc5c30","type":"BasicTicker"}},"id":"512ed678-1b35-4545-9ead-97d6c9442b23","type":"LinearAxis"},{"attributes":{},"id":"7315cfd3-668b-405a-b41f-9b9c758e9d54","type":"ResetTool"},{"attributes":{"below":[{"id":"e9b80fd2-2933-4a2a-9099-ca13397cfb95","type":"LinearAxis"}],"left":[{"id":"512ed678-1b35-4545-9ead-97d6c9442b23","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e9b80fd2-2933-4a2a-9099-ca13397cfb95","type":"LinearAxis"},{"id":"21a4a279-2d7f-4bc5-a711-5951615026f4","type":"Grid"},{"id":"512ed678-1b35-4545-9ead-97d6c9442b23","type":"LinearAxis"},{"id":"19095525-8189-4eec-baf5-4cfa6f46f61b","type":"Grid"},{"id":"00a99236-c851-48c4-aec7-1b822180e2d4","type":"BoxAnnotation"},{"id":"2884b0e4-6d92-46d5-8b71-1e7fd2cb0695","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6b6d07df-048f-4dcb-859c-b8a9d0a37ece","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4318f337-fb06-46a5-916a-619290032fcf","type":"DataRange1d"},"x_scale":{"id":"a75655ca-5186-4355-b62d-91cf26ccc9bf","type":"LinearScale"},"y_range":{"id":"ce39a278-878c-4b8d-983b-38c19651e26d","type":"DataRange1d"},"y_scale":{"id":"665640e9-0fcc-4064-b3d6-c1d1fce614cf","type":"LinearScale"}},"id":"e220529c-5d8b-4e5b-bd82-583163d9bc2c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48b2fad2-ffc6-417a-9923-1524d1b896f1","type":"BasicTicker"},{"attributes":{"plot":{"id":"e220529c-5d8b-4e5b-bd82-583163d9bc2c","subtype":"Figure","type":"Plot"},"ticker":{"id":"48b2fad2-ffc6-417a-9923-1524d1b896f1","type":"BasicTicker"}},"id":"21a4a279-2d7f-4bc5-a711-5951615026f4","type":"Grid"}],"root_ids":["839254da-35b5-47a2-8bd9-6e9ef44c517f"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"d2eb5632-b8cf-47dc-959d-7e7f0adf9e53","elementid":"071ef903-6396-423d-bded-db8e42ef3026","modelid":"839254da-35b5-47a2-8bd9-6e9ef44c517f"}];
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