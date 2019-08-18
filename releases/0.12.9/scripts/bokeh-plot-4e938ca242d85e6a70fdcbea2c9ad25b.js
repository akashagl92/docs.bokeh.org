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
      };var element = document.getElementById("3f8814f1-994b-4f0c-8524-a27837fa0d8d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3f8814f1-994b-4f0c-8524-a27837fa0d8d' but no matching script tag was found. ")
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
                    var docs_json = {"7589cc90-8af0-4507-9f92-dd785afa44bb":{"roots":{"references":[{"attributes":{},"id":"a0c44c2d-2e73-40cb-8080-2dcd85a18768","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b10d845a-8d28-4f00-a212-ca64b9a02aad","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"247feb9f-02e8-4dae-885b-23105a9e240d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e408ad9-e29f-43a2-93a2-9c2041fbe6bb","type":"BasicTicker"}},"id":"51385d54-d32a-4006-9842-3c34ba617907","type":"Grid"},{"attributes":{},"id":"53ab356e-fcf4-45ec-bcf1-57b8e6dff926","type":"ResetTool"},{"attributes":{"callback":null},"id":"e79c5fc2-ff53-456e-aa3c-aba2bb60ef39","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e0625323-68e4-4e55-b9e1-d565c5bd452f","type":"BoxAnnotation"},{"attributes":{},"id":"3aa6e39f-1ea0-460d-bb44-abf0b02547c7","type":"LinearScale"},{"attributes":{},"id":"f82e38c8-862d-4974-a682-17db87ce0fba","type":"BasicTicker"},{"attributes":{},"id":"917c8bcb-938e-4728-835b-66fac0643edb","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"00f5cb64-cd81-49ef-8abe-b343a4f24632","type":"Circle"},{"attributes":{"formatter":{"id":"917c8bcb-938e-4728-835b-66fac0643edb","type":"BasicTickFormatter"},"plot":{"id":"247feb9f-02e8-4dae-885b-23105a9e240d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e408ad9-e29f-43a2-93a2-9c2041fbe6bb","type":"BasicTicker"}},"id":"6b0b48ab-7078-4d58-a98c-674c4e2fd216","type":"LinearAxis"},{"attributes":{},"id":"6e408ad9-e29f-43a2-93a2-9c2041fbe6bb","type":"BasicTicker"},{"attributes":{},"id":"d33c8e24-6f7f-4b92-833d-49e42c410597","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"e0625323-68e4-4e55-b9e1-d565c5bd452f","type":"BoxAnnotation"}},"id":"20358f12-95a7-4428-8a2c-170bea3c68e7","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"9cc08308-d11a-40e5-a8d5-498c04efc3d1","type":"BasicTickFormatter"},"plot":{"id":"247feb9f-02e8-4dae-885b-23105a9e240d","subtype":"Figure","type":"Plot"},"ticker":{"id":"f82e38c8-862d-4974-a682-17db87ce0fba","type":"BasicTicker"}},"id":"f8a095d6-2319-4051-89b2-3f939389cae4","type":"LinearAxis"},{"attributes":{},"id":"2838acc2-93ec-4ab9-aed7-5ab56b233790","type":"LinearScale"},{"attributes":{"below":[{"id":"6b0b48ab-7078-4d58-a98c-674c4e2fd216","type":"LinearAxis"}],"left":[{"id":"f8a095d6-2319-4051-89b2-3f939389cae4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6b0b48ab-7078-4d58-a98c-674c4e2fd216","type":"LinearAxis"},{"id":"51385d54-d32a-4006-9842-3c34ba617907","type":"Grid"},{"id":"f8a095d6-2319-4051-89b2-3f939389cae4","type":"LinearAxis"},{"id":"e8963343-008f-440e-a6ba-3de464e0a9aa","type":"Grid"},{"id":"e0625323-68e4-4e55-b9e1-d565c5bd452f","type":"BoxAnnotation"},{"id":"1511a81d-e539-41bb-a432-eafd0cec8e32","type":"GlyphRenderer"}],"title":{"id":"d456150d-3da7-4e56-9964-c29c29804bbd","type":"Title"},"toolbar":{"id":"464d331d-e72a-4f8a-b71b-bae2fd3eab89","type":"Toolbar"},"x_range":{"id":"21065f70-147d-4e3f-9f99-1c0f2fd3d363","type":"DataRange1d"},"x_scale":{"id":"3aa6e39f-1ea0-460d-bb44-abf0b02547c7","type":"LinearScale"},"y_range":{"id":"e79c5fc2-ff53-456e-aa3c-aba2bb60ef39","type":"DataRange1d"},"y_scale":{"id":"2838acc2-93ec-4ab9-aed7-5ab56b233790","type":"LinearScale"}},"id":"247feb9f-02e8-4dae-885b-23105a9e240d","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"d456150d-3da7-4e56-9964-c29c29804bbd","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8d800524-755e-4500-987b-cd0e3828f17e","type":"PanTool"},{"id":"d33c8e24-6f7f-4b92-833d-49e42c410597","type":"WheelZoomTool"},{"id":"20358f12-95a7-4428-8a2c-170bea3c68e7","type":"BoxZoomTool"},{"id":"a0c44c2d-2e73-40cb-8080-2dcd85a18768","type":"SaveTool"},{"id":"53ab356e-fcf4-45ec-bcf1-57b8e6dff926","type":"ResetTool"},{"id":"39604544-6023-4ccc-ae41-758e63d1d000","type":"HelpTool"}]},"id":"464d331d-e72a-4f8a-b71b-bae2fd3eab89","type":"Toolbar"},{"attributes":{},"id":"8d800524-755e-4500-987b-cd0e3828f17e","type":"PanTool"},{"attributes":{"source":{"id":"150d77a0-7bc1-4761-a488-0ca6b9bbba61","type":"ColumnDataSource"}},"id":"3131c03c-2e89-4419-be71-620fd351317c","type":"CDSView"},{"attributes":{},"id":"9cc08308-d11a-40e5-a8d5-498c04efc3d1","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"150d77a0-7bc1-4761-a488-0ca6b9bbba61","type":"ColumnDataSource"},"glyph":{"id":"00f5cb64-cd81-49ef-8abe-b343a4f24632","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b10d845a-8d28-4f00-a212-ca64b9a02aad","type":"Circle"},"selection_glyph":null,"view":{"id":"3131c03c-2e89-4419-be71-620fd351317c","type":"CDSView"}},"id":"1511a81d-e539-41bb-a432-eafd0cec8e32","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"247feb9f-02e8-4dae-885b-23105a9e240d","subtype":"Figure","type":"Plot"},"ticker":{"id":"f82e38c8-862d-4974-a682-17db87ce0fba","type":"BasicTicker"}},"id":"e8963343-008f-440e-a6ba-3de464e0a9aa","type":"Grid"},{"attributes":{"callback":null},"id":"21065f70-147d-4e3f-9f99-1c0f2fd3d363","type":"DataRange1d"},{"attributes":{},"id":"39604544-6023-4ccc-ae41-758e63d1d000","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"150d77a0-7bc1-4761-a488-0ca6b9bbba61","type":"ColumnDataSource"}],"root_ids":["247feb9f-02e8-4dae-885b-23105a9e240d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"7589cc90-8af0-4507-9f92-dd785afa44bb","elementid":"3f8814f1-994b-4f0c-8524-a27837fa0d8d","modelid":"247feb9f-02e8-4dae-885b-23105a9e240d"}];
                
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
