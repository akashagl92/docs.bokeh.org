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
      };var element = document.getElementById("0601b47a-d94e-47f5-bcff-c3e95f1dc233");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0601b47a-d94e-47f5-bcff-c3e95f1dc233' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7612de97-68e2-4db9-80a5-638dffc175f6":{"roots":{"references":[{"attributes":{},"id":"30995","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"30960","type":"DataRange1d"},{"attributes":{},"id":"30993","type":"UnionRenderers"},{"attributes":{"source":{"id":"30977","type":"ColumnDataSource"}},"id":"30981","type":"CDSView"},{"attributes":{},"id":"30964","type":"LinearScale"},{"attributes":{"below":[{"id":"30966","type":"LinearAxis"}],"center":[{"id":"30970","type":"Grid"},{"id":"30975","type":"Grid"}],"left":[{"id":"30971","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"30980","type":"GlyphRenderer"},{"id":"30985","type":"GlyphRenderer"}],"title":{"id":"30988","type":"Title"},"toolbar":{"id":"30976","type":"Toolbar"},"x_range":{"id":"30958","type":"DataRange1d"},"x_scale":{"id":"30962","type":"LinearScale"},"y_range":{"id":"30960","type":"DataRange1d"},"y_scale":{"id":"30964","type":"LinearScale"}},"id":"30957","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30992","type":"BasicTickFormatter"},{"attributes":{},"id":"30962","type":"LinearScale"},{"attributes":{},"id":"30994","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"30996","type":"Selection"},"selection_policy":{"id":"30995","type":"UnionRenderers"}},"id":"30982","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"30994","type":"Selection"},"selection_policy":{"id":"30993","type":"UnionRenderers"}},"id":"30977","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"30958","type":"DataRange1d"},{"attributes":{},"id":"30967","type":"BasicTicker"},{"attributes":{},"id":"30972","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"30979","type":"Line"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"30983","type":"Line"},{"attributes":{"dimension":1,"ticker":{"id":"30972","type":"BasicTicker"}},"id":"30975","type":"Grid"},{"attributes":{"formatter":{"id":"30990","type":"BasicTickFormatter"},"ticker":{"id":"30972","type":"BasicTicker"}},"id":"30971","type":"LinearAxis"},{"attributes":{"text":""},"id":"30988","type":"Title"},{"attributes":{"data_source":{"id":"30982","type":"ColumnDataSource"},"glyph":{"id":"30983","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30984","type":"Line"},"selection_glyph":null,"view":{"id":"30986","type":"CDSView"},"visible":false},"id":"30985","type":"GlyphRenderer"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"30978","type":"Line"},{"attributes":{"ticker":{"id":"30967","type":"BasicTicker"},"visible":false},"id":"30970","type":"Grid"},{"attributes":{"source":{"id":"30982","type":"ColumnDataSource"}},"id":"30986","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"30984","type":"Line"},{"attributes":{"data_source":{"id":"30977","type":"ColumnDataSource"},"glyph":{"id":"30978","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30979","type":"Line"},"selection_glyph":null,"view":{"id":"30981","type":"CDSView"}},"id":"30980","type":"GlyphRenderer"},{"attributes":{},"id":"30996","type":"Selection"},{"attributes":{"formatter":{"id":"30992","type":"BasicTickFormatter"},"ticker":{"id":"30967","type":"BasicTicker"},"visible":false},"id":"30966","type":"LinearAxis"},{"attributes":{},"id":"30990","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"30976","type":"Toolbar"}],"root_ids":["30957"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"7612de97-68e2-4db9-80a5-638dffc175f6","roots":{"30957":"0601b47a-d94e-47f5-bcff-c3e95f1dc233"}}];
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