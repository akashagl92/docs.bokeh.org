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
      };var element = document.getElementById("cfe744fe-0d2d-4e17-9213-5e46ac1ff0ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cfe744fe-0d2d-4e17-9213-5e46ac1ff0ed' but no matching script tag was found. ")
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
                var docs_json = {"f5aba05d-c88e-4e6f-8c82-657cb59d887c":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"405cf83d-bb3e-4bc7-9cc4-59db44abfe04","type":"Annulus"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2539e22b-3ab8-4c1a-a94a-06eb10c8efaf","type":"PanTool"},{"id":"1cb62063-8836-4dd4-bdc9-9606dc78f7ed","type":"WheelZoomTool"},{"id":"3a647388-721e-4484-9d32-54fecd6e5c0b","type":"BoxZoomTool"},{"id":"395e3d75-dcf5-4cb1-9036-d8abdf2b5ce8","type":"SaveTool"},{"id":"a8dd9436-b65d-43b8-8e29-25a86c04cfb3","type":"ResetTool"},{"id":"726b2f52-0f0a-41ec-94cb-242f60152043","type":"HelpTool"}]},"id":"981b02ce-1e68-41a4-90cc-7b0625dc02a5","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0f47ab7c-fe45-48e2-a621-e909be004e21","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"5821ed18-03a2-45d7-8438-33cc8fffd7a6","type":"ColumnDataSource"},{"attributes":{},"id":"110e94d5-016e-4f72-ac79-81f0716f6e85","type":"ToolEvents"},{"attributes":{"formatter":{"id":"36c8dacd-6b5a-4ce2-967d-cd0ad90ebd43","type":"BasicTickFormatter"},"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c38b3f8-1669-4a61-89b2-9ba5a9b6ed6b","type":"BasicTicker"}},"id":"60910916-cced-4ddc-b5a0-e51c95635de1","type":"LinearAxis"},{"attributes":{"formatter":{"id":"62dab412-1a69-4198-955d-ee5469e5d6d0","type":"BasicTickFormatter"},"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"},"ticker":{"id":"20bcfe20-7081-4613-ac4a-5209e3c66baf","type":"BasicTicker"}},"id":"d9bc8948-6b6e-4029-95fd-5c247ed06536","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"d68cb8e0-80be-4177-a8e5-99d1ba092e16","type":"Annulus"},{"attributes":{"overlay":{"id":"0f47ab7c-fe45-48e2-a621-e909be004e21","type":"BoxAnnotation"},"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"}},"id":"3a647388-721e-4484-9d32-54fecd6e5c0b","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"3ba65508-8055-4ae1-b3c5-26c6d7312a19","type":"DataRange1d"},{"attributes":{},"id":"36c8dacd-6b5a-4ce2-967d-cd0ad90ebd43","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"}},"id":"726b2f52-0f0a-41ec-94cb-242f60152043","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"730d7ad7-328b-49ab-8fa2-5b2f275ea1f9","type":"Title"},{"attributes":{},"id":"62dab412-1a69-4198-955d-ee5469e5d6d0","type":"BasicTickFormatter"},{"attributes":{},"id":"6c38b3f8-1669-4a61-89b2-9ba5a9b6ed6b","type":"BasicTicker"},{"attributes":{"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"}},"id":"395e3d75-dcf5-4cb1-9036-d8abdf2b5ce8","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"},"ticker":{"id":"20bcfe20-7081-4613-ac4a-5209e3c66baf","type":"BasicTicker"}},"id":"63c48767-9a0e-4371-a9e8-481cb6825ab6","type":"Grid"},{"attributes":{"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c38b3f8-1669-4a61-89b2-9ba5a9b6ed6b","type":"BasicTicker"}},"id":"13a0b103-899a-4150-b82c-65f8cf239dfe","type":"Grid"},{"attributes":{},"id":"20bcfe20-7081-4613-ac4a-5209e3c66baf","type":"BasicTicker"},{"attributes":{"below":[{"id":"60910916-cced-4ddc-b5a0-e51c95635de1","type":"LinearAxis"}],"left":[{"id":"d9bc8948-6b6e-4029-95fd-5c247ed06536","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"60910916-cced-4ddc-b5a0-e51c95635de1","type":"LinearAxis"},{"id":"13a0b103-899a-4150-b82c-65f8cf239dfe","type":"Grid"},{"id":"d9bc8948-6b6e-4029-95fd-5c247ed06536","type":"LinearAxis"},{"id":"63c48767-9a0e-4371-a9e8-481cb6825ab6","type":"Grid"},{"id":"0f47ab7c-fe45-48e2-a621-e909be004e21","type":"BoxAnnotation"},{"id":"d4a33d81-9a72-4915-b052-0b4694391bd9","type":"GlyphRenderer"}],"title":{"id":"730d7ad7-328b-49ab-8fa2-5b2f275ea1f9","type":"Title"},"tool_events":{"id":"110e94d5-016e-4f72-ac79-81f0716f6e85","type":"ToolEvents"},"toolbar":{"id":"981b02ce-1e68-41a4-90cc-7b0625dc02a5","type":"Toolbar"},"x_range":{"id":"3ba65508-8055-4ae1-b3c5-26c6d7312a19","type":"DataRange1d"},"y_range":{"id":"2ccb9523-426f-4f3a-a66a-f4324176216a","type":"DataRange1d"}},"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"}},"id":"a8dd9436-b65d-43b8-8e29-25a86c04cfb3","type":"ResetTool"},{"attributes":{"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"}},"id":"2539e22b-3ab8-4c1a-a94a-06eb10c8efaf","type":"PanTool"},{"attributes":{"data_source":{"id":"5821ed18-03a2-45d7-8438-33cc8fffd7a6","type":"ColumnDataSource"},"glyph":{"id":"d68cb8e0-80be-4177-a8e5-99d1ba092e16","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"405cf83d-bb3e-4bc7-9cc4-59db44abfe04","type":"Annulus"},"selection_glyph":null},"id":"d4a33d81-9a72-4915-b052-0b4694391bd9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"beafd89e-8b71-452b-8121-10b247612286","subtype":"Figure","type":"Plot"}},"id":"1cb62063-8836-4dd4-bdc9-9606dc78f7ed","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"2ccb9523-426f-4f3a-a66a-f4324176216a","type":"DataRange1d"}],"root_ids":["beafd89e-8b71-452b-8121-10b247612286"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"f5aba05d-c88e-4e6f-8c82-657cb59d887c","elementid":"cfe744fe-0d2d-4e17-9213-5e46ac1ff0ed","modelid":"beafd89e-8b71-452b-8121-10b247612286"}];
                
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
