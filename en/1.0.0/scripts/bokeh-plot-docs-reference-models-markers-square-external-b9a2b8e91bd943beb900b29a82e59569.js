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
      };var element = document.getElementById("150d6668-16a7-48e6-a525-02529f96e3e9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '150d6668-16a7-48e6-a525-02529f96e3e9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ddcd8422-b7cc-4efc-8e7f-c4f1f832aa9d":{"roots":{"references":[{"attributes":{},"id":"31084","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"31077","type":"Toolbar"},{"attributes":{"plot":{"id":"31065","type":"Plot"},"ticker":{"id":"31072","type":"BasicTicker"}},"id":"31073","type":"Grid"},{"attributes":{"data_source":{"id":"31064","type":"ColumnDataSource"},"glyph":{"id":"31067","type":"Square"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"31069","type":"CDSView"}},"id":"31068","type":"GlyphRenderer"},{"attributes":{},"id":"31086","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"31065","type":"Plot"},"ticker":{"id":"31074","type":"BasicTicker"}},"id":"31075","type":"Grid"},{"attributes":{},"id":"31074","type":"BasicTicker"},{"attributes":{"formatter":{"id":"31084","type":"BasicTickFormatter"},"plot":{"id":"31065","type":"Plot"},"ticker":{"id":"31074","type":"BasicTicker"}},"id":"31071","type":"LinearAxis"},{"attributes":{"formatter":{"id":"31082","type":"BasicTickFormatter"},"plot":{"id":"31065","type":"Plot"},"ticker":{"id":"31072","type":"BasicTicker"}},"id":"31070","type":"LinearAxis"},{"attributes":{},"id":"31082","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"31076","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"31085","type":"Selection"},"selection_policy":{"id":"31086","type":"UnionRenderers"}},"id":"31064","type":"ColumnDataSource"},{"attributes":{},"id":"31079","type":"LinearScale"},{"attributes":{"below":[{"id":"31070","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"31071","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"31068","type":"GlyphRenderer"},{"id":"31070","type":"LinearAxis"},{"id":"31071","type":"LinearAxis"},{"id":"31073","type":"Grid"},{"id":"31075","type":"Grid"}],"title":null,"toolbar":{"id":"31077","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31080","type":"DataRange1d"},"x_scale":{"id":"31079","type":"LinearScale"},"y_range":{"id":"31076","type":"DataRange1d"},"y_scale":{"id":"31078","type":"LinearScale"}},"id":"31065","type":"Plot"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31067","type":"Square"},{"attributes":{},"id":"31072","type":"BasicTicker"},{"attributes":{"source":{"id":"31064","type":"ColumnDataSource"}},"id":"31069","type":"CDSView"},{"attributes":{},"id":"31078","type":"LinearScale"},{"attributes":{},"id":"31085","type":"Selection"},{"attributes":{"callback":null},"id":"31080","type":"DataRange1d"}],"root_ids":["31065"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"ddcd8422-b7cc-4efc-8e7f-c4f1f832aa9d","roots":{"31065":"150d6668-16a7-48e6-a525-02529f96e3e9"}}];
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