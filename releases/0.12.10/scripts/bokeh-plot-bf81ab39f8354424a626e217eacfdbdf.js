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
      };var element = document.getElementById("bb458a4a-5aed-4618-b28e-5d271af663e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb458a4a-5aed-4618-b28e-5d271af663e3' but no matching script tag was found. ")
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
                    var docs_json = {"e4a607ec-db7d-43f6-84da-b81737c38692":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"643d8523-398e-41eb-838b-56eb5fbe2d6a","type":"PanTool"},{"id":"89e388ee-d294-4ca2-bb86-cd7b9b346dc4","type":"WheelZoomTool"},{"id":"f88d4dca-efac-48be-85cc-5076bc37f78a","type":"BoxZoomTool"},{"id":"94b84708-6f17-43c6-9903-fd5a9981f224","type":"SaveTool"},{"id":"9d5729f6-b8f5-425a-882d-f15144d9ffa4","type":"ResetTool"},{"id":"06c28d60-2beb-4c9b-8026-5b9c8eb68e77","type":"HelpTool"}]},"id":"dc658800-1312-462d-8da9-29371ebe6bc7","type":"Toolbar"},{"attributes":{"callback":null},"id":"5ef77a1a-c88c-4b44-a190-6839a8febddc","type":"DataRange1d"},{"attributes":{},"id":"f57b1e2d-fa22-4ba6-82de-1873cd9fd98c","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e7a7663-5d20-49f5-9675-a8c2b5a3c2fa","type":"Line"},{"attributes":{"callback":null},"id":"a3758f5a-751c-44d2-b59a-ba419e7a818f","type":"DataRange1d"},{"attributes":{},"id":"7f4cfea0-6350-4e13-87c7-0427f54b3e38","type":"LinearScale"},{"attributes":{},"id":"edcefc30-03e9-4721-9db2-d399eb0b932c","type":"LinearScale"},{"attributes":{"plot":{"id":"80038812-7d35-44f0-bf1a-0a446eae7895","subtype":"Figure","type":"Plot"},"ticker":{"id":"f57b1e2d-fa22-4ba6-82de-1873cd9fd98c","type":"BasicTicker"}},"id":"877caaf7-84d7-444b-9141-723f97912a82","type":"Grid"},{"attributes":{"formatter":{"id":"8a4685a2-17af-436e-94db-119f9bebf1ef","type":"BasicTickFormatter"},"plot":{"id":"80038812-7d35-44f0-bf1a-0a446eae7895","subtype":"Figure","type":"Plot"},"ticker":{"id":"f57b1e2d-fa22-4ba6-82de-1873cd9fd98c","type":"BasicTicker"}},"id":"77f6edef-f9b5-4060-a0e4-bcc5e13e391f","type":"LinearAxis"},{"attributes":{"formatter":{"id":"2217e3c4-cff3-49e8-b7a0-69a2a9987a75","type":"BasicTickFormatter"},"plot":{"id":"80038812-7d35-44f0-bf1a-0a446eae7895","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb3c3db2-369d-4699-aa0c-2730bd70904f","type":"BasicTicker"}},"id":"bb991dc7-288c-46fa-b2fd-1d5f07fa1bdc","type":"LinearAxis"},{"attributes":{},"id":"643d8523-398e-41eb-838b-56eb5fbe2d6a","type":"PanTool"},{"attributes":{},"id":"bb3c3db2-369d-4699-aa0c-2730bd70904f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"80038812-7d35-44f0-bf1a-0a446eae7895","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb3c3db2-369d-4699-aa0c-2730bd70904f","type":"BasicTicker"}},"id":"f6b4dc76-eaee-4db7-b128-ae3c07554c7f","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1bb67f6-7c87-4078-854d-6053b18ef629","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"303a5960-9dd5-4d38-a165-96c3a5c228d9","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"26086536-a829-481c-9851-1d3a593b4be3","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c7ff1d8-c030-4f35-827f-80b0b8161805","type":"BoxAnnotation"},{"attributes":{"source":{"id":"26086536-a829-481c-9851-1d3a593b4be3","type":"ColumnDataSource"}},"id":"73ce77b7-965c-45c5-a449-49cea4d51b18","type":"CDSView"},{"attributes":{},"id":"89e388ee-d294-4ca2-bb86-cd7b9b346dc4","type":"WheelZoomTool"},{"attributes":{},"id":"94b84708-6f17-43c6-9903-fd5a9981f224","type":"SaveTool"},{"attributes":{"overlay":{"id":"0c7ff1d8-c030-4f35-827f-80b0b8161805","type":"BoxAnnotation"}},"id":"f88d4dca-efac-48be-85cc-5076bc37f78a","type":"BoxZoomTool"},{"attributes":{},"id":"9d5729f6-b8f5-425a-882d-f15144d9ffa4","type":"ResetTool"},{"attributes":{},"id":"06c28d60-2beb-4c9b-8026-5b9c8eb68e77","type":"HelpTool"},{"attributes":{"data_source":{"id":"303a5960-9dd5-4d38-a165-96c3a5c228d9","type":"ColumnDataSource"},"glyph":{"id":"fbc4a1e0-f863-4e6c-b4b2-7c209c46ef13","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cb1253ed-5189-42b9-8926-1498fcabcd3a","type":"Circle"},"selection_glyph":null,"view":{"id":"9c5024f5-c3d1-4c40-94f4-6c9a40e67de5","type":"CDSView"}},"id":"46df6c68-dbe3-438d-a8c3-d0e752ed70c4","type":"GlyphRenderer"},{"attributes":{},"id":"8a4685a2-17af-436e-94db-119f9bebf1ef","type":"BasicTickFormatter"},{"attributes":{},"id":"2217e3c4-cff3-49e8-b7a0-69a2a9987a75","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"96c9f386-bf9f-46b8-954e-faa67e24c6b0","type":"Title"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"fbc4a1e0-f863-4e6c-b4b2-7c209c46ef13","type":"Circle"},{"attributes":{"source":{"id":"303a5960-9dd5-4d38-a165-96c3a5c228d9","type":"ColumnDataSource"}},"id":"9c5024f5-c3d1-4c40-94f4-6c9a40e67de5","type":"CDSView"},{"attributes":{"data_source":{"id":"26086536-a829-481c-9851-1d3a593b4be3","type":"ColumnDataSource"},"glyph":{"id":"3e7a7663-5d20-49f5-9675-a8c2b5a3c2fa","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1bb67f6-7c87-4078-854d-6053b18ef629","type":"Line"},"selection_glyph":null,"view":{"id":"73ce77b7-965c-45c5-a449-49cea4d51b18","type":"CDSView"}},"id":"4d26baa1-7631-4ced-adc2-c263ec3009ba","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb1253ed-5189-42b9-8926-1498fcabcd3a","type":"Circle"},{"attributes":{"below":[{"id":"77f6edef-f9b5-4060-a0e4-bcc5e13e391f","type":"LinearAxis"}],"left":[{"id":"bb991dc7-288c-46fa-b2fd-1d5f07fa1bdc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"77f6edef-f9b5-4060-a0e4-bcc5e13e391f","type":"LinearAxis"},{"id":"877caaf7-84d7-444b-9141-723f97912a82","type":"Grid"},{"id":"bb991dc7-288c-46fa-b2fd-1d5f07fa1bdc","type":"LinearAxis"},{"id":"f6b4dc76-eaee-4db7-b128-ae3c07554c7f","type":"Grid"},{"id":"0c7ff1d8-c030-4f35-827f-80b0b8161805","type":"BoxAnnotation"},{"id":"4d26baa1-7631-4ced-adc2-c263ec3009ba","type":"GlyphRenderer"},{"id":"46df6c68-dbe3-438d-a8c3-d0e752ed70c4","type":"GlyphRenderer"}],"title":{"id":"96c9f386-bf9f-46b8-954e-faa67e24c6b0","type":"Title"},"toolbar":{"id":"dc658800-1312-462d-8da9-29371ebe6bc7","type":"Toolbar"},"x_range":{"id":"5ef77a1a-c88c-4b44-a190-6839a8febddc","type":"DataRange1d"},"x_scale":{"id":"7f4cfea0-6350-4e13-87c7-0427f54b3e38","type":"LinearScale"},"y_range":{"id":"a3758f5a-751c-44d2-b59a-ba419e7a818f","type":"DataRange1d"},"y_scale":{"id":"edcefc30-03e9-4721-9db2-d399eb0b932c","type":"LinearScale"}},"id":"80038812-7d35-44f0-bf1a-0a446eae7895","subtype":"Figure","type":"Plot"}],"root_ids":["80038812-7d35-44f0-bf1a-0a446eae7895"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e4a607ec-db7d-43f6-84da-b81737c38692","elementid":"bb458a4a-5aed-4618-b28e-5d271af663e3","modelid":"80038812-7d35-44f0-bf1a-0a446eae7895"}];
                
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
