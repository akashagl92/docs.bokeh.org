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
      };var element = document.getElementById("bd2cf925-c1a3-456b-bc67-de6f20a2433d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bd2cf925-c1a3-456b-bc67-de6f20a2433d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"88e4ea4b-8c87-4994-875a-7fb3fba71885":{"roots":{"references":[{"attributes":{},"id":"30184","type":"LinearScale"},{"attributes":{},"id":"30182","type":"BasicTicker"},{"attributes":{},"id":"30193","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"30189","type":"BasicTickFormatter"},"plot":{"id":"30173","type":"Plot"},"ticker":{"id":"30182","type":"BasicTicker"}},"id":"30179","type":"LinearAxis"},{"attributes":{"data_source":{"id":"30172","type":"ColumnDataSource"},"glyph":{"id":"30175","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"30177","type":"CDSView"}},"id":"30176","type":"GlyphRenderer"},{"attributes":{},"id":"30180","type":"BasicTicker"},{"attributes":{"callback":null},"id":"30188","type":"DataRange1d"},{"attributes":{"formatter":{"id":"30191","type":"BasicTickFormatter"},"plot":{"id":"30173","type":"Plot"},"ticker":{"id":"30180","type":"BasicTicker"}},"id":"30178","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"30194","type":"Selection"},"selection_policy":{"id":"30193","type":"UnionRenderers"}},"id":"30172","type":"ColumnDataSource"},{"attributes":{"source":{"id":"30172","type":"ColumnDataSource"}},"id":"30177","type":"CDSView"},{"attributes":{"callback":null},"id":"30185","type":"DataRange1d"},{"attributes":{},"id":"30194","type":"Selection"},{"attributes":{"below":[{"id":"30178","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"30179","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"30176","type":"GlyphRenderer"},{"id":"30178","type":"LinearAxis"},{"id":"30179","type":"LinearAxis"},{"id":"30181","type":"Grid"},{"id":"30183","type":"Grid"}],"title":null,"toolbar":{"id":"30187","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30185","type":"DataRange1d"},"x_scale":{"id":"30184","type":"LinearScale"},"y_range":{"id":"30188","type":"DataRange1d"},"y_scale":{"id":"30186","type":"LinearScale"}},"id":"30173","type":"Plot"},{"attributes":{},"id":"30186","type":"LinearScale"},{"attributes":{},"id":"30191","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"30173","type":"Plot"},"ticker":{"id":"30180","type":"BasicTicker"}},"id":"30181","type":"Grid"},{"attributes":{},"id":"30189","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"30175","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"30173","type":"Plot"},"ticker":{"id":"30182","type":"BasicTicker"}},"id":"30183","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"30187","type":"Toolbar"}],"root_ids":["30173"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"88e4ea4b-8c87-4994-875a-7fb3fba71885","roots":{"30173":"bd2cf925-c1a3-456b-bc67-de6f20a2433d"}}];
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