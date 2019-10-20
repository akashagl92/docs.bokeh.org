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
      };var element = document.getElementById("89f4604e-0ae5-43e8-97f5-361e22318509");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '89f4604e-0ae5-43e8-97f5-361e22318509' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                "LatexLabel": require("custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label").LatexLabel,
          "MyFormatter": require("custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter").MyFormatter
              };
              require("base").register_models(models);
              module.exports = models;
            },
            "custom/bk_script_bd1bb66dde88488cb0e0195aca481dbb.latex_label": function(require, module, exports) {
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
          "custom/bk_script_f862fae40e2d4b40b6644b159157f372.my_formatter": function(require, module, exports) {
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
                    
                  var docs_json = '{"b006a9f8-c2c6-4f98-8e56-dafc8e62c329":{"roots":{"references":[{"attributes":{},"id":"8eafc216-7b60-4b15-add2-fd2583cabcc4","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]},"selected":null,"selection_policy":null},"id":"4aa9db31-805f-4c78-a4e1-128db4cde189","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"20cdfe9e-e9f7-4376-83c9-dd4c61992ea4","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44096188-bd47-4154-88e4-a38ffaebdc55","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8eafc216-7b60-4b15-add2-fd2583cabcc4","type":"PanTool"},{"id":"92b5f9e0-5bae-45d9-a3bd-412673f68313","type":"WheelZoomTool"},{"id":"332b9031-33ed-46e5-a6fa-c5dce377e2ee","type":"BoxZoomTool"},{"id":"40df829a-adf3-4d4a-b6ea-807392d02bb4","type":"SaveTool"},{"id":"b96a1f48-11ab-42ca-b28c-9368b460f4d5","type":"ResetTool"},{"id":"88a07dbe-f759-4a88-81d3-7f6fa5af1bbf","type":"HelpTool"}]},"id":"b615c02a-95c1-4662-bcac-52a9141f2268","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"41429858-7f31-4ea4-bc82-c8fc6673e90f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0214bb16-416d-44c0-989f-70415beccc02","type":"BasicTicker"}},"id":"96015ef8-0d15-4b70-9601-bc073ad9054b","type":"Grid"},{"attributes":{"overlay":{"id":"964e5ec7-3bb1-4bc8-be21-919e99fe479b","type":"BoxAnnotation"}},"id":"332b9031-33ed-46e5-a6fa-c5dce377e2ee","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"a74c8c5a-3083-44c2-bf57-0000d02c6a08","type":"LinearAxis"}],"left":[{"id":"f5091361-7b82-4da4-8fa0-7faa21ac95f0","type":"LinearAxis"}],"renderers":[{"id":"a74c8c5a-3083-44c2-bf57-0000d02c6a08","type":"LinearAxis"},{"id":"fa65fe8b-6a95-44eb-ab44-b0c346ef53be","type":"Grid"},{"id":"f5091361-7b82-4da4-8fa0-7faa21ac95f0","type":"LinearAxis"},{"id":"96015ef8-0d15-4b70-9601-bc073ad9054b","type":"Grid"},{"id":"964e5ec7-3bb1-4bc8-be21-919e99fe479b","type":"BoxAnnotation"},{"id":"1969b58c-ea44-4052-8a0d-f313340598a8","type":"GlyphRenderer"}],"title":{"id":"f7a97571-2743-4ad5-aef0-d64e0bf090a1","type":"Title"},"toolbar":{"id":"b615c02a-95c1-4662-bcac-52a9141f2268","type":"Toolbar"},"x_range":{"id":"72eb6d54-cf77-4cf5-ab8d-f56fce3736b7","type":"DataRange1d"},"x_scale":{"id":"79a5b88d-c20a-4502-962d-31ec03f3592e","type":"LinearScale"},"y_range":{"id":"b4a2bf86-9c2f-44be-bee3-def91b3dac3c","type":"DataRange1d"},"y_scale":{"id":"f3b8cfeb-ecc3-489a-8d93-af09ed9e7f25","type":"LinearScale"}},"id":"41429858-7f31-4ea4-bc82-c8fc6673e90f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9ce561c0-8a92-4a69-a5e0-4d76d5bf3885","type":"BasicTickFormatter"},{"attributes":{},"id":"0214bb16-416d-44c0-989f-70415beccc02","type":"BasicTicker"},{"attributes":{"plot":{"id":"41429858-7f31-4ea4-bc82-c8fc6673e90f","subtype":"Figure","type":"Plot"},"ticker":{"id":"86b5bb50-97b8-4eb9-a13e-372518498244","type":"BasicTicker"}},"id":"fa65fe8b-6a95-44eb-ab44-b0c346ef53be","type":"Grid"},{"attributes":{"data_source":{"id":"4aa9db31-805f-4c78-a4e1-128db4cde189","type":"ColumnDataSource"},"glyph":{"id":"44096188-bd47-4154-88e4-a38ffaebdc55","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20cdfe9e-e9f7-4376-83c9-dd4c61992ea4","type":"Circle"},"selection_glyph":null,"view":{"id":"7fd2bee7-5bea-45cb-acdb-c00733810660","type":"CDSView"}},"id":"1969b58c-ea44-4052-8a0d-f313340598a8","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9ce561c0-8a92-4a69-a5e0-4d76d5bf3885","type":"BasicTickFormatter"},"plot":{"id":"41429858-7f31-4ea4-bc82-c8fc6673e90f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0214bb16-416d-44c0-989f-70415beccc02","type":"BasicTicker"}},"id":"f5091361-7b82-4da4-8fa0-7faa21ac95f0","type":"LinearAxis"},{"attributes":{},"id":"92b5f9e0-5bae-45d9-a3bd-412673f68313","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"72eb6d54-cf77-4cf5-ab8d-f56fce3736b7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"8e96491c-9cdc-44dd-b1ef-5adc16a49256","type":"MyFormatter"},"plot":{"id":"41429858-7f31-4ea4-bc82-c8fc6673e90f","subtype":"Figure","type":"Plot"},"ticker":{"id":"86b5bb50-97b8-4eb9-a13e-372518498244","type":"BasicTicker"}},"id":"a74c8c5a-3083-44c2-bf57-0000d02c6a08","type":"LinearAxis"},{"attributes":{},"id":"8e96491c-9cdc-44dd-b1ef-5adc16a49256","type":"MyFormatter"},{"attributes":{},"id":"79a5b88d-c20a-4502-962d-31ec03f3592e","type":"LinearScale"},{"attributes":{},"id":"b96a1f48-11ab-42ca-b28c-9368b460f4d5","type":"ResetTool"},{"attributes":{"callback":null},"id":"b4a2bf86-9c2f-44be-bee3-def91b3dac3c","type":"DataRange1d"},{"attributes":{},"id":"86b5bb50-97b8-4eb9-a13e-372518498244","type":"BasicTicker"},{"attributes":{},"id":"f3b8cfeb-ecc3-489a-8d93-af09ed9e7f25","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"964e5ec7-3bb1-4bc8-be21-919e99fe479b","type":"BoxAnnotation"},{"attributes":{},"id":"88a07dbe-f759-4a88-81d3-7f6fa5af1bbf","type":"HelpTool"},{"attributes":{"source":{"id":"4aa9db31-805f-4c78-a4e1-128db4cde189","type":"ColumnDataSource"}},"id":"7fd2bee7-5bea-45cb-acdb-c00733810660","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"f7a97571-2743-4ad5-aef0-d64e0bf090a1","type":"Title"},{"attributes":{},"id":"40df829a-adf3-4d4a-b6ea-807392d02bb4","type":"SaveTool"}],"root_ids":["41429858-7f31-4ea4-bc82-c8fc6673e90f"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"b006a9f8-c2c6-4f98-8e56-dafc8e62c329","elementid":"89f4604e-0ae5-43e8-97f5-361e22318509","modelid":"41429858-7f31-4ea4-bc82-c8fc6673e90f"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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