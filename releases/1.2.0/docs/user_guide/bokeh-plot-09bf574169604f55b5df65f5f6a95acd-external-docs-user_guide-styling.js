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
      };var element = document.getElementById("bd42e4fa-565a-451d-abc2-9fc355daf472");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bd42e4fa-565a-451d-abc2-9fc355daf472' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"b3b2f366-95fb-41fb-954f-3112ca3705d5":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"33422","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"33414","type":"BasicTicker"}},"id":"33417","type":"Grid"},{"attributes":{"below":[{"id":"33408","type":"LinearAxis"}],"center":[{"id":"33412","type":"Grid"},{"id":"33417","type":"Grid"}],"left":[{"id":"33413","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33424","type":"GlyphRenderer"}],"title":{"id":"33398","type":"Title"},"toolbar":{"id":"33419","type":"Toolbar"},"x_range":{"id":"33400","type":"DataRange1d"},"x_scale":{"id":"33404","type":"LinearScale"},"y_range":{"id":"33402","type":"DataRange1d"},"y_scale":{"id":"33406","type":"LinearScale"}},"id":"33397","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"33431","type":"BasicTickFormatter"},"ticker":{"id":"33409","type":"BasicTicker"}},"id":"33408","type":"LinearAxis"},{"attributes":{"data_source":{"id":"33421","type":"ColumnDataSource"},"glyph":{"id":"33422","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33427","type":"Circle"},"selection_glyph":{"id":"33426","type":"Circle"},"view":{"id":"33425","type":"CDSView"}},"id":"33424","type":"GlyphRenderer"},{"attributes":{},"id":"33409","type":"BasicTicker"},{"attributes":{"source":{"id":"33421","type":"ColumnDataSource"}},"id":"33425","type":"CDSView"},{"attributes":{"ticker":{"id":"33409","type":"BasicTicker"}},"id":"33412","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33433","type":"Selection"},"selection_policy":{"id":"33434","type":"UnionRenderers"}},"id":"33421","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"33426","type":"Circle"},{"attributes":{"formatter":{"id":"33429","type":"BasicTickFormatter"},"ticker":{"id":"33414","type":"BasicTicker"}},"id":"33413","type":"LinearAxis"},{"attributes":{"text":"Select a circle"},"id":"33398","type":"Title"},{"attributes":{"callback":null},"id":"33418","type":"TapTool"},{"attributes":{},"id":"33414","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33400","type":"DataRange1d"},{"attributes":{},"id":"33434","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"33402","type":"DataRange1d"},{"attributes":{},"id":"33433","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33418","type":"TapTool"}]},"id":"33419","type":"Toolbar"},{"attributes":{},"id":"33431","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"33427","type":"Circle"},{"attributes":{},"id":"33404","type":"LinearScale"},{"attributes":{},"id":"33406","type":"LinearScale"},{"attributes":{},"id":"33429","type":"BasicTickFormatter"}],"root_ids":["33397"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"b3b2f366-95fb-41fb-954f-3112ca3705d5","roots":{"33397":"bd42e4fa-565a-451d-abc2-9fc355daf472"}}];
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