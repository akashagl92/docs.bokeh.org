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
      };var element = document.getElementById("2bd488a5-21f3-4bed-8116-7bf7909eaaaa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2bd488a5-21f3-4bed-8116-7bf7909eaaaa' but no matching script tag was found. ")
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
                var docs_json = {"59fef602-a98d-4435-9419-6e14248efac9":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6ee9b0e-b5ba-4ce9-aefb-3191a54d43b4","type":"Circle"},{"attributes":{"below":[{"id":"093193d4-92d2-4748-8376-cc68cde09443","type":"LinearAxis"}],"left":[{"id":"345dc5ee-4672-42ee-9b22-1d2fa6dceb62","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"093193d4-92d2-4748-8376-cc68cde09443","type":"LinearAxis"},{"id":"db6a6cfd-f108-4f8a-96ae-a316c8ebc8d9","type":"Grid"},{"id":"345dc5ee-4672-42ee-9b22-1d2fa6dceb62","type":"LinearAxis"},{"id":"c00283fd-84a4-4e73-87b4-fbc1c91e9ccf","type":"Grid"},{"id":"33945e13-c1b6-42d7-a094-d26c61cfcbd7","type":"BoxAnnotation"},{"id":"e1b70993-52d7-4ffc-8e55-ef5ee081cf70","type":"GlyphRenderer"}],"title":{"id":"88d17b43-d927-45cf-adba-39a452c6765e","type":"Title"},"tool_events":{"id":"928957b6-1e84-4323-8b33-f491dcaf0632","type":"ToolEvents"},"toolbar":{"id":"656ecae8-493c-41be-8fe7-0e0102abc2d6","type":"Toolbar"},"x_range":{"id":"1438012f-a8b6-4e8e-b438-23d30ff5425e","type":"DataRange1d"},"y_range":{"id":"0649ddb1-4a16-4d08-8180-e0bc934b1001","type":"DataRange1d"}},"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"33945e13-c1b6-42d7-a094-d26c61cfcbd7","type":"BoxAnnotation"},"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"}},"id":"675de7b2-679b-4512-be7e-1610efa3ec15","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"931d8c62-0a1c-4e62-b4da-2f6615c41542","type":"ColumnDataSource"},"glyph":{"id":"d6ee9b0e-b5ba-4ce9-aefb-3191a54d43b4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"41bf550d-f37e-47ed-b36e-afa49e49ebe5","type":"Circle"},"selection_glyph":null},"id":"e1b70993-52d7-4ffc-8e55-ef5ee081cf70","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"}},"id":"b76e4681-c971-4cdd-8c92-e51102bb9d00","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e12d7994-e7a5-41a8-b786-89eb97b6e6f6","type":"PanTool"},{"id":"b76e4681-c971-4cdd-8c92-e51102bb9d00","type":"WheelZoomTool"},{"id":"675de7b2-679b-4512-be7e-1610efa3ec15","type":"BoxZoomTool"},{"id":"3f0cc11d-653d-40ee-961d-943e22dc8d66","type":"SaveTool"},{"id":"86cb1b02-2834-46eb-93d5-5a5e39b80755","type":"ResetTool"},{"id":"dc048541-4ed9-41e5-bbb7-22057eab9ef6","type":"HelpTool"}]},"id":"656ecae8-493c-41be-8fe7-0e0102abc2d6","type":"Toolbar"},{"attributes":{},"id":"928957b6-1e84-4323-8b33-f491dcaf0632","type":"ToolEvents"},{"attributes":{"formatter":{"id":"89b1a55d-b368-4224-b8a5-423de03737e5","type":"BasicTickFormatter"},"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d12f5b15-ffc8-448e-bf71-e2475a1f65aa","type":"BasicTicker"}},"id":"093193d4-92d2-4748-8376-cc68cde09443","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"88d17b43-d927-45cf-adba-39a452c6765e","type":"Title"},{"attributes":{"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"}},"id":"e12d7994-e7a5-41a8-b786-89eb97b6e6f6","type":"PanTool"},{"attributes":{"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"}},"id":"3f0cc11d-653d-40ee-961d-943e22dc8d66","type":"SaveTool"},{"attributes":{},"id":"0fe8ac65-439d-49c6-b5f9-8ac246e1b1e9","type":"BasicTicker"},{"attributes":{"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"}},"id":"dc048541-4ed9-41e5-bbb7-22057eab9ef6","type":"HelpTool"},{"attributes":{"formatter":{"id":"f56edfa0-dc60-497f-94ef-f40baea7bc5f","type":"BasicTickFormatter"},"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fe8ac65-439d-49c6-b5f9-8ac246e1b1e9","type":"BasicTicker"}},"id":"345dc5ee-4672-42ee-9b22-1d2fa6dceb62","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33945e13-c1b6-42d7-a094-d26c61cfcbd7","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fe8ac65-439d-49c6-b5f9-8ac246e1b1e9","type":"BasicTicker"}},"id":"c00283fd-84a4-4e73-87b4-fbc1c91e9ccf","type":"Grid"},{"attributes":{"callback":null},"id":"0649ddb1-4a16-4d08-8180-e0bc934b1001","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"41bf550d-f37e-47ed-b36e-afa49e49ebe5","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"931d8c62-0a1c-4e62-b4da-2f6615c41542","type":"ColumnDataSource"},{"attributes":{},"id":"89b1a55d-b368-4224-b8a5-423de03737e5","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"}},"id":"86cb1b02-2834-46eb-93d5-5a5e39b80755","type":"ResetTool"},{"attributes":{},"id":"f56edfa0-dc60-497f-94ef-f40baea7bc5f","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1438012f-a8b6-4e8e-b438-23d30ff5425e","type":"DataRange1d"},{"attributes":{},"id":"d12f5b15-ffc8-448e-bf71-e2475a1f65aa","type":"BasicTicker"},{"attributes":{"plot":{"id":"26c2a912-ed14-4aee-8e34-d2b96322e30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d12f5b15-ffc8-448e-bf71-e2475a1f65aa","type":"BasicTicker"}},"id":"db6a6cfd-f108-4f8a-96ae-a316c8ebc8d9","type":"Grid"}],"root_ids":["26c2a912-ed14-4aee-8e34-d2b96322e30f"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"59fef602-a98d-4435-9419-6e14248efac9","elementid":"2bd488a5-21f3-4bed-8116-7bf7909eaaaa","modelid":"26c2a912-ed14-4aee-8e34-d2b96322e30f"}];
                
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
