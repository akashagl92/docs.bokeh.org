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
      };var element = document.getElementById("e1334de0-b44d-4713-8f93-bfc9cd9df44e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e1334de0-b44d-4713-8f93-bfc9cd9df44e' but no matching script tag was found. ")
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
                var docs_json = {"4d703c0e-9a49-4e4a-b276-315ba0d293e5":{"roots":{"references":[{"attributes":{},"id":"9584bc22-4b5d-43f2-bba9-12aac5042cdd","type":"LinearScale"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"23d00c2b-a0bf-4833-ae10-e6e69d082d65","type":"Arc"},{"attributes":{},"id":"aca2cc7d-b784-45f6-9cd0-62269344a33e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e754fcc3-faaf-4d37-9fc8-92769161e310","type":"BasicTickFormatter"},"plot":{"id":"00b912dc-3a9a-41de-a7d1-70f6d83be2d2","type":"Plot"},"ticker":{"id":"e83193ca-ad04-4483-b0c5-1625a703ab14","type":"BasicTicker"}},"id":"98457261-c60d-418c-bc05-17fbe44ed27d","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","r","x"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"cf0c3960-472c-4665-90b5-0c6514865081","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"3eb62f30-814a-4945-aa45-a3aefd9325f2","type":"DataRange1d"},{"attributes":{},"id":"e754fcc3-faaf-4d37-9fc8-92769161e310","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"00b912dc-3a9a-41de-a7d1-70f6d83be2d2","type":"Plot"},"ticker":{"id":"e83193ca-ad04-4483-b0c5-1625a703ab14","type":"BasicTicker"}},"id":"dde4a642-7838-4a21-8068-1e37c3cf9f7f","type":"Grid"},{"attributes":{"data_source":{"id":"cf0c3960-472c-4665-90b5-0c6514865081","type":"ColumnDataSource"},"glyph":{"id":"23d00c2b-a0bf-4833-ae10-e6e69d082d65","type":"Arc"},"hover_glyph":null,"muted_glyph":null},"id":"c993286f-7c26-4048-9457-e169a80a8f47","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"e8601de9-6119-4eeb-9f4e-8fbbeed7dbbf","type":"DataRange1d"},{"attributes":{},"id":"e83193ca-ad04-4483-b0c5-1625a703ab14","type":"BasicTicker"},{"attributes":{"plot":{"id":"00b912dc-3a9a-41de-a7d1-70f6d83be2d2","type":"Plot"},"ticker":{"id":"faec90c9-4ee3-44f9-bd53-900dfa39dea9","type":"BasicTicker"}},"id":"75600b49-52dc-4a8d-b6f8-a56eb2c10bcd","type":"Grid"},{"attributes":{},"id":"547796ae-39aa-4f2a-8e74-b71e54911698","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7a35bc46-ca01-422e-a35d-a96971f03d55","type":"Toolbar"},{"attributes":{"below":[{"id":"7d15d01f-bc22-45a1-aee2-66dc5c844af3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"98457261-c60d-418c-bc05-17fbe44ed27d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c993286f-7c26-4048-9457-e169a80a8f47","type":"GlyphRenderer"},{"id":"7d15d01f-bc22-45a1-aee2-66dc5c844af3","type":"LinearAxis"},{"id":"98457261-c60d-418c-bc05-17fbe44ed27d","type":"LinearAxis"},{"id":"75600b49-52dc-4a8d-b6f8-a56eb2c10bcd","type":"Grid"},{"id":"dde4a642-7838-4a21-8068-1e37c3cf9f7f","type":"Grid"}],"title":null,"tool_events":{"id":"22df3ed3-3ef9-45b0-9e37-d321bfb489dd","type":"ToolEvents"},"toolbar":{"id":"7a35bc46-ca01-422e-a35d-a96971f03d55","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3eb62f30-814a-4945-aa45-a3aefd9325f2","type":"DataRange1d"},"x_scale":{"id":"547796ae-39aa-4f2a-8e74-b71e54911698","type":"LinearScale"},"y_range":{"id":"e8601de9-6119-4eeb-9f4e-8fbbeed7dbbf","type":"DataRange1d"},"y_scale":{"id":"9584bc22-4b5d-43f2-bba9-12aac5042cdd","type":"LinearScale"}},"id":"00b912dc-3a9a-41de-a7d1-70f6d83be2d2","type":"Plot"},{"attributes":{"formatter":{"id":"aca2cc7d-b784-45f6-9cd0-62269344a33e","type":"BasicTickFormatter"},"plot":{"id":"00b912dc-3a9a-41de-a7d1-70f6d83be2d2","type":"Plot"},"ticker":{"id":"faec90c9-4ee3-44f9-bd53-900dfa39dea9","type":"BasicTicker"}},"id":"7d15d01f-bc22-45a1-aee2-66dc5c844af3","type":"LinearAxis"},{"attributes":{},"id":"faec90c9-4ee3-44f9-bd53-900dfa39dea9","type":"BasicTicker"},{"attributes":{},"id":"22df3ed3-3ef9-45b0-9e37-d321bfb489dd","type":"ToolEvents"}],"root_ids":["00b912dc-3a9a-41de-a7d1-70f6d83be2d2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"4d703c0e-9a49-4e4a-b276-315ba0d293e5","elementid":"e1334de0-b44d-4713-8f93-bfc9cd9df44e","modelid":"00b912dc-3a9a-41de-a7d1-70f6d83be2d2"}];
                
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
