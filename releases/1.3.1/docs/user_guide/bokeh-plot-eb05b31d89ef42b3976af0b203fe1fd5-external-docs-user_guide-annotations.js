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
      };var element = document.getElementById("01497f58-31af-4b78-aeca-cf28a9977836");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '01497f58-31af-4b78-aeca-cf28a9977836' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
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
                    
                  var docs_json = '{"0e5d86ea-9eae-4af0-8059-7afb9167a4c1":{"roots":{"references":[{"attributes":{"source":{"id":"18494","type":"ColumnDataSource"}},"id":"18521","type":"CDSView"},{"attributes":{"callback":null,"end":3},"id":"18498","type":"Range1d"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"18518","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"18519","type":"Circle"},{"attributes":{"data_source":{"id":"18494","type":"ColumnDataSource"},"glyph":{"id":"18518","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18519","type":"Circle"},"selection_glyph":null,"view":{"id":"18521","type":"CDSView"}},"id":"18520","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"18504","type":"LinearAxis"}],"center":[{"id":"18508","type":"Grid"},{"id":"18513","type":"Grid"},{"id":"18528","type":"Legend"}],"left":[{"id":"18509","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"18520","type":"GlyphRenderer"}],"title":{"id":"18523","type":"Title"},"toolbar":{"id":"18515","type":"Toolbar"},"x_range":{"id":"18496","type":"Range1d"},"x_scale":{"id":"18500","type":"LinearScale"},"y_range":{"id":"18498","type":"Range1d"},"y_scale":{"id":"18502","type":"LinearScale"}},"id":"18495","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":7},"id":"18496","type":"Range1d"},{"attributes":{"ticker":{"id":"18505","type":"BasicTicker"}},"id":"18508","type":"Grid"},{"attributes":{},"id":"18505","type":"BasicTicker"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"18520","type":"GlyphRenderer"}]},"id":"18529","type":"LegendItem"},{"attributes":{"text":""},"id":"18523","type":"Title"},{"attributes":{"formatter":{"id":"18526","type":"BasicTickFormatter"},"ticker":{"id":"18505","type":"BasicTicker"}},"id":"18504","type":"LinearAxis"},{"attributes":{},"id":"18536","type":"Selection"},{"attributes":{},"id":"18500","type":"LinearScale"},{"attributes":{},"id":"18514","type":"SaveTool"},{"attributes":{},"id":"18526","type":"BasicTickFormatter"},{"attributes":{},"id":"18524","type":"BasicTickFormatter"},{"attributes":{},"id":"18502","type":"LinearScale"},{"attributes":{"formatter":{"id":"18524","type":"BasicTickFormatter"},"ticker":{"id":"18510","type":"BasicTicker"}},"id":"18509","type":"LinearAxis"},{"attributes":{"items":[{"id":"18529","type":"LegendItem"}]},"id":"18528","type":"Legend"},{"attributes":{"dimension":1,"ticker":{"id":"18510","type":"BasicTicker"}},"id":"18513","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18514","type":"SaveTool"}]},"id":"18515","type":"Toolbar"},{"attributes":{"callback":null,"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]},"selected":{"id":"18536","type":"Selection"},"selection_policy":{"id":"18537","type":"UnionRenderers"}},"id":"18494","type":"ColumnDataSource"},{"attributes":{},"id":"18537","type":"UnionRenderers"},{"attributes":{},"id":"18510","type":"BasicTicker"}],"root_ids":["18495"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"0e5d86ea-9eae-4af0-8059-7afb9167a4c1","roots":{"18495":"01497f58-31af-4b78-aeca-cf28a9977836"}}];
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