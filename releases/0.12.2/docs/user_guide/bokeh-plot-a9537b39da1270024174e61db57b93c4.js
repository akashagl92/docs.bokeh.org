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
      };var element = document.getElementById("a3104c0f-b6d8-4817-a410-2b00f0386d6c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a3104c0f-b6d8-4817-a410-2b00f0386d6c' but no matching script tag was found. ")
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
                  var docs_json = {"02aef7b8-b0b3-4dbc-9dee-b51f118defe0":{"roots":{"references":[{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"248a1044-1e34-4480-8036-a37be21a4e74","type":"Range1d"},{"attributes":{},"id":"6972e4f9-9d61-4566-be0a-da9c742cf517","type":"BasicTicker"},{"attributes":{"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"}},"id":"c0346cb1-130e-41dd-b9a0-108441da25a6","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"ff52f83a-d233-465f-b791-e83a669ff19d","type":"Circle"},{"attributes":{"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"}},"id":"b7809e08-7c62-4c7c-af3f-8cc1ef2ce863","type":"PanTool"},{"attributes":{"below":[{"id":"40a9c08c-3f2e-4771-84cf-b6459732955a","type":"LinearAxis"}],"height":400,"left":[{"id":"9f8dd74f-c2bd-4264-b31a-7469fbb3b2e8","type":"LinearAxis"}],"renderers":[{"id":"749a66d0-0ce2-47d6-bd09-94c3efcce139","type":"BoxAnnotation"},{"id":"7d207794-121c-4a58-906a-861df9370940","type":"GlyphRenderer"},{"id":"dafe657b-f3a5-4103-a0c7-bd57acd9c9c1","type":"Legend"},{"id":"40a9c08c-3f2e-4771-84cf-b6459732955a","type":"LinearAxis"},{"id":"9f8dd74f-c2bd-4264-b31a-7469fbb3b2e8","type":"LinearAxis"},{"id":"2dfc52fd-49aa-4a20-91e6-93d094fa150b","type":"Grid"},{"id":"92538f22-a8e5-4ec5-8d16-6f69bf395258","type":"Grid"}],"title":{"id":"0d9180ca-24d9-4d66-8418-e98e376e4b61","type":"Title"},"tool_events":{"id":"4a9eaef6-5bde-4339-b3a6-54a1c75d65cb","type":"ToolEvents"},"toolbar":{"id":"c09041fa-7550-4dca-a9b1-93cb11cb1aff","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"666547cd-7e3e-4078-89ad-c163fe346d40","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"248a1044-1e34-4480-8036-a37be21a4e74","type":"Range1d"}},"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"},"ticker":{"id":"f2f0b129-7f83-41d3-a23b-311999cf5fca","type":"BasicTicker"}},"id":"92538f22-a8e5-4ec5-8d16-6f69bf395258","type":"Grid"},{"attributes":{"plot":null,"text":"HP vs MPG"},"id":"0d9180ca-24d9-4d66-8418-e98e376e4b61","type":"Title"},{"attributes":{"location":"top_left","plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"}},"id":"dafe657b-f3a5-4103-a0c7-bd57acd9c9c1","type":"Legend"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b7809e08-7c62-4c7c-af3f-8cc1ef2ce863","type":"PanTool"},{"id":"63d4190c-ed53-4b92-acd0-3a1b7117cce1","type":"WheelZoomTool"},{"id":"36d3e8a2-f5bc-426b-b1c3-9c611ffaf1fc","type":"BoxZoomTool"},{"id":"968aaa0a-675e-4dc5-8b48-d66489b50fc7","type":"SaveTool"},{"id":"c0346cb1-130e-41dd-b9a0-108441da25a6","type":"ResetTool"},{"id":"f46e9390-d77d-45bb-8fde-07282e0a75bb","type":"HelpTool"}]},"id":"c09041fa-7550-4dca-a9b1-93cb11cb1aff","type":"Toolbar"},{"attributes":{},"id":"630dc359-3fe4-4738-92ba-a8d07276ef8f","type":"BasicTickFormatter"},{"attributes":{},"id":"4a9eaef6-5bde-4339-b3a6-54a1c75d65cb","type":"ToolEvents"},{"attributes":{"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"}},"id":"63d4190c-ed53-4b92-acd0-3a1b7117cce1","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"749a66d0-0ce2-47d6-bd09-94c3efcce139","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"73a7ce8e-6b25-4e69-a3b2-74f5bfbe4640","type":"ColumnDataSource"},"glyph":{"id":"ff52f83a-d233-465f-b791-e83a669ff19d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7d207794-121c-4a58-906a-861df9370940","type":"GlyphRenderer"},{"attributes":{},"id":"e1058dba-76d2-4939-9f54-a7d80e6980e7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"}},"id":"968aaa0a-675e-4dc5-8b48-d66489b50fc7","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":[21.5,23.7,18.0,19.0,30.5,33.5,30.0,30.5,21.5,30.0,43.1,36.1,32.8,39.4,36.1,25.1,25.5,29.0,27.2,30.9,34.2,27.2,27.4,35.7,34.1,31.9,27.5,22.3,31.5,21.6,23.9,23.8,23.2,21.1,29.5,26.0,24.5,29.0,28.0,33.0,25.0,22.0,23.0,23.0,25.0,29.0,25.0,24.0,23.0,23.0,29.0,31.0,24.0,25.0,26.0,27.0,33.5,25.5,36.0,30.0,31.5,19.0,20.0,26.5,28.0,32.0,29.5,33.0,28.0,24.5,29.0,34.5,31.8,28.4,26.0,24.0,27.0,29.0,31.0,34.0,27.0,36.0,28.0,31.6,32.9,32.4,33.7,33.0,29.9,28.1,34.4,37.0,38.0,32.0,44.0,27.0,27.0,36.0,32.0,31.0,26.0,32.0,38.0,34.0,36.0,36.0,36.0,38.0,34.7,34.1,37.7,46.6,32.2,37.0,31.3,29.8,34.3,27.9,24.3,28.0,37.2,32.1,38.1,41.5,33.5,26.4,40.8,44.3,43.4,37.0,32.3,35.1,39.0,39.1,30.0,25.8,26.6,27.2,32.4,35.0,29.8,33.8,44.6,30.0,37.3,24.0,31.0,24.0,32.0,26.0,31.0,22.0,28.0,26.0,24.0,24.0,19.0,20.0,24.0,29.0,25.0,27.0,25.0,24.0,26.0,19.0,25.0,26.0,25.0,28.0,27.0,22.0,21.0,20.0,26.0,23.0,27.0,18.0,26.0,31.0,30.0,22.0,28.0,31.0,35.0,21.0,27.0,24.0,25.0,23.0,20.0,21.0,32.0,28.0,26.0,26.0,26.0,29.0,26.0,22.0,28.0,30.0,23.0,36.4,20.3,25.4,18.0,19.0,20.6,19.4,20.5,20.2,19.2,18.0,18.0,18.0,16.0,20.5,17.0,20.8,26.8,18.0,19.0,17.0,16.2,23.5,23.0,21.5,18.0,19.8,17.7,19.0,18.1,18.6,20.2,20.6,28.8,16.0,32.7,22.4,22.5,20.0,19.0,22.0,24.0,22.0,22.0,15.0,16.0,16.0,18.0,25.0,19.0,38.0,18.0,22.0,20.0,21.0,18.0,15.0,16.0,17.0,15.0,15.0,18.0,19.0,20.0,20.0,19.1,19.0,18.0,17.5,20.5,17.6,19.0,20.2,16.5,21.0,22.0,17.5,18.5,18.0,18.5,18.0,24.2,25.4,30.7,21.0,21.0,14.0,26.6,17.0,11.0,13.0,16.0,18.0,15.0,9.0,15.0,10.0,14.0,14.0,14.0,15.0,15.0,13.0,14.0,15.0,13.0,14.0,14.0,12.0,14.0,14.0,10.0,15.0,15.0,13.0,13.0,13.0,16.0,15.0,17.5,17.0,15.5,15.0,16.0,15.5,15.5,16.0,12.0,13.0,16.5,12.0,13.0,11.0,16.0,15.0,16.0,14.0,20.0,13.0,14.0,14.0,14.0,13.0,16.0,17.5,16.0,15.5,14.5,15.0,11.0,13.0,19.9,15.5,19.2,18.5,23.0,23.9,14.0,13.0,13.0,15.0,13.0,12.0,13.0,11.0,17.0,14.0,16.9,18.2,16.5,17.6,19.4,20.2,12.0,19.2,18.1,17.5,13.0,14.0,14.0,13.0,12.0,14.0,13.0,14.0,13.0,17.0,13.0,18.0],"y_values":[110,100,90,97,63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97,67,103,77,88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107,175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"73a7ce8e-6b25-4e69-a3b2-74f5bfbe4640","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"}},"id":"f46e9390-d77d-45bb-8fde-07282e0a75bb","type":"HelpTool"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"630dc359-3fe4-4738-92ba-a8d07276ef8f","type":"BasicTickFormatter"},"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"},"ticker":{"id":"6972e4f9-9d61-4566-be0a-da9c742cf517","type":"BasicTicker"}},"id":"40a9c08c-3f2e-4771-84cf-b6459732955a","type":"LinearAxis"},{"attributes":{"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"},"ticker":{"id":"6972e4f9-9d61-4566-be0a-da9c742cf517","type":"BasicTicker"}},"id":"2dfc52fd-49aa-4a20-91e6-93d094fa150b","type":"Grid"},{"attributes":{"overlay":{"id":"749a66d0-0ce2-47d6-bd09-94c3efcce139","type":"BoxAnnotation"},"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"}},"id":"36d3e8a2-f5bc-426b-b1c3-9c611ffaf1fc","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"666547cd-7e3e-4078-89ad-c163fe346d40","type":"Range1d"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"e1058dba-76d2-4939-9f54-a7d80e6980e7","type":"BasicTickFormatter"},"plot":{"id":"88eba4d8-d670-4494-901b-1ada64c1bd3b","subtype":"Chart","type":"Plot"},"ticker":{"id":"f2f0b129-7f83-41d3-a23b-311999cf5fca","type":"BasicTicker"}},"id":"9f8dd74f-c2bd-4264-b31a-7469fbb3b2e8","type":"LinearAxis"},{"attributes":{},"id":"f2f0b129-7f83-41d3-a23b-311999cf5fca","type":"BasicTicker"}],"root_ids":["88eba4d8-d670-4494-901b-1ada64c1bd3b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"02aef7b8-b0b3-4dbc-9dee-b51f118defe0","elementid":"a3104c0f-b6d8-4817-a410-2b00f0386d6c","modelid":"88eba4d8-d670-4494-901b-1ada64c1bd3b"}];
                  
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