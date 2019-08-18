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
      };var element = document.getElementById("268b2f70-a90f-45da-9f7b-737904d88758");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '268b2f70-a90f-45da-9f7b-737904d88758' but no matching script tag was found. ")
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
                var docs_json = {"a513981c-70db-4f35-8dfa-19dc22ab3cb8":{"roots":{"references":[{"attributes":{},"id":"92308cca-5fd3-4255-b7a5-8c9d67f28920","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f0570273-069f-46ba-aa6d-ff8092d5b87b","type":"Asterisk"},{"attributes":{"dimension":1,"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"88c4aa33-2c40-4dd5-9e4c-c6245606eab6","type":"BasicTicker"}},"id":"9d311b80-c29f-42f5-8ac7-b049b935a093","type":"Grid"},{"attributes":{"data_source":{"id":"5b3645a5-8332-406a-ab59-bcf0bae60749","type":"ColumnDataSource"},"glyph":{"id":"ec49263d-178f-4e9d-95ad-3198fb884c1e","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f0570273-069f-46ba-aa6d-ff8092d5b87b","type":"Asterisk"},"selection_glyph":null},"id":"b000d6f5-4059-4f35-9cd8-761bd283cd3a","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"258445ea-489b-4a55-96f8-42480ee2ca00","type":"BoxAnnotation"},"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"}},"id":"959b8c59-c675-4cc3-ac67-bae87a190947","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"}},"id":"c62ec2a4-09f3-4ee8-a24e-607928d5e666","type":"PanTool"},{"attributes":{},"id":"030588fb-71d4-4f8a-9aec-4217fb810ae4","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4aad7d71-2bbe-4229-ab1b-7d2e034fc33d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e32adb38-8df3-4be7-b12a-959445bf7aab","type":"BasicTickFormatter"},"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"88c4aa33-2c40-4dd5-9e4c-c6245606eab6","type":"BasicTicker"}},"id":"cd9ea39e-520d-46db-8393-62f0f771c55a","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec49263d-178f-4e9d-95ad-3198fb884c1e","type":"Asterisk"},{"attributes":{"plot":null,"text":""},"id":"a93843f5-a8c8-4d81-990c-c405487bb183","type":"Title"},{"attributes":{},"id":"88c4aa33-2c40-4dd5-9e4c-c6245606eab6","type":"BasicTicker"},{"attributes":{"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"}},"id":"b0a58ed6-d6b8-4494-beb6-d12ba8534364","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"ba1aeab1-d5e2-4b49-93de-cf8fec4f98f1","type":"LinearAxis"}],"left":[{"id":"cd9ea39e-520d-46db-8393-62f0f771c55a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ba1aeab1-d5e2-4b49-93de-cf8fec4f98f1","type":"LinearAxis"},{"id":"bccf3a16-42e1-4ae8-8714-db7000f095b8","type":"Grid"},{"id":"cd9ea39e-520d-46db-8393-62f0f771c55a","type":"LinearAxis"},{"id":"9d311b80-c29f-42f5-8ac7-b049b935a093","type":"Grid"},{"id":"258445ea-489b-4a55-96f8-42480ee2ca00","type":"BoxAnnotation"},{"id":"b000d6f5-4059-4f35-9cd8-761bd283cd3a","type":"GlyphRenderer"}],"title":{"id":"a93843f5-a8c8-4d81-990c-c405487bb183","type":"Title"},"tool_events":{"id":"f8a45d06-5ef8-4207-af95-f5143848e597","type":"ToolEvents"},"toolbar":{"id":"ef00dc11-2e4c-492e-b410-729ccd8ddd62","type":"Toolbar"},"x_range":{"id":"05372dd1-2951-425c-944c-cdd84f99cc06","type":"DataRange1d"},"y_range":{"id":"4aad7d71-2bbe-4229-ab1b-7d2e034fc33d","type":"DataRange1d"}},"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e32adb38-8df3-4be7-b12a-959445bf7aab","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"5b3645a5-8332-406a-ab59-bcf0bae60749","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"}},"id":"74b62a7b-c3ed-4747-8014-90f45c9fa636","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c62ec2a4-09f3-4ee8-a24e-607928d5e666","type":"PanTool"},{"id":"b0a58ed6-d6b8-4494-beb6-d12ba8534364","type":"WheelZoomTool"},{"id":"959b8c59-c675-4cc3-ac67-bae87a190947","type":"BoxZoomTool"},{"id":"5b87e246-7154-4406-b685-d0d7965f60e5","type":"SaveTool"},{"id":"74b62a7b-c3ed-4747-8014-90f45c9fa636","type":"ResetTool"},{"id":"44ba39d7-1b88-45d5-89d6-b13ed2de85c7","type":"HelpTool"}]},"id":"ef00dc11-2e4c-492e-b410-729ccd8ddd62","type":"Toolbar"},{"attributes":{"formatter":{"id":"92308cca-5fd3-4255-b7a5-8c9d67f28920","type":"BasicTickFormatter"},"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"030588fb-71d4-4f8a-9aec-4217fb810ae4","type":"BasicTicker"}},"id":"ba1aeab1-d5e2-4b49-93de-cf8fec4f98f1","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"258445ea-489b-4a55-96f8-42480ee2ca00","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"05372dd1-2951-425c-944c-cdd84f99cc06","type":"DataRange1d"},{"attributes":{"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"030588fb-71d4-4f8a-9aec-4217fb810ae4","type":"BasicTicker"}},"id":"bccf3a16-42e1-4ae8-8714-db7000f095b8","type":"Grid"},{"attributes":{},"id":"f8a45d06-5ef8-4207-af95-f5143848e597","type":"ToolEvents"},{"attributes":{"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"}},"id":"44ba39d7-1b88-45d5-89d6-b13ed2de85c7","type":"HelpTool"},{"attributes":{"plot":{"id":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8","subtype":"Figure","type":"Plot"}},"id":"5b87e246-7154-4406-b685-d0d7965f60e5","type":"SaveTool"}],"root_ids":["e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"a513981c-70db-4f35-8dfa-19dc22ab3cb8","elementid":"268b2f70-a90f-45da-9f7b-737904d88758","modelid":"e26fd8a1-2ddd-43ce-8485-ca9a5759d7f8"}];
                
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
