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
      };var element = document.getElementById("3029c549-375f-4783-9c78-0458c2c0aabe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3029c549-375f-4783-9c78-0458c2c0aabe' but no matching script tag was found. ")
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
                    var docs_json = {"39dccf69-b433-4cf8-8da2-8b76c92953fa":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b57e423b-cd08-48cc-baf9-77e94f09a0ff","type":"Cross"},{"attributes":{},"id":"d8601d0f-0aa6-4159-8f55-d79027ce53da","type":"HelpTool"},{"attributes":{"plot":{"id":"7ebd9d2f-43a2-4a4f-8164-e2e379f59072","subtype":"Figure","type":"Plot"},"ticker":{"id":"47070155-6c71-48f4-92f0-c214a58aa475","type":"BasicTicker"}},"id":"dbbeecc6-e277-47ba-85c1-60518b229afc","type":"Grid"},{"attributes":{"callback":null},"id":"a9a00dd7-94be-4182-9bb6-7a9a25c04507","type":"DataRange1d"},{"attributes":{},"id":"e028ab93-3ea4-4448-a4ef-5387a3053a9c","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3edb811e-eb4e-4a7b-811b-877dd8452186","type":"Cross"},{"attributes":{"callback":null},"id":"9e916acd-6883-4655-86b6-070de3b5351d","type":"DataRange1d"},{"attributes":{},"id":"c5018dbb-b7f9-4266-a43d-3f39449f3c6f","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4c5ab117-19b5-45f4-b170-5da1ea1c73a1","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"7ebd9d2f-43a2-4a4f-8164-e2e379f59072","subtype":"Figure","type":"Plot"},"ticker":{"id":"6584db39-b2ef-4475-8f59-c97d262f4d3c","type":"BasicTicker"}},"id":"0326e163-cb2c-4768-b8ad-a1eb76ed50c8","type":"Grid"},{"attributes":{},"id":"50245ce6-45e9-4b87-b371-452311dcc431","type":"LinearScale"},{"attributes":{},"id":"a55896e4-e763-425f-b202-bb85992509a7","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"df7e879f-435d-4bb7-a4c9-b77c6d5195b8","type":"Title"},{"attributes":{},"id":"e4725211-ecc1-4084-b31a-e8cd84d51bfc","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"4c5ab117-19b5-45f4-b170-5da1ea1c73a1","type":"ColumnDataSource"}},"id":"2f5fb36e-70fa-4c99-bb59-0e2581b0f5ef","type":"CDSView"},{"attributes":{},"id":"47070155-6c71-48f4-92f0-c214a58aa475","type":"BasicTicker"},{"attributes":{},"id":"5e72568b-71af-4e67-9000-0fb8c24018f3","type":"PanTool"},{"attributes":{},"id":"93aa70ff-e8c5-450a-a99a-b0d29e309519","type":"WheelZoomTool"},{"attributes":{},"id":"6584db39-b2ef-4475-8f59-c97d262f4d3c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e028ab93-3ea4-4448-a4ef-5387a3053a9c","type":"BasicTickFormatter"},"plot":{"id":"7ebd9d2f-43a2-4a4f-8164-e2e379f59072","subtype":"Figure","type":"Plot"},"ticker":{"id":"47070155-6c71-48f4-92f0-c214a58aa475","type":"BasicTicker"}},"id":"270b7c14-3580-459e-a80e-ed7356336934","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4c5ab117-19b5-45f4-b170-5da1ea1c73a1","type":"ColumnDataSource"},"glyph":{"id":"3edb811e-eb4e-4a7b-811b-877dd8452186","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b57e423b-cd08-48cc-baf9-77e94f09a0ff","type":"Cross"},"selection_glyph":null,"view":{"id":"2f5fb36e-70fa-4c99-bb59-0e2581b0f5ef","type":"CDSView"}},"id":"635e43e4-fb10-4bb4-a181-3e5a8a933c70","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"270b7c14-3580-459e-a80e-ed7356336934","type":"LinearAxis"}],"left":[{"id":"658131ec-cc42-47da-8359-1bc5f600d612","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"270b7c14-3580-459e-a80e-ed7356336934","type":"LinearAxis"},{"id":"dbbeecc6-e277-47ba-85c1-60518b229afc","type":"Grid"},{"id":"658131ec-cc42-47da-8359-1bc5f600d612","type":"LinearAxis"},{"id":"0326e163-cb2c-4768-b8ad-a1eb76ed50c8","type":"Grid"},{"id":"364ce2a1-89fc-4c6d-a2db-bb9ec3d74d8b","type":"BoxAnnotation"},{"id":"635e43e4-fb10-4bb4-a181-3e5a8a933c70","type":"GlyphRenderer"}],"title":{"id":"df7e879f-435d-4bb7-a4c9-b77c6d5195b8","type":"Title"},"toolbar":{"id":"9fb369de-6b5b-4cc1-be40-4dd626860f5f","type":"Toolbar"},"x_range":{"id":"a9a00dd7-94be-4182-9bb6-7a9a25c04507","type":"DataRange1d"},"x_scale":{"id":"50245ce6-45e9-4b87-b371-452311dcc431","type":"LinearScale"},"y_range":{"id":"9e916acd-6883-4655-86b6-070de3b5351d","type":"DataRange1d"},"y_scale":{"id":"a55896e4-e763-425f-b202-bb85992509a7","type":"LinearScale"}},"id":"7ebd9d2f-43a2-4a4f-8164-e2e379f59072","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"364ce2a1-89fc-4c6d-a2db-bb9ec3d74d8b","type":"BoxAnnotation"}},"id":"861df989-6649-4222-857b-95a9869d5e6c","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e72568b-71af-4e67-9000-0fb8c24018f3","type":"PanTool"},{"id":"93aa70ff-e8c5-450a-a99a-b0d29e309519","type":"WheelZoomTool"},{"id":"861df989-6649-4222-857b-95a9869d5e6c","type":"BoxZoomTool"},{"id":"c5018dbb-b7f9-4266-a43d-3f39449f3c6f","type":"SaveTool"},{"id":"1608e9ed-8894-497a-bf4a-12fee22a4df9","type":"ResetTool"},{"id":"d8601d0f-0aa6-4159-8f55-d79027ce53da","type":"HelpTool"}]},"id":"9fb369de-6b5b-4cc1-be40-4dd626860f5f","type":"Toolbar"},{"attributes":{},"id":"1608e9ed-8894-497a-bf4a-12fee22a4df9","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"364ce2a1-89fc-4c6d-a2db-bb9ec3d74d8b","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"e4725211-ecc1-4084-b31a-e8cd84d51bfc","type":"BasicTickFormatter"},"plot":{"id":"7ebd9d2f-43a2-4a4f-8164-e2e379f59072","subtype":"Figure","type":"Plot"},"ticker":{"id":"6584db39-b2ef-4475-8f59-c97d262f4d3c","type":"BasicTicker"}},"id":"658131ec-cc42-47da-8359-1bc5f600d612","type":"LinearAxis"}],"root_ids":["7ebd9d2f-43a2-4a4f-8164-e2e379f59072"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"39dccf69-b433-4cf8-8da2-8b76c92953fa","elementid":"3029c549-375f-4783-9c78-0458c2c0aabe","modelid":"7ebd9d2f-43a2-4a4f-8164-e2e379f59072"}];
                
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
