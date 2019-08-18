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
      };var element = document.getElementById("dde61fa8-6b2b-4346-bc61-fb1693de5435");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dde61fa8-6b2b-4346-bc61-fb1693de5435' but no matching script tag was found. ")
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
                var docs_json = {"222485f7-be78-4959-b5f3-118f2c02acb3":{"roots":{"references":[{"attributes":{"label":{"value":"postcard"},"renderers":[{"id":"df558070-ad8c-4373-b6f7-9fce5b5eb5f4","type":"GlyphRenderer"}]},"id":"4c3e55e4-37e0-4589-b147-cb50fde03ba5","type":"LegendItem"},{"attributes":{"label":{"value":"stamp"},"renderers":[{"id":"2ae3558c-16f0-4fee-98dd-ca41570284b7","type":"GlyphRenderer"}]},"id":"f08b169d-1a38-4073-b700-7b2f87756159","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"},"ticker":{"id":"6396bcc7-3c07-4231-963e-9acba4975dce","type":"BasicTicker"}},"id":"6c874744-f775-4c4b-bb2c-90f889e629ac","type":"Grid"},{"attributes":{},"id":"f46c2454-df9a-42f6-8221-1485167a733e","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f2886ee2-de10-4570-aad7-740823529080","type":"PanTool"},{"id":"3c61946b-2042-4d7d-bfd8-f00805e9dc46","type":"WheelZoomTool"},{"id":"ce0ad475-46ef-442b-9a88-846e648eb4ee","type":"BoxZoomTool"},{"id":"16386904-0aff-4ffa-8de9-5ffc937c6d51","type":"SaveTool"},{"id":"67c42111-2eda-4a1e-a67b-988c617cc92a","type":"ResetTool"},{"id":"3cf69f0d-b888-491e-837b-cf20614bbf32","type":"HelpTool"}]},"id":"0f814aff-3c6a-467c-a757-ad049bd0db01","type":"Toolbar"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"9e683055-e32c-4efa-a8f2-e2471efd986d","type":"Range1d"},{"attributes":{},"id":"66ec67d3-95c1-42f3-b251-140f9e08a221","type":"BasicTicker"},{"attributes":{"below":[{"id":"6b2cd2da-aa98-4ba3-802c-2f2621847ac5","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"f0af4cd7-e1a8-45a5-a122-27fbbe4e6793","type":"LinearAxis"}],"renderers":[{"id":"d5e133f8-f388-4635-9163-262639160848","type":"BoxAnnotation"},{"id":"2ae3558c-16f0-4fee-98dd-ca41570284b7","type":"GlyphRenderer"},{"id":"df558070-ad8c-4373-b6f7-9fce5b5eb5f4","type":"GlyphRenderer"},{"id":"fd93241c-ea67-43a0-8808-70b7fa469d22","type":"Legend"},{"id":"6b2cd2da-aa98-4ba3-802c-2f2621847ac5","type":"LinearAxis"},{"id":"f0af4cd7-e1a8-45a5-a122-27fbbe4e6793","type":"LinearAxis"},{"id":"2d438820-fe3b-40ba-9297-b227d0ff1425","type":"Grid"},{"id":"6c874744-f775-4c4b-bb2c-90f889e629ac","type":"Grid"}],"title":{"id":"650ad765-02ab-42cf-999c-75868b7fd7c8","type":"Title"},"tool_events":{"id":"f46c2454-df9a-42f6-8221-1485167a733e","type":"ToolEvents"},"toolbar":{"id":"0f814aff-3c6a-467c-a757-ad049bd0db01","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"2ff92559-b67c-43b7-9a4f-aa44c31311e6","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"9e683055-e32c-4efa-a8f2-e2471efd986d","type":"Range1d"}},"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"}},"id":"3cf69f0d-b888-491e-837b-cf20614bbf32","type":"HelpTool"},{"attributes":{"data_source":{"id":"4a2ff6a8-79e1-46ea-acb4-6defef491e22","type":"ColumnDataSource"},"glyph":{"id":"166097d4-72d9-40f6-bd4a-7b3484a75be4","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2ae3558c-16f0-4fee-98dd-ca41570284b7","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"d5e133f8-f388-4635-9163-262639160848","type":"BoxAnnotation"},"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"}},"id":"ce0ad475-46ef-442b-9a88-846e648eb4ee","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"}},"id":"16386904-0aff-4ffa-8de9-5ffc937c6d51","type":"SaveTool"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"b93c00dd-e0fa-4b1e-83a1-55f5079a8d7a","type":"BasicTickFormatter"},"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"},"ticker":{"id":"6396bcc7-3c07-4231-963e-9acba4975dce","type":"BasicTicker"}},"id":"f0af4cd7-e1a8-45a5-a122-27fbbe4e6793","type":"LinearAxis"},{"attributes":{},"id":"e8c5cc60-ab8d-431f-8056-2bf506ece229","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"},"ticker":{"id":"66ec67d3-95c1-42f3-b251-140f9e08a221","type":"BasicTicker"}},"id":"2d438820-fe3b-40ba-9297-b227d0ff1425","type":"Grid"},{"attributes":{"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"}},"id":"3c61946b-2042-4d7d-bfd8-f00805e9dc46","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"2ff92559-b67c-43b7-9a4f-aa44c31311e6","type":"Range1d"},{"attributes":{"data_source":{"id":"5861ed63-6377-45d6-8eed-ea7069a7eeb4","type":"ColumnDataSource"},"glyph":{"id":"835d28be-3111-4603-8cad-ca7cf3b100a1","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"df558070-ad8c-4373-b6f7-9fce5b5eb5f4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"}},"id":"f2886ee2-de10-4570-aad7-740823529080","type":"PanTool"},{"attributes":{},"id":"6396bcc7-3c07-4231-963e-9acba4975dce","type":"BasicTicker"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"650ad765-02ab-42cf-999c-75868b7fd7c8","type":"Title"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"835d28be-3111-4603-8cad-ca7cf3b100a1","type":"Line"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"166097d4-72d9-40f6-bd4a-7b3484a75be4","type":"Line"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":{"__ndarray__":"H4XrUbge1T8fhetRuB7VPx+F61G4HtU/H4XrUbge1T/D9Shcj8LVP8P1KFyPwtU/rkfhehSu1z+uR+F6FK7XP65H4XoUrtc/rkfhehSu1z+uR+F6FK7XP65H4XoUrtc/rkfhehSu1z+uR+F6FK7XP/YoXI/C9dg/9ihcj8L12D89CtejcD3aPz0K16NwPdo/4XoUrkfh2j/hehSuR+HaPylcj8L1KNw/KVyPwvUo3D8pXI/C9SjcPylcj8L1KNw/KVyPwvUo3D8pXI/C9SjcP83MzMzMzNw/zczMzMzM3D9xPQrXo3DdP3E9CtejcN0/XI/C9Shc3z9cj8L1KFzfP1yPwvUoXN8/","dtype":"float64","shape":[33]}}},"id":"4a2ff6a8-79e1-46ea-acb4-6defef491e22","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"f08b169d-1a38-4073-b700-7b2f87756159","type":"LegendItem"},{"id":"4c3e55e4-37e0-4589-b147-cb50fde03ba5","type":"LegendItem"}],"location":"top_left","plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"}},"id":"fd93241c-ea67-43a0-8808-70b7fa469d22","type":"Legend"},{"attributes":{"axis_label":"index","formatter":{"id":"e8c5cc60-ab8d-431f-8056-2bf506ece229","type":"BasicTickFormatter"},"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"},"ticker":{"id":"66ec67d3-95c1-42f3-b251-140f9e08a221","type":"BasicTicker"}},"id":"6b2cd2da-aa98-4ba3-802c-2f2621847ac5","type":"LinearAxis"},{"attributes":{"plot":{"id":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c","subtype":"Chart","type":"Plot"}},"id":"67c42111-2eda-4a1e-a67b-988c617cc92a","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT/hehSuR+HKP+F6FK5H4co/cT0K16NwzT9xPQrXo3DNP3E9CtejcM0/cT0K16NwzT9xPQrXo3DNP3E9CtejcM0/cT0K16NwzT9xPQrXo3DNP7gehetRuM4/uB6F61G4zj+kcD0K16PQP6RwPQrXo9A/SOF6FK5H0T9I4XoUrkfRP+xRuB6F69E/7FG4HoXr0T/sUbgehevRP+xRuB6F69E/j8L1KFyP0j+PwvUoXI/SP3sUrkfhetQ/exSuR+F61D8fhetRuB7VPx+F61G4HtU/w/UoXI/C1T/D9Shcj8LVP2ZmZmZmZtY/","dtype":"float64","shape":[33]}}},"id":"5861ed63-6377-45d6-8eed-ea7069a7eeb4","type":"ColumnDataSource"},{"attributes":{},"id":"b93c00dd-e0fa-4b1e-83a1-55f5079a8d7a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d5e133f8-f388-4635-9163-262639160848","type":"BoxAnnotation"}],"root_ids":["c53c4c68-57e4-40f4-b06b-8fc458c08f7c"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"222485f7-be78-4959-b5f3-118f2c02acb3","elementid":"dde61fa8-6b2b-4346-bc61-fb1693de5435","modelid":"c53c4c68-57e4-40f4-b06b-8fc458c08f7c"}];
                
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
