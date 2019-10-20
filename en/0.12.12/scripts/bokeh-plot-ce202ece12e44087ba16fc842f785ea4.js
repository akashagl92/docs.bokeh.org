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
      };var element = document.getElementById("6d454fcc-f833-4ff9-8d8a-28523881b491");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d454fcc-f833-4ff9-8d8a-28523881b491' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"363dfddf-a355-4da3-a432-4092f8509100":{"roots":{"references":[{"attributes":{"plot":{"id":"e913567f-1ad3-4998-9a7c-55ecd9b3d552","subtype":"Figure","type":"Plot"},"ticker":{"id":"036ce4b5-bc55-44b5-8c5a-6ad5fb9df9ba","type":"BasicTicker"}},"id":"0a1c19e9-ef4d-4ec4-a558-7020c5240afc","type":"Grid"},{"attributes":{},"id":"9379f9ac-79f5-4077-a68f-4d914226a0f6","type":"SaveTool"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"bef6c540-51a7-4f00-9a38-507182d1a542","type":"Title"},{"attributes":{},"id":"83d88423-5847-4c5e-9571-f1f32577316b","type":"PanTool"},{"attributes":{},"id":"0451649a-7cc5-43f0-a680-4966c92c20cb","type":"CategoricalScale"},{"attributes":{},"id":"ffe5f6f9-4c9e-46fe-942b-ee88e4097553","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"bb703757-60b4-49bb-aff5-71c56e58bceb","type":"HBar"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"45516b08-3dcf-4eb5-a5e9-17b1b92991d7","type":"FactorRange"},{"attributes":{},"id":"363feb06-e524-4ed6-acd8-80b7d319d61c","type":"WheelZoomTool"},{"attributes":{},"id":"2a9059d2-d728-48a6-9e8e-4b0f9003045d","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"173bf958-8fc3-421f-a08d-fc53e56be0d3","type":"ColumnDataSource"},{"attributes":{},"id":"cd63c097-5510-4172-b72e-a9dbec7c41fa","type":"CategoricalTicker"},{"attributes":{},"id":"036ce4b5-bc55-44b5-8c5a-6ad5fb9df9ba","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"83d88423-5847-4c5e-9571-f1f32577316b","type":"PanTool"},{"id":"363feb06-e524-4ed6-acd8-80b7d319d61c","type":"WheelZoomTool"},{"id":"1e9c74bc-da2f-4839-9efb-8b2f86139cae","type":"BoxZoomTool"},{"id":"9379f9ac-79f5-4077-a68f-4d914226a0f6","type":"SaveTool"},{"id":"0793274e-c332-4026-9536-6670003fc7e4","type":"ResetTool"},{"id":"ffe5f6f9-4c9e-46fe-942b-ee88e4097553","type":"HelpTool"}]},"id":"00b4daa0-18eb-4f3d-8d1d-e8ba2377dc24","type":"Toolbar"},{"attributes":{},"id":"f8c65030-4587-4eef-a5c7-f89d7b13da09","type":"LinearScale"},{"attributes":{"below":[{"id":"ae444b70-c89b-4dbb-9676-eaffe52bd197","type":"LinearAxis"}],"left":[{"id":"458025a9-8a9e-4a3a-87f9-4e45c6f954e2","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"ae444b70-c89b-4dbb-9676-eaffe52bd197","type":"LinearAxis"},{"id":"0a1c19e9-ef4d-4ec4-a558-7020c5240afc","type":"Grid"},{"id":"458025a9-8a9e-4a3a-87f9-4e45c6f954e2","type":"CategoricalAxis"},{"id":"da801d29-2953-473d-9cff-9e64d4068568","type":"Grid"},{"id":"1a6961a6-91c8-45da-91e0-a515a2c96387","type":"BoxAnnotation"},{"id":"dbce7661-0566-4c4f-86d0-17537c269c6d","type":"GlyphRenderer"}],"title":{"id":"bef6c540-51a7-4f00-9a38-507182d1a542","type":"Title"},"toolbar":{"id":"00b4daa0-18eb-4f3d-8d1d-e8ba2377dc24","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11d534fd-108b-4b7a-8f6c-eceac06e6885","type":"Range1d"},"x_scale":{"id":"f8c65030-4587-4eef-a5c7-f89d7b13da09","type":"LinearScale"},"y_range":{"id":"45516b08-3dcf-4eb5-a5e9-17b1b92991d7","type":"FactorRange"},"y_scale":{"id":"0451649a-7cc5-43f0-a680-4966c92c20cb","type":"CategoricalScale"}},"id":"e913567f-1ad3-4998-9a7c-55ecd9b3d552","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d2f8f664-4ca3-499c-a33c-f868f488bed5","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2a9059d2-d728-48a6-9e8e-4b0f9003045d","type":"CategoricalTickFormatter"},"plot":{"id":"e913567f-1ad3-4998-9a7c-55ecd9b3d552","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd63c097-5510-4172-b72e-a9dbec7c41fa","type":"CategoricalTicker"}},"id":"458025a9-8a9e-4a3a-87f9-4e45c6f954e2","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"1a6961a6-91c8-45da-91e0-a515a2c96387","type":"BoxAnnotation"}},"id":"1e9c74bc-da2f-4839-9efb-8b2f86139cae","type":"BoxZoomTool"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"d2f8f664-4ca3-499c-a33c-f868f488bed5","type":"BasicTickFormatter"},"plot":{"id":"e913567f-1ad3-4998-9a7c-55ecd9b3d552","subtype":"Figure","type":"Plot"},"ticker":{"id":"036ce4b5-bc55-44b5-8c5a-6ad5fb9df9ba","type":"BasicTicker"}},"id":"ae444b70-c89b-4dbb-9676-eaffe52bd197","type":"LinearAxis"},{"attributes":{"source":{"id":"173bf958-8fc3-421f-a08d-fc53e56be0d3","type":"ColumnDataSource"}},"id":"00ce49cb-09f3-4b86-a527-8643601b75b1","type":"CDSView"},{"attributes":{"data_source":{"id":"173bf958-8fc3-421f-a08d-fc53e56be0d3","type":"ColumnDataSource"},"glyph":{"id":"582cb55a-1cd0-41fa-8199-09899e99aaf0","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bb703757-60b4-49bb-aff5-71c56e58bceb","type":"HBar"},"selection_glyph":null,"view":{"id":"00ce49cb-09f3-4b86-a527-8643601b75b1","type":"CDSView"}},"id":"dbce7661-0566-4c4f-86d0-17537c269c6d","type":"GlyphRenderer"},{"attributes":{},"id":"0793274e-c332-4026-9536-6670003fc7e4","type":"ResetTool"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"11d534fd-108b-4b7a-8f6c-eceac06e6885","type":"Range1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"582cb55a-1cd0-41fa-8199-09899e99aaf0","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"e913567f-1ad3-4998-9a7c-55ecd9b3d552","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd63c097-5510-4172-b72e-a9dbec7c41fa","type":"CategoricalTicker"}},"id":"da801d29-2953-473d-9cff-9e64d4068568","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1a6961a6-91c8-45da-91e0-a515a2c96387","type":"BoxAnnotation"}],"root_ids":["e913567f-1ad3-4998-9a7c-55ecd9b3d552"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"363dfddf-a355-4da3-a432-4092f8509100","elementid":"6d454fcc-f833-4ff9-8d8a-28523881b491","modelid":"e913567f-1ad3-4998-9a7c-55ecd9b3d552"}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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