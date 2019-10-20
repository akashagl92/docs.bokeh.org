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
      };var element = document.getElementById("08d49bd2-9708-4ca7-8544-d00013a061bc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08d49bd2-9708-4ca7-8544-d00013a061bc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cd3bc252-6070-47a7-844a-43895329ab5c":{"roots":{"references":[{"attributes":{},"id":"91f66103-caec-49a0-8a73-642650d6d094","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"b5d36309-4c22-4233-bbdb-2f5decf7dd2d","type":"BasicTickFormatter"},"plot":{"id":"6b43c15d-2451-4fee-a39d-8030b6959204","subtype":"Figure","type":"Plot"},"ticker":{"id":"96e11e89-49d3-413f-979a-e7f70d94fd99","type":"BasicTicker"}},"id":"32072cd9-6dc7-407b-b713-8c369da44780","type":"LinearAxis"},{"attributes":{"below":[{"id":"36cea1ac-da73-4be8-b93a-45cff5ee3925","type":"LinearAxis"}],"left":[{"id":"254c4c19-a31b-4cef-a0b6-4c5741d0b943","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"36cea1ac-da73-4be8-b93a-45cff5ee3925","type":"LinearAxis"},{"id":"37fb8892-36bf-401c-81a7-b832b94d87e6","type":"Grid"},{"id":"254c4c19-a31b-4cef-a0b6-4c5741d0b943","type":"LinearAxis"},{"id":"4535eebf-b1a6-4e9b-898f-936e737dbe72","type":"Grid"},{"id":"ce15d5fe-2bff-4b6b-84c5-70f86dc750cd","type":"BoxAnnotation"},{"id":"214d8a16-3b3c-4911-8e20-05dd5bd6f73a","type":"BoxAnnotation"},{"id":"55106602-93ff-4331-9c26-488bb2b5093b","type":"PolyAnnotation"},{"id":"08cfe43c-a7d4-4140-8fd6-9ed53438b2bd","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"077af7b5-41d4-46df-bc25-9f6db35bf06e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"46583889-2709-413f-93c0-cd1ba32a81dd","type":"DataRange1d"},"x_scale":{"id":"817bbe07-ac43-414a-a0c3-505c9889b22f","type":"LinearScale"},"y_range":{"id":"5f92e8bd-c3a2-4ece-8e32-808bc29509e9","type":"DataRange1d"},"y_scale":{"id":"e05a6fd2-93f3-4473-8cfb-e6c8ad26998e","type":"LinearScale"}},"id":"0ab03bd0-e345-46a8-8adc-baa69bc24869","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9de47c49-ee88-44bf-9234-f665216bb0ff","type":"PanTool"},{"attributes":{"callback":null,"overlay":{"id":"55106602-93ff-4331-9c26-488bb2b5093b","type":"PolyAnnotation"}},"id":"334b33fa-90f8-49d8-a892-39855be40d36","type":"LassoSelectTool"},{"attributes":{},"id":"874f2c58-59de-4873-9c95-1562919107a1","type":"SaveTool"},{"attributes":{"plot":{"id":"0ab03bd0-e345-46a8-8adc-baa69bc24869","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdfc160a-33c2-4160-9cc8-62fc143455cd","type":"BasicTicker"}},"id":"37fb8892-36bf-401c-81a7-b832b94d87e6","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"33a6de66-73cf-40db-a97a-fb494faae117","type":"Circle"},{"attributes":{"data_source":{"id":"319de07a-32b9-4577-9b10-1c92b8e8ed96","type":"ColumnDataSource"},"glyph":{"id":"33a6de66-73cf-40db-a97a-fb494faae117","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6f87a1dd-ab2b-46eb-8459-d860b1a8e71a","type":"Circle"},"selection_glyph":null,"view":{"id":"754ed9ed-985d-45b5-b5d6-c2beddf55f69","type":"CDSView"}},"id":"09108b93-e5bd-4e16-85dc-8261dd4152b0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[300]},"y0":{"__ndarray__":"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","dtype":"float64","shape":[300]},"y1":{"__ndarray__":"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","dtype":"float64","shape":[300]}}},"id":"319de07a-32b9-4577-9b10-1c92b8e8ed96","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"c63a9124-4223-4ad9-8da2-a958edf00eb6","type":"BoxAnnotation"}},"id":"146b00f4-a4d7-4826-9779-c22000515822","type":"BoxZoomTool"},{"attributes":{},"id":"56d79558-1b9f-4cfd-871b-af28dd56c176","type":"BasicTicker"},{"attributes":{},"id":"024d60c7-f4e8-4bde-b322-15a3bee5aaa6","type":"SaveTool"},{"attributes":{"toolbar":{"id":"45c85f7d-ceac-4411-8491-6946fc4c21b5","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"f16b1c37-7caf-4a5a-abac-79606378abaf","type":"ToolbarBox"},{"attributes":{},"id":"817bbe07-ac43-414a-a0c3-505c9889b22f","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"55106602-93ff-4331-9c26-488bb2b5093b","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"ce15d5fe-2bff-4b6b-84c5-70f86dc750cd","type":"BoxAnnotation"}},"id":"5dabdfb5-6df7-4f3a-9718-ec3ec1f1d21e","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"4b4e013c-d620-473c-8bfa-9f080c48e6e4","type":"PanTool"},{"id":"91f66103-caec-49a0-8a73-642650d6d094","type":"WheelZoomTool"},{"id":"5dabdfb5-6df7-4f3a-9718-ec3ec1f1d21e","type":"BoxZoomTool"},{"id":"59849f12-e881-4fb0-955b-c7e4d7962e38","type":"ResetTool"},{"id":"874f2c58-59de-4873-9c95-1562919107a1","type":"SaveTool"},{"id":"ef38baf4-9894-4486-9199-40aefc0ed77b","type":"BoxSelectTool"},{"id":"334b33fa-90f8-49d8-a892-39855be40d36","type":"LassoSelectTool"},{"id":"9de47c49-ee88-44bf-9234-f665216bb0ff","type":"PanTool"},{"id":"0ec19e01-d929-4a79-a436-7616d76cb61a","type":"WheelZoomTool"},{"id":"146b00f4-a4d7-4826-9779-c22000515822","type":"BoxZoomTool"},{"id":"cd0be763-26d3-46b0-a335-c5d312917bc5","type":"ResetTool"},{"id":"024d60c7-f4e8-4bde-b322-15a3bee5aaa6","type":"SaveTool"},{"id":"aa5e78a0-ae75-4cbc-9b70-aa8bb0338e36","type":"BoxSelectTool"},{"id":"225bc71d-f633-4990-a6c8-820c34d4193e","type":"LassoSelectTool"}]},"id":"45c85f7d-ceac-4411-8491-6946fc4c21b5","type":"ProxyToolbar"},{"attributes":{},"id":"fdfc160a-33c2-4160-9cc8-62fc143455cd","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a6fbf053-8b34-4371-b0c5-28a144b67a08","type":"BasicTickFormatter"},"plot":{"id":"0ab03bd0-e345-46a8-8adc-baa69bc24869","subtype":"Figure","type":"Plot"},"ticker":{"id":"96e36d85-afd5-4d75-8aa9-6c92f1490d2d","type":"BasicTicker"}},"id":"254c4c19-a31b-4cef-a0b6-4c5741d0b943","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c63a9124-4223-4ad9-8da2-a958edf00eb6","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"a6bb5f31-a856-4c4a-9016-3f605393ed58","type":"LinearAxis"}],"left":[{"id":"32072cd9-6dc7-407b-b713-8c369da44780","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"a6bb5f31-a856-4c4a-9016-3f605393ed58","type":"LinearAxis"},{"id":"af41b6a1-de51-4742-8ff8-b8eff64d91db","type":"Grid"},{"id":"32072cd9-6dc7-407b-b713-8c369da44780","type":"LinearAxis"},{"id":"8dd0a757-9cd8-4b3e-8fa6-c04d892ceefc","type":"Grid"},{"id":"c63a9124-4223-4ad9-8da2-a958edf00eb6","type":"BoxAnnotation"},{"id":"267d7049-0965-4a30-8e5a-90847483ca02","type":"BoxAnnotation"},{"id":"66a25c25-966e-4e91-a0a9-f92dd33d3250","type":"PolyAnnotation"},{"id":"09108b93-e5bd-4e16-85dc-8261dd4152b0","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"e1789e7c-56c8-4d4e-a3cf-9ac3d4b36c73","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d9c32870-ec4d-4d66-b0c8-ba0c870c3545","type":"DataRange1d"},"x_scale":{"id":"8fe4438f-707b-4182-afd0-0e5d40516521","type":"LinearScale"},"y_range":{"id":"9ba0769f-c2cf-4720-9818-613b9d28e5f7","type":"DataRange1d"},"y_scale":{"id":"6a027acd-eb8c-479c-b8d0-ff817396b6b4","type":"LinearScale"}},"id":"6b43c15d-2451-4fee-a39d-8030b6959204","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a6fbf053-8b34-4371-b0c5-28a144b67a08","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4b4e013c-d620-473c-8bfa-9f080c48e6e4","type":"PanTool"},{"id":"91f66103-caec-49a0-8a73-642650d6d094","type":"WheelZoomTool"},{"id":"5dabdfb5-6df7-4f3a-9718-ec3ec1f1d21e","type":"BoxZoomTool"},{"id":"59849f12-e881-4fb0-955b-c7e4d7962e38","type":"ResetTool"},{"id":"874f2c58-59de-4873-9c95-1562919107a1","type":"SaveTool"},{"id":"ef38baf4-9894-4486-9199-40aefc0ed77b","type":"BoxSelectTool"},{"id":"334b33fa-90f8-49d8-a892-39855be40d36","type":"LassoSelectTool"}]},"id":"077af7b5-41d4-46df-bc25-9f6db35bf06e","type":"Toolbar"},{"attributes":{},"id":"6a027acd-eb8c-479c-b8d0-ff817396b6b4","type":"LinearScale"},{"attributes":{},"id":"1f03f523-f0fc-4851-936b-d3573a5674f5","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6b43c15d-2451-4fee-a39d-8030b6959204","subtype":"Figure","type":"Plot"},"ticker":{"id":"56d79558-1b9f-4cfd-871b-af28dd56c176","type":"BasicTicker"}},"id":"af41b6a1-de51-4742-8ff8-b8eff64d91db","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"66a25c25-966e-4e91-a0a9-f92dd33d3250","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"214d8a16-3b3c-4911-8e20-05dd5bd6f73a","type":"BoxAnnotation"},"renderers":[{"id":"08cfe43c-a7d4-4140-8fd6-9ed53438b2bd","type":"GlyphRenderer"}]},"id":"ef38baf4-9894-4486-9199-40aefc0ed77b","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"267d7049-0965-4a30-8e5a-90847483ca02","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"9ba0769f-c2cf-4720-9818-613b9d28e5f7","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"d2240759-16ff-4ef7-9d77-fef6599225fe","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"ace750f9-0485-4206-8239-eec109a56357","type":"Circle"},{"attributes":{},"id":"a941788b-0e64-44a3-a0b7-f53d724d3442","type":"BasicTickFormatter"},{"attributes":{},"id":"cd0be763-26d3-46b0-a335-c5d312917bc5","type":"ResetTool"},{"attributes":{},"id":"96e36d85-afd5-4d75-8aa9-6c92f1490d2d","type":"BasicTicker"},{"attributes":{},"id":"0ec19e01-d929-4a79-a436-7616d76cb61a","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"66a25c25-966e-4e91-a0a9-f92dd33d3250","type":"PolyAnnotation"}},"id":"225bc71d-f633-4990-a6c8-820c34d4193e","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"214d8a16-3b3c-4911-8e20-05dd5bd6f73a","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9de47c49-ee88-44bf-9234-f665216bb0ff","type":"PanTool"},{"id":"0ec19e01-d929-4a79-a436-7616d76cb61a","type":"WheelZoomTool"},{"id":"146b00f4-a4d7-4826-9779-c22000515822","type":"BoxZoomTool"},{"id":"cd0be763-26d3-46b0-a335-c5d312917bc5","type":"ResetTool"},{"id":"024d60c7-f4e8-4bde-b322-15a3bee5aaa6","type":"SaveTool"},{"id":"aa5e78a0-ae75-4cbc-9b70-aa8bb0338e36","type":"BoxSelectTool"},{"id":"225bc71d-f633-4990-a6c8-820c34d4193e","type":"LassoSelectTool"}]},"id":"e1789e7c-56c8-4d4e-a3cf-9ac3d4b36c73","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"6b43c15d-2451-4fee-a39d-8030b6959204","subtype":"Figure","type":"Plot"},"ticker":{"id":"96e11e89-49d3-413f-979a-e7f70d94fd99","type":"BasicTicker"}},"id":"8dd0a757-9cd8-4b3e-8fa6-c04d892ceefc","type":"Grid"},{"attributes":{"children":[{"id":"f16b1c37-7caf-4a5a-abac-79606378abaf","type":"ToolbarBox"},{"id":"c16c5f3d-49b0-48d8-997a-9d203add92be","type":"Column"}]},"id":"7a322a54-fc8e-40f8-9109-6fa2806e3ff3","type":"Column"},{"attributes":{"callback":null},"id":"46583889-2709-413f-93c0-cd1ba32a81dd","type":"DataRange1d"},{"attributes":{"children":[{"id":"0ab03bd0-e345-46a8-8adc-baa69bc24869","subtype":"Figure","type":"Plot"},{"id":"6b43c15d-2451-4fee-a39d-8030b6959204","subtype":"Figure","type":"Plot"}]},"id":"410363ee-b2fb-4e08-b723-c39ab0cc22da","type":"Row"},{"attributes":{"callback":null},"id":"d9c32870-ec4d-4d66-b0c8-ba0c870c3545","type":"DataRange1d"},{"attributes":{},"id":"8fe4438f-707b-4182-afd0-0e5d40516521","type":"LinearScale"},{"attributes":{"source":{"id":"319de07a-32b9-4577-9b10-1c92b8e8ed96","type":"ColumnDataSource"}},"id":"73a1f325-55a5-4191-afca-0e57daa18494","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"267d7049-0965-4a30-8e5a-90847483ca02","type":"BoxAnnotation"},"renderers":[{"id":"09108b93-e5bd-4e16-85dc-8261dd4152b0","type":"GlyphRenderer"}]},"id":"aa5e78a0-ae75-4cbc-9b70-aa8bb0338e36","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"319de07a-32b9-4577-9b10-1c92b8e8ed96","type":"ColumnDataSource"},"glyph":{"id":"ace750f9-0485-4206-8239-eec109a56357","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d2240759-16ff-4ef7-9d77-fef6599225fe","type":"Circle"},"selection_glyph":null,"view":{"id":"73a1f325-55a5-4191-afca-0e57daa18494","type":"CDSView"}},"id":"08cfe43c-a7d4-4140-8fd6-9ed53438b2bd","type":"GlyphRenderer"},{"attributes":{},"id":"b5d36309-4c22-4233-bbdb-2f5decf7dd2d","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"319de07a-32b9-4577-9b10-1c92b8e8ed96","type":"ColumnDataSource"}},"id":"754ed9ed-985d-45b5-b5d6-c2beddf55f69","type":"CDSView"},{"attributes":{"formatter":{"id":"1f03f523-f0fc-4851-936b-d3573a5674f5","type":"BasicTickFormatter"},"plot":{"id":"0ab03bd0-e345-46a8-8adc-baa69bc24869","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdfc160a-33c2-4160-9cc8-62fc143455cd","type":"BasicTicker"}},"id":"36cea1ac-da73-4be8-b93a-45cff5ee3925","type":"LinearAxis"},{"attributes":{},"id":"96e11e89-49d3-413f-979a-e7f70d94fd99","type":"BasicTicker"},{"attributes":{},"id":"4b4e013c-d620-473c-8bfa-9f080c48e6e4","type":"PanTool"},{"attributes":{"children":[{"id":"410363ee-b2fb-4e08-b723-c39ab0cc22da","type":"Row"}]},"id":"c16c5f3d-49b0-48d8-997a-9d203add92be","type":"Column"},{"attributes":{},"id":"e05a6fd2-93f3-4473-8cfb-e6c8ad26998e","type":"LinearScale"},{"attributes":{"formatter":{"id":"a941788b-0e64-44a3-a0b7-f53d724d3442","type":"BasicTickFormatter"},"plot":{"id":"6b43c15d-2451-4fee-a39d-8030b6959204","subtype":"Figure","type":"Plot"},"ticker":{"id":"56d79558-1b9f-4cfd-871b-af28dd56c176","type":"BasicTicker"}},"id":"a6bb5f31-a856-4c4a-9016-3f605393ed58","type":"LinearAxis"},{"attributes":{"callback":null},"id":"5f92e8bd-c3a2-4ece-8e32-808bc29509e9","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"0ab03bd0-e345-46a8-8adc-baa69bc24869","subtype":"Figure","type":"Plot"},"ticker":{"id":"96e36d85-afd5-4d75-8aa9-6c92f1490d2d","type":"BasicTicker"}},"id":"4535eebf-b1a6-4e9b-898f-936e737dbe72","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"6f87a1dd-ab2b-46eb-8459-d860b1a8e71a","type":"Circle"},{"attributes":{},"id":"59849f12-e881-4fb0-955b-c7e4d7962e38","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ce15d5fe-2bff-4b6b-84c5-70f86dc750cd","type":"BoxAnnotation"}],"root_ids":["7a322a54-fc8e-40f8-9109-6fa2806e3ff3"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"cd3bc252-6070-47a7-844a-43895329ab5c","elementid":"08d49bd2-9708-4ca7-8544-d00013a061bc","modelid":"7a322a54-fc8e-40f8-9109-6fa2806e3ff3"}];
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