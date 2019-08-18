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
      };var element = document.getElementById("d7b4616e-f0b8-43da-a741-97dfe0e69e0f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7b4616e-f0b8-43da-a741-97dfe0e69e0f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f9018bee-a4bc-4e9e-9584-fd1f2e423703":{"roots":{"references":[{"attributes":{},"id":"a05d0f0c-5ab0-4508-836e-97a27d1ae088","type":"LinearScale"},{"attributes":{"callback":null},"id":"aea9041b-f8ab-482f-b650-d6017e3103ef","type":"DataRange1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2a8aab67-107b-498f-85ed-c54c5e38a8ac","subtype":"Figure","type":"Plot"},"ticker":{"id":"5416c36f-9d5c-476e-b268-46eeab43573d","type":"BasicTicker"}},"id":"0971b81a-36be-41b1-bc39-a66847f20e1e","type":"Grid"},{"attributes":{"formatter":{"id":"b16b05c0-b2d9-4ca1-9c77-1cfb3ed5886e","type":"BasicTickFormatter"},"plot":{"id":"2a8aab67-107b-498f-85ed-c54c5e38a8ac","subtype":"Figure","type":"Plot"},"ticker":{"id":"5416c36f-9d5c-476e-b268-46eeab43573d","type":"BasicTicker"},"visible":false},"id":"cd5d3a06-02c4-4bc4-aa16-4f15fd5f6076","type":"LinearAxis"},{"attributes":{},"id":"5416c36f-9d5c-476e-b268-46eeab43573d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"bfffdaf6-850b-4119-88d7-a3f9ae5f38c1","type":"BasicTickFormatter"},"plot":{"id":"2a8aab67-107b-498f-85ed-c54c5e38a8ac","subtype":"Figure","type":"Plot"},"ticker":{"id":"35390189-5fd5-4add-b89d-9aff04b5eba4","type":"BasicTicker"},"visible":false},"id":"eb15a904-766f-47be-948e-c8b445fbfc31","type":"LinearAxis"},{"attributes":{},"id":"35390189-5fd5-4add-b89d-9aff04b5eba4","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2a8aab67-107b-498f-85ed-c54c5e38a8ac","subtype":"Figure","type":"Plot"},"ticker":{"id":"35390189-5fd5-4add-b89d-9aff04b5eba4","type":"BasicTicker"}},"id":"b21d4305-6706-4a6d-8c3a-d6f57bbe937e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f3928ab-0925-4d1c-9809-2296b2555daa","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"NkBwM0Z+BUDtcSDtjCAGQB3Ojx0DhgNAQcNmXqsLAUD/+VaPIIMEQA7NALb/QAZAQ0NyAuAiBEDGVMEIq3gAQI5RqkgWDARAkyirPZH/AEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"kcPGTVYd/D+EAmlN8mj1P3b8hI0gEfQ/OrEC+Evi8j90aG81Qd39P2hLbhbqsvY/815tkTV+8j8WQQxjJGr9P56Wtj0tAvY/8Cmsg3/l8j8=","dtype":"float64","shape":[10]}}},"id":"8104a8a0-60ce-4011-9985-f28b6df018ef","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"61c6b40c-e79c-401a-aabd-7e253ae2eb97","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#eeeeee"},"below":[{"id":"cd5d3a06-02c4-4bc4-aa16-4f15fd5f6076","type":"LinearAxis"}],"left":[{"id":"eb15a904-766f-47be-948e-c8b445fbfc31","type":"LinearAxis"}],"renderers":[{"id":"cd5d3a06-02c4-4bc4-aa16-4f15fd5f6076","type":"LinearAxis"},{"id":"0971b81a-36be-41b1-bc39-a66847f20e1e","type":"Grid"},{"id":"eb15a904-766f-47be-948e-c8b445fbfc31","type":"LinearAxis"},{"id":"b21d4305-6706-4a6d-8c3a-d6f57bbe937e","type":"Grid"},{"id":"277cfd68-d0a4-4fd6-9f6b-16975c6e9bc9","type":"BoxAnnotation"},{"id":"143fa82e-fac3-44a5-ad66-136e82dc6fa3","type":"GlyphRenderer"},{"id":"9306b346-38a0-4aae-b2ca-1dacada19c5c","type":"GlyphRenderer"},{"id":"1f50caff-ae82-4afb-9261-44a811ea0d71","type":"GlyphRenderer"},{"id":"347a2246-9479-42ba-9c1a-7c757d56b4bb","type":"GlyphRenderer"},{"id":"303e9a3c-2784-4afa-91ef-1c6cf12fa7f4","type":"GlyphRenderer"},{"id":"5a1099c3-07c7-4683-9920-3fbcec1aac98","type":"GlyphRenderer"},{"id":"010bd0ed-2ca7-4bb9-8dbc-494aeec5b155","type":"GlyphRenderer"},{"id":"0d0cd623-9271-441e-8a2e-b1e42961c158","type":"GlyphRenderer"},{"id":"72b1eba7-acea-4c84-8dca-ce2ff93a7337","type":"GlyphRenderer"},{"id":"8a2258e6-9ef6-4d28-bd59-e2f91759b519","type":"GlyphRenderer"},{"id":"9714dba3-3a52-4c28-9e1f-4de077c3f9b3","type":"GlyphRenderer"},{"id":"c7cca75d-c559-465c-b209-c0d4e6e7705e","type":"GlyphRenderer"},{"id":"222e0a52-8723-43ee-9fc3-bf341ef49b89","type":"GlyphRenderer"},{"id":"0c5769a6-21d1-48a5-9e34-b1c67d732e75","type":"GlyphRenderer"},{"id":"19bb31ef-8f02-4d5b-93cf-94a16f8c495d","type":"GlyphRenderer"},{"id":"8f00788e-5ca5-4276-915e-b3de8591f0d6","type":"GlyphRenderer"},{"id":"1766a5cf-3874-4094-a70d-07f9852a3d0d","type":"GlyphRenderer"},{"id":"d19d1600-42af-4589-9d76-005d76ad49ba","type":"GlyphRenderer"},{"id":"5c627f8d-f87b-4ce1-b6a8-48e82bf73fc6","type":"GlyphRenderer"},{"id":"c1901176-ed32-4676-a5fd-0ea31ca10509","type":"GlyphRenderer"},{"id":"e279e29a-b084-44e2-bc49-4ab1b33fafae","type":"GlyphRenderer"},{"id":"30b2d010-8a35-481b-8165-a13a953e4557","type":"GlyphRenderer"},{"id":"2751e4d9-04d6-4cf0-b52d-7c69060b820a","type":"GlyphRenderer"},{"id":"ee7e57ff-2c8b-46b8-b553-9d83dac86c9f","type":"GlyphRenderer"}],"title":{"id":"5d9ebff4-2c29-4769-9d6a-207edeb352e1","type":"Title"},"toolbar":{"id":"82f382d6-72f2-440d-accc-5b24f36d1ca5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c81f39d6-8279-402d-80a4-d0a7aa9e1a5e","type":"DataRange1d"},"x_scale":{"id":"a05d0f0c-5ab0-4508-836e-97a27d1ae088","type":"LinearScale"},"y_range":{"id":"aea9041b-f8ab-482f-b650-d6017e3103ef","type":"DataRange1d"},"y_scale":{"id":"bae0f820-c77a-41ec-b15a-d16a4dfc17bb","type":"LinearScale"}},"id":"2a8aab67-107b-498f-85ed-c54c5e38a8ac","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Bokeh Markers"},"id":"5d9ebff4-2c29-4769-9d6a-207edeb352e1","type":"Title"},{"attributes":{"callback":null},"id":"c81f39d6-8279-402d-80a4-d0a7aa9e1a5e","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b1dc7993-d90f-4858-89c0-723258915b7b","type":"PanTool"},{"id":"d0259f71-a033-45f8-b71d-2e38c74c68a1","type":"WheelZoomTool"},{"id":"230bc36d-12ec-4c1b-8cc7-b6bc03214e75","type":"BoxZoomTool"},{"id":"72ace714-1698-4c98-8cee-c724cd62bf1a","type":"SaveTool"},{"id":"d63db8ed-0810-4f01-af04-72d37de78422","type":"ResetTool"},{"id":"b43e1a3f-fc2a-41d0-bed9-9d89886ac66a","type":"HelpTool"}]},"id":"82f382d6-72f2-440d-accc-5b24f36d1ca5","type":"Toolbar"},{"attributes":{"data_source":{"id":"8104a8a0-60ce-4011-9985-f28b6df018ef","type":"ColumnDataSource"},"glyph":{"id":"5f3928ab-0925-4d1c-9809-2296b2555daa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61c6b40c-e79c-401a-aabd-7e253ae2eb97","type":"Circle"},"selection_glyph":null,"view":{"id":"e6ed9580-4ad4-4319-abd9-3ab0ccf1cb7e","type":"CDSView"}},"id":"143fa82e-fac3-44a5-ad66-136e82dc6fa3","type":"GlyphRenderer"},{"attributes":{},"id":"bae0f820-c77a-41ec-b15a-d16a4dfc17bb","type":"LinearScale"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"b3105b70-4f3e-403b-a5fc-5cce6dd045a9","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":0.5}},"id":"5b6f1fa1-ecf6-480d-b81d-a0ec89b98206","type":"Text"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"277cfd68-d0a4-4fd6-9f6b-16975c6e9bc9","type":"BoxAnnotation"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"fb899552-b569-45aa-94a1-ded26e090950","type":"Text"},{"attributes":{"data_source":{"id":"fd4ce137-c847-4389-9f39-4c231b84274d","type":"ColumnDataSource"},"glyph":{"id":"5b6f1fa1-ecf6-480d-b81d-a0ec89b98206","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3105b70-4f3e-403b-a5fc-5cce6dd045a9","type":"Text"},"selection_glyph":null,"view":{"id":"ce5c7731-1b2e-4639-942b-e4a5bf2f287c","type":"CDSView"}},"id":"0c5769a6-21d1-48a5-9e34-b1c67d732e75","type":"GlyphRenderer"},{"attributes":{},"id":"b1dc7993-d90f-4858-89c0-723258915b7b","type":"PanTool"},{"attributes":{"source":{"id":"8104a8a0-60ce-4011-9985-f28b6df018ef","type":"ColumnDataSource"}},"id":"e6ed9580-4ad4-4319-abd9-3ab0ccf1cb7e","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"8a1f1eca-54dd-4d57-864f-03ec97bfab71","type":"Text"},{"attributes":{"source":{"id":"fd4ce137-c847-4389-9f39-4c231b84274d","type":"ColumnDataSource"}},"id":"ce5c7731-1b2e-4639-942b-e4a5bf2f287c","type":"CDSView"},{"attributes":{},"id":"d0259f71-a033-45f8-b71d-2e38c74c68a1","type":"WheelZoomTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":0.5}},"id":"27f43372-9c82-4364-a541-2da9ce7f6af8","type":"Text"},{"attributes":{"overlay":{"id":"277cfd68-d0a4-4fd6-9f6b-16975c6e9bc9","type":"BoxAnnotation"}},"id":"230bc36d-12ec-4c1b-8cc7-b6bc03214e75","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["triangle"]}},"id":"68f69c2e-3bf7-410a-886c-dff40037b04a","type":"ColumnDataSource"},{"attributes":{},"id":"72ace714-1698-4c98-8cee-c724cd62bf1a","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["asterisk / *"]}},"id":"73c9882e-4925-4bbe-8c67-d91d3addd765","type":"ColumnDataSource"},{"attributes":{},"id":"d63db8ed-0810-4f01-af04-72d37de78422","type":"ResetTool"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"98d0ba6a-5929-4b0b-9c8f-8796655d1a0e","type":"Text"},{"attributes":{},"id":"b43e1a3f-fc2a-41d0-bed9-9d89886ac66a","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7d278a2-54e6-4bb6-8231-2999a32f907f","type":"Square"},{"attributes":{"source":{"id":"68f69c2e-3bf7-410a-886c-dff40037b04a","type":"ColumnDataSource"}},"id":"a6d3a5a3-e5d4-436d-a414-b2db69c5f487","type":"CDSView"},{"attributes":{"data_source":{"id":"68f69c2e-3bf7-410a-886c-dff40037b04a","type":"ColumnDataSource"},"glyph":{"id":"fb899552-b569-45aa-94a1-ded26e090950","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27f43372-9c82-4364-a541-2da9ce7f6af8","type":"Text"},"selection_glyph":null,"view":{"id":"a6d3a5a3-e5d4-436d-a414-b2db69c5f487","type":"CDSView"}},"id":"19bb31ef-8f02-4d5b-93cf-94a16f8c495d","type":"GlyphRenderer"},{"attributes":{},"id":"b16b05c0-b2d9-4ca1-9c77-1cfb3ed5886e","type":"BasicTickFormatter"},{"attributes":{},"id":"bfffdaf6-850b-4119-88d7-a3f9ae5f38c1","type":"BasicTickFormatter"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"1b1e4662-5218-44e4-a2e6-7ecdea63bca0","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"RdFl4kp2GkBcazl0O1UZQFJZxS1FjhtAgJetxVIGGEA6RJbxd3gbQGfOUjvlxRtA+pZYDoEBGEDbfOHi+FkaQKJgE3buXhtAvxiHUtCTGEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"kpUVE5/7+j+bSXL22c7zP7Hjz0mm1PY/wXFI5PGC8D9qsBE0r1bxP4ZqCTJFJv0/VAWXEq0h8z+4lLysVBTwPw5lu26y9/s/tOtEfRfo8D8=","dtype":"float64","shape":[10]}}},"id":"4a76e1ee-a52b-442a-a644-8b81b90342ce","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":0.5}},"id":"ab7094cb-a688-439a-9db9-9511b56a189e","type":"Text"},{"attributes":{"source":{"id":"5c053321-b7bb-4556-9095-d1faa44c578f","type":"ColumnDataSource"}},"id":"f110646c-071c-4f7f-bb1b-f0b6545df686","type":"CDSView"},{"attributes":{"source":{"id":"73c9882e-4925-4bbe-8c67-d91d3addd765","type":"ColumnDataSource"}},"id":"0fe72523-e7ba-4336-80a1-7db8f7dc6d37","type":"CDSView"},{"attributes":{"data_source":{"id":"5c053321-b7bb-4556-9095-d1faa44c578f","type":"ColumnDataSource"},"glyph":{"id":"a7d278a2-54e6-4bb6-8231-2999a32f907f","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0c84b3d3-3a6b-47e6-afcb-cbd64c221bf1","type":"Square"},"selection_glyph":null,"view":{"id":"f110646c-071c-4f7f-bb1b-f0b6545df686","type":"CDSView"}},"id":"9306b346-38a0-4aae-b2ca-1dacada19c5c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_x / ox"]}},"id":"fc2aa32c-3d21-41f4-8bf7-55294212db86","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"73c9882e-4925-4bbe-8c67-d91d3addd765","type":"ColumnDataSource"},"glyph":{"id":"98d0ba6a-5929-4b0b-9c8f-8796655d1a0e","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ab7094cb-a688-439a-9db9-9511b56a189e","type":"Text"},"selection_glyph":null,"view":{"id":"0fe72523-e7ba-4336-80a1-7db8f7dc6d37","type":"CDSView"}},"id":"8f00788e-5ca5-4276-915e-b3de8591f0d6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AEqYl2B/EUBsYsnUiMYRQCzAGMnjZBJASwZGDcl4EUAAYlq4Cz8SQAZ3XJ9mHxJAjUjyAeaKEEDC5j+g3+URQMbKrSSEOBBAq4zGxV9zEEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"fqlBIsKF8z/OlpyBb4zwPxC4rxg1fvw/7LBjmLhc/D/jvnKFs9b9P4nO/qKgt/Q/ZuN5Qj/g/j/X0bUUTwX/P0JKlcH+s/0/liO+lphp/T8=","dtype":"float64","shape":[10]}}},"id":"5c053321-b7bb-4556-9095-d1faa44c578f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4a76e1ee-a52b-442a-a644-8b81b90342ce","type":"ColumnDataSource"},"glyph":{"id":"d69ef567-8dcf-482f-91fe-ff71e97ddb26","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"766ec772-9f10-437e-bc22-ce710ae58b0e","type":"Triangle"},"selection_glyph":null,"view":{"id":"58d826e9-af23-4a62-beb1-62a121fcf1d1","type":"CDSView"}},"id":"1f50caff-ae82-4afb-9261-44a811ea0d71","type":"GlyphRenderer"},{"attributes":{"source":{"id":"fc2aa32c-3d21-41f4-8bf7-55294212db86","type":"ColumnDataSource"}},"id":"9b0c7adc-18bb-438f-a4b1-3eb4085f2299","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c84b3d3-3a6b-47e6-afcb-cbd64c221bf1","type":"Square"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"a80f02f8-900c-4128-a5f3-6219062ac521","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d69ef567-8dcf-482f-91fe-ff71e97ddb26","type":"Triangle"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_x"]}},"id":"9cb0e9b3-4e4e-4dd9-ab3a-a19ec5be4e6b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"766ec772-9f10-437e-bc22-ce710ae58b0e","type":"Triangle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":3.5}},"id":"770032ba-58bf-4965-bd9a-b1be5ab53f9d","type":"Text"},{"attributes":{"data_source":{"id":"fc2aa32c-3d21-41f4-8bf7-55294212db86","type":"ColumnDataSource"},"glyph":{"id":"8a1f1eca-54dd-4d57-864f-03ec97bfab71","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"770032ba-58bf-4965-bd9a-b1be5ab53f9d","type":"Text"},"selection_glyph":null,"view":{"id":"9b0c7adc-18bb-438f-a4b1-3eb4085f2299","type":"CDSView"}},"id":"1766a5cf-3874-4094-a70d-07f9852a3d0d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"q0XJbh84IUBVhsx9r60gQECw/LX38yBAiEVPTW/yIEDgrGnHPHYgQHajRjoOKyBAnFm985JPIECXtSpRrRogQLuaIzabeiBAkni2+dfRIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"zLUXkht59D8HPwIFmzTyPwBGRuywLfM/D0bjzD+Q/j/VK5eeNSDzP5jAZWDBuPE/rOGtx/DQ9D9WVQkLyEH7P5wgBzlU+fc/bD+PVfvC9T8=","dtype":"float64","shape":[10]}}},"id":"89d7393a-9f17-4ee3-bd6f-e427a09057ee","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7995822b-ae5a-4538-bdc6-cd7e5cbfa1c2","type":"ColumnDataSource"},"glyph":{"id":"4f7b7a8e-59e3-40d2-886b-15c4c0ee7602","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aeb1e765-5c37-47bb-8c28-3dda5f970bc4","type":"CircleX"},"selection_glyph":null,"view":{"id":"d09f8e98-7620-4613-b225-27b046bd1f42","type":"CDSView"}},"id":"303e9a3c-2784-4afa-91ef-1c6cf12fa7f4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["inverted_triangle"]}},"id":"51b8681e-9fe2-4432-b86f-e31b0e80a673","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4a76e1ee-a52b-442a-a644-8b81b90342ce","type":"ColumnDataSource"}},"id":"58d826e9-af23-4a62-beb1-62a121fcf1d1","type":"CDSView"},{"attributes":{"source":{"id":"9cb0e9b3-4e4e-4dd9-ab3a-a19ec5be4e6b","type":"ColumnDataSource"}},"id":"1cd559a3-b17e-4282-9722-870ebe11cd0d","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"41c5cdca-2fb3-4c6b-826f-79da9959447d","type":"Asterisk"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":3.5}},"id":"7ed56271-9071-4f66-9d16-72f1d1c56342","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"OWVhyvUgB0A2qY4jYSgDQIK3y3C7dQNAX+yMOvdeAEAIC/3GO/YAQC5+H8+nfANAk+DfpQeBA0BFyk9wbxEEQP9k77o+nAFAZ5blvfAQAkA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"60GvPnOnEkBwcfB9BXQTQB7N6HFajBFAldvDGaBDEEBodS3duMIQQOu/EMqcAxJAx1lVPlgcEkA8Tus1iKITQAFJNsiJexNAduoj0m/kEUA=","dtype":"float64","shape":[10]}}},"id":"7995822b-ae5a-4538-bdc6-cd7e5cbfa1c2","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"1effbbd6-81cf-48fc-80c3-69fc565bde3f","type":"Text"},{"attributes":{"data_source":{"id":"9cb0e9b3-4e4e-4dd9-ab3a-a19ec5be4e6b","type":"ColumnDataSource"},"glyph":{"id":"a80f02f8-900c-4128-a5f3-6219062ac521","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7ed56271-9071-4f66-9d16-72f1d1c56342","type":"Text"},"selection_glyph":null,"view":{"id":"1cd559a3-b17e-4282-9722-870ebe11cd0d","type":"CDSView"}},"id":"d19d1600-42af-4589-9d76-005d76ad49ba","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"c81e6cb0-90b0-442b-b8ac-4f91f4e1bc82","type":"Asterisk"},{"attributes":{"data_source":{"id":"89d7393a-9f17-4ee3-bd6f-e427a09057ee","type":"ColumnDataSource"},"glyph":{"id":"41c5cdca-2fb3-4c6b-826f-79da9959447d","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c81e6cb0-90b0-442b-b8ac-4f91f4e1bc82","type":"Asterisk"},"selection_glyph":null,"view":{"id":"44628e4c-3169-44ff-a8d6-2f02a4f23b28","type":"CDSView"}},"id":"347a2246-9479-42ba-9c1a-7c757d56b4bb","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":3.5}},"id":"8689f042-f211-4cae-974c-23e309ff37ee","type":"Text"},{"attributes":{"source":{"id":"89d7393a-9f17-4ee3-bd6f-e427a09057ee","type":"ColumnDataSource"}},"id":"44628e4c-3169-44ff-a8d6-2f02a4f23b28","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["x"]}},"id":"d78fc301-d14f-4acc-a04e-09c63fcc3006","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f7b7a8e-59e3-40d2-886b-15c4c0ee7602","type":"CircleX"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"aff93fe3-5b1a-48ee-b5aa-d6e5950a7580","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"aeb1e765-5c37-47bb-8c28-3dda5f970bc4","type":"CircleX"},{"attributes":{"source":{"id":"51b8681e-9fe2-4432-b86f-e31b0e80a673","type":"ColumnDataSource"}},"id":"f8ce0202-dad2-43ce-9247-58746bb1992d","type":"CDSView"},{"attributes":{"data_source":{"id":"51b8681e-9fe2-4432-b86f-e31b0e80a673","type":"ColumnDataSource"},"glyph":{"id":"1b1e4662-5218-44e4-a2e6-7ecdea63bca0","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8689f042-f211-4cae-974c-23e309ff37ee","type":"Text"},"selection_glyph":null,"view":{"id":"f8ce0202-dad2-43ce-9247-58746bb1992d","type":"CDSView"}},"id":"5c627f8d-f87b-4ce1-b6a8-48e82bf73fc6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"Ik5KW3sAEEBei+RE1gESQAMB2kQophBAH2GiUeI7EkDWK/Bj6H4TQJ6g80o4URBA7Uylq+kKE0BbmKEpMKERQJoLTp6ykBFAt/14Ork0E0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"XgkM9AFCE0Cqk7Z9sZ0SQBi9jUaGaxNA39GgIU/CE0D6nmEScr0SQCseMC3pvRBAyhOE1LGzEkCk7EHeoOYQQGLK8e7zDxFAhEI3+wmZEEA=","dtype":"float64","shape":[10]}}},"id":"7c1f4987-c7b0-4077-af66-feb61bc7d3dc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7ea68987-a6b7-4487-ba00-6489b5a054ad","type":"ColumnDataSource"},"glyph":{"id":"98395268-f975-451c-83fe-0ffd2db452cc","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cecef292-5ece-4888-a473-df7b1d4831d2","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"e62f2152-9136-46de-974a-cad13d078362","type":"CDSView"}},"id":"010bd0ed-2ca7-4bb9-8dbc-494aeec5b155","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"b435d123-d286-466d-ae05-c3f7fba131c5","type":"Text"},{"attributes":{"source":{"id":"7995822b-ae5a-4538-bdc6-cd7e5cbfa1c2","type":"ColumnDataSource"}},"id":"d09f8e98-7620-4613-b225-27b046bd1f42","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":3.5}},"id":"3868f0f4-c6df-4875-a337-e514bc4b8a8a","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"5eeda74d-4462-490d-a8c7-fee405707bba","type":"SquareX"},{"attributes":{"source":{"id":"d78fc301-d14f-4acc-a04e-09c63fcc3006","type":"ColumnDataSource"}},"id":"7b724fca-f041-4f52-8d24-7553c01ecada","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"7Rut13S3GkDia7XdSnsYQPYhS4V4UxpA0ouVFrxrGkDz9J68X8sbQFVCUAUHgxtAWDtJn31gGUA5Qc6hnKEbQGbhWCOIfhtAiUBt+mLnGUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"4tGrTG6mEkBdoy+a05MRQAM1SNox2xNA2kztEQydE0BJVn99Us0SQI7hjjq1zBBAd5ui+RtwEUDvIFSp0Y8SQMuI9JrHgxFAtcHfLmF1EEA=","dtype":"float64","shape":[10]}}},"id":"7ea68987-a6b7-4487-ba00-6489b5a054ad","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle_cross / o+"]}},"id":"4d772013-c527-494a-932a-74ca080aed4b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0978d0d4-0e25-441c-84da-f08066796e2b","type":"SquareX"},{"attributes":{"data_source":{"id":"d78fc301-d14f-4acc-a04e-09c63fcc3006","type":"ColumnDataSource"},"glyph":{"id":"aff93fe3-5b1a-48ee-b5aa-d6e5950a7580","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3868f0f4-c6df-4875-a337-e514bc4b8a8a","type":"Text"},"selection_glyph":null,"view":{"id":"7b724fca-f041-4f52-8d24-7553c01ecada","type":"CDSView"}},"id":"c1901176-ed32-4676-a5fd-0ea31ca10509","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7c1f4987-c7b0-4077-af66-feb61bc7d3dc","type":"ColumnDataSource"},"glyph":{"id":"5eeda74d-4462-490d-a8c7-fee405707bba","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0978d0d4-0e25-441c-84da-f08066796e2b","type":"SquareX"},"selection_glyph":null,"view":{"id":"0af342b1-16ea-47ce-8571-b7e9809e708a","type":"CDSView"}},"id":"5a1099c3-07c7-4683-9920-3fbcec1aac98","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4d772013-c527-494a-932a-74ca080aed4b","type":"ColumnDataSource"}},"id":"dee858af-84d0-445f-81cd-6898630b11be","type":"CDSView"},{"attributes":{"source":{"id":"7c1f4987-c7b0-4077-af66-feb61bc7d3dc","type":"ColumnDataSource"}},"id":"0af342b1-16ea-47ce-8571-b7e9809e708a","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"123dbe80-4a2f-4f37-90dd-87a6980059ae","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"98395268-f975-451c-83fe-0ffd2db452cc","type":"InvertedTriangle"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square_cross"]}},"id":"a7dbbeb7-2ac5-4133-991b-35519e559bf4","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"cecef292-5ece-4888-a473-df7b1d4831d2","type":"InvertedTriangle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":6.5}},"id":"064f2ad8-146e-48a2-8e8b-dc6f4677d24d","type":"Text"},{"attributes":{"data_source":{"id":"4d772013-c527-494a-932a-74ca080aed4b","type":"ColumnDataSource"},"glyph":{"id":"1effbbd6-81cf-48fc-80c3-69fc565bde3f","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"064f2ad8-146e-48a2-8e8b-dc6f4677d24d","type":"Text"},"selection_glyph":null,"view":{"id":"dee858af-84d0-445f-81cd-6898630b11be","type":"CDSView"}},"id":"e279e29a-b084-44e2-bc49-4ab1b33fafae","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"HiTcUH2+IEAb0swTQ28hQKMDBJvdiCBA/YFbtd//IEDEpvdwJPUhQIU7n4KXQSBAmuZaFfN+IUCAme2lVpsgQElBZ5+xyiBAFfSJTShSIUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"i9hRu4zxEkDTnM1ou2sTQL3Jydgl3hJA8zw2RtEsEEAtJ/e0YxIRQCzR5tu4mRNAGYTTxj/PEkDkSeuoEwoRQMPkfNrd2BNAaC84EgQmEkA=","dtype":"float64","shape":[10]}}},"id":"17666930-7e5e-4c64-af8a-648809ee152f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e554b2d3-5e1d-4d6f-ba0b-6b807de404aa","type":"ColumnDataSource"},"glyph":{"id":"0b780502-ef34-4d0e-869a-dbb96cae3d3d","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2e835b8f-e2f2-4bca-8ad5-90eb1640a312","type":"CircleCross"},"selection_glyph":null,"view":{"id":"603bc445-b658-4249-8261-8ea3080c73aa","type":"CDSView"}},"id":"72b1eba7-acea-4c84-8dca-ce2ff93a7337","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["diamond"]}},"id":"4e08c8c1-0028-42f7-977d-9845461dffb3","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7ea68987-a6b7-4487-ba00-6489b5a054ad","type":"ColumnDataSource"}},"id":"e62f2152-9136-46de-974a-cad13d078362","type":"CDSView"},{"attributes":{"source":{"id":"a7dbbeb7-2ac5-4133-991b-35519e559bf4","type":"ColumnDataSource"}},"id":"daf5628d-a126-4aa3-b3b7-28a6c11a0132","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"827a4e3a-3835-4824-b236-ddd6928bb33e","type":"X"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":4.5},"y":{"value":6.5}},"id":"12b72dcc-314c-467b-9ab8-80e372f1687f","type":"Text"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"RYSsGF9eAUDsEd7stvIAQIe8B/OhNAVAyDgaqM3yAECFp8hkD/oBQJ4guD6dwAZAOIKrCaI7AUBAfQloZpUHQO+dx8hTawZAhghASKWNAUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"7PfWAzfDH0CGkGC6V6kcQCHyXttYcR5Aq2YFgEXrHED5Zt1YD24dQErD5dfvQBxAm+PmIqreHECXUb2jphQeQEmbm1CQBRxAem9VjD+DHEA=","dtype":"float64","shape":[10]}}},"id":"e554b2d3-5e1d-4d6f-ba0b-6b807de404aa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a7dbbeb7-2ac5-4133-991b-35519e559bf4","type":"ColumnDataSource"},"glyph":{"id":"123dbe80-4a2f-4f37-90dd-87a6980059ae","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12b72dcc-314c-467b-9ab8-80e372f1687f","type":"Text"},"selection_glyph":null,"view":{"id":"daf5628d-a126-4aa3-b3b7-28a6c11a0132","type":"CDSView"}},"id":"30b2d010-8a35-481b-8165-a13a953e4557","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5e24d34-dfb7-4f85-a584-5a28bc188625","type":"X"},{"attributes":{"data_source":{"id":"17666930-7e5e-4c64-af8a-648809ee152f","type":"ColumnDataSource"},"glyph":{"id":"827a4e3a-3835-4824-b236-ddd6928bb33e","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e5e24d34-dfb7-4f85-a584-5a28bc188625","type":"X"},"selection_glyph":null,"view":{"id":"b5af022e-f223-492f-b546-9d6e80af16a1","type":"CDSView"}},"id":"0d0cd623-9271-441e-8a2e-b1e42961c158","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":6.5},"y":{"value":6.5}},"id":"2b204128-6998-4579-97c8-faa2a492512a","type":"Text"},{"attributes":{"source":{"id":"17666930-7e5e-4c64-af8a-648809ee152f","type":"ColumnDataSource"}},"id":"b5af022e-f223-492f-b546-9d6e80af16a1","type":"CDSView"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["cross / +"]}},"id":"348241ba-af18-4d58-b55a-1d3dcb62ef78","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b780502-ef34-4d0e-869a-dbb96cae3d3d","type":"CircleCross"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"aca339a8-38c3-41b3-8c84-d4d5c600c756","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2e835b8f-e2f2-4bca-8ad5-90eb1640a312","type":"CircleCross"},{"attributes":{"source":{"id":"4e08c8c1-0028-42f7-977d-9845461dffb3","type":"ColumnDataSource"}},"id":"5b9e384c-7612-414c-87fd-7e3cee93d563","type":"CDSView"},{"attributes":{"data_source":{"id":"4e08c8c1-0028-42f7-977d-9845461dffb3","type":"ColumnDataSource"},"glyph":{"id":"b435d123-d286-466d-ae05-c3f7fba131c5","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2b204128-6998-4579-97c8-faa2a492512a","type":"Text"},"selection_glyph":null,"view":{"id":"5b9e384c-7612-414c-87fd-7e3cee93d563","type":"CDSView"}},"id":"2751e4d9-04d6-4cf0-b52d-7c69060b820a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"nmLWreBBEkAS/zs/tH8QQLTU3+Hs4xBAnVS8jdjYEUDyFOhEx6YRQFLin3J/xBBABC4JG4StEEBd/tHp8/UTQHZgtXm41xBA2m3QXOuyEUA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"0+gODZ/HHECyduJSaF0eQFh9lOmlfR5AjmOof+qTHEC3VTJb1+IeQJ2bbkHtUxxAtFw3PpudHEDlc8kSo5IfQM6ZlbXggB9A+uwtl7wlH0A=","dtype":"float64","shape":[10]}}},"id":"b1ec52f4-758a-4e36-8cac-5884260460ce","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b0b3448b-f36c-4d24-a6e0-44318592a18b","type":"ColumnDataSource"},"glyph":{"id":"20784d16-1629-4902-9d48-a9656da67326","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f952f408-2874-4747-a2bc-d31092a049a1","type":"Diamond"},"selection_glyph":null,"view":{"id":"c33dadf3-67f9-4577-b4f3-c79b066f9663","type":"CDSView"}},"id":"9714dba3-3a52-4c28-9e1f-4de077c3f9b3","type":"GlyphRenderer"},{"attributes":{"source":{"id":"e554b2d3-5e1d-4d6f-ba0b-6b807de404aa","type":"ColumnDataSource"}},"id":"603bc445-b658-4249-8261-8ea3080c73aa","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":8.5},"y":{"value":6.5}},"id":"72078c0a-1e7e-4b3e-b7f1-d4bea946723e","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"f46616c5-5e29-45f1-94f4-b2bcd061265f","type":"SquareCross"},{"attributes":{"source":{"id":"348241ba-af18-4d58-b55a-1d3dcb62ef78","type":"ColumnDataSource"}},"id":"5ce58523-910e-4b5f-97a8-83eafdd5746c","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"7plqruK0GUBWFNbBXHEbQKTQbof+ERtA8wIUD5fvGUBO8KywT2oaQOZ0uvYbPxlA5odgT785GECSBapJwSQbQKWOLdkerBtA4KckayNeG0A=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"Qe2t9XM0HkCG/4I4qyYdQMIsp2V9Kx5AXkMnJXpPHUCFh64deeIdQEtyVz6r0B5ApN2GptxVHkB8Q+DGXlcdQEt27TaKuRxAqZHXQyUlHkA=","dtype":"float64","shape":[10]}}},"id":"b0b3448b-f36c-4d24-a6e0-44318592a18b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"348241ba-af18-4d58-b55a-1d3dcb62ef78","type":"ColumnDataSource"},"glyph":{"id":"aca339a8-38c3-41b3-8c84-d4d5c600c756","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72078c0a-1e7e-4b3e-b7f1-d4bea946723e","type":"Text"},"selection_glyph":null,"view":{"id":"5ce58523-910e-4b5f-97a8-83eafdd5746c","type":"CDSView"}},"id":"ee7e57ff-2c8b-46b8-b553-9d83dac86c9f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"69367923-bc63-42a6-9bd5-336b73395c0d","type":"SquareCross"},{"attributes":{"data_source":{"id":"b1ec52f4-758a-4e36-8cac-5884260460ce","type":"ColumnDataSource"},"glyph":{"id":"f46616c5-5e29-45f1-94f4-b2bcd061265f","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69367923-bc63-42a6-9bd5-336b73395c0d","type":"SquareCross"},"selection_glyph":null,"view":{"id":"ab94cd01-ca92-48a5-b391-52e69872b745","type":"CDSView"}},"id":"8a2258e6-9ef6-4d28-bd59-e2f91759b519","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b1ec52f4-758a-4e36-8cac-5884260460ce","type":"ColumnDataSource"}},"id":"ab94cd01-ca92-48a5-b391-52e69872b745","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20784d16-1629-4902-9d48-a9656da67326","type":"Diamond"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"f952f408-2874-4747-a2bc-d31092a049a1","type":"Diamond"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"j7+opfh2IEBurRGE5W0gQOHihBGWaiBA3DbtitGXIEAZXBOoF/EgQJO5XbpmPyBAqAbzCG/7IEARZwPwEFcgQPc37SzBaiBAHWrc7hIBIEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"ae/Wn8QGHUBeczgIRRQcQE55KrqnMx5A8hjvXG/6HUBUkUBLLmkdQEfK0ZRjjBxAzVwp4HKlHUD0Ci4vGWAeQMSeyeA0bR9AOBHGvJSYHUA=","dtype":"float64","shape":[10]}}},"id":"1b1be749-7843-4596-a4f7-f6870f11105a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["square"]}},"id":"fd4ce137-c847-4389-9f39-4c231b84274d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b0b3448b-f36c-4d24-a6e0-44318592a18b","type":"ColumnDataSource"}},"id":"c33dadf3-67f9-4577-b4f3-c79b066f9663","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"orange"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe83a552-cf7d-424f-8af9-4b8258fcebed","type":"Cross"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["circle / o"]}},"id":"afab5cea-3a07-4950-9754-e5a41dd80446","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"b801071d-e99b-4cd9-83f7-ed3e0fbb9ff8","type":"Cross"},{"attributes":{"data_source":{"id":"1b1be749-7843-4596-a4f7-f6870f11105a","type":"ColumnDataSource"},"glyph":{"id":"fe83a552-cf7d-424f-8af9-4b8258fcebed","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b801071d-e99b-4cd9-83f7-ed3e0fbb9ff8","type":"Cross"},"selection_glyph":null,"view":{"id":"ae6dd99e-3eac-4cb0-bd25-bb15df3459b0","type":"CDSView"}},"id":"c7cca75d-c559-465c-b209-c0d4e6e7705e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1b1be749-7843-4596-a4f7-f6870f11105a","type":"ColumnDataSource"}},"id":"ae6dd99e-3eac-4cb0-bd25-bb15df3459b0","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"firebrick"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"3434f19c-05e8-45a0-9641-8bdaefc15b07","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"value":2.5},"y":{"value":0.5}},"id":"d7d05a2a-93d5-45db-be4f-ab855aa861de","type":"Text"},{"attributes":{"data_source":{"id":"afab5cea-3a07-4950-9754-e5a41dd80446","type":"ColumnDataSource"},"glyph":{"id":"3434f19c-05e8-45a0-9641-8bdaefc15b07","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d7d05a2a-93d5-45db-be4f-ab855aa861de","type":"Text"},"selection_glyph":null,"view":{"id":"771ed161-e1c3-4f68-9dff-9b9a5c46fa5a","type":"CDSView"}},"id":"222e0a52-8723-43ee-9fc3-bf341ef49b89","type":"GlyphRenderer"},{"attributes":{"source":{"id":"afab5cea-3a07-4950-9754-e5a41dd80446","type":"ColumnDataSource"}},"id":"771ed161-e1c3-4f68-9dff-9b9a5c46fa5a","type":"CDSView"}],"root_ids":["2a8aab67-107b-498f-85ed-c54c5e38a8ac"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"f9018bee-a4bc-4e9e-9584-fd1f2e423703","elementid":"d7b4616e-f0b8-43da-a741-97dfe0e69e0f","modelid":"2a8aab67-107b-498f-85ed-c54c5e38a8ac"}];
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