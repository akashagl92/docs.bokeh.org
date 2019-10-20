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
      };var element = document.getElementById("07ef4b79-6f7f-4971-a4e3-1c530d46033b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07ef4b79-6f7f-4971-a4e3-1c530d46033b' but no matching script tag was found. ")
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
                var docs_json = {"4ef386f5-7190-4ac2-9ca1-2d1a6e9f38b4":{"roots":{"references":[{"attributes":{},"id":"31d2f277-51c6-430a-af6b-8147b67a1c8e","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"72294b65-08e4-47be-92af-eebc6e16fdda","type":"BasicTicker"}},"id":"919ff929-8919-4acb-a292-83b4281ba2cc","type":"Grid"},{"attributes":{"formatter":{"id":"d4737d18-c037-41e6-981c-c2c1ee646537","type":"BasicTickFormatter"},"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"76ddfcf9-5f1c-4c74-a668-58f1fe4528e6","type":"BasicTicker"}},"id":"36c31935-d2ba-4805-b0c9-36c7d95179c9","type":"LinearAxis"},{"attributes":{"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"}},"id":"2cffa287-bcd6-455c-9463-32f226a09ddf","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"19324ad1-de09-4767-a18d-ff109df94bef","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc69ea25-f27d-4354-b3ed-cbbfc4d40c39","type":"Annulus"},{"attributes":{"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"76ddfcf9-5f1c-4c74-a668-58f1fe4528e6","type":"BasicTicker"}},"id":"ab64d75d-8e81-45e2-94c3-6fa7b024a69d","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"3deec53f-0009-4bf8-9a4e-2473ebd501e2","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a15c44b2-4697-4785-86ef-7daa225e1652","type":"PanTool"},{"id":"2cffa287-bcd6-455c-9463-32f226a09ddf","type":"WheelZoomTool"},{"id":"9757be96-1d1f-47f3-853b-21be1527a5cb","type":"BoxZoomTool"},{"id":"7d116e33-6d0f-4738-8fb3-006e8c750c46","type":"SaveTool"},{"id":"2ac5affd-3ed5-4932-a06d-17d7d9db27ef","type":"ResetTool"},{"id":"2ff98aec-517f-4d6c-b740-b0ed2ef3f1fc","type":"HelpTool"}]},"id":"608ddae6-cefa-42c6-9cbe-787a390a4935","type":"Toolbar"},{"attributes":{"formatter":{"id":"d3435e5a-d117-408e-893e-eae09ca3e0a6","type":"BasicTickFormatter"},"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"72294b65-08e4-47be-92af-eebc6e16fdda","type":"BasicTicker"}},"id":"e19afec7-7d1a-400c-9df7-8e4f6e818452","type":"LinearAxis"},{"attributes":{},"id":"d4737d18-c037-41e6-981c-c2c1ee646537","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"}},"id":"7d116e33-6d0f-4738-8fb3-006e8c750c46","type":"SaveTool"},{"attributes":{"callback":null},"id":"c556c25e-c654-4e1f-bf3f-68814d124479","type":"DataRange1d"},{"attributes":{"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"}},"id":"2ff98aec-517f-4d6c-b740-b0ed2ef3f1fc","type":"HelpTool"},{"attributes":{},"id":"76ddfcf9-5f1c-4c74-a668-58f1fe4528e6","type":"BasicTicker"},{"attributes":{"below":[{"id":"36c31935-d2ba-4805-b0c9-36c7d95179c9","type":"LinearAxis"}],"left":[{"id":"e19afec7-7d1a-400c-9df7-8e4f6e818452","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"36c31935-d2ba-4805-b0c9-36c7d95179c9","type":"LinearAxis"},{"id":"ab64d75d-8e81-45e2-94c3-6fa7b024a69d","type":"Grid"},{"id":"e19afec7-7d1a-400c-9df7-8e4f6e818452","type":"LinearAxis"},{"id":"919ff929-8919-4acb-a292-83b4281ba2cc","type":"Grid"},{"id":"5cca7ef4-7abc-41d8-959a-420c2bacc753","type":"BoxAnnotation"},{"id":"361774a8-ce2a-4b31-a3fb-b738ea59bd66","type":"GlyphRenderer"}],"title":{"id":"3deec53f-0009-4bf8-9a4e-2473ebd501e2","type":"Title"},"tool_events":{"id":"31d2f277-51c6-430a-af6b-8147b67a1c8e","type":"ToolEvents"},"toolbar":{"id":"608ddae6-cefa-42c6-9cbe-787a390a4935","type":"Toolbar"},"x_range":{"id":"3feb8cd3-e9e5-46e8-99ec-7c724a507640","type":"DataRange1d"},"y_range":{"id":"c556c25e-c654-4e1f-bf3f-68814d124479","type":"DataRange1d"}},"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"}},"id":"a15c44b2-4697-4785-86ef-7daa225e1652","type":"PanTool"},{"attributes":{"callback":null},"id":"3feb8cd3-e9e5-46e8-99ec-7c724a507640","type":"DataRange1d"},{"attributes":{"data_source":{"id":"19324ad1-de09-4767-a18d-ff109df94bef","type":"ColumnDataSource"},"glyph":{"id":"a0f54412-8489-43a9-b2a2-e900c3e05841","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"dc69ea25-f27d-4354-b3ed-cbbfc4d40c39","type":"Annulus"},"selection_glyph":null},"id":"361774a8-ce2a-4b31-a3fb-b738ea59bd66","type":"GlyphRenderer"},{"attributes":{},"id":"72294b65-08e4-47be-92af-eebc6e16fdda","type":"BasicTicker"},{"attributes":{"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"}},"id":"2ac5affd-3ed5-4932-a06d-17d7d9db27ef","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5cca7ef4-7abc-41d8-959a-420c2bacc753","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"5cca7ef4-7abc-41d8-959a-420c2bacc753","type":"BoxAnnotation"},"plot":{"id":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b","subtype":"Figure","type":"Plot"}},"id":"9757be96-1d1f-47f3-853b-21be1527a5cb","type":"BoxZoomTool"},{"attributes":{},"id":"d3435e5a-d117-408e-893e-eae09ca3e0a6","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0f54412-8489-43a9-b2a2-e900c3e05841","type":"Annulus"}],"root_ids":["44fb9e79-0917-4257-bdf2-c07a06bd2d0b"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"4ef386f5-7190-4ac2-9ca1-2d1a6e9f38b4","elementid":"07ef4b79-6f7f-4971-a4e3-1c530d46033b","modelid":"44fb9e79-0917-4257-bdf2-c07a06bd2d0b"}];
                
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
