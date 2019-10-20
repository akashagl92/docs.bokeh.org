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
      };var element = document.getElementById("eb5287e1-347d-4af1-8b6e-cc88f133a1dc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb5287e1-347d-4af1-8b6e-cc88f133a1dc' but no matching script tag was found. ")
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
                var docs_json = {"81091a68-925d-4b36-9366-fc4fec0b6708":{"roots":{"references":[{"attributes":{"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"}},"id":"d8ae99b0-e26b-4af3-930a-3cdac022cad9","type":"ResetTool"},{"attributes":{"callback":null},"id":"34b4a1b9-2c85-44e3-9237-d7c083cfa350","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"db896db4-78ac-46f1-9c34-d6a4b20c0817","type":"Circle"},{"attributes":{"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"}},"id":"a0587334-e3c2-442d-96d4-ce11aef6c715","type":"SaveTool"},{"attributes":{},"id":"c3d91e98-f799-4bec-b268-19574a157418","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ad251247-c237-4d54-b06a-e3c1baf3a0c5","type":"LinearAxis"}],"left":[{"id":"e426b2d0-9183-49da-b211-8be248ac6d95","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"ad251247-c237-4d54-b06a-e3c1baf3a0c5","type":"LinearAxis"},{"id":"24171704-afc8-46c2-b1e1-e558f6555fa4","type":"Grid"},{"id":"e426b2d0-9183-49da-b211-8be248ac6d95","type":"LinearAxis"},{"id":"df9a4616-8375-4edd-b2f7-f23b319a2fa7","type":"Grid"},{"id":"86853431-f556-4cd5-95ec-3325fc0dfdd7","type":"BoxAnnotation"},{"id":"18306063-3918-426f-98fc-7fc41fe7fbcf","type":"GlyphRenderer"}],"title":{"id":"41fe0aa8-003a-4162-b31a-70a04c09abc4","type":"Title"},"tool_events":{"id":"fd3cba1b-f4ab-4735-9cf0-2716035c5adb","type":"ToolEvents"},"toolbar":{"id":"8be98221-3da0-40ed-ab1d-097d66aa99fe","type":"Toolbar"},"x_range":{"id":"34b4a1b9-2c85-44e3-9237-d7c083cfa350","type":"DataRange1d"},"x_scale":{"id":"13227ac7-5a18-44f2-8957-52d7d0200c3c","type":"LinearScale"},"y_range":{"id":"d5f045b8-15ab-4596-935e-2b547b3bc2e6","type":"DataRange1d"},"y_scale":{"id":"47e4c434-03f5-46c1-b8fc-43ff19919026","type":"LinearScale"}},"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"}},"id":"ac4b5598-58e1-4c31-9992-abf7484a135c","type":"PanTool"},{"attributes":{"data_source":{"id":"3ba1a951-07f9-4c9d-81a2-4f7b21dc73b3","type":"ColumnDataSource"},"glyph":{"id":"db896db4-78ac-46f1-9c34-d6a4b20c0817","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a1c92872-9d92-44f2-af13-927c27447891","type":"Circle"},"selection_glyph":null},"id":"18306063-3918-426f-98fc-7fc41fe7fbcf","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"c3d91e98-f799-4bec-b268-19574a157418","type":"BasicTickFormatter"},"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7bac5b1-0675-4f31-8ccf-08545cc04f43","type":"BasicTicker"}},"id":"ad251247-c237-4d54-b06a-e3c1baf3a0c5","type":"LinearAxis"},{"attributes":{},"id":"fd3cba1b-f4ab-4735-9cf0-2716035c5adb","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"},"ticker":{"id":"403430dc-0da2-496b-9df2-9752989f6817","type":"BasicTicker"}},"id":"df9a4616-8375-4edd-b2f7-f23b319a2fa7","type":"Grid"},{"attributes":{"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"}},"id":"bb51b155-dec2-44ab-b36f-265a6148c358","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ac4b5598-58e1-4c31-9992-abf7484a135c","type":"PanTool"},{"id":"bb51b155-dec2-44ab-b36f-265a6148c358","type":"WheelZoomTool"},{"id":"f9f018dd-51c3-4e05-af6b-5e63e765aef4","type":"BoxZoomTool"},{"id":"a0587334-e3c2-442d-96d4-ce11aef6c715","type":"SaveTool"},{"id":"d8ae99b0-e26b-4af3-930a-3cdac022cad9","type":"ResetTool"},{"id":"430d7517-ffbd-4d7e-a9f7-bf42cd7c5e4c","type":"HelpTool"}]},"id":"8be98221-3da0-40ed-ab1d-097d66aa99fe","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a1c92872-9d92-44f2-af13-927c27447891","type":"Circle"},{"attributes":{},"id":"13227ac7-5a18-44f2-8957-52d7d0200c3c","type":"LinearScale"},{"attributes":{"formatter":{"id":"481823a4-bcdb-4803-9c81-9aef93f36af9","type":"BasicTickFormatter"},"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"},"ticker":{"id":"403430dc-0da2-496b-9df2-9752989f6817","type":"BasicTicker"}},"id":"e426b2d0-9183-49da-b211-8be248ac6d95","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"3ba1a951-07f9-4c9d-81a2-4f7b21dc73b3","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7bac5b1-0675-4f31-8ccf-08545cc04f43","type":"BasicTicker"}},"id":"24171704-afc8-46c2-b1e1-e558f6555fa4","type":"Grid"},{"attributes":{"overlay":{"id":"86853431-f556-4cd5-95ec-3325fc0dfdd7","type":"BoxAnnotation"},"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"}},"id":"f9f018dd-51c3-4e05-af6b-5e63e765aef4","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"41fe0aa8-003a-4162-b31a-70a04c09abc4","type":"Title"},{"attributes":{},"id":"481823a4-bcdb-4803-9c81-9aef93f36af9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d5f045b8-15ab-4596-935e-2b547b3bc2e6","type":"DataRange1d"},{"attributes":{"plot":{"id":"0c2928b8-0b17-4708-b06b-dd783900a807","subtype":"Figure","type":"Plot"}},"id":"430d7517-ffbd-4d7e-a9f7-bf42cd7c5e4c","type":"HelpTool"},{"attributes":{},"id":"47e4c434-03f5-46c1-b8fc-43ff19919026","type":"LinearScale"},{"attributes":{},"id":"d7bac5b1-0675-4f31-8ccf-08545cc04f43","type":"BasicTicker"},{"attributes":{},"id":"403430dc-0da2-496b-9df2-9752989f6817","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"86853431-f556-4cd5-95ec-3325fc0dfdd7","type":"BoxAnnotation"}],"root_ids":["0c2928b8-0b17-4708-b06b-dd783900a807"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"81091a68-925d-4b36-9366-fc4fec0b6708","elementid":"eb5287e1-347d-4af1-8b6e-cc88f133a1dc","modelid":"0c2928b8-0b17-4708-b06b-dd783900a807"}];
                
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
