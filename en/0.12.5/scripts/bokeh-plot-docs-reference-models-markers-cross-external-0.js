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
      };var element = document.getElementById("32c46563-f4f3-48b1-a13d-7dd3ab461008");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '32c46563-f4f3-48b1-a13d-7dd3ab461008' but no matching script tag was found. ")
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
                var docs_json = {"a67e9a68-3fbf-4b00-b5a4-0e71ebf7bc95":{"roots":{"references":[{"attributes":{"plot":{"id":"519dd84b-06ca-4315-aea1-45c7427b2fd3","type":"Plot"},"ticker":{"id":"536a0087-c999-4207-9b97-bb8c12c41a19","type":"BasicTicker"}},"id":"39d45ca0-5e5e-4aa0-8ca2-1c93fb9b928b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"ff7324a0-6faf-4b59-be8f-f11124bc8969","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ff7324a0-6faf-4b59-be8f-f11124bc8969","type":"ColumnDataSource"},"glyph":{"id":"1800f4f5-c6f2-43e2-b501-3f74843a05d6","type":"Cross"},"hover_glyph":null,"muted_glyph":null},"id":"90814a8f-8f36-4013-a19f-48647bbdc4ad","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ffb0740b-544c-4083-a122-1b27489fc327","type":"BasicTickFormatter"},"plot":{"id":"519dd84b-06ca-4315-aea1-45c7427b2fd3","type":"Plot"},"ticker":{"id":"ab3cfb69-32cf-4df2-a564-823dd851e7f7","type":"BasicTicker"}},"id":"bda9b941-7ec3-4d3c-a242-65d605f7be72","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"519dd84b-06ca-4315-aea1-45c7427b2fd3","type":"Plot"},"ticker":{"id":"ab3cfb69-32cf-4df2-a564-823dd851e7f7","type":"BasicTicker"}},"id":"936a9ae1-5edc-4454-bb1c-36028c7bd477","type":"Grid"},{"attributes":{},"id":"a8ef3b09-f759-456f-a224-9ec5ff4e3cc9","type":"ToolEvents"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1800f4f5-c6f2-43e2-b501-3f74843a05d6","type":"Cross"},{"attributes":{"callback":null},"id":"ed76cf96-156d-4a6c-8f1e-28924a70ff9b","type":"DataRange1d"},{"attributes":{"callback":null},"id":"f0f3d4d3-93e0-4595-be4c-d58723efdb53","type":"DataRange1d"},{"attributes":{},"id":"536a0087-c999-4207-9b97-bb8c12c41a19","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"056c8130-cc81-461d-8fbe-c6f43e4eaf69","type":"Toolbar"},{"attributes":{},"id":"ab3cfb69-32cf-4df2-a564-823dd851e7f7","type":"BasicTicker"},{"attributes":{},"id":"afff82e6-7b4c-420b-99e3-f379eb6427bc","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"afff82e6-7b4c-420b-99e3-f379eb6427bc","type":"BasicTickFormatter"},"plot":{"id":"519dd84b-06ca-4315-aea1-45c7427b2fd3","type":"Plot"},"ticker":{"id":"536a0087-c999-4207-9b97-bb8c12c41a19","type":"BasicTicker"}},"id":"026acaf2-da13-4632-92a7-197ef785eed6","type":"LinearAxis"},{"attributes":{"below":[{"id":"026acaf2-da13-4632-92a7-197ef785eed6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"bda9b941-7ec3-4d3c-a242-65d605f7be72","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"90814a8f-8f36-4013-a19f-48647bbdc4ad","type":"GlyphRenderer"},{"id":"026acaf2-da13-4632-92a7-197ef785eed6","type":"LinearAxis"},{"id":"bda9b941-7ec3-4d3c-a242-65d605f7be72","type":"LinearAxis"},{"id":"39d45ca0-5e5e-4aa0-8ca2-1c93fb9b928b","type":"Grid"},{"id":"936a9ae1-5edc-4454-bb1c-36028c7bd477","type":"Grid"}],"title":null,"tool_events":{"id":"a8ef3b09-f759-456f-a224-9ec5ff4e3cc9","type":"ToolEvents"},"toolbar":{"id":"056c8130-cc81-461d-8fbe-c6f43e4eaf69","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ed76cf96-156d-4a6c-8f1e-28924a70ff9b","type":"DataRange1d"},"y_range":{"id":"f0f3d4d3-93e0-4595-be4c-d58723efdb53","type":"DataRange1d"}},"id":"519dd84b-06ca-4315-aea1-45c7427b2fd3","type":"Plot"},{"attributes":{},"id":"ffb0740b-544c-4083-a122-1b27489fc327","type":"BasicTickFormatter"}],"root_ids":["519dd84b-06ca-4315-aea1-45c7427b2fd3"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"a67e9a68-3fbf-4b00-b5a4-0e71ebf7bc95","elementid":"32c46563-f4f3-48b1-a13d-7dd3ab461008","modelid":"519dd84b-06ca-4315-aea1-45c7427b2fd3"}];
                
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
