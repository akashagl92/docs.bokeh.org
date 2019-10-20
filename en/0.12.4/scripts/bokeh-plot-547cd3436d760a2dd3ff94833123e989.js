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
      };var element = document.getElementById("c2bdc341-33bc-42a0-98ef-2783f21776cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c2bdc341-33bc-42a0-98ef-2783f21776cf' but no matching script tag was found. ")
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
                var docs_json = {"a0618062-2402-4b36-8b28-19e7761672cf":{"roots":{"references":[{"attributes":{"overlay":{"id":"d6301541-3d97-40fc-90a6-0585200b9aca","type":"BoxAnnotation"},"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"}},"id":"fb134ecb-4711-438a-a108-1ef9c59f305d","type":"BoxZoomTool"},{"attributes":{},"id":"1371dd95-cce1-48db-91b8-a621e85b5239","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"}},"id":"0d67e756-714d-4f0a-94d2-781519a06e1d","type":"Legend"},{"attributes":{"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"}},"id":"492ace11-9a98-4d81-8b51-8d3517e28cb1","type":"HelpTool"},{"attributes":{"plot":null,"text":"Step ggplot-based plot in Bokeh."},"id":"65e7dcb0-9988-48ec-94cf-9ad1061a3841","type":"Title"},{"attributes":{"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"}},"id":"ef3a38c0-d146-49e3-a7d8-ff093c32b8b7","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0a5a0581-af6e-4c64-8526-3f6cfacbc5cd","type":"PanTool"},{"id":"c5502eff-048f-4a99-a51f-1596ee3d64c6","type":"WheelZoomTool"},{"id":"fb134ecb-4711-438a-a108-1ef9c59f305d","type":"BoxZoomTool"},{"id":"8b923878-d6b0-4434-982f-3345b839c471","type":"SaveTool"},{"id":"ef3a38c0-d146-49e3-a7d8-ff093c32b8b7","type":"ResetTool"},{"id":"492ace11-9a98-4d81-8b51-8d3517e28cb1","type":"HelpTool"}]},"id":"9a9921cb-e659-403f-915b-39664cbb7b09","type":"Toolbar"},{"attributes":{"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"}},"id":"c5502eff-048f-4a99-a51f-1596ee3d64c6","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"5641fd0a-a510-4aef-93e0-dea39bcc0a43","type":"ColumnDataSource"},"glyph":{"id":"dce571c2-6d11-41e6-99e6-2ad26f0e8c9a","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5aceaefc-3633-4aa6-bd7d-7dff7bea28f4","type":"GlyphRenderer"},{"attributes":{},"id":"70cbc9cd-3d2d-4deb-9d23-abbea4f4b7dc","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#000000"},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"dce571c2-6d11-41e6-99e6-2ad26f0e8c9a","type":"Line"},{"attributes":{"callback":null},"id":"051d0ca3-7c02-4ef9-a9fd-f7f02e1b2086","type":"DataRange1d"},{"attributes":{"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"},"ticker":{"id":"70cbc9cd-3d2d-4deb-9d23-abbea4f4b7dc","type":"BasicTicker"}},"id":"1085b9af-ad0d-4dd3-8841-d522ddbb3430","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d6301541-3d97-40fc-90a6-0585200b9aca","type":"BoxAnnotation"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"1371dd95-cce1-48db-91b8-a621e85b5239","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"10.000000pt"},"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"},"ticker":{"id":"11fb549d-7487-43b0-92f3-ac7c564802ae","type":"BasicTicker"}},"id":"76b69027-bab0-4b1a-a3c7-73a39d7ecb32","type":"LinearAxis"},{"attributes":{"background_fill_color":{"value":"#E5E5E5"},"below":[{"id":"abba5659-da92-4813-84ab-e457e80902b8","type":"LinearAxis"}],"left":[{"id":"76b69027-bab0-4b1a-a3c7-73a39d7ecb32","type":"LinearAxis"}],"plot_height":640,"plot_width":880,"renderers":[{"id":"abba5659-da92-4813-84ab-e457e80902b8","type":"LinearAxis"},{"id":"1085b9af-ad0d-4dd3-8841-d522ddbb3430","type":"Grid"},{"id":"76b69027-bab0-4b1a-a3c7-73a39d7ecb32","type":"LinearAxis"},{"id":"a7fc0456-8ecf-4678-b39a-65a49e8d9e9d","type":"Grid"},{"id":"0d67e756-714d-4f0a-94d2-781519a06e1d","type":"Legend"},{"id":"d6301541-3d97-40fc-90a6-0585200b9aca","type":"BoxAnnotation"},{"id":"5aceaefc-3633-4aa6-bd7d-7dff7bea28f4","type":"GlyphRenderer"}],"title":{"id":"65e7dcb0-9988-48ec-94cf-9ad1061a3841","type":"Title"},"tool_events":{"id":"5ff9f535-507f-46e6-8314-50a7b81b1005","type":"ToolEvents"},"toolbar":{"id":"9a9921cb-e659-403f-915b-39664cbb7b09","type":"Toolbar"},"x_range":{"id":"051d0ca3-7c02-4ef9-a9fd-f7f02e1b2086","type":"DataRange1d"},"y_range":{"id":"5f1d5a7f-130d-4acf-9fee-8bef19cbe6c6","type":"DataRange1d"}},"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"},{"attributes":{"callback":null},"id":"5f1d5a7f-130d-4acf-9fee-8bef19cbe6c6","type":"DataRange1d"},{"attributes":{},"id":"11fb549d-7487-43b0-92f3-ac7c564802ae","type":"BasicTicker"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"e0729bd6-f56b-41ba-a551-7c9e10a5c9c1","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"10.000000pt"},"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"},"ticker":{"id":"70cbc9cd-3d2d-4deb-9d23-abbea4f4b7dc","type":"BasicTicker"}},"id":"abba5659-da92-4813-84ab-e457e80902b8","type":"LinearAxis"},{"attributes":{"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"}},"id":"8b923878-d6b0-4434-982f-3345b839c471","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAAAEAAAAAAAAAAQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAQQAAAAAAAABBAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAcQAAAAAAAABxAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACJAAAAAAAAAIkAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAmQAAAAAAAAChAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMUAAAAAAAAAxQAAAAAAAADJAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADNAAAAAAAAANEAAAAAAAAA0QAAAAAAAADVAAAAAAAAANUAAAAAAAAA2QAAAAAAAADZAAAAAAAAAN0AAAAAAAAA3QAAAAAAAADhAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA6QAAAAAAAADtAAAAAAAAAO0AAAAAAAAA8QAAAAAAAADxAAAAAAAAAPUAAAAAAAAA9QAAAAAAAAD5AAAAAAAAAPkAAAAAAAAA/QAAAAAAAAD9AAAAAAAAAQEAAAAAAAABAQAAAAAAAgEBAAAAAAACAQEAAAAAAAABBQAAAAAAAAEFAAAAAAACAQUAAAAAAAIBBQAAAAAAAAEJAAAAAAAAAQkAAAAAAAIBCQAAAAAAAgEJAAAAAAAAAQ0AAAAAAAABDQAAAAAAAgENAAAAAAACAQ0AAAAAAAABEQAAAAAAAAERAAAAAAACAREAAAAAAAIBEQAAAAAAAAEVAAAAAAAAARUAAAAAAAIBFQAAAAAAAgEVAAAAAAAAARkAAAAAAAABGQAAAAAAAgEZAAAAAAACARkAAAAAAAABHQAAAAAAAAEdAAAAAAACAR0AAAAAAAIBHQAAAAAAAAEhAAAAAAAAASEAAAAAAAIBIQAAAAAAAgEhAAAAAAAAASUAAAAAAAABJQAAAAAAAgElAAAAAAACASUAAAAAAAABKQAAAAAAAAEpAAAAAAACASkAAAAAAAIBKQAAAAAAAAEtAAAAAAAAAS0AAAAAAAIBLQAAAAAAAgEtAAAAAAAAATEAAAAAAAABMQAAAAAAAgExAAAAAAACATEAAAAAAAABNQAAAAAAAAE1AAAAAAACATUAAAAAAAIBNQAAAAAAAAE5AAAAAAAAATkAAAAAAAIBOQAAAAAAAgE5AAAAAAAAAT0AAAAAAAABPQAAAAAAAgE9AAAAAAACAT0AAAAAAAABQQAAAAAAAAFBAAAAAAABAUEAAAAAAAEBQQAAAAAAAgFBAAAAAAACAUEAAAAAAAMBQQAAAAAAAwFBAAAAAAAAAUUAAAAAAAABRQAAAAAAAQFFAAAAAAABAUUAAAAAAAIBRQAAAAAAAgFFAAAAAAADAUUAAAAAAAMBRQAAAAAAAAFJAAAAAAAAAUkAAAAAAAEBSQAAAAAAAQFJAAAAAAACAUkAAAAAAAIBSQAAAAAAAwFJAAAAAAADAUkAAAAAAAABTQAAAAAAAAFNAAAAAAABAU0AAAAAAAEBTQAAAAAAAgFNAAAAAAACAU0AAAAAAAMBTQAAAAAAAwFNAAAAAAAAAVEAAAAAAAABUQAAAAAAAQFRAAAAAAABAVEAAAAAAAIBUQAAAAAAAgFRAAAAAAADAVEAAAAAAAMBUQAAAAAAAAFVAAAAAAAAAVUAAAAAAAEBVQAAAAAAAQFVAAAAAAACAVUAAAAAAAIBVQAAAAAAAwFVAAAAAAADAVUAAAAAAAABWQAAAAAAAAFZAAAAAAABAVkAAAAAAAEBWQAAAAAAAgFZAAAAAAACAVkAAAAAAAMBWQAAAAAAAwFZAAAAAAAAAV0AAAAAAAABXQAAAAAAAQFdAAAAAAABAV0AAAAAAAIBXQAAAAAAAgFdAAAAAAADAV0AAAAAAAMBXQAAAAAAAAFhAAAAAAAAAWEAAAAAAAEBYQAAAAAAAQFhAAAAAAACAWEAAAAAAAIBYQAAAAAAAwFhA","dtype":"float64","shape":[198]},"Series 1":{"__ndarray__":"AAAAAAAA8L8AAAAAAADwvwAAAAAAAADAAAAAAAAAAMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAPC/AAAAAAAA8L8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAAAAAAAAAAAADwvwAAAAAAAPC/AAAAAAAAAMAAAAAAAAAAwAAAAAAAAAjAAAAAAAAACMAAAAAAAAAQwAAAAAAAABDAAAAAAAAAFMAAAAAAAAAUwAAAAAAAABjAAAAAAAAAGMAAAAAAAAAcwAAAAAAAABzAAAAAAAAAIMAAAAAAAAAgwAAAAAAAACLAAAAAAAAAIsAAAAAAAAAgwAAAAAAAACDAAAAAAAAAHMAAAAAAAAAcwAAAAAAAACDAAAAAAAAAIMAAAAAAAAAcwAAAAAAAABzAAAAAAAAAGMAAAAAAAAAYwAAAAAAAABzAAAAAAAAAHMAAAAAAAAAgwAAAAAAAACDAAAAAAAAAHMAAAAAAAAAcwAAAAAAAACDAAAAAAAAAIMAAAAAAAAAcwAAAAAAAABzAAAAAAAAAGMAAAAAAAAAYwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAQwAAAAAAAABDAAAAAAAAAFMAAAAAAAAAUwAAAAAAAABDAAAAAAAAAEMAAAAAAAAAIwAAAAAAAAAjAAAAAAAAAEMAAAAAAAAAQwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAYwAAAAAAAABjAAAAAAAAAHMAAAAAAAAAcwAAAAAAAACDAAAAAAAAAIMAAAAAAAAAcwAAAAAAAABzAAAAAAAAAGMAAAAAAAAAYwAAAAAAAABTAAAAAAAAAFMAAAAAAAAAQwAAAAAAAABDAAAAAAAAACMAAAAAAAAAIwAAAAAAAAADAAAAAAAAAAMAAAAAAAADwvwAAAAAAAPC/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPC/AAAAAAAA8L8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8L8AAAAAAADwvwAAAAAAAAAAAAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPC/AAAAAAAA8L8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8L8AAAAAAADwvwAAAAAAAAAAAAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAAAEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAAEAAAAAAAAAAQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAAQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAQAAAAAAAAABAAAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAQQAAAAAAAABBAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAEEAAAAAAAAAQQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAQQAAAAAAAABBAAAAAAAAAFEAAAAAAAAAUQAAAAAAAABBAAAAAAAAAEEAAAAAAAAAUQAAAAAAAABRAAAAAAAAAEEAAAAAAAAAQQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAAQAAAAAAAAABAAAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAAQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhA","dtype":"float64","shape":[198]}}},"id":"5641fd0a-a510-4aef-93e0-dea39bcc0a43","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"}},"id":"0a5a0581-af6e-4c64-8526-3f6cfacbc5cd","type":"PanTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"11867ddd-8fcc-4157-927f-043df20507ea","type":"Plot"},"ticker":{"id":"11fb549d-7487-43b0-92f3-ac7c564802ae","type":"BasicTicker"}},"id":"a7fc0456-8ecf-4678-b39a-65a49e8d9e9d","type":"Grid"},{"attributes":{},"id":"e0729bd6-f56b-41ba-a551-7c9e10a5c9c1","type":"BasicTickFormatter"},{"attributes":{},"id":"5ff9f535-507f-46e6-8314-50a7b81b1005","type":"ToolEvents"}],"root_ids":["11867ddd-8fcc-4157-927f-043df20507ea"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a0618062-2402-4b36-8b28-19e7761672cf","elementid":"c2bdc341-33bc-42a0-98ef-2783f21776cf","modelid":"11867ddd-8fcc-4157-927f-043df20507ea"}];
                
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
