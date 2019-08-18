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
      };var element = document.getElementById("c6722dfa-86fd-449d-b5c7-9c3946883062");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6722dfa-86fd-449d-b5c7-9c3946883062' but no matching script tag was found. ")
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
                var docs_json = {"f5b6b5c2-8899-4cb4-ab7f-6a2fc95d87d5":{"roots":{"references":[{"attributes":{},"id":"d445113e-dca0-4345-9041-836ab14f1c8e","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"53417fc7-9e02-45b9-805f-5ef22b53bc87","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"e7653ae6-2fba-4c62-ba66-d887d7727d6f","type":"VBar"},{"attributes":{"callback":null,"column_names":["top","x"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"0816d7f7-aa29-4fa5-aa52-22a031c6f67a","type":"ColumnDataSource"},{"attributes":{},"id":"40de520f-b3f4-4dff-bb06-db980de5528e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"40de520f-b3f4-4dff-bb06-db980de5528e","type":"BasicTickFormatter"},"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"},"ticker":{"id":"7965bc4f-218a-4c76-9e15-1163eb0b3f98","type":"BasicTicker"}},"id":"32af93b8-5d32-4700-a4e4-512ddd36dc7e","type":"LinearAxis"},{"attributes":{},"id":"93129bcb-3b06-4296-9abc-832221df7503","type":"BasicTickFormatter"},{"attributes":{},"id":"8ba3da36-aefc-40c9-82db-7c174b3bd5a6","type":"ToolEvents"},{"attributes":{"callback":null},"id":"8042345b-8f40-4476-a6bc-68709f557f20","type":"DataRange1d"},{"attributes":{"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"}},"id":"f9129c98-8d5f-44e4-bf6d-25a9bad94021","type":"HelpTool"},{"attributes":{"data_source":{"id":"0816d7f7-aa29-4fa5-aa52-22a031c6f67a","type":"ColumnDataSource"},"glyph":{"id":"53417fc7-9e02-45b9-805f-5ef22b53bc87","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e7653ae6-2fba-4c62-ba66-d887d7727d6f","type":"VBar"},"selection_glyph":null},"id":"87637be1-638e-4704-a9f1-376b11aa2222","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"16323fc5-5c5c-49db-8b15-dc8422fa7324","type":"PanTool"},{"id":"9e22a27e-f7dd-4bbe-bdab-60232a10ca07","type":"WheelZoomTool"},{"id":"dfac9ee2-9276-4bf4-9cf9-bd4dc5936192","type":"BoxZoomTool"},{"id":"88d7f676-372e-40e7-98cf-5b4dedb8357a","type":"SaveTool"},{"id":"3a447bfd-41c2-427d-9370-2eb5eb5e5f54","type":"ResetTool"},{"id":"f9129c98-8d5f-44e4-bf6d-25a9bad94021","type":"HelpTool"}]},"id":"cd2b6bac-23a7-438b-aa06-39c0dc4d21a7","type":"Toolbar"},{"attributes":{"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"}},"id":"3a447bfd-41c2-427d-9370-2eb5eb5e5f54","type":"ResetTool"},{"attributes":{"below":[{"id":"a7f10e9d-f6be-438b-8d68-5faf29b1911e","type":"LinearAxis"}],"left":[{"id":"32af93b8-5d32-4700-a4e4-512ddd36dc7e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a7f10e9d-f6be-438b-8d68-5faf29b1911e","type":"LinearAxis"},{"id":"747136ed-1064-48ee-b55f-0cbbab795e9f","type":"Grid"},{"id":"32af93b8-5d32-4700-a4e4-512ddd36dc7e","type":"LinearAxis"},{"id":"50d9f8b7-d625-4cf2-b68a-c35e4bb7b22b","type":"Grid"},{"id":"e057d670-1d2e-4e90-8381-06918606c06d","type":"BoxAnnotation"},{"id":"87637be1-638e-4704-a9f1-376b11aa2222","type":"GlyphRenderer"}],"title":{"id":"b823fcd0-d25c-491c-9008-bee82d461c9d","type":"Title"},"tool_events":{"id":"8ba3da36-aefc-40c9-82db-7c174b3bd5a6","type":"ToolEvents"},"toolbar":{"id":"cd2b6bac-23a7-438b-aa06-39c0dc4d21a7","type":"Toolbar"},"x_range":{"id":"1360fa86-2d62-45c3-8a98-1cd3d465ce78","type":"DataRange1d"},"y_range":{"id":"8042345b-8f40-4476-a6bc-68709f557f20","type":"DataRange1d"}},"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"1360fa86-2d62-45c3-8a98-1cd3d465ce78","type":"DataRange1d"},{"attributes":{"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"}},"id":"16323fc5-5c5c-49db-8b15-dc8422fa7324","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"},"ticker":{"id":"7965bc4f-218a-4c76-9e15-1163eb0b3f98","type":"BasicTicker"}},"id":"50d9f8b7-d625-4cf2-b68a-c35e4bb7b22b","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e057d670-1d2e-4e90-8381-06918606c06d","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"b823fcd0-d25c-491c-9008-bee82d461c9d","type":"Title"},{"attributes":{"overlay":{"id":"e057d670-1d2e-4e90-8381-06918606c06d","type":"BoxAnnotation"},"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"}},"id":"dfac9ee2-9276-4bf4-9cf9-bd4dc5936192","type":"BoxZoomTool"},{"attributes":{},"id":"7965bc4f-218a-4c76-9e15-1163eb0b3f98","type":"BasicTicker"},{"attributes":{"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"}},"id":"9e22a27e-f7dd-4bbe-bdab-60232a10ca07","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"}},"id":"88d7f676-372e-40e7-98cf-5b4dedb8357a","type":"SaveTool"},{"attributes":{"formatter":{"id":"93129bcb-3b06-4296-9abc-832221df7503","type":"BasicTickFormatter"},"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"},"ticker":{"id":"d445113e-dca0-4345-9041-836ab14f1c8e","type":"BasicTicker"}},"id":"a7f10e9d-f6be-438b-8d68-5faf29b1911e","type":"LinearAxis"},{"attributes":{"plot":{"id":"95842f3a-3c52-45e9-89d6-d441108e1518","subtype":"Figure","type":"Plot"},"ticker":{"id":"d445113e-dca0-4345-9041-836ab14f1c8e","type":"BasicTicker"}},"id":"747136ed-1064-48ee-b55f-0cbbab795e9f","type":"Grid"}],"root_ids":["95842f3a-3c52-45e9-89d6-d441108e1518"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"f5b6b5c2-8899-4cb4-ab7f-6a2fc95d87d5","elementid":"c6722dfa-86fd-449d-b5c7-9c3946883062","modelid":"95842f3a-3c52-45e9-89d6-d441108e1518"}];
                
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
