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
      };var element = document.getElementById("15c6e692-4285-4b74-bbc9-183fa47d9cb9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '15c6e692-4285-4b74-bbc9-183fa47d9cb9' but no matching script tag was found. ")
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
                var docs_json = {"ece7cab6-c23c-4652-b698-be1bd59a5ccd":{"roots":{"references":[{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"6eda8d9e-c68b-4935-84f5-93167debbf2f","type":"Segment"},{"attributes":{"formatter":{"id":"9b35bdbc-dc78-4677-ab17-95ceffbf4070","type":"BasicTickFormatter"},"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdb94bd9-2be1-4999-8918-aa6bb73f0d52","type":"BasicTicker"}},"id":"bec8ce00-82f9-4d12-8148-5ef8d0b86506","type":"LinearAxis"},{"attributes":{"formatter":{"id":"2f9bfefb-eb50-4a5e-afe5-07e8c0e9967a","type":"BasicTickFormatter"},"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"},"ticker":{"id":"a909db9f-d659-4b21-855c-6b021ffe17a8","type":"BasicTicker"}},"id":"53c115cc-d9dc-40b0-b1a6-2f38caf0a499","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"fedc23c3-455d-4c89-9681-b9d415ebab9c","type":"Title"},{"attributes":{},"id":"9b35bdbc-dc78-4677-ab17-95ceffbf4070","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3b5c42d3-f40c-4442-97ee-e4328e27d65e","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"},"ticker":{"id":"a909db9f-d659-4b21-855c-6b021ffe17a8","type":"BasicTicker"}},"id":"6a542333-68a0-4e83-98c3-fbfbb836cc99","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1d6844f1-b963-45b5-a00c-e85c557835a9","type":"PanTool"},{"id":"c1c6c20f-bd46-4ef0-9c78-b2fc4fb6c39e","type":"WheelZoomTool"},{"id":"09fc3d8e-e4a0-4ccf-ac1c-164d9b9a03be","type":"BoxZoomTool"},{"id":"9a30f640-8078-47df-b6dd-bebee96f03df","type":"SaveTool"},{"id":"e2ef4a38-f196-4b1f-a50c-7b578e9b5f50","type":"ResetTool"},{"id":"fed02909-3b4e-47cd-b194-574e43dc69e0","type":"HelpTool"}]},"id":"6439125c-817a-43ff-9b59-a7fed750e5ba","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdb94bd9-2be1-4999-8918-aa6bb73f0d52","type":"BasicTicker"}},"id":"7bbea21d-f1ac-4772-a246-e3abaecb0a36","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"c92eddc2-489f-4368-82b2-591689fd66b5","type":"Segment"},{"attributes":{"below":[{"id":"53c115cc-d9dc-40b0-b1a6-2f38caf0a499","type":"LinearAxis"}],"left":[{"id":"bec8ce00-82f9-4d12-8148-5ef8d0b86506","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"53c115cc-d9dc-40b0-b1a6-2f38caf0a499","type":"LinearAxis"},{"id":"6a542333-68a0-4e83-98c3-fbfbb836cc99","type":"Grid"},{"id":"bec8ce00-82f9-4d12-8148-5ef8d0b86506","type":"LinearAxis"},{"id":"7bbea21d-f1ac-4772-a246-e3abaecb0a36","type":"Grid"},{"id":"3b5c42d3-f40c-4442-97ee-e4328e27d65e","type":"BoxAnnotation"},{"id":"e249481d-17f9-4eae-aeeb-4ca994a29585","type":"GlyphRenderer"}],"title":{"id":"fedc23c3-455d-4c89-9681-b9d415ebab9c","type":"Title"},"tool_events":{"id":"3154c268-23b7-4a2c-a1b5-789097974aa0","type":"ToolEvents"},"toolbar":{"id":"6439125c-817a-43ff-9b59-a7fed750e5ba","type":"Toolbar"},"x_range":{"id":"65efc51a-2238-447d-adc1-7a45b5a2f041","type":"DataRange1d"},"y_range":{"id":"d9b22b3c-188f-4636-9f8a-c5d40882586b","type":"DataRange1d"}},"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3154c268-23b7-4a2c-a1b5-789097974aa0","type":"ToolEvents"},{"attributes":{"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"}},"id":"fed02909-3b4e-47cd-b194-574e43dc69e0","type":"HelpTool"},{"attributes":{},"id":"a909db9f-d659-4b21-855c-6b021ffe17a8","type":"BasicTicker"},{"attributes":{"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"}},"id":"1d6844f1-b963-45b5-a00c-e85c557835a9","type":"PanTool"},{"attributes":{"callback":null},"id":"65efc51a-2238-447d-adc1-7a45b5a2f041","type":"DataRange1d"},{"attributes":{"callback":null},"id":"d9b22b3c-188f-4636-9f8a-c5d40882586b","type":"DataRange1d"},{"attributes":{"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"}},"id":"9a30f640-8078-47df-b6dd-bebee96f03df","type":"SaveTool"},{"attributes":{"overlay":{"id":"3b5c42d3-f40c-4442-97ee-e4328e27d65e","type":"BoxAnnotation"},"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"}},"id":"09fc3d8e-e4a0-4ccf-ac1c-164d9b9a03be","type":"BoxZoomTool"},{"attributes":{},"id":"2f9bfefb-eb50-4a5e-afe5-07e8c0e9967a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0f9036fa-8ace-430e-85cf-508be15bf7be","type":"ColumnDataSource"},"glyph":{"id":"6eda8d9e-c68b-4935-84f5-93167debbf2f","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c92eddc2-489f-4368-82b2-591689fd66b5","type":"Segment"},"selection_glyph":null},"id":"e249481d-17f9-4eae-aeeb-4ca994a29585","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"}},"id":"c1c6c20f-bd46-4ef0-9c78-b2fc4fb6c39e","type":"WheelZoomTool"},{"attributes":{},"id":"fdb94bd9-2be1-4999-8918-aa6bb73f0d52","type":"BasicTicker"},{"attributes":{"plot":{"id":"32260967-4342-4783-baac-9cb31fe1b416","subtype":"Figure","type":"Plot"}},"id":"e2ef4a38-f196-4b1f-a50c-7b578e9b5f50","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x0","x1","y1","y0"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"0f9036fa-8ace-430e-85cf-508be15bf7be","type":"ColumnDataSource"}],"root_ids":["32260967-4342-4783-baac-9cb31fe1b416"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"ece7cab6-c23c-4652-b698-be1bd59a5ccd","elementid":"15c6e692-4285-4b74-bbc9-183fa47d9cb9","modelid":"32260967-4342-4783-baac-9cb31fe1b416"}];
                
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
