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
      };var element = document.getElementById("01c5c8e0-e58c-45df-95be-77fe302baf08");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '01c5c8e0-e58c-45df-95be-77fe302baf08' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"b0c82069-56e1-4b2e-b20c-c31d3fefc41d":{"roots":{"references":[{"attributes":{},"id":"286207f7-1f88-4dd5-b241-d62f97713b82","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4dfa48dc-5c44-465e-90c3-8251339856cb","type":"ColumnDataSource"},"glyph":{"id":"9fcb6932-10e5-4579-b531-7f96ae82f87d","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"202a3a3a-4f3e-4e74-8058-0bd6157bfceb","type":"CDSView"}},"id":"7bffc958-2596-465c-b0c7-6fd78a094ec2","type":"GlyphRenderer"},{"attributes":{},"id":"3dba6ef8-c5d0-4413-a316-8a61c3526fe8","type":"BasicTicker"},{"attributes":{"source":{"id":"4dfa48dc-5c44-465e-90c3-8251339856cb","type":"ColumnDataSource"}},"id":"202a3a3a-4f3e-4e74-8058-0bd6157bfceb","type":"CDSView"},{"attributes":{"callback":null},"id":"ba5d4d42-98f8-4182-9a6c-5f8645079473","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"f594ff34-d0ff-4952-a398-b4e73d5fbfc0","type":"Plot"},"ticker":{"id":"3dba6ef8-c5d0-4413-a316-8a61c3526fe8","type":"BasicTicker"}},"id":"7aa8a5fa-234b-439d-9bfe-af4000cf189a","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a51606df-c108-4733-b672-06b36cfdfbce","type":"Toolbar"},{"attributes":{},"id":"131dce4f-1cad-4b85-997b-e38ac8327e8a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"286207f7-1f88-4dd5-b241-d62f97713b82","type":"BasicTickFormatter"},"plot":{"id":"f594ff34-d0ff-4952-a398-b4e73d5fbfc0","type":"Plot"},"ticker":{"id":"02aacb5a-0917-43bf-bc73-fa4ca3a54de5","type":"BasicTicker"}},"id":"c322ffea-c15a-439b-bf03-bf3c153cc451","type":"LinearAxis"},{"attributes":{"plot":{"id":"f594ff34-d0ff-4952-a398-b4e73d5fbfc0","type":"Plot"},"ticker":{"id":"02aacb5a-0917-43bf-bc73-fa4ca3a54de5","type":"BasicTicker"}},"id":"41c9ca85-5090-4b76-9673-181df7940e9f","type":"Grid"},{"attributes":{"callback":null},"id":"bfe94b8a-dea7-4cb8-a817-e225816e71f2","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","l"],"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"4dfa48dc-5c44-465e-90c3-8251339856cb","type":"ColumnDataSource"},{"attributes":{},"id":"76659b97-4d9d-4488-805c-fa1becdcb759","type":"LinearScale"},{"attributes":{"formatter":{"id":"131dce4f-1cad-4b85-997b-e38ac8327e8a","type":"BasicTickFormatter"},"plot":{"id":"f594ff34-d0ff-4952-a398-b4e73d5fbfc0","type":"Plot"},"ticker":{"id":"3dba6ef8-c5d0-4413-a316-8a61c3526fe8","type":"BasicTicker"}},"id":"bf5576e5-b842-4ab0-905e-11a4caeb150c","type":"LinearAxis"},{"attributes":{},"id":"02aacb5a-0917-43bf-bc73-fa4ca3a54de5","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"9fcb6932-10e5-4579-b531-7f96ae82f87d","type":"Ray"},{"attributes":{},"id":"12ac529f-5e91-4421-851d-99babe33f47a","type":"LinearScale"},{"attributes":{"below":[{"id":"c322ffea-c15a-439b-bf03-bf3c153cc451","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"bf5576e5-b842-4ab0-905e-11a4caeb150c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7bffc958-2596-465c-b0c7-6fd78a094ec2","type":"GlyphRenderer"},{"id":"c322ffea-c15a-439b-bf03-bf3c153cc451","type":"LinearAxis"},{"id":"bf5576e5-b842-4ab0-905e-11a4caeb150c","type":"LinearAxis"},{"id":"41c9ca85-5090-4b76-9673-181df7940e9f","type":"Grid"},{"id":"7aa8a5fa-234b-439d-9bfe-af4000cf189a","type":"Grid"}],"title":null,"toolbar":{"id":"a51606df-c108-4733-b672-06b36cfdfbce","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ba5d4d42-98f8-4182-9a6c-5f8645079473","type":"DataRange1d"},"x_scale":{"id":"12ac529f-5e91-4421-851d-99babe33f47a","type":"LinearScale"},"y_range":{"id":"bfe94b8a-dea7-4cb8-a817-e225816e71f2","type":"DataRange1d"},"y_scale":{"id":"76659b97-4d9d-4488-805c-fa1becdcb759","type":"LinearScale"}},"id":"f594ff34-d0ff-4952-a398-b4e73d5fbfc0","type":"Plot"}],"root_ids":["f594ff34-d0ff-4952-a398-b4e73d5fbfc0"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"b0c82069-56e1-4b2e-b20c-c31d3fefc41d","elementid":"01c5c8e0-e58c-45df-95be-77fe302baf08","modelid":"f594ff34-d0ff-4952-a398-b4e73d5fbfc0"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
