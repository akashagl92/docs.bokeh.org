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
      };var element = document.getElementById("748f86d5-1e61-490b-8b94-b32fbfea6500");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '748f86d5-1e61-490b-8b94-b32fbfea6500' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_8f1efcd166444c83bb98f1ac6fb868c4.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_074e546b3c1b47f8a4bb89c4700ab0a8.latex_label": function(require, module, exports) {
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
          
          },
          "custom/bk_script_8f1efcd166444c83bb98f1ac6fb868c4.my_formatter": function(require, module, exports) {
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
                    
                  var docs_json = '{"4002593a-9ea3-469a-81ca-de896322c8c5":{"roots":{"references":[{"attributes":{"plot":{"id":"495e7cd8-26d8-439e-b0d3-95efa416cacb","subtype":"Figure","type":"Plot"},"ticker":{"id":"afab6be2-5b9a-4f82-83f6-3587bf2ac658","type":"BasicTicker"}},"id":"836c1328-c20c-419c-9ed6-4ab64d1ba478","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"495e7cd8-26d8-439e-b0d3-95efa416cacb","subtype":"Figure","type":"Plot"},"ticker":{"id":"68530433-60c9-4cd7-a357-12c67596374d","type":"BasicTicker"}},"id":"36550e20-59fb-4d66-9c18-78b4b5062eec","type":"Grid"},{"attributes":{"callback":null},"id":"7ab58fc3-d76c-475f-a91d-b027e7cfc7fc","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"fe561932-6214-4547-aec0-7436925cd1dd","type":"Title"},{"attributes":{"overlay":{"id":"04773fbf-3574-43fa-805b-f557b38e1a02","type":"BoxAnnotation"}},"id":"7ee392de-d4a6-4a79-b333-0b72ee557e35","type":"BoxZoomTool"},{"attributes":{},"id":"afab6be2-5b9a-4f82-83f6-3587bf2ac658","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4ab137e6-08f7-48b1-8291-43a7d5eb5a86","type":"DataRange1d"},{"attributes":{},"id":"d7c0105b-43b1-44ee-b1bc-4d98743318b3","type":"ResetTool"},{"attributes":{},"id":"68530433-60c9-4cd7-a357-12c67596374d","type":"BasicTicker"},{"attributes":{},"id":"6230102f-3a04-45d0-abb9-843e7e98ba9b","type":"LinearScale"},{"attributes":{},"id":"de650be7-ce3c-4d68-9ee6-d1a230515ec6","type":"WheelZoomTool"},{"attributes":{},"id":"4f82de9e-de33-4c6f-be09-ee5741241397","type":"LinearScale"},{"attributes":{"source":{"id":"e1a153ca-f7b6-4938-884f-c4ff4aeee65c","type":"ColumnDataSource"}},"id":"305da693-abf7-4dd2-9d00-8affbc7a2f9d","type":"CDSView"},{"attributes":{},"id":"33e80c48-ab63-49a4-842b-f1006da55a48","type":"BasicTickFormatter"},{"attributes":{},"id":"04232d94-126a-4a17-a198-ac01342d8445","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"04773fbf-3574-43fa-805b-f557b38e1a02","type":"BoxAnnotation"},{"attributes":{},"id":"06c7167e-3451-4e7a-80d0-bf356635335c","type":"SaveTool"},{"attributes":{},"id":"fea3196a-3bed-4979-b823-1029744ab4c8","type":"MyFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"40ac1f1f-e894-4f6b-bef9-39c18514af5e","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"10428e0a-cc99-40cb-bc2f-f92d4098e853","type":"PanTool"},{"id":"de650be7-ce3c-4d68-9ee6-d1a230515ec6","type":"WheelZoomTool"},{"id":"7ee392de-d4a6-4a79-b333-0b72ee557e35","type":"BoxZoomTool"},{"id":"06c7167e-3451-4e7a-80d0-bf356635335c","type":"SaveTool"},{"id":"d7c0105b-43b1-44ee-b1bc-4d98743318b3","type":"ResetTool"},{"id":"04232d94-126a-4a17-a198-ac01342d8445","type":"HelpTool"}]},"id":"b5025a07-62c2-4f09-a9e4-942851f3f1a2","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"e1a153ca-f7b6-4938-884f-c4ff4aeee65c","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"03f35921-883b-4b35-abfe-a4b6428a80c3","type":"Circle"},{"attributes":{"data_source":{"id":"e1a153ca-f7b6-4938-884f-c4ff4aeee65c","type":"ColumnDataSource"},"glyph":{"id":"03f35921-883b-4b35-abfe-a4b6428a80c3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40ac1f1f-e894-4f6b-bef9-39c18514af5e","type":"Circle"},"selection_glyph":null,"view":{"id":"305da693-abf7-4dd2-9d00-8affbc7a2f9d","type":"CDSView"}},"id":"56d34bc4-6d1f-4a63-a8d2-f89e2f782d79","type":"GlyphRenderer"},{"attributes":{},"id":"10428e0a-cc99-40cb-bc2f-f92d4098e853","type":"PanTool"},{"attributes":{"formatter":{"id":"33e80c48-ab63-49a4-842b-f1006da55a48","type":"BasicTickFormatter"},"plot":{"id":"495e7cd8-26d8-439e-b0d3-95efa416cacb","subtype":"Figure","type":"Plot"},"ticker":{"id":"68530433-60c9-4cd7-a357-12c67596374d","type":"BasicTicker"}},"id":"fcdf6a67-0b9f-4151-9211-201343221748","type":"LinearAxis"},{"attributes":{"below":[{"id":"d121f4a1-699d-4329-afd7-ad4ce5734f3f","type":"LinearAxis"}],"left":[{"id":"fcdf6a67-0b9f-4151-9211-201343221748","type":"LinearAxis"}],"renderers":[{"id":"d121f4a1-699d-4329-afd7-ad4ce5734f3f","type":"LinearAxis"},{"id":"836c1328-c20c-419c-9ed6-4ab64d1ba478","type":"Grid"},{"id":"fcdf6a67-0b9f-4151-9211-201343221748","type":"LinearAxis"},{"id":"36550e20-59fb-4d66-9c18-78b4b5062eec","type":"Grid"},{"id":"04773fbf-3574-43fa-805b-f557b38e1a02","type":"BoxAnnotation"},{"id":"56d34bc4-6d1f-4a63-a8d2-f89e2f782d79","type":"GlyphRenderer"}],"title":{"id":"fe561932-6214-4547-aec0-7436925cd1dd","type":"Title"},"toolbar":{"id":"b5025a07-62c2-4f09-a9e4-942851f3f1a2","type":"Toolbar"},"x_range":{"id":"7ab58fc3-d76c-475f-a91d-b027e7cfc7fc","type":"DataRange1d"},"x_scale":{"id":"4f82de9e-de33-4c6f-be09-ee5741241397","type":"LinearScale"},"y_range":{"id":"4ab137e6-08f7-48b1-8291-43a7d5eb5a86","type":"DataRange1d"},"y_scale":{"id":"6230102f-3a04-45d0-abb9-843e7e98ba9b","type":"LinearScale"}},"id":"495e7cd8-26d8-439e-b0d3-95efa416cacb","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"fea3196a-3bed-4979-b823-1029744ab4c8","type":"MyFormatter"},"plot":{"id":"495e7cd8-26d8-439e-b0d3-95efa416cacb","subtype":"Figure","type":"Plot"},"ticker":{"id":"afab6be2-5b9a-4f82-83f6-3587bf2ac658","type":"BasicTicker"}},"id":"d121f4a1-699d-4329-afd7-ad4ce5734f3f","type":"LinearAxis"}],"root_ids":["495e7cd8-26d8-439e-b0d3-95efa416cacb"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"4002593a-9ea3-469a-81ca-de896322c8c5","elementid":"748f86d5-1e61-490b-8b94-b32fbfea6500","modelid":"495e7cd8-26d8-439e-b0d3-95efa416cacb"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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