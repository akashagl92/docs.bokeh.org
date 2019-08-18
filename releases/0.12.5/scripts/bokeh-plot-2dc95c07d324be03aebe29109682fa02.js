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
      };var element = document.getElementById("21a92728-1c64-4e80-a1a4-9191e2bcc548");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '21a92728-1c64-4e80-a1a4-9191e2bcc548' but no matching script tag was found. ")
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
                var docs_json = {"db34ed83-07f5-4c21-84c8-f01a76cbc3b2":{"roots":{"references":[{"attributes":{},"id":"b0850a5c-7d7c-431f-b52e-e280fed29f91","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"}},"id":"3a0edc3b-935b-4ff9-8872-d17d767b5f02","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b500766-ba92-46f5-b7b1-4af6effac733","type":"Line"},{"attributes":{},"id":"fa8a8cfd-2260-41b1-9ea1-967fbbf01b6f","type":"BasicTicker"},{"attributes":{"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"}},"id":"09e6ce66-8e98-4994-898c-5a85d9641900","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"0557e0d1-9d53-425b-aec7-588f29e4529f","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"},"ticker":{"id":"feda1631-d246-4a3d-9446-36ebacc19424","type":"BasicTicker"}},"id":"0942259b-5d39-4d9e-aec5-05a9c4c9ffe4","type":"Grid"},{"attributes":{"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa8a8cfd-2260-41b1-9ea1-967fbbf01b6f","type":"BasicTicker"}},"id":"a20d1769-f562-4667-af3e-5ea2baf70a76","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe2ede7a-77e6-413b-837b-4539038bb46d","type":"Line"},{"attributes":{"formatter":{"id":"b0850a5c-7d7c-431f-b52e-e280fed29f91","type":"BasicTickFormatter"},"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa8a8cfd-2260-41b1-9ea1-967fbbf01b6f","type":"BasicTicker"}},"id":"4db07871-581c-417d-b484-2cd79c071458","type":"LinearAxis"},{"attributes":{"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"}},"id":"9744d865-b618-47e1-a0dc-2441d570667e","type":"HelpTool"},{"attributes":{"overlay":{"id":"fae428ad-87e3-4677-8754-4be0de6e4559","type":"BoxAnnotation"},"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"}},"id":"0d0b805f-9836-4c91-8f35-b6137e9de83e","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fae428ad-87e3-4677-8754-4be0de6e4559","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"}},"id":"e01b93ad-9b31-41b6-8f15-4cf3d32b0a20","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"}},"id":"08e6b3c6-781f-4504-8b77-9dd13847cffe","type":"PanTool"},{"attributes":{"formatter":{"id":"33846cfe-ba85-4409-bf47-0888ebc0ef26","type":"BasicTickFormatter"},"plot":{"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"},"ticker":{"id":"feda1631-d246-4a3d-9446-36ebacc19424","type":"BasicTicker"}},"id":"1cad5906-a576-4729-9b56-21e2065a3693","type":"LinearAxis"},{"attributes":{},"id":"33846cfe-ba85-4409-bf47-0888ebc0ef26","type":"BasicTickFormatter"},{"attributes":{},"id":"feda1631-d246-4a3d-9446-36ebacc19424","type":"BasicTicker"},{"attributes":{"below":[{"id":"4db07871-581c-417d-b484-2cd79c071458","type":"LinearAxis"}],"left":[{"id":"1cad5906-a576-4729-9b56-21e2065a3693","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4db07871-581c-417d-b484-2cd79c071458","type":"LinearAxis"},{"id":"a20d1769-f562-4667-af3e-5ea2baf70a76","type":"Grid"},{"id":"1cad5906-a576-4729-9b56-21e2065a3693","type":"LinearAxis"},{"id":"0942259b-5d39-4d9e-aec5-05a9c4c9ffe4","type":"Grid"},{"id":"fae428ad-87e3-4677-8754-4be0de6e4559","type":"BoxAnnotation"},{"id":"20593995-2b46-4417-adc0-58866bae703c","type":"GlyphRenderer"}],"title":{"id":"0557e0d1-9d53-425b-aec7-588f29e4529f","type":"Title"},"tool_events":{"id":"d6ca0f7e-5e43-479c-9730-b125f2bb7f9c","type":"ToolEvents"},"toolbar":{"id":"4ae5a5ed-6ee7-42a5-9f42-152e061292dc","type":"Toolbar"},"x_range":{"id":"55a12627-e8ef-480d-b5e3-982af39064b5","type":"DataRange1d"},"y_range":{"id":"f0953eed-300d-491a-9bef-0511c02c3023","type":"DataRange1d"}},"id":"5fd6caac-9165-4908-b696-e04385663165","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"55a12627-e8ef-480d-b5e3-982af39064b5","type":"DataRange1d"},{"attributes":{},"id":"d6ca0f7e-5e43-479c-9730-b125f2bb7f9c","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"08e6b3c6-781f-4504-8b77-9dd13847cffe","type":"PanTool"},{"id":"e01b93ad-9b31-41b6-8f15-4cf3d32b0a20","type":"WheelZoomTool"},{"id":"0d0b805f-9836-4c91-8f35-b6137e9de83e","type":"BoxZoomTool"},{"id":"09e6ce66-8e98-4994-898c-5a85d9641900","type":"SaveTool"},{"id":"3a0edc3b-935b-4ff9-8872-d17d767b5f02","type":"ResetTool"},{"id":"9744d865-b618-47e1-a0dc-2441d570667e","type":"HelpTool"}]},"id":"4ae5a5ed-6ee7-42a5-9f42-152e061292dc","type":"Toolbar"},{"attributes":{"callback":null},"id":"f0953eed-300d-491a-9bef-0511c02c3023","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"d9560e09-22c2-4cbf-826b-77d58b38a848","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d9560e09-22c2-4cbf-826b-77d58b38a848","type":"ColumnDataSource"},"glyph":{"id":"fe2ede7a-77e6-413b-837b-4539038bb46d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6b500766-ba92-46f5-b7b1-4af6effac733","type":"Line"},"selection_glyph":null},"id":"20593995-2b46-4417-adc0-58866bae703c","type":"GlyphRenderer"}],"root_ids":["5fd6caac-9165-4908-b696-e04385663165"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"db34ed83-07f5-4c21-84c8-f01a76cbc3b2","elementid":"21a92728-1c64-4e80-a1a4-9191e2bcc548","modelid":"5fd6caac-9165-4908-b696-e04385663165"}];
                
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
