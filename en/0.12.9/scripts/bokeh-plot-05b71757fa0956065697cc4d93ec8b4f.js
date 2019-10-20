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
      };var element = document.getElementById("3afe275d-c9e2-4387-bfc5-fe69f34de3a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3afe275d-c9e2-4387-bfc5-fe69f34de3a0' but no matching script tag was found. ")
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
                    var docs_json = {"e7c8f351-d6ef-4d08-9bf2-fd1626dcf9b3":{"roots":{"references":[{"attributes":{},"id":"48e418e0-8795-4f16-83d2-340e7fa7719b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e5d39d6a-a436-4c11-9f84-7bf34117dd4f","subtype":"Figure","type":"Plot"},"ticker":{"id":"48e418e0-8795-4f16-83d2-340e7fa7719b","type":"BasicTicker"}},"id":"3ca07845-9894-4b07-b9f5-2394b72c5e61","type":"Grid"},{"attributes":{"data_source":{"id":"92f9cba1-a1da-4239-9931-345150f8afad","type":"ColumnDataSource"},"glyph":{"id":"5b992d8b-4da5-4c14-aedd-c5771fc9bd13","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cfdaa819-b350-40c7-a3fe-b79d40481a4b","type":"VBar"},"selection_glyph":null,"view":{"id":"751544bd-2fe2-4acd-9be2-48c7653c1966","type":"CDSView"}},"id":"b7d1ec0e-5066-4c63-a314-d954317ca3a5","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"00332f02-e44e-4e52-ab1c-91240d712ac6","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"e5d39d6a-a436-4c11-9f84-7bf34117dd4f","subtype":"Figure","type":"Plot"}},"id":"75c98aba-9f8c-474c-8cdf-cd6b36a2f803","type":"Legend"},{"attributes":{"source":{"id":"92f9cba1-a1da-4239-9931-345150f8afad","type":"ColumnDataSource"}},"id":"751544bd-2fe2-4acd-9be2-48c7653c1966","type":"CDSView"},{"attributes":{},"id":"c8fb199f-ed65-45bf-97ca-b021e9d17456","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9ca2e137-38e8-434f-a3c7-aa0762f63b60","type":"CategoricalAxis"}],"left":[{"id":"8753b7c1-c71c-41fc-9739-a1f845cfad6a","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"9ca2e137-38e8-434f-a3c7-aa0762f63b60","type":"CategoricalAxis"},{"id":"1510a178-d5db-4857-b540-0ae2cdbe5ce3","type":"Grid"},{"id":"8753b7c1-c71c-41fc-9739-a1f845cfad6a","type":"LinearAxis"},{"id":"3ca07845-9894-4b07-b9f5-2394b72c5e61","type":"Grid"},{"id":"75c98aba-9f8c-474c-8cdf-cd6b36a2f803","type":"Legend"},{"id":"b7d1ec0e-5066-4c63-a314-d954317ca3a5","type":"GlyphRenderer"}],"title":{"id":"40f18994-61c8-4cfd-a158-df1801a4c561","type":"Title"},"toolbar":{"id":"ef675a34-4fea-4632-9884-defb9f3b6a60","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8785a4b1-c5a5-445c-af05-4d9b8b7c8011","type":"FactorRange"},"x_scale":{"id":"99621eca-e978-4c34-bf85-e3f25824c701","type":"CategoricalScale"},"y_range":{"id":"17c90251-b4a8-4186-9f74-34aaa2b71963","type":"Range1d"},"y_scale":{"id":"1280b251-b1e7-44b0-867d-38aec657b312","type":"LinearScale"}},"id":"e5d39d6a-a436-4c11-9f84-7bf34117dd4f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12b054f4-58ca-4f41-9601-37fb30fc5105","type":"CategoricalTickFormatter"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"b7d1ec0e-5066-4c63-a314-d954317ca3a5","type":"GlyphRenderer"}]},"id":"00332f02-e44e-4e52-ab1c-91240d712ac6","type":"LegendItem"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"40f18994-61c8-4cfd-a158-df1801a4c561","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"8785a4b1-c5a5-445c-af05-4d9b8b7c8011","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ef675a34-4fea-4632-9884-defb9f3b6a60","type":"Toolbar"},{"attributes":{"formatter":{"id":"c8fb199f-ed65-45bf-97ca-b021e9d17456","type":"BasicTickFormatter"},"plot":{"id":"e5d39d6a-a436-4c11-9f84-7bf34117dd4f","subtype":"Figure","type":"Plot"},"ticker":{"id":"48e418e0-8795-4f16-83d2-340e7fa7719b","type":"BasicTicker"}},"id":"8753b7c1-c71c-41fc-9739-a1f845cfad6a","type":"LinearAxis"},{"attributes":{},"id":"99621eca-e978-4c34-bf85-e3f25824c701","type":"CategoricalScale"},{"attributes":{"callback":null,"end":9},"id":"17c90251-b4a8-4186-9f74-34aaa2b71963","type":"Range1d"},{"attributes":{},"id":"1280b251-b1e7-44b0-867d-38aec657b312","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e5d39d6a-a436-4c11-9f84-7bf34117dd4f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2845803-670b-47ca-8e3b-40687d82da2c","type":"CategoricalTicker"}},"id":"1510a178-d5db-4857-b540-0ae2cdbe5ce3","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"cfdaa819-b350-40c7-a3fe-b79d40481a4b","type":"VBar"},{"attributes":{"formatter":{"id":"12b054f4-58ca-4f41-9601-37fb30fc5105","type":"CategoricalTickFormatter"},"plot":{"id":"e5d39d6a-a436-4c11-9f84-7bf34117dd4f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2845803-670b-47ca-8e3b-40687d82da2c","type":"CategoricalTicker"}},"id":"9ca2e137-38e8-434f-a3c7-aa0762f63b60","type":"CategoricalAxis"},{"attributes":{},"id":"c2845803-670b-47ca-8e3b-40687d82da2c","type":"CategoricalTicker"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"5b992d8b-4da5-4c14-aedd-c5771fc9bd13","type":"VBar"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"92f9cba1-a1da-4239-9931-345150f8afad","type":"ColumnDataSource"}],"root_ids":["e5d39d6a-a436-4c11-9f84-7bf34117dd4f"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e7c8f351-d6ef-4d08-9bf2-fd1626dcf9b3","elementid":"3afe275d-c9e2-4387-bfc5-fe69f34de3a0","modelid":"e5d39d6a-a436-4c11-9f84-7bf34117dd4f"}];
                
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
