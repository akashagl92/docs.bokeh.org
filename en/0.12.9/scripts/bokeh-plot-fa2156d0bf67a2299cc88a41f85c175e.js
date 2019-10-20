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
      };var element = document.getElementById("d4106fdd-627d-4c9b-b2a9-86c5c1f74a21");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd4106fdd-627d-4c9b-b2a9-86c5c1f74a21' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"31c7c363-97b0-4c93-9734-4516709cdd7a":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"897fc5f2-9411-4971-9c24-b2d44b30beb0","type":"BoxAnnotation"},{"attributes":{"bounds":[2,4],"plot":{"id":"dada79f4-9ba6-4646-aaea-57c5c2b3a8f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ae23555-706c-427a-86b2-379c1e2673ce","type":"BasicTicker"}},"id":"3c3bfd23-2e6b-4a4e-8463-1992cae1f888","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"13bdffd6-7c20-4ca8-96f2-2d5a361a140c","type":"Title"},{"attributes":{"data_source":{"id":"f2c317ee-c15d-4493-ae1c-d85fdfddad18","type":"ColumnDataSource"},"glyph":{"id":"1c3eef45-28e9-4831-8feb-89d5c3d8ea04","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bbc63b56-182e-49b4-a3da-6d409aacb315","type":"Circle"},"selection_glyph":null,"view":{"id":"8b161fef-f0f8-4cd8-95c6-273b018d3c1f","type":"CDSView"}},"id":"81ece849-7c5b-436d-8e2c-6ec4e0b94939","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"8e4e1a87-4c78-4b74-8d21-935080407f0a","type":"LinearAxis"}],"left":[{"id":"b127ddcd-4d4b-463d-b1c0-13de0bf1d683","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8e4e1a87-4c78-4b74-8d21-935080407f0a","type":"LinearAxis"},{"id":"3c3bfd23-2e6b-4a4e-8463-1992cae1f888","type":"Grid"},{"id":"b127ddcd-4d4b-463d-b1c0-13de0bf1d683","type":"LinearAxis"},{"id":"e3af3dd5-5042-4d8f-a7f7-0ed2652fd3ed","type":"Grid"},{"id":"897fc5f2-9411-4971-9c24-b2d44b30beb0","type":"BoxAnnotation"},{"id":"81ece849-7c5b-436d-8e2c-6ec4e0b94939","type":"GlyphRenderer"}],"title":{"id":"13bdffd6-7c20-4ca8-96f2-2d5a361a140c","type":"Title"},"toolbar":{"id":"45a177a3-5a3f-452b-8bf2-40281e667e4e","type":"Toolbar"},"x_range":{"id":"7ec3ca71-747d-4ce4-9f8f-55595bcf4cb6","type":"DataRange1d"},"x_scale":{"id":"90971047-ebca-4b27-b94c-61c6e80bf968","type":"LinearScale"},"y_range":{"id":"e90d5d91-6072-4713-9597-a65d96912527","type":"DataRange1d"},"y_scale":{"id":"6d6dfe52-b6e6-44ba-888e-54ec6f0498c3","type":"LinearScale"}},"id":"dada79f4-9ba6-4646-aaea-57c5c2b3a8f5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b97d3dfb-2d00-4746-919e-499ceb24782f","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"897fc5f2-9411-4971-9c24-b2d44b30beb0","type":"BoxAnnotation"}},"id":"504e76aa-6032-4988-bf94-cdbf23c5a565","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"74236897-0ae7-4824-8c6a-02b4e04f7e9e","type":"PanTool"},{"id":"b8029fbf-7cd2-4ac5-b70a-555a086c026a","type":"WheelZoomTool"},{"id":"504e76aa-6032-4988-bf94-cdbf23c5a565","type":"BoxZoomTool"},{"id":"a1a77ad3-b07e-4a14-a76c-9052ba640c96","type":"SaveTool"},{"id":"dfaac9f7-ea43-4915-b51f-31e59987b9a5","type":"ResetTool"},{"id":"8007b320-8517-4605-8ebc-5a3ee7b90cff","type":"HelpTool"}]},"id":"45a177a3-5a3f-452b-8bf2-40281e667e4e","type":"Toolbar"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"dada79f4-9ba6-4646-aaea-57c5c2b3a8f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8063bb7-f331-402a-bf26-8fac365d99d7","type":"BasicTicker"}},"id":"e3af3dd5-5042-4d8f-a7f7-0ed2652fd3ed","type":"Grid"},{"attributes":{},"id":"8007b320-8517-4605-8ebc-5a3ee7b90cff","type":"HelpTool"},{"attributes":{},"id":"b8029fbf-7cd2-4ac5-b70a-555a086c026a","type":"WheelZoomTool"},{"attributes":{"source":{"id":"f2c317ee-c15d-4493-ae1c-d85fdfddad18","type":"ColumnDataSource"}},"id":"8b161fef-f0f8-4cd8-95c6-273b018d3c1f","type":"CDSView"},{"attributes":{},"id":"3131e3e6-b75b-4627-8921-7419b66faf69","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b97d3dfb-2d00-4746-919e-499ceb24782f","type":"BasicTickFormatter"},"plot":{"id":"dada79f4-9ba6-4646-aaea-57c5c2b3a8f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ae23555-706c-427a-86b2-379c1e2673ce","type":"BasicTicker"}},"id":"8e4e1a87-4c78-4b74-8d21-935080407f0a","type":"LinearAxis"},{"attributes":{"formatter":{"id":"3131e3e6-b75b-4627-8921-7419b66faf69","type":"BasicTickFormatter"},"plot":{"id":"dada79f4-9ba6-4646-aaea-57c5c2b3a8f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8063bb7-f331-402a-bf26-8fac365d99d7","type":"BasicTicker"}},"id":"b127ddcd-4d4b-463d-b1c0-13de0bf1d683","type":"LinearAxis"},{"attributes":{},"id":"6d6dfe52-b6e6-44ba-888e-54ec6f0498c3","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c3eef45-28e9-4831-8feb-89d5c3d8ea04","type":"Circle"},{"attributes":{"callback":null},"id":"e90d5d91-6072-4713-9597-a65d96912527","type":"DataRange1d"},{"attributes":{},"id":"e8063bb7-f331-402a-bf26-8fac365d99d7","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7ec3ca71-747d-4ce4-9f8f-55595bcf4cb6","type":"DataRange1d"},{"attributes":{},"id":"74236897-0ae7-4824-8c6a-02b4e04f7e9e","type":"PanTool"},{"attributes":{},"id":"a1a77ad3-b07e-4a14-a76c-9052ba640c96","type":"SaveTool"},{"attributes":{},"id":"90971047-ebca-4b27-b94c-61c6e80bf968","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bbc63b56-182e-49b4-a3da-6d409aacb315","type":"Circle"},{"attributes":{},"id":"dfaac9f7-ea43-4915-b51f-31e59987b9a5","type":"ResetTool"},{"attributes":{},"id":"9ae23555-706c-427a-86b2-379c1e2673ce","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f2c317ee-c15d-4493-ae1c-d85fdfddad18","type":"ColumnDataSource"}],"root_ids":["dada79f4-9ba6-4646-aaea-57c5c2b3a8f5"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"31c7c363-97b0-4c93-9734-4516709cdd7a","elementid":"d4106fdd-627d-4c9b-b2a9-86c5c1f74a21","modelid":"dada79f4-9ba6-4646-aaea-57c5c2b3a8f5"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
