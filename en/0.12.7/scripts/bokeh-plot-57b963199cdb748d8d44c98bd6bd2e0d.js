(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("7aeb91b4-78c9-4ed0-b4e9-fc16254a43fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7aeb91b4-78c9-4ed0-b4e9-fc16254a43fe' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"6bb9aca5-2a94-4adb-9e69-51b0b1f34dd5":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"a051fec6-a46a-477d-b934-234336d2064f","type":"VBar"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"44389e72-7541-4767-b4cb-9a3781976e22","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"123d4c77-6e09-410e-8491-815f8cec47ad","type":"FactorRange"},{"attributes":{},"id":"1dd91b88-a5a2-45ee-aea4-f63daa74a5f8","type":"LinearScale"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"6e8849ae-099e-4f32-805a-634cea09523b","type":"Title"},{"attributes":{"formatter":{"id":"e1158bef-b8da-47a6-b1d2-cff0a2e9bedb","type":"CategoricalTickFormatter"},"plot":{"id":"98351b6f-9b62-44d8-926b-510270bd8798","subtype":"Figure","type":"Plot"},"ticker":{"id":"712a1293-27a7-4657-9eee-d22d2626fd42","type":"CategoricalTicker"}},"id":"7925faa9-b4ab-4d66-8168-37ea029cb8ef","type":"CategoricalAxis"},{"attributes":{},"id":"12dbcfbd-27ba-4d4e-9ba4-6294c296010f","type":"SaveTool"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"b545f7b1-c720-4d30-b046-948a73f6079d","type":"CategoricalColorMapper"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"b545f7b1-c720-4d30-b046-948a73f6079d","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"a7c26d37-3f3a-4520-a6d2-f459ae672496","type":"VBar"},{"attributes":{"data_source":{"id":"44389e72-7541-4767-b4cb-9a3781976e22","type":"ColumnDataSource"},"glyph":{"id":"a7c26d37-3f3a-4520-a6d2-f459ae672496","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a051fec6-a46a-477d-b934-234336d2064f","type":"VBar"},"selection_glyph":null,"view":{"id":"b72189da-4e78-4bc9-9012-e0111655a854","type":"CDSView"}},"id":"aa8017bf-5b5b-4801-a552-7b75e0f49e7e","type":"GlyphRenderer"},{"attributes":{},"id":"712a1293-27a7-4657-9eee-d22d2626fd42","type":"CategoricalTicker"},{"attributes":{},"id":"4f863669-d093-4750-9ac2-02f99e543e5a","type":"ResetTool"},{"attributes":{},"id":"e3de4177-e5bb-401e-8ba6-f125b199cbba","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"98351b6f-9b62-44d8-926b-510270bd8798","subtype":"Figure","type":"Plot"},"ticker":{"id":"712a1293-27a7-4657-9eee-d22d2626fd42","type":"CategoricalTicker"}},"id":"8dc90639-5363-43d7-af68-ace83482959f","type":"Grid"},{"attributes":{},"id":"4e94b3a1-5477-4f23-ac43-9ae823ada654","type":"BasicTickFormatter"},{"attributes":{},"id":"e1158bef-b8da-47a6-b1d2-cff0a2e9bedb","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6b27fad-e9b3-4491-9ab1-0c67f0a267c7","type":"PanTool"},{"id":"a7648813-9573-4229-9eb8-506f14a5e14a","type":"WheelZoomTool"},{"id":"37da7f90-94f0-4619-b7f8-89aaad9c5775","type":"BoxZoomTool"},{"id":"12dbcfbd-27ba-4d4e-9ba4-6294c296010f","type":"SaveTool"},{"id":"4f863669-d093-4750-9ac2-02f99e543e5a","type":"ResetTool"},{"id":"11251bf9-0868-434a-8707-ee3e96f1ae40","type":"HelpTool"}]},"id":"6747cc62-8858-467f-aef1-fa1b5fa73e2d","type":"Toolbar"},{"attributes":{"items":[{"id":"12f088ca-8b8a-449e-ba54-4c4189955605","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"98351b6f-9b62-44d8-926b-510270bd8798","subtype":"Figure","type":"Plot"}},"id":"852b7451-e1d1-4614-8bed-da43e91f8a5d","type":"Legend"},{"attributes":{"formatter":{"id":"4e94b3a1-5477-4f23-ac43-9ae823ada654","type":"BasicTickFormatter"},"plot":{"id":"98351b6f-9b62-44d8-926b-510270bd8798","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3de4177-e5bb-401e-8ba6-f125b199cbba","type":"BasicTicker"}},"id":"e0994af7-1314-4df2-a160-5a68c5e9df69","type":"LinearAxis"},{"attributes":{},"id":"11251bf9-0868-434a-8707-ee3e96f1ae40","type":"HelpTool"},{"attributes":{"source":{"id":"44389e72-7541-4767-b4cb-9a3781976e22","type":"ColumnDataSource"}},"id":"b72189da-4e78-4bc9-9012-e0111655a854","type":"CDSView"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"aa8017bf-5b5b-4801-a552-7b75e0f49e7e","type":"GlyphRenderer"}]},"id":"12f088ca-8b8a-449e-ba54-4c4189955605","type":"LegendItem"},{"attributes":{"callback":null,"end":9,"start":0},"id":"7f2145c5-70c7-42b3-b2b2-f4f4316c8c24","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14c744aa-78c0-48a3-8637-e04df26be9e5","type":"BoxAnnotation"},{"attributes":{},"id":"91327400-ebce-45ed-ace0-9772a6c182e8","type":"CategoricalScale"},{"attributes":{},"id":"d6b27fad-e9b3-4491-9ab1-0c67f0a267c7","type":"PanTool"},{"attributes":{},"id":"a7648813-9573-4229-9eb8-506f14a5e14a","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"7925faa9-b4ab-4d66-8168-37ea029cb8ef","type":"CategoricalAxis"}],"left":[{"id":"e0994af7-1314-4df2-a160-5a68c5e9df69","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"7925faa9-b4ab-4d66-8168-37ea029cb8ef","type":"CategoricalAxis"},{"id":"8dc90639-5363-43d7-af68-ace83482959f","type":"Grid"},{"id":"e0994af7-1314-4df2-a160-5a68c5e9df69","type":"LinearAxis"},{"id":"ddbc87eb-b2e4-4187-9456-f2d9678a913a","type":"Grid"},{"id":"14c744aa-78c0-48a3-8637-e04df26be9e5","type":"BoxAnnotation"},{"id":"852b7451-e1d1-4614-8bed-da43e91f8a5d","type":"Legend"},{"id":"aa8017bf-5b5b-4801-a552-7b75e0f49e7e","type":"GlyphRenderer"}],"title":{"id":"6e8849ae-099e-4f32-805a-634cea09523b","type":"Title"},"toolbar":{"id":"6747cc62-8858-467f-aef1-fa1b5fa73e2d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"123d4c77-6e09-410e-8491-815f8cec47ad","type":"FactorRange"},"x_scale":{"id":"91327400-ebce-45ed-ace0-9772a6c182e8","type":"CategoricalScale"},"y_range":{"id":"7f2145c5-70c7-42b3-b2b2-f4f4316c8c24","type":"DataRange1d"},"y_scale":{"id":"1dd91b88-a5a2-45ee-aea4-f63daa74a5f8","type":"LinearScale"}},"id":"98351b6f-9b62-44d8-926b-510270bd8798","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"98351b6f-9b62-44d8-926b-510270bd8798","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3de4177-e5bb-401e-8ba6-f125b199cbba","type":"BasicTicker"}},"id":"ddbc87eb-b2e4-4187-9456-f2d9678a913a","type":"Grid"},{"attributes":{"overlay":{"id":"14c744aa-78c0-48a3-8637-e04df26be9e5","type":"BoxAnnotation"}},"id":"37da7f90-94f0-4619-b7f8-89aaad9c5775","type":"BoxZoomTool"}],"root_ids":["98351b6f-9b62-44d8-926b-510270bd8798"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"6bb9aca5-2a94-4adb-9e69-51b0b1f34dd5","elementid":"7aeb91b4-78c9-4ed0-b4e9-fc16254a43fe","modelid":"98351b6f-9b62-44d8-926b-510270bd8798"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
