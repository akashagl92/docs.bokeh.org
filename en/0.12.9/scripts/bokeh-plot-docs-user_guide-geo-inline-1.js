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
      };var element = document.getElementById("59a019b5-6823-4a16-8dd0-01066248348f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59a019b5-6823-4a16-8dd0-01066248348f' but no matching script tag was found. ")
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
                    var docs_json = {"ece02df7-d27a-4330-884c-a731a24accb1":{"roots":{"references":[{"attributes":{"source":{"id":"427aef73-402b-4e52-bf17-1df25f8b2b65","type":"ColumnDataSource"}},"id":"7338c1aa-53e5-4207-800d-72b2b7807be1","type":"CDSView"},{"attributes":{},"id":"00ed9327-9474-4da3-8141-dbb894dd8c68","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":null},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"b5a34bb2-a6fc-4771-8585-44e208e25e50","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"a500da71-0d2a-4562-8776-67889efcb069","type":"BoxAnnotation"}},"id":"4f137055-43e7-4972-a78e-8559586b6b09","type":"BoxSelectTool"},{"attributes":{},"id":"970bbba2-8878-4b08-948a-67b663cac140","type":"LinearScale"},{"attributes":{"callback":null},"id":"3b68ff28-f70f-4000-8bda-c908ad01d7bf","type":"DataRange1d"},{"attributes":{"lat":30.29,"lng":-97.73,"zoom":11},"id":"14183933-bb9c-4381-af0c-caade237881a","type":"GMapOptions"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","map_options":{"id":"14183933-bb9c-4381-af0c-caade237881a","type":"GMapOptions"},"renderers":[{"id":"5ee01528-c76d-485a-ac1e-6df7dc65f263","type":"GlyphRenderer"},{"id":"a500da71-0d2a-4562-8776-67889efcb069","type":"BoxAnnotation"}],"title":{"id":"585f9ced-71c1-4ea5-a6ee-a10ea998643c","type":"Title"},"toolbar":{"id":"546ee086-6f46-41f7-abf8-fc348e951732","type":"Toolbar"},"x_range":{"id":"3b68ff28-f70f-4000-8bda-c908ad01d7bf","type":"DataRange1d"},"x_scale":{"id":"970bbba2-8878-4b08-948a-67b663cac140","type":"LinearScale"},"y_range":{"id":"707f8e40-c832-4a58-9237-3013ea13691a","type":"DataRange1d"},"y_scale":{"id":"05ea257d-8745-4f89-b996-cc3496f1c727","type":"LinearScale"}},"id":"8343fe30-eb6d-41da-a2ec-9d0bacde18a0","type":"GMapPlot"},{"attributes":{"plot":null,"text":"Austin"},"id":"585f9ced-71c1-4ea5-a6ee-a10ea998643c","type":"Title"},{"attributes":{"callback":null,"column_names":["lat","lon"],"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]}},"id":"427aef73-402b-4e52-bf17-1df25f8b2b65","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"707f8e40-c832-4a58-9237-3013ea13691a","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"00ed9327-9474-4da3-8141-dbb894dd8c68","type":"PanTool"},{"id":"403c022d-fd61-46c1-9b8b-2d5db07d018d","type":"WheelZoomTool"},{"id":"4f137055-43e7-4972-a78e-8559586b6b09","type":"BoxSelectTool"}]},"id":"546ee086-6f46-41f7-abf8-fc348e951732","type":"Toolbar"},{"attributes":{},"id":"05ea257d-8745-4f89-b996-cc3496f1c727","type":"LinearScale"},{"attributes":{"data_source":{"id":"427aef73-402b-4e52-bf17-1df25f8b2b65","type":"ColumnDataSource"},"glyph":{"id":"b5a34bb2-a6fc-4771-8585-44e208e25e50","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"7338c1aa-53e5-4207-800d-72b2b7807be1","type":"CDSView"}},"id":"5ee01528-c76d-485a-ac1e-6df7dc65f263","type":"GlyphRenderer"},{"attributes":{},"id":"403c022d-fd61-46c1-9b8b-2d5db07d018d","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a500da71-0d2a-4562-8776-67889efcb069","type":"BoxAnnotation"}],"root_ids":["8343fe30-eb6d-41da-a2ec-9d0bacde18a0"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"ece02df7-d27a-4330-884c-a731a24accb1","elementid":"59a019b5-6823-4a16-8dd0-01066248348f","modelid":"8343fe30-eb6d-41da-a2ec-9d0bacde18a0"}];
                
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
