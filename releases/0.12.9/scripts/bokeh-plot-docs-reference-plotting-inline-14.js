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
      };var element = document.getElementById("065094f5-b146-4ade-9b25-84a6a4d9c924");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '065094f5-b146-4ade-9b25-84a6a4d9c924' but no matching script tag was found. ")
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
                    var docs_json = {"478bc922-9fb7-4aa8-a6fa-6dddbb0492e7":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"d7611303-a799-429d-9db3-38b69fe08552","subtype":"Figure","type":"Plot"},"ticker":{"id":"da7c699a-db39-4a93-8e33-6fd9b89f7587","type":"BasicTicker"}},"id":"69a17eaa-1f8c-4907-beac-293bcba535ee","type":"Grid"},{"attributes":{},"id":"c201cce5-b0a2-43e9-ab64-730c34afa1c1","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a6c2df96-2861-45ec-ab75-07dfc6cae520","type":"DataRange1d"},{"attributes":{},"id":"92ca0900-4a00-4427-a771-d07da9c0fc62","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34a972b0-64c5-4bce-865c-7ab52cb45229","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"c201cce5-b0a2-43e9-ab64-730c34afa1c1","type":"BasicTickFormatter"},"plot":{"id":"d7611303-a799-429d-9db3-38b69fe08552","subtype":"Figure","type":"Plot"},"ticker":{"id":"92ca0900-4a00-4427-a771-d07da9c0fc62","type":"BasicTicker"}},"id":"81ceead7-601e-4be3-8a37-0fcf048a4a00","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7f8cda9d-37f2-43bc-9eb7-757ded1fe7f2","type":"ColumnDataSource"},"glyph":{"id":"dccbfe07-c7c9-40b6-9216-0380a397c1b4","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"df8352d7-4039-4666-adab-a409be29c6e7","type":"Patch"},"selection_glyph":null,"view":{"id":"93636297-9190-4129-b535-bd0151752c9d","type":"CDSView"}},"id":"030ee604-8e06-4e71-96be-fb223ae16875","type":"GlyphRenderer"},{"attributes":{},"id":"b619b833-1ff6-460a-bf99-7e7298a128ae","type":"HelpTool"},{"attributes":{},"id":"44151afb-474e-4f2f-b359-155261bb363e","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"7f8cda9d-37f2-43bc-9eb7-757ded1fe7f2","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"6d89b1e2-fab6-4be9-8667-401a66a8c3f1","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"df8352d7-4039-4666-adab-a409be29c6e7","type":"Patch"},{"attributes":{"plot":null,"text":""},"id":"e9801e16-ea87-4014-904f-a5a5832c9f89","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"44151afb-474e-4f2f-b359-155261bb363e","type":"PanTool"},{"id":"2f0897e6-0152-48dd-8337-d647d4a6d82e","type":"WheelZoomTool"},{"id":"d7288115-3ffc-4763-a9f9-735cf7a2d7fd","type":"BoxZoomTool"},{"id":"9784877c-b3b1-4c2b-a5b6-55e7e0993b91","type":"SaveTool"},{"id":"aa17e84a-24eb-4aa2-84f2-a0dc380f60b2","type":"ResetTool"},{"id":"b619b833-1ff6-460a-bf99-7e7298a128ae","type":"HelpTool"}]},"id":"e7054624-9441-4764-84f4-5ed265a70d13","type":"Toolbar"},{"attributes":{},"id":"da7c699a-db39-4a93-8e33-6fd9b89f7587","type":"BasicTicker"},{"attributes":{},"id":"aa17e84a-24eb-4aa2-84f2-a0dc380f60b2","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dccbfe07-c7c9-40b6-9216-0380a397c1b4","type":"Patch"},{"attributes":{"formatter":{"id":"217c2b09-1075-4716-bdec-7cd548f6805f","type":"BasicTickFormatter"},"plot":{"id":"d7611303-a799-429d-9db3-38b69fe08552","subtype":"Figure","type":"Plot"},"ticker":{"id":"da7c699a-db39-4a93-8e33-6fd9b89f7587","type":"BasicTicker"}},"id":"bdbac6eb-f971-4502-9d2e-36de7a171dde","type":"LinearAxis"},{"attributes":{"source":{"id":"7f8cda9d-37f2-43bc-9eb7-757ded1fe7f2","type":"ColumnDataSource"}},"id":"93636297-9190-4129-b535-bd0151752c9d","type":"CDSView"},{"attributes":{},"id":"ca5e56a4-a864-4391-8686-4676645ef0a8","type":"LinearScale"},{"attributes":{},"id":"9784877c-b3b1-4c2b-a5b6-55e7e0993b91","type":"SaveTool"},{"attributes":{},"id":"217c2b09-1075-4716-bdec-7cd548f6805f","type":"BasicTickFormatter"},{"attributes":{},"id":"2f0897e6-0152-48dd-8337-d647d4a6d82e","type":"WheelZoomTool"},{"attributes":{},"id":"121d4b14-bf11-438c-a876-0ca7eec18493","type":"LinearScale"},{"attributes":{"plot":{"id":"d7611303-a799-429d-9db3-38b69fe08552","subtype":"Figure","type":"Plot"},"ticker":{"id":"92ca0900-4a00-4427-a771-d07da9c0fc62","type":"BasicTicker"}},"id":"2ed58ea1-1cc3-4855-81a7-52cd63bc352f","type":"Grid"},{"attributes":{"below":[{"id":"81ceead7-601e-4be3-8a37-0fcf048a4a00","type":"LinearAxis"}],"left":[{"id":"bdbac6eb-f971-4502-9d2e-36de7a171dde","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"81ceead7-601e-4be3-8a37-0fcf048a4a00","type":"LinearAxis"},{"id":"2ed58ea1-1cc3-4855-81a7-52cd63bc352f","type":"Grid"},{"id":"bdbac6eb-f971-4502-9d2e-36de7a171dde","type":"LinearAxis"},{"id":"69a17eaa-1f8c-4907-beac-293bcba535ee","type":"Grid"},{"id":"34a972b0-64c5-4bce-865c-7ab52cb45229","type":"BoxAnnotation"},{"id":"030ee604-8e06-4e71-96be-fb223ae16875","type":"GlyphRenderer"}],"title":{"id":"e9801e16-ea87-4014-904f-a5a5832c9f89","type":"Title"},"toolbar":{"id":"e7054624-9441-4764-84f4-5ed265a70d13","type":"Toolbar"},"x_range":{"id":"6d89b1e2-fab6-4be9-8667-401a66a8c3f1","type":"DataRange1d"},"x_scale":{"id":"121d4b14-bf11-438c-a876-0ca7eec18493","type":"LinearScale"},"y_range":{"id":"a6c2df96-2861-45ec-ab75-07dfc6cae520","type":"DataRange1d"},"y_scale":{"id":"ca5e56a4-a864-4391-8686-4676645ef0a8","type":"LinearScale"}},"id":"d7611303-a799-429d-9db3-38b69fe08552","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"34a972b0-64c5-4bce-865c-7ab52cb45229","type":"BoxAnnotation"}},"id":"d7288115-3ffc-4763-a9f9-735cf7a2d7fd","type":"BoxZoomTool"}],"root_ids":["d7611303-a799-429d-9db3-38b69fe08552"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"478bc922-9fb7-4aa8-a6fa-6dddbb0492e7","elementid":"065094f5-b146-4ade-9b25-84a6a4d9c924","modelid":"d7611303-a799-429d-9db3-38b69fe08552"}];
                
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
