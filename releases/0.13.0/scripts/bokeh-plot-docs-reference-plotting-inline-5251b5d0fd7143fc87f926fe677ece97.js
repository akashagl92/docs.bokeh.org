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
      };var element = document.getElementById("3a7d2587-5e3b-4af1-b267-a47219284947");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a7d2587-5e3b-4af1-b267-a47219284947' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7808199d-4f51-4ab3-ac69-3494613921fc":{"roots":{"references":[{"attributes":{},"id":"76ba4f75-bd2f-49eb-9f0e-68cea5283058","type":"HelpTool"},{"attributes":{},"id":"38c8fe42-4e5e-45a7-879f-b3a9fd79062f","type":"ResetTool"},{"attributes":{"formatter":{"id":"f162bec7-5536-4733-9964-df0ecedebcc7","type":"BasicTickFormatter"},"plot":{"id":"14085063-92e0-4c94-b82a-268b3389bb43","subtype":"Figure","type":"Plot"},"ticker":{"id":"46c6f6d4-57ba-441d-b43a-fb3813eea266","type":"BasicTicker"}},"id":"bd2bf3ae-a52d-44a6-af5a-f7176817cae4","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"e00fd429-4731-48ed-b5f1-88429a414386","type":"CircleX"},{"attributes":{"formatter":{"id":"e1a0f465-e3f4-4e2c-b615-f613ef7fb1a6","type":"BasicTickFormatter"},"plot":{"id":"14085063-92e0-4c94-b82a-268b3389bb43","subtype":"Figure","type":"Plot"},"ticker":{"id":"08fb0d1c-800f-47c9-9c15-90da33111030","type":"BasicTicker"}},"id":"43df3f08-c7a3-4f8c-8e45-2f6dd99970b1","type":"LinearAxis"},{"attributes":{},"id":"ec12d6bb-de02-42e0-9a8e-3aaf9a9fd4c2","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"2f89b2ac-266a-4b49-9e01-b32686fbf057","type":"Selection"},"selection_policy":{"id":"9b4338b9-e9d8-415b-8268-d2c1286a6408","type":"UnionRenderers"}},"id":"0c0198c2-5b0d-4264-87c8-36add154d075","type":"ColumnDataSource"},{"attributes":{},"id":"9b4338b9-e9d8-415b-8268-d2c1286a6408","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"0c0198c2-5b0d-4264-87c8-36add154d075","type":"ColumnDataSource"},"glyph":{"id":"7f05342b-f361-4285-aba8-213cc1423540","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e00fd429-4731-48ed-b5f1-88429a414386","type":"CircleX"},"selection_glyph":null,"view":{"id":"b9246abf-5c5d-42bb-a7fb-fc766b11065f","type":"CDSView"}},"id":"1c64b914-b7de-471c-8a73-6670fdd75edb","type":"GlyphRenderer"},{"attributes":{},"id":"46c6f6d4-57ba-441d-b43a-fb3813eea266","type":"BasicTicker"},{"attributes":{"below":[{"id":"43df3f08-c7a3-4f8c-8e45-2f6dd99970b1","type":"LinearAxis"}],"left":[{"id":"bd2bf3ae-a52d-44a6-af5a-f7176817cae4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"43df3f08-c7a3-4f8c-8e45-2f6dd99970b1","type":"LinearAxis"},{"id":"79f8974a-88ca-4e75-a3c1-53790f4b761b","type":"Grid"},{"id":"bd2bf3ae-a52d-44a6-af5a-f7176817cae4","type":"LinearAxis"},{"id":"9640caa1-bfda-4e69-ad7d-e77b0685e02d","type":"Grid"},{"id":"5050bd42-1b09-4f60-914f-6143b9d6fbe4","type":"BoxAnnotation"},{"id":"1c64b914-b7de-471c-8a73-6670fdd75edb","type":"GlyphRenderer"}],"title":{"id":"23b4ffaf-11ab-44bb-a5f0-940aaf581e2d","type":"Title"},"toolbar":{"id":"f609c6a9-09af-4f91-88e0-4147567c00f8","type":"Toolbar"},"x_range":{"id":"82414c12-9a72-4990-b858-1722794a0d7f","type":"DataRange1d"},"x_scale":{"id":"ff2a91e3-abe9-45a5-b371-6dc658b3d9c7","type":"LinearScale"},"y_range":{"id":"a8dfe5b5-1b1c-4e4d-8495-7865a7b3c7a9","type":"DataRange1d"},"y_scale":{"id":"2a522d62-1375-49f6-a5af-f2d58dc4f5c8","type":"LinearScale"}},"id":"14085063-92e0-4c94-b82a-268b3389bb43","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"14085063-92e0-4c94-b82a-268b3389bb43","subtype":"Figure","type":"Plot"},"ticker":{"id":"46c6f6d4-57ba-441d-b43a-fb3813eea266","type":"BasicTicker"}},"id":"9640caa1-bfda-4e69-ad7d-e77b0685e02d","type":"Grid"},{"attributes":{"overlay":{"id":"5050bd42-1b09-4f60-914f-6143b9d6fbe4","type":"BoxAnnotation"}},"id":"ca0f43c0-36fc-441c-ad15-e4d2080a755e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f05342b-f361-4285-aba8-213cc1423540","type":"CircleX"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34c19810-9312-4bfd-94be-9883e19dc383","type":"PanTool"},{"id":"f3f8bd35-0f11-40e5-afb3-df1dadb0c963","type":"WheelZoomTool"},{"id":"ca0f43c0-36fc-441c-ad15-e4d2080a755e","type":"BoxZoomTool"},{"id":"ec12d6bb-de02-42e0-9a8e-3aaf9a9fd4c2","type":"SaveTool"},{"id":"38c8fe42-4e5e-45a7-879f-b3a9fd79062f","type":"ResetTool"},{"id":"76ba4f75-bd2f-49eb-9f0e-68cea5283058","type":"HelpTool"}]},"id":"f609c6a9-09af-4f91-88e0-4147567c00f8","type":"Toolbar"},{"attributes":{},"id":"f3f8bd35-0f11-40e5-afb3-df1dadb0c963","type":"WheelZoomTool"},{"attributes":{},"id":"2a522d62-1375-49f6-a5af-f2d58dc4f5c8","type":"LinearScale"},{"attributes":{},"id":"f162bec7-5536-4733-9964-df0ecedebcc7","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"0c0198c2-5b0d-4264-87c8-36add154d075","type":"ColumnDataSource"}},"id":"b9246abf-5c5d-42bb-a7fb-fc766b11065f","type":"CDSView"},{"attributes":{"callback":null},"id":"82414c12-9a72-4990-b858-1722794a0d7f","type":"DataRange1d"},{"attributes":{},"id":"2f89b2ac-266a-4b49-9e01-b32686fbf057","type":"Selection"},{"attributes":{"plot":{"id":"14085063-92e0-4c94-b82a-268b3389bb43","subtype":"Figure","type":"Plot"},"ticker":{"id":"08fb0d1c-800f-47c9-9c15-90da33111030","type":"BasicTicker"}},"id":"79f8974a-88ca-4e75-a3c1-53790f4b761b","type":"Grid"},{"attributes":{},"id":"34c19810-9312-4bfd-94be-9883e19dc383","type":"PanTool"},{"attributes":{},"id":"08fb0d1c-800f-47c9-9c15-90da33111030","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a8dfe5b5-1b1c-4e4d-8495-7865a7b3c7a9","type":"DataRange1d"},{"attributes":{},"id":"ff2a91e3-abe9-45a5-b371-6dc658b3d9c7","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"23b4ffaf-11ab-44bb-a5f0-940aaf581e2d","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5050bd42-1b09-4f60-914f-6143b9d6fbe4","type":"BoxAnnotation"},{"attributes":{},"id":"e1a0f465-e3f4-4e2c-b615-f613ef7fb1a6","type":"BasicTickFormatter"}],"root_ids":["14085063-92e0-4c94-b82a-268b3389bb43"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7808199d-4f51-4ab3-ac69-3494613921fc","roots":{"14085063-92e0-4c94-b82a-268b3389bb43":"3a7d2587-5e3b-4af1-b267-a47219284947"}}];
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