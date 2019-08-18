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
      };var element = document.getElementById("ca74fe01-5f75-4e05-9628-9fc82d017066");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca74fe01-5f75-4e05-9628-9fc82d017066' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"3b2b552c-be27-4066-aeed-97df5e3c6595":{"roots":{"references":[{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"dd687a02-56f5-412e-a281-cdc49fc6c746","type":"Selection"},"selection_policy":{"id":"458ee71c-4600-421f-9df9-835cb0b27769","type":"UnionRenderers"}},"id":"e1bf7b7c-2862-4976-8d6b-ad5e02a1a21c","type":"ColumnDataSource"},{"attributes":{},"id":"dd687a02-56f5-412e-a281-cdc49fc6c746","type":"Selection"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e5f8c57-ce3d-4b90-955f-284ce35e77d0","type":"Circle"},{"attributes":{"callback":null},"id":"ca8f38cc-9dff-4a65-b420-a6715445aa65","type":"DataRange1d"},{"attributes":{"callback":null},"id":"7fb0930f-13d3-41ca-b1a2-de72bc086b8c","type":"DataRange1d"},{"attributes":{},"id":"0df7ff1b-de6e-4df8-9acc-5d7f4902e147","type":"LinearScale"},{"attributes":{"source":{"id":"e1bf7b7c-2862-4976-8d6b-ad5e02a1a21c","type":"ColumnDataSource"}},"id":"d78d712f-3d49-4a42-994a-7e674f175556","type":"CDSView"},{"attributes":{},"id":"458ee71c-4600-421f-9df9-835cb0b27769","type":"UnionRenderers"},{"attributes":{},"id":"161dc46f-b1fc-4e49-9715-ceb488689186","type":"BasicTicker"},{"attributes":{},"id":"2123fdb3-5084-4fd6-bfd0-022e3125718c","type":"LinearScale"},{"attributes":{},"id":"a0852883-c342-4883-aa06-e358d70576ff","type":"BasicTickFormatter"},{"attributes":{},"id":"2902c0d9-a00f-4f74-83a6-30a797d169bd","type":"BasicTicker"},{"attributes":{},"id":"130178f0-2fe8-4c6d-9098-e6b05b888754","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e1bf7b7c-2862-4976-8d6b-ad5e02a1a21c","type":"ColumnDataSource"},"glyph":{"id":"3e5f8c57-ce3d-4b90-955f-284ce35e77d0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d78d712f-3d49-4a42-994a-7e674f175556","type":"CDSView"}},"id":"d3b6a6a2-eeeb-43e0-aa0e-c34c368a48f7","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"936879c7-be91-46db-a8d8-861c825eaa23","type":"Toolbar"},{"attributes":{"below":[{"id":"d5479370-21e6-4e9f-85f4-86e46e396af7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d127b69f-5f72-4c71-bb2b-80be83e2f9c1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d3b6a6a2-eeeb-43e0-aa0e-c34c368a48f7","type":"GlyphRenderer"},{"id":"d5479370-21e6-4e9f-85f4-86e46e396af7","type":"LinearAxis"},{"id":"d127b69f-5f72-4c71-bb2b-80be83e2f9c1","type":"LinearAxis"},{"id":"81492fe9-7614-492a-945e-6f0164b68db1","type":"Grid"},{"id":"f407c088-70df-494b-a1ab-49412fff77db","type":"Grid"}],"title":null,"toolbar":{"id":"936879c7-be91-46db-a8d8-861c825eaa23","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ca8f38cc-9dff-4a65-b420-a6715445aa65","type":"DataRange1d"},"x_scale":{"id":"2123fdb3-5084-4fd6-bfd0-022e3125718c","type":"LinearScale"},"y_range":{"id":"7fb0930f-13d3-41ca-b1a2-de72bc086b8c","type":"DataRange1d"},"y_scale":{"id":"0df7ff1b-de6e-4df8-9acc-5d7f4902e147","type":"LinearScale"}},"id":"79519935-6a98-4a59-8a29-21a9aae81245","type":"Plot"},{"attributes":{"formatter":{"id":"130178f0-2fe8-4c6d-9098-e6b05b888754","type":"BasicTickFormatter"},"plot":{"id":"79519935-6a98-4a59-8a29-21a9aae81245","type":"Plot"},"ticker":{"id":"2902c0d9-a00f-4f74-83a6-30a797d169bd","type":"BasicTicker"}},"id":"d127b69f-5f72-4c71-bb2b-80be83e2f9c1","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"79519935-6a98-4a59-8a29-21a9aae81245","type":"Plot"},"ticker":{"id":"2902c0d9-a00f-4f74-83a6-30a797d169bd","type":"BasicTicker"}},"id":"f407c088-70df-494b-a1ab-49412fff77db","type":"Grid"},{"attributes":{"formatter":{"id":"a0852883-c342-4883-aa06-e358d70576ff","type":"BasicTickFormatter"},"plot":{"id":"79519935-6a98-4a59-8a29-21a9aae81245","type":"Plot"},"ticker":{"id":"161dc46f-b1fc-4e49-9715-ceb488689186","type":"BasicTicker"}},"id":"d5479370-21e6-4e9f-85f4-86e46e396af7","type":"LinearAxis"},{"attributes":{"plot":{"id":"79519935-6a98-4a59-8a29-21a9aae81245","type":"Plot"},"ticker":{"id":"161dc46f-b1fc-4e49-9715-ceb488689186","type":"BasicTicker"}},"id":"81492fe9-7614-492a-945e-6f0164b68db1","type":"Grid"}],"root_ids":["79519935-6a98-4a59-8a29-21a9aae81245"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3b2b552c-be27-4066-aeed-97df5e3c6595","roots":{"79519935-6a98-4a59-8a29-21a9aae81245":"ca74fe01-5f75-4e05-9628-9fc82d017066"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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