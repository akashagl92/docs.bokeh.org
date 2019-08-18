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
      };var element = document.getElementById("2b3134de-3cd2-4d3e-82b7-dc6511e1bf99");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b3134de-3cd2-4d3e-82b7-dc6511e1bf99' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5a5d9ba2-715e-404d-b3af-21efc7b8ba12":{"roots":{"references":[{"attributes":{"data_source":{"id":"b108ab35-3ee7-4d5c-96ea-55f8af8e4376","type":"ColumnDataSource"},"glyph":{"id":"db3257a1-375f-405b-941d-3e44d457dd61","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"03bdba52-73b1-473a-8598-a515ef651bf9","type":"Square"},"selection_glyph":null,"view":{"id":"779879e5-91a1-417d-a3b2-7ea0a6c3d571","type":"CDSView"}},"id":"c8c72308-dbdb-43ea-902e-0db6c9766278","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d04afacf-a116-4d1f-8998-b65d68cd2bd7","type":"Triangle"},{"attributes":{"formatter":{"id":"dfe252eb-678b-47d1-b62e-084266ea1626","type":"BasicTickFormatter"},"plot":{"id":"9204c434-8259-42a7-b8d0-98b45704cdfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"335b42dc-b91e-43bf-bc5c-735dbef9f082","type":"BasicTicker"}},"id":"1ee0c21b-55a0-4ebd-a1f2-862ec7db4454","type":"LinearAxis"},{"attributes":{"source":{"id":"45646054-1a97-4150-a0b4-84062d400f0a","type":"ColumnDataSource"}},"id":"314731cc-9a0f-4bb2-8e7c-408e4b687aaf","type":"CDSView"},{"attributes":{},"id":"a0f6a2e6-2631-485e-8db6-56a84b020217","type":"BasicTicker"},{"attributes":{},"id":"335b42dc-b91e-43bf-bc5c-735dbef9f082","type":"BasicTicker"},{"attributes":{},"id":"b605fa42-e3e5-4a5d-a5b1-1d7ba4cb4ef3","type":"LinearScale"},{"attributes":{},"id":"003b4375-a682-41c8-8bbc-25d7b3ea4b2b","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"9204c434-8259-42a7-b8d0-98b45704cdfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0f6a2e6-2631-485e-8db6-56a84b020217","type":"BasicTicker"}},"id":"7c5d33ad-4fc3-47e0-a474-e1396820a3a7","type":"Grid"},{"attributes":{"formatter":{"id":"92ad0d08-f3bc-48bd-8626-f88712fcecf9","type":"BasicTickFormatter"},"plot":{"id":"9204c434-8259-42a7-b8d0-98b45704cdfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0f6a2e6-2631-485e-8db6-56a84b020217","type":"BasicTicker"}},"id":"0f9e8b08-5b5c-4eca-bdda-ac5f84901808","type":"LinearAxis"},{"attributes":{},"id":"e85000aa-3252-4307-8cc8-3712f2fa2fc0","type":"Selection"},{"attributes":{"formatter":{"id":"fd730bb7-7def-48ce-acd4-abdd9d0a1bad","type":"BasicTickFormatter"},"plot":{"id":"c35e9058-bb53-4631-9a43-18072f060654","subtype":"Figure","type":"Plot"},"ticker":{"id":"878caae9-e8a1-4b38-ae8c-dddf66a9980d","type":"BasicTicker"}},"id":"0c15d998-a1bd-4aeb-8d5d-df825f19feef","type":"LinearAxis"},{"attributes":{"plot":{"id":"9204c434-8259-42a7-b8d0-98b45704cdfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"335b42dc-b91e-43bf-bc5c-735dbef9f082","type":"BasicTicker"}},"id":"1aaf1f11-0cf6-4f1e-878e-2607f0476b44","type":"Grid"},{"attributes":{"below":[{"id":"39492831-a2b5-471f-b69b-4428c8d7f653","type":"LinearAxis"}],"left":[{"id":"9960155d-46a8-4fc4-9707-ae41d3eb3fde","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"39492831-a2b5-471f-b69b-4428c8d7f653","type":"LinearAxis"},{"id":"f7c767a3-80cc-49bd-91f1-208b6c7b4d35","type":"Grid"},{"id":"9960155d-46a8-4fc4-9707-ae41d3eb3fde","type":"LinearAxis"},{"id":"77678bdb-7237-4755-bda3-b92c71a12e96","type":"Grid"},{"id":"93450945-7b11-4aaf-a38b-f90e943eff31","type":"BoxAnnotation"},{"id":"c8c72308-dbdb-43ea-902e-0db6c9766278","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"2db99fb2-0bb5-4642-ba5c-d77e940e8eca","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ef8857c5-f6b3-4dce-b9b0-25fa995e6a8c","type":"DataRange1d"},"x_scale":{"id":"dc186627-f3bb-4999-a0dc-23e188be8988","type":"LinearScale"},"y_range":{"id":"2462fb99-dfe6-4c4c-b54c-f40c44ce3064","type":"DataRange1d"},"y_scale":{"id":"d447e93d-a1db-4b76-a060-30404fc3d00d","type":"LinearScale"}},"id":"8fda6db2-59c4-4061-b5e8-69949b0577c8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"878caae9-e8a1-4b38-ae8c-dddf66a9980d","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"81677792-0dd8-4768-860e-b03ab7fa418e","type":"BoxAnnotation"},{"attributes":{},"id":"1e978f87-6014-4735-8b9c-96bf96fc7499","type":"BasicTicker"},{"attributes":{"below":[{"id":"1ee0c21b-55a0-4ebd-a1f2-862ec7db4454","type":"LinearAxis"}],"left":[{"id":"0f9e8b08-5b5c-4eca-bdda-ac5f84901808","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1ee0c21b-55a0-4ebd-a1f2-862ec7db4454","type":"LinearAxis"},{"id":"1aaf1f11-0cf6-4f1e-878e-2607f0476b44","type":"Grid"},{"id":"0f9e8b08-5b5c-4eca-bdda-ac5f84901808","type":"LinearAxis"},{"id":"7c5d33ad-4fc3-47e0-a474-e1396820a3a7","type":"Grid"},{"id":"7077a79a-7e33-4343-9f05-51f911fab963","type":"BoxAnnotation"},{"id":"5e17090f-9075-4f42-88b8-062edec9bda9","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"09f1e6f5-ddff-4977-9cfc-7953baa9e1e4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ef8857c5-f6b3-4dce-b9b0-25fa995e6a8c","type":"DataRange1d"},"x_scale":{"id":"31da0e5f-3331-4bd4-be5b-0b0675c785e3","type":"LinearScale"},"y_range":{"id":"785f5984-2746-4fd5-9cf4-d79219315f52","type":"DataRange1d"},"y_scale":{"id":"b605fa42-e3e5-4a5d-a5b1-1d7ba4cb4ef3","type":"LinearScale"}},"id":"9204c434-8259-42a7-b8d0-98b45704cdfc","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"db3257a1-375f-405b-941d-3e44d457dd61","type":"Square"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"2de95dfc-3108-4467-8ef7-0842f81ca4dc","type":"Selection"},"selection_policy":{"id":"2fa93c04-9c44-470d-b219-096a409391c6","type":"UnionRenderers"}},"id":"45646054-1a97-4150-a0b4-84062d400f0a","type":"ColumnDataSource"},{"attributes":{},"id":"41f8cfa1-7a43-4331-8f6a-931b79fb417b","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a84c016b-e232-4ffb-9028-297b9874f3a7","type":"Circle"},{"attributes":{},"id":"337fc7a9-350f-46b3-b512-475a1e596825","type":"HelpTool"},{"attributes":{},"id":"459bd494-2340-4e97-8e12-ae0d59ee4e5d","type":"BasicTickFormatter"},{"attributes":{},"id":"cfba476f-60d8-4f4d-967d-9c0853246b47","type":"LinearScale"},{"attributes":{},"id":"0f49a545-05cf-42d7-9a8b-095ba774ecdb","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"7a3c1cca-67d7-4fd9-9532-7045ed45dad0","type":"BasicTickFormatter"},"plot":{"id":"c35e9058-bb53-4631-9a43-18072f060654","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e978f87-6014-4735-8b9c-96bf96fc7499","type":"BasicTicker"}},"id":"600177b7-f5b9-49d4-9044-26d2ef97d332","type":"LinearAxis"},{"attributes":{"overlay":{"id":"81677792-0dd8-4768-860e-b03ab7fa418e","type":"BoxAnnotation"}},"id":"509e5b98-7437-4972-b60e-d7208a13b3a9","type":"BoxZoomTool"},{"attributes":{},"id":"ff3a7632-e002-47c6-8c5e-d6cb78a5730c","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e803d9fe-8169-4f1f-93fa-15dca209fcfb","type":"Circle"},{"attributes":{},"id":"6feffc3b-48ac-4a69-be01-1f953a5371ea","type":"PanTool"},{"attributes":{"children":[{"id":"c35e9058-bb53-4631-9a43-18072f060654","subtype":"Figure","type":"Plot"},{"id":"9204c434-8259-42a7-b8d0-98b45704cdfc","subtype":"Figure","type":"Plot"},{"id":"8fda6db2-59c4-4061-b5e8-69949b0577c8","subtype":"Figure","type":"Plot"}]},"id":"e996cbed-34cb-488f-9c34-62f7c1353d5c","type":"Row"},{"attributes":{},"id":"a33c6edf-c149-4aa0-9153-f72062fc1e3f","type":"LinearScale"},{"attributes":{"data_source":{"id":"45646054-1a97-4150-a0b4-84062d400f0a","type":"ColumnDataSource"},"glyph":{"id":"e803d9fe-8169-4f1f-93fa-15dca209fcfb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a84c016b-e232-4ffb-9028-297b9874f3a7","type":"Circle"},"selection_glyph":null,"view":{"id":"314731cc-9a0f-4bb2-8e7c-408e4b687aaf","type":"CDSView"}},"id":"80987bf8-841d-48ca-987d-6a50ccf89113","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"23656991-086e-477c-8d1d-be671442c358","type":"PanTool"},{"id":"c3333508-5015-40ec-b997-92e5bafca75b","type":"WheelZoomTool"},{"id":"b68a2c9a-3634-4d40-820d-71cc3e34cfa1","type":"BoxZoomTool"},{"id":"ce92e71c-51af-455e-a92b-b3e8e6ea5e8e","type":"SaveTool"},{"id":"30b6a431-9700-4ff3-b76c-b44c0f6f3975","type":"ResetTool"},{"id":"6045c140-9118-41a3-88ba-20b0c3212bcb","type":"HelpTool"}]},"id":"2db99fb2-0bb5-4642-ba5c-d77e940e8eca","type":"Toolbar"},{"attributes":{"plot":{"id":"c35e9058-bb53-4631-9a43-18072f060654","subtype":"Figure","type":"Plot"},"ticker":{"id":"878caae9-e8a1-4b38-ae8c-dddf66a9980d","type":"BasicTicker"}},"id":"05c9ede4-2299-41e9-a181-fce9d2e0c2df","type":"Grid"},{"attributes":{"data_source":{"id":"db9d023c-8cf3-44c8-9882-5e26d67d9a4d","type":"ColumnDataSource"},"glyph":{"id":"d04afacf-a116-4d1f-8998-b65d68cd2bd7","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d50dd3a4-b970-4d65-b5eb-346af1863863","type":"Triangle"},"selection_glyph":null,"view":{"id":"926ae398-da66-4f42-80da-2634cc381af6","type":"CDSView"}},"id":"5e17090f-9075-4f42-88b8-062edec9bda9","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"ef8857c5-f6b3-4dce-b9b0-25fa995e6a8c","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d50dd3a4-b970-4d65-b5eb-346af1863863","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"c35e9058-bb53-4631-9a43-18072f060654","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e978f87-6014-4735-8b9c-96bf96fc7499","type":"BasicTicker"}},"id":"ae5f3725-95a7-49a1-b8ff-56a0c68d9dc9","type":"Grid"},{"attributes":{},"id":"3e37e94d-679b-486c-ac43-5271932dc60f","type":"HelpTool"},{"attributes":{"callback":null},"id":"785f5984-2746-4fd5-9cf4-d79219315f52","type":"DataRange1d"},{"attributes":{},"id":"31da0e5f-3331-4bd4-be5b-0b0675c785e3","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6feffc3b-48ac-4a69-be01-1f953a5371ea","type":"PanTool"},{"id":"0f49a545-05cf-42d7-9a8b-095ba774ecdb","type":"WheelZoomTool"},{"id":"509e5b98-7437-4972-b60e-d7208a13b3a9","type":"BoxZoomTool"},{"id":"ef29f5ea-f6e3-4a1b-b67a-efed05bbe471","type":"SaveTool"},{"id":"41f8cfa1-7a43-4331-8f6a-931b79fb417b","type":"ResetTool"},{"id":"3e37e94d-679b-486c-ac43-5271932dc60f","type":"HelpTool"}]},"id":"355ff919-d57c-4648-b4b0-bd88e7f828ca","type":"Toolbar"},{"attributes":{},"id":"bf045641-28f8-478b-9807-69921e1e265e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"8fda6db2-59c4-4061-b5e8-69949b0577c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf045641-28f8-478b-9807-69921e1e265e","type":"BasicTicker"}},"id":"77678bdb-7237-4755-bda3-b92c71a12e96","type":"Grid"},{"attributes":{"plot":{"id":"8fda6db2-59c4-4061-b5e8-69949b0577c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"684677c7-4c8a-4369-aa3e-bdce9e0cf018","type":"BasicTicker"}},"id":"f7c767a3-80cc-49bd-91f1-208b6c7b4d35","type":"Grid"},{"attributes":{},"id":"4469b03c-c5d4-4afa-be9c-2c9891b39f6e","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"003b4375-a682-41c8-8bbc-25d7b3ea4b2b","type":"BasicTickFormatter"},"plot":{"id":"8fda6db2-59c4-4061-b5e8-69949b0577c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf045641-28f8-478b-9807-69921e1e265e","type":"BasicTicker"}},"id":"9960155d-46a8-4fc4-9707-ae41d3eb3fde","type":"LinearAxis"},{"attributes":{},"id":"23656991-086e-477c-8d1d-be671442c358","type":"PanTool"},{"attributes":{},"id":"ef29f5ea-f6e3-4a1b-b67a-efed05bbe471","type":"SaveTool"},{"attributes":{},"id":"2de95dfc-3108-4467-8ef7-0842f81ca4dc","type":"Selection"},{"attributes":{"source":{"id":"db9d023c-8cf3-44c8-9882-5e26d67d9a4d","type":"ColumnDataSource"}},"id":"926ae398-da66-4f42-80da-2634cc381af6","type":"CDSView"},{"attributes":{},"id":"487304b0-b956-4bd6-bb85-1db359531db3","type":"ResetTool"},{"attributes":{},"id":"dc186627-f3bb-4999-a0dc-23e188be8988","type":"LinearScale"},{"attributes":{"formatter":{"id":"459bd494-2340-4e97-8e12-ae0d59ee4e5d","type":"BasicTickFormatter"},"plot":{"id":"8fda6db2-59c4-4061-b5e8-69949b0577c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"684677c7-4c8a-4369-aa3e-bdce9e0cf018","type":"BasicTicker"}},"id":"39492831-a2b5-471f-b69b-4428c8d7f653","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7077a79a-7e33-4343-9f05-51f911fab963","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"03bdba52-73b1-473a-8598-a515ef651bf9","type":"Square"},{"attributes":{},"id":"3165febf-0005-4b04-b901-bfb0fa6d6158","type":"PanTool"},{"attributes":{},"id":"684677c7-4c8a-4369-aa3e-bdce9e0cf018","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2462fb99-dfe6-4c4c-b54c-f40c44ce3064","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"ff3a7632-e002-47c6-8c5e-d6cb78a5730c","type":"Selection"},"selection_policy":{"id":"d40683cc-ca7b-4d4c-b376-4a2767699c2a","type":"UnionRenderers"}},"id":"db9d023c-8cf3-44c8-9882-5e26d67d9a4d","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"e85000aa-3252-4307-8cc8-3712f2fa2fc0","type":"Selection"},"selection_policy":{"id":"4469b03c-c5d4-4afa-be9c-2c9891b39f6e","type":"UnionRenderers"}},"id":"b108ab35-3ee7-4d5c-96ea-55f8af8e4376","type":"ColumnDataSource"},{"attributes":{},"id":"7a3c1cca-67d7-4fd9-9532-7045ed45dad0","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b108ab35-3ee7-4d5c-96ea-55f8af8e4376","type":"ColumnDataSource"}},"id":"779879e5-91a1-417d-a3b2-7ea0a6c3d571","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3165febf-0005-4b04-b901-bfb0fa6d6158","type":"PanTool"},{"id":"017f1f86-1559-4b4e-9a11-74ddcc7c311b","type":"WheelZoomTool"},{"id":"9a606c5e-868b-407e-882f-709dea0593af","type":"BoxZoomTool"},{"id":"920287e5-30ec-4e31-9e7f-eecc71c976a3","type":"SaveTool"},{"id":"487304b0-b956-4bd6-bb85-1db359531db3","type":"ResetTool"},{"id":"337fc7a9-350f-46b3-b512-475a1e596825","type":"HelpTool"}]},"id":"09f1e6f5-ddff-4977-9cfc-7953baa9e1e4","type":"Toolbar"},{"attributes":{"overlay":{"id":"93450945-7b11-4aaf-a38b-f90e943eff31","type":"BoxAnnotation"}},"id":"b68a2c9a-3634-4d40-820d-71cc3e34cfa1","type":"BoxZoomTool"},{"attributes":{},"id":"920287e5-30ec-4e31-9e7f-eecc71c976a3","type":"SaveTool"},{"attributes":{},"id":"2fa93c04-9c44-470d-b219-096a409391c6","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93450945-7b11-4aaf-a38b-f90e943eff31","type":"BoxAnnotation"},{"attributes":{},"id":"c3333508-5015-40ec-b997-92e5bafca75b","type":"WheelZoomTool"},{"attributes":{},"id":"6045c140-9118-41a3-88ba-20b0c3212bcb","type":"HelpTool"},{"attributes":{"overlay":{"id":"7077a79a-7e33-4343-9f05-51f911fab963","type":"BoxAnnotation"}},"id":"9a606c5e-868b-407e-882f-709dea0593af","type":"BoxZoomTool"},{"attributes":{},"id":"ce92e71c-51af-455e-a92b-b3e8e6ea5e8e","type":"SaveTool"},{"attributes":{},"id":"dfe252eb-678b-47d1-b62e-084266ea1626","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"0c15d998-a1bd-4aeb-8d5d-df825f19feef","type":"LinearAxis"}],"left":[{"id":"600177b7-f5b9-49d4-9044-26d2ef97d332","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"0c15d998-a1bd-4aeb-8d5d-df825f19feef","type":"LinearAxis"},{"id":"05c9ede4-2299-41e9-a181-fce9d2e0c2df","type":"Grid"},{"id":"600177b7-f5b9-49d4-9044-26d2ef97d332","type":"LinearAxis"},{"id":"ae5f3725-95a7-49a1-b8ff-56a0c68d9dc9","type":"Grid"},{"id":"81677792-0dd8-4768-860e-b03ab7fa418e","type":"BoxAnnotation"},{"id":"80987bf8-841d-48ca-987d-6a50ccf89113","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"355ff919-d57c-4648-b4b0-bd88e7f828ca","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ef8857c5-f6b3-4dce-b9b0-25fa995e6a8c","type":"DataRange1d"},"x_scale":{"id":"a33c6edf-c149-4aa0-9153-f72062fc1e3f","type":"LinearScale"},"y_range":{"id":"785f5984-2746-4fd5-9cf4-d79219315f52","type":"DataRange1d"},"y_scale":{"id":"cfba476f-60d8-4f4d-967d-9c0853246b47","type":"LinearScale"}},"id":"c35e9058-bb53-4631-9a43-18072f060654","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"017f1f86-1559-4b4e-9a11-74ddcc7c311b","type":"WheelZoomTool"},{"attributes":{},"id":"d40683cc-ca7b-4d4c-b376-4a2767699c2a","type":"UnionRenderers"},{"attributes":{},"id":"30b6a431-9700-4ff3-b76c-b44c0f6f3975","type":"ResetTool"},{"attributes":{},"id":"fd730bb7-7def-48ce-acd4-abdd9d0a1bad","type":"BasicTickFormatter"},{"attributes":{},"id":"d447e93d-a1db-4b76-a060-30404fc3d00d","type":"LinearScale"},{"attributes":{"children":[{"id":"e996cbed-34cb-488f-9c34-62f7c1353d5c","type":"Row"}]},"id":"f9b94d58-2a33-480e-bae3-8d93f0061ea5","type":"Column"},{"attributes":{},"id":"92ad0d08-f3bc-48bd-8626-f88712fcecf9","type":"BasicTickFormatter"}],"root_ids":["f9b94d58-2a33-480e-bae3-8d93f0061ea5"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"5a5d9ba2-715e-404d-b3af-21efc7b8ba12","elementid":"2b3134de-3cd2-4d3e-82b7-dc6511e1bf99","modelid":"f9b94d58-2a33-480e-bae3-8d93f0061ea5"}];
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