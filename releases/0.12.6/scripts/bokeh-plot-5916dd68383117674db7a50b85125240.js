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
      };var element = document.getElementById("faaa8578-4727-4d37-9c68-a2f8769cd658");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'faaa8578-4727-4d37-9c68-a2f8769cd658' but no matching script tag was found. ")
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
                var docs_json = {"abb40605-3d62-45c4-8fbc-2ca6f5ba9d30":{"roots":{"references":[{"attributes":{"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"}},"id":"090613a8-2019-4fca-af91-fce3012a2707","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7bf4eda-71d7-4acb-a3ff-e8aed77fba02","type":"BasicTicker"}},"id":"6f09701f-1654-4cfc-baaf-e8caed5eddff","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"353665e1-36cb-41bf-ae82-a1ae88323820","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f771397d-4e3d-41fb-a547-0d2f3c852f4c","type":"PanTool"},{"id":"87e3661b-fbaf-4c14-a57b-7563cb7ec9d9","type":"WheelZoomTool"},{"id":"346d4819-3a47-4aad-a8d0-183489f45f4d","type":"BoxZoomTool"},{"id":"6334fc9f-7025-4dc1-9d48-df65d445af4e","type":"SaveTool"},{"id":"090613a8-2019-4fca-af91-fce3012a2707","type":"ResetTool"},{"id":"e13e0879-88d5-4ee9-a670-663e393e2b3a","type":"HelpTool"}]},"id":"66e85600-0e2f-40c6-8ea5-4b5942034003","type":"Toolbar"},{"attributes":{},"id":"744744a0-4ea5-454c-9892-1bf41a5b72f4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f148001-1efc-4c66-b3d1-ab9a0072f5b1","type":"BasicTicker"}},"id":"e75cc57e-6ed8-4834-9776-8982d25d5b8c","type":"Grid"},{"attributes":{"formatter":{"id":"d4808b92-ac5e-4bff-840c-3d3405eb98b5","type":"BasicTickFormatter"},"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7bf4eda-71d7-4acb-a3ff-e8aed77fba02","type":"BasicTicker"}},"id":"4ac9e232-8a06-4e7b-9625-6d6bcd42bdcb","type":"LinearAxis"},{"attributes":{},"id":"9bd2b5e7-0024-4dba-84c0-1f94ad9b6d9b","type":"LinearScale"},{"attributes":{"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"}},"id":"6334fc9f-7025-4dc1-9d48-df65d445af4e","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"905da7bb-5bef-4a5f-a2c5-429f77c970f7","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"353665e1-36cb-41bf-ae82-a1ae88323820","type":"ColumnDataSource"},"glyph":{"id":"58359a8a-b7d5-493d-8b65-3af2b8e97481","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f3bd682f-d02f-473a-8e73-ba84297227fc","type":"Circle"},"selection_glyph":null},"id":"f7eb0a9c-0942-4a91-a3dd-e1853628a8a4","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b67b3af4-e47c-4d81-81d9-dd82e5768962","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"adaef71b-21b9-41af-aeaa-873be4dc0c81","type":"Title"},{"attributes":{"formatter":{"id":"744744a0-4ea5-454c-9892-1bf41a5b72f4","type":"BasicTickFormatter"},"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f148001-1efc-4c66-b3d1-ab9a0072f5b1","type":"BasicTicker"}},"id":"74ccd328-73e2-47c1-99dd-ff558c681c90","type":"LinearAxis"},{"attributes":{},"id":"1f148001-1efc-4c66-b3d1-ab9a0072f5b1","type":"BasicTicker"},{"attributes":{},"id":"a7bf4eda-71d7-4acb-a3ff-e8aed77fba02","type":"BasicTicker"},{"attributes":{"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"}},"id":"f771397d-4e3d-41fb-a547-0d2f3c852f4c","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"58359a8a-b7d5-493d-8b65-3af2b8e97481","type":"Circle"},{"attributes":{},"id":"e8d90763-ef58-4875-acc0-8456fac18cea","type":"LinearScale"},{"attributes":{"below":[{"id":"74ccd328-73e2-47c1-99dd-ff558c681c90","type":"LinearAxis"}],"left":[{"id":"4ac9e232-8a06-4e7b-9625-6d6bcd42bdcb","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"74ccd328-73e2-47c1-99dd-ff558c681c90","type":"LinearAxis"},{"id":"e75cc57e-6ed8-4834-9776-8982d25d5b8c","type":"Grid"},{"id":"4ac9e232-8a06-4e7b-9625-6d6bcd42bdcb","type":"LinearAxis"},{"id":"6f09701f-1654-4cfc-baaf-e8caed5eddff","type":"Grid"},{"id":"905da7bb-5bef-4a5f-a2c5-429f77c970f7","type":"BoxAnnotation"},{"id":"f7eb0a9c-0942-4a91-a3dd-e1853628a8a4","type":"GlyphRenderer"}],"title":{"id":"adaef71b-21b9-41af-aeaa-873be4dc0c81","type":"Title"},"tool_events":{"id":"208c5679-c163-4f98-84d0-2808cb86d50f","type":"ToolEvents"},"toolbar":{"id":"66e85600-0e2f-40c6-8ea5-4b5942034003","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"09162b84-67a6-4e25-ba7b-cd5e6b0cf194","type":"DataRange1d"},"x_scale":{"id":"9bd2b5e7-0024-4dba-84c0-1f94ad9b6d9b","type":"LinearScale"},"y_range":{"id":"b67b3af4-e47c-4d81-81d9-dd82e5768962","type":"DataRange1d"},"y_scale":{"id":"e8d90763-ef58-4875-acc0-8456fac18cea","type":"LinearScale"}},"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"905da7bb-5bef-4a5f-a2c5-429f77c970f7","type":"BoxAnnotation"},"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"}},"id":"346d4819-3a47-4aad-a8d0-183489f45f4d","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3bd682f-d02f-473a-8e73-ba84297227fc","type":"Circle"},{"attributes":{"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"}},"id":"87e3661b-fbaf-4c14-a57b-7563cb7ec9d9","type":"WheelZoomTool"},{"attributes":{},"id":"d4808b92-ac5e-4bff-840c-3d3405eb98b5","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"09162b84-67a6-4e25-ba7b-cd5e6b0cf194","type":"DataRange1d"},{"attributes":{"plot":{"id":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353","subtype":"Figure","type":"Plot"}},"id":"e13e0879-88d5-4ee9-a670-663e393e2b3a","type":"HelpTool"},{"attributes":{},"id":"208c5679-c163-4f98-84d0-2808cb86d50f","type":"ToolEvents"}],"root_ids":["39d7a816-1c4a-4d7b-b44c-6e56bb04e353"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"abb40605-3d62-45c4-8fbc-2ca6f5ba9d30","elementid":"faaa8578-4727-4d37-9c68-a2f8769cd658","modelid":"39d7a816-1c4a-4d7b-b44c-6e56bb04e353"}];
                
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
