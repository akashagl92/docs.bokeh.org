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
      };var element = document.getElementById("ee986a34-d9eb-4e49-b26d-1a7f5a362e55");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee986a34-d9eb-4e49-b26d-1a7f5a362e55' but no matching script tag was found. ")
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
                    var docs_json = {"c4a387a3-02d1-4f8f-905a-f58b417ee18f":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"5bf977ed-ab1a-49fa-8c13-a7936b6477ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"11834bd5-10f2-4472-9e90-7af29a367e09","type":"BasicTicker"}},"id":"89be0598-2df2-4b9c-bfdd-31c9fac1a4a5","type":"Grid"},{"attributes":{"source":{"id":"88c0fd44-7220-4f81-98ca-136625cfe2fc","type":"ColumnDataSource"}},"id":"154d9686-f38a-4279-b3ca-358b4b127456","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"88c0fd44-7220-4f81-98ca-136625cfe2fc","type":"ColumnDataSource"},{"attributes":{},"id":"21a3f407-7c13-4d7a-9085-9026c5e85e09","type":"ResetTool"},{"attributes":{},"id":"1eab19b0-948e-45df-8d1c-56b11f2e6861","type":"PanTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf3fa95c-6934-48fb-b476-94fd1d03fbd3","type":"Arc"},{"attributes":{"below":[{"id":"4903b2ad-71b9-4c7b-ba92-ef7f0e94d10f","type":"LinearAxis"}],"left":[{"id":"63ee346d-c8de-4948-8d5e-16189dfd2a3d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4903b2ad-71b9-4c7b-ba92-ef7f0e94d10f","type":"LinearAxis"},{"id":"367fe8ec-d5a1-4f7a-ac58-5f75c2c52798","type":"Grid"},{"id":"63ee346d-c8de-4948-8d5e-16189dfd2a3d","type":"LinearAxis"},{"id":"89be0598-2df2-4b9c-bfdd-31c9fac1a4a5","type":"Grid"},{"id":"64f03858-a36f-40be-9091-3f52354f916e","type":"BoxAnnotation"},{"id":"199d4d8f-ad31-4c19-93ee-32d4e466d985","type":"GlyphRenderer"}],"title":{"id":"c7cab55e-e376-4ae1-8db6-a90036495ddc","type":"Title"},"toolbar":{"id":"8219453f-99e9-4abd-9bb5-0b071f321950","type":"Toolbar"},"x_range":{"id":"8a153afe-3e0e-464f-8ecb-721dde0e72e0","type":"DataRange1d"},"x_scale":{"id":"b46900e4-001d-4d1d-b7c7-50a60d2e52d0","type":"LinearScale"},"y_range":{"id":"ff85fcf2-d972-4e4e-940d-c384a8b97a80","type":"DataRange1d"},"y_scale":{"id":"73b69427-7595-483d-9e52-e4a4b2a19cb1","type":"LinearScale"}},"id":"5bf977ed-ab1a-49fa-8c13-a7936b6477ad","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2d4beafe-7db1-42f5-9a99-985ed8319596","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1eab19b0-948e-45df-8d1c-56b11f2e6861","type":"PanTool"},{"id":"2d4beafe-7db1-42f5-9a99-985ed8319596","type":"WheelZoomTool"},{"id":"48d92055-c170-492c-b0ca-d3afc1f38902","type":"BoxZoomTool"},{"id":"cc983332-20cd-47df-8b49-4822f40f885f","type":"SaveTool"},{"id":"21a3f407-7c13-4d7a-9085-9026c5e85e09","type":"ResetTool"},{"id":"b6025af4-43f7-4443-a657-3e30063b3082","type":"HelpTool"}]},"id":"8219453f-99e9-4abd-9bb5-0b071f321950","type":"Toolbar"},{"attributes":{"overlay":{"id":"64f03858-a36f-40be-9091-3f52354f916e","type":"BoxAnnotation"}},"id":"48d92055-c170-492c-b0ca-d3afc1f38902","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"1227d7ac-b385-4f5a-84d7-b5e2dc6e56e4","type":"BasicTickFormatter"},"plot":{"id":"5bf977ed-ab1a-49fa-8c13-a7936b6477ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a848866-1259-4499-ab78-deb294801a1b","type":"BasicTicker"}},"id":"4903b2ad-71b9-4c7b-ba92-ef7f0e94d10f","type":"LinearAxis"},{"attributes":{},"id":"cc983332-20cd-47df-8b49-4822f40f885f","type":"SaveTool"},{"attributes":{"callback":null},"id":"8a153afe-3e0e-464f-8ecb-721dde0e72e0","type":"DataRange1d"},{"attributes":{"plot":{"id":"5bf977ed-ab1a-49fa-8c13-a7936b6477ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a848866-1259-4499-ab78-deb294801a1b","type":"BasicTicker"}},"id":"367fe8ec-d5a1-4f7a-ac58-5f75c2c52798","type":"Grid"},{"attributes":{"data_source":{"id":"88c0fd44-7220-4f81-98ca-136625cfe2fc","type":"ColumnDataSource"},"glyph":{"id":"f90c9d81-ea2b-45f7-a88a-4477e599df6d","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cf3fa95c-6934-48fb-b476-94fd1d03fbd3","type":"Arc"},"selection_glyph":null,"view":{"id":"154d9686-f38a-4279-b3ca-358b4b127456","type":"CDSView"}},"id":"199d4d8f-ad31-4c19-93ee-32d4e466d985","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"ff85fcf2-d972-4e4e-940d-c384a8b97a80","type":"DataRange1d"},{"attributes":{},"id":"b46900e4-001d-4d1d-b7c7-50a60d2e52d0","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"64f03858-a36f-40be-9091-3f52354f916e","type":"BoxAnnotation"},{"attributes":{},"id":"73b69427-7595-483d-9e52-e4a4b2a19cb1","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"c7cab55e-e376-4ae1-8db6-a90036495ddc","type":"Title"},{"attributes":{},"id":"6a848866-1259-4499-ab78-deb294801a1b","type":"BasicTicker"},{"attributes":{},"id":"8a097d24-d49a-4e41-b3c1-44fc57758dc0","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8a097d24-d49a-4e41-b3c1-44fc57758dc0","type":"BasicTickFormatter"},"plot":{"id":"5bf977ed-ab1a-49fa-8c13-a7936b6477ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"11834bd5-10f2-4472-9e90-7af29a367e09","type":"BasicTicker"}},"id":"63ee346d-c8de-4948-8d5e-16189dfd2a3d","type":"LinearAxis"},{"attributes":{},"id":"1227d7ac-b385-4f5a-84d7-b5e2dc6e56e4","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"f90c9d81-ea2b-45f7-a88a-4477e599df6d","type":"Arc"},{"attributes":{},"id":"b6025af4-43f7-4443-a657-3e30063b3082","type":"HelpTool"},{"attributes":{},"id":"11834bd5-10f2-4472-9e90-7af29a367e09","type":"BasicTicker"}],"root_ids":["5bf977ed-ab1a-49fa-8c13-a7936b6477ad"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c4a387a3-02d1-4f8f-905a-f58b417ee18f","elementid":"ee986a34-d9eb-4e49-b26d-1a7f5a362e55","modelid":"5bf977ed-ab1a-49fa-8c13-a7936b6477ad"}];
                
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
