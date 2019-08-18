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
      };var element = document.getElementById("11ef78f0-80b4-480b-8661-0582e78087fc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '11ef78f0-80b4-480b-8661-0582e78087fc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"752a4079-edba-4bd1-9e59-201f83e81d3d":{"roots":{"references":[{"attributes":{"formatter":{"id":"19603","type":"CategoricalTickFormatter"},"plot":{"id":"19560","subtype":"Figure","type":"Plot"},"ticker":{"id":"19576","type":"CategoricalTicker"}},"id":"19575","type":"CategoricalAxis"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"19601","type":"BasicTickFormatter"},"plot":{"id":"19560","subtype":"Figure","type":"Plot"},"ticker":{"id":"19571","type":"BasicTicker"}},"id":"19570","type":"LinearAxis"},{"attributes":{},"id":"19601","type":"BasicTickFormatter"},{"attributes":{},"id":"19579","type":"PanTool"},{"attributes":{},"id":"19576","type":"CategoricalTicker"},{"attributes":{},"id":"19571","type":"BasicTicker"},{"attributes":{},"id":"19568","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"19558","type":"ColumnDataSource"},"glyph":{"id":"19595","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19596","type":"HBar"},"selection_glyph":null,"view":{"id":"19598","type":"CDSView"}},"id":"19597","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"19587","type":"BoxAnnotation"}},"id":"19581","type":"BoxZoomTool"},{"attributes":{},"id":"19603","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19587","type":"BoxAnnotation"},{"attributes":{},"id":"19566","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"19595","type":"HBar"},{"attributes":{},"id":"19584","type":"HelpTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"19560","subtype":"Figure","type":"Plot"},"ticker":{"id":"19576","type":"CategoricalTicker"}},"id":"19578","type":"Grid"},{"attributes":{"callback":null,"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"selected":{"id":"19605","type":"Selection"},"selection_policy":{"id":"19606","type":"UnionRenderers"}},"id":"19558","type":"ColumnDataSource"},{"attributes":{},"id":"19580","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"19570","type":"LinearAxis"}],"left":[{"id":"19575","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"19570","type":"LinearAxis"},{"id":"19574","type":"Grid"},{"id":"19575","type":"CategoricalAxis"},{"id":"19578","type":"Grid"},{"id":"19587","type":"BoxAnnotation"},{"id":"19597","type":"GlyphRenderer"}],"title":{"id":"19559","type":"Title"},"toolbar":{"id":"19585","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19562","type":"Range1d"},"x_scale":{"id":"19566","type":"LinearScale"},"y_range":{"id":"19564","type":"FactorRange"},"y_scale":{"id":"19568","type":"CategoricalScale"}},"id":"19560","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19583","type":"ResetTool"},{"attributes":{},"id":"19605","type":"Selection"},{"attributes":{"source":{"id":"19558","type":"ColumnDataSource"}},"id":"19598","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19579","type":"PanTool"},{"id":"19580","type":"WheelZoomTool"},{"id":"19581","type":"BoxZoomTool"},{"id":"19582","type":"SaveTool"},{"id":"19583","type":"ResetTool"},{"id":"19584","type":"HelpTool"}]},"id":"19585","type":"Toolbar"},{"attributes":{"plot":{"id":"19560","subtype":"Figure","type":"Plot"},"ticker":{"id":"19571","type":"BasicTicker"}},"id":"19574","type":"Grid"},{"attributes":{},"id":"19606","type":"UnionRenderers"},{"attributes":{},"id":"19582","type":"SaveTool"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"19559","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"19596","type":"HBar"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"19562","type":"Range1d"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"19564","type":"FactorRange"}],"root_ids":["19560"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"752a4079-edba-4bd1-9e59-201f83e81d3d","roots":{"19560":"11ef78f0-80b4-480b-8661-0582e78087fc"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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