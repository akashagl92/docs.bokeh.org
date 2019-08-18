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
      };var element = document.getElementById("d7797e94-de53-4930-8a56-c9862cfc7b35");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7797e94-de53-4930-8a56-c9862cfc7b35' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"1f3e6d2f-49ca-4718-9dbc-e73661953e5a":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c593a670-8570-4be6-818d-a7c53e10f7bb","type":"PanTool"},{"id":"a879e2c1-aad4-4ae5-9e26-8122d646cef8","type":"WheelZoomTool"},{"id":"958279d8-1544-4b3a-97ba-e855ace34ab1","type":"BoxZoomTool"},{"id":"48ca2e90-7c99-401f-a947-b0845988f23c","type":"SaveTool"},{"id":"ba6cf24b-8fca-4cb5-a67b-a48175f12837","type":"ResetTool"},{"id":"86268688-eca1-4f83-8c4f-4bff9e233678","type":"HelpTool"}]},"id":"8ab749a2-b914-44ae-902e-72d42b92f53a","type":"Toolbar"},{"attributes":{},"id":"116690bb-5de8-4ba0-a219-a345936bf56a","type":"BasicTicker"},{"attributes":{},"id":"7486650a-2321-4e39-8207-9d375da9e902","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"32f055be-e863-442e-bb4b-61017000f1eb","type":"Range1d"},{"attributes":{"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"},"ticker":{"id":"e5cb8805-3e72-4189-a668-38e04b316190","type":"BasicTicker"}},"id":"bce0f0a9-f4fe-4e82-8343-3ee47efeacae","type":"Grid"},{"attributes":{"overlay":{"id":"04662973-68e2-4b25-91a4-fb125350f906","type":"BoxAnnotation"},"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"}},"id":"958279d8-1544-4b3a-97ba-e855ace34ab1","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"04662973-68e2-4b25-91a4-fb125350f906","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"}},"id":"86268688-eca1-4f83-8c4f-4bff9e233678","type":"HelpTool"},{"attributes":{"below":[{"id":"ee56b91b-2a22-4479-b819-9114bd8668d4","type":"LinearAxis"}],"height":400,"left":[{"id":"6e522c82-e3b8-4f52-834d-36bbd0c213b1","type":"LinearAxis"}],"renderers":[{"id":"04662973-68e2-4b25-91a4-fb125350f906","type":"BoxAnnotation"},{"id":"5f588bf6-e355-4307-b93f-3edb6fa76f24","type":"GlyphRenderer"},{"id":"623729f2-e54b-493e-903d-a93264e383ef","type":"Legend"},{"id":"ee56b91b-2a22-4479-b819-9114bd8668d4","type":"LinearAxis"},{"id":"6e522c82-e3b8-4f52-834d-36bbd0c213b1","type":"LinearAxis"},{"id":"bce0f0a9-f4fe-4e82-8343-3ee47efeacae","type":"Grid"},{"id":"9a8440a6-f439-483a-ac1e-73333873c9b7","type":"Grid"}],"title":{"id":"88c9cbd9-8067-476e-b21c-83b0e99ce3be","type":"Title"},"tool_events":{"id":"89f09bb4-1bb9-49fe-8af4-e586df810db9","type":"ToolEvents"},"toolbar":{"id":"8ab749a2-b914-44ae-902e-72d42b92f53a","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"32f055be-e863-442e-bb4b-61017000f1eb","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"c0b54eae-7b4f-4e4c-a6b9-b8b68e58890c","type":"Range1d"}},"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"e5cb8805-3e72-4189-a668-38e04b316190","type":"BasicTicker"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"f30341b8-caa3-4125-b3ee-a745e56de76a","type":"BasicTickFormatter"},"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"},"ticker":{"id":"116690bb-5de8-4ba0-a219-a345936bf56a","type":"BasicTicker"}},"id":"6e522c82-e3b8-4f52-834d-36bbd0c213b1","type":"LinearAxis"},{"attributes":{"plot":null,"text":"HP vs DISPL"},"id":"88c9cbd9-8067-476e-b21c-83b0e99ce3be","type":"Title"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e01b8b04-ddc1-44af-83df-2dc428426d9e","type":"Square"},{"attributes":{"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"}},"id":"c593a670-8570-4be6-818d-a7c53e10f7bb","type":"PanTool"},{"attributes":{"data_source":{"id":"9302ce51-8405-4d3c-9b6f-7a2e7b33c3e7","type":"ColumnDataSource"},"glyph":{"id":"e01b8b04-ddc1-44af-83df-2dc428426d9e","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5f588bf6-e355-4307-b93f-3edb6fa76f24","type":"GlyphRenderer"},{"attributes":{},"id":"f30341b8-caa3-4125-b3ee-a745e56de76a","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"7486650a-2321-4e39-8207-9d375da9e902","type":"BasicTickFormatter"},"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"},"ticker":{"id":"e5cb8805-3e72-4189-a668-38e04b316190","type":"BasicTicker"}},"id":"ee56b91b-2a22-4479-b819-9114bd8668d4","type":"LinearAxis"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"c0b54eae-7b4f-4e4c-a6b9-b8b68e58890c","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[80.0,70.0,70.0,70.0,98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0,121.0,131.0,183.0,250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0,400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"9302ce51-8405-4d3c-9b6f-7a2e7b33c3e7","type":"ColumnDataSource"},{"attributes":{"location":"top_left","plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"}},"id":"623729f2-e54b-493e-903d-a93264e383ef","type":"Legend"},{"attributes":{"dimension":1,"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"},"ticker":{"id":"116690bb-5de8-4ba0-a219-a345936bf56a","type":"BasicTicker"}},"id":"9a8440a6-f439-483a-ac1e-73333873c9b7","type":"Grid"},{"attributes":{"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"}},"id":"a879e2c1-aad4-4ae5-9e26-8122d646cef8","type":"WheelZoomTool"},{"attributes":{},"id":"89f09bb4-1bb9-49fe-8af4-e586df810db9","type":"ToolEvents"},{"attributes":{"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"}},"id":"48ca2e90-7c99-401f-a947-b0845988f23c","type":"SaveTool"},{"attributes":{"plot":{"id":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad","subtype":"Chart","type":"Plot"}},"id":"ba6cf24b-8fca-4cb5-a67b-a48175f12837","type":"ResetTool"}],"root_ids":["c40c5d7c-9bb5-4a18-acb0-1347b74c23ad"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"1f3e6d2f-49ca-4718-9dbc-e73661953e5a","elementid":"d7797e94-de53-4930-8a56-c9862cfc7b35","modelid":"c40c5d7c-9bb5-4a18-acb0-1347b74c23ad"}];
              
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