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
      };var element = document.getElementById("ab9625d9-22ec-427d-b3a6-82a4003e2363");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab9625d9-22ec-427d-b3a6-82a4003e2363' but no matching script tag was found. ")
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
                var docs_json = {"a68cf8c3-64fb-48a5-b031-b9259a37577d":{"roots":{"references":[{"attributes":{"plot":{"id":"c2e18f82-eae7-41dd-8342-c6069e55759f","type":"Plot"},"ticker":{"id":"1e4ddc75-26f2-41fc-9d79-feb87bd8c16c","type":"BasicTicker"}},"id":"ece4a46f-af31-4343-a68e-6c2c8f636869","type":"Grid"},{"attributes":{"formatter":{"id":"fe0dda58-6828-46b9-8b58-71f70c482702","type":"BasicTickFormatter"},"plot":{"id":"c2e18f82-eae7-41dd-8342-c6069e55759f","type":"Plot"},"ticker":{"id":"1e4ddc75-26f2-41fc-9d79-feb87bd8c16c","type":"BasicTicker"}},"id":"8a6a1e91-0378-4776-a2f0-80693a89a029","type":"LinearAxis"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"0287528f-3b69-4765-be9e-b70bbf73d2da","type":"Quadratic"},{"attributes":{},"id":"61e5b7bb-85ee-4bb9-843a-ab469d2a5e86","type":"ToolEvents"},{"attributes":{},"id":"84c6ff2a-8d3b-41a9-9190-f97acd421f09","type":"LinearScale"},{"attributes":{"data_source":{"id":"6ed279ee-4a25-4f75-942b-f61765f6505f","type":"ColumnDataSource"},"glyph":{"id":"0287528f-3b69-4765-be9e-b70bbf73d2da","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null},"id":"cfbc366c-b0e1-420b-bf05-bcc55fa9bd46","type":"GlyphRenderer"},{"attributes":{},"id":"970a634b-fd2a-4abf-bf3c-3ba4a696319f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["xp01","xp02","yp01","y","x"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"6ed279ee-4a25-4f75-942b-f61765f6505f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"5fa3d23a-105c-49eb-86d9-db6629b49298","type":"DataRange1d"},{"attributes":{},"id":"ab080440-466d-4556-9e79-fbb4383f352a","type":"BasicTickFormatter"},{"attributes":{},"id":"1e4ddc75-26f2-41fc-9d79-feb87bd8c16c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27f230cb-a51c-4dac-9921-c26357e79144","type":"DataRange1d"},{"attributes":{"below":[{"id":"8a6a1e91-0378-4776-a2f0-80693a89a029","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"90ae4be1-420a-415f-af97-03bd0bececcf","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"cfbc366c-b0e1-420b-bf05-bcc55fa9bd46","type":"GlyphRenderer"},{"id":"8a6a1e91-0378-4776-a2f0-80693a89a029","type":"LinearAxis"},{"id":"90ae4be1-420a-415f-af97-03bd0bececcf","type":"LinearAxis"},{"id":"ece4a46f-af31-4343-a68e-6c2c8f636869","type":"Grid"},{"id":"92a1e554-4084-4150-a3a3-ba133bde9b11","type":"Grid"}],"title":null,"tool_events":{"id":"61e5b7bb-85ee-4bb9-843a-ab469d2a5e86","type":"ToolEvents"},"toolbar":{"id":"a1191c03-c7db-44c1-865d-e7c61e2b3bc8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5fa3d23a-105c-49eb-86d9-db6629b49298","type":"DataRange1d"},"x_scale":{"id":"a406f9fd-aa4a-45d1-b5d7-226a256533b1","type":"LinearScale"},"y_range":{"id":"27f230cb-a51c-4dac-9921-c26357e79144","type":"DataRange1d"},"y_scale":{"id":"84c6ff2a-8d3b-41a9-9190-f97acd421f09","type":"LinearScale"}},"id":"c2e18f82-eae7-41dd-8342-c6069e55759f","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a1191c03-c7db-44c1-865d-e7c61e2b3bc8","type":"Toolbar"},{"attributes":{},"id":"fe0dda58-6828-46b9-8b58-71f70c482702","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c2e18f82-eae7-41dd-8342-c6069e55759f","type":"Plot"},"ticker":{"id":"970a634b-fd2a-4abf-bf3c-3ba4a696319f","type":"BasicTicker"}},"id":"92a1e554-4084-4150-a3a3-ba133bde9b11","type":"Grid"},{"attributes":{"formatter":{"id":"ab080440-466d-4556-9e79-fbb4383f352a","type":"BasicTickFormatter"},"plot":{"id":"c2e18f82-eae7-41dd-8342-c6069e55759f","type":"Plot"},"ticker":{"id":"970a634b-fd2a-4abf-bf3c-3ba4a696319f","type":"BasicTicker"}},"id":"90ae4be1-420a-415f-af97-03bd0bececcf","type":"LinearAxis"},{"attributes":{},"id":"a406f9fd-aa4a-45d1-b5d7-226a256533b1","type":"LinearScale"}],"root_ids":["c2e18f82-eae7-41dd-8342-c6069e55759f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"a68cf8c3-64fb-48a5-b031-b9259a37577d","elementid":"ab9625d9-22ec-427d-b3a6-82a4003e2363","modelid":"c2e18f82-eae7-41dd-8342-c6069e55759f"}];
                
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
