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
      };var element = document.getElementById("2a5e357e-b52f-4401-870a-f7bfe4952304");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2a5e357e-b52f-4401-870a-f7bfe4952304' but no matching script tag was found. ")
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
                    var docs_json = {"aee61073-561e-4ccf-9d9a-96a425c49723":{"roots":{"references":[{"attributes":{"source":{"id":"bd4e39e8-12ef-4556-8256-a7ab1ae98ff2","type":"ColumnDataSource"}},"id":"e1c50f8e-92f7-4d3b-818c-a551297a0a5d","type":"CDSView"},{"attributes":{"formatter":{"id":"8cf4e832-b4b8-4b95-949d-d318cb83481a","type":"CategoricalTickFormatter"},"plot":{"id":"f74c7db0-2663-448e-a8d4-a749645f8b9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a39c0159-7249-4bf3-804c-4697bb683b42","type":"CategoricalTicker"}},"id":"3a73f075-6eea-47ee-9aec-674c6870c66f","type":"CategoricalAxis"},{"attributes":{"below":[{"id":"3a73f075-6eea-47ee-9aec-674c6870c66f","type":"CategoricalAxis"}],"left":[{"id":"2f5c9eec-945f-490e-b1d1-e4b4761fa243","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"3a73f075-6eea-47ee-9aec-674c6870c66f","type":"CategoricalAxis"},{"id":"65b82057-a70b-4c83-9f87-76b118a25b16","type":"Grid"},{"id":"2f5c9eec-945f-490e-b1d1-e4b4761fa243","type":"LinearAxis"},{"id":"9172b94e-a44b-4fc6-b75a-d1ec22430bdc","type":"Grid"},{"id":"b6d01a9f-eece-4cfe-96a8-e17d6c600863","type":"GlyphRenderer"}],"title":{"id":"87685633-ef97-4cd1-8144-c63465eeba2a","type":"Title"},"toolbar":{"id":"1f859099-282d-439a-a848-97d698788cae","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"39de8577-2315-4414-b99b-af17c27ce18a","type":"FactorRange"},"x_scale":{"id":"f877de04-76fe-445b-876b-71ed62cdbb0e","type":"CategoricalScale"},"y_range":{"id":"06cca199-0f3c-41cf-949a-75b009d9e6bb","type":"DataRange1d"},"y_scale":{"id":"a45860de-79e2-4a2c-8e9e-4a59c7729ca8","type":"LinearScale"}},"id":"f74c7db0-2663-448e-a8d4-a749645f8b9e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"start":0},"id":"06cca199-0f3c-41cf-949a-75b009d9e6bb","type":"DataRange1d"},{"attributes":{},"id":"faa59774-d811-4183-9fbf-ffdca43da404","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1f859099-282d-439a-a848-97d698788cae","type":"Toolbar"},{"attributes":{"formatter":{"id":"faa59774-d811-4183-9fbf-ffdca43da404","type":"BasicTickFormatter"},"plot":{"id":"f74c7db0-2663-448e-a8d4-a749645f8b9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"de93f287-3ead-452a-acd9-7910567dccae","type":"BasicTicker"}},"id":"2f5c9eec-945f-490e-b1d1-e4b4761fa243","type":"LinearAxis"},{"attributes":{},"id":"a45860de-79e2-4a2c-8e9e-4a59c7729ca8","type":"LinearScale"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"87685633-ef97-4cd1-8144-c63465eeba2a","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"39de8577-2315-4414-b99b-af17c27ce18a","type":"FactorRange"},{"attributes":{},"id":"de93f287-3ead-452a-acd9-7910567dccae","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f74c7db0-2663-448e-a8d4-a749645f8b9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"de93f287-3ead-452a-acd9-7910567dccae","type":"BasicTicker"}},"id":"9172b94e-a44b-4fc6-b75a-d1ec22430bdc","type":"Grid"},{"attributes":{},"id":"f877de04-76fe-445b-876b-71ed62cdbb0e","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"7eee028d-12e1-45b3-aa71-0275888bd713","type":"VBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"30ccedd3-60c6-47b6-bb65-1ddc507d4182","type":"VBar"},{"attributes":{"data_source":{"id":"bd4e39e8-12ef-4556-8256-a7ab1ae98ff2","type":"ColumnDataSource"},"glyph":{"id":"30ccedd3-60c6-47b6-bb65-1ddc507d4182","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7eee028d-12e1-45b3-aa71-0275888bd713","type":"VBar"},"selection_glyph":null,"view":{"id":"e1c50f8e-92f7-4d3b-818c-a551297a0a5d","type":"CDSView"}},"id":"b6d01a9f-eece-4cfe-96a8-e17d6c600863","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"f74c7db0-2663-448e-a8d4-a749645f8b9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"a39c0159-7249-4bf3-804c-4697bb683b42","type":"CategoricalTicker"}},"id":"65b82057-a70b-4c83-9f87-76b118a25b16","type":"Grid"},{"attributes":{},"id":"a39c0159-7249-4bf3-804c-4697bb683b42","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"bd4e39e8-12ef-4556-8256-a7ab1ae98ff2","type":"ColumnDataSource"},{"attributes":{},"id":"8cf4e832-b4b8-4b95-949d-d318cb83481a","type":"CategoricalTickFormatter"}],"root_ids":["f74c7db0-2663-448e-a8d4-a749645f8b9e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"aee61073-561e-4ccf-9d9a-96a425c49723","elementid":"2a5e357e-b52f-4401-870a-f7bfe4952304","modelid":"f74c7db0-2663-448e-a8d4-a749645f8b9e"}];
                
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
