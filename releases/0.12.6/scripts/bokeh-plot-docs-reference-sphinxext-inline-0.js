(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("e584a879-9b18-4dfb-90e5-19fa06b96c7b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e584a879-9b18-4dfb-90e5-19fa06b96c7b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"46ae3f51-1e1c-473f-baa7-a4e379cfed4d":{"roots":{"references":[{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7278688-2ac8-4a9e-9d13-aa02d3ac6ee8","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b37003f7-ba95-42b4-b6c8-da59959101da","type":"Circle"},{"attributes":{},"id":"28b43f00-129f-4f60-a5d2-ea3830c27943","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"26d7325e-a104-46cf-a6ef-6547b74102fd","type":"BasicTicker"}},"id":"02642eef-4832-45dc-88ae-523cdad45da3","type":"Grid"},{"attributes":{},"id":"26d7325e-a104-46cf-a6ef-6547b74102fd","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d82e8bd8-2e4e-44ec-a720-d8bf9c58bbfa","type":"BasicTickFormatter"},"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"26d7325e-a104-46cf-a6ef-6547b74102fd","type":"BasicTicker"}},"id":"fd6bb7a3-6ab9-4ac9-8fc1-0fc8a22a9e02","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"71ab837d-b3a0-443a-921a-e753354e7822","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"71ab837d-b3a0-443a-921a-e753354e7822","type":"ColumnDataSource"},"glyph":{"id":"b37003f7-ba95-42b4-b6c8-da59959101da","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dff6e71b-dfff-4212-b8ca-9f72c928a8e1","type":"Circle"},"selection_glyph":null},"id":"6b8a6d0f-0e0c-49e2-a185-64be579ef8b1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"c7209b54-63e2-4f23-ba72-7b4b82e8944a","type":"DataRange1d"},{"attributes":{"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"}},"id":"edc43131-353e-4bd2-a0ad-60c62bd55470","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"20083337-5455-443e-b848-691cd126a6f7","type":"Line"},{"attributes":{"below":[{"id":"fd6bb7a3-6ab9-4ac9-8fc1-0fc8a22a9e02","type":"LinearAxis"}],"left":[{"id":"4c205227-4f8d-4450-8221-f31bfe74335d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fd6bb7a3-6ab9-4ac9-8fc1-0fc8a22a9e02","type":"LinearAxis"},{"id":"02642eef-4832-45dc-88ae-523cdad45da3","type":"Grid"},{"id":"4c205227-4f8d-4450-8221-f31bfe74335d","type":"LinearAxis"},{"id":"be48493b-cbdb-452f-af61-7e2982d0041b","type":"Grid"},{"id":"27c462ca-b84b-4a92-b2b0-775a3f01cbdd","type":"BoxAnnotation"},{"id":"f7a704cd-4e1c-4065-aab4-1e96ebc9791b","type":"GlyphRenderer"},{"id":"6b8a6d0f-0e0c-49e2-a185-64be579ef8b1","type":"GlyphRenderer"}],"title":{"id":"9161d4f3-0de8-4359-8f88-cb14923a2fe8","type":"Title"},"tool_events":{"id":"978cd161-6f01-4270-bc09-d059e1b8e201","type":"ToolEvents"},"toolbar":{"id":"f4323fd6-80ea-41ba-b0c2-898324a3a82e","type":"Toolbar"},"x_range":{"id":"cfbb0fe2-8eb4-4f03-8d17-534a54e3b993","type":"DataRange1d"},"x_scale":{"id":"af4dda1b-4442-4e99-91a7-129a4e0daebb","type":"LinearScale"},"y_range":{"id":"c7209b54-63e2-4f23-ba72-7b4b82e8944a","type":"DataRange1d"},"y_scale":{"id":"f8787153-32a5-45d9-8e04-e25e6b0f10e6","type":"LinearScale"}},"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"27c462ca-b84b-4a92-b2b0-775a3f01cbdd","type":"BoxAnnotation"},"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"}},"id":"e4e07f39-0c00-43d2-8eab-583fea0041fc","type":"BoxZoomTool"},{"attributes":{},"id":"af4dda1b-4442-4e99-91a7-129a4e0daebb","type":"LinearScale"},{"attributes":{"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"}},"id":"63a67e35-eca9-4393-963d-823918595de8","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d6b2382-18a2-4f59-8934-52842b06c451","type":"BasicTicker"}},"id":"be48493b-cbdb-452f-af61-7e2982d0041b","type":"Grid"},{"attributes":{"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"}},"id":"355c371e-cf07-4467-bc3f-4e38d379c3e2","type":"SaveTool"},{"attributes":{},"id":"f8787153-32a5-45d9-8e04-e25e6b0f10e6","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"1f68e3b5-2996-498c-8a1e-7476254f1789","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1f68e3b5-2996-498c-8a1e-7476254f1789","type":"ColumnDataSource"},"glyph":{"id":"e7278688-2ac8-4a9e-9d13-aa02d3ac6ee8","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20083337-5455-443e-b848-691cd126a6f7","type":"Line"},"selection_glyph":null},"id":"f7a704cd-4e1c-4065-aab4-1e96ebc9791b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"}},"id":"db6d359c-a7c8-49ce-aca7-f01de323b10f","type":"HelpTool"},{"attributes":{"plot":null,"text":"example"},"id":"9161d4f3-0de8-4359-8f88-cb14923a2fe8","type":"Title"},{"attributes":{"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"}},"id":"5ab48804-32d4-4e31-b7c6-a04b7acf6a55","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dff6e71b-dfff-4212-b8ca-9f72c928a8e1","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27c462ca-b84b-4a92-b2b0-775a3f01cbdd","type":"BoxAnnotation"},{"attributes":{},"id":"978cd161-6f01-4270-bc09-d059e1b8e201","type":"ToolEvents"},{"attributes":{},"id":"8d6b2382-18a2-4f59-8934-52842b06c451","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5ab48804-32d4-4e31-b7c6-a04b7acf6a55","type":"PanTool"},{"id":"63a67e35-eca9-4393-963d-823918595de8","type":"WheelZoomTool"},{"id":"e4e07f39-0c00-43d2-8eab-583fea0041fc","type":"BoxZoomTool"},{"id":"355c371e-cf07-4467-bc3f-4e38d379c3e2","type":"SaveTool"},{"id":"edc43131-353e-4bd2-a0ad-60c62bd55470","type":"ResetTool"},{"id":"db6d359c-a7c8-49ce-aca7-f01de323b10f","type":"HelpTool"}]},"id":"f4323fd6-80ea-41ba-b0c2-898324a3a82e","type":"Toolbar"},{"attributes":{"callback":null},"id":"cfbb0fe2-8eb4-4f03-8d17-534a54e3b993","type":"DataRange1d"},{"attributes":{},"id":"d82e8bd8-2e4e-44ec-a720-d8bf9c58bbfa","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"28b43f00-129f-4f60-a5d2-ea3830c27943","type":"BasicTickFormatter"},"plot":{"id":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d6b2382-18a2-4f59-8934-52842b06c451","type":"BasicTicker"}},"id":"4c205227-4f8d-4450-8221-f31bfe74335d","type":"LinearAxis"}],"root_ids":["9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"46ae3f51-1e1c-473f-baa7-a4e379cfed4d","elementid":"e584a879-9b18-4dfb-90e5-19fa06b96c7b","modelid":"9b88ad8f-88bf-47d6-bd1d-13fb2eb140bb"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
