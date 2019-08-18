(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("b5eba527-a8ba-4998-ba75-373fd2cb46d8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b5eba527-a8ba-4998-ba75-373fd2cb46d8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"f5f3c583-1161-470e-b78b-f195a19eed3b":{"roots":{"references":[{"attributes":{"callback":null},"id":"c71992e1-efee-4c20-b7bf-c655763d5c8d","type":"DataRange1d"},{"attributes":{"data_source":{"id":"d76d0c35-15cf-4497-8b78-27d1781bb55c","type":"ColumnDataSource"},"glyph":{"id":"2bfdf09b-b4e7-427e-b1f1-1eb883a362da","type":"Bezier"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"7d210198-d304-4fdb-89a6-710eb1478299","type":"CDSView"}},"id":"94a1935e-b787-40e4-b1cf-097104888eb0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"9fb7e35c-d94d-4c28-bbfe-48baffad9b66","type":"DataRange1d"},{"attributes":{},"id":"0ca99be0-d81a-4ab4-b90a-4e7153d69e5a","type":"BasicTickFormatter"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"2bfdf09b-b4e7-427e-b1f1-1eb883a362da","type":"Bezier"},{"attributes":{"formatter":{"id":"0ca99be0-d81a-4ab4-b90a-4e7153d69e5a","type":"BasicTickFormatter"},"plot":{"id":"946ecfd2-a3c3-4fd7-94ab-46e3ad799a98","type":"Plot"},"ticker":{"id":"fb8f25f2-166b-4646-b126-a1139eebbf61","type":"BasicTicker"}},"id":"a6cc8c84-4299-4559-820a-c5138ccd5ecd","type":"LinearAxis"},{"attributes":{"source":{"id":"d76d0c35-15cf-4497-8b78-27d1781bb55c","type":"ColumnDataSource"}},"id":"7d210198-d304-4fdb-89a6-710eb1478299","type":"CDSView"},{"attributes":{},"id":"6c1a3599-df03-4128-bb3d-ff747d03dcd5","type":"BasicTickFormatter"},{"attributes":{},"id":"fb8f25f2-166b-4646-b126-a1139eebbf61","type":"BasicTicker"},{"attributes":{},"id":"5b44d656-bad4-44e9-8074-1514524890cd","type":"LinearScale"},{"attributes":{},"id":"f7d59f87-450c-4ede-8e18-6038f1c4acc8","type":"LinearScale"},{"attributes":{"plot":{"id":"946ecfd2-a3c3-4fd7-94ab-46e3ad799a98","type":"Plot"},"ticker":{"id":"fb8f25f2-166b-4646-b126-a1139eebbf61","type":"BasicTicker"}},"id":"3d391c97-331e-453a-bb9f-c2f03b45d05c","type":"Grid"},{"attributes":{},"id":"643e24c8-f873-4ebc-9d66-d45733ea5c08","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b35cd799-a5ae-4131-ae58-77ea0f00dbcc","type":"Toolbar"},{"attributes":{"formatter":{"id":"6c1a3599-df03-4128-bb3d-ff747d03dcd5","type":"BasicTickFormatter"},"plot":{"id":"946ecfd2-a3c3-4fd7-94ab-46e3ad799a98","type":"Plot"},"ticker":{"id":"643e24c8-f873-4ebc-9d66-d45733ea5c08","type":"BasicTicker"}},"id":"9406a0f3-b523-44b6-b68d-ad528b92ad27","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","xp02","xp01","xm01","yp01","ym01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"d76d0c35-15cf-4497-8b78-27d1781bb55c","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"a6cc8c84-4299-4559-820a-c5138ccd5ecd","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9406a0f3-b523-44b6-b68d-ad528b92ad27","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"94a1935e-b787-40e4-b1cf-097104888eb0","type":"GlyphRenderer"},{"id":"a6cc8c84-4299-4559-820a-c5138ccd5ecd","type":"LinearAxis"},{"id":"9406a0f3-b523-44b6-b68d-ad528b92ad27","type":"LinearAxis"},{"id":"3d391c97-331e-453a-bb9f-c2f03b45d05c","type":"Grid"},{"id":"2116542f-340a-458e-936e-246e98b7015e","type":"Grid"}],"title":null,"toolbar":{"id":"b35cd799-a5ae-4131-ae58-77ea0f00dbcc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9fb7e35c-d94d-4c28-bbfe-48baffad9b66","type":"DataRange1d"},"x_scale":{"id":"f7d59f87-450c-4ede-8e18-6038f1c4acc8","type":"LinearScale"},"y_range":{"id":"c71992e1-efee-4c20-b7bf-c655763d5c8d","type":"DataRange1d"},"y_scale":{"id":"5b44d656-bad4-44e9-8074-1514524890cd","type":"LinearScale"}},"id":"946ecfd2-a3c3-4fd7-94ab-46e3ad799a98","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"946ecfd2-a3c3-4fd7-94ab-46e3ad799a98","type":"Plot"},"ticker":{"id":"643e24c8-f873-4ebc-9d66-d45733ea5c08","type":"BasicTicker"}},"id":"2116542f-340a-458e-936e-246e98b7015e","type":"Grid"}],"root_ids":["946ecfd2-a3c3-4fd7-94ab-46e3ad799a98"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f5f3c583-1161-470e-b78b-f195a19eed3b","elementid":"b5eba527-a8ba-4998-ba75-373fd2cb46d8","modelid":"946ecfd2-a3c3-4fd7-94ab-46e3ad799a98"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
