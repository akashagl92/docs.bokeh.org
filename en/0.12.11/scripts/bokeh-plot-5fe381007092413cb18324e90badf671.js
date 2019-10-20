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
      };var element = document.getElementById("2662cb37-e994-404e-bce6-22cf9bf7398a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2662cb37-e994-404e-bce6-22cf9bf7398a' but no matching script tag was found. ")
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
                    var docs_json = '{"40e377ad-540b-4384-bf41-0a75e249e2a1":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ce421b13-7edf-496a-bfbc-60a9995dccee","subtype":"Figure","type":"Plot"},"ticker":{"id":"57796262-385a-41f0-8f57-4d47d0132718","type":"CategoricalTicker"}},"id":"b213ed07-a694-4599-928c-01d16bd4ecfe","type":"Grid"},{"attributes":{},"id":"eda35974-c2a4-4e13-a84d-1413ca736d31","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"cc98a290-1966-45e3-90d0-987d3f71d436","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"ce421b13-7edf-496a-bfbc-60a9995dccee","subtype":"Figure","type":"Plot"},"ticker":{"id":"eda35974-c2a4-4e13-a84d-1413ca736d31","type":"BasicTicker"}},"id":"28cb3722-848b-48b1-8170-9510aeb3ed6f","type":"Grid"},{"attributes":{"source":{"id":"e998ddc7-2216-47a2-8226-1a1b113fc119","type":"ColumnDataSource"}},"id":"69560808-642f-4792-b659-d3aa7d6016a5","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"46b9b3b0-a5aa-4083-b004-e18b9c191109","type":"VBar"},{"attributes":{},"id":"2dd31bcc-1e78-4fd7-be4e-fe49ae69189b","type":"BasicTickFormatter"},{"attributes":{},"id":"57796262-385a-41f0-8f57-4d47d0132718","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"26477726-9210-4528-a8fc-7bd5d59beedd","type":"CategoricalAxis"}],"left":[{"id":"a7421e8c-8937-4543-81d3-06a75df3c619","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"26477726-9210-4528-a8fc-7bd5d59beedd","type":"CategoricalAxis"},{"id":"b213ed07-a694-4599-928c-01d16bd4ecfe","type":"Grid"},{"id":"a7421e8c-8937-4543-81d3-06a75df3c619","type":"LinearAxis"},{"id":"28cb3722-848b-48b1-8170-9510aeb3ed6f","type":"Grid"},{"id":"059e9027-77fd-4dd9-a728-9b642803ea57","type":"GlyphRenderer"}],"title":{"id":"d51db932-d646-4192-96c8-c32667920c51","type":"Title"},"toolbar":{"id":"4c73b119-b7ff-443c-87b5-a92c56fa91ff","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"38d27fee-fadc-4a0c-955b-b4d4cbbe14d1","type":"FactorRange"},"x_scale":{"id":"bce0a210-d6e5-4bca-98c1-7f400d3a7c3b","type":"CategoricalScale"},"y_range":{"id":"7a9d856b-86d2-4aeb-a489-8bc11f185d36","type":"DataRange1d"},"y_scale":{"id":"6878d86c-986b-4630-84db-9728caf8af2e","type":"LinearScale"}},"id":"ce421b13-7edf-496a-bfbc-60a9995dccee","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"38d27fee-fadc-4a0c-955b-b4d4cbbe14d1","type":"FactorRange"},{"attributes":{},"id":"6878d86c-986b-4630-84db-9728caf8af2e","type":"LinearScale"},{"attributes":{"formatter":{"id":"2a592488-201e-4954-97e6-c28496244a62","type":"CategoricalTickFormatter"},"plot":{"id":"ce421b13-7edf-496a-bfbc-60a9995dccee","subtype":"Figure","type":"Plot"},"ticker":{"id":"57796262-385a-41f0-8f57-4d47d0132718","type":"CategoricalTicker"}},"id":"26477726-9210-4528-a8fc-7bd5d59beedd","type":"CategoricalAxis"},{"attributes":{},"id":"bce0a210-d6e5-4bca-98c1-7f400d3a7c3b","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4c73b119-b7ff-443c-87b5-a92c56fa91ff","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"e998ddc7-2216-47a2-8226-1a1b113fc119","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"2dd31bcc-1e78-4fd7-be4e-fe49ae69189b","type":"BasicTickFormatter"},"plot":{"id":"ce421b13-7edf-496a-bfbc-60a9995dccee","subtype":"Figure","type":"Plot"},"ticker":{"id":"eda35974-c2a4-4e13-a84d-1413ca736d31","type":"BasicTicker"}},"id":"a7421e8c-8937-4543-81d3-06a75df3c619","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"d51db932-d646-4192-96c8-c32667920c51","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"7a9d856b-86d2-4aeb-a489-8bc11f185d36","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e998ddc7-2216-47a2-8226-1a1b113fc119","type":"ColumnDataSource"},"glyph":{"id":"cc98a290-1966-45e3-90d0-987d3f71d436","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46b9b3b0-a5aa-4083-b004-e18b9c191109","type":"VBar"},"selection_glyph":null,"view":{"id":"69560808-642f-4792-b659-d3aa7d6016a5","type":"CDSView"}},"id":"059e9027-77fd-4dd9-a728-9b642803ea57","type":"GlyphRenderer"},{"attributes":{},"id":"2a592488-201e-4954-97e6-c28496244a62","type":"CategoricalTickFormatter"}],"root_ids":["ce421b13-7edf-496a-bfbc-60a9995dccee"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"40e377ad-540b-4384-bf41-0a75e249e2a1","elementid":"2662cb37-e994-404e-bce6-22cf9bf7398a","modelid":"ce421b13-7edf-496a-bfbc-60a9995dccee"}];
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