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
      };var element = document.getElementById("9f1977b5-31ea-4037-8288-41e338bfa16c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f1977b5-31ea-4037-8288-41e338bfa16c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"55982aef-59eb-4fa4-af1a-1f571c88d3d3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8025e5a6-1ece-4e76-b73d-91708c2ffdf1","type":"PanTool"},{"id":"8f169ed9-608d-46cd-a526-675d5458d0b7","type":"WheelZoomTool"},{"id":"c17a0275-c0c2-40b6-a682-bd48311386d1","type":"BoxZoomTool"},{"id":"666f22f1-75e9-444d-bcb1-6b0766bc5230","type":"SaveTool"},{"id":"704f1833-4d66-4cf4-abbc-f7b2ce9a5e5e","type":"ResetTool"},{"id":"ee6eef28-9b71-454c-8fbb-7d18644a2d92","type":"HelpTool"}]},"id":"4dc06766-3e19-44d4-b1db-6e0095ae30a2","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"9aca802a-4dba-4f80-ab59-697dd85c68b6","type":"HBar"},{"attributes":{"data_source":{"id":"17ca4887-e9c9-4562-8e47-b9f205bc89af","type":"ColumnDataSource"},"glyph":{"id":"9aca802a-4dba-4f80-ab59-697dd85c68b6","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f15a5d6e-3a17-4cb5-afcd-79b842bd31a4","type":"HBar"},"selection_glyph":null,"view":{"id":"1c24bd5c-9b21-4565-862e-f293392ac46e","type":"CDSView"}},"id":"ab237983-6c68-4b1b-9075-b2f2b19db4fe","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17ca4887-e9c9-4562-8e47-b9f205bc89af","type":"ColumnDataSource"}},"id":"1c24bd5c-9b21-4565-862e-f293392ac46e","type":"CDSView"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"dd9f8b88-b44a-4998-9210-3076444acf75","type":"FactorRange"},{"attributes":{},"id":"666f22f1-75e9-444d-bcb1-6b0766bc5230","type":"SaveTool"},{"attributes":{},"id":"0a93ec11-9071-438d-ba26-9e402b06cabb","type":"LinearScale"},{"attributes":{"overlay":{"id":"06da710d-7d42-48a5-8080-5b988357dd38","type":"BoxAnnotation"}},"id":"c17a0275-c0c2-40b6-a682-bd48311386d1","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"06da710d-7d42-48a5-8080-5b988357dd38","type":"BoxAnnotation"},{"attributes":{},"id":"ee6eef28-9b71-454c-8fbb-7d18644a2d92","type":"HelpTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"f31491ae-8839-474b-b1e1-f3c2661ecaaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"4cc176b8-458e-43ea-af8f-ff5f82bbed2f","type":"CategoricalTicker"}},"id":"15825b95-06d5-42d3-b3a2-5f3d8ef89632","type":"Grid"},{"attributes":{"plot":{"id":"f31491ae-8839-474b-b1e1-f3c2661ecaaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"3bb9982b-a8e5-4ff5-9c58-33e5f3cd877d","type":"BasicTicker"}},"id":"88f64666-7b4e-4f50-8cfd-2e16c115c88e","type":"Grid"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"5123f52a-4102-42e5-8fb8-688462673022","type":"Title"},{"attributes":{"formatter":{"id":"3204318f-b973-40c6-9aac-905cd591be69","type":"CategoricalTickFormatter"},"plot":{"id":"f31491ae-8839-474b-b1e1-f3c2661ecaaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"4cc176b8-458e-43ea-af8f-ff5f82bbed2f","type":"CategoricalTicker"}},"id":"6e29fda5-8e57-405e-a189-bade695a1442","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"050e7a1b-8e4e-4f57-9976-1b97ef6fcdd6","type":"Range1d"},{"attributes":{},"id":"704f1833-4d66-4cf4-abbc-f7b2ce9a5e5e","type":"ResetTool"},{"attributes":{},"id":"8025e5a6-1ece-4e76-b73d-91708c2ffdf1","type":"PanTool"},{"attributes":{},"id":"8f169ed9-608d-46cd-a526-675d5458d0b7","type":"WheelZoomTool"},{"attributes":{},"id":"e8a6d39f-0585-4d39-80cf-37b776fdae61","type":"BasicTickFormatter"},{"attributes":{},"id":"3204318f-b973-40c6-9aac-905cd591be69","type":"CategoricalTickFormatter"},{"attributes":{},"id":"3bb9982b-a8e5-4ff5-9c58-33e5f3cd877d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["Time_count","Time_mean","Time_std","Time_min","Time_25%","Time_50%","Time_75%","Time_max","Year"],"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]}},"id":"17ca4887-e9c9-4562-8e47-b9f205bc89af","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"51c26305-e08e-46d2-b9f7-b43fdc506e32","type":"LinearAxis"}],"left":[{"id":"6e29fda5-8e57-405e-a189-bade695a1442","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"51c26305-e08e-46d2-b9f7-b43fdc506e32","type":"LinearAxis"},{"id":"88f64666-7b4e-4f50-8cfd-2e16c115c88e","type":"Grid"},{"id":"6e29fda5-8e57-405e-a189-bade695a1442","type":"CategoricalAxis"},{"id":"15825b95-06d5-42d3-b3a2-5f3d8ef89632","type":"Grid"},{"id":"06da710d-7d42-48a5-8080-5b988357dd38","type":"BoxAnnotation"},{"id":"ab237983-6c68-4b1b-9075-b2f2b19db4fe","type":"GlyphRenderer"}],"title":{"id":"5123f52a-4102-42e5-8fb8-688462673022","type":"Title"},"toolbar":{"id":"4dc06766-3e19-44d4-b1db-6e0095ae30a2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"050e7a1b-8e4e-4f57-9976-1b97ef6fcdd6","type":"Range1d"},"x_scale":{"id":"0a93ec11-9071-438d-ba26-9e402b06cabb","type":"LinearScale"},"y_range":{"id":"dd9f8b88-b44a-4998-9210-3076444acf75","type":"FactorRange"},"y_scale":{"id":"8719fd3a-758e-4dd5-b656-7d397c83148e","type":"CategoricalScale"}},"id":"f31491ae-8839-474b-b1e1-f3c2661ecaaf","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4cc176b8-458e-43ea-af8f-ff5f82bbed2f","type":"CategoricalTicker"},{"attributes":{},"id":"8719fd3a-758e-4dd5-b656-7d397c83148e","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"f15a5d6e-3a17-4cb5-afcd-79b842bd31a4","type":"HBar"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"e8a6d39f-0585-4d39-80cf-37b776fdae61","type":"BasicTickFormatter"},"plot":{"id":"f31491ae-8839-474b-b1e1-f3c2661ecaaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"3bb9982b-a8e5-4ff5-9c58-33e5f3cd877d","type":"BasicTicker"}},"id":"51c26305-e08e-46d2-b9f7-b43fdc506e32","type":"LinearAxis"}],"root_ids":["f31491ae-8839-474b-b1e1-f3c2661ecaaf"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"55982aef-59eb-4fa4-af1a-1f571c88d3d3","elementid":"9f1977b5-31ea-4037-8288-41e338bfa16c","modelid":"f31491ae-8839-474b-b1e1-f3c2661ecaaf"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
