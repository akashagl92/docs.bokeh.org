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
      };var element = document.getElementById("5bdf660b-3747-4a05-a0c5-d124fc4e9492");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5bdf660b-3747-4a05-a0c5-d124fc4e9492' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"299fb3a3-fccf-450d-b7ea-bcfbbd75e706":{"roots":{"references":[{"attributes":{"source":{"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"}},"id":"8654a815-fd33-4a7a-ba24-e4dc412a2259","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2ef51483-3528-4d75-9696-02186b9fec60","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"d24e2562-d15f-4258-8709-ee638ec7d577","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"1f43c6fa-62b3-4cab-98f2-5e0960f92390","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d24e2562-d15f-4258-8709-ee638ec7d577","type":"LinearAxis"},{"id":"1f43c6fa-62b3-4cab-98f2-5e0960f92390","type":"LinearAxis"},{"id":"470de0de-8995-450b-b70f-b5c766e2e128","type":"Grid"},{"id":"c116df83-0155-4ca2-80a2-80bd660672ca","type":"Grid"},{"id":"d4bd4431-e39b-4fb6-8cf7-ea9a255a3925","type":"GlyphRenderer"},{"id":"04dbe9b2-c284-480c-81ab-fb6287cb06e0","type":"GlyphRenderer"}],"title":{"id":"1d1ac83f-2d73-44b2-a16c-e12ecd50c707","type":"Title"},"toolbar":{"id":"2ef51483-3528-4d75-9696-02186b9fec60","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2dbdcc76-a999-4e2b-abc9-14ac39009abc","type":"Range1d"},"x_scale":{"id":"1a5bf8e6-6ad9-47dd-97a8-bc6597989e27","type":"LinearScale"},"y_range":{"id":"6b9d8cfe-c874-44a4-843b-afc042d6339a","type":"Range1d"},"y_scale":{"id":"3531ab3f-76cf-4f26-8781-96449d52d754","type":"LinearScale"}},"id":"6b170e97-543e-49b8-b3b0-f6862e1a2493","type":"Plot"},{"attributes":{"plot":null,"text":"II"},"id":"1d1ac83f-2d73-44b2-a16c-e12ecd50c707","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"5e1b407c-e873-4d7c-902e-6a257fd701ab","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"c69862c3-a0b2-4052-bdfc-e93d21508e8d","type":"BasicTickFormatter"},"plot":{"id":"6b170e97-543e-49b8-b3b0-f6862e1a2493","type":"Plot"},"ticker":{"id":"e8a0b2cf-d61e-4ee9-a7a5-f600e209ff63","type":"BasicTicker"}},"id":"d24e2562-d15f-4258-8709-ee638ec7d577","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"84a56fc0-470d-4ba2-8a91-7b0761fd6909","type":"BasicTickFormatter"},"plot":{"id":"6b170e97-543e-49b8-b3b0-f6862e1a2493","type":"Plot"},"ticker":{"id":"03c09ada-024a-4942-a79b-4a7735d63144","type":"BasicTicker"}},"id":"1f43c6fa-62b3-4cab-98f2-5e0960f92390","type":"LinearAxis"},{"attributes":{},"id":"e8a0b2cf-d61e-4ee9-a7a5-f600e209ff63","type":"BasicTicker"},{"attributes":{"plot":{"id":"6b170e97-543e-49b8-b3b0-f6862e1a2493","type":"Plot"},"ticker":{"id":"e8a0b2cf-d61e-4ee9-a7a5-f600e209ff63","type":"BasicTicker"}},"id":"470de0de-8995-450b-b70f-b5c766e2e128","type":"Grid"},{"attributes":{},"id":"03c09ada-024a-4942-a79b-4a7735d63144","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6b170e97-543e-49b8-b3b0-f6862e1a2493","type":"Plot"},"ticker":{"id":"03c09ada-024a-4942-a79b-4a7735d63144","type":"BasicTicker"}},"id":"c116df83-0155-4ca2-80a2-80bd660672ca","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"b9c1694b-dd8f-43e2-867c-46be7879a701","type":"Line"},{"attributes":{"data_source":{"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"},"glyph":{"id":"b9c1694b-dd8f-43e2-867c-46be7879a701","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"34b268b5-18e1-4480-b335-718a0cca066d","type":"CDSView"}},"id":"d4bd4431-e39b-4fb6-8cf7-ea9a255a3925","type":"GlyphRenderer"},{"attributes":{"source":{"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"}},"id":"34b268b5-18e1-4480-b335-718a0cca066d","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9455bad5-69ea-49ec-a084-ef5361f012fd","type":"Toolbar"},{"attributes":{"data_source":{"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"},"glyph":{"id":"5e1b407c-e873-4d7c-902e-6a257fd701ab","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"bbf29e31-8026-4f9b-81f6-27e637e73c05","type":"CDSView"}},"id":"04dbe9b2-c284-480c-81ab-fb6287cb06e0","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"}},"id":"bbf29e31-8026-4f9b-81f6-27e637e73c05","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"b168f3ad-c3af-403e-aab6-a3b245b823e8","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"eaa31225-d553-426b-85fb-c4e4421c7888","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b168f3ad-c3af-403e-aab6-a3b245b823e8","type":"LinearAxis"},{"id":"eaa31225-d553-426b-85fb-c4e4421c7888","type":"LinearAxis"},{"id":"588aca08-6d89-4e38-a980-ef81a055776a","type":"Grid"},{"id":"39cbb385-24bf-427c-93af-1d5c1c93cccd","type":"Grid"},{"id":"43bc15eb-55d1-43f6-8195-d24ca0dc7c11","type":"GlyphRenderer"},{"id":"71155d92-a120-4d89-93fd-8815330f4aca","type":"GlyphRenderer"}],"title":{"id":"97849500-39d0-443a-99a5-e390393d981d","type":"Title"},"toolbar":{"id":"9455bad5-69ea-49ec-a084-ef5361f012fd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2dbdcc76-a999-4e2b-abc9-14ac39009abc","type":"Range1d"},"x_scale":{"id":"3db93694-5020-4b25-a6ce-fa205fb71b68","type":"LinearScale"},"y_range":{"id":"6b9d8cfe-c874-44a4-843b-afc042d6339a","type":"Range1d"},"y_scale":{"id":"11165940-bb01-4d9e-be06-fb811033d341","type":"LinearScale"}},"id":"affb9be1-df76-404a-b63e-e7a27f2b1255","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"fab8b039-49db-490d-ae46-4084b9b177f8","type":"BasicTickFormatter"},"plot":{"id":"affb9be1-df76-404a-b63e-e7a27f2b1255","type":"Plot"},"ticker":{"id":"efeb6fc8-dcef-4ab4-af99-7c00595e9493","type":"BasicTicker"}},"id":"b168f3ad-c3af-403e-aab6-a3b245b823e8","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"fc7e3498-4f74-4836-9e28-19c629a3476b","type":"BasicTickFormatter"},"plot":{"id":"affb9be1-df76-404a-b63e-e7a27f2b1255","type":"Plot"},"ticker":{"id":"75ff5162-57e7-45a1-9a7d-3f07ccd59a5c","type":"BasicTicker"}},"id":"eaa31225-d553-426b-85fb-c4e4421c7888","type":"LinearAxis"},{"attributes":{"plot":null,"text":"III"},"id":"97849500-39d0-443a-99a5-e390393d981d","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"00ec28c7-cf75-43d6-abfc-b46ab7b2568b","type":"Circle"},{"attributes":{},"id":"efeb6fc8-dcef-4ab4-af99-7c00595e9493","type":"BasicTicker"},{"attributes":{"plot":{"id":"affb9be1-df76-404a-b63e-e7a27f2b1255","type":"Plot"},"ticker":{"id":"efeb6fc8-dcef-4ab4-af99-7c00595e9493","type":"BasicTicker"}},"id":"588aca08-6d89-4e38-a980-ef81a055776a","type":"Grid"},{"attributes":{},"id":"75ff5162-57e7-45a1-9a7d-3f07ccd59a5c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"affb9be1-df76-404a-b63e-e7a27f2b1255","type":"Plot"},"ticker":{"id":"75ff5162-57e7-45a1-9a7d-3f07ccd59a5c","type":"BasicTicker"}},"id":"39cbb385-24bf-427c-93af-1d5c1c93cccd","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"b228053b-1f63-42d5-83f6-42e1212bcdd8","type":"Line"},{"attributes":{"data_source":{"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"},"glyph":{"id":"b228053b-1f63-42d5-83f6-42e1212bcdd8","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"259bfdc6-c509-4cf6-b885-f4b5c89c1330","type":"CDSView"}},"id":"43bc15eb-55d1-43f6-8195-d24ca0dc7c11","type":"GlyphRenderer"},{"attributes":{"source":{"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"}},"id":"259bfdc6-c509-4cf6-b885-f4b5c89c1330","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"75736aaa-f17f-4c55-a39d-a2793418a0a3","type":"Toolbar"},{"attributes":{"data_source":{"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"},"glyph":{"id":"00ec28c7-cf75-43d6-abfc-b46ab7b2568b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8aa4b656-1256-4f97-a622-d4222252ccbf","type":"CDSView"}},"id":"71155d92-a120-4d89-93fd-8815330f4aca","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"}},"id":"8aa4b656-1256-4f97-a622-d4222252ccbf","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"ddde102b-de3c-4594-a0b7-31d41dae4e70","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"eda4947d-fba6-4628-af87-ca01e1611528","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ddde102b-de3c-4594-a0b7-31d41dae4e70","type":"LinearAxis"},{"id":"eda4947d-fba6-4628-af87-ca01e1611528","type":"LinearAxis"},{"id":"f7836212-4af6-49c7-b24c-504b70dcc1d8","type":"Grid"},{"id":"95b6bdf9-ba82-4913-9701-53fd54aa3100","type":"Grid"},{"id":"d7e97b24-7c5d-4b85-b891-53dd5871f0f7","type":"GlyphRenderer"},{"id":"20e21330-49c7-49fc-b6ce-68ba3e5c7338","type":"GlyphRenderer"}],"title":{"id":"44474dac-4f7c-492e-9292-f9a12461488d","type":"Title"},"toolbar":{"id":"75736aaa-f17f-4c55-a39d-a2793418a0a3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2dbdcc76-a999-4e2b-abc9-14ac39009abc","type":"Range1d"},"x_scale":{"id":"38cf68ff-db70-47be-bfb0-e2ac1724ced3","type":"LinearScale"},"y_range":{"id":"6b9d8cfe-c874-44a4-843b-afc042d6339a","type":"Range1d"},"y_scale":{"id":"fefd76af-fe14-4f44-8b1a-ed59a36d2af6","type":"LinearScale"}},"id":"f0253169-9d16-4f54-9d6d-f23c349daf18","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f7459291-1ba2-45d3-a4eb-a8f7d26a06b5","type":"BasicTickFormatter"},"plot":{"id":"f0253169-9d16-4f54-9d6d-f23c349daf18","type":"Plot"},"ticker":{"id":"e6241c31-8e7e-4ad8-bba2-7753137c7f86","type":"BasicTicker"}},"id":"ddde102b-de3c-4594-a0b7-31d41dae4e70","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f3b73f38-033a-44eb-8f26-bfe3bd7bff34","type":"BasicTickFormatter"},"plot":{"id":"f0253169-9d16-4f54-9d6d-f23c349daf18","type":"Plot"},"ticker":{"id":"f0e29348-b437-4e47-9fb2-a4954502bb5a","type":"BasicTicker"}},"id":"eda4947d-fba6-4628-af87-ca01e1611528","type":"LinearAxis"},{"attributes":{"plot":null,"text":"IV"},"id":"44474dac-4f7c-492e-9292-f9a12461488d","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"2ee1ae3d-8dd8-46cc-bc39-5208474fc0c1","type":"Circle"},{"attributes":{},"id":"e6241c31-8e7e-4ad8-bba2-7753137c7f86","type":"BasicTicker"},{"attributes":{"plot":{"id":"f0253169-9d16-4f54-9d6d-f23c349daf18","type":"Plot"},"ticker":{"id":"e6241c31-8e7e-4ad8-bba2-7753137c7f86","type":"BasicTicker"}},"id":"f7836212-4af6-49c7-b24c-504b70dcc1d8","type":"Grid"},{"attributes":{},"id":"f0e29348-b437-4e47-9fb2-a4954502bb5a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f0253169-9d16-4f54-9d6d-f23c349daf18","type":"Plot"},"ticker":{"id":"f0e29348-b437-4e47-9fb2-a4954502bb5a","type":"BasicTicker"}},"id":"95b6bdf9-ba82-4913-9701-53fd54aa3100","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"8b475230-d40d-48c0-bab4-d76789117bec","type":"Line"},{"attributes":{"data_source":{"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"},"glyph":{"id":"8b475230-d40d-48c0-bab4-d76789117bec","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6f3c4d2b-afa5-4c55-b5a3-a0bf3af7c383","type":"CDSView"}},"id":"d7e97b24-7c5d-4b85-b891-53dd5871f0f7","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}},"selected":{"id":"726c0193-0804-48bf-bbce-92b816c07755","type":"Selection"},"selection_policy":{"id":"30b25d3d-6e8f-447a-9025-bdcff29f678a","type":"UnionRenderers"}},"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"}},"id":"6f3c4d2b-afa5-4c55-b5a3-a0bf3af7c383","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e6e789df-ac2e-457a-a44a-3e4743380dcc","type":"Toolbar"},{"attributes":{"children":[{"id":"5fb8fdf1-2ed2-4d01-8071-73f1b7d5e5a4","type":"Plot"},{"id":"6b170e97-543e-49b8-b3b0-f6862e1a2493","type":"Plot"}]},"id":"00761a41-8889-4329-bd43-fb0963ae4640","type":"Row"},{"attributes":{"data_source":{"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"},"glyph":{"id":"2ee1ae3d-8dd8-46cc-bc39-5208474fc0c1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5f3dcb35-b4bc-41bb-b12e-377f9ea94976","type":"CDSView"}},"id":"20e21330-49c7-49fc-b6ce-68ba3e5c7338","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}},"selected":{"id":"c57e8cc4-95fb-47ba-a1a8-28759a2fd821","type":"Selection"},"selection_policy":{"id":"185d1722-35e1-47a2-9c60-eaa3fc5ba2d8","type":"UnionRenderers"}},"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"2dbdcc76-a999-4e2b-abc9-14ac39009abc","type":"Range1d"},{"attributes":{"source":{"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"}},"id":"5f3dcb35-b4bc-41bb-b12e-377f9ea94976","type":"CDSView"},{"attributes":{"children":[{"id":"00761a41-8889-4329-bd43-fb0963ae4640","type":"Row"},{"id":"8cc3d259-2a60-4742-b2c6-0ff853c85dcd","type":"Row"}]},"id":"18b94cee-e4cd-4a76-bd31-d3f375d48723","type":"Column"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"6b9d8cfe-c874-44a4-843b-afc042d6339a","type":"Range1d"},{"attributes":{},"id":"1601850d-cd4d-421f-9e17-ee287fdfbd22","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"65a15b0d-74e6-40b2-9cbb-41764b73d66c","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"a84e8012-4621-4ff2-a2f4-ccf16741390a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"65a15b0d-74e6-40b2-9cbb-41764b73d66c","type":"LinearAxis"},{"id":"a84e8012-4621-4ff2-a2f4-ccf16741390a","type":"LinearAxis"},{"id":"c5778330-c2e6-4e62-8491-82741841452a","type":"Grid"},{"id":"edd11f12-35f0-4891-970e-4f188c2b81c6","type":"Grid"},{"id":"9e4d0c78-cc0c-4b15-8c30-e44bff9197fb","type":"GlyphRenderer"},{"id":"9c7ee34d-fb4f-42c7-9772-66456b34942b","type":"GlyphRenderer"}],"title":{"id":"0aac9e32-ddfc-4793-afeb-5a66605ccf8a","type":"Title"},"toolbar":{"id":"e6e789df-ac2e-457a-a44a-3e4743380dcc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2dbdcc76-a999-4e2b-abc9-14ac39009abc","type":"Range1d"},"x_scale":{"id":"1601850d-cd4d-421f-9e17-ee287fdfbd22","type":"LinearScale"},"y_range":{"id":"6b9d8cfe-c874-44a4-843b-afc042d6339a","type":"Range1d"},"y_scale":{"id":"ca1bb319-723d-4e4f-b5dc-e3119d5ee228","type":"LinearScale"}},"id":"5fb8fdf1-2ed2-4d01-8071-73f1b7d5e5a4","type":"Plot"},{"attributes":{},"id":"30b25d3d-6e8f-447a-9025-bdcff29f678a","type":"UnionRenderers"},{"attributes":{},"id":"ca1bb319-723d-4e4f-b5dc-e3119d5ee228","type":"LinearScale"},{"attributes":{},"id":"5f11ce5c-9300-49d4-b39f-1f1262e0f773","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"I"},"id":"0aac9e32-ddfc-4793-afeb-5a66605ccf8a","type":"Title"},{"attributes":{},"id":"c57e8cc4-95fb-47ba-a1a8-28759a2fd821","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"aa799252-9153-40bb-bf52-6ca30d4861fe","type":"Circle"},{"attributes":{},"id":"185d1722-35e1-47a2-9c60-eaa3fc5ba2d8","type":"UnionRenderers"},{"attributes":{"children":[{"id":"affb9be1-df76-404a-b63e-e7a27f2b1255","type":"Plot"},{"id":"f0253169-9d16-4f54-9d6d-f23c349daf18","type":"Plot"}]},"id":"8cc3d259-2a60-4742-b2c6-0ff853c85dcd","type":"Row"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5f11ce5c-9300-49d4-b39f-1f1262e0f773","type":"BasicTickFormatter"},"plot":{"id":"5fb8fdf1-2ed2-4d01-8071-73f1b7d5e5a4","type":"Plot"},"ticker":{"id":"33b00af2-80ab-48e1-a5f5-fbf3f8344ad9","type":"BasicTicker"}},"id":"65a15b0d-74e6-40b2-9cbb-41764b73d66c","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"edfba93d-901a-4ebd-82c1-8bf0c4c595d7","type":"BasicTickFormatter"},"plot":{"id":"5fb8fdf1-2ed2-4d01-8071-73f1b7d5e5a4","type":"Plot"},"ticker":{"id":"99f5190a-f7a4-40c3-b2af-c06100a1ef06","type":"BasicTicker"}},"id":"a84e8012-4621-4ff2-a2f4-ccf16741390a","type":"LinearAxis"},{"attributes":{},"id":"edfba93d-901a-4ebd-82c1-8bf0c4c595d7","type":"BasicTickFormatter"},{"attributes":{},"id":"33b00af2-80ab-48e1-a5f5-fbf3f8344ad9","type":"BasicTicker"},{"attributes":{},"id":"726c0193-0804-48bf-bbce-92b816c07755","type":"Selection"},{"attributes":{"plot":{"id":"5fb8fdf1-2ed2-4d01-8071-73f1b7d5e5a4","type":"Plot"},"ticker":{"id":"33b00af2-80ab-48e1-a5f5-fbf3f8344ad9","type":"BasicTicker"}},"id":"c5778330-c2e6-4e62-8491-82741841452a","type":"Grid"},{"attributes":{},"id":"c69862c3-a0b2-4052-bdfc-e93d21508e8d","type":"BasicTickFormatter"},{"attributes":{},"id":"99f5190a-f7a4-40c3-b2af-c06100a1ef06","type":"BasicTicker"},{"attributes":{},"id":"f7459291-1ba2-45d3-a4eb-a8f7d26a06b5","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"5fb8fdf1-2ed2-4d01-8071-73f1b7d5e5a4","type":"Plot"},"ticker":{"id":"99f5190a-f7a4-40c3-b2af-c06100a1ef06","type":"BasicTicker"}},"id":"edd11f12-35f0-4891-970e-4f188c2b81c6","type":"Grid"},{"attributes":{},"id":"3531ab3f-76cf-4f26-8781-96449d52d754","type":"LinearScale"},{"attributes":{},"id":"1a5bf8e6-6ad9-47dd-97a8-bc6597989e27","type":"LinearScale"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"ca19260c-663b-45d9-917f-1bc5df953429","type":"Line"},{"attributes":{"data_source":{"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"},"glyph":{"id":"ca19260c-663b-45d9-917f-1bc5df953429","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b9a1d83c-e81a-4550-93c4-1c4ce5d5db90","type":"CDSView"}},"id":"9e4d0c78-cc0c-4b15-8c30-e44bff9197fb","type":"GlyphRenderer"},{"attributes":{},"id":"11165940-bb01-4d9e-be06-fb811033d341","type":"LinearScale"},{"attributes":{"source":{"id":"29b4ee09-c74c-4d4a-a1e8-307c2867cb4d","type":"ColumnDataSource"}},"id":"b9a1d83c-e81a-4550-93c4-1c4ce5d5db90","type":"CDSView"},{"attributes":{},"id":"f3b73f38-033a-44eb-8f26-bfe3bd7bff34","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c862efcc-8041-4341-964f-a2dd97aee6d2","type":"ColumnDataSource"},"glyph":{"id":"aa799252-9153-40bb-bf52-6ca30d4861fe","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8654a815-fd33-4a7a-ba24-e4dc412a2259","type":"CDSView"}},"id":"9c7ee34d-fb4f-42c7-9772-66456b34942b","type":"GlyphRenderer"},{"attributes":{},"id":"84a56fc0-470d-4ba2-8a91-7b0761fd6909","type":"BasicTickFormatter"},{"attributes":{},"id":"fab8b039-49db-490d-ae46-4084b9b177f8","type":"BasicTickFormatter"},{"attributes":{},"id":"fefd76af-fe14-4f44-8b1a-ed59a36d2af6","type":"LinearScale"},{"attributes":{},"id":"3db93694-5020-4b25-a6ce-fa205fb71b68","type":"LinearScale"},{"attributes":{},"id":"fc7e3498-4f74-4836-9e28-19c629a3476b","type":"BasicTickFormatter"},{"attributes":{},"id":"38cf68ff-db70-47be-bfb0-e2ac1724ced3","type":"LinearScale"}],"root_ids":["18b94cee-e4cd-4a76-bd31-d3f375d48723"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"299fb3a3-fccf-450d-b7ea-bcfbbd75e706","elementid":"5bdf660b-3747-4a05-a0c5-d124fc4e9492","modelid":"18b94cee-e4cd-4a76-bd31-d3f375d48723"}];
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