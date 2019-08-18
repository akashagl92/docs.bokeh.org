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
      };var element = document.getElementById("c7d9e3f3-46d6-4220-ad87-abbb2ddfac6b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c7d9e3f3-46d6-4220-ad87-abbb2ddfac6b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"77f9af50-6cfa-48e8-abc2-d813ecfac8a5":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]},"selected":{"id":"21756","type":"Selection"},"selection_policy":{"id":"21757","type":"UnionRenderers"}},"id":"21745","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"21746","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"21747","type":"Circle"},{"attributes":{"callback":null},"id":"21722","type":"DataRange1d"},{"attributes":{"formatter":{"id":"21755","type":"BasicTickFormatter"},"ticker":{"id":"21729","type":"BasicTicker"}},"id":"21728","type":"LinearAxis"},{"attributes":{},"id":"21739","type":"ResetTool"},{"attributes":{},"id":"21726","type":"LinearScale"},{"attributes":{},"id":"21729","type":"BasicTicker"},{"attributes":{"data_source":{"id":"21745","type":"ColumnDataSource"},"glyph":{"id":"21746","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21747","type":"Circle"},"selection_glyph":null,"view":{"id":"21749","type":"CDSView"}},"id":"21748","type":"GlyphRenderer"},{"attributes":{},"id":"21753","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"21728","type":"LinearAxis"}],"center":[{"id":"21732","type":"Grid"},{"id":"21737","type":"Grid"}],"left":[{"id":"21733","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21748","type":"GlyphRenderer"}],"title":{"id":"21751","type":"Title"},"toolbar":{"id":"21741","type":"Toolbar"},"x_range":{"id":"21720","type":"DataRange1d"},"x_scale":{"id":"21724","type":"LinearScale"},"y_range":{"id":"21722","type":"DataRange1d"},"y_scale":{"id":"21726","type":"LinearScale"}},"id":"21719","subtype":"Figure","type":"Plot"},{"attributes":{"text":""},"id":"21751","type":"Title"},{"attributes":{"formatter":{"id":"21753","type":"BasicTickFormatter"},"ticker":{"id":"21734","type":"BasicTicker"}},"id":"21733","type":"LinearAxis"},{"attributes":{},"id":"21724","type":"LinearScale"},{"attributes":{},"id":"21755","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21738","type":"PanTool"},{"id":"21739","type":"ResetTool"},{"id":"21740","type":"SaveTool"}]},"id":"21741","type":"Toolbar"},{"attributes":{"source":{"id":"21745","type":"ColumnDataSource"}},"id":"21749","type":"CDSView"},{"attributes":{},"id":"21757","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"21729","type":"BasicTicker"}},"id":"21732","type":"Grid"},{"attributes":{},"id":"21740","type":"SaveTool"},{"attributes":{},"id":"21734","type":"BasicTicker"},{"attributes":{},"id":"21756","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"21734","type":"BasicTicker"}},"id":"21737","type":"Grid"},{"attributes":{"callback":null},"id":"21720","type":"DataRange1d"},{"attributes":{},"id":"21738","type":"PanTool"}],"root_ids":["21719"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"77f9af50-6cfa-48e8-abc2-d813ecfac8a5","roots":{"21719":"c7d9e3f3-46d6-4220-ad87-abbb2ddfac6b"}}];
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