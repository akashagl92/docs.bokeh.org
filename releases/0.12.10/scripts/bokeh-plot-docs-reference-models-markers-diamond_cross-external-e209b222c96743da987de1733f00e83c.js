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
      };var element = document.getElementById("492d59ea-4e63-4932-9265-8d722ea1f72b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '492d59ea-4e63-4932-9265-8d722ea1f72b' but no matching script tag was found. ")
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
                    var docs_json = {"2b137266-8f79-4483-9cc3-31e9dc1f5339":{"roots":{"references":[{"attributes":{"data_source":{"id":"78f53877-9cc3-410e-9674-aa8ff126e0e6","type":"ColumnDataSource"},"glyph":{"id":"9cc2d76a-4c78-443c-9295-278626bf4c0a","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5e9df8fd-b134-4999-b920-7433f8fb865d","type":"CDSView"}},"id":"bb316650-b565-4b01-aaaf-15151c15bcce","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"1e3b276d-ef2e-40fa-b52e-e0e014eda72f","type":"Plot"},"ticker":{"id":"550890d1-703a-46e6-8f3d-82242efe42f6","type":"BasicTicker"}},"id":"75e43320-68b9-4d95-860d-8e601441a100","type":"Grid"},{"attributes":{},"id":"550890d1-703a-46e6-8f3d-82242efe42f6","type":"BasicTicker"},{"attributes":{"callback":null},"id":"df96fd59-1b9f-4ffa-894b-de1d8e9948ac","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"78f53877-9cc3-410e-9674-aa8ff126e0e6","type":"ColumnDataSource"},{"attributes":{},"id":"230b622d-1ad5-4bc7-ad63-6c6273e42190","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"08e59c74-4b11-4ff1-9fcd-959084558d99","type":"Toolbar"},{"attributes":{"formatter":{"id":"230b622d-1ad5-4bc7-ad63-6c6273e42190","type":"BasicTickFormatter"},"plot":{"id":"1e3b276d-ef2e-40fa-b52e-e0e014eda72f","type":"Plot"},"ticker":{"id":"550890d1-703a-46e6-8f3d-82242efe42f6","type":"BasicTicker"}},"id":"1607f812-3197-46f0-aa36-79f30f4e0f24","type":"LinearAxis"},{"attributes":{"plot":{"id":"1e3b276d-ef2e-40fa-b52e-e0e014eda72f","type":"Plot"},"ticker":{"id":"50d2308f-cdb9-46be-90d1-9acd59be247e","type":"BasicTicker"}},"id":"e0d411ab-079e-43ea-be1c-cc50df941876","type":"Grid"},{"attributes":{},"id":"3f7008bf-7836-4a90-874c-78e738febad0","type":"LinearScale"},{"attributes":{"below":[{"id":"9f78ee7f-d22e-4b66-aba6-1aa17aa8f562","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1607f812-3197-46f0-aa36-79f30f4e0f24","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"bb316650-b565-4b01-aaaf-15151c15bcce","type":"GlyphRenderer"},{"id":"9f78ee7f-d22e-4b66-aba6-1aa17aa8f562","type":"LinearAxis"},{"id":"1607f812-3197-46f0-aa36-79f30f4e0f24","type":"LinearAxis"},{"id":"e0d411ab-079e-43ea-be1c-cc50df941876","type":"Grid"},{"id":"75e43320-68b9-4d95-860d-8e601441a100","type":"Grid"}],"title":null,"toolbar":{"id":"08e59c74-4b11-4ff1-9fcd-959084558d99","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"df96fd59-1b9f-4ffa-894b-de1d8e9948ac","type":"DataRange1d"},"x_scale":{"id":"217d68cc-82da-431e-ad7b-41131630abee","type":"LinearScale"},"y_range":{"id":"cc6974a0-7702-4e5f-b74a-53a021fc9738","type":"DataRange1d"},"y_scale":{"id":"3f7008bf-7836-4a90-874c-78e738febad0","type":"LinearScale"}},"id":"1e3b276d-ef2e-40fa-b52e-e0e014eda72f","type":"Plot"},{"attributes":{"callback":null},"id":"cc6974a0-7702-4e5f-b74a-53a021fc9738","type":"DataRange1d"},{"attributes":{},"id":"3c15c9f2-ec73-43ad-9d08-aea0fe9d5f45","type":"BasicTickFormatter"},{"attributes":{},"id":"50d2308f-cdb9-46be-90d1-9acd59be247e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3c15c9f2-ec73-43ad-9d08-aea0fe9d5f45","type":"BasicTickFormatter"},"plot":{"id":"1e3b276d-ef2e-40fa-b52e-e0e014eda72f","type":"Plot"},"ticker":{"id":"50d2308f-cdb9-46be-90d1-9acd59be247e","type":"BasicTicker"}},"id":"9f78ee7f-d22e-4b66-aba6-1aa17aa8f562","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9cc2d76a-4c78-443c-9295-278626bf4c0a","type":"DiamondCross"},{"attributes":{"source":{"id":"78f53877-9cc3-410e-9674-aa8ff126e0e6","type":"ColumnDataSource"}},"id":"5e9df8fd-b134-4999-b920-7433f8fb865d","type":"CDSView"},{"attributes":{},"id":"217d68cc-82da-431e-ad7b-41131630abee","type":"LinearScale"}],"root_ids":["1e3b276d-ef2e-40fa-b52e-e0e014eda72f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"2b137266-8f79-4483-9cc3-31e9dc1f5339","elementid":"492d59ea-4e63-4932-9265-8d722ea1f72b","modelid":"1e3b276d-ef2e-40fa-b52e-e0e014eda72f"}];
                
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
