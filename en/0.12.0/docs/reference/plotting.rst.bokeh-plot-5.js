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
      };var element = document.getElementById("9f95ec83-bba4-440b-a41f-28240adb9c53");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f95ec83-bba4-440b-a41f-28240adb9c53' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"b7ce2e53-24c0-4565-ba11-56b0680530eb":{"roots":{"references":[{"attributes":{"callback":null},"id":"8deeeb11-0fe0-43c6-8849-c062fd5cf9b4","type":"DataRange1d"},{"attributes":{},"id":"330d26d1-a2f3-405e-9a5a-07d049e953f1","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"d0f855c5-7754-45de-abad-1fe45d6bb9ca","type":"Title"},{"attributes":{"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"}},"id":"be47904d-3d2a-444b-b6c6-9c8b0c2e2fc4","type":"SaveTool"},{"attributes":{"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"}},"id":"91c98922-cd50-4703-8696-11ecb5460b51","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10ed87ac-b450-467c-8afb-b8a435233db1","type":"BoxAnnotation"},{"attributes":{},"id":"eefe71a7-6b22-4914-9150-aee1afb6fc37","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"74f2bc64-7dc5-4f8e-85ee-9b80d59e942a","type":"PanTool"},{"id":"66173582-aa12-43f4-963c-c191af3b6130","type":"WheelZoomTool"},{"id":"f2d690d6-7ab4-4ab3-881a-2b4c90ac2cd4","type":"BoxZoomTool"},{"id":"be47904d-3d2a-444b-b6c6-9c8b0c2e2fc4","type":"SaveTool"},{"id":"76f0c000-c690-4fcc-b8f8-c2f1103945ef","type":"ResetTool"},{"id":"91c98922-cd50-4703-8696-11ecb5460b51","type":"HelpTool"}]},"id":"c6833db3-74e2-4448-a71c-436cfb9b67de","type":"Toolbar"},{"attributes":{"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"}},"id":"76f0c000-c690-4fcc-b8f8-c2f1103945ef","type":"ResetTool"},{"attributes":{"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2d05735-d95e-4c89-982f-3fb23783448a","type":"BasicTicker"}},"id":"6d3d6c1c-ab8a-4bfa-85de-23b710328275","type":"Grid"},{"attributes":{"formatter":{"id":"e10cc4be-e6df-4130-93a3-a91b4f451f0c","type":"BasicTickFormatter"},"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"},"ticker":{"id":"330d26d1-a2f3-405e-9a5a-07d049e953f1","type":"BasicTicker"}},"id":"f0e8128f-f2c9-40b2-9482-ef8a5a5a7e6b","type":"LinearAxis"},{"attributes":{},"id":"a2d05735-d95e-4c89-982f-3fb23783448a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"1a7140c3-45a2-4bc3-ab49-9560d29dc3b2","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"eefe71a7-6b22-4914-9150-aee1afb6fc37","type":"BasicTickFormatter"},"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2d05735-d95e-4c89-982f-3fb23783448a","type":"BasicTicker"}},"id":"310827db-b985-4105-bb51-246d66e94ea8","type":"LinearAxis"},{"attributes":{},"id":"e10cc4be-e6df-4130-93a3-a91b4f451f0c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"}},"id":"66173582-aa12-43f4-963c-c191af3b6130","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1a7140c3-45a2-4bc3-ab49-9560d29dc3b2","type":"ColumnDataSource"},"glyph":{"id":"800483db-b4d4-4ef8-846d-800919f61c22","type":"Cross"},"hover_glyph":null,"nonselection_glyph":{"id":"6352e6c6-b2b7-44db-a6fe-45eaa47d275d","type":"Cross"},"selection_glyph":null},"id":"fe283584-2261-40df-9bf1-0683468380b3","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"},"ticker":{"id":"330d26d1-a2f3-405e-9a5a-07d049e953f1","type":"BasicTicker"}},"id":"f90d006f-a0e6-403b-b403-70c473682e9d","type":"Grid"},{"attributes":{"callback":null},"id":"6e67534e-1617-4704-9c43-1abe82b56362","type":"DataRange1d"},{"attributes":{"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"}},"id":"74f2bc64-7dc5-4f8e-85ee-9b80d59e942a","type":"PanTool"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"800483db-b4d4-4ef8-846d-800919f61c22","type":"Cross"},{"attributes":{"overlay":{"id":"10ed87ac-b450-467c-8afb-b8a435233db1","type":"BoxAnnotation"},"plot":{"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"}},"id":"f2d690d6-7ab4-4ab3-881a-2b4c90ac2cd4","type":"BoxZoomTool"},{"attributes":{},"id":"f86fdd95-bfb5-44de-bd81-d683f1fc2823","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"6352e6c6-b2b7-44db-a6fe-45eaa47d275d","type":"Cross"},{"attributes":{"below":[{"id":"310827db-b985-4105-bb51-246d66e94ea8","type":"LinearAxis"}],"left":[{"id":"f0e8128f-f2c9-40b2-9482-ef8a5a5a7e6b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"310827db-b985-4105-bb51-246d66e94ea8","type":"LinearAxis"},{"id":"6d3d6c1c-ab8a-4bfa-85de-23b710328275","type":"Grid"},{"id":"f0e8128f-f2c9-40b2-9482-ef8a5a5a7e6b","type":"LinearAxis"},{"id":"f90d006f-a0e6-403b-b403-70c473682e9d","type":"Grid"},{"id":"10ed87ac-b450-467c-8afb-b8a435233db1","type":"BoxAnnotation"},{"id":"fe283584-2261-40df-9bf1-0683468380b3","type":"GlyphRenderer"}],"title":{"id":"d0f855c5-7754-45de-abad-1fe45d6bb9ca","type":"Title"},"tool_events":{"id":"f86fdd95-bfb5-44de-bd81-d683f1fc2823","type":"ToolEvents"},"toolbar":{"id":"c6833db3-74e2-4448-a71c-436cfb9b67de","type":"Toolbar"},"x_range":{"id":"8deeeb11-0fe0-43c6-8849-c062fd5cf9b4","type":"DataRange1d"},"y_range":{"id":"6e67534e-1617-4704-9c43-1abe82b56362","type":"DataRange1d"}},"id":"3090ff91-fc46-45f9-8f47-b396b81813df","subtype":"Figure","type":"Plot"}],"root_ids":["3090ff91-fc46-45f9-8f47-b396b81813df"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"b7ce2e53-24c0-4565-ba11-56b0680530eb","elementid":"9f95ec83-bba4-440b-a41f-28240adb9c53","modelid":"3090ff91-fc46-45f9-8f47-b396b81813df"}];
              
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