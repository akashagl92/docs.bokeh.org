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
      };var element = document.getElementById("7b6bf49b-0b46-4840-bca3-fc4d44f0789e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7b6bf49b-0b46-4840-bca3-fc4d44f0789e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"86740d43-37b1-4207-81a3-fcd24d932638":{"roots":{"references":[{"attributes":{"formatter":{"id":"e0c7dc7d-24a6-4e4d-a2d1-f914fa2a9287","type":"BasicTickFormatter"},"plot":{"id":"05baf1f2-d1d0-4e64-b587-790ddfc819bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"175a42cc-a4ef-42fa-bfe1-16f8e14be9d4","type":"BasicTicker"}},"id":"6b2214a9-bb11-4961-b809-8eedf0c0bab7","type":"LinearAxis"},{"attributes":{"callback":null},"id":"16d58bbd-1ced-45d4-a48b-84dc8deaa88d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c72dbfa1-dd57-4604-acff-1bfe4b304b13","type":"BasicTickFormatter"},"plot":{"id":"05baf1f2-d1d0-4e64-b587-790ddfc819bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"20e7c742-87b9-4046-9450-2559cc297666","type":"BasicTicker"}},"id":"7e69e9e6-3dc5-4561-bba6-ea6ff010c08a","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"6cfc238e-16af-43bf-be38-4c1fa85ca452","type":"Circle"},{"attributes":{"callback":null},"id":"e7287684-0f43-48e2-9b89-23fc64f08428","type":"DataRange1d"},{"attributes":{},"id":"884e8c4b-904d-4200-99e2-bed3a0736bdb","type":"WheelZoomTool"},{"attributes":{},"id":"e0c7dc7d-24a6-4e4d-a2d1-f914fa2a9287","type":"BasicTickFormatter"},{"attributes":{},"id":"c72dbfa1-dd57-4604-acff-1bfe4b304b13","type":"BasicTickFormatter"},{"attributes":{},"id":"175a42cc-a4ef-42fa-bfe1-16f8e14be9d4","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"114cb89d-1d06-4092-bb68-46c432cec94a","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"5cbf3e49-15b8-4cfd-ba8a-7704c7d339cc","type":"Title"},{"attributes":{},"id":"f93342b3-74e7-4f4b-be50-fb16fdfc7a23","type":"SaveTool"},{"attributes":{},"id":"e34a9683-1c14-4072-9646-eace01d14b79","type":"HelpTool"},{"attributes":{},"id":"02778d01-a39f-4564-8e12-2cad76fa6c9a","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"05baf1f2-d1d0-4e64-b587-790ddfc819bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"175a42cc-a4ef-42fa-bfe1-16f8e14be9d4","type":"BasicTicker"}},"id":"987c9c62-0a6e-4896-94eb-444fc04e1c7e","type":"Grid"},{"attributes":{"data_source":{"id":"114cb89d-1d06-4092-bb68-46c432cec94a","type":"ColumnDataSource"},"glyph":{"id":"6cfc238e-16af-43bf-be38-4c1fa85ca452","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cfa46864-4091-4295-aca8-1d977ff0f8b4","type":"Circle"},"selection_glyph":null,"view":{"id":"e24e420e-b66a-45a4-9dd4-b4323e667b88","type":"CDSView"}},"id":"bdd941d5-f8b4-495b-9c07-3a4f9b73f072","type":"GlyphRenderer"},{"attributes":{},"id":"20e7c742-87b9-4046-9450-2559cc297666","type":"BasicTicker"},{"attributes":{},"id":"dfe437ff-9258-4068-8162-494e12655b2b","type":"LinearScale"},{"attributes":{},"id":"c3d58c4a-ab05-4965-85c6-129904d487ef","type":"PanTool"},{"attributes":{"source":{"id":"114cb89d-1d06-4092-bb68-46c432cec94a","type":"ColumnDataSource"}},"id":"e24e420e-b66a-45a4-9dd4-b4323e667b88","type":"CDSView"},{"attributes":{"below":[{"id":"7e69e9e6-3dc5-4561-bba6-ea6ff010c08a","type":"LinearAxis"}],"left":[{"id":"6b2214a9-bb11-4961-b809-8eedf0c0bab7","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7e69e9e6-3dc5-4561-bba6-ea6ff010c08a","type":"LinearAxis"},{"id":"3279e2ce-0440-43e2-8ddd-9de0078dba59","type":"Grid"},{"id":"6b2214a9-bb11-4961-b809-8eedf0c0bab7","type":"LinearAxis"},{"id":"987c9c62-0a6e-4896-94eb-444fc04e1c7e","type":"Grid"},{"id":"69ad36de-47b4-4809-85b7-2994a357afe8","type":"BoxAnnotation"},{"id":"bdd941d5-f8b4-495b-9c07-3a4f9b73f072","type":"GlyphRenderer"}],"title":{"id":"5cbf3e49-15b8-4cfd-ba8a-7704c7d339cc","type":"Title"},"toolbar":{"id":"05655971-6827-44f2-93cd-2a41c315960c","type":"Toolbar"},"x_range":{"id":"e7287684-0f43-48e2-9b89-23fc64f08428","type":"DataRange1d"},"x_scale":{"id":"02778d01-a39f-4564-8e12-2cad76fa6c9a","type":"LinearScale"},"y_range":{"id":"16d58bbd-1ced-45d4-a48b-84dc8deaa88d","type":"DataRange1d"},"y_scale":{"id":"dfe437ff-9258-4068-8162-494e12655b2b","type":"LinearScale"}},"id":"05baf1f2-d1d0-4e64-b587-790ddfc819bf","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"05baf1f2-d1d0-4e64-b587-790ddfc819bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"20e7c742-87b9-4046-9450-2559cc297666","type":"BasicTicker"}},"id":"3279e2ce-0440-43e2-8ddd-9de0078dba59","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cfa46864-4091-4295-aca8-1d977ff0f8b4","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c3d58c4a-ab05-4965-85c6-129904d487ef","type":"PanTool"},{"id":"884e8c4b-904d-4200-99e2-bed3a0736bdb","type":"WheelZoomTool"},{"id":"c139bfaf-acac-4eb7-a1ca-2e874987c64c","type":"BoxZoomTool"},{"id":"f93342b3-74e7-4f4b-be50-fb16fdfc7a23","type":"SaveTool"},{"id":"9aa9ffab-5c34-4f3c-8dd6-d59af3c56ee1","type":"ResetTool"},{"id":"e34a9683-1c14-4072-9646-eace01d14b79","type":"HelpTool"}]},"id":"05655971-6827-44f2-93cd-2a41c315960c","type":"Toolbar"},{"attributes":{},"id":"9aa9ffab-5c34-4f3c-8dd6-d59af3c56ee1","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69ad36de-47b4-4809-85b7-2994a357afe8","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"69ad36de-47b4-4809-85b7-2994a357afe8","type":"BoxAnnotation"}},"id":"c139bfaf-acac-4eb7-a1ca-2e874987c64c","type":"BoxZoomTool"}],"root_ids":["05baf1f2-d1d0-4e64-b587-790ddfc819bf"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"86740d43-37b1-4207-81a3-fcd24d932638","elementid":"7b6bf49b-0b46-4840-bca3-fc4d44f0789e","modelid":"05baf1f2-d1d0-4e64-b587-790ddfc819bf"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
