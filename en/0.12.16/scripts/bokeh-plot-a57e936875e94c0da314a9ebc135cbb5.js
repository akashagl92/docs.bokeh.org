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
      };var element = document.getElementById("da770020-9774-489b-a6ef-c23e56dedf98");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'da770020-9774-489b-a6ef-c23e56dedf98' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"89979bad-62a9-49f3-ae17-e3b5dcf77a72":{"roots":{"references":[{"attributes":{"callback":null,"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"selected":{"id":"1fab768c-5f73-43a8-96e4-a9e0b8c80c07","type":"Selection"},"selection_policy":{"id":"c9fe69bf-5cbb-47bf-a381-97eedb0edbc6","type":"UnionRenderers"}},"id":"364e5f7f-a23d-48f7-b027-bf9071ef6ead","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"cd148bad-f137-463c-aa19-64dbd6dfc34f","type":"HBar"},{"attributes":{},"id":"2f255cbc-528e-41f1-b1db-1fd24464051b","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4cdfd527-26ec-4142-b078-09b255a40c69","type":"BoxAnnotation"},{"attributes":{"source":{"id":"364e5f7f-a23d-48f7-b027-bf9071ef6ead","type":"ColumnDataSource"}},"id":"2174e432-60f8-4678-b86a-55b46f074c26","type":"CDSView"},{"attributes":{},"id":"c4c7a000-e57f-4b03-938c-c7ebdaa5ac57","type":"CategoricalTickFormatter"},{"attributes":{},"id":"7bf0d187-bbae-4927-97a2-191ed8034199","type":"SaveTool"},{"attributes":{"below":[{"id":"42789519-0993-4cdc-aacd-07f669ab4657","type":"LinearAxis"}],"left":[{"id":"ecb3f97e-266a-4b0e-b00a-4fe3b21f376c","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"42789519-0993-4cdc-aacd-07f669ab4657","type":"LinearAxis"},{"id":"4a0e4cf9-ac27-4b6f-b2f3-e6d566edfd14","type":"Grid"},{"id":"ecb3f97e-266a-4b0e-b00a-4fe3b21f376c","type":"CategoricalAxis"},{"id":"9af579f9-59a3-4b51-9818-8480c9b1d21c","type":"Grid"},{"id":"4cdfd527-26ec-4142-b078-09b255a40c69","type":"BoxAnnotation"},{"id":"5e4a0249-3365-4738-a131-768de756f477","type":"GlyphRenderer"}],"title":{"id":"5b8fc610-968a-4614-9d68-c16b245a5f4a","type":"Title"},"toolbar":{"id":"02bfcfa7-b88c-48b7-9628-2ff28aa0d85c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"671d4bac-6579-453f-bb10-4afe80aaafeb","type":"Range1d"},"x_scale":{"id":"a6c2400c-71a6-4855-8cb7-41654b377251","type":"LinearScale"},"y_range":{"id":"6bede077-637f-43a5-8b36-7d30e420738b","type":"FactorRange"},"y_scale":{"id":"3858d402-82d9-4bb3-bf9c-1e12a193bdb0","type":"CategoricalScale"}},"id":"fa0b663f-e204-438a-aebc-6b15838de287","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3858d402-82d9-4bb3-bf9c-1e12a193bdb0","type":"CategoricalScale"},{"attributes":{},"id":"282132e9-88fd-4018-95cb-04bbaed7f9e8","type":"HelpTool"},{"attributes":{},"id":"e9966748-b742-4bf7-b76a-c6be2b176d47","type":"ResetTool"},{"attributes":{},"id":"c9fe69bf-5cbb-47bf-a381-97eedb0edbc6","type":"UnionRenderers"},{"attributes":{},"id":"3617c683-61ae-46a3-8661-78f970e52a71","type":"BasicTickFormatter"},{"attributes":{},"id":"a6c2400c-71a6-4855-8cb7-41654b377251","type":"LinearScale"},{"attributes":{},"id":"32655aed-aaba-4522-b725-032abcab2e4b","type":"BasicTicker"},{"attributes":{},"id":"1fab768c-5f73-43a8-96e4-a9e0b8c80c07","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed8805e1-c674-4830-8778-ff0d94719218","type":"PanTool"},{"id":"2f255cbc-528e-41f1-b1db-1fd24464051b","type":"WheelZoomTool"},{"id":"aa5d4c9e-ee1b-4e56-b725-e12c89d1fc52","type":"BoxZoomTool"},{"id":"7bf0d187-bbae-4927-97a2-191ed8034199","type":"SaveTool"},{"id":"e9966748-b742-4bf7-b76a-c6be2b176d47","type":"ResetTool"},{"id":"282132e9-88fd-4018-95cb-04bbaed7f9e8","type":"HelpTool"}]},"id":"02bfcfa7-b88c-48b7-9628-2ff28aa0d85c","type":"Toolbar"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"3617c683-61ae-46a3-8661-78f970e52a71","type":"BasicTickFormatter"},"plot":{"id":"fa0b663f-e204-438a-aebc-6b15838de287","subtype":"Figure","type":"Plot"},"ticker":{"id":"32655aed-aaba-4522-b725-032abcab2e4b","type":"BasicTicker"}},"id":"42789519-0993-4cdc-aacd-07f669ab4657","type":"LinearAxis"},{"attributes":{"plot":{"id":"fa0b663f-e204-438a-aebc-6b15838de287","subtype":"Figure","type":"Plot"},"ticker":{"id":"32655aed-aaba-4522-b725-032abcab2e4b","type":"BasicTicker"}},"id":"4a0e4cf9-ac27-4b6f-b2f3-e6d566edfd14","type":"Grid"},{"attributes":{"overlay":{"id":"4cdfd527-26ec-4142-b078-09b255a40c69","type":"BoxAnnotation"}},"id":"aa5d4c9e-ee1b-4e56-b725-e12c89d1fc52","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"671d4bac-6579-453f-bb10-4afe80aaafeb","type":"Range1d"},{"attributes":{"data_source":{"id":"364e5f7f-a23d-48f7-b027-bf9071ef6ead","type":"ColumnDataSource"},"glyph":{"id":"199e02d0-9382-43dc-afed-ec836ca4cf7c","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd148bad-f137-463c-aa19-64dbd6dfc34f","type":"HBar"},"selection_glyph":null,"view":{"id":"2174e432-60f8-4678-b86a-55b46f074c26","type":"CDSView"}},"id":"5e4a0249-3365-4738-a131-768de756f477","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"5b8fc610-968a-4614-9d68-c16b245a5f4a","type":"Title"},{"attributes":{},"id":"f550c39b-adbc-41db-9fae-fc59556c5425","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"6bede077-637f-43a5-8b36-7d30e420738b","type":"FactorRange"},{"attributes":{"formatter":{"id":"c4c7a000-e57f-4b03-938c-c7ebdaa5ac57","type":"CategoricalTickFormatter"},"plot":{"id":"fa0b663f-e204-438a-aebc-6b15838de287","subtype":"Figure","type":"Plot"},"ticker":{"id":"f550c39b-adbc-41db-9fae-fc59556c5425","type":"CategoricalTicker"}},"id":"ecb3f97e-266a-4b0e-b00a-4fe3b21f376c","type":"CategoricalAxis"},{"attributes":{},"id":"ed8805e1-c674-4830-8778-ff0d94719218","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"199e02d0-9382-43dc-afed-ec836ca4cf7c","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"fa0b663f-e204-438a-aebc-6b15838de287","subtype":"Figure","type":"Plot"},"ticker":{"id":"f550c39b-adbc-41db-9fae-fc59556c5425","type":"CategoricalTicker"}},"id":"9af579f9-59a3-4b51-9818-8480c9b1d21c","type":"Grid"}],"root_ids":["fa0b663f-e204-438a-aebc-6b15838de287"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"89979bad-62a9-49f3-ae17-e3b5dcf77a72","elementid":"da770020-9774-489b-a6ef-c23e56dedf98","modelid":"fa0b663f-e204-438a-aebc-6b15838de287"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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