document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("879d5e1a-d28b-410d-aa50-3872d345fb39");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '879d5e1a-d28b-410d-aa50-3872d345fb39' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"4a2339af-499b-49af-b7a7-59be18c1df04":{"roots":{"references":[{"attributes":{},"id":"39c52442-41e5-427f-9a08-0aa855698fad","type":"ToolEvents"},{"attributes":{"callback":null},"id":"33a0c1b2-a7d2-43eb-8d47-4cb0f79da9f1","type":"DataRange1d"},{"attributes":{"callback":null},"id":"6303cd9a-0953-4850-b155-1b3434a200f7","type":"DataRange1d"},{"attributes":{"below":[{"id":"0e0f1115-7908-45be-90e4-d6de9d1a5371","type":"LinearAxis"}],"left":[{"id":"23491ec0-e023-45ea-b0a5-0ef09fa302ce","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0e0f1115-7908-45be-90e4-d6de9d1a5371","type":"LinearAxis"},{"id":"8382d04b-043b-4428-a4b9-3fc2c711c1bb","type":"Grid"},{"id":"23491ec0-e023-45ea-b0a5-0ef09fa302ce","type":"LinearAxis"},{"id":"46ee46f0-5901-4eb3-a7c2-d83a2345be23","type":"Grid"},{"id":"32019019-d01b-49a3-9e3f-54743d3d581c","type":"BoxAnnotation"},{"id":"5f74d693-b6ea-4d17-86eb-4d30f7f33911","type":"GlyphRenderer"}],"title":{"id":"516f924e-463a-44e0-81a2-9478944706c9","type":"Title"},"tool_events":{"id":"39c52442-41e5-427f-9a08-0aa855698fad","type":"ToolEvents"},"toolbar":{"id":"03da83ff-0dc6-468f-ae4b-fc854c59197c","type":"Toolbar"},"x_range":{"id":"6303cd9a-0953-4850-b155-1b3434a200f7","type":"DataRange1d"},"y_range":{"id":"33a0c1b2-a7d2-43eb-8d47-4cb0f79da9f1","type":"DataRange1d"}},"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7d1c6f36-d24a-4045-adcd-46219e740900","type":"BasicTicker"},{"attributes":{},"id":"48e3b557-4391-4dfa-b8d9-17d4b567dafb","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32019019-d01b-49a3-9e3f-54743d3d581c","type":"BoxAnnotation"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"5a7f03db-6a8b-4498-8a0c-3f5ef3dcbed3","type":"Quad"},{"attributes":{"formatter":{"id":"71ab664a-4f64-4456-a52f-55f11091abaf","type":"BasicTickFormatter"},"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d1c6f36-d24a-4045-adcd-46219e740900","type":"BasicTicker"}},"id":"0e0f1115-7908-45be-90e4-d6de9d1a5371","type":"LinearAxis"},{"attributes":{},"id":"9eecc2b3-e4ec-4655-a5ab-221e940dd8bf","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9eecc2b3-e4ec-4655-a5ab-221e940dd8bf","type":"BasicTickFormatter"},"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"},"ticker":{"id":"48e3b557-4391-4dfa-b8d9-17d4b567dafb","type":"BasicTicker"}},"id":"23491ec0-e023-45ea-b0a5-0ef09fa302ce","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"ad094a7f-2f8b-4c2d-86d3-a0d58403beec","type":"Quad"},{"attributes":{"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"}},"id":"d19b45fc-4797-498d-8a37-d872fd4c7cba","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"}},"id":"50f95153-0bc4-460f-bec7-af10d51762cd","type":"HelpTool"},{"attributes":{"overlay":{"id":"32019019-d01b-49a3-9e3f-54743d3d581c","type":"BoxAnnotation"},"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"}},"id":"45ce3116-c6b8-448a-9825-730ac420578a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"}},"id":"7618e439-a57d-4d05-ac28-8229a02aa3f4","type":"ResetTool"},{"attributes":{"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d1c6f36-d24a-4045-adcd-46219e740900","type":"BasicTicker"}},"id":"8382d04b-043b-4428-a4b9-3fc2c711c1bb","type":"Grid"},{"attributes":{"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"}},"id":"7a5b8d48-58d5-4af5-bdd4-1d64ed20d9c8","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"},"ticker":{"id":"48e3b557-4391-4dfa-b8d9-17d4b567dafb","type":"BasicTicker"}},"id":"46ee46f0-5901-4eb3-a7c2-d83a2345be23","type":"Grid"},{"attributes":{"data_source":{"id":"5e0ff6d6-5e0d-44c6-81bf-bf6a630b0ee8","type":"ColumnDataSource"},"glyph":{"id":"5a7f03db-6a8b-4498-8a0c-3f5ef3dcbed3","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"ad094a7f-2f8b-4c2d-86d3-a0d58403beec","type":"Quad"},"selection_glyph":null},"id":"5f74d693-b6ea-4d17-86eb-4d30f7f33911","type":"GlyphRenderer"},{"attributes":{},"id":"71ab664a-4f64-4456-a52f-55f11091abaf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22","subtype":"Figure","type":"Plot"}},"id":"92cf8c92-b7b3-461a-8b74-1c9012d01f32","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["top","left","right","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"5e0ff6d6-5e0d-44c6-81bf-bf6a630b0ee8","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"516f924e-463a-44e0-81a2-9478944706c9","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7a5b8d48-58d5-4af5-bdd4-1d64ed20d9c8","type":"PanTool"},{"id":"d19b45fc-4797-498d-8a37-d872fd4c7cba","type":"WheelZoomTool"},{"id":"45ce3116-c6b8-448a-9825-730ac420578a","type":"BoxZoomTool"},{"id":"92cf8c92-b7b3-461a-8b74-1c9012d01f32","type":"SaveTool"},{"id":"7618e439-a57d-4d05-ac28-8229a02aa3f4","type":"ResetTool"},{"id":"50f95153-0bc4-460f-bec7-af10d51762cd","type":"HelpTool"}]},"id":"03da83ff-0dc6-468f-ae4b-fc854c59197c","type":"Toolbar"}],"root_ids":["5c8495b0-a8f9-4f4b-b578-862fd06e3b22"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"4a2339af-499b-49af-b7a7-59be18c1df04","elementid":"879d5e1a-d28b-410d-aa50-3872d345fb39","modelid":"5c8495b0-a8f9-4f4b-b578-862fd06e3b22"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});