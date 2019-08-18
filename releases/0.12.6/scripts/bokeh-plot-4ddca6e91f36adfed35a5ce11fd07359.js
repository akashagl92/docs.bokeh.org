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
      };var element = document.getElementById("ed7ade77-513b-4215-bb44-6d939554a752");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ed7ade77-513b-4215-bb44-6d939554a752' but no matching script tag was found. ")
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
                var docs_json = {"40695e2f-4c4e-44d4-b2d1-a3478169627c":{"roots":{"references":[{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0f0789f-c80d-466c-8f69-a6386dc4d1ff","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"77515b13-5e2e-447b-9a6f-5e5cf78bdc4d","type":"ColumnDataSource"},{"attributes":{},"id":"a7b1b3e4-24ed-40ef-92ad-dcc2cba07a8f","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"64aaad57-6be2-4921-ae92-28d000c6be28","type":"Circle"},{"attributes":{},"id":"1bccc86f-e7f1-4503-9569-d47faf1431ea","type":"LogScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"18839a23-7cc5-4266-99ff-bcf30e283c67","type":"Circle"},{"attributes":{"formatter":{"id":"8900297b-3e12-401c-b45f-fda0e7387f93","type":"LogTickFormatter"},"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4929b365-8207-4843-bf00-2664c2cee5b9","type":"LogTicker"}},"id":"838ce9f9-2336-4797-b3fe-a02ed8489ffc","type":"LogAxis"},{"attributes":{"ticker":null},"id":"8900297b-3e12-401c-b45f-fda0e7387f93","type":"LogTickFormatter"},{"attributes":{},"id":"8d26bc26-113a-47e0-9c80-8a83818b8a82","type":"BasicTicker"},{"attributes":{"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"}},"id":"b40b1e23-26d9-419c-9c12-7cc31196d2c3","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"a7b1b3e4-24ed-40ef-92ad-dcc2cba07a8f","type":"BasicTickFormatter"},"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d26bc26-113a-47e0-9c80-8a83818b8a82","type":"BasicTicker"}},"id":"c41f3ea4-b9ef-4491-a24c-2b639e0f2646","type":"LinearAxis"},{"attributes":{"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d26bc26-113a-47e0-9c80-8a83818b8a82","type":"BasicTicker"}},"id":"1d7b8faf-ef34-40d5-9cb4-8c6fd256d0e6","type":"Grid"},{"attributes":{"callback":null},"id":"81a6f559-ed1a-42c1-b624-cde046b9969c","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"e61ddb64-67ca-4fdd-8e96-96abe85b7a10","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d5f6c706-b1ea-405f-b056-c45f56d7f71a","type":"DataRange1d"},{"attributes":{"below":[{"id":"c41f3ea4-b9ef-4491-a24c-2b639e0f2646","type":"LinearAxis"}],"left":[{"id":"838ce9f9-2336-4797-b3fe-a02ed8489ffc","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c41f3ea4-b9ef-4491-a24c-2b639e0f2646","type":"LinearAxis"},{"id":"1d7b8faf-ef34-40d5-9cb4-8c6fd256d0e6","type":"Grid"},{"id":"838ce9f9-2336-4797-b3fe-a02ed8489ffc","type":"LogAxis"},{"id":"e708b5ec-80c5-4751-8f19-c3b43ed5fc89","type":"Grid"},{"id":"a44ef014-03fd-4a53-9871-059e9d4ff849","type":"BoxAnnotation"},{"id":"82d2b1ea-312b-4ceb-87d7-b3f48818c05f","type":"GlyphRenderer"},{"id":"ce91675f-41a6-42c0-ad50-5f5408ea0b26","type":"GlyphRenderer"}],"title":{"id":"bd6ea20a-6f8c-400a-b601-472164d58a02","type":"Title"},"tool_events":{"id":"0d031dd3-1d7d-4ca7-9627-cf0d024e0cca","type":"ToolEvents"},"toolbar":{"id":"4700fa02-5715-4fb9-9749-f7ecbd8d22a8","type":"Toolbar"},"x_range":{"id":"81a6f559-ed1a-42c1-b624-cde046b9969c","type":"DataRange1d"},"x_scale":{"id":"3ae15012-1d65-4417-a6a1-9989ea8479ed","type":"LinearScale"},"y_range":{"id":"d5f6c706-b1ea-405f-b056-c45f56d7f71a","type":"DataRange1d"},"y_scale":{"id":"1bccc86f-e7f1-4503-9569-d47faf1431ea","type":"LogScale"}},"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a44ef014-03fd-4a53-9871-059e9d4ff849","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"bd6ea20a-6f8c-400a-b601-472164d58a02","type":"Title"},{"attributes":{"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"}},"id":"e9429f2a-6ecf-41d5-a934-08d2c401882d","type":"SaveTool"},{"attributes":{},"id":"0d031dd3-1d7d-4ca7-9627-cf0d024e0cca","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e61ddb64-67ca-4fdd-8e96-96abe85b7a10","type":"ColumnDataSource"},"glyph":{"id":"64aaad57-6be2-4921-ae92-28d000c6be28","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18839a23-7cc5-4266-99ff-bcf30e283c67","type":"Circle"},"selection_glyph":null},"id":"ce91675f-41a6-42c0-ad50-5f5408ea0b26","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"a44ef014-03fd-4a53-9871-059e9d4ff849","type":"BoxAnnotation"},"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"}},"id":"9f695b31-1efc-466f-b13e-1a8a705c8e8a","type":"BoxZoomTool"},{"attributes":{"num_minor_ticks":10},"id":"4929b365-8207-4843-bf00-2664c2cee5b9","type":"LogTicker"},{"attributes":{"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"}},"id":"e88c1b34-c0a4-427a-84ce-5d37085b7812","type":"HelpTool"},{"attributes":{},"id":"3ae15012-1d65-4417-a6a1-9989ea8479ed","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"da2df3bf-bafa-4db1-b58f-02ba6a518b1f","type":"Line"},{"attributes":{"data_source":{"id":"77515b13-5e2e-447b-9a6f-5e5cf78bdc4d","type":"ColumnDataSource"},"glyph":{"id":"b0f0789f-c80d-466c-8f69-a6386dc4d1ff","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"da2df3bf-bafa-4db1-b58f-02ba6a518b1f","type":"Line"},"selection_glyph":null},"id":"82d2b1ea-312b-4ceb-87d7-b3f48818c05f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"}},"id":"8c2afc09-1c0f-4254-91b0-6acb565cc597","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4929b365-8207-4843-bf00-2664c2cee5b9","type":"LogTicker"}},"id":"e708b5ec-80c5-4751-8f19-c3b43ed5fc89","type":"Grid"},{"attributes":{"plot":{"id":"f41a8767-daf2-46a3-9dac-2a9245ede0f6","subtype":"Figure","type":"Plot"}},"id":"37813069-fd32-4e7e-b4c1-f7e310370720","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"37813069-fd32-4e7e-b4c1-f7e310370720","type":"PanTool"},{"id":"b40b1e23-26d9-419c-9c12-7cc31196d2c3","type":"WheelZoomTool"},{"id":"9f695b31-1efc-466f-b13e-1a8a705c8e8a","type":"BoxZoomTool"},{"id":"e9429f2a-6ecf-41d5-a934-08d2c401882d","type":"SaveTool"},{"id":"8c2afc09-1c0f-4254-91b0-6acb565cc597","type":"ResetTool"},{"id":"e88c1b34-c0a4-427a-84ce-5d37085b7812","type":"HelpTool"}]},"id":"4700fa02-5715-4fb9-9749-f7ecbd8d22a8","type":"Toolbar"}],"root_ids":["f41a8767-daf2-46a3-9dac-2a9245ede0f6"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"40695e2f-4c4e-44d4-b2d1-a3478169627c","elementid":"ed7ade77-513b-4215-bb44-6d939554a752","modelid":"f41a8767-daf2-46a3-9dac-2a9245ede0f6"}];
                
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
