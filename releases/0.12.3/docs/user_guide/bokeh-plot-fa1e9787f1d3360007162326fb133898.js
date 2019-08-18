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
      };var element = document.getElementById("05e30fe0-802d-46fb-80e6-570ecccb8b6b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '05e30fe0-802d-46fb-80e6-570ecccb8b6b' but no matching script tag was found. ")
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
                  var docs_json = {"e9c5a978-b2e9-4d0f-b694-dc539f8554c8":{"roots":{"references":[{"attributes":{"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"},"ticker":{"id":"359b0be9-50ee-4f62-9641-73e293a6034c","type":"BasicTicker"}},"id":"7e1d6645-eca4-4c32-bec5-eae9c8cf1e3c","type":"Grid"},{"attributes":{"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"}},"id":"f85c13ed-6e2d-46a0-940c-476a4e1a8ad4","type":"SaveTool"},{"attributes":{"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"}},"id":"e8cf5011-7115-4a12-a6fa-52102170a3fa","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"3bb09474-d671-49b9-876e-9a07ca249dc5","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"33c951bf-43cc-45e8-a0be-558aa8f50189","type":"LinearAxis"}],"left":[{"id":"bcfae650-c295-427f-a4fb-ffe3da817e4d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"33c951bf-43cc-45e8-a0be-558aa8f50189","type":"LinearAxis"},{"id":"14be285b-b828-457c-853a-976c8eee289c","type":"Grid"},{"id":"bcfae650-c295-427f-a4fb-ffe3da817e4d","type":"LinearAxis"},{"id":"9653ea00-7231-4904-ae0b-3898ff778698","type":"Grid"},{"id":"21852e98-9b70-42b7-8757-55c9424c219e","type":"BoxAnnotation"},{"id":"02a2bcf2-9ddc-402f-9ae9-ba4b3fe81d1f","type":"GlyphRenderer"}],"title":{"id":"da90309f-14c4-410f-a595-36e0b68dcf14","type":"Title"},"tool_events":{"id":"7fb5c587-7646-4eeb-beac-447115d7c0d9","type":"ToolEvents"},"toolbar":{"id":"ff8284a1-76e8-4d95-8608-674f7c9582f5","type":"Toolbar"},"x_range":{"id":"cd8e14fe-0a03-4350-afcf-81d4db56a840","type":"DataRange1d"},"y_range":{"id":"33d38e7c-b65f-4692-b0e5-10c75002234b","type":"DataRange1d"}},"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"5ba03fd6-5397-47a8-9e5e-81d36df8de8c","type":"BasicTickFormatter"},"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6552f1ba-8c10-40cd-bf20-553a579ba886","type":"BasicTicker"}},"id":"8939b06f-fd7a-41b0-bf37-f2bc506a0750","type":"LinearAxis"},{"attributes":{"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"}},"id":"137e60d4-80cc-4c56-b771-df91c5341af2","type":"ResetTool"},{"attributes":{"overlay":{"id":"8309ae52-6937-4fe4-9805-266b7d564784","type":"BoxAnnotation"},"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"}},"id":"fb80c5c3-fbae-4e08-93d9-d6964989b3df","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"}},"id":"9181de6a-9cab-4ff0-a672-9b923bc71ebb","type":"SaveTool"},{"attributes":{"below":[{"id":"5db6e6c0-23c6-4f7f-84ec-23d4b04bd0e9","type":"LinearAxis"}],"left":[{"id":"8939b06f-fd7a-41b0-bf37-f2bc506a0750","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"5db6e6c0-23c6-4f7f-84ec-23d4b04bd0e9","type":"LinearAxis"},{"id":"7e1d6645-eca4-4c32-bec5-eae9c8cf1e3c","type":"Grid"},{"id":"8939b06f-fd7a-41b0-bf37-f2bc506a0750","type":"LinearAxis"},{"id":"edf63786-1d6c-4e24-bc0b-8c1849b0cea8","type":"Grid"},{"id":"8309ae52-6937-4fe4-9805-266b7d564784","type":"BoxAnnotation"},{"id":"ac3ebd4b-bc29-473a-90f3-ded2067dddf4","type":"GlyphRenderer"}],"title":{"id":"7a1e25c2-56c0-4666-9b12-7786f7e45707","type":"Title"},"tool_events":{"id":"79e43502-fd4d-46b6-a2c7-fa6decfa5e2c","type":"ToolEvents"},"toolbar":{"id":"ceeb8fbe-fd94-40dc-9fc3-a2e5da1d8f87","type":"Toolbar"},"x_range":{"id":"a51d2bf1-4f1c-4e2f-b6c5-811d0e75f86d","type":"DataRange1d"},"y_range":{"id":"ee1ffe38-fbad-4560-aeaa-140bd43800ba","type":"DataRange1d"}},"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"9ecddd2b-3dc8-4ce8-b01f-ec10771e114c","type":"LinearAxis"}],"left":[{"id":"654b309f-1d24-4ccf-8891-c2742b68abc7","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9ecddd2b-3dc8-4ce8-b01f-ec10771e114c","type":"LinearAxis"},{"id":"7d50a848-dabb-4963-bd10-3abfd0c2ae5e","type":"Grid"},{"id":"654b309f-1d24-4ccf-8891-c2742b68abc7","type":"LinearAxis"},{"id":"8fcd87c0-fc1f-4462-8970-715676de38be","type":"Grid"},{"id":"b9850f71-228b-4342-b4fd-4498c2049079","type":"BoxAnnotation"},{"id":"48605287-60d0-417a-8f1a-f380e3f367e0","type":"GlyphRenderer"}],"title":{"id":"b4517835-7171-4cb9-bde4-e0f6b5242859","type":"Title"},"tool_events":{"id":"7cf99a63-8380-4739-9197-bdc86227ec70","type":"ToolEvents"},"toolbar":{"id":"c22567fe-8b18-4dd2-9133-fe9c5abe3a64","type":"Toolbar"},"x_range":{"id":"659bb4f0-e936-4702-925b-c88dc1609139","type":"DataRange1d"},"y_range":{"id":"4b9f9bc2-981e-4a5d-95f3-6f5205f8239f","type":"DataRange1d"}},"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"}},"id":"9d3365f2-a37a-4536-9382-dd2587e6283a","type":"ResetTool"},{"attributes":{"formatter":{"id":"2f6869fd-4e76-4c59-8a3a-cf79ab44c886","type":"BasicTickFormatter"},"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"},"ticker":{"id":"359b0be9-50ee-4f62-9641-73e293a6034c","type":"BasicTicker"}},"id":"5db6e6c0-23c6-4f7f-84ec-23d4b04bd0e9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"659bb4f0-e936-4702-925b-c88dc1609139","type":"DataRange1d"},{"attributes":{"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"}},"id":"6f25a624-4261-40fa-ad84-5fb126a7e13b","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9e2246a-498e-485e-86bb-86ce3d22f3f1","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed7d4beb-1187-4a5d-8c47-47e26a7d5ee8","type":"Circle"},{"attributes":{"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"}},"id":"465322ef-7641-4329-a86c-b49bcb69e501","type":"HelpTool"},{"attributes":{"data_source":{"id":"ecbc186c-ea03-4d7b-be0e-9ce75bd9bd72","type":"ColumnDataSource"},"glyph":{"id":"fa015c6c-abe0-445c-8581-3ad523201a03","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"446469ba-230c-4dc5-96b7-5ed22a3b8320","type":"Square"},"selection_glyph":null},"id":"02a2bcf2-9ddc-402f-9ae9-ba4b3fe81d1f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"}},"id":"ae4002b6-e950-4b0f-b10e-03d3e302dc74","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"5546b9ed-c42d-4c06-90d5-23ffb29bb840","type":"BasicTickFormatter"},"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e44602f-44f1-4782-94cb-81b75c51a9a3","type":"BasicTicker"}},"id":"33c951bf-43cc-45e8-a0be-558aa8f50189","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1bc4e763-9ad3-410f-a706-f966fc7efa29","type":"Triangle"},{"attributes":{},"id":"2f6869fd-4e76-4c59-8a3a-cf79ab44c886","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"b4517835-7171-4cb9-bde4-e0f6b5242859","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"ecbc186c-ea03-4d7b-be0e-9ce75bd9bd72","type":"ColumnDataSource"},{"attributes":{},"id":"79efb750-f1d8-4e7b-8fa1-e0d72f58b43c","type":"BasicTicker"},{"attributes":{"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e44602f-44f1-4782-94cb-81b75c51a9a3","type":"BasicTicker"}},"id":"14be285b-b828-457c-853a-976c8eee289c","type":"Grid"},{"attributes":{},"id":"5e44602f-44f1-4782-94cb-81b75c51a9a3","type":"BasicTicker"},{"attributes":{"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"}},"id":"4ddc293d-b41c-46f4-b635-5d1accba625e","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"},"ticker":{"id":"79efb750-f1d8-4e7b-8fa1-e0d72f58b43c","type":"BasicTicker"}},"id":"9653ea00-7231-4904-ae0b-3898ff778698","type":"Grid"},{"attributes":{},"id":"5546b9ed-c42d-4c06-90d5-23ffb29bb840","type":"BasicTickFormatter"},{"attributes":{},"id":"1aa91e8b-8484-49f8-a77d-c9ad319c3591","type":"BasicTicker"},{"attributes":{"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"}},"id":"c72a5d70-fd00-44ac-9684-74312a83e4b5","type":"WheelZoomTool"},{"attributes":{},"id":"0cce6bd4-0bb7-463a-a235-45523701a9cf","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8309ae52-6937-4fe4-9805-266b7d564784","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"446469ba-230c-4dc5-96b7-5ed22a3b8320","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b9850f71-228b-4342-b4fd-4498c2049079","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f86127cc-d353-4db2-9191-e4619a8c1809","type":"PanTool"},{"id":"8eebd395-aa15-4085-ae72-87a255b88500","type":"WheelZoomTool"},{"id":"3353bac4-f835-430d-b8ff-dfe569e42ba6","type":"BoxZoomTool"},{"id":"f85c13ed-6e2d-46a0-940c-476a4e1a8ad4","type":"SaveTool"},{"id":"4719465a-309b-4053-a49d-3b1f08fee7e4","type":"ResetTool"},{"id":"465322ef-7641-4329-a86c-b49bcb69e501","type":"HelpTool"}]},"id":"c22567fe-8b18-4dd2-9133-fe9c5abe3a64","type":"Toolbar"},{"attributes":{},"id":"7cf99a63-8380-4739-9197-bdc86227ec70","type":"ToolEvents"},{"attributes":{"callback":null},"id":"a51d2bf1-4f1c-4e2f-b6c5-811d0e75f86d","type":"DataRange1d"},{"attributes":{},"id":"02075cea-25a6-4f74-b7f4-3f5773949364","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"}},"id":"89288b36-a981-4c93-a3f7-8bfd397d9eff","type":"PanTool"},{"attributes":{"formatter":{"id":"02075cea-25a6-4f74-b7f4-3f5773949364","type":"BasicTickFormatter"},"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cce6bd4-0bb7-463a-a235-45523701a9cf","type":"BasicTicker"}},"id":"9ecddd2b-3dc8-4ce8-b01f-ec10771e114c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"89288b36-a981-4c93-a3f7-8bfd397d9eff","type":"PanTool"},{"id":"c72a5d70-fd00-44ac-9684-74312a83e4b5","type":"WheelZoomTool"},{"id":"277bcef6-2d50-4522-b6fd-e7152f27e4e8","type":"BoxZoomTool"},{"id":"6f25a624-4261-40fa-ad84-5fb126a7e13b","type":"SaveTool"},{"id":"137e60d4-80cc-4c56-b771-df91c5341af2","type":"ResetTool"},{"id":"4ddc293d-b41c-46f4-b635-5d1accba625e","type":"HelpTool"}]},"id":"ff8284a1-76e8-4d95-8608-674f7c9582f5","type":"Toolbar"},{"attributes":{"callback":null},"id":"ee1ffe38-fbad-4560-aeaa-140bd43800ba","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"7a1e25c2-56c0-4666-9b12-7786f7e45707","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6552f1ba-8c10-40cd-bf20-553a579ba886","type":"BasicTicker"}},"id":"edf63786-1d6c-4e24-bc0b-8c1849b0cea8","type":"Grid"},{"attributes":{"callback":null},"id":"cd8e14fe-0a03-4350-afcf-81d4db56a840","type":"DataRange1d"},{"attributes":{},"id":"359b0be9-50ee-4f62-9641-73e293a6034c","type":"BasicTicker"},{"attributes":{"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"}},"id":"4719465a-309b-4053-a49d-3b1f08fee7e4","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21852e98-9b70-42b7-8757-55c9424c219e","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"672efb7e-f275-4330-9328-38efc3d86f9d","type":"Circle"},{"attributes":{"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"}},"id":"f86127cc-d353-4db2-9191-e4619a8c1809","type":"PanTool"},{"attributes":{"data_source":{"id":"a73bdd11-2110-444a-9511-3371c06a158b","type":"ColumnDataSource"},"glyph":{"id":"1bc4e763-9ad3-410f-a706-f966fc7efa29","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"a9e2246a-498e-485e-86bb-86ce3d22f3f1","type":"Triangle"},"selection_glyph":null},"id":"ac3ebd4b-bc29-473a-90f3-ded2067dddf4","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"b1e4d86b-9d88-4fbf-bb74-a66cc4e286bb","type":"BasicTickFormatter"},"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1aa91e8b-8484-49f8-a77d-c9ad319c3591","type":"BasicTicker"}},"id":"654b309f-1d24-4ccf-8891-c2742b68abc7","type":"LinearAxis"},{"attributes":{},"id":"1c76b36b-8b57-4e89-9e30-e9c9f8a62b00","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"}},"id":"4319bde1-4029-4cfa-893f-faf6101a4a72","type":"HelpTool"},{"attributes":{},"id":"79e43502-fd4d-46b6-a2c7-fa6decfa5e2c","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1aa91e8b-8484-49f8-a77d-c9ad319c3591","type":"BasicTicker"}},"id":"8fcd87c0-fc1f-4462-8970-715676de38be","type":"Grid"},{"attributes":{},"id":"b1e4d86b-9d88-4fbf-bb74-a66cc4e286bb","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4b9f9bc2-981e-4a5d-95f3-6f5205f8239f","type":"DataRange1d"},{"attributes":{"children":[{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"},{"id":"df78ad0f-ceec-42f0-a18b-3fb838b3114e","subtype":"Figure","type":"Plot"},{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"}]},"id":"ea91433e-905a-4f08-a12f-c42c96dbee47","type":"Row"},{"attributes":{"formatter":{"id":"1c76b36b-8b57-4e89-9e30-e9c9f8a62b00","type":"BasicTickFormatter"},"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"},"ticker":{"id":"79efb750-f1d8-4e7b-8fa1-e0d72f58b43c","type":"BasicTicker"}},"id":"bcfae650-c295-427f-a4fb-ffe3da817e4d","type":"LinearAxis"},{"attributes":{"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"}},"id":"8eebd395-aa15-4085-ae72-87a255b88500","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"3bb09474-d671-49b9-876e-9a07ca249dc5","type":"ColumnDataSource"},"glyph":{"id":"672efb7e-f275-4330-9328-38efc3d86f9d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ed7d4beb-1187-4a5d-8c47-47e26a7d5ee8","type":"Circle"},"selection_glyph":null},"id":"48605287-60d0-417a-8f1a-f380e3f367e0","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"da90309f-14c4-410f-a595-36e0b68dcf14","type":"Title"},{"attributes":{"callback":null},"id":"33d38e7c-b65f-4692-b0e5-10c75002234b","type":"DataRange1d"},{"attributes":{"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cce6bd4-0bb7-463a-a235-45523701a9cf","type":"BasicTicker"}},"id":"7d50a848-dabb-4963-bd10-3abfd0c2ae5e","type":"Grid"},{"attributes":{},"id":"6552f1ba-8c10-40cd-bf20-553a579ba886","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"a73bdd11-2110-444a-9511-3371c06a158b","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8cf5011-7115-4a12-a6fa-52102170a3fa","type":"PanTool"},{"id":"ae4002b6-e950-4b0f-b10e-03d3e302dc74","type":"WheelZoomTool"},{"id":"fb80c5c3-fbae-4e08-93d9-d6964989b3df","type":"BoxZoomTool"},{"id":"9181de6a-9cab-4ff0-a672-9b923bc71ebb","type":"SaveTool"},{"id":"9d3365f2-a37a-4536-9382-dd2587e6283a","type":"ResetTool"},{"id":"4319bde1-4029-4cfa-893f-faf6101a4a72","type":"HelpTool"}]},"id":"ceeb8fbe-fd94-40dc-9fc3-a2e5da1d8f87","type":"Toolbar"},{"attributes":{},"id":"5ba03fd6-5397-47a8-9e5e-81d36df8de8c","type":"BasicTickFormatter"},{"attributes":{},"id":"7fb5c587-7646-4eeb-beac-447115d7c0d9","type":"ToolEvents"},{"attributes":{"overlay":{"id":"b9850f71-228b-4342-b4fd-4498c2049079","type":"BoxAnnotation"},"plot":{"id":"a470e24b-4de8-4d9e-befd-4af192eb1a9f","subtype":"Figure","type":"Plot"}},"id":"3353bac4-f835-430d-b8ff-dfe569e42ba6","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa015c6c-abe0-445c-8581-3ad523201a03","type":"Square"},{"attributes":{"overlay":{"id":"21852e98-9b70-42b7-8757-55c9424c219e","type":"BoxAnnotation"},"plot":{"id":"b6b6b8cd-0b8e-496d-9ec6-f589d9192401","subtype":"Figure","type":"Plot"}},"id":"277bcef6-2d50-4522-b6fd-e7152f27e4e8","type":"BoxZoomTool"}],"root_ids":["ea91433e-905a-4f08-a12f-c42c96dbee47"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"e9c5a978-b2e9-4d0f-b694-dc539f8554c8","elementid":"05e30fe0-802d-46fb-80e6-570ecccb8b6b","modelid":"ea91433e-905a-4f08-a12f-c42c96dbee47"}];
                  
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