(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("dae49d09-7633-469a-9e18-9ad1a1539e10");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'dae49d09-7633-469a-9e18-9ad1a1539e10' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
      var css_urls = ["https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.css", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.css", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/css/ion.rangeSlider.skinFlat.min.css", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/img/sprite-skin-flat.png"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function(root, factory) {
              factory(root["Bokeh"]);
          })(this, function(Bokeh) {
            var define;
            return (function outer(modules, entry) {
            if (Bokeh != null) {
              return Bokeh.register_plugin(modules, entry);
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          ({
            "custom/main": function(require, module, exports) {
              var models = {
                "IonRangeSlider": require("custom/bk_script_23239.ion_range_slider").IonRangeSlider
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_23239.ion_range_slider": function(require, module, exports) {
          "use strict";
          var __extends = (this && this.__extends) || (function () {
              var extendStatics = function (d, b) {
                  extendStatics = Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                  return extendStatics(d, b);
              };
              return function (d, b) {
                  extendStatics(d, b);
                  function __() { this.constructor = d; }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
          })();
          Object.defineProperty(exports, "__esModule", { value: true });
          var callback_1 = require("core/util/callback");
          // The "core/properties" module has all the property types
          var p = require("core/properties");
          // HTML construction and manipulation functions
          var dom_1 = require("core/dom");
          // We will subclass in JavaScript from the same class that was subclassed
          // from in Python
          var input_widget_1 = require("models/widgets/input_widget");
          // This model will actually need to render things, so we must provide
          // view. The LayoutDOM model has a view already, so we will start with that
          var IonRangeSliderView = /** @class */ (function (_super) {
              __extends(IonRangeSliderView, _super);
              function IonRangeSliderView() {
                  return _super !== null && _super.apply(this, arguments) || this;
              }
              IonRangeSliderView.prototype.initialize = function () {
                  var _this = this;
                  _super.prototype.initialize.call(this);
                  var callback = this.model.callback;
                  if (callback != null) {
                      var wrapper = function () { return callback.execute(_this.model); };
                      switch (this.model.callback_policy) {
                          case "continuous": {
                              this.callback_wrapper = wrapper;
                              break;
                          }
                          case "throttle": {
                              this.callback_wrapper = callback_1.throttle(wrapper, this.model.callback_throttle);
                              break;
                          }
                      }
                  }
              };
              IonRangeSliderView.prototype.render = function () {
                  var _this = this;
                  // BokehJS Views create <div> elements by default, accessible as @el.
                  // Many Bokeh views ignore this default <div>, and instead do things
                  // like draw to the HTML canvas. In this case though, we change the
                  // contents of the <div>, based on the current slider value.
                  _super.prototype.render.call(this);
                  if (this.model.title != null) {
                      this.value_el = dom_1.input({ type: "text", class: "bk-input", readonly: true, style: { marginBottom: "5px" } });
                      this.group_el.appendChild(this.value_el);
                  }
                  this.slider_el = dom_1.input({ type: "text" });
                  this.group_el.appendChild(dom_1.div({ style: { width: "100%" } }, this.slider_el));
                  // Set up parameters
                  var max = this.model.end;
                  var min = this.model.start;
                  var _a = this.model.range || [max, min], from = _a[0], to = _a[1];
                  var opts = {
                      type: "double",
                      grid: this.model.grid,
                      min: min,
                      max: max,
                      from: from,
                      to: to,
                      step: this.model.step || (max - min) / 50,
                      disable: this.model.disabled,
                      onChange: function (data) { return _this.slide(data); },
                      onFinish: function (data) { return _this.slidestop(data); },
                  };
                  jQuery(this.slider_el).ionRangeSlider(opts);
                  if (this.value_el != null)
                      this.value_el.value = from + " - " + to;
              };
              IonRangeSliderView.prototype.slidestop = function (_data) {
                  switch (this.model.callback_policy) {
                      case "mouseup":
                      case "throttle": {
                          var callback = this.model.callback;
                          if (callback != null)
                              callback.execute(this.model);
                          break;
                      }
                  }
              };
              IonRangeSliderView.prototype.slide = function (_a) {
                  var from = _a.from, to = _a.to;
                  if (this.value_el != null)
                      this.value_el.value = from + " - " + to;
                  this.model.range = [from, to];
                  if (this.callback_wrapper != null)
                      this.callback_wrapper();
              };
              IonRangeSliderView.__name__ = "IonRangeSliderView";
              return IonRangeSliderView;
          }(input_widget_1.InputWidgetView));
          exports.IonRangeSliderView = IonRangeSliderView;
          var IonRangeSlider = /** @class */ (function (_super) {
              __extends(IonRangeSlider, _super);
              function IonRangeSlider(attrs) {
                  return _super.call(this, attrs) || this;
              }
              IonRangeSlider.initClass = function () {
                  // If there is an associated view, this is boilerplate.
                  this.prototype.default_view = IonRangeSliderView;
                  // The @define block adds corresponding "properties" to the JS model. These
                  // should basically line up 1-1 with the Python model class. Most property
                  // types have counterparts, e.g. bokeh.core.properties.String will be
                  // p.String in the JS implementation. Where the JS type system is not yet
                  // as rich, you can use p.Any as a "wildcard" property type.
                  this.define({
                      range: [p.Any],
                      start: [p.Number, 0],
                      end: [p.Number, 1],
                      step: [p.Number, 0.1],
                      grid: [p.Boolean, true],
                      callback_throttle: [p.Number, 200],
                      callback_policy: [p.SliderCallbackPolicy, "throttle"],
                  });
              };
              IonRangeSlider.__name__ = "IonRangeSlider";
              return IonRangeSlider;
          }(input_widget_1.InputWidget));
          exports.IonRangeSlider = IonRangeSlider;
          IonRangeSlider.initClass();
    
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
                    
                  var docs_json = '{"b44f0f8a-6e7d-4e91-a435-2c65ce6a6f39":{"roots":{"references":[{"attributes":{},"id":"23251","type":"BasicTicker"},{"attributes":{},"id":"23290","type":"UnionRenderers"},{"attributes":{},"id":"23248","type":"LinearScale"},{"attributes":{"text":""},"id":"23284","type":"Title"},{"attributes":{},"id":"23256","type":"BasicTicker"},{"attributes":{"children":[{"id":"23241","subtype":"Figure","type":"Plot"},{"id":"23280","type":"Slider"},{"id":"23281","type":"IonRangeSlider"}]},"id":"23282","type":"Column"},{"attributes":{},"id":"23246","type":"LinearScale"},{"attributes":{"callback":null,"end":5,"js_property_callbacks":{"change:value":[{"id":"23278","type":"CustomJS"}]},"start":0,"step":0.1,"title":"Bokeh Slider - Power","value":1},"id":"23280","type":"Slider"},{"attributes":{"callback":{"id":"23279","type":"CustomJS"},"callback_policy":"continuous","end":0.99,"range":[0.01,0.985],"start":0.01,"step":0.01,"title":"Ion Range Slider - Range"},"id":"23281","type":"IonRangeSlider"},{"attributes":{"below":[{"id":"23250","type":"LinearAxis"}],"center":[{"id":"23254","type":"Grid"},{"id":"23259","type":"Grid"}],"left":[{"id":"23255","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"23276","type":"GlyphRenderer"}],"title":{"id":"23284","type":"Title"},"toolbar":{"id":"23266","type":"Toolbar"},"x_range":{"id":"23242","type":"DataRange1d"},"x_scale":{"id":"23246","type":"LinearScale"},"y_range":{"id":"23244","type":"DataRange1d"},"y_scale":{"id":"23248","type":"LinearScale"}},"id":"23241","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23289","type":"Selection"},{"attributes":{"formatter":{"id":"23286","type":"BasicTickFormatter"},"ticker":{"id":"23256","type":"BasicTicker"}},"id":"23255","type":"LinearAxis"},{"attributes":{"callback":null},"id":"23242","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985],"y":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985]},"selected":{"id":"23289","type":"Selection"},"selection_policy":{"id":"23290","type":"UnionRenderers"}},"id":"23240","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"23288","type":"BasicTickFormatter"},"ticker":{"id":"23251","type":"BasicTicker"}},"id":"23250","type":"LinearAxis"},{"attributes":{},"id":"23265","type":"HelpTool"},{"attributes":{},"id":"23288","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"23275","type":"Line"},{"attributes":{"data_source":{"id":"23240","type":"ColumnDataSource"},"glyph":{"id":"23274","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23275","type":"Line"},"selection_glyph":null,"view":{"id":"23277","type":"CDSView"}},"id":"23276","type":"GlyphRenderer"},{"attributes":{"args":{"source":{"id":"23240","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value\\n        var x = data[&#x27;x&#x27;]\\n        var y = data[&#x27;y&#x27;]\\n        for (var i = 0; i &lt; x.length; i++) {\\n            y[i] = Math.pow(x[i], f)\\n        }\\n        source.change.emit();\\n    "},"id":"23278","type":"CustomJS"},{"attributes":{},"id":"23286","type":"BasicTickFormatter"},{"attributes":{},"id":"23264","type":"ResetTool"},{"attributes":{},"id":"23263","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23291","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"23256","type":"BasicTicker"}},"id":"23259","type":"Grid"},{"attributes":{"source":{"id":"23240","type":"ColumnDataSource"}},"id":"23277","type":"CDSView"},{"attributes":{"ticker":{"id":"23251","type":"BasicTicker"}},"id":"23254","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23260","type":"PanTool"},{"id":"23261","type":"WheelZoomTool"},{"id":"23262","type":"BoxZoomTool"},{"id":"23263","type":"SaveTool"},{"id":"23264","type":"ResetTool"},{"id":"23265","type":"HelpTool"}]},"id":"23266","type":"Toolbar"},{"attributes":{"args":{"source":{"id":"23240","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.range\\n        var x = data[&#x27;x&#x27;]\\n        var y = data[&#x27;y&#x27;]\\n        var pow = (Math.log(y[100])/Math.log(x[100]))\\n        console.log(pow)\\n        var delta = (f[1] - f[0])/x.length\\n        for (var i = 0; i &lt; x.length; i++) {\\n            x[i] = delta*i + f[0]\\n            y[i] = Math.pow(x[i], pow)\\n        }\\n        source.change.emit();\\n    "},"id":"23279","type":"CustomJS"},{"attributes":{"line_alpha":0.6,"line_color":"#ed5565","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"23274","type":"Line"},{"attributes":{"overlay":{"id":"23291","type":"BoxAnnotation"}},"id":"23262","type":"BoxZoomTool"},{"attributes":{},"id":"23261","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"23244","type":"DataRange1d"},{"attributes":{},"id":"23260","type":"PanTool"}],"root_ids":["23282"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"b44f0f8a-6e7d-4e91-a435-2c65ce6a6f39","roots":{"23282":"dae49d09-7633-469a-9e18-9ad1a1539e10"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();