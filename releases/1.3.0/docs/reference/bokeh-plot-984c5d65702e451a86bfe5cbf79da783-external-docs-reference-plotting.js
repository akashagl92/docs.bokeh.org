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
      };var element = document.getElementById("82e1f31f-6791-4ca9-9d53-4213b97bc7c1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '82e1f31f-6791-4ca9-9d53-4213b97bc7c1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"ae209bdb-879d-4bd1-baa4-982711bf2669":{"roots":{"references":[{"attributes":{},"id":"16621","type":"LinearScale"},{"attributes":{},"id":"16633","type":"PanTool"},{"attributes":{},"id":"16654","type":"BasicTickFormatter"},{"attributes":{},"id":"16624","type":"BasicTicker"},{"attributes":{},"id":"16634","type":"WheelZoomTool"},{"attributes":{},"id":"16656","type":"BasicTickFormatter"},{"attributes":{},"id":"16637","type":"ResetTool"},{"attributes":{"overlay":{"id":"16657","type":"BoxAnnotation"}},"id":"16635","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16657","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"16624","type":"BasicTicker"}},"id":"16627","type":"Grid"},{"attributes":{"below":[{"id":"16623","type":"LinearAxis"}],"center":[{"id":"16627","type":"Grid"},{"id":"16632","type":"Grid"}],"left":[{"id":"16628","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16649","type":"GlyphRenderer"}],"title":{"id":"16652","type":"Title"},"toolbar":{"id":"16639","type":"Toolbar"},"x_range":{"id":"16615","type":"DataRange1d"},"x_scale":{"id":"16619","type":"LinearScale"},"y_range":{"id":"16617","type":"DataRange1d"},"y_scale":{"id":"16621","type":"LinearScale"}},"id":"16614","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16636","type":"SaveTool"},{"attributes":{},"id":"16658","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"16656","type":"BasicTickFormatter"},"ticker":{"id":"16629","type":"BasicTicker"}},"id":"16628","type":"LinearAxis"},{"attributes":{},"id":"16638","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16648","type":"Rect"},{"attributes":{},"id":"16659","type":"Selection"},{"attributes":{},"id":"16629","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16615","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16633","type":"PanTool"},{"id":"16634","type":"WheelZoomTool"},{"id":"16635","type":"BoxZoomTool"},{"id":"16636","type":"SaveTool"},{"id":"16637","type":"ResetTool"},{"id":"16638","type":"HelpTool"}]},"id":"16639","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"16629","type":"BasicTicker"}},"id":"16632","type":"Grid"},{"attributes":{"callback":null},"id":"16617","type":"DataRange1d"},{"attributes":{"source":{"id":"16646","type":"ColumnDataSource"}},"id":"16650","type":"CDSView"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16647","type":"Rect"},{"attributes":{"formatter":{"id":"16654","type":"BasicTickFormatter"},"ticker":{"id":"16624","type":"BasicTicker"}},"id":"16623","type":"LinearAxis"},{"attributes":{},"id":"16619","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16659","type":"Selection"},"selection_policy":{"id":"16658","type":"UnionRenderers"}},"id":"16646","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"16652","type":"Title"},{"attributes":{"data_source":{"id":"16646","type":"ColumnDataSource"},"glyph":{"id":"16647","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16648","type":"Rect"},"selection_glyph":null,"view":{"id":"16650","type":"CDSView"}},"id":"16649","type":"GlyphRenderer"}],"root_ids":["16614"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"ae209bdb-879d-4bd1-baa4-982711bf2669","roots":{"16614":"82e1f31f-6791-4ca9-9d53-4213b97bc7c1"}}];
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