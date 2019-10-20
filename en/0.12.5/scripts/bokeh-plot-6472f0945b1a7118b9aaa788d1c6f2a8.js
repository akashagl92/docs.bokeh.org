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
      };var element = document.getElementById("97f64593-a41f-4619-afd9-9ca5b6dc0831");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '97f64593-a41f-4619-afd9-9ca5b6dc0831' but no matching script tag was found. ")
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
                var docs_json = {"fb9344c1-122b-48dd-82cb-3458c0505f3a":{"roots":{"references":[{"attributes":{},"id":"40e04b6d-9d75-408a-8f2f-95878322c68e","type":"BasicTicker"},{"attributes":{"plot":{"id":"6e3e9a8c-8cd9-45a8-a4ef-6e6407463619","subtype":"Figure","type":"Plot"},"ticker":{"id":"40e04b6d-9d75-408a-8f2f-95878322c68e","type":"BasicTicker"}},"id":"b34f7555-a18c-4150-b8ad-09d9291731e1","type":"Grid"},{"attributes":{"below":[{"id":"871e0e3a-7bf7-4ed6-adc4-ec8c6bf59bbc","type":"LinearAxis"}],"left":[{"id":"f5e76780-9986-4282-8975-2ad18537d167","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"871e0e3a-7bf7-4ed6-adc4-ec8c6bf59bbc","type":"LinearAxis"},{"id":"b34f7555-a18c-4150-b8ad-09d9291731e1","type":"Grid"},{"id":"f5e76780-9986-4282-8975-2ad18537d167","type":"LinearAxis"},{"id":"afb58aa5-e6c3-4c31-85cf-b4933eb03602","type":"Grid"},{"id":"293759a8-5534-49cb-b844-008bcc02cad1","type":"GlyphRenderer"}],"title":{"id":"9d698fbb-ad8a-4c00-936e-531ab0c69312","type":"Title"},"tool_events":{"id":"f2a0a495-aa0c-4c8e-a17e-376604503dac","type":"ToolEvents"},"toolbar":{"id":"e0832f03-2d5e-4d0e-81e6-fbdc4df07672","type":"Toolbar"},"x_range":{"id":"250550f4-4408-4a33-a96b-759ea260e71a","type":"DataRange1d"},"y_range":{"id":"5b87a1d9-a290-483e-af96-c498a8a2818c","type":"DataRange1d"}},"id":"6e3e9a8c-8cd9-45a8-a4ef-6e6407463619","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"08fabe5e-6ea4-45f3-9b7f-4b60a8eb6996","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"250550f4-4408-4a33-a96b-759ea260e71a","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"797aa39a-5ed2-44e5-b4ef-4dc05d861faf","type":"Circle"},{"attributes":{"formatter":{"id":"08fabe5e-6ea4-45f3-9b7f-4b60a8eb6996","type":"BasicTickFormatter"},"plot":{"id":"6e3e9a8c-8cd9-45a8-a4ef-6e6407463619","subtype":"Figure","type":"Plot"},"ticker":{"id":"7dc6fab9-df7f-4ea5-818d-13d14d8a5fe3","type":"BasicTicker"}},"id":"f5e76780-9986-4282-8975-2ad18537d167","type":"LinearAxis"},{"attributes":{},"id":"24cde11f-09e7-4f07-8e72-e1ba8dfe9575","type":"BasicTickFormatter"},{"attributes":{},"id":"f2a0a495-aa0c-4c8e-a17e-376604503dac","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fcad5b3c-7f80-4db7-8c00-d6b6305240ba","type":"Circle"},{"attributes":{"formatter":{"id":"24cde11f-09e7-4f07-8e72-e1ba8dfe9575","type":"BasicTickFormatter"},"plot":{"id":"6e3e9a8c-8cd9-45a8-a4ef-6e6407463619","subtype":"Figure","type":"Plot"},"ticker":{"id":"40e04b6d-9d75-408a-8f2f-95878322c68e","type":"BasicTicker"}},"id":"871e0e3a-7bf7-4ed6-adc4-ec8c6bf59bbc","type":"LinearAxis"},{"attributes":{"callback":null,"plot":{"id":"6e3e9a8c-8cd9-45a8-a4ef-6e6407463619","subtype":"Figure","type":"Plot"}},"id":"68ffeace-5430-41cb-b3bb-9578de691a29","type":"TapTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"9bf88a12-c2f6-4286-b8c8-b997c518186c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9bf88a12-c2f6-4286-b8c8-b997c518186c","type":"ColumnDataSource"},"glyph":{"id":"797aa39a-5ed2-44e5-b4ef-4dc05d861faf","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fcad5b3c-7f80-4db7-8c00-d6b6305240ba","type":"Circle"},"selection_glyph":{"id":"4797b1c8-728c-40de-af13-a6e0088c43d6","type":"Circle"}},"id":"293759a8-5534-49cb-b844-008bcc02cad1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"5b87a1d9-a290-483e-af96-c498a8a2818c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"4797b1c8-728c-40de-af13-a6e0088c43d6","type":"Circle"},{"attributes":{},"id":"7dc6fab9-df7f-4ea5-818d-13d14d8a5fe3","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"68ffeace-5430-41cb-b3bb-9578de691a29","type":"TapTool"}]},"id":"e0832f03-2d5e-4d0e-81e6-fbdc4df07672","type":"Toolbar"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"9d698fbb-ad8a-4c00-936e-531ab0c69312","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"6e3e9a8c-8cd9-45a8-a4ef-6e6407463619","subtype":"Figure","type":"Plot"},"ticker":{"id":"7dc6fab9-df7f-4ea5-818d-13d14d8a5fe3","type":"BasicTicker"}},"id":"afb58aa5-e6c3-4c31-85cf-b4933eb03602","type":"Grid"}],"root_ids":["6e3e9a8c-8cd9-45a8-a4ef-6e6407463619"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"fb9344c1-122b-48dd-82cb-3458c0505f3a","elementid":"97f64593-a41f-4619-afd9-9ca5b6dc0831","modelid":"6e3e9a8c-8cd9-45a8-a4ef-6e6407463619"}];
                
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
