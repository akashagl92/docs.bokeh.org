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
      };var element = document.getElementById("ecccc6ac-addb-492b-8d5f-8401e5f59763");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ecccc6ac-addb-492b-8d5f-8401e5f59763' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2120851e-836a-452e-a183-71eabed72fe4":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"date"},"y":{"field":"adj close"}},"id":"384eb287-e9af-4601-a242-47691eabdaf6","type":"Line"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"25beab0e-fa41-4d0e-b077-9845d16c49c0","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"Hover Tooltip Formatting"},"id":"0f39887c-470f-403f-9ef0-5083c7a781c8","type":"Title"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"1bd7183d-bcc5-4075-8aa4-a2d89644cb7f","type":"AdaptiveTicker"},{"attributes":{"months":[0,4,8]},"id":"b980b17d-94ec-4593-82aa-3ddaec277cf0","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"plot":{"id":"0a2e09f0-30ac-4365-b046-d55f4dc384e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"85b6cec8-e067-488a-8cda-cde873eccdf8","type":"BasicTicker"}},"id":"f2f4e84a-47f7-4312-9cac-979d753959f6","type":"Grid"},{"attributes":{"callback":null,"column_names":["date","adj close","volume"],"data":{"adj close":[31.68,28.26,33.05,26.56,30.82,25.0,21.22,23.28,25.14,27.78,23.68,23.31,24.56,30.36,29.15,10.85,9.78,9.51,9.85,8.54,7.29,7.2,8.36,10.55,9.57,9.42,9.51,11.12,10.72,12.02,11.66,11.3,10.53,10.94,10.71,9.72,9.48,8.79,9.02,7.65,7.85,8.9,9.03,9.22,10.24,10.03,11.33,10.1,12.02,11.96,11.4,12.13,11.89,12.16,11.65,11.64,11.66,9.95,8.33,8.42,7.39,7.31,7.84,6.9,7.09,6.95,6.86,7.81,7.93,7.54,7.19,6.84,7.1,7.26,7.0,7.23,7.16,7.05,6.99,6.49,8.9,8.91,8.16,9.27,9.92,10.11,9.91,9.88,11.16,10.76,10.11,12.07,11.52,10.86,10.08,10.31,10.1,11.54,11.22,11.17,11.09,13.46,12.4,13.28,13.51,12.93,12.99,14.0,15.72,15.05,15.66,15.22,15.01,16.77,17.12,18.81,19.33,24.46,26.62,31.15,31.12,31.13,33.67,34.41,38.39,41.47,39.42,41.65,41.17,34.54,36.13,34.86,38.94,36.94,35.8,40.41,41.48,44.83,44.48,49.99,52.36,48.99,55.23,58.58,63.18,72.02,70.13,72.34,74.0,69.88,68.36,63.68,62.23,60.93,64.4,69.65,63.2,58.13,56.03,54.48,50.82,61.66,62.31,65.95,70.53,71.0,72.18,77.76,76.14,83.49,88.62,83.12,83.31,86.07,82.42,82.5,83.95,88.63,91.08,87.87,96.74,104.57,115.51,114.27,118.54,130.39,141.99,122.92,127.47,128.15,140.19,157.02,165.74,182.71,161.82,173.95,179.34,189.49,155.26,131.64,123.96,121.59,123.13,139.56,143.72,167.51,183.0,181.31,180.54,168.49,169.47,161.7,159.68,171.01,156.79,130.41,97.35,99.09,107.99,93.79,90.13,95.57,84.23,85.3,91.61,94.16,86.74,93.71,106.85,116.29,120.5,125.64,119.14,139.9,133.6,131.68,147.35,161.01,159.5,160.76,176.88,180.26,186.04,187.12,197.67,198.59,191.04,203.3,204.34,200.29,190.81,195.15,218.67,223.07,233.36,259.16,239.49,231.23,248.93,266.55,240.16,238.84,254.66,240.84,235.84,260.7,278.99,290.35,299.59,307.4,300.26,312.2,316.24,324.57,317.75,336.99,340.94,345.61,329.99,331.83,322.74,338.64,326.91,336.03,317.78,324.87,347.95,381.07,363.44,363.46,367.12,393.2,359.65,382.09,389.25,364.65,382.22,371.72,402.09,416.01,442.63,488.43,530.22,569.5,583.09,564.21,567.95,542.9,556.56,560.35,556.33,587.84,559.19,602.85,653.3,660.53,682.44,651.28,617.92,571.02,555.09,565.02,523.86,531.9,493.22,445.09,454.14],"date":{"__ndarray__":"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","dtype":"float64","shape":[327]},"volume":[38478000,15845200,8568800,33618800,11678000,17852400,14530800,9020000,7320400,14211000,14720600,6697200,4803800,10669000,9706200,72795600,21495600,31649000,14611200,17586200,12327200,10910000,15121000,30562800,9795600,12451000,15840600,19422200,16334800,11813600,11603200,10037200,11613600,12190400,10818600,15878000,6644800,7443800,7746600,20375600,12238800,5956800,7043000,8238000,6470200,6204000,18910600,20246200,16730200,9291800,12464000,8603600,7108800,10691800,9724600,9486000,5347000,12482000,10757200,7388600,14521200,11909800,7229600,8077800,7355200,7782000,16760600,10565600,5061200,5122600,5885000,5537200,6673600,13323000,8167400,5512200,11980200,4371200,3825000,7332800,21013800,7382800,9284000,10977200,9169200,7086600,8908600,4774600,9601000,10335600,8432600,21789400,9538600,10714400,8754600,6540600,3703400,17412400,10966800,9119400,9867000,35963000,15293400,9111400,12306600,9412800,7010600,14254000,13936200,12463600,11562400,7558200,11536400,13448600,8309600,9768200,41536000,42624800,18167000,49671000,26482200,8783200,79551800,30058200,18730600,43546200,36480400,19693400,14815200,33754700,16006300,22740100,13356200,19559800,14942500,24560100,20074300,32715600,9323500,16171300,19520100,18125200,21776900,22815400,18275400,30608200,17111000,16050800,40527100,24718700,20571400,32595200,21622900,29135400,28387300,27559400,33455000,45749200,31362000,30382300,44639500,26251600,24920000,23399700,31997200,23754000,16677100,22836200,15424600,16658000,25340600,25770600,30259300,48731200,22197500,14281000,29960700,25462900,17928300,26854300,19018700,34089800,52801600,61476900,34810600,25164600,78093900,40192700,30958500,51092000,40674300,33695400,46135000,35789800,49391300,34338200,36596200,38542100,79065900,48059800,34074900,44838600,41308600,27430900,30181700,28114800,29234400,28210900,40728600,22212400,31992000,37920300,28264600,18105400,26549500,59866200,57477300,70732900,58503200,66217400,10634800,37184800,24500000,28514200,30764500,24106200,22495300,27444900,22009000,18955600,19313000,16713000,10642800,33273300,22675500,16485600,31242200,14136100,15398300,16751000,26929400,19270900,13411100,29228100,15852500,10230500,17488200,17888900,16508200,66682500,22603100,16448800,21293500,21349300,20463900,28336600,45923600,45818400,27082300,28022200,24780100,36588500,15287700,11372500,13688900,14576800,36965800,19948000,14033200,13698000,18551700,11497700,9497200,10729600,26942900,11494300,29144900,19504400,14621500,16431600,21782100,11191000,16154800,19810100,14257000,12590900,15376200,21215500,26498900,31119500,20171900,19509900,19123500,22187300,10793900,13283500,12757500,8411800,9286500,9347800,6671300,33734000,15418300,29481700,26108500,37528100,18076600,12593800,13589600,15549300,9876300,16761500,31332600,8739500,20190100,13971300,12020300,13240200,17022300,18897700,29404200,19895300,22345900,12605900,16202800,19267300,13990900]}},"id":"cb97eeca-78d5-4aaf-afec-aa6911137296","type":"ColumnDataSource"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"ab76c3b4-062f-4e00-ab9d-a409119289d3","type":"AdaptiveTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"d6f7b84a-a960-4b90-99c5-a4bee96208fe","type":"MonthsTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"ab76c3b4-062f-4e00-ab9d-a409119289d3","type":"AdaptiveTicker"},{"id":"1bd7183d-bcc5-4075-8aa4-a2d89644cb7f","type":"AdaptiveTicker"},{"id":"9194f648-90e0-4e77-aa8b-ad1eb527751b","type":"AdaptiveTicker"},{"id":"f7fcc7fb-9675-4be2-81bf-1ff7aa50627b","type":"DaysTicker"},{"id":"80e40e1f-61ba-459b-a49a-56608a619e3b","type":"DaysTicker"},{"id":"9b4c2c09-1cce-49a3-9298-190df08ccf12","type":"DaysTicker"},{"id":"6224be8e-4cf1-4c98-970d-337e47c723c2","type":"DaysTicker"},{"id":"d6f7b84a-a960-4b90-99c5-a4bee96208fe","type":"MonthsTicker"},{"id":"25beab0e-fa41-4d0e-b077-9845d16c49c0","type":"MonthsTicker"},{"id":"b980b17d-94ec-4593-82aa-3ddaec277cf0","type":"MonthsTicker"},{"id":"1160b0f8-0e02-499d-b8f7-56cd860dc9a8","type":"MonthsTicker"},{"id":"123e4a17-dbec-4eed-9382-e3b2d405a5a6","type":"YearsTicker"}]},"id":"f7f1606b-7c00-4ca2-aa71-80b9051ae6f2","type":"DatetimeTicker"},{"attributes":{},"id":"123e4a17-dbec-4eed-9382-e3b2d405a5a6","type":"YearsTicker"},{"attributes":{},"id":"d8335975-9cb2-4af4-b68e-d89cf18b505d","type":"BasicTickFormatter"},{"attributes":{"line_color":"#ebbd5b","line_width":2,"x":{"field":"date"},"y":{"field":"adj close"}},"id":"bae90872-d1aa-451b-a4ee-8dee504bac5a","type":"Line"},{"attributes":{"background_fill_color":{"value":"#f5f5f5"},"below":[{"id":"3dc3c443-9fc8-437d-9d9f-d8a5161d6b66","type":"DatetimeAxis"}],"left":[{"id":"36d25664-9c44-4ab4-8ac3-17a2d45bc762","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"3dc3c443-9fc8-437d-9d9f-d8a5161d6b66","type":"DatetimeAxis"},{"id":"ee85c8e0-20ab-4a74-883f-769aa476e414","type":"Grid"},{"id":"36d25664-9c44-4ab4-8ac3-17a2d45bc762","type":"LinearAxis"},{"id":"f2f4e84a-47f7-4312-9cac-979d753959f6","type":"Grid"},{"id":"dd029af3-4d60-402a-8223-4113a0e9610f","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"0f39887c-470f-403f-9ef0-5083c7a781c8","type":"Title"},"toolbar":{"id":"2f11b22a-bbc6-4092-bb50-0530f33e53d0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1782c98a-37e8-4147-8055-4dc665e14966","type":"DataRange1d"},"x_scale":{"id":"955a1472-a17c-4adb-9499-e3062b0741de","type":"LinearScale"},"y_range":{"id":"eac73a91-e5cc-4430-bdd4-365f482b22e6","type":"DataRange1d"},"y_scale":{"id":"7f07f6e3-cb8d-4fbc-a871-69642b7a6ae9","type":"LinearScale"}},"id":"0a2e09f0-30ac-4365-b046-d55f4dc384e1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3f311c94-5b6b-46d9-b293-d590b28acedc","type":"DatetimeTickFormatter"},{"attributes":{"axis_label":"Price","axis_line_color":{"value":null},"formatter":{"id":"d8335975-9cb2-4af4-b68e-d89cf18b505d","type":"BasicTickFormatter"},"plot":{"id":"0a2e09f0-30ac-4365-b046-d55f4dc384e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"85b6cec8-e067-488a-8cda-cde873eccdf8","type":"BasicTicker"}},"id":"36d25664-9c44-4ab4-8ac3-17a2d45bc762","type":"LinearAxis"},{"attributes":{"data_source":{"id":"cb97eeca-78d5-4aaf-afec-aa6911137296","type":"ColumnDataSource"},"glyph":{"id":"bae90872-d1aa-451b-a4ee-8dee504bac5a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"384eb287-e9af-4601-a242-47691eabdaf6","type":"Line"},"selection_glyph":null,"view":{"id":"6ce79b45-392b-4472-8f1d-c1e12365f041","type":"CDSView"}},"id":"dd029af3-4d60-402a-8223-4113a0e9610f","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1782c98a-37e8-4147-8055-4dc665e14966","type":"DataRange1d"},{"attributes":{"grid_line_color":{"value":"white"},"plot":{"id":"0a2e09f0-30ac-4365-b046-d55f4dc384e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7f1606b-7c00-4ca2-aa71-80b9051ae6f2","type":"DatetimeTicker"}},"id":"ee85c8e0-20ab-4a74-883f-769aa476e414","type":"Grid"},{"attributes":{},"id":"85b6cec8-e067-488a-8cda-cde873eccdf8","type":"BasicTicker"},{"attributes":{"days":[1,15]},"id":"6224be8e-4cf1-4c98-970d-337e47c723c2","type":"DaysTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"9194f648-90e0-4e77-aa8b-ad1eb527751b","type":"AdaptiveTicker"},{"attributes":{"days":[1,8,15,22]},"id":"9b4c2c09-1cce-49a3-9298-190df08ccf12","type":"DaysTicker"},{"attributes":{"axis_label":"Date","axis_line_color":{"value":null},"formatter":{"id":"3f311c94-5b6b-46d9-b293-d590b28acedc","type":"DatetimeTickFormatter"},"plot":{"id":"0a2e09f0-30ac-4365-b046-d55f4dc384e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7f1606b-7c00-4ca2-aa71-80b9051ae6f2","type":"DatetimeTicker"}},"id":"3dc3c443-9fc8-437d-9d9f-d8a5161d6b66","type":"DatetimeAxis"},{"attributes":{"callback":null},"id":"eac73a91-e5cc-4430-bdd4-365f482b22e6","type":"DataRange1d"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"80e40e1f-61ba-459b-a49a-56608a619e3b","type":"DaysTicker"},{"attributes":{},"id":"7f07f6e3-cb8d-4fbc-a871-69642b7a6ae9","type":"LinearScale"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"f7fcc7fb-9675-4be2-81bf-1ff7aa50627b","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bcf5aec3-51bd-4f10-ab01-1dce7285a173","type":"HoverTool"}]},"id":"2f11b22a-bbc6-4092-bb50-0530f33e53d0","type":"Toolbar"},{"attributes":{},"id":"955a1472-a17c-4adb-9499-e3062b0741de","type":"LinearScale"},{"attributes":{"months":[0,6]},"id":"1160b0f8-0e02-499d-b8f7-56cd860dc9a8","type":"MonthsTicker"},{"attributes":{"callback":null,"formatters":{"adj close":"printf","date":"datetime"},"mode":"vline","tooltips":[["date","@date{%F}"],["close","$@{adj close}{%0.2f}"],["volume","@volume{0.00 a}"]]},"id":"bcf5aec3-51bd-4f10-ab01-1dce7285a173","type":"HoverTool"},{"attributes":{"source":{"id":"cb97eeca-78d5-4aaf-afec-aa6911137296","type":"ColumnDataSource"}},"id":"6ce79b45-392b-4472-8f1d-c1e12365f041","type":"CDSView"}],"root_ids":["0a2e09f0-30ac-4365-b046-d55f4dc384e1"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"2120851e-836a-452e-a183-71eabed72fe4","elementid":"ecccc6ac-addb-492b-8d5f-8401e5f59763","modelid":"0a2e09f0-30ac-4365-b046-d55f4dc384e1"}];
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