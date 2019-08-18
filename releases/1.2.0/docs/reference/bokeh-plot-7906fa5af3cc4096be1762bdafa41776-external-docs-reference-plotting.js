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
      };var element = document.getElementById("8a4e6ff2-c7b4-4736-9771-cc669e5834c2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8a4e6ff2-c7b4-4736-9771-cc669e5834c2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c1fcc907-efff-4a0a-8340-5ba63cccaa09":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"16609","type":"BasicTicker"}},"id":"16612","type":"Grid"},{"attributes":{},"id":"16633","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16639","type":"BoxAnnotation"}},"id":"16615","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16628","type":"Rect"},{"attributes":{},"id":"16601","type":"LinearScale"},{"attributes":{"ticker":{"id":"16604","type":"BasicTicker"}},"id":"16607","type":"Grid"},{"attributes":{},"id":"16614","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"16597","type":"DataRange1d"},{"attributes":{},"id":"16613","type":"PanTool"},{"attributes":{},"id":"16618","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16627","type":"Rect"},{"attributes":{"callback":null},"id":"16595","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16637","type":"Selection"},"selection_policy":{"id":"16638","type":"UnionRenderers"}},"id":"16626","type":"ColumnDataSource"},{"attributes":{},"id":"16617","type":"ResetTool"},{"attributes":{"data_source":{"id":"16626","type":"ColumnDataSource"},"glyph":{"id":"16627","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16628","type":"Rect"},"selection_glyph":null,"view":{"id":"16630","type":"CDSView"}},"id":"16629","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"16631","type":"Title"},{"attributes":{"below":[{"id":"16603","type":"LinearAxis"}],"center":[{"id":"16607","type":"Grid"},{"id":"16612","type":"Grid"}],"left":[{"id":"16608","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16629","type":"GlyphRenderer"}],"title":{"id":"16631","type":"Title"},"toolbar":{"id":"16619","type":"Toolbar"},"x_range":{"id":"16595","type":"DataRange1d"},"x_scale":{"id":"16599","type":"LinearScale"},"y_range":{"id":"16597","type":"DataRange1d"},"y_scale":{"id":"16601","type":"LinearScale"}},"id":"16594","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16639","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16613","type":"PanTool"},{"id":"16614","type":"WheelZoomTool"},{"id":"16615","type":"BoxZoomTool"},{"id":"16616","type":"SaveTool"},{"id":"16617","type":"ResetTool"},{"id":"16618","type":"HelpTool"}]},"id":"16619","type":"Toolbar"},{"attributes":{"formatter":{"id":"16635","type":"BasicTickFormatter"},"ticker":{"id":"16604","type":"BasicTicker"}},"id":"16603","type":"LinearAxis"},{"attributes":{},"id":"16638","type":"UnionRenderers"},{"attributes":{"source":{"id":"16626","type":"ColumnDataSource"}},"id":"16630","type":"CDSView"},{"attributes":{"formatter":{"id":"16633","type":"BasicTickFormatter"},"ticker":{"id":"16609","type":"BasicTicker"}},"id":"16608","type":"LinearAxis"},{"attributes":{},"id":"16616","type":"SaveTool"},{"attributes":{},"id":"16637","type":"Selection"},{"attributes":{},"id":"16604","type":"BasicTicker"},{"attributes":{},"id":"16609","type":"BasicTicker"},{"attributes":{},"id":"16599","type":"LinearScale"},{"attributes":{},"id":"16635","type":"BasicTickFormatter"}],"root_ids":["16594"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"c1fcc907-efff-4a0a-8340-5ba63cccaa09","roots":{"16594":"8a4e6ff2-c7b4-4736-9771-cc669e5834c2"}}];
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