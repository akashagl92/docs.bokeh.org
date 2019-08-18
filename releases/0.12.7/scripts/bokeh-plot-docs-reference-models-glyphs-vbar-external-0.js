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
      };var element = document.getElementById("4e75e641-8940-418f-9517-3af5ff7b356b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4e75e641-8940-418f-9517-3af5ff7b356b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"992c15fa-11fa-4c09-8d95-113d1f4ae852":{"roots":{"references":[{"attributes":{"below":[{"id":"1d6be90d-2aea-4048-8f50-18ba88a2a16e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fa61b4df-d2f9-46de-9162-007cfe633a36","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0fe93c97-7307-4354-b2ac-e22eba12ea0d","type":"GlyphRenderer"},{"id":"1d6be90d-2aea-4048-8f50-18ba88a2a16e","type":"LinearAxis"},{"id":"fa61b4df-d2f9-46de-9162-007cfe633a36","type":"LinearAxis"},{"id":"989931b0-568e-4031-baac-818aa653c6ac","type":"Grid"},{"id":"e6cfcb9c-6221-4573-ace9-c8761dbd7db3","type":"Grid"}],"title":null,"toolbar":{"id":"4abdbaf1-2269-4c54-ba55-7f88ee87b29c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c46043af-91ac-4c5a-a993-6d6674932e97","type":"DataRange1d"},"x_scale":{"id":"9a9dd2d4-880a-4a60-96c7-1ef23fc048e2","type":"LinearScale"},"y_range":{"id":"7ed4e83c-6e21-4362-957c-12405c577d12","type":"DataRange1d"},"y_scale":{"id":"5dccbdd2-b678-484f-88d1-b2834eca3a31","type":"LinearScale"}},"id":"419c8f03-f836-46fa-b2fd-fd886b0b94c3","type":"Plot"},{"attributes":{"callback":null},"id":"7ed4e83c-6e21-4362-957c-12405c577d12","type":"DataRange1d"},{"attributes":{},"id":"3748eec6-a99b-4e98-b744-1e993bb06326","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4abdbaf1-2269-4c54-ba55-7f88ee87b29c","type":"Toolbar"},{"attributes":{},"id":"582035a2-f568-47a0-9f6a-86d2f67775c4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"335c743d-fb38-448d-950f-0c1305c5bfc3","type":"ColumnDataSource"},"glyph":{"id":"7f5131d6-a6da-4a49-99c5-ce63253acb45","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"cb18745d-9eae-42da-9ee7-83ce38336523","type":"CDSView"}},"id":"0fe93c97-7307-4354-b2ac-e22eba12ea0d","type":"GlyphRenderer"},{"attributes":{},"id":"f131ccd8-6dd6-467e-b7ec-394f64f4cde4","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f131ccd8-6dd6-467e-b7ec-394f64f4cde4","type":"BasicTickFormatter"},"plot":{"id":"419c8f03-f836-46fa-b2fd-fd886b0b94c3","type":"Plot"},"ticker":{"id":"6c1f52f9-cb89-4e27-b5c0-6659493bb403","type":"BasicTicker"}},"id":"1d6be90d-2aea-4048-8f50-18ba88a2a16e","type":"LinearAxis"},{"attributes":{},"id":"5dccbdd2-b678-484f-88d1-b2834eca3a31","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"419c8f03-f836-46fa-b2fd-fd886b0b94c3","type":"Plot"},"ticker":{"id":"3748eec6-a99b-4e98-b744-1e993bb06326","type":"BasicTicker"}},"id":"e6cfcb9c-6221-4573-ace9-c8761dbd7db3","type":"Grid"},{"attributes":{"callback":null},"id":"c46043af-91ac-4c5a-a993-6d6674932e97","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"335c743d-fb38-448d-950f-0c1305c5bfc3","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"582035a2-f568-47a0-9f6a-86d2f67775c4","type":"BasicTickFormatter"},"plot":{"id":"419c8f03-f836-46fa-b2fd-fd886b0b94c3","type":"Plot"},"ticker":{"id":"3748eec6-a99b-4e98-b744-1e993bb06326","type":"BasicTicker"}},"id":"fa61b4df-d2f9-46de-9162-007cfe633a36","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"7f5131d6-a6da-4a49-99c5-ce63253acb45","type":"VBar"},{"attributes":{"plot":{"id":"419c8f03-f836-46fa-b2fd-fd886b0b94c3","type":"Plot"},"ticker":{"id":"6c1f52f9-cb89-4e27-b5c0-6659493bb403","type":"BasicTicker"}},"id":"989931b0-568e-4031-baac-818aa653c6ac","type":"Grid"},{"attributes":{"source":{"id":"335c743d-fb38-448d-950f-0c1305c5bfc3","type":"ColumnDataSource"}},"id":"cb18745d-9eae-42da-9ee7-83ce38336523","type":"CDSView"},{"attributes":{},"id":"9a9dd2d4-880a-4a60-96c7-1ef23fc048e2","type":"LinearScale"},{"attributes":{},"id":"6c1f52f9-cb89-4e27-b5c0-6659493bb403","type":"BasicTicker"}],"root_ids":["419c8f03-f836-46fa-b2fd-fd886b0b94c3"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"992c15fa-11fa-4c09-8d95-113d1f4ae852","elementid":"4e75e641-8940-418f-9517-3af5ff7b356b","modelid":"419c8f03-f836-46fa-b2fd-fd886b0b94c3"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
