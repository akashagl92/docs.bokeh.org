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
      };var element = document.getElementById("bae977bd-44b8-4a96-aa75-32fd6b0b7d29");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bae977bd-44b8-4a96-aa75-32fd6b0b7d29' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"af9c2752-bfd3-4de3-85a8-f6052ea298fb":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"30575","type":"Plot"},"ticker":{"id":"30584","type":"BasicTicker"}},"id":"30585","type":"Grid"},{"attributes":{},"id":"30595","type":"UnionRenderers"},{"attributes":{"plot":{"id":"30575","type":"Plot"},"ticker":{"id":"30582","type":"BasicTicker"}},"id":"30583","type":"Grid"},{"attributes":{},"id":"30596","type":"Selection"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"30596","type":"Selection"},"selection_policy":{"id":"30595","type":"UnionRenderers"}},"id":"30574","type":"ColumnDataSource"},{"attributes":{},"id":"30588","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"30589","type":"Toolbar"},{"attributes":{},"id":"30582","type":"BasicTicker"},{"attributes":{},"id":"30586","type":"LinearScale"},{"attributes":{"formatter":{"id":"30591","type":"BasicTickFormatter"},"plot":{"id":"30575","type":"Plot"},"ticker":{"id":"30584","type":"BasicTicker"}},"id":"30581","type":"LinearAxis"},{"attributes":{"callback":null},"id":"30590","type":"DataRange1d"},{"attributes":{"source":{"id":"30574","type":"ColumnDataSource"}},"id":"30579","type":"CDSView"},{"attributes":{"below":[{"id":"30580","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"30581","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"30578","type":"GlyphRenderer"},{"id":"30580","type":"LinearAxis"},{"id":"30581","type":"LinearAxis"},{"id":"30583","type":"Grid"},{"id":"30585","type":"Grid"}],"title":null,"toolbar":{"id":"30589","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30587","type":"DataRange1d"},"x_scale":{"id":"30586","type":"LinearScale"},"y_range":{"id":"30590","type":"DataRange1d"},"y_scale":{"id":"30588","type":"LinearScale"}},"id":"30575","type":"Plot"},{"attributes":{"callback":null},"id":"30587","type":"DataRange1d"},{"attributes":{},"id":"30593","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"30574","type":"ColumnDataSource"},"glyph":{"id":"30577","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"30579","type":"CDSView"}},"id":"30578","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#3288bd"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"30577","type":"Dash"},{"attributes":{},"id":"30591","type":"BasicTickFormatter"},{"attributes":{},"id":"30584","type":"BasicTicker"},{"attributes":{"formatter":{"id":"30593","type":"BasicTickFormatter"},"plot":{"id":"30575","type":"Plot"},"ticker":{"id":"30582","type":"BasicTicker"}},"id":"30580","type":"LinearAxis"}],"root_ids":["30575"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"af9c2752-bfd3-4de3-85a8-f6052ea298fb","roots":{"30575":"bae977bd-44b8-4a96-aa75-32fd6b0b7d29"}}];
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