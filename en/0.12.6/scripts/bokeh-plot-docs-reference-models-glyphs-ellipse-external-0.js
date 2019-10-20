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
      };var element = document.getElementById("4ae862c6-29dc-434c-8749-55a850ba326f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4ae862c6-29dc-434c-8749-55a850ba326f' but no matching script tag was found. ")
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
                var docs_json = {"ba63ff11-4464-49be-8f0d-2ec7d3c76137":{"roots":{"references":[{"attributes":{},"id":"56aa20a5-84ba-4e20-89e9-5b9545c58a58","type":"ToolEvents"},{"attributes":{},"id":"112e4cfc-2586-4dce-b632-5692fc806afa","type":"LinearScale"},{"attributes":{"plot":{"id":"5578c37e-11ed-4e7c-a092-f8d7dd0c8e5f","type":"Plot"},"ticker":{"id":"ad572237-0a80-45c1-a2cc-e361ac4f4652","type":"BasicTicker"}},"id":"437ffa83-3b9c-4a84-83de-bba57105adb2","type":"Grid"},{"attributes":{"callback":null,"column_names":["w","y","h","x"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"9826db48-e2f5-4af7-9685-12427aa606eb","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c2e7ff77-c6c6-44d9-92c0-f86546879da2","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9826db48-e2f5-4af7-9685-12427aa606eb","type":"ColumnDataSource"},"glyph":{"id":"dbffe7a8-4242-43b6-9955-6f6a78fc8ab3","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null},"id":"2a3edde8-d657-463c-8551-51d7c2a4a3bb","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dbffe7a8-4242-43b6-9955-6f6a78fc8ab3","type":"Ellipse"},{"attributes":{},"id":"695f8ceb-86c3-41e9-a443-0a39520b6cc9","type":"BasicTickFormatter"},{"attributes":{},"id":"fae51473-e13e-4bc9-a1aa-0977edd8d0b6","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c8548299-7e59-427c-bd8b-e9f0fd067bae","type":"DataRange1d"},{"attributes":{"below":[{"id":"d1e7d7c7-2b33-4c8c-b6a1-2e8566111f5e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c5d67328-3b4e-4b49-9c7c-6ff4f3789502","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2a3edde8-d657-463c-8551-51d7c2a4a3bb","type":"GlyphRenderer"},{"id":"d1e7d7c7-2b33-4c8c-b6a1-2e8566111f5e","type":"LinearAxis"},{"id":"c5d67328-3b4e-4b49-9c7c-6ff4f3789502","type":"LinearAxis"},{"id":"437ffa83-3b9c-4a84-83de-bba57105adb2","type":"Grid"},{"id":"0e937d94-3917-4bab-a147-d7a3a501dd47","type":"Grid"}],"title":null,"tool_events":{"id":"56aa20a5-84ba-4e20-89e9-5b9545c58a58","type":"ToolEvents"},"toolbar":{"id":"8b0baa02-716b-4df8-8117-adfa5e17d6d5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c2e7ff77-c6c6-44d9-92c0-f86546879da2","type":"DataRange1d"},"x_scale":{"id":"70e158ef-1028-4ec5-8a93-6c6185aadab2","type":"LinearScale"},"y_range":{"id":"c8548299-7e59-427c-bd8b-e9f0fd067bae","type":"DataRange1d"},"y_scale":{"id":"112e4cfc-2586-4dce-b632-5692fc806afa","type":"LinearScale"}},"id":"5578c37e-11ed-4e7c-a092-f8d7dd0c8e5f","type":"Plot"},{"attributes":{},"id":"5492bb10-4b1b-45d6-8fc5-2b22cd1d5e83","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8b0baa02-716b-4df8-8117-adfa5e17d6d5","type":"Toolbar"},{"attributes":{"formatter":{"id":"695f8ceb-86c3-41e9-a443-0a39520b6cc9","type":"BasicTickFormatter"},"plot":{"id":"5578c37e-11ed-4e7c-a092-f8d7dd0c8e5f","type":"Plot"},"ticker":{"id":"5492bb10-4b1b-45d6-8fc5-2b22cd1d5e83","type":"BasicTicker"}},"id":"c5d67328-3b4e-4b49-9c7c-6ff4f3789502","type":"LinearAxis"},{"attributes":{"formatter":{"id":"fae51473-e13e-4bc9-a1aa-0977edd8d0b6","type":"BasicTickFormatter"},"plot":{"id":"5578c37e-11ed-4e7c-a092-f8d7dd0c8e5f","type":"Plot"},"ticker":{"id":"ad572237-0a80-45c1-a2cc-e361ac4f4652","type":"BasicTicker"}},"id":"d1e7d7c7-2b33-4c8c-b6a1-2e8566111f5e","type":"LinearAxis"},{"attributes":{},"id":"ad572237-0a80-45c1-a2cc-e361ac4f4652","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5578c37e-11ed-4e7c-a092-f8d7dd0c8e5f","type":"Plot"},"ticker":{"id":"5492bb10-4b1b-45d6-8fc5-2b22cd1d5e83","type":"BasicTicker"}},"id":"0e937d94-3917-4bab-a147-d7a3a501dd47","type":"Grid"},{"attributes":{},"id":"70e158ef-1028-4ec5-8a93-6c6185aadab2","type":"LinearScale"}],"root_ids":["5578c37e-11ed-4e7c-a092-f8d7dd0c8e5f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ba63ff11-4464-49be-8f0d-2ec7d3c76137","elementid":"4ae862c6-29dc-434c-8749-55a850ba326f","modelid":"5578c37e-11ed-4e7c-a092-f8d7dd0c8e5f"}];
                
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
