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
      };var element = document.getElementById("95dc28c1-7d99-43ef-b753-1d80e9589a98");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '95dc28c1-7d99-43ef-b753-1d80e9589a98' but no matching script tag was found. ")
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
                  var docs_json = {"31dc43c1-e7e8-4c7c-8744-7ab953363142":{"roots":{"references":[{"attributes":{"below":[{"id":"a1d100ac-b4f4-488f-8b1a-5134719be253","type":"LinearAxis"}],"left":[{"id":"2ba00055-6f49-4c3c-8953-e0de465801d8","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a1d100ac-b4f4-488f-8b1a-5134719be253","type":"LinearAxis"},{"id":"58485fb5-bdd1-4a08-82b2-93c97524f4b9","type":"Grid"},{"id":"2ba00055-6f49-4c3c-8953-e0de465801d8","type":"LinearAxis"},{"id":"b63a2922-fb8d-4831-99b6-be07151bf609","type":"Grid"},{"id":"1da19c74-28f8-4471-bc42-71ccce34855e","type":"BoxAnnotation"},{"id":"03cee188-d1b5-425e-8674-8d9b5e604e0a","type":"GlyphRenderer"}],"title":{"id":"3fef0db1-e1de-41c0-862a-c63ba2592e0b","type":"Title"},"tool_events":{"id":"4bb9b868-03ba-4052-a747-42a96b7dc82d","type":"ToolEvents"},"toolbar":{"id":"08d4bb5b-f340-4f0c-af01-dcad7584838c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"15b6e119-af51-418b-93f6-e45d40145a31","type":"DataRange1d"},"y_range":{"id":"fe341f25-a947-40ac-8647-4721eadfc740","type":"DataRange1d"}},"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1bb32e5e-13b6-42db-bdaf-977842c35c3f","type":"ColumnDataSource"},"glyph":{"id":"fe9ade34-c607-49f8-9be2-acd0453180d2","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"631f8d9a-8a9f-412d-bc03-d93de41bb570","type":"Triangle"},"selection_glyph":null},"id":"132f85a1-e26c-409b-aa59-874f3084d993","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ebe4b36-d48d-4ec7-b98b-04db63db15b1","type":"Square"},{"attributes":{"below":[{"id":"75e0f0a2-4f37-42ea-a05d-00e33a6b64b8","type":"LinearAxis"}],"left":[{"id":"598e4743-4844-4c19-9f0f-292fce37db8b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"75e0f0a2-4f37-42ea-a05d-00e33a6b64b8","type":"LinearAxis"},{"id":"51129783-62c5-477c-b3ae-a9ecc905f0ec","type":"Grid"},{"id":"598e4743-4844-4c19-9f0f-292fce37db8b","type":"LinearAxis"},{"id":"48017f09-6f79-412d-9be2-727411048e33","type":"Grid"},{"id":"b6af46b9-8f8e-40c9-9a8d-f13b3c03c3f3","type":"BoxAnnotation"},{"id":"671db957-a32e-4934-84ba-67e349409042","type":"GlyphRenderer"}],"title":{"id":"479b792a-bca1-42d9-9d21-b3092e62feab","type":"Title"},"tool_events":{"id":"f81ce639-6f00-4e09-be64-87b58914b8a9","type":"ToolEvents"},"toolbar":{"id":"1596d6cd-bc0c-434d-8a06-ae3fa4ddd59f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"15b6e119-af51-418b-93f6-e45d40145a31","type":"DataRange1d"},"y_range":{"id":"6156f90a-0b3e-49be-94eb-bd8a6b0db1b5","type":"DataRange1d"}},"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1da19c74-28f8-4471-bc42-71ccce34855e","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"f374f5c3-19c3-47dd-aade-0fd2038585a3","type":"BasicTickFormatter"},"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"},"ticker":{"id":"2244a90e-866c-4852-94c3-70ac85d23335","type":"BasicTicker"}},"id":"598e4743-4844-4c19-9f0f-292fce37db8b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"6580177e-ac00-4799-863d-5a51c5db5111","type":"BasicTickFormatter"},"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"},"ticker":{"id":"31d6811b-8906-4a0b-b212-69c9923dacfa","type":"BasicTicker"}},"id":"ae76109a-4a20-4832-a164-819069909ae1","type":"LinearAxis"},{"attributes":{"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"}},"id":"52ef1a1e-e164-471c-a216-08b54016f0f7","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"fcc0c171-7c46-408e-bc86-b6c40c7e55a5","type":"ColumnDataSource"},"glyph":{"id":"1ebe4b36-d48d-4ec7-b98b-04db63db15b1","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"049ae9cb-61db-49d0-9c27-4cf7efc177e6","type":"Square"},"selection_glyph":null},"id":"671db957-a32e-4934-84ba-67e349409042","type":"GlyphRenderer"},{"attributes":{},"id":"cd9423a6-e78d-4116-9ca6-358e9594d1d8","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"e7b46b0c-0e56-4901-bcd1-3ffca5b4f289","type":"Title"},{"attributes":{"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"},"ticker":{"id":"31d6811b-8906-4a0b-b212-69c9923dacfa","type":"BasicTicker"}},"id":"fcac5939-e8a6-40fb-96e7-351d9e65fa4b","type":"Grid"},{"attributes":{"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"}},"id":"a4b432b0-0d06-43a5-bcb3-1e543e532c13","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"}},"id":"80d13b04-f7b4-4b7d-87e5-7fabec4c15a7","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"049ae9cb-61db-49d0-9c27-4cf7efc177e6","type":"Square"},{"attributes":{"plot":null,"text":null},"id":"479b792a-bca1-42d9-9d21-b3092e62feab","type":"Title"},{"attributes":{"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"}},"id":"689d76b7-a010-4ace-be30-4b882d97d615","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f01c87ef-fb8f-48dd-bcaa-9a91fea9c736","type":"BasicTicker"}},"id":"58485fb5-bdd1-4a08-82b2-93c97524f4b9","type":"Grid"},{"attributes":{"overlay":{"id":"b6af46b9-8f8e-40c9-9a8d-f13b3c03c3f3","type":"BoxAnnotation"},"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"}},"id":"5b108dd3-4dbc-4938-91f0-f512fb90c083","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"fe341f25-a947-40ac-8647-4721eadfc740","type":"DataRange1d"},{"attributes":{},"id":"f01c87ef-fb8f-48dd-bcaa-9a91fea9c736","type":"BasicTicker"},{"attributes":{"children":[{"id":"8fb26d26-a050-4150-889b-ed30ad8b98e7","type":"Row"}]},"id":"c27dc57c-bc48-45f9-94af-2e623b560666","type":"Column"},{"attributes":{"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1661b7e-2c62-45e2-8aec-cb28270d9111","type":"BasicTicker"}},"id":"51129783-62c5-477c-b3ae-a9ecc905f0ec","type":"Grid"},{"attributes":{"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"}},"id":"7021c4e6-88f8-4b3f-aee6-b01759532e54","type":"HelpTool"},{"attributes":{"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"}},"id":"b6a7cce0-914c-4b55-af0a-0352e9fb3295","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aec7f5be-2869-4263-ac2d-9b97ccc7eb87","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"},{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"},{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"}]},"id":"8fb26d26-a050-4150-889b-ed30ad8b98e7","type":"Row"},{"attributes":{},"id":"31d6811b-8906-4a0b-b212-69c9923dacfa","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"1bb32e5e-13b6-42db-bdaf-977842c35c3f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"}},"id":"e5c15230-675d-45ec-bdb0-73887507b73c","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ff6ed05-30b9-4aae-bff3-cb2692c3d23c","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6657a7e4-f348-4686-83eb-ae196ae9008b","type":"BasicTicker"}},"id":"b63a2922-fb8d-4831-99b6-be07151bf609","type":"Grid"},{"attributes":{"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"}},"id":"43267347-976a-40a6-9d54-4208e4ef3817","type":"SaveTool"},{"attributes":{},"id":"50124f00-29be-4755-b72a-7ab0b47a73d4","type":"ToolEvents"},{"attributes":{"overlay":{"id":"aec7f5be-2869-4263-ac2d-9b97ccc7eb87","type":"BoxAnnotation"},"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"}},"id":"9df53aaa-e1ee-464e-a79b-36b59b120721","type":"BoxZoomTool"},{"attributes":{},"id":"2244a90e-866c-4852-94c3-70ac85d23335","type":"BasicTicker"},{"attributes":{"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"}},"id":"0074dfa5-12a9-4918-a3e3-6213e9f10183","type":"SaveTool"},{"attributes":{"below":[{"id":"ae76109a-4a20-4832-a164-819069909ae1","type":"LinearAxis"}],"left":[{"id":"535595e1-f751-46ff-9e49-7cb9deec7e6c","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"ae76109a-4a20-4832-a164-819069909ae1","type":"LinearAxis"},{"id":"fcac5939-e8a6-40fb-96e7-351d9e65fa4b","type":"Grid"},{"id":"535595e1-f751-46ff-9e49-7cb9deec7e6c","type":"LinearAxis"},{"id":"1d18a945-adb7-40a3-bd68-10d436924b3f","type":"Grid"},{"id":"aec7f5be-2869-4263-ac2d-9b97ccc7eb87","type":"BoxAnnotation"},{"id":"132f85a1-e26c-409b-aa59-874f3084d993","type":"GlyphRenderer"}],"title":{"id":"e7b46b0c-0e56-4901-bcd1-3ffca5b4f289","type":"Title"},"tool_events":{"id":"50124f00-29be-4755-b72a-7ab0b47a73d4","type":"ToolEvents"},"toolbar":{"id":"5108228a-0d75-4327-8789-4018dac89fd0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"15b6e119-af51-418b-93f6-e45d40145a31","type":"DataRange1d"},"y_range":{"id":"fe341f25-a947-40ac-8647-4721eadfc740","type":"DataRange1d"}},"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6657a7e4-f348-4686-83eb-ae196ae9008b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"631f8d9a-8a9f-412d-bc03-d93de41bb570","type":"Triangle"},{"attributes":{"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"}},"id":"d77a6f9d-fdc1-4db5-ac0c-e1f74c71804c","type":"SaveTool"},{"attributes":{"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"}},"id":"4aeba49e-814b-4086-9fff-e9922b95b335","type":"ResetTool"},{"attributes":{"overlay":{"id":"1da19c74-28f8-4471-bc42-71ccce34855e","type":"BoxAnnotation"},"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"}},"id":"74fbf543-7c12-4878-8af9-eed09c6c7483","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"},"ticker":{"id":"2244a90e-866c-4852-94c3-70ac85d23335","type":"BasicTicker"}},"id":"48017f09-6f79-412d-9be2-727411048e33","type":"Grid"},{"attributes":{"formatter":{"id":"9977bb53-ed5f-4afd-b04a-b35f01bb3023","type":"BasicTickFormatter"},"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1661b7e-2c62-45e2-8aec-cb28270d9111","type":"BasicTicker"}},"id":"75e0f0a2-4f37-42ea-a05d-00e33a6b64b8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6156f90a-0b3e-49be-94eb-bd8a6b0db1b5","type":"DataRange1d"},{"attributes":{"formatter":{"id":"cd9423a6-e78d-4116-9ca6-358e9594d1d8","type":"BasicTickFormatter"},"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"},"ticker":{"id":"b39c59f4-76f3-493d-823f-2233a2f16d11","type":"BasicTicker"}},"id":"535595e1-f751-46ff-9e49-7cb9deec7e6c","type":"LinearAxis"},{"attributes":{"data_source":{"id":"0c657ef9-3204-4721-a4c9-32d8868f88c9","type":"ColumnDataSource"},"glyph":{"id":"2ff6ed05-30b9-4aae-bff3-cb2692c3d23c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c4e37af3-41d5-4063-94b8-3f69bf253a47","type":"Circle"},"selection_glyph":null},"id":"03cee188-d1b5-425e-8674-8d9b5e604e0a","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"38f3c3da-f717-446d-8c1f-379233c3fc19","subtype":"Figure","type":"Plot"},"ticker":{"id":"b39c59f4-76f3-493d-823f-2233a2f16d11","type":"BasicTicker"}},"id":"1d18a945-adb7-40a3-bd68-10d436924b3f","type":"Grid"},{"attributes":{},"id":"6580177e-ac00-4799-863d-5a51c5db5111","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"}},"id":"c31d8394-c6ef-4a3e-936d-53691c33e4ae","type":"HelpTool"},{"attributes":{},"id":"f81ce639-6f00-4e09-be64-87b58914b8a9","type":"ToolEvents"},{"attributes":{},"id":"e1661b7e-2c62-45e2-8aec-cb28270d9111","type":"BasicTicker"},{"attributes":{},"id":"df9b0c99-1f16-4f59-bc7e-89483f282ee1","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"15b6e119-af51-418b-93f6-e45d40145a31","type":"DataRange1d"},{"attributes":{"formatter":{"id":"df9b0c99-1f16-4f59-bc7e-89483f282ee1","type":"BasicTickFormatter"},"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f01c87ef-fb8f-48dd-bcaa-9a91fea9c736","type":"BasicTicker"}},"id":"a1d100ac-b4f4-488f-8b1a-5134719be253","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"0c657ef9-3204-4721-a4c9-32d8868f88c9","type":"ColumnDataSource"},{"attributes":{},"id":"9977bb53-ed5f-4afd-b04a-b35f01bb3023","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"}},"id":"4a80b967-7018-4e5b-9988-c6d9bc0e8854","type":"PanTool"},{"attributes":{},"id":"f374f5c3-19c3-47dd-aade-0fd2038585a3","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"fcc0c171-7c46-408e-bc86-b6c40c7e55a5","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"3311192d-e986-4f53-a600-f967726fab8e","type":"BasicTickFormatter"},"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6657a7e4-f348-4686-83eb-ae196ae9008b","type":"BasicTicker"}},"id":"2ba00055-6f49-4c3c-8953-e0de465801d8","type":"LinearAxis"},{"attributes":{},"id":"3311192d-e986-4f53-a600-f967726fab8e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3427c554-3195-434e-a8c1-319ff1156b34","subtype":"Figure","type":"Plot"}},"id":"d9911ac6-b362-478f-9411-0efd1e4bf6da","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4e37af3-41d5-4063-94b8-3f69bf253a47","type":"Circle"},{"attributes":{},"id":"4bb9b868-03ba-4052-a747-42a96b7dc82d","type":"ToolEvents"},{"attributes":{},"id":"b39c59f4-76f3-493d-823f-2233a2f16d11","type":"BasicTicker"},{"attributes":{"plot":{"id":"b3adf52a-5b19-4586-bf91-94fb5b1f184b","subtype":"Figure","type":"Plot"}},"id":"7d3564bb-9739-496c-8cab-6368e88c5ced","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d9911ac6-b362-478f-9411-0efd1e4bf6da","type":"PanTool"},{"id":"a4b432b0-0d06-43a5-bcb3-1e543e532c13","type":"WheelZoomTool"},{"id":"5b108dd3-4dbc-4938-91f0-f512fb90c083","type":"BoxZoomTool"},{"id":"43267347-976a-40a6-9d54-4208e4ef3817","type":"SaveTool"},{"id":"4aeba49e-814b-4086-9fff-e9922b95b335","type":"ResetTool"},{"id":"c31d8394-c6ef-4a3e-936d-53691c33e4ae","type":"HelpTool"}]},"id":"1596d6cd-bc0c-434d-8a06-ae3fa4ddd59f","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b6af46b9-8f8e-40c9-9a8d-f13b3c03c3f3","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe9ade34-c607-49f8-9be2-acd0453180d2","type":"Triangle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4a80b967-7018-4e5b-9988-c6d9bc0e8854","type":"PanTool"},{"id":"52ef1a1e-e164-471c-a216-08b54016f0f7","type":"WheelZoomTool"},{"id":"74fbf543-7c12-4878-8af9-eed09c6c7483","type":"BoxZoomTool"},{"id":"d77a6f9d-fdc1-4db5-ac0c-e1f74c71804c","type":"SaveTool"},{"id":"80d13b04-f7b4-4b7d-87e5-7fabec4c15a7","type":"ResetTool"},{"id":"7d3564bb-9739-496c-8cab-6368e88c5ced","type":"HelpTool"}]},"id":"08d4bb5b-f340-4f0c-af01-dcad7584838c","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e5c15230-675d-45ec-bdb0-73887507b73c","type":"PanTool"},{"id":"689d76b7-a010-4ace-be30-4b882d97d615","type":"WheelZoomTool"},{"id":"9df53aaa-e1ee-464e-a79b-36b59b120721","type":"BoxZoomTool"},{"id":"0074dfa5-12a9-4918-a3e3-6213e9f10183","type":"SaveTool"},{"id":"b6a7cce0-914c-4b55-af0a-0352e9fb3295","type":"ResetTool"},{"id":"7021c4e6-88f8-4b3f-aee6-b01759532e54","type":"HelpTool"}]},"id":"5108228a-0d75-4327-8789-4018dac89fd0","type":"Toolbar"},{"attributes":{"plot":null,"text":null},"id":"3fef0db1-e1de-41c0-862a-c63ba2592e0b","type":"Title"}],"root_ids":["c27dc57c-bc48-45f9-94af-2e623b560666"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"31dc43c1-e7e8-4c7c-8744-7ab953363142","elementid":"95dc28c1-7d99-43ef-b753-1d80e9589a98","modelid":"c27dc57c-bc48-45f9-94af-2e623b560666"}];
                  
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