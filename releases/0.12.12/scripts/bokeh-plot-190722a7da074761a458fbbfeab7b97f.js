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
      };var element = document.getElementById("eabf5a63-4f92-4eed-995c-b61cec107c09");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eabf5a63-4f92-4eed-995c-b61cec107c09' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"eeaee5c2-b75e-4ca8-93fe-803704e508c9":{"roots":{"references":[{"attributes":{},"id":"a5e113d2-577d-49bb-a211-54612a7b07f3","type":"LinearScale"},{"attributes":{},"id":"2ee69c51-0bdc-47b8-831e-9d41f9286eb6","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9fe94ba0-1b2e-401b-ba9a-f5a602dbc640","type":"BasicTickFormatter"},"plot":{"id":"57fee202-a0d3-4ebe-9822-3db422927cad","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c66f6d2-a2de-4c34-a6c4-ea37cfa20383","type":"BasicTicker"}},"id":"069fb2e6-5e78-4feb-b527-cc55c020effa","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"d360cbd7-30fd-4403-ba09-c2fb3a90befc","type":"PolyAnnotation"}},"id":"4361ed14-68fb-4c1a-a4de-4ccdcbe6e0ce","type":"LassoSelectTool"},{"attributes":{},"id":"ebb9bfbd-36ea-4f89-866a-3e5660b739b2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3887d545-adba-44c2-a8d1-bc46eea88539","type":"ColumnDataSource"},"glyph":{"id":"e343deb9-7f0c-4cb5-8815-8f77749f7891","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3044e82-efe2-42ab-b643-ac7887af0e9f","type":"Circle"},"selection_glyph":null,"view":{"id":"81a1d648-9499-4667-8ca3-d27f714d4115","type":"CDSView"}},"id":"476c9211-4e1f-4b4e-9399-5bcdd62c4508","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4361ed14-68fb-4c1a-a4de-4ccdcbe6e0ce","type":"LassoSelectTool"}]},"id":"14fe887c-dfa6-4d4a-8b11-b796053f5aca","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"e343deb9-7f0c-4cb5-8815-8f77749f7891","type":"Circle"},{"attributes":{"plot":{"id":"57fee202-a0d3-4ebe-9822-3db422927cad","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebb9bfbd-36ea-4f89-866a-3e5660b739b2","type":"BasicTicker"}},"id":"224cc2e0-1d9e-44d2-bfe8-af4aacbcd004","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","ym"],"data":{"x":[0,1],"ym":[0.5,0.5]}},"id":"6bd0e756-0dae-4f81-a59f-360b3e86ac43","type":"ColumnDataSource"},{"attributes":{},"id":"9fe94ba0-1b2e-401b-ba9a-f5a602dbc640","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6bd0e756-0dae-4f81-a59f-360b3e86ac43","type":"ColumnDataSource"},"glyph":{"id":"26267b8a-90ca-4c83-a737-7eed36b0d7f1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0baf8ffb-4142-42c9-8303-1f46c10d6b20","type":"Line"},"selection_glyph":null,"view":{"id":"88cb2d87-4000-421e-9ec9-ee5d47f7c747","type":"CDSView"}},"id":"ee73130c-394c-492b-865b-3172ff1fef12","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"57fee202-a0d3-4ebe-9822-3db422927cad","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c66f6d2-a2de-4c34-a6c4-ea37cfa20383","type":"BasicTicker"}},"id":"c994cccd-7b0f-401c-914d-04e1d6b9482f","type":"Grid"},{"attributes":{"formatter":{"id":"2ee69c51-0bdc-47b8-831e-9d41f9286eb6","type":"BasicTickFormatter"},"plot":{"id":"57fee202-a0d3-4ebe-9822-3db422927cad","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebb9bfbd-36ea-4f89-866a-3e5660b739b2","type":"BasicTicker"}},"id":"942fbdb7-11be-4eed-b5ad-dd6cc008cb96","type":"LinearAxis"},{"attributes":{"args":{"s2":{"id":"6bd0e756-0dae-4f81-a59f-360b3e86ac43","type":"ColumnDataSource"}},"code":"\\n        var inds = cb_obj.selected[&#x27;1d&#x27;].indices;\\n        var d = cb_obj.data;\\n        var ym = 0\\n\\n        if (inds.length == 0) { return; }\\n\\n        for (i = 0; i &lt; d[&#x27;color&#x27;].length; i++) {\\n            d[&#x27;color&#x27;][i] = \\"navy\\"\\n        }\\n        for (i = 0; i &lt; inds.length; i++) {\\n            d[&#x27;color&#x27;][inds[i]] = \\"firebrick\\"\\n            ym += d[&#x27;y&#x27;][inds[i]]\\n        }\\n\\n        ym /= inds.length\\n        s2.data[&#x27;ym&#x27;] = [ym, ym]\\n\\n        cb_obj.change.emit();\\n        s2.change.emit();\\n    "},"id":"f1fd578a-6cbf-41f7-8366-44a81117777e","type":"CustomJS"},{"attributes":{"line_alpha":0.6,"line_color":"orange","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"26267b8a-90ca-4c83-a737-7eed36b0d7f1","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":5,"x":{"field":"x"},"y":{"field":"ym"}},"id":"0baf8ffb-4142-42c9-8303-1f46c10d6b20","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3044e82-efe2-42ab-b643-ac7887af0e9f","type":"Circle"},{"attributes":{"callback":null},"id":"6988e02b-565c-4cb6-9cc4-f2f178a3ad6e","type":"DataRange1d"},{"attributes":{},"id":"5c66f6d2-a2de-4c34-a6c4-ea37cfa20383","type":"BasicTicker"},{"attributes":{"source":{"id":"3887d545-adba-44c2-a8d1-bc46eea88539","type":"ColumnDataSource"}},"id":"81a1d648-9499-4667-8ca3-d27f714d4115","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"d360cbd7-30fd-4403-ba09-c2fb3a90befc","type":"PolyAnnotation"},{"attributes":{"callback":{"id":"f1fd578a-6cbf-41f7-8366-44a81117777e","type":"CustomJS"},"column_names":["x","y","color"],"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.011318397784809253,0.7845256634972981,0.6815094186980125,0.5793325464734906,0.005590887642853537,0.6827311763106354,0.6093655785810218,0.4560892604783737,0.33168271965192575,0.19218656875874573,0.8866839713540727,0.6566177020363643,0.1097045415561716,0.8284814241326636,0.18947261106262325,0.2990870801247717,0.8784114773443856,0.6458216069827172,0.874456634923301,0.746717041564946,0.05262909591031251,0.8598656497785414,0.5323626385782638,0.683753260535048,0.6614589025316646,0.5257559275619327,0.3169182304093683,0.42960550120286967,0.2578963313675826,0.06981221091529,0.5289538665267159,0.8142638988257265,0.5658466778489125,0.06886897597200226,0.9380183991806345,0.9425465103765601,0.4105180737853241,0.6156308130041871,0.980713915548099,0.6935378457534715,0.6827636250880401,0.2679790039651143,0.43228471425937665,0.44814319766566224,0.5510914058258779,0.6305611717320887,0.8178654676081311,0.7555408256580436,0.7345156408169814,0.7333635888829785,0.17583634211994614,0.8863468392903897,0.7765720586538771,0.504711214404867,0.547633159960562,0.3866023534305747,0.3880115567122886,0.31728755337583814,0.8427793051329789,0.6564252329867953,0.05760542119633327,0.22092286991098664,0.9114369551520455,0.6006139774774721,0.8851101533999435,0.039178165518696684,0.9350481140273221,0.11612068019678523,0.13004193481520165,0.50720882326174,0.5286450495244381,0.01781801559353302,0.6481607364122208,0.6516045769818826,0.9038135634649709,0.9938623949536938,0.7464121675149402,0.5736014955023802,0.9674547415978112,0.9501030697110443,0.9733968618526566,0.6761480095243274,0.2304294141143658,0.653168856831682,0.33990707232753803,0.7478696931785465,0.04494446212076142,0.7430387618604585,0.6171646229503662,0.05531792811691805,0.7951866167223517,0.9131209780986475,0.8240547675452685,0.8104488301040346,0.6042023640816508,0.5585555148915224,0.19645367136460923,0.44493973356139804,0.8978351144278726,0.6897755667745994,0.6799561132868136,0.5184126859739184,0.5971140837882222,0.14955801405600222,0.08091875928317671,0.7300148132530343,0.20165568279303803,0.15991886332238647,0.21719655581626496,0.4893407653848767,0.9973918612279938,0.5265224652839317,0.21663865890288236,0.23756293724441213,0.4009382005110548,0.5017561908451535,0.9475208124722532,0.06266092733458573,0.3053993986570753,0.897501996708664,0.8707782892472432,0.8416491440573766,0.9074580480785764,0.2934106928828665,0.6858249848359005,0.21408022237981483,0.8480490032964875,0.5374082690263849,0.13076642231774693,0.8163352338376568,0.764066606039241,0.29920715434195155,0.5953247205701996,0.7825001741688979,0.09394703378319991,0.20739962980183635,0.19490785640060648,0.4750958964677454,0.11599497110380919,0.7813951884063481,0.4317087048717787,0.16412615008369658,0.613396882305632,0.5019420288584876,0.8640720335923604,0.3407667492452041,0.9846585882276891,0.4847489475179828,0.6800524979960477,0.37875287643627553,0.6918024761175952,0.44512518201235496,0.45973256660104533,0.8621757995437633,0.2589240852905693,0.3103030358600115,0.02839947498782891,0.1020671155506312,0.47231273888536895,0.566485030123506,0.8913125629243147,0.9777554919861677,0.7786519075374746,0.5529577740047398,0.7481317116863458,0.5654337601375864,0.9112304073232418,0.48994175603782386,0.8548639822369967,0.08146030020453288,0.8551015356508337,0.33279814297281163,0.9547532795571059,0.9839625724014227,0.13786078618827047,0.027573575572772624,0.36408971429528736,0.7846344932100536,0.4866267708211812,0.2671000045412384,0.5671854014054754,0.9310277423871842,0.06124670560168255,0.38264271642515957,0.5615142645045741,0.31100509573977986,0.9730701987535371,0.028484751369782346,0.3364991238948074,0.12188450656982908,0.953759465849359,0.18117295061320093,0.12756132022247435,0.6328245730274006,0.7944512014999685,0.25013739873241214,0.8209311068196224,0.2364459023663411,0.6453479432695796,0.01668836497185977,0.3593979007931014,0.057058707860993985,0.35956157082648355,0.6492515245303001,0.12936647233859455,0.6516087906178025,0.3165078370311035,0.49910947950361484,0.9210123237738054,0.9949426556572761,0.44301932408385747,0.039406660291959494,0.7443516399993898,0.964198965383086,0.9966987515077181,0.3118786354291532,0.69207807741441,0.09731203414619793,0.030517110460008046,0.7863329897154976,0.20087395421785226,0.5729832693560507,0.9839186853144375,0.1537588183025489,0.1536164926918736,0.325119524286996,0.3389839266349123,0.4916731797656133,0.9186846478458404,0.4193439769774987,0.5950304791498843,0.5193102205310227,0.2850082244303942,0.9482394665358092,0.8981915953005515,0.7922444302840844,0.10087609284703092,0.2228073192685992,0.46792461029453036,0.4897863457023903,0.2931095599499639,0.6389515002129909,0.9384539142542998,0.8950627734528349,0.2553327074718067,0.5948029485067134,0.6978341491297397,0.49708811416388754,0.7383831578822456,0.35377462353734346,0.4617884175495728,0.25265230664649185,0.6463639269422582,0.22510926127479458,0.517009450300766,0.00076815201710978,0.8322844691086938,0.3642122723306592,0.17503598712512425,0.0845684607540289,0.25452337574155104,0.5848644120739427,0.03482301116218356,0.24252365860861658,0.5997823691453865,0.3008372418629335,0.2327638121244311,0.6017916345544415,0.5328039939510757,0.8907227993301293,0.30613725953265736,0.6910481587239804,0.11455134068166672,0.5018490921343138,0.10173939843375368,0.5506655934081882,0.5976662740321214,0.38821629532393764,0.550405288383617,0.7420287742273467,0.9947160975165118,0.3514037902275018,0.09508356360568049,0.378063646164162,0.33583482413264065,0.08660225793213117,0.44444997940022757,0.10702257769669132,0.3499201127617476,0.6310572846143961,0.7889633732968963,0.9774496652503611,0.18395121598622843,0.1531984760075018,0.6440946384583208,0.4566971869594306,0.13497410794356812,0.7347847178599655,0.7957503041751484,0.1449621823931011,0.9644866954391784,0.44154732196428803,0.8186702305037313,0.4335134822004497,0.23484909383309738,0.17197882881109838,0.35621107886311865,0.4274705397923019,0.696517489682407,0.25393519631721584,0.27051817767928277,0.26511082189356594,0.11330269375014179,0.5096775362517588,0.309570497611491,0.9499888990574455,0.4304381382667536,0.562688465801564,0.03331066312231101,0.06815796957657039,0.505284649673913,0.06755674973866088,0.3046618124928926,0.4973302075287853,0.05546883381575718,0.5096894024797772,0.308015875673893,0.45005192818426665,0.14101221985681722,0.21549656333981693,0.4270692428881313,0.6344958298321562,0.8886946219416669,0.7847982893177811,0.656597393929177,0.33481092979881655,0.8588270776348315,0.6315259986973792,0.23644888889052862,0.3666089758095262,0.8419381885331858,0.4994418814618413,0.6459822770641985,0.8858400534770542,0.7057106687743244,0.014685289566055526,0.860218305915923,0.08392626499949207,0.9230835520268569,0.7664978230060903,0.5317748883086268,0.5626267728901762,0.3035139824311762,0.16402700529313385,0.031633267705637125,0.4338420855942109,0.9426056919369533,0.428549028893611,0.667704117466064,0.21320541382951863,0.8853593147072508,0.4146689720848967,0.7081393833042512,0.42871751654905044,0.569660926602979,0.7555363160782943,0.4165668209746417,0.8991426231083,0.40280115444316034,0.9214020199454156,0.3185737981623321,0.07072530692753698,0.06283365372026506,0.04880545910446765,0.22461486483341286,0.03484406207844659,0.9309004470699129,0.6762334455011417,0.5416982874077466,0.9789228505134014,0.38235165039378693,0.004657115670058221,0.8191325415118863,0.2013637522516658,0.9472431828396715,0.42975024737458556,0.8919712119123447,0.12600151167491536,0.4607851061542315,0.9007993057157399,0.06241617615772865,0.025225787223275287,0.9271237079662532,0.22571493865588155,0.24395176285794518,0.04123879269721287,0.16769250611207298,0.11593685151455935,0.9510545850717244,0.4429793895413634,0.20963453606602078,0.1102672216830205,0.332865062599646,0.2298315176236384,0.6428259153571847,0.21552434215170724,0.2453291752992509,0.5811029851289115,0.7280890389505418,0.08919613383204927,0.2332502236070103,0.49992571251187057,0.5988147335966135,0.736857302353678,0.44382103549369845,0.22118725217081026,0.10648960488416981,0.5011480481524571,0.15976377295390942,0.03481777570201394,0.36186302280488025,0.4401078334097981,0.3124282880458208,0.45602277517415346,0.9709197926189721,0.9073521129538341,0.5261712624836576,0.3867935281965824,0.953561769853926,0.6774255166033809,0.4766724129566883,0.521656321619211,0.6843096677811291,0.15438491595731296,0.3101127624314717,0.159919046811149,0.4536295019030011,0.9271575583555145,0.3396901463188716,0.09303570577127862,0.21568406759480574,0.6402473259178506,0.2719132974407774,0.31842224769074456,0.41829040114505467,0.45267334574766416,0.2678065653084257,0.09824932501747607,0.6458366237953929,0.3705191685311895,0.19744876801643196,0.8429752075805104,0.22116484368808964,0.8442843557222233,0.8835114654513735,0.969577542534816,0.10437802042627486,0.6398062174688492,0.3680309326758534,0.5190351187856608,0.42832842801326165,0.4215220185878146,0.3667205830778729,0.42129437659816393,0.8855214892693686,0.7746195024537792,0.14323229724604047,0.2014600752242105,0.9785107818440719,0.44428427966591333,0.9698344646542888,0.9204831674359096,0.11483216712168409,0.6608416255047791,0.2410989833599113,0.5475996208414611,0.7807099885514237,0.587515545846014,0.7246291414938769,0.55221664213849,0.22729031757508023,0.5113824456336088,0.8225388717594921,0.5915101382706245,0.0030971364483889374,0.2376731922110743,0.6939601708691948,0.03991044011083322,0.42473683183763367,0.7007874902986035,0.7502035441000902,0.6970102971471859,0.6546529475676164,0.4155856618221968,0.43899373194406455,0.3825797717381998,0.5057492024508631,0.711231189730376,0.4838600274239455,0.009549220274634673],"y":[0.3098803075668185,0.862355918026692,0.34679732995293167,0.3229134676277061,0.2327238933220025,0.8405326237571922,0.4819744023489754,0.0823927382256302,0.2790967432469509,0.32188203300394014,0.9786085586304444,0.35079500804861397,0.0671686852242579,0.17584446477715443,0.635144267226585,0.4825010474589956,0.4489889368669733,0.1282994394619542,0.9958409305307506,0.15599537997237523,0.6473777970968222,0.8842422640914407,0.749354073743129,0.06470383117142953,0.9342562326785059,0.7760909415242963,0.11339412426318074,0.9473718757756152,0.2681502504249741,0.06568103607279707,0.156464453885785,0.886416719690594,0.6334763180579519,0.7087044348424825,0.05416704971012398,0.4520045123200599,0.9430465936990992,0.7381953293535743,0.24834509102604851,0.13970991675509103,0.5257886545960216,0.29162879175801404,0.715724661109917,0.04670730828402503,0.9481955638212084,0.2279696762032405,0.7024678143819827,0.7082885382688577,0.2139429360597076,0.11115688620347042,0.3623143393723174,0.8693901740779751,0.9182219815759727,0.3797964805586077,0.48398410187160357,0.41197115087627023,0.7874669951159792,0.07038199199126483,0.19270613408508885,0.08159563328826847,0.9985412978895486,0.20001753623407703,0.6204936086706616,0.21526336326314532,0.13991399848152508,0.9027475943024666,0.6831613750660581,0.5882637455319879,0.36630973615020124,0.9386392392239653,0.06984195839372975,0.5215690462521047,0.861990159715235,0.15906965486868518,0.8501760959394216,0.533966244852222,0.0340995955746054,0.5015025559309417,0.36498940871128327,0.7970041176984676,0.03711541604381419,0.6392290714066214,0.21979044408306014,0.6160068965115091,0.3310282384978248,0.3240485655997195,0.8125386071810864,0.14049211886718915,0.7523963717644091,0.9834942641156694,0.05898526770449086,0.7248094225920914,0.5009332361741525,0.2237080229543077,0.9062334606342036,0.1582703012427793,0.32829016236401387,0.9260865026928076,0.5614942197662389,0.37010046398542373,0.7649443089397948,0.19940958165132416,0.989384065339076,0.49917634475376693,0.8241070590852021,0.8764599092777814,0.7919505478066685,0.38978739464838885,0.5775325743708206,0.8230115208754071,0.6270419340198866,0.7517907907480404,0.003147519138395949,0.6932168555390533,0.6361564764282814,0.9748691683837324,0.7976435259388567,0.17365143453963772,0.6823075331731652,0.4726709835173283,0.07657156197206938,0.7998378251973628,0.47375099662398523,0.13277207677305425,0.5775772247970514,0.4010413958933391,0.6377675289559029,0.22993991068104025,0.34168470215610436,0.9742512251951283,0.9451572914386753,0.5591229085746341,0.24336793214785246,0.08958448317714074,0.9481417703428194,0.7886641820531981,0.17873397077682363,0.7074730955379104,0.42816259653632494,0.22682511084023782,0.6726347752196432,0.6139477191005591,0.3357591679437253,0.6241203814303317,0.8971622525488929,0.3978258119678031,0.6437985287385062,0.07982026181758017,0.36083609287967144,0.19683783383836906,0.45914267073150283,0.35466460570849623,0.37452328131722645,0.3004912036095645,0.7410375314432618,0.4239411682829858,0.8521580775530112,0.388211773191777,0.4805345267440092,0.7619034726143352,0.2240201699793506,0.9591406461785495,0.10454289744941592,0.2811838324620525,0.5256331997838607,0.7268801475082961,0.5610273682642792,0.7463183364304015,0.8344684065608927,0.44718064444091776,0.4395694334197342,0.7829090688133711,0.7213399622594913,0.9308426937347136,0.8591440240811841,0.02085784548204317,0.6117406531085097,0.08304065314597464,0.9648274212076094,0.3182624579673624,0.09729893273151491,0.3020055300974046,0.05535996588484171,0.3703818902843581,0.43474880046781317,0.6991892277787046,0.5822879861482063,0.8729582307214945,0.9863948031615511,0.5423930848247921,0.19944349815900986,0.0015623577984117398,0.37656528591087324,0.5719401139945772,0.812827657870399,0.5291493713727076,0.0020586230746271195,0.39134532314738424,0.31240513502609046,0.11600897627690154,0.0416704615139849,0.8904305369524554,0.41436718108999826,0.4823780042991084,0.0009126917345947394,0.8926891877377855,0.5498706691008168,0.5489619951136643,0.08290237191791339,0.27076063097203773,0.06285812208381003,0.14991137765620666,0.3342169340042338,0.2535574292754671,0.539672503134287,0.11669173338425354,0.42321048434994024,0.22650856226209048,0.6176583220797717,0.9740828705318734,0.6276601614237809,0.818217185703278,0.4033506306740646,0.7884045923658558,0.8438126501364004,0.5074753366439855,0.29686756754658306,0.9556371204884088,0.38482614189673614,0.5366169050500776,0.09359702116146518,0.476789106765105,0.09206189140722632,0.005522616788407486,0.727593694682757,0.44434016674039056,0.16652641846397853,0.1736341845422701,0.934643914704928,0.07196170619909537,0.36770331704141923,0.5077236651644363,0.42413732906693447,0.4428510901925157,0.6733865098551326,0.0674902878196415,0.9872060233252609,0.4872002122061083,0.3718931651207371,0.5565967254079983,0.36576531176431104,0.18493598098507613,0.23127880450011906,0.5115682028081935,0.7347313605664134,0.3751219805060193,0.7791279146121687,0.11244533534515089,0.8831316099067019,0.509594750196394,0.1573355686541974,0.41785992482711953,0.7123948906788332,0.39988553756231004,0.6366887940622993,0.8572278230355891,0.4405065064440049,0.9046123832525863,0.041735786568548705,0.17264384689065193,0.5853393751185866,0.9439133132634183,0.6438467675931433,0.4381515143666592,0.40669181242549046,0.1297869354202662,0.0044011457012264055,0.42490813132876526,0.05703593029786769,0.5073434029939647,0.7922207405629639,0.05851283112837302,0.8156589967717421,0.5666989512332045,0.7601232608631043,0.4078990218541676,0.029820837075275608,0.7409799461116591,0.44472149839775343,0.2747463110843995,0.6988635371925417,0.6414539782227743,0.5362941675812254,0.9623316414334077,0.08251750836978,0.9365153634417781,0.15366315324967095,0.4636623388190181,0.6205485733928351,0.9332811166026163,0.44337435845261086,0.9196969688273282,0.669379262431444,0.17270796020748613,0.6074229241947209,0.8009404560735246,0.3460116190729724,0.7338952898477745,0.5241290069261627,0.41297143771500155,0.17025255499432845,0.07556480192790793,0.050383405211669174,0.8759723904181973,0.24844828159854948,0.8297994462563191,0.6529341788717059,0.19777948097741915,0.2758742508384695,0.12919927506192996,0.35768272363603637,0.33315169942973355,0.47708995792047926,0.22586018398885677,0.018190525700218618,0.7133882874739477,0.1366717211309023,0.9885786054003759,0.354080034417936,0.27569298192309055,0.5729044446923459,0.6820553973715906,0.0244630714289662,0.11477401995506642,0.38236930236570954,0.25602316916125656,0.7794811102960516,0.9224497755130301,0.6410681351192548,0.7374684007678209,0.8575658040710372,0.6579444517454193,0.2600093249836024,0.4040663596526356,0.5851147904211079,0.24800244341382194,0.267272966336104,0.8839812512409899,0.8265753906443782,0.43607722461993603,0.8728865300565974,0.34939233707754835,0.6181916877693934,0.031554094704774216,0.7414759983759625,0.5717546245324938,0.93016645377912,0.08213191594420499,0.486331214242792,0.9796288499756767,0.7734198007282629,0.9925207518554077,0.6858639746115535,0.9638670453872067,0.08984396395470728,0.38476415399995245,0.46531090639681627,0.8190436398858377,0.31726478208112574,0.5029471049310339,0.8461155801289312,0.20211386356548666,0.9228926971153086,0.6990749717926311,0.6229685456831594,0.10307359611802114,0.6716259183365028,0.8287180487886848,0.4670885611231681,0.8027923178196906,0.43076558296245626,0.5339266406366707,0.34545077122812773,0.6579209236042083,0.36227306875386167,0.7089833619505967,0.5687959148545044,0.06886246265576756,0.054193645270362634,0.5966757856722288,0.42943877894501137,0.8718719578103502,0.1419666634869844,0.597097970780325,0.4973787698163089,0.4767423161262513,0.062087785114093186,0.7844925107657154,0.7380208612621143,0.08178905866166497,0.12203392084567233,0.08417430939605874,0.2667702111376148,0.9098568694285254,0.7419728078703327,0.7954633043430372,0.5624267579503466,0.4235503344252439,0.8272233413491179,0.2657021067146388,0.8960953138437022,0.3920586641827801,0.22742261273701825,0.5202695274847117,0.3163111084785907,0.4725058788439147,0.3954375652359561,0.9982071863095124,0.22917399077717315,0.3642721868954639,0.27721604271700506,0.3299869917662044,0.8573508930587679,0.44529900689207846,0.31913246058666456,0.27986555212581377,0.7659127994426262,0.05953909595378315,0.29294675323641106,0.009994597321544951,0.6812909525984203,0.25844386825658205,0.59994359832751,0.8361928531865893,0.7867744152863055,0.2678574439132696,0.7198562086141496,0.36626787730960775,0.2354636654302651,0.7852218125582204,0.5123025685115318,0.3600394773863155,0.5457236914792717,0.8791115304972846,0.5599836929140066,0.21830563678382475,0.08338185310112689,0.7070355061564992,0.11379243455398458,0.2661545300244774,0.041090991849877634,0.01234713131626164,0.7295311463435914,0.2378015473943741,0.9785639636099362,0.1016713319598318,0.6604129168427747,0.9201872385212594,0.7762440444828879,0.8619867568533186,0.32753849961007664,0.3524248306691329,0.8180187626017276,0.7447640676735945,0.6838209207597126,0.3479300252367642,0.09725329343622402,0.0719005655330297,0.30961709945578486,0.17722786279953573,0.23146712023938643,0.684922469833551,0.7914527425139171,0.618444075715691,0.6645472479874577,0.2879858073398245,0.062161781090121715,0.5306958152552429,0.16569720931325116,0.9399277093196027,0.5113028290140925,0.08681211067128702,0.4892977802951861,0.9517067505780504,0.7875884456949424,0.8010346259049842,0.06147995051624666,0.9657756546565378,0.6228524074464931,0.9245613096606583,0.5297869195617507,0.6762611024129176,0.8886011589750498,0.6310954623174856,0.30959423591678514,0.99325881074528,0.7802804329728067,0.8112878329574603,0.26672437551673756,0.5763836486115653]}},"id":"3887d545-adba-44c2-a8d1-bc46eea88539","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Select Here"},"id":"7fa7b7ac-a2d6-47b2-ba7f-6d934225d807","type":"Title"},{"attributes":{"source":{"id":"6bd0e756-0dae-4f81-a59f-360b3e86ac43","type":"ColumnDataSource"}},"id":"88cb2d87-4000-421e-9ec9-ee5d47f7c747","type":"CDSView"},{"attributes":{"below":[{"id":"942fbdb7-11be-4eed-b5ad-dd6cc008cb96","type":"LinearAxis"}],"left":[{"id":"069fb2e6-5e78-4feb-b527-cc55c020effa","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"942fbdb7-11be-4eed-b5ad-dd6cc008cb96","type":"LinearAxis"},{"id":"224cc2e0-1d9e-44d2-bfe8-af4aacbcd004","type":"Grid"},{"id":"069fb2e6-5e78-4feb-b527-cc55c020effa","type":"LinearAxis"},{"id":"c994cccd-7b0f-401c-914d-04e1d6b9482f","type":"Grid"},{"id":"d360cbd7-30fd-4403-ba09-c2fb3a90befc","type":"PolyAnnotation"},{"id":"476c9211-4e1f-4b4e-9399-5bcdd62c4508","type":"GlyphRenderer"},{"id":"ee73130c-394c-492b-865b-3172ff1fef12","type":"GlyphRenderer"}],"title":{"id":"7fa7b7ac-a2d6-47b2-ba7f-6d934225d807","type":"Title"},"toolbar":{"id":"14fe887c-dfa6-4d4a-8b11-b796053f5aca","type":"Toolbar"},"x_range":{"id":"64a0c4ac-5c44-41d7-b969-4ba5368629dc","type":"DataRange1d"},"x_scale":{"id":"a5e113d2-577d-49bb-a211-54612a7b07f3","type":"LinearScale"},"y_range":{"id":"6988e02b-565c-4cb6-9cc4-f2f178a3ad6e","type":"DataRange1d"},"y_scale":{"id":"277606a8-ee87-4138-abc5-6c2abc7e02e7","type":"LinearScale"}},"id":"57fee202-a0d3-4ebe-9822-3db422927cad","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"277606a8-ee87-4138-abc5-6c2abc7e02e7","type":"LinearScale"},{"attributes":{"callback":null},"id":"64a0c4ac-5c44-41d7-b969-4ba5368629dc","type":"DataRange1d"}],"root_ids":["57fee202-a0d3-4ebe-9822-3db422927cad"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"eeaee5c2-b75e-4ca8-93fe-803704e508c9","elementid":"eabf5a63-4f92-4eed-995c-b61cec107c09","modelid":"57fee202-a0d3-4ebe-9822-3db422927cad"}];
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