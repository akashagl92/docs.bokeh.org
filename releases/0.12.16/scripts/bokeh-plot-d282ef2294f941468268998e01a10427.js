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
      };var element = document.getElementById("0c0afe29-64f8-4a09-ade6-cb9730226794");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0c0afe29-64f8-4a09-ade6-cb9730226794' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bc9fef0a-060a-4ad5-bc56-06af7f77cc76":{"roots":{"references":[{"attributes":{"callback":null,"end":19},"id":"f18d8eea-724d-4b58-8335-710e76c8cec5","type":"Range1d"},{"attributes":{"source":{"id":"faf26310-6449-40d6-b675-98e40e34b41e","type":"ColumnDataSource"}},"id":"b48f43af-51c0-4a9f-a273-9888576f89c9","type":"CDSView"},{"attributes":{},"id":"79101dee-87ad-4b09-a098-66c5207fac57","type":"BasicTickFormatter"},{"attributes":{},"id":"0f0cedcf-a3e1-4be6-b503-d08b098c8ada","type":"HelpTool"},{"attributes":{},"id":"3590986e-07d9-414d-a251-f8e71af4de1e","type":"ResetTool"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"afc3c2bb-f641-4909-b5b2-2533e72c195a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab654b04-d718-47b6-a48b-bad913364838","type":"BasicTicker"}},"id":"5babac10-da18-4f1d-a4d2-9cbd99c3a5c9","type":"Grid"},{"attributes":{"callback":null,"end":800},"id":"7482620d-655d-4073-82e4-3f263e555436","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"81c19604-4ce2-47a1-82db-c27d147787c4","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFRAAAAAAACAQEAAAAAAAMBWQAAAAAAAQFBAAAAAAAAAVUAAAAAAAIBEQAAAAAAAQFRAAAAAAAAAOUAAAAAAAAAxQAAAAAAAgFRAAAAAAADAUUAAAAAAAAAuQAAAAAAAAElAAAAAAACAUUAAAAAAAAA/QAAAAAAAADhAAAAAAACAT0AAAAAAAMBTQAAAAAAAADlAAAAAAACASUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACASUAAAAAAAAA5QAAAAAAAwFNAAAAAAACAT0AAAAAAAAA4QAAAAAAAAD9AAAAAAACAUUAAAAAAAABJQAAAAAAAAC5AAAAAAADAUUAAAAAAAIBUQAAAAAAAADFAAAAAAAAAOUAAAAAAAEBUQAAAAAAAgERAAAAAAAAAVUAAAAAAAEBQQAAAAAAAwFZAAAAAAACAQEAAAAAAAMBUQAAAAAAAAGNAAAAAAAAAVUAAAAAAAIBnQAAAAAAA4GNAAAAAAAAAXUAAAAAAAMBQQAAAAAAAAGBAAAAAAAAAUEAAAAAAAABaQAAAAAAAAGBAAAAAAABAYkAAAAAAAEBXQAAAAAAAwGBAAAAAAACAVkAAAAAAAMBXQAAAAAAAAFpAAAAAAAAAYkAAAAAAAEBWQAAAAAAAgFRAAAAAAABAYUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAYUAAAAAAAIBUQAAAAAAAQFZAAAAAAAAAYkAAAAAAAABaQAAAAAAAwFdAAAAAAACAVkAAAAAAAMBgQAAAAAAAQFdAAAAAAABAYkAAAAAAAABgQAAAAAAAAFpAAAAAAAAAUEAAAAAAAABgQAAAAAAAwFBAAAAAAAAAXUAAAAAAAOBjQAAAAAAAgGdAAAAAAAAAVUAAAAAAAABjQAAAAAAA4G1AAAAAAACAZUAAAAAAAIBrQAAAAAAAYGZAAAAAAAAAaEAAAAAAAIBYQAAAAAAAwGpAAAAAAABAY0AAAAAAAOBgQAAAAAAAgGVAAAAAAAAAa0AAAAAAAGBgQAAAAAAAIG1AAAAAAABgYEAAAAAAAGBkQAAAAAAAYGlAAAAAAADAY0AAAAAAAGBjQAAAAAAAYGFAAAAAAADAY0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAY0AAAAAAAGBhQAAAAAAAYGNAAAAAAADAY0AAAAAAAGBpQAAAAAAAYGRAAAAAAABgYEAAAAAAACBtQAAAAAAAYGBAAAAAAAAAa0AAAAAAAIBlQAAAAAAA4GBAAAAAAABAY0AAAAAAAMBqQAAAAAAAgFhAAAAAAAAAaEAAAAAAAGBmQAAAAAAAgGtAAAAAAACAZUAAAAAAAOBtQAAAAAAA8HNAAAAAAAAAbUAAAAAAAIBxQAAAAAAAYGpAAAAAAACAa0AAAAAAAABiQAAAAAAA4HJAAAAAAABgakAAAAAAAMBkQAAAAAAAYHBAAAAAAACAbEAAAAAAAMBpQAAAAAAAgHBAAAAAAADgY0AAAAAAAOBqQAAAAAAAIG9AAAAAAAAQcEAAAAAAAGBpQAAAAAAAQGVAAAAAAAAAaUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAaUAAAAAAAEBlQAAAAAAAYGlAAAAAAAAQcEAAAAAAACBvQAAAAAAA4GpAAAAAAADgY0AAAAAAAIBwQAAAAAAAwGlAAAAAAACAbEAAAAAAAGBwQAAAAAAAwGRAAAAAAABgakAAAAAAAOByQAAAAAAAAGJAAAAAAACAa0AAAAAAAGBqQAAAAAAAgHFAAAAAAAAAbUAAAAAAAPBzQAAAAAAAAHpAAAAAAABgcEAAAAAAAGB1QAAAAAAAgHBAAAAAAADgbUAAAAAAAIBjQAAAAAAAYHRAAAAAAABgbkAAAAAAACBqQAAAAAAA4HFAAAAAAADgbkAAAAAAAGBsQAAAAAAA4HFAAAAAAABgbUAAAAAAAJBxQAAAAAAA4HNAAAAAAABgdUAAAAAAACBvQAAAAAAAYG9AAAAAAAAAckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAckAAAAAAAGBvQAAAAAAAIG9AAAAAAABgdUAAAAAAAOBzQAAAAAAAkHFAAAAAAABgbUAAAAAAAOBxQAAAAAAAYGxAAAAAAADgbkAAAAAAAOBxQAAAAAAAIGpAAAAAAABgbkAAAAAAAGB0QAAAAAAAgGNAAAAAAADgbUAAAAAAAIBwQAAAAAAAYHVAAAAAAABgcEAAAAAAAAB6QAAAAAAA8H1AAAAAAABwc0AAAAAAAFB7QAAAAAAA0HRAAAAAAAAAdUAAAAAAACBtQAAAAAAAUHhAAAAAAADgc0AAAAAAANByQAAAAAAAoHZAAAAAAACgckAAAAAAAEBuQAAAAAAAwHZAAAAAAACQdEAAAAAAAEByQAAAAAAAkHRAAAAAAABAdkAAAAAAANBzQAAAAAAA0HVAAAAAAAAAdkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAdkAAAAAAANB1QAAAAAAA0HNAAAAAAABAdkAAAAAAAJB0QAAAAAAAQHJAAAAAAACQdEAAAAAAAMB2QAAAAAAAQG5AAAAAAACgckAAAAAAAKB2QAAAAAAA0HJAAAAAAADgc0AAAAAAAFB4QAAAAAAAIG1AAAAAAAAAdUAAAAAAANB0QAAAAAAAUHtAAAAAAABwc0AAAAAAAPB9QAAAAAAA0IFAAAAAAABwdEAAAAAAADB8QAAAAAAAUHlAAAAAAACQeUAAAAAAACBzQAAAAAAAAH1AAAAAAADQeEAAAAAAABB1QAAAAAAAgHhAAAAAAABQd0AAAAAAAIBwQAAAAAAAYHpAAAAAAACAeEAAAAAAAPB2QAAAAAAAwHpAAAAAAAAgd0AAAAAAAFB1QAAAAAAAoHhAAAAAAADQdkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADQdkAAAAAAAKB4QAAAAAAAUHVAAAAAAAAgd0AAAAAAAMB6QAAAAAAA8HZAAAAAAACAeEAAAAAAAGB6QAAAAAAAgHBAAAAAAABQd0AAAAAAAIB4QAAAAAAAEHVAAAAAAADQeEAAAAAAAAB9QAAAAAAAIHNAAAAAAACQeUAAAAAAAFB5QAAAAAAAMHxAAAAAAABwdEAAAAAAANCBQAAAAAAAkIJAAAAAAABAeEAAAAAAACB9QAAAAAAAMH5AAAAAAAAgfEAAAAAAALB0QAAAAAAASIBAAAAAAABAe0AAAAAAAPB1QAAAAAAA4HtAAAAAAADQe0AAAAAAAPB0QAAAAAAAEH1AAAAAAAAweUAAAAAAAFB4QAAAAAAAsHxAAAAAAAAwfUAAAAAAADB7QAAAAAAAQHtAAAAAAABwe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABwe0AAAAAAAEB7QAAAAAAAMHtAAAAAAAAwfUAAAAAAALB8QAAAAAAAUHhAAAAAAAAweUAAAAAAABB9QAAAAAAA8HRAAAAAAADQe0AAAAAAAOB7QAAAAAAA8HVAAAAAAABAe0AAAAAAAEiAQAAAAAAAsHRAAAAAAAAgfEAAAAAAADB+QAAAAAAAIH1AAAAAAABAeEAAAAAAAJCCQAAAAAAAsIRAAAAAAACQekAAAAAAANiAQAAAAAAAiIBAAAAAAAAYgEAAAAAAANB1QAAAAAAAGINAAAAAAADgfUAAAAAAADB5QAAAAAAA+IBAAAAAAABAgEAAAAAAAJB4QAAAAAAAiIBAAAAAAAAAfkAAAAAAAHB9QAAAAAAA8H1AAAAAAAAYgUAAAAAAAJB/QAAAAAAA0H5AAAAAAAAgfkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgfkAAAAAAANB+QAAAAAAAkH9AAAAAAAAYgUAAAAAAAPB9QAAAAAAAcH1AAAAAAAAAfkAAAAAAAIiAQAAAAAAAkHhAAAAAAABAgEAAAAAAAPiAQAAAAAAAMHlAAAAAAADgfUAAAAAAABiDQAAAAAAA0HVAAAAAAAAYgEAAAAAAAIiAQAAAAAAA2IBAAAAAAACQekAAAAAAALCEQAAAAAAAyIdAAAAAAAAQfkAAAAAAALiCQAAAAAAAKINAAAAAAABogEAAAAAAAKB6QAAAAAAAAIRAAAAAAAAQf0AAAAAAANB+QAAAAAAAmINAAAAAAACIgkAAAAAAABB9QAAAAAAAwIJAAAAAAACAf0AAAAAAABCBQAAAAAAAcIFAAAAAAABQgkAAAAAAAKiAQAAAAAAA6IFAAAAAAADggUA=","dtype":"float64","shape":[40]}]},"selected":{"id":"7f5ed53a-e143-4213-aec9-f918be18a7fa","type":"Selection"},"selection_policy":{"id":"569972b2-e2d6-47ff-a754-de357641d0aa","type":"UnionRenderers"}},"id":"faf26310-6449-40d6-b675-98e40e34b41e","type":"ColumnDataSource"},{"attributes":{},"id":"1becfdf5-89f5-4799-9768-4228dfe770ed","type":"LinearScale"},{"attributes":{},"id":"b9622e60-081a-4825-ae43-36ba8369d405","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"6621a48f-aca6-4416-98fa-b4f2e8082572","type":"Patches"},{"attributes":{},"id":"fefbb864-4b10-48cd-93dc-af09a677e290","type":"LinearScale"},{"attributes":{},"id":"50b1a3a4-12b9-4806-b82c-e3a5b2a286b7","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"5aec0d59-8917-4efd-b696-444b94f439a9","type":"LinearAxis"}],"left":[{"id":"136cb43b-8ff7-4852-95c8-a89fb8cc39f1","type":"LinearAxis"}],"renderers":[{"id":"5aec0d59-8917-4efd-b696-444b94f439a9","type":"LinearAxis"},{"id":"5babac10-da18-4f1d-a4d2-9cbd99c3a5c9","type":"Grid"},{"id":"136cb43b-8ff7-4852-95c8-a89fb8cc39f1","type":"LinearAxis"},{"id":"cf23dabb-8a8c-4ac5-ae80-7c36817f0235","type":"Grid"},{"id":"81c19604-4ce2-47a1-82db-c27d147787c4","type":"BoxAnnotation"},{"id":"f443264b-2c16-4b95-9e75-8247b58670d9","type":"GlyphRenderer"}],"title":{"id":"7cf56d2f-7ed0-42e2-901a-95102eb963cf","type":"Title"},"toolbar":{"id":"5dae0d4f-d279-4f1e-b542-9e041cb52298","type":"Toolbar"},"x_range":{"id":"f18d8eea-724d-4b58-8335-710e76c8cec5","type":"Range1d"},"x_scale":{"id":"1becfdf5-89f5-4799-9768-4228dfe770ed","type":"LinearScale"},"y_range":{"id":"7482620d-655d-4073-82e4-3f263e555436","type":"Range1d"},"y_scale":{"id":"fefbb864-4b10-48cd-93dc-af09a677e290","type":"LinearScale"}},"id":"afc3c2bb-f641-4909-b5b2-2533e72c195a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"569972b2-e2d6-47ff-a754-de357641d0aa","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b6178c52-5043-4a2c-8a89-9fe5016bf0ca","type":"PanTool"},{"id":"6b54b598-85f0-4a9a-ba50-b3a84f54ba06","type":"WheelZoomTool"},{"id":"fb60d9a4-d786-4f6e-a1b8-34a45d8ce030","type":"BoxZoomTool"},{"id":"b9622e60-081a-4825-ae43-36ba8369d405","type":"SaveTool"},{"id":"3590986e-07d9-414d-a251-f8e71af4de1e","type":"ResetTool"},{"id":"0f0cedcf-a3e1-4be6-b503-d08b098c8ada","type":"HelpTool"}]},"id":"5dae0d4f-d279-4f1e-b542-9e041cb52298","type":"Toolbar"},{"attributes":{},"id":"6b54b598-85f0-4a9a-ba50-b3a84f54ba06","type":"WheelZoomTool"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"afc3c2bb-f641-4909-b5b2-2533e72c195a","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb611d0d-35f7-475b-ab05-60517001c7c7","type":"BasicTicker"}},"id":"cf23dabb-8a8c-4ac5-ae80-7c36817f0235","type":"Grid"},{"attributes":{},"id":"7f5ed53a-e143-4213-aec9-f918be18a7fa","type":"Selection"},{"attributes":{"data_source":{"id":"faf26310-6449-40d6-b675-98e40e34b41e","type":"ColumnDataSource"},"glyph":{"id":"6621a48f-aca6-4416-98fa-b4f2e8082572","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dae612ce-0b76-4586-80ef-b0c6a27f305c","type":"Patches"},"selection_glyph":null,"view":{"id":"b48f43af-51c0-4a9f-a273-9888576f89c9","type":"CDSView"}},"id":"f443264b-2c16-4b95-9e75-8247b58670d9","type":"GlyphRenderer"},{"attributes":{},"id":"ab654b04-d718-47b6-a48b-bad913364838","type":"BasicTicker"},{"attributes":{"formatter":{"id":"79101dee-87ad-4b09-a098-66c5207fac57","type":"BasicTickFormatter"},"plot":{"id":"afc3c2bb-f641-4909-b5b2-2533e72c195a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab654b04-d718-47b6-a48b-bad913364838","type":"BasicTicker"}},"id":"5aec0d59-8917-4efd-b696-444b94f439a9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"dae612ce-0b76-4586-80ef-b0c6a27f305c","type":"Patches"},{"attributes":{"plot":null,"text":""},"id":"7cf56d2f-7ed0-42e2-901a-95102eb963cf","type":"Title"},{"attributes":{},"id":"eb611d0d-35f7-475b-ab05-60517001c7c7","type":"BasicTicker"},{"attributes":{"overlay":{"id":"81c19604-4ce2-47a1-82db-c27d147787c4","type":"BoxAnnotation"}},"id":"fb60d9a4-d786-4f6e-a1b8-34a45d8ce030","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"50b1a3a4-12b9-4806-b82c-e3a5b2a286b7","type":"BasicTickFormatter"},"plot":{"id":"afc3c2bb-f641-4909-b5b2-2533e72c195a","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb611d0d-35f7-475b-ab05-60517001c7c7","type":"BasicTicker"}},"id":"136cb43b-8ff7-4852-95c8-a89fb8cc39f1","type":"LinearAxis"},{"attributes":{},"id":"b6178c52-5043-4a2c-8a89-9fe5016bf0ca","type":"PanTool"}],"root_ids":["afc3c2bb-f641-4909-b5b2-2533e72c195a"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"bc9fef0a-060a-4ad5-bc56-06af7f77cc76","elementid":"0c0afe29-64f8-4a09-ade6-cb9730226794","modelid":"afc3c2bb-f641-4909-b5b2-2533e72c195a"}];
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