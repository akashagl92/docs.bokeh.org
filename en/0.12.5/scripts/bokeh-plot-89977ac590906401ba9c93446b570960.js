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
      };var element = document.getElementById("fa723f9e-992c-48d8-ba07-35f18a657ca4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa723f9e-992c-48d8-ba07-35f18a657ca4' but no matching script tag was found. ")
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
                var docs_json = {"e44b0a56-b2c1-4202-9df6-f33586aee521":{"roots":{"references":[{"attributes":{},"id":"c4bdcc99-a9ae-4ba5-8e0b-4b7a8360548b","type":"BasicTicker"},{"attributes":{"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"}},"id":"2aec0414-faf4-481a-a1bb-4bb476d83079","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4bdcc99-a9ae-4ba5-8e0b-4b7a8360548b","type":"BasicTicker"}},"id":"1fef6b38-83b1-4301-bc74-9896ac59bf23","type":"Grid"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"c6c98dbf-8600-4f1b-8fa2-f1b18291ae25","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4bdcc99-a9ae-4ba5-8e0b-4b7a8360548b","type":"BasicTicker"}},"id":"377f349f-56d4-408e-aa0f-fcf4c17ce2ad","type":"LinearAxis"},{"attributes":{"callback":null},"id":"bf4caaf9-a918-4769-ab25-9f7077b7cf8b","type":"DataRange1d"},{"attributes":{"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"}},"id":"4f57f47f-cab1-46e8-bd27-697774e7f950","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4f57f47f-cab1-46e8-bd27-697774e7f950","type":"PanTool"},{"id":"2aec0414-faf4-481a-a1bb-4bb476d83079","type":"WheelZoomTool"},{"id":"b79651f0-5dc5-4994-91d5-da3e865dee1e","type":"BoxZoomTool"},{"id":"811508b5-bceb-417f-9230-dfd59b3c2310","type":"SaveTool"},{"id":"f2504313-3cc3-463b-9423-238b6a48f990","type":"ResetTool"},{"id":"e1bcacce-98a1-4a0e-b0b6-474a6c76ff8f","type":"HelpTool"}]},"id":"28afbd99-bff9-41bf-bd04-4ea69b860f42","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c80137b-b5cc-4d11-95ea-06798cdf31b6","type":"BoxAnnotation"},{"attributes":{},"id":"c6c98dbf-8600-4f1b-8fa2-f1b18291ae25","type":"BasicTickFormatter"},{"attributes":{},"id":"fb32c260-ca71-40d4-8fe9-fdaf78e96316","type":"ToolEvents"},{"attributes":{"overlay":{"id":"0c80137b-b5cc-4d11-95ea-06798cdf31b6","type":"BoxAnnotation"},"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"}},"id":"b79651f0-5dc5-4994-91d5-da3e865dee1e","type":"BoxZoomTool"},{"attributes":{},"id":"ea4e010e-b749-40d5-9638-c7d883dd18eb","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2a10404e-eb2c-4f4e-9a99-9cdf77479fe6","type":"ColumnDataSource"},"glyph":{"id":"40ed971f-948e-49ff-a799-c43a0af33cc4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"05b1a12e-7391-44f4-8469-02db9edf5999","type":"Circle"},"selection_glyph":null},"id":"27dfaf4c-8eb6-48f6-a3d9-f3b29da11fce","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"}},"id":"e1bcacce-98a1-4a0e-b0b6-474a6c76ff8f","type":"HelpTool"},{"attributes":{},"id":"e5c1891c-5eeb-4326-b4be-b7324928a6cc","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"40ed971f-948e-49ff-a799-c43a0af33cc4","type":"Circle"},{"attributes":{"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"}},"id":"811508b5-bceb-417f-9230-dfd59b3c2310","type":"SaveTool"},{"attributes":{"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5c1891c-5eeb-4326-b4be-b7324928a6cc","type":"BasicTicker"}},"id":"c5bea958-77d7-480c-aebd-88d6e2c239ce","type":"Grid"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"ea4e010e-b749-40d5-9638-c7d883dd18eb","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5c1891c-5eeb-4326-b4be-b7324928a6cc","type":"BasicTicker"}},"id":"f2981c78-816f-4065-bbde-c2c653682358","type":"LinearAxis"},{"attributes":{"plot":{"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"}},"id":"f2504313-3cc3-463b-9423-238b6a48f990","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"05b1a12e-7391-44f4-8469-02db9edf5999","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"7cc7d853-98dc-4d6a-aed2-321fead6b1a5","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2a10404e-eb2c-4f4e-9a99-9cdf77479fe6","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"f2981c78-816f-4065-bbde-c2c653682358","type":"LinearAxis"}],"left":[{"id":"377f349f-56d4-408e-aa0f-fcf4c17ce2ad","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f2981c78-816f-4065-bbde-c2c653682358","type":"LinearAxis"},{"id":"c5bea958-77d7-480c-aebd-88d6e2c239ce","type":"Grid"},{"id":"377f349f-56d4-408e-aa0f-fcf4c17ce2ad","type":"LinearAxis"},{"id":"1fef6b38-83b1-4301-bc74-9896ac59bf23","type":"Grid"},{"id":"0c80137b-b5cc-4d11-95ea-06798cdf31b6","type":"BoxAnnotation"},{"id":"27dfaf4c-8eb6-48f6-a3d9-f3b29da11fce","type":"GlyphRenderer"}],"title":{"id":"7cc7d853-98dc-4d6a-aed2-321fead6b1a5","type":"Title"},"tool_events":{"id":"fb32c260-ca71-40d4-8fe9-fdaf78e96316","type":"ToolEvents"},"toolbar":{"id":"28afbd99-bff9-41bf-bd04-4ea69b860f42","type":"Toolbar"},"x_range":{"id":"bf4caaf9-a918-4769-ab25-9f7077b7cf8b","type":"DataRange1d"},"y_range":{"id":"e67a3e86-7161-40f2-89bf-c3d1ba367761","type":"DataRange1d"}},"id":"fc37c1fe-7dde-4553-a2df-79c010fd3fea","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"e67a3e86-7161-40f2-89bf-c3d1ba367761","type":"DataRange1d"}],"root_ids":["fc37c1fe-7dde-4553-a2df-79c010fd3fea"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e44b0a56-b2c1-4202-9df6-f33586aee521","elementid":"fa723f9e-992c-48d8-ba07-35f18a657ca4","modelid":"fc37c1fe-7dde-4553-a2df-79c010fd3fea"}];
                
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
