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
      };var element = document.getElementById("4d17f997-be6f-444b-b624-0c7f2a2e29b4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4d17f997-be6f-444b-b624-0c7f2a2e29b4' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"cbe3fc20-2abe-4ce5-9e08-30154b4e32af":{"roots":{"references":[{"attributes":{"source":{"id":"28697","type":"ColumnDataSource"}},"id":"28701","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.5},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"28693","type":"HexTile"},{"attributes":{},"id":"28679","type":"PanTool"},{"attributes":{"text":""},"id":"28703","type":"Title"},{"attributes":{},"id":"28680","type":"WheelZoomTool"},{"attributes":{},"id":"28705","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"28707","type":"BasicTickFormatter"},"ticker":{"id":"28675","type":"BasicTicker"}},"id":"28674","type":"LinearAxis"},{"attributes":{"overlay":{"id":"28708","type":"BoxAnnotation"}},"id":"28681","type":"BoxZoomTool"},{"attributes":{},"id":"28707","type":"BasicTickFormatter"},{"attributes":{},"id":"28667","type":"LinearScale"},{"attributes":{},"id":"28682","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28708","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"28705","type":"BasicTickFormatter"},"ticker":{"id":"28670","type":"BasicTicker"}},"id":"28669","type":"LinearAxis"},{"attributes":{},"id":"28683","type":"ResetTool"},{"attributes":{},"id":"28709","type":"UnionRenderers"},{"attributes":{},"id":"28684","type":"HelpTool"},{"attributes":{},"id":"28710","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"28675","type":"BasicTicker"},"visible":false},"id":"28678","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28679","type":"PanTool"},{"id":"28680","type":"WheelZoomTool"},{"id":"28681","type":"BoxZoomTool"},{"id":"28682","type":"SaveTool"},{"id":"28683","type":"ResetTool"},{"id":"28684","type":"HelpTool"}]},"id":"28685","type":"Toolbar"},{"attributes":{},"id":"28711","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"28694","type":"HexTile"},{"attributes":{"callback":null,"data":{"fill_color":["firebrick","firebrick","firebrick","navy","navy","navy","navy"],"q":[0,0,0,-1,-1,1,1],"r":[0,-1,1,0,1,-1,0]},"selected":{"id":"28710","type":"Selection"},"selection_policy":{"id":"28709","type":"UnionRenderers"}},"id":"28692","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"28663","type":"DataRange1d"},{"attributes":{},"id":"28712","type":"Selection"},{"attributes":{"below":[{"id":"28669","type":"LinearAxis"}],"center":[{"id":"28673","type":"Grid"},{"id":"28678","type":"Grid"}],"left":[{"id":"28674","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28695","type":"GlyphRenderer"},{"id":"28700","type":"GlyphRenderer"}],"title":{"id":"28703","type":"Title"},"toolbar":{"id":"28685","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28661","type":"DataRange1d"},"x_scale":{"id":"28665","type":"LinearScale"},"y_range":{"id":"28663","type":"DataRange1d"},"y_scale":{"id":"28667","type":"LinearScale"}},"id":"28660","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"28692","type":"ColumnDataSource"},"glyph":{"id":"28693","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28694","type":"HexTile"},"selection_glyph":null,"view":{"id":"28696","type":"CDSView"}},"id":"28695","type":"GlyphRenderer"},{"attributes":{"source":{"id":"28692","type":"ColumnDataSource"}},"id":"28696","type":"CDSView"},{"attributes":{"callback":null},"id":"28661","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"text":["(0, 0)","(0, -1)","(0, 1)","(-1, 0)","(-1, 1)","(1, -1)","(1, 0)"],"x":{"__ndarray__":"AAAAAAAAAACqTFjoerbrv6pMWOh6tus/qkxY6Hq2+7+qTFjoerbrv6pMWOh6tus/qkxY6Hq2+z8=","dtype":"float64","shape":[7]},"y":{"__ndarray__":"AAAAAAAAAIAAAAAAAAD4PwAAAAAAAPi/AAAAAAAAAIAAAAAAAAD4vwAAAAAAAPg/AAAAAAAAAIA=","dtype":"float64","shape":[7]}},"selected":{"id":"28712","type":"Selection"},"selection_policy":{"id":"28711","type":"UnionRenderers"}},"id":"28697","type":"ColumnDataSource"},{"attributes":{},"id":"28665","type":"LinearScale"},{"attributes":{"ticker":{"id":"28670","type":"BasicTicker"},"visible":false},"id":"28673","type":"Grid"},{"attributes":{},"id":"28675","type":"BasicTicker"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28698","type":"Text"},{"attributes":{},"id":"28670","type":"BasicTicker"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28699","type":"Text"},{"attributes":{"data_source":{"id":"28697","type":"ColumnDataSource"},"glyph":{"id":"28698","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28699","type":"Text"},"selection_glyph":null,"view":{"id":"28701","type":"CDSView"}},"id":"28700","type":"GlyphRenderer"}],"root_ids":["28660"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"cbe3fc20-2abe-4ce5-9e08-30154b4e32af","roots":{"28660":"4d17f997-be6f-444b-b624-0c7f2a2e29b4"}}];
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