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
      };var element = document.getElementById("0ca53220-a414-4809-9ae5-4c6a42b87124");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0ca53220-a414-4809-9ae5-4c6a42b87124' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"593d5cd3-a7ab-4a92-b889-cb8ced97fe57":{"roots":{"references":[{"attributes":{"callback":null},"id":"e8a343e3-2fa1-4780-baeb-6e676c1e74d7","type":"TapTool"},{"attributes":{},"id":"b2bb4a58-ca3d-4f0c-a9c7-5003c91541ab","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"a65a2a69-4b8e-4050-86f2-e1d75ece4aea","type":"Title"},{"attributes":{"plot":{"id":"2583241d-25d1-452f-b315-4ce9fe900bfa","subtype":"Figure","type":"Plot"},"ticker":{"id":"af489347-2aed-4397-be53-3e9e738953e0","type":"BasicTicker"}},"id":"b8036726-6ee1-461f-bd46-18c7d4db976a","type":"Grid"},{"attributes":{"formatter":{"id":"e0e4dc79-6784-4664-bf66-03c884118b4e","type":"BasicTickFormatter"},"plot":{"id":"2583241d-25d1-452f-b315-4ce9fe900bfa","subtype":"Figure","type":"Plot"},"ticker":{"id":"af489347-2aed-4397-be53-3e9e738953e0","type":"BasicTicker"}},"id":"a9cc4884-6410-4644-be5a-282d7534bdf7","type":"LinearAxis"},{"attributes":{},"id":"e8eb56e3-2184-4210-b3df-b391abf91071","type":"LinearScale"},{"attributes":{"below":[{"id":"a9cc4884-6410-4644-be5a-282d7534bdf7","type":"LinearAxis"}],"left":[{"id":"8cb4a259-195d-4b71-ab52-ed6d13a7bab4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a9cc4884-6410-4644-be5a-282d7534bdf7","type":"LinearAxis"},{"id":"b8036726-6ee1-461f-bd46-18c7d4db976a","type":"Grid"},{"id":"8cb4a259-195d-4b71-ab52-ed6d13a7bab4","type":"LinearAxis"},{"id":"18dc1492-d79b-4d09-bfe2-174622216a83","type":"Grid"},{"id":"669d11bb-4ca5-4d91-97d6-2b01a9c1f355","type":"GlyphRenderer"}],"title":{"id":"a65a2a69-4b8e-4050-86f2-e1d75ece4aea","type":"Title"},"toolbar":{"id":"7e25742d-ce0f-4c18-bd5e-c0171dab9249","type":"Toolbar"},"x_range":{"id":"a9db33e3-2d4d-40d8-bd92-02184d5f23ec","type":"DataRange1d"},"x_scale":{"id":"e8eb56e3-2184-4210-b3df-b391abf91071","type":"LinearScale"},"y_range":{"id":"93053c32-a6bd-4f04-9819-2f5328194fde","type":"DataRange1d"},"y_scale":{"id":"ca1552aa-311c-4c9f-ba60-6ad2fc78b25d","type":"LinearScale"}},"id":"2583241d-25d1-452f-b315-4ce9fe900bfa","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"b6f8d7fb-89cf-48c5-b607-f5d881398f32","type":"ColumnDataSource"},"glyph":{"id":"e7380882-fd1f-49e3-9c46-a47686d98e4a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cdaff983-9924-493f-b005-569a4b6d35a0","type":"Circle"},"selection_glyph":{"id":"7b905ed8-df28-457a-90c7-b5052b088c77","type":"Circle"},"view":{"id":"b8de61f8-f05d-4d05-92e9-566700090062","type":"CDSView"}},"id":"669d11bb-4ca5-4d91-97d6-2b01a9c1f355","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8a343e3-2fa1-4780-baeb-6e676c1e74d7","type":"TapTool"}]},"id":"7e25742d-ce0f-4c18-bd5e-c0171dab9249","type":"Toolbar"},{"attributes":{},"id":"3593c174-4dfc-40de-99a3-1a5033aa817e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"93053c32-a6bd-4f04-9819-2f5328194fde","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"2583241d-25d1-452f-b315-4ce9fe900bfa","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2bb4a58-ca3d-4f0c-a9c7-5003c91541ab","type":"BasicTicker"}},"id":"18dc1492-d79b-4d09-bfe2-174622216a83","type":"Grid"},{"attributes":{"callback":null},"id":"a9db33e3-2d4d-40d8-bd92-02184d5f23ec","type":"DataRange1d"},{"attributes":{},"id":"ca1552aa-311c-4c9f-ba60-6ad2fc78b25d","type":"LinearScale"},{"attributes":{"formatter":{"id":"3593c174-4dfc-40de-99a3-1a5033aa817e","type":"BasicTickFormatter"},"plot":{"id":"2583241d-25d1-452f-b315-4ce9fe900bfa","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2bb4a58-ca3d-4f0c-a9c7-5003c91541ab","type":"BasicTicker"}},"id":"8cb4a259-195d-4b71-ab52-ed6d13a7bab4","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"cdaff983-9924-493f-b005-569a4b6d35a0","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"b6f8d7fb-89cf-48c5-b607-f5d881398f32","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b6f8d7fb-89cf-48c5-b607-f5d881398f32","type":"ColumnDataSource"}},"id":"b8de61f8-f05d-4d05-92e9-566700090062","type":"CDSView"},{"attributes":{},"id":"af489347-2aed-4397-be53-3e9e738953e0","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"7b905ed8-df28-457a-90c7-b5052b088c77","type":"Circle"},{"attributes":{},"id":"e0e4dc79-6784-4664-bf66-03c884118b4e","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7380882-fd1f-49e3-9c46-a47686d98e4a","type":"Circle"}],"root_ids":["2583241d-25d1-452f-b315-4ce9fe900bfa"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"593d5cd3-a7ab-4a92-b889-cb8ced97fe57","elementid":"0ca53220-a414-4809-9ae5-4c6a42b87124","modelid":"2583241d-25d1-452f-b315-4ce9fe900bfa"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
