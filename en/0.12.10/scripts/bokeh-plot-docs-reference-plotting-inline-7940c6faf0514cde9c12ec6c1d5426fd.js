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
      };var element = document.getElementById("fe742c12-9acc-4eaa-9ab3-cc419e1ec17c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fe742c12-9acc-4eaa-9ab3-cc419e1ec17c' but no matching script tag was found. ")
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
                    var docs_json = {"1d844dae-95f7-4618-8058-48ae8b6bfab3":{"roots":{"references":[{"attributes":{},"id":"cec278c3-af83-428c-880f-0e97e2676548","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"06f2a38d-3422-4f84-b07c-6f03fcd6fa95","type":"BasicTickFormatter"},"plot":{"id":"1e65e810-68f0-44b2-b975-d483476253d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4484aa8-cdbc-4075-9d3e-bbfccfcdf2f0","type":"BasicTicker"}},"id":"0bf62a6e-828a-42ec-bda0-d31d15627e1d","type":"LinearAxis"},{"attributes":{},"id":"39eedae1-be93-4963-94fa-43e7f0d96ea5","type":"SaveTool"},{"attributes":{},"id":"3dc82dbb-0ac1-4163-878c-c03f56ee564e","type":"LinearScale"},{"attributes":{},"id":"06f2a38d-3422-4f84-b07c-6f03fcd6fa95","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"1e65e810-68f0-44b2-b975-d483476253d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4484aa8-cdbc-4075-9d3e-bbfccfcdf2f0","type":"BasicTicker"}},"id":"b6695e3e-a360-4b1b-9813-ffcf8d544212","type":"Grid"},{"attributes":{"callback":null},"id":"d8a48dc6-7587-4659-913e-f936c8f6156e","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"67a254f3-7377-4012-ae45-34e48a6867f6","type":"PanTool"},{"id":"ba509a98-762f-4d69-bfd4-60d50239d1fc","type":"WheelZoomTool"},{"id":"73288f95-3728-4dc3-99d2-51247ef9d119","type":"BoxZoomTool"},{"id":"39eedae1-be93-4963-94fa-43e7f0d96ea5","type":"SaveTool"},{"id":"9f6d4ff7-8908-4729-b577-c0ec721c5618","type":"ResetTool"},{"id":"5642f044-2264-4cd9-857b-cf9ee719ecc8","type":"HelpTool"}]},"id":"af74991e-3aba-48a7-96e1-c3320a993e65","type":"Toolbar"},{"attributes":{},"id":"9f6d4ff7-8908-4729-b577-c0ec721c5618","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"b7b80934-0c2c-411a-ba65-486144ea769f","type":"Title"},{"attributes":{},"id":"67a254f3-7377-4012-ae45-34e48a6867f6","type":"PanTool"},{"attributes":{},"id":"a2d5cd2b-e7af-4a11-b840-7acfee1abfd7","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"89762431-459e-4a2a-8bb2-4d1a896a9547","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"89762431-459e-4a2a-8bb2-4d1a896a9547","type":"BoxAnnotation"}},"id":"73288f95-3728-4dc3-99d2-51247ef9d119","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f9043dc-4073-48a6-b6ca-63d5a58df3ca","type":"Annulus"},{"attributes":{"data_source":{"id":"2be97111-28f2-4a18-a3eb-4bcbb9e52252","type":"ColumnDataSource"},"glyph":{"id":"ec2c8d8d-70ac-4ac8-91d2-7b8a16a74b81","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f9043dc-4073-48a6-b6ca-63d5a58df3ca","type":"Annulus"},"selection_glyph":null,"view":{"id":"b5b31b94-6d49-4d76-8412-9c47a004bd70","type":"CDSView"}},"id":"2b2188ea-7114-440f-aedc-d3b98902d1af","type":"GlyphRenderer"},{"attributes":{},"id":"e4484aa8-cdbc-4075-9d3e-bbfccfcdf2f0","type":"BasicTicker"},{"attributes":{"below":[{"id":"7bdd302a-586f-471b-8907-98eae4ba8182","type":"LinearAxis"}],"left":[{"id":"0bf62a6e-828a-42ec-bda0-d31d15627e1d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7bdd302a-586f-471b-8907-98eae4ba8182","type":"LinearAxis"},{"id":"adda9806-10ea-4f40-a254-f7e8e05f27e9","type":"Grid"},{"id":"0bf62a6e-828a-42ec-bda0-d31d15627e1d","type":"LinearAxis"},{"id":"b6695e3e-a360-4b1b-9813-ffcf8d544212","type":"Grid"},{"id":"89762431-459e-4a2a-8bb2-4d1a896a9547","type":"BoxAnnotation"},{"id":"2b2188ea-7114-440f-aedc-d3b98902d1af","type":"GlyphRenderer"}],"title":{"id":"b7b80934-0c2c-411a-ba65-486144ea769f","type":"Title"},"toolbar":{"id":"af74991e-3aba-48a7-96e1-c3320a993e65","type":"Toolbar"},"x_range":{"id":"d8a48dc6-7587-4659-913e-f936c8f6156e","type":"DataRange1d"},"x_scale":{"id":"a2d5cd2b-e7af-4a11-b840-7acfee1abfd7","type":"LinearScale"},"y_range":{"id":"4c44dc72-654f-4d51-a201-7f9252456633","type":"DataRange1d"},"y_scale":{"id":"3dc82dbb-0ac1-4163-878c-c03f56ee564e","type":"LinearScale"}},"id":"1e65e810-68f0-44b2-b975-d483476253d2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"2be97111-28f2-4a18-a3eb-4bcbb9e52252","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec2c8d8d-70ac-4ac8-91d2-7b8a16a74b81","type":"Annulus"},{"attributes":{"source":{"id":"2be97111-28f2-4a18-a3eb-4bcbb9e52252","type":"ColumnDataSource"}},"id":"b5b31b94-6d49-4d76-8412-9c47a004bd70","type":"CDSView"},{"attributes":{"formatter":{"id":"cec278c3-af83-428c-880f-0e97e2676548","type":"BasicTickFormatter"},"plot":{"id":"1e65e810-68f0-44b2-b975-d483476253d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"96987960-e64a-463b-95e9-d8735aa80edc","type":"BasicTicker"}},"id":"7bdd302a-586f-471b-8907-98eae4ba8182","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4c44dc72-654f-4d51-a201-7f9252456633","type":"DataRange1d"},{"attributes":{},"id":"ba509a98-762f-4d69-bfd4-60d50239d1fc","type":"WheelZoomTool"},{"attributes":{},"id":"5642f044-2264-4cd9-857b-cf9ee719ecc8","type":"HelpTool"},{"attributes":{},"id":"96987960-e64a-463b-95e9-d8735aa80edc","type":"BasicTicker"},{"attributes":{"plot":{"id":"1e65e810-68f0-44b2-b975-d483476253d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"96987960-e64a-463b-95e9-d8735aa80edc","type":"BasicTicker"}},"id":"adda9806-10ea-4f40-a254-f7e8e05f27e9","type":"Grid"}],"root_ids":["1e65e810-68f0-44b2-b975-d483476253d2"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"1d844dae-95f7-4618-8058-48ae8b6bfab3","elementid":"fe742c12-9acc-4eaa-9ab3-cc419e1ec17c","modelid":"1e65e810-68f0-44b2-b975-d483476253d2"}];
                
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
