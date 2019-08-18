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
      };var element = document.getElementById("ffd6049c-2175-4684-a9b6-43838e80dd15");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ffd6049c-2175-4684-a9b6-43838e80dd15' but no matching script tag was found. ")
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
                    var docs_json = {"3eaffc2b-cac9-4f05-b737-2a765017e12c":{"roots":{"references":[{"attributes":{"formatter":{"id":"f8142201-84c6-444c-a7c6-8b6cd6d2b7a5","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"29cc5db1-c7a4-4f9f-a214-33ae35882471","subtype":"Figure","type":"Plot"},"ticker":{"id":"feed298f-4343-4558-8c45-c17bd1eb1951","type":"BasicTicker"}},"id":"7476ddf9-ecc4-4949-9853-97f901926d44","type":"LinearAxis"},{"attributes":{"items":[{"id":"2239594d-314d-40f4-8527-304b8ad4149c","type":"LegendItem"},{"id":"77318831-6c3e-40f7-9761-a3b0415f4f92","type":"LegendItem"},{"id":"e6aa4ccf-aaed-40fc-a630-a5f06ad54708","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"29cc5db1-c7a4-4f9f-a214-33ae35882471","subtype":"Figure","type":"Plot"}},"id":"6989cf1e-690e-46b6-9cd6-71990c276bc3","type":"Legend"},{"attributes":{"bottom":{"expr":{"id":"66384c25-81e3-4460-ac08-52c7442fb016","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"7b3faad7-9f3c-4281-bdfc-0d3224cca8f6","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0d86deef-1327-4e4a-b2f5-b44391cbc9ea","type":"VBar"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"8bf76d59-bdf8-4ce5-87d1-1aa02e7978c1","type":"Title"},{"attributes":{"source":{"id":"0cd95223-9f56-43f4-aae1-a7e498cfc45b","type":"ColumnDataSource"}},"id":"f5a5c8dd-29d0-4267-a516-5b856d647130","type":"CDSView"},{"attributes":{"below":[{"id":"cdf8fc3a-d726-42c7-b552-9a8e29148900","type":"CategoricalAxis"}],"left":[{"id":"7476ddf9-ecc4-4949-9853-97f901926d44","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"cdf8fc3a-d726-42c7-b552-9a8e29148900","type":"CategoricalAxis"},{"id":"628d284c-b3e4-4bcf-9a98-8604f3602977","type":"Grid"},{"id":"7476ddf9-ecc4-4949-9853-97f901926d44","type":"LinearAxis"},{"id":"8d778e38-bae8-451c-bd53-c25cf73f5e0c","type":"Grid"},{"id":"6989cf1e-690e-46b6-9cd6-71990c276bc3","type":"Legend"},{"id":"147a5026-487e-49a1-9217-f293f1e08e90","type":"GlyphRenderer"},{"id":"e98fdda3-bd3a-4dd5-bf8e-fddad5f33f86","type":"GlyphRenderer"},{"id":"70cadc36-df0d-4464-b724-d55be27f67a2","type":"GlyphRenderer"}],"title":{"id":"8bf76d59-bdf8-4ce5-87d1-1aa02e7978c1","type":"Title"},"toolbar":{"id":"065cb8be-658e-44e1-806e-51e6bdd7f97b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f09019fb-a46e-4682-b967-51bd93e1547a","type":"FactorRange"},"x_scale":{"id":"3a1e463c-b723-4584-8331-5cc12744f786","type":"CategoricalScale"},"y_range":{"id":"6434e017-2143-423f-a689-041e45e91888","type":"DataRange1d"},"y_scale":{"id":"44713c19-30da-41ea-8dbf-1c1b0188d7a6","type":"LinearScale"}},"id":"29cc5db1-c7a4-4f9f-a214-33ae35882471","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"feed298f-4343-4558-8c45-c17bd1eb1951","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"45fdc25c-8910-44fa-a194-aec28dc5d30c","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"ce51e3e1-5bd7-4189-bb82-49fbbcdf78fd","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e6b93a5f-c435-4e26-b650-1bea4a0dcd76","type":"VBar"},{"attributes":{"source":{"id":"0cd95223-9f56-43f4-aae1-a7e498cfc45b","type":"ColumnDataSource"}},"id":"6aab2f67-6b05-4358-83ed-f612586c8223","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"29cc5db1-c7a4-4f9f-a214-33ae35882471","subtype":"Figure","type":"Plot"},"ticker":{"id":"feed298f-4343-4558-8c45-c17bd1eb1951","type":"BasicTicker"}},"id":"8d778e38-bae8-451c-bd53-c25cf73f5e0c","type":"Grid"},{"attributes":{"fields":["2015","2016"]},"id":"ce51e3e1-5bd7-4189-bb82-49fbbcdf78fd","type":"Stack"},{"attributes":{"data_source":{"id":"0cd95223-9f56-43f4-aae1-a7e498cfc45b","type":"ColumnDataSource"},"glyph":{"id":"4cfd8c71-77b2-4b76-a092-738bcd0f6991","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e6b93a5f-c435-4e26-b650-1bea4a0dcd76","type":"VBar"},"selection_glyph":null,"view":{"id":"6aab2f67-6b05-4358-83ed-f612586c8223","type":"CDSView"}},"id":"e98fdda3-bd3a-4dd5-bf8e-fddad5f33f86","type":"GlyphRenderer"},{"attributes":{},"id":"44713c19-30da-41ea-8dbf-1c1b0188d7a6","type":"LinearScale"},{"attributes":{"fields":[]},"id":"66384c25-81e3-4460-ac08-52c7442fb016","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"f09019fb-a46e-4682-b967-51bd93e1547a","type":"FactorRange"},{"attributes":{},"id":"f8142201-84c6-444c-a7c6-8b6cd6d2b7a5","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"66384c25-81e3-4460-ac08-52c7442fb016","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"7b3faad7-9f3c-4281-bdfc-0d3224cca8f6","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"03aa847c-59df-448f-af8d-f493d2be99ce","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"147a5026-487e-49a1-9217-f293f1e08e90","type":"GlyphRenderer"}]},"id":"2239594d-314d-40f4-8527-304b8ad4149c","type":"LegendItem"},{"attributes":{},"id":"f5650efb-8a44-432a-810f-b4eac8e6a1fb","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"0cd95223-9f56-43f4-aae1-a7e498cfc45b","type":"ColumnDataSource"},"glyph":{"id":"0d86deef-1327-4e4a-b2f5-b44391cbc9ea","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"03aa847c-59df-448f-af8d-f493d2be99ce","type":"VBar"},"selection_glyph":null,"view":{"id":"f5a5c8dd-29d0-4267-a516-5b856d647130","type":"CDSView"}},"id":"147a5026-487e-49a1-9217-f293f1e08e90","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"0cd95223-9f56-43f4-aae1-a7e498cfc45b","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"c7d8ed59-fccd-442a-984c-84863d2190cd","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"eb0337ca-4136-48e7-8ef6-c52435bb0dc5","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ca26b259-0941-4cb7-990f-f042474acae1","type":"VBar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"70cadc36-df0d-4464-b724-d55be27f67a2","type":"GlyphRenderer"}]},"id":"e6aa4ccf-aaed-40fc-a630-a5f06ad54708","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"065cb8be-658e-44e1-806e-51e6bdd7f97b","type":"Toolbar"},{"attributes":{"fields":["2015"]},"id":"45fdc25c-8910-44fa-a194-aec28dc5d30c","type":"Stack"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"e98fdda3-bd3a-4dd5-bf8e-fddad5f33f86","type":"GlyphRenderer"}]},"id":"77318831-6c3e-40f7-9761-a3b0415f4f92","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"c7d8ed59-fccd-442a-984c-84863d2190cd","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"7b3faad7-9f3c-4281-bdfc-0d3224cca8f6","type":"Stack"},{"attributes":{},"id":"3a1e463c-b723-4584-8331-5cc12744f786","type":"CategoricalScale"},{"attributes":{"source":{"id":"0cd95223-9f56-43f4-aae1-a7e498cfc45b","type":"ColumnDataSource"}},"id":"4b0ba066-12bf-4e16-a8b1-f559792331c9","type":"CDSView"},{"attributes":{"callback":null,"start":0},"id":"6434e017-2143-423f-a689-041e45e91888","type":"DataRange1d"},{"attributes":{"data_source":{"id":"0cd95223-9f56-43f4-aae1-a7e498cfc45b","type":"ColumnDataSource"},"glyph":{"id":"ca26b259-0941-4cb7-990f-f042474acae1","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2f66eb1c-b7f1-49d2-a1af-9316eec88e33","type":"VBar"},"selection_glyph":null,"view":{"id":"4b0ba066-12bf-4e16-a8b1-f559792331c9","type":"CDSView"}},"id":"70cadc36-df0d-4464-b724-d55be27f67a2","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"45fdc25c-8910-44fa-a194-aec28dc5d30c","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"ce51e3e1-5bd7-4189-bb82-49fbbcdf78fd","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"4cfd8c71-77b2-4b76-a092-738bcd0f6991","type":"VBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"eb0337ca-4136-48e7-8ef6-c52435bb0dc5","type":"Stack"},{"attributes":{},"id":"67f405e5-e4bb-46f5-9a9f-620602879b73","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"c7d8ed59-fccd-442a-984c-84863d2190cd","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"eb0337ca-4136-48e7-8ef6-c52435bb0dc5","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2f66eb1c-b7f1-49d2-a1af-9316eec88e33","type":"VBar"},{"attributes":{"formatter":{"id":"67f405e5-e4bb-46f5-9a9f-620602879b73","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"29cc5db1-c7a4-4f9f-a214-33ae35882471","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5650efb-8a44-432a-810f-b4eac8e6a1fb","type":"CategoricalTicker"}},"id":"cdf8fc3a-d726-42c7-b552-9a8e29148900","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"29cc5db1-c7a4-4f9f-a214-33ae35882471","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5650efb-8a44-432a-810f-b4eac8e6a1fb","type":"CategoricalTicker"}},"id":"628d284c-b3e4-4bcf-9a98-8604f3602977","type":"Grid"}],"root_ids":["29cc5db1-c7a4-4f9f-a214-33ae35882471"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"3eaffc2b-cac9-4f05-b737-2a765017e12c","elementid":"ffd6049c-2175-4684-a9b6-43838e80dd15","modelid":"29cc5db1-c7a4-4f9f-a214-33ae35882471"}];
                
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
