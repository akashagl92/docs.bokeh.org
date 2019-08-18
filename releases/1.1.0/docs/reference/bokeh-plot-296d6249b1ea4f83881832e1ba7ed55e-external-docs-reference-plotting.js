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
      };var element = document.getElementById("e6674116-1802-4e9f-9626-6d85e5a860aa");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e6674116-1802-4e9f-9626-6d85e5a860aa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e9670be7-dd6f-411d-a05f-344ea100015c":{"roots":{"references":[{"attributes":{"data_source":{"id":"16609","type":"ColumnDataSource"},"glyph":{"id":"16610","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16611","type":"Wedge"},"selection_glyph":null,"view":{"id":"16613","type":"CDSView"}},"id":"16612","type":"GlyphRenderer"},{"attributes":{},"id":"16584","type":"LinearScale"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16611","type":"Wedge"},{"attributes":{"callback":null},"id":"16580","type":"DataRange1d"},{"attributes":{"source":{"id":"16609","type":"ColumnDataSource"}},"id":"16613","type":"CDSView"},{"attributes":{},"id":"16582","type":"LinearScale"},{"attributes":{"text":""},"id":"16615","type":"Title"},{"attributes":{},"id":"16596","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"16592","type":"BasicTicker"}},"id":"16595","type":"Grid"},{"attributes":{"formatter":{"id":"16619","type":"BasicTickFormatter"},"ticker":{"id":"16587","type":"BasicTicker"}},"id":"16586","type":"LinearAxis"},{"attributes":{},"id":"16617","type":"BasicTickFormatter"},{"attributes":{},"id":"16597","type":"WheelZoomTool"},{"attributes":{},"id":"16619","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16622","type":"BoxAnnotation"}},"id":"16598","type":"BoxZoomTool"},{"attributes":{},"id":"16587","type":"BasicTicker"},{"attributes":{},"id":"16620","type":"UnionRenderers"},{"attributes":{},"id":"16599","type":"SaveTool"},{"attributes":{"ticker":{"id":"16587","type":"BasicTicker"}},"id":"16590","type":"Grid"},{"attributes":{},"id":"16621","type":"Selection"},{"attributes":{},"id":"16600","type":"ResetTool"},{"attributes":{"below":[{"id":"16586","type":"LinearAxis"}],"center":[{"id":"16590","type":"Grid"},{"id":"16595","type":"Grid"}],"left":[{"id":"16591","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16612","type":"GlyphRenderer"}],"title":{"id":"16615","type":"Title"},"toolbar":{"id":"16602","type":"Toolbar"},"x_range":{"id":"16578","type":"DataRange1d"},"x_scale":{"id":"16582","type":"LinearScale"},"y_range":{"id":"16580","type":"DataRange1d"},"y_scale":{"id":"16584","type":"LinearScale"}},"id":"16577","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"16617","type":"BasicTickFormatter"},"ticker":{"id":"16592","type":"BasicTicker"}},"id":"16591","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16622","type":"BoxAnnotation"},{"attributes":{},"id":"16601","type":"HelpTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16610","type":"Wedge"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16621","type":"Selection"},"selection_policy":{"id":"16620","type":"UnionRenderers"}},"id":"16609","type":"ColumnDataSource"},{"attributes":{},"id":"16592","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16578","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16596","type":"PanTool"},{"id":"16597","type":"WheelZoomTool"},{"id":"16598","type":"BoxZoomTool"},{"id":"16599","type":"SaveTool"},{"id":"16600","type":"ResetTool"},{"id":"16601","type":"HelpTool"}]},"id":"16602","type":"Toolbar"}],"root_ids":["16577"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"e9670be7-dd6f-411d-a05f-344ea100015c","roots":{"16577":"e6674116-1802-4e9f-9626-6d85e5a860aa"}}];
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