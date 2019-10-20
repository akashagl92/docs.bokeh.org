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
      };var element = document.getElementById("3ceb5498-14ef-4e8f-8f68-41ca0bdf7238");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3ceb5498-14ef-4e8f-8f68-41ca0bdf7238' but no matching script tag was found. ")
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
                var docs_json = {"de8f2c27-dce3-4d75-a1ab-010a6b25f886":{"roots":{"references":[{"attributes":{},"id":"d32620a9-7023-4950-97e6-de15c6be04fb","type":"BasicTickFormatter"},{"attributes":{},"id":"0758ec78-b8f4-46eb-92b2-1b7c6a1c46d4","type":"ToolEvents"},{"attributes":{"callback":null},"id":"ab6ed347-8adf-46da-970a-80220bdc99d7","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a6a70d8e-c0d3-48b0-89c9-fe3120319d6c","type":"ColumnDataSource"},"glyph":{"id":"5e2591e6-379e-4951-bd5e-45830bd23365","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null},"id":"91886a0a-f031-49ac-86cf-df5a392767fd","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c3e5833d-3f6e-4965-aa61-78857211daa2","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5d37eb5e-9a94-4312-a629-86a0680d0f4b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"91886a0a-f031-49ac-86cf-df5a392767fd","type":"GlyphRenderer"},{"id":"c3e5833d-3f6e-4965-aa61-78857211daa2","type":"LinearAxis"},{"id":"5d37eb5e-9a94-4312-a629-86a0680d0f4b","type":"LinearAxis"},{"id":"be2ec708-3f7c-4dc0-a16c-bd3e735c9e08","type":"Grid"},{"id":"99a866b3-6b70-4ae8-a9ee-643fba0c63c1","type":"Grid"}],"title":null,"tool_events":{"id":"0758ec78-b8f4-46eb-92b2-1b7c6a1c46d4","type":"ToolEvents"},"toolbar":{"id":"c02006be-ded8-443c-9b5e-d2031014dcc1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ab6ed347-8adf-46da-970a-80220bdc99d7","type":"DataRange1d"},"y_range":{"id":"342a8931-0c6b-41aa-8a03-df4b0f5f2578","type":"DataRange1d"}},"id":"39231f48-db67-4f75-b56a-503fdc91a166","type":"Plot"},{"attributes":{"callback":null},"id":"342a8931-0c6b-41aa-8a03-df4b0f5f2578","type":"DataRange1d"},{"attributes":{},"id":"ba9636e5-0af8-4601-9df4-ed1f9b753533","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d32620a9-7023-4950-97e6-de15c6be04fb","type":"BasicTickFormatter"},"plot":{"id":"39231f48-db67-4f75-b56a-503fdc91a166","type":"Plot"},"ticker":{"id":"ba9636e5-0af8-4601-9df4-ed1f9b753533","type":"BasicTicker"}},"id":"5d37eb5e-9a94-4312-a629-86a0680d0f4b","type":"LinearAxis"},{"attributes":{},"id":"a2582b0e-46d6-4b7c-bdfe-8df6bbc01d0c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"a6a70d8e-c0d3-48b0-89c9-fe3120319d6c","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"39231f48-db67-4f75-b56a-503fdc91a166","type":"Plot"},"ticker":{"id":"ba9636e5-0af8-4601-9df4-ed1f9b753533","type":"BasicTicker"}},"id":"99a866b3-6b70-4ae8-a9ee-643fba0c63c1","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e2591e6-379e-4951-bd5e-45830bd23365","type":"SquareCross"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c02006be-ded8-443c-9b5e-d2031014dcc1","type":"Toolbar"},{"attributes":{"formatter":{"id":"a2582b0e-46d6-4b7c-bdfe-8df6bbc01d0c","type":"BasicTickFormatter"},"plot":{"id":"39231f48-db67-4f75-b56a-503fdc91a166","type":"Plot"},"ticker":{"id":"16721294-c68d-4040-9a5e-b354887bf2f6","type":"BasicTicker"}},"id":"c3e5833d-3f6e-4965-aa61-78857211daa2","type":"LinearAxis"},{"attributes":{},"id":"16721294-c68d-4040-9a5e-b354887bf2f6","type":"BasicTicker"},{"attributes":{"plot":{"id":"39231f48-db67-4f75-b56a-503fdc91a166","type":"Plot"},"ticker":{"id":"16721294-c68d-4040-9a5e-b354887bf2f6","type":"BasicTicker"}},"id":"be2ec708-3f7c-4dc0-a16c-bd3e735c9e08","type":"Grid"}],"root_ids":["39231f48-db67-4f75-b56a-503fdc91a166"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"de8f2c27-dce3-4d75-a1ab-010a6b25f886","elementid":"3ceb5498-14ef-4e8f-8f68-41ca0bdf7238","modelid":"39231f48-db67-4f75-b56a-503fdc91a166"}];
                
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
