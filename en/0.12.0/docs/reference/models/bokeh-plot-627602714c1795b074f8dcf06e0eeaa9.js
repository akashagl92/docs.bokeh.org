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
      };var element = document.getElementById("6864ef94-c4fd-4db4-9bdb-44ae8f3b2986");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6864ef94-c4fd-4db4-9bdb-44ae8f3b2986' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"e4ebb0b9-a47c-43cf-948c-27b5273a237b":{"roots":{"references":[{"attributes":{},"id":"22a5d705-9bdb-4a03-a958-ea4961d13259","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"22a5d705-9bdb-4a03-a958-ea4961d13259","type":"BasicTickFormatter"},"plot":{"id":"0abdf975-19a6-4fca-91c6-5824ebf40950","type":"Plot"},"ticker":{"id":"d59a7101-7466-4f9b-8bb0-151ec0e7ccf2","type":"BasicTicker"}},"id":"c8362756-683c-42fd-8681-9865fb3054e1","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"accef7ef-210c-4c4e-b8ca-7f98b7d2f9de","type":"Patch"},{"attributes":{},"id":"cde4ad07-f43a-4438-8d64-cd41fb119190","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0,2.0,1.862068965517241,1.7241379310344827,1.5862068965517242,1.4482758620689653,1.3103448275862069,1.1724137931034484,1.0344827586206895,0.896551724137931,0.7586206896551726,0.6206896551724137,0.48275862068965525,0.34482758620689635,0.2068965517241379,0.06896551724137945,-0.06896551724137945,-0.2068965517241379,-0.3448275862068966,-0.48275862068965525,-0.6206896551724137,-0.7586206896551724,-0.896551724137931,-1.0344827586206897,-1.1724137931034484,-1.3103448275862069,-1.4482758620689655,-1.5862068965517242,-1.7241379310344827,-1.8620689655172413,-2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0,8.2,7.52936979785969,6.896789536266349,6.302259215219976,5.74577883472057,5.227348394768133,4.746967895362664,4.304637336504161,3.900356718192628,3.5341260404280623,3.2059453032104637,2.9158145065398338,2.6637336504161713,2.449702734839477,2.2737217598097508,2.135790725326992,2.0359096313912013,1.9740784780023783,1.9502972651605233,1.9645659928656363,2.016884661117717,2.107253269916766,2.235671819262783,2.4021403091557674,2.6066587395957193,2.84922711058264,3.1298454221165284,3.448513674197384,3.805231866825208,4.2]}},"id":"d7bfb76e-bcb4-4ffb-a063-d61c10001c33","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"0abdf975-19a6-4fca-91c6-5824ebf40950","type":"Plot"},"ticker":{"id":"d59a7101-7466-4f9b-8bb0-151ec0e7ccf2","type":"BasicTicker"}},"id":"f17e786a-4ee4-4f5a-b8f0-98cd5a6ab865","type":"Grid"},{"attributes":{"plot":{"id":"0abdf975-19a6-4fca-91c6-5824ebf40950","type":"Plot"},"ticker":{"id":"cde4ad07-f43a-4438-8d64-cd41fb119190","type":"BasicTicker"}},"id":"3c37c8b6-9141-44e9-92a2-db8943c6fbc6","type":"Grid"},{"attributes":{"callback":null},"id":"0679783d-23d8-4d26-b435-01f8f880a842","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a9960fee-2fbe-4ad6-938d-9e5e59554b32","type":"BasicTickFormatter"},"plot":{"id":"0abdf975-19a6-4fca-91c6-5824ebf40950","type":"Plot"},"ticker":{"id":"cde4ad07-f43a-4438-8d64-cd41fb119190","type":"BasicTicker"}},"id":"fa8e3a18-3e9a-49d2-8ab3-8027809a4a4b","type":"LinearAxis"},{"attributes":{},"id":"881d1f15-d263-499f-b969-28453ec0a13c","type":"ToolEvents"},{"attributes":{},"id":"d59a7101-7466-4f9b-8bb0-151ec0e7ccf2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d7bfb76e-bcb4-4ffb-a063-d61c10001c33","type":"ColumnDataSource"},"glyph":{"id":"accef7ef-210c-4c4e-b8ca-7f98b7d2f9de","type":"Patch"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"58d774ca-d2f8-404b-a10d-c2d0f08c64a5","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"fa8e3a18-3e9a-49d2-8ab3-8027809a4a4b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c8362756-683c-42fd-8681-9865fb3054e1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"58d774ca-d2f8-404b-a10d-c2d0f08c64a5","type":"GlyphRenderer"},{"id":"fa8e3a18-3e9a-49d2-8ab3-8027809a4a4b","type":"LinearAxis"},{"id":"c8362756-683c-42fd-8681-9865fb3054e1","type":"LinearAxis"},{"id":"3c37c8b6-9141-44e9-92a2-db8943c6fbc6","type":"Grid"},{"id":"f17e786a-4ee4-4f5a-b8f0-98cd5a6ab865","type":"Grid"}],"title":null,"tool_events":{"id":"881d1f15-d263-499f-b969-28453ec0a13c","type":"ToolEvents"},"toolbar":{"id":"106b908c-8833-448d-8fe7-ad53a312e773","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"510c4aed-6964-4222-91d6-5b0b61206be1","type":"DataRange1d"},"y_range":{"id":"0679783d-23d8-4d26-b435-01f8f880a842","type":"DataRange1d"}},"id":"0abdf975-19a6-4fca-91c6-5824ebf40950","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"106b908c-8833-448d-8fe7-ad53a312e773","type":"Toolbar"},{"attributes":{},"id":"a9960fee-2fbe-4ad6-938d-9e5e59554b32","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"510c4aed-6964-4222-91d6-5b0b61206be1","type":"DataRange1d"}],"root_ids":["0abdf975-19a6-4fca-91c6-5824ebf40950"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"e4ebb0b9-a47c-43cf-948c-27b5273a237b","elementid":"6864ef94-c4fd-4db4-9bdb-44ae8f3b2986","modelid":"0abdf975-19a6-4fca-91c6-5824ebf40950"}];
              
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