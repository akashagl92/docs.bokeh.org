document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("1757c847-84b5-4c84-9591-c34b011a1e44");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1757c847-84b5-4c84-9591-c34b011a1e44' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"31b6eaa5-6f17-40d8-8882-5524720d7889":{"roots":{"references":[{"attributes":{"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"}},"id":"0a047337-4c61-44f3-b0f1-4614c847cd00","type":"HelpTool"},{"attributes":{"overlay":{"id":"438e4b5a-60e7-40fd-96fa-ed5d219470cb","type":"BoxAnnotation"},"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"}},"id":"e5ec1a3d-8a35-40ff-afce-e760608d876d","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"97e955a3-25a6-4f86-b5b9-1a554ea0be94","type":"BasicTickFormatter"},"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"},"ticker":{"id":"23daec5c-8fd9-4b1b-85a9-0020157bcc06","type":"BasicTicker"}},"id":"76051d03-d26e-4991-8e64-820d53433f94","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"3000010d-1b18-46fa-bd0f-2896e8e4f7c9","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"f8adf2ae-3954-40e0-aa0d-a38dc11a38b1","type":"DataRange1d"},{"attributes":{"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"}},"id":"2f3899e0-d058-44db-aa08-696b5e028b67","type":"ResetTool"},{"attributes":{"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"},"ticker":{"id":"23daec5c-8fd9-4b1b-85a9-0020157bcc06","type":"BasicTicker"}},"id":"959c6884-c2d8-42fe-bab3-3120f5c5e6a9","type":"Grid"},{"attributes":{},"id":"97e955a3-25a6-4f86-b5b9-1a554ea0be94","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"438e4b5a-60e7-40fd-96fa-ed5d219470cb","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"}},"id":"8e7ecb74-0d29-413f-92fa-c4f8da23d53d","type":"PanTool"},{"attributes":{},"id":"867e33bf-22b0-4fd9-bcc7-7e96e0c117df","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8e7ecb74-0d29-413f-92fa-c4f8da23d53d","type":"PanTool"},{"id":"95a56ff9-b9e3-4ec2-8097-ec8167708749","type":"WheelZoomTool"},{"id":"e5ec1a3d-8a35-40ff-afce-e760608d876d","type":"BoxZoomTool"},{"id":"5d28369c-55b9-40ab-8fde-488b5c0654a8","type":"SaveTool"},{"id":"2f3899e0-d058-44db-aa08-696b5e028b67","type":"ResetTool"},{"id":"0a047337-4c61-44f3-b0f1-4614c847cd00","type":"HelpTool"}]},"id":"43a4dd9d-f9a1-417f-8aaa-4156a86ac22c","type":"Toolbar"},{"attributes":{"formatter":{"id":"867e33bf-22b0-4fd9-bcc7-7e96e0c117df","type":"BasicTickFormatter"},"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e93be70-38c9-46d8-b772-72284a137f38","type":"BasicTicker"}},"id":"d0b40b3c-76db-4a89-bd41-8c1958032580","type":"LinearAxis"},{"attributes":{"callback":null},"id":"f1494834-7d97-48be-9913-3f9e7a26aeb4","type":"DataRange1d"},{"attributes":{"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"}},"id":"95a56ff9-b9e3-4ec2-8097-ec8167708749","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"eecacf0a-51a6-42b2-b297-18cff6ca8ab2","type":"Title"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"cd8afe1d-1478-45e9-806d-3273403d862e","type":"VBar"},{"attributes":{},"id":"8e93be70-38c9-46d8-b772-72284a137f38","type":"BasicTicker"},{"attributes":{"below":[{"id":"76051d03-d26e-4991-8e64-820d53433f94","type":"LinearAxis"}],"left":[{"id":"d0b40b3c-76db-4a89-bd41-8c1958032580","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"76051d03-d26e-4991-8e64-820d53433f94","type":"LinearAxis"},{"id":"959c6884-c2d8-42fe-bab3-3120f5c5e6a9","type":"Grid"},{"id":"d0b40b3c-76db-4a89-bd41-8c1958032580","type":"LinearAxis"},{"id":"322b28b2-a9ab-4fe3-a23a-85205fb998b8","type":"Grid"},{"id":"438e4b5a-60e7-40fd-96fa-ed5d219470cb","type":"BoxAnnotation"},{"id":"02efcf9c-c8d2-4a0f-bf2b-07f9a3aeb7f0","type":"GlyphRenderer"}],"title":{"id":"eecacf0a-51a6-42b2-b297-18cff6ca8ab2","type":"Title"},"tool_events":{"id":"832c7a7d-7875-4a38-bcc5-8fe392653d01","type":"ToolEvents"},"toolbar":{"id":"43a4dd9d-f9a1-417f-8aaa-4156a86ac22c","type":"Toolbar"},"x_range":{"id":"f1494834-7d97-48be-9913-3f9e7a26aeb4","type":"DataRange1d"},"y_range":{"id":"f8adf2ae-3954-40e0-aa0d-a38dc11a38b1","type":"DataRange1d"}},"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"832c7a7d-7875-4a38-bcc5-8fe392653d01","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e93be70-38c9-46d8-b772-72284a137f38","type":"BasicTicker"}},"id":"322b28b2-a9ab-4fe3-a23a-85205fb998b8","type":"Grid"},{"attributes":{},"id":"23daec5c-8fd9-4b1b-85a9-0020157bcc06","type":"BasicTicker"},{"attributes":{"plot":{"id":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f","subtype":"Figure","type":"Plot"}},"id":"5d28369c-55b9-40ab-8fde-488b5c0654a8","type":"SaveTool"},{"attributes":{"data_source":{"id":"3000010d-1b18-46fa-bd0f-2896e8e4f7c9","type":"ColumnDataSource"},"glyph":{"id":"cd8afe1d-1478-45e9-806d-3273403d862e","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"19a1fb09-0190-4454-856a-109862c2e20e","type":"VBar"},"selection_glyph":null},"id":"02efcf9c-c8d2-4a0f-bf2b-07f9a3aeb7f0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"19a1fb09-0190-4454-856a-109862c2e20e","type":"VBar"}],"root_ids":["9192fd5c-6d52-4189-8ef4-9ab8344cf20f"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"31b6eaa5-6f17-40d8-8882-5524720d7889","elementid":"1757c847-84b5-4c84-9591-c34b011a1e44","modelid":"9192fd5c-6d52-4189-8ef4-9ab8344cf20f"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});