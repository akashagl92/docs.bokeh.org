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
      };var element = document.getElementById("11b665ef-1636-4f50-8c26-a39df8556881");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '11b665ef-1636-4f50-8c26-a39df8556881' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                "MyFormatter": require("custom/bk_script_466629d5697845ceb42556beea3046f7.my_formatter").MyFormatter,
          "LatexLabel": require("custom/bk_script_df57e6d13ff744c395282f69bdb1d1d0.latex_label").LatexLabel
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_466629d5697845ceb42556beea3046f7.my_formatter": function(require, module, exports) {
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
          "custom/bk_script_df57e6d13ff744c395282f69bdb1d1d0.latex_label": function(require, module, exports) {
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
                    
                  var docs_json = '{"db0afb31-f2c9-4daf-8ae7-9cb3875d6793":{"roots":{"references":[{"attributes":{},"id":"fbd19ddc-7872-41e4-9c07-9a0140828865","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"77815946-c765-4946-b61b-4b2d563de1d0","type":"MyFormatter"},"plot":{"id":"390f0565-14fa-4c5c-b2e7-c96c99f0c799","subtype":"Figure","type":"Plot"},"ticker":{"id":"db185ba2-34fb-455f-8bf8-76a66ca07233","type":"BasicTicker"}},"id":"7e70a918-d706-4498-9b54-ed91c20d374b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9641f610-d8b5-4544-9945-da36f9b98b29","type":"DataRange1d"},{"attributes":{},"id":"71cf7c09-a27f-4da4-af44-d9379be40fc5","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7bb40ffa-fb0f-4dcd-a6a3-11543f4c04f5","type":"DataRange1d"},{"attributes":{},"id":"3906eb01-fc2a-4a00-baad-b13901f776d6","type":"LinearScale"},{"attributes":{},"id":"3a7387a1-d2c4-4083-a4f7-ed2bc68ecaac","type":"PanTool"},{"attributes":{},"id":"00761fec-75a7-48e2-906b-0ab6c0d11f4f","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"df9b2c8b-a871-4f60-bcf8-bcfab3d8d1d5","type":"Circle"},{"attributes":{},"id":"77aa77cb-2c85-4be4-b797-6ba45755a7d2","type":"LinearScale"},{"attributes":{"plot":{"id":"390f0565-14fa-4c5c-b2e7-c96c99f0c799","subtype":"Figure","type":"Plot"},"ticker":{"id":"db185ba2-34fb-455f-8bf8-76a66ca07233","type":"BasicTicker"}},"id":"05bc5658-10fd-48f5-99a6-a96027ea9ac6","type":"Grid"},{"attributes":{"source":{"id":"f30275eb-195b-428a-a04b-18198bca7038","type":"ColumnDataSource"}},"id":"852b78aa-eb4c-4a67-997c-68587c71f83a","type":"CDSView"},{"attributes":{"formatter":{"id":"fbd19ddc-7872-41e4-9c07-9a0140828865","type":"BasicTickFormatter"},"plot":{"id":"390f0565-14fa-4c5c-b2e7-c96c99f0c799","subtype":"Figure","type":"Plot"},"ticker":{"id":"71cf7c09-a27f-4da4-af44-d9379be40fc5","type":"BasicTicker"}},"id":"dc92819b-a7c5-476b-b977-49f079ea7f74","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"06ffd984-5683-483d-abfc-6fd71fdb4771","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ac516823-46c1-4326-9915-72f1c7a83f85","type":"BoxAnnotation"},{"attributes":{},"id":"db185ba2-34fb-455f-8bf8-76a66ca07233","type":"BasicTicker"},{"attributes":{},"id":"e432061f-f999-4929-8855-86db4ea6bcb8","type":"HelpTool"},{"attributes":{"overlay":{"id":"ac516823-46c1-4326-9915-72f1c7a83f85","type":"BoxAnnotation"}},"id":"5c02615b-657c-4e6d-9d44-f0e9d1fba9c1","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"f30275eb-195b-428a-a04b-18198bca7038","type":"ColumnDataSource"},"glyph":{"id":"184c81d0-7b26-4db3-9e70-798c25a7277f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"df9b2c8b-a871-4f60-bcf8-bcfab3d8d1d5","type":"Circle"},"selection_glyph":null,"view":{"id":"852b78aa-eb4c-4a67-997c-68587c71f83a","type":"CDSView"}},"id":"d60ba573-bc7c-4ebb-8c80-b120b9a21174","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"f30275eb-195b-428a-a04b-18198bca7038","type":"ColumnDataSource"},{"attributes":{},"id":"59925a88-b46e-4f45-82c0-9190a784fb32","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"390f0565-14fa-4c5c-b2e7-c96c99f0c799","subtype":"Figure","type":"Plot"},"ticker":{"id":"71cf7c09-a27f-4da4-af44-d9379be40fc5","type":"BasicTicker"}},"id":"bb0f2752-52f2-412e-9790-6894f5136622","type":"Grid"},{"attributes":{},"id":"77815946-c765-4946-b61b-4b2d563de1d0","type":"MyFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"184c81d0-7b26-4db3-9e70-798c25a7277f","type":"Circle"},{"attributes":{"below":[{"id":"7e70a918-d706-4498-9b54-ed91c20d374b","type":"LinearAxis"}],"left":[{"id":"dc92819b-a7c5-476b-b977-49f079ea7f74","type":"LinearAxis"}],"renderers":[{"id":"7e70a918-d706-4498-9b54-ed91c20d374b","type":"LinearAxis"},{"id":"05bc5658-10fd-48f5-99a6-a96027ea9ac6","type":"Grid"},{"id":"dc92819b-a7c5-476b-b977-49f079ea7f74","type":"LinearAxis"},{"id":"bb0f2752-52f2-412e-9790-6894f5136622","type":"Grid"},{"id":"ac516823-46c1-4326-9915-72f1c7a83f85","type":"BoxAnnotation"},{"id":"d60ba573-bc7c-4ebb-8c80-b120b9a21174","type":"GlyphRenderer"}],"title":{"id":"06ffd984-5683-483d-abfc-6fd71fdb4771","type":"Title"},"toolbar":{"id":"2bc080e8-6ef3-41a0-ad31-a252425a2389","type":"Toolbar"},"x_range":{"id":"9641f610-d8b5-4544-9945-da36f9b98b29","type":"DataRange1d"},"x_scale":{"id":"77aa77cb-2c85-4be4-b797-6ba45755a7d2","type":"LinearScale"},"y_range":{"id":"7bb40ffa-fb0f-4dcd-a6a3-11543f4c04f5","type":"DataRange1d"},"y_scale":{"id":"3906eb01-fc2a-4a00-baad-b13901f776d6","type":"LinearScale"}},"id":"390f0565-14fa-4c5c-b2e7-c96c99f0c799","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b34345b5-8017-4efc-a73d-e95a41f8b43b","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3a7387a1-d2c4-4083-a4f7-ed2bc68ecaac","type":"PanTool"},{"id":"b34345b5-8017-4efc-a73d-e95a41f8b43b","type":"WheelZoomTool"},{"id":"5c02615b-657c-4e6d-9d44-f0e9d1fba9c1","type":"BoxZoomTool"},{"id":"59925a88-b46e-4f45-82c0-9190a784fb32","type":"SaveTool"},{"id":"00761fec-75a7-48e2-906b-0ab6c0d11f4f","type":"ResetTool"},{"id":"e432061f-f999-4929-8855-86db4ea6bcb8","type":"HelpTool"}]},"id":"2bc080e8-6ef3-41a0-ad31-a252425a2389","type":"Toolbar"}],"root_ids":["390f0565-14fa-4c5c-b2e7-c96c99f0c799"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"db0afb31-f2c9-4daf-8ae7-9cb3875d6793","elementid":"11b665ef-1636-4f50-8c26-a39df8556881","modelid":"390f0565-14fa-4c5c-b2e7-c96c99f0c799"}];
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
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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