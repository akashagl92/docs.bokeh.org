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
      };var element = document.getElementById("54cd892b-599e-40b3-b6dd-2cc893796ea3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54cd892b-599e-40b3-b6dd-2cc893796ea3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"53908e4d-5e58-4818-8c94-6494652ab253":{"roots":{"references":[{"attributes":{"plot":null,"text":"HP vs DISPL"},"id":"deae19f3-9df9-45b0-80be-fe69e5afed69","type":"Title"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"2e6fa6cf-2d53-404c-b6ba-cd55178d3c20","type":"BasicTickFormatter"},"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"},"ticker":{"id":"71f9d69f-2f02-4349-9bcf-7bac2ba4843b","type":"BasicTicker"}},"id":"4b8e8eaa-41c9-4f57-8dba-c392ae07e646","type":"LinearAxis"},{"attributes":{},"id":"2e6fa6cf-2d53-404c-b6ba-cd55178d3c20","type":"BasicTickFormatter"},{"attributes":{"location":"top_left","plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"}},"id":"02ff0711-3ab0-47ed-a00e-025cbb7d285c","type":"Legend"},{"attributes":{"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"},"ticker":{"id":"f1b5314e-61a7-4fa7-b7bb-cd8bae5e030d","type":"BasicTicker"}},"id":"6ef617f5-eaea-4559-9c74-e89ecc4d59cb","type":"Grid"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"5c5d45ae-7596-49d0-aacc-3188ba195615","type":"BasicTickFormatter"},"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"},"ticker":{"id":"f1b5314e-61a7-4fa7-b7bb-cd8bae5e030d","type":"BasicTicker"}},"id":"53705771-edfa-4908-8053-18c1f0add1c3","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"45f5812c-e3b9-4d27-9375-a40033fcf115","type":"PanTool"},{"id":"7fcf63f9-c6eb-4ff1-abb6-d983567bebd9","type":"WheelZoomTool"},{"id":"d85d5970-2ed6-4e1e-b73b-78ae963f9bfa","type":"BoxZoomTool"},{"id":"154ca5c8-3b8d-4901-8a20-481d0073e71f","type":"SaveTool"},{"id":"b96badb3-625b-4a8f-8695-7e58c6c91e22","type":"ResetTool"},{"id":"069863d9-9f5c-4ffa-85fd-b073dd3796e2","type":"HelpTool"}]},"id":"58083b38-cba9-4838-b349-96959b70c8c4","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5797d6b2-3845-4634-87f3-f51a34bc1b91","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"}},"id":"154ca5c8-3b8d-4901-8a20-481d0073e71f","type":"SaveTool"},{"attributes":{"overlay":{"id":"5797d6b2-3845-4634-87f3-f51a34bc1b91","type":"BoxAnnotation"},"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"}},"id":"d85d5970-2ed6-4e1e-b73b-78ae963f9bfa","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b0ab21f4-8f4f-4a6f-a03c-ea8d138ec22b","type":"Square"},{"attributes":{"data_source":{"id":"dcbcc486-769a-4903-b0a8-f531efa862d2","type":"ColumnDataSource"},"glyph":{"id":"b0ab21f4-8f4f-4a6f-a03c-ea8d138ec22b","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a5582120-bfc1-4149-b2df-0290beb95db3","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"}},"id":"b96badb3-625b-4a8f-8695-7e58c6c91e22","type":"ResetTool"},{"attributes":{"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"}},"id":"7fcf63f9-c6eb-4ff1-abb6-d983567bebd9","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"},"ticker":{"id":"71f9d69f-2f02-4349-9bcf-7bac2ba4843b","type":"BasicTicker"}},"id":"76c1cc25-7301-4cff-aa1f-1afb47fbb510","type":"Grid"},{"attributes":{},"id":"f1b5314e-61a7-4fa7-b7bb-cd8bae5e030d","type":"BasicTicker"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"8c0452ce-352f-4911-99c7-7f6b6cb97b62","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[80.0,70.0,70.0,70.0,98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0,121.0,131.0,183.0,250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0,400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"dcbcc486-769a-4903-b0a8-f531efa862d2","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"e8f801ab-4450-4613-b3bd-17f3d1f1b64d","type":"Range1d"},{"attributes":{},"id":"5c5d45ae-7596-49d0-aacc-3188ba195615","type":"BasicTickFormatter"},{"attributes":{},"id":"71f9d69f-2f02-4349-9bcf-7bac2ba4843b","type":"BasicTicker"},{"attributes":{"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"}},"id":"45f5812c-e3b9-4d27-9375-a40033fcf115","type":"PanTool"},{"attributes":{},"id":"85c80933-6c99-4dfd-a642-de421034e7af","type":"ToolEvents"},{"attributes":{"below":[{"id":"53705771-edfa-4908-8053-18c1f0add1c3","type":"LinearAxis"}],"height":400,"left":[{"id":"4b8e8eaa-41c9-4f57-8dba-c392ae07e646","type":"LinearAxis"}],"renderers":[{"id":"5797d6b2-3845-4634-87f3-f51a34bc1b91","type":"BoxAnnotation"},{"id":"a5582120-bfc1-4149-b2df-0290beb95db3","type":"GlyphRenderer"},{"id":"02ff0711-3ab0-47ed-a00e-025cbb7d285c","type":"Legend"},{"id":"53705771-edfa-4908-8053-18c1f0add1c3","type":"LinearAxis"},{"id":"4b8e8eaa-41c9-4f57-8dba-c392ae07e646","type":"LinearAxis"},{"id":"6ef617f5-eaea-4559-9c74-e89ecc4d59cb","type":"Grid"},{"id":"76c1cc25-7301-4cff-aa1f-1afb47fbb510","type":"Grid"}],"title":{"id":"deae19f3-9df9-45b0-80be-fe69e5afed69","type":"Title"},"tool_events":{"id":"85c80933-6c99-4dfd-a642-de421034e7af","type":"ToolEvents"},"toolbar":{"id":"58083b38-cba9-4838-b349-96959b70c8c4","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"e8f801ab-4450-4613-b3bd-17f3d1f1b64d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"8c0452ce-352f-4911-99c7-7f6b6cb97b62","type":"Range1d"}},"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf","subtype":"Chart","type":"Plot"}},"id":"069863d9-9f5c-4ffa-85fd-b073dd3796e2","type":"HelpTool"}],"root_ids":["21f6aa98-7fd9-4508-a2d2-265c520ec9cf"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"53908e4d-5e58-4818-8c94-6494652ab253","elementid":"54cd892b-599e-40b3-b6dd-2cc893796ea3","modelid":"21f6aa98-7fd9-4508-a2d2-265c520ec9cf"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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