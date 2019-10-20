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
      };var element = document.getElementById("f0435b44-1698-4ffc-b757-793118a82c00");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f0435b44-1698-4ffc-b757-793118a82c00' but no matching script tag was found. ")
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
                  var docs_json = {"3be89bce-09ae-47db-853b-11ce8117ad8c":{"roots":{"references":[{"attributes":{"below":[{"id":"7bccf991-7f11-47f5-9e15-67f3c17c6bba","type":"LinearAxis"}],"height":400,"left":[{"id":"696953bb-cf43-4e71-9927-e93768116619","type":"LinearAxis"}],"renderers":[{"id":"9f63beec-e638-4d20-a227-f8fdf8986413","type":"BoxAnnotation"},{"id":"52af5423-e159-4a6c-b047-257f17020da2","type":"GlyphRenderer"},{"id":"6e7f5f7b-2877-4370-902d-d9a27d61082a","type":"Legend"},{"id":"7bccf991-7f11-47f5-9e15-67f3c17c6bba","type":"LinearAxis"},{"id":"696953bb-cf43-4e71-9927-e93768116619","type":"LinearAxis"},{"id":"08e6010a-c61c-414b-ac16-2e601fde2acd","type":"Grid"},{"id":"a6232ab2-323f-44af-bcaf-369df5f3aa50","type":"Grid"}],"title":{"id":"ae012c6f-c971-47c9-9c6c-0147bd6f41ac","type":"Title"},"tool_events":{"id":"b1614df6-d993-4a8a-8234-af854e715166","type":"ToolEvents"},"toolbar":{"id":"c52668fe-4df6-483b-bc5a-405964723558","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"fb9c793a-73cc-4d5b-a815-18d10b08dca2","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b28040e9-59c1-4d85-8490-46fba8f62f98","type":"Range1d"}},"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"}},"id":"fc5419e3-3f53-4817-be02-70bee9612918","type":"PanTool"},{"attributes":{"data_source":{"id":"1e992b1a-25b6-4517-858d-50d0622dffb3","type":"ColumnDataSource"},"glyph":{"id":"48ce0426-2eed-41f7-b646-09a9c7974364","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"52af5423-e159-4a6c-b047-257f17020da2","type":"GlyphRenderer"},{"attributes":{},"id":"b6e9717d-e9dc-47c9-9b1d-e4e472b08d76","type":"BasicTicker"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"fb9c793a-73cc-4d5b-a815-18d10b08dca2","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"48ce0426-2eed-41f7-b646-09a9c7974364","type":"Square"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[80.0,70.0,70.0,70.0,98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0,121.0,131.0,183.0,250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0,400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"1e992b1a-25b6-4517-858d-50d0622dffb3","type":"ColumnDataSource"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"bb5d38d6-57ac-49dc-9fce-0c5f9272b87f","type":"BasicTickFormatter"},"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"},"ticker":{"id":"bb093374-8891-4c6e-b159-0a558f950647","type":"BasicTicker"}},"id":"7bccf991-7f11-47f5-9e15-67f3c17c6bba","type":"LinearAxis"},{"attributes":{"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"}},"id":"a7f95e7a-7184-4b34-8769-b332564bd33e","type":"SaveTool"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"1978ce3c-2a00-4b1f-a9fa-9ecbf4a333da","type":"BasicTickFormatter"},"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"},"ticker":{"id":"b6e9717d-e9dc-47c9-9b1d-e4e472b08d76","type":"BasicTicker"}},"id":"696953bb-cf43-4e71-9927-e93768116619","type":"LinearAxis"},{"attributes":{"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"}},"id":"ce9001b6-7cd4-40de-a6bb-3d5034121b16","type":"ResetTool"},{"attributes":{"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"}},"id":"cc402c4d-d353-4a72-b3ff-636bd8110708","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9f63beec-e638-4d20-a227-f8fdf8986413","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"}},"id":"686d4352-c545-4694-9524-889a6ca58418","type":"WheelZoomTool"},{"attributes":{},"id":"bb093374-8891-4c6e-b159-0a558f950647","type":"BasicTicker"},{"attributes":{"location":"top_left","plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"}},"id":"6e7f5f7b-2877-4370-902d-d9a27d61082a","type":"Legend"},{"attributes":{},"id":"1978ce3c-2a00-4b1f-a9fa-9ecbf4a333da","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"},"ticker":{"id":"b6e9717d-e9dc-47c9-9b1d-e4e472b08d76","type":"BasicTicker"}},"id":"a6232ab2-323f-44af-bcaf-369df5f3aa50","type":"Grid"},{"attributes":{"plot":null,"text":"HP vs DISPL"},"id":"ae012c6f-c971-47c9-9c6c-0147bd6f41ac","type":"Title"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"b28040e9-59c1-4d85-8490-46fba8f62f98","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fc5419e3-3f53-4817-be02-70bee9612918","type":"PanTool"},{"id":"686d4352-c545-4694-9524-889a6ca58418","type":"WheelZoomTool"},{"id":"8734a98b-2e24-4acc-8f68-e771d9614e36","type":"BoxZoomTool"},{"id":"a7f95e7a-7184-4b34-8769-b332564bd33e","type":"SaveTool"},{"id":"ce9001b6-7cd4-40de-a6bb-3d5034121b16","type":"ResetTool"},{"id":"cc402c4d-d353-4a72-b3ff-636bd8110708","type":"HelpTool"}]},"id":"c52668fe-4df6-483b-bc5a-405964723558","type":"Toolbar"},{"attributes":{"overlay":{"id":"9f63beec-e638-4d20-a227-f8fdf8986413","type":"BoxAnnotation"},"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"}},"id":"8734a98b-2e24-4acc-8f68-e771d9614e36","type":"BoxZoomTool"},{"attributes":{},"id":"b1614df6-d993-4a8a-8234-af854e715166","type":"ToolEvents"},{"attributes":{},"id":"bb5d38d6-57ac-49dc-9fce-0c5f9272b87f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6ccc3d38-fa62-497f-a9ec-21696790aa9e","subtype":"Chart","type":"Plot"},"ticker":{"id":"bb093374-8891-4c6e-b159-0a558f950647","type":"BasicTicker"}},"id":"08e6010a-c61c-414b-ac16-2e601fde2acd","type":"Grid"}],"root_ids":["6ccc3d38-fa62-497f-a9ec-21696790aa9e"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"3be89bce-09ae-47db-853b-11ce8117ad8c","elementid":"f0435b44-1698-4ffc-b757-793118a82c00","modelid":"6ccc3d38-fa62-497f-a9ec-21696790aa9e"}];
                  
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