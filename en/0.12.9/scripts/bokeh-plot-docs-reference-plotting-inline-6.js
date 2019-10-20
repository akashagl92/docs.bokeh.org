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
      };var element = document.getElementById("e4dc6e75-49d0-4c3f-9a2b-0b291deee7de");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e4dc6e75-49d0-4c3f-9a2b-0b291deee7de' but no matching script tag was found. ")
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
                    var docs_json = {"e2f97f01-63e3-43a2-8f23-6206192a38b1":{"roots":{"references":[{"attributes":{},"id":"ed4e5bde-bd57-40f2-a0a8-3dfa00a4a53e","type":"PanTool"},{"attributes":{},"id":"c1954dde-6731-400f-a707-485b5f711658","type":"BasicTicker"},{"attributes":{},"id":"af4b3b3a-3790-42e1-924e-a26aa3c373e6","type":"LinearScale"},{"attributes":{"callback":null},"id":"8114429d-67ee-4373-a830-ccb3f9c68d27","type":"DataRange1d"},{"attributes":{"source":{"id":"da551946-dff0-49f3-a43b-ffa10796ebb6","type":"ColumnDataSource"}},"id":"54af52b0-d371-4cb4-9332-1cdefee13c7c","type":"CDSView"},{"attributes":{},"id":"e2a97d9e-b89d-4e1a-8731-13a8815ebf60","type":"ResetTool"},{"attributes":{"data_source":{"id":"da551946-dff0-49f3-a43b-ffa10796ebb6","type":"ColumnDataSource"},"glyph":{"id":"9844e8c2-4fb9-4477-9605-d46fbba924bc","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb334725-9819-497e-b964-bbd03c3bf104","type":"Diamond"},"selection_glyph":null,"view":{"id":"54af52b0-d371-4cb4-9332-1cdefee13c7c","type":"CDSView"}},"id":"d5165727-8438-4069-b059-d5c8be285ffc","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6ff7cdb1-6ce4-46bc-87f1-3d09e341d0eb","type":"BasicTickFormatter"},"plot":{"id":"251d9ef7-4c8e-4b12-bce3-a014a9e96cbd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1954dde-6731-400f-a707-485b5f711658","type":"BasicTicker"}},"id":"3d136b92-b28b-49e1-b9af-c491a25fca51","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"459236ce-a5f2-4192-9878-cd272d9f09ab","type":"BoxAnnotation"},{"attributes":{},"id":"3253065f-3f77-48a2-88fd-87102af93e5f","type":"SaveTool"},{"attributes":{},"id":"2c9cb139-6f95-4366-befc-8d4599adfb64","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"251d9ef7-4c8e-4b12-bce3-a014a9e96cbd","subtype":"Figure","type":"Plot"},"ticker":{"id":"a84be961-6251-4017-9061-5a6aa7939e16","type":"BasicTicker"}},"id":"45535c8b-6ff5-4901-8cd6-88fbe90c36f8","type":"Grid"},{"attributes":{"formatter":{"id":"2c9cb139-6f95-4366-befc-8d4599adfb64","type":"BasicTickFormatter"},"plot":{"id":"251d9ef7-4c8e-4b12-bce3-a014a9e96cbd","subtype":"Figure","type":"Plot"},"ticker":{"id":"a84be961-6251-4017-9061-5a6aa7939e16","type":"BasicTicker"}},"id":"37d68976-44b8-4d36-8ee8-ecb78523c367","type":"LinearAxis"},{"attributes":{"callback":null},"id":"40929872-bb01-431f-ad60-1ef101c9e4fc","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"da551946-dff0-49f3-a43b-ffa10796ebb6","type":"ColumnDataSource"},{"attributes":{},"id":"087fb56c-dc51-4c3b-bebc-efde34611139","type":"HelpTool"},{"attributes":{},"id":"a84be961-6251-4017-9061-5a6aa7939e16","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed4e5bde-bd57-40f2-a0a8-3dfa00a4a53e","type":"PanTool"},{"id":"50c06bf7-6fd3-409a-a221-f09e7850f07b","type":"WheelZoomTool"},{"id":"a66d250d-c953-47be-b1ab-67e535b394f2","type":"BoxZoomTool"},{"id":"3253065f-3f77-48a2-88fd-87102af93e5f","type":"SaveTool"},{"id":"e2a97d9e-b89d-4e1a-8731-13a8815ebf60","type":"ResetTool"},{"id":"087fb56c-dc51-4c3b-bebc-efde34611139","type":"HelpTool"}]},"id":"8abcd8d0-0946-49d0-8e26-22ecd8397a28","type":"Toolbar"},{"attributes":{},"id":"f234173b-ba7c-4bbc-affd-c7145d9ddd5d","type":"LinearScale"},{"attributes":{"overlay":{"id":"459236ce-a5f2-4192-9878-cd272d9f09ab","type":"BoxAnnotation"}},"id":"a66d250d-c953-47be-b1ab-67e535b394f2","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9844e8c2-4fb9-4477-9605-d46fbba924bc","type":"Diamond"},{"attributes":{"plot":null,"text":""},"id":"be9a8c92-2638-4ae3-988b-6f7b201e9383","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb334725-9819-497e-b964-bbd03c3bf104","type":"Diamond"},{"attributes":{"below":[{"id":"37d68976-44b8-4d36-8ee8-ecb78523c367","type":"LinearAxis"}],"left":[{"id":"3d136b92-b28b-49e1-b9af-c491a25fca51","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"37d68976-44b8-4d36-8ee8-ecb78523c367","type":"LinearAxis"},{"id":"45535c8b-6ff5-4901-8cd6-88fbe90c36f8","type":"Grid"},{"id":"3d136b92-b28b-49e1-b9af-c491a25fca51","type":"LinearAxis"},{"id":"f4342647-92c3-4353-9fd6-a447afd114d5","type":"Grid"},{"id":"459236ce-a5f2-4192-9878-cd272d9f09ab","type":"BoxAnnotation"},{"id":"d5165727-8438-4069-b059-d5c8be285ffc","type":"GlyphRenderer"}],"title":{"id":"be9a8c92-2638-4ae3-988b-6f7b201e9383","type":"Title"},"toolbar":{"id":"8abcd8d0-0946-49d0-8e26-22ecd8397a28","type":"Toolbar"},"x_range":{"id":"40929872-bb01-431f-ad60-1ef101c9e4fc","type":"DataRange1d"},"x_scale":{"id":"af4b3b3a-3790-42e1-924e-a26aa3c373e6","type":"LinearScale"},"y_range":{"id":"8114429d-67ee-4373-a830-ccb3f9c68d27","type":"DataRange1d"},"y_scale":{"id":"f234173b-ba7c-4bbc-affd-c7145d9ddd5d","type":"LinearScale"}},"id":"251d9ef7-4c8e-4b12-bce3-a014a9e96cbd","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"251d9ef7-4c8e-4b12-bce3-a014a9e96cbd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1954dde-6731-400f-a707-485b5f711658","type":"BasicTicker"}},"id":"f4342647-92c3-4353-9fd6-a447afd114d5","type":"Grid"},{"attributes":{},"id":"50c06bf7-6fd3-409a-a221-f09e7850f07b","type":"WheelZoomTool"},{"attributes":{},"id":"6ff7cdb1-6ce4-46bc-87f1-3d09e341d0eb","type":"BasicTickFormatter"}],"root_ids":["251d9ef7-4c8e-4b12-bce3-a014a9e96cbd"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e2f97f01-63e3-43a2-8f23-6206192a38b1","elementid":"e4dc6e75-49d0-4c3f-9a2b-0b291deee7de","modelid":"251d9ef7-4c8e-4b12-bce3-a014a9e96cbd"}];
                
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
