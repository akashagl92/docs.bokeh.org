document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("8de829f6-ee7f-4176-9515-b1cd69c5aa41");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8de829f6-ee7f-4176-9515-b1cd69c5aa41' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"88324a35-455f-4ba9-97f4-e3c8f3e399dd":{"roots":{"references":[{"attributes":{"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"}},"id":"d03eadc7-6cf6-45af-af8c-aefb86d2f657","type":"SaveTool"},{"attributes":{"plot":null,"text":"Step ggplot-based plot in Bokeh."},"id":"99cd4c06-4b7c-4ff3-9a14-5358125389dd","type":"Title"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"},"ticker":{"id":"de8444d8-ccb3-4cb5-b8c5-a0bfcac1220d","type":"BasicTicker"}},"id":"2f96c3f4-42f9-40a7-a36f-1667d4d6ff5e","type":"Grid"},{"attributes":{"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"},"ticker":{"id":"311dd02a-c85b-44ff-ba8b-e8cdeed30b49","type":"BasicTicker"}},"id":"63d4cd87-8359-4cb4-8487-9fc51d1e9ca2","type":"Grid"},{"attributes":{},"id":"de8444d8-ccb3-4cb5-b8c5-a0bfcac1220d","type":"BasicTicker"},{"attributes":{},"id":"311dd02a-c85b-44ff-ba8b-e8cdeed30b49","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[0.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0,9.0,9.0,10.0,10.0,11.0,11.0,12.0,12.0,13.0,13.0,14.0,14.0,15.0,15.0,16.0,16.0,17.0,17.0,18.0,18.0,19.0,19.0,20.0,20.0,21.0,21.0,22.0,22.0,23.0,23.0,24.0,24.0,25.0,25.0,26.0,26.0,27.0,27.0,28.0,28.0,29.0,29.0,30.0,30.0,31.0,31.0,32.0,32.0,33.0,33.0,34.0,34.0,35.0,35.0,36.0,36.0,37.0,37.0,38.0,38.0,39.0,39.0,40.0,40.0,41.0,41.0,42.0,42.0,43.0,43.0,44.0,44.0,45.0,45.0,46.0,46.0,47.0,47.0,48.0,48.0,49.0,49.0,50.0,50.0,51.0,51.0,52.0,52.0,53.0,53.0,54.0,54.0,55.0,55.0,56.0,56.0,57.0,57.0,58.0,58.0,59.0,59.0,60.0,60.0,61.0,61.0,62.0,62.0,63.0,63.0,64.0,64.0,65.0,65.0,66.0,66.0,67.0,67.0,68.0,68.0,69.0,69.0,70.0,70.0,71.0,71.0,72.0,72.0,73.0,73.0,74.0,74.0,75.0,75.0,76.0,76.0,77.0,77.0,78.0,78.0,79.0,79.0,80.0,80.0,81.0,81.0,82.0,82.0,83.0,83.0,84.0,84.0,85.0,85.0,86.0,86.0,87.0,87.0,88.0,88.0,89.0,89.0,90.0,90.0,91.0,91.0,92.0,92.0,93.0,93.0,94.0,94.0,95.0,95.0,96.0,96.0,97.0,97.0,98.0,98.0,99.0],"Series 1":[1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-5.0,-5.0,-6.0,-6.0,-5.0,-5.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,1.0,1.0,2.0,2.0,1.0,1.0,2.0,2.0,1.0,1.0,2.0,2.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-7.0,-7.0,-8.0,-8.0,-7.0,-7.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-5.0,-5.0,-4.0,-4.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-7.0,-7.0,-8.0,-8.0,-9.0,-9.0,-10.0,-10.0,-11.0,-11.0]}},"id":"60e5419e-e0af-4aa6-9285-b3476b2b8655","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e4b52aeb-25b6-4de3-8783-250dfdcf2e4e","type":"PanTool"},{"id":"74cd8d0f-a049-4dd4-8b5d-e5cd29a0bca8","type":"WheelZoomTool"},{"id":"104d0035-e5bf-4172-b5aa-dff7f7620058","type":"BoxZoomTool"},{"id":"d03eadc7-6cf6-45af-af8c-aefb86d2f657","type":"SaveTool"},{"id":"d1715ed4-62c1-494c-9f09-0c007bf2a323","type":"ResetTool"},{"id":"cab04afd-6e30-4ce6-baef-816165879aaa","type":"HelpTool"}]},"id":"a585cc58-a956-44cc-87d9-9f1587bdffac","type":"Toolbar"},{"attributes":{"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"}},"id":"d1715ed4-62c1-494c-9f09-0c007bf2a323","type":"ResetTool"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"93b79583-0cbd-4bb4-ac35-cdf621d552ec","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"},"ticker":{"id":"311dd02a-c85b-44ff-ba8b-e8cdeed30b49","type":"BasicTicker"}},"id":"221f5246-b8ce-4fec-8405-9133707e413b","type":"LinearAxis"},{"attributes":{"overlay":{"id":"e65b9961-1b34-4c65-a8cc-51572c3d95db","type":"BoxAnnotation"},"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"}},"id":"104d0035-e5bf-4172-b5aa-dff7f7620058","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"8612be31-87b6-480c-a24a-f6f95516250b","type":"DataRange1d"},{"attributes":{},"id":"566fdd1e-6e3e-4ca4-8efa-9c7553f49241","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#E5E5E5"},"below":[{"id":"221f5246-b8ce-4fec-8405-9133707e413b","type":"LinearAxis"}],"left":[{"id":"a78af9a3-a67c-472c-9ed1-abd18c7ab8a6","type":"LinearAxis"}],"plot_height":640,"plot_width":880,"renderers":[{"id":"221f5246-b8ce-4fec-8405-9133707e413b","type":"LinearAxis"},{"id":"63d4cd87-8359-4cb4-8487-9fc51d1e9ca2","type":"Grid"},{"id":"a78af9a3-a67c-472c-9ed1-abd18c7ab8a6","type":"LinearAxis"},{"id":"2f96c3f4-42f9-40a7-a36f-1667d4d6ff5e","type":"Grid"},{"id":"2a747b51-588d-48f7-914a-2763e3beeb9a","type":"Legend"},{"id":"e65b9961-1b34-4c65-a8cc-51572c3d95db","type":"BoxAnnotation"},{"id":"5760d44c-c87c-41c6-9f42-5adc6e3233b5","type":"GlyphRenderer"}],"title":{"id":"99cd4c06-4b7c-4ff3-9a14-5358125389dd","type":"Title"},"tool_events":{"id":"22a9cae1-a26c-4b59-9c9e-7647f17b03d0","type":"ToolEvents"},"toolbar":{"id":"a585cc58-a956-44cc-87d9-9f1587bdffac","type":"Toolbar"},"x_range":{"id":"8612be31-87b6-480c-a24a-f6f95516250b","type":"DataRange1d"},"y_range":{"id":"0c5dceee-d32f-4ff0-9161-eb4ac21677e3","type":"DataRange1d"}},"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"},{"attributes":{"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"}},"id":"2a747b51-588d-48f7-914a-2763e3beeb9a","type":"Legend"},{"attributes":{"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"}},"id":"e4b52aeb-25b6-4de3-8783-250dfdcf2e4e","type":"PanTool"},{"attributes":{"callback":null},"id":"0c5dceee-d32f-4ff0-9161-eb4ac21677e3","type":"DataRange1d"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"566fdd1e-6e3e-4ca4-8efa-9c7553f49241","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"},"ticker":{"id":"de8444d8-ccb3-4cb5-b8c5-a0bfcac1220d","type":"BasicTicker"}},"id":"a78af9a3-a67c-472c-9ed1-abd18c7ab8a6","type":"LinearAxis"},{"attributes":{"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"}},"id":"cab04afd-6e30-4ce6-baef-816165879aaa","type":"HelpTool"},{"attributes":{"line_color":{"value":"#000000"},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"cd2fa71b-d3eb-4d9f-8db1-3956e1e0a41b","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e65b9961-1b34-4c65-a8cc-51572c3d95db","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f94673be-0acc-4454-90b4-fcb9bb63e7f8","type":"Plot"}},"id":"74cd8d0f-a049-4dd4-8b5d-e5cd29a0bca8","type":"WheelZoomTool"},{"attributes":{},"id":"93b79583-0cbd-4bb4-ac35-cdf621d552ec","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"60e5419e-e0af-4aa6-9285-b3476b2b8655","type":"ColumnDataSource"},"glyph":{"id":"cd2fa71b-d3eb-4d9f-8db1-3956e1e0a41b","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5760d44c-c87c-41c6-9f42-5adc6e3233b5","type":"GlyphRenderer"},{"attributes":{},"id":"22a9cae1-a26c-4b59-9c9e-7647f17b03d0","type":"ToolEvents"}],"root_ids":["f94673be-0acc-4454-90b4-fcb9bb63e7f8"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"88324a35-455f-4ba9-97f4-e3c8f3e399dd","elementid":"8de829f6-ee7f-4176-9515-b1cd69c5aa41","modelid":"f94673be-0acc-4454-90b4-fcb9bb63e7f8"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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