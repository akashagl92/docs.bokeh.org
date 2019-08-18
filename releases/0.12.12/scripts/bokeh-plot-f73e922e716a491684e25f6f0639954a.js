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
      };var element = document.getElementById("62ad9645-6aee-4b12-87ab-d252fd253bf6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '62ad9645-6aee-4b12-87ab-d252fd253bf6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"64daaab0-b72f-4dc9-b18c-891e9c81fe0f":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"4592bb60-7d77-42eb-991e-0680764e7df2","subtype":"Figure","type":"Plot"},"ticker":{"id":"165754b1-c4d2-4e94-abb2-915c5effda56","type":"CategoricalTicker"}},"id":"6507c550-438a-44d0-b53f-6151094ad8ff","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6708e96a-7115-4b85-9d3e-3bad59ce59d1","type":"Circle"},{"attributes":{},"id":"cadf8835-1548-4b94-b377-623d4704ff96","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"150df07a-fc0e-4ff5-9092-0eef5bf69178","type":"Circle"},{"attributes":{"data_source":{"id":"8d76912a-a445-4f2d-a6eb-9102aecc4b41","type":"ColumnDataSource"},"glyph":{"id":"852ba6fe-8960-44c4-86a1-7c1bb76ee7a9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"07d3c49a-6bc1-4fb1-a2ce-43d84fc897f8","type":"Circle"},"selection_glyph":null,"view":{"id":"a4a3d92b-d0af-4d3b-b0a9-0e3489f2d52e","type":"CDSView"}},"id":"f4b12d8c-6182-4cae-9f93-75d1bcd49bc2","type":"GlyphRenderer"},{"attributes":{},"id":"b77e9a14-5056-49d4-b02d-f47c6feef654","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"77d8326a-b3be-407a-bba1-8bee6aa4bb08","type":"BoxAnnotation"},{"attributes":{},"id":"165754b1-c4d2-4e94-abb2-915c5effda56","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"08e00033-9cfd-4459-844e-3c3022604b56","type":"Circle"},{"attributes":{"data_source":{"id":"332eb237-0185-4534-8a3f-c101fd30180f","type":"ColumnDataSource"},"glyph":{"id":"150df07a-fc0e-4ff5-9092-0eef5bf69178","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0329bbbd-f3e3-44a1-8634-3b6bd39b4008","type":"Circle"},"selection_glyph":null,"view":{"id":"95eb12bc-6661-4bb9-958b-12e18b9546a0","type":"CDSView"}},"id":"99902162-ea48-415f-b73c-40c2fbabe0a9","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8d76912a-a445-4f2d-a6eb-9102aecc4b41","type":"ColumnDataSource"}},"id":"a4a3d92b-d0af-4d3b-b0a9-0e3489f2d52e","type":"CDSView"},{"attributes":{},"id":"197f9ef3-d67b-41d1-a4d8-04715c9f6abd","type":"SaveTool"},{"attributes":{},"id":"21ac4fc8-5166-4184-84d5-a1cbb3885874","type":"WheelZoomTool"},{"attributes":{"source":{"id":"332eb237-0185-4534-8a3f-c101fd30180f","type":"ColumnDataSource"}},"id":"95eb12bc-6661-4bb9-958b-12e18b9546a0","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["None"]}},"id":"332eb237-0185-4534-8a3f-c101fd30180f","type":"ColumnDataSource"},{"attributes":{"axis_label":"Line Options","formatter":{"id":"b77e9a14-5056-49d4-b02d-f47c6feef654","type":"CategoricalTickFormatter"},"plot":{"id":"4592bb60-7d77-42eb-991e-0680764e7df2","subtype":"Figure","type":"Plot"},"ticker":{"id":"165754b1-c4d2-4e94-abb2-915c5effda56","type":"CategoricalTicker"}},"id":"7c232fc6-abc5-47dc-b285-7a47fe9bf52b","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d500213-70c8-4f14-b762-e83d4204157d","type":"Circle"},{"attributes":{"overlay":{"id":"77d8326a-b3be-407a-bba1-8bee6aa4bb08","type":"BoxAnnotation"}},"id":"552be0ac-ded7-4b50-a998-23fb39e2638e","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"74abf453-4023-48f8-832a-70458a314490","type":"ColumnDataSource"},"glyph":{"id":"5117963a-f8aa-44ab-94bb-ea86850d62ee","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c811592-713c-4f58-b24f-aa5096999fe9","type":"Circle"},"selection_glyph":null,"view":{"id":"0652f4cd-969a-4022-8e7a-9665781b8516","type":"CDSView"}},"id":"86671cad-df90-4eb3-a786-447491bb8c08","type":"GlyphRenderer"},{"attributes":{},"id":"e7ce854b-d00e-4489-888b-667f8a67d27b","type":"HelpTool"},{"attributes":{"data_source":{"id":"cdc6ecd9-bb5b-433f-9a3b-861ab13b42ad","type":"ColumnDataSource"},"glyph":{"id":"11748935-929c-492a-b022-33079bc22b7b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"08e00033-9cfd-4459-844e-3c3022604b56","type":"Circle"},"selection_glyph":null,"view":{"id":"6d955f98-ec46-45e6-b4c3-e0ea032823eb","type":"CDSView"}},"id":"4e97ab63-698b-44a2-b972-86f47c60f11a","type":"GlyphRenderer"},{"attributes":{},"id":"cfc7e3c8-c836-442a-bdb1-aeab312b791c","type":"ResetTool"},{"attributes":{},"id":"e0fb4771-9077-4f28-ba9c-cae3901665f2","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e0fb4771-9077-4f28-ba9c-cae3901665f2","type":"PanTool"},{"id":"21ac4fc8-5166-4184-84d5-a1cbb3885874","type":"WheelZoomTool"},{"id":"552be0ac-ded7-4b50-a998-23fb39e2638e","type":"BoxZoomTool"},{"id":"197f9ef3-d67b-41d1-a4d8-04715c9f6abd","type":"SaveTool"},{"id":"cfc7e3c8-c836-442a-bdb1-aeab312b791c","type":"ResetTool"},{"id":"e7ce854b-d00e-4489-888b-667f8a67d27b","type":"HelpTool"}]},"id":"5c0c78d2-b37e-471a-bdd0-ac883db4a540","type":"Toolbar"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"6416a492-85d5-494a-baa9-3bc3bc104d2d","type":"FactorRange"},{"attributes":{},"id":"1b5c193d-dba1-4bcb-9040-0258151e7775","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"4592bb60-7d77-42eb-991e-0680764e7df2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b5c193d-dba1-4bcb-9040-0258151e7775","type":"CategoricalTicker"}},"id":"6b50e4ad-ae37-4c4a-ab00-d3a213dc4a81","type":"Grid"},{"attributes":{"plot":null,"text":"Fill and Line Color Combinations"},"id":"522c28d8-5021-4e7c-9dcc-6fc1d058ee35","type":"Title"},{"attributes":{},"id":"2b4894aa-0254-4237-ba50-daf53e312822","type":"CategoricalScale"},{"attributes":{"source":{"id":"f379bbd8-90cc-4141-8ae8-3d92df28adeb","type":"ColumnDataSource"}},"id":"0d35c605-57a1-4cf9-8ee2-102176d28ae0","type":"CDSView"},{"attributes":{"data_source":{"id":"648e3bf4-45e4-4f1c-94d6-a12c46367998","type":"ColumnDataSource"},"glyph":{"id":"6708e96a-7115-4b85-9d3e-3bad59ce59d1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7d500213-70c8-4f14-b762-e83d4204157d","type":"Circle"},"selection_glyph":null,"view":{"id":"39ffc397-3e07-4bc9-a2cc-de8b3c859b57","type":"CDSView"}},"id":"1c88c2f7-6c62-4d34-944a-b3ebe1d8f00c","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"55a34ed9-f716-45f5-a6ac-93a8a4792a5c","type":"Circle"},{"attributes":{"data_source":{"id":"ec867847-7e1f-4346-bee6-ceb801e52bd8","type":"ColumnDataSource"},"glyph":{"id":"cf73f348-68b8-4f42-8d96-6a071b21778e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37c02aa3-d679-43f2-affa-a64aa00f50dd","type":"Circle"},"selection_glyph":null,"view":{"id":"4950a7f7-fc10-4e07-93c8-936ba03265ad","type":"CDSView"}},"id":"e3d12db7-3b4e-437d-ae8b-a0304b07d7fa","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0329bbbd-f3e3-44a1-8634-3b6bd39b4008","type":"Circle"},{"attributes":{"callback":null,"factors":["None","Alpha","RGB","RGBA","Alpha+RGB","Alpha+RGBA"]},"id":"492be9f8-2b91-4587-aac9-677ccd166c60","type":"FactorRange"},{"attributes":{"axis_label":"Fill Options","formatter":{"id":"42d56586-902a-423e-bd94-605a95f8f8e2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4592bb60-7d77-42eb-991e-0680764e7df2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b5c193d-dba1-4bcb-9040-0258151e7775","type":"CategoricalTicker"}},"id":"db598c7a-3af2-42c3-b607-27c29f917c6f","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGBA"]}},"id":"648e3bf4-45e4-4f1c-94d6-a12c46367998","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"db598c7a-3af2-42c3-b607-27c29f917c6f","type":"CategoricalAxis"}],"left":[{"id":"7c232fc6-abc5-47dc-b285-7a47fe9bf52b","type":"CategoricalAxis"}],"renderers":[{"id":"db598c7a-3af2-42c3-b607-27c29f917c6f","type":"CategoricalAxis"},{"id":"6b50e4ad-ae37-4c4a-ab00-d3a213dc4a81","type":"Grid"},{"id":"7c232fc6-abc5-47dc-b285-7a47fe9bf52b","type":"CategoricalAxis"},{"id":"6507c550-438a-44d0-b53f-6151094ad8ff","type":"Grid"},{"id":"77d8326a-b3be-407a-bba1-8bee6aa4bb08","type":"BoxAnnotation"},{"id":"99902162-ea48-415f-b73c-40c2fbabe0a9","type":"GlyphRenderer"},{"id":"a289378d-7ce6-4898-8708-abd00d1cb433","type":"GlyphRenderer"},{"id":"3c7f0942-6e39-4c90-a4ab-6b93990f5e16","type":"GlyphRenderer"},{"id":"8d957ff0-e365-4084-900b-8887b7514ecc","type":"GlyphRenderer"},{"id":"2ed7822d-4070-4dd0-a8b6-582de4ef85fd","type":"GlyphRenderer"},{"id":"4110fe64-9a59-4d11-813a-28f909624bf6","type":"GlyphRenderer"},{"id":"1e11ce32-92cb-4611-a87d-6c1f8d49341c","type":"GlyphRenderer"},{"id":"ca1012d9-0d3a-4b51-9891-3d0ce858bd6b","type":"GlyphRenderer"},{"id":"ed9fa86d-bc5f-47c0-b55b-a4af6743f837","type":"GlyphRenderer"},{"id":"90b750dd-e3a8-4f29-8e8b-9b304100b5e2","type":"GlyphRenderer"},{"id":"b09a7ad0-b06b-4479-b20c-dc21ebf0c8c8","type":"GlyphRenderer"},{"id":"e78be842-54ad-4f65-8e65-3723ca0d3720","type":"GlyphRenderer"},{"id":"501bafb3-6c40-4dcf-b209-b615f9b7373b","type":"GlyphRenderer"},{"id":"1ef57ecf-26b1-497c-b12c-8f20fd9ae958","type":"GlyphRenderer"},{"id":"31153f13-0cec-48f3-b42e-baa679d1d591","type":"GlyphRenderer"},{"id":"86671cad-df90-4eb3-a786-447491bb8c08","type":"GlyphRenderer"},{"id":"e3d12db7-3b4e-437d-ae8b-a0304b07d7fa","type":"GlyphRenderer"},{"id":"4e97ab63-698b-44a2-b972-86f47c60f11a","type":"GlyphRenderer"},{"id":"6ed2bf87-1176-42c1-a6ae-a6d2c5628a6c","type":"GlyphRenderer"},{"id":"4a39ebc3-7ad0-44e1-b1b7-989210ed3e6f","type":"GlyphRenderer"},{"id":"709ea8ac-fa9a-4618-8a1b-83ac22026b09","type":"GlyphRenderer"},{"id":"436f97fa-5b63-4ad7-9e64-be372ad2c3b4","type":"GlyphRenderer"},{"id":"64252188-5f4c-4b9b-987c-b0c941eb3f3c","type":"GlyphRenderer"},{"id":"7b5ff9f4-e7c6-4972-bea0-e9ec865f206d","type":"GlyphRenderer"},{"id":"c9519aa9-f291-4b03-aa1a-15d1048124f8","type":"GlyphRenderer"},{"id":"8551f615-6237-4a9b-bbe2-ea189f9c3eab","type":"GlyphRenderer"},{"id":"e307b0e1-2490-451b-8922-6922d6da9011","type":"GlyphRenderer"},{"id":"e81ab729-e214-4d0e-8c33-81d1e438512e","type":"GlyphRenderer"},{"id":"cbdb8da0-6260-47e2-b8cb-c6c63899703f","type":"GlyphRenderer"},{"id":"d0f3e3ce-9f93-4e08-ba34-638e549a2437","type":"GlyphRenderer"},{"id":"be360634-963a-4ce5-ae2e-c4295b3d7f77","type":"GlyphRenderer"},{"id":"1683e501-84e0-43e2-bfad-093d7de394aa","type":"GlyphRenderer"},{"id":"63ff1029-147a-47d8-a488-3f621db76f99","type":"GlyphRenderer"},{"id":"d6ab30a2-4de4-42c7-90a9-ae578312f063","type":"GlyphRenderer"},{"id":"f4b12d8c-6182-4cae-9f93-75d1bcd49bc2","type":"GlyphRenderer"},{"id":"1c88c2f7-6c62-4d34-944a-b3ebe1d8f00c","type":"GlyphRenderer"}],"title":{"id":"522c28d8-5021-4e7c-9dcc-6fc1d058ee35","type":"Title"},"toolbar":{"id":"5c0c78d2-b37e-471a-bdd0-ac883db4a540","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"492be9f8-2b91-4587-aac9-677ccd166c60","type":"FactorRange"},"x_scale":{"id":"2b4894aa-0254-4237-ba50-daf53e312822","type":"CategoricalScale"},"y_range":{"id":"6416a492-85d5-494a-baa9-3bc3bc104d2d","type":"FactorRange"},"y_scale":{"id":"cadf8835-1548-4b94-b377-623d4704ff96","type":"CategoricalScale"}},"id":"4592bb60-7d77-42eb-991e-0680764e7df2","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"cdc6ecd9-bb5b-433f-9a3b-861ab13b42ad","type":"ColumnDataSource"}},"id":"6d955f98-ec46-45e6-b4c3-e0ea032823eb","type":"CDSView"},{"attributes":{"data_source":{"id":"55ce94e7-63b0-428b-81e8-ac8931b51343","type":"ColumnDataSource"},"glyph":{"id":"5a3f0ead-330f-4fcd-9af1-7c897ada4e30","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2d10f23d-2d34-4265-b1be-705ddaf207fe","type":"Circle"},"selection_glyph":null,"view":{"id":"73627528-1e60-464c-8ffe-7c870fe323cb","type":"CDSView"}},"id":"436f97fa-5b63-4ad7-9e64-be372ad2c3b4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGBA"]}},"id":"74abf453-4023-48f8-832a-70458a314490","type":"ColumnDataSource"},{"attributes":{"source":{"id":"961b66da-7da8-4f9b-b8ad-9c5e7c7c4bdf","type":"ColumnDataSource"}},"id":"8316618d-445f-4f59-936a-b43467f0755b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4773db3-d01b-4a24-8971-ca61c3b1d39e","type":"Circle"},{"attributes":{"data_source":{"id":"f379bbd8-90cc-4141-8ae8-3d92df28adeb","type":"ColumnDataSource"},"glyph":{"id":"2ec21339-2b1d-4393-8c9e-62edf2c26196","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18cbe9eb-34dd-40cd-ade9-6434309b60d1","type":"Circle"},"selection_glyph":null,"view":{"id":"0d35c605-57a1-4cf9-8ee2-102176d28ae0","type":"CDSView"}},"id":"501bafb3-6c40-4dcf-b209-b615f9b7373b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f7306b0-2aca-41de-a715-c3b46ea6dfe7","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"37c02aa3-d679-43f2-affa-a64aa00f50dd","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGB"]}},"id":"7f4478ce-91a4-4270-add0-d02bdadc07b3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bbc001d6-7dec-4d14-898a-e5bce71945a8","type":"ColumnDataSource"},"glyph":{"id":"55a34ed9-f716-45f5-a6ac-93a8a4792a5c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ceeddfb9-93b6-4dfd-8c80-0e7f8c79efd6","type":"Circle"},"selection_glyph":null,"view":{"id":"7ad747d1-27cf-4954-bd81-2e8ab7beed6a","type":"CDSView"}},"id":"31153f13-0cec-48f3-b42e-baa679d1d591","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGBA"]}},"id":"961b66da-7da8-4f9b-b8ad-9c5e7c7c4bdf","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["None"]}},"id":"f379bbd8-90cc-4141-8ae8-3d92df28adeb","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ec21339-2b1d-4393-8c9e-62edf2c26196","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGB"]}},"id":"ec867847-7e1f-4346-bee6-ceb801e52bd8","type":"ColumnDataSource"},{"attributes":{"source":{"id":"bbc001d6-7dec-4d14-898a-e5bce71945a8","type":"ColumnDataSource"}},"id":"7ad747d1-27cf-4954-bd81-2e8ab7beed6a","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c2e9617-6b91-4aac-91a8-d03b1b91caae","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5117963a-f8aa-44ab-94bb-ea86850d62ee","type":"Circle"},{"attributes":{"data_source":{"id":"961b66da-7da8-4f9b-b8ad-9c5e7c7c4bdf","type":"ColumnDataSource"},"glyph":{"id":"7f7306b0-2aca-41de-a715-c3b46ea6dfe7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a4773db3-d01b-4a24-8971-ca61c3b1d39e","type":"Circle"},"selection_glyph":null,"view":{"id":"8316618d-445f-4f59-936a-b43467f0755b","type":"CDSView"}},"id":"e78be842-54ad-4f65-8e65-3723ca0d3720","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha"]}},"id":"486a52ce-8977-4643-b094-b3edabf431a4","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ec867847-7e1f-4346-bee6-ceb801e52bd8","type":"ColumnDataSource"}},"id":"4950a7f7-fc10-4e07-93c8-936ba03265ad","type":"CDSView"},{"attributes":{"source":{"id":"55ce94e7-63b0-428b-81e8-ac8931b51343","type":"ColumnDataSource"}},"id":"73627528-1e60-464c-8ffe-7c870fe323cb","type":"CDSView"},{"attributes":{"data_source":{"id":"486a52ce-8977-4643-b094-b3edabf431a4","type":"ColumnDataSource"},"glyph":{"id":"8c2e9617-6b91-4aac-91a8-d03b1b91caae","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78001e55-283c-4d6f-87ba-71d21f45fbf5","type":"Circle"},"selection_glyph":null,"view":{"id":"051cc9cd-6094-4add-9969-69773307e932","type":"CDSView"}},"id":"1ef57ecf-26b1-497c-b12c-8f20fd9ae958","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["RGB"]}},"id":"bbc001d6-7dec-4d14-898a-e5bce71945a8","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ceeddfb9-93b6-4dfd-8c80-0e7f8c79efd6","type":"Circle"},{"attributes":{"source":{"id":"486a52ce-8977-4643-b094-b3edabf431a4","type":"ColumnDataSource"}},"id":"051cc9cd-6094-4add-9969-69773307e932","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"78001e55-283c-4d6f-87ba-71d21f45fbf5","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"18cbe9eb-34dd-40cd-ade9-6434309b60d1","type":"Circle"},{"attributes":{"source":{"id":"648e3bf4-45e4-4f1c-94d6-a12c46367998","type":"ColumnDataSource"}},"id":"39ffc397-3e07-4bc9-a2cc-de8b3c859b57","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf73f348-68b8-4f42-8d96-6a071b21778e","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGB"],"y":["Alpha+RGBA"]}},"id":"cdc6ecd9-bb5b-433f-9a3b-861ab13b42ad","type":"ColumnDataSource"},{"attributes":{"source":{"id":"74abf453-4023-48f8-832a-70458a314490","type":"ColumnDataSource"}},"id":"0652f4cd-969a-4022-8e7a-9665781b8516","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c811592-713c-4f58-b24f-aa5096999fe9","type":"Circle"},{"attributes":{"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"11748935-929c-492a-b022-33079bc22b7b","type":"Circle"},{"attributes":{"data_source":{"id":"06935def-ebf7-4de6-a4fc-5ce6cf1af5e3","type":"ColumnDataSource"},"glyph":{"id":"eec65048-5e17-4a8e-a09f-b4b7e45d1ad6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dda6440a-8430-4b38-87c8-0bf1dcfd3d7c","type":"Circle"},"selection_glyph":null,"view":{"id":"fac7b35b-138e-4561-9748-62c24a2c71a7","type":"CDSView"}},"id":"90b750dd-e3a8-4f29-8e8b-9b304100b5e2","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"effbff35-d55d-4e96-8f84-a3501f440214","type":"Circle"},{"attributes":{"data_source":{"id":"026498c2-461f-4955-938d-adaaef7b0954","type":"ColumnDataSource"},"glyph":{"id":"7ecd4193-4fb2-4cf3-a185-a3c4ec82afbb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9097342-1b8e-4d06-9428-81175d7bd4e4","type":"Circle"},"selection_glyph":null,"view":{"id":"8686f6e9-846a-428d-ba5b-6e391f02f795","type":"CDSView"}},"id":"c9519aa9-f291-4b03-aa1a-15d1048124f8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGB"]}},"id":"8b4609cc-9414-4a50-b3d3-0a16593f8a87","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7bcf2bb4-88c7-401a-b8cd-d8bb2ff23ad9","type":"ColumnDataSource"},"glyph":{"id":"0ee19b85-b908-49e0-85ab-ee07a77b819f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58e863b6-3117-4739-a2c0-b57134e01051","type":"Circle"},"selection_glyph":null,"view":{"id":"81000100-7ba0-4d5a-9e5e-03307bdb1a55","type":"CDSView"}},"id":"ca1012d9-0d3a-4b51-9891-3d0ce858bd6b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"dda6440a-8430-4b38-87c8-0bf1dcfd3d7c","type":"Circle"},{"attributes":{"source":{"id":"06935def-ebf7-4de6-a4fc-5ce6cf1af5e3","type":"ColumnDataSource"}},"id":"fac7b35b-138e-4561-9748-62c24a2c71a7","type":"CDSView"},{"attributes":{"source":{"id":"2e0cc4f4-6149-4809-81b5-b7784dbef2e9","type":"ColumnDataSource"}},"id":"69851ac4-7d65-4788-856d-cdd6285444ae","type":"CDSView"},{"attributes":{"data_source":{"id":"2e0cc4f4-6149-4809-81b5-b7784dbef2e9","type":"ColumnDataSource"},"glyph":{"id":"6564b0a9-1183-445d-a977-f4ad8c9d325d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b199013d-0a15-43df-b20a-22cc285b9133","type":"Circle"},"selection_glyph":null,"view":{"id":"69851ac4-7d65-4788-856d-cdd6285444ae","type":"CDSView"}},"id":"8551f615-6237-4a9b-bbe2-ea189f9c3eab","type":"GlyphRenderer"},{"attributes":{},"id":"42d56586-902a-423e-bd94-605a95f8f8e2","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"accb09be-323a-4649-9ca2-ac9e4d662b27","type":"ColumnDataSource"}},"id":"7439b7f4-f296-4d09-a906-9ed9f5d4c6a9","type":"CDSView"},{"attributes":{"source":{"id":"f89265a3-9eb1-482a-a598-28207598832e","type":"ColumnDataSource"}},"id":"9a352b16-af9c-4c56-9bf2-c4cf054f7ff0","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a7c5648-f0b5-4e1d-ac1e-01bbdb7933f5","type":"Circle"},{"attributes":{"source":{"id":"f14b4c82-f389-4930-80e4-3330854f2112","type":"ColumnDataSource"}},"id":"1f2e2545-fe4b-49b1-9526-ac0307bc14e3","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6dad721-531f-4d86-a24a-573b9e2a7064","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGBA"]}},"id":"f89265a3-9eb1-482a-a598-28207598832e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["RGBA"]}},"id":"06935def-ebf7-4de6-a4fc-5ce6cf1af5e3","type":"ColumnDataSource"},{"attributes":{"source":{"id":"0cf9f3b8-916a-4a19-a910-28888fb79934","type":"ColumnDataSource"}},"id":"21cf0a34-d04f-43ca-863d-b6cd21dfa7bf","type":"CDSView"},{"attributes":{"data_source":{"id":"8b4609cc-9414-4a50-b3d3-0a16593f8a87","type":"ColumnDataSource"},"glyph":{"id":"60d7755e-649e-456a-96fe-2d2eeee339fb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dcbbcd31-d2e7-4dbf-bbc5-83566d8063aa","type":"Circle"},"selection_glyph":null,"view":{"id":"9c5a6ba0-14d5-48c6-8d5f-89d382547954","type":"CDSView"}},"id":"ed9fa86d-bc5f-47c0-b55b-a4af6743f837","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"537c87ae-1425-4c99-a839-96a41c2f1d12","type":"Circle"},{"attributes":{"data_source":{"id":"051e6dc7-a736-4f3b-9260-6b2048fec74a","type":"ColumnDataSource"},"glyph":{"id":"ef06519c-0dce-4c25-8ddb-e2e4a6a1b6e4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eaf50e76-b5d7-44fb-854a-056ac508cd3b","type":"Circle"},"selection_glyph":null,"view":{"id":"629b13d3-d849-460c-bf94-ce25a8746bb5","type":"CDSView"}},"id":"e307b0e1-2490-451b-8922-6922d6da9011","type":"GlyphRenderer"},{"attributes":{"source":{"id":"02e722f0-ecc3-486f-8378-3bf79d4ccbaf","type":"ColumnDataSource"}},"id":"c34cf4c9-4ab0-4793-8eba-e7af79f88741","type":"CDSView"},{"attributes":{"data_source":{"id":"0cf9f3b8-916a-4a19-a910-28888fb79934","type":"ColumnDataSource"},"glyph":{"id":"13a576ab-5423-41c0-9415-b085e1f9b052","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"537c87ae-1425-4c99-a839-96a41c2f1d12","type":"Circle"},"selection_glyph":null,"view":{"id":"21cf0a34-d04f-43ca-863d-b6cd21dfa7bf","type":"CDSView"}},"id":"1683e501-84e0-43e2-bfad-093d7de394aa","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"dcbbcd31-d2e7-4dbf-bbc5-83566d8063aa","type":"Circle"},{"attributes":{"source":{"id":"7f4478ce-91a4-4270-add0-d02bdadc07b3","type":"ColumnDataSource"}},"id":"bb5e92eb-0de8-40db-986e-9e287cf5ccfb","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"eaf50e76-b5d7-44fb-854a-056ac508cd3b","type":"Circle"},{"attributes":{"data_source":{"id":"f14b4c82-f389-4930-80e4-3330854f2112","type":"ColumnDataSource"},"glyph":{"id":"6be5fcb8-dfe7-4732-b5ed-3f38d76e7a9b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44c063a1-4bf0-4a18-8271-38c85ca0505f","type":"Circle"},"selection_glyph":null,"view":{"id":"1f2e2545-fe4b-49b1-9526-ac0307bc14e3","type":"CDSView"}},"id":"63ff1029-147a-47d8-a488-3f621db76f99","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"eec65048-5e17-4a8e-a09f-b4b7e45d1ad6","type":"Circle"},{"attributes":{"source":{"id":"7bcf2bb4-88c7-401a-b8cd-d8bb2ff23ad9","type":"ColumnDataSource"}},"id":"81000100-7ba0-4d5a-9e5e-03307bdb1a55","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7cf84fa1-6e41-496d-8a57-ee780a58c22b","type":"Circle"},{"attributes":{"source":{"id":"1fea5b2c-58ac-428b-b700-1358523e9894","type":"ColumnDataSource"}},"id":"a99fca91-7b51-42a0-8b6a-4e676b595d85","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"bde74aa2-7778-4d18-bf73-7a5da227f0d2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"60d7755e-649e-456a-96fe-2d2eeee339fb","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d10f23d-2d34-4265-b1be-705ddaf207fe","type":"Circle"},{"attributes":{"source":{"id":"37d302ec-6ae6-4924-8f1f-9e9c0f1dbc69","type":"ColumnDataSource"}},"id":"ef8b92b1-7965-4716-ae7b-bc972ee4c1d9","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b199013d-0a15-43df-b20a-22cc285b9133","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGB"]}},"id":"bb853545-8d01-4f2e-99b7-2179108b5481","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"07d3c49a-6bc1-4fb1-a2ce-43d84fc897f8","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"97584ec4-2fd4-45bd-bdca-9aa1caf23135","type":"Circle"},{"attributes":{"data_source":{"id":"01c1f50d-5c09-4d0b-82ff-0a040bc99b8b","type":"ColumnDataSource"},"glyph":{"id":"55e7f247-cc2e-4af9-8e03-b980fa1665d8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d6dad721-531f-4d86-a24a-573b9e2a7064","type":"Circle"},"selection_glyph":null,"view":{"id":"3f4e7a4e-1f92-4567-bdf2-769a68a09d61","type":"CDSView"}},"id":"b09a7ad0-b06b-4479-b20c-dc21ebf0c8c8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7b648f1-f3d8-48fa-9bb5-fc2d7ae362b7","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["RGB"]}},"id":"f14b4c82-f389-4930-80e4-3330854f2112","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"68060eb2-f988-44a5-a29c-8cd1b5882547","type":"Circle"},{"attributes":{"source":{"id":"01c1f50d-5c09-4d0b-82ff-0a040bc99b8b","type":"ColumnDataSource"}},"id":"3f4e7a4e-1f92-4567-bdf2-769a68a09d61","type":"CDSView"},{"attributes":{"source":{"id":"cc4b86e9-8378-4f5a-adff-ed27109edc49","type":"ColumnDataSource"}},"id":"cdb48acc-33f8-4a81-8fad-52403ec6d4cf","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"62f1654d-65fe-478a-82b9-37a3a066921f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"44c063a1-4bf0-4a18-8271-38c85ca0505f","type":"Circle"},{"attributes":{"data_source":{"id":"3478cecc-b5f4-4def-82ca-af3026129592","type":"ColumnDataSource"},"glyph":{"id":"7e09e86b-9f0b-4a56-99c2-59faebd54c07","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"effbff35-d55d-4e96-8f84-a3501f440214","type":"Circle"},"selection_glyph":null,"view":{"id":"9158b013-18a5-4329-9692-1ef47797d79f","type":"CDSView"}},"id":"a289378d-7ce6-4898-8708-abd00d1cb433","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9097342-1b8e-4d06-9428-81175d7bd4e4","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGB"]}},"id":"051e6dc7-a736-4f3b-9260-6b2048fec74a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bb853545-8d01-4f2e-99b7-2179108b5481","type":"ColumnDataSource"},"glyph":{"id":"8cd8226a-df82-406b-8ba9-9de14c1e031d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b4919a8f-05d4-4aee-bbf7-115502a69db0","type":"Circle"},"selection_glyph":null,"view":{"id":"042a03c7-23d3-4863-b9ac-46de27287877","type":"CDSView"}},"id":"3c7f0942-6e39-4c90-a4ab-6b93990f5e16","type":"GlyphRenderer"},{"attributes":{"source":{"id":"026498c2-461f-4955-938d-adaaef7b0954","type":"ColumnDataSource"}},"id":"8686f6e9-846a-428d-ba5b-6e391f02f795","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"55e7f247-cc2e-4af9-8e03-b980fa1665d8","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"eee55380-8adf-4360-80b8-1cacb8c8c660","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["RGBA"]}},"id":"accb09be-323a-4649-9ca2-ac9e4d662b27","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"37d302ec-6ae6-4924-8f1f-9e9c0f1dbc69","type":"ColumnDataSource"},"glyph":{"id":"62f1654d-65fe-478a-82b9-37a3a066921f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fbad5712-d4e9-4bb9-abde-9d4588db4996","type":"Circle"},"selection_glyph":null,"view":{"id":"ef8b92b1-7965-4716-ae7b-bc972ee4c1d9","type":"CDSView"}},"id":"6ed2bf87-1176-42c1-a6ae-a6d2c5628a6c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha+RGB"]}},"id":"01c1f50d-5c09-4d0b-82ff-0a040bc99b8b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"3203e5f8-f3fa-4af9-8f87-6926afd590cb","type":"Circle"},{"attributes":{"data_source":{"id":"cc4b86e9-8378-4f5a-adff-ed27109edc49","type":"ColumnDataSource"},"glyph":{"id":"02f45057-cf69-42bb-97d0-3b1bf593fc80","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"03c374ba-74d2-41d1-834f-aac433fb5774","type":"Circle"},"selection_glyph":null,"view":{"id":"cdb48acc-33f8-4a81-8fad-52403ec6d4cf","type":"CDSView"}},"id":"cbdb8da0-6260-47e2-b8cb-c6c63899703f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1fea5b2c-58ac-428b-b700-1358523e9894","type":"ColumnDataSource"},"glyph":{"id":"4a7c5648-f0b5-4e1d-ac1e-01bbdb7933f5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"09978e50-ec44-4f78-87e0-c4e044409286","type":"Circle"},"selection_glyph":null,"view":{"id":"a99fca91-7b51-42a0-8b6a-4e676b595d85","type":"CDSView"}},"id":"1e11ce32-92cb-4611-a87d-6c1f8d49341c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9b560ee2-9746-4ce6-8275-bbb838757bcd","type":"ColumnDataSource"},"glyph":{"id":"8d54124f-3a69-47d8-8955-6c931dc7d70e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3203e5f8-f3fa-4af9-8f87-6926afd590cb","type":"Circle"},"selection_glyph":null,"view":{"id":"c1fa55e7-7baa-4cd1-86cd-f042b485718f","type":"CDSView"}},"id":"d0f3e3ce-9f93-4e08-ba34-638e549a2437","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ecd4193-4fb2-4cf3-a185-a3c4ec82afbb","type":"Circle"},{"attributes":{"data_source":{"id":"02e722f0-ecc3-486f-8378-3bf79d4ccbaf","type":"ColumnDataSource"},"glyph":{"id":"03272058-e297-40fb-9ea9-b14ea829a4e1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"844de6d6-e414-4512-9f3e-ddbc97d4d15b","type":"Circle"},"selection_glyph":null,"view":{"id":"c34cf4c9-4ab0-4793-8eba-e7af79f88741","type":"CDSView"}},"id":"7b5ff9f4-e7c6-4972-bea0-e9ec865f206d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bdec6e28-cc4a-4be7-93f9-5f9c30903c95","type":"ColumnDataSource"}},"id":"cceba8f4-e0e7-47cf-9219-bb660dc8a350","type":"CDSView"},{"attributes":{"source":{"id":"8b4609cc-9414-4a50-b3d3-0a16593f8a87","type":"ColumnDataSource"}},"id":"9c5a6ba0-14d5-48c6-8d5f-89d382547954","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fbad5712-d4e9-4bb9-abde-9d4588db4996","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["None"]}},"id":"026498c2-461f-4955-938d-adaaef7b0954","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"03c374ba-74d2-41d1-834f-aac433fb5774","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d893851-d0ed-4491-8f5e-7dd1500a4f9b","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGBA"]}},"id":"55ce94e7-63b0-428b-81e8-ac8931b51343","type":"ColumnDataSource"},{"attributes":{"source":{"id":"051e6dc7-a736-4f3b-9260-6b2048fec74a","type":"ColumnDataSource"}},"id":"629b13d3-d849-460c-bf94-ce25a8746bb5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"477f6277-5d96-429a-9a66-18033a75944d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"844de6d6-e414-4512-9f3e-ddbc97d4d15b","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a3f0ead-330f-4fcd-9af1-7c897ada4e30","type":"Circle"},{"attributes":{"data_source":{"id":"bdec6e28-cc4a-4be7-93f9-5f9c30903c95","type":"ColumnDataSource"},"glyph":{"id":"ff649bc9-4c7d-4cf5-a195-b1bc7d0343d1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d5b7623b-48b2-4b9d-b97e-07759809560d","type":"Circle"},"selection_glyph":null,"view":{"id":"cceba8f4-e0e7-47cf-9219-bb660dc8a350","type":"CDSView"}},"id":"4a39ebc3-7ad0-44e1-b1b7-989210ed3e6f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bbdcd9b9-2647-4922-8ef7-64f0abda0fdd","type":"ColumnDataSource"},"glyph":{"id":"97bb1f96-c0cc-4d80-9ea1-18676f982600","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6295f45d-62de-4db6-b6d3-1ddddbf58da0","type":"Circle"},"selection_glyph":null,"view":{"id":"8e32ad0e-3b7a-4ad1-a46b-c06efcf08713","type":"CDSView"}},"id":"4110fe64-9a59-4d11-813a-28f909624bf6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["RGB"]}},"id":"feaebae6-86c4-4cb2-8da2-147af0fa7295","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"58dc193c-4980-4b3f-bcdc-cd81038a25b8","type":"Circle"},{"attributes":{"source":{"id":"6b04196f-2f9a-42d6-931e-2b9a2e28e936","type":"ColumnDataSource"}},"id":"4b21448e-f501-41b3-931a-b76e221bc24f","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"97bb1f96-c0cc-4d80-9ea1-18676f982600","type":"Circle"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"03272058-e297-40fb-9ea9-b14ea829a4e1","type":"Circle"},{"attributes":{"source":{"id":"9b560ee2-9746-4ce6-8275-bbb838757bcd","type":"ColumnDataSource"}},"id":"c1fa55e7-7baa-4cd1-86cd-f042b485718f","type":"CDSView"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d8ffd98-bc50-4dcd-b18d-63f60b2c8be6","type":"Circle"},{"attributes":{"data_source":{"id":"6b04196f-2f9a-42d6-931e-2b9a2e28e936","type":"ColumnDataSource"},"glyph":{"id":"5b6cb3a1-a88c-467b-b0b3-c24852c9ae35","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7809c50-1eea-4cec-b0c7-f9bf08864201","type":"Circle"},"selection_glyph":null,"view":{"id":"4b21448e-f501-41b3-931a-b76e221bc24f","type":"CDSView"}},"id":"e81ab729-e214-4d0e-8c33-81d1e438512e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"d5b7623b-48b2-4b9d-b97e-07759809560d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"09978e50-ec44-4f78-87e0-c4e044409286","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7809c50-1eea-4cec-b0c7-f9bf08864201","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"58e863b6-3117-4739-a2c0-b57134e01051","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6295f45d-62de-4db6-b6d3-1ddddbf58da0","type":"Circle"},{"attributes":{"source":{"id":"feaebae6-86c4-4cb2-8da2-147af0fa7295","type":"ColumnDataSource"}},"id":"a0fed711-534e-403e-9af5-0d144bd99cc3","type":"CDSView"},{"attributes":{"data_source":{"id":"7f4478ce-91a4-4270-add0-d02bdadc07b3","type":"ColumnDataSource"},"glyph":{"id":"58dc193c-4980-4b3f-bcdc-cd81038a25b8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7b648f1-f3d8-48fa-9bb5-fc2d7ae362b7","type":"Circle"},"selection_glyph":null,"view":{"id":"bb5e92eb-0de8-40db-986e-9e287cf5ccfb","type":"CDSView"}},"id":"64252188-5f4c-4b9b-987c-b0c941eb3f3c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGBA"]}},"id":"bbdcd9b9-2647-4922-8ef7-64f0abda0fdd","type":"ColumnDataSource"},{"attributes":{"source":{"id":"bb853545-8d01-4f2e-99b7-2179108b5481","type":"ColumnDataSource"}},"id":"042a03c7-23d3-4863-b9ac-46de27287877","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha"]}},"id":"0cf9f3b8-916a-4a19-a910-28888fb79934","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"accb09be-323a-4649-9ca2-ac9e4d662b27","type":"ColumnDataSource"},"glyph":{"id":"4d893851-d0ed-4491-8f5e-7dd1500a4f9b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68060eb2-f988-44a5-a29c-8cd1b5882547","type":"Circle"},"selection_glyph":null,"view":{"id":"7439b7f4-f296-4d09-a906-9ed9f5d4c6a9","type":"CDSView"}},"id":"8d957ff0-e365-4084-900b-8887b7514ecc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"02f45057-cf69-42bb-97d0-3b1bf593fc80","type":"Circle"},{"attributes":{"source":{"id":"ef26d662-b1c9-4e62-a3da-ee37111e8ff1","type":"ColumnDataSource"}},"id":"95b55d49-7c15-4649-8a8e-55b78c7d21be","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ee19b85-b908-49e0-85ab-ee07a77b819f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["None"]}},"id":"37d302ec-6ae6-4924-8f1f-9e9c0f1dbc69","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c573c98-41e6-4de1-b19e-72ee7456f8c6","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["RGBA"]}},"id":"6b04196f-2f9a-42d6-931e-2b9a2e28e936","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8c528a73-7de8-41ec-b9c6-f18a8628b505","type":"ColumnDataSource"},"glyph":{"id":"bde74aa2-7778-4d18-bf73-7a5da227f0d2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eee55380-8adf-4360-80b8-1cacb8c8c660","type":"Circle"},"selection_glyph":null,"view":{"id":"7555590c-5223-41ed-86af-ad628b889f30","type":"CDSView"}},"id":"be360634-963a-4ce5-ae2e-c4295b3d7f77","type":"GlyphRenderer"},{"attributes":{"source":{"id":"bbdcd9b9-2647-4922-8ef7-64f0abda0fdd","type":"ColumnDataSource"}},"id":"8e32ad0e-3b7a-4ad1-a46b-c06efcf08713","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["None"]}},"id":"1fea5b2c-58ac-428b-b700-1358523e9894","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef06519c-0dce-4c25-8ddb-e2e4a6a1b6e4","type":"Circle"},{"attributes":{"source":{"id":"3478cecc-b5f4-4def-82ca-af3026129592","type":"ColumnDataSource"}},"id":"9158b013-18a5-4329-9692-1ef47797d79f","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha"]}},"id":"bdec6e28-cc4a-4be7-93f9-5f9c30903c95","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8c528a73-7de8-41ec-b9c6-f18a8628b505","type":"ColumnDataSource"}},"id":"7555590c-5223-41ed-86af-ad628b889f30","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha"],"y":["Alpha"]}},"id":"7bcf2bb4-88c7-401a-b8cd-d8bb2ff23ad9","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["RGBA"],"y":["Alpha+RGBA"]}},"id":"02e722f0-ecc3-486f-8378-3bf79d4ccbaf","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d54124f-3a69-47d8-8955-6c931dc7d70e","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8cd8226a-df82-406b-8ba9-9de14c1e031d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"13a576ab-5423-41c0-9415-b085e1f9b052","type":"Circle"},{"attributes":{"data_source":{"id":"f89265a3-9eb1-482a-a598-28207598832e","type":"ColumnDataSource"},"glyph":{"id":"7cf84fa1-6e41-496d-8a57-ee780a58c22b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97584ec4-2fd4-45bd-bdca-9aa1caf23135","type":"Circle"},"selection_glyph":null,"view":{"id":"9a352b16-af9c-4c56-9bf2-c4cf054f7ff0","type":"CDSView"}},"id":"d6ab30a2-4de4-42c7-90a9-ae578312f063","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e09e86b-9f0b-4a56-99c2-59faebd54c07","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha+RGB"]}},"id":"ef26d662-b1c9-4e62-a3da-ee37111e8ff1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGBA"]}},"id":"9b560ee2-9746-4ce6-8275-bbb838757bcd","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["None"],"y":["Alpha"]}},"id":"3478cecc-b5f4-4def-82ca-af3026129592","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff649bc9-4c7d-4cf5-a195-b1bc7d0343d1","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_alpha":{"value":0.5},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"852ba6fe-8960-44c4-86a1-7c1bb76ee7a9","type":"Circle"},{"attributes":{"data_source":{"id":"feaebae6-86c4-4cb2-8da2-147af0fa7295","type":"ColumnDataSource"},"glyph":{"id":"0d8ffd98-bc50-4dcd-b18d-63f60b2c8be6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"477f6277-5d96-429a-9a66-18033a75944d","type":"Circle"},"selection_glyph":null,"view":{"id":"a0fed711-534e-403e-9af5-0d144bd99cc3","type":"CDSView"}},"id":"709ea8ac-fa9a-4618-8a1b-83ac22026b09","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4919a8f-05d4-4aee-bbf7-115502a69db0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgba(242, 44, 64, 0.5)"},"line_color":{"value":"rgb(0, 0, 0)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6be5fcb8-dfe7-4732-b5ed-3f38d76e7a9b","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9947173-80ba-467c-88ef-bab835c0cd0f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha+RGB"]}},"id":"cc4b86e9-8378-4f5a-adff-ed27109edc49","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["None"]}},"id":"8c528a73-7de8-41ec-b9c6-f18a8628b505","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGBA"],"y":["Alpha+RGB"]}},"id":"8d76912a-a445-4f2d-a6eb-9102aecc4b41","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ef26d662-b1c9-4e62-a3da-ee37111e8ff1","type":"ColumnDataSource"},"glyph":{"id":"1c573c98-41e6-4de1-b19e-72ee7456f8c6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a9947173-80ba-467c-88ef-bab835c0cd0f","type":"Circle"},"selection_glyph":null,"view":{"id":"95b55d49-7c15-4649-8a8e-55b78c7d21be","type":"CDSView"}},"id":"2ed7822d-4070-4dd0-a8b6-582de4ef85fd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Alpha+RGB"],"y":["Alpha"]}},"id":"2e0cc4f4-6149-4809-81b5-b7784dbef2e9","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"6564b0a9-1183-445d-a977-f4ad8c9d325d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"rgb(242, 44, 64)"},"line_color":{"value":"rgba(0, 0, 0, 0.5)"},"line_width":{"value":7},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b6cb3a1-a88c-467b-b0b3-c24852c9ae35","type":"Circle"}],"root_ids":["4592bb60-7d77-42eb-991e-0680764e7df2"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"64daaab0-b72f-4dc9-b18c-891e9c81fe0f","elementid":"62ad9645-6aee-4b12-87ab-d252fd253bf6","modelid":"4592bb60-7d77-42eb-991e-0680764e7df2"}];
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