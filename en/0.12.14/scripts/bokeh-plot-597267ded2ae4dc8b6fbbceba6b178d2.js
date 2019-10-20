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
      };var element = document.getElementById("46858b2a-7557-45d1-bf89-986dd56fadf3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '46858b2a-7557-45d1-bf89-986dd56fadf3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                    
                  var docs_json = '{"b0ee8371-2e87-4ee2-b2a0-c392d69a706d":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"9bfc8f1a-ed1e-4d30-b687-cb1e8e2fe80c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9bfc8f1a-ed1e-4d30-b687-cb1e8e2fe80c","type":"ColumnDataSource"},"glyph":{"id":"b8dfa34b-f11c-4b27-ba10-ad62ab0d2659","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a0765aa9-c687-4d34-affe-e66f3391d417","type":"HBar"},"selection_glyph":null,"view":{"id":"11538612-5cc8-4fe4-99c8-c3576f984342","type":"CDSView"}},"id":"46d6ae51-a751-4cdb-9899-3ce81f8ff0f4","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"f519f1c3-828e-4489-89d6-234422fc5b63","subtype":"Figure","type":"Plot"},"ticker":{"id":"6712607d-be28-4efb-a592-78b31b870c9a","type":"CategoricalTicker"}},"id":"30852ea3-9205-4c77-91df-b6bc2854c561","type":"Grid"},{"attributes":{"source":{"id":"9bfc8f1a-ed1e-4d30-b687-cb1e8e2fe80c","type":"ColumnDataSource"}},"id":"11538612-5cc8-4fe4-99c8-c3576f984342","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"a0765aa9-c687-4d34-affe-e66f3391d417","type":"HBar"},{"attributes":{"below":[{"id":"f95880b6-f178-4365-bc40-919e5881612e","type":"LinearAxis"}],"left":[{"id":"e044c7fc-9f20-4272-93bd-2f307be4ddb0","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"f95880b6-f178-4365-bc40-919e5881612e","type":"LinearAxis"},{"id":"58a60499-65a2-42c3-90c8-1bb1b4478957","type":"Grid"},{"id":"e044c7fc-9f20-4272-93bd-2f307be4ddb0","type":"CategoricalAxis"},{"id":"30852ea3-9205-4c77-91df-b6bc2854c561","type":"Grid"},{"id":"bc83c1fb-350e-4142-a58a-f4f4f99306e2","type":"BoxAnnotation"},{"id":"46d6ae51-a751-4cdb-9899-3ce81f8ff0f4","type":"GlyphRenderer"}],"title":{"id":"691a2bb1-22c4-4349-b994-ccca23696b63","type":"Title"},"toolbar":{"id":"7d82d260-1257-4314-afe7-87e085e898ca","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d4b91736-e697-4f54-a405-853f6453485a","type":"Range1d"},"x_scale":{"id":"b6d5c56a-a363-4bba-b94b-c18b96b811ae","type":"LinearScale"},"y_range":{"id":"84e8b068-0987-47c8-bd03-ae7e874cca6f","type":"FactorRange"},"y_scale":{"id":"250bac53-54e9-4003-b49d-083f1583c2e2","type":"CategoricalScale"}},"id":"f519f1c3-828e-4489-89d6-234422fc5b63","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"250bac53-54e9-4003-b49d-083f1583c2e2","type":"CategoricalScale"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"929d90ff-263b-4d7d-99b9-6b14ebdf1e0a","type":"BasicTickFormatter"},"plot":{"id":"f519f1c3-828e-4489-89d6-234422fc5b63","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e638b7e-c688-4757-b236-4520f4db9a73","type":"BasicTicker"}},"id":"f95880b6-f178-4365-bc40-919e5881612e","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bc83c1fb-350e-4142-a58a-f4f4f99306e2","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"bc83c1fb-350e-4142-a58a-f4f4f99306e2","type":"BoxAnnotation"}},"id":"30ad2af3-536d-4b83-ade6-4515020f6fa1","type":"BoxZoomTool"},{"attributes":{},"id":"26c3e5b8-da6e-4e50-9b9f-6d2009cf07da","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"b8dfa34b-f11c-4b27-ba10-ad62ab0d2659","type":"HBar"},{"attributes":{"plot":{"id":"f519f1c3-828e-4489-89d6-234422fc5b63","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e638b7e-c688-4757-b236-4520f4db9a73","type":"BasicTicker"}},"id":"58a60499-65a2-42c3-90c8-1bb1b4478957","type":"Grid"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"691a2bb1-22c4-4349-b994-ccca23696b63","type":"Title"},{"attributes":{},"id":"f170535c-17d5-4d49-9c0d-2360ad45a769","type":"SaveTool"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"84e8b068-0987-47c8-bd03-ae7e874cca6f","type":"FactorRange"},{"attributes":{},"id":"b6d5c56a-a363-4bba-b94b-c18b96b811ae","type":"LinearScale"},{"attributes":{},"id":"929d90ff-263b-4d7d-99b9-6b14ebdf1e0a","type":"BasicTickFormatter"},{"attributes":{},"id":"f7e3caad-5f20-4f6d-8d83-63fe41ef902e","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"f7e3caad-5f20-4f6d-8d83-63fe41ef902e","type":"CategoricalTickFormatter"},"plot":{"id":"f519f1c3-828e-4489-89d6-234422fc5b63","subtype":"Figure","type":"Plot"},"ticker":{"id":"6712607d-be28-4efb-a592-78b31b870c9a","type":"CategoricalTicker"}},"id":"e044c7fc-9f20-4272-93bd-2f307be4ddb0","type":"CategoricalAxis"},{"attributes":{},"id":"1e638b7e-c688-4757-b236-4520f4db9a73","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"82cc563f-fdb5-499f-b37d-6d304bc0808c","type":"PanTool"},{"id":"5c7ceebc-7edd-47e8-8ab1-d1c84f81643f","type":"WheelZoomTool"},{"id":"30ad2af3-536d-4b83-ade6-4515020f6fa1","type":"BoxZoomTool"},{"id":"f170535c-17d5-4d49-9c0d-2360ad45a769","type":"SaveTool"},{"id":"26c3e5b8-da6e-4e50-9b9f-6d2009cf07da","type":"ResetTool"},{"id":"d6d5d5dd-3bbc-4d37-8865-8f2342dbb964","type":"HelpTool"}]},"id":"7d82d260-1257-4314-afe7-87e085e898ca","type":"Toolbar"},{"attributes":{},"id":"82cc563f-fdb5-499f-b37d-6d304bc0808c","type":"PanTool"},{"attributes":{},"id":"d6d5d5dd-3bbc-4d37-8865-8f2342dbb964","type":"HelpTool"},{"attributes":{},"id":"6712607d-be28-4efb-a592-78b31b870c9a","type":"CategoricalTicker"},{"attributes":{},"id":"5c7ceebc-7edd-47e8-8ab1-d1c84f81643f","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"d4b91736-e697-4f54-a405-853f6453485a","type":"Range1d"}],"root_ids":["f519f1c3-828e-4489-89d6-234422fc5b63"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"b0ee8371-2e87-4ee2-b2a0-c392d69a706d","elementid":"46858b2a-7557-45d1-bf89-986dd56fadf3","modelid":"f519f1c3-828e-4489-89d6-234422fc5b63"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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