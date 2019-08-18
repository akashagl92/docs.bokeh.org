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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("7cbb6e08-f136-4646-b2d3-bbda29f9db88");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7cbb6e08-f136-4646-b2d3-bbda29f9db88' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"ba7ea29e-e738-4659-a943-95e2c882cce1":{"roots":{"references":[{"attributes":{},"id":"99a5c0bb-c4f9-4d72-8321-53cbbc630c43","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1ad1cc2-1b6b-4ef0-97d2-2208508930f2","type":"BasicTicker"}},"id":"0e8b2e2d-b04d-4eb3-9f46-c24c0c37c38b","type":"Grid"},{"attributes":{},"id":"7038fdb4-21e7-46b2-ae81-9f8852af83b0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"3a6f2ca1-40cb-475e-b8f0-ff4f53f9a2a5","type":"ColumnDataSource"},{"attributes":{},"id":"26be41ea-26f7-4b3d-a009-93ca8ffe9178","type":"BasicTickFormatter"},{"attributes":{},"id":"52213ab5-930c-4e21-aec7-067eeb27d805","type":"ToolEvents"},{"attributes":{},"id":"d1ad1cc2-1b6b-4ef0-97d2-2208508930f2","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa1e0c3a-2152-4aa8-abfa-6af26fd62745","type":"Circle"},{"attributes":{"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"}},"id":"2666cf4f-bb10-4f20-93d6-ee391b8590b8","type":"PanTool"},{"attributes":{},"id":"3986b1f6-a0d1-46a9-bb97-7a6724b32a08","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2666cf4f-bb10-4f20-93d6-ee391b8590b8","type":"PanTool"},{"id":"d56831a7-78a8-4855-a9b9-f27425080fdf","type":"WheelZoomTool"},{"id":"1176f934-2aaf-4a1d-96dc-fbb2454c838c","type":"BoxZoomTool"},{"id":"6490c935-2736-463d-ae75-bd452010fad1","type":"SaveTool"},{"id":"b8e96153-0167-4fa9-9c28-3651f4bc1cd4","type":"ResetTool"},{"id":"e45bda16-e80e-41d4-b1a1-6ba28e7f879e","type":"HelpTool"}]},"id":"4da0700f-4810-4da8-9362-545dcf367e29","type":"Toolbar"},{"attributes":{"formatter":{"id":"d1f3fc86-1495-4e15-ae88-56e90c92ae3c","type":"BasicTickFormatter"},"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"},"ticker":{"id":"7038fdb4-21e7-46b2-ae81-9f8852af83b0","type":"BasicTicker"}},"id":"cba3c8b0-2165-49d4-aeb7-f6bab63e1d42","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d442aa2c-357f-47ea-8eab-2773e00a3057","type":"Circle"},{"attributes":{"callback":null},"id":"83a3293e-4325-4b0e-8799-d5bc8e03f3a5","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3a6f2ca1-40cb-475e-b8f0-ff4f53f9a2a5","type":"ColumnDataSource"},"glyph":{"id":"d442aa2c-357f-47ea-8eab-2773e00a3057","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa1e0c3a-2152-4aa8-abfa-6af26fd62745","type":"Circle"},"selection_glyph":null},"id":"cd358643-d2ff-4fae-ba2f-0e887fdbd7f7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"}},"id":"6490c935-2736-463d-ae75-bd452010fad1","type":"SaveTool"},{"attributes":{"overlay":{"id":"bab30ad7-0213-4a24-8e75-d4cb1690e721","type":"BoxAnnotation"},"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"}},"id":"1176f934-2aaf-4a1d-96dc-fbb2454c838c","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"82e1e79a-a5d8-49e9-9a6f-0fb3a2e403f0","type":"DataRange1d"},{"attributes":{},"id":"d1f3fc86-1495-4e15-ae88-56e90c92ae3c","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bab30ad7-0213-4a24-8e75-d4cb1690e721","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"}},"id":"e45bda16-e80e-41d4-b1a1-6ba28e7f879e","type":"HelpTool"},{"attributes":{"below":[{"id":"cba3c8b0-2165-49d4-aeb7-f6bab63e1d42","type":"LinearAxis"}],"left":[{"id":"bfb72638-b5c4-471d-8de8-de221e998d34","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cba3c8b0-2165-49d4-aeb7-f6bab63e1d42","type":"LinearAxis"},{"id":"f9650a88-3208-44f5-8729-1465cf687ebe","type":"Grid"},{"id":"bfb72638-b5c4-471d-8de8-de221e998d34","type":"LinearAxis"},{"id":"0e8b2e2d-b04d-4eb3-9f46-c24c0c37c38b","type":"Grid"},{"id":"bab30ad7-0213-4a24-8e75-d4cb1690e721","type":"BoxAnnotation"},{"id":"cd358643-d2ff-4fae-ba2f-0e887fdbd7f7","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"52213ab5-930c-4e21-aec7-067eeb27d805","type":"ToolEvents"},"toolbar":{"id":"4da0700f-4810-4da8-9362-545dcf367e29","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"82e1e79a-a5d8-49e9-9a6f-0fb3a2e403f0","type":"DataRange1d"},"x_scale":{"id":"3986b1f6-a0d1-46a9-bb97-7a6724b32a08","type":"LinearScale"},"y_range":{"id":"83a3293e-4325-4b0e-8799-d5bc8e03f3a5","type":"DataRange1d"},"y_scale":{"id":"99a5c0bb-c4f9-4d72-8321-53cbbc630c43","type":"LinearScale"}},"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"}},"id":"b8e96153-0167-4fa9-9c28-3651f4bc1cd4","type":"ResetTool"},{"attributes":{"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"},"ticker":{"id":"7038fdb4-21e7-46b2-ae81-9f8852af83b0","type":"BasicTicker"}},"id":"f9650a88-3208-44f5-8729-1465cf687ebe","type":"Grid"},{"attributes":{"formatter":{"id":"26be41ea-26f7-4b3d-a009-93ca8ffe9178","type":"BasicTickFormatter"},"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1ad1cc2-1b6b-4ef0-97d2-2208508930f2","type":"BasicTicker"}},"id":"bfb72638-b5c4-471d-8de8-de221e998d34","type":"LinearAxis"},{"attributes":{"plot":{"id":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711","subtype":"Figure","type":"Plot"}},"id":"d56831a7-78a8-4855-a9b9-f27425080fdf","type":"WheelZoomTool"}],"root_ids":["f5a4d9f6-b0b2-4a38-a046-2e626a4e2711"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ba7ea29e-e738-4659-a943-95e2c882cce1","elementid":"7cbb6e08-f136-4646-b2d3-bbda29f9db88","modelid":"f5a4d9f6-b0b2-4a38-a046-2e626a4e2711"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
