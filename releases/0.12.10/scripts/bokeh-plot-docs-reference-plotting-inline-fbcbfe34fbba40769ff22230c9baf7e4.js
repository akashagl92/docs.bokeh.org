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
      };var element = document.getElementById("4a3701ee-b2a9-44a2-8111-46014f579964");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4a3701ee-b2a9-44a2-8111-46014f579964' but no matching script tag was found. ")
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
                    var docs_json = {"2e0824d7-b194-4e2d-9cef-7e5a334018cc":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b2dc3379-001c-49ca-b4d6-b5986d692c56","type":"PanTool"},{"id":"bf6a974a-a01c-4a35-bbea-90658ef232b2","type":"WheelZoomTool"},{"id":"6a0b5e66-7405-4a71-bac2-1f373b4e39a4","type":"BoxZoomTool"},{"id":"53cb700d-50bb-45d6-a7c6-bef9691b2c13","type":"SaveTool"},{"id":"b673f6d8-593c-4cc1-91c9-09ad70e6ffe9","type":"ResetTool"},{"id":"e73f18c0-c13d-4a32-a7f5-649e06fb4683","type":"HelpTool"}]},"id":"44224501-5d60-47b4-b33f-b61dfc3ecc41","type":"Toolbar"},{"attributes":{"source":{"id":"a1041236-973a-426a-8646-b0124955c67f","type":"ColumnDataSource"}},"id":"8ab65791-3125-4825-af05-e10855e807fd","type":"CDSView"},{"attributes":{"callback":null},"id":"ed061447-fde5-437a-bfc0-7f353e0d254d","type":"DataRange1d"},{"attributes":{},"id":"bf6a974a-a01c-4a35-bbea-90658ef232b2","type":"WheelZoomTool"},{"attributes":{},"id":"c00e47e9-3825-441e-9838-fd668f7f6adb","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8a610fab-c141-40ce-9f6a-8267b922aaba","type":"BoxAnnotation"}},"id":"6a0b5e66-7405-4a71-bac2-1f373b4e39a4","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"e74c6c75-f1a8-486d-b6a8-837aefd0e80c","type":"CircleCross"},{"attributes":{},"id":"53cb700d-50bb-45d6-a7c6-bef9691b2c13","type":"SaveTool"},{"attributes":{"formatter":{"id":"5984c398-fa49-4d93-a7bf-fd2dd9ef8ff5","type":"BasicTickFormatter"},"plot":{"id":"919d9182-b54f-458a-9287-719d0b35e889","subtype":"Figure","type":"Plot"},"ticker":{"id":"c00e47e9-3825-441e-9838-fd668f7f6adb","type":"BasicTicker"}},"id":"e1282114-282d-4e2f-ba70-503484fb1acb","type":"LinearAxis"},{"attributes":{},"id":"b673f6d8-593c-4cc1-91c9-09ad70e6ffe9","type":"ResetTool"},{"attributes":{"callback":null},"id":"b58799bb-1835-48b1-80e6-6bb1058cff4a","type":"DataRange1d"},{"attributes":{},"id":"e73f18c0-c13d-4a32-a7f5-649e06fb4683","type":"HelpTool"},{"attributes":{},"id":"a49d02b1-3027-4860-9e21-71a452696e82","type":"LinearScale"},{"attributes":{},"id":"5984c398-fa49-4d93-a7bf-fd2dd9ef8ff5","type":"BasicTickFormatter"},{"attributes":{},"id":"ceb5dfcb-875f-4bed-9503-a1dbce1bfa71","type":"LinearScale"},{"attributes":{"data_source":{"id":"a1041236-973a-426a-8646-b0124955c67f","type":"ColumnDataSource"},"glyph":{"id":"e74c6c75-f1a8-486d-b6a8-837aefd0e80c","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3206bfc4-2e75-459b-b189-3f5445d402e6","type":"CircleCross"},"selection_glyph":null,"view":{"id":"8ab65791-3125-4825-af05-e10855e807fd","type":"CDSView"}},"id":"1b7588e3-c81d-4cb3-9502-bd6200717786","type":"GlyphRenderer"},{"attributes":{},"id":"0715da91-f2b8-40b2-bdc7-a49005417355","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"919d9182-b54f-458a-9287-719d0b35e889","subtype":"Figure","type":"Plot"},"ticker":{"id":"c00e47e9-3825-441e-9838-fd668f7f6adb","type":"BasicTicker"}},"id":"eda9a868-312e-49c1-9519-44a6c1852326","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"b631868b-c994-4ab4-b032-156276524386","type":"Title"},{"attributes":{"formatter":{"id":"0715da91-f2b8-40b2-bdc7-a49005417355","type":"BasicTickFormatter"},"plot":{"id":"919d9182-b54f-458a-9287-719d0b35e889","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a12ac27-a595-4657-98ea-caa965c86ba9","type":"BasicTicker"}},"id":"0d9e3a9a-1a00-4228-8ea2-7c7ffc2b8daf","type":"LinearAxis"},{"attributes":{},"id":"3a12ac27-a595-4657-98ea-caa965c86ba9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"919d9182-b54f-458a-9287-719d0b35e889","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a12ac27-a595-4657-98ea-caa965c86ba9","type":"BasicTicker"}},"id":"e07043f0-254f-46e1-9927-2c49e193333a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3206bfc4-2e75-459b-b189-3f5445d402e6","type":"CircleCross"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"a1041236-973a-426a-8646-b0124955c67f","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8a610fab-c141-40ce-9f6a-8267b922aaba","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"e1282114-282d-4e2f-ba70-503484fb1acb","type":"LinearAxis"}],"left":[{"id":"0d9e3a9a-1a00-4228-8ea2-7c7ffc2b8daf","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e1282114-282d-4e2f-ba70-503484fb1acb","type":"LinearAxis"},{"id":"eda9a868-312e-49c1-9519-44a6c1852326","type":"Grid"},{"id":"0d9e3a9a-1a00-4228-8ea2-7c7ffc2b8daf","type":"LinearAxis"},{"id":"e07043f0-254f-46e1-9927-2c49e193333a","type":"Grid"},{"id":"8a610fab-c141-40ce-9f6a-8267b922aaba","type":"BoxAnnotation"},{"id":"1b7588e3-c81d-4cb3-9502-bd6200717786","type":"GlyphRenderer"}],"title":{"id":"b631868b-c994-4ab4-b032-156276524386","type":"Title"},"toolbar":{"id":"44224501-5d60-47b4-b33f-b61dfc3ecc41","type":"Toolbar"},"x_range":{"id":"ed061447-fde5-437a-bfc0-7f353e0d254d","type":"DataRange1d"},"x_scale":{"id":"a49d02b1-3027-4860-9e21-71a452696e82","type":"LinearScale"},"y_range":{"id":"b58799bb-1835-48b1-80e6-6bb1058cff4a","type":"DataRange1d"},"y_scale":{"id":"ceb5dfcb-875f-4bed-9503-a1dbce1bfa71","type":"LinearScale"}},"id":"919d9182-b54f-458a-9287-719d0b35e889","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b2dc3379-001c-49ca-b4d6-b5986d692c56","type":"PanTool"}],"root_ids":["919d9182-b54f-458a-9287-719d0b35e889"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"2e0824d7-b194-4e2d-9cef-7e5a334018cc","elementid":"4a3701ee-b2a9-44a2-8111-46014f579964","modelid":"919d9182-b54f-458a-9287-719d0b35e889"}];
                
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
