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
      };var element = document.getElementById("4e6a8351-df9f-4d12-829c-3fcdab614da5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4e6a8351-df9f-4d12-829c-3fcdab614da5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"0c75eb16-235a-4d8b-bc3c-9458b4ad1634":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1e341464-c299-41f5-918e-0efda9de51f8","type":"BoxAnnotation"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"5e825ae2-49f0-43c6-b385-23d11a50c085","type":"FactorRange"},{"attributes":{},"id":"32369d91-fbb2-43ef-9507-916f135c444b","type":"LinearScale"},{"attributes":{},"id":"43ce9324-f93f-4625-83d6-6779988c4ac8","type":"SaveTool"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"099334c7-a138-42d1-915f-5e008783dc53","type":"Title"},{"attributes":{"formatter":{"id":"1ef0f255-7f6e-4e16-90e0-2b011e799ad9","type":"CategoricalTickFormatter"},"plot":{"id":"bcb0d8a1-573c-4c0a-9375-c75d71f0e484","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4879256-3a97-4de3-aec0-e4871e0cc546","type":"CategoricalTicker"}},"id":"d172490b-5294-4ac0-aceb-b123e1160e05","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"f84fb2ca-338a-4c20-b603-e059de046478","type":"ColumnDataSource"},"glyph":{"id":"87d4aa0b-3656-4c69-bdbd-21f9fd0b0347","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bc1a9999-6d6e-4b87-821a-b45f350ac0ee","type":"HBar"},"selection_glyph":null,"view":{"id":"ddeebe34-bedc-497a-ae56-3408c1f06044","type":"CDSView"}},"id":"ab07e095-a89f-4959-8a22-563012a82cc7","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"87d4aa0b-3656-4c69-bdbd-21f9fd0b0347","type":"HBar"},{"attributes":{},"id":"333c24ac-805b-4f37-9bb9-038e9a65986c","type":"BasicTicker"},{"attributes":{},"id":"08e80ebe-cd22-49d4-9d5a-aa5b45eb20be","type":"BasicTickFormatter"},{"attributes":{},"id":"f4879256-3a97-4de3-aec0-e4871e0cc546","type":"CategoricalTicker"},{"attributes":{},"id":"531db986-2d16-441d-97c5-7fb59a2ec141","type":"UnionRenderers"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"bcb0d8a1-573c-4c0a-9375-c75d71f0e484","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4879256-3a97-4de3-aec0-e4871e0cc546","type":"CategoricalTicker"}},"id":"678752ba-b5d5-43c2-8041-449cdb990425","type":"Grid"},{"attributes":{},"id":"80d3dc32-617f-442a-81d0-4c0b4a2da0d2","type":"Selection"},{"attributes":{},"id":"70033411-bab9-4504-b971-9daa2a27a016","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1e341464-c299-41f5-918e-0efda9de51f8","type":"BoxAnnotation"}},"id":"dc5142cf-4aa9-4803-a96f-37d07b7af478","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"7688b8c7-0795-4ba9-9827-385852ce5448","type":"Range1d"},{"attributes":{"source":{"id":"f84fb2ca-338a-4c20-b603-e059de046478","type":"ColumnDataSource"}},"id":"ddeebe34-bedc-497a-ae56-3408c1f06044","type":"CDSView"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"08e80ebe-cd22-49d4-9d5a-aa5b45eb20be","type":"BasicTickFormatter"},"plot":{"id":"bcb0d8a1-573c-4c0a-9375-c75d71f0e484","subtype":"Figure","type":"Plot"},"ticker":{"id":"333c24ac-805b-4f37-9bb9-038e9a65986c","type":"BasicTicker"}},"id":"8d7ded23-5f88-4b16-817c-7081ae1908f2","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"ee1d277c-bedf-4176-b735-1c4f957582e5","type":"PanTool"},{"id":"70033411-bab9-4504-b971-9daa2a27a016","type":"WheelZoomTool"},{"id":"dc5142cf-4aa9-4803-a96f-37d07b7af478","type":"BoxZoomTool"},{"id":"43ce9324-f93f-4625-83d6-6779988c4ac8","type":"SaveTool"},{"id":"0ddf42ba-662a-452a-8551-a05ead62f29a","type":"ResetTool"},{"id":"3407eefc-3c0e-4f87-9ac1-c74caf89e9ff","type":"HelpTool"}]},"id":"321f6188-e143-4a44-87de-fca61f53fd77","type":"Toolbar"},{"attributes":{},"id":"71e6182e-065c-4c31-bad3-b18f53b03ad1","type":"CategoricalScale"},{"attributes":{},"id":"ee1d277c-bedf-4176-b735-1c4f957582e5","type":"PanTool"},{"attributes":{},"id":"3407eefc-3c0e-4f87-9ac1-c74caf89e9ff","type":"HelpTool"},{"attributes":{},"id":"1ef0f255-7f6e-4e16-90e0-2b011e799ad9","type":"CategoricalTickFormatter"},{"attributes":{},"id":"0ddf42ba-662a-452a-8551-a05ead62f29a","type":"ResetTool"},{"attributes":{"callback":null,"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"selected":{"id":"80d3dc32-617f-442a-81d0-4c0b4a2da0d2","type":"Selection"},"selection_policy":{"id":"531db986-2d16-441d-97c5-7fb59a2ec141","type":"UnionRenderers"}},"id":"f84fb2ca-338a-4c20-b603-e059de046478","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bcb0d8a1-573c-4c0a-9375-c75d71f0e484","subtype":"Figure","type":"Plot"},"ticker":{"id":"333c24ac-805b-4f37-9bb9-038e9a65986c","type":"BasicTicker"}},"id":"27178af9-8b49-4820-945c-6be136c09c5d","type":"Grid"},{"attributes":{"below":[{"id":"8d7ded23-5f88-4b16-817c-7081ae1908f2","type":"LinearAxis"}],"left":[{"id":"d172490b-5294-4ac0-aceb-b123e1160e05","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"8d7ded23-5f88-4b16-817c-7081ae1908f2","type":"LinearAxis"},{"id":"27178af9-8b49-4820-945c-6be136c09c5d","type":"Grid"},{"id":"d172490b-5294-4ac0-aceb-b123e1160e05","type":"CategoricalAxis"},{"id":"678752ba-b5d5-43c2-8041-449cdb990425","type":"Grid"},{"id":"1e341464-c299-41f5-918e-0efda9de51f8","type":"BoxAnnotation"},{"id":"ab07e095-a89f-4959-8a22-563012a82cc7","type":"GlyphRenderer"}],"title":{"id":"099334c7-a138-42d1-915f-5e008783dc53","type":"Title"},"toolbar":{"id":"321f6188-e143-4a44-87de-fca61f53fd77","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7688b8c7-0795-4ba9-9827-385852ce5448","type":"Range1d"},"x_scale":{"id":"32369d91-fbb2-43ef-9507-916f135c444b","type":"LinearScale"},"y_range":{"id":"5e825ae2-49f0-43c6-b385-23d11a50c085","type":"FactorRange"},"y_scale":{"id":"71e6182e-065c-4c31-bad3-b18f53b03ad1","type":"CategoricalScale"}},"id":"bcb0d8a1-573c-4c0a-9375-c75d71f0e484","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"bc1a9999-6d6e-4b87-821a-b45f350ac0ee","type":"HBar"}],"root_ids":["bcb0d8a1-573c-4c0a-9375-c75d71f0e484"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0c75eb16-235a-4d8b-bc3c-9458b4ad1634","roots":{"bcb0d8a1-573c-4c0a-9375-c75d71f0e484":"4e6a8351-df9f-4d12-829c-3fcdab614da5"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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