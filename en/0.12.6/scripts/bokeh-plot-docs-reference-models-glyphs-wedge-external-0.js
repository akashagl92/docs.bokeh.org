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
      };var element = document.getElementById("f117d845-f0ea-4489-a5f7-212ca6d7057a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f117d845-f0ea-4489-a5f7-212ca6d7057a' but no matching script tag was found. ")
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
                var docs_json = {"4e3cdc8a-4f5b-4e16-a6ef-355bb0d1b370":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"507534e6-7c93-427d-b41f-612491f9d95d","type":"Toolbar"},{"attributes":{"callback":null},"id":"51a9e819-bbea-482e-8b18-f6c1a3fa4d5f","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1563fbf6-44f6-4e99-abb2-16ab594c00c7","type":"ColumnDataSource"},"glyph":{"id":"7d1d98ee-c764-4aa0-b7ec-1c4f7904ac18","type":"Wedge"},"hover_glyph":null,"muted_glyph":null},"id":"a5ecec44-f1ce-4a17-9fa1-1e9ec14e0387","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"f50fe92d-185b-4495-a1ec-196c654da26e","type":"BasicTickFormatter"},"plot":{"id":"770e222a-aa11-4260-b1a4-4b9cc9bb5534","type":"Plot"},"ticker":{"id":"dc82ff5d-c8db-4cd7-ae86-950177855005","type":"BasicTicker"}},"id":"ab91c212-1d78-4d74-8915-a984b5966511","type":"LinearAxis"},{"attributes":{"formatter":{"id":"9e5e64e5-8e05-4e49-ab35-f13045870eae","type":"BasicTickFormatter"},"plot":{"id":"770e222a-aa11-4260-b1a4-4b9cc9bb5534","type":"Plot"},"ticker":{"id":"f6b14d6e-8f7c-4bf3-b668-913a65581eac","type":"BasicTicker"}},"id":"48d6d45a-c030-469c-bc73-2b4321bf219e","type":"LinearAxis"},{"attributes":{},"id":"bf005996-3d63-45b6-b63d-be9952817389","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","r","x"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"1563fbf6-44f6-4e99-abb2-16ab594c00c7","type":"ColumnDataSource"},{"attributes":{},"id":"3a75802e-aabb-46be-b4d6-048c2ad834dc","type":"ToolEvents"},{"attributes":{},"id":"f50fe92d-185b-4495-a1ec-196c654da26e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"770e222a-aa11-4260-b1a4-4b9cc9bb5534","type":"Plot"},"ticker":{"id":"f6b14d6e-8f7c-4bf3-b668-913a65581eac","type":"BasicTicker"}},"id":"02ecf542-33b5-4e78-9838-02212749a386","type":"Grid"},{"attributes":{"below":[{"id":"48d6d45a-c030-469c-bc73-2b4321bf219e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ab91c212-1d78-4d74-8915-a984b5966511","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a5ecec44-f1ce-4a17-9fa1-1e9ec14e0387","type":"GlyphRenderer"},{"id":"48d6d45a-c030-469c-bc73-2b4321bf219e","type":"LinearAxis"},{"id":"ab91c212-1d78-4d74-8915-a984b5966511","type":"LinearAxis"},{"id":"02ecf542-33b5-4e78-9838-02212749a386","type":"Grid"},{"id":"32dc102f-eaf1-4205-a7b1-01941101997e","type":"Grid"}],"title":null,"tool_events":{"id":"3a75802e-aabb-46be-b4d6-048c2ad834dc","type":"ToolEvents"},"toolbar":{"id":"507534e6-7c93-427d-b41f-612491f9d95d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"64456a4d-1d59-4163-a420-57fbddb239dd","type":"DataRange1d"},"x_scale":{"id":"bf005996-3d63-45b6-b63d-be9952817389","type":"LinearScale"},"y_range":{"id":"51a9e819-bbea-482e-8b18-f6c1a3fa4d5f","type":"DataRange1d"},"y_scale":{"id":"ff89c3fc-14de-45c0-82bd-f1e31cfd55cd","type":"LinearScale"}},"id":"770e222a-aa11-4260-b1a4-4b9cc9bb5534","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"770e222a-aa11-4260-b1a4-4b9cc9bb5534","type":"Plot"},"ticker":{"id":"dc82ff5d-c8db-4cd7-ae86-950177855005","type":"BasicTicker"}},"id":"32dc102f-eaf1-4205-a7b1-01941101997e","type":"Grid"},{"attributes":{"callback":null},"id":"64456a4d-1d59-4163-a420-57fbddb239dd","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d1d98ee-c764-4aa0-b7ec-1c4f7904ac18","type":"Wedge"},{"attributes":{},"id":"dc82ff5d-c8db-4cd7-ae86-950177855005","type":"BasicTicker"},{"attributes":{},"id":"f6b14d6e-8f7c-4bf3-b668-913a65581eac","type":"BasicTicker"},{"attributes":{},"id":"9e5e64e5-8e05-4e49-ab35-f13045870eae","type":"BasicTickFormatter"},{"attributes":{},"id":"ff89c3fc-14de-45c0-82bd-f1e31cfd55cd","type":"LinearScale"}],"root_ids":["770e222a-aa11-4260-b1a4-4b9cc9bb5534"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"4e3cdc8a-4f5b-4e16-a6ef-355bb0d1b370","elementid":"f117d845-f0ea-4489-a5f7-212ca6d7057a","modelid":"770e222a-aa11-4260-b1a4-4b9cc9bb5534"}];
                
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
