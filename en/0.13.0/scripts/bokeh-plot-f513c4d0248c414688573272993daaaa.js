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
      };var element = document.getElementById("2ada37d4-05af-4106-8a14-af4b9631d676");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2ada37d4-05af-4106-8a14-af4b9631d676' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7ac009b4-23f1-4f29-aa81-13b20a4856c3":{"roots":{"references":[{"attributes":{},"id":"cef9967b-def7-4e22-8581-8f6fa7a2f9a8","type":"HelpTool"},{"attributes":{},"id":"8da91c92-49d0-48a1-a02d-b916a2759507","type":"Selection"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"f6bb899b-9326-4ab6-b51e-2b8f8ed306c4","type":"Range1d"},{"attributes":{},"id":"f4f8ce15-c769-4c22-a314-036c565c43b5","type":"LinearScale"},{"attributes":{"below":[{"id":"7c1d64e3-7042-46c0-ae55-9882f794a7e6","type":"LinearAxis"}],"left":[{"id":"169df3fa-b526-46d3-b405-234eb8671e88","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"7c1d64e3-7042-46c0-ae55-9882f794a7e6","type":"LinearAxis"},{"id":"8465dbdc-4129-448f-b28f-55b8320d1935","type":"Grid"},{"id":"169df3fa-b526-46d3-b405-234eb8671e88","type":"CategoricalAxis"},{"id":"70da2e47-65e6-4d42-b3a7-cbaa14485dd9","type":"Grid"},{"id":"ca21c397-4683-4629-9305-6c87a914e1ae","type":"BoxAnnotation"},{"id":"d521d34b-bbd5-4bd4-994d-229b2955782c","type":"GlyphRenderer"}],"title":{"id":"4e446cae-8ea8-43d4-b996-cf5d2ffc2a85","type":"Title"},"toolbar":{"id":"a3144d4c-a836-401a-99ee-41dc1907d32e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f6bb899b-9326-4ab6-b51e-2b8f8ed306c4","type":"Range1d"},"x_scale":{"id":"f4f8ce15-c769-4c22-a314-036c565c43b5","type":"LinearScale"},"y_range":{"id":"97eccfe1-91b4-40fe-9d86-082abb014168","type":"FactorRange"},"y_scale":{"id":"03bb513b-e703-4b6b-93c0-b0573bb413a8","type":"CategoricalScale"}},"id":"03b84d5a-99af-4a09-b784-fa5391781acb","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"b8f3b9bb-fc23-4d2f-b437-2df604b81049","type":"ColumnDataSource"},"glyph":{"id":"c65c6875-bdcc-464c-b31f-9ac4272529be","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d4822450-730d-444c-960b-821644c35e9c","type":"HBar"},"selection_glyph":null,"view":{"id":"c3111df8-5145-4ab7-81d0-a6c84df01891","type":"CDSView"}},"id":"d521d34b-bbd5-4bd4-994d-229b2955782c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b8f3b9bb-fc23-4d2f-b437-2df604b81049","type":"ColumnDataSource"}},"id":"c3111df8-5145-4ab7-81d0-a6c84df01891","type":"CDSView"},{"attributes":{"plot":{"id":"03b84d5a-99af-4a09-b784-fa5391781acb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4b084d5-687a-4f7b-9c1a-2ec675503556","type":"BasicTicker"}},"id":"8465dbdc-4129-448f-b28f-55b8320d1935","type":"Grid"},{"attributes":{},"id":"d4b084d5-687a-4f7b-9c1a-2ec675503556","type":"BasicTicker"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"d3ad74e0-5551-49a9-b293-5dde40699131","type":"BasicTickFormatter"},"plot":{"id":"03b84d5a-99af-4a09-b784-fa5391781acb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4b084d5-687a-4f7b-9c1a-2ec675503556","type":"BasicTicker"}},"id":"7c1d64e3-7042-46c0-ae55-9882f794a7e6","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"d4822450-730d-444c-960b-821644c35e9c","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"03b84d5a-99af-4a09-b784-fa5391781acb","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b301543-e3ef-428a-952a-7cf7d1f4d993","type":"CategoricalTicker"}},"id":"70da2e47-65e6-4d42-b3a7-cbaa14485dd9","type":"Grid"},{"attributes":{"formatter":{"id":"a51c877c-5d9f-476d-9544-76ff41191c32","type":"CategoricalTickFormatter"},"plot":{"id":"03b84d5a-99af-4a09-b784-fa5391781acb","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b301543-e3ef-428a-952a-7cf7d1f4d993","type":"CategoricalTicker"}},"id":"169df3fa-b526-46d3-b405-234eb8671e88","type":"CategoricalAxis"},{"attributes":{},"id":"03bb513b-e703-4b6b-93c0-b0573bb413a8","type":"CategoricalScale"},{"attributes":{},"id":"6b301543-e3ef-428a-952a-7cf7d1f4d993","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"selected":{"id":"8da91c92-49d0-48a1-a02d-b916a2759507","type":"Selection"},"selection_policy":{"id":"876b0737-7f32-40ce-a84e-e942baa71f41","type":"UnionRenderers"}},"id":"b8f3b9bb-fc23-4d2f-b437-2df604b81049","type":"ColumnDataSource"},{"attributes":{},"id":"7b5ad269-812f-4c71-a2f7-ff0ad32a1953","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca21c397-4683-4629-9305-6c87a914e1ae","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"c65c6875-bdcc-464c-b31f-9ac4272529be","type":"HBar"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"97eccfe1-91b4-40fe-9d86-082abb014168","type":"FactorRange"},{"attributes":{},"id":"876b0737-7f32-40ce-a84e-e942baa71f41","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7b5ad269-812f-4c71-a2f7-ff0ad32a1953","type":"PanTool"},{"id":"4b892f1a-d21a-41bb-a4a6-e89d9fce3447","type":"WheelZoomTool"},{"id":"7ac01600-f758-4ab2-86cf-6a33c3a612ff","type":"BoxZoomTool"},{"id":"7f47313e-29c7-47fb-8ecf-f3256e8e8266","type":"SaveTool"},{"id":"209b336f-6f4d-4828-9b27-72b1efc1ed4e","type":"ResetTool"},{"id":"cef9967b-def7-4e22-8581-8f6fa7a2f9a8","type":"HelpTool"}]},"id":"a3144d4c-a836-401a-99ee-41dc1907d32e","type":"Toolbar"},{"attributes":{},"id":"4b892f1a-d21a-41bb-a4a6-e89d9fce3447","type":"WheelZoomTool"},{"attributes":{},"id":"7f47313e-29c7-47fb-8ecf-f3256e8e8266","type":"SaveTool"},{"attributes":{"overlay":{"id":"ca21c397-4683-4629-9305-6c87a914e1ae","type":"BoxAnnotation"}},"id":"7ac01600-f758-4ab2-86cf-6a33c3a612ff","type":"BoxZoomTool"},{"attributes":{},"id":"d3ad74e0-5551-49a9-b293-5dde40699131","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"4e446cae-8ea8-43d4-b996-cf5d2ffc2a85","type":"Title"},{"attributes":{},"id":"a51c877c-5d9f-476d-9544-76ff41191c32","type":"CategoricalTickFormatter"},{"attributes":{},"id":"209b336f-6f4d-4828-9b27-72b1efc1ed4e","type":"ResetTool"}],"root_ids":["03b84d5a-99af-4a09-b784-fa5391781acb"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7ac009b4-23f1-4f29-aa81-13b20a4856c3","roots":{"03b84d5a-99af-4a09-b784-fa5391781acb":"2ada37d4-05af-4106-8a14-af4b9631d676"}}];
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