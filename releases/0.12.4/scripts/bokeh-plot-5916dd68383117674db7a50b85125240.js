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
      };var element = document.getElementById("91c5b3e0-3e96-429f-9e84-fd65be22302d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91c5b3e0-3e96-429f-9e84-fd65be22302d' but no matching script tag was found. ")
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
                var docs_json = {"6b125139-9c00-4533-a9ec-1135231a707a":{"roots":{"references":[{"attributes":{},"id":"da3faf48-0a19-47f7-b518-389d74c5dcbd","type":"BasicTicker"},{"attributes":{},"id":"dcf2a372-c920-4a39-89e6-586930a87520","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"781ce2da-add2-4c8f-877f-51415ed47fd9","type":"ColumnDataSource"},"glyph":{"id":"d4cedc3b-c621-462e-9b2d-a8639cf638ca","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"549c154e-fd55-484d-8385-28927721af7b","type":"Circle"},"selection_glyph":null},"id":"7e9a7c5d-1845-486f-adcc-5a29df0be6ca","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"},"ticker":{"id":"da3faf48-0a19-47f7-b518-389d74c5dcbd","type":"BasicTicker"}},"id":"004cd72b-9753-4336-a861-38760d56d752","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"781ce2da-add2-4c8f-877f-51415ed47fd9","type":"ColumnDataSource"},{"attributes":{},"id":"4368c97e-4381-4fe0-88c8-23f110616f09","type":"BasicTicker"},{"attributes":{"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"}},"id":"05630a43-b9e7-4cbd-b001-b4274f760967","type":"HelpTool"},{"attributes":{"below":[{"id":"d4005dbf-0786-4914-955e-8910f42a050a","type":"LinearAxis"}],"left":[{"id":"5aaf4337-0bbe-4a50-8b13-5ace589005b2","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"d4005dbf-0786-4914-955e-8910f42a050a","type":"LinearAxis"},{"id":"88441769-abff-4f9b-bcc6-1fce885b6194","type":"Grid"},{"id":"5aaf4337-0bbe-4a50-8b13-5ace589005b2","type":"LinearAxis"},{"id":"004cd72b-9753-4336-a861-38760d56d752","type":"Grid"},{"id":"a4d188c6-5a5c-435a-aff1-73780702f480","type":"BoxAnnotation"},{"id":"7e9a7c5d-1845-486f-adcc-5a29df0be6ca","type":"GlyphRenderer"}],"title":{"id":"92331d99-927a-4737-9a88-e5583aca3d0f","type":"Title"},"tool_events":{"id":"f7a99e94-3ada-43fd-a406-6e66f6ed6566","type":"ToolEvents"},"toolbar":{"id":"7ae56a75-24cf-4296-86a8-873314cbba54","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"9a01a662-1a0d-421a-9032-5b8b493e25d9","type":"DataRange1d"},"y_range":{"id":"14088a22-3ddc-4847-bd5a-9f9d57d20c7c","type":"DataRange1d"}},"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"}},"id":"9350db85-0cfb-4cb1-9144-83ae52efa815","type":"PanTool"},{"attributes":{"callback":null},"id":"14088a22-3ddc-4847-bd5a-9f9d57d20c7c","type":"DataRange1d"},{"attributes":{"overlay":{"id":"a4d188c6-5a5c-435a-aff1-73780702f480","type":"BoxAnnotation"},"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"}},"id":"0ffe8341-dd18-4e12-a46c-ac6136358b9f","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4cedc3b-c621-462e-9b2d-a8639cf638ca","type":"Circle"},{"attributes":{"formatter":{"id":"dcf2a372-c920-4a39-89e6-586930a87520","type":"BasicTickFormatter"},"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"},"ticker":{"id":"da3faf48-0a19-47f7-b518-389d74c5dcbd","type":"BasicTicker"}},"id":"5aaf4337-0bbe-4a50-8b13-5ace589005b2","type":"LinearAxis"},{"attributes":{"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"},"ticker":{"id":"4368c97e-4381-4fe0-88c8-23f110616f09","type":"BasicTicker"}},"id":"88441769-abff-4f9b-bcc6-1fce885b6194","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9350db85-0cfb-4cb1-9144-83ae52efa815","type":"PanTool"},{"id":"2555efc5-a87e-416d-906f-5716791391a3","type":"WheelZoomTool"},{"id":"0ffe8341-dd18-4e12-a46c-ac6136358b9f","type":"BoxZoomTool"},{"id":"aa506f9d-e665-45c7-8beb-e8d68c6ad261","type":"SaveTool"},{"id":"8ff21f3c-aa82-499d-997c-340460212a33","type":"ResetTool"},{"id":"05630a43-b9e7-4cbd-b001-b4274f760967","type":"HelpTool"}]},"id":"7ae56a75-24cf-4296-86a8-873314cbba54","type":"Toolbar"},{"attributes":{"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"}},"id":"8ff21f3c-aa82-499d-997c-340460212a33","type":"ResetTool"},{"attributes":{},"id":"f7a99e94-3ada-43fd-a406-6e66f6ed6566","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"549c154e-fd55-484d-8385-28927721af7b","type":"Circle"},{"attributes":{},"id":"0eb32fd3-a73c-4abd-bed6-ab3772e01fec","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a4d188c6-5a5c-435a-aff1-73780702f480","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"0eb32fd3-a73c-4abd-bed6-ab3772e01fec","type":"BasicTickFormatter"},"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"},"ticker":{"id":"4368c97e-4381-4fe0-88c8-23f110616f09","type":"BasicTicker"}},"id":"d4005dbf-0786-4914-955e-8910f42a050a","type":"LinearAxis"},{"attributes":{"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"}},"id":"2555efc5-a87e-416d-906f-5716791391a3","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"9a01a662-1a0d-421a-9032-5b8b493e25d9","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"92331d99-927a-4737-9a88-e5583aca3d0f","type":"Title"},{"attributes":{"plot":{"id":"fe7ad974-3453-4609-9e68-f1139849c69c","subtype":"Figure","type":"Plot"}},"id":"aa506f9d-e665-45c7-8beb-e8d68c6ad261","type":"SaveTool"}],"root_ids":["fe7ad974-3453-4609-9e68-f1139849c69c"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"6b125139-9c00-4533-a9ec-1135231a707a","elementid":"91c5b3e0-3e96-429f-9e84-fd65be22302d","modelid":"fe7ad974-3453-4609-9e68-f1139849c69c"}];
                
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
