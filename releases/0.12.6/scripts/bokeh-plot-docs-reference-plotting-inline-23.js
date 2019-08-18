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
      };var element = document.getElementById("35308e4c-fe32-468c-8418-33708478d080");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35308e4c-fe32-468c-8418-33708478d080' but no matching script tag was found. ")
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
                var docs_json = {"aea39aad-318a-4564-9434-69f2563b2ae8":{"roots":{"references":[{"attributes":{"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"}},"id":"b00e1e0c-2e0a-4648-afd9-8a165c6d2a8a","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"82d6c8f8-e923-4e46-afa9-a56eef92d004","type":"Title"},{"attributes":{"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"}},"id":"a55f834b-312b-4497-9af8-310bbeb6990c","type":"PanTool"},{"attributes":{},"id":"a1729510-8a45-4e32-8cae-98eed908ff33","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b4d8e1bb-4a84-4467-83c4-2bdac29f4b0c","type":"BasicTickFormatter"},"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1729510-8a45-4e32-8cae-98eed908ff33","type":"BasicTicker"}},"id":"bcf366f1-9ed1-4200-8d53-c77afe1c2e94","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a55f834b-312b-4497-9af8-310bbeb6990c","type":"PanTool"},{"id":"b00e1e0c-2e0a-4648-afd9-8a165c6d2a8a","type":"WheelZoomTool"},{"id":"7f199142-bfaa-4e9f-8489-6d9558020849","type":"BoxZoomTool"},{"id":"a019bbbe-8a20-4533-b5f1-46a67a2849af","type":"SaveTool"},{"id":"fdf70b1e-7d7e-4282-8991-82d9f5b93d86","type":"ResetTool"},{"id":"51d06415-a10d-428d-a9c1-a8538297b2bf","type":"HelpTool"}]},"id":"45db48dd-880b-42d5-bc0b-2632e3005101","type":"Toolbar"},{"attributes":{"below":[{"id":"9a5c18d0-04a0-454c-a441-5e87c8f60923","type":"LinearAxis"}],"left":[{"id":"bcf366f1-9ed1-4200-8d53-c77afe1c2e94","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9a5c18d0-04a0-454c-a441-5e87c8f60923","type":"LinearAxis"},{"id":"14ba43a9-b0ed-4f46-a8b0-79c51634457b","type":"Grid"},{"id":"bcf366f1-9ed1-4200-8d53-c77afe1c2e94","type":"LinearAxis"},{"id":"d27630dc-f611-4ba1-ae22-bd0a415bd437","type":"Grid"},{"id":"c36493b6-b919-4f61-b30d-56a66f4fbb16","type":"BoxAnnotation"},{"id":"175cfcd8-7cf7-4a09-8fc8-66781080f5c1","type":"GlyphRenderer"}],"title":{"id":"82d6c8f8-e923-4e46-afa9-a56eef92d004","type":"Title"},"tool_events":{"id":"c5395fe0-b996-47d4-a0b6-ccac2086bbd0","type":"ToolEvents"},"toolbar":{"id":"45db48dd-880b-42d5-bc0b-2632e3005101","type":"Toolbar"},"x_range":{"id":"737ed577-095a-4ceb-897d-0f28fce50eb6","type":"DataRange1d"},"x_scale":{"id":"07ebdfb8-1d3f-45e3-876d-b0c3248c5f41","type":"LinearScale"},"y_range":{"id":"fe4222c4-470f-4464-85fc-4adad471c55b","type":"DataRange1d"},"y_scale":{"id":"d099f542-047c-4c08-a34a-d42b31d23a69","type":"LinearScale"}},"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d857ca0-1e15-4a5c-b052-c9c7bf5abff0","type":"BasicTicker"}},"id":"14ba43a9-b0ed-4f46-a8b0-79c51634457b","type":"Grid"},{"attributes":{},"id":"9d857ca0-1e15-4a5c-b052-c9c7bf5abff0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"f4193bf0-dbf8-4028-beb6-5c19ef3c2c31","type":"ColumnDataSource"},{"attributes":{},"id":"be6da5d1-838d-462c-9c67-2dff0d35048e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"}},"id":"51d06415-a10d-428d-a9c1-a8538297b2bf","type":"HelpTool"},{"attributes":{},"id":"c5395fe0-b996-47d4-a0b6-ccac2086bbd0","type":"ToolEvents"},{"attributes":{},"id":"07ebdfb8-1d3f-45e3-876d-b0c3248c5f41","type":"LinearScale"},{"attributes":{},"id":"b4d8e1bb-4a84-4467-83c4-2bdac29f4b0c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"}},"id":"fdf70b1e-7d7e-4282-8991-82d9f5b93d86","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"99d350b4-5e5a-4583-9b14-b85a221b4f8b","type":"Triangle"},{"attributes":{"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"}},"id":"a019bbbe-8a20-4533-b5f1-46a67a2849af","type":"SaveTool"},{"attributes":{"formatter":{"id":"be6da5d1-838d-462c-9c67-2dff0d35048e","type":"BasicTickFormatter"},"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d857ca0-1e15-4a5c-b052-c9c7bf5abff0","type":"BasicTicker"}},"id":"9a5c18d0-04a0-454c-a441-5e87c8f60923","type":"LinearAxis"},{"attributes":{},"id":"d099f542-047c-4c08-a34a-d42b31d23a69","type":"LinearScale"},{"attributes":{"data_source":{"id":"f4193bf0-dbf8-4028-beb6-5c19ef3c2c31","type":"ColumnDataSource"},"glyph":{"id":"338adc8c-1ca1-4648-8ebb-b020e24ced82","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"99d350b4-5e5a-4583-9b14-b85a221b4f8b","type":"Triangle"},"selection_glyph":null},"id":"175cfcd8-7cf7-4a09-8fc8-66781080f5c1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"737ed577-095a-4ceb-897d-0f28fce50eb6","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1729510-8a45-4e32-8cae-98eed908ff33","type":"BasicTicker"}},"id":"d27630dc-f611-4ba1-ae22-bd0a415bd437","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c36493b6-b919-4f61-b30d-56a66f4fbb16","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"fe4222c4-470f-4464-85fc-4adad471c55b","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"338adc8c-1ca1-4648-8ebb-b020e24ced82","type":"Triangle"},{"attributes":{"overlay":{"id":"c36493b6-b919-4f61-b30d-56a66f4fbb16","type":"BoxAnnotation"},"plot":{"id":"0239c89f-a6fb-40cc-8714-3db1bd055caf","subtype":"Figure","type":"Plot"}},"id":"7f199142-bfaa-4e9f-8489-6d9558020849","type":"BoxZoomTool"}],"root_ids":["0239c89f-a6fb-40cc-8714-3db1bd055caf"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"aea39aad-318a-4564-9434-69f2563b2ae8","elementid":"35308e4c-fe32-468c-8418-33708478d080","modelid":"0239c89f-a6fb-40cc-8714-3db1bd055caf"}];
                
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
