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
      };var element = document.getElementById("2059a140-f91f-450f-9676-c0e26e431a01");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2059a140-f91f-450f-9676-c0e26e431a01' but no matching script tag was found. ")
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
                    var docs_json = {"02f24b17-8b6d-4d7a-b684-9f81eade00eb":{"roots":{"references":[{"attributes":{"data_source":{"id":"2f7fec69-ff44-44fd-ae1a-c77be0eec330","type":"ColumnDataSource"},"glyph":{"id":"e827fa94-1dc6-4407-8b2b-2f41a9e2fa26","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"968ecec6-83d4-4302-a2f6-06449a2868fe","type":"Circle"},"selection_glyph":null,"view":{"id":"d6611007-c65e-43e1-af94-d71aa1d66dce","type":"CDSView"}},"id":"76e81c5f-5525-48c9-b983-3df7ffafa7ae","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"e8cf464e-c8c8-48b4-ace7-c6d4a1e0e915","type":"LinearAxis"}],"left":[{"id":"4cadef08-2ad4-4448-a047-8c853a640686","type":"LinearAxis"}],"renderers":[{"id":"e8cf464e-c8c8-48b4-ace7-c6d4a1e0e915","type":"LinearAxis"},{"id":"6316333f-8157-41e5-a126-3b9e321dc862","type":"Grid"},{"id":"4cadef08-2ad4-4448-a047-8c853a640686","type":"LinearAxis"},{"id":"760acc01-2d88-48e8-9675-1868b4766e4d","type":"Grid"},{"id":"2f5f507c-7b91-4edf-9ae0-3484b3aba5d9","type":"BoxAnnotation"},{"id":"76e81c5f-5525-48c9-b983-3df7ffafa7ae","type":"GlyphRenderer"},{"id":"c613f0a2-242a-4fe5-b6fd-5ce6497f5d9b","type":"LabelSet"},{"id":"03c84bd6-e4ea-4c51-874f-c1c1e9885c5e","type":"Label"}],"title":{"id":"4273706c-b5b1-4d9e-82a7-14e8d91896c5","type":"Title"},"toolbar":{"id":"a426c050-1f02-48dd-953d-fc902356e592","type":"Toolbar"},"x_range":{"id":"39d5a113-e6f7-42b5-9dd7-1b7b8a4dfbfb","type":"Range1d"},"x_scale":{"id":"cc1d378f-9acf-4ee0-9d78-399d10321f20","type":"LinearScale"},"y_range":{"id":"036ef416-1657-4bb9-8390-dd13b57d882e","type":"DataRange1d"},"y_scale":{"id":"7a8e0f50-fa3c-449d-a9d9-fa400b58f5ed","type":"LinearScale"}},"id":"814eeccf-8498-40b1-b43e-1143966cecff","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c78582d5-1717-4c81-931f-a707a08507f4","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"4273706c-b5b1-4d9e-82a7-14e8d91896c5","type":"Title"},{"attributes":{},"id":"a820e138-8d1c-4f66-9689-faf36b8556f3","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2f7fec69-ff44-44fd-ae1a-c77be0eec330","type":"ColumnDataSource"}},"id":"d6611007-c65e-43e1-af94-d71aa1d66dce","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8ad6e1e2-7882-472c-be56-03c51cec66c9","type":"PanTool"},{"id":"c78582d5-1717-4c81-931f-a707a08507f4","type":"WheelZoomTool"},{"id":"53943304-6c1e-4037-8ff6-c5802fdae9a1","type":"BoxZoomTool"},{"id":"9b6e622c-2703-4a36-a4f2-64ef6b07699b","type":"SaveTool"},{"id":"6a87c1c0-bf31-4e35-8f36-decf3248bf73","type":"ResetTool"},{"id":"0ec7e31d-e5e3-4450-ab58-b6a3d4ba4a13","type":"HelpTool"}]},"id":"a426c050-1f02-48dd-953d-fc902356e592","type":"Toolbar"},{"attributes":{},"id":"7a8e0f50-fa3c-449d-a9d9-fa400b58f5ed","type":"LinearScale"},{"attributes":{"plot":{"id":"814eeccf-8498-40b1-b43e-1143966cecff","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8cdfc88-61c8-4e38-84b4-e31d4decd874","type":"BasicTicker"}},"id":"6316333f-8157-41e5-a126-3b9e321dc862","type":"Grid"},{"attributes":{},"id":"9b6e622c-2703-4a36-a4f2-64ef6b07699b","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["height","weight","names"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"2f7fec69-ff44-44fd-ae1a-c77be0eec330","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"968ecec6-83d4-4302-a2f6-06449a2868fe","type":"Circle"},{"attributes":{},"id":"cc1d378f-9acf-4ee0-9d78-399d10321f20","type":"LinearScale"},{"attributes":{},"id":"6a87c1c0-bf31-4e35-8f36-decf3248bf73","type":"ResetTool"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"a820e138-8d1c-4f66-9689-faf36b8556f3","type":"BasicTickFormatter"},"plot":{"id":"814eeccf-8498-40b1-b43e-1143966cecff","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8cdfc88-61c8-4e38-84b4-e31d4decd874","type":"BasicTicker"}},"id":"e8cf464e-c8c8-48b4-ace7-c6d4a1e0e915","type":"LinearAxis"},{"attributes":{},"id":"f8cdfc88-61c8-4e38-84b4-e31d4decd874","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f5f507c-7b91-4edf-9ae0-3484b3aba5d9","type":"BoxAnnotation"},{"attributes":{},"id":"aeca8d47-4549-4bc5-be48-cb4be2e8c408","type":"BasicTickFormatter"},{"attributes":{},"id":"8ad6e1e2-7882-472c-be56-03c51cec66c9","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"814eeccf-8498-40b1-b43e-1143966cecff","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6394cba-17dc-4e2b-88fc-cb940a4639b5","type":"BasicTicker"}},"id":"760acc01-2d88-48e8-9675-1868b4766e4d","type":"Grid"},{"attributes":{},"id":"f6394cba-17dc-4e2b-88fc-cb940a4639b5","type":"BasicTicker"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"aeca8d47-4549-4bc5-be48-cb4be2e8c408","type":"BasicTickFormatter"},"plot":{"id":"814eeccf-8498-40b1-b43e-1143966cecff","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6394cba-17dc-4e2b-88fc-cb940a4639b5","type":"BasicTicker"}},"id":"4cadef08-2ad4-4448-a047-8c853a640686","type":"LinearAxis"},{"attributes":{"callback":null},"id":"036ef416-1657-4bb9-8390-dd13b57d882e","type":"DataRange1d"},{"attributes":{},"id":"0ec7e31d-e5e3-4450-ab58-b6a3d4ba4a13","type":"HelpTool"},{"attributes":{"overlay":{"id":"2f5f507c-7b91-4edf-9ae0-3484b3aba5d9","type":"BoxAnnotation"}},"id":"53943304-6c1e-4037-8ff6-c5802fdae9a1","type":"BoxZoomTool"},{"attributes":{"level":"glyph","plot":{"id":"814eeccf-8498-40b1-b43e-1143966cecff","subtype":"Figure","type":"Plot"},"source":{"id":"2f7fec69-ff44-44fd-ae1a-c77be0eec330","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"c613f0a2-242a-4fe5-b6fd-5ce6497f5d9b","type":"LabelSet"},{"attributes":{"callback":null,"end":275,"start":140},"id":"39d5a113-e6f7-42b5-9dd7-1b7b8a4dfbfb","type":"Range1d"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"814eeccf-8498-40b1-b43e-1143966cecff","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"03c84bd6-e4ea-4c51-874f-c1c1e9885c5e","type":"Label"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"e827fa94-1dc6-4407-8b2b-2f41a9e2fa26","type":"Circle"}],"root_ids":["814eeccf-8498-40b1-b43e-1143966cecff"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"02f24b17-8b6d-4d7a-b684-9f81eade00eb","elementid":"2059a140-f91f-450f-9676-c0e26e431a01","modelid":"814eeccf-8498-40b1-b43e-1143966cecff"}];
                
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
