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
      };var element = document.getElementById("a1b7ab83-6f5f-4f06-966a-013e628427ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a1b7ab83-6f5f-4f06-966a-013e628427ed' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"f11c46f3-9ebd-4519-807e-f6853a26a083":{"roots":{"references":[{"attributes":{},"id":"e468537f-2a16-4896-942e-b22149ecd97a","type":"WheelZoomTool"},{"attributes":{},"id":"51c22869-2d0e-415a-b1ed-45d7087504af","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1b48b6f5-ca91-444f-8841-f807f4791646","type":"LinearScale"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"7810ba1e-a219-499d-9e21-777405ce415c","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"4b3bf07a-2bee-4d2b-bb4a-1830f8f026c4","type":"HBar"},{"attributes":{},"id":"7571e8a1-0ef0-4e1a-8810-730a45a5a336","type":"ResetTool"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"3761a669-37e1-4159-b662-918be8f93495","type":"BasicTickFormatter"},"plot":{"id":"5317f5da-19d6-4a14-97e8-220d3da42a72","subtype":"Figure","type":"Plot"},"ticker":{"id":"7999e51f-18cc-4963-b359-e1be69a1718b","type":"BasicTicker"}},"id":"973ffc0d-5c8e-4d9d-8afd-7e4a43f4f8a4","type":"LinearAxis"},{"attributes":{},"id":"0e971717-62b7-4209-8e5b-63e7392b5b71","type":"SaveTool"},{"attributes":{},"id":"ccccac15-5221-47e5-bc5b-bacc50f408f3","type":"PanTool"},{"attributes":{},"id":"7999e51f-18cc-4963-b359-e1be69a1718b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"6a5f203d-af89-4e1d-8f77-4ba36588b7d1","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ac58e3c6-453a-4b38-8250-16af9170ff91","type":"BoxAnnotation"},{"attributes":{},"id":"3761a669-37e1-4159-b662-918be8f93495","type":"BasicTickFormatter"},{"attributes":{},"id":"7322aca3-e96e-481c-9af4-30f271d5692a","type":"CategoricalScale"},{"attributes":{},"id":"1daf341f-0bb0-4b55-a858-515aebb87741","type":"HelpTool"},{"attributes":{"below":[{"id":"973ffc0d-5c8e-4d9d-8afd-7e4a43f4f8a4","type":"LinearAxis"}],"left":[{"id":"7942f813-7bd4-4aa9-aec0-9e9c7d87bdfe","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"973ffc0d-5c8e-4d9d-8afd-7e4a43f4f8a4","type":"LinearAxis"},{"id":"9cf361d5-6ad5-4412-b2e9-dc2e8bd6a25d","type":"Grid"},{"id":"7942f813-7bd4-4aa9-aec0-9e9c7d87bdfe","type":"CategoricalAxis"},{"id":"186771d3-31b5-4e74-ab5b-87a839b4033e","type":"Grid"},{"id":"ac58e3c6-453a-4b38-8250-16af9170ff91","type":"BoxAnnotation"},{"id":"19c37abc-e4e7-4dae-b3c3-46332f1aab32","type":"GlyphRenderer"}],"title":{"id":"7810ba1e-a219-499d-9e21-777405ce415c","type":"Title"},"toolbar":{"id":"7de65d04-d8d4-4c77-9790-7dacb725516b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"702558ce-3798-4109-a5a5-981ca85e917a","type":"Range1d"},"x_scale":{"id":"1b48b6f5-ca91-444f-8841-f807f4791646","type":"LinearScale"},"y_range":{"id":"a4f78ea2-75a3-4af4-8bd1-bdfc869ea7a0","type":"FactorRange"},"y_scale":{"id":"7322aca3-e96e-481c-9af4-30f271d5692a","type":"CategoricalScale"}},"id":"5317f5da-19d6-4a14-97e8-220d3da42a72","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ccccac15-5221-47e5-bc5b-bacc50f408f3","type":"PanTool"},{"id":"e468537f-2a16-4896-942e-b22149ecd97a","type":"WheelZoomTool"},{"id":"b34e9983-a4db-462e-86a2-a0a0a91a12c3","type":"BoxZoomTool"},{"id":"0e971717-62b7-4209-8e5b-63e7392b5b71","type":"SaveTool"},{"id":"7571e8a1-0ef0-4e1a-8810-730a45a5a336","type":"ResetTool"},{"id":"1daf341f-0bb0-4b55-a858-515aebb87741","type":"HelpTool"}]},"id":"7de65d04-d8d4-4c77-9790-7dacb725516b","type":"Toolbar"},{"attributes":{"source":{"id":"98297f2b-1e8f-494c-bf62-da80e77c06b8","type":"ColumnDataSource"}},"id":"0c41fa0f-e565-49c7-af06-ddfd0751ab74","type":"CDSView"},{"attributes":{"plot":{"id":"5317f5da-19d6-4a14-97e8-220d3da42a72","subtype":"Figure","type":"Plot"},"ticker":{"id":"7999e51f-18cc-4963-b359-e1be69a1718b","type":"BasicTicker"}},"id":"9cf361d5-6ad5-4412-b2e9-dc2e8bd6a25d","type":"Grid"},{"attributes":{"overlay":{"id":"ac58e3c6-453a-4b38-8250-16af9170ff91","type":"BoxAnnotation"}},"id":"b34e9983-a4db-462e-86a2-a0a0a91a12c3","type":"BoxZoomTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"5317f5da-19d6-4a14-97e8-220d3da42a72","subtype":"Figure","type":"Plot"},"ticker":{"id":"35cbf028-213f-4b30-a6bd-519b40eca498","type":"CategoricalTicker"}},"id":"186771d3-31b5-4e74-ab5b-87a839b4033e","type":"Grid"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"98297f2b-1e8f-494c-bf62-da80e77c06b8","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"702558ce-3798-4109-a5a5-981ca85e917a","type":"Range1d"},{"attributes":{"data_source":{"id":"98297f2b-1e8f-494c-bf62-da80e77c06b8","type":"ColumnDataSource"},"glyph":{"id":"4b3bf07a-2bee-4d2b-bb4a-1830f8f026c4","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6a5f203d-af89-4e1d-8f77-4ba36588b7d1","type":"HBar"},"selection_glyph":null,"view":{"id":"0c41fa0f-e565-49c7-af06-ddfd0751ab74","type":"CDSView"}},"id":"19c37abc-e4e7-4dae-b3c3-46332f1aab32","type":"GlyphRenderer"},{"attributes":{},"id":"35cbf028-213f-4b30-a6bd-519b40eca498","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"51c22869-2d0e-415a-b1ed-45d7087504af","type":"CategoricalTickFormatter"},"plot":{"id":"5317f5da-19d6-4a14-97e8-220d3da42a72","subtype":"Figure","type":"Plot"},"ticker":{"id":"35cbf028-213f-4b30-a6bd-519b40eca498","type":"CategoricalTicker"}},"id":"7942f813-7bd4-4aa9-aec0-9e9c7d87bdfe","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"a4f78ea2-75a3-4af4-8bd1-bdfc869ea7a0","type":"FactorRange"}],"root_ids":["5317f5da-19d6-4a14-97e8-220d3da42a72"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"f11c46f3-9ebd-4519-807e-f6853a26a083","elementid":"a1b7ab83-6f5f-4f06-966a-013e628427ed","modelid":"5317f5da-19d6-4a14-97e8-220d3da42a72"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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