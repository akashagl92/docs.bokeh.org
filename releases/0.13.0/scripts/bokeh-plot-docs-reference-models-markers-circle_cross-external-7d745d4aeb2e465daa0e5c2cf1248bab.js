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
      };var element = document.getElementById("a828cc65-2577-4b30-a538-c18a3e386110");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a828cc65-2577-4b30-a538-c18a3e386110' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"43ce7290-5639-4a2b-b3fb-2d514f74ce0d":{"roots":{"references":[{"attributes":{"data_source":{"id":"60efa7fc-2a90-4420-a86f-4981a4586b93","type":"ColumnDataSource"},"glyph":{"id":"7b03af59-d8e8-4c98-99e0-583c7d106af9","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ccfac2f2-14d1-447c-bf62-e47531cd8067","type":"CDSView"}},"id":"8ff9b830-4c28-4af3-8cf4-25c2afeec53b","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b03af59-d8e8-4c98-99e0-583c7d106af9","type":"CircleCross"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"e09a9828-7837-4170-ac51-0e07984d2dad","type":"Selection"},"selection_policy":{"id":"c099b39e-3523-45de-8967-58e7f48c3fd5","type":"UnionRenderers"}},"id":"60efa7fc-2a90-4420-a86f-4981a4586b93","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"fe571ebf-0185-4bd5-8c95-9498911a5f7a","type":"BasicTickFormatter"},"plot":{"id":"99630fcc-3cd8-4eb0-a8c2-b0df114535b0","type":"Plot"},"ticker":{"id":"415acd7d-4367-454b-afc3-79875ff665ef","type":"BasicTicker"}},"id":"72315591-01c7-42ca-8396-e328527aba74","type":"LinearAxis"},{"attributes":{"plot":{"id":"99630fcc-3cd8-4eb0-a8c2-b0df114535b0","type":"Plot"},"ticker":{"id":"3810c5b2-15b5-4cc8-9841-3d1604b54f89","type":"BasicTicker"}},"id":"3f862e91-1faf-4499-b7c5-d0dc633cdd21","type":"Grid"},{"attributes":{},"id":"415acd7d-4367-454b-afc3-79875ff665ef","type":"BasicTicker"},{"attributes":{},"id":"e09a9828-7837-4170-ac51-0e07984d2dad","type":"Selection"},{"attributes":{"below":[{"id":"b175964a-be4f-456e-a3bb-22b9f2757f68","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"72315591-01c7-42ca-8396-e328527aba74","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8ff9b830-4c28-4af3-8cf4-25c2afeec53b","type":"GlyphRenderer"},{"id":"b175964a-be4f-456e-a3bb-22b9f2757f68","type":"LinearAxis"},{"id":"72315591-01c7-42ca-8396-e328527aba74","type":"LinearAxis"},{"id":"3f862e91-1faf-4499-b7c5-d0dc633cdd21","type":"Grid"},{"id":"f9b6172b-69cb-40e9-bce0-718a6ef45874","type":"Grid"}],"title":null,"toolbar":{"id":"faef1e3b-028c-49f9-999d-27eb10f9041a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20efb6d4-bb2e-4207-8f2d-b30a587f870c","type":"DataRange1d"},"x_scale":{"id":"01979523-9769-4184-aa46-ca1d7476ff2d","type":"LinearScale"},"y_range":{"id":"aeff879a-d348-41fd-baa8-190dbfbafddf","type":"DataRange1d"},"y_scale":{"id":"6b03733b-a358-4ce9-9bf7-37722e70233d","type":"LinearScale"}},"id":"99630fcc-3cd8-4eb0-a8c2-b0df114535b0","type":"Plot"},{"attributes":{"callback":null},"id":"aeff879a-d348-41fd-baa8-190dbfbafddf","type":"DataRange1d"},{"attributes":{},"id":"9424a2e7-1eb8-4b44-a3fc-c8df53097a53","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"60efa7fc-2a90-4420-a86f-4981a4586b93","type":"ColumnDataSource"}},"id":"ccfac2f2-14d1-447c-bf62-e47531cd8067","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"99630fcc-3cd8-4eb0-a8c2-b0df114535b0","type":"Plot"},"ticker":{"id":"415acd7d-4367-454b-afc3-79875ff665ef","type":"BasicTicker"}},"id":"f9b6172b-69cb-40e9-bce0-718a6ef45874","type":"Grid"},{"attributes":{},"id":"01979523-9769-4184-aa46-ca1d7476ff2d","type":"LinearScale"},{"attributes":{},"id":"3810c5b2-15b5-4cc8-9841-3d1604b54f89","type":"BasicTicker"},{"attributes":{},"id":"fe571ebf-0185-4bd5-8c95-9498911a5f7a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9424a2e7-1eb8-4b44-a3fc-c8df53097a53","type":"BasicTickFormatter"},"plot":{"id":"99630fcc-3cd8-4eb0-a8c2-b0df114535b0","type":"Plot"},"ticker":{"id":"3810c5b2-15b5-4cc8-9841-3d1604b54f89","type":"BasicTicker"}},"id":"b175964a-be4f-456e-a3bb-22b9f2757f68","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"faef1e3b-028c-49f9-999d-27eb10f9041a","type":"Toolbar"},{"attributes":{"callback":null},"id":"20efb6d4-bb2e-4207-8f2d-b30a587f870c","type":"DataRange1d"},{"attributes":{},"id":"c099b39e-3523-45de-8967-58e7f48c3fd5","type":"UnionRenderers"},{"attributes":{},"id":"6b03733b-a358-4ce9-9bf7-37722e70233d","type":"LinearScale"}],"root_ids":["99630fcc-3cd8-4eb0-a8c2-b0df114535b0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"43ce7290-5639-4a2b-b3fb-2d514f74ce0d","roots":{"99630fcc-3cd8-4eb0-a8c2-b0df114535b0":"a828cc65-2577-4b30-a538-c18a3e386110"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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