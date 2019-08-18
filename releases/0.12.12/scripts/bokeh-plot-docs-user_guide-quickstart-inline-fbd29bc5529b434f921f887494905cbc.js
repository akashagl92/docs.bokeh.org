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
      };var element = document.getElementById("4455b658-08a5-4958-ab3f-628bd4958e75");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4455b658-08a5-4958-ab3f-628bd4958e75' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4a7942a4-5257-4a1a-8f8b-b7faf7521d43":{"roots":{"references":[{"attributes":{"below":[{"id":"e981a6ad-cb3e-4d36-8b0f-8e4ebe084039","type":"LinearAxis"}],"left":[{"id":"fa5c8d57-4252-4637-a1f6-3d26c117959f","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e981a6ad-cb3e-4d36-8b0f-8e4ebe084039","type":"LinearAxis"},{"id":"5e81d589-86d3-4162-a7a3-daee69e889d1","type":"Grid"},{"id":"fa5c8d57-4252-4637-a1f6-3d26c117959f","type":"LinearAxis"},{"id":"020f9157-0312-4066-8755-fbecb1bda01d","type":"Grid"},{"id":"244691ec-aabd-4108-9bf7-7210f21cff9b","type":"BoxAnnotation"},{"id":"af1247e5-b9a4-42fe-928b-9f7d1bd14da4","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"05b271d1-8e64-4bb8-a4e9-6e332b7c3333","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"85a40dfd-54c4-4873-a06a-e6075d6e733f","type":"DataRange1d"},"x_scale":{"id":"0b1fb21f-11b7-451d-8a69-038e8a3a5575","type":"LinearScale"},"y_range":{"id":"3eafdaf4-c5cd-4254-a036-660479d7e7aa","type":"DataRange1d"},"y_scale":{"id":"ece48810-19ca-4493-962e-dc9f5b6649fd","type":"LinearScale"}},"id":"7b4a3420-38da-4933-9d95-712fb06e7818","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"a3b84957-e9d4-4b79-9f99-bb346b127805","subtype":"Figure","type":"Plot"},"ticker":{"id":"b13710d2-2798-401a-933d-5343ea876397","type":"BasicTicker"}},"id":"ac448790-2751-4142-be2d-c22b483e8877","type":"Grid"},{"attributes":{},"id":"6734ea1f-2251-4129-a54b-10a7b076ac56","type":"BasicTickFormatter"},{"attributes":{},"id":"7c3d20f8-b0a1-47d2-bd0a-ba3f3f39b406","type":"BasicTickFormatter"},{"attributes":{},"id":"f27035e7-3129-4838-bf07-ee03e3f80787","type":"WheelZoomTool"},{"attributes":{},"id":"1e184473-99d7-447d-91bf-52d854319150","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc54d989-760c-4d05-814a-0530d8667015","type":"Circle"},{"attributes":{},"id":"7361365c-0624-48ab-bc83-6585b7490ba5","type":"BasicTickFormatter"},{"attributes":{},"id":"79ba56aa-1293-4855-a7f0-31c828dcfcaf","type":"ResetTool"},{"attributes":{"children":[{"id":"7b4a3420-38da-4933-9d95-712fb06e7818","subtype":"Figure","type":"Plot"},{"id":"a3b84957-e9d4-4b79-9f99-bb346b127805","subtype":"Figure","type":"Plot"},{"id":"a643a66a-44e2-4d49-b83e-ffac0f2e38ce","subtype":"Figure","type":"Plot"}]},"id":"dbaba79e-825d-4580-9e90-0fc10b7e02f7","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"abf00b4a-6151-409b-b3dd-cfd7fc970080","type":"BoxAnnotation"},{"attributes":{},"id":"d0682c8e-04a6-4fc8-a6c2-f4061a8125e1","type":"SaveTool"},{"attributes":{"formatter":{"id":"7361365c-0624-48ab-bc83-6585b7490ba5","type":"BasicTickFormatter"},"plot":{"id":"a3b84957-e9d4-4b79-9f99-bb346b127805","subtype":"Figure","type":"Plot"},"ticker":{"id":"21fb3699-c564-4135-b71c-02789915f2d0","type":"BasicTicker"}},"id":"2bfb3a73-a5db-451e-bbff-ef660ffb49a4","type":"LinearAxis"},{"attributes":{"plot":{"id":"a643a66a-44e2-4d49-b83e-ffac0f2e38ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"0669ce18-ca0b-4b2c-bdc5-6443cfae68c2","type":"BasicTicker"}},"id":"a21262fd-2a3c-42c9-9bcf-d50f797e19ab","type":"Grid"},{"attributes":{},"id":"9d669dfb-7945-4e18-b118-35cc3957fbc4","type":"SaveTool"},{"attributes":{"callback":null},"id":"3eafdaf4-c5cd-4254-a036-660479d7e7aa","type":"DataRange1d"},{"attributes":{"source":{"id":"97317607-9cbb-4cf7-b94b-d7b9c7c75fc4","type":"ColumnDataSource"}},"id":"f98b1a5a-2af0-4e04-9250-fb3e5977e078","type":"CDSView"},{"attributes":{},"id":"1178529f-34ad-4167-835a-ab1d5886983b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1178529f-34ad-4167-835a-ab1d5886983b","type":"PanTool"},{"id":"3a2a8b0e-443d-46c7-b4e4-507ce00df520","type":"WheelZoomTool"},{"id":"fe310440-b0e0-4f5c-a9e4-f4b3b4deabc0","type":"BoxZoomTool"},{"id":"9d669dfb-7945-4e18-b118-35cc3957fbc4","type":"SaveTool"},{"id":"a30bb100-a7eb-4099-a0bb-daf8ac0b4d41","type":"ResetTool"},{"id":"369e011a-24b6-4c0d-b9e1-1bf01c952361","type":"HelpTool"}]},"id":"e7a73beb-0b27-4fdd-a598-662aa4e7e844","type":"Toolbar"},{"attributes":{"formatter":{"id":"7c3d20f8-b0a1-47d2-bd0a-ba3f3f39b406","type":"BasicTickFormatter"},"plot":{"id":"a643a66a-44e2-4d49-b83e-ffac0f2e38ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e184473-99d7-447d-91bf-52d854319150","type":"BasicTicker"}},"id":"8cbb165d-361a-4808-a7b2-a804b2c6cab3","type":"LinearAxis"},{"attributes":{},"id":"a30bb100-a7eb-4099-a0bb-daf8ac0b4d41","type":"ResetTool"},{"attributes":{},"id":"8c28d83e-aa7e-41a6-b204-c1f9fa38f4d4","type":"PanTool"},{"attributes":{},"id":"5649d0a5-64e7-4280-990c-2260da782135","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"abf00b4a-6151-409b-b3dd-cfd7fc970080","type":"BoxAnnotation"}},"id":"fe310440-b0e0-4f5c-a9e4-f4b3b4deabc0","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8152a716-dad4-4e69-ab08-970587330373","type":"BoxAnnotation"},{"attributes":{"source":{"id":"81d9c5d5-5b0c-4647-8ac5-e018e9a2aff7","type":"ColumnDataSource"}},"id":"43c66135-812a-417b-a70f-61a8c8b1be0e","type":"CDSView"},{"attributes":{},"id":"369e011a-24b6-4c0d-b9e1-1bf01c952361","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8c28d83e-aa7e-41a6-b204-c1f9fa38f4d4","type":"PanTool"},{"id":"3425a0c6-1d87-43d5-8c75-5ca934fd19cc","type":"WheelZoomTool"},{"id":"a642d9e0-d754-43ff-80b9-dddf508bd2f6","type":"BoxZoomTool"},{"id":"d0682c8e-04a6-4fc8-a6c2-f4061a8125e1","type":"SaveTool"},{"id":"79ba56aa-1293-4855-a7f0-31c828dcfcaf","type":"ResetTool"},{"id":"e6048860-0eed-41c5-8ede-ac60b77c7753","type":"HelpTool"}]},"id":"180aec14-2153-469d-971b-3043946a5ff5","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d19ea94-df7b-485c-b843-470d7b8dce65","type":"Circle"},{"attributes":{},"id":"e6048860-0eed-41c5-8ede-ac60b77c7753","type":"HelpTool"},{"attributes":{},"id":"b13710d2-2798-401a-933d-5343ea876397","type":"BasicTicker"},{"attributes":{},"id":"a9ccec77-487e-44b5-b3c7-d6b7725b78fd","type":"ResetTool"},{"attributes":{"overlay":{"id":"8152a716-dad4-4e69-ab08-970587330373","type":"BoxAnnotation"}},"id":"a642d9e0-d754-43ff-80b9-dddf508bd2f6","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"1c0e9de0-40f3-4bea-9294-e1b3bd54b996","type":"BasicTickFormatter"},"plot":{"id":"a3b84957-e9d4-4b79-9f99-bb346b127805","subtype":"Figure","type":"Plot"},"ticker":{"id":"b13710d2-2798-401a-933d-5343ea876397","type":"BasicTicker"}},"id":"ef372aca-ff04-40bc-8c2c-7cdaeb7e9970","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3330fe2f-6149-42b0-a922-2bba32a2ef9c","type":"Triangle"},{"attributes":{"source":{"id":"6d1d9e34-8ce3-4a8f-8899-da76a6be1be0","type":"ColumnDataSource"}},"id":"b67350c7-bfde-4d81-80c6-7630f25521d3","type":"CDSView"},{"attributes":{},"id":"fddac692-ce59-4509-b014-f9781d31c40c","type":"PanTool"},{"attributes":{},"id":"36bcdb79-8b7d-48f9-9d67-08f187abb011","type":"LinearScale"},{"attributes":{"data_source":{"id":"81d9c5d5-5b0c-4647-8ac5-e018e9a2aff7","type":"ColumnDataSource"},"glyph":{"id":"3330fe2f-6149-42b0-a922-2bba32a2ef9c","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cbe0fbe9-77b1-4ae7-be34-ae11371df4c2","type":"Triangle"},"selection_glyph":null,"view":{"id":"43c66135-812a-417b-a70f-61a8c8b1be0e","type":"CDSView"}},"id":"61b81aae-2ce1-4135-a3a3-a8d2340b05ec","type":"GlyphRenderer"},{"attributes":{},"id":"5e366c64-ace3-447b-9201-1520aa25bd9b","type":"HelpTool"},{"attributes":{},"id":"99f4e0a3-968c-4e03-a52a-4db05d7c965f","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"244691ec-aabd-4108-9bf7-7210f21cff9b","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cbe0fbe9-77b1-4ae7-be34-ae11371df4c2","type":"Triangle"},{"attributes":{"plot":{"id":"7b4a3420-38da-4933-9d95-712fb06e7818","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b762ce3-79d5-4190-958c-74fe804fe6a2","type":"BasicTicker"}},"id":"5e81d589-86d3-4162-a7a3-daee69e889d1","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D9o+gYFGL7vPyN/Fo5v+e4/XLHeqjC17T9foQT4kvbrP1YykSHGxOk/tDkVSdQo5z9AE3HJfC3kP1wsoPEH3+A/thLH2SiW2j9bQ2NRvgDTP4xzC34aOsY/cyCwKKhcqD8MyeikuUm0v0/eq9oaN8q/PSGBd67u1L+LyZhelmvcv8/m3JG2ueG/hlh3f5705L9dUsfUNNnnv10cd/2OW+q/wfLvCVdx7L8bLVJC9hHuv0PyRoe4Nu+/XjTx7ufa778HB0As4PvvvwQ9tXAZme+/V1DNmyq07r/ZTwivwlDtv4lZi6GZdOu/JeDa0Vgn6b/aPrV2e3Lmv8y0DJEnYeO/+f//////3783i/Tn4LnYv4yAwi7oDdG/3kQPZF83wr9U+ijPKj+QvxHsuGvkX7w/k1rgSlktzj+GU4hOOdfWP1m1P3WwOd4/AasNgtOP4j+XUJVeWbblPzdQz6Jvg+g/uvBkh4zr6j99NRQyxuTsP/FJcov7Zu4/Juk3u/Vr7z+VSynBge/vP5RLKcGB7+8/Jek3u/Vr7z/vSXKL+2buP381FDLG5Ow/uPBkh4zr6j86UM+ib4PoP5RQlV5ZtuU/BasNgtOP4j9TtT91sDneP45TiE4519Y/hVrgSlktzj807Lhr5F+8P8f6KM8qP5C/zUQPZF83wr+TgMIu6A3Rvy+L9Ofgudi/BwAAAAAA4L/PtAyRJ2Hjv9k+tXZ7cua/I+Da0Vgn6b+NWYuhmXTrv9pPCK/CUO2/V1DNmyq07r8DPbVwGZnvvwgHQCzg+++/XjTx7ufa779E8kaHuDbvvx4tUkL2Ee6/wPLvCVdx7L9dHHf9jlvqv2BSx9Q02ee/gVh3f5705L/M5tyRtrnhv4zJmF6Wa9y/RSGBd67u1L8x3qvaGjfKv/DI6KS5SbS/bSCwKKhcqD9zcwt+GjrGP2ZDY1G+ANM/uRLH2SiW2j9aLKDxB9/gPzsTccl8LeQ/uDkVSdQo5z9WMpEhxsTpP16hBPiS9us/X7HeqjC17T8kfxaOb/nuP2j6BgUYvu8/AAAAAAAA8D8=","dtype":"float64","shape":[100]}}},"id":"81d9c5d5-5b0c-4647-8ac5-e018e9a2aff7","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"2bfb3a73-a5db-451e-bbff-ef660ffb49a4","type":"LinearAxis"}],"left":[{"id":"ef372aca-ff04-40bc-8c2c-7cdaeb7e9970","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"2bfb3a73-a5db-451e-bbff-ef660ffb49a4","type":"LinearAxis"},{"id":"e878366d-2bb9-47b9-be89-1f85d95203c8","type":"Grid"},{"id":"ef372aca-ff04-40bc-8c2c-7cdaeb7e9970","type":"LinearAxis"},{"id":"ac448790-2751-4142-be2d-c22b483e8877","type":"Grid"},{"id":"8152a716-dad4-4e69-ab08-970587330373","type":"BoxAnnotation"},{"id":"61b81aae-2ce1-4135-a3a3-a8d2340b05ec","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"180aec14-2153-469d-971b-3043946a5ff5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"85a40dfd-54c4-4873-a06a-e6075d6e733f","type":"DataRange1d"},"x_scale":{"id":"b05dbc73-8190-4e08-b344-0a7390c7bd93","type":"LinearScale"},"y_range":{"id":"3eafdaf4-c5cd-4254-a036-660479d7e7aa","type":"DataRange1d"},"y_scale":{"id":"99f4e0a3-968c-4e03-a52a-4db05d7c965f","type":"LinearScale"}},"id":"a3b84957-e9d4-4b79-9f99-bb346b127805","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"86a4b4a6-f72d-4dfc-b67c-5c9c86099329","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"57e89918-3c63-4b99-a24f-59cea2a8aac8","type":"Square"},{"attributes":{},"id":"0816f9df-bc45-4959-80fd-72215de8901e","type":"LinearScale"},{"attributes":{},"id":"b05dbc73-8190-4e08-b344-0a7390c7bd93","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"7b4a3420-38da-4933-9d95-712fb06e7818","subtype":"Figure","type":"Plot"},"ticker":{"id":"86a4b4a6-f72d-4dfc-b67c-5c9c86099329","type":"BasicTicker"}},"id":"020f9157-0312-4066-8755-fbecb1bda01d","type":"Grid"},{"attributes":{},"id":"a704847a-5f9d-45b7-b6d6-11636daf7b24","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D+yzYPRkeXxP7ihgYdrgfM/rb0yquzM9D/245G2v8L1P87bFRfwXvY/2iiqbvqe9j/kKcny1oH2P2p9E6r9B/Y/t9rofWQz9T/V4vYmdwf0P338ARYJifI/RdfykkG+8D9ETRXIBF3tPyugTMuSxOg/JsOhHxvG4z8XRefmX+zcP4TfmO5l1dE/2IAW3tnTuT9QVAYbRxi0v26sY4ZobNC/kDyhvhiP278fJw0IIiDjv8rnndrvKei/4klI9jTQ7L9i6ms85X/wvyB3ITG5U/K/nEtETQ/c879kyJx6lxL1v3a2nZlS8vW/jCxGFqd39r9Ikzy8b6D2v7IbDo0EbPa/VCYsdD3b9b+XNIXNbvD0vyX2CM1fr/O/Ewqe7jod8r/hQKSueEDwv7KoVMWJQey/OkhCQL6N57//x2pm7XjivwmD/egKMNq/WFreULgEzr/gjtyf0basv8DQmYTCjb8/YDFTHT090z9zKk7fyUfePwQ64frNauQ/Br4PG51d6T/UmpIn8OftPyz+X62J+/A/JAqwLSe98j/wrAGOlDH0P9+qQLrTUvU/YiQQQD0c9j8qs4V6k4r2Pw41lOsPnPY/TXYpjGpQ9j9uO9/02qj1P8SNeVoTqPQ/wTrZcjVS8z/dcSFwwazxPxnyVbD+fO8/vXE0K8Ye6z+6a09r11DmP/7dFbP8JuE/QJmw0PVs1z8YNwvg51bIP4A3qsMi+oY/tJyl3I19xb9gjLYfHAnWv+4O12hWfOC/dgkSnTaw5b/Eiyd/wIrqv1M5qN/19+6/bg/Nc81y8b9c/veZwCHzv4mZSz7lgfS/nqNH2pCN9b9BMd7bdED2vxjtFmOwl/a/lMBYHdyR9r+wHoMNEC/2vww2BinjcPW/M3KRy2Ra9L+mR1EcEPDyv8K/p5i5N/G/fKrPIO5w7r87P/7sBPXpv0iCivwvDuW/bUUVRECh3788RM3h1qPUv0S1wErRosK/wBtiTTs7oT9AtNpTsC7LP531ygVNz9g/audXAYjQ4T/buikNCPDmP2xZBmcMses//P//////7z8=","dtype":"float64","shape":[100]}}},"id":"6d1d9e34-8ce3-4a8f-8899-da76a6be1be0","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"a643a66a-44e2-4d49-b83e-ffac0f2e38ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e184473-99d7-447d-91bf-52d854319150","type":"BasicTicker"}},"id":"d48dff42-ef60-4da6-b518-a03f167032ab","type":"Grid"},{"attributes":{"formatter":{"id":"6734ea1f-2251-4129-a54b-10a7b076ac56","type":"BasicTickFormatter"},"plot":{"id":"a643a66a-44e2-4d49-b83e-ffac0f2e38ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"0669ce18-ca0b-4b2c-bdc5-6443cfae68c2","type":"BasicTicker"}},"id":"d52cb25e-42d0-42e3-81ec-ba8ec3b61c33","type":"LinearAxis"},{"attributes":{"plot":{"id":"a3b84957-e9d4-4b79-9f99-bb346b127805","subtype":"Figure","type":"Plot"},"ticker":{"id":"21fb3699-c564-4135-b71c-02789915f2d0","type":"BasicTicker"}},"id":"e878366d-2bb9-47b9-be89-1f85d95203c8","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"97317607-9cbb-4cf7-b94b-d7b9c7c75fc4","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"244691ec-aabd-4108-9bf7-7210f21cff9b","type":"BoxAnnotation"}},"id":"b41f310b-edf9-433a-9bed-7c37eaa39ede","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a453100-e250-4dd6-8b1e-7d5344ca0bd3","type":"Square"},{"attributes":{},"id":"3425a0c6-1d87-43d5-8c75-5ca934fd19cc","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"6d1d9e34-8ce3-4a8f-8899-da76a6be1be0","type":"ColumnDataSource"},"glyph":{"id":"57e89918-3c63-4b99-a24f-59cea2a8aac8","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4a453100-e250-4dd6-8b1e-7d5344ca0bd3","type":"Square"},"selection_glyph":null,"view":{"id":"b67350c7-bfde-4d81-80c6-7630f25521d3","type":"CDSView"}},"id":"9e6f438c-f5bf-4eb2-a876-ed3f6ddd30f8","type":"GlyphRenderer"},{"attributes":{},"id":"1c0e9de0-40f3-4bea-9294-e1b3bd54b996","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"97317607-9cbb-4cf7-b94b-d7b9c7c75fc4","type":"ColumnDataSource"},"glyph":{"id":"bc54d989-760c-4d05-814a-0530d8667015","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3d19ea94-df7b-485c-b843-470d7b8dce65","type":"Circle"},"selection_glyph":null,"view":{"id":"f98b1a5a-2af0-4e04-9250-fb3e5977e078","type":"CDSView"}},"id":"af1247e5-b9a4-42fe-928b-9f7d1bd14da4","type":"GlyphRenderer"},{"attributes":{},"id":"0669ce18-ca0b-4b2c-bdc5-6443cfae68c2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"76f4ae9d-7a41-4238-9be5-75c1f7b627d2","type":"DataRange1d"},{"attributes":{"formatter":{"id":"5649d0a5-64e7-4280-990c-2260da782135","type":"BasicTickFormatter"},"plot":{"id":"7b4a3420-38da-4933-9d95-712fb06e7818","subtype":"Figure","type":"Plot"},"ticker":{"id":"86a4b4a6-f72d-4dfc-b67c-5c9c86099329","type":"BasicTicker"}},"id":"fa5c8d57-4252-4637-a1f6-3d26c117959f","type":"LinearAxis"},{"attributes":{},"id":"3a2a8b0e-443d-46c7-b4e4-507ce00df520","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"dbaba79e-825d-4580-9e90-0fc10b7e02f7","type":"Row"}]},"id":"e57c1681-0ee1-4b5e-b2f5-0435677330c1","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fddac692-ce59-4509-b014-f9781d31c40c","type":"PanTool"},{"id":"f27035e7-3129-4838-bf07-ee03e3f80787","type":"WheelZoomTool"},{"id":"b41f310b-edf9-433a-9bed-7c37eaa39ede","type":"BoxZoomTool"},{"id":"c0338bea-609b-45c4-93a2-2af189670df6","type":"SaveTool"},{"id":"a9ccec77-487e-44b5-b3c7-d6b7725b78fd","type":"ResetTool"},{"id":"5e366c64-ace3-447b-9201-1520aa25bd9b","type":"HelpTool"}]},"id":"05b271d1-8e64-4bb8-a4e9-6e332b7c3333","type":"Toolbar"},{"attributes":{"below":[{"id":"d52cb25e-42d0-42e3-81ec-ba8ec3b61c33","type":"LinearAxis"}],"left":[{"id":"8cbb165d-361a-4808-a7b2-a804b2c6cab3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d52cb25e-42d0-42e3-81ec-ba8ec3b61c33","type":"LinearAxis"},{"id":"a21262fd-2a3c-42c9-9bcf-d50f797e19ab","type":"Grid"},{"id":"8cbb165d-361a-4808-a7b2-a804b2c6cab3","type":"LinearAxis"},{"id":"d48dff42-ef60-4da6-b518-a03f167032ab","type":"Grid"},{"id":"abf00b4a-6151-409b-b3dd-cfd7fc970080","type":"BoxAnnotation"},{"id":"9e6f438c-f5bf-4eb2-a876-ed3f6ddd30f8","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"e7a73beb-0b27-4fdd-a598-662aa4e7e844","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"85a40dfd-54c4-4873-a06a-e6075d6e733f","type":"DataRange1d"},"x_scale":{"id":"36bcdb79-8b7d-48f9-9d67-08f187abb011","type":"LinearScale"},"y_range":{"id":"76f4ae9d-7a41-4238-9be5-75c1f7b627d2","type":"DataRange1d"},"y_scale":{"id":"0816f9df-bc45-4959-80fd-72215de8901e","type":"LinearScale"}},"id":"a643a66a-44e2-4d49-b83e-ffac0f2e38ce","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ece48810-19ca-4493-962e-dc9f5b6649fd","type":"LinearScale"},{"attributes":{"callback":null},"id":"85a40dfd-54c4-4873-a06a-e6075d6e733f","type":"DataRange1d"},{"attributes":{},"id":"0b1fb21f-11b7-451d-8a69-038e8a3a5575","type":"LinearScale"},{"attributes":{"formatter":{"id":"a704847a-5f9d-45b7-b6d6-11636daf7b24","type":"BasicTickFormatter"},"plot":{"id":"7b4a3420-38da-4933-9d95-712fb06e7818","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b762ce3-79d5-4190-958c-74fe804fe6a2","type":"BasicTicker"}},"id":"e981a6ad-cb3e-4d36-8b0f-8e4ebe084039","type":"LinearAxis"},{"attributes":{},"id":"c0338bea-609b-45c4-93a2-2af189670df6","type":"SaveTool"},{"attributes":{},"id":"21fb3699-c564-4135-b71c-02789915f2d0","type":"BasicTicker"},{"attributes":{},"id":"6b762ce3-79d5-4190-958c-74fe804fe6a2","type":"BasicTicker"}],"root_ids":["e57c1681-0ee1-4b5e-b2f5-0435677330c1"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"4a7942a4-5257-4a1a-8f8b-b7faf7521d43","elementid":"4455b658-08a5-4958-ab3f-628bd4958e75","modelid":"e57c1681-0ee1-4b5e-b2f5-0435677330c1"}];
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