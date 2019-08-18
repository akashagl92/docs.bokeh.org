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
      };var element = document.getElementById("7dcec00a-dda1-49f8-891b-8f4e26ac5998");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7dcec00a-dda1-49f8-891b-8f4e26ac5998' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a5dd61bc-3f25-47e0-b106-144a4ffe80d7":{"roots":{"references":[{"attributes":{},"id":"69b7e67f-45d3-47ab-aa4d-108ffbcca4eb","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6d2c19da-d4e3-4ceb-8dce-02ceac2f762d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c4f113e1-66e0-488a-9558-e4838cb30e6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d2c19da-d4e3-4ceb-8dce-02ceac2f762d","type":"BasicTicker"}},"id":"7eda5d52-8c4c-423b-8562-2f9cac03fa65","type":"Grid"},{"attributes":{},"id":"fcc56c69-286f-45e1-a98f-ba369cd55f0b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]}},"id":"738b1439-0f87-4d5c-a3e9-28eef2e89044","type":"ColumnDataSource"},{"attributes":{"source":{"id":"738b1439-0f87-4d5c-a3e9-28eef2e89044","type":"ColumnDataSource"}},"id":"cb1b4871-2375-48a3-8e61-b32a1fccdd99","type":"CDSView"},{"attributes":{"data_source":{"id":"738b1439-0f87-4d5c-a3e9-28eef2e89044","type":"ColumnDataSource"},"glyph":{"id":"1efda39c-badb-4901-b77a-86f92256caa4","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e0dfb761-20bd-46d8-a993-e52e67ece775","type":"VBar"},"selection_glyph":null,"view":{"id":"cb1b4871-2375-48a3-8e61-b32a1fccdd99","type":"CDSView"}},"id":"f1e4da5d-120f-4b04-b026-0ebbce0f5c5c","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c4f113e1-66e0-488a-9558-e4838cb30e6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"127de838-2a6c-496f-b55e-a0479e8b3b97","type":"CategoricalTicker"}},"id":"4b3734a1-1b0f-4806-b4d1-d35df8dce7f2","type":"Grid"},{"attributes":{"callback":null,"start":0},"id":"5b88d912-924b-4b71-9af5-8aaaaba94779","type":"DataRange1d"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"9787ac51-676a-44e2-a3fc-cc4fd20fe297","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"e0dfb761-20bd-46d8-a993-e52e67ece775","type":"VBar"},{"attributes":{},"id":"765d6c2f-020c-4a1f-ba85-78c3e5478a02","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"b745aa35-46f5-4e1d-8427-c4047a06718b","type":"Title"},{"attributes":{"formatter":{"id":"fcc56c69-286f-45e1-a98f-ba369cd55f0b","type":"BasicTickFormatter"},"plot":{"id":"c4f113e1-66e0-488a-9558-e4838cb30e6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d2c19da-d4e3-4ceb-8dce-02ceac2f762d","type":"BasicTicker"}},"id":"43d689a2-41fc-49a6-b54d-3b2b9a6b177c","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"1efda39c-badb-4901-b77a-86f92256caa4","type":"VBar"},{"attributes":{"formatter":{"id":"69b7e67f-45d3-47ab-aa4d-108ffbcca4eb","type":"CategoricalTickFormatter"},"plot":{"id":"c4f113e1-66e0-488a-9558-e4838cb30e6c","subtype":"Figure","type":"Plot"},"ticker":{"id":"127de838-2a6c-496f-b55e-a0479e8b3b97","type":"CategoricalTicker"}},"id":"50e25330-d138-4426-9ac3-8a46de58f5d3","type":"CategoricalAxis"},{"attributes":{},"id":"127de838-2a6c-496f-b55e-a0479e8b3b97","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a7d5ad2a-c8da-44b4-9e59-e779667c7d8d","type":"Toolbar"},{"attributes":{},"id":"618aa3bc-9492-4b20-bbc9-f77552a3aa5d","type":"LinearScale"},{"attributes":{"below":[{"id":"50e25330-d138-4426-9ac3-8a46de58f5d3","type":"CategoricalAxis"}],"left":[{"id":"43d689a2-41fc-49a6-b54d-3b2b9a6b177c","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"50e25330-d138-4426-9ac3-8a46de58f5d3","type":"CategoricalAxis"},{"id":"4b3734a1-1b0f-4806-b4d1-d35df8dce7f2","type":"Grid"},{"id":"43d689a2-41fc-49a6-b54d-3b2b9a6b177c","type":"LinearAxis"},{"id":"7eda5d52-8c4c-423b-8562-2f9cac03fa65","type":"Grid"},{"id":"f1e4da5d-120f-4b04-b026-0ebbce0f5c5c","type":"GlyphRenderer"}],"title":{"id":"b745aa35-46f5-4e1d-8427-c4047a06718b","type":"Title"},"toolbar":{"id":"a7d5ad2a-c8da-44b4-9e59-e779667c7d8d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9787ac51-676a-44e2-a3fc-cc4fd20fe297","type":"FactorRange"},"x_scale":{"id":"765d6c2f-020c-4a1f-ba85-78c3e5478a02","type":"CategoricalScale"},"y_range":{"id":"5b88d912-924b-4b71-9af5-8aaaaba94779","type":"DataRange1d"},"y_scale":{"id":"618aa3bc-9492-4b20-bbc9-f77552a3aa5d","type":"LinearScale"}},"id":"c4f113e1-66e0-488a-9558-e4838cb30e6c","subtype":"Figure","type":"Plot"}],"root_ids":["c4f113e1-66e0-488a-9558-e4838cb30e6c"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"a5dd61bc-3f25-47e0-b106-144a4ffe80d7","elementid":"7dcec00a-dda1-49f8-891b-8f4e26ac5998","modelid":"c4f113e1-66e0-488a-9558-e4838cb30e6c"}];
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