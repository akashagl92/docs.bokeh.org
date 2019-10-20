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
      };var element = document.getElementById("8d295d68-c268-4331-869a-6852a542c3ab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d295d68-c268-4331-869a-6852a542c3ab' but no matching script tag was found. ")
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
                var docs_json = {"23f58170-c997-4e08-895c-26c743c8f021":{"roots":{"references":[{"attributes":{"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"}},"id":"d5076255-5dca-4cc1-9d7a-5a4cd76988a8","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"c01a0517-01bb-4171-83cd-fcafcd2bed6d","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"efa0dc6a-bc7e-477a-b76e-1de95905b688","type":"Title"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e990c92a-752f-43dd-a722-d40f5aa47fc0","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"},"ticker":{"id":"59a7653d-8621-41f2-80b1-f321364104bf","type":"BasicTicker"}},"id":"d60cc637-d17b-4941-9a60-3751759c7a50","type":"Grid"},{"attributes":{},"id":"4736b318-d3a4-499f-95ca-3c46f47d21f4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"}},"id":"3db71602-d2be-43fd-b11c-b747dac9f648","type":"ResetTool"},{"attributes":{},"id":"6621737b-e059-400e-908b-92fb47b97240","type":"LinearScale"},{"attributes":{"callback":null},"id":"494e21fc-4db7-4b32-8449-41771d8de293","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a88a1402-6eee-4282-a360-a1b7db5af066","type":"BasicTickFormatter"},"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"},"ticker":{"id":"59a7653d-8621-41f2-80b1-f321364104bf","type":"BasicTicker"}},"id":"47362f59-e244-46a6-9495-c958f22ae2d6","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1024f81b-3542-488f-a83d-69970fcf5c21","type":"BoxAnnotation"},"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"}},"id":"1e275d86-1b37-4373-8f9a-1a01827f8e18","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"4736b318-d3a4-499f-95ca-3c46f47d21f4","type":"BasicTickFormatter"},"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"},"ticker":{"id":"18c36a06-3197-4b4f-91c7-6323c63cbeca","type":"BasicTicker"}},"id":"3c2ce3e6-70ca-46b6-8b35-9c694b93e0e6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"151ca991-fbe1-459d-ad72-62b8ffc1a821","type":"ColumnDataSource"},"glyph":{"id":"e990c92a-752f-43dd-a722-d40f5aa47fc0","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"49a61f96-9d8c-4e9a-8950-9ef94080570b","type":"Rect"},"selection_glyph":null},"id":"d1aa1950-f3c1-4b13-8fd5-e7cfad6c811d","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"3c2ce3e6-70ca-46b6-8b35-9c694b93e0e6","type":"LinearAxis"}],"left":[{"id":"47362f59-e244-46a6-9495-c958f22ae2d6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3c2ce3e6-70ca-46b6-8b35-9c694b93e0e6","type":"LinearAxis"},{"id":"aca22c86-c341-4a7a-bb1f-88b75bcbb1bc","type":"Grid"},{"id":"47362f59-e244-46a6-9495-c958f22ae2d6","type":"LinearAxis"},{"id":"d60cc637-d17b-4941-9a60-3751759c7a50","type":"Grid"},{"id":"1024f81b-3542-488f-a83d-69970fcf5c21","type":"BoxAnnotation"},{"id":"d1aa1950-f3c1-4b13-8fd5-e7cfad6c811d","type":"GlyphRenderer"}],"title":{"id":"efa0dc6a-bc7e-477a-b76e-1de95905b688","type":"Title"},"tool_events":{"id":"c090868b-3acd-49c6-90dd-991726b27750","type":"ToolEvents"},"toolbar":{"id":"a6a7b988-9daa-4611-8e87-c17f592d3ed9","type":"Toolbar"},"x_range":{"id":"c01a0517-01bb-4171-83cd-fcafcd2bed6d","type":"DataRange1d"},"x_scale":{"id":"ba5155ae-6d16-447d-a471-4f8199656c5a","type":"LinearScale"},"y_range":{"id":"494e21fc-4db7-4b32-8449-41771d8de293","type":"DataRange1d"},"y_scale":{"id":"6621737b-e059-400e-908b-92fb47b97240","type":"LinearScale"}},"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18c36a06-3197-4b4f-91c7-6323c63cbeca","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"151ca991-fbe1-459d-ad72-62b8ffc1a821","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"}},"id":"ea9bbdea-c868-41ee-8347-f00a18c869d2","type":"SaveTool"},{"attributes":{"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"},"ticker":{"id":"18c36a06-3197-4b4f-91c7-6323c63cbeca","type":"BasicTicker"}},"id":"aca22c86-c341-4a7a-bb1f-88b75bcbb1bc","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"49a61f96-9d8c-4e9a-8950-9ef94080570b","type":"Rect"},{"attributes":{},"id":"ba5155ae-6d16-447d-a471-4f8199656c5a","type":"LinearScale"},{"attributes":{},"id":"59a7653d-8621-41f2-80b1-f321364104bf","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"582b001d-2283-4ba6-8fff-7b2c1b473684","type":"PanTool"},{"id":"d5076255-5dca-4cc1-9d7a-5a4cd76988a8","type":"WheelZoomTool"},{"id":"1e275d86-1b37-4373-8f9a-1a01827f8e18","type":"BoxZoomTool"},{"id":"ea9bbdea-c868-41ee-8347-f00a18c869d2","type":"SaveTool"},{"id":"3db71602-d2be-43fd-b11c-b747dac9f648","type":"ResetTool"},{"id":"4fdfa3ff-0272-4050-a525-5352cfb41505","type":"HelpTool"}]},"id":"a6a7b988-9daa-4611-8e87-c17f592d3ed9","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1024f81b-3542-488f-a83d-69970fcf5c21","type":"BoxAnnotation"},{"attributes":{},"id":"c090868b-3acd-49c6-90dd-991726b27750","type":"ToolEvents"},{"attributes":{"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"}},"id":"582b001d-2283-4ba6-8fff-7b2c1b473684","type":"PanTool"},{"attributes":{},"id":"a88a1402-6eee-4282-a360-a1b7db5af066","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a","subtype":"Figure","type":"Plot"}},"id":"4fdfa3ff-0272-4050-a525-5352cfb41505","type":"HelpTool"}],"root_ids":["4d128e2c-7c2c-479a-aad8-75737ac3cd7a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"23f58170-c997-4e08-895c-26c743c8f021","elementid":"8d295d68-c268-4331-869a-6852a542c3ab","modelid":"4d128e2c-7c2c-479a-aad8-75737ac3cd7a"}];
                
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
