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
      };var element = document.getElementById("f73e5291-d31b-42f2-8383-ac142bdfd262");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f73e5291-d31b-42f2-8383-ac142bdfd262' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"fac897f4-f478-4d7c-ac86-c7aff50e29cc":{"roots":{"references":[{"attributes":{"formatter":{"id":"f18ffa20-fb7e-46dd-b35b-4ab2bcba1607","type":"BasicTickFormatter"},"plot":{"id":"542170f1-c188-4043-acdc-d53278145833","subtype":"Figure","type":"Plot"},"ticker":{"id":"b36cffe3-e583-4dc5-af50-8633d3d6850f","type":"BasicTicker"}},"id":"991ba0db-8ea8-42dd-90c6-b18f14206fea","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6efa3b39-43fc-4b1a-b464-b3d945ca8a4c","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"542170f1-c188-4043-acdc-d53278145833","subtype":"Figure","type":"Plot"},"ticker":{"id":"b36cffe3-e583-4dc5-af50-8633d3d6850f","type":"BasicTicker"}},"id":"1c33b094-5ced-4bd7-90a0-70967f952e78","type":"Grid"},{"attributes":{},"id":"519a8c4b-b42f-4d02-a6b0-f1a2c178945a","type":"SaveTool"},{"attributes":{},"id":"d4066849-0689-4bbf-8abb-038686265dd0","type":"HelpTool"},{"attributes":{"plot":{"id":"542170f1-c188-4043-acdc-d53278145833","subtype":"Figure","type":"Plot"},"ticker":{"id":"9187ea88-0255-476e-9c48-6732848c0e7a","type":"BasicTicker"}},"id":"63f1314a-ae47-4c70-a6ae-e7b6e40ef78b","type":"Grid"},{"attributes":{"overlay":{"id":"2d66dff1-e695-4bb7-a410-c58ad6c1e0b0","type":"BoxAnnotation"}},"id":"78d694f8-6afc-4bfb-9843-bcd6ce324b06","type":"BoxZoomTool"},{"attributes":{"source":{"id":"f724373b-4661-426a-a1d9-c1b513c541e0","type":"ColumnDataSource"}},"id":"fa8d3651-1c52-49af-b808-1c553053b4ae","type":"CDSView"},{"attributes":{"below":[{"id":"c57f8ebb-9778-4193-80e3-dae1d294fe02","type":"LinearAxis"}],"left":[{"id":"991ba0db-8ea8-42dd-90c6-b18f14206fea","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c57f8ebb-9778-4193-80e3-dae1d294fe02","type":"LinearAxis"},{"id":"63f1314a-ae47-4c70-a6ae-e7b6e40ef78b","type":"Grid"},{"id":"991ba0db-8ea8-42dd-90c6-b18f14206fea","type":"LinearAxis"},{"id":"1c33b094-5ced-4bd7-90a0-70967f952e78","type":"Grid"},{"id":"2d66dff1-e695-4bb7-a410-c58ad6c1e0b0","type":"BoxAnnotation"},{"id":"35e07279-d3bd-4d99-ad51-e11b842b3cb9","type":"GlyphRenderer"}],"title":{"id":"de935e0d-4019-4a4d-9d1a-3252ec006ed4","type":"Title"},"toolbar":{"id":"60d7b467-4794-4429-a814-0005646f7cf2","type":"Toolbar"},"x_range":{"id":"c6f64eb8-bc2e-4725-8092-20440945b4be","type":"DataRange1d"},"x_scale":{"id":"7ffca8d0-7f80-4a0e-ab64-ab681cfd2ad5","type":"LinearScale"},"y_range":{"id":"f23fba5e-86df-4d20-bb4f-eede4f9a6914","type":"DataRange1d"},"y_scale":{"id":"74b10f29-fac8-40eb-8ac4-e364d5c269fa","type":"LinearScale"}},"id":"542170f1-c188-4043-acdc-d53278145833","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"de935e0d-4019-4a4d-9d1a-3252ec006ed4","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"469ef0cb-96f6-4155-bce0-d94514f5e3fd","type":"PanTool"},{"id":"a8a44aef-6b02-473f-854c-7ead412f89f3","type":"WheelZoomTool"},{"id":"78d694f8-6afc-4bfb-9843-bcd6ce324b06","type":"BoxZoomTool"},{"id":"519a8c4b-b42f-4d02-a6b0-f1a2c178945a","type":"SaveTool"},{"id":"c85cda73-bf14-4979-bee3-2d92dd20f9db","type":"ResetTool"},{"id":"d4066849-0689-4bbf-8abb-038686265dd0","type":"HelpTool"}]},"id":"60d7b467-4794-4429-a814-0005646f7cf2","type":"Toolbar"},{"attributes":{},"id":"469ef0cb-96f6-4155-bce0-d94514f5e3fd","type":"PanTool"},{"attributes":{"callback":null},"id":"c6f64eb8-bc2e-4725-8092-20440945b4be","type":"DataRange1d"},{"attributes":{},"id":"c85cda73-bf14-4979-bee3-2d92dd20f9db","type":"ResetTool"},{"attributes":{},"id":"d5356579-f060-4e00-af43-a9c2c34416f4","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2d66dff1-e695-4bb7-a410-c58ad6c1e0b0","type":"BoxAnnotation"},{"attributes":{},"id":"7ffca8d0-7f80-4a0e-ab64-ab681cfd2ad5","type":"LinearScale"},{"attributes":{"callback":null},"id":"f23fba5e-86df-4d20-bb4f-eede4f9a6914","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f9dc228-65a6-4c85-9eb8-abaed5797d81","type":"Line"},{"attributes":{},"id":"74b10f29-fac8-40eb-8ac4-e364d5c269fa","type":"LinearScale"},{"attributes":{},"id":"a8a44aef-6b02-473f-854c-7ead412f89f3","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"f724373b-4661-426a-a1d9-c1b513c541e0","type":"ColumnDataSource"},"glyph":{"id":"4f9dc228-65a6-4c85-9eb8-abaed5797d81","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6efa3b39-43fc-4b1a-b464-b3d945ca8a4c","type":"Line"},"selection_glyph":null,"view":{"id":"fa8d3651-1c52-49af-b808-1c553053b4ae","type":"CDSView"}},"id":"35e07279-d3bd-4d99-ad51-e11b842b3cb9","type":"GlyphRenderer"},{"attributes":{},"id":"b36cffe3-e583-4dc5-af50-8633d3d6850f","type":"BasicTicker"},{"attributes":{},"id":"f18ffa20-fb7e-46dd-b35b-4ab2bcba1607","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"f724373b-4661-426a-a1d9-c1b513c541e0","type":"ColumnDataSource"},{"attributes":{},"id":"9187ea88-0255-476e-9c48-6732848c0e7a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d5356579-f060-4e00-af43-a9c2c34416f4","type":"BasicTickFormatter"},"plot":{"id":"542170f1-c188-4043-acdc-d53278145833","subtype":"Figure","type":"Plot"},"ticker":{"id":"9187ea88-0255-476e-9c48-6732848c0e7a","type":"BasicTicker"}},"id":"c57f8ebb-9778-4193-80e3-dae1d294fe02","type":"LinearAxis"}],"root_ids":["542170f1-c188-4043-acdc-d53278145833"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"fac897f4-f478-4d7c-ac86-c7aff50e29cc","elementid":"f73e5291-d31b-42f2-8383-ac142bdfd262","modelid":"542170f1-c188-4043-acdc-d53278145833"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
