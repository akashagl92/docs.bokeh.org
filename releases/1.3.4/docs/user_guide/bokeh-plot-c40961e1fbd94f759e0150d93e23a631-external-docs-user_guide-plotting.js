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
      };var element = document.getElementById("712428dc-8303-459c-812b-ffb23a5ecf72");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '712428dc-8303-459c-812b-ffb23a5ecf72' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"38ad7c08-2c90-4f11-a708-3cb94753b0be":{"roots":{"references":[{"attributes":{},"id":"28851","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"28841","type":"BasicTicker"}},"id":"28844","type":"Grid"},{"attributes":{},"id":"28871","type":"BasicTickFormatter"},{"attributes":{"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"28864","type":"VArea"},{"attributes":{"overlay":{"id":"28876","type":"BoxAnnotation"}},"id":"28852","type":"BoxZoomTool"},{"attributes":{"source":{"id":"28863","type":"ColumnDataSource"}},"id":"28867","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"28846","type":"BasicTicker"}},"id":"28849","type":"Grid"},{"attributes":{},"id":"28874","type":"Selection"},{"attributes":{},"id":"28838","type":"LinearScale"},{"attributes":{"formatter":{"id":"28871","type":"BasicTickFormatter"},"ticker":{"id":"28846","type":"BasicTicker"}},"id":"28845","type":"LinearAxis"},{"attributes":{},"id":"28873","type":"BasicTickFormatter"},{"attributes":{},"id":"28854","type":"ResetTool"},{"attributes":{"callback":null},"id":"28832","type":"DataRange1d"},{"attributes":{},"id":"28855","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28876","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"28834","type":"DataRange1d"},{"attributes":{"below":[{"id":"28840","type":"LinearAxis"}],"center":[{"id":"28844","type":"Grid"},{"id":"28849","type":"Grid"}],"left":[{"id":"28845","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28866","type":"GlyphRenderer"}],"title":{"id":"28869","type":"Title"},"toolbar":{"id":"28856","type":"Toolbar"},"x_range":{"id":"28832","type":"DataRange1d"},"x_scale":{"id":"28836","type":"LinearScale"},"y_range":{"id":"28834","type":"DataRange1d"},"y_scale":{"id":"28838","type":"LinearScale"}},"id":"28831","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"28863","type":"ColumnDataSource"},"glyph":{"id":"28864","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28865","type":"VArea"},"selection_glyph":null,"view":{"id":"28867","type":"CDSView"}},"id":"28866","type":"GlyphRenderer"},{"attributes":{},"id":"28836","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28850","type":"PanTool"},{"id":"28851","type":"WheelZoomTool"},{"id":"28852","type":"BoxZoomTool"},{"id":"28853","type":"SaveTool"},{"id":"28854","type":"ResetTool"},{"id":"28855","type":"HelpTool"}]},"id":"28856","type":"Toolbar"},{"attributes":{"text":""},"id":"28869","type":"Title"},{"attributes":{"formatter":{"id":"28873","type":"BasicTickFormatter"},"ticker":{"id":"28841","type":"BasicTicker"}},"id":"28840","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y1":[2,6,4,3,5],"y2":[1,4,2,2,3]},"selected":{"id":"28874","type":"Selection"},"selection_policy":{"id":"28875","type":"UnionRenderers"}},"id":"28863","type":"ColumnDataSource"},{"attributes":{},"id":"28875","type":"UnionRenderers"},{"attributes":{},"id":"28850","type":"PanTool"},{"attributes":{},"id":"28846","type":"BasicTicker"},{"attributes":{},"id":"28853","type":"SaveTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"28865","type":"VArea"},{"attributes":{},"id":"28841","type":"BasicTicker"}],"root_ids":["28831"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"38ad7c08-2c90-4f11-a708-3cb94753b0be","roots":{"28831":"712428dc-8303-459c-812b-ffb23a5ecf72"}}];
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