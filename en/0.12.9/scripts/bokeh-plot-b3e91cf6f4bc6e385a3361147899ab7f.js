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
      };var element = document.getElementById("ebd1feaa-cd69-4d1c-8a7f-bc87219e1b33");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ebd1feaa-cd69-4d1c-8a7f-bc87219e1b33' but no matching script tag was found. ")
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
                    var docs_json = {"da0b6031-5501-4105-9793-85586d6e6310":{"roots":{"references":[{"attributes":{"plot":{"id":"9c8089d4-1af3-4d2e-83db-cf573b709d15","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9f0b602-24d5-49cb-942c-5e4e25c6ddb6","type":"BasicTicker"}},"id":"a7f68428-0da7-44d1-9ba4-7c124c81a9e4","type":"Grid"},{"attributes":{"callback":null},"id":"181831a7-47d5-4aa6-9b9d-c724e231fa20","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"9c8089d4-1af3-4d2e-83db-cf573b709d15","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed18456c-ad45-44b6-9d4a-67cc716be632","type":"BasicTicker"}},"id":"0f9582b8-836a-442b-af98-74b081d166ae","type":"Grid"},{"attributes":{"source":{"id":"cb190fdd-a0a1-4129-a549-3215faf04327","type":"ColumnDataSource"}},"id":"d347d38a-142a-4b33-bab5-b27c77c20a63","type":"CDSView"},{"attributes":{"below":[{"id":"c3c544ec-b88b-4624-b548-dd7e9322ee57","type":"LinearAxis"}],"left":[{"id":"b9192a64-766c-4a57-aa95-77543dedbe5d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c3c544ec-b88b-4624-b548-dd7e9322ee57","type":"LinearAxis"},{"id":"a7f68428-0da7-44d1-9ba4-7c124c81a9e4","type":"Grid"},{"id":"b9192a64-766c-4a57-aa95-77543dedbe5d","type":"LinearAxis"},{"id":"0f9582b8-836a-442b-af98-74b081d166ae","type":"Grid"},{"id":"e53f3177-af10-4230-99f8-868841edad72","type":"GlyphRenderer"}],"title":{"id":"2e3bb3a3-75f4-4a3b-b89a-80352b13027e","type":"Title"},"toolbar":{"id":"bb7ee4f3-4f89-4163-bd26-7bcda34da096","type":"Toolbar"},"x_range":{"id":"181831a7-47d5-4aa6-9b9d-c724e231fa20","type":"DataRange1d"},"x_scale":{"id":"3bbb9585-f1eb-41b1-972f-ba22448b810d","type":"LinearScale"},"y_range":{"id":"a7b5545a-9c70-4738-abbf-b12bbcfcad26","type":"DataRange1d"},"y_scale":{"id":"aa3f5b51-d7b0-40e6-a752-54eba31167be","type":"LinearScale"}},"id":"9c8089d4-1af3-4d2e-83db-cf573b709d15","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c9f0b602-24d5-49cb-942c-5e4e25c6ddb6","type":"BasicTicker"},{"attributes":{},"id":"aa3f5b51-d7b0-40e6-a752-54eba31167be","type":"LinearScale"},{"attributes":{},"id":"0c72c510-4ce4-4ff9-bdce-ea451a557818","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"18ffe53f-0734-481b-a1da-3bca4c5758b7","type":"HoverTool"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"2e3bb3a3-75f4-4a3b-b89a-80352b13027e","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f56804b5-e516-474f-84ac-0cf481c8b8db","type":"Circle"},{"attributes":{},"id":"3bbb9585-f1eb-41b1-972f-ba22448b810d","type":"LinearScale"},{"attributes":{"callback":null},"id":"a7b5545a-9c70-4738-abbf-b12bbcfcad26","type":"DataRange1d"},{"attributes":{},"id":"ed18456c-ad45-44b6-9d4a-67cc716be632","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d782c6c8-b9a6-4edd-9366-8c7a8ff2dfe4","type":"BasicTickFormatter"},"plot":{"id":"9c8089d4-1af3-4d2e-83db-cf573b709d15","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed18456c-ad45-44b6-9d4a-67cc716be632","type":"BasicTicker"}},"id":"b9192a64-766c-4a57-aa95-77543dedbe5d","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"18ffe53f-0734-481b-a1da-3bca4c5758b7","type":"HoverTool"}]},"id":"bb7ee4f3-4f89-4163-bd26-7bcda34da096","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y","desc"],"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"cb190fdd-a0a1-4129-a549-3215faf04327","type":"ColumnDataSource"},{"attributes":{},"id":"d782c6c8-b9a6-4edd-9366-8c7a8ff2dfe4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"cb190fdd-a0a1-4129-a549-3215faf04327","type":"ColumnDataSource"},"glyph":{"id":"f56804b5-e516-474f-84ac-0cf481c8b8db","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13aeb51e-9a71-4c46-811c-8cdc55a05f1a","type":"Circle"},"selection_glyph":null,"view":{"id":"d347d38a-142a-4b33-bab5-b27c77c20a63","type":"CDSView"}},"id":"e53f3177-af10-4230-99f8-868841edad72","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0c72c510-4ce4-4ff9-bdce-ea451a557818","type":"BasicTickFormatter"},"plot":{"id":"9c8089d4-1af3-4d2e-83db-cf573b709d15","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9f0b602-24d5-49cb-942c-5e4e25c6ddb6","type":"BasicTicker"}},"id":"c3c544ec-b88b-4624-b548-dd7e9322ee57","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"13aeb51e-9a71-4c46-811c-8cdc55a05f1a","type":"Circle"}],"root_ids":["9c8089d4-1af3-4d2e-83db-cf573b709d15"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"da0b6031-5501-4105-9793-85586d6e6310","elementid":"ebd1feaa-cd69-4d1c-8a7f-bc87219e1b33","modelid":"9c8089d4-1af3-4d2e-83db-cf573b709d15"}];
                
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
