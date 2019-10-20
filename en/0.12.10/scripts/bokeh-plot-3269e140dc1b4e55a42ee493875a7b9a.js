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
      };var element = document.getElementById("244b29b4-09e6-4bf1-a48a-4bacc221f20a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '244b29b4-09e6-4bf1-a48a-4bacc221f20a' but no matching script tag was found. ")
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
                    var docs_json = {"24021ed0-115f-4283-96c2-76ac51bd1529":{"roots":{"references":[{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"6a6fee9b-21ea-4a74-b4e5-cadc843a1d10","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"07e8bf21-a757-4917-b133-91597b87c919","type":"PanTool"},{"id":"3ea7e890-4f1b-4ee6-afe6-af55ceee34c2","type":"WheelZoomTool"},{"id":"b016d031-5049-4173-87ff-a5d3141b3081","type":"BoxZoomTool"},{"id":"65735388-a847-4042-827c-4bec43461072","type":"SaveTool"},{"id":"597fdd57-c821-4284-9891-7df87f647a17","type":"ResetTool"},{"id":"ebd410ce-1959-4870-b61b-d9641c3f8b52","type":"HelpTool"}]},"id":"f89612f7-1cf1-48f0-a1ec-b7c9a01a10da","type":"Toolbar"},{"attributes":{"overlay":{"id":"05ba143c-273f-4fd2-ab2a-dcdcdc153fb1","type":"BoxAnnotation"}},"id":"b016d031-5049-4173-87ff-a5d3141b3081","type":"BoxZoomTool"},{"attributes":{},"id":"4de20481-b4e4-421a-8061-abd7adce9dfe","type":"CategoricalScale"},{"attributes":{"source":{"id":"1e64c0c9-a504-4aeb-a045-2d514e09dd68","type":"ColumnDataSource"}},"id":"9ad3c933-c3a8-4516-8985-a5f70a9c5d7a","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"05ba143c-273f-4fd2-ab2a-dcdcdc153fb1","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"8afacc40-17c3-4af7-b3bf-105de7bc9a0d","type":"LinearAxis"}],"left":[{"id":"1f753172-686f-414c-a3fc-53b73fc7d1d7","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"8afacc40-17c3-4af7-b3bf-105de7bc9a0d","type":"LinearAxis"},{"id":"6d82e1e0-ef1b-492f-b95a-0b7c14da1b37","type":"Grid"},{"id":"1f753172-686f-414c-a3fc-53b73fc7d1d7","type":"CategoricalAxis"},{"id":"6515d299-075e-4221-b1ba-1fb196ffb8a0","type":"Grid"},{"id":"05ba143c-273f-4fd2-ab2a-dcdcdc153fb1","type":"BoxAnnotation"},{"id":"ec52cc43-d065-41a7-afb3-ef59c8a65814","type":"GlyphRenderer"}],"title":{"id":"8e0c8804-59f1-4193-9a1a-64f8a47678c6","type":"Title"},"toolbar":{"id":"f89612f7-1cf1-48f0-a1ec-b7c9a01a10da","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3d59d32d-8378-44bb-a721-c8335f253bd7","type":"Range1d"},"x_scale":{"id":"17ceae06-170b-4d3d-86b3-b47c10dc9b2f","type":"LinearScale"},"y_range":{"id":"6a6fee9b-21ea-4a74-b4e5-cadc843a1d10","type":"FactorRange"},"y_scale":{"id":"4de20481-b4e4-421a-8061-abd7adce9dfe","type":"CategoricalScale"}},"id":"d5a3f11e-ca49-4b12-a512-3fceb94aa305","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9e4b4dde-a3b6-4859-95c7-55eab06422a1","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"313221c8-8ebd-4f5c-b67c-64284c7a0f29","type":"HBar"},{"attributes":{},"id":"d79a154e-5c0c-4570-ab42-d056ebf5e1c4","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"1e64c0c9-a504-4aeb-a045-2d514e09dd68","type":"ColumnDataSource"},{"attributes":{},"id":"65735388-a847-4042-827c-4bec43461072","type":"SaveTool"},{"attributes":{"plot":{"id":"d5a3f11e-ca49-4b12-a512-3fceb94aa305","subtype":"Figure","type":"Plot"},"ticker":{"id":"d79a154e-5c0c-4570-ab42-d056ebf5e1c4","type":"BasicTicker"}},"id":"6d82e1e0-ef1b-492f-b95a-0b7c14da1b37","type":"Grid"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"d5a3f11e-ca49-4b12-a512-3fceb94aa305","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e4b4dde-a3b6-4859-95c7-55eab06422a1","type":"CategoricalTicker"}},"id":"6515d299-075e-4221-b1ba-1fb196ffb8a0","type":"Grid"},{"attributes":{},"id":"597fdd57-c821-4284-9891-7df87f647a17","type":"ResetTool"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"3d59d32d-8378-44bb-a721-c8335f253bd7","type":"Range1d"},{"attributes":{},"id":"3ea7e890-4f1b-4ee6-afe6-af55ceee34c2","type":"WheelZoomTool"},{"attributes":{},"id":"6895aead-39ad-4fda-948a-ebcb4e8f78bc","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"944693ca-2a59-49c2-8f7c-562207d4b23c","type":"HBar"},{"attributes":{},"id":"17ceae06-170b-4d3d-86b3-b47c10dc9b2f","type":"LinearScale"},{"attributes":{},"id":"ebd410ce-1959-4870-b61b-d9641c3f8b52","type":"HelpTool"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"5832abfb-47ba-4a6a-b3f8-97aa3eeeb758","type":"BasicTickFormatter"},"plot":{"id":"d5a3f11e-ca49-4b12-a512-3fceb94aa305","subtype":"Figure","type":"Plot"},"ticker":{"id":"d79a154e-5c0c-4570-ab42-d056ebf5e1c4","type":"BasicTicker"}},"id":"8afacc40-17c3-4af7-b3bf-105de7bc9a0d","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"8e0c8804-59f1-4193-9a1a-64f8a47678c6","type":"Title"},{"attributes":{"data_source":{"id":"1e64c0c9-a504-4aeb-a045-2d514e09dd68","type":"ColumnDataSource"},"glyph":{"id":"944693ca-2a59-49c2-8f7c-562207d4b23c","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"313221c8-8ebd-4f5c-b67c-64284c7a0f29","type":"HBar"},"selection_glyph":null,"view":{"id":"9ad3c933-c3a8-4516-8985-a5f70a9c5d7a","type":"CDSView"}},"id":"ec52cc43-d065-41a7-afb3-ef59c8a65814","type":"GlyphRenderer"},{"attributes":{},"id":"07e8bf21-a757-4917-b133-91597b87c919","type":"PanTool"},{"attributes":{"formatter":{"id":"6895aead-39ad-4fda-948a-ebcb4e8f78bc","type":"CategoricalTickFormatter"},"plot":{"id":"d5a3f11e-ca49-4b12-a512-3fceb94aa305","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e4b4dde-a3b6-4859-95c7-55eab06422a1","type":"CategoricalTicker"}},"id":"1f753172-686f-414c-a3fc-53b73fc7d1d7","type":"CategoricalAxis"},{"attributes":{},"id":"5832abfb-47ba-4a6a-b3f8-97aa3eeeb758","type":"BasicTickFormatter"}],"root_ids":["d5a3f11e-ca49-4b12-a512-3fceb94aa305"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"24021ed0-115f-4283-96c2-76ac51bd1529","elementid":"244b29b4-09e6-4bf1-a48a-4bacc221f20a","modelid":"d5a3f11e-ca49-4b12-a512-3fceb94aa305"}];
                
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
