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
      };var element = document.getElementById("93536acb-0e75-4ac5-aa73-ea75f6317b05");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93536acb-0e75-4ac5-aa73-ea75f6317b05' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4b968c0c-71b1-4895-895b-b29038eeb22f":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"109c78ec-6ca1-4af3-a24a-f3f20ecabc9f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7579a2b4-7dfa-4400-899d-947ea27e1cac","type":"ColumnDataSource"}},"id":"a48d4f1d-bdec-457e-ac48-504797159e2b","type":"CDSView"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"537160e9-d009-4a9b-a8cb-a59b8ab9907c","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"cc35e70e-c3dd-46d0-aa48-b3104df8941e","type":"Circle"},{"attributes":{"data_source":{"id":"109c78ec-6ca1-4af3-a24a-f3f20ecabc9f","type":"ColumnDataSource"},"glyph":{"id":"0cc9f48e-bc66-49e8-89b6-9df702fb8ab9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3c52a908-80c6-4935-9c08-82be5dd4d00b","type":"Circle"},"selection_glyph":null,"view":{"id":"86966bf8-71c2-4700-9016-367f423f2942","type":"CDSView"}},"id":"301c64f2-4c68-4c99-acc4-b63b8cd101af","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"6e4f9fb4-84d0-4545-8314-792b8f5bbdb2","type":"BoxAnnotation"}},"id":"aac1b3f9-5835-48de-8380-595d4b378634","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"6df08618-20a1-4804-a4c2-a7a4ede94242","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"6aa35369-5470-40e4-bc1f-bdb28b0129c2","type":"Jitter"},{"attributes":{"data_source":{"id":"452a1c7e-2fd0-4f94-a2fe-a0bcfd3cf086","type":"ColumnDataSource"},"glyph":{"id":"4b1434da-9734-4bad-8c24-f437165d1ae0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0980651a-e03a-42bf-8e10-365717532ef6","type":"Circle"},"selection_glyph":null,"view":{"id":"e4058fa5-b011-47fd-9f08-da7ff220166a","type":"CDSView"}},"id":"95d6d2af-bedb-4a77-90bd-75e940d8aa8c","type":"GlyphRenderer"},{"attributes":{},"id":"e6d2bc3b-527d-40ef-befb-8838800cb9f1","type":"SaveTool"},{"attributes":{"data_source":{"id":"68f203b1-2d79-4328-b07e-0b69fe765d0b","type":"ColumnDataSource"},"glyph":{"id":"7cc0339a-b9e1-4b54-8495-690f934aa02c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65421c3b-0ce2-4a85-8ce4-6664524b3e20","type":"Circle"},"selection_glyph":null,"view":{"id":"dfc70076-5567-4a98-a330-4b996f57ffe5","type":"CDSView"}},"id":"5f2a17ec-2de1-4c2a-89ae-861b7bdf936c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"ce569154-1600-494e-93d9-99a7d56266dc","type":"ColumnDataSource"},{"attributes":{},"id":"bff263aa-3015-4cf7-b0da-976cd4a0d7d0","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"88090351-f57d-4c7a-8e02-c923d56fda8f","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"65421c3b-0ce2-4a85-8ce4-6664524b3e20","type":"Circle"},{"attributes":{"formatter":{"id":"74cb91bf-6c43-42ac-a3b9-35e580e8413c","type":"BasicTickFormatter"},"plot":{"id":"e8d50539-7806-4138-8349-fb3ef7b070c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d00cfd41-5609-494f-b877-4a0bf9e7dc71","type":"BasicTicker"}},"id":"cb88704d-31d3-4ed9-b0a5-b4ca77fd3347","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"a4e8c165-2836-461f-a6ee-9e1ac9a167a7","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"26f07fec-d0cb-4b13-9216-956fcb72255b","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"88090351-f57d-4c7a-8e02-c923d56fda8f","type":"Jitter"},"value":74},"y":{"field":"y"}},"id":"7cc0339a-b9e1-4b54-8495-690f934aa02c","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"53a1b922-b836-4144-b5b1-cc8f401022e6","type":"Circle"},{"attributes":{"range":null},"id":"15de2e40-0593-49be-a05a-5ff2a6db3d06","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"6330ffa9-82b3-482e-8865-5c6b822c8124","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"6aa35369-5470-40e4-bc1f-bdb28b0129c2","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"ba5074fa-dbe2-4257-9118-688587390dee","type":"Circle"},{"attributes":{"overlay":{"id":"6f74c376-cd06-4a3d-ada5-096770af14d4","type":"BoxAnnotation"}},"id":"7774d089-f948-4a6e-a9dc-94d946339fdf","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"37fd65c9-a0f2-481e-afc6-eaa6c0a77baf","type":"ColumnDataSource"},"glyph":{"id":"a010205f-917e-45f9-9049-a50fbf7ef9f0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58c8bb2a-107b-4814-b331-03af05061dff","type":"Circle"},"selection_glyph":null,"view":{"id":"1ca22cb0-e4e7-4c5e-9e3a-50e3c3990d07","type":"CDSView"}},"id":"5ddbbbac-247b-4b06-9874-9b60c46fe10d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6df08618-20a1-4804-a4c2-a7a4ede94242","type":"ColumnDataSource"}},"id":"c12ff502-7edc-4db3-ab80-e4667d33e217","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"d341f226-9e56-457b-ae26-a3625e7dc77a","type":"ColumnDataSource"},{"attributes":{},"id":"417a1b2a-829e-4073-b835-349b0b50b37b","type":"LinearScale"},{"attributes":{},"id":"60efad5e-de26-45d8-8f7c-9e622af534d5","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0d5735b4-1f9b-4796-a2f1-9fb7a2e26881","type":"BasicTickFormatter"},"plot":{"id":"e8d50539-7806-4138-8349-fb3ef7b070c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccae21c5-16ea-429e-94f3-f829c3e3b83f","type":"BasicTicker"}},"id":"62f75ac4-fb0c-40b5-a231-5955551cb316","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"932c713a-5358-45f4-8a3c-87bcad9e7407","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"7d27e9c6-a178-4876-a98c-6da0ba0c692f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"0980651a-e03a-42bf-8e10-365717532ef6","type":"Circle"},{"attributes":{},"id":"fa498d2d-da2f-46e2-92c6-4b639aa695f8","type":"WheelZoomTool"},{"attributes":{},"id":"909ec4b3-3c9d-435b-922f-152f2643b2d8","type":"PanTool"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"2350c99d-d1e6-4c8f-8eba-26b94aa67f53","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"9ed34670-c6f4-413c-b365-5b08d17d5984","type":"Circle"},{"attributes":{},"id":"93fb6b42-9a18-4b49-807c-1495b97c25e8","type":"ResetTool"},{"attributes":{"below":[{"id":"62f75ac4-fb0c-40b5-a231-5955551cb316","type":"LinearAxis"}],"left":[{"id":"cb88704d-31d3-4ed9-b0a5-b4ca77fd3347","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"62f75ac4-fb0c-40b5-a231-5955551cb316","type":"LinearAxis"},{"id":"f5628b38-696f-4b5e-bb22-0adc87c0552d","type":"Grid"},{"id":"cb88704d-31d3-4ed9-b0a5-b4ca77fd3347","type":"LinearAxis"},{"id":"748111a8-256f-4b78-8d49-e95a5e99a99b","type":"Grid"},{"id":"6f74c376-cd06-4a3d-ada5-096770af14d4","type":"BoxAnnotation"},{"id":"ab718ba0-aea5-4c94-ad44-14d08240f775","type":"GlyphRenderer"},{"id":"eeb234a0-a6c8-4bbf-b14e-824408e5f980","type":"GlyphRenderer"},{"id":"c4595639-a696-4b43-9c9d-ff65f27b7a33","type":"GlyphRenderer"},{"id":"5535d894-9b0b-496a-91ec-83ce020f5539","type":"GlyphRenderer"},{"id":"5f2a17ec-2de1-4c2a-89ae-861b7bdf936c","type":"GlyphRenderer"},{"id":"11fac736-c70c-4a8a-8ed0-477e92fa58de","type":"GlyphRenderer"},{"id":"d305972f-9907-4dc8-b6c7-647b806d6cac","type":"GlyphRenderer"},{"id":"06db4f59-1a00-4f28-b88d-faf2318f8605","type":"GlyphRenderer"},{"id":"a70fc5bb-4388-443a-a289-4e33e10324d6","type":"GlyphRenderer"},{"id":"d39f2b08-74ed-4b5a-a923-a43511a4a6dc","type":"GlyphRenderer"},{"id":"9e71619e-b459-4806-9fd9-ac87ffce2ca8","type":"GlyphRenderer"},{"id":"7f787b9a-cdb5-472f-9336-78e918f362c1","type":"GlyphRenderer"},{"id":"784066f6-89fb-4ee6-a5cf-13a73d4c38b7","type":"GlyphRenderer"}],"title":{"id":"358d78f2-04ff-4c42-9fc5-156a5b49e7b2","type":"Title"},"toolbar":{"id":"39e3c908-be5c-47eb-a3c1-3c0aa768d9a4","type":"Toolbar"},"x_range":{"id":"6e7cae63-2ede-4635-b082-e1046cee077b","type":"DataRange1d"},"x_scale":{"id":"417a1b2a-829e-4073-b835-349b0b50b37b","type":"LinearScale"},"y_range":{"id":"c8449279-2745-4723-9195-2b7c3b5fc571","type":"DataRange1d"},"y_scale":{"id":"b28075f1-1e7d-4450-8a34-d16103c13438","type":"LinearScale"}},"id":"e8d50539-7806-4138-8349-fb3ef7b070c4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d00cfd41-5609-494f-b877-4a0bf9e7dc71","type":"BasicTicker"},{"attributes":{},"id":"74cb91bf-6c43-42ac-a3b9-35e580e8413c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"97da5155-64f3-445f-ba2e-3ab74ca6a0fb","type":"ColumnDataSource"},{"attributes":{},"id":"b28075f1-1e7d-4450-8a34-d16103c13438","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"731e6714-b617-4382-95e6-4a288602e774","type":"Circle"},{"attributes":{"source":{"id":"68f203b1-2d79-4328-b07e-0b69fe765d0b","type":"ColumnDataSource"}},"id":"dfc70076-5567-4a98-a330-4b996f57ffe5","type":"CDSView"},{"attributes":{"source":{"id":"7d27e9c6-a178-4876-a98c-6da0ba0c692f","type":"ColumnDataSource"}},"id":"607cdb8c-1d1f-4550-b7eb-81256d08823e","type":"CDSView"},{"attributes":{"source":{"id":"2a6ddb8b-3e00-4fcc-954f-e14feacd1d04","type":"ColumnDataSource"}},"id":"31522e37-e5f7-4408-965e-e58d0d56e942","type":"CDSView"},{"attributes":{"data_source":{"id":"b613f84f-7fab-4234-9968-6fe459cb121f","type":"ColumnDataSource"},"glyph":{"id":"d24827e3-1e52-4687-bb50-cd6713e7d4cc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23379242-2e8f-45ca-a077-f3bf57f32096","type":"Circle"},"selection_glyph":null,"view":{"id":"56594f85-5399-45bf-92c0-1dd1cf14f5e5","type":"CDSView"}},"id":"7f787b9a-cdb5-472f-9336-78e918f362c1","type":"GlyphRenderer"},{"attributes":{},"id":"ccae21c5-16ea-429e-94f3-f829c3e3b83f","type":"BasicTicker"},{"attributes":{"range":null},"id":"537160e9-d009-4a9b-a8cb-a59b8ab9907c","type":"Jitter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"4b1434da-9734-4bad-8c24-f437165d1ae0","type":"Circle"},{"attributes":{"children":[{"id":"be390304-6b01-4eea-bc81-3d74577cfd1f","subtype":"Figure","type":"Plot"},{"id":"e8d50539-7806-4138-8349-fb3ef7b070c4","subtype":"Figure","type":"Plot"}]},"id":"3174e750-3847-41de-bd69-6939070e56f0","type":"Column"},{"attributes":{"source":{"id":"811ac197-4eeb-4ff4-bc51-6e41958befe2","type":"ColumnDataSource"}},"id":"65264c5a-1bcf-4d15-8a36-1a46361a726a","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"58c8bb2a-107b-4814-b331-03af05061dff","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"transform":{"id":"15de2e40-0593-49be-a05a-5ff2a6db3d06","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"d24827e3-1e52-4687-bb50-cd6713e7d4cc","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"2a6ddb8b-3e00-4fcc-954f-e14feacd1d04","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"452a1c7e-2fd0-4f94-a2fe-a0bcfd3cf086","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6df08618-20a1-4804-a4c2-a7a4ede94242","type":"ColumnDataSource"},"glyph":{"id":"9ed34670-c6f4-413c-b365-5b08d17d5984","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c9d84a56-a0df-4562-bd82-e5d8916d92a7","type":"Circle"},"selection_glyph":null,"view":{"id":"c12ff502-7edc-4db3-ab80-e4667d33e217","type":"CDSView"}},"id":"eeb234a0-a6c8-4bbf-b14e-824408e5f980","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b613f84f-7fab-4234-9968-6fe459cb121f","type":"ColumnDataSource"}},"id":"56594f85-5399-45bf-92c0-1dd1cf14f5e5","type":"CDSView"},{"attributes":{},"id":"4f64fc63-e3de-4d7a-9459-92157c7d7800","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"a4e8c165-2836-461f-a6ee-9e1ac9a167a7","type":"Jitter"},"value":72},"y":{"field":"y"}},"id":"bd31985c-75ba-48fe-bd69-001aa9832957","type":"Circle"},{"attributes":{"source":{"id":"97da5155-64f3-445f-ba2e-3ab74ca6a0fb","type":"ColumnDataSource"}},"id":"c2caecb2-500f-4f9d-9a2a-2382620fbc5f","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"1c4bc15a-2555-4b84-a459-74b625643b1b","type":"ColumnDataSource"},{"attributes":{},"id":"fcd42a37-5bb6-4e9c-9463-49655a3314fc","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6f74c376-cd06-4a3d-ada5-096770af14d4","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"e8d50539-7806-4138-8349-fb3ef7b070c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d00cfd41-5609-494f-b877-4a0bf9e7dc71","type":"BasicTicker"}},"id":"748111a8-256f-4b78-8d49-e95a5e99a99b","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"a010205f-917e-45f9-9049-a50fbf7ef9f0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"2350c99d-d1e6-4c8f-8eba-26b94aa67f53","type":"Jitter"},"value":71},"y":{"field":"y"}},"id":"c9d84a56-a0df-4562-bd82-e5d8916d92a7","type":"Circle"},{"attributes":{"data_source":{"id":"ce569154-1600-494e-93d9-99a7d56266dc","type":"ColumnDataSource"},"glyph":{"id":"990eff96-8c2e-45a5-b855-148c32041d8d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"932c713a-5358-45f4-8a3c-87bcad9e7407","type":"Circle"},"selection_glyph":null,"view":{"id":"17412b1d-3336-405d-896f-9392bce35aec","type":"CDSView"}},"id":"127d6117-b8a1-4133-a0a4-85746c667a73","type":"GlyphRenderer"},{"attributes":{},"id":"f79fe9e2-3b21-4f6c-9761-30045ba0f0da","type":"ResetTool"},{"attributes":{"range":null},"id":"a4e8c165-2836-461f-a6ee-9e1ac9a167a7","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"537160e9-d009-4a9b-a8cb-a59b8ab9907c","type":"Jitter"},"value":73},"y":{"field":"y"}},"id":"4a797463-7ca9-42a9-9669-135a97d6fb5a","type":"Circle"},{"attributes":{"data_source":{"id":"1c4bc15a-2555-4b84-a459-74b625643b1b","type":"ColumnDataSource"},"glyph":{"id":"7f51c071-703b-403c-aa02-7a712326b7bb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6330ffa9-82b3-482e-8865-5c6b822c8124","type":"Circle"},"selection_glyph":null,"view":{"id":"59838277-eb9c-4109-a434-710464e84107","type":"CDSView"}},"id":"c7ec6c49-c7d6-4f8d-bb9b-11aaed91ae92","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"c8449279-2745-4723-9195-2b7c3b5fc571","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"5f4e9d7e-58ab-494e-81e9-b56cd8e8cd2d","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"eda04c5c-d9de-4fa0-9293-9bd485f855a2","type":"Circle"},{"attributes":{"range":null},"id":"2350c99d-d1e6-4c8f-8eba-26b94aa67f53","type":"Jitter"},{"attributes":{"data_source":{"id":"811ac197-4eeb-4ff4-bc51-6e41958befe2","type":"ColumnDataSource"},"glyph":{"id":"af545fe1-9ae3-4e7c-8b98-b040e0f0d7a7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"731e6714-b617-4382-95e6-4a288602e774","type":"Circle"},"selection_glyph":null,"view":{"id":"65264c5a-1bcf-4d15-8a36-1a46361a726a","type":"CDSView"}},"id":"839e8d01-68cb-4d05-9d8c-339e5ddd0d0c","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"7f51c071-703b-403c-aa02-7a712326b7bb","type":"Circle"},{"attributes":{},"id":"1b6c063a-b5c0-49aa-9666-017eb9f95699","type":"SaveTool"},{"attributes":{},"id":"397186a0-884a-48aa-9baa-09b380dde152","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1c4bc15a-2555-4b84-a459-74b625643b1b","type":"ColumnDataSource"}},"id":"59838277-eb9c-4109-a434-710464e84107","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"6aa35369-5470-40e4-bc1f-bdb28b0129c2","type":"Jitter"},"value":70},"y":{"field":"y"}},"id":"a5b95a00-ded8-43d9-b103-721a3c647ade","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"7579a2b4-7dfa-4400-899d-947ea27e1cac","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"6e7cae63-2ede-4635-b082-e1046cee077b","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"0cc9f48e-bc66-49e8-89b6-9df702fb8ab9","type":"Circle"},{"attributes":{"source":{"id":"ce569154-1600-494e-93d9-99a7d56266dc","type":"ColumnDataSource"}},"id":"17412b1d-3336-405d-896f-9392bce35aec","type":"CDSView"},{"attributes":{},"id":"0d5735b4-1f9b-4796-a2f1-9fb7a2e26881","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7d27e9c6-a178-4876-a98c-6da0ba0c692f","type":"ColumnDataSource"},"glyph":{"id":"a5b95a00-ded8-43d9-b103-721a3c647ade","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ba5074fa-dbe2-4257-9118-688587390dee","type":"Circle"},"selection_glyph":null,"view":{"id":"607cdb8c-1d1f-4550-b7eb-81256d08823e","type":"CDSView"}},"id":"ab718ba0-aea5-4c94-ad44-14d08240f775","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"3c52a908-80c6-4935-9c08-82be5dd4d00b","type":"Circle"},{"attributes":{"below":[{"id":"ddbd5595-8ae1-43fa-8383-bed23490f3ce","type":"LinearAxis"}],"left":[{"id":"ac5736cd-2972-4901-87bc-a73d9983af2f","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"ddbd5595-8ae1-43fa-8383-bed23490f3ce","type":"LinearAxis"},{"id":"b39e5a76-e81d-4c73-9f8f-53ba866ca141","type":"Grid"},{"id":"ac5736cd-2972-4901-87bc-a73d9983af2f","type":"LinearAxis"},{"id":"8aa00cc2-fcfa-4031-9ba9-c0f49c757bd6","type":"Grid"},{"id":"6e4f9fb4-84d0-4545-8314-792b8f5bbdb2","type":"BoxAnnotation"},{"id":"95d6d2af-bedb-4a77-90bd-75e940d8aa8c","type":"GlyphRenderer"},{"id":"127d6117-b8a1-4133-a0a4-85746c667a73","type":"GlyphRenderer"},{"id":"301c64f2-4c68-4c99-acc4-b63b8cd101af","type":"GlyphRenderer"},{"id":"9458e978-bde8-4a7e-843d-62c084fde5d3","type":"GlyphRenderer"},{"id":"0ad8bee0-b0c3-4eb1-9daf-9c25b0b0b854","type":"GlyphRenderer"},{"id":"5ddbbbac-247b-4b06-9874-9b60c46fe10d","type":"GlyphRenderer"},{"id":"4297a131-b0ef-4940-8206-772bfd704ed9","type":"GlyphRenderer"},{"id":"0425b4cf-8404-4e27-ac3f-0929ec215373","type":"GlyphRenderer"},{"id":"b3b470df-fe9b-4bae-9905-50284f8bdbd8","type":"GlyphRenderer"},{"id":"5de2ee6a-c4a6-46fd-aa25-1af5bb1b0056","type":"GlyphRenderer"},{"id":"b15487fb-9571-42a1-b5a8-8fe3ed4cdd14","type":"GlyphRenderer"},{"id":"839e8d01-68cb-4d05-9d8c-339e5ddd0d0c","type":"GlyphRenderer"},{"id":"c7ec6c49-c7d6-4f8d-bb9b-11aaed91ae92","type":"GlyphRenderer"}],"title":{"id":"6e8f1203-c132-4d8f-aea7-b5366bc1b6e4","type":"Title"},"toolbar":{"id":"84840cc4-d154-4a57-a18d-5fa9fcb61863","type":"Toolbar"},"x_range":{"id":"39826123-7c04-4747-90aa-f83cae3b4310","type":"DataRange1d"},"x_scale":{"id":"06a27657-6f58-40c3-a577-c4f1ecfb5dab","type":"LinearScale"},"y_range":{"id":"bfd7b059-6d35-4b2a-bdab-f7e3a2549581","type":"DataRange1d"},"y_scale":{"id":"90968eea-2c23-4eaf-a8f0-58063854c693","type":"LinearScale"}},"id":"be390304-6b01-4eea-bc81-3d74577cfd1f","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e4f9fb4-84d0-4545-8314-792b8f5bbdb2","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"d341f226-9e56-457b-ae26-a3625e7dc77a","type":"ColumnDataSource"},"glyph":{"id":"eda04c5c-d9de-4fa0-9293-9bd485f855a2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a62354e6-21e7-4fd2-98f1-f227b7e6e9ef","type":"Circle"},"selection_glyph":null,"view":{"id":"61e20da1-07f8-48d6-93b8-7314dda2dd11","type":"CDSView"}},"id":"784066f6-89fb-4ee6-a5cf-13a73d4c38b7","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"990eff96-8c2e-45a5-b855-148c32041d8d","type":"Circle"},{"attributes":{"source":{"id":"109c78ec-6ca1-4af3-a24a-f3f20ecabc9f","type":"ColumnDataSource"}},"id":"86966bf8-71c2-4700-9016-367f423f2942","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"5b16efab-4eff-4550-8550-9003628e414d","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"416c230c-9155-4b94-8494-d96bccc62a59","type":"Circle"},{"attributes":{"data_source":{"id":"97da5155-64f3-445f-ba2e-3ab74ca6a0fb","type":"ColumnDataSource"},"glyph":{"id":"53a1b922-b836-4144-b5b1-cc8f401022e6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd9af94a-f856-4947-9c2b-b3ba49cdc169","type":"Circle"},"selection_glyph":null,"view":{"id":"c2caecb2-500f-4f9d-9a2a-2382620fbc5f","type":"CDSView"}},"id":"9458e978-bde8-4a7e-843d-62c084fde5d3","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d341f226-9e56-457b-ae26-a3625e7dc77a","type":"ColumnDataSource"}},"id":"61e20da1-07f8-48d6-93b8-7314dda2dd11","type":"CDSView"},{"attributes":{"data_source":{"id":"7579a2b4-7dfa-4400-899d-947ea27e1cac","type":"ColumnDataSource"},"glyph":{"id":"bd31985c-75ba-48fe-bd69-001aa9832957","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26f07fec-d0cb-4b13-9216-956fcb72255b","type":"Circle"},"selection_glyph":null,"view":{"id":"a48d4f1d-bdec-457e-ac48-504797159e2b","type":"CDSView"}},"id":"c4595639-a696-4b43-9c9d-ff65f27b7a33","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"b613f84f-7fab-4234-9968-6fe459cb121f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2a6ddb8b-3e00-4fcc-954f-e14feacd1d04","type":"ColumnDataSource"},"glyph":{"id":"cc35e70e-c3dd-46d0-aa48-b3104df8941e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4a797463-7ca9-42a9-9669-135a97d6fb5a","type":"Circle"},"selection_glyph":null,"view":{"id":"31522e37-e5f7-4408-965e-e58d0d56e942","type":"CDSView"}},"id":"5535d894-9b0b-496a-91ec-83ce020f5539","type":"GlyphRenderer"},{"attributes":{"source":{"id":"452a1c7e-2fd0-4f94-a2fe-a0bcfd3cf086","type":"ColumnDataSource"}},"id":"e4058fa5-b011-47fd-9f08-da7ff220166a","type":"CDSView"},{"attributes":{},"id":"cd6a3b63-130e-49a5-bf9b-b59112b8c23f","type":"HelpTool"},{"attributes":{"range":null},"id":"5f4e9d7e-58ab-494e-81e9-b56cd8e8cd2d","type":"Jitter"},{"attributes":{"plot":{"id":"e8d50539-7806-4138-8349-fb3ef7b070c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccae21c5-16ea-429e-94f3-f829c3e3b83f","type":"BasicTicker"}},"id":"f5628b38-696f-4b5e-bb22-0adc87c0552d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"cd9af94a-f856-4947-9c2b-b3ba49cdc169","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"15de2e40-0593-49be-a05a-5ff2a6db3d06","type":"Jitter"},"value":81},"y":{"field":"y"}},"id":"23379242-2e8f-45ca-a077-f3bf57f32096","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"37fd65c9-a0f2-481e-afc6-eaa6c0a77baf","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"5f4e9d7e-58ab-494e-81e9-b56cd8e8cd2d","type":"Jitter"},"value":82},"y":{"field":"y"}},"id":"a62354e6-21e7-4fd2-98f1-f227b7e6e9ef","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"be390304-6b01-4eea-bc81-3d74577cfd1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa28db71-61ac-4701-9365-e235933da426","type":"BasicTicker"}},"id":"8aa00cc2-fcfa-4031-9ba9-c0f49c757bd6","type":"Grid"},{"attributes":{"callback":null},"id":"39826123-7c04-4747-90aa-f83cae3b4310","type":"DataRange1d"},{"attributes":{"range":null},"id":"d50dc4c2-4e49-44d5-87d2-c93c83a18342","type":"Jitter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"9b1ae7c9-6449-4e32-9637-2724145c178b","type":"Circle"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"transform":{"id":"14652f77-0aa2-4dca-baf7-48db15c2fb33","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"7612e882-f85f-4505-a48c-ef671c9cba16","type":"Circle"},{"attributes":{"range":null},"id":"3a0c2c88-e92f-4475-93a2-a729f08fbf02","type":"Jitter"},{"attributes":{"data_source":{"id":"9df244ab-c20d-4641-971e-c4f5d6b88df4","type":"ColumnDataSource"},"glyph":{"id":"7612e882-f85f-4505-a48c-ef671c9cba16","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c0713481-f204-4450-880e-4562f0e23b2e","type":"Circle"},"selection_glyph":null,"view":{"id":"c7a2a164-a5d0-4d45-bd15-4764dd2f79a3","type":"CDSView"}},"id":"d305972f-9907-4dc8-b6c7-647b806d6cac","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"690f246c-3127-472a-90f0-12849bd881fb","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"transform":{"id":"3a0c2c88-e92f-4475-93a2-a729f08fbf02","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"306a8482-eaee-4fe8-8956-684fe5de5a04","type":"Circle"},{"attributes":{"range":null},"id":"14652f77-0aa2-4dca-baf7-48db15c2fb33","type":"Jitter"},{"attributes":{"source":{"id":"6f1f10d2-cf48-49dd-a52e-8e50beb475c4","type":"ColumnDataSource"}},"id":"4c2ab67e-1d3d-41a7-a82a-92002e37d4ce","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"722f7b7f-b16c-4ef2-870c-e8a552f2d654","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"397186a0-884a-48aa-9baa-09b380dde152","type":"BasicTickFormatter"},"plot":{"id":"be390304-6b01-4eea-bc81-3d74577cfd1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"748ab339-488c-4777-af3c-6a12ce342386","type":"BasicTicker"}},"id":"ddbd5595-8ae1-43fa-8383-bed23490f3ce","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"811ac197-4eeb-4ff4-bc51-6e41958befe2","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"3a0c2c88-e92f-4475-93a2-a729f08fbf02","type":"Jitter"},"value":80},"y":{"field":"y"}},"id":"2bfeb459-1413-4b7a-9fbd-30536f3d58a9","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bff263aa-3015-4cf7-b0da-976cd4a0d7d0","type":"PanTool"},{"id":"fa498d2d-da2f-46e2-92c6-4b639aa695f8","type":"WheelZoomTool"},{"id":"7774d089-f948-4a6e-a9dc-94d946339fdf","type":"BoxZoomTool"},{"id":"e6d2bc3b-527d-40ef-befb-8838800cb9f1","type":"SaveTool"},{"id":"93fb6b42-9a18-4b49-807c-1495b97c25e8","type":"ResetTool"},{"id":"cd6a3b63-130e-49a5-bf9b-b59112b8c23f","type":"HelpTool"}]},"id":"39e3c908-be5c-47eb-a3c1-3c0aa768d9a4","type":"Toolbar"},{"attributes":{"data_source":{"id":"722f7b7f-b16c-4ef2-870c-e8a552f2d654","type":"ColumnDataSource"},"glyph":{"id":"699768d6-557d-4462-a0b4-3ce728cb2ba4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"827e116e-9a75-4f80-8abe-50d7e722cb9c","type":"Circle"},"selection_glyph":null,"view":{"id":"c7cf9db8-11cb-42a5-88fc-8c00fdcf9e69","type":"CDSView"}},"id":"11fac736-c70c-4a8a-8ed0-477e92fa58de","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"3e660c35-994b-458c-9dff-9065f4976142","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"4676f509-0306-44ac-9a58-3f4cef11d2d6","type":"Circle"},{"attributes":{"source":{"id":"68b2e7a8-97c0-4019-88a8-78e1842cce0e","type":"ColumnDataSource"}},"id":"02e3b37b-6269-452d-8601-15163732bc1a","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"6f1f10d2-cf48-49dd-a52e-8e50beb475c4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"be390304-6b01-4eea-bc81-3d74577cfd1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"748ab339-488c-4777-af3c-6a12ce342386","type":"BasicTicker"}},"id":"b39e5a76-e81d-4c73-9f8f-53ba866ca141","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"transform":{"id":"d50dc4c2-4e49-44d5-87d2-c93c83a18342","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"699768d6-557d-4462-a0b4-3ce728cb2ba4","type":"Circle"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"872ac55e-cd45-497f-99f9-c8c519c79f29","type":"Circle"},{"attributes":{"data_source":{"id":"389673ee-808b-4a4c-bcee-c443e1e5f897","type":"ColumnDataSource"},"glyph":{"id":"ed9c70e2-5083-4c0c-800a-d2d65728f658","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3e660c35-994b-458c-9dff-9065f4976142","type":"Circle"},"selection_glyph":null,"view":{"id":"cbfad01f-bafb-41ae-84d3-592d21efc9bb","type":"CDSView"}},"id":"b15487fb-9571-42a1-b5a8-8fe3ed4cdd14","type":"GlyphRenderer"},{"attributes":{},"id":"fa28db71-61ac-4701-9365-e235933da426","type":"BasicTicker"},{"attributes":{"callback":null},"id":"bfd7b059-6d35-4b2a-bdab-f7e3a2549581","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"14652f77-0aa2-4dca-baf7-48db15c2fb33","type":"Jitter"},"value":76},"y":{"field":"y"}},"id":"c0713481-f204-4450-880e-4562f0e23b2e","type":"Circle"},{"attributes":{"range":null},"id":"e2d3ac0d-5600-40f5-b66f-6b5d50247ffa","type":"Jitter"},{"attributes":{"data_source":{"id":"5b16efab-4eff-4550-8550-9003628e414d","type":"ColumnDataSource"},"glyph":{"id":"416c230c-9155-4b94-8494-d96bccc62a59","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9b1ae7c9-6449-4e32-9637-2724145c178b","type":"Circle"},"selection_glyph":null,"view":{"id":"2d3600d9-ba2e-412a-91e8-b16c99b5507d","type":"CDSView"}},"id":"0ad8bee0-b0c3-4eb1-9daf-9c25b0b0b854","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"8a6dbee5-8145-4507-be8d-d7ba3acd39ca","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5b16efab-4eff-4550-8550-9003628e414d","type":"ColumnDataSource"}},"id":"2d3600d9-ba2e-412a-91e8-b16c99b5507d","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"e4e3a46b-baef-4bfe-82a2-6b1bc10438da","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg without jittering"},"id":"6e8f1203-c132-4d8f-aea7-b5366bc1b6e4","type":"Title"},{"attributes":{},"id":"748ab339-488c-4777-af3c-6a12ce342386","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"68b2e7a8-97c0-4019-88a8-78e1842cce0e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"f88147ac-bf9d-4c98-8bad-29e3c58066fe","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68b2e7a8-97c0-4019-88a8-78e1842cce0e","type":"ColumnDataSource"},"glyph":{"id":"306a8482-eaee-4fe8-8956-684fe5de5a04","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2bfeb459-1413-4b7a-9fbd-30536f3d58a9","type":"Circle"},"selection_glyph":null,"view":{"id":"02e3b37b-6269-452d-8601-15163732bc1a","type":"CDSView"}},"id":"9e71619e-b459-4806-9fd9-ac87ffce2ca8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"17b5f606-fe5c-4380-8c28-d28f7f33b66f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f88147ac-bf9d-4c98-8bad-29e3c58066fe","type":"ColumnDataSource"}},"id":"2ac4f12f-fc26-4e93-8f08-40096d19d5b2","type":"CDSView"},{"attributes":{"source":{"id":"722f7b7f-b16c-4ef2-870c-e8a552f2d654","type":"ColumnDataSource"}},"id":"c7cf9db8-11cb-42a5-88fc-8c00fdcf9e69","type":"CDSView"},{"attributes":{"source":{"id":"8a6dbee5-8145-4507-be8d-d7ba3acd39ca","type":"ColumnDataSource"}},"id":"d82ba5b4-5d7a-497b-9fbd-bdf138dbedff","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"d50dc4c2-4e49-44d5-87d2-c93c83a18342","type":"Jitter"},"value":75},"y":{"field":"y"}},"id":"827e116e-9a75-4f80-8abe-50d7e722cb9c","type":"Circle"},{"attributes":{"range":null},"id":"88090351-f57d-4c7a-8e02-c923d56fda8f","type":"Jitter"},{"attributes":{"data_source":{"id":"2b357e98-0769-4ccc-be71-1dbd63b21eb2","type":"ColumnDataSource"},"glyph":{"id":"4eb13455-143c-41e3-b870-c5f6be17a5c8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48aae2d4-c665-4d8c-8358-19eb7f2a0d39","type":"Circle"},"selection_glyph":null,"view":{"id":"5c5ef7dd-8a69-435e-97a3-0231d8b7fd68","type":"CDSView"}},"id":"a70fc5bb-4388-443a-a289-4e33e10324d6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8a6dbee5-8145-4507-be8d-d7ba3acd39ca","type":"ColumnDataSource"},"glyph":{"id":"e4e3a46b-baef-4bfe-82a2-6b1bc10438da","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1142fa3f-1569-4cce-8f51-8fccef947a32","type":"Circle"},"selection_glyph":null,"view":{"id":"d82ba5b4-5d7a-497b-9fbd-bdf138dbedff","type":"CDSView"}},"id":"0425b4cf-8404-4e27-ac3f-0929ec215373","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"60efad5e-de26-45d8-8f7c-9e622af534d5","type":"BasicTickFormatter"},"plot":{"id":"be390304-6b01-4eea-bc81-3d74577cfd1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa28db71-61ac-4701-9365-e235933da426","type":"BasicTicker"}},"id":"ac5736cd-2972-4901-87bc-a73d9983af2f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6f1f10d2-cf48-49dd-a52e-8e50beb475c4","type":"ColumnDataSource"},"glyph":{"id":"872ac55e-cd45-497f-99f9-c8c519c79f29","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4676f509-0306-44ac-9a58-3f4cef11d2d6","type":"Circle"},"selection_glyph":null,"view":{"id":"4c2ab67e-1d3d-41a7-a82a-92002e37d4ce","type":"CDSView"}},"id":"4297a131-b0ef-4940-8206-772bfd704ed9","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"transform":{"id":"e2d3ac0d-5600-40f5-b66f-6b5d50247ffa","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"a5dc87e5-8bbc-404b-a7ea-97ee922feb31","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"909ec4b3-3c9d-435b-922f-152f2643b2d8","type":"PanTool"},{"id":"4f64fc63-e3de-4d7a-9459-92157c7d7800","type":"WheelZoomTool"},{"id":"aac1b3f9-5835-48de-8380-595d4b378634","type":"BoxZoomTool"},{"id":"1b6c063a-b5c0-49aa-9666-017eb9f95699","type":"SaveTool"},{"id":"f79fe9e2-3b21-4f6c-9761-30045ba0f0da","type":"ResetTool"},{"id":"fcd42a37-5bb6-4e9c-9463-49655a3314fc","type":"HelpTool"}]},"id":"84840cc4-d154-4a57-a18d-5fa9fcb61863","type":"Toolbar"},{"attributes":{"range":null},"id":"6e2c4590-01d9-4189-a36b-408f0ca949ba","type":"Jitter"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"1210fef2-d11e-4bf0-b4a9-469c810ce8fb","type":"Circle"},{"attributes":{"data_source":{"id":"17b5f606-fe5c-4380-8c28-d28f7f33b66f","type":"ColumnDataSource"},"glyph":{"id":"1282fddd-612a-446c-a9ab-ef0d76f7acd5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"642bfd07-c7ab-41c2-b881-184435eac3cb","type":"Circle"},"selection_glyph":null,"view":{"id":"ff59c44a-6a2f-4eca-a031-dd821eec968f","type":"CDSView"}},"id":"5de2ee6a-c4a6-46fd-aa25-1af5bb1b0056","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"e2d3ac0d-5600-40f5-b66f-6b5d50247ffa","type":"Jitter"},"value":77},"y":{"field":"y"}},"id":"90d5b456-384e-49d2-816b-ae7123925baf","type":"Circle"},{"attributes":{"data_source":{"id":"837a1c4e-7cf6-4631-a808-6fb4b58d12c3","type":"ColumnDataSource"},"glyph":{"id":"3c5347a8-bac2-472e-813a-585f2ab49a2d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f8f0da98-d0e6-48fe-9652-f2b668b9ebde","type":"Circle"},"selection_glyph":null,"view":{"id":"ac918d29-8286-48c9-93b7-81a6499b588f","type":"CDSView"}},"id":"d39f2b08-74ed-4b5a-a923-a43511a4a6dc","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"ed9c70e2-5083-4c0c-800a-d2d65728f658","type":"Circle"},{"attributes":{"source":{"id":"2b357e98-0769-4ccc-be71-1dbd63b21eb2","type":"ColumnDataSource"}},"id":"5c5ef7dd-8a69-435e-97a3-0231d8b7fd68","type":"CDSView"},{"attributes":{"source":{"id":"389673ee-808b-4a4c-bcee-c443e1e5f897","type":"ColumnDataSource"}},"id":"cbfad01f-bafb-41ae-84d3-592d21efc9bb","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"68f203b1-2d79-4328-b07e-0b69fe765d0b","type":"ColumnDataSource"},{"attributes":{"source":{"id":"690f246c-3127-472a-90f0-12849bd881fb","type":"ColumnDataSource"}},"id":"92eccada-c1de-4dfd-a21d-a45d4ce786ee","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"389673ee-808b-4a4c-bcee-c443e1e5f897","type":"ColumnDataSource"},{"attributes":{"range":null},"id":"462489e2-d1a8-40c5-b09b-e4ac9da7ba4f","type":"Jitter"},{"attributes":{"source":{"id":"17b5f606-fe5c-4380-8c28-d28f7f33b66f","type":"ColumnDataSource"}},"id":"ff59c44a-6a2f-4eca-a031-dd821eec968f","type":"CDSView"},{"attributes":{"plot":null,"text":"Years vs mpg with jittering"},"id":"358d78f2-04ff-4c42-9fc5-156a5b49e7b2","type":"Title"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"2b357e98-0769-4ccc-be71-1dbd63b21eb2","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"1282fddd-612a-446c-a9ab-ef0d76f7acd5","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"642bfd07-c7ab-41c2-b881-184435eac3cb","type":"Circle"},{"attributes":{},"id":"90968eea-2c23-4eaf-a8f0-58063854c693","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"9df244ab-c20d-4641-971e-c4f5d6b88df4","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"transform":{"id":"6e2c4590-01d9-4189-a36b-408f0ca949ba","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"4eb13455-143c-41e3-b870-c5f6be17a5c8","type":"Circle"},{"attributes":{"source":{"id":"9df244ab-c20d-4641-971e-c4f5d6b88df4","type":"ColumnDataSource"}},"id":"c7a2a164-a5d0-4d45-bd15-4764dd2f79a3","type":"CDSView"},{"attributes":{"data_source":{"id":"690f246c-3127-472a-90f0-12849bd881fb","type":"ColumnDataSource"},"glyph":{"id":"a5dc87e5-8bbc-404b-a7ea-97ee922feb31","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90d5b456-384e-49d2-816b-ae7123925baf","type":"Circle"},"selection_glyph":null,"view":{"id":"92eccada-c1de-4dfd-a21d-a45d4ce786ee","type":"CDSView"}},"id":"06db4f59-1a00-4f28-b88d-faf2318f8605","type":"GlyphRenderer"},{"attributes":{},"id":"06a27657-6f58-40c3-a577-c4f1ecfb5dab","type":"LinearScale"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"af545fe1-9ae3-4e7c-8b98-b040e0f0d7a7","type":"Circle"},{"attributes":{"source":{"id":"837a1c4e-7cf6-4631-a808-6fb4b58d12c3","type":"ColumnDataSource"}},"id":"ac918d29-8286-48c9-93b7-81a6499b588f","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"6e2c4590-01d9-4189-a36b-408f0ca949ba","type":"Jitter"},"value":78},"y":{"field":"y"}},"id":"48aae2d4-c665-4d8c-8358-19eb7f2a0d39","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"cb71a3c6-4bf3-4205-b50b-53389a8381c4","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"transform":{"id":"462489e2-d1a8-40c5-b09b-e4ac9da7ba4f","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"f8f0da98-d0e6-48fe-9652-f2b668b9ebde","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"1142fa3f-1569-4cce-8f51-8fccef947a32","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"transform":{"id":"462489e2-d1a8-40c5-b09b-e4ac9da7ba4f","type":"Jitter"},"value":79},"y":{"field":"y"}},"id":"3c5347a8-bac2-472e-813a-585f2ab49a2d","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"837a1c4e-7cf6-4631-a808-6fb4b58d12c3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f88147ac-bf9d-4c98-8bad-29e3c58066fe","type":"ColumnDataSource"},"glyph":{"id":"1210fef2-d11e-4bf0-b4a9-469c810ce8fb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cb71a3c6-4bf3-4205-b50b-53389a8381c4","type":"Circle"},"selection_glyph":null,"view":{"id":"2ac4f12f-fc26-4e93-8f08-40096d19d5b2","type":"CDSView"}},"id":"b3b470df-fe9b-4bae-9905-50284f8bdbd8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"37fd65c9-a0f2-481e-afc6-eaa6c0a77baf","type":"ColumnDataSource"}},"id":"1ca22cb0-e4e7-4c5e-9e3a-50e3c3990d07","type":"CDSView"}],"root_ids":["3174e750-3847-41de-bd69-6939070e56f0"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"4b968c0c-71b1-4895-895b-b29038eeb22f","elementid":"93536acb-0e75-4ac5-aa73-ea75f6317b05","modelid":"3174e750-3847-41de-bd69-6939070e56f0"}];
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