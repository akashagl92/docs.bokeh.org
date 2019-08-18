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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("1fe08554-ee66-46ac-b39d-46e3904a7905");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1fe08554-ee66-46ac-b39d-46e3904a7905' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"bb44360e-b132-49bd-8099-463237748129":{"roots":{"references":[{"attributes":{"overlay":{"id":"bf3d8ff0-4dc8-4e9e-ad80-9410de3f5853","type":"BoxAnnotation"},"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"}},"id":"d339fdb7-e534-4ea7-8158-27c62c8f585b","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c920436-281c-4dfb-a6e8-b70d2620c19b","type":"PanTool"},{"id":"7e5e61e9-9ba4-4331-a931-41255942b8b3","type":"WheelZoomTool"},{"id":"d339fdb7-e534-4ea7-8158-27c62c8f585b","type":"BoxZoomTool"},{"id":"ee038f10-18c0-4e26-bbff-e88222bdc519","type":"SaveTool"},{"id":"0a11c8a9-be2d-464e-89d9-3da8b82e2d5d","type":"ResetTool"},{"id":"056d84b0-3f9a-45dd-a8fb-bd7b8540e197","type":"HelpTool"}]},"id":"2b7b2fad-0903-4690-8e72-9a3ab5510c66","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0bf60d88-084a-460d-9e5f-5ee102615f22","type":"ColumnDataSource"},{"attributes":{},"id":"ca358b1e-7fe6-4e3e-ba06-a1eac8522e0e","type":"ToolEvents"},{"attributes":{},"id":"70f3c05f-977c-47d2-b2ca-00918f8ebec1","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2493a368-873c-46b6-917b-58d4f46f009b","type":"Circle"},{"attributes":{"data_source":{"id":"0bf60d88-084a-460d-9e5f-5ee102615f22","type":"ColumnDataSource"},"glyph":{"id":"2493a368-873c-46b6-917b-58d4f46f009b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"feac423f-0f4e-48d8-a85f-43a04545346c","type":"Circle"},"selection_glyph":null},"id":"20057c7a-7dc7-419c-83f8-c45e89b445bb","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"32a91c58-4b8e-4466-922a-d4e674e37940","type":"BasicTickFormatter"},"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a54cdf7-6c45-471d-b14a-518d78e1aaaf","type":"BasicTicker"}},"id":"7cc4d706-6e4e-40cf-b6b1-4d807faf3b28","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"feac423f-0f4e-48d8-a85f-43a04545346c","type":"Circle"},{"attributes":{"formatter":{"id":"70f3c05f-977c-47d2-b2ca-00918f8ebec1","type":"BasicTickFormatter"},"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9eea9b3c-e4f1-4461-9eb4-8095794e7951","type":"BasicTicker"}},"id":"1d2212fa-5bd1-48fa-9c43-daaab17e79f1","type":"LinearAxis"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9eea9b3c-e4f1-4461-9eb4-8095794e7951","type":"BasicTicker"}},"id":"34ea5ce6-7aa8-4b7c-99a7-55ba02b040d0","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"291e64ca-90e9-412c-aed3-e9966279f7da","type":"Title"},{"attributes":{"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"}},"id":"2c920436-281c-4dfb-a6e8-b70d2620c19b","type":"PanTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a54cdf7-6c45-471d-b14a-518d78e1aaaf","type":"BasicTicker"}},"id":"cf0d6431-b2b1-4b26-a680-3aa19c8f77da","type":"Grid"},{"attributes":{"below":[{"id":"7cc4d706-6e4e-40cf-b6b1-4d807faf3b28","type":"LinearAxis"}],"left":[{"id":"1d2212fa-5bd1-48fa-9c43-daaab17e79f1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7cc4d706-6e4e-40cf-b6b1-4d807faf3b28","type":"LinearAxis"},{"id":"cf0d6431-b2b1-4b26-a680-3aa19c8f77da","type":"Grid"},{"id":"1d2212fa-5bd1-48fa-9c43-daaab17e79f1","type":"LinearAxis"},{"id":"34ea5ce6-7aa8-4b7c-99a7-55ba02b040d0","type":"Grid"},{"id":"bf3d8ff0-4dc8-4e9e-ad80-9410de3f5853","type":"BoxAnnotation"},{"id":"20057c7a-7dc7-419c-83f8-c45e89b445bb","type":"GlyphRenderer"}],"title":{"id":"291e64ca-90e9-412c-aed3-e9966279f7da","type":"Title"},"tool_events":{"id":"ca358b1e-7fe6-4e3e-ba06-a1eac8522e0e","type":"ToolEvents"},"toolbar":{"id":"2b7b2fad-0903-4690-8e72-9a3ab5510c66","type":"Toolbar"},"x_range":{"id":"b0dfd145-c51f-4f3c-b1fc-f33d944d4f90","type":"DataRange1d"},"y_range":{"id":"6ce99c4c-b3bd-4673-906d-5fa88be5af16","type":"DataRange1d"}},"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b0dfd145-c51f-4f3c-b1fc-f33d944d4f90","type":"DataRange1d"},{"attributes":{"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"}},"id":"7e5e61e9-9ba4-4331-a931-41255942b8b3","type":"WheelZoomTool"},{"attributes":{},"id":"7a54cdf7-6c45-471d-b14a-518d78e1aaaf","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6ce99c4c-b3bd-4673-906d-5fa88be5af16","type":"DataRange1d"},{"attributes":{"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"}},"id":"ee038f10-18c0-4e26-bbff-e88222bdc519","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bf3d8ff0-4dc8-4e9e-ad80-9410de3f5853","type":"BoxAnnotation"},{"attributes":{},"id":"9eea9b3c-e4f1-4461-9eb4-8095794e7951","type":"BasicTicker"},{"attributes":{"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"}},"id":"0a11c8a9-be2d-464e-89d9-3da8b82e2d5d","type":"ResetTool"},{"attributes":{"plot":{"id":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8","subtype":"Figure","type":"Plot"}},"id":"056d84b0-3f9a-45dd-a8fb-bd7b8540e197","type":"HelpTool"},{"attributes":{},"id":"32a91c58-4b8e-4466-922a-d4e674e37940","type":"BasicTickFormatter"}],"root_ids":["77d7e182-6a25-446e-8cc9-9c7a0d6a87f8"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"bb44360e-b132-49bd-8099-463237748129","elementid":"1fe08554-ee66-46ac-b39d-46e3904a7905","modelid":"77d7e182-6a25-446e-8cc9-9c7a0d6a87f8"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
