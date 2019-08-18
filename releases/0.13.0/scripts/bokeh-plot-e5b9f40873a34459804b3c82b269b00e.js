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
      };var element = document.getElementById("cf0ddcea-c6c0-4af0-bf30-37e375bfe4e0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf0ddcea-c6c0-4af0-bf30-37e375bfe4e0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b1cd91f9-5308-41f3-b0b5-303dfeaed00c":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"38d36e12-ab87-4950-89f3-613c54c1917c","type":"Circle"},{"attributes":{},"id":"260f9a69-6cdf-4427-af4a-a1311e6276d9","type":"BasicTicker"},{"attributes":{},"id":"b7202923-9186-47e4-bd98-cba5392d166f","type":"SaveTool"},{"attributes":{"source":{"id":"85adc817-baa3-49b1-82a8-3e0a15ed8b20","type":"ColumnDataSource"}},"id":"ea9317db-83cc-4f6e-9d3e-1f78a9cb3372","type":"CDSView"},{"attributes":{},"id":"323c2d2d-19f1-4cfa-8e32-5606bf30c9e7","type":"WheelZoomTool"},{"attributes":{},"id":"4d4cd44b-2315-45be-a094-f518456f6d71","type":"UnionRenderers"},{"attributes":{"plot":{"id":"2f358f7b-410e-4848-8d0f-7a479f038930","subtype":"Figure","type":"Plot"},"ticker":{"id":"742fa529-6821-4cbe-b6ea-ade9a54de445","type":"BasicTicker"}},"id":"085e0240-76b4-455a-bb12-0faddb26976f","type":"Grid"},{"attributes":{},"id":"558642c3-da84-4520-8a4a-73233d43afef","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"d1b0933d-2926-458a-ab37-4a9cfc164093","type":"BoxAnnotation"}},"id":"8e459f6b-1044-477a-bcc1-539e3702101d","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"35974719-bf68-47bf-bd7f-4e85b7065a63","type":"Selection"},"selection_policy":{"id":"4d4cd44b-2315-45be-a094-f518456f6d71","type":"UnionRenderers"}},"id":"85adc817-baa3-49b1-82a8-3e0a15ed8b20","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"680690f4-85e2-47c0-922c-93a1d29309a9","type":"Circle"},{"attributes":{},"id":"b86a28ed-eaa3-453e-a9f9-9940fd933f3c","type":"LinearScale"},{"attributes":{"data_source":{"id":"85adc817-baa3-49b1-82a8-3e0a15ed8b20","type":"ColumnDataSource"},"glyph":{"id":"38d36e12-ab87-4950-89f3-613c54c1917c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"680690f4-85e2-47c0-922c-93a1d29309a9","type":"Circle"},"selection_glyph":null,"view":{"id":"ea9317db-83cc-4f6e-9d3e-1f78a9cb3372","type":"CDSView"}},"id":"6da50c2e-d061-4587-8dc8-7fe3fb80a40b","type":"GlyphRenderer"},{"attributes":{},"id":"8217dfd6-73da-401a-b4ba-69ca7ed482a8","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d1b0933d-2926-458a-ab37-4a9cfc164093","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"2fa260c3-2644-48d9-8b64-686438155f97","type":"DataRange1d"},{"attributes":{},"id":"e7a46868-4630-4c95-a29e-1ab51c214df0","type":"ResetTool"},{"attributes":{},"id":"35974719-bf68-47bf-bd7f-4e85b7065a63","type":"Selection"},{"attributes":{"below":[{"id":"6e299fae-20bd-4345-b16e-7333c6a1aa3e","type":"LinearAxis"}],"left":[{"id":"163e5e3b-4b3c-4bb7-adeb-35928d7b3ede","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6e299fae-20bd-4345-b16e-7333c6a1aa3e","type":"LinearAxis"},{"id":"085e0240-76b4-455a-bb12-0faddb26976f","type":"Grid"},{"id":"163e5e3b-4b3c-4bb7-adeb-35928d7b3ede","type":"LinearAxis"},{"id":"17c7615f-e27c-42a8-a222-1073671b5753","type":"Grid"},{"id":"d1b0933d-2926-458a-ab37-4a9cfc164093","type":"BoxAnnotation"},{"id":"6da50c2e-d061-4587-8dc8-7fe3fb80a40b","type":"GlyphRenderer"}],"title":{"id":"706e3761-d11f-4190-8d1a-d15c2f085c88","type":"Title"},"toolbar":{"id":"ba8a2898-c922-47b4-84de-d4e0e4ca916b","type":"Toolbar"},"x_range":{"id":"2fa260c3-2644-48d9-8b64-686438155f97","type":"DataRange1d"},"x_scale":{"id":"65955fb2-ef21-44dc-8bba-1d62c03da566","type":"LinearScale"},"y_range":{"id":"7aa2bf1f-cd20-468c-9d2f-f40d0a9fdd97","type":"DataRange1d"},"y_scale":{"id":"b86a28ed-eaa3-453e-a9f9-9940fd933f3c","type":"LinearScale"}},"id":"2f358f7b-410e-4848-8d0f-7a479f038930","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"65955fb2-ef21-44dc-8bba-1d62c03da566","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"706e3761-d11f-4190-8d1a-d15c2f085c88","type":"Title"},{"attributes":{},"id":"15569b84-a613-4af1-9036-43da06be776b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15569b84-a613-4af1-9036-43da06be776b","type":"PanTool"},{"id":"323c2d2d-19f1-4cfa-8e32-5606bf30c9e7","type":"WheelZoomTool"},{"id":"8e459f6b-1044-477a-bcc1-539e3702101d","type":"BoxZoomTool"},{"id":"b7202923-9186-47e4-bd98-cba5392d166f","type":"SaveTool"},{"id":"e7a46868-4630-4c95-a29e-1ab51c214df0","type":"ResetTool"},{"id":"8217dfd6-73da-401a-b4ba-69ca7ed482a8","type":"HelpTool"}]},"id":"ba8a2898-c922-47b4-84de-d4e0e4ca916b","type":"Toolbar"},{"attributes":{"formatter":{"id":"6276f645-0c20-4879-acb2-2835fb7b6a7a","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"2f358f7b-410e-4848-8d0f-7a479f038930","subtype":"Figure","type":"Plot"},"ticker":{"id":"260f9a69-6cdf-4427-af4a-a1311e6276d9","type":"BasicTicker"}},"id":"163e5e3b-4b3c-4bb7-adeb-35928d7b3ede","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7aa2bf1f-cd20-468c-9d2f-f40d0a9fdd97","type":"DataRange1d"},{"attributes":{},"id":"742fa529-6821-4cbe-b6ea-ade9a54de445","type":"BasicTicker"},{"attributes":{"formatter":{"id":"558642c3-da84-4520-8a4a-73233d43afef","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"2f358f7b-410e-4848-8d0f-7a479f038930","subtype":"Figure","type":"Plot"},"ticker":{"id":"742fa529-6821-4cbe-b6ea-ade9a54de445","type":"BasicTicker"}},"id":"6e299fae-20bd-4345-b16e-7333c6a1aa3e","type":"LinearAxis"},{"attributes":{},"id":"6276f645-0c20-4879-acb2-2835fb7b6a7a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2f358f7b-410e-4848-8d0f-7a479f038930","subtype":"Figure","type":"Plot"},"ticker":{"id":"260f9a69-6cdf-4427-af4a-a1311e6276d9","type":"BasicTicker"}},"id":"17c7615f-e27c-42a8-a222-1073671b5753","type":"Grid"}],"root_ids":["2f358f7b-410e-4848-8d0f-7a479f038930"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b1cd91f9-5308-41f3-b0b5-303dfeaed00c","roots":{"2f358f7b-410e-4848-8d0f-7a479f038930":"cf0ddcea-c6c0-4af0-bf30-37e375bfe4e0"}}];
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