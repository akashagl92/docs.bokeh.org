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
      };var element = document.getElementById("567ff472-7774-4fca-b53d-df07b109003b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '567ff472-7774-4fca-b53d-df07b109003b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b7886446-0846-4965-aa6b-b32b24041aed":{"roots":{"references":[{"attributes":{},"id":"e37dafb3-f961-46f3-85d5-70140c925d47","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_width"}},"id":"d680c985-b11c-42d0-8309-bed1f33b7414","type":"Circle"},{"attributes":{},"id":"df5a15dd-1cca-46c6-9c09-2dc6809d593c","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"a7006b01-bd11-4377-9364-8849fc35c9b0","type":"Title"},{"attributes":{},"id":"c861ada7-3234-42e8-ae3c-a64cfa239b50","type":"LinearScale"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"d680c985-b11c-42d0-8309-bed1f33b7414","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5e7de0c6-28e7-4c3d-bc74-986f6c98b88c","type":"CDSView"}},"id":"399d9829-578d-4d6e-872c-3748d3a8f52c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"71301530-f9fa-43bb-acbf-94e115c0e031","type":"Title"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"5e7de0c6-28e7-4c3d-bc74-986f6c98b88c","type":"CDSView"},{"attributes":{},"id":"2c93c464-ad79-46a2-8fbe-65a3a6cf6c14","type":"LinearScale"},{"attributes":{},"id":"17c8d78a-7fc2-4d80-8bae-c30a15c6990d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a452f229-916c-43ef-8f7e-381c6e1fa164","type":"BasicTickFormatter"},"plot":{"id":"2f369c3d-d525-44f9-b78f-f3596214ea2b","type":"Plot"},"ticker":{"id":"84ee2f57-9bc0-46d9-a54a-d2c59ce2d590","type":"BasicTicker"}},"id":"59dfb958-edbe-4ace-a682-7c46a8e80665","type":"LinearAxis"},{"attributes":{},"id":"7b059407-7f9e-427b-84f0-78c16fcf5d59","type":"LinearScale"},{"attributes":{},"id":"84ee2f57-9bc0-46d9-a54a-d2c59ce2d590","type":"BasicTicker"},{"attributes":{},"id":"1e74f291-5b7a-41b7-9545-f048a792af42","type":"LinearScale"},{"attributes":{"plot":{"id":"2f369c3d-d525-44f9-b78f-f3596214ea2b","type":"Plot"},"ticker":{"id":"17c8d78a-7fc2-4d80-8bae-c30a15c6990d","type":"BasicTicker"}},"id":"35e4fa26-f35d-4b72-b741-a14d000b95ac","type":"Grid"},{"attributes":{"children":[{"id":"2f369c3d-d525-44f9-b78f-f3596214ea2b","type":"Plot"},{"id":"b3b63ff9-b4c1-46a9-9f0f-50f83eb3eef1","type":"Plot"},{"id":"73078e81-2677-49c6-b440-140d9183cf1d","type":"Plot"},{"id":"fe0e6ee0-cef3-4575-ba88-2c972233f642","type":"Plot"}]},"id":"c65bb4d0-9cbe-45d0-8f61-ce85693fdead","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"2f369c3d-d525-44f9-b78f-f3596214ea2b","type":"Plot"},"ticker":{"id":"84ee2f57-9bc0-46d9-a54a-d2c59ce2d590","type":"BasicTicker"}},"id":"12e961ee-4f91-4366-b298-475076839510","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"fa7183cf-1fbb-413e-abf7-bf0983c2891f","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d537ac34-92e1-44e9-a960-0183c1ed4f09","type":"PanTool"},{"id":"c9c3a91b-3975-4eb8-a517-4f8c78f5a3d2","type":"WheelZoomTool"}]},"id":"a9c4e8b0-1d17-432f-ab14-697fa8641865","type":"Toolbar"},{"attributes":{},"id":"e68d134b-943a-4fd2-b007-ff5842335250","type":"WheelZoomTool"},{"attributes":{},"id":"a23822ff-430d-41cd-b3ea-0e3c4b6e2e60","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"9ac08de6-5dd3-4d46-979e-1824517d552c","type":"GlyphRenderer"},{"id":"6c2f7889-163f-4387-ac22-6a5fea06025d","type":"Grid"},{"id":"03e04e6f-51e9-4323-985e-40cdf55ce94e","type":"Grid"}],"title":{"id":"e005502a-feaf-481f-abe7-9c2cfded5066","type":"Title"},"toolbar":{"id":"a9c4e8b0-1d17-432f-ab14-697fa8641865","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"81c420f8-1da3-4959-a177-97bced726aef","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"9822d9f3-5605-4b82-b33b-b65847fdef73","type":"LinearScale"}},"id":"b3b63ff9-b4c1-46a9-9f0f-50f83eb3eef1","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"e005502a-feaf-481f-abe7-9c2cfded5066","type":"Title"},{"attributes":{},"id":"a452f229-916c-43ef-8f7e-381c6e1fa164","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_width"}},"id":"d265b496-5e7c-43c7-9f31-1930b5a539ea","type":"Circle"},{"attributes":{},"id":"9822d9f3-5605-4b82-b33b-b65847fdef73","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cfbff23a-6bbd-4732-88bc-e0a2b6523cef","type":"PanTool"},{"id":"cff0a6be-0e34-4bd3-b8ab-0f4d0544751b","type":"WheelZoomTool"}]},"id":"554bf893-7ab6-4e3e-a7b2-96474a33068e","type":"Toolbar"},{"attributes":{},"id":"b73bf12a-1398-4f47-8c80-4c3093db1a51","type":"LinearScale"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"d265b496-5e7c-43c7-9f31-1930b5a539ea","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"339e695a-14d8-4169-9f23-5f18f8ecbc29","type":"CDSView"}},"id":"9ac08de6-5dd3-4d46-979e-1824517d552c","type":"GlyphRenderer"},{"attributes":{},"id":"9587de10-1759-416d-ac16-f614b9ca3aec","type":"LinearScale"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"339e695a-14d8-4169-9f23-5f18f8ecbc29","type":"CDSView"},{"attributes":{},"id":"569d6e86-0197-42cb-9f63-285622fafde9","type":"LinearScale"},{"attributes":{},"id":"03eb122f-b2cc-40d6-b35d-9ace4d59e608","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b3b63ff9-b4c1-46a9-9f0f-50f83eb3eef1","type":"Plot"},"ticker":{"id":"4de3e8ba-2d20-4271-8331-ec0df05eb37f","type":"BasicTicker"}},"id":"03e04e6f-51e9-4323-985e-40cdf55ce94e","type":"Grid"},{"attributes":{},"id":"81c420f8-1da3-4959-a177-97bced726aef","type":"LinearScale"},{"attributes":{},"id":"d537ac34-92e1-44e9-a960-0183c1ed4f09","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"ccd7900b-34e1-4e1d-b658-345a5d29971d","type":"Title"},{"attributes":{"plot":{"id":"b3b63ff9-b4c1-46a9-9f0f-50f83eb3eef1","type":"Plot"},"ticker":{"id":"03eb122f-b2cc-40d6-b35d-9ace4d59e608","type":"BasicTicker"}},"id":"6c2f7889-163f-4387-ac22-6a5fea06025d","type":"Grid"},{"attributes":{},"id":"7336dcb0-f232-4c20-9679-34ed7b3494de","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"99400457-e735-46af-b293-be1ec405bacc","type":"Title"},{"attributes":{},"id":"4de3e8ba-2d20-4271-8331-ec0df05eb37f","type":"BasicTicker"},{"attributes":{},"id":"c9c3a91b-3975-4eb8-a517-4f8c78f5a3d2","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"80a38ea1-d38b-4e96-8bd5-75102542f0de","type":"GlyphRenderer"},{"id":"d7ee28e6-0c96-45d1-b2b0-4680682a0344","type":"Grid"},{"id":"81cc68f8-28e8-46e3-8e13-54db1ad74165","type":"Grid"}],"title":{"id":"ccd7900b-34e1-4e1d-b658-345a5d29971d","type":"Title"},"toolbar":{"id":"554bf893-7ab6-4e3e-a7b2-96474a33068e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"7336dcb0-f232-4c20-9679-34ed7b3494de","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"a23822ff-430d-41cd-b3ea-0e3c4b6e2e60","type":"LinearScale"}},"id":"73078e81-2677-49c6-b440-140d9183cf1d","type":"Plot"},{"attributes":{},"id":"bc21acb4-cdd5-4e7e-8dfe-368a895bfec8","type":"LinearScale"},{"attributes":{"children":[{"id":"e07c9265-897b-44c3-a160-89f44d45ae1a","type":"Plot"},{"id":"8f10b390-f8eb-4934-bd1d-d456d7872771","type":"Plot"},{"id":"05486693-6900-4b24-912d-6ae6e2962f6d","type":"Plot"},{"id":"cdcca3c7-cacb-4750-97e5-c2933b02e5be","type":"Plot"}]},"id":"f3e240bb-20ef-4e05-abcc-0f6dd05d0449","type":"Row"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_width"}},"id":"921ec7d7-0216-48e8-801e-dcbdb4756587","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9f951baf-cb1b-4829-bcf9-5408a068536b","type":"PanTool"},{"id":"50ed325a-9cb9-4e28-80ab-abf614cf68dc","type":"WheelZoomTool"}]},"id":"860e03ed-75cc-49b9-899a-4dd44dcb902a","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"b7189531-4e32-442f-b772-e502ad7cc040","type":"Title"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"921ec7d7-0216-48e8-801e-dcbdb4756587","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b6ce7184-a288-4d6d-9bed-4b4b227aecd4","type":"CDSView"}},"id":"80a38ea1-d38b-4e96-8bd5-75102542f0de","type":"GlyphRenderer"},{"attributes":{},"id":"d017b154-446b-4cd9-b0a6-c1086c17905b","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"2f826e6d-8432-4b4e-b655-50b21003eded","type":"Title"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"b6ce7184-a288-4d6d-9bed-4b4b227aecd4","type":"CDSView"},{"attributes":{},"id":"acafae99-ef5d-4b7b-ab8b-02757faeb8a0","type":"BasicTicker"},{"attributes":{},"id":"06d3829f-5984-4895-8324-16b769afeb62","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"73078e81-2677-49c6-b440-140d9183cf1d","type":"Plot"},"ticker":{"id":"797e66c9-509c-4caf-a080-2e7e864c864f","type":"BasicTicker"}},"id":"81cc68f8-28e8-46e3-8e13-54db1ad74165","type":"Grid"},{"attributes":{},"id":"e8478190-d560-4f59-bcaa-b48744095dda","type":"LinearScale"},{"attributes":{},"id":"cfbff23a-6bbd-4732-88bc-e0a2b6523cef","type":"PanTool"},{"attributes":{},"id":"a1092433-d6b2-4e80-a093-2cad83beeeac","type":"LinearScale"},{"attributes":{"plot":{"id":"73078e81-2677-49c6-b440-140d9183cf1d","type":"Plot"},"ticker":{"id":"acafae99-ef5d-4b7b-ab8b-02757faeb8a0","type":"BasicTicker"}},"id":"d7ee28e6-0c96-45d1-b2b0-4680682a0344","type":"Grid"},{"attributes":{},"id":"1e624fa5-4a11-4ad2-aa5f-54ef8e6beb2e","type":"LinearScale"},{"attributes":{},"id":"8b942bd1-232c-466f-aaaf-61049af348cd","type":"LinearScale"},{"attributes":{},"id":"797e66c9-509c-4caf-a080-2e7e864c864f","type":"BasicTicker"},{"attributes":{},"id":"cff0a6be-0e34-4bd3-b8ab-0f4d0544751b","type":"WheelZoomTool"},{"attributes":{},"id":"459c0b62-acb1-4a94-8f49-f8848a86e394","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"8d875989-199e-4344-99c0-4e8fe469d9de","type":"GlyphRenderer"},{"id":"5db12baa-c1a4-4bc2-9b4d-63837bfeb1fe","type":"Grid"},{"id":"57b15a95-3883-40db-95ff-69b63ec12e69","type":"Grid"}],"title":{"id":"99400457-e735-46af-b293-be1ec405bacc","type":"Title"},"toolbar":{"id":"860e03ed-75cc-49b9-899a-4dd44dcb902a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"bc21acb4-cdd5-4e7e-8dfe-368a895bfec8","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"9587de10-1759-416d-ac16-f614b9ca3aec","type":"LinearScale"}},"id":"fe0e6ee0-cef3-4575-ba88-2c972233f642","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"95e83df7-eee7-4e1d-a87b-bcff4579791c","type":"Title"},{"attributes":{},"id":"9d92b892-0efd-4589-83d8-7ef9763e8d1c","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_width"}},"id":"10977051-e2bd-429b-b696-587d2eb63980","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d0ab8fc3-a442-4fad-950e-1ab084789468","type":"PanTool"},{"id":"fe6aafb7-a8be-41c1-aa69-c4316ef941ea","type":"WheelZoomTool"}]},"id":"66c5b327-1dc9-4be1-b218-82a04f564c3a","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"331da514-c003-4375-9762-7a9bb381a387","type":"Title"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"10977051-e2bd-429b-b696-587d2eb63980","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23078704-6f9b-47d7-8b20-2e34a94541d5","type":"CDSView"}},"id":"8d875989-199e-4344-99c0-4e8fe469d9de","type":"GlyphRenderer"},{"attributes":{},"id":"6879a247-2b8a-4361-a774-cd1d2e29c099","type":"LinearScale"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"23078704-6f9b-47d7-8b20-2e34a94541d5","type":"CDSView"},{"attributes":{"children":[{"id":"b2015dcf-1409-44de-b037-138a481991e3","type":"Plot"},{"id":"f52532ea-70b0-4e90-9b00-b89369c9cbf5","type":"Plot"},{"id":"6644b175-8df8-420c-bacd-199003509f44","type":"Plot"},{"id":"205efaa6-2ab0-41fc-8b8c-307e700cd217","type":"Plot"}]},"id":"ccae9de1-3882-477c-b4c9-74fabf4b3394","type":"Row"},{"attributes":{},"id":"0a9ea8a2-de98-4076-a524-c8b4588e9855","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"fe0e6ee0-cef3-4575-ba88-2c972233f642","type":"Plot"},"ticker":{"id":"760534e1-d188-4462-a84d-5462cba750be","type":"BasicTicker"}},"id":"57b15a95-3883-40db-95ff-69b63ec12e69","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"d904eabe-731b-461f-86e5-59c85e646c3a","type":"Title"},{"attributes":{},"id":"9f951baf-cb1b-4829-bcf9-5408a068536b","type":"PanTool"},{"attributes":{},"id":"3edb52d2-ec49-484f-ad64-6b8021b71cad","type":"LinearScale"},{"attributes":{"plot":{"id":"fe0e6ee0-cef3-4575-ba88-2c972233f642","type":"Plot"},"ticker":{"id":"0a9ea8a2-de98-4076-a524-c8b4588e9855","type":"BasicTicker"}},"id":"5db12baa-c1a4-4bc2-9b4d-63837bfeb1fe","type":"Grid"},{"attributes":{},"id":"b68f30f4-ced0-476b-9534-cc8ff09ebc13","type":"BasicTickFormatter"},{"attributes":{},"id":"760534e1-d188-4462-a84d-5462cba750be","type":"BasicTicker"},{"attributes":{},"id":"338684ee-0faf-42dd-ab13-c273fa75594b","type":"BasicTickFormatter"},{"attributes":{},"id":"50ed325a-9cb9-4e28-80ab-abf614cf68dc","type":"WheelZoomTool"},{"attributes":{},"id":"73157916-fe62-436d-aa41-90889d113ba7","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"057d8ba8-2385-4d65-ace6-89cc6ec2c057","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"dde04d6b-db63-4ec2-90d4-5886e39e47f3","type":"GlyphRenderer"},{"id":"665bdbef-316e-44ea-baf5-c5447282f800","type":"Grid"},{"id":"057d8ba8-2385-4d65-ace6-89cc6ec2c057","type":"LinearAxis"},{"id":"345c71c1-d2b5-4f0c-bb9a-de10951cd5c7","type":"Grid"}],"title":{"id":"b7189531-4e32-442f-b772-e502ad7cc040","type":"Title"},"toolbar":{"id":"66c5b327-1dc9-4be1-b218-82a04f564c3a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"a1092433-d6b2-4e80-a093-2cad83beeeac","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"569d6e86-0197-42cb-9f63-285622fafde9","type":"LinearScale"}},"id":"e07c9265-897b-44c3-a160-89f44d45ae1a","type":"Plot"},{"attributes":{},"id":"1dab9795-1ba2-4597-89ef-75189367e020","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"88834c3a-6d09-4306-8fce-2c339af9c0e5","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"5c4129f3-8673-4c0d-a8d3-bacb259eb4b7","type":"Circle"},{"attributes":{},"id":"d0ab8fc3-a442-4fad-950e-1ab084789468","type":"PanTool"},{"attributes":{},"id":"323be5d9-dcbe-4745-a459-b4b81f15e1f8","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"5c4129f3-8673-4c0d-a8d3-bacb259eb4b7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8bcf2da7-e63b-4226-960c-2acdfb53fbda","type":"CDSView"}},"id":"dde04d6b-db63-4ec2-90d4-5886e39e47f3","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"9f1b74c3-d0ec-4a70-b7ee-ee1544d1ed4e","type":"Title"},{"attributes":{},"id":"a0809828-101d-485a-8f59-83ec8fe299ee","type":"LinearScale"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"8bcf2da7-e63b-4226-960c-2acdfb53fbda","type":"CDSView"},{"attributes":{},"id":"8b4822c0-320a-4577-8abc-63e5f8064bc2","type":"LinearScale"},{"attributes":{},"id":"c2b06f32-1031-444a-88e0-8e01acd5ee72","type":"BasicTicker"},{"attributes":{"formatter":{"id":"06d3829f-5984-4895-8324-16b769afeb62","type":"BasicTickFormatter"},"plot":{"id":"e07c9265-897b-44c3-a160-89f44d45ae1a","type":"Plot"},"ticker":{"id":"3f86c72c-006e-43cc-b12e-1a0cf31441f4","type":"BasicTicker"}},"id":"057d8ba8-2385-4d65-ace6-89cc6ec2c057","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"7bb1d37c-40e5-499d-86a9-a98c0b6e316d","type":"Title"},{"attributes":{},"id":"bc28ebe7-fa34-4bd7-a99c-37e626a56eff","type":"LinearScale"},{"attributes":{},"id":"3f86c72c-006e-43cc-b12e-1a0cf31441f4","type":"BasicTicker"},{"attributes":{"plot":{"id":"e07c9265-897b-44c3-a160-89f44d45ae1a","type":"Plot"},"ticker":{"id":"c2b06f32-1031-444a-88e0-8e01acd5ee72","type":"BasicTicker"}},"id":"665bdbef-316e-44ea-baf5-c5447282f800","type":"Grid"},{"attributes":{},"id":"0f7227b0-62b5-414a-9f3b-d300168eba96","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"6a4a037f-4401-4790-b1b0-ebbfff7b574e","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"e07c9265-897b-44c3-a160-89f44d45ae1a","type":"Plot"},"ticker":{"id":"3f86c72c-006e-43cc-b12e-1a0cf31441f4","type":"BasicTicker"}},"id":"345c71c1-d2b5-4f0c-bb9a-de10951cd5c7","type":"Grid"},{"attributes":{},"id":"35d1a2c2-e585-4a04-a815-cd7aa6efd64c","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"57bc492d-48ac-4b7d-b3ec-5f510459b10d","type":"PanTool"},{"id":"d798ef95-64bc-41a3-971c-2167d9110b5c","type":"WheelZoomTool"}]},"id":"f8ce09a3-3752-4574-aeda-a57c4b06265e","type":"Toolbar"},{"attributes":{"tools":[{"id":"e070b675-cf69-450e-8b32-0ada193072f4","type":"PanTool"},{"id":"022b5c56-6814-4fbd-9b26-7476ce9dbbec","type":"WheelZoomTool"},{"id":"2101d523-6232-43be-8fd4-465dd3d629ec","type":"PanTool"},{"id":"01e12663-4c99-4d51-bbca-efbda8454f5b","type":"WheelZoomTool"},{"id":"748be07e-601d-42ee-b762-8f4d2b4cf4ae","type":"PanTool"},{"id":"6453cbc4-8ac2-419c-a9de-eaae3164976c","type":"WheelZoomTool"},{"id":"f6554231-1857-496d-94a3-3e372c837c10","type":"PanTool"},{"id":"ac853fae-8c83-4504-a670-79f74c486845","type":"WheelZoomTool"},{"id":"df5a15dd-1cca-46c6-9c09-2dc6809d593c","type":"PanTool"},{"id":"e68d134b-943a-4fd2-b007-ff5842335250","type":"WheelZoomTool"},{"id":"d537ac34-92e1-44e9-a960-0183c1ed4f09","type":"PanTool"},{"id":"c9c3a91b-3975-4eb8-a517-4f8c78f5a3d2","type":"WheelZoomTool"},{"id":"cfbff23a-6bbd-4732-88bc-e0a2b6523cef","type":"PanTool"},{"id":"cff0a6be-0e34-4bd3-b8ab-0f4d0544751b","type":"WheelZoomTool"},{"id":"9f951baf-cb1b-4829-bcf9-5408a068536b","type":"PanTool"},{"id":"50ed325a-9cb9-4e28-80ab-abf614cf68dc","type":"WheelZoomTool"},{"id":"d0ab8fc3-a442-4fad-950e-1ab084789468","type":"PanTool"},{"id":"fe6aafb7-a8be-41c1-aa69-c4316ef941ea","type":"WheelZoomTool"},{"id":"57bc492d-48ac-4b7d-b3ec-5f510459b10d","type":"PanTool"},{"id":"d798ef95-64bc-41a3-971c-2167d9110b5c","type":"WheelZoomTool"},{"id":"d5e3798d-3010-482e-ac8f-bf38e9db27da","type":"PanTool"},{"id":"ca7d40d9-7ac3-49ea-b865-a0f1cbbdf55a","type":"WheelZoomTool"},{"id":"eff2d3a6-256c-4953-9b68-87bf8e86fc67","type":"PanTool"},{"id":"f162de10-fe76-478c-b6a2-8fab7f3f8918","type":"WheelZoomTool"},{"id":"6ec01f42-94e0-47f5-be15-e8c4c45a7031","type":"PanTool"},{"id":"696827d6-f55f-467e-98e9-8c7dc2cc7f49","type":"WheelZoomTool"},{"id":"0b325385-d5e7-41a3-a5f2-e8209c51078d","type":"PanTool"},{"id":"fc900f86-a4cf-4e14-82a3-5ae09830e756","type":"WheelZoomTool"},{"id":"aef6968d-215f-4092-8743-5c4f84cd87d1","type":"PanTool"},{"id":"234c2871-1eb2-4645-b7ad-70ef66e8509b","type":"WheelZoomTool"},{"id":"03688189-8545-4e49-9875-0295e0e3c874","type":"PanTool"},{"id":"85312385-a36a-4a77-8303-b2ee60fab749","type":"WheelZoomTool"}]},"id":"7aa3704a-5967-4157-b5b8-ef0283551919","type":"ProxyToolbar"},{"attributes":{},"id":"fe6aafb7-a8be-41c1-aa69-c4316ef941ea","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"e3a01679-dbbd-4cdc-8bb2-5edd6669c03b","type":"GlyphRenderer"},{"id":"1d8e09c4-780b-498a-b7e4-620ce0b5ba69","type":"Grid"},{"id":"97382825-72bf-48e6-bd02-07080162ba26","type":"Grid"}],"title":{"id":"2f826e6d-8432-4b4e-b655-50b21003eded","type":"Title"},"toolbar":{"id":"f8ce09a3-3752-4574-aeda-a57c4b06265e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"459c0b62-acb1-4a94-8f49-f8848a86e394","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"e8478190-d560-4f59-bcaa-b48744095dda","type":"LinearScale"}},"id":"8f10b390-f8eb-4934-bd1d-d456d7872771","type":"Plot"},{"attributes":{},"id":"68ee0b17-64d8-4bff-bf6c-d1269fd7758c","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_width"}},"id":"529a2e0b-0015-470b-8a3d-b5ba6d349e70","type":"Circle"},{"attributes":{"toolbar":{"id":"7aa3704a-5967-4157-b5b8-ef0283551919","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"0203c6c3-6fc7-4e4b-ab45-84fd81bdc02f","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d5e3798d-3010-482e-ac8f-bf38e9db27da","type":"PanTool"},{"id":"ca7d40d9-7ac3-49ea-b865-a0f1cbbdf55a","type":"WheelZoomTool"}]},"id":"e471b053-38ac-40e2-99ef-a46cc4c6d0df","type":"Toolbar"},{"attributes":{},"id":"cc5dc5cc-8603-44a1-8f6c-bf1ae556dfed","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"529a2e0b-0015-470b-8a3d-b5ba6d349e70","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1b21482d-3b06-462b-8f00-fa9d6f1c6ffc","type":"CDSView"}},"id":"e3a01679-dbbd-4cdc-8bb2-5edd6669c03b","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"0203c6c3-6fc7-4e4b-ab45-84fd81bdc02f","type":"ToolbarBox"},{"id":"5ae7a029-e16b-42e3-82c0-e6366b845dda","type":"Column"}]},"id":"130e63ed-7380-4437-8ca0-15258369a978","type":"Column"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"1b21482d-3b06-462b-8f00-fa9d6f1c6ffc","type":"CDSView"},{"attributes":{},"id":"b3788a45-0883-4c68-b8fd-dbdba31c0fdb","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"8f10b390-f8eb-4934-bd1d-d456d7872771","type":"Plot"},"ticker":{"id":"829de9cd-66e9-405e-9529-fc920d8b2760","type":"BasicTicker"}},"id":"97382825-72bf-48e6-bd02-07080162ba26","type":"Grid"},{"attributes":{},"id":"57bc492d-48ac-4b7d-b3ec-5f510459b10d","type":"PanTool"},{"attributes":{"plot":{"id":"8f10b390-f8eb-4934-bd1d-d456d7872771","type":"Plot"},"ticker":{"id":"b3788a45-0883-4c68-b8fd-dbdba31c0fdb","type":"BasicTicker"}},"id":"1d8e09c4-780b-498a-b7e4-620ce0b5ba69","type":"Grid"},{"attributes":{},"id":"829de9cd-66e9-405e-9529-fc920d8b2760","type":"BasicTicker"},{"attributes":{},"id":"d798ef95-64bc-41a3-971c-2167d9110b5c","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"5d95af78-da61-4834-80b9-45b184862047","type":"GlyphRenderer"},{"id":"32d45ea5-f5f1-43f0-8e57-a8b5b035ab53","type":"Grid"},{"id":"8004d5f0-deb5-4040-b9ec-a665c8dfded3","type":"Grid"}],"title":{"id":"95e83df7-eee7-4e1d-a87b-bcff4579791c","type":"Title"},"toolbar":{"id":"e471b053-38ac-40e2-99ef-a46cc4c6d0df","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"9d92b892-0efd-4589-83d8-7ef9763e8d1c","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"d017b154-446b-4cd9-b0a6-c1086c17905b","type":"LinearScale"}},"id":"05486693-6900-4b24-912d-6ae6e2962f6d","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_width"}},"id":"824f40da-bcd4-4a29-a36f-cc54a0a08794","type":"Circle"},{"attributes":{},"id":"5789698b-f057-437f-91bf-680dde37b76c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"824f40da-bcd4-4a29-a36f-cc54a0a08794","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"76e83ebe-1e93-4048-b905-48cd882c40ca","type":"CDSView"}},"id":"5d95af78-da61-4834-80b9-45b184862047","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"76e83ebe-1e93-4048-b905-48cd882c40ca","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eff2d3a6-256c-4953-9b68-87bf8e86fc67","type":"PanTool"},{"id":"f162de10-fe76-478c-b6a2-8fab7f3f8918","type":"WheelZoomTool"}]},"id":"deb588b9-3d1d-4ebb-9350-d393ce151ac0","type":"Toolbar"},{"attributes":{"plot":{"id":"05486693-6900-4b24-912d-6ae6e2962f6d","type":"Plot"},"ticker":{"id":"5789698b-f057-437f-91bf-680dde37b76c","type":"BasicTicker"}},"id":"32d45ea5-f5f1-43f0-8e57-a8b5b035ab53","type":"Grid"},{"attributes":{},"id":"0184ff91-93e8-4558-8148-fa5a1f5afab9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"05486693-6900-4b24-912d-6ae6e2962f6d","type":"Plot"},"ticker":{"id":"0184ff91-93e8-4558-8148-fa5a1f5afab9","type":"BasicTicker"}},"id":"8004d5f0-deb5-4040-b9ec-a665c8dfded3","type":"Grid"},{"attributes":{},"id":"d5e3798d-3010-482e-ac8f-bf38e9db27da","type":"PanTool"},{"attributes":{},"id":"ca7d40d9-7ac3-49ea-b865-a0f1cbbdf55a","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"a25e7ab9-131b-4e33-8f92-f2c0e9a47519","type":"GlyphRenderer"},{"id":"7ffbc461-a239-4c02-8455-0aaae0bc8fb6","type":"Grid"},{"id":"4376b2e0-c13a-447b-9ff2-a7cbba6a656c","type":"Grid"}],"title":{"id":"331da514-c003-4375-9762-7a9bb381a387","type":"Title"},"toolbar":{"id":"deb588b9-3d1d-4ebb-9350-d393ce151ac0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"6879a247-2b8a-4361-a774-cd1d2e29c099","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"1e624fa5-4a11-4ad2-aa5f-54ef8e6beb2e","type":"LinearScale"}},"id":"cdcca3c7-cacb-4750-97e5-c2933b02e5be","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_width"}},"id":"3184a59b-c84b-4879-b473-c8c4657391a1","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6ec01f42-94e0-47f5-be15-e8c4c45a7031","type":"PanTool"},{"id":"696827d6-f55f-467e-98e9-8c7dc2cc7f49","type":"WheelZoomTool"}]},"id":"50bbab50-74ce-4cbc-9824-6716881cfa69","type":"Toolbar"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"3184a59b-c84b-4879-b473-c8c4657391a1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23978647-6aff-422f-9033-a001d47a2345","type":"CDSView"}},"id":"a25e7ab9-131b-4e33-8f92-f2c0e9a47519","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"23978647-6aff-422f-9033-a001d47a2345","type":"CDSView"},{"attributes":{},"id":"5c1c208c-3fb1-4db6-a6e0-d4a7f3b38654","type":"BasicTicker"},{"attributes":{},"id":"ba7bb8fd-049b-4b55-85e1-c2200a6a98d1","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"b3cac11e-8f51-420c-aba3-6ca20876ec5e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"313aa09d-dfae-46d4-921f-eaa7c7cf9103","type":"CDSView"}},"id":"727b54e1-01a5-4009-83ed-fc3fccd571ae","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"cdcca3c7-cacb-4750-97e5-c2933b02e5be","type":"Plot"},"ticker":{"id":"e1cff69e-51d3-46ae-85b7-3ecf34aff0a0","type":"BasicTicker"}},"id":"4376b2e0-c13a-447b-9ff2-a7cbba6a656c","type":"Grid"},{"attributes":{},"id":"eff2d3a6-256c-4953-9b68-87bf8e86fc67","type":"PanTool"},{"attributes":{},"id":"af870db6-e10f-411f-b570-7ddd1dcd7eb5","type":"BasicTicker"},{"attributes":{},"id":"2101d523-6232-43be-8fd4-465dd3d629ec","type":"PanTool"},{"attributes":{"plot":{"id":"cdcca3c7-cacb-4750-97e5-c2933b02e5be","type":"Plot"},"ticker":{"id":"ba7bb8fd-049b-4b55-85e1-c2200a6a98d1","type":"BasicTicker"}},"id":"7ffbc461-a239-4c02-8455-0aaae0bc8fb6","type":"Grid"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"74a3b6b7-910b-4604-a736-5e54e066de9f","type":"CDSView"},{"attributes":{},"id":"e1cff69e-51d3-46ae-85b7-3ecf34aff0a0","type":"BasicTicker"},{"attributes":{},"id":"6453cbc4-8ac2-419c-a9de-eaae3164976c","type":"WheelZoomTool"},{"attributes":{},"id":"f162de10-fe76-478c-b6a2-8fab7f3f8918","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"b5e9d04e-2e82-4b96-a695-9b7fb659a018","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"fc2a7c1f-e513-4582-9200-fe3b0336f77e","type":"LinearAxis"}],"min_border_bottom":42,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":240,"renderers":[{"id":"73c1ce83-bd95-4b18-8b57-15201170557d","type":"GlyphRenderer"},{"id":"b5e9d04e-2e82-4b96-a695-9b7fb659a018","type":"LinearAxis"},{"id":"6c76f29b-e795-4f87-be96-b87ed9585e7b","type":"Grid"},{"id":"fc2a7c1f-e513-4582-9200-fe3b0336f77e","type":"LinearAxis"},{"id":"3162ebe5-de4d-4194-ae1f-e63d560e250f","type":"Grid"}],"title":{"id":"d904eabe-731b-461f-86e5-59c85e646c3a","type":"Title"},"toolbar":{"id":"50bbab50-74ce-4cbc-9824-6716881cfa69","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"1dab9795-1ba2-4597-89ef-75189367e020","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"8b942bd1-232c-466f-aaaf-61049af348cd","type":"LinearScale"}},"id":"b2015dcf-1409-44de-b037-138a481991e3","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"31aedeef-4c5b-40f9-8687-661cbed09375","type":"Plot"},"ticker":{"id":"89ab6048-6d6a-49d3-ab3f-a2b89722419a","type":"BasicTicker"}},"id":"04ce014b-2885-458c-9084-3e229b994873","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"petal_length"}},"id":"34e9458e-fe59-4da6-8148-a5e70b37bd75","type":"Circle"},{"attributes":{},"id":"f6554231-1857-496d-94a3-3e372c837c10","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"b2015dcf-1409-44de-b037-138a481991e3","type":"Plot"},"ticker":{"id":"a3131edd-606c-4bf6-9e35-1f8e2f796053","type":"BasicTicker"}},"id":"3162ebe5-de4d-4194-ae1f-e63d560e250f","type":"Grid"},{"attributes":{"plot":{"id":"31aedeef-4c5b-40f9-8687-661cbed09375","type":"Plot"},"ticker":{"id":"b04cf392-bc8e-447f-82e6-c3030f83a15a","type":"BasicTicker"}},"id":"34a09e0a-a447-484f-afd6-7881a656288e","type":"Grid"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"34e9458e-fe59-4da6-8148-a5e70b37bd75","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"cefdade0-5e90-4c6a-8298-37f7a81710aa","type":"CDSView"}},"id":"73c1ce83-bd95-4b18-8b57-15201170557d","type":"GlyphRenderer"},{"attributes":{},"id":"89ab6048-6d6a-49d3-ab3f-a2b89722419a","type":"BasicTicker"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"cefdade0-5e90-4c6a-8298-37f7a81710aa","type":"CDSView"},{"attributes":{},"id":"ac853fae-8c83-4504-a670-79f74c486845","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b2015dcf-1409-44de-b037-138a481991e3","type":"Plot"},"ticker":{"id":"69d2604f-ece1-4bf8-9f8f-c88981b56492","type":"BasicTicker"}},"id":"6c76f29b-e795-4f87-be96-b87ed9585e7b","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"59dfb958-edbe-4ace-a682-7c46a8e80665","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"399d9829-578d-4d6e-872c-3748d3a8f52c","type":"GlyphRenderer"},{"id":"35e4fa26-f35d-4b72-b741-a14d000b95ac","type":"Grid"},{"id":"59dfb958-edbe-4ace-a682-7c46a8e80665","type":"LinearAxis"},{"id":"12e961ee-4f91-4366-b298-475076839510","type":"Grid"}],"title":{"id":"fa7183cf-1fbb-413e-abf7-bf0983c2891f","type":"Title"},"toolbar":{"id":"60bcb5fe-5c4b-4789-8b0d-08075473397f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"b73bf12a-1398-4f47-8c80-4c3093db1a51","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"7b059407-7f9e-427b-84f0-78c16fcf5d59","type":"LinearScale"}},"id":"2f369c3d-d525-44f9-b78f-f3596214ea2b","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0b325385-d5e7-41a3-a5f2-e8209c51078d","type":"PanTool"},{"id":"fc900f86-a4cf-4e14-82a3-5ae09830e756","type":"WheelZoomTool"}]},"id":"fb53636f-3cc3-43b7-bef0-09bf900e2a48","type":"Toolbar"},{"attributes":{"formatter":{"id":"338684ee-0faf-42dd-ab13-c273fa75594b","type":"BasicTickFormatter"},"plot":{"id":"b2015dcf-1409-44de-b037-138a481991e3","type":"Plot"},"ticker":{"id":"a3131edd-606c-4bf6-9e35-1f8e2f796053","type":"BasicTicker"}},"id":"fc2a7c1f-e513-4582-9200-fe3b0336f77e","type":"LinearAxis"},{"attributes":{"formatter":{"id":"73157916-fe62-436d-aa41-90889d113ba7","type":"BasicTickFormatter"},"plot":{"id":"b2015dcf-1409-44de-b037-138a481991e3","type":"Plot"},"ticker":{"id":"69d2604f-ece1-4bf8-9f8f-c88981b56492","type":"BasicTicker"}},"id":"b5e9d04e-2e82-4b96-a695-9b7fb659a018","type":"LinearAxis"},{"attributes":{},"id":"69d2604f-ece1-4bf8-9f8f-c88981b56492","type":"BasicTicker"},{"attributes":{},"id":"a3131edd-606c-4bf6-9e35-1f8e2f796053","type":"BasicTicker"},{"attributes":{},"id":"6ec01f42-94e0-47f5-be15-e8c4c45a7031","type":"PanTool"},{"attributes":{},"id":"696827d6-f55f-467e-98e9-8c7dc2cc7f49","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"51f82d52-537d-44c6-a6dd-596e4d60bc45","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"1b164d78-8d96-4c1b-a14d-f96ccf222704","type":"GlyphRenderer"},{"id":"51f82d52-537d-44c6-a6dd-596e4d60bc45","type":"LinearAxis"},{"id":"0d1a172d-f34a-442c-85ba-3f5b5a79f0c9","type":"Grid"},{"id":"6bf20033-f1ae-44b5-b956-9c420f16fdd4","type":"Grid"}],"title":{"id":"88834c3a-6d09-4306-8fce-2c339af9c0e5","type":"Title"},"toolbar":{"id":"fb53636f-3cc3-43b7-bef0-09bf900e2a48","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"8b4822c0-320a-4577-8abc-63e5f8064bc2","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"3edb52d2-ec49-484f-ad64-6b8021b71cad","type":"LinearScale"}},"id":"f52532ea-70b0-4e90-9b00-b89369c9cbf5","type":"Plot"},{"attributes":{"callback":null,"column_names":["petal_length","petal_width","sepal_length","sepal_width","color"],"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]}}},"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"petal_length"}},"id":"b65a30ee-4d95-477b-8223-9dfa58be82fe","type":"Circle"},{"attributes":{},"id":"13d3517d-199e-4205-82cb-aa008d65faa2","type":"BasicTicker"},{"attributes":{"callback":null,"renderers":[{"id":"a02ecd36-3641-4885-b4e2-061a87c4cfc3","type":"GlyphRenderer"},{"id":"727b54e1-01a5-4009-83ed-fc3fccd571ae","type":"GlyphRenderer"},{"id":"d26c7f49-7ab9-48c0-9958-f17a4a245cdb","type":"GlyphRenderer"},{"id":"9da08271-7530-46cb-90ee-4230fb987f2d","type":"GlyphRenderer"},{"id":"399d9829-578d-4d6e-872c-3748d3a8f52c","type":"GlyphRenderer"},{"id":"9ac08de6-5dd3-4d46-979e-1824517d552c","type":"GlyphRenderer"},{"id":"80a38ea1-d38b-4e96-8bd5-75102542f0de","type":"GlyphRenderer"},{"id":"8d875989-199e-4344-99c0-4e8fe469d9de","type":"GlyphRenderer"},{"id":"dde04d6b-db63-4ec2-90d4-5886e39e47f3","type":"GlyphRenderer"},{"id":"e3a01679-dbbd-4cdc-8bb2-5edd6669c03b","type":"GlyphRenderer"},{"id":"5d95af78-da61-4834-80b9-45b184862047","type":"GlyphRenderer"},{"id":"a25e7ab9-131b-4e33-8f92-f2c0e9a47519","type":"GlyphRenderer"},{"id":"73c1ce83-bd95-4b18-8b57-15201170557d","type":"GlyphRenderer"},{"id":"1b164d78-8d96-4c1b-a14d-f96ccf222704","type":"GlyphRenderer"},{"id":"e63cb362-31d5-4f1f-aa15-b468928da9aa","type":"GlyphRenderer"},{"id":"b88d28cc-9cd7-43d1-8a6b-6862a81e4424","type":"GlyphRenderer"}]},"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"b65a30ee-4d95-477b-8223-9dfa58be82fe","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f007c03f-3734-4239-85db-72a0543dfcc9","type":"CDSView"}},"id":"1b164d78-8d96-4c1b-a14d-f96ccf222704","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"a02ecd36-3641-4885-b4e2-061a87c4cfc3","type":"GlyphRenderer"},{"id":"727b54e1-01a5-4009-83ed-fc3fccd571ae","type":"GlyphRenderer"},{"id":"d26c7f49-7ab9-48c0-9958-f17a4a245cdb","type":"GlyphRenderer"},{"id":"9da08271-7530-46cb-90ee-4230fb987f2d","type":"GlyphRenderer"},{"id":"399d9829-578d-4d6e-872c-3748d3a8f52c","type":"GlyphRenderer"},{"id":"9ac08de6-5dd3-4d46-979e-1824517d552c","type":"GlyphRenderer"},{"id":"80a38ea1-d38b-4e96-8bd5-75102542f0de","type":"GlyphRenderer"},{"id":"8d875989-199e-4344-99c0-4e8fe469d9de","type":"GlyphRenderer"},{"id":"dde04d6b-db63-4ec2-90d4-5886e39e47f3","type":"GlyphRenderer"},{"id":"e3a01679-dbbd-4cdc-8bb2-5edd6669c03b","type":"GlyphRenderer"},{"id":"5d95af78-da61-4834-80b9-45b184862047","type":"GlyphRenderer"},{"id":"a25e7ab9-131b-4e33-8f92-f2c0e9a47519","type":"GlyphRenderer"},{"id":"73c1ce83-bd95-4b18-8b57-15201170557d","type":"GlyphRenderer"},{"id":"1b164d78-8d96-4c1b-a14d-f96ccf222704","type":"GlyphRenderer"},{"id":"e63cb362-31d5-4f1f-aa15-b468928da9aa","type":"GlyphRenderer"},{"id":"b88d28cc-9cd7-43d1-8a6b-6862a81e4424","type":"GlyphRenderer"}]},"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"f007c03f-3734-4239-85db-72a0543dfcc9","type":"CDSView"},{"attributes":{"children":[{"id":"e2076adb-c2d4-4e2a-a038-0c1288524eb0","type":"Row"},{"id":"c65bb4d0-9cbe-45d0-8f61-ce85693fdead","type":"Row"},{"id":"f3e240bb-20ef-4e05-abcc-0f6dd05d0449","type":"Row"},{"id":"ccae9de1-3882-477c-b4c9-74fabf4b3394","type":"Row"}]},"id":"5ae7a029-e16b-42e3-82c0-e6366b845dda","type":"Column"},{"attributes":{"plot":{"id":"f52532ea-70b0-4e90-9b00-b89369c9cbf5","type":"Plot"},"ticker":{"id":"e2f41950-e288-48da-a88c-c59826de7c7e","type":"BasicTicker"}},"id":"0d1a172d-f34a-442c-85ba-3f5b5a79f0c9","type":"Grid"},{"attributes":{"children":[{"id":"4b0e5f03-a73b-4f64-82b1-4ac3ddaa5bbe","type":"Plot"},{"id":"4eb3c592-3e16-4cf5-b641-b8668162ed5c","type":"Plot"},{"id":"dfa6d505-5afb-4073-8a92-48077732e90c","type":"Plot"},{"id":"31aedeef-4c5b-40f9-8687-661cbed09375","type":"Plot"}]},"id":"e2076adb-c2d4-4e2a-a038-0c1288524eb0","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aef6968d-215f-4092-8743-5c4f84cd87d1","type":"PanTool"},{"id":"234c2871-1eb2-4645-b7ad-70ef66e8509b","type":"WheelZoomTool"}]},"id":"bb68e7d4-a5aa-492b-a85a-216a80fc5c08","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"left":[{"id":"453d1bd4-1abf-4416-8717-9fb8333585b9","type":"LinearAxis"}],"min_border_bottom":2,"min_border_left":42,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":240,"renderers":[{"id":"a02ecd36-3641-4885-b4e2-061a87c4cfc3","type":"GlyphRenderer"},{"id":"1c3ec83d-0b9d-47b6-80b3-21952c3c04dc","type":"Grid"},{"id":"453d1bd4-1abf-4416-8717-9fb8333585b9","type":"LinearAxis"},{"id":"f0836877-03f7-4f55-8c77-5b710353db63","type":"Grid"}],"title":{"id":"6ead81c2-db27-41ca-9e63-2361f48ba899","type":"Title"},"toolbar":{"id":"7f2b68eb-db7a-4e59-9871-bbb1ff2762a0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"0eac8f78-5298-4cbc-b29d-97034c4fc81a","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"47296b3b-e701-4956-a4b5-9e335c5004d0","type":"LinearScale"}},"id":"4b0e5f03-a73b-4f64-82b1-4ac3ddaa5bbe","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"f52532ea-70b0-4e90-9b00-b89369c9cbf5","type":"Plot"},"ticker":{"id":"13d3517d-199e-4205-82cb-aa008d65faa2","type":"BasicTicker"}},"id":"6bf20033-f1ae-44b5-b956-9c420f16fdd4","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e070b675-cf69-450e-8b32-0ada193072f4","type":"PanTool"},{"id":"022b5c56-6814-4fbd-9b26-7476ce9dbbec","type":"WheelZoomTool"}]},"id":"7f2b68eb-db7a-4e59-9871-bbb1ff2762a0","type":"Toolbar"},{"attributes":{"formatter":{"id":"b68f30f4-ced0-476b-9534-cc8ff09ebc13","type":"BasicTickFormatter"},"plot":{"id":"f52532ea-70b0-4e90-9b00-b89369c9cbf5","type":"Plot"},"ticker":{"id":"e2f41950-e288-48da-a88c-c59826de7c7e","type":"BasicTicker"}},"id":"51f82d52-537d-44c6-a6dd-596e4d60bc45","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_length"},"y":{"field":"sepal_length"}},"id":"30bde79a-1bdb-407a-a717-47cda8f9b24e","type":"Circle"},{"attributes":{},"id":"e2f41950-e288-48da-a88c-c59826de7c7e","type":"BasicTicker"},{"attributes":{},"id":"e070b675-cf69-450e-8b32-0ada193072f4","type":"PanTool"},{"attributes":{},"id":"0b325385-d5e7-41a3-a5f2-e8209c51078d","type":"PanTool"},{"attributes":{},"id":"fc900f86-a4cf-4e14-82a3-5ae09830e756","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"30bde79a-1bdb-407a-a717-47cda8f9b24e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c539264e-4a1e-4b3c-b360-68db4db29f14","type":"CDSView"}},"id":"a02ecd36-3641-4885-b4e2-061a87c4cfc3","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"7ebe75ac-f9b8-4fdf-993c-6d4050259f56","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"e63cb362-31d5-4f1f-aa15-b468928da9aa","type":"GlyphRenderer"},{"id":"7ebe75ac-f9b8-4fdf-993c-6d4050259f56","type":"LinearAxis"},{"id":"ffce096c-2861-49ac-9e2d-674439800bd7","type":"Grid"},{"id":"e8798ee9-c0bc-4c47-87cb-a5d84473a7b5","type":"Grid"}],"title":{"id":"9f1b74c3-d0ec-4a70-b7ee-ee1544d1ed4e","type":"Title"},"toolbar":{"id":"bb68e7d4-a5aa-492b-a85a-216a80fc5c08","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"35d1a2c2-e585-4a04-a815-cd7aa6efd64c","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"a0809828-101d-485a-8f59-83ec8fe299ee","type":"LinearScale"}},"id":"6644b175-8df8-420c-bacd-199003509f44","type":"Plot"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"c539264e-4a1e-4b3c-b360-68db4db29f14","type":"CDSView"},{"attributes":{},"id":"788f6cf3-383f-4a28-93a6-d7708f707ff1","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"petal_length"}},"id":"f673f906-fb90-4743-85b3-16f6209e1731","type":"Circle"},{"attributes":{"formatter":{"id":"410c1266-d246-4398-8abf-1128b4c8a1aa","type":"BasicTickFormatter"},"plot":{"id":"4b0e5f03-a73b-4f64-82b1-4ac3ddaa5bbe","type":"Plot"},"ticker":{"id":"3c44bb27-f6f4-4ddc-90bf-f89a0ccd04f6","type":"BasicTicker"}},"id":"453d1bd4-1abf-4416-8717-9fb8333585b9","type":"LinearAxis"},{"attributes":{},"id":"d7d72947-5727-493b-8679-fa44c45672a0","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"f673f906-fb90-4743-85b3-16f6209e1731","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b0aae201-9f59-4709-a1aa-79003e8ea8e4","type":"CDSView"}},"id":"e63cb362-31d5-4f1f-aa15-b468928da9aa","type":"GlyphRenderer"},{"attributes":{},"id":"3c44bb27-f6f4-4ddc-90bf-f89a0ccd04f6","type":"BasicTicker"},{"attributes":{"plot":{"id":"4b0e5f03-a73b-4f64-82b1-4ac3ddaa5bbe","type":"Plot"},"ticker":{"id":"788f6cf3-383f-4a28-93a6-d7708f707ff1","type":"BasicTicker"}},"id":"1c3ec83d-0b9d-47b6-80b3-21952c3c04dc","type":"Grid"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"b0aae201-9f59-4709-a1aa-79003e8ea8e4","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"4b0e5f03-a73b-4f64-82b1-4ac3ddaa5bbe","type":"Plot"},"ticker":{"id":"3c44bb27-f6f4-4ddc-90bf-f89a0ccd04f6","type":"BasicTicker"}},"id":"f0836877-03f7-4f55-8c77-5b710353db63","type":"Grid"},{"attributes":{"plot":{"id":"6644b175-8df8-420c-bacd-199003509f44","type":"Plot"},"ticker":{"id":"0e10effd-2605-4df8-be9a-8a6fc766f04e","type":"BasicTicker"}},"id":"ffce096c-2861-49ac-9e2d-674439800bd7","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2101d523-6232-43be-8fd4-465dd3d629ec","type":"PanTool"},{"id":"01e12663-4c99-4d51-bbca-efbda8454f5b","type":"WheelZoomTool"}]},"id":"709ecc47-26db-4053-a238-627c92aa0aaa","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"03688189-8545-4e49-9875-0295e0e3c874","type":"PanTool"},{"id":"85312385-a36a-4a77-8303-b2ee60fab749","type":"WheelZoomTool"}]},"id":"fa6be30e-0f55-4f99-b8ca-805e8024fb67","type":"Toolbar"},{"attributes":{},"id":"022b5c56-6814-4fbd-9b26-7476ce9dbbec","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"6644b175-8df8-420c-bacd-199003509f44","type":"Plot"},"ticker":{"id":"d7d72947-5727-493b-8679-fa44c45672a0","type":"BasicTicker"}},"id":"e8798ee9-c0bc-4c47-87cb-a5d84473a7b5","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"727b54e1-01a5-4009-83ed-fc3fccd571ae","type":"GlyphRenderer"},{"id":"b20d4bb2-eab6-41ff-9f19-b4d8b18b3f57","type":"Grid"},{"id":"eed589b7-fd50-4f47-b165-6f850da0162e","type":"Grid"}],"title":{"id":"4445cdea-c37e-4e42-99a7-1d409a3f6167","type":"Title"},"toolbar":{"id":"709ecc47-26db-4053-a238-627c92aa0aaa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"9a06f969-f9e1-4993-93f0-30aca5e11f24","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"0f366ddd-8b49-448e-b12b-586aea878f1c","type":"LinearScale"}},"id":"4eb3c592-3e16-4cf5-b641-b8668162ed5c","type":"Plot"},{"attributes":{"formatter":{"id":"323be5d9-dcbe-4745-a459-b4b81f15e1f8","type":"BasicTickFormatter"},"plot":{"id":"6644b175-8df8-420c-bacd-199003509f44","type":"Plot"},"ticker":{"id":"0e10effd-2605-4df8-be9a-8a6fc766f04e","type":"BasicTicker"}},"id":"7ebe75ac-f9b8-4fdf-993c-6d4050259f56","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_width"},"y":{"field":"sepal_length"}},"id":"0c3e117d-0fa1-4ebd-9972-2c7e0f825cca","type":"Circle"},{"attributes":{},"id":"0e10effd-2605-4df8-be9a-8a6fc766f04e","type":"BasicTicker"},{"attributes":{},"id":"aef6968d-215f-4092-8743-5c4f84cd87d1","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"petal_width"},"y":{"field":"sepal_length"}},"id":"b3cac11e-8f51-420c-aba3-6ca20876ec5e","type":"Circle"},{"attributes":{},"id":"234c2871-1eb2-4645-b7ad-70ef66e8509b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"4eb3c592-3e16-4cf5-b641-b8668162ed5c","type":"Plot"},"ticker":{"id":"af870db6-e10f-411f-b570-7ddd1dcd7eb5","type":"BasicTicker"}},"id":"b20d4bb2-eab6-41ff-9f19-b4d8b18b3f57","type":"Grid"},{"attributes":{},"id":"01e12663-4c99-4d51-bbca-efbda8454f5b","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"below":[{"id":"64b90c25-f382-41c0-bc00-8d69424de2b8","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"min_border_bottom":42,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":240,"plot_width":200,"renderers":[{"id":"b88d28cc-9cd7-43d1-8a6b-6862a81e4424","type":"GlyphRenderer"},{"id":"64b90c25-f382-41c0-bc00-8d69424de2b8","type":"LinearAxis"},{"id":"84324946-1bc8-4606-8861-b23b38110e93","type":"Grid"},{"id":"f3123a18-ffd7-42f5-98f1-845cb404e0bc","type":"Grid"}],"title":{"id":"7bb1d37c-40e5-499d-86a9-a98c0b6e316d","type":"Title"},"toolbar":{"id":"fa6be30e-0f55-4f99-b8ca-805e8024fb67","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"68ee0b17-64d8-4bff-bf6c-d1269fd7758c","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"bc28ebe7-fa34-4bd7-a99c-37e626a56eff","type":"LinearScale"}},"id":"205efaa6-2ab0-41fc-8b8c-307e700cd217","type":"Plot"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"d26c7f49-7ab9-48c0-9958-f17a4a245cdb","type":"GlyphRenderer"},{"id":"7d0d3e43-7e55-4ad9-bb69-e58529ea1e76","type":"Grid"},{"id":"b66f9fd4-1b1a-4721-927c-f7675a2309ec","type":"Grid"}],"title":{"id":"a7006b01-bd11-4377-9364-8849fc35c9b0","type":"Title"},"toolbar":{"id":"ede84c75-0af9-4df1-b3c4-7f7f0137ad5c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"2c93c464-ad79-46a2-8fbe-65a3a6cf6c14","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"e37dafb3-f961-46f3-85d5-70140c925d47","type":"LinearScale"}},"id":"dfa6d505-5afb-4073-8a92-48077732e90c","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"petal_length"}},"id":"d9fa9bd2-47ed-43a8-b69f-f5fa77864d77","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"748be07e-601d-42ee-b762-8f4d2b4cf4ae","type":"PanTool"},{"id":"6453cbc4-8ac2-419c-a9de-eaae3164976c","type":"WheelZoomTool"}]},"id":"ede84c75-0af9-4df1-b3c4-7f7f0137ad5c","type":"Toolbar"},{"attributes":{},"id":"a2f4f043-ebb2-40d8-a13c-d16018ad172c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"d9fa9bd2-47ed-43a8-b69f-f5fa77864d77","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"55514bfe-3349-4a13-80aa-bb1232a6147d","type":"CDSView"}},"id":"b88d28cc-9cd7-43d1-8a6b-6862a81e4424","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"313aa09d-dfae-46d4-921f-eaa7c7cf9103","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"4eb3c592-3e16-4cf5-b641-b8668162ed5c","type":"Plot"},"ticker":{"id":"5c1c208c-3fb1-4db6-a6e0-d4a7f3b38654","type":"BasicTicker"}},"id":"eed589b7-fd50-4f47-b165-6f850da0162e","type":"Grid"},{"attributes":{"source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"}},"id":"55514bfe-3349-4a13-80aa-bb1232a6147d","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f6554231-1857-496d-94a3-3e372c837c10","type":"PanTool"},{"id":"ac853fae-8c83-4504-a670-79f74c486845","type":"WheelZoomTool"}]},"id":"0def3fb2-703c-4ef0-aaa9-96ea557a935d","type":"Toolbar"},{"attributes":{"plot":{"id":"205efaa6-2ab0-41fc-8b8c-307e700cd217","type":"Plot"},"ticker":{"id":"5a843d68-e761-495d-8364-55c97ceeb9ae","type":"BasicTicker"}},"id":"84324946-1bc8-4606-8861-b23b38110e93","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"6ead81c2-db27-41ca-9e63-2361f48ba899","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"line_color":{"field":"color"},"x":{"field":"sepal_length"},"y":{"field":"sepal_length"}},"id":"4275e64d-eb3c-468d-801e-6dda9d3db504","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"205efaa6-2ab0-41fc-8b8c-307e700cd217","type":"Plot"},"ticker":{"id":"a2f4f043-ebb2-40d8-a13c-d16018ad172c","type":"BasicTicker"}},"id":"f3123a18-ffd7-42f5-98f1-845cb404e0bc","type":"Grid"},{"attributes":{},"id":"b04cf392-bc8e-447f-82e6-c3030f83a15a","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"df5a15dd-1cca-46c6-9c09-2dc6809d593c","type":"PanTool"},{"id":"e68d134b-943a-4fd2-b007-ff5842335250","type":"WheelZoomTool"}]},"id":"60bcb5fe-5c4b-4789-8b0d-08075473397f","type":"Toolbar"},{"attributes":{"formatter":{"id":"0f7227b0-62b5-414a-9f3b-d300168eba96","type":"BasicTickFormatter"},"plot":{"id":"205efaa6-2ab0-41fc-8b8c-307e700cd217","type":"Plot"},"ticker":{"id":"5a843d68-e761-495d-8364-55c97ceeb9ae","type":"BasicTicker"}},"id":"64b90c25-f382-41c0-bc00-8d69424de2b8","type":"LinearAxis"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"4275e64d-eb3c-468d-801e-6dda9d3db504","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74a3b6b7-910b-4604-a736-5e54e066de9f","type":"CDSView"}},"id":"9da08271-7530-46cb-90ee-4230fb987f2d","type":"GlyphRenderer"},{"attributes":{},"id":"5a843d68-e761-495d-8364-55c97ceeb9ae","type":"BasicTicker"},{"attributes":{},"id":"03688189-8545-4e49-9875-0295e0e3c874","type":"PanTool"},{"attributes":{"data_source":{"id":"b28f5b62-f4a4-49b7-9459-16354487879c","type":"ColumnDataSource"},"glyph":{"id":"0c3e117d-0fa1-4ebd-9972-2c7e0f825cca","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6a4a037f-4401-4790-b1b0-ebbfff7b574e","type":"CDSView"}},"id":"d26c7f49-7ab9-48c0-9958-f17a4a245cdb","type":"GlyphRenderer"},{"attributes":{},"id":"85312385-a36a-4a77-8303-b2ee60fab749","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"dfa6d505-5afb-4073-8a92-48077732e90c","type":"Plot"},"ticker":{"id":"4713499a-22cf-4e42-94b6-faf549dad47d","type":"BasicTicker"}},"id":"b66f9fd4-1b1a-4721-927c-f7675a2309ec","type":"Grid"},{"attributes":{},"id":"748be07e-601d-42ee-b762-8f4d2b4cf4ae","type":"PanTool"},{"attributes":{},"id":"47296b3b-e701-4956-a4b5-9e335c5004d0","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efe8e2"},"border_fill_color":{"value":"white"},"min_border_bottom":2,"min_border_left":2,"min_border_right":2,"min_border_top":2,"plot_height":200,"plot_width":200,"renderers":[{"id":"9da08271-7530-46cb-90ee-4230fb987f2d","type":"GlyphRenderer"},{"id":"34a09e0a-a447-484f-afd6-7881a656288e","type":"Grid"},{"id":"04ce014b-2885-458c-9084-3e229b994873","type":"Grid"}],"title":{"id":"71301530-f9fa-43bb-acbf-94e115c0e031","type":"Title"},"toolbar":{"id":"0def3fb2-703c-4ef0-aaa9-96ea557a935d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"557b1fce-0820-4e58-87fe-5261caa960dd","type":"DataRange1d"},"x_scale":{"id":"1e74f291-5b7a-41b7-9545-f048a792af42","type":"LinearScale"},"y_range":{"id":"a4a2c15b-ae4e-4d61-88e6-53dfc0ba95c6","type":"DataRange1d"},"y_scale":{"id":"c861ada7-3234-42e8-ae3c-a64cfa239b50","type":"LinearScale"}},"id":"31aedeef-4c5b-40f9-8687-661cbed09375","type":"Plot"},{"attributes":{},"id":"410c1266-d246-4398-8abf-1128b4c8a1aa","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"4445cdea-c37e-4e42-99a7-1d409a3f6167","type":"Title"},{"attributes":{"plot":{"id":"dfa6d505-5afb-4073-8a92-48077732e90c","type":"Plot"},"ticker":{"id":"cc5dc5cc-8603-44a1-8f6c-bf1ae556dfed","type":"BasicTicker"}},"id":"7d0d3e43-7e55-4ad9-bb69-e58529ea1e76","type":"Grid"},{"attributes":{},"id":"0f366ddd-8b49-448e-b12b-586aea878f1c","type":"LinearScale"},{"attributes":{},"id":"4713499a-22cf-4e42-94b6-faf549dad47d","type":"BasicTicker"},{"attributes":{},"id":"9a06f969-f9e1-4993-93f0-30aca5e11f24","type":"LinearScale"},{"attributes":{},"id":"0eac8f78-5298-4cbc-b29d-97034c4fc81a","type":"LinearScale"}],"root_ids":["130e63ed-7380-4437-8ca0-15258369a978"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"b7886446-0846-4965-aa6b-b32b24041aed","elementid":"567ff472-7774-4fca-b53d-df07b109003b","modelid":"130e63ed-7380-4437-8ca0-15258369a978"}];
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