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
      };var element = document.getElementById("85cd92ee-5086-4d5a-b3e3-5616b3a701e2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85cd92ee-5086-4d5a-b3e3-5616b3a701e2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"60cd7c56-71b6-4195-b03f-ea5e02986bd7":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c2b3b98a-443b-4ce2-9afd-e195627953f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"514c30ea-ccfb-421d-8f2c-1f2d4407387a","type":"CategoricalTicker"}},"id":"87ae3002-f4cd-461f-8ad5-aa283292b826","type":"Grid"},{"attributes":{},"id":"d21fd75b-cd79-4f57-9b57-ff6a811ead47","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fb61e466-c77f-4d4e-b930-f27b0fed06b0","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"304436c2-c43f-49e0-a0ef-addfcf48a18f","type":"PanTool"},{"id":"adde832e-e768-4694-a3ec-f4ee7c9b7b21","type":"WheelZoomTool"},{"id":"33feb36e-7138-4a16-ad67-d5b3e202f58c","type":"BoxZoomTool"},{"id":"52a3495f-90d6-4689-8bd3-25040fd8fc49","type":"SaveTool"},{"id":"03a21373-e92e-46f2-96de-a27b9644c3fe","type":"ResetTool"},{"id":"f9865c03-7181-435e-8564-ee921c50b618","type":"HelpTool"}]},"id":"a586dc12-17ef-4016-b58e-bb2ca71d6fea","type":"Toolbar"},{"attributes":{},"id":"ab3efa08-ef9d-4eed-8664-8e6d05343ba8","type":"LinearScale"},{"attributes":{"data_source":{"id":"0c3e5add-42a1-4d72-bf9e-8afb2fecaf8a","type":"ColumnDataSource"},"glyph":{"id":"993f7174-3bff-42e1-98a4-53e7b364339b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"994534af-abe2-4654-bf99-fbaff5d2eeef","type":"VBar"},"selection_glyph":null,"view":{"id":"4b53def7-8e95-456a-a81e-a33e009c41d1","type":"CDSView"}},"id":"4ce276fb-645d-4b6c-b85f-b1b7bef2e9b5","type":"GlyphRenderer"},{"attributes":{},"id":"e14e4bd8-f5a1-40b6-9264-608a1eb0435a","type":"CategoricalScale"},{"attributes":{},"id":"8da6227e-9e77-4f01-8feb-bd9d0d8515bd","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"82981edb-2d5d-4df7-bf6b-7646d8affd24","type":"CategoricalAxis"}],"left":[{"id":"b5750770-1266-4d92-afa4-4c86f02f05c9","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"82981edb-2d5d-4df7-bf6b-7646d8affd24","type":"CategoricalAxis"},{"id":"87ae3002-f4cd-461f-8ad5-aa283292b826","type":"Grid"},{"id":"b5750770-1266-4d92-afa4-4c86f02f05c9","type":"LinearAxis"},{"id":"1c2563f6-78d0-4341-aada-873cc8a44e42","type":"Grid"},{"id":"fb61e466-c77f-4d4e-b930-f27b0fed06b0","type":"BoxAnnotation"},{"id":"5ecdadb1-5f18-4e59-b50f-b0d7d373b41a","type":"Legend"},{"id":"4ce276fb-645d-4b6c-b85f-b1b7bef2e9b5","type":"GlyphRenderer"}],"title":{"id":"adb6dd88-3734-46ab-881e-c174e9b23fe6","type":"Title"},"toolbar":{"id":"a586dc12-17ef-4016-b58e-bb2ca71d6fea","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3bdb99a7-612a-46d2-a9e5-5a88809cae8f","type":"FactorRange"},"x_scale":{"id":"e14e4bd8-f5a1-40b6-9264-608a1eb0435a","type":"CategoricalScale"},"y_range":{"id":"aab53bac-2223-41f1-9210-5ea870f99305","type":"DataRange1d"},"y_scale":{"id":"ab3efa08-ef9d-4eed-8664-8e6d05343ba8","type":"LinearScale"}},"id":"c2b3b98a-443b-4ce2-9afd-e195627953f7","subtype":"Figure","type":"Plot"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"8178172b-1d3d-4017-a3f0-40ce5a8b3b75","type":"CategoricalColorMapper"},{"attributes":{"items":[{"id":"553b27d8-7763-4b3d-b67c-70bddc8f4360","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"c2b3b98a-443b-4ce2-9afd-e195627953f7","subtype":"Figure","type":"Plot"}},"id":"5ecdadb1-5f18-4e59-b50f-b0d7d373b41a","type":"Legend"},{"attributes":{},"id":"514c30ea-ccfb-421d-8f2c-1f2d4407387a","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"fb61e466-c77f-4d4e-b930-f27b0fed06b0","type":"BoxAnnotation"}},"id":"33feb36e-7138-4a16-ad67-d5b3e202f58c","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"0c3e5add-42a1-4d72-bf9e-8afb2fecaf8a","type":"ColumnDataSource"},{"attributes":{},"id":"f9865c03-7181-435e-8564-ee921c50b618","type":"HelpTool"},{"attributes":{},"id":"304436c2-c43f-49e0-a0ef-addfcf48a18f","type":"PanTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"3bdb99a7-612a-46d2-a9e5-5a88809cae8f","type":"FactorRange"},{"attributes":{},"id":"52a3495f-90d6-4689-8bd3-25040fd8fc49","type":"SaveTool"},{"attributes":{},"id":"be0436f5-7353-4cde-a924-6b7ffd952f35","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"994534af-abe2-4654-bf99-fbaff5d2eeef","type":"VBar"},{"attributes":{"callback":null,"end":9,"start":0},"id":"aab53bac-2223-41f1-9210-5ea870f99305","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"c2b3b98a-443b-4ce2-9afd-e195627953f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"be0436f5-7353-4cde-a924-6b7ffd952f35","type":"BasicTicker"}},"id":"1c2563f6-78d0-4341-aada-873cc8a44e42","type":"Grid"},{"attributes":{},"id":"adde832e-e768-4694-a3ec-f4ee7c9b7b21","type":"WheelZoomTool"},{"attributes":{},"id":"03a21373-e92e-46f2-96de-a27b9644c3fe","type":"ResetTool"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"8178172b-1d3d-4017-a3f0-40ce5a8b3b75","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"993f7174-3bff-42e1-98a4-53e7b364339b","type":"VBar"},{"attributes":{"formatter":{"id":"d21fd75b-cd79-4f57-9b57-ff6a811ead47","type":"BasicTickFormatter"},"plot":{"id":"c2b3b98a-443b-4ce2-9afd-e195627953f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"be0436f5-7353-4cde-a924-6b7ffd952f35","type":"BasicTicker"}},"id":"b5750770-1266-4d92-afa4-4c86f02f05c9","type":"LinearAxis"},{"attributes":{"source":{"id":"0c3e5add-42a1-4d72-bf9e-8afb2fecaf8a","type":"ColumnDataSource"}},"id":"4b53def7-8e95-456a-a81e-a33e009c41d1","type":"CDSView"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"4ce276fb-645d-4b6c-b85f-b1b7bef2e9b5","type":"GlyphRenderer"}]},"id":"553b27d8-7763-4b3d-b67c-70bddc8f4360","type":"LegendItem"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"adb6dd88-3734-46ab-881e-c174e9b23fe6","type":"Title"},{"attributes":{"formatter":{"id":"8da6227e-9e77-4f01-8feb-bd9d0d8515bd","type":"CategoricalTickFormatter"},"plot":{"id":"c2b3b98a-443b-4ce2-9afd-e195627953f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"514c30ea-ccfb-421d-8f2c-1f2d4407387a","type":"CategoricalTicker"}},"id":"82981edb-2d5d-4df7-bf6b-7646d8affd24","type":"CategoricalAxis"}],"root_ids":["c2b3b98a-443b-4ce2-9afd-e195627953f7"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"60cd7c56-71b6-4195-b03f-ea5e02986bd7","elementid":"85cd92ee-5086-4d5a-b3e3-5616b3a701e2","modelid":"c2b3b98a-443b-4ce2-9afd-e195627953f7"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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