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
      };var element = document.getElementById("db120f2d-897c-422a-85cc-b8200f27b275");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'db120f2d-897c-422a-85cc-b8200f27b275' but no matching script tag was found. ")
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
                var docs_json = {"336f3c5b-5449-4c56-a765-4469cf208256":{"roots":{"references":[{"attributes":{},"id":"110aff3e-0ea6-4dc9-b825-5f294654da6a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c48a7003-6958-4bad-b839-dc0387867cfa","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"82af84cd-32ac-4988-81fb-726858de32be","type":"Diamond"},{"attributes":{"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"07be6b56-411c-42b4-9d40-dc9a7e98828a","type":"BasicTicker"}},"id":"1649fa72-d1ed-46f7-8dbf-f7c74ec40355","type":"Grid"},{"attributes":{},"id":"8e540efe-eb89-42f6-8964-cc37c4c9c8de","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"35e5dde5-5ab1-4729-b42f-318c0e42e790","type":"ColumnDataSource"},"glyph":{"id":"2ce6b8de-ec7d-4fbc-90e0-8a97cfd78597","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82af84cd-32ac-4988-81fb-726858de32be","type":"Diamond"},"selection_glyph":null},"id":"cddf327f-e696-4f0f-9d82-357a3c5acffb","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ce6b8de-ec7d-4fbc-90e0-8a97cfd78597","type":"Diamond"},{"attributes":{},"id":"bb690ee6-1dfd-416c-890d-857bb75115bf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"}},"id":"77ca4de7-b001-41b5-a46d-49c8aab33cfd","type":"HelpTool"},{"attributes":{"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"}},"id":"4653b2e9-2e46-4dcb-a4fe-8ecf04a748d6","type":"PanTool"},{"attributes":{"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"}},"id":"85a23f58-36be-4769-9216-4aadc5fb92ee","type":"SaveTool"},{"attributes":{},"id":"6fb70cd9-bb5d-4c0a-9bf7-b9b930fc1889","type":"LinearScale"},{"attributes":{"formatter":{"id":"8e540efe-eb89-42f6-8964-cc37c4c9c8de","type":"BasicTickFormatter"},"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"110aff3e-0ea6-4dc9-b825-5f294654da6a","type":"BasicTicker"}},"id":"aeaa09d6-ae21-472d-b814-aa02305e7a8a","type":"LinearAxis"},{"attributes":{"below":[{"id":"bccb952a-b2bc-42ad-a81f-966dc8a553ae","type":"LinearAxis"}],"left":[{"id":"aeaa09d6-ae21-472d-b814-aa02305e7a8a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bccb952a-b2bc-42ad-a81f-966dc8a553ae","type":"LinearAxis"},{"id":"1649fa72-d1ed-46f7-8dbf-f7c74ec40355","type":"Grid"},{"id":"aeaa09d6-ae21-472d-b814-aa02305e7a8a","type":"LinearAxis"},{"id":"9b99e993-bb96-4b04-837d-e9c9ced269e6","type":"Grid"},{"id":"e9b344cc-341c-4edd-932c-707235c0cdce","type":"BoxAnnotation"},{"id":"cddf327f-e696-4f0f-9d82-357a3c5acffb","type":"GlyphRenderer"}],"title":{"id":"e2e87842-d589-40a2-b268-d005f751a7e1","type":"Title"},"tool_events":{"id":"735d9c7b-b10f-47b6-a687-bb86750d3530","type":"ToolEvents"},"toolbar":{"id":"a6ad7fdc-c8cb-4c1f-9293-da22e1b27734","type":"Toolbar"},"x_range":{"id":"7e3281d1-057b-4358-a94f-a25dc3e21639","type":"DataRange1d"},"x_scale":{"id":"57db0257-bc4e-444d-857a-cd1d3dea418d","type":"LinearScale"},"y_range":{"id":"c48a7003-6958-4bad-b839-dc0387867cfa","type":"DataRange1d"},"y_scale":{"id":"6fb70cd9-bb5d-4c0a-9bf7-b9b930fc1889","type":"LinearScale"}},"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"}},"id":"78ef1f06-894e-428c-bda6-946e4a206d41","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"e2e87842-d589-40a2-b268-d005f751a7e1","type":"Title"},{"attributes":{"formatter":{"id":"bb690ee6-1dfd-416c-890d-857bb75115bf","type":"BasicTickFormatter"},"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"07be6b56-411c-42b4-9d40-dc9a7e98828a","type":"BasicTicker"}},"id":"bccb952a-b2bc-42ad-a81f-966dc8a553ae","type":"LinearAxis"},{"attributes":{"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"}},"id":"fd64b151-812e-4de0-81a5-be7369dd5bfb","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"7e3281d1-057b-4358-a94f-a25dc3e21639","type":"DataRange1d"},{"attributes":{},"id":"07be6b56-411c-42b4-9d40-dc9a7e98828a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"110aff3e-0ea6-4dc9-b825-5f294654da6a","type":"BasicTicker"}},"id":"9b99e993-bb96-4b04-837d-e9c9ced269e6","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"35e5dde5-5ab1-4729-b42f-318c0e42e790","type":"ColumnDataSource"},{"attributes":{},"id":"57db0257-bc4e-444d-857a-cd1d3dea418d","type":"LinearScale"},{"attributes":{},"id":"735d9c7b-b10f-47b6-a687-bb86750d3530","type":"ToolEvents"},{"attributes":{"overlay":{"id":"e9b344cc-341c-4edd-932c-707235c0cdce","type":"BoxAnnotation"},"plot":{"id":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4","subtype":"Figure","type":"Plot"}},"id":"e48c7458-700b-4f3c-96f8-2149d73d1f86","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e9b344cc-341c-4edd-932c-707235c0cdce","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4653b2e9-2e46-4dcb-a4fe-8ecf04a748d6","type":"PanTool"},{"id":"fd64b151-812e-4de0-81a5-be7369dd5bfb","type":"WheelZoomTool"},{"id":"e48c7458-700b-4f3c-96f8-2149d73d1f86","type":"BoxZoomTool"},{"id":"85a23f58-36be-4769-9216-4aadc5fb92ee","type":"SaveTool"},{"id":"78ef1f06-894e-428c-bda6-946e4a206d41","type":"ResetTool"},{"id":"77ca4de7-b001-41b5-a46d-49c8aab33cfd","type":"HelpTool"}]},"id":"a6ad7fdc-c8cb-4c1f-9293-da22e1b27734","type":"Toolbar"}],"root_ids":["f09d8a09-52ef-4b27-b73e-d5f621c33fb4"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"336f3c5b-5449-4c56-a765-4469cf208256","elementid":"db120f2d-897c-422a-85cc-b8200f27b275","modelid":"f09d8a09-52ef-4b27-b73e-d5f621c33fb4"}];
                
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
