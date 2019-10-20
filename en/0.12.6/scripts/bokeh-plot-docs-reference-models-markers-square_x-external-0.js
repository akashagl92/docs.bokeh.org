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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("ecd8df06-4161-4572-ba39-c909b387a0e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ecd8df06-4161-4572-ba39-c909b387a0e7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"0268316e-6324-45ec-be1e-473778d731fd":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"eaa5feb9-575a-42dc-b95d-fc39ccf757dd","type":"ColumnDataSource"},{"attributes":{},"id":"acbea4ed-ff62-4ea5-89d1-1d0c7f2a3563","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"11caff2a-b05f-473e-8f8a-8fe5f5190a18","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ada907d1-328c-4f91-ba75-28ec3ee24706","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"50578329-ee90-4af4-9b59-c296d55cc620","type":"GlyphRenderer"},{"id":"11caff2a-b05f-473e-8f8a-8fe5f5190a18","type":"LinearAxis"},{"id":"ada907d1-328c-4f91-ba75-28ec3ee24706","type":"LinearAxis"},{"id":"bddcd482-82cc-47dc-bc1a-5c4e2ce012b2","type":"Grid"},{"id":"bd92b610-dbb0-44d8-98f6-fbc897e2b2a0","type":"Grid"}],"title":null,"tool_events":{"id":"44c87fba-d817-444e-a537-1548a11b436d","type":"ToolEvents"},"toolbar":{"id":"8fa08eee-498a-47c4-a937-49a54c0c97ed","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2ab09adf-35df-4f84-8702-62b5fe2c0e54","type":"DataRange1d"},"x_scale":{"id":"47be3721-72ff-4251-aea3-60dc2f5c705a","type":"LinearScale"},"y_range":{"id":"ab724428-40cb-4d6e-bdc1-762678621dff","type":"DataRange1d"},"y_scale":{"id":"d9229d07-cebe-441c-9caf-bf178f5c04e0","type":"LinearScale"}},"id":"b7420de8-f185-492d-8296-b403a3fac63f","type":"Plot"},{"attributes":{"callback":null},"id":"ab724428-40cb-4d6e-bdc1-762678621dff","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"b7420de8-f185-492d-8296-b403a3fac63f","type":"Plot"},"ticker":{"id":"277f05a8-0f0a-492a-b3f2-38f987475f69","type":"BasicTicker"}},"id":"bd92b610-dbb0-44d8-98f6-fbc897e2b2a0","type":"Grid"},{"attributes":{"data_source":{"id":"eaa5feb9-575a-42dc-b95d-fc39ccf757dd","type":"ColumnDataSource"},"glyph":{"id":"c59db997-af1b-4da7-b5e2-61a77a934d2e","type":"SquareX"},"hover_glyph":null,"muted_glyph":null},"id":"50578329-ee90-4af4-9b59-c296d55cc620","type":"GlyphRenderer"},{"attributes":{},"id":"47be3721-72ff-4251-aea3-60dc2f5c705a","type":"LinearScale"},{"attributes":{"callback":null},"id":"2ab09adf-35df-4f84-8702-62b5fe2c0e54","type":"DataRange1d"},{"attributes":{},"id":"9cd97b8c-28c6-4f1d-a12a-31ff8613ac46","type":"BasicTickFormatter"},{"attributes":{},"id":"91c20892-364b-491a-a0ef-d295434aac89","type":"BasicTicker"},{"attributes":{"plot":{"id":"b7420de8-f185-492d-8296-b403a3fac63f","type":"Plot"},"ticker":{"id":"91c20892-364b-491a-a0ef-d295434aac89","type":"BasicTicker"}},"id":"bddcd482-82cc-47dc-bc1a-5c4e2ce012b2","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8fa08eee-498a-47c4-a937-49a54c0c97ed","type":"Toolbar"},{"attributes":{},"id":"277f05a8-0f0a-492a-b3f2-38f987475f69","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c59db997-af1b-4da7-b5e2-61a77a934d2e","type":"SquareX"},{"attributes":{},"id":"44c87fba-d817-444e-a537-1548a11b436d","type":"ToolEvents"},{"attributes":{"formatter":{"id":"9cd97b8c-28c6-4f1d-a12a-31ff8613ac46","type":"BasicTickFormatter"},"plot":{"id":"b7420de8-f185-492d-8296-b403a3fac63f","type":"Plot"},"ticker":{"id":"277f05a8-0f0a-492a-b3f2-38f987475f69","type":"BasicTicker"}},"id":"ada907d1-328c-4f91-ba75-28ec3ee24706","type":"LinearAxis"},{"attributes":{},"id":"d9229d07-cebe-441c-9caf-bf178f5c04e0","type":"LinearScale"},{"attributes":{"formatter":{"id":"acbea4ed-ff62-4ea5-89d1-1d0c7f2a3563","type":"BasicTickFormatter"},"plot":{"id":"b7420de8-f185-492d-8296-b403a3fac63f","type":"Plot"},"ticker":{"id":"91c20892-364b-491a-a0ef-d295434aac89","type":"BasicTicker"}},"id":"11caff2a-b05f-473e-8f8a-8fe5f5190a18","type":"LinearAxis"}],"root_ids":["b7420de8-f185-492d-8296-b403a3fac63f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"0268316e-6324-45ec-be1e-473778d731fd","elementid":"ecd8df06-4161-4572-ba39-c909b387a0e7","modelid":"b7420de8-f185-492d-8296-b403a3fac63f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
