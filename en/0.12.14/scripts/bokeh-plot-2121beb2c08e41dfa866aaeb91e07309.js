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
      };var element = document.getElementById("4469dc7b-3f12-4b36-afa7-7da47601dab7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4469dc7b-3f12-4b36-afa7-7da47601dab7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                    
                  var docs_json = '{"c9ab6bc6-6210-4b78-b1fc-1519946274ec":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"8aedbc10-c6d6-4b3a-a37d-2fd61b53cab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1ea8ae3-b142-4f4b-ad29-8876903f206d","type":"BasicTicker"}},"id":"5fc60ed6-8046-43a8-95db-8cdba0122e3d","type":"Grid"},{"attributes":{},"id":"b1ea8ae3-b142-4f4b-ad29-8876903f206d","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8aedbc10-c6d6-4b3a-a37d-2fd61b53cab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"eba4e558-c0f6-4f2e-b785-eb2833c2d89c","type":"CategoricalTicker"}},"id":"5d9a7acb-fb4c-4ee7-a2b5-e0854413f1f7","type":"Grid"},{"attributes":{},"id":"f3302194-619e-4366-af70-70e94d280183","type":"LinearScale"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"32706273-8ed9-406f-8842-ba26739f92fe","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"be9356a8-81a5-4d00-801d-0d7eeebae120","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"61818220-0dbe-459b-b3d9-914a72203d51","type":"CategoricalAxis"}],"left":[{"id":"a779fea4-b9de-4572-b9d1-038c7889ee52","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"61818220-0dbe-459b-b3d9-914a72203d51","type":"CategoricalAxis"},{"id":"5d9a7acb-fb4c-4ee7-a2b5-e0854413f1f7","type":"Grid"},{"id":"a779fea4-b9de-4572-b9d1-038c7889ee52","type":"LinearAxis"},{"id":"5fc60ed6-8046-43a8-95db-8cdba0122e3d","type":"Grid"},{"id":"582c3481-b858-47ef-885f-63b0251b96f2","type":"GlyphRenderer"}],"title":{"id":"e064262d-0dda-46fa-87ee-9b3ee321777b","type":"Title"},"toolbar":{"id":"c2dfe2af-4300-4a71-b231-805bce5fe0c1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"39b60689-550e-498d-9614-85cabf75a3f9","type":"FactorRange"},"x_scale":{"id":"df3b4882-e1d0-473b-95f8-b0a20fefe3f8","type":"CategoricalScale"},"y_range":{"id":"640b4924-de0d-4d28-a6e7-963937de20a1","type":"DataRange1d"},"y_scale":{"id":"f3302194-619e-4366-af70-70e94d280183","type":"LinearScale"}},"id":"8aedbc10-c6d6-4b3a-a37d-2fd61b53cab6","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"e064262d-0dda-46fa-87ee-9b3ee321777b","type":"Title"},{"attributes":{},"id":"384948f3-8435-4d4f-8d24-715370c0642c","type":"BasicTickFormatter"},{"attributes":{},"id":"55fab069-f406-4d82-9350-6bab26304647","type":"CategoricalTickFormatter"},{"attributes":{},"id":"df3b4882-e1d0-473b-95f8-b0a20fefe3f8","type":"CategoricalScale"},{"attributes":{"source":{"id":"be9356a8-81a5-4d00-801d-0d7eeebae120","type":"ColumnDataSource"}},"id":"a789732b-0986-4376-b0a3-ce63aca587dc","type":"CDSView"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"32706273-8ed9-406f-8842-ba26739f92fe","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"96cfefb4-9aec-42a2-97c4-ecde4b003d3c","type":"VBar"},{"attributes":{"formatter":{"id":"384948f3-8435-4d4f-8d24-715370c0642c","type":"BasicTickFormatter"},"plot":{"id":"8aedbc10-c6d6-4b3a-a37d-2fd61b53cab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1ea8ae3-b142-4f4b-ad29-8876903f206d","type":"BasicTicker"}},"id":"a779fea4-b9de-4572-b9d1-038c7889ee52","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"56ae9f16-5efc-463a-b458-d312236d959d","type":"VBar"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"39b60689-550e-498d-9614-85cabf75a3f9","type":"FactorRange"},{"attributes":{"data_source":{"id":"be9356a8-81a5-4d00-801d-0d7eeebae120","type":"ColumnDataSource"},"glyph":{"id":"96cfefb4-9aec-42a2-97c4-ecde4b003d3c","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56ae9f16-5efc-463a-b458-d312236d959d","type":"VBar"},"selection_glyph":null,"view":{"id":"a789732b-0986-4376-b0a3-ce63aca587dc","type":"CDSView"}},"id":"582c3481-b858-47ef-885f-63b0251b96f2","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"640b4924-de0d-4d28-a6e7-963937de20a1","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c2dfe2af-4300-4a71-b231-805bce5fe0c1","type":"Toolbar"},{"attributes":{},"id":"eba4e558-c0f6-4f2e-b785-eb2833c2d89c","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"55fab069-f406-4d82-9350-6bab26304647","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"8aedbc10-c6d6-4b3a-a37d-2fd61b53cab6","subtype":"Figure","type":"Plot"},"ticker":{"id":"eba4e558-c0f6-4f2e-b785-eb2833c2d89c","type":"CategoricalTicker"}},"id":"61818220-0dbe-459b-b3d9-914a72203d51","type":"CategoricalAxis"}],"root_ids":["8aedbc10-c6d6-4b3a-a37d-2fd61b53cab6"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"c9ab6bc6-6210-4b78-b1fc-1519946274ec","elementid":"4469dc7b-3f12-4b36-afa7-7da47601dab7","modelid":"8aedbc10-c6d6-4b3a-a37d-2fd61b53cab6"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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