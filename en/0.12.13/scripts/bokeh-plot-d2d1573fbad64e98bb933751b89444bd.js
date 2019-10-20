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
      };var element = document.getElementById("93746a50-7404-41f1-b49d-c51536c73402");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93746a50-7404-41f1-b49d-c51536c73402' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"9ad54f87-1a00-4a86-8a9a-7442018eb7e3":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"613fda9d-ef07-472b-b4b5-8336c5c4aa13","type":"HBar"},{"attributes":{"overlay":{"id":"585eb9bc-ec64-41f9-91dd-23da1997fe74","type":"BoxAnnotation"}},"id":"714be867-7157-4fda-93ca-0adff0086446","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"585eb9bc-ec64-41f9-91dd-23da1997fe74","type":"BoxAnnotation"},{"attributes":{},"id":"86a83f2a-1c75-470a-911d-22206cfabc46","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"b147fbcd-a456-42c9-afc3-eead466bb781","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"f135a014-0019-4726-8bf9-08c56f9fc088","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"581b3ffc-7b96-4b03-a949-b34de06fffbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"59f9d1f2-d22a-4168-b0d2-080599c97f39","type":"CategoricalTicker"}},"id":"f17d2415-2312-443f-99e1-7634a3a64b80","type":"Grid"},{"attributes":{},"id":"a2f98ec7-710b-4a91-a2a4-2e98d4dad930","type":"HelpTool"},{"attributes":{"source":{"id":"319b5fa5-1e1b-476d-b650-79fbc7159c29","type":"ColumnDataSource"}},"id":"cd976c73-5676-4235-8c45-dac59ce0b803","type":"CDSView"},{"attributes":{},"id":"cff9493e-37d6-416d-93ed-08a54cbe4730","type":"ResetTool"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"eaaa561b-6207-463d-9d25-d501d7dae311","type":"FactorRange"},{"attributes":{},"id":"59f9d1f2-d22a-4168-b0d2-080599c97f39","type":"CategoricalTicker"},{"attributes":{},"id":"4f8f7a83-19a9-48f1-aba6-80a4fb9d8061","type":"LinearScale"},{"attributes":{},"id":"1c283d5f-36bd-4c16-8d33-ad46681e2620","type":"PanTool"},{"attributes":{"plot":{"id":"581b3ffc-7b96-4b03-a949-b34de06fffbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8621980-82f9-4114-8e2a-bd20f8d23dfa","type":"BasicTicker"}},"id":"a250a6bf-a889-4183-a163-edd530dcb1f3","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1c283d5f-36bd-4c16-8d33-ad46681e2620","type":"PanTool"},{"id":"a39fa2a8-fc8d-4136-b8f5-edad999840f6","type":"WheelZoomTool"},{"id":"714be867-7157-4fda-93ca-0adff0086446","type":"BoxZoomTool"},{"id":"867e2010-a3cb-4fa7-8acf-641787ce2c62","type":"SaveTool"},{"id":"cff9493e-37d6-416d-93ed-08a54cbe4730","type":"ResetTool"},{"id":"a2f98ec7-710b-4a91-a2a4-2e98d4dad930","type":"HelpTool"}]},"id":"5260a389-41cf-467f-9e80-7a60b0cb66f0","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"319b5fa5-1e1b-476d-b650-79fbc7159c29","type":"ColumnDataSource"},{"attributes":{},"id":"a39fa2a8-fc8d-4136-b8f5-edad999840f6","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"7f495eb2-6fab-4386-8a35-11c8544ae353","type":"LinearAxis"}],"left":[{"id":"334bf47f-35f2-470a-a970-34b5878e3314","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"7f495eb2-6fab-4386-8a35-11c8544ae353","type":"LinearAxis"},{"id":"a250a6bf-a889-4183-a163-edd530dcb1f3","type":"Grid"},{"id":"334bf47f-35f2-470a-a970-34b5878e3314","type":"CategoricalAxis"},{"id":"f17d2415-2312-443f-99e1-7634a3a64b80","type":"Grid"},{"id":"585eb9bc-ec64-41f9-91dd-23da1997fe74","type":"BoxAnnotation"},{"id":"333c409a-da12-4558-8983-83a4be62e034","type":"GlyphRenderer"}],"title":{"id":"b147fbcd-a456-42c9-afc3-eead466bb781","type":"Title"},"toolbar":{"id":"5260a389-41cf-467f-9e80-7a60b0cb66f0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4ed2df63-a5d4-4d23-9698-a8ceca53aac4","type":"Range1d"},"x_scale":{"id":"4f8f7a83-19a9-48f1-aba6-80a4fb9d8061","type":"LinearScale"},"y_range":{"id":"eaaa561b-6207-463d-9d25-d501d7dae311","type":"FactorRange"},"y_scale":{"id":"86a83f2a-1c75-470a-911d-22206cfabc46","type":"CategoricalScale"}},"id":"581b3ffc-7b96-4b03-a949-b34de06fffbb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"867e2010-a3cb-4fa7-8acf-641787ce2c62","type":"SaveTool"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"3d4b30ac-b8b9-40b1-98b1-70420aa9c769","type":"BasicTickFormatter"},"plot":{"id":"581b3ffc-7b96-4b03-a949-b34de06fffbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8621980-82f9-4114-8e2a-bd20f8d23dfa","type":"BasicTicker"}},"id":"7f495eb2-6fab-4386-8a35-11c8544ae353","type":"LinearAxis"},{"attributes":{},"id":"d8621980-82f9-4114-8e2a-bd20f8d23dfa","type":"BasicTicker"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"4ed2df63-a5d4-4d23-9698-a8ceca53aac4","type":"Range1d"},{"attributes":{"formatter":{"id":"79a66dac-bf19-483f-9981-729cebf97aaa","type":"CategoricalTickFormatter"},"plot":{"id":"581b3ffc-7b96-4b03-a949-b34de06fffbb","subtype":"Figure","type":"Plot"},"ticker":{"id":"59f9d1f2-d22a-4168-b0d2-080599c97f39","type":"CategoricalTicker"}},"id":"334bf47f-35f2-470a-a970-34b5878e3314","type":"CategoricalAxis"},{"attributes":{},"id":"3d4b30ac-b8b9-40b1-98b1-70420aa9c769","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"319b5fa5-1e1b-476d-b650-79fbc7159c29","type":"ColumnDataSource"},"glyph":{"id":"613fda9d-ef07-472b-b4b5-8336c5c4aa13","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f135a014-0019-4726-8bf9-08c56f9fc088","type":"HBar"},"selection_glyph":null,"view":{"id":"cd976c73-5676-4235-8c45-dac59ce0b803","type":"CDSView"}},"id":"333c409a-da12-4558-8983-83a4be62e034","type":"GlyphRenderer"},{"attributes":{},"id":"79a66dac-bf19-483f-9981-729cebf97aaa","type":"CategoricalTickFormatter"}],"root_ids":["581b3ffc-7b96-4b03-a949-b34de06fffbb"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"9ad54f87-1a00-4a86-8a9a-7442018eb7e3","elementid":"93746a50-7404-41f1-b49d-c51536c73402","modelid":"581b3ffc-7b96-4b03-a949-b34de06fffbb"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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