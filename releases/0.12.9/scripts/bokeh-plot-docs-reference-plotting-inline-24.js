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
      };var element = document.getElementById("771704d9-6a85-4cb9-b4b0-d4fe322bd97c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '771704d9-6a85-4cb9-b4b0-d4fe322bd97c' but no matching script tag was found. ")
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
                    var docs_json = {"bf457708-98b1-4ce2-9b86-4cf045caf630":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"e38f5be8-33d9-494e-af8c-cc00e0d1ff1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"85f4c3a1-d9af-4411-9dc9-e4cc52716265","type":"BasicTicker"}},"id":"41b071b5-be1e-42d3-900b-8c3021ce4f4b","type":"Grid"},{"attributes":{"data_source":{"id":"b22f03ec-825b-4e90-ac93-ec1ce50ccff1","type":"ColumnDataSource"},"glyph":{"id":"4a0e77f2-ec5f-412c-9508-c1ded0e84195","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e8534948-2775-4540-8203-416913785c22","type":"VBar"},"selection_glyph":null,"view":{"id":"84b98ebf-2f79-4b84-99c1-0ec5a8284085","type":"CDSView"}},"id":"89c9fc2a-fb5f-46f7-8e92-fc6c97c4d5c0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"e8534948-2775-4540-8203-416913785c22","type":"VBar"},{"attributes":{},"id":"98c1d46d-2aa9-433b-a2fb-f81cf9495233","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"4a0e77f2-ec5f-412c-9508-c1ded0e84195","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2896af9d-ae25-4cb8-ac60-0c9a66a9b0fc","type":"BoxAnnotation"},{"attributes":{},"id":"701c20c4-d71c-42fb-b2bd-3fbe5011913f","type":"PanTool"},{"attributes":{"below":[{"id":"cd5371ac-412d-4c6e-aac4-95886fe363ae","type":"LinearAxis"}],"left":[{"id":"145730bd-2da3-428c-a3b5-159389dfd0fe","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cd5371ac-412d-4c6e-aac4-95886fe363ae","type":"LinearAxis"},{"id":"71d91a23-1fb2-42bb-82c7-234465d6bfb0","type":"Grid"},{"id":"145730bd-2da3-428c-a3b5-159389dfd0fe","type":"LinearAxis"},{"id":"41b071b5-be1e-42d3-900b-8c3021ce4f4b","type":"Grid"},{"id":"2896af9d-ae25-4cb8-ac60-0c9a66a9b0fc","type":"BoxAnnotation"},{"id":"89c9fc2a-fb5f-46f7-8e92-fc6c97c4d5c0","type":"GlyphRenderer"}],"title":{"id":"8fdf874e-48bf-4631-969a-56a9886f52df","type":"Title"},"toolbar":{"id":"67ac9c45-3494-4e9a-8b27-f789a1558070","type":"Toolbar"},"x_range":{"id":"b997a464-f749-435e-8382-be75a95e11c8","type":"DataRange1d"},"x_scale":{"id":"f7c88897-4473-4678-8c44-a3026fb6eca6","type":"LinearScale"},"y_range":{"id":"ea9c38f3-b51d-4630-b1e1-3bbdee25f9b8","type":"DataRange1d"},"y_scale":{"id":"d41f40f4-cd17-4254-8639-b26462e951ca","type":"LinearScale"}},"id":"e38f5be8-33d9-494e-af8c-cc00e0d1ff1c","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"701c20c4-d71c-42fb-b2bd-3fbe5011913f","type":"PanTool"},{"id":"069e464f-c74a-4381-9060-226692f0f587","type":"WheelZoomTool"},{"id":"7a5c1338-272e-4c60-807b-66eed7f35ff4","type":"BoxZoomTool"},{"id":"a06b4fe1-8d05-49a1-833b-f772f66dba00","type":"SaveTool"},{"id":"9dc9e6cb-23ea-4884-a011-1ff20541a10a","type":"ResetTool"},{"id":"8ec43738-05ac-46fc-8b84-cb06f59294cf","type":"HelpTool"}]},"id":"67ac9c45-3494-4e9a-8b27-f789a1558070","type":"Toolbar"},{"attributes":{},"id":"069e464f-c74a-4381-9060-226692f0f587","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"b997a464-f749-435e-8382-be75a95e11c8","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"b22f03ec-825b-4e90-ac93-ec1ce50ccff1","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"2896af9d-ae25-4cb8-ac60-0c9a66a9b0fc","type":"BoxAnnotation"}},"id":"7a5c1338-272e-4c60-807b-66eed7f35ff4","type":"BoxZoomTool"},{"attributes":{},"id":"07988a0f-e9bc-4774-8a1a-7b4515766e4a","type":"BasicTicker"},{"attributes":{},"id":"a06b4fe1-8d05-49a1-833b-f772f66dba00","type":"SaveTool"},{"attributes":{},"id":"85f4c3a1-d9af-4411-9dc9-e4cc52716265","type":"BasicTicker"},{"attributes":{},"id":"9dc9e6cb-23ea-4884-a011-1ff20541a10a","type":"ResetTool"},{"attributes":{"formatter":{"id":"98c1d46d-2aa9-433b-a2fb-f81cf9495233","type":"BasicTickFormatter"},"plot":{"id":"e38f5be8-33d9-494e-af8c-cc00e0d1ff1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"07988a0f-e9bc-4774-8a1a-7b4515766e4a","type":"BasicTicker"}},"id":"cd5371ac-412d-4c6e-aac4-95886fe363ae","type":"LinearAxis"},{"attributes":{},"id":"8ec43738-05ac-46fc-8b84-cb06f59294cf","type":"HelpTool"},{"attributes":{"callback":null},"id":"ea9c38f3-b51d-4630-b1e1-3bbdee25f9b8","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"8fdf874e-48bf-4631-969a-56a9886f52df","type":"Title"},{"attributes":{},"id":"f7c88897-4473-4678-8c44-a3026fb6eca6","type":"LinearScale"},{"attributes":{"source":{"id":"b22f03ec-825b-4e90-ac93-ec1ce50ccff1","type":"ColumnDataSource"}},"id":"84b98ebf-2f79-4b84-99c1-0ec5a8284085","type":"CDSView"},{"attributes":{},"id":"d41f40f4-cd17-4254-8639-b26462e951ca","type":"LinearScale"},{"attributes":{"plot":{"id":"e38f5be8-33d9-494e-af8c-cc00e0d1ff1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"07988a0f-e9bc-4774-8a1a-7b4515766e4a","type":"BasicTicker"}},"id":"71d91a23-1fb2-42bb-82c7-234465d6bfb0","type":"Grid"},{"attributes":{},"id":"7e67fb82-9870-4826-bdd3-f2e2a1ed113a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7e67fb82-9870-4826-bdd3-f2e2a1ed113a","type":"BasicTickFormatter"},"plot":{"id":"e38f5be8-33d9-494e-af8c-cc00e0d1ff1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"85f4c3a1-d9af-4411-9dc9-e4cc52716265","type":"BasicTicker"}},"id":"145730bd-2da3-428c-a3b5-159389dfd0fe","type":"LinearAxis"}],"root_ids":["e38f5be8-33d9-494e-af8c-cc00e0d1ff1c"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"bf457708-98b1-4ce2-9b86-4cf045caf630","elementid":"771704d9-6a85-4cb9-b4b0-d4fe322bd97c","modelid":"e38f5be8-33d9-494e-af8c-cc00e0d1ff1c"}];
                
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
