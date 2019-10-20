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
      };var element = document.getElementById("6d23921a-11a2-499f-9528-4bb8659bbf22");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d23921a-11a2-499f-9528-4bb8659bbf22' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"d4c28839-e518-4fab-aa58-66465bc7c086":{"roots":{"references":[{"attributes":{},"id":"e44cfa5d-7600-4e80-a124-4f07b41dede7","type":"ToolEvents"},{"attributes":{"below":[{"id":"a388a3e0-7d0d-47cc-82ff-96b86e08c3fd","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1c2dc799-e9f7-4ad4-baaf-9538e56cb6ed","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e3007cdd-ae90-4cc0-bdf9-39baec35ed9b","type":"GlyphRenderer"},{"id":"a388a3e0-7d0d-47cc-82ff-96b86e08c3fd","type":"LinearAxis"},{"id":"1c2dc799-e9f7-4ad4-baaf-9538e56cb6ed","type":"LinearAxis"},{"id":"a71bbe85-4bd8-47d3-8007-9d55d29eb60b","type":"Grid"},{"id":"39ff7a9c-2e73-498c-a7bd-24ec0a799f62","type":"Grid"}],"title":null,"tool_events":{"id":"e44cfa5d-7600-4e80-a124-4f07b41dede7","type":"ToolEvents"},"toolbar":{"id":"ed814724-a0a3-48b9-bd76-6d4cfb24b43f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2c8c5185-3188-4d94-a36f-99d1fb8ad988","type":"DataRange1d"},"y_range":{"id":"43a605b7-574e-42ea-af5c-2971d0b96ab8","type":"DataRange1d"}},"id":"2d712b5e-2f69-46b1-8377-f2cddd863371","type":"Plot"},{"attributes":{"plot":{"id":"2d712b5e-2f69-46b1-8377-f2cddd863371","type":"Plot"},"ticker":{"id":"09c70fdd-016d-41dc-be0a-acee5392abf5","type":"BasicTicker"}},"id":"a71bbe85-4bd8-47d3-8007-9d55d29eb60b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"5015e0d6-4c27-455e-a0a3-c8bf1e0d147a","type":"ColumnDataSource"},{"attributes":{},"id":"4ef6be5c-76b5-46b2-8a3b-28432800bce5","type":"BasicTicker"},{"attributes":{},"id":"9fae9a27-43a7-4818-aba5-45ab6ce59bb0","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9fae9a27-43a7-4818-aba5-45ab6ce59bb0","type":"BasicTickFormatter"},"plot":{"id":"2d712b5e-2f69-46b1-8377-f2cddd863371","type":"Plot"},"ticker":{"id":"09c70fdd-016d-41dc-be0a-acee5392abf5","type":"BasicTicker"}},"id":"a388a3e0-7d0d-47cc-82ff-96b86e08c3fd","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5015e0d6-4c27-455e-a0a3-c8bf1e0d147a","type":"ColumnDataSource"},"glyph":{"id":"ad748801-f46d-48d4-b348-0b1120d52e57","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e3007cdd-ae90-4cc0-bdf9-39baec35ed9b","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ed814724-a0a3-48b9-bd76-6d4cfb24b43f","type":"Toolbar"},{"attributes":{"callback":null},"id":"43a605b7-574e-42ea-af5c-2971d0b96ab8","type":"DataRange1d"},{"attributes":{},"id":"09c70fdd-016d-41dc-be0a-acee5392abf5","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9a875c91-6dd1-42a0-9245-3b73a2be91cc","type":"BasicTickFormatter"},"plot":{"id":"2d712b5e-2f69-46b1-8377-f2cddd863371","type":"Plot"},"ticker":{"id":"4ef6be5c-76b5-46b2-8a3b-28432800bce5","type":"BasicTicker"}},"id":"1c2dc799-e9f7-4ad4-baaf-9538e56cb6ed","type":"LinearAxis"},{"attributes":{},"id":"9a875c91-6dd1-42a0-9245-3b73a2be91cc","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2d712b5e-2f69-46b1-8377-f2cddd863371","type":"Plot"},"ticker":{"id":"4ef6be5c-76b5-46b2-8a3b-28432800bce5","type":"BasicTicker"}},"id":"39ff7a9c-2e73-498c-a7bd-24ec0a799f62","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad748801-f46d-48d4-b348-0b1120d52e57","type":"CircleX"},{"attributes":{"callback":null},"id":"2c8c5185-3188-4d94-a36f-99d1fb8ad988","type":"DataRange1d"}],"root_ids":["2d712b5e-2f69-46b1-8377-f2cddd863371"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d4c28839-e518-4fab-aa58-66465bc7c086","elementid":"6d23921a-11a2-499f-9528-4bb8659bbf22","modelid":"2d712b5e-2f69-46b1-8377-f2cddd863371"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
