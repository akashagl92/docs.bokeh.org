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
      };var element = document.getElementById("a586b570-a59f-46f2-882d-4b5540a1746d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a586b570-a59f-46f2-882d-4b5540a1746d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"db85bbcc-d71a-4600-9f41-be1cfbd4a96a":{"roots":{"references":[{"attributes":{"callback":null},"id":"afe61cb7-0802-4731-a33e-4b250c5c88ad","type":"DataRange1d"},{"attributes":{"callback":null},"id":"e5135a5f-9ad8-408e-b488-add2b5bff5d2","type":"DataRange1d"},{"attributes":{"formatter":{"id":"db405e88-5d01-4266-b317-535e12931948","type":"BasicTickFormatter"},"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0d30eeb-56bb-4724-ba1b-3fb2d6a5caaa","type":"BasicTicker"}},"id":"81cc057d-bdc8-4600-84d6-98501f97f8e0","type":"LinearAxis"},{"attributes":{"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"}},"id":"df23492f-010d-4893-b1ad-fde4eac6f708","type":"SaveTool"},{"attributes":{"overlay":{"id":"e257118a-51d8-41d5-83b9-cb7791bf89a1","type":"BoxAnnotation"},"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"}},"id":"ad1f2cbb-59d0-4888-a950-b290b572045b","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":null},"id":"1dd8cc77-3e8a-4542-9fa3-511554df647b","type":"Title"},{"attributes":{"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"}},"id":"79f0205c-9a9f-4da9-be08-3a39ff6f5f64","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"}},"id":"1bf996bb-9675-446a-be55-b66f662ae98a","type":"HelpTool"},{"attributes":{},"id":"62f742ec-bc59-416e-a543-17c9f76a2846","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e3228162-a5de-4c10-9a22-15a47fb7f0e9","type":"PanTool"},{"id":"79f0205c-9a9f-4da9-be08-3a39ff6f5f64","type":"WheelZoomTool"},{"id":"ad1f2cbb-59d0-4888-a950-b290b572045b","type":"BoxZoomTool"},{"id":"df23492f-010d-4893-b1ad-fde4eac6f708","type":"SaveTool"},{"id":"9137c891-d9f8-451f-8a61-14a7db8a35b0","type":"ResetTool"},{"id":"1bf996bb-9675-446a-be55-b66f662ae98a","type":"HelpTool"}]},"id":"1e7e2ae0-5ac5-403f-870d-1cee59d65737","type":"Toolbar"},{"attributes":{"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0d30eeb-56bb-4724-ba1b-3fb2d6a5caaa","type":"BasicTicker"}},"id":"0e097128-a5df-4d7f-9188-23e4e629da06","type":"Grid"},{"attributes":{"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"}},"id":"e3228162-a5de-4c10-9a22-15a47fb7f0e9","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"6d3ce9fe-03e9-414a-828e-f3a0a440257d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"370ec727-3967-4bda-a2b9-566fa73db878","type":"Annulus"},{"attributes":{"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"}},"id":"9137c891-d9f8-451f-8a61-14a7db8a35b0","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e257118a-51d8-41d5-83b9-cb7791bf89a1","type":"BoxAnnotation"},{"attributes":{},"id":"5f5091ef-181b-424d-be1a-d1c77385051e","type":"ToolEvents"},{"attributes":{},"id":"f0d30eeb-56bb-4724-ba1b-3fb2d6a5caaa","type":"BasicTicker"},{"attributes":{"data_source":{"id":"6d3ce9fe-03e9-414a-828e-f3a0a440257d","type":"ColumnDataSource"},"glyph":{"id":"5a7d047e-1ab6-41d2-a848-2f5df84b29a0","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"370ec727-3967-4bda-a2b9-566fa73db878","type":"Annulus"},"selection_glyph":null},"id":"cd381320-76d4-4062-ac95-68724ada7364","type":"GlyphRenderer"},{"attributes":{},"id":"44537f71-2bae-47c8-a831-7969343b9695","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"},"ticker":{"id":"44537f71-2bae-47c8-a831-7969343b9695","type":"BasicTicker"}},"id":"ac4a3373-d8f2-4dc8-9cc5-ab40e30ae2e0","type":"Grid"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a7d047e-1ab6-41d2-a848-2f5df84b29a0","type":"Annulus"},{"attributes":{"formatter":{"id":"62f742ec-bc59-416e-a543-17c9f76a2846","type":"BasicTickFormatter"},"plot":{"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"},"ticker":{"id":"44537f71-2bae-47c8-a831-7969343b9695","type":"BasicTicker"}},"id":"41d7d225-3a3c-4030-9c74-a805d993c89b","type":"LinearAxis"},{"attributes":{"below":[{"id":"81cc057d-bdc8-4600-84d6-98501f97f8e0","type":"LinearAxis"}],"left":[{"id":"41d7d225-3a3c-4030-9c74-a805d993c89b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"81cc057d-bdc8-4600-84d6-98501f97f8e0","type":"LinearAxis"},{"id":"0e097128-a5df-4d7f-9188-23e4e629da06","type":"Grid"},{"id":"41d7d225-3a3c-4030-9c74-a805d993c89b","type":"LinearAxis"},{"id":"ac4a3373-d8f2-4dc8-9cc5-ab40e30ae2e0","type":"Grid"},{"id":"e257118a-51d8-41d5-83b9-cb7791bf89a1","type":"BoxAnnotation"},{"id":"cd381320-76d4-4062-ac95-68724ada7364","type":"GlyphRenderer"}],"title":{"id":"1dd8cc77-3e8a-4542-9fa3-511554df647b","type":"Title"},"tool_events":{"id":"5f5091ef-181b-424d-be1a-d1c77385051e","type":"ToolEvents"},"toolbar":{"id":"1e7e2ae0-5ac5-403f-870d-1cee59d65737","type":"Toolbar"},"x_range":{"id":"afe61cb7-0802-4731-a33e-4b250c5c88ad","type":"DataRange1d"},"y_range":{"id":"e5135a5f-9ad8-408e-b488-add2b5bff5d2","type":"DataRange1d"}},"id":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"db405e88-5d01-4266-b317-535e12931948","type":"BasicTickFormatter"}],"root_ids":["2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"db85bbcc-d71a-4600-9f41-be1cfbd4a96a","elementid":"a586b570-a59f-46f2-882d-4b5540a1746d","modelid":"2e4d4a71-64b7-4a3f-bdcf-efc15afbecc6"}];
              
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