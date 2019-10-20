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
      };var element = document.getElementById("53996db0-6b3d-4730-89a2-6a7400e7cc1d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '53996db0-6b3d-4730-89a2-6a7400e7cc1d' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
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
                    
                  var docs_json = '{"8f4a44d0-a64e-4edf-9f51-99448b4323e0":{"roots":{"references":[{"attributes":{"formatter":{"id":"17559","type":"BasicTickFormatter"},"ticker":{"id":"17524","type":"BasicTicker"}},"id":"17523","type":"LinearAxis"},{"attributes":{},"id":"17537","type":"ResetTool"},{"attributes":{},"id":"17524","type":"BasicTicker"},{"attributes":{"text":"example"},"id":"17513","type":"Title"},{"attributes":{},"id":"17536","type":"SaveTool"},{"attributes":{},"id":"17564","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17565","type":"BoxAnnotation"},{"attributes":{},"id":"17521","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17548","type":"Line"},{"attributes":{"ticker":{"id":"17524","type":"BasicTicker"}},"id":"17527","type":"Grid"},{"attributes":{"overlay":{"id":"17565","type":"BoxAnnotation"}},"id":"17535","type":"BoxZoomTool"},{"attributes":{},"id":"17533","type":"PanTool"},{"attributes":{"source":{"id":"17546","type":"ColumnDataSource"}},"id":"17550","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17547","type":"Line"},{"attributes":{},"id":"17534","type":"WheelZoomTool"},{"attributes":{"source":{"id":"17551","type":"ColumnDataSource"}},"id":"17555","type":"CDSView"},{"attributes":{},"id":"17557","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"17529","type":"BasicTicker"}},"id":"17532","type":"Grid"},{"attributes":{},"id":"17529","type":"BasicTicker"},{"attributes":{},"id":"17561","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17563","type":"Selection"},"selection_policy":{"id":"17564","type":"UnionRenderers"}},"id":"17551","type":"ColumnDataSource"},{"attributes":{},"id":"17538","type":"HelpTool"},{"attributes":{"data_source":{"id":"17546","type":"ColumnDataSource"},"glyph":{"id":"17547","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17548","type":"Line"},"selection_glyph":null,"view":{"id":"17550","type":"CDSView"}},"id":"17549","type":"GlyphRenderer"},{"attributes":{},"id":"17519","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17561","type":"Selection"},"selection_policy":{"id":"17562","type":"UnionRenderers"}},"id":"17546","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17552","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17553","type":"Circle"},{"attributes":{"callback":null},"id":"17517","type":"DataRange1d"},{"attributes":{"below":[{"id":"17523","type":"LinearAxis"}],"center":[{"id":"17527","type":"Grid"},{"id":"17532","type":"Grid"}],"left":[{"id":"17528","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17549","type":"GlyphRenderer"},{"id":"17554","type":"GlyphRenderer"}],"title":{"id":"17513","type":"Title"},"toolbar":{"id":"17539","type":"Toolbar"},"x_range":{"id":"17515","type":"DataRange1d"},"x_scale":{"id":"17519","type":"LinearScale"},"y_range":{"id":"17517","type":"DataRange1d"},"y_scale":{"id":"17521","type":"LinearScale"}},"id":"17512","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"17515","type":"DataRange1d"},{"attributes":{},"id":"17563","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17533","type":"PanTool"},{"id":"17534","type":"WheelZoomTool"},{"id":"17535","type":"BoxZoomTool"},{"id":"17536","type":"SaveTool"},{"id":"17537","type":"ResetTool"},{"id":"17538","type":"HelpTool"}]},"id":"17539","type":"Toolbar"},{"attributes":{"data_source":{"id":"17551","type":"ColumnDataSource"},"glyph":{"id":"17552","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17553","type":"Circle"},"selection_glyph":null,"view":{"id":"17555","type":"CDSView"}},"id":"17554","type":"GlyphRenderer"},{"attributes":{},"id":"17562","type":"UnionRenderers"},{"attributes":{},"id":"17559","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17557","type":"BasicTickFormatter"},"ticker":{"id":"17529","type":"BasicTicker"}},"id":"17528","type":"LinearAxis"}],"root_ids":["17512"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"8f4a44d0-a64e-4edf-9f51-99448b4323e0","roots":{"17512":"53996db0-6b3d-4730-89a2-6a7400e7cc1d"}}];
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