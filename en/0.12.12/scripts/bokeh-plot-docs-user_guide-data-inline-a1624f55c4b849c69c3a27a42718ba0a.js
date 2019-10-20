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
      };var element = document.getElementById("c0edcfd3-b14d-4701-8f93-fd048c6139a6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c0edcfd3-b14d-4701-8f93-fd048c6139a6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c60af008-6371-4725-b91d-546e9cfb6710":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"1a782dc2-ca32-43e5-a0ff-bf00c3f87834","type":"Title"},{"attributes":{},"id":"ab46bcc5-9c75-4932-8750-423f35b1e0d0","type":"ResetTool"},{"attributes":{},"id":"756e5a8b-18ff-4da6-9771-dd92e5bf7f5f","type":"LinearScale"},{"attributes":{"formatter":{"id":"34fbc474-4e81-442e-b1f8-395410867d08","type":"BasicTickFormatter"},"plot":{"id":"0652dc8e-14cf-4ed9-9b5a-f3651f1b7a8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"94236371-df92-4a88-bc8c-83cb05a73cba","type":"BasicTicker"}},"id":"1d2b2050-fc33-4457-928e-c56042692388","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c537aaaa-725f-4c6a-9368-619f8dd4b3f1","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"ccdc7bfe-3c3e-4fd1-8e0f-4bbb1428316e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ddfb2f06-eaeb-4fd1-956b-a9d811867e40","type":"BasicTicker"}},"id":"8225eca0-00fe-464e-928e-bb734285765e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f1e91631-55d1-4c92-be50-9ee8996eceaf","type":"BoxSelectTool"},{"id":"9c17b1e8-f2ac-4d95-8dc4-68414ead1f0f","type":"HoverTool"},{"id":"ab46bcc5-9c75-4932-8750-423f35b1e0d0","type":"ResetTool"}]},"id":"3a051c30-a758-4f66-b7c9-bcbf163333cd","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"526974e6-7dc5-4212-a602-f563b1f82680","type":"BoxSelectTool"},{"id":"e79afaa3-2f0f-430a-aff2-a97fd289e492","type":"HoverTool"},{"id":"2c1e5b36-7e91-4366-9e06-e9b88d4c4a1b","type":"ResetTool"}]},"id":"19d6f139-ded6-4896-801a-064dc117807d","type":"Toolbar"},{"attributes":{"data_source":{"id":"2359838e-8549-4fa6-8ee4-fd790b18828f","type":"ColumnDataSource"},"glyph":{"id":"549765e4-0668-4b3b-a8a4-9c50da56450e","type":"Circle"},"hover_glyph":{"id":"6e8a4f9b-b7c9-4417-8995-282149ebc59c","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"6294c1aa-aaa9-43f3-8bf4-ce78229b2c90","type":"Circle"},"selection_glyph":null,"view":{"id":"9a26d159-29ac-4777-8885-5c3c18333eb3","type":"CDSView"}},"id":"855748bb-f736-41d2-be51-80903a495114","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"b58271e2-0b9f-4e2f-9a87-2d3fd1f9822d","type":"BasicTickFormatter"},"plot":{"id":"0652dc8e-14cf-4ed9-9b5a-f3651f1b7a8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a319ee5d-d431-48c6-b8ec-075ae1531d3d","type":"BasicTicker"}},"id":"2671aaba-7b29-4c4f-9f79-ffa17e77b2f0","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9176d628-9683-40f9-a4cf-7e23ccd15f6b","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"2359838e-8549-4fa6-8ee4-fd790b18828f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"3f74d001-3d7e-46d5-b5e9-a3d259efaf6c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3880539c-1325-4d6b-84fd-dc7d6fffb95d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6294c1aa-aaa9-43f3-8bf4-ce78229b2c90","type":"Circle"},{"attributes":{"toolbar":{"id":"87f5e839-d18a-4888-a32c-c8ad7e7ef67a","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"295eb42c-dbbf-47fa-a902-6412d7561530","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"e79afaa3-2f0f-430a-aff2-a97fd289e492","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"0652dc8e-14cf-4ed9-9b5a-f3651f1b7a8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a319ee5d-d431-48c6-b8ec-075ae1531d3d","type":"BasicTicker"}},"id":"4458e403-e8fb-4122-a01f-79b004eabc4b","type":"Grid"},{"attributes":{"plot":{"id":"ccdc7bfe-3c3e-4fd1-8e0f-4bbb1428316e","subtype":"Figure","type":"Plot"},"ticker":{"id":"07c7a786-acde-4107-98ab-0167441f3fef","type":"BasicTicker"}},"id":"c22ba8a7-e10b-428a-941a-2588fc7e79d8","type":"Grid"},{"attributes":{},"id":"ab9da9cf-e50b-49a0-b4af-e98f95286e75","type":"LinearScale"},{"attributes":{},"id":"b653d9a1-578a-481d-aae7-2c049089d46d","type":"LinearScale"},{"attributes":{},"id":"af1e9352-6ab5-4803-b629-2cf6bda0698e","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f825bc4-0e4e-4448-992f-d345e5be4e3f","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ce5aa447-f222-4bd9-a98f-d6375f6843f4","type":"BoxAnnotation"},{"attributes":{},"id":"7d3be26b-05f7-4f7a-a072-55f45c34e9b4","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"f1e91631-55d1-4c92-be50-9ee8996eceaf","type":"BoxSelectTool"},{"id":"9c17b1e8-f2ac-4d95-8dc4-68414ead1f0f","type":"HoverTool"},{"id":"ab46bcc5-9c75-4932-8750-423f35b1e0d0","type":"ResetTool"},{"id":"526974e6-7dc5-4212-a602-f563b1f82680","type":"BoxSelectTool"},{"id":"e79afaa3-2f0f-430a-aff2-a97fd289e492","type":"HoverTool"},{"id":"2c1e5b36-7e91-4366-9e06-e9b88d4c4a1b","type":"ResetTool"}]},"id":"87f5e839-d18a-4888-a32c-c8ad7e7ef67a","type":"ProxyToolbar"},{"attributes":{},"id":"94236371-df92-4a88-bc8c-83cb05a73cba","type":"BasicTicker"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"f6f79e38-d041-4738-966d-05f8ea30263b","type":"BooleanFilter"},{"attributes":{"callback":null,"overlay":{"id":"ce5aa447-f222-4bd9-a98f-d6375f6843f4","type":"BoxAnnotation"},"renderers":[{"id":"d72f2aa0-0021-43c3-8692-eed0a6deac4d","type":"GlyphRenderer"}]},"id":"f1e91631-55d1-4c92-be50-9ee8996eceaf","type":"BoxSelectTool"},{"attributes":{"source":{"id":"2359838e-8549-4fa6-8ee4-fd790b18828f","type":"ColumnDataSource"}},"id":"6412e9a5-4a5a-45e1-8f5c-2cc3d419f4ef","type":"CDSView"},{"attributes":{},"id":"2c1e5b36-7e91-4366-9e06-e9b88d4c4a1b","type":"ResetTool"},{"attributes":{},"id":"07c7a786-acde-4107-98ab-0167441f3fef","type":"BasicTicker"},{"attributes":{},"id":"c659d911-5ee3-42d3-ba61-8771e9b9b8dc","type":"LinearScale"},{"attributes":{},"id":"b58271e2-0b9f-4e2f-9a87-2d3fd1f9822d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"af1e9352-6ab5-4803-b629-2cf6bda0698e","type":"BasicTickFormatter"},"plot":{"id":"ccdc7bfe-3c3e-4fd1-8e0f-4bbb1428316e","subtype":"Figure","type":"Plot"},"ticker":{"id":"07c7a786-acde-4107-98ab-0167441f3fef","type":"BasicTicker"}},"id":"f33fee49-9f21-45c0-ad33-f1b96d553d6f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"549765e4-0668-4b3b-a8a4-9c50da56450e","type":"Circle"},{"attributes":{"filters":[{"id":"f6f79e38-d041-4738-966d-05f8ea30263b","type":"BooleanFilter"}],"source":{"id":"2359838e-8549-4fa6-8ee4-fd790b18828f","type":"ColumnDataSource"}},"id":"9a26d159-29ac-4777-8885-5c3c18333eb3","type":"CDSView"},{"attributes":{"plot":{"id":"0652dc8e-14cf-4ed9-9b5a-f3651f1b7a8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"94236371-df92-4a88-bc8c-83cb05a73cba","type":"BasicTicker"}},"id":"b31e0183-7f4d-4bb5-9d60-8e9361d71668","type":"Grid"},{"attributes":{"children":[{"id":"295eb42c-dbbf-47fa-a902-6412d7561530","type":"ToolbarBox"},{"id":"29003d16-ce10-4997-b61c-0184774e969a","type":"Column"}]},"id":"5fb64044-899d-45e4-94dc-d713e74446f8","type":"Column"},{"attributes":{"below":[{"id":"f33fee49-9f21-45c0-ad33-f1b96d553d6f","type":"LinearAxis"}],"left":[{"id":"8194bb2d-8eea-4cb1-a629-340c39eb9e6d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f33fee49-9f21-45c0-ad33-f1b96d553d6f","type":"LinearAxis"},{"id":"c22ba8a7-e10b-428a-941a-2588fc7e79d8","type":"Grid"},{"id":"8194bb2d-8eea-4cb1-a629-340c39eb9e6d","type":"LinearAxis"},{"id":"8225eca0-00fe-464e-928e-bb734285765e","type":"Grid"},{"id":"ce5aa447-f222-4bd9-a98f-d6375f6843f4","type":"BoxAnnotation"},{"id":"d72f2aa0-0021-43c3-8692-eed0a6deac4d","type":"GlyphRenderer"}],"title":{"id":"718123d3-8ca6-4b90-bb1b-701da98620b5","type":"Title"},"toolbar":{"id":"3a051c30-a758-4f66-b7c9-bcbf163333cd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c537aaaa-725f-4c6a-9368-619f8dd4b3f1","type":"DataRange1d"},"x_scale":{"id":"756e5a8b-18ff-4da6-9771-dd92e5bf7f5f","type":"LinearScale"},"y_range":{"id":"3f74d001-3d7e-46d5-b5e9-a3d259efaf6c","type":"DataRange1d"},"y_scale":{"id":"ab9da9cf-e50b-49a0-b4af-e98f95286e75","type":"LinearScale"}},"id":"ccdc7bfe-3c3e-4fd1-8e0f-4bbb1428316e","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"1d2b2050-fc33-4457-928e-c56042692388","type":"LinearAxis"}],"left":[{"id":"2671aaba-7b29-4c4f-9f79-ffa17e77b2f0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1d2b2050-fc33-4457-928e-c56042692388","type":"LinearAxis"},{"id":"b31e0183-7f4d-4bb5-9d60-8e9361d71668","type":"Grid"},{"id":"2671aaba-7b29-4c4f-9f79-ffa17e77b2f0","type":"LinearAxis"},{"id":"4458e403-e8fb-4122-a01f-79b004eabc4b","type":"Grid"},{"id":"9176d628-9683-40f9-a4cf-7e23ccd15f6b","type":"BoxAnnotation"},{"id":"855748bb-f736-41d2-be51-80903a495114","type":"GlyphRenderer"}],"title":{"id":"1a782dc2-ca32-43e5-a0ff-bf00c3f87834","type":"Title"},"toolbar":{"id":"19d6f139-ded6-4896-801a-064dc117807d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c537aaaa-725f-4c6a-9368-619f8dd4b3f1","type":"DataRange1d"},"x_scale":{"id":"c659d911-5ee3-42d3-ba61-8771e9b9b8dc","type":"LinearScale"},"y_range":{"id":"3f74d001-3d7e-46d5-b5e9-a3d259efaf6c","type":"DataRange1d"},"y_scale":{"id":"b653d9a1-578a-481d-aae7-2c049089d46d","type":"LinearScale"}},"id":"0652dc8e-14cf-4ed9-9b5a-f3651f1b7a8e","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"fe49c8e5-3c39-42db-b518-291cd60bb50d","type":"Row"}]},"id":"29003d16-ce10-4997-b61c-0184774e969a","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"9176d628-9683-40f9-a4cf-7e23ccd15f6b","type":"BoxAnnotation"},"renderers":[{"id":"855748bb-f736-41d2-be51-80903a495114","type":"GlyphRenderer"}]},"id":"526974e6-7dc5-4212-a602-f563b1f82680","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e8a4f9b-b7c9-4417-8995-282149ebc59c","type":"Circle"},{"attributes":{"callback":null},"id":"9c17b1e8-f2ac-4d95-8dc4-68414ead1f0f","type":"HoverTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7bbff07a-7187-4b39-98ce-cbb5e4f1cbd2","type":"Circle"},{"attributes":{},"id":"a319ee5d-d431-48c6-b8ec-075ae1531d3d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7d3be26b-05f7-4f7a-a072-55f45c34e9b4","type":"BasicTickFormatter"},"plot":{"id":"ccdc7bfe-3c3e-4fd1-8e0f-4bbb1428316e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ddfb2f06-eaeb-4fd1-956b-a9d811867e40","type":"BasicTicker"}},"id":"8194bb2d-8eea-4cb1-a629-340c39eb9e6d","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"718123d3-8ca6-4b90-bb1b-701da98620b5","type":"Title"},{"attributes":{"children":[{"id":"ccdc7bfe-3c3e-4fd1-8e0f-4bbb1428316e","subtype":"Figure","type":"Plot"},{"id":"0652dc8e-14cf-4ed9-9b5a-f3651f1b7a8e","subtype":"Figure","type":"Plot"}]},"id":"fe49c8e5-3c39-42db-b518-291cd60bb50d","type":"Row"},{"attributes":{},"id":"ddfb2f06-eaeb-4fd1-956b-a9d811867e40","type":"BasicTicker"},{"attributes":{},"id":"34fbc474-4e81-442e-b1f8-395410867d08","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2359838e-8549-4fa6-8ee4-fd790b18828f","type":"ColumnDataSource"},"glyph":{"id":"3880539c-1325-4d6b-84fd-dc7d6fffb95d","type":"Circle"},"hover_glyph":{"id":"7bbff07a-7187-4b39-98ce-cbb5e4f1cbd2","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"0f825bc4-0e4e-4448-992f-d345e5be4e3f","type":"Circle"},"selection_glyph":null,"view":{"id":"6412e9a5-4a5a-45e1-8f5c-2cc3d419f4ef","type":"CDSView"}},"id":"d72f2aa0-0021-43c3-8692-eed0a6deac4d","type":"GlyphRenderer"}],"root_ids":["5fb64044-899d-45e4-94dc-d713e74446f8"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"c60af008-6371-4725-b91d-546e9cfb6710","elementid":"c0edcfd3-b14d-4701-8f93-fd048c6139a6","modelid":"5fb64044-899d-45e4-94dc-d713e74446f8"}];
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