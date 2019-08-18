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
      };var element = document.getElementById("697fb233-1e56-4f25-a0ab-d928a19d1992");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '697fb233-1e56-4f25-a0ab-d928a19d1992' but no matching script tag was found. ")
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
                var docs_json = {"1ac389b0-908a-4ee2-8f88-e4f17c564c20":{"roots":{"references":[{"attributes":{"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"}},"id":"dad9ebaa-3e07-497b-8e43-f5e59025a772","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a85e26f-93d3-4a51-a556-1d4ffda06ba1","type":"BasicTicker"}},"id":"25870c5e-4166-4f0a-bd9c-e2718f66ecad","type":"Grid"},{"attributes":{"callback":null},"id":"8dbb58e3-413b-408f-9f0d-20ee7c4385d2","type":"DataRange1d"},{"attributes":{"below":[{"id":"21a0e01a-0af9-4bfb-88a9-c73c2e306fd5","type":"LinearAxis"}],"left":[{"id":"fe27b4a9-1201-429d-b559-6447b89b6801","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"21a0e01a-0af9-4bfb-88a9-c73c2e306fd5","type":"LinearAxis"},{"id":"25870c5e-4166-4f0a-bd9c-e2718f66ecad","type":"Grid"},{"id":"fe27b4a9-1201-429d-b559-6447b89b6801","type":"LinearAxis"},{"id":"4e3b810a-7915-4d7f-8d4b-ba66a39315d7","type":"Grid"},{"id":"52557f45-1934-48c4-b60e-a4d988610745","type":"BoxAnnotation"},{"id":"cb0802ba-2a3f-432a-8a20-cffa86f6c57c","type":"GlyphRenderer"}],"title":{"id":"2598df4d-437e-42fa-afcd-3fb4b542ac57","type":"Title"},"tool_events":{"id":"7d950eda-7bbc-461a-97da-6681285f89f8","type":"ToolEvents"},"toolbar":{"id":"ad11cae0-ad28-46b9-8065-cab7220b3630","type":"Toolbar"},"x_range":{"id":"4deb6dd9-e4f8-4314-ac25-7e4c71d5f3af","type":"DataRange1d"},"x_scale":{"id":"e72becd3-ab8a-4959-b921-554495b4a792","type":"LinearScale"},"y_range":{"id":"8dbb58e3-413b-408f-9f0d-20ee7c4385d2","type":"DataRange1d"},"y_scale":{"id":"e1d7e284-9e16-4672-b9f8-1346e030611c","type":"LinearScale"}},"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d36f9941-d5f7-48a4-a608-81196987c9fa","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"904c87cd-38b6-4420-8722-f6ade7a86b17","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"c20b6a34-dbfc-4d6e-bed9-2f9fd365279f","type":"BasicTickFormatter"},"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a85e26f-93d3-4a51-a556-1d4ffda06ba1","type":"BasicTicker"}},"id":"21a0e01a-0af9-4bfb-88a9-c73c2e306fd5","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"52557f45-1934-48c4-b60e-a4d988610745","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"904c87cd-38b6-4420-8722-f6ade7a86b17","type":"ColumnDataSource"},"glyph":{"id":"e91be6d4-1f5c-4f21-9d3c-04bb5b24aa59","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95f26659-22f1-4de6-95c7-bebfd6db084b","type":"Arc"},"selection_glyph":null},"id":"cb0802ba-2a3f-432a-8a20-cffa86f6c57c","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"e91be6d4-1f5c-4f21-9d3c-04bb5b24aa59","type":"Arc"},{"attributes":{},"id":"e72becd3-ab8a-4959-b921-554495b4a792","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"2598df4d-437e-42fa-afcd-3fb4b542ac57","type":"Title"},{"attributes":{},"id":"0b10ff99-9680-4726-a951-aed36ee7f25f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"}},"id":"f650c7c1-1c9e-408b-b8d3-7c40aaf2f54b","type":"ResetTool"},{"attributes":{},"id":"7d950eda-7bbc-461a-97da-6681285f89f8","type":"ToolEvents"},{"attributes":{},"id":"2a85e26f-93d3-4a51-a556-1d4ffda06ba1","type":"BasicTicker"},{"attributes":{"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"}},"id":"eec579f6-5748-471d-8228-b57b3fc52b36","type":"SaveTool"},{"attributes":{"callback":null},"id":"4deb6dd9-e4f8-4314-ac25-7e4c71d5f3af","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"43dbd9f2-430d-4dd8-8b7d-74cdc979bb0f","type":"PanTool"},{"id":"dad9ebaa-3e07-497b-8e43-f5e59025a772","type":"WheelZoomTool"},{"id":"117db59d-074a-4c0c-91cc-22f623f83311","type":"BoxZoomTool"},{"id":"eec579f6-5748-471d-8228-b57b3fc52b36","type":"SaveTool"},{"id":"f650c7c1-1c9e-408b-b8d3-7c40aaf2f54b","type":"ResetTool"},{"id":"fc38ab37-8973-48ba-9761-4375c2bb58c5","type":"HelpTool"}]},"id":"ad11cae0-ad28-46b9-8065-cab7220b3630","type":"Toolbar"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"95f26659-22f1-4de6-95c7-bebfd6db084b","type":"Arc"},{"attributes":{"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"}},"id":"43dbd9f2-430d-4dd8-8b7d-74cdc979bb0f","type":"PanTool"},{"attributes":{"formatter":{"id":"0b10ff99-9680-4726-a951-aed36ee7f25f","type":"BasicTickFormatter"},"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d36f9941-d5f7-48a4-a608-81196987c9fa","type":"BasicTicker"}},"id":"fe27b4a9-1201-429d-b559-6447b89b6801","type":"LinearAxis"},{"attributes":{},"id":"c20b6a34-dbfc-4d6e-bed9-2f9fd365279f","type":"BasicTickFormatter"},{"attributes":{},"id":"e1d7e284-9e16-4672-b9f8-1346e030611c","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d36f9941-d5f7-48a4-a608-81196987c9fa","type":"BasicTicker"}},"id":"4e3b810a-7915-4d7f-8d4b-ba66a39315d7","type":"Grid"},{"attributes":{"overlay":{"id":"52557f45-1934-48c4-b60e-a4d988610745","type":"BoxAnnotation"},"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"}},"id":"117db59d-074a-4c0c-91cc-22f623f83311","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"231c0b15-3025-41a1-a58b-b13c61575acf","subtype":"Figure","type":"Plot"}},"id":"fc38ab37-8973-48ba-9761-4375c2bb58c5","type":"HelpTool"}],"root_ids":["231c0b15-3025-41a1-a58b-b13c61575acf"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"1ac389b0-908a-4ee2-8f88-e4f17c564c20","elementid":"697fb233-1e56-4f25-a0ab-d928a19d1992","modelid":"231c0b15-3025-41a1-a58b-b13c61575acf"}];
                
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
