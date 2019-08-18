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
      };var element = document.getElementById("bd2553ac-ae93-49c1-8b2b-1647516b4274");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bd2553ac-ae93-49c1-8b2b-1647516b4274' but no matching script tag was found. ")
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
                var docs_json = {"012a23f7-b6e9-4fb6-a512-5374feda20cd":{"roots":{"references":[{"attributes":{"formatter":{"id":"48add964-d92e-4a08-b878-61817fb9c679","type":"BasicTickFormatter"},"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cd9dd52-227d-4243-a4e3-6f91bd8af2ef","type":"BasicTicker"}},"id":"1a90e2b9-60a0-4af9-ae45-b9ecd22b49f9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26600b8f-b739-4ee7-9fdb-141f4815a0f4","type":"DataRange1d"},{"attributes":{},"id":"8cd9dd52-227d-4243-a4e3-6f91bd8af2ef","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2ed773e9-65c7-4041-bf8a-c31ad2fd9fe4","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"}},"id":"7c628a2c-be70-4736-94b4-16980b8109e6","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"2637a8a6-b22a-4355-b2ae-e84694bb5b68","type":"Title"},{"attributes":{"data_source":{"id":"633d2360-f490-4fd3-9fab-7dd382870234","type":"ColumnDataSource"},"glyph":{"id":"5dbdb277-0b5e-428c-b30d-a06dcecf477d","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dfc505b8-c62b-49b2-b189-3a4c85e38e09","type":"Segment"},"selection_glyph":null},"id":"b91377ea-57b7-4255-8557-de24540e3d6f","type":"GlyphRenderer"},{"attributes":{},"id":"48add964-d92e-4a08-b878-61817fb9c679","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x0","x1","y1","y0"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"633d2360-f490-4fd3-9fab-7dd382870234","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5e966e2-bab3-4f1b-95b6-7a43ab878191","type":"PanTool"},{"id":"8a1a0eef-1924-420c-ba4a-d872f424e358","type":"WheelZoomTool"},{"id":"5c3283fc-b103-4b2c-b207-f17388a51061","type":"BoxZoomTool"},{"id":"dce3ebfc-e4b4-42d8-8648-b1edd5c6bb3c","type":"SaveTool"},{"id":"9c6e5644-1ed7-4afa-ae1e-4495f9d6c45a","type":"ResetTool"},{"id":"7c628a2c-be70-4736-94b4-16980b8109e6","type":"HelpTool"}]},"id":"e081f11c-9bbe-47ce-ac24-328b846f27b4","type":"Toolbar"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5dbdb277-0b5e-428c-b30d-a06dcecf477d","type":"Segment"},{"attributes":{},"id":"0f48f33c-353a-455a-b721-512e48e5de39","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cd9dd52-227d-4243-a4e3-6f91bd8af2ef","type":"BasicTicker"}},"id":"b79190c3-0b11-4455-8114-573489c50a5f","type":"Grid"},{"attributes":{"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"}},"id":"9c6e5644-1ed7-4afa-ae1e-4495f9d6c45a","type":"ResetTool"},{"attributes":{"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"}},"id":"dce3ebfc-e4b4-42d8-8648-b1edd5c6bb3c","type":"SaveTool"},{"attributes":{"below":[{"id":"58c857dd-9ee4-4f43-a0b2-87473547f65e","type":"LinearAxis"}],"left":[{"id":"1a90e2b9-60a0-4af9-ae45-b9ecd22b49f9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"58c857dd-9ee4-4f43-a0b2-87473547f65e","type":"LinearAxis"},{"id":"7f3454c3-835d-4446-9f84-3748f75e4df4","type":"Grid"},{"id":"1a90e2b9-60a0-4af9-ae45-b9ecd22b49f9","type":"LinearAxis"},{"id":"b79190c3-0b11-4455-8114-573489c50a5f","type":"Grid"},{"id":"2ed773e9-65c7-4041-bf8a-c31ad2fd9fe4","type":"BoxAnnotation"},{"id":"b91377ea-57b7-4255-8557-de24540e3d6f","type":"GlyphRenderer"}],"title":{"id":"2637a8a6-b22a-4355-b2ae-e84694bb5b68","type":"Title"},"tool_events":{"id":"4fc8bfe6-b430-4701-bd1c-877260ffbf18","type":"ToolEvents"},"toolbar":{"id":"e081f11c-9bbe-47ce-ac24-328b846f27b4","type":"Toolbar"},"x_range":{"id":"f0601178-a1a3-4f44-b33e-3fecd80e2a46","type":"DataRange1d"},"y_range":{"id":"26600b8f-b739-4ee7-9fdb-141f4815a0f4","type":"DataRange1d"}},"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4fc8bfe6-b430-4701-bd1c-877260ffbf18","type":"ToolEvents"},{"attributes":{},"id":"80a424d5-0665-4a7c-870c-02317de1c21a","type":"BasicTicker"},{"attributes":{"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"},"ticker":{"id":"80a424d5-0665-4a7c-870c-02317de1c21a","type":"BasicTicker"}},"id":"7f3454c3-835d-4446-9f84-3748f75e4df4","type":"Grid"},{"attributes":{"callback":null},"id":"f0601178-a1a3-4f44-b33e-3fecd80e2a46","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2ed773e9-65c7-4041-bf8a-c31ad2fd9fe4","type":"BoxAnnotation"},"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"}},"id":"5c3283fc-b103-4b2c-b207-f17388a51061","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"}},"id":"8a1a0eef-1924-420c-ba4a-d872f424e358","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"}},"id":"b5e966e2-bab3-4f1b-95b6-7a43ab878191","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"dfc505b8-c62b-49b2-b189-3a4c85e38e09","type":"Segment"},{"attributes":{"formatter":{"id":"0f48f33c-353a-455a-b721-512e48e5de39","type":"BasicTickFormatter"},"plot":{"id":"e0b85f09-dcc8-4763-8666-9778f258c3af","subtype":"Figure","type":"Plot"},"ticker":{"id":"80a424d5-0665-4a7c-870c-02317de1c21a","type":"BasicTicker"}},"id":"58c857dd-9ee4-4f43-a0b2-87473547f65e","type":"LinearAxis"}],"root_ids":["e0b85f09-dcc8-4763-8666-9778f258c3af"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"012a23f7-b6e9-4fb6-a512-5374feda20cd","elementid":"bd2553ac-ae93-49c1-8b2b-1647516b4274","modelid":"e0b85f09-dcc8-4763-8666-9778f258c3af"}];
                
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
