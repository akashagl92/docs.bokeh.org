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
      };var element = document.getElementById("d50e3d7f-dff6-419d-9a98-197d9d88fcca");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd50e3d7f-dff6-419d-9a98-197d9d88fcca' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5875d268-fb76-4dfd-b9c0-a98152a326ba":{"roots":{"references":[{"attributes":{"callback":null},"id":"c88fa681-e282-4285-9954-0bfb5aa77378","type":"DataRange1d"},{"attributes":{},"id":"25ba3f82-3c25-481a-b7e9-af02e4f06da0","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5fbe73d5-c789-4254-a97d-3d2d60d3e54a","type":"Triangle"},{"attributes":{"formatter":{"id":"064b7961-9501-461a-bf42-c7aa5cbf5df2","type":"BasicTickFormatter"},"plot":{"id":"cd268c45-ec4d-4991-9693-bcfa3bd38287","subtype":"Figure","type":"Plot"},"ticker":{"id":"f99dcbb5-0f40-484a-8ff3-daa1b2c545b0","type":"BasicTicker"}},"id":"358a0ab6-0f42-4616-af76-d5d9f49b644c","type":"LinearAxis"},{"attributes":{},"id":"14654116-9ab5-4f94-9439-ac1f26194feb","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"6cc53e7b-3e85-4dcf-8749-3cb284d4d5af","type":"Title"},{"attributes":{},"id":"cbe8f9c2-be39-4996-9edd-e822b27af718","type":"WheelZoomTool"},{"attributes":{},"id":"c73b6c20-1717-4d15-83c1-04b12bc1592b","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"9ef1d09c-3626-4c91-889e-a81c2f921fea","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"4a56dfb3-8d85-4277-92fd-9fa996a74ad9","type":"LinearAxis"}],"left":[{"id":"fc8eee0a-9ed3-41e2-8d73-305ee4dc8303","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"4a56dfb3-8d85-4277-92fd-9fa996a74ad9","type":"LinearAxis"},{"id":"f3905383-4cc7-4c0f-8482-8ba1703a5d74","type":"Grid"},{"id":"fc8eee0a-9ed3-41e2-8d73-305ee4dc8303","type":"LinearAxis"},{"id":"a47dd245-fa7b-4103-b69d-4be05487c21c","type":"Grid"},{"id":"53dec25d-c641-4cfd-83bc-33847d5c85a8","type":"BoxAnnotation"},{"id":"b85d1d8e-e20a-4ccf-b514-452256ebc72b","type":"GlyphRenderer"}],"title":{"id":"6cc53e7b-3e85-4dcf-8749-3cb284d4d5af","type":"Title"},"toolbar":{"id":"43aa1da6-2a07-4eae-9d1b-dfa2bbeb8c24","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"59ff9712-e5e8-47d2-854e-8b256a05bff9","type":"DataRange1d"},"x_scale":{"id":"ffbe530a-0e0b-4960-a7d3-3d9497d35f6b","type":"LinearScale"},"y_range":{"id":"d49fbe48-f728-4cbf-b823-79d07bd80415","type":"DataRange1d"},"y_scale":{"id":"d84abd3e-14be-4f4c-b562-cc920ab7a901","type":"LinearScale"}},"id":"ccb006fb-4add-4793-83eb-2baa094d1e96","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7589ec93-9eee-4f24-83cb-f9c1761a290f","type":"Triangle"},{"attributes":{"source":{"id":"b42085ef-4dea-49b0-8135-99f9ff5e347a","type":"ColumnDataSource"}},"id":"5af84042-c919-41da-ac49-e82508601995","type":"CDSView"},{"attributes":{},"id":"978f541c-aec2-4c4e-91b4-3afac7905c34","type":"LinearScale"},{"attributes":{"formatter":{"id":"26e985cb-960e-435b-8011-be2f6a6b4de5","type":"BasicTickFormatter"},"plot":{"id":"ccb006fb-4add-4793-83eb-2baa094d1e96","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ed41033-8311-4186-84c3-1b6608087f59","type":"BasicTicker"}},"id":"4a56dfb3-8d85-4277-92fd-9fa996a74ad9","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"cd268c45-ec4d-4991-9693-bcfa3bd38287","subtype":"Figure","type":"Plot"},"ticker":{"id":"c73b6c20-1717-4d15-83c1-04b12bc1592b","type":"BasicTicker"}},"id":"f51488f6-13a1-4d7d-af85-892a367aec28","type":"Grid"},{"attributes":{"source":{"id":"9ef1d09c-3626-4c91-889e-a81c2f921fea","type":"ColumnDataSource"}},"id":"5d2cd387-6a5a-422a-9f1f-469af4e7abce","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"14654116-9ab5-4f94-9439-ac1f26194feb","type":"PanTool"},{"id":"cbe8f9c2-be39-4996-9edd-e822b27af718","type":"WheelZoomTool"},{"id":"f6fd6fa0-5d35-47a6-861b-863f1e107419","type":"BoxZoomTool"},{"id":"ac168b13-a995-4435-a861-6a3ffc3de346","type":"SaveTool"},{"id":"d5d489ab-2eb0-4f15-bdb5-41ebc33fba59","type":"ResetTool"},{"id":"1f826d70-c487-4455-9b57-9f78cd3f6d9c","type":"HelpTool"}]},"id":"8eb4eaba-927f-4279-8d41-7d4e5bf22fb7","type":"Toolbar"},{"attributes":{"callback":null},"id":"81a076d1-01d2-49df-b598-b84e4ddc1a9d","type":"DataRange1d"},{"attributes":{"plot":{"id":"cd268c45-ec4d-4991-9693-bcfa3bd38287","subtype":"Figure","type":"Plot"},"ticker":{"id":"f99dcbb5-0f40-484a-8ff3-daa1b2c545b0","type":"BasicTicker"}},"id":"e67859b8-a563-43f3-8d2c-daa37bad4c8d","type":"Grid"},{"attributes":{},"id":"ffbe530a-0e0b-4960-a7d3-3d9497d35f6b","type":"LinearScale"},{"attributes":{},"id":"7811fb3c-7b0e-48b1-bf9c-c6ceb8f64f78","type":"LinearScale"},{"attributes":{"data_source":{"id":"0054f652-21e2-40f9-8068-a54c590bf289","type":"ColumnDataSource"},"glyph":{"id":"b5e41c3f-1200-4edd-b1ea-f6f5deeb210b","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a1dcc802-5a6c-4134-a89d-93f207d0f3df","type":"Square"},"selection_glyph":null,"view":{"id":"3ca8e327-7a31-4af3-95ba-192219074289","type":"CDSView"}},"id":"5c6bcf4e-1e48-469c-a9a3-ea06c4b9e783","type":"GlyphRenderer"},{"attributes":{},"id":"54683831-93e6-4b81-bf78-21221055eb38","type":"ResetTool"},{"attributes":{"toolbar":{"id":"0cfd8f19-2e9e-4f56-b7ec-7594aff2e6a7","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"1eb30257-c554-4d47-9aa8-f85543be2650","type":"ToolbarBox"},{"attributes":{},"id":"110976e6-e49e-4829-bfb3-cf0e763a0675","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1dcc802-5a6c-4134-a89d-93f207d0f3df","type":"Square"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3218e46e-4540-4f95-8ecf-58fe47f73376","type":"Circle"},{"attributes":{},"id":"daabd3c4-ec78-40ec-b5aa-e0479a44b075","type":"BasicTicker"},{"attributes":{},"id":"4893eea4-4c72-497e-9a1c-1478f5d0ac71","type":"PanTool"},{"attributes":{},"id":"5a30b610-7276-44a8-86f9-a87fcb5abd4c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"59ff9712-e5e8-47d2-854e-8b256a05bff9","type":"DataRange1d"},{"attributes":{"callback":null},"id":"38a31260-9974-4fb9-9e71-05cb33a6d9a4","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"c4e88adc-85ed-4575-9f5f-c06faca21e75","subtype":"Figure","type":"Plot"},"ticker":{"id":"daabd3c4-ec78-40ec-b5aa-e0479a44b075","type":"BasicTicker"}},"id":"bc820326-a8c2-4120-8ce8-f4b5cbfa1d5b","type":"Grid"},{"attributes":{},"id":"b31f608e-dd60-4963-a2fa-779ce259d2d6","type":"HelpTool"},{"attributes":{},"id":"f8644aa9-f4a2-4014-9afe-e1002742ccb2","type":"HelpTool"},{"attributes":{},"id":"d84abd3e-14be-4f4c-b562-cc920ab7a901","type":"LinearScale"},{"attributes":{},"id":"c0035bda-d34e-4507-bf4d-ea5169c6aff0","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9ef1d09c-3626-4c91-889e-a81c2f921fea","type":"ColumnDataSource"},"glyph":{"id":"3218e46e-4540-4f95-8ecf-58fe47f73376","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6be05caa-9781-4862-80e1-242d6cdee046","type":"Circle"},"selection_glyph":null,"view":{"id":"5d2cd387-6a5a-422a-9f1f-469af4e7abce","type":"CDSView"}},"id":"b85d1d8e-e20a-4ccf-b514-452256ebc72b","type":"GlyphRenderer"},{"attributes":{},"id":"2e1f7c13-3d98-4d03-84d0-bd3ac3991e35","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"110976e6-e49e-4829-bfb3-cf0e763a0675","type":"BasicTickFormatter"},"plot":{"id":"c4e88adc-85ed-4575-9f5f-c06faca21e75","subtype":"Figure","type":"Plot"},"ticker":{"id":"daabd3c4-ec78-40ec-b5aa-e0479a44b075","type":"BasicTicker"}},"id":"688ccdfc-35a6-4758-880c-b9d6f5530dc3","type":"LinearAxis"},{"attributes":{},"id":"d5d489ab-2eb0-4f15-bdb5-41ebc33fba59","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"cbfaadc8-d8cf-463b-a7eb-d79dee0d8a67","type":"Title"},{"attributes":{},"id":"389b2694-438d-46c0-a20b-748794318bc5","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6be05caa-9781-4862-80e1-242d6cdee046","type":"Circle"},{"attributes":{},"id":"1ed41033-8311-4186-84c3-1b6608087f59","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"0054f652-21e2-40f9-8068-a54c590bf289","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"2ca40d5a-3ae5-41d5-9d6d-a9b381bfbb3b","type":"Row"},{"id":"d12e8982-cf63-4ef9-8272-16dd1901881b","type":"Row"}]},"id":"de2a0617-09ea-425e-aad6-9c70445b1445","type":"Column"},{"attributes":{"formatter":{"id":"c0035bda-d34e-4507-bf4d-ea5169c6aff0","type":"BasicTickFormatter"},"plot":{"id":"cd268c45-ec4d-4991-9693-bcfa3bd38287","subtype":"Figure","type":"Plot"},"ticker":{"id":"c73b6c20-1717-4d15-83c1-04b12bc1592b","type":"BasicTicker"}},"id":"032cb541-1d55-4647-a2f8-31d987b0cb7e","type":"LinearAxis"},{"attributes":{},"id":"fdd66e15-b222-44f6-b21d-6ab18c415bc0","type":"SaveTool"},{"attributes":{"tools":[{"id":"4893eea4-4c72-497e-9a1c-1478f5d0ac71","type":"PanTool"},{"id":"47fad44a-c294-4999-bddc-8240ee6a585f","type":"WheelZoomTool"},{"id":"661677bc-2571-4c6f-8147-d01b043d39e4","type":"BoxZoomTool"},{"id":"14693c2b-ff1b-4c61-9949-57ee2b0a851c","type":"SaveTool"},{"id":"54683831-93e6-4b81-bf78-21221055eb38","type":"ResetTool"},{"id":"b31f608e-dd60-4963-a2fa-779ce259d2d6","type":"HelpTool"},{"id":"14654116-9ab5-4f94-9439-ac1f26194feb","type":"PanTool"},{"id":"cbe8f9c2-be39-4996-9edd-e822b27af718","type":"WheelZoomTool"},{"id":"f6fd6fa0-5d35-47a6-861b-863f1e107419","type":"BoxZoomTool"},{"id":"ac168b13-a995-4435-a861-6a3ffc3de346","type":"SaveTool"},{"id":"d5d489ab-2eb0-4f15-bdb5-41ebc33fba59","type":"ResetTool"},{"id":"1f826d70-c487-4455-9b57-9f78cd3f6d9c","type":"HelpTool"},{"id":"a1f3ef62-355a-4ed6-b013-75e76f5bfa14","type":"PanTool"},{"id":"23b5d3db-6177-4c71-96a6-ad7adf270406","type":"WheelZoomTool"},{"id":"4fd3f90d-0584-40c6-ab3d-2c641a2a440a","type":"BoxZoomTool"},{"id":"fdd66e15-b222-44f6-b21d-6ab18c415bc0","type":"SaveTool"},{"id":"389b2694-438d-46c0-a20b-748794318bc5","type":"ResetTool"},{"id":"f8644aa9-f4a2-4014-9afe-e1002742ccb2","type":"HelpTool"}]},"id":"0cfd8f19-2e9e-4f56-b7ec-7594aff2e6a7","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"4e4a766a-1b03-48ef-995f-350bc952c906","type":"BoxAnnotation"}},"id":"4fd3f90d-0584-40c6-ab3d-2c641a2a440a","type":"BoxZoomTool"},{"attributes":{},"id":"a1f3ef62-355a-4ed6-b013-75e76f5bfa14","type":"PanTool"},{"attributes":{"plot":{"id":"ccb006fb-4add-4793-83eb-2baa094d1e96","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ed41033-8311-4186-84c3-1b6608087f59","type":"BasicTicker"}},"id":"f3905383-4cc7-4c0f-8482-8ba1703a5d74","type":"Grid"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5e41c3f-1200-4edd-b1ea-f6f5deeb210b","type":"Square"},{"attributes":{"children":[{"id":"ccb006fb-4add-4793-83eb-2baa094d1e96","subtype":"Figure","type":"Plot"},{"id":"cd268c45-ec4d-4991-9693-bcfa3bd38287","subtype":"Figure","type":"Plot"}]},"id":"2ca40d5a-3ae5-41d5-9d6d-a9b381bfbb3b","type":"Row"},{"attributes":{"children":[{"id":"c4e88adc-85ed-4575-9f5f-c06faca21e75","subtype":"Figure","type":"Plot"}]},"id":"d12e8982-cf63-4ef9-8272-16dd1901881b","type":"Row"},{"attributes":{},"id":"14693c2b-ff1b-4c61-9949-57ee2b0a851c","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4e4a766a-1b03-48ef-995f-350bc952c906","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"1eb30257-c554-4d47-9aa8-f85543be2650","type":"ToolbarBox"},{"id":"de2a0617-09ea-425e-aad6-9c70445b1445","type":"Column"}]},"id":"03ab0aac-4a43-40d9-949a-958e349a9d71","type":"Column"},{"attributes":{},"id":"1f826d70-c487-4455-9b57-9f78cd3f6d9c","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4893eea4-4c72-497e-9a1c-1478f5d0ac71","type":"PanTool"},{"id":"47fad44a-c294-4999-bddc-8240ee6a585f","type":"WheelZoomTool"},{"id":"661677bc-2571-4c6f-8147-d01b043d39e4","type":"BoxZoomTool"},{"id":"14693c2b-ff1b-4c61-9949-57ee2b0a851c","type":"SaveTool"},{"id":"54683831-93e6-4b81-bf78-21221055eb38","type":"ResetTool"},{"id":"b31f608e-dd60-4963-a2fa-779ce259d2d6","type":"HelpTool"}]},"id":"43aa1da6-2a07-4eae-9d1b-dfa2bbeb8c24","type":"Toolbar"},{"attributes":{},"id":"23b5d3db-6177-4c71-96a6-ad7adf270406","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"b42085ef-4dea-49b0-8135-99f9ff5e347a","type":"ColumnDataSource"},"glyph":{"id":"7589ec93-9eee-4f24-83cb-f9c1761a290f","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5fbe73d5-c789-4254-a97d-3d2d60d3e54a","type":"Triangle"},"selection_glyph":null,"view":{"id":"5af84042-c919-41da-ac49-e82508601995","type":"CDSView"}},"id":"65aafd72-496b-4706-a76c-3264c181a567","type":"GlyphRenderer"},{"attributes":{},"id":"26e985cb-960e-435b-8011-be2f6a6b4de5","type":"BasicTickFormatter"},{"attributes":{},"id":"064b7961-9501-461a-bf42-c7aa5cbf5df2","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"53dec25d-c641-4cfd-83bc-33847d5c85a8","type":"BoxAnnotation"}},"id":"661677bc-2571-4c6f-8147-d01b043d39e4","type":"BoxZoomTool"},{"attributes":{},"id":"ac168b13-a995-4435-a861-6a3ffc3de346","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53dec25d-c641-4cfd-83bc-33847d5c85a8","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"d49fbe48-f728-4cbf-b823-79d07bd80415","type":"DataRange1d"},{"attributes":{"plot":{"id":"c4e88adc-85ed-4575-9f5f-c06faca21e75","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a30b610-7276-44a8-86f9-a87fcb5abd4c","type":"BasicTicker"}},"id":"9955f4ef-3c36-4b24-b4ad-9e94103ecae7","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"ccb006fb-4add-4793-83eb-2baa094d1e96","subtype":"Figure","type":"Plot"},"ticker":{"id":"25ba3f82-3c25-481a-b7e9-af02e4f06da0","type":"BasicTicker"}},"id":"a47dd245-fa7b-4103-b69d-4be05487c21c","type":"Grid"},{"attributes":{"overlay":{"id":"3aa402a3-d636-4972-a664-4fdffb1e099d","type":"BoxAnnotation"}},"id":"f6fd6fa0-5d35-47a6-861b-863f1e107419","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"deacc1a7-8f33-4827-ab19-2056e1763b76","type":"Title"},{"attributes":{"formatter":{"id":"4bd63059-5de4-4d3a-b4ba-f3a4046bfdea","type":"BasicTickFormatter"},"plot":{"id":"ccb006fb-4add-4793-83eb-2baa094d1e96","subtype":"Figure","type":"Plot"},"ticker":{"id":"25ba3f82-3c25-481a-b7e9-af02e4f06da0","type":"BasicTicker"}},"id":"fc8eee0a-9ed3-41e2-8d73-305ee4dc8303","type":"LinearAxis"},{"attributes":{"below":[{"id":"358a0ab6-0f42-4616-af76-d5d9f49b644c","type":"LinearAxis"}],"left":[{"id":"032cb541-1d55-4647-a2f8-31d987b0cb7e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"358a0ab6-0f42-4616-af76-d5d9f49b644c","type":"LinearAxis"},{"id":"e67859b8-a563-43f3-8d2c-daa37bad4c8d","type":"Grid"},{"id":"032cb541-1d55-4647-a2f8-31d987b0cb7e","type":"LinearAxis"},{"id":"f51488f6-13a1-4d7d-af85-892a367aec28","type":"Grid"},{"id":"3aa402a3-d636-4972-a664-4fdffb1e099d","type":"BoxAnnotation"},{"id":"65aafd72-496b-4706-a76c-3264c181a567","type":"GlyphRenderer"}],"title":{"id":"deacc1a7-8f33-4827-ab19-2056e1763b76","type":"Title"},"toolbar":{"id":"8eb4eaba-927f-4279-8d41-7d4e5bf22fb7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c88fa681-e282-4285-9954-0bfb5aa77378","type":"DataRange1d"},"x_scale":{"id":"978f541c-aec2-4c4e-91b4-3afac7905c34","type":"LinearScale"},"y_range":{"id":"81a076d1-01d2-49df-b598-b84e4ddc1a9d","type":"DataRange1d"},"y_scale":{"id":"7811fb3c-7b0e-48b1-bf9c-c6ceb8f64f78","type":"LinearScale"}},"id":"cd268c45-ec4d-4991-9693-bcfa3bd38287","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"b42085ef-4dea-49b0-8135-99f9ff5e347a","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a1f3ef62-355a-4ed6-b013-75e76f5bfa14","type":"PanTool"},{"id":"23b5d3db-6177-4c71-96a6-ad7adf270406","type":"WheelZoomTool"},{"id":"4fd3f90d-0584-40c6-ab3d-2c641a2a440a","type":"BoxZoomTool"},{"id":"fdd66e15-b222-44f6-b21d-6ab18c415bc0","type":"SaveTool"},{"id":"389b2694-438d-46c0-a20b-748794318bc5","type":"ResetTool"},{"id":"f8644aa9-f4a2-4014-9afe-e1002742ccb2","type":"HelpTool"}]},"id":"adaa18c0-cff5-4731-95e4-a2e9f5f60e83","type":"Toolbar"},{"attributes":{},"id":"47fad44a-c294-4999-bddc-8240ee6a585f","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3aa402a3-d636-4972-a664-4fdffb1e099d","type":"BoxAnnotation"},{"attributes":{},"id":"f99dcbb5-0f40-484a-8ff3-daa1b2c545b0","type":"BasicTicker"},{"attributes":{"source":{"id":"0054f652-21e2-40f9-8068-a54c590bf289","type":"ColumnDataSource"}},"id":"3ca8e327-7a31-4af3-95ba-192219074289","type":"CDSView"},{"attributes":{},"id":"85dbb9d3-f56d-4daf-a016-babdafb9a033","type":"LinearScale"},{"attributes":{"formatter":{"id":"2e1f7c13-3d98-4d03-84d0-bd3ac3991e35","type":"BasicTickFormatter"},"plot":{"id":"c4e88adc-85ed-4575-9f5f-c06faca21e75","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a30b610-7276-44a8-86f9-a87fcb5abd4c","type":"BasicTicker"}},"id":"fd039d48-6630-4459-a64e-5233c53256c5","type":"LinearAxis"},{"attributes":{},"id":"4bd63059-5de4-4d3a-b4ba-f3a4046bfdea","type":"BasicTickFormatter"},{"attributes":{},"id":"e02779ec-4fee-4bf6-9b16-d7758620357d","type":"LinearScale"},{"attributes":{"below":[{"id":"fd039d48-6630-4459-a64e-5233c53256c5","type":"LinearAxis"}],"left":[{"id":"688ccdfc-35a6-4758-880c-b9d6f5530dc3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"fd039d48-6630-4459-a64e-5233c53256c5","type":"LinearAxis"},{"id":"9955f4ef-3c36-4b24-b4ad-9e94103ecae7","type":"Grid"},{"id":"688ccdfc-35a6-4758-880c-b9d6f5530dc3","type":"LinearAxis"},{"id":"bc820326-a8c2-4120-8ce8-f4b5cbfa1d5b","type":"Grid"},{"id":"4e4a766a-1b03-48ef-995f-350bc952c906","type":"BoxAnnotation"},{"id":"5c6bcf4e-1e48-469c-a9a3-ea06c4b9e783","type":"GlyphRenderer"}],"title":{"id":"cbfaadc8-d8cf-463b-a7eb-d79dee0d8a67","type":"Title"},"toolbar":{"id":"adaa18c0-cff5-4731-95e4-a2e9f5f60e83","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"38a31260-9974-4fb9-9e71-05cb33a6d9a4","type":"DataRange1d"},"x_scale":{"id":"e02779ec-4fee-4bf6-9b16-d7758620357d","type":"LinearScale"},"y_range":{"id":"86e93376-76f1-4d9f-a5de-2548f7c6ca57","type":"DataRange1d"},"y_scale":{"id":"85dbb9d3-f56d-4daf-a016-babdafb9a033","type":"LinearScale"}},"id":"c4e88adc-85ed-4575-9f5f-c06faca21e75","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"86e93376-76f1-4d9f-a5de-2548f7c6ca57","type":"DataRange1d"}],"root_ids":["03ab0aac-4a43-40d9-949a-958e349a9d71"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"5875d268-fb76-4dfd-b9c0-a98152a326ba","elementid":"d50e3d7f-dff6-419d-9a98-197d9d88fcca","modelid":"03ab0aac-4a43-40d9-949a-958e349a9d71"}];
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