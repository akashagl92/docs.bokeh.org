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
      };var element = document.getElementById("c962f982-bd2a-4864-8c25-f89d0a1ff08c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c962f982-bd2a-4864-8c25-f89d0a1ff08c' but no matching script tag was found. ")
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
                    var docs_json = {"d985b30d-bc11-42a1-8f91-598625d87b72":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cea9e95a-210e-41d8-8f20-381dba1a7b65","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"e5e873d3-911d-4438-8751-1d24d8b27d6b","type":"Title"},{"attributes":{},"id":"9ad2e969-94dc-4a12-80b9-c75d06755ab2","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c2550f55-816a-46ff-bc11-6c3badc25c7d","type":"BoxAnnotation"},{"attributes":{},"id":"734ddf3a-d34e-4d3b-b7ea-9404ac7a1956","type":"PanTool"},{"attributes":{"below":[{"id":"a7c8e954-7685-424d-ac87-94a5c03e4eb0","type":"LinearAxis"}],"left":[{"id":"49166c41-1a87-431f-b201-97a491d01272","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a7c8e954-7685-424d-ac87-94a5c03e4eb0","type":"LinearAxis"},{"id":"f70d3017-0f23-4f39-835e-d5ca23ca135e","type":"Grid"},{"id":"49166c41-1a87-431f-b201-97a491d01272","type":"LinearAxis"},{"id":"d8dca264-449e-4264-b5fc-581027b40844","type":"Grid"},{"id":"c2550f55-816a-46ff-bc11-6c3badc25c7d","type":"BoxAnnotation"},{"id":"f5a48bca-5d8a-4bdc-95d0-6359d544b7b1","type":"GlyphRenderer"}],"title":{"id":"e5e873d3-911d-4438-8751-1d24d8b27d6b","type":"Title"},"toolbar":{"id":"9cc28124-95a3-4fad-94c3-16326dc82c9e","type":"Toolbar"},"x_range":{"id":"9860bac6-9d57-4b3f-838e-bd99c0c35f62","type":"DataRange1d"},"x_scale":{"id":"9ad2e969-94dc-4a12-80b9-c75d06755ab2","type":"LinearScale"},"y_range":{"id":"db8d3a97-9389-4475-a647-19b475d46755","type":"DataRange1d"},"y_scale":{"id":"2db802a2-68f7-4c10-b6f1-097e6de81f47","type":"LinearScale"}},"id":"1a27aea9-e4e4-49f1-9489-7cb119925abb","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"6c68250f-5d73-463d-99a9-a13a0e619ec0","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"1a27aea9-e4e4-49f1-9489-7cb119925abb","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d51d480-bb3d-4353-9a54-e724bbd15edd","type":"BasicTicker"}},"id":"49166c41-1a87-431f-b201-97a491d01272","type":"LinearAxis"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"9bb36507-3307-4936-b3b1-5da7b4306564","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"1a27aea9-e4e4-49f1-9489-7cb119925abb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d54ab74c-187f-4658-b1b0-efef9f1dd9b0","type":"BasicTicker"}},"id":"a7c8e954-7685-424d-ac87-94a5c03e4eb0","type":"LinearAxis"},{"attributes":{},"id":"9bb36507-3307-4936-b3b1-5da7b4306564","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"734ddf3a-d34e-4d3b-b7ea-9404ac7a1956","type":"PanTool"},{"id":"5d6f3ca1-f862-4554-a906-6adf992764f8","type":"WheelZoomTool"},{"id":"57b4a1c0-d7e3-42b6-a7e8-e847e65822a8","type":"BoxZoomTool"},{"id":"704c1996-048e-4df6-ab02-310925929954","type":"SaveTool"},{"id":"0a0ef549-b2d7-4041-b09e-762c950958f8","type":"ResetTool"},{"id":"f97c2c23-26fd-445e-8812-aae814f9322c","type":"HelpTool"}]},"id":"9cc28124-95a3-4fad-94c3-16326dc82c9e","type":"Toolbar"},{"attributes":{},"id":"2db802a2-68f7-4c10-b6f1-097e6de81f47","type":"LinearScale"},{"attributes":{"source":{"id":"71f2ec2b-6cbd-4c54-b98d-b3df65b3b057","type":"ColumnDataSource"}},"id":"d26e6eb9-2eff-4cf2-8d40-de789a13d6bb","type":"CDSView"},{"attributes":{"plot":{"id":"1a27aea9-e4e4-49f1-9489-7cb119925abb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d54ab74c-187f-4658-b1b0-efef9f1dd9b0","type":"BasicTicker"}},"id":"f70d3017-0f23-4f39-835e-d5ca23ca135e","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"71f2ec2b-6cbd-4c54-b98d-b3df65b3b057","type":"ColumnDataSource"},{"attributes":{},"id":"3d51d480-bb3d-4353-9a54-e724bbd15edd","type":"BasicTicker"},{"attributes":{"callback":null},"id":"db8d3a97-9389-4475-a647-19b475d46755","type":"DataRange1d"},{"attributes":{"overlay":{"id":"c2550f55-816a-46ff-bc11-6c3badc25c7d","type":"BoxAnnotation"}},"id":"57b4a1c0-d7e3-42b6-a7e8-e847e65822a8","type":"BoxZoomTool"},{"attributes":{},"id":"f97c2c23-26fd-445e-8812-aae814f9322c","type":"HelpTool"},{"attributes":{},"id":"0a0ef549-b2d7-4041-b09e-762c950958f8","type":"ResetTool"},{"attributes":{"callback":null},"id":"9860bac6-9d57-4b3f-838e-bd99c0c35f62","type":"DataRange1d"},{"attributes":{},"id":"6c68250f-5d73-463d-99a9-a13a0e619ec0","type":"BasicTickFormatter"},{"attributes":{},"id":"d54ab74c-187f-4658-b1b0-efef9f1dd9b0","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1a27aea9-e4e4-49f1-9489-7cb119925abb","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d51d480-bb3d-4353-9a54-e724bbd15edd","type":"BasicTicker"}},"id":"d8dca264-449e-4264-b5fc-581027b40844","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1b4e35d-9719-49fd-9884-bf5c33de5ab7","type":"Circle"},{"attributes":{"data_source":{"id":"71f2ec2b-6cbd-4c54-b98d-b3df65b3b057","type":"ColumnDataSource"},"glyph":{"id":"f1b4e35d-9719-49fd-9884-bf5c33de5ab7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cea9e95a-210e-41d8-8f20-381dba1a7b65","type":"Circle"},"selection_glyph":null,"view":{"id":"d26e6eb9-2eff-4cf2-8d40-de789a13d6bb","type":"CDSView"}},"id":"f5a48bca-5d8a-4bdc-95d0-6359d544b7b1","type":"GlyphRenderer"},{"attributes":{},"id":"704c1996-048e-4df6-ab02-310925929954","type":"SaveTool"},{"attributes":{},"id":"5d6f3ca1-f862-4554-a906-6adf992764f8","type":"WheelZoomTool"}],"root_ids":["1a27aea9-e4e4-49f1-9489-7cb119925abb"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d985b30d-bc11-42a1-8f91-598625d87b72","elementid":"c962f982-bd2a-4864-8c25-f89d0a1ff08c","modelid":"1a27aea9-e4e4-49f1-9489-7cb119925abb"}];
                
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
