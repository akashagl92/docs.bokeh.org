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
      };var element = document.getElementById("a92150f9-73ad-468e-b191-337be6cbf74d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a92150f9-73ad-468e-b191-337be6cbf74d' but no matching script tag was found. ")
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
                    var docs_json = {"2eb7eaac-3b31-4244-a1bd-e6ceded5daf3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e1a7c47b-2045-4154-8321-90aed7b8e7ef","type":"PanTool"},{"id":"fa5085c1-d03c-4260-93bb-7f6e9208c547","type":"WheelZoomTool"},{"id":"08d45a59-afb7-419d-afec-358c13f92685","type":"BoxZoomTool"},{"id":"c49a834c-4769-4737-ac9e-cf096a25411d","type":"SaveTool"},{"id":"f8449953-8c80-499a-8d89-41031a696d26","type":"ResetTool"},{"id":"ea70ede5-8075-4a93-992a-b7767011a63c","type":"HelpTool"}]},"id":"8d2f87c8-301c-4fdf-903b-4bfd3b8284b0","type":"Toolbar"},{"attributes":{"plot":{"id":"6e86995f-e49f-4369-a8a7-fda77ba7dd1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d1a7aa8-8bf3-4b8e-a2c4-90bf89d76dd7","type":"BasicTicker"}},"id":"74438c78-d5ab-4c67-8b76-8ea0300c3335","type":"Grid"},{"attributes":{"callback":null},"id":"7d47017f-b2b0-4ea6-85e3-d0a41ff70c6d","type":"DataRange1d"},{"attributes":{},"id":"a8f5bc62-9a15-4bad-8511-776374cc4b5a","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"6e86995f-e49f-4369-a8a7-fda77ba7dd1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed2abcec-8e19-4986-b0e4-8e5f619f6530","type":"BasicTicker"}},"id":"1ef59a92-493b-41d2-85cf-37a5325b40e4","type":"Grid"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4f49374-ccc5-4995-95e7-518340fa1580","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2d2064a0-716c-40a9-95ae-3543d3298fbc","type":"BoxAnnotation"},{"attributes":{},"id":"f0f1d455-77b4-4ec4-bafc-c9e7725657c8","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"8541f3fc-98c0-4615-9824-46a9cb5f5b35","type":"ColumnDataSource"},{"attributes":{},"id":"63f0ba8e-e62b-4359-82fa-6751a9ba29ba","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8392d32e-bf89-4f35-ba10-dd5821d26173","type":"ColumnDataSource"}},"id":"684593f0-660d-4f13-a55d-c6a9a816fa85","type":"CDSView"},{"attributes":{},"id":"6d1a7aa8-8bf3-4b8e-a2c4-90bf89d76dd7","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8392d32e-bf89-4f35-ba10-dd5821d26173","type":"ColumnDataSource"},"glyph":{"id":"e4f49374-ccc5-4995-95e7-518340fa1580","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b87a20d1-6a32-4387-8504-259bfc4226c5","type":"Circle"},"selection_glyph":null,"view":{"id":"684593f0-660d-4f13-a55d-c6a9a816fa85","type":"CDSView"}},"id":"55c43187-4ac0-42f5-86e9-4159b8b9bad8","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"63f0ba8e-e62b-4359-82fa-6751a9ba29ba","type":"BasicTickFormatter"},"plot":{"id":"6e86995f-e49f-4369-a8a7-fda77ba7dd1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d1a7aa8-8bf3-4b8e-a2c4-90bf89d76dd7","type":"BasicTicker"}},"id":"cb19ff61-996a-40ca-904d-3f5016614f93","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"b87a20d1-6a32-4387-8504-259bfc4226c5","type":"Circle"},{"attributes":{"below":[{"id":"cb19ff61-996a-40ca-904d-3f5016614f93","type":"LinearAxis"}],"left":[{"id":"0abc17ae-b754-4287-b8eb-adb59db74e73","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cb19ff61-996a-40ca-904d-3f5016614f93","type":"LinearAxis"},{"id":"74438c78-d5ab-4c67-8b76-8ea0300c3335","type":"Grid"},{"id":"0abc17ae-b754-4287-b8eb-adb59db74e73","type":"LinearAxis"},{"id":"1ef59a92-493b-41d2-85cf-37a5325b40e4","type":"Grid"},{"id":"2d2064a0-716c-40a9-95ae-3543d3298fbc","type":"BoxAnnotation"},{"id":"61052b62-f139-45f4-8327-e1680dc74bc5","type":"GlyphRenderer"},{"id":"55c43187-4ac0-42f5-86e9-4159b8b9bad8","type":"GlyphRenderer"}],"title":{"id":"ba43f5c9-63ca-43f7-ac2f-4b29f499b174","type":"Title"},"toolbar":{"id":"8d2f87c8-301c-4fdf-903b-4bfd3b8284b0","type":"Toolbar"},"x_range":{"id":"7d47017f-b2b0-4ea6-85e3-d0a41ff70c6d","type":"DataRange1d"},"x_scale":{"id":"f0f1d455-77b4-4ec4-bafc-c9e7725657c8","type":"LinearScale"},"y_range":{"id":"6a231429-878d-4127-b5ad-8e1ebaa63e62","type":"DataRange1d"},"y_scale":{"id":"a8f5bc62-9a15-4bad-8511-776374cc4b5a","type":"LinearScale"}},"id":"6e86995f-e49f-4369-a8a7-fda77ba7dd1f","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"8541f3fc-98c0-4615-9824-46a9cb5f5b35","type":"ColumnDataSource"}},"id":"e0b9bff0-7a42-47fd-b5d8-e1d509dca2c5","type":"CDSView"},{"attributes":{"data_source":{"id":"8541f3fc-98c0-4615-9824-46a9cb5f5b35","type":"ColumnDataSource"},"glyph":{"id":"824a7e14-f492-4cee-8807-798bec2f7827","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e12bdfed-ac85-4984-baff-917d38a2e52e","type":"Line"},"selection_glyph":null,"view":{"id":"e0b9bff0-7a42-47fd-b5d8-e1d509dca2c5","type":"CDSView"}},"id":"61052b62-f139-45f4-8327-e1680dc74bc5","type":"GlyphRenderer"},{"attributes":{},"id":"ea70ede5-8075-4a93-992a-b7767011a63c","type":"HelpTool"},{"attributes":{},"id":"ed2abcec-8e19-4986-b0e4-8e5f619f6530","type":"BasicTicker"},{"attributes":{},"id":"ddb34dae-6295-4e46-b7b3-30d95aabf00a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6a231429-878d-4127-b5ad-8e1ebaa63e62","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ddb34dae-6295-4e46-b7b3-30d95aabf00a","type":"BasicTickFormatter"},"plot":{"id":"6e86995f-e49f-4369-a8a7-fda77ba7dd1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed2abcec-8e19-4986-b0e4-8e5f619f6530","type":"BasicTicker"}},"id":"0abc17ae-b754-4287-b8eb-adb59db74e73","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"8392d32e-bf89-4f35-ba10-dd5821d26173","type":"ColumnDataSource"},{"attributes":{},"id":"fa5085c1-d03c-4260-93bb-7f6e9208c547","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e12bdfed-ac85-4984-baff-917d38a2e52e","type":"Line"},{"attributes":{},"id":"c49a834c-4769-4737-ac9e-cf096a25411d","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"ba43f5c9-63ca-43f7-ac2f-4b29f499b174","type":"Title"},{"attributes":{},"id":"e1a7c47b-2045-4154-8321-90aed7b8e7ef","type":"PanTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"824a7e14-f492-4cee-8807-798bec2f7827","type":"Line"},{"attributes":{},"id":"f8449953-8c80-499a-8d89-41031a696d26","type":"ResetTool"},{"attributes":{"overlay":{"id":"2d2064a0-716c-40a9-95ae-3543d3298fbc","type":"BoxAnnotation"}},"id":"08d45a59-afb7-419d-afec-358c13f92685","type":"BoxZoomTool"}],"root_ids":["6e86995f-e49f-4369-a8a7-fda77ba7dd1f"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2eb7eaac-3b31-4244-a1bd-e6ceded5daf3","elementid":"a92150f9-73ad-468e-b191-337be6cbf74d","modelid":"6e86995f-e49f-4369-a8a7-fda77ba7dd1f"}];
                
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
