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
      };var element = document.getElementById("c18e067f-da50-47ce-8bda-355d524f76ab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c18e067f-da50-47ce-8bda-355d524f76ab' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"bba46a61-3d2f-4529-8223-12cb118d102a":{"roots":{"references":[{"attributes":{},"id":"28785","type":"Selection"},{"attributes":{},"id":"28776","type":"LinearScale"},{"attributes":{"callback":null},"id":"28778","type":"DataRange1d"},{"attributes":{},"id":"28773","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28775","type":"Toolbar"},{"attributes":{},"id":"28779","type":"LinearScale"},{"attributes":{"source":{"id":"28763","type":"ColumnDataSource"}},"id":"28768","type":"CDSView"},{"attributes":{"below":[{"id":"28769","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28770","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28767","type":"GlyphRenderer"},{"id":"28769","type":"LinearAxis"},{"id":"28770","type":"LinearAxis"},{"id":"28772","type":"Grid"},{"id":"28774","type":"Grid"}],"title":null,"toolbar":{"id":"28775","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28778","type":"DataRange1d"},"x_scale":{"id":"28776","type":"LinearScale"},"y_range":{"id":"28777","type":"DataRange1d"},"y_scale":{"id":"28779","type":"LinearScale"}},"id":"28764","type":"Plot"},{"attributes":{},"id":"28771","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"28764","type":"Plot"},"ticker":{"id":"28773","type":"BasicTicker"}},"id":"28774","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"28785","type":"Selection"},"selection_policy":{"id":"28784","type":"UnionRenderers"}},"id":"28763","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"28766","type":"Oval"},{"attributes":{"callback":null},"id":"28777","type":"DataRange1d"},{"attributes":{},"id":"28783","type":"BasicTickFormatter"},{"attributes":{},"id":"28784","type":"UnionRenderers"},{"attributes":{"plot":{"id":"28764","type":"Plot"},"ticker":{"id":"28771","type":"BasicTicker"}},"id":"28772","type":"Grid"},{"attributes":{"data_source":{"id":"28763","type":"ColumnDataSource"},"glyph":{"id":"28766","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28768","type":"CDSView"}},"id":"28767","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"28781","type":"BasicTickFormatter"},"plot":{"id":"28764","type":"Plot"},"ticker":{"id":"28771","type":"BasicTicker"}},"id":"28769","type":"LinearAxis"},{"attributes":{"formatter":{"id":"28783","type":"BasicTickFormatter"},"plot":{"id":"28764","type":"Plot"},"ticker":{"id":"28773","type":"BasicTicker"}},"id":"28770","type":"LinearAxis"},{"attributes":{},"id":"28781","type":"BasicTickFormatter"}],"root_ids":["28764"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"bba46a61-3d2f-4529-8223-12cb118d102a","roots":{"28764":"c18e067f-da50-47ce-8bda-355d524f76ab"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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