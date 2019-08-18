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
      };var element = document.getElementById("b40c29fc-bfdd-4507-b2f9-9941f97254d0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b40c29fc-bfdd-4507-b2f9-9941f97254d0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"47ee5f6f-58b9-48a1-ac21-aa988419ae4c":{"roots":{"references":[{"attributes":{"ticker":{"id":"16625","type":"BasicTicker"}},"id":"16628","type":"Grid"},{"attributes":{"formatter":{"id":"16655","type":"BasicTickFormatter"},"ticker":{"id":"16630","type":"BasicTicker"}},"id":"16629","type":"LinearAxis"},{"attributes":{"formatter":{"id":"16657","type":"BasicTickFormatter"},"ticker":{"id":"16625","type":"BasicTicker"}},"id":"16624","type":"LinearAxis"},{"attributes":{"data_source":{"id":"16647","type":"ColumnDataSource"},"glyph":{"id":"16648","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16649","type":"Rect"},"selection_glyph":null,"view":{"id":"16651","type":"CDSView"}},"id":"16650","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"16653","type":"Title"},{"attributes":{"callback":null},"id":"16616","type":"DataRange1d"},{"attributes":{},"id":"16635","type":"WheelZoomTool"},{"attributes":{},"id":"16657","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"16624","type":"LinearAxis"}],"center":[{"id":"16628","type":"Grid"},{"id":"16633","type":"Grid"}],"left":[{"id":"16629","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16650","type":"GlyphRenderer"}],"title":{"id":"16653","type":"Title"},"toolbar":{"id":"16640","type":"Toolbar"},"x_range":{"id":"16616","type":"DataRange1d"},"x_scale":{"id":"16620","type":"LinearScale"},"y_range":{"id":"16618","type":"DataRange1d"},"y_scale":{"id":"16622","type":"LinearScale"}},"id":"16615","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16655","type":"BasicTickFormatter"},{"attributes":{},"id":"16639","type":"HelpTool"},{"attributes":{},"id":"16630","type":"BasicTicker"},{"attributes":{},"id":"16622","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16660","type":"BoxAnnotation"},{"attributes":{"source":{"id":"16647","type":"ColumnDataSource"}},"id":"16651","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16658","type":"Selection"},"selection_policy":{"id":"16659","type":"UnionRenderers"}},"id":"16647","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"16660","type":"BoxAnnotation"}},"id":"16636","type":"BoxZoomTool"},{"attributes":{},"id":"16620","type":"LinearScale"},{"attributes":{},"id":"16625","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16618","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"16630","type":"BasicTicker"}},"id":"16633","type":"Grid"},{"attributes":{},"id":"16637","type":"SaveTool"},{"attributes":{},"id":"16658","type":"Selection"},{"attributes":{},"id":"16659","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16648","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16649","type":"Rect"},{"attributes":{},"id":"16634","type":"PanTool"},{"attributes":{},"id":"16638","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16634","type":"PanTool"},{"id":"16635","type":"WheelZoomTool"},{"id":"16636","type":"BoxZoomTool"},{"id":"16637","type":"SaveTool"},{"id":"16638","type":"ResetTool"},{"id":"16639","type":"HelpTool"}]},"id":"16640","type":"Toolbar"}],"root_ids":["16615"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"47ee5f6f-58b9-48a1-ac21-aa988419ae4c","roots":{"16615":"b40c29fc-bfdd-4507-b2f9-9941f97254d0"}}];
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