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
      };var element = document.getElementById("53078eab-6fa6-43d7-bf77-4ca816971904");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '53078eab-6fa6-43d7-bf77-4ca816971904' but no matching script tag was found. ")
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
                    var docs_json = {"2d6d7599-5169-4ec9-ad92-8ef8ff8789ae":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"f31aee66-64e9-4065-a5f0-92b747b08e23","type":"ColumnDataSource"},{"attributes":{},"id":"b28dba00-ea94-4b89-9713-39e75a7f533a","type":"BasicTicker"},{"attributes":{"source":{"id":"f31aee66-64e9-4065-a5f0-92b747b08e23","type":"ColumnDataSource"}},"id":"7362c065-e46a-4d7a-8c77-964a8e66190d","type":"CDSView"},{"attributes":{"formatter":{"id":"f1621484-d29d-460f-bb4e-346a3e1f3f70","type":"BasicTickFormatter"},"plot":{"id":"fb930913-0c69-4b1d-b81d-1f3a1ced3368","subtype":"Figure","type":"Plot"},"ticker":{"id":"d02e60e1-61cc-46d5-81a7-dcb8d9433904","type":"BasicTicker"}},"id":"83cb2412-440b-4b73-bc96-b773aeaf13ea","type":"LinearAxis"},{"attributes":{},"id":"d02e60e1-61cc-46d5-81a7-dcb8d9433904","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"fb930913-0c69-4b1d-b81d-1f3a1ced3368","subtype":"Figure","type":"Plot"},"ticker":{"id":"d02e60e1-61cc-46d5-81a7-dcb8d9433904","type":"BasicTicker"}},"id":"a5cd2d66-f7da-4516-9433-9cc1de90d20a","type":"Grid"},{"attributes":{},"id":"a9e5e607-03b9-4c7f-bfa2-874e4460f746","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2a22bf52-53ac-4077-866c-33d0061d8e6b","type":"BoxAnnotation"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"93b952ad-1ee6-46ae-96c4-68b22757dea0","type":"Rect"},{"attributes":{},"id":"aabcf306-cd89-4490-badc-4bc7dd6ad753","type":"PanTool"},{"attributes":{"below":[{"id":"709efdc6-9700-4cc3-b101-1bf52441a2d9","type":"LinearAxis"}],"left":[{"id":"83cb2412-440b-4b73-bc96-b773aeaf13ea","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"709efdc6-9700-4cc3-b101-1bf52441a2d9","type":"LinearAxis"},{"id":"f179f3fc-44ab-49c8-b7c9-4c973f3288d8","type":"Grid"},{"id":"83cb2412-440b-4b73-bc96-b773aeaf13ea","type":"LinearAxis"},{"id":"a5cd2d66-f7da-4516-9433-9cc1de90d20a","type":"Grid"},{"id":"2a22bf52-53ac-4077-866c-33d0061d8e6b","type":"BoxAnnotation"},{"id":"a4a98b49-9a03-4072-8c6c-6640b1e61621","type":"GlyphRenderer"}],"title":{"id":"325bc2df-5c4e-4dc1-a0e5-6dca91ece8b3","type":"Title"},"toolbar":{"id":"c070bdc1-16c9-4ae0-a004-37729a7bb605","type":"Toolbar"},"x_range":{"id":"2a1b8b2f-bec1-4113-983d-9df1965ff60b","type":"DataRange1d"},"x_scale":{"id":"29256ae5-f55d-4278-aa87-b2ba9afe83d8","type":"LinearScale"},"y_range":{"id":"778c47b2-85cf-43e7-938a-d4bd0034857c","type":"DataRange1d"},"y_scale":{"id":"9465e31a-74b0-4577-ae59-d381c01edfec","type":"LinearScale"}},"id":"fb930913-0c69-4b1d-b81d-1f3a1ced3368","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aabcf306-cd89-4490-badc-4bc7dd6ad753","type":"PanTool"},{"id":"621ea9e0-0b99-4f9f-9805-ba920a568f3b","type":"WheelZoomTool"},{"id":"b42c6d82-15a8-4857-a0da-41fcae3c0d00","type":"BoxZoomTool"},{"id":"12af1996-e536-4977-bb4f-0491a8c0e98d","type":"SaveTool"},{"id":"7dd85577-efd0-4516-8556-db3918257cba","type":"ResetTool"},{"id":"2380461f-b2ef-415e-b3f2-2bda64498828","type":"HelpTool"}]},"id":"c070bdc1-16c9-4ae0-a004-37729a7bb605","type":"Toolbar"},{"attributes":{"data_source":{"id":"f31aee66-64e9-4065-a5f0-92b747b08e23","type":"ColumnDataSource"},"glyph":{"id":"53260f30-ced2-4d02-91b2-5e8a9110f5c5","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93b952ad-1ee6-46ae-96c4-68b22757dea0","type":"Rect"},"selection_glyph":null,"view":{"id":"7362c065-e46a-4d7a-8c77-964a8e66190d","type":"CDSView"}},"id":"a4a98b49-9a03-4072-8c6c-6640b1e61621","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2a1b8b2f-bec1-4113-983d-9df1965ff60b","type":"DataRange1d"},{"attributes":{},"id":"621ea9e0-0b99-4f9f-9805-ba920a568f3b","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"53260f30-ced2-4d02-91b2-5e8a9110f5c5","type":"Rect"},{"attributes":{"overlay":{"id":"2a22bf52-53ac-4077-866c-33d0061d8e6b","type":"BoxAnnotation"}},"id":"b42c6d82-15a8-4857-a0da-41fcae3c0d00","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"778c47b2-85cf-43e7-938a-d4bd0034857c","type":"DataRange1d"},{"attributes":{},"id":"12af1996-e536-4977-bb4f-0491a8c0e98d","type":"SaveTool"},{"attributes":{},"id":"29256ae5-f55d-4278-aa87-b2ba9afe83d8","type":"LinearScale"},{"attributes":{},"id":"7dd85577-efd0-4516-8556-db3918257cba","type":"ResetTool"},{"attributes":{"plot":{"id":"fb930913-0c69-4b1d-b81d-1f3a1ced3368","subtype":"Figure","type":"Plot"},"ticker":{"id":"b28dba00-ea94-4b89-9713-39e75a7f533a","type":"BasicTicker"}},"id":"f179f3fc-44ab-49c8-b7c9-4c973f3288d8","type":"Grid"},{"attributes":{},"id":"2380461f-b2ef-415e-b3f2-2bda64498828","type":"HelpTool"},{"attributes":{},"id":"9465e31a-74b0-4577-ae59-d381c01edfec","type":"LinearScale"},{"attributes":{},"id":"f1621484-d29d-460f-bb4e-346a3e1f3f70","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a9e5e607-03b9-4c7f-bfa2-874e4460f746","type":"BasicTickFormatter"},"plot":{"id":"fb930913-0c69-4b1d-b81d-1f3a1ced3368","subtype":"Figure","type":"Plot"},"ticker":{"id":"b28dba00-ea94-4b89-9713-39e75a7f533a","type":"BasicTicker"}},"id":"709efdc6-9700-4cc3-b101-1bf52441a2d9","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"325bc2df-5c4e-4dc1-a0e5-6dca91ece8b3","type":"Title"}],"root_ids":["fb930913-0c69-4b1d-b81d-1f3a1ced3368"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2d6d7599-5169-4ec9-ad92-8ef8ff8789ae","elementid":"53078eab-6fa6-43d7-bf77-4ca816971904","modelid":"fb930913-0c69-4b1d-b81d-1f3a1ced3368"}];
                
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
