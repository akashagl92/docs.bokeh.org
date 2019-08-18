document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("4caf31cf-3141-41f4-9cae-c8bcb849bd72");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4caf31cf-3141-41f4-9cae-c8bcb849bd72' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0ea9562d-0c17-4d9f-b5bb-a74f5666a016":{"roots":{"references":[{"attributes":{},"id":"28284e88-a73d-4673-aefc-208170746a5b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0782dc16-cb0f-4699-94cc-bfd523cf98ea","type":"DataRange1d"},{"attributes":{"data_source":{"id":"787c4b21-b23d-45f3-a769-87eff3eebb50","type":"ColumnDataSource"},"glyph":{"id":"be5be3d7-f7c3-466d-a142-cb4b7e91bfa5","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"986ff20d-2ff5-47ec-9c69-0e7ea1ed9f21","type":"Oval"},"selection_glyph":null},"id":"1e778e5e-49e9-4e81-85c7-8bbaf70b6132","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"787c4b21-b23d-45f3-a769-87eff3eebb50","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"}},"id":"dcce703f-ad95-438d-84d0-2dc77372b6af","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"58094d49-d71e-4ba4-b563-4d133f4ca04d","type":"PanTool"},{"id":"ab33112a-a269-4109-a9dc-9e526d55a5e4","type":"WheelZoomTool"},{"id":"c5578f36-d9ed-4857-9265-7bf0f19c8967","type":"BoxZoomTool"},{"id":"249cd034-35e0-43cf-b1c5-626239ae60aa","type":"SaveTool"},{"id":"0e1d96a9-4ce5-4727-8b3e-e58b17c7f7a6","type":"ResetTool"},{"id":"dcce703f-ad95-438d-84d0-2dc77372b6af","type":"HelpTool"}]},"id":"dd3d637e-64c9-4f56-b765-4a1134b387b7","type":"Toolbar"},{"attributes":{"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"}},"id":"249cd034-35e0-43cf-b1c5-626239ae60aa","type":"SaveTool"},{"attributes":{"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"}},"id":"ab33112a-a269-4109-a9dc-9e526d55a5e4","type":"WheelZoomTool"},{"attributes":{},"id":"bdb68f68-2841-44fc-91c1-d7452298a17f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"bdb68f68-2841-44fc-91c1-d7452298a17f","type":"BasicTickFormatter"},"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd274421-2628-4d4e-95e1-1aed5d8f1c5c","type":"BasicTicker"}},"id":"544452cb-5263-4616-afd9-1d580d0fd452","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"986ff20d-2ff5-47ec-9c69-0e7ea1ed9f21","type":"Oval"},{"attributes":{"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"}},"id":"58094d49-d71e-4ba4-b563-4d133f4ca04d","type":"PanTool"},{"attributes":{"below":[{"id":"80500ded-3b3a-4bc3-a5a6-c608d014f250","type":"LinearAxis"}],"left":[{"id":"544452cb-5263-4616-afd9-1d580d0fd452","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"80500ded-3b3a-4bc3-a5a6-c608d014f250","type":"LinearAxis"},{"id":"1edcb9c4-82d8-4792-bd43-0646e6839aa9","type":"Grid"},{"id":"544452cb-5263-4616-afd9-1d580d0fd452","type":"LinearAxis"},{"id":"de5392c6-82f0-4e14-b3fd-628c5446f1f2","type":"Grid"},{"id":"a843ae45-98a2-43e6-bba4-1529f94d9290","type":"BoxAnnotation"},{"id":"1e778e5e-49e9-4e81-85c7-8bbaf70b6132","type":"GlyphRenderer"}],"title":{"id":"33cbdc32-97c2-4431-9376-dc005a1d8ec4","type":"Title"},"tool_events":{"id":"5ba17cc9-3398-4a94-9840-e136cad73902","type":"ToolEvents"},"toolbar":{"id":"dd3d637e-64c9-4f56-b765-4a1134b387b7","type":"Toolbar"},"x_range":{"id":"0782dc16-cb0f-4699-94cc-bfd523cf98ea","type":"DataRange1d"},"y_range":{"id":"39939144-6fc2-4eb2-ba63-78539b08101a","type":"DataRange1d"}},"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"be5be3d7-f7c3-466d-a142-cb4b7e91bfa5","type":"Oval"},{"attributes":{"formatter":{"id":"09552894-0710-4616-bf6f-8d851dc04784","type":"BasicTickFormatter"},"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"},"ticker":{"id":"28284e88-a73d-4673-aefc-208170746a5b","type":"BasicTicker"}},"id":"80500ded-3b3a-4bc3-a5a6-c608d014f250","type":"LinearAxis"},{"attributes":{"callback":null},"id":"39939144-6fc2-4eb2-ba63-78539b08101a","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a843ae45-98a2-43e6-bba4-1529f94d9290","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"a843ae45-98a2-43e6-bba4-1529f94d9290","type":"BoxAnnotation"},"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"}},"id":"c5578f36-d9ed-4857-9265-7bf0f19c8967","type":"BoxZoomTool"},{"attributes":{},"id":"5ba17cc9-3398-4a94-9840-e136cad73902","type":"ToolEvents"},{"attributes":{"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"}},"id":"0e1d96a9-4ce5-4727-8b3e-e58b17c7f7a6","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"33cbdc32-97c2-4431-9376-dc005a1d8ec4","type":"Title"},{"attributes":{},"id":"09552894-0710-4616-bf6f-8d851dc04784","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd274421-2628-4d4e-95e1-1aed5d8f1c5c","type":"BasicTicker"}},"id":"de5392c6-82f0-4e14-b3fd-628c5446f1f2","type":"Grid"},{"attributes":{"plot":{"id":"3ba00688-918c-40b4-8a45-ef8ec54e9199","subtype":"Figure","type":"Plot"},"ticker":{"id":"28284e88-a73d-4673-aefc-208170746a5b","type":"BasicTicker"}},"id":"1edcb9c4-82d8-4792-bd43-0646e6839aa9","type":"Grid"},{"attributes":{},"id":"fd274421-2628-4d4e-95e1-1aed5d8f1c5c","type":"BasicTicker"}],"root_ids":["3ba00688-918c-40b4-8a45-ef8ec54e9199"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"0ea9562d-0c17-4d9f-b5bb-a74f5666a016","elementid":"4caf31cf-3141-41f4-9cae-c8bcb849bd72","modelid":"3ba00688-918c-40b4-8a45-ef8ec54e9199"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});