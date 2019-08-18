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
      };var element = document.getElementById("aa0d982c-7361-4973-8770-2286f40f0f99");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa0d982c-7361-4973-8770-2286f40f0f99' but no matching script tag was found. ")
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
                  var docs_json = {"da4b044b-13ed-43b4-8475-ef413e5b6ebb":{"roots":{"references":[{"attributes":{},"id":"71ebee5a-e103-452f-928a-240b93a55c1f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.25318490714749853,0.5022959743621584,0.7433249113206551,0.9723934722009374,1.1858158581092808,1.380158022964224,1.5522929285835136,1.6994508598990288,1.8192639907090367,1.9098044828881477,1.969615506024416,1.997734678366016,1.9937095519038848,1.9576048924295575,1.890001637429337,1.7919875485826717,1.6651397092695428,1.5114991487085165,1.3335380010325835,1.1341197277255417,0.916453043454821,0.6840402866513378,0.4406210655730816,0.19011208660836487,-0.06345586699613572,-0.31600279194670017,-0.5634651136828597,-0.8018610708132275,-1.0273547831468128,-1.2363179724412106,-1.4253883427577259,-1.5915236810616642,-1.7320508075688776,-1.8447085882091627,-1.9276843171198843,-1.9796428837618654,-1.9997482553477501,-1.9876769289225082,-1.9436231366470833,-1.8682957205302135,-1.762906726895164,-1.6291519041006717,-1.4691834173150664,-1.2855752193730792,-1.0812816349111949,-0.8595898241783438,-0.6240668913969741,-0.3785024887208195,-0.12684783931312904,0.12684783931312985,0.37850248872082026,0.6240668913969749,0.859589824178343,1.0812816349111956,1.2855752193730783,1.4691834173150669,1.6291519041006712,1.7629067268951641,1.8682957205302133,1.9436231366470835,1.9876769289225082,1.9997482553477501,1.9796428837618656,1.927684317119884,1.8447085882091632,1.7320508075688765,1.5915236810616638,1.4253883427577259,1.2363179724412112,1.0273547831468115,0.8018610708132269,0.5634651136828598,0.3160027919467011,0.06345586699613402,-0.19011208660836565,-0.4406210655730807,-0.684040286651336,-0.9164530434548217,-1.1341197277255415,-1.3335380010325826,-1.5114991487085176,-1.6651397092695432,-1.7919875485826717,-1.8900016374293367,-1.9576048924295577,-1.9937095519038848,-1.997734678366016,-1.9696155060244163,-1.9098044828881473,-1.8192639907090367,-1.699450859899029,-1.5522929285835145,-1.3801580229642232,-1.1858158581092808,-0.9723934722009381,-0.7433249113206534,-0.5022959743621576,-0.2531849071474986,-9.797174393178826e-16]}},"id":"110954d2-e75b-4d00-b8f7-06d3d5d8d248","type":"ColumnDataSource"},{"attributes":{},"id":"3a6a43b1-bb03-4e8c-9dd6-0fa1d97a37b3","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c48f18c4-1e38-4e4a-a297-c80c09f455d6","type":"Line"},{"attributes":{},"id":"cd58b20d-2bb2-437c-9c14-7b008ab0f72f","type":"BasicTickFormatter"},{"attributes":{},"id":"aaeac164-0140-4be5-84be-4b6c676f000d","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.12659245357374926,0.2511479871810792,0.3716624556603276,0.4861967361004687,0.5929079290546404,0.690079011482112,0.7761464642917568,0.8497254299495144,0.9096319953545183,0.9549022414440739,0.984807753012208,0.998867339183008,0.9968547759519424,0.9788024462147787,0.9450008187146685,0.8959937742913359,0.8325698546347714,0.7557495743542583,0.6667690005162917,0.5670598638627709,0.4582265217274105,0.3420201433256689,0.2203105327865408,0.09505604330418244,-0.03172793349806786,-0.15800139597335008,-0.28173255684142984,-0.4009305354066138,-0.5136773915734064,-0.6181589862206053,-0.7126941713788629,-0.7957618405308321,-0.8660254037844388,-0.9223542941045814,-0.9638421585599422,-0.9898214418809327,-0.9998741276738751,-0.9938384644612541,-0.9718115683235417,-0.9341478602651068,-0.881453363447582,-0.8145759520503358,-0.7345917086575332,-0.6427876096865396,-0.5406408174555974,-0.4297949120891719,-0.31203344569848707,-0.18925124436040974,-0.06342391965656452,0.06342391965656492,0.18925124436041013,0.31203344569848745,0.4297949120891715,0.5406408174555978,0.6427876096865391,0.7345917086575334,0.8145759520503356,0.8814533634475821,0.9341478602651067,0.9718115683235418,0.9938384644612541,0.9998741276738751,0.9898214418809328,0.963842158559942,0.9223542941045816,0.8660254037844383,0.7957618405308319,0.7126941713788629,0.6181589862206056,0.5136773915734058,0.40093053540661344,0.2817325568414299,0.15800139597335056,0.03172793349806701,-0.09505604330418282,-0.22031053278654034,-0.342020143325668,-0.45822652172741085,-0.5670598638627707,-0.6667690005162913,-0.7557495743542588,-0.8325698546347716,-0.8959937742913359,-0.9450008187146683,-0.9788024462147789,-0.9968547759519424,-0.998867339183008,-0.9848077530122081,-0.9549022414440737,-0.9096319953545183,-0.8497254299495145,-0.7761464642917573,-0.6900790114821116,-0.5929079290546404,-0.48619673610046904,-0.3716624556603267,-0.2511479871810788,-0.1265924535737493,-4.898587196589413e-16]}},"id":"7b215904-2ef6-42c6-886e-2b40bb2d6442","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a3086cb2-e99d-47f0-97c3-ca1eebebd5c2","type":"BoxAnnotation"},{"attributes":{},"id":"924ec8de-5ab9-477d-bdf1-327243475a56","type":"BasicTicker"},{"attributes":{"below":[{"id":"da22a72a-12d1-4b24-9b7b-7751d80d3690","type":"LinearAxis"}],"left":[{"id":"a9301acd-c28a-4d90-87ed-0e2f7e9e7c8e","type":"LinearAxis"}],"renderers":[{"id":"da22a72a-12d1-4b24-9b7b-7751d80d3690","type":"LinearAxis"},{"id":"b21613d2-710a-4931-9ebc-02d02b62cc36","type":"Grid"},{"id":"a9301acd-c28a-4d90-87ed-0e2f7e9e7c8e","type":"LinearAxis"},{"id":"11946348-8ae7-4ca4-8b37-c4a2ee734e26","type":"Grid"},{"id":"a3086cb2-e99d-47f0-97c3-ca1eebebd5c2","type":"BoxAnnotation"},{"id":"db22dbc2-8e72-415d-942a-ad13b7f3f904","type":"Legend"},{"id":"94c9a3da-70b8-48dd-bbe5-1221b9318b09","type":"GlyphRenderer"},{"id":"f72b7452-c619-4ae2-bd99-c13babe4dc2a","type":"GlyphRenderer"},{"id":"1445afb0-fa19-48c4-86ec-ea07f5e8adbd","type":"GlyphRenderer"},{"id":"6ae03736-76a2-4d9a-9e9d-d6c307ee2698","type":"GlyphRenderer"},{"id":"a35b2268-c94e-4e9c-ba3c-9ca42bef6004","type":"GlyphRenderer"}],"title":{"id":"c1ca70af-94f2-40d6-af43-12e6d71da8b8","type":"Title"},"tool_events":{"id":"aaeac164-0140-4be5-84be-4b6c676f000d","type":"ToolEvents"},"toolbar":{"id":"3e4900a7-8143-4596-bc92-466361a78ba0","type":"Toolbar"},"x_range":{"id":"9ea79be5-0025-4d1b-a368-f4d74e12494b","type":"DataRange1d"},"y_range":{"id":"340e8901-a4fa-47ea-87ec-e977fb79192b","type":"DataRange1d"}},"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"1445afb0-fa19-48c4-86ec-ea07f5e8adbd","type":"GlyphRenderer"}]},"id":"5ce4b4bd-7fc8-4e23-81fc-0989406afcbc","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"426e4ffa-25d2-4f36-ac09-cc94e632114e","type":"Circle"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a91b71f8-276e-4e51-b987-e87ffc330a73","type":"Line"},{"attributes":{"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"}},"id":"17e261b9-b82d-4402-ba28-e1c9744fafc6","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6cb72a1f-3bcf-4140-8ab2-78213a104fc2","type":"Square"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f48832c1-f8c9-422b-b318-0c8d95c67078","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.3797773607212478,0.7534439615432377,1.1149873669809827,1.4585902083014062,1.7787237871639212,2.070237034446336,2.3284393928752705,2.549176289848543,2.728895986063555,2.8647067243322217,2.954423259036624,2.9966020175490238,2.990564327855827,2.936407338644336,2.8350024561440055,2.6879813228740077,2.4977095639043143,2.267248723062775,2.000307001548875,1.7011795915883126,1.3746795651822317,1.0260604299770066,0.6609315983596225,0.2851681299125473,-0.09518380049420358,-0.4740041879200503,-0.8451976705242895,-1.2027916062198414,-1.5410321747202191,-1.8544769586618157,-2.1380825141365887,-2.387285521592496,-2.5980762113533165,-2.767062882313744,-2.8915264756798265,-2.969464325642798,-2.999622383021625,-2.9815153933837624,-2.915434704970625,-2.8024435807953205,-2.644360090342746,-2.4437278561510074,-2.2037751259725997,-1.9283628290596186,-1.6219224523667923,-1.2893847362675157,-0.9361003370954613,-0.5677537330812292,-0.19027175896969356,0.19027175896969478,0.5677537330812303,0.9361003370954624,1.2893847362675144,1.6219224523667934,1.9283628290596173,2.2037751259726,2.443727856151007,2.6443600903427464,2.80244358079532,2.9154347049706253,2.9815153933837624,2.999622383021625,2.9694643256427984,2.891526475679826,2.767062882313745,2.5980762113533147,2.3872855215924957,2.1380825141365887,1.8544769586618168,1.5410321747202174,1.2027916062198403,0.8451976705242896,0.47400418792005167,0.09518380049420103,-0.2851681299125485,-0.660931598359621,-1.026060429977004,-1.3746795651822326,-1.7011795915883123,-2.0003070015488738,-2.2672487230627763,-2.4977095639043148,-2.6879813228740077,-2.835002456144005,-2.9364073386443366,-2.990564327855827,-2.9966020175490238,-2.9544232590366244,-2.864706724332221,-2.728895986063555,-2.5491762898485435,-2.328439392875272,-2.070237034446335,-1.7787237871639212,-1.458590208301407,-1.11498736698098,-0.7534439615432363,-0.3797773607212479,-1.4695761589768238e-15]}},"id":"6a26cfb3-3bd6-4e5b-9503-b550ab3e1ef5","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"},"ticker":{"id":"924ec8de-5ab9-477d-bdf1-327243475a56","type":"BasicTicker"}},"id":"11946348-8ae7-4ca4-8b37-c4a2ee734e26","type":"Grid"},{"attributes":{"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"}},"id":"3e07e035-ffb3-46f6-b782-56120396bf68","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f7c204e-ddb4-41cc-b165-e9d26973f254","type":"Circle"},{"attributes":{"plot":null,"text":null},"id":"c1ca70af-94f2-40d6-af43-12e6d71da8b8","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.3797773607212478,0.7534439615432377,1.1149873669809827,1.4585902083014062,1.7787237871639212,2.070237034446336,2.3284393928752705,2.549176289848543,2.728895986063555,2.8647067243322217,2.954423259036624,2.9966020175490238,2.990564327855827,2.936407338644336,2.8350024561440055,2.6879813228740077,2.4977095639043143,2.267248723062775,2.000307001548875,1.7011795915883126,1.3746795651822317,1.0260604299770066,0.6609315983596225,0.2851681299125473,-0.09518380049420358,-0.4740041879200503,-0.8451976705242895,-1.2027916062198414,-1.5410321747202191,-1.8544769586618157,-2.1380825141365887,-2.387285521592496,-2.5980762113533165,-2.767062882313744,-2.8915264756798265,-2.969464325642798,-2.999622383021625,-2.9815153933837624,-2.915434704970625,-2.8024435807953205,-2.644360090342746,-2.4437278561510074,-2.2037751259725997,-1.9283628290596186,-1.6219224523667923,-1.2893847362675157,-0.9361003370954613,-0.5677537330812292,-0.19027175896969356,0.19027175896969478,0.5677537330812303,0.9361003370954624,1.2893847362675144,1.6219224523667934,1.9283628290596173,2.2037751259726,2.443727856151007,2.6443600903427464,2.80244358079532,2.9154347049706253,2.9815153933837624,2.999622383021625,2.9694643256427984,2.891526475679826,2.767062882313745,2.5980762113533147,2.3872855215924957,2.1380825141365887,1.8544769586618168,1.5410321747202174,1.2027916062198403,0.8451976705242896,0.47400418792005167,0.09518380049420103,-0.2851681299125485,-0.660931598359621,-1.026060429977004,-1.3746795651822326,-1.7011795915883123,-2.0003070015488738,-2.2672487230627763,-2.4977095639043148,-2.6879813228740077,-2.835002456144005,-2.9364073386443366,-2.990564327855827,-2.9966020175490238,-2.9544232590366244,-2.864706724332221,-2.728895986063555,-2.5491762898485435,-2.328439392875272,-2.070237034446335,-1.7787237871639212,-1.458590208301407,-1.11498736698098,-0.7534439615432363,-0.3797773607212479,-1.4695761589768238e-15]}},"id":"1ec32a94-29bd-40d9-a681-0336a74d8329","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9ea79be5-0025-4d1b-a368-f4d74e12494b","type":"DataRange1d"},{"attributes":{"overlay":{"id":"a3086cb2-e99d-47f0-97c3-ca1eebebd5c2","type":"BoxAnnotation"},"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"}},"id":"9bb41135-6ea1-475a-b532-7ad00aeb2d65","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"7b215904-2ef6-42c6-886e-2b40bb2d6442","type":"ColumnDataSource"},"glyph":{"id":"a91b71f8-276e-4e51-b987-e87ffc330a73","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"f48832c1-f8c9-422b-b318-0c8d95c67078","type":"Line"},"selection_glyph":null},"id":"f72b7452-c619-4ae2-bd99-c13babe4dc2a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6a26cfb3-3bd6-4e5b-9503-b550ab3e1ef5","type":"ColumnDataSource"},"glyph":{"id":"03087ea3-21d8-480f-bed7-cfa3b69e6fa2","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"6cb72a1f-3bcf-4140-8ab2-78213a104fc2","type":"Square"},"selection_glyph":null},"id":"6ae03736-76a2-4d9a-9e9d-d6c307ee2698","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"110954d2-e75b-4d00-b8f7-06d3d5d8d248","type":"ColumnDataSource"},"glyph":{"id":"eefdaecc-c665-44b4-95a0-2e1ddc074a3b","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"c700ed6f-75a8-4602-bf38-2f21bd29e823","type":"Line"},"selection_glyph":null},"id":"1445afb0-fa19-48c4-86ec-ea07f5e8adbd","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"03087ea3-21d8-480f-bed7-cfa3b69e6fa2","type":"Square"},{"attributes":{"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"}},"id":"0cae1e00-472f-47ae-9197-2e9714fa8534","type":"PanTool"},{"attributes":{"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a6a43b1-bb03-4e8c-9dd6-0fa1d97a37b3","type":"BasicTicker"}},"id":"b21613d2-710a-4931-9ebc-02d02b62cc36","type":"Grid"},{"attributes":{"data_source":{"id":"34ff4bd2-755b-4fae-9ecf-0a72520b1a40","type":"ColumnDataSource"},"glyph":{"id":"5f7c204e-ddb4-41cc-b165-e9d26973f254","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"426e4ffa-25d2-4f36-ac09-cc94e632114e","type":"Circle"},"selection_glyph":null},"id":"94c9a3da-70b8-48dd-bbe5-1221b9318b09","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"}},"id":"d8cd1ce7-e75e-4c45-baff-238d33907f25","type":"SaveTool"},{"attributes":{"data_source":{"id":"1ec32a94-29bd-40d9-a681-0336a74d8329","type":"ColumnDataSource"},"glyph":{"id":"5eea9c9e-5e5d-4e78-b38d-bac805b54c51","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"c48f18c4-1e38-4e4a-a297-c80c09f455d6","type":"Line"},"selection_glyph":null},"id":"a35b2268-c94e-4e9c-ba3c-9ca42bef6004","type":"GlyphRenderer"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"94c9a3da-70b8-48dd-bbe5-1221b9318b09","type":"GlyphRenderer"},{"id":"f72b7452-c619-4ae2-bd99-c13babe4dc2a","type":"GlyphRenderer"}]},"id":"e44dd218-9f4f-433f-838d-e3a55b961bcc","type":"LegendItem"},{"attributes":{"callback":null},"id":"340e8901-a4fa-47ea-87ec-e977fb79192b","type":"DataRange1d"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"6ae03736-76a2-4d9a-9e9d-d6c307ee2698","type":"GlyphRenderer"},{"id":"a35b2268-c94e-4e9c-ba3c-9ca42bef6004","type":"GlyphRenderer"}]},"id":"7dbf5865-21b0-4238-8440-2a941c3c3a7e","type":"LegendItem"},{"attributes":{"formatter":{"id":"cd58b20d-2bb2-437c-9c14-7b008ab0f72f","type":"BasicTickFormatter"},"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a6a43b1-bb03-4e8c-9dd6-0fa1d97a37b3","type":"BasicTicker"}},"id":"da22a72a-12d1-4b24-9b7b-7751d80d3690","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.12693303650867852,0.25386607301735703,0.3807991095260356,0.5077321460347141,0.6346651825433925,0.7615982190520711,0.8885312555607496,1.0154642920694281,1.1423973285781066,1.269330365086785,1.3962634015954636,1.5231964381041423,1.6501294746128208,1.7770625111214993,1.9039955476301778,2.0309285841388562,2.1578616206475347,2.284794657156213,2.4117276936648917,2.53866073017357,2.6655937666822487,2.792526803190927,2.9194598396996057,3.0463928762082846,3.173325912716963,3.3002589492256416,3.42719198573432,3.5541250222429985,3.681058058751677,3.8079910952603555,3.934924131769034,4.0618571682777125,4.188790204786391,4.3157232412950695,4.442656277803748,4.569589314312426,4.696522350821105,4.823455387329783,4.950388423838462,5.07732146034714,5.204254496855819,5.331187533364497,5.458120569873176,5.585053606381854,5.711986642890533,5.838919679399211,5.96585271590789,6.092785752416569,6.219718788925247,6.346651825433926,6.473584861942604,6.600517898451283,6.727450934959961,6.85438397146864,6.981317007977318,7.108250044485997,7.235183080994675,7.362116117503354,7.489049154012032,7.615982190520711,7.742915227029389,7.869848263538068,7.996781300046746,8.123714336555425,8.250647373064103,8.377580409572783,8.50451344608146,8.631446482590139,8.758379519098817,8.885312555607497,9.012245592116175,9.139178628624853,9.266111665133531,9.39304470164221,9.519977738150889,9.646910774659567,9.773843811168245,9.900776847676925,10.027709884185603,10.15464292069428,10.28157595720296,10.408508993711639,10.535442030220317,10.662375066728995,10.789308103237675,10.916241139746353,11.04317417625503,11.170107212763709,11.297040249272388,11.423973285781067,11.550906322289745,11.677839358798423,11.804772395307102,11.93170543181578,12.058638468324459,12.185571504833138,12.312504541341816,12.439437577850494,12.566370614359172],"y":[0.0,0.12659245357374926,0.2511479871810792,0.3716624556603276,0.4861967361004687,0.5929079290546404,0.690079011482112,0.7761464642917568,0.8497254299495144,0.9096319953545183,0.9549022414440739,0.984807753012208,0.998867339183008,0.9968547759519424,0.9788024462147787,0.9450008187146685,0.8959937742913359,0.8325698546347714,0.7557495743542583,0.6667690005162917,0.5670598638627709,0.4582265217274105,0.3420201433256689,0.2203105327865408,0.09505604330418244,-0.03172793349806786,-0.15800139597335008,-0.28173255684142984,-0.4009305354066138,-0.5136773915734064,-0.6181589862206053,-0.7126941713788629,-0.7957618405308321,-0.8660254037844388,-0.9223542941045814,-0.9638421585599422,-0.9898214418809327,-0.9998741276738751,-0.9938384644612541,-0.9718115683235417,-0.9341478602651068,-0.881453363447582,-0.8145759520503358,-0.7345917086575332,-0.6427876096865396,-0.5406408174555974,-0.4297949120891719,-0.31203344569848707,-0.18925124436040974,-0.06342391965656452,0.06342391965656492,0.18925124436041013,0.31203344569848745,0.4297949120891715,0.5406408174555978,0.6427876096865391,0.7345917086575334,0.8145759520503356,0.8814533634475821,0.9341478602651067,0.9718115683235418,0.9938384644612541,0.9998741276738751,0.9898214418809328,0.963842158559942,0.9223542941045816,0.8660254037844383,0.7957618405308319,0.7126941713788629,0.6181589862206056,0.5136773915734058,0.40093053540661344,0.2817325568414299,0.15800139597335056,0.03172793349806701,-0.09505604330418282,-0.22031053278654034,-0.342020143325668,-0.45822652172741085,-0.5670598638627707,-0.6667690005162913,-0.7557495743542588,-0.8325698546347716,-0.8959937742913359,-0.9450008187146683,-0.9788024462147789,-0.9968547759519424,-0.998867339183008,-0.9848077530122081,-0.9549022414440737,-0.9096319953545183,-0.8497254299495145,-0.7761464642917573,-0.6900790114821116,-0.5929079290546404,-0.48619673610046904,-0.3716624556603267,-0.2511479871810788,-0.1265924535737493,-4.898587196589413e-16]}},"id":"34ff4bd2-755b-4fae-9ecf-0a72520b1a40","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"eefdaecc-c665-44b4-95a0-2e1ddc074a3b","type":"Line"},{"attributes":{"formatter":{"id":"71ebee5a-e103-452f-928a-240b93a55c1f","type":"BasicTickFormatter"},"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"},"ticker":{"id":"924ec8de-5ab9-477d-bdf1-327243475a56","type":"BasicTicker"}},"id":"a9301acd-c28a-4d90-87ed-0e2f7e9e7c8e","type":"LinearAxis"},{"attributes":{"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"}},"id":"ead2809c-7579-4832-a900-36e537f50582","type":"ResetTool"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5eea9c9e-5e5d-4e78-b38d-bac805b54c51","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c700ed6f-75a8-4602-bf38-2f21bd29e823","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0cae1e00-472f-47ae-9197-2e9714fa8534","type":"PanTool"},{"id":"3e07e035-ffb3-46f6-b782-56120396bf68","type":"WheelZoomTool"},{"id":"9bb41135-6ea1-475a-b532-7ad00aeb2d65","type":"BoxZoomTool"},{"id":"d8cd1ce7-e75e-4c45-baff-238d33907f25","type":"SaveTool"},{"id":"ead2809c-7579-4832-a900-36e537f50582","type":"ResetTool"},{"id":"17e261b9-b82d-4402-ba28-e1c9744fafc6","type":"HelpTool"}]},"id":"3e4900a7-8143-4596-bc92-466361a78ba0","type":"Toolbar"},{"attributes":{"border_line_color":{"value":"navy"},"border_line_width":{"value":3},"items":[{"id":"e44dd218-9f4f-433f-838d-e3a55b961bcc","type":"LegendItem"},{"id":"5ce4b4bd-7fc8-4e23-81fc-0989406afcbc","type":"LegendItem"},{"id":"7dbf5865-21b0-4238-8440-2a941c3c3a7e","type":"LegendItem"}],"plot":{"id":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22","subtype":"Figure","type":"Plot"}},"id":"db22dbc2-8e72-415d-942a-ad13b7f3f904","type":"Legend"}],"root_ids":["5e22ff1d-fa47-4532-ab66-5aed02cdfd22"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"da4b044b-13ed-43b4-8475-ef413e5b6ebb","elementid":"aa0d982c-7361-4973-8770-2286f40f0f99","modelid":"5e22ff1d-fa47-4532-ab66-5aed02cdfd22"}];
                  
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