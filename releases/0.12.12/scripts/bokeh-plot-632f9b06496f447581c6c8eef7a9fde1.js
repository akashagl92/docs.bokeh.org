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
      };var element = document.getElementById("9240cbb8-8ad7-488f-9c13-8a4e01d4840e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9240cbb8-8ad7-488f-9c13-8a4e01d4840e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c6861c6f-eed2-4b74-8647-0c1d3dac8b51":{"roots":{"references":[{"attributes":{"below":[{"id":"04d779f8-7a28-4c1a-9958-8cd4a8882084","type":"CategoricalAxis"}],"left":[{"id":"29029604-1b8e-4dff-818c-37ae6484ac62","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":300,"plot_width":800,"renderers":[{"id":"04d779f8-7a28-4c1a-9958-8cd4a8882084","type":"CategoricalAxis"},{"id":"4d68d0b4-d796-44ff-b987-97cc33934a5f","type":"Grid"},{"id":"29029604-1b8e-4dff-818c-37ae6484ac62","type":"LinearAxis"},{"id":"94c554f6-0473-475a-a564-3c2844159bd1","type":"Grid"},{"id":"35e79485-bcbe-4852-a30d-32515d6b0477","type":"GlyphRenderer"}],"title":{"id":"2c67c0d1-9e34-4df5-82b2-207515daefaf","type":"Title"},"toolbar":{"id":"48643630-7f38-456b-b8d8-16bdb65e8b5a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"af467439-226d-42c8-a6d8-2860ebd80875","type":"FactorRange"},"x_scale":{"id":"e9206ee0-19c7-4ca5-a665-ec5ea469e513","type":"CategoricalScale"},"y_range":{"id":"f8f6d5e2-37d4-47aa-bd0e-6e8995df0fd7","type":"DataRange1d"},"y_scale":{"id":"492026b6-ccdf-443f-befb-7a0bd2168366","type":"LinearScale"}},"id":"edc8e6b5-625a-449c-a61e-9650b65890bc","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"b6346462-b665-4d40-8997-6d54cd49f8d8","type":"ColumnDataSource"},"glyph":{"id":"8d6a09b1-364c-4c91-a49c-90b59b07d23f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"942a0083-0727-42cd-9035-8555af61b309","type":"VBar"},"selection_glyph":null,"view":{"id":"b81820e5-7a78-4670-9bb4-a6511b8422ba","type":"CDSView"}},"id":"35e79485-bcbe-4852-a30d-32515d6b0477","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"f8f6d5e2-37d4-47aa-bd0e-6e8995df0fd7","type":"DataRange1d"},{"attributes":{},"id":"9f9645fc-e338-42a6-9979-81d371e41aaa","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"cyl_mfr","transform":{"id":"09229359-a014-4bb2-9eba-07f9d834650a","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl_mfr"}},"id":"8d6a09b1-364c-4c91-a49c-90b59b07d23f","type":"VBar"},{"attributes":{"callback":null,"column_names":["accel_count","accel_mean","accel_std","accel_min","accel_25%","accel_50%","accel_75%","accel_max","displ_count","displ_mean","displ_std","displ_min","displ_25%","displ_50%","displ_75%","displ_max","hp_count","hp_mean","hp_std","hp_min","hp_25%","hp_50%","hp_75%","hp_max","mpg_count","mpg_mean","mpg_std","mpg_min","mpg_25%","mpg_50%","mpg_75%","mpg_max","weight_count","weight_mean","weight_std","weight_min","weight_25%","weight_50%","weight_75%","weight_max","cyl_mfr"],"data":{"accel_25%":{"__ndarray__":"AAAAAACAKkBmZmZmZkYwQAAAAAAAAC1AZmZmZmYmKUDNzMzMzMwuQM3MzMzMzC1AAAAAAADgMEAAAAAAAAAtQDMzMzMz8y1AzczMzMzMLEDMzMzMzEwtQAEAAAAAgC9AAAAAAAAALkAAAAAAACAxQM3MzMzMzDVAZmZmZmamLUAAAAAAAAAtQJqZmZmZmTFAAAAAAADALEAAAAAAAIAyQP//////fy1AAAAAAAAAMEBmZmZmZqYwQAAAAAAAwCtAzMzMzMwsMEDNzMzMzMwtQDMzMzMzMy5AzMzMzMyMLEAAAAAAAAAtQGZmZmZm5jBAmpmZmZkZNEAzMzMzMzMuQM3MzMzMzC5AAAAAAAAALkCamZmZmZkwQDQzMzMzMylAzMzMzMxsMUCamZmZmZkuQDMzMzMzszBAZmZmZmYGMECamZmZmdkrQJqZmZmZmS9AAAAAAACAL0CamZmZmZkuQJqZmZmZGSpAMzMzMzMzLkAAAAAAAMAmQAAAAAAAgCZAmZmZmZnZKkAAAAAAAAAoQMzMzMzMzCdAAAAAAACAKEAAAAAAAMAoQAAAAAAAgDJAAAAAAAAAJ0AAAAAAAAAqQAAAAAAAACdAmpmZmZkZJUA=","dtype":"float64","shape":[58]},"accel_50%":{"__ndarray__":"AAAAAAAAK0DNzMzMzIwxQAAAAAAAAC5AzczMzMxMKUAAAAAAAAAwQM3MzMzMzC1AzczMzMxMMkAAAAAAAAAtQGZmZmZm5jBAAAAAAAAALUAAAAAAAAAvQDMzMzMzczBAmpmZmZkZMEAAAAAAAMAxQM3MzMzMzDVAzczMzMxML0AAAAAAAAAtQJqZmZmZmTFAAAAAAAAALkAAAAAAAIAzQGZmZmZmZi5AMzMzMzMzMEAAAAAAAAAyQDMzMzMzsy1AmpmZmZkZMUBmZmZmZmYwQDMzMzMzMy5AzczMzMzMLkAAAAAAAAAuQGZmZmZm5jFAmpmZmZkZNEAAAAAAAAAwQJqZmZmZmS9AZmZmZmZmMECamZmZmZkwQJqZmZmZmStAMzMzMzMzMkAAAAAAAEAwQDMzMzMzszBAMzMzMzNzMUBmZmZmZuYtQJqZmZmZmS9AAAAAAACAMECamZmZmZkvQAAAAAAAACtAmpmZmZmZMEAAAAAAAIAnQAAAAAAAACpAAAAAAACALUAAAAAAAAAqQDMzMzMzsyhAMzMzMzOzKkBmZmZmZuYqQAAAAAAAgDJAmpmZmZmZKUAAAAAAAAAvQDMzMzMzMypAAAAAAAAAJ0A=","dtype":"float64","shape":[58]},"accel_75%":{"__ndarray__":"AAAAAAAAK0A0MzMzM9MyQJqZmZmZmS9ANDMzMzNzKUAzMzMzMzMwQM3MzMzMzC1AAAAAAACAM0AAAAAAAAAtQDQzMzMzszJAmpmZmZnZL0AAAAAAAEAvQAAAAAAAgDFAAAAAAAAAMUCZmZmZmTkyQM3MzMzMzDVAmpmZmZl5MEAAAAAAAAAtQJqZmZmZmTFAMzMzMzOzL0BmZmZmZiY1QJmZmZmZOTBAAAAAAAAAMkDNzMzMzEwyQGZmZmZmJjBAmpmZmZnZMUCamZmZmRkxQDMzMzMzMy5AAAAAAADgNECamZmZmRkvQGZmZmZm5jJAmpmZmZkZNECamZmZmZkxQGZmZmZmpjBAAAAAAACAMUCamZmZmZkwQM3MzMzMTCxAMzMzMzOzMkA0MzMzM/MxQDMzMzMzszBAZmZmZmbmMkAzMzMzM/MvQJqZmZmZmS9AmpmZmZnZMEAzMzMzM/MwQAAAAAAAAC1AmpmZmZkZMkAzMzMzM7MpQAAAAAAAACxAMzMzMzMTMEAAAAAAAAAsQAAAAAAAQClAZmZmZmZmK0A0MzMzM7MsQAAAAAAAgDJAZmZmZmZmKkAAAAAAAAAzQAAAAAAAwCtAAAAAAACAJ0A=","dtype":"float64","shape":[58]},"accel_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"accel_max":{"__ndarray__":"AAAAAAAAK0CamZmZmRk0QAAAAAAAgDBAmpmZmZmZKUBmZmZmZmYwQM3MzMzMzC1AMzMzMzMzNkAAAAAAAAAtQGZmZmZmZjNAMzMzMzOzMUAAAAAAAIAzQDMzMzMzszRAAAAAAACAMkBmZmZmZmYzQM3MzMzMzDVAzczMzMxMMUAAAAAAAAAtQJqZmZmZmTFAZmZmZmbmMEDNzMzMzMw4QAAAAAAAgDRAAAAAAACAMkCamZmZmZkyQAAAAAAAgDFAAAAAAAAAMkAAAAAAAAA1QDMzMzMzMy5AmpmZmZmZOEBmZmZmZmYvQGZmZmZm5jNAmpmZmZkZNEAAAAAAAAAzQAAAAAAAADVAAAAAAACAMkCamZmZmZkwQAAAAAAAAC1AMzMzMzOzMkAAAAAAAAA1QDMzMzMzszBAAAAAAAAANUAAAAAAAAAxQJqZmZmZmS9AAAAAAAAAM0AzMzMzMzMzQAAAAAAAAC9AmpmZmZmZM0AAAAAAAAAvQM3MzMzMzC1AZmZmZmZmMUDNzMzMzMwuQAAAAAAAACpAZmZmZmZmLkAAAAAAAAAwQAAAAAAAgDJAzczMzMzMLUAzMzMzMzM2QAAAAAAAAC1AAAAAAAAAKEA=","dtype":"float64","shape":[58]},"accel_mean":{"__ndarray__":"AAAAAACAKkDNzMzMzIwxQFK4HoXrUS5AzczMzMxMKUB4d3d3d3cvQM3MzMzMzC1ANDMzMzNTMkAAAAAAAAAtQML1KFyP4jBAvLu7u7u7LUDNzMzMzEwvQJqZmZmZqTBAwA/8wA/8L0AzMzMzM4MxQM3MzMzMzDVAzczMzMxML0AAAAAAAAAtQJqZmZmZmTFAMzMzMzNzLkBf8RVf8RU0QBWuR+F6FC9A4noUrkdhMEDNzMzMzEwxQJqZmZmZWS5AzczMzMzsMECUD+N+XVIwQDMzMzMzMy5AqAR5SpBnMUCamZmZmRkuQGZmZmZm5jFAmpmZmZkZNEA0MzMzMzMwQEId1EEdVDBA0UUXXXTRL0CamZmZmZkwQHh3d3d3dypAzczMzMzsMUDv7u7u7s4wQDMzMzMzszBAmpmZmZl5MUBmZmZmZuYtQJqZmZmZmS9Ah7VvWPuGMEAzMzMzM3MwQLy7u7u7uytAmpmZmZmZMECamZmZmRkoQB7UQR3UQSlAAAAAAACALUDNzMzMzIwpQJqZmZmZWShAzMzMzMzMKUBSuB6F65EqQAAAAAAAgDJAXY/C9ShcKUCamZmZmRkwQKRwPQrXoyhAvuIrvuIrJkA=","dtype":"float64","shape":[58]},"accel_min":{"__ndarray__":"AAAAAAAAKUAAAAAAAAAuQAAAAAAAACxAAAAAAAAAKUCamZmZmZktQM3MzMzMzC1AAAAAAAAAL0AAAAAAAAAtQAAAAAAAAC1AMzMzMzMzJ0AAAAAAAAAsQDMzMzMzMytAmpmZmZmZK0BmZmZmZmYuQM3MzMzMzDVAAAAAAAAALEAAAAAAAAAtQJqZmZmZmTFAAAAAAAAALEAAAAAAAAAxQM3MzMzMzClAZmZmZmZmKkCamZmZmZkuQAAAAAAAACtAAAAAAAAAL0AAAAAAAAArQDMzMzMzMy5AZmZmZmZmKEAAAAAAAAAtQM3MzMzMzC9AmpmZmZkZNEAAAAAAAAAqQM3MzMzMzCpAmpmZmZmZJkCamZmZmZkwQM3MzMzMzCZAmpmZmZmZMEAAAAAAAAAtQDMzMzMzszBAAAAAAAAALEDNzMzMzMwpQJqZmZmZmS9AzczMzMzMLkAAAAAAAAAuQDMzMzMzMylAMzMzMzMzK0AAAAAAAAAhQAAAAAAAACRAMzMzMzMzKEAAAAAAAAAiQAAAAAAAACZAAAAAAAAAJEAAAAAAAAAkQAAAAAAAgDJAAAAAAAAAJkAAAAAAAAAmQAAAAAAAACBAAAAAAAAAI0A=","dtype":"float64","shape":[58]},"accel_std":{"__ndarray__":"AAAAAAAA4D/aBa/CltkMQJhwpa8jBvA/oRT/eiQnyz+s8nEBNKXqPwAAAAAAAPh/ZE+k085YAEAAAAAAAAD4fxI2soXgNfw//oDfulNv+j8yS6+hkwT7P3LUqK5Wo/s/LBFqidl/9j+zHuUrR1b1PwAAAAAAAPh/I16PFOmqAkAAAAAAAAD4fwAAAAAAAPh/062vj8V29D/psnKyNEsFQAtzj2BSAgFAr3RDq2ywAEBLKBJmHCD8P52IbbWHBP0/kpNDBEv+8j8n+uywYNL+PwAAAAAAAPh/iLbDYuyMDkCYZeZ6cH3kP8o7f2aeoAZAAAAAAAAA+H/u8iQBXIX6Pw0qa0PvxgJA/8KED5R4AkAAAAAAAAD4f1194pZpA/o/O9Xd5h0F8D8/TlRadd4AQAAAAAAAAPh/7+ZNqc1hB0DkNg8pbzEHQAAAAAAAAPh/tn2XMctw8T9kZmZmZmb+P3FLR1rzv/c/22zfzHb4EEAKUc4PcYQAQNKepMuXf/0/B/zORzj7DUCir7Qkh376PzMzMzMzM+s/bteC/TsB9z8GTyxx9PT5PwAAAAAAAPh//CUK2GSQ+D+e8zdT+FYQQPu1RsY47wJAIrZ6OpM27z8=","dtype":"float64","shape":[58]},"cyl_mfr":[["3","mazda"],["4","amc"],["4","audi"],["4","bmw"],["4","buick"],["4","capri"],["4","chevrolet"],["4","chrysler"],["4","datsun"],["4","dodge"],["4","fiat"],["4","ford"],["4","honda"],["4","mazda"],["4","mercedes"],["4","mercury"],["4","nissan"],["4","oldsmobile"],["4","opel"],["4","peugeot"],["4","plymouth"],["4","pontiac"],["4","renault"],["4","saab"],["4","subaru"],["4","toyota"],["4","triumph"],["4","volkswagen"],["4","volvo"],["5","audi"],["5","mercedes"],["6","amc"],["6","buick"],["6","chevrolet"],["6","chrysler"],["6","datsun"],["6","dodge"],["6","ford"],["6","mercedes"],["6","mercury"],["6","oldsmobile"],["6","peugeot"],["6","plymouth"],["6","pontiac"],["6","toyota"],["6","volvo"],["8","amc"],["8","buick"],["8","cadillac"],["8","chevrolet"],["8","chrysler"],["8","dodge"],["8","ford"],["8","hi"],["8","mercury"],["8","oldsmobile"],["8","plymouth"],["8","pontiac"]],"displ_25%":{"__ndarray__":"AAAAAACAUUAAAAAAABBgQAAAAAAAgFhAAAAAAABAXkAAAAAAAGBgQAAAAAAAgGFAAAAAAACAWEAAAAAAAIBjQAAAAAAAQFVAAAAAAACAWEAAAAAAAHBVQAAAAAAAYF5AAAAAAADAVkAAAAAAAIBVQAAAAAAAQGJAAAAAAAAAWkAAAAAAAABeQAAAAAAA4GJAAAAAAADQW0AAAAAAAMBcQAAAAAAAQFpAAAAAAACAYUAAAAAAAOBVQAAAAAAAMF1AAAAAAABAWEAAAAAAAEBXQAAAAAAAgF5AAAAAAACAVkAAAAAAAEBeQAAAAAAA4F5AAAAAAADgZkAAAAAAAABtQAAAAAAA4GxAAAAAAAAgbEAAAAAAACBsQAAAAAAAQGJAAAAAAAAgbEAAAAAAAABpQAAAAAAAAGVAAAAAAACYZ0AAAAAAAGhoQAAAAAAAYGRAAAAAAABwakAAAAAAAOBsQAAAAAAAgGNAAAAAAACwYkAAAAAAAABzQAAAAAAA4HVAAAAAAADgdUAAAAAAABBzQAAAAAAAYHhAAAAAAADgc0AAAAAAAOByQAAAAAAAAHNAAAAAAADgckAAAAAAAEBwQAAAAAAA4HNAAAAAAAAAeUA=","dtype":"float64","shape":[58]},"displ_50%":{"__ndarray__":"AAAAAACAUUAAAAAAAABhQAAAAAAAwFpAAAAAAABAXkAAAAAAAOBiQAAAAAAAgGFAAAAAAADgXEAAAAAAAIBjQAAAAAAAIFZAAAAAAABgWUAAAAAAAKBWQAAAAAAAYGBAAAAAAADAVkAAAAAAAMBWQAAAAAAAQGJAAAAAAACAW0AAAAAAAABeQAAAAAAA4GJAAAAAAAAAXUAAAAAAAABeQAAAAAAAQFpAAAAAAADgYkAAAAAAAABYQAAAAAAAQF5AAAAAAABAWEAAAAAAAABbQAAAAAAAgF5AAAAAAABAWEAAAAAAAEBeQAAAAAAAgF9AAAAAAADgZkAAAAAAAABtQAAAAAAA4GxAAAAAAABAb0AAAAAAACBsQAAAAAAAQGJAAAAAAAAgbEAAAAAAACBuQAAAAAAAAGVAAAAAAAAAaUAAAAAAADBrQAAAAAAAYGRAAAAAAAAgbEAAAAAAABBuQAAAAAAAgGNAAAAAAABAY0AAAAAAAABzQAAAAAAA4HVAAAAAAADgdUAAAAAAAOB1QAAAAAAAAHlAAAAAAADgc0AAAAAAAPB1QAAAAAAAAHNAAAAAAADwdUAAAAAAAOB1QAAAAAAA4HNAAAAAAAAAeUA=","dtype":"float64","shape":[58]},"displ_75%":{"__ndarray__":"AAAAAAAgUkAAAAAAAPBhQAAAAAAAgFxAAAAAAABAXkAAAAAAAOBiQAAAAAAAgGFAAAAAAACAYUAAAAAAAIBjQAAAAAAAsFtAAAAAAADgYEAAAAAAABBZQAAAAAAAgGFAAAAAAADAWkAAAAAAAJBYQAAAAAAAQGJAAAAAAAAAXUAAAAAAAABeQAAAAAAA4GJAAAAAAAAAXUAAAAAAAFBgQAAAAAAAeGBAAAAAAADgYkAAAAAAAKBYQAAAAAAAQF5AAAAAAADwWEAAAAAAACBdQAAAAAAAgF5AAAAAAABAWEAAAAAAANBeQAAAAAAAEGBAAAAAAADgZkAAAAAAACBwQAAAAAAA4GxAAAAAAABAb0AAAAAAACBsQAAAAAAAoGNAAAAAAAAgbEAAAAAAAEBvQAAAAAAAAGVAAAAAAACQakAAAAAAAPhtQAAAAAAAYGRAAAAAAAAgbEAAAAAAAEBvQAAAAAAAQGRAAAAAAADQY0AAAAAAAOBzQAAAAAAAKHlAAAAAAADgdUAAAAAAAOB1QAAAAAAAoHlAAAAAAADgc0AAAAAAAPB1QAAAAAAAAHNAAAAAAADQekAAAAAAAOB1QAAAAAAA6HRAAAAAAAAAeUA=","dtype":"float64","shape":[58]},"displ_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"displ_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAOBiQAAAAAAAwFxAAAAAAABAXkAAAAAAAOBiQAAAAAAAgGFAAAAAAADgYkAAAAAAAIBjQAAAAAAAwF1AAAAAAACAY0AAAAAAAABdQAAAAAAAgGFAAAAAAAAAXkAAAAAAAABeQAAAAAAAQGJAAAAAAACAXkAAAAAAAABeQAAAAAAA4GJAAAAAAAAAXUAAAAAAAKBhQAAAAAAAgGNAAAAAAADgYkAAAAAAAEBZQAAAAAAAQF5AAAAAAAAAW0AAAAAAAABiQAAAAAAAgF5AAAAAAABAXkAAAAAAAEBgQAAAAAAAYGBAAAAAAADgZkAAAAAAACBwQAAAAAAA4GxAAAAAAABAb0AAAAAAACBsQAAAAAAAAGVAAAAAAAAgbEAAAAAAAEBvQAAAAAAAAGVAAAAAAABAb0AAAAAAAGBwQAAAAAAAYGRAAAAAAAAgbEAAAAAAAEBvQAAAAAAAAGVAAAAAAABgZEAAAAAAAGB4QAAAAAAAcHxAAAAAAADgdUAAAAAAAGB8QAAAAAAAgHtAAAAAAADwd0AAAAAAANB6QAAAAAAAAHNAAAAAAADQekAAAAAAAOB1QAAAAAAAgHtAAAAAAABwfEA=","dtype":"float64","shape":[58]},"displ_mean":{"__ndarray__":"AAAAAAAgUkAAAAAAAABhQM3MzMzMjFpAAAAAAABAXkBVVVVVVTVhQAAAAAAAgGFAAAAAAAA4XkAAAAAAAIBjQAAAAAAA8FdAq6qqqqoyXUAAAAAAAAhXQAAAAAAAmF9A7MRO7MROWEAAAAAAANhXQAAAAAAAQGJAAAAAAACAW0AAAAAAAABeQAAAAAAA4GJAAAAAAADQW0Dbtm3btq1dQAAAAAAAoFxAAAAAAACgYUAAAAAAAABXQAAAAAAAMF1AAAAAAADwWEAhC1nIQlZaQAAAAAAAgF5Ao4suuujCV0AAAAAAANBeQAAAAAAAgF9AAAAAAADgZkB4eHh4eHhtQLdt27Zt+2tAL7rooovubEAAAAAAACBsQKuqqqqqKmNAAAAAAAAgbEAAAAAAAChsQAAAAAAAAGVAAAAAAAAoaUAAAAAAADBrQAAAAAAAYGRAdNFFF100a0AAAAAAABBuQAAAAAAAAGRAAAAAAABAY0AAAAAAABx0QAAAAAAAwHdAAAAAAADgdUAzMzMzMyt1QAAAAAAAAHlAVVVVVVWNdEAzMzMzMyN1QAAAAAAAAHNAmpmZmZmpdkBu27Zt23ZzQJqZmZmZCXVA27Zt27Z9eUA=","dtype":"float64","shape":[58]},"displ_min":{"__ndarray__":"AAAAAACAUUAAAAAAAEBeQAAAAAAAQFhAAAAAAABAXkAAAAAAAMBbQAAAAAAAgGFAAAAAAABAVUAAAAAAAIBjQAAAAAAAAFJAAAAAAACAVkAAAAAAAABRQAAAAAAAgFhAAAAAAABAVEAAAAAAAIBTQAAAAAAAQGJAAAAAAACAWEAAAAAAAABeQAAAAAAA4GJAAAAAAABAWEAAAAAAAMBTQAAAAAAAgFVAAAAAAAAAXEAAAAAAAMBTQAAAAAAAAFpAAAAAAABAWEAAAAAAAMBRQAAAAAAAgF5AAAAAAADAU0AAAAAAAEBeQAAAAAAAQF5AAAAAAADgZkAAAAAAAOBoQAAAAAAAoGZAAAAAAACgZUAAAAAAACBsQAAAAAAAQGJAAAAAAAAgbEAAAAAAAGBlQAAAAAAAAGVAAAAAAABgY0AAAAAAAKBlQAAAAAAAYGRAAAAAAADAaEAAAAAAAOBsQAAAAAAAgGNAAAAAAAAgYkAAAAAAAABzQAAAAAAA4HVAAAAAAADgdUAAAAAAAGBwQAAAAAAAgHZAAAAAAADgc0AAAAAAAOByQAAAAAAAAHNAAAAAAADgckAAAAAAAEBwQAAAAAAA4HNAAAAAAAAAeUA=","dtype":"float64","shape":[58]},"displ_std":{"__ndarray__":"AAAAAAAAFEAQSBeAlDY1QND+0iqIDSFAAAAAAAAAAADkP/QWERg3QAAAAAAAAPh/+dfIUHQBNkAAAAAAAAD4f/nXYs/oXy9AxlMEvhOzOECcmejwqUMuQEJ62kW6XTBA7/H89MrVJEDxy9ekg5ovQAAAAAAAAPh/2WzfzHb4MEAAAAAAAAD4fwAAAAAAAPh/AAAAAAAAI0Aa/8QMgwU1QMkv4IyP+DVA6BO8GJHlMEAyXl4LrBAnQAAAAAAAACFAAAAAAAAAFkADTF/qck41QAAAAAAAAPh/ueUP92yCIEAAAAAAAAASQMAKHwDGSBxAAAAAAAAA+H8NBy84wzoyQKw5M/zx5TJAhDQMOmhCQEAAAAAAAAD4f0ZGpv9FZylAAAAAAAAAAABMLSA/PfE8QAAAAAAAAPh/0EggZLxnQ0Ao74hGXHdPQAAAAAAAAPh/pawegC45KUCxPJuidvAlQKpMWOh6thtARiNPM7J0KUBdkHKATOpAQOzL2mkMnklAAAAAAAAAAADTDvECpxJIQKebB2Z2VEBAVjCdeBxNOUBJmiRDcqJDQAAAAAAAAPh/5Oc7bEXqT0DbMo/ysg1IQOdiu+j4fENAC1k4Yr3JNEA=","dtype":"float64","shape":[58]},"hp_25%":{"__ndarray__":"AAAAAADQV0AAAAAAAKBUQAAAAAAAwFRAAAAAAACwW0AAAAAAAIBUQAAAAAAAAFdAAAAAAABgUUAAAAAAAABXQAAAAAAAoFBAAAAAAADwU0AAAAAAACBRQAAAAAAAUFNAAAAAAAAATkAAAAAAAEBQQAAAAAAAwFBAAAAAAACAUkAAAAAAAABWQAAAAAAAQFVAAAAAAABQU0AAAAAAAOBSQAAAAAAAYFBAAAAAAABAVUAAAAAAAMBPQAAAAAAAkFpAAAAAAADAUEAAAAAAAOBQQAAAAAAAAFZAAAAAAABASkAAAAAAAEBZQAAAAAAAAFNAAAAAAABAU0AAAAAAAIBWQAAAAAAA4FpAAAAAAAAAWUAAAAAAAEBVQAAAAAAAIFtAAAAAAABgWEAAAAAAAABVQAAAAAAAAF5AAAAAAABwVEAAAAAAACBXQAAAAAAAoGBAAAAAAADAV0AAAAAAAPBZQAAAAAAAAFxAAAAAAAAQVkAAAAAAAMBiQAAAAAAAYGNAAAAAAABYYUAAAAAAADBhQAAAAAAAgGZAAAAAAAD4YUAAAAAAAHhhQAAAAAAAIGhAAAAAAABAYUAAAAAAAOBaQAAAAAAAwGJAAAAAAADgZUA=","dtype":"float64","shape":[58]},"hp_50%":{"__ndarray__":"AAAAAACgWEAAAAAAAEBVQAAAAAAAgFZAAAAAAADgW0AAAAAAAABVQAAAAAAAAFdAAAAAAACgU0AAAAAAAABXQAAAAAAAgFFAAAAAAABgVEAAAAAAAMBSQAAAAAAAYFVAAAAAAADAUEAAAAAAAABRQAAAAAAAwFBAAAAAAACAU0AAAAAAAABWQAAAAAAAQFVAAAAAAADgU0AAAAAAAMBVQAAAAAAAgFFAAAAAAAAAVkAAAAAAAEBRQAAAAAAAIFxAAAAAAADAUEAAAAAAAMBSQAAAAAAAAFZAAAAAAACAUUAAAAAAAMBaQAAAAAAAQFVAAAAAAABAU0AAAAAAAABZQAAAAAAAgFtAAAAAAABAWkAAAAAAAEBVQAAAAAAAAF5AAAAAAABAWkAAAAAAAABWQAAAAAAAAF5AAAAAAABAVUAAAAAAAABZQAAAAAAAoGBAAAAAAAAAWUAAAAAAAOBaQAAAAAAAAF1AAAAAAAAgWUAAAAAAAMBiQAAAAAAAoGRAAAAAAAAQY0AAAAAAACBiQAAAAAAAwGdAAAAAAADAYkAAAAAAACBiQAAAAAAAIGhAAAAAAABgYUAAAAAAAIBbQAAAAAAAwGJAAAAAAADgZUA=","dtype":"float64","shape":[58]},"hp_75%":{"__ndarray__":"AAAAAACgWUAAAAAAAOBVQAAAAAAAwFZAAAAAAAAQXEAAAAAAAMBVQAAAAAAAAFdAAAAAAAAgVkAAAAAAAABXQAAAAAAAIFdAAAAAAAAAVUAAAAAAAKBTQAAAAAAAAFZAAAAAAAAAUkAAAAAAAGBRQAAAAAAAwFBAAAAAAACAVEAAAAAAAABWQAAAAAAAQFVAAAAAAADQVEAAAAAAAOBVQAAAAAAAAFVAAAAAAACAVkAAAAAAAABTQAAAAAAAwFxAAAAAAABgUkAAAAAAAMBXQAAAAAAAAFZAAAAAAABQUkAAAAAAAABcQAAAAAAAgFdAAAAAAABAU0AAAAAAAABZQAAAAAAAgFtAAAAAAADgWkAAAAAAAEBVQAAAAAAAgF9AAAAAAACAW0AAAAAAAJBWQAAAAAAAAF5AAAAAAACgVkAAAAAAAOBaQAAAAAAAoGBAAAAAAACgWUAAAAAAANBbQAAAAAAAwF1AAAAAAAAwXEAAAAAAAIhjQAAAAAAAAGlAAAAAAADIZEAAAAAAADhjQAAAAAAAiGhAAAAAAABgY0AAAAAAAEhjQAAAAAAAIGhAAAAAAADAaEAAAAAAAEBlQAAAAAAAsGNAAAAAAABQaUA=","dtype":"float64","shape":[58]},"hp_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"hp_max":{"__ndarray__":"AAAAAACAW0AAAAAAAIBWQAAAAAAAwFdAAAAAAABAXEAAAAAAAIBWQAAAAAAAAFdAAAAAAACAVkAAAAAAAABXQAAAAAAAAFlAAAAAAABAWkAAAAAAAIBWQAAAAAAAAFdAAAAAAABAWEAAAAAAAMBSQAAAAAAAwFBAAAAAAACAVUAAAAAAAABWQAAAAAAAQFVAAAAAAACAVkAAAAAAAABWQAAAAAAAQFpAAAAAAACAVkAAAAAAAMBUQAAAAAAAwFxAAAAAAABAV0AAAAAAAEBYQAAAAAAAAFZAAAAAAACAU0AAAAAAAABcQAAAAAAAwFlAAAAAAABAU0AAAAAAAABeQAAAAAAAoGRAAAAAAADAXEAAAAAAAEBVQAAAAAAAgGBAAAAAAACAW0AAAAAAAABcQAAAAAAAAF5AAAAAAADAWkAAAAAAAMBcQAAAAAAAoGBAAAAAAABAWkAAAAAAAMBcQAAAAAAAgF5AAAAAAABAX0AAAAAAAMBnQAAAAAAAIGxAAAAAAACAZkAAAAAAAIBrQAAAAAAA4GpAAAAAAABAakAAAAAAAOBqQAAAAAAAIGhAAAAAAAAAakAAAAAAAIBmQAAAAAAA4GpAAAAAAADAbEA=","dtype":"float64","shape":[58]},"hp_mean":{"__ndarray__":"AAAAAADQWEAAAAAAAEBVQJqZmZmZ2VVAAAAAAADgW0CrqqqqqipVQAAAAAAAAFdAAAAAAABYU0AAAAAAAABXQM3MzMzMvFNAq6qqqqraVEAAAAAAAFhSQAAAAAAASFRAYid2Yif2UEAAAAAAALhQQAAAAAAAwFBAAAAAAACAU0AAAAAAAABWQAAAAAAAQFVAAAAAAABAVEBJkiRJkmRUQJqZmZmZOVNAzczMzMyMVUAAAAAAAIBRQAAAAAAAMFtAAAAAAABgUkDTm970pvdTQAAAAAAAAFZA6aKLLroIUEAAAAAAAIBaQAAAAAAAQFVAAAAAAABAU0Di4eHh4eFYQLdt27ZtG11ARhdddNEFWkAAAAAAAEBVQFVVVVVVFV1AAAAAAACgWUBVVVVVVRVWQAAAAAAAAF5AAAAAAADQVUAAAAAAAABZQAAAAAAAoGBARhdddNHFWEAAAAAAAOBaQFVVVVVV1VxAAAAAAAAgWUAAAAAAAExjQCVJkiRJUmZAAAAAAAAQY0AAAAAAAMhiQAAAAAAASGdAq6qqqqp6Y0BmZmZmZu5iQAAAAAAAIGhAMzMzMzNTZEAlSZIkSbJgQAAAAAAA8GNAAAAAAADAZ0A=","dtype":"float64","shape":[58]},"hp_min":{"__ndarray__":"AAAAAACAVkAAAAAAAABUQAAAAAAAgFNAAAAAAACAW0AAAAAAAABUQAAAAAAAAFdAAAAAAAAASkAAAAAAAABXQAAAAAAAgE5AAAAAAADAUkAAAAAAAIBIQAAAAAAAQFBAAAAAAACASkAAAAAAAABKQAAAAAAAwFBAAAAAAACAUUAAAAAAAABWQAAAAAAAQFVAAAAAAADAUkAAAAAAAIBRQAAAAAAAgE9AAAAAAACAU0AAAAAAAABNQAAAAAAAwFdAAAAAAADAUEAAAAAAAABKQAAAAAAAAFZAAAAAAAAAR0AAAAAAAIBYQAAAAAAAwFBAAAAAAABAU0AAAAAAAIBWQAAAAAAAQFpAAAAAAADAV0AAAAAAAEBVQAAAAAAAQFhAAAAAAACAVkAAAAAAAABSQAAAAAAAAF5AAAAAAAAAUkAAAAAAAEBVQAAAAAAAoGBAAAAAAADAV0AAAAAAAABZQAAAAAAAAFtAAAAAAAAAU0AAAAAAAABeQAAAAAAAwGJAAAAAAABAX0AAAAAAAIBbQAAAAAAAwGJAAAAAAADgYEAAAAAAACBgQAAAAAAAIGhAAAAAAABAYEAAAAAAAIBWQAAAAAAAwGJAAAAAAABAZUA=","dtype":"float64","shape":[58]},"hp_std":{"__ndarray__":"sTIWI2yaIEDACh8AxkgcQM2mvFe3NxtA2WzfzHb4AEA9iuQyBSIUQAAAAAAAAPh/LxLx8lwQKUAAAAAAAAD4f7sBlQW4kSxAKyfK5qleIEDIXtM5uhcpQCLax4ZuQSJAmb4/3QmgJkAEGqqKID0cQAAAAAAAAPh/zTt/Zp6gJkAAAAAAAAD4fwAAAAAAAPh/ZBImSkfsGUBYoQIYXR4gQPI+Tscsci1AOwacb3AUFEDkEORzVw8pQDylNHUA7iJAAAAAAAAAKkC/1T6E9ZotQAAAAAAAAPh/ReIBRJI+J0B4fOOq4ngcQEYjTzOydDlAAAAAAAAA+H8OCGcakIkhQDvrojUbjDVAAFRCNN9aF0AAAAAAAAD4f1p+aLQnyTFAyFjS2wYmI0BLVjPp6rMkQAAAAAAAAPh/C73Aw8ILLUAQSBeAlDY1QAAAAAAAAPh/Jna3ky16EUC1wWw+5NEZQIGe5vFWGBxAyWl5RvlSQUB34pp5zZo0QKdc+kkcYEBAZFcVIAhyQ0DmC02WHw05QOlioZ4Z4zpAMoQKyAEyNUDLHEDTpyA2QAAAAAAAAPh/0QbwVkCbQkA+baHJ9i9DQEApF6jZmzRAtcFsPuTROUA=","dtype":"float64","shape":[58]},"mpg_25%":{"__ndarray__":"AAAAAADAMkA0MzMzMxM5QAAAAAAAADdAAAAAAACgNkAAAAAAAIA7QAAAAAAAADlAAAAAAADgOEAAAAAAAAA6QGZmZmZmJjtAzMzMzMxsO0AAAAAAAAA6QDMzMzMz0zZAAAAAAAAAQEBnZmZmZoY/QAAAAAAAAD5AAAAAAABAOkAAAAAAAABCQM3MzMzMzDdAAAAAAADAOEAAAAAAAAA2QM3MzMzMTDpAAAAAAACAOEAAAAAAAIA6QGZmZmZmZjdAAAAAAAAAPUAAAAAAAIA4QAAAAAAAgEFAAAAAAABAOkAAAAAAAMAyQDQzMzMzUzhAZmZmZmZmOUAAAAAAAAAyQJqZmZmZGTNAAAAAAAAAMECamZmZmZkxQJqZmZmZGTdAmpmZmZn5MkAAAAAAAAAyQAAAAAAAgDBAmpmZmZmZMkCamZmZmZk9QDMzMzMzMzBAAAAAAAAAMkAAAAAAAOAyQAAAAAAAgDNAzczMzMxsNEAAAAAAAAAsQAAAAAAAACpAAAAAAAAgMkAAAAAAAAAqQAAAAAAAACpAAAAAAACAK0AAAAAAAAAqQAAAAAAAACJAAAAAAAAAKEAAAAAAAAAoQAAAAAAAACxAAAAAAAAALEA=","dtype":"float64","shape":[58]},"mpg_50%":{"__ndarray__":"AAAAAABANECamZmZmdk5QAAAAAAAADhAAAAAAADAN0BmZmZmZmY8QAAAAAAAADlAAAAAAAAAPEAAAAAAAAA6QAAAAAAAAEBAAAAAAACAPEAAAAAAAIA8QAAAAAAAwDlAAAAAAACAQECamZmZmblAQAAAAAAAAD5AAAAAAACAPUAAAAAAAABCQM3MzMzMzDdAAAAAAACAOUAAAAAAAAA5QM3MzMzMDEBAAAAAAAAAO0AAAAAAAAA7QAAAAAAAgDhAZmZmZmYmP0AAAAAAAAA9QAAAAAAAgEFAZmZmZmamPUAAAAAAAIAzQJqZmZmZWTxAZmZmZmZmOUCamZmZmRkyQJqZmZmZmTRAAAAAAACAMUCamZmZmZkxQDMzMzMzMzhAzczMzMyMM0AAAAAAAMAyQAAAAAAAgDBAzczMzMxMNEAzMzMzMzNAQDMzMzMzMzBAAAAAAAAAM0CamZmZmRkzQAAAAAAAADRAmpmZmZnZN0AAAAAAAAAuQAAAAAAAACpAAAAAAADAM0AAAAAAAAAuQAAAAAAAgCxAAAAAAAAALkAAAAAAAAAsQAAAAAAAACJAAAAAAAAALkAAAAAAAAAxQAAAAAAAACxAAAAAAAAALEA=","dtype":"float64","shape":[58]},"mpg_75%":{"__ndarray__":"zczMzMwMNkD//////586QAAAAAAAAD1AAAAAAADgOEAzMzMzMzM9QAAAAAAAADlAAAAAAAAgPkAAAAAAAAA6QAAAAAAAgEJAAAAAAAAwQEAAAAAAAEA+QAAAAAAAQDtAAAAAAAAAQkCamZmZmWlBQAAAAAAAAD5AAAAAAABgQEAAAAAAAABCQM3MzMzMzDdAAAAAAACAOkBmZmZmZqY7QDQzMzMzU0FAAAAAAAAAP0AAAAAAAIA/QAAAAAAAADlAZmZmZmZWQEDNzMzMzAxAQAAAAAAAgEFAAAAAAACgQUAAAAAAAIA0QAAAAAAAMEBAZmZmZmZmOUBmZmZmZmYzQDMzMzMzszVAAAAAAABANUCamZmZmZkxQDQzMzMzczxAZmZmZmYmNEBmZmZmZmY0QAAAAAAAgDBAmpmZmZnZNECamZmZmZlBQDMzMzMzMzBAAAAAAABANUBmZmZmZsYzQDMzMzMzszZAZmZmZmZGO0AAAAAAAEAvQAAAAAAAAC1AAAAAAABgNUAAAAAAAIAxQAAAAAAAQDBAAAAAAABgMEAAAAAAAEAvQAAAAAAAACJAAAAAAACAMEBmZmZmZuY1QAAAAAAAgC1AAAAAAAAAMEA=","dtype":"float64","shape":[58]},"mpg_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"mpg_max":{"__ndarray__":"MzMzMzOzN0BmZmZmZmY7QGZmZmZmJkFAAAAAAAAAOkAAAAAAAAA+QAAAAAAAADlAAAAAAAAAQUAAAAAAAAA6QGZmZmZmZkRAAAAAAAAAQkBmZmZmZqZCQM3MzMzMDEJAzczMzMxMRkDNzMzMzExHQAAAAAAAAD5AAAAAAAAAQkAAAAAAAABCQM3MzMzMzDdAAAAAAAAAPEAAAAAAAAA+QAAAAAAAgENAAAAAAADAQEAAAAAAAABCQAAAAAAAADlAZmZmZmbmQEDNzMzMzIxDQAAAAAAAgEFAZmZmZmYmRkAAAAAAAAA2QDMzMzMzM0JAZmZmZmZmOUAAAAAAAIA2QAAAAAAAADlAzczMzMzMPECamZmZmZkxQJqZmZmZWUBAmpmZmZmZNEAAAAAAAAA4QAAAAAAAgDBAAAAAAAAANUAAAAAAAABDQDMzMzMzMzBAAAAAAAAAN0AAAAAAAIA1QGZmZmZmZjlAMzMzMzOzPkAAAAAAAAAxQGZmZmZm5jBAAAAAAAAAN0AAAAAAAAA0QAAAAAAAgDJAZmZmZmZmM0CamZmZmRkyQAAAAAAAACJAMzMzMzMzNECamZmZmZk6QAAAAAAAADJAAAAAAAAAMEA=","dtype":"float64","shape":[58]},"mpg_mean":{"__ndarray__":"zczMzMyMNECamZmZmdk5QJDC9ShcDzpAAAAAAADAN0BVVVVVVVU8QAAAAAAAADlAmpmZmZlRO0AAAAAAAAA6QPUoXI/C1T9AERERERHRPUCamZmZmek8QDMzMzMzAzpAGHqhF3rhQEAAAAAAAGhBQAAAAAAAAD5AAAAAAACAPUAAAAAAAABCQM3MzMzMzDdAAAAAAADAOUAd1EEd1ME4QHsUrkfhOj9AzczMzMzMO0Crqqqqqqo9QGZmZmZm5jdAZmZmZmaGPkBoq8FzBAo9QAAAAAAAgEFAFl100UXXP0AAAAAAAMAzQJqZmZmZWTxAZmZmZmZmOUAhISEhIaEyQJmZmZmZmTRAnxLkKUEeM0CamZmZmZkxQM3MzMzMTDpANDMzMzOTM0AzMzMzM1MzQAAAAAAAgDBAZmZmZmYmM0AzMzMzMzNAQDMzMzMzMzBAF1100UWXM0DNzMzMzIwzQHh3d3d3dzVAmpmZmZnZN0AAAAAAAOAtQPmKr/iKrytAAAAAAADAM0AK16NwPUouQAAAAAAAAC5ARERERERELkDrUbgehassQAAAAAAAACJA4noUrkfhLUDGV3zFV3wxQAAAAAAAAC1A27Zt27ZtLUA=","dtype":"float64","shape":[58]},"mpg_min":{"__ndarray__":"AAAAAAAAMkDNzMzMzEw4QAAAAAAAADRAAAAAAACANUCamZmZmZk6QAAAAAAAADlAAAAAAAAANEAAAAAAAAA6QAAAAAAAADZAAAAAAAAAOUAAAAAAAAA4QAAAAAAAADNAAAAAAAAAOEAAAAAAAAA/QAAAAAAAAD5AAAAAAAAAN0AAAAAAAABCQM3MzMzMzDdAAAAAAAAAOEAAAAAAAAAzQDMzMzMzMzdAAAAAAAAAN0AAAAAAAAA6QJqZmZmZmTVAAAAAAAAAOkAAAAAAAAA0QAAAAAAAgEFAAAAAAAAANkAAAAAAAAAyQM3MzMzMTDRAZmZmZmZmOUAAAAAAAAAuQAAAAAAAADFAAAAAAAAALkCamZmZmZkxQAAAAAAAADZAmpmZmZmZMkAAAAAAAAAuQAAAAAAAgDBAAAAAAAAALkDNzMzMzMw6QDMzMzMzMzBAAAAAAAAAMEAAAAAAAIAyQAAAAAAAADNAAAAAAAAAMUAAAAAAAAAqQAAAAAAAAChAAAAAAACAMEAAAAAAAAAkQAAAAAAAACpAAAAAAAAAJkAAAAAAAAAkQAAAAAAAACJAAAAAAAAAJkAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[58]},"mpg_std":{"__ndarray__":"ca9eOxmEBEDuZ2+PR4kBQEoKBd4JhxZARiNPM7J0CUBFpF/rNjf7PwAAAAAAAPh/ubWdO9DbD0AAAAAAAAD4f2F5uw9NCBZAPs/+nwk+DkBlzHIpO2kQQDLD7CMzNhJAcb+tQ7cOE0Afg1pvTZ4UQAAAAAAAAPh/lmBHs4BiIkAAAAAAAAD4fwAAAAAAAPh/DGLpcEBT+z8dTFSH0NYPQHeSF+RxURZAtk+agoaVEUDKBtSSwAcWQCpmF/6kqvk/z+0aa+0tC0CORJ/7lD4VQAAAAAAAAPh/M1/gQ+RmHEAMYulwQFP7P5I6I5fSxCZAAAAAAAAA+H9x2LOz9Cn8PzIJf4/TsgVAkwuaddjbEEAAAAAAAAD4f9z6Q5RHmhZAr6hmWJaq7D8UE9sdnakCQAAAAAAAAPh/a1a8aTiHBkBR7X6Pqq0fQAAAAAAAAPh/g9Y0vSoMAUAptL5boFP1Py2Bit39igtAAVjDB+5fI0CVfHAmaUH0P1zHVUIgUvo/lmBHs4BiEkAPM5pJpl8GQNiUMqma6QRAGf4MvyO6A0D19nIPF17/PwAAAAAAAPh/8szklsJ3DUCH39aAveYYQC+gIkHPJfg/TDtjlJsO9D8=","dtype":"float64","shape":[58]},"weight_25%":{"__ndarray__":"AAAAAADNoUAAAAAAgIKlQAAAAAAAVqFAAAAAAAArokAAAAAAALaiQAAAAAAAGKRAAAAAAIDjoEAAAAAAADKkQAAAAAAAJ59AAAAAAICboEAAAAAAgAGgQAAAAAAAdaJAAAAAAAAgnEAAAAAAAPqeQAAAAAAAZKlAAAAAAIDJoEAAAAAAAOCgQAAAAAAATqZAAAAAAIDKoEAAAAAAAP2lQAAAAACApqBAAAAAAAAepEAAAAAAAFyfQAAAAACAOaRAAAAAAAD0n0AAAAAAADagQAAAAAAAiKNAAAAAAABEnkAAAAAAgMmmQAAAAAAAWKZAAAAAAACUq0AAAAAAAKqmQAAAAAAAE6lAAAAAAAAhqUAAAAAAABKrQAAAAAAAXaZAAAAAAIBfqkAAAAAAgEanQAAAAAAA2K1AAAAAAABZpkAAAAAAgLWlQAAAAAAApKpAAAAAAABPqEAAAAAAgJGpQAAAAAAAS6ZAAAAAAACSqEAAAAAAALCsQAAAAAAAca5AAAAAAABor0AAAAAAgNitQAAAAADAhLBAAAAAAABMrUAAAAAAAD6vQAAAAAAAfLJAAAAAAADmrkAAAAAAAKyrQAAAAACADK9AAAAAAIDrsEA=","dtype":"float64","shape":[58]},"weight_50%":{"__ndarray__":"AAAAAACOokAAAAAAACmmQAAAAAAA/KJAAAAAAADiokAAAAAAAJakQAAAAAAAGKRAAAAAAADJokAAAAAAADKkQAAAAAAAVKBAAAAAAACFoUAAAAAAAI6gQAAAAAAARqRAAAAAAAC0nkAAAAAAAFSfQAAAAAAAZKlAAAAAAAD5oEAAAAAAAOCgQAAAAAAATqZAAAAAAAAaoUAAAAAAAEanQAAAAAAAP6FAAAAAAABApEAAAAAAABqhQAAAAAAA06RAAAAAAAByoEAAAAAAALKhQAAAAAAAiKNAAAAAAAD6nkAAAAAAAPamQAAAAAAAlKZAAAAAAACUq0AAAAAAABqoQAAAAAAArqpAAAAAAAAQqkAAAAAAABKrQAAAAAAAvKZAAAAAAABZq0AAAAAAAMGnQAAAAAAA2K1AAAAAAACsp0AAAAAAAFOmQAAAAAAApKpAAAAAAACAqUAAAAAAAKGqQAAAAAAAqKZAAAAAAACcqEAAAAAAAPetQAAAAAAACLFAAAAAAAAssEAAAAAAAPSvQAAAAACAFbFAAAAAAADmrkAAAAAAgFiwQAAAAAAAfLJAAAAAAADHsEAAAAAAABqtQAAAAACAE7BAAAAAAABJsUA=","dtype":"float64","shape":[58]},"weight_75%":{"__ndarray__":"AAAAAAB+o0AAAAAAgM+mQAAAAAAALKRAAAAAAACZo0AAAAAAALmkQAAAAAAAGKRAAAAAAIBrpEAAAAAAADKkQAAAAACAH6JAAAAAAIDRokAAAAAAgJWhQAAAAACAl6VAAAAAAAA6oUAAAAAAAFShQAAAAAAAZKlAAAAAAIAooUAAAAAAAOCgQAAAAAAATqZAAAAAAACAoUAAAAAAABSpQAAAAACAd6JAAAAAAABepUAAAAAAACehQAAAAAAAHKVAAAAAAAA9oUAAAAAAAA6jQAAAAAAAiKNAAAAAAAAFoUAAAAAAgGinQAAAAAAA0KZAAAAAAACUq0AAAAAAAIKpQAAAAAAA1qpAAAAAAABDq0AAAAAAABKrQAAAAAAA0KZAAAAAAIBXrEAAAAAAAPSoQAAAAAAA2K1AAAAAAACxqEAAAAAAgPCmQAAAAAAApKpAAAAAAACMq0AAAAAAANWrQAAAAAAAxqZAAAAAAACmqEAAAAAAAIuuQAAAAACA+LFAAAAAAACksEAAAAAAAMawQAAAAABAlLFAAAAAAACOsEAAAAAAAEqxQAAAAAAAfLJAAAAAAAAZskAAAAAAAKKwQAAAAABAxbBAAAAAAADWsUA=","dtype":"float64","shape":[58]},"weight_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"weight_max":{"__ndarray__":"AAAAAABApUAAAAAAAHanQAAAAAAADKVAAAAAAABQpEAAAAAAANykQAAAAAAAGKRAAAAAAAAMp0AAAAAAADKkQAAAAAAAbqRAAAAAAADgpUAAAAAAAECjQAAAAAAAlKZAAAAAAAByo0AAAAAAAJakQAAAAAAAZKlAAAAAAABYoUAAAAAAAOCgQAAAAAAATqZAAAAAAAD4oUAAAAAAAIypQAAAAAAAcqVAAAAAAABopUAAAAAAADShQAAAAAAA1qVAAAAAAACuokAAAAAAAC6lQAAAAAAAiKNAAAAAAACeo0AAAAAAAJyoQAAAAAAADKdAAAAAAACUq0AAAAAAACStQAAAAAAAhq5AAAAAAAByrkAAAAAAABKrQAAAAAAA5KZAAAAAAACGrEAAAAAAAOyrQAAAAAAA2K1AAAAAAADQqkAAAAAAAI6nQAAAAAAApKpAAAAAAACSrUAAAAAAAHqsQAAAAAAA5KZAAAAAAACwqEAAAAAAAKGwQAAAAAAAV7NAAAAAAAAcsUAAAAAAAIWzQAAAAAAAf7JAAAAAAABbs0AAAAAAACqzQAAAAAAAfLJAAAAAAABYs0AAAAAAAJOxQAAAAAAALrJAAAAAAAAUtEA=","dtype":"float64","shape":[58]},"weight_mean":{"__ndarray__":"AAAAAAC9okAAAAAAACmmQDMzMzMz7aJAAAAAAADiokBVVVVVVW2jQAAAAAAAGKRAAAAAAADRokAAAAAAADKkQJqZmZmZw6BAVVVVVVXnoUAAAAAAQL6gQAAAAADAsKNA2Ymd2Imdn0AAAAAAwNKgQAAAAAAAZKlAAAAAAAD5oEAAAAAAAOCgQAAAAAAATqZAAAAAAIAwoUBJkiRJkrymQAAAAAAAiKFAMzMzMzOfpEAAAAAAADCgQAAAAACAgqRAAAAAAADFoECykIUsZHWhQAAAAAAAiKNAF1100UX3n0AAAAAAADynQAAAAAAAlKZAAAAAAACUq0AtLS0tLSuoQCVJkiRJSqpAF1100UXfqUAAAAAAABKrQAAAAAAAiqZAAAAAAABeq0CrqqqqqjGoQAAAAAAA2K1AAAAAAABep0AAAAAAAFOmQAAAAAAApKpARhdddNHRqUAAAAAAgMWqQAAAAAAAfqZAAAAAAACcqEAAAAAAwNetQNu2bdu2ZrBAAAAAAAAssEDNzMzMTJ+vQAAAAACAA7FAVVVVVdVrr0BmZmZmZjiwQAAAAAAAfLJAAAAAAAC5sEAlSZIkSViuQGZmZmZmA7BAt23btm2fsUA=","dtype":"float64","shape":[58]},"weight_min":{"__ndarray__":"AAAAAACYoEAAAAAAANykQAAAAAAAGKFAAAAAAAB0oUAAAAAAANagQAAAAAAAGKRAAAAAAADMn0AAAAAAADKkQAAAAAAANJlAAAAAAADsnUAAAAAAACydQAAAAAAAIJxAAAAAAACAm0AAAAAAAMieQAAAAAAAZKlAAAAAAACaoEAAAAAAAOCgQAAAAAAATqZAAAAAAACWoEAAAAAAADSgQAAAAAAATJ1AAAAAAAD4o0AAAAAAAIScQAAAAAAAjqJAAAAAAAAEn0AAAAAAAMSZQAAAAAAAiKNAAAAAAACEnEAAAAAAAGimQAAAAAAAHKZAAAAAAACUq0AAAAAAAJSkQAAAAAAAAqdAAAAAAABGpEAAAAAAABKrQAAAAAAA/qVAAAAAAABAqkAAAAAAADakQAAAAAAA2K1AAAAAAABQo0AAAAAAABilQAAAAAAApKpAAAAAAAAipkAAAAAAAFqpQAAAAAAA7qVAAAAAAACIqEAAAAAAANKqQAAAAAAAHKhAAAAAAAB4rkAAAAAAACqpQAAAAAAAyK5AAAAAAACOqkAAAAAAAMKoQAAAAAAAfLJAAAAAAADkq0AAAAAAAEqqQAAAAAAA2KpAAAAAAAB8sEA=","dtype":"float64","shape":[58]},"weight_std":{"__ndarray__":"udhs7B3ybkDJgFML7m5tQHQOAgl5pGtAv/NEO9EscECVL0zdOvxxQAAAAAAAAPh/wW0nP4+ucEAAAAAAAAD4f4r/RC1ucG5A26bUH9Bbb0DEkgnxpclmQAu85vvhr3NAil6Fh86ebEAB/frlgRdxQAAAAAAAAPh/Ym4SkDXLUEAAAAAAAAD4fwAAAAAAAPh/hHa7rCxqU0BUF7ym5216QOLeK9lru29Aonh3zZCSVkAlPmxrOcBqQMUzbKCqNmZA0OtrWjrzZUD+ciC3ut5yQAAAAAAAAPh/lJBdHgunZkBfQzaGKodeQBBIF4CUNlVAAAAAAAAA+H8Se53iBNhzQIXSN0vAlXNAusp/48JReEAAAAAAAAD4fzG8WqBzuE5A2ZIlQU44Y0BgQC8tFi9xQAAAAAAAAPh/cuB7YIy9eECVjh7ootdrQAAAAAAAAPh/FPo7/E0Pc0D4jA+ZxktoQK9EMr99CFBAwAofAMZILEBrziyk/kduQPlKCOFf64NAEEgXgJQ2dUCHC8hBP/B5QLvciQn9eXRA2zl5n4Y0e0B/cf0JJxl+QAAAAAAAAPh/adjqBGYEgUBsLGuRdgh9QAyvRS0PL3dAzax/B+OCc0A=","dtype":"float64","shape":[58]}}},"id":"b6346462-b665-4d40-8997-6d54cd49f8d8","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Mean MPG by # Cylinders and Manufacturer"},"id":"2c67c0d1-9e34-4df5-82b2-207515daefaf","type":"Title"},{"attributes":{"source":{"id":"b6346462-b665-4d40-8997-6d54cd49f8d8","type":"ColumnDataSource"}},"id":"b81820e5-7a78-4670-9bb4-a6511b8422ba","type":"CDSView"},{"attributes":{},"id":"05e70de6-4a17-49be-8a6b-ebe624fabf99","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"edc8e6b5-625a-449c-a61e-9650b65890bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b237dafe-6e24-4193-a598-ebf2d9ab0778","type":"CategoricalTicker"}},"id":"4d68d0b4-d796-44ff-b987-97cc33934a5f","type":"Grid"},{"attributes":{},"id":"5359d812-01ac-42a0-abbe-674d8029561e","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8b22f8b-a72d-42ae-b4ba-a0ab8d5312e6","type":"HoverTool"}]},"id":"48643630-7f38-456b-b8d8-16bdb65e8b5a","type":"Toolbar"},{"attributes":{"end":1,"factors":["3","4","5","6","8"],"palette":["#2b83ba","#abdda4","#ffffbf","#fdae61","#d7191c"]},"id":"09229359-a014-4bb2-9eba-07f9d834650a","type":"CategoricalColorMapper"},{"attributes":{"axis_label":"Manufacturer grouped by # Cylinders","formatter":{"id":"5359d812-01ac-42a0-abbe-674d8029561e","type":"CategoricalTickFormatter"},"major_label_orientation":1.2,"plot":{"id":"edc8e6b5-625a-449c-a61e-9650b65890bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b237dafe-6e24-4193-a598-ebf2d9ab0778","type":"CategoricalTicker"}},"id":"04d779f8-7a28-4c1a-9958-8cd4a8882084","type":"CategoricalAxis"},{"attributes":{},"id":"e9206ee0-19c7-4ca5-a665-ec5ea469e513","type":"CategoricalScale"},{"attributes":{},"id":"b237dafe-6e24-4193-a598-ebf2d9ab0778","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"edc8e6b5-625a-449c-a61e-9650b65890bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"05e70de6-4a17-49be-8a6b-ebe624fabf99","type":"BasicTicker"}},"id":"94c554f6-0473-475a-a564-3c2844159bd1","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["MPG","@mpg_mean"],["Cyl, Mfr","@cyl_mfr"]]},"id":"b8b22f8b-a72d-42ae-b4ba-a0ab8d5312e6","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl_mfr"}},"id":"942a0083-0727-42cd-9035-8555af61b309","type":"VBar"},{"attributes":{},"id":"492026b6-ccdf-443f-befb-7a0bd2168366","type":"LinearScale"},{"attributes":{"formatter":{"id":"9f9645fc-e338-42a6-9979-81d371e41aaa","type":"BasicTickFormatter"},"plot":{"id":"edc8e6b5-625a-449c-a61e-9650b65890bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"05e70de6-4a17-49be-8a6b-ebe624fabf99","type":"BasicTicker"}},"id":"29029604-1b8e-4dff-818c-37ae6484ac62","type":"LinearAxis"},{"attributes":{"callback":null,"factors":[["3","mazda"],["4","amc"],["4","audi"],["4","bmw"],["4","buick"],["4","capri"],["4","chevrolet"],["4","chrysler"],["4","datsun"],["4","dodge"],["4","fiat"],["4","ford"],["4","honda"],["4","mazda"],["4","mercedes"],["4","mercury"],["4","nissan"],["4","oldsmobile"],["4","opel"],["4","peugeot"],["4","plymouth"],["4","pontiac"],["4","renault"],["4","saab"],["4","subaru"],["4","toyota"],["4","triumph"],["4","volkswagen"],["4","volvo"],["5","audi"],["5","mercedes"],["6","amc"],["6","buick"],["6","chevrolet"],["6","chrysler"],["6","datsun"],["6","dodge"],["6","ford"],["6","mercedes"],["6","mercury"],["6","oldsmobile"],["6","peugeot"],["6","plymouth"],["6","pontiac"],["6","toyota"],["6","volvo"],["8","amc"],["8","buick"],["8","cadillac"],["8","chevrolet"],["8","chrysler"],["8","dodge"],["8","ford"],["8","hi"],["8","mercury"],["8","oldsmobile"],["8","plymouth"],["8","pontiac"]],"range_padding":0.05},"id":"af467439-226d-42c8-a6d8-2860ebd80875","type":"FactorRange"}],"root_ids":["edc8e6b5-625a-449c-a61e-9650b65890bc"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"c6861c6f-eed2-4b74-8647-0c1d3dac8b51","elementid":"9240cbb8-8ad7-488f-9c13-8a4e01d4840e","modelid":"edc8e6b5-625a-449c-a61e-9650b65890bc"}];
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