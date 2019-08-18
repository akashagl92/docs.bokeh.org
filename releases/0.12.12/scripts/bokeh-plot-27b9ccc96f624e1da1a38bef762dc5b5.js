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
      };var element = document.getElementById("3a5cf0e2-9bfa-41ad-9340-c88a935fc3cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a5cf0e2-9bfa-41ad-9340-c88a935fc3cf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"548ae1c1-a3cc-4089-9ad9-0aae20075724":{"roots":{"references":[{"attributes":{},"id":"6cff3bbf-9574-4a0f-a868-95d7af06aff0","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"520f7d97-31c8-45e4-b702-4dd74290c933","type":"CategoricalAxis"}],"left":[{"id":"95980ea2-7589-4124-b295-2a3b64811f5f","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"520f7d97-31c8-45e4-b702-4dd74290c933","type":"CategoricalAxis"},{"id":"eeb290e6-a461-4ef4-b2ef-2dd793ef5780","type":"Grid"},{"id":"95980ea2-7589-4124-b295-2a3b64811f5f","type":"LinearAxis"},{"id":"40f9377d-dba2-4136-8388-01ecfe29b32d","type":"Grid"},{"id":"5c1aa725-490a-403b-8211-35857dbbf9d4","type":"GlyphRenderer"},{"id":"8658e9c4-05ee-4b8f-b4aa-e30a1ba26e2f","type":"GlyphRenderer"}],"title":{"id":"69c2b0bf-80f2-447c-8f6d-05ff9ca1b828","type":"Title"},"toolbar":{"id":"b2428e26-ba3a-494d-b501-0bea58f5f58c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7435723f-165e-480f-ac07-e7cb44f46cb4","type":"FactorRange"},"x_scale":{"id":"0621c92e-5a5f-4c12-a500-9de73dfdde30","type":"CategoricalScale"},"y_range":{"id":"4c5d997d-ba30-48a9-9404-30cacec394ce","type":"DataRange1d"},"y_scale":{"id":"174198cd-3f30-4daa-b72b-969005496932","type":"LinearScale"}},"id":"49c52725-a72c-4ca0-99f4-6d13598b8a61","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"174198cd-3f30-4daa-b72b-969005496932","type":"LinearScale"},{"attributes":{},"id":"1e3cb456-8483-4ab1-b492-cb78fc663a9f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"5fbe9cde-ea38-4094-b1a3-ecead965c067","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9ce3429e-7dd8-4d96-b8b8-6225c8f5a88f","type":"ColumnDataSource"},"glyph":{"id":"d3df149b-25e7-4532-ab59-f170b91ef449","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a76f058f-ef9b-4b50-b97c-92f8f3689157","type":"VBar"},"selection_glyph":null,"view":{"id":"ae587842-4032-42ad-a481-aa4501648b67","type":"CDSView"}},"id":"5c1aa725-490a-403b-8211-35857dbbf9d4","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"49c52725-a72c-4ca0-99f4-6d13598b8a61","subtype":"Figure","type":"Plot"},"ticker":{"id":"c34aca3b-c68a-427d-af96-7504d5cd6cce","type":"CategoricalTicker"}},"id":"eeb290e6-a461-4ef4-b2ef-2dd793ef5780","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"a76f058f-ef9b-4b50-b97c-92f8f3689157","type":"VBar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"d5153197-6188-4f54-8627-8c997e266696","type":"Line"},{"attributes":{"data_source":{"id":"5fbe9cde-ea38-4094-b1a3-ecead965c067","type":"ColumnDataSource"},"glyph":{"id":"0e246ccd-964d-476b-9335-97ee17a813a0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d5153197-6188-4f54-8627-8c997e266696","type":"Line"},"selection_glyph":null,"view":{"id":"c5fa8315-533c-45e5-bbd6-7e66c29db48f","type":"CDSView"}},"id":"8658e9c4-05ee-4b8f-b4aa-e30a1ba26e2f","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"7435723f-165e-480f-ac07-e7cb44f46cb4","type":"FactorRange"},{"attributes":{"formatter":{"id":"6cff3bbf-9574-4a0f-a868-95d7af06aff0","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"49c52725-a72c-4ca0-99f4-6d13598b8a61","subtype":"Figure","type":"Plot"},"ticker":{"id":"c34aca3b-c68a-427d-af96-7504d5cd6cce","type":"CategoricalTicker"}},"id":"520f7d97-31c8-45e4-b702-4dd74290c933","type":"CategoricalAxis"},{"attributes":{},"id":"c34aca3b-c68a-427d-af96-7504d5cd6cce","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"49c52725-a72c-4ca0-99f4-6d13598b8a61","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e3cb456-8483-4ab1-b492-cb78fc663a9f","type":"BasicTicker"}},"id":"40f9377d-dba2-4136-8388-01ecfe29b32d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"d3df149b-25e7-4532-ab59-f170b91ef449","type":"VBar"},{"attributes":{"source":{"id":"9ce3429e-7dd8-4d96-b8b8-6225c8f5a88f","type":"ColumnDataSource"}},"id":"ae587842-4032-42ad-a481-aa4501648b67","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b2428e26-ba3a-494d-b501-0bea58f5f58c","type":"Toolbar"},{"attributes":{"formatter":{"id":"25a7a43f-50f0-487d-9c84-d99383131c1f","type":"BasicTickFormatter"},"plot":{"id":"49c52725-a72c-4ca0-99f4-6d13598b8a61","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e3cb456-8483-4ab1-b492-cb78fc663a9f","type":"BasicTicker"}},"id":"95980ea2-7589-4124-b295-2a3b64811f5f","type":"LinearAxis"},{"attributes":{"callback":null,"start":0},"id":"4c5d997d-ba30-48a9-9404-30cacec394ce","type":"DataRange1d"},{"attributes":{},"id":"25a7a43f-50f0-487d-9c84-d99383131c1f","type":"BasicTickFormatter"},{"attributes":{},"id":"0621c92e-5a5f-4c12-a500-9de73dfdde30","type":"CategoricalScale"},{"attributes":{"source":{"id":"5fbe9cde-ea38-4094-b1a3-ecead965c067","type":"ColumnDataSource"}},"id":"c5fa8315-533c-45e5-bbd6-7e66c29db48f","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"69c2b0bf-80f2-447c-8f6d-05ff9ca1b828","type":"Title"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"9ce3429e-7dd8-4d96-b8b8-6225c8f5a88f","type":"ColumnDataSource"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"0e246ccd-964d-476b-9335-97ee17a813a0","type":"Line"}],"root_ids":["49c52725-a72c-4ca0-99f4-6d13598b8a61"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"548ae1c1-a3cc-4089-9ad9-0aae20075724","elementid":"3a5cf0e2-9bfa-41ad-9340-c88a935fc3cf","modelid":"49c52725-a72c-4ca0-99f4-6d13598b8a61"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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