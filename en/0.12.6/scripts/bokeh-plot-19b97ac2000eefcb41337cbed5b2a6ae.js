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
      };var element = document.getElementById("e467eb0a-8cda-4329-8b55-99cdf03acf5d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e467eb0a-8cda-4329-8b55-99cdf03acf5d' but no matching script tag was found. ")
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
                var docs_json = {"ec60209e-efac-4201-97d8-e4712b6e6af8":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"e545eebb-bfde-4920-975c-7dc494d03639","type":"Title"},{"attributes":{"formatter":{"id":"3cdbc4b5-fd36-4d2f-ab87-ef1e0f3dda9b","type":"BasicTickFormatter"},"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"},"ticker":{"id":"356b2188-304c-4120-854b-973ca5692b07","type":"BasicTicker"}},"id":"d2fb47b4-dff7-413e-940b-affb3804afbb","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d658162f-5aeb-48c4-81de-dcaac2b94730","type":"PanTool"},{"id":"61d04f13-410d-4e65-8946-74bc8f77e13f","type":"WheelZoomTool"},{"id":"e3fb5d9e-c7c7-4dd6-a5c7-281f0dadad85","type":"BoxZoomTool"},{"id":"bfbd93a5-ad32-4d38-ba57-cdad71d63c7d","type":"SaveTool"},{"id":"7333de86-c8a1-447c-b7bc-a262189273ed","type":"ResetTool"},{"id":"400c3d0a-4762-4033-be7c-1516a7a082e1","type":"HelpTool"}]},"id":"b3c29fb2-a2da-4350-b18b-3bff94ed882c","type":"Toolbar"},{"attributes":{"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8d9dacc-f160-48af-a642-358c80bd7bcd","type":"BasicTicker"}},"id":"2e068034-01a7-4443-9a91-aa9ac337ded9","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]}},"id":"4b89621e-4f26-485b-ac2f-665253acf76e","type":"ColumnDataSource"},{"attributes":{},"id":"d0c46fe3-e62c-439e-a2e8-d9eb7232f9da","type":"BasicTickFormatter"},{"attributes":{},"id":"78374eaa-114b-4a63-b8fb-e3282d9ecff5","type":"ToolEvents"},{"attributes":{"callback":null},"id":"66f9dff3-1561-4879-9645-1a54853c71e5","type":"DataRange1d"},{"attributes":{"callback":null},"id":"20ef20f1-6caf-460b-b0c5-5e282721bcb0","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e978155-a1ea-431d-b5dd-012fb44af7a9","type":"Line"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"03a2c64d-3927-4890-a8a2-c8ef74e7fed2","type":"Line"},{"attributes":{"formatter":{"id":"d0c46fe3-e62c-439e-a2e8-d9eb7232f9da","type":"BasicTickFormatter"},"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8d9dacc-f160-48af-a642-358c80bd7bcd","type":"BasicTicker"}},"id":"c5e2079c-a39e-4fa1-8054-6e771da8d4bf","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"},"ticker":{"id":"356b2188-304c-4120-854b-973ca5692b07","type":"BasicTicker"}},"id":"fe55f85d-6d83-4e1d-92b6-b283dbf60127","type":"Grid"},{"attributes":{},"id":"356b2188-304c-4120-854b-973ca5692b07","type":"BasicTicker"},{"attributes":{"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"}},"id":"61d04f13-410d-4e65-8946-74bc8f77e13f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"}},"id":"bfbd93a5-ad32-4d38-ba57-cdad71d63c7d","type":"SaveTool"},{"attributes":{"data_source":{"id":"4b89621e-4f26-485b-ac2f-665253acf76e","type":"ColumnDataSource"},"glyph":{"id":"03a2c64d-3927-4890-a8a2-c8ef74e7fed2","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8e978155-a1ea-431d-b5dd-012fb44af7a9","type":"Line"},"selection_glyph":null},"id":"a41f6a65-a5fb-4443-a7b2-f32c66c7a3bd","type":"GlyphRenderer"},{"attributes":{},"id":"d8d9dacc-f160-48af-a642-358c80bd7bcd","type":"BasicTicker"},{"attributes":{},"id":"3cdbc4b5-fd36-4d2f-ab87-ef1e0f3dda9b","type":"BasicTickFormatter"},{"attributes":{},"id":"5575edba-05d2-4e18-b4f4-ad928cb31d59","type":"LinearScale"},{"attributes":{"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"}},"id":"7333de86-c8a1-447c-b7bc-a262189273ed","type":"ResetTool"},{"attributes":{"below":[{"id":"c5e2079c-a39e-4fa1-8054-6e771da8d4bf","type":"LinearAxis"}],"left":[{"id":"d2fb47b4-dff7-413e-940b-affb3804afbb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c5e2079c-a39e-4fa1-8054-6e771da8d4bf","type":"LinearAxis"},{"id":"2e068034-01a7-4443-9a91-aa9ac337ded9","type":"Grid"},{"id":"d2fb47b4-dff7-413e-940b-affb3804afbb","type":"LinearAxis"},{"id":"fe55f85d-6d83-4e1d-92b6-b283dbf60127","type":"Grid"},{"id":"374294b1-4dc6-42a2-b191-95379f5a2e6c","type":"BoxAnnotation"},{"id":"a41f6a65-a5fb-4443-a7b2-f32c66c7a3bd","type":"GlyphRenderer"}],"title":{"id":"e545eebb-bfde-4920-975c-7dc494d03639","type":"Title"},"tool_events":{"id":"78374eaa-114b-4a63-b8fb-e3282d9ecff5","type":"ToolEvents"},"toolbar":{"id":"b3c29fb2-a2da-4350-b18b-3bff94ed882c","type":"Toolbar"},"x_range":{"id":"20ef20f1-6caf-460b-b0c5-5e282721bcb0","type":"DataRange1d"},"x_scale":{"id":"53d7816c-ca43-4271-8dcc-43b7a914caa9","type":"LinearScale"},"y_range":{"id":"66f9dff3-1561-4879-9645-1a54853c71e5","type":"DataRange1d"},"y_scale":{"id":"5575edba-05d2-4e18-b4f4-ad928cb31d59","type":"LinearScale"}},"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"374294b1-4dc6-42a2-b191-95379f5a2e6c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"}},"id":"d658162f-5aeb-48c4-81de-dcaac2b94730","type":"PanTool"},{"attributes":{"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"}},"id":"400c3d0a-4762-4033-be7c-1516a7a082e1","type":"HelpTool"},{"attributes":{"overlay":{"id":"374294b1-4dc6-42a2-b191-95379f5a2e6c","type":"BoxAnnotation"},"plot":{"id":"a3c480e9-d86e-4128-b7df-26150f997310","subtype":"Figure","type":"Plot"}},"id":"e3fb5d9e-c7c7-4dd6-a5c7-281f0dadad85","type":"BoxZoomTool"},{"attributes":{},"id":"53d7816c-ca43-4271-8dcc-43b7a914caa9","type":"LinearScale"}],"root_ids":["a3c480e9-d86e-4128-b7df-26150f997310"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ec60209e-efac-4201-97d8-e4712b6e6af8","elementid":"e467eb0a-8cda-4329-8b55-99cdf03acf5d","modelid":"a3c480e9-d86e-4128-b7df-26150f997310"}];
                
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
