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
      };var element = document.getElementById("64320edd-0809-49b2-af28-fe69557c2cba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '64320edd-0809-49b2-af28-fe69557c2cba' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"a4e05c23-2a20-407b-9f15-09b86561db04":{"roots":{"references":[{"attributes":{"plot":{"id":"a8215f79-e208-4818-9e2c-0cd881a041ca","type":"Plot"},"ticker":{"id":"c7404dbe-240c-4d4b-999e-4c840123e8ae","type":"BasicTicker"}},"id":"dcdf8995-7e0b-49d1-823b-b0b98437e630","type":"Grid"},{"attributes":{"formatter":{"id":"b7de736f-2a91-4a77-8906-1854ec0cef61","type":"BasicTickFormatter"},"plot":{"id":"a8215f79-e208-4818-9e2c-0cd881a041ca","type":"Plot"},"ticker":{"id":"ecb528e3-7ed2-49e9-bfdb-a16a7a2fde27","type":"BasicTicker"}},"id":"c7380ba3-62f2-414b-a760-8647e59664f8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"d9ac97d6-1083-498d-acdb-05a48575109e","type":"DataRange1d"},{"attributes":{"data_source":{"id":"f5009328-772f-49e8-a4ae-f7d8498e4ae5","type":"ColumnDataSource"},"glyph":{"id":"e922dec8-ab21-4d86-ad03-392af0435fe8","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"32d250ed-194d-402b-bc28-6673181c45c5","type":"GlyphRenderer"},{"attributes":{},"id":"3fddc4a0-b316-4278-a8f9-cffefce2e263","type":"ToolEvents"},{"attributes":{"callback":null},"id":"7083f54e-c71f-4c36-942b-8f76dd140329","type":"DataRange1d"},{"attributes":{"below":[{"id":"a4857cf1-3050-4a49-9d17-90acc7fc6c98","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c7380ba3-62f2-414b-a760-8647e59664f8","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"32d250ed-194d-402b-bc28-6673181c45c5","type":"GlyphRenderer"},{"id":"a4857cf1-3050-4a49-9d17-90acc7fc6c98","type":"LinearAxis"},{"id":"c7380ba3-62f2-414b-a760-8647e59664f8","type":"LinearAxis"},{"id":"dcdf8995-7e0b-49d1-823b-b0b98437e630","type":"Grid"},{"id":"88c74acc-fa69-4706-ba35-285796546882","type":"Grid"}],"title":null,"tool_events":{"id":"3fddc4a0-b316-4278-a8f9-cffefce2e263","type":"ToolEvents"},"toolbar":{"id":"63fa31de-e571-4b38-9ecb-1292bb590576","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7083f54e-c71f-4c36-942b-8f76dd140329","type":"DataRange1d"},"y_range":{"id":"d9ac97d6-1083-498d-acdb-05a48575109e","type":"DataRange1d"}},"id":"a8215f79-e208-4818-9e2c-0cd881a041ca","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"a8215f79-e208-4818-9e2c-0cd881a041ca","type":"Plot"},"ticker":{"id":"ecb528e3-7ed2-49e9-bfdb-a16a7a2fde27","type":"BasicTicker"}},"id":"88c74acc-fa69-4706-ba35-285796546882","type":"Grid"},{"attributes":{"formatter":{"id":"1665d953-731b-486f-bf3a-3e813daff3ef","type":"BasicTickFormatter"},"plot":{"id":"a8215f79-e208-4818-9e2c-0cd881a041ca","type":"Plot"},"ticker":{"id":"c7404dbe-240c-4d4b-999e-4c840123e8ae","type":"BasicTicker"}},"id":"a4857cf1-3050-4a49-9d17-90acc7fc6c98","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0]}},"id":"f5009328-772f-49e8-a4ae-f7d8498e4ae5","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"63fa31de-e571-4b38-9ecb-1292bb590576","type":"Toolbar"},{"attributes":{},"id":"b7de736f-2a91-4a77-8906-1854ec0cef61","type":"BasicTickFormatter"},{"attributes":{},"id":"1665d953-731b-486f-bf3a-3e813daff3ef","type":"BasicTickFormatter"},{"attributes":{},"id":"c7404dbe-240c-4d4b-999e-4c840123e8ae","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"e922dec8-ab21-4d86-ad03-392af0435fe8","type":"Line"},{"attributes":{},"id":"ecb528e3-7ed2-49e9-bfdb-a16a7a2fde27","type":"BasicTicker"}],"root_ids":["a8215f79-e208-4818-9e2c-0cd881a041ca"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"a4e05c23-2a20-407b-9f15-09b86561db04","elementid":"64320edd-0809-49b2-af28-fe69557c2cba","modelid":"a8215f79-e208-4818-9e2c-0cd881a041ca"}];
              
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