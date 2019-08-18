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
      };var element = document.getElementById("143ad56d-5ced-48de-bd86-8452981fcfa2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '143ad56d-5ced-48de-bd86-8452981fcfa2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b6d7d1df-340c-46c8-beaf-87eb430379f2":{"roots":{"references":[{"attributes":{"formatter":{"id":"eb8f757c-7cc1-4b84-ac42-d8a3b51c5031","type":"BasicTickFormatter"},"plot":{"id":"abd1f251-9b3b-4683-b1a3-3a9f28933d14","subtype":"Figure","type":"Plot"},"ticker":{"id":"769c8f21-73d8-43b1-8c2d-995312492e94","type":"BasicTicker"}},"id":"93ec067e-199c-477d-ac50-787d6601db55","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"abd1f251-9b3b-4683-b1a3-3a9f28933d14","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ae493d2-8c6e-480f-89b3-3283bf01f313","type":"BasicTicker"}},"id":"4ece9822-e96a-4825-b721-2aae027a1a60","type":"Grid"},{"attributes":{},"id":"83957a73-16cf-4ee8-9383-6b0ebf4402e1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"748c9fbe-a7a5-4038-ba5a-2f07e643c412","type":"Square"},{"attributes":{"callback":null},"id":"8e7ab777-2403-443e-8d37-38d48a00d224","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c57681dd-4984-4122-a81e-17dbb1be26f4","type":"Circle"},{"attributes":{},"id":"c726848b-0831-40dd-b9d1-13494c24ab49","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"62103e33-52a7-4a1d-82cc-5186e9e648c4","type":"Triangle"},{"attributes":{},"id":"2ae493d2-8c6e-480f-89b3-3283bf01f313","type":"BasicTicker"},{"attributes":{},"id":"46a61873-c709-4b7a-9c79-573c099296d3","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d3ae5157-ea8e-4d42-8bb6-9a5a1f55978b","type":"BoxAnnotation"}},"id":"6881ebda-4ff7-4a8c-be82-15ec5416f35f","type":"BoxZoomTool"},{"attributes":{},"id":"95dca70f-c19c-4a22-9672-5b730c8836c6","type":"PanTool"},{"attributes":{},"id":"1642b8d7-5fe7-46ca-b268-4163a0c57f87","type":"HelpTool"},{"attributes":{"source":{"id":"8a05fe47-a67a-4861-8bb2-5ac254f13a5a","type":"ColumnDataSource"}},"id":"3cb52981-3fb6-457f-b2a5-d59db65c07b4","type":"CDSView"},{"attributes":{"callback":null},"id":"e6eea16e-1c01-43fa-aab1-0c207c09e67d","type":"DataRange1d"},{"attributes":{},"id":"97c53d30-04cd-4d43-bbd7-dca9e807cec1","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"8a05fe47-a67a-4861-8bb2-5ac254f13a5a","type":"ColumnDataSource"},{"attributes":{},"id":"299571f7-a0b2-4813-9624-90a4dde76f72","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"498efbb2-3781-4c71-be48-e81371861c75","type":"Circle"},{"attributes":{"formatter":{"id":"83957a73-16cf-4ee8-9383-6b0ebf4402e1","type":"BasicTickFormatter"},"plot":{"id":"abd1f251-9b3b-4683-b1a3-3a9f28933d14","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ae493d2-8c6e-480f-89b3-3283bf01f313","type":"BasicTicker"}},"id":"a5d973c1-b716-461a-81a6-32597f867e11","type":"LinearAxis"},{"attributes":{},"id":"846922a2-9243-4c0e-b712-6ab8699998bb","type":"LinearScale"},{"attributes":{},"id":"3c4af67e-eaf9-47a1-ad86-986353127ccd","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"95dca70f-c19c-4a22-9672-5b730c8836c6","type":"PanTool"},{"id":"46a61873-c709-4b7a-9c79-573c099296d3","type":"WheelZoomTool"},{"id":"6881ebda-4ff7-4a8c-be82-15ec5416f35f","type":"BoxZoomTool"},{"id":"c726848b-0831-40dd-b9d1-13494c24ab49","type":"SaveTool"},{"id":"eb7eb083-0fd4-4c4f-a869-b0c45fde594e","type":"ResetTool"},{"id":"1642b8d7-5fe7-46ca-b268-4163a0c57f87","type":"HelpTool"}]},"id":"bba14fe0-f919-403c-87b7-ddd29b74d3ae","type":"Toolbar"},{"attributes":{"plot":{"id":"66d4bc92-81c7-4e1f-8bd5-364427d109e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e53e053d-29c3-43b2-b7f4-b5c3b80a4a47","type":"BasicTicker"}},"id":"f84b6ea9-e523-4804-bc6c-e957c3c9709b","type":"Grid"},{"attributes":{"formatter":{"id":"0ed692d0-f63e-4752-8913-71f8f49d5c53","type":"BasicTickFormatter"},"plot":{"id":"b92048a6-e00a-4fc4-867c-63b7e03c1593","subtype":"Figure","type":"Plot"},"ticker":{"id":"e936f974-db68-49b5-8c32-764cfd6829b6","type":"BasicTicker"}},"id":"d43ccc6e-2eef-4c5d-ab45-bceb85dd82e6","type":"LinearAxis"},{"attributes":{"plot":{"id":"abd1f251-9b3b-4683-b1a3-3a9f28933d14","subtype":"Figure","type":"Plot"},"ticker":{"id":"769c8f21-73d8-43b1-8c2d-995312492e94","type":"BasicTicker"}},"id":"04151c57-dac9-4b09-86da-aa7a7897ac64","type":"Grid"},{"attributes":{"formatter":{"id":"6707a816-ecfd-4399-becc-9fb2348a0cb2","type":"BasicTickFormatter"},"plot":{"id":"66d4bc92-81c7-4e1f-8bd5-364427d109e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e53e053d-29c3-43b2-b7f4-b5c3b80a4a47","type":"BasicTicker"}},"id":"f68cb779-58fb-4681-9a26-096d344d85dc","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8a05fe47-a67a-4861-8bb2-5ac254f13a5a","type":"ColumnDataSource"},"glyph":{"id":"498efbb2-3781-4c71-be48-e81371861c75","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c57681dd-4984-4122-a81e-17dbb1be26f4","type":"Circle"},"selection_glyph":null,"view":{"id":"3cb52981-3fb6-457f-b2a5-d59db65c07b4","type":"CDSView"}},"id":"79b8fa26-d309-4dce-94dc-3795a36a8bd9","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b572e715-0f8c-443d-8f49-6fee812c12af","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a36c7c44-ec3f-4a00-8980-66eed29c471c","type":"BasicTickFormatter"},"plot":{"id":"b92048a6-e00a-4fc4-867c-63b7e03c1593","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf009675-17a8-4684-a3d1-190a467c7bdc","type":"BasicTicker"}},"id":"8d0c4bed-29da-4e15-98ae-6b7b89e12c09","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"b92048a6-e00a-4fc4-867c-63b7e03c1593","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf009675-17a8-4684-a3d1-190a467c7bdc","type":"BasicTicker"}},"id":"96b65f81-9255-416e-a78d-b8a004f9f3d6","type":"Grid"},{"attributes":{"data_source":{"id":"8fbe4222-0d1c-44bd-ad49-431ccb4f52a9","type":"ColumnDataSource"},"glyph":{"id":"7fa491e4-4f77-44b3-a415-b70685d14e15","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"748c9fbe-a7a5-4038-ba5a-2f07e643c412","type":"Square"},"selection_glyph":null,"view":{"id":"4bf56ef6-c87b-4732-a4e1-d6404031007a","type":"CDSView"}},"id":"0bb36be9-0300-4b5c-be90-787b76e18592","type":"GlyphRenderer"},{"attributes":{},"id":"769c8f21-73d8-43b1-8c2d-995312492e94","type":"BasicTicker"},{"attributes":{},"id":"5cb6bfae-1312-4d0e-a153-3a8391355c4e","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"93ec067e-199c-477d-ac50-787d6601db55","type":"LinearAxis"}],"left":[{"id":"a5d973c1-b716-461a-81a6-32597f867e11","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"93ec067e-199c-477d-ac50-787d6601db55","type":"LinearAxis"},{"id":"04151c57-dac9-4b09-86da-aa7a7897ac64","type":"Grid"},{"id":"a5d973c1-b716-461a-81a6-32597f867e11","type":"LinearAxis"},{"id":"4ece9822-e96a-4825-b721-2aae027a1a60","type":"Grid"},{"id":"d3ae5157-ea8e-4d42-8bb6-9a5a1f55978b","type":"BoxAnnotation"},{"id":"79b8fa26-d309-4dce-94dc-3795a36a8bd9","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"bba14fe0-f919-403c-87b7-ddd29b74d3ae","type":"Toolbar"},"x_range":{"id":"b572e715-0f8c-443d-8f49-6fee812c12af","type":"DataRange1d"},"x_scale":{"id":"3c4af67e-eaf9-47a1-ad86-986353127ccd","type":"LinearScale"},"y_range":{"id":"e6eea16e-1c01-43fa-aab1-0c207c09e67d","type":"DataRange1d"},"y_scale":{"id":"299571f7-a0b2-4813-9624-90a4dde76f72","type":"LinearScale"}},"id":"abd1f251-9b3b-4683-b1a3-3a9f28933d14","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"541ddcc5-7b3e-4b97-8692-ea1de513c27f","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d4c61325-cbd8-4d54-9413-4530366616c4","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b28363f7-53d2-4386-aff4-b3175b403c90","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fa491e4-4f77-44b3-a415-b70685d14e15","type":"Square"},{"attributes":{"formatter":{"id":"cb81afec-147b-4c37-b46d-c1f1b34be505","type":"BasicTickFormatter"},"plot":{"id":"66d4bc92-81c7-4e1f-8bd5-364427d109e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3ecffab-3f0f-405f-bbe0-f812f5fc902e","type":"BasicTicker"}},"id":"a0d63cf7-8d96-4231-94f5-3186106e3f61","type":"LinearAxis"},{"attributes":{},"id":"bf009675-17a8-4684-a3d1-190a467c7bdc","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f3bdf37c-2fd7-4f1d-8d44-3a61589dc2c0","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b92048a6-e00a-4fc4-867c-63b7e03c1593","subtype":"Figure","type":"Plot"},"ticker":{"id":"e936f974-db68-49b5-8c32-764cfd6829b6","type":"BasicTicker"}},"id":"511bc8ce-ca49-4f81-a54f-1b09447c8dbc","type":"Grid"},{"attributes":{},"id":"528f69b5-57cc-4c7d-ad2d-2956b60cfaa7","type":"SaveTool"},{"attributes":{},"id":"e936f974-db68-49b5-8c32-764cfd6829b6","type":"BasicTicker"},{"attributes":{"below":[{"id":"d43ccc6e-2eef-4c5d-ab45-bceb85dd82e6","type":"LinearAxis"}],"left":[{"id":"8d0c4bed-29da-4e15-98ae-6b7b89e12c09","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d43ccc6e-2eef-4c5d-ab45-bceb85dd82e6","type":"LinearAxis"},{"id":"511bc8ce-ca49-4f81-a54f-1b09447c8dbc","type":"Grid"},{"id":"8d0c4bed-29da-4e15-98ae-6b7b89e12c09","type":"LinearAxis"},{"id":"96b65f81-9255-416e-a78d-b8a004f9f3d6","type":"Grid"},{"id":"f3bdf37c-2fd7-4f1d-8d44-3a61589dc2c0","type":"BoxAnnotation"},{"id":"0bb36be9-0300-4b5c-be90-787b76e18592","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"cdf803bf-520a-4cdc-92c4-2958e9daada4","type":"Toolbar"},"x_range":{"id":"8e7ab777-2403-443e-8d37-38d48a00d224","type":"DataRange1d"},"x_scale":{"id":"bdcc5206-1bc8-49c3-93c0-ba21f04361ec","type":"LinearScale"},"y_range":{"id":"541ddcc5-7b3e-4b97-8692-ea1de513c27f","type":"DataRange1d"},"y_scale":{"id":"51e87bfc-9aaa-4971-9eed-bd01c17a504d","type":"LinearScale"}},"id":"b92048a6-e00a-4fc4-867c-63b7e03c1593","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"201d4526-bb49-4da6-a8b1-127bce6b1724","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"201d4526-bb49-4da6-a8b1-127bce6b1724","type":"PanTool"},{"id":"c706381e-a489-4768-aefe-381b998115e7","type":"WheelZoomTool"},{"id":"2a77e02b-50a0-41ae-a61b-6e3ac185f3e5","type":"BoxZoomTool"},{"id":"fa1d40c1-d134-4be3-ba28-c9dc66996b50","type":"SaveTool"},{"id":"f90202ef-f221-40f1-8ebb-b2b4fde14020","type":"ResetTool"},{"id":"8d58c397-f3f1-49b5-b676-c924f6fbd76d","type":"HelpTool"}]},"id":"cdf803bf-520a-4cdc-92c4-2958e9daada4","type":"Toolbar"},{"attributes":{},"id":"bdcc5206-1bc8-49c3-93c0-ba21f04361ec","type":"LinearScale"},{"attributes":{"overlay":{"id":"f3bdf37c-2fd7-4f1d-8d44-3a61589dc2c0","type":"BoxAnnotation"}},"id":"2a77e02b-50a0-41ae-a61b-6e3ac185f3e5","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"d4c61325-cbd8-4d54-9413-4530366616c4","type":"BoxAnnotation"}},"id":"ca88fa73-b5d0-4257-b6e3-bfea822b985b","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"2ea0733e-ca39-4aeb-a0a9-a61882b4f2b7","type":"ColumnDataSource"},{"attributes":{},"id":"116957c2-0c9a-49ac-bdfd-fd90de0bef87","type":"PanTool"},{"attributes":{},"id":"0ed692d0-f63e-4752-8913-71f8f49d5c53","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"fa2d06e0-39d4-4d10-aa46-bc5ecc987e19","type":"DataRange1d"},{"attributes":{},"id":"cb81afec-147b-4c37-b46d-c1f1b34be505","type":"BasicTickFormatter"},{"attributes":{},"id":"6707a816-ecfd-4399-becc-9fb2348a0cb2","type":"BasicTickFormatter"},{"attributes":{},"id":"c706381e-a489-4768-aefe-381b998115e7","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2ea0733e-ca39-4aeb-a0a9-a61882b4f2b7","type":"ColumnDataSource"},"glyph":{"id":"b28363f7-53d2-4386-aff4-b3175b403c90","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62103e33-52a7-4a1d-82cc-5186e9e648c4","type":"Triangle"},"selection_glyph":null,"view":{"id":"5f4a728c-4d0e-43be-a916-ba2a4dca0b5b","type":"CDSView"}},"id":"0bb4afa2-dd6f-4256-8a8e-db570b9eb963","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"8fbe4222-0d1c-44bd-ad49-431ccb4f52a9","type":"ColumnDataSource"},{"attributes":{},"id":"d3ecffab-3f0f-405f-bbe0-f812f5fc902e","type":"BasicTicker"},{"attributes":{},"id":"3ef7a0a9-d0a2-4b00-aa46-76a879028115","type":"HelpTool"},{"attributes":{},"id":"3edffa17-bed7-4393-b40d-bde8b054777b","type":"LinearScale"},{"attributes":{"callback":null},"id":"3e5bf864-f00d-483c-8afc-6290a59c07de","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"66d4bc92-81c7-4e1f-8bd5-364427d109e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3ecffab-3f0f-405f-bbe0-f812f5fc902e","type":"BasicTicker"}},"id":"a17c1e74-6de9-48c7-92c8-ecb486a513a3","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"116957c2-0c9a-49ac-bdfd-fd90de0bef87","type":"PanTool"},{"id":"5cb6bfae-1312-4d0e-a153-3a8391355c4e","type":"WheelZoomTool"},{"id":"ca88fa73-b5d0-4257-b6e3-bfea822b985b","type":"BoxZoomTool"},{"id":"528f69b5-57cc-4c7d-ad2d-2956b60cfaa7","type":"SaveTool"},{"id":"97c53d30-04cd-4d43-bbd7-dca9e807cec1","type":"ResetTool"},{"id":"3ef7a0a9-d0a2-4b00-aa46-76a879028115","type":"HelpTool"}]},"id":"c7e27154-6ada-4a0c-a943-f15382728e8d","type":"Toolbar"},{"attributes":{"below":[{"id":"f68cb779-58fb-4681-9a26-096d344d85dc","type":"LinearAxis"}],"left":[{"id":"a0d63cf7-8d96-4231-94f5-3186106e3f61","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f68cb779-58fb-4681-9a26-096d344d85dc","type":"LinearAxis"},{"id":"f84b6ea9-e523-4804-bc6c-e957c3c9709b","type":"Grid"},{"id":"a0d63cf7-8d96-4231-94f5-3186106e3f61","type":"LinearAxis"},{"id":"a17c1e74-6de9-48c7-92c8-ecb486a513a3","type":"Grid"},{"id":"d4c61325-cbd8-4d54-9413-4530366616c4","type":"BoxAnnotation"},{"id":"0bb4afa2-dd6f-4256-8a8e-db570b9eb963","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"c7e27154-6ada-4a0c-a943-f15382728e8d","type":"Toolbar"},"x_range":{"id":"fa2d06e0-39d4-4d10-aa46-bc5ecc987e19","type":"DataRange1d"},"x_scale":{"id":"3edffa17-bed7-4393-b40d-bde8b054777b","type":"LinearScale"},"y_range":{"id":"3e5bf864-f00d-483c-8afc-6290a59c07de","type":"DataRange1d"},"y_scale":{"id":"846922a2-9243-4c0e-b712-6ab8699998bb","type":"LinearScale"}},"id":"66d4bc92-81c7-4e1f-8bd5-364427d109e4","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"2ea0733e-ca39-4aeb-a0a9-a61882b4f2b7","type":"ColumnDataSource"}},"id":"5f4a728c-4d0e-43be-a916-ba2a4dca0b5b","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d3ae5157-ea8e-4d42-8bb6-9a5a1f55978b","type":"BoxAnnotation"},{"attributes":{},"id":"f90202ef-f221-40f1-8ebb-b2b4fde14020","type":"ResetTool"},{"attributes":{},"id":"e53e053d-29c3-43b2-b7f4-b5c3b80a4a47","type":"BasicTicker"},{"attributes":{},"id":"8d58c397-f3f1-49b5-b676-c924f6fbd76d","type":"HelpTool"},{"attributes":{},"id":"eb8f757c-7cc1-4b84-ac42-d8a3b51c5031","type":"BasicTickFormatter"},{"attributes":{},"id":"eb7eb083-0fd4-4c4f-a869-b0c45fde594e","type":"ResetTool"},{"attributes":{"source":{"id":"8fbe4222-0d1c-44bd-ad49-431ccb4f52a9","type":"ColumnDataSource"}},"id":"4bf56ef6-c87b-4732-a4e1-d6404031007a","type":"CDSView"},{"attributes":{},"id":"51e87bfc-9aaa-4971-9eed-bd01c17a504d","type":"LinearScale"},{"attributes":{"children":[{"id":"abd1f251-9b3b-4683-b1a3-3a9f28933d14","subtype":"Figure","type":"Plot"},{"id":"66d4bc92-81c7-4e1f-8bd5-364427d109e4","subtype":"Figure","type":"Plot"},{"id":"b92048a6-e00a-4fc4-867c-63b7e03c1593","subtype":"Figure","type":"Plot"}]},"id":"7ed0fa14-8b40-4879-a747-72a1d126090a","type":"Column"},{"attributes":{},"id":"fa1d40c1-d134-4be3-ba28-c9dc66996b50","type":"SaveTool"},{"attributes":{},"id":"a36c7c44-ec3f-4a00-8980-66eed29c471c","type":"BasicTickFormatter"}],"root_ids":["7ed0fa14-8b40-4879-a747-72a1d126090a"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"b6d7d1df-340c-46c8-beaf-87eb430379f2","elementid":"143ad56d-5ced-48de-bd86-8452981fcfa2","modelid":"7ed0fa14-8b40-4879-a747-72a1d126090a"}];
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