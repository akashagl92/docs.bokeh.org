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
      };var element = document.getElementById("d6e07ea7-0658-4afb-b619-bdae75b4db16");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd6e07ea7-0658-4afb-b619-bdae75b4db16' but no matching script tag was found. ")
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
                    var docs_json = {"ca4f7fc7-a585-415c-8193-32b2f7c4c33c":{"roots":{"references":[{"attributes":{"callback":null},"id":"b183e02c-c8d2-4a18-a5a6-916ebaf3448d","type":"DataRange1d"},{"attributes":{},"id":"2aef990e-48af-4cca-b473-ba585b604bf5","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"88ec307c-9a3e-44e8-b124-08edba34f30a","type":"ColumnDataSource"}},"id":"b5ba8614-90be-4ca5-91c0-447a0196dae1","type":"CDSView"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3ac0b68-7fbb-46b8-be51-c189654ca714","type":"Ray"},{"attributes":{},"id":"a989e012-eb6e-403b-b275-a5d8171ea2b6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"51f981e4-3fcb-4dcd-b924-f423d42c6785","type":"BasicTickFormatter"},"plot":{"id":"0d60a085-23f8-4769-867a-683dbbb62a76","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d1bc7ed-1825-406f-8472-9bae43211c81","type":"BasicTicker"}},"id":"2ae93eb2-a6dd-4b7f-8002-4e1c5427df03","type":"LinearAxis"},{"attributes":{},"id":"c53c3532-4ea6-4cd5-9ae8-053f5cd62579","type":"LinearScale"},{"attributes":{},"id":"6c640b16-ad11-4d03-80f6-6ef38061bb8d","type":"SaveTool"},{"attributes":{"overlay":{"id":"8b2ce110-819e-46f8-a332-18f66ef8b1b4","type":"BoxAnnotation"}},"id":"f72260e0-2911-4687-9ff9-9a9ca912d144","type":"BoxZoomTool"},{"attributes":{},"id":"2cc223a6-f034-49ef-8c6e-48ab5c62b5d2","type":"WheelZoomTool"},{"attributes":{},"id":"63075991-289e-423d-a511-1163ddb4f03b","type":"LinearScale"},{"attributes":{},"id":"5d1bc7ed-1825-406f-8472-9bae43211c81","type":"BasicTicker"},{"attributes":{"callback":null},"id":"dd99ae3a-fc24-41cc-94e3-18fcdd21a607","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"0d60a085-23f8-4769-867a-683dbbb62a76","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d1bc7ed-1825-406f-8472-9bae43211c81","type":"BasicTicker"}},"id":"b82a880c-3f1c-40e5-9bb3-cc371b5669bd","type":"Grid"},{"attributes":{},"id":"ec138a74-f7b8-4a69-920d-815393608627","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8b2ce110-819e-46f8-a332-18f66ef8b1b4","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"2aef990e-48af-4cca-b473-ba585b604bf5","type":"BasicTickFormatter"},"plot":{"id":"0d60a085-23f8-4769-867a-683dbbb62a76","subtype":"Figure","type":"Plot"},"ticker":{"id":"a989e012-eb6e-403b-b275-a5d8171ea2b6","type":"BasicTicker"}},"id":"a747cf37-f782-4946-b8a0-12d9acba67a3","type":"LinearAxis"},{"attributes":{"plot":{"id":"0d60a085-23f8-4769-867a-683dbbb62a76","subtype":"Figure","type":"Plot"},"ticker":{"id":"a989e012-eb6e-403b-b275-a5d8171ea2b6","type":"BasicTicker"}},"id":"d7458ef8-dfeb-4fc5-8e67-9540e9973b8a","type":"Grid"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"930fd03a-7f60-46bd-a5e9-bed592c0658e","type":"Ray"},{"attributes":{},"id":"51f981e4-3fcb-4dcd-b924-f423d42c6785","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","angle"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"88ec307c-9a3e-44e8-b124-08edba34f30a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"88ec307c-9a3e-44e8-b124-08edba34f30a","type":"ColumnDataSource"},"glyph":{"id":"f3ac0b68-7fbb-46b8-be51-c189654ca714","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"930fd03a-7f60-46bd-a5e9-bed592c0658e","type":"Ray"},"selection_glyph":null,"view":{"id":"b5ba8614-90be-4ca5-91c0-447a0196dae1","type":"CDSView"}},"id":"46020585-4195-4c43-ab4f-fbcf9c1cd1b4","type":"GlyphRenderer"},{"attributes":{},"id":"e2f8d897-34d0-46d4-8ec3-3a77ffe7e55b","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"92a9e00a-9ec2-4e02-a5a4-2427e9261181","type":"Title"},{"attributes":{"below":[{"id":"a747cf37-f782-4946-b8a0-12d9acba67a3","type":"LinearAxis"}],"left":[{"id":"2ae93eb2-a6dd-4b7f-8002-4e1c5427df03","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a747cf37-f782-4946-b8a0-12d9acba67a3","type":"LinearAxis"},{"id":"d7458ef8-dfeb-4fc5-8e67-9540e9973b8a","type":"Grid"},{"id":"2ae93eb2-a6dd-4b7f-8002-4e1c5427df03","type":"LinearAxis"},{"id":"b82a880c-3f1c-40e5-9bb3-cc371b5669bd","type":"Grid"},{"id":"8b2ce110-819e-46f8-a332-18f66ef8b1b4","type":"BoxAnnotation"},{"id":"46020585-4195-4c43-ab4f-fbcf9c1cd1b4","type":"GlyphRenderer"}],"title":{"id":"92a9e00a-9ec2-4e02-a5a4-2427e9261181","type":"Title"},"toolbar":{"id":"ef21e8ac-b0dd-4f5c-a3af-4fe497a71d39","type":"Toolbar"},"x_range":{"id":"dd99ae3a-fc24-41cc-94e3-18fcdd21a607","type":"DataRange1d"},"x_scale":{"id":"63075991-289e-423d-a511-1163ddb4f03b","type":"LinearScale"},"y_range":{"id":"b183e02c-c8d2-4a18-a5a6-916ebaf3448d","type":"DataRange1d"},"y_scale":{"id":"c53c3532-4ea6-4cd5-9ae8-053f5cd62579","type":"LinearScale"}},"id":"0d60a085-23f8-4769-867a-683dbbb62a76","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cbcd7621-f225-4896-9912-2904f04b74b8","type":"PanTool"},{"id":"2cc223a6-f034-49ef-8c6e-48ab5c62b5d2","type":"WheelZoomTool"},{"id":"f72260e0-2911-4687-9ff9-9a9ca912d144","type":"BoxZoomTool"},{"id":"6c640b16-ad11-4d03-80f6-6ef38061bb8d","type":"SaveTool"},{"id":"ec138a74-f7b8-4a69-920d-815393608627","type":"ResetTool"},{"id":"e2f8d897-34d0-46d4-8ec3-3a77ffe7e55b","type":"HelpTool"}]},"id":"ef21e8ac-b0dd-4f5c-a3af-4fe497a71d39","type":"Toolbar"},{"attributes":{},"id":"cbcd7621-f225-4896-9912-2904f04b74b8","type":"PanTool"}],"root_ids":["0d60a085-23f8-4769-867a-683dbbb62a76"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"ca4f7fc7-a585-415c-8193-32b2f7c4c33c","elementid":"d6e07ea7-0658-4afb-b619-bdae75b4db16","modelid":"0d60a085-23f8-4769-867a-683dbbb62a76"}];
                
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
