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
      };var element = document.getElementById("23fee99b-03fc-4eb1-8674-b676d502699c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '23fee99b-03fc-4eb1-8674-b676d502699c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"615cb7e3-be1f-4082-8732-e6241d646962":{"roots":{"references":[{"attributes":{},"id":"10640","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"10642","type":"BasicTickFormatter"},"ticker":{"id":"10630","type":"BasicTicker"}},"id":"10628","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"10625","type":"Oval"},{"attributes":{"callback":null},"id":"10634","type":"DataRange1d"},{"attributes":{"formatter":{"id":"10640","type":"BasicTickFormatter"},"ticker":{"id":"10632","type":"BasicTicker"}},"id":"10629","type":"LinearAxis"},{"attributes":{},"id":"10635","type":"LinearScale"},{"attributes":{},"id":"10637","type":"LinearScale"},{"attributes":{},"id":"10644","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"10644","type":"Selection"},"selection_policy":{"id":"10643","type":"UnionRenderers"}},"id":"10622","type":"ColumnDataSource"},{"attributes":{},"id":"10642","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"10628","type":"LinearAxis"}],"center":[{"id":"10631","type":"Grid"},{"id":"10633","type":"Grid"}],"left":[{"id":"10629","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10626","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10638","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10634","type":"DataRange1d"},"x_scale":{"id":"10637","type":"LinearScale"},"y_range":{"id":"10636","type":"DataRange1d"},"y_scale":{"id":"10635","type":"LinearScale"}},"id":"10623","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10638","type":"Toolbar"},{"attributes":{"data_source":{"id":"10622","type":"ColumnDataSource"},"glyph":{"id":"10625","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10627","type":"CDSView"}},"id":"10626","type":"GlyphRenderer"},{"attributes":{"source":{"id":"10622","type":"ColumnDataSource"}},"id":"10627","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"10632","type":"BasicTicker"}},"id":"10633","type":"Grid"},{"attributes":{},"id":"10630","type":"BasicTicker"},{"attributes":{"callback":null},"id":"10636","type":"DataRange1d"},{"attributes":{},"id":"10632","type":"BasicTicker"},{"attributes":{"ticker":{"id":"10630","type":"BasicTicker"}},"id":"10631","type":"Grid"},{"attributes":{},"id":"10643","type":"UnionRenderers"}],"root_ids":["10623"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"615cb7e3-be1f-4082-8732-e6241d646962","roots":{"10623":"23fee99b-03fc-4eb1-8674-b676d502699c"}}];
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