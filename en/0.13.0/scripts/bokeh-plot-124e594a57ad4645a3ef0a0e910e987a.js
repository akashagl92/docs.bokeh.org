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
      };var element = document.getElementById("11b09fb2-0e11-46e2-9adc-f3af65bbfcfc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '11b09fb2-0e11-46e2-9adc-f3af65bbfcfc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"08a747e2-9e61-42c1-90ba-ee6418f05e2b":{"roots":{"references":[{"attributes":{"data_source":{"id":"ee086635-d597-40ab-8a99-61a797a8dcb9","type":"ColumnDataSource"},"glyph":{"id":"87312d8a-0dff-49c4-a297-210c28e0868b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26a96a9a-0e3c-4cae-9547-911c27e85c03","type":"Circle"},"selection_glyph":null,"view":{"id":"01102461-edc2-4a8e-9188-0b4088994bfb","type":"CDSView"}},"id":"9b848d79-7516-4a97-921b-5afadc218847","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"87312d8a-0dff-49c4-a297-210c28e0868b","type":"Circle"},{"attributes":{},"id":"fb9d78f9-05a0-4b33-ab3b-e7c551f27973","type":"BasicTickFormatter"},{"attributes":{},"id":"61e7ce0f-4658-4e66-a50d-50027c773a3b","type":"PanTool"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"d77b7070-38c1-4ae5-9aa4-fa00c2aabd84","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"0259b002-d36d-47ac-aa1e-3da4f4cc9e82","subtype":"Figure","type":"Plot"},"ticker":{"id":"d655a68c-7e04-4c59-be53-ecd132f19ddb","type":"BasicTicker"}},"id":"169c7012-ea25-4cc5-972e-d635e3a87213","type":"LinearAxis"},{"attributes":{},"id":"b76bdcfc-a9fb-492e-995f-a27253fad338","type":"ResetTool"},{"attributes":{},"id":"d77b7070-38c1-4ae5-9aa4-fa00c2aabd84","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"61e7ce0f-4658-4e66-a50d-50027c773a3b","type":"PanTool"},{"id":"661282fc-1e8b-4dd0-9877-63c4fca323dd","type":"WheelZoomTool"},{"id":"b1f753c8-773a-4de4-9d6c-8ef7dbb84499","type":"BoxZoomTool"},{"id":"3f8dec80-3eb0-48ae-b21e-4aa2b412f859","type":"SaveTool"},{"id":"b76bdcfc-a9fb-492e-995f-a27253fad338","type":"ResetTool"},{"id":"9a2e5db2-05df-419b-a2ce-80bfbdbdef9c","type":"HelpTool"}]},"id":"6d33154a-788a-4cac-8aca-3a381ba37d40","type":"Toolbar"},{"attributes":{},"id":"d655a68c-7e04-4c59-be53-ecd132f19ddb","type":"BasicTicker"},{"attributes":{"overlay":{"id":"e30c1fce-8b4e-44b6-843b-85b7d0460abd","type":"BoxAnnotation"}},"id":"b1f753c8-773a-4de4-9d6c-8ef7dbb84499","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"0259b002-d36d-47ac-aa1e-3da4f4cc9e82","subtype":"Figure","type":"Plot"},"ticker":{"id":"d655a68c-7e04-4c59-be53-ecd132f19ddb","type":"BasicTicker"}},"id":"fbe89632-c185-444f-8921-5d0fdd9710fa","type":"Grid"},{"attributes":{},"id":"9a2e5db2-05df-419b-a2ce-80bfbdbdef9c","type":"HelpTool"},{"attributes":{},"id":"3f8dec80-3eb0-48ae-b21e-4aa2b412f859","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26a96a9a-0e3c-4cae-9547-911c27e85c03","type":"Circle"},{"attributes":{"callback":null},"id":"f9384da0-42f3-451d-b69d-8f6821594443","type":"DataRange1d"},{"attributes":{"callback":null},"id":"caefa6e1-aaaf-4bbd-981b-e632c826bbf6","type":"DataRange1d"},{"attributes":{},"id":"263b0054-667a-4500-bfb2-7fb904cf8f5e","type":"BasicTicker"},{"attributes":{"below":[{"id":"3259636b-e16c-44ae-8f09-f9185cdd4503","type":"LinearAxis"}],"left":[{"id":"169c7012-ea25-4cc5-972e-d635e3a87213","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3259636b-e16c-44ae-8f09-f9185cdd4503","type":"LinearAxis"},{"id":"68c9b26a-7dbf-475b-96ad-67caee918146","type":"Grid"},{"id":"169c7012-ea25-4cc5-972e-d635e3a87213","type":"LinearAxis"},{"id":"fbe89632-c185-444f-8921-5d0fdd9710fa","type":"Grid"},{"id":"e30c1fce-8b4e-44b6-843b-85b7d0460abd","type":"BoxAnnotation"},{"id":"9b848d79-7516-4a97-921b-5afadc218847","type":"GlyphRenderer"}],"title":{"id":"b985deb8-8e3a-4985-ae9f-4b73275f467e","type":"Title"},"toolbar":{"id":"6d33154a-788a-4cac-8aca-3a381ba37d40","type":"Toolbar"},"x_range":{"id":"f9384da0-42f3-451d-b69d-8f6821594443","type":"DataRange1d"},"x_scale":{"id":"725e4cc6-7c57-4602-a978-49c8c0db2335","type":"LinearScale"},"y_range":{"id":"caefa6e1-aaaf-4bbd-981b-e632c826bbf6","type":"DataRange1d"},"y_scale":{"id":"dc880d21-17ce-4862-8be0-c79a206a1da0","type":"LinearScale"}},"id":"0259b002-d36d-47ac-aa1e-3da4f4cc9e82","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"661282fc-1e8b-4dd0-9877-63c4fca323dd","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e30c1fce-8b4e-44b6-843b-85b7d0460abd","type":"BoxAnnotation"},{"attributes":{},"id":"dc880d21-17ce-4862-8be0-c79a206a1da0","type":"LinearScale"},{"attributes":{},"id":"725e4cc6-7c57-4602-a978-49c8c0db2335","type":"LinearScale"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"fb9d78f9-05a0-4b33-ab3b-e7c551f27973","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"0259b002-d36d-47ac-aa1e-3da4f4cc9e82","subtype":"Figure","type":"Plot"},"ticker":{"id":"263b0054-667a-4500-bfb2-7fb904cf8f5e","type":"BasicTicker"}},"id":"3259636b-e16c-44ae-8f09-f9185cdd4503","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"b985deb8-8e3a-4985-ae9f-4b73275f467e","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"ffb131f3-3e36-4ffa-baad-a6b4bded69d1","type":"Selection"},"selection_policy":{"id":"08a7d056-527d-4967-8900-80488c48552a","type":"UnionRenderers"}},"id":"ee086635-d597-40ab-8a99-61a797a8dcb9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0259b002-d36d-47ac-aa1e-3da4f4cc9e82","subtype":"Figure","type":"Plot"},"ticker":{"id":"263b0054-667a-4500-bfb2-7fb904cf8f5e","type":"BasicTicker"}},"id":"68c9b26a-7dbf-475b-96ad-67caee918146","type":"Grid"},{"attributes":{},"id":"ffb131f3-3e36-4ffa-baad-a6b4bded69d1","type":"Selection"},{"attributes":{"source":{"id":"ee086635-d597-40ab-8a99-61a797a8dcb9","type":"ColumnDataSource"}},"id":"01102461-edc2-4a8e-9188-0b4088994bfb","type":"CDSView"},{"attributes":{},"id":"08a7d056-527d-4967-8900-80488c48552a","type":"UnionRenderers"}],"root_ids":["0259b002-d36d-47ac-aa1e-3da4f4cc9e82"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"08a747e2-9e61-42c1-90ba-ee6418f05e2b","roots":{"0259b002-d36d-47ac-aa1e-3da4f4cc9e82":"11b09fb2-0e11-46e2-9adc-f3af65bbfcfc"}}];
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