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
      };var element = document.getElementById("91b07585-cfa7-4f95-a3ab-81c9de2d9358");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91b07585-cfa7-4f95-a3ab-81c9de2d9358' but no matching script tag was found. ")
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
                    var docs_json = {"57556582-2319-403b-a69d-e1d4b47a20a0":{"roots":{"references":[{"attributes":{"data_source":{"id":"b028f270-e845-4598-8bb5-ff0f72d0f55a","type":"ColumnDataSource"},"glyph":{"id":"af9880b2-1008-49d5-b05b-d64ff568a138","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87783a07-fe43-4dc3-84e4-1339b15e92f1","type":"Circle"},"selection_glyph":null,"view":{"id":"c8c2c656-05dc-47a7-bd42-6e5db9f86456","type":"CDSView"}},"id":"5b8e9b8a-52ed-46d7-b579-1c1785db9101","type":"GlyphRenderer"},{"attributes":{},"id":"c57dff9b-cc57-4d19-82af-01c00ce211ea","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"beae7996-938e-43bf-80ca-c9938f0749fa","type":"Title"},{"attributes":{},"id":"bbd36c1d-0946-4bba-be24-98195695ba75","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b6cf377c-15f3-4e24-bc03-44820e30a4c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"acc91082-9b65-4545-aefc-b9f566ba37cb","type":"BasicTicker"}},"id":"939d8c26-e9bf-4920-8ca1-9f79c42899d5","type":"Grid"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"d4ff3f84-fc37-44aa-96c8-c46f6c0c81c8","type":"LinearAxis"}],"left":[{"id":"ab4aea0d-47ea-486e-93b9-b0a37895e499","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d4ff3f84-fc37-44aa-96c8-c46f6c0c81c8","type":"LinearAxis"},{"id":"939d8c26-e9bf-4920-8ca1-9f79c42899d5","type":"Grid"},{"id":"ab4aea0d-47ea-486e-93b9-b0a37895e499","type":"LinearAxis"},{"id":"76d8fdad-fa5c-4642-af06-ec5e9e2c0eb8","type":"Grid"},{"id":"28c832f9-9689-4248-8a65-7ba1361c108d","type":"BoxAnnotation"},{"id":"5b8e9b8a-52ed-46d7-b579-1c1785db9101","type":"GlyphRenderer"}],"title":{"id":"beae7996-938e-43bf-80ca-c9938f0749fa","type":"Title"},"toolbar":{"id":"aca93d30-de1b-429b-afe1-6b3bc368d7b2","type":"Toolbar"},"x_range":{"id":"3eee0fe8-00a5-4559-889e-4fe6ce26113d","type":"DataRange1d"},"x_scale":{"id":"a4074ccb-77c0-477b-a8bf-3fca2561d728","type":"LinearScale"},"y_range":{"id":"6a2ad188-0caf-4ffb-b4c9-0db1b242f56d","type":"DataRange1d"},"y_scale":{"id":"f1e1d0fb-e5bf-4e87-8646-781d306159ee","type":"LinearScale"}},"id":"b6cf377c-15f3-4e24-bc03-44820e30a4c1","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"3eee0fe8-00a5-4559-889e-4fe6ce26113d","type":"DataRange1d"},{"attributes":{},"id":"f2ef12c9-ff07-47d7-8689-1a2db12d0710","type":"HelpTool"},{"attributes":{"formatter":{"id":"14b41fa1-e38c-4afb-9ae1-6cdcd65c4e4f","type":"BasicTickFormatter"},"plot":{"id":"b6cf377c-15f3-4e24-bc03-44820e30a4c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"acc91082-9b65-4545-aefc-b9f566ba37cb","type":"BasicTicker"}},"id":"d4ff3f84-fc37-44aa-96c8-c46f6c0c81c8","type":"LinearAxis"},{"attributes":{},"id":"acc91082-9b65-4545-aefc-b9f566ba37cb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6a2ad188-0caf-4ffb-b4c9-0db1b242f56d","type":"DataRange1d"},{"attributes":{},"id":"14b41fa1-e38c-4afb-9ae1-6cdcd65c4e4f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"87783a07-fe43-4dc3-84e4-1339b15e92f1","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"b028f270-e845-4598-8bb5-ff0f72d0f55a","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"28c832f9-9689-4248-8a65-7ba1361c108d","type":"BoxAnnotation"}},"id":"dcc60121-6251-480c-9529-3d3a5b4c7d43","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"b6cf377c-15f3-4e24-bc03-44820e30a4c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"c57dff9b-cc57-4d19-82af-01c00ce211ea","type":"BasicTicker"}},"id":"76d8fdad-fa5c-4642-af06-ec5e9e2c0eb8","type":"Grid"},{"attributes":{},"id":"f1e1d0fb-e5bf-4e87-8646-781d306159ee","type":"LinearScale"},{"attributes":{},"id":"8203bccd-0983-432c-9661-4a5b59931b0d","type":"PanTool"},{"attributes":{},"id":"e6005bf7-f914-493f-9942-64eb0997e7bb","type":"ResetTool"},{"attributes":{"source":{"id":"b028f270-e845-4598-8bb5-ff0f72d0f55a","type":"ColumnDataSource"}},"id":"c8c2c656-05dc-47a7-bd42-6e5db9f86456","type":"CDSView"},{"attributes":{},"id":"4e04e5d2-dd19-43e3-a672-89f41b595ab5","type":"BasicTickFormatter"},{"attributes":{},"id":"8c23c7a7-d308-482a-8040-c4e6fa8caf21","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8203bccd-0983-432c-9661-4a5b59931b0d","type":"PanTool"},{"id":"bbd36c1d-0946-4bba-be24-98195695ba75","type":"WheelZoomTool"},{"id":"dcc60121-6251-480c-9529-3d3a5b4c7d43","type":"BoxZoomTool"},{"id":"8c23c7a7-d308-482a-8040-c4e6fa8caf21","type":"SaveTool"},{"id":"e6005bf7-f914-493f-9942-64eb0997e7bb","type":"ResetTool"},{"id":"f2ef12c9-ff07-47d7-8689-1a2db12d0710","type":"HelpTool"}]},"id":"aca93d30-de1b-429b-afe1-6b3bc368d7b2","type":"Toolbar"},{"attributes":{"formatter":{"id":"4e04e5d2-dd19-43e3-a672-89f41b595ab5","type":"BasicTickFormatter"},"plot":{"id":"b6cf377c-15f3-4e24-bc03-44820e30a4c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"c57dff9b-cc57-4d19-82af-01c00ce211ea","type":"BasicTicker"}},"id":"ab4aea0d-47ea-486e-93b9-b0a37895e499","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"af9880b2-1008-49d5-b05b-d64ff568a138","type":"Circle"},{"attributes":{},"id":"a4074ccb-77c0-477b-a8bf-3fca2561d728","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28c832f9-9689-4248-8a65-7ba1361c108d","type":"BoxAnnotation"}],"root_ids":["b6cf377c-15f3-4e24-bc03-44820e30a4c1"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"57556582-2319-403b-a69d-e1d4b47a20a0","elementid":"91b07585-cfa7-4f95-a3ab-81c9de2d9358","modelid":"b6cf377c-15f3-4e24-bc03-44820e30a4c1"}];
                
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
