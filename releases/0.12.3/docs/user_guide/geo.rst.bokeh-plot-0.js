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
      };var element = document.getElementById("8cf36de4-ecfb-4c24-b053-41e1c1b25046");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8cf36de4-ecfb-4c24-b053-41e1c1b25046' but no matching script tag was found. ")
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
                  var docs_json = {"f3e382be-b712-4f57-82c4-96a3c1b69853":{"roots":{"references":[{"attributes":{"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"}},"id":"a610c127-5aa8-45c4-88c5-6a1992bbd129","type":"ResetTool"},{"attributes":{"formatter":{"id":"fff36bd1-575d-485a-a299-49ff9adb8a0a","type":"BasicTickFormatter"},"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"},"ticker":{"id":"35cdc63e-bb2f-4f7d-be37-1abea3eaa018","type":"BasicTicker"}},"id":"a441e77c-51dd-4981-94f0-180c437d83b3","type":"LinearAxis"},{"attributes":{"callback":null,"geojson":"{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"id\":\"463098\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.1208465099334717,51.4613151550293]},\"properties\":{\"OrganisationCode\":\"Q64\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Bath, Gloucestershire, Swindon And Wiltshire Area Team\",\"Address1\":\"1st Floor\",\"Address2\":\"Bewley House\",\"Address3\":\"Marshfield Road\",\"City\":\"Chippenham\",\"County\":\"Wiltshire\",\"Postcode\":\"SN15 1JW\",\"Phone\":\"0113 8251 500\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/bgsw-at/\"}},{\"type\":\"Feature\",\"id\":\"463099\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.5929524898529053,51.459877014160156]},\"properties\":{\"OrganisationCode\":\"Q65\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Bristol, North Somerset, Somerset And South Gloucestershire Area Team\",\"Address1\":\"South Plaza\",\"Address3\":\"Marlborough Street\",\"City\":\"Bristol\",\"County\":\"Somerset\",\"Postcode\":\"BS1 3NX\",\"Phone\":\"0117 976 6600\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/bnsssg-at/\"}},{\"type\":\"Feature\",\"id\":\"463100\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-4.232546806335449,50.42112731933594]},\"properties\":{\"OrganisationCode\":\"Q66\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Devon, Cornwall And Isles Of Scilly Area Team\",\"Address1\":\"Peninsula House\",\"Address2\":\"Kingsmill Road\",\"Address3\":\"Tamar View Industrial Estate\",\"City\":\"Cornwall\",\"County\":\"Cornwall\",\"Postcode\":\"PL12 6LE\",\"Phone\":\"01752 679250\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/dcis-at/\"}},{\"type\":\"Feature\",\"id\":\"463101\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[0.27698493003845215,51.193748474121094]},\"properties\":{\"OrganisationCode\":\"Q67\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Kent And Medway Area Team\",\"Address1\":\"Wharf House\",\"Address2\":\"Medway Wharf Road\",\"City\":\"Tonbridge\",\"County\":\"Kent\",\"Postcode\":\"TN9 1RE\",\"Phone\":\"01732 375200\",\"Email\":\"england.kentandmedwaybusinessoffice@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/km-at/\"}},{\"type\":\"Feature\",\"id\":\"463102\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-0.1647440642118454,51.170936584472656]},\"properties\":{\"OrganisationCode\":\"Q68\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Surrey And Sussex Area Team\",\"Address1\":\"York House\",\"Address2\":\"18-20 Massetts Road\",\"City\":\"Horley\",\"County\":\"Surrey\",\"Postcode\":\"RH6 7DE\",\"Phone\":\"01293 778899\",\"Email\":\"england.surreyandsussex-businessoffice@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/ss-at/\"}},{\"type\":\"Feature\",\"id\":\"463103\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.2079498767852783,51.72844696044922]},\"properties\":{\"OrganisationCode\":\"Q69\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Thames Valley Area Team\",\"Address1\":\"Jubilee House\",\"Address2\":\"5510 John Smith Drive\",\"Address3\":\"Oxford Business Park South\",\"City\":\"Cowley\",\"County\":\"Oxfordshire\",\"Postcode\":\"OX4 2LH\",\"Phone\":\"01865 963800\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/tv-at/\"}},{\"type\":\"Feature\",\"id\":\"463104\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.4493359327316284,50.92325973510742]},\"properties\":{\"OrganisationCode\":\"Q70\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Wessex Area Team\",\"Address2\":\"Oakley Road\",\"City\":\"Southampton\",\"County\":\"Hampshire\",\"Postcode\":\"SO16 4GX\",\"Phone\":\"023 8029 6914\",\"Email\":\"england.wessexpatientexperience@nhs.net\",\"Website\":\"http://www.england.nhs.uk/south/south/w-at/\"}},{\"type\":\"Feature\",\"id\":\"463105\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-0.13727261126041412,51.49694061279297]},\"properties\":{\"OrganisationCode\":\"Q71\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"London Area Team\",\"Address2\":\"2nd Floor, Southside\",\"Address3\":\"105 Victoria Street\",\"City\":\"London\",\"Postcode\":\"SW1E 6QT\",\"Phone\":\"0207 932 3700\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/london/\"}},{\"type\":\"Feature\",\"id\":\"463120\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.5846381187438965,53.37392807006836]},\"properties\":{\"OrganisationCode\":\"Q44\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Cheshire, Warrington And Wirral Area Team\",\"Address1\":\"NHS Quayside (NHS North West)\",\"Address2\":\"Wilderspool Park\",\"Address3\":\"Greensall Avenue\",\"City\":\"Warrington\",\"County\":\"Cheshire\",\"Postcode\":\"WA4 6HL\",\"Phone\":\"01925 406000\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/cww-at/\"}},{\"type\":\"Feature\",\"id\":\"463121\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.5323498249053955,53.79779815673828]},\"properties\":{\"OrganisationCode\":\"Q45\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Durham, Darlington And Tees Area Team\",\"Address1\":\"The Old Exchange\",\"Address2\":\"Barnard Street\",\"City\":\"Darlington\",\"County\":\"Durham\",\"Postcode\":\"LS2 7UE\",\"Phone\":\"0113 825 1609\",\"Email\":\"england.ddt-at-generalenquiries@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/ddt-at/\"}},{\"type\":\"Feature\",\"id\":\"463122\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.233488082885742,53.47760009765625]},\"properties\":{\"OrganisationCode\":\"Q46\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Greater Manchester Area Team\",\"Address1\":\"4th Floor\",\"Address2\":\"3 Picadilly Place\",\"Address3\":\"London Road\",\"City\":\"Manchester\",\"County\":\"Lancashire\",\"Postcode\":\"M1 3BN\",\"Phone\":\"0845 0500194\",\"Email\":\"nhse.gmat@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/gm-at/\"}},{\"type\":\"Feature\",\"id\":\"463123\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.705566644668579,53.77775573730469]},\"properties\":{\"OrganisationCode\":\"Q47\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Lancashire Area Team\",\"Address1\":\"Second Floor, Preston Business Centre\",\"Address2\":\"Watling Street Road\",\"Address3\":\"Fulwood\",\"City\":\"Preston\",\"County\":\"Lancashire\",\"Postcode\":\"PR2 8DY\",\"Phone\":\"01772 420150\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/lanc-at/\"}},{\"type\":\"Feature\",\"id\":\"463124\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.9802029132843018,53.38481903076172]},\"properties\":{\"OrganisationCode\":\"Q48\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Merseyside Area Team\",\"Address1\":\"Regatta Place\",\"Address2\":\"Summers Road\",\"Address3\":\"Brunswick Business Park\",\"City\":\"Liverpool\",\"County\":\"Merseyside\",\"Postcode\":\"L3 4BL\",\"Phone\":\"0151 285 4777\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/mers-at/\"}},{\"type\":\"Feature\",\"id\":\"463125\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.7141016721725464,54.96938705444336]},\"properties\":{\"OrganisationCode\":\"Q49\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Cumbria, Northumberland, Tyne And Wear Area Team\",\"Address1\":\"Waterfront\",\"Address2\":\"4 Goldcrest Way\",\"Address3\":\"Newburn\",\"City\":\"Newcastle Upon Tyne\",\"County\":\"Tyne and Wear\",\"Postcode\":\"NE15 8NY\",\"Phone\":\"01912 106400\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/cntw-at/\"}},{\"type\":\"Feature\",\"id\":\"463126\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.0497655868530273,53.989986419677734]},\"properties\":{\"OrganisationCode\":\"Q50\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"North Yorkshire And Humber Area Team\",\"Address1\":\"Unit 3\",\"Address2\":\"Alpha Court\",\"Address3\":\"Monks Cross\",\"City\":\"York\",\"County\":\"North Yorkshire\",\"Postcode\":\"YO32 9WN\",\"Phone\":\"0113 825 1845\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/nyh-at/\"}},{\"type\":\"Feature\",\"id\":\"463127\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.2550956010818481,53.42157745361328]},\"properties\":{\"OrganisationCode\":\"Q51\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"South Yorkshire And Bassetlaw Area Team\",\"Address1\":\"Oak House\",\"Address2\":\"Moorhead Way\",\"Address3\":\"Bramley\",\"City\":\"Rotherham\",\"County\":\"South Yorkshire\",\"Postcode\":\"S66 1YY\",\"Phone\":\"01709 302000\",\"Email\":\"england.syb-businessoffice@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/syb-at/\"}},{\"type\":\"Feature\",\"id\":\"463128\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.544582486152649,53.78975296020508]},\"properties\":{\"OrganisationCode\":\"Q52\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"West Yorkshire Area Team\",\"Address1\":\"3 Leeds City Office Park\",\"Address2\":\"Meadow Lane\",\"City\":\"Leeds\",\"County\":\"West Yorkshire\",\"Postcode\":\"LS11 5BD\",\"Phone\":\"0113 8252700\",\"Email\":\"reception.westyorkshireareateam@nhs.net\",\"Website\":\"http://www.england.nhs.uk/north/north/wy-at/\"}},{\"type\":\"Feature\",\"id\":\"463129\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.1813161373138428,52.18680953979492]},\"properties\":{\"OrganisationCode\":\"Q53\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Arden, Herefordshire And Worcestershire Area Team\",\"Address2\":\"Wildwood\",\"Address3\":\"Wildwood Drive\",\"City\":\"Worcester\",\"County\":\"Worcestershire\",\"Postcode\":\"WR5 2LG\",\"Phone\":\"0113 825 3099\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/ahw-at/\"}},{\"type\":\"Feature\",\"id\":\"463130\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.9351675510406494,52.471920013427734]},\"properties\":{\"OrganisationCode\":\"Q54\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Birmingham And The Black Country Area Team\",\"Address1\":\"St Chads Court\",\"Address2\":\"213 Hagley Road\",\"Address3\":\"Edgbaston\",\"City\":\"Birmingham\",\"County\":\"West Midlands\",\"Postcode\":\"B16 9RG\",\"Phone\":\"0121 695 2222\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/bsbc-at/\"}},{\"type\":\"Feature\",\"id\":\"463131\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.1435775756835938,53.12958526611328]},\"properties\":{\"OrganisationCode\":\"Q55\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Derbyshire And Nottinghamshire Area Team\",\"Address1\":\"Birch House\",\"Address2\":\"Ransom Wood Business Park\",\"Address3\":\"Southwell Road West, Rainworth\",\"City\":\"Nottingham\",\"County\":\"Nottinghamshire\",\"Postcode\":\"NG21 0HJ\",\"Phone\":\"0300 300 1234\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/dn-at/\"}},{\"type\":\"Feature\",\"id\":\"463132\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[0.19126050174236298,52.18547821044922]},\"properties\":{\"OrganisationCode\":\"Q56\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"East Anglia Area Team\",\"Address1\":\"CPC1\",\"Address2\":\"Capital Business Park\",\"Address3\":\"Fulbourn\",\"City\":\"Cambridge\",\"County\":\"Cambridgeshire\",\"Postcode\":\"CB21 5XE\",\"Phone\":\"01223 708700\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/ea-at/\"}},{\"type\":\"Feature\",\"id\":\"463133\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[0.5076583027839661,51.74932098388672]},\"properties\":{\"OrganisationCode\":\"Q57\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Essex Area Team\",\"Address1\":\"Swift House\",\"Address2\":\"Hedgerows Business Park\",\"Address3\":\"Colchester Road, Springfield\",\"City\":\"Chelmsford\",\"County\":\"Essex\",\"Postcode\":\"CM2 5PF\",\"Phone\":\"01245 398770\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/essex-at/\"}},{\"type\":\"Feature\",\"id\":\"463134\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-0.20884820818901062,51.8019905090332]},\"properties\":{\"OrganisationCode\":\"Q58\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Hertfordshire And The South Midlands Area Team\",\"Address1\":\"Charter House\",\"Address2\":\"Parkway\",\"City\":\"Welwyn Garden City\",\"County\":\"Hertfordshire\",\"Postcode\":\"AL8 6JL\",\"Phone\":\"01707 390855\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/hsm-at/\"}},{\"type\":\"Feature\",\"id\":\"463135\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.189500093460083,52.593223571777344]},\"properties\":{\"OrganisationCode\":\"Q59\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Leicestershire And Lincolnshire Area Team\",\"Address1\":\"Fosse House\",\"Address2\":\"6 Smith Way\",\"Address3\":\"Grove Park, Enderby\",\"City\":\"Leicester\",\"County\":\"Leicestershire\",\"Postcode\":\"LE19 1SX\",\"Phone\":\"0116 295 7500\",\"Email\":\"england.leicsandlincsareateam@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/ll-at/\"}},{\"type\":\"Feature\",\"id\":\"463136\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-1.9140186309814453,52.7487907409668]},\"properties\":{\"OrganisationCode\":\"Q60\",\"OrganisationType\":\"Area Team\",\"SubType\":\"UNKNOWN\",\"OrganisationStatus\":\"Visible\",\"IsPimsManaged\":\"True\",\"OrganisationName\":\"Shropshire And Staffordshire Area Team\",\"Address1\":\"Anglesey House,\",\"Address2\":\"Wheelhouse Road,\",\"Address3\":\"Towers Plaza,\",\"City\":\"Rugeley,\",\"County\":\"Staffordshire\",\"Postcode\":\"WS15 1UL\",\"Phone\":\"0300 7900233\",\"Email\":\"england.contactus@nhs.net\",\"Website\":\"http://www.england.nhs.uk/mids-east/mids-east-3/ss-at/\"}}]}\n"},"id":"8328cdeb-859f-49fd-a284-e04b8f2a09d7","type":"GeoJSONDataSource"},{"attributes":{"fill_alpha":{"value":0.9},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.9},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26ad0ee9-b11e-423e-8c51-74e8f70d1ad4","type":"Circle"},{"attributes":{"data_source":{"id":"8328cdeb-859f-49fd-a284-e04b8f2a09d7","type":"GeoJSONDataSource"},"glyph":{"id":"26ad0ee9-b11e-423e-8c51-74e8f70d1ad4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"fbdb3611-8e4f-4cd6-9482-4de43eacd114","type":"Circle"},"selection_glyph":null},"id":"e418d091-0da4-43ed-9a95-7093eee65c1b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba312258-e8db-49cd-a475-1eedbad9325e","type":"BasicTicker"}},"id":"31941f98-a870-4f43-b9af-ec2b98a5f836","type":"Grid"},{"attributes":{"below":[{"id":"a4cd790a-e9ed-4f9b-bb31-bb795d7995cd","type":"LinearAxis"}],"left":[{"id":"a441e77c-51dd-4981-94f0-180c437d83b3","type":"LinearAxis"}],"renderers":[{"id":"a4cd790a-e9ed-4f9b-bb31-bb795d7995cd","type":"LinearAxis"},{"id":"31941f98-a870-4f43-b9af-ec2b98a5f836","type":"Grid"},{"id":"a441e77c-51dd-4981-94f0-180c437d83b3","type":"LinearAxis"},{"id":"f06d46cb-0955-45fb-8c52-c1779e3bffa1","type":"Grid"},{"id":"aa62270d-a757-46b7-8494-57934ee97cea","type":"BoxAnnotation"},{"id":"e418d091-0da4-43ed-9a95-7093eee65c1b","type":"GlyphRenderer"}],"title":{"id":"bf533509-11a0-4cab-afec-51d1baabea48","type":"Title"},"tool_events":{"id":"eb60ec7b-2004-4b21-8e97-398828c17ef7","type":"ToolEvents"},"toolbar":{"id":"a7940430-744a-46c2-aa46-290bb79db2c9","type":"Toolbar"},"x_range":{"id":"7287051a-8445-4930-ae3c-209e5dfb6ae1","type":"DataRange1d"},"y_range":{"id":"a3da88b7-dde3-4539-accb-fa3be7ca531e","type":"DataRange1d"}},"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"eb60ec7b-2004-4b21-8e97-398828c17ef7","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fbdb3611-8e4f-4cd6-9482-4de43eacd114","type":"Circle"},{"attributes":{"overlay":{"id":"aa62270d-a757-46b7-8494-57934ee97cea","type":"BoxAnnotation"},"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"}},"id":"3defc178-85a4-4fb6-9f7f-a98989712ea3","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8e80bd8d-fb94-4e95-a203-09a078991a42","type":"PanTool"},{"id":"3bb88a4c-34cf-4024-94c3-fc2644752f30","type":"WheelZoomTool"},{"id":"3defc178-85a4-4fb6-9f7f-a98989712ea3","type":"BoxZoomTool"},{"id":"123b8ee9-4647-4346-92c5-9118fe9410e1","type":"SaveTool"},{"id":"a610c127-5aa8-45c4-88c5-6a1992bbd129","type":"ResetTool"},{"id":"6f0f47cb-b590-46f1-9d32-810c46ed4465","type":"HelpTool"}]},"id":"a7940430-744a-46c2-aa46-290bb79db2c9","type":"Toolbar"},{"attributes":{"callback":null},"id":"a3da88b7-dde3-4539-accb-fa3be7ca531e","type":"DataRange1d"},{"attributes":{"callback":null},"id":"7287051a-8445-4930-ae3c-209e5dfb6ae1","type":"DataRange1d"},{"attributes":{},"id":"fff36bd1-575d-485a-a299-49ff9adb8a0a","type":"BasicTickFormatter"},{"attributes":{},"id":"35cdc63e-bb2f-4f7d-be37-1abea3eaa018","type":"BasicTicker"},{"attributes":{"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"}},"id":"8e80bd8d-fb94-4e95-a203-09a078991a42","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"},"ticker":{"id":"35cdc63e-bb2f-4f7d-be37-1abea3eaa018","type":"BasicTicker"}},"id":"f06d46cb-0955-45fb-8c52-c1779e3bffa1","type":"Grid"},{"attributes":{},"id":"ba312258-e8db-49cd-a475-1eedbad9325e","type":"BasicTicker"},{"attributes":{},"id":"f07f64b9-7507-4e34-816e-e896ccb757a0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"}},"id":"3bb88a4c-34cf-4024-94c3-fc2644752f30","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"f07f64b9-7507-4e34-816e-e896ccb757a0","type":"BasicTickFormatter"},"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba312258-e8db-49cd-a475-1eedbad9325e","type":"BasicTicker"}},"id":"a4cd790a-e9ed-4f9b-bb31-bb795d7995cd","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"bf533509-11a0-4cab-afec-51d1baabea48","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aa62270d-a757-46b7-8494-57934ee97cea","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"}},"id":"6f0f47cb-b590-46f1-9d32-810c46ed4465","type":"HelpTool"},{"attributes":{"plot":{"id":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb","subtype":"Figure","type":"Plot"}},"id":"123b8ee9-4647-4346-92c5-9118fe9410e1","type":"SaveTool"}],"root_ids":["abd6eea7-95db-48e2-a3f3-bfef0fe305fb"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"f3e382be-b712-4f57-82c4-96a3c1b69853","elementid":"8cf36de4-ecfb-4c24-b053-41e1c1b25046","modelid":"abd6eea7-95db-48e2-a3f3-bfef0fe305fb"}];
                  
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