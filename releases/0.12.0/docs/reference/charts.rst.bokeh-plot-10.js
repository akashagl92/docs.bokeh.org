document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("dcef1e57-185b-4799-9b17-d4e2fad557b9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dcef1e57-185b-4799-9b17-d4e2fad557b9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"bfd404e8-e7e4-4290-bb2c-5dc16dc189f0":{"roots":{"references":[{"attributes":{},"id":"9b7e4a77-40d8-4f08-8b69-cacca207f501","type":"ToolEvents"},{"attributes":{},"id":"902a92c9-df5e-4254-b96f-af54f4b76fa6","type":"BasicTicker"},{"attributes":{},"id":"6c6827c7-5a02-4194-9215-5f91de3c616e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"e25b935d-d25b-44e3-a7a6-e60855cbea03","type":"ColumnDataSource"},{"attributes":{},"id":"7f69859a-0229-4630-9fea-3f99b5076c31","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"b1fe2b18-132d-43b9-bbe9-89579d320f62","type":"BasicTickFormatter"},"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"},"ticker":{"id":"6c6827c7-5a02-4194-9215-5f91de3c616e","type":"BasicTicker"}},"id":"1a1a7577-b3c3-4fd6-b6d9-76e74becef0d","type":"LinearAxis"},{"attributes":{"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"}},"id":"eeec613b-46c5-470c-9d72-e041f25518c3","type":"HelpTool"},{"attributes":{"legends":[["stamp",[{"id":"c06095ac-5f70-41ae-9930-e7865d4ba196","type":"GlyphRenderer"}]],["postcard",[{"id":"117d9efb-7db3-4e32-a84f-6a9df96fa462","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"}},"id":"95256ee9-61b9-450e-8eb9-5bbaa025ad79","type":"Legend"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dc36c510-4066-437a-8317-f617a2f6dce1","type":"PanTool"},{"id":"8c760325-d357-47f5-b3de-28bfa26322aa","type":"WheelZoomTool"},{"id":"82f5d6b9-a4b9-4839-b3d3-419a9b5234d7","type":"BoxZoomTool"},{"id":"0a743d98-62a2-45d4-bfd0-25898cd28274","type":"SaveTool"},{"id":"41166b10-a744-4a24-bce9-ac5a6255cc47","type":"ResetTool"},{"id":"eeec613b-46c5-470c-9d72-e041f25518c3","type":"HelpTool"}]},"id":"34b509c2-d5c9-4684-a4a8-3efc8811812d","type":"Toolbar"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"2ba6642d-4971-4d60-97e5-fd4e0fcf974e","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"},"ticker":{"id":"6c6827c7-5a02-4194-9215-5f91de3c616e","type":"BasicTicker"}},"id":"f9a24176-67c8-4073-89fa-0f26793e63c0","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"283c603a-c9f1-4d77-9cbe-0fc8dfe5a2af","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4ad3c461-0e4f-4ad7-991c-36f4053d8c9d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"}},"id":"8c760325-d357-47f5-b3de-28bfa26322aa","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3e754131-558f-4100-a2e2-d5d1f6387b99","type":"Line"},{"attributes":{},"id":"b1fe2b18-132d-43b9-bbe9-89579d320f62","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"2abab847-779d-48d7-9f63-457c288364d4","type":"Range1d"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"4a4646f0-5268-42f1-a0a2-92f0da7e0ea8","type":"Range1d"},{"attributes":{"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"}},"id":"0a743d98-62a2-45d4-bfd0-25898cd28274","type":"SaveTool"},{"attributes":{"axis_label":"index","formatter":{"id":"7f69859a-0229-4630-9fea-3f99b5076c31","type":"BasicTickFormatter"},"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"},"ticker":{"id":"902a92c9-df5e-4254-b96f-af54f4b76fa6","type":"BasicTicker"}},"id":"2e53b156-9ae3-45e4-b07d-6b601919c830","type":"LinearAxis"},{"attributes":{"data_source":{"id":"283c603a-c9f1-4d77-9cbe-0fc8dfe5a2af","type":"ColumnDataSource"},"glyph":{"id":"3e754131-558f-4100-a2e2-d5d1f6387b99","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"117d9efb-7db3-4e32-a84f-6a9df96fa462","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"}},"id":"41166b10-a744-4a24-bce9-ac5a6255cc47","type":"ResetTool"},{"attributes":{"below":[{"id":"2e53b156-9ae3-45e4-b07d-6b601919c830","type":"LinearAxis"}],"height":400,"left":[{"id":"1a1a7577-b3c3-4fd6-b6d9-76e74becef0d","type":"LinearAxis"}],"renderers":[{"id":"4ad3c461-0e4f-4ad7-991c-36f4053d8c9d","type":"BoxAnnotation"},{"id":"c06095ac-5f70-41ae-9930-e7865d4ba196","type":"GlyphRenderer"},{"id":"117d9efb-7db3-4e32-a84f-6a9df96fa462","type":"GlyphRenderer"},{"id":"95256ee9-61b9-450e-8eb9-5bbaa025ad79","type":"Legend"},{"id":"2e53b156-9ae3-45e4-b07d-6b601919c830","type":"LinearAxis"},{"id":"1a1a7577-b3c3-4fd6-b6d9-76e74becef0d","type":"LinearAxis"},{"id":"320ca7c4-66b9-46bf-b7a9-48e3ef28bf26","type":"Grid"},{"id":"f9a24176-67c8-4073-89fa-0f26793e63c0","type":"Grid"}],"title":{"id":"2ba6642d-4971-4d60-97e5-fd4e0fcf974e","type":"Title"},"tool_events":{"id":"9b7e4a77-40d8-4f08-8b69-cacca207f501","type":"ToolEvents"},"toolbar":{"id":"34b509c2-d5c9-4684-a4a8-3efc8811812d","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"2abab847-779d-48d7-9f63-457c288364d4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4a4646f0-5268-42f1-a0a2-92f0da7e0ea8","type":"Range1d"}},"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"}},"id":"dc36c510-4066-437a-8317-f617a2f6dce1","type":"PanTool"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"1cab8e06-c714-4bd2-a4b4-a645532e5023","type":"Line"},{"attributes":{"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"},"ticker":{"id":"902a92c9-df5e-4254-b96f-af54f4b76fa6","type":"BasicTicker"}},"id":"320ca7c4-66b9-46bf-b7a9-48e3ef28bf26","type":"Grid"},{"attributes":{"overlay":{"id":"4ad3c461-0e4f-4ad7-991c-36f4053d8c9d","type":"BoxAnnotation"},"plot":{"id":"51f52a16-8f53-464b-91d4-7b93516d2267","subtype":"Chart","type":"Plot"}},"id":"82f5d6b9-a4b9-4839-b3d3-419a9b5234d7","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"e25b935d-d25b-44e3-a7a6-e60855cbea03","type":"ColumnDataSource"},"glyph":{"id":"1cab8e06-c714-4bd2-a4b4-a645532e5023","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c06095ac-5f70-41ae-9930-e7865d4ba196","type":"GlyphRenderer"}],"root_ids":["51f52a16-8f53-464b-91d4-7b93516d2267"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"bfd404e8-e7e4-4290-bb2c-5dc16dc189f0","elementid":"dcef1e57-185b-4799-9b17-d4e2fad557b9","modelid":"51f52a16-8f53-464b-91d4-7b93516d2267"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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