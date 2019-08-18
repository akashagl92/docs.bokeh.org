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
      };var element = document.getElementById("ba9eb658-c48c-49ed-87e8-a0da681bc49e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ba9eb658-c48c-49ed-87e8-a0da681bc49e' but no matching script tag was found. ")
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
                    var docs_json = {"794c0ad9-9c22-424c-9248-9dc0cc686742":{"roots":{"references":[{"attributes":{},"id":"c09a4bbc-1937-4e2d-926d-a40e415cc019","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2f387ce7-1c1e-479f-84db-2dbd4ef1ef14","type":"Toolbar"},{"attributes":{},"id":"f360f5f3-1f63-4c47-ba2d-f25f348b54ca","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"045d040f-9dda-48e9-9d37-9378cb98f08e","type":"ColumnDataSource"}},"id":"ed66b838-09b0-42f9-9152-b37f0054ba19","type":"CDSView"},{"attributes":{"formatter":{"id":"f360f5f3-1f63-4c47-ba2d-f25f348b54ca","type":"BasicTickFormatter"},"plot":{"id":"5a64e307-27ec-4d13-b2e0-41252df1bed0","type":"Plot"},"ticker":{"id":"75468282-1ce0-4281-8ab9-f64bbaabbdcf","type":"BasicTicker"}},"id":"6609470e-94a7-43c8-8f08-97e1988fa302","type":"LinearAxis"},{"attributes":{},"id":"bd662c6c-01dc-4f74-a9c1-d82a3e88c887","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e38b9fb-ecc2-4969-b7f0-16229949c668","type":"Text"},{"attributes":{"formatter":{"id":"3cd43bba-b6ed-40cc-8bcc-8909624bbd72","type":"BasicTickFormatter"},"plot":{"id":"5a64e307-27ec-4d13-b2e0-41252df1bed0","type":"Plot"},"ticker":{"id":"bd662c6c-01dc-4f74-a9c1-d82a3e88c887","type":"BasicTicker"}},"id":"4972ccd9-99af-403f-9099-6ca31f7af5aa","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"5a64e307-27ec-4d13-b2e0-41252df1bed0","type":"Plot"},"ticker":{"id":"75468282-1ce0-4281-8ab9-f64bbaabbdcf","type":"BasicTicker"}},"id":"8d911543-62aa-4d0f-8b7d-018214e12526","type":"Grid"},{"attributes":{},"id":"c8512289-799d-44b9-80a7-06c148b77a7b","type":"LinearScale"},{"attributes":{},"id":"75468282-1ce0-4281-8ab9-f64bbaabbdcf","type":"BasicTicker"},{"attributes":{},"id":"3cd43bba-b6ed-40cc-8bcc-8909624bbd72","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"402b9991-3b2e-4bd0-9548-8f87173db99b","type":"DataRange1d"},{"attributes":{"plot":{"id":"5a64e307-27ec-4d13-b2e0-41252df1bed0","type":"Plot"},"ticker":{"id":"bd662c6c-01dc-4f74-a9c1-d82a3e88c887","type":"BasicTicker"}},"id":"b03e0e3f-1114-44ad-9f1d-51dc52819277","type":"Grid"},{"attributes":{"data_source":{"id":"045d040f-9dda-48e9-9d37-9378cb98f08e","type":"ColumnDataSource"},"glyph":{"id":"1e38b9fb-ecc2-4969-b7f0-16229949c668","type":"Text"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ed66b838-09b0-42f9-9152-b37f0054ba19","type":"CDSView"}},"id":"63907ed4-4b3e-4743-abfc-40d6dc5c9acd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"045d040f-9dda-48e9-9d37-9378cb98f08e","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"719778a1-16a3-4a26-bc59-b89400a5a34e","type":"DataRange1d"},{"attributes":{"below":[{"id":"4972ccd9-99af-403f-9099-6ca31f7af5aa","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6609470e-94a7-43c8-8f08-97e1988fa302","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"63907ed4-4b3e-4743-abfc-40d6dc5c9acd","type":"GlyphRenderer"},{"id":"4972ccd9-99af-403f-9099-6ca31f7af5aa","type":"LinearAxis"},{"id":"6609470e-94a7-43c8-8f08-97e1988fa302","type":"LinearAxis"},{"id":"b03e0e3f-1114-44ad-9f1d-51dc52819277","type":"Grid"},{"id":"8d911543-62aa-4d0f-8b7d-018214e12526","type":"Grid"}],"title":null,"toolbar":{"id":"2f387ce7-1c1e-479f-84db-2dbd4ef1ef14","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"719778a1-16a3-4a26-bc59-b89400a5a34e","type":"DataRange1d"},"x_scale":{"id":"c8512289-799d-44b9-80a7-06c148b77a7b","type":"LinearScale"},"y_range":{"id":"402b9991-3b2e-4bd0-9548-8f87173db99b","type":"DataRange1d"},"y_scale":{"id":"c09a4bbc-1937-4e2d-926d-a40e415cc019","type":"LinearScale"}},"id":"5a64e307-27ec-4d13-b2e0-41252df1bed0","type":"Plot"}],"root_ids":["5a64e307-27ec-4d13-b2e0-41252df1bed0"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"794c0ad9-9c22-424c-9248-9dc0cc686742","elementid":"ba9eb658-c48c-49ed-87e8-a0da681bc49e","modelid":"5a64e307-27ec-4d13-b2e0-41252df1bed0"}];
                
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
