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
      };var element = document.getElementById("9a6ef4c9-eb2d-46e1-92a6-19ddcdd1014a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a6ef4c9-eb2d-46e1-92a6-19ddcdd1014a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"be778e30-5f9b-4681-a9f5-1b56783bdd34":{"roots":{"references":[{"attributes":{"children":[{"id":"2406e777-69b9-42a6-9963-425ee18d89b7","type":"Row"}]},"id":"c6988c4d-2186-4bb4-8f30-89a08b5e26c3","type":"Column"},{"attributes":{},"id":"a22e7cc4-f10c-4805-9d91-a4c424ed411e","type":"BasicTicker"},{"attributes":{"source":{"id":"65e5075f-fd8a-413d-a65c-2df4d4a5be48","type":"ColumnDataSource"}},"id":"2d7af18f-7515-46fc-ab85-9facdd283a3f","type":"CDSView"},{"attributes":{"formatter":{"id":"89126e41-0986-4c03-86e8-6c8763a5455a","type":"BasicTickFormatter"},"plot":{"id":"f4ec90b8-e1a1-42f8-94d3-a86c0ab37a85","subtype":"Figure","type":"Plot"},"ticker":{"id":"9528e42f-4222-421b-a505-9252118eb3a4","type":"BasicTicker"}},"id":"1e5f2423-6758-4605-95db-36ac2f0ffa99","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"197f2501-da59-46e3-a6b8-fffd0e1eaf92","type":"BoxAnnotation"},{"attributes":{},"id":"2e2833ce-f517-4ab8-893e-4a35f06c2627","type":"WheelZoomTool"},{"attributes":{},"id":"f88eeff7-2a38-4be5-beb7-ec8b0297a8a5","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"43d189bd-84f7-485a-8cba-cc66e8715477","type":"PanTool"},{"id":"2e2833ce-f517-4ab8-893e-4a35f06c2627","type":"WheelZoomTool"},{"id":"7cc15fbc-d26b-411c-be7a-a3fce40eabee","type":"BoxZoomTool"},{"id":"45241406-4ce3-464c-900c-a1fcbebef80b","type":"SaveTool"},{"id":"537f33b9-7531-468e-84e3-e8289df7f836","type":"ResetTool"},{"id":"3d6fad98-fc0c-469b-bef3-b08193431491","type":"HelpTool"}]},"id":"5b97f6db-70bf-40bf-8338-b12294bf9ae6","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"66d1f718-e70d-49cc-af39-378118a2d4e8","type":"Circle"},{"attributes":{},"id":"8989678a-dd46-4619-9662-f74122a4bad5","type":"LinearScale"},{"attributes":{},"id":"63cc807a-f6d1-4467-9c2f-cb0deab183b6","type":"BasicTicker"},{"attributes":{"data_source":{"id":"65e5075f-fd8a-413d-a65c-2df4d4a5be48","type":"ColumnDataSource"},"glyph":{"id":"72e4a864-0586-4838-9a45-053efda28143","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66d1f718-e70d-49cc-af39-378118a2d4e8","type":"Circle"},"selection_glyph":null,"view":{"id":"2d7af18f-7515-46fc-ab85-9facdd283a3f","type":"CDSView"}},"id":"68b88aa0-2414-4943-a1df-b16384cb70fe","type":"GlyphRenderer"},{"attributes":{},"id":"0e946a47-a110-47cb-8b16-8c750286f7ee","type":"ResetTool"},{"attributes":{"plot":{"id":"e13f32d3-22ca-4fc6-a79d-327df450aa22","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc075b90-3f38-4545-80af-599f276037dc","type":"BasicTicker"}},"id":"a36b9adc-cc78-4bff-89d4-d589dd013edb","type":"Grid"},{"attributes":{"formatter":{"id":"165dd99b-c418-4f0c-ab57-3da905170c82","type":"BasicTickFormatter"},"plot":{"id":"e13f32d3-22ca-4fc6-a79d-327df450aa22","subtype":"Figure","type":"Plot"},"ticker":{"id":"37052470-e225-4cb8-beeb-5afa5bcb10e5","type":"BasicTicker"}},"id":"2ea92af5-5984-41db-8e76-02d59be28a49","type":"LinearAxis"},{"attributes":{},"id":"b847440f-f0f4-4090-9827-01ce3862dfe8","type":"SaveTool"},{"attributes":{},"id":"69d0448c-8c9b-489f-b348-ff38912db481","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"e13f32d3-22ca-4fc6-a79d-327df450aa22","subtype":"Figure","type":"Plot"},"ticker":{"id":"37052470-e225-4cb8-beeb-5afa5bcb10e5","type":"BasicTicker"}},"id":"a428b643-fde7-40ea-ab15-7d20df8a8581","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"f4ec90b8-e1a1-42f8-94d3-a86c0ab37a85","subtype":"Figure","type":"Plot"},"ticker":{"id":"9528e42f-4222-421b-a505-9252118eb3a4","type":"BasicTicker"}},"id":"69bc5574-9149-43f5-8c56-4bae53b62b3c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e27465ab-260f-43a8-8493-5ea743ec0474","type":"Triangle"},{"attributes":{"callback":null},"id":"a159c9b6-6934-4827-8776-b7a3e04df497","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"a1b52657-0a92-486a-a394-afc8e9788c0a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"f982db0a-e849-4635-b6c3-4792194d623d","type":"ColumnDataSource"},{"attributes":{},"id":"dc075b90-3f38-4545-80af-599f276037dc","type":"BasicTicker"},{"attributes":{},"id":"572aaf21-1f3d-4840-bd5c-8e65f5471086","type":"HelpTool"},{"attributes":{"source":{"id":"a1b52657-0a92-486a-a394-afc8e9788c0a","type":"ColumnDataSource"}},"id":"c06e708b-a96d-4ed2-9823-cef28f6dc88a","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"72e4a864-0586-4838-9a45-053efda28143","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"be36debf-a38a-4f03-813a-747acb30162a","type":"Triangle"},{"attributes":{},"id":"e09f1b7f-f276-4476-bb95-41edcfe2966e","type":"LinearScale"},{"attributes":{},"id":"37052470-e225-4cb8-beeb-5afa5bcb10e5","type":"BasicTicker"},{"attributes":{},"id":"7f7cfe31-f793-4589-b43a-4bb4756a58db","type":"ResetTool"},{"attributes":{"callback":null},"id":"bb5ddb36-df9d-4d73-b7ec-56009378b5bb","type":"DataRange1d"},{"attributes":{},"id":"165dd99b-c418-4f0c-ab57-3da905170c82","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"dd33c8b5-a47b-4aae-97c4-1a204889b0e1","type":"BoxAnnotation"}},"id":"7cc15fbc-d26b-411c-be7a-a3fce40eabee","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"74f122ca-22b1-4b35-976e-ad3c45226383","subtype":"Figure","type":"Plot"},"ticker":{"id":"a22e7cc4-f10c-4805-9d91-a4c424ed411e","type":"BasicTicker"}},"id":"772e93d1-2099-4644-99b3-9f4b6377ce5b","type":"Grid"},{"attributes":{},"id":"61e2dee5-9149-4b26-aa46-2d68290558dc","type":"SaveTool"},{"attributes":{"below":[{"id":"55b4a05d-36b3-4e17-9d8b-0aa0bca9c80e","type":"LinearAxis"}],"left":[{"id":"1e5f2423-6758-4605-95db-36ac2f0ffa99","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"55b4a05d-36b3-4e17-9d8b-0aa0bca9c80e","type":"LinearAxis"},{"id":"b869f036-89ec-4487-883a-5c3bd769fa94","type":"Grid"},{"id":"1e5f2423-6758-4605-95db-36ac2f0ffa99","type":"LinearAxis"},{"id":"69bc5574-9149-43f5-8c56-4bae53b62b3c","type":"Grid"},{"id":"dd33c8b5-a47b-4aae-97c4-1a204889b0e1","type":"BoxAnnotation"},{"id":"d8d8cb06-db44-4cff-a092-6e9f64bedcb8","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"5b97f6db-70bf-40bf-8338-b12294bf9ae6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e2107d9c-cdc8-4070-bd6c-3fccba724c87","type":"DataRange1d"},"x_scale":{"id":"21cc6363-4455-4eea-936f-c1541e5e7646","type":"LinearScale"},"y_range":{"id":"a159c9b6-6934-4827-8776-b7a3e04df497","type":"DataRange1d"},"y_scale":{"id":"e09f1b7f-f276-4476-bb95-41edcfe2966e","type":"LinearScale"}},"id":"f4ec90b8-e1a1-42f8-94d3-a86c0ab37a85","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"bf610194-8da2-4148-9955-fb70e27fe369","type":"BoxAnnotation"}},"id":"5bb9496a-d94e-4bb9-91e3-3a9d491b474e","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"bb8636a2-da10-40e6-8633-2233780ed155","type":"BasicTickFormatter"},"plot":{"id":"e13f32d3-22ca-4fc6-a79d-327df450aa22","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc075b90-3f38-4545-80af-599f276037dc","type":"BasicTicker"}},"id":"9cf32a6c-ff08-49a1-8840-c6de00b243eb","type":"LinearAxis"},{"attributes":{},"id":"21cc6363-4455-4eea-936f-c1541e5e7646","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"157121f9-0613-40f4-a367-5d2da0ff9cdb","type":"PanTool"},{"id":"69d0448c-8c9b-489f-b348-ff38912db481","type":"WheelZoomTool"},{"id":"ee25e21f-644a-4dd7-9148-5158de8e9675","type":"BoxZoomTool"},{"id":"61e2dee5-9149-4b26-aa46-2d68290558dc","type":"SaveTool"},{"id":"7f7cfe31-f793-4589-b43a-4bb4756a58db","type":"ResetTool"},{"id":"8ca8d054-80a5-4f34-ab4e-ff006deb680b","type":"HelpTool"}]},"id":"d1c26ead-e6fb-4be1-8b9f-8a43ded0caf7","type":"Toolbar"},{"attributes":{"callback":null},"id":"e2107d9c-cdc8-4070-bd6c-3fccba724c87","type":"DataRange1d"},{"attributes":{"source":{"id":"f982db0a-e849-4635-b6c3-4792194d623d","type":"ColumnDataSource"}},"id":"cdeb9766-ca03-4172-a6ad-186a7e1753a5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c7d422f-e791-42c3-8ec5-8db52bc6c46f","type":"Square"},{"attributes":{"formatter":{"id":"f88eeff7-2a38-4be5-beb7-ec8b0297a8a5","type":"BasicTickFormatter"},"plot":{"id":"74f122ca-22b1-4b35-976e-ad3c45226383","subtype":"Figure","type":"Plot"},"ticker":{"id":"a22e7cc4-f10c-4805-9d91-a4c424ed411e","type":"BasicTicker"}},"id":"6f225086-3d9c-4a28-a1f1-1ef5a3af87d2","type":"LinearAxis"},{"attributes":{},"id":"c745cfa2-6a97-47ea-9a3e-9417a979e301","type":"LinearScale"},{"attributes":{"formatter":{"id":"4173f15e-49d5-4ef0-aacb-5345450b3a50","type":"BasicTickFormatter"},"plot":{"id":"f4ec90b8-e1a1-42f8-94d3-a86c0ab37a85","subtype":"Figure","type":"Plot"},"ticker":{"id":"63cc807a-f6d1-4467-9c2f-cb0deab183b6","type":"BasicTicker"}},"id":"55b4a05d-36b3-4e17-9d8b-0aa0bca9c80e","type":"LinearAxis"},{"attributes":{},"id":"3d6fad98-fc0c-469b-bef3-b08193431491","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bf610194-8da2-4148-9955-fb70e27fe369","type":"BoxAnnotation"},{"attributes":{},"id":"bb8636a2-da10-40e6-8633-2233780ed155","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1b5805c1-fc21-4dca-86b4-03192a8dca52","type":"BasicTickFormatter"},"plot":{"id":"74f122ca-22b1-4b35-976e-ad3c45226383","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3960b13-dd63-46d8-bf5a-cf132e71e123","type":"BasicTicker"}},"id":"1740f4f3-109f-452b-b327-db07d4266fed","type":"LinearAxis"},{"attributes":{"plot":{"id":"f4ec90b8-e1a1-42f8-94d3-a86c0ab37a85","subtype":"Figure","type":"Plot"},"ticker":{"id":"63cc807a-f6d1-4467-9c2f-cb0deab183b6","type":"BasicTicker"}},"id":"b869f036-89ec-4487-883a-5c3bd769fa94","type":"Grid"},{"attributes":{},"id":"43d189bd-84f7-485a-8cba-cc66e8715477","type":"PanTool"},{"attributes":{},"id":"45241406-4ce3-464c-900c-a1fcbebef80b","type":"SaveTool"},{"attributes":{"overlay":{"id":"197f2501-da59-46e3-a6b8-fffd0e1eaf92","type":"BoxAnnotation"}},"id":"ee25e21f-644a-4dd7-9148-5158de8e9675","type":"BoxZoomTool"},{"attributes":{},"id":"537f33b9-7531-468e-84e3-e8289df7f836","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dd33c8b5-a47b-4aae-97c4-1a204889b0e1","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"6f225086-3d9c-4a28-a1f1-1ef5a3af87d2","type":"LinearAxis"}],"left":[{"id":"1740f4f3-109f-452b-b327-db07d4266fed","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"6f225086-3d9c-4a28-a1f1-1ef5a3af87d2","type":"LinearAxis"},{"id":"772e93d1-2099-4644-99b3-9f4b6377ce5b","type":"Grid"},{"id":"1740f4f3-109f-452b-b327-db07d4266fed","type":"LinearAxis"},{"id":"91410f53-f92d-4e4a-b3fc-ff5a23b34f39","type":"Grid"},{"id":"197f2501-da59-46e3-a6b8-fffd0e1eaf92","type":"BoxAnnotation"},{"id":"a11d5c27-d138-438d-93d7-c5023d861063","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d1c26ead-e6fb-4be1-8b9f-8a43ded0caf7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e2107d9c-cdc8-4070-bd6c-3fccba724c87","type":"DataRange1d"},"x_scale":{"id":"ad6abc1e-2954-45fa-83d9-454ca860da72","type":"LinearScale"},"y_range":{"id":"bb5ddb36-df9d-4d73-b7ec-56009378b5bb","type":"DataRange1d"},"y_scale":{"id":"20e6474e-6380-4c84-9ec0-849cb21b869b","type":"LinearScale"}},"id":"74f122ca-22b1-4b35-976e-ad3c45226383","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"55ecfad0-76ff-4644-96e3-c5f514186bc2","type":"WheelZoomTool"},{"attributes":{},"id":"4173f15e-49d5-4ef0-aacb-5345450b3a50","type":"BasicTickFormatter"},{"attributes":{},"id":"a3960b13-dd63-46d8-bf5a-cf132e71e123","type":"BasicTicker"},{"attributes":{},"id":"9528e42f-4222-421b-a505-9252118eb3a4","type":"BasicTicker"},{"attributes":{},"id":"8ca8d054-80a5-4f34-ab4e-ff006deb680b","type":"HelpTool"},{"attributes":{},"id":"1b5805c1-fc21-4dca-86b4-03192a8dca52","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f982db0a-e849-4635-b6c3-4792194d623d","type":"ColumnDataSource"},"glyph":{"id":"be36debf-a38a-4f03-813a-747acb30162a","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e27465ab-260f-43a8-8493-5ea743ec0474","type":"Triangle"},"selection_glyph":null,"view":{"id":"cdeb9766-ca03-4172-a6ad-186a7e1753a5","type":"CDSView"}},"id":"d8d8cb06-db44-4cff-a092-6e9f64bedcb8","type":"GlyphRenderer"},{"attributes":{},"id":"ad6abc1e-2954-45fa-83d9-454ca860da72","type":"LinearScale"},{"attributes":{},"id":"157121f9-0613-40f4-a367-5d2da0ff9cdb","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7c6603d8-7f89-4aa1-b6af-0a60ad164297","type":"PanTool"},{"id":"55ecfad0-76ff-4644-96e3-c5f514186bc2","type":"WheelZoomTool"},{"id":"5bb9496a-d94e-4bb9-91e3-3a9d491b474e","type":"BoxZoomTool"},{"id":"b847440f-f0f4-4090-9827-01ce3862dfe8","type":"SaveTool"},{"id":"0e946a47-a110-47cb-8b16-8c750286f7ee","type":"ResetTool"},{"id":"572aaf21-1f3d-4840-bd5c-8e65f5471086","type":"HelpTool"}]},"id":"f9fce469-1e34-47c2-8f8a-d854821a1b7d","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"74f122ca-22b1-4b35-976e-ad3c45226383","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3960b13-dd63-46d8-bf5a-cf132e71e123","type":"BasicTicker"}},"id":"91410f53-f92d-4e4a-b3fc-ff5a23b34f39","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d863f087-6a8f-4f11-a4f8-24815a857ff4","type":"Square"},{"attributes":{"children":[{"id":"e13f32d3-22ca-4fc6-a79d-327df450aa22","subtype":"Figure","type":"Plot"},{"id":"f4ec90b8-e1a1-42f8-94d3-a86c0ab37a85","subtype":"Figure","type":"Plot"},{"id":"74f122ca-22b1-4b35-976e-ad3c45226383","subtype":"Figure","type":"Plot"}]},"id":"2406e777-69b9-42a6-9963-425ee18d89b7","type":"Row"},{"attributes":{},"id":"20e6474e-6380-4c84-9ec0-849cb21b869b","type":"LinearScale"},{"attributes":{"data_source":{"id":"a1b52657-0a92-486a-a394-afc8e9788c0a","type":"ColumnDataSource"},"glyph":{"id":"d863f087-6a8f-4f11-a4f8-24815a857ff4","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c7d422f-e791-42c3-8ec5-8db52bc6c46f","type":"Square"},"selection_glyph":null,"view":{"id":"c06e708b-a96d-4ed2-9823-cef28f6dc88a","type":"CDSView"}},"id":"a11d5c27-d138-438d-93d7-c5023d861063","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9cf32a6c-ff08-49a1-8840-c6de00b243eb","type":"LinearAxis"}],"left":[{"id":"2ea92af5-5984-41db-8e76-02d59be28a49","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9cf32a6c-ff08-49a1-8840-c6de00b243eb","type":"LinearAxis"},{"id":"a36b9adc-cc78-4bff-89d4-d589dd013edb","type":"Grid"},{"id":"2ea92af5-5984-41db-8e76-02d59be28a49","type":"LinearAxis"},{"id":"a428b643-fde7-40ea-ab15-7d20df8a8581","type":"Grid"},{"id":"bf610194-8da2-4148-9955-fb70e27fe369","type":"BoxAnnotation"},{"id":"68b88aa0-2414-4943-a1df-b16384cb70fe","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f9fce469-1e34-47c2-8f8a-d854821a1b7d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e2107d9c-cdc8-4070-bd6c-3fccba724c87","type":"DataRange1d"},"x_scale":{"id":"c745cfa2-6a97-47ea-9a3e-9417a979e301","type":"LinearScale"},"y_range":{"id":"a159c9b6-6934-4827-8776-b7a3e04df497","type":"DataRange1d"},"y_scale":{"id":"8989678a-dd46-4619-9662-f74122a4bad5","type":"LinearScale"}},"id":"e13f32d3-22ca-4fc6-a79d-327df450aa22","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"65e5075f-fd8a-413d-a65c-2df4d4a5be48","type":"ColumnDataSource"},{"attributes":{},"id":"89126e41-0986-4c03-86e8-6c8763a5455a","type":"BasicTickFormatter"},{"attributes":{},"id":"7c6603d8-7f89-4aa1-b6af-0a60ad164297","type":"PanTool"}],"root_ids":["c6988c4d-2186-4bb4-8f30-89a08b5e26c3"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"be778e30-5f9b-4681-a9f5-1b56783bdd34","elementid":"9a6ef4c9-eb2d-46e1-92a6-19ddcdd1014a","modelid":"c6988c4d-2186-4bb4-8f30-89a08b5e26c3"}];
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