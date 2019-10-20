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
      };var element = document.getElementById("85189793-b7ca-41bf-8122-a9a1a5a832f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85189793-b7ca-41bf-8122-a9a1a5a832f1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"aec8b670-7283-43de-822b-1ea9dd824bc2":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"3a71dfae-36f6-4790-910f-a607eac5c48f","subtype":"Figure","type":"Plot"},"ticker":{"id":"37071b88-e52c-4d74-bb2b-29dfdec98e0d","type":"BasicTicker"}},"id":"f0a16029-d0e0-44f5-9b0b-46f445ef3b91","type":"Grid"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"d5a15605-4fef-4eb4-b6df-085e583cbd1a","type":"Range1d"},{"attributes":{"data_source":{"id":"b6ee8adf-7c76-4665-9ba6-b7d4af8fb497","type":"ColumnDataSource"},"glyph":{"id":"f1db4c4e-d078-44eb-9c22-2994c4dd4b69","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"90201bc6-e175-46cc-8e55-81ba2e7daefa","type":"CDSView"}},"id":"273137e9-45cd-4801-b491-9061a8738c40","type":"GlyphRenderer"},{"attributes":{"edge_renderer":{"id":"3d3f0c5a-7302-4ab8-80b1-74bee08b56bf","type":"GlyphRenderer"},"inspection_policy":{"id":"377b2ef6-6a8d-4c7d-bd6d-db79783c7b3c","type":"NodesOnly"},"layout_provider":{"id":"46a44561-0ffe-4dff-87e9-2e0eab131a52","type":"StaticLayoutProvider"},"node_renderer":{"id":"273137e9-45cd-4801-b491-9061a8738c40","type":"GlyphRenderer"},"selection_policy":{"id":"883afbbc-55e5-49ad-be85-5ab28dbcd459","type":"NodesOnly"}},"id":"06e602e2-45ad-44b0-8573-179b06d0b037","type":"GraphRenderer"},{"attributes":{"plot":{"id":"3a71dfae-36f6-4790-910f-a607eac5c48f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a64a41e7-59bc-4991-9b4d-82b5bc2be9df","type":"BasicTicker"}},"id":"36b1a558-00e4-47cb-9644-3cba7e6f1011","type":"Grid"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":0.1},"width":{"units":"data","value":0.2}},"id":"f1db4c4e-d078-44eb-9c22-2994c4dd4b69","type":"Oval"},{"attributes":{"data_source":{"id":"7ba4dab3-bbb3-4b12-84c9-eff0a94e38c0","type":"ColumnDataSource"},"glyph":{"id":"52fa104b-5e4b-49dd-94e8-c79ee82339b8","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"506e0168-1223-45be-9768-24f3098f6ff2","type":"CDSView"}},"id":"3d3f0c5a-7302-4ab8-80b1-74bee08b56bf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[0,1,2,3,4,5,6,7],"start":[0,0,0,0,0,0,0,0],"xs":[[1.0,0.9802,0.9607999999999999,0.9418,0.9232,0.9049999999999999,0.8872,0.8697999999999999,0.8528,0.8362,0.8200000000000001,0.8042,0.7888,0.7738,0.7591999999999999,0.7449999999999999,0.7311999999999999,0.7178,0.7048000000000001,0.6922000000000001,0.6800000000000002,0.6682000000000001,0.6568,0.6457999999999999,0.6352,0.625,0.6152,0.6057999999999999,0.5968,0.5882,0.58,0.5721999999999999,0.5648,0.5578,0.5511999999999999,0.545,0.5392,0.5338,0.5288,0.5242,0.52,0.5162,0.5128,0.5098,0.5072000000000001,0.5050000000000001,0.5032000000000001,0.5018,0.5008,0.5002,0.5,0.5002,0.5008,0.5018,0.5032,0.505,0.5072,0.5098,0.5128,0.5162,0.52,0.5242,0.5288,0.5338,0.5392,0.545,0.5512,0.5578000000000001,0.5648000000000001,0.5721999999999999,0.58,0.5882000000000001,0.5968,0.6057999999999999,0.6152,0.625,0.6352,0.6457999999999999,0.6568,0.6682000000000001,0.6800000000000002,0.6922000000000001,0.7047999999999999,0.7178,0.7311999999999999,0.7449999999999999,0.7591999999999999,0.7738,0.7888,0.8042,0.8200000000000001,0.8362,0.8528,0.8698000000000001,0.8872,0.905,0.9232,0.9418,0.9607999999999999,0.9802],[1.0,0.9801707106781187,0.9606828427124745,0.9415363961030678,0.9227313708498984,0.9042677669529663,0.8861455844122715,0.8683648232278139,0.850925483399594,0.8338275649276111,0.8170710678118656,0.8006559920523573,0.7845823376490862,0.7688501046020527,0.7534592929112562,0.7384099025766973,0.7237019335983755,0.7093353859762912,0.6953102597104442,0.6816265548008344,0.668284271247462,0.6552834090503269,0.6426239682094289,0.6303059487247683,0.6183293505963452,0.6066941738241592,0.5954004184082106,0.5844480843484993,0.5738371716450253,0.5635676802977887,0.5536396103067892,0.5440529616720271,0.5348077343935024,0.5259039284712149,0.5173415439051647,0.5091205806953522,0.5012410388417766,0.49370291834443836,0.4865062192033375,0.47965094141847386,0.47313708498984763,0.4669646499174587,0.4611336362013071,0.4556440438413927,0.45049587283771564,0.4456891231902759,0.4412237948990735,0.43709988796410837,0.4333174023853806,0.42987633816289006,0.42677669529663687,0.424018473786621,0.4216016736328425,0.41952629483530124,0.41779233739399724,0.4163998013089306,0.4153486865801013,0.4146389932075093,0.4142707211911546,0.4142438705310372,0.4145584412271571,0.41521443327951435,0.41621184668810896,0.4175506814529407,0.41923093757400987,0.4212526150513164,0.42361571388486013,0.42632023407464126,0.4293661756206596,0.43275353852291526,0.4364823227814083,0.4405525283961386,0.44496415536710626,0.4497172036943112,0.4548116733777534,0.46024756441743303,0.46602487681334986,0.472143610565504,0.47860376567389556,0.4854053421385244,0.4925483399593905,0.5000327591364939,0.5078585996698345,0.5160258615594125,0.5245345448052279,0.5333846494072805,0.5425761753655705,0.5521091226800979,0.5619834913508623,0.5721992813778644,0.5827564927611035,0.5936551255005801,0.6048951795962939,0.6164766550482451,0.6283995518564335,0.6406638700208592,0.6532696095415222,0.6662167704184226,0.6795053526515602,0.6931353562409353],[1.0,0.9801,0.9603999999999999,0.9409,0.9216,0.9025,0.8835999999999999,0.8648999999999999,0.8464,0.8281000000000001,0.81,0.7921,0.7744,0.7569,0.7395999999999999,0.7224999999999999,0.7055999999999999,0.6889,0.6724000000000001,0.6561000000000001,0.6400000000000001,0.6241000000000001,0.6084,0.5929,0.5776,0.5625,0.5476,0.5328999999999999,0.5184,0.5041,0.48999999999999994,0.4760999999999999,0.4623999999999999,0.4488999999999999,0.4355999999999999,0.42250000000000004,0.4096,0.39690000000000003,0.3844,0.3721,0.36,0.3481000000000001,0.3364000000000001,0.3249000000000001,0.31360000000000005,0.30250000000000005,0.2916,0.28090000000000004,0.27040000000000003,0.2601,0.25,0.2401,0.23040000000000002,0.2209,0.21159999999999998,0.20249999999999999,0.1936,0.18490000000000006,0.17640000000000006,0.16810000000000005,0.16000000000000006,0.15210000000000004,0.14440000000000003,0.13690000000000002,0.12960000000000002,0.12250000000000001,0.11560000000000001,0.1089,0.10239999999999999,0.09610000000000006,0.09000000000000005,0.08410000000000005,0.07840000000000004,0.07290000000000003,0.06760000000000004,0.06250000000000003,0.05760000000000003,0.05290000000000002,0.048400000000000026,0.04410000000000003,0.04000000000000002,0.03610000000000002,0.03240000000000006,0.028900000000000054,0.025600000000000053,0.02250000000000005,0.019600000000000048,0.016900000000000047,0.014400000000000046,0.012100000000000046,0.010000000000000045,0.008100000000000045,0.006400000000000045,0.004900000000000046,0.0036000000000000606,0.0025000000000000595,0.0016000000000000593,0.0009000000000000592,0.00040000000000005954,0.00010000000000006019],[1.0,0.9800292893218813,0.9601171572875253,0.9402636038969321,0.9204686291501015,0.9007322330470336,0.8810544155877283,0.8614351767721858,0.8418745166004061,0.822372435072389,0.8029289321881345,0.7835440079476428,0.7642176623509137,0.7449498953979473,0.7257407070887436,0.7065900974233026,0.6874980664016243,0.6684646140237087,0.649489740289556,0.6305734451991658,0.6117157287525382,0.5929165909496734,0.5741760317905712,0.5554940512752317,0.5368706494036549,0.5183058261758408,0.4997995815917894,0.4813519156515006,0.46296282835497465,0.44463231970221134,0.42636038969321066,0.4081470383279727,0.38999226560649747,0.3718960715287849,0.35385845609483496,0.335879419304648,0.3179589611582235,0.3000970816555617,0.28229378079666256,0.2645490585815261,0.24686291501015237,0.22923535008254148,0.21166636379869314,0.19415595615860748,0.17670412716228445,0.15931087680972417,0.14197620510092657,0.12470011203589171,0.10748259761461951,0.09032366183710996,0.07322330470336313,0.05618152621337899,0.03919832636715753,0.022273705164698787,0.0054076626060027,-0.011399801308930674,-0.028148686580101362,-0.0448389932075092,-0.061470721191154515,-0.07804387053103712,-0.09455844122715706,-0.11101443327951427,-0.12741184668810887,-0.1437506814529407,-0.16003093757400988,-0.17625261505131634,-0.19241571388486012,-0.20852023407464124,-0.22456617562065964,-0.24055353852291517,-0.2564823227814082,-0.27235252839613855,-0.28816415536710616,-0.3039172036943111,-0.31961167337775337,-0.335247564417433,-0.35082487681334984,-0.36634361056550396,-0.3818037656738955,-0.3972053421385244,-0.4125483399593905,-0.42783275913649393,-0.4430585996698344,-0.4582258615594125,-0.4733345448052278,-0.4883846494072805,-0.5033761753655704,-0.5183091226800978,-0.5331834913508624,-0.5479992813778642,-0.5627564927611035,-0.57745512550058,-0.5920951795962939,-0.606676655048245,-0.6211995518564333,-0.635663870020859,-0.650069609541522,-0.6644167704184225,-0.6787053526515602,-0.6929353562409352],[1.0,0.98,0.96,0.94,0.9199999999999999,0.9,0.8799999999999999,0.8599999999999999,0.8400000000000001,0.8200000000000001,0.8,0.78,0.76,0.74,0.72,0.7,0.6799999999999999,0.6599999999999999,0.6400000000000001,0.6200000000000001,0.6000000000000001,0.5800000000000001,0.56,0.54,0.52,0.5,0.48,0.4599999999999999,0.43999999999999995,0.42,0.3999999999999999,0.3799999999999999,0.35999999999999993,0.3399999999999999,0.31999999999999984,0.30000000000000004,0.28,0.26,0.24000000000000002,0.21999999999999997,0.19999999999999996,0.1800000000000001,0.16000000000000011,0.1400000000000001,0.12000000000000005,0.10000000000000003,0.08000000000000002,0.06000000000000005,0.040000000000000036,0.020000000000000018,0.0,-0.020000000000000018,-0.040000000000000036,-0.06000000000000005,-0.08000000000000007,-0.10000000000000009,-0.12000000000000008,-0.13999999999999993,-0.15999999999999995,-0.17999999999999994,-0.19999999999999996,-0.21999999999999997,-0.24000000000000002,-0.26,-0.28,-0.30000000000000004,-0.32000000000000006,-0.3400000000000001,-0.3600000000000001,-0.3799999999999999,-0.3999999999999999,-0.42,-0.43999999999999995,-0.4599999999999999,-0.48,-0.5,-0.52,-0.54,-0.56,-0.5800000000000001,-0.6000000000000001,-0.6200000000000001,-0.6399999999999999,-0.6599999999999999,-0.6799999999999999,-0.7,-0.72,-0.74,-0.76,-0.78,-0.8,-0.8200000000000001,-0.8400000000000001,-0.8600000000000001,-0.8799999999999999,-0.8999999999999999,-0.9199999999999999,-0.94,-0.96,-0.98],[1.0,0.9800292893218813,0.9601171572875253,0.9402636038969321,0.9204686291501015,0.9007322330470336,0.8810544155877283,0.8614351767721858,0.8418745166004061,0.822372435072389,0.8029289321881345,0.7835440079476428,0.7642176623509137,0.7449498953979473,0.7257407070887436,0.7065900974233026,0.6874980664016243,0.6684646140237087,0.649489740289556,0.6305734451991658,0.6117157287525382,0.5929165909496733,0.5741760317905712,0.5554940512752317,0.5368706494036548,0.5183058261758408,0.49979958159178933,0.4813519156515006,0.4629628283549746,0.44463231970221134,0.42636038969321066,0.40814703832797267,0.38999226560649747,0.37189607152878484,0.35385845609483496,0.33587941930464793,0.3179589611582234,0.30009708165556165,0.28229378079666256,0.2645490585815261,0.24686291501015234,0.22923535008254142,0.21166636379869308,0.19415595615860742,0.17670412716228442,0.15931087680972414,0.14197620510092654,0.12470011203589165,0.10748259761461945,0.09032366183710991,0.07322330470336308,0.056181526213378935,0.03919832636715748,0.022273705164698704,0.0054076626060026445,-0.011399801308930757,-0.028148686580101417,-0.04483899320750928,-0.0614707211911546,-0.0780438705310372,-0.09455844122715712,-0.11101443327951438,-0.12741184668810893,-0.14375068145294082,-0.16003093757400993,-0.17625261505131645,-0.19241571388486023,-0.20852023407464135,-0.22456617562065975,-0.24055353852291528,-0.2564823227814083,-0.27235252839613866,-0.28816415536710627,-0.3039172036943112,-0.3196116733777535,-0.3352475644174331,-0.35082487681334995,-0.36634361056550413,-0.3818037656738956,-0.3972053421385245,-0.4125483399593906,-0.42783275913649405,-0.4430585996698345,-0.45822586155941264,-0.47333454480522796,-0.4883846494072806,-0.5033761753655707,-0.5183091226800979,-0.5331834913508625,-0.5479992813778645,-0.5627564927611036,-0.5774551255005802,-0.592095179596294,-0.6066766550482452,-0.6211995518564335,-0.6356638700208592,-0.6500696095415223,-0.6644167704184226,-0.6787053526515604,-0.6929353562409354],[1.0,0.9801,0.9603999999999999,0.9409,0.9216,0.9025,0.8835999999999999,0.8648999999999999,0.8464,0.8281000000000001,0.81,0.7921,0.7744,0.7569,0.7395999999999999,0.7224999999999999,0.7055999999999999,0.6889,0.6724000000000001,0.6561000000000001,0.6400000000000001,0.6241000000000001,0.6084,0.5929,0.5776,0.5625,0.5476,0.5328999999999999,0.5184,0.5041,0.48999999999999994,0.4760999999999999,0.4623999999999999,0.4488999999999999,0.4355999999999999,0.42250000000000004,0.4096,0.39690000000000003,0.3844,0.37209999999999993,0.35999999999999993,0.3481,0.33640000000000003,0.3249,0.3136,0.3025,0.29159999999999997,0.2809,0.2704,0.26009999999999994,0.24999999999999994,0.24009999999999992,0.23039999999999994,0.22089999999999993,0.2115999999999999,0.2024999999999999,0.1935999999999999,0.18489999999999998,0.17639999999999997,0.16809999999999997,0.15999999999999998,0.15209999999999996,0.14439999999999992,0.1368999999999999,0.1295999999999999,0.1224999999999999,0.1155999999999999,0.10889999999999989,0.10239999999999988,0.09609999999999995,0.08999999999999994,0.08409999999999992,0.07839999999999991,0.07289999999999991,0.06759999999999991,0.062499999999999896,0.057599999999999894,0.05289999999999988,0.04839999999999988,0.04409999999999987,0.03999999999999986,0.03609999999999986,0.032399999999999894,0.028899999999999888,0.025599999999999883,0.022499999999999874,0.019599999999999868,0.016899999999999863,0.014399999999999857,0.012099999999999852,0.009999999999999846,0.008099999999999842,0.006399999999999838,0.004899999999999834,0.003599999999999844,0.0024999999999998387,0.0015999999999998335,0.0008999999999998288,0.0003999999999998243,9.999999999982014e-05],[1.0,0.9801707106781187,0.9606828427124745,0.9415363961030678,0.9227313708498984,0.9042677669529663,0.8861455844122715,0.8683648232278139,0.850925483399594,0.8338275649276111,0.8170710678118656,0.8006559920523573,0.7845823376490862,0.7688501046020527,0.7534592929112562,0.7384099025766973,0.7237019335983755,0.7093353859762912,0.6953102597104442,0.6816265548008344,0.668284271247462,0.6552834090503268,0.6426239682094289,0.6303059487247683,0.6183293505963451,0.6066941738241592,0.5954004184082106,0.5844480843484993,0.5738371716450252,0.5635676802977886,0.5536396103067892,0.5440529616720271,0.5348077343935024,0.5259039284712149,0.5173415439051647,0.509120580695352,0.5012410388417765,0.49370291834443836,0.4865062192033375,0.47965094141847386,0.4731370849898476,0.4669646499174587,0.46113363620130704,0.4556440438413927,0.45049587283771564,0.44568912319027587,0.4412237948990735,0.43709988796410837,0.4333174023853805,0.42987633816289,0.42677669529663687,0.42401847378662094,0.4216016736328424,0.41952629483530113,0.4177923373939972,0.41639980130893056,0.41534868658010127,0.41463899320750924,0.41427072119115455,0.4142438705310372,0.41455844122715707,0.4152144332795143,0.41621184668810884,0.4175506814529406,0.4192309375740098,0.4212526150513163,0.42361571388486,0.42632023407464115,0.4293661756206595,0.43275353852291515,0.4364823227814082,0.4405525283961385,0.44496415536710615,0.44971720369431106,0.4548116733777533,0.46024756441743286,0.46602487681334975,0.4721436105655039,0.47860376567389545,0.48540534213852427,0.49254833995939035,0.5000327591364938,0.5078585996698344,0.5160258615594124,0.5245345448052278,0.5333846494072804,0.5425761753655703,0.5521091226800977,0.5619834913508622,0.5721992813778641,0.5827564927611034,0.5936551255005799,0.6048951795962937,0.6164766550482449,0.6283995518564333,0.640663870020859,0.653269609541522,0.6662167704184224,0.67950535265156,0.693135356240935]],"ys":[[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,7.071067811865475e-05,0.000282842712474619,0.0006363961030678927,0.001131370849898476,0.001767766952966369,0.0025455844122715707,0.0034648232278140833,0.004525483399593904,0.005727564927611034,0.007071067811865476,0.008555992052357225,0.010182337649086283,0.011950104602052654,0.013859292911256333,0.01590990257669732,0.018101933598375617,0.020435385976291225,0.022910259710444136,0.025526554800834364,0.028284271247461905,0.031183409050326738,0.0342239682094289,0.037405948724768365,0.04072935059634513,0.044194173824159216,0.047800418408210615,0.051548084348499314,0.05543717164502533,0.059467680297788636,0.06363961030678927,0.06795296167202722,0.07240773439350247,0.07700392847121502,0.0817415439051649,0.08662058069535206,0.09164103884177655,0.09680291834443834,0.10210621920333746,0.10755094141847388,0.11313708498984762,0.11886464991745861,0.12473363620130695,0.1307440438413926,0.1368958728377156,0.14318912319027588,0.14962379489907346,0.15619988796410833,0.16291740238538052,0.16977633816289003,0.17677669529663687,0.183918473786621,0.19120167363284246,0.1986262948353012,0.20619233739399725,0.21389980130893063,0.22174868658010133,0.22973899320750923,0.23787072119115454,0.24614387053103715,0.2545584412271571,0.2631144332795143,0.27181184668810887,0.2806506814529407,0.2896309375740099,0.29875261505131634,0.3080157138848601,0.3174202340746412,0.3269661756206596,0.3366535385229152,0.3464823227814082,0.35645252839613856,0.3665641553671062,0.3768172036943111,0.38721167337775336,0.397747564417433,0.4084248768133498,0.41924361056550397,0.4302037656738955,0.44130534213852435,0.4525483399593905,0.4639327591364939,0.47545859966983445,0.4871258615594125,0.4989345448052278,0.5108846494072805,0.5229761753655704,0.5352091226800978,0.5475834913508624,0.5600992813778642,0.5727564927611035,0.58555512550058,0.5984951795962938,0.611576655048245,0.6247995518564333,0.6381638700208591,0.6516696095415221,0.6653167704184225,0.6791053526515601,0.6930353562409352],[0.0,0.0001,0.0004,0.0009,0.0016,0.0025000000000000005,0.0036,0.004900000000000001,0.0064,0.0081,0.010000000000000002,0.0121,0.0144,0.016900000000000002,0.019600000000000003,0.0225,0.0256,0.028900000000000006,0.0324,0.0361,0.04000000000000001,0.04409999999999999,0.0484,0.0529,0.0576,0.0625,0.06760000000000001,0.0729,0.07840000000000001,0.0841,0.09,0.0961,0.1024,0.10890000000000001,0.11560000000000002,0.12249999999999998,0.1296,0.1369,0.1444,0.1521,0.16000000000000003,0.16809999999999997,0.17639999999999997,0.18489999999999998,0.1936,0.2025,0.2116,0.22089999999999999,0.2304,0.24009999999999998,0.25,0.2601,0.27040000000000003,0.28090000000000004,0.2916,0.30250000000000005,0.31360000000000005,0.32489999999999997,0.3364,0.34809999999999997,0.36,0.3721,0.3844,0.39690000000000003,0.4096,0.42250000000000004,0.43560000000000004,0.4489000000000001,0.4624000000000001,0.4760999999999999,0.48999999999999994,0.5041,0.5184,0.5328999999999999,0.5476,0.5625,0.5776,0.5929,0.6084,0.6241000000000001,0.6400000000000001,0.6561000000000001,0.6723999999999999,0.6889,0.7055999999999999,0.7224999999999999,0.7395999999999999,0.7569,0.7744,0.7921,0.81,0.8281000000000001,0.8464,0.8649000000000001,0.8835999999999999,0.9025,0.9216,0.9409,0.9603999999999999,0.9801],[0.0,7.071067811865475e-05,0.000282842712474619,0.0006363961030678928,0.001131370849898476,0.0017677669529663693,0.002545584412271571,0.0034648232278140837,0.004525483399593904,0.005727564927611035,0.007071067811865477,0.008555992052357225,0.010182337649086284,0.011950104602052656,0.013859292911256335,0.01590990257669732,0.018101933598375617,0.02043538597629123,0.02291025971044414,0.025526554800834367,0.02828427124746191,0.031183409050326745,0.0342239682094289,0.03740594872476837,0.04072935059634514,0.04419417382415922,0.04780041840821062,0.05154808434849932,0.05543717164502534,0.05946768029778865,0.06363961030678927,0.06795296167202723,0.07240773439350247,0.07700392847121504,0.08174154390516492,0.08662058069535207,0.09164103884177656,0.09680291834443835,0.10210621920333747,0.10755094141847389,0.11313708498984763,0.11886464991745863,0.12473363620130698,0.13074404384139263,0.1368958728377156,0.14318912319027588,0.1496237948990735,0.15619988796410836,0.16291740238538055,0.16977633816289006,0.1767766952966369,0.18391847378662102,0.1912016736328425,0.19862629483530125,0.20619233739399728,0.2138998013089307,0.22174868658010136,0.2297389932075093,0.2378707211911546,0.24614387053103717,0.2545584412271571,0.26311443327951434,0.2718118466881089,0.28065068145294075,0.2896309375740099,0.2987526150513164,0.30801571388486015,0.31742023407464126,0.32696617562065966,0.33665353852291524,0.3464823227814083,0.3564525283961386,0.36656415536710624,0.37681720369431115,0.3872116733777534,0.39774756441743303,0.4084248768133499,0.419243610565504,0.43020376567389557,0.4413053421385244,0.45254833995939053,0.46393275913649396,0.4754585996698345,0.48712586155941257,0.4989345448052279,0.5108846494072805,0.5229761753655705,0.5352091226800979,0.5475834913508624,0.5600992813778644,0.5727564927611035,0.5855551255005801,0.598495179596294,0.6115766550482451,0.6247995518564334,0.6381638700208592,0.6516696095415222,0.6653167704184226,0.6791053526515602,0.6930353562409353],[0.0,1.2246467991473533e-20,4.898587196589413e-20,1.1021821192326178e-19,1.9594348786357652e-19,3.0616169978683835e-19,4.408728476930471e-19,6.000769315822031e-19,7.837739514543061e-19,9.91963907309356e-19,1.2246467991473534e-18,1.4818226269682973e-18,1.7634913907721884e-18,2.069653090559027e-18,2.4003077263288125e-18,2.7554552980815448e-18,3.1350958058172244e-18,3.539229249535851e-18,3.967855629237424e-18,4.4209749449219455e-18,4.8985871965894135e-18,5.400692384239827e-18,5.927290507873189e-18,6.4783815674894986e-18,7.053965563088754e-18,7.654042494670958e-18,8.278612362236109e-18,8.927675165784206e-18,9.60123090531525e-18,1.029927958082924e-17,1.1021821192326179e-17,1.1768855739806065e-17,1.2540383223268897e-17,1.3336403642714678e-17,1.4156916998143405e-17,1.5001923289555074e-17,1.5871422516949696e-17,1.6765414680327266e-17,1.7683899779687782e-17,1.8626877815031244e-17,1.9594348786357654e-17,2.0586312693667004e-17,2.1602769536959306e-17,2.2643719316234557e-17,2.3709162031492757e-17,2.4799097682733903e-17,2.5913526269957994e-17,2.7052447793165032e-17,2.8215862252355015e-17,2.940376964752795e-17,3.061616997868383e-17,3.1853063245822657e-17,3.3114449448944435e-17,3.440032858804916e-17,3.571070066313682e-17,3.704556567420744e-17,3.8404923621261e-17,3.97887745042975e-17,4.119711832331696e-17,4.262995507831936e-17,4.4087284769304716e-17,4.556910739627301e-17,4.707542295922426e-17,4.860623145815845e-17,5.016153289307559e-17,5.1741327263975676e-17,5.3345614570858713e-17,5.4974394813724697e-17,5.662766799257362e-17,5.830543410740548e-17,6.00076931582203e-17,6.173444514501807e-17,6.348569006779878e-17,6.526142792656245e-17,6.706165872130906e-17,6.888638245203862e-17,7.073559911875113e-17,7.260930872144657e-17,7.450751126012497e-17,7.643020673478633e-17,7.837739514543062e-17,8.034907649205786e-17,8.234525077466802e-17,8.436591799326115e-17,8.641107814783723e-17,8.848073123839626e-17,9.057487726493823e-17,9.269351622746317e-17,9.483664812597103e-17,9.700427296046185e-17,9.919639073093561e-17,1.0141300143739233e-16,1.0365410507983198e-16,1.059197016582546e-16,1.0820979117266013e-16,1.1052437362304862e-16,1.1286344900942006e-16,1.1522701733177445e-16,1.176150785901118e-16,1.200276327844321e-16],[0.0,-7.071067811865475e-05,-0.000282842712474619,-0.0006363961030678927,-0.001131370849898476,-0.001767766952966369,-0.0025455844122715707,-0.0034648232278140833,-0.004525483399593904,-0.005727564927611034,-0.007071067811865476,-0.008555992052357225,-0.010182337649086283,-0.011950104602052654,-0.013859292911256333,-0.01590990257669732,-0.018101933598375617,-0.020435385976291225,-0.022910259710444136,-0.025526554800834364,-0.028284271247461905,-0.031183409050326738,-0.0342239682094289,-0.037405948724768365,-0.04072935059634513,-0.044194173824159216,-0.047800418408210615,-0.051548084348499314,-0.05543717164502533,-0.059467680297788636,-0.06363961030678927,-0.06795296167202722,-0.07240773439350247,-0.07700392847121502,-0.0817415439051649,-0.08662058069535206,-0.09164103884177655,-0.09680291834443834,-0.10210621920333746,-0.10755094141847388,-0.11313708498984762,-0.11886464991745861,-0.12473363620130695,-0.1307440438413926,-0.1368958728377156,-0.14318912319027588,-0.14962379489907346,-0.15619988796410833,-0.16291740238538052,-0.16977633816289003,-0.17677669529663687,-0.183918473786621,-0.19120167363284246,-0.1986262948353012,-0.20619233739399725,-0.21389980130893063,-0.22174868658010133,-0.22973899320750923,-0.23787072119115454,-0.24614387053103715,-0.2545584412271571,-0.2631144332795143,-0.27181184668810887,-0.2806506814529407,-0.2896309375740099,-0.29875261505131634,-0.3080157138848601,-0.3174202340746412,-0.3269661756206596,-0.3366535385229152,-0.3464823227814082,-0.35645252839613856,-0.3665641553671062,-0.3768172036943111,-0.38721167337775336,-0.397747564417433,-0.4084248768133498,-0.41924361056550397,-0.4302037656738955,-0.44130534213852435,-0.4525483399593905,-0.4639327591364939,-0.47545859966983445,-0.4871258615594125,-0.4989345448052278,-0.5108846494072805,-0.5229761753655704,-0.5352091226800978,-0.5475834913508624,-0.5600992813778642,-0.5727564927611035,-0.58555512550058,-0.5984951795962938,-0.611576655048245,-0.6247995518564333,-0.6381638700208591,-0.6516696095415221,-0.6653167704184225,-0.6791053526515601,-0.6930353562409352],[0.0,-0.0001,-0.0004,-0.0009,-0.0016,-0.0025000000000000005,-0.0036,-0.004900000000000001,-0.0064,-0.0081,-0.010000000000000002,-0.0121,-0.0144,-0.016900000000000002,-0.019600000000000003,-0.0225,-0.0256,-0.028900000000000006,-0.0324,-0.0361,-0.04000000000000001,-0.04409999999999999,-0.0484,-0.0529,-0.0576,-0.0625,-0.06760000000000001,-0.0729,-0.07840000000000001,-0.0841,-0.09,-0.0961,-0.1024,-0.10890000000000001,-0.11560000000000002,-0.12249999999999998,-0.1296,-0.1369,-0.1444,-0.1521,-0.16000000000000003,-0.16809999999999997,-0.17639999999999997,-0.18489999999999998,-0.1936,-0.2025,-0.2116,-0.22089999999999999,-0.2304,-0.24009999999999998,-0.25,-0.2601,-0.27040000000000003,-0.28090000000000004,-0.2916,-0.30250000000000005,-0.31360000000000005,-0.32489999999999997,-0.3364,-0.34809999999999997,-0.36,-0.3721,-0.3844,-0.39690000000000003,-0.4096,-0.42250000000000004,-0.43560000000000004,-0.4489000000000001,-0.4624000000000001,-0.4760999999999999,-0.48999999999999994,-0.5041,-0.5184,-0.5328999999999999,-0.5476,-0.5625,-0.5776,-0.5929,-0.6084,-0.6241000000000001,-0.6400000000000001,-0.6561000000000001,-0.6723999999999999,-0.6889,-0.7055999999999999,-0.7224999999999999,-0.7395999999999999,-0.7569,-0.7744,-0.7921,-0.81,-0.8281000000000001,-0.8464,-0.8649000000000001,-0.8835999999999999,-0.9025,-0.9216,-0.9409,-0.9603999999999999,-0.9801],[0.0,-7.071067811865477e-05,-0.00028284271247461907,-0.0006363961030678929,-0.0011313708498984763,-0.0017677669529663695,-0.0025455844122715715,-0.003464823227814084,-0.004525483399593905,-0.005727564927611036,-0.007071067811865478,-0.008555992052357226,-0.010182337649086286,-0.011950104602052657,-0.013859292911256337,-0.015909902576697322,-0.01810193359837562,-0.020435385976291232,-0.022910259710444143,-0.02552655480083437,-0.028284271247461912,-0.03118340905032675,-0.034223968209428905,-0.03740594872476837,-0.040729350596345144,-0.04419417382415923,-0.04780041840821063,-0.05154808434849933,-0.055437171645025346,-0.05946768029778866,-0.06363961030678929,-0.06795296167202723,-0.07240773439350248,-0.07700392847121505,-0.08174154390516493,-0.08662058069535208,-0.09164103884177657,-0.09680291834443837,-0.10210621920333748,-0.1075509414184739,-0.11313708498984765,-0.11886464991745864,-0.124733636201307,-0.13074404384139265,-0.13689587283771562,-0.1431891231902759,-0.1496237948990735,-0.15619988796410839,-0.16291740238538058,-0.1697763381628901,-0.17677669529663692,-0.18391847378662105,-0.19120167363284252,-0.19862629483530128,-0.2061923373939973,-0.21389980130893071,-0.22174868658010138,-0.22973899320750932,-0.23787072119115463,-0.24614387053103723,-0.25455844122715715,-0.2631144332795144,-0.2718118466881089,-0.2806506814529408,-0.28963093757400993,-0.29875261505131645,-0.3080157138848602,-0.3174202340746413,-0.3269661756206597,-0.3366535385229153,-0.34648232278140834,-0.35645252839613867,-0.3665641553671063,-0.3768172036943112,-0.3872116733777535,-0.3977475644174331,-0.40842487681334994,-0.41924361056550413,-0.4302037656738956,-0.44130534213852446,-0.4525483399593906,-0.463932759136494,-0.47545859966983456,-0.4871258615594127,-0.498934544805228,-0.5108846494072806,-0.5229761753655706,-0.5352091226800979,-0.5475834913508625,-0.5600992813778645,-0.5727564927611036,-0.5855551255005802,-0.598495179596294,-0.6115766550482452,-0.6247995518564335,-0.6381638700208593,-0.6516696095415223,-0.6653167704184226,-0.6791053526515604,-0.6930353562409354]]}},"id":"7ba4dab3-bbb3-4b12-84c9-eff0a94e38c0","type":"ColumnDataSource"},{"attributes":{},"id":"f2ec249a-ea06-4f8e-b228-8c06a5b760ea","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"70328d48-bfb9-4b0c-a53e-e9597e5ea40a","type":"LinearAxis"}],"left":[{"id":"38ef08ad-98fd-4866-b22a-d9e55d7c5d81","type":"LinearAxis"}],"renderers":[{"id":"70328d48-bfb9-4b0c-a53e-e9597e5ea40a","type":"LinearAxis"},{"id":"36b1a558-00e4-47cb-9644-3cba7e6f1011","type":"Grid"},{"id":"38ef08ad-98fd-4866-b22a-d9e55d7c5d81","type":"LinearAxis"},{"id":"f0a16029-d0e0-44f5-9b0b-46f445ef3b91","type":"Grid"},{"id":"06e602e2-45ad-44b0-8573-179b06d0b037","type":"GraphRenderer"}],"title":{"id":"674f44f5-db10-46b6-b1e1-1985443165dd","type":"Title"},"toolbar":{"id":"ce8a84dd-7a9d-4916-9af0-f596ebde6d21","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d5a15605-4fef-4eb4-b6df-085e583cbd1a","type":"Range1d"},"x_scale":{"id":"9c3d8a0c-2175-4302-987b-0c3fbe649ac0","type":"LinearScale"},"y_range":{"id":"b4de1e99-fc96-491c-af72-d7cd5de786f9","type":"Range1d"},"y_scale":{"id":"21959e6b-ddd4-4038-b232-af5caa4a5f18","type":"LinearScale"}},"id":"3a71dfae-36f6-4790-910f-a607eac5c48f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37071b88-e52c-4d74-bb2b-29dfdec98e0d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"08a828a7-d84b-4178-afbc-fe3383387331","type":"BasicTickFormatter"},"plot":{"id":"3a71dfae-36f6-4790-910f-a607eac5c48f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a64a41e7-59bc-4991-9b4d-82b5bc2be9df","type":"BasicTicker"}},"id":"70328d48-bfb9-4b0c-a53e-e9597e5ea40a","type":"LinearAxis"},{"attributes":{},"id":"a64a41e7-59bc-4991-9b4d-82b5bc2be9df","type":"BasicTicker"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"b4de1e99-fc96-491c-af72-d7cd5de786f9","type":"Range1d"},{"attributes":{},"id":"9c3d8a0c-2175-4302-987b-0c3fbe649ac0","type":"LinearScale"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.7071067811865476,0.7071067811865475],"2":[6.123233995736766e-17,1.0],"3":[-0.7071067811865475,0.7071067811865476],"4":[-1.0,1.2246467991473532e-16],"5":[-0.7071067811865477,-0.7071067811865475],"6":[-1.8369701987210297e-16,-1.0],"7":[0.7071067811865474,-0.7071067811865477]}},"id":"46a44561-0ffe-4dff-87e9-2e0eab131a52","type":"StaticLayoutProvider"},{"attributes":{"plot":null,"text":"Graph Layout Demonstration"},"id":"674f44f5-db10-46b6-b1e1-1985443165dd","type":"Title"},{"attributes":{},"id":"377b2ef6-6a8d-4c7d-bd6d-db79783c7b3c","type":"NodesOnly"},{"attributes":{},"id":"883afbbc-55e5-49ad-be85-5ab28dbcd459","type":"NodesOnly"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ce8a84dd-7a9d-4916-9af0-f596ebde6d21","type":"Toolbar"},{"attributes":{},"id":"52fa104b-5e4b-49dd-94e8-c79ee82339b8","type":"MultiLine"},{"attributes":{"source":{"id":"7ba4dab3-bbb3-4b12-84c9-eff0a94e38c0","type":"ColumnDataSource"}},"id":"506e0168-1223-45be-9768-24f3098f6ff2","type":"CDSView"},{"attributes":{"formatter":{"id":"f2ec249a-ea06-4f8e-b228-8c06a5b760ea","type":"BasicTickFormatter"},"plot":{"id":"3a71dfae-36f6-4790-910f-a607eac5c48f","subtype":"Figure","type":"Plot"},"ticker":{"id":"37071b88-e52c-4d74-bb2b-29dfdec98e0d","type":"BasicTicker"}},"id":"38ef08ad-98fd-4866-b22a-d9e55d7c5d81","type":"LinearAxis"},{"attributes":{},"id":"08a828a7-d84b-4178-afbc-fe3383387331","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b6ee8adf-7c76-4665-9ba6-b7d4af8fb497","type":"ColumnDataSource"}},"id":"90201bc6-e175-46cc-8e55-81ba2e7daefa","type":"CDSView"},{"attributes":{"callback":null,"column_names":["index"],"data":{"fill_color":["#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f"],"index":[0,1,2,3,4,5,6,7]}},"id":"b6ee8adf-7c76-4665-9ba6-b7d4af8fb497","type":"ColumnDataSource"},{"attributes":{},"id":"21959e6b-ddd4-4038-b232-af5caa4a5f18","type":"LinearScale"}],"root_ids":["3a71dfae-36f6-4790-910f-a607eac5c48f"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"aec8b670-7283-43de-822b-1ea9dd824bc2","elementid":"85189793-b7ca-41bf-8122-a9a1a5a832f1","modelid":"3a71dfae-36f6-4790-910f-a607eac5c48f"}];
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