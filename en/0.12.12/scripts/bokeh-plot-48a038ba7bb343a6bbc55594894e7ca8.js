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
      };var element = document.getElementById("71e70675-2aa7-4fee-9c2d-714eea8e4b89");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71e70675-2aa7-4fee-9c2d-714eea8e4b89' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d2b64889-5340-432b-8421-61b6fc7b93ed":{"roots":{"references":[{"attributes":{},"id":"3fa88329-c815-4d9b-9dd5-de48f9451246","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"64d8e226-24ee-457e-b952-4b44c6a78045","type":"ColumnDataSource"}},"id":"235261f8-2f81-4ab3-b2d6-b2fb54862240","type":"CDSView"},{"attributes":{"callback":null},"id":"fd4c0c9d-ff68-448f-b432-e63edd8f1837","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aee6be41-c2e7-47d5-84fe-e23e512c2709","type":"BoxSelectTool"},{"id":"bc87b25d-6a30-4b51-9cc7-d2e301abfd1e","type":"BoxZoomTool"},{"id":"c0e4841c-5c2b-4fb3-a50c-21bf167a061c","type":"LassoSelectTool"},{"id":"78d97172-860b-46ac-9eec-1529256814ad","type":"ResetTool"}]},"id":"9c190bce-26c8-4dc7-a5d0-0c55accd5173","type":"Toolbar"},{"attributes":{},"id":"78d97172-860b-46ac-9eec-1529256814ad","type":"ResetTool"},{"attributes":{"below":[{"id":"691cd577-b992-4dfa-97ab-28e84015581d","type":"LinearAxis"}],"left":[{"id":"c5b5eac0-99bc-4bd9-b74f-4a61c22577d6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"691cd577-b992-4dfa-97ab-28e84015581d","type":"LinearAxis"},{"id":"bf3c3015-4368-4013-b96e-63b849b515e8","type":"Grid"},{"id":"c5b5eac0-99bc-4bd9-b74f-4a61c22577d6","type":"LinearAxis"},{"id":"18d64104-ddd8-4ea3-bf8e-c1f4efd7f1b6","type":"Grid"},{"id":"3e793474-ac01-4271-9d63-50db103cafaa","type":"BoxAnnotation"},{"id":"94222aa9-c4f5-4413-9920-8b63fa577d10","type":"BoxAnnotation"},{"id":"8f72eaab-995a-4267-9438-fed3928926f4","type":"PolyAnnotation"},{"id":"4f6adc33-7aab-4072-9db6-e522a0dc7f83","type":"GlyphRenderer"}],"title":{"id":"1d42c3dc-3ba5-41c4-a534-011386113f2a","type":"Title"},"toolbar":{"id":"9c190bce-26c8-4dc7-a5d0-0c55accd5173","type":"Toolbar"},"x_range":{"id":"fd4c0c9d-ff68-448f-b432-e63edd8f1837","type":"DataRange1d"},"x_scale":{"id":"0766f47b-91fa-4403-8350-d3ea55ee5c9b","type":"LinearScale"},"y_range":{"id":"57eae68e-2990-46e6-8157-de821360b176","type":"DataRange1d"},"y_scale":{"id":"67e8bc82-62c2-4b72-9dfa-2b476bf43dea","type":"LinearScale"}},"id":"0da7df21-a95d-414f-bdd1-033637204e7c","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"57eae68e-2990-46e6-8157-de821360b176","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"2834054b-28dd-4c1e-beb4-1ef011e144b7","type":"Circle"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"1d42c3dc-3ba5-41c4-a534-011386113f2a","type":"Title"},{"attributes":{"plot":{"id":"0da7df21-a95d-414f-bdd1-033637204e7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ae32eab-ce72-4f91-8343-14cb80b0db23","type":"BasicTicker"}},"id":"bf3c3015-4368-4013-b96e-63b849b515e8","type":"Grid"},{"attributes":{},"id":"3cb953ce-244b-40e4-885e-85d23b0055f7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b39315cc-abeb-4437-ae7b-111b16276e50","type":"BasicTickFormatter"},"plot":{"id":"0da7df21-a95d-414f-bdd1-033637204e7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cb953ce-244b-40e4-885e-85d23b0055f7","type":"BasicTicker"}},"id":"c5b5eac0-99bc-4bd9-b74f-4a61c22577d6","type":"LinearAxis"},{"attributes":{"formatter":{"id":"3fa88329-c815-4d9b-9dd5-de48f9451246","type":"BasicTickFormatter"},"plot":{"id":"0da7df21-a95d-414f-bdd1-033637204e7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ae32eab-ce72-4f91-8343-14cb80b0db23","type":"BasicTicker"}},"id":"691cd577-b992-4dfa-97ab-28e84015581d","type":"LinearAxis"},{"attributes":{"overlay":{"id":"94222aa9-c4f5-4413-9920-8b63fa577d10","type":"BoxAnnotation"}},"id":"bc87b25d-6a30-4b51-9cc7-d2e301abfd1e","type":"BoxZoomTool"},{"attributes":{},"id":"67e8bc82-62c2-4b72-9dfa-2b476bf43dea","type":"LinearScale"},{"attributes":{},"id":"b39315cc-abeb-4437-ae7b-111b16276e50","type":"BasicTickFormatter"},{"attributes":{},"id":"4ae32eab-ce72-4f91-8343-14cb80b0db23","type":"BasicTicker"},{"attributes":{"data_source":{"id":"64d8e226-24ee-457e-b952-4b44c6a78045","type":"ColumnDataSource"},"glyph":{"id":"7920a4bc-469c-4b11-bc73-cfeeb19126c3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2834054b-28dd-4c1e-beb4-1ef011e144b7","type":"Circle"},"selection_glyph":null,"view":{"id":"235261f8-2f81-4ab3-b2d6-b2fb54862240","type":"CDSView"}},"id":"4f6adc33-7aab-4072-9db6-e522a0dc7f83","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"0da7df21-a95d-414f-bdd1-033637204e7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cb953ce-244b-40e4-885e-85d23b0055f7","type":"BasicTicker"}},"id":"18d64104-ddd8-4ea3-bf8e-c1f4efd7f1b6","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"8f72eaab-995a-4267-9438-fed3928926f4","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"8f72eaab-995a-4267-9438-fed3928926f4","type":"PolyAnnotation"}},"id":"c0e4841c-5c2b-4fb3-a50c-21bf167a061c","type":"LassoSelectTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"64d8e226-24ee-457e-b952-4b44c6a78045","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"94222aa9-c4f5-4413-9920-8b63fa577d10","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"3e793474-ac01-4271-9d63-50db103cafaa","type":"BoxAnnotation"},"renderers":[{"id":"4f6adc33-7aab-4072-9db6-e522a0dc7f83","type":"GlyphRenderer"}]},"id":"aee6be41-c2e7-47d5-84fe-e23e512c2709","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3e793474-ac01-4271-9d63-50db103cafaa","type":"BoxAnnotation"},{"attributes":{},"id":"0766f47b-91fa-4403-8350-d3ea55ee5c9b","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"7920a4bc-469c-4b11-bc73-cfeeb19126c3","type":"Circle"}],"root_ids":["0da7df21-a95d-414f-bdd1-033637204e7c"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"d2b64889-5340-432b-8421-61b6fc7b93ed","elementid":"71e70675-2aa7-4fee-9c2d-714eea8e4b89","modelid":"0da7df21-a95d-414f-bdd1-033637204e7c"}];
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