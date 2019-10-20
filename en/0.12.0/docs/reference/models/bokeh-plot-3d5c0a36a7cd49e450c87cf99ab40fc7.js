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
      };var element = document.getElementById("2f2c1b27-294e-45be-9494-9d6d42656f81");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2f2c1b27-294e-45be-9494-9d6d42656f81' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"04897b40-dc09-45a2-acdc-a68dea005acf":{"roots":{"references":[{"attributes":{},"id":"0a1d0a83-bd80-4e8d-9bc8-dca799378610","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"b0d47a4f-ae4a-46e2-9454-e24411392fda","type":"Plot"},"ticker":{"id":"de1f3dc4-a3c0-4664-8e1d-c7f6a4a42f7b","type":"BasicTicker"}},"id":"d1ac7201-1ce5-4c7b-9395-6eb864f857db","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"14d4d9f9-56bc-4cc8-8cd9-2677b12f7468","type":"ColumnDataSource"},{"attributes":{},"id":"e315f660-fe02-437e-b998-72e691bd157a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0a1d0a83-bd80-4e8d-9bc8-dca799378610","type":"BasicTickFormatter"},"plot":{"id":"b0d47a4f-ae4a-46e2-9454-e24411392fda","type":"Plot"},"ticker":{"id":"37127f12-f429-46dd-b4f7-fad2048c8980","type":"BasicTicker"}},"id":"f0b18144-995a-4b63-afcb-b56a3efb76ea","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6db3fc7b-8054-49c8-bb41-a717bfb71dcb","type":"DataRange1d"},{"attributes":{"callback":null},"id":"e0f32516-67a7-4a17-8d39-76e423ec8bd5","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14d4d9f9-56bc-4cc8-8cd9-2677b12f7468","type":"ColumnDataSource"},"glyph":{"id":"5b46a453-6711-4b59-b2d2-07c3dac062f0","type":"Arc"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b5092dad-fc18-4917-80c4-4ce7673588d5","type":"GlyphRenderer"},{"attributes":{},"id":"de1f3dc4-a3c0-4664-8e1d-c7f6a4a42f7b","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e8cc1353-4940-4dce-8dd5-cc78dd58c380","type":"Toolbar"},{"attributes":{},"id":"34e59303-0f45-4ed7-8a59-cc62f66a71e8","type":"ToolEvents"},{"attributes":{},"id":"37127f12-f429-46dd-b4f7-fad2048c8980","type":"BasicTicker"},{"attributes":{"plot":{"id":"b0d47a4f-ae4a-46e2-9454-e24411392fda","type":"Plot"},"ticker":{"id":"37127f12-f429-46dd-b4f7-fad2048c8980","type":"BasicTicker"}},"id":"e34ccd53-4599-4f14-aafa-f3bf122083e4","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b46a453-6711-4b59-b2d2-07c3dac062f0","type":"Arc"},{"attributes":{"below":[{"id":"f0b18144-995a-4b63-afcb-b56a3efb76ea","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f80119df-a96d-4aa5-ba8e-a620392082be","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b5092dad-fc18-4917-80c4-4ce7673588d5","type":"GlyphRenderer"},{"id":"f0b18144-995a-4b63-afcb-b56a3efb76ea","type":"LinearAxis"},{"id":"f80119df-a96d-4aa5-ba8e-a620392082be","type":"LinearAxis"},{"id":"e34ccd53-4599-4f14-aafa-f3bf122083e4","type":"Grid"},{"id":"d1ac7201-1ce5-4c7b-9395-6eb864f857db","type":"Grid"}],"title":null,"tool_events":{"id":"34e59303-0f45-4ed7-8a59-cc62f66a71e8","type":"ToolEvents"},"toolbar":{"id":"e8cc1353-4940-4dce-8dd5-cc78dd58c380","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e0f32516-67a7-4a17-8d39-76e423ec8bd5","type":"DataRange1d"},"y_range":{"id":"6db3fc7b-8054-49c8-bb41-a717bfb71dcb","type":"DataRange1d"}},"id":"b0d47a4f-ae4a-46e2-9454-e24411392fda","type":"Plot"},{"attributes":{"formatter":{"id":"e315f660-fe02-437e-b998-72e691bd157a","type":"BasicTickFormatter"},"plot":{"id":"b0d47a4f-ae4a-46e2-9454-e24411392fda","type":"Plot"},"ticker":{"id":"de1f3dc4-a3c0-4664-8e1d-c7f6a4a42f7b","type":"BasicTicker"}},"id":"f80119df-a96d-4aa5-ba8e-a620392082be","type":"LinearAxis"}],"root_ids":["b0d47a4f-ae4a-46e2-9454-e24411392fda"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"04897b40-dc09-45a2-acdc-a68dea005acf","elementid":"2f2c1b27-294e-45be-9494-9d6d42656f81","modelid":"b0d47a4f-ae4a-46e2-9454-e24411392fda"}];
              
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