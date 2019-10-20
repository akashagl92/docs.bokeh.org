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
      };var element = document.getElementById("2d3b0104-133c-4c10-9c16-420062dfc67e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d3b0104-133c-4c10-9c16-420062dfc67e' but no matching script tag was found. ")
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
                var docs_json = {"572402a6-0e75-4cc3-9068-33d409e5a409":{"roots":{"references":[{"attributes":{"below":[{"id":"4f6ed7ba-e33c-4cee-869d-62c00cf819cb","type":"LinearAxis"}],"left":[{"id":"d0508991-7c04-4c14-91f8-f7159e94e497","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4f6ed7ba-e33c-4cee-869d-62c00cf819cb","type":"LinearAxis"},{"id":"be8cc158-6cc1-4c8a-bf00-74d52fba15d7","type":"Grid"},{"id":"d0508991-7c04-4c14-91f8-f7159e94e497","type":"LinearAxis"},{"id":"3ebbc431-288f-44d5-a8c3-8a922ed4469e","type":"Grid"},{"id":"d49e9d3a-75f7-4f08-8f4b-a05b313ccbb2","type":"BoxAnnotation"},{"id":"275e4463-807d-49b4-938f-e7d0a13e2f23","type":"GlyphRenderer"}],"title":{"id":"69d91efe-08c9-4409-b293-8cd9e7945de2","type":"Title"},"tool_events":{"id":"32b84d7d-0d5f-462d-8379-fde2bd967130","type":"ToolEvents"},"toolbar":{"id":"288f9e2d-6da4-41c8-9203-e7ec37f9d596","type":"Toolbar"},"x_range":{"id":"50f333bd-2321-44e4-89f4-ab1446b7a996","type":"DataRange1d"},"y_range":{"id":"b36b502f-75cb-43f0-a378-db657866e7b0","type":"DataRange1d"}},"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0f7dcf4b-012f-47b7-84d2-03f020b4ad8e","type":"BasicTickFormatter"},{"attributes":{},"id":"508ae4a7-a8e4-4a62-9ed1-f4de3456ece7","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d49e9d3a-75f7-4f08-8f4b-a05b313ccbb2","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"}},"id":"61a16779-2aa8-4559-983b-7c7cc54ecc0e","type":"HelpTool"},{"attributes":{"data_source":{"id":"86ab77b0-696b-4a58-bc2e-0d244ce1cda2","type":"ColumnDataSource"},"glyph":{"id":"e2d6f014-7210-49b3-a3df-e5889a75bef4","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"48e29f68-72a1-4aa2-b97f-7c334363472a","type":"DiamondCross"},"selection_glyph":null},"id":"275e4463-807d-49b4-938f-e7d0a13e2f23","type":"GlyphRenderer"},{"attributes":{},"id":"f0e26a34-3296-47d5-a204-abeeec2cf4de","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"},"ticker":{"id":"508ae4a7-a8e4-4a62-9ed1-f4de3456ece7","type":"BasicTicker"}},"id":"3ebbc431-288f-44d5-a8c3-8a922ed4469e","type":"Grid"},{"attributes":{},"id":"21650c35-d0ce-4297-86f8-7327fec18bee","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9d99eb49-8823-4912-a19b-66dd344f5f51","type":"PanTool"},{"id":"be9d4356-2f99-470c-bef5-e38fe4f0ae71","type":"WheelZoomTool"},{"id":"7fd6b3e3-5bc4-4232-ab01-46dc05270ccc","type":"BoxZoomTool"},{"id":"e68085ac-0b46-4ad5-8433-47fa2d95d443","type":"SaveTool"},{"id":"5b3e6096-3db9-4fa3-90c8-92068fb05895","type":"ResetTool"},{"id":"61a16779-2aa8-4559-983b-7c7cc54ecc0e","type":"HelpTool"}]},"id":"288f9e2d-6da4-41c8-9203-e7ec37f9d596","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2d6f014-7210-49b3-a3df-e5889a75bef4","type":"DiamondCross"},{"attributes":{"callback":null},"id":"b36b502f-75cb-43f0-a378-db657866e7b0","type":"DataRange1d"},{"attributes":{"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"}},"id":"be9d4356-2f99-470c-bef5-e38fe4f0ae71","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"69d91efe-08c9-4409-b293-8cd9e7945de2","type":"Title"},{"attributes":{"formatter":{"id":"f0e26a34-3296-47d5-a204-abeeec2cf4de","type":"BasicTickFormatter"},"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"},"ticker":{"id":"508ae4a7-a8e4-4a62-9ed1-f4de3456ece7","type":"BasicTicker"}},"id":"d0508991-7c04-4c14-91f8-f7159e94e497","type":"LinearAxis"},{"attributes":{"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"}},"id":"e68085ac-0b46-4ad5-8433-47fa2d95d443","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"48e29f68-72a1-4aa2-b97f-7c334363472a","type":"DiamondCross"},{"attributes":{},"id":"32b84d7d-0d5f-462d-8379-fde2bd967130","type":"ToolEvents"},{"attributes":{"overlay":{"id":"d49e9d3a-75f7-4f08-8f4b-a05b313ccbb2","type":"BoxAnnotation"},"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"}},"id":"7fd6b3e3-5bc4-4232-ab01-46dc05270ccc","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"},"ticker":{"id":"21650c35-d0ce-4297-86f8-7327fec18bee","type":"BasicTicker"}},"id":"be8cc158-6cc1-4c8a-bf00-74d52fba15d7","type":"Grid"},{"attributes":{"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"}},"id":"5b3e6096-3db9-4fa3-90c8-92068fb05895","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"86ab77b0-696b-4a58-bc2e-0d244ce1cda2","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"0f7dcf4b-012f-47b7-84d2-03f020b4ad8e","type":"BasicTickFormatter"},"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"},"ticker":{"id":"21650c35-d0ce-4297-86f8-7327fec18bee","type":"BasicTicker"}},"id":"4f6ed7ba-e33c-4cee-869d-62c00cf819cb","type":"LinearAxis"},{"attributes":{"plot":{"id":"817105d4-0f78-4e0a-834c-b385c961c810","subtype":"Figure","type":"Plot"}},"id":"9d99eb49-8823-4912-a19b-66dd344f5f51","type":"PanTool"},{"attributes":{"callback":null},"id":"50f333bd-2321-44e4-89f4-ab1446b7a996","type":"DataRange1d"}],"root_ids":["817105d4-0f78-4e0a-834c-b385c961c810"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"572402a6-0e75-4cc3-9068-33d409e5a409","elementid":"2d3b0104-133c-4c10-9c16-420062dfc67e","modelid":"817105d4-0f78-4e0a-834c-b385c961c810"}];
                
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
