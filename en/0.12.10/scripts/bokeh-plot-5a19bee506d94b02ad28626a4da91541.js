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
      };var element = document.getElementById("959f5eef-e7d9-4a7a-bc19-3fbaa0ff5431");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '959f5eef-e7d9-4a7a-bc19-3fbaa0ff5431' but no matching script tag was found. ")
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
                    var docs_json = {"6602ff2a-a0ac-4d17-9fa2-84e1ad43487a":{"roots":{"references":[{"attributes":{},"id":"7baca6c6-861d-4d76-a657-999d86d8aeec","type":"LinearScale"},{"attributes":{},"id":"bee950bc-9214-4d99-a4b2-7b1a390f2ad1","type":"PanTool"},{"attributes":{},"id":"b480ea09-3215-4d81-be5d-3bbe2307d811","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e8011b9-d5bf-46d3-aa01-83629c311672","type":"Circle"},{"attributes":{},"id":"a733ffc5-efeb-420d-9b95-65f37a1b1b71","type":"ResetTool"},{"attributes":{},"id":"010353ad-c911-4440-bfd7-ecfe1ec714a7","type":"LinearScale"},{"attributes":{"source":{"id":"ea47e479-4e1f-4152-8d42-5a9163926d40","type":"ColumnDataSource"}},"id":"ef960579-2b88-45e1-954a-aadd104d3021","type":"CDSView"},{"attributes":{},"id":"b7ff0cb8-fecd-4361-88f1-0707528dad68","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"41a181e1-995e-4ed9-8419-8022a3688b1b","type":"Title"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0e1a0c6c-e0ab-45b4-becf-c2a6fbe350d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"6da5d50c-fcfe-47d1-9609-2884f9b08a83","type":"BasicTicker"}},"id":"9a8e8723-bdc5-4a65-b7ce-0ddecfeec6b9","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ba877f2a-1dab-427d-b9df-93c6323d92ed","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"5f8139c5-803a-4a1e-9b4a-8d6998eb6188","type":"BasicTickFormatter"},"plot":{"id":"0e1a0c6c-e0ab-45b4-becf-c2a6fbe350d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"6da5d50c-fcfe-47d1-9609-2884f9b08a83","type":"BasicTicker"}},"id":"4024ff19-400f-4773-8b46-21cf587f778d","type":"LinearAxis"},{"attributes":{},"id":"5f8139c5-803a-4a1e-9b4a-8d6998eb6188","type":"BasicTickFormatter"},{"attributes":{},"id":"6da5d50c-fcfe-47d1-9609-2884f9b08a83","type":"BasicTicker"},{"attributes":{"callback":null},"id":"959bb8de-2a0e-4d95-b8de-d2334c92e324","type":"DataRange1d"},{"attributes":{"overlay":{"id":"ba877f2a-1dab-427d-b9df-93c6323d92ed","type":"BoxAnnotation"}},"id":"69332332-e59b-4a36-a20d-0069ceecce82","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"081af822-6c11-4687-af83-3475d2d9c6a7","type":"Circle"},{"attributes":{"formatter":{"id":"b480ea09-3215-4d81-be5d-3bbe2307d811","type":"BasicTickFormatter"},"plot":{"id":"0e1a0c6c-e0ab-45b4-becf-c2a6fbe350d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0cb3b5e-8026-4fa8-bea8-3bcf80587a03","type":"BasicTicker"}},"id":"f94f5cce-a025-4825-8227-4af1774b8ca6","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"ea47e479-4e1f-4152-8d42-5a9163926d40","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ea47e479-4e1f-4152-8d42-5a9163926d40","type":"ColumnDataSource"},"glyph":{"id":"081af822-6c11-4687-af83-3475d2d9c6a7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8e8011b9-d5bf-46d3-aa01-83629c311672","type":"Circle"},"selection_glyph":null,"view":{"id":"ef960579-2b88-45e1-954a-aadd104d3021","type":"CDSView"}},"id":"afa6ea5a-6f8b-4174-969b-86dc6931add4","type":"GlyphRenderer"},{"attributes":{},"id":"3f755cd2-0ff4-4234-9d79-ce659171d015","type":"HelpTool"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"0e1a0c6c-e0ab-45b4-becf-c2a6fbe350d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0cb3b5e-8026-4fa8-bea8-3bcf80587a03","type":"BasicTicker"}},"id":"a075b6d3-e915-4755-a9d2-63c3f16147d5","type":"Grid"},{"attributes":{"below":[{"id":"4024ff19-400f-4773-8b46-21cf587f778d","type":"LinearAxis"}],"left":[{"id":"f94f5cce-a025-4825-8227-4af1774b8ca6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4024ff19-400f-4773-8b46-21cf587f778d","type":"LinearAxis"},{"id":"9a8e8723-bdc5-4a65-b7ce-0ddecfeec6b9","type":"Grid"},{"id":"f94f5cce-a025-4825-8227-4af1774b8ca6","type":"LinearAxis"},{"id":"a075b6d3-e915-4755-a9d2-63c3f16147d5","type":"Grid"},{"id":"ba877f2a-1dab-427d-b9df-93c6323d92ed","type":"BoxAnnotation"},{"id":"afa6ea5a-6f8b-4174-969b-86dc6931add4","type":"GlyphRenderer"}],"title":{"id":"41a181e1-995e-4ed9-8419-8022a3688b1b","type":"Title"},"toolbar":{"id":"cce975f4-77ac-4164-acdf-f35f46b43968","type":"Toolbar"},"x_range":{"id":"959bb8de-2a0e-4d95-b8de-d2334c92e324","type":"DataRange1d"},"x_scale":{"id":"7baca6c6-861d-4d76-a657-999d86d8aeec","type":"LinearScale"},"y_range":{"id":"8349f46f-4f24-4db4-87a2-8c6d8946a5ab","type":"DataRange1d"},"y_scale":{"id":"010353ad-c911-4440-bfd7-ecfe1ec714a7","type":"LinearScale"}},"id":"0e1a0c6c-e0ab-45b4-becf-c2a6fbe350d8","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bee950bc-9214-4d99-a4b2-7b1a390f2ad1","type":"PanTool"},{"id":"b7ff0cb8-fecd-4361-88f1-0707528dad68","type":"WheelZoomTool"},{"id":"69332332-e59b-4a36-a20d-0069ceecce82","type":"BoxZoomTool"},{"id":"09de04ab-572b-4d8b-b954-e8b2f15ca679","type":"SaveTool"},{"id":"a733ffc5-efeb-420d-9b95-65f37a1b1b71","type":"ResetTool"},{"id":"3f755cd2-0ff4-4234-9d79-ce659171d015","type":"HelpTool"}]},"id":"cce975f4-77ac-4164-acdf-f35f46b43968","type":"Toolbar"},{"attributes":{},"id":"c0cb3b5e-8026-4fa8-bea8-3bcf80587a03","type":"BasicTicker"},{"attributes":{},"id":"09de04ab-572b-4d8b-b954-e8b2f15ca679","type":"SaveTool"},{"attributes":{"callback":null},"id":"8349f46f-4f24-4db4-87a2-8c6d8946a5ab","type":"DataRange1d"}],"root_ids":["0e1a0c6c-e0ab-45b4-becf-c2a6fbe350d8"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"6602ff2a-a0ac-4d17-9fa2-84e1ad43487a","elementid":"959f5eef-e7d9-4a7a-bc19-3fbaa0ff5431","modelid":"0e1a0c6c-e0ab-45b4-becf-c2a6fbe350d8"}];
                
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
