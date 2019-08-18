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
      };var element = document.getElementById("7b8a5ab8-cfbf-4641-9fca-34604a5f7eb2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7b8a5ab8-cfbf-4641-9fca-34604a5f7eb2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8bd34497-f660-4d3f-8812-6d05969692ed":{"roots":{"references":[{"attributes":{},"id":"3ef328d1-2b28-470a-a080-f44d6ecd0f5f","type":"BasicTickFormatter"},{"attributes":{},"id":"d7b86eb4-83b8-4920-92c3-b30bad1d7507","type":"Selection"},{"attributes":{},"id":"7fb827da-0b0b-47d0-8ba7-1763a370cb4d","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"2c8cdd28-af2a-4f4a-bdf7-9e7625d09f80","type":"Title"},{"attributes":{},"id":"ae74ea08-8b62-4585-98d6-745ffeefb039","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4eecff2-5442-4693-8b72-85a0ff19d9cc","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"d7b86eb4-83b8-4920-92c3-b30bad1d7507","type":"Selection"},"selection_policy":{"id":"70ded867-28e8-48f9-aa2f-a7bde5ad2c46","type":"UnionRenderers"}},"id":"31c5a67a-2396-4cf5-af0a-1dbd02bcb6f3","type":"ColumnDataSource"},{"attributes":{},"id":"78926a9e-a441-4d65-9004-1d3e39ba89fb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2cc34f4a-f1fd-4211-88e1-4199b7801534","type":"DataRange1d"},{"attributes":{"overlay":{"id":"8813e57f-6aa0-4960-b151-1065b141fbbf","type":"BoxAnnotation"}},"id":"df63797b-3495-4dcb-8e8c-8194715e7e0c","type":"BoxZoomTool"},{"attributes":{},"id":"586fcb53-6c44-45dd-9eca-c3f11d35e79e","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8813e57f-6aa0-4960-b151-1065b141fbbf","type":"BoxAnnotation"},{"attributes":{},"id":"2a75fae0-0dcf-4109-a0e6-448dde631366","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"ae74ea08-8b62-4585-98d6-745ffeefb039","type":"PanTool"},{"id":"953ea8ea-4e74-4192-b017-a3ea4486a463","type":"WheelZoomTool"},{"id":"df63797b-3495-4dcb-8e8c-8194715e7e0c","type":"BoxZoomTool"},{"id":"90f4c551-41e8-4bcf-9b83-4cf29500c8fe","type":"SaveTool"},{"id":"981ce495-9376-4bc3-843d-adabdde788a8","type":"ResetTool"},{"id":"b56447d7-5f96-4e9a-bd3d-438a6a3e21cb","type":"HelpTool"}]},"id":"067d3e03-3285-44e4-9eaa-4f4f0808ea3d","type":"Toolbar"},{"attributes":{"formatter":{"id":"7fb827da-0b0b-47d0-8ba7-1763a370cb4d","type":"BasicTickFormatter"},"plot":{"id":"2024c4c1-a2ed-494b-8638-44a7fe53b995","subtype":"Figure","type":"Plot"},"ticker":{"id":"78926a9e-a441-4d65-9004-1d3e39ba89fb","type":"BasicTicker"}},"id":"7204f9f1-9e40-42e7-85de-0e3c5f6b8f4f","type":"LinearAxis"},{"attributes":{"source":{"id":"31c5a67a-2396-4cf5-af0a-1dbd02bcb6f3","type":"ColumnDataSource"}},"id":"740163c4-2b7b-4f19-a7a0-43e1c718429f","type":"CDSView"},{"attributes":{},"id":"953ea8ea-4e74-4192-b017-a3ea4486a463","type":"WheelZoomTool"},{"attributes":{},"id":"ab21130b-0fa4-401e-ab0b-d34dd98f02a5","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"52221047-399c-40b2-970a-ddd63598623a","type":"Circle"},{"attributes":{"plot":{"id":"2024c4c1-a2ed-494b-8638-44a7fe53b995","subtype":"Figure","type":"Plot"},"ticker":{"id":"586fcb53-6c44-45dd-9eca-c3f11d35e79e","type":"BasicTicker"}},"id":"35591461-4cab-4519-8ba3-44a3ce8486c9","type":"Grid"},{"attributes":{"data_source":{"id":"31c5a67a-2396-4cf5-af0a-1dbd02bcb6f3","type":"ColumnDataSource"},"glyph":{"id":"52221047-399c-40b2-970a-ddd63598623a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b4eecff2-5442-4693-8b72-85a0ff19d9cc","type":"Circle"},"selection_glyph":null,"view":{"id":"740163c4-2b7b-4f19-a7a0-43e1c718429f","type":"CDSView"}},"id":"cc497a66-053c-44db-8e02-51523569113f","type":"GlyphRenderer"},{"attributes":{},"id":"981ce495-9376-4bc3-843d-adabdde788a8","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"2024c4c1-a2ed-494b-8638-44a7fe53b995","subtype":"Figure","type":"Plot"},"ticker":{"id":"78926a9e-a441-4d65-9004-1d3e39ba89fb","type":"BasicTicker"}},"id":"83fe1511-368c-44a9-8437-5ec0df46b8a1","type":"Grid"},{"attributes":{"below":[{"id":"471677a8-b67f-427d-a135-ce0406109a58","type":"LinearAxis"}],"left":[{"id":"7204f9f1-9e40-42e7-85de-0e3c5f6b8f4f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"471677a8-b67f-427d-a135-ce0406109a58","type":"LinearAxis"},{"id":"35591461-4cab-4519-8ba3-44a3ce8486c9","type":"Grid"},{"id":"7204f9f1-9e40-42e7-85de-0e3c5f6b8f4f","type":"LinearAxis"},{"id":"83fe1511-368c-44a9-8437-5ec0df46b8a1","type":"Grid"},{"id":"8813e57f-6aa0-4960-b151-1065b141fbbf","type":"BoxAnnotation"},{"id":"cc497a66-053c-44db-8e02-51523569113f","type":"GlyphRenderer"}],"title":{"id":"2c8cdd28-af2a-4f4a-bdf7-9e7625d09f80","type":"Title"},"toolbar":{"id":"067d3e03-3285-44e4-9eaa-4f4f0808ea3d","type":"Toolbar"},"x_range":{"id":"3713f27a-e447-4f62-aa3f-b0016d44c625","type":"DataRange1d"},"x_scale":{"id":"ab21130b-0fa4-401e-ab0b-d34dd98f02a5","type":"LinearScale"},"y_range":{"id":"2cc34f4a-f1fd-4211-88e1-4199b7801534","type":"DataRange1d"},"y_scale":{"id":"2a75fae0-0dcf-4109-a0e6-448dde631366","type":"LinearScale"}},"id":"2024c4c1-a2ed-494b-8638-44a7fe53b995","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"3ef328d1-2b28-470a-a080-f44d6ecd0f5f","type":"BasicTickFormatter"},"plot":{"id":"2024c4c1-a2ed-494b-8638-44a7fe53b995","subtype":"Figure","type":"Plot"},"ticker":{"id":"586fcb53-6c44-45dd-9eca-c3f11d35e79e","type":"BasicTicker"}},"id":"471677a8-b67f-427d-a135-ce0406109a58","type":"LinearAxis"},{"attributes":{},"id":"70ded867-28e8-48f9-aa2f-a7bde5ad2c46","type":"UnionRenderers"},{"attributes":{},"id":"b56447d7-5f96-4e9a-bd3d-438a6a3e21cb","type":"HelpTool"},{"attributes":{"callback":null},"id":"3713f27a-e447-4f62-aa3f-b0016d44c625","type":"DataRange1d"},{"attributes":{},"id":"90f4c551-41e8-4bcf-9b83-4cf29500c8fe","type":"SaveTool"}],"root_ids":["2024c4c1-a2ed-494b-8638-44a7fe53b995"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"8bd34497-f660-4d3f-8812-6d05969692ed","roots":{"2024c4c1-a2ed-494b-8638-44a7fe53b995":"7b8a5ab8-cfbf-4641-9fca-34604a5f7eb2"}}];
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