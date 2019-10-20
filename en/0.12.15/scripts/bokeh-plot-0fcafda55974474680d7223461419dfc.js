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
      };var element = document.getElementById("07749d2b-9f1a-4b2a-8f5a-b7a771f5ac82");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07749d2b-9f1a-4b2a-8f5a-b7a771f5ac82' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                "Surface3d": require("custom/bk_script_66d434674bd945339d427d3410a62a05.surface3d").Surface3d,
          "IonRangeSlider": require("custom/bk_script_6bbffed6a92843428ebf149ab2d70e33.ion_range_slider").IonRangeSlider,
          "DrawTool": require("custom/bk_script_8b6a824193b54b1d88fc7b74ac6d180e.draw_tool").DrawTool,
          "LatexLabel": require("custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_66d434674bd945339d427d3410a62a05.surface3d": function(require, module, exports) {
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
                          z: source.get_column(this.model.z)[i],
                          style: source.get_column(this.model.color)[i]
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
                  color: [p.String],
                  data_source: [p.Instance]
              });
              return Surface3d;
          })();
    
          },
          "custom/bk_script_6bbffed6a92843428ebf149ab2d70e33.ion_range_slider": function(require, module, exports) {
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
                  var disable, from, grid, max, min, opts, range, slider, step, to;
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
                  dom_1.input = this.$el.find('.slider')[0];
                  slider = jQuery(dom_1.input).ionRangeSlider(opts);
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
    
          },
          "custom/bk_script_8b6a824193b54b1d88fc7b74ac6d180e.draw_tool": function(require, module, exports) {
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
          "custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label": function(require, module, exports) {
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
          "custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter": function(require, module, exports) {
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
                    
                  var docs_json = '{"d92639e4-e5bd-44c7-ae89-2e9b45e0e58c":{"roots":{"references":[{"attributes":{"color":"color","data_source":{"id":"4f7dca46-3d10-4b69-92c9-efc186b15401","type":"ColumnDataSource"},"height":600,"width":600,"x":"x","y":"y","z":"z"},"id":"cf9f83f1-890a-4197-8ec4-2e0f0df85fee","type":"Surface3d"},{"attributes":{"callback":null,"column_names":["x","y","z","color"],"data":{"color":{"__ndarray__":"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","dtype":"float64","shape":[900]},"x":[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,110,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,130,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,140,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,210,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,220,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,230,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,260,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,270,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,280,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290,290],"z":{"__ndarray__":"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","dtype":"float64","shape":[900]}},"selected":null,"selection_policy":null},"id":"4f7dca46-3d10-4b69-92c9-efc186b15401","type":"ColumnDataSource"}],"root_ids":["cf9f83f1-890a-4197-8ec4-2e0f0df85fee"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"d92639e4-e5bd-44c7-ae89-2e9b45e0e58c","elementid":"07749d2b-9f1a-4b2a-8f5a-b7a771f5ac82","modelid":"cf9f83f1-890a-4197-8ec4-2e0f0df85fee"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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