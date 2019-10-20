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
      };var element = document.getElementById("32071dd6-0c3e-415b-bb3b-0a60a4ea4fbb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '32071dd6-0c3e-415b-bb3b-0a60a4ea4fbb' but no matching script tag was found. ")
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
                var docs_json = {"f61f9b16-9d49-4d5f-ad96-efa1d49c8a52":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ce638dd9-e230-45d8-a69d-1e075da5d362","type":"Toolbar"},{"attributes":{},"id":"c7eac703-7a60-4f34-9535-b38be710d82f","type":"BasicTickFormatter"},{"attributes":{},"id":"4bb98bbb-b28b-47aa-82e4-946d70ffdd89","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"3fb6b028-eb0b-41f0-9a8f-14ebaa6315ea","type":"Plot"},"ticker":{"id":"7ef5e98f-f592-4f27-b1e9-cc22e5bef481","type":"BasicTicker"}},"id":"3558681b-cced-48a1-beea-479e5cdf6a64","type":"Grid"},{"attributes":{},"id":"7ef5e98f-f592-4f27-b1e9-cc22e5bef481","type":"BasicTicker"},{"attributes":{"callback":null},"id":"21ec4d97-1632-459b-b9a6-1d78d60dbde2","type":"DataRange1d"},{"attributes":{},"id":"46fd7450-547f-4c61-9177-bb8d11082301","type":"ToolEvents"},{"attributes":{"below":[{"id":"55c8eb4f-67a3-4b1c-9bca-4657e9addc37","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"57d4d1fa-bad6-481b-ac2c-378fd3aafa91","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"131191ac-9648-4a91-aa47-e626766e4e58","type":"GlyphRenderer"},{"id":"55c8eb4f-67a3-4b1c-9bca-4657e9addc37","type":"LinearAxis"},{"id":"57d4d1fa-bad6-481b-ac2c-378fd3aafa91","type":"LinearAxis"},{"id":"9d4fc985-629a-4dc3-b42a-2d4063a2d417","type":"Grid"},{"id":"3558681b-cced-48a1-beea-479e5cdf6a64","type":"Grid"}],"title":null,"tool_events":{"id":"46fd7450-547f-4c61-9177-bb8d11082301","type":"ToolEvents"},"toolbar":{"id":"ce638dd9-e230-45d8-a69d-1e075da5d362","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"14e1e726-a612-4eb8-80e2-08a5eb29a422","type":"DataRange1d"},"y_range":{"id":"21ec4d97-1632-459b-b9a6-1d78d60dbde2","type":"DataRange1d"}},"id":"3fb6b028-eb0b-41f0-9a8f-14ebaa6315ea","type":"Plot"},{"attributes":{"formatter":{"id":"4bb98bbb-b28b-47aa-82e4-946d70ffdd89","type":"BasicTickFormatter"},"plot":{"id":"3fb6b028-eb0b-41f0-9a8f-14ebaa6315ea","type":"Plot"},"ticker":{"id":"7ef5e98f-f592-4f27-b1e9-cc22e5bef481","type":"BasicTicker"}},"id":"57d4d1fa-bad6-481b-ac2c-378fd3aafa91","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3836877-7956-4492-82fc-91301236c5ec","type":"Ray"},{"attributes":{"data_source":{"id":"93ed04da-98ed-4015-9590-6aed97ef5af6","type":"ColumnDataSource"},"glyph":{"id":"f3836877-7956-4492-82fc-91301236c5ec","type":"Ray"},"hover_glyph":null,"muted_glyph":null},"id":"131191ac-9648-4a91-aa47-e626766e4e58","type":"GlyphRenderer"},{"attributes":{},"id":"1bb19c23-279b-49ff-87da-30f8c84414e7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c7eac703-7a60-4f34-9535-b38be710d82f","type":"BasicTickFormatter"},"plot":{"id":"3fb6b028-eb0b-41f0-9a8f-14ebaa6315ea","type":"Plot"},"ticker":{"id":"1bb19c23-279b-49ff-87da-30f8c84414e7","type":"BasicTicker"}},"id":"55c8eb4f-67a3-4b1c-9bca-4657e9addc37","type":"LinearAxis"},{"attributes":{"plot":{"id":"3fb6b028-eb0b-41f0-9a8f-14ebaa6315ea","type":"Plot"},"ticker":{"id":"1bb19c23-279b-49ff-87da-30f8c84414e7","type":"BasicTicker"}},"id":"9d4fc985-629a-4dc3-b42a-2d4063a2d417","type":"Grid"},{"attributes":{"callback":null,"column_names":["l","x","y"],"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"93ed04da-98ed-4015-9590-6aed97ef5af6","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"14e1e726-a612-4eb8-80e2-08a5eb29a422","type":"DataRange1d"}],"root_ids":["3fb6b028-eb0b-41f0-9a8f-14ebaa6315ea"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"f61f9b16-9d49-4d5f-ad96-efa1d49c8a52","elementid":"32071dd6-0c3e-415b-bb3b-0a60a4ea4fbb","modelid":"3fb6b028-eb0b-41f0-9a8f-14ebaa6315ea"}];
                
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
