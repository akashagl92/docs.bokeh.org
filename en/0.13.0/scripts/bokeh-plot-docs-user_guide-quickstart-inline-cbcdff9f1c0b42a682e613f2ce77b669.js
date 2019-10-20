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
      };var element = document.getElementById("c20acf5c-87ae-4ad1-816c-e258dbab9a93");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c20acf5c-87ae-4ad1-816c-e258dbab9a93' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fa59ee92-4bfe-4301-be33-78c1c408bcd3":{"roots":{"references":[{"attributes":{"items":[{"id":"b03b17e0-4569-4139-9215-0d209e25c47d","type":"LegendItem"}],"plot":{"id":"1ef60d17-f0db-4c26-a357-80cdbd4866cf","subtype":"Figure","type":"Plot"}},"id":"e666f653-b2b5-47ff-b312-76165e75f07c","type":"Legend"},{"attributes":{},"id":"87b0b2aa-d48e-4174-b5bf-9bfebcd938d7","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"839af901-737c-4d5c-bdb6-6f4ea904e8b7","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6ecdefe2-9199-4051-baf1-e9cf66f6a539","type":"BoxAnnotation"},{"attributes":{},"id":"be79a040-a045-44cc-8599-4fca6f32786e","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"04f82a25-6412-4a50-9bc8-5f25ee0345ba","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"3b79a745-6e64-41fc-9771-d1bfec4cad9f","type":"Selection"},"selection_policy":{"id":"1041700a-6f18-4641-bb26-d92dff4efa05","type":"UnionRenderers"}},"id":"43b747ef-2d80-4a8e-b7b6-5595ab0770dc","type":"ColumnDataSource"},{"attributes":{"source":{"id":"43b747ef-2d80-4a8e-b7b6-5595ab0770dc","type":"ColumnDataSource"}},"id":"37020514-7101-44ef-80fb-ea7e7d6176fc","type":"CDSView"},{"attributes":{"plot":null,"text":"simple line example"},"id":"759b3594-93e0-44ad-bc08-e359b62ba6d7","type":"Title"},{"attributes":{},"id":"d42dbba1-0978-4d5b-98be-fdf14a0a26a6","type":"ResetTool"},{"attributes":{"callback":null},"id":"3f4fe94a-544e-4b0d-bbdc-16bebe155620","type":"DataRange1d"},{"attributes":{"axis_label":"y","formatter":{"id":"a3814a31-717b-46a0-865a-d99e48b9069d","type":"BasicTickFormatter"},"plot":{"id":"1ef60d17-f0db-4c26-a357-80cdbd4866cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d990a14f-10a0-4f8a-a83d-daf76c728a48","type":"BasicTicker"}},"id":"453bb831-f194-4893-9be3-be7d1df4f473","type":"LinearAxis"},{"attributes":{"below":[{"id":"0092139e-71a9-4cef-bd95-b7880274c758","type":"LinearAxis"}],"left":[{"id":"453bb831-f194-4893-9be3-be7d1df4f473","type":"LinearAxis"}],"renderers":[{"id":"0092139e-71a9-4cef-bd95-b7880274c758","type":"LinearAxis"},{"id":"1d6076d8-c624-47f4-89a9-53d95163dcb0","type":"Grid"},{"id":"453bb831-f194-4893-9be3-be7d1df4f473","type":"LinearAxis"},{"id":"888c3fe4-034f-4e24-b0f0-44603422a93e","type":"Grid"},{"id":"6ecdefe2-9199-4051-baf1-e9cf66f6a539","type":"BoxAnnotation"},{"id":"e666f653-b2b5-47ff-b312-76165e75f07c","type":"Legend"},{"id":"fe8adfca-bc0d-4be8-8651-30a4383c8999","type":"GlyphRenderer"}],"title":{"id":"759b3594-93e0-44ad-bc08-e359b62ba6d7","type":"Title"},"toolbar":{"id":"b513462a-d20d-494e-8558-912d0d2d543c","type":"Toolbar"},"x_range":{"id":"dba15e4e-bcf0-4832-9f18-7f8e0e105c3d","type":"DataRange1d"},"x_scale":{"id":"87b0b2aa-d48e-4174-b5bf-9bfebcd938d7","type":"LinearScale"},"y_range":{"id":"3f4fe94a-544e-4b0d-bbdc-16bebe155620","type":"DataRange1d"},"y_scale":{"id":"51a0fa40-5f0e-455d-b75f-54f962a5a251","type":"LinearScale"}},"id":"1ef60d17-f0db-4c26-a357-80cdbd4866cf","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22af5c5c-7ba0-440b-abd8-94f6feb887cc","type":"PanTool"},{"id":"be79a040-a045-44cc-8599-4fca6f32786e","type":"WheelZoomTool"},{"id":"4fb41c5e-27b2-4c49-b812-2f1f61ebf8a3","type":"BoxZoomTool"},{"id":"d95265bd-e5f9-4650-9fef-3a9623c7bda1","type":"SaveTool"},{"id":"d42dbba1-0978-4d5b-98be-fdf14a0a26a6","type":"ResetTool"},{"id":"dff93088-fd3e-4113-9620-8a6c2d3dc137","type":"HelpTool"}]},"id":"b513462a-d20d-494e-8558-912d0d2d543c","type":"Toolbar"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"fe8adfca-bc0d-4be8-8651-30a4383c8999","type":"GlyphRenderer"}]},"id":"b03b17e0-4569-4139-9215-0d209e25c47d","type":"LegendItem"},{"attributes":{},"id":"a3814a31-717b-46a0-865a-d99e48b9069d","type":"BasicTickFormatter"},{"attributes":{},"id":"59eab3b7-8b14-4c4b-ad84-74c996e7fcc1","type":"BasicTickFormatter"},{"attributes":{},"id":"1006af32-0121-4191-845e-8aa3a9d3768b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1ef60d17-f0db-4c26-a357-80cdbd4866cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d990a14f-10a0-4f8a-a83d-daf76c728a48","type":"BasicTicker"}},"id":"888c3fe4-034f-4e24-b0f0-44603422a93e","type":"Grid"},{"attributes":{},"id":"d95265bd-e5f9-4650-9fef-3a9623c7bda1","type":"SaveTool"},{"attributes":{"data_source":{"id":"43b747ef-2d80-4a8e-b7b6-5595ab0770dc","type":"ColumnDataSource"},"glyph":{"id":"839af901-737c-4d5c-bdb6-6f4ea904e8b7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"04f82a25-6412-4a50-9bc8-5f25ee0345ba","type":"Line"},"selection_glyph":null,"view":{"id":"37020514-7101-44ef-80fb-ea7e7d6176fc","type":"CDSView"}},"id":"fe8adfca-bc0d-4be8-8651-30a4383c8999","type":"GlyphRenderer"},{"attributes":{},"id":"51a0fa40-5f0e-455d-b75f-54f962a5a251","type":"LinearScale"},{"attributes":{"axis_label":"x","formatter":{"id":"59eab3b7-8b14-4c4b-ad84-74c996e7fcc1","type":"BasicTickFormatter"},"plot":{"id":"1ef60d17-f0db-4c26-a357-80cdbd4866cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"1006af32-0121-4191-845e-8aa3a9d3768b","type":"BasicTicker"}},"id":"0092139e-71a9-4cef-bd95-b7880274c758","type":"LinearAxis"},{"attributes":{},"id":"3b79a745-6e64-41fc-9771-d1bfec4cad9f","type":"Selection"},{"attributes":{"overlay":{"id":"6ecdefe2-9199-4051-baf1-e9cf66f6a539","type":"BoxAnnotation"}},"id":"4fb41c5e-27b2-4c49-b812-2f1f61ebf8a3","type":"BoxZoomTool"},{"attributes":{},"id":"d990a14f-10a0-4f8a-a83d-daf76c728a48","type":"BasicTicker"},{"attributes":{"plot":{"id":"1ef60d17-f0db-4c26-a357-80cdbd4866cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"1006af32-0121-4191-845e-8aa3a9d3768b","type":"BasicTicker"}},"id":"1d6076d8-c624-47f4-89a9-53d95163dcb0","type":"Grid"},{"attributes":{},"id":"22af5c5c-7ba0-440b-abd8-94f6feb887cc","type":"PanTool"},{"attributes":{"callback":null},"id":"dba15e4e-bcf0-4832-9f18-7f8e0e105c3d","type":"DataRange1d"},{"attributes":{},"id":"dff93088-fd3e-4113-9620-8a6c2d3dc137","type":"HelpTool"},{"attributes":{},"id":"1041700a-6f18-4641-bb26-d92dff4efa05","type":"UnionRenderers"}],"root_ids":["1ef60d17-f0db-4c26-a357-80cdbd4866cf"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"fa59ee92-4bfe-4301-be33-78c1c408bcd3","roots":{"1ef60d17-f0db-4c26-a357-80cdbd4866cf":"c20acf5c-87ae-4ad1-816c-e258dbab9a93"}}];
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