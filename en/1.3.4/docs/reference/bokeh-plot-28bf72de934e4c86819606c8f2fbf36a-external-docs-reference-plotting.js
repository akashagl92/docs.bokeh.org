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
      };var element = document.getElementById("49fa2691-eec3-4a6d-8e57-75323fba1eb7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '49fa2691-eec3-4a6d-8e57-75323fba1eb7' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"86538b96-e8e7-4a92-9de3-d6d36099d477":{"roots":{"references":[{"attributes":{"below":[{"id":"16541","type":"LinearAxis"}],"center":[{"id":"16545","type":"Grid"},{"id":"16550","type":"Grid"}],"left":[{"id":"16546","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16567","type":"GlyphRenderer"}],"title":{"id":"16570","type":"Title"},"toolbar":{"id":"16557","type":"Toolbar"},"x_range":{"id":"16533","type":"DataRange1d"},"x_scale":{"id":"16537","type":"LinearScale"},"y_range":{"id":"16535","type":"DataRange1d"},"y_scale":{"id":"16539","type":"LinearScale"}},"id":"16532","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"16566","type":"Ray"},{"attributes":{},"id":"16555","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16551","type":"PanTool"},{"id":"16552","type":"WheelZoomTool"},{"id":"16553","type":"BoxZoomTool"},{"id":"16554","type":"SaveTool"},{"id":"16555","type":"ResetTool"},{"id":"16556","type":"HelpTool"}]},"id":"16557","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"16565","type":"Ray"},{"attributes":{},"id":"16572","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"16572","type":"BasicTickFormatter"},"ticker":{"id":"16547","type":"BasicTicker"}},"id":"16546","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"16547","type":"BasicTicker"}},"id":"16550","type":"Grid"},{"attributes":{},"id":"16547","type":"BasicTicker"},{"attributes":{},"id":"16554","type":"SaveTool"},{"attributes":{},"id":"16552","type":"WheelZoomTool"},{"attributes":{},"id":"16575","type":"Selection"},{"attributes":{},"id":"16539","type":"LinearScale"},{"attributes":{},"id":"16574","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"16535","type":"DataRange1d"},{"attributes":{"text":""},"id":"16570","type":"Title"},{"attributes":{"overlay":{"id":"16577","type":"BoxAnnotation"}},"id":"16553","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"16542","type":"BasicTicker"}},"id":"16545","type":"Grid"},{"attributes":{"source":{"id":"16564","type":"ColumnDataSource"}},"id":"16568","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16575","type":"Selection"},"selection_policy":{"id":"16576","type":"UnionRenderers"}},"id":"16564","type":"ColumnDataSource"},{"attributes":{},"id":"16556","type":"HelpTool"},{"attributes":{},"id":"16576","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16577","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"16533","type":"DataRange1d"},{"attributes":{},"id":"16551","type":"PanTool"},{"attributes":{"data_source":{"id":"16564","type":"ColumnDataSource"},"glyph":{"id":"16565","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16566","type":"Ray"},"selection_glyph":null,"view":{"id":"16568","type":"CDSView"}},"id":"16567","type":"GlyphRenderer"},{"attributes":{},"id":"16537","type":"LinearScale"},{"attributes":{},"id":"16542","type":"BasicTicker"},{"attributes":{"formatter":{"id":"16574","type":"BasicTickFormatter"},"ticker":{"id":"16542","type":"BasicTicker"}},"id":"16541","type":"LinearAxis"}],"root_ids":["16532"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"86538b96-e8e7-4a92-9de3-d6d36099d477","roots":{"16532":"49fa2691-eec3-4a6d-8e57-75323fba1eb7"}}];
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
        
        
        }
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