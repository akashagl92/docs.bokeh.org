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
      };var element = document.getElementById("6be5552d-7f81-412d-b6da-c97857cd5291");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6be5552d-7f81-412d-b6da-c97857cd5291' but no matching script tag was found. ")
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
                var docs_json = {"f61066fa-6333-41f3-a155-7cb7d26f9f86":{"roots":{"references":[{"attributes":{"data_source":{"id":"2e6b0a20-2f00-48dc-9089-e00211aa3254","type":"ColumnDataSource"},"glyph":{"id":"59b67041-ba81-4995-9621-3cbd5b40f665","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"54e8edc7-d986-41ce-ab29-eb6fb3c6a9cd","type":"Patch"},"selection_glyph":null},"id":"5eddeb20-789f-48ef-8540-2c9a0e76fc26","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"}},"id":"e5a438bf-4113-4d60-bbf1-9fbd7bb90c32","type":"SaveTool"},{"attributes":{"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"}},"id":"9b033413-34d2-4ce2-ab95-fd92c764aefa","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b44ade97-6b5e-4bd0-8eed-f53889a5ad8b","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"aba4997c-9fcc-4bba-9d4c-ddad058afded","type":"Title"},{"attributes":{"formatter":{"id":"9c41af1a-74b8-4c48-ac2a-7caab54fbb5e","type":"BasicTickFormatter"},"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e64056d-3b18-461f-9496-6fba7b73f8a5","type":"BasicTicker"}},"id":"fd5ba8cd-70b8-498b-87af-73c54210b65b","type":"LinearAxis"},{"attributes":{},"id":"8e64056d-3b18-461f-9496-6fba7b73f8a5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e64056d-3b18-461f-9496-6fba7b73f8a5","type":"BasicTicker"}},"id":"3e4e298a-a933-4c9c-b0df-08f89d8ae1a2","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"54e8edc7-d986-41ce-ab29-eb6fb3c6a9cd","type":"Patch"},{"attributes":{"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"140c45a1-403d-4788-b3d4-eabe104853c6","type":"BasicTicker"}},"id":"a40130d8-8970-408e-9dcc-0abd9b085201","type":"Grid"},{"attributes":{"below":[{"id":"897456ff-1d63-4ba3-8833-d7b6b646fa78","type":"LinearAxis"}],"left":[{"id":"fd5ba8cd-70b8-498b-87af-73c54210b65b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"897456ff-1d63-4ba3-8833-d7b6b646fa78","type":"LinearAxis"},{"id":"a40130d8-8970-408e-9dcc-0abd9b085201","type":"Grid"},{"id":"fd5ba8cd-70b8-498b-87af-73c54210b65b","type":"LinearAxis"},{"id":"3e4e298a-a933-4c9c-b0df-08f89d8ae1a2","type":"Grid"},{"id":"b44ade97-6b5e-4bd0-8eed-f53889a5ad8b","type":"BoxAnnotation"},{"id":"5eddeb20-789f-48ef-8540-2c9a0e76fc26","type":"GlyphRenderer"}],"title":{"id":"aba4997c-9fcc-4bba-9d4c-ddad058afded","type":"Title"},"tool_events":{"id":"fc9fc200-8ea3-4481-8ca4-d61dc64f5935","type":"ToolEvents"},"toolbar":{"id":"b534fc8b-045f-4a2a-8326-c9530733b119","type":"Toolbar"},"x_range":{"id":"65a548c8-3c5d-4118-b379-d0455845a080","type":"DataRange1d"},"y_range":{"id":"34e8a792-8e21-4025-bacf-806d43bbe5cf","type":"DataRange1d"}},"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9b033413-34d2-4ce2-ab95-fd92c764aefa","type":"PanTool"},{"id":"82707322-780f-4742-86de-c152347cb85c","type":"WheelZoomTool"},{"id":"6a5349ba-cc8f-4faa-9d4e-004467dff5aa","type":"BoxZoomTool"},{"id":"e5a438bf-4113-4d60-bbf1-9fbd7bb90c32","type":"SaveTool"},{"id":"3f0cd1a7-0e7c-4de9-b91f-8d3aedcd929d","type":"ResetTool"},{"id":"f6c2ad61-994b-489f-93c5-286d8f4dad1d","type":"HelpTool"}]},"id":"b534fc8b-045f-4a2a-8326-c9530733b119","type":"Toolbar"},{"attributes":{"callback":null},"id":"34e8a792-8e21-4025-bacf-806d43bbe5cf","type":"DataRange1d"},{"attributes":{},"id":"140c45a1-403d-4788-b3d4-eabe104853c6","type":"BasicTicker"},{"attributes":{},"id":"8a55bf44-7613-49f7-a946-24e72fc63824","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"2e6b0a20-2f00-48dc-9089-e00211aa3254","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"}},"id":"f6c2ad61-994b-489f-93c5-286d8f4dad1d","type":"HelpTool"},{"attributes":{"formatter":{"id":"8a55bf44-7613-49f7-a946-24e72fc63824","type":"BasicTickFormatter"},"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"140c45a1-403d-4788-b3d4-eabe104853c6","type":"BasicTicker"}},"id":"897456ff-1d63-4ba3-8833-d7b6b646fa78","type":"LinearAxis"},{"attributes":{"callback":null},"id":"65a548c8-3c5d-4118-b379-d0455845a080","type":"DataRange1d"},{"attributes":{},"id":"9c41af1a-74b8-4c48-ac2a-7caab54fbb5e","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"59b67041-ba81-4995-9621-3cbd5b40f665","type":"Patch"},{"attributes":{"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"}},"id":"3f0cd1a7-0e7c-4de9-b91f-8d3aedcd929d","type":"ResetTool"},{"attributes":{"overlay":{"id":"b44ade97-6b5e-4bd0-8eed-f53889a5ad8b","type":"BoxAnnotation"},"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"}},"id":"6a5349ba-cc8f-4faa-9d4e-004467dff5aa","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c","subtype":"Figure","type":"Plot"}},"id":"82707322-780f-4742-86de-c152347cb85c","type":"WheelZoomTool"},{"attributes":{},"id":"fc9fc200-8ea3-4481-8ca4-d61dc64f5935","type":"ToolEvents"}],"root_ids":["e30dd1ee-57af-401e-b4d1-6fe119f7ba7c"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"f61066fa-6333-41f3-a155-7cb7d26f9f86","elementid":"6be5552d-7f81-412d-b6da-c97857cd5291","modelid":"e30dd1ee-57af-401e-b4d1-6fe119f7ba7c"}];
                
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
