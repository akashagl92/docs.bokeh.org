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
      };var element = document.getElementById("1e2a24c7-8772-443f-b228-f44c1f59b40f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1e2a24c7-8772-443f-b228-f44c1f59b40f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"b540eac1-670d-4662-8888-7c4daee3a2a0":{"roots":{"references":[{"attributes":{"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"}},"id":"9600a94d-1ba3-47fd-975d-c5505ac982b1","type":"PanTool"},{"attributes":{"callback":null},"id":"f77d1f9f-b4b7-4919-9d39-0646351c888d","type":"DataRange1d"},{"attributes":{"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdc30911-1a83-4fb8-9f61-36c7e6622cf2","type":"BasicTicker"}},"id":"af6b0495-2d76-4863-bd5e-d0d63b9b4ad9","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"fb800405-6f64-446f-b13b-4c6f70e0810b","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"db49d928-213c-4196-a245-da90684f3da6","type":"LinearAxis"}],"left":[{"id":"3104902f-590f-4594-87b4-69043bc2c9c4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"db49d928-213c-4196-a245-da90684f3da6","type":"LinearAxis"},{"id":"af6b0495-2d76-4863-bd5e-d0d63b9b4ad9","type":"Grid"},{"id":"3104902f-590f-4594-87b4-69043bc2c9c4","type":"LinearAxis"},{"id":"17c92f62-df11-4e50-9d72-d2e17f9fa1ce","type":"Grid"},{"id":"9bc5d882-1ee5-4b0a-a29a-eb78887a0251","type":"BoxAnnotation"},{"id":"c890ffe6-8377-45c7-913d-17cd259009b1","type":"GlyphRenderer"}],"title":{"id":"40bca4c9-58fb-4546-b1cc-a4358b25a9f5","type":"Title"},"tool_events":{"id":"4348204c-69c3-4b99-81e7-bb6115991acf","type":"ToolEvents"},"toolbar":{"id":"e62bea86-459d-4095-882a-c886ea26c21d","type":"Toolbar"},"x_range":{"id":"f77d1f9f-b4b7-4919-9d39-0646351c888d","type":"DataRange1d"},"y_range":{"id":"3742f42e-d680-4a75-9e0b-54495e6de256","type":"DataRange1d"}},"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ebbf7e1c-bba2-4b40-88c5-b4b11888d419","type":"Cross"},{"attributes":{"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"}},"id":"02f546b2-b34d-47bc-870f-7a2c350c7c3c","type":"SaveTool"},{"attributes":{"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"}},"id":"166dac26-2819-4ab0-a032-8b54a2f21407","type":"ResetTool"},{"attributes":{"data_source":{"id":"fb800405-6f64-446f-b13b-4c6f70e0810b","type":"ColumnDataSource"},"glyph":{"id":"ebbf7e1c-bba2-4b40-88c5-b4b11888d419","type":"Cross"},"hover_glyph":null,"nonselection_glyph":{"id":"eadef8cc-1e62-4395-a226-0c2d6b1d5f13","type":"Cross"},"selection_glyph":null},"id":"c890ffe6-8377-45c7-913d-17cd259009b1","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9bc5d882-1ee5-4b0a-a29a-eb78887a0251","type":"BoxAnnotation"},{"attributes":{},"id":"e9491db1-29aa-4833-a32f-ec774ae58987","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"16d1a719-73ba-4df8-98bc-65226de22dfe","type":"BasicTicker"}},"id":"17c92f62-df11-4e50-9d72-d2e17f9fa1ce","type":"Grid"},{"attributes":{"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"}},"id":"e9a3a6c8-2df8-43c5-907d-571455ec8be5","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"eadef8cc-1e62-4395-a226-0c2d6b1d5f13","type":"Cross"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9600a94d-1ba3-47fd-975d-c5505ac982b1","type":"PanTool"},{"id":"e9a3a6c8-2df8-43c5-907d-571455ec8be5","type":"WheelZoomTool"},{"id":"972bdf68-ddfc-4ecf-bf86-b59bc7422a58","type":"BoxZoomTool"},{"id":"02f546b2-b34d-47bc-870f-7a2c350c7c3c","type":"SaveTool"},{"id":"166dac26-2819-4ab0-a032-8b54a2f21407","type":"ResetTool"},{"id":"4d1f3027-c9e3-4c14-88a2-e7344d1b52d2","type":"HelpTool"}]},"id":"e62bea86-459d-4095-882a-c886ea26c21d","type":"Toolbar"},{"attributes":{"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"}},"id":"4d1f3027-c9e3-4c14-88a2-e7344d1b52d2","type":"HelpTool"},{"attributes":{},"id":"5082f664-4e4f-424c-a6ce-11370e97095b","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"40bca4c9-58fb-4546-b1cc-a4358b25a9f5","type":"Title"},{"attributes":{"formatter":{"id":"e9491db1-29aa-4833-a32f-ec774ae58987","type":"BasicTickFormatter"},"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdc30911-1a83-4fb8-9f61-36c7e6622cf2","type":"BasicTicker"}},"id":"db49d928-213c-4196-a245-da90684f3da6","type":"LinearAxis"},{"attributes":{"callback":null},"id":"3742f42e-d680-4a75-9e0b-54495e6de256","type":"DataRange1d"},{"attributes":{},"id":"4348204c-69c3-4b99-81e7-bb6115991acf","type":"ToolEvents"},{"attributes":{},"id":"16d1a719-73ba-4df8-98bc-65226de22dfe","type":"BasicTicker"},{"attributes":{"overlay":{"id":"9bc5d882-1ee5-4b0a-a29a-eb78887a0251","type":"BoxAnnotation"},"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"}},"id":"972bdf68-ddfc-4ecf-bf86-b59bc7422a58","type":"BoxZoomTool"},{"attributes":{},"id":"fdc30911-1a83-4fb8-9f61-36c7e6622cf2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5082f664-4e4f-424c-a6ce-11370e97095b","type":"BasicTickFormatter"},"plot":{"id":"c9b17d28-f3de-41eb-8267-e46e08142f3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"16d1a719-73ba-4df8-98bc-65226de22dfe","type":"BasicTicker"}},"id":"3104902f-590f-4594-87b4-69043bc2c9c4","type":"LinearAxis"}],"root_ids":["c9b17d28-f3de-41eb-8267-e46e08142f3a"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"b540eac1-670d-4662-8888-7c4daee3a2a0","elementid":"1e2a24c7-8772-443f-b228-f44c1f59b40f","modelid":"c9b17d28-f3de-41eb-8267-e46e08142f3a"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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