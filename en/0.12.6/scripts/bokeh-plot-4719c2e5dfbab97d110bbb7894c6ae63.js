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
      };var element = document.getElementById("2012749f-ff52-4a0d-a542-4b73b4ca03fa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2012749f-ff52-4a0d-a542-4b73b4ca03fa' but no matching script tag was found. ")
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
                var docs_json = {"85f55311-d645-47ef-a857-2a8b25d18a63":{"roots":{"references":[{"attributes":{"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"}},"id":"33198e4b-37e8-436a-9c08-b66c3015d17c","type":"HelpTool"},{"attributes":{"callback":null},"id":"b4f6ae82-f3af-4541-a62d-a2ca69cd99bd","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34c042cd-3466-4f69-8fdc-46aa5306bb86","type":"Circle"},{"attributes":{"formatter":{"id":"859525aa-83e1-4577-9c8a-3f2a37f42792","type":"BasicTickFormatter"},"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"},"ticker":{"id":"feb1bcee-6fc6-4edf-b1e1-7004031aa385","type":"BasicTicker"}},"id":"be5737c7-2507-42fe-bdc2-c01c5881ce46","type":"LinearAxis"},{"attributes":{"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"}},"id":"11868bf2-811c-4401-b80a-fa906c6679ed","type":"ResetTool"},{"attributes":{},"id":"89cb0ea0-ef0e-4623-bbcd-967449036f22","type":"LinearScale"},{"attributes":{},"id":"661e2ee7-9844-419c-ade2-34a1081915ea","type":"LinearScale"},{"attributes":{"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"}},"id":"506268e5-9ff6-44d9-9f50-cad8c7ebe609","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"91890293-14c4-4698-9db5-9bb705674861","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"88921237-5552-4dac-9298-4770c3ae34ad","type":"ColumnDataSource"},"glyph":{"id":"4c383e03-f6aa-4b4c-a2a7-6c4e4a43e8c3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34c042cd-3466-4f69-8fdc-46aa5306bb86","type":"Circle"},"selection_glyph":null},"id":"8430bb13-1ac8-4854-9004-f7dd848d2fb5","type":"GlyphRenderer"},{"attributes":{},"id":"859525aa-83e1-4577-9c8a-3f2a37f42792","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"},"ticker":{"id":"feb1bcee-6fc6-4edf-b1e1-7004031aa385","type":"BasicTicker"}},"id":"37d35608-bf91-4bfe-aba2-406ba62560a1","type":"Grid"},{"attributes":{},"id":"01b1b832-8aca-4f53-803f-a9f2472f8a55","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c383e03-f6aa-4b4c-a2a7-6c4e4a43e8c3","type":"Circle"},{"attributes":{"below":[{"id":"be5737c7-2507-42fe-bdc2-c01c5881ce46","type":"LinearAxis"}],"left":[{"id":"fd94ea73-1ff4-4915-855c-a5280cd16ef7","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"be5737c7-2507-42fe-bdc2-c01c5881ce46","type":"LinearAxis"},{"id":"37d35608-bf91-4bfe-aba2-406ba62560a1","type":"Grid"},{"id":"fd94ea73-1ff4-4915-855c-a5280cd16ef7","type":"LinearAxis"},{"id":"7578bf00-4888-43f8-82f3-a9743fb51866","type":"Grid"},{"id":"91890293-14c4-4698-9db5-9bb705674861","type":"BoxAnnotation"},{"id":"8430bb13-1ac8-4854-9004-f7dd848d2fb5","type":"GlyphRenderer"}],"title":{"id":"467aacc3-54c7-4fd8-9c3d-06018b15c0cd","type":"Title"},"tool_events":{"id":"01b1b832-8aca-4f53-803f-a9f2472f8a55","type":"ToolEvents"},"toolbar":{"id":"e5107037-9067-475b-9078-315db1fe5a87","type":"Toolbar"},"x_range":{"id":"b4f6ae82-f3af-4541-a62d-a2ca69cd99bd","type":"DataRange1d"},"x_scale":{"id":"89cb0ea0-ef0e-4623-bbcd-967449036f22","type":"LinearScale"},"y_range":{"id":"6c1e098f-2078-4a4e-8989-c82bf0a5ec06","type":"DataRange1d"},"y_scale":{"id":"661e2ee7-9844-419c-ade2-34a1081915ea","type":"LinearScale"}},"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"88921237-5552-4dac-9298-4770c3ae34ad","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"91890293-14c4-4698-9db5-9bb705674861","type":"BoxAnnotation"},"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"}},"id":"db06041e-349b-4022-949f-a2592b3d1e52","type":"BoxZoomTool"},{"attributes":{},"id":"0fe998b5-b5bf-422e-bbbc-6c89f7c2cb22","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fe998b5-b5bf-422e-bbbc-6c89f7c2cb22","type":"BasicTicker"}},"id":"7578bf00-4888-43f8-82f3-a9743fb51866","type":"Grid"},{"attributes":{},"id":"feb1bcee-6fc6-4edf-b1e1-7004031aa385","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4d06f53b-cbaa-4987-a1e7-e35fd0a17439","type":"PanTool"},{"id":"700bb423-d11e-4e88-b45f-9c10e7bac195","type":"WheelZoomTool"},{"id":"db06041e-349b-4022-949f-a2592b3d1e52","type":"BoxZoomTool"},{"id":"506268e5-9ff6-44d9-9f50-cad8c7ebe609","type":"SaveTool"},{"id":"11868bf2-811c-4401-b80a-fa906c6679ed","type":"ResetTool"},{"id":"33198e4b-37e8-436a-9c08-b66c3015d17c","type":"HelpTool"}]},"id":"e5107037-9067-475b-9078-315db1fe5a87","type":"Toolbar"},{"attributes":{"callback":null},"id":"6c1e098f-2078-4a4e-8989-c82bf0a5ec06","type":"DataRange1d"},{"attributes":{"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"}},"id":"700bb423-d11e-4e88-b45f-9c10e7bac195","type":"WheelZoomTool"},{"attributes":{},"id":"fa2026b4-fa6b-4fc6-b3ed-de117dae01da","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"}},"id":"4d06f53b-cbaa-4987-a1e7-e35fd0a17439","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"467aacc3-54c7-4fd8-9c3d-06018b15c0cd","type":"Title"},{"attributes":{"formatter":{"id":"fa2026b4-fa6b-4fc6-b3ed-de117dae01da","type":"BasicTickFormatter"},"plot":{"id":"d30ca7d8-f523-4ce7-8572-9b389296ade2","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fe998b5-b5bf-422e-bbbc-6c89f7c2cb22","type":"BasicTicker"}},"id":"fd94ea73-1ff4-4915-855c-a5280cd16ef7","type":"LinearAxis"}],"root_ids":["d30ca7d8-f523-4ce7-8572-9b389296ade2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"85f55311-d645-47ef-a857-2a8b25d18a63","elementid":"2012749f-ff52-4a0d-a542-4b73b4ca03fa","modelid":"d30ca7d8-f523-4ce7-8572-9b389296ade2"}];
                
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
