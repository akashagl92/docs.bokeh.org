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
      };var element = document.getElementById("e9f43266-481b-4de5-98b2-bd39f2d17efe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e9f43266-481b-4de5-98b2-bd39f2d17efe' but no matching script tag was found. ")
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
                    var docs_json = {"c4c799a4-fdd0-4678-8aa5-1d3c0986304c":{"roots":{"references":[{"attributes":{"callback":null,"end":10},"id":"f0389143-d33e-439d-85d6-7a164f75eb5d","type":"Range1d"},{"attributes":{},"id":"52f43ba9-432f-416f-96ea-907f28934107","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a93f0a2d-3ab8-4aed-a696-ff9141638f86","type":"Toolbar"},{"attributes":{"range":{"id":"b626f217-b665-4906-a27d-2801550ff41c","type":"FactorRange"}},"id":"f85c335b-8f4f-4e4e-85c0-e8da56d35000","type":"Dodge"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"4eccdb79-076f-408b-bcf3-fa07acee5296","type":"Dodge"}}},"id":"b00a7059-1317-4273-8361-401b5ea32656","type":"VBar"},{"attributes":{},"id":"f80f9877-36a4-45d5-89c4-87711991be55","type":"CategoricalTickFormatter"},{"attributes":{},"id":"38f5f605-92aa-41d7-9fab-5efd6f805a9a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"9e5f0a53-c090-4424-be35-5a5bafc29c1c","type":"Dodge"}}},"id":"2726008a-1abb-4cff-b3db-dfa7c7c385ad","type":"VBar"},{"attributes":{"data_source":{"id":"52c98188-9665-4f53-ac9b-13415e55598f","type":"ColumnDataSource"},"glyph":{"id":"2726008a-1abb-4cff-b3db-dfa7c7c385ad","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"63d9b3fa-84e6-471f-a74d-85f41c8db06a","type":"VBar"},"selection_glyph":null,"view":{"id":"16524cfe-eee7-439c-bf6a-4d897b58f6ac","type":"CDSView"}},"id":"5ad96135-03ac-4a6a-b01a-51a90f06e1c1","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"cbf448ab-2a49-47ee-aa82-d78d276fc829","type":"GlyphRenderer"}]},"id":"9a87df52-866c-4642-818f-d572efd3cdbf","type":"LegendItem"},{"attributes":{"data_source":{"id":"52c98188-9665-4f53-ac9b-13415e55598f","type":"ColumnDataSource"},"glyph":{"id":"a48cdae2-050f-4b6d-8e36-e4f5cc3fc14a","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fe02cb8c-c527-4335-a4c8-6e5262351cfd","type":"VBar"},"selection_glyph":null,"view":{"id":"21f4d599-7383-4cdf-bf4a-763c2dc00ff7","type":"CDSView"}},"id":"3f7854fe-9972-4eff-bb82-b09d0e0e1632","type":"GlyphRenderer"},{"attributes":{"source":{"id":"52c98188-9665-4f53-ac9b-13415e55598f","type":"ColumnDataSource"}},"id":"31d85c9b-dd01-43eb-b9e1-7db13b69a583","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"c26dc37c-92b9-40ba-bca4-33705aa9b367","subtype":"Figure","type":"Plot"},"ticker":{"id":"38f5f605-92aa-41d7-9fab-5efd6f805a9a","type":"BasicTicker"}},"id":"f1020361-84f8-419f-a07d-0d42f996d233","type":"Grid"},{"attributes":{"range":{"id":"b626f217-b665-4906-a27d-2801550ff41c","type":"FactorRange"},"value":-0.25},"id":"9e5f0a53-c090-4424-be35-5a5bafc29c1c","type":"Dodge"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"9e5f0a53-c090-4424-be35-5a5bafc29c1c","type":"Dodge"}}},"id":"63d9b3fa-84e6-471f-a74d-85f41c8db06a","type":"VBar"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"3f7854fe-9972-4eff-bb82-b09d0e0e1632","type":"GlyphRenderer"}]},"id":"7ecbf051-31d3-41c2-8b2a-37adecb73d44","type":"LegendItem"},{"attributes":{},"id":"ed9bfd90-4809-4ee0-89df-1b97ae2301d2","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"52c9311c-b616-4eab-9d6d-6ee84e8d6a57","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"f85c335b-8f4f-4e4e-85c0-e8da56d35000","type":"Dodge"}}},"id":"fe02cb8c-c527-4335-a4c8-6e5262351cfd","type":"VBar"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"52c98188-9665-4f53-ac9b-13415e55598f","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"092e369a-b9c3-4b50-bdf5-24419c682da9","type":"BasicTickFormatter"},"plot":{"id":"c26dc37c-92b9-40ba-bca4-33705aa9b367","subtype":"Figure","type":"Plot"},"ticker":{"id":"38f5f605-92aa-41d7-9fab-5efd6f805a9a","type":"BasicTicker"}},"id":"fa854162-f0c3-470d-9e06-c1bae0d6ae06","type":"LinearAxis"},{"attributes":{"items":[{"id":"bc8a54a7-d24b-457d-832a-1cab5f0add87","type":"LegendItem"},{"id":"7ecbf051-31d3-41c2-8b2a-37adecb73d44","type":"LegendItem"},{"id":"9a87df52-866c-4642-818f-d572efd3cdbf","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"c26dc37c-92b9-40ba-bca4-33705aa9b367","subtype":"Figure","type":"Plot"}},"id":"23cc9283-a0fc-4983-af14-8b0c6dbacffb","type":"Legend"},{"attributes":{},"id":"092e369a-b9c3-4b50-bdf5-24419c682da9","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c26dc37c-92b9-40ba-bca4-33705aa9b367","subtype":"Figure","type":"Plot"},"ticker":{"id":"52f43ba9-432f-416f-96ea-907f28934107","type":"CategoricalTicker"}},"id":"4857d398-89da-4bdd-91ae-cc80721ae438","type":"Grid"},{"attributes":{"range":{"id":"b626f217-b665-4906-a27d-2801550ff41c","type":"FactorRange"},"value":0.25},"id":"4eccdb79-076f-408b-bcf3-fa07acee5296","type":"Dodge"},{"attributes":{"source":{"id":"52c98188-9665-4f53-ac9b-13415e55598f","type":"ColumnDataSource"}},"id":"21f4d599-7383-4cdf-bf4a-763c2dc00ff7","type":"CDSView"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"5ad96135-03ac-4a6a-b01a-51a90f06e1c1","type":"GlyphRenderer"}]},"id":"bc8a54a7-d24b-457d-832a-1cab5f0add87","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"f85c335b-8f4f-4e4e-85c0-e8da56d35000","type":"Dodge"}}},"id":"a48cdae2-050f-4b6d-8e36-e4f5cc3fc14a","type":"VBar"},{"attributes":{"formatter":{"id":"f80f9877-36a4-45d5-89c4-87711991be55","type":"CategoricalTickFormatter"},"plot":{"id":"c26dc37c-92b9-40ba-bca4-33705aa9b367","subtype":"Figure","type":"Plot"},"ticker":{"id":"52f43ba9-432f-416f-96ea-907f28934107","type":"CategoricalTicker"}},"id":"e7092dde-d539-4dd9-b0ae-9617cdae8916","type":"CategoricalAxis"},{"attributes":{"source":{"id":"52c98188-9665-4f53-ac9b-13415e55598f","type":"ColumnDataSource"}},"id":"16524cfe-eee7-439c-bf6a-4d897b58f6ac","type":"CDSView"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"4eccdb79-076f-408b-bcf3-fa07acee5296","type":"Dodge"}}},"id":"e7753132-dc4d-4f7f-8c22-0f162335da21","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"b626f217-b665-4906-a27d-2801550ff41c","type":"FactorRange"},{"attributes":{},"id":"2d2ec17b-d891-4b5b-a2c7-4e5e986daee5","type":"LinearScale"},{"attributes":{"data_source":{"id":"52c98188-9665-4f53-ac9b-13415e55598f","type":"ColumnDataSource"},"glyph":{"id":"e7753132-dc4d-4f7f-8c22-0f162335da21","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b00a7059-1317-4273-8361-401b5ea32656","type":"VBar"},"selection_glyph":null,"view":{"id":"31d85c9b-dd01-43eb-b9e1-7db13b69a583","type":"CDSView"}},"id":"cbf448ab-2a49-47ee-aa82-d78d276fc829","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"e7092dde-d539-4dd9-b0ae-9617cdae8916","type":"CategoricalAxis"}],"left":[{"id":"fa854162-f0c3-470d-9e06-c1bae0d6ae06","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"e7092dde-d539-4dd9-b0ae-9617cdae8916","type":"CategoricalAxis"},{"id":"4857d398-89da-4bdd-91ae-cc80721ae438","type":"Grid"},{"id":"fa854162-f0c3-470d-9e06-c1bae0d6ae06","type":"LinearAxis"},{"id":"f1020361-84f8-419f-a07d-0d42f996d233","type":"Grid"},{"id":"23cc9283-a0fc-4983-af14-8b0c6dbacffb","type":"Legend"},{"id":"5ad96135-03ac-4a6a-b01a-51a90f06e1c1","type":"GlyphRenderer"},{"id":"3f7854fe-9972-4eff-bb82-b09d0e0e1632","type":"GlyphRenderer"},{"id":"cbf448ab-2a49-47ee-aa82-d78d276fc829","type":"GlyphRenderer"}],"title":{"id":"52c9311c-b616-4eab-9d6d-6ee84e8d6a57","type":"Title"},"toolbar":{"id":"a93f0a2d-3ab8-4aed-a696-ff9141638f86","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b626f217-b665-4906-a27d-2801550ff41c","type":"FactorRange"},"x_scale":{"id":"ed9bfd90-4809-4ee0-89df-1b97ae2301d2","type":"CategoricalScale"},"y_range":{"id":"f0389143-d33e-439d-85d6-7a164f75eb5d","type":"Range1d"},"y_scale":{"id":"2d2ec17b-d891-4b5b-a2c7-4e5e986daee5","type":"LinearScale"}},"id":"c26dc37c-92b9-40ba-bca4-33705aa9b367","subtype":"Figure","type":"Plot"}],"root_ids":["c26dc37c-92b9-40ba-bca4-33705aa9b367"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c4c799a4-fdd0-4678-8aa5-1d3c0986304c","elementid":"e9f43266-481b-4de5-98b2-bd39f2d17efe","modelid":"c26dc37c-92b9-40ba-bca4-33705aa9b367"}];
                
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
