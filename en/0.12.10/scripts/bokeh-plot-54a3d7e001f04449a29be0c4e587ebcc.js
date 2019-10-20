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
      };var element = document.getElementById("506aca0f-d0c9-4b5a-9565-cd9f61b148e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '506aca0f-d0c9-4b5a-9565-cd9f61b148e3' but no matching script tag was found. ")
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
                    var docs_json = {"a7beb881-c72d-4815-9c36-e3aa443c5a72":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"407efc3a-a2d1-4fa6-b0c3-3d64210e39b0","type":"BoxAnnotation"},{"attributes":{},"id":"0e5638c0-7d14-4807-92b2-7431409696d0","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y","width"],"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]}},"id":"3a3f7344-54a1-441e-a49a-8350fa2aae4e","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"caa86ba3-9d99-48a1-bcb1-f4241dc54a9d","type":"LinearAxis"}],"left":[{"id":"9a70676e-5f7e-49f3-a908-47dc1601122c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"caa86ba3-9d99-48a1-bcb1-f4241dc54a9d","type":"LinearAxis"},{"id":"42b5d09b-4cb1-40ed-818b-3fe0e97ae062","type":"Grid"},{"id":"9a70676e-5f7e-49f3-a908-47dc1601122c","type":"LinearAxis"},{"id":"0e3eb6ef-51be-4f12-9426-8e23255d5255","type":"Grid"},{"id":"407efc3a-a2d1-4fa6-b0c3-3d64210e39b0","type":"BoxAnnotation"},{"id":"54d68c0c-ae6f-4b39-9e07-ddda0d65523b","type":"GlyphRenderer"}],"title":{"id":"6b600d53-5fef-438f-ad99-5e0360b73f56","type":"Title"},"toolbar":{"id":"ce8578ae-8bb6-4ece-8447-a077ab37a0aa","type":"Toolbar"},"x_range":{"id":"16974dd4-01f3-4ecc-9cee-33f73a000ed3","type":"DataRange1d"},"x_scale":{"id":"0c2fa48b-312a-4d7c-a499-6e91937509de","type":"LinearScale"},"y_range":{"id":"8f06ccf2-3d29-4a6a-a5d3-c17c09de8924","type":"DataRange1d"},"y_scale":{"id":"a403dc78-b5bd-4881-929a-2620b596ef68","type":"LinearScale"}},"id":"f569f333-d251-4ef1-957d-c87663d53d4a","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1fc14ef9-691f-4b83-a963-065ea53038d5","type":"Ellipse"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a29d7730-6b22-485f-a3bb-0d5d1b6162e8","type":"PanTool"},{"id":"0e5638c0-7d14-4807-92b2-7431409696d0","type":"WheelZoomTool"},{"id":"0a1a69c3-474c-4f53-8288-1f62db0af846","type":"BoxZoomTool"},{"id":"b1bd7933-0b21-496b-a607-3285f71690d2","type":"SaveTool"},{"id":"5ffedfe7-9b22-41c6-9d58-80ff5324dfbd","type":"ResetTool"},{"id":"f2cba01a-c3c6-4150-9904-6c26a716048b","type":"HelpTool"}]},"id":"ce8578ae-8bb6-4ece-8447-a077ab37a0aa","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"f569f333-d251-4ef1-957d-c87663d53d4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7409085-2202-498e-a1a3-961d0bc33b1c","type":"BasicTicker"}},"id":"0e3eb6ef-51be-4f12-9426-8e23255d5255","type":"Grid"},{"attributes":{"callback":null},"id":"16974dd4-01f3-4ecc-9cee-33f73a000ed3","type":"DataRange1d"},{"attributes":{},"id":"f2cba01a-c3c6-4150-9904-6c26a716048b","type":"HelpTool"},{"attributes":{},"id":"5ffedfe7-9b22-41c6-9d58-80ff5324dfbd","type":"ResetTool"},{"attributes":{},"id":"b1bd7933-0b21-496b-a607-3285f71690d2","type":"SaveTool"},{"attributes":{"callback":null},"id":"8f06ccf2-3d29-4a6a-a5d3-c17c09de8924","type":"DataRange1d"},{"attributes":{},"id":"0c2fa48b-312a-4d7c-a499-6e91937509de","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"6b600d53-5fef-438f-ad99-5e0360b73f56","type":"Title"},{"attributes":{"plot":{"id":"f569f333-d251-4ef1-957d-c87663d53d4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"3159c3e6-2829-498b-963f-b6c0fe49967d","type":"BasicTicker"}},"id":"42b5d09b-4cb1-40ed-818b-3fe0e97ae062","type":"Grid"},{"attributes":{},"id":"a29d7730-6b22-485f-a3bb-0d5d1b6162e8","type":"PanTool"},{"attributes":{},"id":"a403dc78-b5bd-4881-929a-2620b596ef68","type":"LinearScale"},{"attributes":{"formatter":{"id":"c6fcb8e4-5db0-4d8e-9ef1-640e6a285ded","type":"BasicTickFormatter"},"plot":{"id":"f569f333-d251-4ef1-957d-c87663d53d4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"3159c3e6-2829-498b-963f-b6c0fe49967d","type":"BasicTicker"}},"id":"caa86ba3-9d99-48a1-bcb1-f4241dc54a9d","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"206f5978-f4bf-44e9-a3eb-5207d70bf693","type":"Ellipse"},{"attributes":{},"id":"c6fcb8e4-5db0-4d8e-9ef1-640e6a285ded","type":"BasicTickFormatter"},{"attributes":{},"id":"3159c3e6-2829-498b-963f-b6c0fe49967d","type":"BasicTicker"},{"attributes":{"source":{"id":"3a3f7344-54a1-441e-a49a-8350fa2aae4e","type":"ColumnDataSource"}},"id":"5244e3c0-49ea-472b-944c-5a5e89039a58","type":"CDSView"},{"attributes":{"overlay":{"id":"407efc3a-a2d1-4fa6-b0c3-3d64210e39b0","type":"BoxAnnotation"}},"id":"0a1a69c3-474c-4f53-8288-1f62db0af846","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"2e0da4df-a30d-4da1-96be-e1169776c9e2","type":"BasicTickFormatter"},"plot":{"id":"f569f333-d251-4ef1-957d-c87663d53d4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7409085-2202-498e-a1a3-961d0bc33b1c","type":"BasicTicker"}},"id":"9a70676e-5f7e-49f3-a908-47dc1601122c","type":"LinearAxis"},{"attributes":{},"id":"f7409085-2202-498e-a1a3-961d0bc33b1c","type":"BasicTicker"},{"attributes":{},"id":"2e0da4df-a30d-4da1-96be-e1169776c9e2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3a3f7344-54a1-441e-a49a-8350fa2aae4e","type":"ColumnDataSource"},"glyph":{"id":"206f5978-f4bf-44e9-a3eb-5207d70bf693","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1fc14ef9-691f-4b83-a963-065ea53038d5","type":"Ellipse"},"selection_glyph":null,"view":{"id":"5244e3c0-49ea-472b-944c-5a5e89039a58","type":"CDSView"}},"id":"54d68c0c-ae6f-4b39-9e07-ddda0d65523b","type":"GlyphRenderer"}],"root_ids":["f569f333-d251-4ef1-957d-c87663d53d4a"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a7beb881-c72d-4815-9c36-e3aa443c5a72","elementid":"506aca0f-d0c9-4b5a-9565-cd9f61b148e3","modelid":"f569f333-d251-4ef1-957d-c87663d53d4a"}];
                
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
