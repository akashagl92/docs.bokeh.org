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
      };var element = document.getElementById("f4ccc3a6-cd14-47d9-b268-bc3cc3066102");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f4ccc3a6-cd14-47d9-b268-bc3cc3066102' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"80db40cb-ba7d-40d1-aedf-8ac2f178ce4f":{"roots":{"references":[{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"30165","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"30174","type":"Toolbar"},{"attributes":{},"id":"30175","type":"LinearScale"},{"attributes":{"callback":null},"id":"30176","type":"DataRange1d"},{"attributes":{"formatter":{"id":"30180","type":"BasicTickFormatter"},"plot":{"id":"30163","type":"Plot"},"ticker":{"id":"30170","type":"BasicTicker"}},"id":"30168","type":"LinearAxis"},{"attributes":{"callback":null},"id":"30177","type":"DataRange1d"},{"attributes":{"source":{"id":"30162","type":"ColumnDataSource"}},"id":"30167","type":"CDSView"},{"attributes":{},"id":"30170","type":"BasicTicker"},{"attributes":{},"id":"30178","type":"LinearScale"},{"attributes":{"plot":{"id":"30163","type":"Plot"},"ticker":{"id":"30170","type":"BasicTicker"}},"id":"30171","type":"Grid"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"30183","type":"Selection"},"selection_policy":{"id":"30184","type":"UnionRenderers"}},"id":"30162","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30162","type":"ColumnDataSource"},"glyph":{"id":"30165","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"30167","type":"CDSView"}},"id":"30166","type":"GlyphRenderer"},{"attributes":{},"id":"30184","type":"UnionRenderers"},{"attributes":{},"id":"30182","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"30163","type":"Plot"},"ticker":{"id":"30172","type":"BasicTicker"}},"id":"30173","type":"Grid"},{"attributes":{},"id":"30180","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"30168","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"30169","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"30166","type":"GlyphRenderer"},{"id":"30168","type":"LinearAxis"},{"id":"30169","type":"LinearAxis"},{"id":"30171","type":"Grid"},{"id":"30173","type":"Grid"}],"title":null,"toolbar":{"id":"30174","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30177","type":"DataRange1d"},"x_scale":{"id":"30178","type":"LinearScale"},"y_range":{"id":"30176","type":"DataRange1d"},"y_scale":{"id":"30175","type":"LinearScale"}},"id":"30163","type":"Plot"},{"attributes":{},"id":"30172","type":"BasicTicker"},{"attributes":{},"id":"30183","type":"Selection"},{"attributes":{"formatter":{"id":"30182","type":"BasicTickFormatter"},"plot":{"id":"30163","type":"Plot"},"ticker":{"id":"30172","type":"BasicTicker"}},"id":"30169","type":"LinearAxis"}],"root_ids":["30163"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"80db40cb-ba7d-40d1-aedf-8ac2f178ce4f","roots":{"30163":"f4ccc3a6-cd14-47d9-b268-bc3cc3066102"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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