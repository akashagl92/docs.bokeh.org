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
      };var element = document.getElementById("d6e4d8fb-488b-4805-806a-716572af6d70");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd6e4d8fb-488b-4805-806a-716572af6d70' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"315b31c9-53f1-4ad4-87cc-eae4be8e828b":{"roots":{"references":[{"attributes":{"callback":null},"id":"9d0af8fd-da93-4bec-9924-4203e3c6bbfb","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ed4916ca-9749-4b99-8cad-735daf9a6b7e","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"3f890c48-2c0e-4207-af61-eb2ea16fda45","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"9372dab3-fc24-42c5-8f18-ccce849e4e0c","type":"BasicTickFormatter"},"plot":{"id":"22774587-e560-4fbb-9a44-a8af19fac18f","type":"Plot"},"ticker":{"id":"855bd620-11da-4afc-8c85-92461b143040","type":"BasicTicker"}},"id":"1cc0b3d4-b661-4a26-b78f-7403affc2e28","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3f890c48-2c0e-4207-af61-eb2ea16fda45","type":"ColumnDataSource"},"glyph":{"id":"2779f847-ae92-47d1-a34e-13f279f000d7","type":"Oval"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"af36cd91-262e-4f5a-a013-586f93df3572","type":"GlyphRenderer"},{"attributes":{},"id":"46bcd767-2a33-41a5-8e98-09cb76f9c0eb","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4e79f64e-9406-4845-a065-6e0b4ba47fc2","type":"Toolbar"},{"attributes":{"below":[{"id":"1cc0b3d4-b661-4a26-b78f-7403affc2e28","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0636eb8e-98b2-4239-bf5c-3f06f039dad0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"af36cd91-262e-4f5a-a013-586f93df3572","type":"GlyphRenderer"},{"id":"1cc0b3d4-b661-4a26-b78f-7403affc2e28","type":"LinearAxis"},{"id":"0636eb8e-98b2-4239-bf5c-3f06f039dad0","type":"LinearAxis"},{"id":"8ba5b0aa-f5ef-4b9f-9092-04c96ff1f88a","type":"Grid"},{"id":"af52aaae-05b3-4d31-87f4-e262c5f486ff","type":"Grid"}],"title":null,"tool_events":{"id":"46bcd767-2a33-41a5-8e98-09cb76f9c0eb","type":"ToolEvents"},"toolbar":{"id":"4e79f64e-9406-4845-a065-6e0b4ba47fc2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ed4916ca-9749-4b99-8cad-735daf9a6b7e","type":"DataRange1d"},"y_range":{"id":"9d0af8fd-da93-4bec-9924-4203e3c6bbfb","type":"DataRange1d"}},"id":"22774587-e560-4fbb-9a44-a8af19fac18f","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"22774587-e560-4fbb-9a44-a8af19fac18f","type":"Plot"},"ticker":{"id":"d5e74194-8dc5-499c-80c8-1aab7bb48396","type":"BasicTicker"}},"id":"af52aaae-05b3-4d31-87f4-e262c5f486ff","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"2779f847-ae92-47d1-a34e-13f279f000d7","type":"Oval"},{"attributes":{"formatter":{"id":"0318c4a2-685e-4c67-9fd3-1636b9824098","type":"BasicTickFormatter"},"plot":{"id":"22774587-e560-4fbb-9a44-a8af19fac18f","type":"Plot"},"ticker":{"id":"d5e74194-8dc5-499c-80c8-1aab7bb48396","type":"BasicTicker"}},"id":"0636eb8e-98b2-4239-bf5c-3f06f039dad0","type":"LinearAxis"},{"attributes":{},"id":"d5e74194-8dc5-499c-80c8-1aab7bb48396","type":"BasicTicker"},{"attributes":{},"id":"0318c4a2-685e-4c67-9fd3-1636b9824098","type":"BasicTickFormatter"},{"attributes":{},"id":"9372dab3-fc24-42c5-8f18-ccce849e4e0c","type":"BasicTickFormatter"},{"attributes":{},"id":"855bd620-11da-4afc-8c85-92461b143040","type":"BasicTicker"},{"attributes":{"plot":{"id":"22774587-e560-4fbb-9a44-a8af19fac18f","type":"Plot"},"ticker":{"id":"855bd620-11da-4afc-8c85-92461b143040","type":"BasicTicker"}},"id":"8ba5b0aa-f5ef-4b9f-9092-04c96ff1f88a","type":"Grid"}],"root_ids":["22774587-e560-4fbb-9a44-a8af19fac18f"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"315b31c9-53f1-4ad4-87cc-eae4be8e828b","elementid":"d6e4d8fb-488b-4805-806a-716572af6d70","modelid":"22774587-e560-4fbb-9a44-a8af19fac18f"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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