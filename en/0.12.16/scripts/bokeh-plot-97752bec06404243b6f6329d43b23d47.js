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
      };var element = document.getElementById("8cba8e8d-4e44-4a5a-81a6-7ec324a8211d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8cba8e8d-4e44-4a5a-81a6-7ec324a8211d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e2bd8626-da42-4119-869e-3655061b1ae0":{"roots":{"references":[{"attributes":{"data_source":{"id":"2eb2b8bd-30fd-4d38-abd2-d4234fa1b14e","type":"ColumnDataSource"},"glyph":{"id":"32b8ad0d-9a58-42a4-adbb-26e03be2ee06","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"0394bc5b-717a-4d14-ad8c-999ac77d3875","type":"VBar"},"selection_glyph":null,"view":{"id":"41c2bc38-3a62-4996-8d62-bdc9550642bd","type":"CDSView"}},"id":"9dbcee2e-1bb6-4bc1-bf00-126a67b5e74e","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"4b1ffb89-137e-453a-a9f0-af05a64a97f8","type":"DataRange1d"},{"attributes":{"source":{"id":"2eb2b8bd-30fd-4d38-abd2-d4234fa1b14e","type":"ColumnDataSource"}},"id":"41c2bc38-3a62-4996-8d62-bdc9550642bd","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"9dbcee2e-1bb6-4bc1-bf00-126a67b5e74e","type":"GlyphRenderer"}]},"id":"2b59c0a3-67d8-49a4-ab30-f6e4662ad785","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"0467aa12-4ade-4ec3-a4e2-4cb143661117","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"0968f81a-0c78-4e08-a373-464df97d8e7b","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"3638b681-9f05-4abf-8856-c462ae598745","type":"VBar"},{"attributes":{"callback":null,"renderers":[{"id":"2802ea06-a6b2-4db4-b21b-6ef07f327886","type":"GlyphRenderer"}],"tooltips":[["2017 total","@2017"],["index","$index"]]},"id":"7513aff4-707f-4d69-b535-0f41e905efb8","type":"HoverTool"},{"attributes":{"source":{"id":"2eb2b8bd-30fd-4d38-abd2-d4234fa1b14e","type":"ColumnDataSource"}},"id":"5ec8abd6-a4e0-4a1f-b34f-f620932086c4","type":"CDSView"},{"attributes":{},"id":"309b9b69-6619-4745-828b-288f33c9f7be","type":"BasicTickFormatter"},{"attributes":{},"id":"7b81a4aa-90b9-4398-b65a-3741f9095ecf","type":"UnionRenderers"},{"attributes":{"fields":["2015","2016"]},"id":"f8a0daaf-5345-4e83-a5f3-b0ecb138e434","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"0467aa12-4ade-4ec3-a4e2-4cb143661117","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"bfa80184-b7df-4d9a-8795-d712ab0d5a2a","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"8f31aa91-fc8a-4543-b33f-506cdace579e","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"34e72616-0e54-4f49-96c3-cdb25ca899b1","type":"VBar"},{"attributes":{"callback":null,"renderers":[{"id":"9dbcee2e-1bb6-4bc1-bf00-126a67b5e74e","type":"GlyphRenderer"}],"tooltips":[["2016 total","@2016"],["index","$index"]]},"id":"bd7df76b-9ec8-44d3-936e-67bdbde2a89d","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"9388367e-28e3-4ab8-801a-bbbfcb2b7e33","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab188438-a20b-4f5b-8b80-0f8e5155969d","type":"BasicTicker"}},"id":"861a7d8d-235e-465b-a30f-697ac8212e5e","type":"Grid"},{"attributes":{"fields":["2015"]},"id":"bf755f84-7651-437b-9575-f74a93f851d6","type":"Stack"},{"attributes":{},"id":"3bc89eba-f8fa-46ff-a53c-40826a6e4503","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"45a88eb7-09d8-457c-bea0-fa7ce32ebf07","type":"HoverTool"},{"id":"bd7df76b-9ec8-44d3-936e-67bdbde2a89d","type":"HoverTool"},{"id":"7513aff4-707f-4d69-b535-0f41e905efb8","type":"HoverTool"}]},"id":"fd21369c-7fb6-456e-aa03-040910c26946","type":"Toolbar"},{"attributes":{"formatter":{"id":"211ed061-94b2-4c9f-b69b-d76fe7226bc3","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"9388367e-28e3-4ab8-801a-bbbfcb2b7e33","subtype":"Figure","type":"Plot"},"ticker":{"id":"b87b4d83-3c86-45a1-82a4-c464d6ee9285","type":"CategoricalTicker"}},"id":"f6664089-3e13-4481-a9bb-a9760f6e1486","type":"CategoricalAxis"},{"attributes":{"bottom":{"expr":{"id":"bf755f84-7651-437b-9575-f74a93f851d6","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"f8a0daaf-5345-4e83-a5f3-b0ecb138e434","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"32b8ad0d-9a58-42a4-adbb-26e03be2ee06","type":"VBar"},{"attributes":{},"id":"5ff1f68a-48de-43fc-84d0-40369659f4fe","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"bf755f84-7651-437b-9575-f74a93f851d6","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"f8a0daaf-5345-4e83-a5f3-b0ecb138e434","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0394bc5b-717a-4d14-ad8c-999ac77d3875","type":"VBar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"2802ea06-a6b2-4db4-b21b-6ef07f327886","type":"GlyphRenderer"}]},"id":"99b89c38-d640-44af-8a79-ccfe7e45892d","type":"LegendItem"},{"attributes":{"items":[{"id":"76f6423d-e497-45eb-a13c-cb2bf138be60","type":"LegendItem"},{"id":"2b59c0a3-67d8-49a4-ab30-f6e4662ad785","type":"LegendItem"},{"id":"99b89c38-d640-44af-8a79-ccfe7e45892d","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"9388367e-28e3-4ab8-801a-bbbfcb2b7e33","subtype":"Figure","type":"Plot"}},"id":"df064fd8-4d36-4171-a012-45a1b7cb19e9","type":"Legend"},{"attributes":{},"id":"ab188438-a20b-4f5b-8b80-0f8e5155969d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2eb2b8bd-30fd-4d38-abd2-d4234fa1b14e","type":"ColumnDataSource"},"glyph":{"id":"4f2c8691-17ec-41b9-98f4-f00198478d19","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"34e72616-0e54-4f49-96c3-cdb25ca899b1","type":"VBar"},"selection_glyph":null,"view":{"id":"5ec8abd6-a4e0-4a1f-b34f-f620932086c4","type":"CDSView"}},"id":"b43276f1-7e75-4e70-8da4-b2f93b473fc8","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"0467aa12-4ade-4ec3-a4e2-4cb143661117","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"0968f81a-0c78-4e08-a373-464df97d8e7b","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"251987bd-196b-4eea-b523-b3024583b17d","type":"VBar"},{"attributes":{"formatter":{"id":"309b9b69-6619-4745-828b-288f33c9f7be","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"9388367e-28e3-4ab8-801a-bbbfcb2b7e33","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab188438-a20b-4f5b-8b80-0f8e5155969d","type":"BasicTicker"}},"id":"57fe2ed3-9855-4f09-a596-07774a105db9","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"ba902cb7-376e-48b9-b958-839b480b6bd2","type":"Selection"},"selection_policy":{"id":"7b81a4aa-90b9-4398-b65a-3741f9095ecf","type":"UnionRenderers"}},"id":"2eb2b8bd-30fd-4d38-abd2-d4234fa1b14e","type":"ColumnDataSource"},{"attributes":{},"id":"b87b4d83-3c86-45a1-82a4-c464d6ee9285","type":"CategoricalTicker"},{"attributes":{},"id":"ba902cb7-376e-48b9-b958-839b480b6bd2","type":"Selection"},{"attributes":{"fields":[]},"id":"bfa80184-b7df-4d9a-8795-d712ab0d5a2a","type":"Stack"},{"attributes":{"below":[{"id":"f6664089-3e13-4481-a9bb-a9760f6e1486","type":"CategoricalAxis"}],"left":[{"id":"57fe2ed3-9855-4f09-a596-07774a105db9","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"f6664089-3e13-4481-a9bb-a9760f6e1486","type":"CategoricalAxis"},{"id":"caf6228f-32ef-4f1b-9254-318c68ddd94a","type":"Grid"},{"id":"57fe2ed3-9855-4f09-a596-07774a105db9","type":"LinearAxis"},{"id":"861a7d8d-235e-465b-a30f-697ac8212e5e","type":"Grid"},{"id":"df064fd8-4d36-4171-a012-45a1b7cb19e9","type":"Legend"},{"id":"b43276f1-7e75-4e70-8da4-b2f93b473fc8","type":"GlyphRenderer"},{"id":"9dbcee2e-1bb6-4bc1-bf00-126a67b5e74e","type":"GlyphRenderer"},{"id":"2802ea06-a6b2-4db4-b21b-6ef07f327886","type":"GlyphRenderer"}],"title":{"id":"d6ba1a04-a186-48be-9ab9-002277b2f965","type":"Title"},"toolbar":{"id":"fd21369c-7fb6-456e-aa03-040910c26946","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5695b687-1b4f-4138-ba64-8efaab9678bb","type":"FactorRange"},"x_scale":{"id":"3bc89eba-f8fa-46ff-a53c-40826a6e4503","type":"CategoricalScale"},"y_range":{"id":"4b1ffb89-137e-453a-a9f0-af05a64a97f8","type":"DataRange1d"},"y_scale":{"id":"5ff1f68a-48de-43fc-84d0-40369659f4fe","type":"LinearScale"}},"id":"9388367e-28e3-4ab8-801a-bbbfcb2b7e33","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"b43276f1-7e75-4e70-8da4-b2f93b473fc8","type":"GlyphRenderer"}]},"id":"76f6423d-e497-45eb-a13c-cb2bf138be60","type":"LegendItem"},{"attributes":{"data_source":{"id":"2eb2b8bd-30fd-4d38-abd2-d4234fa1b14e","type":"ColumnDataSource"},"glyph":{"id":"3638b681-9f05-4abf-8856-c462ae598745","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"251987bd-196b-4eea-b523-b3024583b17d","type":"VBar"},"selection_glyph":null,"view":{"id":"7e546ed5-b0e3-46df-85f6-52eda5c51dff","type":"CDSView"}},"id":"2802ea06-a6b2-4db4-b21b-6ef07f327886","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"bfa80184-b7df-4d9a-8795-d712ab0d5a2a","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"8f31aa91-fc8a-4543-b33f-506cdace579e","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"4f2c8691-17ec-41b9-98f4-f00198478d19","type":"VBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"0968f81a-0c78-4e08-a373-464df97d8e7b","type":"Stack"},{"attributes":{"source":{"id":"2eb2b8bd-30fd-4d38-abd2-d4234fa1b14e","type":"ColumnDataSource"}},"id":"7e546ed5-b0e3-46df-85f6-52eda5c51dff","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"d6ba1a04-a186-48be-9ab9-002277b2f965","type":"Title"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"9388367e-28e3-4ab8-801a-bbbfcb2b7e33","subtype":"Figure","type":"Plot"},"ticker":{"id":"b87b4d83-3c86-45a1-82a4-c464d6ee9285","type":"CategoricalTicker"}},"id":"caf6228f-32ef-4f1b-9254-318c68ddd94a","type":"Grid"},{"attributes":{},"id":"211ed061-94b2-4c9f-b69b-d76fe7226bc3","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"renderers":[{"id":"b43276f1-7e75-4e70-8da4-b2f93b473fc8","type":"GlyphRenderer"}],"tooltips":[["2015 total","@2015"],["index","$index"]]},"id":"45a88eb7-09d8-457c-bea0-fa7ce32ebf07","type":"HoverTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"5695b687-1b4f-4138-ba64-8efaab9678bb","type":"FactorRange"},{"attributes":{"fields":["2015"]},"id":"8f31aa91-fc8a-4543-b33f-506cdace579e","type":"Stack"}],"root_ids":["9388367e-28e3-4ab8-801a-bbbfcb2b7e33"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"e2bd8626-da42-4119-869e-3655061b1ae0","elementid":"8cba8e8d-4e44-4a5a-81a6-7ec324a8211d","modelid":"9388367e-28e3-4ab8-801a-bbbfcb2b7e33"}];
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