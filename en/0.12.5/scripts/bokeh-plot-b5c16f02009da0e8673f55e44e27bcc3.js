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
      };var element = document.getElementById("8087c688-9a6e-4a99-8e8c-42b1827ae48e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8087c688-9a6e-4a99-8e8c-42b1827ae48e' but no matching script tag was found. ")
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
                var docs_json = {"20523eb2-79df-42ba-a07f-b09c77f15c31":{"roots":{"references":[{"attributes":{"callback":null},"id":"d898830d-d9a6-4262-a355-58c9bdb0b70c","type":"DataRange1d"},{"attributes":{"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"}},"id":"0391f6e9-95b5-4c8f-9abf-5a4446b74a0c","type":"WheelZoomTool"},{"attributes":{},"id":"ad657d50-e25a-4f5c-b71c-53dc28cd6f4b","type":"ToolEvents"},{"attributes":{"callback":null},"id":"9b9359d1-688e-4d0b-a0af-65623789666e","type":"DataRange1d"},{"attributes":{"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"f41e0bf0-0e01-4619-af8b-3a1feadee00a","type":"BasicTicker"}},"id":"4752c92a-01d4-4763-a76b-a7b20f8c0d09","type":"Grid"},{"attributes":{},"id":"2b6591f7-314e-4145-92fb-17f1afddd2bf","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"cca20169-6555-4f10-a033-0e7de17f51c4","type":"BasicTickFormatter"},"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ceb03af-b286-4ae9-8dae-cb2fd302d904","type":"BasicTicker"}},"id":"926152cb-ad1c-4360-8571-098d1b2c6ed4","type":"LinearAxis"},{"attributes":{"overlay":{"id":"d0259346-6b88-4004-83ba-1e01d157ab89","type":"BoxAnnotation"},"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"}},"id":"b0ae9c6b-fbe1-4ea7-a2e8-8b7b2b905e5b","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"0f1bf52e-c2d8-4d05-b07a-4a2d3871d481","type":"ColumnDataSource"},"glyph":{"id":"0120c0c9-01af-465a-b191-e61b1b64f292","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b5b8dcc9-fe73-4650-bfd9-9f26892a9ebe","type":"Circle"},"selection_glyph":null},"id":"648580f3-4954-4c17-933e-d91dd34a7548","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c780763-c4ff-4fba-926a-9c423b1fa8f1","type":"PanTool"},{"id":"0391f6e9-95b5-4c8f-9abf-5a4446b74a0c","type":"WheelZoomTool"},{"id":"b0ae9c6b-fbe1-4ea7-a2e8-8b7b2b905e5b","type":"BoxZoomTool"},{"id":"da0bebd9-71d3-44ac-bb60-161dce2bc949","type":"SaveTool"},{"id":"72c0e5df-0585-4a82-b64e-d9e822738254","type":"ResetTool"},{"id":"8dd875f8-243e-403f-bddc-0a373be23c42","type":"HelpTool"}]},"id":"51955b37-8251-4fc7-a256-25d998705dfe","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d0259346-6b88-4004-83ba-1e01d157ab89","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ceb03af-b286-4ae9-8dae-cb2fd302d904","type":"BasicTicker"}},"id":"3c98b39c-e4d1-412a-8048-de2988c22804","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5b8dcc9-fe73-4650-bfd9-9f26892a9ebe","type":"Circle"},{"attributes":{},"id":"3ceb03af-b286-4ae9-8dae-cb2fd302d904","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0f1bf52e-c2d8-4d05-b07a-4a2d3871d481","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"bf85a2d8-bbe0-4f44-8cf1-8b1412855db7","type":"Title"},{"attributes":{"formatter":{"id":"2b6591f7-314e-4145-92fb-17f1afddd2bf","type":"BasicTickFormatter"},"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"f41e0bf0-0e01-4619-af8b-3a1feadee00a","type":"BasicTicker"}},"id":"81432389-684e-44dd-9373-3ba248f9a945","type":"LinearAxis"},{"attributes":{"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"}},"id":"8dd875f8-243e-403f-bddc-0a373be23c42","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0120c0c9-01af-465a-b191-e61b1b64f292","type":"Circle"},{"attributes":{"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"}},"id":"da0bebd9-71d3-44ac-bb60-161dce2bc949","type":"SaveTool"},{"attributes":{},"id":"f41e0bf0-0e01-4619-af8b-3a1feadee00a","type":"BasicTicker"},{"attributes":{"below":[{"id":"81432389-684e-44dd-9373-3ba248f9a945","type":"LinearAxis"}],"left":[{"id":"926152cb-ad1c-4360-8571-098d1b2c6ed4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"81432389-684e-44dd-9373-3ba248f9a945","type":"LinearAxis"},{"id":"4752c92a-01d4-4763-a76b-a7b20f8c0d09","type":"Grid"},{"id":"926152cb-ad1c-4360-8571-098d1b2c6ed4","type":"LinearAxis"},{"id":"3c98b39c-e4d1-412a-8048-de2988c22804","type":"Grid"},{"id":"d0259346-6b88-4004-83ba-1e01d157ab89","type":"BoxAnnotation"},{"id":"648580f3-4954-4c17-933e-d91dd34a7548","type":"GlyphRenderer"}],"title":{"id":"bf85a2d8-bbe0-4f44-8cf1-8b1412855db7","type":"Title"},"tool_events":{"id":"ad657d50-e25a-4f5c-b71c-53dc28cd6f4b","type":"ToolEvents"},"toolbar":{"id":"51955b37-8251-4fc7-a256-25d998705dfe","type":"Toolbar"},"x_range":{"id":"d898830d-d9a6-4262-a355-58c9bdb0b70c","type":"DataRange1d"},"y_range":{"id":"9b9359d1-688e-4d0b-a0af-65623789666e","type":"DataRange1d"}},"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cca20169-6555-4f10-a033-0e7de17f51c4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"}},"id":"72c0e5df-0585-4a82-b64e-d9e822738254","type":"ResetTool"},{"attributes":{"plot":{"id":"56eab7e7-f107-407f-842c-9205987d61bb","subtype":"Figure","type":"Plot"}},"id":"2c780763-c4ff-4fba-926a-9c423b1fa8f1","type":"PanTool"}],"root_ids":["56eab7e7-f107-407f-842c-9205987d61bb"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"20523eb2-79df-42ba-a07f-b09c77f15c31","elementid":"8087c688-9a6e-4a99-8e8c-42b1827ae48e","modelid":"56eab7e7-f107-407f-842c-9205987d61bb"}];
                
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
