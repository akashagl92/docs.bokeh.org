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
      };var element = document.getElementById("1a20b206-0065-4326-947c-faa658cfeb8c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1a20b206-0065-4326-947c-faa658cfeb8c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d850c523-29d0-4090-893c-29ac93e23170":{"roots":{"references":[{"attributes":{"formatter":{"id":"4ee307a9-b3f9-4030-843d-e8f7d650f868","type":"BasicTickFormatter"},"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"e31ebdad-8a8c-4a75-89f0-b9dfde74534b","type":"BasicTicker"}},"id":"a1c2eb9d-ef9f-40fe-92d9-7d71eccaa734","type":"LinearAxis"},{"attributes":{"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"}},"id":"c876c5bd-6901-4d24-b6b7-ba2360efffbb","type":"SaveTool"},{"attributes":{"below":[{"id":"a2a952d8-85d5-4627-8808-d26eedbd9bc3","type":"LinearAxis"}],"left":[{"id":"a1c2eb9d-ef9f-40fe-92d9-7d71eccaa734","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a2a952d8-85d5-4627-8808-d26eedbd9bc3","type":"LinearAxis"},{"id":"09669e43-5eaf-4d2d-a388-b0a4fd59729e","type":"Grid"},{"id":"a1c2eb9d-ef9f-40fe-92d9-7d71eccaa734","type":"LinearAxis"},{"id":"741767ed-23d3-4351-a7ff-861468800515","type":"Grid"},{"id":"2d329e19-d0c2-4508-9a5c-98304e0333aa","type":"BoxAnnotation"},{"id":"8c2367b9-82e2-44c8-be47-6243dc1a24d0","type":"GlyphRenderer"}],"title":{"id":"7f2de981-ec67-48df-86ac-76f8514c2881","type":"Title"},"tool_events":{"id":"a0c035f6-005c-4f09-932e-22fd9e089ae2","type":"ToolEvents"},"toolbar":{"id":"04dd3f7c-9df9-4dfb-8836-c18a493d2352","type":"Toolbar"},"x_range":{"id":"361520a3-3d1d-403a-9963-e62522931abb","type":"DataRange1d"},"y_range":{"id":"b6887b00-6e21-4c33-80a0-a6abb91a035c","type":"DataRange1d"}},"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c7428db2-ac86-4f9c-833b-277f78cef721","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"2d329e19-d0c2-4508-9a5c-98304e0333aa","type":"BoxAnnotation"},"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"}},"id":"f9667259-6240-42ca-a8f9-1e22be885d26","type":"BoxZoomTool"},{"attributes":{},"id":"a0c035f6-005c-4f09-932e-22fd9e089ae2","type":"ToolEvents"},{"attributes":{"callback":null},"id":"361520a3-3d1d-403a-9963-e62522931abb","type":"DataRange1d"},{"attributes":{},"id":"4ee307a9-b3f9-4030-843d-e8f7d650f868","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"7f2de981-ec67-48df-86ac-76f8514c2881","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7dffe05a-240d-4ea4-a78f-eb4cba6ef1ee","type":"PanTool"},{"id":"ee04cbe9-fa3a-41d9-9ca2-94232221a47e","type":"WheelZoomTool"},{"id":"f9667259-6240-42ca-a8f9-1e22be885d26","type":"BoxZoomTool"},{"id":"c876c5bd-6901-4d24-b6b7-ba2360efffbb","type":"SaveTool"},{"id":"317a791a-d2f5-48e4-9234-9d01c8fb97ac","type":"ResetTool"},{"id":"69c7b8dd-4d41-4a8c-83a1-22ff7a50fbd6","type":"HelpTool"}]},"id":"04dd3f7c-9df9-4dfb-8836-c18a493d2352","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"fba95a46-01c9-4518-b673-38f7a9f27b5f","type":"Circle"},{"attributes":{},"id":"7d82e399-2838-4db0-98c2-b400ddeb4d6a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"e31ebdad-8a8c-4a75-89f0-b9dfde74534b","type":"BasicTicker"}},"id":"741767ed-23d3-4351-a7ff-861468800515","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2d329e19-d0c2-4508-9a5c-98304e0333aa","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ec51701-3278-41cb-a4c8-42a80c8f0936","type":"Circle"},{"attributes":{},"id":"e31ebdad-8a8c-4a75-89f0-b9dfde74534b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b6887b00-6e21-4c33-80a0-a6abb91a035c","type":"DataRange1d"},{"attributes":{"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"}},"id":"ee04cbe9-fa3a-41d9-9ca2-94232221a47e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d82e399-2838-4db0-98c2-b400ddeb4d6a","type":"BasicTicker"}},"id":"09669e43-5eaf-4d2d-a388-b0a4fd59729e","type":"Grid"},{"attributes":{"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"}},"id":"69c7b8dd-4d41-4a8c-83a1-22ff7a50fbd6","type":"HelpTool"},{"attributes":{"data_source":{"id":"fbe1a382-0d13-402e-9ce7-eb3de0d51d0c","type":"ColumnDataSource"},"glyph":{"id":"8ec51701-3278-41cb-a4c8-42a80c8f0936","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"fba95a46-01c9-4518-b673-38f7a9f27b5f","type":"Circle"},"selection_glyph":null},"id":"8c2367b9-82e2-44c8-be47-6243dc1a24d0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"fbe1a382-0d13-402e-9ce7-eb3de0d51d0c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"}},"id":"7dffe05a-240d-4ea4-a78f-eb4cba6ef1ee","type":"PanTool"},{"attributes":{"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"}},"id":"317a791a-d2f5-48e4-9234-9d01c8fb97ac","type":"ResetTool"},{"attributes":{"formatter":{"id":"c7428db2-ac86-4f9c-833b-277f78cef721","type":"BasicTickFormatter"},"plot":{"id":"d85daf81-37a5-411e-8c6c-87a3630e48f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d82e399-2838-4db0-98c2-b400ddeb4d6a","type":"BasicTicker"}},"id":"a2a952d8-85d5-4627-8808-d26eedbd9bc3","type":"LinearAxis"}],"root_ids":["d85daf81-37a5-411e-8c6c-87a3630e48f3"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d850c523-29d0-4090-893c-29ac93e23170","elementid":"1a20b206-0065-4326-947c-faa658cfeb8c","modelid":"d85daf81-37a5-411e-8c6c-87a3630e48f3"}];
              
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