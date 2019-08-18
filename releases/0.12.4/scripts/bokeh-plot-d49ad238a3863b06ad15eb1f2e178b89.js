(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("fc012f7c-3ee9-46d5-a09e-0c6dbbfc491d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc012f7c-3ee9-46d5-a09e-0c6dbbfc491d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js", "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          
          (function outer(modules, cache, entry) {
            if (Bokeh != null) {
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                var plugin = Bokeh.require(entry[i]);
                Bokeh.Models.register_models(plugin.models);
          
                for (var name in plugin) {
                  if (name !== "models") {
                    Bokeh[name] = plugin[name];
                  }
                }
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          
          ({
            "custom/main": [function(require, module, exports) {
              module.exports = {
                models: {
                  "Custom": require("custom/bk_script_041de002991c4fc2b2e98fbd8f1672fd.custom").Custom,
          "MyFormatter": require("custom/bk_script_08f8365abd2444bbb7d9c48ca57f0d2d.my_formatter").MyFormatter,
          "IonRangeSlider": require("custom/bk_script_1c6526d23bd84624aaee2d1301462e4a.ion_range_slider").IonRangeSlider,
          "LatexLabel": require("custom/bk_script_cdc746781670473d8d27c9a1c06b67f6.latex_label").LatexLabel,
          "DrawTool": require("custom/bk_script_e25b70cdc6dd461b944620285e491896.draw_tool").DrawTool,
          "Surface3d": require("custom/bk_script_e57c0ccd29f44302a5d47bd45834a2b6.surface3d").Surface3d
                }
              };
            }, {}],
            "30413f2dce342ed9dc670a24158e40d4f649bfdcd172091c50c14e988032820b": [function(require, module, exports) {
          "use strict";
          var DOM = require("core/util/dom");
          Object.defineProperty(exports, "__esModule", { value: true });
          exports.default = function (props) {
              var title, value;
              if (props.title != null) {
                  if (props.title.length != 0) {
                      title = DOM.createElement("label", { for: props.id },
                          " ",
                          props.title,
                          ": ");
                  }
                  value = DOM.createElement("input", { type: "text", id: props.id, readonly: true });
              }
              return (DOM.createElement("div", { class: "bk-slider-parent" },
                  title,
                  value,
                  DOM.createElement("div", { class: "bk-slider-horizontal" },
                      DOM.createElement("input", { type: "text", class: "slider", id: props.id }))));
          };
          
          }, {}],
          "custom/bk_script_041de002991c4fc2b2e98fbd8f1672fd.custom": [function(require, module, exports) {
          "use strict";
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var p = require("core/properties");
          var layout_dom_1 = require("models/layouts/layout_dom");
          exports.CustomView = (function (superClass) {
              extend(CustomView, superClass);
              function CustomView() {
                  return CustomView.__super__.constructor.apply(this, arguments);
              }
              CustomView.prototype.initialize = function (options) {
                  CustomView.__super__.initialize.call(this, options);
                  this.render();
                  return this.listenTo(this.model.slider, 'change', (function (_this) {
                      return function () {
                          return _this.render();
                      };
                  })(this));
              };
              CustomView.prototype.render = function () {
                  this.$el.html("<h1>" + this.model.text + ": " + this.model.slider.value + "</h1>");
                  return this.$el.find('h1').css({
                      'color': '#686d8e',
                      'background-color': '#2a3153'
                  });
              };
              return CustomView;
          })(layout_dom_1.LayoutDOMView);
          exports.Custom = (function (superClass) {
              extend(Custom, superClass);
              function Custom() {
                  return Custom.__super__.constructor.apply(this, arguments);
              }
              Custom.prototype.default_view = exports.CustomView;
              Custom.prototype.type = "Custom";
              Custom.define({
                  text: [p.String],
                  slider: [p.Any]
              });
              return Custom;
          })(layout_dom_1.LayoutDOM);
          
          }, {}],
          "custom/bk_script_08f8365abd2444bbb7d9c48ca57f0d2d.my_formatter": [function(require, module, exports) {
          "use strict";
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var tick_formatter_1 = require("models/formatters/tick_formatter");
          exports.MyFormatter = (function (superClass) {
              extend(MyFormatter, superClass);
              function MyFormatter() {
                  return MyFormatter.__super__.constructor.apply(this, arguments);
              }
              MyFormatter.prototype.type = "MyFormatter";
              MyFormatter.prototype.doFormat = function (ticks) {
                  var formatted, i, j, ref;
                  formatted = ["" + ticks[0]];
                  for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                      formatted.push("+" + ((ticks[i] - ticks[0]).toPrecision(2)));
                  }
                  return formatted;
              };
              return MyFormatter;
          })(tick_formatter_1.TickFormatter);
          
          }, {}],
          "custom/bk_script_1c6526d23bd84624aaee2d1301462e4a.ion_range_slider": [function(require, module, exports) {
          "use strict";
          var bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; }, extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var _ = require("underscore");
          var p = require("core/properties");
          var input_widget_1 = require("models/widgets/input_widget");
          var extensions_ion_range_slider_template_1 = require("./extensions_ion_range_slider_template");
          exports.IonRangeSliderView = (function (superClass) {
              extend(IonRangeSliderView, superClass);
              function IonRangeSliderView() {
                  this.slide = bind(this.slide, this);
                  this.slidestop = bind(this.slidestop, this);
                  return IonRangeSliderView.__super__.constructor.apply(this, arguments);
              }
              IonRangeSliderView.prototype.tagName = "div";
              IonRangeSliderView.prototype.template = extensions_ion_range_slider_template_1.default;
              IonRangeSliderView.prototype.initialize = function (options) {
                  var html;
                  IonRangeSliderView.__super__.initialize.call(this, options);
                  this.listenTo(this.model, 'change', this.render);
                  this.$el.empty();
                  html = this.template(this.model.attributes);
                  this.$el.html(html);
                  this.callbackWrapper = null;
                  if (this.model.callback_policy === 'continuous') {
                      this.callbackWrapper = function () {
                          var ref;
                          return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                      };
                  }
                  if (this.model.callback_policy === 'throttle' && this.model.callback) {
                      this.callbackWrapper = _.throttle(function () {
                          var ref;
                          return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                      }, this.model.callback_throttle);
                  }
                  return this.render();
              };
              IonRangeSliderView.prototype.render = function () {
                  var disable, from, grid, input, max, min, opts, range, slider, step, to;
                  IonRangeSliderView.__super__.render.call(this);
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
                      onChange: this.slide,
                      onFinish: this.slidestop
                  };
                  input = this.$el.find('.slider')[0];
                  slider = jQuery(input).ionRangeSlider(opts);
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
          })(input_widget_1.InputWidgetView);
          exports.IonRangeSlider = (function (superClass) {
              extend(IonRangeSlider, superClass);
              function IonRangeSlider() {
                  return IonRangeSlider.__super__.constructor.apply(this, arguments);
              }
              IonRangeSlider.prototype.default_view = exports.IonRangeSliderView;
              IonRangeSlider.prototype.type = "IonRangeSlider";
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
          })(input_widget_1.InputWidget);
          
          }, {"./extensions_ion_range_slider_template": "30413f2dce342ed9dc670a24158e40d4f649bfdcd172091c50c14e988032820b"}],
          "custom/bk_script_cdc746781670473d8d27c9a1c06b67f6.latex_label": [function(require, module, exports) {
          "use strict";
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var label_1 = require("models/annotations/label");
          exports.LatexLabelView = (function (superClass) {
              extend(LatexLabelView, superClass);
              function LatexLabelView() {
                  return LatexLabelView.__super__.constructor.apply(this, arguments);
              }
              LatexLabelView.prototype.render = function () {
                  var angle, ctx, latex, panel_offset, sx, sy, vx, vy;
                  ctx = this.plot_view.canvas_view.ctx;
                  switch (this.model.angle_units) {
                      case "rad":
                          angle = -1 * this.model.angle;
                          break;
                      case "deg":
                          angle = -1 * this.model.angle * Math.PI / 180.0;
                  }
                  if (this.model.x_units === "data") {
                      vx = this.xmapper.map_to_target(this.model.x);
                  }
                  else {
                      vx = this.model.x;
                  }
                  sx = this.canvas.vx_to_sx(vx);
                  if (this.model.y_units === "data") {
                      vy = this.ymapper.map_to_target(this.model.y);
                  }
                  else {
                      vy = this.model.y;
                  }
                  sy = this.canvas.vy_to_sy(vy);
                  if (this.model.panel != null) {
                      panel_offset = this._get_panel_offset();
                      sx += panel_offset.x;
                      sy += panel_offset.y;
                  }
                  latex = katex.renderToString(this.model.text, {
                      displayMode: true
                  });
                  return this._css_text(ctx, latex, sx + this.model.x_offset, sy - this.model.y_offset, angle);
              };
              return LatexLabelView;
          })(label_1.LabelView);
          exports.LatexLabel = (function (superClass) {
              extend(LatexLabel, superClass);
              function LatexLabel() {
                  return LatexLabel.__super__.constructor.apply(this, arguments);
              }
              LatexLabel.prototype.type = 'LatexLabel';
              LatexLabel.prototype.default_view = exports.LatexLabelView;
              return LatexLabel;
          })(label_1.Label);
          
          }, {}],
          "custom/bk_script_e25b70cdc6dd461b944620285e491896.draw_tool": [function(require, module, exports) {
          "use strict";
          var extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var p = require("core/properties");
          var gesture_tool_1 = require("models/tools/gestures/gesture_tool");
          exports.DrawToolView = (function (superClass) {
              extend(DrawToolView, superClass);
              function DrawToolView() {
                  return DrawToolView.__super__.constructor.apply(this, arguments);
              }
              DrawToolView.prototype._pan_start = function (e) {
                  return this.model.source.data = {
                      x: [],
                      y: []
                  };
              };
              DrawToolView.prototype._pan = function (e) {
                  var canvas, frame, vx, vy, x, y;
                  frame = this.plot_model.frame;
                  canvas = this.plot_view.canvas;
                  vx = canvas.sx_to_vx(e.bokeh.sx);
                  vy = canvas.sy_to_vy(e.bokeh.sy);
                  if (!frame.contains(vx, vy)) {
                      return null;
                  }
                  x = frame.x_mappers['default'].map_from_target(vx);
                  y = frame.y_mappers['default'].map_from_target(vy);
                  this.model.source.data.x.push(x);
                  this.model.source.data.y.push(y);
                  return this.model.source.trigger('change');
              };
              DrawToolView.prototype._pan_end = function (e) {
                  return null;
              };
              return DrawToolView;
          })(gesture_tool_1.GestureToolView);
          exports.DrawTool = (function (superClass) {
              extend(DrawTool, superClass);
              function DrawTool() {
                  return DrawTool.__super__.constructor.apply(this, arguments);
              }
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
          })(gesture_tool_1.GestureTool);
          
          }, {}],
          "custom/bk_script_e57c0ccd29f44302a5d47bd45834a2b6.surface3d": [function(require, module, exports) {
          "use strict";
          var OPTIONS, bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; }, extend = function (child, parent) { for (var key in parent) {
              if (hasProp.call(parent, key))
                  child[key] = parent[key];
          } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
          var $ = require("jquery");
          var p = require("core/properties");
          var layout_dom_1 = require("models/layouts/layout_dom");
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
          exports.Surface3dView = (function (superClass) {
              extend(Surface3dView, superClass);
              function Surface3dView() {
                  this._init = bind(this._init, this);
                  return Surface3dView.__super__.constructor.apply(this, arguments);
              }
              Surface3dView.prototype.initialize = function (options) {
                  var url;
                  Surface3dView.__super__.initialize.call(this, options);
                  url = "https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js";
                  return $.getScript(url).done(this._init);
              };
              Surface3dView.prototype._init = function () {
                  this._graph = new vis.Graph3d(this.$el[0], this.get_data(), OPTIONS);
                  return this.listenTo(this.model.data_source, 'change', (function (_this) {
                      return function () {
                          return _this._graph.setData(_this.get_data());
                      };
                  })(this));
              };
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
          })(layout_dom_1.LayoutDOMView);
          exports.Surface3d = (function (superClass) {
              extend(Surface3d, superClass);
              function Surface3d() {
                  return Surface3d.__super__.constructor.apply(this, arguments);
              }
              Surface3d.prototype.default_view = exports.Surface3dView;
              Surface3d.prototype.type = "Surface3d";
              Surface3d.define({
                  x: [p.String],
                  y: [p.String],
                  z: [p.String],
                  color: [p.String],
                  data_source: [p.Instance]
              });
              return Surface3d;
          })(layout_dom_1.LayoutDOM);
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"2793d0f2-4a71-4718-a8d0-70535adefeb7":{"roots":{"references":[{"attributes":{"children":[{"id":"6921accf-49b2-4de1-a70d-ffa99d117911","type":"WidgetBox"},{"id":"6ec71005-1681-48b2-88d6-5f060819bbfa","type":"Custom"}]},"id":"af76a04a-be7c-4b01-96de-9b20f9e04659","type":"Column"},{"attributes":{"callback":null,"end":10,"title":"value","value":0},"id":"9f52e0a3-cefb-4e28-8bfc-dd3fa78fd2ad","type":"Slider"},{"attributes":{"slider":{"id":"9f52e0a3-cefb-4e28-8bfc-dd3fa78fd2ad","type":"Slider"},"text":"Special Slider Display"},"id":"6ec71005-1681-48b2-88d6-5f060819bbfa","type":"Custom"},{"attributes":{"children":[{"id":"9f52e0a3-cefb-4e28-8bfc-dd3fa78fd2ad","type":"Slider"}]},"id":"6921accf-49b2-4de1-a70d-ffa99d117911","type":"WidgetBox"}],"root_ids":["af76a04a-be7c-4b01-96de-9b20f9e04659"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"2793d0f2-4a71-4718-a8d0-70535adefeb7","elementid":"fc012f7c-3ee9-46d5-a09e-0c6dbbfc491d","modelid":"af76a04a-be7c-4b01-96de-9b20f9e04659"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
