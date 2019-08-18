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
      };var element = document.getElementById("9798c6c5-2323-400f-b02f-544819fd325b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9798c6c5-2323-400f-b02f-544819fd325b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_1d29982a64c2449197edd0c310ea1f8f.latex_label").LatexLabel,
          "IonRangeSlider": require("custom/bk_script_366ddc1f18614c4cb4800343ca94a483.ion_range_slider").IonRangeSlider,
          "Surface3d": require("custom/bk_script_727d6e5c55ab42138c0ae3c822d6ef13.surface3d").Surface3d,
          "Custom": require("custom/bk_script_b9b373abe18c43ea907e9a740dc99a95.custom").Custom,
          "MyFormatter": require("custom/bk_script_cf3005b13ac34287ae4cb92e0b65d530.my_formatter").MyFormatter,
          "DrawTool": require("custom/bk_script_dd4c377015034ab187503a36d9264b7f.draw_tool").DrawTool
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_1d29982a64c2449197edd0c310ea1f8f.latex_label": function(require, module, exports) {
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
          "custom/bk_script_366ddc1f18614c4cb4800343ca94a483.ion_range_slider": function(require, module, exports) {
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
                  // Backbone Views create <div> elements by default, accessible as @$el.
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
          "custom/bk_script_727d6e5c55ab42138c0ae3c822d6ef13.surface3d": function(require, module, exports) {
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
          // or into the DOM, we must create a View subclass for the model. Currently
          // Bokeh models and views are based on BackBone. More information about
          // using Backbone can be found here:
          //     http://backbonejs.org/
          // In this case we will subclass from the existing BokehJS ``LayoutDOMView``,
          // corresponding to our
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
                  // Backbone Views create <div> elements by default, accessible as @el. Many
                  // Bokeh views ignore this default <div>, and instead do things like draw
                  // to the HTML canvas. In this case though, we use the <div> to attach a
                  // Graph3d to the DOM.
                  this._graph = new vis.Graph3d(this.el, this.get_data(), OPTIONS);
                  // Set Backbone listener so that when the Bokeh data source has a change
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
              // We must also create a corresponding JavaScript Backbone model sublcass to
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
          "custom/bk_script_b9b373abe18c43ea907e9a740dc99a95.custom": function(require, module, exports) {
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
          "custom/bk_script_cf3005b13ac34287ae4cb92e0b65d530.my_formatter": function(require, module, exports) {
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
          "custom/bk_script_dd4c377015034ab187503a36d9264b7f.draw_tool": function(require, module, exports) {
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
                  (_a = e.bokeh, sx = _a.sx, sy = _a.sy);
                  if (!frame.bbox.contains(sx, sy)) {
                      return null;
                  }
                  x = frame.xscales['default'].invert(sx);
                  y = frame.yscales['default'].invert(sy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.change.emit();
                  var _a;
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
                    
                  var docs_json = '{"f1b31544-f6c7-4987-8c45-89cdd3cd9f19":{"roots":{"references":[{"attributes":{"formatter":{"id":"3da4d86d-29c3-4a66-9511-c6f018c42f76","type":"BasicTickFormatter"},"plot":{"id":"d4a13e44-7050-4c1a-bbc3-6867b25c3ad1","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4841da9-0504-4035-8fd1-7947504b8699","type":"BasicTicker"}},"id":"fbd8419b-b0be-4e34-875e-5304f757812e","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc572f8b-7e44-43fc-9603-53fe3a22ac1a","type":"Circle"},{"attributes":{},"id":"6c0cf0f8-e6a2-4be3-b026-49b9c923fe40","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e9d577db-8905-4afd-8df8-bcc942cccfef","type":"ColumnDataSource"},"glyph":{"id":"c54a6e3e-d7e6-4277-9cb6-0228d0056459","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1df2ac9-4693-445f-b2e5-07b89bf2753a","type":"Circle"},"selection_glyph":null,"view":{"id":"78922e07-f954-4e49-8fd0-9b3ef7a85dae","type":"CDSView"}},"id":"af053dd5-14dc-4fcc-bbbb-9e7c904e916f","type":"GlyphRenderer"},{"attributes":{},"id":"bdf56e38-2ffc-4c93-9490-98ab13c0ec94","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"cab7040a-6ec3-4cd6-a5c5-7b37f7f38640","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"d1b6791c-bf76-457c-b196-9182cb64f2b0","type":"Range1d"},{"attributes":{"formatter":{"id":"6c0cf0f8-e6a2-4be3-b026-49b9c923fe40","type":"BasicTickFormatter"},"plot":{"id":"2250210f-7ba1-476c-a0ed-71627ecba8a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5640992-b2cf-4137-b59b-3d81f21dcd11","type":"BasicTicker"}},"id":"9b6f53c5-f261-490c-a7b2-f7b3ce1102f9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c54a6e3e-d7e6-4277-9cb6-0228d0056459","type":"Circle"},{"attributes":{"children":[{"id":"2250210f-7ba1-476c-a0ed-71627ecba8a9","subtype":"Figure","type":"Plot"},{"id":"d4a13e44-7050-4c1a-bbc3-6867b25c3ad1","subtype":"Figure","type":"Plot"}]},"id":"0842ea79-8959-4d6f-af45-9a2a19e1f79e","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"67e0dbe5-4395-4df3-84e4-03a676a66cd3","type":"LassoSelectTool"}]},"id":"4cc311db-c428-45b4-8108-681724597302","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce36a503-da71-414f-a1a4-da39f4ef7d71","type":"Circle"},{"attributes":{"callback":null},"id":"e644c173-1866-4e62-b30f-8ac9281eb4e1","type":"Range1d"},{"attributes":{"below":[{"id":"19fbfdb2-6983-434f-8d69-8ca1b19509d7","type":"LinearAxis"}],"left":[{"id":"9b6f53c5-f261-490c-a7b2-f7b3ce1102f9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"19fbfdb2-6983-434f-8d69-8ca1b19509d7","type":"LinearAxis"},{"id":"7904a16c-3b61-49d5-bc52-8f0a927ba5fb","type":"Grid"},{"id":"9b6f53c5-f261-490c-a7b2-f7b3ce1102f9","type":"LinearAxis"},{"id":"d2e3e1fc-5816-4a4e-ab0c-6ff35850d552","type":"Grid"},{"id":"cab7040a-6ec3-4cd6-a5c5-7b37f7f38640","type":"PolyAnnotation"},{"id":"b8ad49cd-000f-4df4-bd30-ed976472fdd5","type":"GlyphRenderer"}],"title":{"id":"f61ef003-bdf3-4141-aacf-f5cad851a97a","type":"Title"},"toolbar":{"id":"4cc311db-c428-45b4-8108-681724597302","type":"Toolbar"},"x_range":{"id":"dd1cebb2-555e-47d9-bff4-61e857ab25b9","type":"DataRange1d"},"x_scale":{"id":"babbba1c-3e93-4236-b3df-3a70349ed0f1","type":"LinearScale"},"y_range":{"id":"6937a076-82a0-4794-9ecd-d2624be1beb3","type":"DataRange1d"},"y_scale":{"id":"c580bca7-b340-42dd-ac0a-03feed0d573d","type":"LinearScale"}},"id":"2250210f-7ba1-476c-a0ed-71627ecba8a9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c580bca7-b340-42dd-ac0a-03feed0d573d","type":"LinearScale"},{"attributes":{},"id":"babbba1c-3e93-4236-b3df-3a70349ed0f1","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"cab7040a-6ec3-4cd6-a5c5-7b37f7f38640","type":"PolyAnnotation"}},"id":"67e0dbe5-4395-4df3-84e4-03a676a66cd3","type":"LassoSelectTool"},{"attributes":{},"id":"f31e3b6d-51ee-4cf2-a136-24e0828d5ca9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a132fe7f-48ca-4742-8ec8-4465561fff48","type":"BasicTickFormatter"},"plot":{"id":"2250210f-7ba1-476c-a0ed-71627ecba8a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"af87ee3f-7183-48e4-a8e3-60a84f2eafb9","type":"BasicTicker"}},"id":"19fbfdb2-6983-434f-8d69-8ca1b19509d7","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6937a076-82a0-4794-9ecd-d2624be1beb3","type":"DataRange1d"},{"attributes":{"callback":{"id":"089b20df-dfea-48aa-9de5-2fa3e8fdf2fc","type":"CustomJS"},"column_names":["x","y"],"data":{"x":[0.3198405677000844,0.7896126420060084,0.40224065565678413,0.3021715095122055,0.8015388937502456,0.6912625477146526,0.38324031445425455,0.3407785348099672,0.3482749186189428,0.995313338873418,0.6836981540620537,0.5641077974624851,0.5816911943542438,0.626823427896017,0.3290957892537092,0.25505487496147894,0.667037343578235,0.5320767690570001,0.6758950292630737,0.8602065558555418,0.19165580820993444,0.7860594448511454,0.7955938503901369,0.4087583124927847,0.4038144606413888,0.6902612111205614,0.2941940088919359,0.27840495722449543,0.1545996962972045,0.9786683978361899,0.7110188523753194,0.3159995705245162,0.8020268063099116,0.06334430349060893,0.4970841510433375,0.1443737358610977,0.45244820562010757,0.9157668918034291,0.91642006560312,0.5260278816352425,0.29793117055874296,0.04903278949819201,0.7964156336895445,0.8902349901537289,0.6737303462369382,0.4966395256941176,0.00048625867968143943,0.2896209736819826,0.90578351427279,0.2730872698724708,0.12959166529636512,0.009159279983949498,0.9787125349088143,0.020327374271222998,0.8168612287828033,0.6307946861765593,0.8751712760902461,0.47548369064049445,0.539134004885698,0.33611547522114693,0.8470830257502442,0.5921668029643703,0.07662251940325626,0.8221377635733466,0.4765589808629328,0.5977904060631517,0.7429701361459502,0.20914996458318802,0.3100677584282292,0.8853223659679599,0.6499476312010192,0.30611921561352784,0.6706573274202121,0.42074946643939126,0.8508854897735408,0.06263209246490964,0.47609622815175656,0.13947869276657876,0.36975641146896965,0.5328527348370137,0.3053959684094192,0.9806656207015592,0.1145204002785627,0.385023720008858,0.3235258242790101,0.7239528114372582,0.4381952860256102,0.1573835611962422,0.530139930171445,0.8904769117287336,0.33702521961223075,0.7936221774040692,0.21788438212862382,0.780345584179863,0.8798570806119116,0.4682302228817993,0.3701799095785848,0.9780644892995634,0.9567161319355802,0.27629293670213984,0.43210530513588097,0.46159479115849045,0.935724509556242,0.6633319922254012,0.1301917416796552,0.4228421562457728,0.11859030935732051,0.063848216783708,0.9116381636023299,0.559944114568034,0.4794702613159504,0.23314795009473355,0.7149726465309943,0.07080252643797347,0.49476214741901703,0.07573740705881582,0.742426538290209,0.07074079798384325,0.681618410851554,0.2164558122248782,0.6033591852448508,0.027153679851844692,0.08715682808335368,0.3788723031086021,0.9118894505520005,0.018381819634402996,0.8911403404154568,0.7003668121698504,0.9169641861346332,0.37843063270595756,0.4895429813630673,0.018346638640447166,0.10866737624900324,0.11397509242996762,0.819423389852309,0.6263951199753666,0.5282836749341887,0.22484607032414128,0.7560875796499328,0.9573354634368033,0.6108960145040525,0.5326709907602705,0.5480732782969997,0.20492909169022755,0.5151073511525339,0.4034145889591765,0.9827961750534793,0.46568121714515676,0.6323477256587747,0.6386002687086982,0.2264028655738538,0.25340094350064557,0.9741683582475481,0.5014746677842601,0.07744841355539456,0.285000646061204,0.16465485935403223,0.7464333722779789,0.8254211370582003,0.872125979980473,0.7689835171744773,0.8448682758084443,0.730682980603349,0.9614672366366661,0.22677845400499075,0.7219275059282646,0.8367421972505388,0.9582106333759586,0.6146564321447594,0.5856022758629883,0.13136682393817523,0.6229688900936414,0.798218555908091,0.09968243704916824,0.7642017886531338,0.6708820444620665,0.6836157421686334,0.9317409885315978,0.4069960904402846,0.11453875616121423,0.07302586309487913,0.6075258699317916,0.10517235520644941,0.49565700434039006,0.13197407342314282,0.9260811464463896,0.016272355901497892,0.96646986475865,0.4614070502917602,0.8989859074447494,0.6075213050244614,0.11490131924682478,0.4067550785372521,0.8579988805476038,0.6844876753673211,0.17927895675987782,0.6235015433212487,0.9891052375341195,0.9944058733168114,0.9783104595134268,0.9718033444350589,0.8587321027461914,0.8328216967223854,0.46972120828801744,0.6694231847104757,0.1851507834807511,0.09185987671543272,0.8273364404879763,0.05493425884703862,0.829299864531499,0.8369752930664138,0.3042825152657377,0.8696873058095206,0.46195076221327536,0.13381955898271347,0.4638766294190728,0.7471015246410386,0.49681349342045267,0.9831755195686969,0.8542133434123965,0.706986321585412,0.27627324530533803,0.8694184046321742,0.13031202002605613,0.09348677982527231,0.6451034946604179,0.7020061530010041,0.3114877789525905,0.5212758170341104,0.2363867004172061,0.4944598172312411,0.22611944838504383,0.7691789266983161,0.3361589013945556,0.5771514202910747,0.037570400105071955,0.32186441337990923,0.8800360669889921,0.5749922473765495,0.6171618451590778,0.7635757538037415,0.8218433482994317,0.9598236562740015,0.7199612703174397,0.7086841054947634,0.4394059707578286,0.38375903347147533,0.2051779130722311,0.9942675085495332,0.05527833386734404,0.7660853280559367,0.8265104607709953,0.6106509002967889,0.11437867853197503,0.5233904285909867,0.013973712995954957,0.940698776247661,0.802383178458073,0.8678989599472756,0.385767277898871,0.6255142756501381,0.7672588130006811,0.7685335400116381,0.5939827841933472,0.07434086962360553,0.5267751681556386,0.22018279473451574,0.9880696787567528,0.8782271834001122,0.7683253347578743,0.9585646989245112,0.9636453364722091,0.7435150944659001,0.5439719468115692,0.7930567663081233,0.8800025508565529,0.9449323753943037,0.2329715304100649,0.37411204678214816,0.47781699888805673,0.6692618855505785,0.6999650222642108,0.1686828977525252,0.18763539310735,0.4306937653494768,0.5160846214317928,0.5886884989912214,0.38538375598844543,0.60024133076498,0.40221375599779474,0.12889413927530435,0.7053975278655448,0.32630351108398514,0.7323055276173497,0.9531552186318505,0.45338135367408383,0.8394026400848109,0.2655878096139761,0.9404659031531345,0.799035946214823,0.15604382154505325,0.14905288630747948,0.5370539260191727,0.2907161479818178,0.36537107732819574,0.8805245473927975,0.7798447577951224,0.35538647962905145,0.48261137305336954,0.2839692332125605,0.9787659578879345,0.4323431552759266,0.29641280890019694,0.48183290532347833,0.7574932103772123,0.25171119700895217,0.5851550614511769,0.5685603954442399,0.07350076781003057,0.6739999801797127,0.1473762929105742,0.2371904567333578,0.6546583578362448,0.8387729485813914,0.36323642160133296,0.4262570920780132,0.49252788133220293,0.5365875879456464,0.007565434510710567,0.7453084660134172,0.3806920277119413,0.08566594958433116,0.3754936407481536,0.5538096278683486,0.6038725041150917,0.6617103212874694,0.792317343807091,0.012869828509856518,0.32680080218463425,0.3890497891669723,0.7337998520383755,0.9839200092090683,0.9673294795187578,0.8094547149643817,0.8019096648026808,0.572738371375416,0.752990492154991,0.5273896678460557,0.7411724298945327,0.6904337642027334,0.06450905019424602,0.7401181012659026,0.027173262755100014,0.2283912796137657,0.07239488383670412,0.6183535059913994,0.6728650257858994,0.4011114809183708,0.6489536076212639,0.2817658772984575,0.039279525611675026,0.34896355802318113,0.7066257708611529,0.8905933197740781,0.034011996561198576,0.2778688430808234,0.38094981858511934,0.46424653393081083,0.45184141440331105,0.3252859928233528,0.568273088780746,0.06221490601356994,0.4292444856328066,0.7100492538110879,0.7481942753359804,0.006662684088681647,0.32754615957778177,0.8341762602991529,0.7189533457901057,0.04814430838558337,0.6930040467258227,0.4448200555657644,0.65825832202582,0.36262558657250565,0.17554071004069183,0.4713911826156906,0.42401509032059503,0.5706145159020668,0.054789065895261,0.34941694040948124,0.6268624604086025,0.5022347147816627,0.7339126362346958,0.8564121424183333,0.1471190063800245,0.8288560747011346,0.4512861814190182,0.2589347453257368,0.46997398947033253,0.17669779845351108,0.42034340957569016,0.024815063010275695,0.34804834740008284,0.48484069162536547,0.02873764041521565,0.6391192973626783,0.9984797464856634,0.21900449844560999,0.9699756038983559,0.2838906783904873,0.1336974098532433,0.7366596837721088,0.9197707197682696,0.4601062392587475,0.6126361401995287,0.24566696268850918,0.1237877569649829,0.12574763634564745,0.534739157223779,0.01831928757057988,0.8462750318118002,0.665946977679599,0.18023639190021068,0.18764736599018716,0.46191343014101893,0.15284399776181468,0.7020121038316696,0.9978225557252526,0.3622866006401644,0.62284483398069,0.6958279951744475,0.6532320067756964,0.883300100044663,0.15912397725844962,0.6544800960319141,0.18719071173851354,0.18662947967087795,0.2657878460137342,0.36369783672930645,0.485645898527463,0.9128520435935452,0.09761178291035155,0.7387219463048786,0.6513226894897081,0.1731100846906286,0.7162083484626224,0.5172840701963003,0.10780795477541383,0.4202706862295792,0.7999079199728558,0.16472221173460921,0.042607805735146,0.5033814440802487,0.08675576375797367,0.9798394560329994,0.3444764382574459,0.7164919511861535,0.13864273156571183,0.7364513854636362,0.26489045815979295,0.3327016556935093,0.29948114230831746,0.9555177327858746,0.39291892846925136,0.8559649591287319,0.07121214700455025,0.6498924937981562,0.014648132210052567,0.5506417330181251,0.07882014096984791,0.5589726149110178,0.09311702597569071,0.03483070693507728,0.8245117086592939,0.6059834369352955,0.20268413856184508,0.5143869155909611,0.06226904490449403,0.9090486785186956,0.9192465872188125,0.18688729555480477,0.7261622364771965,0.6658519444344225,0.1658063703965289,0.5025161718626378,0.9085370796204091,0.1009972472139059,0.48473599839936476,0.6607415754569079,0.683772187015606,0.5849835543776564,0.9279374321894599,0.7966525417477578,0.47443796930880644,0.3099817513858968,0.11154259489792162,0.6068189038525303,0.8777558060909827,0.7124481841076866,0.18366386562094772],"y":[0.6200705643824934,0.4914680694276088,0.29017145303864367,0.8578963752303357,0.5035274587409766,0.450990891550329,0.6401258856265409,0.6701800670102622,0.590770888801369,0.12301911850664538,0.6602988004025924,0.5716177190779729,0.22645362972667926,0.7267626531139981,0.17546975646021923,0.9823944731984208,0.6462959100533936,0.07327453306287723,0.9268409562167146,0.31094028971054544,0.7962518105161539,0.9401839157598346,0.2496853052324003,0.8303276905095478,0.3623319097287634,0.07970056077343723,0.37421510671182334,0.19656528663907757,0.285961826211825,0.08755098721312493,0.5236076760372015,0.05754652927173354,0.8359425700792238,0.07343062353356467,0.16911681766126285,0.7294491790741515,0.7550688883069168,0.08249382439061681,0.5490342305507935,0.49616744031417104,0.42041237452134805,0.29929823925812915,0.30727470373139043,0.7912411125233529,0.16673271402396483,0.8238373890063916,0.29595570449229436,0.8962826251677051,0.9723197599265795,0.9033045611605707,0.3998977214828979,0.21109057139906484,0.08783941625735947,0.09716465090074244,0.41407939373776526,0.05397218431602069,0.5969123947435915,0.029305485663841835,0.4272707983021118,0.41315149539694007,0.3290878220204482,0.8486281395021077,0.8178334695050912,0.2291834176481342,0.8518410522699968,0.7173429589043512,0.1743644895238533,0.7293555139681239,0.09959961612206769,0.6194717500239857,0.4924927914828412,0.30606617846571627,0.8671614361608242,0.4018183442097467,0.5190457455528422,0.038977356732524227,0.01802414543197106,0.5088259203101416,0.8157573467772704,0.9604948121923004,0.5777140154901668,0.14454998067240277,0.34072213387789996,0.8231460743430413,0.8665943255726497,0.17347374566074303,0.3114880975548566,0.2951275660730115,0.8399832675533769,0.20048497596025405,0.5875361048921544,0.04128467427774607,0.18918341187461385,0.3059169921432553,0.6085747537424557,0.31262859448985125,0.013963335140660282,0.34956027118704547,0.8922802832020903,0.4341044947506638,0.3493737124754144,0.2708497717094126,0.914547411072292,0.41343728731623053,0.5311144565065915,0.698900715627486,0.5579372209359567,0.5080776132697874,0.6264042727106117,0.40990115415662953,0.38299303145001506,0.5343849177333273,0.2685610955580564,0.2464703661675448,0.8524139469798521,0.3594671415192179,0.17947216396918775,0.7741896570443181,0.693537713279761,0.4333530774215518,0.22352784210833965,0.5211033639925085,0.2276105809325395,0.9994716050294034,0.1320419857840902,0.7767683708981455,0.42426838067146244,0.811480415971488,0.06518104983157158,0.8000009597766122,0.7361826798745923,0.9761276397312771,0.6460410095487956,0.021244302061248055,0.29427910353152975,0.8248963512296492,0.6313715534814641,0.5072091284486698,0.1586201073913488,0.7207279779361943,0.7579190928196647,0.6911875983451564,0.16966735635073082,0.10065461034929168,0.7548259379758148,0.507720091990405,0.474454726316753,0.4149822522764731,0.3343212021945893,0.6225814954261691,0.254059939786792,0.2483486601611723,0.6908145910677164,0.9364983323927744,0.7397133757057602,0.9474268204521257,0.035079059520149114,0.7985067482859683,0.3573220999833203,0.9669580595042707,0.9538994972184847,0.6149203923435059,0.36482676845728546,0.7197689462047733,0.47893870598947086,0.6260190645261416,0.5266329658192825,0.4446888537118733,0.4687951037565986,0.19309432991565745,0.4165158340431947,0.7985386091333776,0.319210506587672,0.42447856848702314,0.16060309130338313,0.7577109484957414,0.46850814438938604,0.26251658305100845,0.08058909173407924,0.754093650313018,0.30411033759712436,0.7397257939408676,0.24079823688017798,0.4479213712427672,0.1745196618713486,0.0017520476121966055,0.03793939418875669,0.42395101156113635,0.4627837757020684,0.8906373998754618,0.09844826849883315,0.7082924135360361,0.23327190901818307,0.6974893878362058,0.3217510395355285,0.8133480321873595,0.5296128830627465,0.1799928060275603,0.475606951593604,0.6249856709726792,0.06135810949316911,0.8147389180098586,0.548239017524468,0.6741567748314305,0.3954306676485162,0.12429137234885512,0.8463295083541396,0.31645955211130283,0.8757269676470413,0.16457552278557785,0.5905781073081307,0.8161375857007734,0.08836368592317134,0.9596749656510158,0.5044956953839667,0.45902841093417956,0.9597708160163717,0.03973939964663775,0.6047887066430316,0.8631313947891076,0.16372738011913857,0.557209450411602,0.6394260039130832,0.8112019752735378,0.849476744926929,0.789611306991532,0.6058872941329495,0.4204344382325895,0.07994873807706937,0.000741183369488807,0.021175007952072167,0.04894367351135864,0.17240846729011317,0.9508894543494419,0.6917430282927407,0.914918102429216,0.26227807742391307,0.36758587487658045,0.5804351262824502,0.9987496536506398,0.6784074736369586,0.9380194576881056,0.04210866677389735,0.007258453402255172,0.7037018754971337,0.854111299019689,0.008121238370150885,0.45391435327137875,0.22942967977251583,0.0016114723808686726,0.037470529764562666,0.9734253747237026,0.6483309369512401,0.305129577078755,0.16330071193397044,0.8379904346494681,0.9231114033038146,0.5608003429161103,0.9235639149221679,0.9675011076959205,0.8038762856265069,0.5935307900049802,0.02906757952967709,0.7072616088051478,0.013660536759706243,0.8531708544728296,0.5622660717995042,0.7171679884638404,0.029252854644274184,0.5147062482141286,0.8470405748916214,0.9338606518698018,0.1865606595921231,0.07624333803831851,0.867911251932317,0.7583454491526339,0.7970936172326648,0.41118393259177555,0.7563756368611109,0.9950406868697688,0.8139517217008079,0.476317290787842,0.8490143354815061,0.6827548405415773,0.7317918416816773,0.9592054363442414,0.3582789490987368,0.47597206483681787,0.5581812718398945,0.9874751729071695,0.9499386089705029,0.981766171131747,0.7627086225879172,0.9281391219909498,0.1107157400273101,0.7569503308991832,0.4978403060712282,0.4876050039905325,0.15170145585518524,0.011981024996035927,0.7231343533697842,0.1118764130085842,0.517159610665116,0.7194470083436273,0.7328771497218647,0.47484405684232445,0.09880532956854227,0.2558313329685532,0.17882191548106707,0.18891562201339862,0.8035857077444231,0.051997446888323196,0.2085106183689558,0.7673186474960538,0.5561764243186393,0.9394487423056597,0.5208157738718248,0.8323740854096546,0.193609452126963,0.42456274972382047,0.5139460082161723,0.4551953164932073,0.5165627921561572,0.4246984128881185,0.4415584740643469,0.1369240845250861,0.9871061279755263,0.7496793879895575,0.15671912706352165,0.9448893817789961,0.20084178296189037,0.5953791410497679,0.48465719527712536,0.26586246817647463,0.037134502073899234,0.42297139934224737,0.8985935797608711,0.027334800548587723,0.2308833252749204,0.4741268377221711,0.34267711044893556,0.2669287545159935,0.36877319364911787,0.18795738099602488,0.06329799263268843,0.9070129072849605,0.2709903788439679,0.9547784325200612,0.3526472781532787,0.06138734570123028,0.9310563692877364,0.9683710404483328,0.5850402001670518,0.7360392491881074,0.39577457871777744,0.9218239984950424,0.6937636538559387,0.3404468423299236,0.6418624626213929,0.7972450791630563,0.7313372389547628,0.3548859774257044,0.6515260648900304,0.07143826264910258,0.7566069291833994,0.8797681077651451,0.13594184126461806,0.03326223664570194,0.3918027364057086,0.5950834726641828,0.2288778664029747,0.6304331715343645,0.3491730064414874,0.6901090673237366,0.9493746140587044,0.6143615484473272,0.9108274817752724,0.8965968391514253,0.32003345907149705,0.16881764697076596,0.6967875333244246,0.27456049661666904,0.9757830436755541,0.9331533814347638,0.07320548325496434,0.17805120747153436,0.7658199083465212,0.43174242168146737,0.27432231313853284,0.9683926851783474,0.7164162444012656,0.2838730451413395,0.9730220712291237,0.15658231533322087,0.7317544451063431,0.9183516182286079,0.3093338612142178,0.30430069594416165,0.37767490413670723,0.36211086892512134,0.7356622145036137,0.8986295202956963,0.5685366980665513,0.5172949057862417,0.046794775376800324,0.3033002357241237,0.7665748301755071,0.19767048025959766,0.6199524969793987,0.42537969323344027,0.06070729754919835,0.14537167596469192,0.2081000219456045,0.3003605273576311,0.3583551320670444,0.4214219404920836,0.413294010429898,0.2813966005830455,0.0132558963902778,0.2721894575672499,0.12194339958048916,0.2062312809764899,0.8826098467177502,0.10875085711836163,0.5203387062846969,0.32753707502311513,0.8180746264942886,0.38625741687081994,0.07191534435786862,0.2351135746912164,0.892699809325767,0.28221040394065466,0.9547149266069774,0.6208666718536113,0.3056943872434478,0.9208538936821331,0.6053269494893424,0.7911642192769821,0.6265254839564403,0.4860336637916459,0.20170818895953646,0.47409007825928373,0.83580967537835,0.8989720848785405,0.9314554653633841,0.7456716892614162,0.8956116574172818,0.08973050296636143,0.5385532250768975,0.9376063860002095,0.5651982200910577,0.26377245099404834,0.7337736486672466,0.6592023401122195,0.2375223219875089,0.1895197251073224,0.9500028364392953,0.6740761172892521,0.3370342439418703,0.22520399001468572,0.2942133425462006,0.6453532539822914,0.013962370531666823,0.9618420793063116,0.4756477831231978,0.08615475372969139,0.37968739807383545,0.4174807404316654,0.8113737744754765,0.7004659340527916,0.11149586661377608,0.9977129277180418,0.06416976211706094,0.1518340264984096,0.30555632397729804,0.45531483742566004,0.22858683815310687,0.9704939394340786,0.16644671314714143,0.8734886603349045,0.7807476320613397,0.6441091378515377,0.5103948699634784,0.7870611900452966,0.041412854070024596,0.3474856183260224,0.5883486824108791,0.3298784893521246,0.8635006740514125,0.18773459110843937,0.25180587110817754,0.9865812725739986,0.20554596110446166,0.627981440173639,0.7629673500457143,0.04143812050733575,0.6660572599055588,0.09970448586605496,0.8985939346600655,0.5041543965478011]}},"id":"2b690572-96e1-4c4a-a612-4c9a4cb3b934","type":"ColumnDataSource"},{"attributes":{},"id":"3da4d86d-29c3-4a66-9511-c6f018c42f76","type":"BasicTickFormatter"},{"attributes":{"args":{"s2":{"id":"e9d577db-8905-4afd-8df8-bcc942cccfef","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected[&#x27;1d&#x27;].indices;\\n        var d1 = cb_obj.data;\\n        var d2 = s2.data;\\n        d2[&#x27;x&#x27;] = []\\n        d2[&#x27;y&#x27;] = []\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d2[&#x27;x&#x27;].push(d1[&#x27;x&#x27;][inds[i]])\\n            d2[&#x27;y&#x27;].push(d1[&#x27;y&#x27;][inds[i]])\\n        }\\n        s2.change.emit();\\n    "},"id":"089b20df-dfea-48aa-9de5-2fa3e8fdf2fc","type":"CustomJS"},{"attributes":{},"id":"24eb0e36-387d-478d-a10b-a2febb586001","type":"LinearScale"},{"attributes":{},"id":"3c666fe5-82bc-4a86-9f08-5192404e0767","type":"BasicTickFormatter"},{"attributes":{},"id":"af87ee3f-7183-48e4-a8e3-60a84f2eafb9","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2b690572-96e1-4c4a-a612-4c9a4cb3b934","type":"ColumnDataSource"},"glyph":{"id":"ce36a503-da71-414f-a1a4-da39f4ef7d71","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc572f8b-7e44-43fc-9603-53fe3a22ac1a","type":"Circle"},"selection_glyph":null,"view":{"id":"e5844f95-b0a3-4778-976b-5d45a9e4a93a","type":"CDSView"}},"id":"b8ad49cd-000f-4df4-bd30-ed976472fdd5","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e9d577db-8905-4afd-8df8-bcc942cccfef","type":"ColumnDataSource"}},"id":"78922e07-f954-4e49-8fd0-9b3ef7a85dae","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"e9d577db-8905-4afd-8df8-bcc942cccfef","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2250210f-7ba1-476c-a0ed-71627ecba8a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"af87ee3f-7183-48e4-a8e3-60a84f2eafb9","type":"BasicTicker"}},"id":"7904a16c-3b61-49d5-bc52-8f0a927ba5fb","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"2250210f-7ba1-476c-a0ed-71627ecba8a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5640992-b2cf-4137-b59b-3d81f21dcd11","type":"BasicTicker"}},"id":"d2e3e1fc-5816-4a4e-ab0c-6ff35850d552","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1df2ac9-4693-445f-b2e5-07b89bf2753a","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"d4a13e44-7050-4c1a-bbc3-6867b25c3ad1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f31e3b6d-51ee-4cf2-a136-24e0828d5ca9","type":"BasicTicker"}},"id":"e5d60f11-8967-4c1c-87a4-be8c9403641c","type":"Grid"},{"attributes":{"source":{"id":"2b690572-96e1-4c4a-a612-4c9a4cb3b934","type":"ColumnDataSource"}},"id":"e5844f95-b0a3-4778-976b-5d45a9e4a93a","type":"CDSView"},{"attributes":{},"id":"a132fe7f-48ca-4742-8ec8-4465561fff48","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Select Here"},"id":"f61ef003-bdf3-4141-aacf-f5cad851a97a","type":"Title"},{"attributes":{"plot":{"id":"d4a13e44-7050-4c1a-bbc3-6867b25c3ad1","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4841da9-0504-4035-8fd1-7947504b8699","type":"BasicTicker"}},"id":"b51cc452-10bd-49c8-938a-f3c93422a50e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9c80c896-2ab2-4a16-9432-9ebfdeabb080","type":"Toolbar"},{"attributes":{},"id":"a4841da9-0504-4035-8fd1-7947504b8699","type":"BasicTicker"},{"attributes":{"callback":null},"id":"dd1cebb2-555e-47d9-bff4-61e857ab25b9","type":"DataRange1d"},{"attributes":{"below":[{"id":"fbd8419b-b0be-4e34-875e-5304f757812e","type":"LinearAxis"}],"left":[{"id":"f3679535-ffc9-47ab-ab03-d71926688643","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"fbd8419b-b0be-4e34-875e-5304f757812e","type":"LinearAxis"},{"id":"b51cc452-10bd-49c8-938a-f3c93422a50e","type":"Grid"},{"id":"f3679535-ffc9-47ab-ab03-d71926688643","type":"LinearAxis"},{"id":"e5d60f11-8967-4c1c-87a4-be8c9403641c","type":"Grid"},{"id":"af053dd5-14dc-4fcc-bbbb-9e7c904e916f","type":"GlyphRenderer"}],"title":{"id":"1d42114b-9b52-4379-97cf-fae245778f90","type":"Title"},"toolbar":{"id":"9c80c896-2ab2-4a16-9432-9ebfdeabb080","type":"Toolbar"},"x_range":{"id":"d1b6791c-bf76-457c-b196-9182cb64f2b0","type":"Range1d"},"x_scale":{"id":"bdf56e38-2ffc-4c93-9490-98ab13c0ec94","type":"LinearScale"},"y_range":{"id":"e644c173-1866-4e62-b30f-8ac9281eb4e1","type":"Range1d"},"y_scale":{"id":"24eb0e36-387d-478d-a10b-a2febb586001","type":"LinearScale"}},"id":"d4a13e44-7050-4c1a-bbc3-6867b25c3ad1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e5640992-b2cf-4137-b59b-3d81f21dcd11","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"1d42114b-9b52-4379-97cf-fae245778f90","type":"Title"},{"attributes":{"formatter":{"id":"3c666fe5-82bc-4a86-9f08-5192404e0767","type":"BasicTickFormatter"},"plot":{"id":"d4a13e44-7050-4c1a-bbc3-6867b25c3ad1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f31e3b6d-51ee-4cf2-a136-24e0828d5ca9","type":"BasicTicker"}},"id":"f3679535-ffc9-47ab-ab03-d71926688643","type":"LinearAxis"}],"root_ids":["0842ea79-8959-4d6f-af45-9a2a19e1f79e"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"f1b31544-f6c7-4987-8c45-89cdd3cd9f19","elementid":"9798c6c5-2323-400f-b02f-544819fd325b","modelid":"0842ea79-8959-4d6f-af45-9a2a19e1f79e"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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