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
      };var element = document.getElementById("225ed9b2-a799-40b0-8e4e-60fe8eb084a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '225ed9b2-a799-40b0-8e4e-60fe8eb084a8' but no matching script tag was found. ")
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
                var docs_json = {"8569f016-cdc1-4b12-a379-e4bdfdba7b64":{"roots":{"references":[{"attributes":{},"id":"c55b00d8-ad9f-4c02-8591-76df98b77ebb","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"84220b2c-38cb-4f02-aa01-03ab703179f7","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"530ccfe7-3d41-4126-af40-06978511433c","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"0e66a32c-ed33-4ca0-a0c2-d4db76395579","type":"Plot"},"ticker":{"id":"77473ea0-adef-4d49-9ea3-31d2612e64ed","type":"BasicTicker"}},"id":"4cee8cf9-d082-4e90-80d1-aa991e7e14b0","type":"Grid"},{"attributes":{"formatter":{"id":"7a40ef00-c433-40cd-bb6d-d278ff2294b0","type":"BasicTickFormatter"},"plot":{"id":"0e66a32c-ed33-4ca0-a0c2-d4db76395579","type":"Plot"},"ticker":{"id":"a379f530-1061-4a7c-b0d7-506270d8960c","type":"BasicTicker"}},"id":"d3577461-f9d8-4997-b416-c6c754d155f0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ca7b6905-64e9-436c-b50b-4d33acf95d05","type":"BasicTickFormatter"},"plot":{"id":"0e66a32c-ed33-4ca0-a0c2-d4db76395579","type":"Plot"},"ticker":{"id":"77473ea0-adef-4d49-9ea3-31d2612e64ed","type":"BasicTicker"}},"id":"c4b68a0d-6f81-459b-8ee0-1425e16e3b2a","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"2babd3b3-73f9-43a4-a929-acdb14bf27ca","type":"Oval"},{"attributes":{},"id":"77473ea0-adef-4d49-9ea3-31d2612e64ed","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"80c8c4e7-8476-4919-8a33-d7b091b35009","type":"Toolbar"},{"attributes":{"below":[{"id":"d3577461-f9d8-4997-b416-c6c754d155f0","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c4b68a0d-6f81-459b-8ee0-1425e16e3b2a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"cce3ee71-e46b-426e-aefa-39081c05d6a3","type":"GlyphRenderer"},{"id":"d3577461-f9d8-4997-b416-c6c754d155f0","type":"LinearAxis"},{"id":"c4b68a0d-6f81-459b-8ee0-1425e16e3b2a","type":"LinearAxis"},{"id":"0e6a0044-c813-4137-bafc-1718c4fb327e","type":"Grid"},{"id":"4cee8cf9-d082-4e90-80d1-aa991e7e14b0","type":"Grid"}],"title":null,"tool_events":{"id":"44440066-d833-4817-8416-280fc254f28a","type":"ToolEvents"},"toolbar":{"id":"80c8c4e7-8476-4919-8a33-d7b091b35009","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"530ccfe7-3d41-4126-af40-06978511433c","type":"DataRange1d"},"x_scale":{"id":"61c3c95f-a216-4e24-ac30-da0c16df94cb","type":"LinearScale"},"y_range":{"id":"a29ed1f9-a131-41ca-b4d5-f1f83bb176d8","type":"DataRange1d"},"y_scale":{"id":"c55b00d8-ad9f-4c02-8591-76df98b77ebb","type":"LinearScale"}},"id":"0e66a32c-ed33-4ca0-a0c2-d4db76395579","type":"Plot"},{"attributes":{"callback":null},"id":"a29ed1f9-a131-41ca-b4d5-f1f83bb176d8","type":"DataRange1d"},{"attributes":{"data_source":{"id":"84220b2c-38cb-4f02-aa01-03ab703179f7","type":"ColumnDataSource"},"glyph":{"id":"2babd3b3-73f9-43a4-a929-acdb14bf27ca","type":"Oval"},"hover_glyph":null,"muted_glyph":null},"id":"cce3ee71-e46b-426e-aefa-39081c05d6a3","type":"GlyphRenderer"},{"attributes":{},"id":"ca7b6905-64e9-436c-b50b-4d33acf95d05","type":"BasicTickFormatter"},{"attributes":{},"id":"44440066-d833-4817-8416-280fc254f28a","type":"ToolEvents"},{"attributes":{},"id":"7a40ef00-c433-40cd-bb6d-d278ff2294b0","type":"BasicTickFormatter"},{"attributes":{},"id":"a379f530-1061-4a7c-b0d7-506270d8960c","type":"BasicTicker"},{"attributes":{},"id":"61c3c95f-a216-4e24-ac30-da0c16df94cb","type":"LinearScale"},{"attributes":{"plot":{"id":"0e66a32c-ed33-4ca0-a0c2-d4db76395579","type":"Plot"},"ticker":{"id":"a379f530-1061-4a7c-b0d7-506270d8960c","type":"BasicTicker"}},"id":"0e6a0044-c813-4137-bafc-1718c4fb327e","type":"Grid"}],"root_ids":["0e66a32c-ed33-4ca0-a0c2-d4db76395579"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"8569f016-cdc1-4b12-a379-e4bdfdba7b64","elementid":"225ed9b2-a799-40b0-8e4e-60fe8eb084a8","modelid":"0e66a32c-ed33-4ca0-a0c2-d4db76395579"}];
                
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
