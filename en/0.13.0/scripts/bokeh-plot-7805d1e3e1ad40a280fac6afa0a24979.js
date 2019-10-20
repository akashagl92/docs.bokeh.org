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
      };var element = document.getElementById("d3612c5a-8d82-4518-aae1-8eb13a940e14");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd3612c5a-8d82-4518-aae1-8eb13a940e14' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"84397783-9bec-4df1-9623-4054b8e739ef":{"roots":{"references":[{"attributes":{"below":[{"id":"9137bc7d-6286-4c45-9146-e05b123bd874","type":"LinearAxis"}],"left":[{"id":"041ac019-7cff-4a9d-a2d9-23b7139cdab9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9137bc7d-6286-4c45-9146-e05b123bd874","type":"LinearAxis"},{"id":"baca06d6-5887-4b10-8cd1-5848d1863fb8","type":"Grid"},{"id":"041ac019-7cff-4a9d-a2d9-23b7139cdab9","type":"LinearAxis"},{"id":"657d3693-b0a6-49f1-952a-378f8f26df5d","type":"Grid"},{"id":"18c8e7ba-b22d-4e39-91ca-50c174dc4c3d","type":"BoxAnnotation"},{"id":"bf3ae1f0-3551-47d4-b259-a05e309288ea","type":"GlyphRenderer"},{"id":"9a333176-4d19-4054-9565-5de96e4a0851","type":"ColorBar"}],"right":[{"id":"9a333176-4d19-4054-9565-5de96e4a0851","type":"ColorBar"}],"title":{"id":"38bc4379-abc9-4cf4-8083-22fe29370d33","type":"Title"},"toolbar":{"id":"9b431c92-0297-4d42-8e5d-7878958bbe49","type":"Toolbar"},"x_range":{"id":"2d38bcc5-3ea2-4692-ac0a-5f6cf54fecd6","type":"DataRange1d"},"x_scale":{"id":"ff28a06c-c9b4-4bff-a53b-64c75fade1c7","type":"LinearScale"},"y_range":{"id":"4565d01d-7ac6-4710-93c2-e6c8be3fef67","type":"DataRange1d"},"y_scale":{"id":"039d74ce-3ae3-4e87-9903-d99d23282dbb","type":"LinearScale"}},"id":"2dd13a34-ef1d-4f33-b44c-47878b0263b8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"037955f9-1384-4f59-8c45-cd063ec0a3af","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5,7,8,9,10],"y":[1,2,3,4,5,7,8,9,10]},"selected":{"id":"3f06d358-00ca-4c87-aa99-3f326cdd5cfe","type":"Selection"},"selection_policy":{"id":"3fb392b1-2bc0-47bd-afac-c6b13e9b56a0","type":"UnionRenderers"}},"id":"8cc81e76-59c6-412e-ba86-196b69e5f2cd","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18c8e7ba-b22d-4e39-91ca-50c174dc4c3d","type":"BoxAnnotation"},{"attributes":{},"id":"3fb392b1-2bc0-47bd-afac-c6b13e9b56a0","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"8cc81e76-59c6-412e-ba86-196b69e5f2cd","type":"ColumnDataSource"},"glyph":{"id":"8ebf733b-2a11-446e-8e93-61547baeecc9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7c759699-b99e-4716-a782-8dacff14c5fe","type":"Circle"},"selection_glyph":null,"view":{"id":"db259205-a4f2-4b76-8e9c-74f7da65a9a9","type":"CDSView"}},"id":"bf3ae1f0-3551-47d4-b259-a05e309288ea","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"037955f9-1384-4f59-8c45-cd063ec0a3af","type":"PanTool"},{"id":"13813005-8ce6-42d9-9504-a13904c09e65","type":"WheelZoomTool"},{"id":"dde2c89a-0296-4fff-b66f-1daf04569ed5","type":"BoxZoomTool"},{"id":"302e3809-6839-45ff-8ecc-2ba201904392","type":"SaveTool"},{"id":"2508eb4c-b322-4230-a365-5e4da1ea019f","type":"ResetTool"},{"id":"2821e3f0-bad5-4d8c-afea-12f69084cd13","type":"HelpTool"}]},"id":"9b431c92-0297-4d42-8e5d-7878958bbe49","type":"Toolbar"},{"attributes":{"source":{"id":"8cc81e76-59c6-412e-ba86-196b69e5f2cd","type":"ColumnDataSource"}},"id":"db259205-a4f2-4b76-8e9c-74f7da65a9a9","type":"CDSView"},{"attributes":{"high":10,"low":1,"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"acbd3cdb-acf4-4107-a09e-c4ffb7d2b55b","type":"LinearColorMapper"},{"attributes":{"dimension":1,"plot":{"id":"2dd13a34-ef1d-4f33-b44c-47878b0263b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ef4b184-0102-41f1-bcf2-dbdd88b296d2","type":"BasicTicker"}},"id":"657d3693-b0a6-49f1-952a-378f8f26df5d","type":"Grid"},{"attributes":{"fill_color":{"field":"y","transform":{"id":"acbd3cdb-acf4-4107-a09e-c4ffb7d2b55b","type":"LinearColorMapper"}},"line_color":{"field":"y","transform":{"id":"acbd3cdb-acf4-4107-a09e-c4ffb7d2b55b","type":"LinearColorMapper"}},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ebf733b-2a11-446e-8e93-61547baeecc9","type":"Circle"},{"attributes":{"callback":null},"id":"2d38bcc5-3ea2-4692-ac0a-5f6cf54fecd6","type":"DataRange1d"},{"attributes":{},"id":"8b234ebf-f2fd-44cb-a20a-0a5aae09d691","type":"BasicTicker"},{"attributes":{},"id":"2c59dd4f-5b7b-4c19-9500-2c58657eaafb","type":"BasicTicker"},{"attributes":{},"id":"ff28a06c-c9b4-4bff-a53b-64c75fade1c7","type":"LinearScale"},{"attributes":{"plot":{"id":"2dd13a34-ef1d-4f33-b44c-47878b0263b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b234ebf-f2fd-44cb-a20a-0a5aae09d691","type":"BasicTicker"}},"id":"baca06d6-5887-4b10-8cd1-5848d1863fb8","type":"Grid"},{"attributes":{"callback":null},"id":"4565d01d-7ac6-4710-93c2-e6c8be3fef67","type":"DataRange1d"},{"attributes":{},"id":"2e7babbd-7a00-4b3a-bd76-114e65c1811b","type":"BasicTickFormatter"},{"attributes":{},"id":"13813005-8ce6-42d9-9504-a13904c09e65","type":"WheelZoomTool"},{"attributes":{},"id":"2821e3f0-bad5-4d8c-afea-12f69084cd13","type":"HelpTool"},{"attributes":{},"id":"039d74ce-3ae3-4e87-9903-d99d23282dbb","type":"LinearScale"},{"attributes":{},"id":"59724dd8-febb-4f11-bd57-eb0f262c9924","type":"BasicTickFormatter"},{"attributes":{"color_mapper":{"id":"acbd3cdb-acf4-4107-a09e-c4ffb7d2b55b","type":"LinearColorMapper"},"formatter":{"id":"59724dd8-febb-4f11-bd57-eb0f262c9924","type":"BasicTickFormatter"},"location":[0,0],"plot":{"id":"2dd13a34-ef1d-4f33-b44c-47878b0263b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c59dd4f-5b7b-4c19-9500-2c58657eaafb","type":"BasicTicker"},"width":8},"id":"9a333176-4d19-4054-9565-5de96e4a0851","type":"ColorBar"},{"attributes":{"overlay":{"id":"18c8e7ba-b22d-4e39-91ca-50c174dc4c3d","type":"BoxAnnotation"}},"id":"dde2c89a-0296-4fff-b66f-1daf04569ed5","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Linear Color Map Based on Y"},"id":"38bc4379-abc9-4cf4-8083-22fe29370d33","type":"Title"},{"attributes":{},"id":"9ef4b184-0102-41f1-bcf2-dbdd88b296d2","type":"BasicTicker"},{"attributes":{},"id":"302e3809-6839-45ff-8ecc-2ba201904392","type":"SaveTool"},{"attributes":{},"id":"2508eb4c-b322-4230-a365-5e4da1ea019f","type":"ResetTool"},{"attributes":{"formatter":{"id":"2e7babbd-7a00-4b3a-bd76-114e65c1811b","type":"BasicTickFormatter"},"plot":{"id":"2dd13a34-ef1d-4f33-b44c-47878b0263b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b234ebf-f2fd-44cb-a20a-0a5aae09d691","type":"BasicTicker"}},"id":"9137bc7d-6286-4c45-9146-e05b123bd874","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c759699-b99e-4716-a782-8dacff14c5fe","type":"Circle"},{"attributes":{"formatter":{"id":"bed14ceb-9365-41ba-b5d6-98c16c7f5df9","type":"BasicTickFormatter"},"plot":{"id":"2dd13a34-ef1d-4f33-b44c-47878b0263b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ef4b184-0102-41f1-bcf2-dbdd88b296d2","type":"BasicTicker"}},"id":"041ac019-7cff-4a9d-a2d9-23b7139cdab9","type":"LinearAxis"},{"attributes":{},"id":"bed14ceb-9365-41ba-b5d6-98c16c7f5df9","type":"BasicTickFormatter"},{"attributes":{},"id":"3f06d358-00ca-4c87-aa99-3f326cdd5cfe","type":"Selection"}],"root_ids":["2dd13a34-ef1d-4f33-b44c-47878b0263b8"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"84397783-9bec-4df1-9623-4054b8e739ef","roots":{"2dd13a34-ef1d-4f33-b44c-47878b0263b8":"d3612c5a-8d82-4518-aae1-8eb13a940e14"}}];
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