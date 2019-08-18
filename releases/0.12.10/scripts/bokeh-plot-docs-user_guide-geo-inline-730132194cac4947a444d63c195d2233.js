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
      };var element = document.getElementById("827600b5-e317-4962-a21d-50e51be67579");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '827600b5-e317-4962-a21d-50e51be67579' but no matching script tag was found. ")
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
                    var docs_json = {"dc139430-7350-40b4-bbf4-ebb3d8e9c845":{"roots":{"references":[{"attributes":{"callback":null},"id":"99be555a-61cf-455d-bed6-5938aaa218f3","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"5e9bfaea-5810-4330-922c-6f081b458a92","type":"BoxAnnotation"}},"id":"4bdc0c7e-f56e-4c3a-bd1f-cfa75809609d","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5e9bfaea-5810-4330-922c-6f081b458a92","type":"BoxAnnotation"},{"attributes":{},"id":"fc441d6f-a66d-4a3d-8987-b2457ea02d3c","type":"LinearScale"},{"attributes":{"plot":null,"text":"Austin"},"id":"12745ed9-948e-47c5-9a99-d97f94d44e6f","type":"Title"},{"attributes":{},"id":"49b3ce00-a9b6-4675-b386-1373a40dd4c4","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":null},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"aee89ccd-88a1-4910-af11-9ac9054d2e1b","type":"Circle"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","map_options":{"id":"f46f3365-434c-4075-8862-9bd5c510be29","type":"GMapOptions"},"renderers":[{"id":"5af67489-b0b0-41bf-b79e-1337566c240b","type":"GlyphRenderer"},{"id":"5e9bfaea-5810-4330-922c-6f081b458a92","type":"BoxAnnotation"}],"title":{"id":"12745ed9-948e-47c5-9a99-d97f94d44e6f","type":"Title"},"toolbar":{"id":"aed0cb0e-7edd-4bd5-bb65-3285db6abdc0","type":"Toolbar"},"x_range":{"id":"02068cad-e81d-41ae-9d3f-4cdb2bb50d12","type":"DataRange1d"},"x_scale":{"id":"fc441d6f-a66d-4a3d-8987-b2457ea02d3c","type":"LinearScale"},"y_range":{"id":"99be555a-61cf-455d-bed6-5938aaa218f3","type":"DataRange1d"},"y_scale":{"id":"49b3ce00-a9b6-4675-b386-1373a40dd4c4","type":"LinearScale"}},"id":"15912ed9-2be5-4138-8bd4-e85fdd8b94d9","type":"GMapPlot"},{"attributes":{"callback":null},"id":"02068cad-e81d-41ae-9d3f-4cdb2bb50d12","type":"DataRange1d"},{"attributes":{},"id":"16ef370e-5d3e-458c-b74c-aa8fa56b3dc9","type":"PanTool"},{"attributes":{},"id":"327e2d08-61e1-4962-a739-0de3b3ffec96","type":"WheelZoomTool"},{"attributes":{"source":{"id":"e68311c2-556d-4c9e-b919-51c7908dcf23","type":"ColumnDataSource"}},"id":"4afe3ae1-c352-4a0c-9782-ca91d8ebcd0a","type":"CDSView"},{"attributes":{"lat":30.29,"lng":-97.73,"zoom":11},"id":"f46f3365-434c-4075-8862-9bd5c510be29","type":"GMapOptions"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"16ef370e-5d3e-458c-b74c-aa8fa56b3dc9","type":"PanTool"},{"id":"327e2d08-61e1-4962-a739-0de3b3ffec96","type":"WheelZoomTool"},{"id":"4bdc0c7e-f56e-4c3a-bd1f-cfa75809609d","type":"BoxSelectTool"}]},"id":"aed0cb0e-7edd-4bd5-bb65-3285db6abdc0","type":"Toolbar"},{"attributes":{"data_source":{"id":"e68311c2-556d-4c9e-b919-51c7908dcf23","type":"ColumnDataSource"},"glyph":{"id":"aee89ccd-88a1-4910-af11-9ac9054d2e1b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4afe3ae1-c352-4a0c-9782-ca91d8ebcd0a","type":"CDSView"}},"id":"5af67489-b0b0-41bf-b79e-1337566c240b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["lat","lon"],"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]}},"id":"e68311c2-556d-4c9e-b919-51c7908dcf23","type":"ColumnDataSource"}],"root_ids":["15912ed9-2be5-4138-8bd4-e85fdd8b94d9"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"dc139430-7350-40b4-bbf4-ebb3d8e9c845","elementid":"827600b5-e317-4962-a21d-50e51be67579","modelid":"15912ed9-2be5-4138-8bd4-e85fdd8b94d9"}];
                
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
