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
      };var element = document.getElementById("b1741127-bdd3-425b-81fa-b25889363daf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b1741127-bdd3-425b-81fa-b25889363daf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"63c6f803-10cf-41da-ba61-401a0d17a4de":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"a13f5108-7452-42b8-9957-4e5cd039ed03","type":"Circle"},{"attributes":{},"id":"95619340-c8a0-40f4-922e-686e3e476fa4","type":"BasicTicker"},{"attributes":{"plot":{"id":"b87cdd06-20c9-4259-b4e9-e23455f9c2a7","type":"Plot"},"ticker":{"id":"95619340-c8a0-40f4-922e-686e3e476fa4","type":"BasicTicker"}},"id":"f99c90e2-2447-4a90-b9b6-01d6c6ee3c2d","type":"Grid"},{"attributes":{"source":{"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"}},"id":"3f0773e1-0be7-4a55-bd0d-1cb9c43ff33b","type":"CDSView"},{"attributes":{},"id":"2f7eca47-6289-4e48-b34d-436e99bab5fc","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"05a1135c-2958-4989-9a21-9c9ca599e679","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"b87cdd06-20c9-4259-b4e9-e23455f9c2a7","type":"Plot"},"ticker":{"id":"2f7eca47-6289-4e48-b34d-436e99bab5fc","type":"BasicTicker"}},"id":"64bb061a-b043-4288-ad46-283191dae430","type":"Grid"},{"attributes":{"data_source":{"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"},"glyph":{"id":"7494aa17-acc4-4f44-a2f2-ed82ec79414a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"edeb009f-03cf-47f4-a708-5dc18a07ebe5","type":"CDSView"}},"id":"ba6a382e-78e4-4a64-a7d3-163f4d84b3fc","type":"GlyphRenderer"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"0044f550-c073-47d0-9371-eba7bfeae94c","type":"Line"},{"attributes":{"data_source":{"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"},"glyph":{"id":"0044f550-c073-47d0-9371-eba7bfeae94c","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"30edde0e-1f55-4be2-892f-30c169d3f4c7","type":"CDSView"}},"id":"74956ed1-72ad-4dfa-9b97-6ad3b53d43ac","type":"GlyphRenderer"},{"attributes":{"source":{"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"}},"id":"edeb009f-03cf-47f4-a708-5dc18a07ebe5","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"2d794a33-0e57-47af-acfa-ede8ae9849b3","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"dc20ff00-addc-40d8-8220-da541bb7b409","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2d794a33-0e57-47af-acfa-ede8ae9849b3","type":"LinearAxis"},{"id":"dc20ff00-addc-40d8-8220-da541bb7b409","type":"LinearAxis"},{"id":"4e60f9c3-4d17-4b7a-b366-9a929ebe49e6","type":"Grid"},{"id":"b5cd4291-ecf1-4ba6-889e-975a801370f9","type":"Grid"},{"id":"b70137f5-601b-4db6-a02e-395bedc0f31c","type":"GlyphRenderer"},{"id":"784788e2-01eb-46a8-8065-b87dbe860db6","type":"GlyphRenderer"}],"title":{"id":"2d07fd25-526f-493a-a4be-796e0c2e902e","type":"Title"},"toolbar":{"id":"05a1135c-2958-4989-9a21-9c9ca599e679","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2644c689-fa44-4036-97cd-0f6be1537e9a","type":"Range1d"},"x_scale":{"id":"3e7321ff-12d7-4d91-8484-b210d3adec97","type":"LinearScale"},"y_range":{"id":"090bc5b6-82f1-43e3-ac62-b4cb8b0af89e","type":"Range1d"},"y_scale":{"id":"e42a04d9-b75b-4ccb-9d1c-249568121c10","type":"LinearScale"}},"id":"7034c15a-8997-4575-9795-51cf41abe6e1","type":"Plot"},{"attributes":{"source":{"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"}},"id":"30edde0e-1f55-4be2-892f-30c169d3f4c7","type":"CDSView"},{"attributes":{"children":[{"id":"42395696-f2ed-4631-99c7-e81f646e2acc","type":"Plot"},{"id":"8978f107-d649-42ee-8bd0-39fa59d6e654","type":"Plot"}]},"id":"74231171-ca3a-43ed-8880-da607be7a378","type":"Row"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"21b1838f-948d-498b-b757-ad6f6ff5e5db","type":"BasicTickFormatter"},"plot":{"id":"7034c15a-8997-4575-9795-51cf41abe6e1","type":"Plot"},"ticker":{"id":"2c4e3ecc-bad1-47cc-b2b6-97142e7bd4a3","type":"BasicTicker"}},"id":"2d794a33-0e57-47af-acfa-ede8ae9849b3","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f2c00e0c-3b6d-4f75-9776-3f86b9caf4a7","type":"BasicTickFormatter"},"plot":{"id":"7034c15a-8997-4575-9795-51cf41abe6e1","type":"Plot"},"ticker":{"id":"64db9c90-bf6e-430c-8cb0-87276be737b8","type":"BasicTicker"}},"id":"dc20ff00-addc-40d8-8220-da541bb7b409","type":"LinearAxis"},{"attributes":{"data_source":{"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"},"glyph":{"id":"a13f5108-7452-42b8-9957-4e5cd039ed03","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d7f7ee45-bf36-4a6b-a091-f4d557a2e44b","type":"CDSView"}},"id":"cd0e9658-7df5-4e00-a5f5-8275fc551325","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"III"},"id":"2d07fd25-526f-493a-a4be-796e0c2e902e","type":"Title"},{"attributes":{"source":{"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"}},"id":"d7f7ee45-bf36-4a6b-a091-f4d557a2e44b","type":"CDSView"},{"attributes":{"children":[{"id":"74231171-ca3a-43ed-8880-da607be7a378","type":"Row"},{"id":"0c37e466-1264-413c-9d4c-309f1eaba9ee","type":"Row"}]},"id":"7895e243-68e2-44d4-98da-ee909df17a1c","type":"Column"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"33554436-b8f4-4307-a6a3-d77a23c8c891","type":"Circle"},{"attributes":{},"id":"8c17f1b5-032e-4b7a-a6bf-e9a3a65cfec1","type":"LinearScale"},{"attributes":{},"id":"595d2f8f-5128-4f1d-87e3-e62c9e15b94e","type":"LinearScale"},{"attributes":{},"id":"2c4e3ecc-bad1-47cc-b2b6-97142e7bd4a3","type":"BasicTicker"},{"attributes":{},"id":"87eaf4dd-7a71-4989-a5e6-e5ab3a7e7228","type":"LinearScale"},{"attributes":{"plot":{"id":"7034c15a-8997-4575-9795-51cf41abe6e1","type":"Plot"},"ticker":{"id":"2c4e3ecc-bad1-47cc-b2b6-97142e7bd4a3","type":"BasicTicker"}},"id":"4e60f9c3-4d17-4b7a-b366-9a929ebe49e6","type":"Grid"},{"attributes":{},"id":"d5e858aa-4346-4d76-ad2b-d3a8d7f05098","type":"LinearScale"},{"attributes":{},"id":"cf2b6e30-b241-42ee-ab0b-8d86ed6c5970","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"7034c15a-8997-4575-9795-51cf41abe6e1","type":"Plot"},{"id":"b87cdd06-20c9-4259-b4e9-e23455f9c2a7","type":"Plot"}]},"id":"0c37e466-1264-413c-9d4c-309f1eaba9ee","type":"Row"},{"attributes":{},"id":"64db9c90-bf6e-430c-8cb0-87276be737b8","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7034c15a-8997-4575-9795-51cf41abe6e1","type":"Plot"},"ticker":{"id":"64db9c90-bf6e-430c-8cb0-87276be737b8","type":"BasicTicker"}},"id":"b5cd4291-ecf1-4ba6-889e-975a801370f9","type":"Grid"},{"attributes":{},"id":"41695ec3-cee4-4533-958d-06c6b56afb73","type":"BasicTickFormatter"},{"attributes":{},"id":"e42a04d9-b75b-4ccb-9d1c-249568121c10","type":"LinearScale"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"90f08e4a-5360-41b1-8245-8bf70595e9f1","type":"Line"},{"attributes":{"data_source":{"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"},"glyph":{"id":"90f08e4a-5360-41b1-8245-8bf70595e9f1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"59e7cbfd-132c-4d07-a83a-d516b4867349","type":"CDSView"}},"id":"b70137f5-601b-4db6-a02e-395bedc0f31c","type":"GlyphRenderer"},{"attributes":{},"id":"6f85d14c-2100-48f8-af68-d526f72e692a","type":"BasicTickFormatter"},{"attributes":{},"id":"3e7321ff-12d7-4d91-8484-b210d3adec97","type":"LinearScale"},{"attributes":{"source":{"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"}},"id":"59e7cbfd-132c-4d07-a83a-d516b4867349","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c9897509-36f3-40f9-b717-832323d9a070","type":"Toolbar"},{"attributes":{},"id":"2e30afd0-6f4f-41c5-aa56-6fe054ab581d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"},"glyph":{"id":"33554436-b8f4-4307-a6a3-d77a23c8c891","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0ae245f5-e352-443f-8664-40bc86173764","type":"CDSView"}},"id":"784788e2-01eb-46a8-8065-b87dbe860db6","type":"GlyphRenderer"},{"attributes":{},"id":"858af690-1df9-4f40-bf18-7d0fd7d22e4b","type":"LinearScale"},{"attributes":{"source":{"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"}},"id":"0ae245f5-e352-443f-8664-40bc86173764","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"736722f3-c6fb-4d36-9905-cbc10d4b6c4c","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"5bc9c155-5dd6-4c1b-8eda-0af19628a527","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"736722f3-c6fb-4d36-9905-cbc10d4b6c4c","type":"LinearAxis"},{"id":"5bc9c155-5dd6-4c1b-8eda-0af19628a527","type":"LinearAxis"},{"id":"f99c90e2-2447-4a90-b9b6-01d6c6ee3c2d","type":"Grid"},{"id":"64bb061a-b043-4288-ad46-283191dae430","type":"Grid"},{"id":"74956ed1-72ad-4dfa-9b97-6ad3b53d43ac","type":"GlyphRenderer"},{"id":"cd0e9658-7df5-4e00-a5f5-8275fc551325","type":"GlyphRenderer"}],"title":{"id":"e42c8468-11d4-4fa2-810e-839acb2f77c3","type":"Title"},"toolbar":{"id":"c9897509-36f3-40f9-b717-832323d9a070","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2644c689-fa44-4036-97cd-0f6be1537e9a","type":"Range1d"},"x_scale":{"id":"858af690-1df9-4f40-bf18-7d0fd7d22e4b","type":"LinearScale"},"y_range":{"id":"090bc5b6-82f1-43e3-ac62-b4cb8b0af89e","type":"Range1d"},"y_scale":{"id":"fe719c5f-4922-4ae3-9d24-3a14fc5992aa","type":"LinearScale"}},"id":"b87cdd06-20c9-4259-b4e9-e23455f9c2a7","type":"Plot"},{"attributes":{},"id":"21b1838f-948d-498b-b757-ad6f6ff5e5db","type":"BasicTickFormatter"},{"attributes":{},"id":"fe719c5f-4922-4ae3-9d24-3a14fc5992aa","type":"LinearScale"},{"attributes":{"plot":null,"text":"IV"},"id":"e42c8468-11d4-4fa2-810e-839acb2f77c3","type":"Title"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"cf323ead-242a-4a23-a670-9804c9dee5a3","type":"BasicTickFormatter"},"plot":{"id":"b87cdd06-20c9-4259-b4e9-e23455f9c2a7","type":"Plot"},"ticker":{"id":"2f7eca47-6289-4e48-b34d-436e99bab5fc","type":"BasicTicker"}},"id":"5bc9c155-5dd6-4c1b-8eda-0af19628a527","type":"LinearAxis"},{"attributes":{},"id":"f2c00e0c-3b6d-4f75-9776-3f86b9caf4a7","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5c01a569-c61a-4aab-add2-571215525214","type":"BasicTickFormatter"},"plot":{"id":"b87cdd06-20c9-4259-b4e9-e23455f9c2a7","type":"Plot"},"ticker":{"id":"95619340-c8a0-40f4-922e-686e3e476fa4","type":"BasicTicker"}},"id":"736722f3-c6fb-4d36-9905-cbc10d4b6c4c","type":"LinearAxis"},{"attributes":{},"id":"cf323ead-242a-4a23-a670-9804c9dee5a3","type":"BasicTickFormatter"},{"attributes":{},"id":"5c01a569-c61a-4aab-add2-571215525214","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xi","yi","xii","yii","xiii","yiii","xiv","yiv"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}}},"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"733602ad-ef09-4bc7-a5e2-d5acd654d3f8","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}}},"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"2644c689-fa44-4036-97cd-0f6be1537e9a","type":"Range1d"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"090bc5b6-82f1-43e3-ac62-b4cb8b0af89e","type":"Range1d"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"6e97b15f-aac7-4d06-8571-b42b16dc50fd","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"848e1006-5806-45d7-b05f-8a5f655e3f96","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6e97b15f-aac7-4d06-8571-b42b16dc50fd","type":"LinearAxis"},{"id":"848e1006-5806-45d7-b05f-8a5f655e3f96","type":"LinearAxis"},{"id":"4d65cbdc-68d1-4e12-8a69-9c8e8fb34faa","type":"Grid"},{"id":"0a755002-ec79-40e8-8c20-2c70416bddc6","type":"Grid"},{"id":"e53569f2-3697-4cc6-85b0-73d41567dbcd","type":"GlyphRenderer"},{"id":"84184f95-1066-42bf-b1e6-bd19209917f5","type":"GlyphRenderer"}],"title":{"id":"e0e8aceb-073d-45f0-8cca-667f17582859","type":"Title"},"toolbar":{"id":"733602ad-ef09-4bc7-a5e2-d5acd654d3f8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2644c689-fa44-4036-97cd-0f6be1537e9a","type":"Range1d"},"x_scale":{"id":"d5e858aa-4346-4d76-ad2b-d3a8d7f05098","type":"LinearScale"},"y_range":{"id":"090bc5b6-82f1-43e3-ac62-b4cb8b0af89e","type":"Range1d"},"y_scale":{"id":"87eaf4dd-7a71-4989-a5e6-e5ab3a7e7228","type":"LinearScale"}},"id":"42395696-f2ed-4631-99c7-e81f646e2acc","type":"Plot"},{"attributes":{"plot":null,"text":"I"},"id":"e0e8aceb-073d-45f0-8cca-667f17582859","type":"Title"},{"attributes":{"source":{"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"}},"id":"f663ace8-8b98-4d48-8a07-7dd359bb2974","type":"CDSView"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"cf2b6e30-b241-42ee-ab0b-8d86ed6c5970","type":"BasicTickFormatter"},"plot":{"id":"42395696-f2ed-4631-99c7-e81f646e2acc","type":"Plot"},"ticker":{"id":"40cd03bf-75bb-48aa-ba28-edfe4549a3bc","type":"BasicTicker"}},"id":"6e97b15f-aac7-4d06-8571-b42b16dc50fd","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"41695ec3-cee4-4533-958d-06c6b56afb73","type":"BasicTickFormatter"},"plot":{"id":"42395696-f2ed-4631-99c7-e81f646e2acc","type":"Plot"},"ticker":{"id":"f4f1f848-16a0-4d9b-8d20-6e699bbbb0c1","type":"BasicTicker"}},"id":"848e1006-5806-45d7-b05f-8a5f655e3f96","type":"LinearAxis"},{"attributes":{},"id":"40cd03bf-75bb-48aa-ba28-edfe4549a3bc","type":"BasicTicker"},{"attributes":{"plot":{"id":"42395696-f2ed-4631-99c7-e81f646e2acc","type":"Plot"},"ticker":{"id":"40cd03bf-75bb-48aa-ba28-edfe4549a3bc","type":"BasicTicker"}},"id":"4d65cbdc-68d1-4e12-8a69-9c8e8fb34faa","type":"Grid"},{"attributes":{},"id":"f4f1f848-16a0-4d9b-8d20-6e699bbbb0c1","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"42395696-f2ed-4631-99c7-e81f646e2acc","type":"Plot"},"ticker":{"id":"f4f1f848-16a0-4d9b-8d20-6e699bbbb0c1","type":"BasicTicker"}},"id":"0a755002-ec79-40e8-8c20-2c70416bddc6","type":"Grid"},{"attributes":{"data_source":{"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"},"glyph":{"id":"34a715a1-d6f8-4538-ba98-1d3cff683074","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f663ace8-8b98-4d48-8a07-7dd359bb2974","type":"CDSView"}},"id":"e53569f2-3697-4cc6-85b0-73d41567dbcd","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fa2200a3-8af3-45e2-b4aa-8d2504c84314","type":"ColumnDataSource"},"glyph":{"id":"9a838c61-6cee-48a3-a28f-163e7471f97b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"3f0773e1-0be7-4a55-bd0d-1cb9c43ff33b","type":"CDSView"}},"id":"d8becdc1-73c3-4d98-807f-1dd4a5874ab5","type":"GlyphRenderer"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"34a715a1-d6f8-4538-ba98-1d3cff683074","type":"Line"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"06110e05-ee60-4dd4-a256-9b6d3d253872","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3b19f417-21ac-4593-8e56-5ffc06362751","type":"Toolbar"},{"attributes":{"data_source":{"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"},"glyph":{"id":"06110e05-ee60-4dd4-a256-9b6d3d253872","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d9741807-c84f-49c3-b16a-a8cf7f4c04c1","type":"CDSView"}},"id":"84184f95-1066-42bf-b1e6-bd19209917f5","type":"GlyphRenderer"},{"attributes":{"source":{"id":"00f01cae-cff2-4846-b3f9-d76ea91410c2","type":"ColumnDataSource"}},"id":"d9741807-c84f-49c3-b16a-a8cf7f4c04c1","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"e8eda8fe-8a3d-4719-b97c-f59a32b6627d","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"dd510846-3e70-461d-9b66-05f05af71637","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e8eda8fe-8a3d-4719-b97c-f59a32b6627d","type":"LinearAxis"},{"id":"dd510846-3e70-461d-9b66-05f05af71637","type":"LinearAxis"},{"id":"66406cf7-aeee-4199-bfb1-b592afbd6d32","type":"Grid"},{"id":"39650761-472e-4b4b-aba2-8a75d805a425","type":"Grid"},{"id":"d8becdc1-73c3-4d98-807f-1dd4a5874ab5","type":"GlyphRenderer"},{"id":"ba6a382e-78e4-4a64-a7d3-163f4d84b3fc","type":"GlyphRenderer"}],"title":{"id":"0a05d1e8-c5e4-4fce-8446-163d4ed04193","type":"Title"},"toolbar":{"id":"3b19f417-21ac-4593-8e56-5ffc06362751","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2644c689-fa44-4036-97cd-0f6be1537e9a","type":"Range1d"},"x_scale":{"id":"8c17f1b5-032e-4b7a-a6bf-e9a3a65cfec1","type":"LinearScale"},"y_range":{"id":"090bc5b6-82f1-43e3-ac62-b4cb8b0af89e","type":"Range1d"},"y_scale":{"id":"595d2f8f-5128-4f1d-87e3-e62c9e15b94e","type":"LinearScale"}},"id":"8978f107-d649-42ee-8bd0-39fa59d6e654","type":"Plot"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"2e30afd0-6f4f-41c5-aa56-6fe054ab581d","type":"BasicTickFormatter"},"plot":{"id":"8978f107-d649-42ee-8bd0-39fa59d6e654","type":"Plot"},"ticker":{"id":"050e7dd5-ec9b-4235-a7c7-b4ff091621f1","type":"BasicTicker"}},"id":"e8eda8fe-8a3d-4719-b97c-f59a32b6627d","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"6f85d14c-2100-48f8-af68-d526f72e692a","type":"BasicTickFormatter"},"plot":{"id":"8978f107-d649-42ee-8bd0-39fa59d6e654","type":"Plot"},"ticker":{"id":"03f7df51-53f1-4847-b419-2633ece6a9e9","type":"BasicTicker"}},"id":"dd510846-3e70-461d-9b66-05f05af71637","type":"LinearAxis"},{"attributes":{"plot":null,"text":"II"},"id":"0a05d1e8-c5e4-4fce-8446-163d4ed04193","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"7494aa17-acc4-4f44-a2f2-ed82ec79414a","type":"Circle"},{"attributes":{},"id":"050e7dd5-ec9b-4235-a7c7-b4ff091621f1","type":"BasicTicker"},{"attributes":{"plot":{"id":"8978f107-d649-42ee-8bd0-39fa59d6e654","type":"Plot"},"ticker":{"id":"050e7dd5-ec9b-4235-a7c7-b4ff091621f1","type":"BasicTicker"}},"id":"66406cf7-aeee-4199-bfb1-b592afbd6d32","type":"Grid"},{"attributes":{},"id":"03f7df51-53f1-4847-b419-2633ece6a9e9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"8978f107-d649-42ee-8bd0-39fa59d6e654","type":"Plot"},"ticker":{"id":"03f7df51-53f1-4847-b419-2633ece6a9e9","type":"BasicTicker"}},"id":"39650761-472e-4b4b-aba2-8a75d805a425","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"9a838c61-6cee-48a3-a28f-163e7471f97b","type":"Line"}],"root_ids":["7895e243-68e2-44d4-98da-ee909df17a1c"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"63c6f803-10cf-41da-ba61-401a0d17a4de","elementid":"b1741127-bdd3-425b-81fa-b25889363daf","modelid":"7895e243-68e2-44d4-98da-ee909df17a1c"}];
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