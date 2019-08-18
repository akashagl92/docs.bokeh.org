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
      };var element = document.getElementById("dfb71b1f-1ee9-4b7c-a724-10b6bb37d44c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfb71b1f-1ee9-4b7c-a724-10b6bb37d44c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1dd2c278-12d1-4a9f-b4eb-fb81a7e9dfd8":{"roots":{"references":[{"attributes":{"data_source":{"id":"15dd372a-fd07-4024-a95a-f4ac6274dc05","type":"ColumnDataSource"},"glyph":{"id":"dede4a3e-12a8-4d0a-8c7f-c5ea51ab4310","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17134883-f76c-4d77-ab66-0635c796cfc8","type":"Rect"},"selection_glyph":null,"view":{"id":"1f44f338-78be-478a-816f-d7315dfa66cf","type":"CDSView"}},"id":"bc4055a1-3d22-4932-9f64-5edb9fce3927","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"c98124a5-f237-4244-9004-5206a00629e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"141c053f-8861-4a86-88b5-ca521657679f","type":"BasicTicker"}},"id":"ca3bc9f7-f32d-4d5d-b3c8-c80d44011e24","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"d92d009d-6164-4164-bf52-3f0676521472","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"dede4a3e-12a8-4d0a-8c7f-c5ea51ab4310","type":"Rect"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"JFSXC/YoBMBvQvkULEoFwHAuNe1W1/+/olRtrd8H+b/AlFjWEYfdv+42xLTjTeG/","dtype":"float64","shape":[6]}},"selected":{"id":"226cf683-1db1-4c51-a608-4effd726a934","type":"Selection"},"selection_policy":{"id":"9b96d867-d21c-44f2-82b4-c61876a7ce28","type":"UnionRenderers"}},"id":"15dd372a-fd07-4024-a95a-f4ac6274dc05","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"17134883-f76c-4d77-ab66-0635c796cfc8","type":"Rect"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"9f4f2075-b0be-4b3a-a8f3-140e987c9994","type":"VBar"},{"attributes":{},"id":"79e5750a-b24b-451a-918d-f86b81100a89","type":"LinearScale"},{"attributes":{"data_source":{"id":"4c75694d-8f17-4457-a6d0-784b273a9803","type":"ColumnDataSource"},"glyph":{"id":"7d650cfd-478d-45c9-9db8-57d7df6d70a6","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9f4f2075-b0be-4b3a-a8f3-140e987c9994","type":"VBar"},"selection_glyph":null,"view":{"id":"ef0ab9ce-74ee-459b-a235-63b43e477d26","type":"CDSView"}},"id":"85191ca3-45fb-420b-9d04-237e30f10441","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3202456a-ef44-4a92-bfd9-278ff08c64bd","type":"ColumnDataSource"},"glyph":{"id":"6a1086b5-95f8-4cb5-a0cb-62346459a654","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d92d009d-6164-4164-bf52-3f0676521472","type":"Circle"},"selection_glyph":null,"view":{"id":"35bac1d1-c47d-41aa-b6ee-f5583458326a","type":"CDSView"}},"id":"115b9591-3506-4041-9d8f-72bfd7fd8a40","type":"GlyphRenderer"},{"attributes":{},"id":"31120d1b-74e6-4238-92a8-aa3b28d9010c","type":"UnionRenderers"},{"attributes":{},"id":"bd3b293a-d337-4d27-a6d5-4e0858f6017c","type":"Selection"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"7d650cfd-478d-45c9-9db8-57d7df6d70a6","type":"VBar"},{"attributes":{},"id":"226cf683-1db1-4c51-a608-4effd726a934","type":"Selection"},{"attributes":{},"id":"9aeb7d8f-17f7-4a72-86a6-f15d494af011","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"079f7448-251d-47a1-be0c-40faf7c17110","type":"Segment"},{"attributes":{"source":{"id":"44c0a195-08f8-468d-8e34-4e741cc13d28","type":"ColumnDataSource"}},"id":"08a4eda6-71d7-4947-b783-f8c6ea9e6224","type":"CDSView"},{"attributes":{},"id":"bc46cb07-8ede-4648-bb60-4487ea805f11","type":"UnionRenderers"},{"attributes":{},"id":"f2b2b503-d444-4d90-bae1-df40684ef320","type":"Selection"},{"attributes":{"source":{"id":"4c75694d-8f17-4457-a6d0-784b273a9803","type":"ColumnDataSource"}},"id":"ef0ab9ce-74ee-459b-a235-63b43e477d26","type":"CDSView"},{"attributes":{},"id":"ec5a1231-6c32-40f7-9943-787181aea18c","type":"CategoricalTickFormatter"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7d6b6d67-fd76-46ec-a43e-092fbbef43fc","type":"Segment"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f58d6b4e-75e7-4949-b1d6-d1d9a291b80f","type":"Rect"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"ZkeBj4u0nT9v7xG6lH6Rv/mvOIyND+4/h3CjO+HH7T8JuU1CsNr/P8sUQggXYP4/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"dG9HnmMm5b+gEZxZ4VTnv7SGB8Nt8cs/Xn6nC9m51z9wulDIivb1P1lJrdy1VvU/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"637439d5-f255-47e5-9005-c9610ef4af89","type":"Selection"},"selection_policy":{"id":"8eaaa7ad-6e63-412b-a475-11f58293efcf","type":"UnionRenderers"}},"id":"4c75694d-8f17-4457-a6d0-784b273a9803","type":"ColumnDataSource"},{"attributes":{},"id":"8297333f-bda3-4869-b6d2-9eae410e2f72","type":"UnionRenderers"},{"attributes":{},"id":"31e9d3e5-a357-4f21-a387-c767c8d876de","type":"CategoricalScale"},{"attributes":{"source":{"id":"15dd372a-fd07-4024-a95a-f4ac6274dc05","type":"ColumnDataSource"}},"id":"1f44f338-78be-478a-816f-d7315dfa66cf","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"9cf6775f-167c-42e3-931a-f22c4e73b646","type":"Title"},{"attributes":{"data_source":{"id":"44c0a195-08f8-468d-8e34-4e741cc13d28","type":"ColumnDataSource"},"glyph":{"id":"f58d6b4e-75e7-4949-b1d6-d1d9a291b80f","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb56b461-7c9e-491e-8145-8200889186c5","type":"Rect"},"selection_glyph":null,"view":{"id":"08a4eda6-71d7-4947-b783-f8c6ea9e6224","type":"CDSView"}},"id":"63267515-c88f-4cfe-b79d-e7ada562b666","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"367f624a-0356-4942-ab35-0799bfe08694","type":"Segment"},{"attributes":{},"id":"9b96d867-d21c-44f2-82b4-c61876a7ce28","type":"UnionRenderers"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"105ee637-4177-45aa-b0b2-17460a4e7774","type":"FactorRange"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"8EF3VAKAA0BOuIw8s+0DQEc2bms/5A1Ap/ASv4LEDECAnu63fFsRQK0Rx1iz1BFA","dtype":"float64","shape":[6]}},"selected":{"id":"bd3b293a-d337-4d27-a6d5-4e0858f6017c","type":"Selection"},"selection_policy":{"id":"bc46cb07-8ede-4648-bb60-4487ea805f11","type":"UnionRenderers"}},"id":"44c0a195-08f8-468d-8e34-4e741cc13d28","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"31c19c3f-7ade-4f5d-847f-43c1c6ef240a","type":"BasicTickFormatter"},"plot":{"id":"c98124a5-f237-4244-9004-5206a00629e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"141c053f-8861-4a86-88b5-ca521657679f","type":"BasicTicker"}},"id":"abafdb5a-a9dc-48c7-94cc-7eb7107b95db","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"bf8812f4-1a40-4876-a8e2-afe56aa1bd3e","type":"CategoricalAxis"}],"left":[{"id":"abafdb5a-a9dc-48c7-94cc-7eb7107b95db","type":"LinearAxis"}],"renderers":[{"id":"bf8812f4-1a40-4876-a8e2-afe56aa1bd3e","type":"CategoricalAxis"},{"id":"a4641a72-7a64-4ce2-a033-3268302be5a5","type":"Grid"},{"id":"abafdb5a-a9dc-48c7-94cc-7eb7107b95db","type":"LinearAxis"},{"id":"ca3bc9f7-f32d-4d5d-b3c8-c80d44011e24","type":"Grid"},{"id":"75c0541c-5907-4cb5-bfaf-0c10c35b9102","type":"GlyphRenderer"},{"id":"4d7ee650-9ed5-4789-a259-64247ae8ae6c","type":"GlyphRenderer"},{"id":"98f6bffd-f537-4558-9a8f-933eb805869e","type":"GlyphRenderer"},{"id":"85191ca3-45fb-420b-9d04-237e30f10441","type":"GlyphRenderer"},{"id":"bc4055a1-3d22-4932-9f64-5edb9fce3927","type":"GlyphRenderer"},{"id":"63267515-c88f-4cfe-b79d-e7ada562b666","type":"GlyphRenderer"},{"id":"115b9591-3506-4041-9d8f-72bfd7fd8a40","type":"GlyphRenderer"}],"title":{"id":"9cf6775f-167c-42e3-931a-f22c4e73b646","type":"Title"},"toolbar":{"id":"61df4f11-4153-479f-8559-b26695fbf6d9","type":"Toolbar"},"x_range":{"id":"105ee637-4177-45aa-b0b2-17460a4e7774","type":"FactorRange"},"x_scale":{"id":"31e9d3e5-a357-4f21-a387-c767c8d876de","type":"CategoricalScale"},"y_range":{"id":"982b932c-e5dc-4b4f-8c2e-a2975bb9d0bb","type":"DataRange1d"},"y_scale":{"id":"79e5750a-b24b-451a-918d-f86b81100a89","type":"LinearScale"}},"id":"c98124a5-f237-4244-9004-5206a00629e3","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"53042eb3-7da7-4a0c-925e-eb916fc78695","type":"ColumnDataSource"}},"id":"f0857a88-92d5-4964-b712-070851897aaa","type":"CDSView"},{"attributes":{"callback":null},"id":"982b932c-e5dc-4b4f-8c2e-a2975bb9d0bb","type":"DataRange1d"},{"attributes":{},"id":"31c19c3f-7ade-4f5d-847f-43c1c6ef240a","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb56b461-7c9e-491e-8145-8200889186c5","type":"Rect"},{"attributes":{},"id":"141c053f-8861-4a86-88b5-ca521657679f","type":"BasicTicker"},{"attributes":{},"id":"8eaaa7ad-6e63-412b-a475-11f58293efcf","type":"UnionRenderers"},{"attributes":{},"id":"25de8c67-7be5-4954-9355-f109af9a0e64","type":"SaveTool"},{"attributes":{},"id":"7f08bde1-b234-4114-ae03-8a60e153e507","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"c98124a5-f237-4244-9004-5206a00629e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"2371c761-9ed2-4f0b-9977-c931f708134f","type":"CategoricalTicker"}},"id":"a4641a72-7a64-4ce2-a033-3268302be5a5","type":"Grid"},{"attributes":{},"id":"637439d5-f255-47e5-9005-c9610ef4af89","type":"Selection"},{"attributes":{},"id":"2371c761-9ed2-4f0b-9977-c931f708134f","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"JFSXC/YoBMBvQvkULEoFwHAuNe1W1/+/olRtrd8H+b/AlFjWEYfdv+42xLTjTeG/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"dG9HnmMm5b+gEZxZ4VTnv7SGB8Nt8cs/Xn6nC9m51z9wulDIivb1P1lJrdy1VvU/","dtype":"float64","shape":[6]}},"selected":{"id":"cca704d1-05de-428c-b502-db149c4c56f0","type":"Selection"},"selection_policy":{"id":"9aeb7d8f-17f7-4a72-86a6-f15d494af011","type":"UnionRenderers"}},"id":"59b8ae59-07b6-4f33-93d1-8ef31564f874","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":["a","a","b","b","b","b","d","d","d","f","f","f","f","f","f"],"y":[3.182727524814423,-2.6322443175469674,-2.841905799714657,-3.094540586368115,2.8276218986716497,2.828010450872998,-2.593441946546455,4.369364335269344,-1.6981819132460823,4.695380735145418,-0.7122855985067087,4.674332561851834,4.692639875505893,-0.6776740137926143,-0.5446968635973835]},"selected":{"id":"f7dbe821-abfc-48bc-ace9-c41f26f26cb4","type":"Selection"},"selection_policy":{"id":"31120d1b-74e6-4238-92a8-aa3b28d9010c","type":"UnionRenderers"}},"id":"3202456a-ef44-4a92-bfd9-278ff08c64bd","type":"ColumnDataSource"},{"attributes":{"source":{"id":"59b8ae59-07b6-4f33-93d1-8ef31564f874","type":"ColumnDataSource"}},"id":"d635d639-0017-46e8-bd25-ba0a02607c6a","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"25de8c67-7be5-4954-9355-f109af9a0e64","type":"SaveTool"}]},"id":"61df4f11-4153-479f-8559-b26695fbf6d9","type":"Toolbar"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"6bb5cfa8-cda3-4b8e-a085-fdd6b0c0e9df","type":"VBar"},{"attributes":{"formatter":{"id":"ec5a1231-6c32-40f7-9943-787181aea18c","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"c98124a5-f237-4244-9004-5206a00629e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"2371c761-9ed2-4f0b-9977-c931f708134f","type":"CategoricalTicker"}},"id":"bf8812f4-1a40-4876-a8e2-afe56aa1bd3e","type":"CategoricalAxis"},{"attributes":{},"id":"f7dbe821-abfc-48bc-ace9-c41f26f26cb4","type":"Selection"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"oSbHwZSC4j8e6en3/eLhP9ha1dvZZfw/FK3Oja+S+j/gLZPgCRUFQPJwBtaSqgRA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"ZkeBj4u0nT9v7xG6lH6Rv/mvOIyND+4/h3CjO+HH7T8JuU1CsNr/P8sUQggXYP4/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"0e9b1789-a5a7-4dd8-81be-ba8175761968","type":"Selection"},"selection_policy":{"id":"8297333f-bda3-4869-b6d2-9eae410e2f72","type":"UnionRenderers"}},"id":"53042eb3-7da7-4a0c-925e-eb916fc78695","type":"ColumnDataSource"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0afa342a-515f-4324-85c7-c6eefdd358c3","type":"Segment"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"8EF3VAKAA0BOuIw8s+0DQEc2bms/5A1Ap/ASv4LEDECAnu63fFsRQK0Rx1iz1BFA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"oSbHwZSC4j8e6en3/eLhP9ha1dvZZfw/FK3Oja+S+j/gLZPgCRUFQPJwBtaSqgRA","dtype":"float64","shape":[6]}},"selected":{"id":"f2b2b503-d444-4d90-bae1-df40684ef320","type":"Selection"},"selection_policy":{"id":"7f08bde1-b234-4114-ae03-8a60e153e507","type":"UnionRenderers"}},"id":"256584db-98f8-4959-92f0-16de7c4e1c24","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"59b8ae59-07b6-4f33-93d1-8ef31564f874","type":"ColumnDataSource"},"glyph":{"id":"0afa342a-515f-4324-85c7-c6eefdd358c3","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"367f624a-0356-4942-ab35-0799bfe08694","type":"Segment"},"selection_glyph":null,"view":{"id":"d635d639-0017-46e8-bd25-ba0a02607c6a","type":"CDSView"}},"id":"4d7ee650-9ed5-4789-a259-64247ae8ae6c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"256584db-98f8-4959-92f0-16de7c4e1c24","type":"ColumnDataSource"},"glyph":{"id":"7d6b6d67-fd76-46ec-a43e-092fbbef43fc","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"079f7448-251d-47a1-be0c-40faf7c17110","type":"Segment"},"selection_glyph":null,"view":{"id":"1a22f95d-7308-4549-8d70-05ec598fa2b0","type":"CDSView"}},"id":"75c0541c-5907-4cb5-bfaf-0c10c35b9102","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3202456a-ef44-4a92-bfd9-278ff08c64bd","type":"ColumnDataSource"}},"id":"35bac1d1-c47d-41aa-b6ee-f5583458326a","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"6c79b687-ddf8-42e7-832e-3eed81da1b06","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a1086b5-95f8-4cb5-a0cb-62346459a654","type":"Circle"},{"attributes":{},"id":"0e9b1789-a5a7-4dd8-81be-ba8175761968","type":"Selection"},{"attributes":{"source":{"id":"256584db-98f8-4959-92f0-16de7c4e1c24","type":"ColumnDataSource"}},"id":"1a22f95d-7308-4549-8d70-05ec598fa2b0","type":"CDSView"},{"attributes":{},"id":"cca704d1-05de-428c-b502-db149c4c56f0","type":"Selection"},{"attributes":{"data_source":{"id":"53042eb3-7da7-4a0c-925e-eb916fc78695","type":"ColumnDataSource"},"glyph":{"id":"6c79b687-ddf8-42e7-832e-3eed81da1b06","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6bb5cfa8-cda3-4b8e-a085-fdd6b0c0e9df","type":"VBar"},"selection_glyph":null,"view":{"id":"f0857a88-92d5-4964-b712-070851897aaa","type":"CDSView"}},"id":"98f6bffd-f537-4558-9a8f-933eb805869e","type":"GlyphRenderer"}],"root_ids":["c98124a5-f237-4244-9004-5206a00629e3"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"1dd2c278-12d1-4a9f-b4eb-fb81a7e9dfd8","elementid":"dfb71b1f-1ee9-4b7c-a724-10b6bb37d44c","modelid":"c98124a5-f237-4244-9004-5206a00629e3"}];
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