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
      };var element = document.getElementById("9e5dd770-636d-4582-961c-4ff487a513b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9e5dd770-636d-4582-961c-4ff487a513b2' but no matching script tag was found. ")
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
                var docs_json = {"cf9723b8-cc7e-45e4-b505-7e08c4254fd1":{"roots":{"references":[{"attributes":{"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"},"ticker":{"id":"132353af-63b7-49c6-9a8e-948abb2c7a9a","type":"BasicTicker"}},"id":"71609635-e869-47c5-a1e2-06cbb50b5d8c","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"86cddda3-2f14-4e0d-887c-3d4ce575aa59","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"97f5c026-65f1-401b-beac-5f3668a78f7f","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"00696121-23a0-493e-a4b5-9c1ba3d3fe56","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0bcf76fd-3748-40e6-89ce-c8323e853631","type":"PanTool"},{"id":"654762aa-c93b-42f9-b390-9b167b5d2016","type":"WheelZoomTool"},{"id":"51d30381-4e97-4d2d-8fa4-c871f60a40f3","type":"BoxZoomTool"},{"id":"3c3a564c-81db-44a3-8a22-13c5fe92228a","type":"SaveTool"},{"id":"71231b4c-0684-4415-924a-9a41deed29b8","type":"ResetTool"},{"id":"819ba90c-11c6-445e-b1fa-3e30fd67dfb7","type":"HelpTool"}]},"id":"3fde8f81-ee81-4553-bd32-e145c8333cfa","type":"Toolbar"},{"attributes":{"below":[{"id":"4d82ea0b-399d-4e22-86b7-56df44d0027c","type":"LinearAxis"}],"left":[{"id":"01955429-dae0-4d29-9e57-b37fd52e2d3b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4d82ea0b-399d-4e22-86b7-56df44d0027c","type":"LinearAxis"},{"id":"71609635-e869-47c5-a1e2-06cbb50b5d8c","type":"Grid"},{"id":"01955429-dae0-4d29-9e57-b37fd52e2d3b","type":"LinearAxis"},{"id":"ef1d1d1a-2706-4c23-b0e1-9b1bdecf0bf0","type":"Grid"},{"id":"86cddda3-2f14-4e0d-887c-3d4ce575aa59","type":"BoxAnnotation"},{"id":"94722b8e-274b-4e1e-bff4-4f164e3438e8","type":"GlyphRenderer"}],"title":{"id":"97f5c026-65f1-401b-beac-5f3668a78f7f","type":"Title"},"tool_events":{"id":"b5fe2f71-646f-4816-b35a-b9635889dbdf","type":"ToolEvents"},"toolbar":{"id":"3fde8f81-ee81-4553-bd32-e145c8333cfa","type":"Toolbar"},"x_range":{"id":"6715b745-7f22-43aa-8831-4bff273fb806","type":"DataRange1d"},"x_scale":{"id":"9c49c290-a4a7-412f-8d58-97fe666e897b","type":"LinearScale"},"y_range":{"id":"6e3b26a7-24a5-4dc4-8669-59c5f10482e5","type":"DataRange1d"},"y_scale":{"id":"cde240ae-0e7f-413a-adbb-e0e462f47c89","type":"LinearScale"}},"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0b1234d3-d87c-453b-9719-52c60d4715a3","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"}},"id":"71231b4c-0684-4415-924a-9a41deed29b8","type":"ResetTool"},{"attributes":{},"id":"0d79eab8-8e45-4dc4-9ee7-9cea9c8debda","type":"BasicTicker"},{"attributes":{},"id":"cde240ae-0e7f-413a-adbb-e0e462f47c89","type":"LinearScale"},{"attributes":{},"id":"a62bce82-03b9-42b9-b848-bf4435ca9863","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a62bce82-03b9-42b9-b848-bf4435ca9863","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d79eab8-8e45-4dc4-9ee7-9cea9c8debda","type":"BasicTicker"}},"id":"01955429-dae0-4d29-9e57-b37fd52e2d3b","type":"LinearAxis"},{"attributes":{},"id":"b5fe2f71-646f-4816-b35a-b9635889dbdf","type":"ToolEvents"},{"attributes":{"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"}},"id":"3c3a564c-81db-44a3-8a22-13c5fe92228a","type":"SaveTool"},{"attributes":{},"id":"bd5c6a7b-e6dd-4006-9f30-e0320fd1d974","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"93280d22-de64-4b75-93d9-04e9cfd451c5","type":"Circle"},{"attributes":{"formatter":{"id":"bd5c6a7b-e6dd-4006-9f30-e0320fd1d974","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"},"ticker":{"id":"132353af-63b7-49c6-9a8e-948abb2c7a9a","type":"BasicTicker"}},"id":"4d82ea0b-399d-4e22-86b7-56df44d0027c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6e3b26a7-24a5-4dc4-8669-59c5f10482e5","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d79eab8-8e45-4dc4-9ee7-9cea9c8debda","type":"BasicTicker"}},"id":"ef1d1d1a-2706-4c23-b0e1-9b1bdecf0bf0","type":"Grid"},{"attributes":{"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"}},"id":"654762aa-c93b-42f9-b390-9b167b5d2016","type":"WheelZoomTool"},{"attributes":{},"id":"132353af-63b7-49c6-9a8e-948abb2c7a9a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6715b745-7f22-43aa-8831-4bff273fb806","type":"DataRange1d"},{"attributes":{"overlay":{"id":"86cddda3-2f14-4e0d-887c-3d4ce575aa59","type":"BoxAnnotation"},"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"}},"id":"51d30381-4e97-4d2d-8fa4-c871f60a40f3","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"}},"id":"0bcf76fd-3748-40e6-89ce-c8323e853631","type":"PanTool"},{"attributes":{"plot":{"id":"ec837673-77e4-48f9-8e8a-d35be60b812f","subtype":"Figure","type":"Plot"}},"id":"819ba90c-11c6-445e-b1fa-3e30fd67dfb7","type":"HelpTool"},{"attributes":{"data_source":{"id":"0b1234d3-d87c-453b-9719-52c60d4715a3","type":"ColumnDataSource"},"glyph":{"id":"00696121-23a0-493e-a4b5-9c1ba3d3fe56","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93280d22-de64-4b75-93d9-04e9cfd451c5","type":"Circle"},"selection_glyph":null},"id":"94722b8e-274b-4e1e-bff4-4f164e3438e8","type":"GlyphRenderer"},{"attributes":{},"id":"9c49c290-a4a7-412f-8d58-97fe666e897b","type":"LinearScale"}],"root_ids":["ec837673-77e4-48f9-8e8a-d35be60b812f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"cf9723b8-cc7e-45e4-b505-7e08c4254fd1","elementid":"9e5dd770-636d-4582-961c-4ff487a513b2","modelid":"ec837673-77e4-48f9-8e8a-d35be60b812f"}];
                
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
