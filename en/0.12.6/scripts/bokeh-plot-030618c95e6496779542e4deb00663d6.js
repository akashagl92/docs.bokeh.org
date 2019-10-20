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
      };var element = document.getElementById("51f621ff-4e79-46f5-9d6a-6cf2e4b204f5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '51f621ff-4e79-46f5-9d6a-6cf2e4b204f5' but no matching script tag was found. ")
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
                var docs_json = {"34b57380-8d2a-4eaf-aee8-4750461f0485":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"70fea293-f8d5-4872-b7e6-3dc1f434ef75","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"bbe7db5b-896f-474b-8cdd-1823b4d8b194","type":"BasicTickFormatter"},"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f75cd57b-f1ab-424f-a7ce-65a2e5b06574","type":"BasicTicker"}},"id":"c5be6d69-133a-43fb-b6b3-d696ccbbe624","type":"LinearAxis"},{"attributes":{"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"}},"id":"f21071bc-a0d3-422b-bcc4-dec647fe2e3f","type":"SaveTool"},{"attributes":{"data_source":{"id":"a56a6346-3dfd-4769-84aa-0fa290087ba0","type":"ColumnDataSource"},"glyph":{"id":"d3cc693b-1dd9-43ba-b455-4449acb34f04","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d7d16252-3183-48f2-aa2d-d270baaad45e","type":"Segment"},"selection_glyph":null},"id":"02603dc2-14d9-45ac-bd58-dfe8ab5bf4ef","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"fc02de92-62b0-49f5-8b6c-1361fcaec4b5","type":"DataRange1d"},{"attributes":{},"id":"8466978b-a864-484f-b610-41d86203aabd","type":"LinearScale"},{"attributes":{"callback":null},"id":"1f65b1b3-a7a4-4e45-bc4b-7ead88c5f562","type":"DataRange1d"},{"attributes":{},"id":"fc2c65e3-aa71-4663-8ec7-d3b65b82620c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"}},"id":"6a43d3a1-c4f6-4a86-bd3b-42e570bfd872","type":"ResetTool"},{"attributes":{},"id":"31e9f8e2-8142-46da-933d-e359974f586b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fc2c65e3-aa71-4663-8ec7-d3b65b82620c","type":"BasicTickFormatter"},"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"},"ticker":{"id":"31e9f8e2-8142-46da-933d-e359974f586b","type":"BasicTicker"}},"id":"7fe25e2e-dde0-4e58-9714-0a7ccc607c8f","type":"LinearAxis"},{"attributes":{"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"}},"id":"6bea94ae-869c-42c7-9d8d-2e6edb14f368","type":"PanTool"},{"attributes":{"below":[{"id":"7fe25e2e-dde0-4e58-9714-0a7ccc607c8f","type":"LinearAxis"}],"left":[{"id":"c5be6d69-133a-43fb-b6b3-d696ccbbe624","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7fe25e2e-dde0-4e58-9714-0a7ccc607c8f","type":"LinearAxis"},{"id":"6c484cea-9932-48ca-a37a-c095e88e7a55","type":"Grid"},{"id":"c5be6d69-133a-43fb-b6b3-d696ccbbe624","type":"LinearAxis"},{"id":"4402495f-077f-497d-9591-05da09e75b9d","type":"Grid"},{"id":"70fea293-f8d5-4872-b7e6-3dc1f434ef75","type":"BoxAnnotation"},{"id":"02603dc2-14d9-45ac-bd58-dfe8ab5bf4ef","type":"GlyphRenderer"}],"title":{"id":"5e456da2-f688-4c45-b603-af38a51356fb","type":"Title"},"tool_events":{"id":"a5b277c8-df97-498b-8bdf-6705e720db76","type":"ToolEvents"},"toolbar":{"id":"cdc8710f-9e67-43c3-8e95-4861dbfc3bfc","type":"Toolbar"},"x_range":{"id":"1f65b1b3-a7a4-4e45-bc4b-7ead88c5f562","type":"DataRange1d"},"x_scale":{"id":"8466978b-a864-484f-b610-41d86203aabd","type":"LinearScale"},"y_range":{"id":"fc02de92-62b0-49f5-8b6c-1361fcaec4b5","type":"DataRange1d"},"y_scale":{"id":"7516055b-3d4b-46a6-aea1-065fd90a7cca","type":"LinearScale"}},"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"d3cc693b-1dd9-43ba-b455-4449acb34f04","type":"Segment"},{"attributes":{},"id":"a5b277c8-df97-498b-8bdf-6705e720db76","type":"ToolEvents"},{"attributes":{"plot":null,"text":""},"id":"5e456da2-f688-4c45-b603-af38a51356fb","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6bea94ae-869c-42c7-9d8d-2e6edb14f368","type":"PanTool"},{"id":"7320bcbe-6ce7-4ea5-ae76-9883e186e54c","type":"WheelZoomTool"},{"id":"3a65c136-51ee-4999-82ce-60b355ed7225","type":"BoxZoomTool"},{"id":"f21071bc-a0d3-422b-bcc4-dec647fe2e3f","type":"SaveTool"},{"id":"6a43d3a1-c4f6-4a86-bd3b-42e570bfd872","type":"ResetTool"},{"id":"4dd4fbcf-387d-4b35-988b-42bf1af0e129","type":"HelpTool"}]},"id":"cdc8710f-9e67-43c3-8e95-4861dbfc3bfc","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f75cd57b-f1ab-424f-a7ce-65a2e5b06574","type":"BasicTicker"}},"id":"4402495f-077f-497d-9591-05da09e75b9d","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"d7d16252-3183-48f2-aa2d-d270baaad45e","type":"Segment"},{"attributes":{},"id":"bbe7db5b-896f-474b-8cdd-1823b4d8b194","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"},"ticker":{"id":"31e9f8e2-8142-46da-933d-e359974f586b","type":"BasicTicker"}},"id":"6c484cea-9932-48ca-a37a-c095e88e7a55","type":"Grid"},{"attributes":{},"id":"f75cd57b-f1ab-424f-a7ce-65a2e5b06574","type":"BasicTicker"},{"attributes":{"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"}},"id":"4dd4fbcf-387d-4b35-988b-42bf1af0e129","type":"HelpTool"},{"attributes":{},"id":"7516055b-3d4b-46a6-aea1-065fd90a7cca","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y0","x0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"a56a6346-3dfd-4769-84aa-0fa290087ba0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"}},"id":"7320bcbe-6ce7-4ea5-ae76-9883e186e54c","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"70fea293-f8d5-4872-b7e6-3dc1f434ef75","type":"BoxAnnotation"},"plot":{"id":"a72b655b-ebc0-400b-84fc-d80af24d985b","subtype":"Figure","type":"Plot"}},"id":"3a65c136-51ee-4999-82ce-60b355ed7225","type":"BoxZoomTool"}],"root_ids":["a72b655b-ebc0-400b-84fc-d80af24d985b"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"34b57380-8d2a-4eaf-aee8-4750461f0485","elementid":"51f621ff-4e79-46f5-9d6a-6cf2e4b204f5","modelid":"a72b655b-ebc0-400b-84fc-d80af24d985b"}];
                
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
