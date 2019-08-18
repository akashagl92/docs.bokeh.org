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
      };var element = document.getElementById("6f040fac-3ade-454c-8ce5-64090a39d589");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f040fac-3ade-454c-8ce5-64090a39d589' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"75aa3e0f-bc98-4986-a848-cb9209659898":{"roots":{"references":[{"attributes":{},"id":"75b35cef-1fc9-44ac-af11-a1ec9a6e9b51","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ef2c0090-a0aa-4f62-80b5-6a31d483be23","type":"ColumnDataSource"},"glyph":{"id":"02de8984-2ae7-4d68-bf45-45d7dda9fd53","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"12ccf39e-4191-42d6-bfd2-9d6419502999","type":"MultiLine"},"selection_glyph":null},"id":"76c1da49-b6f9-4db3-a1bd-b216a1df732d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"}},"id":"7f07a457-b32c-45b2-b5bc-c800626a57bb","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"9d5deba0-82ae-4b58-9422-a9ef7df69b85","type":"Title"},{"attributes":{"formatter":{"id":"feed0494-1a26-4375-98fd-9eaf8a939394","type":"BasicTickFormatter"},"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"75b35cef-1fc9-44ac-af11-a1ec9a6e9b51","type":"BasicTicker"}},"id":"3a0c4386-95c7-40f1-b182-5cb2eccf6cbd","type":"LinearAxis"},{"attributes":{"callback":null},"id":"faf1aa59-6c43-4875-95ea-6b48431b21d1","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a5273b6d-62d6-4e65-98af-766524ff3caf","type":"BasicTickFormatter"},"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c578274f-2aae-4489-b10a-03b4e86c656c","type":"BasicTicker"}},"id":"a9e37494-6d76-4ab3-8c3f-9fb7480d943e","type":"LinearAxis"},{"attributes":{"below":[{"id":"a9e37494-6d76-4ab3-8c3f-9fb7480d943e","type":"LinearAxis"}],"left":[{"id":"3a0c4386-95c7-40f1-b182-5cb2eccf6cbd","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a9e37494-6d76-4ab3-8c3f-9fb7480d943e","type":"LinearAxis"},{"id":"d0365492-d88a-4f4b-a340-1ebe6747e212","type":"Grid"},{"id":"3a0c4386-95c7-40f1-b182-5cb2eccf6cbd","type":"LinearAxis"},{"id":"ef044546-a48d-48b3-8a51-2a1e6752c556","type":"Grid"},{"id":"b091e27e-ab91-4d96-af3a-312606334ee9","type":"BoxAnnotation"},{"id":"76c1da49-b6f9-4db3-a1bd-b216a1df732d","type":"GlyphRenderer"}],"title":{"id":"9d5deba0-82ae-4b58-9422-a9ef7df69b85","type":"Title"},"tool_events":{"id":"d491b096-35e2-46d2-8b27-b6c8aa2ab03a","type":"ToolEvents"},"toolbar":{"id":"c8cae9ef-63d5-4a3b-b442-7fc34a95ac42","type":"Toolbar"},"x_range":{"id":"faf1aa59-6c43-4875-95ea-6b48431b21d1","type":"DataRange1d"},"y_range":{"id":"6e86b9df-6a5c-4287-bb1e-8db2c5f37a4a","type":"DataRange1d"}},"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f0dccb98-47f5-4212-b67b-0f2e6ff7576a","type":"PanTool"},{"id":"6d62fba0-a65b-4610-ac97-53641fc72091","type":"WheelZoomTool"},{"id":"38a00a74-892e-4bd4-b773-df993c9e5db5","type":"BoxZoomTool"},{"id":"768592f3-f85a-4303-8202-c0009ec0df90","type":"SaveTool"},{"id":"7f07a457-b32c-45b2-b5bc-c800626a57bb","type":"ResetTool"},{"id":"b84cf706-26f4-43d6-8dec-c4e6b561555b","type":"HelpTool"}]},"id":"c8cae9ef-63d5-4a3b-b442-7fc34a95ac42","type":"Toolbar"},{"attributes":{},"id":"c578274f-2aae-4489-b10a-03b4e86c656c","type":"BasicTicker"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"02de8984-2ae7-4d68-bf45-45d7dda9fd53","type":"MultiLine"},{"attributes":{"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"}},"id":"b84cf706-26f4-43d6-8dec-c4e6b561555b","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"12ccf39e-4191-42d6-bfd2-9d6419502999","type":"MultiLine"},{"attributes":{},"id":"feed0494-1a26-4375-98fd-9eaf8a939394","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b091e27e-ab91-4d96-af3a-312606334ee9","type":"BoxAnnotation"},"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"}},"id":"38a00a74-892e-4bd4-b773-df993c9e5db5","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","line_alpha"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"ef2c0090-a0aa-4f62-80b5-6a31d483be23","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b091e27e-ab91-4d96-af3a-312606334ee9","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"}},"id":"6d62fba0-a65b-4610-ac97-53641fc72091","type":"WheelZoomTool"},{"attributes":{},"id":"d491b096-35e2-46d2-8b27-b6c8aa2ab03a","type":"ToolEvents"},{"attributes":{"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c578274f-2aae-4489-b10a-03b4e86c656c","type":"BasicTicker"}},"id":"d0365492-d88a-4f4b-a340-1ebe6747e212","type":"Grid"},{"attributes":{"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"}},"id":"f0dccb98-47f5-4212-b67b-0f2e6ff7576a","type":"PanTool"},{"attributes":{},"id":"a5273b6d-62d6-4e65-98af-766524ff3caf","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6e86b9df-6a5c-4287-bb1e-8db2c5f37a4a","type":"DataRange1d"},{"attributes":{"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"}},"id":"768592f3-f85a-4303-8202-c0009ec0df90","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"d46f7d0d-9cd7-4384-8013-cf417e0326cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"75b35cef-1fc9-44ac-af11-a1ec9a6e9b51","type":"BasicTicker"}},"id":"ef044546-a48d-48b3-8a51-2a1e6752c556","type":"Grid"}],"root_ids":["d46f7d0d-9cd7-4384-8013-cf417e0326cd"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"75aa3e0f-bc98-4986-a848-cb9209659898","elementid":"6f040fac-3ade-454c-8ce5-64090a39d589","modelid":"d46f7d0d-9cd7-4384-8013-cf417e0326cd"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
