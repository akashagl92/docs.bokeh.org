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
      };var element = document.getElementById("48645aa4-f5e0-4216-8358-f895d4f3f1c1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48645aa4-f5e0-4216-8358-f895d4f3f1c1' but no matching script tag was found. ")
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
                var docs_json = {"6055f728-dbb2-4c13-a0b7-dc9ee4797a6f":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"cc6f7908-b8d2-43b2-ac02-7b205dd7fb4a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"922d6634-714d-4896-8d73-0860955250e1","type":"BasicTickFormatter"},"plot":{"id":"e4ce5e52-8e7e-45f2-bee1-884e53686d0a","type":"Plot"},"ticker":{"id":"9505f798-69c7-4fa2-95f7-4eb9c8198800","type":"BasicTicker"}},"id":"62ab0460-2492-4a10-8423-655fab4efa1d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"caa2a643-7797-4d15-8517-4cbd417892a6","type":"DataRange1d"},{"attributes":{},"id":"9f78bd01-7eb3-433c-aef8-734347dc6aa6","type":"ToolEvents"},{"attributes":{},"id":"922d6634-714d-4896-8d73-0860955250e1","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"cc6f7908-b8d2-43b2-ac02-7b205dd7fb4a","type":"ColumnDataSource"},"glyph":{"id":"d22d7191-f0b5-4961-8c03-c07be9b77099","type":"Triangle"},"hover_glyph":null,"muted_glyph":null},"id":"c10c19c2-2519-442e-93cc-55216e4e19b6","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"e4ce5e52-8e7e-45f2-bee1-884e53686d0a","type":"Plot"},"ticker":{"id":"9198592a-f0d7-412a-831d-b82f41a56a37","type":"BasicTicker"}},"id":"72323322-f17f-49ca-a8fd-77837f7e9f6b","type":"Grid"},{"attributes":{},"id":"9198592a-f0d7-412a-831d-b82f41a56a37","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d22d7191-f0b5-4961-8c03-c07be9b77099","type":"Triangle"},{"attributes":{"plot":{"id":"e4ce5e52-8e7e-45f2-bee1-884e53686d0a","type":"Plot"},"ticker":{"id":"9505f798-69c7-4fa2-95f7-4eb9c8198800","type":"BasicTicker"}},"id":"4161378b-25c2-440c-95d3-b78eed72439b","type":"Grid"},{"attributes":{},"id":"66f3735b-07b5-4925-b145-f6bf2b9ebc38","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2310c647-9fb0-4cba-bdcf-38ff0a650c27","type":"Toolbar"},{"attributes":{"below":[{"id":"62ab0460-2492-4a10-8423-655fab4efa1d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"77ee402e-f778-4f66-b4a4-16d8c8048d82","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c10c19c2-2519-442e-93cc-55216e4e19b6","type":"GlyphRenderer"},{"id":"62ab0460-2492-4a10-8423-655fab4efa1d","type":"LinearAxis"},{"id":"77ee402e-f778-4f66-b4a4-16d8c8048d82","type":"LinearAxis"},{"id":"4161378b-25c2-440c-95d3-b78eed72439b","type":"Grid"},{"id":"72323322-f17f-49ca-a8fd-77837f7e9f6b","type":"Grid"}],"title":null,"tool_events":{"id":"9f78bd01-7eb3-433c-aef8-734347dc6aa6","type":"ToolEvents"},"toolbar":{"id":"2310c647-9fb0-4cba-bdcf-38ff0a650c27","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"caa2a643-7797-4d15-8517-4cbd417892a6","type":"DataRange1d"},"y_range":{"id":"26a3f327-8334-4a0b-9643-a4c2961fa2c1","type":"DataRange1d"}},"id":"e4ce5e52-8e7e-45f2-bee1-884e53686d0a","type":"Plot"},{"attributes":{"formatter":{"id":"66f3735b-07b5-4925-b145-f6bf2b9ebc38","type":"BasicTickFormatter"},"plot":{"id":"e4ce5e52-8e7e-45f2-bee1-884e53686d0a","type":"Plot"},"ticker":{"id":"9198592a-f0d7-412a-831d-b82f41a56a37","type":"BasicTicker"}},"id":"77ee402e-f778-4f66-b4a4-16d8c8048d82","type":"LinearAxis"},{"attributes":{},"id":"9505f798-69c7-4fa2-95f7-4eb9c8198800","type":"BasicTicker"},{"attributes":{"callback":null},"id":"26a3f327-8334-4a0b-9643-a4c2961fa2c1","type":"DataRange1d"}],"root_ids":["e4ce5e52-8e7e-45f2-bee1-884e53686d0a"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"6055f728-dbb2-4c13-a0b7-dc9ee4797a6f","elementid":"48645aa4-f5e0-4216-8358-f895d4f3f1c1","modelid":"e4ce5e52-8e7e-45f2-bee1-884e53686d0a"}];
                
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
