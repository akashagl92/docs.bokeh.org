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
      };var element = document.getElementById("d4ecc049-93ec-4f79-be22-b3c6dad949de");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd4ecc049-93ec-4f79-be22-b3c6dad949de' but no matching script tag was found. ")
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
                var docs_json = {"461066ba-8935-41b7-8a46-d5ad4c34468f":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"6b07c177-ab9c-4508-9508-7c3add0d3e6b","type":"Title"},{"attributes":{},"id":"297236a9-238a-42bb-a075-65498592f579","type":"ResetTool"},{"attributes":{"plot":{"id":"ae14d4e5-b55f-4366-bf9b-2ca2f1e2cc80","subtype":"Figure","type":"Plot"},"ticker":{"id":"679f7e67-333c-472a-a098-a1f4a64186ad","type":"BasicTicker"}},"id":"18d9ee0f-ebd2-4c79-988a-afb4d095123a","type":"Grid"},{"attributes":{"callback":null,"column_names":["left","right","top","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"d605ebe0-f005-4252-8809-36efd9bcd44b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d605ebe0-f005-4252-8809-36efd9bcd44b","type":"ColumnDataSource"},"glyph":{"id":"b246542b-4793-4dd9-b2f5-7b500f7288ed","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a299f365-656b-4daa-b384-488cffe6e1e8","type":"Quad"},"selection_glyph":null,"view":{"id":"223b4ad3-e547-41b3-8e15-df5dd78ac4df","type":"CDSView"}},"id":"f37c0934-06a8-4089-89cf-00a4eade48c6","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"163caf46-c71e-4619-9076-2cfeb059b1cc","type":"PanTool"},{"id":"1c54ad30-e3dc-4415-b5bf-aa13af61f664","type":"WheelZoomTool"},{"id":"8bdfa87b-f5b6-4881-980c-8f5f5233d54e","type":"BoxZoomTool"},{"id":"738b0d5b-cbce-46cd-b5cd-93ff6badb4dc","type":"SaveTool"},{"id":"297236a9-238a-42bb-a075-65498592f579","type":"ResetTool"},{"id":"413e39b0-ff06-49a0-8b36-6ad2bd6c606e","type":"HelpTool"}]},"id":"fbb349ac-d6f4-4212-b8c3-4360e00b60df","type":"Toolbar"},{"attributes":{"below":[{"id":"8b4d9818-5b6a-47f5-8619-1dd8bea9ae55","type":"LinearAxis"}],"left":[{"id":"04d38d8b-6940-4ee0-ad2e-1f546ba6704c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8b4d9818-5b6a-47f5-8619-1dd8bea9ae55","type":"LinearAxis"},{"id":"18d9ee0f-ebd2-4c79-988a-afb4d095123a","type":"Grid"},{"id":"04d38d8b-6940-4ee0-ad2e-1f546ba6704c","type":"LinearAxis"},{"id":"e375db6a-7b7e-4a7d-b885-11c564331f73","type":"Grid"},{"id":"8b0f7c68-ee97-4574-af3b-70639173daff","type":"BoxAnnotation"},{"id":"f37c0934-06a8-4089-89cf-00a4eade48c6","type":"GlyphRenderer"}],"title":{"id":"6b07c177-ab9c-4508-9508-7c3add0d3e6b","type":"Title"},"toolbar":{"id":"fbb349ac-d6f4-4212-b8c3-4360e00b60df","type":"Toolbar"},"x_range":{"id":"b947aa36-1a6b-4a0e-9eb3-e042e53e07e2","type":"DataRange1d"},"x_scale":{"id":"50e401c8-2dc9-408b-a4f5-6131c54abe62","type":"LinearScale"},"y_range":{"id":"fa133c11-47e4-4b8a-996d-9783de9f34e3","type":"DataRange1d"},"y_scale":{"id":"cd869182-762b-44df-acff-3dce4f65a851","type":"LinearScale"}},"id":"ae14d4e5-b55f-4366-bf9b-2ca2f1e2cc80","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"738b0d5b-cbce-46cd-b5cd-93ff6badb4dc","type":"SaveTool"},{"attributes":{},"id":"1c54ad30-e3dc-4415-b5bf-aa13af61f664","type":"WheelZoomTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"b246542b-4793-4dd9-b2f5-7b500f7288ed","type":"Quad"},{"attributes":{},"id":"163caf46-c71e-4619-9076-2cfeb059b1cc","type":"PanTool"},{"attributes":{},"id":"413e39b0-ff06-49a0-8b36-6ad2bd6c606e","type":"HelpTool"},{"attributes":{},"id":"3d63b65a-e0df-4534-bebb-d3133f52e893","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b947aa36-1a6b-4a0e-9eb3-e042e53e07e2","type":"DataRange1d"},{"attributes":{"overlay":{"id":"8b0f7c68-ee97-4574-af3b-70639173daff","type":"BoxAnnotation"}},"id":"8bdfa87b-f5b6-4881-980c-8f5f5233d54e","type":"BoxZoomTool"},{"attributes":{},"id":"50e401c8-2dc9-408b-a4f5-6131c54abe62","type":"LinearScale"},{"attributes":{"formatter":{"id":"3d63b65a-e0df-4534-bebb-d3133f52e893","type":"BasicTickFormatter"},"plot":{"id":"ae14d4e5-b55f-4366-bf9b-2ca2f1e2cc80","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f50a726-ca3d-4ffc-a595-56fcf48f4e43","type":"BasicTicker"}},"id":"04d38d8b-6940-4ee0-ad2e-1f546ba6704c","type":"LinearAxis"},{"attributes":{},"id":"80690f50-ae89-4567-8110-7b511c2d85fb","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"fa133c11-47e4-4b8a-996d-9783de9f34e3","type":"DataRange1d"},{"attributes":{"formatter":{"id":"80690f50-ae89-4567-8110-7b511c2d85fb","type":"BasicTickFormatter"},"plot":{"id":"ae14d4e5-b55f-4366-bf9b-2ca2f1e2cc80","subtype":"Figure","type":"Plot"},"ticker":{"id":"679f7e67-333c-472a-a098-a1f4a64186ad","type":"BasicTicker"}},"id":"8b4d9818-5b6a-47f5-8619-1dd8bea9ae55","type":"LinearAxis"},{"attributes":{},"id":"679f7e67-333c-472a-a098-a1f4a64186ad","type":"BasicTicker"},{"attributes":{"source":{"id":"d605ebe0-f005-4252-8809-36efd9bcd44b","type":"ColumnDataSource"}},"id":"223b4ad3-e547-41b3-8e15-df5dd78ac4df","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"ae14d4e5-b55f-4366-bf9b-2ca2f1e2cc80","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f50a726-ca3d-4ffc-a595-56fcf48f4e43","type":"BasicTicker"}},"id":"e375db6a-7b7e-4a7d-b885-11c564331f73","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"a299f365-656b-4daa-b384-488cffe6e1e8","type":"Quad"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8b0f7c68-ee97-4574-af3b-70639173daff","type":"BoxAnnotation"},{"attributes":{},"id":"6f50a726-ca3d-4ffc-a595-56fcf48f4e43","type":"BasicTicker"},{"attributes":{},"id":"cd869182-762b-44df-acff-3dce4f65a851","type":"LinearScale"}],"root_ids":["ae14d4e5-b55f-4366-bf9b-2ca2f1e2cc80"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"461066ba-8935-41b7-8a46-d5ad4c34468f","elementid":"d4ecc049-93ec-4f79-be22-b3c6dad949de","modelid":"ae14d4e5-b55f-4366-bf9b-2ca2f1e2cc80"}];
                
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
