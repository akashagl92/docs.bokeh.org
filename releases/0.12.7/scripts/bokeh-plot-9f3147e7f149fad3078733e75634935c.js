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
      };var element = document.getElementById("9c0b42ef-fe23-4408-865f-9c20d655e38b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9c0b42ef-fe23-4408-865f-9c20d655e38b' but no matching script tag was found. ")
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
                var docs_json = {"fe686cdf-11ea-4b97-9850-fe3bf52f9fce":{"roots":{"references":[{"attributes":{},"id":"e894c3aa-5a84-43bb-91d7-a6314096c40c","type":"BasicTicker"},{"attributes":{},"id":"b34ae707-2784-47c7-bc67-6807fb73f874","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"e85c6001-73b6-42e9-bba6-00da37d743e0","type":"Circle"},{"attributes":{"plot":{"id":"a9d5289b-20fa-4a17-a0e6-8b6239d33af1","subtype":"Figure","type":"Plot"},"ticker":{"id":"3fef0646-aa42-4f42-8bc7-eb0d9134ad5a","type":"BasicTicker"}},"id":"7e74ab6d-3f8b-4952-b5fa-e9de95d585ca","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"21594a57-2420-4ba5-a4fc-4cbd8360cd0c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"21594a57-2420-4ba5-a4fc-4cbd8360cd0c","type":"ColumnDataSource"},"glyph":{"id":"e85c6001-73b6-42e9-bba6-00da37d743e0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"64453f62-c698-4de3-8981-42d53c7ff504","type":"Circle"},"selection_glyph":null,"view":{"id":"8f2769fc-b1c7-41c0-9ebd-dbcb43feb081","type":"CDSView"}},"id":"db58dd9a-cd72-41a4-a547-62fb7cbe698b","type":"GlyphRenderer"},{"attributes":{},"id":"637fa378-ce81-460a-81da-eb83ea4f73d1","type":"LinearScale"},{"attributes":{},"id":"7f2b8271-ffa6-4ac5-8e70-4836b92586b0","type":"ResetTool"},{"attributes":{"callback":null},"id":"410c069f-5bf9-4b4c-84ff-c8c4de3e71bf","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"b2b52beb-48ef-4629-b643-3d6ef7441724","type":"Title"},{"attributes":{},"id":"ab28d35d-7b06-4574-9445-c0702738cfa4","type":"WheelZoomTool"},{"attributes":{},"id":"612474d3-a1c9-417e-bf3e-dd5595c3fa47","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"a9d5289b-20fa-4a17-a0e6-8b6239d33af1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e894c3aa-5a84-43bb-91d7-a6314096c40c","type":"BasicTicker"}},"id":"a572852c-75de-4767-8b18-3f864c5d2e5a","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"90463a48-3706-4ee3-8491-61e188c7c6a5","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"be4ba852-ea0b-4a95-9711-d214bdf75655","type":"LinearAxis"}],"left":[{"id":"14b6c31e-3f73-4a3d-84a2-4edeedc9304e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"be4ba852-ea0b-4a95-9711-d214bdf75655","type":"LinearAxis"},{"id":"7e74ab6d-3f8b-4952-b5fa-e9de95d585ca","type":"Grid"},{"id":"14b6c31e-3f73-4a3d-84a2-4edeedc9304e","type":"LinearAxis"},{"id":"a572852c-75de-4767-8b18-3f864c5d2e5a","type":"Grid"},{"id":"90463a48-3706-4ee3-8491-61e188c7c6a5","type":"BoxAnnotation"},{"id":"db58dd9a-cd72-41a4-a547-62fb7cbe698b","type":"GlyphRenderer"}],"title":{"id":"b2b52beb-48ef-4629-b643-3d6ef7441724","type":"Title"},"toolbar":{"id":"3ffeee0f-20e8-48d8-ac36-733b175f2bdd","type":"Toolbar"},"x_range":{"id":"4aff3a6a-208c-4513-a2d2-6c64525e99b9","type":"DataRange1d"},"x_scale":{"id":"637fa378-ce81-460a-81da-eb83ea4f73d1","type":"LinearScale"},"y_range":{"id":"410c069f-5bf9-4b4c-84ff-c8c4de3e71bf","type":"DataRange1d"},"y_scale":{"id":"e879da11-b541-42f3-9049-5e15b1388f6f","type":"LinearScale"}},"id":"a9d5289b-20fa-4a17-a0e6-8b6239d33af1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d8a0616f-aae1-4e63-8dcb-274728f7aa08","type":"SaveTool"},{"attributes":{},"id":"e879da11-b541-42f3-9049-5e15b1388f6f","type":"LinearScale"},{"attributes":{},"id":"3fef0646-aa42-4f42-8bc7-eb0d9134ad5a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"64453f62-c698-4de3-8981-42d53c7ff504","type":"Circle"},{"attributes":{"callback":null},"id":"4aff3a6a-208c-4513-a2d2-6c64525e99b9","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b34ae707-2784-47c7-bc67-6807fb73f874","type":"PanTool"},{"id":"ab28d35d-7b06-4574-9445-c0702738cfa4","type":"WheelZoomTool"},{"id":"1c2afca3-58fd-4d35-9fe9-903845902c82","type":"BoxZoomTool"},{"id":"d8a0616f-aae1-4e63-8dcb-274728f7aa08","type":"SaveTool"},{"id":"7f2b8271-ffa6-4ac5-8e70-4836b92586b0","type":"ResetTool"},{"id":"6e0ed429-aa57-4e1f-938f-16be854ea862","type":"HelpTool"}]},"id":"3ffeee0f-20e8-48d8-ac36-733b175f2bdd","type":"Toolbar"},{"attributes":{"formatter":{"id":"fcc15a8e-6c82-4830-acbe-0051a0eb7542","type":"BasicTickFormatter"},"plot":{"id":"a9d5289b-20fa-4a17-a0e6-8b6239d33af1","subtype":"Figure","type":"Plot"},"ticker":{"id":"3fef0646-aa42-4f42-8bc7-eb0d9134ad5a","type":"BasicTicker"}},"id":"be4ba852-ea0b-4a95-9711-d214bdf75655","type":"LinearAxis"},{"attributes":{},"id":"6e0ed429-aa57-4e1f-938f-16be854ea862","type":"HelpTool"},{"attributes":{"source":{"id":"21594a57-2420-4ba5-a4fc-4cbd8360cd0c","type":"ColumnDataSource"}},"id":"8f2769fc-b1c7-41c0-9ebd-dbcb43feb081","type":"CDSView"},{"attributes":{},"id":"fcc15a8e-6c82-4830-acbe-0051a0eb7542","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"612474d3-a1c9-417e-bf3e-dd5595c3fa47","type":"BasicTickFormatter"},"plot":{"id":"a9d5289b-20fa-4a17-a0e6-8b6239d33af1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e894c3aa-5a84-43bb-91d7-a6314096c40c","type":"BasicTicker"}},"id":"14b6c31e-3f73-4a3d-84a2-4edeedc9304e","type":"LinearAxis"},{"attributes":{"overlay":{"id":"90463a48-3706-4ee3-8491-61e188c7c6a5","type":"BoxAnnotation"}},"id":"1c2afca3-58fd-4d35-9fe9-903845902c82","type":"BoxZoomTool"}],"root_ids":["a9d5289b-20fa-4a17-a0e6-8b6239d33af1"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"fe686cdf-11ea-4b97-9850-fe3bf52f9fce","elementid":"9c0b42ef-fe23-4408-865f-9c20d655e38b","modelid":"a9d5289b-20fa-4a17-a0e6-8b6239d33af1"}];
                
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
