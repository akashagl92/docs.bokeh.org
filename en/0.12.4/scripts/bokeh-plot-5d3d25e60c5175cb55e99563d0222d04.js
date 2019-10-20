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
      };var element = document.getElementById("0b4bde36-5530-4fcd-9fd5-21ae50abb568");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0b4bde36-5530-4fcd-9fd5-21ae50abb568' but no matching script tag was found. ")
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
                var docs_json = {"d0044fc9-c097-48b5-bea6-69cd878c98ac":{"roots":{"references":[{"attributes":{"data_source":{"id":"eccd398d-3637-4bde-a1af-2fce81aa187c","type":"ColumnDataSource"},"glyph":{"id":"33168082-4f1d-449c-b9a8-aa4b05c21cc4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"3bc6c535-c6d6-42a1-af79-3723d578acb4","type":"Circle"},"selection_glyph":null},"id":"82431ab4-f77a-4235-b0a2-a29a58ac4dbb","type":"GlyphRenderer"},{"attributes":{},"id":"7bdca3b0-2215-47c7-bcaa-bf40a1c190cf","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3bc6c535-c6d6-42a1-af79-3723d578acb4","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"eccd398d-3637-4bde-a1af-2fce81aa187c","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"b4f97b76-7990-4d17-9ce0-972979e088b7","type":"DataRange1d"},{"attributes":{"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"}},"id":"0d162597-a43e-4242-bd63-bffda5187421","type":"SaveTool"},{"attributes":{"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"555820b9-6b00-4af1-b571-3bfda882721a","type":"BasicTicker"}},"id":"be2e11ec-a65d-4209-9839-9ae9fce3a2e7","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"365cd19d-018e-403c-9e43-9179b061a9cd","type":"PanTool"},{"id":"3e531f76-c3ae-481c-a7c7-7ce5e991954a","type":"WheelZoomTool"},{"id":"a99abfc7-7d0a-4bd4-a4d5-59d923960b79","type":"BoxZoomTool"},{"id":"0d162597-a43e-4242-bd63-bffda5187421","type":"SaveTool"},{"id":"98edff1a-1448-497a-a0c8-46f0165557f0","type":"ResetTool"},{"id":"28c573e7-891a-4c3d-b366-070912762658","type":"HelpTool"}]},"id":"7cc20966-3db5-44d9-8dcc-04f80e18be39","type":"Toolbar"},{"attributes":{"callback":null},"id":"bcbfd79d-3361-4ee0-8221-cc94e8c61997","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7bdca3b0-2215-47c7-bcaa-bf40a1c190cf","type":"BasicTickFormatter"},"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8a6a71b-44bd-4d66-8c87-1a1e36c8d392","type":"BasicTicker"}},"id":"2cef2073-3984-4091-8e01-c8147894518a","type":"LinearAxis"},{"attributes":{"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"}},"id":"3e531f76-c3ae-481c-a7c7-7ce5e991954a","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8a6a71b-44bd-4d66-8c87-1a1e36c8d392","type":"BasicTicker"}},"id":"4408e6d0-0f6b-4d56-98e8-4e4a5c2f7e45","type":"Grid"},{"attributes":{},"id":"9999e370-2c1d-45ef-825e-c9e2ebfec423","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"158cd749-9483-4a1d-b864-55af8950e583","type":"BoxAnnotation"},"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"}},"id":"a99abfc7-7d0a-4bd4-a4d5-59d923960b79","type":"BoxZoomTool"},{"attributes":{},"id":"a8a6a71b-44bd-4d66-8c87-1a1e36c8d392","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33168082-4f1d-449c-b9a8-aa4b05c21cc4","type":"Circle"},{"attributes":{"below":[{"id":"145d8289-512f-4d44-be12-2e8635d956b1","type":"LinearAxis"}],"left":[{"id":"2cef2073-3984-4091-8e01-c8147894518a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"145d8289-512f-4d44-be12-2e8635d956b1","type":"LinearAxis"},{"id":"be2e11ec-a65d-4209-9839-9ae9fce3a2e7","type":"Grid"},{"id":"2cef2073-3984-4091-8e01-c8147894518a","type":"LinearAxis"},{"id":"4408e6d0-0f6b-4d56-98e8-4e4a5c2f7e45","type":"Grid"},{"id":"158cd749-9483-4a1d-b864-55af8950e583","type":"BoxAnnotation"},{"id":"82431ab4-f77a-4235-b0a2-a29a58ac4dbb","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"05a3f2e4-ead9-489a-b303-0749d3a5a372","type":"ToolEvents"},"toolbar":{"id":"7cc20966-3db5-44d9-8dcc-04f80e18be39","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"bcbfd79d-3361-4ee0-8221-cc94e8c61997","type":"DataRange1d"},"y_range":{"id":"b4f97b76-7990-4d17-9ce0-972979e088b7","type":"DataRange1d"}},"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"}},"id":"365cd19d-018e-403c-9e43-9179b061a9cd","type":"PanTool"},{"attributes":{},"id":"05a3f2e4-ead9-489a-b303-0749d3a5a372","type":"ToolEvents"},{"attributes":{"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"}},"id":"28c573e7-891a-4c3d-b366-070912762658","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"158cd749-9483-4a1d-b864-55af8950e583","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"9999e370-2c1d-45ef-825e-c9e2ebfec423","type":"BasicTickFormatter"},"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"555820b9-6b00-4af1-b571-3bfda882721a","type":"BasicTicker"}},"id":"145d8289-512f-4d44-be12-2e8635d956b1","type":"LinearAxis"},{"attributes":{},"id":"555820b9-6b00-4af1-b571-3bfda882721a","type":"BasicTicker"},{"attributes":{"plot":{"id":"55f6f36f-d112-4193-bd38-40d4db8381d1","subtype":"Figure","type":"Plot"}},"id":"98edff1a-1448-497a-a0c8-46f0165557f0","type":"ResetTool"}],"root_ids":["55f6f36f-d112-4193-bd38-40d4db8381d1"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d0044fc9-c097-48b5-bea6-69cd878c98ac","elementid":"0b4bde36-5530-4fcd-9fd5-21ae50abb568","modelid":"55f6f36f-d112-4193-bd38-40d4db8381d1"}];
                
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
