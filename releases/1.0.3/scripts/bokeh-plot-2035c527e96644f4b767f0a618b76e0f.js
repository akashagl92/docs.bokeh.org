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
      };var element = document.getElementById("01176ec5-7f10-475e-997e-3a3c2d8a3a6f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '01176ec5-7f10-475e-997e-3a3c2d8a3a6f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"b6debd42-e9d8-4eaf-b2bd-d2791116b5b5":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7389","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7429","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7398","type":"Circle"},{"attributes":{},"id":"7385","type":"ResetTool"},{"attributes":{"child":{"id":"7402","subtype":"Figure","type":"Plot"},"title":"line"},"id":"7441","type":"Panel"},{"attributes":{"callback":null},"id":"7403","type":"DataRange1d"},{"attributes":{},"id":"7367","type":"LinearScale"},{"attributes":{"source":{"id":"7436","type":"ColumnDataSource"}},"id":"7440","type":"CDSView"},{"attributes":{},"id":"7421","type":"PanTool"},{"attributes":{"callback":null},"id":"7363","type":"DataRange1d"},{"attributes":{},"id":"7386","type":"HelpTool"},{"attributes":{"overlay":{"id":"7429","type":"BoxAnnotation"}},"id":"7423","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"7436","type":"ColumnDataSource"},"glyph":{"id":"7437","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7438","type":"Line"},"selection_glyph":null,"view":{"id":"7440","type":"CDSView"}},"id":"7439","type":"GlyphRenderer"},{"attributes":{},"id":"7407","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7421","type":"PanTool"},{"id":"7422","type":"WheelZoomTool"},{"id":"7423","type":"BoxZoomTool"},{"id":"7424","type":"SaveTool"},{"id":"7425","type":"ResetTool"},{"id":"7426","type":"HelpTool"}]},"id":"7427","type":"Toolbar"},{"attributes":{},"id":"7412","type":"BasicTicker"},{"attributes":{},"id":"7426","type":"HelpTool"},{"attributes":{},"id":"7369","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"7438","type":"Line"},{"attributes":{},"id":"7382","type":"WheelZoomTool"},{"attributes":{},"id":"7447","type":"BasicTickFormatter"},{"attributes":{},"id":"7381","type":"PanTool"},{"attributes":{"formatter":{"id":"7451","type":"BasicTickFormatter"},"plot":{"id":"7402","subtype":"Figure","type":"Plot"},"ticker":{"id":"7417","type":"BasicTicker"}},"id":"7416","type":"LinearAxis"},{"attributes":{},"id":"7384","type":"SaveTool"},{"attributes":{},"id":"7425","type":"ResetTool"},{"attributes":{"formatter":{"id":"7453","type":"BasicTickFormatter"},"plot":{"id":"7402","subtype":"Figure","type":"Plot"},"ticker":{"id":"7412","type":"BasicTicker"}},"id":"7411","type":"LinearAxis"},{"attributes":{"formatter":{"id":"7449","type":"BasicTickFormatter"},"plot":{"id":"7362","subtype":"Figure","type":"Plot"},"ticker":{"id":"7372","type":"BasicTicker"}},"id":"7371","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"7443","type":"Title"},{"attributes":{"overlay":{"id":"7389","type":"BoxAnnotation"}},"id":"7383","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7402","subtype":"Figure","type":"Plot"},"ticker":{"id":"7412","type":"BasicTicker"}},"id":"7415","type":"Grid"},{"attributes":{},"id":"7422","type":"WheelZoomTool"},{"attributes":{},"id":"7449","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"7362","subtype":"Figure","type":"Plot"},"ticker":{"id":"7377","type":"BasicTicker"}},"id":"7380","type":"Grid"},{"attributes":{"plot":{"id":"7362","subtype":"Figure","type":"Plot"},"ticker":{"id":"7372","type":"BasicTicker"}},"id":"7375","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"7445","type":"Title"},{"attributes":{},"id":"7453","type":"BasicTickFormatter"},{"attributes":{},"id":"7372","type":"BasicTicker"},{"attributes":{},"id":"7451","type":"BasicTickFormatter"},{"attributes":{},"id":"7456","type":"Selection"},{"attributes":{"formatter":{"id":"7447","type":"BasicTickFormatter"},"plot":{"id":"7362","subtype":"Figure","type":"Plot"},"ticker":{"id":"7377","type":"BasicTicker"}},"id":"7376","type":"LinearAxis"},{"attributes":{},"id":"7409","type":"LinearScale"},{"attributes":{},"id":"7424","type":"SaveTool"},{"attributes":{"callback":null},"id":"7365","type":"DataRange1d"},{"attributes":{"callback":null,"tabs":[{"id":"7401","type":"Panel"},{"id":"7441","type":"Panel"}]},"id":"7442","type":"Tabs"},{"attributes":{"dimension":1,"plot":{"id":"7402","subtype":"Figure","type":"Plot"},"ticker":{"id":"7417","type":"BasicTicker"}},"id":"7420","type":"Grid"},{"attributes":{"source":{"id":"7396","type":"ColumnDataSource"}},"id":"7400","type":"CDSView"},{"attributes":{},"id":"7457","type":"UnionRenderers"},{"attributes":{},"id":"7459","type":"Selection"},{"attributes":{"child":{"id":"7362","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"7401","type":"Panel"},{"attributes":{},"id":"7460","type":"UnionRenderers"},{"attributes":{"below":[{"id":"7411","type":"LinearAxis"}],"left":[{"id":"7416","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7411","type":"LinearAxis"},{"id":"7415","type":"Grid"},{"id":"7416","type":"LinearAxis"},{"id":"7420","type":"Grid"},{"id":"7429","type":"BoxAnnotation"},{"id":"7439","type":"GlyphRenderer"}],"title":{"id":"7445","type":"Title"},"toolbar":{"id":"7427","type":"Toolbar"},"x_range":{"id":"7403","type":"DataRange1d"},"x_scale":{"id":"7407","type":"LinearScale"},"y_range":{"id":"7405","type":"DataRange1d"},"y_scale":{"id":"7409","type":"LinearScale"}},"id":"7402","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7397","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"7456","type":"Selection"},"selection_policy":{"id":"7457","type":"UnionRenderers"}},"id":"7396","type":"ColumnDataSource"},{"attributes":{},"id":"7417","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"7459","type":"Selection"},"selection_policy":{"id":"7460","type":"UnionRenderers"}},"id":"7436","type":"ColumnDataSource"},{"attributes":{},"id":"7377","type":"BasicTicker"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"7437","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7381","type":"PanTool"},{"id":"7382","type":"WheelZoomTool"},{"id":"7383","type":"BoxZoomTool"},{"id":"7384","type":"SaveTool"},{"id":"7385","type":"ResetTool"},{"id":"7386","type":"HelpTool"}]},"id":"7387","type":"Toolbar"},{"attributes":{"callback":null},"id":"7405","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7396","type":"ColumnDataSource"},"glyph":{"id":"7397","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7398","type":"Circle"},"selection_glyph":null,"view":{"id":"7400","type":"CDSView"}},"id":"7399","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7371","type":"LinearAxis"}],"left":[{"id":"7376","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7371","type":"LinearAxis"},{"id":"7375","type":"Grid"},{"id":"7376","type":"LinearAxis"},{"id":"7380","type":"Grid"},{"id":"7389","type":"BoxAnnotation"},{"id":"7399","type":"GlyphRenderer"}],"title":{"id":"7443","type":"Title"},"toolbar":{"id":"7387","type":"Toolbar"},"x_range":{"id":"7363","type":"DataRange1d"},"x_scale":{"id":"7367","type":"LinearScale"},"y_range":{"id":"7365","type":"DataRange1d"},"y_scale":{"id":"7369","type":"LinearScale"}},"id":"7362","subtype":"Figure","type":"Plot"}],"root_ids":["7442"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"b6debd42-e9d8-4eaf-b2bd-d2791116b5b5","roots":{"7442":"01176ec5-7f10-475e-997e-3a3c2d8a3a6f"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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