document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("d2e53fc8-0f00-4e57-ba75-b91813c3233d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd2e53fc8-0f00-4e57-ba75-b91813c3233d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.1.4/js/ion.rangeSlider.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          
          (function outer(modules, cache, entry) {
            if (typeof Bokeh !== "undefined") {
              var _ = Bokeh._;
          
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                  var exports = Bokeh.require(entry[i]);
          
                  if (_.isObject(exports.models)) {
                    Bokeh.Models.register_locations(exports.models);
                  }
          
                  _.extend(Bokeh, _.omit(exports, "models"));
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })
          
          ({
            "custom/main": [function(require, module, exports) {
              module.exports = {
                models: {
                  "Custom": require("custom/fake.custom"),
          "DrawTool": require("custom/fake.draw_tool"),
          "IonRangeSlider": require("custom/fake.ion_range_slider"),
          "LatexLabel": require("custom/fake.latex_label"),
          "MyFormatter": require("custom/fake.my_formatter"),
          "Surface3d": require("custom/fake.surface3d")
                }
              };
            }, {}],
            "6ef2a846ec8c9fb9b0078caa3403db37c8f786dfe0dac2af5423824063a82891": [function(require, module, exports) {
          module.exports = function(__obj) {
            if (!__obj) __obj = {};
            var __out = [];
            var __capture = function(callback) {
              var out = __out, result;
              __out = [];
              callback.call(this);
              result = __out.join('');
              __out = out;
              return __safe(result);
            };
            var __sanitize = function(value) {
              if (value && value.ecoSafe) {
                return value;
              } else if (typeof value !== 'undefined' && value != null) {
                return __escape(value);
              } else {
                return '';
              }
            };
            var __safe = function(value) {
              if (value && value.ecoSafe) {
                return value;
              } else {
                if (!(typeof value !== 'undefined' && value != null)) value = '';
                var result = new String(value);
                result.ecoSafe = true;
                return result;
              }
            };
            var __escape = function(value) {
              return ('' + value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
            };
            (function() {
              (function() {
                __out.push('<div class="bk-slider-parent">\n  ');
                if (this.title != null) {
                  __out.push('\n    ');
                  if (this.title.length !== 0) {
                    __out.push('\n      <label for="');
                    __out.push(__sanitize(this.id));
                    __out.push('"> ');
                    __out.push(__sanitize(this.title));
                    __out.push(': </label>\n    ');
                  }
                  __out.push('\n    <input type="text" id="');
                  __out.push(__sanitize(this.id));
                  __out.push('" readonly>\n  ');
                }
                __out.push('\n  <div class="bk-slider-horizontal">\n    <input type="text" class="slider" id="');
                __out.push(__sanitize(this.id));
                __out.push('"></div>\n  </div>\n</div>\n');
              }).call(this);
            }).call(__obj);
            return __out.join('');
          };
          }, {}],
          "custom/fake.custom": [function(require, module, exports) {
          var $, Custom, CustomView, LayoutDOM, _, p,
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          _ = require("underscore");
          
          $ = require("jquery");
          
          p = require("core/properties");
          
          LayoutDOM = require("models/layouts/layout_dom");
          
          CustomView = (function(superClass) {
            extend(CustomView, superClass);
          
            function CustomView() {
              return CustomView.__super__.constructor.apply(this, arguments);
            }
          
            CustomView.prototype.initialize = function(options) {
              CustomView.__super__.initialize.call(this, options);
              this.render();
              return this.listenTo(this.model.slider, 'change', (function(_this) {
                return function() {
                  return _this.render();
                };
              })(this));
            };
          
            CustomView.prototype.render = function() {
              this.$el.html("<h1>" + this.model.text + ": " + this.model.slider.value + "</h1>");
              return this.$('h1').css({
                'color': '#686d8e',
                'background-color': '#2a3153'
              });
            };
          
            return CustomView;
          
          })(LayoutDOM.View);
          
          Custom = (function(superClass) {
            extend(Custom, superClass);
          
            function Custom() {
              return Custom.__super__.constructor.apply(this, arguments);
            }
          
            Custom.prototype.default_view = CustomView;
          
            Custom.prototype.type = "Custom";
          
            Custom.define({
              text: [p.String],
              slider: [p.Any]
            });
          
            return Custom;
          
          })(LayoutDOM.Model);
          
          module.exports = {
            Model: Custom,
            View: CustomView
          };
          
          }, {}],
          "custom/fake.draw_tool": [function(require, module, exports) {
          var DrawTool, DrawToolView, GestureTool, p,
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          p = require("core/properties");
          
          GestureTool = require("models/tools/gestures/gesture_tool");
          
          DrawToolView = (function(superClass) {
            extend(DrawToolView, superClass);
          
            function DrawToolView() {
              return DrawToolView.__super__.constructor.apply(this, arguments);
            }
          
            DrawToolView.prototype._pan_start = function(e) {
              return this.model.source.data = {
                x: [],
                y: []
              };
            };
          
            DrawToolView.prototype._pan = function(e) {
              var canvas, frame, vx, vy, x, y;
              frame = this.plot_model.frame;
              canvas = this.plot_view.canvas;
              vx = canvas.sx_to_vx(e.bokeh.sx);
              vy = canvas.sy_to_vy(e.bokeh.sy);
              if (!frame.contains(vx, vy)) {
                return null;
              }
              x = frame.x_mappers["default"].map_from_target(vx);
              y = frame.y_mappers["default"].map_from_target(vy);
              this.model.source.data.x.push(x);
              this.model.source.data.y.push(y);
              return this.model.source.trigger('change');
            };
          
            DrawToolView.prototype._pan_end = function(e) {
              return null;
            };
          
            return DrawToolView;
          
          })(GestureTool.View);
          
          DrawTool = (function(superClass) {
            extend(DrawTool, superClass);
          
            function DrawTool() {
              return DrawTool.__super__.constructor.apply(this, arguments);
            }
          
            DrawTool.prototype.default_view = DrawToolView;
          
            DrawTool.prototype.type = "DrawTool";
          
            DrawTool.prototype.tool_name = "Drag Span";
          
            DrawTool.prototype.icon = "bk-tool-icon-lasso-select";
          
            DrawTool.prototype.event_type = "pan";
          
            DrawTool.prototype.default_order = 12;
          
            DrawTool.define({
              source: [p.Instance]
            });
          
            return DrawTool;
          
          })(GestureTool.Model);
          
          module.exports = {
            Model: DrawTool,
            View: DrawToolView
          };
          
          }, {}],
          "custom/fake.ion_range_slider": [function(require, module, exports) {
          var $, InputWidget, IonRangeSlider, IonRangeSliderView, _, ionslidertemplate, p,
            bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          _ = require("underscore");
          
          $ = require("jquery");
          
          p = require("core/properties");
          
          InputWidget = require("models/widgets/input_widget");
          
          ionslidertemplate = require("./extensions_ion_range_slider_template");
          
          IonRangeSliderView = (function(superClass) {
            extend(IonRangeSliderView, superClass);
          
            function IonRangeSliderView() {
              this.slide = bind(this.slide, this);
              this.slidestop = bind(this.slidestop, this);
              return IonRangeSliderView.__super__.constructor.apply(this, arguments);
            }
          
            IonRangeSliderView.prototype.tagName = "div";
          
            IonRangeSliderView.prototype.template = ionslidertemplate;
          
            IonRangeSliderView.prototype.initialize = function(options) {
              var html;
              IonRangeSliderView.__super__.initialize.call(this, options);
              this.listenTo(this.model, 'change', this.render);
              this.$el.empty();
              html = this.template(this.model.attributes);
              this.$el.html(html);
              this.callbackWrapper = null;
              if (this.model.callback_policy === 'continuous') {
                this.callbackWrapper = function() {
                  var ref;
                  return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                };
              }
              if (this.model.callback_policy === 'throttle' && this.model.callback) {
                this.callbackWrapper = _.throttle(function() {
                  var ref;
                  return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
                }, this.model.callback_throttle);
              }
              return this.render();
            };
          
            IonRangeSliderView.prototype.render = function() {
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
              this.$("#" + this.model.id).val(range.join(' - '));
              this.$el.find('.bk-slider-parent').height(this.model.height);
              return this;
            };
          
            IonRangeSliderView.prototype.slidestop = function(data) {
              var ref;
              if (this.model.callback_policy === 'mouseup' || this.model.callback_policy === 'throttle') {
                return (ref = this.model.callback) != null ? ref.execute(this.model) : void 0;
              }
            };
          
            IonRangeSliderView.prototype.slide = function(data) {
              var range, value;
              range = [data.from, data.to];
              value = range.join(' - ');
              this.$("#" + this.model.id).val(value);
              this.model.range = range;
              if (this.callbackWrapper) {
                return this.callbackWrapper();
              }
            };
          
            return IonRangeSliderView;
          
          })(InputWidget.View);
          
          IonRangeSlider = (function(superClass) {
            extend(IonRangeSlider, superClass);
          
            function IonRangeSlider() {
              return IonRangeSlider.__super__.constructor.apply(this, arguments);
            }
          
            IonRangeSlider.prototype.default_view = IonRangeSliderView;
          
            IonRangeSlider.prototype.type = "IonRangeSlider";
          
            IonRangeSlider.define({
              range: [p.Any],
              start: [p.Number, 0],
              end: [p.Number, 1],
              step: [p.Number, 0.1],
              grid: [p.Bool, true],
              orientation: [p.Orientation, "horizontal"],
              callback_throttle: [p.Number, 200],
              callback_policy: [p.String, "throttle"]
            });
          
            return IonRangeSlider;
          
          })(InputWidget.Model);
          
          module.exports = {
            Model: IonRangeSlider,
            View: IonRangeSliderView
          };
          
          }, {"./extensions_ion_range_slider_template": "6ef2a846ec8c9fb9b0078caa3403db37c8f786dfe0dac2af5423824063a82891"}],
          "custom/fake.latex_label": [function(require, module, exports) {
          var Label, LatexLabel, LatexLabelView,
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          Label = require("models/annotations/label");
          
          LatexLabelView = (function(superClass) {
            extend(LatexLabelView, superClass);
          
            function LatexLabelView() {
              return LatexLabelView.__super__.constructor.apply(this, arguments);
            }
          
            LatexLabelView.prototype.render = function() {
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
              } else {
                vx = this.model.x;
              }
              sx = this.canvas.vx_to_sx(vx);
              if (this.model.y_units === "data") {
                vy = this.ymapper.map_to_target(this.model.y);
              } else {
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
          
          })(Label.View);
          
          LatexLabel = (function(superClass) {
            extend(LatexLabel, superClass);
          
            function LatexLabel() {
              return LatexLabel.__super__.constructor.apply(this, arguments);
            }
          
            LatexLabel.prototype.type = 'LatexLabel';
          
            LatexLabel.prototype.default_view = LatexLabelView;
          
            return LatexLabel;
          
          })(Label.Model);
          
          module.exports = {
            Model: LatexLabel,
            View: LatexLabelView
          };
          
          }, {}],
          "custom/fake.my_formatter": [function(require, module, exports) {
          var MyFormatter, TickFormatter,
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          TickFormatter = require("models/formatters/tick_formatter");
          
          MyFormatter = (function(superClass) {
            extend(MyFormatter, superClass);
          
            function MyFormatter() {
              return MyFormatter.__super__.constructor.apply(this, arguments);
            }
          
            MyFormatter.prototype.type = "MyFormatter";
          
            MyFormatter.prototype.doFormat = function(ticks) {
              var formatted, i, j, ref;
              formatted = ["" + ticks[0]];
              for (i = j = 1, ref = ticks.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
                formatted.push("+" + ((ticks[i] - ticks[0]).toPrecision(2)));
              }
              return formatted;
            };
          
            return MyFormatter;
          
          })(TickFormatter.Model);
          
          module.exports = {
            Model: MyFormatter
          };
          
          }, {}],
          "custom/fake.surface3d": [function(require, module, exports) {
          var $, LayoutDOM, OPTIONS, Surface3d, Surface3dView, _, p,
            bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
            extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
            hasProp = {}.hasOwnProperty;
          
          _ = require("underscore");
          
          $ = require("jquery");
          
          p = require("core/properties");
          
          LayoutDOM = require("models/layouts/layout_dom");
          
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
          
          Surface3dView = (function(superClass) {
            extend(Surface3dView, superClass);
          
            function Surface3dView() {
              this._init = bind(this._init, this);
              return Surface3dView.__super__.constructor.apply(this, arguments);
            }
          
            Surface3dView.prototype.initialize = function(options) {
              var url;
              Surface3dView.__super__.initialize.call(this, options);
              url = "https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js";
              return $.getScript(url).done(this._init);
            };
          
            Surface3dView.prototype._init = function() {
              this._graph = new vis.Graph3d(this.$el[0], this.get_data(), OPTIONS);
              return this.listenTo(this.model.data_source, 'change', (function(_this) {
                return function() {
                  return _this._graph.setData(_this.get_data());
                };
              })(this));
            };
          
            Surface3dView.prototype.get_data = function() {
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
          
          })(LayoutDOM.View);
          
          Surface3d = (function(superClass) {
            extend(Surface3d, superClass);
          
            function Surface3d() {
              return Surface3d.__super__.constructor.apply(this, arguments);
            }
          
            Surface3d.prototype.default_view = Surface3dView;
          
            Surface3d.prototype.type = "Surface3d";
          
            Surface3d.define({
              x: [p.String],
              y: [p.String],
              z: [p.String],
              color: [p.String],
              data_source: [p.Instance]
            });
          
            return Surface3d;
          
          })(LayoutDOM.Model);
          
          module.exports = {
            Model: Surface3d,
            View: Surface3dView
          };
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"084d33c7-63b7-434a-be58-7e001c7e33a3":{"roots":{"references":[{"attributes":{"formatter":{"id":"be738fff-3ac9-4906-ac86-43ad70ac2ca1","type":"BasicTickFormatter"},"plot":{"id":"25c1548a-acbe-43d4-9eee-16224fec0c63","subtype":"Figure","type":"Plot"},"ticker":{"id":"ffa00625-e6d7-4965-ad01-4364171d130b","type":"BasicTicker"}},"id":"95845507-a1e7-48e1-bf96-1ae2fb120c53","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6f52216b-6127-4b28-90b9-87497d052ced","type":"ColumnDataSource"},"glyph":{"id":"4b08109f-f46d-45a0-a352-a3de9f3bce01","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"27042b44-04ef-46f5-884a-77e4f7d26db3","type":"Line"},"selection_glyph":null},"id":"012b4719-a46c-4298-8c7c-5d36c55235b1","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"line_width":{"value":5},"x":{"field":"x"},"y":{"field":"ym"}},"id":"4b08109f-f46d-45a0-a352-a3de9f3bce01","type":"Line"},{"attributes":{"callback":null},"id":"1434956b-2536-4233-a598-0815ca738105","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"0405df02-30c0-4ce3-a97d-6166476d0ea6","type":"Circle"},{"attributes":{},"id":"ffa00625-e6d7-4965-ad01-4364171d130b","type":"BasicTicker"},{"attributes":{"plot":{"id":"25c1548a-acbe-43d4-9eee-16224fec0c63","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f864e79-0bae-4924-b5a0-56794d184c38","type":"BasicTicker"}},"id":"030d1a1f-0d01-4ea6-a9dc-231361203af3","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"25c1548a-acbe-43d4-9eee-16224fec0c63","subtype":"Figure","type":"Plot"},"ticker":{"id":"ffa00625-e6d7-4965-ad01-4364171d130b","type":"BasicTicker"}},"id":"71a409b0-5b7d-434b-8ae3-cb65d68683e2","type":"Grid"},{"attributes":{"data_source":{"id":"50fcd57f-7bb4-4d33-82ec-1ee35b8b211f","type":"ColumnDataSource"},"glyph":{"id":"77cee5bf-d086-4f4f-9eb5-7a9e1915f9ec","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0405df02-30c0-4ce3-a97d-6166476d0ea6","type":"Circle"},"selection_glyph":null},"id":"cc5575e9-b002-4cc5-b327-621bf7705762","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"color"},"line_alpha":{"value":0.4},"line_color":{"field":"color"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"77cee5bf-d086-4f4f-9eb5-7a9e1915f9ec","type":"Circle"},{"attributes":{"plot":null,"text":"Select Here"},"id":"9eeee1c8-c05c-4f76-ab89-f457da015853","type":"Title"},{"attributes":{},"id":"3367d614-d9fe-4983-bbde-afdafbaef019","type":"ToolEvents"},{"attributes":{"formatter":{"id":"4ac9217d-d19f-4d98-b196-0338363eb72c","type":"BasicTickFormatter"},"plot":{"id":"25c1548a-acbe-43d4-9eee-16224fec0c63","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f864e79-0bae-4924-b5a0-56794d184c38","type":"BasicTicker"}},"id":"dd3466ea-d071-4afb-90f8-ab5380334eea","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"x":{"field":"x"},"y":{"field":"ym"}},"id":"27042b44-04ef-46f5-884a-77e4f7d26db3","type":"Line"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"6cf64f86-b91d-4bf8-bfbd-e919a3f0aca2","type":"PolyAnnotation"},{"attributes":{},"id":"0f864e79-0bae-4924-b5a0-56794d184c38","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7766fa6a-3424-432c-987d-610efd366c7e","type":"LassoSelectTool"}]},"id":"017431c8-235d-4778-ae72-b641f7f3d237","type":"Toolbar"},{"attributes":{"callback":{"id":"ff781097-d0bb-4429-aefa-61abe12e5786","type":"CustomJS"},"column_names":["color","y","x"],"data":{"color":["navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy"],"x":[0.9860998323909176,0.8014324412770782,0.16797125311841865,0.273775394214529,0.2307232485581957,0.3316382168051839,0.16559265602354944,0.5329554038684571,0.8412301223520788,0.46742165446742234,0.6016219457414783,0.10526589808222053,0.4301667189690038,0.9151831051600409,0.40127133323724484,0.9924814941951519,0.6663196435279236,0.724334863566122,0.4499975848971449,0.3520561829479202,0.02530091945625923,0.7833789299024427,0.32277324527523166,0.9620868393810144,0.7855411921615972,0.6470710548428152,0.49689909955982015,0.16540916311584242,0.08834745579852943,0.3714346750057159,0.3353742956659921,0.8612525777178275,0.6166026805821782,0.7945391689136733,0.8990129716785852,0.2637025099045295,0.4923452909310517,0.02665604381121356,0.3508168385910848,0.38543068455805685,0.7412914636497228,0.03896503686522934,0.012551265819349289,0.5811872224921231,0.7065617032847207,0.6605061606084724,0.11401576074827058,0.2773023266903373,0.8546118371151578,0.8469923654466998,0.40252472551823537,0.48736848592461923,0.5985336949498229,0.34399882462782005,0.14162283085907945,0.14917469729586474,0.09218387517945048,0.4568527084111772,0.4530814040496519,0.8384351153437573,0.36228439152964975,0.5903611302562765,0.5844161037892408,0.12995719597477895,0.2620500013111776,0.5707568658687399,0.7745705893659314,0.3580079100867112,0.5369355001070061,0.5004851858695732,0.5387002779566497,0.6458656813144759,0.11392553831952312,0.10591574529066772,0.25669921176602273,0.6991086022319261,0.8261700988133824,0.2662267818030256,0.9485388039988863,0.9106720302848259,0.6846554675371344,0.2553041351585561,0.27887936717756645,0.5994556159516998,0.674686075996578,0.5293648970356588,0.24420091775458397,0.12826840327835287,0.7890038373708681,0.5399538124290092,0.6154942973003871,0.4630228352615178,0.36469264920408273,0.9197979518581502,0.00853844379096702,0.09467307805292169,0.7873428930779526,0.7269048158525021,0.9367537605042217,0.48366982144286996,0.8548240172449662,0.6265150680261413,0.6399063007573752,0.695894302291021,0.47069634202600563,0.03233852390610603,0.8760263566502271,0.7329973383584563,0.22798582257822786,0.40992291114895374,0.2640242619822658,0.3583335183923654,0.989604506408365,0.05710786495740383,0.3091183661600968,0.6405640097448652,0.24870297082166892,0.21421108729423877,0.6834536996041426,0.6968517178866536,0.46301443719743873,0.6628079725461211,0.6078918700964976,0.829386068370559,0.034771806341172606,0.9610126622470769,0.6230853649217457,0.2954481720822767,0.10672025869238877,0.946488921839297,0.5892792554029436,0.14821193352929918,0.6183731559126675,0.873711963431427,0.38947651639817427,0.6217033886446419,0.24817805511840563,0.44985816100333376,0.94773988097528,0.806899745450645,0.22265192205575146,0.2291213251705566,0.8846001367210631,0.6889065504690244,0.8067870571869571,0.40588342736810246,0.6976030782362879,0.5128661139958668,0.5201828221333822,0.9747169234014526,0.49268240800892704,0.45399186793841384,0.21460363081063494,0.9720198610331117,0.3072472101430699,0.5929594821479298,0.65305843528099,0.5229244049398418,0.07228620700085153,0.5456144227657619,0.5594819867577462,0.20708849503903415,0.48196526961384223,0.9973008168136414,0.11616448586605388,0.7474631235940892,0.43872051120698996,0.2884713825838052,0.2604206248073381,0.16784989894781788,0.8813781352652456,0.6482042779781836,0.08320515678215934,0.39946846139859804,0.20037787257249828,0.20342404649959556,0.9874880244468665,0.4875923621496596,0.22489847251930783,0.2456728815585374,0.46208127458996207,0.6746654133826866,0.4782903226032583,0.03263070020839132,0.6858310861817073,0.6439057397120626,0.11437417805996841,0.4470324735987401,0.1194358706733245,0.44206724802206887,0.07296856078273284,0.1848859799358925,0.6710499387611664,0.5264105126102843,0.4970108199185058,0.3903239158251124,0.15111082630978945,0.46811497994190276,0.9113841212560871,0.4407811111482889,0.8893514043599686,0.405115172197714,0.1292409668146407,0.47299408973400026,0.996984443875698,0.8312811326719348,0.9894440251840119,0.7724831715094932,0.9088667849177776,0.003159081946355946,0.7116208762482298,0.7229060770507867,0.3760135654749168,0.8663022527240615,0.5884177679200298,0.40478390669318653,0.5280439936843173,0.053570187443006234,0.11337249591629917,0.18263661705494905,0.7351083338243579,0.8355487293277837,0.9519212001070095,0.1944330161377409,0.33091055254434143,0.7588226923991513,0.15732507577784471,0.9776128830084613,0.6225107674867433,0.537149655510964,0.8383349880742973,0.22285695180034226,0.39290656889776765,0.8445187620541825,0.5900500525098659,0.35371289698506647,0.22139930766346672,0.3684959310032413,0.03626702979555896,0.5138255988152982,0.8640816036035585,0.2569547720519064,0.5818730125418335,0.19827352523796604,0.18261462422935404,0.27444518022283215,0.9216210103976542,0.7138140050811004,0.18973584612533023,0.19823504708748407,0.93825578946366,0.36715120888275765,0.2580374031697754,0.4829196251721667,0.41191160121331916,0.1348409634330423,0.09550587355776718,0.21075033103108343,0.41907063022776425,0.3876397273627189,0.4122088098564948,0.5283097439292823,0.0808030265587526,0.029422852853243975,0.9925533914795732,0.00869424576474409,0.5051735941740573,0.6649075513372789,0.29718488603703297,0.945029963649141,0.27127660684512434,0.09975637090079503,0.9459504586391804,0.4441384611161433,0.2351876476751823,0.2270205749098606,0.7296286182624371,0.5561562235828581,0.058800808323520304,0.7022134813852948,0.22419138421855467,0.15543044750809365,0.12886485140458437,0.8839221675792049,0.4727116968618129,0.675251182825507,0.739567388567755,0.04499256768665816,0.9603334670898499,0.21023234791987921,0.7457344631602969,0.8993233241924117,0.20234047920850518,0.5523691150729332,0.3317405128041112,0.3174806404806415,0.7993071651476373,0.5946514153453794,0.5551521084944363,0.6620984018140176,0.8083500191580705,0.25064766591557097,0.7553553519521312,0.6154042718150095,0.9686676892100148,0.6514684477940887,0.5772863992443401,0.44986559787006764,0.6324640765341002,0.010150384299407733,0.9828042010058384,0.07542163255472145,0.8241797118737986,0.803379417424147,0.694838739131087,0.4518938630046524,0.4640639858774943,0.47344481949029127,0.9256160491713218,0.5664573197420396,0.8162272451973706,0.7713647666670448,0.658435297569859,0.7168890802909413,0.7150758563484415,0.9318054387012255,0.2765383442205236,0.4131047348369683,0.5342911936495628,0.6489496532593242,0.9509648051001833,0.3833713280321842,0.33837183353284206,0.11025821123914126,0.850593240840647,0.8627927103123723,0.18170653077525112,0.7892977245152393,0.49564181760312687,0.7703529577373757,0.3762753902366296,0.01618369357359295,0.7771737012835376,0.0815173841215644,0.6089931719508547,0.816805517482738,0.09024173484740683,0.643803772295132,0.4096730212398547,0.476223373632635,0.7016008402916653,0.9890390442231528,0.5754413360772523,0.7717252417049527,0.4037144962175585,0.5440833813440311,0.9791097274382433,0.1084620106962505,0.2353027969593846,0.5023589409257492,0.3987614631594195,0.011339061691258978,0.9723756072928752,0.5515474090213034,0.6894991550176955,0.658911201021926,0.5970354827840986,0.2440248330671051,0.8143889859955764,0.7509318053204562,0.5022802387237251,0.7591076512150404,0.371217721960437,0.8239984720290034,0.8174793858882685,0.4104336932691893,0.9453210237033176,0.9897486242947148,0.3757036167228359,0.7074759736109685,0.9354985994091622,0.1501422605292988,0.11974276069186818,0.3911577090686118,0.21371257900803386,0.11848032734773484,0.8226912659311687,0.7063450724602583,0.4650909108784259,0.6170279635368295,0.9137773437549948,0.635238139542573,0.6894413317609481,0.8282593781773566,0.6861948345908279,0.9036046988156696,0.06996228422172834,0.024026153425012686,0.90988801754661,0.7022591138037554,0.10671476074944153,0.9046650527063099,0.6695844564485253,0.918259353511027,0.07849761607133598,0.1542237477877988,0.6537352425392509,0.6478868786807683,0.6863882231540246,0.0035783491919665344,0.5308650981408726,0.30950713332233226,0.4167724911286824,0.9043556710691587,0.1570854442695807,0.322171177179964,0.3303231007354944,0.36386579719857803,0.02900951505245042,0.6384189461198042,0.8084134125086562,0.12963733185816406,0.48210497116087325,0.04832149246501982,0.5541311929113996,0.4588977594380902,0.3515810854768556,0.22078959341655036,0.47363555787719747,0.9003199035257794,0.2284497767663497,0.21535740042950968,0.4320892358593583,0.6722639129278054,0.7527547384270679,0.8998685577173058,0.07899522187957597,0.7491305356206075,0.9578721507007705,0.1853663055586503,0.8971760196685532,0.003365071493911076,0.30531674662618136,0.06936475002408093,0.3028973653923791,0.455405924466328,0.03410173577757036,0.09235103881412843,0.8357051019967536,0.08698350679676392,0.25526138496991846,0.10490977444622296,0.9452611784105791,0.5976748626389179,0.1505280196469747,0.8887795940540205,0.6656664772237414,0.884757266617328,0.16282801946740044,0.9117186128068488,0.8543682911654454,0.8636378805694571,0.7169615162316106,0.7832131371343112,0.5719594252327751,0.1314653732830865,0.6948281287438844,0.97426119923489,0.02069553998001894,0.07586649544269553,0.718590847890813,0.2681112401271196,0.9914995885399973,0.3728142454640808,0.07850842553880344,0.28080740633396883,0.4343378298730821,0.7402348379444066,0.7038054963604802,0.5574895734252646,0.1708141800020816,0.8712887572857819,0.5518752741751962,0.37329354841873696,0.745255237280334,0.5011597428551734,0.4557744660157186,0.520205395980218,0.1616576370248467,0.7877942003960696,0.5579110738793136,0.7989240330239538,0.2966023575132477,0.29591110464373827,0.34867971838903977,0.7430138906186952,0.08612888123452955,0.42434170670177485,0.7280072373316938,0.3255701387957257],"y":[0.862500351879687,0.7003862838361821,0.2707857093292385,0.5240450809253647,0.9064361696755215,0.3838104610013173,0.38030174132074224,0.7092000983731727,0.49928470259509605,0.16121664000968638,0.12319950888612652,0.5906313182009852,0.5511495012806351,0.9426512991057208,0.07423727689534987,0.2656062477924477,0.4715553041188866,0.6598905070783406,0.42275357102557587,0.09979037422041348,0.26635345931052345,0.1547365169669035,0.23435812533671263,0.4073787135389517,0.924698157662789,0.051925244678501015,0.978528610666535,0.38817548029151583,0.7342255452732837,0.13094390903515163,0.8883891442708102,0.45168836857874894,0.46770496828808794,0.47858444178964643,0.6570274503003664,0.8954848420153907,0.42333855039157464,0.16417305132293813,0.24222158268481797,0.6270129184286318,0.38668636822747193,0.8573337248742914,0.5602189440373567,0.6533185307496103,0.1694507451905123,0.08293233209618855,0.8087981993290209,0.643793138342553,0.6947063405126424,0.15358927739053785,0.3702686581713588,0.6884648247678609,0.2914226182117191,0.5598277654826576,0.12106538822025315,0.2476374943824411,0.7085523431539351,0.33353787883240504,0.2573925506280792,0.4890691526016746,0.5086574564916667,0.06740584114640213,0.6149355369518001,0.9014661953994816,0.276397968791803,0.4182505801216687,0.7791108487725783,0.07159249056766259,0.3110023566085729,0.16514289821305494,0.6711131200383056,0.44432170196142484,0.05547174176142822,0.8753415174695457,0.3942996392225451,0.5815328919851027,0.34863365761316467,0.7938907718324312,0.4940640795016994,0.09747253742230833,0.10095031039113789,0.5591077432036128,0.013222583504811647,0.6972049987516818,0.5268102237633401,0.8578240026730986,0.18338040407271594,0.44026276651239094,0.4392464710317566,0.15289639176193515,0.14470091355455927,0.65923716606372,0.08669367164054298,0.02298750230110136,0.740031619074441,0.7456842665546338,0.6959353183354123,0.20134504872863268,0.10450478759691928,0.30044930716450624,0.5225909801311918,0.5545690765911703,0.4345385595645216,0.012550734976616074,0.36715308186450757,0.9022397562871292,0.30170661173797764,0.03869118668058269,0.3923399774758122,0.9838318197030445,0.968895292044805,0.24177776143098573,0.11158048870420367,0.30397378234647643,0.973636013223462,0.47694722195519645,0.8735501789534563,0.99938063720405,0.3064779626860543,0.6467069212729821,0.31435614293556835,0.06204762013586507,0.3097728612458137,0.9685931189048905,0.12892367679115524,0.6977756782132728,0.45568831713228775,0.46380383804675385,0.6168881729910147,0.7347749821948446,0.04877578709587915,0.9677420736372125,0.6008633958611073,0.3417502087028855,0.17296975980166684,0.07450970931823331,0.44579008536214615,0.8850817748988571,0.3092881405235801,0.26398820185765837,0.2566395484746885,0.3387758444744505,0.35558417469945514,0.921431005661441,0.6718869693909196,0.3170851599397203,0.6134561503348132,0.4799729162755517,0.48070755564107503,0.17325331589327342,0.18829827032731283,0.7012235331869432,0.10844939820168242,0.29842285334104546,0.5311664448450164,0.5208687847892539,0.9593380571321982,0.15477099822614404,0.7798930390757335,0.220348009062876,0.6250850829100867,0.6995560424497105,0.5568910632792291,0.6106558114380936,0.5058498625970468,0.39821729935332806,0.810473194538454,0.3817012890135808,0.41968810105904597,0.4569233591656705,0.1639131265431123,0.6812961133191391,0.2527998426674317,0.9912977752632063,0.00732060883010055,0.4360975083239772,0.9316404399493146,0.029858293642884726,0.2116751028823357,0.34272050012400934,0.6096645138035208,0.5193824384630675,0.021089538740505454,0.7543258609538187,0.45351670039566694,0.39643662155325265,0.4940106645938578,0.5161800187915093,0.02888488116139898,0.048720145779266866,0.7208238124197851,0.6102766468416085,0.19896047015527873,0.47117219315202685,0.5574668168282227,0.5128728001554992,0.5403148798604985,0.16769257045379415,0.2944384310419491,0.7711718718328163,0.8759991573077824,0.2573915255609902,0.2198986104390216,0.5313308989036916,0.8763235306958033,0.4581392354931647,0.40853486575426856,0.2649383479442696,0.0149802121338386,0.4043648986765431,0.7714807551810626,0.19267641556664128,0.4314421052904118,0.24112145725463296,0.48113508627991053,0.3196408726289337,0.9674046604815367,0.3636172353422883,0.39155804274188033,0.566670032665229,0.7279646084365343,0.38793649044992806,0.3206772434065469,0.9242303195886377,0.256525057453986,0.7102244557502106,0.8631614604590365,0.9049061540742508,0.0956381612276036,0.6442266804764311,0.4666803301787573,0.5664594471362343,0.3609399100549534,0.05723896596311717,0.6455543754769529,0.9897619044314913,0.7345732004747674,0.9476806086023435,0.7464680928287115,0.45935341989660095,0.929567821881768,0.5789626692578658,0.655896683119412,0.6522922618042112,0.5593361813230131,0.0654897658706346,0.4064398801012692,0.457661464867425,0.6373520515317257,0.861663146443104,0.7684978227981933,0.2715256534101982,0.6019365156236948,0.7999743520227547,0.09660710617724677,0.030497669732473254,0.5594375029787959,0.5912972611160581,0.47542453473732915,0.8272133485754822,0.8859345593941663,0.01207788493394224,0.6351857796588972,0.15125679637278489,0.5631179084256269,0.4748868895027174,0.2786761189711976,0.37924258107502273,0.06013435963489844,0.6422238197671575,0.7285382049219595,0.9472320695099954,0.253171611341122,0.8495925245973056,0.34782398922311464,0.4194255268701763,0.4227695675906602,0.2344681577520994,0.354687857840856,0.5586583309751495,0.9891795118744502,0.03298923248572072,0.41814778241156836,0.1575324955299583,0.7641013440388682,0.555813360991294,0.844265831620253,0.9772453786109171,0.7807277342980238,0.43628134212996283,0.5964467028263387,0.794906837381437,0.6981088655229782,0.5690673604305384,0.5452756757528566,0.04275048745251031,0.14708913834841397,0.019261585114691337,0.6935397610929667,0.48104826884353635,0.22739659297841652,0.7160119259933817,0.5908555670888767,0.08510429154928467,0.7596670672775939,0.13663849343678314,0.9153038522497423,0.28665615372416453,0.1868402907705462,0.9247263184600685,0.6008681531949985,0.24416651112662002,0.1211963771173371,0.5254661572029068,0.9691391840616942,0.01127245940984345,0.9803007448451021,0.7582008476209436,0.19587908232252682,0.14424918532356013,0.9976559364355919,0.7818752315527027,0.39230362707262023,0.16809227569232288,0.7228936167607567,0.4730673612493065,0.045298457794483826,0.5548712838297978,0.7962914896744636,0.15639449919808912,0.9333179693809218,0.657780029882612,0.551332527084578,0.5983073686459862,0.5630003570447819,0.23772378561931118,0.7047657234294354,0.47468325645165843,0.4445040628966753,0.8194090697229358,0.5649741944953093,0.050882435266422776,0.036346008924810325,0.2851375109159354,0.3176175250539379,0.41964870354688255,0.7600340701110624,0.05916290209305475,0.12071396298158421,0.7331566817901125,0.6717271594584775,0.029377290800156497,0.7114272951369486,0.23279934605900054,0.42768232203997136,0.41201725595724703,0.0812922532232846,0.43682797984464583,0.7966092482210453,0.5361607149307757,0.12374990644580897,0.8295745169269227,0.6241034593415332,0.08046456776117816,0.1336593264273741,0.8741079848150525,0.8844037542118752,0.009293300604453658,0.6588242258460322,0.1529213905261667,0.5190706080131828,0.6586340835374606,0.6956823546893909,0.20034271996509112,0.7647865425057647,0.9762264440519435,0.948982470661802,0.13388998326672463,0.17975223423433806,0.9928079675000553,0.7401002113619586,0.6372270744265817,0.7622666529758796,0.8188948129511711,0.20797484856548354,0.3332421077876474,0.8279856026330225,0.11182920700026122,0.5139418161707769,0.3244073304490236,0.6257661173280773,0.5611631662922366,0.8504785642006534,0.5035207311382706,0.7801769040095304,0.8974098424265108,0.21117979340738613,0.7989634880479606,0.9809375182146807,0.9048686646683809,0.004177161387269868,0.9132015404125079,0.3651212005982992,0.5367181027100688,0.5652758776704048,0.07829368587223673,0.44254650412486896,0.05387097592905843,0.5368842319306378,0.33784905204098603,0.956311527681488,0.35986149321859706,0.9208001709730274,0.8343295066065839,0.5233158234869019,0.6628135640121664,0.687702650708072,0.6852393363554493,0.44485723951031053,0.8169738937823297,0.3210329266764239,0.2524841087727545,0.4807055588574227,0.5506067409229551,0.23114356456871177,0.8482225868867824,0.014869150017342236,0.767030069633763,0.06158202592054396,0.36982499104646194,0.5146603507690644,0.6673542514194128,0.606405957934515,0.21805102680463972,0.8634205859410606,0.06910959827510865,0.16675511838342427,0.9695545346673373,0.5274480674586484,0.7462037888808434,0.7068247414052251,0.9182515536070446,0.34768284668807425,0.9577570360320582,0.2641696700612669,0.8325425067511282,0.40002352470928426,0.05531038364923646,0.19076149985132806,0.6316699782275325,0.3974022729769253,0.5525301243936752,0.24050584061091074,0.48247295017175296,0.6279154138654144,0.09861065263454716,0.52701882806013,0.41660727682978926,0.9831673707394364,0.4862269694437319,0.32985968849596214,0.8488084789386393,0.04702159029572961,0.9560676485727128,0.10130895395107586,0.5874928229758165,0.7132422178501574,0.09245493635753099,0.6689714468243263,0.30155401867010323,0.4492267997578112,0.5219569077996635,0.7388188886553966,0.5748977919397442,0.8285751645267586,0.7790123383220373,0.5743529877774413,0.8330978615783827,0.7651767455242601,0.6508358635961132,0.9618089111925802,0.6989814110710383,0.8686279764729077,0.3862064110677713,0.22727482427572476,0.9520338880412847,0.5974733158260369,0.5209102622927085,0.5006352212281668,0.444682099614388,0.2939224936628504,0.6520203198495337,0.5170911762792546,0.7073818404509308,0.5906983771862152,0.1370916710853709,0.323467907957251,0.8458279500487856,0.10053144113766144,0.1699353650459141]}},"id":"50fcd57f-7bb4-4d33-82ec-1ee35b8b211f","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"6cf64f86-b91d-4bf8-bfbd-e919a3f0aca2","type":"PolyAnnotation"},"plot":{"id":"25c1548a-acbe-43d4-9eee-16224fec0c63","subtype":"Figure","type":"Plot"}},"id":"7766fa6a-3424-432c-987d-610efd366c7e","type":"LassoSelectTool"},{"attributes":{},"id":"4ac9217d-d19f-4d98-b196-0338363eb72c","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"dd3466ea-d071-4afb-90f8-ab5380334eea","type":"LinearAxis"}],"left":[{"id":"95845507-a1e7-48e1-bf96-1ae2fb120c53","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"dd3466ea-d071-4afb-90f8-ab5380334eea","type":"LinearAxis"},{"id":"030d1a1f-0d01-4ea6-a9dc-231361203af3","type":"Grid"},{"id":"95845507-a1e7-48e1-bf96-1ae2fb120c53","type":"LinearAxis"},{"id":"71a409b0-5b7d-434b-8ae3-cb65d68683e2","type":"Grid"},{"id":"6cf64f86-b91d-4bf8-bfbd-e919a3f0aca2","type":"PolyAnnotation"},{"id":"cc5575e9-b002-4cc5-b327-621bf7705762","type":"GlyphRenderer"},{"id":"012b4719-a46c-4298-8c7c-5d36c55235b1","type":"GlyphRenderer"}],"title":{"id":"9eeee1c8-c05c-4f76-ab89-f457da015853","type":"Title"},"tool_events":{"id":"3367d614-d9fe-4983-bbde-afdafbaef019","type":"ToolEvents"},"toolbar":{"id":"017431c8-235d-4778-ae72-b641f7f3d237","type":"Toolbar"},"x_range":{"id":"1434956b-2536-4233-a598-0815ca738105","type":"DataRange1d"},"y_range":{"id":"c48dfb53-4c88-428a-bdf8-5ed5754deaad","type":"DataRange1d"}},"id":"25c1548a-acbe-43d4-9eee-16224fec0c63","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"be738fff-3ac9-4906-ac86-43ad70ac2ca1","type":"BasicTickFormatter"},{"attributes":{"args":{"s2":{"id":"6f52216b-6127-4b28-90b9-87497d052ced","type":"ColumnDataSource"}},"code":"\n        var inds = cb_obj.selected['1d'].indices;\n        var d = cb_obj.data;\n        var ym = 0\n\n        if (inds.length == 0) { return; }\n\n        for (i = 0; i < d['color'].length; i++) {\n            d['color'][i] = \"navy\"\n        }\n        for (i = 0; i < inds.length; i++) {\n            d['color'][inds[i]] = \"firebrick\"\n            ym += d['y'][inds[i]]\n        }\n\n        ym /= inds.length\n        s2.data['ym'] = [ym, ym]\n\n        cb_obj.trigger('change');\n        s2.trigger('change');\n    "},"id":"ff781097-d0bb-4429-aefa-61abe12e5786","type":"CustomJS"},{"attributes":{"callback":null,"column_names":["x","ym"],"data":{"x":[0,1],"ym":[0.5,0.5]}},"id":"6f52216b-6127-4b28-90b9-87497d052ced","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c48dfb53-4c88-428a-bdf8-5ed5754deaad","type":"DataRange1d"}],"root_ids":["25c1548a-acbe-43d4-9eee-16224fec0c63"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"084d33c7-63b7-434a-be58-7e001c7e33a3","elementid":"d2e53fc8-0f00-4e57-ba75-b91813c3233d","modelid":"25c1548a-acbe-43d4-9eee-16224fec0c63"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});