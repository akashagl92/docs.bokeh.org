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
      };var element = document.getElementById("82e7612d-daf8-4dd5-a866-bb970b145fc9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '82e7612d-daf8-4dd5-a866-bb970b145fc9' but no matching script tag was found. ")
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
                    var docs_json = {"a516c0b7-8c1e-4a7b-9008-aa42c5837751":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"d3fd0e8f-e699-459b-a62d-0820f1754529","type":"VBar"},{"attributes":{},"id":"59a4d658-5bee-45a9-a518-bf818b57527b","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"49e2e34e-dfa1-42b6-88b4-e1622952f048","subtype":"Figure","type":"Plot"},"ticker":{"id":"d98d3c8c-0347-49cb-8d53-7841698b2809","type":"CategoricalTicker"}},"id":"faea3450-09bb-4315-b4ad-814a30c92ff1","type":"Grid"},{"attributes":{},"id":"13682384-d39d-4ec1-9f2f-accc1c52a740","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"ad08523e-ecca-4901-8e06-26687d705999","type":"VBar"},{"attributes":{"formatter":{"id":"13682384-d39d-4ec1-9f2f-accc1c52a740","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"49e2e34e-dfa1-42b6-88b4-e1622952f048","subtype":"Figure","type":"Plot"},"ticker":{"id":"d98d3c8c-0347-49cb-8d53-7841698b2809","type":"CategoricalTicker"}},"id":"8c9d6ad9-4c32-4161-ab7c-84ab20a5c67a","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"53bfcca7-4ae0-4b12-893d-99fc8ddbf015","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"8c9d6ad9-4c32-4161-ab7c-84ab20a5c67a","type":"CategoricalAxis"}],"left":[{"id":"00bd384b-b535-4dc5-8d77-a89c6f04af11","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"8c9d6ad9-4c32-4161-ab7c-84ab20a5c67a","type":"CategoricalAxis"},{"id":"faea3450-09bb-4315-b4ad-814a30c92ff1","type":"Grid"},{"id":"00bd384b-b535-4dc5-8d77-a89c6f04af11","type":"LinearAxis"},{"id":"24dc2d07-47ce-4110-b7f2-29a73a40a492","type":"Grid"},{"id":"daf15179-a2aa-4354-9c52-0c303aa4d468","type":"GlyphRenderer"}],"title":{"id":"918770fe-6659-4570-9fc3-009ba779abe5","type":"Title"},"toolbar":{"id":"b92e894f-9d14-42a2-945b-29f8da917603","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"079eceff-0ef7-495e-8035-cd2aec776e79","type":"FactorRange"},"x_scale":{"id":"59a4d658-5bee-45a9-a518-bf818b57527b","type":"CategoricalScale"},"y_range":{"id":"547bc48a-bb1f-42a6-b9cc-3f038b875acc","type":"DataRange1d"},"y_scale":{"id":"c076ee96-85c3-42ec-a624-37430b0e0d9c","type":"LinearScale"}},"id":"49e2e34e-dfa1-42b6-88b4-e1622952f048","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b92e894f-9d14-42a2-945b-29f8da917603","type":"Toolbar"},{"attributes":{"data_source":{"id":"53bfcca7-4ae0-4b12-893d-99fc8ddbf015","type":"ColumnDataSource"},"glyph":{"id":"ad08523e-ecca-4901-8e06-26687d705999","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d3fd0e8f-e699-459b-a62d-0820f1754529","type":"VBar"},"selection_glyph":null,"view":{"id":"626e3671-b01d-4124-9ca5-58420effd27e","type":"CDSView"}},"id":"daf15179-a2aa-4354-9c52-0c303aa4d468","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"547bc48a-bb1f-42a6-b9cc-3f038b875acc","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"49e2e34e-dfa1-42b6-88b4-e1622952f048","subtype":"Figure","type":"Plot"},"ticker":{"id":"d50c745e-b870-4a2b-a153-a568d70df2e0","type":"BasicTicker"}},"id":"24dc2d07-47ce-4110-b7f2-29a73a40a492","type":"Grid"},{"attributes":{},"id":"d98d3c8c-0347-49cb-8d53-7841698b2809","type":"CategoricalTicker"},{"attributes":{"source":{"id":"53bfcca7-4ae0-4b12-893d-99fc8ddbf015","type":"ColumnDataSource"}},"id":"626e3671-b01d-4124-9ca5-58420effd27e","type":"CDSView"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"079eceff-0ef7-495e-8035-cd2aec776e79","type":"FactorRange"},{"attributes":{},"id":"d50c745e-b870-4a2b-a153-a568d70df2e0","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"918770fe-6659-4570-9fc3-009ba779abe5","type":"Title"},{"attributes":{},"id":"c076ee96-85c3-42ec-a624-37430b0e0d9c","type":"LinearScale"},{"attributes":{},"id":"9c1a8da0-55d0-403f-9351-2fe541048c4b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9c1a8da0-55d0-403f-9351-2fe541048c4b","type":"BasicTickFormatter"},"plot":{"id":"49e2e34e-dfa1-42b6-88b4-e1622952f048","subtype":"Figure","type":"Plot"},"ticker":{"id":"d50c745e-b870-4a2b-a153-a568d70df2e0","type":"BasicTicker"}},"id":"00bd384b-b535-4dc5-8d77-a89c6f04af11","type":"LinearAxis"}],"root_ids":["49e2e34e-dfa1-42b6-88b4-e1622952f048"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"a516c0b7-8c1e-4a7b-9008-aa42c5837751","elementid":"82e7612d-daf8-4dd5-a866-bb970b145fc9","modelid":"49e2e34e-dfa1-42b6-88b4-e1622952f048"}];
                
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
