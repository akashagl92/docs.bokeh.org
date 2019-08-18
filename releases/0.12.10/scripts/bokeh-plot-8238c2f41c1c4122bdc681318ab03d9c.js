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
      };var element = document.getElementById("f30ab090-b9cc-4d14-bb84-42232aa56135");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f30ab090-b9cc-4d14-bb84-42232aa56135' but no matching script tag was found. ")
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
                    var docs_json = {"2ef7ec17-433b-4f8b-b7f6-343ac5345487":{"roots":{"references":[{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"3f8230da-8a13-45b9-be71-fd80eed84d0a","type":"Title"},{"attributes":{"data_source":{"id":"ae098ec5-78b8-4bfb-9fa3-ed156848b87f","type":"ColumnDataSource"},"glyph":{"id":"a8645ff3-bbb0-4ecb-8700-4be4e9710d43","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e78f7a0b-1eb8-4951-8c51-2cf9a1faae84","type":"HBar"},"selection_glyph":null,"view":{"id":"bc2d528a-3bbe-47cb-a125-30dfae32d217","type":"CDSView"}},"id":"c3a464d2-ec5a-4d5e-aac3-66a937f0b246","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"a8645ff3-bbb0-4ecb-8700-4be4e9710d43","type":"HBar"},{"attributes":{},"id":"1332cd5a-2f54-470d-9bd6-0b506aeeeca8","type":"PanTool"},{"attributes":{},"id":"e06ee5e2-a2b5-4974-9fc8-2997c5afe36e","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"9f168786-4bf4-4742-9c19-d03e12f3dc6b","type":"BoxAnnotation"}},"id":"1cddb636-f71f-4d4a-9dac-39cd75e89d48","type":"BoxZoomTool"},{"attributes":{},"id":"a154e76f-ed38-47d3-af0e-6488e5ebf29b","type":"ResetTool"},{"attributes":{},"id":"fd07d943-8f06-4e55-9d06-3f122882351a","type":"BasicTickFormatter"},{"attributes":{},"id":"46e8769c-f9bf-461e-bb63-ab0de6194313","type":"CategoricalTicker"},{"attributes":{},"id":"181f44fd-6213-487d-a075-464436488e99","type":"CategoricalScale"},{"attributes":{"below":[{"id":"598737b1-8c64-4611-b432-5d5752d55a91","type":"LinearAxis"}],"left":[{"id":"7c06c9ab-f976-4804-8fb9-ddae1cc8f0f7","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"598737b1-8c64-4611-b432-5d5752d55a91","type":"LinearAxis"},{"id":"0f8d0b6a-c50d-4936-959e-18d00c087491","type":"Grid"},{"id":"7c06c9ab-f976-4804-8fb9-ddae1cc8f0f7","type":"CategoricalAxis"},{"id":"6a4f2c9d-14b7-41c8-a6c9-2f22087a728b","type":"Grid"},{"id":"9f168786-4bf4-4742-9c19-d03e12f3dc6b","type":"BoxAnnotation"},{"id":"c3a464d2-ec5a-4d5e-aac3-66a937f0b246","type":"GlyphRenderer"}],"title":{"id":"3f8230da-8a13-45b9-be71-fd80eed84d0a","type":"Title"},"toolbar":{"id":"f8429638-2b2e-422e-94da-69f9799401fd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2a4c726c-1869-40b4-83e8-c39f3bf29a46","type":"Range1d"},"x_scale":{"id":"86fc0fa0-6454-4b4f-b64f-352c3bce984d","type":"LinearScale"},"y_range":{"id":"4c842301-dd25-4ba4-851c-0b5f9e40e9df","type":"FactorRange"},"y_scale":{"id":"181f44fd-6213-487d-a075-464436488e99","type":"CategoricalScale"}},"id":"db5e6ce0-1f7d-40e9-97ab-87b99644cb57","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"db5e6ce0-1f7d-40e9-97ab-87b99644cb57","subtype":"Figure","type":"Plot"},"ticker":{"id":"485c5e68-6e4c-4a0c-8feb-91cc8f530326","type":"BasicTicker"}},"id":"0f8d0b6a-c50d-4936-959e-18d00c087491","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1332cd5a-2f54-470d-9bd6-0b506aeeeca8","type":"PanTool"},{"id":"e06ee5e2-a2b5-4974-9fc8-2997c5afe36e","type":"WheelZoomTool"},{"id":"1cddb636-f71f-4d4a-9dac-39cd75e89d48","type":"BoxZoomTool"},{"id":"3eec0915-4783-458d-bfdb-085187b864f6","type":"SaveTool"},{"id":"a154e76f-ed38-47d3-af0e-6488e5ebf29b","type":"ResetTool"},{"id":"54f301af-71ca-4c06-b6aa-7b9712bed607","type":"HelpTool"}]},"id":"f8429638-2b2e-422e-94da-69f9799401fd","type":"Toolbar"},{"attributes":{"formatter":{"id":"691de0f9-2a4e-4c56-a8c8-6660bade9209","type":"CategoricalTickFormatter"},"plot":{"id":"db5e6ce0-1f7d-40e9-97ab-87b99644cb57","subtype":"Figure","type":"Plot"},"ticker":{"id":"46e8769c-f9bf-461e-bb63-ab0de6194313","type":"CategoricalTicker"}},"id":"7c06c9ab-f976-4804-8fb9-ddae1cc8f0f7","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"e78f7a0b-1eb8-4951-8c51-2cf9a1faae84","type":"HBar"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"2a4c726c-1869-40b4-83e8-c39f3bf29a46","type":"Range1d"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"4c842301-dd25-4ba4-851c-0b5f9e40e9df","type":"FactorRange"},{"attributes":{},"id":"3eec0915-4783-458d-bfdb-085187b864f6","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9f168786-4bf4-4742-9c19-d03e12f3dc6b","type":"BoxAnnotation"},{"attributes":{"source":{"id":"ae098ec5-78b8-4bfb-9fa3-ed156848b87f","type":"ColumnDataSource"}},"id":"bc2d528a-3bbe-47cb-a125-30dfae32d217","type":"CDSView"},{"attributes":{},"id":"54f301af-71ca-4c06-b6aa-7b9712bed607","type":"HelpTool"},{"attributes":{},"id":"691de0f9-2a4e-4c56-a8c8-6660bade9209","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"fd07d943-8f06-4e55-9d06-3f122882351a","type":"BasicTickFormatter"},"plot":{"id":"db5e6ce0-1f7d-40e9-97ab-87b99644cb57","subtype":"Figure","type":"Plot"},"ticker":{"id":"485c5e68-6e4c-4a0c-8feb-91cc8f530326","type":"BasicTicker"}},"id":"598737b1-8c64-4611-b432-5d5752d55a91","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"ae098ec5-78b8-4bfb-9fa3-ed156848b87f","type":"ColumnDataSource"},{"attributes":{},"id":"485c5e68-6e4c-4a0c-8feb-91cc8f530326","type":"BasicTicker"},{"attributes":{},"id":"86fc0fa0-6454-4b4f-b64f-352c3bce984d","type":"LinearScale"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"db5e6ce0-1f7d-40e9-97ab-87b99644cb57","subtype":"Figure","type":"Plot"},"ticker":{"id":"46e8769c-f9bf-461e-bb63-ab0de6194313","type":"CategoricalTicker"}},"id":"6a4f2c9d-14b7-41c8-a6c9-2f22087a728b","type":"Grid"}],"root_ids":["db5e6ce0-1f7d-40e9-97ab-87b99644cb57"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"2ef7ec17-433b-4f8b-b7f6-343ac5345487","elementid":"f30ab090-b9cc-4d14-bb84-42232aa56135","modelid":"db5e6ce0-1f7d-40e9-97ab-87b99644cb57"}];
                
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
