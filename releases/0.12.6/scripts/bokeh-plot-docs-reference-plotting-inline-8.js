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
      };var element = document.getElementById("a71a7417-65b6-4d0c-acf0-07410635c8cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a71a7417-65b6-4d0c-acf0-07410635c8cf' but no matching script tag was found. ")
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
                var docs_json = {"dbeaf362-04ba-4eeb-b420-4e9ab2c14c8d":{"roots":{"references":[{"attributes":{},"id":"86e24567-2e25-42b2-9f38-5f36dc610073","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c9d2e504-8214-4b18-9c6d-07a9fd60c5df","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"84606a4f-ae2e-4be8-8ade-3c3cfb340260","type":"Title"},{"attributes":{},"id":"95242b65-b865-44c2-a795-5cf19ac9fb2e","type":"BasicTicker"},{"attributes":{"data_source":{"id":"af4c0f5d-469d-479d-ab33-61273a8eaf8c","type":"ColumnDataSource"},"glyph":{"id":"5a58ba14-4fb8-4a53-b32d-bc23c5c905da","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9b11d61-ae0a-4de5-b326-907e6c679027","type":"Ellipse"},"selection_glyph":null},"id":"1ac45110-bbd3-4bc7-8655-0aca0265e434","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"}},"id":"8dec10f4-2a99-415f-95ee-2e8ed85414c4","type":"PanTool"},{"attributes":{"callback":null},"id":"aa2f5555-16cf-457d-b5a8-5e4100e0f58f","type":"DataRange1d"},{"attributes":{},"id":"3e6a198e-9ba7-41ca-b387-0c87c3ddcd4a","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"c9d2e504-8214-4b18-9c6d-07a9fd60c5df","type":"BoxAnnotation"},"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"}},"id":"f4247414-e240-4dab-8985-24341788bd0f","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9b11d61-ae0a-4de5-b326-907e6c679027","type":"Ellipse"},{"attributes":{"formatter":{"id":"3e6a198e-9ba7-41ca-b387-0c87c3ddcd4a","type":"BasicTickFormatter"},"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"},"ticker":{"id":"6da5b807-decf-479c-8803-5b3659eaf2f6","type":"BasicTicker"}},"id":"9912ef65-92e6-45fb-b066-8eb4edb405e3","type":"LinearAxis"},{"attributes":{"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"}},"id":"34c62248-8f01-46b3-b8bc-9ceaf9a854c7","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"},"ticker":{"id":"6da5b807-decf-479c-8803-5b3659eaf2f6","type":"BasicTicker"}},"id":"07dfc6ee-71fd-4b95-9915-eec78552a534","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8dec10f4-2a99-415f-95ee-2e8ed85414c4","type":"PanTool"},{"id":"4e9d249d-bc38-4bf5-a53a-091096535da7","type":"WheelZoomTool"},{"id":"f4247414-e240-4dab-8985-24341788bd0f","type":"BoxZoomTool"},{"id":"ed419f70-f274-4a97-9885-dd68378a8a24","type":"SaveTool"},{"id":"b1b9dbc4-4a7e-4adb-bb59-0f8f1b162f14","type":"ResetTool"},{"id":"34c62248-8f01-46b3-b8bc-9ceaf9a854c7","type":"HelpTool"}]},"id":"87f7c683-0e19-4e4b-9e6e-9dbccfa6fb60","type":"Toolbar"},{"attributes":{"formatter":{"id":"71901adf-9a68-422e-8ac3-769f9eb1dc15","type":"BasicTickFormatter"},"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"},"ticker":{"id":"95242b65-b865-44c2-a795-5cf19ac9fb2e","type":"BasicTicker"}},"id":"7aee69bd-0a99-4f62-ae51-f373dba5aeb6","type":"LinearAxis"},{"attributes":{},"id":"fde628fa-6e4e-4a27-96ce-2a252f54196d","type":"LinearScale"},{"attributes":{},"id":"6da5b807-decf-479c-8803-5b3659eaf2f6","type":"BasicTicker"},{"attributes":{"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"}},"id":"ed419f70-f274-4a97-9885-dd68378a8a24","type":"SaveTool"},{"attributes":{},"id":"a9c5dca8-e999-45e1-84a3-8b9ed6c02dc9","type":"LinearScale"},{"attributes":{},"id":"71901adf-9a68-422e-8ac3-769f9eb1dc15","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f0d4e80b-e2dd-49bf-af58-289bf8145b57","type":"DataRange1d"},{"attributes":{"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"}},"id":"4e9d249d-bc38-4bf5-a53a-091096535da7","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"}},"id":"b1b9dbc4-4a7e-4adb-bb59-0f8f1b162f14","type":"ResetTool"},{"attributes":{"below":[{"id":"7aee69bd-0a99-4f62-ae51-f373dba5aeb6","type":"LinearAxis"}],"left":[{"id":"9912ef65-92e6-45fb-b066-8eb4edb405e3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7aee69bd-0a99-4f62-ae51-f373dba5aeb6","type":"LinearAxis"},{"id":"364d8cec-8967-48c0-b8e3-55ed35a31ade","type":"Grid"},{"id":"9912ef65-92e6-45fb-b066-8eb4edb405e3","type":"LinearAxis"},{"id":"07dfc6ee-71fd-4b95-9915-eec78552a534","type":"Grid"},{"id":"c9d2e504-8214-4b18-9c6d-07a9fd60c5df","type":"BoxAnnotation"},{"id":"1ac45110-bbd3-4bc7-8655-0aca0265e434","type":"GlyphRenderer"}],"title":{"id":"84606a4f-ae2e-4be8-8ade-3c3cfb340260","type":"Title"},"tool_events":{"id":"86e24567-2e25-42b2-9f38-5f36dc610073","type":"ToolEvents"},"toolbar":{"id":"87f7c683-0e19-4e4b-9e6e-9dbccfa6fb60","type":"Toolbar"},"x_range":{"id":"f0d4e80b-e2dd-49bf-af58-289bf8145b57","type":"DataRange1d"},"x_scale":{"id":"a9c5dca8-e999-45e1-84a3-8b9ed6c02dc9","type":"LinearScale"},"y_range":{"id":"aa2f5555-16cf-457d-b5a8-5e4100e0f58f","type":"DataRange1d"},"y_scale":{"id":"fde628fa-6e4e-4a27-96ce-2a252f54196d","type":"LinearScale"}},"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"589fa529-787d-4b29-a651-389f77798ed2","subtype":"Figure","type":"Plot"},"ticker":{"id":"95242b65-b865-44c2-a795-5cf19ac9fb2e","type":"BasicTicker"}},"id":"364d8cec-8967-48c0-b8e3-55ed35a31ade","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"af4c0f5d-469d-479d-ab33-61273a8eaf8c","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a58ba14-4fb8-4a53-b32d-bc23c5c905da","type":"Ellipse"}],"root_ids":["589fa529-787d-4b29-a651-389f77798ed2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"dbeaf362-04ba-4eeb-b420-4e9ab2c14c8d","elementid":"a71a7417-65b6-4d0c-acf0-07410635c8cf","modelid":"589fa529-787d-4b29-a651-389f77798ed2"}];
                
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
