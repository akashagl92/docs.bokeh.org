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
      };var element = document.getElementById("f7e80e62-7a8c-4937-af19-c40d19448b27");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7e80e62-7a8c-4937-af19-c40d19448b27' but no matching script tag was found. ")
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
                    var docs_json = '{"24cf746b-5e06-4c34-96a3-1d32b1af38c9":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"57c46d39-157d-433b-a7d5-5bd917ae4d1e","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"0ccbbe28-f372-4230-a963-f80ebd3c3f46","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"814a4217-014c-4205-9cae-253cb28e065c","type":"BasicTickFormatter"},"plot":{"id":"8e863605-aab0-4a02-85b5-3c8bf9da7105","subtype":"Figure","type":"Plot"},"ticker":{"id":"242b29c4-5217-4ebc-a147-c4f499230feb","type":"BasicTicker"}},"id":"e34edb43-188b-4e69-b4cb-f258f4b09631","type":"LinearAxis"},{"attributes":{},"id":"814a4217-014c-4205-9cae-253cb28e065c","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"836de85a-20bd-4a89-9160-908e683421e5","type":"Title"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"c3b57659-8edd-4a1f-8517-7f3c7e319581","type":"GlyphRenderer"}]},"id":"f0f5c330-98a2-4374-b925-1a33da6eef06","type":"LegendItem"},{"attributes":{},"id":"87168b40-a833-4fa3-a5b7-4e5e49a895be","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8e863605-aab0-4a02-85b5-3c8bf9da7105","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab6db12e-48bc-4c76-bdad-9a1446978665","type":"CategoricalTicker"}},"id":"e738734c-6b40-4684-ac4b-34618526d60d","type":"Grid"},{"attributes":{"formatter":{"id":"e2b229bc-cb89-4b90-a4f6-53e546b59652","type":"CategoricalTickFormatter"},"plot":{"id":"8e863605-aab0-4a02-85b5-3c8bf9da7105","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab6db12e-48bc-4c76-bdad-9a1446978665","type":"CategoricalTicker"}},"id":"352a6ea8-6006-47e6-be5f-ea984038e5bb","type":"CategoricalAxis"},{"attributes":{},"id":"e2b229bc-cb89-4b90-a4f6-53e546b59652","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"0ccbbe28-f372-4230-a963-f80ebd3c3f46","type":"ColumnDataSource"},"glyph":{"id":"49ac63e5-7ad9-447a-a9e1-2dd33428f21e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3e807afd-38bc-4e7c-b85d-3fa01c59b45e","type":"VBar"},"selection_glyph":null,"view":{"id":"08b33d01-f823-442a-aad3-dd36e3604e66","type":"CDSView"}},"id":"c3b57659-8edd-4a1f-8517-7f3c7e319581","type":"GlyphRenderer"},{"attributes":{},"id":"242b29c4-5217-4ebc-a147-c4f499230feb","type":"BasicTicker"},{"attributes":{"below":[{"id":"352a6ea8-6006-47e6-be5f-ea984038e5bb","type":"CategoricalAxis"}],"left":[{"id":"e34edb43-188b-4e69-b4cb-f258f4b09631","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"352a6ea8-6006-47e6-be5f-ea984038e5bb","type":"CategoricalAxis"},{"id":"e738734c-6b40-4684-ac4b-34618526d60d","type":"Grid"},{"id":"e34edb43-188b-4e69-b4cb-f258f4b09631","type":"LinearAxis"},{"id":"935598d3-b08a-4a06-9435-561ad692aad6","type":"Grid"},{"id":"52f5d7ff-4200-4cf3-96ef-c425becc59dd","type":"Legend"},{"id":"c3b57659-8edd-4a1f-8517-7f3c7e319581","type":"GlyphRenderer"}],"title":{"id":"836de85a-20bd-4a89-9160-908e683421e5","type":"Title"},"toolbar":{"id":"57c46d39-157d-433b-a7d5-5bd917ae4d1e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e99b4cf6-26ed-468e-96fa-e1e02d2cf564","type":"FactorRange"},"x_scale":{"id":"87168b40-a833-4fa3-a5b7-4e5e49a895be","type":"CategoricalScale"},"y_range":{"id":"0e1ffd2f-71af-4839-87ec-4774091f76f9","type":"Range1d"},"y_scale":{"id":"a539d3a4-2ed2-41d5-a6de-bb9ffc829a47","type":"LinearScale"}},"id":"8e863605-aab0-4a02-85b5-3c8bf9da7105","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"f0f5c330-98a2-4374-b925-1a33da6eef06","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"8e863605-aab0-4a02-85b5-3c8bf9da7105","subtype":"Figure","type":"Plot"}},"id":"52f5d7ff-4200-4cf3-96ef-c425becc59dd","type":"Legend"},{"attributes":{"callback":null,"end":9},"id":"0e1ffd2f-71af-4839-87ec-4774091f76f9","type":"Range1d"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"49ac63e5-7ad9-447a-a9e1-2dd33428f21e","type":"VBar"},{"attributes":{},"id":"a539d3a4-2ed2-41d5-a6de-bb9ffc829a47","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"8e863605-aab0-4a02-85b5-3c8bf9da7105","subtype":"Figure","type":"Plot"},"ticker":{"id":"242b29c4-5217-4ebc-a147-c4f499230feb","type":"BasicTicker"}},"id":"935598d3-b08a-4a06-9435-561ad692aad6","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"3e807afd-38bc-4e7c-b85d-3fa01c59b45e","type":"VBar"},{"attributes":{"source":{"id":"0ccbbe28-f372-4230-a963-f80ebd3c3f46","type":"ColumnDataSource"}},"id":"08b33d01-f823-442a-aad3-dd36e3604e66","type":"CDSView"},{"attributes":{},"id":"ab6db12e-48bc-4c76-bdad-9a1446978665","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"e99b4cf6-26ed-468e-96fa-e1e02d2cf564","type":"FactorRange"}],"root_ids":["8e863605-aab0-4a02-85b5-3c8bf9da7105"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"24cf746b-5e06-4c34-96a3-1d32b1af38c9","elementid":"f7e80e62-7a8c-4937-af19-c40d19448b27","modelid":"8e863605-aab0-4a02-85b5-3c8bf9da7105"}];
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