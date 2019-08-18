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
      };var element = document.getElementById("f6cab983-ab4a-4b40-a5ce-7a9cf365cb1f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f6cab983-ab4a-4b40-a5ce-7a9cf365cb1f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fa88801b-5a58-4496-9a68-c83b9e3241b9":{"roots":{"references":[{"attributes":{"text":""},"id":"15646","type":"Title"},{"attributes":{},"id":"15616","type":"LinearScale"},{"attributes":{},"id":"15648","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"15610","type":"DataRange1d"},{"attributes":{},"id":"15629","type":"WheelZoomTool"},{"attributes":{},"id":"15619","type":"BasicTicker"},{"attributes":{"data_source":{"id":"15641","type":"ColumnDataSource"},"glyph":{"id":"15642","type":"Hex"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15643","type":"Hex"},"selection_glyph":null,"view":{"id":"15645","type":"CDSView"}},"id":"15644","type":"GlyphRenderer"},{"attributes":{},"id":"15650","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"15654","type":"BoxAnnotation"}},"id":"15630","type":"BoxZoomTool"},{"attributes":{},"id":"15628","type":"PanTool"},{"attributes":{},"id":"15652","type":"Selection"},{"attributes":{},"id":"15631","type":"SaveTool"},{"attributes":{"ticker":{"id":"15619","type":"BasicTicker"}},"id":"15622","type":"Grid"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"15642","type":"Hex"},{"attributes":{},"id":"15653","type":"UnionRenderers"},{"attributes":{"below":[{"id":"15618","type":"LinearAxis"}],"center":[{"id":"15622","type":"Grid"},{"id":"15627","type":"Grid"}],"left":[{"id":"15623","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15644","type":"GlyphRenderer"}],"title":{"id":"15646","type":"Title"},"toolbar":{"id":"15634","type":"Toolbar"},"x_range":{"id":"15610","type":"DataRange1d"},"x_scale":{"id":"15614","type":"LinearScale"},"y_range":{"id":"15612","type":"DataRange1d"},"y_scale":{"id":"15616","type":"LinearScale"}},"id":"15609","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15632","type":"ResetTool"},{"attributes":{"formatter":{"id":"15648","type":"BasicTickFormatter"},"ticker":{"id":"15624","type":"BasicTicker"}},"id":"15623","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15654","type":"BoxAnnotation"},{"attributes":{},"id":"15633","type":"HelpTool"},{"attributes":{},"id":"15624","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15628","type":"PanTool"},{"id":"15629","type":"WheelZoomTool"},{"id":"15630","type":"BoxZoomTool"},{"id":"15631","type":"SaveTool"},{"id":"15632","type":"ResetTool"},{"id":"15633","type":"HelpTool"}]},"id":"15634","type":"Toolbar"},{"attributes":{"formatter":{"id":"15650","type":"BasicTickFormatter"},"ticker":{"id":"15619","type":"BasicTicker"}},"id":"15618","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"15624","type":"BasicTicker"}},"id":"15627","type":"Grid"},{"attributes":{"callback":null},"id":"15612","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"15643","type":"Hex"},{"attributes":{"source":{"id":"15641","type":"ColumnDataSource"}},"id":"15645","type":"CDSView"},{"attributes":{},"id":"15614","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15652","type":"Selection"},"selection_policy":{"id":"15653","type":"UnionRenderers"}},"id":"15641","type":"ColumnDataSource"}],"root_ids":["15609"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"fa88801b-5a58-4496-9a68-c83b9e3241b9","roots":{"15609":"f6cab983-ab4a-4b40-a5ce-7a9cf365cb1f"}}];
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