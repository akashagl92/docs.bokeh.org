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
      };var element = document.getElementById("7e9d49b4-dd66-4ad4-b047-18d320bb42ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7e9d49b4-dd66-4ad4-b047-18d320bb42ed' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f20fae97-39bf-4db1-9085-c577f1bf298f":{"roots":{"references":[{"attributes":{},"id":"e3f26596-9e5d-46c1-8b21-c0aec2ab1791","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7be0c794-9a50-4c83-8662-e3159784c8b6","type":"PanTool"},{"id":"6c387d50-1cea-49a3-9b07-321e11ce4a93","type":"WheelZoomTool"},{"id":"bcfaacfc-069d-4149-b3bd-58b23ff364f6","type":"BoxZoomTool"},{"id":"8e3ac165-31e9-41ed-a7a9-35867bef82b3","type":"SaveTool"},{"id":"bbfa7820-9dee-42e3-9b51-beb3df1fcdf4","type":"ResetTool"},{"id":"b9564d24-7905-4fb9-8e6b-c180f179f39c","type":"HelpTool"}]},"id":"9157763a-e8d7-48e1-8174-35f9087326cd","type":"Toolbar"},{"attributes":{"source":{"id":"0301c3bb-9086-4bf6-a47f-329905347074","type":"ColumnDataSource"}},"id":"1e5951de-6e3a-4b64-a49b-fad968cad07b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"902c2517-0daf-43b7-9214-f261b44212f7","type":"Circle"},{"attributes":{},"id":"692f83b7-3af1-4abe-9729-b85091808ba9","type":"BasicTicker"},{"attributes":{},"id":"882fbc9d-1ec1-41d4-bb8a-86d957e8d46f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6976f4f0-c32a-460d-b72b-dbfc1809c9e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"882fbc9d-1ec1-41d4-bb8a-86d957e8d46f","type":"BasicTicker"}},"id":"7b33b2d6-fe76-4618-8286-033611c1a31f","type":"Grid"},{"attributes":{"formatter":{"id":"9ac85d71-7a0b-4f25-b013-635a66429244","type":"BasicTickFormatter"},"plot":{"id":"6976f4f0-c32a-460d-b72b-dbfc1809c9e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"882fbc9d-1ec1-41d4-bb8a-86d957e8d46f","type":"BasicTicker"}},"id":"b99c81bf-d8f8-4905-b058-ccecad0e5f29","type":"LinearAxis"},{"attributes":{},"id":"6759c04b-c1e0-43fb-bd3c-864f693ff908","type":"LinearScale"},{"attributes":{"data_source":{"id":"0301c3bb-9086-4bf6-a47f-329905347074","type":"ColumnDataSource"},"glyph":{"id":"7b7489c4-42cf-4cce-a30b-f722caeddfb0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"902c2517-0daf-43b7-9214-f261b44212f7","type":"Circle"},"selection_glyph":null,"view":{"id":"1e5951de-6e3a-4b64-a49b-fad968cad07b","type":"CDSView"}},"id":"2ef9297d-004e-4116-b117-9355099d9171","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b7489c4-42cf-4cce-a30b-f722caeddfb0","type":"Circle"},{"attributes":{},"id":"9ac85d71-7a0b-4f25-b013-635a66429244","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d71a6ad1-f7c1-4995-96e9-32d0aaa75231","type":"DataRange1d"},{"attributes":{},"id":"6dc0686f-2bf4-4207-95a1-98a5efb7b2d7","type":"BasicTickFormatter"},{"attributes":{},"id":"8e3ac165-31e9-41ed-a7a9-35867bef82b3","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"64e9da19-df8b-498f-979e-b7c40fd79680","type":"BoxAnnotation"},{"attributes":{},"id":"bbfa7820-9dee-42e3-9b51-beb3df1fcdf4","type":"ResetTool"},{"attributes":{},"id":"7be0c794-9a50-4c83-8662-e3159784c8b6","type":"PanTool"},{"attributes":{"plot":{"id":"6976f4f0-c32a-460d-b72b-dbfc1809c9e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"692f83b7-3af1-4abe-9729-b85091808ba9","type":"BasicTicker"}},"id":"58352da1-9dd9-4fc9-b696-f7a040981f18","type":"Grid"},{"attributes":{},"id":"6c387d50-1cea-49a3-9b07-321e11ce4a93","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"64e9da19-df8b-498f-979e-b7c40fd79680","type":"BoxAnnotation"}},"id":"bcfaacfc-069d-4149-b3bd-58b23ff364f6","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"ef01705c-6979-4595-bc71-21c013b12a8e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6dc0686f-2bf4-4207-95a1-98a5efb7b2d7","type":"BasicTickFormatter"},"plot":{"id":"6976f4f0-c32a-460d-b72b-dbfc1809c9e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"692f83b7-3af1-4abe-9729-b85091808ba9","type":"BasicTicker"}},"id":"39efaf14-84ec-4b19-ac53-59189b256ef9","type":"LinearAxis"},{"attributes":{},"id":"b9564d24-7905-4fb9-8e6b-c180f179f39c","type":"HelpTool"},{"attributes":{},"id":"86c386f2-800e-4057-b70f-4e46ded1d12b","type":"Selection"},{"attributes":{},"id":"4c96942b-635b-44d9-9dd9-c5ca1e2be827","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"86c386f2-800e-4057-b70f-4e46ded1d12b","type":"Selection"},"selection_policy":{"id":"e3f26596-9e5d-46c1-8b21-c0aec2ab1791","type":"UnionRenderers"}},"id":"0301c3bb-9086-4bf6-a47f-329905347074","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"39efaf14-84ec-4b19-ac53-59189b256ef9","type":"LinearAxis"}],"left":[{"id":"b99c81bf-d8f8-4905-b058-ccecad0e5f29","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"39efaf14-84ec-4b19-ac53-59189b256ef9","type":"LinearAxis"},{"id":"58352da1-9dd9-4fc9-b696-f7a040981f18","type":"Grid"},{"id":"b99c81bf-d8f8-4905-b058-ccecad0e5f29","type":"LinearAxis"},{"id":"7b33b2d6-fe76-4618-8286-033611c1a31f","type":"Grid"},{"id":"64e9da19-df8b-498f-979e-b7c40fd79680","type":"BoxAnnotation"},{"id":"2ef9297d-004e-4116-b117-9355099d9171","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9157763a-e8d7-48e1-8174-35f9087326cd","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"ef01705c-6979-4595-bc71-21c013b12a8e","type":"DataRange1d"},"x_scale":{"id":"6759c04b-c1e0-43fb-bd3c-864f693ff908","type":"LinearScale"},"y_range":{"id":"d71a6ad1-f7c1-4995-96e9-32d0aaa75231","type":"DataRange1d"},"y_scale":{"id":"4c96942b-635b-44d9-9dd9-c5ca1e2be827","type":"LinearScale"}},"id":"6976f4f0-c32a-460d-b72b-dbfc1809c9e8","subtype":"Figure","type":"Plot"}],"root_ids":["6976f4f0-c32a-460d-b72b-dbfc1809c9e8"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f20fae97-39bf-4db1-9085-c577f1bf298f","roots":{"6976f4f0-c32a-460d-b72b-dbfc1809c9e8":"7e9d49b4-dd66-4ad4-b047-18d320bb42ed"}}];
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