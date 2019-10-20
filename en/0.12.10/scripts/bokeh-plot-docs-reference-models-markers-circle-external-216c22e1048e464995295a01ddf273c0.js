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
      };var element = document.getElementById("ab547e3b-aa80-4265-9b04-9b20fd586d88");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab547e3b-aa80-4265-9b04-9b20fd586d88' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"eaf976f0-3e20-4415-a894-5811f97a6962":{"roots":{"references":[{"attributes":{},"id":"3f3a92ae-a334-4565-a8c3-559d5bd71f0b","type":"LinearScale"},{"attributes":{},"id":"431ea3af-7e5c-41ae-9002-57fec2af33bf","type":"BasicTicker"},{"attributes":{"plot":{"id":"9acd3696-7217-49c1-ab6c-82aa2a9a4110","type":"Plot"},"ticker":{"id":"37f5c527-d179-413e-8625-d4559bc015d9","type":"BasicTicker"}},"id":"d9c1e0b2-09a2-4312-bc6a-d89b173877ab","type":"Grid"},{"attributes":{},"id":"a57dbe86-4ae6-401e-bd3c-d04a98147d4f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d01f47a3-c24b-45b6-9f01-8d0bd962fd53","type":"BasicTickFormatter"},"plot":{"id":"9acd3696-7217-49c1-ab6c-82aa2a9a4110","type":"Plot"},"ticker":{"id":"431ea3af-7e5c-41ae-9002-57fec2af33bf","type":"BasicTicker"}},"id":"cb50d6e9-737b-4711-9b50-1488ae13a95a","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"593b096b-ea38-447b-8e6d-a23b8b8c4bfa","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"fdb1071f-4913-4b00-b598-afdc76ec80e4","type":"ColumnDataSource"},{"attributes":{},"id":"37f5c527-d179-413e-8625-d4559bc015d9","type":"BasicTicker"},{"attributes":{"data_source":{"id":"fdb1071f-4913-4b00-b598-afdc76ec80e4","type":"ColumnDataSource"},"glyph":{"id":"593b096b-ea38-447b-8e6d-a23b8b8c4bfa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0826cd3c-a1d1-4871-9e9e-488f466cf68c","type":"CDSView"}},"id":"b394c6d9-8f26-4313-8d21-9de2fcc7b443","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"74e5edaa-72c7-44d0-a336-27dcf6192bbb","type":"DataRange1d"},{"attributes":{},"id":"d01f47a3-c24b-45b6-9f01-8d0bd962fd53","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"32dc142f-e65a-4326-94ac-94bf5c92e0cb","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"cb50d6e9-737b-4711-9b50-1488ae13a95a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b394c6d9-8f26-4313-8d21-9de2fcc7b443","type":"GlyphRenderer"},{"id":"32dc142f-e65a-4326-94ac-94bf5c92e0cb","type":"LinearAxis"},{"id":"cb50d6e9-737b-4711-9b50-1488ae13a95a","type":"LinearAxis"},{"id":"d9c1e0b2-09a2-4312-bc6a-d89b173877ab","type":"Grid"},{"id":"958f24d4-655f-4fd7-afa9-2626d943c189","type":"Grid"}],"title":null,"toolbar":{"id":"c4a66519-05ed-45a6-a0a2-0c98bea24e13","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"89eacaa3-0116-4fe0-b7c6-ad59fad72b4f","type":"DataRange1d"},"x_scale":{"id":"3f3a92ae-a334-4565-a8c3-559d5bd71f0b","type":"LinearScale"},"y_range":{"id":"74e5edaa-72c7-44d0-a336-27dcf6192bbb","type":"DataRange1d"},"y_scale":{"id":"02d8392c-3547-4e16-bac3-ecc4379e92bf","type":"LinearScale"}},"id":"9acd3696-7217-49c1-ab6c-82aa2a9a4110","type":"Plot"},{"attributes":{"formatter":{"id":"a57dbe86-4ae6-401e-bd3c-d04a98147d4f","type":"BasicTickFormatter"},"plot":{"id":"9acd3696-7217-49c1-ab6c-82aa2a9a4110","type":"Plot"},"ticker":{"id":"37f5c527-d179-413e-8625-d4559bc015d9","type":"BasicTicker"}},"id":"32dc142f-e65a-4326-94ac-94bf5c92e0cb","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c4a66519-05ed-45a6-a0a2-0c98bea24e13","type":"Toolbar"},{"attributes":{},"id":"02d8392c-3547-4e16-bac3-ecc4379e92bf","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"9acd3696-7217-49c1-ab6c-82aa2a9a4110","type":"Plot"},"ticker":{"id":"431ea3af-7e5c-41ae-9002-57fec2af33bf","type":"BasicTicker"}},"id":"958f24d4-655f-4fd7-afa9-2626d943c189","type":"Grid"},{"attributes":{"source":{"id":"fdb1071f-4913-4b00-b598-afdc76ec80e4","type":"ColumnDataSource"}},"id":"0826cd3c-a1d1-4871-9e9e-488f466cf68c","type":"CDSView"},{"attributes":{"callback":null},"id":"89eacaa3-0116-4fe0-b7c6-ad59fad72b4f","type":"DataRange1d"}],"root_ids":["9acd3696-7217-49c1-ab6c-82aa2a9a4110"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"eaf976f0-3e20-4415-a894-5811f97a6962","elementid":"ab547e3b-aa80-4265-9b04-9b20fd586d88","modelid":"9acd3696-7217-49c1-ab6c-82aa2a9a4110"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
