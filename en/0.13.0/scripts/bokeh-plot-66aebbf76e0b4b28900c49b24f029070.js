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
      };var element = document.getElementById("1d0b2ec9-0d25-4860-a509-f72d9f322921");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d0b2ec9-0d25-4860-a509-f72d9f322921' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"5e0ea442-ab6f-4e6d-b919-0797d2cd67a8":{"roots":{"references":[{"attributes":{},"id":"9242aed2-b056-4179-a0a5-cfc13fdca070","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1e334172-f742-4580-93b4-065b1a437d13","type":"LinearAxis"}],"left":[{"id":"7d642e98-d229-4c58-b203-b7090693c479","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1e334172-f742-4580-93b4-065b1a437d13","type":"LinearAxis"},{"id":"c6887e82-e394-498a-8258-c5c0accf86f3","type":"Grid"},{"id":"7d642e98-d229-4c58-b203-b7090693c479","type":"LinearAxis"},{"id":"b0ab1e26-4d78-41c1-9183-13fcea15d60e","type":"Grid"},{"id":"6b886fb3-a778-45ac-8042-5a2ed011d59b","type":"BoxAnnotation"},{"id":"4ddc447d-269a-47eb-b20c-086aed757287","type":"GlyphRenderer"},{"id":"fe0a5861-fcaf-412c-9a14-e3bc0dc0c0f3","type":"GlyphRenderer"}],"title":{"id":"346c2379-6923-4add-924c-f3052e9860b5","type":"Title"},"toolbar":{"id":"463e0941-19eb-4219-a195-6239dab0c906","type":"Toolbar"},"x_range":{"id":"90e2fb31-a633-46b0-b948-c60dcd5890b4","type":"Range1d"},"x_scale":{"id":"526601d2-00d0-494f-b9b7-87b0bd7da81e","type":"LinearScale"},"y_range":{"id":"2db9b0d7-1ec4-4452-a1e1-63334d70d35a","type":"Range1d"},"y_scale":{"id":"c0e93467-fa5c-46d0-917e-429697a37927","type":"LinearScale"}},"id":"108b1476-865a-4684-915d-75e8fd5bb625","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"879abbe4-8bfc-4990-a897-18c9a05d2f15","type":"PanTool"},{"attributes":{},"id":"80be6edc-3d95-4db3-ac65-5d7f9cc29398","type":"WheelZoomTool"},{"attributes":{},"id":"c0e93467-fa5c-46d0-917e-429697a37927","type":"LinearScale"},{"attributes":{"renderers":[{"id":"fe0a5861-fcaf-412c-9a14-e3bc0dc0c0f3","type":"GlyphRenderer"}]},"id":"4677a906-0285-4bef-8e06-e08501546430","type":"PolyDrawTool"},{"attributes":{"plot":{"id":"108b1476-865a-4684-915d-75e8fd5bb625","subtype":"Figure","type":"Plot"},"ticker":{"id":"43f87800-96b7-4d25-bb70-574b49e53159","type":"BasicTicker"}},"id":"c6887e82-e394-498a-8258-c5c0accf86f3","type":"Grid"},{"attributes":{"formatter":{"id":"9403c70d-fea9-4eeb-8324-67d83513ed3c","type":"BasicTickFormatter"},"plot":{"id":"108b1476-865a-4684-915d-75e8fd5bb625","subtype":"Figure","type":"Plot"},"ticker":{"id":"43f87800-96b7-4d25-bb70-574b49e53159","type":"BasicTicker"}},"id":"1e334172-f742-4580-93b4-065b1a437d13","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"f737c40e-4981-4560-9f95-e518c70803ed","type":"Patches"},{"attributes":{"source":{"id":"cdceee2e-2022-4dc6-bc50-7327caef5e44","type":"ColumnDataSource"}},"id":"aa14b179-6726-4e5e-a05f-9ddf7f9654cf","type":"CDSView"},{"attributes":{},"id":"526601d2-00d0-494f-b9b7-87b0bd7da81e","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"108b1476-865a-4684-915d-75e8fd5bb625","subtype":"Figure","type":"Plot"},"ticker":{"id":"171e4930-7881-4de3-8bc8-93d9e86174ea","type":"BasicTicker"}},"id":"b0ab1e26-4d78-41c1-9183-13fcea15d60e","type":"Grid"},{"attributes":{},"id":"43f87800-96b7-4d25-bb70-574b49e53159","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"2db9b0d7-1ec4-4452-a1e1-63334d70d35a","type":"Range1d"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"6d72ba55-ed5c-4341-b95b-8f5a489a6428","type":"Selection"},"selection_policy":{"id":"9242aed2-b056-4179-a0a5-cfc13fdca070","type":"UnionRenderers"}},"id":"cb0706d5-bd11-49f2-8d52-c25cf417d271","type":"ColumnDataSource"},{"attributes":{},"id":"9ea454d2-8061-49a6-95a0-60036596866d","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"cdceee2e-2022-4dc6-bc50-7327caef5e44","type":"ColumnDataSource"},"glyph":{"id":"08408c52-09f8-4d09-b672-6b725cd7aef5","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f737c40e-4981-4560-9f95-e518c70803ed","type":"Patches"},"selection_glyph":null,"view":{"id":"aa14b179-6726-4e5e-a05f-9ddf7f9654cf","type":"CDSView"}},"id":"4ddc447d-269a-47eb-b20c-086aed757287","type":"GlyphRenderer"},{"attributes":{},"id":"6d72ba55-ed5c-4341-b95b-8f5a489a6428","type":"Selection"},{"attributes":{},"id":"9f1607da-9112-45cd-92d6-523c3e993f24","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6b886fb3-a778-45ac-8042-5a2ed011d59b","type":"BoxAnnotation"},{"attributes":{},"id":"4d6bb82f-ed00-458c-9b20-d48f15fc06d2","type":"BasicTickFormatter"},{"attributes":{"active_drag":{"id":"cafb5e6c-ef7e-47e8-84f0-c9ad8087b6e1","type":"PolyDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"879abbe4-8bfc-4990-a897-18c9a05d2f15","type":"PanTool"},{"id":"80be6edc-3d95-4db3-ac65-5d7f9cc29398","type":"WheelZoomTool"},{"id":"5844c8db-7e15-4253-ad42-7ae08115a854","type":"BoxZoomTool"},{"id":"794da56c-ea9f-4d78-9f20-51e38e7469f1","type":"SaveTool"},{"id":"0aec70dd-6e24-41d7-8027-327475554e9d","type":"ResetTool"},{"id":"1644fb20-a865-460e-89bb-822f2c427f0a","type":"HelpTool"},{"id":"cafb5e6c-ef7e-47e8-84f0-c9ad8087b6e1","type":"PolyDrawTool"},{"id":"4677a906-0285-4bef-8e06-e08501546430","type":"PolyDrawTool"}]},"id":"463e0941-19eb-4219-a195-6239dab0c906","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"f76822c4-58ba-4069-a84b-934400f8f447","type":"MultiLine"},{"attributes":{"callback":null,"end":10},"id":"90e2fb31-a633-46b0-b948-c60dcd5890b4","type":"Range1d"},{"attributes":{"formatter":{"id":"4d6bb82f-ed00-458c-9b20-d48f15fc06d2","type":"BasicTickFormatter"},"plot":{"id":"108b1476-865a-4684-915d-75e8fd5bb625","subtype":"Figure","type":"Plot"},"ticker":{"id":"171e4930-7881-4de3-8bc8-93d9e86174ea","type":"BasicTicker"}},"id":"7d642e98-d229-4c58-b203-b7090693c479","type":"LinearAxis"},{"attributes":{},"id":"171e4930-7881-4de3-8bc8-93d9e86174ea","type":"BasicTicker"},{"attributes":{},"id":"0aec70dd-6e24-41d7-8027-327475554e9d","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"e5a64d4b-c0a8-401c-8d79-c4c87e9810e6","type":"MultiLine"},{"attributes":{"data_source":{"id":"cb0706d5-bd11-49f2-8d52-c25cf417d271","type":"ColumnDataSource"},"glyph":{"id":"f76822c4-58ba-4069-a84b-934400f8f447","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e5a64d4b-c0a8-401c-8d79-c4c87e9810e6","type":"MultiLine"},"selection_glyph":null,"view":{"id":"4205fced-8a40-4d14-8b18-f417541dbfe1","type":"CDSView"}},"id":"fe0a5861-fcaf-412c-9a14-e3bc0dc0c0f3","type":"GlyphRenderer"},{"attributes":{},"id":"794da56c-ea9f-4d78-9f20-51e38e7469f1","type":"SaveTool"},{"attributes":{},"id":"1644fb20-a865-460e-89bb-822f2c427f0a","type":"HelpTool"},{"attributes":{"renderers":[{"id":"4ddc447d-269a-47eb-b20c-086aed757287","type":"GlyphRenderer"}]},"id":"cafb5e6c-ef7e-47e8-84f0-c9ad8087b6e1","type":"PolyDrawTool"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.4},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"08408c52-09f8-4d09-b672-6b725cd7aef5","type":"Patches"},{"attributes":{"overlay":{"id":"6b886fb3-a778-45ac-8042-5a2ed011d59b","type":"BoxAnnotation"}},"id":"5844c8db-7e15-4253-ad42-7ae08115a854","type":"BoxZoomTool"},{"attributes":{},"id":"9403c70d-fea9-4eeb-8324-67d83513ed3c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"xs":[[2,5,8]],"ys":[[2,8,2]]},"selected":{"id":"9f1607da-9112-45cd-92d6-523c3e993f24","type":"Selection"},"selection_policy":{"id":"9ea454d2-8061-49a6-95a0-60036596866d","type":"UnionRenderers"}},"id":"cdceee2e-2022-4dc6-bc50-7327caef5e44","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Poly Draw Tool"},"id":"346c2379-6923-4add-924c-f3052e9860b5","type":"Title"},{"attributes":{"source":{"id":"cb0706d5-bd11-49f2-8d52-c25cf417d271","type":"ColumnDataSource"}},"id":"4205fced-8a40-4d14-8b18-f417541dbfe1","type":"CDSView"}],"root_ids":["108b1476-865a-4684-915d-75e8fd5bb625"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5e0ea442-ab6f-4e6d-b919-0797d2cd67a8","roots":{"108b1476-865a-4684-915d-75e8fd5bb625":"1d0b2ec9-0d25-4860-a509-f72d9f322921"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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