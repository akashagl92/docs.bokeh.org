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
      };var element = document.getElementById("03bce593-fcce-4d2d-bbb6-14c7955b9dcf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '03bce593-fcce-4d2d-bbb6-14c7955b9dcf' but no matching script tag was found. ")
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
                var docs_json = {"10fde8a3-6986-4fa5-9c98-af1ec48f9537":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"fca62a95-5ed0-4daa-8286-fab2a3fdb0b5","type":"Arc"},{"attributes":{},"id":"43b3754e-32d5-47f8-bf24-54e90a8b8d2f","type":"BasicTicker"},{"attributes":{"plot":{"id":"a8d9618d-cac7-4c48-a3e5-6441ab3c9e7a","type":"Plot"},"ticker":{"id":"8a2b9389-a97e-4120-8972-a19537168f02","type":"BasicTicker"}},"id":"3270aa13-aabd-42ca-8c10-71ad5569651f","type":"Grid"},{"attributes":{"formatter":{"id":"30fa7b65-5ae3-4f5c-b844-9248920cfd1f","type":"BasicTickFormatter"},"plot":{"id":"a8d9618d-cac7-4c48-a3e5-6441ab3c9e7a","type":"Plot"},"ticker":{"id":"8a2b9389-a97e-4120-8972-a19537168f02","type":"BasicTicker"}},"id":"7baf7e4c-ed61-45ff-8770-4b29c7aa3728","type":"LinearAxis"},{"attributes":{"below":[{"id":"7baf7e4c-ed61-45ff-8770-4b29c7aa3728","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"70fd669a-d207-4edc-8abd-ed5988afd0bc","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8b867317-4158-4d79-9b02-fcd736faa494","type":"GlyphRenderer"},{"id":"7baf7e4c-ed61-45ff-8770-4b29c7aa3728","type":"LinearAxis"},{"id":"70fd669a-d207-4edc-8abd-ed5988afd0bc","type":"LinearAxis"},{"id":"3270aa13-aabd-42ca-8c10-71ad5569651f","type":"Grid"},{"id":"04e84acf-0e2f-41f1-b3a5-dc5dc30fee00","type":"Grid"}],"title":null,"tool_events":{"id":"482e24bf-7007-4c17-970b-3e04b7af94a4","type":"ToolEvents"},"toolbar":{"id":"5c614284-e621-44d2-b80f-279f36db8af8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21bef6fe-fb64-4361-b990-a9a55698041d","type":"DataRange1d"},"y_range":{"id":"10367e07-4f11-4b2e-a8d1-866e113fc48b","type":"DataRange1d"}},"id":"a8d9618d-cac7-4c48-a3e5-6441ab3c9e7a","type":"Plot"},{"attributes":{"formatter":{"id":"4f24fbe9-1d4b-4a0a-bc12-c6ae107be72a","type":"BasicTickFormatter"},"plot":{"id":"a8d9618d-cac7-4c48-a3e5-6441ab3c9e7a","type":"Plot"},"ticker":{"id":"43b3754e-32d5-47f8-bf24-54e90a8b8d2f","type":"BasicTicker"}},"id":"70fd669a-d207-4edc-8abd-ed5988afd0bc","type":"LinearAxis"},{"attributes":{},"id":"30fa7b65-5ae3-4f5c-b844-9248920cfd1f","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"a8d9618d-cac7-4c48-a3e5-6441ab3c9e7a","type":"Plot"},"ticker":{"id":"43b3754e-32d5-47f8-bf24-54e90a8b8d2f","type":"BasicTicker"}},"id":"04e84acf-0e2f-41f1-b3a5-dc5dc30fee00","type":"Grid"},{"attributes":{"callback":null},"id":"10367e07-4f11-4b2e-a8d1-866e113fc48b","type":"DataRange1d"},{"attributes":{},"id":"4f24fbe9-1d4b-4a0a-bc12-c6ae107be72a","type":"BasicTickFormatter"},{"attributes":{},"id":"8a2b9389-a97e-4120-8972-a19537168f02","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"1f5b57b6-20be-4b76-9965-0196a7f0b77e","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"21bef6fe-fb64-4361-b990-a9a55698041d","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5c614284-e621-44d2-b80f-279f36db8af8","type":"Toolbar"},{"attributes":{"data_source":{"id":"1f5b57b6-20be-4b76-9965-0196a7f0b77e","type":"ColumnDataSource"},"glyph":{"id":"fca62a95-5ed0-4daa-8286-fab2a3fdb0b5","type":"Arc"},"hover_glyph":null,"muted_glyph":null},"id":"8b867317-4158-4d79-9b02-fcd736faa494","type":"GlyphRenderer"},{"attributes":{},"id":"482e24bf-7007-4c17-970b-3e04b7af94a4","type":"ToolEvents"}],"root_ids":["a8d9618d-cac7-4c48-a3e5-6441ab3c9e7a"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"10fde8a3-6986-4fa5-9c98-af1ec48f9537","elementid":"03bce593-fcce-4d2d-bbb6-14c7955b9dcf","modelid":"a8d9618d-cac7-4c48-a3e5-6441ab3c9e7a"}];
                
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
