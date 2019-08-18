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
      };var element = document.getElementById("d753f267-bbfc-4309-b0b6-27ce40b6fe8d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd753f267-bbfc-4309-b0b6-27ce40b6fe8d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"b0b6eca4-99c1-4df5-98db-d9add1971f0c":{"roots":{"references":[{"attributes":{"callback":null},"id":"31480","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"31465","type":"Plot"},"ticker":{"id":"31474","type":"BasicTicker"}},"id":"31475","type":"Grid"},{"attributes":{},"id":"31485","type":"Selection"},{"attributes":{},"id":"31479","type":"LinearScale"},{"attributes":{"source":{"id":"31464","type":"ColumnDataSource"}},"id":"31469","type":"CDSView"},{"attributes":{},"id":"31472","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31467","type":"X"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"31477","type":"Toolbar"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"31485","type":"Selection"},"selection_policy":{"id":"31486","type":"UnionRenderers"}},"id":"31464","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"31476","type":"DataRange1d"},{"attributes":{},"id":"31482","type":"BasicTickFormatter"},{"attributes":{},"id":"31474","type":"BasicTicker"},{"attributes":{"data_source":{"id":"31464","type":"ColumnDataSource"},"glyph":{"id":"31467","type":"X"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"31469","type":"CDSView"}},"id":"31468","type":"GlyphRenderer"},{"attributes":{},"id":"31486","type":"UnionRenderers"},{"attributes":{"plot":{"id":"31465","type":"Plot"},"ticker":{"id":"31472","type":"BasicTicker"}},"id":"31473","type":"Grid"},{"attributes":{"below":[{"id":"31470","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"31471","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"31468","type":"GlyphRenderer"},{"id":"31470","type":"LinearAxis"},{"id":"31471","type":"LinearAxis"},{"id":"31473","type":"Grid"},{"id":"31475","type":"Grid"}],"title":null,"toolbar":{"id":"31477","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31480","type":"DataRange1d"},"x_scale":{"id":"31479","type":"LinearScale"},"y_range":{"id":"31476","type":"DataRange1d"},"y_scale":{"id":"31478","type":"LinearScale"}},"id":"31465","type":"Plot"},{"attributes":{},"id":"31484","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"31482","type":"BasicTickFormatter"},"plot":{"id":"31465","type":"Plot"},"ticker":{"id":"31472","type":"BasicTicker"}},"id":"31470","type":"LinearAxis"},{"attributes":{"formatter":{"id":"31484","type":"BasicTickFormatter"},"plot":{"id":"31465","type":"Plot"},"ticker":{"id":"31474","type":"BasicTicker"}},"id":"31471","type":"LinearAxis"},{"attributes":{},"id":"31478","type":"LinearScale"}],"root_ids":["31465"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"b0b6eca4-99c1-4df5-98db-d9add1971f0c","roots":{"31465":"d753f267-bbfc-4309-b0b6-27ce40b6fe8d"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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