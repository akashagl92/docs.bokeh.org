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
      };var element = document.getElementById("028c6eb6-9a28-4d73-8370-bba915467579");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '028c6eb6-9a28-4d73-8370-bba915467579' but no matching script tag was found. ")
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
                var docs_json = {"5168af93-5908-4262-9040-69a4ff2049b1":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"68d309ce-7cfa-437f-9638-d6ff1b5725db","type":"PanTool"},{"id":"d0c0ab70-408e-418e-b5c5-c9bdeafbeb3f","type":"WheelZoomTool"},{"id":"e4684802-76c5-4f7d-b37f-5009666aec03","type":"BoxZoomTool"},{"id":"dfb5cb82-44df-4bb9-9f0b-87678f137e8d","type":"SaveTool"},{"id":"09c8a400-6ff7-4c9f-92e7-94bbde2ab876","type":"ResetTool"},{"id":"b407385a-749d-4160-a88a-1edb518763eb","type":"HelpTool"}]},"id":"40353654-af88-4fef-9615-241d87e8ea11","type":"Toolbar"},{"attributes":{},"id":"2ffb72ba-184d-4ce7-a00e-fe084f0dfeca","type":"LinearScale"},{"attributes":{"overlay":{"id":"34d8d6f1-9149-4d3c-8919-bd5a4f652561","type":"BoxAnnotation"},"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"}},"id":"e4684802-76c5-4f7d-b37f-5009666aec03","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"dfb845c2-c7a9-4705-87c8-fe803d2fac91","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"63935901-028d-41a4-b5ca-149a31ed0fba","type":"BasicTickFormatter"},"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3144525-7e2a-4c53-90ae-d2da618e543c","type":"BasicTicker"}},"id":"cc9baf03-8dda-4ec1-bc94-8727282bb1b6","type":"LinearAxis"},{"attributes":{"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"}},"id":"b407385a-749d-4160-a88a-1edb518763eb","type":"HelpTool"},{"attributes":{},"id":"63935901-028d-41a4-b5ca-149a31ed0fba","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"}},"id":"09c8a400-6ff7-4c9f-92e7-94bbde2ab876","type":"ResetTool"},{"attributes":{},"id":"1b928d28-be01-4489-a122-96a4778ec5db","type":"ToolEvents"},{"attributes":{},"id":"f3144525-7e2a-4c53-90ae-d2da618e543c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"355758d5-9d7b-4864-9d5f-e79edd776835","type":"Circle"},{"attributes":{"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"}},"id":"d0c0ab70-408e-418e-b5c5-c9bdeafbeb3f","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"dfb845c2-c7a9-4705-87c8-fe803d2fac91","type":"ColumnDataSource"},"glyph":{"id":"eb7657c3-365d-4dd1-a0d3-eff44f0e7b44","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"355758d5-9d7b-4864-9d5f-e79edd776835","type":"Circle"},"selection_glyph":null},"id":"f03126f5-da29-4ce3-bf9f-eae69922cb51","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34d8d6f1-9149-4d3c-8919-bd5a4f652561","type":"BoxAnnotation"},{"attributes":{},"id":"59b58b21-e0e0-4503-9e51-25cb35963eb2","type":"CategoricalScale"},{"attributes":{"dimension":1,"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1c92404-6c93-4052-a4d0-b8e7d39a8184","type":"CategoricalTicker"}},"id":"c5ff628a-ff31-4531-b2af-48a16b965222","type":"Grid"},{"attributes":{"callback":null},"id":"68df777a-eae9-4d51-b40d-fa0f750a3b1d","type":"DataRange1d"},{"attributes":{},"id":"a8f17710-3335-4cef-b0c1-fcd01b281881","type":"CategoricalTickFormatter"},{"attributes":{},"id":"f1c92404-6c93-4052-a4d0-b8e7d39a8184","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"cc9baf03-8dda-4ec1-bc94-8727282bb1b6","type":"LinearAxis"}],"left":[{"id":"f26d3842-a120-4053-b3a3-d017784f121d","type":"CategoricalAxis"}],"renderers":[{"id":"cc9baf03-8dda-4ec1-bc94-8727282bb1b6","type":"LinearAxis"},{"id":"31cc8b4e-f3b2-4225-9006-a8a92b1ad0ad","type":"Grid"},{"id":"f26d3842-a120-4053-b3a3-d017784f121d","type":"CategoricalAxis"},{"id":"c5ff628a-ff31-4531-b2af-48a16b965222","type":"Grid"},{"id":"34d8d6f1-9149-4d3c-8919-bd5a4f652561","type":"BoxAnnotation"},{"id":"f03126f5-da29-4ce3-bf9f-eae69922cb51","type":"GlyphRenderer"}],"title":{"id":"66b8f926-615a-435b-9651-d434f5917e9a","type":"Title"},"tool_events":{"id":"1b928d28-be01-4489-a122-96a4778ec5db","type":"ToolEvents"},"toolbar":{"id":"40353654-af88-4fef-9615-241d87e8ea11","type":"Toolbar"},"x_range":{"id":"68df777a-eae9-4d51-b40d-fa0f750a3b1d","type":"DataRange1d"},"x_scale":{"id":"2ffb72ba-184d-4ce7-a00e-fe084f0dfeca","type":"LinearScale"},"y_range":{"id":"86c5b88f-8005-4d30-a79c-09c90c6e8c60","type":"FactorRange"},"y_scale":{"id":"59b58b21-e0e0-4503-9e51-25cb35963eb2","type":"CategoricalScale"}},"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"}},"id":"dfb5cb82-44df-4bb9-9f0b-87678f137e8d","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"66b8f926-615a-435b-9651-d434f5917e9a","type":"Title"},{"attributes":{"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3144525-7e2a-4c53-90ae-d2da618e543c","type":"BasicTicker"}},"id":"31cc8b4e-f3b2-4225-9006-a8a92b1ad0ad","type":"Grid"},{"attributes":{"formatter":{"id":"a8f17710-3335-4cef-b0c1-fcd01b281881","type":"CategoricalTickFormatter"},"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1c92404-6c93-4052-a4d0-b8e7d39a8184","type":"CategoricalTicker"}},"id":"f26d3842-a120-4053-b3a3-d017784f121d","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb7657c3-365d-4dd1-a0d3-eff44f0e7b44","type":"Circle"},{"attributes":{"plot":{"id":"71654296-ba3a-439c-b90a-099d71b1efdd","subtype":"Figure","type":"Plot"}},"id":"68d309ce-7cfa-437f-9638-d6ff1b5725db","type":"PanTool"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"86c5b88f-8005-4d30-a79c-09c90c6e8c60","type":"FactorRange"}],"root_ids":["71654296-ba3a-439c-b90a-099d71b1efdd"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"5168af93-5908-4262-9040-69a4ff2049b1","elementid":"028c6eb6-9a28-4d73-8370-bba915467579","modelid":"71654296-ba3a-439c-b90a-099d71b1efdd"}];
                
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
