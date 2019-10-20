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
      };var element = document.getElementById("dadc31a0-484b-4c5c-8ba5-5ae30be36ad1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dadc31a0-484b-4c5c-8ba5-5ae30be36ad1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"5e04eedf-fb91-4b25-a78e-ff2f369aac38":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"634acc42-38d1-427c-849c-740bf6c0f065","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"d7551461-f5e2-4004-864a-bbbad8db98a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"afba592c-b80b-43c7-9ccf-d38b985fc8f0","type":"CategoricalTicker"}},"id":"a2854d1c-33ab-4a28-a394-0a082f9bfc16","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"57cfbf1d-c502-4c3a-8ead-d39cedfc52b4","type":"HBar"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"795bed89-0dd8-4fba-892d-638aa66f5c57","type":"Range1d"},{"attributes":{},"id":"7f510180-30e5-4594-9b31-d1018853a578","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a1f6dc76-1d43-430b-a919-d89fc641f9de","type":"BoxAnnotation"},{"attributes":{"source":{"id":"19e1d702-8f44-47f4-ac89-c1c118095440","type":"ColumnDataSource"}},"id":"5c96f9a3-7374-4583-9c30-0f6983a3783d","type":"CDSView"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"e2e6544b-9937-4e77-a387-59e566beb3d7","type":"Title"},{"attributes":{"below":[{"id":"2ef1e601-2200-4542-b133-584f0e9f10be","type":"LinearAxis"}],"left":[{"id":"6923d1a9-6cb2-4d88-9511-f9546077b054","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"2ef1e601-2200-4542-b133-584f0e9f10be","type":"LinearAxis"},{"id":"ffee8dd1-4cf9-4265-8105-5ba22d02b2a3","type":"Grid"},{"id":"6923d1a9-6cb2-4d88-9511-f9546077b054","type":"CategoricalAxis"},{"id":"a2854d1c-33ab-4a28-a394-0a082f9bfc16","type":"Grid"},{"id":"a1f6dc76-1d43-430b-a919-d89fc641f9de","type":"BoxAnnotation"},{"id":"01a2cc09-5fbc-4271-be57-f913e70bad76","type":"GlyphRenderer"}],"title":{"id":"e2e6544b-9937-4e77-a387-59e566beb3d7","type":"Title"},"toolbar":{"id":"0f743457-7cd9-4dd4-a263-3d0d9554ffbf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"795bed89-0dd8-4fba-892d-638aa66f5c57","type":"Range1d"},"x_scale":{"id":"b2430e42-a51b-439d-9b16-fd28d45ac369","type":"LinearScale"},"y_range":{"id":"f64543a3-57da-4a98-9d43-1b263adaf349","type":"FactorRange"},"y_scale":{"id":"a429a25d-5687-44f1-ab83-4ea34874d718","type":"CategoricalScale"}},"id":"d7551461-f5e2-4004-864a-bbbad8db98a1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c3d816d8-9800-4a80-8e50-d4cee3805e2a","type":"SaveTool"},{"attributes":{},"id":"cfc64ec0-1d52-423a-9c2b-ab8cde1fa7e5","type":"HelpTool"},{"attributes":{},"id":"02596359-dbaa-44e0-96bb-bd870256d21e","type":"ResetTool"},{"attributes":{},"id":"b2430e42-a51b-439d-9b16-fd28d45ac369","type":"LinearScale"},{"attributes":{},"id":"cc21e85c-5d64-4a7f-b1cc-f687959e224e","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"selected":null,"selection_policy":null},"id":"19e1d702-8f44-47f4-ac89-c1c118095440","type":"ColumnDataSource"},{"attributes":{},"id":"9dfeb385-476f-4fcb-b8d4-443ae375229f","type":"BasicTicker"},{"attributes":{},"id":"a429a25d-5687-44f1-ab83-4ea34874d718","type":"CategoricalScale"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"798ae95d-a27f-46a2-b4d6-27b09523ad2b","type":"BasicTickFormatter"},"plot":{"id":"d7551461-f5e2-4004-864a-bbbad8db98a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"9dfeb385-476f-4fcb-b8d4-443ae375229f","type":"BasicTicker"}},"id":"2ef1e601-2200-4542-b133-584f0e9f10be","type":"LinearAxis"},{"attributes":{"plot":{"id":"d7551461-f5e2-4004-864a-bbbad8db98a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"9dfeb385-476f-4fcb-b8d4-443ae375229f","type":"BasicTicker"}},"id":"ffee8dd1-4cf9-4265-8105-5ba22d02b2a3","type":"Grid"},{"attributes":{"overlay":{"id":"a1f6dc76-1d43-430b-a919-d89fc641f9de","type":"BoxAnnotation"}},"id":"9a2224cc-389e-4cc9-ba0b-55572b381cf5","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"acd0e5d9-bd50-4abb-9d40-c8c39a60bb1a","type":"PanTool"},{"id":"7f510180-30e5-4594-9b31-d1018853a578","type":"WheelZoomTool"},{"id":"9a2224cc-389e-4cc9-ba0b-55572b381cf5","type":"BoxZoomTool"},{"id":"c3d816d8-9800-4a80-8e50-d4cee3805e2a","type":"SaveTool"},{"id":"02596359-dbaa-44e0-96bb-bd870256d21e","type":"ResetTool"},{"id":"cfc64ec0-1d52-423a-9c2b-ab8cde1fa7e5","type":"HelpTool"}]},"id":"0f743457-7cd9-4dd4-a263-3d0d9554ffbf","type":"Toolbar"},{"attributes":{"data_source":{"id":"19e1d702-8f44-47f4-ac89-c1c118095440","type":"ColumnDataSource"},"glyph":{"id":"634acc42-38d1-427c-849c-740bf6c0f065","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57cfbf1d-c502-4c3a-8ead-d39cedfc52b4","type":"HBar"},"selection_glyph":null,"view":{"id":"5c96f9a3-7374-4583-9c30-0f6983a3783d","type":"CDSView"}},"id":"01a2cc09-5fbc-4271-be57-f913e70bad76","type":"GlyphRenderer"},{"attributes":{},"id":"afba592c-b80b-43c7-9ccf-d38b985fc8f0","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"cc21e85c-5d64-4a7f-b1cc-f687959e224e","type":"CategoricalTickFormatter"},"plot":{"id":"d7551461-f5e2-4004-864a-bbbad8db98a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"afba592c-b80b-43c7-9ccf-d38b985fc8f0","type":"CategoricalTicker"}},"id":"6923d1a9-6cb2-4d88-9511-f9546077b054","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"f64543a3-57da-4a98-9d43-1b263adaf349","type":"FactorRange"},{"attributes":{},"id":"798ae95d-a27f-46a2-b4d6-27b09523ad2b","type":"BasicTickFormatter"},{"attributes":{},"id":"acd0e5d9-bd50-4abb-9d40-c8c39a60bb1a","type":"PanTool"}],"root_ids":["d7551461-f5e2-4004-864a-bbbad8db98a1"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"5e04eedf-fb91-4b25-a78e-ff2f369aac38","elementid":"dadc31a0-484b-4c5c-8ba5-5ae30be36ad1","modelid":"d7551461-f5e2-4004-864a-bbbad8db98a1"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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