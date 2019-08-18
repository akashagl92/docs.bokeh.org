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
      };var element = document.getElementById("81798269-eac2-4faa-830f-3e82c8c7dd0d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '81798269-eac2-4faa-830f-3e82c8c7dd0d' but no matching script tag was found. ")
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
                    var docs_json = {"077ba8f7-e9c8-4549-8ffb-6fe47262a4f2":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"9e10c031-c4a0-467a-91cf-43503fc91863","type":"Dodge"}}},"id":"de718470-aee5-49f1-9cd4-91cfbd4aa203","type":"VBar"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"9e10c031-c4a0-467a-91cf-43503fc91863","type":"Dodge"}}},"id":"ed09f477-2676-46bb-9e01-a98a6135d6f7","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"3b12d796-52b6-4aef-8747-3e2086eedd52","type":"Dodge"}}},"id":"d26cfa83-7d1c-46ca-ac54-0f107baafe3b","type":"VBar"},{"attributes":{"data_source":{"id":"f1408ee4-1321-4dea-a4cc-8e266df3c659","type":"ColumnDataSource"},"glyph":{"id":"ed09f477-2676-46bb-9e01-a98a6135d6f7","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"de718470-aee5-49f1-9cd4-91cfbd4aa203","type":"VBar"},"selection_glyph":null,"view":{"id":"b6633c59-4444-432a-b179-05400faf0ff6","type":"CDSView"}},"id":"70c52926-c0a9-4f34-b43b-b76736c21f8d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f1408ee4-1321-4dea-a4cc-8e266df3c659","type":"ColumnDataSource"}},"id":"b6633c59-4444-432a-b179-05400faf0ff6","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"70c52926-c0a9-4f34-b43b-b76736c21f8d","type":"GlyphRenderer"}]},"id":"bafa8703-8ddd-41a9-9487-1c37bb3e4537","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"3b12d796-52b6-4aef-8747-3e2086eedd52","type":"Dodge"}}},"id":"d343e742-a5f7-4c88-9a72-2aedb4f42b01","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"fadad035-7246-4f48-a9cb-ef9640739970","type":"FactorRange"},{"attributes":{"formatter":{"id":"f190b1d3-6600-43c1-9e2c-87c23803bdf4","type":"BasicTickFormatter"},"plot":{"id":"67748f02-0fa1-46d0-914c-bc7360375350","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ae94453-8af9-4019-8f10-d4d2d52a7faf","type":"BasicTicker"}},"id":"492c5fb1-da19-4477-a9a7-00e538b5597d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f1408ee4-1321-4dea-a4cc-8e266df3c659","type":"ColumnDataSource"},"glyph":{"id":"d343e742-a5f7-4c88-9a72-2aedb4f42b01","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d26cfa83-7d1c-46ca-ac54-0f107baafe3b","type":"VBar"},"selection_glyph":null,"view":{"id":"5d50a7f1-8089-4c09-8546-3cd2dc72d97e","type":"CDSView"}},"id":"984430f4-f2ae-44e6-ad64-75168ced6c6f","type":"GlyphRenderer"},{"attributes":{},"id":"31e1f984-5a1d-40f3-8ecf-fa0e525e6752","type":"CategoricalScale"},{"attributes":{"callback":null,"end":10},"id":"bf26384a-f930-4ab5-8a10-57485e212b70","type":"Range1d"},{"attributes":{"source":{"id":"f1408ee4-1321-4dea-a4cc-8e266df3c659","type":"ColumnDataSource"}},"id":"5d50a7f1-8089-4c09-8546-3cd2dc72d97e","type":"CDSView"},{"attributes":{},"id":"3640f7a8-50af-479e-9a6c-e29ef4d7c4c5","type":"LinearScale"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"984430f4-f2ae-44e6-ad64-75168ced6c6f","type":"GlyphRenderer"}]},"id":"4cb16cb6-4cae-40d6-82d2-786a4687a370","type":"LegendItem"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"67748f02-0fa1-46d0-914c-bc7360375350","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8e116f5-c0e2-48d5-be26-1beeea4208e1","type":"CategoricalTicker"}},"id":"d7cc0070-2edc-4c43-bcc3-6efc28c37e3a","type":"Grid"},{"attributes":{"formatter":{"id":"a0f0365e-117f-45ba-a715-f95227ad4030","type":"CategoricalTickFormatter"},"plot":{"id":"67748f02-0fa1-46d0-914c-bc7360375350","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8e116f5-c0e2-48d5-be26-1beeea4208e1","type":"CategoricalTicker"}},"id":"422b7dc1-44e6-49da-81ba-bad70e9c54cc","type":"CategoricalAxis"},{"attributes":{},"id":"a8e116f5-c0e2-48d5-be26-1beeea4208e1","type":"CategoricalTicker"},{"attributes":{},"id":"8ae94453-8af9-4019-8f10-d4d2d52a7faf","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"67748f02-0fa1-46d0-914c-bc7360375350","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ae94453-8af9-4019-8f10-d4d2d52a7faf","type":"BasicTicker"}},"id":"3e55d8f4-ddf3-42d5-a534-b2cff3465211","type":"Grid"},{"attributes":{"data_source":{"id":"f1408ee4-1321-4dea-a4cc-8e266df3c659","type":"ColumnDataSource"},"glyph":{"id":"5a4fbdf0-0178-46d3-aeb3-223eb310c204","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3289b545-70fa-43df-8b1a-55ac3e25b34b","type":"VBar"},"selection_glyph":null,"view":{"id":"735c675c-e319-46e2-a17b-1801903f0394","type":"CDSView"}},"id":"f66a6b06-0a83-4152-a9c2-c65a8452453c","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"226b6040-af80-4e99-8817-7763bdb60d02","type":"Dodge"}}},"id":"5a4fbdf0-0178-46d3-aeb3-223eb310c204","type":"VBar"},{"attributes":{},"id":"f190b1d3-6600-43c1-9e2c-87c23803bdf4","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"422b7dc1-44e6-49da-81ba-bad70e9c54cc","type":"CategoricalAxis"}],"left":[{"id":"492c5fb1-da19-4477-a9a7-00e538b5597d","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"422b7dc1-44e6-49da-81ba-bad70e9c54cc","type":"CategoricalAxis"},{"id":"d7cc0070-2edc-4c43-bcc3-6efc28c37e3a","type":"Grid"},{"id":"492c5fb1-da19-4477-a9a7-00e538b5597d","type":"LinearAxis"},{"id":"3e55d8f4-ddf3-42d5-a534-b2cff3465211","type":"Grid"},{"id":"9e2f6222-06a1-4559-a844-aa806ff2f97d","type":"Legend"},{"id":"f66a6b06-0a83-4152-a9c2-c65a8452453c","type":"GlyphRenderer"},{"id":"70c52926-c0a9-4f34-b43b-b76736c21f8d","type":"GlyphRenderer"},{"id":"984430f4-f2ae-44e6-ad64-75168ced6c6f","type":"GlyphRenderer"}],"title":{"id":"6c640ae8-28e0-45a6-9db1-042af7f8b886","type":"Title"},"toolbar":{"id":"d50b0d8a-fe61-44bb-ab07-c099bea55b11","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fadad035-7246-4f48-a9cb-ef9640739970","type":"FactorRange"},"x_scale":{"id":"31e1f984-5a1d-40f3-8ecf-fa0e525e6752","type":"CategoricalScale"},"y_range":{"id":"bf26384a-f930-4ab5-8a10-57485e212b70","type":"Range1d"},"y_scale":{"id":"3640f7a8-50af-479e-9a6c-e29ef4d7c4c5","type":"LinearScale"}},"id":"67748f02-0fa1-46d0-914c-bc7360375350","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"9cdb1d5a-3ad6-4542-ac2e-e71afcf07d5e","type":"LegendItem"},{"id":"bafa8703-8ddd-41a9-9487-1c37bb3e4537","type":"LegendItem"},{"id":"4cb16cb6-4cae-40d6-82d2-786a4687a370","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"67748f02-0fa1-46d0-914c-bc7360375350","subtype":"Figure","type":"Plot"}},"id":"9e2f6222-06a1-4559-a844-aa806ff2f97d","type":"Legend"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"f1408ee4-1321-4dea-a4cc-8e266df3c659","type":"ColumnDataSource"},{"attributes":{},"id":"a0f0365e-117f-45ba-a715-f95227ad4030","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"226b6040-af80-4e99-8817-7763bdb60d02","type":"Dodge"}}},"id":"3289b545-70fa-43df-8b1a-55ac3e25b34b","type":"VBar"},{"attributes":{"range":{"id":"fadad035-7246-4f48-a9cb-ef9640739970","type":"FactorRange"},"value":-0.25},"id":"226b6040-af80-4e99-8817-7763bdb60d02","type":"Dodge"},{"attributes":{"range":{"id":"fadad035-7246-4f48-a9cb-ef9640739970","type":"FactorRange"}},"id":"9e10c031-c4a0-467a-91cf-43503fc91863","type":"Dodge"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"6c640ae8-28e0-45a6-9db1-042af7f8b886","type":"Title"},{"attributes":{"source":{"id":"f1408ee4-1321-4dea-a4cc-8e266df3c659","type":"ColumnDataSource"}},"id":"735c675c-e319-46e2-a17b-1801903f0394","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d50b0d8a-fe61-44bb-ab07-c099bea55b11","type":"Toolbar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"f66a6b06-0a83-4152-a9c2-c65a8452453c","type":"GlyphRenderer"}]},"id":"9cdb1d5a-3ad6-4542-ac2e-e71afcf07d5e","type":"LegendItem"},{"attributes":{"range":{"id":"fadad035-7246-4f48-a9cb-ef9640739970","type":"FactorRange"},"value":0.25},"id":"3b12d796-52b6-4aef-8747-3e2086eedd52","type":"Dodge"}],"root_ids":["67748f02-0fa1-46d0-914c-bc7360375350"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"077ba8f7-e9c8-4549-8ffb-6fe47262a4f2","elementid":"81798269-eac2-4faa-830f-3e82c8c7dd0d","modelid":"67748f02-0fa1-46d0-914c-bc7360375350"}];
                
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
