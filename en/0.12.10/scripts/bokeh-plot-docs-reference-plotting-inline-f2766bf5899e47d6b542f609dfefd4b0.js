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
      };var element = document.getElementById("1f326e8a-86c0-4171-b030-86c004975848");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1f326e8a-86c0-4171-b030-86c004975848' but no matching script tag was found. ")
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
                    var docs_json = {"51ab376a-fc19-4e0c-b294-374d9d2b1155":{"roots":{"references":[{"attributes":{"formatter":{"id":"1a2277e6-829a-405e-8515-1c5e4f677a28","type":"BasicTickFormatter"},"plot":{"id":"c5e18ced-17e2-4b0f-a929-eb06873d25cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7c4f31c-0d23-4a93-8b4b-8d2bcbf0c1bf","type":"BasicTicker"}},"id":"d0d5f624-a298-4962-81ec-cdc48396d8d5","type":"LinearAxis"},{"attributes":{},"id":"a7c4f31c-0d23-4a93-8b4b-8d2bcbf0c1bf","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"0e7253a7-5bff-48e3-8e53-3910b8c896ad","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"c5e18ced-17e2-4b0f-a929-eb06873d25cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7c4f31c-0d23-4a93-8b4b-8d2bcbf0c1bf","type":"BasicTicker"}},"id":"8d0d242f-a46a-4b26-8264-971179f99bcc","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c54b1bc-6e68-42a4-a229-216d5f3f5b01","type":"Ray"},{"attributes":{"data_source":{"id":"89c5a14f-a613-4843-895f-b3e5a21f8cb3","type":"ColumnDataSource"},"glyph":{"id":"7301af9c-567c-4653-884e-03ff4fe59d7c","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c54b1bc-6e68-42a4-a229-216d5f3f5b01","type":"Ray"},"selection_glyph":null,"view":{"id":"73fb521b-36e0-4d90-b204-dfe9a2d18ebe","type":"CDSView"}},"id":"68c0bd37-8ce7-4336-b4d9-e2469c846ab0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"89c5a14f-a613-4843-895f-b3e5a21f8cb3","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"40e9027a-c571-46c5-aaa5-6b00fef94322","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"0a419c0a-d8b6-4d1b-bde5-53942c9370c2","type":"LinearAxis"}],"left":[{"id":"d0d5f624-a298-4962-81ec-cdc48396d8d5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0a419c0a-d8b6-4d1b-bde5-53942c9370c2","type":"LinearAxis"},{"id":"0d88d15c-c2fb-46b7-ba0d-74c39355a423","type":"Grid"},{"id":"d0d5f624-a298-4962-81ec-cdc48396d8d5","type":"LinearAxis"},{"id":"8d0d242f-a46a-4b26-8264-971179f99bcc","type":"Grid"},{"id":"40e9027a-c571-46c5-aaa5-6b00fef94322","type":"BoxAnnotation"},{"id":"68c0bd37-8ce7-4336-b4d9-e2469c846ab0","type":"GlyphRenderer"}],"title":{"id":"0e7253a7-5bff-48e3-8e53-3910b8c896ad","type":"Title"},"toolbar":{"id":"ba0e86b3-ec36-4373-bc57-25c4c9279898","type":"Toolbar"},"x_range":{"id":"970c4322-785a-47bf-abe3-4aed05932483","type":"DataRange1d"},"x_scale":{"id":"99569099-aebf-4982-95ed-857e5df3811f","type":"LinearScale"},"y_range":{"id":"0a6c5455-1d2f-49ce-a5b8-57e18031f26b","type":"DataRange1d"},"y_scale":{"id":"37113313-25ee-44c7-9275-fc9825d1a4f9","type":"LinearScale"}},"id":"c5e18ced-17e2-4b0f-a929-eb06873d25cd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"971c5136-d5d5-4069-ad78-b6aca47c4c1f","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"971c5136-d5d5-4069-ad78-b6aca47c4c1f","type":"PanTool"},{"id":"460a1946-4eb1-45c0-a851-26ffaba3c3e5","type":"WheelZoomTool"},{"id":"2aceaf11-65c1-4171-b8c5-6601d783ef90","type":"BoxZoomTool"},{"id":"f94ec26d-dffb-4fe0-ae0f-899c0bec9947","type":"SaveTool"},{"id":"51f10014-d748-4013-9659-c85ea6e389ea","type":"ResetTool"},{"id":"ce09db61-4a0a-4eca-b5bf-caa7ebee7594","type":"HelpTool"}]},"id":"ba0e86b3-ec36-4373-bc57-25c4c9279898","type":"Toolbar"},{"attributes":{"source":{"id":"89c5a14f-a613-4843-895f-b3e5a21f8cb3","type":"ColumnDataSource"}},"id":"73fb521b-36e0-4d90-b204-dfe9a2d18ebe","type":"CDSView"},{"attributes":{"callback":null},"id":"970c4322-785a-47bf-abe3-4aed05932483","type":"DataRange1d"},{"attributes":{},"id":"460a1946-4eb1-45c0-a851-26ffaba3c3e5","type":"WheelZoomTool"},{"attributes":{},"id":"2fc6fa6c-b8ad-42c7-a848-5139e47e68f2","type":"BasicTicker"},{"attributes":{"overlay":{"id":"40e9027a-c571-46c5-aaa5-6b00fef94322","type":"BoxAnnotation"}},"id":"2aceaf11-65c1-4171-b8c5-6601d783ef90","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7301af9c-567c-4653-884e-03ff4fe59d7c","type":"Ray"},{"attributes":{},"id":"f94ec26d-dffb-4fe0-ae0f-899c0bec9947","type":"SaveTool"},{"attributes":{"formatter":{"id":"b766e610-a70c-423d-9e77-bb4c14814612","type":"BasicTickFormatter"},"plot":{"id":"c5e18ced-17e2-4b0f-a929-eb06873d25cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"2fc6fa6c-b8ad-42c7-a848-5139e47e68f2","type":"BasicTicker"}},"id":"0a419c0a-d8b6-4d1b-bde5-53942c9370c2","type":"LinearAxis"},{"attributes":{},"id":"51f10014-d748-4013-9659-c85ea6e389ea","type":"ResetTool"},{"attributes":{"callback":null},"id":"0a6c5455-1d2f-49ce-a5b8-57e18031f26b","type":"DataRange1d"},{"attributes":{},"id":"ce09db61-4a0a-4eca-b5bf-caa7ebee7594","type":"HelpTool"},{"attributes":{},"id":"99569099-aebf-4982-95ed-857e5df3811f","type":"LinearScale"},{"attributes":{},"id":"b766e610-a70c-423d-9e77-bb4c14814612","type":"BasicTickFormatter"},{"attributes":{},"id":"37113313-25ee-44c7-9275-fc9825d1a4f9","type":"LinearScale"},{"attributes":{},"id":"1a2277e6-829a-405e-8515-1c5e4f677a28","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c5e18ced-17e2-4b0f-a929-eb06873d25cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"2fc6fa6c-b8ad-42c7-a848-5139e47e68f2","type":"BasicTicker"}},"id":"0d88d15c-c2fb-46b7-ba0d-74c39355a423","type":"Grid"}],"root_ids":["c5e18ced-17e2-4b0f-a929-eb06873d25cd"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"51ab376a-fc19-4e0c-b294-374d9d2b1155","elementid":"1f326e8a-86c0-4171-b030-86c004975848","modelid":"c5e18ced-17e2-4b0f-a929-eb06873d25cd"}];
                
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
