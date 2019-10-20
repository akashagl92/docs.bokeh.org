(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("c8002a81-e211-482f-bead-ac9a46bd8fab");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c8002a81-e211-482f-bead-ac9a46bd8fab' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"394f8560-8dd1-487c-9255-c14224cf90a6":{"roots":{"references":[{"attributes":{"formatter":{"id":"34241","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"ticker":{"id":"34210","type":"BasicTicker"}},"id":"34209","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34245","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34234","type":"Circle"},{"attributes":{},"id":"34207","type":"LinearScale"},{"attributes":{},"id":"34205","type":"LinearScale"},{"attributes":{},"id":"34224","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34233","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"34215","type":"BasicTicker"}},"id":"34218","type":"Grid"},{"attributes":{"data_source":{"id":"34232","type":"ColumnDataSource"},"glyph":{"id":"34233","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34234","type":"Circle"},"selection_glyph":null,"view":{"id":"34236","type":"CDSView"}},"id":"34235","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"34203","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"34243","type":"Selection"},"selection_policy":{"id":"34244","type":"UnionRenderers"}},"id":"34232","type":"ColumnDataSource"},{"attributes":{},"id":"34244","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"34201","type":"DataRange1d"},{"attributes":{"text":""},"id":"34237","type":"Title"},{"attributes":{},"id":"34219","type":"PanTool"},{"attributes":{"formatter":{"id":"34239","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"ticker":{"id":"34215","type":"BasicTicker"}},"id":"34214","type":"LinearAxis"},{"attributes":{},"id":"34215","type":"BasicTicker"},{"attributes":{"overlay":{"id":"34245","type":"BoxAnnotation"}},"id":"34221","type":"BoxZoomTool"},{"attributes":{},"id":"34222","type":"SaveTool"},{"attributes":{},"id":"34241","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34219","type":"PanTool"},{"id":"34220","type":"WheelZoomTool"},{"id":"34221","type":"BoxZoomTool"},{"id":"34222","type":"SaveTool"},{"id":"34223","type":"ResetTool"},{"id":"34224","type":"HelpTool"}]},"id":"34225","type":"Toolbar"},{"attributes":{},"id":"34243","type":"Selection"},{"attributes":{"source":{"id":"34232","type":"ColumnDataSource"}},"id":"34236","type":"CDSView"},{"attributes":{},"id":"34239","type":"BasicTickFormatter"},{"attributes":{},"id":"34220","type":"WheelZoomTool"},{"attributes":{},"id":"34210","type":"BasicTicker"},{"attributes":{"below":[{"id":"34209","type":"LinearAxis"}],"center":[{"id":"34213","type":"Grid"},{"id":"34218","type":"Grid"}],"left":[{"id":"34214","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34235","type":"GlyphRenderer"}],"title":{"id":"34237","type":"Title"},"toolbar":{"id":"34225","type":"Toolbar"},"x_range":{"id":"34201","type":"DataRange1d"},"x_scale":{"id":"34205","type":"LinearScale"},"y_range":{"id":"34203","type":"DataRange1d"},"y_scale":{"id":"34207","type":"LinearScale"}},"id":"34200","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34223","type":"ResetTool"},{"attributes":{"ticker":{"id":"34210","type":"BasicTicker"}},"id":"34213","type":"Grid"}],"root_ids":["34200"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"394f8560-8dd1-487c-9255-c14224cf90a6","roots":{"34200":"c8002a81-e211-482f-bead-ac9a46bd8fab"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();