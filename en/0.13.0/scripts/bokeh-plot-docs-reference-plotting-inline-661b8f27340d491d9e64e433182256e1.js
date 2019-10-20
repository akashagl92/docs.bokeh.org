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
      };var element = document.getElementById("ff26f730-8de2-494d-a2f5-3caa09e6e37a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ff26f730-8de2-494d-a2f5-3caa09e6e37a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"96a1293e-a16d-4062-93b7-e8662e8e8ef5":{"roots":{"references":[{"attributes":{},"id":"a5807a96-9729-47b4-967a-dbd2e1bdd43f","type":"ResetTool"},{"attributes":{},"id":"eacb69e9-b0fb-414f-a14f-040b84e9524f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf64ef29-3518-43c7-b956-ecad64fd4c26","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"f1594a93-1066-4540-a4a2-b4e0e00e780f","type":"BasicTickFormatter"},"plot":{"id":"be45d128-edf5-411a-8dfd-0b084ca9a0ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"eacb69e9-b0fb-414f-a14f-040b84e9524f","type":"BasicTicker"}},"id":"498b7a6f-f083-4c84-8c4c-a064ac42ec85","type":"LinearAxis"},{"attributes":{},"id":"bbd5ac3b-469f-4a5a-bdce-ac36b384fd0e","type":"PanTool"},{"attributes":{},"id":"529de284-28c3-42ff-b55e-c54b03f79e89","type":"BasicTicker"},{"attributes":{"source":{"id":"b713e821-8e92-413e-85b1-23783c8b1fc9","type":"ColumnDataSource"}},"id":"dda33a7a-ac31-46a9-82aa-b0f85cc26618","type":"CDSView"},{"attributes":{"formatter":{"id":"f7e422ce-657d-4ca7-8a8e-b23405d83e8c","type":"BasicTickFormatter"},"plot":{"id":"be45d128-edf5-411a-8dfd-0b084ca9a0ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"529de284-28c3-42ff-b55e-c54b03f79e89","type":"BasicTicker"}},"id":"830078f0-2259-4b0d-939f-fe7b091e7942","type":"LinearAxis"},{"attributes":{},"id":"739e653f-f6ef-4706-a278-6627c3367a0b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"be45d128-edf5-411a-8dfd-0b084ca9a0ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"529de284-28c3-42ff-b55e-c54b03f79e89","type":"BasicTicker"}},"id":"bda73660-6789-402c-87d2-67e8395b9942","type":"Grid"},{"attributes":{"overlay":{"id":"cf64ef29-3518-43c7-b956-ecad64fd4c26","type":"BoxAnnotation"}},"id":"ebc9a23f-bbef-4698-9f2c-025c25831769","type":"BoxZoomTool"},{"attributes":{},"id":"0c9d8e58-2a2c-4aa3-a287-ea7417e67125","type":"LinearScale"},{"attributes":{},"id":"187385ed-92a6-4949-873f-94a7431761e0","type":"SaveTool"},{"attributes":{},"id":"399b42d0-71b9-4d47-9347-c441c0929e33","type":"LinearScale"},{"attributes":{},"id":"7aea1411-972a-47cc-9ec5-58e31e0db3e1","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"9084715e-784f-4652-9ded-5e74df7383dc","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"7cad6f1f-0fe6-4b94-ad48-dae642357ca2","type":"Selection"},"selection_policy":{"id":"7aea1411-972a-47cc-9ec5-58e31e0db3e1","type":"UnionRenderers"}},"id":"b713e821-8e92-413e-85b1-23783c8b1fc9","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"848a6100-c220-4a4f-85a7-78bb7d49e941","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"bbd5ac3b-469f-4a5a-bdce-ac36b384fd0e","type":"PanTool"},{"id":"739e653f-f6ef-4706-a278-6627c3367a0b","type":"WheelZoomTool"},{"id":"ebc9a23f-bbef-4698-9f2c-025c25831769","type":"BoxZoomTool"},{"id":"187385ed-92a6-4949-873f-94a7431761e0","type":"SaveTool"},{"id":"a5807a96-9729-47b4-967a-dbd2e1bdd43f","type":"ResetTool"},{"id":"8d723d56-c003-4d2a-af42-98a57672d2c6","type":"HelpTool"}]},"id":"1c47fcb6-eedf-4d09-a9ab-581df6abdd78","type":"Toolbar"},{"attributes":{},"id":"8d723d56-c003-4d2a-af42-98a57672d2c6","type":"HelpTool"},{"attributes":{"below":[{"id":"830078f0-2259-4b0d-939f-fe7b091e7942","type":"LinearAxis"}],"left":[{"id":"498b7a6f-f083-4c84-8c4c-a064ac42ec85","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"830078f0-2259-4b0d-939f-fe7b091e7942","type":"LinearAxis"},{"id":"bda73660-6789-402c-87d2-67e8395b9942","type":"Grid"},{"id":"498b7a6f-f083-4c84-8c4c-a064ac42ec85","type":"LinearAxis"},{"id":"47d36f57-f876-4fdc-8492-1ca053355d0b","type":"Grid"},{"id":"cf64ef29-3518-43c7-b956-ecad64fd4c26","type":"BoxAnnotation"},{"id":"0d2d3078-9d1b-4fa7-af25-b28030d5fcd1","type":"GlyphRenderer"}],"title":{"id":"7c4c70d1-eecc-4f96-9682-25ab95ebb4f8","type":"Title"},"toolbar":{"id":"1c47fcb6-eedf-4d09-a9ab-581df6abdd78","type":"Toolbar"},"x_range":{"id":"848a6100-c220-4a4f-85a7-78bb7d49e941","type":"DataRange1d"},"x_scale":{"id":"0c9d8e58-2a2c-4aa3-a287-ea7417e67125","type":"LinearScale"},"y_range":{"id":"9084715e-784f-4652-9ded-5e74df7383dc","type":"DataRange1d"},"y_scale":{"id":"399b42d0-71b9-4d47-9347-c441c0929e33","type":"LinearScale"}},"id":"be45d128-edf5-411a-8dfd-0b084ca9a0ff","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f7e422ce-657d-4ca7-8a8e-b23405d83e8c","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"57d733a9-8241-42eb-8257-1632fc647220","type":"Quad"},{"attributes":{"plot":null,"text":""},"id":"7c4c70d1-eecc-4f96-9682-25ab95ebb4f8","type":"Title"},{"attributes":{"data_source":{"id":"b713e821-8e92-413e-85b1-23783c8b1fc9","type":"ColumnDataSource"},"glyph":{"id":"57d733a9-8241-42eb-8257-1632fc647220","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9880bbcf-2496-4b01-b3f7-e06f4c5da20d","type":"Quad"},"selection_glyph":null,"view":{"id":"dda33a7a-ac31-46a9-82aa-b0f85cc26618","type":"CDSView"}},"id":"0d2d3078-9d1b-4fa7-af25-b28030d5fcd1","type":"GlyphRenderer"},{"attributes":{},"id":"7cad6f1f-0fe6-4b94-ad48-dae642357ca2","type":"Selection"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"9880bbcf-2496-4b01-b3f7-e06f4c5da20d","type":"Quad"},{"attributes":{},"id":"f1594a93-1066-4540-a4a2-b4e0e00e780f","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"be45d128-edf5-411a-8dfd-0b084ca9a0ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"eacb69e9-b0fb-414f-a14f-040b84e9524f","type":"BasicTicker"}},"id":"47d36f57-f876-4fdc-8492-1ca053355d0b","type":"Grid"}],"root_ids":["be45d128-edf5-411a-8dfd-0b084ca9a0ff"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"96a1293e-a16d-4062-93b7-e8662e8e8ef5","roots":{"be45d128-edf5-411a-8dfd-0b084ca9a0ff":"ff26f730-8de2-494d-a2f5-3caa09e6e37a"}}];
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