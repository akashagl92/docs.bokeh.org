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
      };var element = document.getElementById("b9df65d4-9987-4db0-a448-5ca8da5408a3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9df65d4-9987-4db0-a448-5ca8da5408a3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8f85a2ff-602c-4e73-bba2-820d988df891":{"roots":{"references":[{"attributes":{"data_source":{"id":"febb01f9-2c6d-43d1-82fb-a7c262af3cdc","type":"ColumnDataSource"},"glyph":{"id":"f03a678f-4c36-4fd3-831d-bc15d439daf3","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a6f42aec-f986-4af8-b2b3-039739f9ed31","type":"Line"},"selection_glyph":null,"view":{"id":"04ffc298-fdd2-4994-a69f-f154528589f8","type":"CDSView"}},"id":"0f5106c5-b642-4aff-96b5-6aaea5cd20c2","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"ec0a892c-e349-434a-81f0-971f330eb8fe","type":"BoxAnnotation"}},"id":"cb9f805d-870e-4dfb-9394-c8332e438973","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"a6f42aec-f986-4af8-b2b3-039739f9ed31","type":"Line"},{"attributes":{"child":{"id":"b12bdad5-0649-4bf7-977d-7ef2e958675a","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"582b8f9b-c8e8-4a7e-b2a2-9ade45358427","type":"Panel"},{"attributes":{"data_source":{"id":"978e6961-6805-4e41-828e-7c907422513b","type":"ColumnDataSource"},"glyph":{"id":"8258fea1-06a6-4688-949d-9ee38857472c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"190dcb9f-6238-4b78-88a8-964d9fe8b05a","type":"Circle"},"selection_glyph":null,"view":{"id":"852afc2c-49c9-4caf-96b2-295e3309978d","type":"CDSView"}},"id":"818eed31-0c74-4c43-93d6-8b7aec47a730","type":"GlyphRenderer"},{"attributes":{},"id":"60a2efa1-eaa8-4fbf-a5a1-fd803cffc7ef","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"fad1faa1-617f-4487-a89b-90d49d717adf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5f376bd-967a-4bb7-abe1-a54624052eac","type":"BasicTicker"}},"id":"92dbf7ce-4a04-4a44-9a39-ff90897369fb","type":"Grid"},{"attributes":{"source":{"id":"febb01f9-2c6d-43d1-82fb-a7c262af3cdc","type":"ColumnDataSource"}},"id":"04ffc298-fdd2-4994-a69f-f154528589f8","type":"CDSView"},{"attributes":{},"id":"9c08581f-dd23-4573-9f49-0653845624fe","type":"PanTool"},{"attributes":{},"id":"948d0129-c0df-4a67-9aa8-420a20e059d1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0602eb84-2d25-46db-ac5d-4a53889f9555","type":"BasicTickFormatter"},"plot":{"id":"fad1faa1-617f-4487-a89b-90d49d717adf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5f376bd-967a-4bb7-abe1-a54624052eac","type":"BasicTicker"}},"id":"d9dbaa5a-aa58-4f5a-b34d-43fa88b082ec","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8258fea1-06a6-4688-949d-9ee38857472c","type":"Circle"},{"attributes":{},"id":"93eeb978-a078-4894-b97c-83c810c23b97","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"95be012f-314b-4604-8fd7-ae2de8f2e2ed","type":"Title"},{"attributes":{},"id":"f15edfbd-4791-4a3e-8bdc-cb050ea65b26","type":"LinearScale"},{"attributes":{"child":{"id":"fad1faa1-617f-4487-a89b-90d49d717adf","subtype":"Figure","type":"Plot"},"title":"line"},"id":"c1f839eb-97a4-4183-bfa7-a6c385a091f8","type":"Panel"},{"attributes":{},"id":"47e99057-a12c-4ccf-be56-2f39d767fbae","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d0f14215-60cd-477a-a303-905e680c5ab9","type":"PanTool"},{"id":"b83b4f81-f9b0-434c-bc41-2d9eb24a71b4","type":"WheelZoomTool"},{"id":"8cf2beb6-131b-4df7-9f80-2c4863aac6f9","type":"BoxZoomTool"},{"id":"44d46854-eaa2-4750-9722-99a41e52eb3b","type":"SaveTool"},{"id":"d646c68d-9373-41ee-8709-e53a053e2b04","type":"ResetTool"},{"id":"e36b346d-a760-4f74-8b90-7f0d425fb33a","type":"HelpTool"}]},"id":"6ad8019a-0770-4b1f-87b6-d77a3d3db8c4","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"190dcb9f-6238-4b78-88a8-964d9fe8b05a","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"fe4cdb37-72da-443b-b8aa-90cf190b1a8a","type":"Title"},{"attributes":{"source":{"id":"978e6961-6805-4e41-828e-7c907422513b","type":"ColumnDataSource"}},"id":"852afc2c-49c9-4caf-96b2-295e3309978d","type":"CDSView"},{"attributes":{},"id":"d646c68d-9373-41ee-8709-e53a053e2b04","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec0a892c-e349-434a-81f0-971f330eb8fe","type":"BoxAnnotation"},{"attributes":{},"id":"5565d930-e388-4631-83bd-328d0c786530","type":"BasicTickFormatter"},{"attributes":{},"id":"61f03330-8566-4599-a9f6-39915c4b0797","type":"SaveTool"},{"attributes":{},"id":"7dd271fe-f268-4977-a165-9b95c49f1b1b","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"978e6961-6805-4e41-828e-7c907422513b","type":"ColumnDataSource"},{"attributes":{},"id":"f03d293c-62df-459d-b03f-b5ebefced047","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9c08581f-dd23-4573-9f49-0653845624fe","type":"PanTool"},{"id":"93eeb978-a078-4894-b97c-83c810c23b97","type":"WheelZoomTool"},{"id":"cb9f805d-870e-4dfb-9394-c8332e438973","type":"BoxZoomTool"},{"id":"61f03330-8566-4599-a9f6-39915c4b0797","type":"SaveTool"},{"id":"7dd271fe-f268-4977-a165-9b95c49f1b1b","type":"ResetTool"},{"id":"60a2efa1-eaa8-4fbf-a5a1-fd803cffc7ef","type":"HelpTool"}]},"id":"ec6d6af0-5ed8-4fd8-b601-2241ee7155d0","type":"Toolbar"},{"attributes":{"callback":null},"id":"3e539e14-4a34-4ec4-855a-01636365baad","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"f03a678f-4c36-4fd3-831d-bc15d439daf3","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"b12bdad5-0649-4bf7-977d-7ef2e958675a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f03d293c-62df-459d-b03f-b5ebefced047","type":"BasicTicker"}},"id":"355db053-7efe-403c-b55e-4dab074ae215","type":"Grid"},{"attributes":{"plot":{"id":"fad1faa1-617f-4487-a89b-90d49d717adf","subtype":"Figure","type":"Plot"},"ticker":{"id":"226acb76-e9c5-4bc9-bad9-b15b8c474797","type":"BasicTicker"}},"id":"32ac5fdc-e6f6-47f5-8ab0-84a12d53b94c","type":"Grid"},{"attributes":{},"id":"d0f14215-60cd-477a-a303-905e680c5ab9","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"febb01f9-2c6d-43d1-82fb-a7c262af3cdc","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"582b8f9b-c8e8-4a7e-b2a2-9ade45358427","type":"Panel"},{"id":"c1f839eb-97a4-4183-bfa7-a6c385a091f8","type":"Panel"}]},"id":"be693ed1-37fb-43b4-9891-d4794471847b","type":"Tabs"},{"attributes":{},"id":"b83b4f81-f9b0-434c-bc41-2d9eb24a71b4","type":"WheelZoomTool"},{"attributes":{},"id":"88097685-5ebb-4505-8e68-35978be1e38f","type":"BasicTicker"},{"attributes":{},"id":"44d46854-eaa2-4750-9722-99a41e52eb3b","type":"SaveTool"},{"attributes":{"below":[{"id":"cbeca472-596c-49f6-b770-ebd02e933f97","type":"LinearAxis"}],"left":[{"id":"d9dbaa5a-aa58-4f5a-b34d-43fa88b082ec","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cbeca472-596c-49f6-b770-ebd02e933f97","type":"LinearAxis"},{"id":"32ac5fdc-e6f6-47f5-8ab0-84a12d53b94c","type":"Grid"},{"id":"d9dbaa5a-aa58-4f5a-b34d-43fa88b082ec","type":"LinearAxis"},{"id":"92dbf7ce-4a04-4a44-9a39-ff90897369fb","type":"Grid"},{"id":"ec0a892c-e349-434a-81f0-971f330eb8fe","type":"BoxAnnotation"},{"id":"0f5106c5-b642-4aff-96b5-6aaea5cd20c2","type":"GlyphRenderer"}],"title":{"id":"95be012f-314b-4604-8fd7-ae2de8f2e2ed","type":"Title"},"toolbar":{"id":"ec6d6af0-5ed8-4fd8-b601-2241ee7155d0","type":"Toolbar"},"x_range":{"id":"d29d7fbe-e975-4e37-af32-0236b4c24d64","type":"DataRange1d"},"x_scale":{"id":"47e99057-a12c-4ccf-be56-2f39d767fbae","type":"LinearScale"},"y_range":{"id":"967885b3-e15a-4147-95cd-cf9379da3e06","type":"DataRange1d"},"y_scale":{"id":"4d496cc6-0e38-4236-b787-83be3392bf33","type":"LinearScale"}},"id":"fad1faa1-617f-4487-a89b-90d49d717adf","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b12bdad5-0649-4bf7-977d-7ef2e958675a","subtype":"Figure","type":"Plot"},"ticker":{"id":"88097685-5ebb-4505-8e68-35978be1e38f","type":"BasicTicker"}},"id":"55100bf9-d7b3-4dd8-89af-0ff3b08bb9b0","type":"Grid"},{"attributes":{"callback":null},"id":"777172bd-ab18-4f3b-95d3-592fdb3bf11b","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"289a9c05-315b-4a0f-b03b-80fcf0074d9c","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"d29d7fbe-e975-4e37-af32-0236b4c24d64","type":"DataRange1d"},{"attributes":{"overlay":{"id":"289a9c05-315b-4a0f-b03b-80fcf0074d9c","type":"BoxAnnotation"}},"id":"8cf2beb6-131b-4df7-9f80-2c4863aac6f9","type":"BoxZoomTool"},{"attributes":{},"id":"226acb76-e9c5-4bc9-bad9-b15b8c474797","type":"BasicTicker"},{"attributes":{"formatter":{"id":"cea3292d-6e0a-45b7-9474-763c8da47734","type":"BasicTickFormatter"},"plot":{"id":"b12bdad5-0649-4bf7-977d-7ef2e958675a","subtype":"Figure","type":"Plot"},"ticker":{"id":"88097685-5ebb-4505-8e68-35978be1e38f","type":"BasicTicker"}},"id":"96cf5890-6f66-4f79-9b44-be41d28d4f25","type":"LinearAxis"},{"attributes":{"formatter":{"id":"5565d930-e388-4631-83bd-328d0c786530","type":"BasicTickFormatter"},"plot":{"id":"b12bdad5-0649-4bf7-977d-7ef2e958675a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f03d293c-62df-459d-b03f-b5ebefced047","type":"BasicTicker"}},"id":"c7fc33b5-4b30-4c80-8448-489abe845057","type":"LinearAxis"},{"attributes":{},"id":"e36b346d-a760-4f74-8b90-7f0d425fb33a","type":"HelpTool"},{"attributes":{},"id":"4d496cc6-0e38-4236-b787-83be3392bf33","type":"LinearScale"},{"attributes":{},"id":"2d6c8a88-1511-4372-9d19-1c9e26309ad2","type":"LinearScale"},{"attributes":{},"id":"cea3292d-6e0a-45b7-9474-763c8da47734","type":"BasicTickFormatter"},{"attributes":{},"id":"d5f376bd-967a-4bb7-abe1-a54624052eac","type":"BasicTicker"},{"attributes":{},"id":"0602eb84-2d25-46db-ac5d-4a53889f9555","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"948d0129-c0df-4a67-9aa8-420a20e059d1","type":"BasicTickFormatter"},"plot":{"id":"fad1faa1-617f-4487-a89b-90d49d717adf","subtype":"Figure","type":"Plot"},"ticker":{"id":"226acb76-e9c5-4bc9-bad9-b15b8c474797","type":"BasicTicker"}},"id":"cbeca472-596c-49f6-b770-ebd02e933f97","type":"LinearAxis"},{"attributes":{"below":[{"id":"96cf5890-6f66-4f79-9b44-be41d28d4f25","type":"LinearAxis"}],"left":[{"id":"c7fc33b5-4b30-4c80-8448-489abe845057","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"96cf5890-6f66-4f79-9b44-be41d28d4f25","type":"LinearAxis"},{"id":"55100bf9-d7b3-4dd8-89af-0ff3b08bb9b0","type":"Grid"},{"id":"c7fc33b5-4b30-4c80-8448-489abe845057","type":"LinearAxis"},{"id":"355db053-7efe-403c-b55e-4dab074ae215","type":"Grid"},{"id":"289a9c05-315b-4a0f-b03b-80fcf0074d9c","type":"BoxAnnotation"},{"id":"818eed31-0c74-4c43-93d6-8b7aec47a730","type":"GlyphRenderer"}],"title":{"id":"fe4cdb37-72da-443b-b8aa-90cf190b1a8a","type":"Title"},"toolbar":{"id":"6ad8019a-0770-4b1f-87b6-d77a3d3db8c4","type":"Toolbar"},"x_range":{"id":"3e539e14-4a34-4ec4-855a-01636365baad","type":"DataRange1d"},"x_scale":{"id":"2d6c8a88-1511-4372-9d19-1c9e26309ad2","type":"LinearScale"},"y_range":{"id":"777172bd-ab18-4f3b-95d3-592fdb3bf11b","type":"DataRange1d"},"y_scale":{"id":"f15edfbd-4791-4a3e-8bdc-cb050ea65b26","type":"LinearScale"}},"id":"b12bdad5-0649-4bf7-977d-7ef2e958675a","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"967885b3-e15a-4147-95cd-cf9379da3e06","type":"DataRange1d"}],"root_ids":["be693ed1-37fb-43b4-9891-d4794471847b"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"8f85a2ff-602c-4e73-bba2-820d988df891","elementid":"b9df65d4-9987-4db0-a448-5ca8da5408a3","modelid":"be693ed1-37fb-43b4-9891-d4794471847b"}];
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