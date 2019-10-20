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
      };var element = document.getElementById("353ce707-9f52-4498-a007-9e7c7d57be22");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '353ce707-9f52-4498-a007-9e7c7d57be22' but no matching script tag was found. ")
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
                var docs_json = {"76b99171-e9ba-4d1f-89eb-34ccb334058d":{"roots":{"references":[{"attributes":{},"id":"86713aee-d4bd-4668-ba19-c3add41d7daf","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"86713aee-d4bd-4668-ba19-c3add41d7daf","type":"BasicTickFormatter"},"plot":{"id":"a1b45d87-06a7-48bb-b54c-528ebf75d449","type":"Plot"},"ticker":{"id":"29a08e0a-8058-43c4-abda-c96d17af16c1","type":"BasicTicker"}},"id":"e90a3503-0f47-419a-9a1a-3ce1d4ef72e4","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","ym01","y","xm01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}}},"id":"1cbc8d58-37c6-490a-a154-268624b1d4b4","type":"ColumnDataSource"},{"attributes":{},"id":"1b022a86-a55a-410f-b462-b4609cdf6128","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"0416a6ed-8886-4e05-9ce8-ec8c08aad1a8","type":"Segment"},{"attributes":{"dimension":1,"plot":{"id":"a1b45d87-06a7-48bb-b54c-528ebf75d449","type":"Plot"},"ticker":{"id":"29a08e0a-8058-43c4-abda-c96d17af16c1","type":"BasicTicker"}},"id":"3910988b-1b13-44c8-bbdb-c9dee9998362","type":"Grid"},{"attributes":{"plot":{"id":"a1b45d87-06a7-48bb-b54c-528ebf75d449","type":"Plot"},"ticker":{"id":"1b022a86-a55a-410f-b462-b4609cdf6128","type":"BasicTicker"}},"id":"b5e0ead3-26eb-48cc-b70a-37eaad81bbb1","type":"Grid"},{"attributes":{"callback":null},"id":"4505fb57-7c09-4815-8f3f-845cfc5bc252","type":"DataRange1d"},{"attributes":{},"id":"29a08e0a-8058-43c4-abda-c96d17af16c1","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d7aeea65-54d2-4c41-89be-80a644a26213","type":"BasicTickFormatter"},"plot":{"id":"a1b45d87-06a7-48bb-b54c-528ebf75d449","type":"Plot"},"ticker":{"id":"1b022a86-a55a-410f-b462-b4609cdf6128","type":"BasicTicker"}},"id":"8c2da708-a29a-4a1b-ac25-85e73a99725d","type":"LinearAxis"},{"attributes":{"below":[{"id":"8c2da708-a29a-4a1b-ac25-85e73a99725d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e90a3503-0f47-419a-9a1a-3ce1d4ef72e4","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"51840725-2a6b-4262-966e-7976f57d8114","type":"GlyphRenderer"},{"id":"8c2da708-a29a-4a1b-ac25-85e73a99725d","type":"LinearAxis"},{"id":"e90a3503-0f47-419a-9a1a-3ce1d4ef72e4","type":"LinearAxis"},{"id":"b5e0ead3-26eb-48cc-b70a-37eaad81bbb1","type":"Grid"},{"id":"3910988b-1b13-44c8-bbdb-c9dee9998362","type":"Grid"}],"title":null,"tool_events":{"id":"9aa28184-00f0-49f3-b70e-4f60cd5b75a1","type":"ToolEvents"},"toolbar":{"id":"428ac85e-203a-4a63-a370-99099029e85d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"584a54fc-5d75-4163-98e3-8500390b9546","type":"DataRange1d"},"y_range":{"id":"4505fb57-7c09-4815-8f3f-845cfc5bc252","type":"DataRange1d"}},"id":"a1b45d87-06a7-48bb-b54c-528ebf75d449","type":"Plot"},{"attributes":{},"id":"9aa28184-00f0-49f3-b70e-4f60cd5b75a1","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"428ac85e-203a-4a63-a370-99099029e85d","type":"Toolbar"},{"attributes":{"callback":null},"id":"584a54fc-5d75-4163-98e3-8500390b9546","type":"DataRange1d"},{"attributes":{},"id":"d7aeea65-54d2-4c41-89be-80a644a26213","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1cbc8d58-37c6-490a-a154-268624b1d4b4","type":"ColumnDataSource"},"glyph":{"id":"0416a6ed-8886-4e05-9ce8-ec8c08aad1a8","type":"Segment"},"hover_glyph":null,"muted_glyph":null},"id":"51840725-2a6b-4262-966e-7976f57d8114","type":"GlyphRenderer"}],"root_ids":["a1b45d87-06a7-48bb-b54c-528ebf75d449"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"76b99171-e9ba-4d1f-89eb-34ccb334058d","elementid":"353ce707-9f52-4498-a007-9e7c7d57be22","modelid":"a1b45d87-06a7-48bb-b54c-528ebf75d449"}];
                
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
