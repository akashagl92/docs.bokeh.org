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
      };var element = document.getElementById("3b46ee4e-4854-4879-8d2b-7af7b88ea9bd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b46ee4e-4854-4879-8d2b-7af7b88ea9bd' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c47d6850-9947-4d7d-9afa-f7313a4ff5b3":{"roots":{"references":[{"attributes":{"callback":null},"id":"0f8bbd24-3678-42b7-99d7-e5fd09e0293a","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"4ac42733-5db9-4ce1-bf37-ff8325fa8b3b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"7fe31c50-3737-4ec4-a42c-20e7b853b125","type":"ColumnDataSource"},{"attributes":{},"id":"0bea1659-b929-4d10-858a-ddfdf28fe49f","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"7dd47ad7-8f59-4c92-be28-73caab9cf74d","type":"Circle"},{"attributes":{"source":{"id":"27a9d99d-cf9b-46cd-892a-fd39ec962995","type":"ColumnDataSource"}},"id":"d620abea-c93f-4a99-a13c-91c71019e3f5","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1bf2d342-e887-4cce-8285-1631d65164cd","type":"BoxAnnotation"},{"attributes":{"source":{"id":"f1ec2fc6-5664-4a2a-a071-e1ba34998ead","type":"ColumnDataSource"}},"id":"55c48ff2-a919-4992-9519-b7b8707af3a3","type":"CDSView"},{"attributes":{"data_source":{"id":"b47184ae-8320-4df0-b59b-0f3be316f18d","type":"ColumnDataSource"},"glyph":{"id":"8f3bc72c-a762-4849-9732-c5c0d0a0956e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4bdc40f6-dbbb-46fd-b304-255d479f973c","type":"Circle"},"selection_glyph":null,"view":{"id":"c39bc8f3-36a1-49c9-a8b2-46d81c6c6d98","type":"CDSView"}},"id":"ff5c5233-a0a1-4ad0-abcb-817c8adce424","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1bf2d342-e887-4cce-8285-1631d65164cd","type":"BoxAnnotation"}},"id":"13a4b067-8566-43a5-b2fb-3d0c19fe711a","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"fd8310ad-1ccb-43ad-b95f-d20e56067ed0","type":"Circle"},{"attributes":{},"id":"cb90086d-baea-40fb-be60-666b6ba617bc","type":"SaveTool"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"c9f3c52e-6416-4836-a563-c2dccb9eb447","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"8f3bc72c-a762-4849-9732-c5c0d0a0956e","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"3752f5a2-27f8-4c93-a14b-62f0ad12461a","type":"Circle"},{"attributes":{"below":[{"id":"e05816e6-0984-4e82-8ab2-6b9a00565c75","type":"LinearAxis"}],"left":[{"id":"1119ea77-799e-49e8-a1c4-546a034e859e","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"e05816e6-0984-4e82-8ab2-6b9a00565c75","type":"LinearAxis"},{"id":"de8ea11c-094e-4dfc-8643-89c396e5c03b","type":"Grid"},{"id":"1119ea77-799e-49e8-a1c4-546a034e859e","type":"LinearAxis"},{"id":"2336d3e3-b483-4722-86a9-c4109d0b5283","type":"Grid"},{"id":"1bf2d342-e887-4cce-8285-1631d65164cd","type":"BoxAnnotation"},{"id":"15da1205-caaa-4798-904e-e8bcf2526c38","type":"Whisker"},{"id":"bf65463b-fa47-4c9c-b64b-de22545158b0","type":"GlyphRenderer"},{"id":"3b825ae7-95a8-4b4e-8531-356d5d5e7080","type":"GlyphRenderer"},{"id":"1d865e3b-89f7-4ea5-93ff-c8da2cfdd8c4","type":"GlyphRenderer"},{"id":"215ce0c6-966a-4f8e-a537-35fdc907e80d","type":"GlyphRenderer"},{"id":"3867868e-17fb-48a6-823a-05b8297f3e78","type":"GlyphRenderer"},{"id":"a7f618ac-a03d-48bd-b292-cfb29953a356","type":"GlyphRenderer"},{"id":"282f7aa9-02f1-4180-b289-1fde7c904341","type":"GlyphRenderer"},{"id":"e5b26b62-d8c7-4a34-8bb9-bc28ec491795","type":"GlyphRenderer"},{"id":"24f4e4b8-7862-4505-a6e2-e7cd10d377dc","type":"GlyphRenderer"},{"id":"c4cdca23-6a20-4354-b85b-234daa2b5594","type":"GlyphRenderer"},{"id":"57ee02fc-2837-4cdc-8f62-1379e72bc059","type":"GlyphRenderer"},{"id":"ff5c5233-a0a1-4ad0-abcb-817c8adce424","type":"GlyphRenderer"},{"id":"3d4869b6-f8e6-416f-b3b4-c0e372220952","type":"GlyphRenderer"}],"title":{"id":"5a823663-ab25-44b3-9dab-7a4efcc250f3","type":"Title"},"toolbar":{"id":"2dfe5e3e-0b84-4304-9548-7aabdcd447ea","type":"Toolbar"},"x_range":{"id":"aceb20dd-ee8a-4eb9-bd9d-86c377e3c1ec","type":"DataRange1d"},"x_scale":{"id":"42e9684c-4c5b-42b9-b711-9efa40d379f2","type":"LinearScale"},"y_range":{"id":"0f8bbd24-3678-42b7-99d7-e5fd09e0293a","type":"DataRange1d"},"y_scale":{"id":"54785678-062f-4c5d-bd7a-b0f9cf34657e","type":"LinearScale"}},"id":"c61b6328-43b7-492a-9422-041ab682ac3a","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"db1a5cea-bee9-40ac-a48e-44136b45bd55","type":"Circle"},{"attributes":{"source":{"id":"b47184ae-8320-4df0-b59b-0f3be316f18d","type":"ColumnDataSource"}},"id":"c39bc8f3-36a1-49c9-a8b2-46d81c6c6d98","type":"CDSView"},{"attributes":{},"id":"a8854cbb-b296-4ec2-9380-47cc39dd46d8","type":"PanTool"},{"attributes":{},"id":"54785678-062f-4c5d-bd7a-b0f9cf34657e","type":"LinearScale"},{"attributes":{"source":{"id":"465025b5-ba86-4955-9afe-245ceece216b","type":"ColumnDataSource"}},"id":"386e64ff-202e-4401-b1ee-e7ae9fabd92d","type":"CDSView"},{"attributes":{"callback":null,"column_names":["base","lower","upper"],"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]}},"id":"a9a98749-e375-4e94-be6c-5c40307acbf8","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"288ae23c-b57e-4c8f-ba43-8a2b157574f0","type":"BasicTickFormatter"},"plot":{"id":"c61b6328-43b7-492a-9422-041ab682ac3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"16b98080-cade-4642-af42-b4f984cf07c9","type":"BasicTicker"}},"id":"1119ea77-799e-49e8-a1c4-546a034e859e","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"15b42e42-5d84-4dbd-a065-5609ba4d6bf6","type":"Circle"},{"attributes":{},"id":"647d21b8-79cf-4dd6-bdb0-9b701bacf287","type":"WheelZoomTool"},{"attributes":{"source":{"id":"7fe31c50-3737-4ec4-a42c-20e7b853b125","type":"ColumnDataSource"}},"id":"236e5d2a-5593-48c5-b8ee-f399797f1956","type":"CDSView"},{"attributes":{"source":{"id":"eccb26de-c833-496c-9f7e-a3506157ea43","type":"ColumnDataSource"}},"id":"caa677c5-3e0c-43b1-a673-7afd11f0b241","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"8d3c2b49-5e8f-4a1b-ae76-cae1177e08f2","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"f449c7e8-4006-4e3c-b33e-7ffd576fb5f2","type":"Circle"},{"attributes":{"data_source":{"id":"465025b5-ba86-4955-9afe-245ceece216b","type":"ColumnDataSource"},"glyph":{"id":"06c8092f-849f-4a27-b391-32d0b0f87ade","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"db1a5cea-bee9-40ac-a48e-44136b45bd55","type":"Circle"},"selection_glyph":null,"view":{"id":"386e64ff-202e-4401-b1ee-e7ae9fabd92d","type":"CDSView"}},"id":"3d4869b6-f8e6-416f-b3b4-c0e372220952","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23baa495-bf99-4382-9877-2524daa24ffc","type":"ColumnDataSource"}},"id":"2f4a5f77-925b-40b7-a7e6-7da50e7f1c1b","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"c61b6328-43b7-492a-9422-041ab682ac3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"16b98080-cade-4642-af42-b4f984cf07c9","type":"BasicTicker"}},"id":"2336d3e3-b483-4722-86a9-c4109d0b5283","type":"Grid"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"3f49e308-4c1c-439b-b709-ecf4b81f7605","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a8854cbb-b296-4ec2-9380-47cc39dd46d8","type":"PanTool"},{"id":"647d21b8-79cf-4dd6-bdb0-9b701bacf287","type":"WheelZoomTool"},{"id":"13a4b067-8566-43a5-b2fb-3d0c19fe711a","type":"BoxZoomTool"},{"id":"cb90086d-baea-40fb-be60-666b6ba617bc","type":"SaveTool"},{"id":"778182e1-1443-4dfa-81ef-da495e81cc2f","type":"ResetTool"},{"id":"7c9b90a6-f661-472d-aecc-0d5092e68e21","type":"HelpTool"}]},"id":"2dfe5e3e-0b84-4304-9548-7aabdcd447ea","type":"Toolbar"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"289567a0-3bd6-40a2-9cab-18f76c076154","type":"TeeHead"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"69055d23-54b2-489c-939b-a86fbd46dd75","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"5a823663-ab25-44b3-9dab-7a4efcc250f3","type":"Title"},{"attributes":{"source":{"id":"25a7caf6-ddc3-4272-b664-13d27aa60ebb","type":"ColumnDataSource"}},"id":"6dd5b891-e025-4c99-ad24-7227c5b25aeb","type":"CDSView"},{"attributes":{"data_source":{"id":"7fe31c50-3737-4ec4-a42c-20e7b853b125","type":"ColumnDataSource"},"glyph":{"id":"69055d23-54b2-489c-939b-a86fbd46dd75","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c9338ff8-252f-40c6-b3e9-e7ef0c9e2a77","type":"Circle"},"selection_glyph":null,"view":{"id":"236e5d2a-5593-48c5-b8ee-f399797f1956","type":"CDSView"}},"id":"a7f618ac-a03d-48bd-b292-cfb29953a356","type":"GlyphRenderer"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"117d08a6-718e-4066-86d5-8b15827df91e","type":"TeeHead"},"plot":{"id":"c61b6328-43b7-492a-9422-041ab682ac3a","subtype":"Figure","type":"Plot"},"source":{"id":"a9a98749-e375-4e94-be6c-5c40307acbf8","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"289567a0-3bd6-40a2-9cab-18f76c076154","type":"TeeHead"}},"id":"15da1205-caaa-4798-904e-e8bcf2526c38","type":"Whisker"},{"attributes":{},"id":"7c9b90a6-f661-472d-aecc-0d5092e68e21","type":"HelpTool"},{"attributes":{},"id":"288ae23c-b57e-4c8f-ba43-8a2b157574f0","type":"BasicTickFormatter"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"117d08a6-718e-4066-86d5-8b15827df91e","type":"TeeHead"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"c9338ff8-252f-40c6-b3e9-e7ef0c9e2a77","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"4bdc40f6-dbbb-46fd-b304-255d479f973c","type":"Circle"},{"attributes":{},"id":"1795389a-465f-407b-879c-3d1aac59960d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"f1ec2fc6-5664-4a2a-a071-e1ba34998ead","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1795389a-465f-407b-879c-3d1aac59960d","type":"BasicTickFormatter"},"plot":{"id":"c61b6328-43b7-492a-9422-041ab682ac3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0bea1659-b929-4d10-858a-ddfdf28fe49f","type":"BasicTicker"}},"id":"e05816e6-0984-4e82-8ab2-6b9a00565c75","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"27a9d99d-cf9b-46cd-892a-fd39ec962995","type":"ColumnDataSource"},{"attributes":{},"id":"778182e1-1443-4dfa-81ef-da495e81cc2f","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"465025b5-ba86-4955-9afe-245ceece216b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f1ec2fc6-5664-4a2a-a071-e1ba34998ead","type":"ColumnDataSource"},"glyph":{"id":"7dd47ad7-8f59-4c92-be28-73caab9cf74d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1c427aaf-49af-4e85-a6ac-3661a280dafc","type":"Circle"},"selection_glyph":null,"view":{"id":"55c48ff2-a919-4992-9519-b7b8707af3a3","type":"CDSView"}},"id":"24f4e4b8-7862-4505-a6e2-e7cd10d377dc","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"27cfda25-b640-4b83-b3a1-4b14fa077295","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"eccb26de-c833-496c-9f7e-a3506157ea43","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"23baa495-bf99-4382-9877-2524daa24ffc","type":"ColumnDataSource"},"glyph":{"id":"27cfda25-b640-4b83-b3a1-4b14fa077295","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7c0134aa-7c10-4507-8500-1de2b91a5ee4","type":"Circle"},"selection_glyph":null,"view":{"id":"2f4a5f77-925b-40b7-a7e6-7da50e7f1c1b","type":"CDSView"}},"id":"bf65463b-fa47-4c9c-b64b-de22545158b0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a7344884-60ed-4d7d-919d-5908449e4052","type":"ColumnDataSource"},"glyph":{"id":"c9f3c52e-6416-4836-a563-c2dccb9eb447","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b5119ce0-3609-4d83-9b4a-3984dc2b275d","type":"Circle"},"selection_glyph":null,"view":{"id":"75eb2fcd-2ca1-4ca0-9381-fc42c58a62f9","type":"CDSView"}},"id":"3b825ae7-95a8-4b4e-8531-356d5d5e7080","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"ad28a194-d528-4634-9a11-46ab919a10c1","type":"Circle"},{"attributes":{"source":{"id":"4ac42733-5db9-4ce1-bf37-ff8325fa8b3b","type":"ColumnDataSource"}},"id":"d78493ef-2a70-469f-80a7-0be8a256717d","type":"CDSView"},{"attributes":{},"id":"16b98080-cade-4642-af42-b4f984cf07c9","type":"BasicTicker"},{"attributes":{"data_source":{"id":"27a9d99d-cf9b-46cd-892a-fd39ec962995","type":"ColumnDataSource"},"glyph":{"id":"ad28a194-d528-4634-9a11-46ab919a10c1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd8310ad-1ccb-43ad-b95f-d20e56067ed0","type":"Circle"},"selection_glyph":null,"view":{"id":"d620abea-c93f-4a99-a13c-91c71019e3f5","type":"CDSView"}},"id":"215ce0c6-966a-4f8e-a537-35fdc907e80d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"61daa53d-9374-4101-bfc9-e2f90260a49d","type":"ColumnDataSource"},{"attributes":{},"id":"42e9684c-4c5b-42b9-b711-9efa40d379f2","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"cc575acc-5e7c-45bb-87d8-4aff3869d548","type":"Circle"},{"attributes":{"source":{"id":"61daa53d-9374-4101-bfc9-e2f90260a49d","type":"ColumnDataSource"}},"id":"528bf878-ed60-4d12-ba18-e6f5fc618de2","type":"CDSView"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"80a56024-5a00-4766-ba2b-469f0a9ad778","type":"Circle"},{"attributes":{"data_source":{"id":"25a7caf6-ddc3-4272-b664-13d27aa60ebb","type":"ColumnDataSource"},"glyph":{"id":"80a56024-5a00-4766-ba2b-469f0a9ad778","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8d3c2b49-5e8f-4a1b-ae76-cae1177e08f2","type":"Circle"},"selection_glyph":null,"view":{"id":"6dd5b891-e025-4c99-ad24-7227c5b25aeb","type":"CDSView"}},"id":"57ee02fc-2837-4cdc-8f62-1379e72bc059","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4ac42733-5db9-4ce1-bf37-ff8325fa8b3b","type":"ColumnDataSource"},"glyph":{"id":"b9e0774a-50de-4780-bf91-b5f960cb9ab2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15b42e42-5d84-4dbd-a065-5609ba4d6bf6","type":"Circle"},"selection_glyph":null,"view":{"id":"d78493ef-2a70-469f-80a7-0be8a256717d","type":"CDSView"}},"id":"282f7aa9-02f1-4180-b289-1fde7c904341","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"23baa495-bf99-4382-9877-2524daa24ffc","type":"ColumnDataSource"},{"attributes":{"source":{"id":"a7344884-60ed-4d7d-919d-5908449e4052","type":"ColumnDataSource"}},"id":"75eb2fcd-2ca1-4ca0-9381-fc42c58a62f9","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"db95dc1c-5886-4dc5-a298-00d85e6f26a0","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"7ce4c134-4e18-4328-9e53-502f85f12e2f","type":"Circle"},{"attributes":{"data_source":{"id":"61daa53d-9374-4101-bfc9-e2f90260a49d","type":"ColumnDataSource"},"glyph":{"id":"7ce4c134-4e18-4328-9e53-502f85f12e2f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"db95dc1c-5886-4dc5-a298-00d85e6f26a0","type":"Circle"},"selection_glyph":null,"view":{"id":"528bf878-ed60-4d12-ba18-e6f5fc618de2","type":"CDSView"}},"id":"e5b26b62-d8c7-4a34-8bb9-bc28ec491795","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"7c0134aa-7c10-4507-8500-1de2b91a5ee4","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"06c8092f-849f-4a27-b391-32d0b0f87ade","type":"Circle"},{"attributes":{"plot":{"id":"c61b6328-43b7-492a-9422-041ab682ac3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0bea1659-b929-4d10-858a-ddfdf28fe49f","type":"BasicTicker"}},"id":"de8ea11c-094e-4dfc-8643-89c396e5c03b","type":"Grid"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"83d8cdfc-4309-4811-ace3-85dc91d9af22","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"a7344884-60ed-4d7d-919d-5908449e4052","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8e6b10da-e885-4c5b-975a-158706e23ad8","type":"ColumnDataSource"},"glyph":{"id":"3f49e308-4c1c-439b-b709-ecf4b81f7605","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cc575acc-5e7c-45bb-87d8-4aff3869d548","type":"Circle"},"selection_glyph":null,"view":{"id":"f96230f5-9350-41e3-a66f-c84783fb17f4","type":"CDSView"}},"id":"1d865e3b-89f7-4ea5-93ff-c8da2cfdd8c4","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"eccb26de-c833-496c-9f7e-a3506157ea43","type":"ColumnDataSource"},"glyph":{"id":"3752f5a2-27f8-4c93-a14b-62f0ad12461a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8c9425c0-b319-484b-8733-ccc26f7d421e","type":"Circle"},"selection_glyph":null,"view":{"id":"caa677c5-3e0c-43b1-a673-7afd11f0b241","type":"CDSView"}},"id":"c4cdca23-6a20-4354-b85b-234daa2b5594","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"b5119ce0-3609-4d83-9b4a-3984dc2b275d","type":"Circle"},{"attributes":{"source":{"id":"30ae8ffc-b41f-4a6f-b731-b743778103b1","type":"ColumnDataSource"}},"id":"124de76a-994a-4ea7-af7f-e70e793f5913","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"b47184ae-8320-4df0-b59b-0f3be316f18d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"8e6b10da-e885-4c5b-975a-158706e23ad8","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"1c427aaf-49af-4e85-a6ac-3661a280dafc","type":"Circle"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"b9e0774a-50de-4780-bf91-b5f960cb9ab2","type":"Circle"},{"attributes":{"data_source":{"id":"30ae8ffc-b41f-4a6f-b731-b743778103b1","type":"ColumnDataSource"},"glyph":{"id":"83d8cdfc-4309-4811-ace3-85dc91d9af22","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f449c7e8-4006-4e3c-b33e-7ffd576fb5f2","type":"Circle"},"selection_glyph":null,"view":{"id":"124de76a-994a-4ea7-af7f-e70e793f5913","type":"CDSView"}},"id":"3867868e-17fb-48a6-823a-05b8297f3e78","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"8c9425c0-b319-484b-8733-ccc26f7d421e","type":"Circle"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"30ae8ffc-b41f-4a6f-b731-b743778103b1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"25a7caf6-ddc3-4272-b664-13d27aa60ebb","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"aceb20dd-ee8a-4eb9-bd9d-86c377e3c1ec","type":"DataRange1d"},{"attributes":{"source":{"id":"8e6b10da-e885-4c5b-975a-158706e23ad8","type":"ColumnDataSource"}},"id":"f96230f5-9350-41e3-a66f-c84783fb17f4","type":"CDSView"}],"root_ids":["c61b6328-43b7-492a-9422-041ab682ac3a"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"c47d6850-9947-4d7d-9afa-f7313a4ff5b3","elementid":"3b46ee4e-4854-4879-8d2b-7af7b88ea9bd","modelid":"c61b6328-43b7-492a-9422-041ab682ac3a"}];
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