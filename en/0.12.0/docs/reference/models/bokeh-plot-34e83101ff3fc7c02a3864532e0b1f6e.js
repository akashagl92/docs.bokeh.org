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
      };var element = document.getElementById("119e1a7b-8869-44e7-93a5-c81e4f81a7e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '119e1a7b-8869-44e7-93a5-c81e4f81a7e7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"682f2545-ffd0-44be-aa7e-b52b7152905f":{"roots":{"references":[{"attributes":{},"id":"d1dad311-6cf5-4562-ae52-802e0e5532d4","type":"BasicTickFormatter"},{"attributes":{},"id":"63929fe9-eb9a-4191-b49c-5b9e7a3eed4b","type":"ToolEvents"},{"attributes":{"plot":{"id":"455ed834-917e-4542-927f-5a9f8235f908","type":"Plot"},"ticker":{"id":"418fbf8f-a2e6-4c11-8046-d7d7ea2d9f87","type":"BasicTicker"}},"id":"fca0998a-299e-403b-b750-496684b4fc94","type":"Grid"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b359c47-1ee9-43d5-8686-03b6fdd2f129","type":"Square"},{"attributes":{},"id":"fd6989f8-f7a6-4ef9-a091-a48827ca709a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"81702d80-b39a-406e-9ed8-8e77418e430b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d0afd6f4-fb87-4d66-a10c-fa5fcb90f851","type":"BasicTickFormatter"},"plot":{"id":"455ed834-917e-4542-927f-5a9f8235f908","type":"Plot"},"ticker":{"id":"fd6989f8-f7a6-4ef9-a091-a48827ca709a","type":"BasicTicker"}},"id":"8e97bff9-1f2f-42c2-8f9a-2cfdc6dc516b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"056aa971-abaf-402d-9b3b-ebc3741ad1c2","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"455ed834-917e-4542-927f-5a9f8235f908","type":"Plot"},"ticker":{"id":"fd6989f8-f7a6-4ef9-a091-a48827ca709a","type":"BasicTicker"}},"id":"b189f7a9-672c-48b0-9640-4a865c5a0523","type":"Grid"},{"attributes":{"data_source":{"id":"c27d2725-7b7c-4bfd-90a4-00cdcee33278","type":"ColumnDataSource"},"glyph":{"id":"0b359c47-1ee9-43d5-8686-03b6fdd2f129","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"238b6265-44d8-4e07-9706-9fdb1c527ca7","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"d1dad311-6cf5-4562-ae52-802e0e5532d4","type":"BasicTickFormatter"},"plot":{"id":"455ed834-917e-4542-927f-5a9f8235f908","type":"Plot"},"ticker":{"id":"418fbf8f-a2e6-4c11-8046-d7d7ea2d9f87","type":"BasicTicker"}},"id":"3a44385f-79a1-4803-9c57-d0e81f49f42b","type":"LinearAxis"},{"attributes":{},"id":"418fbf8f-a2e6-4c11-8046-d7d7ea2d9f87","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"293150bf-e828-43a7-baa9-3b0d244d076b","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"c27d2725-7b7c-4bfd-90a4-00cdcee33278","type":"ColumnDataSource"},{"attributes":{},"id":"d0afd6f4-fb87-4d66-a10c-fa5fcb90f851","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"3a44385f-79a1-4803-9c57-d0e81f49f42b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8e97bff9-1f2f-42c2-8f9a-2cfdc6dc516b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"238b6265-44d8-4e07-9706-9fdb1c527ca7","type":"GlyphRenderer"},{"id":"3a44385f-79a1-4803-9c57-d0e81f49f42b","type":"LinearAxis"},{"id":"8e97bff9-1f2f-42c2-8f9a-2cfdc6dc516b","type":"LinearAxis"},{"id":"fca0998a-299e-403b-b750-496684b4fc94","type":"Grid"},{"id":"b189f7a9-672c-48b0-9640-4a865c5a0523","type":"Grid"}],"title":null,"tool_events":{"id":"63929fe9-eb9a-4191-b49c-5b9e7a3eed4b","type":"ToolEvents"},"toolbar":{"id":"293150bf-e828-43a7-baa9-3b0d244d076b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"81702d80-b39a-406e-9ed8-8e77418e430b","type":"DataRange1d"},"y_range":{"id":"056aa971-abaf-402d-9b3b-ebc3741ad1c2","type":"DataRange1d"}},"id":"455ed834-917e-4542-927f-5a9f8235f908","type":"Plot"}],"root_ids":["455ed834-917e-4542-927f-5a9f8235f908"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"682f2545-ffd0-44be-aa7e-b52b7152905f","elementid":"119e1a7b-8869-44e7-93a5-c81e4f81a7e7","modelid":"455ed834-917e-4542-927f-5a9f8235f908"}];
              
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