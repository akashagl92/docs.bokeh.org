(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("8399398f-ba7c-4e3e-84c7-d6f3986ba614");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8399398f-ba7c-4e3e-84c7-d6f3986ba614' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"a9d2f95b-9077-4f20-8393-b32eadfa850d":{"roots":{"references":[{"attributes":{},"id":"de4c5330-45e3-4483-8c7b-4a4d75e7390c","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"297f5739-e286-452e-b9bb-ec8ca56562ac","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd4e32c2-5419-4eff-827c-97a73634248c","type":"Circle"},{"attributes":{"callback":null},"id":"4e1863ba-154d-4a7c-8a4f-2fc149cb53aa","type":"DataRange1d"},{"attributes":{"plot":{"id":"2e311149-da7a-4f72-b9f4-443756f9ba5b","subtype":"Figure","type":"Plot"},"ticker":{"id":"364d9b3c-1088-4a0c-a45e-84697a83ed09","type":"BasicTicker"}},"id":"f24c0bd8-94db-4ffd-ae01-1110424af515","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b316b29-4600-43e4-a096-bd27b7cb0199","type":"Circle"},{"attributes":{},"id":"711e783b-e8e0-40db-95ee-57fbf406c67a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e2f33c42-6c44-4c2c-8c3d-e93f1705d302","type":"BasicTickFormatter"},"plot":{"id":"2e311149-da7a-4f72-b9f4-443756f9ba5b","subtype":"Figure","type":"Plot"},"ticker":{"id":"364d9b3c-1088-4a0c-a45e-84697a83ed09","type":"BasicTicker"}},"id":"611805b7-e270-47b2-9ebb-6170a9c9e406","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c071e5dd-6fe4-4272-b22c-a66887a31506","type":"ColumnDataSource"},"glyph":{"id":"1b316b29-4600-43e4-a096-bd27b7cb0199","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bd4e32c2-5419-4eff-827c-97a73634248c","type":"Circle"},"selection_glyph":null,"view":{"id":"b26121b7-a748-4e69-ab89-b784be808dad","type":"CDSView"}},"id":"2dbed09c-79be-4ec1-9fb8-4a3868dc2d15","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"c6aaba19-26b2-40cb-9a4f-ae50743e55e5","type":"DataRange1d"},{"attributes":{},"id":"364d9b3c-1088-4a0c-a45e-84697a83ed09","type":"BasicTicker"},{"attributes":{},"id":"af97cd7b-b894-409c-9572-b581bb6f3218","type":"LinearScale"},{"attributes":{"formatter":{"id":"711e783b-e8e0-40db-95ee-57fbf406c67a","type":"BasicTickFormatter"},"plot":{"id":"2e311149-da7a-4f72-b9f4-443756f9ba5b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca453f05-0c64-436e-af54-451d52acf882","type":"BasicTicker"}},"id":"573f6832-57aa-46a3-819b-75906e6d1e61","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c071e5dd-6fe4-4272-b22c-a66887a31506","type":"ColumnDataSource"},{"attributes":{},"id":"ca453f05-0c64-436e-af54-451d52acf882","type":"BasicTicker"},{"attributes":{"below":[{"id":"611805b7-e270-47b2-9ebb-6170a9c9e406","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"573f6832-57aa-46a3-819b-75906e6d1e61","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"611805b7-e270-47b2-9ebb-6170a9c9e406","type":"LinearAxis"},{"id":"f24c0bd8-94db-4ffd-ae01-1110424af515","type":"Grid"},{"id":"573f6832-57aa-46a3-819b-75906e6d1e61","type":"LinearAxis"},{"id":"af4bf9b4-643d-4f58-8203-f3cc6943bedf","type":"Grid"},{"id":"cbef34f9-074f-47b8-b76e-631224068e9a","type":"BoxAnnotation"},{"id":"2dbed09c-79be-4ec1-9fb8-4a3868dc2d15","type":"GlyphRenderer"}],"title":{"id":"297f5739-e286-452e-b9bb-ec8ca56562ac","type":"Title"},"toolbar":{"id":"34961259-ee60-496d-bb83-15035b6bf3b5","type":"Toolbar"},"x_range":{"id":"4e1863ba-154d-4a7c-8a4f-2fc149cb53aa","type":"DataRange1d"},"x_scale":{"id":"af97cd7b-b894-409c-9572-b581bb6f3218","type":"LinearScale"},"y_range":{"id":"c6aaba19-26b2-40cb-9a4f-ae50743e55e5","type":"DataRange1d"},"y_scale":{"id":"5b9e511e-0be5-4d76-8df3-e02a7cbc3dd9","type":"LinearScale"}},"id":"2e311149-da7a-4f72-b9f4-443756f9ba5b","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"2e311149-da7a-4f72-b9f4-443756f9ba5b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca453f05-0c64-436e-af54-451d52acf882","type":"BasicTicker"}},"id":"af4bf9b4-643d-4f58-8203-f3cc6943bedf","type":"Grid"},{"attributes":{},"id":"e2f33c42-6c44-4c2c-8c3d-e93f1705d302","type":"BasicTickFormatter"},{"attributes":{},"id":"9db267c1-7ef3-4d73-bc20-29b16aa8eaaf","type":"PanTool"},{"attributes":{"source":{"id":"c071e5dd-6fe4-4272-b22c-a66887a31506","type":"ColumnDataSource"}},"id":"b26121b7-a748-4e69-ab89-b784be808dad","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cbef34f9-074f-47b8-b76e-631224068e9a","type":"BoxAnnotation"},{"attributes":{},"id":"baeac335-950e-46ad-951d-e3ed32dbb87a","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9db267c1-7ef3-4d73-bc20-29b16aa8eaaf","type":"PanTool"},{"id":"baeac335-950e-46ad-951d-e3ed32dbb87a","type":"WheelZoomTool"},{"id":"de7d034c-e9f5-4f96-b2b1-0aa0b02cc304","type":"BoxZoomTool"},{"id":"7ba98ed5-dfb3-4bdd-aa17-88fb15896d05","type":"SaveTool"},{"id":"776686b5-987a-4164-9060-60f90392f175","type":"ResetTool"},{"id":"de4c5330-45e3-4483-8c7b-4a4d75e7390c","type":"HelpTool"}]},"id":"34961259-ee60-496d-bb83-15035b6bf3b5","type":"Toolbar"},{"attributes":{},"id":"5b9e511e-0be5-4d76-8df3-e02a7cbc3dd9","type":"LinearScale"},{"attributes":{},"id":"7ba98ed5-dfb3-4bdd-aa17-88fb15896d05","type":"SaveTool"},{"attributes":{},"id":"776686b5-987a-4164-9060-60f90392f175","type":"ResetTool"},{"attributes":{"overlay":{"id":"cbef34f9-074f-47b8-b76e-631224068e9a","type":"BoxAnnotation"}},"id":"de7d034c-e9f5-4f96-b2b1-0aa0b02cc304","type":"BoxZoomTool"}],"root_ids":["2e311149-da7a-4f72-b9f4-443756f9ba5b"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a9d2f95b-9077-4f20-8393-b32eadfa850d","elementid":"8399398f-ba7c-4e3e-84c7-d6f3986ba614","modelid":"2e311149-da7a-4f72-b9f4-443756f9ba5b"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
