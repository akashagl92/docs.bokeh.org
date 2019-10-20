document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("6975911b-7a16-43ae-96eb-28891c3368f2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6975911b-7a16-43ae-96eb-28891c3368f2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"1e4be916-ecec-41d9-99e0-c7aed7435cb5":{"roots":{"references":[{"attributes":{},"id":"dcb305e0-9544-4285-8e74-d2bc35d70621","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6235017f-32ea-47cf-adfe-896d8424a306","type":"Plot"},"ticker":{"id":"dcb305e0-9544-4285-8e74-d2bc35d70621","type":"BasicTicker"}},"id":"ea63a0e8-0c9c-4d7e-b9e2-2567e81ac2d6","type":"Grid"},{"attributes":{"callback":null},"id":"981078ec-4c8c-4e26-9454-7a508410ef9e","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xm01","y","ym01","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1]}},"id":"f001b9ad-109f-4d42-8e77-a1fb8df02826","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6235017f-32ea-47cf-adfe-896d8424a306","type":"Plot"},"ticker":{"id":"bb539ca1-2080-4c90-8f99-81f510647113","type":"BasicTicker"}},"id":"d1af22b0-28ff-4012-8f95-2fd2ac70f7fe","type":"Grid"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"cfdbe35f-b30a-43b3-811b-a94ac4ee3ae7","type":"Segment"},{"attributes":{},"id":"310646aa-5e09-4a13-a381-f99486370a08","type":"ToolEvents"},{"attributes":{"below":[{"id":"11d947ac-c04e-4dd4-9ee1-8931fcdbdc66","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"313df903-0815-4f90-b9bf-7cdd637022dc","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"79a2e353-2768-46bd-b36d-1ec0d4625143","type":"GlyphRenderer"},{"id":"11d947ac-c04e-4dd4-9ee1-8931fcdbdc66","type":"LinearAxis"},{"id":"313df903-0815-4f90-b9bf-7cdd637022dc","type":"LinearAxis"},{"id":"d1af22b0-28ff-4012-8f95-2fd2ac70f7fe","type":"Grid"},{"id":"ea63a0e8-0c9c-4d7e-b9e2-2567e81ac2d6","type":"Grid"}],"title":null,"tool_events":{"id":"310646aa-5e09-4a13-a381-f99486370a08","type":"ToolEvents"},"toolbar":{"id":"841b3334-7829-4b3d-b754-3f898bd6a4fd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"981078ec-4c8c-4e26-9454-7a508410ef9e","type":"DataRange1d"},"y_range":{"id":"8202bfb4-da7c-49f3-a086-55b7e579f53a","type":"DataRange1d"}},"id":"6235017f-32ea-47cf-adfe-896d8424a306","type":"Plot"},{"attributes":{"formatter":{"id":"f6fe8c1d-b1a5-462b-94a1-561a2d81b9b5","type":"BasicTickFormatter"},"plot":{"id":"6235017f-32ea-47cf-adfe-896d8424a306","type":"Plot"},"ticker":{"id":"bb539ca1-2080-4c90-8f99-81f510647113","type":"BasicTicker"}},"id":"11d947ac-c04e-4dd4-9ee1-8931fcdbdc66","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8202bfb4-da7c-49f3-a086-55b7e579f53a","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"841b3334-7829-4b3d-b754-3f898bd6a4fd","type":"Toolbar"},{"attributes":{"data_source":{"id":"f001b9ad-109f-4d42-8e77-a1fb8df02826","type":"ColumnDataSource"},"glyph":{"id":"cfdbe35f-b30a-43b3-811b-a94ac4ee3ae7","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"79a2e353-2768-46bd-b36d-1ec0d4625143","type":"GlyphRenderer"},{"attributes":{},"id":"a00fa3d9-bdf8-4c50-b329-3a9d13962e3b","type":"BasicTickFormatter"},{"attributes":{},"id":"bb539ca1-2080-4c90-8f99-81f510647113","type":"BasicTicker"},{"attributes":{},"id":"f6fe8c1d-b1a5-462b-94a1-561a2d81b9b5","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a00fa3d9-bdf8-4c50-b329-3a9d13962e3b","type":"BasicTickFormatter"},"plot":{"id":"6235017f-32ea-47cf-adfe-896d8424a306","type":"Plot"},"ticker":{"id":"dcb305e0-9544-4285-8e74-d2bc35d70621","type":"BasicTicker"}},"id":"313df903-0815-4f90-b9bf-7cdd637022dc","type":"LinearAxis"}],"root_ids":["6235017f-32ea-47cf-adfe-896d8424a306"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"1e4be916-ecec-41d9-99e0-c7aed7435cb5","elementid":"6975911b-7a16-43ae-96eb-28891c3368f2","modelid":"6235017f-32ea-47cf-adfe-896d8424a306"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});