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
      };var element = document.getElementById("90706cec-8ce6-4fcd-89fc-e93f693188a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '90706cec-8ce6-4fcd-89fc-e93f693188a0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"12e9d6e2-e4e3-4f65-be8c-215a7ba29445":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ab4785fa-2c62-4f1d-a8d9-6a6bf0f39083","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c3fa16f-8a18-4793-bcd4-ba9112a4ab07","type":"CategoricalTicker"}},"id":"8a4c464c-7a5d-4cea-bed0-fdd2f2c3f80d","type":"Grid"},{"attributes":{},"id":"3b580284-6596-46ca-9018-ec11ca1c7576","type":"SaveTool"},{"attributes":{"formatter":{"id":"289edc44-ae7c-49ef-8a45-f97a41f5e2c9","type":"CategoricalTickFormatter"},"plot":{"id":"ab4785fa-2c62-4f1d-a8d9-6a6bf0f39083","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c3fa16f-8a18-4793-bcd4-ba9112a4ab07","type":"CategoricalTicker"}},"id":"6b322d07-4cca-4d98-a740-69c111aa053e","type":"CategoricalAxis"},{"attributes":{},"id":"80e852d8-cc8d-419f-beb1-d057962512fa","type":"BasicTickFormatter"},{"attributes":{},"id":"2c3fa16f-8a18-4793-bcd4-ba9112a4ab07","type":"CategoricalTicker"},{"attributes":{},"id":"807be141-9273-45ec-958d-826f16d22b58","type":"BasicTicker"},{"attributes":{},"id":"7afdfd0f-c161-4448-afb0-0bdf42a5d447","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"ab4785fa-2c62-4f1d-a8d9-6a6bf0f39083","subtype":"Figure","type":"Plot"},"ticker":{"id":"807be141-9273-45ec-958d-826f16d22b58","type":"BasicTicker"}},"id":"d57b1fb3-5aa7-4abc-bc93-22194952cf81","type":"Grid"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"2dabba7a-61fb-457d-b8a1-2fc63d9a71c7","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"38f55fbc-8e25-478e-838f-45186e78c7b8","type":"VBar"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"2dabba7a-61fb-457d-b8a1-2fc63d9a71c7","type":"CategoricalColorMapper"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"036b5c23-6b5e-4c66-bee5-6b2ebf2920d7","type":"GlyphRenderer"}]},"id":"3abfc3d6-959b-4949-a901-ad1b1997eb69","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"4e32704f-2d5d-44b7-8029-b47bfdef4362","type":"VBar"},{"attributes":{},"id":"fa442597-0ef6-455c-9cea-9546e6a38c62","type":"PanTool"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"d67e44e6-1992-43d6-9b71-83d9b20afcc6","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d67e44e6-1992-43d6-9b71-83d9b20afcc6","type":"ColumnDataSource"},"glyph":{"id":"38f55fbc-8e25-478e-838f-45186e78c7b8","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4e32704f-2d5d-44b7-8029-b47bfdef4362","type":"VBar"},"selection_glyph":null,"view":{"id":"227743dc-8646-4e82-895f-3ef7f884498e","type":"CDSView"}},"id":"036b5c23-6b5e-4c66-bee5-6b2ebf2920d7","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"6b322d07-4cca-4d98-a740-69c111aa053e","type":"CategoricalAxis"}],"left":[{"id":"7196bff9-9310-4909-8def-8da8d3084a2f","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"6b322d07-4cca-4d98-a740-69c111aa053e","type":"CategoricalAxis"},{"id":"8a4c464c-7a5d-4cea-bed0-fdd2f2c3f80d","type":"Grid"},{"id":"7196bff9-9310-4909-8def-8da8d3084a2f","type":"LinearAxis"},{"id":"d57b1fb3-5aa7-4abc-bc93-22194952cf81","type":"Grid"},{"id":"96c7f16d-b6af-4c40-9c0f-8c183d77616b","type":"BoxAnnotation"},{"id":"75390ed3-e17b-4b78-98a2-9ccbabbebe6a","type":"Legend"},{"id":"036b5c23-6b5e-4c66-bee5-6b2ebf2920d7","type":"GlyphRenderer"}],"title":{"id":"bb9db5f3-e6ee-4acb-bd20-8365255165ef","type":"Title"},"toolbar":{"id":"9e3cabe5-e815-4dd2-ad66-833acd20d508","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"beaf40df-8d74-4e34-9401-7faddf786c93","type":"FactorRange"},"x_scale":{"id":"2cf947a6-6ba0-40af-bcfd-814199ac4ab8","type":"CategoricalScale"},"y_range":{"id":"e2a7ec13-cbfb-40cf-9825-fa34923a3804","type":"DataRange1d"},"y_scale":{"id":"2329f26a-4b0c-4d9c-9e1e-36abe5b0b3d3","type":"LinearScale"}},"id":"ab4785fa-2c62-4f1d-a8d9-6a6bf0f39083","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"96c7f16d-b6af-4c40-9c0f-8c183d77616b","type":"BoxAnnotation"}},"id":"6fcc1f91-ecf6-4ec5-9f98-cd099ac6765a","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"bb9db5f3-e6ee-4acb-bd20-8365255165ef","type":"Title"},{"attributes":{},"id":"566d4d6e-dc97-44ed-87ac-09e9db434ac1","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"beaf40df-8d74-4e34-9401-7faddf786c93","type":"FactorRange"},{"attributes":{},"id":"289edc44-ae7c-49ef-8a45-f97a41f5e2c9","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fa442597-0ef6-455c-9cea-9546e6a38c62","type":"PanTool"},{"id":"55faff69-4d36-49d7-b03f-041f00819095","type":"WheelZoomTool"},{"id":"6fcc1f91-ecf6-4ec5-9f98-cd099ac6765a","type":"BoxZoomTool"},{"id":"3b580284-6596-46ca-9018-ec11ca1c7576","type":"SaveTool"},{"id":"566d4d6e-dc97-44ed-87ac-09e9db434ac1","type":"ResetTool"},{"id":"7afdfd0f-c161-4448-afb0-0bdf42a5d447","type":"HelpTool"}]},"id":"9e3cabe5-e815-4dd2-ad66-833acd20d508","type":"Toolbar"},{"attributes":{"formatter":{"id":"80e852d8-cc8d-419f-beb1-d057962512fa","type":"BasicTickFormatter"},"plot":{"id":"ab4785fa-2c62-4f1d-a8d9-6a6bf0f39083","subtype":"Figure","type":"Plot"},"ticker":{"id":"807be141-9273-45ec-958d-826f16d22b58","type":"BasicTicker"}},"id":"7196bff9-9310-4909-8def-8da8d3084a2f","type":"LinearAxis"},{"attributes":{"source":{"id":"d67e44e6-1992-43d6-9b71-83d9b20afcc6","type":"ColumnDataSource"}},"id":"227743dc-8646-4e82-895f-3ef7f884498e","type":"CDSView"},{"attributes":{},"id":"2cf947a6-6ba0-40af-bcfd-814199ac4ab8","type":"CategoricalScale"},{"attributes":{"callback":null,"end":9,"start":0},"id":"e2a7ec13-cbfb-40cf-9825-fa34923a3804","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96c7f16d-b6af-4c40-9c0f-8c183d77616b","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"3abfc3d6-959b-4949-a901-ad1b1997eb69","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"ab4785fa-2c62-4f1d-a8d9-6a6bf0f39083","subtype":"Figure","type":"Plot"}},"id":"75390ed3-e17b-4b78-98a2-9ccbabbebe6a","type":"Legend"},{"attributes":{},"id":"2329f26a-4b0c-4d9c-9e1e-36abe5b0b3d3","type":"LinearScale"},{"attributes":{},"id":"55faff69-4d36-49d7-b03f-041f00819095","type":"WheelZoomTool"}],"root_ids":["ab4785fa-2c62-4f1d-a8d9-6a6bf0f39083"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"12e9d6e2-e4e3-4f65-be8c-215a7ba29445","elementid":"90706cec-8ce6-4fcd-89fc-e93f693188a0","modelid":"ab4785fa-2c62-4f1d-a8d9-6a6bf0f39083"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
