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
      };var element = document.getElementById("ece9c4d8-77f0-4220-a9f3-f82a3fa3a498");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ece9c4d8-77f0-4220-a9f3-f82a3fa3a498' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fd3f9137-17a1-466e-8ee2-aab140a5e6ae":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"02d27b20-632a-4da1-82db-16159ee53cdc","type":"Circle"},{"attributes":{"filters":[{"id":"785a45c7-e1a3-4c0f-bd30-c056d5c4e33a","type":"IndexFilter"}],"source":{"id":"ec9923d2-45e0-49ef-b2d3-725aa0f5c5ca","type":"ColumnDataSource"}},"id":"5c606f05-db89-455f-ba6f-b85a49bdd208","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c5ddcba4-dc54-412e-8562-0fe267cf153e","type":"BoxSelectTool"},{"id":"f342ba46-7b80-44ea-bbc9-6a47d98492a7","type":"HoverTool"},{"id":"0a761d5a-f3a7-4991-8cbf-36cea604496f","type":"ResetTool"}]},"id":"7fdcba05-9292-4d67-b6ef-8284205bfc56","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"88000c3b-027d-4835-b38f-71813183c89a","type":"Circle"},{"attributes":{"callback":null},"id":"8ffbb2e6-8b5d-4a56-bb2e-1d7a978ebf2c","type":"DataRange1d"},{"attributes":{"callback":null},"id":"f0c5a7bb-6ca9-4bc7-8a48-dfab7dd41512","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea97acfd-e141-44c3-9f33-2e3a29c8a21d","type":"Circle"},{"attributes":{"callback":null},"id":"f15bfff5-7896-417a-a2d1-3b39449ec778","type":"DataRange1d"},{"attributes":{},"id":"80c33073-db5a-49dc-acc2-732957366b4a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"df2826f1-1369-4de2-81f5-25699aaf0a43","type":"BasicTickFormatter"},"plot":{"id":"e5f95980-e222-4ddd-ad75-eeaac5a18db4","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d75c403-2318-478c-9da6-40d0e13ac6c6","type":"BasicTicker"}},"id":"4a4cdec9-2fd3-41ca-88c9-1be361546d0d","type":"LinearAxis"},{"attributes":{},"id":"cbb2ae8d-3bd1-4195-9a9b-1c8e8cf2bdf7","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"e5f95980-e222-4ddd-ad75-eeaac5a18db4","subtype":"Figure","type":"Plot"},"ticker":{"id":"38a7786c-cd1f-45e3-8094-81d7e8ae731a","type":"BasicTicker"}},"id":"c5651340-4bed-4859-9cc4-67fc1f02fd96","type":"Grid"},{"attributes":{"children":[{"id":"c682a39e-ac2b-4b9e-a315-4bb66a571dfa","type":"Row"}]},"id":"da05346d-50ed-489d-873a-9e70624e0e02","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"00154320-8e9c-491b-a299-ec0b02f8c488","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e5f95980-e222-4ddd-ad75-eeaac5a18db4","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d75c403-2318-478c-9da6-40d0e13ac6c6","type":"BasicTicker"}},"id":"fed5b9cc-c0b4-409c-8a5a-800f7bb9ea0f","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"1c9a6f9c-ba35-4459-81e6-5af60ed2d0cc","type":"BoxAnnotation"},"renderers":[{"id":"8c3d3ac8-1b8c-4c45-b5df-be2721f3a162","type":"GlyphRenderer"}]},"id":"bbfdb50c-2e4c-40d3-a660-bd672045ec49","type":"BoxSelectTool"},{"attributes":{},"id":"016df142-ee04-46fc-8084-01b0d1bae972","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf00582d-cc3c-4c06-934c-9ff69008f1b8","type":"Circle"},{"attributes":{},"id":"7d75c403-2318-478c-9da6-40d0e13ac6c6","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"97ff94d1-ce93-4f0d-ae8c-09081143e77d","type":"Circle"},{"attributes":{},"id":"df2826f1-1369-4de2-81f5-25699aaf0a43","type":"BasicTickFormatter"},{"attributes":{},"id":"a2780313-a752-4203-a403-31c3bb0d2901","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"eeda0086-496e-4b88-9682-583123da4c72","type":"Title"},{"attributes":{"indices":[0,2,4]},"id":"785a45c7-e1a3-4c0f-bd30-c056d5c4e33a","type":"IndexFilter"},{"attributes":{"data_source":{"id":"ec9923d2-45e0-49ef-b2d3-725aa0f5c5ca","type":"ColumnDataSource"},"glyph":{"id":"b58c1b7b-87f7-4295-89e3-8dd41df8dcba","type":"Circle"},"hover_glyph":{"id":"ea97acfd-e141-44c3-9f33-2e3a29c8a21d","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"02d27b20-632a-4da1-82db-16159ee53cdc","type":"Circle"},"selection_glyph":null,"view":{"id":"6977bacd-8515-416b-920d-72909cfd7880","type":"CDSView"}},"id":"b6e579a5-1c94-4c35-a945-4b70e951d91d","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"bf4e6717-7e59-4353-81e4-419bc27020d5","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"dc918dfc-bee5-4ab5-bbdc-b4116082c84b","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"35eb618c-8ecc-4217-a985-cf68d9dbedd0","type":"ToolbarBox"},{"attributes":{"dimension":1,"plot":{"id":"32c00679-ca57-44b8-879d-bad1b6aae01f","subtype":"Figure","type":"Plot"},"ticker":{"id":"80c33073-db5a-49dc-acc2-732957366b4a","type":"BasicTicker"}},"id":"c518d037-3f84-40e3-912e-6536bb19334d","type":"Grid"},{"attributes":{},"id":"efea2335-0652-47a2-b1a0-478bb88671e9","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"00154320-8e9c-491b-a299-ec0b02f8c488","type":"BoxAnnotation"},"renderers":[{"id":"b6e579a5-1c94-4c35-a945-4b70e951d91d","type":"GlyphRenderer"}]},"id":"c5ddcba4-dc54-412e-8562-0fe267cf153e","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"a2780313-a752-4203-a403-31c3bb0d2901","type":"BasicTickFormatter"},"plot":{"id":"32c00679-ca57-44b8-879d-bad1b6aae01f","subtype":"Figure","type":"Plot"},"ticker":{"id":"80c33073-db5a-49dc-acc2-732957366b4a","type":"BasicTicker"}},"id":"e8dea1e6-0341-4a2f-9d29-6bbb97378794","type":"LinearAxis"},{"attributes":{},"id":"023be41f-696a-4c9d-84ec-66cf99a2c28a","type":"LinearScale"},{"attributes":{"children":[{"id":"e5f95980-e222-4ddd-ad75-eeaac5a18db4","subtype":"Figure","type":"Plot"},{"id":"32c00679-ca57-44b8-879d-bad1b6aae01f","subtype":"Figure","type":"Plot"}]},"id":"c682a39e-ac2b-4b9e-a315-4bb66a571dfa","type":"Row"},{"attributes":{"below":[{"id":"cdc09fe5-60b2-4f99-afd0-0744feff8475","type":"LinearAxis"}],"left":[{"id":"e8dea1e6-0341-4a2f-9d29-6bbb97378794","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cdc09fe5-60b2-4f99-afd0-0744feff8475","type":"LinearAxis"},{"id":"e07594aa-53eb-44da-8263-51fc577f8c0b","type":"Grid"},{"id":"e8dea1e6-0341-4a2f-9d29-6bbb97378794","type":"LinearAxis"},{"id":"c518d037-3f84-40e3-912e-6536bb19334d","type":"Grid"},{"id":"1c9a6f9c-ba35-4459-81e6-5af60ed2d0cc","type":"BoxAnnotation"},{"id":"8c3d3ac8-1b8c-4c45-b5df-be2721f3a162","type":"GlyphRenderer"}],"title":{"id":"eeda0086-496e-4b88-9682-583123da4c72","type":"Title"},"toolbar":{"id":"2e34f9bf-b143-4fcb-abba-b53ac7faa9d1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f15bfff5-7896-417a-a2d1-3b39449ec778","type":"DataRange1d"},"x_scale":{"id":"cbb2ae8d-3bd1-4195-9a9b-1c8e8cf2bdf7","type":"LinearScale"},"y_range":{"id":"bf4e6717-7e59-4353-81e4-419bc27020d5","type":"DataRange1d"},"y_scale":{"id":"69a66f83-1ac0-44f7-b16a-c594796f9322","type":"LinearScale"}},"id":"32c00679-ca57-44b8-879d-bad1b6aae01f","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"ec9923d2-45e0-49ef-b2d3-725aa0f5c5ca","type":"ColumnDataSource"}},"id":"6977bacd-8515-416b-920d-72909cfd7880","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"ad0be02c-df38-43b6-907e-7ee54529a4f6","type":"Title"},{"attributes":{"callback":null},"id":"5a4f68a3-7e68-410d-8b87-5f5468d4df78","type":"HoverTool"},{"attributes":{"formatter":{"id":"69576c80-473d-46d8-9315-d9173be6908d","type":"BasicTickFormatter"},"plot":{"id":"e5f95980-e222-4ddd-ad75-eeaac5a18db4","subtype":"Figure","type":"Plot"},"ticker":{"id":"38a7786c-cd1f-45e3-8094-81d7e8ae731a","type":"BasicTicker"}},"id":"b5a2b807-f9fb-466c-96f5-cd41dc08d80c","type":"LinearAxis"},{"attributes":{},"id":"bec9b145-513d-4d1d-b2ca-99b7f863be9c","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b58c1b7b-87f7-4295-89e3-8dd41df8dcba","type":"Circle"},{"attributes":{"callback":null},"id":"f342ba46-7b80-44ea-bbc9-6a47d98492a7","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1c9a6f9c-ba35-4459-81e6-5af60ed2d0cc","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"c5ddcba4-dc54-412e-8562-0fe267cf153e","type":"BoxSelectTool"},{"id":"f342ba46-7b80-44ea-bbc9-6a47d98492a7","type":"HoverTool"},{"id":"0a761d5a-f3a7-4991-8cbf-36cea604496f","type":"ResetTool"},{"id":"bbfdb50c-2e4c-40d3-a660-bd672045ec49","type":"BoxSelectTool"},{"id":"5a4f68a3-7e68-410d-8b87-5f5468d4df78","type":"HoverTool"},{"id":"016df142-ee04-46fc-8084-01b0d1bae972","type":"ResetTool"}]},"id":"dc918dfc-bee5-4ab5-bbdc-b4116082c84b","type":"ProxyToolbar"},{"attributes":{},"id":"69576c80-473d-46d8-9315-d9173be6908d","type":"BasicTickFormatter"},{"attributes":{},"id":"0a761d5a-f3a7-4991-8cbf-36cea604496f","type":"ResetTool"},{"attributes":{"plot":{"id":"32c00679-ca57-44b8-879d-bad1b6aae01f","subtype":"Figure","type":"Plot"},"ticker":{"id":"efea2335-0652-47a2-b1a0-478bb88671e9","type":"BasicTicker"}},"id":"e07594aa-53eb-44da-8263-51fc577f8c0b","type":"Grid"},{"attributes":{"below":[{"id":"4a4cdec9-2fd3-41ca-88c9-1be361546d0d","type":"LinearAxis"}],"left":[{"id":"b5a2b807-f9fb-466c-96f5-cd41dc08d80c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4a4cdec9-2fd3-41ca-88c9-1be361546d0d","type":"LinearAxis"},{"id":"fed5b9cc-c0b4-409c-8a5a-800f7bb9ea0f","type":"Grid"},{"id":"b5a2b807-f9fb-466c-96f5-cd41dc08d80c","type":"LinearAxis"},{"id":"c5651340-4bed-4859-9cc4-67fc1f02fd96","type":"Grid"},{"id":"00154320-8e9c-491b-a299-ec0b02f8c488","type":"BoxAnnotation"},{"id":"b6e579a5-1c94-4c35-a945-4b70e951d91d","type":"GlyphRenderer"}],"title":{"id":"ad0be02c-df38-43b6-907e-7ee54529a4f6","type":"Title"},"toolbar":{"id":"7fdcba05-9292-4d67-b6ef-8284205bfc56","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8ffbb2e6-8b5d-4a56-bb2e-1d7a978ebf2c","type":"DataRange1d"},"x_scale":{"id":"bec9b145-513d-4d1d-b2ca-99b7f863be9c","type":"LinearScale"},"y_range":{"id":"f0c5a7bb-6ca9-4bc7-8a48-dfab7dd41512","type":"DataRange1d"},"y_scale":{"id":"023be41f-696a-4c9d-84ec-66cf99a2c28a","type":"LinearScale"}},"id":"e5f95980-e222-4ddd-ad75-eeaac5a18db4","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bbfdb50c-2e4c-40d3-a660-bd672045ec49","type":"BoxSelectTool"},{"id":"5a4f68a3-7e68-410d-8b87-5f5468d4df78","type":"HoverTool"},{"id":"016df142-ee04-46fc-8084-01b0d1bae972","type":"ResetTool"}]},"id":"2e34f9bf-b143-4fcb-abba-b53ac7faa9d1","type":"Toolbar"},{"attributes":{},"id":"69a66f83-1ac0-44f7-b16a-c594796f9322","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"ec9923d2-45e0-49ef-b2d3-725aa0f5c5ca","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"35eb618c-8ecc-4217-a985-cf68d9dbedd0","type":"ToolbarBox"},{"id":"da05346d-50ed-489d-873a-9e70624e0e02","type":"Column"}]},"id":"64e24589-64d4-4288-900a-131cdca0bf0c","type":"Column"},{"attributes":{},"id":"8cdaee67-e68b-4dc5-8284-cf562d64c776","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8cdaee67-e68b-4dc5-8284-cf562d64c776","type":"BasicTickFormatter"},"plot":{"id":"32c00679-ca57-44b8-879d-bad1b6aae01f","subtype":"Figure","type":"Plot"},"ticker":{"id":"efea2335-0652-47a2-b1a0-478bb88671e9","type":"BasicTicker"}},"id":"cdc09fe5-60b2-4f99-afd0-0744feff8475","type":"LinearAxis"},{"attributes":{"data_source":{"id":"ec9923d2-45e0-49ef-b2d3-725aa0f5c5ca","type":"ColumnDataSource"},"glyph":{"id":"88000c3b-027d-4835-b38f-71813183c89a","type":"Circle"},"hover_glyph":{"id":"97ff94d1-ce93-4f0d-ae8c-09081143e77d","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"cf00582d-cc3c-4c06-934c-9ff69008f1b8","type":"Circle"},"selection_glyph":null,"view":{"id":"5c606f05-db89-455f-ba6f-b85a49bdd208","type":"CDSView"}},"id":"8c3d3ac8-1b8c-4c45-b5df-be2721f3a162","type":"GlyphRenderer"},{"attributes":{},"id":"38a7786c-cd1f-45e3-8094-81d7e8ae731a","type":"BasicTicker"}],"root_ids":["64e24589-64d4-4288-900a-131cdca0bf0c"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"fd3f9137-17a1-466e-8ee2-aab140a5e6ae","elementid":"ece9c4d8-77f0-4220-a9f3-f82a3fa3a498","modelid":"64e24589-64d4-4288-900a-131cdca0bf0c"}];
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