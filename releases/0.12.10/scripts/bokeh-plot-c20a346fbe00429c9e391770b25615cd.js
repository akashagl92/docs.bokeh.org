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
      };var element = document.getElementById("9f199114-3157-4c44-b604-c153b5163d85");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f199114-3157-4c44-b604-c153b5163d85' but no matching script tag was found. ")
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
                    var docs_json = {"e259c907-ed73-44f6-b4a3-b5626e8b1601":{"roots":{"references":[{"attributes":{},"id":"13adf338-dade-48a7-9cb9-ffa15bcb8d35","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"962fbf8b-4315-4650-9536-176a108cd465","type":"PanTool"},{"id":"ccb7deb1-7616-4a8c-aa9a-9241ce2acf33","type":"WheelZoomTool"},{"id":"c800b9e6-487b-4f47-9bc6-bfb5625342c5","type":"BoxZoomTool"},{"id":"0b2d35f7-c0fa-4c48-9e63-2a4efd1c730c","type":"SaveTool"},{"id":"915c3772-b612-43de-a0b9-837f41a98b16","type":"ResetTool"},{"id":"223cb0b5-fdb4-49bd-842c-fdf8b7cc2e93","type":"HelpTool"}]},"id":"b86b6eb5-f78e-424f-b726-3d9095fe33f4","type":"Toolbar"},{"attributes":{"source":{"id":"8cbb3073-b6c4-4ed8-9aea-5a7589724d47","type":"ColumnDataSource"}},"id":"7f8ab71f-038e-4859-a69e-03ce2f637a84","type":"CDSView"},{"attributes":{},"id":"6efad710-5d71-46d2-8273-ef1773ec0c99","type":"BasicTickFormatter"},{"attributes":{},"id":"0b2d35f7-c0fa-4c48-9e63-2a4efd1c730c","type":"SaveTool"},{"attributes":{"formatter":{"id":"6efad710-5d71-46d2-8273-ef1773ec0c99","type":"BasicTickFormatter"},"plot":{"id":"1e508b8b-9805-4b8b-b4e9-727c3899708a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0af41d6-0a2e-4e50-8356-9a1332909971","type":"BasicTicker"}},"id":"1745c908-f4ff-444a-a0ab-283765894f09","type":"LinearAxis"},{"attributes":{},"id":"223cb0b5-fdb4-49bd-842c-fdf8b7cc2e93","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["left","right","top","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"8cbb3073-b6c4-4ed8-9aea-5a7589724d47","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"d2f769f0-7c83-4649-9fb1-522655176f76","type":"Quad"},{"attributes":{},"id":"c0af41d6-0a2e-4e50-8356-9a1332909971","type":"BasicTicker"},{"attributes":{"below":[{"id":"f1f7f11f-ac59-4ec4-8b43-6101a38eae21","type":"LinearAxis"}],"left":[{"id":"1745c908-f4ff-444a-a0ab-283765894f09","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f1f7f11f-ac59-4ec4-8b43-6101a38eae21","type":"LinearAxis"},{"id":"6fc6e95b-519f-4a16-a8cd-cb346c8e14d6","type":"Grid"},{"id":"1745c908-f4ff-444a-a0ab-283765894f09","type":"LinearAxis"},{"id":"6f6ca471-81a0-4835-a146-f198beaca79b","type":"Grid"},{"id":"5733d072-a13f-4f81-8155-05973617773c","type":"BoxAnnotation"},{"id":"a9c15808-728a-450e-9425-5de33d03634a","type":"GlyphRenderer"}],"title":{"id":"053c429e-4411-4259-9f03-629be914372a","type":"Title"},"toolbar":{"id":"b86b6eb5-f78e-424f-b726-3d9095fe33f4","type":"Toolbar"},"x_range":{"id":"b21fcd3b-e526-4e72-956a-bb4562b68f46","type":"DataRange1d"},"x_scale":{"id":"13adf338-dade-48a7-9cb9-ffa15bcb8d35","type":"LinearScale"},"y_range":{"id":"b88e71c3-a8ba-482c-a307-9f46bfe447c8","type":"DataRange1d"},"y_scale":{"id":"70d9e671-d869-4146-ae57-012ba67f8f91","type":"LinearScale"}},"id":"1e508b8b-9805-4b8b-b4e9-727c3899708a","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5733d072-a13f-4f81-8155-05973617773c","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"b88e71c3-a8ba-482c-a307-9f46bfe447c8","type":"DataRange1d"},{"attributes":{},"id":"ccb7deb1-7616-4a8c-aa9a-9241ce2acf33","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"1e508b8b-9805-4b8b-b4e9-727c3899708a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9166b6c-edb1-4947-b224-63ee39f884b3","type":"BasicTicker"}},"id":"6fc6e95b-519f-4a16-a8cd-cb346c8e14d6","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"053c429e-4411-4259-9f03-629be914372a","type":"Title"},{"attributes":{"data_source":{"id":"8cbb3073-b6c4-4ed8-9aea-5a7589724d47","type":"ColumnDataSource"},"glyph":{"id":"93c16e77-6b2e-42b9-959f-d4b7dc40c605","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d2f769f0-7c83-4649-9fb1-522655176f76","type":"Quad"},"selection_glyph":null,"view":{"id":"7f8ab71f-038e-4859-a69e-03ce2f637a84","type":"CDSView"}},"id":"a9c15808-728a-450e-9425-5de33d03634a","type":"GlyphRenderer"},{"attributes":{},"id":"70d9e671-d869-4146-ae57-012ba67f8f91","type":"LinearScale"},{"attributes":{"formatter":{"id":"6f88775c-a02f-43bd-8e45-a7ac9cbafc01","type":"BasicTickFormatter"},"plot":{"id":"1e508b8b-9805-4b8b-b4e9-727c3899708a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9166b6c-edb1-4947-b224-63ee39f884b3","type":"BasicTicker"}},"id":"f1f7f11f-ac59-4ec4-8b43-6101a38eae21","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"93c16e77-6b2e-42b9-959f-d4b7dc40c605","type":"Quad"},{"attributes":{"dimension":1,"plot":{"id":"1e508b8b-9805-4b8b-b4e9-727c3899708a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0af41d6-0a2e-4e50-8356-9a1332909971","type":"BasicTicker"}},"id":"6f6ca471-81a0-4835-a146-f198beaca79b","type":"Grid"},{"attributes":{},"id":"915c3772-b612-43de-a0b9-837f41a98b16","type":"ResetTool"},{"attributes":{"callback":null},"id":"b21fcd3b-e526-4e72-956a-bb4562b68f46","type":"DataRange1d"},{"attributes":{"overlay":{"id":"5733d072-a13f-4f81-8155-05973617773c","type":"BoxAnnotation"}},"id":"c800b9e6-487b-4f47-9bc6-bfb5625342c5","type":"BoxZoomTool"},{"attributes":{},"id":"c9166b6c-edb1-4947-b224-63ee39f884b3","type":"BasicTicker"},{"attributes":{},"id":"962fbf8b-4315-4650-9536-176a108cd465","type":"PanTool"},{"attributes":{},"id":"6f88775c-a02f-43bd-8e45-a7ac9cbafc01","type":"BasicTickFormatter"}],"root_ids":["1e508b8b-9805-4b8b-b4e9-727c3899708a"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e259c907-ed73-44f6-b4a3-b5626e8b1601","elementid":"9f199114-3157-4c44-b604-c153b5163d85","modelid":"1e508b8b-9805-4b8b-b4e9-727c3899708a"}];
                
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
