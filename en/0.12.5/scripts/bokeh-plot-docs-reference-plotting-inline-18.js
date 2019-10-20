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
      };var element = document.getElementById("5d4ed912-3a8f-485a-a6ab-fbc02432417e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d4ed912-3a8f-485a-a6ab-fbc02432417e' but no matching script tag was found. ")
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
                var docs_json = {"edd6dc61-a034-4dc2-aa79-8c379e4dc64e":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d2b25565-4aaa-4658-adc2-5fdd5ba95b2c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"}},"id":"bed05345-82f4-4cb8-b32b-9c7d151ffb39","type":"ResetTool"},{"attributes":{"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"}},"id":"85ba22b1-2e72-4959-9fd2-673f9d985641","type":"HelpTool"},{"attributes":{"callback":null},"id":"fdc67f6b-e5ac-420c-9bf6-b753466d0f75","type":"DataRange1d"},{"attributes":{"overlay":{"id":"d2b25565-4aaa-4658-adc2-5fdd5ba95b2c","type":"BoxAnnotation"},"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"}},"id":"57a3bf72-001f-4896-b5e2-41e5461179ba","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"259a6fd7-1384-4f07-9e4c-7d6976accc6d","type":"PanTool"},{"id":"70fa0d45-6971-4263-bcea-6d49926450e2","type":"WheelZoomTool"},{"id":"57a3bf72-001f-4896-b5e2-41e5461179ba","type":"BoxZoomTool"},{"id":"9cc7ea6a-ac0b-4d9a-88ad-23cba5a8abc6","type":"SaveTool"},{"id":"bed05345-82f4-4cb8-b32b-9c7d151ffb39","type":"ResetTool"},{"id":"85ba22b1-2e72-4959-9fd2-673f9d985641","type":"HelpTool"}]},"id":"813f0f0b-ffd9-4d0c-8ee5-a0fe757ad9fa","type":"Toolbar"},{"attributes":{"callback":null},"id":"302fb6b0-dc03-49d2-943b-86c0d3b048d0","type":"DataRange1d"},{"attributes":{"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"}},"id":"259a6fd7-1384-4f07-9e4c-7d6976accc6d","type":"PanTool"},{"attributes":{"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"}},"id":"70fa0d45-6971-4263-bcea-6d49926450e2","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"a423b2ab-6685-4610-a9fb-d9706495742d","type":"Title"},{"attributes":{"formatter":{"id":"296b3bda-c65e-4189-bcb8-a8245a5e2c8a","type":"BasicTickFormatter"},"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e6bfdf3-009f-42c0-9920-44528fee67d7","type":"BasicTicker"}},"id":"94c3db9e-4ed2-410d-8b78-38c7893065ad","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e82453cc-0af3-46c3-a494-e3de6edc6018","type":"Rect"},{"attributes":{"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"}},"id":"9cc7ea6a-ac0b-4d9a-88ad-23cba5a8abc6","type":"SaveTool"},{"attributes":{},"id":"53a3c778-4f86-471c-a928-817a6de44aa5","type":"BasicTickFormatter"},{"attributes":{},"id":"9e89b2d8-99b2-45dd-875a-9428337904ac","type":"BasicTicker"},{"attributes":{},"id":"fd748984-dc1c-4360-aabb-bf36b6ae587d","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff0687eb-3c72-4d93-8a49-068c594cea62","type":"Rect"},{"attributes":{"data_source":{"id":"b545a323-7b97-4cab-8214-4b8e38c4d99b","type":"ColumnDataSource"},"glyph":{"id":"e82453cc-0af3-46c3-a494-e3de6edc6018","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ff0687eb-3c72-4d93-8a49-068c594cea62","type":"Rect"},"selection_glyph":null},"id":"4baa1583-2924-470d-bb3d-2ba7d0190e3e","type":"GlyphRenderer"},{"attributes":{},"id":"296b3bda-c65e-4189-bcb8-a8245a5e2c8a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"53a3c778-4f86-471c-a928-817a6de44aa5","type":"BasicTickFormatter"},"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e89b2d8-99b2-45dd-875a-9428337904ac","type":"BasicTicker"}},"id":"a8799dd8-7028-4622-b26e-30023ff14544","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e6bfdf3-009f-42c0-9920-44528fee67d7","type":"BasicTicker"}},"id":"53c779eb-3b0d-4c93-9740-0b0ee9b7e62f","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"b545a323-7b97-4cab-8214-4b8e38c4d99b","type":"ColumnDataSource"},{"attributes":{},"id":"7e6bfdf3-009f-42c0-9920-44528fee67d7","type":"BasicTicker"},{"attributes":{"below":[{"id":"a8799dd8-7028-4622-b26e-30023ff14544","type":"LinearAxis"}],"left":[{"id":"94c3db9e-4ed2-410d-8b78-38c7893065ad","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a8799dd8-7028-4622-b26e-30023ff14544","type":"LinearAxis"},{"id":"d059b1f7-0b41-4c90-9ca0-68f663743a80","type":"Grid"},{"id":"94c3db9e-4ed2-410d-8b78-38c7893065ad","type":"LinearAxis"},{"id":"53c779eb-3b0d-4c93-9740-0b0ee9b7e62f","type":"Grid"},{"id":"d2b25565-4aaa-4658-adc2-5fdd5ba95b2c","type":"BoxAnnotation"},{"id":"4baa1583-2924-470d-bb3d-2ba7d0190e3e","type":"GlyphRenderer"}],"title":{"id":"a423b2ab-6685-4610-a9fb-d9706495742d","type":"Title"},"tool_events":{"id":"fd748984-dc1c-4360-aabb-bf36b6ae587d","type":"ToolEvents"},"toolbar":{"id":"813f0f0b-ffd9-4d0c-8ee5-a0fe757ad9fa","type":"Toolbar"},"x_range":{"id":"302fb6b0-dc03-49d2-943b-86c0d3b048d0","type":"DataRange1d"},"y_range":{"id":"fdc67f6b-e5ac-420c-9bf6-b753466d0f75","type":"DataRange1d"}},"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"df0e49c6-dbcd-4629-9331-c770bc50b1e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e89b2d8-99b2-45dd-875a-9428337904ac","type":"BasicTicker"}},"id":"d059b1f7-0b41-4c90-9ca0-68f663743a80","type":"Grid"}],"root_ids":["df0e49c6-dbcd-4629-9331-c770bc50b1e6"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"edd6dc61-a034-4dc2-aa79-8c379e4dc64e","elementid":"5d4ed912-3a8f-485a-a6ab-fbc02432417e","modelid":"df0e49c6-dbcd-4629-9331-c770bc50b1e6"}];
                
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
