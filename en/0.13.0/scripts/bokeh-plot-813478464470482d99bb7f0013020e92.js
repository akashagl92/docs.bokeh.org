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
      };var element = document.getElementById("a000b4ad-8ccf-436a-b384-c8d0c08f687a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a000b4ad-8ccf-436a-b384-c8d0c08f687a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"030cadca-9253-4ef7-9ab7-2e11d6567752":{"roots":{"references":[{"attributes":{},"id":"ff870614-b585-4553-8fb5-1a64cf8bea5a","type":"LinearScale"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c0707097-4209-412f-9749-7107777bc9c5","type":"MultiLine"},{"attributes":{},"id":"b50a0b3f-c5ba-4970-af24-de1d512f7b67","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c98b6c0b-ad54-429a-bd0a-779e221e34ab","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"d9dee3fb-d946-4c34-9147-7edca16e3af6","type":"BasicTickFormatter"},"plot":{"id":"cc55adc5-3aee-4d8e-b707-41559dcfb6dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8a79389-4e33-4099-92c5-4e6caffac1ff","type":"BasicTicker"}},"id":"b538847c-5396-4b8e-981f-1e1466b885d8","type":"LinearAxis"},{"attributes":{},"id":"321beef8-df67-4e54-98a2-e970aea74016","type":"HelpTool"},{"attributes":{},"id":"13ee2569-774c-470d-98ea-312decb42dd9","type":"Selection"},{"attributes":{},"id":"4886929d-d7b2-4361-b600-c1a0cdd24fe1","type":"LinearScale"},{"attributes":{},"id":"1b74e6ce-e4b7-4fe1-ae85-5abbc0167ce0","type":"BasicTicker"},{"attributes":{},"id":"73e4e5de-e36a-46b5-a506-5474101ca0a4","type":"PanTool"},{"attributes":{"callback":null},"id":"c6be33e0-1ffa-44d2-be1b-3dcd85e31262","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"73e4e5de-e36a-46b5-a506-5474101ca0a4","type":"PanTool"},{"id":"170214ef-3ee4-4f73-b8c5-f11f6755e722","type":"WheelZoomTool"},{"id":"784b947f-edab-448d-b15d-885d4d5b46a1","type":"BoxZoomTool"},{"id":"7bc216cb-cf4b-446e-8a63-93753f4ad50c","type":"SaveTool"},{"id":"1f4dc70e-2db2-49a8-9fe8-08158d1aee19","type":"ResetTool"},{"id":"321beef8-df67-4e54-98a2-e970aea74016","type":"HelpTool"}]},"id":"8ab4e7d4-6df0-41af-97c2-d268f08f01ef","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"494ffa6e-1a3a-4f6d-a571-05fa7fc077d4","type":"Title"},{"attributes":{"formatter":{"id":"b50a0b3f-c5ba-4970-af24-de1d512f7b67","type":"BasicTickFormatter"},"plot":{"id":"cc55adc5-3aee-4d8e-b707-41559dcfb6dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b74e6ce-e4b7-4fe1-ae85-5abbc0167ce0","type":"BasicTicker"}},"id":"69b8050f-05a2-4f33-bac8-62aea2d534f6","type":"LinearAxis"},{"attributes":{},"id":"d9dee3fb-d946-4c34-9147-7edca16e3af6","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"26c252f6-a359-4c18-8994-8cc0ed77c347","type":"MultiLine"},{"attributes":{"plot":{"id":"cc55adc5-3aee-4d8e-b707-41559dcfb6dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8a79389-4e33-4099-92c5-4e6caffac1ff","type":"BasicTicker"}},"id":"14e6b90d-9158-4bf7-9da6-a7f8a119c1f6","type":"Grid"},{"attributes":{"overlay":{"id":"c98b6c0b-ad54-429a-bd0a-779e221e34ab","type":"BoxAnnotation"}},"id":"784b947f-edab-448d-b15d-885d4d5b46a1","type":"BoxZoomTool"},{"attributes":{},"id":"1f4dc70e-2db2-49a8-9fe8-08158d1aee19","type":"ResetTool"},{"attributes":{"below":[{"id":"b538847c-5396-4b8e-981f-1e1466b885d8","type":"LinearAxis"}],"left":[{"id":"69b8050f-05a2-4f33-bac8-62aea2d534f6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b538847c-5396-4b8e-981f-1e1466b885d8","type":"LinearAxis"},{"id":"14e6b90d-9158-4bf7-9da6-a7f8a119c1f6","type":"Grid"},{"id":"69b8050f-05a2-4f33-bac8-62aea2d534f6","type":"LinearAxis"},{"id":"d4ca7049-3228-4470-a1fc-42d25ff39ca8","type":"Grid"},{"id":"c98b6c0b-ad54-429a-bd0a-779e221e34ab","type":"BoxAnnotation"},{"id":"5ccd70bb-0a5f-42ed-a780-f94ce70361b9","type":"GlyphRenderer"}],"title":{"id":"494ffa6e-1a3a-4f6d-a571-05fa7fc077d4","type":"Title"},"toolbar":{"id":"8ab4e7d4-6df0-41af-97c2-d268f08f01ef","type":"Toolbar"},"x_range":{"id":"30881527-90a4-4df4-8362-7aa414dcb49f","type":"DataRange1d"},"x_scale":{"id":"4886929d-d7b2-4361-b600-c1a0cdd24fe1","type":"LinearScale"},"y_range":{"id":"c6be33e0-1ffa-44d2-be1b-3dcd85e31262","type":"DataRange1d"},"y_scale":{"id":"ff870614-b585-4553-8fb5-1a64cf8bea5a","type":"LinearScale"}},"id":"cc55adc5-3aee-4d8e-b707-41559dcfb6dd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b8a79389-4e33-4099-92c5-4e6caffac1ff","type":"BasicTicker"},{"attributes":{"source":{"id":"5edc6449-3e06-4027-b871-405a89b10193","type":"ColumnDataSource"}},"id":"a1d158ee-2cc7-43fc-b18f-2d41342ef50f","type":"CDSView"},{"attributes":{"data_source":{"id":"5edc6449-3e06-4027-b871-405a89b10193","type":"ColumnDataSource"},"glyph":{"id":"c0707097-4209-412f-9749-7107777bc9c5","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26c252f6-a359-4c18-8994-8cc0ed77c347","type":"MultiLine"},"selection_glyph":null,"view":{"id":"a1d158ee-2cc7-43fc-b18f-2d41342ef50f","type":"CDSView"}},"id":"5ccd70bb-0a5f-42ed-a780-f94ce70361b9","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"30881527-90a4-4df4-8362-7aa414dcb49f","type":"DataRange1d"},{"attributes":{},"id":"7bc216cb-cf4b-446e-8a63-93753f4ad50c","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"cc55adc5-3aee-4d8e-b707-41559dcfb6dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b74e6ce-e4b7-4fe1-ae85-5abbc0167ce0","type":"BasicTicker"}},"id":"d4ca7049-3228-4470-a1fc-42d25ff39ca8","type":"Grid"},{"attributes":{"callback":null,"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"13ee2569-774c-470d-98ea-312decb42dd9","type":"Selection"},"selection_policy":{"id":"9aa90089-0735-44de-aab4-2fe2f33d4a8e","type":"UnionRenderers"}},"id":"5edc6449-3e06-4027-b871-405a89b10193","type":"ColumnDataSource"},{"attributes":{},"id":"9aa90089-0735-44de-aab4-2fe2f33d4a8e","type":"UnionRenderers"},{"attributes":{},"id":"170214ef-3ee4-4f73-b8c5-f11f6755e722","type":"WheelZoomTool"}],"root_ids":["cc55adc5-3aee-4d8e-b707-41559dcfb6dd"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"030cadca-9253-4ef7-9ab7-2e11d6567752","roots":{"cc55adc5-3aee-4d8e-b707-41559dcfb6dd":"a000b4ad-8ccf-436a-b384-c8d0c08f687a"}}];
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