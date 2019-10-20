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
      };var element = document.getElementById("7d23357b-43d0-4db6-9ff3-9450997f08d4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7d23357b-43d0-4db6-9ff3-9450997f08d4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"03c6f834-2788-4c05-8ae3-797099ba8850":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"193b22dd-0f11-417b-b2f8-7acb38d99148","type":"PanTool"},{"id":"9dc10cd9-625d-45b2-bef1-f83690d2fb1e","type":"WheelZoomTool"},{"id":"14dda70f-f11e-40ec-875e-547682532d44","type":"BoxZoomTool"},{"id":"344d7da6-b77a-4ca1-84cd-4cad9de193ae","type":"SaveTool"},{"id":"f73cfb53-9f9b-4d06-844c-7ed78ca022dc","type":"ResetTool"},{"id":"0804d95a-ede6-4123-b51d-0fcf431c60d4","type":"HelpTool"}]},"id":"93cedf67-7f8a-4a4b-91ba-83a25fed08e4","type":"Toolbar"},{"attributes":{},"id":"a551fdb6-4dee-413a-884c-95ecf0a5f9d3","type":"WheelZoomTool"},{"attributes":{},"id":"304e6ef0-b972-453f-b0d8-4ce39c79c2fd","type":"BasicTickFormatter"},{"attributes":{},"id":"421b6a3c-bd08-4420-a404-afeaa04e8b4c","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b99babc5-c52e-4bf9-9176-962f2be69aa0","type":"ColumnDataSource"}},"id":"6462a5d0-72d5-4476-9cc7-9ca0016eecaf","type":"CDSView"},{"attributes":{},"id":"1ab263df-71f1-4cef-a286-54632e7cc9c0","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"38ef2997-4ca4-40b3-858b-ce919b9bb2d6","type":"Triangle"},{"attributes":{},"id":"98cf6be8-f308-43c7-a0d6-062b0a4d9ddb","type":"LinearScale"},{"attributes":{"callback":null},"id":"f3bba8ca-fb83-42fd-b65d-b80f798bedcb","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b99babc5-c52e-4bf9-9176-962f2be69aa0","type":"ColumnDataSource"},"glyph":{"id":"d56dd9a8-21fa-4164-882c-93b87bf6c82d","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1ceeabb0-5d18-410a-84e9-c1ab57661d74","type":"Square"},"selection_glyph":null,"view":{"id":"6462a5d0-72d5-4476-9cc7-9ca0016eecaf","type":"CDSView"}},"id":"a868b0d1-553a-4f0f-b6b6-04ec7631581a","type":"GlyphRenderer"},{"attributes":{},"id":"0608307e-5e94-416f-86e6-ccc68175a1cf","type":"LinearScale"},{"attributes":{},"id":"c59666ee-6868-49ce-83b7-fcdab8ceb5d6","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"51d9caee-9156-4408-9633-304e6327dfef","subtype":"Figure","type":"Plot"},"ticker":{"id":"c59666ee-6868-49ce-83b7-fcdab8ceb5d6","type":"BasicTicker"}},"id":"19439363-bf80-49fb-a86b-1f76877bd052","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"30489c74-0ca5-43c1-b54a-323c509e8dd1","type":"ColumnDataSource"},{"attributes":{},"id":"eddc7403-a6bf-4786-bc8b-3e2810726c3a","type":"SaveTool"},{"attributes":{},"id":"792366a7-3d4e-4f47-8733-ca12f2d9ee2b","type":"ResetTool"},{"attributes":{"callback":null},"id":"9102a812-66d9-415b-91f0-1a6ee3e6dfc0","type":"DataRange1d"},{"attributes":{},"id":"42c0665a-b4ec-4499-bbf2-45a74223c152","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0246108-d90a-43bf-8d8d-22208bad1814","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ceeabb0-5d18-410a-84e9-c1ab57661d74","type":"Square"},{"attributes":{"source":{"id":"35b469b5-a49c-486e-a78f-d8354ac76235","type":"ColumnDataSource"}},"id":"4fe38911-4a89-4124-8244-a5b547465144","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"8d58abf8-9165-4d2d-9f00-079aef3f32ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cbf17b2-c5e3-460c-af72-a377dfc73a5b","type":"BasicTicker"}},"id":"84d471ca-0a8b-4052-b853-d076aa392ed3","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33e5e6ee-fb85-46ac-9e48-26a2b6e78eef","type":"BoxAnnotation"},{"attributes":{},"id":"0804d95a-ede6-4123-b51d-0fcf431c60d4","type":"HelpTool"},{"attributes":{},"id":"326495d9-65f5-4751-8ca6-ee24e2ff839e","type":"SaveTool"},{"attributes":{"overlay":{"id":"8621c2d7-b165-4827-be43-8fc380403090","type":"BoxAnnotation"}},"id":"dec81c78-5b65-4128-931d-96ac0f20a268","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"35b469b5-a49c-486e-a78f-d8354ac76235","type":"ColumnDataSource"},"glyph":{"id":"98413f97-aa09-48fe-b784-48f7d5ecbcb4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fca06c85-bcf5-4768-bc9d-ea3578643a05","type":"Circle"},"selection_glyph":null,"view":{"id":"4fe38911-4a89-4124-8244-a5b547465144","type":"CDSView"}},"id":"b46c7c63-2d41-41bf-b92a-9f4c5f9fb668","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a0af8b12-6591-4de8-9e83-7eaeb97e41c1","type":"LinearAxis"}],"left":[{"id":"e359548d-dcef-4203-aa1f-81347754b0be","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a0af8b12-6591-4de8-9e83-7eaeb97e41c1","type":"LinearAxis"},{"id":"834d61f1-0852-4df0-b3b7-67718308557c","type":"Grid"},{"id":"e359548d-dcef-4203-aa1f-81347754b0be","type":"LinearAxis"},{"id":"be9e2d0e-8e74-404a-af87-b89fafb92c54","type":"Grid"},{"id":"8621c2d7-b165-4827-be43-8fc380403090","type":"BoxAnnotation"},{"id":"a868b0d1-553a-4f0f-b6b6-04ec7631581a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"23dfa595-c84c-434f-93cd-2a1cf0db4096","type":"Toolbar"},"x_range":{"id":"05e5bf10-64d5-4149-a6b9-709ebf0a7a6e","type":"DataRange1d"},"x_scale":{"id":"fbd77fd7-3c84-4cc9-894f-e8fda79aba0a","type":"LinearScale"},"y_range":{"id":"e475374c-fe9a-4865-abea-c97d5a42126b","type":"DataRange1d"},"y_scale":{"id":"400e4ed6-c8c0-457d-88f9-b7e2ca2b3bf5","type":"LinearScale"}},"id":"cf472b92-2b6f-428f-b52c-4d121241b487","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"98413f97-aa09-48fe-b784-48f7d5ecbcb4","type":"Circle"},{"attributes":{},"id":"8cbf17b2-c5e3-460c-af72-a377dfc73a5b","type":"BasicTicker"},{"attributes":{},"id":"7ba80330-7473-4ab7-bae4-63b22eab86eb","type":"HelpTool"},{"attributes":{"plot":{"id":"51d9caee-9156-4408-9633-304e6327dfef","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae633e1b-3ee1-4392-9d96-a80a5f948999","type":"BasicTicker"}},"id":"e63ccde3-dc78-4107-8323-6be3ff34d219","type":"Grid"},{"attributes":{},"id":"400e4ed6-c8c0-457d-88f9-b7e2ca2b3bf5","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8621c2d7-b165-4827-be43-8fc380403090","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"a929a9e9-d0b4-4717-b0d4-b196d65a427d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"33c433d5-eef3-42e3-b6e0-9dea53b38949","type":"BasicTickFormatter"},"plot":{"id":"51d9caee-9156-4408-9633-304e6327dfef","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae633e1b-3ee1-4392-9d96-a80a5f948999","type":"BasicTicker"}},"id":"78591728-b32f-4665-bf3f-ba147f781918","type":"LinearAxis"},{"attributes":{},"id":"9aa9ec93-cedf-4373-9301-6c06287d43fe","type":"PanTool"},{"attributes":{"children":[{"id":"8d58abf8-9165-4d2d-9f00-079aef3f32ba","subtype":"Figure","type":"Plot"},{"id":"51d9caee-9156-4408-9633-304e6327dfef","subtype":"Figure","type":"Plot"},{"id":"cf472b92-2b6f-428f-b52c-4d121241b487","subtype":"Figure","type":"Plot"}]},"id":"4d260e2b-51c3-4a5f-8061-79b601851cee","type":"Row"},{"attributes":{"overlay":{"id":"33e5e6ee-fb85-46ac-9e48-26a2b6e78eef","type":"BoxAnnotation"}},"id":"ede72a24-daaa-4505-b27b-1b4652d8cddf","type":"BoxZoomTool"},{"attributes":{},"id":"2beff40c-41c6-4efa-b0c3-f79d45b803fd","type":"BasicTicker"},{"attributes":{},"id":"4e3c96c9-ff6f-4467-bd60-7141d20ff9ee","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"78591728-b32f-4665-bf3f-ba147f781918","type":"LinearAxis"}],"left":[{"id":"b4ab003a-89e8-4823-9cf1-435965a2bae2","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"78591728-b32f-4665-bf3f-ba147f781918","type":"LinearAxis"},{"id":"e63ccde3-dc78-4107-8323-6be3ff34d219","type":"Grid"},{"id":"b4ab003a-89e8-4823-9cf1-435965a2bae2","type":"LinearAxis"},{"id":"19439363-bf80-49fb-a86b-1f76877bd052","type":"Grid"},{"id":"b7965050-f149-43d0-9ed7-f00d4d9a7364","type":"BoxAnnotation"},{"id":"b6068578-8f6b-4980-8cc6-23f5ad6745fd","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"93cedf67-7f8a-4a4b-91ba-83a25fed08e4","type":"Toolbar"},"x_range":{"id":"f3bba8ca-fb83-42fd-b65d-b80f798bedcb","type":"DataRange1d"},"x_scale":{"id":"1ab263df-71f1-4cef-a286-54632e7cc9c0","type":"LinearScale"},"y_range":{"id":"9102a812-66d9-415b-91f0-1a6ee3e6dfc0","type":"DataRange1d"},"y_scale":{"id":"98cf6be8-f308-43c7-a0d6-062b0a4d9ddb","type":"LinearScale"}},"id":"51d9caee-9156-4408-9633-304e6327dfef","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9dc10cd9-625d-45b2-bef1-f83690d2fb1e","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"304e6ef0-b972-453f-b0d8-4ce39c79c2fd","type":"BasicTickFormatter"},"plot":{"id":"8d58abf8-9165-4d2d-9f00-079aef3f32ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"2beff40c-41c6-4efa-b0c3-f79d45b803fd","type":"BasicTicker"}},"id":"a1497598-0a4c-4d95-9013-8d637a297712","type":"LinearAxis"},{"attributes":{"formatter":{"id":"421b6a3c-bd08-4420-a404-afeaa04e8b4c","type":"BasicTickFormatter"},"plot":{"id":"8d58abf8-9165-4d2d-9f00-079aef3f32ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cbf17b2-c5e3-460c-af72-a377dfc73a5b","type":"BasicTicker"}},"id":"5622f18d-a45b-48a2-91eb-dee1b1d393ce","type":"LinearAxis"},{"attributes":{"plot":{"id":"cf472b92-2b6f-428f-b52c-4d121241b487","subtype":"Figure","type":"Plot"},"ticker":{"id":"7dd1a557-929a-457c-b567-b033fca84568","type":"BasicTicker"}},"id":"834d61f1-0852-4df0-b3b7-67718308557c","type":"Grid"},{"attributes":{"overlay":{"id":"b7965050-f149-43d0-9ed7-f00d4d9a7364","type":"BoxAnnotation"}},"id":"14dda70f-f11e-40ec-875e-547682532d44","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9aa9ec93-cedf-4373-9301-6c06287d43fe","type":"PanTool"},{"id":"4e3c96c9-ff6f-4467-bd60-7141d20ff9ee","type":"WheelZoomTool"},{"id":"ede72a24-daaa-4505-b27b-1b4652d8cddf","type":"BoxZoomTool"},{"id":"326495d9-65f5-4751-8ca6-ee24e2ff839e","type":"SaveTool"},{"id":"792366a7-3d4e-4f47-8733-ca12f2d9ee2b","type":"ResetTool"},{"id":"42c0665a-b4ec-4499-bbf2-45a74223c152","type":"HelpTool"}]},"id":"b9e9e880-9774-4f14-a77f-c4234cd3bbf2","type":"Toolbar"},{"attributes":{"below":[{"id":"a1497598-0a4c-4d95-9013-8d637a297712","type":"LinearAxis"}],"left":[{"id":"5622f18d-a45b-48a2-91eb-dee1b1d393ce","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a1497598-0a4c-4d95-9013-8d637a297712","type":"LinearAxis"},{"id":"af78afce-3b3a-452a-b74e-db19ac063142","type":"Grid"},{"id":"5622f18d-a45b-48a2-91eb-dee1b1d393ce","type":"LinearAxis"},{"id":"84d471ca-0a8b-4052-b853-d076aa392ed3","type":"Grid"},{"id":"33e5e6ee-fb85-46ac-9e48-26a2b6e78eef","type":"BoxAnnotation"},{"id":"b46c7c63-2d41-41bf-b92a-9f4c5f9fb668","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b9e9e880-9774-4f14-a77f-c4234cd3bbf2","type":"Toolbar"},"x_range":{"id":"6f978643-cbe2-46fc-b51d-121c429498da","type":"DataRange1d"},"x_scale":{"id":"0608307e-5e94-416f-86e6-ccc68175a1cf","type":"LinearScale"},"y_range":{"id":"a929a9e9-d0b4-4717-b0d4-b196d65a427d","type":"DataRange1d"},"y_scale":{"id":"31466edd-3be1-4ad3-8eb1-2db8150807ff","type":"LinearScale"}},"id":"8d58abf8-9165-4d2d-9f00-079aef3f32ba","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"31466edd-3be1-4ad3-8eb1-2db8150807ff","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b7965050-f149-43d0-9ed7-f00d4d9a7364","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fca06c85-bcf5-4768-bc9d-ea3578643a05","type":"Circle"},{"attributes":{"plot":{"id":"8d58abf8-9165-4d2d-9f00-079aef3f32ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"2beff40c-41c6-4efa-b0c3-f79d45b803fd","type":"BasicTicker"}},"id":"af78afce-3b3a-452a-b74e-db19ac063142","type":"Grid"},{"attributes":{},"id":"5d82ea07-74eb-4726-9e3f-0920602bf706","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6f978643-cbe2-46fc-b51d-121c429498da","type":"DataRange1d"},{"attributes":{"data_source":{"id":"30489c74-0ca5-43c1-b54a-323c509e8dd1","type":"ColumnDataSource"},"glyph":{"id":"38ef2997-4ca4-40b3-858b-ce919b9bb2d6","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a0246108-d90a-43bf-8d8d-22208bad1814","type":"Triangle"},"selection_glyph":null,"view":{"id":"792cc81c-7ae0-4872-89dc-bcd0881ef1a0","type":"CDSView"}},"id":"b6068578-8f6b-4980-8cc6-23f5ad6745fd","type":"GlyphRenderer"},{"attributes":{},"id":"f73cfb53-9f9b-4d06-844c-7ed78ca022dc","type":"ResetTool"},{"attributes":{},"id":"ae633e1b-3ee1-4392-9d96-a80a5f948999","type":"BasicTicker"},{"attributes":{},"id":"193b22dd-0f11-417b-b2f8-7acb38d99148","type":"PanTool"},{"attributes":{},"id":"33c433d5-eef3-42e3-b6e0-9dea53b38949","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"35b469b5-a49c-486e-a78f-d8354ac76235","type":"ColumnDataSource"},{"attributes":{},"id":"b11185ae-04b1-468d-8283-6e2c9a5dd0cd","type":"BasicTicker"},{"attributes":{"callback":null},"id":"05e5bf10-64d5-4149-a6b9-709ebf0a7a6e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d31a7192-f2f8-482b-80e4-69f975f7d391","type":"BasicTickFormatter"},"plot":{"id":"cf472b92-2b6f-428f-b52c-4d121241b487","subtype":"Figure","type":"Plot"},"ticker":{"id":"b11185ae-04b1-468d-8283-6e2c9a5dd0cd","type":"BasicTicker"}},"id":"e359548d-dcef-4203-aa1f-81347754b0be","type":"LinearAxis"},{"attributes":{"source":{"id":"30489c74-0ca5-43c1-b54a-323c509e8dd1","type":"ColumnDataSource"}},"id":"792cc81c-7ae0-4872-89dc-bcd0881ef1a0","type":"CDSView"},{"attributes":{},"id":"8ad0d836-13f7-4d80-a600-6cefac73f212","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d56dd9a8-21fa-4164-882c-93b87bf6c82d","type":"Square"},{"attributes":{},"id":"344d7da6-b77a-4ca1-84cd-4cad9de193ae","type":"SaveTool"},{"attributes":{},"id":"99bb84b0-fdda-4a50-b222-3c17d6df3068","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"b99babc5-c52e-4bf9-9176-962f2be69aa0","type":"ColumnDataSource"},{"attributes":{},"id":"fbd77fd7-3c84-4cc9-894f-e8fda79aba0a","type":"LinearScale"},{"attributes":{"formatter":{"id":"5d82ea07-74eb-4726-9e3f-0920602bf706","type":"BasicTickFormatter"},"plot":{"id":"51d9caee-9156-4408-9633-304e6327dfef","subtype":"Figure","type":"Plot"},"ticker":{"id":"c59666ee-6868-49ce-83b7-fcdab8ceb5d6","type":"BasicTicker"}},"id":"b4ab003a-89e8-4823-9cf1-435965a2bae2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e475374c-fe9a-4865-abea-c97d5a42126b","type":"DataRange1d"},{"attributes":{},"id":"7dd1a557-929a-457c-b567-b033fca84568","type":"BasicTicker"},{"attributes":{},"id":"6b525a79-e4a2-48be-8867-abbd257d8adb","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"99bb84b0-fdda-4a50-b222-3c17d6df3068","type":"PanTool"},{"id":"a551fdb6-4dee-413a-884c-95ecf0a5f9d3","type":"WheelZoomTool"},{"id":"dec81c78-5b65-4128-931d-96ac0f20a268","type":"BoxZoomTool"},{"id":"eddc7403-a6bf-4786-bc8b-3e2810726c3a","type":"SaveTool"},{"id":"6b525a79-e4a2-48be-8867-abbd257d8adb","type":"ResetTool"},{"id":"7ba80330-7473-4ab7-bae4-63b22eab86eb","type":"HelpTool"}]},"id":"23dfa595-c84c-434f-93cd-2a1cf0db4096","type":"Toolbar"},{"attributes":{},"id":"d31a7192-f2f8-482b-80e4-69f975f7d391","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"cf472b92-2b6f-428f-b52c-4d121241b487","subtype":"Figure","type":"Plot"},"ticker":{"id":"b11185ae-04b1-468d-8283-6e2c9a5dd0cd","type":"BasicTicker"}},"id":"be9e2d0e-8e74-404a-af87-b89fafb92c54","type":"Grid"},{"attributes":{"formatter":{"id":"8ad0d836-13f7-4d80-a600-6cefac73f212","type":"BasicTickFormatter"},"plot":{"id":"cf472b92-2b6f-428f-b52c-4d121241b487","subtype":"Figure","type":"Plot"},"ticker":{"id":"7dd1a557-929a-457c-b567-b033fca84568","type":"BasicTicker"}},"id":"a0af8b12-6591-4de8-9e83-7eaeb97e41c1","type":"LinearAxis"}],"root_ids":["4d260e2b-51c3-4a5f-8061-79b601851cee"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"03c6f834-2788-4c05-8ae3-797099ba8850","elementid":"7d23357b-43d0-4db6-9ff3-9450997f08d4","modelid":"4d260e2b-51c3-4a5f-8061-79b601851cee"}];
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