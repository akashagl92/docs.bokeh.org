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
      };var element = document.getElementById("0d482894-3856-4336-908f-b1210debb076");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d482894-3856-4336-908f-b1210debb076' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"5f971a31-6a68-4296-8b42-3bc96a2cf8ec":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"246e4806-9963-4ebd-b5c7-10a0831c3209","type":"PanTool"},{"id":"6e5785d2-b895-42e1-bf7b-50d6df983d57","type":"WheelZoomTool"},{"id":"a1415a3a-eeb7-4591-923f-31aeb8f645db","type":"BoxZoomTool"},{"id":"2cd3c98c-0005-46ca-8541-f72660558315","type":"SaveTool"},{"id":"b9339691-6cad-4848-90a1-0fcb103f6b5e","type":"ResetTool"},{"id":"47b2eba5-d6a0-4a6e-a90b-29188101acf6","type":"HelpTool"}]},"id":"21aa7610-e7d6-4449-8c0f-51891f4fb6f9","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a40ee168-0443-4448-a7d9-58ba4353b526","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"bbbb3ea7-1198-4d10-8be2-6265cc245d42","type":"BasicTickFormatter"},"plot":{"id":"fe2bb92f-eb14-4de5-b7e2-04d5fcbbbd15","subtype":"Figure","type":"Plot"},"ticker":{"id":"a20dbce6-ec33-446d-a126-12a67098daa5","type":"BasicTicker"}},"id":"b7302a5c-e14c-41c9-b901-1ee3f35aa3b6","type":"LinearAxis"},{"attributes":{},"id":"a20dbce6-ec33-446d-a126-12a67098daa5","type":"BasicTicker"},{"attributes":{},"id":"47b2eba5-d6a0-4a6e-a90b-29188101acf6","type":"HelpTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f945d7a0-fc1d-4f00-b7b8-4df8b0b71492","type":"Line"},{"attributes":{"callback":null},"id":"68c45b7c-4018-4c90-82ae-748b4a40f1e8","type":"DataRange1d"},{"attributes":{},"id":"19c1a0e3-cf81-40bb-8cdc-2f741fedddd7","type":"BasicTickFormatter"},{"attributes":{},"id":"b1d64f1b-eb64-4388-b810-0af8de8492a5","type":"LinearScale"},{"attributes":{"plot":null,"text":"line"},"id":"cd7b1351-d109-4a75-b6df-8a24485daa88","type":"Title"},{"attributes":{},"id":"84f42b7c-f419-4c2c-bc68-d789a5b41613","type":"LinearScale"},{"attributes":{"below":[{"id":"725c1529-5333-4d58-b972-f74d89b74b76","type":"LinearAxis"}],"left":[{"id":"b7302a5c-e14c-41c9-b901-1ee3f35aa3b6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"725c1529-5333-4d58-b972-f74d89b74b76","type":"LinearAxis"},{"id":"6585e228-7cab-4526-9281-068153b7a67a","type":"Grid"},{"id":"b7302a5c-e14c-41c9-b901-1ee3f35aa3b6","type":"LinearAxis"},{"id":"1d23d97b-3ed9-4be6-b849-04e727f21063","type":"Grid"},{"id":"a40ee168-0443-4448-a7d9-58ba4353b526","type":"BoxAnnotation"},{"id":"214c5a7c-6e27-40fc-9f27-12fea8171eee","type":"GlyphRenderer"}],"title":{"id":"cd7b1351-d109-4a75-b6df-8a24485daa88","type":"Title"},"toolbar":{"id":"21aa7610-e7d6-4449-8c0f-51891f4fb6f9","type":"Toolbar"},"x_range":{"id":"68c45b7c-4018-4c90-82ae-748b4a40f1e8","type":"DataRange1d"},"x_scale":{"id":"b1d64f1b-eb64-4388-b810-0af8de8492a5","type":"LinearScale"},"y_range":{"id":"57f58b54-e127-409f-a103-04e08a7a5078","type":"DataRange1d"},"y_scale":{"id":"84f42b7c-f419-4c2c-bc68-d789a5b41613","type":"LinearScale"}},"id":"fe2bb92f-eb14-4de5-b7e2-04d5fcbbbd15","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"fe2bb92f-eb14-4de5-b7e2-04d5fcbbbd15","subtype":"Figure","type":"Plot"},"ticker":{"id":"7568e75b-979c-4e02-a508-0875fe4ceaf5","type":"BasicTicker"}},"id":"6585e228-7cab-4526-9281-068153b7a67a","type":"Grid"},{"attributes":{"callback":null},"id":"57f58b54-e127-409f-a103-04e08a7a5078","type":"DataRange1d"},{"attributes":{"formatter":{"id":"19c1a0e3-cf81-40bb-8cdc-2f741fedddd7","type":"BasicTickFormatter"},"plot":{"id":"fe2bb92f-eb14-4de5-b7e2-04d5fcbbbd15","subtype":"Figure","type":"Plot"},"ticker":{"id":"7568e75b-979c-4e02-a508-0875fe4ceaf5","type":"BasicTicker"}},"id":"725c1529-5333-4d58-b972-f74d89b74b76","type":"LinearAxis"},{"attributes":{"data_source":{"id":"e1aab42c-a923-4b81-a057-4cb534df5dd1","type":"ColumnDataSource"},"glyph":{"id":"f945d7a0-fc1d-4f00-b7b8-4df8b0b71492","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36c549e0-afef-42fb-a742-25b751ab91c7","type":"Line"},"selection_glyph":null,"view":{"id":"65bb3e4d-522e-4475-8e37-f3d80c2e13ee","type":"CDSView"}},"id":"214c5a7c-6e27-40fc-9f27-12fea8171eee","type":"GlyphRenderer"},{"attributes":{},"id":"7568e75b-979c-4e02-a508-0875fe4ceaf5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"fe2bb92f-eb14-4de5-b7e2-04d5fcbbbd15","subtype":"Figure","type":"Plot"},"ticker":{"id":"a20dbce6-ec33-446d-a126-12a67098daa5","type":"BasicTicker"}},"id":"1d23d97b-3ed9-4be6-b849-04e727f21063","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"36c549e0-afef-42fb-a742-25b751ab91c7","type":"Line"},{"attributes":{"overlay":{"id":"a40ee168-0443-4448-a7d9-58ba4353b526","type":"BoxAnnotation"}},"id":"a1415a3a-eeb7-4591-923f-31aeb8f645db","type":"BoxZoomTool"},{"attributes":{},"id":"2cd3c98c-0005-46ca-8541-f72660558315","type":"SaveTool"},{"attributes":{},"id":"bbbb3ea7-1198-4d10-8be2-6265cc245d42","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"e1aab42c-a923-4b81-a057-4cb534df5dd1","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e1aab42c-a923-4b81-a057-4cb534df5dd1","type":"ColumnDataSource"}},"id":"65bb3e4d-522e-4475-8e37-f3d80c2e13ee","type":"CDSView"},{"attributes":{},"id":"246e4806-9963-4ebd-b5c7-10a0831c3209","type":"PanTool"},{"attributes":{},"id":"b9339691-6cad-4848-90a1-0fcb103f6b5e","type":"ResetTool"},{"attributes":{},"id":"6e5785d2-b895-42e1-bf7b-50d6df983d57","type":"WheelZoomTool"}],"root_ids":["fe2bb92f-eb14-4de5-b7e2-04d5fcbbbd15"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"5f971a31-6a68-4296-8b42-3bc96a2cf8ec","elementid":"0d482894-3856-4336-908f-b1210debb076","modelid":"fe2bb92f-eb14-4de5-b7e2-04d5fcbbbd15"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
