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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("e12b3759-67e8-4cde-966e-56e8f2528424");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e12b3759-67e8-4cde-966e-56e8f2528424' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"700ad2a4-3f9f-40e2-af45-0cfb80640976":{"roots":{"references":[{"attributes":{},"id":"985196f9-4e02-4eee-85d6-1d99f99be56c","type":"ToolEvents"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34adb925-6834-4b28-890c-fc5aae9280f1","type":"X"},{"attributes":{"formatter":{"id":"3d21dd18-b82f-4e7b-ab1f-d7184e8f4f4c","type":"BasicTickFormatter"},"plot":{"id":"05f6b709-a3dd-4700-aff0-f0bae749d89e","type":"Plot"},"ticker":{"id":"b46a350a-6680-4bf0-b113-3c64347e0632","type":"BasicTicker"}},"id":"965927ae-cba2-4b2d-a696-cabbc2024241","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"707fffea-9056-49f2-a704-49ffe883ea65","type":"Toolbar"},{"attributes":{"data_source":{"id":"8e46d407-d5da-41d8-b47c-16e7b3a8d117","type":"ColumnDataSource"},"glyph":{"id":"34adb925-6834-4b28-890c-fc5aae9280f1","type":"X"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2326153f-4b4a-42b2-af96-0e4ae6c87e5e","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9a7c9cf1-1c2b-4584-89b2-cda58685f7c9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"965927ae-cba2-4b2d-a696-cabbc2024241","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2326153f-4b4a-42b2-af96-0e4ae6c87e5e","type":"GlyphRenderer"},{"id":"9a7c9cf1-1c2b-4584-89b2-cda58685f7c9","type":"LinearAxis"},{"id":"965927ae-cba2-4b2d-a696-cabbc2024241","type":"LinearAxis"},{"id":"05491f76-abb3-45ad-b99c-369449642309","type":"Grid"},{"id":"755cd12a-0142-4ce7-816e-fd3f42200e2e","type":"Grid"}],"title":null,"tool_events":{"id":"985196f9-4e02-4eee-85d6-1d99f99be56c","type":"ToolEvents"},"toolbar":{"id":"707fffea-9056-49f2-a704-49ffe883ea65","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6c04f66b-bd7b-4cef-803f-83c361f5b7e0","type":"DataRange1d"},"y_range":{"id":"569e9c81-45b7-4e41-9bde-12b9c5917b29","type":"DataRange1d"}},"id":"05f6b709-a3dd-4700-aff0-f0bae749d89e","type":"Plot"},{"attributes":{"formatter":{"id":"7ce2533c-6607-42e4-a9ca-efc5235ec620","type":"BasicTickFormatter"},"plot":{"id":"05f6b709-a3dd-4700-aff0-f0bae749d89e","type":"Plot"},"ticker":{"id":"2e172645-0ee8-4ed9-95c7-ae69ef4b460e","type":"BasicTicker"}},"id":"9a7c9cf1-1c2b-4584-89b2-cda58685f7c9","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"8e46d407-d5da-41d8-b47c-16e7b3a8d117","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"05f6b709-a3dd-4700-aff0-f0bae749d89e","type":"Plot"},"ticker":{"id":"b46a350a-6680-4bf0-b113-3c64347e0632","type":"BasicTicker"}},"id":"755cd12a-0142-4ce7-816e-fd3f42200e2e","type":"Grid"},{"attributes":{},"id":"3d21dd18-b82f-4e7b-ab1f-d7184e8f4f4c","type":"BasicTickFormatter"},{"attributes":{},"id":"2e172645-0ee8-4ed9-95c7-ae69ef4b460e","type":"BasicTicker"},{"attributes":{},"id":"7ce2533c-6607-42e4-a9ca-efc5235ec620","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"05f6b709-a3dd-4700-aff0-f0bae749d89e","type":"Plot"},"ticker":{"id":"2e172645-0ee8-4ed9-95c7-ae69ef4b460e","type":"BasicTicker"}},"id":"05491f76-abb3-45ad-b99c-369449642309","type":"Grid"},{"attributes":{"callback":null},"id":"569e9c81-45b7-4e41-9bde-12b9c5917b29","type":"DataRange1d"},{"attributes":{"callback":null},"id":"6c04f66b-bd7b-4cef-803f-83c361f5b7e0","type":"DataRange1d"},{"attributes":{},"id":"b46a350a-6680-4bf0-b113-3c64347e0632","type":"BasicTicker"}],"root_ids":["05f6b709-a3dd-4700-aff0-f0bae749d89e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"700ad2a4-3f9f-40e2-af45-0cfb80640976","elementid":"e12b3759-67e8-4cde-966e-56e8f2528424","modelid":"05f6b709-a3dd-4700-aff0-f0bae749d89e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
