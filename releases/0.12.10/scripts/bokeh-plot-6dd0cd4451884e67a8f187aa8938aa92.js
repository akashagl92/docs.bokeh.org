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
      };var element = document.getElementById("14db3800-8a17-4398-b22a-16b83a09c18b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '14db3800-8a17-4398-b22a-16b83a09c18b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"c8243f6c-e91f-4929-afbf-0cca0f351870":{"roots":{"references":[{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"e14b249d-a89f-4cf1-adfd-9822f8850d35","type":"FactorRange"},{"attributes":{},"id":"0e3efd18-dd9c-4129-a445-72f8cf868d50","type":"LinearScale"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"6ae4deea-6e27-4629-8c64-c66d29e6737e","type":"CategoricalColorMapper"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"4be3cdcb-9630-4ebd-b356-1b968e8f88da","subtype":"Figure","type":"Plot"},"ticker":{"id":"0909dc35-615b-427c-8d3c-baaea2d521a9","type":"CategoricalTicker"}},"id":"8f99b38a-7baa-43e9-aee4-a62127e8c169","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"12415554-89f6-45e1-953a-d6626a04ca08","type":"VBar"},{"attributes":{"below":[{"id":"6eed50a9-ef46-4a43-b065-dd9b5c2cbbd5","type":"CategoricalAxis"}],"left":[{"id":"a4506db9-9060-4ecd-8b57-e835476910d6","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"6eed50a9-ef46-4a43-b065-dd9b5c2cbbd5","type":"CategoricalAxis"},{"id":"8f99b38a-7baa-43e9-aee4-a62127e8c169","type":"Grid"},{"id":"a4506db9-9060-4ecd-8b57-e835476910d6","type":"LinearAxis"},{"id":"038f800d-1aac-4bcb-8725-1848853f6330","type":"Grid"},{"id":"b4131a37-4ed3-4930-bc46-c7d03941c8f4","type":"GlyphRenderer"}],"title":{"id":"d002f87f-ee0e-48dc-b524-6c7a9a2b0203","type":"Title"},"toolbar":{"id":"370f19da-3c33-4db3-b7cf-4de56b8d4c5d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e14b249d-a89f-4cf1-adfd-9822f8850d35","type":"FactorRange"},"x_scale":{"id":"21de1db3-e6ae-4f52-89ab-b7cb3bde4dca","type":"CategoricalScale"},"y_range":{"id":"7b42db85-5991-4e4f-b103-b2a1b39290da","type":"DataRange1d"},"y_scale":{"id":"0e3efd18-dd9c-4129-a445-72f8cf868d50","type":"LinearScale"}},"id":"4be3cdcb-9630-4ebd-b356-1b968e8f88da","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"2fc27dda-abbb-47bc-9783-338ae4344c2d","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"402a841a-f6f6-49e4-94d0-ceb84900e9a8","type":"BasicTickFormatter"},"plot":{"id":"4be3cdcb-9630-4ebd-b356-1b968e8f88da","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e56133e-bf44-43fc-84e5-171a3946ddba","type":"BasicTicker"}},"id":"a4506db9-9060-4ecd-8b57-e835476910d6","type":"LinearAxis"},{"attributes":{},"id":"21de1db3-e6ae-4f52-89ab-b7cb3bde4dca","type":"CategoricalScale"},{"attributes":{},"id":"0909dc35-615b-427c-8d3c-baaea2d521a9","type":"CategoricalTicker"},{"attributes":{},"id":"8e56133e-bf44-43fc-84e5-171a3946ddba","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4be3cdcb-9630-4ebd-b356-1b968e8f88da","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e56133e-bf44-43fc-84e5-171a3946ddba","type":"BasicTicker"}},"id":"038f800d-1aac-4bcb-8725-1848853f6330","type":"Grid"},{"attributes":{"callback":null,"start":0},"id":"7b42db85-5991-4e4f-b103-b2a1b39290da","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"370f19da-3c33-4db3-b7cf-4de56b8d4c5d","type":"Toolbar"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"6ae4deea-6e27-4629-8c64-c66d29e6737e","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"0534f82e-06b2-478b-9071-fdd35149f724","type":"VBar"},{"attributes":{"data_source":{"id":"2fc27dda-abbb-47bc-9783-338ae4344c2d","type":"ColumnDataSource"},"glyph":{"id":"0534f82e-06b2-478b-9071-fdd35149f724","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12415554-89f6-45e1-953a-d6626a04ca08","type":"VBar"},"selection_glyph":null,"view":{"id":"fcf07120-0b47-4134-8c28-6bfad0d2334a","type":"CDSView"}},"id":"b4131a37-4ed3-4930-bc46-c7d03941c8f4","type":"GlyphRenderer"},{"attributes":{},"id":"402a841a-f6f6-49e4-94d0-ceb84900e9a8","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2fc27dda-abbb-47bc-9783-338ae4344c2d","type":"ColumnDataSource"}},"id":"fcf07120-0b47-4134-8c28-6bfad0d2334a","type":"CDSView"},{"attributes":{"formatter":{"id":"e168640a-7b68-4b14-9e7e-c00f8bc88c41","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"4be3cdcb-9630-4ebd-b356-1b968e8f88da","subtype":"Figure","type":"Plot"},"ticker":{"id":"0909dc35-615b-427c-8d3c-baaea2d521a9","type":"CategoricalTicker"}},"id":"6eed50a9-ef46-4a43-b065-dd9b5c2cbbd5","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"d002f87f-ee0e-48dc-b524-6c7a9a2b0203","type":"Title"},{"attributes":{},"id":"e168640a-7b68-4b14-9e7e-c00f8bc88c41","type":"CategoricalTickFormatter"}],"root_ids":["4be3cdcb-9630-4ebd-b356-1b968e8f88da"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"c8243f6c-e91f-4929-afbf-0cca0f351870","elementid":"14db3800-8a17-4398-b22a-16b83a09c18b","modelid":"4be3cdcb-9630-4ebd-b356-1b968e8f88da"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
