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
      };var element = document.getElementById("443ae4c4-a592-4e31-872d-055d0594ea39");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '443ae4c4-a592-4e31-872d-055d0594ea39' but no matching script tag was found. ")
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
                    var docs_json = {"aa820291-1275-4ce3-ae3b-8a01bc9e74fa":{"roots":{"references":[{"attributes":{},"id":"c46b3222-8e52-4620-ad29-fe27d3ccb48f","type":"SaveTool"},{"attributes":{"below":[{"id":"27598a1d-18d4-4973-9352-a23f0c3b5ab3","type":"LinearAxis"},{"id":"a3647d27-2271-4651-8bb8-ac6d915e3d84","type":"Title"}],"left":[{"id":"b4b4a71f-817b-4b7a-b2b0-4df06949c1c0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"27598a1d-18d4-4973-9352-a23f0c3b5ab3","type":"LinearAxis"},{"id":"fe0563e2-7f6f-4179-84df-b87ef078da94","type":"Grid"},{"id":"b4b4a71f-817b-4b7a-b2b0-4df06949c1c0","type":"LinearAxis"},{"id":"2fe42f94-304a-4f02-9505-0f9e6c5f44d3","type":"Grid"},{"id":"f51e02d4-60fe-43bb-b4f4-8b81e38c885d","type":"BoxAnnotation"},{"id":"5d0742b0-dac9-451c-8615-9a31f2054562","type":"GlyphRenderer"},{"id":"a3647d27-2271-4651-8bb8-ac6d915e3d84","type":"Title"}],"title":{"id":"3592dbe0-693d-4c58-ba8b-fa1d92ff88b7","type":"Title"},"title_location":"left","toolbar":{"id":"9bccdaa9-8f3c-47ff-8c2a-6ba586013ead","type":"Toolbar"},"x_range":{"id":"b5d9e0d2-d081-44b6-a38c-0d97b99b1e9b","type":"DataRange1d"},"x_scale":{"id":"a799e7ac-4553-4892-8d13-b0014770f859","type":"LinearScale"},"y_range":{"id":"c5cb5d8a-4ac1-4b61-a63c-05cc28bed8cf","type":"DataRange1d"},"y_scale":{"id":"0ecf3943-5fd4-4b48-b748-38c6598d6738","type":"LinearScale"}},"id":"310866d5-3e07-4cac-8d3a-7bcf63061927","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"242af143-3e46-464b-83b6-458f5a588885","type":"Circle"},{"attributes":{"align":"center","plot":{"id":"310866d5-3e07-4cac-8d3a-7bcf63061927","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"a3647d27-2271-4651-8bb8-ac6d915e3d84","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"84459319-9754-47cf-90a6-b4f302524a35","type":"PanTool"},{"id":"43d31227-8e59-4632-b1c6-420454231cab","type":"WheelZoomTool"},{"id":"ae96b91b-f9b2-4df5-a7ab-606ce0a6f5d8","type":"BoxZoomTool"},{"id":"c46b3222-8e52-4620-ad29-fe27d3ccb48f","type":"SaveTool"},{"id":"7f29d2ef-99b9-41c5-8a70-1689a79ecdcf","type":"ResetTool"},{"id":"ccc54960-f47e-4ec7-a406-bfd2693aa8ae","type":"HelpTool"}]},"id":"9bccdaa9-8f3c-47ff-8c2a-6ba586013ead","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f51e02d4-60fe-43bb-b4f4-8b81e38c885d","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"55f6b2cc-40ff-400c-9dca-d22d75cdb110","type":"Circle"},{"attributes":{"plot":{"id":"310866d5-3e07-4cac-8d3a-7bcf63061927","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8c2534c-13cf-4b3f-8ca7-7c452ca803ac","type":"BasicTicker"}},"id":"fe0563e2-7f6f-4179-84df-b87ef078da94","type":"Grid"},{"attributes":{},"id":"ccc54960-f47e-4ec7-a406-bfd2693aa8ae","type":"HelpTool"},{"attributes":{"data_source":{"id":"f76192e3-68e3-40e0-a6ee-00bfb65d80ae","type":"ColumnDataSource"},"glyph":{"id":"55f6b2cc-40ff-400c-9dca-d22d75cdb110","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"242af143-3e46-464b-83b6-458f5a588885","type":"Circle"},"selection_glyph":null,"view":{"id":"d8f79204-8557-4177-a811-58b485db436c","type":"CDSView"}},"id":"5d0742b0-dac9-451c-8615-9a31f2054562","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"f51e02d4-60fe-43bb-b4f4-8b81e38c885d","type":"BoxAnnotation"}},"id":"ae96b91b-f9b2-4df5-a7ab-606ce0a6f5d8","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"c5cb5d8a-4ac1-4b61-a63c-05cc28bed8cf","type":"DataRange1d"},{"attributes":{},"id":"d8c2534c-13cf-4b3f-8ca7-7c452ca803ac","type":"BasicTicker"},{"attributes":{},"id":"43d31227-8e59-4632-b1c6-420454231cab","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Left Title"},"id":"3592dbe0-693d-4c58-ba8b-fa1d92ff88b7","type":"Title"},{"attributes":{},"id":"3c25f9f9-e8f5-49e9-a569-3953852512a9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4381bda9-5b82-42e0-8195-56a2c2311754","type":"BasicTickFormatter"},"plot":{"id":"310866d5-3e07-4cac-8d3a-7bcf63061927","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c25f9f9-e8f5-49e9-a569-3953852512a9","type":"BasicTicker"}},"id":"b4b4a71f-817b-4b7a-b2b0-4df06949c1c0","type":"LinearAxis"},{"attributes":{},"id":"a799e7ac-4553-4892-8d13-b0014770f859","type":"LinearScale"},{"attributes":{},"id":"7f29d2ef-99b9-41c5-8a70-1689a79ecdcf","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"310866d5-3e07-4cac-8d3a-7bcf63061927","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c25f9f9-e8f5-49e9-a569-3953852512a9","type":"BasicTicker"}},"id":"2fe42f94-304a-4f02-9505-0f9e6c5f44d3","type":"Grid"},{"attributes":{"formatter":{"id":"8ac16f56-55d2-4489-9eaf-b3d71037f9b8","type":"BasicTickFormatter"},"plot":{"id":"310866d5-3e07-4cac-8d3a-7bcf63061927","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8c2534c-13cf-4b3f-8ca7-7c452ca803ac","type":"BasicTicker"}},"id":"27598a1d-18d4-4973-9352-a23f0c3b5ab3","type":"LinearAxis"},{"attributes":{"source":{"id":"f76192e3-68e3-40e0-a6ee-00bfb65d80ae","type":"ColumnDataSource"}},"id":"d8f79204-8557-4177-a811-58b485db436c","type":"CDSView"},{"attributes":{"callback":null},"id":"b5d9e0d2-d081-44b6-a38c-0d97b99b1e9b","type":"DataRange1d"},{"attributes":{},"id":"0ecf3943-5fd4-4b48-b748-38c6598d6738","type":"LinearScale"},{"attributes":{},"id":"84459319-9754-47cf-90a6-b4f302524a35","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"f76192e3-68e3-40e0-a6ee-00bfb65d80ae","type":"ColumnDataSource"},{"attributes":{},"id":"4381bda9-5b82-42e0-8195-56a2c2311754","type":"BasicTickFormatter"},{"attributes":{},"id":"8ac16f56-55d2-4489-9eaf-b3d71037f9b8","type":"BasicTickFormatter"}],"root_ids":["310866d5-3e07-4cac-8d3a-7bcf63061927"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"aa820291-1275-4ce3-ae3b-8a01bc9e74fa","elementid":"443ae4c4-a592-4e31-872d-055d0594ea39","modelid":"310866d5-3e07-4cac-8d3a-7bcf63061927"}];
                
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
