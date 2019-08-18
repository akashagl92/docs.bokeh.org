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
      };var element = document.getElementById("d4a8ba0e-308f-498a-853e-748c2bb50f2c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd4a8ba0e-308f-498a-853e-748c2bb50f2c' but no matching script tag was found. ")
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
                    var docs_json = {"581b1a09-9acc-4533-b4d1-b1129716a5c7":{"roots":{"references":[{"attributes":{"source":{"id":"60015876-6949-4375-813f-2db99727b1d8","type":"ColumnDataSource"}},"id":"e9494782-cdf3-466e-92ad-cee6cb05beb0","type":"CDSView"},{"attributes":{"plot":{"id":"b1b1117c-3398-46bc-a276-2abeaeec52e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a93cde34-5e62-45ba-8bbd-a77814cf2fb1","type":"BasicTicker"}},"id":"7a1a3ca9-c3f8-40e3-84f9-592eafa9fce7","type":"Grid"},{"attributes":{},"id":"5d02a760-b0b5-4e5f-9891-343be0cd7d9a","type":"SaveTool"},{"attributes":{},"id":"e7e19d71-d4f2-43f4-9448-64a35a759c79","type":"ResetTool"},{"attributes":{"callback":null},"id":"24d0f2be-6fbd-4f07-ac65-d2730c12bebd","type":"DataRange1d"},{"attributes":{"overlay":{"id":"cd8395ae-1bc5-4e4b-8e3d-9472b2879f34","type":"BoxAnnotation"}},"id":"a233cb5d-7094-42a0-bf52-910fbe63e98e","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f89dd501-a881-4896-9e77-337aada0ad81","type":"Circle"},{"attributes":{},"id":"a93cde34-5e62-45ba-8bbd-a77814cf2fb1","type":"BasicTicker"},{"attributes":{},"id":"d2da3d67-7bec-4e40-8b82-4833049b4a64","type":"LinearScale"},{"attributes":{},"id":"00b9cdd4-0499-4586-85a7-91a242cf46b1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c350b7ae-112e-4575-96b0-10beb630acb3","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"60015876-6949-4375-813f-2db99727b1d8","type":"ColumnDataSource"},{"attributes":{},"id":"404b595d-0c76-4a7b-8001-8b7e09d8e6e2","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"728925ad-ad3f-4dba-b73f-cd5c09ff0f48","type":"PanTool"},{"id":"a6bcdef6-a86a-494e-94f3-3ec312f4e0e2","type":"WheelZoomTool"},{"id":"a233cb5d-7094-42a0-bf52-910fbe63e98e","type":"BoxZoomTool"},{"id":"5d02a760-b0b5-4e5f-9891-343be0cd7d9a","type":"SaveTool"},{"id":"e7e19d71-d4f2-43f4-9448-64a35a759c79","type":"ResetTool"},{"id":"404b595d-0c76-4a7b-8001-8b7e09d8e6e2","type":"HelpTool"}]},"id":"1e4e3c1c-e771-443e-a290-78fdc705559c","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cd8395ae-1bc5-4e4b-8e3d-9472b2879f34","type":"BoxAnnotation"},{"attributes":{},"id":"728925ad-ad3f-4dba-b73f-cd5c09ff0f48","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"35921206-2471-44ef-bc85-3ffaa150652e","type":"Title"},{"attributes":{},"id":"fc6be142-1db3-4262-8d31-ce8b032e0d27","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"00b9cdd4-0499-4586-85a7-91a242cf46b1","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"b1b1117c-3398-46bc-a276-2abeaeec52e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a93cde34-5e62-45ba-8bbd-a77814cf2fb1","type":"BasicTicker"}},"id":"562a204a-36d4-42de-9b38-c7cf158c94db","type":"LinearAxis"},{"attributes":{"data_source":{"id":"60015876-6949-4375-813f-2db99727b1d8","type":"ColumnDataSource"},"glyph":{"id":"f89dd501-a881-4896-9e77-337aada0ad81","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c350b7ae-112e-4575-96b0-10beb630acb3","type":"Circle"},"selection_glyph":null,"view":{"id":"e9494782-cdf3-466e-92ad-cee6cb05beb0","type":"CDSView"}},"id":"5d1894ab-fa70-44ca-b246-f9b0d2f8a434","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"562a204a-36d4-42de-9b38-c7cf158c94db","type":"LinearAxis"}],"left":[{"id":"284c5575-c772-4018-8e68-8080a9dbe08d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"562a204a-36d4-42de-9b38-c7cf158c94db","type":"LinearAxis"},{"id":"7a1a3ca9-c3f8-40e3-84f9-592eafa9fce7","type":"Grid"},{"id":"284c5575-c772-4018-8e68-8080a9dbe08d","type":"LinearAxis"},{"id":"9eba138a-2ca7-4aec-8ad7-4522c8f8acb1","type":"Grid"},{"id":"cd8395ae-1bc5-4e4b-8e3d-9472b2879f34","type":"BoxAnnotation"},{"id":"5d1894ab-fa70-44ca-b246-f9b0d2f8a434","type":"GlyphRenderer"}],"title":{"id":"35921206-2471-44ef-bc85-3ffaa150652e","type":"Title"},"toolbar":{"id":"1e4e3c1c-e771-443e-a290-78fdc705559c","type":"Toolbar"},"x_range":{"id":"ec6e780c-401d-4e2b-84eb-43493eeea0bd","type":"DataRange1d"},"x_scale":{"id":"d2da3d67-7bec-4e40-8b82-4833049b4a64","type":"LinearScale"},"y_range":{"id":"24d0f2be-6fbd-4f07-ac65-d2730c12bebd","type":"DataRange1d"},"y_scale":{"id":"81639246-4fbb-4014-9284-9dac749fa060","type":"LinearScale"}},"id":"b1b1117c-3398-46bc-a276-2abeaeec52e4","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"b1b1117c-3398-46bc-a276-2abeaeec52e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"85fde1e2-62f7-429c-986e-b07e14f12465","type":"BasicTicker"}},"id":"9eba138a-2ca7-4aec-8ad7-4522c8f8acb1","type":"Grid"},{"attributes":{},"id":"85fde1e2-62f7-429c-986e-b07e14f12465","type":"BasicTicker"},{"attributes":{},"id":"81639246-4fbb-4014-9284-9dac749fa060","type":"LinearScale"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"fc6be142-1db3-4262-8d31-ce8b032e0d27","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"b1b1117c-3398-46bc-a276-2abeaeec52e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"85fde1e2-62f7-429c-986e-b07e14f12465","type":"BasicTicker"}},"id":"284c5575-c772-4018-8e68-8080a9dbe08d","type":"LinearAxis"},{"attributes":{},"id":"a6bcdef6-a86a-494e-94f3-3ec312f4e0e2","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"ec6e780c-401d-4e2b-84eb-43493eeea0bd","type":"DataRange1d"}],"root_ids":["b1b1117c-3398-46bc-a276-2abeaeec52e4"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"581b1a09-9acc-4533-b4d1-b1129716a5c7","elementid":"d4a8ba0e-308f-498a-853e-748c2bb50f2c","modelid":"b1b1117c-3398-46bc-a276-2abeaeec52e4"}];
                
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
