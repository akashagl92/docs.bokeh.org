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
      };var element = document.getElementById("ea82823e-3f59-4366-8683-5bc52aec6ccd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ea82823e-3f59-4366-8683-5bc52aec6ccd' but no matching script tag was found. ")
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
                  var docs_json = {"71f62146-8abf-4b32-8cd0-d137990c07a0":{"roots":{"references":[{"attributes":{},"id":"3bfeccaf-97b6-4242-956b-ca0f9b1f1cc2","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"f40ec77d-d6eb-4c06-9d84-e5a5e34ebd7b","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c5600222-8be0-403f-94bf-1252b56e53be","type":"BoxAnnotation"},{"attributes":{},"id":"c497e2e1-b615-4c6e-8a80-17cccac567a2","type":"BasicTicker"},{"attributes":{"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"}},"id":"4c9b55fb-5646-49e3-aa9e-d41af6af89a4","type":"ResetTool"},{"attributes":{"callback":null},"id":"26f33214-8116-45ee-bde5-c6ef2d48833b","type":"DataRange1d"},{"attributes":{"overlay":{"id":"c5600222-8be0-403f-94bf-1252b56e53be","type":"BoxAnnotation"},"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"}},"id":"f6d71494-46b7-48fd-a675-8b506a0effb9","type":"BoxZoomTool"},{"attributes":{},"id":"c0bf97ca-9455-49ae-8f2c-10bf8cff5e87","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"e45c4bfc-5ab3-4fb4-aabb-b00d561ccbc1","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"}},"id":"38ec56f5-f363-468c-b3b4-d665f1b5db85","type":"PanTool"},{"attributes":{},"id":"1407b6c9-0888-4a3e-a2f7-a3e902fced2c","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c497e2e1-b615-4c6e-8a80-17cccac567a2","type":"BasicTicker"}},"id":"de03ccf1-9339-4327-9a38-e37327638be8","type":"Grid"},{"attributes":{"formatter":{"id":"1407b6c9-0888-4a3e-a2f7-a3e902fced2c","type":"BasicTickFormatter"},"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3bfeccaf-97b6-4242-956b-ca0f9b1f1cc2","type":"BasicTicker"}},"id":"bcf06f47-0a11-40ac-b557-44f6a563d96f","type":"LinearAxis"},{"attributes":{"below":[{"id":"bcf06f47-0a11-40ac-b557-44f6a563d96f","type":"LinearAxis"}],"left":[{"id":"093631a0-682d-43f6-9bf4-936ef2006163","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bcf06f47-0a11-40ac-b557-44f6a563d96f","type":"LinearAxis"},{"id":"9068acf5-1230-4e07-bffa-aac2a9a83b3b","type":"Grid"},{"id":"093631a0-682d-43f6-9bf4-936ef2006163","type":"LinearAxis"},{"id":"de03ccf1-9339-4327-9a38-e37327638be8","type":"Grid"},{"id":"c5600222-8be0-403f-94bf-1252b56e53be","type":"BoxAnnotation"},{"id":"fb08a4cf-9b71-48b3-8488-5b6308d73bc1","type":"GlyphRenderer"}],"title":{"id":"f40ec77d-d6eb-4c06-9d84-e5a5e34ebd7b","type":"Title"},"tool_events":{"id":"c0bf97ca-9455-49ae-8f2c-10bf8cff5e87","type":"ToolEvents"},"toolbar":{"id":"0bd22df8-234b-4f19-adfa-2e9af3f6a491","type":"Toolbar"},"x_range":{"id":"26f33214-8116-45ee-bde5-c6ef2d48833b","type":"DataRange1d"},"y_range":{"id":"cda57555-daf4-4b74-ada7-16d4690a2493","type":"DataRange1d"}},"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"5e3419ab-1655-4335-8dc7-616b7d1e78b5","type":"BasicTickFormatter"},"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c497e2e1-b615-4c6e-8a80-17cccac567a2","type":"BasicTicker"}},"id":"093631a0-682d-43f6-9bf4-936ef2006163","type":"LinearAxis"},{"attributes":{"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3bfeccaf-97b6-4242-956b-ca0f9b1f1cc2","type":"BasicTicker"}},"id":"9068acf5-1230-4e07-bffa-aac2a9a83b3b","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"38ec56f5-f363-468c-b3b4-d665f1b5db85","type":"PanTool"},{"id":"50ec36cf-e8f8-4067-b848-ebada6d7bd5c","type":"WheelZoomTool"},{"id":"f6d71494-46b7-48fd-a675-8b506a0effb9","type":"BoxZoomTool"},{"id":"cec33d74-9fda-45eb-94c2-ca8d776cddfa","type":"SaveTool"},{"id":"4c9b55fb-5646-49e3-aa9e-d41af6af89a4","type":"ResetTool"},{"id":"ca0f9b50-26b4-4911-b506-3160f352c86a","type":"HelpTool"}]},"id":"0bd22df8-234b-4f19-adfa-2e9af3f6a491","type":"Toolbar"},{"attributes":{"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"}},"id":"ca0f9b50-26b4-4911-b506-3160f352c86a","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17c598fc-91cb-47c1-8f2b-ff40b1c1291a","type":"Triangle"},{"attributes":{"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"}},"id":"cec33d74-9fda-45eb-94c2-ca8d776cddfa","type":"SaveTool"},{"attributes":{},"id":"5e3419ab-1655-4335-8dc7-616b7d1e78b5","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b99c84c5-93f9-45cf-bc67-2d2c23b207bb","type":"Triangle"},{"attributes":{"data_source":{"id":"e45c4bfc-5ab3-4fb4-aabb-b00d561ccbc1","type":"ColumnDataSource"},"glyph":{"id":"17c598fc-91cb-47c1-8f2b-ff40b1c1291a","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"b99c84c5-93f9-45cf-bc67-2d2c23b207bb","type":"Triangle"},"selection_glyph":null},"id":"fb08a4cf-9b71-48b3-8488-5b6308d73bc1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"cda57555-daf4-4b74-ada7-16d4690a2493","type":"DataRange1d"},{"attributes":{"plot":{"id":"6f5c815b-8367-4886-9738-faf097026b9e","subtype":"Figure","type":"Plot"}},"id":"50ec36cf-e8f8-4067-b848-ebada6d7bd5c","type":"WheelZoomTool"}],"root_ids":["6f5c815b-8367-4886-9738-faf097026b9e"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"71f62146-8abf-4b32-8cd0-d137990c07a0","elementid":"ea82823e-3f59-4366-8683-5bc52aec6ccd","modelid":"6f5c815b-8367-4886-9738-faf097026b9e"}];
                  
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