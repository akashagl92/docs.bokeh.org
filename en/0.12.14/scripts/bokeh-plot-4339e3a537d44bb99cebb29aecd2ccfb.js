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
      };var element = document.getElementById("688d7fed-7d59-4528-862c-fd6ce2b24106");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '688d7fed-7d59-4528-862c-fd6ce2b24106' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8a1b40b1-2a97-47a8-acda-a9b9a16ae0f4":{"roots":{"references":[{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29c2a734-e61f-4a7a-97c6-02e70d8ea1bd","type":"Line"},{"attributes":{"source":{"id":"5f427eab-e2a6-4ced-83fa-c46216f439c5","type":"ColumnDataSource"}},"id":"33c48b30-606a-43a8-9eff-fd23e7f1689d","type":"CDSView"},{"attributes":{},"id":"f77e887a-8ea2-49fd-981c-a5631ffff313","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"08daa773-dedb-43de-8664-bcaf86d82e92","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e972a2f-0e25-4b2a-846b-5f8bc078c39e","type":"CategoricalTicker"}},"id":"1a5008f3-5fcd-45f9-94d8-4929eed07bc3","type":"Grid"},{"attributes":{"data_source":{"id":"5f427eab-e2a6-4ced-83fa-c46216f439c5","type":"ColumnDataSource"},"glyph":{"id":"1a2d9775-079c-4802-a10d-67cac95b493f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e07f8525-39c2-4e1c-8710-ea1cad040a95","type":"VBar"},"selection_glyph":null,"view":{"id":"33c48b30-606a-43a8-9eff-fd23e7f1689d","type":"CDSView"}},"id":"677b0b4c-a643-4c89-891b-1330e9ff1f2b","type":"GlyphRenderer"},{"attributes":{},"id":"2e972a2f-0e25-4b2a-846b-5f8bc078c39e","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"67d4ada7-21d4-4420-9092-d74aa986119f","type":"CategoricalAxis"}],"left":[{"id":"f35f4090-6f4e-4600-99f2-f77b1f42e8b3","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"67d4ada7-21d4-4420-9092-d74aa986119f","type":"CategoricalAxis"},{"id":"1a5008f3-5fcd-45f9-94d8-4929eed07bc3","type":"Grid"},{"id":"f35f4090-6f4e-4600-99f2-f77b1f42e8b3","type":"LinearAxis"},{"id":"f9b60815-8aa1-4d45-aca4-87074bb4e8a5","type":"Grid"},{"id":"677b0b4c-a643-4c89-891b-1330e9ff1f2b","type":"GlyphRenderer"},{"id":"84bd3815-57a0-499c-aa25-4e9430a75855","type":"GlyphRenderer"}],"title":{"id":"d48d828d-1ff5-437c-9bad-727833f08714","type":"Title"},"toolbar":{"id":"3600e20b-a4ce-4dd3-96eb-2b9c166801e2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2f1f29ac-cdfb-4263-8ce9-bb2614c8a2ef","type":"FactorRange"},"x_scale":{"id":"87ecd52c-4d92-4b22-8ac1-8b61017e2cc6","type":"CategoricalScale"},"y_range":{"id":"a8f32a85-2e64-417f-addf-f6e01324a37b","type":"DataRange1d"},"y_scale":{"id":"1d31485c-a8fe-47ef-a84a-acfe09e1f991","type":"LinearScale"}},"id":"08daa773-dedb-43de-8664-bcaf86d82e92","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"08daa773-dedb-43de-8664-bcaf86d82e92","subtype":"Figure","type":"Plot"},"ticker":{"id":"f77e887a-8ea2-49fd-981c-a5631ffff313","type":"BasicTicker"}},"id":"f9b60815-8aa1-4d45-aca4-87074bb4e8a5","type":"Grid"},{"attributes":{},"id":"87ecd52c-4d92-4b22-8ac1-8b61017e2cc6","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"5876e657-ee43-4234-92fc-ef4f35796523","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"5f427eab-e2a6-4ced-83fa-c46216f439c5","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"909c58a0-959b-44e5-bb53-bdafa2ee36d4","type":"Line"},{"attributes":{"formatter":{"id":"959c29bb-fa5e-4fb8-97d5-2ce75161b93d","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"08daa773-dedb-43de-8664-bcaf86d82e92","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e972a2f-0e25-4b2a-846b-5f8bc078c39e","type":"CategoricalTicker"}},"id":"67d4ada7-21d4-4420-9092-d74aa986119f","type":"CategoricalAxis"},{"attributes":{},"id":"1d31485c-a8fe-47ef-a84a-acfe09e1f991","type":"LinearScale"},{"attributes":{},"id":"c2391231-378a-4b7c-97b3-023b4b0c3696","type":"BasicTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"a8f32a85-2e64-417f-addf-f6e01324a37b","type":"DataRange1d"},{"attributes":{},"id":"959c29bb-fa5e-4fb8-97d5-2ce75161b93d","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"c2391231-378a-4b7c-97b3-023b4b0c3696","type":"BasicTickFormatter"},"plot":{"id":"08daa773-dedb-43de-8664-bcaf86d82e92","subtype":"Figure","type":"Plot"},"ticker":{"id":"f77e887a-8ea2-49fd-981c-a5631ffff313","type":"BasicTicker"}},"id":"f35f4090-6f4e-4600-99f2-f77b1f42e8b3","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3600e20b-a4ce-4dd3-96eb-2b9c166801e2","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1a2d9775-079c-4802-a10d-67cac95b493f","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"e07f8525-39c2-4e1c-8710-ea1cad040a95","type":"VBar"},{"attributes":{"source":{"id":"5876e657-ee43-4234-92fc-ef4f35796523","type":"ColumnDataSource"}},"id":"c37db103-d817-412e-ba57-8f7ec4073eb3","type":"CDSView"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"2f1f29ac-cdfb-4263-8ce9-bb2614c8a2ef","type":"FactorRange"},{"attributes":{"data_source":{"id":"5876e657-ee43-4234-92fc-ef4f35796523","type":"ColumnDataSource"},"glyph":{"id":"29c2a734-e61f-4a7a-97c6-02e70d8ea1bd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"909c58a0-959b-44e5-bb53-bdafa2ee36d4","type":"Line"},"selection_glyph":null,"view":{"id":"c37db103-d817-412e-ba57-8f7ec4073eb3","type":"CDSView"}},"id":"84bd3815-57a0-499c-aa25-4e9430a75855","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"d48d828d-1ff5-437c-9bad-727833f08714","type":"Title"}],"root_ids":["08daa773-dedb-43de-8664-bcaf86d82e92"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"8a1b40b1-2a97-47a8-acda-a9b9a16ae0f4","elementid":"688d7fed-7d59-4528-862c-fd6ce2b24106","modelid":"08daa773-dedb-43de-8664-bcaf86d82e92"}];
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