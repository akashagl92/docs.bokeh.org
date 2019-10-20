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
      };var element = document.getElementById("56e2c7cd-4ae4-4df9-8e79-710c720048ef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '56e2c7cd-4ae4-4df9-8e79-710c720048ef' but no matching script tag was found. ")
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
                var docs_json = {"d6d4e444-cf83-448d-9803-5f39fa3fdb59":{"roots":{"references":[{"attributes":{"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"}},"id":"7bd4b314-5d16-4305-808f-da791e203709","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d0111e4-c81e-4aa3-8ddd-1c9c43516f2c","type":"Circle"},{"attributes":{"overlay":{"id":"d33c5e91-f097-4388-afa5-81cddf9165a8","type":"BoxAnnotation"},"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"}},"id":"cbea9ef4-e07c-48f1-b4da-e43ecb5cba53","type":"BoxZoomTool"},{"attributes":{},"id":"6b30de24-dd92-4385-b523-87a06c98be68","type":"BasicTicker"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"5292d5ef-cedc-4c0e-b9b3-f3a1a302a972","type":"Title"},{"attributes":{"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"}},"id":"5673095b-dcc0-4510-a563-63449538ac09","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5673095b-dcc0-4510-a563-63449538ac09","type":"PanTool"},{"id":"21667fcd-e455-458e-87cd-772c97fe50cd","type":"WheelZoomTool"},{"id":"cbea9ef4-e07c-48f1-b4da-e43ecb5cba53","type":"BoxZoomTool"},{"id":"6bfbe451-2b0d-4c81-b45d-abb6d3ecba8f","type":"SaveTool"},{"id":"ff0e23d3-bfc0-4210-b79f-c734505815e7","type":"ResetTool"},{"id":"7bd4b314-5d16-4305-808f-da791e203709","type":"HelpTool"}]},"id":"e0c29293-3a3c-44a9-8250-db096e906f3f","type":"Toolbar"},{"attributes":{"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"}},"id":"21667fcd-e455-458e-87cd-772c97fe50cd","type":"WheelZoomTool"},{"attributes":{},"id":"2b564f42-4989-4b05-be27-60e5b427b1a1","type":"ToolEvents"},{"attributes":{"below":[{"id":"f8b2d037-9c55-4455-87cf-8c2c0b63d0f8","type":"LinearAxis"}],"left":[{"id":"a2301145-6e91-49b7-8681-f3b88b5a62b1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f8b2d037-9c55-4455-87cf-8c2c0b63d0f8","type":"LinearAxis"},{"id":"5ca717aa-2507-4b83-a0b0-de7c8da71244","type":"Grid"},{"id":"a2301145-6e91-49b7-8681-f3b88b5a62b1","type":"LinearAxis"},{"id":"3f48967b-e314-478a-9d14-b992db1566a1","type":"Grid"},{"id":"d33c5e91-f097-4388-afa5-81cddf9165a8","type":"BoxAnnotation"},{"id":"0e58c6ee-7a23-460f-9680-ba8f6a54ce30","type":"GlyphRenderer"}],"title":{"id":"5292d5ef-cedc-4c0e-b9b3-f3a1a302a972","type":"Title"},"tool_events":{"id":"2b564f42-4989-4b05-be27-60e5b427b1a1","type":"ToolEvents"},"toolbar":{"id":"e0c29293-3a3c-44a9-8250-db096e906f3f","type":"Toolbar"},"x_range":{"id":"b563e362-1872-4a6e-bfd4-9049f9eac805","type":"DataRange1d"},"y_range":{"id":"f33e6c4b-5d35-4371-b288-02437726f30c","type":"DataRange1d"}},"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"257c49d1-2505-4e0f-9b8c-7820526a5174","type":"ColumnDataSource"},"glyph":{"id":"8d0111e4-c81e-4aa3-8ddd-1c9c43516f2c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"738f34f4-463a-4770-802a-a05c72855e2c","type":"Circle"},"selection_glyph":null},"id":"0e58c6ee-7a23-460f-9680-ba8f6a54ce30","type":"GlyphRenderer"},{"attributes":{},"id":"db325f06-255d-40c2-ac88-3819fdcecfef","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"},"ticker":{"id":"12388f7d-664f-465f-8627-433d7cad1908","type":"BasicTicker"}},"id":"3f48967b-e314-478a-9d14-b992db1566a1","type":"Grid"},{"attributes":{"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"}},"id":"ff0e23d3-bfc0-4210-b79f-c734505815e7","type":"ResetTool"},{"attributes":{"formatter":{"id":"f1ddd4ca-f301-4b9b-a068-603acf283982","type":"BasicTickFormatter"},"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"},"ticker":{"id":"12388f7d-664f-465f-8627-433d7cad1908","type":"BasicTicker"}},"id":"a2301145-6e91-49b7-8681-f3b88b5a62b1","type":"LinearAxis"},{"attributes":{},"id":"f1ddd4ca-f301-4b9b-a068-603acf283982","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b563e362-1872-4a6e-bfd4-9049f9eac805","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"257c49d1-2505-4e0f-9b8c-7820526a5174","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"f33e6c4b-5d35-4371-b288-02437726f30c","type":"DataRange1d"},{"attributes":{},"id":"12388f7d-664f-465f-8627-433d7cad1908","type":"BasicTicker"},{"attributes":{"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"}},"id":"6bfbe451-2b0d-4c81-b45d-abb6d3ecba8f","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d33c5e91-f097-4388-afa5-81cddf9165a8","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"738f34f4-463a-4770-802a-a05c72855e2c","type":"Circle"},{"attributes":{"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b30de24-dd92-4385-b523-87a06c98be68","type":"BasicTicker"}},"id":"5ca717aa-2507-4b83-a0b0-de7c8da71244","type":"Grid"},{"attributes":{"formatter":{"id":"db325f06-255d-40c2-ac88-3819fdcecfef","type":"BasicTickFormatter"},"plot":{"id":"f868003b-55e3-48e4-b6ab-4d3ddf198a83","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b30de24-dd92-4385-b523-87a06c98be68","type":"BasicTicker"}},"id":"f8b2d037-9c55-4455-87cf-8c2c0b63d0f8","type":"LinearAxis"}],"root_ids":["f868003b-55e3-48e4-b6ab-4d3ddf198a83"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"d6d4e444-cf83-448d-9803-5f39fa3fdb59","elementid":"56e2c7cd-4ae4-4df9-8e79-710c720048ef","modelid":"f868003b-55e3-48e4-b6ab-4d3ddf198a83"}];
                
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
