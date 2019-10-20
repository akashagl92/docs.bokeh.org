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
      };var element = document.getElementById("9fc28ead-c07e-43aa-a13a-c20198eadfa2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9fc28ead-c07e-43aa-a13a-c20198eadfa2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                "IonRangeSlider": require("custom/bk_script_4375e37af8d74895a98cf9bfef6576ac.ion_range_slider").IonRangeSlider
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_4375e37af8d74895a98cf9bfef6576ac.ion_range_slider": function(require, module, exports) {
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
                  var disable, from, grid, inp, max, min, opts, range, slider, step, to;
                  // BokehJS Views create <div> elements by default, accessible as @$el.
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
                  inp = this.$el.find('.slider')[0];
                  slider = jQuery(inp).ionRangeSlider(opts);
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
          }).call(this);
    
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
                    
                  var docs_json = '{"d2d1daa0-c803-44f0-b887-c88b2b611243":{"roots":{"references":[{"attributes":{"args":{"source":{"id":"f46bed5d-9503-41f5-9aec-a5213f96ad22","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value\\n        var x = data[&#x27;x&#x27;]\\n        var y = data[&#x27;y&#x27;]\\n        for (var i = 0; i &lt; x.length; i++) {\\n            y[i] = Math.pow(x[i], f)\\n        }\\n        source.change.emit();\\n    "},"id":"1baf8788-76a5-4de8-a42d-f9292b8a6504","type":"CustomJS"},{"attributes":{"args":{"source":{"id":"f46bed5d-9503-41f5-9aec-a5213f96ad22","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.range\\n        var x = data[&#x27;x&#x27;]\\n        var y = data[&#x27;y&#x27;]\\n        var pow = (Math.log(y[100])/Math.log(x[100]))\\n        console.log(pow)\\n        var delta = (f[1] - f[0])/x.length\\n        for (var i = 0; i &lt; x.length; i++) {\\n            x[i] = delta*i + f[0]\\n            y[i] = Math.pow(x[i], pow)\\n        }\\n        source.change.emit();\\n    "},"id":"12714bc1-e0be-415b-b40f-fc415e753936","type":"CustomJS"},{"attributes":{"callback":{"id":"12714bc1-e0be-415b-b40f-fc415e753936","type":"CustomJS"},"callback_policy":"continuous","end":0.99,"range":[0.01,0.985],"start":0.01,"step":0.01,"title":"Ion Range Slider - Range"},"id":"dee5368f-59ab-4d64-9757-791dc51c9dec","type":"IonRangeSlider"},{"attributes":{"children":[{"id":"5aa02cfc-68d8-48dc-bcec-a04e0ebcc506","subtype":"Figure","type":"Plot"},{"id":"736e960a-c480-4012-ab65-dcad885fbffb","type":"WidgetBox"},{"id":"dd3226ca-db38-49cc-8100-0e7189d7b29b","type":"WidgetBox"}]},"id":"56782018-4800-489f-8e71-420323e50640","type":"Column"},{"attributes":{},"id":"8e2e8b29-0a45-40b7-b9b9-dd8a84405ce4","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"087ee699-1762-4472-9935-ca281741ab16","type":"Slider"}]},"id":"736e960a-c480-4012-ab65-dcad885fbffb","type":"WidgetBox"},{"attributes":{"children":[{"id":"dee5368f-59ab-4d64-9757-791dc51c9dec","type":"IonRangeSlider"}]},"id":"dd3226ca-db38-49cc-8100-0e7189d7b29b","type":"WidgetBox"},{"attributes":{},"id":"645e0793-ad93-4114-800d-eb39a0144138","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985],"y":[0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985]},"selected":{"id":"6c8c986f-6c71-431a-bf79-5b999c6ed800","type":"Selection"},"selection_policy":{"id":"083471c9-f916-4285-812d-dbfb73622b48","type":"UnionRenderers"}},"id":"f46bed5d-9503-41f5-9aec-a5213f96ad22","type":"ColumnDataSource"},{"attributes":{},"id":"6c8c986f-6c71-431a-bf79-5b999c6ed800","type":"Selection"},{"attributes":{"data_source":{"id":"f46bed5d-9503-41f5-9aec-a5213f96ad22","type":"ColumnDataSource"},"glyph":{"id":"1857a45a-42d9-41b7-a1e2-e0e688c63745","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d8f16372-3148-465a-8f13-abc7c636557b","type":"Line"},"selection_glyph":null,"view":{"id":"c8b1cbb2-888b-4033-90b0-2306786d7f63","type":"CDSView"}},"id":"30f1f00d-a331-46cd-be5c-19459888f101","type":"GlyphRenderer"},{"attributes":{},"id":"083471c9-f916-4285-812d-dbfb73622b48","type":"UnionRenderers"},{"attributes":{"below":[{"id":"cc25e110-6616-46fd-ad16-70de70d5d0e0","type":"LinearAxis"}],"left":[{"id":"4f2a9715-b8fe-47e0-92b2-ceda76103abc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cc25e110-6616-46fd-ad16-70de70d5d0e0","type":"LinearAxis"},{"id":"4bc1fce7-a6ef-47e9-9420-138bd59e531b","type":"Grid"},{"id":"4f2a9715-b8fe-47e0-92b2-ceda76103abc","type":"LinearAxis"},{"id":"7d97e9f4-fd99-4238-9393-5950d16f4657","type":"Grid"},{"id":"84c49800-ddad-4604-9c0c-f19131257ea6","type":"BoxAnnotation"},{"id":"30f1f00d-a331-46cd-be5c-19459888f101","type":"GlyphRenderer"}],"title":{"id":"2c6555e1-3b14-41c8-86cb-cef4ea0af578","type":"Title"},"toolbar":{"id":"497bbd34-69db-4822-8ff1-0ef7325a16de","type":"Toolbar"},"x_range":{"id":"bf08b025-093b-4f7c-92c8-3604e1f205f1","type":"DataRange1d"},"x_scale":{"id":"0ee6fcd9-7b6e-426c-8998-6c3868e71d88","type":"LinearScale"},"y_range":{"id":"75e0dcba-ec6b-4012-b462-5e88805ebfeb","type":"DataRange1d"},"y_scale":{"id":"caf7b7f4-ee1c-4110-92ca-fce08d618bb8","type":"LinearScale"}},"id":"5aa02cfc-68d8-48dc-bcec-a04e0ebcc506","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed998bb9-e92e-4456-8906-9fa1163fc267","type":"PanTool"},{"id":"82c1be27-698f-4f8f-8a08-1583ee8d83e4","type":"WheelZoomTool"},{"id":"5039b8bc-d0b6-4375-9afa-fc34f1997202","type":"BoxZoomTool"},{"id":"68f6db32-48ca-4b04-99bd-a3b958ceb182","type":"SaveTool"},{"id":"21f21700-b4a2-42e8-8757-9bb234b7c97a","type":"ResetTool"},{"id":"11cd4abb-296e-478c-95b1-e94744a3d24c","type":"HelpTool"}]},"id":"497bbd34-69db-4822-8ff1-0ef7325a16de","type":"Toolbar"},{"attributes":{"callback":null},"id":"bf08b025-093b-4f7c-92c8-3604e1f205f1","type":"DataRange1d"},{"attributes":{"line_alpha":0.6,"line_color":"#ed5565","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"1857a45a-42d9-41b7-a1e2-e0e688c63745","type":"Line"},{"attributes":{"callback":null},"id":"75e0dcba-ec6b-4012-b462-5e88805ebfeb","type":"DataRange1d"},{"attributes":{},"id":"0ee6fcd9-7b6e-426c-8998-6c3868e71d88","type":"LinearScale"},{"attributes":{},"id":"caf7b7f4-ee1c-4110-92ca-fce08d618bb8","type":"LinearScale"},{"attributes":{"plot":{"id":"5aa02cfc-68d8-48dc-bcec-a04e0ebcc506","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4ba4c95-684b-49b9-a90d-eead5ad28f75","type":"BasicTicker"}},"id":"4bc1fce7-a6ef-47e9-9420-138bd59e531b","type":"Grid"},{"attributes":{"formatter":{"id":"645e0793-ad93-4114-800d-eb39a0144138","type":"BasicTickFormatter"},"plot":{"id":"5aa02cfc-68d8-48dc-bcec-a04e0ebcc506","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4ba4c95-684b-49b9-a90d-eead5ad28f75","type":"BasicTicker"}},"id":"cc25e110-6616-46fd-ad16-70de70d5d0e0","type":"LinearAxis"},{"attributes":{},"id":"a4ba4c95-684b-49b9-a90d-eead5ad28f75","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8e2e8b29-0a45-40b7-b9b9-dd8a84405ce4","type":"BasicTickFormatter"},"plot":{"id":"5aa02cfc-68d8-48dc-bcec-a04e0ebcc506","subtype":"Figure","type":"Plot"},"ticker":{"id":"b03afc05-8780-4367-8325-827e22817a0c","type":"BasicTicker"}},"id":"4f2a9715-b8fe-47e0-92b2-ceda76103abc","type":"LinearAxis"},{"attributes":{},"id":"b03afc05-8780-4367-8325-827e22817a0c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5aa02cfc-68d8-48dc-bcec-a04e0ebcc506","subtype":"Figure","type":"Plot"},"ticker":{"id":"b03afc05-8780-4367-8325-827e22817a0c","type":"BasicTicker"}},"id":"7d97e9f4-fd99-4238-9393-5950d16f4657","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"d8f16372-3148-465a-8f13-abc7c636557b","type":"Line"},{"attributes":{"plot":null,"text":""},"id":"2c6555e1-3b14-41c8-86cb-cef4ea0af578","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"84c49800-ddad-4604-9c0c-f19131257ea6","type":"BoxAnnotation"},{"attributes":{},"id":"ed998bb9-e92e-4456-8906-9fa1163fc267","type":"PanTool"},{"attributes":{"source":{"id":"f46bed5d-9503-41f5-9aec-a5213f96ad22","type":"ColumnDataSource"}},"id":"c8b1cbb2-888b-4033-90b0-2306786d7f63","type":"CDSView"},{"attributes":{},"id":"82c1be27-698f-4f8f-8a08-1583ee8d83e4","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"84c49800-ddad-4604-9c0c-f19131257ea6","type":"BoxAnnotation"}},"id":"5039b8bc-d0b6-4375-9afa-fc34f1997202","type":"BoxZoomTool"},{"attributes":{},"id":"68f6db32-48ca-4b04-99bd-a3b958ceb182","type":"SaveTool"},{"attributes":{},"id":"21f21700-b4a2-42e8-8757-9bb234b7c97a","type":"ResetTool"},{"attributes":{},"id":"11cd4abb-296e-478c-95b1-e94744a3d24c","type":"HelpTool"},{"attributes":{"callback":{"id":"1baf8788-76a5-4de8-a42d-f9292b8a6504","type":"CustomJS"},"end":5,"start":0,"step":0.1,"title":"Bokeh Slider - Power","value":1},"id":"087ee699-1762-4472-9935-ca281741ab16","type":"Slider"}],"root_ids":["56782018-4800-489f-8e71-420323e50640"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d2d1daa0-c803-44f0-b887-c88b2b611243","roots":{"56782018-4800-489f-8e71-420323e50640":"9fc28ead-c07e-43aa-a13a-c20198eadfa2"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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