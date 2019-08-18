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
      };var element = document.getElementById("157f257b-74e5-4d07-8976-0f7660ba2c2a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '157f257b-74e5-4d07-8976-0f7660ba2c2a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"9fd0ef9d-9f33-4b9b-a09c-3069d57e5607":{"roots":{"references":[{"attributes":{"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"}},"id":"199bdcbe-7ecf-4873-bedd-d633ae893ff9","type":"HelpTool"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"f753c59b-6330-4d81-acea-ca4cbdc1b1b8","type":"BasicTickFormatter"},"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"afff288d-6555-40b2-9ee7-ddb5fc312d9d","type":"BasicTicker"}},"id":"8513343f-80c3-4d57-b323-5fd9c71e8043","type":"LinearAxis"},{"attributes":{},"id":"a6a28b30-c1c6-4bb1-8091-9d3d5bb2ead1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"}},"id":"70f8b72f-664e-4d9a-a99b-facd05344352","type":"WheelZoomTool"},{"attributes":{"axis_label":"index","formatter":{"id":"a6a28b30-c1c6-4bb1-8091-9d3d5bb2ead1","type":"BasicTickFormatter"},"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"9cba9ec1-968d-41ef-a11f-c14e91a64c42","type":"BasicTicker"}},"id":"29825318-263b-4eef-9426-076ec7873b70","type":"LinearAxis"},{"attributes":{"label":{"value":"postcard"},"renderers":[{"id":"1dd3945a-f1d6-4de9-9381-cb47bb1c5b82","type":"GlyphRenderer"}]},"id":"91a9753f-8b5e-4dbf-a72d-4d6f7153f8a2","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dcd82445-bb24-44aa-b678-f9496636afae","type":"PanTool"},{"id":"70f8b72f-664e-4d9a-a99b-facd05344352","type":"WheelZoomTool"},{"id":"8d404f70-ec34-4bc6-a4f5-8e584659de0b","type":"BoxZoomTool"},{"id":"91d2d1a9-7cd1-47d0-94cf-d1e4699a75f6","type":"SaveTool"},{"id":"b945ee86-51e0-450b-869a-1c770e1ffe10","type":"ResetTool"},{"id":"199bdcbe-7ecf-4873-bedd-d633ae893ff9","type":"HelpTool"}]},"id":"83703605-8482-4866-9bc3-969269948cd8","type":"Toolbar"},{"attributes":{"data_source":{"id":"a10e4972-aa46-4351-b6d1-5adbba57ea2a","type":"ColumnDataSource"},"glyph":{"id":"9e66bf3c-8596-4223-8018-0aa6f9a683a4","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"1dd3945a-f1d6-4de9-9381-cb47bb1c5b82","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"9cba9ec1-968d-41ef-a11f-c14e91a64c42","type":"BasicTicker"}},"id":"a56a6cce-e5d5-4c3f-bb9f-1e8f259b1eec","type":"Grid"},{"attributes":{"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"}},"id":"91d2d1a9-7cd1-47d0-94cf-d1e4699a75f6","type":"SaveTool"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"9e66bf3c-8596-4223-8018-0aa6f9a683a4","type":"Line"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"7de70848-dd40-4d19-ab0d-08d74829e6d1","type":"Title"},{"attributes":{"below":[{"id":"29825318-263b-4eef-9426-076ec7873b70","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"8513343f-80c3-4d57-b323-5fd9c71e8043","type":"LinearAxis"}],"renderers":[{"id":"de219986-0a8c-4daa-a313-0a960e96a286","type":"BoxAnnotation"},{"id":"de39af50-69eb-4526-b0c4-9b7a344c82b6","type":"GlyphRenderer"},{"id":"1dd3945a-f1d6-4de9-9381-cb47bb1c5b82","type":"GlyphRenderer"},{"id":"2df752be-b6d7-460e-9ef6-f505dee8cd2c","type":"Legend"},{"id":"29825318-263b-4eef-9426-076ec7873b70","type":"LinearAxis"},{"id":"8513343f-80c3-4d57-b323-5fd9c71e8043","type":"LinearAxis"},{"id":"a56a6cce-e5d5-4c3f-bb9f-1e8f259b1eec","type":"Grid"},{"id":"51067742-de77-4b17-a30a-56e274719381","type":"Grid"}],"title":{"id":"7de70848-dd40-4d19-ab0d-08d74829e6d1","type":"Title"},"tool_events":{"id":"f5a21388-a42b-4993-a698-5b117af54b34","type":"ToolEvents"},"toolbar":{"id":"83703605-8482-4866-9bc3-969269948cd8","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"2e73eb01-8319-4ed0-bbd1-97a9dc3043c9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a1005eca-6dba-401a-9517-1b2548b84dc0","type":"Range1d"}},"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"afff288d-6555-40b2-9ee7-ddb5fc312d9d","type":"BasicTicker"},{"attributes":{"label":{"value":"stamp"},"renderers":[{"id":"de39af50-69eb-4526-b0c4-9b7a344c82b6","type":"GlyphRenderer"}]},"id":"614d217f-cf89-4eaa-8b42-6315e6c0023a","type":"LegendItem"},{"attributes":{"items":[{"id":"614d217f-cf89-4eaa-8b42-6315e6c0023a","type":"LegendItem"},{"id":"91a9753f-8b5e-4dbf-a72d-4d6f7153f8a2","type":"LegendItem"}],"location":"top_left","plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"}},"id":"2df752be-b6d7-460e-9ef6-f505dee8cd2c","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"de219986-0a8c-4daa-a313-0a960e96a286","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"de219986-0a8c-4daa-a313-0a960e96a286","type":"BoxAnnotation"},"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"}},"id":"8d404f70-ec34-4bc6-a4f5-8e584659de0b","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"2e73eb01-8319-4ed0-bbd1-97a9dc3043c9","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT/hehSuR+HKP+F6FK5H4co/cT0K16NwzT9xPQrXo3DNP3E9CtejcM0/cT0K16NwzT9xPQrXo3DNP3E9CtejcM0/cT0K16NwzT9xPQrXo3DNP7gehetRuM4/uB6F61G4zj+kcD0K16PQP6RwPQrXo9A/SOF6FK5H0T9I4XoUrkfRP+xRuB6F69E/7FG4HoXr0T/sUbgehevRP+xRuB6F69E/j8L1KFyP0j+PwvUoXI/SP3sUrkfhetQ/exSuR+F61D8fhetRuB7VPx+F61G4HtU/w/UoXI/C1T/D9Shcj8LVP2ZmZmZmZtY/","dtype":"float64","shape":[33]}}},"id":"a10e4972-aa46-4351-b6d1-5adbba57ea2a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"}},"id":"dcd82445-bb24-44aa-b678-f9496636afae","type":"PanTool"},{"attributes":{"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"}},"id":"b945ee86-51e0-450b-869a-1c770e1ffe10","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":{"__ndarray__":"H4XrUbge1T8fhetRuB7VPx+F61G4HtU/H4XrUbge1T/D9Shcj8LVP8P1KFyPwtU/rkfhehSu1z+uR+F6FK7XP65H4XoUrtc/rkfhehSu1z+uR+F6FK7XP65H4XoUrtc/rkfhehSu1z+uR+F6FK7XP/YoXI/C9dg/9ihcj8L12D89CtejcD3aPz0K16NwPdo/4XoUrkfh2j/hehSuR+HaPylcj8L1KNw/KVyPwvUo3D8pXI/C9SjcPylcj8L1KNw/KVyPwvUo3D8pXI/C9SjcP83MzMzMzNw/zczMzMzM3D9xPQrXo3DdP3E9CtejcN0/XI/C9Shc3z9cj8L1KFzfP1yPwvUoXN8/","dtype":"float64","shape":[33]}}},"id":"141a2485-ba44-431e-a9f0-a6812a2c7d52","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"141a2485-ba44-431e-a9f0-a6812a2c7d52","type":"ColumnDataSource"},"glyph":{"id":"ca63eb18-ed0b-4881-a35a-331b02d95981","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"de39af50-69eb-4526-b0c4-9b7a344c82b6","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"e2551a82-c9df-45bf-a709-0853dd3ed5c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"afff288d-6555-40b2-9ee7-ddb5fc312d9d","type":"BasicTicker"}},"id":"51067742-de77-4b17-a30a-56e274719381","type":"Grid"},{"attributes":{},"id":"f753c59b-6330-4d81-acea-ca4cbdc1b1b8","type":"BasicTickFormatter"},{"attributes":{},"id":"f5a21388-a42b-4993-a698-5b117af54b34","type":"ToolEvents"},{"attributes":{},"id":"9cba9ec1-968d-41ef-a11f-c14e91a64c42","type":"BasicTicker"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"a1005eca-6dba-401a-9517-1b2548b84dc0","type":"Range1d"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"ca63eb18-ed0b-4881-a35a-331b02d95981","type":"Line"}],"root_ids":["e2551a82-c9df-45bf-a709-0853dd3ed5c3"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9fd0ef9d-9f33-4b9b-a09c-3069d57e5607","elementid":"157f257b-74e5-4d07-8976-0f7660ba2c2a","modelid":"e2551a82-c9df-45bf-a709-0853dd3ed5c3"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
