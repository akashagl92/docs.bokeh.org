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
      };var element = document.getElementById("c3852190-185b-498a-a4e5-d2c1e3b91edc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c3852190-185b-498a-a4e5-d2c1e3b91edc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"caccbd92-07f3-4cda-a870-18c7a36dcda5":{"roots":{"references":[{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"4f2539e8-a66e-4af3-bd40-8547aa078ce9","type":"FactorRange"},{"attributes":{},"id":"932a27f6-2ad1-4149-974e-25621192a2b6","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ff70a21-55a8-4fb3-902e-8af92978a314","type":"Circle"},{"attributes":{},"id":"ca09fa36-1860-45aa-b610-d8f5828d9c97","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0bdeb39-1525-4984-a1de-0611df8a0377","type":"Circle"},{"attributes":{},"id":"22de68d6-2892-4a23-b541-92ca15db8770","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"x":["Alpha"],"y":["None"]},"selected":{"id":"50ddc3bd-5517-4b7c-a773-f3d9d9741389","type":"Selection"},"selection_policy":{"id":"4c738347-ec78-48e5-92b0-31afd70ddce9","type":"UnionRenderers"}},"id":"763409bf-f5a0-4783-ba1c-c2889936969d","type":"ColumnDataSource"},{"attributes":{},"id":"ffc746e1-32a4-4c95-9c93-faf1da6eb0dc","type":"CategoricalScale"},{"attributes":{"source":{"id":"25f118cc-54d9-4651-9dad-54b99cc18705","type":"ColumnDataSource"}},"id":"a4d3e534-ced3-4a7c-b26e-8b4c751d8b0d","type":"CDSView"},{"attributes":{"data_source":{"id":"0b468853-57ec-4af9-aad8-183b638691d0","type":"ColumnDataSource"},"glyph":{"id":"d0d4cebc-6ea5-459f-b9ca-133893250640","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f302ef2-ef83-45ed-bec0-9ac0a08cb4c5","type":"Circle"},"selection_glyph":null,"view":{"id":"54c114ab-d489-4022-9248-d899ff00ddeb","type":"CDSView"}},"id":"dba907a5-db74-4845-8005-55463bd4386f","type":"GlyphRenderer"},{"attributes":{},"id":"a9302bad-bbd4-4e4b-b138-4cf84e791d25","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":["None"],"y":["Alpha+RGB"]},"selected":{"id":"71789c6d-7bb7-470a-a768-2f8d192c0682","type":"Selection"},"selection_policy":{"id":"5a3d28e6-d97f-4db5-b73e-e03ba5e3e9ba","type":"UnionRenderers"}},"id":"cc45f371-67a4-4c46-8b19-fc450a9bf950","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f302ef2-ef83-45ed-bec0-9ac0a08cb4c5","type":"Circle"},{"attributes":{},"id":"f313f30a-6159-4af8-ac93-2d9954fb752f","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdf466ee-d6b8-4926-95c9-d0edf4b86944","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7e4a42f-c940-49f1-885c-4d10fdb8653d","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a1847ad8-0c28-41e4-83a0-eeed3408b7f5","type":"BoxAnnotation"},{"attributes":{"source":{"id":"cc45f371-67a4-4c46-8b19-fc450a9bf950","type":"ColumnDataSource"}},"id":"256d9ebb-1b0f-488e-8bc7-616d6170ad73","type":"CDSView"},{"attributes":{"data_source":{"id":"049acc06-0f9a-4b8c-b279-9fc005b4a009","type":"ColumnDataSource"},"glyph":{"id":"e11ac0e4-71f8-4bda-a634-97ea96d02d7a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"920f9d1e-f583-4892-a981-696b32bef23a","type":"Circle"},"selection_glyph":null,"view":{"id":"c078e491-7ee2-4e00-8746-01623b9bbf86","type":"CDSView"}},"id":"78133c61-02c1-4051-93bd-cb24d1707dc2","type":"GlyphRenderer"},{"attributes":{"source":{"id":"049acc06-0f9a-4b8c-b279-9fc005b4a009","type":"ColumnDataSource"}},"id":"c078e491-7ee2-4e00-8746-01623b9bbf86","type":"CDSView"},{"attributes":{"overlay":{"id":"a1847ad8-0c28-41e4-83a0-eeed3408b7f5","type":"BoxAnnotation"}},"id":"68579f98-c573-41ec-9960-2fef2328150f","type":"BoxZoomTool"},{"attributes":{},"id":"4dc74beb-f032-48a1-92b5-0bdbf9f36d45","type":"Selection"},{"attributes":{"source":{"id":"c8ca4690-796b-4579-92db-a5a63110bf05","type":"ColumnDataSource"}},"id":"90844ca7-8c7a-48db-8983-a867aeea5701","type":"CDSView"},{"attributes":{},"id":"e1b9b042-8ce3-472b-8063-575707021ee5","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":["None"],"y":["RGBA"]},"selected":{"id":"aba6ecee-f574-467b-aaa5-9f147fe8ed34","type":"Selection"},"selection_policy":{"id":"4198d68a-5a38-4517-b17a-1c2dc87944eb","type":"UnionRenderers"}},"id":"0b468853-57ec-4af9-aad8-183b638691d0","type":"ColumnDataSource"},{"attributes":{},"id":"50e83c67-4af8-4a22-b16d-9e332f9cf778","type":"Selection"},{"attributes":{},"id":"0490f49b-c32a-4128-be71-b1ea44e7c2ba","type":"UnionRenderers"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"7e4f4f30-62e2-48b2-9dec-d893b1a1b781","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdf69fa3-e79d-4189-8ff2-e36585e65924","type":"CategoricalTicker"}},"id":"eb3ccfae-6d01-44d8-990b-0b62bf0f4eec","type":"Grid"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"8548072d-c009-4294-bbf3-2a4bec22283c","type":"FactorRange"},{"attributes":{},"id":"523d69f5-8ee7-4884-9aa1-b89ffe0bd5c0","type":"UnionRenderers"},{"attributes":{},"id":"86f15876-fdeb-4667-9872-a82ee0b4df54","type":"Selection"},{"attributes":{"data_source":{"id":"c8ca4690-796b-4579-92db-a5a63110bf05","type":"ColumnDataSource"},"glyph":{"id":"e03baf3c-2116-4e52-b3bb-d76a3d16dd47","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ffe79d95-62ce-40ad-9c23-1c59c5136695","type":"Circle"},"selection_glyph":null,"view":{"id":"90844ca7-8c7a-48db-8983-a867aeea5701","type":"CDSView"}},"id":"47604383-5230-4b23-a9b7-61e8671942d6","type":"GlyphRenderer"},{"attributes":{},"id":"20b4cc6f-7c85-4035-bff7-789843aa327f","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"45e020dd-8ca5-4b58-b708-ac6028e4fb95","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGB"],"y":["Alpha+RGBA"]},"selected":{"id":"83b08dbc-6cca-4b73-90e9-2e0f833afe72","type":"Selection"},"selection_policy":{"id":"2defd00e-c64c-40a1-89f3-d093a9d90b24","type":"UnionRenderers"}},"id":"3a352b0c-e135-4c1d-9618-0ddffca7e570","type":"ColumnDataSource"},{"attributes":{},"id":"83b08dbc-6cca-4b73-90e9-2e0f833afe72","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffe79d95-62ce-40ad-9c23-1c59c5136695","type":"Circle"},{"attributes":{},"id":"3a6403cd-35ae-4b59-9f56-9491668d8cca","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d0d4cebc-6ea5-459f-b9ca-133893250640","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["None"],"y":["Alpha+RGBA"]},"selected":{"id":"de41bdb0-a172-4692-b210-61c0c2799640","type":"Selection"},"selection_policy":{"id":"a5590e58-b430-4374-8ef7-95cd55e46f7e","type":"UnionRenderers"}},"id":"9fb5a193-0eb5-4c1f-b1a1-391eca4e0c65","type":"ColumnDataSource"},{"attributes":{},"id":"fdf69fa3-e79d-4189-8ff2-e36585e65924","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"62fc7820-47f8-4013-bd65-2fa2f4dc9eb7","type":"Circle"},{"attributes":{"source":{"id":"bef2c6f5-948d-43a1-ace8-ed25dd1ec1de","type":"ColumnDataSource"}},"id":"295a44ab-236c-4bff-b08c-90801970f943","type":"CDSView"},{"attributes":{},"id":"0d7884c4-7d4b-45ed-a5d9-19abdc19a3f2","type":"SaveTool"},{"attributes":{},"id":"4a84ed55-b1be-41ed-8244-995f48c7ee9e","type":"CategoricalScale"},{"attributes":{"callback":null,"data":{"x":["None"],"y":["Alpha"]},"selected":{"id":"1a8a5525-56af-4c49-9ee5-a63a32727703","type":"Selection"},"selection_policy":{"id":"8252f3a8-8684-4242-9ecf-3fbefac61967","type":"UnionRenderers"}},"id":"25f118cc-54d9-4651-9dad-54b99cc18705","type":"ColumnDataSource"},{"attributes":{},"id":"a43a4332-390f-46cd-b513-94b6b4d0d9e4","type":"UnionRenderers"},{"attributes":{},"id":"dbd51dec-0e71-46fc-963a-239dc04196a3","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e43b5c3-1179-4a89-8971-9c5c1b5be818","type":"Circle"},{"attributes":{},"id":"b5a03e79-77bc-42f6-be16-b8314a330780","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"920f9d1e-f583-4892-a981-696b32bef23a","type":"Circle"},{"attributes":{},"id":"1418c7d1-8264-44e4-862f-3b4ae4826798","type":"Selection"},{"attributes":{"plot":null,"text":"Fill and Line Color Combinations"},"id":"75ce7172-b767-4f7c-b339-122e5c9c3046","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"09307a54-7224-4434-8315-9d3c98e6dcef","type":"Circle"},{"attributes":{"data_source":{"id":"25f118cc-54d9-4651-9dad-54b99cc18705","type":"ColumnDataSource"},"glyph":{"id":"45e020dd-8ca5-4b58-b708-ac6028e4fb95","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"09307a54-7224-4434-8315-9d3c98e6dcef","type":"Circle"},"selection_glyph":null,"view":{"id":"a4d3e534-ced3-4a7c-b26e-8b4c751d8b0d","type":"CDSView"}},"id":"c3086328-b454-4e73-b56a-ba01a518e7e5","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"20e8cf0f-e87e-4101-a111-082e72354b5e","type":"CategoricalAxis"}],"left":[{"id":"0d619850-92f4-476b-a06e-c390f4a1fe68","type":"CategoricalAxis"}],"renderers":[{"id":"20e8cf0f-e87e-4101-a111-082e72354b5e","type":"CategoricalAxis"},{"id":"c20b31d8-4b31-4fbe-b245-3a2363734bf8","type":"Grid"},{"id":"0d619850-92f4-476b-a06e-c390f4a1fe68","type":"CategoricalAxis"},{"id":"eb3ccfae-6d01-44d8-990b-0b62bf0f4eec","type":"Grid"},{"id":"a1847ad8-0c28-41e4-83a0-eeed3408b7f5","type":"BoxAnnotation"},{"id":"47604383-5230-4b23-a9b7-61e8671942d6","type":"GlyphRenderer"},{"id":"c3086328-b454-4e73-b56a-ba01a518e7e5","type":"GlyphRenderer"},{"id":"78133c61-02c1-4051-93bd-cb24d1707dc2","type":"GlyphRenderer"},{"id":"dba907a5-db74-4845-8005-55463bd4386f","type":"GlyphRenderer"},{"id":"8fa3959a-4d1f-48a5-a052-452ed33344d8","type":"GlyphRenderer"},{"id":"8808cad9-5fbd-40e8-bfa1-b16da3bf3ee8","type":"GlyphRenderer"},{"id":"5f1f0ec4-c2e0-4a2b-93c4-7e96a6f132c9","type":"GlyphRenderer"},{"id":"91cdb6c0-c24f-4ef7-9a7b-f2ed25895aed","type":"GlyphRenderer"},{"id":"34ff7010-ee78-414a-85a2-86b3e102fe9a","type":"GlyphRenderer"},{"id":"835190be-0534-494d-ab24-f0100f52808f","type":"GlyphRenderer"},{"id":"3663c6d3-44d2-4243-be11-2af57b66ab5f","type":"GlyphRenderer"},{"id":"98462c23-095b-43d4-a878-024d0e7de061","type":"GlyphRenderer"},{"id":"ec36594c-3752-46a1-a357-2de054538d49","type":"GlyphRenderer"},{"id":"cc8e3342-fab2-40b8-99b8-d93545de3e40","type":"GlyphRenderer"},{"id":"13ea4de3-ca64-416b-9524-5ff39dc331fd","type":"GlyphRenderer"},{"id":"205134ca-e1a9-4f69-b986-a52276c386ed","type":"GlyphRenderer"},{"id":"c401c668-d2f7-494f-8b0d-bafdb51f6f10","type":"GlyphRenderer"},{"id":"a20d166e-16be-4b18-bed0-cf138b32657d","type":"GlyphRenderer"},{"id":"5ecc201e-28ee-4e6e-ab82-5a279bcc5b06","type":"GlyphRenderer"},{"id":"d2aedb6a-5b29-47d3-aaaa-dd8d3defe40e","type":"GlyphRenderer"},{"id":"ff677558-43ef-4633-9b90-ff6a998f15f7","type":"GlyphRenderer"},{"id":"7a745c0b-2c38-4833-bdf8-02564296df51","type":"GlyphRenderer"},{"id":"13b63504-0592-4219-8b7b-db5afdb7c450","type":"GlyphRenderer"},{"id":"6ffcf00a-0187-41c7-a6cd-e56ec4bf0707","type":"GlyphRenderer"},{"id":"f4109af4-12a5-4a96-92da-d8c0e25e0280","type":"GlyphRenderer"},{"id":"e643fd3e-08a4-450d-a47b-4831ccdb35da","type":"GlyphRenderer"},{"id":"853f8e47-5959-4117-aecf-b90a496a1e65","type":"GlyphRenderer"},{"id":"8b1c91e0-537d-468d-be3d-99efd225174d","type":"GlyphRenderer"},{"id":"d6790ee5-75ad-4080-9900-9a351dcecf2d","type":"GlyphRenderer"},{"id":"569f459a-4e36-4408-9e1b-58af1ca72e37","type":"GlyphRenderer"},{"id":"666e835e-58bd-4af9-bf95-ad83755fc42d","type":"GlyphRenderer"},{"id":"1f199b31-21b7-4f56-814b-859fc6cb0e6c","type":"GlyphRenderer"},{"id":"a1565fe5-1a19-40cc-b69d-c90efb0d8701","type":"GlyphRenderer"},{"id":"af60f948-9e32-448d-beae-ffdfd763b968","type":"GlyphRenderer"},{"id":"5312bc90-5d9b-4e77-b354-f39041e0568d","type":"GlyphRenderer"},{"id":"2cadcc37-bb22-4fe8-bc16-90ad0ba31a8c","type":"GlyphRenderer"}],"title":{"id":"75ce7172-b767-4f7c-b339-122e5c9c3046","type":"Title"},"toolbar":{"id":"c6d43eff-d3b3-4177-af73-e729b4aa4350","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4f2539e8-a66e-4af3-bd40-8547aa078ce9","type":"FactorRange"},"x_scale":{"id":"4a84ed55-b1be-41ed-8244-995f48c7ee9e","type":"CategoricalScale"},"y_range":{"id":"8548072d-c009-4294-bbf3-2a4bec22283c","type":"FactorRange"},"y_scale":{"id":"ffc746e1-32a4-4c95-9c93-faf1da6eb0dc","type":"CategoricalScale"}},"id":"7e4f4f30-62e2-48b2-9dec-d893b1a1b781","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e03baf3c-2116-4e52-b3bb-d76a3d16dd47","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e11ac0e4-71f8-4bda-a634-97ea96d02d7a","type":"Circle"},{"attributes":{"data_source":{"id":"9fb5a193-0eb5-4c1f-b1a1-391eca4e0c65","type":"ColumnDataSource"},"glyph":{"id":"cd5f7744-c8d4-4391-997e-6194d153d05c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2c077b10-0c5e-4dae-8cae-d33def9dd6b8","type":"Circle"},"selection_glyph":null,"view":{"id":"7106023b-3a9a-4908-a99f-14de03cba2fa","type":"CDSView"}},"id":"8808cad9-5fbd-40e8-bfa1-b16da3bf3ee8","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5a03e79-77bc-42f6-be16-b8314a330780","type":"PanTool"},{"id":"dbd51dec-0e71-46fc-963a-239dc04196a3","type":"WheelZoomTool"},{"id":"68579f98-c573-41ec-9960-2fef2328150f","type":"BoxZoomTool"},{"id":"0d7884c4-7d4b-45ed-a5d9-19abdc19a3f2","type":"SaveTool"},{"id":"a9302bad-bbd4-4e4b-b138-4cf84e791d25","type":"ResetTool"},{"id":"24e43516-95b7-458b-a131-8158c444126b","type":"HelpTool"}]},"id":"c6d43eff-d3b3-4177-af73-e729b4aa4350","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":["None"],"y":["RGB"]},"selected":{"id":"b30b073a-4c7b-47c5-aead-462d7eaa228d","type":"Selection"},"selection_policy":{"id":"5145224c-b8f7-4f31-9555-66f9996d836f","type":"UnionRenderers"}},"id":"049acc06-0f9a-4b8c-b279-9fc005b4a009","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe4a5f12-49c4-4c4e-8bc8-75471b948f11","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c077b10-0c5e-4dae-8cae-d33def9dd6b8","type":"Circle"},{"attributes":{"source":{"id":"763409bf-f5a0-4783-ba1c-c2889936969d","type":"ColumnDataSource"}},"id":"037bb4b3-ef6f-4ce0-b169-fd38735ccf6a","type":"CDSView"},{"attributes":{"source":{"id":"9fb5a193-0eb5-4c1f-b1a1-391eca4e0c65","type":"ColumnDataSource"}},"id":"7106023b-3a9a-4908-a99f-14de03cba2fa","type":"CDSView"},{"attributes":{"data_source":{"id":"584dfb88-b6b2-4463-aba2-0f149ea10115","type":"ColumnDataSource"},"glyph":{"id":"fe4a5f12-49c4-4c4e-8bc8-75471b948f11","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8ff70a21-55a8-4fb3-902e-8af92978a314","type":"Circle"},"selection_glyph":null,"view":{"id":"54092203-3159-4d0b-96f7-d5d44a17ebe1","type":"CDSView"}},"id":"91cdb6c0-c24f-4ef7-9a7b-f2ed25895aed","type":"GlyphRenderer"},{"attributes":{"axis_label":"Line Options","formatter":{"id":"474461a2-c425-459b-af24-200b9195b285","type":"CategoricalTickFormatter"},"plot":{"id":"7e4f4f30-62e2-48b2-9dec-d893b1a1b781","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdf69fa3-e79d-4189-8ff2-e36585e65924","type":"CategoricalTicker"}},"id":"0d619850-92f4-476b-a06e-c390f4a1fe68","type":"CategoricalAxis"},{"attributes":{"axis_label":"Fill Options","formatter":{"id":"b61cda4e-7a1b-4520-a5f6-524e5ea17b59","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"7e4f4f30-62e2-48b2-9dec-d893b1a1b781","subtype":"Figure","type":"Plot"},"ticker":{"id":"22de68d6-2892-4a23-b541-92ca15db8770","type":"CategoricalTicker"}},"id":"20e8cf0f-e87e-4101-a111-082e72354b5e","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"55ac959b-9db1-43dd-a623-94bb95db8234","type":"Circle"},{"attributes":{},"id":"2defd00e-c64c-40a1-89f3-d093a9d90b24","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"7e4f4f30-62e2-48b2-9dec-d893b1a1b781","subtype":"Figure","type":"Plot"},"ticker":{"id":"22de68d6-2892-4a23-b541-92ca15db8770","type":"CategoricalTicker"}},"id":"c20b31d8-4b31-4fbe-b245-3a2363734bf8","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b73713d8-ddb8-4902-a1eb-22ecba1f4357","type":"Circle"},{"attributes":{"data_source":{"id":"763409bf-f5a0-4783-ba1c-c2889936969d","type":"ColumnDataSource"},"glyph":{"id":"55ac959b-9db1-43dd-a623-94bb95db8234","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b0bdeb39-1525-4984-a1de-0611df8a0377","type":"Circle"},"selection_glyph":null,"view":{"id":"037bb4b3-ef6f-4ce0-b169-fd38735ccf6a","type":"CDSView"}},"id":"5f1f0ec4-c2e0-4a2b-93c4-7e96a6f132c9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"37169104-e10a-42fb-bb2d-7bbf4be83ebc","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["Alpha"],"y":["Alpha"]},"selected":{"id":"a852f4ac-b2e1-4bcd-9e4f-f1141f67d0d3","type":"Selection"},"selection_policy":{"id":"c4d324d1-1b9d-41c7-9984-eaa286814c09","type":"UnionRenderers"}},"id":"584dfb88-b6b2-4463-aba2-0f149ea10115","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd5f7744-c8d4-4391-997e-6194d153d05c","type":"Circle"},{"attributes":{"data_source":{"id":"cc45f371-67a4-4c46-8b19-fc450a9bf950","type":"ColumnDataSource"},"glyph":{"id":"cdf466ee-d6b8-4926-95c9-d0edf4b86944","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b73713d8-ddb8-4902-a1eb-22ecba1f4357","type":"Circle"},"selection_glyph":null,"view":{"id":"256d9ebb-1b0f-488e-8bc7-616d6170ad73","type":"CDSView"}},"id":"8fa3959a-4d1f-48a5-a052-452ed33344d8","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["None"],"y":["None"]},"selected":{"id":"fbc5e893-70ca-48c3-bbfe-ddf1173f7d0e","type":"Selection"},"selection_policy":{"id":"273eff83-7748-44cb-a02e-2ee3f7424151","type":"UnionRenderers"}},"id":"c8ca4690-796b-4579-92db-a5a63110bf05","type":"ColumnDataSource"},{"attributes":{"source":{"id":"0b468853-57ec-4af9-aad8-183b638691d0","type":"ColumnDataSource"}},"id":"54c114ab-d489-4022-9248-d899ff00ddeb","type":"CDSView"},{"attributes":{},"id":"fce37bfd-99a8-40e7-8b85-062d35ff89c4","type":"Selection"},{"attributes":{},"id":"245ddb20-6fd0-4ed0-bb0a-d5f272e863ea","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGB"],"y":["Alpha+RGB"]},"selected":{"id":"3a6403cd-35ae-4b59-9f56-9491668d8cca","type":"Selection"},"selection_policy":{"id":"e1b9b042-8ce3-472b-8063-575707021ee5","type":"UnionRenderers"}},"id":"bef2c6f5-948d-43a1-ace8-ed25dd1ec1de","type":"ColumnDataSource"},{"attributes":{},"id":"24e43516-95b7-458b-a131-8158c444126b","type":"HelpTool"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"99b04167-adba-4098-8131-e001051f265b","type":"Circle"},{"attributes":{"source":{"id":"e2c98955-1299-47ab-ad3b-b7e2c16f63c1","type":"ColumnDataSource"}},"id":"3c6ec1dc-2cd1-46b0-ad98-edd00bfcc50d","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["RGBA"],"y":["None"]},"selected":{"id":"aeb89548-19b5-4dd5-9c00-13b277f8b73a","type":"Selection"},"selection_policy":{"id":"11794c3a-7a25-434a-9f6e-70b9a6879b38","type":"UnionRenderers"}},"id":"cfb125eb-d2cc-4e02-9a63-ed9066946d13","type":"ColumnDataSource"},{"attributes":{"source":{"id":"cfb125eb-d2cc-4e02-9a63-ed9066946d13","type":"ColumnDataSource"}},"id":"276c5ae0-2daa-4b50-a590-2e696c7d881c","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d9f1dce-11d2-453e-a5a2-7b1454da826b","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["RGBA"],"y":["RGB"]},"selected":{"id":"5ba6a49f-b14f-4118-8c8a-7dcac9101f2c","type":"Selection"},"selection_policy":{"id":"ec6feba6-9b4c-48c6-beda-c0f1b4db33cd","type":"UnionRenderers"}},"id":"7953e40d-d8ee-48c0-8b93-e41074a65db2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3d2ebf90-d64c-4dae-a27d-94b30b89aa96","type":"ColumnDataSource"},"glyph":{"id":"59ce73fd-4e2a-4c55-a544-a51312ed1ecb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6d192ce1-abc4-469c-9bf2-a2e571a2da22","type":"Circle"},"selection_glyph":null,"view":{"id":"a34e37ab-ff34-4b28-bad0-f4a33e0c38b8","type":"CDSView"}},"id":"d2aedb6a-5b29-47d3-aaaa-dd8d3defe40e","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"59ce73fd-4e2a-4c55-a544-a51312ed1ecb","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d192ce1-abc4-469c-9bf2-a2e571a2da22","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["RGBA"],"y":["Alpha"]},"selected":{"id":"06ba4b16-6154-4810-8bee-cc5a1c9385ce","type":"Selection"},"selection_policy":{"id":"601c265f-30ce-4443-abd4-d8bf7d3c5b6d","type":"UnionRenderers"}},"id":"3d2ebf90-d64c-4dae-a27d-94b30b89aa96","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3d2ebf90-d64c-4dae-a27d-94b30b89aa96","type":"ColumnDataSource"}},"id":"a34e37ab-ff34-4b28-bad0-f4a33e0c38b8","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e03e3eea-4b5e-49ab-9040-0bb49acc90ce","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd1e63e6-fa9d-455f-a13b-5b510bd6a0d0","type":"Circle"},{"attributes":{"data_source":{"id":"7953e40d-d8ee-48c0-8b93-e41074a65db2","type":"ColumnDataSource"},"glyph":{"id":"596ace52-9607-4e0a-899e-9955e97e080e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd1e63e6-fa9d-455f-a13b-5b510bd6a0d0","type":"Circle"},"selection_glyph":null,"view":{"id":"ba8b847b-c966-40c3-8b67-2bb3c63858ca","type":"CDSView"}},"id":"ff677558-43ef-4633-9b90-ff6a998f15f7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e2c98955-1299-47ab-ad3b-b7e2c16f63c1","type":"ColumnDataSource"},"glyph":{"id":"99b04167-adba-4098-8131-e001051f265b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e03e3eea-4b5e-49ab-9040-0bb49acc90ce","type":"Circle"},"selection_glyph":null,"view":{"id":"3c6ec1dc-2cd1-46b0-ad98-edd00bfcc50d","type":"CDSView"}},"id":"a20d166e-16be-4b18-bed0-cf138b32657d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cfb125eb-d2cc-4e02-9a63-ed9066946d13","type":"ColumnDataSource"},"glyph":{"id":"0738e3b6-161b-4b24-b886-ae74e9c94ce5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0d9f1dce-11d2-453e-a5a2-7b1454da826b","type":"Circle"},"selection_glyph":null,"view":{"id":"276c5ae0-2daa-4b50-a590-2e696c7d881c","type":"CDSView"}},"id":"5ecc201e-28ee-4e6e-ab82-5a279bcc5b06","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0738e3b6-161b-4b24-b886-ae74e9c94ce5","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"596ace52-9607-4e0a-899e-9955e97e080e","type":"Circle"},{"attributes":{},"id":"6b3c7913-e29f-450b-8d60-498a832ec22f","type":"UnionRenderers"},{"attributes":{},"id":"ee5b33ac-4c65-4694-8647-6c4998f58909","type":"Selection"},{"attributes":{},"id":"a11dc718-4fb9-473f-9a0e-1300423b762c","type":"UnionRenderers"},{"attributes":{},"id":"b2539516-ec20-4b00-b20f-fada3bcdfb41","type":"UnionRenderers"},{"attributes":{},"id":"8225bebf-5d1f-4485-a72b-7efea244f42f","type":"Selection"},{"attributes":{},"id":"8252f3a8-8684-4242-9ecf-3fbefac61967","type":"UnionRenderers"},{"attributes":{},"id":"eaddd014-4f71-480e-9b9b-84162acb868c","type":"UnionRenderers"},{"attributes":{},"id":"49915ff2-ff52-46e3-bbcd-c5a6a95a5e5c","type":"UnionRenderers"},{"attributes":{},"id":"137c7e9e-4b2d-4e37-a2b9-42575ca413f8","type":"Selection"},{"attributes":{},"id":"601c265f-30ce-4443-abd4-d8bf7d3c5b6d","type":"UnionRenderers"},{"attributes":{},"id":"de41bdb0-a172-4692-b210-61c0c2799640","type":"Selection"},{"attributes":{},"id":"c7300940-a49d-4b8c-9784-1a4a0b25bbab","type":"Selection"},{"attributes":{},"id":"fbc5e893-70ca-48c3-bbfe-ddf1173f7d0e","type":"Selection"},{"attributes":{},"id":"5651ab13-2c79-4264-95bc-e6a02ccd978b","type":"Selection"},{"attributes":{},"id":"a5590e58-b430-4374-8ef7-95cd55e46f7e","type":"UnionRenderers"},{"attributes":{},"id":"6d13dd0e-a091-4713-a2b5-9c7a98e7531d","type":"Selection"},{"attributes":{},"id":"b61cda4e-7a1b-4520-a5f6-524e5ea17b59","type":"CategoricalTickFormatter"},{"attributes":{},"id":"143b721e-dd09-424b-b3a3-54bab383edaf","type":"Selection"},{"attributes":{},"id":"7ee8a746-5117-417e-aef8-fddaa90372dd","type":"UnionRenderers"},{"attributes":{},"id":"a5a5508a-c680-450e-9844-bdd38187c588","type":"UnionRenderers"},{"attributes":{"source":{"id":"3a352b0c-e135-4c1d-9618-0ddffca7e570","type":"ColumnDataSource"}},"id":"14664272-4445-4459-8460-ebb47faab8fc","type":"CDSView"},{"attributes":{},"id":"bf8cc4af-3e31-432e-abde-c0613f2b3101","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGBA"],"y":["Alpha"]},"selected":{"id":"5651ab13-2c79-4264-95bc-e6a02ccd978b","type":"Selection"},"selection_policy":{"id":"bf8cc4af-3e31-432e-abde-c0613f2b3101","type":"UnionRenderers"}},"id":"c6bc25d9-0f5f-4cce-ac84-980c5b401430","type":"ColumnDataSource"},{"attributes":{},"id":"4d661d6a-61f2-496f-a8f3-adf066a76ed6","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1f2203b-2a9d-42bc-9ec9-cd6952816c0d","type":"Circle"},{"attributes":{},"id":"34c715cf-0b24-4296-a7b7-f0493ad14ca2","type":"Selection"},{"attributes":{},"id":"0b034909-3015-4e6b-b540-1990fbaa887b","type":"UnionRenderers"},{"attributes":{},"id":"f570d4e5-c77c-4314-b0d6-b868e680dd7f","type":"Selection"},{"attributes":{"data_source":{"id":"3a352b0c-e135-4c1d-9618-0ddffca7e570","type":"ColumnDataSource"},"glyph":{"id":"62fc7820-47f8-4013-bd65-2fa2f4dc9eb7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cfb822bf-1e0a-488d-98eb-e0b1a8613249","type":"Circle"},"selection_glyph":null,"view":{"id":"14664272-4445-4459-8460-ebb47faab8fc","type":"CDSView"}},"id":"569f459a-4e36-4408-9e1b-58af1ca72e37","type":"GlyphRenderer"},{"attributes":{},"id":"81169750-d9a2-436d-99fd-7f018a0745cf","type":"Selection"},{"attributes":{},"id":"71789c6d-7bb7-470a-a768-2f8d192c0682","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"cfb822bf-1e0a-488d-98eb-e0b1a8613249","type":"Circle"},{"attributes":{},"id":"5145224c-b8f7-4f31-9555-66f9996d836f","type":"UnionRenderers"},{"attributes":{},"id":"4c738347-ec78-48e5-92b0-31afd70ddce9","type":"UnionRenderers"},{"attributes":{},"id":"50ddc3bd-5517-4b7c-a773-f3d9d9741389","type":"Selection"},{"attributes":{},"id":"371d00db-0610-407a-9db7-bf79ded89790","type":"UnionRenderers"},{"attributes":{},"id":"06ba4b16-6154-4810-8bee-cc5a1c9385ce","type":"Selection"},{"attributes":{},"id":"f608d826-d552-4ae3-a809-457b1ad2f6fc","type":"Selection"},{"attributes":{},"id":"c4d324d1-1b9d-41c7-9984-eaa286814c09","type":"UnionRenderers"},{"attributes":{},"id":"5a3d28e6-d97f-4db5-b73e-e03ba5e3e9ba","type":"UnionRenderers"},{"attributes":{},"id":"6faa51ec-da0b-4a9a-9bc5-b2c88cd10e15","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"67c13d36-edb0-414b-86db-f85acbee964c","type":"Circle"},{"attributes":{},"id":"e0deed51-7b63-4c46-bf90-9a593d8797bd","type":"UnionRenderers"},{"attributes":{},"id":"9c3ba200-329f-4f9f-84a7-f640daf66213","type":"Selection"},{"attributes":{},"id":"b89cc905-9dac-41af-a12d-619a89ad89d5","type":"UnionRenderers"},{"attributes":{},"id":"963d59bd-788a-4c38-9fb3-ec77c45305b3","type":"Selection"},{"attributes":{},"id":"aba6ecee-f574-467b-aaa5-9f147fe8ed34","type":"Selection"},{"attributes":{},"id":"7502baa3-f6bd-46ff-8c10-1cbd2915dbe6","type":"UnionRenderers"},{"attributes":{},"id":"058294f7-50b3-4bdb-a90f-27d760c97832","type":"Selection"},{"attributes":{},"id":"273eff83-7748-44cb-a02e-2ee3f7424151","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"364aed3c-c47b-4f7d-b499-9f2a25417040","type":"ColumnDataSource"},"glyph":{"id":"3ed82e15-2074-4468-a6a3-97ba47683254","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1f2203b-2a9d-42bc-9ec9-cd6952816c0d","type":"Circle"},"selection_glyph":null,"view":{"id":"07a1e0a0-eb80-4e4b-a3d9-4fdf8bdadeeb","type":"CDSView"}},"id":"666e835e-58bd-4af9-bf95-ad83755fc42d","type":"GlyphRenderer"},{"attributes":{},"id":"11794c3a-7a25-434a-9f6e-70b9a6879b38","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"dff9a4d0-66cd-4518-a368-2e1216542ec5","type":"Circle"},{"attributes":{"source":{"id":"364aed3c-c47b-4f7d-b499-9f2a25417040","type":"ColumnDataSource"}},"id":"07a1e0a0-eb80-4e4b-a3d9-4fdf8bdadeeb","type":"CDSView"},{"attributes":{},"id":"5ba6a49f-b14f-4118-8c8a-7dcac9101f2c","type":"Selection"},{"attributes":{},"id":"4198d68a-5a38-4517-b17a-1c2dc87944eb","type":"UnionRenderers"},{"attributes":{},"id":"9dcf01bc-2f57-4007-a795-f3651834f7b0","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ed82e15-2074-4468-a6a3-97ba47683254","type":"Circle"},{"attributes":{},"id":"1a8a5525-56af-4c49-9ee5-a63a32727703","type":"Selection"},{"attributes":{},"id":"fa31a8b4-13ee-4ca5-94ab-2a275cb7b8ae","type":"Selection"},{"attributes":{"data_source":{"id":"c6bc25d9-0f5f-4cce-ac84-980c5b401430","type":"ColumnDataSource"},"glyph":{"id":"dff9a4d0-66cd-4518-a368-2e1216542ec5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67c13d36-edb0-414b-86db-f85acbee964c","type":"Circle"},"selection_glyph":null,"view":{"id":"2436b2e6-6e29-4686-979c-6dc5d9adf7b7","type":"CDSView"}},"id":"1f199b31-21b7-4f56-814b-859fc6cb0e6c","type":"GlyphRenderer"},{"attributes":{},"id":"ec6feba6-9b4c-48c6-beda-c0f1b4db33cd","type":"UnionRenderers"},{"attributes":{},"id":"b30b073a-4c7b-47c5-aead-462d7eaa228d","type":"Selection"},{"attributes":{},"id":"7bb0821c-cacf-4d0b-9563-dd5313c108af","type":"UnionRenderers"},{"attributes":{"source":{"id":"20498d3b-d19a-4b56-bb1e-7803bd3fb206","type":"ColumnDataSource"}},"id":"62348d96-ddaa-4bba-8f19-34d719e33542","type":"CDSView"},{"attributes":{},"id":"aeb89548-19b5-4dd5-9c00-13b277f8b73a","type":"Selection"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGBA"],"y":["None"]},"selected":{"id":"f608d826-d552-4ae3-a809-457b1ad2f6fc","type":"Selection"},"selection_policy":{"id":"6b3c7913-e29f-450b-8d60-498a832ec22f","type":"UnionRenderers"}},"id":"364aed3c-c47b-4f7d-b499-9f2a25417040","type":"ColumnDataSource"},{"attributes":{},"id":"80450bd5-1f00-45dd-9dab-d0a998ead955","type":"Selection"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e4a2ff3-d554-428b-9804-c223083f568f","type":"Circle"},{"attributes":{},"id":"a852f4ac-b2e1-4bcd-9e4f-f1141f67d0d3","type":"Selection"},{"attributes":{},"id":"474461a2-c425-459b-af24-200b9195b285","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1460e215-9903-4c0f-a0fd-8868320492e6","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"abbd9615-2382-4335-a053-194822e32ba6","type":"Circle"},{"attributes":{"source":{"id":"0c18707f-fa97-4dee-b48c-95800b58ff19","type":"ColumnDataSource"}},"id":"1707f226-707f-48fb-8440-573e56ad7dcf","type":"CDSView"},{"attributes":{"source":{"id":"c6bc25d9-0f5f-4cce-ac84-980c5b401430","type":"ColumnDataSource"}},"id":"2436b2e6-6e29-4686-979c-6dc5d9adf7b7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"947a651e-e205-4bdb-a15b-3eccee8289a9","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f826938c-c987-4d72-a87b-b4ab8d0ac80c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7eead9e1-69f4-4fa8-aea4-7cde422965d3","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["RGBA"],"y":["Alpha+RGB"]},"selected":{"id":"ee5b33ac-4c65-4694-8647-6c4998f58909","type":"Selection"},"selection_policy":{"id":"4d661d6a-61f2-496f-a8f3-adf066a76ed6","type":"UnionRenderers"}},"id":"5df5974c-5815-42e8-9812-79378354e9bc","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ba9c6fa3-54cb-4fd9-a2e1-a8d4027a2cc0","type":"ColumnDataSource"}},"id":"17007a5e-9546-4e1e-a62d-c0a84e23c126","type":"CDSView"},{"attributes":{"data_source":{"id":"afe49815-7a40-48fa-8d37-67b1732d94b9","type":"ColumnDataSource"},"glyph":{"id":"340820cd-fcdb-4936-b78a-da4cf73629fc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"947a651e-e205-4bdb-a15b-3eccee8289a9","type":"Circle"},"selection_glyph":null,"view":{"id":"19362c8b-67d5-42b1-8ed9-70457030c55b","type":"CDSView"}},"id":"13ea4de3-ca64-416b-9524-5ff39dc331fd","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9f45b32b-8412-4c69-a740-f7f7127eb9fe","type":"ColumnDataSource"}},"id":"b7e8deca-7006-4939-871c-2fa6b018d0b5","type":"CDSView"},{"attributes":{"source":{"id":"52797a60-98f3-41ce-9290-e50d2beaa99f","type":"ColumnDataSource"}},"id":"b7db6afb-30b2-4de6-9d89-99ef42a8a19b","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["RGB"],"y":["RGBA"]},"selected":{"id":"143b721e-dd09-424b-b3a3-54bab383edaf","type":"Selection"},"selection_policy":{"id":"6faa51ec-da0b-4a9a-9bc5-b2c88cd10e15","type":"UnionRenderers"}},"id":"077971bb-307b-460c-ab59-0f9b647cae1d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e5fb343-a63c-4647-9c93-9858cfc581d2","type":"Circle"},{"attributes":{"data_source":{"id":"20498d3b-d19a-4b56-bb1e-7803bd3fb206","type":"ColumnDataSource"},"glyph":{"id":"8e5fb343-a63c-4647-9c93-9858cfc581d2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2b9c83c1-05d8-46fd-83cd-45799f39c224","type":"Circle"},"selection_glyph":null,"view":{"id":"62348d96-ddaa-4bba-8f19-34d719e33542","type":"CDSView"}},"id":"2cadcc37-bb22-4fe8-bc16-90ad0ba31a8c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bbde8ac1-5bb9-4358-87f5-5b45228a8004","type":"ColumnDataSource"}},"id":"90ed4724-96b3-4305-a711-25cfbf421af7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2715ad7e-bc25-4431-8159-012951c5a2c7","type":"Circle"},{"attributes":{"data_source":{"id":"077971bb-307b-460c-ab59-0f9b647cae1d","type":"ColumnDataSource"},"glyph":{"id":"f1441b6c-9677-49e9-af84-7f48a768554a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2bca5d49-a6ee-4e0b-973c-d94d9e9302b0","type":"Circle"},"selection_glyph":null,"view":{"id":"fdbe4b82-1199-4468-83b7-4c49f0cf867b","type":"CDSView"}},"id":"205134ca-e1a9-4f69-b986-a52276c386ed","type":"GlyphRenderer"},{"attributes":{"source":{"id":"81a4e174-b163-4e8b-b068-866e852ce68c","type":"ColumnDataSource"}},"id":"4ee9254c-162d-497d-9eff-71e7a576ae1b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7272d537-a773-406a-af2f-4840c77332c9","type":"Circle"},{"attributes":{"data_source":{"id":"43497d37-823d-4dbe-8ecf-5e4bc8fdbd94","type":"ColumnDataSource"},"glyph":{"id":"63575d28-1371-4bc0-a063-ed45e98c2fdf","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2715ad7e-bc25-4431-8159-012951c5a2c7","type":"Circle"},"selection_glyph":null,"view":{"id":"a80d7ab8-90ea-43d4-94fb-278a52cbced0","type":"CDSView"}},"id":"c401c668-d2f7-494f-8b0d-bafdb51f6f10","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGB"]},"selected":{"id":"fce37bfd-99a8-40e7-8b85-062d35ff89c4","type":"Selection"},"selection_policy":{"id":"932a27f6-2ad1-4149-974e-25621192a2b6","type":"UnionRenderers"}},"id":"81a4e174-b163-4e8b-b068-866e852ce68c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"52797a60-98f3-41ce-9290-e50d2beaa99f","type":"ColumnDataSource"},"glyph":{"id":"1460e215-9903-4c0f-a0fd-8868320492e6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95a74518-47de-44f1-96df-b031c2ceb8a4","type":"Circle"},"selection_glyph":null,"view":{"id":"b7db6afb-30b2-4de6-9d89-99ef42a8a19b","type":"CDSView"}},"id":"af60f948-9e32-448d-beae-ffdfd763b968","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b0cf8be3-518e-4a08-b4f8-5b299484145d","type":"ColumnDataSource"}},"id":"7639118f-6d92-434c-b078-fabfb7a4732c","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"34da9621-66e6-4a62-b9cc-0b98af57c34f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"176e4c5d-f761-4099-b739-d1665919a0a2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"179078ef-5b9c-44fd-a789-1716cf9f14f6","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3bbac346-ff31-4ec8-a283-2581409cb929","type":"Circle"},{"attributes":{"data_source":{"id":"c3d75474-062d-454e-ba89-b762a795daff","type":"ColumnDataSource"},"glyph":{"id":"2fa25280-919d-4cce-b2e4-8244839fe734","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3bbac346-ff31-4ec8-a283-2581409cb929","type":"Circle"},"selection_glyph":null,"view":{"id":"a40e0926-3214-4eda-ae8f-26bd4a715f6a","type":"CDSView"}},"id":"3663c6d3-44d2-4243-be11-2af57b66ab5f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bef2c6f5-948d-43a1-ace8-ed25dd1ec1de","type":"ColumnDataSource"},"glyph":{"id":"37169104-e10a-42fb-bb2d-7bbf4be83ebc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9e43b5c3-1179-4a89-8971-9c5c1b5be818","type":"Circle"},"selection_glyph":null,"view":{"id":"295a44ab-236c-4bff-b08c-90801970f943","type":"CDSView"}},"id":"d6790ee5-75ad-4080-9900-9a351dcecf2d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"afe49815-7a40-48fa-8d37-67b1732d94b9","type":"ColumnDataSource"}},"id":"19362c8b-67d5-42b1-8ed9-70457030c55b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b9c83c1-05d8-46fd-83cd-45799f39c224","type":"Circle"},{"attributes":{"data_source":{"id":"9f45b32b-8412-4c69-a740-f7f7127eb9fe","type":"ColumnDataSource"},"glyph":{"id":"4f9e8003-12c7-42c1-9606-20214bc1d686","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3d8bf41-9be9-48a1-ab99-ab08bb8acbbe","type":"Circle"},"selection_glyph":null,"view":{"id":"b7e8deca-7006-4939-871c-2fa6b018d0b5","type":"CDSView"}},"id":"f4109af4-12a5-4a96-92da-d8c0e25e0280","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c56d5e71-b165-477b-9722-950242e75948","type":"ColumnDataSource"}},"id":"346fb171-108c-4d29-a19e-4e8f41d212ba","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2bca5d49-a6ee-4e0b-973c-d94d9e9302b0","type":"Circle"},{"attributes":{"source":{"id":"7953e40d-d8ee-48c0-8b93-e41074a65db2","type":"ColumnDataSource"}},"id":"ba8b847b-c966-40c3-8b67-2bb3c63858ca","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGB"],"y":["RGB"]},"selected":{"id":"4dc74beb-f032-48a1-92b5-0bdbf9f36d45","type":"Selection"},"selection_policy":{"id":"523d69f5-8ee7-4884-9aa1-b89ffe0bd5c0","type":"UnionRenderers"}},"id":"beffd806-1d1c-44da-8732-2200de3be234","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"81a4e174-b163-4e8b-b068-866e852ce68c","type":"ColumnDataSource"},"glyph":{"id":"1eaf8c70-484e-4926-92ef-946c3319e4a0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"179078ef-5b9c-44fd-a789-1716cf9f14f6","type":"Circle"},"selection_glyph":null,"view":{"id":"4ee9254c-162d-497d-9eff-71e7a576ae1b","type":"CDSView"}},"id":"5312bc90-5d9b-4e77-b354-f39041e0568d","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2172744-1bbc-4aa0-bb01-42305a8f17ce","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"63575d28-1371-4bc0-a063-ed45e98c2fdf","type":"Circle"},{"attributes":{"data_source":{"id":"5df5974c-5815-42e8-9812-79378354e9bc","type":"ColumnDataSource"},"glyph":{"id":"8f4a307b-4398-49b1-8317-3bcf5a785cea","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14cc4f60-f0cd-44c7-aaf0-11370009dbd2","type":"Circle"},"selection_glyph":null,"view":{"id":"4c606ba4-493b-43d4-aee8-e687a73334fe","type":"CDSView"}},"id":"13b63504-0592-4219-8b7b-db5afdb7c450","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f41e5f14-c748-47ea-9e5c-1dcb8e3641c8","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"340820cd-fcdb-4936-b78a-da4cf73629fc","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9a81504-c60e-42b0-8a39-a849628e9f02","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGB"],"y":["None"]},"selected":{"id":"50e83c67-4af8-4a22-b16d-9e332f9cf778","type":"Selection"},"selection_policy":{"id":"eaddd014-4f71-480e-9b9b-84162acb868c","type":"UnionRenderers"}},"id":"9f45b32b-8412-4c69-a740-f7f7127eb9fe","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":["Alpha"],"y":["RGBA"]},"selected":{"id":"81169750-d9a2-436d-99fd-7f018a0745cf","type":"Selection"},"selection_policy":{"id":"9dcf01bc-2f57-4007-a795-f3651834f7b0","type":"UnionRenderers"}},"id":"57c38061-e821-4347-82e1-d5831eec6177","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3d8bf41-9be9-48a1-ab99-ab08bb8acbbe","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1eaf8c70-484e-4926-92ef-946c3319e4a0","type":"Circle"},{"attributes":{"data_source":{"id":"bbde8ac1-5bb9-4358-87f5-5b45228a8004","type":"ColumnDataSource"},"glyph":{"id":"7eead9e1-69f4-4fa8-aea4-7cde422965d3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4acf511a-3603-40ed-b27a-c81a88fa6cc4","type":"Circle"},"selection_glyph":null,"view":{"id":"90ed4724-96b3-4305-a711-25cfbf421af7","type":"CDSView"}},"id":"a1565fe5-1a19-40cc-b69d-c90efb0d8701","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"da465c78-cbc9-4489-91a2-2d957b0bb1bb","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f9e8003-12c7-42c1-9606-20214bc1d686","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["RGB"],"y":["Alpha"]},"selected":{"id":"963d59bd-788a-4c38-9fb3-ec77c45305b3","type":"Selection"},"selection_policy":{"id":"e0deed51-7b63-4c46-bf90-9a593d8797bd","type":"UnionRenderers"}},"id":"f350ff68-7255-4998-97e0-ecf1360c778f","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef5c82b4-73ea-47f0-bb74-69dc178868fa","type":"Circle"},{"attributes":{"source":{"id":"7ca55525-69cc-40ec-82cb-6ff40ebe2b6b","type":"ColumnDataSource"}},"id":"de6ce62b-4533-426b-bbed-63cc1a6306e2","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c173833b-25fa-44bd-96f3-64cbdeb79eab","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["RGB"],"y":["None"]},"selected":{"id":"8225bebf-5d1f-4485-a72b-7efea244f42f","type":"Selection"},"selection_policy":{"id":"7502baa3-f6bd-46ff-8c10-1cbd2915dbe6","type":"UnionRenderers"}},"id":"7ca55525-69cc-40ec-82cb-6ff40ebe2b6b","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":["RGB"],"y":["Alpha+RGB"]},"selected":{"id":"058294f7-50b3-4bdb-a90f-27d760c97832","type":"Selection"},"selection_policy":{"id":"371d00db-0610-407a-9db7-bf79ded89790","type":"UnionRenderers"}},"id":"43497d37-823d-4dbe-8ecf-5e4bc8fdbd94","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f923c0cb-9e3f-46ad-a7a4-3551d5c151f1","type":"Circle"},{"attributes":{"data_source":{"id":"b0cf8be3-518e-4a08-b4f8-5b299484145d","type":"ColumnDataSource"},"glyph":{"id":"f923c0cb-9e3f-46ad-a7a4-3551d5c151f1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87347528-d102-47df-8b9c-93aa8611a35d","type":"Circle"},"selection_glyph":null,"view":{"id":"7639118f-6d92-434c-b078-fabfb7a4732c","type":"CDSView"}},"id":"e643fd3e-08a4-450d-a47b-4831ccdb35da","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["Alpha"],"y":["Alpha+RGBA"]},"selected":{"id":"6d13dd0e-a091-4713-a2b5-9c7a98e7531d","type":"Selection"},"selection_policy":{"id":"7ee8a746-5117-417e-aef8-fddaa90372dd","type":"UnionRenderers"}},"id":"c56d5e71-b165-477b-9722-950242e75948","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17179ac6-e966-486b-b87a-de4b3725675c","type":"ColumnDataSource"}},"id":"d6da9bb0-c275-4ed8-b805-3f5fd1fec89f","type":"CDSView"},{"attributes":{"source":{"id":"beffd806-1d1c-44da-8732-2200de3be234","type":"ColumnDataSource"}},"id":"60698aaa-0e0d-47ff-ae44-546ded9a1377","type":"CDSView"},{"attributes":{"data_source":{"id":"57c38061-e821-4347-82e1-d5831eec6177","type":"ColumnDataSource"},"glyph":{"id":"b9a81504-c60e-42b0-8a39-a849628e9f02","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"da465c78-cbc9-4489-91a2-2d957b0bb1bb","type":"Circle"},"selection_glyph":null,"view":{"id":"e6420d06-b975-491b-b987-643942078507","type":"CDSView"}},"id":"835190be-0534-494d-ab24-f0100f52808f","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1441b6c-9677-49e9-af84-7f48a768554a","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGBA"],"y":["RGBA"]},"selected":{"id":"f313f30a-6159-4af8-ac93-2d9954fb752f","type":"Selection"},"selection_policy":{"id":"ca09fa36-1860-45aa-b610-d8f5828d9c97","type":"UnionRenderers"}},"id":"52797a60-98f3-41ce-9290-e50d2beaa99f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17179ac6-e966-486b-b87a-de4b3725675c","type":"ColumnDataSource"},"glyph":{"id":"3bd0262f-2863-4124-911c-fb7980a09b8f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"befd5c94-8def-4ef1-9184-c14f25ab823f","type":"Circle"},"selection_glyph":null,"view":{"id":"d6da9bb0-c275-4ed8-b805-3f5fd1fec89f","type":"CDSView"}},"id":"34ff7010-ee78-414a-85a2-86b3e102fe9a","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["RGBA"],"y":["Alpha+RGBA"]},"selected":{"id":"9c3ba200-329f-4f9f-84a7-f640daf66213","type":"Selection"},"selection_policy":{"id":"a11dc718-4fb9-473f-9a0e-1300423b762c","type":"UnionRenderers"}},"id":"0c18707f-fa97-4dee-b48c-95800b58ff19","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"95a74518-47de-44f1-96df-b031c2ceb8a4","type":"Circle"},{"attributes":{"source":{"id":"c3d75474-062d-454e-ba89-b762a795daff","type":"ColumnDataSource"}},"id":"a40e0926-3214-4eda-ae8f-26bd4a715f6a","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGB"],"y":["Alpha"]},"selected":{"id":"20b4cc6f-7c85-4035-bff7-789843aa327f","type":"Selection"},"selection_policy":{"id":"245ddb20-6fd0-4ed0-bb0a-d5f272e863ea","type":"UnionRenderers"}},"id":"b0cf8be3-518e-4a08-b4f8-5b299484145d","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":["Alpha"],"y":["RGB"]},"selected":{"id":"80450bd5-1f00-45dd-9dab-d0a998ead955","type":"Selection"},"selection_policy":{"id":"b89cc905-9dac-41af-a12d-619a89ad89d5","type":"UnionRenderers"}},"id":"17179ac6-e966-486b-b87a-de4b3725675c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"87347528-d102-47df-8b9c-93aa8611a35d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"53686229-2755-4379-b4fd-f440b78d0654","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2fa25280-919d-4cce-b2e4-8244839fe734","type":"Circle"},{"attributes":{"callback":null,"data":{"x":["RGBA"],"y":["RGBA"]},"selected":{"id":"137c7e9e-4b2d-4e37-a2b9-42575ca413f8","type":"Selection"},"selection_policy":{"id":"7bb0821c-cacf-4d0b-9563-dd5313c108af","type":"UnionRenderers"}},"id":"ba9c6fa3-54cb-4fd9-a2e1-a8d4027a2cc0","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f350ff68-7255-4998-97e0-ecf1360c778f","type":"ColumnDataSource"}},"id":"31d500e5-1de4-49b4-883c-971415c1a960","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"14cc4f60-f0cd-44c7-aaf0-11370009dbd2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2448bec-d670-490c-923a-056827531d24","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f4a307b-4398-49b1-8317-3bcf5a785cea","type":"Circle"},{"attributes":{"data_source":{"id":"7ca55525-69cc-40ec-82cb-6ff40ebe2b6b","type":"ColumnDataSource"},"glyph":{"id":"a2172744-1bbc-4aa0-bb01-42305a8f17ce","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e7e4a42f-c940-49f1-885c-4d10fdb8653d","type":"Circle"},"selection_glyph":null,"view":{"id":"de6ce62b-4533-426b-bbed-63cc1a6306e2","type":"CDSView"}},"id":"ec36594c-3752-46a1-a357-2de054538d49","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"befd5c94-8def-4ef1-9184-c14f25ab823f","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"447618b6-b8fc-42be-aa7e-935e380534d5","type":"Circle"},{"attributes":{"data_source":{"id":"c56d5e71-b165-477b-9722-950242e75948","type":"ColumnDataSource"},"glyph":{"id":"176e4c5d-f761-4099-b739-d1665919a0a2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f41e5f14-c748-47ea-9e5c-1dcb8e3641c8","type":"Circle"},"selection_glyph":null,"view":{"id":"346fb171-108c-4d29-a19e-4e8f41d212ba","type":"CDSView"}},"id":"98462c23-095b-43d4-a878-024d0e7de061","type":"GlyphRenderer"},{"attributes":{"source":{"id":"077971bb-307b-460c-ab59-0f9b647cae1d","type":"ColumnDataSource"}},"id":"fdbe4b82-1199-4468-83b7-4c49f0cf867b","type":"CDSView"},{"attributes":{"source":{"id":"5df5974c-5815-42e8-9812-79378354e9bc","type":"ColumnDataSource"}},"id":"4c606ba4-493b-43d4-aee8-e687a73334fe","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGBA"]},"selected":{"id":"1418c7d1-8264-44e4-862f-3b4ae4826798","type":"Selection"},"selection_policy":{"id":"a43a4332-390f-46cd-b513-94b6b4d0d9e4","type":"UnionRenderers"}},"id":"20498d3b-d19a-4b56-bb1e-7803bd3fb206","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"92c0ae1c-bc2a-42cd-bd12-db9b3732f378","type":"ColumnDataSource"},"glyph":{"id":"7272d537-a773-406a-af2f-4840c77332c9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"abbd9615-2382-4335-a053-194822e32ba6","type":"Circle"},"selection_glyph":null,"view":{"id":"fe57e7fa-9f7f-4c2e-8ad0-0fc43de2d59d","type":"CDSView"}},"id":"8b1c91e0-537d-468d-be3d-99efd225174d","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["Alpha"],"y":["Alpha+RGB"]},"selected":{"id":"fa31a8b4-13ee-4ca5-94ab-2a275cb7b8ae","type":"Selection"},"selection_policy":{"id":"b2539516-ec20-4b00-b20f-fada3bcdfb41","type":"UnionRenderers"}},"id":"c3d75474-062d-454e-ba89-b762a795daff","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ba9c6fa3-54cb-4fd9-a2e1-a8d4027a2cc0","type":"ColumnDataSource"},"glyph":{"id":"447618b6-b8fc-42be-aa7e-935e380534d5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f826938c-c987-4d72-a87b-b4ab8d0ac80c","type":"Circle"},"selection_glyph":null,"view":{"id":"17007a5e-9546-4e1e-a62d-c0a84e23c126","type":"CDSView"}},"id":"7a745c0b-2c38-4833-bdf8-02564296df51","type":"GlyphRenderer"},{"attributes":{"source":{"id":"43497d37-823d-4dbe-8ecf-5e4bc8fdbd94","type":"ColumnDataSource"}},"id":"a80d7ab8-90ea-43d4-94fb-278a52cbced0","type":"CDSView"},{"attributes":{"data_source":{"id":"beffd806-1d1c-44da-8732-2200de3be234","type":"ColumnDataSource"},"glyph":{"id":"c173833b-25fa-44bd-96f3-64cbdeb79eab","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53686229-2755-4379-b4fd-f440b78d0654","type":"Circle"},"selection_glyph":null,"view":{"id":"60698aaa-0e0d-47ff-ae44-546ded9a1377","type":"CDSView"}},"id":"853f8e47-5959-4117-aecf-b90a496a1e65","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f350ff68-7255-4998-97e0-ecf1360c778f","type":"ColumnDataSource"},"glyph":{"id":"7e4a2ff3-d554-428b-9804-c223083f568f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2448bec-d670-490c-923a-056827531d24","type":"Circle"},"selection_glyph":null,"view":{"id":"31d500e5-1de4-49b4-883c-971415c1a960","type":"CDSView"}},"id":"cc8e3342-fab2-40b8-99b8-d93545de3e40","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGB"],"y":["RGBA"]},"selected":{"id":"86f15876-fdeb-4667-9872-a82ee0b4df54","type":"Selection"},"selection_policy":{"id":"0490f49b-c32a-4128-be71-b1ea44e7c2ba","type":"UnionRenderers"}},"id":"92c0ae1c-bc2a-42cd-bd12-db9b3732f378","type":"ColumnDataSource"},{"attributes":{"source":{"id":"584dfb88-b6b2-4463-aba2-0f149ea10115","type":"ColumnDataSource"}},"id":"54092203-3159-4d0b-96f7-d5d44a17ebe1","type":"CDSView"},{"attributes":{"data_source":{"id":"0c18707f-fa97-4dee-b48c-95800b58ff19","type":"ColumnDataSource"},"glyph":{"id":"ef5c82b4-73ea-47f0-bb74-69dc178868fa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34da9621-66e6-4a62-b9cc-0b98af57c34f","type":"Circle"},"selection_glyph":null,"view":{"id":"1707f226-707f-48fb-8440-573e56ad7dcf","type":"CDSView"}},"id":"6ffcf00a-0187-41c7-a6cd-e56ec4bf0707","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["Alpha+RGBA"],"y":["RGB"]},"selected":{"id":"f570d4e5-c77c-4314-b0d6-b868e680dd7f","type":"Selection"},"selection_policy":{"id":"49915ff2-ff52-46e3-bbcd-c5a6a95a5e5c","type":"UnionRenderers"}},"id":"bbde8ac1-5bb9-4358-87f5-5b45228a8004","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":["RGB"],"y":["RGB"]},"selected":{"id":"34c715cf-0b24-4296-a7b7-f0493ad14ca2","type":"Selection"},"selection_policy":{"id":"a5a5508a-c680-450e-9844-bdd38187c588","type":"UnionRenderers"}},"id":"afe49815-7a40-48fa-8d37-67b1732d94b9","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4acf511a-3603-40ed-b27a-c81a88fa6cc4","type":"Circle"},{"attributes":{"source":{"id":"92c0ae1c-bc2a-42cd-bd12-db9b3732f378","type":"ColumnDataSource"}},"id":"fe57e7fa-9f7f-4c2e-8ad0-0fc43de2d59d","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3bd0262f-2863-4124-911c-fb7980a09b8f","type":"Circle"},{"attributes":{"source":{"id":"57c38061-e821-4347-82e1-d5831eec6177","type":"ColumnDataSource"}},"id":"e6420d06-b975-491b-b987-643942078507","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["RGB"],"y":["Alpha+RGBA"]},"selected":{"id":"c7300940-a49d-4b8c-9784-1a4a0b25bbab","type":"Selection"},"selection_policy":{"id":"0b034909-3015-4e6b-b540-1990fbaa887b","type":"UnionRenderers"}},"id":"e2c98955-1299-47ab-ad3b-b7e2c16f63c1","type":"ColumnDataSource"}],"root_ids":["7e4f4f30-62e2-48b2-9dec-d893b1a1b781"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"caccbd92-07f3-4cda-a870-18c7a36dcda5","elementid":"c3852190-185b-498a-a4e5-d2c1e3b91edc","modelid":"7e4f4f30-62e2-48b2-9dec-d893b1a1b781"}];
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