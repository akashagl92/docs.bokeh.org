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
      };var element = document.getElementById("4d4488fa-76fd-4671-a807-54ceaf5f8aa0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d4488fa-76fd-4671-a807-54ceaf5f8aa0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"c0e21e93-2579-4351-8bc1-6078748b38bc":{"roots":{"references":[{"attributes":{},"id":"309e6063-93aa-47f2-8fe4-a5f92e3a6a8d","type":"PanTool"},{"attributes":{},"id":"436b7b16-8ec3-4fbf-86e6-e0358834b035","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5a32ee24-6f4a-43b8-aa19-1652d1014beb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b99d659-3067-49d9-9c72-839e67113153","type":"BasicTicker"}},"id":"fb6ec7d4-1ee3-43da-8f01-3c65694c8134","type":"Grid"},{"attributes":{"data_source":{"id":"e292784f-2b4c-4703-9f94-ee3c8a4acc77","type":"ColumnDataSource"},"glyph":{"id":"02766c96-63c5-4eed-9a09-86a4de6be75e","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"daa5f96d-d249-4517-a344-d144473f2f88","type":"Oval"},"selection_glyph":null,"view":{"id":"f461a413-056c-4973-bd48-1bce890d61b1","type":"CDSView"}},"id":"4d9c0221-fb91-444e-a5fa-6f7d2dd29c24","type":"GlyphRenderer"},{"attributes":{},"id":"6e33d538-afd3-4226-8eac-e1f3eba7d6eb","type":"BasicTickFormatter"},{"attributes":{},"id":"c732db19-d0a6-4d6b-8f74-3175ce9fa660","type":"LinearScale"},{"attributes":{"plot":{"id":"5a32ee24-6f4a-43b8-aa19-1652d1014beb","subtype":"Figure","type":"Plot"},"ticker":{"id":"436b7b16-8ec3-4fbf-86e6-e0358834b035","type":"BasicTicker"}},"id":"492a8c76-11b6-44f6-b617-8d4db61acb55","type":"Grid"},{"attributes":{},"id":"08a146e4-a952-4e3c-a63c-e84a95bfd52b","type":"HelpTool"},{"attributes":{},"id":"b07d000b-a1a2-42a7-bc8b-8356be56ba57","type":"ResetTool"},{"attributes":{"formatter":{"id":"371d6235-04b7-46f0-b0f6-4b25f5638a18","type":"BasicTickFormatter"},"plot":{"id":"5a32ee24-6f4a-43b8-aa19-1652d1014beb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b99d659-3067-49d9-9c72-839e67113153","type":"BasicTicker"}},"id":"d1f88c91-76e5-4b25-8a6b-0672f9ffc30c","type":"LinearAxis"},{"attributes":{},"id":"371d6235-04b7-46f0-b0f6-4b25f5638a18","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"e292784f-2b4c-4703-9f94-ee3c8a4acc77","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e292784f-2b4c-4703-9f94-ee3c8a4acc77","type":"ColumnDataSource"}},"id":"f461a413-056c-4973-bd48-1bce890d61b1","type":"CDSView"},{"attributes":{},"id":"4b7a8d88-75e5-4e91-9a3d-1e80a5dbf53d","type":"WheelZoomTool"},{"attributes":{},"id":"3ee9a60b-3c1a-41b2-a054-d86afb3f780f","type":"LinearScale"},{"attributes":{"below":[{"id":"fde50069-9807-46c6-8c3d-16d8dec04282","type":"LinearAxis"}],"left":[{"id":"d1f88c91-76e5-4b25-8a6b-0672f9ffc30c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"fde50069-9807-46c6-8c3d-16d8dec04282","type":"LinearAxis"},{"id":"492a8c76-11b6-44f6-b617-8d4db61acb55","type":"Grid"},{"id":"d1f88c91-76e5-4b25-8a6b-0672f9ffc30c","type":"LinearAxis"},{"id":"fb6ec7d4-1ee3-43da-8f01-3c65694c8134","type":"Grid"},{"id":"e65d22c6-38ab-4959-aa50-e6ff6a15fe0c","type":"BoxAnnotation"},{"id":"4d9c0221-fb91-444e-a5fa-6f7d2dd29c24","type":"GlyphRenderer"}],"title":{"id":"590fd4b5-b90c-42a5-af2f-c702edb045df","type":"Title"},"toolbar":{"id":"63962b4d-1c6e-4554-af97-6e1cc330f220","type":"Toolbar"},"x_range":{"id":"51bf0226-2161-41c5-93c4-06b3fd23e501","type":"DataRange1d"},"x_scale":{"id":"3ee9a60b-3c1a-41b2-a054-d86afb3f780f","type":"LinearScale"},"y_range":{"id":"a5cd0f87-5159-4e62-9668-58efb4839f10","type":"DataRange1d"},"y_scale":{"id":"c732db19-d0a6-4d6b-8f74-3175ce9fa660","type":"LinearScale"}},"id":"5a32ee24-6f4a-43b8-aa19-1652d1014beb","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e65d22c6-38ab-4959-aa50-e6ff6a15fe0c","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"a5cd0f87-5159-4e62-9668-58efb4839f10","type":"DataRange1d"},{"attributes":{"callback":null},"id":"51bf0226-2161-41c5-93c4-06b3fd23e501","type":"DataRange1d"},{"attributes":{"overlay":{"id":"e65d22c6-38ab-4959-aa50-e6ff6a15fe0c","type":"BoxAnnotation"}},"id":"5ddef313-6545-427e-b183-37aa79fe0976","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"daa5f96d-d249-4517-a344-d144473f2f88","type":"Oval"},{"attributes":{"formatter":{"id":"6e33d538-afd3-4226-8eac-e1f3eba7d6eb","type":"BasicTickFormatter"},"plot":{"id":"5a32ee24-6f4a-43b8-aa19-1652d1014beb","subtype":"Figure","type":"Plot"},"ticker":{"id":"436b7b16-8ec3-4fbf-86e6-e0358834b035","type":"BasicTicker"}},"id":"fde50069-9807-46c6-8c3d-16d8dec04282","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"309e6063-93aa-47f2-8fe4-a5f92e3a6a8d","type":"PanTool"},{"id":"4b7a8d88-75e5-4e91-9a3d-1e80a5dbf53d","type":"WheelZoomTool"},{"id":"5ddef313-6545-427e-b183-37aa79fe0976","type":"BoxZoomTool"},{"id":"57c66ae7-afea-426e-9515-efbf586780c6","type":"SaveTool"},{"id":"b07d000b-a1a2-42a7-bc8b-8356be56ba57","type":"ResetTool"},{"id":"08a146e4-a952-4e3c-a63c-e84a95bfd52b","type":"HelpTool"}]},"id":"63962b4d-1c6e-4554-af97-6e1cc330f220","type":"Toolbar"},{"attributes":{},"id":"57c66ae7-afea-426e-9515-efbf586780c6","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"590fd4b5-b90c-42a5-af2f-c702edb045df","type":"Title"},{"attributes":{},"id":"1b99d659-3067-49d9-9c72-839e67113153","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"02766c96-63c5-4eed-9a09-86a4de6be75e","type":"Oval"}],"root_ids":["5a32ee24-6f4a-43b8-aa19-1652d1014beb"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c0e21e93-2579-4351-8bc1-6078748b38bc","elementid":"4d4488fa-76fd-4671-a807-54ceaf5f8aa0","modelid":"5a32ee24-6f4a-43b8-aa19-1652d1014beb"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
