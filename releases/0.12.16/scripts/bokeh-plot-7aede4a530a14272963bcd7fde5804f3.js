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
      };var element = document.getElementById("55c2e174-49ab-4262-9e1d-9007855325a1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '55c2e174-49ab-4262-9e1d-9007855325a1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a3526fb9-fab6-43e5-bb5d-d4a22b445bce":{"roots":{"references":[{"attributes":{},"id":"0b29bae8-5805-4883-b377-a466ef1b5f03","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"d454db3b-9a90-46cf-9603-826589cbcd12","type":"Selection"},"selection_policy":{"id":"4eb8c141-b088-40d1-999b-00392849738e","type":"UnionRenderers"}},"id":"a65a3157-5e9b-48b6-b6c7-f4fa06657cec","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"a3f62c4b-4a94-4405-897d-0f05efcc2e44","type":"BasicTickFormatter"},"plot":{"id":"ffbf1fb0-2f9e-458a-84e2-86b11ca1ced1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d148088e-4b65-452c-8b80-938548ead7f3","type":"BasicTicker"}},"id":"53b17fd2-49e0-4d71-b593-e8543ff20902","type":"LinearAxis"},{"attributes":{},"id":"9203f253-92fd-4ee3-9c07-cd58c8696d11","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f34baa2-ee3d-4b06-b1f9-093f11146b69","type":"Circle"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"4a3773c1-ea04-4482-81a4-84067eb1172d","type":"Title"},{"attributes":{},"id":"d454db3b-9a90-46cf-9603-826589cbcd12","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"fefdd891-09f9-404b-829a-2ea9f8f67f6c","type":"Circle"},{"attributes":{"callback":null},"id":"0cc0814a-8e56-4adc-b422-b3900e6d9e8b","type":"DataRange1d"},{"attributes":{},"id":"89b70e2e-4e92-43c6-9bac-799867df4715","type":"LinearScale"},{"attributes":{},"id":"d148088e-4b65-452c-8b80-938548ead7f3","type":"BasicTicker"},{"attributes":{"source":{"id":"a65a3157-5e9b-48b6-b6c7-f4fa06657cec","type":"ColumnDataSource"}},"id":"ab742175-21c4-401d-8677-8b2b9d328c0b","type":"CDSView"},{"attributes":{"data_source":{"id":"a65a3157-5e9b-48b6-b6c7-f4fa06657cec","type":"ColumnDataSource"},"glyph":{"id":"fefdd891-09f9-404b-829a-2ea9f8f67f6c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9f34baa2-ee3d-4b06-b1f9-093f11146b69","type":"Circle"},"selection_glyph":null,"view":{"id":"ab742175-21c4-401d-8677-8b2b9d328c0b","type":"CDSView"}},"id":"51244333-33b2-43f7-b3aa-e081eb485640","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"a17da420-7d76-4559-a088-a11d8bc576da","type":"BoxAnnotation"}},"id":"ae2e0fbd-6ccb-4c14-98f9-5ab489a5cd3d","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"53b17fd2-49e0-4d71-b593-e8543ff20902","type":"LinearAxis"}],"left":[{"id":"7aca6987-735c-41e1-839d-5cbaea26d804","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"53b17fd2-49e0-4d71-b593-e8543ff20902","type":"LinearAxis"},{"id":"db33010c-3d80-44c5-a3a2-98106c767252","type":"Grid"},{"id":"7aca6987-735c-41e1-839d-5cbaea26d804","type":"LinearAxis"},{"id":"e9607a57-2d8a-4302-9b25-8fae730863e1","type":"Grid"},{"id":"a17da420-7d76-4559-a088-a11d8bc576da","type":"BoxAnnotation"},{"id":"5f31eefa-2d00-46ad-bf13-9a8db654f23c","type":"BoxAnnotation"},{"id":"02fcf70d-8488-48d8-ade5-71ab7b9379bf","type":"PolyAnnotation"},{"id":"51244333-33b2-43f7-b3aa-e081eb485640","type":"GlyphRenderer"}],"title":{"id":"4a3773c1-ea04-4482-81a4-84067eb1172d","type":"Title"},"toolbar":{"id":"8e757783-ffa5-4a99-8eb8-2764abc5232c","type":"Toolbar"},"x_range":{"id":"0cc0814a-8e56-4adc-b422-b3900e6d9e8b","type":"DataRange1d"},"x_scale":{"id":"aa6fbdf6-d973-4424-a629-32ea1158adc6","type":"LinearScale"},"y_range":{"id":"7f1bd0e5-f45f-479e-8ce6-dc13792fd1d1","type":"DataRange1d"},"y_scale":{"id":"89b70e2e-4e92-43c6-9bac-799867df4715","type":"LinearScale"}},"id":"ffbf1fb0-2f9e-458a-84e2-86b11ca1ced1","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ae2e0fbd-6ccb-4c14-98f9-5ab489a5cd3d","type":"BoxSelectTool"},{"id":"037d5afb-d34a-4025-8a57-094872149c7a","type":"BoxZoomTool"},{"id":"fc41eb0b-d301-431b-b503-1e3850837719","type":"LassoSelectTool"},{"id":"9203f253-92fd-4ee3-9c07-cd58c8696d11","type":"ResetTool"}]},"id":"8e757783-ffa5-4a99-8eb8-2764abc5232c","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5f31eefa-2d00-46ad-bf13-9a8db654f23c","type":"BoxAnnotation"},{"attributes":{},"id":"a3f62c4b-4a94-4405-897d-0f05efcc2e44","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0b29bae8-5805-4883-b377-a466ef1b5f03","type":"BasicTickFormatter"},"plot":{"id":"ffbf1fb0-2f9e-458a-84e2-86b11ca1ced1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7810dcee-fa8f-468b-b087-c57aaa0a8258","type":"BasicTicker"}},"id":"7aca6987-735c-41e1-839d-5cbaea26d804","type":"LinearAxis"},{"attributes":{"overlay":{"id":"5f31eefa-2d00-46ad-bf13-9a8db654f23c","type":"BoxAnnotation"}},"id":"037d5afb-d34a-4025-8a57-094872149c7a","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"ffbf1fb0-2f9e-458a-84e2-86b11ca1ced1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7810dcee-fa8f-468b-b087-c57aaa0a8258","type":"BasicTicker"}},"id":"e9607a57-2d8a-4302-9b25-8fae730863e1","type":"Grid"},{"attributes":{"plot":{"id":"ffbf1fb0-2f9e-458a-84e2-86b11ca1ced1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d148088e-4b65-452c-8b80-938548ead7f3","type":"BasicTicker"}},"id":"db33010c-3d80-44c5-a3a2-98106c767252","type":"Grid"},{"attributes":{},"id":"aa6fbdf6-d973-4424-a629-32ea1158adc6","type":"LinearScale"},{"attributes":{},"id":"7810dcee-fa8f-468b-b087-c57aaa0a8258","type":"BasicTicker"},{"attributes":{},"id":"4eb8c141-b088-40d1-999b-00392849738e","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"02fcf70d-8488-48d8-ade5-71ab7b9379bf","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"02fcf70d-8488-48d8-ade5-71ab7b9379bf","type":"PolyAnnotation"}},"id":"fc41eb0b-d301-431b-b503-1e3850837719","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"7f1bd0e5-f45f-479e-8ce6-dc13792fd1d1","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a17da420-7d76-4559-a088-a11d8bc576da","type":"BoxAnnotation"}],"root_ids":["ffbf1fb0-2f9e-458a-84e2-86b11ca1ced1"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"a3526fb9-fab6-43e5-bb5d-d4a22b445bce","elementid":"55c2e174-49ab-4262-9e1d-9007855325a1","modelid":"ffbf1fb0-2f9e-458a-84e2-86b11ca1ced1"}];
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