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
      };var element = document.getElementById("d7bd491a-575b-4dcd-9e73-cf8bfbff9a38");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7bd491a-575b-4dcd-9e73-cf8bfbff9a38' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
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
          "LatexLabel": require("custom/fake.latex_label"),
          "MyFormatter": require("custom/fake.my_formatter")
                }
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
          
          }, {}]
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"9b535d8e-7f31-45c9-ac40-3dbc785fe315":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[],"y":[]}},"id":"8b95716d-4830-4f05-9918-65637634ad42","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":10},"id":"cf6a82fb-5e0a-452f-b1ea-4164ee1c6d28","type":"Range1d"},{"attributes":{},"id":"ba5a8357-c7e6-440f-95f4-3f8fa6f489f4","type":"BasicTicker"},{"attributes":{},"id":"e329e635-6df7-482e-a5c2-507c3177ceeb","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"90fab20a-02c5-4584-8741-90e952c43395","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba5a8357-c7e6-440f-95f4-3f8fa6f489f4","type":"BasicTicker"}},"id":"5b4e3f89-180d-4cda-b9c0-a0f419d8167b","type":"Grid"},{"attributes":{},"id":"3bd29a7b-454f-46e2-b6f2-e60968bf0b5b","type":"ToolEvents"},{"attributes":{"callback":null,"end":10},"id":"7558c1ee-b2f3-4124-98ba-e134fc493a05","type":"Range1d"},{"attributes":{"formatter":{"id":"e329e635-6df7-482e-a5c2-507c3177ceeb","type":"BasicTickFormatter"},"plot":{"id":"90fab20a-02c5-4584-8741-90e952c43395","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba5a8357-c7e6-440f-95f4-3f8fa6f489f4","type":"BasicTicker"}},"id":"aa0cf3c8-75e8-43e3-8c8b-250cd31e9805","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"97bfd078-4a02-48e5-8584-dadff4aedb9b","type":"Line"},{"attributes":{"formatter":{"id":"7d78bfff-c180-486b-96bc-5bcd0b573b11","type":"BasicTickFormatter"},"plot":{"id":"90fab20a-02c5-4584-8741-90e952c43395","subtype":"Figure","type":"Plot"},"ticker":{"id":"11507992-722b-4d94-8357-0b60dcca7329","type":"BasicTicker"}},"id":"dd2c991d-5ce9-4583-9af3-4e4833b60c94","type":"LinearAxis"},{"attributes":{"plot":{"id":"90fab20a-02c5-4584-8741-90e952c43395","subtype":"Figure","type":"Plot"},"source":{"id":"8b95716d-4830-4f05-9918-65637634ad42","type":"ColumnDataSource"}},"id":"b1e80f00-c8eb-42a7-8785-c82af021927a","type":"DrawTool"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"9a6a55d5-f4d6-4672-ab1a-58edbc732635","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"90fab20a-02c5-4584-8741-90e952c43395","subtype":"Figure","type":"Plot"},"ticker":{"id":"11507992-722b-4d94-8357-0b60dcca7329","type":"BasicTicker"}},"id":"760c7ff4-e0f7-43c8-91b8-d7889be0fcf5","type":"Grid"},{"attributes":{},"id":"7d78bfff-c180-486b-96bc-5bcd0b573b11","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"aa0cf3c8-75e8-43e3-8c8b-250cd31e9805","type":"LinearAxis"}],"left":[{"id":"dd2c991d-5ce9-4583-9af3-4e4833b60c94","type":"LinearAxis"}],"renderers":[{"id":"aa0cf3c8-75e8-43e3-8c8b-250cd31e9805","type":"LinearAxis"},{"id":"5b4e3f89-180d-4cda-b9c0-a0f419d8167b","type":"Grid"},{"id":"dd2c991d-5ce9-4583-9af3-4e4833b60c94","type":"LinearAxis"},{"id":"760c7ff4-e0f7-43c8-91b8-d7889be0fcf5","type":"Grid"},{"id":"3b9ace39-23d3-48fe-9ea8-b77c0a6f2941","type":"GlyphRenderer"}],"title":{"id":"9a6a55d5-f4d6-4672-ab1a-58edbc732635","type":"Title"},"tool_events":{"id":"3bd29a7b-454f-46e2-b6f2-e60968bf0b5b","type":"ToolEvents"},"toolbar":{"id":"c2868cd8-113b-4f86-b5b1-0604ce8a0bd7","type":"Toolbar"},"x_range":{"id":"7558c1ee-b2f3-4124-98ba-e134fc493a05","type":"Range1d"},"y_range":{"id":"cf6a82fb-5e0a-452f-b1ea-4164ee1c6d28","type":"Range1d"}},"id":"90fab20a-02c5-4584-8741-90e952c43395","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0e10c25-4792-4f71-9faa-aaaad06fd391","type":"Line"},{"attributes":{},"id":"11507992-722b-4d94-8357-0b60dcca7329","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b1e80f00-c8eb-42a7-8785-c82af021927a","type":"DrawTool"}]},"id":"c2868cd8-113b-4f86-b5b1-0604ce8a0bd7","type":"Toolbar"},{"attributes":{"data_source":{"id":"8b95716d-4830-4f05-9918-65637634ad42","type":"ColumnDataSource"},"glyph":{"id":"e0e10c25-4792-4f71-9faa-aaaad06fd391","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"97bfd078-4a02-48e5-8584-dadff4aedb9b","type":"Line"},"selection_glyph":null},"id":"3b9ace39-23d3-48fe-9ea8-b77c0a6f2941","type":"GlyphRenderer"}],"root_ids":["90fab20a-02c5-4584-8741-90e952c43395"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"9b535d8e-7f31-45c9-ac40-3dbc785fe315","elementid":"d7bd491a-575b-4dcd-9e73-cf8bfbff9a38","modelid":"90fab20a-02c5-4584-8741-90e952c43395"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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