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
      };var element = document.getElementById("1ffcf359-46b2-40ff-b1a8-bbe8a2224b6b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ffcf359-46b2-40ff-b1a8-bbe8a2224b6b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"60d599a3-d593-4c0a-92ca-acca6227c281":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto"},"id":"2ab9c27f-c0ce-4984-ae51-28c7345d6cbb","type":"HoverTool"},{"attributes":{"source":{"id":"2f8edbaf-3f94-4ea9-8708-0c986fd43adb","type":"ColumnDataSource"}},"id":"66206003-0f52-4478-b5de-9d877ca1b6f5","type":"CDSView"},{"attributes":{},"id":"21e02195-0a72-4966-aba3-639ce6353158","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"97687ac9-2355-4c15-b7dc-5f5c3843e5f1","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8a62c4b8-f5b8-4a03-b905-0731c4cb9866","type":"BoxAnnotation"},{"attributes":{},"id":"ce47e424-87a8-4f95-9984-a71fa2971af8","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"69b5b659-e0c4-43d4-a422-0a0f8399a269","type":"BoxSelectTool"},{"id":"2ab9c27f-c0ce-4984-ae51-28c7345d6cbb","type":"HoverTool"},{"id":"ef76c55d-525f-46d3-b46e-20b48efd963f","type":"ResetTool"},{"id":"10e3f40e-fcc0-4b07-8202-766be8edd649","type":"BoxSelectTool"},{"id":"8cece242-a749-4176-b4ce-98b595faa388","type":"HoverTool"},{"id":"481651fa-45ce-4d3a-b9b5-b20507617689","type":"ResetTool"}]},"id":"7e337fcb-80a2-4faa-aa18-a5c626147aca","type":"ProxyToolbar"},{"attributes":{"callback":null,"overlay":{"id":"8a62c4b8-f5b8-4a03-b905-0731c4cb9866","type":"BoxAnnotation"}},"id":"69b5b659-e0c4-43d4-a422-0a0f8399a269","type":"BoxSelectTool"},{"attributes":{"plot":null,"text":""},"id":"012df561-f509-4033-ba91-178096fe5b47","type":"Title"},{"attributes":{},"id":"37c7e1b6-9bcd-4761-9abe-bd6f09c5b623","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"850af184-4a9b-4dc4-958e-07c0dee9cecd","type":"BasicTickFormatter"},"plot":{"id":"f0ad1a0d-bed8-4ae7-b01f-dcd87e43e128","subtype":"Figure","type":"Plot"},"ticker":{"id":"d089a61f-2c12-4cf5-883f-cd866696fa14","type":"BasicTicker"}},"id":"4654f6b9-516e-40a3-8325-2c09877be827","type":"LinearAxis"},{"attributes":{"below":[{"id":"f73d1175-939b-4147-89ac-bd4478a86804","type":"LinearAxis"}],"left":[{"id":"4654f6b9-516e-40a3-8325-2c09877be827","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f73d1175-939b-4147-89ac-bd4478a86804","type":"LinearAxis"},{"id":"44c59988-1c82-48e6-81f7-b64d990393ce","type":"Grid"},{"id":"4654f6b9-516e-40a3-8325-2c09877be827","type":"LinearAxis"},{"id":"87923b6c-e6af-4bcd-a744-8ec8e1b02dc9","type":"Grid"},{"id":"8a62c4b8-f5b8-4a03-b905-0731c4cb9866","type":"BoxAnnotation"},{"id":"a9a49db4-2147-4937-9304-165addacd987","type":"GlyphRenderer"}],"title":{"id":"7008fc25-873e-40ff-a549-4ddc73da7e48","type":"Title"},"toolbar":{"id":"e8beeb11-261d-496e-9ea6-51c89e08c0d0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"18c68408-5b55-47ff-a53e-04e7ba83f944","type":"DataRange1d"},"x_scale":{"id":"2561c655-28b3-4b2a-93d3-6e508d1dfc2b","type":"LinearScale"},"y_range":{"id":"5b75af91-54d8-4f16-93d8-c3bbb72ce6b6","type":"DataRange1d"},"y_scale":{"id":"48e81f3b-ba2b-49ce-aabe-64f6e3d55fc7","type":"LinearScale"}},"id":"f0ad1a0d-bed8-4ae7-b01f-dcd87e43e128","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"44e0f157-e043-4724-b350-41d6d2941c5b","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cc9e79ec-89ad-4df7-b843-e172d170d4c5","type":"Circle"},{"attributes":{"data_source":{"id":"2f8edbaf-3f94-4ea9-8708-0c986fd43adb","type":"ColumnDataSource"},"glyph":{"id":"d114655c-58dc-4a9c-9815-64422dbdddcb","type":"Circle"},"hover_glyph":{"id":"97687ac9-2355-4c15-b7dc-5f5c3843e5f1","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"628438a0-dac7-4d76-be93-21b37432ecb4","type":"Circle"},"selection_glyph":null,"view":{"id":"66206003-0f52-4478-b5de-9d877ca1b6f5","type":"CDSView"}},"id":"a9a49db4-2147-4937-9304-165addacd987","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"5b33580e-caa5-450e-9226-df2065748685","subtype":"Figure","type":"Plot"},"ticker":{"id":"74842a23-b71a-4272-9dd6-eb5f15741c12","type":"BasicTicker"}},"id":"17f974a5-47ba-4aaa-b853-05ab7441d452","type":"Grid"},{"attributes":{"plot":{"id":"5b33580e-caa5-450e-9226-df2065748685","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4668c60-28af-4a0f-8b35-0c86b31182a1","type":"BasicTicker"}},"id":"8f3f06df-388d-4808-9a1e-ad2a2d839580","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"69b5b659-e0c4-43d4-a422-0a0f8399a269","type":"BoxSelectTool"},{"id":"2ab9c27f-c0ce-4984-ae51-28c7345d6cbb","type":"HoverTool"},{"id":"ef76c55d-525f-46d3-b46e-20b48efd963f","type":"ResetTool"}]},"id":"e8beeb11-261d-496e-9ea6-51c89e08c0d0","type":"Toolbar"},{"attributes":{},"id":"345fd57e-be7f-4197-9a9b-e2c392fbbb4b","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"f0ad1a0d-bed8-4ae7-b01f-dcd87e43e128","subtype":"Figure","type":"Plot"},"ticker":{"id":"d089a61f-2c12-4cf5-883f-cd866696fa14","type":"BasicTicker"}},"id":"87923b6c-e6af-4bcd-a744-8ec8e1b02dc9","type":"Grid"},{"attributes":{},"id":"ef76c55d-525f-46d3-b46e-20b48efd963f","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"7008fc25-873e-40ff-a549-4ddc73da7e48","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d114655c-58dc-4a9c-9815-64422dbdddcb","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"628438a0-dac7-4d76-be93-21b37432ecb4","type":"Circle"},{"attributes":{},"id":"c4668c60-28af-4a0f-8b35-0c86b31182a1","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d73318af-0442-4bc7-b5eb-73721582aa55","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"443e83ee-9512-4335-b3ed-e7e03baef851","type":"BoxAnnotation"}},"id":"10e3f40e-fcc0-4b07-8202-766be8edd649","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"7a8d29a3-a6a8-4642-a2da-bb4b21a8814d","type":"LinearAxis"}],"left":[{"id":"d762a41c-e3e4-4b8f-ad86-6f4b224bd692","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7a8d29a3-a6a8-4642-a2da-bb4b21a8814d","type":"LinearAxis"},{"id":"8f3f06df-388d-4808-9a1e-ad2a2d839580","type":"Grid"},{"id":"d762a41c-e3e4-4b8f-ad86-6f4b224bd692","type":"LinearAxis"},{"id":"17f974a5-47ba-4aaa-b853-05ab7441d452","type":"Grid"},{"id":"443e83ee-9512-4335-b3ed-e7e03baef851","type":"BoxAnnotation"},{"id":"a4f2ea3b-01d5-4fee-bba3-5ca08b93b870","type":"GlyphRenderer"}],"title":{"id":"012df561-f509-4033-ba91-178096fe5b47","type":"Title"},"toolbar":{"id":"fa8b5b4d-d65c-4fda-a03c-5e09696e8eeb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"18c68408-5b55-47ff-a53e-04e7ba83f944","type":"DataRange1d"},"x_scale":{"id":"7d5aee5e-94ca-4b46-96f5-11993f53ba9c","type":"LinearScale"},"y_range":{"id":"5b75af91-54d8-4f16-93d8-c3bbb72ce6b6","type":"DataRange1d"},"y_scale":{"id":"21e02195-0a72-4966-aba3-639ce6353158","type":"LinearScale"}},"id":"5b33580e-caa5-450e-9226-df2065748685","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"850af184-4a9b-4dc4-958e-07c0dee9cecd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ce47e424-87a8-4f95-9984-a71fa2971af8","type":"BasicTickFormatter"},"plot":{"id":"f0ad1a0d-bed8-4ae7-b01f-dcd87e43e128","subtype":"Figure","type":"Plot"},"ticker":{"id":"590d8bdd-91e9-4629-9097-1ee2be2ac2e7","type":"BasicTicker"}},"id":"f73d1175-939b-4147-89ac-bd4478a86804","type":"LinearAxis"},{"attributes":{"formatter":{"id":"37c7e1b6-9bcd-4761-9abe-bd6f09c5b623","type":"BasicTickFormatter"},"plot":{"id":"5b33580e-caa5-450e-9226-df2065748685","subtype":"Figure","type":"Plot"},"ticker":{"id":"74842a23-b71a-4272-9dd6-eb5f15741c12","type":"BasicTicker"}},"id":"d762a41c-e3e4-4b8f-ad86-6f4b224bd692","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"dca5e18d-1ea0-4ca8-8c82-001750495f3f","type":"Selection"},"selection_policy":{"id":"44e0f157-e043-4724-b350-41d6d2941c5b","type":"UnionRenderers"}},"id":"2f8edbaf-3f94-4ea9-8708-0c986fd43adb","type":"ColumnDataSource"},{"attributes":{},"id":"d089a61f-2c12-4cf5-883f-cd866696fa14","type":"BasicTicker"},{"attributes":{"filters":[{"id":"0c46a176-0694-4d38-b4d4-c3957c3bb5cc","type":"BooleanFilter"}],"source":{"id":"2f8edbaf-3f94-4ea9-8708-0c986fd43adb","type":"ColumnDataSource"}},"id":"247d1583-2bb2-44c5-bc85-28ce8d1ec420","type":"CDSView"},{"attributes":{},"id":"7d5aee5e-94ca-4b46-96f5-11993f53ba9c","type":"LinearScale"},{"attributes":{"callback":null},"id":"18c68408-5b55-47ff-a53e-04e7ba83f944","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"10e3f40e-fcc0-4b07-8202-766be8edd649","type":"BoxSelectTool"},{"id":"8cece242-a749-4176-b4ce-98b595faa388","type":"HoverTool"},{"id":"481651fa-45ce-4d3a-b9b5-b20507617689","type":"ResetTool"}]},"id":"fa8b5b4d-d65c-4fda-a03c-5e09696e8eeb","type":"Toolbar"},{"attributes":{"data_source":{"id":"2f8edbaf-3f94-4ea9-8708-0c986fd43adb","type":"ColumnDataSource"},"glyph":{"id":"cc9e79ec-89ad-4df7-b843-e172d170d4c5","type":"Circle"},"hover_glyph":{"id":"e1bfef82-05f8-4803-83c3-faf18380b909","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"d73318af-0442-4bc7-b5eb-73721582aa55","type":"Circle"},"selection_glyph":null,"view":{"id":"247d1583-2bb2-44c5-bc85-28ce8d1ec420","type":"CDSView"}},"id":"a4f2ea3b-01d5-4fee-bba3-5ca08b93b870","type":"GlyphRenderer"},{"attributes":{},"id":"dca5e18d-1ea0-4ca8-8c82-001750495f3f","type":"Selection"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1bfef82-05f8-4803-83c3-faf18380b909","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"443e83ee-9512-4335-b3ed-e7e03baef851","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"cdbde6cf-b5fa-449d-a10c-53fda328a355","type":"ToolbarBox"},{"id":"4b9f736b-0ccc-4167-b27c-4d0e060c79a2","type":"Column"}]},"id":"b3f4c7ab-6497-4a79-99f6-c7882b18d34d","type":"Column"},{"attributes":{"callback":null},"id":"5b75af91-54d8-4f16-93d8-c3bbb72ce6b6","type":"DataRange1d"},{"attributes":{},"id":"481651fa-45ce-4d3a-b9b5-b20507617689","type":"ResetTool"},{"attributes":{},"id":"74842a23-b71a-4272-9dd6-eb5f15741c12","type":"BasicTicker"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"0c46a176-0694-4d38-b4d4-c3957c3bb5cc","type":"BooleanFilter"},{"attributes":{"toolbar":{"id":"7e337fcb-80a2-4faa-aa18-a5c626147aca","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"cdbde6cf-b5fa-449d-a10c-53fda328a355","type":"ToolbarBox"},{"attributes":{"children":[{"id":"f0ad1a0d-bed8-4ae7-b01f-dcd87e43e128","subtype":"Figure","type":"Plot"},{"id":"5b33580e-caa5-450e-9226-df2065748685","subtype":"Figure","type":"Plot"}]},"id":"a114f5e5-3921-4ec0-950f-11fbf5779d1c","type":"Row"},{"attributes":{"children":[{"id":"a114f5e5-3921-4ec0-950f-11fbf5779d1c","type":"Row"}]},"id":"4b9f736b-0ccc-4167-b27c-4d0e060c79a2","type":"Column"},{"attributes":{},"id":"2561c655-28b3-4b2a-93d3-6e508d1dfc2b","type":"LinearScale"},{"attributes":{},"id":"48e81f3b-ba2b-49ce-aabe-64f6e3d55fc7","type":"LinearScale"},{"attributes":{},"id":"590d8bdd-91e9-4629-9097-1ee2be2ac2e7","type":"BasicTicker"},{"attributes":{"plot":{"id":"f0ad1a0d-bed8-4ae7-b01f-dcd87e43e128","subtype":"Figure","type":"Plot"},"ticker":{"id":"590d8bdd-91e9-4629-9097-1ee2be2ac2e7","type":"BasicTicker"}},"id":"44c59988-1c82-48e6-81f7-b64d990393ce","type":"Grid"},{"attributes":{"callback":null,"renderers":"auto"},"id":"8cece242-a749-4176-b4ce-98b595faa388","type":"HoverTool"},{"attributes":{"formatter":{"id":"345fd57e-be7f-4197-9a9b-e2c392fbbb4b","type":"BasicTickFormatter"},"plot":{"id":"5b33580e-caa5-450e-9226-df2065748685","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4668c60-28af-4a0f-8b35-0c86b31182a1","type":"BasicTicker"}},"id":"7a8d29a3-a6a8-4642-a2da-bb4b21a8814d","type":"LinearAxis"}],"root_ids":["b3f4c7ab-6497-4a79-99f6-c7882b18d34d"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"60d599a3-d593-4c0a-92ca-acca6227c281","elementid":"1ffcf359-46b2-40ff-b1a8-bbe8a2224b6b","modelid":"b3f4c7ab-6497-4a79-99f6-c7882b18d34d"}];
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