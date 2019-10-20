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
      };var element = document.getElementById("b659c4c7-fe49-4327-8ca3-a68924886747");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b659c4c7-fe49-4327-8ca3-a68924886747' but no matching script tag was found. ")
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
                var docs_json = {"f9590cac-74cd-4779-b578-2714585916e9":{"roots":{"references":[{"attributes":{},"id":"be546646-962f-4e50-9ed6-906b197c19ff","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8442ffb6-1e51-4735-ae67-3e2c1fac4998","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"eba1ed88-0a71-4ac9-a3d3-b2d6898e01e1","type":"Diamond"},{"attributes":{"below":[{"id":"1c2ea9ae-f54c-4091-a91f-96d0dab1d6bb","type":"LinearAxis"}],"left":[{"id":"9061c318-f14e-4a5b-8f6d-fb2e0c0d115e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1c2ea9ae-f54c-4091-a91f-96d0dab1d6bb","type":"LinearAxis"},{"id":"d0652004-a971-494f-9c4f-975b3dd84d4b","type":"Grid"},{"id":"9061c318-f14e-4a5b-8f6d-fb2e0c0d115e","type":"LinearAxis"},{"id":"5d0b9be2-8e27-4d00-a020-d25c432c46bd","type":"Grid"},{"id":"8442ffb6-1e51-4735-ae67-3e2c1fac4998","type":"BoxAnnotation"},{"id":"abc12be3-17d1-4e0a-ad0c-79bb4760a1de","type":"GlyphRenderer"}],"title":{"id":"933e81ac-97d8-4998-b58a-571c65149e27","type":"Title"},"tool_events":{"id":"7bb8e3b0-85d3-4108-b8bb-012b734202b2","type":"ToolEvents"},"toolbar":{"id":"06807453-2442-4c95-9212-504126dbab80","type":"Toolbar"},"x_range":{"id":"9dfccaca-1057-4dc7-93e6-af83e568466a","type":"DataRange1d"},"y_range":{"id":"ab01bcac-3ea2-4a4f-9d9c-89abbf762395","type":"DataRange1d"}},"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d53f8e0c-f778-490d-b453-fe42041d237f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"adb1f9a5-de03-425d-8b25-18af2f7d5e1f","type":"ColumnDataSource"},"glyph":{"id":"179ab851-18c5-4c50-9824-b4f1044fc7f7","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eba1ed88-0a71-4ac9-a3d3-b2d6898e01e1","type":"Diamond"},"selection_glyph":null},"id":"abc12be3-17d1-4e0a-ad0c-79bb4760a1de","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"bcd243c5-2a42-4a33-b66d-da67388c4664","type":"BasicTicker"}},"id":"d0652004-a971-494f-9c4f-975b3dd84d4b","type":"Grid"},{"attributes":{"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"}},"id":"b30ad971-2f19-4a6d-83bb-e031267691de","type":"SaveTool"},{"attributes":{"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"}},"id":"30d32352-f099-4efd-ad4e-c18987cb7823","type":"WheelZoomTool"},{"attributes":{},"id":"cdddffaa-a210-4f58-87f6-a61219113075","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"179ab851-18c5-4c50-9824-b4f1044fc7f7","type":"Diamond"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fb0630a1-8e0a-4361-a3db-6f2b33813b28","type":"PanTool"},{"id":"30d32352-f099-4efd-ad4e-c18987cb7823","type":"WheelZoomTool"},{"id":"f14cea16-795a-43c5-8e3e-fa8f0c675545","type":"BoxZoomTool"},{"id":"b30ad971-2f19-4a6d-83bb-e031267691de","type":"SaveTool"},{"id":"dac0a3c4-1ec7-44fc-8864-b762dc789e29","type":"ResetTool"},{"id":"156dcd69-3d15-4437-ba76-53e7691bc7d9","type":"HelpTool"}]},"id":"06807453-2442-4c95-9212-504126dbab80","type":"Toolbar"},{"attributes":{"callback":null},"id":"9dfccaca-1057-4dc7-93e6-af83e568466a","type":"DataRange1d"},{"attributes":{"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"}},"id":"dac0a3c4-1ec7-44fc-8864-b762dc789e29","type":"ResetTool"},{"attributes":{"overlay":{"id":"8442ffb6-1e51-4735-ae67-3e2c1fac4998","type":"BoxAnnotation"},"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"}},"id":"f14cea16-795a-43c5-8e3e-fa8f0c675545","type":"BoxZoomTool"},{"attributes":{},"id":"bcd243c5-2a42-4a33-b66d-da67388c4664","type":"BasicTicker"},{"attributes":{"formatter":{"id":"be546646-962f-4e50-9ed6-906b197c19ff","type":"BasicTickFormatter"},"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdddffaa-a210-4f58-87f6-a61219113075","type":"BasicTicker"}},"id":"9061c318-f14e-4a5b-8f6d-fb2e0c0d115e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ab01bcac-3ea2-4a4f-9d9c-89abbf762395","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"933e81ac-97d8-4998-b58a-571c65149e27","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdddffaa-a210-4f58-87f6-a61219113075","type":"BasicTicker"}},"id":"5d0b9be2-8e27-4d00-a020-d25c432c46bd","type":"Grid"},{"attributes":{"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"}},"id":"156dcd69-3d15-4437-ba76-53e7691bc7d9","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"adb1f9a5-de03-425d-8b25-18af2f7d5e1f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"}},"id":"fb0630a1-8e0a-4361-a3db-6f2b33813b28","type":"PanTool"},{"attributes":{"formatter":{"id":"d53f8e0c-f778-490d-b453-fe42041d237f","type":"BasicTickFormatter"},"plot":{"id":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f","subtype":"Figure","type":"Plot"},"ticker":{"id":"bcd243c5-2a42-4a33-b66d-da67388c4664","type":"BasicTicker"}},"id":"1c2ea9ae-f54c-4091-a91f-96d0dab1d6bb","type":"LinearAxis"},{"attributes":{},"id":"7bb8e3b0-85d3-4108-b8bb-012b734202b2","type":"ToolEvents"}],"root_ids":["3a321c45-6419-4c90-abbe-ae5fa8d70e3f"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"f9590cac-74cd-4779-b578-2714585916e9","elementid":"b659c4c7-fe49-4327-8ca3-a68924886747","modelid":"3a321c45-6419-4c90-abbe-ae5fa8d70e3f"}];
                
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
