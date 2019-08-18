document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("586ad7a8-5e24-4fef-8f90-ba9503dc9e19");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '586ad7a8-5e24-4fef-8f90-ba9503dc9e19' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"a35d93d6-2bfe-496b-ba7c-715b9408b620":{"roots":{"references":[{"attributes":{"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"}},"id":"3f35d3a4-370a-4a9e-ad6c-9233a06c4b89","type":"ResetTool"},{"attributes":{"formatter":{"id":"39016f71-dd2d-4c54-80db-0fe5e1368b99","type":"BasicTickFormatter"},"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"d53e2997-befd-4567-acbb-494655aa2cc7","type":"BasicTicker"}},"id":"1a8f4296-fd33-4a46-be2f-e2e255293753","type":"LinearAxis"},{"attributes":{"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"}},"id":"0e50967f-ddcc-4928-89e7-a3d26fa1fc5d","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"fcfe1b3f-9f87-41c9-ad3c-d61d0d6e8b08","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"580fff3b-4942-4bf1-b45f-13ab523f242d","type":"BasicTicker"}},"id":"9cb8d105-6b88-4c24-a87b-c1f5aabeeadb","type":"Grid"},{"attributes":{"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"}},"id":"e3a72647-9dfb-4be5-b9be-f2c424efb98d","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"2ea95f1b-eee9-4843-85ae-1bbb3951d1c5","type":"LinearAxis"}],"left":[{"id":"1a8f4296-fd33-4a46-be2f-e2e255293753","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2ea95f1b-eee9-4843-85ae-1bbb3951d1c5","type":"LinearAxis"},{"id":"9cb8d105-6b88-4c24-a87b-c1f5aabeeadb","type":"Grid"},{"id":"1a8f4296-fd33-4a46-be2f-e2e255293753","type":"LinearAxis"},{"id":"6aeae94c-51f8-467e-9e8a-619920ac1a30","type":"Grid"},{"id":"4fc921a1-1f7f-4920-9c01-2fe44036d601","type":"BoxAnnotation"},{"id":"931a1623-0704-43d2-ba74-3d649c6701c9","type":"GlyphRenderer"}],"title":{"id":"08c5e14e-baf8-469e-8970-3035239ad518","type":"Title"},"tool_events":{"id":"8f3e9ba5-7bf5-437a-a498-26cd79f17683","type":"ToolEvents"},"toolbar":{"id":"b1f924c1-b903-4c6b-8423-14f06ce1d0ce","type":"Toolbar"},"x_range":{"id":"6fd55615-e728-4351-81ae-47a67613c53f","type":"DataRange1d"},"y_range":{"id":"f140d761-e255-4515-90de-e55a8cd5c285","type":"DataRange1d"}},"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4fc921a1-1f7f-4920-9c01-2fe44036d601","type":"BoxAnnotation"},{"attributes":{},"id":"39016f71-dd2d-4c54-80db-0fe5e1368b99","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6fd55615-e728-4351-81ae-47a67613c53f","type":"DataRange1d"},{"attributes":{},"id":"8f3e9ba5-7bf5-437a-a498-26cd79f17683","type":"ToolEvents"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"45be1475-24b2-4e8e-810a-d5ae58c2801e","type":"Oval"},{"attributes":{"plot":null,"text":null},"id":"08c5e14e-baf8-469e-8970-3035239ad518","type":"Title"},{"attributes":{"overlay":{"id":"4fc921a1-1f7f-4920-9c01-2fe44036d601","type":"BoxAnnotation"},"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"}},"id":"d1525344-fb9c-4858-a1fd-30f7e2427a01","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"f140d761-e255-4515-90de-e55a8cd5c285","type":"DataRange1d"},{"attributes":{"data_source":{"id":"fcfe1b3f-9f87-41c9-ad3c-d61d0d6e8b08","type":"ColumnDataSource"},"glyph":{"id":"45be1475-24b2-4e8e-810a-d5ae58c2801e","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"052bed45-fda6-41e6-bb01-620f106ec415","type":"Oval"},"selection_glyph":null},"id":"931a1623-0704-43d2-ba74-3d649c6701c9","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"052bed45-fda6-41e6-bb01-620f106ec415","type":"Oval"},{"attributes":{"formatter":{"id":"812266fd-b3a1-4d2c-b268-81b8f965349b","type":"BasicTickFormatter"},"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"580fff3b-4942-4bf1-b45f-13ab523f242d","type":"BasicTicker"}},"id":"2ea95f1b-eee9-4843-85ae-1bbb3951d1c5","type":"LinearAxis"},{"attributes":{"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"}},"id":"351f23cb-777c-4215-b19f-83a57520ad5e","type":"SaveTool"},{"attributes":{},"id":"812266fd-b3a1-4d2c-b268-81b8f965349b","type":"BasicTickFormatter"},{"attributes":{},"id":"580fff3b-4942-4bf1-b45f-13ab523f242d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0e50967f-ddcc-4928-89e7-a3d26fa1fc5d","type":"PanTool"},{"id":"e3a72647-9dfb-4be5-b9be-f2c424efb98d","type":"WheelZoomTool"},{"id":"d1525344-fb9c-4858-a1fd-30f7e2427a01","type":"BoxZoomTool"},{"id":"351f23cb-777c-4215-b19f-83a57520ad5e","type":"SaveTool"},{"id":"3f35d3a4-370a-4a9e-ad6c-9233a06c4b89","type":"ResetTool"},{"id":"fdab8800-d547-4d3c-8b92-a220bb3fc9c3","type":"HelpTool"}]},"id":"b1f924c1-b903-4c6b-8423-14f06ce1d0ce","type":"Toolbar"},{"attributes":{"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"}},"id":"fdab8800-d547-4d3c-8b92-a220bb3fc9c3","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"c64adad1-297e-47b1-8463-0c1708a82be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"d53e2997-befd-4567-acbb-494655aa2cc7","type":"BasicTicker"}},"id":"6aeae94c-51f8-467e-9e8a-619920ac1a30","type":"Grid"},{"attributes":{},"id":"d53e2997-befd-4567-acbb-494655aa2cc7","type":"BasicTicker"}],"root_ids":["c64adad1-297e-47b1-8463-0c1708a82be6"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"a35d93d6-2bfe-496b-ba7c-715b9408b620","elementid":"586ad7a8-5e24-4fef-8f90-ba9503dc9e19","modelid":"c64adad1-297e-47b1-8463-0c1708a82be6"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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