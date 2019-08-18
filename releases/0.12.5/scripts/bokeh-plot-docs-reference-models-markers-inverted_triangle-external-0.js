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
      };var element = document.getElementById("3dd9cabf-78e2-47f0-a559-bd09118e0ed5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3dd9cabf-78e2-47f0-a559-bd09118e0ed5' but no matching script tag was found. ")
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
                var docs_json = {"928b9346-27bb-48df-a32e-3571f48a0661":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9241d6ed-bf68-443b-87db-8d819bf90cd1","type":"InvertedTriangle"},{"attributes":{"dimension":1,"plot":{"id":"e069ad90-3a9e-42c5-a4d0-34b3cb18b723","type":"Plot"},"ticker":{"id":"ee0f7491-9e7d-4c25-bb00-8b92746496fb","type":"BasicTicker"}},"id":"1d91e132-84b1-471f-88a0-5d16f5e63896","type":"Grid"},{"attributes":{"data_source":{"id":"264c88de-0097-47ab-a38b-e93f29f68c2f","type":"ColumnDataSource"},"glyph":{"id":"9241d6ed-bf68-443b-87db-8d819bf90cd1","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null},"id":"4e2bda17-8656-4eac-bd40-45abe52f48c8","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b9a525df-2b61-4052-a6ec-d56ee011d5e5","type":"DataRange1d"},{"attributes":{},"id":"acd4d104-a872-4bf4-a6ee-db22b0cae3fb","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3ccc88ad-3820-45d2-866b-65cc52b192a2","type":"BasicTickFormatter"},"plot":{"id":"e069ad90-3a9e-42c5-a4d0-34b3cb18b723","type":"Plot"},"ticker":{"id":"ee0f7491-9e7d-4c25-bb00-8b92746496fb","type":"BasicTicker"}},"id":"c72b1afc-4c45-4885-b958-c4c2fe63020f","type":"LinearAxis"},{"attributes":{"below":[{"id":"4c0d6542-7f83-41a4-98cd-76b975e31383","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c72b1afc-4c45-4885-b958-c4c2fe63020f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4e2bda17-8656-4eac-bd40-45abe52f48c8","type":"GlyphRenderer"},{"id":"4c0d6542-7f83-41a4-98cd-76b975e31383","type":"LinearAxis"},{"id":"c72b1afc-4c45-4885-b958-c4c2fe63020f","type":"LinearAxis"},{"id":"764f2513-4ca3-4909-8685-74b78bb58662","type":"Grid"},{"id":"1d91e132-84b1-471f-88a0-5d16f5e63896","type":"Grid"}],"title":null,"tool_events":{"id":"187be720-0651-4be9-89a6-833b700f05a0","type":"ToolEvents"},"toolbar":{"id":"8beb4523-7fb1-43d3-85b5-84df5e85da0a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b9a525df-2b61-4052-a6ec-d56ee011d5e5","type":"DataRange1d"},"y_range":{"id":"5b87f7f1-4b33-4341-90c2-b248d71afc22","type":"DataRange1d"}},"id":"e069ad90-3a9e-42c5-a4d0-34b3cb18b723","type":"Plot"},{"attributes":{},"id":"187be720-0651-4be9-89a6-833b700f05a0","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"264c88de-0097-47ab-a38b-e93f29f68c2f","type":"ColumnDataSource"},{"attributes":{},"id":"ee0f7491-9e7d-4c25-bb00-8b92746496fb","type":"BasicTicker"},{"attributes":{"formatter":{"id":"acd4d104-a872-4bf4-a6ee-db22b0cae3fb","type":"BasicTickFormatter"},"plot":{"id":"e069ad90-3a9e-42c5-a4d0-34b3cb18b723","type":"Plot"},"ticker":{"id":"2aa54789-294b-4e40-9f12-4b25682404d7","type":"BasicTicker"}},"id":"4c0d6542-7f83-41a4-98cd-76b975e31383","type":"LinearAxis"},{"attributes":{"plot":{"id":"e069ad90-3a9e-42c5-a4d0-34b3cb18b723","type":"Plot"},"ticker":{"id":"2aa54789-294b-4e40-9f12-4b25682404d7","type":"BasicTicker"}},"id":"764f2513-4ca3-4909-8685-74b78bb58662","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8beb4523-7fb1-43d3-85b5-84df5e85da0a","type":"Toolbar"},{"attributes":{"callback":null},"id":"5b87f7f1-4b33-4341-90c2-b248d71afc22","type":"DataRange1d"},{"attributes":{},"id":"2aa54789-294b-4e40-9f12-4b25682404d7","type":"BasicTicker"},{"attributes":{},"id":"3ccc88ad-3820-45d2-866b-65cc52b192a2","type":"BasicTickFormatter"}],"root_ids":["e069ad90-3a9e-42c5-a4d0-34b3cb18b723"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"928b9346-27bb-48df-a32e-3571f48a0661","elementid":"3dd9cabf-78e2-47f0-a559-bd09118e0ed5","modelid":"e069ad90-3a9e-42c5-a4d0-34b3cb18b723"}];
                
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
