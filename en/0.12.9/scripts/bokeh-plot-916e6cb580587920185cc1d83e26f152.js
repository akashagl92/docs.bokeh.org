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
      };var element = document.getElementById("3b3af307-a197-43c5-b52b-57127895a5af");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b3af307-a197-43c5-b52b-57127895a5af' but no matching script tag was found. ")
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
                    var docs_json = {"bd93e803-1c1b-473c-94bd-f63b47909380":{"roots":{"references":[{"attributes":{"below":[{"id":"7875eee6-44a4-4aba-8c60-0c4b9ae1abe4","type":"LinearAxis"}],"left":[{"id":"eb539a6e-3436-400f-93d9-cb7a73bb1c46","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"7875eee6-44a4-4aba-8c60-0c4b9ae1abe4","type":"LinearAxis"},{"id":"39159e4a-301a-48ac-8b3c-4c5a92f9e9d6","type":"Grid"},{"id":"eb539a6e-3436-400f-93d9-cb7a73bb1c46","type":"CategoricalAxis"},{"id":"c3d6f18c-0a6b-42e5-8d86-4ef3c217da2b","type":"Grid"},{"id":"23a2f313-bc76-4da0-9811-1461956d2a81","type":"BoxAnnotation"},{"id":"c310dabe-ef1a-4ed6-873e-f5de61a71944","type":"GlyphRenderer"}],"title":{"id":"5776a098-2e08-4e2b-8f73-95bb274c3031","type":"Title"},"toolbar":{"id":"1a1be48d-3a33-4d4a-a7dd-8fe2c4fb52ea","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ea36aecc-a0b5-4c31-ae09-9b172cd23af4","type":"Range1d"},"x_scale":{"id":"d002a731-d90b-4324-902a-4cbc9a41f6c1","type":"LinearScale"},"y_range":{"id":"64488748-a7be-4e2b-b911-c6ff74a28b03","type":"FactorRange"},"y_scale":{"id":"a9add457-63b7-4978-a877-826dcc2acaf3","type":"CategoricalScale"}},"id":"1686f0be-4959-426f-893b-1f5bbf870648","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"c79b7e28-ac24-4bb7-989b-82303e55c83a","type":"HBar"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"7f30ef7c-a4c1-4740-97a4-1ec21d8bab96","type":"BasicTickFormatter"},"plot":{"id":"1686f0be-4959-426f-893b-1f5bbf870648","subtype":"Figure","type":"Plot"},"ticker":{"id":"54d4bff6-54fb-42f7-8e45-b9b9dc0540f4","type":"BasicTicker"}},"id":"7875eee6-44a4-4aba-8c60-0c4b9ae1abe4","type":"LinearAxis"},{"attributes":{"source":{"id":"4edb4489-2907-4666-888b-5ed88b5c74b2","type":"ColumnDataSource"}},"id":"71bf9863-8719-4fa3-97bb-f612538e4f4b","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"549b744e-d131-4d96-a681-c21a3a4d0c32","type":"HBar"},{"attributes":{},"id":"a9add457-63b7-4978-a877-826dcc2acaf3","type":"CategoricalScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23a2f313-bc76-4da0-9811-1461956d2a81","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"5776a098-2e08-4e2b-8f73-95bb274c3031","type":"Title"},{"attributes":{},"id":"16985c86-3389-45a7-b0db-87a84569bc00","type":"ResetTool"},{"attributes":{"overlay":{"id":"23a2f313-bc76-4da0-9811-1461956d2a81","type":"BoxAnnotation"}},"id":"f92f8d39-3b04-4312-a22c-7667c0c02e15","type":"BoxZoomTool"},{"attributes":{},"id":"63a4ec1e-b9e5-4187-a318-9a09baa9d6a5","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"64488748-a7be-4e2b-b911-c6ff74a28b03","type":"FactorRange"},{"attributes":{},"id":"236ab92f-18c0-412a-9c3c-f13278ddd13a","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"4edb4489-2907-4666-888b-5ed88b5c74b2","type":"ColumnDataSource"},{"attributes":{},"id":"d002a731-d90b-4324-902a-4cbc9a41f6c1","type":"LinearScale"},{"attributes":{},"id":"90a7e1c4-c947-47d4-b2ac-e4ff5889e58c","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"1686f0be-4959-426f-893b-1f5bbf870648","subtype":"Figure","type":"Plot"},"ticker":{"id":"54d4bff6-54fb-42f7-8e45-b9b9dc0540f4","type":"BasicTicker"}},"id":"39159e4a-301a-48ac-8b3c-4c5a92f9e9d6","type":"Grid"},{"attributes":{},"id":"7f30ef7c-a4c1-4740-97a4-1ec21d8bab96","type":"BasicTickFormatter"},{"attributes":{},"id":"54d4bff6-54fb-42f7-8e45-b9b9dc0540f4","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"da196f63-34f7-47c1-ba41-fc05a892ca68","type":"PanTool"},{"id":"86148d6f-7835-453b-849b-f4eeadf983ff","type":"WheelZoomTool"},{"id":"f92f8d39-3b04-4312-a22c-7667c0c02e15","type":"BoxZoomTool"},{"id":"236ab92f-18c0-412a-9c3c-f13278ddd13a","type":"SaveTool"},{"id":"16985c86-3389-45a7-b0db-87a84569bc00","type":"ResetTool"},{"id":"1f6d968d-c613-47c6-833d-d92cd328c807","type":"HelpTool"}]},"id":"1a1be48d-3a33-4d4a-a7dd-8fe2c4fb52ea","type":"Toolbar"},{"attributes":{},"id":"da196f63-34f7-47c1-ba41-fc05a892ca68","type":"PanTool"},{"attributes":{},"id":"1f6d968d-c613-47c6-833d-d92cd328c807","type":"HelpTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"1686f0be-4959-426f-893b-1f5bbf870648","subtype":"Figure","type":"Plot"},"ticker":{"id":"63a4ec1e-b9e5-4187-a318-9a09baa9d6a5","type":"CategoricalTicker"}},"id":"c3d6f18c-0a6b-42e5-8d86-4ef3c217da2b","type":"Grid"},{"attributes":{},"id":"86148d6f-7835-453b-849b-f4eeadf983ff","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4edb4489-2907-4666-888b-5ed88b5c74b2","type":"ColumnDataSource"},"glyph":{"id":"549b744e-d131-4d96-a681-c21a3a4d0c32","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c79b7e28-ac24-4bb7-989b-82303e55c83a","type":"HBar"},"selection_glyph":null,"view":{"id":"71bf9863-8719-4fa3-97bb-f612538e4f4b","type":"CDSView"}},"id":"c310dabe-ef1a-4ed6-873e-f5de61a71944","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"ea36aecc-a0b5-4c31-ae09-9b172cd23af4","type":"Range1d"},{"attributes":{"formatter":{"id":"90a7e1c4-c947-47d4-b2ac-e4ff5889e58c","type":"CategoricalTickFormatter"},"plot":{"id":"1686f0be-4959-426f-893b-1f5bbf870648","subtype":"Figure","type":"Plot"},"ticker":{"id":"63a4ec1e-b9e5-4187-a318-9a09baa9d6a5","type":"CategoricalTicker"}},"id":"eb539a6e-3436-400f-93d9-cb7a73bb1c46","type":"CategoricalAxis"}],"root_ids":["1686f0be-4959-426f-893b-1f5bbf870648"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"bd93e803-1c1b-473c-94bd-f63b47909380","elementid":"3b3af307-a197-43c5-b52b-57127895a5af","modelid":"1686f0be-4959-426f-893b-1f5bbf870648"}];
                
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
