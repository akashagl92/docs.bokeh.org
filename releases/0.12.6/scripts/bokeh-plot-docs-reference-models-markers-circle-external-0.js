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
      };var element = document.getElementById("994f50d5-597b-4d5b-8b28-41ec68ede273");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '994f50d5-597b-4d5b-8b28-41ec68ede273' but no matching script tag was found. ")
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
                var docs_json = {"b2d134ed-02b3-4694-8e75-20c22d1f5e27":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"0ba16891-161d-4c60-bc2e-78c1a8410308","type":"Plot"},"ticker":{"id":"b3d8b76d-e0ec-43ec-beae-1d5d66c9c14d","type":"BasicTicker"}},"id":"035112de-0c6d-4d33-9b14-e534a2dd4dc3","type":"Grid"},{"attributes":{},"id":"fb48ed8a-7af3-4610-a4db-ef4c5c7a5b60","type":"BasicTicker"},{"attributes":{},"id":"9f47cb83-142f-4559-b789-d43a715e2d7f","type":"LinearScale"},{"attributes":{"callback":null},"id":"3a45b338-e4b0-4af7-a1a0-79ee4686f229","type":"DataRange1d"},{"attributes":{"callback":null},"id":"b7154d36-9ca5-4c0f-aac6-75758230b3af","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b9396eb6-20b4-4f2e-afcc-a7cadac8d00d","type":"ColumnDataSource"},"glyph":{"id":"3d61bc03-8957-4533-a5c1-041d95998db9","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"f773aac1-3e12-4cb1-a7a7-d3c17e2166cb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0ba16891-161d-4c60-bc2e-78c1a8410308","type":"Plot"},"ticker":{"id":"fb48ed8a-7af3-4610-a4db-ef4c5c7a5b60","type":"BasicTicker"}},"id":"951f20b1-679e-424b-b41a-25117f03583e","type":"Grid"},{"attributes":{"formatter":{"id":"3d7647d6-fcd7-4be1-9ddd-70962f40d30a","type":"BasicTickFormatter"},"plot":{"id":"0ba16891-161d-4c60-bc2e-78c1a8410308","type":"Plot"},"ticker":{"id":"fb48ed8a-7af3-4610-a4db-ef4c5c7a5b60","type":"BasicTicker"}},"id":"5dc846b7-db82-47e6-bd27-039ba8fd21dc","type":"LinearAxis"},{"attributes":{},"id":"3d7647d6-fcd7-4be1-9ddd-70962f40d30a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4066f675-4946-4efd-a4fa-50a3916b1eb3","type":"BasicTickFormatter"},"plot":{"id":"0ba16891-161d-4c60-bc2e-78c1a8410308","type":"Plot"},"ticker":{"id":"b3d8b76d-e0ec-43ec-beae-1d5d66c9c14d","type":"BasicTicker"}},"id":"71ee4bae-fbf9-401d-b4bc-952edcb1b2ff","type":"LinearAxis"},{"attributes":{},"id":"9bbcb48d-b39c-45bb-956b-95647ec5fdfb","type":"LinearScale"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d61bc03-8957-4533-a5c1-041d95998db9","type":"Circle"},{"attributes":{},"id":"b3d8b76d-e0ec-43ec-beae-1d5d66c9c14d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b8369f37-6a64-420a-ac50-cbae6e0ccd98","type":"Toolbar"},{"attributes":{"below":[{"id":"5dc846b7-db82-47e6-bd27-039ba8fd21dc","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"71ee4bae-fbf9-401d-b4bc-952edcb1b2ff","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f773aac1-3e12-4cb1-a7a7-d3c17e2166cb","type":"GlyphRenderer"},{"id":"5dc846b7-db82-47e6-bd27-039ba8fd21dc","type":"LinearAxis"},{"id":"71ee4bae-fbf9-401d-b4bc-952edcb1b2ff","type":"LinearAxis"},{"id":"951f20b1-679e-424b-b41a-25117f03583e","type":"Grid"},{"id":"035112de-0c6d-4d33-9b14-e534a2dd4dc3","type":"Grid"}],"title":null,"tool_events":{"id":"302b0608-f41d-4c6d-8dcc-6e6a48e2208c","type":"ToolEvents"},"toolbar":{"id":"b8369f37-6a64-420a-ac50-cbae6e0ccd98","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3a45b338-e4b0-4af7-a1a0-79ee4686f229","type":"DataRange1d"},"x_scale":{"id":"9bbcb48d-b39c-45bb-956b-95647ec5fdfb","type":"LinearScale"},"y_range":{"id":"b7154d36-9ca5-4c0f-aac6-75758230b3af","type":"DataRange1d"},"y_scale":{"id":"9f47cb83-142f-4559-b789-d43a715e2d7f","type":"LinearScale"}},"id":"0ba16891-161d-4c60-bc2e-78c1a8410308","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"b9396eb6-20b4-4f2e-afcc-a7cadac8d00d","type":"ColumnDataSource"},{"attributes":{},"id":"4066f675-4946-4efd-a4fa-50a3916b1eb3","type":"BasicTickFormatter"},{"attributes":{},"id":"302b0608-f41d-4c6d-8dcc-6e6a48e2208c","type":"ToolEvents"}],"root_ids":["0ba16891-161d-4c60-bc2e-78c1a8410308"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"b2d134ed-02b3-4694-8e75-20c22d1f5e27","elementid":"994f50d5-597b-4d5b-8b28-41ec68ede273","modelid":"0ba16891-161d-4c60-bc2e-78c1a8410308"}];
                
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
