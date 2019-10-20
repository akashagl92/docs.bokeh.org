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
      };var element = document.getElementById("0edb34dd-f093-40f2-8e7a-2f8fd2328200");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0edb34dd-f093-40f2-8e7a-2f8fd2328200' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"185262aa-48ae-4c0f-a5ff-3c1099b00f14":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AADyke23ckIAADDb7bdyQgAAbiTut3JCAACsbe63ckIAAOq27rdyQgAAKADvt3JCAABmSe+3ckIAAKSS77dyQgAA4tvvt3JCAAAgJfC3ckIAAF5u8LdyQgAAnLfwt3JCAADaAPG3ckIAABhK8bdyQgAAVpPxt3JCAACU3PG3ckIAANIl8rdyQgAAEG/yt3JCAABOuPK3ckIAAIwB87dyQgAAykrzt3JCAAAIlPO3ckIAAEbd87dyQgAAhCb0t3JCAADCb/S3ckIAAAC59LdyQgAAPgL1t3JCAAB8S/W3ckIAALqU9bdyQgAA+N31t3JCAAA2J/a3ckIAAHRw9rdyQgAAsrn2t3JCAADwAve3ckIAAC5M97dyQgAAbJX3t3JCAACq3ve3ckIAAOgn+LdyQgAAJnH4t3JCAABkuvi3ckIAAKID+bdyQgAA4Ez5t3JCAAAelvm3ckIAAFzf+bdyQgAAmij6t3JCAADYcfq3ckIAABa7+rdyQgAAVAT7t3JCAACSTfu3ckIAANCW+7dyQgAADuD7t3JCAABMKfy3ckIAAIpy/LdyQgAAyLv8t3JCAAAGBf23ckIAAERO/bdyQgAAgpf9t3JCAADA4P23ckIAAP4p/rdyQgAAPHP+t3JCAAB6vP63ckIAALgF/7dyQgAA9k7/t3JCAAA0mP+3ckIAAHLh/7dyQgAAsCoAuHJCAADucwC4ckIAACy9ALhyQgAAagYBuHJCAACoTwG4ckIAAOaYAbhyQgAAJOIBuHJCAABiKwK4ckIAAKB0ArhyQgAA3r0CuHJCAAAcBwO4ckIAAFpQA7hyQgAAmJkDuHJCAADW4gO4ckIAABQsBLhyQgAAUnUEuHJCAACQvgS4ckIAAM4HBbhyQgAADFEFuHJCAABKmgW4ckIAAIjjBbhyQgAAxiwGuHJCAAAEdga4ckIAAEK/BrhyQgAAgAgHuHJCAAC+UQe4ckIAAPyaB7hyQgAAOuQHuHJCAAB4LQi4ckIAALZ2CLhyQgAA9L8IuHJCAAAyCQm4ckIAAHBSCbhyQgAArpsJuHJCAADs5Am4ckIAACouCrhyQgAAaHcKuHJCAACmwAq4ckIAAOQJC7hyQgAAIlMLuHJCAABgnAu4ckIAAJ7lC7hyQgAA3C4MuHJCAAAaeAy4ckIAAFjBDLhyQgAAlgoNuHJCAADUUw24ckIAABKd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2bhyQgAAWNXZuHJCAACWHtq4ckIAANRn2rhyQgAAErHauHJCAABQ+tq4ckIAAI5D27hyQgAAzIzbuHJCAAAK1tu4ckIAAEgf3LhyQgAAhmjcuHJCAADEsdy4ckIAAAL73LhyQgAAQETduHJCAAB+jd24ckIAALzW3bhyQgAA+h/euHJCAAA4ad64ckIAAHay3rhyQgAAtPveuHJCAADyRN+4ckIAADCO37hyQgAAbtffuHJCAACsIOC4ckIAAOpp4LhyQgAAKLPguHJCAABm/OC4ckIAAKRF4bhyQgAA4o7huHJCAAAg2OG4ckIAAF4h4rhyQgAAnGriuHJCAADas+K4ckIAABj94rhyQgAAVkbjuHJCAACUj+O4ckIAANLY47hyQgAAECLkuHJCAABOa+S4ckIAAIy05LhyQgAAyv3kuHJCAAAIR+W4ckIAAEaQ5bhyQgAAhNnluHJCAADCIua4ckIAAABs5rhyQgAAPrXmuHJCAAB8/ua4ckIAALpH57hyQgAA+JDnuHJCAAA22ue4ckIAAHQj6LhyQgAAsmzouHJCAADwtei4ckIAAC7/6LhyQgAAbEjpuHJCAACqkem4ckIAAOja6bhyQgAAJiTquHJCAABkbeq4ckIAAKK26rhyQgAA4P/quHJCAAAeSeu4ckIAAFyS67hyQgAAmtvruHJCAADYJOy4ckIAABZu7LhyQgAAVLfsuHJCAACSAO24ckIAANBJ7bhyQgAADpPtuHJCAABM3O24ckIAAIol7rhyQgAAyG7uuHJCAAAGuO64ckIAAEQB77hyQgAAgkrvuHJCAADAk++4ckIAAP7c77hyQgAAPCbwuHJCAAB6b/C4ckIAALi48LhyQgAA9gHxuHJCAAA0S/G4ckIAAHKU8bhyQgAAsN3xuHJCAADuJvK4ckIAACxw8rhyQgAAarnyuHJCAACoAvO4ckIAAOZL87hyQgAAJJXzuHJCAABi3vO4ckIAAKAn9LhyQgAA3nD0uHJCAAAcuvS4ckIAAFoD9bhyQgAAmEz1uHJCAADWlfW4ckIAABTf9bhyQgAAUij2uHJCAACQcfa4ckIAAM669rhyQgAADAT3uHJCAABKTfe4ckIAAIiW97hyQgAAxt/3uHJCAAAEKfi4ckIAAEJy+LhyQgAAgLv4uHJCAAC+BPm4ckIAAPxN+bhyQgAAOpf5uHJC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","dtype":"float64","shape":[1397]},"y":[143,147,150,152,152,152,154,155,142,140,138,134,131,130,128,127,126,126,126,126,127,129,131,132,134,136,136,136,136,135,134,132,130,130,130,129,128,127,125,124,123,123,122,121,120,118,115,112,111,111,110,110,109,108,107,107,107,108,107,105,105,105,105,104,103,102,99,97,96,94,94,93,93,92,91,92,94,95,96,97,99,102,104,112,112,112,111,110,107,104,105,105,103,99,96,94,95,102,114,128,144,160,173,185,196,205,209,214,219,226,234,241,248,255,260,265,268,270,272,271,271,268,265,261,256,253,250,246,244,241,237,233,229,225,222,204,200,197,193,190,186,182,179,175,171,168,164,158,154,151,148,145,141,133,139,152,173,196,217,233,244,249,250,253,256,260,263,265,265,264,260,254,246,234,217,200,188,181,175,169,164,159,154,147,138,132,129,127,123,117,111,106,104,103,100,94,88,83,78,75,73,71,69,68,67,67,68,70,71,71,70,69,68,67,67,67,66,67,69,71,74,76,78,80,80,80,80,80,80,82,84,87,90,92,87,87,86,86,86,86,87,87,87,85,83,82,83,87,95,107,118,130,141,149,172,179,187,201,214,221,225,230,232,230,223,216,208,199,191,185,181,177,176,177,176,173,171,169,163,154,152,153,154,154,153,151,150,150,150,152,149,147,148,150,152,152,152,151,151,150,149,147,146,143,140,138,136,137,138,140,138,135,132,130,129,129,129,130,130,129,128,128,128,129,129,128,127,126,125,125,125,125,124,124,121,120,120,123,124,123,122,120,115,113,114,114,115,116,115,112,111,111,109,108,107,107,110,113,114,115,115,115,114,113,113,116,119,120,121,121,122,123,124,125,126,126,126,126,126,127,127,125,122,118,115,111,112,115,117,120,124,127,131,137,143,148,153,159,166,172,178,184,191,199,206,212,217,223,229,232,233,235,237,240,241,243,246,247,246,243,240,234,229,225,221,217,216,215,215,215,212,208,203,199,196,194,190,185,180,177,163,158,152,149,153,163,174,182,188,192,195,197,201,204,205,203,199,195,189,184,176,169,162,150,138,128,119,110,100,90,80,73,68,64,63,63,66,68,70,71,72,74,80,94,116,141,164,183,198,210,220,228,233,237,241,247,252,256,260,259,258,256,251,245,238,234,227,221,215,208,207,207,203,201,201,199,179,176,171,163,152,137,119,98,77,61,50,45,47,59,71,86,99,109,116,117,115,111,107,102,96,91,90,94,97,97,95,92,87,84,84,83,84,86,86,86,84,82,82,81,81,82,84,87,89,91,92,94,93,93,94,96,100,101,99,97,96,96,97,97,98,99,101,102,106,114,121,127,130,124,105,109,119,127,129,132,129,126,126,126,126,126,125,124,125,130,130,128,126,126,126,126,126,126,126,127,128,129,129,127,128,136,141,143,141,138,131,129,133,134,130,129,134,137,139,138,130,122,118,115,114,113,113,112,112,117,118,117,118,118,117,117,114,112,115,118,124,126,119,121,122,274,285,293,297,298,298,296,293,289,282,275,267,256,249,242,233,225,217,217,215,203,190,185,193,202,202,194,182,170,143,130,120,110,102,93,80,67,57,52,50,49,49,54,72,93,104,114,125,134,140,145,145,141,136,130,124,118,116,114,112,108,105,102,99,95,91,88,85,83,82,80,79,79,83,86,87,88,89,89,88,88,90,92,88,86,86,86,84,82,84,88,90,94,99,104,107,107,105,104,103,95,94,93,93,93,93,93,94,99,109,122,172,169,164,156,147,137,126,115,104,99,99,103,106,111,115,117,118,120,120,120,120,119,119,118,118,117,116,115,115,116,116,115,115,114,112,109,110,111,111,110,109,109,109,108,107,106,105,101,100,99,99,98,97,97,97,98,88,96,106,115,121,124,124,124,122,122,122,123,125,126,128,129,130,132,134,135,135,134,133,131,129,127,127,127,127,127,128,127,126,125,125,127,129,130,130,130,130,129,127,125,124,122,121,121,120,118,115,114,113,113,113,113,114,113,113,111,109,109,110,109,110,110,111,112,112,111,109,109,109,111,114,116,118,119,120,122,122,123,123,123,123,124,124,123,123,123,123,123,124,125,125,126,127,127,126,126,126,124,121,120,118,116,115,113,112,110,108,107,109,111,111,112,112,111,108,105,103,101,99,80,79,79,77,77,82,92,104,115,123,128,132,138,142,146,148,148,144,139,132,126,121,118,116,115,113,111,107,102,96,89,83,79,77,75,75,75,75,76,76,75,74,73,73,71,70,68,67,66,65,64,59,61,66,70,72,72,71,68,64,60,57,56,56,57,58,60,64,68,72,75,77,77,76,73,70,67,65,63,62,61,60,59,58,57,57,57,57,58,59,62,67,76,84,89,95,106,117,126,132,136,139,143,152,164,176,185,192,200,210,219,226,231,235,239,241,241,264,261,254,244,234,220,201,184,172,161,150,141,135,129,125,121,117,112,107,102,99,95,90,87,84,80,76,72,68,66,64,64,64,66,72,79,87,92,97,102,105,107,110,113,115,114,114,114,115,117,119,120,121,122,123,124,125,126,127,127,128,127,126,125,123,122,121,121,120,119,118,117,119,122,123,123,122,121,121,120,120,120,119,118,117,117,117,118,118,118,118,116,114,113,112,113,115,118,119,120,121,122,122,123,123,123,123,123,122,122,121,119,118,117,117,118,118,118,119,119,119,120,121,121,121,121,121,121,120,120,120,120,119,118,118,117,116,115,115,115,116,116,116,115,114,115,116,115,114,115,116,114,114,113,113,112,112,111,109,108,108,107,107,107,107,107,110,113,116,129,129,129,128,125,121,120,121,124,128,129,129,126,121,115,110,107,105,104,107,112,119,130,141,153,164,174,184,196,207,218,229,280,292,299,300,301,302,303,302,295,286,277,264,248,232,218,207,199,191,183,177,172,166,123,117,110,102,94,87,84,83,83,83,85,87,90,90,91,92,94,96,97,98,100,103,105,110,125,154,182,213,250,285,306,311,320,331,359,373,378,378,374,370,367,364,362,360,353,339,321,302,287,276,267,262,261,263,266,269,270,268,243,238,235,231,224,215,202,192,183,177,170,162,156,151,147,144,140,131,120,109,102,112,127,142,155,164,170,171,171,171,169,166,162,158,157,157,156,156,155,155,155,155,158,160,160,160,161,165]}},"id":"83d7c997-4dcb-41e0-b035-416c6569d7b0","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fc9c9ac0-d4e0-451c-a6fd-37446fbbb10e","type":"BoxAnnotation"},{"attributes":{},"id":"91d37fc1-d1c5-4895-8376-df4e6f4405dc","type":"PanTool"},{"attributes":{"source":{"id":"83d7c997-4dcb-41e0-b035-416c6569d7b0","type":"ColumnDataSource"}},"id":"e07b7761-b603-49ea-b5cd-44ffc3152ac1","type":"CDSView"},{"attributes":{},"id":"201a26e5-01e2-43c3-8149-3a4c2fad236a","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"fc9c9ac0-d4e0-451c-a6fd-37446fbbb10e","type":"BoxAnnotation"}},"id":"89935867-2d82-47f4-af16-96ec17a47b19","type":"BoxZoomTool"},{"attributes":{},"id":"f67fc605-0b63-4078-94bb-e51270c443c3","type":"ResetTool"},{"attributes":{},"id":"dc250f2f-d87c-48ac-b457-23a160a205ba","type":"SaveTool"},{"attributes":{"data_source":{"id":"83d7c997-4dcb-41e0-b035-416c6569d7b0","type":"ColumnDataSource"},"glyph":{"id":"f19dcdbf-82d0-4af1-8029-57c3db0f471e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2b5c4be5-6396-4b3b-8994-9e3f669ddb7c","type":"Line"},"selection_glyph":null,"view":{"id":"e07b7761-b603-49ea-b5cd-44ffc3152ac1","type":"CDSView"}},"id":"8532affd-6427-4176-bbb7-e1813df4835f","type":"GlyphRenderer"},{"attributes":{"line_color":"gray","x":{"field":"x"},"y":{"field":"y"}},"id":"f19dcdbf-82d0-4af1-8029-57c3db0f471e","type":"Line"},{"attributes":{},"id":"a4e79533-c56b-4789-a374-1d82defde692","type":"BasicTickFormatter"},{"attributes":{},"id":"ff8d900d-229c-45ea-895d-0c62fff9252c","type":"DatetimeTickFormatter"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"903ba90c-7a55-4848-afe8-7e07c5c5fe99","type":"AdaptiveTicker"},{"attributes":{"plot":null,"text":"Glucose Range"},"id":"ee0d2593-94fe-41a9-a734-b417107e2e9e","type":"Title"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"f5e289ce-151e-438a-8776-41e16c28c4d0","type":"DaysTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"a7e87c7f-fff1-409f-b322-61ccdeb64c39","type":"AdaptiveTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"7c9c6b23-d4bc-474f-aaef-a0d748d44aac","type":"AdaptiveTicker"},{"attributes":{"label":{"value":"glucose"},"renderers":[{"id":"8532affd-6427-4176-bbb7-e1813df4835f","type":"GlyphRenderer"}]},"id":"28e3ab7f-7e2e-408e-b079-0e3371fe38c0","type":"LegendItem"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"368f3229-c872-441a-8f07-b10af8f4dc8b","type":"DaysTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"2b5c4be5-6396-4b3b-8994-9e3f669ddb7c","type":"Line"},{"attributes":{"days":[1,8,15,22]},"id":"d3435fd4-a8d6-454e-ba39-530916205077","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"66e601d3-04f5-493d-9b4b-e2ecff386b95","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"91d37fc1-d1c5-4895-8376-df4e6f4405dc","type":"PanTool"},{"id":"201a26e5-01e2-43c3-8149-3a4c2fad236a","type":"WheelZoomTool"},{"id":"89935867-2d82-47f4-af16-96ec17a47b19","type":"BoxZoomTool"},{"id":"f67fc605-0b63-4078-94bb-e51270c443c3","type":"ResetTool"},{"id":"dc250f2f-d87c-48ac-b457-23a160a205ba","type":"SaveTool"}]},"id":"70c75b42-39bd-4084-9565-2b8ad879d286","type":"Toolbar"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"c552b5bb-21ca-4b86-9628-d830f25207c2","type":"MonthsTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"5e876ac7-de7e-4000-b22e-1a148e83e6ff","type":"MonthsTicker"},{"attributes":{"months":[0,4,8]},"id":"754dfab5-676d-49ff-9ff7-26abcd76f700","type":"MonthsTicker"},{"attributes":{"below":[{"id":"7cc9758f-0d32-4b0b-9def-9a96c5ab8892","type":"DatetimeAxis"}],"left":[{"id":"1e10ac3c-56c8-41dc-984f-94153f84c496","type":"LinearAxis"}],"renderers":[{"id":"7cc9758f-0d32-4b0b-9def-9a96c5ab8892","type":"DatetimeAxis"},{"id":"51f09f81-1ce7-45a7-a1bb-01674466533e","type":"Grid"},{"id":"1e10ac3c-56c8-41dc-984f-94153f84c496","type":"LinearAxis"},{"id":"87617e83-f976-4f10-8d21-d34a13c94912","type":"Grid"},{"id":"fc9c9ac0-d4e0-451c-a6fd-37446fbbb10e","type":"BoxAnnotation"},{"id":"8e37e43f-a7eb-4830-ba21-1541f3c45c0d","type":"Legend"},{"id":"8532affd-6427-4176-bbb7-e1813df4835f","type":"GlyphRenderer"},{"id":"13d292e5-30ba-4f60-91e7-537ee68a17b3","type":"BoxAnnotation"},{"id":"f3f63aec-bc7d-4823-a846-14e3e9323db5","type":"BoxAnnotation"},{"id":"96d82853-27da-429e-8b1b-30c14fbc21af","type":"BoxAnnotation"}],"title":{"id":"ee0d2593-94fe-41a9-a734-b417107e2e9e","type":"Title"},"toolbar":{"id":"70c75b42-39bd-4084-9565-2b8ad879d286","type":"Toolbar"},"x_range":{"id":"daa1596f-4bec-40fb-ae81-89cc8895fbbe","type":"DataRange1d"},"x_scale":{"id":"82f299b6-dd43-4d56-9a23-b9788ee611f3","type":"LinearScale"},"y_range":{"id":"00961568-3d09-45f2-82b1-701daf52c88c","type":"DataRange1d"},"y_scale":{"id":"cb47219d-fa62-4c9d-9eb1-73bc079de2bf","type":"LinearScale"}},"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"},{"attributes":{"months":[0,6]},"id":"71e8c145-d404-4950-b1cd-bdf822496a68","type":"MonthsTicker"},{"attributes":{},"id":"bdd897e4-c0bd-4b26-9b0a-a2fa2176f4fa","type":"YearsTicker"},{"attributes":{},"id":"82f299b6-dd43-4d56-9a23-b9788ee611f3","type":"LinearScale"},{"attributes":{"items":[{"id":"28e3ab7f-7e2e-408e-b079-0e3371fe38c0","type":"LegendItem"}],"plot":{"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"}},"id":"8e37e43f-a7eb-4830-ba21-1541f3c45c0d","type":"Legend"},{"attributes":{"callback":null},"id":"00961568-3d09-45f2-82b1-701daf52c88c","type":"DataRange1d"},{"attributes":{"bottom":80,"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"plot":{"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"},"top":180},"id":"f3f63aec-bc7d-4823-a846-14e3e9323db5","type":"BoxAnnotation"},{"attributes":{},"id":"cb47219d-fa62-4c9d-9eb1-73bc079de2bf","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"plot":{"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"},"top":80},"id":"13d292e5-30ba-4f60-91e7-537ee68a17b3","type":"BoxAnnotation"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4a33521-9d51-4564-bdc9-d5c80a3d7e63","type":"DatetimeTicker"}},"id":"51f09f81-1ce7-45a7-a1bb-01674466533e","type":"Grid"},{"attributes":{"axis_label":"Time","formatter":{"id":"ff8d900d-229c-45ea-895d-0c62fff9252c","type":"DatetimeTickFormatter"},"plot":{"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4a33521-9d51-4564-bdc9-d5c80a3d7e63","type":"DatetimeTicker"}},"id":"7cc9758f-0d32-4b0b-9def-9a96c5ab8892","type":"DatetimeAxis"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"7c9c6b23-d4bc-474f-aaef-a0d748d44aac","type":"AdaptiveTicker"},{"id":"a7e87c7f-fff1-409f-b322-61ccdeb64c39","type":"AdaptiveTicker"},{"id":"903ba90c-7a55-4848-afe8-7e07c5c5fe99","type":"AdaptiveTicker"},{"id":"f5e289ce-151e-438a-8776-41e16c28c4d0","type":"DaysTicker"},{"id":"368f3229-c872-441a-8f07-b10af8f4dc8b","type":"DaysTicker"},{"id":"d3435fd4-a8d6-454e-ba39-530916205077","type":"DaysTicker"},{"id":"66e601d3-04f5-493d-9b4b-e2ecff386b95","type":"DaysTicker"},{"id":"c552b5bb-21ca-4b86-9628-d830f25207c2","type":"MonthsTicker"},{"id":"5e876ac7-de7e-4000-b22e-1a148e83e6ff","type":"MonthsTicker"},{"id":"754dfab5-676d-49ff-9ff7-26abcd76f700","type":"MonthsTicker"},{"id":"71e8c145-d404-4950-b1cd-bdf822496a68","type":"MonthsTicker"},{"id":"bdd897e4-c0bd-4b26-9b0a-a2fa2176f4fa","type":"YearsTicker"}]},"id":"a4a33521-9d51-4564-bdc9-d5c80a3d7e63","type":"DatetimeTicker"},{"attributes":{"bottom":180,"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"plot":{"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"}},"id":"96d82853-27da-429e-8b1b-30c14fbc21af","type":"BoxAnnotation"},{"attributes":{"axis_label":"Value","formatter":{"id":"a4e79533-c56b-4789-a374-1d82defde692","type":"BasicTickFormatter"},"plot":{"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a1ba706-1560-4302-a1cb-e9f6d8279ff8","type":"BasicTicker"}},"id":"1e10ac3c-56c8-41dc-984f-94153f84c496","type":"LinearAxis"},{"attributes":{"callback":null},"id":"daa1596f-4bec-40fb-ae81-89cc8895fbbe","type":"DataRange1d"},{"attributes":{},"id":"2a1ba706-1560-4302-a1cb-e9f6d8279ff8","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"plot":{"id":"fff4d5fa-3a98-482a-8b5f-b69ae5542630","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a1ba706-1560-4302-a1cb-e9f6d8279ff8","type":"BasicTicker"}},"id":"87617e83-f976-4f10-8d21-d34a13c94912","type":"Grid"}],"root_ids":["fff4d5fa-3a98-482a-8b5f-b69ae5542630"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"185262aa-48ae-4c0f-a5ff-3c1099b00f14","elementid":"0edb34dd-f093-40f2-8e7a-2f8fd2328200","modelid":"fff4d5fa-3a98-482a-8b5f-b69ae5542630"}];
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