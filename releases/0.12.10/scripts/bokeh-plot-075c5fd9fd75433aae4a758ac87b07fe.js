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
      };var element = document.getElementById("bac7174d-165d-4460-a90e-f2f38cbb9ca3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bac7174d-165d-4460-a90e-f2f38cbb9ca3' but no matching script tag was found. ")
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
                    var docs_json = {"92a4547e-ddff-4cb4-895b-df0bbe7788b7":{"roots":{"references":[{"attributes":{"overlay":{"id":"6e505c47-cd3b-46a7-9057-7268d844a7c2","type":"BoxAnnotation"}},"id":"4cfa7c59-5270-4af3-a908-a36978d48c73","type":"BoxZoomTool"},{"attributes":{},"id":"253ec2e1-e38e-4c15-b292-5c985a4a4cf6","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"1ca3621f-c1d9-4673-ad97-a163c65be2c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9470f88-8806-4288-baa6-8c5ca59f05c1","type":"BasicTicker"}},"id":"746580f4-4bf6-4e42-ab61-c296d82492c7","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"8af21693-eb72-4117-a18f-185d9d501e8a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8af21693-eb72-4117-a18f-185d9d501e8a","type":"ColumnDataSource"}},"id":"a82d2308-23df-42ff-99e2-880daaea853e","type":"CDSView"},{"attributes":{},"id":"4c16a32f-e7d8-48b4-ba76-57e1589b3646","type":"LinearScale"},{"attributes":{},"id":"24c6255d-aa0c-4fa0-8eba-1629c871a447","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"40faff36-e8ba-4314-b603-534752b9710d","type":"DataRange1d"},{"attributes":{},"id":"ed7dafd9-47e4-48ca-ba3a-97ef16ca80ad","type":"HelpTool"},{"attributes":{},"id":"e2cd92e6-0037-467b-8ea3-c4f91066eb25","type":"WheelZoomTool"},{"attributes":{},"id":"0bb1b9f1-fe55-4df7-beb0-ece027d56cda","type":"SaveTool"},{"attributes":{},"id":"26f268b2-5510-4b61-ae23-6482a2b03167","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"24c6255d-aa0c-4fa0-8eba-1629c871a447","type":"BasicTickFormatter"},"plot":{"id":"1ca3621f-c1d9-4673-ad97-a163c65be2c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd17b875-daea-408c-96a1-ea31d86a7300","type":"BasicTicker"}},"id":"1e1fe254-cd56-4b47-b127-a4efd05880ff","type":"LinearAxis"},{"attributes":{},"id":"8c0b10b5-e11c-4663-bb3b-fc89b6b54cdc","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e505c47-cd3b-46a7-9057-7268d844a7c2","type":"BoxAnnotation"},{"attributes":{},"id":"4f9d5928-0e29-4842-b99f-1554d81e2d06","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ddb5270-39bb-4e69-b049-c15574588a49","type":"Circle"},{"attributes":{},"id":"a9470f88-8806-4288-baa6-8c5ca59f05c1","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f685cca8-c513-4799-96ef-ea093ce16739","type":"Circle"},{"attributes":{"below":[{"id":"1e1fe254-cd56-4b47-b127-a4efd05880ff","type":"LinearAxis"}],"left":[{"id":"e1d42022-d10b-4069-9e39-abdd7d2c084d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1e1fe254-cd56-4b47-b127-a4efd05880ff","type":"LinearAxis"},{"id":"d230b91c-aed9-4c19-a406-04125f624bcb","type":"Grid"},{"id":"e1d42022-d10b-4069-9e39-abdd7d2c084d","type":"LinearAxis"},{"id":"746580f4-4bf6-4e42-ab61-c296d82492c7","type":"Grid"},{"id":"6e505c47-cd3b-46a7-9057-7268d844a7c2","type":"BoxAnnotation"},{"id":"7c95bdce-2b02-444a-a296-206463e0177b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"45ae3a95-8a5b-4cb7-88ab-8dcb2d72e7ad","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"28f31fd7-9c16-4df7-9295-ef5672d0b545","type":"DataRange1d"},"x_scale":{"id":"4c16a32f-e7d8-48b4-ba76-57e1589b3646","type":"LinearScale"},"y_range":{"id":"40faff36-e8ba-4314-b603-534752b9710d","type":"DataRange1d"},"y_scale":{"id":"8c0b10b5-e11c-4663-bb3b-fc89b6b54cdc","type":"LinearScale"}},"id":"1ca3621f-c1d9-4673-ad97-a163c65be2c7","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"8af21693-eb72-4117-a18f-185d9d501e8a","type":"ColumnDataSource"},"glyph":{"id":"1ddb5270-39bb-4e69-b049-c15574588a49","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f685cca8-c513-4799-96ef-ea093ce16739","type":"Circle"},"selection_glyph":null,"view":{"id":"a82d2308-23df-42ff-99e2-880daaea853e","type":"CDSView"}},"id":"7c95bdce-2b02-444a-a296-206463e0177b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1ca3621f-c1d9-4673-ad97-a163c65be2c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd17b875-daea-408c-96a1-ea31d86a7300","type":"BasicTicker"}},"id":"d230b91c-aed9-4c19-a406-04125f624bcb","type":"Grid"},{"attributes":{"formatter":{"id":"26f268b2-5510-4b61-ae23-6482a2b03167","type":"BasicTickFormatter"},"plot":{"id":"1ca3621f-c1d9-4673-ad97-a163c65be2c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9470f88-8806-4288-baa6-8c5ca59f05c1","type":"BasicTicker"}},"id":"e1d42022-d10b-4069-9e39-abdd7d2c084d","type":"LinearAxis"},{"attributes":{},"id":"cd17b875-daea-408c-96a1-ea31d86a7300","type":"BasicTicker"},{"attributes":{"callback":null},"id":"28f31fd7-9c16-4df7-9295-ef5672d0b545","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"253ec2e1-e38e-4c15-b292-5c985a4a4cf6","type":"PanTool"},{"id":"e2cd92e6-0037-467b-8ea3-c4f91066eb25","type":"WheelZoomTool"},{"id":"4cfa7c59-5270-4af3-a908-a36978d48c73","type":"BoxZoomTool"},{"id":"0bb1b9f1-fe55-4df7-beb0-ece027d56cda","type":"SaveTool"},{"id":"4f9d5928-0e29-4842-b99f-1554d81e2d06","type":"ResetTool"},{"id":"ed7dafd9-47e4-48ca-ba3a-97ef16ca80ad","type":"HelpTool"}]},"id":"45ae3a95-8a5b-4cb7-88ab-8dcb2d72e7ad","type":"Toolbar"}],"root_ids":["1ca3621f-c1d9-4673-ad97-a163c65be2c7"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"92a4547e-ddff-4cb4-895b-df0bbe7788b7","elementid":"bac7174d-165d-4460-a90e-f2f38cbb9ca3","modelid":"1ca3621f-c1d9-4673-ad97-a163c65be2c7"}];
                
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
