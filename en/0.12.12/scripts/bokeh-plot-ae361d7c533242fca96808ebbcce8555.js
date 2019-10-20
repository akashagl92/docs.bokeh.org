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
      };var element = document.getElementById("54ae4435-0585-4f81-8ca4-ea83bae2c331");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54ae4435-0585-4f81-8ca4-ea83bae2c331' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"024de091-e6cc-4bb3-963b-cc9d35c1d638":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"ac2dbdd3-9852-4f43-be32-21ad7b0fa87a","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4a703dda-620e-4e9f-b2cc-84e86dab6725","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"4338c6db-b0ae-472a-bc65-dc4055280c38","type":"ColumnDataSource"},"glyph":{"id":"a2ad9b03-c160-445f-8d14-a3efd0e78a84","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0290775f-4c2a-4697-a84d-d87e628868d3","type":"Circle"},"selection_glyph":null,"view":{"id":"bdb54e90-4d82-4949-bb1a-4bef8fede494","type":"CDSView"}},"id":"77e33eaf-5575-4921-8e92-0adb17cc919a","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"51b456b5-7b8d-4c80-98c3-895737db9c4e","type":"BasicTickFormatter"},"plot":{"id":"f0ffd8bb-dee4-44fe-9f94-2291512230cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0ca21d9-c120-4139-ae44-eda00391001a","type":"BasicTicker"}},"id":"9e347104-349d-44af-be80-2d28d9ca9064","type":"LinearAxis"},{"attributes":{"tools":[{"id":"e7114682-b31f-4cf3-8dfa-f716ab209318","type":"BoxSelectTool"},{"id":"d7256b06-a50c-4367-9db4-2e09023e9acd","type":"LassoSelectTool"},{"id":"b65147b4-b797-4a10-b466-731c683b50e3","type":"HelpTool"},{"id":"1c52824b-0986-48fa-86e4-eb3f6cdfeec5","type":"BoxSelectTool"},{"id":"90e2abbe-483b-4010-b6c3-efe7689ea949","type":"LassoSelectTool"},{"id":"5a77622f-bbd0-41b7-bd82-3f61aa1cb8f9","type":"HelpTool"}]},"id":"346b2968-615f-43ae-85fc-23612245e555","type":"ProxyToolbar"},{"attributes":{},"id":"ee38d3fc-0087-4ea8-bec5-5a812acef3dd","type":"LinearScale"},{"attributes":{},"id":"a0ca21d9-c120-4139-ae44-eda00391001a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b559586d-bc7c-4445-910d-8f0b73c27a2c","type":"BasicTickFormatter"},"plot":{"id":"f0ffd8bb-dee4-44fe-9f94-2291512230cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"33297e3e-4699-46af-9907-610bc5cb5930","type":"BasicTicker"}},"id":"883c163c-d973-45cb-b69e-13b22a57304b","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"f0ffd8bb-dee4-44fe-9f94-2291512230cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0ca21d9-c120-4139-ae44-eda00391001a","type":"BasicTicker"}},"id":"87b30651-cd5a-40c4-9669-c84b6e5e2166","type":"Grid"},{"attributes":{},"id":"c669aca2-6141-4be0-99a8-f9ad739d11d7","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1b46102b-d58c-4fff-bd63-0fe348d5aeaa","type":"LinearAxis"}],"left":[{"id":"ea02668f-04ac-4b60-bc63-d96e0d8064ca","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1b46102b-d58c-4fff-bd63-0fe348d5aeaa","type":"LinearAxis"},{"id":"c58c8d2c-acbf-46b4-addf-2d805fb0e2cb","type":"Grid"},{"id":"ea02668f-04ac-4b60-bc63-d96e0d8064ca","type":"LinearAxis"},{"id":"0b06f4c1-1ca8-4330-8178-ea617a781c1b","type":"Grid"},{"id":"d7c207c9-4046-4ce0-abc9-e796eab98cc7","type":"BoxAnnotation"},{"id":"ac2dbdd3-9852-4f43-be32-21ad7b0fa87a","type":"PolyAnnotation"},{"id":"77e33eaf-5575-4921-8e92-0adb17cc919a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"3beb3db6-2e26-4dcf-bbe1-ae0f4aa193af","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"75045895-c9db-41d3-9efc-29f764792985","type":"DataRange1d"},"x_scale":{"id":"65bd9228-7080-403a-8cab-1af49beabad9","type":"LinearScale"},"y_range":{"id":"a4f71dea-c04d-456a-b64f-a59e8409b527","type":"DataRange1d"},"y_scale":{"id":"24e39b3f-448c-496e-bcdb-a99bd98d1cbd","type":"LinearScale"}},"id":"2725da20-5009-4d4c-979e-a0effb9ba331","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"84c585b8-582f-4e0c-b775-ba502f8f567b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"4a703dda-620e-4e9f-b2cc-84e86dab6725","type":"BoxAnnotation"},"renderers":[{"id":"2ca5b2b6-7576-4300-807c-fc66c1b05600","type":"GlyphRenderer"}]},"id":"e7114682-b31f-4cf3-8dfa-f716ab209318","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"f0ffd8bb-dee4-44fe-9f94-2291512230cc","subtype":"Figure","type":"Plot"},{"id":"2725da20-5009-4d4c-979e-a0effb9ba331","subtype":"Figure","type":"Plot"}]},"id":"c33bf72e-a6d1-4d57-99a5-406bb86a1232","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e7114682-b31f-4cf3-8dfa-f716ab209318","type":"BoxSelectTool"},{"id":"d7256b06-a50c-4367-9db4-2e09023e9acd","type":"LassoSelectTool"},{"id":"b65147b4-b797-4a10-b466-731c683b50e3","type":"HelpTool"}]},"id":"fc2eb737-0978-46fb-a3b0-12f74b5bff0e","type":"Toolbar"},{"attributes":{"below":[{"id":"883c163c-d973-45cb-b69e-13b22a57304b","type":"LinearAxis"}],"left":[{"id":"9e347104-349d-44af-be80-2d28d9ca9064","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"883c163c-d973-45cb-b69e-13b22a57304b","type":"LinearAxis"},{"id":"8f7a1d4b-bba9-4153-8f40-6a56710bcf16","type":"Grid"},{"id":"9e347104-349d-44af-be80-2d28d9ca9064","type":"LinearAxis"},{"id":"87b30651-cd5a-40c4-9669-c84b6e5e2166","type":"Grid"},{"id":"4a703dda-620e-4e9f-b2cc-84e86dab6725","type":"BoxAnnotation"},{"id":"e175383a-6c50-4865-afd5-c7a6712d111d","type":"PolyAnnotation"},{"id":"2ca5b2b6-7576-4300-807c-fc66c1b05600","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"fc2eb737-0978-46fb-a3b0-12f74b5bff0e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"04ea880d-13a2-47d6-ae75-d54483c48f7f","type":"DataRange1d"},"x_scale":{"id":"ee38d3fc-0087-4ea8-bec5-5a812acef3dd","type":"LinearScale"},"y_range":{"id":"8eb6f5d5-b946-4e7a-b75e-759bcc88459d","type":"DataRange1d"},"y_scale":{"id":"8c97cadd-5b39-4bba-9fca-d36105ff5fef","type":"LinearScale"}},"id":"f0ffd8bb-dee4-44fe-9f94-2291512230cc","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"ea34089d-6197-43e4-93c9-2e3c602d765e","type":"Circle"},{"attributes":{"children":[{"id":"36de0c41-d5d5-4639-8266-2eb784846c61","type":"ToolbarBox"},{"id":"c84cf873-673a-4c63-a87f-3d060bfc355f","type":"Column"}]},"id":"bbd3a481-2f76-432d-8fa0-97a7c796888c","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"e175383a-6c50-4865-afd5-c7a6712d111d","type":"PolyAnnotation"}},"id":"d7256b06-a50c-4367-9db4-2e09023e9acd","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"346b2968-615f-43ae-85fc-23612245e555","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"36de0c41-d5d5-4639-8266-2eb784846c61","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"4338c6db-b0ae-472a-bc65-dc4055280c38","type":"ColumnDataSource"},"glyph":{"id":"71844a11-ab04-4686-afed-b32de12c4423","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ea34089d-6197-43e4-93c9-2e3c602d765e","type":"Circle"},"selection_glyph":null,"view":{"id":"d4d11542-ed37-4d92-9a3b-60c910bab72b","type":"CDSView"}},"id":"2ca5b2b6-7576-4300-807c-fc66c1b05600","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8eb6f5d5-b946-4e7a-b75e-759bcc88459d","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1c52824b-0986-48fa-86e4-eb3f6cdfeec5","type":"BoxSelectTool"},{"id":"90e2abbe-483b-4010-b6c3-efe7689ea949","type":"LassoSelectTool"},{"id":"5a77622f-bbd0-41b7-bd82-3f61aa1cb8f9","type":"HelpTool"}]},"id":"3beb3db6-2e26-4dcf-bbe1-ae0f4aa193af","type":"Toolbar"},{"attributes":{"source":{"id":"4338c6db-b0ae-472a-bc65-dc4055280c38","type":"ColumnDataSource"}},"id":"d4d11542-ed37-4d92-9a3b-60c910bab72b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"e175383a-6c50-4865-afd5-c7a6712d111d","type":"PolyAnnotation"},{"attributes":{},"id":"b65147b4-b797-4a10-b466-731c683b50e3","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"71844a11-ab04-4686-afed-b32de12c4423","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d7c207c9-4046-4ce0-abc9-e796eab98cc7","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"4338c6db-b0ae-472a-bc65-dc4055280c38","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2725da20-5009-4d4c-979e-a0effb9ba331","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f5d1d65-f22d-4593-bf38-0a8200afa8a3","type":"BasicTicker"}},"id":"c58c8d2c-acbf-46b4-addf-2d805fb0e2cb","type":"Grid"},{"attributes":{"plot":{"id":"f0ffd8bb-dee4-44fe-9f94-2291512230cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"33297e3e-4699-46af-9907-610bc5cb5930","type":"BasicTicker"}},"id":"8f7a1d4b-bba9-4153-8f40-6a56710bcf16","type":"Grid"},{"attributes":{},"id":"b559586d-bc7c-4445-910d-8f0b73c27a2c","type":"BasicTickFormatter"},{"attributes":{},"id":"24e39b3f-448c-496e-bcdb-a99bd98d1cbd","type":"LinearScale"},{"attributes":{},"id":"8c97cadd-5b39-4bba-9fca-d36105ff5fef","type":"LinearScale"},{"attributes":{},"id":"51b456b5-7b8d-4c80-98c3-895737db9c4e","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"c33bf72e-a6d1-4d57-99a5-406bb86a1232","type":"Row"}]},"id":"c84cf873-673a-4c63-a87f-3d060bfc355f","type":"Column"},{"attributes":{"callback":null},"id":"75045895-c9db-41d3-9efc-29f764792985","type":"DataRange1d"},{"attributes":{"callback":null},"id":"a4f71dea-c04d-456a-b64f-a59e8409b527","type":"DataRange1d"},{"attributes":{},"id":"65bd9228-7080-403a-8cab-1af49beabad9","type":"LinearScale"},{"attributes":{"formatter":{"id":"c669aca2-6141-4be0-99a8-f9ad739d11d7","type":"BasicTickFormatter"},"plot":{"id":"2725da20-5009-4d4c-979e-a0effb9ba331","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f5d1d65-f22d-4593-bf38-0a8200afa8a3","type":"BasicTicker"}},"id":"1b46102b-d58c-4fff-bd63-0fe348d5aeaa","type":"LinearAxis"},{"attributes":{},"id":"9f5d1d65-f22d-4593-bf38-0a8200afa8a3","type":"BasicTicker"},{"attributes":{},"id":"9d13d02f-e69d-4ff7-9ac4-0c1056731852","type":"BasicTicker"},{"attributes":{"callback":null},"id":"04ea880d-13a2-47d6-ae75-d54483c48f7f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"84c585b8-582f-4e0c-b775-ba502f8f567b","type":"BasicTickFormatter"},"plot":{"id":"2725da20-5009-4d4c-979e-a0effb9ba331","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d13d02f-e69d-4ff7-9ac4-0c1056731852","type":"BasicTicker"}},"id":"ea02668f-04ac-4b60-bc63-d96e0d8064ca","type":"LinearAxis"},{"attributes":{},"id":"33297e3e-4699-46af-9907-610bc5cb5930","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"d7c207c9-4046-4ce0-abc9-e796eab98cc7","type":"BoxAnnotation"},"renderers":[{"id":"77e33eaf-5575-4921-8e92-0adb17cc919a","type":"GlyphRenderer"}]},"id":"1c52824b-0986-48fa-86e4-eb3f6cdfeec5","type":"BoxSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"2725da20-5009-4d4c-979e-a0effb9ba331","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d13d02f-e69d-4ff7-9ac4-0c1056731852","type":"BasicTicker"}},"id":"0b06f4c1-1ca8-4330-8178-ea617a781c1b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"0290775f-4c2a-4697-a84d-d87e628868d3","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"ac2dbdd3-9852-4f43-be32-21ad7b0fa87a","type":"PolyAnnotation"}},"id":"90e2abbe-483b-4010-b6c3-efe7689ea949","type":"LassoSelectTool"},{"attributes":{},"id":"5a77622f-bbd0-41b7-bd82-3f61aa1cb8f9","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"a2ad9b03-c160-445f-8d14-a3efd0e78a84","type":"Circle"},{"attributes":{"source":{"id":"4338c6db-b0ae-472a-bc65-dc4055280c38","type":"ColumnDataSource"}},"id":"bdb54e90-4d82-4949-bb1a-4bef8fede494","type":"CDSView"}],"root_ids":["bbd3a481-2f76-432d-8fa0-97a7c796888c"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"024de091-e6cc-4bb3-963b-cc9d35c1d638","elementid":"54ae4435-0585-4f81-8ca4-ea83bae2c331","modelid":"bbd3a481-2f76-432d-8fa0-97a7c796888c"}];
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