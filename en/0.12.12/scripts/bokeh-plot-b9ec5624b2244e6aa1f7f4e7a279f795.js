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
      };var element = document.getElementById("5c774bfc-2bc6-4802-a65c-c6371996cf60");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5c774bfc-2bc6-4802-a65c-c6371996cf60' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3283078d-16f4-42f5-bd82-9e97e0b5a514":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"bb99da0a-4c0f-4935-8357-15ebdfe47f2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb27cb28-506d-4665-b7f2-73365e67f971","type":"CategoricalTicker"}},"id":"6dbd440c-5ee1-4113-abfc-8c7442271d2c","type":"Grid"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"99fdb79f-dec1-4391-91ef-949aecca7e76","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"6ea6ef20-98b4-49ba-8365-a20596b90860","type":"Stack"}},"y":{"field":"fruits"}},"id":"e2998c8e-167a-440b-a4ff-e342e236a0b2","type":"HBar"},{"attributes":{},"id":"3cccdb9c-9546-4f4c-bb28-af73e50b2828","type":"PanTool"},{"attributes":{},"id":"a6b223f4-81ca-4608-8cf1-f41111405fdb","type":"HelpTool"},{"attributes":{},"id":"a8a9b54a-6bfa-4d54-83a3-0d9afdd8183b","type":"CategoricalScale"},{"attributes":{"fields":["2015"]},"id":"703ac4b1-b67d-44e9-aff3-41f05987ba21","type":"Stack"},{"attributes":{"source":{"id":"c4b144eb-a512-4e6c-a1ad-dee6cbc53041","type":"ColumnDataSource"}},"id":"283df5dd-e6a2-4729-ae80-b79ffe269206","type":"CDSView"},{"attributes":{"formatter":{"id":"b62aa097-0957-4747-9404-6453972b21fd","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"bb99da0a-4c0f-4935-8357-15ebdfe47f2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3be35723-ef08-4051-bfa2-5b060fc8f88b","type":"BasicTicker"}},"id":"ad2d75a3-df68-41e5-b4fd-36c435fa14f9","type":"LinearAxis"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"29924b9e-c621-4e46-94d7-ca527e0104e0","type":"GlyphRenderer"}]},"id":"6f481299-1bc6-4704-8e78-017247798702","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"695d902c-1075-4e5d-8172-a56f0548d4db","type":"Stack"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"3c6d02a5-3064-416b-ae9f-8e9b4d9f38b2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c4b144eb-a512-4e6c-a1ad-dee6cbc53041","type":"ColumnDataSource"},"glyph":{"id":"e2998c8e-167a-440b-a4ff-e342e236a0b2","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"99d2d131-8e66-4038-a900-7e1117aa6242","type":"HBar"},"selection_glyph":null,"view":{"id":"283df5dd-e6a2-4729-ae80-b79ffe269206","type":"CDSView"}},"id":"01525861-5535-461c-994d-7a369e15e405","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"a72f1910-c066-4e16-a9d5-82741981d332","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"26c9c92e-76b9-4d55-ba19-200fbe0826e3","type":"Stack"}},"y":{"field":"fruits"}},"id":"9a46b9b9-3dcd-4e5d-bc10-a03e34ce124b","type":"HBar"},{"attributes":{"overlay":{"id":"ea539e06-5804-4f4d-8eeb-5b6192033510","type":"BoxAnnotation"}},"id":"dc3cb7d8-d93e-4d92-9452-4d5dd28af2c9","type":"BoxZoomTool"},{"attributes":{"source":{"id":"3c6d02a5-3064-416b-ae9f-8e9b4d9f38b2","type":"ColumnDataSource"}},"id":"638638c2-6eef-480a-be2e-894b5f4b9317","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"158d2c33-84a2-4cba-b897-ec28cb86a194","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"99fdb79f-dec1-4391-91ef-949aecca7e76","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"6ea6ef20-98b4-49ba-8365-a20596b90860","type":"Stack"}},"y":{"field":"fruits"}},"id":"99d2d131-8e66-4038-a900-7e1117aa6242","type":"HBar"},{"attributes":{},"id":"2f41307b-12ef-4b02-912f-5c13a5e4b5ea","type":"WheelZoomTool"},{"attributes":{"fields":["2015","2016"]},"id":"26c9c92e-76b9-4d55-ba19-200fbe0826e3","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"8a17a145-23e8-41d8-8464-4ef2244048db","type":"Stack"},{"attributes":{"source":{"id":"3c6d02a5-3064-416b-ae9f-8e9b4d9f38b2","type":"ColumnDataSource"}},"id":"c4a11a57-5fdf-48f4-a1a8-edcf88fe0fd0","type":"CDSView"},{"attributes":{"plot":{"id":"bb99da0a-4c0f-4935-8357-15ebdfe47f2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3be35723-ef08-4051-bfa2-5b060fc8f88b","type":"BasicTicker"}},"id":"2d9cb9b0-b723-4613-9ffb-b5f902f523fe","type":"Grid"},{"attributes":{"fields":[]},"id":"99fdb79f-dec1-4391-91ef-949aecca7e76","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ea539e06-5804-4f4d-8eeb-5b6192033510","type":"BoxAnnotation"},{"attributes":{"fields":["2015"]},"id":"6ea6ef20-98b4-49ba-8365-a20596b90860","type":"Stack"},{"attributes":{"formatter":{"id":"16d4dc68-15ee-46e7-8a67-d046cc473e3a","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"bb99da0a-4c0f-4935-8357-15ebdfe47f2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb27cb28-506d-4665-b7f2-73365e67f971","type":"CategoricalTicker"}},"id":"8a6a4d21-b01f-4d92-869d-71a67917cff6","type":"CategoricalAxis"},{"attributes":{},"id":"eb27cb28-506d-4665-b7f2-73365e67f971","type":"CategoricalTicker"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"a597023a-00f2-47be-b9f7-d5e21bad0342","type":"GlyphRenderer"}]},"id":"a59f2c5f-93bf-44f7-a9fc-fdad6985e001","type":"LegendItem"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"894696a0-be1b-4634-bc91-e375b59d070b","type":"Range1d"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"19ac9a79-3bc4-4bbb-b7ac-300022c44ea0","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"abb7830b-6c14-49d3-8c0b-e31ea93a574e","type":"Stack"}},"y":{"field":"fruits"}},"id":"59375a3b-3ba2-42bf-93ab-93f7952810d1","type":"HBar"},{"attributes":{"source":{"id":"3c6d02a5-3064-416b-ae9f-8e9b4d9f38b2","type":"ColumnDataSource"}},"id":"0def2f61-b279-40ef-b5d0-71aab77faa1a","type":"CDSView"},{"attributes":{},"id":"361cacd3-2234-42c4-83b9-3380529bc084","type":"SaveTool"},{"attributes":{"source":{"id":"c4b144eb-a512-4e6c-a1ad-dee6cbc53041","type":"ColumnDataSource"}},"id":"56468475-affb-4e98-86c4-614ea43b2947","type":"CDSView"},{"attributes":{"data_source":{"id":"3c6d02a5-3064-416b-ae9f-8e9b4d9f38b2","type":"ColumnDataSource"},"glyph":{"id":"59375a3b-3ba2-42bf-93ab-93f7952810d1","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5701eddd-28b5-4cca-874c-ef04e961b41f","type":"HBar"},"selection_glyph":null,"view":{"id":"0def2f61-b279-40ef-b5d0-71aab77faa1a","type":"CDSView"}},"id":"75e29710-ea7c-43f5-888d-2190e6b6e6f3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"158d2c33-84a2-4cba-b897-ec28cb86a194","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"8a17a145-23e8-41d8-8464-4ef2244048db","type":"Stack"}},"y":{"field":"fruits"}},"id":"901beb73-acba-45b2-bcca-32edba6092ea","type":"HBar"},{"attributes":{"source":{"id":"c4b144eb-a512-4e6c-a1ad-dee6cbc53041","type":"ColumnDataSource"}},"id":"d6dc47be-1298-4626-a368-fc34e847f8dd","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"703ac4b1-b67d-44e9-aff3-41f05987ba21","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"695d902c-1075-4e5d-8172-a56f0548d4db","type":"Stack"}},"y":{"field":"fruits"}},"id":"51037fc4-d6ee-4142-9144-94ff52ad846a","type":"HBar"},{"attributes":{"data_source":{"id":"c4b144eb-a512-4e6c-a1ad-dee6cbc53041","type":"ColumnDataSource"},"glyph":{"id":"fa2918d9-5189-4193-9065-5cd19598bb3e","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"51037fc4-d6ee-4142-9144-94ff52ad846a","type":"HBar"},"selection_glyph":null,"view":{"id":"56468475-affb-4e98-86c4-614ea43b2947","type":"CDSView"}},"id":"a597023a-00f2-47be-b9f7-d5e21bad0342","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c4b144eb-a512-4e6c-a1ad-dee6cbc53041","type":"ColumnDataSource"},"glyph":{"id":"2fb2e29e-d9d3-4788-bf07-b11548cc013d","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"901beb73-acba-45b2-bcca-32edba6092ea","type":"HBar"},"selection_glyph":null,"view":{"id":"d6dc47be-1298-4626-a368-fc34e847f8dd","type":"CDSView"}},"id":"e6b1e0b5-3b5c-4686-9485-deda9ed4d9b6","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"19ac9a79-3bc4-4bbb-b7ac-300022c44ea0","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"abb7830b-6c14-49d3-8c0b-e31ea93a574e","type":"Stack"}},"y":{"field":"fruits"}},"id":"5701eddd-28b5-4cca-874c-ef04e961b41f","type":"HBar"},{"attributes":{"items":[{"id":"5c0219fc-32f6-43ec-b591-2370be2e8792","type":"LegendItem"},{"id":"b3aae490-8cf6-4b3a-9371-a26a02ec4473","type":"LegendItem"},{"id":"6f481299-1bc6-4704-8e78-017247798702","type":"LegendItem"},{"id":"bcb25eb1-b6d8-4034-ad4d-080d73b8ebb9","type":"LegendItem"},{"id":"a59f2c5f-93bf-44f7-a9fc-fdad6985e001","type":"LegendItem"},{"id":"7912b7e1-46e5-44fb-805b-db0c7dece641","type":"LegendItem"}],"location":"top_left","plot":{"id":"bb99da0a-4c0f-4935-8357-15ebdfe47f2b","subtype":"Figure","type":"Plot"}},"id":"103eab1b-6de5-4ded-9692-223436827d02","type":"Legend"},{"attributes":{"fields":["2015"]},"id":"a72f1910-c066-4e16-a9d5-82741981d332","type":"Stack"},{"attributes":{"below":[{"id":"ad2d75a3-df68-41e5-b4fd-36c435fa14f9","type":"LinearAxis"}],"left":[{"id":"8a6a4d21-b01f-4d92-869d-71a67917cff6","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"ad2d75a3-df68-41e5-b4fd-36c435fa14f9","type":"LinearAxis"},{"id":"2d9cb9b0-b723-4613-9ffb-b5f902f523fe","type":"Grid"},{"id":"8a6a4d21-b01f-4d92-869d-71a67917cff6","type":"CategoricalAxis"},{"id":"6dbd440c-5ee1-4113-abfc-8c7442271d2c","type":"Grid"},{"id":"ea539e06-5804-4f4d-8eeb-5b6192033510","type":"BoxAnnotation"},{"id":"103eab1b-6de5-4ded-9692-223436827d02","type":"Legend"},{"id":"75e29710-ea7c-43f5-888d-2190e6b6e6f3","type":"GlyphRenderer"},{"id":"0301f8f9-0d42-4525-bbcc-0a8d5b1b4b2b","type":"GlyphRenderer"},{"id":"29924b9e-c621-4e46-94d7-ca527e0104e0","type":"GlyphRenderer"},{"id":"01525861-5535-461c-994d-7a369e15e405","type":"GlyphRenderer"},{"id":"a597023a-00f2-47be-b9f7-d5e21bad0342","type":"GlyphRenderer"},{"id":"e6b1e0b5-3b5c-4686-9485-deda9ed4d9b6","type":"GlyphRenderer"}],"title":{"id":"bb9e80f0-5ddd-480e-a0a2-25f5541cd61d","type":"Title"},"toolbar":{"id":"fb46f43d-d621-46e8-9f09-7dcf15bb2b9c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"894696a0-be1b-4634-bc91-e375b59d070b","type":"Range1d"},"x_scale":{"id":"a617945e-75c8-4f3c-953d-555e91cc2dc4","type":"LinearScale"},"y_range":{"id":"05089430-1b9e-41ac-94f0-4e8a24cde887","type":"FactorRange"},"y_scale":{"id":"a8a9b54a-6bfa-4d54-83a3-0d9afdd8183b","type":"CategoricalScale"}},"id":"bb99da0a-4c0f-4935-8357-15ebdfe47f2b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b62aa097-0957-4747-9404-6453972b21fd","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"05089430-1b9e-41ac-94f0-4e8a24cde887","type":"FactorRange"},{"attributes":{"data_source":{"id":"3c6d02a5-3064-416b-ae9f-8e9b4d9f38b2","type":"ColumnDataSource"},"glyph":{"id":"791615b7-5979-4156-8ddc-3ab831b84cf8","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5d221741-c453-4827-a262-5a8f934cc8e9","type":"HBar"},"selection_glyph":null,"view":{"id":"638638c2-6eef-480a-be2e-894b5f4b9317","type":"CDSView"}},"id":"29924b9e-c621-4e46-94d7-ca527e0104e0","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"abb7830b-6c14-49d3-8c0b-e31ea93a574e","type":"Stack"},{"attributes":{"data_source":{"id":"3c6d02a5-3064-416b-ae9f-8e9b4d9f38b2","type":"ColumnDataSource"},"glyph":{"id":"aa1d1753-cadd-468f-8dc8-403457e882ff","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9a46b9b9-3dcd-4e5d-bc10-a03e34ce124b","type":"HBar"},"selection_glyph":null,"view":{"id":"c4a11a57-5fdf-48f4-a1a8-edcf88fe0fd0","type":"CDSView"}},"id":"0301f8f9-0d42-4525-bbcc-0a8d5b1b4b2b","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"01525861-5535-461c-994d-7a369e15e405","type":"GlyphRenderer"}]},"id":"bcb25eb1-b6d8-4034-ad4d-080d73b8ebb9","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3cccdb9c-9546-4f4c-bb28-af73e50b2828","type":"PanTool"},{"id":"2f41307b-12ef-4b02-912f-5c13a5e4b5ea","type":"WheelZoomTool"},{"id":"dc3cb7d8-d93e-4d92-9452-4d5dd28af2c9","type":"BoxZoomTool"},{"id":"361cacd3-2234-42c4-83b9-3380529bc084","type":"SaveTool"},{"id":"6a0967f8-78e2-4351-a89f-8050622601cc","type":"ResetTool"},{"id":"a6b223f4-81ca-4608-8cf1-f41111405fdb","type":"HelpTool"}]},"id":"fb46f43d-d621-46e8-9f09-7dcf15bb2b9c","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"a72f1910-c066-4e16-a9d5-82741981d332","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"26c9c92e-76b9-4d55-ba19-200fbe0826e3","type":"Stack"}},"y":{"field":"fruits"}},"id":"aa1d1753-cadd-468f-8dc8-403457e882ff","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"ea289116-482e-4f0e-9359-020b706c693a","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"42cbe427-2766-4b25-b9b9-afc04d93b709","type":"Stack"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"e6b1e0b5-3b5c-4686-9485-deda9ed4d9b6","type":"GlyphRenderer"}]},"id":"7912b7e1-46e5-44fb-805b-db0c7dece641","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"703ac4b1-b67d-44e9-aff3-41f05987ba21","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"695d902c-1075-4e5d-8172-a56f0548d4db","type":"Stack"}},"y":{"field":"fruits"}},"id":"fa2918d9-5189-4193-9065-5cd19598bb3e","type":"HBar"},{"attributes":{},"id":"a617945e-75c8-4f3c-953d-555e91cc2dc4","type":"LinearScale"},{"attributes":{},"id":"16d4dc68-15ee-46e7-8a67-d046cc473e3a","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6a0967f8-78e2-4351-a89f-8050622601cc","type":"ResetTool"},{"attributes":{},"id":"3be35723-ef08-4051-bfa2-5b060fc8f88b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"42cbe427-2766-4b25-b9b9-afc04d93b709","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"ea289116-482e-4f0e-9359-020b706c693a","type":"Stack"}},"y":{"field":"fruits"}},"id":"5d221741-c453-4827-a262-5a8f934cc8e9","type":"HBar"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"bb9e80f0-5ddd-480e-a0a2-25f5541cd61d","type":"Title"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"158d2c33-84a2-4cba-b897-ec28cb86a194","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"8a17a145-23e8-41d8-8464-4ef2244048db","type":"Stack"}},"y":{"field":"fruits"}},"id":"2fb2e29e-d9d3-4788-bf07-b11548cc013d","type":"HBar"},{"attributes":{"fields":[]},"id":"19ac9a79-3bc4-4bbb-b7ac-300022c44ea0","type":"Stack"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"0301f8f9-0d42-4525-bbcc-0a8d5b1b4b2b","type":"GlyphRenderer"}]},"id":"b3aae490-8cf6-4b3a-9371-a26a02ec4473","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"42cbe427-2766-4b25-b9b9-afc04d93b709","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"ea289116-482e-4f0e-9359-020b706c693a","type":"Stack"}},"y":{"field":"fruits"}},"id":"791615b7-5979-4156-8ddc-3ab831b84cf8","type":"HBar"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"c4b144eb-a512-4e6c-a1ad-dee6cbc53041","type":"ColumnDataSource"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"75e29710-ea7c-43f5-888d-2190e6b6e6f3","type":"GlyphRenderer"}]},"id":"5c0219fc-32f6-43ec-b591-2370be2e8792","type":"LegendItem"}],"root_ids":["bb99da0a-4c0f-4935-8357-15ebdfe47f2b"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"3283078d-16f4-42f5-bd82-9e97e0b5a514","elementid":"5c774bfc-2bc6-4802-a65c-c6371996cf60","modelid":"bb99da0a-4c0f-4935-8357-15ebdfe47f2b"}];
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