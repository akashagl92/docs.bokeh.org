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
      };var element = document.getElementById("d7b94409-2cb1-45cb-aba3-e0a7771c4e8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7b94409-2cb1-45cb-aba3-e0a7771c4e8a' but no matching script tag was found. ")
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
                var docs_json = {"b45fc272-647a-4c51-95a7-f9b81105a6cd":{"roots":{"references":[{"attributes":{"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"}},"id":"53fa90d2-622b-42b6-87d5-39c368d18cb7","type":"PanTool"},{"attributes":{"formatter":{"id":"54dfb4f9-8609-4dfc-b9a3-e95c8cc8402a","type":"BasicTickFormatter"},"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b0de29a-e863-4c1b-8cb2-239f279da604","type":"BasicTicker"}},"id":"9c6c78fa-844b-4781-a03c-b9d4cd03d587","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"53fa90d2-622b-42b6-87d5-39c368d18cb7","type":"PanTool"},{"id":"56d7bc75-08a7-4813-ba11-edbb506e3c95","type":"WheelZoomTool"},{"id":"62a53fde-c0d1-4376-8a51-08e5ae811799","type":"BoxZoomTool"},{"id":"f3eddb29-3fe0-40c0-9d32-171df4a3bdf1","type":"SaveTool"},{"id":"b59264ba-756b-4da9-9a38-fbb90e157c29","type":"ResetTool"},{"id":"bed12322-c8c3-4bd0-ba0f-f11e2263481d","type":"HelpTool"}]},"id":"293e8da1-356d-4bc6-abac-a49202ca9e65","type":"Toolbar"},{"attributes":{"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b0de29a-e863-4c1b-8cb2-239f279da604","type":"BasicTicker"}},"id":"71f14000-f1e6-49e5-95d2-4771eedf84fc","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9227ce42-770e-4a5d-ae93-87c9571222f4","type":"Rect"},{"attributes":{},"id":"54dfb4f9-8609-4dfc-b9a3-e95c8cc8402a","type":"BasicTickFormatter"},{"attributes":{},"id":"c755af72-96e8-43cf-8b6f-6064c012fb64","type":"BasicTicker"},{"attributes":{"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"}},"id":"56d7bc75-08a7-4813-ba11-edbb506e3c95","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"05c5fdab-a82a-4c30-9e4b-4120e723d4fb","type":"BasicTickFormatter"},"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"},"ticker":{"id":"c755af72-96e8-43cf-8b6f-6064c012fb64","type":"BasicTicker"}},"id":"50a55afd-5f63-467b-8427-acf7a96c8cf0","type":"LinearAxis"},{"attributes":{"callback":null},"id":"5ed033ca-7426-4099-91e5-fc71576c571c","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4a621bf0-5f5e-4194-b131-74b4c7707798","type":"ColumnDataSource"},"glyph":{"id":"9227ce42-770e-4a5d-ae93-87c9571222f4","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a9a7a793-de7c-4691-a9de-c43d0f7e2a5b","type":"Rect"},"selection_glyph":null},"id":"b5500945-82d7-46f7-8648-2ecc7d37a433","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9c6c78fa-844b-4781-a03c-b9d4cd03d587","type":"LinearAxis"}],"left":[{"id":"50a55afd-5f63-467b-8427-acf7a96c8cf0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9c6c78fa-844b-4781-a03c-b9d4cd03d587","type":"LinearAxis"},{"id":"71f14000-f1e6-49e5-95d2-4771eedf84fc","type":"Grid"},{"id":"50a55afd-5f63-467b-8427-acf7a96c8cf0","type":"LinearAxis"},{"id":"55cd6d3b-10fb-498e-b488-2558aedff784","type":"Grid"},{"id":"602e17e8-1ecb-4866-8d7d-28d7295d058b","type":"BoxAnnotation"},{"id":"b5500945-82d7-46f7-8648-2ecc7d37a433","type":"GlyphRenderer"}],"title":{"id":"f4ef978a-0b62-4ac9-851c-f2fc373aecd1","type":"Title"},"tool_events":{"id":"0c172866-426a-4ea3-a55d-d767291c777b","type":"ToolEvents"},"toolbar":{"id":"293e8da1-356d-4bc6-abac-a49202ca9e65","type":"Toolbar"},"x_range":{"id":"30d22bfb-04f5-425a-885e-2ec0b3b11621","type":"DataRange1d"},"y_range":{"id":"5ed033ca-7426-4099-91e5-fc71576c571c","type":"DataRange1d"}},"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"f4ef978a-0b62-4ac9-851c-f2fc373aecd1","type":"Title"},{"attributes":{"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"}},"id":"bed12322-c8c3-4bd0-ba0f-f11e2263481d","type":"HelpTool"},{"attributes":{},"id":"0c172866-426a-4ea3-a55d-d767291c777b","type":"ToolEvents"},{"attributes":{"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"}},"id":"b59264ba-756b-4da9-9a38-fbb90e157c29","type":"ResetTool"},{"attributes":{"overlay":{"id":"602e17e8-1ecb-4866-8d7d-28d7295d058b","type":"BoxAnnotation"},"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"}},"id":"62a53fde-c0d1-4376-8a51-08e5ae811799","type":"BoxZoomTool"},{"attributes":{},"id":"3b0de29a-e863-4c1b-8cb2-239f279da604","type":"BasicTicker"},{"attributes":{"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"}},"id":"f3eddb29-3fe0-40c0-9d32-171df4a3bdf1","type":"SaveTool"},{"attributes":{},"id":"05c5fdab-a82a-4c30-9e4b-4120e723d4fb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4a621bf0-5f5e-4194-b131-74b4c7707798","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"79c0e888-cf95-4f3e-bccd-e77a9352d936","subtype":"Figure","type":"Plot"},"ticker":{"id":"c755af72-96e8-43cf-8b6f-6064c012fb64","type":"BasicTicker"}},"id":"55cd6d3b-10fb-498e-b488-2558aedff784","type":"Grid"},{"attributes":{"callback":null},"id":"30d22bfb-04f5-425a-885e-2ec0b3b11621","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9a7a793-de7c-4691-a9de-c43d0f7e2a5b","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"602e17e8-1ecb-4866-8d7d-28d7295d058b","type":"BoxAnnotation"}],"root_ids":["79c0e888-cf95-4f3e-bccd-e77a9352d936"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"b45fc272-647a-4c51-95a7-f9b81105a6cd","elementid":"d7b94409-2cb1-45cb-aba3-e0a7771c4e8a","modelid":"79c0e888-cf95-4f3e-bccd-e77a9352d936"}];
                
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
