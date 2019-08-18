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
      };var element = document.getElementById("9e40d02c-8ac1-4ed7-afa7-31a6a3f0ff6a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9e40d02c-8ac1-4ed7-afa7-31a6a3f0ff6a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f996753a-de9e-436c-b47d-54f7827023b0":{"roots":{"references":[{"attributes":{"source":{"id":"24466","type":"ColumnDataSource"}},"id":"24471","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"24459","type":"BasicTicker"}},"id":"24462","type":"Grid"},{"attributes":{},"id":"24474","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24463","type":"TapTool"}]},"id":"24464","type":"Toolbar"},{"attributes":{},"id":"24476","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"24479","type":"OpenURL"}},"id":"24463","type":"TapTool"},{"attributes":{"callback":null,"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"24478","type":"Selection"},"selection_policy":{"id":"24477","type":"UnionRenderers"}},"id":"24466","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"24476","type":"BasicTickFormatter"},"ticker":{"id":"24454","type":"BasicTicker"}},"id":"24453","type":"LinearAxis"},{"attributes":{},"id":"24477","type":"UnionRenderers"},{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"24479","type":"OpenURL"},{"attributes":{},"id":"24449","type":"LinearScale"},{"attributes":{"formatter":{"id":"24474","type":"BasicTickFormatter"},"ticker":{"id":"24459","type":"BasicTicker"}},"id":"24458","type":"LinearAxis"},{"attributes":{},"id":"24451","type":"LinearScale"},{"attributes":{"ticker":{"id":"24454","type":"BasicTicker"}},"id":"24457","type":"Grid"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"24468","type":"Circle"},{"attributes":{"callback":null},"id":"24447","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"24469","type":"Circle"},{"attributes":{"callback":null},"id":"24445","type":"DataRange1d"},{"attributes":{},"id":"24454","type":"BasicTicker"},{"attributes":{"data_source":{"id":"24466","type":"ColumnDataSource"},"glyph":{"id":"24468","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24469","type":"Circle"},"selection_glyph":null,"view":{"id":"24471","type":"CDSView"}},"id":"24470","type":"GlyphRenderer"},{"attributes":{"text":"Click the Dots"},"id":"24443","type":"Title"},{"attributes":{"below":[{"id":"24453","type":"LinearAxis"}],"center":[{"id":"24457","type":"Grid"},{"id":"24462","type":"Grid"}],"left":[{"id":"24458","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"24470","type":"GlyphRenderer"}],"title":{"id":"24443","type":"Title"},"toolbar":{"id":"24464","type":"Toolbar"},"x_range":{"id":"24445","type":"DataRange1d"},"x_scale":{"id":"24449","type":"LinearScale"},"y_range":{"id":"24447","type":"DataRange1d"},"y_scale":{"id":"24451","type":"LinearScale"}},"id":"24442","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"24459","type":"BasicTicker"},{"attributes":{},"id":"24478","type":"Selection"}],"root_ids":["24442"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"f996753a-de9e-436c-b47d-54f7827023b0","roots":{"24442":"9e40d02c-8ac1-4ed7-afa7-31a6a3f0ff6a"}}];
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