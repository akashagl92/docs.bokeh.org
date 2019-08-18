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
      };var element = document.getElementById("016e917f-7b30-49ca-826d-521347722574");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '016e917f-7b30-49ca-826d-521347722574' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"84b7ad3f-6aa9-4595-b20d-9d33104598aa":{"roots":{"references":[{"attributes":{},"id":"25dd6f85-fe54-43cd-9f25-33450ff3adc2","type":"SaveTool"},{"attributes":{"source":{"id":"ec35772c-1f80-4fd8-9bc1-e487323377f6","type":"ColumnDataSource"}},"id":"6d894203-b335-4f7d-bc5f-f983ccfce040","type":"CDSView"},{"attributes":{},"id":"7420c5a1-acba-4b26-8d69-3928acd7af94","type":"BasicTicker"},{"attributes":{"data_source":{"id":"44c956f5-a608-4f9e-b537-8a30e9e796a5","type":"ColumnDataSource"},"glyph":{"id":"8aabe45f-935d-475e-b15b-80122033e86f","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71199d36-4495-4b0e-9c32-cbc3601acffe","type":"Segment"},"selection_glyph":null,"view":{"id":"fd3ab58f-50c6-40c7-a973-5648931a440e","type":"CDSView"}},"id":"d7bb2f41-371e-40bc-b1e3-ab131f45f23c","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"71199d36-4495-4b0e-9c32-cbc3601acffe","type":"Segment"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"25dd6f85-fe54-43cd-9f25-33450ff3adc2","type":"SaveTool"}]},"id":"3ad9c5c9-c938-4649-afc6-2534c907ed7f","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"92a16689-40eb-49d6-ad78-08efd0b2711a","type":"Rect"},{"attributes":{},"id":"bc0c9ace-c826-459a-b94e-84fcb477942f","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"9db707ba-39ac-4493-9637-110773f14c18","type":"ColumnDataSource"}},"id":"172b45f6-9f33-4cd8-a4fd-82d17c5ab645","type":"CDSView"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0c18652a-cda3-45f7-bb07-360aace8a6d5","type":"Segment"},{"attributes":{"source":{"id":"e20fe9af-4f07-45b1-a0e5-c9c77ccb9f92","type":"ColumnDataSource"}},"id":"79fafb55-3fb2-483b-97b2-3b56591916f1","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"j1gbBPllBcCYj3HuGaoFwCCAFkS7A/6/JOQvSo+c+r9wVf5GO8/lv/ZacAOmv+W/","dtype":"float64","shape":[6]}}},"id":"e20fe9af-4f07-45b1-a0e5-c9c77ccb9f92","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"bc0c9ace-c826-459a-b94e-84fcb477942f","type":"BasicTickFormatter"},"plot":{"id":"2056668c-3931-48f4-93e7-07b896234bfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"7420c5a1-acba-4b26-8d69-3928acd7af94","type":"BasicTicker"}},"id":"0e401833-5b80-4f45-88f7-d258b428e1b6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1db7d08e-e6a6-4742-8f9e-d52794ca1a9d","type":"ColumnDataSource"},"glyph":{"id":"fc84993c-4e7d-457e-a178-7da6bb52a1d4","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e19d840e-a611-4955-b3f5-afc8ca9ad522","type":"Rect"},"selection_glyph":null,"view":{"id":"ac5341a0-de36-4da8-a054-90edb0f93ba8","type":"CDSView"}},"id":"49833461-fcff-41cb-b677-6e89811f45ce","type":"GlyphRenderer"},{"attributes":{},"id":"332977f0-9fe1-4f6e-98e3-55a540ed2db7","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"22223751-21fe-4644-adcd-8f9f9eae0265","type":"ColumnDataSource"},"glyph":{"id":"c50e3ea5-4d51-435f-aabd-3d2ca37dd0e4","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"089ae09d-5622-412d-a716-c34e99856ce9","type":"VBar"},"selection_glyph":null,"view":{"id":"184bf791-2c70-4443-ac3e-fb7c11d0a330","type":"CDSView"}},"id":"494cdb1c-94cb-409c-9515-3ceb0607a536","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3d0655b4-96f3-4bb3-bb3f-d6bbc43f5328","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"2056668c-3931-48f4-93e7-07b896234bfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"332977f0-9fe1-4f6e-98e3-55a540ed2db7","type":"CategoricalTicker"}},"id":"a187ae29-376c-4542-ae33-19c18d6c378d","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"c587398b-4b4e-40ee-9a97-9bf7ab870c1c","type":"ColumnDataSource"},"glyph":{"id":"0c18652a-cda3-45f7-bb07-360aace8a6d5","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9373f33-ebf1-463b-98eb-b3deedb9bed5","type":"Segment"},"selection_glyph":null,"view":{"id":"b7703c1e-4334-4bfc-9b35-2ef916a67f9e","type":"CDSView"}},"id":"a5553e9b-df75-43d5-8d17-e47448476446","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"1ebb1dae-7787-4e2d-96d3-22b7e502a6be","type":"FactorRange"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"d9373f33-ebf1-463b-98eb-b3deedb9bed5","type":"Segment"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"vZu5a+uq6D8R77fvF6LlP1/9oW96Xvs/okmZSwTK+z9pzdX08XUFQKUw05YmhgNA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"VFU0k2siwT+m8i1gCfy+vwlcjxkps+0/VyDKqj0i8D+smG2zF2IAQGFlqH8zNP0/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"22223751-21fe-4644-adcd-8f9f9eae0265","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"2056668c-3931-48f4-93e7-07b896234bfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"7420c5a1-acba-4b26-8d69-3928acd7af94","type":"BasicTicker"}},"id":"c9522b70-85bf-4052-b830-12ef67fe115a","type":"Grid"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"j1gbBPllBcCYj3HuGaoFwCCAFkS7A/6/JOQvSo+c+r9wVf5GO8/lv/ZacAOmv+W/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"pJYfQ8R65L+2vK3t567lvxiTLdKTqdE/gBDwcYsd2D9o5QB+FmT1P/v05k1AFPM/","dtype":"float64","shape":[6]}}},"id":"c587398b-4b4e-40ee-9a97-9bf7ab870c1c","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"2056668c-3931-48f4-93e7-07b896234bfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"332977f0-9fe1-4f6e-98e3-55a540ed2db7","type":"CategoricalTicker"}},"id":"b5f673cf-a080-4203-ae13-b37b15941c91","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"VFU0k2siwT+m8i1gCfy+vwlcjxkps+0/VyDKqj0i8D+smG2zF2IAQGFlqH8zNP0/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"pJYfQ8R65L+2vK3t567lvxiTLdKTqdE/gBDwcYsd2D9o5QB+FmT1P/v05k1AFPM/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"ec35772c-1f80-4fd8-9bc1-e487323377f6","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1db7d08e-e6a6-4742-8f9e-d52794ca1a9d","type":"ColumnDataSource"}},"id":"ac5341a0-de36-4da8-a054-90edb0f93ba8","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"92b080fd-6cbf-4282-8ffc-ff4c7f615893","type":"Circle"},{"attributes":{"data_source":{"id":"ec35772c-1f80-4fd8-9bc1-e487323377f6","type":"ColumnDataSource"},"glyph":{"id":"2b9dc406-f0e8-479d-894b-7d268e2260fc","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ca49f96e-1256-4d03-9a2c-829344dfde3d","type":"VBar"},"selection_glyph":null,"view":{"id":"6d894203-b335-4f7d-bc5f-f983ccfce040","type":"CDSView"}},"id":"80dcf502-da67-4635-96ed-ae585b88b77d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","c","d","d","d","d","e","e","f","f"],"y":[3.066445063415942,-2.9314733240277153,-2.864959534681406,-1.9583812570772854,4.282808127758194,3.9027308679192307,-2.5124242379372266,-1.8183242291418824,-1.6460254174508835,-0.7854384928049583,-0.6801251001131252,4.31873397744601]}},"id":"9db707ba-39ac-4493-9637-110773f14c18","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"ca49f96e-1256-4d03-9a2c-829344dfde3d","type":"VBar"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"2b9dc406-f0e8-479d-894b-7d268e2260fc","type":"VBar"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"09l/vNwYB0DS+plma7IEQPV0VHPrqQ5A85giOfs2DkBGVL1uT1YRQPBgUR8YQBFA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"vZu5a+uq6D8R77fvF6LlP1/9oW96Xvs/okmZSwTK+z9pzdX08XUFQKUw05YmhgNA","dtype":"float64","shape":[6]}}},"id":"44c956f5-a608-4f9e-b537-8a30e9e796a5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9db707ba-39ac-4493-9637-110773f14c18","type":"ColumnDataSource"},"glyph":{"id":"024e7560-c251-4b81-813e-f81bd7fc3750","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"92b080fd-6cbf-4282-8ffc-ff4c7f615893","type":"Circle"},"selection_glyph":null,"view":{"id":"172b45f6-9f33-4cd8-a4fd-82d17c5ab645","type":"CDSView"}},"id":"99dc742c-4f46-4359-8bfa-9b38c53e5f8f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c587398b-4b4e-40ee-9a97-9bf7ab870c1c","type":"ColumnDataSource"}},"id":"b7703c1e-4334-4bfc-9b35-2ef916a67f9e","type":"CDSView"},{"attributes":{},"id":"3d0655b4-96f3-4bb3-bb3f-d6bbc43f5328","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"089ae09d-5622-412d-a716-c34e99856ce9","type":"VBar"},{"attributes":{"plot":null,"text":""},"id":"fbc7b558-9e37-40e7-9e0b-1de0201ec06e","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc84993c-4e7d-457e-a178-7da6bb52a1d4","type":"Rect"},{"attributes":{},"id":"1dce460f-0ffd-4ecc-b078-b39fc3a45f14","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"09l/vNwYB0DS+plma7IEQPV0VHPrqQ5A85giOfs2DkBGVL1uT1YRQPBgUR8YQBFA","dtype":"float64","shape":[6]}}},"id":"1db7d08e-e6a6-4742-8f9e-d52794ca1a9d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e20fe9af-4f07-45b1-a0e5-c9c77ccb9f92","type":"ColumnDataSource"},"glyph":{"id":"92a16689-40eb-49d6-ad78-08efd0b2711a","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"952f6374-12ac-4baa-b49e-25ac3a813360","type":"Rect"},"selection_glyph":null,"view":{"id":"79fafb55-3fb2-483b-97b2-3b56591916f1","type":"CDSView"}},"id":"f8f7fa7f-c51f-47f4-9fc8-542157dc6098","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"024e7560-c251-4b81-813e-f81bd7fc3750","type":"Circle"},{"attributes":{"source":{"id":"22223751-21fe-4644-adcd-8f9f9eae0265","type":"ColumnDataSource"}},"id":"184bf791-2c70-4443-ac3e-fb7c11d0a330","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"c50e3ea5-4d51-435f-aabd-3d2ca37dd0e4","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"952f6374-12ac-4baa-b49e-25ac3a813360","type":"Rect"},{"attributes":{},"id":"1dc26ab4-03c6-450f-a449-8405661991f9","type":"LinearScale"},{"attributes":{"source":{"id":"44c956f5-a608-4f9e-b537-8a30e9e796a5","type":"ColumnDataSource"}},"id":"fd3ab58f-50c6-40c7-a973-5648931a440e","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e19d840e-a611-4955-b3f5-afc8ca9ad522","type":"Rect"},{"attributes":{"callback":null},"id":"f3dd7b4b-08f3-447c-949d-c6a9726ad799","type":"DataRange1d"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"a187ae29-376c-4542-ae33-19c18d6c378d","type":"CategoricalAxis"}],"left":[{"id":"0e401833-5b80-4f45-88f7-d258b428e1b6","type":"LinearAxis"}],"renderers":[{"id":"a187ae29-376c-4542-ae33-19c18d6c378d","type":"CategoricalAxis"},{"id":"b5f673cf-a080-4203-ae13-b37b15941c91","type":"Grid"},{"id":"0e401833-5b80-4f45-88f7-d258b428e1b6","type":"LinearAxis"},{"id":"c9522b70-85bf-4052-b830-12ef67fe115a","type":"Grid"},{"id":"d7bb2f41-371e-40bc-b1e3-ab131f45f23c","type":"GlyphRenderer"},{"id":"a5553e9b-df75-43d5-8d17-e47448476446","type":"GlyphRenderer"},{"id":"494cdb1c-94cb-409c-9515-3ceb0607a536","type":"GlyphRenderer"},{"id":"80dcf502-da67-4635-96ed-ae585b88b77d","type":"GlyphRenderer"},{"id":"f8f7fa7f-c51f-47f4-9fc8-542157dc6098","type":"GlyphRenderer"},{"id":"49833461-fcff-41cb-b677-6e89811f45ce","type":"GlyphRenderer"},{"id":"99dc742c-4f46-4359-8bfa-9b38c53e5f8f","type":"GlyphRenderer"}],"title":{"id":"fbc7b558-9e37-40e7-9e0b-1de0201ec06e","type":"Title"},"toolbar":{"id":"3ad9c5c9-c938-4649-afc6-2534c907ed7f","type":"Toolbar"},"x_range":{"id":"1ebb1dae-7787-4e2d-96d3-22b7e502a6be","type":"FactorRange"},"x_scale":{"id":"1dce460f-0ffd-4ecc-b078-b39fc3a45f14","type":"CategoricalScale"},"y_range":{"id":"f3dd7b4b-08f3-447c-949d-c6a9726ad799","type":"DataRange1d"},"y_scale":{"id":"1dc26ab4-03c6-450f-a449-8405661991f9","type":"LinearScale"}},"id":"2056668c-3931-48f4-93e7-07b896234bfe","subtype":"Figure","type":"Plot"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"8aabe45f-935d-475e-b15b-80122033e86f","type":"Segment"}],"root_ids":["2056668c-3931-48f4-93e7-07b896234bfe"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"84b7ad3f-6aa9-4595-b20d-9d33104598aa","elementid":"016e917f-7b30-49ca-826d-521347722574","modelid":"2056668c-3931-48f4-93e7-07b896234bfe"}];
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