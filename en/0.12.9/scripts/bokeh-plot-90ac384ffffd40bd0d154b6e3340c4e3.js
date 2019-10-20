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
      };var element = document.getElementById("a2069af5-d882-4753-8001-1cae5180771f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a2069af5-d882-4753-8001-1cae5180771f' but no matching script tag was found. ")
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
                    var docs_json = {"5c2695a6-3c98-4704-bc3c-e32388c5c9e8":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"82fb8da4-0345-426e-b171-47131bf5ce1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"99973a21-defd-4fa7-b778-bd675551bde7","type":"BasicTicker"}},"id":"a8c735b7-4dd5-4d45-9e5b-7cd909566b63","type":"Grid"},{"attributes":{"source":{"id":"2bf894ce-b24d-416b-bfa9-b6d9815bf40f","type":"ColumnDataSource"}},"id":"b1d5c24d-459d-4007-84a6-579cef2770f0","type":"CDSView"},{"attributes":{},"id":"8ffb6549-4fe2-4ce5-b6bd-8230352a2e84","type":"HelpTool"},{"attributes":{"formatter":{"id":"2a68813b-91d6-49a2-a64b-9ce48dc9449d","type":"BasicTickFormatter"},"plot":{"id":"82fb8da4-0345-426e-b171-47131bf5ce1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9953715c-17f3-431d-a047-0ab0fb7c405c","type":"BasicTicker"}},"id":"ab57b166-daa1-422b-aa42-405079b31eda","type":"LinearAxis"},{"attributes":{},"id":"9d1e807d-f068-4234-a5d2-ea709a1fa745","type":"SaveTool"},{"attributes":{"callback":null},"id":"fdfcbf9e-8680-41b2-80d7-4df238516ec4","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"b7ac29d0-ec8c-43c0-bbc9-fbe7cbe345b6","type":"Title"},{"attributes":{},"id":"2a68813b-91d6-49a2-a64b-9ce48dc9449d","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0a8a4feb-39fb-408d-96e1-1bbf6c195df6","type":"PanTool"},{"id":"d283368e-9f58-4e64-9fa3-0d9c1cdbce68","type":"WheelZoomTool"},{"id":"01cf5206-6169-48b9-b5b0-fd730137bce9","type":"BoxZoomTool"},{"id":"9d1e807d-f068-4234-a5d2-ea709a1fa745","type":"SaveTool"},{"id":"32b432f4-e843-4a7a-a38e-c50d7144315d","type":"ResetTool"},{"id":"8ffb6549-4fe2-4ce5-b6bd-8230352a2e84","type":"HelpTool"}]},"id":"97234b41-d5be-49b3-a34a-ab2d7434ec53","type":"Toolbar"},{"attributes":{"formatter":{"id":"765e85fd-5e50-43f8-a62f-8ef0dca1fce3","type":"BasicTickFormatter"},"plot":{"id":"82fb8da4-0345-426e-b171-47131bf5ce1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"99973a21-defd-4fa7-b778-bd675551bde7","type":"BasicTicker"}},"id":"39ad07c4-10b5-4ed9-b5b6-b2c1c42f4092","type":"LinearAxis"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2952b11e-f513-4e01-bbb5-ef0066337da2","type":"Ray"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"690c425b-7ad8-4371-a20d-7e2cc14850da","type":"Ray"},{"attributes":{"below":[{"id":"ab57b166-daa1-422b-aa42-405079b31eda","type":"LinearAxis"}],"left":[{"id":"39ad07c4-10b5-4ed9-b5b6-b2c1c42f4092","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ab57b166-daa1-422b-aa42-405079b31eda","type":"LinearAxis"},{"id":"8c78e1f0-295d-4f35-93e5-db6528ad93ff","type":"Grid"},{"id":"39ad07c4-10b5-4ed9-b5b6-b2c1c42f4092","type":"LinearAxis"},{"id":"a8c735b7-4dd5-4d45-9e5b-7cd909566b63","type":"Grid"},{"id":"80d3f7a8-942c-4efe-8d27-e70624d06fc3","type":"BoxAnnotation"},{"id":"2bf35efb-9d5f-4af5-88fa-e7c42dd9ade9","type":"GlyphRenderer"}],"title":{"id":"b7ac29d0-ec8c-43c0-bbc9-fbe7cbe345b6","type":"Title"},"toolbar":{"id":"97234b41-d5be-49b3-a34a-ab2d7434ec53","type":"Toolbar"},"x_range":{"id":"fdfcbf9e-8680-41b2-80d7-4df238516ec4","type":"DataRange1d"},"x_scale":{"id":"01eeb770-671d-4b49-9554-571bfdac898a","type":"LinearScale"},"y_range":{"id":"4006db53-18c6-4ec1-9096-e64dd00984e2","type":"DataRange1d"},"y_scale":{"id":"a8225001-a098-4728-b625-7814d2344348","type":"LinearScale"}},"id":"82fb8da4-0345-426e-b171-47131bf5ce1c","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80d3f7a8-942c-4efe-8d27-e70624d06fc3","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"80d3f7a8-942c-4efe-8d27-e70624d06fc3","type":"BoxAnnotation"}},"id":"01cf5206-6169-48b9-b5b0-fd730137bce9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"82fb8da4-0345-426e-b171-47131bf5ce1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9953715c-17f3-431d-a047-0ab0fb7c405c","type":"BasicTicker"}},"id":"8c78e1f0-295d-4f35-93e5-db6528ad93ff","type":"Grid"},{"attributes":{},"id":"99973a21-defd-4fa7-b778-bd675551bde7","type":"BasicTicker"},{"attributes":{},"id":"a8225001-a098-4728-b625-7814d2344348","type":"LinearScale"},{"attributes":{},"id":"32b432f4-e843-4a7a-a38e-c50d7144315d","type":"ResetTool"},{"attributes":{},"id":"765e85fd-5e50-43f8-a62f-8ef0dca1fce3","type":"BasicTickFormatter"},{"attributes":{},"id":"01eeb770-671d-4b49-9554-571bfdac898a","type":"LinearScale"},{"attributes":{"callback":null},"id":"4006db53-18c6-4ec1-9096-e64dd00984e2","type":"DataRange1d"},{"attributes":{},"id":"d283368e-9f58-4e64-9fa3-0d9c1cdbce68","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2bf894ce-b24d-416b-bfa9-b6d9815bf40f","type":"ColumnDataSource"},"glyph":{"id":"2952b11e-f513-4e01-bbb5-ef0066337da2","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"690c425b-7ad8-4371-a20d-7e2cc14850da","type":"Ray"},"selection_glyph":null,"view":{"id":"b1d5c24d-459d-4007-84a6-579cef2770f0","type":"CDSView"}},"id":"2bf35efb-9d5f-4af5-88fa-e7c42dd9ade9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","angle"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"2bf894ce-b24d-416b-bfa9-b6d9815bf40f","type":"ColumnDataSource"},{"attributes":{},"id":"0a8a4feb-39fb-408d-96e1-1bbf6c195df6","type":"PanTool"},{"attributes":{},"id":"9953715c-17f3-431d-a047-0ab0fb7c405c","type":"BasicTicker"}],"root_ids":["82fb8da4-0345-426e-b171-47131bf5ce1c"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5c2695a6-3c98-4704-bc3c-e32388c5c9e8","elementid":"a2069af5-d882-4753-8001-1cae5180771f","modelid":"82fb8da4-0345-426e-b171-47131bf5ce1c"}];
                
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
