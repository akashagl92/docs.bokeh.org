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
      };var element = document.getElementById("bf70c3e1-2dd7-454b-9a80-0f520cbc6490");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf70c3e1-2dd7-454b-9a80-0f520cbc6490' but no matching script tag was found. ")
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
                    var docs_json = {"b10340ab-e3db-406f-848d-eefc42c832ea":{"roots":{"references":[{"attributes":{},"id":"b12d1122-ab30-4af6-a743-d5930b2419cb","type":"LinearScale"},{"attributes":{},"id":"e7138d7c-9d70-432d-8997-7bd2b02ca46b","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"a441b387-ac4e-4a1a-847f-f2a27b1db5bc","type":"ColumnDataSource"},"glyph":{"id":"cd6ce517-1a1c-4222-b80c-a286896e71ae","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"de94d186-43c3-4291-b153-04b5647e9a06","type":"HBar"},"selection_glyph":null,"view":{"id":"234e7d0a-92d1-4d3b-91b0-dcbbc55b767c","type":"CDSView"}},"id":"193922df-d715-4652-825e-471a12a6056e","type":"GlyphRenderer"},{"attributes":{},"id":"6732f5f1-3567-450c-82cd-2d686c0218e8","type":"BasicTickFormatter"},{"attributes":{},"id":"577c4b98-b2ab-4431-b805-4a8782baa8ae","type":"ResetTool"},{"attributes":{"below":[{"id":"6820fc5d-8cca-4cf8-a7b9-a75f4f84f45c","type":"LinearAxis"}],"left":[{"id":"9ce2ad17-dbd1-44a5-af81-489e03009a38","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"6820fc5d-8cca-4cf8-a7b9-a75f4f84f45c","type":"LinearAxis"},{"id":"dbf3e1ca-2f47-4412-aa8c-804a2c069666","type":"Grid"},{"id":"9ce2ad17-dbd1-44a5-af81-489e03009a38","type":"CategoricalAxis"},{"id":"f6ed5f63-9315-4d1d-aeb2-c9cf35d11fc4","type":"Grid"},{"id":"abce2ff3-e320-4758-adf6-d5ab6da9a402","type":"BoxAnnotation"},{"id":"193922df-d715-4652-825e-471a12a6056e","type":"GlyphRenderer"}],"title":{"id":"cbf78dfa-51f4-498c-850e-7c9495abbb78","type":"Title"},"toolbar":{"id":"addf54d0-989a-455c-a50d-177dfa374eb7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ae60c4ff-4284-48f7-a278-bee7a46ef6a9","type":"Range1d"},"x_scale":{"id":"b12d1122-ab30-4af6-a743-d5930b2419cb","type":"LinearScale"},"y_range":{"id":"def50214-f6b0-45e7-9c44-94a7500e1f10","type":"FactorRange"},"y_scale":{"id":"e7138d7c-9d70-432d-8997-7bd2b02ca46b","type":"CategoricalScale"}},"id":"7a96d8b8-eca5-40e0-b0e6-49c2ecdf9e04","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2c50507d-4072-44d0-9917-54b90464836a","type":"CategoricalTicker"},{"attributes":{},"id":"97c3fe38-9739-40ca-84b1-e9936cc79c0d","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"abce2ff3-e320-4758-adf6-d5ab6da9a402","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7a96d8b8-eca5-40e0-b0e6-49c2ecdf9e04","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d40b852-69dc-4edc-b4a1-cd53e5221e12","type":"BasicTicker"}},"id":"dbf3e1ca-2f47-4412-aa8c-804a2c069666","type":"Grid"},{"attributes":{},"id":"e66582bc-6e94-4b3d-b788-c88a41c60144","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"a441b387-ac4e-4a1a-847f-f2a27b1db5bc","type":"ColumnDataSource"}},"id":"234e7d0a-92d1-4d3b-91b0-dcbbc55b767c","type":"CDSView"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"def50214-f6b0-45e7-9c44-94a7500e1f10","type":"FactorRange"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"7a96d8b8-eca5-40e0-b0e6-49c2ecdf9e04","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c50507d-4072-44d0-9917-54b90464836a","type":"CategoricalTicker"}},"id":"f6ed5f63-9315-4d1d-aeb2-c9cf35d11fc4","type":"Grid"},{"attributes":{"formatter":{"id":"e66582bc-6e94-4b3d-b788-c88a41c60144","type":"CategoricalTickFormatter"},"plot":{"id":"7a96d8b8-eca5-40e0-b0e6-49c2ecdf9e04","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c50507d-4072-44d0-9917-54b90464836a","type":"CategoricalTicker"}},"id":"9ce2ad17-dbd1-44a5-af81-489e03009a38","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"a441b387-ac4e-4a1a-847f-f2a27b1db5bc","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed0554c2-0e0f-4039-bb62-bc42914f4c6c","type":"PanTool"},{"id":"003891fc-53f5-41ab-a9c0-24bcc3f5b7af","type":"WheelZoomTool"},{"id":"b941d466-8bc7-408b-9c3b-c828d25d5677","type":"BoxZoomTool"},{"id":"97c3fe38-9739-40ca-84b1-e9936cc79c0d","type":"SaveTool"},{"id":"577c4b98-b2ab-4431-b805-4a8782baa8ae","type":"ResetTool"},{"id":"ccd8a429-987e-40ca-b859-bc57368a5689","type":"HelpTool"}]},"id":"addf54d0-989a-455c-a50d-177dfa374eb7","type":"Toolbar"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"6732f5f1-3567-450c-82cd-2d686c0218e8","type":"BasicTickFormatter"},"plot":{"id":"7a96d8b8-eca5-40e0-b0e6-49c2ecdf9e04","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d40b852-69dc-4edc-b4a1-cd53e5221e12","type":"BasicTicker"}},"id":"6820fc5d-8cca-4cf8-a7b9-a75f4f84f45c","type":"LinearAxis"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"ae60c4ff-4284-48f7-a278-bee7a46ef6a9","type":"Range1d"},{"attributes":{},"id":"ccd8a429-987e-40ca-b859-bc57368a5689","type":"HelpTool"},{"attributes":{},"id":"003891fc-53f5-41ab-a9c0-24bcc3f5b7af","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"cd6ce517-1a1c-4222-b80c-a286896e71ae","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"de94d186-43c3-4291-b153-04b5647e9a06","type":"HBar"},{"attributes":{},"id":"ed0554c2-0e0f-4039-bb62-bc42914f4c6c","type":"PanTool"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"cbf78dfa-51f4-498c-850e-7c9495abbb78","type":"Title"},{"attributes":{},"id":"4d40b852-69dc-4edc-b4a1-cd53e5221e12","type":"BasicTicker"},{"attributes":{"overlay":{"id":"abce2ff3-e320-4758-adf6-d5ab6da9a402","type":"BoxAnnotation"}},"id":"b941d466-8bc7-408b-9c3b-c828d25d5677","type":"BoxZoomTool"}],"root_ids":["7a96d8b8-eca5-40e0-b0e6-49c2ecdf9e04"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"b10340ab-e3db-406f-848d-eefc42c832ea","elementid":"bf70c3e1-2dd7-454b-9a80-0f520cbc6490","modelid":"7a96d8b8-eca5-40e0-b0e6-49c2ecdf9e04"}];
                
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
