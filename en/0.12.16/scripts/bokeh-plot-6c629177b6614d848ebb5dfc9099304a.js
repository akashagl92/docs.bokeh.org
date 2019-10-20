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
      };var element = document.getElementById("045423ec-1627-48dc-96f4-a11c6ae60dcf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '045423ec-1627-48dc-96f4-a11c6ae60dcf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"624f516c-605c-4c29-b5b5-85a92de4a5bc":{"roots":{"references":[{"attributes":{},"id":"00b8e037-6ad3-4f13-abb8-80fc13797a61","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"e2a646cc-c21f-46cf-9e1b-f276f290d72e","type":"PolyAnnotation"}},"id":"a423a514-f6b9-45ed-b92e-0f91c369b8e7","type":"LassoSelectTool"},{"attributes":{},"id":"ec8c5aff-fee0-4356-a738-6b3e2fd07190","type":"LinearScale"},{"attributes":{"plot":{"id":"0b9691da-4c6d-47f4-9551-c737cdb49019","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1956c37-aa1b-4b54-a502-17ce2aa7e71a","type":"BasicTicker"}},"id":"0d1eb070-44b6-44a1-a08f-1ce5cc84a971","type":"Grid"},{"attributes":{"formatter":{"id":"2131a8ed-2c53-424e-a63e-20f5e6d30825","type":"BasicTickFormatter"},"plot":{"id":"0b9691da-4c6d-47f4-9551-c737cdb49019","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1956c37-aa1b-4b54-a502-17ce2aa7e71a","type":"BasicTicker"}},"id":"8b8d42ce-40a0-45db-b22c-b02d516320a2","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"b550cc1c-1cc7-491d-ae06-11544991e0c0","type":"Line"},{"attributes":{},"id":"d1956c37-aa1b-4b54-a502-17ce2aa7e71a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fed8f828-ba57-4c4a-8984-5f07998d388a","type":"BasicTickFormatter"},"plot":{"id":"0b9691da-4c6d-47f4-9551-c737cdb49019","subtype":"Figure","type":"Plot"},"ticker":{"id":"afb9dfe0-178a-47d8-8f88-6a44b8678f99","type":"BasicTicker"}},"id":"72e2c01e-4cfd-48e3-a9e2-b6045e1354f1","type":"LinearAxis"},{"attributes":{},"id":"afb9dfe0-178a-47d8-8f88-6a44b8678f99","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1],"ym":[0.5,0.5]},"selected":{"id":"1789f82a-4053-4ebb-b6b7-5f94e0ba628e","type":"Selection"},"selection_policy":{"id":"0c00e142-8211-445d-b379-1fc0042ef700","type":"UnionRenderers"}},"id":"331aa7fe-a1f9-400a-9447-fcb461d3f8a9","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"0b9691da-4c6d-47f4-9551-c737cdb49019","subtype":"Figure","type":"Plot"},"ticker":{"id":"afb9dfe0-178a-47d8-8f88-6a44b8678f99","type":"BasicTicker"}},"id":"679e2d68-7f1d-48ba-b82f-71c9893742f5","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"e2a646cc-c21f-46cf-9e1b-f276f290d72e","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"d191ed79-6aaf-4265-8cc0-a9a8a1b3245c","type":"ColumnDataSource"},"glyph":{"id":"597dd2d3-e127-4817-a124-bc295b4cc36f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"457a6094-a696-42a4-8d33-6fb415107f0a","type":"Circle"},"selection_glyph":null,"view":{"id":"606e9032-84b8-4b8d-b8ad-499ea04a5aff","type":"CDSView"}},"id":"ee741443-297f-45e5-8051-8946a867a29b","type":"GlyphRenderer"},{"attributes":{},"id":"03e67feb-8ddf-4372-a9bc-857995096a7f","type":"UnionRenderers"},{"attributes":{},"id":"2131a8ed-2c53-424e-a63e-20f5e6d30825","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"457a6094-a696-42a4-8d33-6fb415107f0a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"597dd2d3-e127-4817-a124-bc295b4cc36f","type":"Circle"},{"attributes":{"source":{"id":"d191ed79-6aaf-4265-8cc0-a9a8a1b3245c","type":"ColumnDataSource"}},"id":"606e9032-84b8-4b8d-b8ad-499ea04a5aff","type":"CDSView"},{"attributes":{"data_source":{"id":"331aa7fe-a1f9-400a-9447-fcb461d3f8a9","type":"ColumnDataSource"},"glyph":{"id":"508fa49d-e577-44a3-8445-95a0c9ab24b2","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b550cc1c-1cc7-491d-ae06-11544991e0c0","type":"Line"},"selection_glyph":null,"view":{"id":"03961d28-7b0b-498b-b6e5-c55e4e4972ab","type":"CDSView"}},"id":"c4e61abe-ed9b-4f95-8690-9e84a9a0658d","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.6,"line_color":"orange","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"508fa49d-e577-44a3-8445-95a0c9ab24b2","type":"Line"},{"attributes":{},"id":"0c00e142-8211-445d-b379-1fc0042ef700","type":"UnionRenderers"},{"attributes":{"source":{"id":"331aa7fe-a1f9-400a-9447-fcb461d3f8a9","type":"ColumnDataSource"}},"id":"03961d28-7b0b-498b-b6e5-c55e4e4972ab","type":"CDSView"},{"attributes":{},"id":"1789f82a-4053-4ebb-b6b7-5f94e0ba628e","type":"Selection"},{"attributes":{"args":{"s2":{"id":"331aa7fe-a1f9-400a-9447-fcb461d3f8a9","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected.indices;\\n        var d = cb_obj.data;\\n        var ym = 0\\n\\n        if (inds.length == 0)\\n            return;\\n\\n        for (var i = 0; i &lt; d[&#x27;color&#x27;].length; i++) {\\n            d[&#x27;color&#x27;][i] = \\"navy\\"\\n        }\\n        for (var i = 0; i &lt; inds.length; i++) {\\n            d[&#x27;color&#x27;][inds[i]] = \\"firebrick\\"\\n            ym += d[&#x27;y&#x27;][inds[i]]\\n        }\\n\\n        ym /= inds.length\\n        s2.data[&#x27;ym&#x27;] = [ym, ym]\\n\\n        cb_obj.change.emit();\\n        s2.change.emit();\\n    "},"id":"906ced9b-e9fb-4cc2-9b88-f9ababba6d6c","type":"CustomJS"},{"attributes":{"plot":null,"text":"Select Here"},"id":"70ca9b65-fc47-456f-a0a2-5a3feec36b69","type":"Title"},{"attributes":{"callback":null},"id":"1e00e926-8360-4c72-bbda-136744c1242b","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a423a514-f6b9-45ed-b92e-0f91c369b8e7","type":"LassoSelectTool"}]},"id":"a4644e42-a1d9-46c3-9d31-80604ab7ef11","type":"Toolbar"},{"attributes":{"callback":null},"id":"794bf26b-95ec-4918-88e5-c915379bce23","type":"DataRange1d"},{"attributes":{},"id":"a7534c6b-0127-4cc0-9fb9-ff4cb5341dd9","type":"Selection"},{"attributes":{},"id":"fed8f828-ba57-4c4a-8984-5f07998d388a","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"906ced9b-e9fb-4cc2-9b88-f9ababba6d6c","type":"CustomJS"},"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.7730213005905742,0.14634916371937035,0.06456962638508457,0.5888965396792277,0.03431404716963182,0.38521798220058545,0.11327886894781303,0.953486630891588,0.7476248862842991,0.010104844262868728,0.05416923304322452,0.6223074170110003,0.6581921190325395,0.4136318732236707,0.7854326503796558,0.4305817624865601,0.36381222177660955,0.011427194689815345,0.21633545756080463,0.30816976370869,0.6189384717873091,0.4561879851722582,0.19934665270379937,0.5296139111574669,0.6830677577665422,0.784915442447619,0.2999390527886512,0.17458508756663427,0.8388853817129046,0.7378684520657464,0.8978386399834919,0.3522422540174823,0.8808058494897076,0.9655199153769639,0.46038747765013066,0.7649572033980165,0.6857626926391126,0.8384186902919606,0.06775900743934526,0.1704052500346399,0.14236322846724125,0.5408197650814205,0.4754705661661881,0.04363238954844317,0.9940845524020475,0.9794129413173447,0.8352367091354616,0.798423951407109,0.6489344435803597,0.3526416351813966,0.7061224007429836,0.8001267831888197,0.40244280152150946,0.06488320906158418,0.9330596100034583,0.5683039536333826,0.8440777132964857,0.5443211077512543,0.9536569838463781,0.31608334895049284,0.6373902728593202,0.21019281964106695,0.07051405609408756,0.7533309984227899,0.5805664139617137,0.3950475754955327,0.36145573250652097,0.48742655240302524,0.8692999550327725,0.2107813125349669,0.7291358514676171,0.7310320056169509,0.6770187552741306,0.06094398322718031,0.9284429348634887,0.17709832944584258,0.008579048518017607,0.42348016925449006,0.31176530058822705,0.2517521824681329,0.0900142884998758,0.518484513992469,0.008028900123341565,0.48680363121372794,0.5685336530109132,0.9299202485724699,0.6018863201535445,0.8535111950030854,0.005298913831363161,0.36772860871509816,0.06294155192702766,0.3046175171423119,0.7912682546915485,0.10226162414248041,0.49166787530577916,0.932503031789892,0.09125602419140855,0.8466155706792955,0.09917158796672565,0.4903906205129822,0.48879437046318885,0.6897480671160777,0.21564352490040029,0.833335279596447,0.39974337072433097,0.5169756421779724,0.34862992281428806,0.551278234671932,0.922180913858948,0.6884239155029707,0.6495505337259433,0.831200325560403,0.5855412146970506,0.4203829806710767,0.18791559295044902,0.6555000594659138,0.14018698633474602,0.8463638005255407,0.8286390432951773,0.04405286176313461,0.6880646649343083,0.32963210071049387,0.1589672686435769,0.7854517279960428,0.7004493906485026,0.06216457350245608,0.5405830483301924,0.577544418411789,0.3843213341406133,0.6379206267766427,0.5708622720627203,0.7761367472986853,0.12428793314345876,0.852364666424304,0.8790576210841312,0.8941962528958826,0.846318487892077,0.8470298417587725,0.004084158309917041,0.702412888021211,0.4978461846906683,0.7544217227474408,0.8582235734493691,0.6369646939228973,0.09015091535268571,0.1739488381747213,0.28515214484859763,0.9191731880950669,0.35631866444919214,0.51414732213609,0.28401532962715603,0.7078168185936596,0.7617658748842825,0.2647817126374665,0.43515072074020367,0.9730474550680951,0.09386446980652285,0.044034515981777766,0.4100854323478026,0.022834883766792435,0.7688591926206719,0.6233232460831416,0.08894774182421294,0.4097697919469261,0.44005097516819136,0.24528203519285285,0.8582698638538319,0.02091864908700114,0.4702690299418957,0.40944898993052936,0.7580461157044012,0.15294925624707445,0.6188249106993687,0.38007117321549244,0.10874322304481354,0.025972825462902138,0.6669692458333367,0.5271560669328467,0.658816054350588,0.8971963343116924,0.7700238123457261,0.7695213059364536,0.8827266380530282,0.6732275443284294,0.9154031842816925,0.05586577570044071,0.5721176125983608,0.0038499206325754987,0.8376585848336123,0.8378526180671199,0.3024404248396838,0.2743454993873672,0.21813996291727356,0.3998017097601927,0.6807205911072501,0.2939717513591811,0.3411340718131769,0.5073008236125167,0.3201874645830145,0.30799795196202895,0.6858313873194278,0.378594813515843,0.18264453791437119,0.7614232960753203,0.42736147251691137,0.045834375894329815,0.8713552363919391,0.6555726484243765,0.007097422436713963,0.5002794986375402,0.3258629920667142,0.8911797336448379,0.47862797779036004,0.20070841197203193,0.22638518554711284,0.6256268284465978,0.6693262772046784,0.3420974909334039,0.12051222702758702,0.8418982582160903,0.20625327228394696,0.27259673522711114,0.07654883806206225,0.20082931399411963,0.20716897246944666,0.6303729845336755,0.16336010408451773,0.7565440883075707,0.9123722989445026,0.7207207879557413,0.7339608045918218,0.593575639041017,0.04536476382989307,0.39610873229818677,0.40826679738940574,0.3768654175916273,0.8155696004151868,0.8654342079931145,0.3321875827083135,0.3526826232831918,0.04805130149179804,0.1208816760055701,0.6576393381767522,0.3651594537056664,0.8367520320834093,0.5212345326388474,0.8424566951985949,0.615818986361777,0.9505612634078658,0.36960548054240927,0.693389542240376,0.850475170790046,0.07838012396537075,0.33827755307117524,0.3831612282942818,0.9999521595453658,0.020546530534168106,0.5824373394110909,0.7792372510204079,0.1416114170932019,0.7939477095494177,0.2263263100280739,0.45428551730052136,0.6479850642796589,0.04429910894471156,0.7299133238764938,0.4982521720045422,0.009106338021341531,0.5456111787716375,0.6354765075290382,0.06816659804873881,0.49394242457607107,0.9500256027348937,0.7930968453364321,0.12483612478244333,0.855755902736894,0.8959740366164868,0.23177502973211928,0.5706330111631853,0.3091676491866021,0.5777551075291972,0.27711716753439475,0.030497932629589886,0.1123289103289643,0.6667858924820383,0.5660098235502594,0.8391340897934257,0.7411673688967974,0.20550434787773508,0.9062388432332943,0.09974950306015562,0.7608021320508374,0.8659749372084158,0.5852860955315581,0.5313498603414702,0.0687424053972242,0.41474765986887463,0.9864740738050523,0.7239923185052785,0.9449105615381629,0.9473622090311709,0.8752239785291724,0.797120334626713,0.11148299337944989,0.75675104905626,0.55697742344134,0.3259750195479423,0.6336919943473572,0.8580232598115959,0.636753618737649,0.5404179933618184,0.9763072813056646,0.18237638587090943,0.24084600981772808,0.42847362100518893,0.6915896653173902,0.2827295886742369,0.11734319275068505,0.942862250283365,0.408642881062932,0.9513972801037026,0.8295889393869746,0.2912972798548784,0.4879944425202687,0.24040279211215787,0.7164137959588133,0.37388688395559433,0.23611499605710928,0.830715800284512,0.7947292952478103,0.05087290100199848,0.9511046849121202,0.07782606700043748,0.284568720891645,0.3405839205652461,0.15705936025126244,0.15272682894712786,0.2885316740533981,0.7764706472651083,0.815833853420785,0.5823843109658532,0.3404610277695953,0.6449048672672507,0.20682185704180045,0.28649554617890427,0.46215999555835385,0.6327660348304445,0.24550176333554852,0.5580660095583824,0.1498750539458581,0.5464560302258888,0.9920127783830522,0.09979827981670586,0.49083094355057266,0.76932954490004,0.5746495704104142,0.5193122916011056,0.8028224680436928,0.21014040341647844,0.6347733431437825,0.055056722053814955,0.0015025470835666743,0.7509608585349821,0.6943702112216782,0.3215977630178498,0.23575783129767436,0.4397602293534374,0.0008677420077377596,0.8675053300735968,0.80401994016391,0.14975000105718994,0.27515512297702505,0.15696612559016,0.2777761171905868,0.12350308487399408,0.6120421155319188,0.5182079634170094,0.38014246005893915,0.6948177756912772,0.34898695958514214,0.5150763338530336,0.4777899834236735,0.9026651584870536,0.6473883574182105,0.8116860032198111,0.16482491462645088,0.8195795851591996,0.36192135447944274,0.9270270996832017,0.43611410821988883,0.6141632779588148,0.020759299634339756,0.9445995609141092,0.54648837721365,0.2866944569199751,0.47467982274697185,0.8258107463996841,0.65667899011545,0.8015237492260991,0.8678191398857368,0.545688904358124,0.018306041869265544,0.11568603205411976,0.7945147088127803,0.7639410596755746,0.952742174170435,0.6017406061576249,0.4662035095217867,0.5775888202024151,0.6765807545968829,0.5071653925714845,0.37888218312158983,0.5565490422358363,0.19761758443352984,0.16776156128028452,0.14783944941492977,0.08530727850596542,0.47884652752464396,0.15161357507632922,0.07808787375592174,0.17517106162812457,0.5938875454800393,0.9867976783068885,0.4492230128363698,0.8101637278887521,0.2055411019097867,0.14731634521762083,0.7870655464993527,0.7382284827859227,0.3658697625307352,0.6069925063655708,0.9570886001962772,0.7225545065708534,0.955677322294141,0.007956358031719901,0.3593358413663461,0.8809775382592778,0.18784806189126846,0.5775547255051686,0.3142684832445919,0.7890684084500889,0.515499682863682,0.0678455666591049,0.6603312638513181,0.28519440830653187,0.536588864013784,0.527989133941038,0.10325933147981026,0.5372351860749299,0.4462728313524157,0.08073988420570899,0.19911111978171847,0.018163514335429065,0.5973223363427792,0.33627513150151167,0.6475020998248511,0.9184446037332132,0.3807915349394324,0.08143279517319868,0.16520384146562184,0.930765365912709,0.26198126902430174,0.7824425880462021,0.10009580613814295,0.184291035830065,0.7161737434119568,0.3393562332157082,0.2651529274547514,0.6093063046516626,0.6632616275146057,0.1749221845737342,0.3959319618857855,0.9036256655199334,0.21351642650057445,0.02242307847702696,0.9457850287695242,0.8387982392245502,0.48128738108530655,0.8889694197906365,0.39259166815801716,0.0971751666208932,0.8510570032146025,0.1281033904648482,0.48197329077439444,0.34157698238746936,0.5483216884134344,0.19228596767215345,0.41544812106380136,0.05394873315673543,0.18450555800471602,0.7053873972778036,0.13607453466787567,0.5242904850086607,0.7761306792797977,0.9388887777956703,0.04508008688069631,0.7980358279946933,0.5906664616382331,0.6564164966979491,0.9939274425824682],"y":[0.27856497411443915,0.774755750296478,0.2114599033190816,0.6477669532305568,0.7183489163915995,0.8076508116706859,0.6964066373017386,0.0996025535955608,0.8777502542260409,0.08270250258291612,0.9984209317480947,0.03678258671118895,0.5374348136486629,0.10997293931541785,0.18574654864770457,0.8793292687389277,0.42588158234717954,0.32417752628623364,0.7923636121106381,0.9534855565823628,0.8958737480440347,0.0015626968823524434,0.139806894450209,0.24293072437401741,0.7210064209736549,0.42847328783247085,0.42975247728080435,0.70721691223055,0.2870551819087276,0.43959977972891995,0.25858563404430657,0.604491606254733,0.06741317440815997,0.6912040358247046,0.6096925573875703,0.07485332642407772,0.8491761705310136,0.39344612969940607,0.6486801247461371,0.9151510073055981,0.8314104777379752,0.9034828315323884,0.45295407731232074,0.16958976390166025,0.10073449739301332,0.8000466675652408,0.41092862608291403,0.3467489177316385,0.15383797893544193,0.3673500322827131,0.38810665855722815,0.42652267592769266,0.5401975921489582,0.04823850025395293,0.84618273894278,0.9820916191855781,0.883922320559331,0.3458956971825137,0.210371184747568,0.910783477626178,0.11314549687056841,0.355109351140639,0.3522490589231063,0.09529925511329163,0.8154213927757222,0.03495311442644411,0.8429880997605875,0.1198841194839827,0.9005442498016679,0.8175713820305844,0.4146255617078014,0.015184544080642737,0.29100204642166816,0.7191150755886797,0.8865098331201463,0.8528450618009646,0.0017513420147303727,0.54714903607288,0.2898043560571141,0.9492220907971267,0.8871343815123284,0.8380976332687889,0.014886592520867992,0.07480024387756024,0.34618157958645634,0.43891466600143425,0.9083722799363124,0.9156190884320037,0.7619501775264608,0.3378628982203903,0.18077447572989458,0.7773544042690608,0.15621017109321267,0.6576101758936838,0.9485922990369722,0.8392068402111229,0.25959582581108287,0.0504687443397237,0.07639319347326645,0.10791983607896094,0.12318526162415588,0.9175670809266784,0.09274452690946133,0.7238564608143887,0.45703659814702025,0.12913196824262818,0.6959684545192695,0.35817270229890397,0.6347951735476937,0.329680891990095,0.7897252206768142,0.14481204069111042,0.028795644850425184,0.23395787702231385,0.9216229631455316,0.002223566636019636,0.5296261501234003,0.8969214261006372,0.017737815972662996,0.6560790810944357,0.982598797805494,0.1367414252049376,0.2997207740201825,0.3126909651449695,0.5246891680736374,0.7701379375504154,0.061103512764749124,0.7274926596611709,0.028611775981854604,0.37137511237308485,0.8582531173373839,0.5117286722074479,0.8650653613212765,0.4772194113659989,0.7127429470804983,0.2195379294322527,0.9538733920873956,0.007295934766978429,0.8680146817896375,0.485270429001481,0.007254337231863639,0.3097815874229223,0.6288820998102328,0.16477304663173054,0.9830016182216584,0.02170899694818884,0.25031506284767047,0.22804091063484155,0.8401150283194553,0.4611026737521682,0.1612264713013586,0.7044248978717889,0.5103467937127619,0.8100409560227206,0.9058731609476115,0.9666454749775933,0.34807564725594,0.6495207060586632,0.45189097914486764,0.6729905817425066,0.2124338326041405,0.8563102166146556,0.27435841620542034,0.8112768450885539,0.9427551634878125,0.1475159974212369,0.622269260639751,0.09237805084889195,0.9619395069222043,0.47224501665014784,0.383186280795752,0.26528759039097505,0.6117532200634057,0.2207946496313682,0.4838928842318355,0.43628029823984793,0.8997925391059277,0.7912572654508352,0.9703273470306885,0.29441896920150024,0.8737447196795123,0.620600325427484,0.33361429694328115,0.3101208747224876,0.8795734555372755,0.019483036421117372,0.30098066157540015,0.1842958496800331,0.32344072084964814,0.8412702924935895,0.7847094537662765,0.7452938097950046,0.11068634814676082,0.587369175064393,0.9264533698330392,0.1743442777433547,0.8972250825816542,0.45658720058986557,0.008015549162829094,0.23292871643592772,0.2926368824471287,0.9987494851333276,0.5567520214843774,0.5072279904583661,0.5570697578751338,0.3467453638404333,0.726628203653703,0.9371848954850185,0.7818722810366345,0.12503028167206376,0.7368753765556306,0.07647860430865194,0.5941127201112055,0.3900312393195493,0.9390254820337798,0.1670721756219129,0.8818720672049466,0.334085370162175,0.06653884100408691,0.3581542083516469,0.6568632320096461,0.05616330278607151,0.39170967920142075,0.9804484837454075,0.3267069177103241,0.8481288742161374,0.05123016638168654,0.9202627243527575,0.5706801066324056,0.1905140426890075,0.5997106341308273,0.6089274813205942,0.7744261871148597,0.22183933293992042,0.9935316043487326,0.6395173320019294,0.7092607666940367,0.29658072449784545,0.19241698766989945,0.35161545680038864,0.3575321618629095,0.6183258196605496,0.6129333817723576,0.7778396147503467,0.515091673536488,0.20199087367643698,0.5557279614930544,0.07376478621480809,0.5250174255599572,0.6359241941394771,0.0918062281207418,0.940209641172451,0.8176327394087628,0.0028956585689547953,0.6137330161029102,0.6664859686313768,0.8479402720951335,0.21214074337195954,0.038113239942950905,0.5879840131069076,0.3674145156774139,0.005397847803798039,0.5037984026759628,0.7883822804386937,0.5170386817190582,0.14763490877310526,0.9266090693989837,0.12525482857421344,0.8260400640742402,0.6178784145141556,0.43915972072166665,0.14639305275769954,0.232466171084603,0.873827729004566,0.8825516058904046,0.8011214338135697,0.17355895443659564,0.44345040525169965,0.581460285538157,0.6104945197093761,0.6968157135354032,0.6409946125135668,0.2243166146996124,0.5021214870490939,0.3989187345152547,0.005823410561367703,0.49640006047935703,0.7926134565603798,0.846033179688111,0.19184135558409487,0.37727701935027147,0.23826977526647197,0.011971268651659872,0.5000656342697556,0.17792608160230994,0.14162636505827375,0.7732671725308842,0.36439678556825383,0.1571720002015471,0.8289716021457636,0.6083656204740722,0.21797111150631576,0.10902030627939885,0.013165857781466839,0.850844362018464,0.22561273179077956,0.06438346450055121,0.3991607941817207,0.7691040976311,0.42566684296714874,0.5026124942085032,0.5030673697016192,0.8599394747521559,0.8207842288209057,0.9485010717286749,0.5276407718356714,0.4837636036465701,0.6210780200510463,0.27738843125442025,0.188417348959114,0.6388430528234412,0.5706983876769596,0.6568667715404258,0.48815516707905715,0.6706672325883872,0.5023430216763599,0.2699182442067377,0.5600222478262246,0.3372527276735281,0.7060429866838788,0.3730378051839436,0.35962373663025227,0.21155652103019074,0.29439812417658484,0.5063255294773211,0.5774176244124155,0.44673921810512784,0.9177587255983617,0.782646737722839,0.2597710616767397,0.9927695663571536,0.014078287781017051,0.7703622409611963,0.8945670219870001,0.6583563184446254,0.5413799565663536,0.28256999793908455,0.5844849776331327,0.23098704415118854,0.5633898110160506,0.22649720951356256,0.8961530545901073,0.5223087357080948,0.32534054148692637,0.3981885541597405,0.5199535568002386,0.4908667509247757,0.9593086221616732,0.9028204185372449,0.02123286973675842,0.2325136613816473,0.37720837832212406,0.4765455229757385,0.38213342403161366,0.11043526492414013,0.829840358498816,0.9799399427477427,0.15831711036442475,0.36146791940703915,0.38122560993095067,0.468602121671314,0.5516101213124891,0.5588543540104774,0.2981044897675543,0.3230377632057573,0.5629062794344338,0.6910616731439013,0.3670580079133785,0.17665763701872395,0.5713526329637144,0.1494994273673239,0.015246055963308525,0.11461722224739568,0.6919143392507807,0.946766549455901,0.5377934850909275,0.8489955012582028,0.3301171210282148,0.7402575839085515,0.056888877869361476,0.957911186507543,0.0262757867587341,0.8023003501374042,0.9466563795191221,0.20208905965041513,0.48732754136711043,0.28579488869619896,0.0611260598352269,0.03698002081888452,0.3396434553954403,0.1559002245084019,0.7551475329094595,0.3356513213437138,0.8634709062813026,0.6898898875504044,0.05236141444092135,0.5807585838489323,0.34890520932511493,0.6589757078125591,0.608217042294221,0.9128709270681186,0.21560188243884504,0.08906649777317599,0.5908043977389835,0.6361058619604947,0.3690789236450396,0.8222529434946702,0.5843631857303568,0.28682254159063847,0.17975401657928292,0.8193617662653258,0.121449779295703,0.05898957210136291,0.767636917534001,0.10890335129829842,0.7347054069633707,0.8905849087731824,0.8116031342024732,0.7282041904191666,0.28774861718010225,0.13628968555723986,0.09552657148085975,0.21255650796268144,0.22971405194290595,0.8361630160756456,0.21794071820017025,0.1733770332049368,0.017584976308343214,0.5806298234029512,0.6549521046381569,0.014466634344666662,0.9961998906375886,0.6891005719437903,0.96465177029138,0.655025978838497,0.3002698541861104,0.8224336116174836,0.12912166816921455,0.2889213855281473,0.1596299675456586,0.206036931657398,0.07534768078807119,0.2754609624417803,0.13875792578469515,0.8013109032320805,0.9161154999744217,0.18822126776837422,0.11629346198016732,0.9813601446969421,0.7610908045104166,0.30815788232216534,0.4028442327560756,0.9958249709662004,0.9229549444072049,0.15084391428789423,0.9195077777551908,0.045313570196138575,0.33235701048079946,0.19056185329770892,0.10543423707360788,0.18507106098445425,0.9956413066766296,0.9072234880109503,0.5029006995375422,0.2704250514853954,0.8577162580632609,0.30775218421817185,0.7695588604152422,0.3629830035689555,0.7921313549015845,0.12274160843036452,0.8722910715655972,0.5057942920007843,0.7971771246290614,0.7116277722782361,0.40557311131424356,0.3250380486230149,0.7776033719475235,0.47718383389332564,0.04636772782629306,0.1189796503491477,0.616356061969963,0.1372330826571807,0.29751056912466,0.14396462343740968,0.3583843085449234,0.9631959910903966,0.08213403422837962,0.9985588208440033,0.4514574514874279]},"selected":{"id":"a7534c6b-0127-4cc0-9fb9-ff4cb5341dd9","type":"Selection"},"selection_policy":{"id":"03e67feb-8ddf-4372-a9bc-857995096a7f","type":"UnionRenderers"}},"id":"d191ed79-6aaf-4265-8cc0-a9a8a1b3245c","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"8b8d42ce-40a0-45db-b22c-b02d516320a2","type":"LinearAxis"}],"left":[{"id":"72e2c01e-4cfd-48e3-a9e2-b6045e1354f1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8b8d42ce-40a0-45db-b22c-b02d516320a2","type":"LinearAxis"},{"id":"0d1eb070-44b6-44a1-a08f-1ce5cc84a971","type":"Grid"},{"id":"72e2c01e-4cfd-48e3-a9e2-b6045e1354f1","type":"LinearAxis"},{"id":"679e2d68-7f1d-48ba-b82f-71c9893742f5","type":"Grid"},{"id":"e2a646cc-c21f-46cf-9e1b-f276f290d72e","type":"PolyAnnotation"},{"id":"ee741443-297f-45e5-8051-8946a867a29b","type":"GlyphRenderer"},{"id":"c4e61abe-ed9b-4f95-8690-9e84a9a0658d","type":"GlyphRenderer"}],"title":{"id":"70ca9b65-fc47-456f-a0a2-5a3feec36b69","type":"Title"},"toolbar":{"id":"a4644e42-a1d9-46c3-9d31-80604ab7ef11","type":"Toolbar"},"x_range":{"id":"1e00e926-8360-4c72-bbda-136744c1242b","type":"DataRange1d"},"x_scale":{"id":"00b8e037-6ad3-4f13-abb8-80fc13797a61","type":"LinearScale"},"y_range":{"id":"794bf26b-95ec-4918-88e5-c915379bce23","type":"DataRange1d"},"y_scale":{"id":"ec8c5aff-fee0-4356-a738-6b3e2fd07190","type":"LinearScale"}},"id":"0b9691da-4c6d-47f4-9551-c737cdb49019","subtype":"Figure","type":"Plot"}],"root_ids":["0b9691da-4c6d-47f4-9551-c737cdb49019"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"624f516c-605c-4c29-b5b5-85a92de4a5bc","elementid":"045423ec-1627-48dc-96f4-a11c6ae60dcf","modelid":"0b9691da-4c6d-47f4-9551-c737cdb49019"}];
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