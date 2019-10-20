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
      };var element = document.getElementById("3825ffa6-901e-4c5b-a98a-3b503252851a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3825ffa6-901e-4c5b-a98a-3b503252851a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"e86aade4-4679-4288-a2f5-09f5c6bc8c1c":{"roots":{"references":[{"attributes":{"items":[{"id":"e98f4280-1c2a-4912-8b43-d05ac456b095","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"bbd7d21f-ffa2-4577-a59c-723300bafb2d","subtype":"Figure","type":"Plot"}},"id":"2e7bfa69-f316-443c-9e35-6cee21e6bb9a","type":"Legend"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"ab251e3d-e275-414c-9583-2e061d87c44c","type":"FactorRange"},{"attributes":{},"id":"ee44095a-24c0-42fc-8302-752d89383c71","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":9,"start":0},"id":"eb852753-7356-44e1-b096-87a866878d8f","type":"DataRange1d"},{"attributes":{"source":{"id":"11f413e0-9417-40b0-bd2a-b9bf98c21404","type":"ColumnDataSource"}},"id":"5c2f24f9-09e6-44d2-b200-32292e33f301","type":"CDSView"},{"attributes":{},"id":"71778935-9e47-43d4-aae7-dc499303d397","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"91ff47da-1f11-49bb-a956-a6e701dbfb54","type":"PanTool"},{"id":"e9bc39de-499a-4078-bef0-27e59e231a44","type":"WheelZoomTool"},{"id":"1ea296b8-d5c9-4704-8c5f-89b011c92ae6","type":"BoxZoomTool"},{"id":"bb7bf6f4-9983-4837-93de-249aa0c02a02","type":"SaveTool"},{"id":"b774d5da-46a7-49f9-9c4e-02bf18f5f170","type":"ResetTool"},{"id":"54c4b1a5-d69b-400d-8307-0d06e38e57de","type":"HelpTool"}]},"id":"7901a5db-3bb5-4af6-8021-ff043e4d7e45","type":"Toolbar"},{"attributes":{"data_source":{"id":"11f413e0-9417-40b0-bd2a-b9bf98c21404","type":"ColumnDataSource"},"glyph":{"id":"c0ef8529-eb15-48ad-8e08-b23d5c96d317","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"163e7e0a-65ac-48b8-ba5a-a46d1e9358e8","type":"VBar"},"selection_glyph":null,"view":{"id":"5c2f24f9-09e6-44d2-b200-32292e33f301","type":"CDSView"}},"id":"9f6b63eb-ee73-4de8-859b-fe70a6c92c69","type":"GlyphRenderer"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"960c0c2e-18b3-47a3-bcc4-e9e5861bc259","type":"CategoricalColorMapper"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"f00c0a66-65b9-4af7-a53f-45892412b3ff","type":"Title"},{"attributes":{},"id":"1c0d380e-2837-4f57-a801-e94533c8b9e3","type":"LinearScale"},{"attributes":{},"id":"bb7bf6f4-9983-4837-93de-249aa0c02a02","type":"SaveTool"},{"attributes":{},"id":"1d220920-c7f0-4081-9db7-825084f35b1a","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"bbd7d21f-ffa2-4577-a59c-723300bafb2d","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f7e0104-218d-4c0f-9482-b2cee27b4d27","type":"CategoricalTicker"}},"id":"0ee03ae7-6e73-4ca4-b183-85dea5a2e35a","type":"Grid"},{"attributes":{},"id":"b774d5da-46a7-49f9-9c4e-02bf18f5f170","type":"ResetTool"},{"attributes":{"overlay":{"id":"8429dda6-8ab2-4503-bc9f-54b4e4c62e08","type":"BoxAnnotation"}},"id":"1ea296b8-d5c9-4704-8c5f-89b011c92ae6","type":"BoxZoomTool"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"9f6b63eb-ee73-4de8-859b-fe70a6c92c69","type":"GlyphRenderer"}]},"id":"e98f4280-1c2a-4912-8b43-d05ac456b095","type":"LegendItem"},{"attributes":{},"id":"54c4b1a5-d69b-400d-8307-0d06e38e57de","type":"HelpTool"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"960c0c2e-18b3-47a3-bcc4-e9e5861bc259","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"c0ef8529-eb15-48ad-8e08-b23d5c96d317","type":"VBar"},{"attributes":{},"id":"58fc921c-b385-4fcb-a1bf-562578fae454","type":"Selection"},{"attributes":{"formatter":{"id":"aa99fcd2-3f66-4ab5-a8d8-f27afa2ef11f","type":"BasicTickFormatter"},"plot":{"id":"bbd7d21f-ffa2-4577-a59c-723300bafb2d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ef63e91-ac73-4e08-a457-e835bb22f708","type":"BasicTicker"}},"id":"f279fad4-8581-4d7c-ba25-648f8ae01c75","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ee44095a-24c0-42fc-8302-752d89383c71","type":"CategoricalTickFormatter"},"plot":{"id":"bbd7d21f-ffa2-4577-a59c-723300bafb2d","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f7e0104-218d-4c0f-9482-b2cee27b4d27","type":"CategoricalTicker"}},"id":"b14e7d51-9a4f-4699-9c9f-6d3a8393e935","type":"CategoricalAxis"},{"attributes":{},"id":"6ef63e91-ac73-4e08-a457-e835bb22f708","type":"BasicTicker"},{"attributes":{},"id":"91ff47da-1f11-49bb-a956-a6e701dbfb54","type":"PanTool"},{"attributes":{"below":[{"id":"b14e7d51-9a4f-4699-9c9f-6d3a8393e935","type":"CategoricalAxis"}],"left":[{"id":"f279fad4-8581-4d7c-ba25-648f8ae01c75","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"b14e7d51-9a4f-4699-9c9f-6d3a8393e935","type":"CategoricalAxis"},{"id":"0ee03ae7-6e73-4ca4-b183-85dea5a2e35a","type":"Grid"},{"id":"f279fad4-8581-4d7c-ba25-648f8ae01c75","type":"LinearAxis"},{"id":"53c278f0-c1ca-46f6-bc98-dca0d2fafca7","type":"Grid"},{"id":"8429dda6-8ab2-4503-bc9f-54b4e4c62e08","type":"BoxAnnotation"},{"id":"2e7bfa69-f316-443c-9e35-6cee21e6bb9a","type":"Legend"},{"id":"9f6b63eb-ee73-4de8-859b-fe70a6c92c69","type":"GlyphRenderer"}],"title":{"id":"f00c0a66-65b9-4af7-a53f-45892412b3ff","type":"Title"},"toolbar":{"id":"7901a5db-3bb5-4af6-8021-ff043e4d7e45","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ab251e3d-e275-414c-9583-2e061d87c44c","type":"FactorRange"},"x_scale":{"id":"1d220920-c7f0-4081-9db7-825084f35b1a","type":"CategoricalScale"},"y_range":{"id":"eb852753-7356-44e1-b096-87a866878d8f","type":"DataRange1d"},"y_scale":{"id":"1c0d380e-2837-4f57-a801-e94533c8b9e3","type":"LinearScale"}},"id":"bbd7d21f-ffa2-4577-a59c-723300bafb2d","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8429dda6-8ab2-4503-bc9f-54b4e4c62e08","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"bbd7d21f-ffa2-4577-a59c-723300bafb2d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ef63e91-ac73-4e08-a457-e835bb22f708","type":"BasicTicker"}},"id":"53c278f0-c1ca-46f6-bc98-dca0d2fafca7","type":"Grid"},{"attributes":{},"id":"aa99fcd2-3f66-4ab5-a8d8-f27afa2ef11f","type":"BasicTickFormatter"},{"attributes":{},"id":"3f7e0104-218d-4c0f-9482-b2cee27b4d27","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"58fc921c-b385-4fcb-a1bf-562578fae454","type":"Selection"},"selection_policy":{"id":"71778935-9e47-43d4-aae7-dc499303d397","type":"UnionRenderers"}},"id":"11f413e0-9417-40b0-bd2a-b9bf98c21404","type":"ColumnDataSource"},{"attributes":{},"id":"e9bc39de-499a-4078-bef0-27e59e231a44","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"163e7e0a-65ac-48b8-ba5a-a46d1e9358e8","type":"VBar"}],"root_ids":["bbd7d21f-ffa2-4577-a59c-723300bafb2d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e86aade4-4679-4288-a2f5-09f5c6bc8c1c","roots":{"bbd7d21f-ffa2-4577-a59c-723300bafb2d":"3825ffa6-901e-4c5b-a98a-3b503252851a"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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