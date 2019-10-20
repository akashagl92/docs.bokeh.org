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
      };var element = document.getElementById("397c286f-44fb-4893-83a9-420c099cf144");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '397c286f-44fb-4893-83a9-420c099cf144' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ac812c57-13dc-4eee-a349-0f41a7230a7d":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"18498","type":"Circle"},{"attributes":{"data_source":{"id":"18473","type":"ColumnDataSource"},"glyph":{"id":"18497","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18498","type":"Circle"},"selection_glyph":null,"view":{"id":"18500","type":"CDSView"}},"id":"18499","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18493","type":"SaveTool"}]},"id":"18494","type":"Toolbar"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"18499","type":"GlyphRenderer"}]},"id":"18508","type":"LegendItem"},{"attributes":{"dimension":1,"ticker":{"id":"18489","type":"BasicTicker"}},"id":"18492","type":"Grid"},{"attributes":{"callback":null,"end":3},"id":"18477","type":"Range1d"},{"attributes":{"formatter":{"id":"18503","type":"BasicTickFormatter"},"ticker":{"id":"18489","type":"BasicTicker"}},"id":"18488","type":"LinearAxis"},{"attributes":{"ticker":{"id":"18484","type":"BasicTicker"}},"id":"18487","type":"Grid"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"18497","type":"Circle"},{"attributes":{},"id":"18489","type":"BasicTicker"},{"attributes":{"text":""},"id":"18501","type":"Title"},{"attributes":{},"id":"18484","type":"BasicTicker"},{"attributes":{},"id":"18479","type":"LinearScale"},{"attributes":{"below":[{"id":"18483","type":"LinearAxis"}],"center":[{"id":"18487","type":"Grid"},{"id":"18492","type":"Grid"},{"id":"18507","type":"Legend"}],"left":[{"id":"18488","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"18499","type":"GlyphRenderer"}],"title":{"id":"18501","type":"Title"},"toolbar":{"id":"18494","type":"Toolbar"},"x_range":{"id":"18475","type":"Range1d"},"x_scale":{"id":"18479","type":"LinearScale"},"y_range":{"id":"18477","type":"Range1d"},"y_scale":{"id":"18481","type":"LinearScale"}},"id":"18474","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18481","type":"LinearScale"},{"attributes":{"callback":null,"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]},"selected":{"id":"18515","type":"Selection"},"selection_policy":{"id":"18516","type":"UnionRenderers"}},"id":"18473","type":"ColumnDataSource"},{"attributes":{},"id":"18493","type":"SaveTool"},{"attributes":{"source":{"id":"18473","type":"ColumnDataSource"}},"id":"18500","type":"CDSView"},{"attributes":{"formatter":{"id":"18505","type":"BasicTickFormatter"},"ticker":{"id":"18484","type":"BasicTicker"}},"id":"18483","type":"LinearAxis"},{"attributes":{"callback":null,"end":7},"id":"18475","type":"Range1d"},{"attributes":{},"id":"18505","type":"BasicTickFormatter"},{"attributes":{},"id":"18503","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"18508","type":"LegendItem"}]},"id":"18507","type":"Legend"},{"attributes":{},"id":"18515","type":"Selection"},{"attributes":{},"id":"18516","type":"UnionRenderers"}],"root_ids":["18474"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"ac812c57-13dc-4eee-a349-0f41a7230a7d","roots":{"18474":"397c286f-44fb-4893-83a9-420c099cf144"}}];
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