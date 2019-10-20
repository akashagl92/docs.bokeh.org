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
      };var element = document.getElementById("60c713d7-0be7-4bb2-8e23-036743579d14");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '60c713d7-0be7-4bb2-8e23-036743579d14' but no matching script tag was found. ")
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
                    var docs_json = {"a7d7ef34-6b93-42dd-b310-ce09df77a360":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"94a91a9d-ee18-4d78-b6c0-ad73ddfe52fd","type":"Circle"},{"attributes":{"callback":null},"id":"65713f4f-cb9f-4dec-95a0-9f502e2483db","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"73654f12-2917-4f29-92ab-ccc286ea8aca","type":"BoxAnnotation"},{"attributes":{},"id":"cd5277a2-1341-4e8d-afe7-641cc960f9ed","type":"LinearScale"},{"attributes":{"plot":{"id":"5f21f19f-8415-42b9-a231-beb59c9f5ee4","subtype":"Figure","type":"Plot"},"ticker":{"id":"40826e67-13aa-480e-85cb-ea2da2086730","type":"BasicTicker"}},"id":"9fa960f4-2aa7-4449-a4c3-e9dee28f9bf9","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c50e20f8-6790-48ac-a7fc-8b9d04d8328e","type":"Circle"},{"attributes":{"format":"%4.1e"},"id":"06131c81-0d62-4044-b529-80a8d09afaee","type":"PrintfTickFormatter"},{"attributes":{},"id":"58771bc4-850e-4ec7-89af-10110096a50a","type":"LinearScale"},{"attributes":{},"id":"3fdda22a-ac12-4a66-ac7e-2e052dee5414","type":"ResetTool"},{"attributes":{"formatter":{"id":"06131c81-0d62-4044-b529-80a8d09afaee","type":"PrintfTickFormatter"},"plot":{"id":"5f21f19f-8415-42b9-a231-beb59c9f5ee4","subtype":"Figure","type":"Plot"},"ticker":{"id":"40826e67-13aa-480e-85cb-ea2da2086730","type":"BasicTicker"}},"id":"8b26575c-3b7c-454b-850f-59ce1a53f524","type":"LinearAxis"},{"attributes":{},"id":"23faf49a-f6dc-4fe4-9481-d65c54cb6e63","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6862bda9-a05b-4133-b785-4ee7a4e2771e","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"73654f12-2917-4f29-92ab-ccc286ea8aca","type":"BoxAnnotation"}},"id":"adbc5976-032b-4c06-a575-ece02a3c687c","type":"BoxZoomTool"},{"attributes":{},"id":"40826e67-13aa-480e-85cb-ea2da2086730","type":"BasicTicker"},{"attributes":{},"id":"449a2b7d-c633-4f23-b794-17b3a3a40929","type":"WheelZoomTool"},{"attributes":{"source":{"id":"6862bda9-a05b-4133-b785-4ee7a4e2771e","type":"ColumnDataSource"}},"id":"bf53976a-4a4b-444a-9f78-560ef97b48b6","type":"CDSView"},{"attributes":{"formatter":{"id":"a6a5cfb3-946f-4d83-aa75-6c186ee3e732","type":"PrintfTickFormatter"},"plot":{"id":"5f21f19f-8415-42b9-a231-beb59c9f5ee4","subtype":"Figure","type":"Plot"},"ticker":{"id":"25b75aa4-5b2a-43da-9072-f3a2243f79da","type":"BasicTicker"}},"id":"6c2eefff-31b2-4515-86a8-2ea6c55bfd45","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"0a6e0fde-efc9-4909-99d2-940cb1af6dab","type":"Title"},{"attributes":{},"id":"25b75aa4-5b2a-43da-9072-f3a2243f79da","type":"BasicTicker"},{"attributes":{},"id":"dcb29e32-bd7d-4d1c-ba97-0ed08ca0d6d4","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"5f21f19f-8415-42b9-a231-beb59c9f5ee4","subtype":"Figure","type":"Plot"},"ticker":{"id":"25b75aa4-5b2a-43da-9072-f3a2243f79da","type":"BasicTicker"}},"id":"4ca22ddc-71bc-4f81-a6bb-50ce61e8c27a","type":"Grid"},{"attributes":{},"id":"a038604e-94c7-4d1f-be9a-57192e65a279","type":"PanTool"},{"attributes":{"data_source":{"id":"6862bda9-a05b-4133-b785-4ee7a4e2771e","type":"ColumnDataSource"},"glyph":{"id":"94a91a9d-ee18-4d78-b6c0-ad73ddfe52fd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c50e20f8-6790-48ac-a7fc-8b9d04d8328e","type":"Circle"},"selection_glyph":null,"view":{"id":"bf53976a-4a4b-444a-9f78-560ef97b48b6","type":"CDSView"}},"id":"5f2caf9d-d238-4347-9dd9-d0809fd1faff","type":"GlyphRenderer"},{"attributes":{"format":"%5.3f mu"},"id":"a6a5cfb3-946f-4d83-aa75-6c186ee3e732","type":"PrintfTickFormatter"},{"attributes":{"below":[{"id":"8b26575c-3b7c-454b-850f-59ce1a53f524","type":"LinearAxis"}],"left":[{"id":"6c2eefff-31b2-4515-86a8-2ea6c55bfd45","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8b26575c-3b7c-454b-850f-59ce1a53f524","type":"LinearAxis"},{"id":"9fa960f4-2aa7-4449-a4c3-e9dee28f9bf9","type":"Grid"},{"id":"6c2eefff-31b2-4515-86a8-2ea6c55bfd45","type":"LinearAxis"},{"id":"4ca22ddc-71bc-4f81-a6bb-50ce61e8c27a","type":"Grid"},{"id":"73654f12-2917-4f29-92ab-ccc286ea8aca","type":"BoxAnnotation"},{"id":"5f2caf9d-d238-4347-9dd9-d0809fd1faff","type":"GlyphRenderer"}],"title":{"id":"0a6e0fde-efc9-4909-99d2-940cb1af6dab","type":"Title"},"toolbar":{"id":"9036f8e0-6f51-4f6e-96e6-cb07d64b283d","type":"Toolbar"},"x_range":{"id":"05843a98-c4da-4566-a8bf-30b5c73c6e77","type":"DataRange1d"},"x_scale":{"id":"cd5277a2-1341-4e8d-afe7-641cc960f9ed","type":"LinearScale"},"y_range":{"id":"65713f4f-cb9f-4dec-95a0-9f502e2483db","type":"DataRange1d"},"y_scale":{"id":"58771bc4-850e-4ec7-89af-10110096a50a","type":"LinearScale"}},"id":"5f21f19f-8415-42b9-a231-beb59c9f5ee4","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a038604e-94c7-4d1f-be9a-57192e65a279","type":"PanTool"},{"id":"449a2b7d-c633-4f23-b794-17b3a3a40929","type":"WheelZoomTool"},{"id":"adbc5976-032b-4c06-a575-ece02a3c687c","type":"BoxZoomTool"},{"id":"23faf49a-f6dc-4fe4-9481-d65c54cb6e63","type":"SaveTool"},{"id":"3fdda22a-ac12-4a66-ac7e-2e052dee5414","type":"ResetTool"},{"id":"dcb29e32-bd7d-4d1c-ba97-0ed08ca0d6d4","type":"HelpTool"}]},"id":"9036f8e0-6f51-4f6e-96e6-cb07d64b283d","type":"Toolbar"},{"attributes":{"callback":null},"id":"05843a98-c4da-4566-a8bf-30b5c73c6e77","type":"DataRange1d"}],"root_ids":["5f21f19f-8415-42b9-a231-beb59c9f5ee4"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a7d7ef34-6b93-42dd-b310-ce09df77a360","elementid":"60c713d7-0be7-4bb2-8e23-036743579d14","modelid":"5f21f19f-8415-42b9-a231-beb59c9f5ee4"}];
                
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
