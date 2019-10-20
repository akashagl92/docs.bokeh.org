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
      };var element = document.getElementById("106290ca-9989-495e-92a1-4d59e03c1ea4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '106290ca-9989-495e-92a1-4d59e03c1ea4' but no matching script tag was found. ")
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
                var docs_json = {"ff6f8efb-6bea-4529-b1c8-3af650884b15":{"roots":{"references":[{"attributes":{"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"}},"id":"f95a566e-9d51-4fb8-92a4-4348fce1639d","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"98ce1c83-a669-4f94-8ff0-431fc47b7054","type":"LinearAxis"}],"left":[{"id":"bfc2cdf0-644f-48cd-b285-9ca825d78b46","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"98ce1c83-a669-4f94-8ff0-431fc47b7054","type":"LinearAxis"},{"id":"8fa811f9-4b9c-4201-93fd-6d9b224e1241","type":"Grid"},{"id":"bfc2cdf0-644f-48cd-b285-9ca825d78b46","type":"LinearAxis"},{"id":"effc8e74-7594-40b2-a762-4f84a8745c31","type":"Grid"},{"id":"c6790131-edec-4229-9fa0-7fc84aa542d0","type":"BoxAnnotation"},{"id":"7f4e8a09-4a10-4c18-8dbf-8d83c1ebedc1","type":"GlyphRenderer"}],"title":{"id":"ed236ad3-417d-4781-83a1-74e33b7d3398","type":"Title"},"tool_events":{"id":"e974aaf5-a78c-4d5b-8b98-db2a89e1c67d","type":"ToolEvents"},"toolbar":{"id":"72f88db2-1ad3-4873-b95f-4ee5d2634d03","type":"Toolbar"},"x_range":{"id":"14fc3df4-f366-4065-965e-80cc6fae607e","type":"DataRange1d"},"x_scale":{"id":"f5bf7ae6-e331-4d7e-b13d-1be780de2ac4","type":"LinearScale"},"y_range":{"id":"01ee1b2e-d1ef-4dff-9090-29927ac62396","type":"DataRange1d"},"y_scale":{"id":"715b972c-caf4-43cc-8f78-66f11a958da5","type":"LinearScale"}},"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"}},"id":"ed4e00c0-c91a-4b8e-92ba-697a42c1ac9c","type":"SaveTool"},{"attributes":{"data_source":{"id":"01ec8723-64e8-47b7-9f3c-142e23a055a5","type":"ColumnDataSource"},"glyph":{"id":"1f4eae97-c40b-4b9d-afb8-390357e72d33","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f851ac5d-1575-4dd8-88d8-83fe8c93b76e","type":"Circle"},"selection_glyph":null},"id":"7f4e8a09-4a10-4c18-8dbf-8d83c1ebedc1","type":"GlyphRenderer"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"ed236ad3-417d-4781-83a1-74e33b7d3398","type":"Title"},{"attributes":{},"id":"b7b3282e-412d-451e-8dba-931676a3ec9b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"01ee1b2e-d1ef-4dff-9090-29927ac62396","type":"DataRange1d"},{"attributes":{"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"}},"id":"2d29dba6-2382-4794-a484-adf2f4023b2b","type":"PanTool"},{"attributes":{"callback":null},"id":"14fc3df4-f366-4065-965e-80cc6fae607e","type":"DataRange1d"},{"attributes":{"overlay":{"id":"c6790131-edec-4229-9fa0-7fc84aa542d0","type":"BoxAnnotation"},"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"}},"id":"8454eb4b-0fec-4562-985e-b84d938f335d","type":"BoxZoomTool"},{"attributes":{},"id":"e974aaf5-a78c-4d5b-8b98-db2a89e1c67d","type":"ToolEvents"},{"attributes":{},"id":"f5bf7ae6-e331-4d7e-b13d-1be780de2ac4","type":"LinearScale"},{"attributes":{},"id":"1e17adb0-1234-4dda-8158-30ccc16be773","type":"BasicTicker"},{"attributes":{},"id":"3877c16d-0210-4d67-8f52-e07eb468e1a5","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"01ec8723-64e8-47b7-9f3c-142e23a055a5","type":"ColumnDataSource"},{"attributes":{},"id":"14451830-eb32-438c-8cb0-7c87b9e801e3","type":"BasicTicker"},{"attributes":{},"id":"715b972c-caf4-43cc-8f78-66f11a958da5","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1f4eae97-c40b-4b9d-afb8-390357e72d33","type":"Circle"},{"attributes":{"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e17adb0-1234-4dda-8158-30ccc16be773","type":"BasicTicker"}},"id":"8fa811f9-4b9c-4201-93fd-6d9b224e1241","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"14451830-eb32-438c-8cb0-7c87b9e801e3","type":"BasicTicker"}},"id":"effc8e74-7594-40b2-a762-4f84a8745c31","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c6790131-edec-4229-9fa0-7fc84aa542d0","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"}},"id":"e2051770-5033-4759-aab2-729b60d23382","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2d29dba6-2382-4794-a484-adf2f4023b2b","type":"PanTool"},{"id":"f95a566e-9d51-4fb8-92a4-4348fce1639d","type":"WheelZoomTool"},{"id":"8454eb4b-0fec-4562-985e-b84d938f335d","type":"BoxZoomTool"},{"id":"ed4e00c0-c91a-4b8e-92ba-697a42c1ac9c","type":"SaveTool"},{"id":"e2051770-5033-4759-aab2-729b60d23382","type":"ResetTool"},{"id":"4c59f84b-77ed-4972-92f3-1a738fc9da7e","type":"HelpTool"}]},"id":"72f88db2-1ad3-4873-b95f-4ee5d2634d03","type":"Toolbar"},{"attributes":{"formatter":{"id":"3877c16d-0210-4d67-8f52-e07eb468e1a5","type":"BasicTickFormatter"},"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e17adb0-1234-4dda-8158-30ccc16be773","type":"BasicTicker"}},"id":"98ce1c83-a669-4f94-8ff0-431fc47b7054","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b7b3282e-412d-451e-8dba-931676a3ec9b","type":"BasicTickFormatter"},"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"14451830-eb32-438c-8cb0-7c87b9e801e3","type":"BasicTicker"}},"id":"bfc2cdf0-644f-48cd-b285-9ca825d78b46","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f851ac5d-1575-4dd8-88d8-83fe8c93b76e","type":"Circle"},{"attributes":{"plot":{"id":"fed45252-aba5-4407-b43b-0d22102be5b7","subtype":"Figure","type":"Plot"}},"id":"4c59f84b-77ed-4972-92f3-1a738fc9da7e","type":"HelpTool"}],"root_ids":["fed45252-aba5-4407-b43b-0d22102be5b7"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ff6f8efb-6bea-4529-b1c8-3af650884b15","elementid":"106290ca-9989-495e-92a1-4d59e03c1ea4","modelid":"fed45252-aba5-4407-b43b-0d22102be5b7"}];
                
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
