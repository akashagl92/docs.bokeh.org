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
      };var element = document.getElementById("0fcc6094-7fad-49e4-a418-2a22abcc3a86");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0fcc6094-7fad-49e4-a418-2a22abcc3a86' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"897e11d6-8212-456b-816e-6e17224f01ee":{"roots":{"references":[{"attributes":{"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"},"ticker":{"id":"a2509afc-b679-48fe-8ded-09116500e45f","type":"BasicTicker"}},"id":"7a0b30d1-9d0e-492a-a69c-257d43c52b59","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"ba0197d9-5224-4d21-b946-de7c3e1611fa","type":"Square"},{"attributes":{},"id":"577dc655-9b5b-4d5a-868e-7bf68a68eb59","type":"ToolEvents"},{"attributes":{"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"}},"id":"7b6fe69d-4197-4ff6-bc0a-3c1468fd050f","type":"HelpTool"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"713942a5-7561-4442-8c9e-7f0bb3a9cf7c","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"},"ticker":{"id":"05f2911f-e29f-40fb-8d91-2385f9bc12d4","type":"BasicTicker"}},"id":"123f4f78-20b2-41de-8a1d-b9003071130c","type":"Grid"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"c2aca318-d2f1-4928-a01a-6059dc36e0ce","type":"BasicTickFormatter"},"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"},"ticker":{"id":"a2509afc-b679-48fe-8ded-09116500e45f","type":"BasicTicker"}},"id":"da96b50b-3d69-4d74-9bcd-5b53a754a8f6","type":"LinearAxis"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"5b54faa9-64ad-4d0a-ae3b-0afc49cc31ea","type":"BasicTickFormatter"},"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"},"ticker":{"id":"05f2911f-e29f-40fb-8d91-2385f9bc12d4","type":"BasicTicker"}},"id":"e7bba7e0-284c-40aa-a397-7b9e3e9e3fb4","type":"LinearAxis"},{"attributes":{},"id":"c2aca318-d2f1-4928-a01a-6059dc36e0ce","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"da96b50b-3d69-4d74-9bcd-5b53a754a8f6","type":"LinearAxis"}],"height":400,"left":[{"id":"e7bba7e0-284c-40aa-a397-7b9e3e9e3fb4","type":"LinearAxis"}],"renderers":[{"id":"13593df9-0c4c-4e60-95dc-501c6f512db7","type":"BoxAnnotation"},{"id":"ca6b9167-832d-4a6c-90f5-6e8188c3d3ed","type":"GlyphRenderer"},{"id":"dfc746c1-9b0d-4184-8d11-8264cc5d7545","type":"Legend"},{"id":"da96b50b-3d69-4d74-9bcd-5b53a754a8f6","type":"LinearAxis"},{"id":"e7bba7e0-284c-40aa-a397-7b9e3e9e3fb4","type":"LinearAxis"},{"id":"7a0b30d1-9d0e-492a-a69c-257d43c52b59","type":"Grid"},{"id":"123f4f78-20b2-41de-8a1d-b9003071130c","type":"Grid"}],"title":{"id":"5e3ff23b-c54a-495d-bfbf-9c61aebd8cec","type":"Title"},"tool_events":{"id":"577dc655-9b5b-4d5a-868e-7bf68a68eb59","type":"ToolEvents"},"toolbar":{"id":"9b141804-13d7-4eb1-8ca2-d43053847403","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"713942a5-7561-4442-8c9e-7f0bb3a9cf7c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"39bcefc2-b5c3-44a9-8177-b3682fdf730d","type":"Range1d"}},"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"}},"id":"99bf4768-a12e-4ea7-9324-bd7e9629d8db","type":"ResetTool"},{"attributes":{},"id":"a2509afc-b679-48fe-8ded-09116500e45f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"13593df9-0c4c-4e60-95dc-501c6f512db7","type":"BoxAnnotation"},"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"}},"id":"139a1dba-2231-4dc3-9d3a-ed4a0c1b4e84","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"}},"id":"3fabfc89-a7b5-4c66-9a3d-50c7700f4acd","type":"PanTool"},{"attributes":{"plot":null,"text":"HP vs DISPL"},"id":"5e3ff23b-c54a-495d-bfbf-9c61aebd8cec","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13593df9-0c4c-4e60-95dc-501c6f512db7","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"}},"id":"c64c5ad8-3162-4967-aba0-74a1aa55aaf2","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"}},"id":"8757c162-20e9-44b7-a052-dbdefb9de51c","type":"SaveTool"},{"attributes":{"data_source":{"id":"75b88f09-e2c3-4f73-950d-36ff128dd7d0","type":"ColumnDataSource"},"glyph":{"id":"ba0197d9-5224-4d21-b946-de7c3e1611fa","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ca6b9167-832d-4a6c-90f5-6e8188c3d3ed","type":"GlyphRenderer"},{"attributes":{},"id":"5b54faa9-64ad-4d0a-ae3b-0afc49cc31ea","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[80.0,70.0,70.0,70.0,98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0,121.0,131.0,183.0,250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0,400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"75b88f09-e2c3-4f73-950d-36ff128dd7d0","type":"ColumnDataSource"},{"attributes":{"location":"top_left","plot":{"id":"618dcd5c-208f-4058-a1cf-4ea19092a32b","subtype":"Chart","type":"Plot"}},"id":"dfc746c1-9b0d-4184-8d11-8264cc5d7545","type":"Legend"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3fabfc89-a7b5-4c66-9a3d-50c7700f4acd","type":"PanTool"},{"id":"c64c5ad8-3162-4967-aba0-74a1aa55aaf2","type":"WheelZoomTool"},{"id":"139a1dba-2231-4dc3-9d3a-ed4a0c1b4e84","type":"BoxZoomTool"},{"id":"8757c162-20e9-44b7-a052-dbdefb9de51c","type":"SaveTool"},{"id":"99bf4768-a12e-4ea7-9324-bd7e9629d8db","type":"ResetTool"},{"id":"7b6fe69d-4197-4ff6-bc0a-3c1468fd050f","type":"HelpTool"}]},"id":"9b141804-13d7-4eb1-8ca2-d43053847403","type":"Toolbar"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"39bcefc2-b5c3-44a9-8177-b3682fdf730d","type":"Range1d"},{"attributes":{},"id":"05f2911f-e29f-40fb-8d91-2385f9bc12d4","type":"BasicTicker"}],"root_ids":["618dcd5c-208f-4058-a1cf-4ea19092a32b"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"897e11d6-8212-456b-816e-6e17224f01ee","elementid":"0fcc6094-7fad-49e4-a418-2a22abcc3a86","modelid":"618dcd5c-208f-4058-a1cf-4ea19092a32b"}];
              
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