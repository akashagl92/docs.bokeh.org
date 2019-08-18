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
      };var element = document.getElementById("47b60ef5-79dc-4610-888e-f675b988407c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '47b60ef5-79dc-4610-888e-f675b988407c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"efa38251-dcf6-4a39-893e-e352d11a419d":{"roots":{"references":[{"attributes":{},"id":"16774","type":"HelpTool"},{"attributes":{"overlay":{"id":"16801","type":"BoxAnnotation"}},"id":"16771","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"16751","type":"DataRange1d"},{"attributes":{},"id":"16798","type":"Selection"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16783","type":"Line"},{"attributes":{"text":"example"},"id":"16749","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"16800","type":"Selection"},"selection_policy":{"id":"16799","type":"UnionRenderers"}},"id":"16787","type":"ColumnDataSource"},{"attributes":{},"id":"16772","type":"SaveTool"},{"attributes":{},"id":"16765","type":"BasicTicker"},{"attributes":{},"id":"16757","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"16765","type":"BasicTicker"}},"id":"16768","type":"Grid"},{"attributes":{},"id":"16760","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"16798","type":"Selection"},"selection_policy":{"id":"16797","type":"UnionRenderers"}},"id":"16782","type":"ColumnDataSource"},{"attributes":{"source":{"id":"16787","type":"ColumnDataSource"}},"id":"16791","type":"CDSView"},{"attributes":{"data_source":{"id":"16787","type":"ColumnDataSource"},"glyph":{"id":"16788","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16789","type":"Circle"},"selection_glyph":null,"view":{"id":"16791","type":"CDSView"}},"id":"16790","type":"GlyphRenderer"},{"attributes":{},"id":"16799","type":"UnionRenderers"},{"attributes":{},"id":"16794","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"16759","type":"LinearAxis"}],"center":[{"id":"16763","type":"Grid"},{"id":"16768","type":"Grid"}],"left":[{"id":"16764","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16785","type":"GlyphRenderer"},{"id":"16790","type":"GlyphRenderer"}],"title":{"id":"16749","type":"Title"},"toolbar":{"id":"16775","type":"Toolbar"},"x_range":{"id":"16751","type":"DataRange1d"},"x_scale":{"id":"16755","type":"LinearScale"},"y_range":{"id":"16753","type":"DataRange1d"},"y_scale":{"id":"16757","type":"LinearScale"}},"id":"16748","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"16782","type":"ColumnDataSource"},"glyph":{"id":"16783","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16784","type":"Line"},"selection_glyph":null,"view":{"id":"16786","type":"CDSView"}},"id":"16785","type":"GlyphRenderer"},{"attributes":{},"id":"16769","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16769","type":"PanTool"},{"id":"16770","type":"WheelZoomTool"},{"id":"16771","type":"BoxZoomTool"},{"id":"16772","type":"SaveTool"},{"id":"16773","type":"ResetTool"},{"id":"16774","type":"HelpTool"}]},"id":"16775","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16789","type":"Circle"},{"attributes":{},"id":"16797","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16801","type":"BoxAnnotation"},{"attributes":{},"id":"16796","type":"BasicTickFormatter"},{"attributes":{},"id":"16755","type":"LinearScale"},{"attributes":{},"id":"16800","type":"Selection"},{"attributes":{"ticker":{"id":"16760","type":"BasicTicker"}},"id":"16763","type":"Grid"},{"attributes":{"source":{"id":"16782","type":"ColumnDataSource"}},"id":"16786","type":"CDSView"},{"attributes":{"formatter":{"id":"16796","type":"BasicTickFormatter"},"ticker":{"id":"16760","type":"BasicTicker"}},"id":"16759","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16788","type":"Circle"},{"attributes":{},"id":"16773","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"16784","type":"Line"},{"attributes":{"callback":null},"id":"16753","type":"DataRange1d"},{"attributes":{"formatter":{"id":"16794","type":"BasicTickFormatter"},"ticker":{"id":"16765","type":"BasicTicker"}},"id":"16764","type":"LinearAxis"},{"attributes":{},"id":"16770","type":"WheelZoomTool"}],"root_ids":["16748"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"efa38251-dcf6-4a39-893e-e352d11a419d","roots":{"16748":"47b60ef5-79dc-4610-888e-f675b988407c"}}];
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