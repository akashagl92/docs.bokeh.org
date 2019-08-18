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
      };var element = document.getElementById("23762b0e-6758-4a9b-a8c7-40725855ac1a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '23762b0e-6758-4a9b-a8c7-40725855ac1a' but no matching script tag was found. ")
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
                var docs_json = {"1c5946c7-96c5-42be-9324-89a53a04daca":{"roots":{"references":[{"attributes":{"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"}},"id":"1068d939-45b3-4bf7-b21c-15ad6f758f28","type":"PanTool"},{"attributes":{"data_source":{"id":"3fb8acd4-2f16-4809-8aaf-cb3c63407bfd","type":"ColumnDataSource"},"glyph":{"id":"5323109e-9ade-4340-9a5b-d1714e52322f","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95e8824d-d832-46a0-8c9f-1df5e9a1fd90","type":"Ray"},"selection_glyph":null},"id":"79bba221-4484-4ffb-8049-d49000df1d76","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"347addc4-a76d-45c3-a490-f726703f4521","type":"BasicTickFormatter"},"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"},"ticker":{"id":"ecbde95a-baa3-4225-9a64-3c5b51b56e38","type":"BasicTicker"}},"id":"b36b433a-b037-455f-8043-cb5557769983","type":"LinearAxis"},{"attributes":{},"id":"08d244c9-8f86-4882-b4d5-92c9b3fcbea8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","angle","y"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"3fb8acd4-2f16-4809-8aaf-cb3c63407bfd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"}},"id":"336660aa-bb4c-450f-aca3-467cb831d465","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e4a678c-3478-4236-a85d-66fe42155ced","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"}},"id":"c97b7b78-f36c-46c1-9fd0-4d982cfb29e0","type":"ResetTool"},{"attributes":{"overlay":{"id":"6e4a678c-3478-4236-a85d-66fe42155ced","type":"BoxAnnotation"},"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"}},"id":"57cd59a3-4679-4f04-8cef-a350f21136f3","type":"BoxZoomTool"},{"attributes":{},"id":"98f9f8d0-755e-44b8-9829-125b209842ac","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"b36b433a-b037-455f-8043-cb5557769983","type":"LinearAxis"}],"left":[{"id":"5668d041-057b-4d52-b956-eb157580c8ab","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b36b433a-b037-455f-8043-cb5557769983","type":"LinearAxis"},{"id":"f64d6280-1b83-4d73-8059-66c84ec79b17","type":"Grid"},{"id":"5668d041-057b-4d52-b956-eb157580c8ab","type":"LinearAxis"},{"id":"7322c5cc-3a61-4e75-8d6b-2a6192a7f585","type":"Grid"},{"id":"6e4a678c-3478-4236-a85d-66fe42155ced","type":"BoxAnnotation"},{"id":"79bba221-4484-4ffb-8049-d49000df1d76","type":"GlyphRenderer"}],"title":{"id":"80fa2718-58c1-48a2-9505-1aebb46bd24e","type":"Title"},"tool_events":{"id":"e69f0ee4-a4dd-45c0-a2b8-d168d469e39c","type":"ToolEvents"},"toolbar":{"id":"001085d5-e8f3-496f-b0dd-d7516439ab9b","type":"Toolbar"},"x_range":{"id":"4f2ae7d0-4354-4862-b8c5-1c499be3fa49","type":"DataRange1d"},"y_range":{"id":"316e646e-cf4e-4ca2-aad9-582050997e6d","type":"DataRange1d"}},"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ecbde95a-baa3-4225-9a64-3c5b51b56e38","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"80fa2718-58c1-48a2-9505-1aebb46bd24e","type":"Title"},{"attributes":{"callback":null},"id":"4f2ae7d0-4354-4862-b8c5-1c499be3fa49","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1068d939-45b3-4bf7-b21c-15ad6f758f28","type":"PanTool"},{"id":"bab0d349-7f5e-49da-8b9b-4bde1e5d81d2","type":"WheelZoomTool"},{"id":"57cd59a3-4679-4f04-8cef-a350f21136f3","type":"BoxZoomTool"},{"id":"85387760-6088-4b88-89ad-30060678a3c4","type":"SaveTool"},{"id":"c97b7b78-f36c-46c1-9fd0-4d982cfb29e0","type":"ResetTool"},{"id":"336660aa-bb4c-450f-aca3-467cb831d465","type":"HelpTool"}]},"id":"001085d5-e8f3-496f-b0dd-d7516439ab9b","type":"Toolbar"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5323109e-9ade-4340-9a5b-d1714e52322f","type":"Ray"},{"attributes":{},"id":"347addc4-a76d-45c3-a490-f726703f4521","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"316e646e-cf4e-4ca2-aad9-582050997e6d","type":"DataRange1d"},{"attributes":{},"id":"e69f0ee4-a4dd-45c0-a2b8-d168d469e39c","type":"ToolEvents"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"95e8824d-d832-46a0-8c9f-1df5e9a1fd90","type":"Ray"},{"attributes":{"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"},"ticker":{"id":"ecbde95a-baa3-4225-9a64-3c5b51b56e38","type":"BasicTicker"}},"id":"f64d6280-1b83-4d73-8059-66c84ec79b17","type":"Grid"},{"attributes":{"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"}},"id":"bab0d349-7f5e-49da-8b9b-4bde1e5d81d2","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"},"ticker":{"id":"08d244c9-8f86-4882-b4d5-92c9b3fcbea8","type":"BasicTicker"}},"id":"7322c5cc-3a61-4e75-8d6b-2a6192a7f585","type":"Grid"},{"attributes":{"formatter":{"id":"98f9f8d0-755e-44b8-9829-125b209842ac","type":"BasicTickFormatter"},"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"},"ticker":{"id":"08d244c9-8f86-4882-b4d5-92c9b3fcbea8","type":"BasicTicker"}},"id":"5668d041-057b-4d52-b956-eb157580c8ab","type":"LinearAxis"},{"attributes":{"plot":{"id":"ef7c8b5d-3d13-4d69-910b-cd79277bd602","subtype":"Figure","type":"Plot"}},"id":"85387760-6088-4b88-89ad-30060678a3c4","type":"SaveTool"}],"root_ids":["ef7c8b5d-3d13-4d69-910b-cd79277bd602"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"1c5946c7-96c5-42be-9324-89a53a04daca","elementid":"23762b0e-6758-4a9b-a8c7-40725855ac1a","modelid":"ef7c8b5d-3d13-4d69-910b-cd79277bd602"}];
                
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
