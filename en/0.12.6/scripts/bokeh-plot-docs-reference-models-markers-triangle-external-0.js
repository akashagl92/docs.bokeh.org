(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("9fe33aeb-5b99-4535-bc0d-2170c3c26c4e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9fe33aeb-5b99-4535-bc0d-2170c3c26c4e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"c82e9d65-3fd1-429a-b42f-75aeaf45a9d3":{"roots":{"references":[{"attributes":{},"id":"869a7819-60e7-4ee5-9e20-15a69244c6c6","type":"BasicTicker"},{"attributes":{},"id":"35fc0514-548d-4069-b3f5-a33a94f24140","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"77252ed4-4e89-44ba-a048-ff69bbf59d26","type":"Toolbar"},{"attributes":{},"id":"2e1c6588-0939-4afc-955c-53cbfcf63d84","type":"LinearScale"},{"attributes":{},"id":"208be051-bf61-4988-b5c8-77858bbf2685","type":"ToolEvents"},{"attributes":{"callback":null},"id":"3c54050f-e75d-4e93-a86d-6eb2a8bd17d7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7c552a7c-a40b-408f-b38f-971581642078","type":"BasicTickFormatter"},"plot":{"id":"8180d877-4ced-4262-92b3-0332fc9b23cc","type":"Plot"},"ticker":{"id":"34787f2c-2c13-40c9-9197-bdbe72d7d557","type":"BasicTicker"}},"id":"994c78db-32d0-4f72-a05a-44fba754687e","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8180d877-4ced-4262-92b3-0332fc9b23cc","type":"Plot"},"ticker":{"id":"869a7819-60e7-4ee5-9e20-15a69244c6c6","type":"BasicTicker"}},"id":"2b1813e4-4e27-409e-aa88-3b79db00ed86","type":"Grid"},{"attributes":{"plot":{"id":"8180d877-4ced-4262-92b3-0332fc9b23cc","type":"Plot"},"ticker":{"id":"34787f2c-2c13-40c9-9197-bdbe72d7d557","type":"BasicTicker"}},"id":"3619a647-0814-4b9e-83fb-a2f27372abae","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"5eeba5a1-314e-491c-824c-2c84e3d98797","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"35fc0514-548d-4069-b3f5-a33a94f24140","type":"BasicTickFormatter"},"plot":{"id":"8180d877-4ced-4262-92b3-0332fc9b23cc","type":"Plot"},"ticker":{"id":"869a7819-60e7-4ee5-9e20-15a69244c6c6","type":"BasicTicker"}},"id":"9256e0b4-486a-465e-bd1d-f1a8633f6b8e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"70297c68-07fa-4176-b5cb-52d7da029a10","type":"DataRange1d"},{"attributes":{"below":[{"id":"994c78db-32d0-4f72-a05a-44fba754687e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9256e0b4-486a-465e-bd1d-f1a8633f6b8e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"398acfd3-8778-4fca-b443-1377d1a6ca0f","type":"GlyphRenderer"},{"id":"994c78db-32d0-4f72-a05a-44fba754687e","type":"LinearAxis"},{"id":"9256e0b4-486a-465e-bd1d-f1a8633f6b8e","type":"LinearAxis"},{"id":"3619a647-0814-4b9e-83fb-a2f27372abae","type":"Grid"},{"id":"2b1813e4-4e27-409e-aa88-3b79db00ed86","type":"Grid"}],"title":null,"tool_events":{"id":"208be051-bf61-4988-b5c8-77858bbf2685","type":"ToolEvents"},"toolbar":{"id":"77252ed4-4e89-44ba-a048-ff69bbf59d26","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"70297c68-07fa-4176-b5cb-52d7da029a10","type":"DataRange1d"},"x_scale":{"id":"2e1c6588-0939-4afc-955c-53cbfcf63d84","type":"LinearScale"},"y_range":{"id":"3c54050f-e75d-4e93-a86d-6eb2a8bd17d7","type":"DataRange1d"},"y_scale":{"id":"aaa7881f-c20e-4bea-858b-93ae486528ce","type":"LinearScale"}},"id":"8180d877-4ced-4262-92b3-0332fc9b23cc","type":"Plot"},{"attributes":{},"id":"aaa7881f-c20e-4bea-858b-93ae486528ce","type":"LinearScale"},{"attributes":{},"id":"34787f2c-2c13-40c9-9197-bdbe72d7d557","type":"BasicTicker"},{"attributes":{},"id":"7c552a7c-a40b-408f-b38f-971581642078","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"90e3ccfd-c6ec-457e-9913-0b5425af144e","type":"Triangle"},{"attributes":{"data_source":{"id":"5eeba5a1-314e-491c-824c-2c84e3d98797","type":"ColumnDataSource"},"glyph":{"id":"90e3ccfd-c6ec-457e-9913-0b5425af144e","type":"Triangle"},"hover_glyph":null,"muted_glyph":null},"id":"398acfd3-8778-4fca-b443-1377d1a6ca0f","type":"GlyphRenderer"}],"root_ids":["8180d877-4ced-4262-92b3-0332fc9b23cc"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"c82e9d65-3fd1-429a-b42f-75aeaf45a9d3","elementid":"9fe33aeb-5b99-4535-bc0d-2170c3c26c4e","modelid":"8180d877-4ced-4262-92b3-0332fc9b23cc"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
