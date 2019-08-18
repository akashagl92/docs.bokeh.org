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
      };var element = document.getElementById("4eecf039-336e-4312-8b4a-20dbf47a3593");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4eecf039-336e-4312-8b4a-20dbf47a3593' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7dfd4f5e-c663-4ce8-84ae-e3b1e9c4bee7":{"roots":{"references":[{"attributes":{"data_source":{"id":"89329748-3b79-4945-af6c-48dcc8de4b51","type":"ColumnDataSource"},"glyph":{"id":"40743cc3-be7a-4eb0-a87c-86a7e68bc7de","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9f0df999-3574-4304-a7ca-f723161beb44","type":"VBar"},"selection_glyph":null,"view":{"id":"1b7819c7-0aa0-4993-a175-7e64e87fef58","type":"CDSView"}},"id":"ee9b7e81-4996-4bfa-9b24-5c066cdd7b81","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"9f0df999-3574-4304-a7ca-f723161beb44","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c026e5a7-5f15-4ff9-955c-69f735331d4c","subtype":"Figure","type":"Plot"},"ticker":{"id":"dcfedb11-f335-4cfa-93eb-ac77c8ce224c","type":"CategoricalTicker"}},"id":"93f3dd21-9a0a-418e-a168-1d3122ed1502","type":"Grid"},{"attributes":{},"id":"c41ef526-e0e1-4acd-98e4-ac2934bf643c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c026e5a7-5f15-4ff9-955c-69f735331d4c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c41ef526-e0e1-4acd-98e4-ac2934bf643c","type":"BasicTicker"}},"id":"1b93ddea-6dd7-4b1a-b026-fbdbe930cb46","type":"Grid"},{"attributes":{},"id":"6ec8ff69-3a19-4218-a5a1-307f132bc1a1","type":"LinearScale"},{"attributes":{},"id":"040d3e0d-6d16-48a5-b63c-b4a2170273f8","type":"CategoricalScale"},{"attributes":{"source":{"id":"89329748-3b79-4945-af6c-48dcc8de4b51","type":"ColumnDataSource"}},"id":"1b7819c7-0aa0-4993-a175-7e64e87fef58","type":"CDSView"},{"attributes":{"below":[{"id":"db159fb6-5843-4cf6-adb4-767808140229","type":"CategoricalAxis"}],"left":[{"id":"b2bc6924-06b8-43f4-8a42-a4fe83f0f2fd","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"db159fb6-5843-4cf6-adb4-767808140229","type":"CategoricalAxis"},{"id":"93f3dd21-9a0a-418e-a168-1d3122ed1502","type":"Grid"},{"id":"b2bc6924-06b8-43f4-8a42-a4fe83f0f2fd","type":"LinearAxis"},{"id":"1b93ddea-6dd7-4b1a-b026-fbdbe930cb46","type":"Grid"},{"id":"ee9b7e81-4996-4bfa-9b24-5c066cdd7b81","type":"GlyphRenderer"}],"title":{"id":"7fd6590a-1d7b-44ea-a491-68b8a6469a8c","type":"Title"},"toolbar":{"id":"704acdff-3fac-43a6-b1a7-64db084600bc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"963238ce-a407-41ba-ae63-180a42ec3c91","type":"FactorRange"},"x_scale":{"id":"040d3e0d-6d16-48a5-b63c-b4a2170273f8","type":"CategoricalScale"},"y_range":{"id":"508f9a70-3c80-4169-81aa-f49ba4feb0c4","type":"DataRange1d"},"y_scale":{"id":"6ec8ff69-3a19-4218-a5a1-307f132bc1a1","type":"LinearScale"}},"id":"c026e5a7-5f15-4ff9-955c-69f735331d4c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b0201bee-5518-4b94-b77e-534dfa3d6f2d","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"89329748-3b79-4945-af6c-48dcc8de4b51","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"7fd6590a-1d7b-44ea-a491-68b8a6469a8c","type":"Title"},{"attributes":{},"id":"dcfedb11-f335-4cfa-93eb-ac77c8ce224c","type":"CategoricalTicker"},{"attributes":{},"id":"455faf95-6d2c-483a-bdc5-12c0b32bd95b","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"704acdff-3fac-43a6-b1a7-64db084600bc","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"963238ce-a407-41ba-ae63-180a42ec3c91","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"40743cc3-be7a-4eb0-a87c-86a7e68bc7de","type":"VBar"},{"attributes":{"formatter":{"id":"455faf95-6d2c-483a-bdc5-12c0b32bd95b","type":"BasicTickFormatter"},"plot":{"id":"c026e5a7-5f15-4ff9-955c-69f735331d4c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c41ef526-e0e1-4acd-98e4-ac2934bf643c","type":"BasicTicker"}},"id":"b2bc6924-06b8-43f4-8a42-a4fe83f0f2fd","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b0201bee-5518-4b94-b77e-534dfa3d6f2d","type":"CategoricalTickFormatter"},"plot":{"id":"c026e5a7-5f15-4ff9-955c-69f735331d4c","subtype":"Figure","type":"Plot"},"ticker":{"id":"dcfedb11-f335-4cfa-93eb-ac77c8ce224c","type":"CategoricalTicker"}},"id":"db159fb6-5843-4cf6-adb4-767808140229","type":"CategoricalAxis"},{"attributes":{"callback":null,"start":0},"id":"508f9a70-3c80-4169-81aa-f49ba4feb0c4","type":"DataRange1d"}],"root_ids":["c026e5a7-5f15-4ff9-955c-69f735331d4c"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"7dfd4f5e-c663-4ce8-84ae-e3b1e9c4bee7","elementid":"4eecf039-336e-4312-8b4a-20dbf47a3593","modelid":"c026e5a7-5f15-4ff9-955c-69f735331d4c"}];
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