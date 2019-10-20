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
      };var element = document.getElementById("7df11d5c-f8cf-49a7-8a0e-b42628c351b1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7df11d5c-f8cf-49a7-8a0e-b42628c351b1' but no matching script tag was found. ")
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
                var docs_json = {"cd0baa62-6f3f-490b-98e6-8455f97cdaf8":{"roots":{"references":[{"attributes":{},"id":"fd632468-a6e4-43f2-845b-d383937a80ab","type":"BasicTicker"},{"attributes":{"align":"center","plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"c09185fa-1719-4ce2-8e3f-8d4bcffc18c4","type":"Title"},{"attributes":{},"id":"7da88e0c-8106-4e46-ae04-9fd82b941cd8","type":"BasicTicker"},{"attributes":{"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"}},"id":"ebe9d041-86cd-4fc5-b436-d84ad3a3bd13","type":"HelpTool"},{"attributes":{"callback":null},"id":"e0c0e294-542a-46af-9898-d31292836831","type":"DataRange1d"},{"attributes":{"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd632468-a6e4-43f2-845b-d383937a80ab","type":"BasicTicker"}},"id":"6855ddb2-d1b3-4b42-b3cf-860c8f4cabd5","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c03ac88d-2116-4a94-8c05-1f38eb527202","type":"Circle"},{"attributes":{},"id":"a180b500-078a-4661-a3f7-3b972adbdd39","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0fdca18c-7e7b-4f52-8a5b-9201de7544e9","type":"PanTool"},{"id":"e8e62998-8ee5-4b56-900f-a95b94b11f33","type":"WheelZoomTool"},{"id":"f45c3af4-9776-455d-a658-59bca4a5e667","type":"BoxZoomTool"},{"id":"293f99be-ffd2-42e5-bb5b-6ab1e881f37f","type":"SaveTool"},{"id":"0b262b42-bcba-42be-87e0-adffcb20a645","type":"ResetTool"},{"id":"ebe9d041-86cd-4fc5-b436-d84ad3a3bd13","type":"HelpTool"}]},"id":"c5cb68f0-0c5b-4f37-b3d6-2e9ca49ebf51","type":"Toolbar"},{"attributes":{"plot":null,"text":"Left Title"},"id":"0de31669-2a5a-481b-b612-955055f9b143","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"2785a090-abf6-4671-b447-53b0db6a6c12","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"795f6ef9-7e92-413e-b5c4-4a9874314207","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"d2a372fa-7e55-43af-bf55-b39631618d60","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"838fdd13-608f-430c-ab7c-e34d1a6593e5","type":"Circle"},{"attributes":{},"id":"aaa14bfe-5a64-478e-ba10-beefd2607eb2","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"},"ticker":{"id":"7da88e0c-8106-4e46-ae04-9fd82b941cd8","type":"BasicTicker"}},"id":"ee112011-d686-43c8-80a2-1dc02068a5d6","type":"Grid"},{"attributes":{},"id":"6f34c109-857b-4abc-9957-3ba86918c50a","type":"LinearScale"},{"attributes":{"formatter":{"id":"a180b500-078a-4661-a3f7-3b972adbdd39","type":"BasicTickFormatter"},"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"},"ticker":{"id":"7da88e0c-8106-4e46-ae04-9fd82b941cd8","type":"BasicTicker"}},"id":"f3ff9fb8-16ef-4b0a-9672-aef3fb2b3dd4","type":"LinearAxis"},{"attributes":{},"id":"06119836-c1db-4696-9ae6-949be54e7d4c","type":"LinearScale"},{"attributes":{},"id":"48eecf8a-9984-4b99-8ade-80e5e6229688","type":"ToolEvents"},{"attributes":{"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"}},"id":"0b262b42-bcba-42be-87e0-adffcb20a645","type":"ResetTool"},{"attributes":{"formatter":{"id":"aaa14bfe-5a64-478e-ba10-beefd2607eb2","type":"BasicTickFormatter"},"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd632468-a6e4-43f2-845b-d383937a80ab","type":"BasicTicker"}},"id":"eec3b439-f684-46b7-ad9d-00d62f82f5f6","type":"LinearAxis"},{"attributes":{"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"}},"id":"e8e62998-8ee5-4b56-900f-a95b94b11f33","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"795f6ef9-7e92-413e-b5c4-4a9874314207","type":"BoxAnnotation"},"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"}},"id":"f45c3af4-9776-455d-a658-59bca4a5e667","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"}},"id":"0fdca18c-7e7b-4f52-8a5b-9201de7544e9","type":"PanTool"},{"attributes":{"data_source":{"id":"2785a090-abf6-4671-b447-53b0db6a6c12","type":"ColumnDataSource"},"glyph":{"id":"838fdd13-608f-430c-ab7c-e34d1a6593e5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c03ac88d-2116-4a94-8c05-1f38eb527202","type":"Circle"},"selection_glyph":null},"id":"1d342628-c0b9-4e3a-99ef-91171f0b3459","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"eec3b439-f684-46b7-ad9d-00d62f82f5f6","type":"LinearAxis"},{"id":"c09185fa-1719-4ce2-8e3f-8d4bcffc18c4","type":"Title"}],"left":[{"id":"f3ff9fb8-16ef-4b0a-9672-aef3fb2b3dd4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"eec3b439-f684-46b7-ad9d-00d62f82f5f6","type":"LinearAxis"},{"id":"6855ddb2-d1b3-4b42-b3cf-860c8f4cabd5","type":"Grid"},{"id":"f3ff9fb8-16ef-4b0a-9672-aef3fb2b3dd4","type":"LinearAxis"},{"id":"ee112011-d686-43c8-80a2-1dc02068a5d6","type":"Grid"},{"id":"795f6ef9-7e92-413e-b5c4-4a9874314207","type":"BoxAnnotation"},{"id":"1d342628-c0b9-4e3a-99ef-91171f0b3459","type":"GlyphRenderer"},{"id":"c09185fa-1719-4ce2-8e3f-8d4bcffc18c4","type":"Title"}],"title":{"id":"0de31669-2a5a-481b-b612-955055f9b143","type":"Title"},"title_location":"left","tool_events":{"id":"48eecf8a-9984-4b99-8ade-80e5e6229688","type":"ToolEvents"},"toolbar":{"id":"c5cb68f0-0c5b-4f37-b3d6-2e9ca49ebf51","type":"Toolbar"},"x_range":{"id":"e0c0e294-542a-46af-9898-d31292836831","type":"DataRange1d"},"x_scale":{"id":"6f34c109-857b-4abc-9957-3ba86918c50a","type":"LinearScale"},"y_range":{"id":"d2a372fa-7e55-43af-bf55-b39631618d60","type":"DataRange1d"},"y_scale":{"id":"06119836-c1db-4696-9ae6-949be54e7d4c","type":"LinearScale"}},"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"1771b9ab-2762-472a-ab81-52dd82d5d01c","subtype":"Figure","type":"Plot"}},"id":"293f99be-ffd2-42e5-bb5b-6ab1e881f37f","type":"SaveTool"}],"root_ids":["1771b9ab-2762-472a-ab81-52dd82d5d01c"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"cd0baa62-6f3f-490b-98e6-8455f97cdaf8","elementid":"7df11d5c-f8cf-49a7-8a0e-b42628c351b1","modelid":"1771b9ab-2762-472a-ab81-52dd82d5d01c"}];
                
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
