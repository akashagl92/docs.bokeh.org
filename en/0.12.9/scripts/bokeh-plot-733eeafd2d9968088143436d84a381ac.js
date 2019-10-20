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
      };var element = document.getElementById("a819867a-2931-4667-a11f-c299ffa14559");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a819867a-2931-4667-a11f-c299ffa14559' but no matching script tag was found. ")
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
                    var docs_json = {"9e88ab66-0c14-4bd4-be21-b4e74447e4db":{"roots":{"references":[{"attributes":{"overlay":{"id":"f2ca6a4f-637a-45e7-a664-907eb1c4f399","type":"BoxAnnotation"}},"id":"3fd3690a-164b-4835-9685-cd2f23ed0a37","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e4f5d02a-3c34-4a4b-bd76-81b50699243f","subtype":"Figure","type":"Plot"},"ticker":{"id":"79a2d2f7-3f11-45af-a261-ace865ba2fb7","type":"BasicTicker"}},"id":"bc88def7-c0c9-49af-8711-a137c1a7a9f0","type":"Grid"},{"attributes":{},"id":"6d353520-8ee7-4751-b754-832e2cee993b","type":"SaveTool"},{"attributes":{},"id":"ca8e8451-67fe-4146-88c3-f42069f4b571","type":"HelpTool"},{"attributes":{"callback":null},"id":"8a8b37f6-4407-4e3f-9036-04cbafd6b22b","type":"DataRange1d"},{"attributes":{"source":{"id":"b73c0c56-dd79-4b11-a334-827756be5d89","type":"ColumnDataSource"}},"id":"c095b782-d40f-446f-8161-64698cefb710","type":"CDSView"},{"attributes":{},"id":"413a2218-5a20-4e86-a3fc-ef74ee3165c3","type":"LinearScale"},{"attributes":{},"id":"3f3b55a3-9aaf-4513-981a-28289e26ceb2","type":"LinearScale"},{"attributes":{},"id":"79a2d2f7-3f11-45af-a261-ace865ba2fb7","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"c2d9315e-a216-450f-aa0e-b2189b3b5282","type":"Annulus"},{"attributes":{"formatter":{"id":"cf72c3e4-669f-43d5-9129-ac2c00ab6da0","type":"BasicTickFormatter"},"plot":{"id":"e4f5d02a-3c34-4a4b-bd76-81b50699243f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7771a1d-574d-40a6-9f46-96f0da219d9d","type":"BasicTicker"}},"id":"3c8c3d84-4ac5-4a0c-b187-cea67066ea1b","type":"LinearAxis"},{"attributes":{},"id":"59211356-2bb1-4800-a6e6-dac5853e7c2e","type":"ResetTool"},{"attributes":{},"id":"c7771a1d-574d-40a6-9f46-96f0da219d9d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e4f5d02a-3c34-4a4b-bd76-81b50699243f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7771a1d-574d-40a6-9f46-96f0da219d9d","type":"BasicTicker"}},"id":"3fc15b0b-f35c-49b8-bdb1-a0a0f2c33265","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"9084179e-1570-42e4-8f54-453c4350d7b8","type":"Annulus"},{"attributes":{"data_source":{"id":"b73c0c56-dd79-4b11-a334-827756be5d89","type":"ColumnDataSource"},"glyph":{"id":"9084179e-1570-42e4-8f54-453c4350d7b8","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c2d9315e-a216-450f-aa0e-b2189b3b5282","type":"Annulus"},"selection_glyph":null,"view":{"id":"c095b782-d40f-446f-8161-64698cefb710","type":"CDSView"}},"id":"1c5a84f8-df6f-427b-8a75-40efc976694b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"b73c0c56-dd79-4b11-a334-827756be5d89","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f2ca6a4f-637a-45e7-a664-907eb1c4f399","type":"BoxAnnotation"},{"attributes":{},"id":"2f99a275-819e-4aa9-bc68-f040c36b7dfd","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"c1d0c1ba-5e55-4a39-917d-74409ed77e6d","type":"LinearAxis"}],"left":[{"id":"3c8c3d84-4ac5-4a0c-b187-cea67066ea1b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c1d0c1ba-5e55-4a39-917d-74409ed77e6d","type":"LinearAxis"},{"id":"bc88def7-c0c9-49af-8711-a137c1a7a9f0","type":"Grid"},{"id":"3c8c3d84-4ac5-4a0c-b187-cea67066ea1b","type":"LinearAxis"},{"id":"3fc15b0b-f35c-49b8-bdb1-a0a0f2c33265","type":"Grid"},{"id":"f2ca6a4f-637a-45e7-a664-907eb1c4f399","type":"BoxAnnotation"},{"id":"1c5a84f8-df6f-427b-8a75-40efc976694b","type":"GlyphRenderer"}],"title":{"id":"c6b8a04e-e630-4818-8968-d362e0fa541c","type":"Title"},"toolbar":{"id":"9593cd81-2c6e-46e5-af4f-9e87d00c49dc","type":"Toolbar"},"x_range":{"id":"720f72e9-6907-425b-8476-99dd67ba7cd2","type":"DataRange1d"},"x_scale":{"id":"413a2218-5a20-4e86-a3fc-ef74ee3165c3","type":"LinearScale"},"y_range":{"id":"8a8b37f6-4407-4e3f-9036-04cbafd6b22b","type":"DataRange1d"},"y_scale":{"id":"3f3b55a3-9aaf-4513-981a-28289e26ceb2","type":"LinearScale"}},"id":"e4f5d02a-3c34-4a4b-bd76-81b50699243f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"526c9cb5-f97f-461d-82dc-a6976b4ed2bb","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"526c9cb5-f97f-461d-82dc-a6976b4ed2bb","type":"PanTool"},{"id":"e8d25387-c8a8-4f17-8337-e9d5ea1baa48","type":"WheelZoomTool"},{"id":"3fd3690a-164b-4835-9685-cd2f23ed0a37","type":"BoxZoomTool"},{"id":"6d353520-8ee7-4751-b754-832e2cee993b","type":"SaveTool"},{"id":"59211356-2bb1-4800-a6e6-dac5853e7c2e","type":"ResetTool"},{"id":"ca8e8451-67fe-4146-88c3-f42069f4b571","type":"HelpTool"}]},"id":"9593cd81-2c6e-46e5-af4f-9e87d00c49dc","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"c6b8a04e-e630-4818-8968-d362e0fa541c","type":"Title"},{"attributes":{"formatter":{"id":"2f99a275-819e-4aa9-bc68-f040c36b7dfd","type":"BasicTickFormatter"},"plot":{"id":"e4f5d02a-3c34-4a4b-bd76-81b50699243f","subtype":"Figure","type":"Plot"},"ticker":{"id":"79a2d2f7-3f11-45af-a261-ace865ba2fb7","type":"BasicTicker"}},"id":"c1d0c1ba-5e55-4a39-917d-74409ed77e6d","type":"LinearAxis"},{"attributes":{},"id":"cf72c3e4-669f-43d5-9129-ac2c00ab6da0","type":"BasicTickFormatter"},{"attributes":{},"id":"e8d25387-c8a8-4f17-8337-e9d5ea1baa48","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"720f72e9-6907-425b-8476-99dd67ba7cd2","type":"DataRange1d"}],"root_ids":["e4f5d02a-3c34-4a4b-bd76-81b50699243f"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"9e88ab66-0c14-4bd4-be21-b4e74447e4db","elementid":"a819867a-2931-4667-a11f-c299ffa14559","modelid":"e4f5d02a-3c34-4a4b-bd76-81b50699243f"}];
                
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
