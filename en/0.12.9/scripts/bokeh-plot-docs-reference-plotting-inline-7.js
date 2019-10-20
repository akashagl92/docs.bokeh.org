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
      };var element = document.getElementById("96b6cccb-a968-4c31-ac19-895029ffd7c7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '96b6cccb-a968-4c31-ac19-895029ffd7c7' but no matching script tag was found. ")
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
                    var docs_json = {"a03b5f6d-ef7c-4952-a443-27d51b939b6b":{"roots":{"references":[{"attributes":{},"id":"c5c915cd-fb74-4ea5-a546-f5c44211daf2","type":"ResetTool"},{"attributes":{},"id":"04d25eb6-529f-46de-92af-9c3bf4dc0a50","type":"LinearScale"},{"attributes":{"source":{"id":"bd4c1408-acde-4c59-b429-89ab85cd30b5","type":"ColumnDataSource"}},"id":"9498f310-2bb5-4ebe-a8af-5129bab5dd4f","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"bd4c1408-acde-4c59-b429-89ab85cd30b5","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"d78f7e81-a0ea-4b4d-bb61-ca72369e5215","type":"BasicTickFormatter"},"plot":{"id":"bcc2c73a-7ee3-43c5-954c-540fd42eadfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"d55500f9-09d7-4d69-8ee6-a1475da73297","type":"BasicTicker"}},"id":"bc0ca6db-f137-46d9-9068-e79839ef8895","type":"LinearAxis"},{"attributes":{"overlay":{"id":"f0525db5-b2e9-4b40-9a03-e52828eb0d1f","type":"BoxAnnotation"}},"id":"f56ded44-7a5a-4e7e-bd5e-2cff2634ea4a","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"bcc2c73a-7ee3-43c5-954c-540fd42eadfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"d55500f9-09d7-4d69-8ee6-a1475da73297","type":"BasicTicker"}},"id":"603c2421-6065-4698-a4fd-478f75c452e0","type":"Grid"},{"attributes":{},"id":"8485f9ed-efbd-44ab-84bb-e520915ea747","type":"BasicTickFormatter"},{"attributes":{},"id":"21834469-8c2a-4bfc-877d-13a15bd0fe7a","type":"PanTool"},{"attributes":{},"id":"95e18344-736a-4b40-90dc-21ff66f6d54e","type":"WheelZoomTool"},{"attributes":{},"id":"d55500f9-09d7-4d69-8ee6-a1475da73297","type":"BasicTicker"},{"attributes":{},"id":"ea4bc902-f977-49d5-984f-b0fc010566e9","type":"SaveTool"},{"attributes":{},"id":"4e3dbf86-43d4-487b-8839-1c64c0fd99b6","type":"HelpTool"},{"attributes":{"callback":null},"id":"801e75c5-392e-47aa-bd58-cdd405f0ad2a","type":"DataRange1d"},{"attributes":{"formatter":{"id":"8485f9ed-efbd-44ab-84bb-e520915ea747","type":"BasicTickFormatter"},"plot":{"id":"bcc2c73a-7ee3-43c5-954c-540fd42eadfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"633bf2b6-b7cc-4a01-bec6-b11042130e6c","type":"BasicTicker"}},"id":"be899a62-0ae9-4a5c-986e-a31ad289efc6","type":"LinearAxis"},{"attributes":{},"id":"d78f7e81-a0ea-4b4d-bb61-ca72369e5215","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"21834469-8c2a-4bfc-877d-13a15bd0fe7a","type":"PanTool"},{"id":"95e18344-736a-4b40-90dc-21ff66f6d54e","type":"WheelZoomTool"},{"id":"f56ded44-7a5a-4e7e-bd5e-2cff2634ea4a","type":"BoxZoomTool"},{"id":"ea4bc902-f977-49d5-984f-b0fc010566e9","type":"SaveTool"},{"id":"c5c915cd-fb74-4ea5-a546-f5c44211daf2","type":"ResetTool"},{"id":"4e3dbf86-43d4-487b-8839-1c64c0fd99b6","type":"HelpTool"}]},"id":"0cca92e4-92db-42e7-afa7-cb21182e8cce","type":"Toolbar"},{"attributes":{},"id":"633bf2b6-b7cc-4a01-bec6-b11042130e6c","type":"BasicTicker"},{"attributes":{"plot":{"id":"bcc2c73a-7ee3-43c5-954c-540fd42eadfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"633bf2b6-b7cc-4a01-bec6-b11042130e6c","type":"BasicTicker"}},"id":"2843aa95-830f-4dc6-aad5-832f06f57c90","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f0525db5-b2e9-4b40-9a03-e52828eb0d1f","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"422faafd-ad1e-4c8f-998e-5f9a59e9ec06","type":"Title"},{"attributes":{"callback":null},"id":"2368cd81-e38e-41d7-bed8-c82df0d53bdf","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"04bbd0e8-1e4e-4c53-89b4-82f2d0a0bf83","type":"DiamondCross"},{"attributes":{},"id":"1a7dc2a9-ee7e-4475-9f49-808a85d0d0e2","type":"LinearScale"},{"attributes":{"below":[{"id":"be899a62-0ae9-4a5c-986e-a31ad289efc6","type":"LinearAxis"}],"left":[{"id":"bc0ca6db-f137-46d9-9068-e79839ef8895","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"be899a62-0ae9-4a5c-986e-a31ad289efc6","type":"LinearAxis"},{"id":"2843aa95-830f-4dc6-aad5-832f06f57c90","type":"Grid"},{"id":"bc0ca6db-f137-46d9-9068-e79839ef8895","type":"LinearAxis"},{"id":"603c2421-6065-4698-a4fd-478f75c452e0","type":"Grid"},{"id":"f0525db5-b2e9-4b40-9a03-e52828eb0d1f","type":"BoxAnnotation"},{"id":"4d86e486-63d6-47f9-b965-5f23bb560da1","type":"GlyphRenderer"}],"title":{"id":"422faafd-ad1e-4c8f-998e-5f9a59e9ec06","type":"Title"},"toolbar":{"id":"0cca92e4-92db-42e7-afa7-cb21182e8cce","type":"Toolbar"},"x_range":{"id":"2368cd81-e38e-41d7-bed8-c82df0d53bdf","type":"DataRange1d"},"x_scale":{"id":"1a7dc2a9-ee7e-4475-9f49-808a85d0d0e2","type":"LinearScale"},"y_range":{"id":"801e75c5-392e-47aa-bd58-cdd405f0ad2a","type":"DataRange1d"},"y_scale":{"id":"04d25eb6-529f-46de-92af-9c3bf4dc0a50","type":"LinearScale"}},"id":"bcc2c73a-7ee3-43c5-954c-540fd42eadfe","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"bd4c1408-acde-4c59-b429-89ab85cd30b5","type":"ColumnDataSource"},"glyph":{"id":"04bbd0e8-1e4e-4c53-89b4-82f2d0a0bf83","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55f2db56-d8fb-48b3-9fa4-7f6a1cc041cd","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"9498f310-2bb5-4ebe-a8af-5129bab5dd4f","type":"CDSView"}},"id":"4d86e486-63d6-47f9-b965-5f23bb560da1","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"55f2db56-d8fb-48b3-9fa4-7f6a1cc041cd","type":"DiamondCross"}],"root_ids":["bcc2c73a-7ee3-43c5-954c-540fd42eadfe"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"a03b5f6d-ef7c-4952-a443-27d51b939b6b","elementid":"96b6cccb-a968-4c31-ac19-895029ffd7c7","modelid":"bcc2c73a-7ee3-43c5-954c-540fd42eadfe"}];
                
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
