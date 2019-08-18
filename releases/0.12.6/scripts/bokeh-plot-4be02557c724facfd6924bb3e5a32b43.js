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
      };var element = document.getElementById("58667fc1-54c2-4e2d-a351-73250eb576e5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '58667fc1-54c2-4e2d-a351-73250eb576e5' but no matching script tag was found. ")
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
                var docs_json = {"140932d6-104f-4812-b0b3-bcb87a289c2c":{"roots":{"references":[{"attributes":{},"id":"833c0b97-2444-4deb-8c97-8971740d0111","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"efd86217-597f-4e20-bbc6-ec0b661ec0b2","type":"BasicTicker"}},"id":"ddd9c9c6-c48e-43ae-9b4b-ec6491b0c2b8","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"3ec49957-e9d6-4c2a-a62b-11351e91b6ef","type":"Circle"},{"attributes":{"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"}},"id":"d011d6f8-583f-4c5e-a6d9-fb24d8875a35","type":"SaveTool"},{"attributes":{"overlay":{"id":"b33d4da5-1cff-40de-ab3e-8ac1df9cfd97","type":"BoxAnnotation"},"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"}},"id":"2ba119fd-d825-429f-a6a4-5b9b809582b8","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"}},"id":"8a0fe415-b531-47b6-96ab-01e3b0cb6362","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8a0fe415-b531-47b6-96ab-01e3b0cb6362","type":"PanTool"},{"id":"61e9d88c-7286-4d4a-910b-a923386e55dc","type":"WheelZoomTool"},{"id":"2ba119fd-d825-429f-a6a4-5b9b809582b8","type":"BoxZoomTool"},{"id":"d011d6f8-583f-4c5e-a6d9-fb24d8875a35","type":"SaveTool"},{"id":"bc8177c9-3be1-4e1f-8cb6-22694a9d6c57","type":"ResetTool"},{"id":"62ad8e2a-81cf-4f60-9c3c-bbd4a56dec10","type":"HelpTool"}]},"id":"5c62cfaf-26f3-474d-af58-67e7f2d6f222","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"95fbebd4-425e-4b95-9ae9-ef1173b353dc","type":"Label"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b33d4da5-1cff-40de-ab3e-8ac1df9cfd97","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"}},"id":"61e9d88c-7286-4d4a-910b-a923386e55dc","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":275,"start":140},"id":"72a4656c-fc71-4e3b-a496-a2abe9945968","type":"Range1d"},{"attributes":{"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"}},"id":"bc8177c9-3be1-4e1f-8cb6-22694a9d6c57","type":"ResetTool"},{"attributes":{"level":"glyph","plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"},"source":{"id":"16c10ae0-9092-474b-aedb-653e40acd698","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"dac73eec-cc4d-4b79-977f-8e71aac13f12","type":"LabelSet"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"fd3dac6f-d4ef-466e-be70-485ba887e787","type":"BasicTickFormatter"},"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"efd86217-597f-4e20-bbc6-ec0b661ec0b2","type":"BasicTicker"}},"id":"4d001d49-75ea-4556-a667-e5f2ab64a3eb","type":"LinearAxis"},{"attributes":{},"id":"2f473e23-4910-4259-9001-e203992a2eaf","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["weight","names","height"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"16c10ae0-9092-474b-aedb-653e40acd698","type":"ColumnDataSource"},{"attributes":{},"id":"fd3dac6f-d4ef-466e-be70-485ba887e787","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"833c0b97-2444-4deb-8c97-8971740d0111","type":"BasicTicker"}},"id":"a9261d2a-112e-48fe-83de-53415c1568f8","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"5067f68e-c745-4be0-af91-96ff72d6fc22","type":"Circle"},{"attributes":{"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"}},"id":"62ad8e2a-81cf-4f60-9c3c-bbd4a56dec10","type":"HelpTool"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"17282781-22c2-4f9a-9f82-92569abbd337","type":"BasicTickFormatter"},"plot":{"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"833c0b97-2444-4deb-8c97-8971740d0111","type":"BasicTicker"}},"id":"b1ca5692-b258-4c47-8ba1-0c2c6c6fef2d","type":"LinearAxis"},{"attributes":{"below":[{"id":"b1ca5692-b258-4c47-8ba1-0c2c6c6fef2d","type":"LinearAxis"}],"left":[{"id":"4d001d49-75ea-4556-a667-e5f2ab64a3eb","type":"LinearAxis"}],"renderers":[{"id":"b1ca5692-b258-4c47-8ba1-0c2c6c6fef2d","type":"LinearAxis"},{"id":"a9261d2a-112e-48fe-83de-53415c1568f8","type":"Grid"},{"id":"4d001d49-75ea-4556-a667-e5f2ab64a3eb","type":"LinearAxis"},{"id":"ddd9c9c6-c48e-43ae-9b4b-ec6491b0c2b8","type":"Grid"},{"id":"b33d4da5-1cff-40de-ab3e-8ac1df9cfd97","type":"BoxAnnotation"},{"id":"fd7d25c1-62a2-4a8e-a641-ee0d4212b120","type":"GlyphRenderer"},{"id":"dac73eec-cc4d-4b79-977f-8e71aac13f12","type":"LabelSet"},{"id":"95fbebd4-425e-4b95-9ae9-ef1173b353dc","type":"Label"}],"title":{"id":"f446e8a9-5657-4e23-98d5-c86841ffe3dd","type":"Title"},"tool_events":{"id":"2f473e23-4910-4259-9001-e203992a2eaf","type":"ToolEvents"},"toolbar":{"id":"5c62cfaf-26f3-474d-af58-67e7f2d6f222","type":"Toolbar"},"x_range":{"id":"72a4656c-fc71-4e3b-a496-a2abe9945968","type":"Range1d"},"x_scale":{"id":"23693761-44f1-425c-92bc-3b00a589f24f","type":"LinearScale"},"y_range":{"id":"9ba666f0-d111-4e2f-847b-283a36a65841","type":"DataRange1d"},"y_scale":{"id":"7df481dc-f367-49f1-913a-60be25acd075","type":"LinearScale"}},"id":"9b25146a-8bde-46e5-a601-67a61e9fe30f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"9ba666f0-d111-4e2f-847b-283a36a65841","type":"DataRange1d"},{"attributes":{},"id":"7df481dc-f367-49f1-913a-60be25acd075","type":"LinearScale"},{"attributes":{},"id":"efd86217-597f-4e20-bbc6-ec0b661ec0b2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"16c10ae0-9092-474b-aedb-653e40acd698","type":"ColumnDataSource"},"glyph":{"id":"3ec49957-e9d6-4c2a-a62b-11351e91b6ef","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5067f68e-c745-4be0-af91-96ff72d6fc22","type":"Circle"},"selection_glyph":null},"id":"fd7d25c1-62a2-4a8e-a641-ee0d4212b120","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"f446e8a9-5657-4e23-98d5-c86841ffe3dd","type":"Title"},{"attributes":{},"id":"23693761-44f1-425c-92bc-3b00a589f24f","type":"LinearScale"},{"attributes":{},"id":"17282781-22c2-4f9a-9f82-92569abbd337","type":"BasicTickFormatter"}],"root_ids":["9b25146a-8bde-46e5-a601-67a61e9fe30f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"140932d6-104f-4812-b0b3-bcb87a289c2c","elementid":"58667fc1-54c2-4e2d-a351-73250eb576e5","modelid":"9b25146a-8bde-46e5-a601-67a61e9fe30f"}];
                
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
