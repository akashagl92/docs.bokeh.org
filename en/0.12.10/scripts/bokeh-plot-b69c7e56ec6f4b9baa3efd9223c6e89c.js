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
      };var element = document.getElementById("059987d7-5292-4f85-8460-e861fceefd1c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '059987d7-5292-4f85-8460-e861fceefd1c' but no matching script tag was found. ")
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
                    var docs_json = {"d4e5cdaa-c27b-425f-b937-15db081877bd":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"b4f0c583-2a6c-40ed-aebe-631b5aac0659","type":"PolyAnnotation"},{"attributes":{},"id":"3e79e7f2-e4bd-451e-af9f-ae570080834a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2ddfdcf9-484e-47b3-8ff1-ba8932043b2e","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fe5f02e9-bb21-468f-898a-060355e660c4","type":"BoxSelectTool"},{"id":"e382a543-8d5f-44e0-b023-f0d9465cb684","type":"BoxZoomTool"},{"id":"bd5bb901-9b4a-4da8-8885-c003df8c1b97","type":"LassoSelectTool"},{"id":"62ba96ee-4d36-46b1-b2c4-b89e59d03a52","type":"ResetTool"}]},"id":"23353120-8de9-4e37-bfa5-b97e7043a6e8","type":"Toolbar"},{"attributes":{},"id":"62ba96ee-4d36-46b1-b2c4-b89e59d03a52","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"41c5a343-cc0a-48a1-b9ff-8d4cf63b1c3c","type":"BoxAnnotation"},"renderers":[{"id":"d0b81ce8-9835-4b02-84bb-a795514bb795","type":"GlyphRenderer"}]},"id":"fe5f02e9-bb21-468f-898a-060355e660c4","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"b4f0c583-2a6c-40ed-aebe-631b5aac0659","type":"PolyAnnotation"}},"id":"bd5bb901-9b4a-4da8-8885-c003df8c1b97","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"7caa334d-d277-450c-aa6e-bcc5a5fc83a9","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"bf967788-ba20-4cc7-abb7-c1c676b2c2b0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bf967788-ba20-4cc7-abb7-c1c676b2c2b0","type":"ColumnDataSource"},"glyph":{"id":"7caa334d-d277-450c-aa6e-bcc5a5fc83a9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ffb7129a-4962-4b27-b083-a9d806a34e46","type":"Circle"},"selection_glyph":null,"view":{"id":"7b8cab3f-1baa-420e-b412-95c1e88c1b92","type":"CDSView"}},"id":"d0b81ce8-9835-4b02-84bb-a795514bb795","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c5822e42-65da-49f8-adb5-f09351e03cc3","type":"LinearAxis"}],"left":[{"id":"e1987378-323d-4428-a96d-eb64ea122d96","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c5822e42-65da-49f8-adb5-f09351e03cc3","type":"LinearAxis"},{"id":"be7b6b63-ba70-4b6c-9197-59c84db8991b","type":"Grid"},{"id":"e1987378-323d-4428-a96d-eb64ea122d96","type":"LinearAxis"},{"id":"9a208e2f-3b8e-4ea2-a61d-300f2f81e27e","type":"Grid"},{"id":"41c5a343-cc0a-48a1-b9ff-8d4cf63b1c3c","type":"BoxAnnotation"},{"id":"2ddfdcf9-484e-47b3-8ff1-ba8932043b2e","type":"BoxAnnotation"},{"id":"b4f0c583-2a6c-40ed-aebe-631b5aac0659","type":"PolyAnnotation"},{"id":"d0b81ce8-9835-4b02-84bb-a795514bb795","type":"GlyphRenderer"}],"title":{"id":"5b281b63-a2db-43f3-b7d9-9f9510e0be32","type":"Title"},"toolbar":{"id":"23353120-8de9-4e37-bfa5-b97e7043a6e8","type":"Toolbar"},"x_range":{"id":"8ca641cf-e0f0-487d-b361-ddd00c93d28c","type":"DataRange1d"},"x_scale":{"id":"7bf449e4-e781-4658-8111-5b0518e29f8e","type":"LinearScale"},"y_range":{"id":"c3913ad2-56de-4b23-a364-30897d446c31","type":"DataRange1d"},"y_scale":{"id":"efb7b083-10d8-46e8-a95d-cc880171a7b4","type":"LinearScale"}},"id":"56140559-5e41-4211-8908-c5b9f92a04e4","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"41c5a343-cc0a-48a1-b9ff-8d4cf63b1c3c","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"56140559-5e41-4211-8908-c5b9f92a04e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd46b5ce-4a10-4b02-9cea-618f5f4b43ce","type":"BasicTicker"}},"id":"9a208e2f-3b8e-4ea2-a61d-300f2f81e27e","type":"Grid"},{"attributes":{"source":{"id":"bf967788-ba20-4cc7-abb7-c1c676b2c2b0","type":"ColumnDataSource"}},"id":"7b8cab3f-1baa-420e-b412-95c1e88c1b92","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffb7129a-4962-4b27-b083-a9d806a34e46","type":"Circle"},{"attributes":{"formatter":{"id":"2347e392-ecf4-44ce-a8fa-976114129ef7","type":"BasicTickFormatter"},"plot":{"id":"56140559-5e41-4211-8908-c5b9f92a04e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"f56d67e8-86c0-4df9-b847-ee6acae71978","type":"BasicTicker"}},"id":"c5822e42-65da-49f8-adb5-f09351e03cc3","type":"LinearAxis"},{"attributes":{"formatter":{"id":"3e79e7f2-e4bd-451e-af9f-ae570080834a","type":"BasicTickFormatter"},"plot":{"id":"56140559-5e41-4211-8908-c5b9f92a04e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd46b5ce-4a10-4b02-9cea-618f5f4b43ce","type":"BasicTicker"}},"id":"e1987378-323d-4428-a96d-eb64ea122d96","type":"LinearAxis"},{"attributes":{},"id":"efb7b083-10d8-46e8-a95d-cc880171a7b4","type":"LinearScale"},{"attributes":{},"id":"2347e392-ecf4-44ce-a8fa-976114129ef7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"56140559-5e41-4211-8908-c5b9f92a04e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"f56d67e8-86c0-4df9-b847-ee6acae71978","type":"BasicTicker"}},"id":"be7b6b63-ba70-4b6c-9197-59c84db8991b","type":"Grid"},{"attributes":{"callback":null},"id":"8ca641cf-e0f0-487d-b361-ddd00c93d28c","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2ddfdcf9-484e-47b3-8ff1-ba8932043b2e","type":"BoxAnnotation"}},"id":"e382a543-8d5f-44e0-b023-f0d9465cb684","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"5b281b63-a2db-43f3-b7d9-9f9510e0be32","type":"Title"},{"attributes":{},"id":"7bf449e4-e781-4658-8111-5b0518e29f8e","type":"LinearScale"},{"attributes":{"callback":null},"id":"c3913ad2-56de-4b23-a364-30897d446c31","type":"DataRange1d"},{"attributes":{},"id":"dd46b5ce-4a10-4b02-9cea-618f5f4b43ce","type":"BasicTicker"},{"attributes":{},"id":"f56d67e8-86c0-4df9-b847-ee6acae71978","type":"BasicTicker"}],"root_ids":["56140559-5e41-4211-8908-c5b9f92a04e4"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d4e5cdaa-c27b-425f-b937-15db081877bd","elementid":"059987d7-5292-4f85-8460-e861fceefd1c","modelid":"56140559-5e41-4211-8908-c5b9f92a04e4"}];
                
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
