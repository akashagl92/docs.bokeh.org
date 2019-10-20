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
      };var element = document.getElementById("3e93f8f9-1d27-4396-a833-2442cf847d9f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3e93f8f9-1d27-4396-a833-2442cf847d9f' but no matching script tag was found. ")
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
                    var docs_json = {"b094bfdd-c0ab-467b-b66b-9495f530210d":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"d9eea116-79a3-4979-abc1-0249578baf56","type":"Title"},{"attributes":{"callback":null},"id":"71211094-9e82-4e56-9379-15420b7b55d7","type":"DataRange1d"},{"attributes":{},"id":"13b30569-5ee1-42d7-95cc-6f6714a9d239","type":"LinearScale"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7197de29-60f0-4ae7-9ffc-b0eacd51834a","type":"Segment"},{"attributes":{},"id":"39da53f0-f6e5-4dd2-a1c3-db95c5b695ec","type":"LinearScale"},{"attributes":{},"id":"87234ddd-763c-41ec-a533-0e51fa680808","type":"HelpTool"},{"attributes":{},"id":"b8742784-e355-46eb-8fd9-21a7f39d4809","type":"ResetTool"},{"attributes":{},"id":"15eaee2a-8697-45d2-be21-cd6d94e4337a","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"c192a854-1574-48e1-9893-bd1a9d1c0cd4","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7e6f757-c2b7-4cc7-8a3a-a90716af5482","type":"BasicTicker"}},"id":"f25bcae2-debb-4dfa-9a95-f2fa149b6e01","type":"Grid"},{"attributes":{"data_source":{"id":"74619514-3418-40da-95f8-e4248b64bdf8","type":"ColumnDataSource"},"glyph":{"id":"7197de29-60f0-4ae7-9ffc-b0eacd51834a","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9d28078d-7b0f-46ab-af62-caf4eaa20881","type":"Segment"},"selection_glyph":null,"view":{"id":"468c5e6e-c1d7-41bf-9545-8cfbd5fb9a82","type":"CDSView"}},"id":"277eec4f-8b84-425c-ac4d-17aed8cf09c8","type":"GlyphRenderer"},{"attributes":{},"id":"130f3438-aecf-4a0f-ba4f-503999fcb662","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"74619514-3418-40da-95f8-e4248b64bdf8","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"40dd7625-3064-4c3a-8632-0360a3ad3a5f","type":"BasicTickFormatter"},"plot":{"id":"c192a854-1574-48e1-9893-bd1a9d1c0cd4","subtype":"Figure","type":"Plot"},"ticker":{"id":"c7e6f757-c2b7-4cc7-8a3a-a90716af5482","type":"BasicTicker"}},"id":"7aa08d68-ec32-4023-800e-f90701e6c7a5","type":"LinearAxis"},{"attributes":{},"id":"0fef7ee8-73ec-4216-b208-4c44746f3d0b","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ac30bacf-8867-4475-b4ad-44f2e1c0419f","type":"LinearAxis"}],"left":[{"id":"7aa08d68-ec32-4023-800e-f90701e6c7a5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ac30bacf-8867-4475-b4ad-44f2e1c0419f","type":"LinearAxis"},{"id":"ec8143c5-57c0-4974-b679-7b4433a4cce5","type":"Grid"},{"id":"7aa08d68-ec32-4023-800e-f90701e6c7a5","type":"LinearAxis"},{"id":"f25bcae2-debb-4dfa-9a95-f2fa149b6e01","type":"Grid"},{"id":"2743d3b3-a0c9-495f-abe1-8095167c9958","type":"BoxAnnotation"},{"id":"277eec4f-8b84-425c-ac4d-17aed8cf09c8","type":"GlyphRenderer"}],"title":{"id":"d9eea116-79a3-4979-abc1-0249578baf56","type":"Title"},"toolbar":{"id":"bf59b4aa-15d6-4aa3-95c6-0c9d04b3b19c","type":"Toolbar"},"x_range":{"id":"1138e230-f3c7-41d7-a0ef-48911de06d35","type":"DataRange1d"},"x_scale":{"id":"13b30569-5ee1-42d7-95cc-6f6714a9d239","type":"LinearScale"},"y_range":{"id":"71211094-9e82-4e56-9379-15420b7b55d7","type":"DataRange1d"},"y_scale":{"id":"39da53f0-f6e5-4dd2-a1c3-db95c5b695ec","type":"LinearScale"}},"id":"c192a854-1574-48e1-9893-bd1a9d1c0cd4","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"0fef7ee8-73ec-4216-b208-4c44746f3d0b","type":"BasicTickFormatter"},"plot":{"id":"c192a854-1574-48e1-9893-bd1a9d1c0cd4","subtype":"Figure","type":"Plot"},"ticker":{"id":"67940462-d874-4397-abec-6e801a548639","type":"BasicTicker"}},"id":"ac30bacf-8867-4475-b4ad-44f2e1c0419f","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"15eaee2a-8697-45d2-be21-cd6d94e4337a","type":"PanTool"},{"id":"130f3438-aecf-4a0f-ba4f-503999fcb662","type":"WheelZoomTool"},{"id":"8e40dd45-8c48-4903-b8a8-3057737ce067","type":"BoxZoomTool"},{"id":"952dd9ca-112a-492b-93ec-3fb95ff47b67","type":"SaveTool"},{"id":"b8742784-e355-46eb-8fd9-21a7f39d4809","type":"ResetTool"},{"id":"87234ddd-763c-41ec-a533-0e51fa680808","type":"HelpTool"}]},"id":"bf59b4aa-15d6-4aa3-95c6-0c9d04b3b19c","type":"Toolbar"},{"attributes":{},"id":"c7e6f757-c2b7-4cc7-8a3a-a90716af5482","type":"BasicTicker"},{"attributes":{"source":{"id":"74619514-3418-40da-95f8-e4248b64bdf8","type":"ColumnDataSource"}},"id":"468c5e6e-c1d7-41bf-9545-8cfbd5fb9a82","type":"CDSView"},{"attributes":{"callback":null},"id":"1138e230-f3c7-41d7-a0ef-48911de06d35","type":"DataRange1d"},{"attributes":{},"id":"67940462-d874-4397-abec-6e801a548639","type":"BasicTicker"},{"attributes":{"plot":{"id":"c192a854-1574-48e1-9893-bd1a9d1c0cd4","subtype":"Figure","type":"Plot"},"ticker":{"id":"67940462-d874-4397-abec-6e801a548639","type":"BasicTicker"}},"id":"ec8143c5-57c0-4974-b679-7b4433a4cce5","type":"Grid"},{"attributes":{"overlay":{"id":"2743d3b3-a0c9-495f-abe1-8095167c9958","type":"BoxAnnotation"}},"id":"8e40dd45-8c48-4903-b8a8-3057737ce067","type":"BoxZoomTool"},{"attributes":{},"id":"952dd9ca-112a-492b-93ec-3fb95ff47b67","type":"SaveTool"},{"attributes":{},"id":"40dd7625-3064-4c3a-8632-0360a3ad3a5f","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"9d28078d-7b0f-46ab-af62-caf4eaa20881","type":"Segment"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2743d3b3-a0c9-495f-abe1-8095167c9958","type":"BoxAnnotation"}],"root_ids":["c192a854-1574-48e1-9893-bd1a9d1c0cd4"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"b094bfdd-c0ab-467b-b66b-9495f530210d","elementid":"3e93f8f9-1d27-4396-a833-2442cf847d9f","modelid":"c192a854-1574-48e1-9893-bd1a9d1c0cd4"}];
                
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
