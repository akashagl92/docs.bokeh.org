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
      };var element = document.getElementById("51548636-ee64-4045-b657-7908171a590f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '51548636-ee64-4045-b657-7908171a590f' but no matching script tag was found. ")
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
                    var docs_json = {"58d49cdb-f9a3-4e02-bad6-61fd258d8ff1":{"roots":{"references":[{"attributes":{},"id":"ba825f81-0972-4a74-9f50-644eb0d90409","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"63cdfb66-bb2e-44a7-9b74-502328e57116","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"647d02a0-105a-414a-bc15-88ebf2d84aa1","type":"Title"},{"attributes":{"callback":null},"id":"db01efe7-43a0-4d5a-b296-4d66fc14cce9","type":"DataRange1d"},{"attributes":{"below":[{"id":"7898e897-147b-49b6-9855-d76600d31a81","type":"LinearAxis"}],"left":[{"id":"3d93f100-d452-4b58-8944-a147dd906da8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7898e897-147b-49b6-9855-d76600d31a81","type":"LinearAxis"},{"id":"2bfca7ab-d3b3-4613-89a6-363984af554f","type":"Grid"},{"id":"3d93f100-d452-4b58-8944-a147dd906da8","type":"LinearAxis"},{"id":"a913a697-0de2-4432-a651-1673bacc144c","type":"Grid"},{"id":"63cdfb66-bb2e-44a7-9b74-502328e57116","type":"BoxAnnotation"},{"id":"66432aa8-4e1b-4d9c-bfc2-e046ef5f77f4","type":"GlyphRenderer"}],"title":{"id":"647d02a0-105a-414a-bc15-88ebf2d84aa1","type":"Title"},"toolbar":{"id":"70733968-cb55-4d47-8bd1-c5b3e866c2f5","type":"Toolbar"},"x_range":{"id":"db01efe7-43a0-4d5a-b296-4d66fc14cce9","type":"DataRange1d"},"x_scale":{"id":"c2282d48-d90a-401d-94a4-6a4e49b79c47","type":"LinearScale"},"y_range":{"id":"61c673fa-c6de-45e1-a4c8-b3999bea000c","type":"DataRange1d"},"y_scale":{"id":"d1435e89-9e0a-447a-b81f-d19a96757e79","type":"LinearScale"}},"id":"51e059ad-c62e-4c82-bea7-2952dba2bf8d","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"3f88425e-07da-454c-9a4b-00b9c402549a","type":"ColumnDataSource"}},"id":"b9d88655-63cb-4bec-b883-343e1d5bb9e5","type":"CDSView"},{"attributes":{"data_source":{"id":"3f88425e-07da-454c-9a4b-00b9c402549a","type":"ColumnDataSource"},"glyph":{"id":"d6a3113b-72ac-491e-b576-aaa4098b0146","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4f34b176-16af-468e-a432-77c206029963","type":"CircleX"},"selection_glyph":null,"view":{"id":"b9d88655-63cb-4bec-b883-343e1d5bb9e5","type":"CDSView"}},"id":"66432aa8-4e1b-4d9c-bfc2-e046ef5f77f4","type":"GlyphRenderer"},{"attributes":{},"id":"ca099bbb-854b-44b9-94d3-07380eff6e1d","type":"BasicTickFormatter"},{"attributes":{},"id":"c2282d48-d90a-401d-94a4-6a4e49b79c47","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6a3113b-72ac-491e-b576-aaa4098b0146","type":"CircleX"},{"attributes":{},"id":"9a310f59-1a8a-42ef-ab06-86f17bbc50a9","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"51e059ad-c62e-4c82-bea7-2952dba2bf8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba825f81-0972-4a74-9f50-644eb0d90409","type":"BasicTicker"}},"id":"a913a697-0de2-4432-a651-1673bacc144c","type":"Grid"},{"attributes":{},"id":"d1435e89-9e0a-447a-b81f-d19a96757e79","type":"LinearScale"},{"attributes":{},"id":"30992ba0-6e7e-4eb0-85f7-55fbe69fdc37","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"290ba1da-11c3-41ab-aab5-b2c6f589beb4","type":"PanTool"},{"id":"4f3d2770-ecd7-4ef9-838f-d62991859454","type":"WheelZoomTool"},{"id":"0114e03b-e4dd-425a-9cb0-e028c0975e1a","type":"BoxZoomTool"},{"id":"a30a6dca-d99d-425d-b6f4-c88f2651cd28","type":"SaveTool"},{"id":"79126840-c550-4167-b015-1d55520077a4","type":"ResetTool"},{"id":"9a310f59-1a8a-42ef-ab06-86f17bbc50a9","type":"HelpTool"}]},"id":"70733968-cb55-4d47-8bd1-c5b3e866c2f5","type":"Toolbar"},{"attributes":{},"id":"a30a6dca-d99d-425d-b6f4-c88f2651cd28","type":"SaveTool"},{"attributes":{"overlay":{"id":"63cdfb66-bb2e-44a7-9b74-502328e57116","type":"BoxAnnotation"}},"id":"0114e03b-e4dd-425a-9cb0-e028c0975e1a","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f34b176-16af-468e-a432-77c206029963","type":"CircleX"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"3f88425e-07da-454c-9a4b-00b9c402549a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"30992ba0-6e7e-4eb0-85f7-55fbe69fdc37","type":"BasicTickFormatter"},"plot":{"id":"51e059ad-c62e-4c82-bea7-2952dba2bf8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8375a25-7e2a-44f4-bcb0-6c84657948c8","type":"BasicTicker"}},"id":"7898e897-147b-49b6-9855-d76600d31a81","type":"LinearAxis"},{"attributes":{"plot":{"id":"51e059ad-c62e-4c82-bea7-2952dba2bf8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8375a25-7e2a-44f4-bcb0-6c84657948c8","type":"BasicTicker"}},"id":"2bfca7ab-d3b3-4613-89a6-363984af554f","type":"Grid"},{"attributes":{"callback":null},"id":"61c673fa-c6de-45e1-a4c8-b3999bea000c","type":"DataRange1d"},{"attributes":{},"id":"290ba1da-11c3-41ab-aab5-b2c6f589beb4","type":"PanTool"},{"attributes":{},"id":"79126840-c550-4167-b015-1d55520077a4","type":"ResetTool"},{"attributes":{"formatter":{"id":"ca099bbb-854b-44b9-94d3-07380eff6e1d","type":"BasicTickFormatter"},"plot":{"id":"51e059ad-c62e-4c82-bea7-2952dba2bf8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba825f81-0972-4a74-9f50-644eb0d90409","type":"BasicTicker"}},"id":"3d93f100-d452-4b58-8944-a147dd906da8","type":"LinearAxis"},{"attributes":{},"id":"4f3d2770-ecd7-4ef9-838f-d62991859454","type":"WheelZoomTool"},{"attributes":{},"id":"b8375a25-7e2a-44f4-bcb0-6c84657948c8","type":"BasicTicker"}],"root_ids":["51e059ad-c62e-4c82-bea7-2952dba2bf8d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"58d49cdb-f9a3-4e02-bad6-61fd258d8ff1","elementid":"51548636-ee64-4045-b657-7908171a590f","modelid":"51e059ad-c62e-4c82-bea7-2952dba2bf8d"}];
                
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
