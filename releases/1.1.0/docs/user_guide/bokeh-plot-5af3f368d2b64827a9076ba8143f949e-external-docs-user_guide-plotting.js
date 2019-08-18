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
      };var element = document.getElementById("3b70dcf3-2c24-4399-bd33-bc2bf90f5309");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3b70dcf3-2c24-4399-bd33-bc2bf90f5309' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
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
                    
                  var docs_json = '{"96b79db5-b710-4b40-be88-7fce20b5fb7a":{"roots":{"references":[{"attributes":{"source":{"id":"27716","type":"ColumnDataSource"}},"id":"27720","type":"CDSView"},{"attributes":{},"id":"27708","type":"HelpTool"},{"attributes":{},"id":"27731","type":"BasicTickFormatter"},{"attributes":{},"id":"27707","type":"ResetTool"},{"attributes":{"callback":null},"id":"27685","type":"DataRange1d"},{"attributes":{},"id":"27704","type":"WheelZoomTool"},{"attributes":{},"id":"27703","type":"PanTool"},{"attributes":{"formatter":{"id":"27729","type":"BasicTickFormatter"},"ticker":{"id":"27699","type":"BasicTicker"}},"id":"27698","type":"LinearAxis"},{"attributes":{"below":[{"id":"27693","type":"LinearAxis"}],"center":[{"id":"27697","type":"Grid"},{"id":"27702","type":"Grid"}],"left":[{"id":"27698","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27719","type":"GlyphRenderer"},{"id":"27724","type":"GlyphRenderer"}],"title":{"id":"27727","type":"Title"},"toolbar":{"id":"27709","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27685","type":"DataRange1d"},"x_scale":{"id":"27689","type":"LinearScale"},"y_range":{"id":"27687","type":"DataRange1d"},"y_scale":{"id":"27691","type":"LinearScale"}},"id":"27684","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"27731","type":"BasicTickFormatter"},"ticker":{"id":"27694","type":"BasicTicker"}},"id":"27693","type":"LinearAxis"},{"attributes":{},"id":"27699","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"27699","type":"BasicTicker"},"visible":false},"id":"27702","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"27718","type":"HexTile"},{"attributes":{},"id":"27735","type":"Selection"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"27722","type":"Text"},{"attributes":{},"id":"27706","type":"SaveTool"},{"attributes":{"ticker":{"id":"27694","type":"BasicTicker"},"visible":false},"id":"27697","type":"Grid"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"27723","type":"Text"},{"attributes":{"data_source":{"id":"27721","type":"ColumnDataSource"},"glyph":{"id":"27722","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27723","type":"Text"},"selection_glyph":null,"view":{"id":"27725","type":"CDSView"}},"id":"27724","type":"GlyphRenderer"},{"attributes":{"source":{"id":"27721","type":"ColumnDataSource"}},"id":"27725","type":"CDSView"},{"attributes":{"callback":null,"data":{"fill_color":["firebrick","firebrick","firebrick","navy","navy","navy","navy"],"q":[0,0,0,-1,-1,1,1],"r":[0,-1,1,0,1,-1,0]},"selected":{"id":"27733","type":"Selection"},"selection_policy":{"id":"27732","type":"UnionRenderers"}},"id":"27716","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"27687","type":"DataRange1d"},{"attributes":{},"id":"27729","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27703","type":"PanTool"},{"id":"27704","type":"WheelZoomTool"},{"id":"27705","type":"BoxZoomTool"},{"id":"27706","type":"SaveTool"},{"id":"27707","type":"ResetTool"},{"id":"27708","type":"HelpTool"}]},"id":"27709","type":"Toolbar"},{"attributes":{"data_source":{"id":"27716","type":"ColumnDataSource"},"glyph":{"id":"27717","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27718","type":"HexTile"},"selection_glyph":null,"view":{"id":"27720","type":"CDSView"}},"id":"27719","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"27727","type":"Title"},{"attributes":{"overlay":{"id":"27736","type":"BoxAnnotation"}},"id":"27705","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"text":["(0, 0)","(0, -1)","(0, 1)","(-1, 0)","(-1, 1)","(1, -1)","(1, 0)"],"x":{"__ndarray__":"AAAAAAAAAACqTFjoerbrv6pMWOh6tus/qkxY6Hq2+7+qTFjoerbrv6pMWOh6tus/qkxY6Hq2+z8=","dtype":"float64","shape":[7]},"y":{"__ndarray__":"AAAAAAAAAIAAAAAAAAD4PwAAAAAAAPi/AAAAAAAAAIAAAAAAAAD4vwAAAAAAAPg/AAAAAAAAAIA=","dtype":"float64","shape":[7]}},"selected":{"id":"27735","type":"Selection"},"selection_policy":{"id":"27734","type":"UnionRenderers"}},"id":"27721","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27736","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.5},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"27717","type":"HexTile"},{"attributes":{},"id":"27691","type":"LinearScale"},{"attributes":{},"id":"27734","type":"UnionRenderers"},{"attributes":{},"id":"27694","type":"BasicTicker"},{"attributes":{},"id":"27732","type":"UnionRenderers"},{"attributes":{},"id":"27733","type":"Selection"},{"attributes":{},"id":"27689","type":"LinearScale"}],"root_ids":["27684"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"96b79db5-b710-4b40-be88-7fce20b5fb7a","roots":{"27684":"3b70dcf3-2c24-4399-bd33-bc2bf90f5309"}}];
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