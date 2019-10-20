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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("47fa5051-462d-4f74-abab-7504fd3f550d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47fa5051-462d-4f74-abab-7504fd3f550d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"73efd2c4-e31a-489d-a6b8-cb9426c56071":{"roots":{"references":[{"attributes":{"overlay":{"id":"8aca3b1e-6091-4d2b-87f9-d15a9f42d14d","type":"BoxAnnotation"},"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"}},"id":"b0bbc3f1-a352-4db0-a053-13d698087529","type":"BoxZoomTool"},{"attributes":{},"id":"d3bf046b-1218-47b9-a4d1-1dbb5baace5e","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"fda1c047-2325-463e-a7c1-e6745ad8b018","type":"LinearAxis"}],"left":[{"id":"4b096b4e-e4aa-4de0-9d59-d7b88ae6c077","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"fda1c047-2325-463e-a7c1-e6745ad8b018","type":"LinearAxis"},{"id":"82639b64-6429-480d-990a-77c127882724","type":"Grid"},{"id":"4b096b4e-e4aa-4de0-9d59-d7b88ae6c077","type":"LinearAxis"},{"id":"457fe040-f775-44bf-9e5f-da056e507365","type":"Grid"},{"id":"8aca3b1e-6091-4d2b-87f9-d15a9f42d14d","type":"BoxAnnotation"},{"id":"00d0f4c2-314a-4b54-ba4a-d2ef82b336a3","type":"GlyphRenderer"}],"title":{"id":"9fe5a798-c504-45a2-9ac0-50fca14f6aef","type":"Title"},"tool_events":{"id":"8251bbaf-7f88-4807-b6cb-ae98267c7fe3","type":"ToolEvents"},"toolbar":{"id":"c58d5417-cd49-46c5-a93f-1d9f46e20c10","type":"Toolbar"},"x_range":{"id":"77e9466c-ff4d-4093-96ac-7b5ecaf631be","type":"DataRange1d"},"x_scale":{"id":"105c8af7-44df-4431-b5b8-41a568a469b3","type":"LinearScale"},"y_range":{"id":"815c386e-97ed-454c-91c3-6c1db7c2b827","type":"DataRange1d"},"y_scale":{"id":"a5451d43-b1bb-4319-8bf8-0281c25322d4","type":"LinearScale"}},"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ec82f4b8-ee57-4322-be80-7919c2633f24","type":"PanTool"},{"id":"6933d4bd-acdf-491a-977c-447900bd32b6","type":"WheelZoomTool"},{"id":"b0bbc3f1-a352-4db0-a053-13d698087529","type":"BoxZoomTool"},{"id":"c74b0cc0-6785-41e0-9ac4-56fc4c72d815","type":"SaveTool"},{"id":"dbb030e9-90fd-43a8-b854-1c74b00ef364","type":"ResetTool"},{"id":"99ae9365-3eb8-4559-beca-316159ad54ed","type":"HelpTool"}]},"id":"c58d5417-cd49-46c5-a93f-1d9f46e20c10","type":"Toolbar"},{"attributes":{"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"}},"id":"ec82f4b8-ee57-4322-be80-7919c2633f24","type":"PanTool"},{"attributes":{},"id":"1e8f24c2-acf4-4307-8fe4-63d0bf2bcb6b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"}},"id":"6933d4bd-acdf-491a-977c-447900bd32b6","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"}},"id":"dbb030e9-90fd-43a8-b854-1c74b00ef364","type":"ResetTool"},{"attributes":{"formatter":{"id":"1e8f24c2-acf4-4307-8fe4-63d0bf2bcb6b","type":"BasicTickFormatter"},"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3bf046b-1218-47b9-a4d1-1dbb5baace5e","type":"BasicTicker"}},"id":"4b096b4e-e4aa-4de0-9d59-d7b88ae6c077","type":"LinearAxis"},{"attributes":{},"id":"40dea9c4-6a27-4559-80ea-f5607caade91","type":"BasicTicker"},{"attributes":{"callback":null},"id":"815c386e-97ed-454c-91c3-6c1db7c2b827","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"439aa3a1-d992-44a1-993d-29ab66204fe1","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8aca3b1e-6091-4d2b-87f9-d15a9f42d14d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"}},"id":"c74b0cc0-6785-41e0-9ac4-56fc4c72d815","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"be05b607-5636-4d2d-b6c9-e99948c9dac4","type":"Circle"},{"attributes":{"callback":null},"id":"77e9466c-ff4d-4093-96ac-7b5ecaf631be","type":"DataRange1d"},{"attributes":{"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"},"ticker":{"id":"40dea9c4-6a27-4559-80ea-f5607caade91","type":"BasicTicker"}},"id":"82639b64-6429-480d-990a-77c127882724","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3bf046b-1218-47b9-a4d1-1dbb5baace5e","type":"BasicTicker"}},"id":"457fe040-f775-44bf-9e5f-da056e507365","type":"Grid"},{"attributes":{"formatter":{"id":"73763a79-c2b1-4fd9-b32b-d5a8af4878f0","type":"BasicTickFormatter"},"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"},"ticker":{"id":"40dea9c4-6a27-4559-80ea-f5607caade91","type":"BasicTicker"}},"id":"fda1c047-2325-463e-a7c1-e6745ad8b018","type":"LinearAxis"},{"attributes":{"plot":{"id":"e4652498-4e62-416f-ad18-3d6fea2f2226","subtype":"Figure","type":"Plot"}},"id":"99ae9365-3eb8-4559-beca-316159ad54ed","type":"HelpTool"},{"attributes":{},"id":"8251bbaf-7f88-4807-b6cb-ae98267c7fe3","type":"ToolEvents"},{"attributes":{},"id":"105c8af7-44df-4431-b5b8-41a568a469b3","type":"LinearScale"},{"attributes":{},"id":"73763a79-c2b1-4fd9-b32b-d5a8af4878f0","type":"BasicTickFormatter"},{"attributes":{},"id":"a5451d43-b1bb-4319-8bf8-0281c25322d4","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"16760960-78c2-4613-bb89-1b2052a9e280","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"9fe5a798-c504-45a2-9ac0-50fca14f6aef","type":"Title"},{"attributes":{"data_source":{"id":"16760960-78c2-4613-bb89-1b2052a9e280","type":"ColumnDataSource"},"glyph":{"id":"be05b607-5636-4d2d-b6c9-e99948c9dac4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"439aa3a1-d992-44a1-993d-29ab66204fe1","type":"Circle"},"selection_glyph":null},"id":"00d0f4c2-314a-4b54-ba4a-d2ef82b336a3","type":"GlyphRenderer"}],"root_ids":["e4652498-4e62-416f-ad18-3d6fea2f2226"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"73efd2c4-e31a-489d-a6b8-cb9426c56071","elementid":"47fa5051-462d-4f74-abab-7504fd3f550d","modelid":"e4652498-4e62-416f-ad18-3d6fea2f2226"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
