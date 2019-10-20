(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("f353fc52-74a5-45a8-b902-96ab6f3ae1cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f353fc52-74a5-45a8-b902-96ab6f3ae1cf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"2ca5e403-1f04-44fa-9cc6-42ea488659e4":{"roots":{"references":[{"attributes":{"data_source":{"id":"8b9bef41-ef8e-4d26-87ae-60f216267a7f","type":"ColumnDataSource"},"glyph":{"id":"095aea3a-5d30-4774-99c5-deedf15e2738","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"9a7dbb83-c81c-4a1d-a7aa-24f0e6f9c423","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a72de9b3-fca4-4285-b577-e6e1c936e9a5","type":"Toolbar"},{"attributes":{},"id":"9d5b5ed1-6c01-4562-9500-9e15c5efb55c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"65468e26-90f5-4bea-ab52-0867c9188a63","type":"BasicTickFormatter"},"plot":{"id":"57aa15ab-7fa5-48c1-a930-98efd4c7b0df","type":"Plot"},"ticker":{"id":"0917482c-7bab-48cd-bf23-4d2df5e8490a","type":"BasicTicker"}},"id":"b15107e8-e6a4-43bd-a09f-a3179315a399","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"8b9bef41-ef8e-4d26-87ae-60f216267a7f","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"57aa15ab-7fa5-48c1-a930-98efd4c7b0df","type":"Plot"},"ticker":{"id":"6b859b2e-4b24-4c20-b836-a3da12aaadb2","type":"BasicTicker"}},"id":"62b08048-744e-45ba-9d00-640875240832","type":"Grid"},{"attributes":{},"id":"0917482c-7bab-48cd-bf23-4d2df5e8490a","type":"BasicTicker"},{"attributes":{},"id":"960ed226-4e91-49f5-83ac-60229fd1165c","type":"ToolEvents"},{"attributes":{"formatter":{"id":"9d5b5ed1-6c01-4562-9500-9e15c5efb55c","type":"BasicTickFormatter"},"plot":{"id":"57aa15ab-7fa5-48c1-a930-98efd4c7b0df","type":"Plot"},"ticker":{"id":"6b859b2e-4b24-4c20-b836-a3da12aaadb2","type":"BasicTicker"}},"id":"8b887b83-c8c0-4dfc-a19a-c86a0f646c03","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ff5af2a5-b7f4-4410-8169-e1912b07c4d1","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"095aea3a-5d30-4774-99c5-deedf15e2738","type":"Circle"},{"attributes":{},"id":"65468e26-90f5-4bea-ab52-0867c9188a63","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"57aa15ab-7fa5-48c1-a930-98efd4c7b0df","type":"Plot"},"ticker":{"id":"0917482c-7bab-48cd-bf23-4d2df5e8490a","type":"BasicTicker"}},"id":"d6421e69-228d-4174-b392-e735ef4d4490","type":"Grid"},{"attributes":{},"id":"6b859b2e-4b24-4c20-b836-a3da12aaadb2","type":"BasicTicker"},{"attributes":{"below":[{"id":"b15107e8-e6a4-43bd-a09f-a3179315a399","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8b887b83-c8c0-4dfc-a19a-c86a0f646c03","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9a7dbb83-c81c-4a1d-a7aa-24f0e6f9c423","type":"GlyphRenderer"},{"id":"b15107e8-e6a4-43bd-a09f-a3179315a399","type":"LinearAxis"},{"id":"8b887b83-c8c0-4dfc-a19a-c86a0f646c03","type":"LinearAxis"},{"id":"d6421e69-228d-4174-b392-e735ef4d4490","type":"Grid"},{"id":"62b08048-744e-45ba-9d00-640875240832","type":"Grid"}],"title":null,"tool_events":{"id":"960ed226-4e91-49f5-83ac-60229fd1165c","type":"ToolEvents"},"toolbar":{"id":"a72de9b3-fca4-4285-b577-e6e1c936e9a5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ff5af2a5-b7f4-4410-8169-e1912b07c4d1","type":"DataRange1d"},"y_range":{"id":"f12f54ef-3488-414f-a2ee-bec7a13f9b51","type":"DataRange1d"}},"id":"57aa15ab-7fa5-48c1-a930-98efd4c7b0df","type":"Plot"},{"attributes":{"callback":null},"id":"f12f54ef-3488-414f-a2ee-bec7a13f9b51","type":"DataRange1d"}],"root_ids":["57aa15ab-7fa5-48c1-a930-98efd4c7b0df"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"2ca5e403-1f04-44fa-9cc6-42ea488659e4","elementid":"f353fc52-74a5-45a8-b902-96ab6f3ae1cf","modelid":"57aa15ab-7fa5-48c1-a930-98efd4c7b0df"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
