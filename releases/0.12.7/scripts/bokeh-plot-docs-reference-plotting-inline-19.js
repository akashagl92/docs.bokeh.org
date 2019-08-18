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
      };var element = document.getElementById("09c5ee6d-30e3-40e0-90ef-f3101c454e44");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '09c5ee6d-30e3-40e0-90ef-f3101c454e44' but no matching script tag was found. ")
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
                var docs_json = {"87c4e1e4-1e07-485c-b84e-f8067e286f79":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"824ee165-01b0-4c2e-95c8-43a9dab78813","type":"PanTool"},{"id":"18e713e9-81b5-4586-88c3-9c5e40b1c9b3","type":"WheelZoomTool"},{"id":"e8391e52-111b-4c99-8335-438388a0dcdb","type":"BoxZoomTool"},{"id":"05d34f3f-bad4-4ac3-bf45-72c3d7fcba2c","type":"SaveTool"},{"id":"50b41221-fe0f-4495-87aa-cb3e8885740f","type":"ResetTool"},{"id":"1c5939a8-1e15-4135-9ee4-ece232c28a3d","type":"HelpTool"}]},"id":"8f93c7d2-e527-4eef-a10c-b92528dfefb9","type":"Toolbar"},{"attributes":{},"id":"40806a5d-4fa0-482c-95f4-d8daf3714c64","type":"BasicTicker"},{"attributes":{"callback":null},"id":"007fb5d0-44ea-4343-a82b-da7ff82fb192","type":"DataRange1d"},{"attributes":{"below":[{"id":"54de30f6-1c86-4d7f-8405-db1a46c956eb","type":"LinearAxis"}],"left":[{"id":"06cfc13d-1676-4ff9-8944-9e4ce7ff7493","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"54de30f6-1c86-4d7f-8405-db1a46c956eb","type":"LinearAxis"},{"id":"747b2790-eeda-45a4-aa62-ef4578fad242","type":"Grid"},{"id":"06cfc13d-1676-4ff9-8944-9e4ce7ff7493","type":"LinearAxis"},{"id":"bd147420-5b82-48ee-bd55-24b9d055e93f","type":"Grid"},{"id":"f31092e3-033f-4b7d-8cf7-31346099eea4","type":"BoxAnnotation"},{"id":"b83c3d27-ceed-48a8-a9e2-a197601cb09b","type":"GlyphRenderer"}],"title":{"id":"82f77278-62e2-492e-a8cb-0d8ddb63907d","type":"Title"},"toolbar":{"id":"8f93c7d2-e527-4eef-a10c-b92528dfefb9","type":"Toolbar"},"x_range":{"id":"bc832788-b677-4921-b779-37e0f910fad6","type":"DataRange1d"},"x_scale":{"id":"2ee20fc9-7ae9-4aae-a532-51b8ac427ae2","type":"LinearScale"},"y_range":{"id":"007fb5d0-44ea-4343-a82b-da7ff82fb192","type":"DataRange1d"},"y_scale":{"id":"e2d6868b-e51f-4df7-a934-8dae45d67fd4","type":"LinearScale"}},"id":"d6ecc865-f71e-4617-b153-8f3224b5fc10","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"fa3bccc8-f160-4014-92e0-86185a73e4cb","type":"ColumnDataSource"},{"attributes":{},"id":"de87a2a8-d682-4c4d-9c4b-085137f22352","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"bc832788-b677-4921-b779-37e0f910fad6","type":"DataRange1d"},{"attributes":{},"id":"1e22fd0e-7a2f-4143-b6eb-8f5150d7005d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d6ecc865-f71e-4617-b153-8f3224b5fc10","subtype":"Figure","type":"Plot"},"ticker":{"id":"40806a5d-4fa0-482c-95f4-d8daf3714c64","type":"BasicTicker"}},"id":"747b2790-eeda-45a4-aa62-ef4578fad242","type":"Grid"},{"attributes":{"formatter":{"id":"de87a2a8-d682-4c4d-9c4b-085137f22352","type":"BasicTickFormatter"},"plot":{"id":"d6ecc865-f71e-4617-b153-8f3224b5fc10","subtype":"Figure","type":"Plot"},"ticker":{"id":"05409f21-3389-4af1-97eb-fa7f21b5a559","type":"BasicTicker"}},"id":"06cfc13d-1676-4ff9-8944-9e4ce7ff7493","type":"LinearAxis"},{"attributes":{},"id":"18e713e9-81b5-4586-88c3-9c5e40b1c9b3","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"fa3bccc8-f160-4014-92e0-86185a73e4cb","type":"ColumnDataSource"},"glyph":{"id":"c6d043ec-2450-4527-85f7-c7466f3f3a30","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8eca781f-8e50-4d1f-9132-2cdd2716d6ea","type":"Segment"},"selection_glyph":null,"view":{"id":"c6c304b8-a5fe-43d7-8576-611206f559c5","type":"CDSView"}},"id":"b83c3d27-ceed-48a8-a9e2-a197601cb09b","type":"GlyphRenderer"},{"attributes":{},"id":"e2d6868b-e51f-4df7-a934-8dae45d67fd4","type":"LinearScale"},{"attributes":{},"id":"50b41221-fe0f-4495-87aa-cb3e8885740f","type":"ResetTool"},{"attributes":{"formatter":{"id":"1e22fd0e-7a2f-4143-b6eb-8f5150d7005d","type":"BasicTickFormatter"},"plot":{"id":"d6ecc865-f71e-4617-b153-8f3224b5fc10","subtype":"Figure","type":"Plot"},"ticker":{"id":"40806a5d-4fa0-482c-95f4-d8daf3714c64","type":"BasicTicker"}},"id":"54de30f6-1c86-4d7f-8405-db1a46c956eb","type":"LinearAxis"},{"attributes":{},"id":"2ee20fc9-7ae9-4aae-a532-51b8ac427ae2","type":"LinearScale"},{"attributes":{},"id":"05d34f3f-bad4-4ac3-bf45-72c3d7fcba2c","type":"SaveTool"},{"attributes":{"overlay":{"id":"f31092e3-033f-4b7d-8cf7-31346099eea4","type":"BoxAnnotation"}},"id":"e8391e52-111b-4c99-8335-438388a0dcdb","type":"BoxZoomTool"},{"attributes":{},"id":"05409f21-3389-4af1-97eb-fa7f21b5a559","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"8eca781f-8e50-4d1f-9132-2cdd2716d6ea","type":"Segment"},{"attributes":{},"id":"1c5939a8-1e15-4135-9ee4-ece232c28a3d","type":"HelpTool"},{"attributes":{"source":{"id":"fa3bccc8-f160-4014-92e0-86185a73e4cb","type":"ColumnDataSource"}},"id":"c6c304b8-a5fe-43d7-8576-611206f559c5","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"82f77278-62e2-492e-a8cb-0d8ddb63907d","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f31092e3-033f-4b7d-8cf7-31346099eea4","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"c6d043ec-2450-4527-85f7-c7466f3f3a30","type":"Segment"},{"attributes":{},"id":"824ee165-01b0-4c2e-95c8-43a9dab78813","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"d6ecc865-f71e-4617-b153-8f3224b5fc10","subtype":"Figure","type":"Plot"},"ticker":{"id":"05409f21-3389-4af1-97eb-fa7f21b5a559","type":"BasicTicker"}},"id":"bd147420-5b82-48ee-bd55-24b9d055e93f","type":"Grid"}],"root_ids":["d6ecc865-f71e-4617-b153-8f3224b5fc10"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"87c4e1e4-1e07-485c-b84e-f8067e286f79","elementid":"09c5ee6d-30e3-40e0-90ef-f3101c454e44","modelid":"d6ecc865-f71e-4617-b153-8f3224b5fc10"}];
                
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
