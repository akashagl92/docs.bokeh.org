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
      };var element = document.getElementById("b1da451d-95f5-41f8-ae44-2d0049a54b66");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b1da451d-95f5-41f8-ae44-2d0049a54b66' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"30f70711-f4f7-4592-975d-9a462e72cdb0":{"roots":{"references":[{"attributes":{"below":[{"id":"14ec8d10-161f-425b-850c-1977180a7558","type":"LinearAxis"}],"left":[{"id":"d82c505e-81d6-4652-92c4-23d5c301a890","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14ec8d10-161f-425b-850c-1977180a7558","type":"LinearAxis"},{"id":"beeebe9c-e0e0-4dc2-b729-3557b13dfdee","type":"Grid"},{"id":"d82c505e-81d6-4652-92c4-23d5c301a890","type":"LinearAxis"},{"id":"e8190d02-48a1-4b58-87b0-18af88a91937","type":"Grid"},{"id":"1b8f5ce6-281e-4809-ba93-79298fd4a7f2","type":"BoxAnnotation"},{"id":"dfffbc0d-303a-438f-95e8-3c14c3b18d43","type":"GlyphRenderer"}],"title":{"id":"ee6dcb87-857f-4921-bfd2-3cdbb15f5c5e","type":"Title"},"toolbar":{"id":"e478450e-8532-4723-bbf6-7b46c70e2a8b","type":"Toolbar"},"x_range":{"id":"01482b6f-5bd0-4f46-810f-612f5c1a2e02","type":"DataRange1d"},"x_scale":{"id":"9ed9b614-13c8-48d3-ab6d-7814d3721ac2","type":"LinearScale"},"y_range":{"id":"df66ce8b-2814-431a-8850-67aefc227b09","type":"DataRange1d"},"y_scale":{"id":"e87f3ff9-1f80-4602-a716-11f2370a854b","type":"LinearScale"}},"id":"f682ffc2-1e01-4b6d-999f-884bb15d9cc0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0feb8fcf-6299-4799-b04e-7fbeb5785759","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f99cb4dc-2fc5-4979-8d2c-25b40c7c82a2","type":"PanTool"},{"id":"10eaf990-26d3-4f05-9408-ce8389c3fe77","type":"WheelZoomTool"},{"id":"9544264f-25a6-4741-8bee-6b52a3180678","type":"BoxZoomTool"},{"id":"0feb8fcf-6299-4799-b04e-7fbeb5785759","type":"SaveTool"},{"id":"4015c94f-4c7d-453c-a288-52860f84191c","type":"ResetTool"},{"id":"b5b0f84f-9a9d-4f96-b9a8-c407ebd6a16b","type":"HelpTool"}]},"id":"e478450e-8532-4723-bbf6-7b46c70e2a8b","type":"Toolbar"},{"attributes":{},"id":"4015c94f-4c7d-453c-a288-52860f84191c","type":"ResetTool"},{"attributes":{"callback":null},"id":"01482b6f-5bd0-4f46-810f-612f5c1a2e02","type":"DataRange1d"},{"attributes":{},"id":"b5b0f84f-9a9d-4f96-b9a8-c407ebd6a16b","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4697b70b-460b-49cd-8be4-5e1c90e4d353","type":"Circle"},{"attributes":{},"id":"325defb2-5665-43b0-bd0c-93fb642eb49f","type":"BasicTickFormatter"},{"attributes":{},"id":"9ed9b614-13c8-48d3-ab6d-7814d3721ac2","type":"LinearScale"},{"attributes":{"callback":null},"id":"df66ce8b-2814-431a-8850-67aefc227b09","type":"DataRange1d"},{"attributes":{},"id":"e87f3ff9-1f80-4602-a716-11f2370a854b","type":"LinearScale"},{"attributes":{},"id":"325ca3e9-74c7-494c-843d-5113d10c8c54","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c13448d-08e5-4ee6-89c8-5df145bbe32d","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"f682ffc2-1e01-4b6d-999f-884bb15d9cc0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f95869fb-e0be-47cf-b21b-a7454bd4298a","type":"BasicTicker"}},"id":"beeebe9c-e0e0-4dc2-b729-3557b13dfdee","type":"Grid"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"f682ffc2-1e01-4b6d-999f-884bb15d9cc0","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3a2f075-c4dd-4bf3-a085-d147ff01e0d1","type":"BasicTicker"}},"id":"e8190d02-48a1-4b58-87b0-18af88a91937","type":"Grid"},{"attributes":{"formatter":{"id":"325defb2-5665-43b0-bd0c-93fb642eb49f","type":"BasicTickFormatter"},"plot":{"id":"f682ffc2-1e01-4b6d-999f-884bb15d9cc0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f95869fb-e0be-47cf-b21b-a7454bd4298a","type":"BasicTicker"}},"id":"14ec8d10-161f-425b-850c-1977180a7558","type":"LinearAxis"},{"attributes":{},"id":"f95869fb-e0be-47cf-b21b-a7454bd4298a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"325ca3e9-74c7-494c-843d-5113d10c8c54","type":"BasicTickFormatter"},"plot":{"id":"f682ffc2-1e01-4b6d-999f-884bb15d9cc0","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3a2f075-c4dd-4bf3-a085-d147ff01e0d1","type":"BasicTicker"}},"id":"d82c505e-81d6-4652-92c4-23d5c301a890","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1b8f5ce6-281e-4809-ba93-79298fd4a7f2","type":"BoxAnnotation"},{"attributes":{},"id":"c3a2f075-c4dd-4bf3-a085-d147ff01e0d1","type":"BasicTicker"},{"attributes":{"overlay":{"id":"1b8f5ce6-281e-4809-ba93-79298fd4a7f2","type":"BoxAnnotation"}},"id":"9544264f-25a6-4741-8bee-6b52a3180678","type":"BoxZoomTool"},{"attributes":{},"id":"10eaf990-26d3-4f05-9408-ce8389c3fe77","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"ee6dcb87-857f-4921-bfd2-3cdbb15f5c5e","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"af0292e8-4107-4f98-afa0-cd7a21ccb0ed","type":"ColumnDataSource"},{"attributes":{"source":{"id":"af0292e8-4107-4f98-afa0-cd7a21ccb0ed","type":"ColumnDataSource"}},"id":"e41093f9-3aa8-4167-a6cf-219805b3aa35","type":"CDSView"},{"attributes":{},"id":"f99cb4dc-2fc5-4979-8d2c-25b40c7c82a2","type":"PanTool"},{"attributes":{"data_source":{"id":"af0292e8-4107-4f98-afa0-cd7a21ccb0ed","type":"ColumnDataSource"},"glyph":{"id":"4697b70b-460b-49cd-8be4-5e1c90e4d353","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8c13448d-08e5-4ee6-89c8-5df145bbe32d","type":"Circle"},"selection_glyph":null,"view":{"id":"e41093f9-3aa8-4167-a6cf-219805b3aa35","type":"CDSView"}},"id":"dfffbc0d-303a-438f-95e8-3c14c3b18d43","type":"GlyphRenderer"}],"root_ids":["f682ffc2-1e01-4b6d-999f-884bb15d9cc0"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"30f70711-f4f7-4592-975d-9a462e72cdb0","elementid":"b1da451d-95f5-41f8-ae44-2d0049a54b66","modelid":"f682ffc2-1e01-4b6d-999f-884bb15d9cc0"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
