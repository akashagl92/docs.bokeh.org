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
      };var element = document.getElementById("aa9c6aa5-55d2-4fcf-b49a-75bd77f80790");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa9c6aa5-55d2-4fcf-b49a-75bd77f80790' but no matching script tag was found. ")
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
                var docs_json = {"5938a59b-06b5-45e0-8483-8d2495f66d79":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b8c89a6a-b273-444a-a81d-8835a07b3df5","type":"BoxAnnotation"},{"attributes":{},"id":"831d99b2-cfe4-44bd-9c3d-ad73744e5b5a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"}},"id":"c8099ffd-7a0c-47cf-ac11-36f43085903a","type":"WheelZoomTool"},{"attributes":{},"id":"2d14f10a-bddd-402f-a29f-285607e48c7a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"831d99b2-cfe4-44bd-9c3d-ad73744e5b5a","type":"BasicTickFormatter"},"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d14f10a-bddd-402f-a29f-285607e48c7a","type":"BasicTicker"}},"id":"f4d258ac-9687-42ef-abed-92e1d2f95579","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["right","bottom","left","top"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"56e37a95-7a0b-45af-8cfa-a66176a5f419","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"}},"id":"78ee85e3-6004-468a-a0c3-911c17046d76","type":"SaveTool"},{"attributes":{"callback":null},"id":"b8665ddc-b509-4368-8324-a9dfbd79baf6","type":"DataRange1d"},{"attributes":{"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"}},"id":"172840e3-abc0-472e-8903-37f494e49231","type":"PanTool"},{"attributes":{"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"264c1b9b-aacd-4058-85ff-46faba7b6957","type":"BasicTicker"}},"id":"e1f7d43e-8557-49c5-9172-f2666d1c8829","type":"Grid"},{"attributes":{"formatter":{"id":"3bb39ec5-e554-4f02-a23c-793437fe60f5","type":"BasicTickFormatter"},"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"264c1b9b-aacd-4058-85ff-46faba7b6957","type":"BasicTicker"}},"id":"889e582e-bb5e-45c1-bf27-6b0f7aac8202","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"172840e3-abc0-472e-8903-37f494e49231","type":"PanTool"},{"id":"c8099ffd-7a0c-47cf-ac11-36f43085903a","type":"WheelZoomTool"},{"id":"70102930-cd39-418c-800b-5a0f6ac3ee1a","type":"BoxZoomTool"},{"id":"78ee85e3-6004-468a-a0c3-911c17046d76","type":"SaveTool"},{"id":"32f63761-f401-44df-b6ff-2a8960849d0d","type":"ResetTool"},{"id":"149f4eb0-01fc-44d1-87f8-e8c3be9020c6","type":"HelpTool"}]},"id":"cefddfb0-918c-4cd4-952f-54c34461f047","type":"Toolbar"},{"attributes":{},"id":"4abf9f97-bbd5-4128-8200-a2a7e812d388","type":"ToolEvents"},{"attributes":{"overlay":{"id":"b8c89a6a-b273-444a-a81d-8835a07b3df5","type":"BoxAnnotation"},"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"}},"id":"70102930-cd39-418c-800b-5a0f6ac3ee1a","type":"BoxZoomTool"},{"attributes":{},"id":"264c1b9b-aacd-4058-85ff-46faba7b6957","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d14f10a-bddd-402f-a29f-285607e48c7a","type":"BasicTicker"}},"id":"c3fdec0f-6efe-4c96-8921-501e3921a17b","type":"Grid"},{"attributes":{},"id":"3bb39ec5-e554-4f02-a23c-793437fe60f5","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"}},"id":"149f4eb0-01fc-44d1-87f8-e8c3be9020c6","type":"HelpTool"},{"attributes":{"data_source":{"id":"56e37a95-7a0b-45af-8cfa-a66176a5f419","type":"ColumnDataSource"},"glyph":{"id":"2557c7de-2157-4299-9232-48a6f9c8ae89","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9caad481-8bf4-4a75-abb1-fe2e0d74e026","type":"Quad"},"selection_glyph":null},"id":"fe01625f-789f-4ddb-aa82-a24086f7d5fc","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"54589b62-7186-4268-af1f-de496b12e682","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"9caad481-8bf4-4a75-abb1-fe2e0d74e026","type":"Quad"},{"attributes":{"below":[{"id":"889e582e-bb5e-45c1-bf27-6b0f7aac8202","type":"LinearAxis"}],"left":[{"id":"f4d258ac-9687-42ef-abed-92e1d2f95579","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"889e582e-bb5e-45c1-bf27-6b0f7aac8202","type":"LinearAxis"},{"id":"e1f7d43e-8557-49c5-9172-f2666d1c8829","type":"Grid"},{"id":"f4d258ac-9687-42ef-abed-92e1d2f95579","type":"LinearAxis"},{"id":"c3fdec0f-6efe-4c96-8921-501e3921a17b","type":"Grid"},{"id":"b8c89a6a-b273-444a-a81d-8835a07b3df5","type":"BoxAnnotation"},{"id":"fe01625f-789f-4ddb-aa82-a24086f7d5fc","type":"GlyphRenderer"}],"title":{"id":"c6b766f2-1bf2-4c8b-bde8-52b25d0b25bf","type":"Title"},"tool_events":{"id":"4abf9f97-bbd5-4128-8200-a2a7e812d388","type":"ToolEvents"},"toolbar":{"id":"cefddfb0-918c-4cd4-952f-54c34461f047","type":"Toolbar"},"x_range":{"id":"b8665ddc-b509-4368-8324-a9dfbd79baf6","type":"DataRange1d"},"y_range":{"id":"54589b62-7186-4268-af1f-de496b12e682","type":"DataRange1d"}},"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"2557c7de-2157-4299-9232-48a6f9c8ae89","type":"Quad"},{"attributes":{"plot":null,"text":""},"id":"c6b766f2-1bf2-4c8b-bde8-52b25d0b25bf","type":"Title"},{"attributes":{"plot":{"id":"27206daa-c1a9-46d2-8d27-27b5ea27de3e","subtype":"Figure","type":"Plot"}},"id":"32f63761-f401-44df-b6ff-2a8960849d0d","type":"ResetTool"}],"root_ids":["27206daa-c1a9-46d2-8d27-27b5ea27de3e"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"5938a59b-06b5-45e0-8483-8d2495f66d79","elementid":"aa9c6aa5-55d2-4fcf-b49a-75bd77f80790","modelid":"27206daa-c1a9-46d2-8d27-27b5ea27de3e"}];
                
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
