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
      };var element = document.getElementById("5d7697cd-6d6b-4c2a-aa86-a32f3141090a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d7697cd-6d6b-4c2a-aa86-a32f3141090a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"198d682c-805d-409e-882d-d3fe3d4ebea6":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"29766","type":"Plot"},"ticker":{"id":"29775","type":"BasicTicker"}},"id":"29776","type":"Grid"},{"attributes":{},"id":"29787","type":"UnionRenderers"},{"attributes":{"below":[{"id":"29771","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29772","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29769","type":"GlyphRenderer"},{"id":"29771","type":"LinearAxis"},{"id":"29772","type":"LinearAxis"},{"id":"29774","type":"Grid"},{"id":"29776","type":"Grid"}],"title":null,"toolbar":{"id":"29778","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29780","type":"DataRange1d"},"x_scale":{"id":"29779","type":"LinearScale"},"y_range":{"id":"29777","type":"DataRange1d"},"y_scale":{"id":"29781","type":"LinearScale"}},"id":"29766","type":"Plot"},{"attributes":{"callback":null},"id":"29777","type":"DataRange1d"},{"attributes":{},"id":"29784","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"29765","type":"ColumnDataSource"}},"id":"29770","type":"CDSView"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"29768","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29778","type":"Toolbar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}},"selected":{"id":"29786","type":"Selection"},"selection_policy":{"id":"29787","type":"UnionRenderers"}},"id":"29765","type":"ColumnDataSource"},{"attributes":{},"id":"29782","type":"BasicTickFormatter"},{"attributes":{},"id":"29781","type":"LinearScale"},{"attributes":{"formatter":{"id":"29784","type":"BasicTickFormatter"},"plot":{"id":"29766","type":"Plot"},"ticker":{"id":"29773","type":"BasicTicker"}},"id":"29771","type":"LinearAxis"},{"attributes":{"formatter":{"id":"29782","type":"BasicTickFormatter"},"plot":{"id":"29766","type":"Plot"},"ticker":{"id":"29775","type":"BasicTicker"}},"id":"29772","type":"LinearAxis"},{"attributes":{},"id":"29773","type":"BasicTicker"},{"attributes":{"plot":{"id":"29766","type":"Plot"},"ticker":{"id":"29773","type":"BasicTicker"}},"id":"29774","type":"Grid"},{"attributes":{},"id":"29775","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29765","type":"ColumnDataSource"},"glyph":{"id":"29768","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29770","type":"CDSView"}},"id":"29769","type":"GlyphRenderer"},{"attributes":{},"id":"29779","type":"LinearScale"},{"attributes":{},"id":"29786","type":"Selection"},{"attributes":{"callback":null},"id":"29780","type":"DataRange1d"}],"root_ids":["29766"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"198d682c-805d-409e-882d-d3fe3d4ebea6","roots":{"29766":"5d7697cd-6d6b-4c2a-aa86-a32f3141090a"}}];
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