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
      };var element = document.getElementById("efeb6be9-47f1-4391-8715-2193db32e2f5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'efeb6be9-47f1-4391-8715-2193db32e2f5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"2cf5baac-1718-47ca-9cc7-d31ea5b1e0e8":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb41000c-7008-4b0e-b83f-69ad158154e6","type":"BasicTicker"}},"id":"a34522fc-c22a-4515-86c0-c3c799b8c71b","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5d6be6d-d646-46f9-a199-be0731cfaf6d","type":"Circle"},{"attributes":{},"id":"3b53881a-dd2a-4fd7-8ad6-f3386d28aecc","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0adcf8f1-f482-47eb-b782-3263634beb9e","type":"DataRange1d"},{"attributes":{"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"}},"id":"cb23d7ab-588d-42d0-b642-528b8d57a41f","type":"HelpTool"},{"attributes":{"data_source":{"id":"8ed77ea3-30a1-456f-91bf-9eca4ef6d05a","type":"ColumnDataSource"},"glyph":{"id":"b5d6be6d-d646-46f9-a199-be0731cfaf6d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8cae20fd-4613-48f2-b50e-8e35ab25a4eb","type":"Circle"},"selection_glyph":null},"id":"e3cd22b6-4b13-42aa-bd1b-790ed016795b","type":"GlyphRenderer"},{"attributes":{},"id":"fb41000c-7008-4b0e-b83f-69ad158154e6","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"808c8561-c827-4afa-a03a-b1d475454d12","type":"BoxAnnotation"},{"attributes":{},"id":"9cf0f5f3-1d65-4788-8d88-b21323dc7aad","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"db58da0d-db2c-464a-aba3-02cc5e19e8d1","type":"Title"},{"attributes":{"formatter":{"id":"dffde268-19e1-40b4-9d5a-110b62f9497c","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb41000c-7008-4b0e-b83f-69ad158154e6","type":"BasicTicker"}},"id":"e193af03-8056-4b1f-92ac-9b70ac63c6ae","type":"LinearAxis"},{"attributes":{"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"}},"id":"97e10a2a-62f7-465d-a3a3-1cbb87ffe624","type":"SaveTool"},{"attributes":{"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"}},"id":"12e14262-5e01-43cf-9c10-b65f1c9a2827","type":"PanTool"},{"attributes":{"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"}},"id":"020ef64c-6924-4223-9433-a38b99f9eb77","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"8ed77ea3-30a1-456f-91bf-9eca4ef6d05a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8cae20fd-4613-48f2-b50e-8e35ab25a4eb","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"12e14262-5e01-43cf-9c10-b65f1c9a2827","type":"PanTool"},{"id":"020ef64c-6924-4223-9433-a38b99f9eb77","type":"WheelZoomTool"},{"id":"3b90877c-7375-45ca-8b40-f19bee72d47b","type":"BoxZoomTool"},{"id":"97e10a2a-62f7-465d-a3a3-1cbb87ffe624","type":"SaveTool"},{"id":"562c2600-de82-4878-abbb-eff225914e64","type":"ResetTool"},{"id":"cb23d7ab-588d-42d0-b642-528b8d57a41f","type":"HelpTool"}]},"id":"d4aa63be-1775-4f2a-8b6d-71b59abadf11","type":"Toolbar"},{"attributes":{},"id":"a6980751-e989-4541-b2c5-a74bd3746832","type":"ToolEvents"},{"attributes":{"formatter":{"id":"3b53881a-dd2a-4fd7-8ad6-f3386d28aecc","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cf0f5f3-1d65-4788-8d88-b21323dc7aad","type":"BasicTicker"}},"id":"da135767-b2de-491a-8a71-80fd77b45a0e","type":"LinearAxis"},{"attributes":{"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cf0f5f3-1d65-4788-8d88-b21323dc7aad","type":"BasicTicker"}},"id":"b9a8f4fa-4d66-4d08-a948-fd39288e6401","type":"Grid"},{"attributes":{"overlay":{"id":"808c8561-c827-4afa-a03a-b1d475454d12","type":"BoxAnnotation"},"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"}},"id":"3b90877c-7375-45ca-8b40-f19bee72d47b","type":"BoxZoomTool"},{"attributes":{},"id":"dffde268-19e1-40b4-9d5a-110b62f9497c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"}},"id":"562c2600-de82-4878-abbb-eff225914e64","type":"ResetTool"},{"attributes":{"below":[{"id":"da135767-b2de-491a-8a71-80fd77b45a0e","type":"LinearAxis"}],"left":[{"id":"e193af03-8056-4b1f-92ac-9b70ac63c6ae","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"da135767-b2de-491a-8a71-80fd77b45a0e","type":"LinearAxis"},{"id":"b9a8f4fa-4d66-4d08-a948-fd39288e6401","type":"Grid"},{"id":"e193af03-8056-4b1f-92ac-9b70ac63c6ae","type":"LinearAxis"},{"id":"a34522fc-c22a-4515-86c0-c3c799b8c71b","type":"Grid"},{"id":"808c8561-c827-4afa-a03a-b1d475454d12","type":"BoxAnnotation"},{"id":"e3cd22b6-4b13-42aa-bd1b-790ed016795b","type":"GlyphRenderer"}],"title":{"id":"db58da0d-db2c-464a-aba3-02cc5e19e8d1","type":"Title"},"tool_events":{"id":"a6980751-e989-4541-b2c5-a74bd3746832","type":"ToolEvents"},"toolbar":{"id":"d4aa63be-1775-4f2a-8b6d-71b59abadf11","type":"Toolbar"},"x_range":{"id":"0adcf8f1-f482-47eb-b782-3263634beb9e","type":"DataRange1d"},"y_range":{"id":"10032182-dee5-4411-a774-f45c323a4067","type":"DataRange1d"}},"id":"f6e20af7-99da-45f5-bc41-b56019897cd8","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"10032182-dee5-4411-a774-f45c323a4067","type":"DataRange1d"}],"root_ids":["f6e20af7-99da-45f5-bc41-b56019897cd8"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"2cf5baac-1718-47ca-9cc7-d31ea5b1e0e8","elementid":"efeb6be9-47f1-4391-8715-2193db32e2f5","modelid":"f6e20af7-99da-45f5-bc41-b56019897cd8"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
