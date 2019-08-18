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
      };var element = document.getElementById("d51f0370-abbc-4f69-b110-f9701b1876a1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd51f0370-abbc-4f69-b110-f9701b1876a1' but no matching script tag was found. ")
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
                var docs_json = {"e0bc26bc-ecbe-447d-acc7-8c1975aef740":{"roots":{"references":[{"attributes":{},"id":"7ef1192b-7670-4888-8857-6530ee7237a4","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe3f6e62-3cc8-44a8-83f2-2831ea031504","type":"X"},{"attributes":{"dimension":1,"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6386190e-cb1f-443b-abd6-403e04708e51","type":"BasicTicker"}},"id":"1bef451d-8ac5-48fa-8411-0c4de1320b09","type":"Grid"},{"attributes":{"formatter":{"id":"43747ed2-d202-4af3-b41c-7e12464ee86d","type":"BasicTickFormatter"},"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2026ff3-1f36-4105-9c8f-98a2f58307c3","type":"BasicTicker"}},"id":"1cc41974-e822-4a3a-8990-d28901bc55f2","type":"LinearAxis"},{"attributes":{"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2026ff3-1f36-4105-9c8f-98a2f58307c3","type":"BasicTicker"}},"id":"12919c81-eeb5-4ece-a936-6f219992aa5c","type":"Grid"},{"attributes":{"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"}},"id":"dd325ed2-4357-470b-9ed7-da6296c09be8","type":"PanTool"},{"attributes":{},"id":"67c82f17-67f5-4823-97a4-6d2b8d1ffa55","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"}},"id":"bd230dd8-b3b1-4275-b4fd-b5cf3560b4f1","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"7bfcde39-e0c8-4a3f-a722-f8510e25baa3","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dd325ed2-4357-470b-9ed7-da6296c09be8","type":"PanTool"},{"id":"0278b52d-f7da-4e3e-9756-ff3a9e00cccb","type":"WheelZoomTool"},{"id":"a17dab25-0952-4123-893e-d9c43ca6c6ec","type":"BoxZoomTool"},{"id":"5f4c2a93-77ad-4ffd-b49e-b8c4e2b556ca","type":"SaveTool"},{"id":"b562cb79-1b93-4c48-9c61-a1bdd8afd728","type":"ResetTool"},{"id":"bd230dd8-b3b1-4275-b4fd-b5cf3560b4f1","type":"HelpTool"}]},"id":"5c9333a8-10b5-48ab-b2ce-8f7c1cef037b","type":"Toolbar"},{"attributes":{"overlay":{"id":"508490bb-69b0-4fcd-9e97-c9844e2ba398","type":"BoxAnnotation"},"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"}},"id":"a17dab25-0952-4123-893e-d9c43ca6c6ec","type":"BoxZoomTool"},{"attributes":{},"id":"f2026ff3-1f36-4105-9c8f-98a2f58307c3","type":"BasicTicker"},{"attributes":{"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"}},"id":"0278b52d-f7da-4e3e-9756-ff3a9e00cccb","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"}},"id":"5f4c2a93-77ad-4ffd-b49e-b8c4e2b556ca","type":"SaveTool"},{"attributes":{},"id":"43747ed2-d202-4af3-b41c-7e12464ee86d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1e9e1fce-2420-4d77-aa43-ba384fd580f4","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"ba2d40b7-9766-47d1-8a96-13e1f1d814c7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"}},"id":"b562cb79-1b93-4c48-9c61-a1bdd8afd728","type":"ResetTool"},{"attributes":{"callback":null},"id":"0342799f-0a38-41ec-a2e2-7c9fbdec4f23","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"508490bb-69b0-4fcd-9e97-c9844e2ba398","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1cc41974-e822-4a3a-8990-d28901bc55f2","type":"LinearAxis"}],"left":[{"id":"b3594121-6432-497f-a873-4ecd887253f5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1cc41974-e822-4a3a-8990-d28901bc55f2","type":"LinearAxis"},{"id":"12919c81-eeb5-4ece-a936-6f219992aa5c","type":"Grid"},{"id":"b3594121-6432-497f-a873-4ecd887253f5","type":"LinearAxis"},{"id":"1bef451d-8ac5-48fa-8411-0c4de1320b09","type":"Grid"},{"id":"508490bb-69b0-4fcd-9e97-c9844e2ba398","type":"BoxAnnotation"},{"id":"8f4b9683-a40b-4ef4-88b3-c6e50bb416a4","type":"GlyphRenderer"}],"title":{"id":"7bfcde39-e0c8-4a3f-a722-f8510e25baa3","type":"Title"},"tool_events":{"id":"7ef1192b-7670-4888-8857-6530ee7237a4","type":"ToolEvents"},"toolbar":{"id":"5c9333a8-10b5-48ab-b2ce-8f7c1cef037b","type":"Toolbar"},"x_range":{"id":"1e9e1fce-2420-4d77-aa43-ba384fd580f4","type":"DataRange1d"},"y_range":{"id":"0342799f-0a38-41ec-a2e2-7c9fbdec4f23","type":"DataRange1d"}},"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"ba2d40b7-9766-47d1-8a96-13e1f1d814c7","type":"ColumnDataSource"},"glyph":{"id":"4e7c926c-ffb9-4018-85f6-925a3d052d86","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fe3f6e62-3cc8-44a8-83f2-2831ea031504","type":"X"},"selection_glyph":null},"id":"8f4b9683-a40b-4ef4-88b3-c6e50bb416a4","type":"GlyphRenderer"},{"attributes":{},"id":"6386190e-cb1f-443b-abd6-403e04708e51","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e7c926c-ffb9-4018-85f6-925a3d052d86","type":"X"},{"attributes":{"formatter":{"id":"67c82f17-67f5-4823-97a4-6d2b8d1ffa55","type":"BasicTickFormatter"},"plot":{"id":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6386190e-cb1f-443b-abd6-403e04708e51","type":"BasicTicker"}},"id":"b3594121-6432-497f-a873-4ecd887253f5","type":"LinearAxis"}],"root_ids":["e89f3e94-65df-4fbc-abb5-c534a18a6aa6"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e0bc26bc-ecbe-447d-acc7-8c1975aef740","elementid":"d51f0370-abbc-4f69-b110-f9701b1876a1","modelid":"e89f3e94-65df-4fbc-abb5-c534a18a6aa6"}];
                
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
