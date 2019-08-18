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
      };var element = document.getElementById("5231be04-f792-4b1b-a135-e9807c9bd729");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5231be04-f792-4b1b-a135-e9807c9bd729' but no matching script tag was found. ")
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
                var docs_json = {"bb420080-cdae-45f6-9e9d-f882a50d1ea5":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf8094c4-0f29-4a52-b142-3d60f2a75d22","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d07095f-f318-4325-bb94-e9b7e8322139","type":"Circle"},{"attributes":{"callback":null},"id":"8127b064-f99e-47b1-b813-e53a0b56fdd9","type":"DataRange1d"},{"attributes":{},"id":"d4cab4c1-52f2-4728-818e-210d172c09ce","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"}},"id":"3a526b91-8c29-46e2-b529-0615db07b5a4","type":"HelpTool"},{"attributes":{"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"},"ticker":{"id":"3777f7f1-2d33-495a-acd6-44309a484590","type":"BasicTicker"}},"id":"fa4977c3-89da-4266-b8b8-257ab923b05f","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"65b75578-6f48-4d3e-83f0-d59a1e8293d3","type":"Title"},{"attributes":{"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"}},"id":"8a346570-ee28-4090-a3e9-539808539573","type":"ResetTool"},{"attributes":{"formatter":{"id":"d4cab4c1-52f2-4728-818e-210d172c09ce","type":"BasicTickFormatter"},"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb3ac36a-3b80-4911-ba0b-046080ef0b43","type":"BasicTicker"}},"id":"66c98b83-34a3-4eca-b382-a7aee563933f","type":"LinearAxis"},{"attributes":{},"id":"d109c75c-2340-4136-9615-922e12e953f7","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"67fef100-a671-48ba-ad43-5cd48aee55c7","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb3ac36a-3b80-4911-ba0b-046080ef0b43","type":"BasicTicker"}},"id":"ac0715cb-182e-4c30-b117-f49a9a5449b9","type":"Grid"},{"attributes":{"formatter":{"id":"6ef03058-8609-4e15-9072-433e64be4006","type":"BasicTickFormatter"},"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"},"ticker":{"id":"3777f7f1-2d33-495a-acd6-44309a484590","type":"BasicTicker"}},"id":"0d9e7805-be3b-445e-8095-11d0d92ee798","type":"LinearAxis"},{"attributes":{},"id":"fb3ac36a-3b80-4911-ba0b-046080ef0b43","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e3b5e30a-8201-4496-b8d2-cc481c5691e2","type":"PanTool"},{"id":"de369312-d93e-42ec-a081-4385a5e9078c","type":"WheelZoomTool"},{"id":"bd75f516-bd02-4806-abe5-d2cac52bd9dc","type":"BoxZoomTool"},{"id":"c97ddf36-389e-41a8-9855-5564583e77c6","type":"SaveTool"},{"id":"8a346570-ee28-4090-a3e9-539808539573","type":"ResetTool"},{"id":"3a526b91-8c29-46e2-b529-0615db07b5a4","type":"HelpTool"}]},"id":"9d5d1404-db5e-44ef-bd6c-c75aee82008b","type":"Toolbar"},{"attributes":{"overlay":{"id":"1d05de31-ff81-4aca-8f2c-e0cd6a5f2105","type":"BoxAnnotation"},"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"}},"id":"bd75f516-bd02-4806-abe5-d2cac52bd9dc","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"b0ae55da-84c4-4506-8b81-9cf1509f032a","type":"DataRange1d"},{"attributes":{"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"}},"id":"e3b5e30a-8201-4496-b8d2-cc481c5691e2","type":"PanTool"},{"attributes":{},"id":"c6027c3a-11a8-4627-91ae-6654208b6bac","type":"ToolEvents"},{"attributes":{},"id":"6ef03058-8609-4e15-9072-433e64be4006","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"67fef100-a671-48ba-ad43-5cd48aee55c7","type":"ColumnDataSource"},"glyph":{"id":"7d07095f-f318-4325-bb94-e9b7e8322139","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bf8094c4-0f29-4a52-b142-3d60f2a75d22","type":"Circle"},"selection_glyph":null},"id":"8dae09c7-6030-44bf-a2f8-14a3b42d52b2","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"}},"id":"de369312-d93e-42ec-a081-4385a5e9078c","type":"WheelZoomTool"},{"attributes":{},"id":"3777f7f1-2d33-495a-acd6-44309a484590","type":"BasicTicker"},{"attributes":{"below":[{"id":"0d9e7805-be3b-445e-8095-11d0d92ee798","type":"LinearAxis"}],"left":[{"id":"66c98b83-34a3-4eca-b382-a7aee563933f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0d9e7805-be3b-445e-8095-11d0d92ee798","type":"LinearAxis"},{"id":"fa4977c3-89da-4266-b8b8-257ab923b05f","type":"Grid"},{"id":"66c98b83-34a3-4eca-b382-a7aee563933f","type":"LinearAxis"},{"id":"ac0715cb-182e-4c30-b117-f49a9a5449b9","type":"Grid"},{"id":"1d05de31-ff81-4aca-8f2c-e0cd6a5f2105","type":"BoxAnnotation"},{"id":"8dae09c7-6030-44bf-a2f8-14a3b42d52b2","type":"GlyphRenderer"}],"title":{"id":"65b75578-6f48-4d3e-83f0-d59a1e8293d3","type":"Title"},"tool_events":{"id":"c6027c3a-11a8-4627-91ae-6654208b6bac","type":"ToolEvents"},"toolbar":{"id":"9d5d1404-db5e-44ef-bd6c-c75aee82008b","type":"Toolbar"},"x_range":{"id":"8127b064-f99e-47b1-b813-e53a0b56fdd9","type":"DataRange1d"},"x_scale":{"id":"d109c75c-2340-4136-9615-922e12e953f7","type":"LinearScale"},"y_range":{"id":"b0ae55da-84c4-4506-8b81-9cf1509f032a","type":"DataRange1d"},"y_scale":{"id":"9669a79a-76aa-4723-a26d-21b831790998","type":"LinearScale"}},"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9669a79a-76aa-4723-a26d-21b831790998","type":"LinearScale"},{"attributes":{"plot":{"id":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f","subtype":"Figure","type":"Plot"}},"id":"c97ddf36-389e-41a8-9855-5564583e77c6","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d05de31-ff81-4aca-8f2c-e0cd6a5f2105","type":"BoxAnnotation"}],"root_ids":["90e814ab-b0f9-46d2-a8bb-4cb0ca79882f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"bb420080-cdae-45f6-9e9d-f882a50d1ea5","elementid":"5231be04-f792-4b1b-a135-e9807c9bd729","modelid":"90e814ab-b0f9-46d2-a8bb-4cb0ca79882f"}];
                
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
