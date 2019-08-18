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
      };var element = document.getElementById("85ae8850-37c2-4405-9035-ee6609cff00b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '85ae8850-37c2-4405-9035-ee6609cff00b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bb2d3349-459c-4430-a8a2-56b5a5613aba":{"roots":{"references":[{"attributes":{"formatter":{"id":"29353","type":"BasicTickFormatter"},"ticker":{"id":"29322","type":"BasicTicker"}},"id":"29321","type":"LinearAxis"},{"attributes":{"callback":null},"id":"29315","type":"DataRange1d"},{"attributes":{},"id":"29356","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"29327","type":"BasicTicker"}},"id":"29330","type":"Grid"},{"attributes":{},"id":"29331","type":"PanTool"},{"attributes":{},"id":"29322","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29344","type":"ColumnDataSource"},"glyph":{"id":"29345","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29346","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"29348","type":"CDSView"}},"id":"29347","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"xs":[[[[1,2,2,1],[1.2,1.6,1.6],[1.8,1.8,1.6]]]],"ys":[[[[3,3,4,4],[3.2,3.6,3.2],[3.4,3.8,3.8]]]]},"selected":{"id":"29355","type":"Selection"},"selection_policy":{"id":"29356","type":"UnionRenderers"}},"id":"29344","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29331","type":"PanTool"},{"id":"29332","type":"WheelZoomTool"},{"id":"29333","type":"BoxZoomTool"},{"id":"29334","type":"SaveTool"},{"id":"29335","type":"ResetTool"},{"id":"29336","type":"HelpTool"}]},"id":"29337","type":"Toolbar"},{"attributes":{"source":{"id":"29344","type":"ColumnDataSource"}},"id":"29348","type":"CDSView"},{"attributes":{"ticker":{"id":"29322","type":"BasicTicker"}},"id":"29325","type":"Grid"},{"attributes":{},"id":"29319","type":"LinearScale"},{"attributes":{},"id":"29317","type":"LinearScale"},{"attributes":{"callback":null},"id":"29313","type":"DataRange1d"},{"attributes":{},"id":"29336","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29357","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"29351","type":"BasicTickFormatter"},"ticker":{"id":"29327","type":"BasicTicker"}},"id":"29326","type":"LinearAxis"},{"attributes":{},"id":"29355","type":"Selection"},{"attributes":{},"id":"29327","type":"BasicTicker"},{"attributes":{"overlay":{"id":"29357","type":"BoxAnnotation"}},"id":"29333","type":"BoxZoomTool"},{"attributes":{},"id":"29334","type":"SaveTool"},{"attributes":{"text":""},"id":"29349","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29345","type":"MultiPolygons"},{"attributes":{},"id":"29332","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"29321","type":"LinearAxis"}],"center":[{"id":"29325","type":"Grid"},{"id":"29330","type":"Grid"}],"left":[{"id":"29326","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29347","type":"GlyphRenderer"}],"title":{"id":"29349","type":"Title"},"toolbar":{"id":"29337","type":"Toolbar"},"x_range":{"id":"29313","type":"DataRange1d"},"x_scale":{"id":"29317","type":"LinearScale"},"y_range":{"id":"29315","type":"DataRange1d"},"y_scale":{"id":"29319","type":"LinearScale"}},"id":"29312","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29335","type":"ResetTool"},{"attributes":{},"id":"29351","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29346","type":"MultiPolygons"},{"attributes":{},"id":"29353","type":"BasicTickFormatter"}],"root_ids":["29312"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"bb2d3349-459c-4430-a8a2-56b5a5613aba","roots":{"29312":"85ae8850-37c2-4405-9035-ee6609cff00b"}}];
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