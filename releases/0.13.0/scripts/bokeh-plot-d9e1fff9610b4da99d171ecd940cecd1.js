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
      };var element = document.getElementById("863d2aa7-832a-4972-afdc-583ecdb5ccc0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '863d2aa7-832a-4972-afdc-583ecdb5ccc0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"32aaaf48-b154-4ba7-b049-f9cda4839f2b":{"roots":{"references":[{"attributes":{},"id":"3f9272ed-717d-48e6-9e41-cdba6cd5b435","type":"ResetTool"},{"attributes":{},"id":"1f1a14f2-7db1-44af-b34d-1321095f0380","type":"BasicTickFormatter"},{"attributes":{},"id":"9d833549-f326-4c45-9a3b-b7384e5381a5","type":"UnionRenderers"},{"attributes":{},"id":"4215709d-e5b9-449c-b93f-4b6d43321e14","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"ed668787-ca97-4023-8569-bae5395434c7","type":"Title"},{"attributes":{"callback":null,"end":20},"id":"62220d64-83f5-49d0-b9af-5bcaf07be90e","type":"Range1d"},{"attributes":{},"id":"d0e6716e-b502-4469-8561-72ebca75bf80","type":"LinearScale"},{"attributes":{},"id":"4b40eeeb-efaa-435a-9f6d-d8ae772bf86c","type":"Selection"},{"attributes":{},"id":"4685be15-1a5f-4c6a-a7ea-5c45830357e3","type":"WheelZoomTool"},{"attributes":{},"id":"1ebbfdd2-d8d8-4599-8da5-872f4ef5a891","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c8a7923c-d016-498f-9b4d-6feae29e8b8a","type":"ColumnDataSource"},"glyph":{"id":"6781d16e-32c0-4091-a728-2608524ba1e4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"80ed45ce-5bb0-4887-8e60-4fb57d75952e","type":"Circle"},"selection_glyph":null,"view":{"id":"3a6682be-730a-408b-9f6c-3a1a72c855cb","type":"CDSView"}},"id":"24851858-3ded-49e4-926f-d4653cf8f886","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c8a7923c-d016-498f-9b4d-6feae29e8b8a","type":"ColumnDataSource"}},"id":"3a6682be-730a-408b-9f6c-3a1a72c855cb","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"4b40eeeb-efaa-435a-9f6d-d8ae772bf86c","type":"Selection"},"selection_policy":{"id":"9d833549-f326-4c45-9a3b-b7384e5381a5","type":"UnionRenderers"}},"id":"c8a7923c-d016-498f-9b4d-6feae29e8b8a","type":"ColumnDataSource"},{"attributes":{},"id":"915ac940-eecc-46c4-beb4-1d3de73c806a","type":"PanTool"},{"attributes":{"overlay":{"id":"3adfcae3-932c-4c94-bf7d-60cfe159bfbf","type":"BoxAnnotation"}},"id":"e06fe8ae-6c92-4c1b-8ab6-2d1e2390bf16","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":15},"id":"39f1e017-f323-4344-a1f0-bba1d69ef43e","type":"Range1d"},{"attributes":{"formatter":{"id":"0dba39ab-9474-42d1-92cd-c6663f6eb7a0","type":"BasicTickFormatter"},"plot":{"id":"ffdc4129-af27-4431-aa99-3bc391b0dd7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ebbfdd2-d8d8-4599-8da5-872f4ef5a891","type":"BasicTicker"}},"id":"cb3df717-8412-4cad-98e3-f804cebae1b5","type":"LinearAxis"},{"attributes":{},"id":"0dba39ab-9474-42d1-92cd-c6663f6eb7a0","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"80ed45ce-5bb0-4887-8e60-4fb57d75952e","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"915ac940-eecc-46c4-beb4-1d3de73c806a","type":"PanTool"},{"id":"4685be15-1a5f-4c6a-a7ea-5c45830357e3","type":"WheelZoomTool"},{"id":"e06fe8ae-6c92-4c1b-8ab6-2d1e2390bf16","type":"BoxZoomTool"},{"id":"e7045275-70e0-465d-a735-da94e3b7c3db","type":"SaveTool"},{"id":"3f9272ed-717d-48e6-9e41-cdba6cd5b435","type":"ResetTool"},{"id":"b85ee129-8d16-4f25-a809-b96600cb8ed5","type":"HelpTool"}]},"id":"a848fe2b-0991-4ccb-9734-325a366f07e0","type":"Toolbar"},{"attributes":{},"id":"a3c2219b-c133-4311-bcda-567f911f6b75","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6781d16e-32c0-4091-a728-2608524ba1e4","type":"Circle"},{"attributes":{"formatter":{"id":"1f1a14f2-7db1-44af-b34d-1321095f0380","type":"BasicTickFormatter"},"plot":{"id":"ffdc4129-af27-4431-aa99-3bc391b0dd7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4215709d-e5b9-449c-b93f-4b6d43321e14","type":"BasicTicker"}},"id":"e3143dbd-472a-4efc-9f67-19f7c2b753e1","type":"LinearAxis"},{"attributes":{},"id":"e7045275-70e0-465d-a735-da94e3b7c3db","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"ffdc4129-af27-4431-aa99-3bc391b0dd7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4215709d-e5b9-449c-b93f-4b6d43321e14","type":"BasicTicker"}},"id":"7eb2d259-800d-4758-9f42-3a8aa3d75912","type":"Grid"},{"attributes":{},"id":"b85ee129-8d16-4f25-a809-b96600cb8ed5","type":"HelpTool"},{"attributes":{"below":[{"id":"cb3df717-8412-4cad-98e3-f804cebae1b5","type":"LinearAxis"}],"left":[{"id":"e3143dbd-472a-4efc-9f67-19f7c2b753e1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cb3df717-8412-4cad-98e3-f804cebae1b5","type":"LinearAxis"},{"id":"d0d8ae3c-e5a9-4cb8-9141-f35ef9ee0c89","type":"Grid"},{"id":"e3143dbd-472a-4efc-9f67-19f7c2b753e1","type":"LinearAxis"},{"id":"7eb2d259-800d-4758-9f42-3a8aa3d75912","type":"Grid"},{"id":"3adfcae3-932c-4c94-bf7d-60cfe159bfbf","type":"BoxAnnotation"},{"id":"24851858-3ded-49e4-926f-d4653cf8f886","type":"GlyphRenderer"}],"title":{"id":"ed668787-ca97-4023-8569-bae5395434c7","type":"Title"},"toolbar":{"id":"a848fe2b-0991-4ccb-9734-325a366f07e0","type":"Toolbar"},"x_range":{"id":"62220d64-83f5-49d0-b9af-5bcaf07be90e","type":"Range1d"},"x_scale":{"id":"d0e6716e-b502-4469-8561-72ebca75bf80","type":"LinearScale"},"y_range":{"id":"39f1e017-f323-4344-a1f0-bba1d69ef43e","type":"Range1d"},"y_scale":{"id":"a3c2219b-c133-4311-bcda-567f911f6b75","type":"LinearScale"}},"id":"ffdc4129-af27-4431-aa99-3bc391b0dd7b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"ffdc4129-af27-4431-aa99-3bc391b0dd7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ebbfdd2-d8d8-4599-8da5-872f4ef5a891","type":"BasicTicker"}},"id":"d0d8ae3c-e5a9-4cb8-9141-f35ef9ee0c89","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3adfcae3-932c-4c94-bf7d-60cfe159bfbf","type":"BoxAnnotation"}],"root_ids":["ffdc4129-af27-4431-aa99-3bc391b0dd7b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"32aaaf48-b154-4ba7-b049-f9cda4839f2b","roots":{"ffdc4129-af27-4431-aa99-3bc391b0dd7b":"863d2aa7-832a-4972-afdc-583ecdb5ccc0"}}];
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