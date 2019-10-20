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
      };var element = document.getElementById("9cc545f7-8f2b-4101-801b-902e7262a695");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9cc545f7-8f2b-4101-801b-902e7262a695' but no matching script tag was found. ")
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
                    var docs_json = {"2796d49f-50b2-419d-9d52-e8e2db3415d6":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8f5c0ab-4339-439b-add4-875f4d64990f","type":"Patch"},{"attributes":{"plot":null,"text":""},"id":"97aa8bf3-1a54-49ff-9052-7c8ff1fb1627","type":"Title"},{"attributes":{},"id":"79365216-75be-4983-b2f8-248642013076","type":"WheelZoomTool"},{"attributes":{"source":{"id":"b5a6842d-8e73-42e7-870d-3a1265262551","type":"ColumnDataSource"}},"id":"4fe06728-59f1-4ab8-8f14-a559e4cef23b","type":"CDSView"},{"attributes":{"callback":null},"id":"443a09c0-81ed-4b78-9f3b-5fe777240138","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1abe10cf-2823-4d04-8fd3-b5bd6bf13778","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"b5a6842d-8e73-42e7-870d-3a1265262551","type":"ColumnDataSource"},"glyph":{"id":"a8f5c0ab-4339-439b-add4-875f4d64990f","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cbe21e7a-d201-4278-b888-85cdb90ec88e","type":"Patch"},"selection_glyph":null,"view":{"id":"4fe06728-59f1-4ab8-8f14-a559e4cef23b","type":"CDSView"}},"id":"b4ddfb9d-5836-481b-8ae2-d794438af198","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"659e62fb-62af-4489-960e-f91883c8df84","type":"PanTool"},{"id":"79365216-75be-4983-b2f8-248642013076","type":"WheelZoomTool"},{"id":"debd05aa-b1bb-4a1e-b841-03024342cd01","type":"BoxZoomTool"},{"id":"9fe8d68d-5e62-43cd-8bf7-6a0169179d5a","type":"SaveTool"},{"id":"a33827ac-27f9-4e34-886b-826af2e61dfb","type":"ResetTool"},{"id":"b00a9c4b-f7b8-431f-ad5c-d30d665380d1","type":"HelpTool"}]},"id":"591c6323-5b40-41d5-bc80-74fff7d62e3c","type":"Toolbar"},{"attributes":{},"id":"9fe8d68d-5e62-43cd-8bf7-6a0169179d5a","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"ef0cc316-800b-4df5-bee6-8ef1b5673440","subtype":"Figure","type":"Plot"},"ticker":{"id":"aad721a0-69a8-4ae7-9311-9d0e5b2b62a4","type":"BasicTicker"}},"id":"e3184faa-b19f-4963-a1ee-0539ccbb9b39","type":"Grid"},{"attributes":{"formatter":{"id":"d74f0be7-4d6b-4c19-8a7a-ee958a6072db","type":"BasicTickFormatter"},"plot":{"id":"ef0cc316-800b-4df5-bee6-8ef1b5673440","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3d6f3af-f3cc-4e32-8127-e88cc025aff1","type":"BasicTicker"}},"id":"c186fa77-1716-42ca-87d2-df1adee83828","type":"LinearAxis"},{"attributes":{},"id":"659e62fb-62af-4489-960e-f91883c8df84","type":"PanTool"},{"attributes":{},"id":"aad721a0-69a8-4ae7-9311-9d0e5b2b62a4","type":"BasicTicker"},{"attributes":{"below":[{"id":"c186fa77-1716-42ca-87d2-df1adee83828","type":"LinearAxis"}],"left":[{"id":"88b6a4a1-9976-4c89-99fc-6ccb1a1553ca","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c186fa77-1716-42ca-87d2-df1adee83828","type":"LinearAxis"},{"id":"0f47d963-b1c0-4a94-9385-c68459b79297","type":"Grid"},{"id":"88b6a4a1-9976-4c89-99fc-6ccb1a1553ca","type":"LinearAxis"},{"id":"e3184faa-b19f-4963-a1ee-0539ccbb9b39","type":"Grid"},{"id":"1abe10cf-2823-4d04-8fd3-b5bd6bf13778","type":"BoxAnnotation"},{"id":"b4ddfb9d-5836-481b-8ae2-d794438af198","type":"GlyphRenderer"}],"title":{"id":"97aa8bf3-1a54-49ff-9052-7c8ff1fb1627","type":"Title"},"toolbar":{"id":"591c6323-5b40-41d5-bc80-74fff7d62e3c","type":"Toolbar"},"x_range":{"id":"443a09c0-81ed-4b78-9f3b-5fe777240138","type":"DataRange1d"},"x_scale":{"id":"060eaeab-8936-4822-858c-6e61f1127600","type":"LinearScale"},"y_range":{"id":"43378388-8443-4205-ad53-58c3ff644355","type":"DataRange1d"},"y_scale":{"id":"419fa0bf-bd11-42d3-bc40-50cab9ca035a","type":"LinearScale"}},"id":"ef0cc316-800b-4df5-bee6-8ef1b5673440","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"1abe10cf-2823-4d04-8fd3-b5bd6bf13778","type":"BoxAnnotation"}},"id":"debd05aa-b1bb-4a1e-b841-03024342cd01","type":"BoxZoomTool"},{"attributes":{},"id":"a33827ac-27f9-4e34-886b-826af2e61dfb","type":"ResetTool"},{"attributes":{},"id":"d74f0be7-4d6b-4c19-8a7a-ee958a6072db","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ef0cc316-800b-4df5-bee6-8ef1b5673440","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3d6f3af-f3cc-4e32-8127-e88cc025aff1","type":"BasicTicker"}},"id":"0f47d963-b1c0-4a94-9385-c68459b79297","type":"Grid"},{"attributes":{"callback":null},"id":"43378388-8443-4205-ad53-58c3ff644355","type":"DataRange1d"},{"attributes":{},"id":"b00a9c4b-f7b8-431f-ad5c-d30d665380d1","type":"HelpTool"},{"attributes":{},"id":"060eaeab-8936-4822-858c-6e61f1127600","type":"LinearScale"},{"attributes":{},"id":"a7b8ebd2-7016-4c17-9d05-b71f9d6fbe18","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]}},"id":"b5a6842d-8e73-42e7-870d-3a1265262551","type":"ColumnDataSource"},{"attributes":{},"id":"e3d6f3af-f3cc-4e32-8127-e88cc025aff1","type":"BasicTicker"},{"attributes":{},"id":"419fa0bf-bd11-42d3-bc40-50cab9ca035a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"cbe21e7a-d201-4278-b888-85cdb90ec88e","type":"Patch"},{"attributes":{"formatter":{"id":"a7b8ebd2-7016-4c17-9d05-b71f9d6fbe18","type":"BasicTickFormatter"},"plot":{"id":"ef0cc316-800b-4df5-bee6-8ef1b5673440","subtype":"Figure","type":"Plot"},"ticker":{"id":"aad721a0-69a8-4ae7-9311-9d0e5b2b62a4","type":"BasicTicker"}},"id":"88b6a4a1-9976-4c89-99fc-6ccb1a1553ca","type":"LinearAxis"}],"root_ids":["ef0cc316-800b-4df5-bee6-8ef1b5673440"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"2796d49f-50b2-419d-9d52-e8e2db3415d6","elementid":"9cc545f7-8f2b-4101-801b-902e7262a695","modelid":"ef0cc316-800b-4df5-bee6-8ef1b5673440"}];
                
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
