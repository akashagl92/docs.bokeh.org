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
      };var element = document.getElementById("c6e4cec5-5619-46ab-9315-f7339ec7bfe3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6e4cec5-5619-46ab-9315-f7339ec7bfe3' but no matching script tag was found. ")
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
                    var docs_json = {"2e1bc270-b952-4ec4-87ef-0a97ee84fe3c":{"roots":{"references":[{"attributes":{"plot":{"id":"ff6f8d2e-1db5-4961-b3d0-06f6222e329f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4905d373-89b9-404a-985b-03788483ef37","type":"BasicTicker"}},"id":"538db5db-a748-4a50-8438-7eae1e82cc81","type":"Grid"},{"attributes":{},"id":"4847cea0-82cf-48cd-a006-5e5bf669de8b","type":"BasicTickFormatter"},{"attributes":{},"id":"10724044-fa80-45eb-a537-643efec9627d","type":"BasicTicker"},{"attributes":{},"id":"63e15cef-2e20-455b-9f44-90ce29c794bf","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6a50abd5-90d1-494a-9f4f-e041b46ed845","type":"DataRange1d"},{"attributes":{},"id":"296aea27-f6f9-4e6a-b4d6-383195f45665","type":"LinearScale"},{"attributes":{},"id":"b5243c20-aed0-41fc-b58e-795736679c64","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"13142e40-7294-40cb-a082-72ef9129449a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"63e15cef-2e20-455b-9f44-90ce29c794bf","type":"BasicTickFormatter"},"plot":{"id":"ff6f8d2e-1db5-4961-b3d0-06f6222e329f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4905d373-89b9-404a-985b-03788483ef37","type":"BasicTicker"}},"id":"cbe05e6a-5ae1-470a-845f-c906f96951fc","type":"LinearAxis"},{"attributes":{"data_source":{"id":"13142e40-7294-40cb-a082-72ef9129449a","type":"ColumnDataSource"},"glyph":{"id":"dc864813-b41d-4e9d-bd74-4381d2decf5c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cf0389d8-b1c8-4022-8785-0029b479a3f5","type":"Circle"},"selection_glyph":null,"view":{"id":"fe971077-e2fc-4b91-b9bd-08d3e72ced02","type":"CDSView"}},"id":"9cb4b7b7-951a-4abc-b42f-eefb001ddd1e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc864813-b41d-4e9d-bd74-4381d2decf5c","type":"Circle"},{"attributes":{"below":[{"id":"cbe05e6a-5ae1-470a-845f-c906f96951fc","type":"LinearAxis"}],"left":[{"id":"21b98f6b-1ea8-4739-ba04-bcf12bc8d111","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cbe05e6a-5ae1-470a-845f-c906f96951fc","type":"LinearAxis"},{"id":"538db5db-a748-4a50-8438-7eae1e82cc81","type":"Grid"},{"id":"21b98f6b-1ea8-4739-ba04-bcf12bc8d111","type":"LinearAxis"},{"id":"45aadd7f-1783-47e4-a81a-2806c68f27b8","type":"Grid"},{"id":"9cb4b7b7-951a-4abc-b42f-eefb001ddd1e","type":"GlyphRenderer"}],"title":{"id":"b3423b0c-cc28-4db2-8a65-1f606ac9b178","type":"Title"},"toolbar":{"id":"4e0c93dc-7527-46f1-8c94-fcd246ba4994","type":"Toolbar"},"x_range":{"id":"6a50abd5-90d1-494a-9f4f-e041b46ed845","type":"DataRange1d"},"x_scale":{"id":"b5243c20-aed0-41fc-b58e-795736679c64","type":"LinearScale"},"y_range":{"id":"ca019a30-a110-4cc4-b8cd-4b09efd7315f","type":"DataRange1d"},"y_scale":{"id":"296aea27-f6f9-4e6a-b4d6-383195f45665","type":"LinearScale"}},"id":"ff6f8d2e-1db5-4961-b3d0-06f6222e329f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4905d373-89b9-404a-985b-03788483ef37","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf0389d8-b1c8-4022-8785-0029b479a3f5","type":"Circle"},{"attributes":{},"id":"74cbdd7d-e0b6-48f8-aaee-ced8b8a44807","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"ff6f8d2e-1db5-4961-b3d0-06f6222e329f","subtype":"Figure","type":"Plot"},"ticker":{"id":"10724044-fa80-45eb-a537-643efec9627d","type":"BasicTicker"}},"id":"45aadd7f-1783-47e4-a81a-2806c68f27b8","type":"Grid"},{"attributes":{"source":{"id":"13142e40-7294-40cb-a082-72ef9129449a","type":"ColumnDataSource"}},"id":"fe971077-e2fc-4b91-b9bd-08d3e72ced02","type":"CDSView"},{"attributes":{},"id":"d7a6826f-d75c-4ffe-b3ab-1959e4b9fec8","type":"ResetTool"},{"attributes":{},"id":"747f5d7e-3fc8-468e-a423-7e7cdbedbd8a","type":"SaveTool"},{"attributes":{"formatter":{"id":"4847cea0-82cf-48cd-a006-5e5bf669de8b","type":"BasicTickFormatter"},"plot":{"id":"ff6f8d2e-1db5-4961-b3d0-06f6222e329f","subtype":"Figure","type":"Plot"},"ticker":{"id":"10724044-fa80-45eb-a537-643efec9627d","type":"BasicTicker"}},"id":"21b98f6b-1ea8-4739-ba04-bcf12bc8d111","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"74cbdd7d-e0b6-48f8-aaee-ced8b8a44807","type":"PanTool"},{"id":"d7a6826f-d75c-4ffe-b3ab-1959e4b9fec8","type":"ResetTool"},{"id":"747f5d7e-3fc8-468e-a423-7e7cdbedbd8a","type":"SaveTool"}]},"id":"4e0c93dc-7527-46f1-8c94-fcd246ba4994","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"b3423b0c-cc28-4db2-8a65-1f606ac9b178","type":"Title"},{"attributes":{"callback":null},"id":"ca019a30-a110-4cc4-b8cd-4b09efd7315f","type":"DataRange1d"}],"root_ids":["ff6f8d2e-1db5-4961-b3d0-06f6222e329f"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2e1bc270-b952-4ec4-87ef-0a97ee84fe3c","elementid":"c6e4cec5-5619-46ab-9315-f7339ec7bfe3","modelid":"ff6f8d2e-1db5-4961-b3d0-06f6222e329f"}];
                
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
