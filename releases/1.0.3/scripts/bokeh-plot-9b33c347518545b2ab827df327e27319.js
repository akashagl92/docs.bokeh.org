(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("8653448b-9530-43d1-9a3a-db1c36c022af");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8653448b-9530-43d1-9a3a-db1c36c022af' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"e3c3680f-c0ed-419e-b743-261b02032958":{"roots":{"references":[{"attributes":{},"id":"14535","type":"LinearScale"},{"attributes":{"below":[{"id":"14537","type":"LinearAxis"}],"left":[{"id":"14542","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14537","type":"LinearAxis"},{"id":"14541","type":"Grid"},{"id":"14542","type":"LinearAxis"},{"id":"14546","type":"Grid"},{"id":"14554","type":"GlyphRenderer"}],"title":{"id":"14526","type":"Title"},"toolbar":{"id":"14548","type":"Toolbar"},"x_range":{"id":"14529","type":"DataRange1d"},"x_scale":{"id":"14533","type":"LinearScale"},"y_range":{"id":"14531","type":"DataRange1d"},"y_scale":{"id":"14535","type":"LinearScale"}},"id":"14527","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"14527","subtype":"Figure","type":"Plot"},"ticker":{"id":"14538","type":"BasicTicker"}},"id":"14541","type":"Grid"},{"attributes":{},"id":"14543","type":"BasicTicker"},{"attributes":{"formatter":{"id":"14559","type":"BasicTickFormatter"},"plot":{"id":"14527","subtype":"Figure","type":"Plot"},"ticker":{"id":"14538","type":"BasicTicker"}},"id":"14537","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"14552","type":"Circle"},{"attributes":{"source":{"id":"14550","type":"ColumnDataSource"}},"id":"14555","type":"CDSView"},{"attributes":{},"id":"14538","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"14526","type":"Title"},{"attributes":{},"id":"14559","type":"BasicTickFormatter"},{"attributes":{},"id":"14562","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14547","type":"TapTool"}]},"id":"14548","type":"Toolbar"},{"attributes":{"data_source":{"id":"14550","type":"ColumnDataSource"},"glyph":{"id":"14551","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14552","type":"Circle"},"selection_glyph":{"id":"14553","type":"Circle"},"view":{"id":"14555","type":"CDSView"}},"id":"14554","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"14529","type":"DataRange1d"},{"attributes":{"callback":null},"id":"14531","type":"DataRange1d"},{"attributes":{},"id":"14533","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"14551","type":"Circle"},{"attributes":{"formatter":{"id":"14557","type":"BasicTickFormatter"},"plot":{"id":"14527","subtype":"Figure","type":"Plot"},"ticker":{"id":"14543","type":"BasicTicker"}},"id":"14542","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14561","type":"Selection"},"selection_policy":{"id":"14562","type":"UnionRenderers"}},"id":"14550","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"14527","subtype":"Figure","type":"Plot"},"ticker":{"id":"14543","type":"BasicTicker"}},"id":"14546","type":"Grid"},{"attributes":{},"id":"14561","type":"Selection"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"14553","type":"Circle"},{"attributes":{},"id":"14557","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"14547","type":"TapTool"}],"root_ids":["14527"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"e3c3680f-c0ed-419e-b743-261b02032958","roots":{"14527":"8653448b-9530-43d1-9a3a-db1c36c022af"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();