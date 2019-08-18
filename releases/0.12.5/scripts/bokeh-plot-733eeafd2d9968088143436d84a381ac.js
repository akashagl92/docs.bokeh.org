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
      };var element = document.getElementById("6e029a51-ad2e-4b9a-903e-0324f208fc33");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6e029a51-ad2e-4b9a-903e-0324f208fc33' but no matching script tag was found. ")
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
                var docs_json = {"7cbf339f-c842-4c9a-b8f3-afdd47c4a05b":{"roots":{"references":[{"attributes":{"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"}},"id":"3e3b0fa6-a37c-4a54-a60f-04f4fa3b05ff","type":"SaveTool"},{"attributes":{},"id":"86901020-0908-436a-a919-e73f52abb64c","type":"BasicTicker"},{"attributes":{},"id":"a3811153-d98a-4afb-b20f-8ae48eab94ac","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"ec7a4250-e1c4-45c6-b688-dae7a220af10","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"42a7aca7-8017-47e8-b189-3f379cf9c969","type":"BasicTicker"}},"id":"3a717715-1e17-4ce8-83b9-8562c602a14e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"5bb33182-9e10-4bb0-b70c-5d987b12318c","type":"Annulus"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b1dbfa0e-fa6d-4b83-987a-9bb4c8756196","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"a3811153-d98a-4afb-b20f-8ae48eab94ac","type":"BasicTickFormatter"},"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"86901020-0908-436a-a919-e73f52abb64c","type":"BasicTicker"}},"id":"ff5a276f-9b34-45ea-9398-bcf79b22d288","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"b572bf0b-aa58-4da2-9e34-8b5158a50706","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"ff5a276f-9b34-45ea-9398-bcf79b22d288","type":"LinearAxis"}],"left":[{"id":"21e9aedb-2c6a-48e2-a713-e3630cd3562b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ff5a276f-9b34-45ea-9398-bcf79b22d288","type":"LinearAxis"},{"id":"34d714aa-c10b-43d8-949c-5a7191a4c809","type":"Grid"},{"id":"21e9aedb-2c6a-48e2-a713-e3630cd3562b","type":"LinearAxis"},{"id":"3a717715-1e17-4ce8-83b9-8562c602a14e","type":"Grid"},{"id":"b1dbfa0e-fa6d-4b83-987a-9bb4c8756196","type":"BoxAnnotation"},{"id":"2533b379-aac3-4bee-b673-b35984d7e59f","type":"GlyphRenderer"}],"title":{"id":"ec7a4250-e1c4-45c6-b688-dae7a220af10","type":"Title"},"tool_events":{"id":"c7dcd1d1-4194-435e-9083-217ed6122c8e","type":"ToolEvents"},"toolbar":{"id":"fc074b2d-10fb-4528-8ab9-c37894b80b61","type":"Toolbar"},"x_range":{"id":"52415c86-c7e2-44a4-b11f-5cff0db698df","type":"DataRange1d"},"y_range":{"id":"39968704-dcc2-4b53-92f0-c00fe1310b2f","type":"DataRange1d"}},"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"2fb350bb-020b-483d-9134-d93a68178926","type":"BasicTickFormatter"},"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"42a7aca7-8017-47e8-b189-3f379cf9c969","type":"BasicTicker"}},"id":"21e9aedb-2c6a-48e2-a713-e3630cd3562b","type":"LinearAxis"},{"attributes":{"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"}},"id":"fbbf759f-148d-4a29-9939-11436a936d59","type":"ResetTool"},{"attributes":{},"id":"c7dcd1d1-4194-435e-9083-217ed6122c8e","type":"ToolEvents"},{"attributes":{"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"86901020-0908-436a-a919-e73f52abb64c","type":"BasicTicker"}},"id":"34d714aa-c10b-43d8-949c-5a7191a4c809","type":"Grid"},{"attributes":{"callback":null},"id":"39968704-dcc2-4b53-92f0-c00fe1310b2f","type":"DataRange1d"},{"attributes":{},"id":"42a7aca7-8017-47e8-b189-3f379cf9c969","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b572bf0b-aa58-4da2-9e34-8b5158a50706","type":"ColumnDataSource"},"glyph":{"id":"eca8d56c-21fc-409e-bb5b-1ee714deabb2","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5bb33182-9e10-4bb0-b70c-5d987b12318c","type":"Annulus"},"selection_glyph":null},"id":"2533b379-aac3-4bee-b673-b35984d7e59f","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8c8cc4b-bee6-4623-8595-562bb2100684","type":"PanTool"},{"id":"be259e9a-1823-449e-a75f-074dd2cf05d1","type":"WheelZoomTool"},{"id":"92552fd9-b175-4e5b-a9ae-12359ee1113f","type":"BoxZoomTool"},{"id":"3e3b0fa6-a37c-4a54-a60f-04f4fa3b05ff","type":"SaveTool"},{"id":"fbbf759f-148d-4a29-9939-11436a936d59","type":"ResetTool"},{"id":"23dd40fe-3975-45d3-b31b-ca92801441a5","type":"HelpTool"}]},"id":"fc074b2d-10fb-4528-8ab9-c37894b80b61","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"eca8d56c-21fc-409e-bb5b-1ee714deabb2","type":"Annulus"},{"attributes":{"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"}},"id":"b8c8cc4b-bee6-4623-8595-562bb2100684","type":"PanTool"},{"attributes":{"overlay":{"id":"b1dbfa0e-fa6d-4b83-987a-9bb4c8756196","type":"BoxAnnotation"},"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"}},"id":"92552fd9-b175-4e5b-a9ae-12359ee1113f","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"}},"id":"be259e9a-1823-449e-a75f-074dd2cf05d1","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"52415c86-c7e2-44a4-b11f-5cff0db698df","type":"DataRange1d"},{"attributes":{"plot":{"id":"4c314432-7828-4765-8f08-2f50c76d23e6","subtype":"Figure","type":"Plot"}},"id":"23dd40fe-3975-45d3-b31b-ca92801441a5","type":"HelpTool"},{"attributes":{},"id":"2fb350bb-020b-483d-9134-d93a68178926","type":"BasicTickFormatter"}],"root_ids":["4c314432-7828-4765-8f08-2f50c76d23e6"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"7cbf339f-c842-4c9a-b8f3-afdd47c4a05b","elementid":"6e029a51-ad2e-4b9a-903e-0324f208fc33","modelid":"4c314432-7828-4765-8f08-2f50c76d23e6"}];
                
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
