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
      };var element = document.getElementById("49fbb0b5-7395-429b-827c-b22332d76774");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '49fbb0b5-7395-429b-827c-b22332d76774' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"34936fa2-aa20-4007-8467-e35041b0af5d":{"roots":{"references":[{"attributes":{"below":[{"id":"31471","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"31472","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"31469","type":"GlyphRenderer"},{"id":"31471","type":"LinearAxis"},{"id":"31472","type":"LinearAxis"},{"id":"31474","type":"Grid"},{"id":"31476","type":"Grid"}],"title":null,"toolbar":{"id":"31477","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31480","type":"DataRange1d"},"x_scale":{"id":"31478","type":"LinearScale"},"y_range":{"id":"31479","type":"DataRange1d"},"y_scale":{"id":"31481","type":"LinearScale"}},"id":"31466","type":"Plot"},{"attributes":{"data_source":{"id":"31465","type":"ColumnDataSource"},"glyph":{"id":"31468","type":"X"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"31470","type":"CDSView"}},"id":"31469","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"31480","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31468","type":"X"},{"attributes":{"formatter":{"id":"31485","type":"BasicTickFormatter"},"plot":{"id":"31466","type":"Plot"},"ticker":{"id":"31475","type":"BasicTicker"}},"id":"31472","type":"LinearAxis"},{"attributes":{"source":{"id":"31465","type":"ColumnDataSource"}},"id":"31470","type":"CDSView"},{"attributes":{},"id":"31483","type":"BasicTickFormatter"},{"attributes":{},"id":"31485","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"31466","type":"Plot"},"ticker":{"id":"31475","type":"BasicTicker"}},"id":"31476","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"31477","type":"Toolbar"},{"attributes":{},"id":"31481","type":"LinearScale"},{"attributes":{},"id":"31475","type":"BasicTicker"},{"attributes":{"formatter":{"id":"31483","type":"BasicTickFormatter"},"plot":{"id":"31466","type":"Plot"},"ticker":{"id":"31473","type":"BasicTicker"}},"id":"31471","type":"LinearAxis"},{"attributes":{},"id":"31478","type":"LinearScale"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"31487","type":"Selection"},"selection_policy":{"id":"31486","type":"UnionRenderers"}},"id":"31465","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"31479","type":"DataRange1d"},{"attributes":{},"id":"31486","type":"UnionRenderers"},{"attributes":{},"id":"31473","type":"BasicTicker"},{"attributes":{},"id":"31487","type":"Selection"},{"attributes":{"plot":{"id":"31466","type":"Plot"},"ticker":{"id":"31473","type":"BasicTicker"}},"id":"31474","type":"Grid"}],"root_ids":["31466"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"34936fa2-aa20-4007-8467-e35041b0af5d","roots":{"31466":"49fbb0b5-7395-429b-827c-b22332d76774"}}];
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