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
      };var element = document.getElementById("343c3b6d-044a-4122-b908-b63ef64c484e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '343c3b6d-044a-4122-b908-b63ef64c484e' but no matching script tag was found. ")
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
                var docs_json = {"d3a96743-81a2-436d-a687-87cf419afccb":{"roots":{"references":[{"attributes":{"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"}},"id":"0d2d80fb-8d91-4b19-8de9-6026e95bd21a","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"dcb7d598-09fa-4685-8412-f145942ac3ce","type":"Line"},{"attributes":{"formatter":{"id":"65aa7bdf-ebc1-46b9-bd43-7be0c73d2cb8","type":"BasicTickFormatter"},"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"},"ticker":{"id":"56bbbc77-ad82-409a-94cd-79df1dd95ad3","type":"BasicTicker"}},"id":"08e18bed-ea8a-4ae0-a1a3-70cba4adcc3d","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"a5b54e90-4daa-43af-abd2-6dfefde10ea2","type":"Title"},{"attributes":{"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"},"ticker":{"id":"56bbbc77-ad82-409a-94cd-79df1dd95ad3","type":"BasicTicker"}},"id":"39e16ddf-b011-4c70-b0b2-14fc47ba8e8b","type":"Grid"},{"attributes":{},"id":"9de79955-b0bf-4f16-b0ba-c8834961942b","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bf826ea5-79be-4b7e-b43b-a187f322e4f6","type":"PanTool"},{"id":"a799f640-0ecc-4090-9fad-53c2285f111c","type":"WheelZoomTool"},{"id":"f964e909-5e6f-478b-8945-0e7d504c5b30","type":"BoxZoomTool"},{"id":"dc9ca489-3ca2-4b79-9d48-81ebc1946707","type":"SaveTool"},{"id":"9f53d53a-c85a-4536-8405-b2c42a290359","type":"ResetTool"},{"id":"0d2d80fb-8d91-4b19-8de9-6026e95bd21a","type":"HelpTool"}]},"id":"5cf3b093-2716-473e-a4a1-0f7e8c560b40","type":"Toolbar"},{"attributes":{},"id":"65aa7bdf-ebc1-46b9-bd43-7be0c73d2cb8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"}},"id":"dc9ca489-3ca2-4b79-9d48-81ebc1946707","type":"SaveTool"},{"attributes":{},"id":"aa80785d-38a9-4b5f-b85e-cff4bd19fcb7","type":"BasicTicker"},{"attributes":{"overlay":{"id":"4b861eb8-48d9-4f9c-b456-e0e1d259c306","type":"BoxAnnotation"},"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"}},"id":"f964e909-5e6f-478b-8945-0e7d504c5b30","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"299eef40-6077-4659-ba73-96987cd9305d","type":"DataRange1d"},{"attributes":{"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"}},"id":"bf826ea5-79be-4b7e-b43b-a187f322e4f6","type":"PanTool"},{"attributes":{"below":[{"id":"08e18bed-ea8a-4ae0-a1a3-70cba4adcc3d","type":"LinearAxis"}],"left":[{"id":"30defe7e-72fd-4cfc-bfe1-8312a83deba0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"08e18bed-ea8a-4ae0-a1a3-70cba4adcc3d","type":"LinearAxis"},{"id":"39e16ddf-b011-4c70-b0b2-14fc47ba8e8b","type":"Grid"},{"id":"30defe7e-72fd-4cfc-bfe1-8312a83deba0","type":"LinearAxis"},{"id":"b4cb563e-256f-4531-aaf1-2f4922eda5b0","type":"Grid"},{"id":"4b861eb8-48d9-4f9c-b456-e0e1d259c306","type":"BoxAnnotation"},{"id":"d6a41d04-d86c-4daa-af45-3db4efcea699","type":"GlyphRenderer"}],"title":{"id":"a5b54e90-4daa-43af-abd2-6dfefde10ea2","type":"Title"},"tool_events":{"id":"05fa5170-46f5-4e5e-b6cf-00ad9881483d","type":"ToolEvents"},"toolbar":{"id":"5cf3b093-2716-473e-a4a1-0f7e8c560b40","type":"Toolbar"},"x_range":{"id":"299eef40-6077-4659-ba73-96987cd9305d","type":"DataRange1d"},"y_range":{"id":"8a1e3765-fdf7-41d4-8b29-d76864236717","type":"DataRange1d"}},"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"8a1e3765-fdf7-41d4-8b29-d76864236717","type":"DataRange1d"},{"attributes":{"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"}},"id":"9f53d53a-c85a-4536-8405-b2c42a290359","type":"ResetTool"},{"attributes":{"data_source":{"id":"d220c3fb-909a-4355-b82c-ffd2c75444cf","type":"ColumnDataSource"},"glyph":{"id":"6003d87d-9b56-45e7-a126-2e4652229d7f","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"dcb7d598-09fa-4685-8412-f145942ac3ce","type":"Line"},"selection_glyph":null},"id":"d6a41d04-d86c-4daa-af45-3db4efcea699","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4b861eb8-48d9-4f9c-b456-e0e1d259c306","type":"BoxAnnotation"},{"attributes":{},"id":"05fa5170-46f5-4e5e-b6cf-00ad9881483d","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa80785d-38a9-4b5f-b85e-cff4bd19fcb7","type":"BasicTicker"}},"id":"b4cb563e-256f-4531-aaf1-2f4922eda5b0","type":"Grid"},{"attributes":{},"id":"56bbbc77-ad82-409a-94cd-79df1dd95ad3","type":"BasicTicker"},{"attributes":{"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"}},"id":"a799f640-0ecc-4090-9fad-53c2285f111c","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6003d87d-9b56-45e7-a126-2e4652229d7f","type":"Line"},{"attributes":{"formatter":{"id":"9de79955-b0bf-4f16-b0ba-c8834961942b","type":"BasicTickFormatter"},"plot":{"id":"a6c67447-f7e8-42c5-93c9-5d047d6a0538","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa80785d-38a9-4b5f-b85e-cff4bd19fcb7","type":"BasicTicker"}},"id":"30defe7e-72fd-4cfc-bfe1-8312a83deba0","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"d220c3fb-909a-4355-b82c-ffd2c75444cf","type":"ColumnDataSource"}],"root_ids":["a6c67447-f7e8-42c5-93c9-5d047d6a0538"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d3a96743-81a2-436d-a687-87cf419afccb","elementid":"343c3b6d-044a-4122-b908-b63ef64c484e","modelid":"a6c67447-f7e8-42c5-93c9-5d047d6a0538"}];
                
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
