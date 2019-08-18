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
      };var element = document.getElementById("6f0ca831-fa6a-472d-a39a-6e2b8d5f0e47");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f0ca831-fa6a-472d-a39a-6e2b8d5f0e47' but no matching script tag was found. ")
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
                var docs_json = {"cbd802a9-29ce-4363-95ca-7c609034ca17":{"roots":{"references":[{"attributes":{},"id":"ae3be0f3-8f14-4637-8c4d-7f87afa419b5","type":"LinearScale"},{"attributes":{"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"}},"id":"a0a45ee3-1c8a-481e-b32c-c56bd5b68c84","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5a064389-4b85-4ed3-a9da-3cad70e9c456","type":"BoxAnnotation"},{"attributes":{},"id":"2dfa9f46-1f15-4d80-9559-f5f48058bc84","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"}},"id":"e47fb008-0c61-4944-9fd5-9ad7eca66db3","type":"PanTool"},{"attributes":{"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"}},"id":"6df7c33e-f536-49d9-a2b5-da79de59983d","type":"SaveTool"},{"attributes":{"below":[{"id":"3051ba3a-f206-415c-b1cd-7ad8a2e715c3","type":"LinearAxis"}],"left":[{"id":"768f108d-d034-43fb-a393-6034cc0ff01b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3051ba3a-f206-415c-b1cd-7ad8a2e715c3","type":"LinearAxis"},{"id":"6bd5ad6d-f231-48d9-accd-f9ceffc9a6a8","type":"Grid"},{"id":"768f108d-d034-43fb-a393-6034cc0ff01b","type":"LinearAxis"},{"id":"040d11d0-ba27-4365-8990-78a0c4b8ab5e","type":"Grid"},{"id":"5a064389-4b85-4ed3-a9da-3cad70e9c456","type":"BoxAnnotation"},{"id":"1e20e1bb-23a3-49fe-9b79-da3315f9d9e6","type":"GlyphRenderer"}],"title":{"id":"2cef3f0c-c89d-4974-aa22-6aebfd15c1dd","type":"Title"},"tool_events":{"id":"01e74145-1027-4d1b-94e5-15e68e8a333c","type":"ToolEvents"},"toolbar":{"id":"0c95e4e5-c35f-484a-8d12-643fbaccb64b","type":"Toolbar"},"x_range":{"id":"4589e3b1-96b0-496e-b76a-bbd4fff99131","type":"DataRange1d"},"x_scale":{"id":"4e526f95-6649-415b-a76d-c6aed87990b9","type":"LinearScale"},"y_range":{"id":"8b9efc57-ece9-4921-94d9-381ca4a3c0b0","type":"DataRange1d"},"y_scale":{"id":"ae3be0f3-8f14-4637-8c4d-7f87afa419b5","type":"LinearScale"}},"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e47fb008-0c61-4944-9fd5-9ad7eca66db3","type":"PanTool"},{"id":"02e249a5-5095-4c35-a0b6-643a4a184a7f","type":"WheelZoomTool"},{"id":"47923fd8-31b2-48b4-b17a-0e25487a8f14","type":"BoxZoomTool"},{"id":"6df7c33e-f536-49d9-a2b5-da79de59983d","type":"SaveTool"},{"id":"481bc727-cfe7-46a6-9854-3a28e930462e","type":"ResetTool"},{"id":"a0a45ee3-1c8a-481e-b32c-c56bd5b68c84","type":"HelpTool"}]},"id":"0c95e4e5-c35f-484a-8d12-643fbaccb64b","type":"Toolbar"},{"attributes":{"formatter":{"id":"2dfa9f46-1f15-4d80-9559-f5f48058bc84","type":"BasicTickFormatter"},"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"},"ticker":{"id":"397c208c-b7be-4864-8e9c-03db78369d77","type":"BasicTicker"}},"id":"3051ba3a-f206-415c-b1cd-7ad8a2e715c3","type":"LinearAxis"},{"attributes":{"overlay":{"id":"5a064389-4b85-4ed3-a9da-3cad70e9c456","type":"BoxAnnotation"},"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"}},"id":"47923fd8-31b2-48b4-b17a-0e25487a8f14","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"},"ticker":{"id":"675ca3fe-72bf-492f-b7bc-a29cd596f44c","type":"BasicTicker"}},"id":"040d11d0-ba27-4365-8990-78a0c4b8ab5e","type":"Grid"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"decd3626-a1f2-460d-b98c-138cf1b8febc","type":"MultiLine"},{"attributes":{"plot":null,"text":""},"id":"2cef3f0c-c89d-4974-aa22-6aebfd15c1dd","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"560eb53a-da61-4aad-af85-eec3e268a862","type":"MultiLine"},{"attributes":{"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"}},"id":"481bc727-cfe7-46a6-9854-3a28e930462e","type":"ResetTool"},{"attributes":{"data_source":{"id":"e62c1406-532e-4395-bae6-e8bfd3d23cc7","type":"ColumnDataSource"},"glyph":{"id":"decd3626-a1f2-460d-b98c-138cf1b8febc","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"560eb53a-da61-4aad-af85-eec3e268a862","type":"MultiLine"},"selection_glyph":null},"id":"1e20e1bb-23a3-49fe-9b79-da3315f9d9e6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"},"ticker":{"id":"397c208c-b7be-4864-8e9c-03db78369d77","type":"BasicTicker"}},"id":"6bd5ad6d-f231-48d9-accd-f9ceffc9a6a8","type":"Grid"},{"attributes":{},"id":"fb9df2da-d434-427f-b9d5-1c42418ae8e8","type":"BasicTickFormatter"},{"attributes":{},"id":"397c208c-b7be-4864-8e9c-03db78369d77","type":"BasicTicker"},{"attributes":{},"id":"4e526f95-6649-415b-a76d-c6aed87990b9","type":"LinearScale"},{"attributes":{"formatter":{"id":"fb9df2da-d434-427f-b9d5-1c42418ae8e8","type":"BasicTickFormatter"},"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"},"ticker":{"id":"675ca3fe-72bf-492f-b7bc-a29cd596f44c","type":"BasicTicker"}},"id":"768f108d-d034-43fb-a393-6034cc0ff01b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8b9efc57-ece9-4921-94d9-381ca4a3c0b0","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys","line_alpha","line_color"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"e62c1406-532e-4395-bae6-e8bfd3d23cc7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a","subtype":"Figure","type":"Plot"}},"id":"02e249a5-5095-4c35-a0b6-643a4a184a7f","type":"WheelZoomTool"},{"attributes":{},"id":"01e74145-1027-4d1b-94e5-15e68e8a333c","type":"ToolEvents"},{"attributes":{},"id":"675ca3fe-72bf-492f-b7bc-a29cd596f44c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4589e3b1-96b0-496e-b76a-bbd4fff99131","type":"DataRange1d"}],"root_ids":["1ddfa40f-436e-486d-8fc6-a4cb143bd79a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"cbd802a9-29ce-4363-95ca-7c609034ca17","elementid":"6f0ca831-fa6a-472d-a39a-6e2b8d5f0e47","modelid":"1ddfa40f-436e-486d-8fc6-a4cb143bd79a"}];
                
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
