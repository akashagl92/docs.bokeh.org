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
      };var element = document.getElementById("8603b45a-7c40-4cc9-a915-b6142c6e5914");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8603b45a-7c40-4cc9-a915-b6142c6e5914' but no matching script tag was found. ")
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
                var docs_json = {"e7634f4b-87ec-4242-982a-cf890c3c2bd8":{"roots":{"references":[{"attributes":{"data_source":{"id":"ab054d78-c029-4c68-9fc0-112f932f5891","type":"ColumnDataSource"},"glyph":{"id":"91538589-4ead-4844-aef0-cb043920eb35","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5020496d-2c1c-4370-b596-2ca4f2a811f4","type":"Circle"},"selection_glyph":null},"id":"5c421c62-2b0a-4a18-af9a-3a958c36283c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"}},"id":"18125438-fde9-4f87-8c71-e43e03b14af6","type":"ResetTool"},{"attributes":{"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"}},"id":"4b51abba-504c-444a-92b9-f326b10dac69","type":"PanTool"},{"attributes":{"data_source":{"id":"fd64e9a5-c223-47f3-a753-621a26968273","type":"ColumnDataSource"},"glyph":{"id":"9e75064c-b614-4cc6-b838-c03d28f42f12","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b66d669f-2f5a-47fb-8d7c-848c61a0b0e9","type":"Line"},"selection_glyph":null},"id":"114af7fe-c109-40b2-bcf2-d630278bebc9","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb37ed95-53d9-4710-892d-c123176b8772","type":"BasicTicker"}},"id":"42966040-e8f4-4bab-bd74-177e75c232c6","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4b51abba-504c-444a-92b9-f326b10dac69","type":"PanTool"},{"id":"624b1cf5-2959-4fd0-bdfc-f16b5c2d6f4a","type":"WheelZoomTool"},{"id":"70121960-d7ce-4ab7-b822-658d64c76831","type":"BoxZoomTool"},{"id":"7db534df-1c2f-4fad-9706-9b288b03f79a","type":"SaveTool"},{"id":"18125438-fde9-4f87-8c71-e43e03b14af6","type":"ResetTool"},{"id":"2358fc1a-20a0-46f4-87f3-3c87ebacb8c1","type":"HelpTool"}]},"id":"d465899c-e861-45cc-a2b9-9d0e2005f43a","type":"Toolbar"},{"attributes":{"formatter":{"id":"e0b43f9c-e042-442f-9ff1-8ede397d7347","type":"BasicTickFormatter"},"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"},"ticker":{"id":"067a95d4-1db1-4154-a833-805586357243","type":"BasicTicker"}},"id":"61c39242-4f2e-4990-a547-1430f1d9177a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"fd64e9a5-c223-47f3-a753-621a26968273","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"91538589-4ead-4844-aef0-cb043920eb35","type":"Circle"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e75064c-b614-4cc6-b838-c03d28f42f12","type":"Line"},{"attributes":{"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"}},"id":"7db534df-1c2f-4fad-9706-9b288b03f79a","type":"SaveTool"},{"attributes":{"below":[{"id":"61c39242-4f2e-4990-a547-1430f1d9177a","type":"LinearAxis"}],"left":[{"id":"9c3474f1-855e-4bfb-9f91-0f6c303c524c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"61c39242-4f2e-4990-a547-1430f1d9177a","type":"LinearAxis"},{"id":"2ff1c1ae-7460-4b84-a7d5-32b8c9458e19","type":"Grid"},{"id":"9c3474f1-855e-4bfb-9f91-0f6c303c524c","type":"LinearAxis"},{"id":"42966040-e8f4-4bab-bd74-177e75c232c6","type":"Grid"},{"id":"e7da4cca-ff53-4135-b115-6df65de46622","type":"BoxAnnotation"},{"id":"114af7fe-c109-40b2-bcf2-d630278bebc9","type":"GlyphRenderer"},{"id":"5c421c62-2b0a-4a18-af9a-3a958c36283c","type":"GlyphRenderer"}],"title":{"id":"90d98899-1520-4c84-8c41-55893ec89d92","type":"Title"},"tool_events":{"id":"1fc8e7ed-6c79-4c9b-842a-c20314844ad6","type":"ToolEvents"},"toolbar":{"id":"d465899c-e861-45cc-a2b9-9d0e2005f43a","type":"Toolbar"},"x_range":{"id":"c070b893-5b00-4fd5-8959-d3f157035880","type":"DataRange1d"},"y_range":{"id":"7a4210b5-fc09-4abc-b16a-c7306691ee1d","type":"DataRange1d"}},"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b66d669f-2f5a-47fb-8d7c-848c61a0b0e9","type":"Line"},{"attributes":{},"id":"e0b43f9c-e042-442f-9ff1-8ede397d7347","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"example"},"id":"90d98899-1520-4c84-8c41-55893ec89d92","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"ab054d78-c029-4c68-9fc0-112f932f5891","type":"ColumnDataSource"},{"attributes":{},"id":"067a95d4-1db1-4154-a833-805586357243","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4135eee2-ef15-4d44-86c7-736ea9dcb0b0","type":"BasicTickFormatter"},"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb37ed95-53d9-4710-892d-c123176b8772","type":"BasicTicker"}},"id":"9c3474f1-855e-4bfb-9f91-0f6c303c524c","type":"LinearAxis"},{"attributes":{"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"}},"id":"624b1cf5-2959-4fd0-bdfc-f16b5c2d6f4a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"}},"id":"2358fc1a-20a0-46f4-87f3-3c87ebacb8c1","type":"HelpTool"},{"attributes":{},"id":"1fc8e7ed-6c79-4c9b-842a-c20314844ad6","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e7da4cca-ff53-4135-b115-6df65de46622","type":"BoxAnnotation"},{"attributes":{},"id":"fb37ed95-53d9-4710-892d-c123176b8772","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7a4210b5-fc09-4abc-b16a-c7306691ee1d","type":"DataRange1d"},{"attributes":{},"id":"4135eee2-ef15-4d44-86c7-736ea9dcb0b0","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"e7da4cca-ff53-4135-b115-6df65de46622","type":"BoxAnnotation"},"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"}},"id":"70121960-d7ce-4ab7-b822-658d64c76831","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5020496d-2c1c-4370-b596-2ca4f2a811f4","type":"Circle"},{"attributes":{"plot":{"id":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db","subtype":"Figure","type":"Plot"},"ticker":{"id":"067a95d4-1db1-4154-a833-805586357243","type":"BasicTicker"}},"id":"2ff1c1ae-7460-4b84-a7d5-32b8c9458e19","type":"Grid"},{"attributes":{"callback":null},"id":"c070b893-5b00-4fd5-8959-d3f157035880","type":"DataRange1d"}],"root_ids":["a3b2fe75-5ddd-4c3a-9b19-c5c138d751db"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e7634f4b-87ec-4242-982a-cf890c3c2bd8","elementid":"8603b45a-7c40-4cc9-a915-b6142c6e5914","modelid":"a3b2fe75-5ddd-4c3a-9b19-c5c138d751db"}];
                
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
