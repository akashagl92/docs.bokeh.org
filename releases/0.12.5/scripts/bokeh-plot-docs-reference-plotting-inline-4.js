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
      };var element = document.getElementById("8b8baff5-f506-442a-9a14-d8f2d5e2de7c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8b8baff5-f506-442a-9a14-d8f2d5e2de7c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"35221c8e-b4aa-493b-8b8b-8747d637191a":{"roots":{"references":[{"attributes":{"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"}},"id":"fb5b0d28-d504-43e8-b414-e2e9fffde300","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"2351c810-3c41-482f-b8b2-f1f88d9524f2","type":"Title"},{"attributes":{"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"}},"id":"e04e8534-e57e-43fa-91a9-e38d5ebf87f8","type":"ResetTool"},{"attributes":{"formatter":{"id":"ae8426c4-4445-464e-917d-49b78e248280","type":"BasicTickFormatter"},"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ee0b346-f569-478a-8afd-deca91455b68","type":"BasicTicker"}},"id":"8756bb4d-1369-454f-90c6-20a4599f8c3d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d204dc00-fbd5-4aec-b1e5-3e1a4e16effd","type":"ColumnDataSource"},"glyph":{"id":"864f6d2f-4995-4254-812d-174ccd16fb1f","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f85c7915-e37b-4f87-bd53-c107b7693013","type":"CircleX"},"selection_glyph":null},"id":"96e6791e-b257-41ba-ab05-c7689efd4eaa","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f25c5d67-45d4-412a-8e10-194871628e4d","type":"BasicTicker"}},"id":"d3c97290-6ff4-425d-a700-ff6267ffa02e","type":"Grid"},{"attributes":{"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"}},"id":"65498136-0d16-44f2-bd0b-aefb350e950e","type":"SaveTool"},{"attributes":{"formatter":{"id":"1ae4a61f-b09b-46af-8d25-184fe22039c1","type":"BasicTickFormatter"},"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f25c5d67-45d4-412a-8e10-194871628e4d","type":"BasicTicker"}},"id":"fe38a0e1-5c3f-4925-8bdc-9f3c4c223769","type":"LinearAxis"},{"attributes":{},"id":"2483707b-11e1-47ec-8e9f-d8c9ee9ac46a","type":"ToolEvents"},{"attributes":{"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"}},"id":"44dcfe78-c0ce-46dc-8654-a05f2a59d435","type":"HelpTool"},{"attributes":{"callback":null},"id":"20d71664-fc7f-4a1e-b9aa-b81baaaebb36","type":"DataRange1d"},{"attributes":{"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ee0b346-f569-478a-8afd-deca91455b68","type":"BasicTicker"}},"id":"fdaf490a-fbcf-4201-8c2a-1affa96d2934","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fb5b0d28-d504-43e8-b414-e2e9fffde300","type":"PanTool"},{"id":"65cc163c-4f56-480e-9d99-368fbb873b27","type":"WheelZoomTool"},{"id":"fed03022-bd63-4cba-8a3d-9126e4bf4431","type":"BoxZoomTool"},{"id":"65498136-0d16-44f2-bd0b-aefb350e950e","type":"SaveTool"},{"id":"e04e8534-e57e-43fa-91a9-e38d5ebf87f8","type":"ResetTool"},{"id":"44dcfe78-c0ce-46dc-8654-a05f2a59d435","type":"HelpTool"}]},"id":"f8c6f6d4-2d70-4bf7-8cba-a6e14aa9156b","type":"Toolbar"},{"attributes":{"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"}},"id":"65cc163c-4f56-480e-9d99-368fbb873b27","type":"WheelZoomTool"},{"attributes":{},"id":"2ee0b346-f569-478a-8afd-deca91455b68","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f85c7915-e37b-4f87-bd53-c107b7693013","type":"CircleX"},{"attributes":{},"id":"ae8426c4-4445-464e-917d-49b78e248280","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ada91cb5-580d-4729-995c-76e24484cc59","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"383ecc05-6ef1-4aa8-a723-72221a8e4150","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"864f6d2f-4995-4254-812d-174ccd16fb1f","type":"CircleX"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d204dc00-fbd5-4aec-b1e5-3e1a4e16effd","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"ada91cb5-580d-4729-995c-76e24484cc59","type":"BoxAnnotation"},"plot":{"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"}},"id":"fed03022-bd63-4cba-8a3d-9126e4bf4431","type":"BoxZoomTool"},{"attributes":{},"id":"1ae4a61f-b09b-46af-8d25-184fe22039c1","type":"BasicTickFormatter"},{"attributes":{},"id":"f25c5d67-45d4-412a-8e10-194871628e4d","type":"BasicTicker"},{"attributes":{"below":[{"id":"8756bb4d-1369-454f-90c6-20a4599f8c3d","type":"LinearAxis"}],"left":[{"id":"fe38a0e1-5c3f-4925-8bdc-9f3c4c223769","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8756bb4d-1369-454f-90c6-20a4599f8c3d","type":"LinearAxis"},{"id":"fdaf490a-fbcf-4201-8c2a-1affa96d2934","type":"Grid"},{"id":"fe38a0e1-5c3f-4925-8bdc-9f3c4c223769","type":"LinearAxis"},{"id":"d3c97290-6ff4-425d-a700-ff6267ffa02e","type":"Grid"},{"id":"ada91cb5-580d-4729-995c-76e24484cc59","type":"BoxAnnotation"},{"id":"96e6791e-b257-41ba-ab05-c7689efd4eaa","type":"GlyphRenderer"}],"title":{"id":"2351c810-3c41-482f-b8b2-f1f88d9524f2","type":"Title"},"tool_events":{"id":"2483707b-11e1-47ec-8e9f-d8c9ee9ac46a","type":"ToolEvents"},"toolbar":{"id":"f8c6f6d4-2d70-4bf7-8cba-a6e14aa9156b","type":"Toolbar"},"x_range":{"id":"383ecc05-6ef1-4aa8-a723-72221a8e4150","type":"DataRange1d"},"y_range":{"id":"20d71664-fc7f-4a1e-b9aa-b81baaaebb36","type":"DataRange1d"}},"id":"89d39045-0986-4255-a37c-508eeac3458c","subtype":"Figure","type":"Plot"}],"root_ids":["89d39045-0986-4255-a37c-508eeac3458c"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"35221c8e-b4aa-493b-8b8b-8747d637191a","elementid":"8b8baff5-f506-442a-9a14-d8f2d5e2de7c","modelid":"89d39045-0986-4255-a37c-508eeac3458c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
