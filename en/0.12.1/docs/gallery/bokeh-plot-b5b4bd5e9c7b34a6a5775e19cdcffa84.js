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
      };var element = document.getElementById("d752338a-0244-4054-a09b-170c80c4d644");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd752338a-0244-4054-a09b-170c80c4d644' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"9bbc6f3a-78f5-423a-9a78-4d7abf7a6a06":{"roots":{"references":[{"attributes":{},"id":"331d9485-058e-422c-8295-fefa45dbadce","type":"BasicTicker"},{"attributes":{"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"}},"id":"11047923-580a-4722-bb2a-f5b34cd94924","type":"PanTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"},"ticker":{"id":"29af4387-00fc-4e3f-adca-e1203e9cb06c","type":"BasicTicker"}},"id":"8d47e043-8e2b-49db-abf3-f8c1666758ae","type":"Grid"},{"attributes":{},"id":"be06b5a0-816e-4d04-a449-a16b53727554","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"}},"id":"642f5249-e6d5-4f83-836b-9ed8db03e150","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"f15020ba-a030-4890-91fe-8418ed807345","type":"DataRange1d"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"16c12925-46f1-4e86-b82c-74886fa15c07","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"},"ticker":{"id":"29af4387-00fc-4e3f-adca-e1203e9cb06c","type":"BasicTicker"}},"id":"5c366ab1-fe77-4da9-86f1-750bfe62fdb0","type":"LinearAxis"},{"attributes":{"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"}},"id":"375aaf85-007e-47a3-9544-7c38f7d57844","type":"SaveTool"},{"attributes":{"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"}},"id":"410b37a0-30a8-4a72-8432-720b2cde41cf","type":"Legend"},{"attributes":{},"id":"29af4387-00fc-4e3f-adca-e1203e9cb06c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"03163b1e-8c5a-488b-8bca-07d11b157ea0","type":"DataRange1d"},{"attributes":{},"id":"010b5c3a-4d11-413b-8cfc-ce6cff665eeb","type":"ToolEvents"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"be06b5a0-816e-4d04-a449-a16b53727554","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"},"ticker":{"id":"331d9485-058e-422c-8295-fefa45dbadce","type":"BasicTicker"}},"id":"9248ea01-3ab8-443c-a646-88db833d0fc8","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"de878859-de02-458f-be6d-e38e118ed3d1","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"11047923-580a-4722-bb2a-f5b34cd94924","type":"PanTool"},{"id":"642f5249-e6d5-4f83-836b-9ed8db03e150","type":"WheelZoomTool"},{"id":"635446a3-fd3c-4719-87e4-2269a0d94bac","type":"BoxZoomTool"},{"id":"375aaf85-007e-47a3-9544-7c38f7d57844","type":"SaveTool"},{"id":"24852974-e0b2-4be1-bcca-c183bfa6fe55","type":"ResetTool"},{"id":"fd4ff9d3-7cbc-461b-b498-23f733753eac","type":"HelpTool"}]},"id":"c458ac49-7aae-40c6-97b5-b232022c8322","type":"Toolbar"},{"attributes":{"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"}},"id":"fd4ff9d3-7cbc-461b-b498-23f733753eac","type":"HelpTool"},{"attributes":{"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"}},"id":"24852974-e0b2-4be1-bcca-c183bfa6fe55","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[0.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0,9.0,9.0,10.0,10.0,11.0,11.0,12.0,12.0,13.0,13.0,14.0,14.0,15.0,15.0,16.0,16.0,17.0,17.0,18.0,18.0,19.0,19.0,20.0,20.0,21.0,21.0,22.0,22.0,23.0,23.0,24.0,24.0,25.0,25.0,26.0,26.0,27.0,27.0,28.0,28.0,29.0,29.0,30.0,30.0,31.0,31.0,32.0,32.0,33.0,33.0,34.0,34.0,35.0,35.0,36.0,36.0,37.0,37.0,38.0,38.0,39.0,39.0,40.0,40.0,41.0,41.0,42.0,42.0,43.0,43.0,44.0,44.0,45.0,45.0,46.0,46.0,47.0,47.0,48.0,48.0,49.0,49.0,50.0,50.0,51.0,51.0,52.0,52.0,53.0,53.0,54.0,54.0,55.0,55.0,56.0,56.0,57.0,57.0,58.0,58.0,59.0,59.0,60.0,60.0,61.0,61.0,62.0,62.0,63.0,63.0,64.0,64.0,65.0,65.0,66.0,66.0,67.0,67.0,68.0,68.0,69.0,69.0,70.0,70.0,71.0,71.0,72.0,72.0,73.0,73.0,74.0,74.0,75.0,75.0,76.0,76.0,77.0,77.0,78.0,78.0,79.0,79.0,80.0,80.0,81.0,81.0,82.0,82.0,83.0,83.0,84.0,84.0,85.0,85.0,86.0,86.0,87.0,87.0,88.0,88.0,89.0,89.0,90.0,90.0,91.0,91.0,92.0,92.0,93.0,93.0,94.0,94.0,95.0,95.0,96.0,96.0,97.0,97.0,98.0,98.0,99.0],"Series 1":[1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,3.0,3.0,2.0,2.0,3.0,3.0,4.0,4.0,3.0,3.0,2.0,2.0,1.0,1.0,0.0,0.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,5.0,5.0,4.0,4.0,3.0,3.0,2.0,2.0,1.0,1.0,2.0,2.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,5.0,5.0,6.0,6.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0,7.0,7.0,6.0,6.0,7.0,7.0,8.0,8.0,7.0,7.0,8.0,8.0,7.0,7.0,8.0,8.0,7.0,7.0,6.0,6.0,5.0,5.0,6.0,6.0,7.0,7.0,6.0,6.0,7.0,7.0,6.0,6.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0,7.0,7.0,6.0,6.0,7.0,7.0,8.0,8.0,7.0,7.0,8.0,8.0,7.0,7.0,8.0,8.0,9.0,9.0,10.0,10.0,11.0,11.0,10.0,10.0,9.0,9.0,10.0,10.0,11.0,11.0,10.0,10.0,9.0,9.0,8.0,8.0,7.0,7.0,6.0,6.0,5.0,5.0,4.0,4.0,5.0,5.0,4.0,4.0,5.0,5.0,6.0,6.0,5.0,5.0,4.0,4.0,5.0,5.0,4.0,4.0,5.0,5.0,4.0,4.0,5.0,5.0,4.0,4.0,3.0,3.0,2.0,2.0,1.0,1.0,2.0,2.0,1.0,1.0,0.0,0.0,1.0,1.0,2.0,2.0,1.0,1.0,2.0,2.0,1.0,1.0,0.0,0.0,-1.0,-1.0]}},"id":"6199f32b-73c4-4e55-a5e6-5792c49c8f39","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"},"ticker":{"id":"331d9485-058e-422c-8295-fefa45dbadce","type":"BasicTicker"}},"id":"bcb6ce23-7217-44db-8aae-b7e4033dbdca","type":"Grid"},{"attributes":{"overlay":{"id":"de878859-de02-458f-be6d-e38e118ed3d1","type":"BoxAnnotation"},"plot":{"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"}},"id":"635446a3-fd3c-4719-87e4-2269a0d94bac","type":"BoxZoomTool"},{"attributes":{"background_fill_color":{"value":"#E5E5E5"},"below":[{"id":"9248ea01-3ab8-443c-a646-88db833d0fc8","type":"LinearAxis"}],"left":[{"id":"5c366ab1-fe77-4da9-86f1-750bfe62fdb0","type":"LinearAxis"}],"plot_height":640,"plot_width":880,"renderers":[{"id":"9248ea01-3ab8-443c-a646-88db833d0fc8","type":"LinearAxis"},{"id":"bcb6ce23-7217-44db-8aae-b7e4033dbdca","type":"Grid"},{"id":"5c366ab1-fe77-4da9-86f1-750bfe62fdb0","type":"LinearAxis"},{"id":"8d47e043-8e2b-49db-abf3-f8c1666758ae","type":"Grid"},{"id":"410b37a0-30a8-4a72-8432-720b2cde41cf","type":"Legend"},{"id":"de878859-de02-458f-be6d-e38e118ed3d1","type":"BoxAnnotation"},{"id":"8fb611ac-439b-4f97-984b-f29b643b0ff6","type":"GlyphRenderer"}],"title":{"id":"b70a2ca6-ca77-4914-baae-371f207b5ece","type":"Title"},"tool_events":{"id":"010b5c3a-4d11-413b-8cfc-ce6cff665eeb","type":"ToolEvents"},"toolbar":{"id":"c458ac49-7aae-40c6-97b5-b232022c8322","type":"Toolbar"},"x_range":{"id":"f15020ba-a030-4890-91fe-8418ed807345","type":"DataRange1d"},"y_range":{"id":"03163b1e-8c5a-488b-8bca-07d11b157ea0","type":"DataRange1d"}},"id":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205","type":"Plot"},{"attributes":{"line_color":{"value":"#000000"},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"ffbef1ab-39b0-437b-962f-c908f92eac15","type":"Line"},{"attributes":{"data_source":{"id":"6199f32b-73c4-4e55-a5e6-5792c49c8f39","type":"ColumnDataSource"},"glyph":{"id":"ffbef1ab-39b0-437b-962f-c908f92eac15","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8fb611ac-439b-4f97-984b-f29b643b0ff6","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Step ggplot-based plot in Bokeh."},"id":"b70a2ca6-ca77-4914-baae-371f207b5ece","type":"Title"},{"attributes":{},"id":"16c12925-46f1-4e86-b82c-74886fa15c07","type":"BasicTickFormatter"}],"root_ids":["73239bb2-2943-4c4c-b96b-e7b8a7cbd205"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"9bbc6f3a-78f5-423a-9a78-4d7abf7a6a06","elementid":"d752338a-0244-4054-a09b-170c80c4d644","modelid":"73239bb2-2943-4c4c-b96b-e7b8a7cbd205"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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