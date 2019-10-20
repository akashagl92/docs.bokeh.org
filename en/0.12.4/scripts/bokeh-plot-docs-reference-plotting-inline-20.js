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
      };var element = document.getElementById("d3d0b54b-56ae-4a41-b11d-ead3295dcbae");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd3d0b54b-56ae-4a41-b11d-ead3295dcbae' but no matching script tag was found. ")
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
                var docs_json = {"fcce9593-48cd-489b-8b9b-3951d6b1a657":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7a71c1df-b25a-47ef-a799-899ef4510d6b","type":"PanTool"},{"id":"d0fe3cf6-f2f5-4e12-8a2a-1f9004df6197","type":"WheelZoomTool"},{"id":"04d29ad2-502b-4489-97e5-9dbaf2477f3e","type":"BoxZoomTool"},{"id":"455db960-1834-4da4-8a50-d66708503f36","type":"SaveTool"},{"id":"0cba9d46-74b8-43d4-8302-098c94c6166c","type":"ResetTool"},{"id":"f483fd92-e997-4fbb-8289-3bc882500847","type":"HelpTool"}]},"id":"c8db12e1-e7cb-41a8-8317-01705f8f31a5","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"fa766769-b248-4afa-b99b-e277ebb8f647","type":"Title"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"50aba375-0b2a-4fa0-8584-097771c2de14","type":"Square"},{"attributes":{},"id":"fdcd4f04-2964-422d-a43a-0fa2e8e33738","type":"BasicTickFormatter"},{"attributes":{},"id":"ab4b2568-6bc7-4b80-b196-4fe6a1d690a7","type":"ToolEvents"},{"attributes":{"data_source":{"id":"61d69710-ac5b-4705-8719-17ca5ab594dd","type":"ColumnDataSource"},"glyph":{"id":"50aba375-0b2a-4fa0-8584-097771c2de14","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"8cf74597-fa37-4466-9f19-b0b3c3be37f8","type":"Square"},"selection_glyph":null},"id":"5b7f1816-44cc-4019-af1b-b30fb953e648","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8ae159be-8977-49d0-8fe0-3f2b8446580e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d0c348c8-4623-42d3-860a-4947d588b98c","type":"BasicTickFormatter"},"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f709c774-de7b-4626-a107-de5d0fb6f515","type":"BasicTicker"}},"id":"f6f64e62-1529-4e18-90cf-e5ba51a605d2","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8cf74597-fa37-4466-9f19-b0b3c3be37f8","type":"Square"},{"attributes":{"overlay":{"id":"b5ddec65-13d3-4bbe-a92e-e4f728d5b97e","type":"BoxAnnotation"},"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"}},"id":"04d29ad2-502b-4489-97e5-9dbaf2477f3e","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"}},"id":"7a71c1df-b25a-47ef-a799-899ef4510d6b","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d5ad701-8df1-4f6c-a501-e1c912f62db3","type":"BasicTicker"}},"id":"0fa4a8a5-818a-47aa-984b-bde0f1ff9e27","type":"Grid"},{"attributes":{},"id":"d0c348c8-4623-42d3-860a-4947d588b98c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"fdcd4f04-2964-422d-a43a-0fa2e8e33738","type":"BasicTickFormatter"},"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d5ad701-8df1-4f6c-a501-e1c912f62db3","type":"BasicTicker"}},"id":"28a98199-2506-47f9-8c4d-7eb98d49ad06","type":"LinearAxis"},{"attributes":{"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f709c774-de7b-4626-a107-de5d0fb6f515","type":"BasicTicker"}},"id":"a0673002-171d-4be9-b2f8-c4b8a44eee8c","type":"Grid"},{"attributes":{"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"}},"id":"d0fe3cf6-f2f5-4e12-8a2a-1f9004df6197","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"}},"id":"f483fd92-e997-4fbb-8289-3bc882500847","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b5ddec65-13d3-4bbe-a92e-e4f728d5b97e","type":"BoxAnnotation"},{"attributes":{},"id":"1d5ad701-8df1-4f6c-a501-e1c912f62db3","type":"BasicTicker"},{"attributes":{"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"}},"id":"455db960-1834-4da4-8a50-d66708503f36","type":"SaveTool"},{"attributes":{"below":[{"id":"f6f64e62-1529-4e18-90cf-e5ba51a605d2","type":"LinearAxis"}],"left":[{"id":"28a98199-2506-47f9-8c4d-7eb98d49ad06","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f6f64e62-1529-4e18-90cf-e5ba51a605d2","type":"LinearAxis"},{"id":"a0673002-171d-4be9-b2f8-c4b8a44eee8c","type":"Grid"},{"id":"28a98199-2506-47f9-8c4d-7eb98d49ad06","type":"LinearAxis"},{"id":"0fa4a8a5-818a-47aa-984b-bde0f1ff9e27","type":"Grid"},{"id":"b5ddec65-13d3-4bbe-a92e-e4f728d5b97e","type":"BoxAnnotation"},{"id":"5b7f1816-44cc-4019-af1b-b30fb953e648","type":"GlyphRenderer"}],"title":{"id":"fa766769-b248-4afa-b99b-e277ebb8f647","type":"Title"},"tool_events":{"id":"ab4b2568-6bc7-4b80-b196-4fe6a1d690a7","type":"ToolEvents"},"toolbar":{"id":"c8db12e1-e7cb-41a8-8317-01705f8f31a5","type":"Toolbar"},"x_range":{"id":"1b2bfba0-205c-47ea-8849-f486c0581464","type":"DataRange1d"},"y_range":{"id":"8ae159be-8977-49d0-8fe0-3f2b8446580e","type":"DataRange1d"}},"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"1b2bfba0-205c-47ea-8849-f486c0581464","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"61d69710-ac5b-4705-8719-17ca5ab594dd","type":"ColumnDataSource"},{"attributes":{},"id":"f709c774-de7b-4626-a107-de5d0fb6f515","type":"BasicTicker"},{"attributes":{"plot":{"id":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2","subtype":"Figure","type":"Plot"}},"id":"0cba9d46-74b8-43d4-8302-098c94c6166c","type":"ResetTool"}],"root_ids":["3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"fcce9593-48cd-489b-8b9b-3951d6b1a657","elementid":"d3d0b54b-56ae-4a41-b11d-ead3295dcbae","modelid":"3125eaa6-c52c-4ec6-a5a2-eb1a72f1a4d2"}];
                
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
