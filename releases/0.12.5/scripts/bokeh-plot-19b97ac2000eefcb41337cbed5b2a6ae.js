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
      };var element = document.getElementById("5e7cc124-41bb-49af-8d7e-8a448c98c0ff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5e7cc124-41bb-49af-8d7e-8a448c98c0ff' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"ffb0703c-84b5-4fd1-bf55-71885f8b92b7":{"roots":{"references":[{"attributes":{},"id":"13b708e7-92dc-4de9-a502-5125463529c7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"eef9e705-10f6-480d-86f4-8ef1fbe44b04","type":"BasicTickFormatter"},"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"},"ticker":{"id":"087536b7-a1e4-4578-b826-4e45e89cff51","type":"BasicTicker"}},"id":"69d54737-7bf9-42b4-a129-dc5450ebbb0a","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c0c85b36-c594-4759-aae1-5d4953cbeca7","type":"DataRange1d"},{"attributes":{"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"}},"id":"51b0eb68-0bf3-49b2-a3e0-35735ac6c78f","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24a50746-c402-486c-b9f2-325efe58856f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"},"ticker":{"id":"eedfda45-2e0f-4935-9ee8-486203fb11af","type":"BasicTicker"}},"id":"6263e2f2-7624-4b1b-94d9-36e6ba8777b2","type":"Grid"},{"attributes":{"below":[{"id":"2da73b2c-1af1-4f0c-b7b6-14a0bfdc0d93","type":"LinearAxis"}],"left":[{"id":"69d54737-7bf9-42b4-a129-dc5450ebbb0a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2da73b2c-1af1-4f0c-b7b6-14a0bfdc0d93","type":"LinearAxis"},{"id":"6263e2f2-7624-4b1b-94d9-36e6ba8777b2","type":"Grid"},{"id":"69d54737-7bf9-42b4-a129-dc5450ebbb0a","type":"LinearAxis"},{"id":"0454ae44-2efa-4b4f-a7f4-91e7087a54b1","type":"Grid"},{"id":"24a50746-c402-486c-b9f2-325efe58856f","type":"BoxAnnotation"},{"id":"ea5f6a61-1d12-4d99-8490-58a0f68e4e02","type":"GlyphRenderer"}],"title":{"id":"cc08205b-4a05-428d-9d51-184f8dd31cbb","type":"Title"},"tool_events":{"id":"236cecc9-63f0-4cb8-a5be-44143c6507f6","type":"ToolEvents"},"toolbar":{"id":"b803fa75-b21a-46f3-a73b-dca1dbba36e8","type":"Toolbar"},"x_range":{"id":"c0c85b36-c594-4759-aae1-5d4953cbeca7","type":"DataRange1d"},"y_range":{"id":"70492ae1-f589-47ab-977d-d3ec5df7c98c","type":"DataRange1d"}},"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"eedfda45-2e0f-4935-9ee8-486203fb11af","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"20d5e4ae-2bd2-4f74-8c53-5491ada830c6","type":"PanTool"},{"id":"e1be107f-4cac-4884-ab8c-e6c21ad6b876","type":"WheelZoomTool"},{"id":"2eb7892c-f245-4522-be57-70e29d3addc8","type":"BoxZoomTool"},{"id":"e73e26e2-28c4-478f-902b-7381e39d755a","type":"SaveTool"},{"id":"51b0eb68-0bf3-49b2-a3e0-35735ac6c78f","type":"ResetTool"},{"id":"86f6515c-f14d-4b71-9bfb-c68edb882798","type":"HelpTool"}]},"id":"b803fa75-b21a-46f3-a73b-dca1dbba36e8","type":"Toolbar"},{"attributes":{},"id":"236cecc9-63f0-4cb8-a5be-44143c6507f6","type":"ToolEvents"},{"attributes":{"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"}},"id":"86f6515c-f14d-4b71-9bfb-c68edb882798","type":"HelpTool"},{"attributes":{"callback":null},"id":"70492ae1-f589-47ab-977d-d3ec5df7c98c","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"cc08205b-4a05-428d-9d51-184f8dd31cbb","type":"Title"},{"attributes":{"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"}},"id":"20d5e4ae-2bd2-4f74-8c53-5491ada830c6","type":"PanTool"},{"attributes":{"overlay":{"id":"24a50746-c402-486c-b9f2-325efe58856f","type":"BoxAnnotation"},"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"}},"id":"2eb7892c-f245-4522-be57-70e29d3addc8","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"},"ticker":{"id":"087536b7-a1e4-4578-b826-4e45e89cff51","type":"BasicTicker"}},"id":"0454ae44-2efa-4b4f-a7f4-91e7087a54b1","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6fecf820-2b2d-4abb-8ca5-8e8e825f6d0f","type":"Line"},{"attributes":{"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"}},"id":"e1be107f-4cac-4884-ab8c-e6c21ad6b876","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"da5929d1-49d3-463b-9c38-92929a246972","type":"Line"},{"attributes":{"data_source":{"id":"b9ea6d00-c475-4a98-9bae-5a63404d8fd2","type":"ColumnDataSource"},"glyph":{"id":"6fecf820-2b2d-4abb-8ca5-8e8e825f6d0f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"da5929d1-49d3-463b-9c38-92929a246972","type":"Line"},"selection_glyph":null},"id":"ea5f6a61-1d12-4d99-8490-58a0f68e4e02","type":"GlyphRenderer"},{"attributes":{},"id":"eef9e705-10f6-480d-86f4-8ef1fbe44b04","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]}},"id":"b9ea6d00-c475-4a98-9bae-5a63404d8fd2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"}},"id":"e73e26e2-28c4-478f-902b-7381e39d755a","type":"SaveTool"},{"attributes":{"formatter":{"id":"13b708e7-92dc-4de9-a502-5125463529c7","type":"BasicTickFormatter"},"plot":{"id":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7","subtype":"Figure","type":"Plot"},"ticker":{"id":"eedfda45-2e0f-4935-9ee8-486203fb11af","type":"BasicTicker"}},"id":"2da73b2c-1af1-4f0c-b7b6-14a0bfdc0d93","type":"LinearAxis"},{"attributes":{},"id":"087536b7-a1e4-4578-b826-4e45e89cff51","type":"BasicTicker"}],"root_ids":["fe414f7d-2f91-4d75-9c8c-94cb694f1ee7"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"ffb0703c-84b5-4fd1-bf55-71885f8b92b7","elementid":"5e7cc124-41bb-49af-8d7e-8a448c98c0ff","modelid":"fe414f7d-2f91-4d75-9c8c-94cb694f1ee7"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
