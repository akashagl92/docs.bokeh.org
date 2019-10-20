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
      };var element = document.getElementById("8a5c84da-97da-4555-8ae4-efaeba4c388c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8a5c84da-97da-4555-8ae4-efaeba4c388c' but no matching script tag was found. ")
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
                    var docs_json = {"d85881ba-2bc6-431f-8f4a-f43413d9724e":{"roots":{"references":[{"attributes":{},"id":"4c7f7502-2e15-4d35-ab88-c3795b2912b2","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3641b558-f56c-45aa-945d-dd3523a6483f","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"c73e5bc1-8bf8-40af-961d-b76757802ea2","subtype":"Figure","type":"Plot"},"ticker":{"id":"4c7f7502-2e15-4d35-ab88-c3795b2912b2","type":"BasicTicker"}},"id":"ed9a9a7c-93bb-42e8-a92a-2f1739908bde","type":"Grid"},{"attributes":{"source":{"id":"2fda3d4e-0918-4595-805b-d5e0180c1e2e","type":"ColumnDataSource"}},"id":"f9837071-6efc-407c-9bac-e0f15db2aa9b","type":"CDSView"},{"attributes":{},"id":"8abde8b9-f011-4f1a-8639-f14dde6f3941","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"e9f0c08d-28ed-4a77-ace8-42c28c30575f","type":"BoxAnnotation"}},"id":"158b83af-35a9-4a20-9768-79820fe87e47","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"73e19582-cc5d-4aae-800d-2a1bcc5aa44f","type":"Circle"},{"attributes":{"callback":null,"end":15},"id":"d70e12ab-2c6b-4b5d-bd35-d56d09c5e356","type":"Range1d"},{"attributes":{"below":[{"id":"9ca1789a-4f90-470b-b2b6-3233511f148e","type":"LinearAxis"}],"left":[{"id":"9646feb7-aba1-4f50-8cfe-834cb701a7a9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9ca1789a-4f90-470b-b2b6-3233511f148e","type":"LinearAxis"},{"id":"56eca07f-f206-40f1-99ed-9e9184670a15","type":"Grid"},{"id":"9646feb7-aba1-4f50-8cfe-834cb701a7a9","type":"LinearAxis"},{"id":"ed9a9a7c-93bb-42e8-a92a-2f1739908bde","type":"Grid"},{"id":"e9f0c08d-28ed-4a77-ace8-42c28c30575f","type":"BoxAnnotation"},{"id":"3e978df0-5ead-4629-8c69-c5539852f2a8","type":"GlyphRenderer"}],"title":{"id":"f84a31bf-1754-4189-b1af-71417e8be581","type":"Title"},"toolbar":{"id":"fc463ac2-5edf-4609-991a-2e09a0f6fb91","type":"Toolbar"},"x_range":{"id":"3cd7cfbd-1f21-4130-91a1-7c64ecbb1952","type":"Range1d"},"x_scale":{"id":"5f4211cb-de26-4024-9f4b-3e477e1c1009","type":"LinearScale"},"y_range":{"id":"d70e12ab-2c6b-4b5d-bd35-d56d09c5e356","type":"Range1d"},"y_scale":{"id":"817092ef-4fa6-4c0a-9b90-6a96fca58422","type":"LinearScale"}},"id":"c73e5bc1-8bf8-40af-961d-b76757802ea2","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"2fda3d4e-0918-4595-805b-d5e0180c1e2e","type":"ColumnDataSource"},"glyph":{"id":"73e19582-cc5d-4aae-800d-2a1bcc5aa44f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3641b558-f56c-45aa-945d-dd3523a6483f","type":"Circle"},"selection_glyph":null,"view":{"id":"f9837071-6efc-407c-9bac-e0f15db2aa9b","type":"CDSView"}},"id":"3e978df0-5ead-4629-8c69-c5539852f2a8","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9b42e6ba-b7c3-4538-b768-29efcca10f8d","type":"PanTool"},{"id":"f8042bf9-1a28-432d-b6ba-b5155514a21f","type":"WheelZoomTool"},{"id":"158b83af-35a9-4a20-9768-79820fe87e47","type":"BoxZoomTool"},{"id":"c8970f17-6ba0-4a84-9123-31d03bfac0fd","type":"SaveTool"},{"id":"992303a0-a364-4862-9226-c4323c00d245","type":"ResetTool"},{"id":"af517cf0-85ac-495b-83c4-7fa65ac0328f","type":"HelpTool"}]},"id":"fc463ac2-5edf-4609-991a-2e09a0f6fb91","type":"Toolbar"},{"attributes":{},"id":"4d22d4ca-2376-48cd-b169-bc2a978f1907","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":20},"id":"3cd7cfbd-1f21-4130-91a1-7c64ecbb1952","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2fda3d4e-0918-4595-805b-d5e0180c1e2e","type":"ColumnDataSource"},{"attributes":{},"id":"9b42e6ba-b7c3-4538-b768-29efcca10f8d","type":"PanTool"},{"attributes":{},"id":"992303a0-a364-4862-9226-c4323c00d245","type":"ResetTool"},{"attributes":{},"id":"5f4211cb-de26-4024-9f4b-3e477e1c1009","type":"LinearScale"},{"attributes":{},"id":"817092ef-4fa6-4c0a-9b90-6a96fca58422","type":"LinearScale"},{"attributes":{},"id":"c8970f17-6ba0-4a84-9123-31d03bfac0fd","type":"SaveTool"},{"attributes":{"formatter":{"id":"8abde8b9-f011-4f1a-8639-f14dde6f3941","type":"BasicTickFormatter"},"plot":{"id":"c73e5bc1-8bf8-40af-961d-b76757802ea2","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee6a212f-64c8-43c3-b0bc-109add1716bd","type":"BasicTicker"}},"id":"9ca1789a-4f90-470b-b2b6-3233511f148e","type":"LinearAxis"},{"attributes":{},"id":"af517cf0-85ac-495b-83c4-7fa65ac0328f","type":"HelpTool"},{"attributes":{"plot":{"id":"c73e5bc1-8bf8-40af-961d-b76757802ea2","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee6a212f-64c8-43c3-b0bc-109add1716bd","type":"BasicTicker"}},"id":"56eca07f-f206-40f1-99ed-9e9184670a15","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e9f0c08d-28ed-4a77-ace8-42c28c30575f","type":"BoxAnnotation"},{"attributes":{},"id":"f8042bf9-1a28-432d-b6ba-b5155514a21f","type":"WheelZoomTool"},{"attributes":{},"id":"ee6a212f-64c8-43c3-b0bc-109add1716bd","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4d22d4ca-2376-48cd-b169-bc2a978f1907","type":"BasicTickFormatter"},"plot":{"id":"c73e5bc1-8bf8-40af-961d-b76757802ea2","subtype":"Figure","type":"Plot"},"ticker":{"id":"4c7f7502-2e15-4d35-ab88-c3795b2912b2","type":"BasicTicker"}},"id":"9646feb7-aba1-4f50-8cfe-834cb701a7a9","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"f84a31bf-1754-4189-b1af-71417e8be581","type":"Title"}],"root_ids":["c73e5bc1-8bf8-40af-961d-b76757802ea2"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d85881ba-2bc6-431f-8f4a-f43413d9724e","elementid":"8a5c84da-97da-4555-8ae4-efaeba4c388c","modelid":"c73e5bc1-8bf8-40af-961d-b76757802ea2"}];
                
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
