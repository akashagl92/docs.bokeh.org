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
      };var element = document.getElementById("f4cf074d-2d81-41e4-a4ce-be3e09bf68b0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f4cf074d-2d81-41e4-a4ce-be3e09bf68b0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"6a540dda-5f0e-4a60-b128-b7bff40bf924":{"roots":{"references":[{"attributes":{"formatter":{"id":"d28801ad-8f4f-4d91-8d6a-9b98d820634d","type":"BasicTickFormatter"},"plot":{"id":"e32320e2-f3bc-459e-b2de-3cb6a0ac574a","subtype":"Figure","type":"Plot"},"ticker":{"id":"01d1258b-2f5e-45d2-a6e3-391d383e4eb7","type":"BasicTicker"}},"id":"559a1f1a-5498-40f2-b647-a0d255d6d597","type":"LinearAxis"},{"attributes":{},"id":"bafadbc2-2170-415f-92aa-297fde95d86a","type":"LinearScale"},{"attributes":{},"id":"d28801ad-8f4f-4d91-8d6a-9b98d820634d","type":"BasicTickFormatter"},{"attributes":{},"id":"473dfa3c-b248-488a-9178-cff24b0e43ef","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"12273726-7a70-4e8c-87cb-6d217eb0ea52","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a816b9f0-c758-4a84-b62e-0bc4384ea14e","type":"Toolbar"},{"attributes":{},"id":"22029d12-17a6-455b-8895-f8c5a9202f27","type":"CategoricalScale"},{"attributes":{},"id":"01d1258b-2f5e-45d2-a6e3-391d383e4eb7","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"0f3b899b-53d3-47e0-8d51-29dea8b680a4","type":"Title"},{"attributes":{"formatter":{"id":"473dfa3c-b248-488a-9178-cff24b0e43ef","type":"CategoricalTickFormatter"},"plot":{"id":"e32320e2-f3bc-459e-b2de-3cb6a0ac574a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c220fafc-b704-4292-bb3c-f336c410b3af","type":"CategoricalTicker"}},"id":"b1e62550-f827-43c4-8a2c-cc1d1b6d239e","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"c22bf432-7404-4b05-9df4-4782259c3200","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"6ec4c945-3bae-4691-99d9-678379760426","type":"DataRange1d"},{"attributes":{"source":{"id":"31cd374b-0350-42b8-8174-53af1369bda4","type":"ColumnDataSource"}},"id":"d7796ec4-19e3-4c31-8ce0-618d33d833cf","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"e32320e2-f3bc-459e-b2de-3cb6a0ac574a","subtype":"Figure","type":"Plot"},"ticker":{"id":"01d1258b-2f5e-45d2-a6e3-391d383e4eb7","type":"BasicTicker"}},"id":"5af74ebf-021e-4520-a0e2-9a91090f8935","type":"Grid"},{"attributes":{"below":[{"id":"b1e62550-f827-43c4-8a2c-cc1d1b6d239e","type":"CategoricalAxis"}],"left":[{"id":"559a1f1a-5498-40f2-b647-a0d255d6d597","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"b1e62550-f827-43c4-8a2c-cc1d1b6d239e","type":"CategoricalAxis"},{"id":"debec906-9e1f-4e22-9b04-50859e828dbb","type":"Grid"},{"id":"559a1f1a-5498-40f2-b647-a0d255d6d597","type":"LinearAxis"},{"id":"5af74ebf-021e-4520-a0e2-9a91090f8935","type":"Grid"},{"id":"ce1a7a83-0336-4307-ac01-70a3ac3c50d1","type":"GlyphRenderer"}],"title":{"id":"0f3b899b-53d3-47e0-8d51-29dea8b680a4","type":"Title"},"toolbar":{"id":"a816b9f0-c758-4a84-b62e-0bc4384ea14e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"12273726-7a70-4e8c-87cb-6d217eb0ea52","type":"FactorRange"},"x_scale":{"id":"22029d12-17a6-455b-8895-f8c5a9202f27","type":"CategoricalScale"},"y_range":{"id":"6ec4c945-3bae-4691-99d9-678379760426","type":"DataRange1d"},"y_scale":{"id":"bafadbc2-2170-415f-92aa-297fde95d86a","type":"LinearScale"}},"id":"e32320e2-f3bc-459e-b2de-3cb6a0ac574a","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"31cd374b-0350-42b8-8174-53af1369bda4","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e32320e2-f3bc-459e-b2de-3cb6a0ac574a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c220fafc-b704-4292-bb3c-f336c410b3af","type":"CategoricalTicker"}},"id":"debec906-9e1f-4e22-9b04-50859e828dbb","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"66706b4b-19cc-4b7f-a97f-8c358782bea5","type":"VBar"},{"attributes":{},"id":"c220fafc-b704-4292-bb3c-f336c410b3af","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"31cd374b-0350-42b8-8174-53af1369bda4","type":"ColumnDataSource"},"glyph":{"id":"c22bf432-7404-4b05-9df4-4782259c3200","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66706b4b-19cc-4b7f-a97f-8c358782bea5","type":"VBar"},"selection_glyph":null,"view":{"id":"d7796ec4-19e3-4c31-8ce0-618d33d833cf","type":"CDSView"}},"id":"ce1a7a83-0336-4307-ac01-70a3ac3c50d1","type":"GlyphRenderer"}],"root_ids":["e32320e2-f3bc-459e-b2de-3cb6a0ac574a"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"6a540dda-5f0e-4a60-b128-b7bff40bf924","elementid":"f4cf074d-2d81-41e4-a4ce-be3e09bf68b0","modelid":"e32320e2-f3bc-459e-b2de-3cb6a0ac574a"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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