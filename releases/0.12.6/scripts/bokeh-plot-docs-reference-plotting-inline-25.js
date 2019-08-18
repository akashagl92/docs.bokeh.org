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
      };var element = document.getElementById("90322de1-a8f2-40e5-ba32-00e34fbec419");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '90322de1-a8f2-40e5-ba32-00e34fbec419' but no matching script tag was found. ")
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
                var docs_json = {"968c98cb-ed76-4515-9e3c-97234eed8c7f":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec9d52b4-b691-4e05-b92a-4243abee86c9","type":"Wedge"},{"attributes":{},"id":"b88db22e-c687-466a-94bd-874360872ad6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"}},"id":"8b3fee55-fe57-4429-b02b-39a54258cef8","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"8613f876-45c6-4456-8828-2e39ed0b513c","type":"BasicTicker"}},"id":"af2fc991-3c86-4378-9c3e-146dcb164a73","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f4e36b79-7433-44c9-b64e-aaf652765117","type":"BoxAnnotation"},{"attributes":{},"id":"3d27dbd2-6dcc-4430-b184-e5e22b1d9a58","type":"LinearScale"},{"attributes":{"callback":null},"id":"febe7214-12e1-439f-929b-f149000d45c1","type":"DataRange1d"},{"attributes":{"below":[{"id":"ba699810-4ac7-4a74-be26-c7f6edaf1505","type":"LinearAxis"}],"left":[{"id":"10d4ca42-ef7d-4ad5-b588-8d54b1940abc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ba699810-4ac7-4a74-be26-c7f6edaf1505","type":"LinearAxis"},{"id":"10491c38-1ec0-4460-9121-41a9e624c53e","type":"Grid"},{"id":"10d4ca42-ef7d-4ad5-b588-8d54b1940abc","type":"LinearAxis"},{"id":"af2fc991-3c86-4378-9c3e-146dcb164a73","type":"Grid"},{"id":"f4e36b79-7433-44c9-b64e-aaf652765117","type":"BoxAnnotation"},{"id":"577d268a-2537-4fe2-bba0-dcd8eff6118a","type":"GlyphRenderer"}],"title":{"id":"f170c796-f2cf-42c8-906b-fcd85ba998b4","type":"Title"},"tool_events":{"id":"02ea50d7-cc57-4c2a-a1d5-1ca0c1891e8b","type":"ToolEvents"},"toolbar":{"id":"d070dcd7-9caa-4140-9052-8f39fc48d6cb","type":"Toolbar"},"x_range":{"id":"380b1734-8c77-4999-9660-8fc390ef8cd7","type":"DataRange1d"},"x_scale":{"id":"3d27dbd2-6dcc-4430-b184-e5e22b1d9a58","type":"LinearScale"},"y_range":{"id":"febe7214-12e1-439f-929b-f149000d45c1","type":"DataRange1d"},"y_scale":{"id":"c13630ff-a1a2-4ae9-a570-ba08723aef6a","type":"LinearScale"}},"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"}},"id":"bd7db21a-9ca1-4c60-8a67-452bf75911d5","type":"WheelZoomTool"},{"attributes":{},"id":"8613f876-45c6-4456-8828-2e39ed0b513c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"380b1734-8c77-4999-9660-8fc390ef8cd7","type":"DataRange1d"},{"attributes":{},"id":"02ea50d7-cc57-4c2a-a1d5-1ca0c1891e8b","type":"ToolEvents"},{"attributes":{"overlay":{"id":"f4e36b79-7433-44c9-b64e-aaf652765117","type":"BoxAnnotation"},"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"}},"id":"b96ae8f1-f86a-4a47-9410-ff5f73d2f74a","type":"BoxZoomTool"},{"attributes":{},"id":"37d792c2-6a4c-42c7-95b5-21a5c59eba6d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"}},"id":"bc044578-ddca-4873-9936-8a01639812cd","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"f170c796-f2cf-42c8-906b-fcd85ba998b4","type":"Title"},{"attributes":{"data_source":{"id":"85eb94c3-e0a0-4b99-a9ed-e2a40dcb5a2e","type":"ColumnDataSource"},"glyph":{"id":"ec9d52b4-b691-4e05-b92a-4243abee86c9","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2314b8dc-80a3-4e44-a813-96dc985d0dd7","type":"Wedge"},"selection_glyph":null},"id":"577d268a-2537-4fe2-bba0-dcd8eff6118a","type":"GlyphRenderer"},{"attributes":{},"id":"804bd9aa-3825-4d88-b263-15542c88e481","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2314b8dc-80a3-4e44-a813-96dc985d0dd7","type":"Wedge"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"85eb94c3-e0a0-4b99-a9ed-e2a40dcb5a2e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"}},"id":"5de12cd0-6523-44ce-908e-7cf2d5d689a1","type":"SaveTool"},{"attributes":{"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"804bd9aa-3825-4d88-b263-15542c88e481","type":"BasicTicker"}},"id":"10491c38-1ec0-4460-9121-41a9e624c53e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8b3fee55-fe57-4429-b02b-39a54258cef8","type":"PanTool"},{"id":"bd7db21a-9ca1-4c60-8a67-452bf75911d5","type":"WheelZoomTool"},{"id":"b96ae8f1-f86a-4a47-9410-ff5f73d2f74a","type":"BoxZoomTool"},{"id":"5de12cd0-6523-44ce-908e-7cf2d5d689a1","type":"SaveTool"},{"id":"b2ec9487-4ae2-4a95-9fd0-beda0ea787d2","type":"ResetTool"},{"id":"bc044578-ddca-4873-9936-8a01639812cd","type":"HelpTool"}]},"id":"d070dcd7-9caa-4140-9052-8f39fc48d6cb","type":"Toolbar"},{"attributes":{"formatter":{"id":"b88db22e-c687-466a-94bd-874360872ad6","type":"BasicTickFormatter"},"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"804bd9aa-3825-4d88-b263-15542c88e481","type":"BasicTicker"}},"id":"ba699810-4ac7-4a74-be26-c7f6edaf1505","type":"LinearAxis"},{"attributes":{"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"}},"id":"b2ec9487-4ae2-4a95-9fd0-beda0ea787d2","type":"ResetTool"},{"attributes":{"formatter":{"id":"37d792c2-6a4c-42c7-95b5-21a5c59eba6d","type":"BasicTickFormatter"},"plot":{"id":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7","subtype":"Figure","type":"Plot"},"ticker":{"id":"8613f876-45c6-4456-8828-2e39ed0b513c","type":"BasicTicker"}},"id":"10d4ca42-ef7d-4ad5-b588-8d54b1940abc","type":"LinearAxis"},{"attributes":{},"id":"c13630ff-a1a2-4ae9-a570-ba08723aef6a","type":"LinearScale"}],"root_ids":["56d4efbb-3f26-469e-99a4-dcb5c34ee1e7"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"968c98cb-ed76-4515-9e3c-97234eed8c7f","elementid":"90322de1-a8f2-40e5-ba32-00e34fbec419","modelid":"56d4efbb-3f26-469e-99a4-dcb5c34ee1e7"}];
                
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
