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
      };var element = document.getElementById("49b990d2-4c31-4253-a2b6-9aff98ff4ac1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '49b990d2-4c31-4253-a2b6-9aff98ff4ac1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"cd59676f-e7fc-4d0a-9bec-134fb4a5bd58":{"roots":{"references":[{"attributes":{},"id":"7451","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7435","type":"ColumnDataSource"},"glyph":{"id":"7436","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7437","type":"Line"},"selection_glyph":null,"view":{"id":"7439","type":"CDSView"}},"id":"7438","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"7458","type":"Selection"},"selection_policy":{"id":"7459","type":"UnionRenderers"}},"id":"7435","type":"ColumnDataSource"},{"attributes":{"child":{"id":"7361","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"7400","type":"Panel"},{"attributes":{"formatter":{"id":"7447","type":"BasicTickFormatter"},"plot":{"id":"7361","subtype":"Figure","type":"Plot"},"ticker":{"id":"7371","type":"BasicTicker"}},"id":"7370","type":"LinearAxis"},{"attributes":{},"id":"7449","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7453","type":"BasicTickFormatter"},"plot":{"id":"7401","subtype":"Figure","type":"Plot"},"ticker":{"id":"7416","type":"BasicTicker"}},"id":"7415","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7428","type":"BoxAnnotation"},{"attributes":{},"id":"7383","type":"SaveTool"},{"attributes":{},"id":"7447","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"7443","type":"Title"},{"attributes":{},"id":"7368","type":"LinearScale"},{"attributes":{},"id":"7421","type":"WheelZoomTool"},{"attributes":{},"id":"7381","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"7436","type":"Line"},{"attributes":{},"id":"7380","type":"PanTool"},{"attributes":{"source":{"id":"7435","type":"ColumnDataSource"}},"id":"7439","type":"CDSView"},{"attributes":{"source":{"id":"7395","type":"ColumnDataSource"}},"id":"7399","type":"CDSView"},{"attributes":{"below":[{"id":"7410","type":"LinearAxis"}],"left":[{"id":"7415","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7410","type":"LinearAxis"},{"id":"7414","type":"Grid"},{"id":"7415","type":"LinearAxis"},{"id":"7419","type":"Grid"},{"id":"7428","type":"BoxAnnotation"},{"id":"7438","type":"GlyphRenderer"}],"title":{"id":"7445","type":"Title"},"toolbar":{"id":"7426","type":"Toolbar"},"x_range":{"id":"7402","type":"DataRange1d"},"x_scale":{"id":"7406","type":"LinearScale"},"y_range":{"id":"7404","type":"DataRange1d"},"y_scale":{"id":"7408","type":"LinearScale"}},"id":"7401","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"7361","subtype":"Figure","type":"Plot"},"ticker":{"id":"7376","type":"BasicTicker"}},"id":"7379","type":"Grid"},{"attributes":{},"id":"7408","type":"LinearScale"},{"attributes":{},"id":"7384","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7380","type":"PanTool"},{"id":"7381","type":"WheelZoomTool"},{"id":"7382","type":"BoxZoomTool"},{"id":"7383","type":"SaveTool"},{"id":"7384","type":"ResetTool"},{"id":"7385","type":"HelpTool"}]},"id":"7386","type":"Toolbar"},{"attributes":{"overlay":{"id":"7428","type":"BoxAnnotation"}},"id":"7422","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"7404","type":"DataRange1d"},{"attributes":{"callback":null,"tabs":[{"id":"7400","type":"Panel"},{"id":"7440","type":"Panel"}]},"id":"7441","type":"Tabs"},{"attributes":{},"id":"7366","type":"LinearScale"},{"attributes":{"callback":null},"id":"7402","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"7445","type":"Title"},{"attributes":{},"id":"7416","type":"BasicTicker"},{"attributes":{},"id":"7406","type":"LinearScale"},{"attributes":{},"id":"7425","type":"HelpTool"},{"attributes":{},"id":"7453","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7388","type":"BoxAnnotation"},{"attributes":{},"id":"7458","type":"Selection"},{"attributes":{"formatter":{"id":"7451","type":"BasicTickFormatter"},"plot":{"id":"7401","subtype":"Figure","type":"Plot"},"ticker":{"id":"7411","type":"BasicTicker"}},"id":"7410","type":"LinearAxis"},{"attributes":{},"id":"7411","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7420","type":"PanTool"},{"id":"7421","type":"WheelZoomTool"},{"id":"7422","type":"BoxZoomTool"},{"id":"7423","type":"SaveTool"},{"id":"7424","type":"ResetTool"},{"id":"7425","type":"HelpTool"}]},"id":"7426","type":"Toolbar"},{"attributes":{},"id":"7376","type":"BasicTicker"},{"attributes":{"overlay":{"id":"7388","type":"BoxAnnotation"}},"id":"7382","type":"BoxZoomTool"},{"attributes":{},"id":"7385","type":"HelpTool"},{"attributes":{"plot":{"id":"7401","subtype":"Figure","type":"Plot"},"ticker":{"id":"7411","type":"BasicTicker"}},"id":"7414","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"7455","type":"Selection"},"selection_policy":{"id":"7456","type":"UnionRenderers"}},"id":"7395","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"7364","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7395","type":"ColumnDataSource"},"glyph":{"id":"7396","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7397","type":"Circle"},"selection_glyph":null,"view":{"id":"7399","type":"CDSView"}},"id":"7398","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7397","type":"Circle"},{"attributes":{"child":{"id":"7401","subtype":"Figure","type":"Plot"},"title":"line"},"id":"7440","type":"Panel"},{"attributes":{"callback":null},"id":"7362","type":"DataRange1d"},{"attributes":{},"id":"7424","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"7401","subtype":"Figure","type":"Plot"},"ticker":{"id":"7416","type":"BasicTicker"}},"id":"7419","type":"Grid"},{"attributes":{"plot":{"id":"7361","subtype":"Figure","type":"Plot"},"ticker":{"id":"7371","type":"BasicTicker"}},"id":"7374","type":"Grid"},{"attributes":{},"id":"7456","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7396","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"7437","type":"Line"},{"attributes":{},"id":"7455","type":"Selection"},{"attributes":{},"id":"7371","type":"BasicTicker"},{"attributes":{},"id":"7423","type":"SaveTool"},{"attributes":{"below":[{"id":"7370","type":"LinearAxis"}],"left":[{"id":"7375","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7370","type":"LinearAxis"},{"id":"7374","type":"Grid"},{"id":"7375","type":"LinearAxis"},{"id":"7379","type":"Grid"},{"id":"7388","type":"BoxAnnotation"},{"id":"7398","type":"GlyphRenderer"}],"title":{"id":"7443","type":"Title"},"toolbar":{"id":"7386","type":"Toolbar"},"x_range":{"id":"7362","type":"DataRange1d"},"x_scale":{"id":"7366","type":"LinearScale"},"y_range":{"id":"7364","type":"DataRange1d"},"y_scale":{"id":"7368","type":"LinearScale"}},"id":"7361","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7420","type":"PanTool"},{"attributes":{"formatter":{"id":"7449","type":"BasicTickFormatter"},"plot":{"id":"7361","subtype":"Figure","type":"Plot"},"ticker":{"id":"7376","type":"BasicTicker"}},"id":"7375","type":"LinearAxis"},{"attributes":{},"id":"7459","type":"UnionRenderers"}],"root_ids":["7441"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"cd59676f-e7fc-4d0a-9bec-134fb4a5bd58","roots":{"7441":"49b990d2-4c31-4253-a2b6-9aff98ff4ac1"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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