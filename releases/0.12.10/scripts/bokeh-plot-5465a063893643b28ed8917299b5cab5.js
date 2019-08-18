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
      };var element = document.getElementById("d276c5fc-e504-40ed-9c0b-cc512027add9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd276c5fc-e504-40ed-9c0b-cc512027add9' but no matching script tag was found. ")
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
                    var docs_json = {"c31d850c-15ad-46c1-b832-d1d8a33e350f":{"roots":{"references":[{"attributes":{},"id":"d7fee576-c64e-4f37-86cc-0af7120644ee","type":"BasicTicker"},{"attributes":{},"id":"45c8f7e0-a9ed-43fb-bc87-6c46b8cdc61a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"adbb6812-a074-415a-9ea9-36d732b3f57c","type":"VBar"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"6deb29e2-2c93-4f94-9617-d4476800bbc6","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"50d3e6e0-c6f6-4f11-8479-0bee4bcac5c0","type":"VBar"},{"attributes":{},"id":"90d3401c-ee35-443f-9e77-d50e7a95b6f9","type":"CategoricalTickFormatter"},{"attributes":{},"id":"31fa5a46-8875-4147-8088-34c0fb8f63a4","type":"CategoricalScale"},{"attributes":{},"id":"de532f4a-cb63-4ec2-844d-8bb9257e5cba","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"90d3401c-ee35-443f-9e77-d50e7a95b6f9","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"dc563aba-6658-4433-9967-5708f6b6c736","subtype":"Figure","type":"Plot"},"ticker":{"id":"de532f4a-cb63-4ec2-844d-8bb9257e5cba","type":"CategoricalTicker"}},"id":"6ad5ad69-da72-4048-88ee-525e2d40f9cf","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"dc563aba-6658-4433-9967-5708f6b6c736","subtype":"Figure","type":"Plot"},"ticker":{"id":"de532f4a-cb63-4ec2-844d-8bb9257e5cba","type":"CategoricalTicker"}},"id":"49adc1f5-5509-4be3-b26f-d78060cda0c4","type":"Grid"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"c0d8b463-25d8-4aa5-a725-71785088b943","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"2f970e0b-29c7-41c0-89f0-1044975d588f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2f970e0b-29c7-41c0-89f0-1044975d588f","type":"ColumnDataSource"},"glyph":{"id":"50d3e6e0-c6f6-4f11-8479-0bee4bcac5c0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"adbb6812-a074-415a-9ea9-36d732b3f57c","type":"VBar"},"selection_glyph":null,"view":{"id":"af4bc6cb-17ab-498a-8cc4-f3d314c67032","type":"CDSView"}},"id":"3b9769b2-d8ac-4510-b1fe-524b48d63a31","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2f970e0b-29c7-41c0-89f0-1044975d588f","type":"ColumnDataSource"}},"id":"af4bc6cb-17ab-498a-8cc4-f3d314c67032","type":"CDSView"},{"attributes":{"below":[{"id":"6ad5ad69-da72-4048-88ee-525e2d40f9cf","type":"CategoricalAxis"}],"left":[{"id":"f38ac773-9c5c-4a74-9f0c-2a67adff2e84","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"6ad5ad69-da72-4048-88ee-525e2d40f9cf","type":"CategoricalAxis"},{"id":"49adc1f5-5509-4be3-b26f-d78060cda0c4","type":"Grid"},{"id":"f38ac773-9c5c-4a74-9f0c-2a67adff2e84","type":"LinearAxis"},{"id":"21088354-c5f3-4131-bba2-9bd084fc9796","type":"Grid"},{"id":"3b9769b2-d8ac-4510-b1fe-524b48d63a31","type":"GlyphRenderer"}],"title":{"id":"a8aec20c-ca3b-447f-8e6e-09591f66870a","type":"Title"},"toolbar":{"id":"0085c891-2af5-47b6-80f3-e0c10d519b1e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c0d8b463-25d8-4aa5-a725-71785088b943","type":"FactorRange"},"x_scale":{"id":"31fa5a46-8875-4147-8088-34c0fb8f63a4","type":"CategoricalScale"},"y_range":{"id":"ea05f670-6dfe-41ab-a4c6-f812af9d14f3","type":"DataRange1d"},"y_scale":{"id":"45c8f7e0-a9ed-43fb-bc87-6c46b8cdc61a","type":"LinearScale"}},"id":"dc563aba-6658-4433-9967-5708f6b6c736","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"a8aec20c-ca3b-447f-8e6e-09591f66870a","type":"Title"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"6deb29e2-2c93-4f94-9617-d4476800bbc6","type":"CategoricalColorMapper"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0085c891-2af5-47b6-80f3-e0c10d519b1e","type":"Toolbar"},{"attributes":{"callback":null,"start":0},"id":"ea05f670-6dfe-41ab-a4c6-f812af9d14f3","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9de244b8-366b-46a2-9268-b3527a700323","type":"BasicTickFormatter"},"plot":{"id":"dc563aba-6658-4433-9967-5708f6b6c736","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7fee576-c64e-4f37-86cc-0af7120644ee","type":"BasicTicker"}},"id":"f38ac773-9c5c-4a74-9f0c-2a67adff2e84","type":"LinearAxis"},{"attributes":{},"id":"9de244b8-366b-46a2-9268-b3527a700323","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"dc563aba-6658-4433-9967-5708f6b6c736","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7fee576-c64e-4f37-86cc-0af7120644ee","type":"BasicTicker"}},"id":"21088354-c5f3-4131-bba2-9bd084fc9796","type":"Grid"}],"root_ids":["dc563aba-6658-4433-9967-5708f6b6c736"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"c31d850c-15ad-46c1-b832-d1d8a33e350f","elementid":"d276c5fc-e504-40ed-9c0b-cc512027add9","modelid":"dc563aba-6658-4433-9967-5708f6b6c736"}];
                
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
