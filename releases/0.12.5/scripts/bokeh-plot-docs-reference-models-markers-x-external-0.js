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
      };var element = document.getElementById("2aa87c8d-0a0f-4832-b59e-44bbe5582301");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2aa87c8d-0a0f-4832-b59e-44bbe5582301' but no matching script tag was found. ")
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
                var docs_json = {"2907b8c2-f4e4-428c-a622-3810eded9a8d":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3eb88bb3-a1b4-4710-b1c4-eb584093b4e2","type":"X"},{"attributes":{"formatter":{"id":"87ac3c4f-f58a-4dc0-9dae-f0f475488c5d","type":"BasicTickFormatter"},"plot":{"id":"c7e00c3d-b86d-4530-b491-5ea9b850d282","type":"Plot"},"ticker":{"id":"697be760-761c-4946-a79b-7cb14e11dfeb","type":"BasicTicker"}},"id":"b218137f-b892-4a42-858e-0a8e983016a3","type":"LinearAxis"},{"attributes":{},"id":"a8a10203-4a04-430f-a3fa-647d3e206238","type":"ToolEvents"},{"attributes":{"callback":null},"id":"8ea45576-6b76-4349-a974-806b97acc7de","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0c0bafe9-7bf9-4915-8b6b-244484648916","type":"BasicTickFormatter"},"plot":{"id":"c7e00c3d-b86d-4530-b491-5ea9b850d282","type":"Plot"},"ticker":{"id":"744d4168-d024-41b9-87c6-85544a7a0e7c","type":"BasicTicker"}},"id":"a38199e6-966b-4ab7-89f9-7df95a4defb8","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"630c36f0-8281-49cd-9e3d-293df4d4df91","type":"Toolbar"},{"attributes":{},"id":"87ac3c4f-f58a-4dc0-9dae-f0f475488c5d","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a38199e6-966b-4ab7-89f9-7df95a4defb8","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b218137f-b892-4a42-858e-0a8e983016a3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"70f7798c-85c0-41fb-a2fc-6153405bcdf4","type":"GlyphRenderer"},{"id":"a38199e6-966b-4ab7-89f9-7df95a4defb8","type":"LinearAxis"},{"id":"b218137f-b892-4a42-858e-0a8e983016a3","type":"LinearAxis"},{"id":"d11ee83c-d6a7-4c74-bc9f-bc5a6f6e1910","type":"Grid"},{"id":"43d17944-16b0-4407-9cde-4fc09ad53d25","type":"Grid"}],"title":null,"tool_events":{"id":"a8a10203-4a04-430f-a3fa-647d3e206238","type":"ToolEvents"},"toolbar":{"id":"630c36f0-8281-49cd-9e3d-293df4d4df91","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8ea45576-6b76-4349-a974-806b97acc7de","type":"DataRange1d"},"y_range":{"id":"5cc9d268-f3b2-442d-a350-7d2f317c47e4","type":"DataRange1d"}},"id":"c7e00c3d-b86d-4530-b491-5ea9b850d282","type":"Plot"},{"attributes":{},"id":"744d4168-d024-41b9-87c6-85544a7a0e7c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c7e00c3d-b86d-4530-b491-5ea9b850d282","type":"Plot"},"ticker":{"id":"697be760-761c-4946-a79b-7cb14e11dfeb","type":"BasicTicker"}},"id":"43d17944-16b0-4407-9cde-4fc09ad53d25","type":"Grid"},{"attributes":{},"id":"697be760-761c-4946-a79b-7cb14e11dfeb","type":"BasicTicker"},{"attributes":{},"id":"0c0bafe9-7bf9-4915-8b6b-244484648916","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5cc9d268-f3b2-442d-a350-7d2f317c47e4","type":"DataRange1d"},{"attributes":{"data_source":{"id":"51178374-96bd-4d54-a4d3-0dd49f8a3775","type":"ColumnDataSource"},"glyph":{"id":"3eb88bb3-a1b4-4710-b1c4-eb584093b4e2","type":"X"},"hover_glyph":null,"muted_glyph":null},"id":"70f7798c-85c0-41fb-a2fc-6153405bcdf4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"51178374-96bd-4d54-a4d3-0dd49f8a3775","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c7e00c3d-b86d-4530-b491-5ea9b850d282","type":"Plot"},"ticker":{"id":"744d4168-d024-41b9-87c6-85544a7a0e7c","type":"BasicTicker"}},"id":"d11ee83c-d6a7-4c74-bc9f-bc5a6f6e1910","type":"Grid"}],"root_ids":["c7e00c3d-b86d-4530-b491-5ea9b850d282"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"2907b8c2-f4e4-428c-a622-3810eded9a8d","elementid":"2aa87c8d-0a0f-4832-b59e-44bbe5582301","modelid":"c7e00c3d-b86d-4530-b491-5ea9b850d282"}];
                
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
