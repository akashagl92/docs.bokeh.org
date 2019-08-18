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
      };var element = document.getElementById("d5625062-e990-405e-9b41-74b653caa0b6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5625062-e990-405e-9b41-74b653caa0b6' but no matching script tag was found. ")
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
                var docs_json = {"9e102792-84d2-48c7-bcfc-3d531d09edc3":{"roots":{"references":[{"attributes":{},"id":"d319ee08-05da-4fd6-af24-a5dc16d695fe","type":"ToolEvents"},{"attributes":{"formatter":{"id":"7eb7a17c-f0d9-40b4-8165-30afc7be9b32","type":"BasicTickFormatter"},"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7e6def1-c52e-4e65-9e69-9e6c5052009b","type":"BasicTicker"}},"id":"d242dffb-c269-4e82-a1d0-ea39aca8a777","type":"LinearAxis"},{"attributes":{},"id":"f7e6def1-c52e-4e65-9e69-9e6c5052009b","type":"BasicTicker"},{"attributes":{"below":[{"id":"d242dffb-c269-4e82-a1d0-ea39aca8a777","type":"LinearAxis"}],"left":[{"id":"cdfd56b1-77a6-417c-be2e-fa9112c5e7da","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d242dffb-c269-4e82-a1d0-ea39aca8a777","type":"LinearAxis"},{"id":"68f370bf-e462-4703-84fa-9d6757e67945","type":"Grid"},{"id":"cdfd56b1-77a6-417c-be2e-fa9112c5e7da","type":"LinearAxis"},{"id":"67e1e826-4c27-49f9-bc54-023f5ce70b83","type":"Grid"},{"id":"f0c52a54-b294-488e-8c23-8c8d274edb2e","type":"BoxAnnotation"},{"id":"c5126c79-086b-45e3-9518-70ebc50271c9","type":"GlyphRenderer"},{"id":"2efec3f1-bd06-415b-a427-cb1ab3ce2257","type":"GlyphRenderer"}],"title":{"id":"8640e74d-6eb8-4164-93a2-dbf4bad2609f","type":"Title"},"tool_events":{"id":"d319ee08-05da-4fd6-af24-a5dc16d695fe","type":"ToolEvents"},"toolbar":{"id":"80638bbc-107a-46ce-b791-20291cbf2fdc","type":"Toolbar"},"x_range":{"id":"bf477c70-390b-4195-9636-d22e05c8b420","type":"DataRange1d"},"x_scale":{"id":"6072c0bf-1e9f-43a3-a9bf-3b25dec21c24","type":"LinearScale"},"y_range":{"id":"6c171859-3c57-4bce-a1f5-840563918c65","type":"DataRange1d"},"y_scale":{"id":"9a7b2c6e-4341-4818-9dc3-62d31c374d1f","type":"LinearScale"}},"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"}},"id":"aeb0507d-b99c-4b6e-9edd-cae79133edf8","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a162474-033a-4518-b666-fd3187dc626e","type":"Circle"},{"attributes":{},"id":"7eb7a17c-f0d9-40b4-8165-30afc7be9b32","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"}},"id":"44d73639-6225-416d-b34d-bef36015266f","type":"SaveTool"},{"attributes":{"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"}},"id":"28bf74f6-ad3d-40da-9b74-6b757b12d67b","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"},"ticker":{"id":"658b91af-e97b-45f8-830e-27cb9663e401","type":"BasicTicker"}},"id":"67e1e826-4c27-49f9-bc54-023f5ce70b83","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f0c52a54-b294-488e-8c23-8c8d274edb2e","type":"BoxAnnotation"},{"attributes":{},"id":"658b91af-e97b-45f8-830e-27cb9663e401","type":"BasicTicker"},{"attributes":{"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"}},"id":"109f7c82-8602-4d35-9a10-8e4625072411","type":"HelpTool"},{"attributes":{"callback":null},"id":"6c171859-3c57-4bce-a1f5-840563918c65","type":"DataRange1d"},{"attributes":{},"id":"cb96d62a-b894-45aa-a1d8-4084f9708e0c","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8651306-c3b6-491c-bb73-3a3bc694c64d","type":"Line"},{"attributes":{},"id":"6072c0bf-1e9f-43a3-a9bf-3b25dec21c24","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"6875fde4-88a4-48f4-85c8-d838827a4807","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6875fde4-88a4-48f4-85c8-d838827a4807","type":"ColumnDataSource"},"glyph":{"id":"b753a9c4-1fa5-4540-ad4f-b95126dc79a7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a162474-033a-4518-b666-fd3187dc626e","type":"Circle"},"selection_glyph":null},"id":"2efec3f1-bd06-415b-a427-cb1ab3ce2257","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7e6def1-c52e-4e65-9e69-9e6c5052009b","type":"BasicTicker"}},"id":"68f370bf-e462-4703-84fa-9d6757e67945","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"8640e74d-6eb8-4164-93a2-dbf4bad2609f","type":"Title"},{"attributes":{"callback":null},"id":"bf477c70-390b-4195-9636-d22e05c8b420","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aeb0507d-b99c-4b6e-9edd-cae79133edf8","type":"PanTool"},{"id":"abc65576-487d-4856-bfcd-c7cef194d13c","type":"WheelZoomTool"},{"id":"14d0267b-3f73-47f3-9b4b-657d49aa7fed","type":"BoxZoomTool"},{"id":"44d73639-6225-416d-b34d-bef36015266f","type":"SaveTool"},{"id":"28bf74f6-ad3d-40da-9b74-6b757b12d67b","type":"ResetTool"},{"id":"109f7c82-8602-4d35-9a10-8e4625072411","type":"HelpTool"}]},"id":"80638bbc-107a-46ce-b791-20291cbf2fdc","type":"Toolbar"},{"attributes":{},"id":"9a7b2c6e-4341-4818-9dc3-62d31c374d1f","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d791f76b-2588-4356-be24-b688a4ab2d7d","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"b753a9c4-1fa5-4540-ad4f-b95126dc79a7","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"e646d4e4-72aa-4438-96b5-4c1a8f4caf88","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e646d4e4-72aa-4438-96b5-4c1a8f4caf88","type":"ColumnDataSource"},"glyph":{"id":"c8651306-c3b6-491c-bb73-3a3bc694c64d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d791f76b-2588-4356-be24-b688a4ab2d7d","type":"Line"},"selection_glyph":null},"id":"c5126c79-086b-45e3-9518-70ebc50271c9","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"f0c52a54-b294-488e-8c23-8c8d274edb2e","type":"BoxAnnotation"},"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"}},"id":"14d0267b-3f73-47f3-9b4b-657d49aa7fed","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"cb96d62a-b894-45aa-a1d8-4084f9708e0c","type":"BasicTickFormatter"},"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"},"ticker":{"id":"658b91af-e97b-45f8-830e-27cb9663e401","type":"BasicTicker"}},"id":"cdfd56b1-77a6-417c-be2e-fa9112c5e7da","type":"LinearAxis"},{"attributes":{"plot":{"id":"fe006731-75cc-4ace-a1a2-52755acf3f0c","subtype":"Figure","type":"Plot"}},"id":"abc65576-487d-4856-bfcd-c7cef194d13c","type":"WheelZoomTool"}],"root_ids":["fe006731-75cc-4ace-a1a2-52755acf3f0c"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"9e102792-84d2-48c7-bcfc-3d531d09edc3","elementid":"d5625062-e990-405e-9b41-74b653caa0b6","modelid":"fe006731-75cc-4ace-a1a2-52755acf3f0c"}];
                
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
