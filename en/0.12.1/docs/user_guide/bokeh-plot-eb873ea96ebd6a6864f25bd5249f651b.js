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
      };var element = document.getElementById("6a7bbe71-10d4-4057-94e7-fb569ca28083");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6a7bbe71-10d4-4057-94e7-fb569ca28083' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"a23ed530-52f8-42fc-8178-ef89e12fbdcf":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.5,3.0,2.0],"y":[2.0,3.0,1.0,1.5]}},"id":"3b6d0a0a-6a65-40be-9dd2-048458df32cb","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8cb153a7-f512-43ce-ba89-95e325f3fffe","type":"BasicTickFormatter"},"plot":{"id":"318b6024-dfc9-4473-bd5c-3806465e7cd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e231c22-1087-4ca0-9710-ce6daa3aa114","type":"BasicTicker"}},"id":"688ef23b-202d-4502-b675-c2fc21e1452c","type":"LinearAxis"},{"attributes":{"plot":{"id":"318b6024-dfc9-4473-bd5c-3806465e7cd5","subtype":"Figure","type":"Plot"}},"id":"ad07f75c-0c50-43ec-adef-5f573c95aafc","type":"ResetTool"},{"attributes":{"callback":null},"id":"f8f0e3b3-c2d1-4fbd-9231-d616d86c6366","type":"DataRange1d"},{"attributes":{},"id":"1af490fe-8989-40b8-afd3-3f130673bac1","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"66882be0-dc9b-431d-9919-c2615c5af2c8","type":"PanTool"},{"id":"ad07f75c-0c50-43ec-adef-5f573c95aafc","type":"ResetTool"},{"id":"c3032e5e-c30d-44ef-819b-e73249046014","type":"SaveTool"}]},"id":"07453bfb-16d8-4059-a763-57726e092ab7","type":"Toolbar"},{"attributes":{"plot":{"id":"318b6024-dfc9-4473-bd5c-3806465e7cd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e231c22-1087-4ca0-9710-ce6daa3aa114","type":"BasicTicker"}},"id":"b4683234-aa1e-4868-bf19-bc25737b6e3d","type":"Grid"},{"attributes":{},"id":"8cb153a7-f512-43ce-ba89-95e325f3fffe","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d1bb529a-b56e-4926-8304-25c305ebf13d","type":"DataRange1d"},{"attributes":{},"id":"3b0688b9-6f71-4b97-84c4-a6a19616927b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee81abcb-2f76-4031-b1cd-cd313bb3b37b","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c93331a-8095-4150-a53b-59c2f57a877a","type":"Circle"},{"attributes":{"below":[{"id":"688ef23b-202d-4502-b675-c2fc21e1452c","type":"LinearAxis"}],"left":[{"id":"cdaffd71-9e2c-492f-95a9-9561d6b2e732","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"688ef23b-202d-4502-b675-c2fc21e1452c","type":"LinearAxis"},{"id":"b4683234-aa1e-4868-bf19-bc25737b6e3d","type":"Grid"},{"id":"cdaffd71-9e2c-492f-95a9-9561d6b2e732","type":"LinearAxis"},{"id":"f271a01b-6dd8-4f80-a7d8-b78482860cc6","type":"Grid"},{"id":"d4deebe9-0164-486b-a0cb-1a06eb7fdae2","type":"GlyphRenderer"}],"title":{"id":"efe4b8c4-6ef2-458a-b526-4ee1dfb71ae0","type":"Title"},"tool_events":{"id":"a1ab284a-c50e-4faa-9160-1e28a70bc457","type":"ToolEvents"},"toolbar":{"id":"07453bfb-16d8-4059-a763-57726e092ab7","type":"Toolbar"},"x_range":{"id":"f8f0e3b3-c2d1-4fbd-9231-d616d86c6366","type":"DataRange1d"},"y_range":{"id":"d1bb529a-b56e-4926-8304-25c305ebf13d","type":"DataRange1d"}},"id":"318b6024-dfc9-4473-bd5c-3806465e7cd5","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"318b6024-dfc9-4473-bd5c-3806465e7cd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b0688b9-6f71-4b97-84c4-a6a19616927b","type":"BasicTicker"}},"id":"f271a01b-6dd8-4f80-a7d8-b78482860cc6","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"efe4b8c4-6ef2-458a-b526-4ee1dfb71ae0","type":"Title"},{"attributes":{},"id":"a1ab284a-c50e-4faa-9160-1e28a70bc457","type":"ToolEvents"},{"attributes":{"formatter":{"id":"1af490fe-8989-40b8-afd3-3f130673bac1","type":"BasicTickFormatter"},"plot":{"id":"318b6024-dfc9-4473-bd5c-3806465e7cd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b0688b9-6f71-4b97-84c4-a6a19616927b","type":"BasicTicker"}},"id":"cdaffd71-9e2c-492f-95a9-9561d6b2e732","type":"LinearAxis"},{"attributes":{"plot":{"id":"318b6024-dfc9-4473-bd5c-3806465e7cd5","subtype":"Figure","type":"Plot"}},"id":"c3032e5e-c30d-44ef-819b-e73249046014","type":"SaveTool"},{"attributes":{},"id":"5e231c22-1087-4ca0-9710-ce6daa3aa114","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3b6d0a0a-6a65-40be-9dd2-048458df32cb","type":"ColumnDataSource"},"glyph":{"id":"8c93331a-8095-4150-a53b-59c2f57a877a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ee81abcb-2f76-4031-b1cd-cd313bb3b37b","type":"Circle"},"selection_glyph":null},"id":"d4deebe9-0164-486b-a0cb-1a06eb7fdae2","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"318b6024-dfc9-4473-bd5c-3806465e7cd5","subtype":"Figure","type":"Plot"}},"id":"66882be0-dc9b-431d-9919-c2615c5af2c8","type":"PanTool"}],"root_ids":["318b6024-dfc9-4473-bd5c-3806465e7cd5"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"a23ed530-52f8-42fc-8178-ef89e12fbdcf","elementid":"6a7bbe71-10d4-4057-94e7-fb569ca28083","modelid":"318b6024-dfc9-4473-bd5c-3806465e7cd5"}];
              
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