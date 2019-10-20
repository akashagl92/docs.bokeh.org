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
      };var element = document.getElementById("987077a1-7a2f-481c-a38a-a0fbc7ccc1e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '987077a1-7a2f-481c-a38a-a0fbc7ccc1e7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"a238f40e-c56a-4524-879a-5d8a90a315c4":{"roots":{"references":[{"attributes":{"data_source":{"id":"27747","type":"ColumnDataSource"},"glyph":{"id":"27750","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27752","type":"CDSView"}},"id":"27751","type":"GlyphRenderer"},{"attributes":{},"id":"27764","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"27748","type":"Plot"},"ticker":{"id":"27755","type":"BasicTicker"}},"id":"27756","type":"Grid"},{"attributes":{"below":[{"id":"27753","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"27754","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"27751","type":"GlyphRenderer"},{"id":"27753","type":"LinearAxis"},{"id":"27754","type":"LinearAxis"},{"id":"27756","type":"Grid"},{"id":"27758","type":"Grid"}],"title":null,"toolbar":{"id":"27762","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27760","type":"DataRange1d"},"x_scale":{"id":"27759","type":"LinearScale"},"y_range":{"id":"27763","type":"DataRange1d"},"y_scale":{"id":"27761","type":"LinearScale"}},"id":"27748","type":"Plot"},{"attributes":{},"id":"27761","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"27762","type":"Toolbar"},{"attributes":{},"id":"27757","type":"BasicTicker"},{"attributes":{},"id":"27769","type":"Selection"},{"attributes":{"formatter":{"id":"27766","type":"BasicTickFormatter"},"plot":{"id":"27748","type":"Plot"},"ticker":{"id":"27755","type":"BasicTicker"}},"id":"27753","type":"LinearAxis"},{"attributes":{"source":{"id":"27747","type":"ColumnDataSource"}},"id":"27752","type":"CDSView"},{"attributes":{"callback":null},"id":"27763","type":"DataRange1d"},{"attributes":{},"id":"27759","type":"LinearScale"},{"attributes":{},"id":"27768","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"27760","type":"DataRange1d"},{"attributes":{"formatter":{"id":"27764","type":"BasicTickFormatter"},"plot":{"id":"27748","type":"Plot"},"ticker":{"id":"27757","type":"BasicTicker"}},"id":"27754","type":"LinearAxis"},{"attributes":{},"id":"27755","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"27769","type":"Selection"},"selection_policy":{"id":"27768","type":"UnionRenderers"}},"id":"27747","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"27750","type":"Annulus"},{"attributes":{"dimension":1,"plot":{"id":"27748","type":"Plot"},"ticker":{"id":"27757","type":"BasicTicker"}},"id":"27758","type":"Grid"},{"attributes":{},"id":"27766","type":"BasicTickFormatter"}],"root_ids":["27748"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a238f40e-c56a-4524-879a-5d8a90a315c4","roots":{"27748":"987077a1-7a2f-481c-a38a-a0fbc7ccc1e7"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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