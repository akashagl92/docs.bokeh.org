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
      };var element = document.getElementById("068799f0-5ee5-4f5a-ad47-383b4f9a7b9f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '068799f0-5ee5-4f5a-ad47-383b4f9a7b9f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"ca933aa0-f35c-4f62-a9bc-9e1cc8755dfb":{"roots":{"references":[{"attributes":{},"id":"1e127798-5811-4b4a-831a-5034c810aafe","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","l"],"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"48793005-d114-4a80-aafb-324ff65a5f45","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"5ad93a3d-b848-4222-8d60-daaabdc8178b","type":"Plot"},"ticker":{"id":"055cb3c2-5cc4-4fcd-aea3-d8d8d4e29cae","type":"BasicTicker"}},"id":"04ae9dac-33fd-44e0-9df5-87b413928e34","type":"Grid"},{"attributes":{"callback":null},"id":"9cf26864-c327-47b0-a28b-16308c5902c7","type":"DataRange1d"},{"attributes":{"source":{"id":"48793005-d114-4a80-aafb-324ff65a5f45","type":"ColumnDataSource"}},"id":"e21350dd-9393-46ed-9fbf-6871d5584d24","type":"CDSView"},{"attributes":{},"id":"055cb3c2-5cc4-4fcd-aea3-d8d8d4e29cae","type":"BasicTicker"},{"attributes":{"formatter":{"id":"811ca110-c4e6-4843-9595-bd64240f9012","type":"BasicTickFormatter"},"plot":{"id":"5ad93a3d-b848-4222-8d60-daaabdc8178b","type":"Plot"},"ticker":{"id":"c0169de6-a587-482f-9031-5820f3b6ed1f","type":"BasicTicker"}},"id":"e4a72af3-f92f-482b-97f9-92e982ef31c3","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e3359906-18b2-4612-8399-ac341eda1a0b","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"333bcc81-aef1-41c4-9c1f-8df76e8d7dbf","type":"Ray"},{"attributes":{},"id":"e265a77f-3665-40ce-891f-005768d7b4fa","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e4a72af3-f92f-482b-97f9-92e982ef31c3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d1ce046b-1731-430f-8d3e-c455c690da89","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e16cb582-3309-43b4-8b03-d0650bb015b8","type":"GlyphRenderer"},{"id":"e4a72af3-f92f-482b-97f9-92e982ef31c3","type":"LinearAxis"},{"id":"d1ce046b-1731-430f-8d3e-c455c690da89","type":"LinearAxis"},{"id":"0cb63e72-4347-4302-9971-129f8a5daa7f","type":"Grid"},{"id":"04ae9dac-33fd-44e0-9df5-87b413928e34","type":"Grid"}],"title":null,"toolbar":{"id":"7f4f0de8-eb77-4967-b64b-e8e55d388f4a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9cf26864-c327-47b0-a28b-16308c5902c7","type":"DataRange1d"},"x_scale":{"id":"1e127798-5811-4b4a-831a-5034c810aafe","type":"LinearScale"},"y_range":{"id":"e3359906-18b2-4612-8399-ac341eda1a0b","type":"DataRange1d"},"y_scale":{"id":"1787f82a-e5e7-4519-bc78-6ab550dfc302","type":"LinearScale"}},"id":"5ad93a3d-b848-4222-8d60-daaabdc8178b","type":"Plot"},{"attributes":{},"id":"1787f82a-e5e7-4519-bc78-6ab550dfc302","type":"LinearScale"},{"attributes":{"plot":{"id":"5ad93a3d-b848-4222-8d60-daaabdc8178b","type":"Plot"},"ticker":{"id":"c0169de6-a587-482f-9031-5820f3b6ed1f","type":"BasicTicker"}},"id":"0cb63e72-4347-4302-9971-129f8a5daa7f","type":"Grid"},{"attributes":{"data_source":{"id":"48793005-d114-4a80-aafb-324ff65a5f45","type":"ColumnDataSource"},"glyph":{"id":"333bcc81-aef1-41c4-9c1f-8df76e8d7dbf","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e21350dd-9393-46ed-9fbf-6871d5584d24","type":"CDSView"}},"id":"e16cb582-3309-43b4-8b03-d0650bb015b8","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"e265a77f-3665-40ce-891f-005768d7b4fa","type":"BasicTickFormatter"},"plot":{"id":"5ad93a3d-b848-4222-8d60-daaabdc8178b","type":"Plot"},"ticker":{"id":"055cb3c2-5cc4-4fcd-aea3-d8d8d4e29cae","type":"BasicTicker"}},"id":"d1ce046b-1731-430f-8d3e-c455c690da89","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7f4f0de8-eb77-4967-b64b-e8e55d388f4a","type":"Toolbar"},{"attributes":{},"id":"c0169de6-a587-482f-9031-5820f3b6ed1f","type":"BasicTicker"},{"attributes":{},"id":"811ca110-c4e6-4843-9595-bd64240f9012","type":"BasicTickFormatter"}],"root_ids":["5ad93a3d-b848-4222-8d60-daaabdc8178b"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ca933aa0-f35c-4f62-a9bc-9e1cc8755dfb","elementid":"068799f0-5ee5-4f5a-ad47-383b4f9a7b9f","modelid":"5ad93a3d-b848-4222-8d60-daaabdc8178b"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
