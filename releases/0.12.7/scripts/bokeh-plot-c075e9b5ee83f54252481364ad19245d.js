(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("54cc356e-f990-4ef8-b4dd-228c4d8bfdba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54cc356e-f990-4ef8-b4dd-228c4d8bfdba' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"9740fe51-352a-46bd-bc7f-3f6401facf77":{"roots":{"references":[{"attributes":{"below":[{"id":"328f52f3-ce2a-4d56-b2c3-de5d590a6e09","type":"LinearAxis"}],"left":[{"id":"3ee350a8-8d3e-41f1-93d9-236c9fd4e31f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"328f52f3-ce2a-4d56-b2c3-de5d590a6e09","type":"LinearAxis"},{"id":"29ca53db-8b00-4dd8-b22f-81f91535169c","type":"Grid"},{"id":"3ee350a8-8d3e-41f1-93d9-236c9fd4e31f","type":"LinearAxis"},{"id":"c3509d5a-afc3-4644-a8db-137fb4b2cd0a","type":"Grid"},{"id":"60f746c9-e941-4763-85d3-3bcd71646039","type":"BoxAnnotation"},{"id":"4098a9ab-79fa-4c50-9e6b-74a1857712bd","type":"GlyphRenderer"}],"title":{"id":"ed0a2661-2e31-4645-8fa9-a0569266505f","type":"Title"},"toolbar":{"id":"21aa2933-17d6-4672-83f8-7d216c9d626c","type":"Toolbar"},"x_range":{"id":"39bab600-3bf6-48b1-9a16-ea2fe4cf9aa6","type":"DataRange1d"},"x_scale":{"id":"5d397813-690f-4d51-913b-95c0e9888319","type":"LinearScale"},"y_range":{"id":"99791074-3462-4fde-922f-87b8213fd508","type":"DataRange1d"},"y_scale":{"id":"d585f473-e47b-4ef9-9740-2f2c180b06df","type":"LinearScale"}},"id":"6f21773a-1073-4624-8f25-bf9e78e80284","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"99791074-3462-4fde-922f-87b8213fd508","type":"DataRange1d"},{"attributes":{},"id":"9a45dd27-34b7-4069-847d-94e8705091b8","type":"WheelZoomTool"},{"attributes":{},"id":"3aedc5d7-3ae7-4323-b6e5-c5180d8466b8","type":"SaveTool"},{"attributes":{},"id":"d585f473-e47b-4ef9-9740-2f2c180b06df","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2c149890-e5c3-4c4b-8a8c-f9d835232ce5","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"39bab600-3bf6-48b1-9a16-ea2fe4cf9aa6","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a800189-96ad-40c8-b269-f9ae76194650","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e86b2ce-93f5-40b5-b565-701cb04b607e","type":"PanTool"},{"id":"9a45dd27-34b7-4069-847d-94e8705091b8","type":"WheelZoomTool"},{"id":"49493d7c-1491-4b8a-98d2-dccc18fdf91f","type":"BoxZoomTool"},{"id":"3aedc5d7-3ae7-4323-b6e5-c5180d8466b8","type":"SaveTool"},{"id":"2081ff63-06ea-4a5b-8e2e-e929d40a2d95","type":"ResetTool"},{"id":"9d5b59a7-e59f-4717-ad73-f764089ae57d","type":"HelpTool"}]},"id":"21aa2933-17d6-4672-83f8-7d216c9d626c","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"ed0a2661-2e31-4645-8fa9-a0569266505f","type":"Title"},{"attributes":{"plot":{"id":"6f21773a-1073-4624-8f25-bf9e78e80284","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9ba468b-d2da-482e-a24e-34d2f49363ce","type":"BasicTicker"}},"id":"29ca53db-8b00-4dd8-b22f-81f91535169c","type":"Grid"},{"attributes":{},"id":"b9ba468b-d2da-482e-a24e-34d2f49363ce","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2c149890-e5c3-4c4b-8a8c-f9d835232ce5","type":"ColumnDataSource"},"glyph":{"id":"4a800189-96ad-40c8-b269-f9ae76194650","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"365d9cb1-e3c3-4885-a057-062bde0e4841","type":"Circle"},"selection_glyph":null,"view":{"id":"54f7956e-5e1c-4dfe-9762-15f5260bc42e","type":"CDSView"}},"id":"4098a9ab-79fa-4c50-9e6b-74a1857712bd","type":"GlyphRenderer"},{"attributes":{},"id":"5e86b2ce-93f5-40b5-b565-701cb04b607e","type":"PanTool"},{"attributes":{},"id":"5d397813-690f-4d51-913b-95c0e9888319","type":"LinearScale"},{"attributes":{"formatter":{"id":"16df1e24-56c0-4233-9813-8d903f0511fc","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6f21773a-1073-4624-8f25-bf9e78e80284","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9ba468b-d2da-482e-a24e-34d2f49363ce","type":"BasicTicker"}},"id":"328f52f3-ce2a-4d56-b2c3-de5d590a6e09","type":"LinearAxis"},{"attributes":{},"id":"9d5b59a7-e59f-4717-ad73-f764089ae57d","type":"HelpTool"},{"attributes":{"formatter":{"id":"4c130aeb-5b5c-4c1f-a0fc-146da84b415f","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"6f21773a-1073-4624-8f25-bf9e78e80284","subtype":"Figure","type":"Plot"},"ticker":{"id":"105dc2ef-3b56-4c20-a020-b8a1898bee7d","type":"BasicTicker"}},"id":"3ee350a8-8d3e-41f1-93d9-236c9fd4e31f","type":"LinearAxis"},{"attributes":{},"id":"4c130aeb-5b5c-4c1f-a0fc-146da84b415f","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2c149890-e5c3-4c4b-8a8c-f9d835232ce5","type":"ColumnDataSource"}},"id":"54f7956e-5e1c-4dfe-9762-15f5260bc42e","type":"CDSView"},{"attributes":{},"id":"2081ff63-06ea-4a5b-8e2e-e929d40a2d95","type":"ResetTool"},{"attributes":{},"id":"16df1e24-56c0-4233-9813-8d903f0511fc","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"60f746c9-e941-4763-85d3-3bcd71646039","type":"BoxAnnotation"}},"id":"49493d7c-1491-4b8a-98d2-dccc18fdf91f","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"6f21773a-1073-4624-8f25-bf9e78e80284","subtype":"Figure","type":"Plot"},"ticker":{"id":"105dc2ef-3b56-4c20-a020-b8a1898bee7d","type":"BasicTicker"}},"id":"c3509d5a-afc3-4644-a8db-137fb4b2cd0a","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"60f746c9-e941-4763-85d3-3bcd71646039","type":"BoxAnnotation"},{"attributes":{},"id":"105dc2ef-3b56-4c20-a020-b8a1898bee7d","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"365d9cb1-e3c3-4885-a057-062bde0e4841","type":"Circle"}],"root_ids":["6f21773a-1073-4624-8f25-bf9e78e80284"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"9740fe51-352a-46bd-bc7f-3f6401facf77","elementid":"54cc356e-f990-4ef8-b4dd-228c4d8bfdba","modelid":"6f21773a-1073-4624-8f25-bf9e78e80284"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
