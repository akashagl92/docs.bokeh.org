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
      };var element = document.getElementById("9f939874-f256-4c23-8875-fdbdc260a6ff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f939874-f256-4c23-8875-fdbdc260a6ff' but no matching script tag was found. ")
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
                var docs_json = {"b578cc7e-a52b-4c2e-90e1-6a905b137638":{"roots":{"references":[{"attributes":{"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"}},"id":"7ec8a0c8-8d85-412e-a59a-7d05f134db96","type":"ResetTool"},{"attributes":{},"id":"8efc9c94-712e-4408-9cbe-937bc35346c6","type":"BasicTickFormatter"},{"attributes":{},"id":"c9873eeb-26e5-4c8a-9624-b1821b85050a","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"f6fe38b4-e3b9-40f7-be9e-4da8dc0963b9","type":"Title"},{"attributes":{"formatter":{"id":"8efc9c94-712e-4408-9cbe-937bc35346c6","type":"BasicTickFormatter"},"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9065ddc8-8fcd-4c7e-a74c-4b58dd72749d","type":"BasicTicker"}},"id":"250c2ad9-7c00-482b-ae3e-16110db60395","type":"LinearAxis"},{"attributes":{"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"}},"id":"4f27794c-173d-4c20-9e9d-42f2d95abb67","type":"HelpTool"},{"attributes":{"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"}},"id":"58517322-d354-42cc-bfe1-1b328dd1b7da","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"6296dbd0-c5bd-4f7b-8899-a2e27d1194f6","type":"BoxAnnotation"},"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"}},"id":"fcb30c9c-ab39-499e-a242-7ec47133b1c0","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9065ddc8-8fcd-4c7e-a74c-4b58dd72749d","type":"BasicTicker"}},"id":"c5a32b29-c0c2-4084-af2a-308596b2981b","type":"Grid"},{"attributes":{"callback":null},"id":"8d5ad26a-f5a0-4cc9-b1d9-a8b936d5b881","type":"DataRange1d"},{"attributes":{"below":[{"id":"250c2ad9-7c00-482b-ae3e-16110db60395","type":"LinearAxis"}],"left":[{"id":"9a8fade0-ada5-4b24-bd34-f9957e191d34","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"250c2ad9-7c00-482b-ae3e-16110db60395","type":"LinearAxis"},{"id":"c5a32b29-c0c2-4084-af2a-308596b2981b","type":"Grid"},{"id":"9a8fade0-ada5-4b24-bd34-f9957e191d34","type":"LinearAxis"},{"id":"20c1b700-4f9b-4f34-80a6-d52513c2355d","type":"Grid"},{"id":"6296dbd0-c5bd-4f7b-8899-a2e27d1194f6","type":"BoxAnnotation"},{"id":"2710c6b7-8eb2-40fc-a23e-1549de1d25c9","type":"GlyphRenderer"}],"title":{"id":"f6fe38b4-e3b9-40f7-be9e-4da8dc0963b9","type":"Title"},"tool_events":{"id":"c9873eeb-26e5-4c8a-9624-b1821b85050a","type":"ToolEvents"},"toolbar":{"id":"abe47725-e915-4766-8ec7-c887d492efb9","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"e5352e34-b519-468b-843d-0f24d811a8c1","type":"DataRange1d"},"y_range":{"id":"8d5ad26a-f5a0-4cc9-b1d9-a8b936d5b881","type":"DataRange1d"}},"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"}},"id":"6f9f71f7-f425-4365-825f-29069c933264","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffc88f9d-a90b-4c40-8993-5aa1585033ab","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"},"ticker":{"id":"83f6152a-c8f8-4e3e-8573-8502572178e2","type":"BasicTicker"}},"id":"20c1b700-4f9b-4f34-80a6-d52513c2355d","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6296dbd0-c5bd-4f7b-8899-a2e27d1194f6","type":"BoxAnnotation"},{"attributes":{},"id":"25c4c04e-a72f-4bc5-aa11-89d556d566f6","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6f9f71f7-f425-4365-825f-29069c933264","type":"PanTool"},{"id":"58517322-d354-42cc-bfe1-1b328dd1b7da","type":"WheelZoomTool"},{"id":"fcb30c9c-ab39-499e-a242-7ec47133b1c0","type":"BoxZoomTool"},{"id":"d89fd50b-59d9-4430-aeb9-9f01e13a03c9","type":"SaveTool"},{"id":"7ec8a0c8-8d85-412e-a59a-7d05f134db96","type":"ResetTool"},{"id":"4f27794c-173d-4c20-9e9d-42f2d95abb67","type":"HelpTool"}]},"id":"abe47725-e915-4766-8ec7-c887d492efb9","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad026944-4530-42b4-8c2d-513ada2eda03","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"dd8fccf7-3eb3-450a-9580-e5d00aa917ce","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"25c4c04e-a72f-4bc5-aa11-89d556d566f6","type":"BasicTickFormatter"},"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"},"ticker":{"id":"83f6152a-c8f8-4e3e-8573-8502572178e2","type":"BasicTicker"}},"id":"9a8fade0-ada5-4b24-bd34-f9957e191d34","type":"LinearAxis"},{"attributes":{"plot":{"id":"a72fabf9-c5f5-4706-84b9-bcd2070b230f","subtype":"Figure","type":"Plot"}},"id":"d89fd50b-59d9-4430-aeb9-9f01e13a03c9","type":"SaveTool"},{"attributes":{},"id":"9065ddc8-8fcd-4c7e-a74c-4b58dd72749d","type":"BasicTicker"},{"attributes":{},"id":"83f6152a-c8f8-4e3e-8573-8502572178e2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"e5352e34-b519-468b-843d-0f24d811a8c1","type":"DataRange1d"},{"attributes":{"data_source":{"id":"dd8fccf7-3eb3-450a-9580-e5d00aa917ce","type":"ColumnDataSource"},"glyph":{"id":"ad026944-4530-42b4-8c2d-513ada2eda03","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ffc88f9d-a90b-4c40-8993-5aa1585033ab","type":"Circle"},"selection_glyph":null},"id":"2710c6b7-8eb2-40fc-a23e-1549de1d25c9","type":"GlyphRenderer"}],"root_ids":["a72fabf9-c5f5-4706-84b9-bcd2070b230f"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"b578cc7e-a52b-4c2e-90e1-6a905b137638","elementid":"9f939874-f256-4c23-8875-fdbdc260a6ff","modelid":"a72fabf9-c5f5-4706-84b9-bcd2070b230f"}];
                
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
